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
var chunk_c1hnv4fm_exports = {};
__export(chunk_c1hnv4fm_exports, {
  BCe: () => BCe,
  F1t: () => F1t,
  GW: () => GW,
  Gfe: () => Gfe,
  Hel: () => Hel,
  Iel: () => Iel,
  Irn: () => Irn,
  JEi: () => JEi,
  Jlo: () => Jlo,
  Jmr: () => Jmr,
  KEi: () => KEi,
  Mel: () => Mel,
  Oel: () => Oel,
  Orn: () => Orn,
  P0n: () => P0n,
  PSe: () => PSe,
  Pel: () => Pel,
  Prn: () => Prn,
  Qmr: () => Qmr,
  R0n: () => R0n,
  Rel: () => Rel,
  Ul: () => Ul,
  Une: () => Une,
  VEi: () => VEi,
  XEi: () => XEi,
  Xlo: () => Xlo,
  YEi: () => YEi,
  Ylo: () => Ylo,
  bDe: () => bDe,
  ods: () => ods,
  qEi: () => qEi,
  qlo: () => qlo,
  rst: () => rst,
  sds: () => sds,
  x0n: () => x0n,
  xel: () => xel,
  zEi: () => zEi
});
module.exports = __toCommonJS(chunk_c1hnv4fm_exports);
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_jsm9pvcb = require("/$bunfs/root/chunk-jsm9pvcb.js");
var import_chunk_75f58nqg = require("/$bunfs/root/chunk-75f58nqg.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_tt4yhkc0 = require("/$bunfs/root/chunk-tt4yhkc0.js");
var import_chunk_myvyhcm0 = require("/$bunfs/root/chunk-myvyhcm0.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_839h1d5e = require("/$bunfs/root/chunk-839h1d5e.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_bp9b0hd8 = require("/$bunfs/root/chunk-bp9b0hd8.js");
var import_http = require("http");
(0, import_chunk_adx6804h.B)();
var R0n = Symbol("pageTexts"), G = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("message_pdf_reads"), reads: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ path: (0, import_chunk_adx6804h.n)(), pages: (0, import_chunk_adx6804h.E)().int().min(1), result: (0, import_chunk_adx6804h.Tv)([(0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("text"), text: (0, import_chunk_adx6804h.n)() }), (0, import_chunk_adx6804h.zn)("type", [(0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("document"), source: (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("base64"), media_type: (0, import_chunk_adx6804h.v)("application/pdf"), data: (0, import_chunk_adx6804h.n)() }) }), (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("page_texts"), file_uuid: (0, import_chunk_adx6804h.n)() })])]) })) }));
function bDe(e) {
  return K(e) ? e.reads : void 0;
}
function PSe(e) {
  return (bDe(e)?.length ?? 0) > 0;
}
function F1t(e) {
  return e?.type === "assistant" && e.isVirtual !== true && typeof e.message?.model === "string" && e.message.model !== "" && e.message.model !== import_chunk_bp9b0hd8.xs && j(e.message.content).some((r) => r === "more");
}
function Rel(e) {
  return e?.type === "assistant" && j(e.message?.content).every((r) => r === "thought");
}
function j(e) {
  if (!Array.isArray(e)) return [I(e)];
  return e.map((r) => {
    if (typeof r !== "object" || r === null || !("type" in r) || typeof r.type !== "string") return "unreadable";
    if (r.type === "text") return I("text" in r ? r.text : void 0);
    return r.type === "thinking" || r.type === "redacted_thinking" ? "thought" : "more";
  });
}
function I(e) {
  if (typeof e !== "string") return "unreadable";
  return ["", import_chunk_bp9b0hd8.Wp, import_chunk_bp9b0hd8.m3t].includes(e.trim()) ? "thought" : "more";
}
function ods(e) {
  let r = /* @__PURE__ */ new Set(), o;
  for (let i = e.length - 1; i >= 0; i--) {
    let s = e[i];
    if (o !== void 0 && F1t(s)) o = void 0;
    else if (s?.type === "attachment" && bDe(s.attachment) !== void 0) {
      if (o !== void 0 && o !== s) r.add(s);
      o = s;
    }
  }
  return r;
}
function K(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "message_pdf_reads" && G().safeParse(e).success;
}
var YEi = 15e4, sds = 3e4;
function rst() {
  return k((0, import_chunk_2yx6c1y2.vt)().bashOutputMaxChars) ?? sds;
}
function GW() {
  let e = k((0, import_chunk_2yx6c1y2.vt)().bashOutputMaxChars);
  if (e !== void 0) return e;
  return (0, import_chunk_865at33z.bGn)("BASH_MAX_OUTPUT_LENGTH", process.env.BASH_MAX_OUTPUT_LENGTH, sds, YEi).effective;
}
function Ylo({ outputFileSize: e = 0 }) {
  return e > GW() ? e : void 0;
}
function k(e) {
  if (e === void 0) return;
  return Math.min(Math.max(e, import_chunk_tt4yhkc0.HPo), import_chunk_tt4yhkc0.LAt);
}
var X = 16, m = [{ ranges: [[128, 65535]], cost: [0.92, 0, 0.92, 0.6] }, { ranges: [[0, 127]], cost: [0.4, 0.88, 0.95, 0.1], costBeforeOpus47: [0.36, 0.74, 0.78, 0.1] }, { ranges: [[97, 122]], cost: [0.2, 0.46, 0.71], costBeforeOpus47: [0.06, 0.68, 0.6] }, { ranges: [[65, 90]], cost: [0.74, 0.64, 0.92], costBeforeOpus47: [0.35, 0.28, 0.65] }, { ranges: [[48, 57]], cost: [0.15, 1.47, 0.33] }, { ranges: [[32, 32], [9, 9]], cost: [0.05, 0] }, { ranges: [[10, 10], [13, 13]], cost: [0, 1.25] }, { ranges: [[192, 879], [7680, 7935]], cost: [1.6, 0] }, { ranges: [[880, 1023]], cost: [0.74, 0] }, { ranges: [[1024, 1327]], cost: [0.42, 0] }, { ranges: [[1328, 2303]], cost: [0.72, 0] }, { ranges: [[2304, 7679]], cost: [0.9, 0] }, { ranges: [[12352, 12543]], cost: [0.77, 0] }, { ranges: [[13312, 40959]], cost: [1.07, 0] }, { ranges: [[44032, 55215]], cost: [1.31, 0] }], W = 40, Y = 18, Z = (0, import_chunk_839h1d5e.Co)(() => {
  let e = new Uint8Array(65536);
  for (let [r, { ranges: o }] of m.entries()) for (let [i, s] of o) e.fill(r, i, s + 1);
  return e;
});
function h(e, r) {
  if (typeof e !== "string") return 0;
  let o = Z(), i = new Uint32Array(m.length), s = new Uint32Array(m.length), u = new Uint32Array(m.length), d = new Uint32Array(m.length), g = -1, A = 0;
  for (let f = 0; f < e.length; f++) {
    let l = o[e.charCodeAt(f)];
    if (l !== g) s[l]++, g = l, A = f;
    if (f - A < X) i[l]++;
    else if (e.charCodeAt(f) === e.charCodeAt(f - 1)) d[l]++;
    else u[l]++;
  }
  let b = 0;
  for (let [f, { cost: l, costBeforeOpus47: z = l }] of m.entries()) {
    let [O, H, P = O, V = P] = r === 4 ? z : l;
    b += i[f] * O + s[f] * H + u[f] * P + d[f] * V;
  }
  return Math.round(b);
}
function qlo(e, { maxTokens: r, maxLength: o }, i) {
  let s = 0, u = Math.min(e.length, Math.floor(o));
  if (h(e.slice(0, u), i) <= r) return u;
  while (u - s > 1) {
    let d = Math.floor((s + u) / 2);
    if (h(e.slice(0, d), i) <= r) s = d;
    else u = d;
  }
  return s;
}
function M(e, r, o) {
  let i = W + h(e, o);
  for (let [s, u] of Object.entries(r)) i += Y + h(s + (typeof u === "string" ? u : (0, import_chunk_w578pjby._)(u)), o);
  return i;
}
function w(e, r = 4) {
  return Math.round(e / r);
}
function Ul(e, r) {
  if (typeof e !== "string") return 0;
  return typeof r === "object" ? h(e, r.byCharacterKind) : w(e.length, r);
}
function zEi(e, r) {
  if (r === void 0 || typeof e !== "object" || e === null) return;
  let o = r.get(e);
  if (o !== void 0) return o;
  let i = (0, import_chunk_w578pjby._)(e);
  if (typeof i !== "string") return;
  return r.set(e, i.length), i.length;
}
function N(e) {
  switch (e) {
    case "json":
    case "jsonl":
    case "jsonc":
      return 2;
    default:
      return 4;
  }
}
function x0n(e, r) {
  return Ul(e, N(r));
}
function P0n(e) {
  let r = (0, import_chunk_ma3kja9f.T)(e) ? U(e.taskDelivery) : [];
  if (r.length > 0) return r.length * R + Ul((0, import_chunk_w578pjby._)(e, (o, i) => r.includes(i) ? void 0 : i));
  return qEi(e) || Ul((0, import_chunk_w578pjby._)(e));
}
var R = 2e3;
function U(e) {
  let r = (0, import_chunk_xfj2cwfv._6n)(e), o = (0, import_chunk_ma3kja9f.T)(r) && (0, import_chunk_ma3kja9f.T)(r.result) ? r.result.content : void 0;
  return Array.isArray(o) ? o.filter((i) => (0, import_chunk_ma3kja9f.T)(i) && i.type === "image") : [];
}
function VEi(e) {
  return U(e).length * R;
}
var KEi = 3e3;
function qEi(e, r) {
  return (0, import_chunk_xfj2cwfv.gb)(bDe(e) ?? [], ({ pages: o, result: [, i] }) => i.type === "page_texts" ? Ul(i[R0n]?.() ?? "", r) : o * KEi);
}
function Une(e, r, o) {
  if (!e) return 0;
  if (typeof e === "string") return Ul(e, r);
  if (!Array.isArray(e)) return 0;
  let i = 0;
  for (let s of e) i += Gfe(s, r, o);
  return i;
}
function Jmr(e) {
  if (!Array.isArray(e)) return false;
  return e.some((o) => {
    if (!(0, import_chunk_jsm9pvcb.Wi)(o)) return false;
    if (o.type === "tool_result") return "content" in o && Jmr(o.content);
    if (o.type !== "document") return false;
    let i = "source" in o ? o.source : void 0;
    return !((0, import_chunk_jsm9pvcb.Wi)(i) && (i.type === "text" || i.type === "content"));
  });
}
function Gfe(e, r, o) {
  if (typeof e === "string") return Ul(e, r);
  if (!(0, import_chunk_jsm9pvcb.Wi)(e)) return 0;
  if (e.type === "text") return Ul(e.text, r);
  if (e.type === "document" && "source" in e && typeof e.source === "object" && e.source !== null) {
    let s = e.source;
    if (s.type === "text") {
      let u = e.title?.split(".").pop()?.toLowerCase() ?? "", d = N(u);
      return Ul(s.data, typeof r === "number" ? Math.min(r, d) : r ?? d);
    }
    if (s.type === "content") {
      if (typeof s.content === "string") return Ul(s.content, r);
      if (Array.isArray(s.content)) return Une(s.content.filter((u) => typeof u === "object" && u !== null), r);
    }
  }
  if (e.type === "image" || e.type === "document") return R;
  if (e.type === "tool_result") return Une(e.content, r, o);
  if (e.type === "thinking") return Ul(e.thinking, r);
  if (e.type === "tool_use" && typeof r === "object" && (0, import_chunk_ma3kja9f.T)(e.input)) return M(e.name, e.input, r.byCharacterKind);
  let i = typeof r === "object" ? r.byCharacterKind : r;
  if (e.type === "tool_use") {
    let s = typeof e.name === "string" ? zEi(e.input, o) : void 0;
    if (s !== void 0) return w(e.name.length + s, i);
    return Ul(e.name + (0, import_chunk_w578pjby._)(e.input ?? {}), i);
  }
  if (e.type === "redacted_thinking") return Ul(e.data, i);
  return Ul((0, import_chunk_w578pjby._)(e), i);
}
var q = 64;
function xel(e) {
  let { staged: r, chainPublishIds: o, chainPublishSlots: i } = (0, import_chunk_0rkwgmhx.se)().autoEditAttribution, s = { ...e, consumed: false };
  if (r.set(e.slug, s), i.set(e.expectedToolUseId, s), o.add(e.expectedToolUseId), o.size > q) {
    let u = o.values().next().value;
    if (u !== void 0) o.delete(u);
  }
  return s;
}
function Prn(e) {
  return e !== void 0 && (0, import_chunk_0rkwgmhx.se)().autoEditAttribution.chainPublishIds.has(e);
}
function L(e) {
  if (e === void 0) return;
  return (0, import_chunk_0rkwgmhx.se)().autoEditAttribution.chainPublishSlots.get(e);
}
function XEi(e) {
  return L(e) !== void 0;
}
function Pel(e) {
  let r = L(e), o = { roundTrip: r?.roundTrip };
  if (r !== void 0) r.roundTrip = void 0;
  return o;
}
function JEi(e, r) {
  let o = (0, import_chunk_0rkwgmhx.se)().autoEditAttribution.staged.get(e);
  if (o === void 0 || o.consumed || r === void 0 || o.expectedToolUseId !== r) return null;
  return o.baseVersion;
}
function Oel(e, r, o) {
  let i = (0, import_chunk_0rkwgmhx.se)().autoEditAttribution.staged.get(e);
  if (i === void 0 || i.consumed || r === void 0 || i.expectedToolUseId !== r || i.slug !== e) return null;
  let s = Object.keys(o), u = Object.keys(i.input);
  if (s.length !== u.length || !u.every((d) => o[d] === i.input[d])) return null;
  return { contentSha256: i.contentSha256 };
}
function Iel(e, r) {
  let o = (0, import_chunk_0rkwgmhx.se)().autoEditAttribution.staged.get(e);
  if (o === void 0 || o.consumed || r === void 0 || o.expectedToolUseId !== r) return null;
  return o.consumed = true, { threadId: o.threadId, commentId: o.commentId, recordVersionEcho: (i) => {
    o.versionEcho = i;
  } };
}
function Mel(e) {
  let { staged: r, chainPublishSlots: o } = (0, import_chunk_0rkwgmhx.se)().autoEditAttribution;
  if (r.get(e.slug) === e) r.delete(e.slug);
  if (o.get(e.expectedToolUseId) === e) o.delete(e.expectedToolUseId);
}
var S = 3, J = 1024, Q = /* @__PURE__ */ new Set([`ec_${import_chunk_r8478wtb.NOr}`, import_chunk_r8478wtb.FOr, `ec_${import_chunk_r8478wtb.$Or}`, "policy_fetch_failed", "policy_route_missing", `ec_${import_chunk_r8478wtb.UOr}`, import_chunk_r8478wtb.BOr, ...Object.values(import_chunk_r8478wtb.jOr)]);
function x(e) {
  return typeof e === "string" ? e.slice(0, J) : "";
}
function ee(e) {
  if (typeof e !== "object" || e === null) return "publish\0\0\0";
  let r = "action" in e ? x(e.action) : "", o = "file_path" in e ? x(e.file_path) : "", i = "url" in e ? x(e.url) : "", s = "thread_id" in e ? x(e.thread_id) : "";
  return `${r || "publish"}\0${o}\0${i}\0${s}`;
}
function D(e, r, o) {
  let i = (0, import_chunk_0rkwgmhx.se)().rejectBreaker, s = ee(e), u = i.get(s), d = u !== void 0 && u.reason === r && u.fingerprint === o ? u.count + 1 : 1;
  if (i.set(s, { count: d, reason: r, fingerprint: o }), d === S) (0, import_chunk_y53wbr8a.a)("tengu_artifact_reject_breaker", { reason: (0, import_chunk_jv7av99m.dA)(r) });
  return d >= S;
}
var y = `IMPORTANT: Artifact calls for this target have now been rejected ${S} or more times in this session for the same reason. Do not send the same call again: either make the specific change the error describes, or stop calling Artifact for this target and tell the user what is failing and why.`, Orn = y.length + 2;
function Irn(e) {
  return e.startsWith(`${y}

`) ? e.slice(y.length + 2) : e;
}
function Xlo(e, r, o) {
  let i = Irn(r), s = (0, import_chunk_myvyhcm0.Zn)(i);
  return D(e, o, s) && !Q.has(o) ? `${y}

${i}` : i;
}
var te = "schema";
function ne(e) {
  if (e === void 0) return "";
  return e.issues.map((r) => {
    let o = r.code === "unrecognized_keys" ? [...r.keys].sort().join(",") : "";
    return `${r.code}:${r.path.map(String).join(".")}:${o}`;
  }).sort().join("|");
}
function F(e) {
  return (0, import_chunk_75f58nqg.ehl)(e.toolUseId) || Prn(e.toolUseId);
}
function Hel(e, r = {}) {
  let { validationErrorSteer: o, validateInput: i, call: s } = e, u = { validationErrorSteer: (d, g) => re(d, g, r.schemaSteerOverride?.(d) ?? null, o?.(d, g) ?? null), ...i !== void 0 && { validateInput: oe(i, r.onValidateReject) }, call: ie(s) };
  return Object.defineProperties(Object.defineProperties({}, Object.getOwnPropertyDescriptors(e)), Object.getOwnPropertyDescriptors(u));
}
function re(e, r, o, i) {
  let s = (o !== null ? "override|" : "") + ne(r), u = D(e, te, s);
  if (o !== null) return o;
  let g = [u ? y : null, i].filter((A) => A !== null).join(`

`);
  return g === "" ? null : g;
}
function oe(e, r) {
  return async (o, i) => {
    let s = await e(o, i);
    if (s.result) return s;
    let u = F(i);
    try {
      r?.(o, { ...s }, { unattended: u });
    } catch (d) {
      (0, import_chunk_w578pjby.t)(`artifact reject observer threw: ${d instanceof Error ? d.message : typeof d}`, { level: "error" });
    }
    if (u) return s;
    return { ...s, message: Xlo(o, s.message, `ec_${s.errorCode}`) };
  };
}
function ie(e) {
  return async (r, o, ...i) => {
    if (F(o)) return e(r, o, ...i);
    let s;
    try {
      s = await e(r, o, ...i);
    } catch (u) {
      if (u instanceof import_chunk_r8478wtb.pt) u.message = Xlo(r, u.message, u.reasonCode ?? "unknown");
      throw u;
    }
    return ue(), s;
  };
}
function ue() {
  (0, import_chunk_0rkwgmhx.se)().rejectBreaker.clear();
}
var Jlo = 1e5, Qmr = import_chunk_tt4yhkc0.ME - 2e3;
function BCe(e) {
  return import_http.STATUS_CODES[e] ?? "Unknown Status";
}
