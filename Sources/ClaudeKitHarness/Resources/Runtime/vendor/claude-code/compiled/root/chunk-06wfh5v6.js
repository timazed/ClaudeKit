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
var chunk_06wfh5v6_exports = {};
__export(chunk_06wfh5v6_exports, {
  f2r: () => f2r,
  o6s: () => o6s,
  pwa: () => pwa,
  s6s: () => s6s
});
module.exports = __toCommonJS(chunk_06wfh5v6_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_syr33dp2 = require("/$bunfs/root/chunk-syr33dp2.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_8j4mv1cb = require("/$bunfs/root/chunk-8j4mv1cb.js");
var import_chunk_r3mm3x33 = require("/$bunfs/root/chunk-r3mm3x33.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_promises = require("fs/promises");
var import_os = require("os");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
var z = 1500, A = 262144, X = 32, j = 16, E = /^[0-9][0-9A-Za-z.+_-]{0,23}$/, U = /^[a-z0-9_]{1,16}$/, J = /^[a-z0-9._-]{1,24}$/, G = /^[A-Za-z0-9_.-]{1,64}$/, Y = ["swift", "xcodebuild", "xcrun", "pod", "fastlane", "carthage", "adb", "emulator", "sdkmanager", "flutter", "dart", "xcodes", "kubectl", "helm", "terraform", "bazel", "bazelisk", "nix", "conda", "mamba", "pipx", "podman", "nerdctl", "nvidia-smi", "psql", "mysql", "redis-cli", ...import_chunk_c203g5kd.wLs], q = /* @__PURE__ */ new Set(["xcodebuild", "swift", "swiftc", "xcrun", "git", "make", "clang", "clang++", "gcc", "g++", "python3", "pip3"]), W = "/System/Library/CoreServices/SystemVersion.plist", y = "/Applications", Z = "/Library/Developer/CommandLineTools/usr/bin", K = "/usr/local/cuda/version.json", Q = "/proc/driver/nvidia/version", ee = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ cuda: (0, import_chunk_adx6804h.c)({ version: (0, import_chunk_adx6804h.n)() }) }));
function T() {
  let r = (0, import_chunk_865at33z.b)("tengu_bridge_host_profile", "off");
  return import_chunk_xcgcdx61.XRt.find((e) => e === r) ?? "off";
}
function f2r(r) {
  if (te()) return "off";
  let e = (f) => f?.remoteControl?.shareHostProfile, o = [...(0, import_chunk_2yx6c1y2.Rp)(), (0, import_chunk_2yx6c1y2._e)("policySettings"), (0, import_chunk_2yx6c1y2._e)("flagSettings"), (0, import_chunk_2yx6c1y2._e)("userSettings")].map(e), _ = import_chunk_xcgcdx61.XRt.find((f) => o.includes(f)) ?? r, g = [_, e((0, import_chunk_2yx6c1y2.vl)("userSettings")), ...import_chunk_xzvhvaa2.WA.filter(import_chunk_xzvhvaa2.rn).map((f) => e((0, import_chunk_2yx6c1y2._e)(f)))];
  return import_chunk_xcgcdx61.XRt.find((f) => g.includes(f)) ?? _;
}
function te() {
  return [...(0, import_chunk_2yx6c1y2.Rw)(), ...(0, import_chunk_2yx6c1y2.QT)("flagSettings"), ...(0, import_chunk_2yx6c1y2.QT)("userSettings"), ...import_chunk_xzvhvaa2.WA.filter(import_chunk_xzvhvaa2.rn).flatMap((e) => (0, import_chunk_2yx6c1y2.QT)(e))].some((e) => {
    if (e.path === "") return true;
    if (e.severity !== "warning") return true;
    if (e.statusOnly) return false;
    return e.path === import_chunk_6mfepmbb.JMs || e.path === "remoteControl" || e.path.startsWith("remoteControl.");
  });
}
async function pwa(r) {
  if (r === void 0) return;
  try {
    let e = T();
    if (e === "off") return;
    let o = await (0, import_chunk_2yx6c1y2.Zhe)();
    (0, import_chunk_r3mm3x33.pr)();
    let _ = f2r(e), g = (0, import_chunk_2yx6c1y2.xRt)(), f;
    (0, import_chunk_2yx6c1y2.YPe)(o.mdm, o.hkcu, o.wslInherits, o.whereAsked);
    try {
      (0, import_chunk_r3mm3x33.pr)(), f = f2r(e);
    } finally {
      (0, import_chunk_2yx6c1y2.YPe)(g.mdm, g.hkcu, g.wslInherits, g.whereAsked), (0, import_chunk_r3mm3x33.pr)();
    }
    let P = import_chunk_xcgcdx61.XRt.find((h) => h === _ || h === f) ?? "off";
    if (P === "off") return;
    if (P === "basic" && r.mcp_servers !== void 0) {
      let { mcp_servers: h, ...w } = r;
      return w;
    }
    return r;
  } catch (e) {
    (0, import_chunk_k449cc64.i)(e);
    return;
  }
}
async function o6s(r) {
  try {
    let e = T();
    if (e === "off") return;
    let o = f2r(e);
    if (o === "off") {
      (0, import_chunk_y53wbr8a.a)("tengu_bridge_host_profile_collect", { outcome: (0, import_chunk_78g0060s.S)("disabled") });
      return;
    }
    return await oe({ includeMcpServers: o === "full", signal: r });
  } catch (e) {
    (0, import_chunk_k449cc64.i)(e);
    return;
  }
}
async function oe({ includeMcpServers: r, signal: e }) {
  let o = Date.now(), _ = H();
  try {
    let g = await s6s({ includeMcpServers: r, signal: e });
    if (g === void 0) return;
    let { profile: f, complete: P, aborted: h } = g;
    if ((0, import_chunk_y53wbr8a.a)("tengu_bridge_host_profile_collect", { outcome: P ? (0, import_chunk_78g0060s.S)("ok") : h ? (0, import_chunk_78g0060s.S)("aborted") : (0, import_chunk_78g0060s.S)("partial"), duration_ms: Date.now() - o, tools_count: f.tools.length, mcp_count: f.mcp_servers?.length ?? 0, platform: (0, import_chunk_78g0060s.fe)(_), arch: (0, import_chunk_78g0060s.fe)("arm64"), wsl: f.wsl === true }), P) (0, import_chunk_cqa9hrgx.u)("bridge_host_profile");
    else if (!h) (0, import_chunk_cqa9hrgx.l)("bridge_host_profile", "deadline");
    return f;
  } catch (g) {
    (0, import_chunk_k449cc64.i)(g), (0, import_chunk_y53wbr8a.a)("tengu_bridge_host_profile_collect", { outcome: (0, import_chunk_78g0060s.S)("error"), duration_ms: Date.now() - o, platform: (0, import_chunk_78g0060s.fe)(_), arch: (0, import_chunk_78g0060s.fe)("arm64") }), (0, import_chunk_cqa9hrgx.m)("bridge_host_profile", "error");
    return;
  }
}
async function s6s({ includeMcpServers: r, signal: e, alsoLookFor: o = [], maxTools: _ = X }) {
  let g = H();
  if (g === void 0) return;
  let f = [...Y, ...o], P = { pathTools: /* @__PURE__ */ new Set(), mcpServers: [] }, h = [re(g, P), ie(P), (0, import_chunk_c203g5kd.vLr)(f, P.pathTools)];
  if (g === "darwin") h.push(ne(P), se(P));
  if (g === "linux") h.push(ae(P));
  if (r) h.push(ce(P));
  let w = (0, import_chunk_5appeerh.me)(Promise.all(h.map((O) => O.catch((C) => {
    (0, import_chunk_k449cc64.i)(C);
  }))).then(() => true), z).then((O) => O === true), v = false, D = e === void 0 ? await w : await (0, import_chunk_5appeerh.Tn)(w, e, () => new import_chunk_jv7av99m.Ie()).catch(() => (v = true, false));
  return { profile: { platform: g, ...U.test("arm64") && { arch: "arm64" }, ...P.osVersion !== void 0 && { os_version: P.osVersion }, ...P.distro !== void 0 && { distro: P.distro }, ...(0, import_chunk_cg8dqz0a.x)() === "wsl" && { wsl: true }, tools: le(g, P, f, _), ...r && { mcp_servers: P.mcpServers.slice(0, j) }, collected_at: (/* @__PURE__ */ new Date()).toISOString() }, complete: D, aborted: v };
}
function H() {
  switch ("darwin") {
    case "darwin":
    case "linux":
    case "win32":
      return "darwin";
    default:
      return;
  }
}
async function re(r, e) {
  switch (r) {
    case "darwin":
      e.osVersion = await R(W, "ProductVersion");
      return;
    case "linux": {
      let o = await (0, import_chunk_cg8dqz0a.M0o)();
      if (o?.linuxDistroVersion && E.test(o.linuxDistroVersion)) e.osVersion = o.linuxDistroVersion;
      let _ = o?.linuxDistroId?.toLowerCase();
      if (_ && J.test(_)) e.distro = _;
      return;
    }
    case "win32": {
      let o = (0, import_os.release)();
      if (E.test(o)) e.osVersion = o;
      return;
    }
  }
}
async function R(r, e) {
  let o = await (0, import_chunk_xfj2cwfv.Uu)(r, A);
  if (o === null) return;
  let _ = (0, import_chunk_8j4mv1cb.p2r)(o), g = (0, import_chunk_8j4mv1cb.jkn)(_) ? _[e] : void 0;
  return typeof g === "string" && E.test(g) ? g : void 0;
}
async function ne(r) {
  let e;
  try {
    e = await (0, import_promises.readdir)(y);
  } catch {
    return;
  }
  let o = e.filter((f) => /^Xcode.*\.app$/.test(f)).sort((f, P) => P.localeCompare(f, void 0, { numeric: true }));
  if (o.length === 0) return;
  let _ = o.includes("Xcode.app") ? "Xcode.app" : o[0], g = await R((0, import_path.join)(y, _, "Contents", "version.plist"), "CFBundleShortVersionString");
  r.xcode = g === void 0 ? "xcode" : `xcode@${g}`;
}
async function se(r) {
  if (await I(Z)) r.clt = "clt";
}
async function ie(r) {
  let e = import_chunk_c203g5kd.s.ANDROID_HOME ?? import_chunk_c203g5kd.s.ANDROID_SDK_ROOT;
  if (e === void 0 || !await (0, import_chunk_c203g5kd.Yra)(e) || !await I(e)) return;
  r.androidSdk = "android-sdk";
}
async function ae(r) {
  let e = await (0, import_chunk_xfj2cwfv.Uu)(K, A);
  if (e !== null) {
    let o = ee().safeParse((0, import_chunk_0jve1fep.et)(e, false));
    r.cuda = o.success && E.test(o.data.cuda.version) ? `cuda@${o.data.cuda.version}` : "cuda";
    return;
  }
  try {
    await (0, import_promises.readFile)(Q, "utf8"), r.cuda = "cuda";
  } catch {
  }
}
async function I(r) {
  try {
    return (await (0, import_promises.stat)(r)).isDirectory();
  } catch {
    return false;
  }
}
async function ce(r) {
  let e = /* @__PURE__ */ new Set();
  for (let o of import_chunk_bzyb60p0.vfe) {
    if (o === "project") continue;
    let _;
    try {
      _ = Object.keys((0, import_chunk_bzyb60p0.F_)(o, { expandVars: false }).servers);
    } catch (f) {
      (0, import_chunk_w578pjby.t)(`[bridge:host-profile] could not read ${o} MCP config: ${(0, import_chunk_jv7av99m.d)(f)}`, { level: "warn" });
      continue;
    }
    let g = o === "managed" ? "enterprise" : o;
    for (let f of _) {
      if (!G.test(f) || e.has(f)) continue;
      e.add(f), r.mcpServers.push({ name: f, scope: g });
    }
  }
}
function le(r, e, o, _) {
  let g = r !== "darwin" || e.xcode !== void 0 || e.clt !== void 0, f = o.filter((h) => e.pathTools.has(h) && (g || !q.has(h))), P = [e.xcode, e.clt, ...f.filter((h) => h === "swift"), e.androidSdk, e.cuda, ...f.filter((h) => h !== "swift")].filter((h) => h !== void 0 && import_chunk_syr33dp2.Obs.test(h));
  return (0, import_chunk_4smdap7r.M)(P).slice(0, _);
}
