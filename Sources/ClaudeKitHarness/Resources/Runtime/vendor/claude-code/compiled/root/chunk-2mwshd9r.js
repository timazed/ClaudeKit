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
var chunk_2mwshd9r_exports = {};
__export(chunk_2mwshd9r_exports, {
  $ct: () => $ct,
  AVn: () => AVn,
  Ahn: () => Ahn,
  Bct: () => Bct,
  Bde: () => Bde,
  CVn: () => CVn,
  Chn: () => Chn,
  Cp: () => Cp,
  Cze: () => Cze,
  DOo: () => DOo,
  FOo: () => FOo,
  Gde: () => Gde,
  HOo: () => HOo,
  HPe: () => HPe,
  HVt: () => HVt,
  IOo: () => IOo,
  J0l: () => J0l,
  K0l: () => K0l,
  LOo: () => LOo,
  MOo: () => MOo,
  MPe: () => MPe,
  MVt: () => MVt,
  NOo: () => NOo,
  OOo: () => OOo,
  Phn: () => Phn,
  Q0l: () => Q0l,
  RVn: () => RVn,
  Rhn: () => Rhn,
  Uct: () => Uct,
  Wde: () => Wde,
  X0l: () => X0l,
  Xke: () => Xke,
  Y0l: () => Y0l,
  Yu: () => Yu,
  Z0l: () => Z0l,
  a7i: () => a7i,
  aLl: () => aLl,
  aRt: () => aRt,
  cFe: () => cFe,
  cIs: () => cIs,
  cLl: () => cLl,
  d7i: () => d7i,
  dIs: () => dIs,
  dLl: () => dLl,
  eLl: () => eLl,
  eMr: () => eMr,
  hK: () => hK,
  i7i: () => i7i,
  iLl: () => iLl,
  iRt: () => iRt,
  jde: () => jde,
  l7i: () => l7i,
  lIs: () => lIs,
  lLl: () => lLl,
  lRt: () => lRt,
  mK: () => mK,
  nLl: () => nLl,
  nMr: () => nMr,
  o7i: () => o7i,
  oLl: () => oLl,
  pB: () => pB,
  q0l: () => q0l,
  r7i: () => r7i,
  rLl: () => rLl,
  s7i: () => s7i,
  sLl: () => sLl,
  tLl: () => tLl,
  tMr: () => tMr,
  uFe: () => uFe,
  uLl: () => uLl,
  xVn: () => xVn,
  xhn: () => xhn,
  zhe: () => zhe
});
module.exports = __toCommonJS(chunk_2mwshd9r_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_dw5px5e0 = require("/$bunfs/root/chunk-dw5px5e0.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_f2dee02n = require("/$bunfs/root/chunk-f2dee02n.js");
var import_chunk_epy4sc29 = require("/$bunfs/root/chunk-epy4sc29.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_418mqjww = require("/$bunfs/root/chunk-418mqjww.js");
var import_chunk_prn6030k = require("/$bunfs/root/chunk-prn6030k.js");
var import_chunk_myvyhcm0 = require("/$bunfs/root/chunk-myvyhcm0.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_3f4m74y6 = require("/$bunfs/root/chunk-3f4m74y6.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_path = require("path");
var A = (e) => JSON.stringify(e), X = /* @__PURE__ */ new Set(["api.anthropic.com", "api-staging.anthropic.com"]), Ue = /* @__PURE__ */ new Set([...X, ...import_chunk_ephf358x.Jxt.map((e) => new URL(e).hostname)]);
function iRt(e) {
  return X.has(e);
}
function K0l(e) {
  let r = mK();
  if (!e) {
    if (r.status === "absent") return null;
    return r.status === "rejected" ? { code: r.code, reason: r.reason } : { code: "view_mismatch", reason: "the eager argv scan sees a --sdk-url value commander did not bind" };
  }
  if (r.status === "rejected") return { code: r.code, reason: r.reason };
  if (r.status === "absent" || r.url !== e) return { code: "view_mismatch", reason: "the --sdk-url value commander bound disagrees with the eager argv scan" };
  return null;
}
function $ct(e) {
  let r;
  try {
    r = new URL(e);
  } catch {
    return { code: "unparseable", reason: `could not parse ${A(e)} as a URL` };
  }
  if (Ue.has(r.hostname)) {
    if (r.protocol !== "wss:" && r.protocol !== "https:") return { code: "bad_scheme", reason: `scheme ${A(r.protocol)} is not permitted for host ${A(r.hostname)}; only wss:// and https:// are accepted` };
    return null;
  }
  return { code: "not_allowlisted", reason: `host ${A(r.hostname)} is not an approved Anthropic endpoint` };
}
function mK() {
  let e = (0, import_chunk_f9x2f6cx.QNr)();
  if (e !== void 0) return { status: "ok", url: e };
  let r = (0, import_chunk_dw5px5e0.nY)("--sdk-url"), n = r.filter(Boolean).at(-1);
  if (!n) return { status: "absent" };
  if (new Set(r).size > 1) return { status: "rejected", code: "conflicting", reason: "conflicting --sdk-url occurrences" };
  let t = $ct(n);
  if (t) return { status: "rejected", ...t };
  return { status: "ok", url: n };
}
function Uct(e) {
  if (e.protocol === "wss:") e.protocol = "https:";
  else if (e.protocol === "ws:") e.protocol = "http:";
  return e;
}
var CVn = /* @__PURE__ */ new Map([[import_chunk_qdcbcsg7.Wct, [import_chunk_prn6030k.Xi]], [import_chunk_qdcbcsg7.DVt, [import_chunk_qdcbcsg7.mB]], [import_chunk_qdcbcsg7.jct, [import_chunk_qdcbcsg7.Khe]], [import_chunk_epy4sc29.a8, [import_chunk_epy4sc29.Ll, (0, import_chunk_3f4m74y6.xn)(import_chunk_epy4sc29.oIo), import_chunk_epy4sc29.a8]], [import_chunk_qdcbcsg7.PVn, [import_chunk_qdcbcsg7.Qx]], [import_chunk_qdcbcsg7.aO, [import_chunk_qdcbcsg7.ri]]]), Chn = [...CVn.keys(), import_chunk_qdcbcsg7.Pze];
class J {
  reader = null;
  register(e) {
    let r = this.reader;
    return this.reader = e, r;
  }
}
var T = new J();
function q0l(e) {
  return T.register(e);
}
function r7i() {
  return q("tengu_dapper_dusk");
}
var Le = "bot_protected_tengu_jiggly_tulip";
function OOo() {
  return q(Le);
}
function q(e) {
  let r = T.reader;
  if (!r) return false;
  try {
    let { value: n, source: t, defaultHost: s } = r(e, false);
    return n === true && t === "payload" && s;
  } catch {
    return false;
  }
}
var Ie = "tengu_rosy_elephant";
function lIs() {
  try {
    return T.reader?.(Ie, false).value === true;
  } catch {
    return false;
  }
}
class Q {
  judge = null;
}
var ee = new Q();
function Y0l(e) {
  ee.judge = e;
}
function Bde(e, r) {
  try {
    return ee.judge?.(e, r) ?? false;
  } catch {
    return false;
  }
}
var Cp = "remote-browser", N = "972fb542-4a76-509d-9058-f6b954ee456c", o7i = "browser_save_download", eMr = ["browser_click", "browser_close_file_chooser", "browser_close_window", "browser_drag", "browser_drag_to_offset", "browser_file_upload", "browser_fill_form", "browser_handle_dialog", "browser_hover", "browser_list_downloads", "browser_navigate", "browser_navigate_back", "browser_open_window", "browser_press_and_hold", "browser_press_key", "browser_resize", o7i, "browser_select_option", "browser_snapshot", "browser_tabs", "browser_take_screenshot", "browser_type", "browser_wait_for"], s7i = "tengu_recursive_puddle", D = null, B = (0, import_chunk_t57w17k7.de)({ on: false }, (e) => {
  e.on = false;
}), re = (0, import_chunk_t57w17k7.de)({ allowed: false }, (e) => {
  e.allowed = false;
});
function X0l(e) {
  let r = D;
  return D = e, B.on = false, r;
}
function tMr() {
  let e = D?.(s7i, false) === true;
  if (e) B.on = true;
  return e;
}
function MPe() {
  return re.allowed;
}
function aRt() {
  return tMr() || B.on || re.allowed;
}
var ve = ["/v2/ccr-sessions/", "/v1/code/"], g = ["/v2/session_ingress/shttp/mcp/", "/v2/session_ingress/mcp/ws/", ...ve], Te = [/^\/v2\/ccr-sessions\/[A-Za-z0-9_-]+\/[A-Za-z0-9_-]+\/mcp(?:\/[A-Za-z0-9_-]+)?$/, /^\/v1\/code\/sessions\/[A-Za-z0-9_-]+\/[A-Za-z0-9_-]+\/mcp(?:\/[A-Za-z0-9_-]+)?$/, /^\/v1\/code\/mcp\/[A-Za-z0-9_-]+(?:\/[A-Za-z0-9_-]+)?$/], J0l = "spent";
function i7i() {
  return import_chunk_f2dee02n.Ql.bridgeCarrier ? ["CLAUDE_CODE_SESSION_ACCESS_TOKEN", "SESSION_INGRESS_URL", "CLAUDE_CODE_BRIDGE_PROMPT_SHA256"] : [];
}
function Yu(e) {
  let r = Xke(), n = URL.parse(e);
  if (r === null || n === null) return false;
  if ((n.protocol === "wss:" ? `https://${n.host}` : n.protocol === "ws:" ? `http://${n.host}` : MVt(n)) !== r) return false;
  return g.some((s) => n.pathname.includes(s));
}
function Wde(e, r) {
  if (!("url" in r) || typeof r.url !== "string") return false;
  if (!Yu(r.url)) return false;
  switch (import_chunk_f2dee02n.Ql.bridgeCarrier) {
    case void 0:
      return true;
    case "child":
      return "scope" in r && r.scope === "dynamic" && e === import_chunk_epy4sc29.Ll;
    case "descendant":
      return false;
  }
}
function De(e, r) {
  let n = Pe(e, r);
  return n === "mount" || n === "unfit_hash" && OOo();
}
function Q0l(e) {
  let r = Xke();
  if (r === null) return false;
  let n = m(e, r);
  if (!n) return false;
  let t = HPe.exec(n.pathname)?.[1];
  if (t === void 0) return false;
  if (!import_chunk_f2dee02n.Ql.ownCcrSessionIds.some((u) => (0, import_chunk_t39bs2jr.Un)(u) === (0, import_chunk_t39bs2jr.Un)(t))) return false;
  let s = [...n.searchParams.keys()], o = n.searchParams.getAll("toolbox_mcp_server_id"), i = n.searchParams.get("mcp_server_id"), a = n.searchParams.get("mcp_url");
  return new Set(s).size === s.length && s.every((u) => Rhn.includes(u)) && o.length === 1 && o[0] === import_chunk_qdcbcsg7.Wct && (i === null || le().has(i)) && (a === null || m(a, r) !== null);
}
function Z0l(e) {
  if (!Yu(e)) return false;
  let r;
  try {
    r = new URL(e);
  } catch {
    return false;
  }
  let n = [...r.searchParams.getAll("mcp_server_id"), ...r.searchParams.getAll("toolbox_mcp_server_id")];
  if (n.length === 0) return false;
  let { session: t, cannotClear: s } = ue(r);
  if (s) return true;
  let o = le(), i = t === void 0 ? [] : pe((0, import_chunk_t39bs2jr.Un)(t));
  return n.some((a) => o.has(a) || i.includes(a) || a.toLowerCase() === import_chunk_prn6030k.Xi);
}
function ue(e) {
  let r;
  try {
    r = decodeURIComponent(e.pathname);
  } catch {
    return { session: void 0, cannotClear: true, pathnames: [e.pathname] };
  }
  let n = import_path.posix.normalize(r), t = [e.pathname, n], s;
  for (let o of W) if (s = _(o, t), s !== void 0) break;
  return { session: s, cannotClear: s === void 0 ? O.some((o) => e.pathname.includes(o) || r.includes(o) || n.includes(o)) : s === b && import_chunk_f2dee02n.Ql.ownCcrSessionIds.length === 0, pathnames: t };
}
function le() {
  let e = /* @__PURE__ */ new Set([import_chunk_qdcbcsg7.Wct]);
  for (let r of import_chunk_f2dee02n.Ql.ownCcrSessionIds) for (let n of pe((0, import_chunk_t39bs2jr.Un)(r))) e.add(n);
  return e;
}
function pe(e) {
  return AVn(e, import_chunk_prn6030k.Xi);
}
function AVn(e, r) {
  return [`cse_${e}`, `session_${e}`].map((n) => (0, import_chunk_qdcbcsg7.Ioe)(n, r));
}
var Ne = /^\/v2\/ccr-sessions\/[A-Za-z0-9_-]+\/memory\/mcp$/;
function Ahn(e, r) {
  if (e !== import_chunk_qdcbcsg7.Qx || r.scope !== "dynamic" || (0, import_chunk_qdcbcsg7.Pl)(r) || !("url" in r) || typeof r.url !== "string") return false;
  return a7i(r.url);
}
function a7i(e) {
  if (!Yu(e)) return false;
  let r;
  try {
    r = new URL(e);
  } catch {
    return false;
  }
  if (r.username !== "" || r.password !== "" || r.hash !== "") return false;
  if (Ne.test(r.pathname)) return r.search === "";
  let n = r.searchParams.getAll("toolbox_mcp_server_id"), t = HPe.exec(r.pathname)?.[1];
  return t !== void 0 && n.length === 1 && n[0] === import_chunk_qdcbcsg7.PVn && v(r, import_chunk_qdcbcsg7.PVn, t);
}
function eLl(e) {
  let r = e.scope === "dynamic" && !(0, import_chunk_qdcbcsg7.Pl)(e) && "url" in e && typeof e.url === "string" && Yu(e.url) ? URL.parse(e.url) : null;
  if (r === null) return false;
  let n = we(r), t = fe((0, import_chunk_4smdap7r.M)([...import_chunk_f2dee02n.Ql.ownCcrSessionIds, ...n === void 0 ? [] : [n]]));
  return z(r.pathname, import_chunk_qdcbcsg7.Qx) || he(r, import_chunk_qdcbcsg7.Qx) || Oe(r, import_chunk_qdcbcsg7.PVn) || be(r).some((s) => P(s, t));
}
function tLl(e) {
  if (!("url" in e) || typeof e.url !== "string" || (0, import_chunk_qdcbcsg7.Pl)(e)) return false;
  let r = "headers" in e ? e.headers : void 0, n = Object.entries(typeof r === "object" && r !== null ? r : {}), t = n.flatMap(([s, o]) => h(s) === "xmcpserverid" && typeof o === "string" && o.trim() !== "" ? [o.trim()] : []);
  if ("headersHelper" in e && e.headersHelper) return Yu(e.url);
  return Be(e.url, t, n.flat().filter((s) => typeof s === "string"));
}
function fe(e) {
  return [import_chunk_qdcbcsg7.PVn, ...e.flatMap((r) => {
    let n = (0, import_chunk_t39bs2jr.Un)(r);
    return [`cse_${n}`, `session_${n}`].map((t) => (0, import_chunk_qdcbcsg7.Ioe)(t, import_chunk_qdcbcsg7.Qx));
  })].map(h);
}
function P(e, r, { orItsName: n = true } = {}) {
  if (n && f(e).some((s) => s.replace(Re, "") === import_chunk_qdcbcsg7.Qx)) return true;
  let t = e;
  for (let s = 0; ; s++) {
    if (me(t, r)) return true;
    let o = Se(t);
    if (o === t) return false;
    if (s === 3) return true;
    t = o;
  }
}
function me(e, r) {
  let n = [e, e.replace(/%[0-9a-f]{2}/gi, "")].map(h);
  return r.some((t) => n.some((s) => s.includes(t)));
}
var ne = /[\\\p{Cc}]/u, V = /[%?#\\\s\p{Cc}]/u, te = /^(?:https?|wss?):\/\/(?:[^/?#\\]*@)?[^/?#\\@:]+(?::[^/?#\\@]*)?(?=[/?#\\]|$)/i;
function h(e) {
  return e.toLowerCase().replace(/[^0-9a-z]/g, "");
}
function Be(e, r = [], n = r) {
  if (!Yu(e)) return false;
  if (e.length > 32768) return true;
  let t;
  try {
    t = new URL(e);
  } catch {
    return false;
  }
  if ([e, ...r].some((c) => c.includes("${"))) return true;
  if (z(t.pathname, import_chunk_qdcbcsg7.Qx)) return true;
  let s = [...[...t.searchParams].flat(), ...[t.hash, t.username, t.password].filter((c) => c !== ""), ...n];
  if (s.length > 64 || t.pathname.length + s.join("").length > 8192) return true;
  let o = (0, import_chunk_4smdap7r.M)(s.flatMap(f));
  if (o.some((c) => w(c, _e, import_chunk_qdcbcsg7.Qx)) || y(t, ["mcp_url"]).some((c) => ge(c, t.hostname, import_chunk_qdcbcsg7.Qx))) return true;
  let i = y(t, ["mcp_server_id", "toolbox_mcp_server_id"]), a = [t.pathname, import_path.posix.normalize(t.pathname)], u = _(j, a) ?? _(Y, a), l = _(HPe, a) ?? _(x, a) ?? u, { ownCcrSessionIds: d } = import_chunk_f2dee02n.Ql, S = (0, import_chunk_4smdap7r.M)([...a, ...o].flatMap((c) => O.flatMap((E) => {
    let G = c.indexOf(E), K = G === -1 ? void 0 : /^[A-Za-z0-9_-]+(?=[/?#&;]|$)/.exec(c.slice(G + E.length))?.[0];
    return K === void 0 ? [] : [K];
  })));
  if (S.length > 8) return true;
  let p = fe((0, import_chunk_4smdap7r.M)([...d, ...l === void 0 ? [] : [l], ...S]));
  if ([...o, ...f(t.pathname + t.search + t.hash)].some((c) => me(c, p))) return true;
  if ([...r, ...u === void 0 ? [] : [u]].some((c) => P(c, p)) || t.pathname.split("/").some((c) => P(c, p, { orItsName: false }))) return true;
  let C = l === b && d.length === 0;
  if (r.length > 0 && C) return true;
  if (i.length === 0) return false;
  if (l === void 0 ? O.some((c) => a.some((E) => E.includes(c))) : C) return true;
  return i.some((c) => P(c, p));
}
function y(e, r) {
  let n = r.map(h);
  return [...e.searchParams].filter(([t]) => f(t).some((s) => n.includes(h(s)))).map(([, t]) => t);
}
function _(e, r) {
  for (let n of r) {
    let t = e.exec(n)?.[1];
    if (t !== void 0) return t;
  }
  return;
}
var RVn = ["/v2/ccr-sessions/", "/v1/code/sessions/"], O = [...RVn, "/v2/session_ingress/shttp/mcp/", "/v2/session_ingress/mcp/ws/"], _e = [...O, "/v1/code/local/", "/v1/code/mcp/"];
function ge(e, r, n) {
  return !ke(e, r) && (V.test(e) || w(e, g, n));
}
function he(e, r) {
  return y(e, ["mcp_url"]).some((n) => f(n).some((t) => w(t, _e, r)) || ge(n, e.hostname, r));
}
function H(e) {
  return [se(e), se(e.replace(He, (r, n, t) => r.length === 3 ? r : `	%${n}${t}	`))];
}
function f(e) {
  if (!e.includes("%")) return [e];
  let r = [e], n = [e];
  for (let t = 1; t <= 3; t++) n = (0, import_chunk_4smdap7r.M)(n.flatMap(H)), r.push(...n);
  return (0, import_chunk_4smdap7r.M)(r);
}
var Re = /[\s\p{Cc}\ufffd+]/gu, He = /%[\s\p{Cc}\ufffd+]*([0-9a-f])[\s\p{Cc}\ufffd+]*([0-9a-f])/giu;
function se(e) {
  return e.replace(/(?:%[0-9a-f]{2})+/gi, (r) => new TextDecoder().decode(Uint8Array.from(r.slice(1).split("%"), (n) => parseInt(n, 16))));
}
function w(e, r, n) {
  let t = oe(e);
  if (!t.join("").includes(n)) return false;
  return r.some((s) => {
    let o = oe(s).filter((i) => i !== "");
    return [[...o, n, "mcp"], [...o, "mcp", n], ...o.includes("mcp") ? [[...o, n]] : []].some((i) => Fe(t, i));
  });
}
function oe(e) {
  return e.toLowerCase().split(/[^a-z0-9_\-\s\p{Cc}\ufffd+]+/u).flatMap((r) => [...r.split(/[\s\p{Cc}\ufffd+]+/u), ""]);
}
function Fe(e, r) {
  let n = 0;
  for (let t = 0; t < e.length && n < r.length; t++) {
    let s = r[n] ?? "", o = 0;
    for (let i = t; ; i++) {
      let a = e[i] ?? "";
      if (a === "" || !s.startsWith(a, o)) break;
      if (o += a.length, o === s.length) {
        n++, t = i;
        break;
      }
    }
  }
  return n === r.length;
}
function z(e, r) {
  if (V.test(e) || w(e, g, r)) return true;
  let n = e.toLowerCase();
  return [n, import_path.posix.normalize(n)].some((t) => g.some((s) => {
    let o = t.indexOf(s);
    return o !== -1 && $e(t.slice(o), r);
  }));
}
function ke(e, r) {
  let n = te.exec(e)?.[0];
  if (n === void 0 || ne.test(e) || !URL.canParse(e) || ie(e, r)) return false;
  for (let t = 0; t <= 3; t++) {
    let s = Se(n);
    if (s === n) return true;
    if (ne.test(s) || !te.test(s) || s.toLowerCase().includes(F(r)) || URL.canParse(s) && ie(s, r)) return false;
    n = s;
  }
  return false;
}
function ie(e, r) {
  return [F(r), ""].includes(F(new URL(e).hostname));
}
function F(e) {
  let r = e.length;
  while (e[r - 1] === ".") r--;
  return e.slice(0, r);
}
function $e(e, r) {
  return [e, import_path.posix.normalize(e)].some((n) => {
    let t = n.split("/").filter((o) => o !== ""), s = t.indexOf(r);
    return s !== -1 && t.includes("mcp", s + 1) || t.some((o, i) => o === "mcp" && t[i + 1] === r);
  });
}
function Se(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e.replace(/%[0-7][0-9a-f]/gi, (r) => String.fromCharCode(Number.parseInt(r.slice(1), 16)));
  }
}
var HPe = /^\/v2\/ccr-sessions\/([A-Za-z0-9_-]+)\/mcp$/, x = /^\/v1\/code\/sessions\/([A-Za-z0-9_-]+)\/mcp$/;
function nLl(e) {
  if (V.test(e.pathname) || import_path.posix.normalize(e.pathname) !== e.pathname) return false;
  let r = I(e.pathname);
  if (r === void 0) return false;
  let n = e.searchParams.getAll("toolbox_mcp_server_id");
  if (!n.every((s) => CVn.has(s.toLowerCase()))) return false;
  let t = (HPe.exec(r) ?? x.exec(r))?.[1];
  if (n.length !== 1 || t === void 0) return Te.some((s) => s.test(r));
  return n.every((s) => v(e, s, t));
}
function Ee(e) {
  return `/internal/v2/ccr-sessions/${e}/toolport/`;
}
var Ve = new RegExp(`^${Ee("[A-Za-z0-9_-]+")}mcp$`);
function lRt(e) {
  return Yu(e) && Ve.test(new URL(e).pathname);
}
var ze = new RegExp(`^${Ee("[^/]+")}`);
function Cze(e, r = true) {
  if (!Yu(e)) return false;
  let n;
  try {
    n = import_path.posix.normalize(decodeURIComponent(new URL(e).pathname));
  } catch {
    return r;
  }
  return ze.test(n);
}
var j = /^\/v2\/session_ingress\/shttp\/mcp\/([A-Za-z0-9_-]+)$/, Y = /^\/v2\/session_ingress\/mcp\/ws\/([A-Za-z0-9_-]+)$/, je = /^\/v2\/session_ingress\/(?:shttp\/mcp|mcp\/ws)\/(.+)$/, W = [HPe, x, j, Y], b = "-";
function IOo(e, r, n) {
  let t = m(e, r);
  if (!t) return null;
  let s = HPe.exec(t.pathname), o = Ye(t, r, n);
  if (!s || s[1] !== n || !o) return null;
  return `${r}/v2/ccr-sessions/${n}/mcp?${o}`;
}
var Rhn = ["mcp_url", "mcp_server_id", "toolbox_mcp_server_id"], xVn = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function Ye(e, r, n) {
  let t = [...e.searchParams.keys()];
  if (new Set(t).size !== t.length || t.some((a) => !Rhn.includes(a)) || e.searchParams.get("toolbox_mcp_server_id") !== import_chunk_epy4sc29.a8) return null;
  let s = new URLSearchParams(), o = e.searchParams.get("mcp_url");
  if (o !== null) {
    let a = m(o, r);
    if (!a || a.pathname !== import_chunk_epy4sc29.Dhn || a.search !== "") return null;
    s.set("mcp_url", `${r}${import_chunk_epy4sc29.Dhn}`);
  }
  let i = e.searchParams.get("mcp_server_id");
  if (i !== null) {
    if (!xVn.test(i) || !v(e, import_chunk_epy4sc29.a8, n) && !OOo()) return null;
    s.set("mcp_server_id", i);
  }
  return s.set("toolbox_mcp_server_id", import_chunk_epy4sc29.a8), s.toString();
}
function MVt(e) {
  return e.protocol === "https:" || e.protocol === "http:" ? e.origin : null;
}
function m(e, r) {
  let n;
  try {
    n = new URL(e);
  } catch {
    return null;
  }
  return MVt(n) === r && n.username === "" && n.password === "" && n.hash === "" ? n : null;
}
function Xke() {
  let e = import_chunk_f2dee02n.Ql.atStartup;
  if (!e) return null;
  try {
    return MVt(new URL(e));
  } catch {
    return null;
  }
}
function zhe(e) {
  let r = Xke(), n = r === null ? null : m(e, r);
  if (!n) return false;
  let t = (HPe.exec(n.pathname) ?? x.exec(n.pathname))?.[1];
  return t !== void 0 && import_chunk_f2dee02n.Ql.ownCcrSessionIds.some((s) => (0, import_chunk_t39bs2jr.Un)(s) === (0, import_chunk_t39bs2jr.Un)(t));
}
function MOo(e) {
  let r = Xke();
  return r !== null && De(e, r);
}
function rLl(e) {
  let r = Yu(e) ? URL.parse(e) : null;
  return r !== null && (z(r.pathname, "meta") || he(r, "meta") || Oe(r, import_chunk_epy4sc29.a8));
}
function oLl(e) {
  let r = Xke();
  return r !== null && Pe(e, r) === "unfit_hash";
}
function pB(e) {
  let r = Xke(), n = r === null ? null : m(e, r), t = n ? HPe.exec(n.pathname)?.[1] : void 0;
  if (!n || t === void 0) return null;
  let s = [...n.searchParams.keys()], o = n.searchParams.get("mcp_server_id"), i = n.searchParams.get("toolbox_mcp_server_id");
  if (new Set(s).size !== s.length || s.some((a) => !Rhn.includes(a)) || o === null || !xVn.test(o) || i === null) return null;
  return { sessionSegment: t, mcpServerId: o, toolboxMcpServerId: i, upstreamUrl: n.searchParams.get("mcp_url") ?? void 0 };
}
function xhn(e) {
  return e !== void 0 && $ct(e) === null ? MVt(new URL(e)) : null;
}
var We = "/v1/code/mcp/hearthbot", Ze = /^\/v2\/ccr-sessions\/(?:-|[A-Za-z0-9_-]+)\/hearthbot\/mcp$/;
function HOo(e) {
  if (!Yu(e)) return false;
  let r;
  try {
    r = new URL(e);
  } catch {
    return false;
  }
  return r.username === "" && r.password === "" && r.hash === "" && r.search === "" && (r.pathname === We || Ze.test(r.pathname));
}
var Ge = /^\/v2\/ccr-sessions\/(?:-|[A-Za-z0-9_-]+)\/tasks\/mcp$/;
function sLl(e) {
  let r = Xke(), n = r === null ? null : m(e, r);
  return n !== null && n.search === "" && Ge.test(n.pathname);
}
var Ke = /^\/v2\/ccr-sessions\/(?:-|[A-Za-z0-9_-]+)\/email\/mcp$/;
function iLl(e, r) {
  if (e !== import_chunk_qdcbcsg7.rJe || r.scope !== "dynamic" || (0, import_chunk_qdcbcsg7.Pl)(r) || !("url" in r) || typeof r.url !== "string" || !Yu(r.url)) return false;
  let n;
  try {
    n = new URL(r.url);
  } catch {
    return false;
  }
  return n.username === "" && n.password === "" && n.hash === "" && n.search === "" && Ke.test(n.pathname);
}
var Me = /^\/v2\/ccr-sessions\/[A-Za-z0-9_-]+\/remote-browser\/mcp$/;
function aLl(e) {
  if (!Yu(e)) return false;
  let r;
  try {
    r = new URL(e);
  } catch {
    return false;
  }
  return (r.protocol === "https:" || r.protocol === "http:") && r.username === "" && r.password === "" && r.hash === "" && r.search === "" && Me.test(r.pathname);
}
function l7i(e) {
  if (!MPe() || !zhe(e)) return false;
  let r = new URL(e), n = HPe.exec(r.pathname)?.[1], t = r.searchParams.get("mcp_server_id");
  return n !== void 0 && [...r.searchParams.keys()].length === 2 && r.searchParams.get("toolbox_mcp_server_id") === N && AVn((0, import_chunk_t39bs2jr.Un)(n), Cp).some((s) => s === t);
}
function lLl(e, r) {
  if (!MPe() || !Yu(r)) return false;
  let n = new URL(r), t = y(n, ["mcp_server_id", "toolbox_mcp_server_id"]).flatMap(f);
  if (t.some(Xe)) return !(e === Cp && l7i(r));
  let s = f(n.pathname).map((i) => import_path.posix.normalize(i).replace(/\/+$/, "")), o = [...import_chunk_f2dee02n.Ql.ownCcrSessionIds, ...W.flatMap((i) => _(i, s) ?? [])].flatMap((i) => AVn((0, import_chunk_t39bs2jr.Un)(i), Cp)).map(Z);
  return s.some((i) => Me.test(i)) || t.some((i) => h(i) === h(Cp) || o.some((a) => U(i).includes(a)));
}
var Ce = new RegExp("(?![0-9])\\p{Nd}", "u");
function Xe(e) {
  return MPe() && (Ce.test(e) || U(e).includes(Z(N)));
}
function Z(e) {
  return U(e).replace(/^0+/, "");
}
function U(e) {
  let r = (0, import_chunk_px0hhsq7.nC)(e)?.replaceAll("-", "") ?? "", n = e.toLowerCase().replaceAll("urn:", "").replaceAll("uuid:", "").replace(/[^0-9a-f]/g, "");
  return `${r}${n}`;
}
var L = /* @__PURE__ */ new Set(["bridge.claudeusercontent.com", "bridge-staging.claudeusercontent.com"]), ye = "/devices/mcp";
function dIs(e) {
  let r;
  try {
    r = new URL(e);
  } catch {
    return false;
  }
  return r.protocol === "wss:" && r.username === "" && r.password === "" && L.has(r.hostname);
}
function Bct(e) {
  if ("url" in e && typeof e.url === "string" && Yu(e.url)) return true;
  return (0, import_chunk_qdcbcsg7.Pl)(e);
}
function DOo(e, r) {
  return "url" in e && Yu(e.url) ? r : void 0;
}
function xe(e) {
  if (!Yu(e) || !URL.canParse(e)) return;
  return new URL(e).searchParams.get("mcp_url") || void 0;
}
var Je = /* @__PURE__ */ new Set(["http:", "https:", "ws:", "wss:"]);
function nMr(e) {
  let r = xe(e);
  if (r === void 0 || !URL.canParse(r)) return;
  let n = new URL(r);
  return Je.has(n.protocol) ? n.hostname.toLowerCase() : void 0;
}
function cFe(e) {
  let r = xe(e);
  if (!r) return false;
  try {
    let n = new URL(r);
    return L.has(n.hostname) && n.pathname === ye;
  } catch {
    return false;
  }
}
function dLl(e) {
  if (!Yu(e)) return false;
  let r = new URL(e), n = (HPe.exec(r.pathname) ?? x.exec(r.pathname))?.[1], t = /* @__PURE__ */ new Set([import_chunk_qdcbcsg7.$n, ...[...import_chunk_f2dee02n.Ql.ownCcrSessionIds, ...n === void 0 ? [] : [n]].flatMap((s) => AVn((0, import_chunk_t39bs2jr.Un)(s), import_chunk_qdcbcsg7.$n))]);
  return [...r.searchParams.getAll("mcp_server_id"), ...r.searchParams.getAll("toolbox_mcp_server_id")].some((s) => t.has(s.toLowerCase())) || r.searchParams.getAll("mcp_url").some(Qe);
}
var qe = 4;
function Qe(e) {
  let r = URL.canParse(e) ? new URL(e).hostname : "", n = () => [...L].some((t) => r.includes(t));
  if (n()) return true;
  r = e.toLowerCase();
  for (let t = 0; t <= qe; t++) {
    if (r = r.replace(/[\t\n\r]/g, ""), n()) return true;
    let s = r;
    if (r = r.replace(/%([0-9a-f]{2})/g, (o, i) => String.fromCharCode(parseInt(i, 16)).toLowerCase()), r === s) return false;
  }
  return true;
}
var cLl = [...L].map((e) => `https://${e}${ye}`);
function jde(e) {
  if (!("url" in e) || typeof e.url !== "string") return;
  try {
    let r = new URL(e.url);
    return r.search = "", r.username = "", r.password = "", r.hash = "", r.toString().replace(/\/$/, "");
  } catch {
    return;
  }
}
function hK(e) {
  return e ? (0, import_chunk_myvyhcm0.Zn)(e) : void 0;
}
function uLl(e) {
  if (!URL.canParse(e)) return;
  let r = new URL(e), n = Ae(r);
  if (n === void 0) return;
  return r.pathname !== "/" || r.search !== "" || r.hash !== "" ? `${n}/\u2026` : n;
}
function Gde(e) {
  return "url" in e ? e.url : null;
}
function HVt(e) {
  if (e.type !== void 0 && e.type !== "stdio") return null;
  let r = e;
  return [r.command, ...r.args ?? []];
}
function d7i(e) {
  if (!URL.canParse(e)) return [];
  let r = new URL(e);
  return g.some((n) => r.href.includes(n)) ? r.searchParams.getAll("mcp_url") : [];
}
function LOo(e) {
  return d7i(e)[0] || e;
}
function uFe(e) {
  return e.type ?? ("command" in e ? "stdio" : "unknown");
}
function NOo(e) {
  let { authoredUnexpanded: r, expanded: n, cliOwned: t } = e, s = e.detail ?? "endpoint";
  if (r) {
    let i = Gde(r);
    if (i) {
      if (s === "endpoint") return (0, import_chunk_418mqjww.sft)(i);
      if (!rr(i, Gde(n) ?? "")) return;
      if (er(i)) return ae(i);
      return FOo(i) ?? ae(i);
    }
    let a = HVt(r);
    if (a) return s === "endpoint" ? (0, import_chunk_418mqjww.sft)(a.join(" ")) : void 0;
    return s === "endpoint" ? uFe(r) : void 0;
  }
  let o = Gde(n);
  if (o) {
    let i = t && Yu(o) ? LOo(o) : o, a = FOo(i);
    if (a !== void 0) return a;
  }
  return s === "endpoint" ? uFe(n) : void 0;
}
function FOo(e) {
  let r = URL.parse(e);
  return r ? Ae(r) : void 0;
}
function Phn(e, r = e) {
  let n = (i) => {
    let a = e.length;
    for (let u of ["/", "?", "#", "\\"]) {
      let l = r.indexOf(u, i);
      if (l !== -1 && l < a) a = l;
    }
    return a;
  }, t = r.indexOf("://"), s = t !== -1 && t < n(0) && /^[A-Za-z][A-Za-z0-9+.-]*$/.test(r.slice(0, t)) ? t + 3 : 0, o = n(s);
  return { scheme: e.slice(0, s), authority: e.slice(s, o), rest: e.slice(o) };
}
function er(e) {
  return Phn(e, (0, import_chunk_418mqjww.Wqn)(e)).authority.includes("${");
}
function ae(e) {
  let r = (0, import_chunk_418mqjww.Wqn)(e), { scheme: n, authority: t } = Phn(r), s = n.length, o = s + t.length;
  if (r.includes("@", o)) return (0, import_chunk_418mqjww.sft)(e.slice(0, s)) + "[unparseable-authority]";
  let i = t.lastIndexOf("@"), a = i === -1 ? s : s + i + 1, u = e.slice(a, o);
  if (u === "") return;
  let l = e.slice(0, s) + u;
  if (!(0, import_chunk_418mqjww.zoe)(l)) return FOo(l);
  let d = r.slice(a, o);
  if (/[\u0000-\u0020\u007f]/.test(d)) return;
  let S = d.replace(/:[^:\]]*$/, "").length, p = (0, import_chunk_418mqjww.yxt)(u.slice(0, S)), C = p.slice(0, -1);
  if (C.some((E) => /[^.]/.test(E)) || C.length > 0 && /^[^.]/.test(p.at(-1) ?? "")) return;
  let c = p.join("x");
  if (/[^!-~]/.test(c) || URL.parse(`https://${c}`)?.hostname !== c.toLowerCase()) return;
  return (0, import_chunk_418mqjww.sft)(l);
}
function Ae(e) {
  return e.origin === "null" || e.protocol === "blob:" ? void 0 : e.origin;
}
function cIs(e) {
  let r = URL.parse(e)?.protocol;
  return r === "http:" || r === "https:" || r === "ws:" || r === "wss:";
}
function rr(e, r) {
  if (!cIs(r)) return false;
  let n = Phn(r);
  if (URL.parse(n.scheme + n.authority)?.host !== URL.parse(r)?.host) return false;
  if (URL.canParse(e) && !cIs(e)) return false;
  let t = Phn(e, (0, import_chunk_418mqjww.Wqn)(e));
  return t.scheme !== "" || (0, import_chunk_418mqjww.yxt)(t.authority).every((s) => s === "");
}
function Pe(e, r) {
  let n = m(e, r);
  if (!n) return "other";
  if (n.pathname === import_chunk_epy4sc29.Dhn) return n.search === "" ? "mount" : "other";
  if (!nr(n)) return "other";
  let t = we(n);
  if (v(n, import_chunk_epy4sc29.a8, t)) return "mount";
  return t !== void 0 && n.searchParams.getAll("mcp_server_id").length === 1 ? "unfit_hash" : "other";
}
function nr(e) {
  let r = e.searchParams.getAll("toolbox_mcp_server_id");
  return g.some((n) => e.pathname.includes(n)) && r.length === 1 && r[0] === import_chunk_epy4sc29.a8;
}
function Oe(e, r) {
  let n = new URL(e);
  n.pathname = I(e.pathname) ?? e.pathname;
  let { session: t, cannotClear: s, pathnames: o } = ue(n), i = _(je, o), a = [...be(e), ...i === void 0 ? [] : [i]];
  if ([...e.searchParams.keys()].some(ce)) return true;
  if (a.length === 0) return false;
  if (s || a.some(ce)) return true;
  let u = CVn.get(r.toLowerCase()) ?? [], l = [r, ...k(r, b), ...k(r, t)].map(Z);
  return a.flatMap(f).some((d) => Ce.test(d) || u.includes(d.replace(Re, "")) || l.some((S) => U(d).includes(S)));
}
function ce(e) {
  let r = [e];
  for (let n = 1; n <= 3; n++) r = (0, import_chunk_4smdap7r.M)(r.flatMap(H));
  return r.flatMap(H).some((n) => !r.includes(n));
}
function we(e) {
  let r = I(e.pathname) ?? "";
  return W.map((n) => n.exec(r)?.[1]).find(Boolean);
}
function be(e) {
  let r = I(e.pathname) ?? "", n = j.exec(r)?.[1] ?? Y.exec(r)?.[1];
  return [...y(e, ["mcp_server_id", "toolbox_mcp_server_id"]), ...n === void 0 ? [] : [n]];
}
function I(e) {
  let r = e.toLowerCase(), n = g.map((t) => r.indexOf(t)).filter((t) => t !== -1);
  return n.length > 0 ? e.slice(Math.min(...n)) : void 0;
}
function v(e, r, n) {
  let t = e.searchParams.getAll("mcp_server_id"), [s] = t;
  return t.length < 2 && (!s || k(r, n).includes(s));
}
function k(e, r) {
  let n = r === b ? import_chunk_f2dee02n.Ql.ownCcrSessionIds : r === void 0 ? [] : [r];
  return (CVn.get(e.toLowerCase()) ?? []).flatMap((t) => n.flatMap((s) => AVn((0, import_chunk_t39bs2jr.Un)(s), t)));
}
