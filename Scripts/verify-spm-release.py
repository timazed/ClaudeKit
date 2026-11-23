#!/usr/bin/env python3
"""Build a fresh Xcode consumer of a tagged Git URL and run its embedded fixture."""
import argparse
import json
from pathlib import Path
import plistlib
import shutil
import subprocess
import tempfile
import time
from urllib.parse import unquote, urlsplit

root = Path(__file__).resolve().parents[1]
scheme = "AssistantRuntimeDemoApp"
bundle = "ai.claudekit.spm-release-check"


def output(*args):
    return subprocess.check_output(args, text=True).strip()


def simulator():
    devices = json.loads(output("xcrun", "simctl", "list", "devices", "available", "-j"))
    for runtime, entries in sorted(devices["devices"].items(), reverse=True):
        if ".iOS-" in runtime and int(runtime.split(".iOS-")[1].split("-")[0]) >= 18:
            for device in entries:
                if "iPhone" in device["name"]:
                    return device["udid"]
    raise RuntimeError("Install an iOS 18 or later iPhone simulator runtime")


def verify(work, repository, version, device):
    # Copy only the consumer app. Its parent has no local ClaudeKit package.
    app_root = work / "DemoApp"
    shutil.copytree(root / "DemoApp" / (scheme + ".xcodeproj"), app_root / (scheme + ".xcodeproj"),
                    ignore=shutil.ignore_patterns("project.xcworkspace", "xcuserdata"))
    shutil.copytree(root / "LibraryDemo/Sources", work / "LibraryDemo/Sources")
    project = app_root / (scheme + ".xcodeproj")
    pbx = project / "project.pbxproj"
    contents = json.loads(output("plutil", "-convert", "json", "-o", "-", str(pbx)))
    packages = [obj for obj in contents["objects"].values() if obj["isa"] == "XCLocalSwiftPackageReference"]
    if len(packages) != 1:
        raise RuntimeError("Expected one ClaudeKit dependency in the demo project")
    packages[0].clear()
    packages[0].update(isa="XCRemoteSwiftPackageReference", repositoryURL=repository,
                       requirement={"kind": "exactVersion", "version": version})
    for obj in contents["objects"].values():
        if obj.get("buildSettings", {}).get("PRODUCT_BUNDLE_IDENTIFIER") == "ai.claudekit.demoapp":
            obj["buildSettings"]["PRODUCT_BUNDLE_IDENTIFIER"] = bundle
    pbx.write_bytes(plistlib.dumps(contents))
    derived = work / "build"
    subprocess.run(["xcodebuild", "-project", str(project), "-scheme", scheme, "-destination",
                    "id=" + device, "-derivedDataPath", str(derived), "build"], check=True)
    resolved = json.loads((project / "project.xcworkspace/xcshareddata/swiftpm/Package.resolved").read_text())
    location = unquote(urlsplit(repository).path) if repository.startswith("file://") else repository
    if not any(pin["location"].rstrip("/") == location.rstrip("/") and pin["state"].get("version") == version
               for pin in resolved["pins"]):
        raise RuntimeError("Xcode did not resolve the requested Git URL and exact version")

    output("xcrun", "simctl", "bootstatus", device, "-b")
    app = derived / "Build/Products/Debug-iphonesimulator" / (scheme + ".app")
    output("xcrun", "simctl", "install", device, str(app))
    documents = Path(output("xcrun", "simctl", "get_app_container", device, bundle, "data")) / "Documents"
    for flag, proof, calls in [("--verify", "library-proof.json", 4), ("--verify-resume", "library-resume.json", 0)]:
        started = time.time_ns()
        output("xcrun", "simctl", "launch", "--terminate-running-process", device, bundle, "--fixture", flag)
        for _ in range(120):
            failure = documents / "library-failure.json"
            if failure.exists() and failure.stat().st_mtime_ns >= started:
                raise RuntimeError(failure.read_text())
            result = documents / proof
            if result.exists() and result.stat().st_mtime_ns >= started:
                data = json.loads(result.read_text())
                if not (data["passed"] and data["fixture"] and data["nativeToolCalls"] == calls):
                    raise RuntimeError("Unexpected demo verification result")
                print(f'{version}: {data["sequence"]}, {calls} native tool calls', flush=True)
                break
            time.sleep(1)
        else:
            raise TimeoutError(proof)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("repository", help="Git URL, including a file:// URL for a local release candidate")
    parser.add_argument("version")
    parser.add_argument("--simulator")
    args = parser.parse_args()
    with tempfile.TemporaryDirectory(prefix="claudekit-consumer-") as directory:
        verify(Path(directory), args.repository, args.version, args.simulator or simulator())
