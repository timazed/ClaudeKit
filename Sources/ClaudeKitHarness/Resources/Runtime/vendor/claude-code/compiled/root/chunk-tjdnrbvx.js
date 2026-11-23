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
var chunk_tjdnrbvx_exports = {};
__export(chunk_tjdnrbvx_exports, {
  Acn: () => Acn,
  Akl: () => Akl,
  Ckl: () => Ckl,
  Hws: () => Hws,
  I2t: () => I2t,
  K2e: () => K2e,
  Kl: () => Kl,
  Rcn: () => Rcn,
  Sko: () => Sko,
  Tc: () => Tc,
  Tkl: () => Tkl,
  XWi: () => XWi,
  YWi: () => YWi,
  _9: () => _9,
  bko: () => bko,
  fM: () => fM,
  fv: () => fv,
  iTr: () => iTr,
  kWn: () => kWn,
  oTr: () => oTr,
  qP: () => qP,
  sTr: () => sTr,
  wWn: () => wWn,
  wg: () => wg,
  wko: () => wko,
  xcn: () => xcn,
  yko: () => yko
});
module.exports = __toCommonJS(chunk_tjdnrbvx_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_pqpxa7em = require("/$bunfs/root/chunk-pqpxa7em.js");
function fv(e) {
  if (typeof e === "string") return e;
  let t = e.at(-1);
  return t?.type === "text" ? t.text : null;
}
function fM(e) {
  let t = e.startsWith("/") ? e.slice(1) : e, n = t.search(/\s/);
  if (n === -1) return { name: t, args: "" };
  return { name: t.slice(0, n), args: t.slice(n + 1).trim() };
}
function wg(e) {
  if (typeof e === "string") return e.trim().startsWith("/");
  if (!Array.isArray(e)) return false;
  let t = e.at(-1);
  return t?.type === "text" && typeof t.text === "string" && t.text.trim().startsWith("/");
}
function Acn(e) {
  return /^[a-zA-Z0-9_][a-zA-Z0-9:_-]*$/.test(e);
}
function yko(e) {
  let t = wg(e) ? fv(e) : null;
  return t !== null && (!t.startsWith("/") || !Acn(fM(t).name));
}
function qP() {
  return P() ?? (0, import_chunk_865at33z.Lt)("tengu_virtual_pancake", (0, import_chunk_f9x2f6cx.st)() || (0, import_chunk_6e68m1dj.Qp)() || (0, import_chunk_pqpxa7em.KG)());
}
function P() {
  return;
}
function Sko(e) {
  let t = new Uint16Array(e.length);
  for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
  return t;
}
function YWi(e) {
  let t = new Int32Array(e.length);
  for (let n = 1, r = 0; n < e.length; n++) {
    while (r > 0 && e[n] !== e[r]) r = t[r - 1];
    if (e[n] === e[r]) r++;
    t[n] = r;
  }
  return t;
}
var O = 8, _ = 1024;
function I2t(e) {
  let t, n = /* @__PURE__ */ new Map();
  return (r) => {
    let o = n.get(r);
    if (o !== void 0) return o;
    let c = r.slice(0, O), m = r.length > e.length ? -1 : e.indexOf(c);
    if (m === -1) {
      let s = () => -1;
      return n.set(r, s), s;
    }
    let d = Sko(r), h = YWi(d), k = d.length - h.at(-1), y = [], f = [], x = t ??= Sko(e);
    for (let s = m, i = 0; s < x.length; s++) {
      if (i === 0) {
        let a = e.indexOf(c, s);
        if (a === -1) break;
        s = a + c.length - 1, i = c.length - 1;
      }
      let g = x[s];
      while (i > 0 && g !== d[i]) i = h[i - 1];
      if (g === d[i]) i++;
      if (i === d.length) {
        let a = s + 1 - d.length, p = f.length - 1;
        if (p >= 0 && a - f[p] === k) f[p] = a;
        else y.push(a), f.push(a);
        i = h[i - 1];
      }
    }
    let C = (s) => {
      let i = 0, g = f.length;
      while (i < g) {
        let p = i + g >> 1;
        if (f[p] < s) i = p + 1;
        else g = p;
      }
      let a = y[i];
      if (a === void 0) return -1;
      return s > a ? a + Math.ceil((s - a) / k) * k : a;
    };
    if (y.length <= _) n.set(r, C);
    return C;
  };
}
function Tkl(e, t, n) {
  return e !== void 0 && e.mode === "poll-event" && (e.pollEvent?.wake === true || n) && !t;
}
function Hws(e, t) {
  return e === "prompt" || e === "bash" && t === true || e === "orphaned-permission" || e === "task-notification" || e === "poll-event";
}
function Tc(e) {
  return e.agentId === (0, import_chunk_f9x2f6cx.ot)();
}
function Kl(e) {
  return Tc(e) && e.passive !== true && e.waitsOutStop !== true;
}
var Ckl = { kind: "task-notification", source: "goal-checkin" };
function bko(e) {
  return e.origin?.kind === "task-notification" && e.origin.source === "goal-checkin";
}
var Akl = { kind: "task-notification", source: "worker-checkin" };
function Rcn(e) {
  return e.origin?.kind === "task-notification" && (e.origin.source === "goal-checkin" || e.origin.source === "worker-checkin" || e.origin.source === "shell-checkin");
}
function K2e(e) {
  return Tc(e) && e.mode === "task-notification";
}
function _9(e) {
  return Tc(e) && e.mode === "prompt";
}
function oTr(e) {
  let t = e.queueOrigin ?? e.origin;
  return Rcn({ origin: t }) ? (0, import_chunk_xfj2cwfv.pee)(t) : t;
}
function XWi(e) {
  return e.queueMode ?? M(oTr(e));
}
function wWn(e) {
  return e.queueSkipAttachments === true || XWi(e) === "task-notification" ? true : void 0;
}
function b(e) {
  return e.startsWith("<ide_selection>") && e.endsWith("</ide_selection>") || e.startsWith('<terminal name="') && e.endsWith("</terminal>");
}
function sTr(e, t) {
  if (!(0, import_chunk_xfj2cwfv.J4)(e) && !A(e)) return;
  if (!(0, import_chunk_xfj2cwfv.J4)(e) || "text_not_typed" in e && e.text_not_typed === true) (0, import_chunk_cqa9hrgx.u)("input_text_not_typed");
  else (0, import_chunk_cqa9hrgx.l)("input_text_not_typed", "malformed_mark");
  let n = (t?.writtenFiles ?? []).flatMap((r) => r.inlined ? [] : [r.path]);
  return { textNotTyped: true, skipSlashCommands: true, ...n.length > 0 && { ownFilePaths: n } };
}
var S = /\n<system-reminder>Message sent at [^<\n]*<\/system-reminder>\s*$/;
function A(e) {
  if (!("inline_pastes" in e) || !Array.isArray(e.inline_pastes) || !("message" in e) || typeof e.message !== "object" || e.message === null || !("content" in e.message) || !Array.isArray(e.message.content) || e.message.content.length < 2) return false;
  if (e.inline_pastes.some((o) => typeof o !== "string")) return true;
  let t = e.inline_pastes.flatMap((o) => typeof o === "string" && o.trim().startsWith(">") ? [o.trim()] : []);
  if (t.length === 0) return false;
  if (e.inline_pastes.length > 100) return true;
  let n = qP(), r = e.message.content.findLastIndex((o) => o?.type === "text");
  return e.message.content.slice(0, Math.max(r, 0)).some((o) => {
    if (o?.type !== "text" || typeof o.text !== "string") return false;
    let c = o.text.trim(), m = o.text.replace(S, "").trim();
    if (b(m)) return false;
    let d = t.includes(c) || t.includes(m);
    if (d || c.startsWith(">")) return !d || !n;
    let h = I2t(c);
    return t.some((k) => h(k)(0) !== -1);
  });
}
function kWn(e) {
  if (e.handedOff !== true && e.textNotTyped !== true) return e.queueSkipSlashCommands === true && wg(e.message.content) ? { skipSlashCommands: true } : void 0;
  return { textNotTyped: true, noPersonArrived: true, drainOnly: true, ...wg(e.message.content) && { skipSlashCommands: true } };
}
function M(e) {
  return e?.kind === "task-notification" ? "task-notification" : "prompt";
}
function xcn(e) {
  let { origin: t } = e, n = t?.kind === "plugin" ? t.name : typeof t === "object" && t !== null && "plugin" in t ? t.plugin : void 0;
  return e.scheduledByPlugin ?? n;
}
function iTr(e, t) {
  return xcn(e) === xcn(t);
}
function wko(e) {
  return e.some(import_chunk_865at33z.ree) ? void 0 : e.map(xcn).find((t) => t !== void 0);
}
