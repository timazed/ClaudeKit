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
var chunk_vw137skj_exports = {};
__export(chunk_vw137skj_exports, {
  A5e: () => A5e,
  AZa: () => AZa,
  CZa: () => CZa,
  Cbt: () => Cbt,
  Dq: () => Dq,
  EZa: () => EZa,
  F6: () => F6,
  Hq: () => Hq,
  Jao: () => Jao,
  Kao: () => Kao,
  Nne: () => Nne,
  PT: () => PT,
  RZa: () => RZa,
  TZa: () => TZa,
  Tbt: () => Tbt,
  Vao: () => Vao,
  Wot: () => Wot,
  Xao: () => Xao,
  Yao: () => Yao,
  __: () => __,
  cls: () => cls,
  dls: () => dls,
  f1t: () => f1t,
  kSe: () => kSe,
  kZa: () => kZa,
  n0n: () => n0n,
  qao: () => qao,
  smr: () => smr,
  t0n: () => t0n,
  trn: () => trn,
  vZa: () => vZa,
  wZa: () => wZa,
  zao: () => zao
});
module.exports = __toCommonJS(chunk_vw137skj_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_0f2gasyz = require("/$bunfs/root/chunk-0f2gasyz.js");
var import_chunk_5cey7gvv = require("/$bunfs/root/chunk-5cey7gvv.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_wn8z7ghn = require("/$bunfs/root/chunk-wn8z7ghn.js");
var import_chunk_wzdjp7c0 = require("/$bunfs/root/chunk-wzdjp7c0.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_fs = require("fs");
var import_os = require("os");
var import_buffer = require("buffer");
var import_path = require("path");
var import_child_process = require("child_process");
var dls = "tengu_floating_raccoon", F = 4194304, _ = 524288;
function cls(e) {
  return U((0, import_fs.readFileSync)(`/$bunfs/root/${e}`), [(0, import_os.tmpdir)(), (0, import_chunk_2gtmjt3y.Nl)()]);
}
function U(e, r) {
  let n;
  for (let o of r) {
    if (o === null) continue;
    try {
      return B(e, o);
    } catch (i) {
      n ??= i;
    }
  }
  throw n;
}
function B(e, r) {
  let n = (0, import_fs.openSync)(r, import_fs.constants.O_RDWR | import_fs.constants.O_EXCL | import_fs.constants.O_DIRECTORY | F | _, 320), o;
  try {
    (0, import_fs.writeFileSync)(n, e), o = (0, import_fs.openSync)(`/proc/self/fd/${n}`, import_fs.constants.O_RDONLY | _);
  } finally {
    (0, import_fs.closeSync)(n);
  }
  try {
    let i = { exports: {} };
    return process.dlopen(i, `/proc/self/fd/${o}`), i.exports;
  } catch (i) {
    throw (0, import_fs.closeSync)(o), i;
  }
}
var p = (0, import_chunk_t57w17k7.de)({ settled: false, embeddedTried: false, unnamedFileTried: false, module: null }, (e) => {
  e.settled = false, e.embeddedTried = false, e.unnamedFileTried = false, e.module = null;
});
function T() {
  if (p.settled) return p.module;
  return p.settled = true, null;
}
function zao(e, r, n = 5e3, o = "") {
  return new Promise((i) => {
    let a;
    try {
      (0, import_chunk_wn8z7ghn.iC)(), a = (0, import_child_process.spawn)(e, r, { cwd: void 0, detached: true, stdio: ["pipe", "ignore", "ignore"], windowsHide: true });
    } catch {
      i(null);
      return;
    }
    (0, import_chunk_9zdrdv25.AB)(a.pid);
    let l = false;
    function f(c) {
      if (l) return;
      l = true, clearTimeout(u), i(c);
    }
    let u = setTimeout(() => {
      a.kill("SIGKILL"), f(null);
    }, n);
    if (a.once("exit", (c) => f(c)), a.once("error", () => f(null)), a.pid !== void 0) a.stdin?.on("error", () => {
    }).end(o);
    a.unref();
  });
}
function Hq() {
  return (0, import_chunk_f9x2f6cx.pf)()?.printsUnknownSequences ?? import_chunk_5cey7gvv.wC.hasUnknownSequencePrintingBug(import_chunk_c203g5kd.s.terminal);
}
var __ = { SET_TITLE_AND_ICON: 0, SET_ICON: 1, SET_TITLE: 2, HYPERLINK: 8, ITERM2: 9, SET_FG_COLOR: 10, SET_BG_COLOR: 11, CLIPBOARD: 52, KITTY: 99, RESET_FG_COLOR: 110, RESET_BG_COLOR: 111, SEMANTIC_PROMPT: 133, GHOSTTY: 777, PROGRAM_STATUS: 7501, TAB_STATUS: 21337 };
function wZa(e) {
  let r = e.indexOf(";"), n = r >= 0 ? e.slice(0, r) : e, o = r >= 0 ? e.slice(r + 1) : "", i = parseInt(n, 10);
  if (i === __.SET_TITLE_AND_ICON) return { type: "title", action: { type: "both", title: o } };
  if (i === __.SET_ICON) return { type: "title", action: { type: "iconName", name: o } };
  if (i === __.SET_TITLE) return { type: "title", action: { type: "windowTitle", title: o } };
  if (i === __.HYPERLINK) {
    let a = o.split(";"), l = a[0] ?? "", f = a.slice(1).join(";");
    if (f === "") return { type: "link", action: { type: "end" } };
    let u = {};
    if (l) for (let c of l.split(":")) {
      let S = c.indexOf("=");
      if (S >= 0) u[c.slice(0, S)] = c.slice(S + 1);
    }
    return { type: "link", action: { type: "start", url: f, params: Object.keys(u).length > 0 ? u : void 0 } };
  }
  if (i === __.TAB_STATUS) return { type: "tabStatus", action: W(o) };
  return { type: "unknown", sequence: `\x1B]${e}` };
}
function E(e) {
  let r = e.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (r) return { type: "rgb", r: parseInt(r[1], 16), g: parseInt(r[2], 16), b: parseInt(r[3], 16) };
  let n = e.match(/^rgb:([0-9a-f]{1,4})\/([0-9a-f]{1,4})\/([0-9a-f]{1,4})$/i);
  if (n) {
    let o = (i) => Math.round(parseInt(i, 16) / (16 ** i.length - 1) * 255);
    return { type: "rgb", r: o(n[1]), g: o(n[2]), b: o(n[3]) };
  }
  return null;
}
function W(e) {
  let r = {};
  for (let [n, o] of Y(e)) switch (n) {
    case "indicator":
      r.indicator = o === "" ? null : E(o);
      break;
    case "status":
      r.status = o === "" ? null : o;
      break;
    case "status-color":
      r.statusColor = o === "" ? null : E(o);
      break;
  }
  return r;
}
function Y(e) {
  let r = [], n = "", o = "", i = false, a = false;
  for (let l of e) if (a) {
    if (i) o += l;
    else n += l;
    a = false;
  } else if (l === "\\") a = true;
  else if (l === ";") r.push([n, o]), n = "", o = "", i = false;
  else if (l === "=" && !i) i = true;
  else if (i) o += l;
  else n += l;
  if (n || i) r.push([n, o]);
  return r;
}
var trn = import_chunk_0f2gasyz.Tw + String.fromCharCode(import_chunk_0f2gasyz.Wke.OSC), A5e = import_chunk_0f2gasyz.Tw + "\\";
function f1t() {
  return (0, import_chunk_f9x2f6cx.pf)()?.terminal ?? import_chunk_c203g5kd.s.terminal;
}
function Nne() {
  let e = (0, import_chunk_f9x2f6cx.pf)();
  if (e) return e.mux;
  if (import_chunk_c203g5kd.s.TMUX) return "tmux";
  if (import_chunk_c203g5kd.s.STY) return "screen";
  if (import_chunk_c203g5kd.s.ZELLIJ) return "zellij";
  return null;
}
function b() {
  return (0, import_chunk_f9x2f6cx.pf)()?.ssh ?? !!import_chunk_c203g5kd.s.SSH_CONNECTION;
}
function L() {
  let e = (0, import_chunk_f9x2f6cx.pf)();
  if (e) {
    if (e.mux !== "tmux" || !e.tmuxSocket) return null;
    return (0, import_path.isAbsolute)(e.tmuxSocket) && (0, import_chunk_xfj2cwfv.Q4)(e.tmuxSocket) ? ["-S", e.tmuxSocket] : null;
  }
  return import_chunk_c203g5kd.s.TMUX ? [] : null;
}
function Wot() {
  let e = f1t();
  if (e === "Apple_Terminal") return "Fn";
  if (e === "iTerm.app") return "Option";
  let r = (0, import_chunk_cg8dqz0a.x)() === "macos" || (0, import_chunk_3t7ve0wy.GM)() !== null;
  if ((0, import_chunk_f9x2f6cx.pf)()?.isVscodeTerm || e && q.has(e)) return r ? "Option" : "Shift";
  if (e && K.has(e)) return "Shift";
  if (import_chunk_c203g5kd.s.LC_TERMINAL === "iTerm2") return "Option";
  return b() || Nne() !== null || r ? "Shift (Option in iTerm2, Fn in Terminal.app)" : "Shift";
}
var K = /* @__PURE__ */ new Set(["ghostty", "kitty", "WezTerm", "alacritty", "xterm", "gnome-terminal", "vte-based", "konsole", "windows-terminal", "mintty", ...import_chunk_c203g5kd.m1e]), q = /* @__PURE__ */ new Set(["vscode", "cursor", "windsurf", "antigravity", "codium"]), y = new RegExp(import_chunk_7cfjrnwy.Wz.source, "g");
function PT(...e) {
  let n = f1t() === "kitty" || e[0] === __.KITTY && Nne() !== "screen" ? A5e : import_chunk_0f2gasyz.X1, o = e.join(import_chunk_0f2gasyz.lVn).replace(y, " ");
  return `${trn}${o}${n}`;
}
function Dq(e) {
  let r = Nne();
  if (r === "tmux") return `\x1BPtmux;${e.replaceAll("\x1B", "\x1B\x1B")}\x1B\\`;
  if (r === "screen") return `\x1BP${e.replaceAll("\x1B", "\x1B\x1B")}\x1B\\`;
  return e;
}
class O {
  tool = void 0;
  addonWriteFailed = false;
  addonWriteSucceeded = false;
  copyGeneration = 0;
  async probe() {
    if ((0, import_chunk_cg8dqz0a.x)() !== "linux" || typeof this.tool === "string" && this.tool !== "addon") return;
    let { display: e, waylandDisplay: r } = P();
    if (r && await (0, import_chunk_c203g5kd.Bf)("wl-copy")) {
      this.tool = "wl-copy";
      return;
    }
    if (e) {
      if (await (0, import_chunk_c203g5kd.Bf)("xclip")) {
        this.tool = "xclip";
        return;
      }
      if (await (0, import_chunk_c203g5kd.Bf)("xsel")) {
        this.tool = "xsel";
        return;
      }
    }
    if (!this.addonWriteFailed && v() && T()?.setLinuxClipboardText) {
      this.tool = "addon";
      return;
    }
    this.tool = null;
  }
  recordAddonWrite(e) {
    if (e) this.addonWriteSucceeded = true;
    else this.addonWriteFailed ||= !this.addonWriteSucceeded;
  }
  beginCopy() {
    return ++this.copyGeneration;
  }
  isLatestCopy(e) {
    return e === this.copyGeneration;
  }
  reset() {
    this.tool = void 0, this.addonWriteFailed = false, this.addonWriteSucceeded = false;
  }
}
var V = new import_chunk_2904xtvq.j(() => new O());
function m() {
  return V.of((0, import_chunk_f9x2f6cx.N)().host);
}
function kSe() {
  if (!b()) switch ((0, import_chunk_cg8dqz0a.x)()) {
    case "macos":
    case "windows":
    case "wsl":
      return "native";
    case "linux":
      if (typeof m().tool === "string") return "native";
      break;
  }
  if (L()) return "tmux-buffer";
  return "osc52";
}
function Vao() {
  return m().probe();
}
function kZa() {
  if ((0, import_chunk_cg8dqz0a.x)() !== "linux") return "not_linux";
  let { tool: e } = m();
  if (e === void 0) return "not_probed";
  return e ?? "none";
}
function EZa() {
  return import_chunk_c203g5kd.s.VTE_VERSION != null;
}
function P() {
  return { display: process.env.DISPLAY, waylandDisplay: process.env.WAYLAND_DISPLAY };
}
function v() {
  let { display: e, waylandDisplay: r } = P();
  if (e) return /^(unix)?:/.test(e);
  return !!r;
}
function X(e) {
  return /[^\x00-\x7f]/.test(e);
}
function Kao(e) {
  if (!import_chunk_5cey7gvv.wC.hasOsc52ClipboardUtf8Bug() || !X(e)) return null;
  return "VS Code 1.123/1.124 will mojibake this paste \u2014 update to \u22651.125";
}
async function z(e) {
  let r = L();
  if (!r) return false;
  let n = { input: e, useCwd: false, timeout: 2e3 }, o = import_chunk_c203g5kd.s.LC_TERMINAL ?? "unset", i = r.length > 0 ? "attacher socket" : "$TMUX", { code: a } = await (0, import_chunk_7fsmgfxx.kt)("tmux", [...r, "load-buffer", "-w", "-"], n);
  if ((0, import_chunk_w578pjby.t)(`clipboard: tmux load-buffer -w - \u2192 exit ${a} (server=${i} LC_TERMINAL=${o})`), a === 0) return true;
  let l = await (0, import_chunk_7fsmgfxx.kt)("tmux", [...r, "load-buffer", "-"], n);
  return (0, import_chunk_w578pjby.t)(`clipboard: retry tmux load-buffer - \u2192 exit ${l.code} (server=${i} LC_TERMINAL=${o})`), l.code === 0;
}
var h = 76;
async function F6(e) {
  let r = import_buffer.Buffer.from(e, "utf8").toString("base64"), n = b(), o = (0, import_chunk_cg8dqz0a.x)(), i = false;
  if (!n) {
    if (o === "linux" && typeof m().tool !== "string") await m().probe();
    i = Z(e);
  }
  await z(e);
  let a = Nne(), l = i && (o === "linux" || o === "wsl") && import_chunk_5cey7gvv.wC.isVteBasedTerminal(f1t()) || Hq(), f = l ? "none(vte)" : a === "tmux" ? "raw+dcs" : a === "screen" ? "dcs" : "raw";
  if ((0, import_chunk_w578pjby.t)(`clipboard: setClipboard mux=${a ?? "none"} ssh=${n} native=${i} predicted=${kSe()} emit=${f} bytes=${e.length}`), l) return "";
  if (a === "tmux") {
    let u = `${import_chunk_0f2gasyz.Tw}]52;c;${r}${import_chunk_0f2gasyz.X1}`;
    return u + Dq(u);
  }
  if (a === "screen") {
    let u = [];
    for (let c = 0; c < r.length; c += h) u.push(r.slice(c, c + h));
    return `${import_chunk_0f2gasyz.Tw}P${import_chunk_0f2gasyz.Tw}]52;c;${u.join(`${A5e}${import_chunk_0f2gasyz.Tw}P`)}${import_chunk_0f2gasyz.X1}${A5e}`;
  }
  return PT(__.CLIPBOARD, "c", r);
}
var w = "[Console]::InputEncoding = [Text.Encoding]::UTF8; Set-Clipboard -Value ([Console]::In.ReadToEnd())", J = "[Console]::OutputEncoding = [Text.Encoding]::UTF8; Get-Clipboard -Raw";
function Z(e) {
  let r = { input: e, useCwd: false, timeout: 2e3 };
  switch ((0, import_chunk_cg8dqz0a.x)()) {
    case "macos":
      return (0, import_chunk_7fsmgfxx.kt)("pbcopy", [], r), true;
    case "linux": {
      let n = m();
      if (n.tool && n.tool !== "addon") return tt(n.tool, e), true;
      if (n.tool === "addon") {
        let o;
        try {
          o = T()?.setLinuxClipboardText(e) === true;
        } catch {
          o = false;
        }
        return n.recordAddonWrite(o), n.probe(), o;
      }
      return false;
    }
    case "wsl":
      return (0, import_chunk_7fsmgfxx.kt)("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command", w], r), true;
    case "windows":
      return (0, import_chunk_7fsmgfxx.kt)("powershell", ["-NoProfile", "-NonInteractive", "-Command", w], r), true;
  }
  return false;
}
var Q = { "wl-copy": [[], ["--primary"]], xclip: [["-selection", "clipboard"], ["-selection", "primary"]], xsel: [["--clipboard", "--input"], ["--primary", "--input"]] };
async function tt(e, r) {
  let n = m(), o = n.beginCopy(), [i, a] = Q[e];
  if (await zao(e, i, 2e3, r), n.isLatestCopy(o)) await zao(e, a, 2e3, r);
}
async function Tbt(e = "clipboard") {
  if (b()) return "";
  let r = { useCwd: false, timeout: 2e3 };
  switch ((0, import_chunk_cg8dqz0a.x)()) {
    case "macos": {
      let n = await (0, import_chunk_7fsmgfxx.kt)("pbpaste", [], r);
      return n.code === 0 ? n.stdout : "";
    }
    case "windows":
    case "wsl": {
      let n = await (0, import_chunk_7fsmgfxx.kt)((0, import_chunk_cg8dqz0a.x)() === "wsl" ? "powershell.exe" : "powershell", ["-NoProfile", "-NonInteractive", "-Command", J], r);
      return n.code === 0 ? n.stdout.replace(/\r\n/g, `
`).replace(/\n$/, "") : "";
    }
    case "linux":
    case "unknown": {
      let n = e === "primary", o = [["wl-paste", n ? ["--primary", "--no-newline"] : ["--no-newline"]], ["xclip", ["-selection", n ? "primary" : "clipboard", "-o"]], ["xsel", [n ? "--primary" : "--clipboard", "--output"]]];
      for (let [i, a] of o) {
        let l = await (0, import_chunk_7fsmgfxx.kt)(i, [...a], r);
        if (l.code === 0) return l.stdout;
      }
      return await et(n, r.timeout) ?? "";
    }
  }
}
async function et(e, r) {
  if (!v()) return null;
  try {
    return (await T()?.getLinuxClipboardText?.(e, r))?.replace(/\r?\n$|\r$/, "") ?? null;
  } catch (n) {
    return (0, import_chunk_w578pjby.t)(`clipboard: addon read: ${(0, import_chunk_jv7av99m.d)(n)}`), null;
  }
}
function t0n(e, r) {
  let n = e.replace(y, "");
  if (!n) return Cbt;
  let o = { id: rt(n), ...r }, i = Object.entries(o).map(([a, l]) => `${a}=${l}`).join(":");
  return PT(__.HYPERLINK, i, n);
}
function rt(e) {
  let r = 0;
  for (let n = 0; n < e.length; n++) r = (r << 5) - r + e.charCodeAt(n) | 0;
  return (r >>> 0).toString(36);
}
var Cbt = PT(__.HYPERLINK, "", ""), qao = { PROGRESS: 4 }, Yao = { CLEAR: 0, INDETERMINATE: 3 }, Xao = `${trn}${__.ITERM2};${qao.PROGRESS};${Yao.CLEAR};${import_chunk_0f2gasyz.X1}`, vZa = `${trn}${__.SET_TITLE_AND_ICON};${import_chunk_0f2gasyz.X1}`, Jao = PT(__.TAB_STATUS, "indicator=;status=;status-color=");
function smr() {
  return false;
}
function TZa(e) {
  let r = [], n = (o) => o.type === "rgb" ? `#${[o.r, o.g, o.b].map((i) => i.toString(16).padStart(2, "0")).join("")}` : "";
  if ("indicator" in e) r.push(`indicator=${e.indicator ? n(e.indicator) : ""}`);
  if ("status" in e) r.push(`status=${e.status?.replaceAll("\\", "\\\\").replaceAll(";", "\\;") ?? ""}`);
  if ("statusColor" in e) r.push(`status-color=${e.statusColor ? n(e.statusColor) : ""}`);
  return PT(__.TAB_STATUS, r.join(";"));
}
var nt = 2048, ot = 192, it = 32;
function CZa(e) {
  let r = e.replace(/[^A-Za-z0-9_.+-]/g, "-").slice(0, it);
  return r.length > 0 ? r : void 0;
}
function R(e, r) {
  let n = (0, import_chunk_7cfjrnwy.FB)(e.replace(y, " "), r);
  return import_buffer.Buffer.from(n).toString("base64");
}
function AZa(e) {
  let r = [`state=${e.state}`, "app=claude-code"];
  if (e.id !== void 0) r.push(`id=${e.id}`);
  if (e.state === "blocked" && e.kind) r.push(`kind=${e.kind}`);
  if ((e.state === "working" || e.state === "blocked") && e.progress !== void 0 && Number.isFinite(e.progress)) {
    let n = Math.min(100, Math.max(0, Math.round(e.progress)));
    r.push(`progress=${n}`);
  }
  if (e.title) r.push(`title=${R(e.title, ot)}`);
  if (e.msg) r.push(`msg=${R(e.msg, nt)}`);
  return PT(__.PROGRAM_STATUS, r.join(":"));
}
var n0n = `${trn}${__.PROGRAM_STATUS};state=clear${import_chunk_0f2gasyz.X1}`;
function RZa(e) {
  return PT(__.PROGRAM_STATUS, `state=clear:id=${e}`);
}
