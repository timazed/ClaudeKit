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
var chunk_h3t3td58_exports = {};
__export(chunk_h3t3td58_exports, {
  $U: () => $U,
  FYe: () => FYe,
  STr: () => STr,
  bTr: () => bTr,
  jws: () => jws,
  lji: () => lji,
  ml: () => ml,
  q2e: () => q2e,
  wTr: () => wTr
});
module.exports = __toCommonJS(chunk_h3t3td58_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_4s4nxvxt = require("/$bunfs/root/chunk-4s4nxvxt.js");
var import_url = require("url");
var import_url2 = require("url");
function i(e, r) {
  if (e === "macos") return { command: "open", args: ["-R", "--", r] };
  if (e === "windows") return { command: "explorer", args: [`/select,${r}`] };
  return { command: "dbus-send", args: ["--session", "--print-reply", "--dest=org.freedesktop.FileManager1", "--type=method_call", "/org/freedesktop/FileManager1", "org.freedesktop.FileManager1.ShowItems", `array:string:${(0, import_url2.pathToFileURL)(r).href.replaceAll(",", "%2C")}`, "string:"] };
}
var p = { useCwd: true, useToolMemoryCgroup: false }, lji = /* @__PURE__ */ new Set(["https:", "http:", "vscode:", "vscode-insiders:", "cursor:", "windsurf:", "zed:", "jetbrains:", "idea:", "slack:", "linear:", "notion:", "figma:"]);
function f(e) {
  let r;
  try {
    r = new URL(e);
  } catch (o) {
    throw Error(`Invalid URL format: ${e}`);
  }
  if (r.protocol !== "http:" && r.protocol !== "https:") throw Error(`Invalid URL protocol: must use http:// or https://, got ${r.protocol}`);
}
function q2e(e) {
  try {
    return f(e), true;
  } catch {
    return false;
  }
}
function jws(e) {
  return `Couldn't open your browser. Open ${(0, import_chunk_tp3c5q2s.Xb)(e)} yourself.`;
}
async function STr(e) {
  try {
    let o = "open", { code: n } = await (0, import_chunk_7fsmgfxx.kt)(o, [e], p);
    return n === 0;
  } catch (r) {
    return false;
  }
}
async function h(e) {
  try {
    let r = (0, import_chunk_cg8dqz0a.x)();
    if (r === "macos") {
      let { command: a, args: l } = i("macos", e), { code: c } = await (0, import_chunk_7fsmgfxx.kt)(a, l);
      return c === 0;
    }
    if (r === "windows") {
      let { command: a, args: l } = i("windows", e), { exitCode: c } = await (0, import_chunk_7fsmgfxx.kt)(a, l);
      return c !== void 0;
    }
    let { command: o, args: n } = i("linux", e), { code: u } = await (0, import_chunk_7fsmgfxx.kt)(o, n);
    return u === 0;
  } catch (r) {
    return false;
  }
}
async function bTr(e) {
  let r;
  try {
    r = new URL(e);
  } catch {
    return false;
  }
  let o = r.protocol;
  if (o === "file:") {
    if (r.host !== "") return false;
    try {
      let n = (0, import_url.fileURLToPath)(e);
      if ((0, import_chunk_z6pfqf6e.ja)(n) || (0, import_chunk_4s4nxvxt.Bcn)(n)) return false;
      return await h(n);
    } catch {
      return false;
    }
  }
  if (!lji.has(o)) return (0, import_chunk_w578pjby.t)(`[hyperlink] refusing to dispatch clicked link with non-allowlisted scheme ${o}`, { level: "warn" }), false;
  return !wTr(await d(e));
}
function $U() {
  if (!process.stdout.isTTY) return true;
  if (import_chunk_c203g5kd.s.BROWSER && import_chunk_c203g5kd.s.BROWSER !== "true") return false;
  if (import_chunk_c203g5kd.s.SSH_CONNECTION) return true;
  return m();
}
function m() {
  return (0, import_chunk_cg8dqz0a.x)() === "linux" && !import_chunk_c203g5kd.s.DISPLAY && !import_chunk_c203g5kd.s.WAYLAND_DISPLAY;
}
function wTr(e) {
  return !e.ok && e.reason !== "timeout";
}
async function FYe(e) {
  try {
    f(e);
  } catch (r) {
    return { ok: false, reason: "invalid_url", detail: r instanceof Error ? r.message : String(r) };
  }
  return d(e);
}
async function ml(e) {
  return (await FYe(e)).ok;
}
async function d(e) {
  try {
    let r = (0, import_chunk_f9x2f6cx.pf)()?.browser, o = r !== void 0 ? r ?? void 0 : import_chunk_c203g5kd.s.BROWSER, n = "darwin";
    if (!o && m()) return { ok: false, reason: "no_display" };
    return y(await (0, import_chunk_7fsmgfxx.kt)(o || "open", [e], p));
  } catch (r) {
    return { ok: false, reason: "unknown", detail: r instanceof Error ? r.message : String(r) };
  }
}
function y(e) {
  if (e.code === 0) return { ok: true };
  let r = e.error ?? "", o = e.stderr || r || `exit ${e.code}`;
  if (e.timedOut === true) return { ok: false, reason: "timeout", detail: o };
  if (e.code === 127 || r.includes("ENOENT")) return { ok: false, reason: "opener_missing", detail: o };
  if (r.includes("EACCES") || r.includes("EPERM")) return { ok: false, reason: "spawn_error", detail: o };
  if (e.code > 0) return { ok: false, reason: "nonzero_exit", detail: o };
  return { ok: false, reason: "unknown", detail: o };
}
