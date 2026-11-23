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
var chunk_x0h6cdf4_exports = {};
__export(chunk_x0h6cdf4_exports, {
  GKs: () => GKs,
  STa: () => STa,
  UEn: () => UEn,
  WKs: () => WKs,
  X2o: () => X2o,
  _Ta: () => _Ta,
  cTa: () => cTa,
  dTa: () => dTa,
  fTa: () => fTa,
  gTa: () => gTa,
  hTa: () => hTa,
  jKs: () => jKs,
  mTa: () => mTa,
  pTa: () => pTa,
  uTa: () => uTa,
  xMt: () => xMt,
  yTa: () => yTa
});
module.exports = __toCommonJS(chunk_x0h6cdf4_exports);
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_g9n176jp = require("/$bunfs/root/chunk-g9n176jp.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_wzzzxdne = require("/$bunfs/root/chunk-wzzzxdne.js");
var import_chunk_cd75h1kz = require("/$bunfs/root/chunk-cd75h1kz.js");
var import_chunk_bp9b0hd8 = require("/$bunfs/root/chunk-bp9b0hd8.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var L = 2, v = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Thai}\p{Script=Lao}\p{Script=Khmer}\p{Script=Myanmar}\p{Script=Tibetan}]/gu, Q = /* @__PURE__ */ new Set(["?", "\uFF1F", "\u061F"]), V = /^[\s\p{P}\p{S}\p{M}]$/u;
function b(e) {
  return (0, import_chunk_4smdap7r.U)(e.split(/\s+/), Boolean);
}
function C(e) {
  return e.match(v)?.length ?? 0;
}
function W(e, n) {
  return b(e) >= n || C(e) >= n * L;
}
function X2o(e) {
  return Math.max(b(e), Math.floor(C(e) / L));
}
function dTa(e) {
  if (e < 3) return "0-2";
  if (e < 10) return "3-9";
  if (e < 40) return "10-39";
  return "40+";
}
function N(e) {
  let n = [...e];
  for (let r = n.length - 1; r >= 0; r--) {
    let i = n[r];
    if (Q.has(i)) return true;
    if (!V.test(i)) return false;
  }
  return false;
}
function A(e) {
  return e.type === "user" || e.type === "assistant";
}
function cTa(e, n) {
  if (n === null || n === void 0) return (0, import_chunk_4smdap7r.U)(e, A);
  let r = false, i = 0;
  for (let o of e) {
    if (!r) {
      if (o.uuid === n) r = true;
      continue;
    }
    if (A(o)) i++;
  }
  if (!r) return (0, import_chunk_4smdap7r.U)(e, A);
  return i;
}
var uTa = 3;
function UEn(e) {
  let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set();
  for (let o of e) if (o.type === "assistant" && o.message.stop_reason === "refusal") for (let a of o.message.content) {
    if (a.type !== "thinking" && a.type !== "redacted_thinking") n.add(o.message.id);
    if (a.type === "tool_use") r.add(a.id);
  }
  if (n.size === 0) return e;
  let i = [];
  for (let o of e) {
    if (o.type === "assistant") {
      if (!n.has(o.message.id)) i.push(o);
      continue;
    }
    if (o.type !== "user") {
      i.push(o);
      continue;
    }
    if (o.refusedMessageId !== void 0 && n.has(o.refusedMessageId)) continue;
    let a = o.message.content;
    if (typeof a === "string") {
      i.push(o);
      continue;
    }
    let c = a.filter((f) => !(f.type === "tool_result" && r.has(f.tool_use_id)));
    if (c.length === a.length) i.push(o);
    else if (c.length > 0) i.push({ ...o, message: { ...o.message, content: c } });
  }
  return i;
}
function fTa(e) {
  return e.some((n) => n.type === "attachment" && n.attachment.type === "max_turns_reached");
}
function pTa(e) {
  return e.findLast((n) => n.type === "assistant")?.isApiErrorMessage === true;
}
function mTa(e, n, r, i = false) {
  let o = n === void 0 ? -1 : e.findIndex((a) => a.uuid === n);
  if (o !== -1) return w(e.slice(o + 1), r);
  if (r) return w(i ? e.slice(J(e)) : e, true);
  return n === void 0 && w(e, false);
}
function J(e) {
  return Math.max(e.findLastIndex((n) => n.type === "user" && n.interruptedByShutdown !== true && !(0, import_chunk_wzzzxdne.SG)(n.message.content) && !(n.promptSource === void 0 && (0, import_chunk_xfj2cwfv.sct)(n)) && xMt(n) !== void 0), 0);
}
function w(e, n) {
  let r = /* @__PURE__ */ new Set();
  for (let i of e) {
    if (i.type === "user") {
      let a = i.message.content;
      if (Array.isArray(a) && a.some((c) => c.type === "tool_result" && c.is_error !== true && r.has(c.tool_use_id))) return true;
      continue;
    }
    if (i.type !== "assistant") continue;
    let o = i.message.content;
    if (!Array.isArray(o)) continue;
    for (let a of o) {
      if (n && a.type === "tool_use" && import_chunk_865at33z.JCt.has(a.name)) return true;
      if (a.type === "tool_use" && a.name === import_chunk_p1ewvgeh.Pm) {
        r.add(a.id);
        continue;
      }
      let c = jKs(a);
      if (c !== void 0 && (0, import_chunk_865at33z.cee)(c)) return true;
    }
  }
  return false;
}
var F = 3;
function j(e) {
  if (e.type !== "user" || e.isMeta) return false;
  let n = e.message.content;
  if (typeof n === "string") return b(n) >= F;
  if (!Array.isArray(n)) return false;
  return n.some((r) => r.type === "text" && b(r.text) >= F);
}
function hTa(e, n) {
  for (let r = e.length - 1; r >= 0; r--) {
    let i = e[r];
    if (i === void 0 || !(0, import_chunk_865at33z.s_)(i)) continue;
    if (i.type === "user") {
      if (!i.isMeta) return i.uuid;
    } else if (i.type === "attachment" && i.attachment.type === "queued_command" && !i.attachment.isMeta && i.attachment.source_uuid !== void 0) return i.attachment.source_uuid;
  }
  return n?.uuid;
}
function gTa(e, n) {
  let r = n === void 0;
  for (let i of e) {
    if (!r) {
      if (i.uuid === n) r = true;
      continue;
    }
    if (j(i)) return true;
  }
  if (!r) return e.some(j);
  return false;
}
function Y(e, n) {
  if (n === void 0) return e;
  let r = e.findIndex((i) => i.uuid === n);
  return r === -1 ? e : e.slice(r + 1);
}
function xMt(e) {
  if (e.type === "attachment") {
    let { attachment: r } = e;
    return r.type === "queued_command" && !r.isMeta ? E(r.prompt) : void 0;
  }
  if (e.type !== "user" || e.isMeta || e.isCompactSummary) return;
  let n = e.message.content;
  if (Array.isArray(n) && n.every((r) => r.type === "tool_result")) return;
  return E(n);
}
function E(e) {
  return typeof e === "string" ? e : e.filter((n) => n.type === "text").map((n) => n.text).join(`
`);
}
function O(e) {
  if (e.type !== "assistant") return;
  let n = e.message.content;
  return Array.isArray(n) ? E(n) : void 0;
}
function _Ta(e, n, r) {
  let o = e.flatMap((a, c) => {
    let f = xMt(a);
    return f === void 0 ? [] : [{ index: c, text: f }];
  }).at(-1);
  if (o === void 0) return false;
  return W(WKs(e, r), n) || o.text.trim() !== "" && z(e, o.index);
}
function WKs(e, n) {
  return e.flatMap((r) => xMt(r) ?? []).slice(-Math.max(n, 1)).join(`
`);
}
function z(e, n) {
  for (let r = n - 1; r >= 0; r--) {
    let i = e[r];
    if (xMt(i) !== void 0) return false;
    let o = O(i);
    if (o !== void 0 && o.trim() !== "") return N(o);
  }
  return false;
}
function yTa(e, n) {
  let r = Y(e, n).flatMap((o) => {
    let a = xMt(o);
    if (a === void 0) return [];
    let c = o.type === "attachment" && o.attachment.type === "queued_command" ? o.attachment.origin : o.type === "user" ? o.origin : void 0;
    return [{ message: o, text: a, origin: c }];
  }), i = r.filter((o) => (0, import_chunk_865at33z.s_)(o.message));
  return { userTurns: r.length, ownWordsTurns: i.length, ownWordsChars: i.reduce((o, a) => o + a.text.length, 0), taskNotificationTurns: (0, import_chunk_4smdap7r.U)(r, (o) => o.origin?.kind === "task-notification"), unstampedTurns: (0, import_chunk_4smdap7r.U)(r, (o) => o.origin === void 0), proseWords: X2o(r.map((o) => o.text).join(`
`)) };
}
function jKs(e) {
  if (e.type !== "tool_use" || e.name !== import_chunk_rb36kwbn.lt && e.name !== import_chunk_rb36kwbn.Dt) return;
  let n = e.input;
  if (typeof n === "object" && n !== null && "file_path" in n) {
    let r = n.file_path;
    return typeof r === "string" ? r : void 0;
  }
  return;
}
var G = 64, D = 2e4, X = 'Answer with JSON only: {"write_likely": true} or {"write_likely": false}.', H = `

`, q = "\u2026", Z = [{ fresh: true, user: true }, { fresh: true, user: false }, { fresh: false, user: true }, { fresh: false, user: false }];
function ee(e, n, r, i) {
  e = (0, import_chunk_bzyb60p0.uQt)([...e]);
  let o = n === void 0 ? -1 : e.findIndex((p) => p.uuid === n), a = [], c = 0;
  for (let p = e.length - 1; p >= 0; p--) {
    let m = e[p], y = m.type === "assistant" ? m.isApiErrorMessage || m.message.model === import_chunk_bp9b0hd8.xs || m.message.stop_reason === "refusal" ? void 0 : O(m) : GKs(m) ? void 0 : xMt(m);
    if (y === void 0 || y.trim() === "") continue;
    let g = m.type !== "assistant";
    if (a.push({ user: g, fresh: p > o, body: y.trim() }), g && ++c >= r) break;
  }
  if (!a[0]?.fresh) return { text: "", userTurns: 0 };
  let f = /* @__PURE__ */ new Map(), h = i;
  for (let { fresh: p, user: m } of Z) for (let [y, g] of a.entries()) {
    if (g.fresh !== p || g.user !== m) continue;
    let M = m ? "User: " : "Assistant: ", _ = (f.size > 0 ? H.length : 0) + M.length;
    if (_ + g.body.length <= h) {
      f.set(y, M + g.body), h -= _ + g.body.length;
      continue;
    }
    let x = h - _ - q.length;
    if (x > 0) f.set(y, M + q + (0, import_chunk_7cfjrnwy.qa)(g.body, x));
    h = 0;
    break;
  }
  return { text: a.map((p, m) => f.get(m)).filter((p) => p !== void 0).reverse().join(H), userTurns: c };
}
async function STa({ config: e, messages: n, sinceUuid: r, window: i, signal: o, credentials: a }) {
  let c = Date.now(), f = e.model ?? "", h = "", k = 0, p = (y, g) => {
    if (g !== void 0) (0, import_chunk_cqa9hrgx.l)("ccr_memory_first_look", g);
    else if (y !== "empty") (0, import_chunk_cqa9hrgx.u)("ccr_memory_first_look");
    return { verdict: y, error: g, model: f, durationMs: Date.now() - c, inputChars: h.length, userTurns: k };
  }, m = (0, import_chunk_cd75h1kz.Bo)(o, { timeoutMs: D, refTimer: true });
  try {
    let y = e.model ?? import_chunk_c203g5kd.s.ANTHROPIC_SMALL_FAST_MODEL ?? (0, import_chunk_865at33z.Nj)();
    f = e.model ?? (0, import_chunk_865at33z.Wx)();
    let g = ee(n, r, i, e.maxInputChars);
    if (h = g.text, k = g.userTurns, h === "") return p("empty");
    if (!(0, import_chunk_865at33z.Fj)(f)) return (0, import_chunk_w578pjby.t)(`[extractMemories] first look: ${f} is not permitted by the organization's model policy; the pass is not skipped`), p("error", "policy");
    if ((0, import_chunk_865at33z.ihe)(y) !== y || (0, import_chunk_865at33z.ihe)(f) !== f) return (0, import_chunk_w578pjby.t)(`[extractMemories] first look: managed settings deny the first look's model (${y}, sent as ${f}); the pass is not skipped`), p("error", "managed_denied");
    let [M, _] = (0, import_chunk_865at33z.ude)(f), x = (0, import_chunk_g9n176jp.rM)(n, void 0, false), B = x.length > 0 ? (0, import_chunk_g9n176jp.e9)(x) : "", K = (0, import_chunk_xfj2cwfv.J9)(n).map((T) => `${T}
`).join(""), R = await (0, import_chunk_5appeerh.Tn)((0, import_chunk_bzyb60p0.QD)({ model: f, system: e.instruction, skipSystemPromptPrefix: true, messages: [{ role: "user", content: `${B}${K}<exchanges>
${h}
</exchanges>

${X}` }], max_tokens: G + _, thinking: M, output_format: { type: "json_schema", schema: { type: "object", properties: { write_likely: { type: "boolean" } }, required: ["write_likely"], additionalProperties: false } }, timeout: D, maxRetries: 0, signal: m.signal, forceAttributionHeader: true, querySource: "extract_memories_first_look", credentials: a }), m.signal, () => new import_chunk_jv7av99m.Ie()), I = R.content.find((T) => T.type === "text"), S = I?.type === "text" ? (0, import_chunk_0jve1fep.et)((0, import_chunk_0jve1fep.fF)(I.text), false) : null, P = typeof S === "object" && S !== null && "write_likely" in S ? S.write_likely : void 0;
    if (typeof P !== "boolean") return (0, import_chunk_w578pjby.t)(`[extractMemories] first look: the model did not answer {"write_likely": true|false} (stop reason ${R.stop_reason}); the pass is not skipped`), p("error", "no_boolean");
    return p(P ? "yes" : "no");
  } catch (y) {
    return (0, import_chunk_w578pjby.t)(`[extractMemories] first look failed: ${(0, import_chunk_jv7av99m.d)(y)}; the pass is not skipped`), p("error", y instanceof import_chunk_jv7av99m.CF || m.signal.aborted && !o.aborted ? "timeout" : (0, import_chunk_jv7av99m.Fe)(y) ? "aborted" : "api_error");
  } finally {
    m.cleanup();
  }
}
function GKs(e) {
  let n = e.type === "attachment" && e.attachment.type === "queued_command" ? (0, import_chunk_xfj2cwfv.K0)(e.attachment.origin, e.attachment.commandMode) : e.type === "user" ? e.origin : void 0;
  return n?.kind === "task-notification" && n.subkind !== "scheduled-trigger";
}
