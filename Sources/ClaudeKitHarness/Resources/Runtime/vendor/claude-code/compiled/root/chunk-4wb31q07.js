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
var chunk_4wb31q07_exports = {};
__export(chunk_4wb31q07_exports, {
  ANa: () => ANa,
  F9r: () => F9r,
  Kei: () => Kei,
  RNa: () => RNa,
  nUe: () => nUe,
  qei: () => qei,
  vrr: () => vrr
});
module.exports = __toCommonJS(chunk_4wb31q07_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_url = require("url");
var n = /* @__PURE__ */ new Set(["localhost", "localhost.localdomain", "localhost4", "localhost4.localdomain4", "localhost6", "localhost6.localdomain6", "ip6-localhost", "ip6-loopback", "ip6-localnet", "ip6-mcastprefix", "ip6-allnodes", "ip6-allrouters", "broadcasthost", "metadata.google.internal", "instance-data.ec2.internal", "host.docker.internal", "gateway.docker.internal", "kubernetes.docker.internal", "vm.docker.internal", "host.containers.internal", "gateway.containers.internal", "host.lima.internal", "host.orb.internal", "localtest.me", "lvh.me", "localho.st", "vcap.me", "traefik.me", "fuf.me", "lacolhost.com", "my.local-ip.co", "localdev.me", "local.gd", "localhost.direct", "ddev.site", "lndo.site", "lcl.host", "kubernetes.default", "kubernetes.default.svc"]), c = /* @__PURE__ */ new Set(["metadata", "instance-data", "kubernetes", "_gateway", "_outbound", "_localdnsstub", "_localdnsproxy"]), S = /* @__PURE__ */ new Set(["docker.for.mac.host.internal", "docker.for.win.host.internal", "host.minikube.internal", "host.rancher-desktop.internal", "host.k3d.internal", "host.internal", "gateway.internal", "orb.local", "kubernetes.default.svc.cluster.local", "crc.testing", "apps-crc.testing", "home.arpa"]), i = [".nip.io", ".sslip.io", ".localtest.me", ".lvh.me", ".vcap.me", ".localho.st", ".traefik.me", ".fuf.me", ".lacolhost.com", ".my.local-ip.co", ".localdev.me", ".local.gd", ".localhost.direct", ".ddev.site", ".lndo.site", ".lcl.host", ".ipv6-literal.net", ".orb.local"], v = [".localhost", ".localhost.localdomain", ...i, ".crc.testing", ".apps-crc.testing", ".mshome.net"], d = [".local", ".localdomain", ".home.arpa", ".internal", ".lan", ".home", ".fritz.box"], p = [".localhost", ".local", ".localdomain", ".home.arpa", ".internal", ...i, ".svc", ".svc.cluster.local", ".cluster.local"], L = [".arpa", ".consul", ".corp", ".default", ".docker", ".example", ".i2p", ".intranet", ".invalid", ".onion", ".private", ".test", ".ts.net", ".xip.io"];
function ANa(e) {
  let t = `.${l(e.trim().toLowerCase()).replace(/\.+$/, "")}`;
  return qei(e) || vrr(e) || [...i, ...d, ...L].some((o) => t.endsWith(o));
}
function nUe(e) {
  let t = l(e.toLowerCase()).replace(/\.+$/, "");
  return n.has(t) || c.has(t) || t === "home.arpa" || p.some((o) => t.endsWith(o));
}
function Kei(e) {
  let t = e.toLowerCase().replace(/\.+$/, "");
  return n.has(t) || t.endsWith(".localhost");
}
function RNa(e) {
  let t = e.toLowerCase().replace(/\.+$/, "");
  return nUe(t) || [...n, ...c, "home.arpa", ...p].some((o) => o.endsWith("." + t));
}
function vrr(e) {
  let t = l(e.trim().toLowerCase()).replace(/\.+$/, "");
  return n.has(t) || S.has(t) || c.has(t) || v.some((o) => t.endsWith(o)) || n.has((0, import_chunk_7cfjrnwy.nt)(t, ".")) || d.some((o) => t.endsWith(o) && n.has(t.slice(0, -o.length))) || g(t);
}
function F9r(e, t) {
  let o = t.trim().toLowerCase().replace(/\.+$/, ""), a = !/[^\x00-\x7f]/.test(o) ? o : /[\u00df\u03c2\u200c\u200d]/.test(o) ? "" : (0, import_url.domainToASCII)(o).replace(/\.+$/, "");
  if (a === "") return true;
  let m = r((0, import_chunk_7cfjrnwy.nt)(a, "."));
  if (m === "") return true;
  let u = r((0, import_chunk_7cfjrnwy.nt)(e, ".")), h = [m, r(a)], f = h.includes(u) || h.includes(u.replace(/-\d+$/, "")), s = e.slice((0, import_chunk_7cfjrnwy.nt)(e, ".").length);
  return e === a || f && (s === "" || d.includes(s) || s.endsWith(".ts.net") && (0, import_chunk_7cfjrnwy.Mt)(s, ".") >= 3);
}
function r(e) {
  return e.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
function qei(e, t = "address") {
  let o = l(e.trim().toLowerCase()).replace(/\.+$/, "");
  if (t === "address" ? nUe(o) : Kei(o)) return true;
  return g(o);
}
function g(e) {
  return /^(?:(?:\d+|0x[0-9a-f]+)\.){1,3}(?:\d+|0x[0-9a-f]+)$/i.test(e) || /^(?:127\.|0\d+\.|0x[0-9a-f]*\.)[0-9a-fx.]*$/i.test(e) || /^0x[0-9a-f]+$/i.test(e) || /^\d{8,}$/.test(e) || /^0+$/.test(e) || /^[0-9a-f:.]+$/i.test(e) && e.includes(":") && (e.includes("::") || (0, import_chunk_7cfjrnwy.Mt)(e, ":") >= 2);
}
function l(e) {
  return e.startsWith("[") && e.endsWith("]") ? e.slice(1, -1) : e;
}
