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
var chunk_zsqk76p8_exports = {};
__export(chunk_zsqk76p8_exports, {
  $fr: () => $fr,
  CFt: () => CFt,
  DHn: () => DHn,
  DYa: () => DYa,
  E5: () => E5,
  EFt: () => EFt,
  Ffr: () => Ffr,
  HYa: () => HYa,
  LYa: () => LYa,
  Lfr: () => Lfr,
  NYa: () => NYa,
  Nfr: () => Nfr,
  Sso: () => Sso,
  TFt: () => TFt,
  Xss: () => Xss,
  _so: () => _so,
  aSi: () => aSi,
  dSi: () => dSi,
  enn: () => enn,
  gso: () => gso,
  hso: () => hso,
  iSi: () => iSi,
  jp: () => jp,
  lSi: () => lSi,
  mso: () => mso,
  sSi: () => sSi,
  uot: () => uot,
  vFt: () => vFt,
  vH: () => vH,
  yso: () => yso
});
module.exports = __toCommonJS(chunk_zsqk76p8_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_nbyg4q5d = require("/$bunfs/root/chunk-nbyg4q5d.js");
var import_chunk_a8ey418s = require("/$bunfs/root/chunk-a8ey418s.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_promises2 = require("fs/promises");
var import_path = require("path");
var import_path2 = require("path");
var import_fs2 = require("fs");
var import_promises3 = require("fs/promises");
var import_path3 = require("path");
var import_promises4 = require("fs/promises");
var import_path4 = require("path");
function I(e) {
  if (e.type === "system" && e.subtype === "voice_call_talk") {
    let { fold: o } = e;
    return typeof o === "object" && o !== null && "command" in o && typeof o.command === "object" && o.command !== null ? o.command : void 0;
  }
  let t = e.type === "attachment" ? e.attachment : void 0;
  return typeof t === "object" && t !== null && "type" in t && t.type === "queued_command" ? t : void 0;
}
function E(e, t) {
  let o = I(e), r = o && Reflect.get(o, t);
  return typeof r === "string" && r ? r : void 0;
}
function EFt(e) {
  return E(e, "source_uuid");
}
function sSi(e) {
  return E(e, "delivery_id");
}
function uot(e) {
  let t = e.type === "user" && e.sentAsUuid, o = e.type === "system" ? e.submitUuid : t, r = EFt(e) ?? (typeof o === "string" ? o : void 0);
  return r ? [e.uuid, r] : [e.uuid];
}
function mso(e) {
  return e.type === "user" ? vFt(e.droppedPromptUuids) : [];
}
function vFt(e) {
  return Array.isArray(e) ? e.filter((t) => typeof t === "string" && t !== "") : [];
}
function iSi(e, t) {
  let o = e.findIndex((r) => r.uuid === t);
  return o !== -1 ? o : e.findIndex((r) => EFt(r) === t);
}
function E5(e, t) {
  return U(e, { udsInboxEnabled: typeof t === "boolean" ? t : true });
}
function U(e, { udsInboxEnabled: t }) {
  if (e?.kind === "channel") return true;
  if (e?.kind === "observer") return true;
  if (e?.kind === "observer-activity") return true;
  if (e?.kind === "slack-ping") return true;
  if (e?.kind === "voice-call") return true;
  if (e?.kind === "peer") {
    if (e.senderTaskId !== void 0) return true;
    if (t) return true;
  }
  return false;
}
function CFt(e) {
  if (!(0, import_chunk_ma3kja9f.T)(e) || e.type !== "assistant") return;
  let t = (0, import_chunk_ma3kja9f.T)(e.forkedFrom) ? e.forkedFrom.sessionId : void 0;
  return [e.requestSessionId, t, e.sessionId].find((o) => typeof o === "string");
}
(0, import_chunk_adx6804h.B)();
var N = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ archived: (0, import_chunk_adx6804h.P)(), at: (0, import_chunk_adx6804h.aC)({ offset: true }) })), h = 4096;
function g(e, t) {
  return (0, import_path2.join)((0, import_path2.dirname)(e), t, "archived.json");
}
async function DHn(e, t, o) {
  try {
    let r = g(e, t), i = (0, import_chunk_m15w38ag.ne)() && o !== void 0 ? (0, import_chunk_a8ey418s.av)(r) : void 0, a;
    if (i !== void 0 && o !== void 0) {
      let s = await o.readText([{ key: i, offset: 0, length: h + 1 }]), u = s.ok ? s.value.items[0] : void 0;
      if (!u?.found || u.totalBytes > h) return;
      a = u.value;
    } else if ((0, import_chunk_f9x2f6cx.Y)()) return;
    else {
      let s = await (0, import_chunk_w578pjby.le)().readFileFdGated(r, h);
      if (s === null) return;
      a = s.content;
    }
    let d = N().safeParse((0, import_chunk_w578pjby.te)(a));
    return d.success ? { archived: d.data.archived, atMs: Date.parse(d.data.at) } : void 0;
  } catch {
    return;
  }
}
function gso(e, t) {
  if (!e?.archived) return e?.archived;
  return !(k(t.tail, e.atMs) || t.head !== t.tail && k(t.head, e.atMs));
}
function k(e, t) {
  return e.split(`
`).some((o) => {
    if (!(o.includes('"user"') || o.includes('"queued_command"')) || o.includes('"tool_result"')) return false;
    let r;
    try {
      r = (0, import_chunk_w578pjby.Cs)(o);
    } catch {
      return false;
    }
    let i = dSi(r);
    return i !== void 0 && i > t;
  });
}
var z = ["human", "sdk", "unknown"], L = (0, import_chunk_2cbgkbm2.p)(() => {
  let e = (0, import_chunk_adx6804h.c)({ kind: (0, import_chunk_adx6804h.n)() }).optional(), t = (0, import_chunk_adx6804h.v)(false).optional();
  return (0, import_chunk_adx6804h.zn)("type", [(0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("user"), timestamp: (0, import_chunk_adx6804h.n)(), message: (0, import_chunk_adx6804h.c)({ content: (0, import_chunk_adx6804h.ie)() }), origin: e, promptSource: (0, import_chunk_adx6804h.n)().optional(), persist: (0, import_chunk_adx6804h.VA)().optional(), turnOrigin: (0, import_chunk_adx6804h.F)(z).optional(), toolUseResult: (0, import_chunk_adx6804h.O_)().optional(), isCompactSummary: t, isSidechain: t, isVirtual: t, isVisibleInTranscriptOnly: t, isMeta: t, textNotTyped: t, handedOff: t, queueSkipAttachments: t, wakeupSource: (0, import_chunk_adx6804h.VA)().optional(), scheduledTaskId: (0, import_chunk_adx6804h.VA)().optional() }), (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("attachment"), timestamp: (0, import_chunk_adx6804h.n)(), isSidechain: t, attachment: (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("queued_command"), prompt: (0, import_chunk_adx6804h.ie)(), origin: e, commandMode: (0, import_chunk_adx6804h.F)(["prompt", "bash"]).optional(), isMeta: t }) })]);
}), W = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.$t)({ type: (0, import_chunk_adx6804h.n)() })));
function dSi(e, t = false) {
  let o = L().safeParse(e);
  if (!o.success) return;
  let { data: r } = o, [i, a] = r.type === "user" ? [r.message.content, r.origin] : [r.attachment.prompt, r.attachment.origin];
  if (a !== void 0 && a.kind !== "human") return;
  let d = typeof i === "string" ? [{ type: "text", text: i }] : W().safeParse(i).data ?? [];
  if (d.some((f) => f.type === "tool_result")) return;
  let s = d.map((f) => typeof f.text === "string" ? f.text.trimStart() : ""), m = (a !== void 0 || t && r.type === "user" && r.promptSource !== void 0 ? s.some((f) => f !== "") && !s.some((f) => f.startsWith(`<${import_chunk_k449cc64.xp}>`)) : (0, import_chunk_q3a5dy2r.FAt)({ type: "user", message: { content: i } }, { commandFallback: "" }) !== void 0 || s.some((f) => f.startsWith(`<${import_chunk_k449cc64.ew}>`))) || d.some((f) => f.type === "image" || f.type === "document"), l = Date.parse(r.timestamp);
  return m && !Number.isNaN(l) ? l : void 0;
}
async function Nfr(e, t, o, r) {
  let i = g(e, t), a = (0, import_chunk_w578pjby._)({ archived: o.archived, at: (/* @__PURE__ */ new Date()).toISOString(), by: o.by });
  if ((0, import_chunk_m15w38ag.ne)() && r !== void 0) {
    let d = (0, import_chunk_a8ey418s.av)(i);
    if (d !== void 0) {
      let s = await r.write(d, a, { mode: 384 });
      if (!s.ok) throw Error("Session archive: record not writable via storage", { cause: s.error });
      return;
    }
  }
  if ((0, import_chunk_f9x2f6cx.Y)()) throw Error("Session archive: this process keeps no files");
  await (0, import_promises2.mkdir)((0, import_path.dirname)(i), { recursive: true, mode: 448 }), await (0, import_chunk_q7qjcthc.yr)(i, a, 384);
}
async function LYa(e, t, o) {
  if ((0, import_chunk_m15w38ag.ne)() && o !== void 0) return G(o, t);
  let r;
  try {
    r = await (0, import_promises.open)(e, import_fs.constants.O_WRONLY | import_fs.constants.O_APPEND);
  } catch (i) {
    let a = (0, import_chunk_jv7av99m.w)(i);
    if (a === "ENOENT" || a === "ENOTDIR") return false;
    throw i;
  }
  try {
    let { size: i } = await r.stat();
    if (i === 0) return false;
    let a = void 0, d = Buffer.from(t, "utf8"), s = 0;
    while (s < d.length) {
      let { bytesWritten: u } = await r.write(d, s, d.length - s, a);
      if (u <= 0) throw new import_chunk_jv7av99m.A(`tryAppend: short write to ${e} stalled with ${d.length - s} bytes remaining`, "tryAppend: zero-progress short write");
      if (s += u, a !== void 0) a += u;
    }
    return true;
  } finally {
    await r.close();
  }
}
async function G({ backend: e, key: t }, o) {
  let r = await e.append(t, [{ data: o }], { precondition: { type: "ifExists", nonEmpty: true } });
  if (!r.ok) {
    if (r.error.code === "NotFound") return false;
    throw Error("Session append: transcript not writable via storage", { cause: r.error });
  }
  return true;
}
(0, import_chunk_adx6804h.B)();
var M = '"type":"continued-in"', Q = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.$t)({ type: (0, import_chunk_adx6804h.v)("continued-in"), continuedInSessionId: (0, import_chunk_adx6804h.n)() })), Z = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.$t)({ type: (0, import_chunk_adx6804h.v)("assistant"), isApiErrorMessage: (0, import_chunk_adx6804h.P)().optional(), message: (0, import_chunk_adx6804h.$t)({ stop_reason: (0, import_chunk_adx6804h.n)().nullish() }).optional() }));
function enn(e, { canFork: t } = { canFork: true }) {
  if (e.provable) return `Your most recent conversation is running in the background (session ${e.sessionId}). Use \`claude agents\` to find and attach to it, or \`claude --resume\` to pick another session.`;
  let o = t ? ", or add --fork-session to branch off a copy" : "";
  return `Your most recent conversation moved to a background session (${e.sessionId}) registered from another machine or container, so this one can't tell whether it is still running. Use \`claude --resume\` to pick a session${o}.`;
}
function NYa(e, t) {
  return { type: "continued-in", timestamp: (/* @__PURE__ */ new Date()).toISOString(), sessionId: e, continuedInSessionId: t };
}
function Ffr(e) {
  if (!e.includes(M)) return;
  let t = e.length;
  while (t > 0) {
    let o = e.lastIndexOf(`
`, t - 1), r = e.slice(o + 1, t);
    t = o;
    let i = r.includes(M), a = r.includes('"type":"user"') || r.includes('"type":"assistant"');
    if (i || a) try {
      let d = JSON.parse(r);
      if (i) {
        let s = Q().safeParse(d);
        if (s.success) return (0, import_chunk_q3a5dy2r.cB)(s.data.continuedInSessionId) ?? void 0;
      }
      if (a && ee(d)) return;
    } catch {
    }
    if (o < 0) break;
  }
  return;
}
function ee(e) {
  let t = Z().safeParse(e);
  if (t.success) return t.data.isApiErrorMessage !== true && typeof t.data.message?.stop_reason === "string";
  return (0, import_chunk_ma3kja9f.T)(e) && (0, import_chunk_q3a5dy2r.FAt)(e, { commandFallback: "" }) !== void 0;
}
async function _so(e, t, o) {
  let r = (0, import_path3.join)((0, import_path3.dirname)(e), `${t}.jsonl`), i = await (0, import_chunk_q3a5dy2r.Nhe)(r, (0, import_chunk_nbyg4q5d.zv)((0, import_chunk_nbyg4q5d.B_)(r, o)));
  return i !== null && await $fr(r, i.head, i.tail, i.size, o);
}
var y = '"parentUuid":', re = 16777216, j = 1048576;
async function $fr(e, t, o, r, i) {
  if (t.includes(y) || o.includes(y)) return true;
  if (r <= import_chunk_q3a5dy2r.Gb) return false;
  if ((0, import_chunk_nbyg4q5d.B_)(e, i) !== void 0) return true;
  try {
    let d = await (0, import_promises3.open)(e, import_fs2.constants.O_RDONLY | import_fs2.constants.O_NOFOLLOW | import_fs2.constants.O_NONBLOCK);
    try {
      if (!(await d.stat()).isFile()) return false;
      let s = Buffer.allocUnsafe(j + y.length), u = 0, S = 0;
      while (S < re) {
        let { bytesRead: m } = await d.read(s, u, j, S);
        if (m === 0) return false;
        let l = u + m;
        if (s.subarray(0, l).includes(y)) return true;
        u = Math.min(y.length, l), s.copyWithin(0, l - u, l), S += m;
      }
      return true;
    } finally {
      await d.close();
    }
  } catch {
    return false;
  }
}
(0, import_chunk_adx6804h.B)();
var de = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ customTitle: (0, import_chunk_adx6804h.n)() }));
function yso(e, t) {
  return (0, import_path4.join)((0, import_path4.dirname)(e), t, "custom-title.json");
}
async function Sso(e, t, o) {
  let r = await ue(yso(e, t), o);
  if (r === void 0) return;
  let i;
  try {
    i = JSON.parse(r);
  } catch {
    return;
  }
  let a = de().safeParse(i);
  if (!a.success) return;
  return (0, import_chunk_xfj2cwfv.Ba)(a.data.customTitle) || void 0;
}
async function ue(e, t) {
  if ((0, import_chunk_m15w38ag.ne)() && t !== void 0) try {
    let o = (0, import_chunk_a8ey418s.av)(e);
    if (o !== void 0) {
      let r = await t.readText([o]);
      if (!r.ok) return;
      let i = r.value.items[0];
      return i.found ? i.value : void 0;
    }
  } catch {
    return;
  }
  if ((0, import_chunk_f9x2f6cx.Y)()) return;
  try {
    return await (0, import_promises4.readFile)(e, "utf8");
  } catch {
    return;
  }
}
var TFt = "Tool permission request failed", aSi = "Tool permission stream closed before response received", Xss = "Stream closed", jn = [`${TFt}: AbortError: ${aSi}`, `${TFt}: AbortError: ${Xss}`, TFt];
var jp = 6e5, HYa = ["SessionStart", "Setup"], hso = 3e4, Lfr = 6e3, lSi = 3e4, DYa = 5e3;
class vH {
  returned;
  queue = [];
  readResolve;
  readReject;
  isDone = false;
  hasError;
  started = false;
  constructor(e) {
    this.returned = e;
  }
  get ended() {
    return this.isDone;
  }
  [Symbol.asyncIterator]() {
    if (this.started) throw Error("Stream can only be iterated once");
    return this.started = true, this;
  }
  next() {
    if (this.queue.length > 0) return Promise.resolve({ done: false, value: this.queue.shift() });
    if (this.isDone) return Promise.resolve({ done: true, value: void 0 });
    if (this.hasError) return Promise.reject(this.hasError);
    return new Promise((e, t) => {
      this.readResolve = e, this.readReject = t;
    });
  }
  get readerIsWaiting() {
    return this.readResolve !== void 0 && !this.isDone;
  }
  enqueue(e) {
    if (this.readResolve) {
      let t = this.readResolve;
      this.readResolve = void 0, this.readReject = void 0, t({ done: false, value: e });
    } else this.queue.push(e);
  }
  dropNewestQueued(e) {
    let t = this.queue.findLastIndex(e);
    if (t !== -1) this.queue.splice(t, 1);
  }
  done() {
    if (this.isDone = true, this.readResolve) {
      let e = this.readResolve;
      this.readResolve = void 0, this.readReject = void 0, e({ done: true, value: void 0 });
    }
  }
  error(e) {
    if (this.hasError = e, this.readReject) {
      let t = this.readReject;
      this.readResolve = void 0, this.readReject = void 0, t(e);
    }
  }
  return() {
    if (this.isDone = true, this.returned) this.returned();
    return Promise.resolve({ done: true, value: void 0 });
  }
}
