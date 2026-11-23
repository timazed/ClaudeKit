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
var chunk_e6xyp9a5_exports = {};
__export(chunk_e6xyp9a5_exports, {
  BLi: () => BLi,
  LZl: () => LZl,
  l_s: () => l_s
});
module.exports = __toCommonJS(chunk_e6xyp9a5_exports);
var import_chunk_hnffg7ty = require("/$bunfs/root/chunk-hnffg7ty.js");
var oe = 4096, ae = 2e5, v = 5e7, Q = 2e5, se = 1e6, re = 64, j = /* @__PURE__ */ new Set(["area", "base", "basefont", "bgsound", "br", "col", "embed", "hr", "image", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"]), l_s = /* @__PURE__ */ new Map([["script", "script"], ["style", "raw"], ["xmp", "raw"], ["iframe", "raw"], ["noembed", "raw"], ["noframes", "raw"], ["noscript", "raw"], ["title", "escapable"], ["textarea", "escapable"], ["plaintext", "plain"]]), le = /* @__PURE__ */ new Set(["foreignobject", "desc", "title"]), ie = /* @__PURE__ */ new Set(["mi", "mo", "mn", "ms", "mtext"]), fe = /* @__PURE__ */ new Set(["applet", "caption", "html", "table", "td", "th", "marquee", "object", "template", "svg", "math", "foreignobject", "desc", "title", "mi", "mo", "mn", "ms", "mtext", "annotation-xml"]), ee = /* @__PURE__ */ new Set(["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "keygen", "li", "link", "listing", "main", "marquee", "menu", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "search", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp", "foreignobject", "desc", "mi", "mo", "mn", "ms", "mtext", "annotation-xml"]), me = /* @__PURE__ */ new Set(["b", "big", "blockquote", "body", "br", "center", "code", "dd", "div", "dl", "dt", "em", "embed", "font", "h1", "h2", "h3", "h4", "h5", "h6", "head", "hr", "i", "img", "li", "listing", "menu", "meta", "nobr", "ol", "p", "pre", "ruby", "s", "small", "span", "strong", "strike", "sub", "sup", "table", "tt", "u", "ul", "var"]), H = /* @__PURE__ */ new Set(["a", "b", "big", "code", "em", "font", "i", "nobr", "s", "small", "strike", "strong", "tt", "u"]), ue = 1024, de = /* @__PURE__ */ new Map([["li", /* @__PURE__ */ new Set(["ul", "ol"])], ["p", /* @__PURE__ */ new Set(["button"])]]), ce = /* @__PURE__ */ new Set(["body", "html"]), he = /* @__PURE__ */ new Set(["select", "input", "keygen", "caption", "tbody", "tfoot", "thead", "tr", "td", "th"]), I = /* @__PURE__ */ new Set(["caption", "col", "colgroup", "table", "tbody", "td", "tfoot", "th", "thead", "tr"]), pe = /* @__PURE__ */ new Set(["foreignobject", "desc", "mi", "mo", "mn", "ms", "mtext", "annotation-xml"]), ge = /* @__PURE__ */ new Set(["template", "html", "select", "frameset", "colgroup", "caption", "tbody", "thead", "tfoot", "tr", "td", "th"]), be = /* @__PURE__ */ new Set(["caption", "table", "tbody", "td", "tfoot", "th", "thead", "tr"]), Se = /* @__PURE__ */ new Set(["caption", "col", "colgroup", "frame", "frameset", "head", "tbody", "td", "tfoot", "th", "thead", "tr", "title"]);
function LZl(h) {
  return Te(h, { depth: oe, totalOpens: ae }).exceeded;
}
function BLi(h, i) {
  let n = 0, f = { ...i, attributeName(g, E) {
    n += te(g, E), f.isDone = n > v;
  } };
  return (0, import_chunk_hnffg7ty.E$n)(h, f), !f.isDone;
}
function Te(h, i) {
  let n = [], f = [], g = [], E = [], _ = [], a = [], b = 0, k = false, W = false, L = false, x = false, p = false, z = false, q = false, N = 0, G = 0, F = 0, A = 0, O = 0, d = 0, K = /* @__PURE__ */ new Set(), y = 0, S = 0, B = 0, U = 0, m = false, M = /* @__PURE__ */ new Map(), C = false, V = 0, P = "markup";
  function r() {
    C = true, Z.isDone = true;
  }
  function Y() {
    while (n.length > 0 && a.at(-1) === "f") {
      let o = n.pop();
      if (g.pop(), E.pop(), f.pop() === true && O > 0) {
        if (O--, a.at(-1) === "i") a.pop();
      }
      if (o === "svg" || o === "math") {
        if (A--, _.pop(), a.at(-1) === "f") a.pop();
      }
      if (x) N++;
    }
    x &&= a.length > 0;
  }
  function ne(o) {
    if (o === void 0) return false;
    return o.some((e) => {
      let u = e !== null && typeof e === "object" ? e.name : void 0;
      if (typeof u !== "string") return false;
      let s = u.toLowerCase();
      return s === "color" || s === "face" || s === "size";
    });
  }
  function R(o) {
    let e = a.at(-1);
    if (e === "f" || e === "i" && (be.has(o) || o === "select" && b > 0)) m = true, r();
  }
  let X = { onStartTag(o) {
    if (C) return;
    if (d += n.length + N + 1 + S, y++, i !== null && (d > v || y > Q)) {
      r();
      return;
    }
    let e = o.tagName;
    if (a.at(-1) === "f" && me.has(e) && (e !== "font" || ne(o.attrs))) Y();
    let u = false;
    if (a.at(-1) === "i" && I.has(e)) {
      d += n.length;
      let t = n.length - 1;
      while (t >= 0 && f[t] !== true) t--;
      for (t--; t >= 0 && !u; t--) u = I.has(n[t]) || n[t] === "template";
    }
    if (a.length > 0 && (b > 0 && he.has(e) || (a.at(-1) === "f" ? x || ge.has(e) : u))) {
      m = true, r();
      return;
    }
    let s = a.length === 0 || a.at(-1) === "i";
    if (s && I.has(e) && !L) d += n.length, L = n.includes("template");
    if (s && (e === "html" || e === "body")) {
      let t = p || !(n.length <= 2 && n.every((c) => c === "html" || c === "head"));
      for (let c of o.attrs ?? []) K.add((e === "html" ? "h:" : "b:") + c.name);
      if (t) {
        if (d += 8 * K.size, p && e === "html") m = true, r();
        else if (i !== null && d > v) r();
        return;
      }
    }
    if (A > 0 && (e === "mglyph" || e === "malignmark") || !s && b > 0 && (e === "script" || e === "textarea") || a.at(-1) === "f" && (e === "svg" || e === "math") && _.at(-1) !== e || s && k && (e === "svg" || e === "math") || e === "svg" && q || e === "math" && z) {
      m = true, r();
      return;
    }
    if (s && e === "col") {
      d += n.length;
      let t = n.length - 1;
      while (t >= 0 && n[t] !== "template" && !I.has(n[t])) t--;
      if (t >= 0 && n[t] === "template") {
        m = true, r();
        return;
      }
    }
    let w = s ? l_s.get(e) : void 0;
    if (w !== void 0 && (k || p || b > 0 && e !== "script")) {
      m = true, r();
      return;
    }
    if (w !== void 0) P = w;
    if (j.has(e) && s && !p) return;
    if (F++, (e === "svg" || e === "math") && o.selfClosing) return;
    if (!(o.selfClosing && !s)) {
      if (H.has(e)) {
        if (M.set(e, (M.get(e) ?? 0) + 1), S++, S > B) B = S;
        if (i !== null && S > ue) {
          r();
          return;
        }
      }
      if (n.push(e), n.length + N > G) G = n.length + N;
      let t = false, c = a.at(-1) === "f";
      if (e === "svg" || e === "math") A++, _.push(e), a.push("f");
      else if (e === "select") b++;
      else if (e === "frameset") k = true;
      else if (e === "template") d += n.length, W ||= n.some((T) => I.has(T)) || L && n.indexOf("template") < n.length - 1;
      else if (c) {
        let T = _.at(-1);
        if (T === "svg") t = le.has(e);
        else if (T === "math") t = ie.has(e) || e === "annotation-xml" && o.attrs?.some((l) => l.name.toLowerCase() === "encoding" && ["text/html", "application/xhtml+xml"].includes(l.value.toLowerCase())) === true;
        if (t) O++, a.push("i");
      }
      f.push(t), g.push(e === "svg" || e === "math" || c && !t), E.push(p && o.selfClosing);
    }
    if (i !== null && (n.length + N > i.depth || F > i.totalOpens)) r();
  }, onEndTag(o) {
    if (C) return;
    if (d += n.length + N + 1 + S, y++, i !== null && (d > v || y > Q)) {
      r();
      return;
    }
    let e = o.tagName;
    if (p && j.has(e)) {
      m = true, r();
      return;
    }
    if (a.at(-1) === "i" && e !== "p" && e !== "br" && !(n.at(-1) === e && f.at(-1) === true)) {
      for (let t = n.length - 1; t >= 0; t--) if ((g[t] || f[t] === true) && n[t] === e) {
        m = true, r();
        return;
      }
    }
    if (ce.has(e)) return;
    if (b > 0 && a.at(-1) === "f" && (e === "p" || e === "br")) {
      m = true, r();
      return;
    }
    if (b > 0 && !(n.at(-1) === e && (g.at(-1) === true || f.at(-1) === true)) && e !== "select" && e !== "option" && e !== "optgroup" && e !== "template" && e !== "script") {
      R(e);
      return;
    }
    if (a.at(-1) === "f" && (e === "p" || e === "br")) Y();
    let u = ee.has(e) && !pe.has(e), s = e === "template", w = de.get(e), J = Se.has(e) ? Math.max(0, n.length - 1) : s ? 0 : Math.max(0, n.length - re);
    for (let t = n.length - 1; t >= J; t--) {
      let c = n[t];
      if (c === e) {
        if (k && !s && n.lastIndexOf("frameset") > t) {
          m = true, r();
          return;
        }
        if (H.has(e)) {
          let l = M.get(e) ?? 0;
          if (l > 0) {
            if (M.set(e, l - 1), S > 0) S--;
          }
        }
        if (e === "form" && g[t] !== true) {
          n.splice(t, 1), f.splice(t, 1), g.splice(t, 1), E.splice(t, 1), U++;
          return;
        }
        let T = false;
        if (s && p) for (let l = t + 1; l < n.length && !T; l++) T = !j.has(n[l]);
        if (s && (W || k || T) && t < n.length - 1) {
          m = true, r();
          return;
        }
        for (let l = n.length - 1; l >= t; l--) {
          let D = n[l];
          if (x ||= l > t && a.at(-1) === "i" && (!s || H.has(D)), x) p = true, z ||= _.includes("svg"), q ||= _.includes("math");
          if (f[l] === true && O > 0) {
            if (O--, a.at(-1) === "i") a.pop();
          }
          if (D === "svg" || D === "math") {
            if (A > 0) A--;
            if (_.pop(), a.at(-1) === "f") a.pop();
          } else if (D === "select" && b > 0) b--;
        }
        if (x || E[t] === true || s && p && t < n.length - 1) N += n.length - t;
        n.length = t, f.length = t, g.length = t, E.length = t, x &&= a.length > 0;
        return;
      }
      if (!s && (fe.has(c) || w?.has(c) === true)) {
        R(e);
        return;
      }
      if (!u && ee.has(c)) {
        R(e);
        return;
      }
    }
    R(e);
  }, onComment(o) {
    if (V++, i !== null && V > se) r();
    if (C || A === 0 && !p || !o.data.startsWith("[CDATA[") || o.data.endsWith("]]")) return;
    let e = o.end, u = h.indexOf("]]>", e), s = u === -1 ? h.slice(e) : h.slice(e, u);
    if (/<[a-zA-Z!/?]/.test(s)) m = true, r();
  } }, Z = { doctype() {
  }, comment: (o, e) => X.onComment({ data: o, end: e }), startTag({ lowerName: o, attributes: e, closesItself: u }) {
    return P = "markup", X.onStartTag({ tagName: o, selfClosing: u, attrs: e && Array.from(e, ([s, w]) => ({ name: s, value: w })) }), P;
  }, endTag: (o) => X.onEndTag({ tagName: o.lowerName }), readsCdata: () => false, attributeName(o, e) {
    if (d += te(o, e), i !== null && d > v) r();
  } };
  return (0, import_chunk_hnffg7ty.E$n)(h, Z), { exceeded: C, maxDepth: G, totalOpens: F, maxFmtEstimate: B, formSplices: U, failClosed: m };
}
function te(h, i) {
  return i * (1 + (h.length >> 6));
}
