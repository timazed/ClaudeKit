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
var chunk_82b20b9x_exports = {};
__export(chunk_82b20b9x_exports, {
  gor: () => gor
});
module.exports = __toCommonJS(chunk_82b20b9x_exports);
var import_chunk_hnhsk56h = require("/$bunfs/root/chunk-hnhsk56h.js");
var import_chunk_6vnr9m6q = require("/$bunfs/root/chunk-6vnr9m6q.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var oe = (0, import_chunk_w1d7ygsk.V)(function(se) {
  Object.defineProperty(se, "__esModule", { value: true });
  se.formatNames = se.fastFormats = se.fullFormats = void 0;
  function k(e, t) {
    return { validate: e, compare: t };
  }
  se.fullFormats = { date: k(ee, j), time: k(O(true), Z), "date-time": k(W(true), re), "iso-time": k(O(), te), "iso-date-time": k(W(), ae), duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/, uri: De, "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu, email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i, hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/, ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i, regex: je, uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/, "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/, byte: Me, int32: { type: "number", validate: qe }, int64: { type: "number", validate: Oe }, float: { type: "number", validate: X }, double: { type: "number", validate: X }, password: true, binary: true };
  se.fastFormats = { ...se.fullFormats, date: k(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, j), time: k(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, Z), "date-time": k(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, re), "iso-time": k(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, te), "iso-date-time": k(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, ae), uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i, "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i, email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i };
  se.formatNames = Object.keys(se.fullFormats);
  function Ae(e) {
    return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
  }
  var Ee = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, $e = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function ee(e) {
    let t = Ee.exec(e);
    if (!t) return false;
    let r = +t[1], a = +t[2], s = +t[3];
    return a >= 1 && a <= 12 && s >= 1 && s <= (a === 2 && Ae(r) ? 29 : $e[a]);
  }
  function j(e, t) {
    if (!(e && t)) return;
    if (e > t) return 1;
    if (e < t) return -1;
    return 0;
  }
  var q = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
  function O(e) {
    return function(r) {
      let a = q.exec(r);
      if (!a) return false;
      let s = +a[1], n = +a[2], o = +a[3], l = a[4], d = a[5] === "-" ? -1 : 1, i = +(a[6] || 0), c = +(a[7] || 0);
      if (i > 23 || c > 59 || e && !l) return false;
      if (s <= 23 && n <= 59 && o < 60) return true;
      let u = n - c * d, f = s - i * d - (u < 0 ? 1 : 0);
      return (f === 23 || f === -1) && (u === 59 || u === -1) && o < 61;
    };
  }
  function Z(e, t) {
    if (!(e && t)) return;
    let r = (/* @__PURE__ */ new Date("2020-01-01T" + e)).valueOf(), a = (/* @__PURE__ */ new Date("2020-01-01T" + t)).valueOf();
    if (!(r && a)) return;
    return r - a;
  }
  function te(e, t) {
    if (!(e && t)) return;
    let r = q.exec(e), a = q.exec(t);
    if (!(r && a)) return;
    if (e = r[1] + r[2] + r[3], t = a[1] + a[2] + a[3], e > t) return 1;
    if (e < t) return -1;
    return 0;
  }
  var N = /t|\s/i;
  function W(e) {
    let t = O(e);
    return function(a) {
      let s = a.split(N);
      return s.length === 2 && ee(s[0]) && t(s[1]);
    };
  }
  function re(e, t) {
    if (!(e && t)) return;
    let r = new Date(e).valueOf(), a = new Date(t).valueOf();
    if (!(r && a)) return;
    return r - a;
  }
  function ae(e, t) {
    if (!(e && t)) return;
    let [r, a] = e.split(N), [s, n] = t.split(N), o = j(r, s);
    if (o === void 0) return;
    return o || Z(a, n);
  }
  var Re = /\/|:/, Ie = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
  function De(e) {
    return Re.test(e) && Ie.test(e);
  }
  var Y = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
  function Me(e) {
    return Y.lastIndex = 0, Y.test(e);
  }
  var Ce = -2147483648, ze = 2147483647;
  function qe(e) {
    return Number.isInteger(e) && e <= ze && e >= Ce;
  }
  function Oe(e) {
    return Number.isInteger(e);
  }
  function X() {
    return true;
  }
  var Ne = /[^\\]\\Z/;
  function je(e) {
    if (Ne.test(e)) return false;
    try {
      return new RegExp(e), true;
    } catch (t) {
      return false;
    }
  }
});
var le = (0, import_chunk_w1d7ygsk.V)(function(ce) {
  Object.defineProperty(ce, "__esModule", { value: true });
  ce.formatLimitDefinition = void 0;
  var ie = (0, import_chunk_6vnr9m6q.__o)(), m = (0, import_chunk_6vnr9m6q.Db)(), T = m.operators, D = { formatMaximum: { okStr: "<=", ok: T.LTE, fail: T.GT }, formatMinimum: { okStr: ">=", ok: T.GTE, fail: T.LT }, formatExclusiveMaximum: { okStr: "<", ok: T.LT, fail: T.GTE }, formatExclusiveMinimum: { okStr: ">", ok: T.GT, fail: T.LTE } }, Le = { message: ({ keyword: e, schemaCode: t }) => m.str`should be ${D[e].okStr} ${t}`, params: ({ keyword: e, schemaCode: t }) => m._`{comparison: ${D[e].okStr}, limit: ${t}}` };
  ce.formatLimitDefinition = { keyword: Object.keys(D), type: "string", schemaType: "string", $data: true, error: Le, code(e) {
    let { gen: t, data: r, schemaCode: a, keyword: s, it: n } = e, { opts: o, self: l } = n;
    if (!o.validateFormats) return;
    let d = new ie.KeywordCxt(n, l.RULES.all.format.definition, "format");
    if (d.$data) i();
    else c();
    function i() {
      let f = t.scopeValue("formats", { ref: l.formats, code: o.code.formats }), p = t.const("fmt", m._`${f}[${d.schemaCode}]`);
      e.fail$data(m.or(m._`typeof ${p} != "object"`, m._`${p} instanceof RegExp`, m._`typeof ${p}.compare != "function"`, u(p)));
    }
    function c() {
      let f = d.schema, p = l.formats[f];
      if (!p || p === true) return;
      if (typeof p != "object" || p instanceof RegExp || typeof p.compare != "function") throw Error(`"${s}": format "${f}" does not define "compare" function`);
      let S = t.scopeValue("formats", { key: f, ref: p, code: o.code.formats ? m._`${o.code.formats}${m.getProperty(f)}` : void 0 });
      e.fail$data(u(S));
    }
    function u(f) {
      return m._`${f}.compare(${r}, ${a}) ${D[s].fail} 0`;
    }
  }, dependencies: ["format"] };
  var He = (e) => (e.addKeyword(ce.formatLimitDefinition), e);
  ce.default = He;
});
var pe = (0, import_chunk_w1d7ygsk.V)(function(E, fe) {
  Object.defineProperty(E, "__esModule", { value: true });
  var y = oe(), Ve = le(), x = (0, import_chunk_6vnr9m6q.Db)(), ue = new x.Name("fullFormats"), Ue = new x.Name("fastFormats"), F = (e, t = { keywords: true }) => {
    if (Array.isArray(t)) return de(e, t, y.fullFormats, ue), e;
    let [r, a] = t.mode === "fast" ? [y.fastFormats, Ue] : [y.fullFormats, ue], s = t.formats || y.formatNames;
    if (de(e, s, r, a), t.keywords) (0, Ve.default)(e);
    return e;
  };
  F.get = (e, t = "full") => {
    let a = (t === "fast" ? y.fastFormats : y.fullFormats)[e];
    if (!a) throw Error(`Unknown format "${e}"`);
    return a;
  };
  function de(e, t, r, a) {
    var s, n;
    (s = (n = e.opts.code).formats) !== null && s !== void 0 || (n.formats = x._`require("ajv-formats/dist/formats").${a}`);
    for (let o of t) e.addFormat(o, r[o]);
  }
  fe.exports = E = F;
  Object.defineProperty(E, "__esModule", { value: true });
  E.default = F;
});
(0, import_chunk_adx6804h.Ige)();
function P(e) {
  return !!e._zod;
}
function b(e, t) {
  if (P(e)) return (0, import_chunk_adx6804h.Mra)(e, t);
  return e.safeParse(t);
}
function I(e) {
  if (!e) return;
  let t;
  if (P(e)) t = e._zod?.def?.shape;
  else t = e.shape;
  if (!t) return;
  if (typeof t === "function") try {
    return t();
  } catch {
    return;
  }
  return t;
}
function B(e) {
  if (P(e)) {
    let n = e._zod?.def;
    if (n) {
      if (n.value !== void 0) return n.value;
      if (Array.isArray(n.values) && n.values.length > 0) return n.values[0];
    }
  }
  let r = e._def;
  if (r) {
    if (r.value !== void 0) return r.value;
    if (Array.isArray(r.values) && r.values.length > 0) return r.values[0];
  }
  let a = e.value;
  if (a !== void 0) return a;
  return;
}
function w(e) {
  return e === "completed" || e === "failed" || e === "cancelled";
}
var ve = Symbol("Let zodToJsonSchema decide on which parser to use");
var Ht = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function M(e) {
  let r = I(e)?.method;
  if (!r) throw Error("Schema is missing a method literal");
  let a = B(r);
  if (typeof a !== "string") throw Error("Schema method literal must be a string");
  return a;
}
function C(e, t) {
  let r = b(e, t);
  if (!r.success) throw r.error;
  return r.data;
}
var xe = 6e4;
class z {
  constructor(e) {
    if (this._options = e, this._requestMessageId = 0, this._requestHandlers = /* @__PURE__ */ new Map(), this._requestHandlerAbortControllers = /* @__PURE__ */ new Map(), this._notificationHandlers = /* @__PURE__ */ new Map(), this._responseHandlers = /* @__PURE__ */ new Map(), this._progressHandlers = /* @__PURE__ */ new Map(), this._timeoutInfo = /* @__PURE__ */ new Map(), this._pendingDebouncedNotifications = /* @__PURE__ */ new Set(), this._taskProgressTokens = /* @__PURE__ */ new Map(), this._requestResolvers = /* @__PURE__ */ new Map(), this.setNotificationHandler(import_chunk_hnhsk56h.h9o, (t) => {
      this._oncancel(t);
    }), this.setNotificationHandler(import_chunk_hnhsk56h._9o, (t) => {
      this._onprogress(t);
    }), this.setRequestHandler(import_chunk_hnhsk56h.g9o, (t) => ({})), this._taskStore = e?.taskStore, this._taskMessageQueue = e?.taskMessageQueue, this._taskStore) this.setRequestHandler(import_chunk_hnhsk56h.y9o, async (t, r) => {
      let a = await this._taskStore.getTask(t.params.taskId, r.sessionId);
      if (!a) throw new import_chunk_hnhsk56h.QE(import_chunk_hnhsk56h.lR.InvalidParams, "Failed to retrieve task: Task not found");
      return { ...a };
    }), this.setRequestHandler(import_chunk_hnhsk56h.b9o, async (t, r) => {
      let a = async () => {
        let s = t.params.taskId;
        if (this._taskMessageQueue) {
          let o;
          while (o = await this._taskMessageQueue.dequeue(s, r.sessionId)) {
            if (o.type === "response" || o.type === "error") {
              let l = o.message, d = l.id, i = this._requestResolvers.get(d);
              if (i) if (this._requestResolvers.delete(d), o.type === "response") i(l);
              else {
                let c = l, u = new import_chunk_hnhsk56h.QE(c.error.code, c.error.message, c.error.data);
                i(u);
              }
              else {
                let c = o.type === "response" ? "Response" : "Error";
                this._onerror(Error(`${c} handler missing for request ${d}`));
              }
              continue;
            }
            await this._transport?.send(o.message, { relatedRequestId: r.requestId });
          }
        }
        let n = await this._taskStore.getTask(s, r.sessionId);
        if (!n) throw new import_chunk_hnhsk56h.QE(import_chunk_hnhsk56h.lR.InvalidParams, `Task not found: ${s}`);
        if (!w(n.status)) return await this._waitForTaskUpdate(s, r.signal), await a();
        if (w(n.status)) {
          let o = await this._taskStore.getTaskResult(s, r.sessionId);
          return this._clearTaskQueue(s), { ...o, _meta: { ...o._meta, [import_chunk_hnhsk56h.XXt]: { taskId: s } } };
        }
        return await a();
      };
      return await a();
    }), this.setRequestHandler(import_chunk_hnhsk56h.w9o, async (t, r) => {
      try {
        let { tasks: a, nextCursor: s } = await this._taskStore.listTasks(t.params?.cursor, r.sessionId);
        return { tasks: a, nextCursor: s, _meta: {} };
      } catch (a) {
        throw new import_chunk_hnhsk56h.QE(import_chunk_hnhsk56h.lR.InvalidParams, `Failed to list tasks: ${a instanceof Error ? a.message : String(a)}`);
      }
    }), this.setRequestHandler(import_chunk_hnhsk56h.E9o, async (t, r) => {
      try {
        let a = await this._taskStore.getTask(t.params.taskId, r.sessionId);
        if (!a) throw new import_chunk_hnhsk56h.QE(import_chunk_hnhsk56h.lR.InvalidParams, `Task not found: ${t.params.taskId}`);
        if (w(a.status)) throw new import_chunk_hnhsk56h.QE(import_chunk_hnhsk56h.lR.InvalidParams, `Cannot cancel task in terminal status: ${a.status}`);
        await this._taskStore.updateTaskStatus(t.params.taskId, "cancelled", "Client cancelled task execution.", r.sessionId), this._clearTaskQueue(t.params.taskId);
        let s = await this._taskStore.getTask(t.params.taskId, r.sessionId);
        if (!s) throw new import_chunk_hnhsk56h.QE(import_chunk_hnhsk56h.lR.InvalidParams, `Task not found after cancellation: ${t.params.taskId}`);
        return { _meta: {}, ...s };
      } catch (a) {
        if (a instanceof import_chunk_hnhsk56h.QE) throw a;
        throw new import_chunk_hnhsk56h.QE(import_chunk_hnhsk56h.lR.InvalidRequest, `Failed to cancel task: ${a instanceof Error ? a.message : String(a)}`);
      }
    });
  }
  async _oncancel(e) {
    if (!e.params.requestId) return;
    this._requestHandlerAbortControllers.get(e.params.requestId)?.abort(e.params.reason);
  }
  _setupTimeout(e, t, r, a, s = false) {
    this._timeoutInfo.set(e, { timeoutId: setTimeout(a, t), startTime: Date.now(), timeout: t, maxTotalTimeout: r, resetTimeoutOnProgress: s, onTimeout: a });
  }
  _resetTimeout(e) {
    let t = this._timeoutInfo.get(e);
    if (!t) return false;
    let r = Date.now() - t.startTime;
    if (t.maxTotalTimeout && r >= t.maxTotalTimeout) throw this._timeoutInfo.delete(e), import_chunk_hnhsk56h.QE.fromError(import_chunk_hnhsk56h.lR.RequestTimeout, "Maximum total timeout exceeded", { maxTotalTimeout: t.maxTotalTimeout, totalElapsed: r });
    return clearTimeout(t.timeoutId), t.timeoutId = setTimeout(t.onTimeout, t.timeout), true;
  }
  _cleanupTimeout(e) {
    let t = this._timeoutInfo.get(e);
    if (t) clearTimeout(t.timeoutId), this._timeoutInfo.delete(e);
  }
  async connect(e) {
    if (this._transport) throw Error("Already connected to a transport. Call close() before connecting to a new transport, or use a separate Protocol instance per connection.");
    this._transport = e;
    let t = this.transport?.onclose;
    this._transport.onclose = () => {
      t?.(), this._onclose();
    };
    let r = this.transport?.onerror;
    this._transport.onerror = (s) => {
      r?.(s), this._onerror(s);
    };
    let a = this._transport?.onmessage;
    this._transport.onmessage = (s, n) => {
      if (a?.(s, n), (0, import_chunk_hnhsk56h.W8r)(s) || (0, import_chunk_hnhsk56h.b1a)(s)) this._onresponse(s);
      else if ((0, import_chunk_hnhsk56h.Lni)(s)) this._onrequest(s, n);
      else if ((0, import_chunk_hnhsk56h.S1a)(s)) this._onnotification(s);
      else this._onerror(Error(`Unknown message type: ${JSON.stringify(s)}`));
    }, await this._transport.start();
  }
  _onclose() {
    let e = this._responseHandlers;
    this._responseHandlers = /* @__PURE__ */ new Map(), this._progressHandlers.clear(), this._taskProgressTokens.clear(), this._pendingDebouncedNotifications.clear();
    for (let r of this._timeoutInfo.values()) clearTimeout(r.timeoutId);
    this._timeoutInfo.clear();
    for (let r of this._requestHandlerAbortControllers.values()) r.abort();
    this._requestHandlerAbortControllers.clear();
    let t = import_chunk_hnhsk56h.QE.fromError(import_chunk_hnhsk56h.lR.ConnectionClosed, "Connection closed");
    this._transport = void 0, this.onclose?.();
    for (let r of e.values()) r(t);
  }
  _onerror(e) {
    this.onerror?.(e);
  }
  _onnotification(e) {
    let t = this._notificationHandlers.get(e.method) ?? this.fallbackNotificationHandler;
    if (t === void 0) return;
    Promise.resolve().then(() => t(e)).catch((r) => this._onerror(Error(`Uncaught error in notification handler: ${r}`)));
  }
  _onrequest(e, t) {
    let r = this._requestHandlers.get(e.method) ?? this.fallbackRequestHandler, a = this._transport, s = e.params?._meta?.[import_chunk_hnhsk56h.XXt]?.taskId;
    if (r === void 0) {
      let i = { jsonrpc: "2.0", id: e.id, error: { code: import_chunk_hnhsk56h.lR.MethodNotFound, message: "Method not found" } };
      if (s && this._taskMessageQueue) this._enqueueTaskMessage(s, { type: "error", message: i, timestamp: Date.now() }, a?.sessionId).catch((c) => this._onerror(Error(`Failed to enqueue error response: ${c}`)));
      else a?.send(i).catch((c) => this._onerror(Error(`Failed to send an error response: ${c}`)));
      return;
    }
    let n = new AbortController();
    this._requestHandlerAbortControllers.set(e.id, n);
    let o = (0, import_chunk_hnhsk56h.y1a)(e.params) ? e.params.task : void 0, l = this._taskStore ? this.requestTaskStore(e, a?.sessionId) : void 0, d = { signal: n.signal, sessionId: a?.sessionId, _meta: e.params?._meta, sendNotification: async (i) => {
      if (n.signal.aborted) return;
      let c = { relatedRequestId: e.id };
      if (s) c.relatedTask = { taskId: s };
      await this.notification(i, c);
    }, sendRequest: async (i, c, u) => {
      if (n.signal.aborted) throw new import_chunk_hnhsk56h.QE(import_chunk_hnhsk56h.lR.ConnectionClosed, "Request was cancelled");
      let f = { ...u, relatedRequestId: e.id };
      if (s && !f.relatedTask) f.relatedTask = { taskId: s };
      let p = f.relatedTask?.taskId ?? s;
      if (p && l) await l.updateTaskStatus(p, "input_required");
      return await this.request(i, c, f);
    }, authInfo: t?.authInfo, requestId: e.id, requestInfo: t?.requestInfo, taskId: s, taskStore: l, taskRequestedTtl: o?.ttl, closeSSEStream: t?.closeSSEStream, closeStandaloneSSEStream: t?.closeStandaloneSSEStream };
    Promise.resolve().then(() => {
      if (o) this.assertTaskHandlerCapability(e.method);
    }).then(() => r(e, d)).then(async (i) => {
      if (n.signal.aborted) return;
      let c = { result: i, jsonrpc: "2.0", id: e.id };
      if (s && this._taskMessageQueue) await this._enqueueTaskMessage(s, { type: "response", message: c, timestamp: Date.now() }, a?.sessionId);
      else await a?.send(c);
    }, async (i) => {
      if (n.signal.aborted) return;
      let c = { jsonrpc: "2.0", id: e.id, error: { code: Number.isSafeInteger(i.code) ? i.code : import_chunk_hnhsk56h.lR.InternalError, message: i.message ?? "Internal error", ...i.data !== void 0 && { data: i.data } } };
      if (s && this._taskMessageQueue) await this._enqueueTaskMessage(s, { type: "error", message: c, timestamp: Date.now() }, a?.sessionId);
      else await a?.send(c);
    }).catch((i) => this._onerror(Error(`Failed to send response: ${i}`))).finally(() => {
      if (this._requestHandlerAbortControllers.get(e.id) === n) this._requestHandlerAbortControllers.delete(e.id);
    });
  }
  _onprogress(e) {
    let { progressToken: t, ...r } = e.params, a = Number(t), s = this._progressHandlers.get(a);
    if (!s) {
      this._onerror(Error(`Received a progress notification for an unknown token: ${JSON.stringify(e)}`));
      return;
    }
    let n = this._responseHandlers.get(a), o = this._timeoutInfo.get(a);
    if (o && n && o.resetTimeoutOnProgress) try {
      this._resetTimeout(a);
    } catch (l) {
      this._responseHandlers.delete(a), this._progressHandlers.delete(a), this._cleanupTimeout(a), n(l);
      return;
    }
    s(r);
  }
  _onresponse(e) {
    let t = Number(e.id), r = this._requestResolvers.get(t);
    if (r) {
      if (this._requestResolvers.delete(t), (0, import_chunk_hnhsk56h.W8r)(e)) r(e);
      else {
        let n = new import_chunk_hnhsk56h.QE(e.error.code, e.error.message, e.error.data);
        r(n);
      }
      return;
    }
    let a = this._responseHandlers.get(t);
    if (a === void 0) {
      this._onerror(Error(`Received a response for an unknown message ID: ${JSON.stringify(e)}`));
      return;
    }
    this._responseHandlers.delete(t), this._cleanupTimeout(t);
    let s = false;
    if ((0, import_chunk_hnhsk56h.W8r)(e) && e.result && typeof e.result === "object") {
      let n = e.result;
      if (n.task && typeof n.task === "object") {
        let o = n.task;
        if (typeof o.taskId === "string") s = true, this._taskProgressTokens.set(o.taskId, t);
      }
    }
    if (!s) this._progressHandlers.delete(t);
    if ((0, import_chunk_hnhsk56h.W8r)(e)) a(e);
    else {
      let n = import_chunk_hnhsk56h.QE.fromError(e.error.code, e.error.message, e.error.data);
      a(n);
    }
  }
  get transport() {
    return this._transport;
  }
  async close() {
    await this._transport?.close();
  }
  async *requestStream(e, t, r) {
    let { task: a } = r ?? {};
    if (!a) {
      try {
        yield { type: "result", result: await this.request(e, t, r) };
      } catch (n) {
        yield { type: "error", error: n instanceof import_chunk_hnhsk56h.QE ? n : new import_chunk_hnhsk56h.QE(import_chunk_hnhsk56h.lR.InternalError, String(n)) };
      }
      return;
    }
    let s;
    try {
      let n = await this.request(e, import_chunk_hnhsk56h._or, r);
      if (n.task) s = n.task.taskId, yield { type: "taskCreated", task: n.task };
      else throw new import_chunk_hnhsk56h.QE(import_chunk_hnhsk56h.lR.InternalError, "Task creation did not return a task");
      while (true) {
        let o = await this.getTask({ taskId: s }, r);
        if (yield { type: "taskStatus", task: o }, w(o.status)) {
          if (o.status === "completed") yield { type: "result", result: await this.getTaskResult({ taskId: s }, t, r) };
          else if (o.status === "failed") yield { type: "error", error: new import_chunk_hnhsk56h.QE(import_chunk_hnhsk56h.lR.InternalError, `Task ${s} failed`) };
          else if (o.status === "cancelled") yield { type: "error", error: new import_chunk_hnhsk56h.QE(import_chunk_hnhsk56h.lR.InternalError, `Task ${s} was cancelled`) };
          return;
        }
        if (o.status === "input_required") {
          yield { type: "result", result: await this.getTaskResult({ taskId: s }, t, r) };
          return;
        }
        let l = o.pollInterval ?? this._options?.defaultTaskPollInterval ?? 1e3;
        await new Promise((d) => setTimeout(d, l)), r?.signal?.throwIfAborted();
      }
    } catch (n) {
      yield { type: "error", error: n instanceof import_chunk_hnhsk56h.QE ? n : new import_chunk_hnhsk56h.QE(import_chunk_hnhsk56h.lR.InternalError, String(n)) };
    }
  }
  request(e, t, r) {
    let { relatedRequestId: a, resumptionToken: s, onresumptiontoken: n, task: o, relatedTask: l } = r ?? {};
    return new Promise((d, i) => {
      let c = (g) => {
        i(g);
      };
      if (!this._transport) {
        c(Error("Not connected"));
        return;
      }
      if (this._options?.enforceStrictCapabilities === true) try {
        if (this.assertCapabilityForMethod(e.method), o) this.assertTaskCapability(e.method);
      } catch (g) {
        c(g);
        return;
      }
      r?.signal?.throwIfAborted();
      let u = this._requestMessageId++, f = { ...e, jsonrpc: "2.0", id: u };
      if (r?.onprogress) this._progressHandlers.set(u, r.onprogress), f.params = { ...e.params, _meta: { ...e.params?._meta || {}, progressToken: u } };
      if (o) f.params = { ...f.params, task: o };
      if (l) f.params = { ...f.params, _meta: { ...f.params?._meta || {}, [import_chunk_hnhsk56h.XXt]: l } };
      let p = (g) => {
        this._responseHandlers.delete(u), this._progressHandlers.delete(u), this._cleanupTimeout(u), this._transport?.send({ jsonrpc: "2.0", method: "notifications/cancelled", params: { requestId: u, reason: String(g) } }, { relatedRequestId: a, resumptionToken: s, onresumptiontoken: n }).catch((R) => this._onerror(Error(`Failed to send cancellation: ${R}`)));
        let _ = g instanceof import_chunk_hnhsk56h.QE ? g : new import_chunk_hnhsk56h.QE(import_chunk_hnhsk56h.lR.RequestTimeout, String(g));
        i(_);
      };
      this._responseHandlers.set(u, (g) => {
        if (r?.signal?.aborted) return;
        if (g instanceof Error) return i(g);
        try {
          let _ = b(t, g.result);
          if (!_.success) i(_.error);
          else d(_.data);
        } catch (_) {
          i(_);
        }
      }), r?.signal?.addEventListener("abort", () => {
        p(r?.signal?.reason);
      });
      let S = r?.timeout ?? xe, _e = () => p(import_chunk_hnhsk56h.QE.fromError(import_chunk_hnhsk56h.lR.RequestTimeout, "Request timed out", { timeout: S }));
      this._setupTimeout(u, S, r?.maxTotalTimeout, _e, r?.resetTimeoutOnProgress ?? false);
      let Q = l?.taskId;
      if (Q) {
        let g = (_) => {
          let R = this._responseHandlers.get(u);
          if (R) R(_);
          else this._onerror(Error(`Response handler missing for side-channeled request ${u}`));
        };
        this._requestResolvers.set(u, g), this._enqueueTaskMessage(Q, { type: "request", message: f, timestamp: Date.now() }).catch((_) => {
          this._cleanupTimeout(u), i(_);
        });
      } else this._transport.send(f, { relatedRequestId: a, resumptionToken: s, onresumptiontoken: n }).catch((g) => {
        this._cleanupTimeout(u), i(g);
      });
    });
  }
  async getTask(e, t) {
    return this.request({ method: "tasks/get", params: e }, import_chunk_hnhsk56h.S9o, t);
  }
  async getTaskResult(e, t, r) {
    return this.request({ method: "tasks/result", params: e }, t, r);
  }
  async listTasks(e, t) {
    return this.request({ method: "tasks/list", params: e }, import_chunk_hnhsk56h.k9o, t);
  }
  async cancelTask(e, t) {
    return this.request({ method: "tasks/cancel", params: e }, import_chunk_hnhsk56h.w1a, t);
  }
  async notification(e, t) {
    if (!this._transport) throw Error("Not connected");
    this.assertNotificationCapability(e.method);
    let r = t?.relatedTask?.taskId;
    if (r) {
      let o = { ...e, jsonrpc: "2.0", params: { ...e.params, _meta: { ...e.params?._meta || {}, [import_chunk_hnhsk56h.XXt]: t.relatedTask } } };
      await this._enqueueTaskMessage(r, { type: "notification", message: o, timestamp: Date.now() });
      return;
    }
    if ((this._options?.debouncedNotificationMethods ?? []).includes(e.method) && !e.params && !t?.relatedRequestId && !t?.relatedTask) {
      if (this._pendingDebouncedNotifications.has(e.method)) return;
      this._pendingDebouncedNotifications.add(e.method), Promise.resolve().then(() => {
        if (this._pendingDebouncedNotifications.delete(e.method), !this._transport) return;
        let o = { ...e, jsonrpc: "2.0" };
        if (t?.relatedTask) o = { ...o, params: { ...o.params, _meta: { ...o.params?._meta || {}, [import_chunk_hnhsk56h.XXt]: t.relatedTask } } };
        this._transport?.send(o, t).catch((l) => this._onerror(l));
      });
      return;
    }
    let n = { ...e, jsonrpc: "2.0" };
    if (t?.relatedTask) n = { ...n, params: { ...n.params, _meta: { ...n.params?._meta || {}, [import_chunk_hnhsk56h.XXt]: t.relatedTask } } };
    await this._transport.send(n, t);
  }
  setRequestHandler(e, t) {
    let r = M(e);
    this.assertRequestHandlerCapability(r), this._requestHandlers.set(r, (a, s) => {
      let n = C(e, a);
      return Promise.resolve(t(n, s));
    });
  }
  removeRequestHandler(e) {
    this._requestHandlers.delete(e);
  }
  assertCanSetRequestHandler(e) {
    if (this._requestHandlers.has(e)) throw Error(`A request handler for ${e} already exists, which would be overridden`);
  }
  setNotificationHandler(e, t) {
    let r = M(e);
    this._notificationHandlers.set(r, (a) => {
      let s = C(e, a);
      return Promise.resolve(t(s));
    });
  }
  removeNotificationHandler(e) {
    this._notificationHandlers.delete(e);
  }
  _cleanupTaskProgressHandler(e) {
    let t = this._taskProgressTokens.get(e);
    if (t !== void 0) this._progressHandlers.delete(t), this._taskProgressTokens.delete(e);
  }
  async _enqueueTaskMessage(e, t, r) {
    if (!this._taskStore || !this._taskMessageQueue) throw Error("Cannot enqueue task message: taskStore and taskMessageQueue are not configured");
    let a = this._options?.maxTaskQueueSize;
    await this._taskMessageQueue.enqueue(e, t, r, a);
  }
  async _clearTaskQueue(e, t) {
    if (this._taskMessageQueue) {
      let r = await this._taskMessageQueue.dequeueAll(e, t);
      for (let a of r) if (a.type === "request" && (0, import_chunk_hnhsk56h.Lni)(a.message)) {
        let s = a.message.id, n = this._requestResolvers.get(s);
        if (n) n(new import_chunk_hnhsk56h.QE(import_chunk_hnhsk56h.lR.InternalError, "Task cancelled or completed")), this._requestResolvers.delete(s);
        else this._onerror(Error(`Resolver missing for request ${s} during task ${e} cleanup`));
      }
    }
  }
  async _waitForTaskUpdate(e, t) {
    let r = this._options?.defaultTaskPollInterval ?? 1e3;
    try {
      let a = await this._taskStore?.getTask(e);
      if (a?.pollInterval) r = a.pollInterval;
    } catch {
    }
    return new Promise((a, s) => {
      if (t.aborted) {
        s(new import_chunk_hnhsk56h.QE(import_chunk_hnhsk56h.lR.InvalidRequest, "Request cancelled"));
        return;
      }
      let n = setTimeout(a, r);
      t.addEventListener("abort", () => {
        clearTimeout(n), s(new import_chunk_hnhsk56h.QE(import_chunk_hnhsk56h.lR.InvalidRequest, "Request cancelled"));
      }, { once: true });
    });
  }
  requestTaskStore(e, t) {
    let r = this._taskStore;
    if (!r) throw Error("No task store configured");
    return { createTask: async (a) => {
      if (!e) throw Error("No request provided");
      return await r.createTask(a, e.id, { method: e.method, params: e.params }, t);
    }, getTask: async (a) => {
      let s = await r.getTask(a, t);
      if (!s) throw new import_chunk_hnhsk56h.QE(import_chunk_hnhsk56h.lR.InvalidParams, "Failed to retrieve task: Task not found");
      return s;
    }, storeTaskResult: async (a, s, n) => {
      await r.storeTaskResult(a, s, n, t);
      let o = await r.getTask(a, t);
      if (o) {
        let l = import_chunk_hnhsk56h.j8r.parse({ method: "notifications/tasks/status", params: o });
        if (await this.notification(l), w(o.status)) this._cleanupTaskProgressHandler(a);
      }
    }, getTaskResult: (a) => r.getTaskResult(a, t), updateTaskStatus: async (a, s, n) => {
      let o = await r.getTask(a, t);
      if (!o) throw new import_chunk_hnhsk56h.QE(import_chunk_hnhsk56h.lR.InvalidParams, `Task "${a}" not found - it may have been cleaned up`);
      if (w(o.status)) throw new import_chunk_hnhsk56h.QE(import_chunk_hnhsk56h.lR.InvalidParams, `Cannot update task "${a}" from terminal status "${o.status}" to "${s}". Terminal states (completed, failed, cancelled) cannot transition to other states.`);
      await r.updateTaskStatus(a, s, n, t);
      let l = await r.getTask(a, t);
      if (l) {
        let d = import_chunk_hnhsk56h.j8r.parse({ method: "notifications/tasks/status", params: l });
        if (await this.notification(d), w(l.status)) this._cleanupTaskProgressHandler(a);
      }
    }, listTasks: (a) => r.listTasks(a, t) };
  }
}
function G(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function K(e, t) {
  let r = { ...e };
  for (let a in t) {
    let s = a, n = t[s];
    if (n === void 0) continue;
    let o = r[s];
    if (G(o) && G(n)) r[s] = { ...o, ...n };
    else r[s] = n;
  }
  return r;
}
var me = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_6vnr9m6q.__o)(), 1), he = (0, import_chunk_w1d7ygsk.rt)(pe(), 1);
function Je() {
  let e = new me.default({ strict: false, validateFormats: true, validateSchema: false, allErrors: true });
  return he.default(e), e;
}
class U {
  constructor(e) {
    this._ajv = e ?? Je();
  }
  getValidator(e) {
    let t = "$id" in e && typeof e.$id === "string" ? this._ajv.getSchema(e.$id) ?? this._ajv.compile(e) : this._ajv.compile(e);
    return (r) => {
      if (t(r)) return { valid: true, data: r, errorMessage: void 0 };
      else return { valid: false, data: void 0, errorMessage: this._ajv.errorsText(t.errors) };
    };
  }
}
class J {
  constructor(e) {
    this._server = e;
  }
  requestStream(e, t, r) {
    return this._server.requestStream(e, t, r);
  }
  createMessageStream(e, t) {
    let r = this._server.getClientCapabilities();
    if ((e.tools || e.toolChoice) && !r?.sampling?.tools) throw Error("Client does not support sampling tools capability.");
    if (e.messages.length > 0) {
      let a = e.messages[e.messages.length - 1], s = Array.isArray(a.content) ? a.content : [a.content], n = s.some((i) => i.type === "tool_result"), o = e.messages.length > 1 ? e.messages[e.messages.length - 2] : void 0, l = o ? Array.isArray(o.content) ? o.content : [o.content] : [], d = l.some((i) => i.type === "tool_use");
      if (n) {
        if (s.some((i) => i.type !== "tool_result")) throw Error("The last message must contain only tool_result content if any is present");
        if (!d) throw Error("tool_result blocks are not matching any tool_use from the previous message");
      }
      if (d) {
        let i = new Set(l.filter((u) => u.type === "tool_use").map((u) => u.id)), c = new Set(s.filter((u) => u.type === "tool_result").map((u) => u.toolUseId));
        if (i.size !== c.size || ![...i].every((u) => c.has(u))) throw Error("ids of tool_result blocks and tool_use blocks from previous message do not match");
      }
    }
    return this.requestStream({ method: "sampling/createMessage", params: e }, import_chunk_hnhsk56h.z8r, t);
  }
  elicitInputStream(e, t) {
    let r = this._server.getClientCapabilities(), a = e.mode ?? "form";
    switch (a) {
      case "url": {
        if (!r?.elicitation?.url) throw Error("Client does not support url elicitation.");
        break;
      }
      case "form": {
        if (!r?.elicitation?.form) throw Error("Client does not support form elicitation.");
        break;
      }
    }
    let s = a === "form" && e.mode === void 0 ? { ...e, mode: "form" } : e;
    return this.requestStream({ method: "elicitation/create", params: s }, import_chunk_hnhsk56h.yor, t);
  }
  async getTask(e, t) {
    return this._server.getTask({ taskId: e }, t);
  }
  async getTaskResult(e, t, r) {
    return this._server.getTaskResult({ taskId: e }, t, r);
  }
  async listTasks(e, t) {
    return this._server.listTasks(e ? { cursor: e } : void 0, t);
  }
  async cancelTask(e, t) {
    return this._server.cancelTask({ taskId: e }, t);
  }
}
function ge(e, t, r) {
  if (!e) throw Error(`${r} does not support task creation (required for ${t})`);
  switch (t) {
    case "tools/call":
      if (!e.tools?.call) throw Error(`${r} does not support task creation for tools/call (required for ${t})`);
      break;
    default:
      break;
  }
}
function ye(e, t, r) {
  if (!e) throw Error(`${r} does not support task creation (required for ${t})`);
  switch (t) {
    case "sampling/createMessage":
      if (!e.sampling?.createMessage) throw Error(`${r} does not support task creation for sampling/createMessage (required for ${t})`);
      break;
    case "elicitation/create":
      if (!e.elicitation?.create) throw Error(`${r} does not support task creation for elicitation/create (required for ${t})`);
      break;
    default:
      break;
  }
}
class gor extends z {
  constructor(e, t) {
    super(t);
    if (this._serverInfo = e, this._loggingLevels = /* @__PURE__ */ new Map(), this.LOG_LEVEL_SEVERITY = new Map(import_chunk_hnhsk56h.G8r.options.map((r, a) => [r, a])), this.isMessageIgnored = (r, a) => {
      let s = this._loggingLevels.get(a);
      return s ? this.LOG_LEVEL_SEVERITY.get(r) < this.LOG_LEVEL_SEVERITY.get(s) : false;
    }, this._capabilities = t?.capabilities ?? {}, this._instructions = t?.instructions, this._jsonSchemaValidator = t?.jsonSchemaValidator ?? new U(), this.setRequestHandler(import_chunk_hnhsk56h.Nni, (r) => this._oninitialize(r)), this.setNotificationHandler(import_chunk_hnhsk56h.Fni, () => this.oninitialized?.()), this._capabilities.logging) this.setRequestHandler(import_chunk_hnhsk56h.$ni, async (r, a) => {
      let s = a.sessionId || a.requestInfo?.headers["mcp-session-id"] || void 0, { level: n } = r.params, o = import_chunk_hnhsk56h.G8r.safeParse(n);
      if (o.success) this._loggingLevels.set(s, o.data);
      return {};
    });
  }
  get experimental() {
    if (!this._experimental) this._experimental = { tasks: new J(this) };
    return this._experimental;
  }
  registerCapabilities(e) {
    if (this.transport) throw Error("Cannot register capabilities after connecting to transport");
    this._capabilities = K(this._capabilities, e);
  }
  setRequestHandler(e, t) {
    let a = I(e)?.method;
    if (!a) throw Error("Schema is missing a method literal");
    let s;
    if (P(a)) {
      let o = a;
      s = o._zod?.def?.value ?? o.value;
    } else {
      let o = a;
      s = o._def?.value ?? o.value;
    }
    if (typeof s !== "string") throw Error("Schema method literal must be a string");
    if (s === "tools/call") {
      let o = async (l, d) => {
        let i = b(import_chunk_hnhsk56h.JDt, l);
        if (!i.success) {
          let p = i.error instanceof Error ? i.error.message : String(i.error);
          throw new import_chunk_hnhsk56h.QE(import_chunk_hnhsk56h.lR.InvalidParams, `Invalid tools/call request: ${p}`);
        }
        let { params: c } = i.data, u = await Promise.resolve(t(l, d));
        if (c.task) {
          let p = b(import_chunk_hnhsk56h._or, u);
          if (!p.success) {
            let S = p.error instanceof Error ? p.error.message : String(p.error);
            throw new import_chunk_hnhsk56h.QE(import_chunk_hnhsk56h.lR.InvalidParams, `Invalid task creation result: ${S}`);
          }
          return p.data;
        }
        let f = b(import_chunk_hnhsk56h.v9o, u);
        if (!f.success) {
          let p = f.error instanceof Error ? f.error.message : String(f.error);
          throw new import_chunk_hnhsk56h.QE(import_chunk_hnhsk56h.lR.InvalidParams, `Invalid tools/call result: ${p}`);
        }
        return f.data;
      };
      return super.setRequestHandler(e, o);
    }
    return super.setRequestHandler(e, t);
  }
  assertCapabilityForMethod(e) {
    switch (e) {
      case "sampling/createMessage":
        if (!this._clientCapabilities?.sampling) throw Error(`Client does not support sampling (required for ${e})`);
        break;
      case "elicitation/create":
        if (!this._clientCapabilities?.elicitation) throw Error(`Client does not support elicitation (required for ${e})`);
        break;
      case "roots/list":
        if (!this._clientCapabilities?.roots) throw Error(`Client does not support listing roots (required for ${e})`);
        break;
      case "ping":
        break;
    }
  }
  assertNotificationCapability(e) {
    switch (e) {
      case "notifications/message":
        if (!this._capabilities.logging) throw Error(`Server does not support logging (required for ${e})`);
        break;
      case "notifications/resources/updated":
      case "notifications/resources/list_changed":
        if (!this._capabilities.resources) throw Error(`Server does not support notifying about resources (required for ${e})`);
        break;
      case "notifications/tools/list_changed":
        if (!this._capabilities.tools) throw Error(`Server does not support notifying of tool list changes (required for ${e})`);
        break;
      case "notifications/prompts/list_changed":
        if (!this._capabilities.prompts) throw Error(`Server does not support notifying of prompt list changes (required for ${e})`);
        break;
      case "notifications/elicitation/complete":
        if (!this._clientCapabilities?.elicitation?.url) throw Error(`Client does not support URL elicitation (required for ${e})`);
        break;
      case "notifications/cancelled":
        break;
      case "notifications/progress":
        break;
    }
  }
  assertRequestHandlerCapability(e) {
    if (!this._capabilities) return;
    switch (e) {
      case "completion/complete":
        if (!this._capabilities.completions) throw Error(`Server does not support completions (required for ${e})`);
        break;
      case "logging/setLevel":
        if (!this._capabilities.logging) throw Error(`Server does not support logging (required for ${e})`);
        break;
      case "prompts/get":
      case "prompts/list":
        if (!this._capabilities.prompts) throw Error(`Server does not support prompts (required for ${e})`);
        break;
      case "resources/list":
      case "resources/templates/list":
      case "resources/read":
        if (!this._capabilities.resources) throw Error(`Server does not support resources (required for ${e})`);
        break;
      case "tools/call":
      case "tools/list":
        if (!this._capabilities.tools) throw Error(`Server does not support tools (required for ${e})`);
        break;
      case "tasks/get":
      case "tasks/list":
      case "tasks/result":
      case "tasks/cancel":
        if (!this._capabilities.tasks) throw Error(`Server does not support tasks capability (required for ${e})`);
        break;
      case "ping":
      case "initialize":
        break;
    }
  }
  assertTaskCapability(e) {
    ye(this._clientCapabilities?.tasks?.requests, e, "Client");
  }
  assertTaskHandlerCapability(e) {
    if (!this._capabilities) return;
    ge(this._capabilities.tasks?.requests, e, "Server");
  }
  async _oninitialize(e) {
    let t = e.params.protocolVersion;
    return this._clientCapabilities = e.params.capabilities, this._clientVersion = e.params.clientInfo, { protocolVersion: import_chunk_hnhsk56h._1a.includes(t) ? t : import_chunk_hnhsk56h.Dni, capabilities: this.getCapabilities(), serverInfo: this._serverInfo, ...this._instructions && { instructions: this._instructions } };
  }
  getClientCapabilities() {
    return this._clientCapabilities;
  }
  getClientVersion() {
    return this._clientVersion;
  }
  getCapabilities() {
    return this._capabilities;
  }
  async ping() {
    return this.request({ method: "ping" }, import_chunk_hnhsk56h.m9o);
  }
  async createMessage(e, t) {
    if (e.tools || e.toolChoice) {
      if (!this._clientCapabilities?.sampling?.tools) throw Error("Client does not support sampling tools capability.");
    }
    if (e.messages.length > 0) {
      let r = e.messages[e.messages.length - 1], a = Array.isArray(r.content) ? r.content : [r.content], s = a.some((d) => d.type === "tool_result"), n = e.messages.length > 1 ? e.messages[e.messages.length - 2] : void 0, o = n ? Array.isArray(n.content) ? n.content : [n.content] : [], l = o.some((d) => d.type === "tool_use");
      if (s) {
        if (a.some((d) => d.type !== "tool_result")) throw Error("The last message must contain only tool_result content if any is present");
        if (!l) throw Error("tool_result blocks are not matching any tool_use from the previous message");
      }
      if (l) {
        let d = new Set(o.filter((c) => c.type === "tool_use").map((c) => c.id)), i = new Set(a.filter((c) => c.type === "tool_result").map((c) => c.toolUseId));
        if (d.size !== i.size || ![...d].every((c) => i.has(c))) throw Error("ids of tool_result blocks and tool_use blocks from previous message do not match");
      }
    }
    if (e.tools) return this.request({ method: "sampling/createMessage", params: e }, import_chunk_hnhsk56h.Uni, t);
    return this.request({ method: "sampling/createMessage", params: e }, import_chunk_hnhsk56h.z8r, t);
  }
  async elicitInput(e, t) {
    switch (e.mode ?? "form") {
      case "url": {
        if (!this._clientCapabilities?.elicitation?.url) throw Error("Client does not support url elicitation.");
        let a = e;
        return this.request({ method: "elicitation/create", params: a }, import_chunk_hnhsk56h.yor, t);
      }
      case "form": {
        if (!this._clientCapabilities?.elicitation?.form) throw Error("Client does not support form elicitation.");
        let a = e.mode === "form" ? e : { ...e, mode: "form" }, s = await this.request({ method: "elicitation/create", params: a }, import_chunk_hnhsk56h.yor, t);
        if (s.action === "accept" && s.content && a.requestedSchema) try {
          let o = this._jsonSchemaValidator.getValidator(a.requestedSchema)(s.content);
          if (!o.valid) throw new import_chunk_hnhsk56h.QE(import_chunk_hnhsk56h.lR.InvalidParams, `Elicitation response content does not match requested schema: ${o.errorMessage}`);
        } catch (n) {
          if (n instanceof import_chunk_hnhsk56h.QE) throw n;
          throw new import_chunk_hnhsk56h.QE(import_chunk_hnhsk56h.lR.InternalError, `Error validating elicitation response: ${n instanceof Error ? n.message : String(n)}`);
        }
        return s;
      }
    }
  }
  createElicitationCompletionNotifier(e, t) {
    if (!this._clientCapabilities?.elicitation?.url) throw Error("Client does not support URL elicitation (required for notifications/elicitation/complete)");
    return () => this.notification({ method: "notifications/elicitation/complete", params: { elicitationId: e } }, t);
  }
  async listRoots(e, t) {
    return this.request({ method: "roots/list", params: e }, import_chunk_hnhsk56h.Bni, t);
  }
  async sendLoggingMessage(e, t) {
    if (this._capabilities.logging) {
      if (!this.isMessageIgnored(e.level, t)) return this.notification({ method: "notifications/message", params: e });
    }
  }
  async sendResourceUpdated(e) {
    return this.notification({ method: "notifications/resources/updated", params: e });
  }
  async sendResourceListChanged() {
    return this.notification({ method: "notifications/resources/list_changed" });
  }
  async sendToolListChanged() {
    return this.notification({ method: "notifications/tools/list_changed" });
  }
  async sendPromptListChanged() {
    return this.notification({ method: "notifications/prompts/list_changed" });
  }
}
