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
var chunk_brp4kre5_exports = {};
__export(chunk_brp4kre5_exports, {
  JKs: () => JKs,
  XKs: () => XKs,
  uht: () => uht
});
module.exports = __toCommonJS(chunk_brp4kre5_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_bq31aqv6 = require("/$bunfs/root/chunk-bq31aqv6.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_promises = require("fs/promises");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
var w = ".prompt-stash", x = 262144, v = 256, j = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ text: (0, import_chunk_adx6804h.n)(), cursorOffset: (0, import_chunk_adx6804h.E)().int().nonnegative(), pasteIds: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.E)().int().nonnegative()).max(v), launchWarning: (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.F)(["deep-link", "prefill"]), prefillLength: (0, import_chunk_adx6804h.E)().int().nonnegative() }).optional() }));
function z(e) {
  return (0, import_chunk_w578pjby._)({ text: e.text, cursorOffset: e.cursorOffset, pasteIds: Object.values(e.pastedContents).filter((r) => !r.inline).slice(0, v).map((r) => r.id), launchWarning: e.launchWarning });
}
function XKs(e) {
  let r = [], o = "";
  for (let a of e.replace(/\r\n|\r/g, `
`).replaceAll("	", "    ").split(/\u200C+/)) {
    let i = (0, import_chunk_kx2fp6pc.FE)(a, "", { keepNewlines: true });
    if (i === "") continue;
    if (o !== "" && /\S$/.test(o) && /^\S/.test(i)) r.push("\u200C");
    r.push(i), o = i;
  }
  return r.join("");
}
async function uht(e, r) {
  await (0, import_promises.rm)(e, { force: true });
  let o = await (0, import_chunk_q7qjcthc.gL)(e, r, 384);
  try {
    await (0, import_chunk_q7qjcthc.ra)(o, e);
  } catch (a) {
    throw await (0, import_promises.rm)(o, { force: true }).catch(() => {
    }), a;
  }
}
function D(e) {
  let r;
  try {
    r = (0, import_chunk_w578pjby.te)(e);
  } catch {
    return null;
  }
  let o = j().safeParse(r);
  if (!o.success) return null;
  let { cursorOffset: a, pasteIds: i, launchWarning: d } = o.data, g = XKs(o.data.text), O = new Set(i), f = "", S = 0;
  for (let h of (0, import_chunk_bq31aqv6.Nu)(g)) if (O.has(h.id)) f += g.slice(S, h.index), S = h.index + h.match.length;
  if (f += g.slice(S), f.trim() === "") return null;
  return { text: f, mode: "prompt", cursorOffset: (0, import_chunk_7cfjrnwy.ee)(f, Math.min(a, f.length)).length, pastedContents: {}, launchWarning: d };
}
async function I(e, r) {
  let o = (0, import_path.join)(e, w), a = r === null ? "" : z(r);
  if (Buffer.byteLength(a) > x) (0, import_chunk_w578pjby.t)("[bg] prompt stash too large to persist; kept in memory only", { level: "warn" }), a = "";
  try {
    let i = await (0, import_promises.rm)(o, { force: true }).then(() => true, (d) => ((0, import_chunk_9e5mdyfk.Lu)(d), false));
    if (a === "" && i) return;
    await uht(o, a);
  } catch (i) {
    if (!(0, import_chunk_jv7av99m.J)(i)) (0, import_chunk_9e5mdyfk.Lu)(i);
  }
}
async function k(e) {
  let r = await (0, import_chunk_xfj2cwfv.Uu)((0, import_path.join)(e, w), x);
  if (!r) return null;
  let o = D(r);
  if (o === null) (0, import_chunk_w578pjby.t)("[bg] persisted prompt stash unreadable or empty", { level: "warn" }), (0, import_chunk_cqa9hrgx.m)("bg_prompt_stash_restore", "unreadable_or_empty");
  return o;
}
class JKs {
  #t;
  #e;
  #r = Promise.resolve();
  #s = false;
  #o;
  constructor(e) {
    this.#t = e, this.#e = b(e.getState().stash), this.#o = e.subscribe(this.#n);
  }
  #n = () => {
    let e = b(this.#t.getState().stash);
    if (e === this.#e) return;
    this.#e = e;
    let r = import_chunk_c203g5kd.s.CLAUDE_JOB_DIR;
    if (!r) return;
    this.#r = this.#r.then(() => I(r, e));
  };
  async restore() {
    let e = import_chunk_c203g5kd.s.CLAUDE_JOB_DIR;
    if (this.#s || !e) return false;
    this.#s = true;
    let r = await k(e);
    if (r === null) return false;
    if (this.#t.getState().stash !== null) return (0, import_chunk_cqa9hrgx.l)("bg_prompt_stash_restore", "slot_taken"), false;
    return this.#e = r, this.#t.setState((o) => ({ ...o, stash: r })), (0, import_chunk_cqa9hrgx.u)("bg_prompt_stash_restore"), true;
  }
  flush() {
    return this.#r;
  }
  dispose() {
    this.#o();
  }
}
function b(e) {
  return e?.cameBack === true ? null : e;
}
