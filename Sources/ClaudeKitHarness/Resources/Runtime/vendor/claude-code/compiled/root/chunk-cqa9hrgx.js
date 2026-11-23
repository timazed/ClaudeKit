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
var chunk_cqa9hrgx_exports = {};
__export(chunk_cqa9hrgx_exports, {
  Eft: () => Eft,
  Gt: () => Gt,
  NEe: () => NEe,
  To: () => To,
  a4t: () => a4t,
  dJ: () => dJ,
  l: () => l,
  m: () => m,
  oi: () => oi,
  qo: () => qo,
  u: () => u
});
module.exports = __toCommonJS(chunk_cqa9hrgx_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_04nf05xp = require("/$bunfs/root/chunk-04nf05xp.js");
function Z(e, r, o, t) {
  var d = -1, i = e == null ? 0 : e.length;
  if (t && i) o = e[++d];
  while (++d < i) o = r(o, e[d], d, e);
  return o;
}
var x = Z;
function I(e) {
  return function(r) {
    return e == null ? void 0 : e[r];
  };
}
var s = I;
var D = { "\xC0": "A", "\xC1": "A", "\xC2": "A", "\xC3": "A", "\xC4": "A", "\xC5": "A", "\xE0": "a", "\xE1": "a", "\xE2": "a", "\xE3": "a", "\xE4": "a", "\xE5": "a", "\xC7": "C", "\xE7": "c", "\xD0": "D", "\xF0": "d", "\xC8": "E", "\xC9": "E", "\xCA": "E", "\xCB": "E", "\xE8": "e", "\xE9": "e", "\xEA": "e", "\xEB": "e", "\xCC": "I", "\xCD": "I", "\xCE": "I", "\xCF": "I", "\xEC": "i", "\xED": "i", "\xEE": "i", "\xEF": "i", "\xD1": "N", "\xF1": "n", "\xD2": "O", "\xD3": "O", "\xD4": "O", "\xD5": "O", "\xD6": "O", "\xD8": "O", "\xF2": "o", "\xF3": "o", "\xF4": "o", "\xF5": "o", "\xF6": "o", "\xF8": "o", "\xD9": "U", "\xDA": "U", "\xDB": "U", "\xDC": "U", "\xF9": "u", "\xFA": "u", "\xFB": "u", "\xFC": "u", "\xDD": "Y", "\xFD": "y", "\xFF": "y", "\xC6": "Ae", "\xE6": "ae", "\xDE": "Th", "\xFE": "th", "\xDF": "ss", "\u0100": "A", "\u0102": "A", "\u0104": "A", "\u0101": "a", "\u0103": "a", "\u0105": "a", "\u0106": "C", "\u0108": "C", "\u010A": "C", "\u010C": "C", "\u0107": "c", "\u0109": "c", "\u010B": "c", "\u010D": "c", "\u010E": "D", "\u0110": "D", "\u010F": "d", "\u0111": "d", "\u0112": "E", "\u0114": "E", "\u0116": "E", "\u0118": "E", "\u011A": "E", "\u0113": "e", "\u0115": "e", "\u0117": "e", "\u0119": "e", "\u011B": "e", "\u011C": "G", "\u011E": "G", "\u0120": "G", "\u0122": "G", "\u011D": "g", "\u011F": "g", "\u0121": "g", "\u0123": "g", "\u0124": "H", "\u0126": "H", "\u0125": "h", "\u0127": "h", "\u0128": "I", "\u012A": "I", "\u012C": "I", "\u012E": "I", "\u0130": "I", "\u0129": "i", "\u012B": "i", "\u012D": "i", "\u012F": "i", "\u0131": "i", "\u0134": "J", "\u0135": "j", "\u0136": "K", "\u0137": "k", "\u0138": "k", "\u0139": "L", "\u013B": "L", "\u013D": "L", "\u013F": "L", "\u0141": "L", "\u013A": "l", "\u013C": "l", "\u013E": "l", "\u0140": "l", "\u0142": "l", "\u0143": "N", "\u0145": "N", "\u0147": "N", "\u014A": "N", "\u0144": "n", "\u0146": "n", "\u0148": "n", "\u014B": "n", "\u014C": "O", "\u014E": "O", "\u0150": "O", "\u014D": "o", "\u014F": "o", "\u0151": "o", "\u0154": "R", "\u0156": "R", "\u0158": "R", "\u0155": "r", "\u0157": "r", "\u0159": "r", "\u015A": "S", "\u015C": "S", "\u015E": "S", "\u0160": "S", "\u015B": "s", "\u015D": "s", "\u015F": "s", "\u0161": "s", "\u0162": "T", "\u0164": "T", "\u0166": "T", "\u0163": "t", "\u0165": "t", "\u0167": "t", "\u0168": "U", "\u016A": "U", "\u016C": "U", "\u016E": "U", "\u0170": "U", "\u0172": "U", "\u0169": "u", "\u016B": "u", "\u016D": "u", "\u016F": "u", "\u0171": "u", "\u0173": "u", "\u0174": "W", "\u0175": "w", "\u0176": "Y", "\u0177": "y", "\u0178": "Y", "\u0179": "Z", "\u017B": "Z", "\u017D": "Z", "\u017A": "z", "\u017C": "z", "\u017E": "z", "\u0132": "IJ", "\u0133": "ij", "\u0152": "Oe", "\u0153": "oe", "\u0149": "'n", "\u017F": "s" }, P = s(D), c = P;
var j = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, H = "\\u0300-\\u036f", B = "\\ufe20-\\ufe2f", G = "\\u20d0-\\u20ff", J = H + B + G, V = "[" + J + "]", Y = RegExp(V, "g");
function q(e) {
  return e = (0, import_chunk_04nf05xp.uJ)(e), e && e.replace(j, c).replace(Y, "");
}
var g = q;
var K = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function Q(e) {
  return e.match(K) || [];
}
var p = Q;
var X = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function ee(e) {
  return X.test(e);
}
var b = ee;
var v = "\\ud800-\\udfff", re = "\\u0300-\\u036f", ue = "\\ufe20-\\ufe2f", oe = "\\u20d0-\\u20ff", te = re + ue + oe, C = "\\u2700-\\u27bf", h = "a-z\\xdf-\\xf6\\xf8-\\xff", ae = "\\xac\\xb1\\xd7\\xf7", ne = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", fe = "\\u2000-\\u206f", de = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", O = "A-Z\\xc0-\\xd6\\xd8-\\xde", ie = "\\ufe0e\\ufe0f", y = ae + ne + fe + de, F = "['\u2019]", R = "[" + y + "]", xe = "[" + te + "]", k = "\\d+", se = "[" + C + "]", E = "[" + h + "]", U = "[^" + v + y + k + C + h + O + "]", ce = "\\ud83c[\\udffb-\\udfff]", me = "(?:" + xe + "|" + ce + ")", ge = "[^" + v + "]", w = "(?:\\ud83c[\\udde6-\\uddff]){2}", L = "[\\ud800-\\udbff][\\udc00-\\udfff]", n = "[" + O + "]", pe = "\\u200d", _ = "(?:" + E + "|" + U + ")", be = "(?:" + n + "|" + U + ")", S = "(?:" + F + "(?:d|ll|m|re|s|t|ve))?", A = "(?:" + F + "(?:D|LL|M|RE|S|T|VE))?", N = me + "?", T = "[" + ie + "]?", le = "(?:" + pe + "(?:" + [ge, w, L].join("|") + ")" + T + N + ")*", Re = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", _e = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Se = T + N + le, Ae = "(?:" + [se, w, L].join("|") + ")" + Se, ve = RegExp([n + "?" + E + "+" + S + "(?=" + [R, n, "$"].join("|") + ")", be + "+" + A + "(?=" + [R, n + _, "$"].join("|") + ")", n + "?" + _ + "+" + S, n + "+" + A, _e, Re, k, Ae].join("|"), "g");
function Ce(e) {
  return e.match(ve) || [];
}
var z = Ce;
function he(e, r, o) {
  if (e = (0, import_chunk_04nf05xp.uJ)(e), r = o ? void 0 : r, r === void 0) return b(e) ? z(e) : p(e);
  return e.match(r) || [];
}
var M = he;
var Oe = "['\u2019]", ye = RegExp(Oe, "g");
function Fe(e) {
  return function(r) {
    return x(M(g(r).replace(ye, "")), e, "");
  };
}
var W = Fe;
var ke = W(function(e, r, o) {
  return e + (o ? "_" : "") + r.toLowerCase();
}), Eft = ke;
function a4t(e) {
  return `tool_${Eft(e)}`;
}
function NEe(e) {
  return `cmd_${Eft(e)}`;
}
function dJ(e) {
  return `hook_${Eft(e)}`;
}
function u(e, r) {
  (0, import_chunk_y53wbr8a.a)("tengu_feature_ok", { ...r, feature_name: (0, import_chunk_78g0060s.f)(e) });
}
function m(e, r, o) {
  (0, import_chunk_y53wbr8a.a)("tengu_feature_bad", { ...o, feature_name: (0, import_chunk_78g0060s.f)(e), error_code: (0, import_chunk_jv7av99m.VK)(r) });
}
function l(e, r, o) {
  (0, import_chunk_y53wbr8a.a)("tengu_feature_sad", { ...o, feature_name: (0, import_chunk_78g0060s.f)(e), error_code: (0, import_chunk_jv7av99m.VK)(r) });
}
async function To(e, r) {
  try {
    await (0, import_chunk_y53wbr8a.Ma)("tengu_feature_ok", { ...r, feature_name: (0, import_chunk_78g0060s.f)(e) });
  } catch {
  }
}
async function Gt(e, r, o) {
  try {
    await (0, import_chunk_y53wbr8a.Ma)("tengu_feature_bad", { ...o, feature_name: (0, import_chunk_78g0060s.f)(e), error_code: (0, import_chunk_jv7av99m.VK)(r) });
  } catch {
  }
}
async function oi(e, r, o) {
  try {
    await (0, import_chunk_y53wbr8a.Ma)("tengu_feature_sad", { ...o, feature_name: (0, import_chunk_78g0060s.f)(e), error_code: (0, import_chunk_jv7av99m.VK)(r) });
  } catch {
  }
}
async function qo(e, r, o) {
  try {
    let t = await r();
    return u(e), t;
  } catch (t) {
    throw m(e, o?.(t) ?? "error"), t;
  }
}
