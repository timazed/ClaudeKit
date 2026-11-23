const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_racn22qq_exports = {};
__export(chunk_racn22qq_exports, {
  $Yr: () => $Yr,
  $or: () => $or,
  BYr: () => BYr,
  Bor: () => Bor,
  DY: () => DY,
  Dor: () => Dor,
  FYr: () => FYr,
  Fgt: () => Fgt,
  For: () => For,
  Hor: () => Hor,
  Ior: () => Ior,
  K9o: () => K9o,
  Lor: () => Lor,
  Mor: () => Mor,
  Ngt: () => Ngt,
  Nor: () => Nor,
  PO: () => PO,
  Q_e: () => Q_e,
  UYr: () => UYr,
  Ua: () => Ua,
  Uor: () => Uor,
  V9o: () => V9o,
  X9o: () => X9o,
  Xa: () => Xa,
  Xtt: () => Xtt,
  Y9o: () => Y9o,
  YL: () => YL,
  Ytt: () => Ytt,
  Z_e: () => Z_e,
  _Rn: () => _Rn,
  aJt: () => aJt,
  bie: () => bie,
  cJt: () => cJt,
  coi: () => coi,
  dJt: () => dJt,
  doi: () => doi,
  e4e: () => e4e,
  ef: () => ef,
  fJt: () => fJt,
  foi: () => foi,
  gRn: () => gRn,
  hRn: () => hRn,
  iJt: () => iJt,
  kW: () => kW,
  lJt: () => lJt,
  ld: () => ld,
  mRn: () => mRn,
  n4e: () => n4e,
  o0t: () => o0t,
  pJt: () => pJt,
  pRn: () => pRn,
  poi: () => poi,
  q9o: () => q9o,
  qtt: () => qtt,
  s0t: () => s0t,
  t4e: () => t4e,
  uJt: () => uJt,
  uoi: () => uoi,
  yRn: () => yRn,
  z9o: () => z9o
});
module.exports = __toCommonJS(chunk_racn22qq_exports);
var import_chunk_6d79247d = require("/$bunfs/root/chunk-6d79247d.js");
var import_chunk_51mmywgr = require("/$bunfs/root/chunk-51mmywgr.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var { create: ll, defineProperty: Ks, getOwnPropertyDescriptor: ul, getOwnPropertyNames: dl, getPrototypeOf: hl } = Object, ml = Object.prototype.hasOwnProperty, W = (e4, t) => () => (t || e4((t = { exports: {} }).exports, t), t.exports), di = (e4, t) => {
  let r = {};
  for (var s in e4) Ks(r, s, { get: e4[s], enumerable: true });
  if (t) Ks(r, Symbol.toStringTag, { value: "Module" });
  return r;
}, pl = (e4, t, r, s) => {
  if (t && typeof t === "object" || typeof t === "function") {
    for (var o = dl(t), a = 0, i = o.length, u; a < i; a++) if (u = o[a], !ml.call(e4, u) && u !== r) Ks(e4, u, { get: ((l) => t[l]).bind(null, u), enumerable: !(s = ul(t, u)) || s.enumerable });
  }
  return e4;
}, Gs = (e4, t, r) => (r = e4 != null ? ll(hl(e4)) : {}, pl(t || !e4 || !e4.__esModule ? Ks(r, "default", { value: e4, enumerable: true }) : r, e4));
(0, import_chunk_adx6804h.B)();
var Jt = "2025-11-25";
var iJt = [Jt, "2025-06-18", "2025-03-26", "2024-11-05", "2024-10-07"], Ior = "io.modelcontextprotocol/related-task", Ze = "io.modelcontextprotocol/protocolVersion", Bt = "io.modelcontextprotocol/clientInfo", qtt = "io.modelcontextprotocol/serverInfo", Q_e = "io.modelcontextprotocol/clientCapabilities", Ur = "io.modelcontextprotocol/subscriptionId", Wt = "io.modelcontextprotocol/logLevel";
var kt = "2.0";
var FYr = -32601;
function ct(e4) {
  if (e4.build !== void 0) e4.schema = e4.build(), e4.build = void 0;
  return e4.schema;
}
var Sl = { get: (e4, t, r) => Reflect.get(ct(e4), t, r), has: (e4, t) => t in ct(e4), set: (e4, t, r) => Reflect.set(ct(e4), t, r), defineProperty: (e4, t, r) => Reflect.defineProperty(ct(e4), t, r), deleteProperty: (e4, t) => Reflect.deleteProperty(ct(e4), t), getPrototypeOf: (e4) => Object.getPrototypeOf(ct(e4)), ownKeys: (e4) => Reflect.ownKeys(ct(e4)), preventExtensions: () => false, getOwnPropertyDescriptor(e4, t) {
  let r = Reflect.getOwnPropertyDescriptor(ct(e4), t);
  return r && { ...r, configurable: true };
} };
function A(e4) {
  return new Proxy({ build: e4, schema: void 0 }, Sl);
}
var lt = (0, import_chunk_adx6804h.xI)(() => (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.E)(), (0, import_chunk_adx6804h.P)(), (0, import_chunk_adx6804h.O_)(), (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), lt), (0, import_chunk_adx6804h.C)(lt)])), Se = A(() => (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), lt)), Za = A(() => (0, import_chunk_adx6804h.C)(lt)), Dr = A(() => (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.E)().int()])), Vr = A(() => (0, import_chunk_adx6804h.n)()), Js = A(() => (0, import_chunk_adx6804h.c)({ ttl: (0, import_chunk_adx6804h.E)().optional() })), Mor = A(() => (0, import_chunk_adx6804h.c)({ taskId: (0, import_chunk_adx6804h.n)() })), xr = A(() => (0, import_chunk_adx6804h.$t)({ progressToken: Dr.optional(), [Ior]: Mor.optional() })), Pe = A(() => (0, import_chunk_adx6804h.c)({ _meta: xr.optional() })), It = A(() => Pe.extend({ task: Js.optional() })), _e = A(() => (0, import_chunk_adx6804h.c)({ method: (0, import_chunk_adx6804h.n)(), params: Pe.loose().optional() })), Ie = A(() => (0, import_chunk_adx6804h.c)({ _meta: xr.optional() })), qe = A(() => (0, import_chunk_adx6804h.c)({ method: (0, import_chunk_adx6804h.n)(), params: Ie.loose().optional() })), Fr = A(() => (0, import_chunk_adx6804h.$t)({ get [qtt]() {
  return aJt.optional().catch(void 0);
} })), kW = A(() => (0, import_chunk_adx6804h.$t)({ _meta: Fr.optional() })), ut = A(() => (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.E)().int()])), Bs = A(() => (0, import_chunk_adx6804h.c)({ jsonrpc: (0, import_chunk_adx6804h.v)(kt), id: ut, ..._e.shape }).strict()), Ws = A(() => (0, import_chunk_adx6804h.c)({ jsonrpc: (0, import_chunk_adx6804h.v)(kt), ...qe.shape }).strict()), Yt = A(() => (0, import_chunk_adx6804h.c)({ jsonrpc: (0, import_chunk_adx6804h.v)(kt), id: ut, result: kW }).strict()), Hr = A(() => (0, import_chunk_adx6804h.c)({ jsonrpc: (0, import_chunk_adx6804h.v)(kt), id: ut.optional(), error: (0, import_chunk_adx6804h.c)({ code: (0, import_chunk_adx6804h.E)().int(), message: (0, import_chunk_adx6804h.n)(), data: (0, import_chunk_adx6804h.ie)().optional() }) }).strict()), o0t = A(() => (0, import_chunk_adx6804h.We)([Bs, Ws, Yt, Hr])), Qa = A(() => (0, import_chunk_adx6804h.We)([Yt, Hr])), Kr = A(() => kW.strict()), Ys = A(() => Ie.extend({ requestId: ut.optional(), reason: (0, import_chunk_adx6804h.n)().optional() })), Gr = A(() => qe.extend({ method: (0, import_chunk_adx6804h.v)("notifications/cancelled"), params: Ys })), Xs = A(() => (0, import_chunk_adx6804h.c)({ src: (0, import_chunk_adx6804h.n)(), mimeType: (0, import_chunk_adx6804h.n)().optional(), sizes: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), theme: (0, import_chunk_adx6804h.F)(["light", "dark"]).optional() })), dt = A(() => (0, import_chunk_adx6804h.c)({ icons: (0, import_chunk_adx6804h.C)(Xs).optional() })), Xe = A(() => (0, import_chunk_adx6804h.c)({ name: (0, import_chunk_adx6804h.n)(), title: (0, import_chunk_adx6804h.n)().optional() })), aJt = A(() => Xe.extend({ ...Xe.shape, ...dt.shape, version: (0, import_chunk_adx6804h.n)(), websiteUrl: (0, import_chunk_adx6804h.n)().optional(), description: (0, import_chunk_adx6804h.n)().optional() })), _l = A(() => (0, import_chunk_adx6804h.Mge)((0, import_chunk_adx6804h.c)({ applyDefaults: (0, import_chunk_adx6804h.P)().optional() }), Se)), yl = (0, import_chunk_adx6804h.bi)((e4) => {
  if (e4 && typeof e4 === "object" && !Array.isArray(e4) && Object.keys(e4).length === 0) return { form: {} };
  return e4;
}, (0, import_chunk_adx6804h.Mge)((0, import_chunk_adx6804h.c)({ form: _l.optional(), url: Se.optional() }), Se.optional())), Zs = A(() => (0, import_chunk_adx6804h.$t)({ list: Se.optional(), cancel: Se.optional(), requests: (0, import_chunk_adx6804h.$t)({ sampling: (0, import_chunk_adx6804h.$t)({ createMessage: Se.optional() }).optional(), elicitation: (0, import_chunk_adx6804h.$t)({ create: Se.optional() }).optional() }).optional() })), Qs = A(() => (0, import_chunk_adx6804h.$t)({ list: Se.optional(), cancel: Se.optional(), requests: (0, import_chunk_adx6804h.$t)({ tools: (0, import_chunk_adx6804h.$t)({ call: Se.optional() }).optional() }).optional() })), eo = A(() => (0, import_chunk_adx6804h.c)({ experimental: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), Se).optional(), sampling: (0, import_chunk_adx6804h.c)({ context: Se.optional(), tools: Se.optional() }).optional(), elicitation: yl.optional(), roots: (0, import_chunk_adx6804h.c)({ listChanged: (0, import_chunk_adx6804h.P)().optional() }).optional(), tasks: Zs.optional(), extensions: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), Se).optional() })), to = A(() => Pe.extend({ protocolVersion: (0, import_chunk_adx6804h.n)(), capabilities: eo, clientInfo: aJt })), Jr = A(() => _e.extend({ method: (0, import_chunk_adx6804h.v)("initialize"), params: to })), pRn = A(() => (0, import_chunk_adx6804h.c)({ experimental: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), Se).optional(), logging: Se.optional(), completions: Se.optional(), prompts: (0, import_chunk_adx6804h.c)({ listChanged: (0, import_chunk_adx6804h.P)().optional() }).optional(), resources: (0, import_chunk_adx6804h.c)({ subscribe: (0, import_chunk_adx6804h.P)().optional(), listChanged: (0, import_chunk_adx6804h.P)().optional() }).optional(), tools: (0, import_chunk_adx6804h.c)({ listChanged: (0, import_chunk_adx6804h.P)().optional() }).optional(), tasks: Qs.optional(), extensions: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), Se).optional() })), lJt = A(() => kW.extend({ protocolVersion: (0, import_chunk_adx6804h.n)(), capabilities: pRn, serverInfo: aJt, instructions: (0, import_chunk_adx6804h.n)().optional() })), Br = A(() => qe.extend({ method: (0, import_chunk_adx6804h.v)("notifications/initialized"), params: Ie.optional() })), ro = A(() => _e.extend({ method: (0, import_chunk_adx6804h.v)("server/discover"), params: Pe.optional() })), Ytt = A(() => kW.extend({ supportedVersions: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), capabilities: pRn, instructions: (0, import_chunk_adx6804h.n)().optional() })), Wr = A(() => _e.extend({ method: (0, import_chunk_adx6804h.v)("ping"), params: Pe.optional() })), so = A(() => (0, import_chunk_adx6804h.c)({ progress: (0, import_chunk_adx6804h.E)(), total: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.E)()), message: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.n)()) })), oo = A(() => (0, import_chunk_adx6804h.c)({ ...Ie.shape, ...so.shape, progressToken: Dr })), Yr = A(() => qe.extend({ method: (0, import_chunk_adx6804h.v)("notifications/progress"), params: oo })), ao = A(() => Pe.extend({ cursor: Vr.optional() })), ht = A(() => _e.extend({ params: ao.optional() })), mt = A(() => kW.extend({ nextCursor: Vr.optional() })), Xr = A(() => (0, import_chunk_adx6804h.c)({ uri: (0, import_chunk_adx6804h.n)(), mimeType: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.n)()), _meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), Zr = A(() => Xr.extend({ text: (0, import_chunk_adx6804h.n)() })), en = (0, import_chunk_adx6804h.n)().refine((e4) => {
  try {
    return atob(e4), true;
  } catch {
    return false;
  }
}, { message: "Invalid Base64 string" }), Qr = A(() => Xr.extend({ blob: en })), pt = A(() => (0, import_chunk_adx6804h.F)(["user", "assistant"])), Qe = A(() => (0, import_chunk_adx6804h.c)({ audience: (0, import_chunk_adx6804h.C)(pt).optional(), priority: (0, import_chunk_adx6804h.E)().min(0).max(1).optional(), lastModified: (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.aC)({ offset: true }), (0, import_chunk_adx6804h.aC)({ offset: true, precision: -1 })]).optional() })), mRn = A(() => (0, import_chunk_adx6804h.c)({ ...Xe.shape, ...dt.shape, uri: (0, import_chunk_adx6804h.n)(), description: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.n)()), mimeType: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.n)()), size: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.E)()), annotations: Qe.optional(), _meta: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.$t)({})) })), Hor = A(() => (0, import_chunk_adx6804h.c)({ ...Xe.shape, ...dt.shape, uriTemplate: (0, import_chunk_adx6804h.n)(), description: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.n)()), mimeType: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.n)()), annotations: Qe.optional(), _meta: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.$t)({})) })), no = A(() => ht.extend({ method: (0, import_chunk_adx6804h.v)("resources/list") })), s0t = A(() => mt.extend({ resources: (0, import_chunk_adx6804h.C)(mRn) })), io = A(() => ht.extend({ method: (0, import_chunk_adx6804h.v)("resources/templates/list") })), Dor = A(() => mt.extend({ resourceTemplates: (0, import_chunk_adx6804h.C)(Hor) })), Xt = A(() => Pe.extend({ uri: (0, import_chunk_adx6804h.n)() })), co = Xt, lo = A(() => _e.extend({ method: (0, import_chunk_adx6804h.v)("resources/read"), params: co })), uo = A(() => kW.extend({ contents: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.We)([Zr, Qr])) })), ho = A(() => qe.extend({ method: (0, import_chunk_adx6804h.v)("notifications/resources/list_changed"), params: Ie.optional() })), mo = Xt, po = A(() => _e.extend({ method: (0, import_chunk_adx6804h.v)("resources/subscribe"), params: mo })), fo = Xt, go = A(() => _e.extend({ method: (0, import_chunk_adx6804h.v)("resources/unsubscribe"), params: fo })), es = A(() => (0, import_chunk_adx6804h.c)({ toolsListChanged: (0, import_chunk_adx6804h.P)().optional(), promptsListChanged: (0, import_chunk_adx6804h.P)().optional(), resourcesListChanged: (0, import_chunk_adx6804h.P)().optional(), resourceSubscriptions: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional() })), So = A(() => Pe.extend({ notifications: es })), _o = A(() => _e.extend({ method: (0, import_chunk_adx6804h.v)("subscriptions/listen"), params: So })), yo = A(() => Ie.extend({ notifications: es })), vo = A(() => qe.extend({ method: (0, import_chunk_adx6804h.v)("notifications/subscriptions/acknowledged"), params: yo })), bo = A(() => Fr.extend({ [Ur]: ut })), Ro = A(() => kW.extend({ _meta: bo })), zo = A(() => Ie.extend({ uri: (0, import_chunk_adx6804h.n)() })), wo = A(() => qe.extend({ method: (0, import_chunk_adx6804h.v)("notifications/resources/updated"), params: zo })), Eo = A(() => (0, import_chunk_adx6804h.c)({ name: (0, import_chunk_adx6804h.n)(), description: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.n)()), required: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.P)()) })), Lor = A(() => (0, import_chunk_adx6804h.c)({ ...Xe.shape, ...dt.shape, description: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.n)()), arguments: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.C)(Eo)), _meta: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.$t)({})) })), $o = A(() => ht.extend({ method: (0, import_chunk_adx6804h.v)("prompts/list") })), Nor = A(() => mt.extend({ prompts: (0, import_chunk_adx6804h.C)(Lor) })), Po = A(() => Pe.extend({ name: (0, import_chunk_adx6804h.n)(), arguments: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)()).optional() })), To = A(() => _e.extend({ method: (0, import_chunk_adx6804h.v)("prompts/get"), params: Po })), Zt = A(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("text"), text: (0, import_chunk_adx6804h.n)(), annotations: Qe.optional(), _meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), Qt = A(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("image"), data: en, mimeType: (0, import_chunk_adx6804h.n)(), annotations: Qe.optional(), _meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), er = A(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("audio"), data: en, mimeType: (0, import_chunk_adx6804h.n)(), annotations: Qe.optional(), _meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), Co = A(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("tool_use"), name: (0, import_chunk_adx6804h.n)(), id: (0, import_chunk_adx6804h.n)(), input: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()), _meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), ko = A(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("resource"), resource: (0, import_chunk_adx6804h.We)([Zr, Qr]), annotations: Qe.optional(), _meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), Io = A(() => mRn.extend({ type: (0, import_chunk_adx6804h.v)("resource_link") })), tr = A(() => (0, import_chunk_adx6804h.We)([Zt, Qt, er, Io, ko])), qo = A(() => (0, import_chunk_adx6804h.c)({ role: pt, content: tr })), Oo = A(() => kW.extend({ description: (0, import_chunk_adx6804h.n)().optional(), messages: (0, import_chunk_adx6804h.C)(qo) })), No = A(() => qe.extend({ method: (0, import_chunk_adx6804h.v)("notifications/prompts/list_changed"), params: Ie.optional() })), Mo = A(() => (0, import_chunk_adx6804h.c)({ title: (0, import_chunk_adx6804h.n)().optional(), readOnlyHint: (0, import_chunk_adx6804h.P)().optional(), destructiveHint: (0, import_chunk_adx6804h.P)().optional(), idempotentHint: (0, import_chunk_adx6804h.P)().optional(), openWorldHint: (0, import_chunk_adx6804h.P)().optional() })), jo = A(() => (0, import_chunk_adx6804h.c)({ taskSupport: (0, import_chunk_adx6804h.F)(["required", "optional", "forbidden"]).optional() })), Xtt = A(() => (0, import_chunk_adx6804h.c)({ ...Xe.shape, ...dt.shape, description: (0, import_chunk_adx6804h.n)().optional(), inputSchema: (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("object"), properties: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), lt).optional(), required: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional() }).catchall((0, import_chunk_adx6804h.ie)()), outputSchema: (0, import_chunk_adx6804h.$t)({ $schema: (0, import_chunk_adx6804h.n)().optional() }).optional(), annotations: Mo.optional(), execution: jo.optional(), _meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), Ao = A(() => ht.extend({ method: (0, import_chunk_adx6804h.v)("tools/list") })), Ngt = A(() => mt.extend({ tools: (0, import_chunk_adx6804h.C)(Xtt) })), ts = A(() => kW.extend({ content: (0, import_chunk_adx6804h.C)(tr).default([]), structuredContent: (0, import_chunk_adx6804h.ie)().optional(), isError: (0, import_chunk_adx6804h.P)().optional() })), hRn = A(() => ts.or(kW.extend({ toolResult: (0, import_chunk_adx6804h.ie)() }))), Lo = A(() => It.extend({ name: (0, import_chunk_adx6804h.n)(), arguments: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), Uo = A(() => _e.extend({ method: (0, import_chunk_adx6804h.v)("tools/call"), params: Lo })), Do = A(() => qe.extend({ method: (0, import_chunk_adx6804h.v)("notifications/tools/list_changed"), params: Ie.optional() })), rs = A(() => (0, import_chunk_adx6804h.c)({ autoRefresh: (0, import_chunk_adx6804h.P)().default(true), debounceMs: (0, import_chunk_adx6804h.E)().int().nonnegative().default(300) })), ss = A(() => (0, import_chunk_adx6804h.F)(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"])), Vo = A(() => Pe.extend({ level: ss })), xo = A(() => _e.extend({ method: (0, import_chunk_adx6804h.v)("logging/setLevel"), params: Vo })), Fo = A(() => Ie.extend({ level: ss, logger: (0, import_chunk_adx6804h.n)().optional(), data: (0, import_chunk_adx6804h.ie)() })), Ho = A(() => qe.extend({ method: (0, import_chunk_adx6804h.v)("notifications/message"), params: Fo })), Ko = A(() => (0, import_chunk_adx6804h.c)({ name: (0, import_chunk_adx6804h.n)().optional() })), Go = A(() => (0, import_chunk_adx6804h.c)({ hints: (0, import_chunk_adx6804h.C)(Ko).optional(), costPriority: (0, import_chunk_adx6804h.E)().min(0).max(1).optional(), speedPriority: (0, import_chunk_adx6804h.E)().min(0).max(1).optional(), intelligencePriority: (0, import_chunk_adx6804h.E)().min(0).max(1).optional() })), Jo = A(() => (0, import_chunk_adx6804h.c)({ mode: (0, import_chunk_adx6804h.F)(["auto", "required", "none"]).optional() })), Bo = A(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("tool_result"), toolUseId: (0, import_chunk_adx6804h.n)().describe("The unique identifier for the corresponding tool call."), content: (0, import_chunk_adx6804h.C)(tr), structuredContent: (0, import_chunk_adx6804h.ie)().optional(), isError: (0, import_chunk_adx6804h.P)().optional(), _meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), Wo = A(() => (0, import_chunk_adx6804h.zn)("type", [Zt, Qt, er])), Ct = A(() => (0, import_chunk_adx6804h.zn)("type", [Zt, Qt, er, Co, Bo])), Yo = A(() => (0, import_chunk_adx6804h.c)({ role: pt, content: (0, import_chunk_adx6804h.We)([Ct, (0, import_chunk_adx6804h.C)(Ct)]), _meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), Xo = A(() => It.extend({ messages: (0, import_chunk_adx6804h.C)(Yo), modelPreferences: Go.optional(), systemPrompt: (0, import_chunk_adx6804h.n)().optional(), includeContext: (0, import_chunk_adx6804h.F)(["none", "thisServer", "allServers"]).optional(), temperature: (0, import_chunk_adx6804h.E)().optional(), maxTokens: (0, import_chunk_adx6804h.E)().int(), stopSequences: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), metadata: Se.optional(), tools: (0, import_chunk_adx6804h.C)(Xtt).optional(), toolChoice: Jo.optional() })), Zo = A(() => _e.extend({ method: (0, import_chunk_adx6804h.v)("sampling/createMessage"), params: Xo })), Qo = A(() => kW.extend({ model: (0, import_chunk_adx6804h.n)(), stopReason: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.F)(["endTurn", "stopSequence", "maxTokens"]).or((0, import_chunk_adx6804h.n)())), role: pt, content: Wo })), ea = A(() => kW.extend({ model: (0, import_chunk_adx6804h.n)(), stopReason: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.F)(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or((0, import_chunk_adx6804h.n)())), role: pt, content: (0, import_chunk_adx6804h.We)([Ct, (0, import_chunk_adx6804h.C)(Ct)]) })), os = A(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("boolean"), title: (0, import_chunk_adx6804h.n)().optional(), description: (0, import_chunk_adx6804h.n)().optional(), default: (0, import_chunk_adx6804h.P)().optional() })), rr = A(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("string"), title: (0, import_chunk_adx6804h.n)().optional(), description: (0, import_chunk_adx6804h.n)().optional(), minLength: (0, import_chunk_adx6804h.E)().optional(), maxLength: (0, import_chunk_adx6804h.E)().optional(), format: (0, import_chunk_adx6804h.F)(["email", "uri", "date", "date-time"]).optional(), default: (0, import_chunk_adx6804h.n)().optional() })), sr = A(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.F)(["number", "integer"]), title: (0, import_chunk_adx6804h.n)().optional(), description: (0, import_chunk_adx6804h.n)().optional(), minimum: (0, import_chunk_adx6804h.E)().optional(), maximum: (0, import_chunk_adx6804h.E)().optional(), default: (0, import_chunk_adx6804h.E)().optional() })), as = A(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("string"), title: (0, import_chunk_adx6804h.n)().optional(), description: (0, import_chunk_adx6804h.n)().optional(), enum: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), default: (0, import_chunk_adx6804h.n)().optional() })), ns = A(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("string"), title: (0, import_chunk_adx6804h.n)().optional(), description: (0, import_chunk_adx6804h.n)().optional(), oneOf: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ const: (0, import_chunk_adx6804h.n)(), title: (0, import_chunk_adx6804h.n)() })), default: (0, import_chunk_adx6804h.n)().optional() })), is = A(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("string"), title: (0, import_chunk_adx6804h.n)().optional(), description: (0, import_chunk_adx6804h.n)().optional(), enum: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), enumNames: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), default: (0, import_chunk_adx6804h.n)().optional() })), ta = A(() => (0, import_chunk_adx6804h.We)([as, ns])), cs = A(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("array"), title: (0, import_chunk_adx6804h.n)().optional(), description: (0, import_chunk_adx6804h.n)().optional(), minItems: (0, import_chunk_adx6804h.E)().optional(), maxItems: (0, import_chunk_adx6804h.E)().optional(), items: (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("string"), enum: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()) }), default: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional() })), ls = A(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("array"), title: (0, import_chunk_adx6804h.n)().optional(), description: (0, import_chunk_adx6804h.n)().optional(), minItems: (0, import_chunk_adx6804h.E)().optional(), maxItems: (0, import_chunk_adx6804h.E)().optional(), items: (0, import_chunk_adx6804h.c)({ anyOf: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ const: (0, import_chunk_adx6804h.n)(), title: (0, import_chunk_adx6804h.n)() })) }), default: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional() })), ra = A(() => (0, import_chunk_adx6804h.We)([cs, ls])), sa = A(() => (0, import_chunk_adx6804h.We)([is, ta, ra])), us = A(() => (0, import_chunk_adx6804h.We)([sa, os, rr, sr])), or = A(() => It.extend({ mode: (0, import_chunk_adx6804h.v)("form").optional(), message: (0, import_chunk_adx6804h.n)(), requestedSchema: (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("object"), properties: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), us), required: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional() }).catchall((0, import_chunk_adx6804h.ie)()) })), gRn = A(() => It.extend({ mode: (0, import_chunk_adx6804h.v)("url"), message: (0, import_chunk_adx6804h.n)(), elicitationId: (0, import_chunk_adx6804h.n)(), url: (0, import_chunk_adx6804h.n)().url() })), For = A(() => (0, import_chunk_adx6804h.We)([or, gRn])), oa = A(() => _e.extend({ method: (0, import_chunk_adx6804h.v)("elicitation/create"), params: For })), aa = A(() => Ie.extend({ elicitationId: (0, import_chunk_adx6804h.n)() })), na = A(() => qe.extend({ method: (0, import_chunk_adx6804h.v)("notifications/elicitation/complete"), params: aa })), ia = A(() => kW.extend({ action: (0, import_chunk_adx6804h.F)(["accept", "decline", "cancel"]), content: (0, import_chunk_adx6804h.bi)((e4) => e4 === null ? void 0 : e4, (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.E)(), (0, import_chunk_adx6804h.P)(), (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)())])).optional()) })), ca = A(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("ref/resource"), uri: (0, import_chunk_adx6804h.n)() })), la = A(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("ref/prompt"), name: (0, import_chunk_adx6804h.n)() })), ua = A(() => Pe.extend({ ref: (0, import_chunk_adx6804h.We)([la, ca]), argument: (0, import_chunk_adx6804h.c)({ name: (0, import_chunk_adx6804h.n)(), value: (0, import_chunk_adx6804h.n)() }), context: (0, import_chunk_adx6804h.c)({ arguments: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)()).optional() }).optional() })), da = A(() => _e.extend({ method: (0, import_chunk_adx6804h.v)("completion/complete"), params: ua })), ha = A(() => kW.extend({ completion: (0, import_chunk_adx6804h.$t)({ values: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).max(100), total: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.E)().int()), hasMore: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.P)()) }) })), ma = A(() => (0, import_chunk_adx6804h.c)({ uri: (0, import_chunk_adx6804h.n)().startsWith("file://"), name: (0, import_chunk_adx6804h.n)().optional(), _meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), pa = A(() => _e.extend({ method: (0, import_chunk_adx6804h.v)("roots/list"), params: Pe.optional() })), fa = A(() => kW.extend({ roots: (0, import_chunk_adx6804h.C)(ma) })), ga = A(() => qe.extend({ method: (0, import_chunk_adx6804h.v)("notifications/roots/list_changed"), params: Ie.optional() })), tn = A(() => (0, import_chunk_adx6804h.$t)({ ttl: (0, import_chunk_adx6804h.E)().optional(), pollInterval: (0, import_chunk_adx6804h.E)().optional() })), Sa = A(() => (0, import_chunk_adx6804h.F)(["working", "input_required", "completed", "failed", "cancelled"])), ft = A(() => (0, import_chunk_adx6804h.c)({ taskId: (0, import_chunk_adx6804h.n)(), status: Sa, ttl: (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.E)(), (0, import_chunk_adx6804h.O_)()]), createdAt: (0, import_chunk_adx6804h.n)(), lastUpdatedAt: (0, import_chunk_adx6804h.n)(), pollInterval: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.E)()), statusMessage: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.n)()) })), rn = A(() => kW.extend({ task: ft })), _a = A(() => Ie.merge(ft)), sn = A(() => qe.extend({ method: (0, import_chunk_adx6804h.v)("notifications/tasks/status"), params: _a })), on = A(() => _e.extend({ method: (0, import_chunk_adx6804h.v)("tasks/get"), params: Pe.extend({ taskId: (0, import_chunk_adx6804h.n)() }) })), an = A(() => kW.merge(ft)), nn = A(() => _e.extend({ method: (0, import_chunk_adx6804h.v)("tasks/result"), params: Pe.extend({ taskId: (0, import_chunk_adx6804h.n)() }) })), cn = A(() => kW.loose()), ln = A(() => ht.extend({ method: (0, import_chunk_adx6804h.v)("tasks/list") })), un = A(() => mt.extend({ tasks: (0, import_chunk_adx6804h.C)(ft) })), dn = A(() => _e.extend({ method: (0, import_chunk_adx6804h.v)("tasks/cancel"), params: Pe.extend({ taskId: (0, import_chunk_adx6804h.n)() }) })), hn = A(() => kW.merge(ft)), mn = A(() => (0, import_chunk_adx6804h.We)([Wr, Jr, ro, da, xo, To, $o, no, io, lo, po, go, _o, Uo, Ao])), pn = A(() => (0, import_chunk_adx6804h.We)([Gr, Yr, Br, ga])), fn = A(() => (0, import_chunk_adx6804h.We)([Kr, Qo, ea, ia, fa])), gn = A(() => (0, import_chunk_adx6804h.We)([Wr, Zo, oa, pa])), Sn = A(() => (0, import_chunk_adx6804h.We)([Gr, Yr, Ho, wo, ho, Do, No, vo, na])), _n = A(() => (0, import_chunk_adx6804h.We)([Kr, lJt, Ytt, ha, Oo, Nor, s0t, Dor, uo, ts, Ngt, Ro])), $e = (0, import_chunk_adx6804h.L6e)().superRefine((e4, t) => {
  if (!URL.canParse(e4)) return t.addIssue({ code: import_chunk_adx6804h.fJ.custom, message: "URL must be parseable", fatal: true }), import_chunk_adx6804h.m$;
}).refine((e4) => {
  let t = new URL(e4);
  return t.protocol !== "javascript:" && t.protocol !== "data:" && t.protocol !== "vbscript:";
}, { message: "URL cannot use javascript:, data:, or vbscript: scheme" }), ds = A(() => (0, import_chunk_adx6804h.$t)({ resource: (0, import_chunk_adx6804h.n)().url(), authorization_servers: (0, import_chunk_adx6804h.C)($e).optional(), jwks_uri: (0, import_chunk_adx6804h.n)().url().optional(), scopes_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), bearer_methods_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), resource_signing_alg_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), resource_name: (0, import_chunk_adx6804h.n)().optional(), resource_documentation: (0, import_chunk_adx6804h.n)().optional(), resource_policy_uri: (0, import_chunk_adx6804h.n)().url().optional(), resource_tos_uri: (0, import_chunk_adx6804h.n)().url().optional(), tls_client_certificate_bound_access_tokens: (0, import_chunk_adx6804h.P)().optional(), authorization_details_types_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), dpop_signing_alg_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), dpop_bound_access_tokens_required: (0, import_chunk_adx6804h.P)().optional() })), dJt = A(() => (0, import_chunk_adx6804h.$t)({ issuer: (0, import_chunk_adx6804h.n)(), authorization_endpoint: $e, token_endpoint: $e, registration_endpoint: $e.optional(), scopes_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), response_types_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), response_modes_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), grant_types_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), token_endpoint_auth_methods_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), token_endpoint_auth_signing_alg_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), service_documentation: $e.optional(), revocation_endpoint: $e.optional(), revocation_endpoint_auth_methods_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), revocation_endpoint_auth_signing_alg_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), introspection_endpoint: (0, import_chunk_adx6804h.n)().optional(), introspection_endpoint_auth_methods_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), introspection_endpoint_auth_signing_alg_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), code_challenge_methods_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), client_id_metadata_document_supported: (0, import_chunk_adx6804h.P)().optional(), authorization_response_iss_parameter_supported: (0, import_chunk_adx6804h.P)().optional().catch(void 0) })), ya = A(() => (0, import_chunk_adx6804h.$t)({ issuer: (0, import_chunk_adx6804h.n)(), authorization_endpoint: $e, token_endpoint: $e, userinfo_endpoint: $e.optional(), jwks_uri: $e, registration_endpoint: $e.optional(), scopes_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), response_types_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), response_modes_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), grant_types_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), acr_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), subject_types_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), id_token_signing_alg_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), id_token_encryption_alg_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), id_token_encryption_enc_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), userinfo_signing_alg_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), userinfo_encryption_alg_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), userinfo_encryption_enc_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), request_object_signing_alg_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), request_object_encryption_alg_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), request_object_encryption_enc_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), token_endpoint_auth_methods_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), token_endpoint_auth_signing_alg_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), display_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), claim_types_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), claims_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), service_documentation: (0, import_chunk_adx6804h.n)().optional(), claims_locales_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), ui_locales_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), claims_parameter_supported: (0, import_chunk_adx6804h.P)().optional(), request_parameter_supported: (0, import_chunk_adx6804h.P)().optional(), request_uri_parameter_supported: (0, import_chunk_adx6804h.P)().optional(), require_request_uri_registration: (0, import_chunk_adx6804h.P)().optional(), op_policy_uri: $e.optional(), op_tos_uri: $e.optional(), client_id_metadata_document_supported: (0, import_chunk_adx6804h.P)().optional(), authorization_response_iss_parameter_supported: (0, import_chunk_adx6804h.P)().optional().catch(void 0) })), _Rn = A(() => (0, import_chunk_adx6804h.c)({ ...ya.shape, ...dJt.pick({ code_challenge_methods_supported: true }).shape })), cJt = A(() => (0, import_chunk_adx6804h.c)({ access_token: (0, import_chunk_adx6804h.n)(), id_token: (0, import_chunk_adx6804h.n)().optional(), token_type: (0, import_chunk_adx6804h.n)(), expires_in: (0, import_chunk_adx6804h.Tft)().optional(), scope: (0, import_chunk_adx6804h.n)().optional(), refresh_token: (0, import_chunk_adx6804h.n)().optional() }).strip()), va = A(() => (0, import_chunk_adx6804h.c)({ issued_token_type: (0, import_chunk_adx6804h.v)("urn:ietf:params:oauth:token-type:id-jag"), access_token: (0, import_chunk_adx6804h.n)(), token_type: (0, import_chunk_adx6804h.n)().optional(), expires_in: (0, import_chunk_adx6804h.E)().optional(), scope: (0, import_chunk_adx6804h.n)().optional() }).strip()), uJt = A(() => (0, import_chunk_adx6804h.c)({ error: (0, import_chunk_adx6804h.n)(), error_description: (0, import_chunk_adx6804h.n)().optional(), error_uri: (0, import_chunk_adx6804h.n)().optional() })), Ya = A(() => $e.optional().or((0, import_chunk_adx6804h.v)("").transform(() => {
  return;
}))), ba = A(() => (0, import_chunk_adx6804h.c)({ redirect_uris: (0, import_chunk_adx6804h.C)($e), token_endpoint_auth_method: (0, import_chunk_adx6804h.n)().optional(), grant_types: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), response_types: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), application_type: (0, import_chunk_adx6804h.n)().optional(), client_name: (0, import_chunk_adx6804h.n)().optional(), client_uri: $e.optional(), logo_uri: Ya, scope: (0, import_chunk_adx6804h.n)().optional(), contacts: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), tos_uri: Ya, policy_uri: (0, import_chunk_adx6804h.n)().optional(), jwks_uri: $e.optional(), jwks: (0, import_chunk_adx6804h.UEe)().optional(), software_id: (0, import_chunk_adx6804h.n)().optional(), software_version: (0, import_chunk_adx6804h.n)().optional(), software_statement: (0, import_chunk_adx6804h.n)().optional() }).strip()), Ra = A(() => (0, import_chunk_adx6804h.c)({ client_id: (0, import_chunk_adx6804h.n)(), client_secret: (0, import_chunk_adx6804h.n)().optional(), client_id_issued_at: (0, import_chunk_adx6804h.E)().optional(), client_secret_expires_at: (0, import_chunk_adx6804h.E)().optional() }).strip()), hs = A(() => ba.merge(Ra)), yn = A(() => (0, import_chunk_adx6804h.c)({ error: (0, import_chunk_adx6804h.n)(), error_description: (0, import_chunk_adx6804h.n)().optional() }).strip()), vn = A(() => (0, import_chunk_adx6804h.c)({ token: (0, import_chunk_adx6804h.n)(), token_type_hint: (0, import_chunk_adx6804h.n)().optional() }).strip());
(0, import_chunk_adx6804h.B)();
var $n = Symbol.for("mcp.sdk.errorBrands");
function Ot(e4, t) {
  let r = /* @__PURE__ */ new Set(), s = t;
  while (typeof s === "function") {
    let o = s.mcpBrand;
    if (Object.prototype.hasOwnProperty.call(s, "mcpBrand") && typeof o === "string") r.add(o);
    s = Object.getPrototypeOf(s);
  }
  if (r.size === 0) return;
  Object.defineProperty(e4, $n, { value: r, enumerable: false, configurable: true });
}
function Ue(e4, t) {
  try {
    if (typeof t === "object" && t !== null && Object.prototype.hasOwnProperty.call(e4, "mcpBrand") && typeof e4.mcpBrand === "string" && Object.prototype.hasOwnProperty.call(t, $n)) {
      let r = t[$n];
      if (r && typeof r.has === "function" && r.has(e4.mcpBrand)) return true;
    }
  } catch {
  }
  return Function.prototype[Symbol.hasInstance].call(e4, t);
}
var DY = (function(e4) {
  return e4.InvalidRequest = "invalid_request", e4.InvalidClient = "invalid_client", e4.InvalidGrant = "invalid_grant", e4.UnauthorizedClient = "unauthorized_client", e4.UnsupportedGrantType = "unsupported_grant_type", e4.InvalidScope = "invalid_scope", e4.AccessDenied = "access_denied", e4.ServerError = "server_error", e4.TemporarilyUnavailable = "temporarily_unavailable", e4.UnsupportedResponseType = "unsupported_response_type", e4.UnsupportedTokenType = "unsupported_token_type", e4.InvalidToken = "invalid_token", e4.MethodNotAllowed = "method_not_allowed", e4.TooManyRequests = "too_many_requests", e4.InvalidClientMetadata = "invalid_client_metadata", e4.InvalidRedirectUri = "invalid_redirect_uri", e4.InsufficientScope = "insufficient_scope", e4.InvalidTarget = "invalid_target", e4;
})({}), bie = class e extends Error {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.OAuthError" });
  }
  static [Symbol.hasInstance](t) {
    return Ue(this, t);
  }
  static isInstance(t) {
    if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
    return Ue(this, t);
  }
  constructor(t, r, s) {
    super(r);
    this.code = t, this.errorUri = s, this.name = "OAuthError", Ot(this, new.target);
  }
  toResponseObject() {
    let t = { error: this.code, error_description: this.message };
    if (this.errorUri) t.error_uri = this.errorUri;
    return t;
  }
  static fromResponse(t) {
    return new e(t.error, t.error_description ?? t.error, t.error_uri);
  }
}, Ua = (function(e4) {
  return e4.NotConnected = "NOT_CONNECTED", e4.AlreadyConnected = "ALREADY_CONNECTED", e4.NotInitialized = "NOT_INITIALIZED", e4.CapabilityNotSupported = "CAPABILITY_NOT_SUPPORTED", e4.RequestTimeout = "REQUEST_TIMEOUT", e4.ConnectionClosed = "CONNECTION_CLOSED", e4.SendFailed = "SEND_FAILED", e4.InvalidResult = "INVALID_RESULT", e4.UnsupportedResultType = "UNSUPPORTED_RESULT_TYPE", e4.InputRequiredRoundsExceeded = "INPUT_REQUIRED_ROUNDS_EXCEEDED", e4.ListPaginationExceeded = "LIST_PAGINATION_EXCEEDED", e4.MethodNotSupportedByProtocolVersion = "METHOD_NOT_SUPPORTED_BY_PROTOCOL_VERSION", e4.EraNegotiationFailed = "ERA_NEGOTIATION_FAILED", e4.ClientHttpNotImplemented = "CLIENT_HTTP_NOT_IMPLEMENTED", e4.ClientHttpAuthentication = "CLIENT_HTTP_AUTHENTICATION", e4.ClientHttpForbidden = "CLIENT_HTTP_FORBIDDEN", e4.ClientHttpUnexpectedContent = "CLIENT_HTTP_UNEXPECTED_CONTENT", e4.ClientHttpFailedToOpenStream = "CLIENT_HTTP_FAILED_TO_OPEN_STREAM", e4.ClientHttpFailedToTerminateSession = "CLIENT_HTTP_FAILED_TO_TERMINATE_SESSION", e4;
})({}), Xa = class extends Error {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.SdkError" });
  }
  static [Symbol.hasInstance](e4) {
    return Ue(this, e4);
  }
  static isInstance(e4) {
    if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
    return Ue(this, e4);
  }
  constructor(e4, t, r) {
    super(t);
    this.code = e4, this.data = r, this.name = "SdkError", Ot(this, new.target);
  }
}, PO = class extends Xa {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.SdkHttpError" });
  }
  constructor(e4, t, r) {
    super(e4, t, r);
    this.name = "SdkHttpError";
  }
  get status() {
    return this.data.status;
  }
  get statusText() {
    return this.data.statusText;
  }
};
function Ii(e4) {
  let t = typeof e4 === "string" ? new URL(e4) : new URL(e4.href);
  return t.hash = "", t;
}
function qi({ requestedResource: e4, configuredResource: t }) {
  let r = typeof e4 === "string" ? new URL(e4) : new URL(e4.href), s = typeof t === "string" ? new URL(t) : new URL(t.href);
  if (r.origin !== s.origin) return false;
  if (r.pathname.length < s.pathname.length) return false;
  let o = r.pathname.endsWith("/") ? r.pathname : r.pathname + "/", a = s.pathname.endsWith("/") ? s.pathname : s.pathname + "/";
  return o.startsWith(a);
}
var Oi = "2026-07-28", In = [Oi];
function tt(e4) {
  return e4 >= Oi;
}
function qn(e4) {
  return e4.filter((t) => !tt(t));
}
function ys(e4) {
  return e4.filter((t) => tt(t));
}
function Ni(e4) {
  let t = e4.structuredContent;
  if (t === void 0) return e4;
  if (!(typeof t !== "object" || t === null || Array.isArray(t))) return e4;
  if (e4.content?.some((r) => r.type === "text") ?? false) return e4;
  return { ...e4, content: [...e4.content ?? [], { type: "text", text: JSON.stringify(t) }] };
}
var Mi = ["task", "inputRequests", "requestState"];
function vl(e4) {
  if (e4 === null || typeof e4 !== "object" || Array.isArray(e4) || e4.content !== void 0 || Mi.some((t) => t in e4)) return e4;
  return { ...e4, content: [] };
}
function gt(e4) {
  if (e4.build !== void 0) e4.schema = e4.build(), e4.build = void 0;
  return e4.schema;
}
var bl = { get: (e4, t, r) => Reflect.get(gt(e4), t, r), has: (e4, t) => t in gt(e4), set: (e4, t, r) => Reflect.set(gt(e4), t, r), defineProperty: (e4, t, r) => Reflect.defineProperty(gt(e4), t, r), deleteProperty: (e4, t) => Reflect.deleteProperty(gt(e4), t), getPrototypeOf: (e4) => Object.getPrototypeOf(gt(e4)), ownKeys: (e4) => Reflect.ownKeys(gt(e4)), preventExtensions: () => false, getOwnPropertyDescriptor(e4, t) {
  let r = Reflect.getOwnPropertyDescriptor(gt(e4), t);
  return r && { ...r, configurable: true };
} };
function k(e4) {
  return new Proxy({ build: e4, schema: void 0 }, bl);
}
function Rl() {
  let e4 = (0, import_chunk_adx6804h.xI)(() => (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.E)(), (0, import_chunk_adx6804h.P)(), (0, import_chunk_adx6804h.O_)(), (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), e4), (0, import_chunk_adx6804h.C)(e4)])), t = k(() => (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), e4)), r = k(() => (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.E)().int()])), s = k(() => (0, import_chunk_adx6804h.n)()), o = k(() => (0, import_chunk_adx6804h.c)({ ttl: (0, import_chunk_adx6804h.E)().optional() })), a = k(() => (0, import_chunk_adx6804h.c)({ taskId: (0, import_chunk_adx6804h.n)() })), i = k(() => (0, import_chunk_adx6804h.$t)({ progressToken: r.optional(), "io.modelcontextprotocol/related-task": a.optional() })), u = k(() => (0, import_chunk_adx6804h.c)({ _meta: i.optional() })), l = k(() => u.extend({ task: o.optional() })), d = k(() => (0, import_chunk_adx6804h.c)({ method: (0, import_chunk_adx6804h.n)(), params: u.loose().optional() })), m = k(() => (0, import_chunk_adx6804h.c)({ _meta: i.optional() })), _ = k(() => (0, import_chunk_adx6804h.c)({ method: (0, import_chunk_adx6804h.n)(), params: m.loose().optional() })), w = k(() => (0, import_chunk_adx6804h.$t)({ _meta: i.optional() })), I = k(() => (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.E)().int()])), b = k(() => w.strict()), y = k(() => m.extend({ requestId: I.optional(), reason: (0, import_chunk_adx6804h.n)().optional() })), p = k(() => _.extend({ method: (0, import_chunk_adx6804h.v)("notifications/cancelled"), params: y })), h = k(() => (0, import_chunk_adx6804h.c)({ src: (0, import_chunk_adx6804h.n)(), mimeType: (0, import_chunk_adx6804h.n)().optional(), sizes: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), theme: (0, import_chunk_adx6804h.F)(["light", "dark"]).optional() })), g = k(() => (0, import_chunk_adx6804h.c)({ icons: (0, import_chunk_adx6804h.C)(h).optional() })), f = k(() => (0, import_chunk_adx6804h.c)({ name: (0, import_chunk_adx6804h.n)(), title: (0, import_chunk_adx6804h.n)().optional() })), z = k(() => f.extend({ ...f.shape, ...g.shape, version: (0, import_chunk_adx6804h.n)(), websiteUrl: (0, import_chunk_adx6804h.n)().optional(), description: (0, import_chunk_adx6804h.n)().optional() })), q = k(() => (0, import_chunk_adx6804h.Mge)((0, import_chunk_adx6804h.c)({ applyDefaults: (0, import_chunk_adx6804h.P)().optional() }), t)), R = (0, import_chunk_adx6804h.bi)((ke) => {
    if (ke && typeof ke === "object" && !Array.isArray(ke) && Object.keys(ke).length === 0) return { form: {} };
    return ke;
  }, (0, import_chunk_adx6804h.Mge)((0, import_chunk_adx6804h.c)({ form: q.optional(), url: t.optional() }), t.optional())), S = k(() => (0, import_chunk_adx6804h.$t)({ list: t.optional(), cancel: t.optional(), requests: (0, import_chunk_adx6804h.$t)({ sampling: (0, import_chunk_adx6804h.$t)({ createMessage: t.optional() }).optional(), elicitation: (0, import_chunk_adx6804h.$t)({ create: t.optional() }).optional() }).optional() })), O = k(() => (0, import_chunk_adx6804h.$t)({ list: t.optional(), cancel: t.optional(), requests: (0, import_chunk_adx6804h.$t)({ tools: (0, import_chunk_adx6804h.$t)({ call: t.optional() }).optional() }).optional() })), x = k(() => (0, import_chunk_adx6804h.c)({ experimental: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), t).optional(), sampling: (0, import_chunk_adx6804h.c)({ context: t.optional(), tools: t.optional() }).optional(), elicitation: R.optional(), roots: (0, import_chunk_adx6804h.c)({ listChanged: (0, import_chunk_adx6804h.P)().optional() }).optional(), tasks: S.optional(), extensions: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), t).optional() })), G = k(() => u.extend({ protocolVersion: (0, import_chunk_adx6804h.n)(), capabilities: x, clientInfo: z })), L = k(() => d.extend({ method: (0, import_chunk_adx6804h.v)("initialize"), params: G })), H = k(() => (0, import_chunk_adx6804h.c)({ experimental: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), t).optional(), logging: t.optional(), completions: t.optional(), prompts: (0, import_chunk_adx6804h.c)({ listChanged: (0, import_chunk_adx6804h.P)().optional() }).optional(), resources: (0, import_chunk_adx6804h.c)({ subscribe: (0, import_chunk_adx6804h.P)().optional(), listChanged: (0, import_chunk_adx6804h.P)().optional() }).optional(), tools: (0, import_chunk_adx6804h.c)({ listChanged: (0, import_chunk_adx6804h.P)().optional() }).optional(), tasks: O.optional(), extensions: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), t).optional() })), Z = k(() => w.extend({ protocolVersion: (0, import_chunk_adx6804h.n)(), capabilities: H, serverInfo: z, instructions: (0, import_chunk_adx6804h.n)().optional() })), X = k(() => _.extend({ method: (0, import_chunk_adx6804h.v)("notifications/initialized"), params: m.optional() })), ne = k(() => d.extend({ method: (0, import_chunk_adx6804h.v)("ping"), params: u.optional() })), pe = k(() => (0, import_chunk_adx6804h.c)({ progress: (0, import_chunk_adx6804h.E)(), total: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.E)()), message: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.n)()) })), de = k(() => (0, import_chunk_adx6804h.c)({ ...m.shape, ...pe.shape, progressToken: r })), be = k(() => _.extend({ method: (0, import_chunk_adx6804h.v)("notifications/progress"), params: de })), ce = k(() => u.extend({ cursor: s.optional() })), j = k(() => d.extend({ params: ce.optional() })), D = k(() => w.extend({ nextCursor: s.optional() })), J = k(() => (0, import_chunk_adx6804h.c)({ uri: (0, import_chunk_adx6804h.n)(), mimeType: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.n)()), _meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), T = k(() => J.extend({ text: (0, import_chunk_adx6804h.n)() })), M = (0, import_chunk_adx6804h.n)().refine((ke) => {
    try {
      return atob(ke), true;
    } catch {
      return false;
    }
  }, { message: "Invalid Base64 string" }), U = k(() => J.extend({ blob: M })), Y = k(() => (0, import_chunk_adx6804h.F)(["user", "assistant"])), Q = k(() => (0, import_chunk_adx6804h.c)({ audience: (0, import_chunk_adx6804h.C)(Y).optional(), priority: (0, import_chunk_adx6804h.E)().min(0).max(1).optional(), lastModified: (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.aC)({ offset: true }), (0, import_chunk_adx6804h.aC)({ offset: true, precision: -1 })]).optional() })), ae = k(() => (0, import_chunk_adx6804h.c)({ ...f.shape, ...g.shape, uri: (0, import_chunk_adx6804h.n)(), description: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.n)()), mimeType: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.n)()), size: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.E)()), annotations: Q.optional(), _meta: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.$t)({})) })), re = k(() => (0, import_chunk_adx6804h.c)({ ...f.shape, ...g.shape, uriTemplate: (0, import_chunk_adx6804h.n)(), description: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.n)()), mimeType: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.n)()), annotations: Q.optional(), _meta: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.$t)({})) })), me = k(() => j.extend({ method: (0, import_chunk_adx6804h.v)("resources/list") })), Oe = k(() => D.extend({ resources: (0, import_chunk_adx6804h.C)(ae) })), N = k(() => j.extend({ method: (0, import_chunk_adx6804h.v)("resources/templates/list") })), V = k(() => D.extend({ resourceTemplates: (0, import_chunk_adx6804h.C)(re) })), K = k(() => u.extend({ uri: (0, import_chunk_adx6804h.n)() })), ee = K, te = k(() => d.extend({ method: (0, import_chunk_adx6804h.v)("resources/read"), params: ee })), se = k(() => w.extend({ contents: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.We)([T, U])) })), ye = k(() => _.extend({ method: (0, import_chunk_adx6804h.v)("notifications/resources/list_changed"), params: m.optional() })), ze = K, Te = k(() => d.extend({ method: (0, import_chunk_adx6804h.v)("resources/subscribe"), params: ze })), Re = K, ge = k(() => d.extend({ method: (0, import_chunk_adx6804h.v)("resources/unsubscribe"), params: Re })), De = k(() => m.extend({ uri: (0, import_chunk_adx6804h.n)() })), Ee = k(() => _.extend({ method: (0, import_chunk_adx6804h.v)("notifications/resources/updated"), params: De })), Be = k(() => (0, import_chunk_adx6804h.c)({ name: (0, import_chunk_adx6804h.n)(), description: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.n)()), required: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.P)()) })), Fe = k(() => (0, import_chunk_adx6804h.c)({ ...f.shape, ...g.shape, description: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.n)()), arguments: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.C)(Be)), _meta: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.$t)({})) })), Ye = k(() => j.extend({ method: (0, import_chunk_adx6804h.v)("prompts/list") })), st = k(() => D.extend({ prompts: (0, import_chunk_adx6804h.C)(Fe) })), ot = k(() => u.extend({ name: (0, import_chunk_adx6804h.n)(), arguments: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)()).optional() })), _t = k(() => d.extend({ method: (0, import_chunk_adx6804h.v)("prompts/get"), params: ot })), yt = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("text"), text: (0, import_chunk_adx6804h.n)(), annotations: Q.optional(), _meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), vt = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("image"), data: M, mimeType: (0, import_chunk_adx6804h.n)(), annotations: Q.optional(), _meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), bt = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("audio"), data: M, mimeType: (0, import_chunk_adx6804h.n)(), annotations: Q.optional(), _meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), hr = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("tool_use"), name: (0, import_chunk_adx6804h.n)(), id: (0, import_chunk_adx6804h.n)(), input: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()), _meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), at = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("resource"), resource: (0, import_chunk_adx6804h.We)([T, U]), annotations: Q.optional(), _meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), mr = k(() => ae.extend({ type: (0, import_chunk_adx6804h.v)("resource_link") })), Ve = k(() => (0, import_chunk_adx6804h.We)([yt, vt, bt, mr, at])), jt = k(() => (0, import_chunk_adx6804h.c)({ role: Y, content: Ve })), At = k(() => w.extend({ description: (0, import_chunk_adx6804h.n)().optional(), messages: (0, import_chunk_adx6804h.C)(jt) })), Rt = k(() => _.extend({ method: (0, import_chunk_adx6804h.v)("notifications/prompts/list_changed"), params: m.optional() })), pr = k(() => (0, import_chunk_adx6804h.c)({ title: (0, import_chunk_adx6804h.n)().optional(), readOnlyHint: (0, import_chunk_adx6804h.P)().optional(), destructiveHint: (0, import_chunk_adx6804h.P)().optional(), idempotentHint: (0, import_chunk_adx6804h.P)().optional(), openWorldHint: (0, import_chunk_adx6804h.P)().optional() })), Lt = k(() => (0, import_chunk_adx6804h.c)({ taskSupport: (0, import_chunk_adx6804h.F)(["required", "optional", "forbidden"]).optional() })), zt = k(() => (0, import_chunk_adx6804h.c)({ ...f.shape, ...g.shape, description: (0, import_chunk_adx6804h.n)().optional(), inputSchema: (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("object"), properties: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), e4).optional(), required: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional() }).catchall((0, import_chunk_adx6804h.ie)()), outputSchema: (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("object"), properties: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), e4).optional(), required: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional() }).catchall((0, import_chunk_adx6804h.ie)()).optional(), annotations: pr.optional(), execution: Lt.optional(), _meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), Ut = k(() => j.extend({ method: (0, import_chunk_adx6804h.v)("tools/list") })), Dt = k(() => D.extend({ tools: (0, import_chunk_adx6804h.C)(zt) })), Vt = k(() => w.extend({ content: (0, import_chunk_adx6804h.C)(Ve), structuredContent: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional(), isError: (0, import_chunk_adx6804h.P)().optional() })), Ce = k(() => l.extend({ name: (0, import_chunk_adx6804h.n)(), arguments: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), fr = k(() => d.extend({ method: (0, import_chunk_adx6804h.v)("tools/call"), params: Ce })), Ts = k(() => _.extend({ method: (0, import_chunk_adx6804h.v)("notifications/tools/list_changed"), params: m.optional() })), xt = k(() => (0, import_chunk_adx6804h.F)(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"])), gr = k(() => u.extend({ level: xt })), Sr = k(() => d.extend({ method: (0, import_chunk_adx6804h.v)("logging/setLevel"), params: gr })), _r = k(() => m.extend({ level: xt, logger: (0, import_chunk_adx6804h.n)().optional(), data: (0, import_chunk_adx6804h.ie)() })), yr = k(() => _.extend({ method: (0, import_chunk_adx6804h.v)("notifications/message"), params: _r })), vr = k(() => (0, import_chunk_adx6804h.c)({ name: (0, import_chunk_adx6804h.n)().optional() })), br = k(() => (0, import_chunk_adx6804h.c)({ hints: (0, import_chunk_adx6804h.C)(vr).optional(), costPriority: (0, import_chunk_adx6804h.E)().min(0).max(1).optional(), speedPriority: (0, import_chunk_adx6804h.E)().min(0).max(1).optional(), intelligencePriority: (0, import_chunk_adx6804h.E)().min(0).max(1).optional() })), Rr = k(() => (0, import_chunk_adx6804h.c)({ mode: (0, import_chunk_adx6804h.F)(["auto", "required", "none"]).optional() })), Cs = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("tool_result"), toolUseId: (0, import_chunk_adx6804h.n)().describe("The unique identifier for the corresponding tool call."), content: (0, import_chunk_adx6804h.C)(Ve), structuredContent: (0, import_chunk_adx6804h.c)({}).loose().optional(), isError: (0, import_chunk_adx6804h.P)().optional(), _meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), zr = k(() => (0, import_chunk_adx6804h.zn)("type", [yt, vt, bt])), nt = k(() => (0, import_chunk_adx6804h.zn)("type", [yt, vt, bt, hr, Cs])), wr = k(() => (0, import_chunk_adx6804h.c)({ role: Y, content: (0, import_chunk_adx6804h.We)([nt, (0, import_chunk_adx6804h.C)(nt)]), _meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), Er = k(() => l.extend({ messages: (0, import_chunk_adx6804h.C)(wr), modelPreferences: br.optional(), systemPrompt: (0, import_chunk_adx6804h.n)().optional(), includeContext: (0, import_chunk_adx6804h.F)(["none", "thisServer", "allServers"]).optional(), temperature: (0, import_chunk_adx6804h.E)().optional(), maxTokens: (0, import_chunk_adx6804h.E)().int(), stopSequences: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), metadata: t.optional(), tools: (0, import_chunk_adx6804h.C)(zt).optional(), toolChoice: Rr.optional() })), $r = k(() => d.extend({ method: (0, import_chunk_adx6804h.v)("sampling/createMessage"), params: Er })), Pr = k(() => w.extend({ model: (0, import_chunk_adx6804h.n)(), stopReason: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.F)(["endTurn", "stopSequence", "maxTokens"]).or((0, import_chunk_adx6804h.n)())), role: Y, content: zr })), Tr = k(() => w.extend({ model: (0, import_chunk_adx6804h.n)(), stopReason: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.F)(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or((0, import_chunk_adx6804h.n)())), role: Y, content: (0, import_chunk_adx6804h.We)([nt, (0, import_chunk_adx6804h.C)(nt)]) })), Cr = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("boolean"), title: (0, import_chunk_adx6804h.n)().optional(), description: (0, import_chunk_adx6804h.n)().optional(), default: (0, import_chunk_adx6804h.P)().optional() })), kr = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("string"), title: (0, import_chunk_adx6804h.n)().optional(), description: (0, import_chunk_adx6804h.n)().optional(), minLength: (0, import_chunk_adx6804h.E)().optional(), maxLength: (0, import_chunk_adx6804h.E)().optional(), format: (0, import_chunk_adx6804h.F)(["email", "uri", "date", "date-time"]).optional(), default: (0, import_chunk_adx6804h.n)().optional() })), Ir = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.F)(["number", "integer"]), title: (0, import_chunk_adx6804h.n)().optional(), description: (0, import_chunk_adx6804h.n)().optional(), minimum: (0, import_chunk_adx6804h.E)().optional(), maximum: (0, import_chunk_adx6804h.E)().optional(), default: (0, import_chunk_adx6804h.E)().optional() })), qr = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("string"), title: (0, import_chunk_adx6804h.n)().optional(), description: (0, import_chunk_adx6804h.n)().optional(), enum: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), default: (0, import_chunk_adx6804h.n)().optional() })), Or = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("string"), title: (0, import_chunk_adx6804h.n)().optional(), description: (0, import_chunk_adx6804h.n)().optional(), oneOf: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ const: (0, import_chunk_adx6804h.n)(), title: (0, import_chunk_adx6804h.n)() })), default: (0, import_chunk_adx6804h.n)().optional() })), Nr = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("string"), title: (0, import_chunk_adx6804h.n)().optional(), description: (0, import_chunk_adx6804h.n)().optional(), enum: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), enumNames: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), default: (0, import_chunk_adx6804h.n)().optional() })), Mr = k(() => (0, import_chunk_adx6804h.We)([qr, Or])), wt = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("array"), title: (0, import_chunk_adx6804h.n)().optional(), description: (0, import_chunk_adx6804h.n)().optional(), minItems: (0, import_chunk_adx6804h.E)().optional(), maxItems: (0, import_chunk_adx6804h.E)().optional(), items: (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("string"), enum: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()) }), default: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional() })), Et = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("array"), title: (0, import_chunk_adx6804h.n)().optional(), description: (0, import_chunk_adx6804h.n)().optional(), minItems: (0, import_chunk_adx6804h.E)().optional(), maxItems: (0, import_chunk_adx6804h.E)().optional(), items: (0, import_chunk_adx6804h.c)({ anyOf: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ const: (0, import_chunk_adx6804h.n)(), title: (0, import_chunk_adx6804h.n)() })) }), default: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional() })), ks = k(() => (0, import_chunk_adx6804h.We)([wt, Et])), Is = k(() => (0, import_chunk_adx6804h.We)([Nr, Mr, ks])), Ae = k(() => (0, import_chunk_adx6804h.We)([Is, Cr, kr, Ir])), Le = k(() => l.extend({ mode: (0, import_chunk_adx6804h.v)("form").optional(), message: (0, import_chunk_adx6804h.n)(), requestedSchema: (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("object"), properties: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), Ae), required: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional() }).catchall((0, import_chunk_adx6804h.ie)()) })), jr = k(() => l.extend({ mode: (0, import_chunk_adx6804h.v)("url"), message: (0, import_chunk_adx6804h.n)(), elicitationId: (0, import_chunk_adx6804h.n)(), url: (0, import_chunk_adx6804h.n)().url() })), He = k(() => (0, import_chunk_adx6804h.We)([Le, jr])), qs = k(() => d.extend({ method: (0, import_chunk_adx6804h.v)("elicitation/create"), params: He })), Os = k(() => m.extend({ elicitationId: (0, import_chunk_adx6804h.n)() })), Ns = k(() => _.extend({ method: (0, import_chunk_adx6804h.v)("notifications/elicitation/complete"), params: Os })), Ms = k(() => w.extend({ action: (0, import_chunk_adx6804h.F)(["accept", "decline", "cancel"]), content: (0, import_chunk_adx6804h.bi)((ke) => ke === null ? void 0 : ke, (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.E)(), (0, import_chunk_adx6804h.P)(), (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)())])).optional()) })), js = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("ref/resource"), uri: (0, import_chunk_adx6804h.n)() })), As = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("ref/prompt"), name: (0, import_chunk_adx6804h.n)() })), Ls = k(() => u.extend({ ref: (0, import_chunk_adx6804h.We)([As, js]), argument: (0, import_chunk_adx6804h.c)({ name: (0, import_chunk_adx6804h.n)(), value: (0, import_chunk_adx6804h.n)() }), context: (0, import_chunk_adx6804h.c)({ arguments: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)()).optional() }).optional() })), Ar = k(() => d.extend({ method: (0, import_chunk_adx6804h.v)("completion/complete"), params: Ls })), Us = k(() => w.extend({ completion: (0, import_chunk_adx6804h.$t)({ values: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).max(100), total: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.E)().int()), hasMore: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.P)()) }) })), Ds = k(() => (0, import_chunk_adx6804h.c)({ uri: (0, import_chunk_adx6804h.n)().startsWith("file://"), name: (0, import_chunk_adx6804h.n)().optional(), _meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), Ft = k(() => d.extend({ method: (0, import_chunk_adx6804h.v)("roots/list"), params: u.optional() })), Lr = k(() => w.extend({ roots: (0, import_chunk_adx6804h.C)(Ds) })), Vs = k(() => _.extend({ method: (0, import_chunk_adx6804h.v)("notifications/roots/list_changed"), params: m.optional() })), xs = k(() => (0, import_chunk_adx6804h.$t)({ ttl: (0, import_chunk_adx6804h.E)().optional(), pollInterval: (0, import_chunk_adx6804h.E)().optional() })), Fs = k(() => (0, import_chunk_adx6804h.F)(["working", "input_required", "completed", "failed", "cancelled"])), it = k(() => (0, import_chunk_adx6804h.c)({ taskId: (0, import_chunk_adx6804h.n)(), status: Fs, ttl: (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.E)(), (0, import_chunk_adx6804h.O_)()]), createdAt: (0, import_chunk_adx6804h.n)(), lastUpdatedAt: (0, import_chunk_adx6804h.n)(), pollInterval: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.E)()), statusMessage: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.n)()) })), Ne = k(() => w.extend({ task: it })), Hs = k(() => m.merge(it)), Pt = k(() => _.extend({ method: (0, import_chunk_adx6804h.v)("notifications/tasks/status"), params: Hs })), Ht = k(() => d.extend({ method: (0, import_chunk_adx6804h.v)("tasks/get"), params: u.extend({ taskId: (0, import_chunk_adx6804h.n)() }) })), Kt = k(() => w.merge(it)), Gt = k(() => d.extend({ method: (0, import_chunk_adx6804h.v)("tasks/result"), params: u.extend({ taskId: (0, import_chunk_adx6804h.n)() }) })), Wa = k(() => w.loose()), Me = k(() => j.extend({ method: (0, import_chunk_adx6804h.v)("tasks/list") })), ve = k(() => D.extend({ tasks: (0, import_chunk_adx6804h.C)(it) })), Tt = k(() => d.extend({ method: (0, import_chunk_adx6804h.v)("tasks/cancel"), params: u.extend({ taskId: (0, import_chunk_adx6804h.n)() }) }));
  return { JSONValueSchema: e4, JSONObjectSchema: t, ProgressTokenSchema: r, CursorSchema: s, TaskMetadataSchema: o, RelatedTaskMetadataSchema: a, RequestMetaSchema: i, BaseRequestParamsSchema: u, TaskAugmentedRequestParamsSchema: l, RequestSchema: d, NotificationsParamsSchema: m, NotificationSchema: _, ResultSchema: w, RequestIdSchema: I, EmptyResultSchema: b, CancelledNotificationParamsSchema: y, CancelledNotificationSchema: p, IconSchema: h, IconsSchema: g, BaseMetadataSchema: f, ImplementationSchema: z, ClientTasksCapabilitySchema: S, ServerTasksCapabilitySchema: O, ClientCapabilitiesSchema: x, InitializeRequestParamsSchema: G, InitializeRequestSchema: L, ServerCapabilitiesSchema: H, InitializeResultSchema: Z, InitializedNotificationSchema: X, PingRequestSchema: ne, ProgressSchema: pe, ProgressNotificationParamsSchema: de, ProgressNotificationSchema: be, PaginatedRequestParamsSchema: ce, PaginatedRequestSchema: j, PaginatedResultSchema: D, ResourceContentsSchema: J, TextResourceContentsSchema: T, BlobResourceContentsSchema: U, RoleSchema: Y, AnnotationsSchema: Q, ResourceSchema: ae, ResourceTemplateSchema: re, ListResourcesRequestSchema: me, ListResourcesResultSchema: Oe, ListResourceTemplatesRequestSchema: N, ListResourceTemplatesResultSchema: V, ResourceRequestParamsSchema: K, ReadResourceRequestParamsSchema: ee, ReadResourceRequestSchema: te, ReadResourceResultSchema: se, ResourceListChangedNotificationSchema: ye, SubscribeRequestParamsSchema: ze, SubscribeRequestSchema: Te, UnsubscribeRequestParamsSchema: Re, UnsubscribeRequestSchema: ge, ResourceUpdatedNotificationParamsSchema: De, ResourceUpdatedNotificationSchema: Ee, PromptArgumentSchema: Be, PromptSchema: Fe, ListPromptsRequestSchema: Ye, ListPromptsResultSchema: st, GetPromptRequestParamsSchema: ot, GetPromptRequestSchema: _t, TextContentSchema: yt, ImageContentSchema: vt, AudioContentSchema: bt, ToolUseContentSchema: hr, EmbeddedResourceSchema: at, ResourceLinkSchema: mr, ContentBlockSchema: Ve, PromptMessageSchema: jt, GetPromptResultSchema: At, PromptListChangedNotificationSchema: Rt, ToolAnnotationsSchema: pr, ToolExecutionSchema: Lt, ToolSchema: zt, ListToolsRequestSchema: Ut, ListToolsResultSchema: Dt, CallToolResultSchema: Vt, CallToolRequestParamsSchema: Ce, CallToolRequestSchema: fr, ToolListChangedNotificationSchema: Ts, LoggingLevelSchema: xt, SetLevelRequestParamsSchema: gr, SetLevelRequestSchema: Sr, LoggingMessageNotificationParamsSchema: _r, LoggingMessageNotificationSchema: yr, ModelHintSchema: vr, ModelPreferencesSchema: br, ToolChoiceSchema: Rr, ToolResultContentSchema: Cs, SamplingContentSchema: zr, SamplingMessageContentBlockSchema: nt, SamplingMessageSchema: wr, CreateMessageRequestParamsSchema: Er, CreateMessageRequestSchema: $r, CreateMessageResultSchema: Pr, CreateMessageResultWithToolsSchema: Tr, BooleanSchemaSchema: Cr, StringSchemaSchema: kr, NumberSchemaSchema: Ir, UntitledSingleSelectEnumSchemaSchema: qr, TitledSingleSelectEnumSchemaSchema: Or, LegacyTitledEnumSchemaSchema: Nr, SingleSelectEnumSchemaSchema: Mr, UntitledMultiSelectEnumSchemaSchema: wt, TitledMultiSelectEnumSchemaSchema: Et, MultiSelectEnumSchemaSchema: ks, EnumSchemaSchema: Is, PrimitiveSchemaDefinitionSchema: Ae, ElicitRequestFormParamsSchema: Le, ElicitRequestURLParamsSchema: jr, ElicitRequestParamsSchema: He, ElicitRequestSchema: qs, ElicitationCompleteNotificationParamsSchema: Os, ElicitationCompleteNotificationSchema: Ns, ElicitResultSchema: Ms, ResourceTemplateReferenceSchema: js, PromptReferenceSchema: As, CompleteRequestParamsSchema: Ls, CompleteRequestSchema: Ar, CompleteResultSchema: Us, RootSchema: Ds, ListRootsRequestSchema: Ft, ListRootsResultSchema: Lr, RootsListChangedNotificationSchema: Vs, TaskCreationParamsSchema: xs, TaskStatusSchema: Fs, TaskSchema: it, CreateTaskResultSchema: Ne, TaskStatusNotificationParamsSchema: Hs, TaskStatusNotificationSchema: Pt, GetTaskRequestSchema: Ht, GetTaskResultSchema: Kt, GetTaskPayloadRequestSchema: Gt, GetTaskPayloadResultSchema: Wa, ListTasksRequestSchema: Me, ListTasksResultSchema: ve, CancelTaskRequestSchema: Tt, CancelTaskResultSchema: k(() => w.merge(it)), ClientRequestSchema: k(() => (0, import_chunk_adx6804h.We)([ne, L, Ar, Sr, _t, Ye, me, N, te, Te, ge, fr, Ut, Ht, Gt, Me, Tt])), ClientNotificationSchema: k(() => (0, import_chunk_adx6804h.We)([p, be, X, Vs, Pt])), ClientResultSchema: k(() => (0, import_chunk_adx6804h.We)([b, Pr, Tr, Ms, Lr, Kt, ve, Ne])), ServerRequestSchema: k(() => (0, import_chunk_adx6804h.We)([ne, $r, qs, Ft, Ht, Gt, Me, Tt])), ServerNotificationSchema: k(() => (0, import_chunk_adx6804h.We)([p, be, yr, Ee, ye, Ts, Rt, Pt, Ns])), ServerResultSchema: k(() => (0, import_chunk_adx6804h.We)([b, Z, Us, At, st, Oe, V, se, Vt, Dt, Kt, ve, Ne])), CallToolResultWireSchema: (0, import_chunk_adx6804h.ie)().superRefine((ke, cl) => {
    if (typeof ke !== "object" || ke === null || Array.isArray(ke) || ke.content !== void 0) return;
    for (let ui of Mi) if (ui in ke) {
      cl.addIssue({ code: "custom", message: `content is required when the body carries '${ui}' \u2014 another result family cannot default into an empty tools/call success` });
      return;
    }
  }).transform(vl).pipe(Vt) };
}
var zl;
function ji() {
  return zl ??= Rl();
}
function Ai(e4) {
  return e4.type !== "object";
}
var wl = /* @__PURE__ */ new Set(["const", "enum", "default", "examples"]), El = /* @__PURE__ */ new Set(["properties", "patternProperties", "$defs", "definitions", "dependentSchemas"]);
function $l(e4) {
  let t = typeof e4.$schema === "string" ? e4.$schema : void 0;
  if (e4.$id !== void 0) return { ...t !== void 0 && { $schema: t }, type: "object", properties: { result: e4 }, required: ["result"] };
  let r = (s, o) => {
    if (Array.isArray(s)) return s.map((i) => r(i, false));
    if (s === null || typeof s !== "object") return s;
    if (!o && s.$id !== void 0) return s;
    let a = {};
    for (let [i, u] of Object.entries(s)) if (o) a[i] = r(u, false);
    else if ((i === "$ref" || i === "$dynamicRef") && typeof u === "string") a[i] = u === "#" ? "#/properties/result" : u.startsWith("#/") ? `#/properties/result${u.slice(1)}` : u;
    else if (wl.has(i)) a[i] = u;
    else if (El.has(i)) a[i] = r(u, true);
    else a[i] = r(u, false);
    return a;
  };
  return { ...t !== void 0 && { $schema: t }, type: "object", properties: { result: r(e4, false) }, required: ["result"] };
}
var Li = { ping: null, initialize: null, "completion/complete": null, "logging/setLevel": null, "prompts/get": null, "prompts/list": null, "resources/list": null, "resources/templates/list": null, "resources/read": null, "resources/subscribe": null, "resources/unsubscribe": null, "tools/call": null, "tools/list": null, "tasks/get": null, "tasks/result": null, "tasks/list": null, "tasks/cancel": null, "sampling/createMessage": null, "elicitation/create": null, "roots/list": null }, Ui = { "notifications/cancelled": null, "notifications/progress": null, "notifications/initialized": null, "notifications/roots/list_changed": null, "notifications/tasks/status": null, "notifications/message": null, "notifications/resources/updated": null, "notifications/resources/list_changed": null, "notifications/tools/list_changed": null, "notifications/prompts/list_changed": null, "notifications/elicitation/complete": null }, Pl = { ping: null, initialize: null, "completion/complete": null, "logging/setLevel": null, "prompts/get": null, "prompts/list": null, "resources/list": null, "resources/templates/list": null, "resources/read": null, "resources/subscribe": null, "resources/unsubscribe": null, "tools/call": null, "tools/list": null, "sampling/createMessage": null, "elicitation/create": null, "roots/list": null }, za;
function On() {
  if (za) return za;
  let e4 = ji();
  return za = { requestSchemas: { ping: e4.PingRequestSchema, initialize: e4.InitializeRequestSchema, "completion/complete": e4.CompleteRequestSchema, "logging/setLevel": e4.SetLevelRequestSchema, "prompts/get": e4.GetPromptRequestSchema, "prompts/list": e4.ListPromptsRequestSchema, "resources/list": e4.ListResourcesRequestSchema, "resources/templates/list": e4.ListResourceTemplatesRequestSchema, "resources/read": e4.ReadResourceRequestSchema, "resources/subscribe": e4.SubscribeRequestSchema, "resources/unsubscribe": e4.UnsubscribeRequestSchema, "tools/call": e4.CallToolRequestSchema, "tools/list": e4.ListToolsRequestSchema, "tasks/get": e4.GetTaskRequestSchema, "tasks/result": e4.GetTaskPayloadRequestSchema, "tasks/list": e4.ListTasksRequestSchema, "tasks/cancel": e4.CancelTaskRequestSchema, "sampling/createMessage": e4.CreateMessageRequestSchema, "elicitation/create": e4.ElicitRequestSchema, "roots/list": e4.ListRootsRequestSchema }, notificationSchemas: { "notifications/cancelled": e4.CancelledNotificationSchema, "notifications/progress": e4.ProgressNotificationSchema, "notifications/initialized": e4.InitializedNotificationSchema, "notifications/roots/list_changed": e4.RootsListChangedNotificationSchema, "notifications/tasks/status": e4.TaskStatusNotificationSchema, "notifications/message": e4.LoggingMessageNotificationSchema, "notifications/resources/updated": e4.ResourceUpdatedNotificationSchema, "notifications/resources/list_changed": e4.ResourceListChangedNotificationSchema, "notifications/tools/list_changed": e4.ToolListChangedNotificationSchema, "notifications/prompts/list_changed": e4.PromptListChangedNotificationSchema, "notifications/elicitation/complete": e4.ElicitationCompleteNotificationSchema }, resultSchemas: { ping: e4.EmptyResultSchema, initialize: e4.InitializeResultSchema, "completion/complete": e4.CompleteResultSchema, "logging/setLevel": e4.EmptyResultSchema, "prompts/get": e4.GetPromptResultSchema, "prompts/list": e4.ListPromptsResultSchema, "resources/list": e4.ListResourcesResultSchema, "resources/templates/list": e4.ListResourceTemplatesResultSchema, "resources/read": e4.ReadResourceResultSchema, "resources/subscribe": e4.EmptyResultSchema, "resources/unsubscribe": e4.EmptyResultSchema, "tools/call": e4.CallToolResultWireSchema, "tools/list": e4.ListToolsResultSchema, "sampling/createMessage": e4.CreateMessageResultWithToolsSchema, "elicitation/create": e4.ElicitResultSchema, "roots/list": e4.ListRootsResultSchema } }, za;
}
function Di(e4) {
  return Object.prototype.hasOwnProperty.call(Li, e4);
}
function Vi(e4) {
  return Object.prototype.hasOwnProperty.call(Ui, e4);
}
function Tl(e4) {
  return Object.prototype.hasOwnProperty.call(Pl, e4);
}
function Cl(e4) {
  return Tl(e4) ? On().resultSchemas[e4] : void 0;
}
function kl(e4) {
  return Di(e4) ? On().requestSchemas[e4] : void 0;
}
function Il(e4) {
  return Vi(e4) ? On().notificationSchemas[e4] : void 0;
}
var _m = Object.keys(Li), ym = Object.keys(Ui);
function Pn(e4) {
  return e4 !== null && typeof e4 === "object" && !Array.isArray(e4);
}
function wa(e4, t) {
  if (e4 === void 0) return { ok: false, reason: "not-in-era" };
  let r = e4.safeParse(t);
  return r.success ? { ok: true, value: r.data } : { ok: false, reason: "invalid", message: String(r.error) };
}
var vi = { ok: false, reason: "not-in-era" };
function Ri(e4) {
  return Pn(e4) && Pn(e4.outputSchema) && Ai(e4.outputSchema);
}
function zi(e4) {
  return e4;
}
var Nn = { era: "2025-11-25", hasRequestMethod: Di, hasNotificationMethod: Vi, validateRequest: (e4, t) => wa(kl(e4), t), validateResult: (e4, t) => wa(Cl(e4), t), validateNotification: (e4, t) => wa(Il(e4), t), hasInputRequestMethod: () => false, validateInputRequest: () => vi, validateInputResponse: () => vi, samplingResultVariant: (e4, t) => {
  let r = ji();
  return wa(e4 ? r.CreateMessageResultWithToolsSchema : r.CreateMessageResultSchema, t);
}, outboundEnvelope: (e4) => {
  return;
}, validateEnvelopeMeta: (e4) => [], projectCallToolResult(e4, t) {
  let r = Ni(e4), s = r.structuredContent;
  if (s === void 0) return r;
  let o = typeof s !== "object" || s === null || Array.isArray(s), a = t !== void 0 && Ai(t);
  if (!o && !a) return r;
  return { ...r, structuredContent: { result: s } };
}, decodeResult(e4, t) {
  if (Pn(t) && "resultType" in t) {
    let r = { ...t };
    return delete r.resultType, { kind: "complete", result: zi(r) };
  }
  return { kind: "complete", result: zi(t) };
}, encodeResult(e4, t) {
  if (e4 !== "tools/list") return t;
  let r = t.tools;
  if (!Array.isArray(r) || !r.some((s) => Ri(s))) return t;
  return { ...t, tools: r.map((s) => Ri(s) ? { ...s, outputSchema: $l(s.outputSchema) } : s) };
}, encodeErrorCode: (e4) => e4 === -32002 ? -32602 : e4, checkInboundEnvelope: (e4) => {
  return;
} };
function ql() {
  let e4 = (0, import_chunk_adx6804h.xI)(() => (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.E)(), (0, import_chunk_adx6804h.P)(), (0, import_chunk_adx6804h.O_)(), (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), e4), (0, import_chunk_adx6804h.C)(e4)])), t = k(() => (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), e4)), r = k(() => (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.E)().int()])), s = k(() => (0, import_chunk_adx6804h.n)()), o = k(() => (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.E)().int()])), a = k(() => (0, import_chunk_adx6804h.F)(["user", "assistant"])), i = k(() => (0, import_chunk_adx6804h.F)(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"])), u = (0, import_chunk_adx6804h.n)().refine((ve) => {
    try {
      return atob(ve), true;
    } catch {
      return false;
    }
  }, { message: "Invalid Base64 string" }), l = k(() => (0, import_chunk_adx6804h.c)({ ttl: (0, import_chunk_adx6804h.E)().optional() })), d = k(() => (0, import_chunk_adx6804h.c)({ taskId: (0, import_chunk_adx6804h.n)() })), m = k(() => (0, import_chunk_adx6804h.$t)({ progressToken: r.optional(), "io.modelcontextprotocol/related-task": d.optional() })), _ = k(() => (0, import_chunk_adx6804h.c)({ _meta: m.optional() })), w = k(() => _.extend({ task: l.optional() })), I = k(() => (0, import_chunk_adx6804h.c)({ _meta: m.optional() })), b = k(() => (0, import_chunk_adx6804h.c)({ method: (0, import_chunk_adx6804h.n)(), params: I.loose().optional() })), y = k(() => (0, import_chunk_adx6804h.c)({ src: (0, import_chunk_adx6804h.n)(), mimeType: (0, import_chunk_adx6804h.n)().optional(), sizes: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), theme: (0, import_chunk_adx6804h.F)(["light", "dark"]).optional() })), p = k(() => (0, import_chunk_adx6804h.c)({ icons: (0, import_chunk_adx6804h.C)(y).optional() })), h = k(() => (0, import_chunk_adx6804h.c)({ name: (0, import_chunk_adx6804h.n)(), title: (0, import_chunk_adx6804h.n)().optional() })), g = k(() => h.extend({ ...h.shape, ...p.shape, version: (0, import_chunk_adx6804h.n)(), websiteUrl: (0, import_chunk_adx6804h.n)().optional(), description: (0, import_chunk_adx6804h.n)().optional() })), f = k(() => (0, import_chunk_adx6804h.Mge)((0, import_chunk_adx6804h.c)({ applyDefaults: (0, import_chunk_adx6804h.P)().optional() }), t)), z = (0, import_chunk_adx6804h.bi)((ve) => {
    if (ve && typeof ve === "object" && !Array.isArray(ve) && Object.keys(ve).length === 0) return { form: {} };
    return ve;
  }, (0, import_chunk_adx6804h.Mge)((0, import_chunk_adx6804h.c)({ form: f.optional(), url: t.optional() }), t.optional())), q = k(() => (0, import_chunk_adx6804h.$t)({ list: t.optional(), cancel: t.optional(), requests: (0, import_chunk_adx6804h.$t)({ sampling: (0, import_chunk_adx6804h.$t)({ createMessage: t.optional() }).optional(), elicitation: (0, import_chunk_adx6804h.$t)({ create: t.optional() }).optional() }).optional() })), R = k(() => (0, import_chunk_adx6804h.$t)({ list: t.optional(), cancel: t.optional(), requests: (0, import_chunk_adx6804h.$t)({ tools: (0, import_chunk_adx6804h.$t)({ call: t.optional() }).optional() }).optional() })), S = k(() => (0, import_chunk_adx6804h.c)({ experimental: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), t).optional(), sampling: (0, import_chunk_adx6804h.c)({ context: t.optional(), tools: t.optional() }).optional(), elicitation: z.optional(), roots: (0, import_chunk_adx6804h.c)({ listChanged: (0, import_chunk_adx6804h.P)().optional() }).optional(), tasks: q.optional(), extensions: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), t).optional() })), O = k(() => (0, import_chunk_adx6804h.c)({ experimental: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), t).optional(), logging: t.optional(), completions: t.optional(), prompts: (0, import_chunk_adx6804h.c)({ listChanged: (0, import_chunk_adx6804h.P)().optional() }).optional(), resources: (0, import_chunk_adx6804h.c)({ subscribe: (0, import_chunk_adx6804h.P)().optional(), listChanged: (0, import_chunk_adx6804h.P)().optional() }).optional(), tools: (0, import_chunk_adx6804h.c)({ listChanged: (0, import_chunk_adx6804h.P)().optional() }).optional(), tasks: R.optional(), extensions: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), t).optional() })), x = k(() => (0, import_chunk_adx6804h.c)({ progress: (0, import_chunk_adx6804h.E)(), total: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.E)()), message: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.n)()) })), G = k(() => (0, import_chunk_adx6804h.c)({ ...I.shape, ...x.shape, progressToken: r })), L = k(() => b.extend({ method: (0, import_chunk_adx6804h.v)("notifications/progress"), params: G })), H = k(() => I.extend({ level: i, logger: (0, import_chunk_adx6804h.n)().optional(), data: (0, import_chunk_adx6804h.ie)() })), Z = k(() => b.extend({ method: (0, import_chunk_adx6804h.v)("notifications/message"), params: H })), X = k(() => (0, import_chunk_adx6804h.c)({ uri: (0, import_chunk_adx6804h.n)(), mimeType: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.n)()), _meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), ne = k(() => X.extend({ text: (0, import_chunk_adx6804h.n)() })), pe = k(() => X.extend({ blob: u })), de = k(() => (0, import_chunk_adx6804h.c)({ audience: (0, import_chunk_adx6804h.C)(a).optional(), priority: (0, import_chunk_adx6804h.E)().min(0).max(1).optional(), lastModified: (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.aC)({ offset: true }), (0, import_chunk_adx6804h.aC)({ offset: true, precision: -1 })]).optional() })), be = k(() => (0, import_chunk_adx6804h.c)({ ...h.shape, ...p.shape, uri: (0, import_chunk_adx6804h.n)(), description: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.n)()), mimeType: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.n)()), size: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.E)()), annotations: de.optional(), _meta: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.$t)({})) })), ce = k(() => (0, import_chunk_adx6804h.c)({ ...h.shape, ...p.shape, uriTemplate: (0, import_chunk_adx6804h.n)(), description: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.n)()), mimeType: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.n)()), annotations: de.optional(), _meta: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.$t)({})) })), j = k(() => b.extend({ method: (0, import_chunk_adx6804h.v)("notifications/resources/list_changed"), params: I.optional() })), D = k(() => I.extend({ uri: (0, import_chunk_adx6804h.n)() })), J = k(() => b.extend({ method: (0, import_chunk_adx6804h.v)("notifications/resources/updated"), params: D })), T = k(() => (0, import_chunk_adx6804h.c)({ name: (0, import_chunk_adx6804h.n)(), description: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.n)()), required: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.P)()) })), M = k(() => (0, import_chunk_adx6804h.c)({ ...h.shape, ...p.shape, description: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.n)()), arguments: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.C)(T)), _meta: (0, import_chunk_adx6804h.Zd)((0, import_chunk_adx6804h.$t)({})) })), U = k(() => b.extend({ method: (0, import_chunk_adx6804h.v)("notifications/prompts/list_changed"), params: I.optional() })), Y = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("text"), text: (0, import_chunk_adx6804h.n)(), annotations: de.optional(), _meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), Q = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("image"), data: u, mimeType: (0, import_chunk_adx6804h.n)(), annotations: de.optional(), _meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), ae = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("audio"), data: u, mimeType: (0, import_chunk_adx6804h.n)(), annotations: de.optional(), _meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), re = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("tool_use"), name: (0, import_chunk_adx6804h.n)(), id: (0, import_chunk_adx6804h.n)(), input: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()), _meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), me = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("resource"), resource: (0, import_chunk_adx6804h.We)([ne, pe]), annotations: de.optional(), _meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), Oe = k(() => be.extend({ type: (0, import_chunk_adx6804h.v)("resource_link") })), N = k(() => (0, import_chunk_adx6804h.We)([Y, Q, ae, Oe, me])), V = k(() => (0, import_chunk_adx6804h.c)({ role: a, content: N })), K = k(() => (0, import_chunk_adx6804h.c)({ title: (0, import_chunk_adx6804h.n)().optional(), readOnlyHint: (0, import_chunk_adx6804h.P)().optional(), destructiveHint: (0, import_chunk_adx6804h.P)().optional(), idempotentHint: (0, import_chunk_adx6804h.P)().optional(), openWorldHint: (0, import_chunk_adx6804h.P)().optional() })), ee = k(() => b.extend({ method: (0, import_chunk_adx6804h.v)("notifications/tools/list_changed"), params: I.optional() })), te = k(() => (0, import_chunk_adx6804h.c)({ name: (0, import_chunk_adx6804h.n)().optional() })), se = k(() => (0, import_chunk_adx6804h.c)({ hints: (0, import_chunk_adx6804h.C)(te).optional(), costPriority: (0, import_chunk_adx6804h.E)().min(0).max(1).optional(), speedPriority: (0, import_chunk_adx6804h.E)().min(0).max(1).optional(), intelligencePriority: (0, import_chunk_adx6804h.E)().min(0).max(1).optional() })), ye = k(() => (0, import_chunk_adx6804h.c)({ mode: (0, import_chunk_adx6804h.F)(["auto", "required", "none"]).optional() })), ze = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("boolean"), title: (0, import_chunk_adx6804h.n)().optional(), description: (0, import_chunk_adx6804h.n)().optional(), default: (0, import_chunk_adx6804h.P)().optional() })), Te = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("string"), title: (0, import_chunk_adx6804h.n)().optional(), description: (0, import_chunk_adx6804h.n)().optional(), minLength: (0, import_chunk_adx6804h.E)().optional(), maxLength: (0, import_chunk_adx6804h.E)().optional(), format: (0, import_chunk_adx6804h.F)(["email", "uri", "date", "date-time"]).optional(), default: (0, import_chunk_adx6804h.n)().optional() })), Re = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.F)(["number", "integer"]), title: (0, import_chunk_adx6804h.n)().optional(), description: (0, import_chunk_adx6804h.n)().optional(), minimum: (0, import_chunk_adx6804h.E)().optional(), maximum: (0, import_chunk_adx6804h.E)().optional(), default: (0, import_chunk_adx6804h.E)().optional() })), ge = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("string"), title: (0, import_chunk_adx6804h.n)().optional(), description: (0, import_chunk_adx6804h.n)().optional(), enum: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), default: (0, import_chunk_adx6804h.n)().optional() })), De = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("string"), title: (0, import_chunk_adx6804h.n)().optional(), description: (0, import_chunk_adx6804h.n)().optional(), oneOf: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ const: (0, import_chunk_adx6804h.n)(), title: (0, import_chunk_adx6804h.n)() })), default: (0, import_chunk_adx6804h.n)().optional() })), Ee = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("string"), title: (0, import_chunk_adx6804h.n)().optional(), description: (0, import_chunk_adx6804h.n)().optional(), enum: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), enumNames: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), default: (0, import_chunk_adx6804h.n)().optional() })), Be = k(() => (0, import_chunk_adx6804h.We)([ge, De])), Fe = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("array"), title: (0, import_chunk_adx6804h.n)().optional(), description: (0, import_chunk_adx6804h.n)().optional(), minItems: (0, import_chunk_adx6804h.E)().optional(), maxItems: (0, import_chunk_adx6804h.E)().optional(), items: (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("string"), enum: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()) }), default: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional() })), Ye = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("array"), title: (0, import_chunk_adx6804h.n)().optional(), description: (0, import_chunk_adx6804h.n)().optional(), minItems: (0, import_chunk_adx6804h.E)().optional(), maxItems: (0, import_chunk_adx6804h.E)().optional(), items: (0, import_chunk_adx6804h.c)({ anyOf: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ const: (0, import_chunk_adx6804h.n)(), title: (0, import_chunk_adx6804h.n)() })) }), default: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional() })), st = k(() => (0, import_chunk_adx6804h.We)([Fe, Ye])), ot = k(() => (0, import_chunk_adx6804h.We)([Ee, Be, st])), _t = k(() => (0, import_chunk_adx6804h.We)([ot, ze, Te, Re])), yt = k(() => w.extend({ mode: (0, import_chunk_adx6804h.v)("form").optional(), message: (0, import_chunk_adx6804h.n)(), requestedSchema: (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("object"), properties: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), _t), required: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional() }).catchall((0, import_chunk_adx6804h.ie)()) })), vt = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("ref/resource"), uri: (0, import_chunk_adx6804h.n)() })), bt = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("ref/prompt"), name: (0, import_chunk_adx6804h.n)() })), hr = k(() => (0, import_chunk_adx6804h.c)({ uri: (0, import_chunk_adx6804h.n)().startsWith("file://"), name: (0, import_chunk_adx6804h.n)().optional(), _meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), at = S.shape, mr = k(() => (0, import_chunk_adx6804h.c)({ experimental: at.experimental, sampling: at.sampling, elicitation: at.elicitation, roots: at.roots, extensions: at.extensions })), Ve = O.shape, jt = k(() => (0, import_chunk_adx6804h.c)({ experimental: Ve.experimental, logging: Ve.logging, completions: Ve.completions, prompts: Ve.prompts, resources: Ve.resources, tools: Ve.tools, extensions: Ve.extensions })), At = k(() => (0, import_chunk_adx6804h.$t)({ progressToken: r.optional(), [Ze]: (0, import_chunk_adx6804h.n)(), [Bt]: g.optional(), [Q_e]: mr, [Wt]: i.optional() })), Rt = k(() => (0, import_chunk_adx6804h.c)({ ...h.shape, ...p.shape, description: (0, import_chunk_adx6804h.n)().optional(), inputSchema: (0, import_chunk_adx6804h.$t)({ $schema: (0, import_chunk_adx6804h.n)().optional(), type: (0, import_chunk_adx6804h.v)("object") }), outputSchema: (0, import_chunk_adx6804h.$t)({ $schema: (0, import_chunk_adx6804h.n)().optional() }).optional(), annotations: K.optional(), _meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), pr = k(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("tool_result"), toolUseId: (0, import_chunk_adx6804h.n)(), content: (0, import_chunk_adx6804h.C)(N), structuredContent: (0, import_chunk_adx6804h.ie)().optional(), isError: (0, import_chunk_adx6804h.P)().optional(), _meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), Lt = k(() => (0, import_chunk_adx6804h.We)([Y, Q, ae, re, pr])), zt = k(() => (0, import_chunk_adx6804h.c)({ role: a, content: (0, import_chunk_adx6804h.We)([Lt, (0, import_chunk_adx6804h.C)(Lt)]), _meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })), Ut = k(() => (0, import_chunk_adx6804h.n)()), Dt = k(() => (0, import_chunk_adx6804h.$t)({ [qtt]: g.optional().catch(void 0) })), Vt = Dt.optional();
  function Ce(ve) {
    return (0, import_chunk_adx6804h.$t)({ _meta: Vt, resultType: Ut.default("complete"), ...ve });
  }
  let fr = k(() => Ce({})), Ts = k(() => Ce({ nextCursor: s.optional() })), xt = k(() => Ce({ content: (0, import_chunk_adx6804h.C)(N), structuredContent: (0, import_chunk_adx6804h.ie)().optional(), isError: (0, import_chunk_adx6804h.P)().optional() })), gr = k(() => Ce({ ttlMs: (0, import_chunk_adx6804h.E)().int().min(0), cacheScope: (0, import_chunk_adx6804h.F)(["public", "private"]), tools: (0, import_chunk_adx6804h.C)(Rt), nextCursor: s.optional() })), Sr = k(() => Ce({ ttlMs: (0, import_chunk_adx6804h.E)().int().min(0), cacheScope: (0, import_chunk_adx6804h.F)(["public", "private"]), prompts: (0, import_chunk_adx6804h.C)(M), nextCursor: s.optional() })), _r = k(() => Ce({ description: (0, import_chunk_adx6804h.n)().optional(), messages: (0, import_chunk_adx6804h.C)(V) })), yr = k(() => Ce({ ttlMs: (0, import_chunk_adx6804h.E)().int().min(0), cacheScope: (0, import_chunk_adx6804h.F)(["public", "private"]), resources: (0, import_chunk_adx6804h.C)(be), nextCursor: s.optional() })), vr = k(() => Ce({ ttlMs: (0, import_chunk_adx6804h.E)().int().min(0), cacheScope: (0, import_chunk_adx6804h.F)(["public", "private"]), resourceTemplates: (0, import_chunk_adx6804h.C)(ce), nextCursor: s.optional() })), br = k(() => Ce({ ttlMs: (0, import_chunk_adx6804h.E)().int().min(0), cacheScope: (0, import_chunk_adx6804h.F)(["public", "private"]), contents: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.We)([ne, pe])) })), Rr = k(() => Ce({ completion: (0, import_chunk_adx6804h.c)({ values: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).max(100), total: (0, import_chunk_adx6804h.E)().int().optional(), hasMore: (0, import_chunk_adx6804h.P)().optional() }).loose() })), Cs = k(() => Ce({ ttlMs: (0, import_chunk_adx6804h.E)().int().min(0), cacheScope: (0, import_chunk_adx6804h.F)(["public", "private"]) })), zr = k(() => Ce({ ttlMs: (0, import_chunk_adx6804h.E)().int().min(0).catch(0), cacheScope: (0, import_chunk_adx6804h.F)(["public", "private"]).catch("private"), supportedVersions: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), capabilities: jt, instructions: (0, import_chunk_adx6804h.n)().optional() })), nt = k(() => (0, import_chunk_adx6804h.c)({ messages: (0, import_chunk_adx6804h.C)(zt), modelPreferences: se.optional(), systemPrompt: (0, import_chunk_adx6804h.n)().optional(), includeContext: (0, import_chunk_adx6804h.F)(["none", "thisServer", "allServers"]).optional(), temperature: (0, import_chunk_adx6804h.E)().optional(), maxTokens: (0, import_chunk_adx6804h.E)().int(), stopSequences: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), metadata: t.optional(), tools: (0, import_chunk_adx6804h.C)(Rt).optional(), toolChoice: ye.optional() })), wr = k(() => (0, import_chunk_adx6804h.c)({ method: (0, import_chunk_adx6804h.v)("sampling/createMessage"), params: nt })), Er = k(() => (0, import_chunk_adx6804h.c)({ method: (0, import_chunk_adx6804h.v)("roots/list"), params: (0, import_chunk_adx6804h.c)({ _meta: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() }).optional() })), $r = k(() => (0, import_chunk_adx6804h.c)({ ...zt.shape, model: (0, import_chunk_adx6804h.n)(), stopReason: (0, import_chunk_adx6804h.n)().optional() })), Pr = k(() => (0, import_chunk_adx6804h.c)({ roots: (0, import_chunk_adx6804h.C)(hr) })), Tr = k(() => (0, import_chunk_adx6804h.c)({ action: (0, import_chunk_adx6804h.F)(["accept", "decline", "cancel"]), content: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.E)(), (0, import_chunk_adx6804h.P)(), (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)())])).optional() })), Cr = k(() => (0, import_chunk_adx6804h.c)({ mode: (0, import_chunk_adx6804h.v)("url"), message: (0, import_chunk_adx6804h.n)(), url: (0, import_chunk_adx6804h.n)().url() })), kr = k(() => (0, import_chunk_adx6804h.We)([yt, Cr])), Ir = k(() => (0, import_chunk_adx6804h.c)({ method: (0, import_chunk_adx6804h.v)("elicitation/create"), params: kr })), qr = k(() => (0, import_chunk_adx6804h.We)([wr, Er, Ir])), Or = k(() => (0, import_chunk_adx6804h.We)([$r, Pr, Tr])), Nr = k(() => (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), qr)), Mr = k(() => (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), Or)), wt = k(() => Ce({ inputRequests: Nr.optional(), requestState: (0, import_chunk_adx6804h.n)().optional() })), Et = { inputResponses: Mr.optional(), requestState: (0, import_chunk_adx6804h.n)().optional() }, ks = k(() => (0, import_chunk_adx6804h.c)({ _meta: At, ...Et })), Is = k(() => (0, import_chunk_adx6804h.$t)({ progressToken: r.optional() }));
  function Ae(ve, Tt) {
    return (0, import_chunk_adx6804h.c)({ method: (0, import_chunk_adx6804h.v)(ve), params: (0, import_chunk_adx6804h.c)({ _meta: At, ...Tt }) });
  }
  function Le(ve, Tt) {
    return (0, import_chunk_adx6804h.c)({ method: (0, import_chunk_adx6804h.v)(ve), params: (0, import_chunk_adx6804h.c)({ _meta: Is.optional(), ...Tt }).optional() });
  }
  let jr = { name: (0, import_chunk_adx6804h.n)(), arguments: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional(), ...Et }, He = { cursor: s.optional() }, qs = k(() => Ae("tools/call", jr)), Os = k(() => Ae("tools/list", He)), Ns = k(() => Ae("prompts/list", He)), Ms = k(() => Ae("prompts/get", { name: (0, import_chunk_adx6804h.n)(), arguments: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)()).optional(), ...Et })), js = k(() => Ae("resources/list", He)), As = k(() => Ae("resources/templates/list", He)), Ls = k(() => Ae("resources/read", { uri: (0, import_chunk_adx6804h.n)(), ...Et })), Ar = { ref: (0, import_chunk_adx6804h.We)([bt, vt]), argument: (0, import_chunk_adx6804h.c)({ name: (0, import_chunk_adx6804h.n)(), value: (0, import_chunk_adx6804h.n)() }), context: (0, import_chunk_adx6804h.c)({ arguments: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)()).optional() }).optional() }, Us = k(() => Ae("completion/complete", Ar)), Ds = k(() => Ae("server/discover", {})), Ft = k(() => (0, import_chunk_adx6804h.c)({ toolsListChanged: (0, import_chunk_adx6804h.P)().optional(), promptsListChanged: (0, import_chunk_adx6804h.P)().optional(), resourcesListChanged: (0, import_chunk_adx6804h.P)().optional(), resourceSubscriptions: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional() })), Lr = { notifications: Ft }, Vs = k(() => Ae("subscriptions/listen", Lr)), xs = k(() => Dt.extend({ "io.modelcontextprotocol/subscriptionId": o })), Fs = k(() => (0, import_chunk_adx6804h.$t)({ _meta: xs, resultType: Ut.default("complete") })), it = { "tools/call": k(() => Le("tools/call", jr)), "tools/list": k(() => Le("tools/list", He)), "prompts/get": k(() => Le("prompts/get", { name: (0, import_chunk_adx6804h.n)(), arguments: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)()).optional() })), "prompts/list": k(() => Le("prompts/list", He)), "resources/list": k(() => Le("resources/list", He)), "resources/templates/list": k(() => Le("resources/templates/list", He)), "resources/read": k(() => Le("resources/read", { uri: (0, import_chunk_adx6804h.n)() })), "completion/complete": k(() => Le("completion/complete", Ar)), "server/discover": k(() => Le("server/discover", {})), "subscriptions/listen": k(() => Le("subscriptions/listen", Lr)) };
  function Ne(ve) {
    return (0, import_chunk_adx6804h.$t)({ _meta: Vt, ...ve });
  }
  let Hs = { "tools/call": k(() => Ne({ content: (0, import_chunk_adx6804h.C)(N), structuredContent: (0, import_chunk_adx6804h.ie)().optional(), isError: (0, import_chunk_adx6804h.P)().optional() })), "tools/list": k(() => Ne({ ttlMs: (0, import_chunk_adx6804h.E)().int().min(0), cacheScope: (0, import_chunk_adx6804h.F)(["public", "private"]), tools: (0, import_chunk_adx6804h.C)(Rt), nextCursor: s.optional() })), "prompts/get": k(() => Ne({ description: (0, import_chunk_adx6804h.n)().optional(), messages: (0, import_chunk_adx6804h.C)(V) })), "prompts/list": k(() => Ne({ ttlMs: (0, import_chunk_adx6804h.E)().int().min(0), cacheScope: (0, import_chunk_adx6804h.F)(["public", "private"]), prompts: (0, import_chunk_adx6804h.C)(M), nextCursor: s.optional() })), "resources/list": k(() => Ne({ ttlMs: (0, import_chunk_adx6804h.E)().int().min(0), cacheScope: (0, import_chunk_adx6804h.F)(["public", "private"]), resources: (0, import_chunk_adx6804h.C)(be), nextCursor: s.optional() })), "resources/templates/list": k(() => Ne({ ttlMs: (0, import_chunk_adx6804h.E)().int().min(0), cacheScope: (0, import_chunk_adx6804h.F)(["public", "private"]), resourceTemplates: (0, import_chunk_adx6804h.C)(ce), nextCursor: s.optional() })), "resources/read": k(() => Ne({ ttlMs: (0, import_chunk_adx6804h.E)().int().min(0), cacheScope: (0, import_chunk_adx6804h.F)(["public", "private"]), contents: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.We)([ne, pe])) })), "completion/complete": k(() => Ne({ completion: (0, import_chunk_adx6804h.c)({ values: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).max(100), total: (0, import_chunk_adx6804h.E)().int().optional(), hasMore: (0, import_chunk_adx6804h.P)().optional() }).loose() })), "server/discover": k(() => Ne({ ttlMs: (0, import_chunk_adx6804h.E)().int().min(0).catch(0), cacheScope: (0, import_chunk_adx6804h.F)(["public", "private"]).catch("private"), supportedVersions: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), capabilities: jt, instructions: (0, import_chunk_adx6804h.n)().optional() })), "subscriptions/listen": k(() => Ne({})) }, Pt = k(() => (0, import_chunk_adx6804h.$t)({ "io.modelcontextprotocol/subscriptionId": o.optional() })), Ht = k(() => (0, import_chunk_adx6804h.c)({ method: (0, import_chunk_adx6804h.v)("notifications/subscriptions/acknowledged"), params: (0, import_chunk_adx6804h.c)({ _meta: Pt.optional(), notifications: Ft }) })), Kt = k(() => (0, import_chunk_adx6804h.c)({ _meta: Pt.optional(), requestId: o, reason: (0, import_chunk_adx6804h.n)().optional() })), Gt = k(() => (0, import_chunk_adx6804h.c)({ method: (0, import_chunk_adx6804h.v)("notifications/cancelled"), params: Kt })), Wa = { "notifications/cancelled": Gt, "notifications/progress": L, "notifications/message": Z, "notifications/resources/updated": J, "notifications/resources/list_changed": j, "notifications/tools/list_changed": ee, "notifications/prompts/list_changed": U, "notifications/subscriptions/acknowledged": Ht }, Me = (ve) => (0, import_chunk_adx6804h.c)({ jsonrpc: (0, import_chunk_adx6804h.v)("2.0"), id: (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.E)().int()]), result: ve }).strict();
  return { JSONValueSchema: e4, JSONObjectSchema: t, ProgressTokenSchema: r, CursorSchema: s, RequestIdSchema: o, RoleSchema: a, LoggingLevelSchema: i, TaskMetadataSchema: l, RelatedTaskMetadataSchema: d, RequestMetaSchema: m, BaseRequestParamsSchema: _, TaskAugmentedRequestParamsSchema: w, NotificationsParamsSchema: I, NotificationSchema: b, IconSchema: y, IconsSchema: p, BaseMetadataSchema: h, ImplementationSchema: g, ClientTasksCapabilitySchema: q, ServerTasksCapabilitySchema: R, ClientCapabilitiesSchema: S, ServerCapabilitiesSchema: O, ProgressSchema: x, ProgressNotificationParamsSchema: G, ProgressNotificationSchema: L, LoggingMessageNotificationParamsSchema: H, LoggingMessageNotificationSchema: Z, ResourceContentsSchema: X, TextResourceContentsSchema: ne, BlobResourceContentsSchema: pe, AnnotationsSchema: de, ResourceSchema: be, ResourceTemplateSchema: ce, ResourceListChangedNotificationSchema: j, ResourceUpdatedNotificationParamsSchema: D, ResourceUpdatedNotificationSchema: J, PromptArgumentSchema: T, PromptSchema: M, PromptListChangedNotificationSchema: U, TextContentSchema: Y, ImageContentSchema: Q, AudioContentSchema: ae, ToolUseContentSchema: re, EmbeddedResourceSchema: me, ResourceLinkSchema: Oe, ContentBlockSchema: N, PromptMessageSchema: V, ToolAnnotationsSchema: K, ToolListChangedNotificationSchema: ee, ModelHintSchema: te, ModelPreferencesSchema: se, ToolChoiceSchema: ye, BooleanSchemaSchema: ze, StringSchemaSchema: Te, NumberSchemaSchema: Re, UntitledSingleSelectEnumSchemaSchema: ge, TitledSingleSelectEnumSchemaSchema: De, LegacyTitledEnumSchemaSchema: Ee, SingleSelectEnumSchemaSchema: Be, UntitledMultiSelectEnumSchemaSchema: Fe, TitledMultiSelectEnumSchemaSchema: Ye, MultiSelectEnumSchemaSchema: st, EnumSchemaSchema: ot, PrimitiveSchemaDefinitionSchema: _t, ElicitRequestFormParamsSchema: yt, ResourceTemplateReferenceSchema: vt, PromptReferenceSchema: bt, RootSchema: hr, ClientCapabilities2026Schema: mr, ServerCapabilities2026Schema: jt, RequestMetaEnvelopeSchema: At, ToolSchema: Rt, ToolResultContentSchema: pr, SamplingMessageContentBlockSchema: Lt, SamplingMessageSchema: zt, ResultTypeSchema: Ut, ResultMetaSchema: Dt, ResultSchema: fr, PaginatedResultSchema: Ts, CallToolResultSchema: xt, ListToolsResultSchema: gr, ListPromptsResultSchema: Sr, GetPromptResultSchema: _r, ListResourcesResultSchema: yr, ListResourceTemplatesResultSchema: vr, ReadResourceResultSchema: br, CompleteResultSchema: Rr, CacheableResultSchema: Cs, DiscoverResultSchema: zr, CreateMessageRequestParamsSchema: nt, CreateMessageRequestSchema: wr, ListRootsRequestSchema: Er, CreateMessageResultSchema: $r, ListRootsResultSchema: Pr, ElicitResultSchema: Tr, ElicitRequestURLParamsSchema: Cr, ElicitRequestParamsSchema: kr, ElicitRequestSchema: Ir, InputRequestSchema: qr, InputResponseSchema: Or, InputRequestsSchema: Nr, InputResponsesSchema: Mr, InputRequiredResultSchema: wt, InputResponseRequestParamsSchema: ks, CallToolRequestSchema: qs, ListToolsRequestSchema: Os, ListPromptsRequestSchema: Ns, GetPromptRequestSchema: Ms, ListResourcesRequestSchema: js, ListResourceTemplatesRequestSchema: As, ReadResourceRequestSchema: Ls, CompleteRequestSchema: Us, DiscoverRequestSchema: Ds, SubscriptionFilterSchema: Ft, SubscriptionsListenRequestSchema: Vs, SubscriptionsListenResultMetaSchema: xs, SubscriptionsListenResultSchema: Fs, dispatchRequestSchemas: it, dispatchResultSchemas: Hs, NotificationMetaSchema: Pt, SubscriptionsAcknowledgedNotificationSchema: Ht, CancelledNotificationParamsSchema: Kt, CancelledNotificationSchema: Gt, notificationSchemas2026: Wa, JSONRPCResultResponseSchema: k(() => Me(fr)), CallToolResultResponseSchema: k(() => Me((0, import_chunk_adx6804h.We)([xt, wt]))), ListToolsResultResponseSchema: k(() => Me(gr)), ListPromptsResultResponseSchema: k(() => Me(Sr)), GetPromptResultResponseSchema: k(() => Me((0, import_chunk_adx6804h.We)([_r, wt]))), ListResourcesResultResponseSchema: k(() => Me(yr)), ListResourceTemplatesResultResponseSchema: k(() => Me(vr)), ReadResourceResultResponseSchema: k(() => Me((0, import_chunk_adx6804h.We)([br, wt]))), CompleteResultResponseSchema: k(() => Me(Rr)), DiscoverResultResponseSchema: k(() => Me(zr)) };
}
var Ol;
function qt() {
  return Ol ??= ql();
}
var Nl = ["tools/list", "prompts/list", "resources/list", "resources/templates/list", "resources/read", "server/discover"];
function Ml(e4) {
  return Nl.includes(e4);
}
var Mn = Symbol("modelcontextprotocol.resultCacheHintFallback");
function jl(e4) {
  return e4[Mn];
}
function xi(e4) {
  return typeof e4 === "number" && Number.isSafeInteger(e4) && e4 >= 0;
}
function Fi(e4) {
  return e4 === "public" || e4 === "private";
}
var ld = (function(e4) {
  return e4[e4.ParseError = -32700] = "ParseError", e4[e4.InvalidRequest = -32600] = "InvalidRequest", e4[e4.MethodNotFound = -32601] = "MethodNotFound", e4[e4.InvalidParams = -32602] = "InvalidParams", e4[e4.InternalError = -32603] = "InternalError", e4[e4.ResourceNotFound = -32002] = "ResourceNotFound", e4[e4.MissingRequiredClientCapability = -32021] = "MissingRequiredClientCapability", e4[e4.UnsupportedProtocolVersion = -32022] = "UnsupportedProtocolVersion", e4[e4.UrlElicitationRequired = -32042] = "UrlElicitationRequired", e4;
})({}), ef = class e2 extends Error {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.ProtocolError" });
  }
  static [Symbol.hasInstance](t) {
    return Ue(this, t);
  }
  static isInstance(t) {
    if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
    return Ue(this, t);
  }
  constructor(t, r, s) {
    super(r);
    this.code = t, this.data = s, this.name = "ProtocolError", Ot(this, new.target);
  }
  static fromError(t, r, s) {
    if (t === ld.UrlElicitationRequired && s) {
      let o = s;
      if (o.elicitations) return new Ki(o.elicitations, r);
    }
    if (t === ld.UnsupportedProtocolVersion && s) {
      let o = s;
      if (Array.isArray(o.supported) && typeof o.requested === "string") return new Ca({ supported: o.supported, requested: o.requested }, r);
    }
    if (t === ld.InvalidParams || t === ld.ResourceNotFound) {
      let o = s;
      if (typeof o?.uri === "string" && (t === ld.ResourceNotFound || Object.keys(o).length === 1)) return new Hi(o.uri, r);
    }
    if (t === ld.MissingRequiredClientCapability && s) {
      let o = s;
      if (o.requiredCapabilities !== null && typeof o.requiredCapabilities === "object" && !Array.isArray(o.requiredCapabilities)) return new Gi({ requiredCapabilities: o.requiredCapabilities }, r);
    }
    return new e2(t, r, s);
  }
}, Hi = class extends ef {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.ResourceNotFoundError" });
  }
  constructor(e4, t = `Resource not found: ${e4}`) {
    super(ld.InvalidParams, t, { uri: e4 });
  }
  get uri() {
    return this.data.uri;
  }
}, Ki = class extends ef {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.UrlElicitationRequiredError" });
  }
  constructor(e4, t = `URL elicitation${e4.length > 1 ? "s" : ""} required`) {
    super(ld.UrlElicitationRequired, t, { elicitations: e4 });
  }
  get elicitations() {
    return this.data?.elicitations ?? [];
  }
}, Ca = class extends ef {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.UnsupportedProtocolVersionError" });
  }
  constructor(e4, t = `Unsupported protocol version: ${e4.requested}`) {
    super(ld.UnsupportedProtocolVersion, t, e4);
  }
  get supported() {
    return this.data.supported;
  }
  get requested() {
    return this.data.requested;
  }
}, Gi = class extends ef {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.MissingRequiredClientCapabilityError" });
  }
  constructor(e4, t = `Missing required client capabilities: ${Object.keys(e4.requiredCapabilities).join(", ")}`) {
    super(ld.MissingRequiredClientCapability, t, e4);
  }
  get requiredCapabilities() {
    return this.data.requiredCapabilities;
  }
}, Al = 0, Ll = "private", Ul = ["tools/call", "prompts/get", "resources/read"];
function Dl(e4, t) {
  let r = t.resultType;
  if (r === void 0) return { ...t, resultType: "complete" };
  if (r === "complete") return t;
  if (Ul.includes(e4)) return t;
  throw new ef(ld.InternalError, `Handler for ${e4} returned resultType '${String(r)}', but results of ${e4} only support 'complete' on protocol revision 2026-07-28`);
}
function Vl(e4, t) {
  let r = jl(t);
  if (t.resultType !== "complete" || !Ml(e4)) return r === void 0 ? t : Gl(t);
  let s = t, o = xi(s.ttlMs) ? s.ttlMs : Hl(r), a = Fi(s.cacheScope) ? s.cacheScope : Kl(r), i = { ...s, ttlMs: o, cacheScope: a };
  return delete i[Mn], i;
}
function xl(e4) {
  return e4 !== null && typeof e4 === "object" && !Array.isArray(e4);
}
function Fl(e4, t) {
  if (t === void 0) return e4;
  let r = e4._meta;
  if (r === void 0) return { ...e4, _meta: { [qtt]: t } };
  if (!xl(r)) return e4;
  if (r[qtt] !== void 0) return e4;
  return { ...e4, _meta: { ...r, [qtt]: t } };
}
function Hl(e4) {
  return e4 !== void 0 && xi(e4.ttlMs) ? e4.ttlMs : Al;
}
function Kl(e4) {
  return e4 !== void 0 && Fi(e4.cacheScope) ? e4.cacheScope : Ll;
}
function Gl(e4) {
  let t = { ...e4 };
  return delete t[Mn], t;
}
var Jl = ["elicitation/create", "sampling/createMessage", "roots/list"], Ea;
function Ji() {
  if (Ea) return Ea;
  let e4 = qt();
  return Ea = { request: { "elicitation/create": (0, import_chunk_adx6804h.c)({ method: (0, import_chunk_adx6804h.v)("elicitation/create"), params: e4.ElicitRequestParamsSchema }), "sampling/createMessage": (0, import_chunk_adx6804h.c)({ method: (0, import_chunk_adx6804h.v)("sampling/createMessage"), params: e4.CreateMessageRequestParamsSchema }), "roots/list": (0, import_chunk_adx6804h.c)({ method: (0, import_chunk_adx6804h.v)("roots/list"), params: (0, import_chunk_adx6804h.$t)({}).optional() }) }, response: { "elicitation/create": e4.ElicitResultSchema, "sampling/createMessage": e4.CreateMessageResultSchema, "roots/list": e4.ListRootsResultSchema } }, Ea;
}
function Bi(e4) {
  return Jl.includes(e4);
}
function bn(e4) {
  return Bi(e4) ? Ji().request[e4] : void 0;
}
function Bl(e4) {
  return Bi(e4) ? Ji().response[e4] : void 0;
}
var jn = { "tools/call": null, "tools/list": null, "prompts/get": null, "prompts/list": null, "resources/list": null, "resources/templates/list": null, "resources/read": null, "completion/complete": null, "server/discover": null, "subscriptions/listen": null }, Wi = { "notifications/cancelled": null, "notifications/progress": null, "notifications/message": null, "notifications/resources/updated": null, "notifications/resources/list_changed": null, "notifications/tools/list_changed": null, "notifications/prompts/list_changed": null, "notifications/subscriptions/acknowledged": null };
function Yi(e4) {
  return Object.prototype.hasOwnProperty.call(jn, e4);
}
function Xi(e4) {
  return Object.prototype.hasOwnProperty.call(Wi, e4);
}
function Wl(e4) {
  return Object.prototype.hasOwnProperty.call(jn, e4);
}
function Yl(e4) {
  return Yi(e4) ? qt().dispatchRequestSchemas[e4] : void 0;
}
function Xl(e4) {
  return Wl(e4) ? qt().dispatchResultSchemas[e4] : void 0;
}
function Zl(e4) {
  return Xi(e4) ? qt().notificationSchemas2026[e4] : void 0;
}
var vm = Object.keys(jn), bm = Object.keys(Wi);
function fs(e4) {
  return e4 !== null && typeof e4 === "object" && !Array.isArray(e4);
}
function ms(e4, t) {
  if (e4 === void 0) return { ok: false, reason: "not-in-era" };
  let r = e4.safeParse(t);
  return r.success ? { ok: true, value: r.data } : { ok: false, reason: "invalid", message: String(r.error) };
}
var Ql = { ok: false, reason: "not-in-era" }, eu = [Ze, Q_e];
function tu(e4, t) {
  let r = t, s = false, o = () => {
    if (!s) r = { ...r }, s = true;
    return r;
  }, a = t.tools;
  if (e4 === "tools/list" && Array.isArray(a) && a.some((u) => fs(u) && "execution" in u)) o().tools = a.map((u) => {
    if (!fs(u) || !("execution" in u)) return u;
    let l = { ...u };
    return delete l.execution, l;
  });
  let i = t.capabilities;
  if (fs(i) && "tasks" in i) {
    let u = { ...i };
    delete u.tasks, o().capabilities = u;
  }
  return r;
}
var ru = "io.modelcontextprotocol/tasks", su = /* @__PURE__ */ new Set(["working", "input_required", "completed", "failed", "cancelled"]);
function ou(e4) {
  if (e4 === null || typeof e4 !== "object" || Array.isArray(e4)) return false;
  return typeof e4.taskId === "string" && e4.taskId.length > 0 && su.has(e4.status);
}
var An = { era: "2026-07-28", hasRequestMethod: Yi, hasNotificationMethod: Xi, hasInputRequestMethod: (e4) => bn(e4) !== void 0, validateRequest: (e4, t) => ms(Yl(e4), t), validateResult: (e4, t) => ms(Xl(e4), t), validateNotification: (e4, t) => ms(Zl(e4), t), validateInputRequest: (e4, t) => ms(bn(e4), t), validateInputResponse: (e4, t) => ms(Bl(e4), t), samplingResultVariant: () => Ql, outboundEnvelope(e4) {
  return { [Ze]: e4.protocolVersion, [Bt]: e4.clientInfo, [Q_e]: e4.clientCapabilities, ...e4.logLevel !== void 0 && { [Wt]: e4.logLevel } };
}, validateEnvelopeMeta(e4) {
  let t = [];
  for (let s of eu) if (!(s in e4)) t.push({ key: s, problem: "missing" });
  let r = qt().RequestMetaEnvelopeSchema.safeParse(e4);
  if (!r.success) for (let s of r.error.issues) {
    let o = s.path.map(String), a = o.length > 0 ? o.join(".") : "_meta";
    if (o.length === 1 && t.some((i) => i.key === a && i.problem === "missing")) continue;
    t.push({ key: a, problem: s.message });
  }
  return t;
}, projectCallToolResult: (e4) => Ni(e4), inputRequestSchema: bn, decodeResult(e4, t, r) {
  if (!fs(t)) return { kind: "invalid", error: new Xa(Ua.InvalidResult, `Invalid result for ${e4}: not an object`, { method: e4 }) };
  let s = t.resultType;
  if (s === void 0) return { kind: "invalid", error: new Xa(Ua.InvalidResult, `Invalid result for ${e4}: missing required resultType \u2014 servers implementing protocol revision 2026-07-28 MUST include it (the absent-means-complete bridge applies only to earlier-revision servers)`, { method: e4, violation: "missing-resultType" }) };
  if (typeof s !== "string") return { kind: "invalid", error: new Xa(Ua.InvalidResult, `Invalid result for ${e4}: non-string resultType`, { method: e4, resultType: s }) };
  if (s === "input_required") {
    let u = t.inputRequests, l = fs(u) ? u : {}, d = t.requestState;
    if (Object.keys(l).length === 0 && typeof d !== "string") return { kind: "invalid", error: new Xa(Ua.InvalidResult, `Invalid result for ${e4}: input_required carries neither inputRequests nor requestState (every input_required result must include at least one of the two)`, { method: e4, violation: "input-required-missing-both" }) };
    return { kind: "input_required", inputRequests: l, ...typeof d === "string" && { requestState: d } };
  }
  if (s === "task") return { kind: "task", result: t };
  if (s !== "complete") return { kind: "invalid", error: new Xa(Ua.UnsupportedResultType, `Unsupported result type '${s}' for ${e4}`, { resultType: s, method: e4 }) };
  let o = au(), a = Object.hasOwn(o, e4) ? o[e4] : void 0;
  if (a !== void 0 && r !== true) {
    let u = a.safeParse(t);
    if (!u.success) return { kind: "invalid", error: new Xa(Ua.InvalidResult, `Invalid result for ${e4}: ${u.error}`, { method: e4 }) };
  }
  let i = { ...t };
  return delete i.resultType, { kind: "complete", result: i };
}, encodeResult(e4, t, r) {
  return Fl(Vl(e4, Dl(e4, tu(e4, t))), r);
}, encodeErrorCode: (e4) => e4 === -32002 ? -32602 : e4, checkInboundEnvelope(e4) {
  if (e4.envelope === void 0) return "Request is missing the required _meta envelope for protocol revision 2026-07-28 (io.modelcontextprotocol/protocolVersion, io.modelcontextprotocol/clientCapabilities)";
  let t = qt().RequestMetaEnvelopeSchema.safeParse(e4.envelope);
  if (!t.success) return `Invalid _meta envelope for protocol revision 2026-07-28: ${t.error.issues.map((r) => r.message).join("; ")}`;
} }, $a;
function au() {
  if ($a) return $a;
  let e4 = qt();
  return $a = { "tools/call": e4.CallToolResultSchema, "tools/list": e4.ListToolsResultSchema, "prompts/get": e4.GetPromptResultSchema, "prompts/list": e4.ListPromptsResultSchema, "resources/list": e4.ListResourcesResultSchema, "resources/templates/list": e4.ListResourceTemplatesResultSchema, "resources/read": e4.ReadResourceResultSchema, "completion/complete": e4.CompleteResultSchema, "server/discover": e4.DiscoverResultSchema }, $a;
}
var ka = "2026-07-28";
function et(e4) {
  return e4 !== void 0 && tt(e4) ? An : Nn;
}
function wi(e4) {
  if (e4.revision !== void 0) return et(e4.revision).era;
  return e4.era === "modern" ? An.era : Nn.era;
}
function Rn(e4) {
  return Zi.some((t) => t.hasRequestMethod(e4));
}
function wn(e4) {
  return Zi.some((t) => t.hasNotificationMethod(e4));
}
var Zi = [Nn, An], nu = di({ AnnotationsSchema: () => Qe, AudioContentSchema: () => er, BaseMetadataSchema: () => Xe, BaseRequestParamsSchema: () => Pe, BlobResourceContentsSchema: () => Qr, BooleanSchemaSchema: () => os, CallToolRequestParamsSchema: () => Lo, CallToolRequestSchema: () => Uo, CallToolResultSchema: () => ts, CancelTaskRequestSchema: () => dn, CancelTaskResultSchema: () => hn, CancelledNotificationParamsSchema: () => Ys, CancelledNotificationSchema: () => Gr, ClientCapabilitiesSchema: () => eo, ClientNotificationSchema: () => pn, ClientRequestSchema: () => mn, ClientResultSchema: () => fn, ClientTasksCapabilitySchema: () => Zs, CompatibilityCallToolResultSchema: () => hRn, CompleteRequestParamsSchema: () => ua, CompleteRequestSchema: () => da, CompleteResultSchema: () => ha, ContentBlockSchema: () => tr, CreateMessageRequestParamsSchema: () => Xo, CreateMessageRequestSchema: () => Zo, CreateMessageResultSchema: () => Qo, CreateMessageResultWithToolsSchema: () => ea, CreateTaskResultSchema: () => rn, CursorSchema: () => Vr, DiscoverRequestSchema: () => ro, DiscoverResultSchema: () => Ytt, ElicitRequestFormParamsSchema: () => or, ElicitRequestParamsSchema: () => For, ElicitRequestSchema: () => oa, ElicitRequestURLParamsSchema: () => gRn, ElicitResultSchema: () => ia, ElicitationCompleteNotificationParamsSchema: () => aa, ElicitationCompleteNotificationSchema: () => na, EmbeddedResourceSchema: () => ko, EmptyResultSchema: () => Kr, EnumSchemaSchema: () => sa, GetPromptRequestParamsSchema: () => Po, GetPromptRequestSchema: () => To, GetPromptResultSchema: () => Oo, GetTaskPayloadRequestSchema: () => nn, GetTaskPayloadResultSchema: () => cn, GetTaskRequestSchema: () => on, GetTaskResultSchema: () => an, IconSchema: () => Xs, IconsSchema: () => dt, ImageContentSchema: () => Qt, ImplementationSchema: () => aJt, InitializeRequestParamsSchema: () => to, InitializeRequestSchema: () => Jr, InitializeResultSchema: () => lJt, InitializedNotificationSchema: () => Br, JSONArraySchema: () => Za, JSONObjectSchema: () => Se, JSONRPCErrorResponseSchema: () => Hr, JSONRPCMessageSchema: () => o0t, JSONRPCNotificationSchema: () => Ws, JSONRPCRequestSchema: () => Bs, JSONRPCResponseSchema: () => Qa, JSONRPCResultResponseSchema: () => Yt, JSONValueSchema: () => lt, LegacyTitledEnumSchemaSchema: () => is, ListChangedOptionsBaseSchema: () => rs, ListPromptsRequestSchema: () => $o, ListPromptsResultSchema: () => Nor, ListResourceTemplatesRequestSchema: () => io, ListResourceTemplatesResultSchema: () => Dor, ListResourcesRequestSchema: () => no, ListResourcesResultSchema: () => s0t, ListRootsRequestSchema: () => pa, ListRootsResultSchema: () => fa, ListTasksRequestSchema: () => ln, ListTasksResultSchema: () => un, ListToolsRequestSchema: () => Ao, ListToolsResultSchema: () => Ngt, LoggingLevelSchema: () => ss, LoggingMessageNotificationParamsSchema: () => Fo, LoggingMessageNotificationSchema: () => Ho, ModelHintSchema: () => Ko, ModelPreferencesSchema: () => Go, MultiSelectEnumSchemaSchema: () => ra, NotificationSchema: () => qe, NotificationsParamsSchema: () => Ie, NumberSchemaSchema: () => sr, PaginatedRequestParamsSchema: () => ao, PaginatedRequestSchema: () => ht, PaginatedResultSchema: () => mt, PingRequestSchema: () => Wr, PrimitiveSchemaDefinitionSchema: () => us, ProgressNotificationParamsSchema: () => oo, ProgressNotificationSchema: () => Yr, ProgressSchema: () => so, ProgressTokenSchema: () => Dr, PromptArgumentSchema: () => Eo, PromptListChangedNotificationSchema: () => No, PromptMessageSchema: () => qo, PromptReferenceSchema: () => la, PromptSchema: () => Lor, ReadResourceRequestParamsSchema: () => co, ReadResourceRequestSchema: () => lo, ReadResourceResultSchema: () => uo, RelatedTaskMetadataSchema: () => Mor, RequestIdSchema: () => ut, RequestMetaSchema: () => xr, RequestSchema: () => _e, ResourceContentsSchema: () => Xr, ResourceLinkSchema: () => Io, ResourceListChangedNotificationSchema: () => ho, ResourceRequestParamsSchema: () => Xt, ResourceSchema: () => mRn, ResourceTemplateReferenceSchema: () => ca, ResourceTemplateSchema: () => Hor, ResourceUpdatedNotificationParamsSchema: () => zo, ResourceUpdatedNotificationSchema: () => wo, ResultMetaObjectSchema: () => Fr, ResultSchema: () => kW, RoleSchema: () => pt, RootSchema: () => ma, RootsListChangedNotificationSchema: () => ga, SamplingContentSchema: () => Wo, SamplingMessageContentBlockSchema: () => Ct, SamplingMessageSchema: () => Yo, ServerCapabilitiesSchema: () => pRn, ServerNotificationSchema: () => Sn, ServerRequestSchema: () => gn, ServerResultSchema: () => _n, ServerTasksCapabilitySchema: () => Qs, SetLevelRequestParamsSchema: () => Vo, SetLevelRequestSchema: () => xo, SingleSelectEnumSchemaSchema: () => ta, StringSchemaSchema: () => rr, SubscribeRequestParamsSchema: () => mo, SubscribeRequestSchema: () => po, SubscriptionFilterSchema: () => es, SubscriptionsAcknowledgedNotificationParamsSchema: () => yo, SubscriptionsAcknowledgedNotificationSchema: () => vo, SubscriptionsListenRequestParamsSchema: () => So, SubscriptionsListenRequestSchema: () => _o, SubscriptionsListenResultMetaSchema: () => bo, SubscriptionsListenResultSchema: () => Ro, TaskAugmentedRequestParamsSchema: () => It, TaskCreationParamsSchema: () => tn, TaskMetadataSchema: () => Js, TaskSchema: () => ft, TaskStatusNotificationParamsSchema: () => _a, TaskStatusNotificationSchema: () => sn, TaskStatusSchema: () => Sa, TextContentSchema: () => Zt, TextResourceContentsSchema: () => Zr, TitledMultiSelectEnumSchemaSchema: () => ls, TitledSingleSelectEnumSchemaSchema: () => ns, ToolAnnotationsSchema: () => Mo, ToolChoiceSchema: () => Jo, ToolExecutionSchema: () => jo, ToolListChangedNotificationSchema: () => Do, ToolResultContentSchema: () => Bo, ToolSchema: () => Xtt, ToolUseContentSchema: () => Co, UnsubscribeRequestParamsSchema: () => fo, UnsubscribeRequestSchema: () => go, UntitledMultiSelectEnumSchemaSchema: () => cs, UntitledSingleSelectEnumSchemaSchema: () => as });
function Nt(e4) {
  if (e4?.method === void 0 && e4e(e4)) return Yt.parse(e4);
  return o0t.parse(e4);
}
function xe(e4) {
  return typeof e4 === "object" && e4 !== null && !Array.isArray(e4);
}
function Ia(e4) {
  return typeof e4 === "string" || Number.isSafeInteger(e4);
}
function qa(e4, t, r, s, o) {
  for (let a in e4) if (a !== t && a !== r && a !== s && a !== o) return false;
  return true;
}
function Qi(e4) {
  if (e4 === void 0) return true;
  if (!xe(e4)) return false;
  let t = e4._meta;
  if (t === void 0) return true;
  if (!xe(t)) return false;
  if (t.progressToken !== void 0 && !Ia(t.progressToken)) return false;
  let r = t["io.modelcontextprotocol/related-task"];
  return r === void 0 || xe(r) && typeof r.taskId === "string";
}
var Z_e = (e4) => xe(e4) && e4.jsonrpc === "2.0" && Ia(e4.id) && typeof e4.method === "string" && Qi(e4.params) && qa(e4, "jsonrpc", "id", "method", "params"), z9o = (e4) => xe(e4) && e4.jsonrpc === "2.0" && typeof e4.method === "string" && Qi(e4.params) && qa(e4, "jsonrpc", "method", "params"), e4e = (e4) => xe(e4) && e4.jsonrpc === "2.0" && Ia(e4.id) && xe(e4.result) && (e4.result._meta === void 0 || xe(e4.result._meta)) && qa(e4, "jsonrpc", "id", "result"), t4e = (e4) => xe(e4) && e4.jsonrpc === "2.0" && (e4.id === void 0 || Ia(e4.id)) && xe(e4.error) && Number.isSafeInteger(e4.error.code) && typeof e4.error.message === "string" && qa(e4, "jsonrpc", "id", "error");
var ec = (e4) => typeof e4 === "object" && e4 !== null && !Array.isArray(e4) && e4.resultType === "input_required";
var $Yr = (e4) => xe(e4) && e4.method === "initialize" && Jr.safeParse(e4).success, UYr = (e4) => xe(e4) && e4.method === "notifications/initialized" && Br.safeParse(e4).success;
var iu = "Mcp-Param-", Ei = "x-mcp-header", cu = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/, lu = /* @__PURE__ */ new Set(["string", "integer", "boolean", "number"]);
function Ln(e4) {
  let t = [], r = /* @__PURE__ */ new Map(), s = (a, i, u) => {
    if (a === null || typeof a !== "object") return;
    let l = a;
    if (Ei in l) {
      if (!u || i.length === 0) return `${Pa(i)}: x-mcp-header is only permitted on properties statically reachable via a chain of 'properties' keys (not under items, additionalProperties, oneOf/anyOf/allOf/not, if/then/else, or $ref)`;
      let m = l[Ei];
      if (typeof m !== "string" || m.length === 0) return `${Pa(i)}: x-mcp-header MUST be a non-empty string`;
      if (!cu.test(m)) return `${Pa(i)}: x-mcp-header '${m}' is not a valid RFC 9110 token (no spaces, control characters or HTTP delimiters)`;
      let _ = typeof l.type === "string" ? l.type : void 0;
      if (_ === void 0 || !lu.has(_)) return `${Pa(i)}: x-mcp-header is only permitted on primitive-typed properties (string, integer, boolean); got ${_ ?? "<none>"}`;
      let w = m.toLowerCase(), I = r.get(w);
      if (I !== void 0) return `x-mcp-header '${m}' is not case-insensitively unique (also declared as '${I}')`;
      r.set(w, m), t.push({ path: i, headerName: m, type: _ });
    }
    let d = l.properties;
    if (d !== null && typeof d === "object") for (let [m, _] of Object.entries(d)) {
      let w = s(_, [...i, m], u);
      if (w !== void 0) return w;
    }
    for (let m of uu) {
      let _ = l[m];
      if (_ === void 0) continue;
      let w = Array.isArray(_) ? _ : _ !== null && typeof _ === "object" && du.has(m) ? Object.values(_) : [_];
      for (let I of w) {
        let b = s(I, [...i, `<${m}>`], false);
        if (b !== void 0) return b;
      }
    }
  }, o = s(e4, [], true);
  return o === void 0 ? { valid: true, declarations: t } : { valid: false, reason: o };
}
var uu = ["items", "prefixItems", "contains", "additionalProperties", "unevaluatedProperties", "unevaluatedItems", "propertyNames", "patternProperties", "dependentSchemas", "oneOf", "anyOf", "allOf", "not", "if", "then", "else", "$defs", "definitions"], du = /* @__PURE__ */ new Set(["patternProperties", "dependentSchemas", "$defs", "definitions"]);
function Pa(e4) {
  return e4.length === 0 ? "<root>" : e4.join(".");
}
var tc = "=?base64?", rc = "?=";
function hu(e4) {
  if (typeof e4 === "string") return e4;
  if (typeof e4 === "boolean") return e4 ? "true" : "false";
  if (typeof e4 === "number") {
    if (!Number.isFinite(e4)) return;
    if (Number.isInteger(e4) && !Number.isSafeInteger(e4)) return;
    return String(e4);
  }
}
function mu(e4) {
  if (e4.length === 0) return true;
  if (e4.startsWith(tc) && e4.endsWith(rc)) return true;
  if (e4 !== e4.trim()) return true;
  for (let t = 0; t < e4.length; t++) {
    let r = e4.codePointAt(t);
    if (r === 9 || r >= 32 && r <= 126) continue;
    return true;
  }
  return false;
}
function pu(e4) {
  let t = new TextEncoder().encode(e4), r = "";
  for (let s of t) r += String.fromCodePoint(s);
  return btoa(r);
}
function Oa(e4) {
  return mu(e4) ? `${tc}${pu(e4)}${rc}` : e4;
}
function fu(e4, t) {
  let r = e4;
  for (let s of t) {
    if (r === null || typeof r !== "object") return;
    r = r[s];
  }
  return r;
}
function sc(e4, t) {
  let r = {};
  for (let s of e4) {
    let o = fu(t, s.path);
    if (o === void 0 || o === null) continue;
    let a = hu(o);
    if (a === void 0) continue;
    r[`${iu}${s.headerName}`] = Oa(a);
  }
  return r;
}
var ar = -32020, Rm = [{ rung: "http-method", order: 1, evaluatedAt: "edge", codes: [-32e3], conformance: [], rationale: "The modern era is POST-only; GET/DELETE are body-less 2025-era session operations and are method-routed to legacy serving (405 when legacy serving is not configured), before any body is read." }, { rung: "jsonrpc-shape", order: 2, evaluatedAt: "edge", codes: [ld.InvalidRequest], conformance: ["server-stateless"], rationale: "The body must be a JSON-RPC request or notification: posted responses and batch arrays containing a modern or invalid element are rejected before classification (element-wise batch rule); all-legacy arrays stay legacy traffic." }, { rung: "era-classification", order: 3, evaluatedAt: "edge", codes: [ar, ld.UnsupportedProtocolVersion], conformance: ["server-stateless", "http-header-validation", "http-custom-header-server-validation"], rationale: "Body-primary era classification with the protocol-version header as a cross-check; a header/body disagreement is rejected with -32020 (HeaderMismatch), and an envelope-less request on a modern-only endpoint is answered with the unsupported-protocol-version error naming the supported revisions." }, { rung: "envelope", order: 4, evaluatedAt: "edge", codes: [ld.InvalidParams], conformance: ["server-stateless"], rationale: "A present envelope claim with a malformed envelope \u2014 and a missing envelope on a request whose protocol-version header names a modern revision \u2014 is an invalid-params rejection naming the offending or missing key(s); never a silent fall back to legacy handling. This is the only place an invalid-params rejection maps to HTTP 400." }, { rung: "method-registry", order: 5, evaluatedAt: "dispatch", codes: [ld.MethodNotFound], conformance: ["server-stateless"], rationale: "Method existence outranks parameter validity: a method absent from the negotiated revision\u2019s registry (or with no handler installed) answers method-not-found before params or capabilities are looked at." }, { rung: "request-params", order: 6, evaluatedAt: "dispatch", codes: [ld.InvalidParams], conformance: [], rationale: "Per-method params validation; emitted in-band by the dispatch layer (HTTP 200), never via the ladder status table." }, { rung: "standard-header-validation", order: 7, evaluatedAt: "pre-dispatch", codes: [ar], conformance: ["http-header-validation"], rationale: "SEP-2243 standard `Mcp-Method` / `Mcp-Name` headers \u2014 presence, sentinel decoding, and `Mcp-Name` \u2194 body cross-check \u2014 are validated by the HTTP entry on a modern-classified request after the supported-revision gate and before dispatch. The classifier\u2019s own header-mismatch cells (protocol-version, `Mcp-Method` mismatch) stay on the edge `era-classification` rung; this rung carries the entry-layer presence/`Mcp-Name` half. Evaluated before the capability gate, the factory call, and the `Mcp-Param-*` rung so a request that fails several rungs is answered by the standard-header rung first. The documented order (after method-registry 5 and request-params 6) is NOT the observed precedence: serveModern evaluates this rung immediately after the supported-revision gate, so a request that also fails a dispatch rung is answered here before the dispatch rungs (5\u20136) are consulted." }, { rung: "client-capabilities", order: 8, evaluatedAt: "pre-dispatch", codes: [ld.MissingRequiredClientCapability], conformance: ["server-stateless"], rationale: "The capability requirement is checked by the HTTP entry, pre-dispatch, against the validated envelope the classifier produced \u2014 pinning the spec-mandated HTTP 400 independently of how dispatch- and handler-produced errors are mapped. The documented order (after method resolution and params validation) is preserved observably only while the requirement table is empty: once a served method gains a requirement entry, a request that is missing the capability and would also fail a dispatch rung is answered by this gate first, so the entry must consult the method registry before the gate if the documented precedence is to stay observable." }, { rung: "param-header-validation", order: 9, evaluatedAt: "pre-dispatch", codes: [ar], conformance: ["http-custom-header-server-validation"], rationale: "SEP-2243 `Mcp-Param-*` headers are validated against the named tool\u2019s `x-mcp-header` declarations and the body `arguments` after the tool registry is known and before dispatch reaches the handler; a missing/disagreeing/malformed header is rejected 400 / -32020 with the same shape as the standard-header cross-checks. The documented order (after method resolution and params validation) is preserved observably only when the body `arguments` would otherwise validate: the check runs pre-dispatch, so a `tools/call` that fails BOTH this rung and a dispatch-time rung (e.g. order-6 `request-params`, -32602) is answered by this gate first with 400 / -32020, not by the earlier-ordered rung." }], zm = { [ld.ParseError]: 400, [ld.InvalidRequest]: 400, [ld.MethodNotFound]: 404, [ld.UnsupportedProtocolVersion]: 400, [ld.MissingRequiredClientCapability]: 400, [ar]: 400 };
function Na(e4, t) {
  return (0, import_chunk_adx6804h.dLs)(e4, t);
}
function ps(e4) {
  return new Set(e4.flatMap((t) => Object.keys(t.shape)));
}
function Tn(e4) {
  if (e4 == null) return false;
  let t = typeof e4;
  if (t !== "object" && t !== "function") return false;
  if (!("~standard" in e4)) return false;
  return typeof e4["~standard"]?.validate === "function";
}
var $i = false, Cn = "draft-2020-12";
function gu(e4, t = "input") {
  let r = e4["~standard"], s;
  if (r.jsonSchema) s = r.jsonSchema[t]({ target: Cn });
  else if (r.vendor === "zod") {
    if (!("_zod" in e4)) throw Error("Schema appears to be from zod 3, which the SDK cannot convert to JSON Schema. Upgrade to zod >=4.2.0, or wrap your JSON Schema with fromJsonSchema().");
    if (!$i) $i = true, console.warn("[mcp-sdk] Your zod version does not implement `~standard.jsonSchema` (added in zod 4.2.0). Falling back to z.toJSONSchema(). Upgrade to zod >=4.2.0 to silence this warning.");
    s = (0, import_chunk_adx6804h.ise)(e4, { target: Cn, io: t });
  } else throw Error(`Schema library "${r.vendor}" does not implement StandardJSONSchemaV1 (\`~standard.jsonSchema\`). Upgrade to a version that does, or wrap your JSON Schema with fromJsonSchema().`);
  if (t === "output") {
    if (s.type !== void 0) return s;
    return oc(s) ? { type: "object", ...s } : s;
  }
  if (s.type !== void 0 && s.type !== "object") throw Error(`MCP tool and prompt schemas must describe objects (got type: ${JSON.stringify(s.type)}). Wrap your schema in z.object({...}) or equivalent.`);
  return { type: "object", ...s };
}
function oc(e4) {
  if ("properties" in e4 || "patternProperties" in e4 || "additionalProperties" in e4 || "required" in e4) return true;
  for (let t of ["oneOf", "anyOf", "allOf"]) {
    let r = e4[t];
    if (Array.isArray(r) && r.length > 0) return r.every((s) => s !== null && typeof s === "object" && (s.type === "object" || oc(s)));
  }
  return false;
}
function Su(e4) {
  if (!e4.path?.length) return e4.message;
  return `${e4.path.map((t) => String(typeof t === "object" ? t.key : t)).join(".")}: ${e4.message}`;
}
async function En(e4, t) {
  let r = await e4["~standard"].validate(t);
  if (r.issues && r.issues.length > 0) return { success: false, error: r.issues.map((s) => Su(s)).join(", ") };
  return { success: true, data: r.value };
}
function _u(e4) {
  let t = (0, import_chunk_adx6804h.ise)(e4, { target: Cn, io: "input" });
  return typeof t.pattern === "string" ? t.pattern : void 0;
}
var yu = /\\\.\\d\{(\d+)\}/;
function vu(e4) {
  let t = yu.exec(e4), r = [void 0, -1, 0];
  if (t) r.push(Number(t[1]));
  return [false, true].flatMap((s) => [false, true].flatMap((o) => r.map((a) => (0, import_chunk_adx6804h.aC)({ local: s, offset: o, precision: a }))));
}
function bu(e4, t) {
  let r;
  switch (e4) {
    case "email":
      r = [(0, import_chunk_adx6804h.kBl)()];
      break;
    case "uri":
      r = [(0, import_chunk_adx6804h.L6e)()];
      break;
    case "date":
      r = [(0, import_chunk_adx6804h.i5l)()];
      break;
    case "date-time":
      r = vu(t);
      break;
  }
  return new Set(r.map((s) => _u(s)).filter((s) => s !== void 0));
}
function Ru(e4, t, r) {
  if (r !== "zod") return true;
  return bu(e4, t).has(t);
}
function Ss(e4) {
  return typeof e4 === "object" && e4 !== null && !Array.isArray(e4);
}
function zu(e4) {
  try {
    return gu(e4, "input");
  } catch (t) {
    let r = t instanceof Error ? t.message : String(t);
    throw new ef(ld.InvalidParams, `Elicitation requestedSchema must describe an object with flat primitive properties: ${r}`);
  }
}
var wu = /* @__PURE__ */ new Set(["$comment", "deprecated", "description", "examples", "readOnly", "title", "writeOnly"]);
function Un(e4) {
  return wu.has(e4) || e4.startsWith("x-");
}
var Eu = /* @__PURE__ */ new Set(["$schema", ...Object.keys(or.shape.requestedSchema.shape)]), Pi = { string: ps([rr, as, ns, is]), number: ps([sr]), integer: ps([sr]), boolean: ps([os]), array: ps([cs, ls]) }, $u = new Set(rr.shape.format.unwrap().options);
function Pu(e4, t, r, s) {
  if (!Ss(e4)) return e4;
  let o = typeof e4.type === "string" && Object.hasOwn(Pi, e4.type) ? Pi[e4.type] : void 0;
  if (o === void 0) return e4;
  let a = {};
  for (let [i, u] of Object.entries(e4)) if (o.has(i) || Un(i)) a[i] = u;
  else if (i === "pattern" && e4.type === "string" && typeof e4.format === "string") {
    if (!$u.has(e4.format)) a[i] = u;
    else if (typeof u !== "string" || !Ru(e4.format, u, r)) s.push(`${t}.${i}`);
  } else s.push(`${t}.${i}`);
  return a;
}
function Tu(e4, t) {
  let r = {}, s = [];
  for (let [o, a] of Object.entries(e4)) if (o === "properties" && Ss(a)) r[o] = Object.fromEntries(Object.entries(a).map(([i, u]) => [i, Pu(u, `properties.${i}`, t, s)]));
  else if (Eu.has(o)) r[o] = a;
  else if (!Un(o)) s.push(o);
  if (s.length > 0) throw new ef(ld.InvalidParams, `Elicitation requestedSchema contains unsupported JSON Schema constraint(s) after Standard Schema conversion: ${s.join(", ")}`);
  return r;
}
function Cu(e4, t) {
  if (!Ss(e4.properties)) return t;
  let r = Object.entries(e4.properties).filter(([, s]) => !Na(us, s).success).map(([s]) => `properties.${s}`);
  return r.length > 0 ? r.join(", ") : t;
}
function kn(e4, t, r = "") {
  if (Array.isArray(e4) && Array.isArray(t)) return e4.flatMap((s, o) => kn(s, t[o], `${r}[${o}]`));
  if (!Ss(e4) || !Ss(t)) return [];
  return Object.entries(e4).flatMap(([s, o]) => {
    let a = r ? `${r}.${s}` : s;
    if (!Object.prototype.hasOwnProperty.call(t, s)) return Un(s) ? [] : [a];
    return kn(o, t[s], a);
  });
}
function ku(e4) {
  if (!Tn(e4.requestedSchema)) return { ...e4, mode: "form", requestedSchema: e4.requestedSchema };
  let t = e4.requestedSchema["~standard"].vendor, r = Tu(zu(e4.requestedSchema), t), s = Na(or.shape.requestedSchema, r);
  if (!s.success) throw new ef(ld.InvalidParams, `Elicitation requestedSchema only supports flat primitive properties (string, number, integer, boolean, and string enums): ${Cu(r, s.error.message)}`);
  let o = kn(r, s.data);
  if (o.length > 0) throw new ef(ld.InvalidParams, `Elicitation requestedSchema contains unsupported JSON Schema constraint(s) after Standard Schema conversion: ${o.join(", ")}`);
  let a = (s.data.required ?? []).filter((i) => !Object.prototype.hasOwnProperty.call(s.data.properties, i));
  if (a.length > 0) throw new ef(ld.InvalidParams, `Elicitation requestedSchema lists required properties that are not defined in properties: ${a.join(", ")}`);
  return { ...e4, mode: "form", requestedSchema: s.data };
}
function Iu(e4) {
  let t = e4.inputRequests !== void 0 && Object.keys(e4.inputRequests).length > 0, r = typeof e4.requestState === "string";
  if (!t && !r) throw TypeError("inputRequired() requires at least one of inputRequests (with at least one entry) or requestState (spec: every InputRequiredResult MUST include at least one of the two)");
  return { resultType: "input_required", ...e4.inputRequests !== void 0 && { inputRequests: e4.inputRequests }, ...e4.requestState !== void 0 && { requestState: e4.requestState } };
}
var wm = Object.assign(Iu, { elicit(e4) {
  try {
    return { method: "elicitation/create", params: ku(e4) };
  } catch (t) {
    throw t instanceof ef ? TypeError(t.message, { cause: t }) : t;
  }
}, elicitUrl(e4) {
  return { method: "elicitation/create", params: { ...e4, mode: "url" } };
}, createMessage(e4) {
  return { method: "sampling/createMessage", params: e4 };
}, listRoots() {
  return { method: "roots/list" };
} });
var qu = true, Ou = 10, Nu = 250;
function ac(e4) {
  return { autoFulfill: e4?.autoFulfill ?? qu, maxRounds: e4?.maxRounds ?? Ou };
}
function Mu(e4, t, r) {
  let s = t !== void 0 && Object.keys(t).length > 0;
  if (!s && r === void 0) return e4;
  return { ...e4, ...s && { inputResponses: t }, ...r !== void 0 && { requestState: r } };
}
function ju(e4, t) {
  return `Multi-round-trip request '${e4}' still required input after ${t} rounds (inputRequired.maxRounds)`;
}
function Au(e4, t) {
  return new Promise((r, s) => {
    if (t?.aborted) {
      s(t.reason instanceof Xa ? t.reason : new Xa(Ua.RequestTimeout, String(t.reason)));
      return;
    }
    let o = setTimeout(() => {
      t?.removeEventListener("abort", a), r();
    }, e4), a = () => {
      clearTimeout(o), s(t?.reason instanceof Xa ? t.reason : new Xa(Ua.RequestTimeout, String(t?.reason)));
    };
    t?.addEventListener("abort", a, { once: true });
  });
}
function Lu(e4) {
  let t = new AbortController(), r = () => t.abort(e4?.reason);
  if (e4?.addEventListener("abort", r, { once: true }), e4?.aborted) t.abort(e4.reason);
  return { signal: t.signal, abort: (s) => t.abort(s), dispose: () => e4?.removeEventListener("abort", r) };
}
async function Uu(e4) {
  let { config: t, method: r, originalParams: s, requestOptions: o, hooks: a, signal: i } = e4, u = e4.flowStartedAt ?? Date.now(), l = e4.firstPayload, d = 0;
  while (true) {
    if (d += 1, d > t.maxRounds) throw new Xa(Ua.InputRequiredRoundsExceeded, ju(r, t.maxRounds), { rounds: t.maxRounds, lastResult: { inputRequests: l.inputRequests, ...l.requestState !== void 0 && { requestState: l.requestState } } });
    o.onprogress?.({ progress: d, message: `Fulfilling input required by '${r}' (round ${d})` });
    let m = Object.entries(l.inputRequests ?? {}), _;
    if (m.length > 0) {
      let b = Lu(i);
      try {
        let y = await Promise.all(m.map(async ([p, h]) => {
          try {
            return [p, await a.dispatchInputRequest(p, h, b.signal)];
          } catch (g) {
            throw b.abort(g), g;
          }
        }));
        _ = Object.fromEntries(y);
      } finally {
        b.dispose();
      }
    } else await Au(Nu, i);
    let w = { ...o.timeout !== void 0 && { timeout: o.timeout } };
    if (o.maxTotalTimeout !== void 0) {
      let b = Date.now() - u, y = o.maxTotalTimeout - b;
      if (y <= 0) throw new Xa(Ua.RequestTimeout, "Maximum total timeout exceeded", { maxTotalTimeout: o.maxTotalTimeout, totalElapsed: b });
      w.maxTotalTimeout = y;
    }
    let I = await a.retry(Mu(s, _, l.requestState), w);
    if (ec(I)) {
      l = { inputRequests: I.inputRequests ?? {}, ...I.requestState !== void 0 && { requestState: I.requestState } };
      continue;
    }
    return I;
  }
}
var Du = ["AnnotationsSchema", "AudioContentSchema", "BaseMetadataSchema", "BlobResourceContentsSchema", "BooleanSchemaSchema", "CallToolRequestSchema", "CallToolRequestParamsSchema", "CallToolResultSchema", "CancelledNotificationSchema", "CancelledNotificationParamsSchema", "CancelTaskRequestSchema", "CancelTaskResultSchema", "ClientCapabilitiesSchema", "ClientNotificationSchema", "ClientRequestSchema", "ClientResultSchema", "CompatibilityCallToolResultSchema", "CompleteRequestSchema", "CompleteRequestParamsSchema", "CompleteResultSchema", "ContentBlockSchema", "CreateMessageRequestSchema", "CreateMessageRequestParamsSchema", "CreateMessageResultSchema", "CreateMessageResultWithToolsSchema", "CreateTaskResultSchema", "CursorSchema", "DiscoverRequestSchema", "DiscoverResultSchema", "ElicitationCompleteNotificationSchema", "ElicitationCompleteNotificationParamsSchema", "ElicitRequestSchema", "ElicitRequestFormParamsSchema", "ElicitRequestParamsSchema", "ElicitRequestURLParamsSchema", "ElicitResultSchema", "EmbeddedResourceSchema", "EmptyResultSchema", "EnumSchemaSchema", "GetPromptRequestSchema", "GetPromptRequestParamsSchema", "GetPromptResultSchema", "GetTaskPayloadRequestSchema", "GetTaskPayloadResultSchema", "GetTaskRequestSchema", "GetTaskResultSchema", "IconSchema", "IconsSchema", "ImageContentSchema", "ImplementationSchema", "InitializedNotificationSchema", "InitializeRequestSchema", "InitializeRequestParamsSchema", "InitializeResultSchema", "JSONArraySchema", "JSONObjectSchema", "JSONRPCErrorResponseSchema", "JSONRPCMessageSchema", "JSONRPCNotificationSchema", "JSONRPCRequestSchema", "JSONRPCResponseSchema", "JSONRPCResultResponseSchema", "JSONValueSchema", "LegacyTitledEnumSchemaSchema", "ListPromptsRequestSchema", "ListPromptsResultSchema", "ListResourcesRequestSchema", "ListResourcesResultSchema", "ListResourceTemplatesRequestSchema", "ListResourceTemplatesResultSchema", "ListRootsRequestSchema", "ListRootsResultSchema", "ListTasksRequestSchema", "ListTasksResultSchema", "ListToolsRequestSchema", "ListToolsResultSchema", "LoggingLevelSchema", "LoggingMessageNotificationSchema", "LoggingMessageNotificationParamsSchema", "ModelHintSchema", "ModelPreferencesSchema", "MultiSelectEnumSchemaSchema", "NotificationSchema", "NumberSchemaSchema", "PaginatedRequestSchema", "PaginatedRequestParamsSchema", "PaginatedResultSchema", "PingRequestSchema", "PrimitiveSchemaDefinitionSchema", "ProgressSchema", "ProgressNotificationSchema", "ProgressNotificationParamsSchema", "ProgressTokenSchema", "PromptSchema", "PromptArgumentSchema", "PromptListChangedNotificationSchema", "PromptMessageSchema", "PromptReferenceSchema", "ReadResourceRequestSchema", "ReadResourceRequestParamsSchema", "ReadResourceResultSchema", "RelatedTaskMetadataSchema", "RequestSchema", "RequestIdSchema", "RequestMetaSchema", "ResourceSchema", "ResourceContentsSchema", "ResourceLinkSchema", "ResourceListChangedNotificationSchema", "ResourceRequestParamsSchema", "ResourceTemplateSchema", "ResourceTemplateReferenceSchema", "ResourceUpdatedNotificationSchema", "ResourceUpdatedNotificationParamsSchema", "ResultMetaObjectSchema", "ResultSchema", "RoleSchema", "RootSchema", "RootsListChangedNotificationSchema", "SamplingContentSchema", "SamplingMessageSchema", "SamplingMessageContentBlockSchema", "ServerCapabilitiesSchema", "ServerNotificationSchema", "ServerRequestSchema", "ServerResultSchema", "SetLevelRequestSchema", "SetLevelRequestParamsSchema", "SingleSelectEnumSchemaSchema", "StringSchemaSchema", "SubscribeRequestSchema", "SubscribeRequestParamsSchema", "SubscriptionFilterSchema", "SubscriptionsAcknowledgedNotificationSchema", "SubscriptionsAcknowledgedNotificationParamsSchema", "SubscriptionsListenRequestSchema", "SubscriptionsListenRequestParamsSchema", "SubscriptionsListenResultSchema", "SubscriptionsListenResultMetaSchema", "TaskAugmentedRequestParamsSchema", "TaskCreationParamsSchema", "TaskMetadataSchema", "TaskSchema", "TaskStatusSchema", "TaskStatusNotificationSchema", "TaskStatusNotificationParamsSchema", "TextContentSchema", "TextResourceContentsSchema", "TitledMultiSelectEnumSchemaSchema", "TitledSingleSelectEnumSchemaSchema", "ToolSchema", "ToolAnnotationsSchema", "ToolChoiceSchema", "ToolExecutionSchema", "ToolListChangedNotificationSchema", "ToolResultContentSchema", "ToolUseContentSchema", "UnsubscribeRequestSchema", "UnsubscribeRequestParamsSchema", "UntitledMultiSelectEnumSchemaSchema", "UntitledSingleSelectEnumSchemaSchema"], Vu = { IdJagTokenExchangeResponseSchema: va, OAuthClientInformationFullSchema: hs, OAuthClientInformationSchema: Ra, OAuthClientMetadataSchema: ba, OAuthClientRegistrationErrorSchema: yn, OAuthErrorResponseSchema: uJt, OAuthMetadataSchema: dJt, OAuthProtectedResourceMetadataSchema: ds, OAuthTokenRevocationRequestSchema: vn, OAuthTokensSchema: cJt, OpenIdProviderDiscoveryMetadataSchema: _Rn, OpenIdProviderMetadataSchema: ya }, nc = {}, ic = {};
function cc(e4, t) {
  let r = e4.slice(0, -6);
  nc[r] = t, ic[r] = (s) => t.safeParse(s).success;
}
for (let e4 of Du) cc(e4, nu[e4]);
for (let [e4, t] of Object.entries(Vu)) cc(e4, t);
var xu = Object.freeze(nc), lc = Object.freeze(ic);
function Fu(e4) {
  switch (e4) {
    case "initialize":
    case "notifications/initialized":
      return et(void 0);
    case "server/discover":
      return et(ka);
    default:
      return;
  }
}
var vs = 6e4, Hu = [Ze, Bt, Q_e, Wt], Ku = ["inputResponses", "requestState"];
function Ti(e4, t) {
  let r = e4.params;
  if (!gs(r)) return { message: e4, lifted: {} };
  let s = r._meta, o = gs(s) ? Hu.filter((l) => l in s) : [], a = t === "request" ? Ku.filter((l) => l in r) : [];
  if (o.length === 0 && a.length === 0) return { message: e4, lifted: {} };
  let i = {}, u = { ...r };
  if (o.length > 0 && gs(s)) {
    let l = {}, d = { ...s };
    for (let m of o) l[m] = s[m], delete d[m];
    if (i.envelope = l, Object.keys(d).length > 0) u._meta = d;
    else delete u._meta;
  }
  for (let l of a) {
    if (l === "inputResponses") i.inputResponses = u[l];
    if (l === "requestState") i.requestState = u[l];
    delete u[l];
  }
  return { message: { ...e4, params: u }, lifted: i };
}
function Ci(e4, t) {
  let r = e4.validateResult(t, void 0);
  if (!r.ok && r.reason === "not-in-era") return;
  return { "~standard": { version: 1, vendor: "mcp-wire-codec", validate(s) {
    let o = e4.validateResult(t, s);
    if (o.ok) return { value: o.value };
    return { issues: [{ message: o.reason === "invalid" ? o.message : `not-in-era: ${t}` }] };
  } } };
}
function Dn(e4) {
  return () => e4;
}
var Gu = Dn(void 0), Ju, uc = class {
  _transport;
  _requestMessageId = 0;
  _requestHandlers = /* @__PURE__ */ new Map();
  _requestHandlerAbortControllers = /* @__PURE__ */ new Map();
  _notificationHandlers = /* @__PURE__ */ new Map();
  _responseHandlers = /* @__PURE__ */ new Map();
  _progressHandlers = /* @__PURE__ */ new Map();
  _timeoutInfo = /* @__PURE__ */ new Map();
  _pendingDebouncedNotifications = /* @__PURE__ */ new Set();
  _negotiatedProtocolVersion;
  static {
    Ju = (e4, t) => {
      e4._negotiatedProtocolVersion = t;
    };
  }
  _supportedProtocolVersions;
  onclose;
  onerror;
  fallbackRequestHandler;
  fallbackNotificationHandler;
  constructor(e4) {
    this._options = e4, this._supportedProtocolVersions = e4?.supportedProtocolVersions ?? iJt, this.setNotificationHandler("notifications/cancelled", (t) => {
      this._oncancel(t);
    }), this.setNotificationHandler("notifications/progress", (t) => {
      this._onprogress(t);
    }), this.setRequestHandler("ping", (t) => ({}));
  }
  _shouldDropInbound(e4) {
  }
  _outboundMetaEnvelope() {
  }
  _envelopeOutbound(e4) {
    let t = this._outboundMetaEnvelope();
    if (t === void 0) return e4;
    let r = e4.params ?? {};
    return { ...e4, params: { ...r, _meta: { ...t, ...r._meta } } };
  }
  _resolveNonCompleteResult(e4, t) {
    return Promise.reject(new Xa(Ua.UnsupportedResultType, `Unsupported result type '${e4.kind}' for ${t.request.method}`, { resultType: e4.kind, method: t.request.method }));
  }
  _getRequestHandler(e4) {
    return this._requestHandlers.get(e4);
  }
  async _oncancel(e4) {
    if (!e4.params.requestId) return;
    this._requestHandlerAbortControllers.get(e4.params.requestId)?.abort(e4.params.reason);
  }
  _setupTimeout(e4, t, r, s, o = false) {
    this._timeoutInfo.set(e4, { timeoutId: setTimeout(s, t), startTime: Date.now(), timeout: t, maxTotalTimeout: r, resetTimeoutOnProgress: o, onTimeout: s });
  }
  _resetTimeout(e4) {
    let t = this._timeoutInfo.get(e4);
    if (!t) return false;
    let r = Date.now() - t.startTime;
    if (t.maxTotalTimeout && r >= t.maxTotalTimeout) throw this._timeoutInfo.delete(e4), new Xa(Ua.RequestTimeout, "Maximum total timeout exceeded", { maxTotalTimeout: t.maxTotalTimeout, totalElapsed: r });
    return clearTimeout(t.timeoutId), t.timeoutId = setTimeout(t.onTimeout, t.timeout), true;
  }
  _cleanupTimeout(e4) {
    let t = this._timeoutInfo.get(e4);
    if (t) clearTimeout(t.timeoutId), this._timeoutInfo.delete(e4);
  }
  async connect(e4) {
    this._transport = e4;
    let t = this.transport?.onclose;
    this._transport.onclose = () => {
      try {
        t?.();
      } finally {
        this._onclose();
      }
    };
    let r = this.transport?.onerror;
    this._transport.onerror = (o) => {
      r?.(o), this._onerror(o);
    };
    let s = this._transport?.onmessage;
    this._transport.onmessage = (o, a) => {
      if (s?.(o, a), e4e(o) || t4e(o)) this._onresponse(o);
      else if (Z_e(o)) this._onrequest(o, a);
      else if (z9o(o)) this._onnotification(o, a);
      else this._onerror(Error(`Unknown message type: ${JSON.stringify(o)}`));
    }, e4.setSupportedProtocolVersions?.(this._supportedProtocolVersions), await this._transport.start();
  }
  _onclose() {
    let e4 = this._responseHandlers;
    this._responseHandlers = /* @__PURE__ */ new Map(), this._progressHandlers.clear(), this._pendingDebouncedNotifications.clear();
    for (let s of this._timeoutInfo.values()) clearTimeout(s.timeoutId);
    this._timeoutInfo.clear();
    let t = this._requestHandlerAbortControllers;
    this._requestHandlerAbortControllers = /* @__PURE__ */ new Map();
    let r = new Xa(Ua.ConnectionClosed, "Connection closed");
    this._transport = void 0;
    try {
      this.onclose?.();
    } finally {
      for (let s of e4.values()) s(r);
      for (let s of t.values()) s.abort(r);
    }
  }
  _onerror(e4) {
    this.onerror?.(e4);
  }
  _onnotification(e4, t) {
    let { message: r } = Ti(e4, "notification"), s = this._negotiatedWireCodec();
    if (t?.classification === void 0 && this._shouldDropInbound(e4) === "drop") return;
    if (t?.classification !== void 0) {
      let i = wi(t.classification);
      if (i !== s.era) {
        this._onerror(Error(`Era mismatch on inbound notification '${r.method}': classified as ${i} but this instance serves ${s.era}`));
        return;
      }
    }
    if (wn(r.method) && !s.hasNotificationMethod(r.method)) return;
    let o = this._notificationHandlers.get(r.method), a = this.fallbackNotificationHandler;
    if (o === void 0 && a === void 0) return;
    Promise.resolve().then(() => o === void 0 ? a(r) : o(r, s)).catch((i) => this._onerror(Error(`Uncaught error in notification handler: ${i}`)));
  }
  _onrequest(e4, t) {
    let { message: r, lifted: s } = Ti(e4, "request"), o = this._negotiatedWireCodec();
    if (t?.classification === void 0 && this._shouldDropInbound(e4) === "drop") {
      this._onerror(Error(`Dropped inbound request '${e4.method}': not servable on this connection's protocol era`));
      return;
    }
    let a = this._transport, i = (y, p, h) => {
      let g = { jsonrpc: "2.0", id: r.id, error: { code: y, message: p, ...h !== void 0 && { data: h } } };
      a?.send(g).catch((f) => this._onerror(Error(`Failed to send an error response: ${f}`)));
    };
    if (t?.classification !== void 0) {
      let y = wi(t.classification);
      if (y !== o.era) {
        this._onerror(Error(`Era mismatch on inbound request '${r.method}': classified as ${y} but this instance serves ${o.era}`));
        let p = t.classification.revision ?? y;
        i(ld.UnsupportedProtocolVersion, `Unsupported protocol version: ${p}`, { supported: this._supportedProtocolVersions, requested: p });
        return;
      }
    }
    if (Rn(r.method) && !o.hasRequestMethod(r.method)) {
      i(ld.MethodNotFound, "Method not found");
      return;
    }
    let u = this._requestHandlers.get(r.method) ?? this.fallbackRequestHandler;
    if (u === void 0) {
      i(ld.MethodNotFound, "Method not found");
      return;
    }
    let l = o.checkInboundEnvelope(s);
    if (l !== void 0) {
      i(ld.InvalidParams, l);
      return;
    }
    let d = (y, p) => this._notificationViaCodec(this._resolveOutboundCodec(y.method), y, { ...p, relatedRequestId: r.id }), m = (y, p, h) => this._requestWithSchemaViaCodec(this._resolveOutboundCodec(y.method), y, p, { ...h, relatedRequestId: r.id }), _ = new AbortController();
    this._requestHandlerAbortControllers.set(r.id, _);
    let w = s.inputResponses === void 0 ? void 0 : Bu(s.inputResponses), I = { sessionId: a?.sessionId, mcpReq: { id: r.id, method: r.method, _meta: r.params?._meta, ...s.envelope !== void 0 && { envelope: s.envelope }, ...w !== void 0 && { inputResponses: w.accepted }, ...w !== void 0 && w.droppedKeys.length > 0 && { droppedInputResponseKeys: w.droppedKeys }, requestState: s.requestState === void 0 ? Gu : Dn(s.requestState), signal: _.signal, send: (y, p, h) => {
      let g = this._resolveOutboundCodec(y.method);
      if (this._assertOutboundRequestInEra(g, y.method), Tn(p)) return m(y, p, h);
      let f = Ci(g, y.method);
      if (f === void 0) throw TypeError(`'${y.method}' is not a spec method; pass a result schema as the second argument to ctx.mcpReq.send().`);
      return m(y, f, p);
    }, notify: d }, http: t?.authInfo ? { authInfo: t.authInfo } : void 0 }, b = this.buildContext(I, t);
    Promise.resolve().then(() => u(r, b)).then(async (y) => {
      if (_.signal.aborted) return;
      let p;
      try {
        p = o.encodeResult(r.method, y, this._outboundServerInfo());
      } catch (g) {
        this._onerror(Error(`Failed to encode result for ${r.method}: ${g}`)), i(ld.InternalError, "Internal error");
        return;
      }
      let h = { result: p, jsonrpc: "2.0", id: r.id };
      await a?.send(h);
    }, async (y) => {
      if (_.signal.aborted) return;
      let p = Number.isSafeInteger(y.code) ? y.code : ld.InternalError, h = { jsonrpc: "2.0", id: r.id, error: { code: o.encodeErrorCode(p), message: y.message ?? "Internal error", ...y.data !== void 0 && { data: y.data } } };
      await a?.send(h);
    }).catch((y) => this._onerror(Error(`Failed to send response: ${y}`))).finally(() => {
      if (this._requestHandlerAbortControllers.get(r.id) === _) this._requestHandlerAbortControllers.delete(r.id);
    });
  }
  _onprogress(e4) {
    let { progressToken: t, ...r } = e4.params, s = Number(t), o = this._progressHandlers.get(s);
    if (!o) {
      this._onerror(Error(`Received a progress notification for an unknown token: ${JSON.stringify(e4)}`));
      return;
    }
    let a = this._responseHandlers.get(s), i = this._timeoutInfo.get(s);
    if (i && a && i.resetTimeoutOnProgress) try {
      this._resetTimeout(s);
    } catch (u) {
      this._responseHandlers.delete(s), this._progressHandlers.delete(s), this._cleanupTimeout(s), a(u);
      return;
    }
    o(r);
  }
  _onresponse(e4) {
    let t = Number(e4.id), r = this._responseHandlers.get(t);
    if (r === void 0) {
      this._onerror(Error(`Received a response for an unknown message ID: ${JSON.stringify(e4)}`));
      return;
    }
    if (this._responseHandlers.delete(t), this._cleanupTimeout(t), this._progressHandlers.delete(t), e4e(e4)) r(e4);
    else r(ef.fromError(e4.error.code, e4.error.message, e4.error.data));
  }
  get transport() {
    return this._transport;
  }
  async close() {
    await this._transport?.close();
  }
  request(e4, t, r) {
    let s = this._resolveOutboundCodec(e4.method);
    if (this._assertOutboundRequestInEra(s, e4.method), Tn(t)) return this._requestWithSchemaViaCodec(s, e4, t, r);
    let o = Ci(s, e4.method);
    if (o === void 0) throw TypeError(`'${e4.method}' is not a spec method; pass a result schema as the second argument to request().`);
    return this._requestWithSchemaViaCodec(s, e4, o, t);
  }
  _negotiatedWireCodec() {
    return et(this._negotiatedProtocolVersion);
  }
  _wireCodec() {
    return this._negotiatedWireCodec();
  }
  _resolveOutboundCodec(e4) {
    if (this._negotiatedProtocolVersion === void 0) {
      let t = Fu(e4);
      if (t) return t;
    }
    return this._negotiatedWireCodec();
  }
  _assertOutboundRequestInEra(e4, t) {
    if (t.startsWith("tasks/")) return;
    if (Rn(t) && !e4.hasRequestMethod(t)) throw new Xa(Ua.MethodNotSupportedByProtocolVersion, `Method '${t}' is not supported by the negotiated protocol version (wire era ${e4.era})`, { method: t, era: e4.era });
  }
  _requestWithSchema(e4, t, r) {
    let s = this._resolveOutboundCodec(e4.method);
    return this._assertOutboundRequestInEra(s, e4.method), this._requestWithSchemaViaCodec(s, e4, t, r);
  }
  _requestWithSchemaViaCodec(e4, t, r, s) {
    let { relatedRequestId: o, resumptionToken: a, onresumptiontoken: i, headers: u } = s ?? {}, l = Date.now(), d, m;
    return new Promise((_, w) => {
      let I = (R) => {
        w(R);
      };
      if (!this._transport) {
        I(Error("Not connected"));
        return;
      }
      if (this._options?.enforceStrictCapabilities === true) try {
        this.assertCapabilityForMethod(t.method);
      } catch (R) {
        I(R);
        return;
      }
      if (s?.signal?.aborted) {
        let R = s.signal.reason;
        throw R instanceof Xa ? R : new Xa(Ua.RequestTimeout, String(R));
      }
      let b = e4.era === ka && this._transport.hasPerRequestStream === true ? new AbortController() : void 0, y = this._requestMessageId++;
      m = y;
      let p = { ...t, jsonrpc: "2.0", id: y };
      if (s?.onprogress) this._progressHandlers.set(y, s.onprogress), p.params = { ...t.params, _meta: { ...t.params?._meta, progressToken: y } };
      let h = this._envelopeOutbound(p), g = false, f = (R) => {
        if (g) return;
        if (this._progressHandlers.delete(y), b === void 0) this._transport?.send(this._envelopeOutbound({ jsonrpc: "2.0", method: "notifications/cancelled", params: { requestId: y, reason: String(R) } }), { relatedRequestId: o, resumptionToken: a, onresumptiontoken: i }).catch((S) => this._onerror(Error(`Failed to send cancellation: ${S}`)));
        else b.abort();
        w(R instanceof Xa ? R : new Xa(Ua.RequestTimeout, String(R)));
      };
      if (t.method === "skills/get") this._transport._ownAnswerIds?.add(y);
      this._responseHandlers.set(y, (R) => {
        if (s?.signal?.aborted) return;
        if (g = true, R instanceof Error) return w(R);
        if (s?.allowUploadRequired === true && e4.era === "2026-07-28") {
          let G = R.result;
          if (typeof G === "object" && G !== null && !Array.isArray(G) && G.resultType === "upload_required") return _(G);
        }
        let S = r?.["~standard"]?.vendor === "mcp-wire-codec", O;
        try {
          O = e4.decodeResult(t.method, R.result, S);
        } catch (G) {
          return w(G instanceof Error ? G : Error(String(G)));
        }
        if (O.kind === "invalid") return w(O.error);
        if (O.kind === "task") {
          if (s?.allowTask === true && this._capabilities?.extensions?.[ru] !== void 0 && ou(O.result)) return _(O.result);
          return w(new Xa(Ua.UnsupportedResultType, `Unsupported result type 'task' for ${t.method}`, { method: t.method }));
        }
        if (O.kind === "input_required") {
          if (s?.allowInputRequired === true) return _(Zu(O));
          let G = { codec: e4, request: t, resultSchema: r, options: s, flowStartedAt: l, retry: (L, H) => this._requestWithSchemaViaCodec(e4, L === void 0 ? { method: t.method } : { method: t.method, params: L }, r, H) };
          return _(this._resolveNonCompleteResult(O, G));
        }
        let x = O.result;
        En(r, x).then((G) => {
          if (G.success) return _(G.data);
          let L;
          try {
            L = S ? e4.decodeResult(t.method, R.result) : void 0;
          } catch (H) {
            return w(H instanceof Error ? H : Error(String(H)));
          }
          w(L?.kind === "invalid" ? L.error : new Xa(Ua.InvalidResult, `Invalid result for ${t.method}: ${G.error}`));
        }, w);
      }), d = () => f(s?.signal?.reason), s?.signal?.addEventListener("abort", d, { once: true });
      let z = s?.timeout ?? vs, q = () => f(new Xa(Ua.RequestTimeout, "Request timed out", { timeout: z }));
      this._setupTimeout(y, z, s?.maxTotalTimeout, q, s?.resetTimeoutOnProgress ?? false), this._transport.send(h, { relatedRequestId: o, resumptionToken: a, onresumptiontoken: i, headers: u, requestSignal: b?.signal }).catch((R) => {
        this._progressHandlers.delete(y), w(R);
      });
    }).finally(() => {
      if (d) s?.signal?.removeEventListener("abort", d);
      if (m !== void 0) this._responseHandlers.delete(m), this._cleanupTimeout(m);
    });
  }
  async notification(e4, t) {
    return this._notificationViaCodec(this._resolveOutboundCodec(e4.method), e4, t);
  }
  async _notificationViaCodec(e4, t, r) {
    if (!this._transport) throw new Xa(Ua.NotConnected, "Not connected");
    if (wn(t.method) && !e4.hasNotificationMethod(t.method)) throw new Xa(Ua.MethodNotSupportedByProtocolVersion, `Notification '${t.method}' is not supported by the negotiated protocol version (wire era ${e4.era})`, { method: t.method, era: e4.era });
    this.assertNotificationCapability(t.method);
    let s = this._envelopeOutbound({ jsonrpc: "2.0", ...t });
    if ((this._options?.debouncedNotificationMethods ?? []).includes(t.method) && !t.params && !r?.relatedRequestId) {
      if (this._pendingDebouncedNotifications.has(t.method)) return;
      this._pendingDebouncedNotifications.add(t.method), Promise.resolve().then(() => {
        if (this._pendingDebouncedNotifications.delete(t.method), !this._transport) return;
        this._transport?.send(s, r).catch((o) => this._onerror(o));
      });
      return;
    }
    await this._transport.send(s, r);
  }
  setRequestHandler(e4, t, r) {
    this.assertRequestHandlerCapability(e4);
    let s;
    if (typeof t === "function") {
      if (!Rn(e4)) throw TypeError(`'${e4}' is not a spec request method; pass schemas as the second argument to setRequestHandler().`);
      s = (o, a) => {
        let i = this._negotiatedWireCodec(), u = i.validateRequest(e4, o);
        if (!u.ok && u.reason === "not-in-era") u = i.validateInputRequest(e4, o);
        if (!u.ok) {
          if (u.reason === "not-in-era") throw new ef(ld.InternalError, `No wire schema for ${e4} in the resolved era`);
          throw Error(u.message);
        }
        return Promise.resolve(t(u.value, a));
      };
    } else if (r) s = async (o, a) => {
      let i = await En(t.params, { ...o.params });
      if (!i.success) throw new ef(ld.InvalidParams, `Invalid params for ${e4}: ${i.error}`);
      return r(i.data, a);
    };
    else throw TypeError("setRequestHandler: handler is required");
    this._requestHandlers.set(e4, this._wrapHandler(e4, s));
  }
  _wrapHandler(e4, t) {
    return t;
  }
  _outboundServerInfo() {
  }
  removeRequestHandler(e4) {
    this._requestHandlers.delete(e4);
  }
  assertCanSetRequestHandler(e4) {
    if (this._requestHandlers.has(e4)) throw Error(`A request handler for ${e4} already exists, which would be overridden`);
  }
  setNotificationHandler(e4, t, r) {
    if (typeof t === "function") {
      if (!wn(e4)) throw TypeError(`'${e4}' is not a spec notification method; pass schemas as the second argument to setNotificationHandler().`);
      this._notificationHandlers.set(e4, (s, o) => {
        let a = o.validateNotification(e4, s);
        if (!a.ok) {
          if (a.reason === "not-in-era") throw new ef(ld.InternalError, `No wire schema for ${e4} in the resolved era`);
          throw Error(a.message);
        }
        return Promise.resolve(t(a.value));
      });
      return;
    }
    if (!r) throw TypeError("setNotificationHandler: handler is required");
    this._notificationHandlers.set(e4, async (s) => {
      let o = await En(t.params, { ...s.params });
      if (!o.success) throw new ef(ld.InvalidParams, `Invalid params for notification ${e4}: ${o.error}`);
      await r(o.data, s);
    });
  }
  removeNotificationHandler(e4) {
    this._notificationHandlers.delete(e4);
  }
};
function gs(e4) {
  return e4 !== null && typeof e4 === "object" && !Array.isArray(e4);
}
function dc(e4, t) {
  let r = { ...e4 };
  for (let s in t) {
    let o = s, a = t[o];
    if (a === void 0) continue;
    let i = r[o];
    r[o] = gs(i) && gs(a) ? { ...i, ...a } : a;
  }
  return r;
}
function Ta(e4) {
  return typeof e4 === "object" && e4 !== null && !Array.isArray(e4);
}
function Bu(e4) {
  let t = {}, r = [];
  if (!Ta(e4)) return { accepted: t, droppedKeys: r };
  for (let [s, o] of Object.entries(e4)) {
    if (!Ta(o) || "method" in o || "result" in o) {
      r.push(s);
      continue;
    }
    t[s] = o;
  }
  return { accepted: t, droppedKeys: r };
}
function ki(e4) {
  throw new Xa(Ua.SendFailed, `ctx.mcpReq.${e4} is not available while fulfilling an embedded input request: the request is fulfilled locally and has no related peer request`);
}
function Wu(e4, t, r, s, o) {
  return { sessionId: o, mcpReq: { id: e4, method: t, _meta: r?._meta, requestState: Dn(void 0), signal: s, send: () => ki("send"), notify: () => ki("notify") } };
}
async function Yu(e4, t, r, s, o) {
  if (!Ta(s) || typeof s.method !== "string") throw new Xa(Ua.InvalidResult, `Invalid input request '${r}': each inputRequests entry must be an embedded request object with a method`, { key: r });
  let a = s.method;
  if (!t.hasInputRequestMethod(a)) throw new Xa(Ua.InvalidResult, `Invalid input request '${r}': '${a}' is not an embedded request the ${t.era} revision defines (expected elicitation/create, sampling/createMessage, or roots/list)`, { key: r, method: a });
  let i = e4.getRequestHandler(a);
  if (i === void 0) throw new Xa(Ua.CapabilityNotSupported, `Cannot fulfil input request '${r}': no handler is registered for '${a}' on this client. Declare the corresponding capability and register a handler, or handle input_required results manually.`, { key: r, method: a });
  let u = Ta(s.params) ? s.params : void 0;
  return await i({ jsonrpc: "2.0", id: r, method: a, ...u !== void 0 && { params: u } }, e4.buildContext(Wu(r, a, u, o, e4.sessionId)));
}
function Xu(e4, t) {
  return { ...e4?.signal !== void 0 && { signal: e4.signal }, ...e4?.onprogress !== void 0 && { onprogress: e4.onprogress }, ...e4?.resetTimeoutOnProgress !== void 0 && { resetTimeoutOnProgress: e4.resetTimeoutOnProgress }, ...e4?.headers !== void 0 && { headers: e4.headers }, ...t.timeout !== void 0 && { timeout: t.timeout }, ...t.maxTotalTimeout !== void 0 && { maxTotalTimeout: t.maxTotalTimeout }, ...e4?.allowTask === true && { allowTask: true }, allowInputRequired: true };
}
function hc(e4, t, r, s) {
  let { codec: o, request: a, options: i, flowStartedAt: u } = s, l = { inputRequests: r.inputRequests, ...r.requestState !== void 0 && { requestState: r.requestState } }, d = { dispatchInputRequest: (m, _, w) => Yu(e4, o, m, _, w), retry: (m, _) => s.retry(m, Xu(i, _)) };
  return Uu({ config: t, method: a.method, originalParams: a.params, firstPayload: l, flowStartedAt: u, signal: i?.signal, requestOptions: { ...i?.timeout !== void 0 && { timeout: i.timeout }, ...i?.maxTotalTimeout !== void 0 && { maxTotalTimeout: i.maxTotalTimeout }, ...i?.onprogress !== void 0 && { onprogress: i.onprogress } }, hooks: d });
}
function Zu(e4) {
  return { resultType: "input_required", inputRequests: e4.inputRequests, ...e4.requestState !== void 0 && { requestState: e4.requestState } };
}
/*!
* content-type
* Copyright(c) 2015 Douglas Christopher Wilson
* MIT Licensed
*/
var Qu = W((e4) => {
  var t = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g, r = /\\([\u000b\u0020-\u00ff])/g, s = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
  e4.parse = o;
  function o(u) {
    if (!u) throw TypeError("argument string is required");
    var l = typeof u === "object" ? a(u) : u;
    if (typeof l !== "string") throw TypeError("argument string is required to be a string");
    var d = l.indexOf(";"), m = d !== -1 ? l.slice(0, d).trim() : l.trim();
    if (!s.test(m)) throw TypeError("invalid media type");
    var _ = new i(m.toLowerCase());
    if (d !== -1) {
      var w, I, b;
      t.lastIndex = d;
      while (I = t.exec(l)) {
        if (I.index !== d) throw TypeError("invalid parameter format");
        if (d += I[0].length, w = I[1].toLowerCase(), b = I[2], b.charCodeAt(0) === 34) {
          if (b = b.slice(1, -1), b.indexOf("\\") !== -1) b = b.replace(r, "$1");
        }
        _.parameters[w] = b;
      }
      if (d !== l.length) throw TypeError("invalid parameter format");
    }
    return _;
  }
  function a(u) {
    var l;
    if (typeof u.getHeader === "function") l = u.getHeader("content-type");
    else if (typeof u.headers === "object") l = u.headers && u.headers["content-type"];
    if (typeof l !== "string") throw TypeError("content-type header is missing from object");
    return l;
  }
  function i(u) {
    this.parameters = /* @__PURE__ */ Object.create(null), this.type = u;
  }
}), ed = Gs(Qu(), 1);
function mc(e4) {
  if (!e4) return;
  try {
    return ed.parse(e4).type;
  } catch {
    let t = (e4.split(";", 1)[0] ?? "").trim().toLowerCase();
    if (t === "" || e4.slice(t.length).includes(",")) return;
    return t;
  }
}
var pc = 10485760, doi = class {
  _buffer;
  _maxBufferSize;
  constructor(e4) {
    this._maxBufferSize = e4?.maxBufferSize ?? pc;
  }
  append(e4) {
    if ((this._buffer?.length ?? 0) + e4.length > this._maxBufferSize) throw this.clear(), Error(`ReadBuffer exceeded maximum size of ${this._maxBufferSize} bytes`);
    this._buffer = this._buffer ? Buffer.concat([this._buffer, e4]) : e4;
  }
  readMessage() {
    while (this._buffer) {
      let e4 = this._buffer.indexOf(`
`);
      if (e4 === -1) return null;
      let t = this._buffer.toString("utf8", 0, e4).replace(/\r$/, "");
      this._buffer = this._buffer.subarray(e4 + 1);
      try {
        return V9o(t);
      } catch (r) {
        if (r instanceof SyntaxError) continue;
        throw r;
      }
    }
    return null;
  }
  clear() {
    this._buffer = void 0;
  }
};
function V9o(e4) {
  return Nt(JSON.parse(e4));
}
function coi(e4) {
  return JSON.stringify(e4) + `
`;
}
function _s(e4) {
  if (!e4) return {};
  if (e4 instanceof Headers) return Object.fromEntries(e4.entries());
  if (Array.isArray(e4)) return Object.fromEntries(e4);
  return { ...e4 };
}
function fJt(e4 = fetch, t) {
  if (!t) return e4;
  return async (r, s) => e4(r, { ...t, ...s, headers: s?.headers ? { ..._s(t.headers), ..._s(s.headers) } : t.headers });
}
var Ma = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.regexpCode = e4.getEsmExportName = e4.getProperty = e4.safeStringify = e4.stringify = e4.strConcat = e4.addCodeArg = e4.str = e4._ = e4.nil = e4._Code = e4.Name = e4.IDENTIFIER = e4._CodeOrName = void 0;
  var t = class {
  };
  e4._CodeOrName = t, e4.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
  var r = class extends t {
    constructor(h) {
      super();
      if (!e4.IDENTIFIER.test(h)) throw Error("CodeGen: name must be a valid identifier");
      this.str = h;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      return false;
    }
    get names() {
      return { [this.str]: 1 };
    }
  };
  e4.Name = r;
  var s = class extends t {
    constructor(h) {
      super();
      this._items = typeof h === "string" ? [h] : h;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      if (this._items.length > 1) return false;
      let h = this._items[0];
      return h === "" || h === '""';
    }
    get str() {
      var h;
      return (h = this._str) !== null && h !== void 0 ? h : this._str = this._items.reduce((g, f) => `${g}${f}`, "");
    }
    get names() {
      var h;
      return (h = this._names) !== null && h !== void 0 ? h : this._names = this._items.reduce((g, f) => {
        if (f instanceof r) g[f.str] = (g[f.str] || 0) + 1;
        return g;
      }, {});
    }
  };
  e4._Code = s, e4.nil = new s("");
  function o(h, ...g) {
    let f = [h[0]], z = 0;
    while (z < g.length) u(f, g[z]), f.push(h[++z]);
    return new s(f);
  }
  e4._ = o;
  let a = new s("+");
  function i(h, ...g) {
    let f = [I(h[0])], z = 0;
    while (z < g.length) f.push(a), u(f, g[z]), f.push(a, I(h[++z]));
    return l(f), new s(f);
  }
  e4.str = i;
  function u(h, g) {
    if (g instanceof s) h.push(...g._items);
    else if (g instanceof r) h.push(g);
    else h.push(_(g));
  }
  e4.addCodeArg = u;
  function l(h) {
    let g = 1;
    while (g < h.length - 1) {
      if (h[g] === a) {
        let f = d(h[g - 1], h[g + 1]);
        if (f !== void 0) {
          h.splice(g - 1, 3, f);
          continue;
        }
        h[g++] = "+";
      }
      g++;
    }
  }
  function d(h, g) {
    if (g === '""') return h;
    if (h === '""') return g;
    if (typeof h == "string") {
      if (g instanceof r || h[h.length - 1] !== '"') return;
      if (typeof g != "string") return `${h.slice(0, -1)}${g}"`;
      if (g[0] === '"') return h.slice(0, -1) + g.slice(1);
      return;
    }
    if (typeof g == "string" && g[0] === '"' && !(h instanceof r)) return `"${h}${g.slice(1)}`;
  }
  function m(h, g) {
    return g.emptyStr() ? h : h.emptyStr() ? g : i`${h}${g}`;
  }
  e4.strConcat = m;
  function _(h) {
    return typeof h == "number" || typeof h == "boolean" || h === null ? h : I(Array.isArray(h) ? h.join(",") : h);
  }
  function w(h) {
    return new s(I(h));
  }
  e4.stringify = w;
  function I(h) {
    return JSON.stringify(h).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }
  e4.safeStringify = I;
  function b(h) {
    return typeof h == "string" && e4.IDENTIFIER.test(h) ? new s(`.${h}`) : o`[${h}]`;
  }
  e4.getProperty = b;
  function y(h) {
    if (typeof h == "string" && e4.IDENTIFIER.test(h)) return new s(`${h}`);
    throw Error(`CodeGen: invalid export name: ${h}, use explicit $id name mapping`);
  }
  e4.getEsmExportName = y;
  function p(h) {
    return new s(h.toString());
  }
  e4.regexpCode = p;
}), fc = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.ValueScope = e4.ValueScopeName = e4.Scope = e4.varKinds = e4.UsedValueState = void 0;
  let t = Ma();
  var r = class extends Error {
    constructor(l) {
      super(`CodeGen: "code" for ${l} not defined`);
      this.value = l.value;
    }
  }, s;
  (function(l) {
    l[l.Started = 0] = "Started", l[l.Completed = 1] = "Completed";
  })(s || (e4.UsedValueState = s = {})), e4.varKinds = { const: new t.Name("const"), let: new t.Name("let"), var: new t.Name("var") };
  var o = class {
    constructor({ prefixes: l, parent: d } = {}) {
      this._names = {}, this._prefixes = l, this._parent = d;
    }
    toName(l) {
      return l instanceof t.Name ? l : this.name(l);
    }
    name(l) {
      return new t.Name(this._newName(l));
    }
    _newName(l) {
      let d = this._names[l] || this._nameGroup(l);
      return `${l}${d.index++}`;
    }
    _nameGroup(l) {
      var d, m;
      if (((m = (d = this._parent) === null || d === void 0 ? void 0 : d._prefixes) === null || m === void 0 ? void 0 : m.has(l)) || this._prefixes && !this._prefixes.has(l)) throw Error(`CodeGen: prefix "${l}" is not allowed in this scope`);
      return this._names[l] = { prefix: l, index: 0 };
    }
  };
  e4.Scope = o;
  var a = class extends t.Name {
    constructor(l, d) {
      super(d);
      this.prefix = l;
    }
    setValue(l, { property: d, itemIndex: m }) {
      this.value = l, this.scopePath = t._`.${new t.Name(d)}[${m}]`;
    }
  };
  e4.ValueScopeName = a;
  let i = t._`\n`;
  var u = class extends o {
    constructor(l) {
      super(l);
      this._values = {}, this._scope = l.scope, this.opts = { ...l, _n: l.lines ? i : t.nil };
    }
    get() {
      return this._scope;
    }
    name(l) {
      return new a(l, this._newName(l));
    }
    value(l, d) {
      var m;
      if (d.ref === void 0) throw Error("CodeGen: ref must be passed in value");
      let _ = this.toName(l), { prefix: w } = _, I = (m = d.key) !== null && m !== void 0 ? m : d.ref, b = this._values[w];
      if (b) {
        let h = b.get(I);
        if (h) return h;
      } else b = this._values[w] = /* @__PURE__ */ new Map();
      b.set(I, _);
      let y = this._scope[w] || (this._scope[w] = []), p = y.length;
      return y[p] = d.ref, _.setValue(d, { property: w, itemIndex: p }), _;
    }
    getValue(l, d) {
      let m = this._values[l];
      if (!m) return;
      return m.get(d);
    }
    scopeRefs(l, d = this._values) {
      return this._reduceValues(d, (m) => {
        if (m.scopePath === void 0) throw Error(`CodeGen: name "${m}" has no value`);
        return t._`${l}${m.scopePath}`;
      });
    }
    scopeCode(l = this._values, d, m) {
      return this._reduceValues(l, (_) => {
        if (_.value === void 0) throw Error(`CodeGen: name "${_}" has no value`);
        return _.value.code;
      }, d, m);
    }
    _reduceValues(l, d, m = {}, _) {
      let w = t.nil;
      for (let I in l) {
        let b = l[I];
        if (!b) continue;
        let y = m[I] = m[I] || /* @__PURE__ */ new Map();
        b.forEach((p) => {
          if (y.has(p)) return;
          y.set(p, s.Started);
          let h = d(p);
          if (h) {
            let g = this.opts.es5 ? e4.varKinds.var : e4.varKinds.const;
            w = t._`${w}${g} ${p} = ${h};${this.opts._n}`;
          } else if (h = _ === null || _ === void 0 ? void 0 : _(p)) w = t._`${w}${h}${this.opts._n}`;
          else throw new r(p);
          y.set(p, s.Completed);
        });
      }
      return w;
    }
  };
  e4.ValueScope = u;
}), oe = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.or = e4.and = e4.not = e4.CodeGen = e4.operators = e4.varKinds = e4.ValueScopeName = e4.ValueScope = e4.Scope = e4.Name = e4.regexpCode = e4.stringify = e4.getProperty = e4.nil = e4.strConcat = e4.str = e4._ = void 0;
  let t = Ma(), r = fc();
  var s = Ma();
  Object.defineProperty(e4, "_", { enumerable: true, get: function() {
    return s._;
  } }), Object.defineProperty(e4, "str", { enumerable: true, get: function() {
    return s.str;
  } }), Object.defineProperty(e4, "strConcat", { enumerable: true, get: function() {
    return s.strConcat;
  } }), Object.defineProperty(e4, "nil", { enumerable: true, get: function() {
    return s.nil;
  } }), Object.defineProperty(e4, "getProperty", { enumerable: true, get: function() {
    return s.getProperty;
  } }), Object.defineProperty(e4, "stringify", { enumerable: true, get: function() {
    return s.stringify;
  } }), Object.defineProperty(e4, "regexpCode", { enumerable: true, get: function() {
    return s.regexpCode;
  } }), Object.defineProperty(e4, "Name", { enumerable: true, get: function() {
    return s.Name;
  } });
  var o = fc();
  Object.defineProperty(e4, "Scope", { enumerable: true, get: function() {
    return o.Scope;
  } }), Object.defineProperty(e4, "ValueScope", { enumerable: true, get: function() {
    return o.ValueScope;
  } }), Object.defineProperty(e4, "ValueScopeName", { enumerable: true, get: function() {
    return o.ValueScopeName;
  } }), Object.defineProperty(e4, "varKinds", { enumerable: true, get: function() {
    return o.varKinds;
  } }), e4.operators = { GT: new t._Code(">"), GTE: new t._Code(">="), LT: new t._Code("<"), LTE: new t._Code("<="), EQ: new t._Code("==="), NEQ: new t._Code("!=="), NOT: new t._Code("!"), OR: new t._Code("||"), AND: new t._Code("&&"), ADD: new t._Code("+") };
  var a = class {
    optimizeNodes() {
      return this;
    }
    optimizeNames(T, M) {
      return this;
    }
  }, i = class extends a {
    constructor(T, M, U) {
      super();
      this.varKind = T, this.name = M, this.rhs = U;
    }
    render({ es5: T, _n: M }) {
      let U = T ? r.varKinds.var : this.varKind, Y = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
      return `${U} ${this.name}${Y};` + M;
    }
    optimizeNames(T, M) {
      if (!T[this.name.str]) return;
      if (this.rhs) this.rhs = X(this.rhs, T, M);
      return this;
    }
    get names() {
      return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
    }
  }, u = class extends a {
    constructor(T, M, U) {
      super();
      this.lhs = T, this.rhs = M, this.sideEffects = U;
    }
    render({ _n: T }) {
      return `${this.lhs} = ${this.rhs};` + T;
    }
    optimizeNames(T, M) {
      if (this.lhs instanceof t.Name && !T[this.lhs.str] && !this.sideEffects) return;
      return this.rhs = X(this.rhs, T, M), this;
    }
    get names() {
      return Z(this.lhs instanceof t.Name ? {} : { ...this.lhs.names }, this.rhs);
    }
  }, l = class extends u {
    constructor(T, M, U, Y) {
      super(T, U, Y);
      this.op = M;
    }
    render({ _n: T }) {
      return `${this.lhs} ${this.op}= ${this.rhs};` + T;
    }
  }, d = class extends a {
    constructor(T) {
      super();
      this.label = T, this.names = {};
    }
    render({ _n: T }) {
      return `${this.label}:` + T;
    }
  }, m = class extends a {
    constructor(T) {
      super();
      this.label = T, this.names = {};
    }
    render({ _n: T }) {
      return `break${this.label ? ` ${this.label}` : ""};` + T;
    }
  }, _ = class extends a {
    constructor(T) {
      super();
      this.error = T;
    }
    render({ _n: T }) {
      return `throw ${this.error};` + T;
    }
    get names() {
      return this.error.names;
    }
  }, w = class extends a {
    constructor(T) {
      super();
      this.code = T;
    }
    render({ _n: T }) {
      return `${this.code};` + T;
    }
    optimizeNodes() {
      return `${this.code}` ? this : void 0;
    }
    optimizeNames(T, M) {
      return this.code = X(this.code, T, M), this;
    }
    get names() {
      return this.code instanceof t._CodeOrName ? this.code.names : {};
    }
  }, I = class extends a {
    constructor(T = []) {
      super();
      this.nodes = T;
    }
    render(T) {
      return this.nodes.reduce((M, U) => M + U.render(T), "");
    }
    optimizeNodes() {
      let { nodes: T } = this, M = T.length;
      while (M--) {
        let U = T[M].optimizeNodes();
        if (Array.isArray(U)) T.splice(M, 1, ...U);
        else if (U) T[M] = U;
        else T.splice(M, 1);
      }
      return T.length > 0 ? this : void 0;
    }
    optimizeNames(T, M) {
      let { nodes: U } = this, Y = U.length;
      while (Y--) {
        let Q = U[Y];
        if (Q.optimizeNames(T, M)) continue;
        ne(T, Q.names), U.splice(Y, 1);
      }
      return U.length > 0 ? this : void 0;
    }
    get names() {
      return this.nodes.reduce((T, M) => H(T, M.names), {});
    }
  }, b = class extends I {
    render(T) {
      return "{" + T._n + super.render(T) + "}" + T._n;
    }
  }, y = class extends I {
  }, p = class extends b {
  };
  p.kind = "else";
  var h = class T extends b {
    constructor(M, U) {
      super(U);
      this.condition = M;
    }
    render(M) {
      let U = `if(${this.condition})` + super.render(M);
      if (this.else) U += "else " + this.else.render(M);
      return U;
    }
    optimizeNodes() {
      super.optimizeNodes();
      let M = this.condition;
      if (M === true) return this.nodes;
      let U = this.else;
      if (U) {
        let Y = U.optimizeNodes();
        U = this.else = Array.isArray(Y) ? new p(Y) : Y;
      }
      if (U) {
        if (M === false) return U instanceof T ? U : U.nodes;
        if (this.nodes.length) return this;
        return new T(pe(M), U instanceof T ? [U] : U.nodes);
      }
      if (M === false || !this.nodes.length) return;
      return this;
    }
    optimizeNames(M, U) {
      var Y;
      if (this.else = (Y = this.else) === null || Y === void 0 ? void 0 : Y.optimizeNames(M, U), !(super.optimizeNames(M, U) || this.else)) return;
      return this.condition = X(this.condition, M, U), this;
    }
    get names() {
      let M = super.names;
      if (Z(M, this.condition), this.else) H(M, this.else.names);
      return M;
    }
  };
  h.kind = "if";
  var g = class extends b {
  };
  g.kind = "for";
  var f = class extends g {
    constructor(T) {
      super();
      this.iteration = T;
    }
    render(T) {
      return `for(${this.iteration})` + super.render(T);
    }
    optimizeNames(T, M) {
      if (!super.optimizeNames(T, M)) return;
      return this.iteration = X(this.iteration, T, M), this;
    }
    get names() {
      return H(super.names, this.iteration.names);
    }
  }, z = class extends g {
    constructor(T, M, U, Y) {
      super();
      this.varKind = T, this.name = M, this.from = U, this.to = Y;
    }
    render(T) {
      let M = T.es5 ? r.varKinds.var : this.varKind, { name: U, from: Y, to: Q } = this;
      return `for(${M} ${U}=${Y}; ${U}<${Q}; ${U}++)` + super.render(T);
    }
    get names() {
      return Z(Z(super.names, this.from), this.to);
    }
  }, q = class extends g {
    constructor(T, M, U, Y) {
      super();
      this.loop = T, this.varKind = M, this.name = U, this.iterable = Y;
    }
    render(T) {
      return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(T);
    }
    optimizeNames(T, M) {
      if (!super.optimizeNames(T, M)) return;
      return this.iterable = X(this.iterable, T, M), this;
    }
    get names() {
      return H(super.names, this.iterable.names);
    }
  }, R = class extends b {
    constructor(T, M, U) {
      super();
      this.name = T, this.args = M, this.async = U;
    }
    render(T) {
      return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(T);
    }
  };
  R.kind = "func";
  var S = class extends I {
    render(T) {
      return "return " + super.render(T);
    }
  };
  S.kind = "return";
  var O = class extends b {
    render(T) {
      let M = "try" + super.render(T);
      if (this.catch) M += this.catch.render(T);
      if (this.finally) M += this.finally.render(T);
      return M;
    }
    optimizeNodes() {
      var T, M;
      return super.optimizeNodes(), (T = this.catch) === null || T === void 0 || T.optimizeNodes(), (M = this.finally) === null || M === void 0 || M.optimizeNodes(), this;
    }
    optimizeNames(T, M) {
      var U, Y;
      return super.optimizeNames(T, M), (U = this.catch) === null || U === void 0 || U.optimizeNames(T, M), (Y = this.finally) === null || Y === void 0 || Y.optimizeNames(T, M), this;
    }
    get names() {
      let T = super.names;
      if (this.catch) H(T, this.catch.names);
      if (this.finally) H(T, this.finally.names);
      return T;
    }
  }, x = class extends b {
    constructor(T) {
      super();
      this.error = T;
    }
    render(T) {
      return `catch(${this.error})` + super.render(T);
    }
  };
  x.kind = "catch";
  var G = class extends b {
    render(T) {
      return "finally" + super.render(T);
    }
  };
  G.kind = "finally";
  var L = class {
    constructor(T, M = {}) {
      this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...M, _n: M.lines ? `
` : "" }, this._extScope = T, this._scope = new r.Scope({ parent: T }), this._nodes = [new y()];
    }
    toString() {
      return this._root.render(this.opts);
    }
    name(T) {
      return this._scope.name(T);
    }
    scopeName(T) {
      return this._extScope.name(T);
    }
    scopeValue(T, M) {
      let U = this._extScope.value(T, M);
      return (this._values[U.prefix] || (this._values[U.prefix] = /* @__PURE__ */ new Set())).add(U), U;
    }
    getScopeValue(T, M) {
      return this._extScope.getValue(T, M);
    }
    scopeRefs(T) {
      return this._extScope.scopeRefs(T, this._values);
    }
    scopeCode() {
      return this._extScope.scopeCode(this._values);
    }
    _def(T, M, U, Y) {
      let Q = this._scope.toName(M);
      if (U !== void 0 && Y) this._constants[Q.str] = U;
      return this._leafNode(new i(T, Q, U)), Q;
    }
    const(T, M, U) {
      return this._def(r.varKinds.const, T, M, U);
    }
    let(T, M, U) {
      return this._def(r.varKinds.let, T, M, U);
    }
    var(T, M, U) {
      return this._def(r.varKinds.var, T, M, U);
    }
    assign(T, M, U) {
      return this._leafNode(new u(T, M, U));
    }
    add(T, M) {
      return this._leafNode(new l(T, e4.operators.ADD, M));
    }
    code(T) {
      if (typeof T == "function") T();
      else if (T !== t.nil) this._leafNode(new w(T));
      return this;
    }
    object(...T) {
      let M = ["{"];
      for (let [U, Y] of T) {
        if (M.length > 1) M.push(",");
        if (M.push(U), U !== Y || this.opts.es5) M.push(":"), (0, t.addCodeArg)(M, Y);
      }
      return M.push("}"), new t._Code(M);
    }
    if(T, M, U) {
      if (this._blockNode(new h(T)), M && U) this.code(M).else().code(U).endIf();
      else if (M) this.code(M).endIf();
      else if (U) throw Error('CodeGen: "else" body without "then" body');
      return this;
    }
    elseIf(T) {
      return this._elseNode(new h(T));
    }
    else() {
      return this._elseNode(new p());
    }
    endIf() {
      return this._endBlockNode(h, p);
    }
    _for(T, M) {
      if (this._blockNode(T), M) this.code(M).endFor();
      return this;
    }
    for(T, M) {
      return this._for(new f(T), M);
    }
    forRange(T, M, U, Y, Q = this.opts.es5 ? r.varKinds.var : r.varKinds.let) {
      let ae = this._scope.toName(T);
      return this._for(new z(Q, ae, M, U), () => Y(ae));
    }
    forOf(T, M, U, Y = r.varKinds.const) {
      let Q = this._scope.toName(T);
      if (this.opts.es5) {
        let ae = M instanceof t.Name ? M : this.var("_arr", M);
        return this.forRange("_i", 0, t._`${ae}.length`, (re) => {
          this.var(Q, t._`${ae}[${re}]`), U(Q);
        });
      }
      return this._for(new q("of", Y, Q, M), () => U(Q));
    }
    forIn(T, M, U, Y = this.opts.es5 ? r.varKinds.var : r.varKinds.const) {
      if (this.opts.ownProperties) return this.forOf(T, t._`Object.keys(${M})`, U);
      let Q = this._scope.toName(T);
      return this._for(new q("in", Y, Q, M), () => U(Q));
    }
    endFor() {
      return this._endBlockNode(g);
    }
    label(T) {
      return this._leafNode(new d(T));
    }
    break(T) {
      return this._leafNode(new m(T));
    }
    return(T) {
      let M = new S();
      if (this._blockNode(M), this.code(T), M.nodes.length !== 1) throw Error('CodeGen: "return" should have one node');
      return this._endBlockNode(S);
    }
    try(T, M, U) {
      if (!M && !U) throw Error('CodeGen: "try" without "catch" and "finally"');
      let Y = new O();
      if (this._blockNode(Y), this.code(T), M) {
        let Q = this.name("e");
        this._currNode = Y.catch = new x(Q), M(Q);
      }
      if (U) this._currNode = Y.finally = new G(), this.code(U);
      return this._endBlockNode(x, G);
    }
    throw(T) {
      return this._leafNode(new _(T));
    }
    block(T, M) {
      if (this._blockStarts.push(this._nodes.length), T) this.code(T).endBlock(M);
      return this;
    }
    endBlock(T) {
      let M = this._blockStarts.pop();
      if (M === void 0) throw Error("CodeGen: not in self-balancing block");
      let U = this._nodes.length - M;
      if (U < 0 || T !== void 0 && U !== T) throw Error(`CodeGen: wrong number of nodes: ${U} vs ${T} expected`);
      return this._nodes.length = M, this;
    }
    func(T, M = t.nil, U, Y) {
      if (this._blockNode(new R(T, M, U)), Y) this.code(Y).endFunc();
      return this;
    }
    endFunc() {
      return this._endBlockNode(R);
    }
    optimize(T = 1) {
      while (T-- > 0) this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
    }
    _leafNode(T) {
      return this._currNode.nodes.push(T), this;
    }
    _blockNode(T) {
      this._currNode.nodes.push(T), this._nodes.push(T);
    }
    _endBlockNode(T, M) {
      let U = this._currNode;
      if (U instanceof T || M && U instanceof M) return this._nodes.pop(), this;
      throw Error(`CodeGen: not in block "${M ? `${T.kind}/${M.kind}` : T.kind}"`);
    }
    _elseNode(T) {
      let M = this._currNode;
      if (!(M instanceof h)) throw Error('CodeGen: "else" without "if"');
      return this._currNode = M.else = T, this;
    }
    get _root() {
      return this._nodes[0];
    }
    get _currNode() {
      let T = this._nodes;
      return T[T.length - 1];
    }
    set _currNode(T) {
      let M = this._nodes;
      M[M.length - 1] = T;
    }
  };
  e4.CodeGen = L;
  function H(T, M) {
    for (let U in M) T[U] = (T[U] || 0) + (M[U] || 0);
    return T;
  }
  function Z(T, M) {
    return M instanceof t._CodeOrName ? H(T, M.names) : T;
  }
  function X(T, M, U) {
    if (T instanceof t.Name) return Y(T);
    if (!Q(T)) return T;
    return new t._Code(T._items.reduce((ae, re) => {
      if (re instanceof t.Name) re = Y(re);
      if (re instanceof t._Code) ae.push(...re._items);
      else ae.push(re);
      return ae;
    }, []));
    function Y(ae) {
      let re = U[ae.str];
      if (re === void 0 || M[ae.str] !== 1) return ae;
      return delete M[ae.str], re;
    }
    function Q(ae) {
      return ae instanceof t._Code && ae._items.some((re) => re instanceof t.Name && M[re.str] === 1 && U[re.str] !== void 0);
    }
  }
  function ne(T, M) {
    for (let U in M) T[U] = (T[U] || 0) - (M[U] || 0);
  }
  function pe(T) {
    return typeof T == "boolean" || typeof T == "number" || T === null ? !T : t._`!${J(T)}`;
  }
  e4.not = pe;
  let de = D(e4.operators.AND);
  function be(...T) {
    return T.reduce(de);
  }
  e4.and = be;
  let ce = D(e4.operators.OR);
  function j(...T) {
    return T.reduce(ce);
  }
  e4.or = j;
  function D(T) {
    return (M, U) => M === t.nil ? U : U === t.nil ? M : t._`${J(M)} ${T} ${J(U)}`;
  }
  function J(T) {
    return T instanceof t.Name ? T : t._`(${T})`;
  }
}), le = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.checkStrictMode = e4.getErrorPath = e4.Type = e4.useFunc = e4.setEvaluated = e4.evaluatedPropsToName = e4.mergeEvaluated = e4.eachItem = e4.unescapeJsonPointer = e4.escapeJsonPointer = e4.escapeFragment = e4.unescapeFragment = e4.schemaRefOrVal = e4.schemaHasRulesButRef = e4.schemaHasRules = e4.checkUnknownRules = e4.alwaysValidSchema = e4.toHash = void 0;
  let t = oe(), r = Ma();
  function s(R) {
    let S = {};
    for (let O of R) S[O] = true;
    return S;
  }
  e4.toHash = s;
  function o(R, S) {
    if (typeof S == "boolean") return S;
    if (Object.keys(S).length === 0) return true;
    return a(R, S), !i(S, R.self.RULES.all);
  }
  e4.alwaysValidSchema = o;
  function a(R, S = R.schema) {
    let { opts: O, self: x } = R;
    if (!O.strictSchema) return;
    if (typeof S === "boolean") return;
    let G = x.RULES.keywords;
    for (let L in S) if (!G[L]) q(R, `unknown keyword: "${L}"`);
  }
  e4.checkUnknownRules = a;
  function i(R, S) {
    if (typeof R == "boolean") return !R;
    for (let O in R) if (S[O]) return true;
    return false;
  }
  e4.schemaHasRules = i;
  function u(R, S) {
    if (typeof R == "boolean") return !R;
    for (let O in R) if (O !== "$ref" && S.all[O]) return true;
    return false;
  }
  e4.schemaHasRulesButRef = u;
  function l({ topSchemaRef: R, schemaPath: S }, O, x, G) {
    if (!G) {
      if (typeof O == "number" || typeof O == "boolean") return O;
      if (typeof O == "string") return t._`${O}`;
    }
    return t._`${R}${S}${(0, t.getProperty)(x)}`;
  }
  e4.schemaRefOrVal = l;
  function d(R) {
    return w(decodeURIComponent(R));
  }
  e4.unescapeFragment = d;
  function m(R) {
    return encodeURIComponent(_(R));
  }
  e4.escapeFragment = m;
  function _(R) {
    if (typeof R == "number") return `${R}`;
    return R.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  e4.escapeJsonPointer = _;
  function w(R) {
    return R.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  e4.unescapeJsonPointer = w;
  function I(R, S) {
    if (Array.isArray(R)) for (let O of R) S(O);
    else S(R);
  }
  e4.eachItem = I;
  function b({ mergeNames: R, mergeToName: S, mergeValues: O, resultToName: x }) {
    return (G, L, H, Z) => {
      let X = H === void 0 ? L : H instanceof t.Name ? (L instanceof t.Name ? R(G, L, H) : S(G, L, H), H) : L instanceof t.Name ? (S(G, H, L), L) : O(L, H);
      return Z === t.Name && !(X instanceof t.Name) ? x(G, X) : X;
    };
  }
  e4.mergeEvaluated = { props: b({ mergeNames: (R, S, O) => R.if(t._`${O} !== true && ${S} !== undefined`, () => {
    R.if(t._`${S} === true`, () => R.assign(O, true), () => R.assign(O, t._`${O} || {}`).code(t._`Object.assign(${O}, ${S})`));
  }), mergeToName: (R, S, O) => R.if(t._`${O} !== true`, () => {
    if (S === true) R.assign(O, true);
    else R.assign(O, t._`${O} || {}`), p(R, O, S);
  }), mergeValues: (R, S) => R === true ? true : { ...R, ...S }, resultToName: y }), items: b({ mergeNames: (R, S, O) => R.if(t._`${O} !== true && ${S} !== undefined`, () => R.assign(O, t._`${S} === true ? true : ${O} > ${S} ? ${O} : ${S}`)), mergeToName: (R, S, O) => R.if(t._`${O} !== true`, () => R.assign(O, S === true ? true : t._`${O} > ${S} ? ${O} : ${S}`)), mergeValues: (R, S) => R === true ? true : Math.max(R, S), resultToName: (R, S) => R.var("items", S) }) };
  function y(R, S) {
    if (S === true) return R.var("props", true);
    let O = R.var("props", t._`{}`);
    if (S !== void 0) p(R, O, S);
    return O;
  }
  e4.evaluatedPropsToName = y;
  function p(R, S, O) {
    Object.keys(O).forEach((x) => R.assign(t._`${S}${(0, t.getProperty)(x)}`, true));
  }
  e4.setEvaluated = p;
  let h = {};
  function g(R, S) {
    return R.scopeValue("func", { ref: S, code: h[S.code] || (h[S.code] = new r._Code(S.code)) });
  }
  e4.useFunc = g;
  var f;
  (function(R) {
    R[R.Num = 0] = "Num", R[R.Str = 1] = "Str";
  })(f || (e4.Type = f = {}));
  function z(R, S, O) {
    if (R instanceof t.Name) {
      let x = S === f.Num;
      return O ? x ? t._`"[" + ${R} + "]"` : t._`"['" + ${R} + "']"` : x ? t._`"/" + ${R}` : t._`"/" + ${R}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return O ? (0, t.getProperty)(R).toString() : "/" + _(R);
  }
  e4.getErrorPath = z;
  function q(R, S, O = R.opts.strictSchema) {
    if (!O) return;
    if (S = `strict mode: ${S}`, O === true) throw Error(S);
    R.self.logger.warn(S);
  }
  e4.checkStrictMode = q;
}), Ke = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = oe(), r = { data: new t.Name("data"), valCxt: new t.Name("valCxt"), instancePath: new t.Name("instancePath"), parentData: new t.Name("parentData"), parentDataProperty: new t.Name("parentDataProperty"), rootData: new t.Name("rootData"), dynamicAnchors: new t.Name("dynamicAnchors"), vErrors: new t.Name("vErrors"), errors: new t.Name("errors"), this: new t.Name("this"), self: new t.Name("self"), scope: new t.Name("scope"), json: new t.Name("json"), jsonPos: new t.Name("jsonPos"), jsonLen: new t.Name("jsonLen"), jsonPart: new t.Name("jsonPart") };
  e4.default = r;
}), Aa = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.extendErrors = e4.resetErrorsCount = e4.reportExtraError = e4.reportError = e4.keyword$DataError = e4.keywordError = void 0;
  let t = oe(), r = le(), s = Ke();
  e4.keywordError = { message: ({ keyword: p }) => t.str`must pass "${p}" keyword validation` }, e4.keyword$DataError = { message: ({ keyword: p, schemaType: h }) => h ? t.str`"${p}" keyword must be ${h} ($data)` : t.str`"${p}" keyword is invalid ($data)` };
  function o(p, h = e4.keywordError, g, f) {
    let { it: z } = p, { gen: q, compositeRule: R, allErrors: S } = z, O = _(p, h, g);
    if (f !== null && f !== void 0 ? f : R || S) l(q, O);
    else d(z, t._`[${O}]`);
  }
  e4.reportError = o;
  function a(p, h = e4.keywordError, g) {
    let { it: f } = p, { gen: z, compositeRule: q, allErrors: R } = f;
    if (l(z, _(p, h, g)), !(q || R)) d(f, s.default.vErrors);
  }
  e4.reportExtraError = a;
  function i(p, h) {
    p.assign(s.default.errors, h), p.if(t._`${s.default.vErrors} !== null`, () => p.if(h, () => p.assign(t._`${s.default.vErrors}.length`, h), () => p.assign(s.default.vErrors, null)));
  }
  e4.resetErrorsCount = i;
  function u({ gen: p, keyword: h, schemaValue: g, data: f, errsCount: z, it: q }) {
    if (z === void 0) throw Error("ajv implementation error");
    let R = p.name("err");
    p.forRange("i", z, s.default.errors, (S) => {
      if (p.const(R, t._`${s.default.vErrors}[${S}]`), p.if(t._`${R}.instancePath === undefined`, () => p.assign(t._`${R}.instancePath`, (0, t.strConcat)(s.default.instancePath, q.errorPath))), p.assign(t._`${R}.schemaPath`, t.str`${q.errSchemaPath}/${h}`), q.opts.verbose) p.assign(t._`${R}.schema`, g), p.assign(t._`${R}.data`, f);
    });
  }
  e4.extendErrors = u;
  function l(p, h) {
    let g = p.const("err", h);
    p.if(t._`${s.default.vErrors} === null`, () => p.assign(s.default.vErrors, t._`[${g}]`), t._`${s.default.vErrors}.push(${g})`), p.code(t._`${s.default.errors}++`);
  }
  function d(p, h) {
    let { gen: g, validateName: f, schemaEnv: z } = p;
    if (z.$async) g.throw(t._`new ${p.ValidationError}(${h})`);
    else g.assign(t._`${f}.errors`, h), g.return(false);
  }
  let m = { keyword: new t.Name("keyword"), schemaPath: new t.Name("schemaPath"), params: new t.Name("params"), propertyName: new t.Name("propertyName"), message: new t.Name("message"), schema: new t.Name("schema"), parentSchema: new t.Name("parentSchema") };
  function _(p, h, g) {
    let { createErrors: f } = p.it;
    if (f === false) return t._`{}`;
    return w(p, h, g);
  }
  function w(p, h, g = {}) {
    let { gen: f, it: z } = p, q = [I(z, g), b(p, g)];
    return y(p, h, q), f.object(...q);
  }
  function I({ errorPath: p }, { instancePath: h }) {
    let g = h ? t.str`${p}${(0, r.getErrorPath)(h, r.Type.Str)}` : p;
    return [s.default.instancePath, (0, t.strConcat)(s.default.instancePath, g)];
  }
  function b({ keyword: p, it: { errSchemaPath: h } }, { schemaPath: g, parentSchema: f }) {
    let z = f ? h : t.str`${h}/${p}`;
    if (g) z = t.str`${z}${(0, r.getErrorPath)(g, r.Type.Str)}`;
    return [m.schemaPath, z];
  }
  function y(p, { params: h, message: g }, f) {
    let { keyword: z, data: q, schemaValue: R, it: S } = p, { opts: O, propertyName: x, topSchemaRef: G, schemaPath: L } = S;
    if (f.push([m.keyword, z], [m.params, typeof h == "function" ? h(p) : h || t._`{}`]), O.messages) f.push([m.message, typeof g == "function" ? g(p) : g]);
    if (O.verbose) f.push([m.schema, R], [m.parentSchema, t._`${G}${L}`], [s.default.data, q]);
    if (x) f.push([m.propertyName, x]);
  }
}), td = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.boolOrEmptySchema = e4.topBoolOrEmptySchema = void 0;
  let t = Aa(), r = oe(), s = Ke(), o = { message: "boolean schema is false" };
  function a(l) {
    let { gen: d, schema: m, validateName: _ } = l;
    if (m === false) u(l, false);
    else if (typeof m == "object" && m.$async === true) d.return(s.default.data);
    else d.assign(r._`${_}.errors`, null), d.return(true);
  }
  e4.topBoolOrEmptySchema = a;
  function i(l, d) {
    let { gen: m, schema: _ } = l;
    if (_ === false) m.var(d, false), u(l);
    else m.var(d, true);
  }
  e4.boolOrEmptySchema = i;
  function u(l, d) {
    let { gen: m, data: _ } = l, w = { gen: m, keyword: "false schema", data: _, schema: false, schemaCode: false, schemaValue: false, params: {}, it: l };
    (0, t.reportError)(w, o, void 0, d);
  }
}), gc = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.getRules = e4.isJSONType = void 0;
  let t = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null", "object", "array"]);
  function r(o) {
    return typeof o == "string" && t.has(o);
  }
  e4.isJSONType = r;
  function s() {
    let o = { number: { type: "number", rules: [] }, string: { type: "string", rules: [] }, array: { type: "array", rules: [] }, object: { type: "object", rules: [] } };
    return { types: { ...o, integer: true, boolean: true, null: true }, rules: [{ rules: [] }, o.number, o.string, o.array, o.object], post: { rules: [] }, all: {}, keywords: {} };
  }
  e4.getRules = s;
}), Sc = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.shouldUseRule = e4.shouldUseGroup = e4.schemaHasRulesForType = void 0;
  function t({ schema: o, self: a }, i) {
    let u = a.RULES.types[i];
    return u && u !== true && r(o, u);
  }
  e4.schemaHasRulesForType = t;
  function r(o, a) {
    return a.rules.some((i) => s(o, i));
  }
  e4.shouldUseGroup = r;
  function s(o, a) {
    var i;
    return o[a.keyword] !== void 0 || ((i = a.definition.implements) === null || i === void 0 ? void 0 : i.some((u) => o[u] !== void 0));
  }
  e4.shouldUseRule = s;
}), ja = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.reportTypeError = e4.checkDataTypes = e4.checkDataType = e4.coerceAndCheckDataType = e4.getJSONTypes = e4.getSchemaTypes = e4.DataType = void 0;
  let t = gc(), r = Sc(), s = Aa(), o = oe(), a = le();
  var i;
  (function(f) {
    f[f.Correct = 0] = "Correct", f[f.Wrong = 1] = "Wrong";
  })(i || (e4.DataType = i = {}));
  function u(f) {
    let z = l(f.type);
    if (z.includes("null")) {
      if (f.nullable === false) throw Error("type: null contradicts nullable: false");
    } else {
      if (!z.length && f.nullable !== void 0) throw Error('"nullable" cannot be used without "type"');
      if (f.nullable === true) z.push("null");
    }
    return z;
  }
  e4.getSchemaTypes = u;
  function l(f) {
    let z = Array.isArray(f) ? f : f ? [f] : [];
    if (z.every(t.isJSONType)) return z;
    throw Error("type must be JSONType or JSONType[]: " + z.join(","));
  }
  e4.getJSONTypes = l;
  function d(f, z) {
    let { gen: q, data: R, opts: S } = f, O = _(z, S.coerceTypes), x = z.length > 0 && !(O.length === 0 && z.length === 1 && (0, r.schemaHasRulesForType)(f, z[0]));
    if (x) {
      let G = y(z, R, S.strictNumbers, i.Wrong);
      q.if(G, () => {
        if (O.length) w(f, z, O);
        else h(f);
      });
    }
    return x;
  }
  e4.coerceAndCheckDataType = d;
  let m = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function _(f, z) {
    return z ? f.filter((q) => m.has(q) || z === "array" && q === "array") : [];
  }
  function w(f, z, q) {
    let { gen: R, data: S, opts: O } = f, x = R.let("dataType", o._`typeof ${S}`), G = R.let("coerced", o._`undefined`);
    if (O.coerceTypes === "array") R.if(o._`${x} == 'object' && Array.isArray(${S}) && ${S}.length == 1`, () => R.assign(S, o._`${S}[0]`).assign(x, o._`typeof ${S}`).if(y(z, S, O.strictNumbers), () => R.assign(G, S)));
    R.if(o._`${G} !== undefined`);
    for (let H of q) if (m.has(H) || H === "array" && O.coerceTypes === "array") L(H);
    R.else(), h(f), R.endIf(), R.if(o._`${G} !== undefined`, () => {
      R.assign(S, G), I(f, G);
    });
    function L(H) {
      switch (H) {
        case "string":
          R.elseIf(o._`${x} == "number" || ${x} == "boolean"`).assign(G, o._`"" + ${S}`).elseIf(o._`${S} === null`).assign(G, o._`""`);
          return;
        case "number":
          R.elseIf(o._`${x} == "boolean" || ${S} === null
              || (${x} == "string" && ${S} && ${S} == +${S})`).assign(G, o._`+${S}`);
          return;
        case "integer":
          R.elseIf(o._`${x} === "boolean" || ${S} === null
              || (${x} === "string" && ${S} && ${S} == +${S} && !(${S} % 1))`).assign(G, o._`+${S}`);
          return;
        case "boolean":
          R.elseIf(o._`${S} === "false" || ${S} === 0 || ${S} === null`).assign(G, false).elseIf(o._`${S} === "true" || ${S} === 1`).assign(G, true);
          return;
        case "null":
          R.elseIf(o._`${S} === "" || ${S} === 0 || ${S} === false`), R.assign(G, null);
          return;
        case "array":
          R.elseIf(o._`${x} === "string" || ${x} === "number"
              || ${x} === "boolean" || ${S} === null`).assign(G, o._`[${S}]`);
      }
    }
  }
  function I({ gen: f, parentData: z, parentDataProperty: q }, R) {
    f.if(o._`${z} !== undefined`, () => f.assign(o._`${z}[${q}]`, R));
  }
  function b(f, z, q, R = i.Correct) {
    let S = R === i.Correct ? o.operators.EQ : o.operators.NEQ, O;
    switch (f) {
      case "null":
        return o._`${z} ${S} null`;
      case "array":
        O = o._`Array.isArray(${z})`;
        break;
      case "object":
        O = o._`${z} && typeof ${z} == "object" && !Array.isArray(${z})`;
        break;
      case "integer":
        O = x(o._`!(${z} % 1) && !isNaN(${z})`);
        break;
      case "number":
        O = x();
        break;
      default:
        return o._`typeof ${z} ${S} ${f}`;
    }
    return R === i.Correct ? O : (0, o.not)(O);
    function x(G = o.nil) {
      return (0, o.and)(o._`typeof ${z} == "number"`, G, q ? o._`isFinite(${z})` : o.nil);
    }
  }
  e4.checkDataType = b;
  function y(f, z, q, R) {
    if (f.length === 1) return b(f[0], z, q, R);
    let S, O = (0, a.toHash)(f);
    if (O.array && O.object) {
      let x = o._`typeof ${z} != "object"`;
      S = O.null ? x : o._`!${z} || ${x}`, delete O.null, delete O.array, delete O.object;
    } else S = o.nil;
    if (O.number) delete O.integer;
    for (let x in O) S = (0, o.and)(S, b(x, z, q, R));
    return S;
  }
  e4.checkDataTypes = y;
  let p = { message: ({ schema: f }) => `must be ${f}`, params: ({ schema: f, schemaValue: z }) => typeof f == "string" ? o._`{type: ${f}}` : o._`{type: ${z}}` };
  function h(f) {
    let z = g(f);
    (0, s.reportError)(z, p);
  }
  e4.reportTypeError = h;
  function g(f) {
    let { gen: z, data: q, schema: R } = f, S = (0, a.schemaRefOrVal)(f, R, "type");
    return { gen: z, keyword: "type", data: q, schema: R.type, schemaCode: S, schemaValue: S, parentSchema: R, params: {}, it: f };
  }
}), rd = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.assignDefaults = void 0;
  let t = oe(), r = le();
  function s(a, i) {
    let { properties: u, items: l } = a.schema;
    if (i === "object" && u) for (let d in u) o(a, d, u[d].default);
    else if (i === "array" && Array.isArray(l)) l.forEach((d, m) => o(a, m, d.default));
  }
  e4.assignDefaults = s;
  function o(a, i, u) {
    let { gen: l, compositeRule: d, data: m, opts: _ } = a;
    if (u === void 0) return;
    let w = t._`${m}${(0, t.getProperty)(i)}`;
    if (d) {
      (0, r.checkStrictMode)(a, `default is ignored for: ${w}`);
      return;
    }
    let I = t._`${w} === undefined`;
    if (_.useDefaults === "empty") I = t._`${I} || ${w} === null || ${w} === ""`;
    l.if(I, t._`${w} = ${(0, t.stringify)(u)}`);
  }
}), Ge = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.validateUnion = e4.validateArray = e4.usePattern = e4.callValidateCode = e4.schemaProperties = e4.allSchemaProperties = e4.noPropertyInData = e4.propertyInData = e4.isOwnProperty = e4.hasPropFunc = e4.reportMissingProp = e4.checkMissingProp = e4.checkReportMissingProp = void 0;
  let t = oe(), r = le(), s = Ke(), o = le();
  function a(f, z) {
    let { gen: q, data: R, it: S } = f;
    q.if(_(q, R, z, S.opts.ownProperties), () => {
      f.setParams({ missingProperty: t._`${z}` }, true), f.error();
    });
  }
  e4.checkReportMissingProp = a;
  function i({ gen: f, data: z, it: { opts: q } }, R, S) {
    return (0, t.or)(...R.map((O) => (0, t.and)(_(f, z, O, q.ownProperties), t._`${S} = ${O}`)));
  }
  e4.checkMissingProp = i;
  function u(f, z) {
    f.setParams({ missingProperty: z }, true), f.error();
  }
  e4.reportMissingProp = u;
  function l(f) {
    return f.scopeValue("func", { ref: Object.prototype.hasOwnProperty, code: t._`Object.prototype.hasOwnProperty` });
  }
  e4.hasPropFunc = l;
  function d(f, z, q) {
    return t._`${l(f)}.call(${z}, ${q})`;
  }
  e4.isOwnProperty = d;
  function m(f, z, q, R) {
    let S = t._`${z}${(0, t.getProperty)(q)} !== undefined`;
    return R ? t._`${S} && ${d(f, z, q)}` : S;
  }
  e4.propertyInData = m;
  function _(f, z, q, R) {
    let S = t._`${z}${(0, t.getProperty)(q)} === undefined`;
    return R ? (0, t.or)(S, (0, t.not)(d(f, z, q))) : S;
  }
  e4.noPropertyInData = _;
  function w(f) {
    return f ? Object.keys(f).filter((z) => z !== "__proto__") : [];
  }
  e4.allSchemaProperties = w;
  function I(f, z) {
    return w(z).filter((q) => !(0, r.alwaysValidSchema)(f, z[q]));
  }
  e4.schemaProperties = I;
  function b({ schemaCode: f, data: z, it: { gen: q, topSchemaRef: R, schemaPath: S, errorPath: O }, it: x }, G, L, H) {
    let Z = H ? t._`${f}, ${z}, ${R}${S}` : z, X = [[s.default.instancePath, (0, t.strConcat)(s.default.instancePath, O)], [s.default.parentData, x.parentData], [s.default.parentDataProperty, x.parentDataProperty], [s.default.rootData, s.default.rootData]];
    if (x.opts.dynamicRef) X.push([s.default.dynamicAnchors, s.default.dynamicAnchors]);
    let ne = t._`${Z}, ${q.object(...X)}`;
    return L !== t.nil ? t._`${G}.call(${L}, ${ne})` : t._`${G}(${ne})`;
  }
  e4.callValidateCode = b;
  let y = t._`new RegExp`;
  function p({ gen: f, it: { opts: z } }, q) {
    let R = z.unicodeRegExp ? "u" : "", { regExp: S } = z.code, O = S(q, R);
    return f.scopeValue("pattern", { key: O.toString(), ref: O, code: t._`${S.code === "new RegExp" ? y : (0, o.useFunc)(f, S)}(${q}, ${R})` });
  }
  e4.usePattern = p;
  function h(f) {
    let { gen: z, data: q, keyword: R, it: S } = f, O = z.name("valid");
    if (S.allErrors) {
      let G = z.let("valid", true);
      return x(() => z.assign(G, false)), G;
    }
    return z.var(O, true), x(() => z.break()), O;
    function x(G) {
      let L = z.const("len", t._`${q}.length`);
      z.forRange("i", 0, L, (H) => {
        f.subschema({ keyword: R, dataProp: H, dataPropType: r.Type.Num }, O), z.if((0, t.not)(O), G);
      });
    }
  }
  e4.validateArray = h;
  function g(f) {
    let { gen: z, schema: q, keyword: R, it: S } = f;
    if (!Array.isArray(q)) throw Error("ajv implementation error");
    if (q.some((G) => (0, r.alwaysValidSchema)(S, G)) && !S.opts.unevaluated) return;
    let O = z.let("valid", false), x = z.name("_valid");
    z.block(() => q.forEach((G, L) => {
      let H = f.subschema({ keyword: R, schemaProp: L, compositeRule: true }, x);
      if (z.assign(O, t._`${O} || ${x}`), !f.mergeValidEvaluated(H, x)) z.if((0, t.not)(O));
    })), f.result(O, () => f.reset(), () => f.error(true));
  }
  e4.validateUnion = g;
}), sd = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.validateKeywordUsage = e4.validSchemaType = e4.funcKeywordCode = e4.macroKeywordCode = void 0;
  let t = oe(), r = Ke(), s = Ge(), o = Aa();
  function a(I, b) {
    let { gen: y, keyword: p, schema: h, parentSchema: g, it: f } = I, z = b.macro.call(f.self, h, g, f), q = m(y, p, z);
    if (f.opts.validateSchema !== false) f.self.validateSchema(z, true);
    let R = y.name("valid");
    I.subschema({ schema: z, schemaPath: t.nil, errSchemaPath: `${f.errSchemaPath}/${p}`, topSchemaRef: q, compositeRule: true }, R), I.pass(R, () => I.error(true));
  }
  e4.macroKeywordCode = a;
  function i(I, b) {
    var y;
    let { gen: p, keyword: h, schema: g, parentSchema: f, $data: z, it: q } = I;
    d(q, b);
    let R = m(p, h, !z && b.compile ? b.compile.call(q.self, g, f, q) : b.validate), S = p.let("valid");
    I.block$data(S, O), I.ok((y = b.valid) !== null && y !== void 0 ? y : S);
    function O() {
      if (b.errors === false) {
        if (L(), b.modifying) u(I);
        H(() => I.error());
      } else {
        let Z = b.async ? x() : G();
        if (b.modifying) u(I);
        H(() => l(I, Z));
      }
    }
    function x() {
      let Z = p.let("ruleErrs", null);
      return p.try(() => L(t._`await `), (X) => p.assign(S, false).if(t._`${X} instanceof ${q.ValidationError}`, () => p.assign(Z, t._`${X}.errors`), () => p.throw(X))), Z;
    }
    function G() {
      let Z = t._`${R}.errors`;
      return p.assign(Z, null), L(t.nil), Z;
    }
    function L(Z = b.async ? t._`await ` : t.nil) {
      let X = q.opts.passContext ? r.default.this : r.default.self, ne = !("compile" in b && !z || b.schema === false);
      p.assign(S, t._`${Z}${(0, s.callValidateCode)(I, R, X, ne)}`, b.modifying);
    }
    function H(Z) {
      var X;
      p.if((0, t.not)((X = b.valid) !== null && X !== void 0 ? X : S), Z);
    }
  }
  e4.funcKeywordCode = i;
  function u(I) {
    let { gen: b, data: y, it: p } = I;
    b.if(p.parentData, () => b.assign(y, t._`${p.parentData}[${p.parentDataProperty}]`));
  }
  function l(I, b) {
    let { gen: y } = I;
    y.if(t._`Array.isArray(${b})`, () => {
      y.assign(r.default.vErrors, t._`${r.default.vErrors} === null ? ${b} : ${r.default.vErrors}.concat(${b})`).assign(r.default.errors, t._`${r.default.vErrors}.length`), (0, o.extendErrors)(I);
    }, () => I.error());
  }
  function d({ schemaEnv: I }, b) {
    if (b.async && !I.$async) throw Error("async keyword in sync schema");
  }
  function m(I, b, y) {
    if (y === void 0) throw Error(`keyword "${b}" failed to compile`);
    return I.scopeValue("keyword", typeof y == "function" ? { ref: y } : { ref: y, code: (0, t.stringify)(y) });
  }
  function _(I, b, y = false) {
    return !b.length || b.some((p) => p === "array" ? Array.isArray(I) : p === "object" ? I && typeof I == "object" && !Array.isArray(I) : typeof I == p || y && typeof I > "u");
  }
  e4.validSchemaType = _;
  function w({ schema: I, opts: b, self: y, errSchemaPath: p }, h, g) {
    if (Array.isArray(h.keyword) ? !h.keyword.includes(g) : h.keyword !== g) throw Error("ajv implementation error");
    let f = h.dependencies;
    if (f === null || f === void 0 ? void 0 : f.some((z) => !Object.prototype.hasOwnProperty.call(I, z))) throw Error(`parent schema must have dependencies of ${g}: ${f.join(",")}`);
    if (h.validateSchema) {
      if (!h.validateSchema(I[g])) {
        let z = `keyword "${g}" value is invalid at path "${p}": ` + y.errorsText(h.validateSchema.errors);
        if (b.validateSchema === "log") y.logger.error(z);
        else throw Error(z);
      }
    }
  }
  e4.validateKeywordUsage = w;
}), od = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.extendSubschemaMode = e4.extendSubschemaData = e4.getSubschema = void 0;
  let t = oe(), r = le();
  function s(i, { keyword: u, schemaProp: l, schema: d, schemaPath: m, errSchemaPath: _, topSchemaRef: w }) {
    if (u !== void 0 && d !== void 0) throw Error('both "keyword" and "schema" passed, only one allowed');
    if (u !== void 0) {
      let I = i.schema[u];
      return l === void 0 ? { schema: I, schemaPath: t._`${i.schemaPath}${(0, t.getProperty)(u)}`, errSchemaPath: `${i.errSchemaPath}/${u}` } : { schema: I[l], schemaPath: t._`${i.schemaPath}${(0, t.getProperty)(u)}${(0, t.getProperty)(l)}`, errSchemaPath: `${i.errSchemaPath}/${u}/${(0, r.escapeFragment)(l)}` };
    }
    if (d !== void 0) {
      if (m === void 0 || _ === void 0 || w === void 0) throw Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return { schema: d, schemaPath: m, topSchemaRef: w, errSchemaPath: _ };
    }
    throw Error('either "keyword" or "schema" must be passed');
  }
  e4.getSubschema = s;
  function o(i, u, { dataProp: l, dataPropType: d, data: m, dataTypes: _, propertyName: w }) {
    if (m !== void 0 && l !== void 0) throw Error('both "data" and "dataProp" passed, only one allowed');
    let { gen: I } = u;
    if (l !== void 0) {
      let { errorPath: y, dataPathArr: p, opts: h } = u;
      b(I.let("data", t._`${u.data}${(0, t.getProperty)(l)}`, true)), i.errorPath = t.str`${y}${(0, r.getErrorPath)(l, d, h.jsPropertySyntax)}`, i.parentDataProperty = t._`${l}`, i.dataPathArr = [...p, i.parentDataProperty];
    }
    if (m !== void 0) {
      if (b(m instanceof t.Name ? m : I.let("data", m, true)), w !== void 0) i.propertyName = w;
    }
    if (_) i.dataTypes = _;
    function b(y) {
      i.data = y, i.dataLevel = u.dataLevel + 1, i.dataTypes = [], u.definedProperties = /* @__PURE__ */ new Set(), i.parentData = u.data, i.dataNames = [...u.dataNames, y];
    }
  }
  e4.extendSubschemaData = o;
  function a(i, { jtdDiscriminator: u, jtdMetadata: l, compositeRule: d, createErrors: m, allErrors: _ }) {
    if (d !== void 0) i.compositeRule = d;
    if (m !== void 0) i.createErrors = m;
    if (_ !== void 0) i.allErrors = _;
    i.jtdDiscriminator = u, i.jtdMetadata = l;
  }
  e4.extendSubschemaMode = a;
}), _c = W((e4, t) => {
  t.exports = function r(s, o) {
    if (s === o) return true;
    if (s && o && typeof s == "object" && typeof o == "object") {
      if (s.constructor !== o.constructor) return false;
      var a, i, u;
      if (Array.isArray(s)) {
        if (a = s.length, a != o.length) return false;
        for (i = a; i-- !== 0; ) if (!r(s[i], o[i])) return false;
        return true;
      }
      if (s.constructor === RegExp) return s.source === o.source && s.flags === o.flags;
      if (s.valueOf !== Object.prototype.valueOf) return s.valueOf() === o.valueOf();
      if (s.toString !== Object.prototype.toString) return s.toString() === o.toString();
      if (u = Object.keys(s), a = u.length, a !== Object.keys(o).length) return false;
      for (i = a; i-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(o, u[i])) return false;
      for (i = a; i-- !== 0; ) {
        var l = u[i];
        if (!r(s[l], o[l])) return false;
      }
      return true;
    }
    return s !== s && o !== o;
  };
}), ad = W((e4, t) => {
  var r = t.exports = function(a, i, u) {
    if (typeof i == "function") u = i, i = {};
    u = i.cb || u;
    var l = typeof u == "function" ? u : u.pre || function() {
    }, d = u.post || function() {
    };
    s(i, l, d, a, "", a);
  };
  r.keywords = { additionalItems: true, items: true, contains: true, additionalProperties: true, propertyNames: true, not: true, if: true, then: true, else: true }, r.arrayKeywords = { items: true, allOf: true, anyOf: true, oneOf: true }, r.propsKeywords = { $defs: true, definitions: true, properties: true, patternProperties: true, dependencies: true }, r.skipKeywords = { default: true, enum: true, const: true, required: true, maximum: true, minimum: true, exclusiveMaximum: true, exclusiveMinimum: true, multipleOf: true, maxLength: true, minLength: true, pattern: true, format: true, maxItems: true, minItems: true, uniqueItems: true, maxProperties: true, minProperties: true };
  function s(a, i, u, l, d, m, _, w, I, b) {
    if (l && typeof l == "object" && !Array.isArray(l)) {
      i(l, d, m, _, w, I, b);
      for (var y in l) {
        var p = l[y];
        if (Array.isArray(p)) {
          if (y in r.arrayKeywords) for (var h = 0; h < p.length; h++) s(a, i, u, p[h], d + "/" + y + "/" + h, m, d, y, l, h);
        } else if (y in r.propsKeywords) {
          if (p && typeof p == "object") for (var g in p) s(a, i, u, p[g], d + "/" + y + "/" + o(g), m, d, y, l, g);
        } else if (y in r.keywords || a.allKeys && !(y in r.skipKeywords)) s(a, i, u, p, d + "/" + y, m, d, y, l);
      }
      u(l, d, m, _, w, I, b);
    }
  }
  function o(a) {
    return a.replace(/~/g, "~0").replace(/\//g, "~1");
  }
}), La = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.getSchemaRefs = e4.resolveUrl = e4.normalizeId = e4._getFullPath = e4.getFullPath = e4.inlineRef = void 0;
  let t = le(), r = _c(), s = ad(), o = /* @__PURE__ */ new Set(["type", "format", "pattern", "maxLength", "minLength", "maxProperties", "minProperties", "maxItems", "minItems", "maximum", "minimum", "uniqueItems", "multipleOf", "required", "enum", "const"]);
  function a(p, h = true) {
    if (typeof p == "boolean") return true;
    if (h === true) return !u(p);
    if (!h) return false;
    return l(p) <= h;
  }
  e4.inlineRef = a;
  let i = /* @__PURE__ */ new Set(["$ref", "$recursiveRef", "$recursiveAnchor", "$dynamicRef", "$dynamicAnchor"]);
  function u(p) {
    for (let h in p) {
      if (i.has(h)) return true;
      let g = p[h];
      if (Array.isArray(g) && g.some(u)) return true;
      if (typeof g == "object" && u(g)) return true;
    }
    return false;
  }
  function l(p) {
    let h = 0;
    for (let g in p) {
      if (g === "$ref") return 1 / 0;
      if (h++, o.has(g)) continue;
      if (typeof p[g] == "object") (0, t.eachItem)(p[g], (f) => h += l(f));
      if (h === 1 / 0) return 1 / 0;
    }
    return h;
  }
  function d(p, h = "", g) {
    if (g !== false) h = w(h);
    return m(p, p.parse(h));
  }
  e4.getFullPath = d;
  function m(p, h) {
    return p.serialize(h).split("#")[0] + "#";
  }
  e4._getFullPath = m;
  let _ = /#\/?$/;
  function w(p) {
    return p ? p.replace(_, "") : "";
  }
  e4.normalizeId = w;
  function I(p, h, g) {
    return g = w(g), p.resolve(h, g);
  }
  e4.resolveUrl = I;
  let b = /^[a-z_][-a-z0-9._]*$/i;
  function y(p, h) {
    if (typeof p == "boolean") return {};
    let { schemaId: g, uriResolver: f } = this.opts, z = w(p[g] || h), q = { "": z }, R = d(f, z, false), S = {}, O = /* @__PURE__ */ new Set();
    return s(p, { allKeys: true }, (L, H, Z, X) => {
      if (X === void 0) return;
      let ne = R + H, pe = q[X];
      if (typeof L[g] == "string") pe = de.call(this, L[g]);
      be.call(this, L.$anchor), be.call(this, L.$dynamicAnchor), q[H] = pe;
      function de(ce) {
        let j = this.opts.uriResolver.resolve;
        if (ce = w(pe ? j(pe, ce) : ce), O.has(ce)) throw G(ce);
        O.add(ce);
        let D = this.refs[ce];
        if (typeof D == "string") D = this.refs[D];
        if (typeof D == "object") x(L, D.schema, ce);
        else if (ce !== w(ne)) if (ce[0] === "#") x(L, S[ce], ce), S[ce] = L;
        else this.refs[ce] = ne;
        return ce;
      }
      function be(ce) {
        if (typeof ce == "string") {
          if (!b.test(ce)) throw Error(`invalid anchor "${ce}"`);
          de.call(this, `#${ce}`);
        }
      }
    }), S;
    function x(L, H, Z) {
      if (H !== void 0 && !r(L, H)) throw G(Z);
    }
    function G(L) {
      return Error(`reference "${L}" resolves to more than one schema`);
    }
  }
  e4.getSchemaRefs = y;
}), bs = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.getData = e4.KeywordCxt = e4.validateFunctionCode = void 0;
  let t = td(), r = ja(), s = Sc(), o = ja(), a = rd(), i = sd(), u = od(), l = oe(), d = Ke(), m = La(), _ = le(), w = Aa();
  function I(N) {
    if (R(N)) {
      if (O(N), q(N)) {
        h(N);
        return;
      }
    }
    b(N, () => (0, t.topBoolOrEmptySchema)(N));
  }
  e4.validateFunctionCode = I;
  function b({ gen: N, validateName: V, schema: K, schemaEnv: ee, opts: te }, se) {
    if (te.code.es5) N.func(V, l._`${d.default.data}, ${d.default.valCxt}`, ee.$async, () => {
      N.code(l._`"use strict"; ${f(K, te)}`), p(N, te), N.code(se);
    });
    else N.func(V, l._`${d.default.data}, ${y(te)}`, ee.$async, () => N.code(f(K, te)).code(se));
  }
  function y(N) {
    return l._`{${d.default.instancePath}="", ${d.default.parentData}, ${d.default.parentDataProperty}, ${d.default.rootData}=${d.default.data}${N.dynamicRef ? l._`, ${d.default.dynamicAnchors}={}` : l.nil}}={}`;
  }
  function p(N, V) {
    N.if(d.default.valCxt, () => {
      if (N.var(d.default.instancePath, l._`${d.default.valCxt}.${d.default.instancePath}`), N.var(d.default.parentData, l._`${d.default.valCxt}.${d.default.parentData}`), N.var(d.default.parentDataProperty, l._`${d.default.valCxt}.${d.default.parentDataProperty}`), N.var(d.default.rootData, l._`${d.default.valCxt}.${d.default.rootData}`), V.dynamicRef) N.var(d.default.dynamicAnchors, l._`${d.default.valCxt}.${d.default.dynamicAnchors}`);
    }, () => {
      if (N.var(d.default.instancePath, l._`""`), N.var(d.default.parentData, l._`undefined`), N.var(d.default.parentDataProperty, l._`undefined`), N.var(d.default.rootData, d.default.data), V.dynamicRef) N.var(d.default.dynamicAnchors, l._`{}`);
    });
  }
  function h(N) {
    let { schema: V, opts: K, gen: ee } = N;
    b(N, () => {
      if (K.$comment && V.$comment) X(N);
      if (L(N), ee.let(d.default.vErrors, null), ee.let(d.default.errors, 0), K.unevaluated) g(N);
      x(N), ne(N);
    });
  }
  function g(N) {
    let { gen: V, validateName: K } = N;
    N.evaluated = V.const("evaluated", l._`${K}.evaluated`), V.if(l._`${N.evaluated}.dynamicProps`, () => V.assign(l._`${N.evaluated}.props`, l._`undefined`)), V.if(l._`${N.evaluated}.dynamicItems`, () => V.assign(l._`${N.evaluated}.items`, l._`undefined`));
  }
  function f(N, V) {
    let K = typeof N == "object" && N[V.schemaId];
    return K && (V.code.source || V.code.process) ? l._`/*# sourceURL=${K} */` : l.nil;
  }
  function z(N, V) {
    if (R(N)) {
      if (O(N), q(N)) {
        S(N, V);
        return;
      }
    }
    (0, t.boolOrEmptySchema)(N, V);
  }
  function q({ schema: N, self: V }) {
    if (typeof N == "boolean") return !N;
    for (let K in N) if (V.RULES.all[K]) return true;
    return false;
  }
  function R(N) {
    return typeof N.schema != "boolean";
  }
  function S(N, V) {
    let { schema: K, gen: ee, opts: te } = N;
    if (te.$comment && K.$comment) X(N);
    H(N), Z(N);
    let se = ee.const("_errs", d.default.errors);
    x(N, se), ee.var(V, l._`${se} === ${d.default.errors}`);
  }
  function O(N) {
    (0, _.checkUnknownRules)(N), G(N);
  }
  function x(N, V) {
    if (N.opts.jtd) return de(N, [], false, V);
    let K = (0, r.getSchemaTypes)(N.schema);
    de(N, K, !(0, r.coerceAndCheckDataType)(N, K), V);
  }
  function G(N) {
    let { schema: V, errSchemaPath: K, opts: ee, self: te } = N;
    if (V.$ref && ee.ignoreKeywordsWithRef && (0, _.schemaHasRulesButRef)(V, te.RULES)) te.logger.warn(`$ref: keywords ignored in schema at path "${K}"`);
  }
  function L(N) {
    let { schema: V, opts: K } = N;
    if (V.default !== void 0 && K.useDefaults && K.strictSchema) (0, _.checkStrictMode)(N, "default is ignored in the schema root");
  }
  function H(N) {
    let V = N.schema[N.opts.schemaId];
    if (V) N.baseId = (0, m.resolveUrl)(N.opts.uriResolver, N.baseId, V);
  }
  function Z(N) {
    if (N.schema.$async && !N.schemaEnv.$async) throw Error("async schema in sync schema");
  }
  function X({ gen: N, schemaEnv: V, schema: K, errSchemaPath: ee, opts: te }) {
    let se = K.$comment;
    if (te.$comment === true) N.code(l._`${d.default.self}.logger.log(${se})`);
    else if (typeof te.$comment == "function") {
      let ye = l.str`${ee}/$comment`, ze = N.scopeValue("root", { ref: V.root });
      N.code(l._`${d.default.self}.opts.$comment(${se}, ${ye}, ${ze}.schema)`);
    }
  }
  function ne(N) {
    let { gen: V, schemaEnv: K, validateName: ee, ValidationError: te, opts: se } = N;
    if (K.$async) V.if(l._`${d.default.errors} === 0`, () => V.return(d.default.data), () => V.throw(l._`new ${te}(${d.default.vErrors})`));
    else {
      if (V.assign(l._`${ee}.errors`, d.default.vErrors), se.unevaluated) pe(N);
      V.return(l._`${d.default.errors} === 0`);
    }
  }
  function pe({ gen: N, evaluated: V, props: K, items: ee }) {
    if (K instanceof l.Name) N.assign(l._`${V}.props`, K);
    if (ee instanceof l.Name) N.assign(l._`${V}.items`, ee);
  }
  function de(N, V, K, ee) {
    let { gen: te, schema: se, data: ye, allErrors: ze, opts: Te, self: Re } = N, { RULES: ge } = Re;
    if (se.$ref && (Te.ignoreKeywordsWithRef || !(0, _.schemaHasRulesButRef)(se, ge))) {
      te.block(() => ae(N, "$ref", ge.all.$ref.definition));
      return;
    }
    if (!Te.jtd) ce(N, V);
    te.block(() => {
      for (let Ee of ge.rules) De(Ee);
      De(ge.post);
    });
    function De(Ee) {
      if (!(0, s.shouldUseGroup)(se, Ee)) return;
      if (Ee.type) {
        if (te.if((0, o.checkDataType)(Ee.type, ye, Te.strictNumbers)), be(N, Ee), V.length === 1 && V[0] === Ee.type && K) te.else(), (0, o.reportTypeError)(N);
        te.endIf();
      } else be(N, Ee);
      if (!ze) te.if(l._`${d.default.errors} === ${ee || 0}`);
    }
  }
  function be(N, V) {
    let { gen: K, schema: ee, opts: { useDefaults: te } } = N;
    if (te) (0, a.assignDefaults)(N, V.type);
    K.block(() => {
      for (let se of V.rules) if ((0, s.shouldUseRule)(ee, se)) ae(N, se.keyword, se.definition, V.type);
    });
  }
  function ce(N, V) {
    if (N.schemaEnv.meta || !N.opts.strictTypes) return;
    if (j(N, V), !N.opts.allowUnionTypes) D(N, V);
    J(N, N.dataTypes);
  }
  function j(N, V) {
    if (!V.length) return;
    if (!N.dataTypes.length) {
      N.dataTypes = V;
      return;
    }
    V.forEach((K) => {
      if (!M(N.dataTypes, K)) Y(N, `type "${K}" not allowed by context "${N.dataTypes.join(",")}"`);
    }), U(N, V);
  }
  function D(N, V) {
    if (V.length > 1 && !(V.length === 2 && V.includes("null"))) Y(N, "use allowUnionTypes to allow union type keyword");
  }
  function J(N, V) {
    let K = N.self.RULES.all;
    for (let ee in K) {
      let te = K[ee];
      if (typeof te == "object" && (0, s.shouldUseRule)(N.schema, te)) {
        let { type: se } = te.definition;
        if (se.length && !se.some((ye) => T(V, ye))) Y(N, `missing type "${se.join(",")}" for keyword "${ee}"`);
      }
    }
  }
  function T(N, V) {
    return N.includes(V) || V === "number" && N.includes("integer");
  }
  function M(N, V) {
    return N.includes(V) || V === "integer" && N.includes("number");
  }
  function U(N, V) {
    let K = [];
    for (let ee of N.dataTypes) if (M(V, ee)) K.push(ee);
    else if (V.includes("integer") && ee === "number") K.push("integer");
    N.dataTypes = K;
  }
  function Y(N, V) {
    let K = N.schemaEnv.baseId + N.errSchemaPath;
    V += ` at "${K}" (strictTypes)`, (0, _.checkStrictMode)(N, V, N.opts.strictTypes);
  }
  var Q = class {
    constructor(N, V, K) {
      if ((0, i.validateKeywordUsage)(N, V, K), this.gen = N.gen, this.allErrors = N.allErrors, this.keyword = K, this.data = N.data, this.schema = N.schema[K], this.$data = V.$data && N.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, _.schemaRefOrVal)(N, this.schema, K, this.$data), this.schemaType = V.schemaType, this.parentSchema = N.schema, this.params = {}, this.it = N, this.def = V, this.$data) this.schemaCode = N.gen.const("vSchema", Oe(this.$data, N));
      else if (this.schemaCode = this.schemaValue, !(0, i.validSchemaType)(this.schema, V.schemaType, V.allowUndefined)) throw Error(`${K} value must be ${JSON.stringify(V.schemaType)}`);
      if ("code" in V ? V.trackErrors : V.errors !== false) this.errsCount = N.gen.const("_errs", d.default.errors);
    }
    result(N, V, K) {
      this.failResult((0, l.not)(N), V, K);
    }
    failResult(N, V, K) {
      if (this.gen.if(N), K) K();
      else this.error();
      if (V) {
        if (this.gen.else(), V(), this.allErrors) this.gen.endIf();
      } else if (this.allErrors) this.gen.endIf();
      else this.gen.else();
    }
    pass(N, V) {
      this.failResult((0, l.not)(N), void 0, V);
    }
    fail(N) {
      if (N === void 0) {
        if (this.error(), !this.allErrors) this.gen.if(false);
        return;
      }
      if (this.gen.if(N), this.error(), this.allErrors) this.gen.endIf();
      else this.gen.else();
    }
    fail$data(N) {
      if (!this.$data) return this.fail(N);
      let { schemaCode: V } = this;
      this.fail(l._`${V} !== undefined && (${(0, l.or)(this.invalid$data(), N)})`);
    }
    error(N, V, K) {
      if (V) {
        this.setParams(V), this._error(N, K), this.setParams({});
        return;
      }
      this._error(N, K);
    }
    _error(N, V) {
      (N ? w.reportExtraError : w.reportError)(this, this.def.error, V);
    }
    $dataError() {
      (0, w.reportError)(this, this.def.$dataError || w.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0) throw Error('add "trackErrors" to keyword definition');
      (0, w.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(N) {
      if (!this.allErrors) this.gen.if(N);
    }
    setParams(N, V) {
      if (V) Object.assign(this.params, N);
      else this.params = N;
    }
    block$data(N, V, K = l.nil) {
      this.gen.block(() => {
        this.check$data(N, K), V();
      });
    }
    check$data(N = l.nil, V = l.nil) {
      if (!this.$data) return;
      let { gen: K, schemaCode: ee, schemaType: te, def: se } = this;
      if (K.if((0, l.or)(l._`${ee} === undefined`, V)), N !== l.nil) K.assign(N, true);
      if (te.length || se.validateSchema) {
        if (K.elseIf(this.invalid$data()), this.$dataError(), N !== l.nil) K.assign(N, false);
      }
      K.else();
    }
    invalid$data() {
      let { gen: N, schemaCode: V, schemaType: K, def: ee, it: te } = this;
      return (0, l.or)(se(), ye());
      function se() {
        if (K.length) {
          if (!(V instanceof l.Name)) throw Error("ajv implementation error");
          let ze = Array.isArray(K) ? K : [K];
          return l._`${(0, o.checkDataTypes)(ze, V, te.opts.strictNumbers, o.DataType.Wrong)}`;
        }
        return l.nil;
      }
      function ye() {
        if (ee.validateSchema) {
          let ze = N.scopeValue("validate$data", { ref: ee.validateSchema });
          return l._`!${ze}(${V})`;
        }
        return l.nil;
      }
    }
    subschema(N, V) {
      let K = (0, u.getSubschema)(this.it, N);
      (0, u.extendSubschemaData)(K, this.it, N), (0, u.extendSubschemaMode)(K, N);
      let ee = { ...this.it, ...K, items: void 0, props: void 0 };
      return z(ee, V), ee;
    }
    mergeEvaluated(N, V) {
      let { it: K, gen: ee } = this;
      if (!K.opts.unevaluated) return;
      if (K.props !== true && N.props !== void 0) K.props = _.mergeEvaluated.props(ee, N.props, K.props, V);
      if (K.items !== true && N.items !== void 0) K.items = _.mergeEvaluated.items(ee, N.items, K.items, V);
    }
    mergeValidEvaluated(N, V) {
      let { it: K, gen: ee } = this;
      if (K.opts.unevaluated && (K.props !== true || K.items !== true)) return ee.if(V, () => this.mergeEvaluated(N, l.Name)), true;
    }
  };
  e4.KeywordCxt = Q;
  function ae(N, V, K, ee) {
    let te = new Q(N, K, V);
    if ("code" in K) K.code(te, ee);
    else if (te.$data && K.validate) (0, i.funcKeywordCode)(te, K);
    else if ("macro" in K) (0, i.macroKeywordCode)(te, K);
    else if (K.compile || K.validate) (0, i.funcKeywordCode)(te, K);
  }
  let re = /^\/(?:[^~]|~0|~1)*$/, me = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function Oe(N, { dataLevel: V, dataNames: K, dataPathArr: ee }) {
    let te, se;
    if (N === "") return d.default.rootData;
    if (N[0] === "/") {
      if (!re.test(N)) throw Error(`Invalid JSON-pointer: ${N}`);
      te = N, se = d.default.rootData;
    } else {
      let Re = me.exec(N);
      if (!Re) throw Error(`Invalid JSON-pointer: ${N}`);
      let ge = +Re[1];
      if (te = Re[2], te === "#") {
        if (ge >= V) throw Error(Te("property/index", ge));
        return ee[V - ge];
      }
      if (ge > V) throw Error(Te("data", ge));
      if (se = K[V - ge], !te) return se;
    }
    let ye = se, ze = te.split("/");
    for (let Re of ze) if (Re) se = l._`${se}${(0, l.getProperty)((0, _.unescapeJsonPointer)(Re))}`, ye = l._`${ye} && ${se}`;
    return ye;
    function Te(Re, ge) {
      return `Cannot access ${Re} ${ge} levels up, current level is ${V}`;
    }
  }
  e4.getData = Oe;
}), Da = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  var t = class extends Error {
    constructor(r) {
      super("validation failed");
      this.errors = r, this.ajv = this.validation = true;
    }
  };
  e4.default = t;
}), Rs = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = La();
  var r = class extends Error {
    constructor(s, o, a, i) {
      super(i || `can't resolve reference ${a} from id ${o}`);
      this.missingRef = (0, t.resolveUrl)(s, o, a), this.missingSchema = (0, t.normalizeId)((0, t.getFullPath)(s, this.missingRef));
    }
  };
  e4.default = r;
}), Va = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.resolveSchema = e4.getCompilingSchema = e4.resolveRef = e4.compileSchema = e4.SchemaEnv = void 0;
  let t = oe(), r = Da(), s = Ke(), o = La(), a = le(), i = bs();
  var u = class {
    constructor(h) {
      var g;
      this.refs = {}, this.dynamicAnchors = {};
      let f;
      if (typeof h.schema == "object") f = h.schema;
      this.schema = h.schema, this.schemaId = h.schemaId, this.root = h.root || this, this.baseId = (g = h.baseId) !== null && g !== void 0 ? g : (0, o.normalizeId)(f === null || f === void 0 ? void 0 : f[h.schemaId || "$id"]), this.schemaPath = h.schemaPath, this.localRefs = h.localRefs, this.meta = h.meta, this.$async = f === null || f === void 0 ? void 0 : f.$async, this.refs = {};
    }
  };
  e4.SchemaEnv = u;
  function l(h) {
    let g = _.call(this, h);
    if (g) return g;
    let f = (0, o.getFullPath)(this.opts.uriResolver, h.root.baseId), { es5: z, lines: q } = this.opts.code, { ownProperties: R } = this.opts, S = new t.CodeGen(this.scope, { es5: z, lines: q, ownProperties: R }), O;
    if (h.$async) O = S.scopeValue("Error", { ref: r.default, code: t._`require("ajv/dist/runtime/validation_error").default` });
    let x = S.scopeName("validate");
    h.validateName = x;
    let G = { gen: S, allErrors: this.opts.allErrors, data: s.default.data, parentData: s.default.parentData, parentDataProperty: s.default.parentDataProperty, dataNames: [s.default.data], dataPathArr: [t.nil], dataLevel: 0, dataTypes: [], definedProperties: /* @__PURE__ */ new Set(), topSchemaRef: S.scopeValue("schema", this.opts.code.source === true ? { ref: h.schema, code: (0, t.stringify)(h.schema) } : { ref: h.schema }), validateName: x, ValidationError: O, schema: h.schema, schemaEnv: h, rootId: f, baseId: h.baseId || f, schemaPath: t.nil, errSchemaPath: h.schemaPath || (this.opts.jtd ? "" : "#"), errorPath: t._`""`, opts: this.opts, self: this }, L;
    try {
      this._compilations.add(h), (0, i.validateFunctionCode)(G), S.optimize(this.opts.code.optimize);
      let H = S.toString();
      if (L = `${S.scopeRefs(s.default.scope)}return ${H}`, this.opts.code.process) L = this.opts.code.process(L, h);
      let Z = Function(`${s.default.self}`, `${s.default.scope}`, L)(this, this.scope.get());
      if (this.scope.value(x, { ref: Z }), Z.errors = null, Z.schema = h.schema, Z.schemaEnv = h, h.$async) Z.$async = true;
      if (this.opts.code.source === true) Z.source = { validateName: x, validateCode: H, scopeValues: S._values };
      if (this.opts.unevaluated) {
        let { props: X, items: ne } = G;
        if (Z.evaluated = { props: X instanceof t.Name ? void 0 : X, items: ne instanceof t.Name ? void 0 : ne, dynamicProps: X instanceof t.Name, dynamicItems: ne instanceof t.Name }, Z.source) Z.source.evaluated = (0, t.stringify)(Z.evaluated);
      }
      return h.validate = Z, h;
    } catch (H) {
      if (delete h.validate, delete h.validateName, L) this.logger.error("Error compiling schema, function code:", L);
      throw H;
    } finally {
      this._compilations.delete(h);
    }
  }
  e4.compileSchema = l;
  function d(h, g, f) {
    var z;
    f = (0, o.resolveUrl)(this.opts.uriResolver, g, f);
    let q = h.refs[f];
    if (q) return q;
    let R = I.call(this, h, f);
    if (R === void 0) {
      let S = (z = h.localRefs) === null || z === void 0 ? void 0 : z[f], { schemaId: O } = this.opts;
      if (S) R = new u({ schema: S, schemaId: O, root: h, baseId: g });
    }
    if (R === void 0) return;
    return h.refs[f] = m.call(this, R);
  }
  e4.resolveRef = d;
  function m(h) {
    if ((0, o.inlineRef)(h.schema, this.opts.inlineRefs)) return h.schema;
    return h.validate ? h : l.call(this, h);
  }
  function _(h) {
    for (let g of this._compilations) if (w(g, h)) return g;
  }
  e4.getCompilingSchema = _;
  function w(h, g) {
    return h.schema === g.schema && h.root === g.root && h.baseId === g.baseId;
  }
  function I(h, g) {
    let f;
    while (typeof (f = this.refs[g]) == "string") g = f;
    return f || this.schemas[g] || b.call(this, h, g);
  }
  function b(h, g) {
    let f = this.opts.uriResolver.parse(g), z = (0, o._getFullPath)(this.opts.uriResolver, f), q = (0, o.getFullPath)(this.opts.uriResolver, h.baseId, void 0);
    if (Object.keys(h.schema).length > 0 && z === q) return p.call(this, f, h);
    let R = (0, o.normalizeId)(z), S = this.refs[R] || this.schemas[R];
    if (typeof S == "string") {
      let O = b.call(this, h, S);
      if (typeof (O === null || O === void 0 ? void 0 : O.schema) !== "object") return;
      return p.call(this, f, O);
    }
    if (typeof (S === null || S === void 0 ? void 0 : S.schema) !== "object") return;
    if (!S.validate) l.call(this, S);
    if (R === (0, o.normalizeId)(g)) {
      let { schema: O } = S, { schemaId: x } = this.opts, G = O[x];
      if (G) q = (0, o.resolveUrl)(this.opts.uriResolver, q, G);
      return new u({ schema: O, schemaId: x, root: h, baseId: q });
    }
    return p.call(this, f, S);
  }
  e4.resolveSchema = b;
  let y = /* @__PURE__ */ new Set(["properties", "patternProperties", "enum", "dependencies", "definitions"]);
  function p(h, { baseId: g, schema: f, root: z }) {
    var q;
    if (((q = h.fragment) === null || q === void 0 ? void 0 : q[0]) !== "/") return;
    for (let O of h.fragment.slice(1).split("/")) {
      if (typeof f === "boolean") return;
      let x = f[(0, a.unescapeFragment)(O)];
      if (x === void 0) return;
      f = x;
      let G = typeof f === "object" && f[this.opts.schemaId];
      if (!y.has(O) && G) g = (0, o.resolveUrl)(this.opts.uriResolver, g, G);
    }
    let R;
    if (typeof f != "boolean" && f.$ref && !(0, a.schemaHasRulesButRef)(f, this.RULES)) {
      let O = (0, o.resolveUrl)(this.opts.uriResolver, g, f.$ref);
      R = b.call(this, z, O);
    }
    let { schemaId: S } = this.opts;
    if (R = R || new u({ schema: f, schemaId: S, root: z, baseId: g }), R.schema !== R.root.schema) return R;
  }
}), nd = W((e4, t) => {
  t.exports = { $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", description: "Meta-schema for $data reference (JSON AnySchema extension proposal)", type: "object", required: ["$data"], properties: { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, additionalProperties: false };
}), yc = W((e4, t) => {
  let r = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), s = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
  function o(b) {
    let y = "", p = 0, h = 0;
    for (h = 0; h < b.length; h++) {
      if (p = b[h].charCodeAt(0), p === 48) continue;
      if (!(p >= 48 && p <= 57 || p >= 65 && p <= 70 || p >= 97 && p <= 102)) return "";
      y += b[h];
      break;
    }
    for (h += 1; h < b.length; h++) {
      if (p = b[h].charCodeAt(0), !(p >= 48 && p <= 57 || p >= 65 && p <= 70 || p >= 97 && p <= 102)) return "";
      y += b[h];
    }
    return y;
  }
  let a = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function i(b) {
    return b.length = 0, true;
  }
  function u(b, y, p) {
    if (b.length) {
      let h = o(b);
      if (h !== "") y.push(h);
      else return p.error = true, false;
      b.length = 0;
    }
    return true;
  }
  function l(b) {
    let y = 0, p = { error: false, address: "", zone: "" }, h = [], g = [], f = false, z = false, q = u;
    for (let R = 0; R < b.length; R++) {
      let S = b[R];
      if (S === "[" || S === "]") continue;
      if (S === ":") {
        if (f === true) z = true;
        if (!q(g, h, p)) break;
        if (++y > 7) {
          p.error = true;
          break;
        }
        if (R > 0 && b[R - 1] === ":") f = true;
        h.push(":");
        continue;
      } else if (S === "%") {
        if (!q(g, h, p)) break;
        q = i;
      } else {
        g.push(S);
        continue;
      }
    }
    if (g.length) if (q === i) p.zone = g.join("");
    else if (z) h.push(g.join(""));
    else h.push(o(g));
    return p.address = h.join(""), p;
  }
  function d(b) {
    if (m(b, ":") < 2) return { host: b, isIPV6: false };
    let y = l(b);
    if (!y.error) {
      let { address: p, address: h } = y;
      if (y.zone) p += "%" + y.zone, h += "%25" + y.zone;
      return { host: p, isIPV6: true, escapedHost: h };
    } else return { host: b, isIPV6: false };
  }
  function m(b, y) {
    let p = 0;
    for (let h = 0; h < b.length; h++) if (b[h] === y) p++;
    return p;
  }
  function _(b) {
    let y = b, p = [], h = -1, g = 0;
    while (g = y.length) {
      if (g === 1) if (y === ".") break;
      else if (y === "/") {
        p.push("/");
        break;
      } else {
        p.push(y);
        break;
      }
      else if (g === 2) {
        if (y[0] === ".") {
          if (y[1] === ".") break;
          else if (y[1] === "/") {
            y = y.slice(2);
            continue;
          }
        } else if (y[0] === "/") {
          if (y[1] === "." || y[1] === "/") {
            p.push("/");
            break;
          }
        }
      } else if (g === 3) {
        if (y === "/..") {
          if (p.length !== 0) p.pop();
          p.push("/");
          break;
        }
      }
      if (y[0] === ".") {
        if (y[1] === ".") {
          if (y[2] === "/") {
            y = y.slice(3);
            continue;
          }
        } else if (y[1] === "/") {
          y = y.slice(2);
          continue;
        }
      } else if (y[0] === "/") {
        if (y[1] === ".") {
          if (y[2] === "/") {
            y = y.slice(2);
            continue;
          } else if (y[2] === ".") {
            if (y[3] === "/") {
              if (y = y.slice(3), p.length !== 0) p.pop();
              continue;
            }
          }
        }
      }
      if ((h = y.indexOf("/", 1)) === -1) {
        p.push(y);
        break;
      } else p.push(y.slice(0, h)), y = y.slice(h);
    }
    return p.join("");
  }
  function w(b, y) {
    let p = y !== true ? escape : unescape;
    if (b.scheme !== void 0) b.scheme = p(b.scheme);
    if (b.userinfo !== void 0) b.userinfo = p(b.userinfo);
    if (b.host !== void 0) b.host = p(b.host);
    if (b.path !== void 0) b.path = p(b.path);
    if (b.query !== void 0) b.query = p(b.query);
    if (b.fragment !== void 0) b.fragment = p(b.fragment);
    return b;
  }
  function I(b) {
    let y = [];
    if (b.userinfo !== void 0) y.push(b.userinfo), y.push("@");
    if (b.host !== void 0) {
      let p = unescape(b.host);
      if (!s(p)) {
        let h = d(p);
        if (h.isIPV6 === true) p = `[${h.escapedHost}]`;
        else p = b.host;
      }
      y.push(p);
    }
    if (typeof b.port === "number" || typeof b.port === "string") y.push(":"), y.push(String(b.port));
    return y.length ? y.join("") : void 0;
  }
  t.exports = { nonSimpleDomain: a, recomposeAuthority: I, normalizeComponentEncoding: w, removeDotSegments: _, isIPv4: s, isUUID: r, normalizeIPv6: d, stringArrayToHexStripped: o };
}), id = W((e4, t) => {
  let { isUUID: r } = yc(), s = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, o = ["http", "https", "ws", "wss", "urn", "urn:uuid"];
  function a(S) {
    return o.indexOf(S) !== -1;
  }
  function i(S) {
    if (S.secure === true) return true;
    else if (S.secure === false) return false;
    else if (S.scheme) return S.scheme.length === 3 && (S.scheme[0] === "w" || S.scheme[0] === "W") && (S.scheme[1] === "s" || S.scheme[1] === "S") && (S.scheme[2] === "s" || S.scheme[2] === "S");
    else return false;
  }
  function u(S) {
    if (!S.host) S.error = S.error || "HTTP URIs must have a host.";
    return S;
  }
  function l(S) {
    let O = String(S.scheme).toLowerCase() === "https";
    if (S.port === (O ? 443 : 80) || S.port === "") S.port = void 0;
    if (!S.path) S.path = "/";
    return S;
  }
  function d(S) {
    return S.secure = i(S), S.resourceName = (S.path || "/") + (S.query ? "?" + S.query : ""), S.path = void 0, S.query = void 0, S;
  }
  function m(S) {
    if (S.port === (i(S) ? 443 : 80) || S.port === "") S.port = void 0;
    if (typeof S.secure === "boolean") S.scheme = S.secure ? "wss" : "ws", S.secure = void 0;
    if (S.resourceName) {
      let [O, x] = S.resourceName.split("?");
      S.path = O && O !== "/" ? O : void 0, S.query = x, S.resourceName = void 0;
    }
    return S.fragment = void 0, S;
  }
  function _(S, O) {
    if (!S.path) return S.error = "URN can not be parsed", S;
    let x = S.path.match(s);
    if (x) {
      let G = O.scheme || S.scheme || "urn";
      S.nid = x[1].toLowerCase(), S.nss = x[2];
      let L = R(`${G}:${O.nid || S.nid}`);
      if (S.path = void 0, L) S = L.parse(S, O);
    } else S.error = S.error || "URN can not be parsed.";
    return S;
  }
  function w(S, O) {
    if (S.nid === void 0) throw Error("URN without nid cannot be serialized");
    let x = O.scheme || S.scheme || "urn", G = S.nid.toLowerCase(), L = R(`${x}:${O.nid || G}`);
    if (L) S = L.serialize(S, O);
    let H = S, Z = S.nss;
    return H.path = `${G || O.nid}:${Z}`, O.skipEscape = true, H;
  }
  function I(S, O) {
    let x = S;
    if (x.uuid = x.nss, x.nss = void 0, !O.tolerant && (!x.uuid || !r(x.uuid))) x.error = x.error || "UUID is not valid.";
    return x;
  }
  function b(S) {
    let O = S;
    return O.nss = (S.uuid || "").toLowerCase(), O;
  }
  let y = { scheme: "http", domainHost: true, parse: u, serialize: l }, p = { scheme: "https", domainHost: y.domainHost, parse: u, serialize: l }, h = { scheme: "ws", domainHost: true, parse: d, serialize: m }, g = { scheme: "wss", domainHost: h.domainHost, parse: h.parse, serialize: h.serialize }, q = { http: y, https: p, ws: h, wss: g, urn: { scheme: "urn", parse: _, serialize: w, skipNormalize: true }, "urn:uuid": { scheme: "urn:uuid", parse: I, serialize: b, skipNormalize: true } };
  Object.setPrototypeOf(q, null);
  function R(S) {
    return S && (q[S] || q[S.toLowerCase()]) || void 0;
  }
  t.exports = { wsIsSecure: i, SCHEMES: q, isValidSchemeName: a, getSchemeHandler: R };
}), cd = W((e4, t) => {
  let { normalizeIPv6: r, removeDotSegments: s, recomposeAuthority: o, normalizeComponentEncoding: a, isIPv4: i, nonSimpleDomain: u } = yc(), { SCHEMES: l, getSchemeHandler: d } = id();
  function m(g, f) {
    if (typeof g === "string") g = b(p(g, f), f);
    else if (typeof g === "object") g = p(b(g, f), f);
    return g;
  }
  function _(g, f, z) {
    let q = z ? Object.assign({ scheme: "null" }, z) : { scheme: "null" }, R = w(p(g, q), p(f, q), q, true);
    return q.skipEscape = true, b(R, q);
  }
  function w(g, f, z, q) {
    let R = {};
    if (!q) g = p(b(g, z), z), f = p(b(f, z), z);
    if (z = z || {}, !z.tolerant && f.scheme) R.scheme = f.scheme, R.userinfo = f.userinfo, R.host = f.host, R.port = f.port, R.path = s(f.path || ""), R.query = f.query;
    else {
      if (f.userinfo !== void 0 || f.host !== void 0 || f.port !== void 0) R.userinfo = f.userinfo, R.host = f.host, R.port = f.port, R.path = s(f.path || ""), R.query = f.query;
      else {
        if (!f.path) if (R.path = g.path, f.query !== void 0) R.query = f.query;
        else R.query = g.query;
        else {
          if (f.path[0] === "/") R.path = s(f.path);
          else {
            if ((g.userinfo !== void 0 || g.host !== void 0 || g.port !== void 0) && !g.path) R.path = "/" + f.path;
            else if (!g.path) R.path = f.path;
            else R.path = g.path.slice(0, g.path.lastIndexOf("/") + 1) + f.path;
            R.path = s(R.path);
          }
          R.query = f.query;
        }
        R.userinfo = g.userinfo, R.host = g.host, R.port = g.port;
      }
      R.scheme = g.scheme;
    }
    return R.fragment = f.fragment, R;
  }
  function I(g, f, z) {
    if (typeof g === "string") g = unescape(g), g = b(a(p(g, z), true), { ...z, skipEscape: true });
    else if (typeof g === "object") g = b(a(g, true), { ...z, skipEscape: true });
    if (typeof f === "string") f = unescape(f), f = b(a(p(f, z), true), { ...z, skipEscape: true });
    else if (typeof f === "object") f = b(a(f, true), { ...z, skipEscape: true });
    return g.toLowerCase() === f.toLowerCase();
  }
  function b(g, f) {
    let z = { host: g.host, scheme: g.scheme, userinfo: g.userinfo, port: g.port, path: g.path, query: g.query, nid: g.nid, nss: g.nss, uuid: g.uuid, fragment: g.fragment, reference: g.reference, resourceName: g.resourceName, secure: g.secure, error: "" }, q = Object.assign({}, f), R = [], S = d(q.scheme || z.scheme);
    if (S && S.serialize) S.serialize(z, q);
    if (z.path !== void 0) if (!q.skipEscape) {
      if (z.path = escape(z.path), z.scheme !== void 0) z.path = z.path.split("%3A").join(":");
    } else z.path = unescape(z.path);
    if (q.reference !== "suffix" && z.scheme) R.push(z.scheme, ":");
    let O = o(z);
    if (O !== void 0) {
      if (q.reference !== "suffix") R.push("//");
      if (R.push(O), z.path && z.path[0] !== "/") R.push("/");
    }
    if (z.path !== void 0) {
      let x = z.path;
      if (!q.absolutePath && (!S || !S.absolutePath)) x = s(x);
      if (O === void 0 && x[0] === "/" && x[1] === "/") x = "/%2F" + x.slice(2);
      R.push(x);
    }
    if (z.query !== void 0) R.push("?", z.query);
    if (z.fragment !== void 0) R.push("#", z.fragment);
    return R.join("");
  }
  let y = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function p(g, f) {
    let z = Object.assign({}, f), q = { scheme: void 0, userinfo: void 0, host: "", port: void 0, path: "", query: void 0, fragment: void 0 }, R = false;
    if (z.reference === "suffix") if (z.scheme) g = z.scheme + ":" + g;
    else g = "//" + g;
    let S = g.match(y);
    if (S) {
      if (q.scheme = S[1], q.userinfo = S[3], q.host = S[4], q.port = parseInt(S[5], 10), q.path = S[6] || "", q.query = S[7], q.fragment = S[8], isNaN(q.port)) q.port = S[5];
      if (q.host) if (i(q.host) === false) {
        let x = r(q.host);
        q.host = x.host.toLowerCase(), R = x.isIPV6;
      } else R = true;
      if (q.scheme === void 0 && q.userinfo === void 0 && q.host === void 0 && q.port === void 0 && q.query === void 0 && !q.path) q.reference = "same-document";
      else if (q.scheme === void 0) q.reference = "relative";
      else if (q.fragment === void 0) q.reference = "absolute";
      else q.reference = "uri";
      if (z.reference && z.reference !== "suffix" && z.reference !== q.reference) q.error = q.error || "URI is not a " + z.reference + " reference.";
      let O = d(z.scheme || q.scheme);
      if (!z.unicodeSupport && (!O || !O.unicodeSupport)) {
        if (q.host && (z.domainHost || O && O.domainHost) && R === false && u(q.host)) try {
          q.host = URL.domainToASCII(q.host.toLowerCase());
        } catch (x) {
          q.error = q.error || "Host's domain name can not be converted to ASCII: " + x;
        }
      }
      if (!O || O && !O.skipNormalize) {
        if (g.indexOf("%") !== -1) {
          if (q.scheme !== void 0) q.scheme = unescape(q.scheme);
          if (q.host !== void 0) q.host = unescape(q.host);
        }
        if (q.path) q.path = escape(unescape(q.path));
        if (q.fragment) q.fragment = encodeURI(decodeURIComponent(q.fragment));
      }
      if (O && O.parse) O.parse(q, z);
    } else q.error = q.error || "URI can not be parsed.";
    return q;
  }
  let h = { SCHEMES: l, normalize: m, resolve: _, resolveComponent: w, equal: I, serialize: b, parse: p };
  t.exports = h, t.exports.default = h, t.exports.fastUri = h;
}), ud = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = cd();
  t.code = 'require("ajv/dist/runtime/uri").default', e4.default = t;
}), vc = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.CodeGen = e4.Name = e4.nil = e4.stringify = e4.str = e4._ = e4.KeywordCxt = void 0;
  var t = bs();
  Object.defineProperty(e4, "KeywordCxt", { enumerable: true, get: function() {
    return t.KeywordCxt;
  } });
  var r = oe();
  Object.defineProperty(e4, "_", { enumerable: true, get: function() {
    return r._;
  } }), Object.defineProperty(e4, "str", { enumerable: true, get: function() {
    return r.str;
  } }), Object.defineProperty(e4, "stringify", { enumerable: true, get: function() {
    return r.stringify;
  } }), Object.defineProperty(e4, "nil", { enumerable: true, get: function() {
    return r.nil;
  } }), Object.defineProperty(e4, "Name", { enumerable: true, get: function() {
    return r.Name;
  } }), Object.defineProperty(e4, "CodeGen", { enumerable: true, get: function() {
    return r.CodeGen;
  } });
  let s = Da(), o = Rs(), a = gc(), i = Va(), u = oe(), l = La(), d = ja(), m = le(), _ = nd(), w = ud(), I = (j, D) => new RegExp(j, D);
  I.code = "new RegExp";
  let b = ["removeAdditional", "useDefaults", "coerceTypes"], y = /* @__PURE__ */ new Set(["validate", "serialize", "parse", "wrapper", "root", "schema", "keyword", "pattern", "formats", "validate$data", "func", "obj", "Error"]), p = { errorDataPath: "", format: "`validateFormats: false` can be used instead.", nullable: '"nullable" keyword is supported by default.', jsonPointers: "Deprecated jsPropertySyntax can be used instead.", extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.", missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.", processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`", sourceCode: "Use option `code: {source: true}`", strictDefaults: "It is default now, see option `strict`.", strictKeywords: "It is default now, see option `strict`.", uniqueItems: '"uniqueItems" keyword is always validated.', unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).", cache: "Map is used as cache, schema object as key.", serialize: "Map is used as cache, schema object as key.", ajvErrors: "It is default now." }, h = { ignoreKeywordsWithRef: "", jsPropertySyntax: "", unicode: '"minLength"/"maxLength" account for unicode characters by default.' }, g = 200;
  function f(j) {
    var D, J, T, M, U, Y, Q, ae, re, me, Oe, N, V, K, ee, te, se, ye, ze, Te, Re, ge, De, Ee, Be;
    let Fe = j.strict, Ye = (D = j.code) === null || D === void 0 ? void 0 : D.optimize, st = Ye === true || Ye === void 0 ? 1 : Ye || 0, ot = (T = (J = j.code) === null || J === void 0 ? void 0 : J.regExp) !== null && T !== void 0 ? T : I, _t = (M = j.uriResolver) !== null && M !== void 0 ? M : w.default;
    return { strictSchema: (Y = (U = j.strictSchema) !== null && U !== void 0 ? U : Fe) !== null && Y !== void 0 ? Y : true, strictNumbers: (ae = (Q = j.strictNumbers) !== null && Q !== void 0 ? Q : Fe) !== null && ae !== void 0 ? ae : true, strictTypes: (me = (re = j.strictTypes) !== null && re !== void 0 ? re : Fe) !== null && me !== void 0 ? me : "log", strictTuples: (N = (Oe = j.strictTuples) !== null && Oe !== void 0 ? Oe : Fe) !== null && N !== void 0 ? N : "log", strictRequired: (K = (V = j.strictRequired) !== null && V !== void 0 ? V : Fe) !== null && K !== void 0 ? K : false, code: j.code ? { ...j.code, optimize: st, regExp: ot } : { optimize: st, regExp: ot }, loopRequired: (ee = j.loopRequired) !== null && ee !== void 0 ? ee : g, loopEnum: (te = j.loopEnum) !== null && te !== void 0 ? te : g, meta: (se = j.meta) !== null && se !== void 0 ? se : true, messages: (ye = j.messages) !== null && ye !== void 0 ? ye : true, inlineRefs: (ze = j.inlineRefs) !== null && ze !== void 0 ? ze : true, schemaId: (Te = j.schemaId) !== null && Te !== void 0 ? Te : "$id", addUsedSchema: (Re = j.addUsedSchema) !== null && Re !== void 0 ? Re : true, validateSchema: (ge = j.validateSchema) !== null && ge !== void 0 ? ge : true, validateFormats: (De = j.validateFormats) !== null && De !== void 0 ? De : true, unicodeRegExp: (Ee = j.unicodeRegExp) !== null && Ee !== void 0 ? Ee : true, int32range: (Be = j.int32range) !== null && Be !== void 0 ? Be : true, uriResolver: _t };
  }
  var z = class {
    constructor(j = {}) {
      this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), j = this.opts = { ...j, ...f(j) };
      let { es5: D, lines: J } = this.opts.code;
      this.scope = new u.ValueScope({ scope: {}, prefixes: y, es5: D, lines: J }), this.logger = H(j.logger);
      let T = j.validateFormats;
      if (j.validateFormats = false, this.RULES = (0, a.getRules)(), q.call(this, p, j, "NOT SUPPORTED"), q.call(this, h, j, "DEPRECATED", "warn"), this._metaOpts = G.call(this), j.formats) O.call(this);
      if (this._addVocabularies(), this._addDefaultMetaSchema(), j.keywords) x.call(this, j.keywords);
      if (typeof j.meta == "object") this.addMetaSchema(j.meta);
      S.call(this), j.validateFormats = T;
    }
    _addVocabularies() {
      this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
      let { $data: j, meta: D, schemaId: J } = this.opts, T = _;
      if (J === "id") T = { ..._ }, T.id = T.$id, delete T.$id;
      if (D && j) this.addMetaSchema(T, T[J], false);
    }
    defaultMeta() {
      let { meta: j, schemaId: D } = this.opts;
      return this.opts.defaultMeta = typeof j == "object" ? j[D] || j : void 0;
    }
    validate(j, D) {
      let J;
      if (typeof j == "string") {
        if (J = this.getSchema(j), !J) throw Error(`no schema with key or ref "${j}"`);
      } else J = this.compile(j);
      let T = J(D);
      if (!("$async" in J)) this.errors = J.errors;
      return T;
    }
    compile(j, D) {
      let J = this._addSchema(j, D);
      return J.validate || this._compileSchemaEnv(J);
    }
    compileAsync(j, D) {
      if (typeof this.opts.loadSchema != "function") throw Error("options.loadSchema should be a function");
      let { loadSchema: J } = this.opts;
      return T.call(this, j, D);
      async function T(re, me) {
        await M.call(this, re.$schema);
        let Oe = this._addSchema(re, me);
        return Oe.validate || U.call(this, Oe);
      }
      async function M(re) {
        if (re && !this.getSchema(re)) await T.call(this, { $ref: re }, true);
      }
      async function U(re) {
        try {
          return this._compileSchemaEnv(re);
        } catch (me) {
          if (!(me instanceof o.default)) throw me;
          return Y.call(this, me), await Q.call(this, me.missingSchema), U.call(this, re);
        }
      }
      function Y({ missingSchema: re, missingRef: me }) {
        if (this.refs[re]) throw Error(`AnySchema ${re} is loaded but ${me} cannot be resolved`);
      }
      async function Q(re) {
        let me = await ae.call(this, re);
        if (!this.refs[re]) await M.call(this, me.$schema);
        if (!this.refs[re]) this.addSchema(me, re, D);
      }
      async function ae(re) {
        let me = this._loading[re];
        if (me) return me;
        try {
          return await (this._loading[re] = J(re));
        } finally {
          delete this._loading[re];
        }
      }
    }
    addSchema(j, D, J, T = this.opts.validateSchema) {
      if (Array.isArray(j)) {
        for (let U of j) this.addSchema(U, void 0, J, T);
        return this;
      }
      let M;
      if (typeof j === "object") {
        let { schemaId: U } = this.opts;
        if (M = j[U], M !== void 0 && typeof M != "string") throw Error(`schema ${U} must be string`);
      }
      return D = (0, l.normalizeId)(D || M), this._checkUnique(D), this.schemas[D] = this._addSchema(j, J, D, T, true), this;
    }
    addMetaSchema(j, D, J = this.opts.validateSchema) {
      return this.addSchema(j, D, true, J), this;
    }
    validateSchema(j, D) {
      if (typeof j == "boolean") return true;
      let J;
      if (J = j.$schema, J !== void 0 && typeof J != "string") throw Error("$schema must be a string");
      if (J = J || this.opts.defaultMeta || this.defaultMeta(), !J) return this.logger.warn("meta-schema not available"), this.errors = null, true;
      let T = this.validate(J, j);
      if (!T && D) {
        let M = "schema is invalid: " + this.errorsText();
        if (this.opts.validateSchema === "log") this.logger.error(M);
        else throw Error(M);
      }
      return T;
    }
    getSchema(j) {
      let D;
      while (typeof (D = R.call(this, j)) == "string") j = D;
      if (D === void 0) {
        let { schemaId: J } = this.opts, T = new i.SchemaEnv({ schema: {}, schemaId: J });
        if (D = i.resolveSchema.call(this, T, j), !D) return;
        this.refs[j] = D;
      }
      return D.validate || this._compileSchemaEnv(D);
    }
    removeSchema(j) {
      if (j instanceof RegExp) return this._removeAllSchemas(this.schemas, j), this._removeAllSchemas(this.refs, j), this;
      switch (typeof j) {
        case "undefined":
          return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
        case "string": {
          let D = R.call(this, j);
          if (typeof D == "object") this._cache.delete(D.schema);
          return delete this.schemas[j], delete this.refs[j], this;
        }
        case "object": {
          let D = j;
          this._cache.delete(D);
          let J = j[this.opts.schemaId];
          if (J) J = (0, l.normalizeId)(J), delete this.schemas[J], delete this.refs[J];
          return this;
        }
        default:
          throw Error("ajv.removeSchema: invalid parameter");
      }
    }
    addVocabulary(j) {
      for (let D of j) this.addKeyword(D);
      return this;
    }
    addKeyword(j, D) {
      let J;
      if (typeof j == "string") {
        if (J = j, typeof D == "object") this.logger.warn("these parameters are deprecated, see docs for addKeyword"), D.keyword = J;
      } else if (typeof j == "object" && D === void 0) {
        if (D = j, J = D.keyword, Array.isArray(J) && !J.length) throw Error("addKeywords: keyword must be string or non-empty array");
      } else throw Error("invalid addKeywords parameters");
      if (X.call(this, J, D), !D) return (0, m.eachItem)(J, (M) => ne.call(this, M)), this;
      de.call(this, D);
      let T = { ...D, type: (0, d.getJSONTypes)(D.type), schemaType: (0, d.getJSONTypes)(D.schemaType) };
      return (0, m.eachItem)(J, T.type.length === 0 ? (M) => ne.call(this, M, T) : (M) => T.type.forEach((U) => ne.call(this, M, T, U))), this;
    }
    getKeyword(j) {
      let D = this.RULES.all[j];
      return typeof D == "object" ? D.definition : !!D;
    }
    removeKeyword(j) {
      let { RULES: D } = this;
      delete D.keywords[j], delete D.all[j];
      for (let J of D.rules) {
        let T = J.rules.findIndex((M) => M.keyword === j);
        if (T >= 0) J.rules.splice(T, 1);
      }
      return this;
    }
    addFormat(j, D) {
      if (typeof D == "string") D = new RegExp(D);
      return this.formats[j] = D, this;
    }
    errorsText(j = this.errors, { separator: D = ", ", dataVar: J = "data" } = {}) {
      if (!j || j.length === 0) return "No errors";
      return j.map((T) => `${J}${T.instancePath} ${T.message}`).reduce((T, M) => T + D + M);
    }
    $dataMetaSchema(j, D) {
      let J = this.RULES.all;
      j = JSON.parse(JSON.stringify(j));
      for (let T of D) {
        let M = T.split("/").slice(1), U = j;
        for (let Y of M) U = U[Y];
        for (let Y in J) {
          let Q = J[Y];
          if (typeof Q != "object") continue;
          let { $data: ae } = Q.definition, re = U[Y];
          if (ae && re) U[Y] = ce(re);
        }
      }
      return j;
    }
    _removeAllSchemas(j, D) {
      for (let J in j) {
        let T = j[J];
        if (!D || D.test(J)) {
          if (typeof T == "string") delete j[J];
          else if (T && !T.meta) this._cache.delete(T.schema), delete j[J];
        }
      }
    }
    _addSchema(j, D, J, T = this.opts.validateSchema, M = this.opts.addUsedSchema) {
      let U, { schemaId: Y } = this.opts;
      if (typeof j == "object") U = j[Y];
      else if (this.opts.jtd) throw Error("schema must be object");
      else if (typeof j != "boolean") throw Error("schema must be object or boolean");
      let Q = this._cache.get(j);
      if (Q !== void 0) return Q;
      J = (0, l.normalizeId)(U || J);
      let ae = l.getSchemaRefs.call(this, j, J);
      if (Q = new i.SchemaEnv({ schema: j, schemaId: Y, meta: D, baseId: J, localRefs: ae }), this._cache.set(Q.schema, Q), M && !J.startsWith("#")) {
        if (J) this._checkUnique(J);
        this.refs[J] = Q;
      }
      if (T) this.validateSchema(j, true);
      return Q;
    }
    _checkUnique(j) {
      if (this.schemas[j] || this.refs[j]) throw Error(`schema with key or id "${j}" already exists`);
    }
    _compileSchemaEnv(j) {
      if (j.meta) this._compileMetaSchema(j);
      else i.compileSchema.call(this, j);
      if (!j.validate) throw Error("ajv implementation error");
      return j.validate;
    }
    _compileMetaSchema(j) {
      let D = this.opts;
      this.opts = this._metaOpts;
      try {
        i.compileSchema.call(this, j);
      } finally {
        this.opts = D;
      }
    }
  };
  z.ValidationError = s.default, z.MissingRefError = o.default, e4.default = z;
  function q(j, D, J, T = "error") {
    for (let M in j) {
      let U = M;
      if (U in D) this.logger[T](`${J}: option ${M}. ${j[U]}`);
    }
  }
  function R(j) {
    return j = (0, l.normalizeId)(j), this.schemas[j] || this.refs[j];
  }
  function S() {
    let j = this.opts.schemas;
    if (!j) return;
    if (Array.isArray(j)) this.addSchema(j);
    else for (let D in j) this.addSchema(j[D], D);
  }
  function O() {
    for (let j in this.opts.formats) {
      let D = this.opts.formats[j];
      if (D) this.addFormat(j, D);
    }
  }
  function x(j) {
    if (Array.isArray(j)) {
      this.addVocabulary(j);
      return;
    }
    this.logger.warn("keywords option as map is deprecated, pass array");
    for (let D in j) {
      let J = j[D];
      if (!J.keyword) J.keyword = D;
      this.addKeyword(J);
    }
  }
  function G() {
    let j = { ...this.opts };
    for (let D of b) delete j[D];
    return j;
  }
  let L = { log() {
  }, warn() {
  }, error() {
  } };
  function H(j) {
    if (j === false) return L;
    if (j === void 0) return console;
    if (j.log && j.warn && j.error) return j;
    throw Error("logger must implement log, warn and error methods");
  }
  let Z = /^[a-z_$][a-z0-9_$:-]*$/i;
  function X(j, D) {
    let { RULES: J } = this;
    if ((0, m.eachItem)(j, (T) => {
      if (J.keywords[T]) throw Error(`Keyword ${T} is already defined`);
      if (!Z.test(T)) throw Error(`Keyword ${T} has invalid name`);
    }), !D) return;
    if (D.$data && !("code" in D || "validate" in D)) throw Error('$data keyword must have "code" or "validate" function');
  }
  function ne(j, D, J) {
    var T;
    let M = D === null || D === void 0 ? void 0 : D.post;
    if (J && M) throw Error('keyword with "post" flag cannot have "type"');
    let { RULES: U } = this, Y = M ? U.post : U.rules.find(({ type: ae }) => ae === J);
    if (!Y) Y = { type: J, rules: [] }, U.rules.push(Y);
    if (U.keywords[j] = true, !D) return;
    let Q = { keyword: j, definition: { ...D, type: (0, d.getJSONTypes)(D.type), schemaType: (0, d.getJSONTypes)(D.schemaType) } };
    if (D.before) pe.call(this, Y, Q, D.before);
    else Y.rules.push(Q);
    U.all[j] = Q, (T = D.implements) === null || T === void 0 || T.forEach((ae) => this.addKeyword(ae));
  }
  function pe(j, D, J) {
    let T = j.rules.findIndex((M) => M.keyword === J);
    if (T >= 0) j.rules.splice(T, 0, D);
    else j.rules.push(D), this.logger.warn(`rule ${J} is not defined`);
  }
  function de(j) {
    let { metaSchema: D } = j;
    if (D === void 0) return;
    if (j.$data && this.opts.$data) D = ce(D);
    j.validateSchema = this.compile(D, true);
  }
  let be = { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" };
  function ce(j) {
    return { anyOf: [j, be] };
  }
});
var dd = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = { keyword: "id", code() {
    throw Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
  } };
  e4.default = t;
}), Vn = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.callRef = e4.getValidate = void 0;
  let t = Rs(), r = Ge(), s = oe(), o = Ke(), a = Va(), i = le(), u = { keyword: "$ref", schemaType: "string", code(m) {
    let { gen: _, schema: w, it: I } = m, { baseId: b, schemaEnv: y, validateName: p, opts: h, self: g } = I, { root: f } = y;
    if ((w === "#" || w === "#/") && b === f.baseId) return q();
    let z = a.resolveRef.call(g, f, b, w);
    if (z === void 0) throw new t.default(I.opts.uriResolver, b, w);
    if (z instanceof a.SchemaEnv) return R(z);
    return S(z);
    function q() {
      if (y === f) return d(m, p, y, y.$async);
      let O = _.scopeValue("root", { ref: f });
      return d(m, s._`${O}.validate`, f, f.$async);
    }
    function R(O) {
      d(m, l(m, O), O, O.$async);
    }
    function S(O) {
      let x = _.scopeValue("schema", h.code.source === true ? { ref: O, code: (0, s.stringify)(O) } : { ref: O }), G = _.name("valid"), L = m.subschema({ schema: O, dataTypes: [], schemaPath: s.nil, topSchemaRef: x, errSchemaPath: w }, G);
      m.mergeEvaluated(L), m.ok(G);
    }
  } };
  function l(m, _) {
    let { gen: w } = m;
    return _.validate ? w.scopeValue("validate", { ref: _.validate }) : s._`${w.scopeValue("wrapper", { ref: _ })}.validate`;
  }
  e4.getValidate = l;
  function d(m, _, w, I) {
    let { gen: b, it: y } = m, { allErrors: p, schemaEnv: h, opts: g } = y, f = g.passContext ? o.default.this : s.nil;
    if (I) z();
    else q();
    function z() {
      if (!h.$async) throw Error("async schema referenced by sync schema");
      let O = b.let("valid");
      b.try(() => {
        if (b.code(s._`await ${(0, r.callValidateCode)(m, _, f)}`), S(_), !p) b.assign(O, true);
      }, (x) => {
        if (b.if(s._`!(${x} instanceof ${y.ValidationError})`, () => b.throw(x)), R(x), !p) b.assign(O, false);
      }), m.ok(O);
    }
    function q() {
      m.result((0, r.callValidateCode)(m, _, f), () => S(_), () => R(_));
    }
    function R(O) {
      let x = s._`${O}.errors`;
      b.assign(o.default.vErrors, s._`${o.default.vErrors} === null ? ${x} : ${o.default.vErrors}.concat(${x})`), b.assign(o.default.errors, s._`${o.default.vErrors}.length`);
    }
    function S(O) {
      var x;
      if (!y.opts.unevaluated) return;
      let G = (x = w === null || w === void 0 ? void 0 : w.validate) === null || x === void 0 ? void 0 : x.evaluated;
      if (y.props !== true) if (G && !G.dynamicProps) {
        if (G.props !== void 0) y.props = i.mergeEvaluated.props(b, G.props, y.props);
      } else {
        let L = b.var("props", s._`${O}.evaluated.props`);
        y.props = i.mergeEvaluated.props(b, L, y.props, s.Name);
      }
      if (y.items !== true) if (G && !G.dynamicItems) {
        if (G.items !== void 0) y.items = i.mergeEvaluated.items(b, G.items, y.items);
      } else {
        let L = b.var("items", s._`${O}.evaluated.items`);
        y.items = i.mergeEvaluated.items(b, L, y.items, s.Name);
      }
    }
  }
  e4.callRef = d, e4.default = u;
}), bc = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = dd(), r = Vn(), s = ["$schema", "$id", "$defs", "$vocabulary", { keyword: "$comment" }, "definitions", t.default, r.default];
  e4.default = s;
}), hd = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = oe(), r = t.operators, s = { maximum: { okStr: "<=", ok: r.LTE, fail: r.GT }, minimum: { okStr: ">=", ok: r.GTE, fail: r.LT }, exclusiveMaximum: { okStr: "<", ok: r.LT, fail: r.GTE }, exclusiveMinimum: { okStr: ">", ok: r.GT, fail: r.LTE } }, o = { keyword: Object.keys(s), type: "number", schemaType: "number", $data: true, error: { message: ({ keyword: a, schemaCode: i }) => t.str`must be ${s[a].okStr} ${i}`, params: ({ keyword: a, schemaCode: i }) => t._`{comparison: ${s[a].okStr}, limit: ${i}}` }, code(a) {
    let { keyword: i, data: u, schemaCode: l } = a;
    a.fail$data(t._`${u} ${s[i].fail} ${l} || isNaN(${u})`);
  } };
  e4.default = o;
}), md = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = oe(), r = { keyword: "multipleOf", type: "number", schemaType: "number", $data: true, error: { message: ({ schemaCode: s }) => t.str`must be multiple of ${s}`, params: ({ schemaCode: s }) => t._`{multipleOf: ${s}}` }, code(s) {
    let { gen: o, data: a, schemaCode: i, it: u } = s, l = u.opts.multipleOfPrecision, d = o.let("res"), m = l ? t._`Math.abs(Math.round(${d}) - ${d}) > 1e-${l}` : t._`${d} !== parseInt(${d})`;
    s.fail$data(t._`(${i} === 0 || (${d} = ${a}/${i}, ${m}))`);
  } };
  e4.default = r;
}), pd = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  function t(r) {
    let s = r.length, o = 0, a = 0, i;
    while (a < s) if (o++, i = r.charCodeAt(a++), i >= 55296 && i <= 56319 && a < s) {
      if (i = r.charCodeAt(a), (i & 64512) === 56320) a++;
    }
    return o;
  }
  e4.default = t, t.code = 'require("ajv/dist/runtime/ucs2length").default';
}), fd = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = oe(), r = le(), s = pd(), o = { keyword: ["maxLength", "minLength"], type: "string", schemaType: "number", $data: true, error: { message({ keyword: a, schemaCode: i }) {
    let u = a === "maxLength" ? "more" : "fewer";
    return t.str`must NOT have ${u} than ${i} characters`;
  }, params: ({ schemaCode: a }) => t._`{limit: ${a}}` }, code(a) {
    let { keyword: i, data: u, schemaCode: l, it: d } = a, m = i === "maxLength" ? t.operators.GT : t.operators.LT, _ = d.opts.unicode === false ? t._`${u}.length` : t._`${(0, r.useFunc)(a.gen, s.default)}(${u})`;
    a.fail$data(t._`${_} ${m} ${l}`);
  } };
  e4.default = o;
}), gd = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = Ge(), r = le(), s = oe(), o = { keyword: "pattern", type: "string", schemaType: "string", $data: true, error: { message: ({ schemaCode: a }) => s.str`must match pattern "${a}"`, params: ({ schemaCode: a }) => s._`{pattern: ${a}}` }, code(a) {
    let { gen: i, data: u, $data: l, schema: d, schemaCode: m, it: _ } = a, w = _.opts.unicodeRegExp ? "u" : "";
    if (l) {
      let { regExp: I } = _.opts.code, b = I.code === "new RegExp" ? s._`new RegExp` : (0, r.useFunc)(i, I), y = i.let("valid");
      i.try(() => i.assign(y, s._`${b}(${m}, ${w}).test(${u})`), () => i.assign(y, false)), a.fail$data(s._`!${y}`);
    } else {
      let I = (0, t.usePattern)(a, d);
      a.fail$data(s._`!${I}.test(${u})`);
    }
  } };
  e4.default = o;
}), Sd = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = oe(), r = { keyword: ["maxProperties", "minProperties"], type: "object", schemaType: "number", $data: true, error: { message({ keyword: s, schemaCode: o }) {
    let a = s === "maxProperties" ? "more" : "fewer";
    return t.str`must NOT have ${a} than ${o} properties`;
  }, params: ({ schemaCode: s }) => t._`{limit: ${s}}` }, code(s) {
    let { keyword: o, data: a, schemaCode: i } = s, u = o === "maxProperties" ? t.operators.GT : t.operators.LT;
    s.fail$data(t._`Object.keys(${a}).length ${u} ${i}`);
  } };
  e4.default = r;
}), _d = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = Ge(), r = oe(), s = le(), o = { keyword: "required", type: "object", schemaType: "array", $data: true, error: { message: ({ params: { missingProperty: a } }) => r.str`must have required property '${a}'`, params: ({ params: { missingProperty: a } }) => r._`{missingProperty: ${a}}` }, code(a) {
    let { gen: i, schema: u, schemaCode: l, data: d, $data: m, it: _ } = a, { opts: w } = _;
    if (!m && u.length === 0) return;
    let I = u.length >= w.loopRequired;
    if (_.allErrors) b();
    else y();
    if (w.strictRequired) {
      let g = a.parentSchema.properties, { definedProperties: f } = a.it;
      for (let z of u) if ((g === null || g === void 0 ? void 0 : g[z]) === void 0 && !f.has(z)) {
        let q = `required property "${z}" is not defined at "${_.schemaEnv.baseId + _.errSchemaPath}" (strictRequired)`;
        (0, s.checkStrictMode)(_, q, _.opts.strictRequired);
      }
    }
    function b() {
      if (I || m) a.block$data(r.nil, p);
      else for (let g of u) (0, t.checkReportMissingProp)(a, g);
    }
    function y() {
      let g = i.let("missing");
      if (I || m) {
        let f = i.let("valid", true);
        a.block$data(f, () => h(g, f)), a.ok(f);
      } else i.if((0, t.checkMissingProp)(a, u, g)), (0, t.reportMissingProp)(a, g), i.else();
    }
    function p() {
      i.forOf("prop", l, (g) => {
        a.setParams({ missingProperty: g }), i.if((0, t.noPropertyInData)(i, d, g, w.ownProperties), () => a.error());
      });
    }
    function h(g, f) {
      a.setParams({ missingProperty: g }), i.forOf(g, l, () => {
        i.assign(f, (0, t.propertyInData)(i, d, g, w.ownProperties)), i.if((0, r.not)(f), () => {
          a.error(), i.break();
        });
      }, r.nil);
    }
  } };
  e4.default = o;
}), yd = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = oe(), r = { keyword: ["maxItems", "minItems"], type: "array", schemaType: "number", $data: true, error: { message({ keyword: s, schemaCode: o }) {
    let a = s === "maxItems" ? "more" : "fewer";
    return t.str`must NOT have ${a} than ${o} items`;
  }, params: ({ schemaCode: s }) => t._`{limit: ${s}}` }, code(s) {
    let { keyword: o, data: a, schemaCode: i } = s, u = o === "maxItems" ? t.operators.GT : t.operators.LT;
    s.fail$data(t._`${a}.length ${u} ${i}`);
  } };
  e4.default = r;
}), xn = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = _c();
  t.code = 'require("ajv/dist/runtime/equal").default', e4.default = t;
}), vd = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = ja(), r = oe(), s = le(), o = xn(), a = { keyword: "uniqueItems", type: "array", schemaType: "boolean", $data: true, error: { message: ({ params: { i, j: u } }) => r.str`must NOT have duplicate items (items ## ${u} and ${i} are identical)`, params: ({ params: { i, j: u } }) => r._`{i: ${i}, j: ${u}}` }, code(i) {
    let { gen: u, data: l, $data: d, schema: m, parentSchema: _, schemaCode: w, it: I } = i;
    if (!d && !m) return;
    let b = u.let("valid"), y = _.items ? (0, t.getSchemaTypes)(_.items) : [];
    i.block$data(b, p, r._`${w} === false`), i.ok(b);
    function p() {
      let z = u.let("i", r._`${l}.length`), q = u.let("j");
      i.setParams({ i: z, j: q }), u.assign(b, true), u.if(r._`${z} > 1`, () => (h() ? g : f)(z, q));
    }
    function h() {
      return y.length > 0 && !y.some((z) => z === "object" || z === "array");
    }
    function g(z, q) {
      let R = u.name("item"), S = (0, t.checkDataTypes)(y, R, I.opts.strictNumbers, t.DataType.Wrong), O = u.const("indices", r._`{}`);
      u.for(r._`;${z}--;`, () => {
        if (u.let(R, r._`${l}[${z}]`), u.if(S, r._`continue`), y.length > 1) u.if(r._`typeof ${R} == "string"`, r._`${R} += "_"`);
        u.if(r._`typeof ${O}[${R}] == "number"`, () => {
          u.assign(q, r._`${O}[${R}]`), i.error(), u.assign(b, false).break();
        }).code(r._`${O}[${R}] = ${z}`);
      });
    }
    function f(z, q) {
      let R = (0, s.useFunc)(u, o.default), S = u.name("outer");
      u.label(S).for(r._`;${z}--;`, () => u.for(r._`${q} = ${z}; ${q}--;`, () => u.if(r._`${R}(${l}[${z}], ${l}[${q}])`, () => {
        i.error(), u.assign(b, false).break(S);
      })));
    }
  } };
  e4.default = a;
}), bd = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = oe(), r = le(), s = xn(), o = { keyword: "const", $data: true, error: { message: "must be equal to constant", params: ({ schemaCode: a }) => t._`{allowedValue: ${a}}` }, code(a) {
    let { gen: i, data: u, $data: l, schemaCode: d, schema: m } = a;
    if (l || m && typeof m == "object") a.fail$data(t._`!${(0, r.useFunc)(i, s.default)}(${u}, ${d})`);
    else a.fail(t._`${m} !== ${u}`);
  } };
  e4.default = o;
}), Rd = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = oe(), r = le(), s = xn(), o = { keyword: "enum", schemaType: "array", $data: true, error: { message: "must be equal to one of the allowed values", params: ({ schemaCode: a }) => t._`{allowedValues: ${a}}` }, code(a) {
    let { gen: i, data: u, $data: l, schema: d, schemaCode: m, it: _ } = a;
    if (!l && d.length === 0) throw Error("enum must have non-empty array");
    let w = d.length >= _.opts.loopEnum, I, b = () => I !== null && I !== void 0 ? I : I = (0, r.useFunc)(i, s.default), y;
    if (w || l) y = i.let("valid"), a.block$data(y, p);
    else {
      if (!Array.isArray(d)) throw Error("ajv implementation error");
      let g = i.const("vSchema", m);
      y = (0, t.or)(...d.map((f, z) => h(g, z)));
    }
    a.pass(y);
    function p() {
      i.assign(y, false), i.forOf("v", m, (g) => i.if(t._`${b()}(${u}, ${g})`, () => i.assign(y, true).break()));
    }
    function h(g, f) {
      let z = d[f];
      return typeof z === "object" && z !== null ? t._`${b()}(${u}, ${g}[${f}])` : t._`${u} === ${z}`;
    }
  } };
  e4.default = o;
}), Rc = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = hd(), r = md(), s = fd(), o = gd(), a = Sd(), i = _d(), u = yd(), l = vd(), d = bd(), m = Rd(), _ = [t.default, r.default, s.default, o.default, a.default, i.default, u.default, l.default, { keyword: "type", schemaType: ["string", "array"] }, { keyword: "nullable", schemaType: "boolean" }, d.default, m.default];
  e4.default = _;
}), zc = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.validateAdditionalItems = void 0;
  let t = oe(), r = le(), s = { keyword: "additionalItems", type: "array", schemaType: ["boolean", "object"], before: "uniqueItems", error: { message: ({ params: { len: a } }) => t.str`must NOT have more than ${a} items`, params: ({ params: { len: a } }) => t._`{limit: ${a}}` }, code(a) {
    let { parentSchema: i, it: u } = a, { items: l } = i;
    if (!Array.isArray(l)) {
      (0, r.checkStrictMode)(u, '"additionalItems" is ignored when "items" is not an array of schemas');
      return;
    }
    o(a, l);
  } };
  function o(a, i) {
    let { gen: u, schema: l, data: d, keyword: m, it: _ } = a;
    _.items = true;
    let w = u.const("len", t._`${d}.length`);
    if (l === false) a.setParams({ len: i.length }), a.pass(t._`${w} <= ${i.length}`);
    else if (typeof l == "object" && !(0, r.alwaysValidSchema)(_, l)) {
      let b = u.var("valid", t._`${w} <= ${i.length}`);
      u.if((0, t.not)(b), () => I(b)), a.ok(b);
    }
    function I(b) {
      u.forRange("i", i.length, w, (y) => {
        if (a.subschema({ keyword: m, dataProp: y, dataPropType: r.Type.Num }, b), !_.allErrors) u.if((0, t.not)(b), () => u.break());
      });
    }
  }
  e4.validateAdditionalItems = o, e4.default = s;
}), wc = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.validateTuple = void 0;
  let t = oe(), r = le(), s = Ge(), o = { keyword: "items", type: "array", schemaType: ["object", "array", "boolean"], before: "uniqueItems", code(i) {
    let { schema: u, it: l } = i;
    if (Array.isArray(u)) return a(i, "additionalItems", u);
    if (l.items = true, (0, r.alwaysValidSchema)(l, u)) return;
    i.ok((0, s.validateArray)(i));
  } };
  function a(i, u, l = i.schema) {
    let { gen: d, parentSchema: m, data: _, keyword: w, it: I } = i;
    if (p(m), I.opts.unevaluated && l.length && I.items !== true) I.items = r.mergeEvaluated.items(d, l.length, I.items);
    let b = d.name("valid"), y = d.const("len", t._`${_}.length`);
    l.forEach((h, g) => {
      if ((0, r.alwaysValidSchema)(I, h)) return;
      d.if(t._`${y} > ${g}`, () => i.subschema({ keyword: w, schemaProp: g, dataProp: g }, b)), i.ok(b);
    });
    function p(h) {
      let { opts: g, errSchemaPath: f } = I, z = l.length, q = z === h.minItems && (z === h.maxItems || h[u] === false);
      if (g.strictTuples && !q) {
        let R = `"${w}" is ${z}-tuple, but minItems or maxItems/${u} are not specified or different at path "${f}"`;
        (0, r.checkStrictMode)(I, R, g.strictTuples);
      }
    }
  }
  e4.validateTuple = a, e4.default = o;
}), zd = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = wc(), r = { keyword: "prefixItems", type: "array", schemaType: ["array"], before: "uniqueItems", code: (s) => (0, t.validateTuple)(s, "items") };
  e4.default = r;
}), wd = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = oe(), r = le(), s = Ge(), o = zc(), a = { keyword: "items", type: "array", schemaType: ["object", "boolean"], before: "uniqueItems", error: { message: ({ params: { len: i } }) => t.str`must NOT have more than ${i} items`, params: ({ params: { len: i } }) => t._`{limit: ${i}}` }, code(i) {
    let { schema: u, parentSchema: l, it: d } = i, { prefixItems: m } = l;
    if (d.items = true, (0, r.alwaysValidSchema)(d, u)) return;
    if (m) (0, o.validateAdditionalItems)(i, m);
    else i.ok((0, s.validateArray)(i));
  } };
  e4.default = a;
}), Ed = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = oe(), r = le(), s = { keyword: "contains", type: "array", schemaType: ["object", "boolean"], before: "uniqueItems", trackErrors: true, error: { message: ({ params: { min: o, max: a } }) => a === void 0 ? t.str`must contain at least ${o} valid item(s)` : t.str`must contain at least ${o} and no more than ${a} valid item(s)`, params: ({ params: { min: o, max: a } }) => a === void 0 ? t._`{minContains: ${o}}` : t._`{minContains: ${o}, maxContains: ${a}}` }, code(o) {
    let { gen: a, schema: i, parentSchema: u, data: l, it: d } = o, m, _, { minContains: w, maxContains: I } = u;
    if (d.opts.next) m = w === void 0 ? 1 : w, _ = I;
    else m = 1;
    let b = a.const("len", t._`${l}.length`);
    if (o.setParams({ min: m, max: _ }), _ === void 0 && m === 0) {
      (0, r.checkStrictMode)(d, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
      return;
    }
    if (_ !== void 0 && m > _) {
      (0, r.checkStrictMode)(d, '"minContains" > "maxContains" is always invalid'), o.fail();
      return;
    }
    if ((0, r.alwaysValidSchema)(d, i)) {
      let f = t._`${b} >= ${m}`;
      if (_ !== void 0) f = t._`${f} && ${b} <= ${_}`;
      o.pass(f);
      return;
    }
    d.items = true;
    let y = a.name("valid");
    if (_ === void 0 && m === 1) h(y, () => a.if(y, () => a.break()));
    else if (m === 0) {
      if (a.let(y, true), _ !== void 0) a.if(t._`${l}.length > 0`, p);
    } else a.let(y, false), p();
    o.result(y, () => o.reset());
    function p() {
      let f = a.name("_valid"), z = a.let("count", 0);
      h(f, () => a.if(f, () => g(z)));
    }
    function h(f, z) {
      a.forRange("i", 0, b, (q) => {
        o.subschema({ keyword: "contains", dataProp: q, dataPropType: r.Type.Num, compositeRule: true }, f), z();
      });
    }
    function g(f) {
      if (a.code(t._`${f}++`), _ === void 0) a.if(t._`${f} >= ${m}`, () => a.assign(y, true).break());
      else if (a.if(t._`${f} > ${_}`, () => a.assign(y, false).break()), m === 1) a.assign(y, true);
      else a.if(t._`${f} >= ${m}`, () => a.assign(y, true));
    }
  } };
  e4.default = s;
}), Fn = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.validateSchemaDeps = e4.validatePropertyDeps = e4.error = void 0;
  let t = oe(), r = le(), s = Ge();
  e4.error = { message: ({ params: { property: l, depsCount: d, deps: m } }) => {
    let _ = d === 1 ? "property" : "properties";
    return t.str`must have ${_} ${m} when property ${l} is present`;
  }, params: ({ params: { property: l, depsCount: d, deps: m, missingProperty: _ } }) => t._`{property: ${l},
    missingProperty: ${_},
    depsCount: ${d},
    deps: ${m}}` };
  let o = { keyword: "dependencies", type: "object", schemaType: "object", error: e4.error, code(l) {
    let [d, m] = a(l);
    i(l, d), u(l, m);
  } };
  function a({ schema: l }) {
    let d = {}, m = {};
    for (let _ in l) {
      if (_ === "__proto__") continue;
      let w = Array.isArray(l[_]) ? d : m;
      w[_] = l[_];
    }
    return [d, m];
  }
  function i(l, d = l.schema) {
    let { gen: m, data: _, it: w } = l;
    if (Object.keys(d).length === 0) return;
    let I = m.let("missing");
    for (let b in d) {
      let y = d[b];
      if (y.length === 0) continue;
      let p = (0, s.propertyInData)(m, _, b, w.opts.ownProperties);
      if (l.setParams({ property: b, depsCount: y.length, deps: y.join(", ") }), w.allErrors) m.if(p, () => {
        for (let h of y) (0, s.checkReportMissingProp)(l, h);
      });
      else m.if(t._`${p} && (${(0, s.checkMissingProp)(l, y, I)})`), (0, s.reportMissingProp)(l, I), m.else();
    }
  }
  e4.validatePropertyDeps = i;
  function u(l, d = l.schema) {
    let { gen: m, data: _, keyword: w, it: I } = l, b = m.name("valid");
    for (let y in d) {
      if ((0, r.alwaysValidSchema)(I, d[y])) continue;
      m.if((0, s.propertyInData)(m, _, y, I.opts.ownProperties), () => {
        let p = l.subschema({ keyword: w, schemaProp: y }, b);
        l.mergeValidEvaluated(p, b);
      }, () => m.var(b, true)), l.ok(b);
    }
  }
  e4.validateSchemaDeps = u, e4.default = o;
}), $d = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = oe(), r = le(), s = { keyword: "propertyNames", type: "object", schemaType: ["object", "boolean"], error: { message: "property name must be valid", params: ({ params: o }) => t._`{propertyName: ${o.propertyName}}` }, code(o) {
    let { gen: a, schema: i, data: u, it: l } = o;
    if ((0, r.alwaysValidSchema)(l, i)) return;
    let d = a.name("valid");
    a.forIn("key", u, (m) => {
      o.setParams({ propertyName: m }), o.subschema({ keyword: "propertyNames", data: m, dataTypes: ["string"], propertyName: m, compositeRule: true }, d), a.if((0, t.not)(d), () => {
        if (o.error(true), !l.allErrors) a.break();
      });
    }), o.ok(d);
  } };
  e4.default = s;
}), Ec = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = Ge(), r = oe(), s = Ke(), o = le(), a = { keyword: "additionalProperties", type: ["object"], schemaType: ["boolean", "object"], allowUndefined: true, trackErrors: true, error: { message: "must NOT have additional properties", params: ({ params: i }) => r._`{additionalProperty: ${i.additionalProperty}}` }, code(i) {
    let { gen: u, schema: l, parentSchema: d, data: m, errsCount: _, it: w } = i;
    if (!_) throw Error("ajv implementation error");
    let { allErrors: I, opts: b } = w;
    if (w.props = true, b.removeAdditional !== "all" && (0, o.alwaysValidSchema)(w, l)) return;
    let y = (0, t.allSchemaProperties)(d.properties), p = (0, t.allSchemaProperties)(d.patternProperties);
    h(), i.ok(r._`${_} === ${s.default.errors}`);
    function h() {
      u.forIn("key", m, (R) => {
        if (!y.length && !p.length) z(R);
        else u.if(g(R), () => z(R));
      });
    }
    function g(R) {
      let S;
      if (y.length > 8) {
        let O = (0, o.schemaRefOrVal)(w, d.properties, "properties");
        S = (0, t.isOwnProperty)(u, O, R);
      } else if (y.length) S = (0, r.or)(...y.map((O) => r._`${R} === ${O}`));
      else S = r.nil;
      if (p.length) S = (0, r.or)(S, ...p.map((O) => r._`${(0, t.usePattern)(i, O)}.test(${R})`));
      return (0, r.not)(S);
    }
    function f(R) {
      u.code(r._`delete ${m}[${R}]`);
    }
    function z(R) {
      if (b.removeAdditional === "all" || b.removeAdditional && l === false) {
        f(R);
        return;
      }
      if (l === false) {
        if (i.setParams({ additionalProperty: R }), i.error(), !I) u.break();
        return;
      }
      if (typeof l == "object" && !(0, o.alwaysValidSchema)(w, l)) {
        let S = u.name("valid");
        if (b.removeAdditional === "failing") q(R, S, false), u.if((0, r.not)(S), () => {
          i.reset(), f(R);
        });
        else if (q(R, S), !I) u.if((0, r.not)(S), () => u.break());
      }
    }
    function q(R, S, O) {
      let x = { keyword: "additionalProperties", dataProp: R, dataPropType: o.Type.Str };
      if (O === false) Object.assign(x, { compositeRule: true, createErrors: false, allErrors: false });
      i.subschema(x, S);
    }
  } };
  e4.default = a;
}), Pd = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = bs(), r = Ge(), s = le(), o = Ec(), a = { keyword: "properties", type: "object", schemaType: "object", code(i) {
    let { gen: u, schema: l, parentSchema: d, data: m, it: _ } = i;
    if (_.opts.removeAdditional === "all" && d.additionalProperties === void 0) o.default.code(new t.KeywordCxt(_, o.default, "additionalProperties"));
    let w = (0, r.allSchemaProperties)(l);
    for (let h of w) _.definedProperties.add(h);
    if (_.opts.unevaluated && w.length && _.props !== true) _.props = s.mergeEvaluated.props(u, (0, s.toHash)(w), _.props);
    let I = w.filter((h) => !(0, s.alwaysValidSchema)(_, l[h]));
    if (I.length === 0) return;
    let b = u.name("valid");
    for (let h of I) {
      if (y(h)) p(h);
      else {
        if (u.if((0, r.propertyInData)(u, m, h, _.opts.ownProperties)), p(h), !_.allErrors) u.else().var(b, true);
        u.endIf();
      }
      i.it.definedProperties.add(h), i.ok(b);
    }
    function y(h) {
      return _.opts.useDefaults && !_.compositeRule && l[h].default !== void 0;
    }
    function p(h) {
      i.subschema({ keyword: "properties", schemaProp: h, dataProp: h }, b);
    }
  } };
  e4.default = a;
}), Td = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = Ge(), r = oe(), s = le(), o = le(), a = { keyword: "patternProperties", type: "object", schemaType: "object", code(i) {
    let { gen: u, schema: l, data: d, parentSchema: m, it: _ } = i, { opts: w } = _, I = (0, t.allSchemaProperties)(l), b = I.filter((q) => (0, s.alwaysValidSchema)(_, l[q]));
    if (I.length === 0 || b.length === I.length && (!_.opts.unevaluated || _.props === true)) return;
    let y = w.strictSchema && !w.allowMatchingProperties && m.properties, p = u.name("valid");
    if (_.props !== true && !(_.props instanceof r.Name)) _.props = (0, o.evaluatedPropsToName)(u, _.props);
    let { props: h } = _;
    g();
    function g() {
      for (let q of I) {
        if (y) f(q);
        if (_.allErrors) z(q);
        else u.var(p, true), z(q), u.if(p);
      }
    }
    function f(q) {
      for (let R in y) if (new RegExp(q).test(R)) (0, s.checkStrictMode)(_, `property ${R} matches pattern ${q} (use allowMatchingProperties)`);
    }
    function z(q) {
      u.forIn("key", d, (R) => {
        u.if(r._`${(0, t.usePattern)(i, q)}.test(${R})`, () => {
          let S = b.includes(q);
          if (!S) i.subschema({ keyword: "patternProperties", schemaProp: q, dataProp: R, dataPropType: o.Type.Str }, p);
          if (_.opts.unevaluated && h !== true) u.assign(r._`${h}[${R}]`, true);
          else if (!S && !_.allErrors) u.if((0, r.not)(p), () => u.break());
        });
      });
    }
  } };
  e4.default = a;
}), Cd = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = le(), r = { keyword: "not", schemaType: ["object", "boolean"], trackErrors: true, code(s) {
    let { gen: o, schema: a, it: i } = s;
    if ((0, t.alwaysValidSchema)(i, a)) {
      s.fail();
      return;
    }
    let u = o.name("valid");
    s.subschema({ keyword: "not", compositeRule: true, createErrors: false, allErrors: false }, u), s.failResult(u, () => s.reset(), () => s.error());
  }, error: { message: "must NOT be valid" } };
  e4.default = r;
}), kd = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = { keyword: "anyOf", schemaType: "array", trackErrors: true, code: Ge().validateUnion, error: { message: "must match a schema in anyOf" } };
  e4.default = t;
}), Id = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = oe(), r = le(), s = { keyword: "oneOf", schemaType: "array", trackErrors: true, error: { message: "must match exactly one schema in oneOf", params: ({ params: o }) => t._`{passingSchemas: ${o.passing}}` }, code(o) {
    let { gen: a, schema: i, parentSchema: u, it: l } = o;
    if (!Array.isArray(i)) throw Error("ajv implementation error");
    if (l.opts.discriminator && u.discriminator) return;
    let d = i, m = a.let("valid", false), _ = a.let("passing", null), w = a.name("_valid");
    o.setParams({ passing: _ }), a.block(I), o.result(m, () => o.reset(), () => o.error(true));
    function I() {
      d.forEach((b, y) => {
        let p;
        if ((0, r.alwaysValidSchema)(l, b)) a.var(w, true);
        else p = o.subschema({ keyword: "oneOf", schemaProp: y, compositeRule: true }, w);
        if (y > 0) a.if(t._`${w} && ${m}`).assign(m, false).assign(_, t._`[${_}, ${y}]`).else();
        a.if(w, () => {
          if (a.assign(m, true), a.assign(_, y), p) o.mergeEvaluated(p, t.Name);
        });
      });
    }
  } };
  e4.default = s;
}), qd = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = le(), r = { keyword: "allOf", schemaType: "array", code(s) {
    let { gen: o, schema: a, it: i } = s;
    if (!Array.isArray(a)) throw Error("ajv implementation error");
    let u = o.name("valid");
    a.forEach((l, d) => {
      if ((0, t.alwaysValidSchema)(i, l)) return;
      let m = s.subschema({ keyword: "allOf", schemaProp: d }, u);
      s.ok(u), s.mergeEvaluated(m);
    });
  } };
  e4.default = r;
}), Od = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = oe(), r = le(), s = { keyword: "if", schemaType: ["object", "boolean"], trackErrors: true, error: { message: ({ params: a }) => t.str`must match "${a.ifClause}" schema`, params: ({ params: a }) => t._`{failingKeyword: ${a.ifClause}}` }, code(a) {
    let { gen: i, parentSchema: u, it: l } = a;
    if (u.then === void 0 && u.else === void 0) (0, r.checkStrictMode)(l, '"if" without "then" and "else" is ignored');
    let d = o(l, "then"), m = o(l, "else");
    if (!d && !m) return;
    let _ = i.let("valid", true), w = i.name("_valid");
    if (I(), a.reset(), d && m) {
      let y = i.let("ifClause");
      a.setParams({ ifClause: y }), i.if(w, b("then", y), b("else", y));
    } else if (d) i.if(w, b("then"));
    else i.if((0, t.not)(w), b("else"));
    a.pass(_, () => a.error(true));
    function I() {
      let y = a.subschema({ keyword: "if", compositeRule: true, createErrors: false, allErrors: false }, w);
      a.mergeEvaluated(y);
    }
    function b(y, p) {
      return () => {
        let h = a.subschema({ keyword: y }, w);
        if (i.assign(_, w), a.mergeValidEvaluated(h, _), p) i.assign(p, t._`${y}`);
        else a.setParams({ ifClause: y });
      };
    }
  } };
  function o(a, i) {
    let u = a.schema[i];
    return u !== void 0 && !(0, r.alwaysValidSchema)(a, u);
  }
  e4.default = s;
}), Nd = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = le(), r = { keyword: ["then", "else"], schemaType: ["object", "boolean"], code({ keyword: s, parentSchema: o, it: a }) {
    if (o.if === void 0) (0, t.checkStrictMode)(a, `"${s}" without "if" is ignored`);
  } };
  e4.default = r;
}), $c = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = zc(), r = zd(), s = wc(), o = wd(), a = Ed(), i = Fn(), u = $d(), l = Ec(), d = Pd(), m = Td(), _ = Cd(), w = kd(), I = Id(), b = qd(), y = Od(), p = Nd();
  function h(g = false) {
    let f = [_.default, w.default, I.default, b.default, y.default, p.default, u.default, l.default, i.default, d.default, m.default];
    if (g) f.push(r.default, o.default);
    else f.push(t.default, s.default);
    return f.push(a.default), f;
  }
  e4.default = h;
}), Md = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = oe(), r = { keyword: "format", type: ["number", "string"], schemaType: "string", $data: true, error: { message: ({ schemaCode: s }) => t.str`must match format "${s}"`, params: ({ schemaCode: s }) => t._`{format: ${s}}` }, code(s, o) {
    let { gen: a, data: i, $data: u, schema: l, schemaCode: d, it: m } = s, { opts: _, errSchemaPath: w, schemaEnv: I, self: b } = m;
    if (!_.validateFormats) return;
    if (u) y();
    else p();
    function y() {
      let h = a.scopeValue("formats", { ref: b.formats, code: _.code.formats }), g = a.const("fDef", t._`${h}[${d}]`), f = a.let("fType"), z = a.let("format");
      a.if(t._`typeof ${g} == "object" && !(${g} instanceof RegExp)`, () => a.assign(f, t._`${g}.type || "string"`).assign(z, t._`${g}.validate`), () => a.assign(f, t._`"string"`).assign(z, g)), s.fail$data((0, t.or)(q(), R()));
      function q() {
        if (_.strictSchema === false) return t.nil;
        return t._`${d} && !${z}`;
      }
      function R() {
        let S = I.$async ? t._`(${g}.async ? await ${z}(${i}) : ${z}(${i}))` : t._`${z}(${i})`, O = t._`(typeof ${z} == "function" ? ${S} : ${z}.test(${i}))`;
        return t._`${z} && ${z} !== true && ${f} === ${o} && !${O}`;
      }
    }
    function p() {
      let h = b.formats[l];
      if (!h) {
        q();
        return;
      }
      if (h === true) return;
      let [g, f, z] = R(h);
      if (g === o) s.pass(S());
      function q() {
        if (_.strictSchema === false) {
          b.logger.warn(O());
          return;
        }
        throw Error(O());
        function O() {
          return `unknown format "${l}" ignored in schema at path "${w}"`;
        }
      }
      function R(O) {
        let x = O instanceof RegExp ? (0, t.regexpCode)(O) : _.code.formats ? t._`${_.code.formats}${(0, t.getProperty)(l)}` : void 0, G = a.scopeValue("formats", { key: l, ref: O, code: x });
        if (typeof O == "object" && !(O instanceof RegExp)) return [O.type || "string", O.validate, t._`${G}.validate`];
        return ["string", O, G];
      }
      function S() {
        if (typeof h == "object" && !(h instanceof RegExp) && h.async) {
          if (!I.$async) throw Error("async format in sync schema");
          return t._`await ${z}(${i})`;
        }
        return typeof f == "function" ? t._`${z}(${i})` : t._`${z}.test(${i})`;
      }
    }
  } };
  e4.default = r;
}), Pc = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = [Md().default];
  e4.default = t;
}), Tc = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.contentVocabulary = e4.metadataVocabulary = void 0, e4.metadataVocabulary = ["title", "description", "default", "deprecated", "readOnly", "writeOnly", "examples"], e4.contentVocabulary = ["contentMediaType", "contentEncoding", "contentSchema"];
}), jd = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = bc(), r = Rc(), s = $c(), o = Pc(), a = Tc(), i = [t.default, r.default, (0, s.default)(), o.default, a.metadataVocabulary, a.contentVocabulary];
  e4.default = i;
}), Ad = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.DiscrError = void 0;
  var t;
  (function(r) {
    r.Tag = "tag", r.Mapping = "mapping";
  })(t || (e4.DiscrError = t = {}));
}), Cc = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = oe(), r = Ad(), s = Va(), o = Rs(), a = le(), i = { keyword: "discriminator", type: "object", schemaType: "object", error: { message: ({ params: { discrError: u, tagName: l } }) => u === r.DiscrError.Tag ? `tag "${l}" must be string` : `value of tag "${l}" must be in oneOf`, params: ({ params: { discrError: u, tag: l, tagName: d } }) => t._`{error: ${u}, tag: ${d}, tagValue: ${l}}` }, code(u) {
    let { gen: l, data: d, schema: m, parentSchema: _, it: w } = u, { oneOf: I } = _;
    if (!w.opts.discriminator) throw Error("discriminator: requires discriminator option");
    let b = m.propertyName;
    if (typeof b != "string") throw Error("discriminator: requires propertyName");
    if (m.mapping) throw Error("discriminator: mapping is not supported");
    if (!I) throw Error("discriminator: requires oneOf keyword");
    let y = l.let("valid", false), p = l.const("tag", t._`${d}${(0, t.getProperty)(b)}`);
    l.if(t._`typeof ${p} == "string"`, () => h(), () => u.error(false, { discrError: r.DiscrError.Tag, tag: p, tagName: b })), u.ok(y);
    function h() {
      let z = f();
      l.if(false);
      for (let q in z) l.elseIf(t._`${p} === ${q}`), l.assign(y, g(z[q]));
      l.else(), u.error(false, { discrError: r.DiscrError.Mapping, tag: p, tagName: b }), l.endIf();
    }
    function g(z) {
      let q = l.name("valid"), R = u.subschema({ keyword: "oneOf", schemaProp: z }, q);
      return u.mergeEvaluated(R, t.Name), q;
    }
    function f() {
      var z;
      let q = {}, R = O(_), S = true;
      for (let L = 0; L < I.length; L++) {
        let H = I[L];
        if ((H === null || H === void 0 ? void 0 : H.$ref) && !(0, a.schemaHasRulesButRef)(H, w.self.RULES)) {
          let X = H.$ref;
          if (H = s.resolveRef.call(w.self, w.schemaEnv.root, w.baseId, X), H instanceof s.SchemaEnv) H = H.schema;
          if (H === void 0) throw new o.default(w.opts.uriResolver, w.baseId, X);
        }
        let Z = (z = H === null || H === void 0 ? void 0 : H.properties) === null || z === void 0 ? void 0 : z[b];
        if (typeof Z != "object") throw Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${b}"`);
        S = S && (R || O(H)), x(Z, L);
      }
      if (!S) throw Error(`discriminator: "${b}" must be required`);
      return q;
      function O({ required: L }) {
        return Array.isArray(L) && L.includes(b);
      }
      function x(L, H) {
        if (L.const) G(L.const, H);
        else if (L.enum) for (let Z of L.enum) G(Z, H);
        else throw Error(`discriminator: "properties/${b}" must have "const" or "enum"`);
      }
      function G(L, H) {
        if (typeof L != "string" || L in q) throw Error(`discriminator: "${b}" values must be unique strings`);
        q[L] = H;
      }
    }
  } };
  e4.default = i;
}), Ld = W((e4, t) => {
  t.exports = { $schema: "http://json-schema.org/draft-07/schema#", $id: "http://json-schema.org/draft-07/schema#", title: "Core schema meta-schema", definitions: { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: true, default: [] } }, type: ["object", "boolean"], properties: { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: true, readOnly: { type: "boolean", default: false }, examples: { type: "array", items: true }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: true }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: false }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: true, enum: { type: "array", items: true, minItems: 1, uniqueItems: true }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: true }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, default: true };
}), kc = W((e4, t) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.MissingRefError = e4.ValidationError = e4.CodeGen = e4.Name = e4.nil = e4.stringify = e4.str = e4._ = e4.KeywordCxt = e4.Ajv = void 0;
  let r = vc(), s = jd(), o = Cc(), a = Ld(), i = ["/properties"], u = "http://json-schema.org/draft-07/schema";
  var l = class extends r.default {
    _addVocabularies() {
      if (super._addVocabularies(), s.default.forEach((I) => this.addVocabulary(I)), this.opts.discriminator) this.addKeyword(o.default);
    }
    _addDefaultMetaSchema() {
      if (super._addDefaultMetaSchema(), !this.opts.meta) return;
      let I = this.opts.$data ? this.$dataMetaSchema(a, i) : a;
      this.addMetaSchema(I, u, false), this.refs["http://json-schema.org/schema"] = u;
    }
    defaultMeta() {
      return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(u) ? u : void 0);
    }
  };
  e4.Ajv = l, t.exports = e4 = l, t.exports.Ajv = l, Object.defineProperty(e4, "__esModule", { value: true }), e4.default = l;
  var d = bs();
  Object.defineProperty(e4, "KeywordCxt", { enumerable: true, get: function() {
    return d.KeywordCxt;
  } });
  var m = oe();
  Object.defineProperty(e4, "_", { enumerable: true, get: function() {
    return m._;
  } }), Object.defineProperty(e4, "str", { enumerable: true, get: function() {
    return m.str;
  } }), Object.defineProperty(e4, "stringify", { enumerable: true, get: function() {
    return m.stringify;
  } }), Object.defineProperty(e4, "nil", { enumerable: true, get: function() {
    return m.nil;
  } }), Object.defineProperty(e4, "Name", { enumerable: true, get: function() {
    return m.Name;
  } }), Object.defineProperty(e4, "CodeGen", { enumerable: true, get: function() {
    return m.CodeGen;
  } });
  var _ = Da();
  Object.defineProperty(e4, "ValidationError", { enumerable: true, get: function() {
    return _.default;
  } });
  var w = Rs();
  Object.defineProperty(e4, "MissingRefError", { enumerable: true, get: function() {
    return w.default;
  } });
}), Ic = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.dynamicAnchor = void 0;
  let t = oe(), r = Ke(), s = Va(), o = Vn(), a = { keyword: "$dynamicAnchor", schemaType: "string", code: (l) => i(l, l.schema) };
  function i(l, d) {
    let { gen: m, it: _ } = l;
    _.schemaEnv.root.dynamicAnchors[d] = true;
    let w = t._`${r.default.dynamicAnchors}${(0, t.getProperty)(d)}`, I = _.errSchemaPath === "#" ? _.validateName : u(l);
    m.if(t._`!${w}`, () => m.assign(w, I));
  }
  e4.dynamicAnchor = i;
  function u(l) {
    let { schemaEnv: d, schema: m, self: _ } = l.it, { root: w, baseId: I, localRefs: b, meta: y } = d.root, { schemaId: p } = _.opts, h = new s.SchemaEnv({ schema: m, schemaId: p, root: w, baseId: I, localRefs: b, meta: y });
    return s.compileSchema.call(_, h), (0, o.getValidate)(l, h);
  }
  e4.default = a;
}), qc = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.dynamicRef = void 0;
  let t = oe(), r = Ke(), s = Vn(), o = { keyword: "$dynamicRef", schemaType: "string", code: (i) => a(i, i.schema) };
  function a(i, u) {
    let { gen: l, keyword: d, it: m } = i;
    if (u[0] !== "#") throw Error(`"${d}" only supports hash fragment reference`);
    let _ = u.slice(1);
    if (m.allErrors) w();
    else {
      let b = l.let("valid", false);
      w(b), i.ok(b);
    }
    function w(b) {
      if (m.schemaEnv.root.dynamicAnchors[_]) {
        let y = l.let("_v", t._`${r.default.dynamicAnchors}${(0, t.getProperty)(_)}`);
        l.if(y, I(y, b), I(m.validateName, b));
      } else I(m.validateName, b)();
    }
    function I(b, y) {
      return y ? () => l.block(() => {
        (0, s.callRef)(i, b), l.let(y, true);
      }) : () => (0, s.callRef)(i, b);
    }
  }
  e4.dynamicRef = a, e4.default = o;
}), Ud = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = Ic(), r = le(), s = { keyword: "$recursiveAnchor", schemaType: "boolean", code(o) {
    if (o.schema) (0, t.dynamicAnchor)(o, "");
    else (0, r.checkStrictMode)(o.it, "$recursiveAnchor: false is ignored");
  } };
  e4.default = s;
}), Dd = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = qc(), r = { keyword: "$recursiveRef", schemaType: "string", code: (s) => (0, t.dynamicRef)(s, s.schema) };
  e4.default = r;
}), Vd = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = Ic(), r = qc(), s = Ud(), o = Dd(), a = [t.default, r.default, s.default, o.default];
  e4.default = a;
}), xd = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = Fn(), r = { keyword: "dependentRequired", type: "object", schemaType: "object", error: t.error, code: (s) => (0, t.validatePropertyDeps)(s) };
  e4.default = r;
}), Fd = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = Fn(), r = { keyword: "dependentSchemas", type: "object", schemaType: "object", code: (s) => (0, t.validateSchemaDeps)(s) };
  e4.default = r;
}), Hd = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = le(), r = { keyword: ["maxContains", "minContains"], type: "array", schemaType: "number", code({ keyword: s, parentSchema: o, it: a }) {
    if (o.contains === void 0) (0, t.checkStrictMode)(a, `"${s}" without "contains" is ignored`);
  } };
  e4.default = r;
}), Kd = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = xd(), r = Fd(), s = Hd(), o = [t.default, r.default, s.default];
  e4.default = o;
}), Gd = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = oe(), r = le(), s = Ke(), o = { keyword: "unevaluatedProperties", type: "object", schemaType: ["boolean", "object"], trackErrors: true, error: { message: "must NOT have unevaluated properties", params: ({ params: a }) => t._`{unevaluatedProperty: ${a.unevaluatedProperty}}` }, code(a) {
    let { gen: i, schema: u, data: l, errsCount: d, it: m } = a;
    if (!d) throw Error("ajv implementation error");
    let { allErrors: _, props: w } = m;
    if (w instanceof t.Name) i.if(t._`${w} !== true`, () => i.forIn("key", l, (p) => i.if(b(w, p), () => I(p))));
    else if (w !== true) i.forIn("key", l, (p) => w === void 0 ? I(p) : i.if(y(w, p), () => I(p)));
    m.props = true, a.ok(t._`${d} === ${s.default.errors}`);
    function I(p) {
      if (u === false) {
        if (a.setParams({ unevaluatedProperty: p }), a.error(), !_) i.break();
        return;
      }
      if (!(0, r.alwaysValidSchema)(m, u)) {
        let h = i.name("valid");
        if (a.subschema({ keyword: "unevaluatedProperties", dataProp: p, dataPropType: r.Type.Str }, h), !_) i.if((0, t.not)(h), () => i.break());
      }
    }
    function b(p, h) {
      return t._`!${p} || !${p}[${h}]`;
    }
    function y(p, h) {
      let g = [];
      for (let f in p) if (p[f] === true) g.push(t._`${h} !== ${f}`);
      return (0, t.and)(...g);
    }
  } };
  e4.default = o;
}), Jd = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = oe(), r = le(), s = { keyword: "unevaluatedItems", type: "array", schemaType: ["boolean", "object"], error: { message: ({ params: { len: o } }) => t.str`must NOT have more than ${o} items`, params: ({ params: { len: o } }) => t._`{limit: ${o}}` }, code(o) {
    let { gen: a, schema: i, data: u, it: l } = o, d = l.items || 0;
    if (d === true) return;
    let m = a.const("len", t._`${u}.length`);
    if (i === false) o.setParams({ len: d }), o.fail(t._`${m} > ${d}`);
    else if (typeof i == "object" && !(0, r.alwaysValidSchema)(l, i)) {
      let w = a.var("valid", t._`${m} <= ${d}`);
      a.if((0, t.not)(w), () => _(w, d)), o.ok(w);
    }
    l.items = true;
    function _(w, I) {
      a.forRange("i", I, m, (b) => {
        if (o.subschema({ keyword: "unevaluatedItems", dataProp: b, dataPropType: r.Type.Num }, w), !l.allErrors) a.if((0, t.not)(w), () => a.break());
      });
    }
  } };
  e4.default = s;
}), Bd = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = Gd(), r = Jd(), s = [t.default, r.default];
  e4.default = s;
}), Wd = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = bc(), r = Rc(), s = $c(), o = Vd(), a = Kd(), i = Bd(), u = Pc(), l = Tc(), d = [o.default, t.default, r.default, (0, s.default)(true), u.default, l.metadataVocabulary, l.contentVocabulary, a.default, i.default];
  e4.default = d;
}), Yd = W((e4, t) => {
  t.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/schema", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/core": true, "https://json-schema.org/draft/2020-12/vocab/applicator": true, "https://json-schema.org/draft/2020-12/vocab/unevaluated": true, "https://json-schema.org/draft/2020-12/vocab/validation": true, "https://json-schema.org/draft/2020-12/vocab/meta-data": true, "https://json-schema.org/draft/2020-12/vocab/format-annotation": true, "https://json-schema.org/draft/2020-12/vocab/content": true }, $dynamicAnchor: "meta", title: "Core and Validation specifications meta-schema", allOf: [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], type: ["object", "boolean"], $comment: "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", properties: { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: true, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: true, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: true }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: true } } };
}), Xd = W((e4, t) => {
  t.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/meta/applicator", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/applicator": true }, $dynamicAnchor: "meta", title: "Applicator vocabulary meta-schema", type: ["object", "boolean"], properties: { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, $defs: { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } } };
}), Qd = W((e4, t) => {
  t.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/meta/unevaluated", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/unevaluated": true }, $dynamicAnchor: "meta", title: "Unevaluated applicator vocabulary meta-schema", type: ["object", "boolean"], properties: { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } } };
}), eh = W((e4, t) => {
  t.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/meta/content", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/content": true }, $dynamicAnchor: "meta", title: "Content vocabulary meta-schema", type: ["object", "boolean"], properties: { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } } };
}), th = W((e4, t) => {
  t.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/meta/core", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/core": true }, $dynamicAnchor: "meta", title: "Core vocabulary meta-schema", type: ["object", "boolean"], properties: { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, $defs: { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } } };
}), rh = W((e4, t) => {
  t.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/meta/format-annotation", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/format-annotation": true }, $dynamicAnchor: "meta", title: "Format vocabulary meta-schema for annotation results", type: ["object", "boolean"], properties: { format: { type: "string" } } };
}), sh = W((e4, t) => {
  t.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/meta/meta-data", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/meta-data": true }, $dynamicAnchor: "meta", title: "Meta-data vocabulary meta-schema", type: ["object", "boolean"], properties: { title: { type: "string" }, description: { type: "string" }, default: true, deprecated: { type: "boolean", default: false }, readOnly: { type: "boolean", default: false }, writeOnly: { type: "boolean", default: false }, examples: { type: "array", items: true } } };
}), oh = W((e4, t) => {
  t.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/meta/validation", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/validation": true }, $dynamicAnchor: "meta", title: "Validation vocabulary meta-schema", type: ["object", "boolean"], properties: { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: true }] }, const: true, enum: { type: "array", items: true }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: false }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, $defs: { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: true, default: [] } } };
}), ah = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let t = Yd(), r = Xd(), s = Qd(), o = eh(), a = th(), i = rh(), u = sh(), l = oh(), d = ["/properties"];
  function m(_) {
    return [t, r, s, o, a, w(this, i), u, w(this, l)].forEach((I) => this.addMetaSchema(I, void 0, false)), this;
    function w(I, b) {
      return _ ? I.$dataMetaSchema(b, d) : b;
    }
  }
  e4.default = m;
}), nh = W((e4, t) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.MissingRefError = e4.ValidationError = e4.CodeGen = e4.Name = e4.nil = e4.stringify = e4.str = e4._ = e4.KeywordCxt = e4.Ajv2020 = void 0;
  let r = vc(), s = Wd(), o = Cc(), a = ah(), i = "https://json-schema.org/draft/2020-12/schema";
  var u = class extends r.default {
    constructor(w = {}) {
      super({ ...w, dynamicRef: true, next: true, unevaluated: true });
    }
    _addVocabularies() {
      if (super._addVocabularies(), s.default.forEach((w) => this.addVocabulary(w)), this.opts.discriminator) this.addKeyword(o.default);
    }
    _addDefaultMetaSchema() {
      super._addDefaultMetaSchema();
      let { $data: w, meta: I } = this.opts;
      if (!I) return;
      a.default.call(this, w), this.refs["http://json-schema.org/schema"] = i;
    }
    defaultMeta() {
      return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(i) ? i : void 0);
    }
  };
  e4.Ajv2020 = u, t.exports = e4 = u, t.exports.Ajv2020 = u, Object.defineProperty(e4, "__esModule", { value: true }), e4.default = u;
  var l = bs();
  Object.defineProperty(e4, "KeywordCxt", { enumerable: true, get: function() {
    return l.KeywordCxt;
  } });
  var d = oe();
  Object.defineProperty(e4, "_", { enumerable: true, get: function() {
    return d._;
  } }), Object.defineProperty(e4, "str", { enumerable: true, get: function() {
    return d.str;
  } }), Object.defineProperty(e4, "stringify", { enumerable: true, get: function() {
    return d.stringify;
  } }), Object.defineProperty(e4, "nil", { enumerable: true, get: function() {
    return d.nil;
  } }), Object.defineProperty(e4, "Name", { enumerable: true, get: function() {
    return d.Name;
  } }), Object.defineProperty(e4, "CodeGen", { enumerable: true, get: function() {
    return d.CodeGen;
  } });
  var m = Da();
  Object.defineProperty(e4, "ValidationError", { enumerable: true, get: function() {
    return m.default;
  } });
  var _ = Rs();
  Object.defineProperty(e4, "MissingRefError", { enumerable: true, get: function() {
    return _.default;
  } });
}), ih = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.formatNames = e4.fastFormats = e4.fullFormats = void 0;
  function t(L, H) {
    return { validate: L, compare: H };
  }
  e4.fullFormats = { date: t(a, i), time: t(l(true), d), "date-time": t(w(true), I), "iso-time": t(l(), m), "iso-date-time": t(w(), b), duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/, uri: h, "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu, email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/, ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i, regex: G, uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/, "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/, byte: f, int32: { type: "number", validate: R }, int64: { type: "number", validate: S }, float: { type: "number", validate: O }, double: { type: "number", validate: O }, password: true, binary: true }, e4.fastFormats = { ...e4.fullFormats, date: t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, i), time: t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, d), "date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, I), "iso-time": t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, m), "iso-date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, b), uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i, "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i, email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i }, e4.formatNames = Object.keys(e4.fullFormats);
  function r(L) {
    return L % 4 === 0 && (L % 100 !== 0 || L % 400 === 0);
  }
  let s = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, o = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function a(L) {
    let H = s.exec(L);
    if (!H) return false;
    let Z = +H[1], X = +H[2], ne = +H[3];
    return X >= 1 && X <= 12 && ne >= 1 && ne <= (X === 2 && r(Z) ? 29 : o[X]);
  }
  function i(L, H) {
    if (!(L && H)) return;
    if (L > H) return 1;
    if (L < H) return -1;
    return 0;
  }
  let u = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
  function l(L) {
    return function(Z) {
      let X = u.exec(Z);
      if (!X) return false;
      let ne = +X[1], pe = +X[2], de = +X[3], be = X[4], ce = X[5] === "-" ? -1 : 1, j = +(X[6] || 0), D = +(X[7] || 0);
      if (j > 23 || D > 59 || L && !be) return false;
      if (ne <= 23 && pe <= 59 && de < 60) return true;
      let J = pe - D * ce, T = ne - j * ce - (J < 0 ? 1 : 0);
      return (T === 23 || T === -1) && (J === 59 || J === -1) && de < 61;
    };
  }
  function d(L, H) {
    if (!(L && H)) return;
    let Z = (/* @__PURE__ */ new Date("2020-01-01T" + L)).valueOf(), X = (/* @__PURE__ */ new Date("2020-01-01T" + H)).valueOf();
    if (!(Z && X)) return;
    return Z - X;
  }
  function m(L, H) {
    if (!(L && H)) return;
    let Z = u.exec(L), X = u.exec(H);
    if (!(Z && X)) return;
    if (L = Z[1] + Z[2] + Z[3], H = X[1] + X[2] + X[3], L > H) return 1;
    if (L < H) return -1;
    return 0;
  }
  let _ = /t|\s/i;
  function w(L) {
    let H = l(L);
    return function(X) {
      let ne = X.split(_);
      return ne.length === 2 && a(ne[0]) && H(ne[1]);
    };
  }
  function I(L, H) {
    if (!(L && H)) return;
    let Z = new Date(L).valueOf(), X = new Date(H).valueOf();
    if (!(Z && X)) return;
    return Z - X;
  }
  function b(L, H) {
    if (!(L && H)) return;
    let [Z, X] = L.split(_), [ne, pe] = H.split(_), de = i(Z, ne);
    if (de === void 0) return;
    return de || d(X, pe);
  }
  let y = /\/|:/, p = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
  function h(L) {
    return y.test(L) && p.test(L);
  }
  let g = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
  function f(L) {
    return g.lastIndex = 0, g.test(L);
  }
  let z = -2147483648, q = 2147483647;
  function R(L) {
    return Number.isInteger(L) && L <= q && L >= z;
  }
  function S(L) {
    return Number.isInteger(L);
  }
  function O() {
    return true;
  }
  let x = /[^\\]\\Z/;
  function G(L) {
    if (x.test(L)) return false;
    try {
      return new RegExp(L), true;
    } catch (H) {
      return false;
    }
  }
}), ch = W((e4) => {
  Object.defineProperty(e4, "__esModule", { value: true }), e4.formatLimitDefinition = void 0;
  let t = kc(), r = oe(), s = r.operators, o = { formatMaximum: { okStr: "<=", ok: s.LTE, fail: s.GT }, formatMinimum: { okStr: ">=", ok: s.GTE, fail: s.LT }, formatExclusiveMaximum: { okStr: "<", ok: s.LT, fail: s.GTE }, formatExclusiveMinimum: { okStr: ">", ok: s.GT, fail: s.LTE } }, a = { message: ({ keyword: u, schemaCode: l }) => r.str`should be ${o[u].okStr} ${l}`, params: ({ keyword: u, schemaCode: l }) => r._`{comparison: ${o[u].okStr}, limit: ${l}}` };
  e4.formatLimitDefinition = { keyword: Object.keys(o), type: "string", schemaType: "string", $data: true, error: a, code(u) {
    let { gen: l, data: d, schemaCode: m, keyword: _, it: w } = u, { opts: I, self: b } = w;
    if (!I.validateFormats) return;
    let y = new t.KeywordCxt(w, b.RULES.all.format.definition, "format");
    if (y.$data) p();
    else h();
    function p() {
      let f = l.scopeValue("formats", { ref: b.formats, code: I.code.formats }), z = l.const("fmt", r._`${f}[${y.schemaCode}]`);
      u.fail$data((0, r.or)(r._`typeof ${z} != "object"`, r._`${z} instanceof RegExp`, r._`typeof ${z}.compare != "function"`, g(z)));
    }
    function h() {
      let f = y.schema, z = b.formats[f];
      if (!z || z === true) return;
      if (typeof z != "object" || z instanceof RegExp || typeof z.compare != "function") throw Error(`"${_}": format "${f}" does not define "compare" function`);
      let q = l.scopeValue("formats", { key: f, ref: z, code: I.code.formats ? r._`${I.code.formats}${(0, r.getProperty)(f)}` : void 0 });
      u.fail$data(g(q));
    }
    function g(f) {
      return r._`${f}.compare(${d}, ${m}) ${o[_].fail} 0`;
    }
  }, dependencies: ["format"] };
  let i = (u) => (u.addKeyword(e4.formatLimitDefinition), u);
  e4.default = i;
}), lh = W((e4, t) => {
  Object.defineProperty(e4, "__esModule", { value: true });
  let r = ih(), s = ch(), o = oe(), a = new o.Name("fullFormats"), i = new o.Name("fastFormats"), u = (d, m = { keywords: true }) => {
    if (Array.isArray(m)) return l(d, m, r.fullFormats, a), d;
    let [_, w] = m.mode === "fast" ? [r.fastFormats, i] : [r.fullFormats, a];
    if (l(d, m.formats || r.formatNames, _, w), m.keywords) (0, s.default)(d);
    return d;
  };
  u.get = (d, m = "full") => {
    let _ = (m === "fast" ? r.fastFormats : r.fullFormats)[d];
    if (!_) throw Error(`Unknown format "${d}"`);
    return _;
  };
  function l(d, m, _, w) {
    var I, b;
    (I = (b = d.opts.code).formats) !== null && I !== void 0 || (b.formats = o._`require("ajv-formats/dist/formats").${w}`);
    for (let y of m) d.addFormat(y, _[y]);
  }
  t.exports = e4 = u, Object.defineProperty(e4, "__esModule", { value: true }), e4.default = u;
}), uh = kc(), dh = nh(), hh = Gs(lh(), 1), mh = /* @__PURE__ */ new Set(["https://json-schema.org/draft/2020-12/schema", "http://json-schema.org/draft/2020-12/schema"]), ph = hh.default;
function fh() {
  let e4 = new dh.Ajv2020({ strict: false, validateFormats: true, validateSchema: false, allErrors: true });
  return ph(e4), e4;
}
var $or = class {
  _ajv;
  _userAjv;
  constructor(e4) {
    this._userAjv = e4 !== void 0, this._ajv = e4;
  }
  get ajv() {
    return this._ajv ??= fh();
  }
  getValidator(e4) {
    if (!this._userAjv && "$schema" in e4 && typeof e4.$schema === "string" && !mh.has(e4.$schema.replace(/#$/, ""))) {
      let s = e4.$schema.slice(0, 200);
      throw Error(`JSON Schema declares an unsupported dialect ("$schema": "${s}"). The default validator supports JSON Schema 2020-12 only; pass a pre-configured Ajv instance to AjvJsonSchemaValidator(ajv) to validate other dialects.`);
    }
    let t = this.ajv, r = "$id" in e4 && typeof e4.$id === "string" ? t.getSchema(e4.$id) ?? t.compile(e4) : t.compile(e4);
    return (s) => r(s) ? { valid: true, data: s, errorMessage: void 0 } : { valid: false, data: void 0, errorMessage: t.errorsText(r.errors) };
  }
}, Mm = uh.Ajv;
var Oc = false;
class Hn extends Event {
  constructor(e4, t) {
    var r, s;
    super(e4), this.code = (r = t == null ? void 0 : t.code) != null ? r : void 0, this.message = (s = t == null ? void 0 : t.message) != null ? s : void 0;
  }
  [Symbol.for("nodejs.util.inspect.custom")](e4, t, r) {
    return r(Nc(this), t);
  }
  [Symbol.for("Deno.customInspect")](e4, t) {
    return e4(Nc(this), t);
  }
}
function gh(e4) {
  let t = globalThis.DOMException;
  return typeof t == "function" ? new t(e4, "SyntaxError") : SyntaxError(e4);
}
function Kn(e4) {
  return e4 instanceof Error ? "errors" in e4 && Array.isArray(e4.errors) ? e4.errors.map(Kn).join(", ") : "cause" in e4 && e4.cause instanceof Error ? `${e4}: ${Kn(e4.cause)}` : e4.message : `${e4}`;
}
function Nc(e4) {
  return { type: e4.type, message: e4.message, code: e4.code, defaultPrevented: e4.defaultPrevented, cancelable: e4.cancelable, timeStamp: e4.timeStamp };
}
var jc = (e4) => {
  throw TypeError(e4);
}, Qn = (e4, t, r) => t.has(e4) || jc("Cannot " + r), ue = (e4, t, r) => (Qn(e4, t, "read from private field"), r ? r.call(e4) : t.get(e4)), we = (e4, t, r) => t.has(e4) ? jc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e4) : t.set(e4, r), fe = (e4, t, r, s) => (Qn(e4, t, "write to private field"), t.set(e4, r), r), rt = (e4, t, r) => (Qn(e4, t, "access private method"), r), je, Mt, nr, xa, Fa, Es, lr, $s, St, ir, ur, cr, zs, Je, Gn, Jn, Bn, Mc, Wn, Yn, ws, Xn, Zn;
class dr extends EventTarget {
  constructor(e4, t) {
    var r, s;
    super(), we(this, Je), this.CONNECTING = 0, this.OPEN = 1, this.CLOSED = 2, we(this, je), we(this, Mt), we(this, nr), we(this, xa), we(this, Fa), we(this, Es), we(this, lr), we(this, $s, null), we(this, St), we(this, ir), we(this, ur, null), we(this, cr, null), we(this, zs, null), we(this, Jn, async (o) => {
      var a;
      ue(this, ir).reset();
      let { body: i, redirected: u, status: l, headers: d } = o;
      if (l === 204) {
        rt(this, Je, ws).call(this, "Server sent HTTP 204, not reconnecting", 204), this.close();
        return;
      }
      if (u ? fe(this, nr, new URL(o.url)) : fe(this, nr, void 0), l !== 200) {
        rt(this, Je, ws).call(this, `Non-200 status code (${l})`, l);
        return;
      }
      if (!(d.get("content-type") || "").startsWith("text/event-stream")) {
        rt(this, Je, ws).call(this, 'Invalid content type, expected "text/event-stream"', l);
        return;
      }
      if (ue(this, je) === this.CLOSED) return;
      fe(this, je, this.OPEN);
      let m = new Event("open");
      if ((a = ue(this, zs)) == null || a.call(this, m), this.dispatchEvent(m), typeof i != "object" || !i || !("getReader" in i)) {
        rt(this, Je, ws).call(this, "Invalid response body, expected a web ReadableStream", l), this.close();
        return;
      }
      let _ = new TextDecoder(), w = i.getReader(), I = true;
      do {
        let { done: b, value: y } = await w.read();
        y && ue(this, ir).feed(_.decode(y, { stream: !b })), b && (I = false, ue(this, ir).reset(), rt(this, Je, Xn).call(this));
      } while (I);
    }), we(this, Bn, (o) => {
      fe(this, St, void 0), !(o.name === "AbortError" || o.type === "aborted") && rt(this, Je, Xn).call(this, Kn(o));
    }), we(this, Wn, (o) => {
      typeof o.id == "string" && fe(this, $s, o.id);
      let a = new MessageEvent(o.event || "message", { data: o.data, origin: ue(this, nr) ? ue(this, nr).origin : ue(this, Mt).origin, lastEventId: o.id || "" });
      ue(this, cr) && (!o.event || o.event === "message") && ue(this, cr).call(this, a), this.dispatchEvent(a);
    }), we(this, Yn, (o) => {
      fe(this, Es, o);
    }), we(this, Zn, () => {
      fe(this, lr, void 0), ue(this, je) === this.CONNECTING && rt(this, Je, Gn).call(this);
    });
    try {
      if (e4 instanceof URL) fe(this, Mt, e4);
      else if (typeof e4 == "string") fe(this, Mt, new URL(e4, Sh()));
      else throw Error("Invalid URL");
    } catch {
      throw gh("An invalid or illegal string was specified");
    }
    fe(this, ir, (0, import_chunk_51mmywgr.jNn)({ onEvent: ue(this, Wn), onRetry: ue(this, Yn) })), fe(this, je, this.CONNECTING), fe(this, Es, 3e3), fe(this, Fa, (r = t == null ? void 0 : t.fetch) != null ? r : globalThis.fetch), fe(this, xa, (s = t == null ? void 0 : t.withCredentials) != null ? s : false), rt(this, Je, Gn).call(this);
  }
  get readyState() {
    return ue(this, je);
  }
  get url() {
    return ue(this, Mt).href;
  }
  get withCredentials() {
    return ue(this, xa);
  }
  get onerror() {
    return ue(this, ur);
  }
  set onerror(e4) {
    fe(this, ur, e4);
  }
  get onmessage() {
    return ue(this, cr);
  }
  set onmessage(e4) {
    fe(this, cr, e4);
  }
  get onopen() {
    return ue(this, zs);
  }
  set onopen(e4) {
    fe(this, zs, e4);
  }
  addEventListener(e4, t, r) {
    let s = t;
    super.addEventListener(e4, s, r);
  }
  removeEventListener(e4, t, r) {
    let s = t;
    super.removeEventListener(e4, s, r);
  }
  close() {
    ue(this, lr) && clearTimeout(ue(this, lr)), ue(this, je) !== this.CLOSED && (ue(this, St) && ue(this, St).abort(), fe(this, je, this.CLOSED), fe(this, St, void 0));
  }
}
je = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), xa = /* @__PURE__ */ new WeakMap(), Fa = /* @__PURE__ */ new WeakMap(), Es = /* @__PURE__ */ new WeakMap(), lr = /* @__PURE__ */ new WeakMap(), $s = /* @__PURE__ */ new WeakMap(), St = /* @__PURE__ */ new WeakMap(), ir = /* @__PURE__ */ new WeakMap(), ur = /* @__PURE__ */ new WeakMap(), cr = /* @__PURE__ */ new WeakMap(), zs = /* @__PURE__ */ new WeakMap(), Je = /* @__PURE__ */ new WeakSet(), Gn = function() {
  fe(this, je, this.CONNECTING), fe(this, St, new AbortController()), ue(this, Fa)(ue(this, Mt), rt(this, Je, Mc).call(this)).then(ue(this, Jn)).catch(ue(this, Bn));
}, Jn = /* @__PURE__ */ new WeakMap(), Bn = /* @__PURE__ */ new WeakMap(), Mc = function() {
  var e4;
  let t = { mode: "cors", redirect: "follow", headers: { Accept: "text/event-stream", ...ue(this, $s) ? { "Last-Event-ID": ue(this, $s) } : void 0 }, cache: "no-store", signal: (e4 = ue(this, St)) == null ? void 0 : e4.signal };
  return "window" in globalThis && (t.credentials = this.withCredentials ? "include" : "same-origin"), t;
}, Wn = /* @__PURE__ */ new WeakMap(), Yn = /* @__PURE__ */ new WeakMap(), ws = function(e4, t) {
  var r;
  ue(this, je) !== this.CLOSED && fe(this, je, this.CLOSED);
  let s = new Hn("error", { code: t, message: e4 });
  (r = ue(this, ur)) == null || r.call(this, s), this.dispatchEvent(s);
}, Xn = function(e4, t) {
  var r;
  if (ue(this, je) === this.CLOSED) return;
  fe(this, je, this.CONNECTING);
  let s = new Hn("error", { code: t, message: e4 });
  (r = ue(this, ur)) == null || r.call(this, s), this.dispatchEvent(s), fe(this, lr, setTimeout(ue(this, Zn), ue(this, Es)));
}, Zn = /* @__PURE__ */ new WeakMap(), dr.CONNECTING = 0, dr.OPEN = 1, dr.CLOSED = 2;
function Sh() {
  let e4 = "document" in globalThis ? globalThis.document : void 0;
  return e4 && typeof e4 == "object" && "baseURI" in e4 && typeof e4.baseURI == "string" ? e4.baseURI : void 0;
}
class ei extends TransformStream {
  constructor({ onError: e4, onRetry: t, onComment: r } = {}) {
    let s;
    super({ start(o) {
      s = (0, import_chunk_51mmywgr.jNn)({ onEvent: (a) => {
        o.enqueue(a);
      }, onError(a) {
        e4 === "terminate" ? o.error(a) : typeof e4 == "function" && e4(a);
      }, onRetry: t, onComment: r });
    }, transform(o) {
      s.feed(o);
    } });
  }
}
var Ps = class extends Error {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.OAuthClientFlowError" });
  }
  static [Symbol.hasInstance](e4) {
    return Ue(this, e4);
  }
  static isInstance(e4) {
    if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
    return Ue(this, e4);
  }
  constructor(e4) {
    super(e4);
    this.name = new.target.name, Ot(this, new.target);
  }
}, n4e = class extends Ps {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.IssuerMismatchError" });
  }
  kind;
  expected;
  received;
  constructor(e4, t, r) {
    super(`Issuer mismatch in ${e4 === "metadata" ? "authorization server metadata (RFC 8414 \xA73.3)" : "authorization response (RFC 9207)"}: expected ${JSON.stringify(t)}, received ${JSON.stringify(r)}`);
    this.kind = e4, this.expected = t, this.received = r;
  }
}, K9o = class extends Ps {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.RegistrationRejectedError" });
  }
  status;
  body;
  submittedMetadata;
  constructor(e4) {
    super(`Dynamic Client Registration rejected (HTTP ${e4.status}): ${e4.body}`);
    this.status = e4.status, this.body = e4.body, this.submittedMetadata = e4.submittedMetadata;
  }
}, Xc = class extends Ps {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.InsecureTokenEndpointError" });
  }
  tokenEndpoint;
  constructor(e4) {
    super(`Refusing to send credentials to non-https token endpoint '${e4}'. OAuth token requests MUST use TLS (localhost / 127.0.0.1 / ::1 are exempt).`);
    this.tokenEndpoint = e4;
  }
}, ti = class extends Ps {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.AuthorizationServerMismatchError" });
  }
  constructor(e4, t) {
    super(`Authorization server changed between redirect and callback (redirected to ${JSON.stringify(e4)}, callback resolved ${JSON.stringify(t)}); refusing to send authorization_code/code_verifier to a different token endpoint`);
    this.recordedIssuer = e4, this.currentIssuer = t;
  }
}, Ac = class extends Ps {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.InsufficientScopeError" });
  }
  requiredScope;
  resourceMetadataUrl;
  errorDescription;
  constructor(e4) {
    super(`Insufficient scope${e4.requiredScope ? `: required "${e4.requiredScope}"` : ""}`);
    this.requiredScope = e4.requiredScope, this.resourceMetadataUrl = e4.resourceMetadataUrl, this.errorDescription = e4.errorDescription;
  }
};
function Lc(e4, t, r) {
  if (e4 === void 0) return;
  if (e4.issuer === void 0) {
    if (r?.canPersistStamp !== false) console.warn("[mcp-sdk] SEP-2352: stored OAuth credential has no 'issuer' stamp (pre-upgrade storage or provider not round-tripping the value). SEP-2352 isolation is inactive for this read; ensure your provider round-trips the issuer field.");
    return e4;
  }
  return Zc(e4.issuer, t) ? e4 : void 0;
}
function Zc(e4, t) {
  return e4 === t || e4.endsWith("/") && e4.slice(0, -1) === t || t.endsWith("/") && t.slice(0, -1) === e4;
}
function Qc(e4) {
  if (e4 == null) return false;
  let t = e4;
  return typeof t.tokens === "function" && typeof t.clientInformation === "function";
}
async function _h(e4, t, r) {
  let { resourceMetadataUrl: s, scope: o } = Fgt(t.response);
  if (await pJt(e4, { serverUrl: t.serverUrl, resourceMetadataUrl: s, scope: o, fetchFn: t.fetchFn, ...r }) !== "AUTHORIZED") throw new YL();
}
function el(e4, t) {
  return { token: async () => (await e4.tokens())?.access_token, onUnauthorized: async (r) => _h(e4, r, t) };
}
var YL = class extends Error {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.UnauthorizedError" });
  }
  static [Symbol.hasInstance](e4) {
    return Ue(this, e4);
  }
  static isInstance(e4) {
    if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
    return Ue(this, e4);
  }
  constructor(e4) {
    super(e4 ?? "Unauthorized");
    this.name = "UnauthorizedError", Ot(this, new.target);
  }
};
function Ja(e4) {
  return e4?.authorization_response_iss_parameter_supported === true;
}
function Ba({ iss: e4, expectedIssuer: t, issParameterSupported: r }) {
  if (t === void 0) return;
  if (e4 === void 0) {
    if (r) throw new n4e("authorization_response", t, void 0);
    return;
  }
  if (e4 !== t) throw new n4e("authorization_response", t, e4);
}
function ri(...e4) {
  let t = /* @__PURE__ */ new Set();
  for (let r of e4) {
    if (!r) continue;
    for (let s of r.split(/\s+/)) if (s) t.add(s);
  }
  return t.size > 0 ? [...t].join(" ") : void 0;
}
function yh(e4, t) {
  if (!e4) return false;
  let r = new Set((t ?? "").split(/\s+/).filter(Boolean));
  for (let s of e4.split(/\s+/)) if (s && !r.has(s)) return true;
  return false;
}
async function tl(e4, t, r, s, o) {
  if (typeof e4 === "string") return { authorizationCode: e4, iss: t };
  let a = e4.get("iss") ?? void 0, i = e4.get("code");
  if (i) return { authorizationCode: i, iss: a };
  let u = (await r.discoveryState?.())?.authorizationServerMetadata;
  if (!u) try {
    u = (await Y9o(s, o)).authorizationServerMetadata;
  } catch {
    u = void 0;
  }
  if (!u) throw new YL("Authorization callback failed and the issuer could not be verified");
  Ba({ iss: a, expectedIssuer: u.issuer, issParameterSupported: Ja(u) });
  let l = e4.get("error");
  if (l) throw new bie(l, e4.get("error_description") ?? l, e4.get("error_uri") ?? void 0);
  throw new YL("Authorization callback contained neither `code` nor `error`");
}
function vh(e4) {
  return ["client_secret_basic", "client_secret_post", "none"].includes(e4);
}
var si = "code", oi = "S256";
function bh(e4, t) {
  let r = e4.client_secret !== void 0;
  if ("token_endpoint_auth_method" in e4 && e4.token_endpoint_auth_method && vh(e4.token_endpoint_auth_method) && (t.length === 0 || t.includes(e4.token_endpoint_auth_method))) return e4.token_endpoint_auth_method;
  if (t.length === 0) return r ? "client_secret_basic" : "none";
  if (r && t.includes("client_secret_basic")) return "client_secret_basic";
  if (r && t.includes("client_secret_post")) return "client_secret_post";
  if (t.includes("none")) return "none";
  return r ? "client_secret_post" : "none";
}
function Rh(e4, t, r, s) {
  let { client_id: o, client_secret: a } = t;
  switch (e4) {
    case "client_secret_basic":
      zh(o, a, r);
      return;
    case "client_secret_post":
      wh(o, a, s);
      return;
    case "none":
      Eh(o, s);
      return;
    default:
      throw Error(`Unsupported client authentication method: ${e4}`);
  }
}
function zh(e4, t, r) {
  if (!t) throw Error("client_secret_basic authentication requires a client_secret");
  let s = btoa(`${e4}:${t}`);
  r.set("Authorization", `Basic ${s}`);
}
function wh(e4, t, r) {
  if (r.set("client_id", e4), t) r.set("client_secret", t);
}
function Eh(e4, t) {
  t.set("client_id", e4);
}
function rl(e4) {
  return e4 === "localhost" || e4 === "127.0.0.1" || e4 === "[::1]" || e4 === "::1";
}
function $h(e4, t, r) {
  let s = new URL(String(e4));
  if (s.protocol !== "https:" && !rl(s.hostname) && t?.(s, r) !== true) throw new Xc(s.href);
  return s;
}
function Ph(e4) {
  for (let t of e4 ?? []) {
    let r;
    try {
      r = new URL(t);
    } catch {
      continue;
    }
    if (r.protocol !== "http:" && r.protocol !== "https:") return "native";
    if (rl(r.hostname)) return "native";
  }
  return "web";
}
function Th(e4) {
  let t = e4.clientMetadata;
  return { ...t, grant_types: t.grant_types ?? (e4.redirectUrl === void 0 ? void 0 : ["authorization_code", "refresh_token"]), application_type: t.application_type ?? Ph(t.redirect_uris) };
}
async function Uc(e4) {
  let t = e4 instanceof Response ? e4.status : void 0, r = e4 instanceof Response ? await e4.text() : e4;
  try {
    let s = uJt.parse(JSON.parse(r));
    return bie.fromResponse(s);
  } catch (s) {
    let o = `${t ? `HTTP ${t}: ` : ""}Invalid OAuth error response: ${s}. Raw body: ${r}`;
    return new bie(DY.ServerError, o);
  }
}
async function pJt(e4, t) {
  try {
    return await ai(e4, t);
  } catch (r) {
    if (r instanceof bie) {
      if (r.code === DY.InvalidClient || r.code === DY.UnauthorizedClient) return await e4.invalidateCredentials?.("client"), await e4.invalidateCredentials?.("tokens"), await ai(e4, t);
      else if (r.code === DY.InvalidGrant) return await e4.invalidateCredentials?.("tokens"), await ai(e4, t);
    }
    throw r;
  }
}
function Ch(e4) {
  let { requestedScope: t, resourceMetadata: r, authServerMetadata: s, clientMetadata: o } = e4, a = t || r?.scopes_supported?.join(" ") || o.scope;
  if (a && s?.scopes_supported?.includes("offline_access") && !a.split(" ").includes("offline_access") && o.grant_types?.includes("refresh_token")) a = `${a} offline_access`;
  return a;
}
async function ai(e4, { serverUrl: t, authorizationCode: r, iss: s, scope: o, resourceMetadataUrl: a, fetchFn: i, skipIssuerMetadataValidation: u, forceReauthorization: l }) {
  let d = Th(e4), m = await e4.discoveryState?.(), _, w, I, b, y = a;
  if (!y && m?.resourceMetadataUrl) y = new URL(m.resourceMetadataUrl);
  if (m?.authorizationServerUrl) {
    if (w = m.authorizationServerUrl, _ = m.resourceMetadata, I = m.authorizationServerMetadata ?? await yRn(w, { fetchFn: i, skipIssuerValidation: u }), !_) try {
      _ = await q9o(t, { resourceMetadataUrl: y }, i);
    } catch (L) {
      if (L instanceof TypeError) throw L;
    }
    if (I !== m.authorizationServerMetadata || _ !== m.resourceMetadata) await e4.saveDiscoveryState?.({ authorizationServerUrl: String(w), resourceMetadataUrl: y?.toString(), resourceMetadata: _, authorizationServerMetadata: I });
  } else {
    let L = await Y9o(t, { resourceMetadataUrl: y, fetchFn: i, skipIssuerMetadataValidation: u });
    w = L.authorizationServerUrl, I = L.authorizationServerMetadata, _ = L.resourceMetadata, b = { authorizationServerUrl: String(w), resourceMetadataUrl: y?.toString(), resourceMetadata: _, authorizationServerMetadata: I };
  }
  let p = I?.issuer ?? String(w), h = { issuer: p };
  if (await e4.saveAuthorizationServerUrl?.(p), r !== void 0) {
    let L = m?.authorizationServerMetadata?.issuer ?? m?.authorizationServerUrl;
    if (L === void 0) {
      if (e4.saveDiscoveryState !== void 0) throw new ti("discoveryState was not available on the callback leg; ensure your provider persists discoveryState alongside codeVerifier", p);
      console.warn("[mcp-sdk] OAuthClientProvider does not implement saveDiscoveryState()/discoveryState(); the SEP-2352 callback-leg authorization-server binding cannot be checked. Implement discoveryState (persist alongside codeVerifier) \u2014 see docs/migration/upgrade-to-v2.md \xA7SEP-2352.");
    } else if (!Zc(L, p)) throw new ti(L, p);
  }
  if (b) await e4.saveDiscoveryState?.(b);
  let g = await Ih(t, e4, _);
  if (g) await e4.saveResourceUrl?.(String(g));
  let f = Ch({ requestedScope: o, resourceMetadata: _, authServerMetadata: I, clientMetadata: e4.clientMetadata }), z = await Promise.resolve(e4.clientInformation(h)), q = Lc(z, p, { canPersistStamp: e4.saveClientInformation !== void 0 });
  if (q === void 0 && z?.issuer && e4.saveClientInformation === void 0) throw new ti(z.issuer, p);
  if (q && q.issuer === void 0) q = { ...q, issuer: p }, await e4.saveClientInformation?.(q, h);
  if (!q) {
    if (r !== void 0) throw Error("Existing OAuth client information is required when exchanging an authorization code");
    let L = I?.client_id_metadata_document_supported === true, H = e4.clientMetadataUrl;
    if (H && !kh(H)) throw new bie(DY.InvalidClientMetadata, `clientMetadataUrl must be a valid HTTPS URL with a non-root pathname, got: ${H}`);
    if (L && H) q = { client_id: H, issuer: p }, await e4.saveClientInformation?.(q, h);
    else {
      if (!e4.saveClientInformation) throw Error("OAuth client information must be saveable for dynamic registration");
      q = { ...await Ah(w, { metadata: I, clientMetadata: d, scope: f, fetchFn: i }), issuer: p }, await e4.saveClientInformation(q, h);
    }
  }
  let R = !e4.redirectUrl;
  if (r !== void 0 || R) {
    if (r !== void 0) Ba({ iss: s, expectedIssuer: I?.issuer, issParameterSupported: Ja(I) });
    let L = await jh(e4, w, { metadata: I, resource: g, authorizationCode: r, iss: s, scope: f, fetchFn: i });
    return await e4.saveTokens({ ...L, issuer: p }, h), "AUTHORIZED";
  }
  let S = Lc(await e4.tokens(h), p);
  if (S && S.issuer === void 0) S = { ...S, issuer: p }, await e4.saveTokens(S, h);
  if (S?.refresh_token && !l) try {
    let L = await poi(w, { metadata: I, clientInformation: q, refreshToken: S.refresh_token, resource: g, addClientAuthentication: e4.addClientAuthentication, fetchFn: i, allowInsecureTokenEndpoint: e4.allowInsecureTokenEndpoint });
    return await e4.saveTokens({ ...L, issuer: p }, h), "AUTHORIZED";
  } catch (L) {
    if (L instanceof Xc) throw L;
    if (!(L instanceof bie) || L.code === DY.ServerError) ;
    else throw L;
  }
  let O = e4.state ? await e4.state() : void 0, { authorizationUrl: x, codeVerifier: G } = await uoi(w, { metadata: I, clientInformation: q, state: O, redirectUrl: e4.redirectUrl, scope: f, resource: g });
  return await e4.saveCodeVerifier(G), await e4.redirectToAuthorization(x), "REDIRECT";
}
function kh(e4) {
  if (!e4) return false;
  try {
    let t = new URL(e4);
    return t.protocol === "https:" && t.pathname !== "/";
  } catch {
    return false;
  }
}
async function Ih(e4, t, r) {
  let s = Ii(e4);
  if (t.validateResourceURL) return await t.validateResourceURL(s, r?.resource);
  if (!r) return;
  if (!qi({ requestedResource: s, configuredResource: r.resource })) throw Error(`Protected resource ${r.resource} does not match expected ${s} (or origin)`);
  return new URL(r.resource);
}
function Fgt(e4) {
  let t = e4.headers.get("WWW-Authenticate");
  if (!t) return {};
  let [r, s] = t.split(" ");
  if (r?.toLowerCase() !== "bearer" || !s) return {};
  let o = Ha(e4, "resource_metadata") || void 0, a;
  if (o) try {
    a = new URL(o);
  } catch {
  }
  let i = Ha(e4, "scope") || void 0, u = Ha(e4, "error") || void 0, l = Ha(e4, "error_description") || void 0;
  return { resourceMetadataUrl: a, scope: i, error: u, errorDescription: l };
}
function Ha(e4, t) {
  let r = e4.headers.get("WWW-Authenticate");
  if (!r) return null;
  let s = new RegExp(String.raw`${t}=(?:"([^"]+)"|([^\s,]+))`), o = r.match(s);
  if (o) {
    let a = o[1] || o[2];
    if (a) return a;
  }
  return null;
}
async function q9o(e4, t, r = fetch) {
  let s = await Nh(e4, "oauth-protected-resource", r, { protocolVersion: t?.protocolVersion, metadataUrl: t?.resourceMetadataUrl });
  if (!s || s.status === 404) throw await s?.text?.().catch(() => {
  }), Error("Resource server does not implement OAuth 2.0 Protected Resource Metadata.");
  if (!s.ok) throw await s.text?.().catch(() => {
  }), Error(`HTTP ${s.status} trying to load well-known OAuth protected resource metadata.`);
  return ds.parse(await s.json());
}
async function sl(e4, t, r = fetch) {
  try {
    return await r(e4, { headers: t });
  } catch (s) {
    if (!(s instanceof TypeError) || !Oc) throw s;
    if (t) try {
      return await r(e4, {});
    } catch (o) {
      if (!(o instanceof TypeError)) throw o;
      return;
    }
    return;
  }
}
function qh(e4, t = "", r = {}) {
  if (t.endsWith("/")) t = t.slice(0, -1);
  return r.prependPathname ? `${t}/.well-known/${e4}` : `/.well-known/${e4}${t}`;
}
async function Dc(e4, t, r = fetch) {
  return await sl(e4, { "MCP-Protocol-Version": t }, r);
}
function Oh(e4, t) {
  if (!e4) return true;
  if (t === "/") return false;
  return e4.status >= 400 && e4.status < 500 || e4.status === 502;
}
async function Nh(e4, t, r, s) {
  let o = new URL(e4), a = s?.protocolVersion ?? Jt, i;
  if (s?.metadataUrl) i = new URL(s.metadataUrl);
  else {
    let l = qh(t, o.pathname);
    i = new URL(l, s?.metadataServerUrl ?? o), i.search = o.search;
  }
  let u = await Dc(i, a, r);
  if (!s?.metadataUrl && Oh(u, o.pathname)) u = await Dc(new URL(`/.well-known/${t}`, o), a, r);
  return u;
}
function Mh(e4) {
  let t = typeof e4 === "string" ? new URL(e4) : e4, r = t.pathname !== "/", s = [];
  if (!r) return s.push({ url: new URL("/.well-known/oauth-authorization-server", t.origin), type: "oauth" }, { url: new URL("/.well-known/openid-configuration", t.origin), type: "oidc" }), s;
  let o = t.pathname;
  if (o.endsWith("/")) o = o.slice(0, -1);
  return s.push({ url: new URL(`/.well-known/oauth-authorization-server${o}`, t.origin), type: "oauth" }, { url: new URL(`/.well-known/openid-configuration${o}`, t.origin), type: "oidc" }, { url: new URL(`${o}/.well-known/openid-configuration`, t.origin), type: "oidc" }), s;
}
async function yRn(e4, { fetchFn: t = fetch, protocolVersion: r = Jt, skipIssuerValidation: s = false } = {}) {
  let o = { "MCP-Protocol-Version": r, Accept: "application/json" }, a = Mh(e4);
  for (let { url: i, type: u } of a) {
    let l = await sl(i, o, t);
    if (!l) continue;
    if (!l.ok) {
      if (await l.text?.().catch(() => {
      }), l.status >= 400 && l.status < 500 || l.status === 502) continue;
      throw Error(`HTTP ${l.status} trying to load ${u === "oauth" ? "OAuth" : "OpenID provider"} metadata from ${i}`);
    }
    let d = u === "oauth" ? dJt.parse(await l.json()) : _Rn.parse(await l.json());
    if (!s) {
      let m = typeof e4 === "string" ? e4 : e4.href;
      if (!(d.issuer === m || m.endsWith("/") && d.issuer === m.slice(0, -1))) throw new n4e("metadata", m, d.issuer);
    }
    return d;
  }
}
async function Y9o(e4, t) {
  let r, s;
  try {
    if (r = await q9o(e4, { resourceMetadataUrl: t?.resourceMetadataUrl }, t?.fetchFn), r.authorization_servers && r.authorization_servers.length > 0) s = r.authorization_servers[0];
  } catch (a) {
    if (a instanceof TypeError) throw a;
  }
  if (!s) s = String(new URL("/", e4));
  let o = await yRn(s, { fetchFn: t?.fetchFn, skipIssuerValidation: t?.skipIssuerMetadataValidation });
  return { authorizationServerUrl: s, authorizationServerMetadata: o, resourceMetadata: r };
}
async function uoi(e4, { metadata: t, clientInformation: r, redirectUrl: s, scope: o, state: a, resource: i }) {
  let u;
  if (t) {
    if (u = new URL(t.authorization_endpoint), !t.response_types_supported.includes(si)) throw Error(`Incompatible auth server: does not support response type ${si}`);
    if (t.code_challenge_methods_supported && !t.code_challenge_methods_supported.includes(oi)) throw Error(`Incompatible auth server: does not support code challenge method ${oi}`);
  } else u = new URL("/authorize", e4);
  let l = await (0, import_chunk_6d79247d.Foi)(), { code_verifier: d, code_challenge: m } = l;
  if (u.searchParams.set("response_type", si), u.searchParams.set("client_id", r.client_id), u.searchParams.set("code_challenge", m), u.searchParams.set("code_challenge_method", oi), u.searchParams.set("redirect_uri", String(s)), a) u.searchParams.set("state", a);
  if (o) u.searchParams.set("scope", o);
  if (o?.split(" ").includes("offline_access")) u.searchParams.append("prompt", "consent");
  if (i) u.searchParams.set("resource", i.href);
  return { authorizationUrl: u, codeVerifier: d };
}
function ol(e4, t, r) {
  return new URLSearchParams({ grant_type: "authorization_code", code: e4, code_verifier: t, redirect_uri: String(r) });
}
async function li(e4, { metadata: t, tokenRequestParams: r, clientInformation: s, addClientAuthentication: o, resource: a, fetchFn: i, allowInsecureTokenEndpoint: u }) {
  let l = $h(t?.token_endpoint ?? new URL("/token", e4), u, r.get("grant_type")), d = new Headers({ "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" });
  if (a) r.set("resource", a.href);
  if (o) await o(d, r, l, t);
  else if (s) Rh(bh(s, t?.token_endpoint_auth_methods_supported ?? []), s, d, r);
  let m = await (i ?? fetch)(l, { method: "POST", headers: d, body: r });
  if (!m.ok) throw await Uc(m);
  let _ = await m.json();
  try {
    return cJt.parse(_);
  } catch (w) {
    if (typeof _ === "object" && _ !== null && "error" in _) throw await Uc(JSON.stringify(_));
    throw w;
  }
}
async function foi(e4, { metadata: t, clientInformation: r, authorizationCode: s, iss: o, codeVerifier: a, redirectUri: i, resource: u, addClientAuthentication: l, fetchFn: d }) {
  return Ba({ iss: o, expectedIssuer: t?.issuer, issParameterSupported: Ja(t) }), li(e4, { metadata: t, tokenRequestParams: ol(s, a, i), clientInformation: r, addClientAuthentication: l, resource: u, fetchFn: d });
}
async function poi(e4, { metadata: t, clientInformation: r, refreshToken: s, resource: o, addClientAuthentication: a, fetchFn: i, allowInsecureTokenEndpoint: u }) {
  return { refresh_token: s, ...await li(e4, { metadata: t, tokenRequestParams: new URLSearchParams({ grant_type: "refresh_token", refresh_token: s }), clientInformation: r, addClientAuthentication: a, resource: o, fetchFn: i, allowInsecureTokenEndpoint: u }) };
}
async function jh(e4, t, { metadata: r, resource: s, authorizationCode: o, iss: a, scope: i, fetchFn: u } = {}) {
  if (o !== void 0) Ba({ iss: a, expectedIssuer: r?.issuer, issParameterSupported: Ja(r) });
  let l = i ?? e4.clientMetadata.scope, d;
  if (e4.prepareTokenRequest) d = await e4.prepareTokenRequest(l);
  if (!d) {
    if (!o) throw Error("Either provider.prepareTokenRequest() or authorizationCode is required");
    if (!e4.redirectUrl) throw Error("redirectUrl is required for authorization_code flow");
    d = ol(o, await e4.codeVerifier(), e4.redirectUrl);
  }
  let m = await e4.clientInformation({ issuer: r?.issuer ?? String(t) });
  return li(t, { metadata: r, tokenRequestParams: d, clientInformation: m ?? void 0, addClientAuthentication: e4.addClientAuthentication, resource: s, fetchFn: u, allowInsecureTokenEndpoint: e4.allowInsecureTokenEndpoint });
}
async function Ah(e4, { metadata: t, clientMetadata: r, scope: s, fetchFn: o }) {
  let a;
  if (t) {
    if (!t.registration_endpoint) throw Error("Incompatible auth server: does not support dynamic client registration");
    a = new URL(t.registration_endpoint);
  } else a = new URL("/register", e4);
  let i = { ...r, ...s === void 0 ? {} : { scope: s } }, u = await (o ?? fetch)(a, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(i) });
  if (!u.ok) throw new K9o({ status: u.status, body: await u.text(), submittedMetadata: i });
  return hs.parse(await u.json());
}
var Ka = /* @__PURE__ */ new Set(["tools/list", "prompts/list", "resources/list", "resources/templates/list", "server/discover"]), Lh = class {
  _entries = /* @__PURE__ */ new Map();
  _maxEntries;
  _stamp = 0;
  _cappedSize = 0;
  constructor(e4) {
    this._maxEntries = e4?.maxEntries ?? 512;
  }
  get size() {
    return this._entries.size;
  }
  get(e4) {
    return this._entries.get(ni(e4));
  }
  set(e4, t) {
    let r = ni(e4), s = Ka.has(e4.method), o = !this._entries.has(r);
    if (!s && o && this._maxEntries > 0 && this._cappedSize >= this._maxEntries) {
      for (let i of this._entries.keys()) if (!Ka.has(i.slice(0, i.indexOf("\0")))) {
        this._entries.delete(i), this._cappedSize--;
        break;
      }
    }
    let a = ++this._stamp;
    if (this._entries.set(r, { ...t, stamp: a }), o && !s) this._cappedSize++;
    return a;
  }
  delete(e4) {
    if (this._entries.delete(ni(e4)) && !Ka.has(e4.method)) this._cappedSize--;
  }
  evict(e4) {
    let t = `${e4}\0`, r = Ka.has(e4);
    for (let s of this._entries.keys()) if (s.startsWith(t)) {
      if (this._entries.delete(s), !r) this._cappedSize--;
    }
  }
  clear() {
    this._entries.clear(), this._cappedSize = 0;
  }
};
function ni(e4) {
  return `${e4.method}\0${JSON.stringify([e4.partition ?? "", e4.params ?? ""])}`;
}
function ii(e4, t) {
  return t === void 0 ? e4 : `${e4}\0${t}`;
}
var Uh = 864e5, Dh = class {
  _evictionGeneration = /* @__PURE__ */ new Map();
  _toolIndex;
  _toolOutputValidatorIndex;
  _serverIdentity = "";
  constructor(e4, t, r = () => {
  }, s = "", o = Date.now) {
    this._store = e4, this._isUserSupplied = t, this._reportError = r, this._cachePartition = s, this._now = o;
  }
  now() {
    return this._now();
  }
  setServerIdentity(e4) {
    this._serverIdentity = e4;
  }
  _partitionFor(e4) {
    return JSON.stringify([this._serverIdentity, e4 === "public" ? "" : this._cachePartition]);
  }
  async _probe(e4, t) {
    let r = { method: e4, params: t ?? "" }, s = this._partitionFor("private"), o = await this._store.get({ ...r, partition: s });
    if (o !== void 0) return o;
    let a = this._partitionFor("public");
    if (a === s) return;
    let i = await this._store.get({ ...r, partition: a });
    return i?.scope === "public" ? i : void 0;
  }
  async evict(e4) {
    this._evictionGeneration.set(e4, (this._evictionGeneration.get(e4) ?? 0) + 1), await this._deleteBoth(e4, "");
  }
  async _deleteBoth(e4, t) {
    let r = this._partitionFor("private"), s = this._partitionFor("public");
    try {
      await this._store.delete({ method: e4, params: t, partition: r });
    } catch (o) {
      this._reportError(o);
    }
    if (s !== r) try {
      await this._store.delete({ method: e4, params: t, partition: s });
    } catch (o) {
      this._reportError(o);
    }
  }
  async evictKey(e4, t) {
    let r = ii(e4, t), s = this._evictionGeneration.get(r);
    if (s !== void 0) this._evictionGeneration.set(r, s + 1);
    await this._deleteBoth(e4, t);
  }
  captureGeneration(e4, t) {
    let r = ii(e4, t), s = this._evictionGeneration.get(r) ?? 0;
    return this._evictionGeneration.set(r, s), s;
  }
  async write(e4, t, r, s) {
    if ((this._evictionGeneration.get(ii(e4, s?.params)) ?? 0) !== r) return;
    let o = s?.params ?? "", a = this._partitionFor("private"), i = this._partitionFor("public"), u = (s?.scope ?? "private") === "public" ? i : a;
    try {
      await this._store.set({ method: e4, params: o, partition: u }, { value: Vh(t), expiresAt: s?.expiresAt, scope: s?.scope });
    } catch (l) {
      this._reportError(l);
    }
    if (i !== a) try {
      await this._store.delete({ method: e4, params: o, partition: u === a ? i : a });
    } catch (l) {
      this._reportError(l);
    }
  }
  async read(e4, t) {
    let r = await this._probe(e4, t);
    if (r?.expiresAt === void 0 || !(r.expiresAt > this.now())) return;
    try {
      let s = JSON.parse(r.value);
      if (typeof s !== "object" || s === null || Array.isArray(s)) throw TypeError("cached document is not an object");
      return { value: s };
    } catch (s) {
      this._reportError(s), await this._deleteBoth(e4, t ?? "");
      return;
    }
  }
  resetForReconnect() {
    if (!this._isUserSupplied) this._store.clear();
    this._evictionGeneration.clear(), this._toolIndex = void 0, this._toolOutputValidatorIndex = void 0, this._serverIdentity = "";
  }
  async toolDefinition(e4) {
    let t = await this._probe("tools/list");
    if (t === void 0) {
      this._toolIndex = void 0;
      return;
    }
    if (this._toolIndex?.stamp !== t.stamp) {
      let r = this._decodeListTools(t), s = /* @__PURE__ */ new Map();
      if (r !== void 0) for (let o of r.tools) s.set(o.name, o);
      this._toolIndex = { stamp: t.stamp, byName: s };
    }
    return this._toolIndex.byName.get(e4);
  }
  async outputValidator(e4, t) {
    let r = await this._probe("tools/list");
    if (r === void 0) {
      this._toolOutputValidatorIndex = void 0;
      return;
    }
    let s = this._toolOutputValidatorIndex, o;
    if (s?.stamp !== r.stamp) {
      o = this._decodeListTools(r), s = { stamp: r.stamp, byName: /* @__PURE__ */ new Map(), pending: /* @__PURE__ */ new Set(), whole: String(r.value).includes('"$id"') };
      for (let a of o?.tools ?? []) if (a.outputSchema) s.pending.add(a.name);
    }
    if (s.whole ? s.pending.size > 0 : s.pending.has(e4)) {
      o ??= this._decodeListTools(r);
      for (let a of o?.tools ?? []) if (s.whole || a.name === e4) {
        let i = t(a);
        if (i !== void 0) s.byName.set(a.name, i);
      }
      if (s.whole) s.pending.clear();
      else s.pending.delete(e4);
    }
    return this._toolOutputValidatorIndex = s, s.byName.get(e4);
  }
  _decodeListTools(e4) {
    try {
      let t = JSON.parse(e4.value);
      if (!Array.isArray(t?.tools) || !t.tools.every((r) => r !== null && typeof r === "object")) throw TypeError("cached tools/list document has a malformed tools array");
      return t;
    } catch (t) {
      this._reportError(t);
      return;
    }
  }
};
function Vh(e4) {
  let t;
  try {
    t = JSON.stringify(e4);
  } catch (r) {
    throw TypeError(`cache value is not JSON-serializable: ${r instanceof Error ? r.message : String(r)}`);
  }
  if (typeof t !== "string") throw TypeError("cache value is not JSON-serializable: it has no JSON representation");
  return t;
}
var xh = -32022, Fh = /* @__PURE__ */ new Set([-32001, -32020, -32021]);
function Hh(e4, t) {
  switch (e4.kind) {
    case "result":
      return Kh(e4.result, t);
    case "rpc-error":
      return al(e4, t);
    case "http-error":
      return Gh(e4, t);
    case "network-error":
      return Vc(e4.error, t);
    case "auth-required":
      return { kind: "error", error: e4.error };
    case "closed":
      if (t.transportKind === "stdio") return { kind: "legacy" };
      return Vc(Error("Connection closed during the version negotiation probe"), t);
    case "timeout":
      if (t.transportKind === "stdio") return { kind: "legacy" };
      return { kind: "error", error: new Xa(Ua.RequestTimeout, `Version negotiation probe timed out after ${e4.timeoutMs}ms`, { timeout: e4.timeoutMs }) };
    case "id-mismatch":
    case "malformed":
    case "stream-end":
      return { kind: "legacy" };
  }
}
function Kh(e4, t) {
  let r = et(ka).validateResult("server/discover", e4);
  if (!r.ok) return { kind: "legacy" };
  let s = r.value.supportedVersions, o = t.clientModernVersions.find((a) => s.includes(a));
  if (o !== void 0) return { kind: "modern", version: o, discover: r.value };
  if (t.fallbackAvailable) return { kind: "legacy" };
  return { kind: "error", error: new Ca({ supported: [...s], requested: t.requestedVersion }) };
}
function al(e4, t) {
  let { code: r, message: s, data: o } = e4;
  if (r === xh) {
    let a = nl(o);
    if (a === void 0) return { kind: "legacy" };
    let i = new Ca({ supported: a, requested: Wh(o) ?? t.requestedVersion }, s), u = ys(a), l = t.clientModernVersions.find((d) => u.includes(d));
    if (l !== void 0) return { kind: "corrective", version: l, error: i };
    if (u.length > 0) return { kind: "error", error: i };
    return t.fallbackAvailable ? { kind: "legacy" } : { kind: "error", error: i };
  }
  if (Fh.has(r)) return { kind: "legacy" };
  return { kind: "legacy" };
}
function Gh(e4, t) {
  let r = Yh(e4.body);
  if (r !== void 0) return al(r, t);
  return { kind: "legacy" };
}
function Vc(e4, t) {
  if (t.environment === "browser" && Jh(e4)) return { kind: "legacy" };
  return { kind: "error", error: new Xa(Ua.EraNegotiationFailed, `Version negotiation probe failed: ${Bh(e4)}`, { cause: e4 }) };
}
function Jh(e4) {
  return e4 instanceof TypeError || e4 instanceof Error && e4.name === "TypeError";
}
function Bh(e4) {
  return e4 instanceof Error ? e4.message : String(e4);
}
function nl(e4) {
  if (typeof e4 !== "object" || e4 === null) return;
  let t = e4.supported;
  if (!Array.isArray(t) || t.length === 0 || !t.every((r) => typeof r === "string")) return;
  return t;
}
function Wh(e4) {
  if (typeof e4 !== "object" || e4 === null) return;
  let t = e4.requested;
  return typeof t === "string" ? t : void 0;
}
function Yh(e4) {
  if (e4 === void 0 || e4 === "") return;
  let t;
  try {
    t = JSON.parse(e4);
  } catch {
    return;
  }
  if (typeof t !== "object" || t === null) return;
  let r = t.error;
  if (typeof r !== "object" || r === null) return;
  let { code: s, message: o, data: a } = r;
  if (typeof s !== "number") return;
  return { code: s, message: typeof o === "string" ? o : "", data: a };
}
var Xh = "legacy";
function Zh(e4, t) {
  let r = e4?.mode ?? Xh;
  if (r === "legacy") return { kind: "legacy" };
  let s = e4?.probe ?? {};
  if (typeof r === "object") {
    if (!tt(r.pin)) throw TypeError(`versionNegotiation: { pin: '${r.pin}' } is not a modern protocol revision \u2014 pinning is for 2026-07-28 and later; omit versionNegotiation (or use mode: 'legacy') for 2025-era servers.`);
    return { kind: "pin", version: r.pin, probe: s };
  }
  let o = t ? ys(t) : [];
  return { kind: "auto", modernVersions: o.length > 0 ? o : [...In], fallbackAvailable: t ? qn(t).length > 0 : true, probe: s };
}
function xc() {
  let e4 = globalThis;
  return e4.window !== void 0 && e4.document !== void 0 ? "browser" : "node";
}
function Fc(e4) {
  return "stderr" in e4 && "pid" in e4 ? "stdio" : "http";
}
var Qh = class e3 {
  _pending;
  _probeCounter = 0;
  _transportKind;
  _issuedIds = /* @__PURE__ */ new Set();
  _errorSinceSend;
  _savedOnMessage;
  _savedOnError;
  _savedOnClose;
  _closeDelivered = false;
  constructor(t) {
    this._transport = t, this._savedOnMessage = t.onmessage, this._savedOnError = t.onerror, this._savedOnClose = t.onclose;
  }
  static async open(t, r) {
    let s = new e3(t);
    s._transportKind = r, t.onmessage = (o) => {
      let a = s._pending;
      if (a !== void 0 && (e4e(o) || t4e(o)) && o.id === a.id) {
        if (s._pending = void 0, e4e(o)) a.resolve({ kind: "response", result: o.result });
        else a.resolve({ kind: "response", error: o.error });
        return;
      }
      if (a !== void 0 && s._transportKind === "http" && (e4e(o) || t4e(o)) && !s._issuedIds.has(o.id)) {
        s._pending = void 0;
        let i = Hc(JSON.stringify(o.id)), u = Error(`server/discover probe reply did not echo the request id (expected ${JSON.stringify(a.id)}, got ${i}) \u2014 treating the server as pre-2026-07-28`);
        u.name = "McpProbeIdMismatchError", s._savedOnError?.(u), a.resolve({ kind: "id-mismatch" });
        return;
      }
    }, t.onerror = (o) => {
      if (s._pending !== void 0 && s._errorSinceSend === void 0) s._errorSinceSend = o;
      let a = s._pending;
      if (a !== void 0 && s._transportKind === "http" && Kc(o)) setTimeout(() => {
        if (s._pending !== a) return;
        s._pending = void 0;
        let i = Error(`server/discover probe reply failed JSON-RPC message decoding (${Hc(o instanceof Error ? o.message : String(o))}) \u2014 treating the server as pre-2026-07-28`);
        i.name = "McpProbeMalformedReplyError", s._savedOnError?.(i), a.resolve({ kind: "malformed" });
      }, 0);
      s._savedOnError?.(o);
    }, t.onclose = () => {
      let o = s._pending;
      if (o !== void 0) s._pending = void 0, o.resolve({ kind: "closed" });
      s._closeDelivered = true, s._savedOnClose?.();
    };
    try {
      await t.start();
    } catch (o) {
      throw s.detach(), o;
    }
    return s;
  }
  async exchange(t, r) {
    let s = `server-discover-probe-${++this._probeCounter}`;
    return this._issuedIds.add(s), this._errorSinceSend = void 0, new Promise((o) => {
      let a = false, i = (l) => {
        if (a) return;
        if (a = true, clearTimeout(u), this._pending?.id === s) this._pending = void 0;
        o(l);
      }, u = setTimeout(() => i({ kind: "timeout" }), r);
      this._pending = { id: s, resolve: i }, this._transport.send(t(s), { onRequestStreamEnd: () => {
        setTimeout(() => {
          let l = this._errorSinceSend;
          if (l !== void 0 && !Kc(l)) {
            i({ kind: "send-error", error: l instanceof Error ? l : Error(String(l)) });
            return;
          }
          i({ kind: "stream-end" });
        }, 0);
      } }).catch((l) => i({ kind: "send-error", error: l }));
    });
  }
  detach() {
    if (this._pending = void 0, this._transport.onmessage = this._savedOnMessage, this._transport.onerror = this._savedOnError, this._closeDelivered && this._savedOnClose !== void 0) {
      let t = this._savedOnClose, r = this._transport, s = false, o = () => {
        if (!s) {
          s = true;
          return;
        }
        t();
      };
      r.onclose = o, ci.set(r, () => {
        if (r.onclose === o) r.onclose = t;
      });
    } else this._transport.onclose = this._savedOnClose;
  }
  release() {
    this.detach();
    let t = this._transport, r = t.start, s = true;
    t.start = async function() {
      if (s) {
        s = false, t.start = r;
        return;
      }
      return r.call(t);
    };
  }
}, ci = /* @__PURE__ */ new WeakMap();
function Hc(e4) {
  let t = String(e4);
  if (t.length <= 200) return t;
  let r = (t.charCodeAt(199) & 64512) === 55296 ? 199 : 200;
  return `${t.slice(0, r)}\u2026 [truncated]`;
}
function Kc(e4) {
  if (e4 instanceof SyntaxError) return true;
  return typeof e4 === "object" && e4 !== null && (e4.name === "ZodError" || Array.isArray(e4.issues));
}
function Gc(e4) {
  let t = ci.get(e4);
  ci.delete(e4), t?.();
}
function em(e4, t, r, s) {
  return { jsonrpc: "2.0", id: e4, method: "server/discover", params: { _meta: et(t).outboundEnvelope({ protocolVersion: t, clientInfo: r, clientCapabilities: s }) } };
}
function tm(e4, t) {
  switch (e4.kind) {
    case "response":
      return e4.error === void 0 ? { kind: "result", result: e4.result } : { kind: "rpc-error", ...e4.error };
    case "send-error": {
      let r = e4.error;
      if (r instanceof PO) {
        let s = r.data?.text;
        return { kind: "http-error", status: r.data.status, body: typeof s === "string" ? s : void 0 };
      }
      if (r instanceof YL || r instanceof Error && r.name === "UnauthorizedError") return { kind: "auth-required", error: r };
      return { kind: "network-error", error: r };
    }
    case "closed":
      return { kind: "closed" };
    case "id-mismatch":
      return { kind: "id-mismatch" };
    case "malformed":
      return { kind: "malformed" };
    case "stream-end":
      return { kind: "stream-end" };
    case "timeout":
      return { kind: "timeout", timeoutMs: t };
  }
}
async function il(e4, t) {
  let r = e4.probe.timeoutMs ?? t.defaultTimeoutMs, s = Math.max(0, e4.probe.maxRetries ?? 0), o = e4.kind === "pin" ? [e4.version] : e4.modernVersions, a = e4.kind === "auto" && e4.fallbackAvailable, i = await Qh.open(t.transport, t.transportKind), u = async () => {
    let d = o[0], m = false, _ = s;
    for (; ; ) {
      let w = await i.exchange((y) => em(y, d, t.clientInfo, t.capabilities), r);
      if (w.kind === "timeout" && _ > 0) {
        _--;
        continue;
      }
      let I = tm(w, r);
      if (I.kind === "timeout") t.transport._anthropicProbeTimedOut = true;
      let b = Hh(I, { clientModernVersions: o, requestedVersion: d, fallbackAvailable: a, environment: t.environment, transportKind: t.transportKind });
      switch (b.kind) {
        case "modern":
          return { era: "modern", version: b.version, discover: b.discover };
        case "corrective":
          if (m) throw b.error;
          m = true, d = b.version;
          continue;
        case "legacy": {
          if (I.kind === "id-mismatch" || I.kind === "malformed" || I.kind === "stream-end") t.transport._anthropicProbeLegacyEvidence = I.kind;
          let y = I.kind === "closed" ? "the connection closed during the server/discover probe" : void 0;
          if (e4.kind === "pin") throw new Xa(Ua.EraNegotiationFailed, y === void 0 ? `Version negotiation failed: the server did not offer pinned protocol version ${e4.version} via server/discover (no fallback in pin mode)` : `Version negotiation failed: ${y} before the server offered pinned protocol version ${e4.version} (no fallback in pin mode)`);
          if (!e4.fallbackAvailable) throw new Xa(Ua.EraNegotiationFailed, y === void 0 ? "Version negotiation failed: the server gave no modern evidence and this client supports no pre-2026-07-28 protocol version to fall back to" : `Version negotiation failed: ${y} and this client supports no pre-2026-07-28 protocol version to fall back to`);
          if (y !== void 0 && t.disposableProbe !== true) throw new Xa(Ua.EraNegotiationFailed, `Version negotiation failed: ${y} (this transport probed in place \u2014 the disposable sibling probe requires the SDK's base StdioClientTransport)`);
          return { era: "legacy" };
        }
        case "error":
          throw b.error;
      }
    }
  }, l;
  try {
    l = await u();
  } catch (d) {
    throw i.detach(), d;
  }
  return i.release(), l;
}
function rm(e4) {
  let t = Object.getPrototypeOf(e4);
  if (t === null || !Object.prototype.hasOwnProperty.call(t, "_dispose")) return;
  let r = e4._serverParams;
  return typeof r === "object" && r !== null && typeof r.command === "string" ? r : void 0;
}
async function sm(e4, t, r, s) {
  let a = new t.constructor({ ...r, stderr: "ignore" }), i = t.close, u = false, l, d = new Promise((_, w) => {
    l = () => w(Jc());
  });
  t.close = async function() {
    return u = true, l?.(), i.call(t);
  };
  let m;
  try {
    let _ = il(e4, { ...s, transport: a, transportKind: "stdio", disposableProbe: true });
    _.catch(() => {
    }), m = await Promise.race([_, d]);
  } finally {
    await om(a), t.close = i;
  }
  if (u) throw Jc();
  return m;
}
function Jc() {
  return new Xa(Ua.EraNegotiationFailed, "Version negotiation failed: the transport was closed during the server/discover probe");
}
async function om(e4) {
  try {
    let t = e4._dispose;
    await (typeof t === "function" ? t.call(e4) : e4.close());
  } catch {
  }
}
function Bc(e4) {
  let t = e4._meta?.[qtt];
  return lc.Implementation(t) ? t : void 0;
}
function Ga(e4, t) {
  if (!e4 || t === null || typeof t !== "object") return;
  if (e4.type === "object" && e4.properties && typeof e4.properties === "object") {
    let r = t, s = e4.properties;
    for (let o of Object.keys(s)) {
      let a = s[o];
      if (r[o] === void 0 && Object.prototype.hasOwnProperty.call(a, "default")) r[o] = a.default;
      if (r[o] !== void 0) Ga(a, r[o]);
    }
  }
  if (Array.isArray(e4.anyOf)) {
    for (let r of e4.anyOf) if (typeof r !== "boolean") Ga(r, t);
  }
  if (Array.isArray(e4.oneOf)) {
    for (let r of e4.oneOf) if (typeof r !== "boolean") Ga(r, t);
  }
}
function am(e4) {
  if (!e4) return { supportsFormMode: false, supportsUrlMode: false };
  let t = e4.form !== void 0, r = e4.url !== void 0;
  return { supportsFormMode: t || !t && !r, supportsUrlMode: r };
}
function nm(e4) {
  if (typeof e4 === "object" && e4 !== null) {
    if (e4.kind === "legacy" && !("supportedVersions" in e4) && !("discover" in e4)) return e4;
    if (e4.kind === "modern" && Ytt.safeParse(e4.discover).success) return e4;
  }
  throw new Xa(Ua.EraNegotiationFailed, "connect({ prior }): unrecognized prior \u2014 expected { kind: 'modern', discover } or { kind: 'legacy' }");
}
var Wc = { "notifications/tools/list_changed": ["tools/list"], "notifications/prompts/list_changed": ["prompts/list"], "notifications/resources/list_changed": ["resources/list", "resources/templates/list"] }, im = 64, X9o = class extends uc {
  _serverCapabilities;
  _serverVersion;
  _capabilities;
  _instructions;
  _jsonSchemaValidator;
  _cache;
  _defaultCacheTtlMs;
  _listMaxPages;
  _listChangedDebounceTimers = /* @__PURE__ */ new Map();
  _listChangedConfig;
  _enforceStrictCapabilities;
  _versionNegotiation;
  _supportedProtocolVersionsOption;
  _inputRequiredDriverConfig;
  _listenState = /* @__PURE__ */ new Map();
  _nextListenId = 0;
  _autoOpenedSubscription;
  _discoverResult;
  _resetConnectionState() {
    if (this._negotiatedProtocolVersion = void 0, this._serverCapabilities = void 0, this._serverVersion = void 0, this._instructions = void 0, this._discoverResult = void 0, this._autoOpenedSubscription = void 0, this._listenState.size > 0) {
      let e4 = new Xa(Ua.ConnectionClosed, "subscriptions/listen: client reconnected or closed; subscription state from the previous connection was reset");
      for (let t of this._listenState.values()) t.settle({ cause: "remote", error: e4 });
    }
    this._listenState.clear();
    for (let e4 of this._listChangedDebounceTimers.values()) clearTimeout(e4);
    this._listChangedDebounceTimers.clear(), this._cache.resetForReconnect();
  }
  async close() {
    try {
      await super.close();
    } finally {
      this._resetConnectionState();
    }
  }
  constructor(e4, t) {
    super(t);
    if (this._clientInfo = e4, this._capabilities = t?.capabilities ? { ...t.capabilities } : {}, this._jsonSchemaValidator = t?.jsonSchemaValidator ?? new $or(), this._enforceStrictCapabilities = t?.enforceStrictCapabilities ?? false, this._versionNegotiation = t?.versionNegotiation, this._supportedProtocolVersionsOption = t?.supportedProtocolVersions, this._inputRequiredDriverConfig = ac(t?.inputRequired), this._cache = new Dh(t?.responseCacheStore ?? new Lh(), t?.responseCacheStore !== void 0, (r) => this._reportStoreError(r), t?.cachePartition ?? ""), this._defaultCacheTtlMs = t?.defaultCacheTtlMs ?? 0, this._listMaxPages = t?.listMaxPages ?? im, t?.listChanged) this._listChangedConfig = t.listChanged;
  }
  buildContext(e4, t) {
    return e4;
  }
  _shouldDropInbound(e4) {
    if (this._negotiatedProtocolVersion !== void 0 && tt(this._negotiatedProtocolVersion) && Z_e(e4)) return "drop";
  }
  _outboundMetaEnvelope() {
    let e4 = this._negotiatedProtocolVersion;
    if (e4 === void 0) return;
    return this._wireCodec().outboundEnvelope({ protocolVersion: e4, clientInfo: this._clientInfo, clientCapabilities: this._capabilities });
  }
  _resolveNonCompleteResult(e4, t) {
    if (!this._inputRequiredDriverConfig.autoFulfill) return Promise.reject(new Xa(Ua.UnsupportedResultType, `Unsupported result type 'input_required' for ${t.request.method}: multi-round-trip auto-fulfilment is not enabled on this instance \u2014 pass allowInputRequired: true to handle it manually, or enable inputRequired.autoFulfill`, { resultType: "input_required", method: t.request.method }));
    return hc({ getRequestHandler: (r) => this._getRequestHandler(r), buildContext: (r) => this.buildContext(r, void 0), sessionId: this.transport?.sessionId }, this._inputRequiredDriverConfig, e4, t);
  }
  _setupListChangedHandlers(e4) {
    if (e4.tools && this._serverCapabilities?.tools?.listChanged) this._setupListChangedHandler("tools", "notifications/tools/list_changed", e4.tools, async () => (await this.listTools(void 0, { cacheMode: "refresh" })).tools);
    if (e4.prompts && this._serverCapabilities?.prompts?.listChanged) this._setupListChangedHandler("prompts", "notifications/prompts/list_changed", e4.prompts, async () => (await this.listPrompts(void 0, { cacheMode: "refresh" })).prompts);
    if (e4.resources && this._serverCapabilities?.resources?.listChanged) this._setupListChangedHandler("resources", "notifications/resources/list_changed", e4.resources, async () => (await this.listResources(void 0, { cacheMode: "refresh" })).resources);
  }
  registerCapabilities(e4) {
    if (this.transport) throw Error("Cannot register capabilities after connecting to transport");
    this._capabilities = dc(this._capabilities, e4);
  }
  setVersionNegotiation(e4) {
    if (this.transport) throw Error("Cannot configure version negotiation after connecting to transport");
    this._versionNegotiation = e4;
  }
  _wrapHandler(e4, t) {
    if (e4 === "elicitation/create") return async (r, s) => {
      let o = et(this._negotiatedProtocolVersion), a = o.validateRequest("elicitation/create", r);
      if (!a.ok && a.reason === "not-in-era") a = o.validateInputRequest("elicitation/create", r);
      if (!a.ok) throw new ef(a.reason === "not-in-era" ? ld.InternalError : ld.InvalidParams, a.reason === "not-in-era" ? "No wire schema for elicitation/create in the resolved era" : `Invalid elicitation request: ${a.message}`);
      let { params: i } = a.value;
      i.mode = i.mode ?? "form";
      let { supportsFormMode: u, supportsUrlMode: l } = am(this._capabilities.elicitation);
      if (i.mode === "form" && !u) throw new ef(ld.InvalidParams, "Client does not support form-mode elicitation requests");
      if (i.mode === "url" && !l) throw new ef(ld.InvalidParams, "Client does not support URL-mode elicitation requests");
      let d = await t(r, s), m = o.validateResult("elicitation/create", d);
      if (!m.ok && m.reason === "not-in-era") m = o.validateInputResponse("elicitation/create", d);
      if (!m.ok) throw new ef(m.reason === "not-in-era" ? ld.InternalError : ld.InvalidParams, m.reason === "not-in-era" ? "No wire schema for elicitation/create in the resolved era" : `Invalid elicitation result: ${m.message}`);
      let _ = m.value, w = i.mode === "form" ? i.requestedSchema : void 0;
      if (i.mode === "form" && _.action === "accept" && _.content && w && this._capabilities.elicitation?.form?.applyDefaults) try {
        Ga(w, _.content);
      } catch {
      }
      return _;
    };
    if (e4 === "sampling/createMessage") return async (r, s) => {
      let o = et(this._negotiatedProtocolVersion), a = o.validateRequest("sampling/createMessage", r);
      if (!a.ok && a.reason === "not-in-era") a = o.validateInputRequest("sampling/createMessage", r);
      if (!a.ok) throw new ef(a.reason === "not-in-era" ? ld.InternalError : ld.InvalidParams, a.reason === "not-in-era" ? "No wire schema for sampling/createMessage in the resolved era" : `Invalid sampling request: ${a.message}`);
      let { params: i } = a.value, u = await t(r, s), l = Boolean(i.tools || i.toolChoice), d = o.samplingResultVariant(l, u);
      if (!d.ok && d.reason === "not-in-era") d = o.validateInputResponse("sampling/createMessage", u);
      if (!d.ok) throw new ef(d.reason === "not-in-era" ? ld.InternalError : ld.InvalidParams, d.reason === "not-in-era" ? "No result schema for sampling/createMessage in the resolved era" : `Invalid sampling result: ${d.message}`);
      return d.value;
    };
    return t;
  }
  assertCapability(e4, t) {
    if (!this._serverCapabilities?.[e4]) throw new Xa(Ua.CapabilityNotSupported, `Server does not support ${e4} (required for ${t})`);
  }
  async connect(e4, t) {
    if (t?.prior != null) return this._connectFromPrior(e4, nm(t.prior), t);
    let r = Zh(this._versionNegotiation, this._supportedProtocolVersionsOption);
    if (r.kind !== "legacy") return this._connectNegotiated(e4, r, t);
    return this._connectPlainLegacy(e4, t);
  }
  async _connectPlainLegacy(e4, t) {
    if (await super.connect(e4), e4.sessionId !== void 0) {
      let r = this._negotiatedProtocolVersion;
      if (r !== void 0) e4.setProtocolVersion?.(r);
      return;
    }
    this._resetConnectionState(), await this._legacyHandshake(e4, t);
  }
  async _legacyHandshake(e4, t, r = true) {
    let s = qn(this._supportedProtocolVersions);
    try {
      let o = s[0];
      if (o === void 0) throw new Xa(Ua.EraNegotiationFailed, "Cannot run the initialize handshake: supportedProtocolVersions contains no pre-2026-07-28 protocol version");
      let a = await this.request({ method: "initialize", params: { protocolVersion: o, capabilities: this._capabilities, clientInfo: this._clientInfo } }, t);
      if (a === void 0) throw Error(`Server sent invalid initialize result: ${a}`);
      if (!s.includes(a.protocolVersion)) throw Error(`Server's protocol version is not supported: ${a.protocolVersion}`);
      if (this._serverCapabilities = a.capabilities, this._serverVersion = a.serverInfo, this._cache.setServerIdentity(this._deriveServerIdentity(e4)), e4.setProtocolVersion) e4.setProtocolVersion(a.protocolVersion);
      if (this._instructions = a.instructions, await this.notification({ method: "notifications/initialized" }), this._negotiatedProtocolVersion = a.protocolVersion, this._listChangedConfig) this._setupListChangedHandlers(this._listChangedConfig);
    } catch (o) {
      if (r) this.close();
      throw o;
    }
  }
  async _discoverAfterRejectedInitialize(e4, t, r, s) {
    let o = r.kind === "auto" && e4._anthropicProbeTimedOut === true && t instanceof ef, a = o && t.code === ld.UnsupportedProtocolVersion ? nl(t.data) : void 0, i = !o ? void 0 : a === void 0 ? r.modernVersions[0] : r.modernVersions.find((u) => a.includes(u));
    if (i === void 0) throw this.close(), t;
    try {
      this._negotiatedProtocolVersion = i;
      let u = await this.discover({ ...s, timeout: Math.min(3e3, r.probe.timeoutMs ?? s?.timeout ?? vs) });
      if (!u.supportedVersions.includes(i)) throw Error(`the second server/discover does not offer ${i}`);
      return { era: "modern", version: i, discover: u };
    } catch (u) {
      throw e4._anthropicRediscoverError = u, this._negotiatedProtocolVersion = void 0, this.close(), t;
    }
  }
  async _connectNegotiated(e4, t, r) {
    if (e4.sessionId !== void 0) {
      await super.connect(e4);
      let o = this._negotiatedProtocolVersion;
      if (o !== void 0 && e4.setProtocolVersion) e4.setProtocolVersion(o);
      return;
    }
    this._resetConnectionState();
    let s;
    try {
      let o = Fc(e4), a = { clientInfo: this._clientInfo, capabilities: this._capabilities, environment: xc(), defaultTimeoutMs: r?.timeout ?? vs }, i = o === "stdio" ? rm(e4) : void 0;
      s = i === void 0 ? await il(t, { ...a, transport: e4, transportKind: o }) : await sm(t, e4, i, a);
    } catch (o) {
      throw await e4.close().catch(() => {
      }), Gc(e4), o;
    }
    if (Gc(e4), await super.connect(e4), s.era === "legacy") try {
      await this._legacyHandshake(e4, r, false);
      return;
    } catch (o) {
      s = await this._discoverAfterRejectedInitialize(e4, o, t, r);
    }
    if (this._serverCapabilities = s.discover.capabilities, this._serverVersion = Bc(s.discover), this._cache.setServerIdentity(this._deriveServerIdentity(e4)), this._instructions = s.discover.instructions, this._discoverResult = s.discover, this._negotiatedProtocolVersion = s.version, e4.setProtocolVersion) e4.setProtocolVersion(s.version);
    if (this._listChangedConfig) {
      let o = this._listChangedConfig, a = this._serverCapabilities, i = { ...o.tools && a?.tools?.listChanged && { tools: o.tools }, ...o.prompts && a?.prompts?.listChanged && { prompts: o.prompts }, ...o.resources && a?.resources?.listChanged && { resources: o.resources } }, u = true;
      try {
        this._setupListChangedHandlers(i);
      } catch (d) {
        u = false, this.onerror?.(d instanceof Error ? d : Error(String(d)));
      }
      let l = u ? { ...i.tools && { toolsListChanged: true }, ...i.prompts && { promptsListChanged: true }, ...i.resources && { resourcesListChanged: true } } : {};
      if (Object.keys(l).length > 0) {
        let d = new AbortController(), m = () => d.abort(r?.signal?.reason);
        if (r?.signal?.aborted) m();
        r?.signal?.addEventListener("abort", m);
        try {
          this._autoOpenedSubscription = await this.listen(l, { timeout: r?.timeout, signal: d.signal });
        } catch (_) {
          if (r?.signal?.aborted) throw await this.close().catch(() => {
          }), _;
          this.onerror?.(_ instanceof Error ? _ : Error(String(_)));
        } finally {
          r?.signal?.removeEventListener("abort", m);
        }
      }
    }
  }
  async _connectFromPrior(e4, t, r) {
    if (t.kind === "legacy") return this._connectPlainLegacy(e4, r);
    let s = t.discover;
    this._resetConnectionState();
    let o = this._supportedProtocolVersionsOption, a = (o && ys(o).length > 0 ? ys(o) : In).find((i) => s.supportedVersions.includes(i));
    if (a === void 0) throw new Xa(Ua.EraNegotiationFailed, "connect({ prior }) with a modern verdict requires a 2026-07-28+ mutual protocol version; the supplied DiscoverResult and this client's supportedProtocolVersions have no modern overlap. For a server known to be legacy, pass prior: { kind: 'legacy' } to skip the probe and initialize directly, or use versionNegotiation: { mode: 'auto' } to re-probe with legacy fallback.");
    if (await super.connect(e4), this._discoverResult = s, this._serverCapabilities = s.capabilities, this._serverVersion = Bc(s), this._cache.setServerIdentity(this._deriveServerIdentity(e4)), this._instructions = s.instructions, this._negotiatedProtocolVersion = a, e4.setProtocolVersion?.(a), this._listChangedConfig) try {
      this._setupListChangedHandlers(this._listChangedConfig);
    } catch (i) {
      this.onerror?.(i instanceof Error ? i : Error(String(i)));
    }
  }
  getServerCapabilities() {
    return this._serverCapabilities;
  }
  getServerVersion() {
    return this._serverVersion;
  }
  _deriveServerIdentity(e4) {
    let t = this._serverVersion;
    if (t !== void 0) return `${t.name}@${t.version}`;
    return e4.sessionId ?? `anonymous:${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }
  getNegotiatedProtocolVersion() {
    return this._negotiatedProtocolVersion;
  }
  getProtocolEra() {
    let e4 = this._negotiatedProtocolVersion;
    if (e4 === void 0) return;
    return tt(e4) ? "modern" : "legacy";
  }
  getInstructions() {
    return this._instructions;
  }
  getDiscoverResult() {
    return this._discoverResult;
  }
  assertCapabilityForMethod(e4) {
    switch (e4) {
      case "logging/setLevel":
        if (!this._serverCapabilities?.logging) throw new Xa(Ua.CapabilityNotSupported, `Server does not support logging (required for ${e4})`);
        break;
      case "prompts/get":
      case "prompts/list":
        if (!this._serverCapabilities?.prompts) throw new Xa(Ua.CapabilityNotSupported, `Server does not support prompts (required for ${e4})`);
        break;
      case "resources/list":
      case "resources/templates/list":
      case "resources/read":
      case "resources/subscribe":
      case "resources/unsubscribe":
        if (!this._serverCapabilities?.resources) throw new Xa(Ua.CapabilityNotSupported, `Server does not support resources (required for ${e4})`);
        if (e4 === "resources/subscribe" && !this._serverCapabilities.resources.subscribe) throw new Xa(Ua.CapabilityNotSupported, `Server does not support resource subscriptions (required for ${e4})`);
        break;
      case "tools/call":
      case "tools/list":
        if (!this._serverCapabilities?.tools) throw new Xa(Ua.CapabilityNotSupported, `Server does not support tools (required for ${e4})`);
        break;
      case "completion/complete":
        if (!this._serverCapabilities?.completions) throw new Xa(Ua.CapabilityNotSupported, `Server does not support completions (required for ${e4})`);
        break;
      case "initialize":
        break;
      case "server/discover":
        break;
      case "ping":
        break;
    }
  }
  assertNotificationCapability(e4) {
    switch (e4) {
      case "notifications/roots/list_changed":
        if (!this._capabilities.roots?.listChanged) throw new Xa(Ua.CapabilityNotSupported, `Client does not support roots list changed notifications (required for ${e4})`);
        break;
      case "notifications/initialized":
        break;
      case "notifications/cancelled":
        break;
      case "notifications/progress":
        break;
    }
  }
  assertRequestHandlerCapability(e4) {
    switch (e4) {
      case "sampling/createMessage":
        if (!this._capabilities.sampling) throw new Xa(Ua.CapabilityNotSupported, `Client does not support sampling capability (required for ${e4})`);
        break;
      case "elicitation/create":
        if (!this._capabilities.elicitation) throw new Xa(Ua.CapabilityNotSupported, `Client does not support elicitation capability (required for ${e4})`);
        break;
      case "roots/list":
        if (!this._capabilities.roots) throw new Xa(Ua.CapabilityNotSupported, `Client does not support roots capability (required for ${e4})`);
        break;
      case "ping":
        break;
    }
  }
  async ping(e4) {
    return this.request({ method: "ping" }, e4);
  }
  async discover(e4) {
    let t = await this._requestWithSchema({ method: "server/discover" }, Ytt, e4);
    return this._discoverResult = t, t;
  }
  async complete(e4, t) {
    return this.request({ method: "completion/complete", params: e4 }, t);
  }
  async setLoggingLevel(e4, t) {
    return this.request({ method: "logging/setLevel", params: { level: e4 } }, t);
  }
  async getPrompt(e4, t) {
    return this.request({ method: "prompts/get", params: e4 }, t);
  }
  async listPrompts(e4, t) {
    if (!this._serverCapabilities?.prompts && !this._enforceStrictCapabilities) return console.debug("Client.listPrompts() called but server does not advertise prompts capability - returning empty list"), { prompts: [] };
    if (e4?.cursor !== void 0) return this.request({ method: "prompts/list", params: e4 }, t);
    let r = await this._serveFromCache("prompts/list", void 0, t);
    if (r !== void 0) return r;
    return this._listAllPages("prompts/list", e4, t, (s, o) => s.prompts.push(...o.prompts));
  }
  async listResources(e4, t) {
    if (!this._serverCapabilities?.resources && !this._enforceStrictCapabilities) return console.debug("Client.listResources() called but server does not advertise resources capability - returning empty list"), { resources: [] };
    if (e4?.cursor !== void 0) return this.request({ method: "resources/list", params: e4 }, t);
    let r = await this._serveFromCache("resources/list", void 0, t);
    if (r !== void 0) return r;
    return this._listAllPages("resources/list", e4, t, (s, o) => s.resources.push(...o.resources));
  }
  async listResourceTemplates(e4, t) {
    if (!this._serverCapabilities?.resources && !this._enforceStrictCapabilities) return console.debug("Client.listResourceTemplates() called but server does not advertise resources capability - returning empty list"), { resourceTemplates: [] };
    if (e4?.cursor !== void 0) return this.request({ method: "resources/templates/list", params: e4 }, t);
    let r = await this._serveFromCache("resources/templates/list", void 0, t);
    if (r !== void 0) return r;
    return this._listAllPages("resources/templates/list", e4, t, (s, o) => s.resourceTemplates.push(...o.resourceTemplates));
  }
  async _listAllPages(e4, t, r, s, o) {
    let a = r?.cacheMode === "bypass", i = this._cache.captureGeneration(e4), u = await this.request({ method: e4, ...t && { params: { ...t } } }, r), l = u.nextCursor, d = /* @__PURE__ */ new Set(), m = 1;
    while (l !== void 0 && !d.has(l)) {
      if (this._listMaxPages !== 0 && m >= this._listMaxPages) throw new Xa(Ua.ListPaginationExceeded, `${e4}: exceeded listMaxPages (${this._listMaxPages}); server pagination did not terminate`, { method: e4, listMaxPages: this._listMaxPages });
      d.add(l);
      let _ = await this.request({ method: e4, params: { ...t, cursor: l } }, r);
      s(u, _), l = _.nextCursor, m++;
    }
    if (delete u.nextCursor, o?.(u), a) return u;
    return await this._cache.write(e4, u, i, this._freshness(u)), u;
  }
  _freshness(e4, t) {
    let r = e4, s = typeof r.ttlMs === "number" ? r.ttlMs : this._defaultCacheTtlMs, o = r.cacheScope === "public" ? "public" : "private";
    return { expiresAt: this._cache.now() + Math.min(Math.max(0, s), Uh), scope: o, params: t };
  }
  async _serveFromCache(e4, t, r) {
    if (r?.cacheMode === "bypass" || r?.cacheMode === "refresh") return;
    let s = await this._cache.read(e4, t).catch((o) => void this._reportStoreError(o));
    if (s !== void 0) {
      if (r?.signal?.aborted) {
        let o = r.signal.reason;
        throw o instanceof Xa ? o : new Xa(Ua.RequestTimeout, String(o));
      }
      return s.value;
    }
  }
  _reportStoreError(e4) {
    this.onerror?.(e4 instanceof Error ? e4 : Error(String(e4)));
  }
  _compileOutputValidator(e4) {
    if (!e4.outputSchema) return;
    try {
      return { ok: true, validator: this._jsonSchemaValidator.getValidator(e4.outputSchema) };
    } catch (t) {
      return { ok: false, compileError: t };
    }
  }
  async _resolveXMcpHeaderScan(e4, t) {
    let r = t ?? await this._cache.toolDefinition(e4);
    return r === void 0 ? void 0 : Ln(r.inputSchema);
  }
  async readResource(e4, t) {
    let r = await this._serveFromCache("resources/read", e4.uri, t);
    if (r !== void 0) return r;
    let s = this._cache.captureGeneration("resources/read", e4.uri), o = await this.request({ method: "resources/read", params: e4 }, t);
    if (t?.cacheMode !== "bypass") {
      let a = this._freshness(o, e4.uri);
      if (a.expiresAt > this._cache.now()) await this._cache.write("resources/read", o, s, a);
      else if (t?.cacheMode === "refresh") await this._cache.evictKey("resources/read", e4.uri);
    }
    return o;
  }
  async subscribeResource(e4, t) {
    return this.request({ method: "resources/subscribe", params: e4 }, t);
  }
  async unsubscribeResource(e4, t) {
    return this.request({ method: "resources/unsubscribe", params: e4 }, t);
  }
  async listen(e4, t) {
    if (this.transport === void 0) throw new Xa(Ua.NotConnected, "Not connected");
    let r = this._negotiatedProtocolVersion;
    if (r === void 0 || !tt(r)) throw new Xa(Ua.MethodNotSupportedByProtocolVersion, `subscriptions/listen requires a 2026-07-28-era connection (negotiated: ${r ?? "none"}). On a 2025-era connection, change notifications are delivered unsolicited: use ClientOptions.listChanged and resources/subscribe instead.`, { method: "subscriptions/listen", protocolVersion: r });
    if (t?.signal?.aborted) {
      let g = t.signal.reason;
      throw g instanceof Xa ? g : new Xa(Ua.RequestTimeout, String(g));
    }
    let s = new AbortController(), o = `listen:${this._nextListenId++}`, a = "opening", i, u, l, d, m = new Promise((g, f) => {
      l = g, d = f;
    });
    m.catch(() => {
    });
    let _, w = new Promise((g) => {
      _ = g;
    }), I = (g) => {
      if (a === "closed") return;
      let f = a === "opening";
      if (i !== void 0) clearTimeout(i), i = void 0;
      if ("ack" in g) {
        a = "open", l(g.ack);
        return;
      }
      if (a = "closed", u !== void 0) t?.signal?.removeEventListener("abort", u);
      if (this._listenState.delete(o), s.abort(), _(g.cause), f) d(g.error ?? new Xa(Ua.ConnectionClosed, "subscriptions/listen closed before the server acknowledged"));
    }, b = async () => {
      s.abort(), await this.notification({ method: "notifications/cancelled", params: { requestId: o } }).catch(() => {
      });
    }, y = async () => {
      if (a === "closed") return;
      I({ cause: "local" }), await b();
    };
    this._listenState.set(o, { settle: I });
    let p = t?.timeout ?? vs;
    if (i = setTimeout(() => {
      I({ cause: "remote", error: new Xa(Ua.RequestTimeout, "subscriptions/listen ack timed out", { timeout: p }) }), b().catch(() => {
      });
    }, p), t?.signal) {
      let g = t.signal;
      u = () => {
        if (a === "closed") return;
        let f = g.reason;
        I({ cause: "local", error: f instanceof Error ? f : Error(String(f ?? "Aborted")) }), b().catch(() => {
        });
      }, g.addEventListener("abort", u, { once: true });
    }
    let h = { jsonrpc: "2.0", id: o, method: "subscriptions/listen", params: { _meta: { ...this._outboundMetaEnvelope() }, notifications: e4 } };
    try {
      await this.transport.send(h, { requestSignal: s.signal, onRequestStreamEnd: () => I({ cause: "remote", error: Error("subscriptions/listen: stream ended") }) });
    } catch (g) {
      I({ cause: "remote", error: g instanceof Error ? g : Error(String(g)) });
    }
    return { honoredFilter: await m, close: y, closed: w };
  }
  get autoOpenedSubscription() {
    return this._autoOpenedSubscription;
  }
  _onnotification(e4, t) {
    let r = Object.hasOwn(Wc, e4.method) ? Wc[e4.method] : void 0;
    if (e4.method === "notifications/resources/updated") {
      let s = e4.params?.uri;
      if (typeof s === "string") this._cache.evictKey("resources/read", s);
    } else if (r !== void 0) for (let s of r) this._cache.evict(s);
    if (e4.method === "notifications/subscriptions/acknowledged") {
      let s = e4.params?._meta?.[Ur], o = typeof s === "string" ? this._listenState.get(s) : void 0;
      if (o !== void 0) {
        let a = this._wireCodec().validateNotification("notifications/subscriptions/acknowledged", e4);
        o.settle({ ack: a.ok ? a.value.params.notifications : {} });
        return;
      }
    }
    if (e4.method === "notifications/cancelled") {
      let s = e4.params?.requestId, o = typeof s === "string" ? this._listenState.get(s) : void 0;
      if (o !== void 0) {
        o.settle({ cause: "remote", error: Error("subscriptions/listen: server cancelled the subscription") });
        return;
      }
    }
    super._onnotification(e4, t);
  }
  _onresponse(e4) {
    let t = e4.id, r = typeof t === "string" ? this._listenState.get(t) : void 0;
    if (r !== void 0) {
      if (t4e(e4)) r.settle({ cause: "remote", error: ef.fromError(e4.error.code, e4.error.message, e4.error.data) });
      else r.settle({ cause: "graceful", error: new Xa(Ua.ConnectionClosed, "subscriptions/listen: server closed the subscription gracefully before acknowledging") });
      return;
    }
    super._onresponse(e4);
  }
  _onclose() {
    if (this._listenState.size > 0) {
      let e4 = new Xa(Ua.ConnectionClosed, "Connection closed");
      for (let t of this._listenState.values()) t.settle({ cause: "remote", error: e4 });
      this._listenState.clear();
    }
    super._onclose();
  }
  async callTool(e4, t) {
    let r = this.getProtocolEra() === "modern" && xc() !== "browser", s = async () => {
      if (!r) return t;
      let l;
      try {
        l = await this._resolveXMcpHeaderScan(e4.name, t?.toolDefinition);
      } catch (m) {
        this._reportStoreError(m);
      }
      if (!l?.valid || l.declarations.length === 0) return t;
      let d = sc(l.declarations, e4.arguments);
      return Object.keys(d).length === 0 ? t : { ...t, headers: { ...t?.headers, ...d } };
    }, o = t?.toolDefinition === void 0 ? await this._cache.outputValidator(e4.name, (l) => this._compileOutputValidator(l)).catch((l) => void this._reportStoreError(l)) : this._compileOutputValidator(t.toolDefinition), a = () => {
      if (o === void 0 || o.ok) return;
      let l = o.compileError, d = (l instanceof Error ? l.message : String(l)).slice(0, 200);
      throw new ef(ld.InvalidParams, `Tool '${e4.name}' has an invalid outputSchema: ${d}`);
    };
    a();
    let i;
    try {
      i = await this.request({ method: "tools/call", params: e4 }, await s());
    } catch (l) {
      let d = l instanceof ef && l.code === ar;
      if (!r || !d || t?.toolDefinition !== void 0) throw l;
      let m = { signal: t?.signal, timeout: t?.timeout, cacheMode: "refresh" };
      await this._cache.evict("tools/list"), await this.listTools(void 0, m).catch((_) => this._reportStoreError(_)), o = await this._cache.outputValidator(e4.name, (_) => this._compileOutputValidator(_)).catch((_) => void this._reportStoreError(_)), a(), i = await this.request({ method: "tools/call", params: e4 }, await s());
    }
    if (t?.allowTask === true && i.resultType === "task") return i;
    if (t?.allowInputRequired === true && i.resultType === "input_required") return i;
    if (t?.allowUploadRequired === true && i.resultType === "upload_required") return i;
    let u = o !== void 0 && o.ok ? o.validator : void 0;
    if (u) {
      if (i.structuredContent === void 0 && !i.isError) throw new ef(ld.InvalidRequest, `Tool ${e4.name} has an output schema but did not return structured content`);
      if (i.structuredContent !== void 0 && !i.isError) try {
        let l = u(i.structuredContent);
        if (!l.valid) throw new ef(ld.InvalidParams, `Structured content does not match the tool's output schema: ${l.errorMessage}`);
      } catch (l) {
        if (l instanceof ef) throw l;
        throw new ef(ld.InvalidParams, `Failed to validate structured content: ${l instanceof Error ? l.message : String(l)}`);
      }
    }
    return i;
  }
  async listTools(e4, t) {
    if (!this._serverCapabilities?.tools && !this._enforceStrictCapabilities) return console.debug("Client.listTools() called but server does not advertise tools capability - returning empty list"), { tools: [] };
    if (e4?.cursor !== void 0) {
      let s = await this.request({ method: "tools/list", params: e4 }, t);
      return this._excludeInvalidXMcpHeaderTools(s), s;
    }
    let r = await this._serveFromCache("tools/list", void 0, t);
    if (r !== void 0) return r;
    return this._listAllPages("tools/list", e4, t, (s, o) => s.tools.push(...o.tools), (s) => this._excludeInvalidXMcpHeaderTools(s));
  }
  _excludeInvalidXMcpHeaderTools(e4) {
    if (this.getProtocolEra() !== "modern" || !this.transport || Fc(this.transport) === "stdio") return;
    try {
      if (!JSON.stringify(e4.tools).includes("x-mcp-header")) return;
    } catch {
    }
    let t = e4.tools.filter((r) => {
      let s = Ln(r.inputSchema);
      if (!s.valid) return console.warn(`[mcp-sdk] excluding tool '${r.name}' from tools/list: invalid x-mcp-header declaration \u2014 ${s.reason}`), false;
      return true;
    });
    if (t.length !== e4.tools.length) e4.tools = t;
  }
  _setupListChangedHandler(e4, t, r, s) {
    let o = Na(rs, r);
    if (!o.success) throw Error(`Invalid ${e4} listChanged options: ${o.error.message}`);
    if (typeof r.onChanged !== "function") throw TypeError(`Invalid ${e4} listChanged options: onChanged must be a function`);
    let { autoRefresh: a, debounceMs: i } = o.data, { onChanged: u } = r, l = async () => {
      if (!a) {
        u(null, null);
        return;
      }
      try {
        u(null, await s());
      } catch (m) {
        u(m instanceof Error ? m : Error(String(m)), null);
      }
    }, d = () => {
      if (i) {
        let m = this._listChangedDebounceTimers.get(e4);
        if (m) clearTimeout(m);
        let _ = setTimeout(l, i);
        this._listChangedDebounceTimers.set(e4, _);
      } else l();
    };
    this.setNotificationHandler(t, d);
  }
  async sendRootsListChanged() {
    return this.notification({ method: "notifications/roots/list_changed" });
  }
};
var Uor = class extends Error {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.SseError" });
  }
  static [Symbol.hasInstance](e4) {
    return Ue(this, e4);
  }
  static isInstance(e4) {
    if (typeof this !== "function") throw TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
    return Ue(this, e4);
  }
  constructor(e4, t, r) {
    super(`SSE error: ${t}`);
    this.code = e4, this.event = r, Ot(this, new.target);
  }
}, BYr = class {
  _eventSource;
  _endpoint;
  _abortController;
  _url;
  _resourceMetadataUrl;
  _scope;
  _eventSourceInit;
  _requestInit;
  _authProvider;
  _oauthProvider;
  _skipIssuerMetadataValidation;
  _fetch;
  _fetchWithInit;
  _protocolVersion;
  onclose;
  onerror;
  onmessage;
  constructor(e4, t) {
    if (this._url = e4, this._resourceMetadataUrl = void 0, this._scope = void 0, this._eventSourceInit = t?.eventSourceInit, this._requestInit = t?.requestInit, this._skipIssuerMetadataValidation = t?.skipIssuerMetadataValidation, Qc(t?.authProvider)) this._oauthProvider = t.authProvider, this._authProvider = el(t.authProvider, { skipIssuerMetadataValidation: t.skipIssuerMetadataValidation });
    else this._authProvider = t?.authProvider;
    this._fetch = t?.fetch, this._fetchWithInit = fJt(t?.fetch, t?.requestInit);
  }
  _last401Response;
  async _commonHeaders() {
    let e4 = {}, t = await this._authProvider?.token();
    if (t) e4.Authorization = `Bearer ${t}`;
    if (this._protocolVersion) e4["mcp-protocol-version"] = this._protocolVersion;
    let r = _s(this._requestInit?.headers);
    return new Headers({ ...e4, ...r });
  }
  _startOrAuth() {
    let e4 = this?._eventSourceInit?.fetch ?? this._fetch ?? fetch;
    return new Promise((t, r) => {
      this._eventSource = new dr(this._url.href, { ...this._eventSourceInit, fetch: async (s, o) => {
        let a = await this._commonHeaders();
        a.set("Accept", "text/event-stream");
        let i = await e4(s, { ...o, headers: a });
        if (i.status === 401) {
          if (this._last401Response = i, i.headers.has("www-authenticate")) {
            let { resourceMetadataUrl: u, scope: l } = Fgt(i);
            this._resourceMetadataUrl = u, this._scope = l;
          }
        }
        return i;
      } }), this._abortController = new AbortController(), this._eventSource.onerror = (s) => {
        if (s.code === 401 && this._authProvider) {
          if (this._authProvider.onUnauthorized && this._last401Response) {
            let i = this._last401Response;
            this._last401Response = void 0, this._eventSource?.close(), this._authProvider.onUnauthorized({ response: i, serverUrl: this._url, fetchFn: this._fetchWithInit }).then(() => this._startOrAuth().then(t, r), (u) => {
              this.onerror?.(u), r(u);
            });
            return;
          }
          let a = new YL();
          r(a), this.onerror?.(a);
          return;
        }
        let o = new Uor(s.code, s.message, s);
        r(o), this.onerror?.(o);
      }, this._eventSource.onopen = () => {
      }, this._eventSource.addEventListener("endpoint", (s) => {
        let o = s;
        try {
          if (this._endpoint = new URL(o.data, this._url), this._endpoint.origin !== this._url.origin) throw Error(`Endpoint origin does not match connection origin: ${this._endpoint.origin}`);
        } catch (a) {
          r(a), this.onerror?.(a), this.close();
          return;
        }
        t();
      }), this._eventSource.onmessage = (s) => {
        let o = s, a;
        try {
          a = Nt(JSON.parse(o.data));
        } catch (i) {
          this.onerror?.(i);
          return;
        }
        this.onmessage?.(a);
      };
    });
  }
  async start() {
    if (this._eventSource) throw Error("SSEClientTransport already started! If using Client class, note that connect() calls start() automatically.");
    return await this._startOrAuth();
  }
  async finishAuth(e4, t) {
    if (!this._oauthProvider) throw new YL("finishAuth requires an OAuthClientProvider");
    let { authorizationCode: r, iss: s } = await tl(e4, t, this._oauthProvider, this._url, { fetchFn: this._fetchWithInit, resourceMetadataUrl: this._resourceMetadataUrl });
    if (await pJt(this._oauthProvider, { serverUrl: this._url, authorizationCode: r, iss: s, resourceMetadataUrl: this._resourceMetadataUrl, scope: this._scope, fetchFn: this._fetchWithInit, skipIssuerMetadataValidation: this._skipIssuerMetadataValidation }) !== "AUTHORIZED") throw new YL("Failed to authorize");
  }
  async close() {
    this._abortController?.abort(), this._eventSource?.close(), this.onclose?.();
  }
  async send(e4) {
    return this._send(e4, false);
  }
  async _send(e4, t) {
    if (!this._endpoint) throw new Xa(Ua.NotConnected, "Not connected");
    try {
      let r = await this._commonHeaders();
      r.set("content-type", "application/json");
      let s = { ...this._requestInit, method: "POST", headers: r, body: JSON.stringify(e4), signal: this._abortController?.signal }, o = await (this._fetch ?? fetch)(this._endpoint, s);
      if (!o.ok) {
        if (o.status === 401 && this._authProvider) {
          if (o.headers.has("www-authenticate")) {
            let { resourceMetadataUrl: i, scope: u } = Fgt(o);
            this._resourceMetadataUrl = i, this._scope = u;
          }
          if (this._authProvider.onUnauthorized && !t) return await this._authProvider.onUnauthorized({ response: o, serverUrl: this._url, fetchFn: this._fetchWithInit }), await o.text?.().catch(() => {
          }), this._send(e4, true);
          if (await o.text?.().catch(() => {
          }), t) throw new PO(Ua.ClientHttpAuthentication, "Server returned 401 after re-authentication", { status: 401, statusText: o.statusText });
          throw new YL();
        }
        let a = await o.text?.().catch(() => null);
        throw Error(`Error POSTing to endpoint (HTTP ${o.status}): ${a}`);
      }
      await o.text?.().catch(() => {
      });
    } catch (r) {
      throw this.onerror?.(r), r;
    }
  }
  setProtocolVersion(e4) {
    this._protocolVersion = e4;
  }
}, cm = 1, lm = { initialReconnectionDelay: 1e3, maxReconnectionDelay: 3e4, reconnectionDelayGrowFactor: 1.5, maxRetries: 2 }, um = /* @__PURE__ */ new Set(["authorization", "content-type", "mcp-protocol-version", "mcp-method", "mcp-name", "mcp-session-id"]);
function Yc(e4, t) {
  if (typeof AbortSignal.any === "function") return AbortSignal.any([e4, t]);
  let r = new AbortController();
  if (e4.aborted) return r.abort(e4.reason), r.signal;
  if (t.aborted) return r.abort(t.reason), r.signal;
  let s = () => {
    e4.removeEventListener("abort", o), t.removeEventListener("abort", a);
  };
  function o() {
    s(), r.abort(e4.reason);
  }
  function a() {
    s(), r.abort(t.reason);
  }
  return e4.addEventListener("abort", o, { once: true }), t.addEventListener("abort", a, { once: true }), r.signal;
}
var Bor = class {
  _abortController;
  _url;
  _resourceMetadataUrl;
  _scope;
  _requestInit;
  _authProvider;
  _oauthProvider;
  _skipIssuerMetadataValidation;
  _fetch;
  _fetchWithInit;
  _sessionId;
  _reconnectionOptions;
  _protocolVersion;
  _onInsufficientScope;
  _maxStepUpRetries;
  _serverRetryMs;
  _reconnectionScheduler;
  _cancelReconnection;
  onclose;
  onerror;
  onmessage;
  hasPerRequestStream = true;
  _ownAnswerIds = /* @__PURE__ */ new Set();
  _disownForeignAnswer(e4, t) {
    if (!("method" in e4) && this._ownAnswerIds.has(Number(e4.id)) && Number(e4.id) !== t) e4.id = "foreign";
    return e4;
  }
  constructor(e4, t) {
    if (this._url = e4, this._resourceMetadataUrl = void 0, this._scope = void 0, this._requestInit = t?.requestInit, this._skipIssuerMetadataValidation = t?.skipIssuerMetadataValidation, Qc(t?.authProvider)) this._oauthProvider = t.authProvider, this._authProvider = el(t.authProvider, { skipIssuerMetadataValidation: t.skipIssuerMetadataValidation });
    else this._authProvider = t?.authProvider;
    this._fetch = t?.fetch, this._fetchWithInit = fJt(t?.fetch, t?.requestInit), this._sessionId = t?.sessionId, this._protocolVersion = t?.protocolVersion, this._reconnectionOptions = t?.reconnectionOptions ?? lm, this._reconnectionScheduler = t?.reconnectionScheduler, this._onInsufficientScope = t?.onInsufficientScope ?? "reauthorize", this._maxStepUpRetries = Math.max(0, t?.maxStepUpRetries ?? cm);
  }
  async _stepUpAuthorize(e4, t) {
    if (this._onInsufficientScope === "throw") throw new Ac({ requiredScope: e4.scope, resourceMetadataUrl: e4.resourceMetadataUrl, errorDescription: e4.errorDescription });
    if (!this._oauthProvider) throw new Ac({ requiredScope: e4.scope, resourceMetadataUrl: e4.resourceMetadataUrl, errorDescription: e4.errorDescription });
    if (t >= this._maxStepUpRetries) throw new PO(Ua.ClientHttpForbidden, `Server returned 403 insufficient_scope after step-up re-authorization (retry limit ${this._maxStepUpRetries} reached)`, { status: 403, statusText: e4.statusText ?? "Forbidden", text: e4.text });
    if (e4.resourceMetadataUrl) this._resourceMetadataUrl = e4.resourceMetadataUrl;
    let r = await this._oauthProvider.tokens(), s = ri(this._scope, r?.scope, e4.scope);
    this._scope = s;
    let o = yh(s, r?.scope);
    return pJt(this._oauthProvider, { serverUrl: this._url, resourceMetadataUrl: this._resourceMetadataUrl, scope: s, forceReauthorization: o, fetchFn: this._fetchWithInit, skipIssuerMetadataValidation: this._skipIssuerMetadataValidation });
  }
  async _commonHeaders() {
    let e4 = {}, t = await this._authProvider?.token();
    if (t) e4.Authorization = `Bearer ${t}`;
    if (this._sessionId) e4["mcp-session-id"] = this._sessionId;
    if (this._protocolVersion) e4["mcp-protocol-version"] = this._protocolVersion;
    let r = _s(this._requestInit?.headers);
    return new Headers({ ...e4, ...r });
  }
  _applyBodyDerivedHeaders(e4, t) {
    if (Array.isArray(t) || !Z_e(t)) return;
    let r = t.params?._meta?.[Ze];
    if (typeof r !== "string") return;
    e4.set("mcp-protocol-version", r), e4.set("mcp-method", t.method);
    let s = t.params, o = t.method === "resources/read" ? typeof s?.uri === "string" ? s.uri : void 0 : typeof s?.name === "string" ? s.name : void 0;
    if (o !== void 0) e4.set("mcp-name", Oa(o));
    let a = t.method.startsWith("tasks/") && typeof s?.taskId === "string" ? s.taskId : void 0;
    if (a !== void 0) e4.set("mcp-name", Oa(a));
  }
  _isModernEnvelopedRequest(e4) {
    if (Array.isArray(e4) || !Z_e(e4)) return false;
    let t = e4.params?._meta?.[Ze];
    return typeof t === "string" && tt(t);
  }
  async _startOrAuthSse(e4, t = false, r = 0) {
    let { resumptionToken: s, requestSignal: o } = e4, a = () => this._abortController?.signal.aborted === true || o?.aborted === true;
    try {
      let i = await this._commonHeaders(), u = [...i.get("accept")?.split(",").map((_) => _.trim().toLowerCase()) ?? [], "text/event-stream"];
      if (i.set("accept", [...new Set(u)].join(", ")), s) i.set("last-event-id", s);
      let l = this._abortController?.signal, d = o !== void 0 && l !== void 0 ? Yc(l, o) : o ?? l, m = await (this._fetch ?? fetch)(this._url, { ...this._requestInit, method: "GET", headers: i, signal: d });
      if (!m.ok) {
        if (m.status === 401 && this._authProvider) {
          if (m.headers.has("www-authenticate")) {
            let { resourceMetadataUrl: _, scope: w } = Fgt(m);
            this._resourceMetadataUrl = _, this._scope = ri(this._scope, w);
          }
          if (this._authProvider.onUnauthorized && !t) return await this._authProvider.onUnauthorized({ response: m, serverUrl: this._url, fetchFn: this._fetchWithInit }), await m.text?.().catch(() => {
          }), this._startOrAuthSse(e4, true, r);
          if (await m.text?.().catch(() => {
          }), t) throw new PO(Ua.ClientHttpAuthentication, "Server returned 401 after re-authentication", { status: 401, statusText: m.statusText });
          throw new YL();
        }
        if (m.status === 403) {
          let { resourceMetadataUrl: _, scope: w, error: I, errorDescription: b } = Fgt(m);
          if (I === "insufficient_scope") {
            let y = await m.text?.().catch(() => null);
            if (await this._stepUpAuthorize({ scope: w, resourceMetadataUrl: _, errorDescription: b, statusText: m.statusText, text: y }, r) !== "AUTHORIZED") throw new YL();
            return this._startOrAuthSse(e4, t, r + 1);
          }
        }
        if (await m.text?.().catch(() => {
        }), m.status === 405) {
          e4.onRequestStreamEnd?.();
          return;
        }
        throw new PO(Ua.ClientHttpFailedToOpenStream, `Failed to open SSE stream: ${m.statusText}`, { status: m.status, statusText: m.statusText });
      }
      this._handleSseStream(m.body, e4, true);
    } catch (i) {
      if (!a()) this.onerror?.(i);
      throw i;
    }
  }
  _getNextReconnectionDelay(e4) {
    if (this._serverRetryMs !== void 0) return this._serverRetryMs;
    let t = this._reconnectionOptions.initialReconnectionDelay, r = this._reconnectionOptions.reconnectionDelayGrowFactor, s = this._reconnectionOptions.maxReconnectionDelay;
    return Math.min(t * Math.pow(r, e4), s);
  }
  _scheduleReconnection(e4, t = 0) {
    let r = this._reconnectionOptions.maxRetries;
    if (t >= r) {
      this.onerror?.(Error(`Maximum reconnection attempts (${r}) exceeded.`)), e4.onRequestStreamEnd?.();
      return;
    }
    let s = this._getNextReconnectionDelay(t), o = () => {
      if (this._cancelReconnection = void 0, this._abortController?.signal.aborted || e4.requestSignal?.aborted) return;
      this._startOrAuthSse(e4).catch((a) => {
        if (this._abortController?.signal.aborted || e4.requestSignal?.aborted) return;
        this.onerror?.(Error(`Failed to reconnect SSE stream: ${a instanceof Error ? a.message : String(a)}`));
        try {
          this._scheduleReconnection(e4, t + 1);
        } catch (i) {
          this.onerror?.(i instanceof Error ? i : Error(String(i)));
        }
      });
    };
    if (this._reconnectionScheduler) {
      let a = this._reconnectionScheduler(o, s, t);
      this._cancelReconnection = typeof a === "function" ? a : void 0;
    } else {
      let a = setTimeout(o, s);
      this._cancelReconnection = () => clearTimeout(a);
    }
  }
  _handleSseStream(e4, t, r) {
    if (!e4) {
      t.onRequestStreamEnd?.();
      return;
    }
    let { onresumptiontoken: s, replayMessageId: o, requestSignal: a, onRequestStreamEnd: i } = t, u = () => this._abortController?.signal.aborted === true || a?.aborted === true, l, d = false, m = false;
    (async () => {
      try {
        let w = e4.pipeThrough(new TextDecoderStream()).pipeThrough(new ei({ onRetry: (I) => {
          this._serverRetryMs = I;
        } })).getReader();
        while (true) {
          let { value: I, done: b } = await w.read();
          if (b) break;
          if (I.id) l = I.id, d = true, s?.(I.id);
          if (!I.data) continue;
          if (!I.event || I.event === "message") try {
            let y = Nt(JSON.parse(I.data));
            if (e4e(y) || t4e(y)) {
              if (m = true, o !== void 0) y.id = o;
            }
            this.onmessage?.(this._disownForeignAnswer(y, t.ownId));
          } catch (y) {
            this.onerror?.(y);
          }
        }
        if ((r || d) && !m && this._abortController && !u()) this._scheduleReconnection({ resumptionToken: l, onresumptiontoken: s, replayMessageId: o, requestSignal: a, onRequestStreamEnd: i }, 0);
        else if (!u()) i?.();
      } catch (w) {
        if (u()) return;
        if (this.onerror?.(Error(`SSE stream disconnected: ${w}`)), (r || d) && !m && this._abortController && !u()) try {
          this._scheduleReconnection({ resumptionToken: l, onresumptiontoken: s, replayMessageId: o, requestSignal: a, onRequestStreamEnd: i }, 0);
        } catch (I) {
          this.onerror?.(Error(`Failed to reconnect: ${I instanceof Error ? I.message : String(I)}`)), i?.();
        }
        else i?.();
      }
    })();
  }
  async start() {
    if (this._abortController) throw Error("StreamableHTTPClientTransport already started! If using Client class, note that connect() calls start() automatically.");
    this._abortController = new AbortController();
  }
  async finishAuth(e4, t) {
    if (!this._oauthProvider) throw new YL("finishAuth requires an OAuthClientProvider");
    let { authorizationCode: r, iss: s } = await tl(e4, t, this._oauthProvider, this._url, { fetchFn: this._fetchWithInit, resourceMetadataUrl: this._resourceMetadataUrl });
    if (await pJt(this._oauthProvider, { serverUrl: this._url, authorizationCode: r, iss: s, resourceMetadataUrl: this._resourceMetadataUrl, scope: this._scope, fetchFn: this._fetchWithInit, skipIssuerMetadataValidation: this._skipIssuerMetadataValidation }) !== "AUTHORIZED") throw new YL("Failed to authorize");
  }
  async close() {
    try {
      this._cancelReconnection?.();
    } finally {
      this._cancelReconnection = void 0, this._abortController?.abort(), this.onclose?.();
    }
  }
  async send(e4, t) {
    return this._send(e4, t, false);
  }
  async _send(e4, t, r, s = 0) {
    try {
      let { resumptionToken: o, onresumptiontoken: a } = t || {};
      if (o) {
        this._startOrAuthSse({ resumptionToken: o, replayMessageId: Z_e(e4) ? e4.id : void 0, requestSignal: t?.requestSignal }).catch((p) => this.onerror?.(p));
        return;
      }
      let i = await this._commonHeaders();
      this._applyBodyDerivedHeaders(i, e4);
      let u = Array.isArray(e4) ? e4.some((p) => $Yr(p)) : $Yr(e4);
      if (u) i.delete("mcp-session-id");
      if (t?.headers !== void 0) for (let [p, h] of Object.entries(t.headers)) {
        if (um.has(p.toLowerCase())) continue;
        i.set(p, h);
      }
      i.set("content-type", "application/json");
      let l = [...i.get("accept")?.split(",").map((p) => p.trim().toLowerCase()) ?? [], "application/json", "text/event-stream"];
      i.set("accept", [...new Set(l)].join(", "));
      let d = this._abortController?.signal, m = t?.requestSignal !== void 0 && d !== void 0 ? Yc(d, t.requestSignal) : t?.requestSignal ?? d, _ = { ...this._requestInit, method: "POST", headers: i, body: JSON.stringify(e4), signal: m }, w = await (this._fetch ?? fetch)(this._url, _);
      if (u && w.ok) this._sessionId = w.headers.get("mcp-session-id") || void 0;
      if (!w.ok) {
        if (w.status === 401 && this._authProvider) {
          if (w.headers.has("www-authenticate")) {
            let { resourceMetadataUrl: h, scope: g } = Fgt(w);
            this._resourceMetadataUrl = h, this._scope = ri(this._scope, g);
          }
          if (this._authProvider.onUnauthorized && !r) return await this._authProvider.onUnauthorized({ response: w, serverUrl: this._url, fetchFn: this._fetchWithInit }), await w.text?.().catch(() => {
          }), this._send(e4, t, true, s);
          if (await w.text?.().catch(() => {
          }), r) throw new PO(Ua.ClientHttpAuthentication, "Server returned 401 after re-authentication", { status: 401, statusText: w.statusText });
          throw new YL();
        }
        let p = await w.text?.().catch(() => null);
        if (w.status === 403) {
          let { resourceMetadataUrl: h, scope: g, error: f, errorDescription: z } = Fgt(w);
          if (f === "insufficient_scope") {
            if (await this._stepUpAuthorize({ scope: g, resourceMetadataUrl: h, errorDescription: z, statusText: w.statusText, text: p }, s) !== "AUTHORIZED") throw new YL();
            return this._send(e4, t, r, s + 1);
          }
        }
        if (w.status === 400 && typeof p === "string" && this._isModernEnvelopedRequest(e4)) try {
          let h = Nt(JSON.parse(p)), g = (Array.isArray(e4) ? e4 : [e4]).filter((f) => Z_e(f));
          if (t4e(h) && g.some((f) => f.id === h.id)) {
            this.onmessage?.(h);
            return;
          }
        } catch {
        }
        throw new PO(Ua.ClientHttpNotImplemented, `Error POSTing to endpoint: ${p}`, { status: w.status, statusText: w.statusText, text: p });
      }
      if (w.status === 202) {
        if (await w.text?.().catch(() => {
        }), UYr(e4)) this._startOrAuthSse({ resumptionToken: void 0 }).catch((p) => this.onerror?.(p));
        return;
      }
      let I = (Array.isArray(e4) ? e4 : [e4]).some((p) => "method" in p && "id" in p && p.id !== void 0), b = w.headers.get("content-type"), y = mc(b);
      if (I) if (y === "text/event-stream") this._handleSseStream(w.body, { ownId: e4.id, onresumptiontoken: a, requestSignal: t?.requestSignal, onRequestStreamEnd: t?.onRequestStreamEnd }, false);
      else if (y === "application/json") {
        let p = await w.json(), h = Array.isArray(p) ? p.map((g) => Nt(g)) : [Nt(p)];
        for (let g of h) this.onmessage?.(this._disownForeignAnswer(g, e4.id));
      } else throw await w.text?.().catch(() => {
      }), new Xa(Ua.ClientHttpUnexpectedContent, `Unexpected content type: ${b}`, { contentType: b });
      else await w.text?.().catch(() => {
      });
    } catch (o) {
      if (t?.requestSignal?.aborted !== true) this.onerror?.(o);
      throw o;
    }
  }
  get sessionId() {
    return this._sessionId;
  }
  async terminateSession() {
    if (!this._sessionId) return;
    try {
      let e4 = await this._commonHeaders(), t = { ...this._requestInit, method: "DELETE", headers: e4, signal: this._abortController?.signal }, r = await (this._fetch ?? fetch)(this._url, t);
      if (await r.text?.().catch(() => {
      }), !r.ok && r.status !== 405) throw new PO(Ua.ClientHttpFailedToTerminateSession, `Failed to terminate session: ${r.statusText}`, { status: r.status, statusText: r.statusText });
      this._sessionId = void 0;
    } catch (e4) {
      throw this.onerror?.(e4), e4;
    }
  }
  setProtocolVersion(e4) {
    this._protocolVersion = e4;
  }
  get protocolVersion() {
    return this._protocolVersion;
  }
  async resumeStream(e4, t) {
    await this._startOrAuthSse({ resumptionToken: e4, onresumptiontoken: t?.onresumptiontoken });
  }
};
