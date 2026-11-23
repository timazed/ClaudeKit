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
var chunk_9ehfvk1q_exports = {};
__export(chunk_9ehfvk1q_exports, {
  B3r: () => B3r,
  Gw: () => Gw,
  KDa: () => KDa,
  Qtr: () => Qtr,
  VDa: () => VDa,
  Vte: () => Vte,
  Ztr: () => Ztr,
  c4o: () => c4o,
  d4o: () => d4o,
  hCn: () => hCn,
  nQs: () => nQs,
  oQs: () => oQs,
  qDa: () => qDa,
  rQs: () => rQs,
  sQs: () => sQs,
  xqe: () => xqe
});
module.exports = __toCommonJS(chunk_9ehfvk1q_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_4x1jja6d = require("/$bunfs/root/chunk-4x1jja6d.js");
var import_chunk_0ha8wex8 = require("/$bunfs/root/chunk-0ha8wex8.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_jar84hn9 = require("/$bunfs/root/chunk-jar84hn9.js");
var import_chunk_hnt4bwpe = require("/$bunfs/root/chunk-hnt4bwpe.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var be = "allow_usage_transcript_scan", Me = "allow_skill_doctor_transcript_scan", Oe = "allow_stats_transcript_scan", Ae = { policy: be, hipaaReason: "Not shown under your organization's policy: this breakdown is built by scanning the session transcripts saved on this machine." }, ke = { policy: Me, hipaaReason: "Not shown under your organization's policy: measured by scanning the session transcripts saved on this machine." }, we = { policy: Oe, hipaaReason: "Not shown under your organization's policy: these stats are built by scanning the session transcripts saved on this machine." };
function U(e) {
  if ((0, import_chunk_2nv4wrez.Rn)(e.policy)) return { allowed: true };
  if ((0, import_chunk_2nv4wrez.ba)(e.policy) === "org_denied" && (0, import_chunk_2zeyvjwb.d8)().includes("hipaa")) return { allowed: false, reason: e.hipaaReason };
  let { featureLabel: n, verb: o } = (0, import_chunk_2nv4wrez.Owe)(e.policy);
  return { allowed: false, reason: (0, import_chunk_2nv4wrez.Dp)(e.policy, n, o) ?? `${n} ${o} unavailable right now.` };
}
function xqe() {
  return U(Ae);
}
function Qtr() {
  return U(ke);
}
function B3r() {
  return U(we);
}
var VDa = 2.5;
function V() {
  return { lastRequest: void 0, lastContext: 0, carriedTokens: 0, firstPromptBytes: 0, startTokens: 0, pendingToolResultBytes: 0, largeToolResultTokens: 0 };
}
function F(e, n) {
  if (e.lastRequest === void 0) e.firstPromptBytes += n;
}
function Ztr(e) {
  return e / 2.5 > 1e4;
}
function Q(e, n) {
  if (Ztr(n)) e.pendingToolResultBytes += n;
}
function J(e, n) {
  let o = n.cached + n.cacheCreate + n.uncached;
  if (n.uuid === e.lastRequest) e.carriedTokens = Math.max(e.carriedTokens, o + n.output);
  else {
    if (e.lastRequest === void 0) e.startTokens = o - Math.round(e.firstPromptBytes / 2.5);
    else if (o < e.lastContext) e.largeToolResultTokens = Math.max(0, e.largeToolResultTokens - (e.lastContext - o));
    else {
      let s = Math.min(o - e.carriedTokens, e.pendingToolResultBytes / 2.5);
      if (s > 1e4) e.largeToolResultTokens += s;
    }
    e.startTokens = Math.min(e.startTokens, o), e.lastRequest = n.uuid, e.lastContext = o, e.carriedTokens = o + n.output, e.pendingToolResultBytes = 0;
  }
  n.largeToolResultTokens = e.largeToolResultTokens, n.alwaysOnTokens = !n.isSubagent && e.startTokens > 4e4 ? e.startTokens : 0;
}
var D = 4, ae = 4194304, xe = ae, ue = 6048e5, Ne = 1e5, Ie = 15e4, Pe = 3, ve = 0.5, Be = 3e5, De = 4, Ue = 8, Fe = `${import_path.sep}subagents${import_path.sep}${import_chunk_jar84hn9.TLn}${import_path.sep}`, d = new TextEncoder(), d4o = d.encode('"type":"assistant"'), He = d.encode('"usage":{'), le = d.encode('"timestamp":"'), Ke = d.encode('"sessionId":"'), Ge = d.encode('"model":"'), qe = d.encode('"requestId":"'), c4o = d.encode('"id":"'), We = d.encode("msg_"), de = d.encode('"uuid":"'), $e = d.encode('"input_tokens":'), Ye = d.encode('"output_tokens":'), je = d.encode('"cache_creation_input_tokens":'), ze = d.encode('"cache_read_input_tokens":'), Xe = d.encode('"isSidechain":true'), Ve = d.encode('"isSidechain": true'), Qe = d.encode('"effort":"max"'), Je = d.encode('"attribution'), Ze = d.encode('"attributionAgent":"'), et = d.encode('"attributionSkill":"'), tt = d.encode('"attributionPlugin":"'), nt = d.encode('"attributionMcpServer":"'), nQs = d.encode('"type":"user"'), K = d.encode('"isMeta":true'), ot = d.encode('"subtype":"scheduled_task_fire"'), st = d.encode('"taskId":"'), G = d.encode('"scheduledTaskId":"'), rt = d.encode('"scheduledFireId":"'), rQs = d.encode('"type":"tool_result"'), oQs = d.encode('"toolUseResult":'), it = d.encode('"turnCompanion":true'), ct = d.encode(`"text":"${import_chunk_0ha8wex8.WC.slice(0, -1)}`), ee = d.encode('"content":"['), at = d.encode(" prior /loop wakeup"), ut = d.encode('"isCompactSummary":true'), lt = [d.encode('"subtype":"compact_boundary"'), ...[]], dt = d.encode('"type":"attachment"'), pt = d.encode('"attachment":{"type":"file"'), ft = d.encode('"type":"queued_command"'), mt = d.encode('"origin":{'), Tt = d.encode('"origin":{"kind":"human"'), _t = d.encode('"promptSource":"'), St = d.encode('"type":"system"'), gt = d.encode('"subtype":"local_command"'), w = (e) => [d.encode(`"content":"<${e}>`), d.encode(`"text":"<${e}>`)], te = [...w("command-message"), ...w("command-name")], Rt = w(import_chunk_k449cc64.use), ne = [...w(import_chunk_k449cc64.Tf), ...w(import_chunk_k449cc64.Ky)], Ct = [...w(import_chunk_k449cc64.NK), ...w(import_chunk_k449cc64.VM)], k = (e, n, o) => n.some((s) => Gw(e, s, 0, o) >= 0), Et = [d.encode(`"content":${(0, import_chunk_w578pjby._)(import_chunk_0ha8wex8.Sct).slice(0, -1)}`), d.encode(`"text":${(0, import_chunk_w578pjby._)(import_chunk_0ha8wex8.Sct).slice(0, -1)}`)], pe = (e, n = false) => {
  let o = n ? (0, import_chunk_w578pjby._)(e) : (0, import_chunk_w578pjby._)(e).slice(0, -1);
  return [d.encode(`"content":${o}`), d.encode(`"text":${o}`)];
}, ht = [...import_chunk_0ha8wex8.o8i.map((e) => `${e}${import_chunk_0ha8wex8.fOs}`), import_chunk_0ha8wex8.J6n, import_chunk_0ha8wex8.s8i, import_chunk_0ha8wex8.cVt, import_chunk_4x1jja6d.$Ir, import_chunk_0ha8wex8.Q6n, import_chunk_0ha8wex8.lIr].filter((e) => e.length > 0).flatMap((e) => pe(e)), yt = [import_chunk_0ha8wex8.Xmn, import_chunk_0ha8wex8.i8i, import_chunk_0ha8wex8.Z6n, import_chunk_0ha8wex8.aIr, import_chunk_0ha8wex8.eVn, ...import_chunk_0ha8wex8.bOs].flatMap((e) => pe(e, true)), bt = d.encode('"cron":"'), Mt = d.encode('"prompt":"'), Ot = d.encode('"taskKind":"loop"'), At = d.encode('"content":"'), kt = d.encode('"text":"'), N = 34, fe = 92, wt = 123, oe = 125, Lt = 91, xt = 93, W = 48, me = 57;
function Gw(e, n, o, s) {
  let r = e.subarray(o, s).indexOf(n);
  return r < 0 ? -1 : o + r;
}
function Vte(e, n, o, s) {
  let r = Gw(e, n, o, s);
  if (r < 0) return;
  let c = r + n.length, a = c;
  while (a < s && e[a] !== N) a++;
  return e.toString("utf8", c, a);
}
function hCn(e, n, o, s, r) {
  let c = Gw(e, n, o, s);
  if (c < 0) return;
  let a = c + n.length, p = a, T = Math.min(s, a + r);
  while (p < T && e[p] !== N) {
    if (e[p] === fe) p++;
    p++;
  }
  let u = p >= T;
  if (p > T) p = T - 1;
  if (u) p = Nt(e, a, p);
  let l = e.toString("utf8", a, p);
  if (u) l = l.replace(/(^|[^\\])((?:\\\\)*)\\u[0-9a-fA-F]{0,3}$/, "$1$2");
  try {
    let R = (0, import_chunk_w578pjby.Cs)(`"${l}"`);
    return typeof R === "string" ? R : void 0;
  } catch {
    return;
  }
}
function Nt(e, n, o) {
  let s = o;
  while (s > n && (e[s - 1] & 192) === 128) s--;
  if (s === n) return n;
  let r = e[s - 1], c = r >= 240 ? 4 : r >= 224 ? 3 : r >= 192 ? 2 : 1;
  return o - (s - 1) < c ? s - 1 : o;
}
function It(e, n, o) {
  let s = n;
  while (true) {
    if (s = Gw(e, c4o, s, o), s < 0) return;
    let r = s + c4o.length;
    if (Gw(e, We, r, r + 4) === r) {
      let c = r;
      while (c < o && e[c] !== N) c++;
      return e.toString("utf8", r, c);
    }
    s = r;
  }
}
function I(e, n, o, s) {
  let r = Gw(e, n, o, s);
  if (r < 0) return 0;
  let c = r + n.length, a = 0;
  while (c < s && e[c] >= W && e[c] <= me) a = a * 10 + (e[c] - W), c++;
  return a;
}
function Pt(e) {
  if (!e) return 3;
  let n = e.toLowerCase();
  if (n.includes("fable")) return 10;
  if (n.includes("opus")) return 5;
  if (n.includes("haiku")) return 1;
  return 3;
}
function sQs(e) {
  return (e.cached + e.uncached * 10 + e.cacheCreate * 12.5 + e.output * 50) * e.modelTier;
}
async function KDa(e, n) {
  let o = Date.now() - ue, s = Date.now() - 864e5, r = se(), c = se();
  return await Te(o, (a) => {
    if (ie(c, a), a.ts >= s) ie(r, a, s);
  }, e, (a) => {
    if (re(c, a), a.ts >= s) re(r, a);
  }, n), { day: ce(r), week: ce(c) };
}
async function Te(e, n, o, s, r) {
  if (o) return vt(o, e, n, s, r);
  let c = (0, import_chunk_q3a5dy2r.Em)(), a;
  try {
    a = await (0, import_promises.readdir)(c);
  } catch (l) {
    if ((0, import_chunk_jv7av99m.fn)(l)) return;
    throw l;
  }
  let T = (await Promise.all(a.map((l) => Ht((0, import_path.join)(c, l))))).flat(), u = _e(n, s);
  for (let l = 0; l < T.length; l += D) {
    let R = T.slice(l, l + D), g = R.map(() => r && Ee(r()));
    (await Promise.all(R.map((y, b) => Kt(y, e, g[b])))).forEach((y, b) => {
      u(y), g[b]?.end(y);
    });
  }
}
function _e(e, n) {
  let o = /* @__PURE__ */ new Set(), s = (r) => {
    if (!r) return true;
    if (o.has(r)) return false;
    return o.add(r), true;
  };
  return (r) => {
    for (let c of r.records) if (s(c.uuid)) e(c);
    if (n) {
      for (let c of r.fires) if (s(c.uuid)) n(c);
    }
  };
}
async function vt(e, n, o, s, r) {
  let c = [], a = (0, import_chunk_hnt4bwpe.VPo)(), p = await (0, import_chunk_hnt4bwpe.Nd)((g) => e.listEntries({ namespace: "transcript" }, { skipScopeStats: true, ...g !== void 0 && { cursor: g } }), (g) => {
    for (let O of g) {
      let y = (0, import_chunk_q3a5dy2r.jXe)(O, import_chunk_hkvzj051.Ao);
      if (y !== void 0) c.push(y);
    }
  }, { budget: a });
  j("project", p, a);
  let u = (await Promise.all(c.map((g) => Bt(e, g, n, a)))).flat(), l = _e(o, s);
  for (let g = 0; g < u.length; g += D) {
    let O = u.slice(g, g + D), y = O.map(() => r && Ee(r()));
    (await Promise.all(O.map((L, x) => Dt(e, L, n, y[x])))).forEach((L, x) => {
      l(L), y[x]?.end(L);
    });
  }
  let R = (0, import_chunk_hnt4bwpe.aDl)(a);
  if (R > 0) (0, import_chunk_w578pjby.t)(`foldRecentRecords: ${R} more v5 listings were cut short after the scan's ${import_chunk_hnt4bwpe.pS}-page budget ran out`);
}
async function Bt(e, n, o, s) {
  let r = [], c = [], a = await (0, import_chunk_hnt4bwpe.Nd)((l) => e.listEntries({ namespace: "transcript", projectKey: n }, { skipScopeStats: true, ...l !== void 0 && { cursor: l } }), (l) => {
    for (let R of l) if (R.kind === "key") ge(r, R);
    else if (R.scope.namespace === "transcript" && R.scope.sessionId !== void 0 && (0, import_chunk_hkvzj051.Ao)(R.scope.sessionId)) c.push(R.scope.sessionId);
  }, { budget: s });
  j("session", a, s);
  let p = /* @__PURE__ */ new Map();
  for (let l of r) if (l.key.namespace === "transcript" && l.key.agentId === void 0 && l.key.journal !== true) p.set(l.key.sessionId, l.mtimeMs);
  let T = c.filter((l) => (p.get(l) ?? 1 / 0) >= o), u = await Promise.all(T.map((l) => Se(e, n, l, s)));
  return r.concat(u.flat());
}
async function Se(e, n, o, s, r) {
  let c = [], a = [], p = await (0, import_chunk_hnt4bwpe.Nd)((u) => e.listEntries({ namespace: "transcript", projectKey: n, sessionId: o, ...r !== void 0 && { agentRelPath: r } }, { skipScopeStats: true, ...u !== void 0 && { cursor: u } }), (u) => {
    for (let l of u) if (l.kind === "key") {
      if (l.key.namespace === "transcript" && (l.key.agentId !== void 0 || l.key.journal === true)) ge(c, l);
    } else if (l.scope.namespace === "transcript" && l.scope.agentRelPath !== void 0 && l.scope.agentRelPath.length > (r?.length ?? 0)) a.push(l.scope.agentRelPath);
  }, { budget: s });
  j("subagent", p, s);
  let T = await Promise.all(a.map((u) => Se(e, n, o, s, u)));
  return c.concat(T.flat());
}
function j(e, n, o) {
  let s = (0, import_chunk_hnt4bwpe.iDl)(n, o);
  if (n.status === "error") (0, import_chunk_w578pjby.t)(`foldRecentRecords: v5 ${e} listing failed: ${n.error.code}`);
  else if (s === "first-truncation") (0, import_chunk_w578pjby.t)(`foldRecentRecords: v5 ${e} listing cut short (the scan's ${import_chunk_hnt4bwpe.pS}-page budget is spent); keeping what was listed`);
}
function ge(e, n) {
  if (n.kind === "key" && n.key.namespace === "transcript" && n.size !== void 0 && n.mtimeMs !== void 0) e.push({ key: n.key, size: n.size, mtimeMs: n.mtimeMs });
}
async function Dt(e, n, o, s) {
  let r = Re();
  if (n.mtimeMs >= o) await Ut(e, n, Ce(r, o, n.key.namespace === "transcript" && n.key.agentRelPath?.[0] === import_chunk_jar84hn9.TLn, s));
  return r;
}
async function Ut(e, n, o) {
  let { key: s } = n, r = n.size <= ae, c = 0, a = [], p = 0;
  while (true) {
    let T = await e.read([r ? s : { key: s, offset: c, length: xe }]);
    if (!T.ok) {
      (0, import_chunk_w578pjby.t)(`readRecordsFromStream: v5 read failed: ${T.error.code}`);
      return;
    }
    let u = T.value.items[0];
    if (!u.found) return;
    let l = Buffer.from(u.value.buffer, u.value.byteOffset, u.value.byteLength), R = 0;
    while (R < l.length) {
      let g = l.indexOf(10, R);
      if (g === -1) {
        a.push(Buffer.from(l.subarray(R))), p += l.length - R;
        break;
      }
      if (p === 0) o(l.subarray(R, g));
      else o(Buffer.concat([...a, l.subarray(R, g)], p + (g - R))), a = [], p = 0;
      R = g + 1;
    }
    if (c += u.value.byteLength, r || u.value.byteLength === 0 || c >= u.totalBytes) break;
  }
  if (p > 0) o(a.length === 1 ? a[0] : Buffer.concat(a, p));
}
function Ft(e, n) {
  if (!n.attributionSkill) return;
  e.set(n.attributionSkill, (e.get(n.attributionSkill) ?? 0) + n.cached + n.cacheCreate + n.uncached + n.output);
}
async function qDa(e) {
  let n = Date.now() - ue, o = /* @__PURE__ */ new Map();
  return await Te(n, (s) => Ft(o, s), e), o;
}
async function Ht(e) {
  let n;
  try {
    n = await (0, import_promises.readdir)(e, { withFileTypes: true });
  } catch (c) {
    if ((0, import_chunk_jv7av99m.fn)(c)) return [];
    throw c;
  }
  let o = [], s = [];
  for (let c of n) if (c.isFile() && (0, import_path.extname)(c.name) === ".jsonl") o.push((0, import_path.join)(e, c.name));
  else if (c.isDirectory()) s.push(c.name);
  let r = await Promise.all(s.map(async (c) => {
    let a = (0, import_path.join)(e, c, "subagents");
    try {
      return (await (0, import_promises.readdir)(a, { recursive: true })).filter((T) => (0, import_path.extname)(T) === ".jsonl").map((T) => (0, import_path.join)(a, T));
    } catch (p) {
      if ((0, import_chunk_jv7av99m.fn)(p)) return [];
      throw p;
    }
  }));
  for (let c of r) for (let a of c) o.push(a);
  return o;
}
async function Kt(e, n, o) {
  let s = Re();
  return await Gt(e, n, Ce(s, n, e.includes(Fe), o)), s;
}
async function Gt(e, n, o) {
  let s;
  try {
    s = await (0, import_promises.stat)(e);
  } catch (r) {
    if ((0, import_chunk_jv7av99m.fn)(r)) return;
    throw r;
  }
  if (!s.isFile() || s.mtimeMs < n) return;
  try {
    for await (let r of (0, import_chunk_w578pjby.LLr)(e)) o(r);
  } catch (r) {
    if ((0, import_chunk_jv7av99m.fn)(r)) return;
    throw r;
  }
}
function Re() {
  return { records: [], fires: [] };
}
function Ce(e, n, o, s) {
  let r = Wt(e, n, o);
  if (!s) return r;
  return (c) => {
    r(c), s.line(c, e);
  };
}
function Ee(e) {
  let n = true, o = (s) => {
    if (!n) return;
    try {
      s();
    } catch (r) {
      n = false, (0, import_chunk_k449cc64.i)(r);
    }
  };
  return { line: (s, r) => o(() => e.line(s, r)), end: (s) => o(() => e.end(s)) };
}
var qt = /<command-name>([^<]{1,200})<\/command-name>/, z = 200, Y = 6 * z;
function Wt(e, n, o) {
  let s = 0, r = [], c = [], a = 0, p = V(), T = true, u, l = /* @__PURE__ */ new Map(), R = () => {
    s++, c = [], a = 0, T = false;
  }, g = () => {
    s++, c = [], a = 0, T = true, b = void 0, u = void 0;
  }, O = () => {
    if (!u) return;
    if (a = Math.max(0, a - 1), u.run) e.fires.pop(), c.pop();
    if (u.fire && u.fire.taskId === void 0) r.unshift(u.fire);
    u = void 0;
  }, y = () => {
    if (u?.isCommandRecord) O(), g();
  }, b, L = (m, f) => {
    let S = Vte(m, rt, 0, f);
    if (S !== void 0) {
      let E = r.findIndex((h) => h.uuid === S);
      return E < 0 ? void 0 : r.splice(E, 1)[0];
    }
    let C = Vte(m, G, 0, f);
    if (C !== void 0) {
      let E = r.findLastIndex((A) => A.taskId === C);
      if (E < 0) return;
      let h = r[E];
      return r = r.filter((A) => A.taskId !== C), h;
    }
    if (!(Gw(m, mt, 0, f) < 0 && (Gw(m, K, 0, f) >= 0 || k(m, te, f)))) {
      r = r.filter((E) => E.taskId !== void 0);
      return;
    }
    if (r[0]?.taskId === void 0) return r.shift();
    return;
  }, x = (m, f) => Gw(m, K, 0, f) >= 0 && (ht.some((S) => Gw(m, S, 0, f) >= 0) || yt.some((S) => Gw(m, S, 0, f) >= 0));
  return (m) => {
    let f = m.length;
    if (Gw(m, d4o, 0, f) >= 0) {
      let S = Xt(m, 0, f, o);
      if (T = true, u = void 0, S) {
        J(p, S);
        let C = l.get(S.isSubagent);
        if (C?.cached === S.cached && C.cacheCreate === S.cacheCreate && C.uncached === S.uncached) S.recached = C.recached;
        else if (C) S.recached = Math.min(S.cacheCreate, Math.max(0, C.cached + C.cacheCreate - S.cached));
        l.set(S.isSubagent, S);
      }
      if (S && S.ts >= n) {
        if (a > 1 && c.length > 0) {
          let C = 1 / a;
          S.loopShares = c.map((M) => ({ ...M, share: C }));
        } else if (c[0]) S.loop = c[0].loop, S.loopFireTs = c[0].fireTs;
        e.records.push(S);
      }
      return;
    }
    if (Gw(m, nQs, 0, f) >= 0) {
      let S = Gw(m, rQs, 0, f);
      if (S < 0) F(p, f);
      else if (Ztr(f - S)) {
        let X = Gw(m, oQs, S, f);
        Q(p, (X < 0 ? f : X) - S);
      }
      if (S >= 0 || Gw(m, it, 0, f) >= 0 || Gw(m, ut, 0, f) >= 0 || k(m, Ct, f) || $t(m, f) || x(m, f)) return;
      if (Gw(m, ct, 0, f) >= 0) {
        g();
        return;
      }
      let C = Gw(m, K, 0, f) >= 0;
      if (C && k(m, Et, f)) {
        if (O(), a === 0) g();
        return;
      }
      if (k(m, ne, f)) {
        y();
        return;
      }
      let M = k(m, te, f);
      if (k(m, Rt, f) || C && !M && Gw(m, _t, 0, f) < 0 && Gw(m, G, 0, f) < 0) return;
      let E = Gw(m, Tt, 0, f) >= 0 || !C && !M && Gw(m, G, 0, f) < 0, h = L(m, f);
      if (h?.openBatch === s && !T && a > 0) g();
      if (T || E) R();
      if (a++, u = { fire: h, run: false, isCommandRecord: M }, !h) {
        b = void 0;
        return;
      }
      let A = h.loop ?? zt(m, f);
      if (!A) return;
      if (!A.isDynamic) b = void 0;
      if (h.ts < n) return;
      e.fires.push({ ts: h.ts, uuid: h.uuid, loop: A }), c.push({ loop: A, fireTs: h.ts }), u.run = true;
      return;
    }
    if (k(m, lt, f)) {
      l.clear();
      return;
    }
    if (p.lastRequest === void 0 && Gw(m, pt, 0, f) >= 0) {
      F(p, f);
      return;
    }
    if (Gw(m, St, 0, f) >= 0 && Gw(m, gt, 0, f) >= 0 && k(m, ne, f)) {
      y();
      return;
    }
    if (Gw(m, dt, 0, f) >= 0 && Gw(m, ft, 0, f) >= 0) {
      g();
      return;
    }
    if (Gw(m, ot, 0, f) >= 0) {
      let S = Vte(m, le, 0, f), C = S ? Date.parse(S) : NaN;
      if (Number.isNaN(C)) return;
      let M = hCn(m, Mt, 0, f, Y), E = M ? (0, import_chunk_7cfjrnwy.y2)(M, z) : void 0, h = Gw(m, Ot, 0, f) >= 0;
      if (E && h) b ??= E, E = b;
      r.push({ ts: C, openBatch: a > 0 && !T ? s : void 0, uuid: Vte(m, de, 0, f) ?? "", taskId: Vte(m, st, 0, f), loop: E ? { prompt: E, cron: jt(hCn(m, bt, 0, f, Yt)), isDynamic: h } : null });
    }
  };
}
function $t(e, n) {
  let o = Gw(e, ee, 0, n);
  if (o < 0) return false;
  let s = o + ee.length, r = s;
  while (s < n && e[s] >= W && e[s] <= me) s++;
  return s > r && Gw(e, at, s, n) === s;
}
var he = 64, Yt = 6 * he;
function jt(e) {
  return e === void 0 ? void 0 : (0, import_chunk_7cfjrnwy.y2)(e, he);
}
function zt(e, n) {
  let o = hCn(e, At, 0, n, Y) ?? hCn(e, kt, 0, n, Y);
  if (!o) return null;
  let s = o.match(qt)?.[1], r = (0, import_chunk_7cfjrnwy.y2)(s ?? o, z);
  return r ? { prompt: r, cron: void 0, isDynamic: false } : null;
}
function Xt(e, n, o, s) {
  if (Gw(e, d4o, n, o) < 0) return;
  if (Gw(e, He, n, o) < 0) return;
  let r = Vte(e, le, n, o), c = Vte(e, Ke, n, o);
  if (!r || !c) return;
  let a = Date.parse(r);
  if (Number.isNaN(a)) return;
  let p = I(e, $e, n, o), T = I(e, Ye, n, o), u = I(e, je, n, o), l = I(e, ze, n, o);
  if (p + T + u + l === 0) return;
  let R = Gw(e, Je, n, o) >= 0, g = Vte(e, Ge, n, o);
  return { ts: a, sessionId: c, cached: l, cacheCreate: u, recached: 0, uncached: p, output: T, isSubagent: Gw(e, Xe, n, o) >= 0 || Gw(e, Ve, n, o) >= 0, isMaxEffort: Vt(e.subarray(n, o), Qe), isWorkflow: s, alwaysOnTokens: 0, largeToolResultTokens: 0, modelTier: Pt(g), model: g, uuid: Vte(e, qe, n, o) ?? It(e, n, o) ?? Vte(e, de, n, o) ?? "", ...R && { attributionAgent: Vte(e, Ze, n, o), attributionSkill: Vte(e, et, n, o), attributionPlugin: Vte(e, tt, n, o), attributionMcpServer: Vte(e, nt, n, o) } };
}
function Vt(e, n) {
  let o = e.lastIndexOf(oe);
  for (let s = e.lastIndexOf(n); s >= 0; s = s === 0 ? -1 : e.lastIndexOf(n, s - 1)) {
    let r = 1, c = false, a = s + n.length;
    for (; a < e.length && r > 0; a++) {
      let p = e[a];
      if (c) {
        if (p === fe) a++;
        else if (p === N) c = false;
      } else if (p === N) c = true;
      else if (p === wt || p === Lt) r++;
      else if (p === oe || p === xt) r--;
    }
    if (r === 0 && a - 1 === o) return true;
  }
  return false;
}
function se() {
  return { totalCost: 0, requestCount: 0, cacheMissCost: 0, cacheMissCount: 0, longCtxCost: 0, longCtxCount: 0, maxEffortCost: 0, maxEffortCount: 0, workflowCost: 0, workflowCount: 0, alwaysOnCost: 0, alwaysOnCount: 0, largeToolResultCost: 0, largeToolResultCount: 0, sessions: /* @__PURE__ */ new Map(), buckets: /* @__PURE__ */ new Map(), byAgent: /* @__PURE__ */ new Map(), bySkill: /* @__PURE__ */ new Map(), byPlugin: /* @__PURE__ */ new Map(), byMcpServer: /* @__PURE__ */ new Map(), loops: /* @__PURE__ */ new Map() };
}
function ye(e, n) {
  let o = e.loops.get(n.prompt);
  if (!o) o = { prompt: n.prompt, cron: n.cron, isDynamic: n.isDynamic, runs: 0, tokens: 0, lastRunMs: 0 }, e.loops.set(n.prompt, o);
  return o;
}
function re(e, n) {
  let o = ye(e, n.loop);
  if (o.runs++, n.ts >= o.lastRunMs) o.lastRunMs = n.ts, o.cron = n.loop.cron ?? o.cron, o.isDynamic = n.loop.isDynamic;
}
function P(e, n, o) {
  if (n) e.set(n, (e.get(n) ?? 0) + o);
}
function ie(e, n, o = -1 / 0) {
  let s = sQs(n);
  if (e.totalCost += s, e.requestCount++, n.attributionAgent) P(e.byAgent, n.attributionSkill ?? n.attributionAgent, s);
  else P(e.bySkill, n.attributionSkill, s);
  if (P(e.byPlugin, n.attributionPlugin, s), P(e.byMcpServer, n.attributionMcpServer, s), n.loop || n.loopShares) {
    let u = n.cached + n.cacheCreate + n.uncached + n.output;
    for (let { loop: l, fireTs: R, share: g } of n.loopShares ?? [{ loop: n.loop, fireTs: n.loopFireTs ?? n.ts, share: 1 }]) if (R >= o) ye(e, l).tokens += u * g;
  }
  let r = n.cached + n.cacheCreate + n.uncached;
  if (n.uncached + n.recached > Ne) e.cacheMissCost += s, e.cacheMissCount++;
  if (r > Ie) e.longCtxCost += s, e.longCtxCount++;
  if (n.isMaxEffort) e.maxEffortCost += s, e.maxEffortCount++;
  if (n.isWorkflow) e.workflowCost += s, e.workflowCount++;
  let c = s - n.output * 50 * n.modelTier;
  if (n.alwaysOnTokens > 0) e.alwaysOnCost += c * Math.min(1, n.alwaysOnTokens / r), e.alwaysOnCount++;
  if (n.largeToolResultTokens > 0) e.largeToolResultCost += c * Math.min(1, n.largeToolResultTokens / r), e.largeToolResultCount++;
  let a = e.sessions.get(n.sessionId);
  if (!a) a = { cost: 0, requests: 0, subCost: 0, subCount: 0, hours: /* @__PURE__ */ new Set() }, e.sessions.set(n.sessionId, a);
  if (a.cost += s, a.requests++, n.isSubagent) a.subCost += s, a.subCount++;
  a.hours.add(Math.floor(n.ts / 36e5));
  let p = Math.floor(n.ts / Be), T = e.buckets.get(p);
  if (!T) T = { sids: /* @__PURE__ */ new Set(), cost: 0, count: 0 }, e.buckets.set(p, T);
  T.sids.add(n.sessionId), T.cost += s, T.count++;
}
function ce(e) {
  let n = 0, o = 0, s = 0;
  for (let u of e.buckets.values()) if (s = Math.max(s, u.sids.size), u.sids.size >= De) n += u.cost, o += u.count;
  let r = 0, c = 0, a = 0, p = 0;
  for (let u of e.sessions.values()) {
    if (u.subCount >= Pe || u.cost > 0 && u.subCost / u.cost > ve) r += u.cost, c++;
    if (u.hours.size >= Ue) a += u.cost, p++;
  }
  let T = [{ key: "cache_miss", cost: e.cacheMissCost, count: e.cacheMissCount }, { key: "long_context", cost: e.longCtxCost, count: e.longCtxCount }, { key: "subagent_heavy", cost: r, count: c }, { key: "high_parallel", cost: n, count: o }, { key: "cron", cost: a, count: p }, { key: "max_effort", cost: e.maxEffortCost, count: e.maxEffortCount }, { key: "workflow", cost: e.workflowCost, count: e.workflowCount }, { key: "always_on_context", cost: e.alwaysOnCost, count: e.alwaysOnCount }, { key: "large_tool_results", cost: e.largeToolResultCost, count: e.largeToolResultCount }];
  return T.sort((u, l) => l.cost - u.cost), { totalCost: e.totalCost, requestCount: e.requestCount, sessionCount: e.sessions.size, behaviors: T, agents: v(e.byAgent, e.totalCost), skills: v(e.bySkill, e.totalCost), plugins: v(e.byPlugin, e.totalCost), mcpServers: v(e.byMcpServer, e.totalCost), loops: [...e.loops.values()].map((u) => ({ ...u, tokens: Math.round(u.tokens) })).sort((u, l) => l.tokens - u.tokens), peakParallel: s };
}
function v(e, n) {
  if (e.size === 0 || n === 0) return [];
  return [...e.entries()].sort((o, s) => s[1] - o[1]).map(([o, s]) => ({ name: o, pct: Math.round(s / n * 100) })).filter((o) => o.pct > 0);
}
