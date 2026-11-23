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
var chunk_y5rgpkqm_exports = {};
__export(chunk_y5rgpkqm_exports, {
  Dba: () => Dba,
  HXn: () => HXn,
  Hba: () => Hba,
  Iba: () => Iba,
  Mba: () => Mba,
  Oba: () => Oba,
  Pve: () => Pve,
  Yzs: () => Yzs,
  o2r: () => o2r
});
module.exports = __toCommonJS(chunk_y5rgpkqm_exports);
var import_chunk_syr33dp2 = require("/$bunfs/root/chunk-syr33dp2.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var Pve = 864e5;
(0, import_chunk_adx6804h.B)();
var d = 2147483647;
var Yzs = 2, u = 64, y = /^(?:[0-9a-f]{40}|[0-9a-f]{64})$/, l = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.E)().int().min(0).max(d)), S = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ side: (0, import_chunk_adx6804h.F)(["device", "cloud"]), generation: l(), tree: (0, import_chunk_adx6804h.n)().regex(y).nullable(), appliedGeneration: l(), mayHaveUnuploadedChanges: (0, import_chunk_adx6804h.P)(), shipping: l().nullable(), appliesOtherSide: (0, import_chunk_adx6804h.P)(), instanceId: (0, import_chunk_adx6804h.n)().regex(import_chunk_syr33dp2.uwe), sequence: (0, import_chunk_adx6804h.E)().int().min(0).max(d) })), m = ["shipped", "shipping", "unchanged", "deferred", "kept_here", "failed", "not_running"], f = (e) => (0, import_chunk_adx6804h.n)().max(e).regex(/^[a-z0-9_]+$/), s = (0, import_chunk_2cbgkbm2.p)(() => f(u)), h = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ v: (0, import_chunk_adx6804h.v)(Yzs), frame: S(), outcome: (0, import_chunk_adx6804h.c)({ kind: (0, import_chunk_adx6804h.F)(m), reason: s().optional() }), ask_id: (0, import_chunk_adx6804h.n)().regex(import_chunk_syr33dp2.uwe).optional() }));
function Mba(e) {
  let r = h().safeParse(e);
  if (!r.success) return null;
  let { v: t, frame: o, outcome: a, ask_id: i } = r.data;
  if (o.side !== "device") return null;
  return { v: t, frame: o, outcome: { kind: a.kind, ...a.reason !== void 0 && { reason: a.reason } }, ...i !== void 0 && { askId: i } };
}
function Hba(e) {
  let r = s().safeParse(e.outcome.reason);
  return { v: e.v, frame: e.frame, outcome: { kind: e.outcome.kind, ...r.success && { reason: r.data } }, ...e.askId !== void 0 && { ask_id: e.askId } };
}
var g = { frame: null, heardAt: null, stale: true };
function HXn() {
  let e = /* @__PURE__ */ new Map(), r = (o) => `${o.source}:${o.name}`, t = (o) => {
    let a = e.get(r(o));
    return a !== void 0 && a.servingEpoch === o.description?.epoch ? a.value : void 0;
  };
  return { of: t, file(o, a) {
    let i = o.description?.epoch;
    if (i !== void 0) e.set(r(o), { servingEpoch: i, value: a(t(o)) });
  } };
}
function Dba() {
  let e = HXn(), r = 0;
  return { peer(t) {
    let o = e.of(t);
    return o === void 0 ? g : { frame: o.frame, heardAt: o.heardAt, stale: o.era < r };
  }, heard(t, o, a) {
    e.file(t, (i) => i === void 0 || i.frame.instanceId !== o.instanceId || o.sequence > i.frame.sequence ? { frame: o, heardAt: a, era: r } : i);
  }, invalidateAll() {
    r += 1;
  } };
}
var _ = /^(bash|powershell|bash\+powershell)(?::(core|desktop))?$/;
function Oba(e) {
  let r = [...e.bash ? ["bash"] : [], ...e.powershell ? ["powershell"] : []];
  if (r.length === 0) return;
  let t = e.powershell?.edition;
  return `${r.join("+")}${t === void 0 ? "" : `:${t}`}`;
}
function o2r(e) {
  let r = e === void 0 ? null : _.exec(e);
  if (r === null) return;
  let t = r[2];
  if (r[1] === "bash") return t === void 0 ? { bash: true, powershell: void 0 } : void 0;
  return { bash: r[1] === "bash+powershell", powershell: { edition: t } };
}
function Iba(e, r) {
  return { bash: e.includes(import_chunk_hn3cwwzt.ke), powershell: e.includes(import_chunk_rb36kwbn.yt) ? { edition: r ?? void 0 } : void 0 };
}
