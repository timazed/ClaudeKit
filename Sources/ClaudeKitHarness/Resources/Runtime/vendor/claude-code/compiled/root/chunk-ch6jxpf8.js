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
var chunk_ch6jxpf8_exports = {};
__export(chunk_ch6jxpf8_exports, {
  AKt: () => AKt,
  BKn: () => BKn,
  Bee: () => Bee,
  CMo: () => CMo,
  Cgn: () => Cgn,
  EHs: () => EHs,
  IHr: () => IHr,
  RKt: () => RKt,
  R_: () => R_,
  WKn: () => WKn,
  a1l: () => a1l,
  cL: () => cL,
  dL: () => dL,
  i1l: () => i1l,
  kHs: () => kHs,
  l1l: () => l1l
});
module.exports = __toCommonJS(chunk_ch6jxpf8_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_44yfdc64 = require("/$bunfs/root/chunk-44yfdc64.js");
var import_chunk_nnk8tdzz = require("/$bunfs/root/chunk-nnk8tdzz.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var l = (0, import_chunk_t57w17k7.de)({ isOpen: false }, (e) => {
  e.isOpen = false;
});
function EHs(e) {
  let n = l.isOpen;
  l.isOpen = true;
  try {
    return e();
  } finally {
    l.isOpen = n;
  }
}
function a1l() {
  return l.isOpen;
}
var kHs = ["AWS_PROFILE", "AWS_REGION"], m = null;
function i1l(e) {
  m = e;
}
function AKt() {
  return m?.() ?? {};
}
function S(e) {
  return kHs.some((n) => n === e);
}
function CMo(e) {
  return S(e) ? AKt()[e] : void 0;
}
function Bee(e) {
  return AKt()[e] ?? import_chunk_c203g5kd.s[e];
}
async function BKn(e) {
  let n = dL();
  if (Object.keys(n).length === 0) return {};
  let r = e.split(" "), [i, o] = await Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-95fp8kmf.js"))).then((m2) => (0, import_chunk_w1d7ygsk.rt)(m2.default, 1)), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-n6wpz8d8.js"))).then((m2) => (0, import_chunk_w1d7ygsk.rt)(m2.default, 1))]), u = i.loadConfig ?? i.default?.loadConfig, f = o.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS ? o : o.default, [g, c, O] = await Promise.all([u({ environmentVariableSelector: (a) => a[["AWS_ENDPOINT_URL", ...r.map((p) => p.toUpperCase())].join("_")] || a.AWS_ENDPOINT_URL || void 0, configFileSelector: (a, p) => a.services !== void 0 && p?.[`services.${a.services}`]?.[`${r.map((h) => h.toLowerCase()).join("_")}.endpoint_url`] || a.endpoint_url || void 0, default: void 0 }, n)().catch(() => {
    return;
  }), u(f.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, n)().catch(() => {
    return;
  }), u(f.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, n)().catch(() => {
    return;
  })]);
  return { ...g && { endpoint: g }, ...c !== void 0 && { useFipsEndpoint: c }, ...O !== void 0 && { useDualstackEndpoint: O } };
}
function IHr(e, n) {
  if (n.endpoint === void 0 && Object.keys(dL()).length > 0) e.serviceConfiguredEndpoint = () => Promise.resolve(void 0);
}
async function RKt() {
  let { useFipsEndpoint: e, useDualstackEndpoint: n } = await BKn("STS");
  return { ...e !== void 0 && { useFipsEndpoint: e }, ...n !== void 0 && { useDualstackEndpoint: n } };
}
function dL() {
  let e = AKt().AWS_PROFILE;
  return e === void 0 ? {} : { profile: e };
}
function Cgn(e) {
  {
    let n = [];
    for (let [r, i] of Object.entries(AKt())) if (i !== void 0) n.push([r, i]);
    if (n.length > 0) {
      let r = n.map(([i]) => [i, process.env[i]]);
      for (let [i, o] of n) process.env[i] = o;
      try {
        return e();
      } finally {
        for (let [i, o] of r) if (o === void 0) delete process.env[i];
        else process.env[i] = o;
      }
    }
  }
  return e();
}
var v = null;
function l1l(e) {
  v = e;
}
function E() {
  return v?.() ?? {};
}
function R_(e, n) {
  if ((0, import_chunk_44yfdc64.JJe)().length === 0) return e();
  try {
    (0, import_chunk_44yfdc64.lUl)(E());
  } catch (r) {
    (0, import_chunk_w578pjby.t)(`managed settings' env could not be read, so no variable a person's plugin wrote is read as the organization's: ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "error" });
  }
  return (0, import_chunk_44yfdc64.gce)(e, n);
}
function cL(e, n = {}) {
  return R_(() => (0, import_chunk_nnk8tdzz.Qk)(n.withoutConnectionValues !== true ? () => EHs(() => Cgn(e)) : e, n.keepsRepositoryValue), n.keepsWrite);
}
function WKn(e, n) {
  let r = /* @__PURE__ */ new Set([...(0, import_chunk_nnk8tdzz.xut)(), ...(0, import_chunk_44yfdc64.JJe)()]), i = n ? e.filter((u) => r.has(u)) : [], o = `Missing environment variables: ${e.join(", ")}`;
  return i.length === 0 ? o : `${o}. Withheld because your organization manages this start: ${i.join(", ")}. Project settings env and other plugins don't reach it. Set them in managed settings env, ~/.claude/settings.json or the shell you start Claude Code from.`;
}
