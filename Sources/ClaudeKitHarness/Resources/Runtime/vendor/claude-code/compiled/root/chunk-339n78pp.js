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
var chunk_339n78pp_exports = {};
__export(chunk_339n78pp_exports, {
  B5: () => B5,
  GAi: () => GAi,
  H$t: () => H$t,
  Qol: () => Qol,
  Rgr: () => Rgr,
  VLn: () => VLn,
  WAi: () => WAi,
  Zol: () => Zol,
  a9e: () => a9e,
  asl: () => asl,
  dsl: () => dsl,
  esl: () => esl,
  eus: () => eus,
  fN: () => fN,
  gwt: () => gwt,
  isl: () => isl,
  iuo: () => iuo,
  jAi: () => jAi,
  lsl: () => lsl,
  nsl: () => nsl,
  nus: () => nus,
  osl: () => osl,
  rsl: () => rsl,
  rus: () => rus,
  ssl: () => ssl,
  suo: () => suo,
  tsl: () => tsl,
  tus: () => tus,
  xgr: () => xgr,
  z6: () => z6,
  zAi: () => zAi
});
module.exports = __toCommonJS(chunk_339n78pp_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_0ha8wex8 = require("/$bunfs/root/chunk-0ha8wex8.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_73gwqz1r = require("/$bunfs/root/chunk-73gwqz1r.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var a9e = "modelFacingMessage";
var P = 20, q = 500, k = 64, K = 200, I = 24, Rgr = 20, W = 4e3, Q = 4e3, V = 7, Y = /[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\u034F\u115F\u1160\u17B4\u17B5\u180B-\u180F\u2065\u3164\uFE00-\uFE0F\uFFA0\uFFF0-\uFFF8\u{E0000}-\u{E0FFF}]/u;
function B5(e) {
  if (e instanceof import_chunk_jv7av99m.Ie) return e.message || import_chunk_0ha8wex8.ou;
  if (!(e instanceof Error)) return String(e);
  let { fullMessage: n, capped: t } = L(e), i = "truncationNote" in e && typeof e.truncationNote === "string" && e.truncationNote.length > 0 ? e.truncationNote : void 0;
  return i !== void 0 && t !== n ? `${t}

${i}` : t;
}
function Qol(e) {
  let { fullMessage: n, capped: t } = L(e);
  return t !== n;
}
function L(e) {
  let t = xgr(e).filter(Boolean).join(`
`).trim() || "Command failed with no output", i = "maxErrorChars" in e && typeof e.maxErrorChars === "number" && Number.isFinite(e.maxErrorChars) && e.maxErrorChars > 0 ? e.maxErrorChars : void 0;
  return { fullMessage: t, capped: (0, import_chunk_865at33z.ng)(t, i) };
}
function xgr(e) {
  if (e instanceof import_chunk_jv7av99m.ST) return [`Exit code ${e.code}`, e.interrupted ? import_chunk_0ha8wex8.ou : "", e.stderr, e.stdout];
  let n = [e.message];
  if ("stderr" in e && typeof e.stderr === "string") n.push(e.stderr);
  if ("stdout" in e && typeof e.stdout === "string") n.push(e.stdout);
  return n;
}
function R(e, n) {
  if (n || Y.test(e)) return `\\u{${e.codePointAt(0)?.toString(16).toUpperCase()}}`;
  switch (e) {
    case "`":
      return "'";
    case "<":
      return "\u2039";
    case ">":
      return "\u203A";
    default:
      return e;
  }
}
function H$t(e) {
  let n = e.length - e.trimStart().length, t = e.trimEnd().length, i = "", o = "", a = 0, u = 0;
  for (let c of e) {
    if (i += R(c, u < n || u >= t), u += c.length, i.length <= k - I) o = i, a = u;
    if (i.length > k) break;
  }
  if (i.length <= k) return i;
  let h = "", l = e.length;
  for (let c of Array.from((0, import_chunk_7cfjrnwy.qa)(e, I)).reverse()) {
    let f = l - c.length, m = R(c, f < n || f >= t) + h;
    if (m.length > I) break;
    h = m, l = f;
  }
  let d = l - a;
  return `${o}\u2026 [+${d} ${(0, import_chunk_7cfjrnwy.O)(d, "char")}] \u2026${h}`;
}
function Zol(e) {
  let n = "", t = 0;
  for (let i of e) {
    let o = R(i, false);
    if (n.length + o.length > K) break;
    n += o, t += i.length;
  }
  return { shown: n, taken: t };
}
function w(e) {
  if (e.length === 0) return "";
  return H$t(e.reduce((n, t, i) => {
    let o = String(t);
    if (typeof t === "number") return `${String(n)}[${o}]`;
    return i === 0 ? o : `${String(n)}.${o}`;
  }, ""));
}
function M(e) {
  if (Array.isArray(e)) return e.every(M);
  if (!(0, import_chunk_ma3kja9f.T)(e)) return true;
  return Object.entries(e).every(([n, t]) => (n === "path" || n === "keys") && Array.isArray(t) ? t.every((i) => typeof i !== "string" || H$t(i) === i) : M(t));
}
function H(e) {
  let n = e.message;
  return n.length <= Q && M(e.issues) ? n : void 0;
}
function D(e, n) {
  return e.slice(0, n).map((t) => typeof t === "string" ? H$t(t) : t);
}
function esl(e) {
  let n = Rgr;
  return H(e) ?? (0, import_chunk_w578pjby._)(e.issues.slice(0, P).map((t) => {
    let i = { code: t.code, path: D(t.path, V) };
    if (t.code !== "unrecognized_keys") return i;
    let o = D(t.keys, n);
    return n -= o.length, { ...i, keys: o };
  }));
}
function U(e) {
  return e.code !== "invalid_type" && e.code !== "unrecognized_keys" && !j(e);
}
function j(e) {
  return e.code === "custom" && e.params?.[a9e] === true;
}
function C(e) {
  return Math.max(0, ...e.filter((n) => n.path.length === 0).map((n) => {
    switch (n.code) {
      case "invalid_type":
        return 2;
      case "invalid_value":
        return 1;
      case "invalid_union":
        return n.errors.length > 0 ? Math.min(...n.errors.map(C)) : 0;
      default:
        return 0;
    }
  }));
}
function X(e) {
  if (e.code !== "invalid_union" || e.errors.length === 0) return [e];
  return e.errors.reduce((t, i) => {
    let o = C(i) - C(t);
    return o < 0 || o === 0 && i.length < t.length ? i : t;
  }).flatMap((t) => X({ ...t, path: [...e.path, ...t.path] }));
}
function eus(e, n = "") {
  return `${e} was called with input that could not be parsed as JSON.
${n}Common causes: unescaped backslashes in file paths (use / or \\\\), unescaped control characters, or truncated output. Retry with valid JSON.`;
}
function VLn(e, n) {
  return e ? `${e}

${n}` : n;
}
function fN(e, n) {
  let t = n.issues.every(U), i = t ? H(n) : void 0;
  if (i !== void 0) return i;
  let o = t ? n.issues.flatMap(X) : n.issues, a = o.filter((r) => r.code === "invalid_type" && (r.message ?? "").includes("received undefined")).map((r) => r.path), u = o.filter((r) => r.code === "unrecognized_keys").flatMap((r) => r.keys.map((p) => [...r.path, p])), h = o.filter((r) => r.code === "invalid_type").filter((r) => !(r.message ?? "").includes("received undefined")), l = o.filter(j).map((r) => r.message), d = o.filter(U), c = a.length + u.length + h.length, f = c === Rgr + 1 ? c : Rgr, m = a.slice(0, f), b = h.slice(0, f - m.length), J = u.slice(0, f - m.length - b.length), g = [...m.map((r) => `The required parameter \`${w(r)}\` is missing`), ...J.map((r) => `An unexpected parameter \`${w(r)}\` was provided`), ...b.map((r) => {
    let p = (r.message ?? "").match(/received (\w+)/), y = p ? p[1] : "unknown";
    return `The parameter \`${w(r.path)}\` type is expected as \`${r.expected}\` but provided as \`${y}\``;
  })], x = c - g.length;
  if (x > 0) g.push(`(${x} more ${(0, import_chunk_7cfjrnwy.O)(x, "parameter")} not listed)`);
  g.push(...d.slice(0, P).map((r) => {
    let p = w(r.path), y = p === "" ? "The input" : `The parameter \`${p}\``, N = (0, import_chunk_7cfjrnwy.ed)((r.message ?? "").replace(/^Invalid input(?:: |$)/, ""), q);
    if (N !== "") return `${y} is invalid: ${N}`;
    return r.code === "invalid_union" ? `${y} matches none of the accepted forms` : `${y} is invalid`;
  }));
  let S = d.length - P;
  if (S > 0) g.push(`(${S} more ${(0, import_chunk_7cfjrnwy.O)(S, "issue")} not listed)`);
  let v = W, F = l.filter((r, p) => (v -= r.length, p === 0 || v >= 0));
  g.push(...F);
  let A = l.length - F.length;
  if (A > 0) g.push(`(${A} more ${(0, import_chunk_7cfjrnwy.O)(A, "issue")} not listed)`);
  return `${e} failed due to the following ${g.length > 1 ? "issues" : "issue"}:
${g.join(`
`)}`;
}
(0, import_chunk_adx6804h.B)();
function z6(e = (0, import_chunk_adx6804h.E)()) {
  return (0, import_chunk_adx6804h.bi)(gwt, e);
}
function gwt(e) {
  if (typeof e === "string") {
    let n = e.trim();
    if (/^[-+]?\d+(\.\d+)?$/.test(n)) {
      let t = Number(n);
      if (Number.isFinite(t)) return t;
    }
  }
  return e;
}
var tus = 64;
function nus(e, n) {
  let t = e;
  for (let i = 0; i < n.length; i++) {
    let { find: o, replace: a } = n[i];
    if (!(0, import_chunk_7cfjrnwy.Cf)(o) || !(0, import_chunk_7cfjrnwy.Cf)(a)) return { ok: false, reason: "malformed", op: i };
    let u = o === "" ? -1 : t.indexOf(o);
    if (u === -1) return { ok: false, reason: "not_found", op: i };
    if (t.indexOf(o, u + 1) !== -1) return { ok: false, reason: "ambiguous", op: i };
    t = t.slice(0, u) + a + t.slice(u + o.length);
  }
  if (t === e) return { ok: false, reason: "noop" };
  return { ok: true, content: t };
}
var suo = tus, rus = 65536, z = 268435456, G = 100;
function tsl() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_ARTIFACT_PUBLISH_EDITS ?? true;
}
function iuo(e) {
  let n = e.core ? "publish: small changes Claude makes to the file at `file_path` in this same call, instead of editing the file with Edit and publishing after." : "publish: small changes to make to the file at `file_path` in this same call, instead of editing the file with Edit and publishing after.", t = e.typesOn ? " Use it on a page (add `url` to update an artifact from another conversation) or on one data file of an artifact made from a type (its `url`, with that file as `file_path`)." : " Use it on a page (add `url` to update an artifact from another conversation).", i = [...e.typesOn ? ["`type_url`"] : [], ...e.multiFileOn ? ["`files`"] : []], o = i.length === 0 ? "" : ` Not allowed with ${i.length === 1 ? i[0] : `${i.slice(0, -1).join(", ")} or ${i.at(-1)}`}.`;
  return `${n}${t}${o} Each old_str is text copied exactly from the file as it now stands and must occur in it exactly once; new_str takes its place (empty deletes it). The edits apply in order, all or none: the file is published with them and then saved with them on disk, so it stays the source for later changes; on a miss nothing is changed or published, and the result says which edit failed and why.`;
}
var nsl = "Text copied exactly from the file; must occur once.", rsl = "Its replacement; empty deletes old_str.", osl = " For a small change to a page published from a file in this conversation, Claude can send the change as `edits` on the publish call itself (old_str/new_str pairs copied exactly from the file as it now stands) instead of editing the file first.", ssl = "The files you sent are still on disk. For the next small change to this file, send it as `edits` on a publish of the same file_path (old_str/new_str pairs copied exactly from the file as it now stands): that one call changes the file and what is published together, with no Read and no Edit. To change several files, or to rewrite most of the page, Edit the files and publish them in the same response; if an Edit reports that it did not apply, correct it and publish again. If the file's text is no longer in this conversation, Read it first.", isl = "Once that file has these edits too, the next small change to it can go as `edits` on a publish of the same file_path (old_str/new_str pairs copied exactly from the file as it then stands). To change several files, or to rewrite most of the page, Edit the files and publish them in the same response; if an Edit reports that it did not apply, correct it and publish again. If the file's text is no longer in this conversation, Read it first.";
function WAi(e) {
  let n = 0;
  for (let t = 0; t < e.length; t++) {
    let { old_str: i, new_str: o } = e[t];
    if (i === "") return { reason: "empty_old_str", edit: t };
    if (o.includes("\0")) return { reason: "malformed", edit: t };
    if (n += i.length + o.length, n > rus) return { reason: "too_large" };
  }
  return;
}
function jAi(e, n, t = {}) {
  let i = WAi(n);
  if (i !== void 0) return { ok: false, ...i };
  if (n.length * e.length > z) return { ok: false, reason: "too_much_work" };
  let o = (0, import_chunk_73gwqz1r.z_n)(e) === "CRLF", a = (d) => o ? d.replaceAll(`\r
`, `
`) : d, u = a(e), h = n.map((d) => ({ find: a(d.old_str), replace: a(d.new_str) })), l = nus(u, h);
  if (!l.ok) switch (l.reason) {
    case "noop":
      return { ok: false, reason: "noop" };
    case "ambiguous": {
      let d = u;
      for (let c = 0; c < l.op; c++) {
        let { find: f, replace: m } = h[c], b = d.indexOf(f);
        d = d.slice(0, b) + m + d.slice(b + f.length);
      }
      return { ok: false, reason: "ambiguous", edit: l.op, count: ee(d, h[l.op].find) };
    }
    default:
      return { ok: false, reason: l.reason, edit: l.op };
  }
  if (t.json === true && Z(u) && !Z(l.content)) return { ok: false, reason: "json_invalid" };
  return o ? { ...l, content: (0, import_chunk_2yx6c1y2.Bze)(l.content, "CRLF") } : l;
}
function ee(e, n) {
  let t = 0;
  for (let i = e.indexOf(n); i !== -1 && t < G; i = e.indexOf(n, i + 1)) t++;
  return t;
}
function Z(e) {
  try {
    return (0, import_chunk_w578pjby.te)(e), true;
  } catch {
    return false;
  }
}
function ne(e, n, t) {
  switch (e.reason) {
    case "empty_old_str":
      return `edits[${e.edit}] old_str is empty`;
    case "malformed":
      return `edits[${e.edit}] has a NUL character in new_str, or a broken character (an unpaired surrogate) in old_str or new_str`;
    case "too_large":
      return `old_str and new_str add up to more than ${rus} characters over all the edits; make a change that large with Edit and publish without edits`;
    case "too_much_work":
      return `${n} edits on a file of ${t} characters is more than one publish call will apply; send at most ${Math.max(1, Math.floor(z / Math.max(1, t)))} edits per call for a file this size, over as many calls as the change needs`;
    case "not_found":
      return `edits[${e.edit}] old_str does not occur in the file`;
    case "ambiguous":
      return `edits[${e.edit}] old_str occurs ${e.count >= G ? "at least " : ""}${e.count} times in the file; include more of the surrounding text so that it occurs once`;
    case "noop":
      return "the edits leave the file unchanged (it already reads that way); publish the file without edits if it should go out as it is";
    case "json_invalid":
      return "after these edits the file would no longer be valid JSON, which the page that reads it needs; correct the edit that breaks it (a missing comma, quote or bracket) and send this publish again with all of its edits";
  }
}
function se(e) {
  return e.reason === "not_found" || e.reason === "ambiguous";
}
function GAi(e, n, t, i) {
  let o = `No edits were applied and nothing was published: ${ne(e, n.length, t.length)}.`;
  if (!se(e)) return o;
  let a = `${o} The file's current text follows; copy old_str from it exactly and send the publish again.

${t}`;
  if (a.length <= i) return a;
  return `${o} The file is too long to show here: Read the file at file_path, copy old_str from it exactly and send the publish again.`;
}
function asl(e) {
  return `\0edits-base\0${e}`;
}
var lsl = "Applying `edits` changes the file at file_path, and an Edit permission check requires approval here: nothing was published and the file is unchanged. Retry the publish so it can be asked, or Edit the file and publish it without edits.";
function dsl(e, n, t) {
  let i = n === "page" ? "the published page" : "what was published";
  if (t === void 0) return e === 1 ? `The edit was written to the file after it was published, so the file matches ${i}.` : `The ${e} edits were written to the file after it was published, so the file matches ${i}.`;
  let o = e === 1, a = `Published \u2014 ${n === "page" ? "the page" : "the artifact"} now has ${o ? "the edit" : `the ${e} edits`}, but the file at file_path does not`;
  if (t === "write_failed") return `${a}: writing it back failed, and the file may be partly written. Read it before anything else, restore it to the published text (${i}, ${o ? "the edit" : "the edits"} included), and only then publish it again; publishing it as it is could put damaged content ${n === "page" ? "on the page" : "in the artifact"}.`;
  return `${a} (${t === "changed_during_publish" ? "it changed on disk while the publish ran, so it was left as it is" : t === "not_writable" ? "it could not be opened for writing (read-only), so it was left as it is" : "it has other names on disk (a hard link), so it was left as it is"}). Apply the same ${o ? "edit" : "edits"} to that file with Edit before you publish it again${t === "hard_linked" ? ", and publish it without `edits` while it has other names" : ""}; publishing it as it is would revert ${o ? "it" : "them"}.`;
}
function zAi(e, n) {
  if (e[0] === 255 && e[1] === 254) return Buffer.concat([Buffer.from([255, 254]), Buffer.from(n, "utf16le")]);
  let t = e[0] === 239 && e[1] === 187 && e[2] === 191;
  return Buffer.concat([...t ? [Buffer.from([239, 187, 191])] : [], Buffer.from(n, "utf8")]);
}
