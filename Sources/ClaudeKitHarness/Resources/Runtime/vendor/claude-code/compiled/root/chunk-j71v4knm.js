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
var chunk_j71v4knm_exports = {};
__export(chunk_j71v4knm_exports, {
  NZl: () => NZl,
  WLi: () => WLi
});
module.exports = __toCommonJS(chunk_j71v4knm_exports);
var import_chunk_hnffg7ty = require("/$bunfs/root/chunk-hnffg7ty.js");
var x = /^[\t\n\f\r ]*html(?:[\t\n\f\r ]*$|[\t\n\f\r ]+(?:public[\t\n\f\r ]*(?:"([^"]*)"|'([^']*)')[\t\n\f\r ]*(?:$|"([^"]*)"|'([^']*)')|system[\t\n\f\r ]*(?:"([^"]*)"|'([^']*)')))/i, K = /^(?:\+\/\/silmaril\/\/dtd html pro v0r11 19970101\/\/|-\/\/(?:as|advasoft ltd)\/\/dtd html 3\.0 aswedit \+ extensions\/\/|-\/\/ietf\/\/dtd html(?: 2\.0(?: strict)?(?: level [12])?| 2\.1e| 3(?:\.0|\.2(?: final)?)?|(?: strict)?(?: level [0-3])?)\/\/|-\/\/metrius\/\/dtd metrius presentational\/\/|-\/\/microsoft\/\/dtd internet explorer [23]\.0 (?:html(?: strict)?|tables)\/\/|-\/\/netscape comm\. corp\.\/\/dtd (?:strict )?html\/\/|-\/\/o'reilly and associates\/\/dtd html (?:2\.0|extended(?: relaxed)? 1\.0)\/\/|-\/\/sq\/\/dtd html 2\.0 hotmetal \+ extensions\/\/|-\/\/softquad software\/\/dtd hotmetal pro 6\.0::19990601::extensions to html 4\.0\/\/|-\/\/softquad\/\/dtd hotmetal pro 4\.0::19971010::extensions to html 4\.0\/\/|-\/\/spyglass\/\/dtd html 2\.0 extended\/\/|-\/\/sun microsystems corp\.\/\/dtd hotjava (?:strict )?html\/\/|-\/\/w3c\/\/dtd (?:html (?:3 1995-03-24|3\.2(?: draft| final|s draft)?|4\.0 (?:frameset|transitional)|experimental (?:19960712|970421))|w3 html)\/\/|-\/\/w3o\/\/dtd w3 html 3\.0\/\/|-\/\/webtechs\/\/dtd mozilla html(?: 2\.0)?\/\/|(?:-\/\/w3o\/\/dtd w3 html strict 3\.0\/\/en\/\/|-\/w3c\/dtd html 4\.0 transitional\/en|html)$)/, V = /^-\/\/w3c\/\/dtd html 4\.01 (?:frameset|transitional)\/\//;
function y(t) {
  let i = x.exec(t);
  if (!i) return true;
  let s = (i[1] ?? i[2] ?? "").toLowerCase(), e = i[3] ?? i[4] ?? i[5] ?? i[6];
  return e?.toLowerCase() === "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd" || K.test(s) || e === void 0 && V.test(s);
}
var X = "mi mo mn ms mtext annotation-xml foreignobject desc title", g = `APPLET CAPTION HTML TABLE TD TH MARQUEE OBJECT TEMPLATE ${X}`, _ = "HTML TABLE TEMPLATE", j = (0, import_chunk_hnffg7ty.yre)(_), C = (0, import_chunk_hnffg7ty.yre)("HTML TBODY TFOOT THEAD TEMPLATE"), m = (0, import_chunk_hnffg7ty.yre)("HTML TR TEMPLATE"), L = ["H1", "H2", "H3", "H4", "H5", "H6"], H = "ADDRESS ARTICLE ASIDE BLOCKQUOTE CENTER DETAILS DIR DIV DL FIELDSET FIGCAPTION FIGURE FOOTER HEADER HGROUP MAIN MENU NAV OL SECTION SUMMARY UL", Q = (0, import_chunk_hnffg7ty.yre)(`${H} DIALOG P`), W = (0, import_chunk_hnffg7ty.yre)(`${H} DIALOG BUTTON LISTING PRE`), D = (0, import_chunk_hnffg7ty.yre)("BASE BASEFONT BGSOUND LINK META NOFRAMES SCRIPT STYLE TEMPLATE TITLE"), n = (0, import_chunk_hnffg7ty.yre)("CAPTION COL COLGROUP TBODY TD TFOOT TH THEAD TR"), w = `${g} ${H} ${[...L, ...D, ...n].join(" ")} AREA BODY BR BUTTON DD DT EMBED FORM FRAME FRAMESET HEAD HR IFRAME IMG INPUT LI LISTING NOEMBED NOSCRIPT P PARAM PLAINTEXT PRE SELECT SOURCE TEXTAREA TRACK WBR XMP`, v = (0, import_chunk_hnffg7ty.yre)("A B BIG CODE EM FONT I NOBR S SMALL STRIKE STRONG TT U"), z = (0, import_chunk_hnffg7ty.yre)("DD DT LI OPTGROUP OPTION P RB RP RT RTC"), q = (0, import_chunk_hnffg7ty.yre)(`${L.join(" ")} B BIG BLOCKQUOTE BODY BR CENTER CODE DD DIV DL DT EM EMBED HEAD HR I IMG LI LISTING MENU META NOBR OL P PRE RUBY S SMALL SPAN STRIKE STRONG SUB SUP TABLE TT U UL VAR`), b = (0, import_chunk_hnffg7ty.yre)("TABLE TBODY TFOOT THEAD TR"), J = (0, import_chunk_hnffg7ty.yre)("initial beforeHtml beforeHead head afterHead"), l = /* @__PURE__ */ new Map([["TD", "cell"], ["TH", "cell"], ["TR", "row"], ["TBODY", "section"], ["TFOOT", "section"], ["THEAD", "section"], ["CAPTION", "caption"], ["COLGROUP", "colgroup"], ["TABLE", "table"], ["BODY", "body"], ["HEAD", "head"], ["FRAMESET", "frameset"], ["HTML", "afterHead"]]), [p, Z, F, k, R, tt, st, U, it, S] = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512], et = nt([g, `${g} OL UL`, `${g} BUTTON`, _, w, w.replace(/ (?:ADDRESS|DIV|P)\b/g, ""), `${[...l.keys()].join(" ")} SELECT TEMPLATE`, L.join(" "), "HTML TABLE"]), ht = 1e4, ot = 2e6, rt = 15e8, at = 100;
function NZl(t) {
  let i = new I(false);
  return (0, import_chunk_hnffg7ty.E$n)(t, i), i.finish(), i.document;
}
function WLi(t) {
  let i = new I(true);
  return (0, import_chunk_hnffg7ty.E$n)(t, i, true), i.finish(), i.document.childNodes[0].childNodes[0];
}
class I {
  isLegacy;
  document = new import_chunk_hnffg7ty.U8e("#document");
  #t = "initial";
  #ht = "body";
  #S = [];
  #h = [];
  #i = this.document;
  #N = /* @__PURE__ */ new Map();
  #T = [];
  #_ = /* @__PURE__ */ new Map();
  #b;
  #f;
  #I;
  #lt = 0;
  #Tt = 0;
  #B;
  #R;
  #Y;
  #ot = true;
  #$;
  #x = "markup";
  #u = false;
  #o = true;
  #y = false;
  #Q = false;
  constructor(t) {
    this.isLegacy = t;
    if (this.#b = t ? /[^\t\n\f\r ]/ : /[^\t\n\f ]/, this.#f = t ? k : it, this.#I = t ? "MENUITEM" : "", t) this.#L("HTML"), this.#L("BODY"), this.#t = "body";
  }
  readsCdata() {
    return this.#P() && (this.isLegacy || !O(this.#i));
  }
  #P() {
    return (this.#i.namespace ?? "html") !== "html";
  }
  doctype(t, i) {
    if (this.#C(), this.#t === "initial") this.#ot = !i || y(t), this.#t = "beforeHtml";
  }
  comment() {
    this.#C();
    let t = new import_chunk_hnffg7ty.U8e("#comment");
    if (this.#P()) this.#H(t);
    else if (this.#t === "afterBody") N(this.#h[0], t);
    else if (this.#t.endsWith("Html")) N(this.document, t);
    else this.#H(t);
  }
  finish() {
    this.#C(), this.#Y = void 0;
    for (; ; ) if (this.#t === "text") this.#l("");
    else if (J.has(this.#t)) this.#O();
    else if (this.#a("TEMPLATE")) this.#v("TEMPLATE");
    else return;
  }
  #O() {
    if (this.#t === "initial") this.#t = "beforeHtml";
    else if (this.#t === "beforeHtml") this.#L("HTML"), this.#t = "beforeHead";
    else if (this.#t === "beforeHead") this.#L("HEAD"), this.#B = this.#i, this.#t = "head";
    else if (this.#t === "head") this.#n(), this.#t = "afterHead";
    else this.#L("BODY"), this.#t = "body";
  }
  text(t) {
    if (this.#y) {
      if (this.#y = false, t[0] === `
` && !(t = t.slice(1))) return;
    }
    if (this.#P() && !O(this.#i)) {
      this.#o &&= !this.#b.test(t.replaceAll("\0", ""));
      let i = this.#Q ? t.replace(/^\0+/, "") : t;
      return this.#Q = !this.isLegacy && t.endsWith("\0"), i ? this.#p(i.replace(this.isLegacy ? /\0/g : /\0+/g, "\uFFFD")) : void 0;
    }
    switch (this.#t) {
      case "initial":
      case "beforeHtml":
      case "beforeHead":
      case "head":
      case "afterHead": {
        let i = t.replace(/^[\t\n\f ]+/, "");
        if (i !== t && /^(?:h|afterH)ead/.test(this.#t)) this.#p(t.slice(0, t.length - i.length));
        if (i) this.#O(), this.text(i);
        return;
      }
      case "frameset":
      case "afterFrameset":
      case "afterFramesetHtml":
        if (t = t.replace(/[^\t\n\f ]+/g, ""), t && this.#t === "afterFramesetHtml") this.#m(t);
        else if (t) this.#p(t);
        return;
      case "text":
        return this.#p(t);
      case "table":
      case "section":
      case "row":
        if (b.has(this.#i.nodeName)) this.#$ = (this.#$ ?? "") + t.replaceAll("\0", "");
        else this.#u = true, this.#m(t), this.#u = false;
        return;
      case "colgroup": {
        let i = t.slice((t + "_").search(this.#b));
        if (i !== t) this.#p(t.slice(0, t.length - i.length));
        if (i && this.#it()) this.text(i);
        else if (t = i.replace(/[^\t\n\f ]+/g, "")) this.#p(t);
        return;
      }
      case "select":
      case "selectInTable":
        return t = t.replaceAll("\0", ""), t ? this.#p(t) : void 0;
      case "afterBody":
      case "afterHtml":
        if (this.#b.test(t)) this.#t = "body";
        return this.#m(t);
      default:
        this.#m(t);
    }
  }
  #C() {
    this.#y = this.#Q = false;
    let t = this.#$;
    if (t !== void 0) {
      if (this.#$ = void 0, this.#b.test(t)) this.#u = true, this.#m(t), this.#u = false;
      else if (t || this.isLegacy) this.#p(t);
    }
  }
  startTag({ name: t, attributes: i, closesItself: s, start: e, end: h }) {
    this.#C(), this.#x = "markup", this.#Y = void 0;
    let o = new import_chunk_hnffg7ty.U8e(t, "", i, "html");
    if (t === "SCRIPT") o.startTagAt = e, o.textAt = h;
    let { namespace: r = "html", nodeName: a } = this.#i;
    if (r === "html" || r === "math" && a === "annotation-xml" && t === "SVG" || O(this.#i) && (r === "svg" || a === "annotation-xml" || t !== "MGLYPH" && t !== "MALIGNMARK")) this.#r(o, s);
    else if (q.has(t) || t === "FONT" && ["color", "face", "size"].some((c) => o.getAttribute(c) !== null)) {
      do
        this.#n();
      while (this.#P() && !O(this.#i));
      this.#r(o, s);
    } else this.#ft(o, r, s);
    return this.#x;
  }
  endTag({ name: t, lowerName: i, start: s }) {
    if (this.#C(), this.#Y = t === "SCRIPT" ? s : void 0, !this.isLegacy && (t === "P" || t === "BR")) {
      while (this.#P() && !O(this.#i)) this.#n();
      return this.#l(t);
    }
    this.#rt(t, i);
  }
  #rt(t, i) {
    let s = this.#P() && i, e = s && this.#a(s) && this.#g(S, s);
    if (e && e.namespace !== "html") this.#G(e);
    else this.#l(t);
  }
  #r(t, i = false) {
    let s = t.nodeName;
    switch (this.#t) {
      case "initial":
      case "beforeHtml":
        if (s === "HTML") return this.#t = "beforeHead", this.#s(t);
        return this.#O(), this.#r(t, i);
      case "beforeHead":
        if (s === "HTML") break;
        if (s === "HEAD") return this.#t = "head", this.#s(this.#B = t);
        return this.#O(), this.#r(t, i);
      case "head":
        if (s === "NOSCRIPT") return this.#M(t, "raw");
        if (s === "HTML" || s === "HEAD" || D.has(s)) break;
        return this.#O(), this.#r(t, i);
      case "afterHead":
        if (s === "BODY" || s === "FRAMESET") return this.#o &&= s !== "BODY", this.#t = l.get(s), this.#s(t);
        if (D.has(s)) return this.#h.push(this.#B), this.#j(this.#B, 1), this.#w(t, i), this.#et(this.#B);
        if (s === "HTML" || s === "HEAD") break;
        return this.#O(), this.#r(t, i);
      case "frameset":
      case "afterFrameset":
      case "afterFramesetHtml":
        if (s === "HTML" || s === "NOFRAMES") break;
        if (this.#t === "frameset" && s === "FRAMESET") this.#s(t);
        else if (this.#t === "frameset" && s === "FRAME") this.#A(t);
        return;
      case "table":
        return this.#J(t, i);
      case "section":
        if (s === "TR" || s === "TD" || s === "TH") {
          if (this.#U(C), this.#t = "row", s === "TR") return this.#s(t);
          return this.#L("TR"), this.#r(t);
        }
        if (!n.has(s)) return this.#J(t, i);
        return this.#Z() ? this.#r(t) : void 0;
      case "row":
        if (s === "TD" || s === "TH") return this.#U(m), this.#s(t), this.#t = "cell", void this.#T.push(null);
        if (!n.has(s)) return this.#J(t, i);
        return this.#tt() ? this.#r(t) : void 0;
      case "caption":
      case "cell":
        if (!n.has(s)) break;
        return this.#st() ? this.#r(t) : void 0;
      case "colgroup":
        if (s === "HTML" || s === "TEMPLATE") break;
        if (s === "COL") return this.#A(t);
        return this.#it() ? this.#r(t, i) : void 0;
      case "selectInTable":
      case "select":
        return this.#Ot(t);
      case "template":
        if (D.has(s)) break;
        return this.#t = s === "COL" ? "colgroup" : s === "TR" ? "section" : s === "TD" || s === "TH" ? "row" : n.has(s) ? "table" : "body", this.#S[this.#S.length - 1] = this.#t, this.#r(t, i);
      case "afterBody":
      case "afterHtml":
        if (s !== "HTML") this.#t = "body";
        break;
      case "body":
      case "text":
    }
    this.#w(t, i);
  }
  #l(t) {
    switch (this.#t) {
      case "initial":
        return this.#O(), this.#l(t);
      case "beforeHtml":
      case "beforeHead":
      case "head":
      case "afterHead":
        if (t === "HEAD" && this.#t === "head") this.#O();
        else if (t === "TEMPLATE") this.#v(t);
        else if (["BODY", "BR", "HTML"].includes(t) || t === "HEAD" && this.#t !== "afterHead") this.#O(), this.#l(t);
        return;
      case "frameset":
        if (t === "FRAMESET" && this.#h.length > 1) {
          if (this.#n(), this.#i.nodeName !== "FRAMESET") this.#t = "afterFrameset";
        }
        return;
      case "afterFrameset":
      case "afterFramesetHtml":
        if (t === "HTML") this.#t = "afterFramesetHtml";
        return;
      case "text":
        this.#n(), this.#t = this.#ht;
        return;
      case "table":
        return this.#V(t);
      case "section":
        if (l.get(t) === "section") return void (this.#e(t, this.#f) && this.#Z());
        if (t !== "TABLE") return this.#V(t);
        return this.#Z() ? this.#l(t) : void 0;
      case "row":
        if (t === "TR") return void this.#tt();
        if (t === "TABLE" || l.get(t) === "section") {
          let i = t !== "TABLE" && this.#e(t, this.#f);
          return (i || t === "TABLE" || !this.isLegacy) && this.#tt(i && !this.isLegacy) ? this.#l(t) : void 0;
        }
        return this.#V(t);
      case "caption":
        if (t === "CAPTION" || t === "TABLE") return this.#st() && t === "TABLE" ? this.#l(t) : void 0;
        if (n.has(t) || t === "BODY" || t === "HTML") return;
        break;
      case "cell":
        if (t === "TD" || t === "TH") {
          if (this.#e(t, this.#f)) this.#c(t), this.#K(), this.#t = "row";
          return;
        }
        if (b.has(t)) {
          if (this.#e(t, this.#f) && this.#st()) this.#l(t);
          return;
        }
        if (n.has(t) || t === "BODY" || t === "HTML") return;
        break;
      case "colgroup":
        if (t === "TEMPLATE") break;
        if (t !== "COL" && this.#it() && t !== "COLGROUP") this.#l(t);
        return;
      case "selectInTable":
      case "select":
        return this.#pt(t);
      case "template":
        if (t === "TEMPLATE") break;
        return;
      case "afterBody":
        if (t === "HTML") {
          this.#t = this.isLegacy ? "afterBody" : "afterHtml";
          return;
        }
        this.#t = "body";
        break;
      case "afterHtml":
        this.#t = "body";
        break;
      case "body":
    }
    this.#v(t);
  }
  #m(t) {
    if (t = t.replaceAll("\0", ""), t) this.#F(), this.#p(t), this.#o &&= !this.#b.test(t);
  }
  #w(t, i) {
    let s = t.nodeName;
    if (Q.has(s) || s === "SEARCH" && !this.isLegacy) {
      if (this.#E(), s === "MENU") this.#d(this.#I);
      return this.#s(t);
    }
    if (v.has(s)) return this.#Et(t);
    if (n.has(s)) return;
    switch (s) {
      case "FRAME":
      case "HEAD":
        return;
      case "HTML":
      case "BODY": {
        let e = this.#h[s === "HTML" ? 0 : 1];
        if (e?.nodeName === s && !this.#a("TEMPLATE")) this.#o &&= s === "HTML", t.attributes?.forEach((h, o) => {
          if (e.attributes ??= /* @__PURE__ */ new Map(), !e.attributes.has(o)) e.attributes.set(o, h);
        });
        return;
      }
      case "FRAMESET": {
        let e = this.#h[1];
        if (this.#o && e?.nodeName === "BODY") {
          if (this.isLegacy) throw TypeError("A frameset took the place of the body");
          P(e), this.#G(e), this.#s(t), this.#t = "frameset";
        }
        return;
      }
      case "BASE":
      case "BASEFONT":
      case "BGSOUND":
      case "LINK":
      case "META":
      case "PARAM":
      case "SOURCE":
      case "TRACK":
        return this.#A(t);
      case "TITLE":
        return this.#M(t, "escapable");
      case "SCRIPT":
        return this.#M(t, "script");
      case "NOFRAMES":
      case "NOEMBED":
      case "STYLE":
        return this.#M(t, "raw");
      case "XMP":
      case "IFRAME":
        if (s === "XMP") this.#E(), this.#F();
        return this.#o = false, this.#M(t, "raw");
      case "TEXTAREA":
        return this.#o = false, this.#y = true, this.#M(t, "escapable");
      case "PLAINTEXT":
        return this.#E(), this.#x = "plain", this.#s(t);
      case "TEMPLATE":
        t.content = new import_chunk_hnffg7ty.U8e("#document-fragment"), this.#s(t), this.#T.push(null), this.#o = false, this.#S.push(this.#t = "template");
        return;
      case "H1":
      case "H2":
      case "H3":
      case "H4":
      case "H5":
      case "H6":
        return this.#E(), this.#d(...L), this.#s(t);
      case "PRE":
      case "LISTING":
        return this.#E(), this.#y = true, this.#o = false, this.#s(t);
      case "FORM":
        if (this.#a("TEMPLATE")) this.#E(), this.#s(t);
        else if (!this.#R) this.#E(), this.#s(this.#R = t);
        return;
      case "LI":
      case "DD":
      case "DT": {
        this.#o = false;
        let e = s === "LI" ? [s] : ["DD", "DT"];
        if (e.some((h) => this.#a(h))) {
          let h = this.#g(tt).nodeName;
          if (e.includes(h)) this.#c(h);
        }
        return this.#E(), this.#s(t);
      }
      case "TABLE":
        if (!this.#ot) this.#E();
        return this.#o = false, this.#t = "table", this.#s(t);
      case "HR":
        return this.#E(), this.#d(this.#I), this.#o = false, this.#A(t);
      case "IMAGE":
        return this.#r(new import_chunk_hnffg7ty.U8e("IMG", "", t.attributes, "html"));
      case "RB":
      case "RTC":
      case "RP":
      case "RT":
        if (this.#e("RUBY")) this.#dt(s === "RP" || s === "RT" ? "RTC" : "");
        return this.#s(t);
      case "BUTTON":
        if (this.#e(s)) this.#c(s);
        this.#o = false;
        break;
      case "OPTGROUP":
      case "OPTION":
        this.#d("OPTION");
        break;
      case "MENUITEM":
        this.#d(this.#I);
        break;
      case "NOSCRIPT":
        if (!this.isLegacy) return this.#M(t, "raw");
    }
    switch (this.#F(), s) {
      case "SVG":
      case "MATH":
        return this.#ft(t, s === "SVG" ? "svg" : "math", i);
      case "AREA":
      case "BR":
      case "EMBED":
      case "IMG":
      case "INPUT":
      case "KEYGEN":
      case "WBR":
        return this.#o &&= G(t), this.#A(t);
      case "APPLET":
      case "MARQUEE":
      case "OBJECT":
        this.#T.push(null), this.#o = false;
        break;
      case "SELECT":
        this.#o = false, this.#t = /table|caption|section|row|cell/.test(this.#t) ? "selectInTable" : "select";
    }
    this.#s(t);
  }
  #v(t) {
    if (v.has(t)) return this.#W(t);
    switch (t) {
      case "BODY":
      case "HTML":
        if (this.#e("BODY")) this.#t = t === "BODY" || this.isLegacy ? "afterBody" : "afterHtml";
        return;
      case "TEMPLATE":
        if (this.#a(t)) this.#c(t), this.#K(), this.#S.pop(), this.#k();
        return;
      case "FORM": {
        if (this.#a("TEMPLATE")) return this.#e(t) ? this.#c(t) : void 0;
        let s = this.#R;
        if (this.#R = void 0, s && (this.isLegacy ? s.isOpen && this.#z(s) >= 0 : this.#e(t))) this.#dt(), this.#et(s);
        return;
      }
      case "P":
        if (!this.#e(t, F)) this.#L("P");
        return this.#c(t);
      case "LI":
        return this.#e(t, Z) ? this.#c(t) : void 0;
      case "BR":
        return this.#w(new import_chunk_hnffg7ty.U8e(t, "", void 0, "html"), false);
      case "H1":
      case "H2":
      case "H3":
      case "H4":
      case "H5":
      case "H6":
        if (L.some((s) => this.#a(s))) {
          let s = this.#g(p | U);
          if (s.stops & U) this.#G(s);
        }
        return;
      case "APPLET":
      case "MARQUEE":
      case "OBJECT":
        if (this.#e(t)) this.#c(t), this.#K();
        return;
    }
    if (!(W.has(t) || t === "DD" || t === "DT" || t === "SEARCH" && !this.isLegacy)) this.#at(t);
    else if (this.#e(t)) this.#c(t);
  }
  #at(t) {
    let i = (0, import_chunk_hnffg7ty.k$n)(t), s = this.#a(t) && this.#g(R, t);
    if (!this.isLegacy && this.#a(i.toLowerCase())) {
      let e = this.#N.get(t), h = this.#N.get(i.toLowerCase()), o = this.#h.findLastIndex((r) => r.stops & R || r.tally === e || r.tally === h && r.tagName === i);
      this.#D(this.#h.length - o), s = this.#h[o];
    }
    if (s && (s.nodeName === t || !this.isLegacy && s.tagName === i)) this.#G(s);
  }
  #Et(t) {
    let i = t.nodeName, s = i === "A" && this.#nt(i);
    if (s) this.#W(i), T(this.#T, s), this.#et(s);
    if (this.#F(), i === "NOBR" && this.#e(i)) this.#W(i), this.#F();
    this.#s(t);
    let e = this.#T, h = t.likeness = this.#ut(t), o = e.length - 1;
    for (let r = 0; e[o]; o--) if (e[o].likeness === h && ++r === 3) {
      e.splice(o, 1);
      break;
    }
    this.#D(e.length - o), e.push(t);
  }
  #W(t) {
    let i = this.#h, s = this.#T;
    if (this.isLegacy && this.#i.nodeName === t && s.lastIndexOf(this.#i) < 0) return void this.#n();
    for (let e = 0; e < 8; e++) {
      let h = this.#nt(t);
      if (!h) return this.#at(t);
      if (!h.isOpen) return T(s, h);
      let o = this.isLegacy ? this.#z(h) : this.#e(t) ? this.#z(h, 0) : -1;
      if (o < 0) return;
      if (o === 0) return this.#G(h), T(s, h);
      let r = i.lastIndexOf(h, o), a = i[o], M = h, c = a;
      for (let d = o - 1, B = 1; d > r; d--, B++) {
        let A = i[d], E = s.lastIndexOf(A);
        if (this.#D(s.length - E), E < 0 || B > 3) {
          s.splice(E, E < 0 ? 0 : 1), A.isOpen = false, A.tally.open--;
          continue;
        }
        let u = this.#q(A);
        if (s[E] = i[d] = u, u.isOpen = true, c === a) M = u;
        P(c), N(u, c), c = u;
      }
      P(c), this.#H(c, i[r - 1]);
      let f = this.#q(h);
      f.childNodes = a.childNodes;
      for (let d of f.childNodes) d.parentNode = f;
      a.childNodes = [], N(a, f), s.splice(s.lastIndexOf(M) + (this.isLegacy ? 0 : 1), 0, f), T(s, h), f.isOpen = true, h.isOpen = false;
      let Y = i.slice(r, o + 1).filter((d) => d.isOpen);
      if (i.splice(r, o + 1 - r, ...Y, f), !this.isLegacy) this.#i = i.at(-1);
    }
  }
  #nt(t) {
    let i = this.#T, s = this.#N.get(t), e = i.length - 1;
    while (i[e] && i[e].tally !== s) e--;
    return this.#D(i.length - e), i[e];
  }
  #z(t, i = p) {
    let s = this.#h, e = 0, h = s.length - 1;
    for (; s[h] !== t && !(s[h].stops & i); h--) if (s[h].stops & R) e = h;
    return this.#D(s.length - h), s[h] === t ? e : -1;
  }
  #F() {
    let t = this.#T, i = t.length;
    while (t[i - 1]?.isOpen === false) i--;
    for (; i < t.length; i++) this.#s(t[i] = this.#q(t[i]));
  }
  #q({ nodeName: t, attributes: i, tally: s, stops: e, likeness: h }) {
    if (this.#D(at), !(this.isLegacy && this.#a("TEMPLATE")) && ++this.#lt > ot) throw RangeError("Too many formatting elements are left open");
    let o = new import_chunk_hnffg7ty.U8e(t, "", i, "html");
    return o.tally = s, o.stops = e, o.likeness = h, o;
  }
  #ut({ nodeName: t, attributes: i = /* @__PURE__ */ new Map() }) {
    if (this.isLegacy && [...i.values()].includes("")) return NaN;
    let s = [...i.keys()].sort().reduce((e, h) => `${e}\0${h}\0${i.get(h)}`, t);
    if (!this.#_.has(s)) this.#_.set(s, this.#_.size);
    return this.#_.get(s);
  }
  #K() {
    while (this.#T.pop()) ;
  }
  #J(t, i) {
    let s = t.nodeName;
    if (n.has(s)) {
      if (this.#U(j), s === "COL" || s === "TD" || s === "TH" || s === "TR") return this.#L(s === "COL" ? "COLGROUP" : "TBODY"), this.#k(), this.#r(t);
      if (s === "CAPTION") this.#T.push(null);
      this.#s(t), this.#k();
    } else if (s === "TABLE") {
      if (this.#e(s, this.#f)) this.#V(s), this.#r(t);
    } else if (s === "FORM") {
      if (!this.#R && !this.#a("TEMPLATE")) this.#A(this.#R = t);
    } else if (G(t)) this.#A(t);
    else this.#u = !["STYLE", "SCRIPT", "TEMPLATE"].includes(s), this.#w(t, i), this.#u = false;
  }
  #V(t) {
    if (t === "TABLE") {
      if (this.#e(t, this.#f)) this.#c(t), this.#k();
    } else if (!n.has(t) && t !== "BODY" && t !== "HTML") this.#u = true, this.#v(t), this.#u = false;
  }
  #Z() {
    let t = ["TBODY", "TFOOT", "THEAD"].some((i) => this.#e(i, this.#f));
    if (t) this.#U(C), this.#n(), this.#t = "table";
    return t;
  }
  #tt(t = false) {
    let i = t || this.#e("TR", this.#f);
    if (i) this.#U(m), this.#n(), this.#t = "section";
    return i;
  }
  #st() {
    let t = this.#t === "cell", i = t ? ["TD", "TH"] : ["CAPTION"], s = i.some((e) => this.#e(e, this.#f));
    if (s) {
      while (!i.includes(this.#n().nodeName)) ;
      this.#K(), this.#t = t ? "row" : "table";
    }
    return s;
  }
  #it() {
    let t = this.#d("COLGROUP");
    if (t) this.#t = "table";
    return t;
  }
  #Ot(t) {
    let i = t.nodeName;
    if (i === "HR" && !this.isLegacy) this.#d("OPTION"), this.#d("OPTGROUP"), this.#A(t);
    else if (i === "OPTION" || i === "OPTGROUP") {
      if (this.#d("OPTION"), i === "OPTGROUP") this.#d(i);
      this.#s(t);
    } else if (["HTML", "SCRIPT", "TEMPLATE"].includes(i)) this.#w(t, false);
    else if (i === "SELECT") this.#X();
    else if ((["INPUT", "KEYGEN", "TEXTAREA"].includes(i) || this.#ct(i)) && this.#X()) this.#r(t);
  }
  #pt(t) {
    if (t === "OPTION" || t === "OPTGROUP") {
      if (this.#h.at(-2).nodeName === t) this.#d("OPTION");
      this.#d(t);
    } else if (t === "TEMPLATE") this.#v(t);
    else if (t === "SELECT") this.#X();
    else if (this.#ct(t) && this.#e(t, this.#f) && this.#X()) if (this.isLegacy) this.#l(t);
    else this.#rt(t, t.toLowerCase());
  }
  #ct(t) {
    return this.#t === "selectInTable" && l.has(t) && t !== "COLGROUP" && t !== "BODY" && t !== "HEAD" && t !== "FRAMESET" && t !== "HTML";
  }
  #X() {
    let t = this.#h.findLast((i) => !i.nodeName.startsWith("OPT")).nodeName === "SELECT";
    if (t) this.#c("SELECT"), this.#k();
    return t;
  }
  #k() {
    let t = this.#g(st).nodeName;
    if (t === "SELECT") this.#t = this.#g(k).nodeName === "TABLE" ? "selectInTable" : "select";
    else this.#t = l.get(t) ?? this.#S.at(-1);
  }
  #a(t) {
    return !!this.#N.get(t)?.open;
  }
  #e(t, i = p) {
    return this.#a(t) && this.#g(i, t).nodeName === t;
  }
  #g(t, i = "") {
    let s = this.#h, e = this.#N.get(i), h = s.length - 1;
    while (!(s[h].stops & t) && s[h].tally !== e) h--;
    return this.#D(s.length - h), s[h];
  }
  #D(t) {
    if ((this.#Tt += t) > rt) throw RangeError("The tags take too long to match");
  }
  #E() {
    if (this.#e("P", F)) this.#c("P");
  }
  #c(t) {
    while (this.#n().nodeName !== t) ;
  }
  #dt(t = "") {
    this.#i = this.#h.at(-1);
    while (this.#i.nodeName !== t && (z.has(this.#i.nodeName) || this.#i.nodeName === this.#I)) this.#n();
  }
  #U(t) {
    while (!t.has(this.#i.nodeName)) this.#n();
  }
  #G(t) {
    while (this.#n() !== t) ;
  }
  #d(...t) {
    return t.includes(this.#i.nodeName) && !!this.#n();
  }
  #n() {
    let t = this.#h.pop();
    if (t.textAt) t.endTagAt = this.#Y;
    return this.#j(t, -1), t;
  }
  #et(t) {
    if (t.isOpen) T(this.#h, t), this.#j(t, -1);
  }
  #s(t) {
    this.#H(t);
    let i = t.namespace === "html" ? t.nodeName : t.nodeName.toLowerCase();
    if (t.tally = this.#N.get(i), !t.tally) this.#N.set(i, t.tally = { open: 0 });
    if (t.stops = ct(t), this.#h.push(t) > ht && this.isLegacy && !this.#a("TEMPLATE")) throw RangeError("The elements are nested too deeply");
    this.#j(t, 1);
  }
  #j(t, i) {
    t.isOpen = i > 0, this.#i = this.#h.at(-1), t.tally.open += i;
  }
  #L(t) {
    this.#s(new import_chunk_hnffg7ty.U8e(t, "", void 0, "html"));
  }
  #ft({ nodeName: t, attributes: i, startTagAt: s, textAt: e }, h, o) {
    let r = new import_chunk_hnffg7ty.U8e((0, import_chunk_hnffg7ty.k$n)(t), "", i, h);
    if (e) r.startTagAt = s, r.textAt = e;
    if (this.#s(r), o) this.#n();
  }
  #A(t) {
    this.#H(t), this.#i = this.#h.at(-1);
  }
  #M(t, i) {
    this.#s(t), this.#x = i, this.#ht = this.#t, this.#t = "text";
  }
  #p(t) {
    this.#H(new import_chunk_hnffg7ty.U8e("#text", t));
  }
  #H(t, i = this.#i) {
    let s = i, e;
    if (this.#u && b.has(i.nodeName)) {
      if (s = this.#h.findLast(({ nodeName: a }) => a === "TABLE" || a === "TEMPLATE"), s.nodeName === "TABLE") e = s, s = s.parentNode;
    }
    if (this.isLegacy && this.#a("TEMPLATE")) {
      t.parentNode = s;
      return;
    }
    s = s.content ?? s;
    let h = s.childNodes, o = e ? h.lastIndexOf(e) : h.length, r = h[o - 1];
    if (t.nodeName === "#text" && r?.nodeName === "#text") r.data += t.data;
    else t.parentNode = s, h.splice(o, 0, t);
  }
}
function nt(t) {
  let i = /* @__PURE__ */ new Map();
  return t.forEach((s, e) => {
    for (let h of s.split(" ")) i.set(h, (i.get(h) ?? 0) | 1 << e);
  }), i;
}
function ct({ nodeName: t, namespace: i }) {
  let s = et.get(t) ?? 0;
  return i === "html" ? s | S : i === "svg" === /^[fdt]/.test(t) ? s : 0;
}
function O(t) {
  return t.nodeName === "annotation-xml" && t.namespace === "math" ? /^(?:text\/html|application\/xhtml\+xml)$/i.test(t.getAttribute("encoding") ?? "") : (t.stops & (S | p)) === p;
}
function G(t) {
  return t.nodeName === "INPUT" && /^hidden$/i.test(t.getAttribute("type") ?? "");
}
function N(t, i) {
  i.parentNode = t, t.childNodes.push(i);
}
function P(t) {
  if (t.parentNode) T(t.parentNode.childNodes, t), t.parentNode = null;
}
function T(t, i) {
  let s = t.lastIndexOf(i);
  if (s >= 0) t.splice(s, 1);
}
