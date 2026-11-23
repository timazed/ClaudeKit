const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_em330z26_exports = {};
__export(chunk_em330z26_exports, {
  M3o: () => M3o,
  WLa: () => WLa,
  m9r: () => m9r
});
module.exports = __toCommonJS(chunk_em330z26_exports);
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_43nz5n02 = require("/$bunfs/root/chunk-43nz5n02.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var x = 65536, D = 20, v = [["pnpm-lock.yaml", "pnpm"], ["yarn.lock", "yarn"], ["bun.lock", "bun"], ["bun.lockb", "bun"], ["package-lock.json", "npm"], ["npm-shrinkwrap.json", "npm"], ["deno.lock", "deno"], ["poetry.lock", "poetry"], ["uv.lock", "uv"], ["Pipfile.lock", "pipenv"], ["requirements.txt", "pip"], ["Cargo.lock", "cargo"], ["go.sum", "go"], ["composer.lock", "composer"], ["Gemfile.lock", "bundler"], ["gradle.lockfile", "gradle"], ["packages.lock.json", "nuget"], ["Podfile.lock", "cocoapods"], ["Package.resolved", "swift"], ["mix.lock", "mix"], ["pubspec.lock", "pub"], ["conan.lock", "other"]], I = /(?:registry|index-url)\s*=\s*["']?(https?:\/\/[^\s"'`]+)/g, N = /\[\[tool\.(?:poetry\.source|uv\.index)\]\][^[]*?url\s*=\s*["'](https?:\/\/[^\s"'`]+)/g, O = /npmRegistryServer\s*:\s*["']?(https?:\/\/[^\s"'`]+)/g, P = /(?:index|registry)\s*=\s*["']?(?:sparse\+)?(https?:\/\/[^\s"'`]+)/g, T = /\b(?:VAULT_ADDR|SOPS_[A-Z_]*|op read|aws secretsmanager|gcloud secrets)\b/, A = /\bcom\.android\.(?:application|library|test|dynamic-feature|tools\.build:gradle)\b/, M = /\b(?:enable_language\s*\(\s*CUDA|LANGUAGES\b[^)\n]{0,200}\bCUDA\b|find_package\s*\(\s*CUDA|cuda_add_(?:executable|library))/i, W = /^[^\S\r\n\u2028\u2029]*-[^\S\r\n\u2028\u2029]*(?:[a-z][\w.-]*::)?(?:cudatoolkit|cuda-toolkit|cudnn|pytorch-cuda)\b/m, F = ["settings.gradle", "settings.gradle.kts", "build.gradle", "build.gradle.kts"], G = ["environment.yml", "environment.yaml"], U = ["ios", "iosapp", "macos", "apple"], z = 5, X = 1048576, B = ["config", "configs", "configuration", "configurations", "xcconfig", "xcconfigs"], H = 20, K = /\/\/.*$/gm, Y = /* @__PURE__ */ new Set(["registry.npmjs.org", "registry.yarnpkg.com", "pypi.org", "pypi.python.org", "files.pythonhosted.org", "crates.io", "index.crates.io", "static.crates.io", "proxy.golang.org", "localhost", "127.0.0.1", "0.0.0.0", "[::1]", "registry.npmmirror.com", "registry.npm.taobao.org", "pypi.tuna.tsinghua.edu.cn", "mirrors.aliyun.com"]);
function J(t) {
  let e = t?.toLowerCase() ?? null;
  if (!e) return "none";
  if (e.includes("jfrog")) return "jfrog";
  if (e.includes("nexus") || e.includes("sonatype")) return "nexus";
  if (e.includes("github")) return "github";
  if (e.includes("gitlab")) return "gitlab";
  if (e === "pkgs.dev.azure.com" || e.endsWith(".visualstudio.com") || e.endsWith(".azure.com")) return "azure";
  if (e.endsWith(".amazonaws.com")) return "aws";
  if (e.endsWith(".pkg.dev") || e.endsWith(".googleapis.com")) return "gcp";
  return "other";
}
function V(t) {
  try {
    let e = new URL(t).hostname.toLowerCase();
    return e && /^[a-z0-9.[][a-z0-9.:\]-]*$/.test(e) ? e : null;
  } catch {
    return null;
  }
}
function q(t) {
  try {
    let e = new URL(t);
    return (0, import_chunk_43nz5n02.Ro)(e.hostname) && /^\/rust-lang\/crates\.io-index(?:\.git)?\/?$/.test(e.pathname);
  } catch {
    return false;
  }
}
function Z(t, e) {
  let n = [], s = t.split(`
`).filter((a) => !/^\s*[#;]/.test(a)).join(`
`), r = new RegExp(e.source, e.flags);
  for (let a of s.matchAll(r)) {
    if (a[1] === void 0 || q(a[1])) continue;
    let i = V(a[1]);
    if (i !== null) n.push(i);
  }
  return n;
}
async function d(t, e) {
  try {
    let n = await (0, import_chunk_w5s307zm.$M)((0, import_path.join)(t, e), x, { noFollow: true });
    return typeof n === "string" ? n : null;
  } catch {
    return null;
  }
}
async function j(t) {
  try {
    return (await (0, import_promises.lstat)(t)).isFile();
  } catch {
    return false;
  }
}
async function Q(t, e, n) {
  let s = [...[".npmrc", "pip.conf", "pyproject.toml", "bunfig.toml"].filter((r) => e.has(r)).map((r) => [r, I]), ...e.has("pyproject.toml") ? [["pyproject.toml", N]] : [], ...e.has(".yarnrc.yml") ? [[".yarnrc.yml", O]] : [], ...n ? [[".cargo/config.toml", P], [".cargo/config", P]] : []];
  for (let [r, a] of s) {
    if (r.startsWith(".cargo/") && !await j((0, import_path.join)(t, r))) continue;
    let i = await d(t, r);
    if (i === null) continue;
    for (let u of Z(i, a)) if (!Y.has(u)) return { has_private_registry: true, private_registry_host_class: J(u) };
  }
  return { has_private_registry: false, private_registry_host_class: "none" };
}
async function ee(t, e) {
  if (e.some((s) => {
    let r = s.toLowerCase();
    return r === ".sops.yaml" || r === ".sops.yml";
  })) return true;
  let n = e.filter((s) => {
    let r = s.toLowerCase();
    return r === ".envrc" || r.endsWith(".yml") || r.endsWith(".yaml") || r.endsWith(".toml") || r.endsWith(".sh");
  }).sort().slice(0, D);
  for (let s of n) {
    let r = await d(t, s);
    if (r !== null && T.test(r)) return true;
  }
  return false;
}
async function te(t) {
  try {
    return (await (0, import_promises.lstat)(t)).isDirectory();
  } catch {
    return false;
  }
}
async function ne(t) {
  try {
    let e = (0, import_path.join)(t, ".github", "workflows");
    if (!await te(e)) return false;
    return (await (0, import_promises.readdir)(e)).some((s) => s.endsWith(".yml") || s.endsWith(".yaml"));
  } catch {
    return false;
  }
}
function oe(t) {
  for (let [e, n] of v) if (t.has(e)) return n;
  return "none";
}
async function re(t, e, n) {
  for (let s of F) {
    if (!e.has(s)) continue;
    let r = await d(t, s);
    if (r !== null && A.test(y(r))) return true;
  }
  if (n) {
    let s = (0, import_path.join)(t, "gradle", "libs.versions.toml");
    if (await j(s)) {
      let r = await d(t, "gradle/libs.versions.toml");
      if (r !== null && A.test(y(r))) return true;
    }
  }
  return false;
}
function y(t) {
  return t.replace(/^[^\S\r\n\u2028\u2029]*(?:#|\/\/).*$/gm, "");
}
async function se(t, e) {
  if (e.has("CMakeLists.txt")) {
    let n = await d(t, "CMakeLists.txt");
    if (n !== null && M.test(y(n))) return true;
  }
  for (let n of G) {
    if (!e.has(n)) continue;
    let s = await d(t, n);
    if (s !== null && W.test(y(s))) return true;
  }
  return false;
}
function ie(t, e) {
  return [...t, ...e].some((n) => {
    let s = n.toLowerCase();
    return s.endsWith(".xcodeproj") || s.endsWith(".xcworkspace");
  }) || t.includes("Podfile");
}
async function h(t) {
  let e = await (0, import_promises.readdir)(t, { withFileTypes: true }).catch((n) => (0, import_chunk_w5s307zm.g6e)(n) ? [] : null);
  if (e === null) return null;
  return { dir: t, fileNames: e.filter((n) => n.isFile()).map((n) => n.name), dirNames: e.filter((n) => n.isDirectory()).map((n) => n.name) };
}
function C(t, e) {
  return e.flatMap((n) => {
    let s = t.dirNames.find((r) => r.toLowerCase() === n);
    return s === void 0 ? [] : [(0, import_path.join)(t.dir, s)];
  });
}
async function ae(t) {
  let e = t.fileNames.find((s) => s.toLowerCase() === "project.pbxproj");
  if (e === void 0) return "";
  let n = await (0, import_chunk_w5s307zm.$M)((0, import_path.join)(t.dir, e), X, { noFollow: true, fromTail: true });
  if (n === "unreadable") return null;
  return n?.content ?? "";
}
async function E(t) {
  if (t.fileNames.includes("AndroidManifest.xml")) return true;
  return re(t.dir, new Set(t.fileNames), t.dirNames.includes("gradle"));
}
async function le(t, e, n) {
  if (await E({ dir: t, fileNames: e, dirNames: n })) return { hasAndroidProject: true, hasAndroidAppProject: true };
  let s = n.find((a) => a.toLowerCase() === "android"), r = s === void 0 ? null : await h((0, import_path.join)(t, s));
  return { hasAndroidProject: false, hasAndroidAppProject: r !== null && await E(r) };
}
async function ce(t, e, n) {
  let s = { dir: t, fileNames: e, dirNames: n }, r = C(s, U), a = [...await Promise.all(r.map(h)), s], i = a.includes(null), u = a.filter((o) => o !== null), g = u.some((o) => ie(o.fileNames, o.dirNames)), _ = u.flatMap((o) => o.dirNames.filter((l) => l.toLowerCase().endsWith(".xcodeproj")).sort().map((l) => ({ parent: o, path: (0, import_path.join)(o.dir, l) }))).slice(0, z), p = /* @__PURE__ */ new Set();
  for (let { parent: o, path: l } of _) {
    let m = await h(l), w = m === null ? null : await ae(m);
    if (w === null) i = true;
    else if (M3o.test(w)) return { hasXcodeProject: g, hasIosAppProject: true };
    else if (w.includes("baseConfigurationReference")) p.add(o);
  }
  let f = await Promise.all([...p].flatMap((o) => [o, ...C(o, B).map(h)]));
  i ||= f.includes(null);
  let b = f.filter((o) => o !== null).flatMap((o) => o.fileNames.filter((l) => l.toLowerCase().endsWith(".xcconfig")).sort().map((l) => ({ dir: o.dir, name: l }))).slice(0, H);
  for (let { dir: o, name: l } of b) {
    let m = await d(o, l);
    if (m === null) i = true;
    else if (M3o.test(m.replace(K, ""))) return { hasXcodeProject: g, hasIosAppProject: true };
  }
  return { hasXcodeProject: g, hasIosAppProject: i ? null : false };
}
async function ue(t, e, n, s, r) {
  let a = e.map((i) => i.toLowerCase());
  if (s) return "xcode";
  if (r) return "android";
  if (a.some((i) => i.endsWith(".cu") || i.endsWith(".cuh")) || await se(t, n)) return "cuda";
  if (a.some((i) => i.endsWith(".sln") || i.endsWith(".csproj"))) return "dotnet";
  if (a.some((i) => (i.endsWith(".bat") || i.endsWith(".cmd") || i.endsWith(".ps1")) && i !== "gradlew.bat" && i !== "gradlew.cmd" && i !== "mvnw.bat" && i !== "mvnw.cmd")) return "windows_scripts";
  return "none";
}
async function de(t) {
  let e = await (0, import_promises.readdir)(t, { withFileTypes: true }), n = e.filter((o) => o.isFile()).map((o) => o.name), s = e.filter((o) => o.isDirectory()).map((o) => o.name), r = new Set(n), a = n.map((o) => o.toLowerCase()), i = new Set(s.map((o) => o.toLowerCase())), [u, g, _, p, f] = await Promise.all([Q(t, r, s.includes(".cargo")), ee(t, n), s.includes(".github") ? ne(t) : Promise.resolve(false), ce(t, n, s), le(t, n, s)]), b = await ue(t, n, r, p.hasXcodeProject, f.hasAndroidProject);
  return { has_dockerfile: a.some((o) => o === "dockerfile" || o.startsWith("dockerfile.") || o.endsWith(".dockerfile")), has_compose: a.some((o) => /^(docker-)?compose(\..+)?\.ya?ml$/.test(o)), has_devcontainer: i.has(".devcontainer") || a.includes(".devcontainer.json"), has_nix: ["flake.nix", "default.nix", "shell.nix"].some((o) => r.has(o)), has_bazel: ["WORKSPACE", "WORKSPACE.bazel", "MODULE.bazel", "BUILD", "BUILD.bazel", ".bazelrc"].some((o) => r.has(o)), lockfile_family: oe(r), has_env_file: a.some((o) => (o === ".env" || o.startsWith(".env.")) && !/\.(example|sample|template|dist)$/.test(o)), has_ci_config: _ || i.has(".circleci") || i.has(".buildkite") || a.some((o) => [".gitlab-ci.yml", "jenkinsfile", "azure-pipelines.yml", ".travis.yml", "bitbucket-pipelines.yml"].includes(o)), ...u, has_secrets_manager_refs: g, has_xcode_project: p.hasXcodeProject, has_ios_app_project: p.hasIosAppProject, has_android_project: f.hasAndroidProject, has_android_app_project: f.hasAndroidAppProject, os_locked_toolchain: b };
}
async function fe(t) {
  try {
    return await de(t);
  } catch {
    return null;
  }
}
async function m9r(t) {
  try {
    if ((0, import_chunk_t7fzcstv.bt)()) return null;
    let e = (0, import_chunk_w5s307zm.dr)((0, import_chunk_18rsj2ts.pe)());
    if (e === null) return null;
    if (await (0, import_chunk_w5s307zm.Cxt)(e)) return null;
    let n = (0, import_chunk_w5s307zm.Ju)().markersByRoot;
    if (t?.fresh === true) n.delete(e);
    let s = (0, import_chunk_w5s307zm.m6e)(n, e, fe), r = await s;
    if ((r === null || r.has_ios_app_project === null) && n.peek(e) === s) n.delete(e);
    return r;
  } catch {
    return null;
  }
}
var WLa = 500, R = String.raw`(?:\[[^\]\n]{0,100}\]){0,4}["']?\]?[ \t]{0,20}(?:=>|[=:])[ \t]{0,20}[\["' ]{0,8}`, S = String.raw`iphone(?:os|simulator)[\d.]{0,12}\b`, M3o = new RegExp([String.raw`\bSDKROOT${R}${S}`, String.raw`\bTARGETED_DEVICE_FAMILY${R}(?:\d,){0,8}[12]\b`, String.raw`\bSUPPORTED_PLATFORMS${R}[^;\n]{0,200}?\b${S}`].join("|"));
