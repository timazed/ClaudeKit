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
var chunk_akwvpp7y_exports = {};
__export(chunk_akwvpp7y_exports, {
  Koe: () => Koe,
  a2: () => a2,
  cUl: () => cUl,
  o0r: () => o0r,
  pF: () => pF,
  s0r: () => s0r
});
module.exports = __toCommonJS(chunk_akwvpp7y_exports);
var import_chunk_dvkg7v5x = require("/$bunfs/root/chunk-dvkg7v5x.js");
var import_net = require("net");
var g = /* @__PURE__ */ new Set(["metadata.google.internal", "metadata.goog", "metadata", "instance-data", "instance-data.ec2.internal", "ip6-localhost", "ip6-loopback", "localhost.localdomain", "localhost4", "localhost4.localdomain4", "localhost6", "localhost6.localdomain6"]), c = /* @__PURE__ */ new Set(["100.100.100.200", "168.63.129.16", "192.0.0.192"]), p = new Set(["fd00:ec2::254", "fd00:ec2::23", "fd20:ce::254", "fd00:c1::a9fe:a9fe", "fd00:a9fe:a9fe::1"].map((e) => String((0, import_chunk_dvkg7v5x.qee)(e))));
function d(e, n, r, t) {
  return e === 127 || e === 169 && n === 254 || e === 0;
}
function u(e) {
  return f(e) && e[4] === 0 && e[5] === 1;
}
function f(e) {
  return e[0] === 0 && e[1] === 100 && e[2] === 255 && e[3] === 155;
}
function o0r(e) {
  if (!(0, import_net.isIPv6)(e)) return false;
  let n = (0, import_chunk_dvkg7v5x.qee)(e);
  if (n === void 0) return false;
  let t = n.slice(0, 10).every((o) => o === 0) && n[10] === 255 && n[11] === 255, i = f(n) && n.slice(4, 12).every((o) => o === 0);
  return t || i || u(n);
}
function h(e) {
  let n = [];
  if (e[0] === 32 && e[1] === 2) n.push(e.slice(2, 6));
  let r = e.slice(0, 10).every((s) => s === 0), t = r && e[10] === 255 && e[11] === 255, i = r && e[10] === 0 && e[11] === 0, o = f(e) && e.slice(4, 12).every((s) => s === 0), a = (e[8] === 0 || e[8] === 2) && e[9] === 0 && e[10] === 94 && e[11] === 254;
  if (t || i || o || a) n.push(e.slice(12, 16));
  return n;
}
function s0r(e) {
  let n = (0, import_net.isIPv6)(e) ? (0, import_chunk_dvkg7v5x.qee)(e) : void 0;
  if (n === void 0) return;
  let r = n.slice(0, 15).every((t) => t === 0) && (n[15] ?? 0) <= 1;
  return { isLocalUseNat64: u(n), isUnspecifiedOrLoopback: r, addresses: r ? [] : h(n).map((t) => t.join(".")) };
}
function cUl(e) {
  return c.has(e);
}
function pF(e) {
  let n = e.toLowerCase().replace(/^\[|\]$/g, "");
  if (n.endsWith(".")) n = n.slice(0, -1);
  if (n === "" || n === "localhost" || n.endsWith(".localhost")) return true;
  if (g.has(n)) return true;
  if (n.startsWith("instance-data.") && n.endsWith(".compute.internal")) return true;
  if ((0, import_net.isIPv4)(n)) {
    if (c.has(n)) return true;
    let [t = 0, i = 0, o = 0, a = 0] = n.split(".").map(Number);
    return d(t, i, o, a);
  }
  if (!(0, import_net.isIPv6)(n)) return false;
  let r = (0, import_chunk_dvkg7v5x.qee)(n);
  if (r === void 0) return true;
  if (u(r)) return true;
  if (r.every((t) => t === 0)) return true;
  if (r.slice(0, 15).every((t) => t === 0) && r[15] === 1) return true;
  if (p.has(String(r))) return true;
  if (r[0] === 254 && (r[1] ?? 0) >= 128 && (r[1] ?? 0) <= 191) return true;
  return h(r).some((t) => {
    let [i = 0, o = 0, a = 0, s = 0] = t;
    return d(i, o, a, s) || c.has(`${i}.${o}.${a}.${s}`);
  });
}
function Koe(e) {
  if (e.href) return e.href;
  let n = e.host ?? (e.hostname && (e.hostname.includes(":") && !e.hostname.startsWith("[") ? `[${e.hostname}]` : e.hostname) + (e.port ? `:${e.port}` : ""));
  return e.protocol && n ? `${e.protocol}//${n}` : "";
}
function a2(e, n) {
  try {
    let r = new URL(e).origin, t = new URL(n).origin;
    return r !== "null" && r === t;
  } catch {
    return false;
  }
}
