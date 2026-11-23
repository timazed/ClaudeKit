const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
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
var __using = (stack, value, async) => {
  if (value != null) {
    if (typeof value !== "object" && typeof value !== "function") __typeError("Object expected");
    var dispose, inner;
    if (async) dispose = value[__knownSymbol("asyncDispose")];
    if (dispose === void 0) {
      dispose = value[__knownSymbol("dispose")];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") __typeError("Object not disposable");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    stack.push([async, dispose, value]);
  } else if (async) {
    stack.push([async]);
  }
  return value;
};
var __callDispose = (stack, error, hasError) => {
  var E2 = typeof SuppressedError === "function" ? SuppressedError : function(e, s2, m, _2) {
    return _2 = Error(m), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s2, _2;
  };
  var fail = (e) => error = hasError ? new E2(e, error, "An error was suppressed during disposal") : (hasError = true, e);
  var next = (it2) => {
    while (it2 = stack.pop()) {
      try {
        var result = it2[1] && it2[1].call(it2[2]);
        if (it2[0]) return Promise.resolve(result).then(next, (e) => (fail(e), next()));
      } catch (e) {
        fail(e);
      }
    }
    if (hasError) throw error;
  };
  return next();
};
var chunk_28fajby4_exports = {};
__export(chunk_28fajby4_exports, {
  FNo: () => FNo,
  I1s: () => I1s,
  Jua: () => Jua,
  O1s: () => O1s,
  Qua: () => Qua,
  Xua: () => Xua,
  Zua: () => Zua,
  d1r: () => d1r,
  efa: () => efa,
  tfa: () => tfa
});
module.exports = __toCommonJS(chunk_28fajby4_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_0pb268nk = require("/$bunfs/root/chunk-0pb268nk.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_0w2wb7gk = require("/$bunfs/root/chunk-0w2wb7gk.js");
var import_chunk_bq31aqv6 = require("/$bunfs/root/chunk-bq31aqv6.js");
var import_chunk_qaaqd1gd = require("/$bunfs/root/chunk-qaaqd1gd.js");
var import_chunk_b18a27zs = require("/$bunfs/root/chunk-b18a27zs.js");
var import_chunk_9bypzm3p = require("/$bunfs/root/chunk-9bypzm3p.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var import_path2 = require("path");
var import_path3 = require("path");
(0, import_chunk_adx6804h.B)();
var x = ["claude-md-or-agents-md", "claude-md-and-agents-md"], g = [];
async function T(t, o, e, r) {
  let a = await w(t, o, e, r);
  return a ? (0, import_chunk_0w2wb7gk.Uvs)(a, t) : t;
}
async function A(t, o, e, r, a, i) {
  let m = { start: (0, import_path2.dirname)(t), below: (0, import_chunk_f9x2f6cx.Te)(), held: () => r }, [d, u] = await Promise.all([(0, import_chunk_bzyb60p0.Qts)(import_chunk_9bypzm3p.VZn, import_chunk_9bypzm3p.VYt, m), (0, import_chunk_bzyb60p0.Qts)(import_chunk_9bypzm3p.YYt, import_chunk_9bypzm3p.VYt, m)]).catch(() => [g, g]), f = e === import_chunk_9bypzm3p.JYt ? (0, import_chunk_9bypzm3p.TVo)(d, u) : d, y = f.length > 0 && await w(o, e, a, i);
  if (!y) return [];
  return (0, import_chunk_0w2wb7gk.Uvs)((0, import_chunk_9bypzm3p.KZn)((0, import_chunk_9bypzm3p.KYt)(f), [...y, ...(0, import_chunk_9bypzm3p.KYt)(u)]), []);
}
async function w(t, o, e, r) {
  let a = (0, import_chunk_f9x2f6cx.Te)(), i = t.map(import_chunk_0w2wb7gk.s6i);
  if (o === import_chunk_9bypzm3p.JYt && (i.some((d) => (0, import_chunk_9bypzm3p.CVo)(d, a)) || await S(import_chunk_9bypzm3p.YYt, e, r).then((d) => d.length > 0, () => true))) return;
  let m = await S(import_chunk_9bypzm3p.VZn, e, r).catch(() => g);
  return (0, import_chunk_9bypzm3p.AVo)(i, (0, import_chunk_9bypzm3p.KZn)((0, import_chunk_9bypzm3p.KYt)(m), i));
}
function S(t, o, e) {
  return (0, import_chunk_bzyb60p0.N_t)(o, e), (0, import_chunk_bzyb60p0.Qts)(t, import_chunk_9bypzm3p.VYt, { session: o });
}
(0, import_chunk_adx6804h.B)();
var Y = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ readRules: (0, import_chunk_adx6804h.ie)().optional() }));
function d1r(t, o) {
  let e = Y().safeParse(t).data?.readRules;
  if (e === void 0) return { context: (0, import_chunk_bz1f2qnq.Z)(o.toolUseContext()), bySentRules: false };
  let r = (0, import_chunk_qaaqd1gd.J3)(e) ? void 0 : (0, import_chunk_qaaqd1gd.AY)().safeParse(e).data;
  if (r === void 0 || o.launchPermissionContext === void 0) return;
  let a = (0, import_chunk_b18a27zs.D3)(r, o.launchPermissionContext, (0, import_chunk_f9x2f6cx.Te)());
  return { context: (0, import_chunk_bq31aqv6.H0n)(a), bySentRules: true };
}
(0, import_chunk_adx6804h.B)();
var O = "anthropic/nestedMemoryTriggers", M = 64, b = "anthropic/nestedMemoryFilesAsked", h = "anthropic/nestedMemoryFilesFound";
function Xua(t, o) {
  return { ...t, _meta: { ...t._meta, [O]: o.filter((e) => e.length <= import_chunk_qaaqd1gd.z_e).slice(0, M) } };
}
var v = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ [b]: (0, import_chunk_adx6804h.c)({ agentsMd: (0, import_chunk_adx6804h.ie)().optional() }) }));
function Jua(t) {
  return v().safeParse(t).data?.[b];
}
var H = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.n)().pipe((0, import_chunk_qaaqd1gd.onr)()).refine((t) => import_path3.posix.normalize(t) === t));
function N(t, o = O) {
  let e = t?.[o];
  return Array.isArray(e) ? e.slice(0, M).flatMap((r) => typeof r === "string" && r.length <= import_chunk_qaaqd1gd.z_e ? H().safeParse(r).data ?? [] : []) : void 0;
}
var Qua = "ReadProjectContext", Zua = "ReadNestedProjectContext", FNo = 8388608, K = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ maxChars: (0, import_chunk_adx6804h.E)().int().positive().optional(), agentsMd: (0, import_chunk_adx6804h.F)(x).optional().catch(void 0), addedDirectories: (0, import_chunk_adx6804h.P)().optional().catch(void 0), ownFiles: (0, import_chunk_adx6804h.P)().optional().catch(void 0) })), W = FNo / 8, X = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ filePath: (0, import_chunk_adx6804h.n)().max(4096).refine(function(o) {
  return import_path.posix.isAbsolute(o) && import_path.posix.normalize(o) === o;
}, "must be an absolute, normalized path"), maxChars: (0, import_chunk_adx6804h.E)().int().positive().optional(), agentsMd: (0, import_chunk_adx6804h.F)(x).optional().catch(void 0), addedDirectories: (0, import_chunk_adx6804h.P)().optional().catch(void 0), ownFiles: (0, import_chunk_adx6804h.P)().optional().catch(void 0) })), it = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ memoryFiles: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ path: (0, import_chunk_adx6804h.n)().max(4096), type: (0, import_chunk_adx6804h.F)(["Project", "Local", "User"]), content: (0, import_chunk_adx6804h.n)(), parent: (0, import_chunk_adx6804h.n)().max(4096).optional(), globs: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional() })), tooLarge: (0, import_chunk_adx6804h.P)().optional(), rulesUnread: (0, import_chunk_adx6804h.P)().optional(), rulesJudged: (0, import_chunk_adx6804h.P)().optional() }));
async function efa(t, o, e) {
  if ((0, import_chunk_0pb268nk.xN)()) return { summary: "CLAUDE.md loading is off", output: { memoryFiles: [] } };
  let r = K().safeParse(t), { session: a } = e.toolUseContext();
  (0, import_chunk_f9x2f6cx.uFs)(r.success ? r.data.addedDirectories : void 0), (0, import_chunk_bzyb60p0.hH)(a);
  let i = d1r(t, e);
  if (i === void 0) return j;
  let m = await I(e, i.context);
  o.throwIfAborted();
  let d = r.success ? r.data.agentsMd : void 0, u = d ? await T(m, d, a, i.context) : m;
  return o.throwIfAborted(), _(await L(u), r.success ? r.data : {}, FNo, i.bySentRules);
}
async function O1s(t, o, e) {
  let r = X().parse(t);
  (0, import_chunk_f9x2f6cx.uFs)(r.addedDirectories);
  let a = e.toolUseContext();
  if ((0, import_chunk_0pb268nk.xN)() || !(0, import_chunk_p1ewvgeh.w_)(r.filePath, (0, import_chunk_bz1f2qnq.Z)(a))) return { summary: "no memory files", output: { memoryFiles: [] } };
  let i = d1r(t, e);
  if (i === void 0) return j;
  let m = [], d = (0, import_chunk_bzyb60p0.pcr)(i.context);
  for await (let u of (0, import_chunk_bzyb60p0.Ipi)(r.filePath, a.storageV5, void 0, d)) o.throwIfAborted(), m.push(...u);
  if (r.agentsMd) m.push(...await A(r.filePath, await I(e, i.context), r.agentsMd, d?.within, a.session, i.context)), o.throwIfAborted();
  return _(await L(m), r, W, i.bySentRules);
}
async function tfa(t, o, e) {
  let r = N(t._meta) ?? [];
  if (r.length === 0) return { ...t, _meta: { ...t._meta, [h]: [] } };
  let a = AbortSignal.timeout(import_chunk_c203g5kd.s.CLAUDE_CODE_MCP_SERVE_MEMORY_WALKS_DEADLINE_MS ?? 2e3), { readFileState: i } = e.toolUseContext(), m = /* @__PURE__ */ new Set();
  try {
    for (let d of r) {
      let { output: u } = await (0, import_chunk_5appeerh.Tn)(O1s({ ...o, filePath: d }, a, e), a, () => new import_chunk_jv7av99m.Ie());
      for (let { path: f, parent: y } of u.memoryFiles) if (y === void 0 && !i.has(f)) m.add(f);
    }
  } catch {
    (0, import_chunk_cqa9hrgx.l)("mcp_serve_tool_host_permission", a.aborted ? "memory_walks_late" : "memory_walks_failed");
  }
  return { ...t, _meta: { ...t._meta, [h]: [...m].slice(0, M) } };
}
var j = { summary: "no memory files: the session's read rules could not be read", output: { memoryFiles: [], rulesUnread: true } };
function I(t, o) {
  let { session: e, storageV5: r, credentials: a } = t.toolUseContext();
  if ((0, import_chunk_bzyb60p0.N_t)(e, o), (0, import_chunk_bzyb60p0.IGa)(e), t.callerLogsSharedEvents) (0, import_chunk_bzyb60p0.OGa)(e);
  return (0, import_chunk_bzyb60p0.fR)(e, false, r, a);
}
async function L(t) {
  let o = (0, import_chunk_2gtmjt3y.Nl)(), e = o === null ? void 0 : await (0, import_promises.realpath)(o).catch(() => {
    return;
  });
  async function r(i) {
    try {
      var _stack = [];
      try {
        let m = await (0, import_promises.realpath)(i.path);
        if (e === void 0 || !(0, import_chunk_bzyb60p0.LTe)(m, e) || !m.endsWith(".md")) return false;
        let d = await (0, import_chunk_2yx6c1y2.VC)(m);
        if (!d.ok) return false;
        const u = __using(_stack, d.value, true);
        let f = await (0, import_chunk_2yx6c1y2.iut)(u, m), { nlink: y, size: k } = await u.stat();
        return f.ok && f.value === true && y === 1 && k <= import_chunk_bzyb60p0.KQt && await u.readFile({ encoding: "utf8" }) === (i.rawContent ?? i.content);
      } catch (_2) {
        var _error = _2, _hasError = true;
      } finally {
        var _promise = __callDispose(_stack, _error, _hasError);
        _promise && await _promise;
      }
    } catch {
      return false;
    }
  }
  let a = [];
  for (let i of t) if (i.type !== "User" || await r(i)) a.push(i);
  return a;
}
function _(t, o, e, r) {
  let a = t.flatMap((i) => i.type === "Project" || i.type === "Local" || i.type === "User" && o.ownFiles === true ? [{ path: i.path, type: i.type, content: i.content, parent: i.parent, globs: i.globs }] : []);
  if (I1s(a) > Math.min(o.maxChars ?? e, e)) {
    if (o.ownFiles === true) return _(t, { maxChars: o.maxChars }, e, r);
    return { summary: "project context too large", output: { memoryFiles: [], tooLarge: true, ...r && { rulesJudged: true } } };
  }
  return { summary: `${a.length} memory files`, output: { memoryFiles: a, ...r && { rulesJudged: true } } };
}
function I1s(t) {
  let o = 0;
  for (let e of t) {
    o += e.path.length + e.content.length, o += e.parent?.length ?? 0;
    for (let r of e.globs ?? []) o += r.length;
  }
  return o;
}
