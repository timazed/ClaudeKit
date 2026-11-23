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
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s, m2, _2) {
    return _2 = Error(m2), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s, _2;
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
var chunk_ttsnbbsg_exports = {};
__export(chunk_ttsnbbsg_exports, {
  $ri: () => $ri,
  Bri: () => Bri,
  J_e: () => J_e,
  N9o: () => N9o,
  Qqe: () => Qqe,
  Uri: () => Uri,
  hTe: () => hTe,
  wYr: () => wYr
});
module.exports = __toCommonJS(chunk_ttsnbbsg_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_g9n176jp = require("/$bunfs/root/chunk-g9n176jp.js");
var import_chunk_pmryp5f3 = require("/$bunfs/root/chunk-pmryp5f3.js");
var import_chunk_1ek4hhs6 = require("/$bunfs/root/chunk-1ek4hhs6.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_54j6k3fn = require("/$bunfs/root/chunk-54j6k3fn.js");
var import_chunk_ze4kt7fs = require("/$bunfs/root/chunk-ze4kt7fs.js");
var import_chunk_1hg0ytx8 = require("/$bunfs/root/chunk-1hg0ytx8.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_3zfyrdna = require("/$bunfs/root/chunk-3zfyrdna.js");
var import_chunk_vs7p9j3v = require("/$bunfs/root/chunk-vs7p9j3v.js");
var import_chunk_vhpt9t1j = require("/$bunfs/root/chunk-vhpt9t1j.js");
var import_chunk_7jczpc8b = require("/$bunfs/root/chunk-7jczpc8b.js");
var import_chunk_wx7ffn80 = require("/$bunfs/root/chunk-wx7ffn80.js");
var import_chunk_d3vfy4gs = require("/$bunfs/root/chunk-d3vfy4gs.js");
var import_chunk_gvzh3pxp = require("/$bunfs/root/chunk-gvzh3pxp.js");
var import_chunk_8v27xkv5 = require("/$bunfs/root/chunk-8v27xkv5.js");
var import_chunk_hpk6rak3 = require("/$bunfs/root/chunk-hpk6rak3.js");
var import_chunk_fpcs74d2 = require("/$bunfs/root/chunk-fpcs74d2.js");
var import_chunk_hy0sycbj = require("/$bunfs/root/chunk-hy0sycbj.js");
var import_chunk_7e1w6rv3 = require("/$bunfs/root/chunk-7e1w6rv3.js");
var import_chunk_prn6030k = require("/$bunfs/root/chunk-prn6030k.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
(0, import_chunk_adx6804h.B)();
var ae = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ server: (0, import_chunk_adx6804h.n)().optional().describe("Optional server name to filter resources by") })), ue = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ uri: (0, import_chunk_adx6804h.n)().describe("Resource URI"), name: (0, import_chunk_adx6804h.n)().describe("Resource name"), mimeType: (0, import_chunk_adx6804h.n)().optional().describe("MIME type of the resource"), description: (0, import_chunk_adx6804h.n)().optional().describe("Resource description"), server: (0, import_chunk_adx6804h.n)().describe("Server that provides this resource") })));
function ce(e) {
  let { hasMcpInboundDoor: r } = require("/$bunfs/root/chunk-febwqevx.js");
  if (!Array.isArray(e) || !r()) return e;
  return e.filter(import_chunk_ma3kja9f.T).map(({ uri: s, name: o, mimeType: a, description: y, server: S }) => ({ uri: q("", s), name: q("", o), ...typeof a === "string" && { mimeType: a }, ...typeof y === "string" && { description: y }, server: q("", S) }));
}
function q(e, r) {
  return typeof r === "string" ? r : e;
}
var hTe = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "b4ef6274-a04b-5f40-b275-b33db66bf7bc", isConcurrencySafe() {
  return true;
}, isReadOnly() {
  return true;
}, toAutoClassifierInput(e) {
  return e.server ?? "";
}, shouldDefer: true, name: import_chunk_hpk6rak3.xU, whenToUse: `When you are about to say what resources the configured MCP servers offer, or need a resource's URI to read with ${import_chunk_pmryp5f3.vu}, use it; it lists resources, not a server's tools.`, aliases: ["ListMcpResources"], searchHint: "list resources from connected MCP servers", backgrounding: "never", maxResultSizeChars: 1e5, async description() {
  return import_chunk_hpk6rak3.ybl;
}, async prompt() {
  return import_chunk_hpk6rak3.Sbl;
}, get inputSchema() {
  return ae();
}, get outputSchema() {
  return ue();
}, create(e) {
  return { async call(r, s) {
    let { signal: o, toolUseId: a } = s, y = e.turnMcpClients.filter((l) => !(0, import_chunk_ze4kt7fs.Lin)(l, e.agentId)), { server: S } = r, h = S ? (0, import_chunk_ze4kt7fs.wje)(y, S).map(import_chunk_ze4kt7fs.Vms) : (0, import_chunk_ze4kt7fs.cho)(y, import_chunk_hpk6rak3.xU, e.permissions(), e).map(import_chunk_ze4kt7fs.Vms);
    if (S && h.length === 0) throw new import_chunk_jv7av99m.A(`Server "${S}" not found. Available servers: ${y.map((l) => l.name).join(", ")}`, "MCP server not found");
    let v = (0, import_chunk_4smdap7r.U)(h, import_chunk_ze4kt7fs.ykt) === 1 ? a : void 0, f = 0, L = [], g = [], D = await Promise.all(h.map(async (l, R) => {
      let I = (0, import_chunk_ze4kt7fs.ykt)(l);
      if (I && !S) return f++, [];
      if (!(0, import_chunk_xcgcdx61.ji)(l) || !l.capabilities?.resources && !I) return [];
      let i = require("/$bunfs/root/chunk-4kvvnjdb.js").mcpClientModule(), z = (P) => i.ensureConnectedClient(l, { signal: o, context: "MCP resource listing", toolUseId: P });
      try {
        await (0, import_chunk_ze4kt7fs.Kms)(l, i);
        let P = await z(I ? v : void 0);
        if ((0, import_chunk_ze4kt7fs.Lin)(P, e.agentId)) return [];
        let E = await (0, import_chunk_5appeerh.Tn)(i.fetchResourcesForClient(P), o, () => new import_chunk_jv7av99m.Ie());
        if ((l.config.type === "claudeai-proxy" || l.config.type === "http" && (0, import_chunk_2mwshd9r.Yu)(l.config.url)) && i.getDiscoveryFetchError(E) !== void 0) {
          let w = await z(void 0);
          if ((0, import_chunk_ze4kt7fs.Lin)(w, e.agentId)) return [];
          if (w !== P) E = await (0, import_chunk_5appeerh.Tn)(i.fetchResourcesForClient(w), o, () => new import_chunk_jv7av99m.Ie());
        }
        let k = E.filter((w) => !(0, import_chunk_1hg0ytx8.JDn)(w));
        if (k.length < E.length) (0, import_chunk_w578pjby.t)(`MCP server "${l.name}": ${E.length - k.length} MCP Apps UI resource(s) left out of ${import_chunk_hpk6rak3.xU}'s list for the model (a ui:// URI, or text/html with profile=mcp-app); ${import_chunk_pmryp5f3.vu} can still read them by URI`);
        if (k.length > 0) g.push(l);
        return k;
      } catch (P) {
        if (!(0, import_chunk_jv7av99m.Fe)(P)) {
          if ((0, import_chunk_k449cc64.id)(l.name, (0, import_chunk_jv7av99m.d)(P)), I) L[R] = { error: P };
        }
        return [];
      }
    }));
    if (o.aborted) throw new import_chunk_jv7av99m.Ie();
    for (let l of g) (0, import_chunk_1ek4hhs6.K9e)((0, import_chunk_vhpt9t1j.Px)(l), e.agentId);
    let M = D.flat(), x = L.find((l) => l !== void 0);
    if (x && M.length === 0) throw x.error;
    let N = f === 1 ? "1 MCP server was not contacted by this listing, so its resources are" : `${f} MCP servers were not contacted by this listing, so their resources are`;
    return { data: M, ...f > 0 && { newMessages: [(0, import_chunk_bzyb60p0.Me)({ content: `${N} not shown above. To list one server's resources, call ${import_chunk_hpk6rak3.xU} with "server" set to a server's name (the <server> part of its mcp__<server>__<tool> tool names). That contacts the server, so do it only when its resources are actually needed. A server may turn out to have no resources.`, isMeta: true })] }, afterResultCommitted: () => {
      for (let l of g) (0, import_chunk_g9n176jp.b$n)(l.name, (0, import_chunk_vhpt9t1j.Px)(l), e.agentId);
    } };
  } };
}, renderToolUseMessage(e) {
  return e.server ? `List MCP resources from server "${e.server}"` : "List all MCP resources";
}, userFacingName: () => "listMcpResources", stripForCreation: ce, mapToolResultToToolResultBlockParam(e, r) {
  if (!e || e.length === 0) return { tool_use_id: r, type: "tool_result", content: import_chunk_hpk6rak3.Tbo };
  return { tool_use_id: r, type: "tool_result", content: (0, import_chunk_w578pjby._)(e) };
} });
(0, import_chunk_adx6804h.B)();
var H = { size: import_chunk_hy0sycbj.XRe, textToSanitize: 1048576 }, le = 16, me = 256, de = 65536;
function Y(e, r) {
  return { size: 0, maxSize: e, sixteenthsToSanitize: 0, maxSixteenthsToSanitize: 16 * r, nonAsciiUnits: 0, membersLeftOut: 0 };
}
function J(e = H.size, r = H.textToSanitize) {
  let s = Y(e, r);
  return (o) => V(o, s);
}
function $ri(e = H.size, r = H.textToSanitize) {
  let s = Y(e, r), o = Y(e, r), a = false;
  return (y) => {
    let { size: S, sixteenthsToSanitize: h, membersLeftOut: v } = s;
    if (a || !V(y, s)) return;
    let f = (0, import_chunk_kx2fp6pc.qM)(y);
    if (s.sixteenthsToSanitize === h && s.membersLeftOut === v) o.size += s.size - S, a = !F(o);
    else a = !V(f, o);
    return a ? void 0 : f;
  };
}
function wYr(e, r, s) {
  return `Skipped the last ${r} of ${s} ${e}: the listing is too large. Only about the first 16 MB of a listing is used (less if it has many small values), and only about 1 million characters that are costly to normalize: combining marks, full-width forms, emoji and the like anywhere, and a tool's or prompt's name that is not all ASCII. The server must list fewer or shorter ${e} to get them back.`;
}
function F(e) {
  return e.size <= e.maxSize && e.sixteenthsToSanitize <= e.maxSixteenthsToSanitize;
}
function V(e, r) {
  if (!F(r)) return false;
  return r.size += me, G(e, r, true);
}
function G(e, r, s = false, o = false) {
  if (r.size += le, typeof e === "string") te(e, r, o);
  else if (Array.isArray(e)) {
    for (let a of e) if (!G(a, r)) return false;
  } else if ((0, import_chunk_ma3kja9f.T)(e)) for (let a in e) {
    if (a === "__proto__") r.membersLeftOut++;
    if (te(a, r), !G(e[a], r, false, s && a === "name")) return false;
  }
  return F(r);
}
function te(e, r, s = false) {
  if (r.size += e.length, !F(r) || (0, import_chunk_kx2fp6pc.msa)(e)) return;
  fe(e, r, s);
}
function fe(e, r, s) {
  if (s) {
    r.sixteenthsToSanitize += 16 * e.length;
    return;
  }
  r.sixteenthsToSanitize += e.length;
  for (let o = 0; o < e.length && F(r); o++) {
    let a = e.charCodeAt(o);
    if (a > 127 && (r.nonAsciiUnits++ < de || pe()[a] === 1)) r.sixteenthsToSanitize += 15;
  }
}
var pe = (0, import_chunk_7e1w6rv3.ud)(() => {
  let e = /[\p{M}\u1100-\u11ff\ua960-\ua97f\ud7b0-\udfff]/u;
  return Uint8Array.from({ length: 65536 }, (r, s) => {
    let o = String.fromCharCode(s);
    return e.test(o) || (0, import_chunk_kx2fp6pc.N4t)(o) !== o ? 1 : 0;
  });
});
function W({ mode: e, modeBeforeRewrite: r, servedCall: s }) {
  let o = s === true;
  return ((0, import_chunk_xfj2cwfv.Jr)(e, o) || r !== void 0 && (0, import_chunk_xfj2cwfv.Jr)(r, o)) && ((0, import_chunk_bzyb60p0.bXo)() || (0, import_chunk_bzyb60p0.JL)());
}
function Q() {
  return require("/$bunfs/root/chunk-4kvvnjdb.js");
}
function he() {
  return Q().mcpSdkErrorClassificationModule();
}
function ge() {
  return Q().mcpClientModule();
}
function se() {
  return Q().mcpDirectoryReadModule();
}
var ye = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ server: (0, import_chunk_adx6804h.n)().describe("The MCP server name"), uri: (0, import_chunk_adx6804h.n)().describe("The directory resource URI to list") })), Se = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ resources: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ uri: (0, import_chunk_adx6804h.n)().describe("Child resource URI"), name: (0, import_chunk_adx6804h.n)().describe("Child resource name"), mimeType: (0, import_chunk_adx6804h.n)().optional().describe("Child MIME type") })).describe(`Direct children of the directory resource. Subdirectories appear with mimeType "${import_chunk_hy0sycbj.xWn}".`), error: (0, import_chunk_adx6804h.n)().optional().describe("Human-readable error when the server could not list the directory") })), Ce = "Directory listing is not enabled in this build.";
function ne(e) {
  if (!(0, import_chunk_fpcs74d2.z_)()) return Ce;
  {
    let r = e === void 0 ? void 0 : (0, import_chunk_fpcs74d2.h2t)(e);
    if (r !== void 0) return `This directory was not listed. ${r}`;
  }
  return;
}
var Qqe = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "8e41fb69-0208-5a60-b2b2-09d02c53e42a", isConcurrencySafe() {
  return true;
}, isReadOnly() {
  return true;
}, toAutoClassifierInput(e) {
  return `${e.server} ${e.uri}`;
}, suppressesAlwaysAllowRule() {
  return (0, import_chunk_bz1f2qnq.Nat)();
}, shouldDefer: true, name: import_chunk_pmryp5f3.b1, whenToUse: `When you are about to list what is inside a directory resource on an MCP server, use it; it lists one level per call and works only on servers that support directory listing; for a file resource use ${import_chunk_pmryp5f3.vu}.`, aliases: ["ReadMcpResourceDir"], searchHint: "list the children of an MCP directory resource", backgrounding: "never", maxResultSizeChars: 1e5, async description() {
  return import_chunk_pmryp5f3.Pkl;
}, async prompt() {
  return import_chunk_pmryp5f3.Okl;
}, get inputSchema() {
  return ye();
}, get outputSchema() {
  return Se();
}, create(e) {
  return { async checkPermissions(r) {
    let [s] = (0, import_chunk_ze4kt7fs.wje)(e.turnMcpClients, r.server);
    if (!(0, import_chunk_bz1f2qnq.Nat)() && !(s !== void 0 && (0, import_chunk_fpcs74d2.h2t)(s) !== void 0)) return { behavior: "allow", updatedInput: r };
    let o = ne(s);
    if (o !== void 0) return { behavior: "deny", message: o, decisionReason: { type: "other", reason: "directory listing off" } };
    if (s !== void 0) {
      let a = Z(r.uri, await (0, import_chunk_3zfyrdna.Kus)(s, e.messages(), e.inheritedMcpSkillMessages())), y = Z(r.uri, (0, import_chunk_3zfyrdna.Cwt)(s.name, e.messages(), e.inheritedMcpSkillMessages()));
      if (a !== void 0 && a.error === void 0 && (0, import_chunk_w578pjby._)(a) === (0, import_chunk_w578pjby._)(y) && !W(e.permissions())) return { behavior: "allow", updatedInput: r };
    }
    return { behavior: "passthrough", message: `${import_chunk_pmryp5f3.b1} requires permission.` };
  }, async call(r, s) {
    let { signal: o } = s, a = e.turnMcpClients, { server: y, uri: S } = r, h = (0, import_chunk_ze4kt7fs.zms)(a, y);
    (0, import_chunk_ze4kt7fs.u0e)(h, e.agentId);
    let v = ne(h);
    if (v !== void 0) return { data: { resources: [], error: v } };
    let f = (0, import_chunk_ze4kt7fs.ykt)(h);
    if (!f && !se().serverDeclaresDirectoryRead(h.capabilities)) return { data: { resources: [], error: `Server "${h.name}" does not support directory listing.` } };
    if (h.config.pluginSource) (0, import_chunk_54j6k3fn.ij)(h.config.pluginSource), (0, import_chunk_bzyb60p0.ZJ)(h.config.pluginSource, "mcp", { kind: "mcp-server", name: h.name });
    let L = (0, import_chunk_3zfyrdna.pNn)(h.name, S, e.messages(), e.inheritedMcpSkillMessages());
    if (L !== void 0) return { data: { resources: [], error: L } };
    (0, import_chunk_1ek4hhs6.K9e)((0, import_chunk_vhpt9t1j.Px)(h), e.agentId);
    let g = Z(S, (0, import_chunk_3zfyrdna.Cwt)(h.name, e.messages(), e.inheritedMcpSkillMessages()));
    if (g !== void 0) return { data: g, ...g.resources.length > 0 && { afterResultCommitted: () => (0, import_chunk_g9n176jp.b$n)(h.name, (0, import_chunk_vhpt9t1j.Px)(h), e.agentId) } };
    if (f) return { data: { resources: [], error: `Server "${h.name}" is not connected yet, so this tool cannot tell if it supports directory listing. First call ${import_chunk_hpk6rak3.xU} with "server" set to "${h.name}". Then call this tool again.` } };
    let D = await ge().ensureConnectedClient(h, { signal: o, context: "MCP resource directory read" });
    (0, import_chunk_ze4kt7fs.u0e)(D, e.agentId);
    let M;
    try {
      M = await se().readMcpDirectory(D, S, o);
    } catch (R) {
      if (o.aborted) throw new import_chunk_jv7av99m.Ie();
      let I = he();
      if (I.isMcpNotADirectoryError(R)) return (0, import_chunk_k449cc64.id)(h.name, `resources/directory/read returned ${I.getMcpErrorCode(R)} \u2014 not a directory`), { data: { resources: [], error: `Not a directory resource: ${S}. If it is a file resource, use ${import_chunk_pmryp5f3.vu} instead.` } };
      throw R;
    }
    let x = J(), N = J(), l = (await (0, import_chunk_vs7p9j3v.JWe)(M, (R) => {
      if (!x([R.uri, R.name, R.mimeType])) return [];
      let I = { uri: (0, import_chunk_kx2fp6pc.Og)(R.uri), name: (0, import_chunk_kx2fp6pc.qM)(R.name), mimeType: R.mimeType !== void 0 ? (0, import_chunk_kx2fp6pc.qM)(R.mimeType) : void 0 };
      return N([I.uri, I.name, I.mimeType]) ? [I] : [];
    })).flat();
    if (l.length < M.length) return (0, import_chunk_k449cc64.id)(h.name, wYr("directory entries", M.length, M.length)), { data: { resources: [], error: `The listing of ${S} is too large to read.` } };
    return { data: { resources: l }, ...l.length > 0 && { afterResultCommitted: () => (0, import_chunk_g9n176jp.b$n)(D.name, (0, import_chunk_vhpt9t1j.Px)(h), e.agentId) } };
  } };
}, renderToolUseMessage(e) {
  if (!e.uri || !e.server) return null;
  return `List directory resource "${e.uri}" from server "${e.server}"`;
}, userFacingName() {
  return "readMcpResourceDir";
}, mapToolResultToToolResultBlockParam(e, r) {
  if (e.error) return { tool_use_id: r, type: "tool_result", content: e.error };
  let s = e.resources.map((a) => `${a.name}${a.mimeType === import_chunk_hy0sycbj.xWn ? "/" : ""}`).join(`
`), o = e.resources.length > 0 ? `Directory listing (${e.resources.length} ${(0, import_chunk_7cfjrnwy.O)(e.resources.length, "entry", "entries")}):
${s}` : "Directory is empty.";
  return { tool_use_id: r, type: "tool_result", content: `${o}

${(0, import_chunk_w578pjby._)(e)}` };
} });
function Z(e, r) {
  if (r.length === 0) return;
  if (Buffer.byteLength(e) > import_chunk_3zfyrdna.FDe) return { resources: [], error: `An address of ${Buffer.byteLength(e)} bytes: This directory was not read, because its address is longer than ${import_chunk_3zfyrdna.FDe} bytes. While a skill from this server is loaded, this app reads a directory only at an address of ${import_chunk_3zfyrdna.FDe} bytes or less.${r.map((o) => (0, import_chunk_3zfyrdna.X$t)(o.skillName)).join("")}` };
  if (!r.some((o) => e === o.root || e.startsWith(`${o.root}/`))) {
    let o = r.filter((a) => (0, import_chunk_3zfyrdna.NRi)(`${e}/`, a.root));
    if (o.length > 0) return { resources: [], error: `${(0, import_chunk_4vsz8a99.PU)(e)}: This directory was not read, because its address begins with another spelling of the address of this skill. Write that part exactly as the skill writes it.${o.map((a) => (0, import_chunk_3zfyrdna.X$t)(a.skillName)).join("")}` };
    return (0, import_chunk_3zfyrdna.ifo)(e) ? void 0 : { resources: [], error: `${(0, import_chunk_4vsz8a99.PU)(e)}: This directory was not read, because its address is not a valid URL. While a skill from this server is loaded, this app reads a directory only at a valid URL. Write the address as the server or the skill gives it.${r.map((a) => (0, import_chunk_3zfyrdna.X$t)(a.skillName)).join("")}` };
  }
  let s = (0, import_chunk_3zfyrdna.Uil)(e, r);
  if (s === void 0) return { resources: [], error: `${(0, import_chunk_4vsz8a99.PU)(e)} is not a directory of any skill loaded from this server: no loaded skill lists a file under it. If it is a file, use ${import_chunk_pmryp5f3.vu} instead.` };
  return { resources: s.map((o) => ({ uri: (0, import_chunk_kx2fp6pc.Og)(o.uri), name: (0, import_chunk_kx2fp6pc.$c)(o.uri.slice(o.uri.lastIndexOf("/") + 1)), ...o.isDirectory && { mimeType: import_chunk_hy0sycbj.xWn } })) };
}
(0, import_chunk_adx6804h.B)();
function Uri(e) {
  if (e !== void 0) e.callsInProgress = (e.callsInProgress ?? 0) + 1;
}
function Bri(e) {
  if (e === void 0) return;
  if (e.callsInProgress = (e.callsInProgress ?? 1) - 1, e.callsInProgress === 0) {
    let r = e.onCallsIdle;
    e.onCallsIdle = void 0, r?.();
  }
}
function N9o(e) {
  Uri(e);
  let r = true;
  return { [Symbol.dispose]() {
    if (r) r = false, Bri(e);
  } };
}
function X() {
  return require("/$bunfs/root/chunk-4kvvnjdb.js");
}
function Re() {
  return X().mcpSdkErrorClassificationModule();
}
function K() {
  return X().mcpClientModule();
}
function be() {
  return X().mcpDirectoryReadModule();
}
var ve = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ server: (0, import_chunk_adx6804h.n)().describe("The MCP server name"), uri: (0, import_chunk_adx6804h.n)().describe("The resource URI to read") })), Te = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ contents: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ uri: (0, import_chunk_adx6804h.n)().describe("Resource URI"), mimeType: (0, import_chunk_adx6804h.n)().optional().describe("MIME type of the content"), text: (0, import_chunk_adx6804h.n)().optional().describe("Text content of the resource"), blobSavedTo: (0, import_chunk_adx6804h.n)().optional().describe("Path where binary blob content was saved") })), error: (0, import_chunk_adx6804h.n)().optional().describe("Human-readable error when the server could not read the resource") })), J_e = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "71b9d87b-3914-5d53-9a84-c5af6fbc6d68", isConcurrencySafe() {
  return true;
}, isReadOnly() {
  return true;
}, toAutoClassifierInput(e) {
  return `${e.server} ${e.uri}`;
}, suppressesAlwaysAllowRule() {
  return (0, import_chunk_bz1f2qnq.Nat)();
}, shouldDefer: true, name: import_chunk_pmryp5f3.vu, whenToUse: `When you are about to read the contents of one resource on an MCP server and you know the server name and the resource URI, use it; to find URIs use ${import_chunk_hpk6rak3.xU}, and for a directory resource use ${import_chunk_pmryp5f3.b1}.`, aliases: ["ReadMcpResource"], searchHint: "read a specific MCP resource by URI", backgrounding: "never", maxResultSizeChars: 1e5, async description() {
  return import_chunk_pmryp5f3.Ikl;
}, async prompt() {
  return import_chunk_pmryp5f3.Mkl;
}, get inputSchema() {
  return ve();
}, get outputSchema() {
  return Te();
}, create(e) {
  return { async checkPermissions(r) {
    let [s] = (0, import_chunk_ze4kt7fs.wje)(e.turnMcpClients, r.server), o = s === void 0 ? void 0 : (0, import_chunk_fpcs74d2.h2t)(s);
    if (s !== void 0 && o !== void 0) {
      let y = (0, import_chunk_3zfyrdna.mNn)(r.uri, (0, import_chunk_3zfyrdna.Cwt)(s.name, e.messages(), e.inheritedMcpSkillMessages()), false);
      if (y.case === "unlisted" && y.reason === "unlisted") return { behavior: "deny", message: `This file was not read. ${o}`, decisionReason: { type: "other", reason: "MCP skills of this server turned off" } };
    }
    if (!(0, import_chunk_bz1f2qnq.Nat)()) return { behavior: "allow", updatedInput: r };
    let a = s === void 0 ? [] : await (0, import_chunk_3zfyrdna.Kus)(s, e.messages(), e.inheritedMcpSkillMessages());
    if (s !== void 0 && (0, import_chunk_3zfyrdna.mNn)(r.uri, a, (0, import_chunk_fpcs74d2.RYe)(s)).case === "listed" && !W(e.permissions())) return { behavior: "allow", updatedInput: r };
    return { behavior: "passthrough", message: `${import_chunk_pmryp5f3.vu} requires permission.` };
  }, async call(r, s) {
    let { signal: o, toolUseId: a } = s, { turnMcpClients: y, storageV5: S } = e, { server: h, uri: v } = r, f = (0, import_chunk_ze4kt7fs.zms)(y, h);
    if ((0, import_chunk_ze4kt7fs.u0e)(f, e.agentId), f.config.pluginSource) (0, import_chunk_54j6k3fn.ij)(f.config.pluginSource), (0, import_chunk_bzyb60p0.ZJ)(f.config.pluginSource, "mcp", { kind: "mcp-server", name: f.name });
    let L = (0, import_chunk_3zfyrdna.pNn)(f.name, v, e.messages(), e.inheritedMcpSkillMessages());
    if (L !== void 0) return { data: { contents: [], error: L } };
    await (0, import_chunk_ze4kt7fs.Kms)(f, K()), (0, import_chunk_1ek4hhs6.K9e)((0, import_chunk_vhpt9t1j.Px)(f), e.agentId);
    let g = await K().ensureConnectedClient(f, { signal: o, context: "MCP resource read", toolUseId: (0, import_chunk_ze4kt7fs.ykt)(f) ? a : void 0 });
    if ((0, import_chunk_ze4kt7fs.u0e)(g, e.agentId), (0, import_chunk_ze4kt7fs.ykt)(f) && !g.capabilities?.resources) throw (0, import_chunk_ze4kt7fs.CMi)(f.name);
    let D = (0, import_chunk_3zfyrdna.Cwt)(g.name, e.messages(), e.inheritedMcpSkillMessages()), M = (0, import_chunk_3zfyrdna.mNn)(v, D, (0, import_chunk_fpcs74d2.RYe)(f)), x = async (i, z) => ({ contents: [], error: await (0, import_chunk_3zfyrdna.Fil)({ connected: (0, import_chunk_8v27xkv5.t5)(g, f.config), skills: i, uri: v, reason: z, signal: o }) });
    if (M.case === "unlisted") return { data: await x(M.skills, M.reason) };
    let N = (0, import_chunk_2mwshd9r.DOo)(g.config, s.toolUseId), l;
    try {
      l = await (0, import_chunk_gvzh3pxp._9e)(g, v, { signal: o }, N).catch(async (i) => {
        var _stack = [];
        try {
          if (N === void 0 || !(0, import_chunk_bzyb60p0.ZQt)(i) || s.parentMessage === void 0 || s.runEngine === void 0 || (0, import_chunk_prn6030k._b)(g.name) && (0, import_chunk_865at33z.uI)(g.config)) throw i;
          const z = __using(_stack, N9o(g.transportErrorState));
          let { parentMessage: P, timing: E } = s, k, w;
          await s.runEngine(({ toolUseContext: j, canUseTool: ee }) => {
            if (ee === void 0 || !K().ccrRetroactiveAskCanPrompt(j) || (0, import_chunk_f9x2f6cx.zS)() && (0, import_chunk_f9x2f6cx.zS)() !== "stdio" || !(0, import_chunk_865at33z.b)("tengu_mcp_proxy_needs_approval_retry", true)) throw i;
            return (0, import_chunk_bzyb60p0.PQr)({ toolUseContext: j, canUseTool: ee, tool: J_e, args: { server: g.name, uri: v }, parentMessage: P, toolUseId: N, fullyQualifiedName: import_chunk_pmryp5f3.vu, connector: g.name, error: i, signal: o, onAwaitingUserInput: (ie) => {
              if (ie) k = (0, import_chunk_wx7ffn80.MV)(), w = E?.mark("approval");
              else w?.(), k?.();
            } });
          }, {});
          try {
            let j = await (0, import_chunk_gvzh3pxp._9e)(g, v, { signal: o }, N);
            return (0, import_chunk_cqa9hrgx.u)("mcp_ccr_needs_approval"), j;
          } catch (j) {
            if (!o.aborted) (0, import_chunk_cqa9hrgx.m)("mcp_ccr_needs_approval", "retry_failed");
            throw j;
          }
        } catch (_2) {
          var _error = _2, _hasError = true;
        } finally {
          __callDispose(_stack, _error, _hasError);
        }
      });
    } catch (i) {
      if (o.aborted) throw new import_chunk_jv7av99m.Ie();
      let z = Re();
      if (z.isMcpMethodNotFoundError(i)) return (0, import_chunk_k449cc64.id)(f.name, "resources/read returned -32601 MethodNotFound \u2014 server advertises resources but does not implement reads"), { data: { contents: [], error: `Server "${f.name}" advertises resource support but does not implement resource reads.` } };
      if (z.isMcpResourceNotFoundError(i)) {
        if ((0, import_chunk_k449cc64.id)(f.name, `resources/read returned ${z.getMcpErrorCode(i)} \u2014 resource not found`), K().invalidateMcpResourceListCaches(g), M.case === "listed") return { data: await x(M.skills, "not_found") };
        let P = be().serverDeclaresDirectoryRead(g.capabilities) ? ` If the URI is a directory resource, use ${import_chunk_pmryp5f3.b1} instead.` : "";
        return { data: { contents: [], error: `Resource not found: ${v} \u2014 it may have been deleted or the URI is stale. Re-run ${import_chunk_hpk6rak3.xU} to refresh.${P}` } };
      }
      throw i;
    }
    let R = l.contents;
    if (M.case === "listed") {
      let i = (0, import_chunk_3zfyrdna.ufo)(l.contents, v, M.rows);
      if (!i.ok) return { data: await x(M.skills, i.reason) };
      (0, import_chunk_cqa9hrgx.u)("skill_mcp_read"), R = [i.item];
    } else {
      let i = (0, import_chunk_3zfyrdna.cfo)(l.contents, D);
      if (i.length > 0) return { data: await x(i, "other_address") };
    }
    let I = await Promise.all(R.map(async (i, z) => {
      if ("text" in i) return { uri: i.uri, mimeType: i.mimeType, text: i.text };
      if (!("blob" in i) || typeof i.blob !== "string") return { uri: i.uri, mimeType: i.mimeType };
      let P = `mcp-resource-${Date.now()}-${z}-${Math.random().toString(36).slice(2, 8)}`, E = Buffer.from(i.blob, "base64"), k = (0, import_chunk_d3vfy4gs.F9e)(E, i.mimeType), w = await (0, import_chunk_d3vfy4gs.lbe)(E, k, P, void 0, S);
      if ("error" in w) {
        if ((0, import_chunk_7jczpc8b.Kv)() !== void 0) return { uri: i.uri, mimeType: k, text: (0, import_chunk_d3vfy4gs.Ssn)(k, Buffer.byteLength(i.blob, "base64"), w.notSavedReason) };
        return { uri: i.uri, mimeType: k, text: `Binary content could not be saved to disk: ${w.error}` };
      }
      return { uri: i.uri, mimeType: k, blobSavedTo: w.filepath, text: (0, import_chunk_d3vfy4gs.ysn)(w.filepath, k, w.size, `[Resource from ${f.name} at ${i.uri}] `) };
    }));
    return { data: { contents: I }, ...I.length > 0 && { afterResultCommitted: () => (0, import_chunk_g9n176jp.b$n)(g.name, (0, import_chunk_vhpt9t1j.Px)(f), e.agentId) } };
  } };
}, renderToolUseMessage(e) {
  if (!e.uri || !e.server) return null;
  return `Read resource "${e.uri}" from server "${e.server}"`;
}, userFacingName() {
  return "readMcpResource";
}, mapToolResultToToolResultBlockParam(e, r) {
  if (e.error) return { tool_use_id: r, type: "tool_result", content: e.error };
  return { tool_use_id: r, type: "tool_result", content: (0, import_chunk_w578pjby._)(e) };
} });
