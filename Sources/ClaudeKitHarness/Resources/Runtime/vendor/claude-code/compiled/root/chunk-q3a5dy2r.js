const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_q3a5dy2r_exports = {};
__export(chunk_q3a5dy2r_exports, {
  $At: () => $At,
  $he: () => $he,
  BAt: () => BAt,
  C3l: () => C3l,
  COs: () => COs,
  Dhe: () => Dhe,
  EOs: () => EOs,
  Ect: () => Ect,
  Em: () => Em,
  FAt: () => FAt,
  Fhe: () => Fhe,
  Fke: () => Fke,
  GPo: () => GPo,
  Gb: () => Gb,
  Hhe: () => Hhe,
  JNe: () => JNe,
  Jmn: () => Jmn,
  Lhe: () => Lhe,
  NX: () => NX,
  Nhe: () => Nhe,
  Nke: () => Nke,
  Qmn: () => Qmn,
  Roe: () => Roe,
  S8i: () => S8i,
  TOs: () => TOs,
  TPe: () => TPe,
  UAt: () => UAt,
  _8i: () => _8i,
  cB: () => cB,
  cIr: () => cIr,
  dIr: () => dIr,
  f8i: () => f8i,
  fIr: () => fIr,
  fVt: () => fVt,
  g8i: () => g8i,
  h8i: () => h8i,
  hIr: () => hIr,
  jC: () => jC,
  jPo: () => jPo,
  jXe: () => jXe,
  kOs: () => kOs,
  kct: () => kct,
  kee: () => kee,
  lnd: () => lnd,
  m8i: () => m8i,
  mIr: () => mIr,
  mVt: () => mVt,
  nVn: () => nVn,
  oDl: () => oDl,
  oVn: () => oVn,
  p8i: () => p8i,
  pIr: () => pIr,
  pVt: () => pVt,
  qN: () => qN,
  rDl: () => rDl,
  rVn: () => rVn,
  sDl: () => sDl,
  sO: () => sO,
  sVn: () => sVn,
  t3: () => t3,
  tVn: () => tVn,
  u8i: () => u8i,
  uIr: () => uIr,
  uVt: () => uVt,
  vOs: () => vOs,
  vct: () => vct,
  vw: () => vw,
  wOs: () => wOs,
  wct: () => wct,
  y8i: () => y8i,
  zPo: () => zPo
});
module.exports = __toCommonJS(chunk_q3a5dy2r_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_hnt4bwpe = require("/$bunfs/root/chunk-hnt4bwpe.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_ghnve1xk = require("/$bunfs/root/chunk-ghnve1xk.js");
var import_chunk_7n1spq36 = require("/$bunfs/root/chunk-7n1spq36.js");
var import_crypto = require("crypto");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
var import_readline = require("readline");
var import_events = require("events");
var import_fs2 = require("fs");
var dIr = `

This is how Claude Code surfaces a prompt a plugin submits between turns \u2014 it starts this turn in the user's place. Address the message above.`, u8i = (e) => "The " + e + ` plugin sent a message:
`, wOs = (e) => `Prompt from the ${e} plugin`, t3 = (e) => e.origin?.kind === "plugin" && e.promptSource !== void 0, ce = (e) => typeof e === "object" && e !== null && "text" in e && typeof e.text === "string" && e.text !== "", ue = (e) => e.length > 28 && e.startsWith("The ") && e.endsWith(` plugin sent a message:
`);
function tVn(e, n) {
  let t = e.slice(0, e.indexOf(`
`) + 1);
  return ce(n) && ue(t) && e === t + n.text + dIr ? { label: t.slice(4, -24), text: n.text } : void 0;
}
function M(e, n, t) {
  let r = tVn(e, n);
  if (r === void 0) return e;
  return `${wOs(r.label)}${t}${r.text}`;
}
var Hhe = (e, n) => M(e, n, ": "), f8i = (e, n) => M(e, n, `
`);
var p8i = /^(?:\s*<[a-z][\w-]*[\s>]|\[Request interrupted by user[^\]]*\])/, le = /<command-name>(.*?)<\/command-name>/;
function FAt(e, n, t = "stored") {
  if (e.type !== "user") return;
  if (e.isMeta === true || e.isCompactSummary === true) return;
  let r = e.message;
  if (!r) return;
  let i = r.content, o = t === "shown" && typeof i === "string" ? Hhe(i, e.pluginPrompt) : i, s = o !== i, u = [];
  if (typeof o === "string") u.push(o);
  else if (Array.isArray(i)) for (let a of i) {
    if (!a || typeof a !== "object") continue;
    if (a.type === "tool_result") return;
    if (a.type === "text" && typeof a.text === "string") u.push(a.text);
  }
  for (let a of u) {
    let c = (0, import_chunk_ghnve1xk.HOe)(a).replaceAll(`
`, " ").trim();
    if (!c) continue;
    let d = s ? null : le.exec(c);
    if (d) {
      if (!n.commandFallback) n.commandFallback = d[1];
      continue;
    }
    let p = s ? null : /<bash-input>([\s\S]*?)<\/bash-input>/.exec(c);
    if (p) return `! ${p[1].trim()}`;
    if (p8i.test(c)) continue;
    if (c.length > 200) c = (0, import_chunk_7cfjrnwy.ee)(c, 200).trim() + "\u2026";
    return c;
  }
  return;
}
var fe = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function cB(e) {
  if (typeof e !== "string") return null;
  return fe.test(e) ? e : null;
}
async function wct(e, n, t) {
  return K(e, n, "w", t);
}
async function kOs(e, n, t) {
  return K(e, n, "a", t);
}
var pe = 262144;
async function K(e, n, t, r) {
  if (r !== void 0 && r.hoverRestOn && (t === "w" || n.length > 0)) return me(r.source, n, t);
  let i = (0, import_fs2.createWriteStream)(e, { mode: 384, flags: t });
  try {
    let o = "";
    for (let s of n) if (o += JSON.stringify(s) + `
`, o.length >= pe) {
      let u = i.write(o);
      if (o = "", !u) await (0, import_events.once)(i, "drain");
    }
    if (o !== "") i.write(o);
    i.end(), await (0, import_events.once)(i, "finish");
  } catch (o) {
    throw i.destroy(), o;
  }
}
async function me(e, n, t) {
  let { backend: r, key: i } = e, o = n.map((u) => ({ data: JSON.stringify(u) + `
` }));
  if (t === "w") {
    let u = await r.replaceRecords(i, o, { publishDiscipline: "inPlace", mode: 384 });
    if (!u.ok) throw Error("transcript stream replace failed", { cause: u.error });
    return;
  }
  let s = await r.append(i, o);
  if (!s.ok) throw Error("transcript stream append failed", { cause: s.error });
}
var Roe = 200;
function ge(e) {
  return Math.abs((0, import_chunk_ghnve1xk.fse)(e)).toString(36);
}
function w(e) {
  return e.replace(/[^a-zA-Z0-9]/g, "-");
}
function qN(e) {
  let n = w(e);
  if (n.length <= Roe) return n;
  return `${n.slice(0, Roe)}-${ge(e)}`;
}
function sO(e) {
  return (0, import_chunk_2gtmjt3y.q3n)() ?? qN(e);
}
var rDl = "voice_call_talk_line_v1", oDl = "voice-call-talk/1", cIr = '"subtype":"voice_call_talk"';
function uIr(e) {
  if (e.type === "user" && e.origin?.kind === "voice-call") {
    let { type: l, message: f, origin: m, ...g } = e;
    return { ...g, ...D(f?.content), origin: e.origin };
  }
  if (e.type !== "attachment" || e.attachment?.type !== "queued_command" || e.attachment.origin?.kind !== "voice-call") return e;
  let { type: n, prompt: t, origin: r, ...i } = e.attachment, { type: o, attachment: s, rendered: u, renderedInHumanTurn: a, renderedRole: c, renderedBesideToolResult: d, ...p } = e;
  return { ...p, ...D(t), origin: e.attachment.origin, fold: { command: i, rendered: u, renderedInHumanTurn: a, renderedRole: c, renderedBesideToolResult: d } };
}
function fIr(e) {
  if (!(0, import_chunk_ma3kja9f.T)(e) || e.type !== "system" || e.subtype !== "voice_call_talk") return e;
  let { subtype: n, level: t, msgV: r, content: i, blocks: o, fold: s, ...u } = e;
  if (typeof i !== "string" || !(0, import_chunk_ma3kja9f.T)(u.origin) || u.origin.kind !== "voice-call") return e;
  let a = Array.isArray(o) ? o : i;
  if (s === void 0) return { ...u, type: "user", message: { role: "user", content: a } };
  if (!(0, import_chunk_ma3kja9f.T)(s) || !(0, import_chunk_ma3kja9f.T)(s.command)) return e;
  let { isMeta: c, origin: d, ...p } = u, { command: l, ...f } = s;
  return { ...f, ...p, type: "attachment", attachment: { ...l, type: "queued_command", prompt: a, origin: d } };
}
function D(e) {
  return { type: "system", subtype: "voice_call_talk", level: "info", isMeta: true, msgV: 1, ...Array.isArray(e) ? { content: e.flatMap((n) => n?.type === "text" ? [n.text] : []).join(`
`), blocks: e } : { content: typeof e === "string" ? e : "" } };
}
var Gb = 65536, pIr = /* @__PURE__ */ new Set(["sdk-cli", "sdk-ts", "sdk-py"]);
function m8i(e, n) {
  let t = TPe(e, "entrypoint") ?? kct(n, "entrypoint");
  if (t && pIr.has(t)) return true;
  let r = e.split(`
`).find((o) => o.includes('"parentUuid":')) ?? e, i = TPe(r, "sessionKind");
  return i === "daemon" || i === "daemon-worker";
}
function ne(e) {
  if (!e.includes("\\")) return e;
  try {
    return JSON.parse(`"${e}"`);
  } catch {
    return e;
  }
}
function TPe(e, n) {
  let t = [`"${n}":"`, `"${n}": "`];
  for (let r of t) {
    let i = e.indexOf(r);
    if (i < 0) continue;
    let o = i + r.length, s = o;
    while (s < e.length) {
      if (e[s] === "\\") {
        s += 2;
        continue;
      }
      if (e[s] === '"') return ne(e.slice(o, s));
      s++;
    }
  }
  return;
}
function kct(e, n) {
  let t = [`"${n}":"`, `"${n}": "`], r, i = -1;
  for (let o of t) {
    let s = 0;
    while (true) {
      let u = e.indexOf(o, s);
      if (u < 0) break;
      let a = u + o.length, c = a;
      while (c < e.length) {
        if (e[c] === "\\") {
          c += 2;
          continue;
        }
        if (e[c] === '"') {
          if (u > i) r = ne(e.slice(a, c)), i = u;
          break;
        }
        c++;
      }
      s = c + 1;
    }
  }
  return r;
}
function NX(e, n, t) {
  return N(e, t, n);
}
var Re = { "custom-title": "customTitle", "ai-title": "aiTitle", tag: "tag" };
function kee(e, n, t = "older") {
  return N(e, Re[n], n, t);
}
function H(e, n, t) {
  try {
    let r = JSON.parse(e);
    if (typeof r === "object" && r !== null && (t === void 0 || r.type === t)) {
      let i = r[n];
      if (typeof i === "string") return i;
    }
    return;
  } catch {
    return null;
  }
}
function N(e, n, t, r) {
  let i = t === void 0 ? void 0 : r === void 0 ? [`"type":"${t}"`] : [`"type":"${t}"`, `"type": "${t}"`], o = `"${n}":`, s = e.length;
  while (s > 0) {
    let u = e.lastIndexOf(`
`, s - 1), a = e.slice(u + 1, s);
    if (s = u, (a.includes(o) || r === "none") && (i === void 0 || i.some((c) => a.includes(c)))) {
      let c = H(a, n, t);
      if (c === null && r !== void 0) {
        let d = a.lastIndexOf(`{${i?.[0]}`);
        if (c = d > 0 && !":,[".includes(a.charAt(d - 1)) ? H(a.slice(d), n, t) : null, c === null && r === "none") return;
      }
      if (typeof c === "string") return c;
    }
    if (u < 0) break;
  }
  return;
}
function Dhe(e, n) {
  let t = `"${n}":`, r = 0;
  while (r < e.length) {
    let i = e.indexOf(`
`, r), o = i < 0 ? e.slice(r) : e.slice(r, i);
    if (r = i < 0 ? e.length : i + 1, o.includes(t)) try {
      let s = JSON.parse(o);
      if (typeof s === "object" && s !== null) {
        let u = s[n];
        if (typeof u === "string") return u;
      }
    } catch {
    }
  }
  return;
}
function JNe(e, n) {
  return N(e, n);
}
function sDl(e, n) {
  return e?.realWorkspacePath === void 0 ? void 0 : { hoverRestOn: n, realPath: e.realWorkspacePath };
}
function h8i(e, n = "stored") {
  let t = 0, r = { commandFallback: "" };
  while (t < e.length) {
    let i = e.indexOf(`
`, t), o = i >= 0 ? e.slice(t, i) : e.slice(t);
    if (t = i >= 0 ? i + 1 : e.length, !o.includes('"type":"user"') && !o.includes('"type": "user"')) continue;
    if (o.includes('"tool_result"')) continue;
    if (o.includes('"isMeta":true') || o.includes('"isMeta": true')) continue;
    if (o.includes('"isCompactSummary":true') || o.includes('"isCompactSummary": true')) continue;
    try {
      let s = JSON.parse(o), u = FAt(s, r, n);
      if (u !== void 0) return u;
    } catch {
      continue;
    }
  }
  return r.commandFallback;
}
function g8i(e) {
  let n = 0;
  while (n < e.length) {
    let t = e.indexOf(`
`, n), r = t >= 0 ? e.slice(n, t) : e.slice(n);
    if (n = t >= 0 ? t + 1 : e.length, !r.includes('"type":"user"') && !r.includes('"type": "user"')) continue;
    if (r.includes('"tool_result"')) continue;
    if (r.includes('"isMeta":true') || r.includes('"isMeta": true')) continue;
    if (r.includes('"type":"image"') || r.includes('"type": "image"')) return "Image";
    if (r.includes('"type":"document"') || r.includes('"type": "document"')) return "Document";
  }
  return "";
}
function lnd(e, n = "stored") {
  let t = { commandFallback: "" };
  for (let r of e) {
    if (typeof r !== "object" || r === null) continue;
    let i = FAt(r, t, n);
    if (i !== void 0) return i;
  }
  return t.commandFallback;
}
var P = import_fs.constants.O_RDONLY | import_fs.constants.O_NOFOLLOW | import_fs.constants.O_NONBLOCK;
async function R(e, n, t) {
  let r = 0;
  while (r < Gb) {
    let { bytesRead: i } = await e.read(n, r, Gb - r, t + r);
    if (i <= 0) break;
    r += i;
  }
  return r;
}
async function Jmn(e, n, t, r) {
  if (r !== void 0 && r.hoverRestOn) return xe(r.source);
  try {
    if (P === import_fs.constants.O_RDONLY) {
      if (!(await (0, import_promises.lstat)(e)).isFile()) return { head: "", tail: "" };
    }
    let i = await (0, import_promises.open)(e, P);
    try {
      if (!(await i.stat()).isFile()) return { head: "", tail: "" };
      let o = await R(i, t, 0);
      if (o === 0) return { head: "", tail: "" };
      let s = t.toString("utf8", 0, o), u = Math.max(0, n - Gb), a = s;
      if (u > 0) {
        let c = await R(i, t, u);
        if (a = t.toString("utf8", 0, c), c < Gb) return { head: s, tail: a, tailCameShort: true };
      } else if (n < Gb && o === Gb) return { head: s, tail: a, tailCameShort: true };
      return { head: s, tail: a };
    } finally {
      await i.close();
    }
  } catch {
    return { head: "", tail: "" };
  }
}
function _8i(e) {
  let n;
  try {
    if (P === import_fs.constants.O_RDONLY) {
      let a = (0, import_fs.lstatSync)(e);
      if (!a.isFile()) return a.isSymbolicLink() ? void 0 : { head: "", tail: "" };
    }
    n = (0, import_fs.openSync)(e, P);
    let t = (0, import_fs.fstatSync)(n);
    if (!t.isFile()) return { head: "", tail: "" };
    let r = Buffer.allocUnsafe(Gb), i = n, o = (a) => {
      let c = 0;
      while (c < Gb) {
        let d = (0, import_fs.readSync)(i, r, c, Gb - c, a + c);
        if (d <= 0) break;
        c += d;
      }
      return r.toString("utf8", 0, c);
    }, s = o(0), u = Math.max(0, t.size - Gb);
    return { head: s, tail: u > 0 ? o(u) : s };
  } catch (t) {
    return x(t) ? { head: "", tail: "" } : void 0;
  } finally {
    if (n !== void 0) (0, import_fs.closeSync)(n);
  }
}
async function xe(e) {
  let n = await te(e);
  return n === null ? { head: "", tail: "" } : { head: n.head, tail: n.tail };
}
function $At(e) {
  let n = e.indexOf(`
`);
  return n >= 0 ? e.slice(n + 1) : "";
}
async function te(e) {
  let { backend: n, key: t } = e;
  try {
    let r = await n.read([{ key: t, offset: 0, length: Gb }, { key: t, tail: Gb }]);
    if (!r.ok) return null;
    let [i, o] = r.value.items;
    if (!i.found || i.value.length === 0) return null;
    let s = W(i.value), u = o.found && o.value.length > 0 ? W(o.value) : s;
    return { head: s, tail: u, mtimeMs: i.mtimeMs, totalBytes: i.totalBytes };
  } catch {
    return null;
  }
}
function W(e) {
  return Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8");
}
async function U(e, n) {
  return await uVt(e, n) !== "none";
}
async function uVt(e, n) {
  if (n !== void 0 && n.hoverRestOn) return mIr(n.source);
  try {
    if (!(await (0, import_promises.lstat)(e)).isFile()) return "none";
  } catch (r) {
    return x(r) ? "none" : "unknown";
  }
  let t;
  try {
    t = await (0, import_promises.open)(e, "r");
  } catch (r) {
    return x(r) ? "none" : "unknown";
  }
  try {
    let r = (0, import_readline.createInterface)({ input: t.createReadStream() });
    for await (let i of r) if (i.includes('"type":"user"') || i.includes('"type":"assistant"') || i.includes(cIr)) return r.close(), "has";
    return "none";
  } catch {
    return "unknown";
  } finally {
    await t.close().catch(() => {
    });
  }
}
var ve = 65536, Ee = 4194304, Oe = Buffer.from('"type":"user"'), Be = Buffer.from('"type":"assistant"'), Ie = Buffer.from(cIr);
function Ae(e) {
  return e.includes(Oe) || e.includes(Be) || e.includes(Ie);
}
var EOs = 1e4;
function jXe(e, n) {
  if (e.kind !== "scope" || e.scope.namespace !== "transcript" || e.scope.projectKey === void 0 || e.scope.sessionId !== void 0 || !n(e.scope.projectKey)) return;
  return e.scope.projectKey;
}
async function mIr(e, n = Ae) {
  let { backend: t, key: r } = e, i, o = false, s = 0, u = 0;
  try {
    for (; ; ) {
      if (++u > EOs) return "unknown";
      let a = await t.readRecords(r, { order: "forward", maxBytes: i === void 0 ? ve : Ee, ...i !== void 0 && { fromSeq: i } });
      if (!a.ok) return a.error.code === "NotFound" ? "none" : "unknown";
      s += a.value.items.length;
      for (let d of a.value.items) {
        let p = Buffer.from(d.data.buffer, d.data.byteOffset, d.data.byteLength);
        if (n(p)) return "has";
        if (d.truncated === true) o = true;
      }
      let c = a.value.nextSeq;
      if (c === void 0) {
        if (o) return "unknown";
        if (a.value.items.length === 0 && i !== void 0) return "unknown";
        let d = await t.statStream(r);
        if (!d.ok) return d.error.code === "NotFound" ? "none" : "unknown";
        return d.value.recordCount > s ? "unknown" : "none";
      }
      if (i !== void 0 && c <= i) return "unknown";
      i = c;
    }
  } catch {
    return "unknown";
  }
}
async function UAt(e, n) {
  let t = `orphaned-${Date.now()}-${(0, import_crypto.randomUUID)().slice(0, 8)}`, r = n !== void 0 && n.hoverRestOn ? n.source : void 0, i = r !== void 0 && e.endsWith(".jsonl") ? re(e, (0, import_path.basename)(e, ".jsonl"), r) : void 0;
  if (i !== void 0 && r !== void 0) {
    let { key: s } = i;
    if (s.namespace !== "transcript") return false;
    try {
      return (await i.backend.move(s, r.transcriptKey(s.projectKey, `${s.sessionId}.${t}`))).ok;
    } catch {
      return false;
    }
  }
  let o = `${e.endsWith(".jsonl") ? e.slice(0, -6) : e}.${t}.jsonl`;
  try {
    return await (0, import_promises.rename)(e, o), true;
  } catch {
    return false;
  }
}
function Ect(e) {
  return (0, import_path.isAbsolute)(e) && e.endsWith(".jsonl");
}
async function Lhe(e, n, t, r, i) {
  let o = await vw(n, sDl(i?.source, i?.hoverRestOn === true));
  if (cB(e) === null) return { path: (0, import_path.join)(jC(o), "invalid-resume-id.jsonl"), hasMessages: false, via: "computed" };
  let s = (0, import_path.join)(jC(o), `${e}.jsonl`), u = [];
  if (t !== void 0) u.push(t.endsWith(`${e}.jsonl`) ? { path: t, via: "linkScanPath" } : { path: (0, import_path.join)((0, import_path.dirname)(t), `${e}.jsonl`), via: "linkScanDir" });
  let a = i !== void 0 && i.hoverRestOn ? { ...i, source: jPo(i.source) } : void 0;
  for (let l of await Fke(o, a)) u.push({ path: (0, import_path.join)(l, `${e}.jsonl`), via: "projectDir" });
  u.push({ path: s, via: "computed" });
  let c = /* @__PURE__ */ new Set(), d = (l) => Ne(l, e, a), p;
  for (let l of u) {
    if (c.has(l.path)) continue;
    c.add(l.path);
    let f = await d(l.path);
    if (f === "has") return { ...l, hasMessages: true };
    if (f === "unverifiable" && p === void 0) p = l;
  }
  if (r?.crossWorktree !== false) for (let { projectDir: l } of await se(o, a)) {
    let f = (0, import_path.join)(l, `${e}.jsonl`);
    if (a !== void 0) {
      if (c.has(f)) continue;
      c.add(f);
    }
    let m = await d(f);
    if (m === "has") return { path: f, via: "worktreeProjectDir", hasMessages: true };
    if (m === "unverifiable" && p === void 0) p = { path: f, via: "worktreeProjectDir" };
  }
  if (r?.crossWorktree !== false) {
    let l = await nVn(e, c, a);
    if (l !== null) return { path: l, via: "projectsScan", hasMessages: true };
  }
  if (p !== void 0) return { ...p, hasMessages: true, unverifiable: true };
  return { ...u[0], hasMessages: false };
}
function re(e, n, t) {
  let r = fVt((0, import_path.dirname)(e), t.isKeySegment);
  if (r === void 0 || (0, import_path.basename)(e) !== `${n}.jsonl` || !t.isKeySegment(n)) return;
  return { backend: t.backend, key: t.transcriptKey(r, n) };
}
async function Ne(e, n, t) {
  let r = t !== void 0 && t.hoverRestOn ? re(e, n, t.source) : void 0;
  if (r === void 0) return await U(e) ? "has" : "none";
  let i = await mIr(r);
  if (i === "has") return "has";
  try {
    if (!(await (0, import_promises.lstat)(e)).isFile()) return "none";
  } catch (o) {
    if (!x(o)) return "has";
    return i === "unknown" ? "unverifiable" : "none";
  }
  return await U(e) ? "has" : "none";
}
function x(e) {
  return e !== null && typeof e === "object" && "code" in e && e.code === "ENOENT";
}
function F(e) {
  return { skipScopeStats: true, skipKeyStats: true, ...e !== void 0 && { cursor: e } };
}
function jPo(e) {
  let n = /* @__PURE__ */ new Map(), t = new Proxy(e.backend, { get(r, i, o) {
    let s = Reflect.get(r, i, o);
    if (i !== "listEntries") return typeof s === "function" ? s.bind(r) : s;
    return (a, c) => {
      if (!(a.namespace === "transcript" && !("projectKey" in a) && Object.keys(c ?? {}).every((f) => f === "cursor" || f === "skipScopeStats" || f === "skipKeyStats"))) return r.listEntries(a, c);
      let p = [c?.cursor ?? "", c?.skipScopeStats, c?.skipKeyStats].map(String).join("\0"), l = n.get(p);
      if (l === void 0) {
        l = r.listEntries(a, c), n.set(p, l);
        let f = () => {
          n.delete(p);
        };
        l.then((m) => {
          if (!m.ok) f();
        }, f);
      }
      return l;
    };
  } });
  return { ...e, backend: t };
}
async function nVn(e, n = /* @__PURE__ */ new Set(), t) {
  if (cB(e) === null) return null;
  if (t !== void 0 && t.hoverRestOn && t.source.isKeySegment(e)) return Fe(e, n, t.source);
  let r = Em(), i = null;
  try {
    for (let o of await (0, import_promises.readdir)(r, { withFileTypes: true })) {
      if (!o.isDirectory()) continue;
      let s = (0, import_path.join)(r, o.name, `${e}.jsonl`);
      if (n.has(s)) continue;
      if (await uVt(s) !== "has") continue;
      if (i !== null) return null;
      i = s;
    }
  } catch {
    return null;
  }
  return i;
}
async function Fe(e, n, t) {
  let { backend: r, transcriptKey: i, isKeySegment: o } = t, s = Em(), u = null, a = false, c = /* @__PURE__ */ new Set();
  try {
    let d = await (0, import_chunk_hnt4bwpe.Nd)((p) => r.listEntries({ namespace: "transcript" }, F(p)), async (p) => {
      for (let l of p) {
        let f = jXe(l, o);
        if (f === void 0) continue;
        let m = (0, import_path.join)(s, f, `${e}.jsonl`);
        if (c.has(m) || n.has(m)) continue;
        c.add(m);
        let g = await mIr({ backend: r, key: i(f, e) });
        if (g === "unknown") try {
          g = (await (0, import_promises.lstat)(m)).isFile() ? await uVt(m) : "none";
        } catch {
        }
        if (g !== "has") continue;
        if (u !== null) {
          a = true;
          return;
        }
        u = m;
      }
    }, { until: () => a });
    if (a || d.status !== "done") return null;
  } catch {
    return null;
  }
  return u;
}
async function Nhe(e, n) {
  if (n !== void 0 && n.hoverRestOn) return ie(n.source);
  try {
    if (P === import_fs.constants.O_RDONLY) {
      if (!(await (0, import_promises.lstat)(e)).isFile()) return null;
    }
    let t = await (0, import_promises.open)(e, P);
    try {
      let r = await t.stat();
      if (!r.isFile()) return null;
      let i = Buffer.allocUnsafe(Gb), o = await R(t, i, 0);
      if (o === 0) return null;
      let s = i.toString("utf8", 0, o), u = Math.max(0, r.size - Gb), a = s;
      if (u > 0) a = i.toString("utf8", 0, await R(t, i, u));
      return { mtime: r.mtime.getTime(), size: r.size, head: s, tail: a };
    } finally {
      await t.close();
    }
  } catch {
    return null;
  }
}
async function ie(e) {
  let n = await te(e);
  if (n === null) return null;
  return { mtime: Math.trunc(n.mtimeMs), size: n.totalBytes, head: n.head, tail: n.tail };
}
function Fhe(e, n) {
  let t = e.replaceAll("\\", "/");
  return n ? t.toLowerCase() : t;
}
function V(e, n, t) {
  let r = (0, import_chunk_z6pfqf6e.pn)(e), i = (0, import_chunk_z6pfqf6e.pn)(n), o = (s) => t ? s.toLowerCase() : s;
  if (o(w(r)) !== o(w(i))) return false;
  return Fhe(r, t) !== Fhe(i, t);
}
async function rVn(e, n, t, r, i) {
  if (!V(e, n, t)) return false;
  if ((0, import_chunk_z6pfqf6e.ID)(e) || (0, import_chunk_z6pfqf6e.ID)(n)) return false;
  if (await r(e) || await r(n)) return false;
  let o;
  try {
    if (i !== void 0 && i.hoverRestOn) {
      let u = await i.realPath(e);
      if (!u.ok || !u.value.found) return false;
      o = (0, import_chunk_z6pfqf6e.pn)(u.value.path);
    } else o = (0, import_chunk_z6pfqf6e.pn)(await (0, import_promises.realpath)(e));
  } catch {
    return false;
  }
  let s = await vw(n, i);
  return V(o, s, t);
}
function oVn(e, n, t) {
  if (n === void 0) return false;
  let r = Fhe((0, import_chunk_z6pfqf6e.pn)(e), t);
  return n.some((i) => {
    let o = Fhe((0, import_chunk_z6pfqf6e.pn)(i), t);
    return r === o || r.startsWith(o.endsWith("/") ? o : o + "/");
  });
}
function Nke() {
  return true;
}
function Em() {
  return (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "projects");
}
function hIr(e) {
  let n = qN(e);
  return n === sO(e) ? void 0 : n;
}
function jC(e, n = Em()) {
  return (0, import_path.join)(n, sO(e));
}
function BAt() {
  let e = (0, import_chunk_2gtmjt3y.q3n)();
  return e === void 0 ? null : (0, import_path.join)(Em(), e);
}
function fVt(e, n) {
  let t = (0, import_path.basename)(e);
  return (0, import_path.dirname)(e) === Em() && n(t) ? t : void 0;
}
async function vw(e, n) {
  try {
    if (n !== void 0 && n.hoverRestOn) {
      let t = await n.realPath(e);
      return (0, import_chunk_z6pfqf6e.pn)(t.ok && t.value.found ? t.value.path : e);
    }
    return (0, import_chunk_z6pfqf6e.pn)(await (0, import_promises.realpath)(e));
  } catch {
    return (0, import_chunk_z6pfqf6e.pn)(e);
  }
}
function vOs(e, n) {
  return [n];
}
async function pVt(e, n, t, r) {
  let i = r !== void 0 && r.hoverRestOn ? r.source : void 0, o = i === void 0 ? void 0 : fVt(e, i.isKeySegment);
  if (i !== void 0 && o !== void 0) {
    let a = await Ce(o, n, t, i);
    if (a !== void 0) return a;
  }
  if ((0, import_chunk_f9x2f6cx.Y)()) return false;
  let s = w(n), u;
  try {
    u = await (0, import_promises.readdir)(e, { withFileTypes: true });
  } catch {
    return false;
  }
  for (let a of u) {
    if (!a.isFile() || !a.name.endsWith(".jsonl")) continue;
    let c = await Nhe((0, import_path.join)(e, a.name));
    if (c === null) continue;
    if (oe(c, s, t)) return true;
  }
  return false;
}
function oe(e, n, t) {
  let r = NX(e.tail, "relocated", "relocatedCwd") ?? Dhe(e.head, "cwd");
  if (r === void 0) return false;
  let i = w((0, import_chunk_z6pfqf6e.pn)(r));
  return t ? i.toLowerCase() === n.toLowerCase() : i === n;
}
async function Ce(e, n, t, r) {
  let { backend: i, transcriptKey: o, isKeySegment: s } = r, u = w(n), a = false, c = /* @__PURE__ */ new Set();
  try {
    let d = await (0, import_chunk_hnt4bwpe.Nd)((p) => i.listEntries({ namespace: "transcript", projectKey: e }, F(p)), async (p) => {
      for (let l of p) {
        if (l.kind !== "key" || l.key.namespace !== "transcript" || l.key.projectKey !== e || l.key.agentId !== void 0 || !s(l.key.sessionId) || c.has(l.key.sessionId)) continue;
        let f = l.key.sessionId, m = await ie({ backend: i, key: o(e, f) });
        if (m === null) continue;
        if (c.add(f), oe(m, u, t)) {
          a = true;
          return;
        }
      }
    }, { until: () => a });
    if (a) return true;
    if (d.status !== "done") return;
  } catch {
    return;
  }
  return false;
}
async function Fke(e, n, t = Em()) {
  if (n !== void 0 && n.hoverRestOn) return Me(e, n);
  if ((0, import_chunk_f9x2f6cx.Y)()) return [];
  let r = jC(e, t), i = [];
  try {
    await (0, import_promises.readdir)(r), i.push(r);
  } catch {
  }
  let o = hIr(e);
  if (o !== void 0) {
    let p = (0, import_path.join)(t, o);
    try {
      await (0, import_promises.readdir)(p), i.push(p);
    } catch {
    }
    return i;
  }
  let s = qN(e);
  if (s.length <= Roe) return i;
  let u = false, a = (p) => u ? p.toLowerCase() : p, c = a(s.slice(0, Roe) + "-"), d = a(r);
  try {
    for (let p of await (0, import_promises.readdir)(t, { withFileTypes: true })) {
      if (!p.isDirectory() || !a(p.name).startsWith(c)) continue;
      let l = (0, import_path.join)(t, p.name);
      if (a(l) !== d && await pVt(l, e, u)) i.push(l);
    }
  } catch {
  }
  return i;
}
async function Me(e, n) {
  let t = await GPo(n.source);
  if (t === null) {
    let r = hIr(e);
    return [jC(e), ...r !== void 0 ? [(0, import_path.join)(Em(), r)] : []];
  }
  return TOs(e, t, false, n);
}
async function GPo(e) {
  let { backend: n, isKeySegment: t } = e, r = [], i = /* @__PURE__ */ new Set(), o = 0;
  try {
    if ((await (0, import_chunk_hnt4bwpe.Nd)((u) => n.listEntries({ namespace: "transcript" }, F(u)), (u) => {
      for (let a of u) {
        let c = jXe(a, t);
        if (c !== void 0 && !i.has(c)) i.add(c), r.push(c);
      }
      o++;
    })).status === "error") return o === 0 ? null : r;
  } catch {
    return o === 0 ? null : r;
  }
  return r;
}
async function TOs(e, n, t, r) {
  let i = sO(e), o = jC(e), s = hIr(e), u = s === void 0 && i.length > Roe ? i.slice(0, Roe) + "-" : void 0, a = Em(), c = (y) => t ? y.toLowerCase() : y, d = u !== void 0 ? c(u) : void 0, p = c(i), l = false, f, m = [], g = /* @__PURE__ */ new Set();
  for (let y of n) if (y === i) l = true;
  else if (s !== void 0) {
    if (f === void 0 && c(y) === c(s)) f = (0, import_path.join)(a, y);
  } else if (d !== void 0 && c(y).startsWith(d) && c(y) !== p && !g.has(c(y))) g.add(c(y)), m.push(y);
  let h = [];
  for (let y of m) {
    let C = (0, import_path.join)(a, y);
    if (await pVt(C, e, t, r)) h.push(C);
  }
  return [...l ? [o] : [], ...f !== void 0 ? [f] : [], ...h];
}
async function y8i(e, n) {
  return (await Fke(e, n))[0];
}
async function se(e, n, t = Em()) {
  let r = [], { getWorktreePathsPortable: i } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-y8bdtjx4.js")));
  for (let o of await i(e)) {
    if (o === e) continue;
    let s = await Fke(o, n, t);
    if (n !== void 0 && n.hoverRestOn) {
      let u = jC(o);
      if (!s.includes(u)) s.push(u);
    }
    for (let u of s) r.push({ worktreePath: o, projectDir: u });
  }
  return r;
}
async function COs(...e) {
  for await (let n of C3l(...e)) return n;
  return;
}
async function* C3l(e, n, t, r, i = Em()) {
  let o = `${e}.jsonl`, s = r && t !== void 0 && t.isKeySegment(e) ? jPo(t) : void 0, u = s === void 0 ? void 0 : { source: s, hoverRestOn: r };
  async function a(d, p) {
    let l = (0, import_path.join)(d, o);
    if (s) {
      let f = fVt(d, s.isKeySegment);
      if (f !== void 0) {
        try {
          let m = await s.backend.stat(s.transcriptKey(f, e));
          if (m.ok) {
            let g = m.value.storedBytes ?? m.value.size;
            if (g > 0) return { filePath: l, projectPath: p, fileSize: g };
          }
        } catch {
        }
        return;
      }
    }
    try {
      let f = await (0, import_promises.stat)(l);
      if (f.size > 0) return { filePath: l, projectPath: p, fileSize: f.size };
    } catch {
    }
    return;
  }
  if (n) {
    let d = await vw(n, sDl(t, r)), p = /* @__PURE__ */ new Set();
    for (let l of vOs(n, d)) for (let f of await Fke(l, u, i)) {
      let m = f;
      if (p.has(m)) continue;
      p.add(m);
      let g = await a(f, l);
      if (g) yield g;
    }
    for (let { worktreePath: l, projectDir: f } of await se(d, u, i)) {
      let m = await a(f, l);
      if (m) yield m;
    }
    return;
  }
  if (s) {
    let d = /* @__PURE__ */ new Map();
    try {
      if ((await (0, import_chunk_hnt4bwpe.Nd)((f) => s.backend.listEntries({ namespace: "transcript" }, f !== void 0 ? { cursor: f } : void 0), (f) => {
        for (let m of f) {
          let g = jXe(m, s.isKeySegment);
          if (g === void 0) continue;
          let h = m.kind === "scope" && m.mtimeMs !== void 0 ? m.mtimeMs : Number.NEGATIVE_INFINITY, y = d.get(g);
          if (y === void 0) d.set(g, { projectKey: g, mtimeMs: h });
          else if (h > y.mtimeMs) y.mtimeMs = h;
        }
      })).status === "error") return;
    } catch {
      return;
    }
    let p = [...d.values()];
    p.sort((l, f) => l.mtimeMs !== f.mtimeMs ? f.mtimeMs - l.mtimeMs : l.projectKey < f.projectKey ? -1 : l.projectKey > f.projectKey ? 1 : 0);
    for (let { projectKey: l } of p) {
      let f = await a((0, import_path.join)(i, l), void 0);
      if (f) yield f;
    }
    return;
  }
  let c;
  try {
    c = await (0, import_promises.readdir)(i);
  } catch {
    return;
  }
  for (let d of c) {
    let p = await a((0, import_path.join)(i, d), void 0);
    if (p) yield p;
  }
}
var zPo = 1048576, $he = 5242880, Qmn = Buffer.from('"compact_boundary"');
function ae(e) {
  try {
    let n = JSON.parse(e);
    if (n.type !== "system" || n.subtype !== "compact_boundary") return null;
    return { hasPreservedSegment: Boolean(n.compactMetadata?.preservedSegment || n.compactMetadata?.preservedMessages) };
  } catch {
    return null;
  }
}
function b(e, n, t, r) {
  let i = r - t;
  if (i <= 0) return;
  if (e.len + i > e.buf.length) {
    let o = Buffer.allocUnsafe(Math.min(Math.max(e.buf.length * 2, e.len + i), e.cap));
    e.buf.copy(o, 0, 0, e.len), e.buf = o;
  }
  n.copy(e.buf, e.len, t, r), e.len += i;
}
function v(e, n, t, r) {
  return r - t >= n.length && e.compare(n, 0, n.length, t, t + n.length) === 0;
}
var E = Buffer.from('{"type":"attribution-snapshot"'), je = Buffer.from('{"type":"system"'), _ = 10, Ke = Buffer.from([_]), De = 256;
function G(e, n, t) {
  if (e.straddleSnapCarryLen = 0, e.straddleSnapTailEnd = 0, e.carryLen === 0) return 0;
  let r = e.carryBuf, i = n.indexOf(_);
  if (i === -1 || i >= t) return 0;
  let o = i + 1;
  if (v(r, E, 0, e.carryLen)) e.straddleSnapCarryLen = e.carryLen, e.straddleSnapTailEnd = o, e.lastSnapSrc = null;
  else if (e.carryLen < E.length) return 0;
  else {
    if (v(r, je, 0, e.carryLen)) {
      let s = ae(r.toString("utf-8", 0, e.carryLen) + n.toString("utf-8", 0, i));
      if (s && !s.hasPreservedSegment) e.out.len = 0, e.lastSnapSrc = null;
    }
    b(e.out, r, 0, e.carryLen), b(e.out, n, 0, o);
  }
  return e.carryLen = 0, o;
}
function J(e, n, t) {
  let r = n.indexOf(t), i = 0, o = 0, s = -1, u = -1, a = n.indexOf(_);
  while (a !== -1) {
    let c = a + 1;
    if (r !== -1 && r < o) r = n.indexOf(t, o);
    if (v(n, E, o, c)) b(e.out, n, i, o), s = o, u = c, i = c;
    else if (r >= o && r < Math.min(o + De, c)) {
      let d = ae(n.toString("utf-8", o, a));
      if (d && !d.hasPreservedSegment) e.out.len = 0, e.lastSnapSrc = null, s = -1, e.straddleSnapCarryLen = 0, i = o;
      r = n.indexOf(t, r + t.length);
    }
    o = c, a = n.indexOf(_, o);
  }
  return b(e.out, n, i, o), { lastSnapStart: s, lastSnapEnd: u, trailStart: o };
}
function z(e, n, t, r, i) {
  if (r !== -1) {
    if (e.lastSnapLen = i - r, e.lastSnapBuf === void 0 || e.lastSnapLen > e.lastSnapBuf.length) e.lastSnapBuf = Buffer.allocUnsafe(e.lastSnapLen);
    n.copy(e.lastSnapBuf, 0, r, i), e.lastSnapSrc = e.lastSnapBuf;
  } else if (e.straddleSnapCarryLen > 0) {
    if (e.lastSnapLen = e.straddleSnapCarryLen + e.straddleSnapTailEnd, e.lastSnapBuf === void 0 || e.lastSnapLen > e.lastSnapBuf.length) e.lastSnapBuf = Buffer.allocUnsafe(e.lastSnapLen);
    e.carryBuf.copy(e.lastSnapBuf, 0, 0, e.straddleSnapCarryLen), t.copy(e.lastSnapBuf, e.straddleSnapCarryLen, 0, e.straddleSnapTailEnd), e.lastSnapSrc = e.lastSnapBuf;
  }
}
function q(e, n, t) {
  if (e.carryLen = n.length - t, e.carryLen > 0) {
    if (e.carryBuf === void 0 || e.carryLen > e.carryBuf.length) e.carryBuf = Buffer.allocUnsafe(e.carryLen);
    n.copy(e.carryBuf, 0, t, n.length);
  }
}
function Z(e) {
  if (e.carryLen > 0) {
    let n = e.carryBuf;
    if (v(n, E, 0, e.carryLen)) e.lastSnapSrc = n, e.lastSnapLen = e.carryLen;
    else b(e.out, n, 0, e.carryLen);
  }
  if (e.lastSnapSrc) {
    if (e.out.len > 0 && e.out.buf[e.out.len - 1] !== _) b(e.out, Ke, 0, 1);
    b(e.out, e.lastSnapSrc, 0, e.lastSnapLen);
  }
}
async function He(e, n, t, r) {
  let i = 0, o;
  while (i < t) {
    let s = await e.readRecords(n, { order: "forward", maxBytes: zPo, ...o !== void 0 && { fromSeq: o } });
    if (!s.ok) throw Error("transcript record page failed during load", { cause: s.error });
    let u = [], a = 0;
    for (let d of s.value.items) {
      if (i + a + d.data.byteLength > t) break;
      u.push(d.data), a += d.data.byteLength;
    }
    if (a > 0) r(Buffer.concat(u, a)), i += a;
    let c = s.value.nextSeq;
    if (c === void 0 || u.length < s.value.items.length) return;
    if (o !== void 0 && c <= o) throw Error("transcript record cursor did not advance during load");
    o = c;
  }
}
async function S8i(e, n, t) {
  let r = Qmn, i = zPo, o = { out: { buf: Buffer.allocUnsafe(Math.min(n, 8388608)), len: 0, cap: n + 1 }, lastSnapSrc: null, lastSnapLen: 0, lastSnapBuf: void 0, carryLen: 0, carryBuf: void 0, straddleSnapCarryLen: 0, straddleSnapTailEnd: 0 };
  if (t !== void 0 && t.hoverRestOn) {
    let { backend: a, key: c } = t.source, d = 0, p = (l) => {
      let f = l.length;
      d += f;
      let m = G(o, l, f), g;
      if (o.carryLen > 0) {
        let y = o.carryLen + (f - m);
        g = Buffer.allocUnsafe(y), o.carryBuf.copy(g, 0, 0, o.carryLen), l.copy(g, o.carryLen, m, f);
      } else g = l.subarray(m, f);
      let h = J(o, g, r);
      z(o, g, l, h.lastSnapStart, h.lastSnapEnd), q(o, g, h.trailStart);
    };
    while (d < n) {
      let l = await a.read([{ key: c, offset: d, length: Math.min(i, n - d) }]);
      if (!l.ok) {
        if (d === 0 && (0, import_chunk_7n1spq36.o3n)(l.error)) {
          await He(a, c, n, p);
          break;
        }
        throw Error("transcript ranged read failed", { cause: l.error });
      }
      let [f] = l.value.items;
      if (!f.found) throw Error("transcript stream absent during load");
      if (f.value.length === 0) break;
      p(Buffer.from(f.value.buffer, f.value.byteOffset, f.value.length));
    }
    return Z(o), { postBoundaryBuf: o.out.buf.subarray(0, o.out.len) };
  }
  if (typeof e !== "string") throw Error("readTranscriptForLoad: this transcript has a storage key and no file, so it can be read only through a storage backend. The caller passed none, or tengu_hover_rest is off.");
  let s = Buffer.allocUnsafe(i), u = await (0, import_promises.open)(e, "r");
  try {
    let a = 0;
    while (a < n) {
      let { bytesRead: c } = await u.read(s, 0, Math.min(i, n - a), a);
      if (c === 0) break;
      a += c;
      let d = G(o, s, c), p;
      if (o.carryLen > 0) {
        let f = o.carryLen + (c - d);
        p = Buffer.allocUnsafe(f), o.carryBuf.copy(p, 0, 0, o.carryLen), s.copy(p, o.carryLen, d, c);
      } else p = s.subarray(d, c);
      let l = J(o, p, r);
      z(o, p, s, l.lastSnapStart, l.lastSnapEnd), q(o, p, l.trailStart);
    }
    Z(o);
  } finally {
    await u.close();
  }
  return { postBoundaryBuf: o.out.buf.subarray(0, o.out.len) };
}
var sVn = /^[0-9a-f]{16}(?:[0-9a-f]{48})?@v\d+$/;
function vct(e) {
  return cB(e) !== null;
}
function mVt(e, n, t) {
  return { type: "history-suppression", sessionId: e, cause: n, ...t && { vetoedAgainstAccountUuid: t }, ts: (/* @__PURE__ */ new Date()).toISOString() };
}
