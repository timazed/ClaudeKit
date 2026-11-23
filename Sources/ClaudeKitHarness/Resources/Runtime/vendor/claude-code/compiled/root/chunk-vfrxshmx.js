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
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s2, m, _) {
    return _ = Error(m), _.name = "SuppressedError", _.error = e, _.suppressed = s2, _;
  };
  var fail = (e) => error = hasError ? new E(e, error, "An error was suppressed during disposal") : (hasError = true, e);
  var next = (it) => {
    while (it = stack.pop()) {
      try {
        var result = it[1] && it[1].call(it[2]);
        if (it[0]) return Promise.resolve(result).then(next, (e) => (fail(e), next()));
      } catch (e) {
        fail(e);
      }
    }
    if (hasError) throw error;
  };
  return next();
};
var chunk_vfrxshmx_exports = {};
__export(chunk_vfrxshmx_exports, {
  A1o: () => A1o,
  C1o: () => C1o,
  Eha: () => Eha,
  G9n: () => G9n,
  R1o: () => R1o,
  T1o: () => T1o,
  _Bs: () => _Bs,
  gBs: () => gBs,
  gUr: () => gUr,
  hBs: () => hBs,
  hUr: () => hUr,
  kha: () => kha,
  r5t: () => r5t,
  wha: () => wha,
  x1o: () => x1o,
  z9n: () => z9n
});
module.exports = __toCommonJS(chunk_vfrxshmx_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_khxw3ng0 = require("/$bunfs/root/chunk-khxw3ng0.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_k5jn5rx9 = require("/$bunfs/root/chunk-k5jn5rx9.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_r6r2wdsw = require("/$bunfs/root/chunk-r6r2wdsw.js");
var import_chunk_271xsh6x = require("/$bunfs/root/chunk-271xsh6x.js");
var import_chunk_44g93ygc = require("/$bunfs/root/chunk-44g93ygc.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_5ft9yxne = require("/$bunfs/root/chunk-5ft9yxne.js");
var import_chunk_gvzh3pxp = require("/$bunfs/root/chunk-gvzh3pxp.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_zjhyjv3y = require("/$bunfs/root/chunk-zjhyjv3y.js");
var import_chunk_y8kqnbqt = require("/$bunfs/root/chunk-y8kqnbqt.js");
var import_chunk_yrpmp1hk = require("/$bunfs/root/chunk-yrpmp1hk.js");
var import_chunk_jbjjrhxt = require("/$bunfs/root/chunk-jbjjrhxt.js");
var import_chunk_y8s4362z = require("/$bunfs/root/chunk-y8s4362z.js");
var import_chunk_85cn4tkc = require("/$bunfs/root/chunk-85cn4tkc.js");
var import_chunk_08m42etc = require("/$bunfs/root/chunk-08m42etc.js");
var import_chunk_53kayv4s = require("/$bunfs/root/chunk-53kayv4s.js");
var import_chunk_2qx36shh = require("/$bunfs/root/chunk-2qx36shh.js");
var import_chunk_qenyadqg = require("/$bunfs/root/chunk-qenyadqg.js");
var import_chunk_mt7e13yk = require("/$bunfs/root/chunk-mt7e13yk.js");
var import_chunk_538r8e0n = require("/$bunfs/root/chunk-538r8e0n.js");
var import_chunk_tgj1b0ts = require("/$bunfs/root/chunk-tgj1b0ts.js");
var import_chunk_98tkmkvx = require("/$bunfs/root/chunk-98tkmkvx.js");
var import_chunk_4pgkmw1e = require("/$bunfs/root/chunk-4pgkmw1e.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
class q extends Error {
}
var N = "Call the tool again: it is checked again each time, and Claude Code replaces it with the server's own tool once that is loaded.", se = /^[A-Za-z0-9_-]+$/;
function X(n) {
  return n.every((o) => se.test(o.name)) && new Set(n.map((o) => o.name)).size === n.length;
}
function Z(n, o, e, f, p) {
  if ((0, import_chunk_5ft9yxne.T7)(n.config, e)) (0, import_chunk_5ft9yxne.Q6)(e);
  let g = { row: n, dialer: f, isHandshakeHanded: p, handedByName: new Map(X(e) ? e.map((m) => [m.name, m]) : []), ask: void 0, passed: /* @__PURE__ */ new Set() };
  for (let m of o) ae(g, m);
}
function ae(n, o) {
  let e = o.mcpInfo?.toolName, { call: f, validateInput: p, checkPermissions: g, askInputPreparer: m } = o;
  if (o.call = async (c, h, ...r) => {
    let y = await z(n, o, e, h);
    if (y !== void 0) throw new import_chunk_jv7av99m.A(y, "MCP tool refused by the check of its handed listing");
    return f(c, h, ...r);
  }, o.validateInput = async (c, h) => {
    let r = await z(n, o, e, h);
    if (r !== void 0) return { result: false, message: r, errorCode: 3 };
    return await p?.(c, h) ?? { result: true };
  }, o.checkPermissions = async (c, h) => {
    let r = await z(n, o, e, h);
    if (r !== void 0) return { behavior: "deny", message: r, decisionReason: { type: "other", reason: r } };
    return g(c, h);
  }, m !== void 0) o.askInputPreparer = async (c, h, r) => {
    let y = await z(n, o, e, h);
    return y === void 0 ? m(c, h, r) : { prepare: async () => ({ error: y }) };
  };
}
async function z(n, o, e, f) {
  let { row: p, handedByName: g, passed: m } = n;
  if (e === void 0) return H(p, o.name, "Claude Code could not tell which of the server's tools this is");
  let { signal: c } = f.abortController;
  if (m.has(e)) return;
  let h = n.ask ??= ce(n, f.toolUseId), r;
  try {
    r = await (0, import_chunk_44g93ygc.t4)(h.answer, { signal: c, timeoutMs: 2 * (0, import_chunk_98tkmkvx.bf)(), serverName: p.name, context: "MCP tool check" });
  } catch (C) {
    if (Q(n, h), (0, import_chunk_jv7av99m.Fe)(C)) throw C;
    if (!h.hasAnswered || C instanceof q) {
      let S = h.hasAnswered ? (0, import_chunk_jv7av99m.d)(C) : "the server did not answer in time";
      return F(n, h, "not_compared", `${H(p, e, S)} Try the call again.`);
    }
    return F(n, h, "not_compared", C instanceof import_chunk_jv7av99m.A ? (0, import_chunk_jv7av99m.d)(C) : H(p, e, ee(C, p)));
  }
  if (n.isHandshakeHanded && r.hasOtherHandshake) return F(n, h, "handshake", `MCP server "${p.name}" does not match what Claude Code was given at start-up (in its capabilities, name, version or instructions), so the call was not made. ${N}`);
  let y = r.tools.get(e);
  if (y === void 0 && r.mayListMore) return F(n, h, "not_compared", `${H(p, e, "the server's list could not be matched tool by tool")} ${N}`);
  if (!g.has(e)) return F(n, h, "not_compared", `${H(p, e, "the list given at start-up could not be matched tool by tool")} ${N}`);
  if (y === void 0) return F(n, h, "tool_gone", `MCP server "${p.name}" no longer offers the tool "${e}", so the call was not made.`);
  if (!(0, import_chunk_f9x2f6cx.cg)(y, g.get(e))) return F(n, h, "tool_differs", `MCP server "${p.name}" lists the tool "${e}" differently from the definition that Claude Code was given at start-up, so the call was not made. ${N}`);
  (0, import_chunk_cqa9hrgx.u)("mcp_handed_listing_check"), m.add(e);
  return;
}
function ce(n, o) {
  let e = { answer: de(n, o), hasAnswered: false };
  return e.answer.finally(() => {
    e.hasAnswered = true;
  }).catch(() => {
  }), e;
}
async function de({ row: n, dialer: o, isHandshakeHanded: e }, f) {
  let p = await o.ensureConnectedClient(n, { context: "MCP tool call", toolUseId: f }), g = p.instructions !== n.instructions;
  if (e && g) (0, import_chunk_cqa9hrgx.l)("mcp_handed_listing_check", "instructions_differ");
  let m = !(0, import_chunk_f9x2f6cx.cg)(p.capabilities, n.capabilities) || p.serverInfo?.name !== n.serverInfo?.name || p.serverInfo?.version !== n.serverInfo?.version;
  if (e && m) (0, import_chunk_cqa9hrgx.l)("mcp_handed_listing_check", "handshake_differs");
  let c = await o.listToolsRaw(p.client, { timeout: (0, import_chunk_98tkmkvx.bf)() }, p.config).catch((r) => {
    if ((0, import_chunk_jv7av99m.Fe)(r)) throw r;
    throw new q(ee(r, n));
  });
  if ((0, import_chunk_5ft9yxne.T7)(n.config, c)) (0, import_chunk_5ft9yxne.Q6)(c);
  let h = X(c.tools);
  return { tools: new Map(h ? c.tools.map((r) => [r.name, r]) : []), mayListMore: c.nextCursor !== void 0 || !h, hasOtherHandshake: g || m };
}
function Q(n, o) {
  if (n.ask === o) n.ask = void 0;
}
function F(n, o, e, f) {
  if (Q(n, o), e !== "handshake") (0, import_chunk_cqa9hrgx.l)("mcp_handed_listing_check", e);
  return (0, import_chunk_k449cc64.He)(n.row.name, f), f;
}
function H(n, o, e) {
  return `The tool "${o}" could not be checked against what MCP server "${n.name}" lists (${e}), so the call was not made.`;
}
function ee(n, o) {
  return (0, import_chunk_271xsh6x.Bl)((0, import_chunk_538r8e0n.Nm)(o.name, o.config, (0, import_chunk_jbjjrhxt.gl)(n, o.config)));
}
var le = "tengu_starry_fox", pe = 5, fe = 100, ue = 12e3, ne = { delaysMs: void 0, jitter: 0, retriesTimeouts: true };
function r5t() {
  let n = (0, import_chunk_r6r2wdsw.Uy)();
  if (n !== "ccs_tenant" && (n !== "hosted_worker" || (0, import_chunk_6e68m1dj.ny)())) return ne;
  let o = (0, import_chunk_865at33z.b)(le, null);
  if (typeof o !== "object" || o === null) return ne;
  let e = "startDelaysMs" in o ? o.startDelaysMs : void 0, f = "jitter" in o ? o.jitter : void 0;
  return { delaysMs: Array.isArray(e) && e.length <= pe && e.every((p) => typeof p === "number") ? e.map((p) => Math.min(Math.max(p, fe), ue)) : void 0, jitter: typeof f === "number" ? Math.min(Math.max(f, 0), 1) : 0, retriesTimeouts: !("afterTimeout" in o && o.afterTimeout === false) };
}
function T1o(n) {
  return n?.type === "failed" && n.errorCode === "CONNECT_TIMEOUT" && !r5t().retriesTimeouts;
}
var me = "tengu_mcp_tools_list_failure_retry";
function C1o() {
  return (0, import_chunk_6e68m1dj.qg)() && (0, import_chunk_865at33z.b)(me, true) !== false;
}
function hUr(n, o, e = Math.random) {
  return Math.round((0, import_chunk_4pgkmw1e.Id)({ attempt: 1, baseMs: n, jitter: o > 0 ? { kind: "proportional", ratio: o } : { kind: "none" }, random: e }));
}
function I() {
  return require("/$bunfs/root/chunk-4kvvnjdb.js").mcpClientModule();
}
function te(n) {
  let o = performance.now();
  try {
    let e = I();
    if ((0, import_chunk_zjhyjv3y.Z2e)("mcp_client_module_load_ms") === void 0) (0, import_chunk_zjhyjv3y.zo)("mcp_client_module_load_ms", performance.now() - o, o);
    return e;
  } catch (e) {
    (0, import_chunk_k449cc64.i)(e), (0, import_chunk_w578pjby.t)(`[MCP] ${n} connect error: ${e}`);
    return;
  }
}
var hBs = 1e3, A1o = [500, 1500, 4e3], ge = 0.5;
function oe() {
  return (0, import_chunk_f9x2f6cx.wJ)() ? (0, import_chunk_f9x2f6cx.PNs)() : {};
}
function wha(n) {
  let { regularMcpConfigs: o, claudeaiConfigPromise: e, state: f, storageV5: p, credentials: g, dialInConnect: m, onDialStart: c, dialFirst: h, dialOptions: r, leaveAlwaysLoadWaitTo: y } = n, C = n.knownListings && (0, import_chunk_khxw3ng0.er)(n.knownListings, (L) => Array.isArray(L) ? { tools: L } : L), S = (0, import_chunk_yrpmp1hk.hi)(), w = import_chunk_c203g5kd.s.MCP_CONNECTION_NONBLOCKING !== false;
  (0, import_chunk_f9x2f6cx.Nsa)(w);
  let O = w;
  async function _() {
    (0, import_chunk_k5jn5rx9.ts)("before_mcp_connect_user"), (0, import_chunk_k5jn5rx9.ts)("before_mcp_connect_connector");
    let L = gBs({ configs: o, label: "regular", nonBlocking: w, dialInConnect: m, onDialStart: c, dialFirst: h, dialOptions: r, state: f, storageV5: p, credentials: g, knownListings: C, leaveAlwaysLoadWaitTo: y }).then(() => (0, import_chunk_k5jn5rx9.ts)("after_mcp_connect_user")), R = W(w, () => {
      let M = e.then((v) => re({ claudeaiConfigs: v, regularMcpConfigs: { ...o, ...(0, import_chunk_f9x2f6cx.PNs)() }, state: f, deferConnect: O, storageV5: p, epoch: S })).then((v) => v === "superseded" ? [] : v);
      return (0, import_chunk_qdcbcsg7.mt)().headlessConnectorsAtStart = M.then((v) => Promise.all(v)).catch(() => {
      }), M;
    }, "claude.ai connectors").then(() => (0, import_chunk_k5jn5rx9.ts)("after_mcp_connect_connector"));
    await Promise.all([L, R]);
  }
  return { connect: _ };
}
function kha(n) {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_MCP_ALWAYS_LOAD_JOIN_BEFORE_INPUT === true && Boolean(n) && !(0, import_chunk_6e68m1dj.jm)();
}
function gBs(n) {
  let { configs: o, label: e, nonBlocking: f, state: p, storageV5: g, credentials: m, knownListings: c, dialInConnect: h, onDialStart: r, dialFirst: y, dialOptions: C, leaveAlwaysLoadWaitTo: S } = n, w = (M, v) => M.alwaysLoad === true || c !== void 0 && Object.hasOwn(c, v), O = S === void 0 ? {} : (0, import_chunk_865at33z.fI)(o, (M, v) => M.alwaysLoad === true && M.scope === "dynamic" && !(0, import_chunk_xcgcdx61.jl)(M) && !(c !== void 0 && Object.hasOwn(c, v))), _ = (0, import_chunk_865at33z.fI)(o, (M, v) => w(M, v) && !Object.hasOwn(O, v)), L = (0, import_chunk_865at33z.fI)(o, (M, v) => !w(M, v)), R = Object.keys(_).length > 0;
  if (Object.keys(O).length > 0) {
    let M = U(O, `${e}-required`, p, false, g, m, c, r, y, C);
    S?.(() => W(false, () => M, "--mcp-config alwaysLoad servers"));
  }
  return Promise.all([...R ? [W(false, () => U(_, `${e}-required`, p, false, g, m, c, r, y, C), "--mcp-config alwaysLoad servers")] : [], W(f, () => U(L, e, p, f && !h, g, m, c, r, y, C), "--mcp-config servers")]).then(() => {
  });
}
function U(n, o, e, f = false, p, g, m, c, h, r) {
  let y = Object.keys(n);
  if (y.length === 0) return [];
  let C = m && (0, import_chunk_khxw3ng0.er)(m, (M) => M.tools);
  e.applyMcpUpdate((M) => ({ ...M, clients: [...M.clients, ...Object.entries(n).map(([v, x]) => ({ name: v, type: "pending", config: x }))] }));
  let S = /* @__PURE__ */ new Map(), w = y.map((M) => new Promise((v) => S.set(M, v))), O = Promise.withResolvers(), _ = /* @__PURE__ */ new Set(), L = (M) => {
    for (let v of Object.keys(M)) _.add(v);
    z9n(M, e, p, void 0, O.promise).catch((v) => (0, import_chunk_w578pjby.t)(`[MCP] ${o} retry error: ${v}`)).finally(() => {
      for (let v of Object.keys(M)) _.delete(v);
    });
  }, R = () => {
    let M = te(o);
    if (!M) {
      for (let T of S.values()) T();
      return;
    }
    if (c !== void 0 && y.some((T) => !Object.hasOwn(C ?? {}, T))) c();
    let v = h === void 0 ? n : { ...(0, import_chunk_865at33z.fI)(n, (T, P) => h(P)), ...n }, x = [];
    M.getMcpToolsCommandsAndResources((T) => {
      let { client: P } = T, B = Object.hasOwn(m ?? {}, P.name) ? m?.[P.name] : void 0, k = B?.handshake;
      if (P.type === "cached" && B !== void 0) P.listedByHost = true;
      if (P.type === "cached" && k !== void 0) {
        P.capabilities = k.capabilities, P.serverInfo = { name: k.serverInfo.name, version: k.serverInfo.version };
        let E = M.capMcpInstructions(k.instructions, P.name, (0, import_chunk_mt7e13yk.hUe)(P.config));
        if (E !== void 0) P.instructions = E;
      }
      if (P.type === "cached" && B?.comparedBeforeUse) Z(P, T.tools, B.tools, M, k !== void 0);
      let j = (E) => {
        R1o(e, { ...T, commands: [...T.commands, ...E] }), x1o(P, e, p), (0, import_chunk_tgj1b0ts.AUa)();
        let { name: D } = T.client;
        if (S.get(D)?.(), !_.has(D)) {
          let J = (0, import_chunk_865at33z.fI)(n, (ve, ie) => ie === D);
          if (gUr(J, e).length > 0) L(J);
        }
      };
      if (P.type === "cached" && B?.skills !== void 0) {
        let E = (D) => ((0, import_chunk_w578pjby.t)(`[MCP] ${o} handed skills of ${P.name}: ${D}`), []);
        x.push(require("/$bunfs/root/chunk-f7m7jxed.js").mcpSkillCommandsFromListing(P, B.skills, p).catch(E).then(j).catch(E));
      } else j([]);
    }, v, p, g, C, true, void 0, r).then(() => Promise.all(x)).catch((T) => (0, import_chunk_w578pjby.t)(`[MCP] ${o} connect error: ${T}`)).finally(() => {
      for (let T of S.values()) T();
      O.resolve(performance.now()), L((0, import_chunk_865at33z.fI)(n, (T, P) => !_.has(P)));
    });
  };
  if (f) setImmediate(R);
  else R();
  return w;
}
function R1o(n, o) {
  let { client: e, tools: f, commands: p, attemptEpoch: g } = o, m, c = "applied", h = (0, import_chunk_yrpmp1hk.rJt)(e.config, g);
  return n.applyMcpUpdate((r) => {
    c = "applied", m = void 0;
    let y = r.clients.find((S) => S.name === e.name);
    if (!y || y.config !== e.config && !I().areMcpConfigsEqual(y.config, e.config)) {
      if (e.type === "connected") (0, import_chunk_k449cc64.He)(e.name, y ? "applyConnectionResult: disposing orphaned connect (slot config changed mid-flight)" : "applyConnectionResult: disposing orphaned connect (slot removed mid-flight)"), m = () => Y(e);
      return c = "dropped", r;
    }
    if (h) {
      if ((0, import_chunk_k449cc64.He)(e.name, "applyConnectionResult: settlement superseded by an account switch \u2014 closed, not installed (the identity boundary owns the row)"), e.type === "connected") m = () => {
        I().detachAndCloseConnection(e).catch(() => {
        });
      };
      return c = "superseded", r;
    }
    let C = e.type !== "failed" && e.type !== "disabled" ? (0, import_chunk_bzyb60p0.zu)(e.name, e.config) : null;
    if (C !== "managed-policy" && !(0, import_chunk_bzyb60p0.VUe)(e) && (0, import_chunk_bzyb60p0.gi)(e.name) && e.type !== "disabled") {
      let S = e.type === "connected" && y.type === "connected" && y.client === e.client;
      if (e.type === "connected" && !S) (0, import_chunk_k449cc64.He)(e.name, "applyConnectionResult: disposing connect that settled after a disable"), m = () => Y(e);
      if (c = "refused", y.type === "disabled" || y.type === "connected" && (0, import_chunk_xcgcdx61.ji)(e)) return r;
      return V(r, { name: e.name, type: "disabled", config: y.config });
    }
    if (C) {
      if (e.type === "connected") (0, import_chunk_k449cc64.He)(e.name, `applyConnectionResult: disposing connect that settled after a ${C} deny`);
      return m = () => {
        if (e.type === "connected") Y(e);
        I().dropDiscoveryEntry(e.name, e.config).catch(() => {
        });
      }, c = "refused", V(r, { name: e.name, type: "failed", config: y.config, ...(0, import_chunk_bzyb60p0.iw)(C, e.name, e.config) });
    }
    if (!(0, import_chunk_xcgcdx61.Dgn)(y, e)) return c = "dropped", r;
    return { ...r, clients: r.clients.map((S) => S.name === e.name ? e : S), tools: (0, import_chunk_4smdap7r.bT)([...r.tools, ...f], (S) => S.name), commands: (0, import_chunk_4smdap7r.bT)([...r.commands, ...p], (S) => S.name) };
  }), m?.(), c;
}
function gUr(n, o, e = true) {
  let f = o.getClients();
  return Object.entries(n).filter(([p, g]) => {
    let m = f.find((c) => c.name === p);
    return m !== void 0 && ((0, import_chunk_bzyb60p0.aPn)(m) && !T1o(m) || e && (0, import_chunk_bzyb60p0.z_t)(m)) && I().areMcpConfigsEqual(m.config, g);
  });
}
function G9n(n) {
  let o = (e) => {
    let f = (0, import_chunk_qdcbcsg7.mt)().transientRetryPasses;
    for (let p of n) {
      let g = (f.get(p) ?? 0) + e;
      if (g > 0) f.set(p, g);
      else f.delete(p);
    }
  };
  return o(1), { [Symbol.dispose]: () => o(-1) };
}
async function z9n(n, o, e, f = (g) => R1o(o, g), p) {
  var _stack = [];
  try {
    let g = () => gUr(n, o);
    if (g().length === 0) return;
    const m = __using(_stack, G9n(Object.keys(n)));
    let c = (0, import_chunk_yrpmp1hk.hi)(), { signal: h } = o, r = performance.now(), y = 0, { delaysMs: C = A1o, jitter: S } = r5t(), w = C.map((_2) => hUr(_2, S));
    for (let [_2, L] of w.entries()) {
      let R = _2 === w.length - 1;
      if (await (0, import_chunk_5appeerh.K)(L, h), p !== void 0 && R) {
        let k = await p + w.reduce((j, E) => j + E, 0) + y;
        await (0, import_chunk_5appeerh.K)(Math.max(0, k - performance.now()), h);
      }
      if (h?.aborted) return;
      if ((0, import_chunk_yrpmp1hk.hi)() !== c) {
        (0, import_chunk_w578pjby.t)("[MCP] Retry: identity changed during backoff, stopping (these rows belong to the previous account)");
        return;
      }
      let M = gUr(n, o, R);
      if (M.length === 0) {
        if (g().length > 0) continue;
        (0, import_chunk_w578pjby.t)("[MCP] Retry: no server left to retry, stopping");
        return;
      }
      (0, import_chunk_w578pjby.t)(`[MCP] Retry attempt ${_2 + 1}: ${M.length} transiently-failed remote server(s)`);
      let v = [];
      for (let k of M) {
        if (!await I().discardMemoizedConnectResult(...k)) continue;
        let [j, E] = k, D = (0, import_chunk_bzyb60p0.zu)(j, E);
        if (D) {
          f({ client: { name: j, type: "failed", config: E, ...(0, import_chunk_bzyb60p0.iw)(D, j, E) }, tools: [], commands: [], attemptEpoch: c });
          continue;
        }
        v.push(k);
      }
      if (v.length === 0 || h?.aborted) continue;
      let x = 0, T = 0, P = performance.now(), B = Math.round(P - r);
      if (await I().getMcpToolsCommandsAndResources((k) => {
        if (!h?.aborted) {
          if (f(k), x1o(k.client, o, e), k.client.type === "connected") x++;
          else if ((0, import_chunk_bzyb60p0.har)(k.client)) T++;
        } else if (k.client.type === "connected") I().detachAndCloseConnection(k.client).catch(() => {
        });
      }, Object.fromEntries(v), e), y += performance.now() - P, !h?.aborted) (0, import_chunk_y53wbr8a.a)("tengu_mcp_connect_retry_attempt", { attempt: _2 + 1, delayMs: L, sincePassStartMs: B, retryable: M.length, dialed: v.length, recovered: x, stillRetryable: T });
      if (g().length === 0) {
        (0, import_chunk_w578pjby.t)("[MCP] Retry: no server left to retry, stopping");
        return;
      }
    }
    let O = g();
    if (O.length > 0) (0, import_chunk_w578pjby.t)(`[MCP] Retry: ${O.length} remote server(s) still failed after all retries: ${O.map(([_2]) => _2).join(", ")}`);
  } catch (_) {
    var _error = _, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
function x1o(n, o, e) {
  if (!(0, import_chunk_bzyb60p0.hdi)(n) || !C1o()) return;
  let { name: f } = n, p = (0, import_chunk_yrpmp1hk.hi)(), { signal: g } = o;
  (async () => {
    for (let m of A1o) {
      await (0, import_chunk_5appeerh.K)(hUr(m, ge), g);
      let c = o.getClients().find((r) => r.name === f);
      if (g?.aborted || (0, import_chunk_qdcbcsg7.mt)().isRunEnding?.() || (0, import_chunk_yrpmp1hk.hi)() !== p || !(0, import_chunk_2qx36shh.mUe)(c, n) || !(0, import_chunk_bzyb60p0.hdi)(c) || (0, import_chunk_85cn4tkc.Mbn)(c) || (0, import_chunk_bzyb60p0.gi)(f) || (0, import_chunk_bzyb60p0.zu)(f, c.config)) return;
      let { status: h } = await (0, import_chunk_y8s4362z.FJ)(c, (r, y) => o.applyMcpUpdate((C) => {
        let S = C.clients.find((O) => O.name === f), w = (0, import_chunk_2qx36shh.mUe)(S, c) ? (0, import_chunk_08m42etc.MIt)(S, y, c.config) : void 0;
        return w === void 0 ? C : (0, import_chunk_08m42etc.M9t)({ mcp: C }, f, w).mcp;
      }), e);
      if (h === "refreshed") {
        (0, import_chunk_w578pjby.t)(`[MCP] ${f} listed its tools when asked again`);
        return;
      }
    }
  })().catch((m) => (0, import_chunk_w578pjby.t)(`[MCP] Asking ${f} for its tools again at the start failed: ${(0, import_chunk_jv7av99m.d)(m)}`, { level: "warn" }));
}
async function W(n, o, e) {
  if (n) {
    Promise.resolve(o()).catch(() => {
    }), (0, import_chunk_w578pjby.t)(`[MCP] ${e} running fully async (nonblocking)`);
    return;
  }
  let f = o(), p = Date.now(), g = (0, import_chunk_98tkmkvx.Awe)(), m;
  if (Array.isArray(f)) m = f;
  else {
    let y, C = await Promise.race([f.catch((S) => ((0, import_chunk_k449cc64.i)(S), "failed")), new Promise((S) => {
      y = setTimeout((w) => w("deadline"), g, S);
    })]);
    if (clearTimeout(y), C === "deadline") {
      (0, import_chunk_w578pjby.t)(`[MCP] ${e} config fetch not ready after ${g}ms \u2014 proceeding; background connection continues`);
      return;
    }
    if (C === "failed") {
      (0, import_chunk_w578pjby.t)(`[MCP] ${e} batch failed to start \u2014 proceeding without waiting on it`);
      return;
    }
    m = C;
  }
  let c = Math.max(0, g - (Date.now() - p));
  if (m.length === 0) return;
  let h = te(e);
  if (!h) return;
  let r = await h.awaitEachWithDeadline(m, c);
  if (r > 0) (0, import_chunk_w578pjby.t)(`[MCP] ${e}: ${r}/${m.length} not ready after ${g}ms \u2014 proceeding; background connection continues`);
}
function _Bs(n, o, e, f = false) {
  if (!f) (0, import_chunk_sjqze7qg.yot)(), (0, import_chunk_sjqze7qg.Jfr)();
  let p = (0, import_chunk_yrpmp1hk.hi)(), g = (async () => {
    let { list: m, isWhole: c } = f ? await (0, import_chunk_sjqze7qg.VSi)(e) : { list: await (0, import_chunk_sjqze7qg.T5)(e), isWhole: true };
    if (!c) throw new import_chunk_jv7av99m.gr("The list of claude.ai connectors could not be read, so nothing changed.");
    if (!(0, import_chunk_yrpmp1hk.HY)(p)) return G("list fetch");
    let { allowed: h, blocked: r } = (0, import_chunk_bzyb60p0.SH)(m);
    if ((0, import_chunk_sjqze7qg.s5e)(), r.length > 0) (0, import_chunk_w578pjby.t)(`[MCP] claude.ai connectors blocked by enterprise policy on a refetch: ${r.join(", ")}`);
    let y = await he(n, o), C = Object.fromEntries([...Object.entries(y), ...Object.entries(oe()), ...n.getClients().filter((S) => S.config.scope !== "claudeai").map((S) => [S.name, S.config])]);
    return re({ claudeaiConfigs: h, regularMcpConfigs: C, state: n, deferConnect: false, storageV5: o, epoch: p, restorablePlugins: y, dropsOutdatedRows: f });
  })();
  return { mounted: g.then((m) => m === "superseded" ? m : "mounted"), settled: g.then((m) => m === "superseded" ? [] : Promise.all(m)).then(() => {
  }) };
}
function G(n) {
  return (0, import_chunk_w578pjby.t)(`[MCP] claude.ai connector list superseded by an account switch (${n}) \u2014 not mounting`), "superseded";
}
async function re(n) {
  if (!(0, import_chunk_yrpmp1hk.HY)(n.epoch)) return G("list fetch");
  let o = await ye(n);
  if (!(0, import_chunk_yrpmp1hk.HY)(n.epoch)) return G("dedup");
  if (n.dropsOutdatedRows) Se(o.servers, n.state);
  return [...Ce(n.restorablePlugins ?? {}, o.suppressedPlugins, n.state, n.storageV5), ...Me(o, n.state, n.deferConnect, n.storageV5)];
}
async function he(n, o) {
  let e = n.getSuppressedPluginServers();
  if (e.length === 0) return {};
  let { servers: f, warnings: p } = await (0, import_chunk_bzyb60p0.Ik)({}, { storageV5: o }), g = (0, import_chunk_bzyb60p0.zcr)(p), m = {}, c = /* @__PURE__ */ new Set();
  for (let h of e) {
    let r = f[h];
    if (r && r.pluginSource !== void 0) m[h] = r;
    else if (!g.has(h)) c.add(h);
  }
  if (c.size > 0) (0, import_chunk_w578pjby.t)(`[MCP] Dropping ${c.size} suppressed plugin server(s) whose plugin is no longer installed/enabled: ${[...c].join(", ")}`), n.applyMcpUpdate((h) => ({ ...h, suppressedPluginMcpServers: (h.suppressedPluginMcpServers ?? []).filter((r) => !c.has(r)) }));
  return m;
}
function Ce(n, o, e, f) {
  let p = new Set(e.getClients().map((r) => r.name)), g = oe(), m = /* @__PURE__ */ new Set(), c = {};
  for (let [r, y] of Object.entries(n)) {
    if (o.has(r)) continue;
    if (m.add(r), !p.has(r) && !Object.hasOwn(g, r) && y.heldForClaim !== true) c[r] = y;
  }
  if (m.size === 0) return [];
  e.applyMcpUpdate((r) => ({ ...r, suppressedPluginMcpServers: (r.suppressedPluginMcpServers ?? []).filter((y) => !m.has(y)) }));
  let h = Object.keys(c);
  if (h.length > 0) (0, import_chunk_w578pjby.t)(`[MCP] Restoring ${h.length} plugin server(s) no longer duplicated by claude.ai connectors: ${h.join(", ")}`);
  return U(c, "plugin-restore", e, false, f);
}
async function ye(n) {
  let { claudeaiConfigs: o, regularMcpConfigs: e, state: f } = n, p = (0, import_chunk_bzyb60p0.atn)(e), g = new Set(p);
  if (p.length > 0) (0, import_chunk_w578pjby.t)(`[MCP] Removing ${p.length} plugin server(s) that the organization's connector settings block: ${p.join(", ")}`);
  if (Object.keys(o).length > 0 || g.size > 0) {
    let c = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set();
    for (let C of Object.values(o)) {
      let S = (0, import_chunk_bzyb60p0.RP)(C);
      if (S) ((0, import_chunk_qenyadqg.pYr)(C) ? h : c).add(S);
    }
    let r = [], y;
    for (let [C, S] of Object.entries(e)) {
      if (!C.startsWith("plugin:")) continue;
      if (g.has(C)) continue;
      let w = (0, import_chunk_bzyb60p0.RP)(S);
      if (!w) continue;
      if (c.has(w)) g.add(C);
      else if (h.has(w)) {
        if (r.push(C), y ??= (0, import_chunk_qenyadqg.t$a)(), !y) g.add(C);
      }
    }
    if (r.length > 0) (0, import_chunk_y53wbr8a.a)("tengu_mcp_plugin_beside_ineligible_connector", { plugin_server_count: r.length, kept: y });
    if (y) (0, import_chunk_w578pjby.t)(`[MCP] Lazy dedup: keeping ${r.length} plugin server(s) whose only duplicate claude.ai connectors are ineligible: ${r.join(", ")}`);
    if (g.size > 0) {
      if (g.size > p.length) {
        let C = new Set(p);
        (0, import_chunk_w578pjby.t)(`[MCP] Lazy dedup: suppressing ${g.size - p.length} plugin server(s) that duplicate claude.ai connectors: ${[...g].filter((S) => !C.has(S)).join(", ")}`);
      }
      for (let C of f.getClients()) {
        if (!g.has(C.name) || !((0, import_chunk_xcgcdx61.ji)(C) || C.type === "pending")) continue;
        if (C.type === "connected") (0, import_chunk_gvzh3pxp.zWe)(C, void 0), I().clearServerCache(C.name, C.config).catch(() => {
        });
        else I().disposeServerConnectionDetached(C.name, C.config);
      }
      f.applyMcpUpdate((C) => {
        let { clients: S, tools: w, commands: O, resources: _ } = C;
        S = S.filter((R) => !g.has(R.name)), w = w.filter((R) => !R.mcpInfo || !g.has(R.mcpInfo.serverName));
        for (let R of g) O = (0, import_chunk_bzyb60p0.YUe)(O, R), _ = (0, import_chunk_bzyb60p0.lPn)(_, R);
        let L = [...(C.suppressedPluginMcpServers ?? []).filter((R) => !g.has(R)), ...g];
        return { ...C, clients: S, tools: w, commands: O, resources: _, suppressedPluginMcpServers: L };
      });
    }
  }
  let m = (0, import_chunk_865at33z.fI)(e, (c, h) => !h.startsWith("plugin:"));
  return { ...await (0, import_chunk_bzyb60p0.wSt)(o, m), suppressedPlugins: g };
}
function Se(n, o) {
  for (let e of o.getClients()) {
    let f = Object.hasOwn(n, e.name) && n[e.name];
    if (e.config.scope !== "claudeai" || f && e.type !== "needs-auth" && e.type !== "failed" && I().areMcpConfigsEqual(e.config, f)) continue;
    I().disposeServerConnectionDetached(e.name, e.config), o.applyMcpUpdate((p) => ({ ...V(p, e), clients: p.clients.filter((g) => g !== e) }));
  }
}
function Me({ servers: n, suppressed: o }, e, f, p) {
  e.applyMcpUpdate((c) => (0, import_chunk_bzyb60p0.Wcr)(c.suppressedClaudeAiConnectors ?? [], o) ? c : { ...c, suppressedClaudeAiConnectors: o });
  let g = e.getClients().flatMap((c) => c.config.scope === "claudeai" ? c.name : []), m = (0, import_chunk_y8kqnbqt.wE)(n, g);
  return U(m, "claudeai", e, f, p);
}
function V(n, o) {
  let e = (0, import_chunk_px0hhsq7.Rr)(o.name);
  return { ...n, clients: n.clients.map((f) => f.name === o.name ? o : f), tools: (0, import_chunk_08m42etc.V3)(n.tools, (f) => (0, import_chunk_px0hhsq7.Bu)(f, o.name, e)), commands: (0, import_chunk_08m42etc.V3)(n.commands, (f) => (0, import_chunk_bzyb60p0.ZE)(f, o.name)), resources: (0, import_chunk_y8kqnbqt.wE)(n.resources, o.name), resourceTemplates: (0, import_chunk_y8kqnbqt.wE)(n.resourceTemplates, o.name) };
}
function Y(n) {
  if ((0, import_chunk_sjqze7qg.U_)()) (0, import_chunk_gvzh3pxp.zWe)(n, void 0);
  n.cleanup().catch(() => {
  }), I().clearServerCache(n.name, n.config).catch(() => {
  });
}
async function Eha(n) {
  if (typeof n === "string" && n.startsWith("/claude_ai_")) await (0, import_chunk_53kayv4s.rKr)();
}
