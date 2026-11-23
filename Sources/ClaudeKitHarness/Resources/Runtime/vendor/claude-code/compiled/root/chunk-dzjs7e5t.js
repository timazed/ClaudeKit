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
var chunk_dzjs7e5t_exports = {};
__export(chunk_dzjs7e5t_exports, {
  parse: () => Vt
});
module.exports = __toCommonJS(chunk_dzjs7e5t_exports);
var xt = new RegExp("\\p{ID_Start}", "u"), bt = /[\p{ID_Continue}\u200c\u200d]/u;
function u(t) {
  if (t < 128) return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t === 36 || t === 95;
  return t <= 1114111 && xt.test(String.fromCodePoint(t));
}
function y(t) {
  if (t < 128) return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || t === 36 || t === 95;
  return t <= 1114111 && bt.test(String.fromCodePoint(t));
}
function v(t) {
  return t === 10 || t === 13 || t === 8232 || t === 8233;
}
function d(t) {
  return t >= 48 && t <= 57;
}
function g(t) {
  if (t >= 97) return t - 87;
  if (t >= 65) return t - 55;
  return d(t) ? t - 48 : 99;
}
function tt(t, e) {
  let s = 1, i = 0, r = 0;
  for (let n = 0; n < e; n++) {
    let a = t.charCodeAt(n);
    if (v(a)) s += a === 10 && r === 13 ? 0 : 1, i = n + 1;
    r = a;
  }
  return { line: s, column: e - i };
}
var vt = " AHex ASCII ASCII_Hex_Digit Alpha Alphabetic Any Assigned Bidi_C Bidi_Control Bidi_M Bidi_Mirrored CI CWCF CWCM CWKCF CWL CWT CWU Case_Ignorable Cased Changes_When_Casefolded Changes_When_Casemapped Changes_When_Lowercased Changes_When_NFKC_Casefolded Changes_When_Titlecased Changes_When_Uppercased DI Dash Default_Ignorable_Code_Point Dep Deprecated Dia Diacritic EBase EComp EMod EPres Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Ext ExtPict Extended_Pictographic Extender Gr_Base Gr_Ext Grapheme_Base Grapheme_Extend Hex Hex_Digit IDC IDS IDSB IDST IDS_Binary_Operator IDS_Trinary_Operator ID_Continue ID_Start Ideo Ideographic Join_C Join_Control LOE Logical_Order_Exception Lower Lowercase Math NChar Noncharacter_Code_Point Pat_Syn Pat_WS Pattern_Syntax Pattern_White_Space QMark Quotation_Mark RI Radical Regional_Indicator SD STerm Sentence_Terminal Soft_Dotted Term Terminal_Punctuation UIdeo Unified_Ideograph Upper Uppercase VS Variation_Selector White_Space XIDC XIDS XID_Continue XID_Start space ", Et = " C Cased_Letter Cc Cf Close_Punctuation Cn Co Combining_Mark Connector_Punctuation Control Cs Currency_Symbol Dash_Punctuation Decimal_Number Enclosing_Mark Final_Punctuation Format Initial_Punctuation L LC Letter Letter_Number Line_Separator Ll Lm Lo Lowercase_Letter Lt Lu M Mark Math_Symbol Mc Me Mn Modifier_Letter Modifier_Symbol N Nd Nl No Nonspacing_Mark Number Open_Punctuation Other Other_Letter Other_Number Other_Punctuation Other_Symbol P Paragraph_Separator Pc Pd Pe Pf Pi Po Private_Use Ps Punctuation S Sc Separator Sk Sm So Space_Separator Spacing_Mark Surrogate Symbol Titlecase_Letter Unassigned Uppercase_Letter Z Zl Zp Zs cntrl digit punct ", St = " Adlam Adlm Aghb Ahom Anatolian_Hieroglyphs Arab Arabic Armenian Armi Armn Avestan Avst Bali Balinese Bamu Bamum Bass Bassa_Vah Batak Batk Beng Bengali Bhaiksuki Bhks Bopo Bopomofo Brah Brahmi Brai Braille Bugi Buginese Buhd Buhid Cakm Canadian_Aboriginal Cans Cari Carian Caucasian_Albanian Chakma Cham Cher Cherokee Chorasmian Chrs Common Copt Coptic Cpmn Cprt Cuneiform Cypriot Cypro_Minoan Cyrillic Cyrl Deseret Deva Devanagari Diak Dives_Akuru Dogr Dogra Dsrt Dupl Duployan Egyp Egyptian_Hieroglyphs Elba Elbasan Elym Elymaic Ethi Ethiopic Gara Garay Geor Georgian Glag Glagolitic Gong Gonm Goth Gothic Gran Grantha Greek Grek Gujarati Gujr Gukh Gunjala_Gondi Gurmukhi Guru Gurung_Khema Han Hang Hangul Hani Hanifi_Rohingya Hano Hanunoo Hatr Hatran Hebr Hebrew Hira Hiragana Hluw Hmng Hmnp Hrkt Hung Imperial_Aramaic Inherited Inscriptional_Pahlavi Inscriptional_Parthian Ital Java Javanese Kaithi Kali Kana Kannada Katakana Katakana_Or_Hiragana Kawi Kayah_Li Khar Kharoshthi Khitan_Small_Script Khmer Khmr Khoj Khojki Khudawadi Kirat_Rai Kits Knda Krai Kthi Lana Lao Laoo Latin Latn Lepc Lepcha Limb Limbu Lina Linb Linear_A Linear_B Lisu Lyci Lycian Lydi Lydian Mahajani Mahj Maka Makasar Malayalam Mand Mandaic Mani Manichaean Marc Marchen Masaram_Gondi Medefaidrin Medf Meetei_Mayek Mend Mende_Kikakui Merc Mero Meroitic_Cursive Meroitic_Hieroglyphs Miao Mlym Modi Mong Mongolian Mro Mroo Mtei Mult Multani Myanmar Mymr Nabataean Nag_Mundari Nagm Nand Nandinagari Narb Nbat New_Tai_Lue Newa Nko Nkoo Nshu Nushu Nyiakeng_Puachue_Hmong Ogam Ogham Ol_Chiki Ol_Onal Olck Old_Hungarian Old_Italic Old_North_Arabian Old_Permic Old_Persian Old_Sogdian Old_South_Arabian Old_Turkic Old_Uyghur Onao Oriya Orkh Orya Osage Osge Osma Osmanya Ougr Pahawh_Hmong Palm Palmyrene Pau_Cin_Hau Pauc Perm Phag Phags_Pa Phli Phlp Phnx Phoenician Plrd Prti Psalter_Pahlavi Qaac Qaai Rejang Rjng Rohg Runic Runr Samaritan Samr Sarb Saur Saurashtra Sgnw Sharada Shavian Shaw Shrd Sidd Siddham SignWriting Sind Sinh Sinhala Sogd Sogdian Sogo Sora Sora_Sompeng Soyo Soyombo Sund Sundanese Sunu Sunuwar Sylo Syloti_Nagri Syrc Syriac Tagalog Tagb Tagbanwa Tai_Le Tai_Tham Tai_Viet Takr Takri Tale Talu Tamil Taml Tang Tangsa Tangut Tavt Telu Telugu Tfng Tglg Thaa Thaana Thai Tibetan Tibt Tifinagh Tirh Tirhuta Tnsa Todhri Todr Toto Tulu_Tigalari Tutg Ugar Ugaritic Unknown Vai Vaii Vith Vithkuqi Wancho Wara Warang_Citi Wcho Xpeo Xsux Yezi Yezidi Yi Yiii Zanabazar_Square Zanb Zinh Zyyy Zzzz ";
function et(t) {
  return vt.includes(` ${t} `);
}
function B(t) {
  return Et.includes(` ${t} `);
}
function st(t) {
  return St.includes(` ${t} `);
}
var Tt = "^$\\.*+?()[]{}|", At = /^(?:Basic_Emoji|Emoji_Keycap_Sequence|RGI_Emoji(?:_(?:Flag|Modifier|Tag|ZWJ)_Sequence)?)$/, wt = /^(?:General_Category|gc|Script|sc|Script_Extensions|scx)$/;
function rt(t, e) {
  let s = e.includes("v"), i = s || e.includes("u");
  try {
    if (new W(t, i, s, i).check() && !i) new W(t, false, false, true).check();
    return;
  } catch (r) {
    if (r instanceof F) return r.message;
    throw r;
  }
}
class F extends Error {
}
class W {
  source;
  isUnicode;
  hasSets;
  hasNamedReferences;
  pos = 0;
  last = 0;
  groupCount = 0;
  highestReference = 0;
  branch;
  names = /* @__PURE__ */ new Map();
  referenced = [];
  constructor(t, e, s, i) {
    this.source = t;
    this.isUnicode = e;
    this.hasSets = s;
    this.hasNamedReferences = i;
  }
  check() {
    if (this.disjunction(false), this.pos < this.source.length) this.fail(this.eat(")") ? "Unmatched ')'" : "Lone quantifier brackets");
    if (this.highestReference > this.groupCount) this.fail("Invalid escape");
    if (this.referenced.some((t) => !this.names.has(t))) this.fail("Invalid named capture referenced");
    return this.names.size > 0;
  }
  fail(t) {
    throw new F(t);
  }
  current(t = this.isUnicode) {
    if (this.pos >= this.source.length) return -1;
    return t ? this.source.codePointAt(this.pos) ?? -1 : this.source.charCodeAt(this.pos);
  }
  take(t) {
    return this.last = t, this.pos += t > 65535 ? 2 : 1, true;
  }
  eat(t) {
    if (!this.source.startsWith(t, this.pos)) return false;
    return this.pos += t.length, true;
  }
  eatOneOf(t) {
    let e = this.current();
    return e !== -1 && t.includes(this.source.charAt(this.pos)) && this.take(e);
  }
  backTo(t) {
    return this.pos = t, false;
  }
  disjunction(t) {
    let e = this.branch, s = {}, i = (e?.depth ?? 0) + 1;
    do {
      this.branch = { outer: e, group: s, depth: i };
      while (this.pos < this.source.length && this.term()) ;
    } while (this.eat("|"));
    if (this.branch = e, this.quantifier(true)) this.fail("Nothing to repeat");
    if (this.eat("{")) this.fail("Lone quantifier brackets");
    if (t && !this.eat(")")) this.fail("Unterminated group");
  }
  term() {
    let t = this.current();
    switch (t) {
      case 94:
      case 36:
        return this.take(t);
      case 40:
        if (this.eat("(?<=") || this.eat("(?<!")) return this.disjunction(true), true;
        if (this.eat("(?=") || this.eat("(?!")) {
          if (this.disjunction(true), this.quantifier(false) && this.isUnicode) this.fail("Invalid quantifier");
          return true;
        }
        this.group();
        break;
      case 92:
        if (this.eat("\\b") || this.eat("\\B")) return true;
        this.pos++, this.atomEscape();
        break;
      case 91:
        if (this.pos++, this.characterClass() === void 0) this.fail("Unterminated character class");
        break;
      case 41:
      case 42:
      case 43:
      case 63:
      case 124:
        return false;
      case 93:
      case 123:
      case 125:
        if (this.isUnicode) return false;
        if (this.bracedQuantifier(true)) this.fail("Nothing to repeat");
        this.pos++;
        break;
      default:
        this.take(t);
    }
    return this.quantifier(false), true;
  }
  quantifier(t) {
    if (!this.eatOneOf("*+?") && !this.bracedQuantifier(t)) return false;
    return this.eat("?"), true;
  }
  bracedQuantifier(t) {
    let e = this.pos;
    if (!this.eat("{")) return false;
    if (this.digits(10)) {
      let s = this.last, i = this.eat(",") && this.digits(10) ? this.last : s;
      if (this.eat("}")) {
        if (i < s && !t) this.fail("numbers out of order in {} quantifier");
        return true;
      }
    }
    if (this.isUnicode && !t) this.fail("Incomplete quantifier");
    return this.backTo(e);
  }
  digits(t, e = 1 / 0) {
    let s = this.pos;
    this.last = 0;
    while (this.pos - s < e) {
      let i = g(this.current());
      if (i >= t) break;
      this.last = this.last * t + i, this.pos++;
    }
    return e === 1 / 0 ? this.pos > s : this.pos - s === e || this.backTo(s);
  }
  group() {
    let t = ++this.pos;
    if (!this.eat("?")) {
      this.disjunction(true), this.groupCount++;
      return;
    }
    let e = this.modifiers("");
    if (this.eat("-")) {
      if (this.modifiers(e) === "" && this.current() === 58) this.fail("Invalid regular expression modifiers");
    }
    if (this.eat(":")) return this.disjunction(true);
    this.pos = t + 1;
    let s = this.groupName() ?? this.fail("Invalid group"), { branch: i } = this, r = this.names.get(s);
    if (r && !Ct(r, i)) this.fail("Duplicate capture group name");
    this.names.set(s, i), this.disjunction(true), this.groupCount++;
  }
  modifiers(t) {
    while (this.eatOneOf("ims")) {
      let e = String.fromCharCode(this.last);
      if (t.includes(e)) this.fail("Duplicate regular expression modifiers");
      t += e;
    }
    return t;
  }
  groupName() {
    if (!this.eat("<")) return;
    let t = "";
    for (; ; ) {
      let e = this.pos;
      if (this.take(this.current(true)), this.last === 92 && !this.unicodeEscape(true)) this.last = 92;
      if (!(t === "" ? u : y)(this.last)) {
        this.pos = e;
        break;
      }
      t += String.fromCodePoint(this.last);
    }
    if (t === "" || !this.eat(">")) this.fail("Invalid capture group name");
    return t;
  }
  atomEscape() {
    let t = this.current();
    if (this.isUnicode && t !== 48 && this.digits(10)) {
      this.highestReference = Math.max(this.highestReference, this.last);
      return;
    }
    if (this.classEscape() !== void 0 || this.characterEscape()) return;
    if (this.hasNamedReferences && this.eat("k")) this.referenced.push(this.groupName() ?? this.fail("Invalid named reference"));
    else if (this.isUnicode) this.fail(t === 99 ? "Invalid unicode escape" : "Invalid escape");
  }
  characterEscape() {
    let t = this.pos, e = this.current();
    if (this.eatOneOf("tnvfr")) return this.last = 9 + "tnvfr".indexOf(String.fromCharCode(e)), true;
    let s = this.source.charCodeAt(t + 1);
    if (e === 99) {
      if (!it(s)) return false;
      return this.pos += 2, this.last = s % 32, true;
    }
    if (e === 48 && !d(s)) return this.take(0);
    if (this.eat("x")) {
      if (this.digits(16, 2)) return true;
      if (this.isUnicode) this.fail("Invalid escape");
      this.pos = t;
    }
    if (this.unicodeEscape(this.isUnicode)) return true;
    if (this.isUnicode) return this.eatOneOf(`${Tt}/`);
    if (this.digits(8, e < 52 ? 3 : 2) || this.digits(8, 2)) return true;
    if (g(e) < 8) return this.take(e - 48);
    return !(this.hasNamedReferences && e === 107) && this.take(e);
  }
  unicodeEscape(t) {
    let e = this.pos;
    if (!this.eat("u")) return false;
    if (this.digits(16, 4)) {
      let s = this.last, i = this.pos;
      if (t && s >= 55296 && s <= 56319) if (this.eat("\\u") && this.digits(16, 4) && this.last >= 56320 && this.last <= 57343) this.last += (s - 55296) * 1024 - 56320 + 65536;
      else this.pos = i, this.last = s;
      return true;
    }
    if (!t) return this.backTo(e);
    if (!this.eat("{") || !this.digits(16) || !this.eat("}") || this.last > 1114111) this.fail("Invalid unicode escape");
    return true;
  }
  classEscape() {
    if (this.eatOneOf("dDsSwW")) return this.last = -1, "characters";
    if (!this.isUnicode || !this.eatOneOf("pP")) return;
    let t = this.last === 80;
    this.last = -1;
    let e = this.eat("{") ? this.property() : void 0;
    if (!e || !this.eat("}") || t && e === "strings") this.fail("Invalid property name");
    return e;
  }
  property() {
    let t = this.pos, e = this.propertyWord(false);
    if (e !== "" && this.eat("=")) {
      let i = this.propertyWord(true);
      if (i !== "") {
        if (!wt.test(e)) return;
        if (!(/^g/i.test(e) ? B(i) : st(i))) this.fail("Invalid property value");
        return "characters";
      }
    }
    this.pos = t;
    let s = this.propertyWord(true);
    if (this.hasSets && At.test(s)) return "strings";
    return et(s) || B(s) ? "characters" : void 0;
  }
  propertyWord(t) {
    let e = this.pos;
    for (; ; ) {
      let s = this.current();
      if (it(s) || s === 95 || t && d(s)) this.pos++;
      else return this.source.slice(e, this.pos);
    }
  }
  characterClass() {
    let t = this.eat("^"), e = "characters";
    if (!this.hasSets) this.classRanges();
    else if (this.current() !== 93) e = this.classSet();
    if (!this.eat("]")) return;
    if (t && e === "strings") this.fail("Negated character class may contain strings");
    return e;
  }
  classRanges() {
    while (this.classAtom()) {
      let t = this.last;
      if (this.eat("-") && this.classAtom()) {
        if (this.isUnicode && (t === -1 || this.last === -1)) this.fail("Invalid character class");
        this.checkRange(t);
      }
    }
  }
  checkRange(t) {
    if (this.last !== -1 && t > this.last) this.fail("Range out of order in character class");
  }
  classAtom() {
    let t = this.current();
    if (t !== 92) return t !== 93 && t !== -1 && this.take(t);
    let e = this.source.charCodeAt(++this.pos), s = this.source.charCodeAt(this.pos + 1);
    if (e === 98) return this.take(8);
    if (this.isUnicode && e === 45) return this.take(45);
    if (!this.isUnicode && e === 99 && (d(s) || s === 95)) return this.pos++, this.take(s % 32);
    if (this.classEscape() !== void 0 || this.characterEscape()) return true;
    if (this.isUnicode) this.fail(e === 99 || g(e) < 8 ? "Invalid class escape" : "Invalid escape");
    return this.last = 92, true;
  }
  classSet() {
    let t = "characters";
    if (!this.setRange()) {
      t = this.setOperand() ?? this.badSetCharacter();
      let e = this.pos;
      while (this.eat("&&")) if (((this.current() === 38 ? void 0 : this.setOperand()) ?? this.badSetCharacter()) === "characters") t = "characters";
      if (this.pos !== e) return t;
      while (this.eat("--")) if (!this.setOperand()) this.badSetCharacter();
      if (this.pos !== e) return t;
    }
    for (; ; ) if (!this.setRange()) {
      let e = this.setOperand();
      if (!e) return t;
      if (e === "strings") t = e;
    }
  }
  badSetCharacter() {
    this.fail("Invalid character in character class");
  }
  setRange() {
    let t = this.pos;
    if (!this.setCharacter()) return false;
    let e = this.last;
    if (!this.eat("-") || !this.setCharacter()) return this.backTo(t);
    return this.checkRange(e), true;
  }
  setOperand() {
    if (this.setCharacter()) return "characters";
    let t = this.pos, e;
    if (this.eat("\\q")) {
      if (!this.eat("{")) this.fail("Invalid escape");
      e = "characters";
      do {
        let s = 0;
        while (this.setCharacter()) s++;
        if (s !== 1) e = "strings";
      } while (this.eat("|"));
      e = this.eat("}") ? e : void 0;
    } else if (this.eat("[")) e = this.characterClass();
    else if (this.eat("\\")) e = this.classEscape();
    if (!e) this.pos = t;
    return e;
  }
  setCharacter() {
    let t = this.pos;
    if (this.eat("\\")) return this.characterEscape() || this.eatOneOf("!#%&,-:;<=>@`~") || this.current() === 98 && this.take(8) || this.backTo(t);
    let e = this.current(), s = this.source.charAt(t), i = s === this.source.charAt(t + 1) && "!#$%&*+,.:;<=>?@^`~".includes(s);
    return e !== -1 && !i && !"()-/[\\]{|}".includes(s) && this.take(e);
  }
}
function it(t) {
  return t >= 65 && t <= 90 || t >= 97 && t <= 122;
}
function Ct(t, e) {
  while (t && e && t !== e) {
    if (t.group === e.group) return true;
    if (t.depth >= e.depth) t = t.outer;
    else e = e.outer;
  }
  return false;
}
var It = ["break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "export", "extends", "false", "finally", "for", "function", "if", "import", "in", "instanceof", "new", "null", "return", "super", "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with"], O = new Map(It.map((t) => [t, t])), Pt = /* @__PURE__ */ new Set(["case", "default", "delete", "do", "else", "extends", "in", "instanceof", "new", "return", "throw", "typeof", "void"]), I = 1, C = 8, nt = 16, m = 0, N = I, kt = 2, at = 4, _t = 4 | I, U = 6 | I, j = C, S = C | I;
class ht extends SyntaxError {
  pos;
  loc;
  constructor(t, e, s) {
    super(t);
    this.pos = e;
    this.loc = s;
  }
}
class H {
  input;
  options;
  pos;
  type = "eof";
  text = "";
  value = null;
  start;
  end;
  lastStart;
  lastEnd;
  isKeyword = false;
  precedence = 0;
  isOnNewLine = false;
  hasEscape = false;
  strict = false;
  operandAllowed = true;
  peekedOverLine = false;
  isModule;
  operandFollows = false;
  context = m;
  outerContexts = [];
  inTemplate = false;
  constructor(t, e, s) {
    this.input = t;
    this.options = e;
    this.pos = s;
    this.start = this.end = this.lastStart = this.lastEnd = s, this.isModule = e.sourceType === "module";
  }
  raise(t, e) {
    let s = tt(this.input, t);
    throw new ht(`${e} (${s.line}:${s.column})`, t, s);
  }
  unexpected(t = this.start) {
    this.raise(t, "Unexpected token");
  }
  next() {
    if (this.isKeyword && this.hasEscape) this.raise(this.start, `Escape sequence in keyword ${this.type}`);
    this.options.onToken?.({ type: this.type, start: this.start, end: this.end }), this.lastStart = this.start, this.lastEnd = this.end, this.isOnNewLine = false, this.readToken();
  }
  keywordIsName() {
    if ((this.type === "class" || this.type === "function") && (this.lastEnd !== this.lastStart + 1 || this.input.charCodeAt(this.lastStart) !== 46)) this.closeContext();
    this.type = "name", this.isKeyword = this.operandFollows = false;
  }
  setContext(t) {
    this.context = t;
  }
  peek(t) {
    let { input: e } = this;
    this.peekedOverLine = false;
    for (; ; ) {
      let s = e.charCodeAt(t), i = t + 1;
      if (s === 47) if (e.startsWith("/", i)) i = this.lineEnd(t);
      else if (e.startsWith("*", i)) {
        if (i = e.indexOf("*/", t + 2) + 2, i < 2) return t;
        this.peekedOverLine ||= this.lineEnd(t, i) < i;
      } else return t;
      else if (v(s)) this.peekedOverLine = true;
      else if (!ot(s)) return t;
      t = i;
    }
  }
  commentToLineEnd() {
    let t = this.pos;
    this.pos = this.lineEnd(t), this.options.onComment?.(t, this.pos);
  }
  readToken() {
    let { input: t } = this;
    if (this.context === U) {
      if (this.start = this.pos, this.pos >= t.length) return this.finish("eof", false);
      return this.readTemplate();
    }
    let e = this.skipSpace();
    while (!this.isModule && this.atHtmlComment(e)) this.commentToLineEnd(), e = this.skipSpace();
    let s = this.start = this.pos;
    if (u(e) || e === 92) return this.readWord();
    let i = t.charCodeAt(s + 1);
    switch (e) {
      case 40:
        return this.punctuator("(", 1, true);
      case 41:
        return this.punctuator(")", 1, false);
      case 59:
        return this.punctuator(";", 1, true);
      case 44:
        return this.punctuator(",", 1, true);
      case 91:
        return this.punctuator("[", 1, true);
      case 93:
        return this.punctuator("]", 1, false);
      case 123:
        return this.punctuator("{", 1, true);
      case 125:
        return this.punctuator("}", 1, false);
      case 58:
        return this.punctuator(":", 1, true);
      case 96:
        return this.punctuator("`", 1, false);
      case 46:
        if (d(i)) return this.readDecimal(true);
        return i === 46 && t.charCodeAt(s + 2) === 46 ? this.punctuator("...", 3, true) : this.punctuator(".", 1, false);
      case 34:
      case 39:
        return this.readString(e);
      case 48:
        switch (i | 32) {
          case 120:
            return this.readRadix(16);
          case 111:
            return this.readRadix(8);
          case 98:
            return this.readRadix(2);
        }
        return this.readDecimal(false);
      case 47:
        if (this.operandAllowed) return this.pos++, this.readRegExp();
        return this.operator("/", 1, 10);
      case 37:
        return this.operator("binary", 1, 10);
      case 42:
        return i === 42 ? this.operator("**", 2, 0) : this.operator("*", 1, 10);
      case 124:
        return i === e ? this.operator("||", 2, 1) : this.operator("binary", 1, 3);
      case 38:
        return i === e ? this.operator("&&", 2, 2) : this.operator("binary", 1, 5);
      case 94:
        return this.operator("binary", 1, 4);
      case 43:
      case 45:
        return i === e ? this.exactOperator("update", 2, 0) : this.operator("sign", 1, 9);
      case 60:
      case 62:
        if (i !== e) return this.exactOperator("binary", i === 61 ? 2 : 1, 7);
        return this.operator("binary", e === 62 && t.charCodeAt(s + 2) === 62 ? 3 : 2, 8);
      case 61:
      case 33:
        if (i === 61) {
          let r = t.charCodeAt(s + 2) === 61 ? 3 : 2;
          return this.exactOperator("binary", r, 6);
        }
        if (e === 33) return this.exactOperator("prefix", 1, 0);
        return i === 62 ? this.punctuator("=>", 2, true) : this.exactOperator("=", 1, 0);
      case 126:
        return this.exactOperator("prefix", 1, 0);
      case 63:
        if (i === 46 && s + 2 < t.length && !d(t.charCodeAt(s + 2))) return this.punctuator("?.", 2, false);
        return i === e ? this.operator("??", 2, 1) : this.punctuator("?", 1, true);
      case 35: {
        let r = t.codePointAt(++this.pos) ?? 0;
        if (u(r) || r === 92) return this.text = this.readName(), this.finish("privateId", false);
        return this.unexpectedCharacter();
      }
    }
    if (d(e)) return this.readDecimal(false);
    if (s >= t.length) return this.finish("eof", false);
    if (u(t.codePointAt(s) ?? 0)) return this.readWord();
    this.unexpectedCharacter();
  }
  readRegExp() {
    let { input: t } = this, e = this.pos, s = false;
    for (; ; this.pos++) {
      let o = t.charCodeAt(this.pos);
      if (o === 92) o = t.charCodeAt(++this.pos);
      else if (o === 91) s = true;
      else if (o === 93) s = false;
      else if (o === 47 && !s) break;
      if (this.pos >= t.length || v(o)) this.raise(e, "Unterminated regular expression");
    }
    let i = t.slice(e, this.pos), r = ++this.pos, n = this.readName();
    if (this.hasEscape) this.unexpected(r);
    for (let o = 0; o < n.length; o++) {
      if (!"dgimsuvy".includes(n.charAt(o))) this.raise(e, "Invalid regular expression flag");
      if (n.includes(n.charAt(o), o + 1)) this.raise(e, "Duplicate regular expression flag");
    }
    if (n.includes("u") && n.includes("v")) this.raise(e, "Invalid regular expression flag");
    this.options.onRegExp?.(i);
    let a = rt(i, n);
    if (a !== void 0) this.raise(e, `Invalid regular expression: /${i}/: ${a}`);
    if (this.text = i, this.options.buildRegExp) this.value = this.options.buildRegExp(i, n);
    else try {
      this.value = new RegExp(i, n);
    } catch {
      this.value = null;
    }
    this.finish("regexp", false);
  }
  lineEnd(t, e = this.input.length) {
    while (t < e && !v(this.input.charCodeAt(t))) t++;
    return t;
  }
  skipSpace() {
    let { input: t } = this;
    for (; ; ) {
      let e = t.charCodeAt(this.pos);
      if (e > 47 && e < 160) return e;
      if (ot(e)) this.pos++;
      else if (v(e)) this.isOnNewLine = true, this.pos++;
      else if (e !== 47) return e;
      else if (t.charCodeAt(this.pos + 1) === 47) this.commentToLineEnd();
      else if (t.charCodeAt(this.pos + 1) === 42) {
        let s = this.pos, i = t.indexOf("*/", s + 2);
        if (i === -1) this.raise(s, "Unterminated comment");
        this.isOnNewLine ||= this.lineEnd(s, i) < i, this.pos = i + 2, this.options.onComment?.(s, this.pos);
      } else return e;
    }
  }
  atHtmlComment(t) {
    return t === 60 ? this.input.startsWith("<!--", this.pos) : t === 45 && (this.isOnNewLine || this.lastEnd === 0) && this.input.startsWith("-->", this.pos);
  }
  unexpectedCharacter() {
    let { input: t, pos: e } = this, s = t.codePointAt(e) ?? 55296, i = s >= 55296 && s < 56320 && e + 1 >= t.length;
    this.raise(e, `Unexpected character '${String.fromCodePoint(i ? 65536 : s)}'`);
  }
  punctuator(t, e, s) {
    this.pos += e, this.finish(t, s);
  }
  operator(t, e, s) {
    if (this.input.charCodeAt(this.pos + e) === 61) this.exactOperator("assign", e + 1, 0);
    else this.exactOperator(t, e, s);
  }
  exactOperator(t, e, s) {
    this.text = this.input.slice(this.pos, this.pos += e), this.finish(t, t !== "update"), this.precedence = s;
  }
  finish(t, e, s = false) {
    let i = this.type, r = this.operandFollows;
    if (this.end = this.pos, this.type = t, this.isKeyword = s, this.precedence = 0, this.operandFollows = e, s && i === ".") {
      this.operandAllowed = false;
      return;
    }
    switch (t) {
      case "name":
        this.operandAllowed = i !== "." && (this.text === "of" ? !this.operandAllowed : this.text === "yield" && this.yieldIsOperator());
        return;
      case ")":
      case "}": {
        if (this.outerContexts.length === 0) {
          this.operandAllowed = true;
          return;
        }
        let n = this.closeContext();
        if (n === m && this.context & C) n = this.closeContext();
        this.operandAllowed = !(n & I);
        return;
      }
      case "update":
        return;
      case "(":
        this.openContext(i === "if" || i === "for" || i === "with" || i === "while" ? at : _t);
        break;
      case "{":
        this.openContext(this.braceOpensBlock(i) ? m : N);
        break;
      case "${":
        this.openContext(kt);
        break;
      case "function":
      case "class":
        this.openContext(r && i !== "else" && !(i === ";" && this.context !== at) && !(i === "return" && this.isOnNewLine) && !((i === ":" || i === "{") && this.context === m) ? S : j);
        break;
      case ":":
        if (this.context & C) this.closeContext();
        break;
      case "`":
        if (this.context === U) this.closeContext();
        else this.openContext(U);
        break;
      case "*":
        if (i === "function") this.context = (this.context === S ? S : j) | nt;
        break;
      default:
    }
    this.operandAllowed = e;
  }
  openContext(t) {
    this.outerContexts.push(this.context), this.context = t;
  }
  closeContext() {
    let t = this.context;
    return this.context = this.outerContexts.pop() ?? m, t;
  }
  braceOpensBlock(t) {
    let { context: e } = this;
    if (e === S || e === j) return true;
    switch (t) {
      case ":":
        if (e === m || e === N) return e === m;
        break;
      case "return":
        return this.isOnNewLine;
      case "name":
        return this.operandAllowed && this.isOnNewLine;
      case "else":
      case ";":
      case "eof":
      case ")":
      case "=>":
        return true;
      case "{":
        return e === m;
      case "var":
      case "const":
        return false;
      default:
    }
    return !this.operandAllowed;
  }
  yieldIsOperator() {
    let { context: t } = this;
    for (let e = this.outerContexts.length - 1; e >= 0; e--) {
      if (t & C) return (t & nt) !== 0;
      t = this.outerContexts[e] ?? m;
    }
    return false;
  }
  readWord() {
    let t = this.text = this.readName(), e = t.length < 11 ? O.get(t) : void 0;
    if (e === void 0) return this.finish("name", false);
    if (this.finish(e, Pt.has(e), true), e === "in" || e === "instanceof") this.precedence = 7;
  }
  readName() {
    let { input: t } = this, e = this.pos, s = "", i = e;
    this.hasEscape = false;
    for (; ; ) {
      let r = t.charCodeAt(this.pos);
      if (r === 92) {
        this.hasEscape = true;
        let n = this.pos;
        if (s += t.slice(i, n), t.charCodeAt(++this.pos) !== 117) this.raise(this.pos, "Expecting Unicode escape sequence \\uXXXX");
        this.pos++;
        let a = this.unicodeEscapeValue();
        if (!(n === e ? u : y)(a)) this.raise(n, "Invalid Unicode escape");
        s += String.fromCodePoint(a), i = this.pos;
      } else if (y(r)) this.pos++;
      else if (r >= 55296 && y(t.codePointAt(this.pos) ?? 0)) this.pos += 2;
      else return s + t.slice(i, this.pos);
    }
  }
  readDigits(t, e = false) {
    let { input: s } = this, i = this.pos, r = e && s.charCodeAt(i) === 48, n = 0, a = false;
    for (; ; this.pos++) {
      let o = s.charCodeAt(this.pos);
      if (o === 95) {
        if (r) this.raise(this.pos, "Numeric separator is not allowed in legacy octal numeric literals");
        if (a) this.raise(this.pos, "Numeric separator must be exactly one underscore");
        if (this.pos === i) this.raise(i, "Numeric separator is not allowed at the first of digits");
        a = true;
        continue;
      }
      let h = g(o);
      if (h >= t) break;
      a = false, n = n * t + h;
    }
    if (a) this.raise(this.pos - 1, "Numeric separator is not allowed at the last of digits");
    return this.pos === i ? Number.NaN : n;
  }
  readRadix(t) {
    this.pos += 2;
    let e = this.readDigits(t);
    if (Number.isNaN(e)) this.raise(this.start + 2, `Expected number in radix ${t}`);
    if (this.input.charCodeAt(this.pos) === 110) {
      let s = BigInt(this.numberText());
      return this.pos++, this.finishNumber(s);
    }
    this.finishNumber(e);
  }
  readDecimal(t) {
    let { input: e, start: s } = this, i = t ? 0 : this.readDigits(10, true), r = e.charCodeAt(this.pos);
    if (e.charCodeAt(s) === 48 && this.pos > s + 1) {
      if (this.strict) this.raise(s, "Invalid number");
      if (!/[89]/.test(this.numberText())) return this.finishNumber(Number.parseInt(this.numberText(), 8));
    } else if (r === 110 && !t) {
      let a = BigInt(this.numberText());
      return this.pos++, this.finishNumber(a);
    }
    let n = this.pos;
    if (r === 46) this.pos++, this.readDigits(10), r = e.charCodeAt(this.pos);
    if (r === 69 || r === 101) {
      if (r = e.charCodeAt(++this.pos), r === 43 || r === 45) this.pos++;
      if (Number.isNaN(this.readDigits(10))) this.raise(s, "Invalid number");
    }
    this.finishNumber(this.pos === n && i <= Number.MAX_SAFE_INTEGER ? i : Number.parseFloat(this.numberText()));
  }
  numberText() {
    return this.input.slice(this.start, this.pos).replace(/_/g, "");
  }
  finishNumber(t) {
    if (u(this.input.codePointAt(this.pos) ?? 0)) this.raise(this.pos, "Identifier directly after number");
    this.value = t, this.finish("num", false);
  }
  readString(t) {
    let { input: e } = this, s = "", i = this.pos + 1, r = i;
    for (let n; (n = e.charCodeAt(i)) !== t; ) if (n === 92) this.pos = i, s += e.slice(r, i) + this.readEscape(), r = i = this.pos;
    else if (i++ >= e.length || n === 10 || n === 13) this.raise(this.start, "Unterminated string constant");
    this.text = s + e.slice(r, i), this.pos = i + 1, this.finish("string", false);
  }
  readTemplate() {
    let { input: t, start: e } = this, s = "", i = e, r = true;
    while (this.pos < t.length) {
      let n = t.charCodeAt(this.pos);
      if (n === 96 || n === 36 && t.charCodeAt(this.pos + 1) === 123) {
        if (this.pos === e && (this.type === "template" || this.type === "invalidTemplate")) return n === 36 ? this.punctuator("${", 2, true) : this.punctuator("`", 1, false);
        return this.text = s + t.slice(i, this.pos), this.finish(r ? "template" : "invalidTemplate", false);
      }
      if (n === 92 && r) s += t.slice(i, this.pos), this.inTemplate = true, s += this.readEscape(), r = this.inTemplate, this.inTemplate = false, i = this.pos;
      else if (n === 92) this.pos += 2;
      else if (n === 13) s += `${t.slice(i, this.pos)}
`, this.pos += t.charCodeAt(this.pos + 1) === 10 ? 2 : 1, i = this.pos;
      else this.pos++;
    }
    this.raise(e, "Unterminated template");
  }
  badEscape(t, e) {
    if (!this.inTemplate) this.raise(t, e);
    return this.inTemplate = false, "";
  }
  readEscape() {
    let { input: t } = this, e = t.charCodeAt(++this.pos);
    switch (this.pos++, e) {
      case 110:
        return `
`;
      case 114:
        return "\r";
      case 116:
        return "	";
      case 98:
        return "\b";
      case 118:
        return "\v";
      case 102:
        return "\f";
      case 120:
        return String.fromCharCode(this.readHex(2));
      case 117:
        return String.fromCodePoint(this.unicodeEscapeValue());
      case 13:
        if (t.charCodeAt(this.pos) === 10) this.pos++;
        return "";
      case 56:
      case 57:
        if (this.strict || this.inTemplate) return this.badEscape(this.pos - 1, "Invalid escape sequence");
        return String.fromCharCode(e);
    }
    if (!d(e)) return v(e) ? "" : String.fromCharCode(e);
    let s = this.pos - 1, i = e - 48;
    while (this.pos < s + 3) {
      let r = g(t.charCodeAt(this.pos));
      if (r > 7 || i * 8 + r > 255) break;
      i = i * 8 + r, this.pos++;
    }
    if ((this.strict || this.inTemplate) && (e !== 48 || this.pos > s + 1 || d(t.charCodeAt(this.pos)))) return this.badEscape(s - 1, "Octal literal in strict mode");
    return String.fromCharCode(i);
  }
  unicodeEscapeValue() {
    if (this.input.charCodeAt(this.pos) !== 123) return this.readHex(4);
    let t = ++this.pos, e = this.inTemplate, s = this.readHex(this.input.indexOf("}", t) - t);
    if (e && !this.inTemplate) return 0;
    if (this.pos++, s > 1114111) return this.badEscape(t, "Code point out of bounds"), 0;
    return s;
  }
  readHex(t) {
    let e = this.pos, s = 0;
    while (this.pos < e + t) {
      let i = g(this.input.charCodeAt(this.pos));
      if (i > 15) break;
      s = s * 16 + i, this.pos++;
    }
    if (t < 1 || this.pos < e + t) return this.badEscape(e, "Bad character escape sequence"), 0;
    return s;
  }
}
function ot(t) {
  if (t < 160) return t === 32 || t === 9 || t === 11 || t === 12;
  return t === 160 || t === 5760 || t >= 8192 && t <= 8202 || t === 8239 || t === 8287 || t === 12288 || t === 65279;
}
var D = 1, L = 2, T = 4, P = 8, K = 16, x = 32, G = 64, V = 128, Y = 256, k = 1, E = 2, ct = 4, pt = 8, z = 16;
class q {
  flags;
  outer;
  functionsAreVars;
  start;
  body;
  thisScope;
  depth;
  names;
  constructor(t, e, s, i) {
    this.flags = t;
    this.outer = e;
    this.functionsAreVars = s;
    this.start = i;
    let r = (t & 387) !== 0;
    this.body = r || !e ? this : e.body, this.thisScope = r && !(t & 16) || !e ? this : e.thisScope, this.depth = (e?.depth ?? 0) + 1;
  }
  bindingsOf(t) {
    let e = (this.names?.get(t) ?? 0) % 16;
    if (this === this.body) return e;
    let s = this.body.names?.get(t) ?? 0;
    return s >= this.start * 16 ? e | s & 1 : e;
  }
  declare(t, e, s) {
    if (e === 1 && this !== this.body) return !((this.names?.get(t) ?? 0) & 6);
    let i = this.bindingsOf(t), r = 0;
    if (e === 2) r = -1;
    else if (e === 4) r = 10, r |= this.functionsAreVars ? 0 : 1;
    else if (e === 1) r = 2 | (this.functionsAreVars ? 0 : 4);
    if (i & r) return false;
    return this.names ??= /* @__PURE__ */ new Map(), this.names.set(t, (i | e) + (e === 1 ? s * 16 : 0)), true;
  }
}
var f = 0, lt = 1, ut = 2, R = { type: "EmptyStatement", start: 0, end: 0 }, gt = 1, dt = 2, ft = new Map([...[...O.keys(), "await", "enum"].map((t) => [t, 0]), ...["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"].map((t) => [t, gt]), ["eval", dt], ["arguments", dt]]), Nt = /* @__PURE__ */ new Set(["name", "num", "string", "regexp", "privateId", "prefix", "sign", "update", "[", "{", "(", "`", "${", "class", "delete", "false", "function", "import", "new", "null", "super", "this", "true", "typeof", "void"]), X = "Cannot use 'await' as identifier inside an async function", Z = "Comma is not permitted after the rest element";
class A {
  shorthandDefault = -1;
  secondProto = -1;
  commaAfterSpread = -1;
  parenthesizedTarget = -1;
  parenthesized = -1;
  mustBePattern() {
    return this.shorthandDefault >= 0 || this.secondProto >= 0;
  }
}
class J extends H {
  scope;
  top;
  labels = [];
  classes = [];
  exported = /* @__PURE__ */ new Set();
  exportsToDefine = /* @__PURE__ */ new Map();
  noDoubts = new A();
  arrowMayStartAt = -1;
  arrowIsInForAwait = false;
  firstYield = 0;
  firstAwait = 0;
  firstAwaitName = 0;
  program() {
    this.begin();
    let t = [];
    while (this.type !== "eof") t.push(this.atModuleItem() ? this.moduleItem() : this.statement(""));
    for (let [e, s] of this.exportsToDefine) this.raise(s, `Export '${e}' is not defined`);
    return this.markDirectives(t), this.next(), { type: "Program", start: 0, end: this.lastEnd, body: t, sourceType: this.isModule ? "module" : "script" };
  }
  leadingExpression() {
    return this.begin(), this.expression();
  }
  begin() {
    if (this.strict = this.isModule || this.saysUseStrict(this.pos), this.pos === 0 && this.input.startsWith("#!")) this.commentToLineEnd();
    this.openScope(D), this.top = this.scope, this.readToken();
  }
  at(t) {
    return this.type === t;
  }
  eat(t) {
    if (this.type !== t) return false;
    return this.next(), true;
  }
  expect(t) {
    if (this.type !== t) this.unexpected();
    this.next();
  }
  atWord(t) {
    return this.type === "name" && this.text === t && !this.hasEscape;
  }
  eatWord(t) {
    if (!this.atWord(t)) return false;
    return this.next(), true;
  }
  expectWord(t) {
    if (!this.eatWord(t)) this.unexpected();
  }
  mayEndHere() {
    return this.isOnNewLine || this.type === "}" || this.type === "eof";
  }
  semicolon() {
    if (!this.eat(";") && !this.mayEndHere()) this.unexpected();
  }
  listEnds(t, e) {
    if (this.eat(t)) return true;
    if (e) return false;
    return this.expect(","), this.eat(t);
  }
  wordIsAt(t, e) {
    let s = this.input.charCodeAt(e + t.length);
    return this.input.startsWith(t, e) && !y(s) && !mt(s);
  }
  atLetDeclaration(t) {
    if (!this.atWord("let")) return false;
    let e = this.peek(this.pos), s = this.input.charAt(e);
    if (s === "[" || s === "\\") return true;
    let i = s.charCodeAt(0);
    if (t === "" && u(i)) {
      let r = ["in", "instanceof"].find((n) => this.wordIsAt(n, e));
      return !r || this.input.charAt(e + r.length) === "\\";
    }
    return t === "" && (s === "{" || mt(i));
  }
  atAsyncFunction() {
    return this.atWord("async") && this.wordIsAt("function", this.peek(this.pos)) && !this.peekedOverLine;
  }
  usingKind(t) {
    let e = this.atWord("await");
    if (!e && !this.atWord("using")) return;
    let s = this.peek(this.pos);
    if (this.peekedOverLine) return;
    if (e) {
      if (!this.wordIsAt("using", s) || s + 5 === this.input.length) return;
      return this.peek(s + 5), this.peekedOverLine ? void 0 : "await using";
    }
    return !(t && this.wordIsAt("of", s)) && (u(this.input.charCodeAt(s)) || this.input.charCodeAt(s) === 92) ? "using" : void 0;
  }
  saysUseStrict(t) {
    let { input: e } = this;
    for (; ; ) {
      let s = this.peek(t), i = e.charCodeAt(s);
      if (i !== 34 && i !== 39) return false;
      let r = s + 1;
      while (r < e.length && e.charCodeAt(r) !== i) r += e.charCodeAt(r) === 92 ? 2 : 1;
      if (r >= e.length) return false;
      t = this.peek(r + 1);
      let n = e.charAt(t);
      if (r === s + 11 && e.startsWith("use strict", s + 1)) return n === ";" || n === "}" || this.peekedOverLine && !/[(`.[+\-/*%<>=,?^&]/.test(n) && !e.startsWith("!=", t);
      if (n === ";") t++;
    }
  }
  openScope(t) {
    this.scope = new q(t, this.scope, (t & L) !== 0 || t === D && !this.isModule, this.start), this.options.onScope?.(this.scope.depth, this.lastStart);
  }
  closeScope() {
    this.scope = this.scope.outer ?? this.scope;
  }
  inBody(t) {
    return (this.scope.body.flags & t) !== 0;
  }
  canAwait() {
    return this.inBody(D) ? this.isModule || this.options.allowAwaitOutsideFunction === true : this.inBody(T);
  }
  declare({ name: t, start: e }, s) {
    let { scope: i } = this;
    for (; ; ) {
      if (!i.declare(t, s, e)) this.raise(e, `Identifier '${t}' has already been declared`);
      if (s !== k || i === i.body || !i.outer) break;
      i = i.outer;
    }
    if (i === this.top) this.exportsToDefine.delete(t);
  }
  refuseReservedWord({ name: t, start: e }) {
    let s = ft.get(t);
    if (s === void 0) return;
    if (t === "yield" && this.inBody(P)) this.raise(e, "Cannot use 'yield' as identifier inside a generator");
    if (t === "await" && this.inBody(T)) this.raise(e, X);
    if (t === "arguments" && this.scope.thisScope.flags & Y) this.raise(e, "Cannot use 'arguments' in class field initializer");
    if ((t === "arguments" || t === "await") && this.inBody(V)) this.raise(e, `Cannot use ${t} in class static initialization block`);
    if (O.has(t)) this.raise(e, `Unexpected keyword '${t}'`);
    if (t === "await" && this.isModule) this.raise(e, "Cannot use keyword 'await' outside an async function");
    if (t === "enum" || s === gt && this.strict) this.raise(e, `The keyword '${t}' is reserved`);
  }
  checkTarget(t, e = 0, s) {
    let i = e ? "Binding" : "Assigning to";
    switch (t.type) {
      case "Identifier": {
        let { name: r, start: n } = t;
        if (this.strict && (ft.get(r) || r === "enum" || r === "await" && this.isModule)) this.raise(n, `${i} ${r} in strict mode`);
        if (e === E && r === "let") this.raise(n, "let is disallowed as a lexically bound name");
        if (s?.has(r)) this.raise(n, "Argument name clash");
        if (s?.add(r), e && e !== z) this.declare(t, e);
        return;
      }
      case "ChainExpression":
        return this.raise(t.start, "Optional chaining cannot appear in left-hand side");
      case "MemberExpression":
        if (e) this.raise(t.start, "Binding member expression");
        return;
      default:
        this.raise(t.start, `${i} rvalue`);
    }
  }
  checkPattern(t, e = 0, s) {
    if (t.type === "ObjectPattern") for (let i of t.properties) this.checkElement(i.type === "Property" ? i.value : i, e, s);
    else if (t.type === "ArrayPattern") {
      for (let i of t.elements) if (i) this.checkElement(i, e, s);
    } else this.checkTarget(t, e, s);
  }
  checkElement(t, e, s) {
    if (t.type === "AssignmentPattern") t = t.left;
    else if (t.type === "RestElement") t = t.argument;
    this.checkPattern(t, e, s);
  }
  settleAsExpression(t) {
    if (t && t.shorthandDefault >= 0) this.raise(t.shorthandDefault, "Shorthand property assignments are valid only in destructuring patterns");
    if (t && t.secondProto >= 0) this.raise(t.secondProto, "Redefinition of __proto__ property");
  }
  settleAsPattern(t, e) {
    if (!t) return;
    if (t.commaAfterSpread >= 0) this.raise(t.commaAfterSpread, Z);
    if (e && t.parenthesized >= 0) this.raise(t.parenthesized, "Parenthesized pattern");
    if (!e && t.parenthesizedTarget >= 0) this.raise(t.parenthesizedTarget, "Assigning to rvalue");
  }
  checkParamDefaults() {
    let { firstYield: t, firstAwait: e } = this;
    if (t && (!e || t < e)) this.raise(t, "Yield expression cannot be a default value");
    if (e) this.raise(e, "Await expression cannot be a default value");
  }
  toPattern(t, e, s) {
    let { start: i, end: r } = t;
    switch (t.type) {
      case "Identifier":
        if (t.name === "await" && this.inBody(T)) this.raise(i, X);
        return t;
      case "ArrayPattern":
      case "AssignmentPattern":
      case "ObjectPattern":
      case "RestElement":
        return t;
      case "ObjectExpression": {
        this.settleAsPattern(s, false);
        let n = [];
        for (let a of t.properties) n.push(this.toPatternMember(a, e));
        return { type: "ObjectPattern", start: i, end: r, properties: n };
      }
      case "ArrayExpression": {
        this.settleAsPattern(s, false);
        let n = [];
        for (let a of t.elements) n.push(a && this.toPattern(a, e));
        return { type: "ArrayPattern", start: i, end: r, elements: n };
      }
      case "SpreadElement":
        return this.toRest(t, e);
      case "AssignmentExpression": {
        let { left: n, right: a } = t;
        return t.operator === "=" ? { type: "AssignmentPattern", start: i, end: r, left: this.toPattern(n, e), right: a } : this.raise(n.end, "Only '=' operator can be used for specifying default value.");
      }
      case "ChainExpression":
        return this.raise(i, "Optional chaining cannot appear in left-hand side");
      case "MemberExpression":
        if (!e) return t;
        break;
      default:
    }
    this.raise(i, "Assigning to rvalue");
  }
  toPatternMember(t, e) {
    if (t.type === "SpreadElement") {
      let c = this.toRest(t, e);
      return c.argument.type.endsWith("Pattern") ? this.unexpected(c.argument.start) : c;
    }
    let { start: s, end: i, shorthand: r, computed: n, key: a, kind: o } = t;
    if (o === "get" || o === "set") this.raise(a.start, "Object pattern can't contain getter or setter");
    let h = this.toPattern(t.value, e);
    return { type: "Property", start: s, end: i, method: false, shorthand: r, computed: n, key: a, value: h, kind: o };
  }
  toRest({ start: t, end: e, argument: s }, i) {
    let r = this.toPattern(s, i);
    if (r.type === "AssignmentPattern") this.raise(r.start, "Rest elements cannot have a default value");
    return { type: "RestElement", start: t, end: e, argument: r };
  }
  statement(t) {
    let { start: e, type: s } = this;
    switch (s) {
      case "name":
        break;
      case "{":
        return this.block(true, false);
      case "var":
      case "const":
        return this.declarationStatement(s, t);
      case "if":
        return this.ifStatement(e);
      case "return":
        return this.returnStatement(e);
      case "function":
        if (t === "body" || t !== "" && this.strict) this.unexpected();
        return this.next(), this.functionDeclaration(e, false, t !== "");
      case "class":
        if (t !== "") this.unexpected();
        return this.classDeclaration();
      case "for":
        return this.forStatement();
      case "while":
        return this.whileStatement(e);
      case "do":
        return this.doStatement(e);
      case "break":
      case "continue":
        return this.jump(s);
      case "switch":
        return this.switchStatement();
      case "throw":
        return this.throwStatement(e);
      case "try":
        return this.tryStatement();
      case "with":
        return this.withStatement(e);
      case ";":
        return this.next(), { type: "EmptyStatement", start: e, end: this.lastEnd };
      case "debugger":
        return this.next(), this.semicolon(), { type: "DebuggerStatement", start: e, end: this.lastEnd };
      default:
        if (this.atModuleItem()) this.raise(e, "'import' and 'export' may only appear at the top level");
        return this.expressionStatement(this.expression(), e);
    }
    if (this.atLetDeclaration(t)) return this.declarationStatement("let", t);
    if (this.atAsyncFunction()) {
      if (t !== "") this.unexpected();
      return this.next(), this.next(), this.functionDeclaration(e, true, false);
    }
    let i = this.usingKind(false);
    if (i) {
      if (t === "" && this.scope === this.top && !this.isModule) this.raise(e, "Using declaration cannot appear in the top level when source type is `script`");
      if (i === "await using" && !this.canAwait()) this.raise(e, "Await using cannot appear outside of async function");
      return this.declarationStatement(i, "");
    }
    let r = this.expression();
    return r.type === "Identifier" && this.eat(":") ? this.labeled(r, t) : this.expressionStatement(r, e);
  }
  ifStatement(t) {
    this.next();
    let e = { type: "IfStatement", start: t, end: t, test: this.parenthesized(), consequent: R, alternate: null };
    if (e.consequent = this.statement("if"), this.eat("else")) e.alternate = this.statement("if");
    return e.end = this.lastEnd, e;
  }
  returnStatement(t) {
    if (!this.inBody(L) && !this.options.allowReturnOutsideFunction) this.raise(t, "'return' outside of function");
    this.next();
    let e = this.at(";") || this.mayEndHere() ? null : this.expression();
    return this.semicolon(), { type: "ReturnStatement", start: t, end: this.lastEnd, argument: e };
  }
  whileStatement(t) {
    this.next();
    let e = { type: "WhileStatement", start: t, end: t, test: this.parenthesized(), body: R };
    return this.labels.push({ kind: "loop" }), e.body = this.statement("body"), this.labels.pop(), e.end = this.lastEnd, e;
  }
  doStatement(t) {
    this.next(), this.labels.push({ kind: "loop" });
    let e = this.statement("body");
    this.labels.pop(), this.expect("while");
    let s = this.parenthesized();
    return this.eat(";"), { type: "DoWhileStatement", start: t, end: this.lastEnd, body: e, test: s };
  }
  throwStatement(t) {
    if (this.next(), this.isOnNewLine) this.raise(this.lastEnd, "Illegal newline after throw");
    let e = this.expression();
    return this.semicolon(), { type: "ThrowStatement", start: t, end: this.lastEnd, argument: e };
  }
  withStatement(t) {
    if (this.strict) this.raise(t, "'with' in strict mode");
    this.next();
    let e = this.parenthesized(), s = this.statement("body");
    return { type: "WithStatement", start: t, end: this.lastEnd, object: e, body: s };
  }
  expressionStatement(t, e) {
    return this.semicolon(), { type: "ExpressionStatement", start: e, end: this.lastEnd, expression: t };
  }
  parenthesized() {
    this.expect("(");
    let t = this.expression();
    return this.expect(")"), t;
  }
  block(t, e) {
    let s = { type: "BlockStatement", start: this.start, end: 0, body: [] };
    if (this.expect("{"), t) this.openScope(0);
    while (this.type !== "}") s.body.push(this.statement(""));
    if (t) this.closeScope();
    return this.strict &&= !e, s.end = this.end, this.next(), s;
  }
  markDirectives(t) {
    for (let e of t) {
      if (e.type !== "ExpressionStatement" || e.expression.type !== "Literal" || typeof e.expression.value !== "string" || e.start !== e.expression.start) return;
      e.directive = e.expression.raw.slice(1, -1);
    }
  }
  labeled(t, e) {
    let { labels: s, type: i } = this, { name: r, start: n } = t;
    for (let h of s) if (h.name === r) this.raise(n, `Label '${r}' is already declared`);
    let a = i === "for" || i === "while" || i === "do" ? "loop" : i === "switch" ? i : void 0;
    for (let h = s.length - 1; h >= 0; h--) {
      let c = s[h];
      if (c?.bodyStart !== n) break;
      c.bodyStart = this.start, c.kind = a;
    }
    s.push({ name: r, kind: a, bodyStart: this.start });
    let o = this.statement(e === "" || e === "label" ? "label" : "body");
    return s.pop(), { type: "LabeledStatement", start: n, end: this.lastEnd, body: o, label: t };
  }
  jump(t) {
    let { start: e } = this, s = t === "break";
    this.next();
    let i = this.at(";") || this.mayEndHere() ? null : this.plainName();
    if (this.semicolon(), !this.labels.some(({ name: n, kind: a }) => i ? n === i.name && (s || a === "loop") : a === "loop" || s && a === "switch")) this.raise(e, `Unsyntactic ${t}`);
    return { type: s ? "BreakStatement" : "ContinueStatement", start: e, end: this.lastEnd, label: i };
  }
  switchStatement() {
    let { start: t } = this, e = [], s = false;
    this.next();
    let i = this.parenthesized();
    this.expect("{"), this.labels.push({ kind: "switch" }), this.openScope(0);
    while (this.type !== "}") {
      let r = this.start, n = null;
      if (this.eat("case")) n = this.expression();
      else {
        if (this.expect("default"), s) this.raise(r, "Multiple default clauses");
        s = true;
      }
      this.expect(":");
      let a = [];
      while (!this.at("case") && !this.at("default") && !this.at("}")) a.push(this.statement(""));
      e.push({ type: "SwitchCase", start: r, end: this.lastEnd, consequent: a, test: n });
    }
    return this.closeScope(), this.next(), this.labels.pop(), { type: "SwitchStatement", start: t, end: this.lastEnd, discriminant: i, cases: e };
  }
  tryStatement() {
    let { start: t } = this;
    this.next();
    let e = this.block(true, false), s = this.start, i = null;
    if (this.eat("catch")) {
      let n = this.eat("(") ? this.bindingTarget() : null;
      if (this.openScope(0), n) this.checkPattern(n, n.type === "Identifier" ? pt : E), this.expect(")");
      let a = this.block(false, false);
      this.closeScope(), i = { type: "CatchClause", start: s, end: this.lastEnd, param: n, body: a };
    }
    let r = this.eat("finally") ? this.block(true, false) : null;
    if (!i && !r) this.raise(t, "Missing catch or finally clause");
    return { type: "TryStatement", start: t, end: this.lastEnd, block: e, handler: i, finalizer: r };
  }
  declarationStatement(t, e) {
    if (e !== "" && t !== "var") this.unexpected();
    let s = this.declaration(t, f);
    return this.semicolon(), s.end = this.lastEnd, s;
  }
  declaration(t, e) {
    let { start: s } = this, i = t === "using" || t === "await using", r = [];
    if (this.next(), t === "await using") this.next();
    do {
      let n = i ? this.name() : this.bindingTarget();
      this.checkPattern(n, t === "var" ? k : E);
      let a = null;
      if (this.eat("=")) a = this.assignment(e);
      else if (!this.at("in") && !this.atWord("of")) {
        if (t === "const") this.unexpected();
        if (i) this.raise(this.lastEnd, `Missing initializer in ${t} declaration`);
      }
      if (!a && n.type !== "Identifier" && !(e && (this.at("in") || this.atWord("of")))) this.raise(this.lastEnd, "Complex binding patterns require an initialization value");
      r.push({ type: "VariableDeclarator", start: n.start, end: this.lastEnd, id: n, init: a });
    } while (this.eat(","));
    return { type: "VariableDeclaration", start: s, end: this.lastEnd, declarations: r, kind: t };
  }
  forStatement() {
    let { start: t } = this;
    this.next();
    let e = this.canAwait() && this.eatWord("await") ? this.lastStart : -1;
    this.labels.push({ kind: "loop" }), this.openScope(0), this.expect("(");
    let { type: s } = this, i = s === "var" || s === "const" ? s : this.atLetDeclaration("") ? "let" : this.usingKind(true), r = null;
    if (i) {
      if (r = this.declaration(i, lt), r.declarations.length === 1 && (this.at("in") || this.atWord("of"))) return this.forEach(t, r, e);
    } else if (s !== ";") {
      let o = this.atWord("let"), h = this.atWord("async"), c = new A();
      r = e >= 0 ? this.subscripted(c, ut) : this.expression(lt, c);
      let l = this.atWord("of");
      if (l || this.at("in")) {
        if (!l && e >= 0) this.unexpected(e);
        if (l && e < 0 && h && r.type === "Identifier") this.unexpected();
        if (l && o) this.raise(r.start, "The left-hand side of a for-of loop may not start with 'let'.");
        let p = this.toPattern(r, false, c);
        return this.checkPattern(p), this.forEach(t, p, e);
      }
      this.settleAsExpression(c);
    }
    if (e >= 0) this.unexpected(e);
    this.expect(";");
    let n = this.at(";") ? null : this.expression();
    this.expect(";");
    let a = this.at(")") ? null : this.expression();
    return this.forBody({ type: "ForStatement", start: t, end: t, init: r, test: n, update: a, body: R });
  }
  forEach(t, e, s) {
    let i = this.type === "in";
    if (i && s >= 0) this.unexpected(s);
    if (this.next(), e.type === "VariableDeclaration") {
      let [a] = e.declarations, o = i && e.kind === "var" && a?.id.type === "Identifier" && !this.strict;
      if (a?.init && !o) this.raise(e.start, `for-${i ? "in" : "of"} loop variable declaration may not have an initializer`);
    }
    let r = i ? this.expression() : this.assignment(), n = R;
    return this.forBody(i ? { type: "ForInStatement", start: t, end: t, left: e, right: r, body: n } : { type: "ForOfStatement", start: t, end: t, await: s >= 0, left: e, right: r, body: n });
  }
  forBody(t) {
    return this.expect(")"), t.body = this.statement("body"), t.end = this.lastEnd, this.closeScope(), this.labels.pop(), t;
  }
  atModuleItem() {
    if (this.type !== "import") return this.type === "export";
    let t = this.input.charCodeAt(this.peek(this.pos));
    return t !== 40 && t !== 46;
  }
  moduleItem() {
    let { start: t } = this;
    if (!this.isModule) this.raise(t, "'import' and 'export' may appear only with 'sourceType: module'");
    if (this.eat("import")) {
      let n = this.importSpecifiers(), a = this.stringLiteral(), o = this.importAttributes();
      return { type: "ImportDeclaration", start: t, end: this.lastEnd, specifiers: n, source: a, attributes: o };
    }
    if (this.next(), this.eat("*")) {
      let n = this.eatWord("as") ? this.exportName() : null;
      if (n) this.recordExport(_(n), n.start);
      this.expectWord("from");
      let a = this.stringLiteral(), o = this.importAttributes();
      return { type: "ExportAllDeclaration", start: t, end: this.lastEnd, exported: n, source: a, attributes: o };
    }
    if (this.eat("default")) {
      this.recordExport("default", this.lastStart);
      let n = this.defaultExport();
      return { type: "ExportDefaultDeclaration", start: t, end: this.lastEnd, declaration: n };
    }
    let e = [], s = null, i = null, r = [];
    if (this.eat("{")) {
      while (!this.listEnds("}", e.length === 0)) {
        let n = this.exportName(), a = this.eatWord("as") ? this.exportName() : n;
        this.recordExport(_(a), a.start), e.push({ type: "ExportSpecifier", start: n.start, end: this.lastEnd, local: n, exported: a });
      }
      if (this.eatWord("from")) i = this.stringLiteral(), r = this.importAttributes();
      else {
        for (let { local: n } of e) this.exportLocal(n);
        this.semicolon();
      }
    } else s = this.exportedDeclaration();
    return { type: "ExportNamedDeclaration", start: t, end: this.lastEnd, declaration: s, specifiers: e, source: i, attributes: r };
  }
  exportedDeclaration() {
    let { type: t } = this, e = t === "var" || t === "const" || t === "class" || t === "function" || this.atLetDeclaration("") || this.atAsyncFunction() ? this.statement("") : this.unexpected();
    switch (e.type) {
      case "VariableDeclaration":
        for (let { id: s } of e.declarations) this.recordExports(s);
        return e;
      case "ClassDeclaration":
      case "FunctionDeclaration":
        return this.recordExports(e.id), e;
      default:
        this.unexpected();
    }
  }
  defaultExport() {
    let { start: t } = this, e = this.atAsyncFunction();
    if (e || this.type === "function") {
      if (this.next(), e) this.next();
      let i = this.eat("*");
      if (this.at("name")) return this.namedFunction(t, e, i, false);
      return this.openFunction(e, i, 0), this.functionRest("FunctionDeclaration", t, null);
    }
    if (this.type === "class") {
      let i = this.classHead();
      return this.at("name") ? this.classRest("ClassDeclaration", t, this.bound(), i) : this.classRest("ClassDeclaration", t, null, i);
    }
    let s = this.assignment();
    return this.semicolon(), s;
  }
  exportLocal(t) {
    if (t.type === "Literal") this.raise(t.start, "A string literal cannot be used as an exported binding without `from`.");
    if (this.refuseReservedWord(t), this.top.bindingsOf(t.name) === 0) this.exportsToDefine.set(t.name, t.start);
  }
  recordExport(t, e) {
    if (this.exported.has(t)) this.raise(e, `Duplicate export '${t}'`);
    this.exported.add(t);
  }
  recordExports(t) {
    switch (t?.type) {
      case "Identifier":
        return this.recordExport(t.name, t.start);
      case "AssignmentPattern":
        return this.recordExports(t.left);
      case "RestElement":
        return this.recordExports(t.argument);
      case "ArrayPattern":
        for (let e of t.elements) this.recordExports(e);
        return;
      case "ObjectPattern":
        for (let e of t.properties) this.recordExports(e.type === "Property" ? e.value : e);
        return;
      default:
    }
  }
  exportName() {
    if (this.type !== "string") return this.anyName();
    let t = !new RegExp("\\p{Surrogate}", "u").test(this.text), e = this.literal();
    if (!t) this.raise(e.start, "An export name cannot include a lone surrogate.");
    return e;
  }
  stringLiteral() {
    if (this.type !== "string") this.unexpected();
    return this.literal();
  }
  importSpecifiers() {
    let t = [];
    if (this.type === "string") return t;
    let e = true;
    if (this.type === "name") {
      let i = this.bound(), { start: r, end: n } = i;
      t.push({ type: "ImportDefaultSpecifier", start: r, end: n, local: i }), e = this.eat(",");
    }
    let { start: s } = this;
    if (e && this.eat("*")) {
      this.expectWord("as");
      let i = this.bound(), { end: r } = i;
      t.push({ type: "ImportNamespaceSpecifier", start: s, end: r, local: i });
    } else if (e) {
      this.expect("{");
      for (let i = true; !this.listEnds("}", i); i = false) {
        let r = this.exportName(), n;
        if (this.eatWord("as")) n = this.name();
        else if (r.type === "Identifier") this.refuseReservedWord(r), n = r;
        else this.raise(r.start, "Binding rvalue");
        this.checkTarget(n, E), t.push({ type: "ImportSpecifier", start: r.start, end: n.end, imported: r, local: n });
      }
    }
    return this.expectWord("from"), t;
  }
  importAttributes() {
    let t = [];
    if (this.eat("with")) {
      let e = /* @__PURE__ */ new Set();
      this.expect("{");
      while (!this.listEnds("}", t.length === 0)) {
        let s = this.at("string") ? this.literal() : this.anyName();
        this.expect(":");
        let i = this.stringLiteral();
        if (e.has(_(s))) this.raise(s.start, `Duplicate attribute key '${_(s)}'`);
        e.add(_(s)), t.push({ type: "ImportAttribute", start: s.start, end: i.end, key: s, value: i });
      }
    }
    return this.semicolon(), t;
  }
  openFunction(t, e, s) {
    this.openScope(L | s | (t ? T : 0) | (e ? P : 0));
  }
  functionDeclaration(t, e, s) {
    if (s && this.type === "*") this.unexpected();
    return this.namedFunction(t, e, this.eat("*"), s);
  }
  namedFunction(t, e, s, i) {
    let r = this.name();
    if (!i) this.checkTarget(r, !this.strict && !e && !s ? ct : this.scope.functionsAreVars ? k : E);
    return this.openFunction(e, s, 0), this.functionRest("FunctionDeclaration", t, r);
  }
  functionExpression(t, e) {
    this.openFunction(e, this.eat("*"), 0);
    let { firstAwaitName: s } = this, i = this.type === "name" ? this.name() : null;
    return this.firstAwaitName = s, this.functionRest("FunctionExpression", t, i);
  }
  method(t, e, s, i = x) {
    this.openFunction(t, e, i);
    let r = this.functionRest("FunctionExpression", this.start, null), { start: n, params: a } = r;
    if (s === "get" && a.length !== 0) this.raise(n, "getter should have no params");
    if (s === "set" && a.length !== 1) this.raise(n, "setter should have exactly one param");
    if (s === "set" && a[0]?.type === "RestElement") this.raise(a[0].start, "Setter cannot use rest params");
    return r;
  }
  functionRest(t, e, s) {
    let { firstYield: i, firstAwait: r, firstAwaitName: n } = this, { flags: a } = this.scope, o = [];
    this.firstYield = this.firstAwait = this.firstAwaitName = 0, this.expect("(");
    while (!this.listEnds(")", o.length === 0)) {
      if (this.type === "...") {
        o.push(this.lastBinding(")"));
        break;
      }
      o.push(this.bindingElement());
    }
    this.checkParamDefaults();
    let h = this.functionBody(e, s, o);
    return this.firstYield = i, this.firstAwait = r, this.firstAwaitName = n, { type: t, start: e, end: this.lastEnd, id: s, expression: false, generator: (a & P) !== 0, async: (a & T) !== 0, params: o, body: h };
  }
  functionBody(t, e, s) {
    let { strict: i, labels: r } = this, n = s.every((h) => h.type === "Identifier"), a = (!i || !n) && this.saysUseStrict(this.end);
    if (a && !n) this.raise(t, "Illegal 'use strict' directive in function with non-simple parameter list");
    if (this.labels = [], this.strict ||= a, this.declareParams(s, !this.strict && n && !(this.scope.flags & (K | x))), this.strict && e) this.checkTarget(e, z);
    let o = this.block(false, a);
    return this.markDirectives(o.body), this.labels = r, this.closeScope(), o;
  }
  declareParams(t, e) {
    let s = t.length === 1 && t[0]?.type === "Identifier", i = e || s ? void 0 : /* @__PURE__ */ new Set();
    for (let r of t) this.checkElement(r, k, i);
  }
  arrow(t, e, s, i) {
    let { firstYield: r, firstAwait: n, firstAwaitName: a } = this, o = [];
    this.openFunction(s, false, K), this.firstYield = this.firstAwait = this.firstAwaitName = 0;
    for (let l of e) o.push(this.toPattern(l, true));
    let h = this.type !== "{", c;
    if (h) c = this.assignment(i), this.declareParams(o, false), this.closeScope();
    else c = this.functionBody(t, null, o);
    return this.firstYield = r, this.firstAwait = n, this.firstAwaitName = a, { type: "ArrowFunctionExpression", start: t, end: this.lastEnd, id: null, expression: h, generator: false, async: s, params: o, body: c };
  }
  bound() {
    let t = this.name();
    return this.checkTarget(t, E), t;
  }
  bindingTarget() {
    let { start: t } = this;
    if (this.eat("[")) {
      let s = [];
      while (!this.listEnds("]", s.length === 0)) {
        if (this.type === "...") {
          s.push(this.lastBinding("]"));
          break;
        }
        s.push(this.type === "," ? null : this.bindingElement());
      }
      return { type: "ArrayPattern", start: t, end: this.lastEnd, elements: s };
    }
    if (!this.eat("{")) return this.name();
    let e = [];
    while (!this.listEnds("}", e.length === 0)) e.push(this.bindingProperty());
    return { type: "ObjectPattern", start: t, end: this.lastEnd, properties: e };
  }
  bindingProperty() {
    let { start: t } = this;
    if (this.eat("...")) {
      let n = this.name();
      if (this.type === ",") this.raise(this.start, Z);
      return { type: "RestElement", start: t, end: n.end, argument: n };
    }
    let e = this.type === "[", s = this.propertyName(), i = !this.eat(":");
    if (i && this.type === "(") this.unexpected();
    let r = this.bindingElement(i ? this.shorthandValue(s, e, true) : void 0);
    return { type: "Property", start: t, end: this.lastEnd, method: false, shorthand: i, computed: e, key: s, value: r, kind: "init" };
  }
  bindingElement(t = this.bindingTarget()) {
    if (!this.eat("=")) return t;
    let e = this.assignment();
    return { type: "AssignmentPattern", start: t.start, end: this.lastEnd, left: t, right: e };
  }
  restBinding() {
    let { start: t } = this;
    this.next();
    let e = this.bindingTarget();
    if (this.type === ",") this.raise(this.start, Z);
    return { type: "RestElement", start: t, end: e.end, argument: e };
  }
  lastBinding(t) {
    let e = this.restBinding();
    return this.expect(t), e;
  }
  classHead() {
    let t = this.strict;
    return this.next(), this.strict = true, t;
  }
  classDeclaration() {
    let { start: t } = this, e = this.classHead();
    if (this.type !== "name") this.unexpected();
    return this.classRest("ClassDeclaration", t, this.bound(), e);
  }
  classRest(t, e, s, i) {
    let r = this.eat("extends") ? this.subscripted(void 0, f) : null, n = { declared: /* @__PURE__ */ new Map(), used: [] }, a = this.start, o = [], h = false;
    this.classes.push(n), this.expect("{");
    while (this.type !== "}") {
      if (this.eat(";")) continue;
      let p = this.classMember(r !== null);
      if (o.push(p), p.type === "StaticBlock") continue;
      let b = p.type === "MethodDefinition" ? p.kind : "field";
      if (b === "constructor") {
        if (h) this.raise(p.start, "Duplicate constructor in the same class");
        h = true;
      } else if (p.key.type === "PrivateIdentifier") {
        let { name: w } = p.key, M = n.declared.get(w), Q = b === "get" ? "set" : b === "set" ? "get" : "";
        if (M !== void 0 && M !== Q + p.static) this.raise(p.key.start, `Identifier '#${w}' has already been declared`);
        n.declared.set(w, M === void 0 && Q ? b + p.static : "");
      }
    }
    this.strict = i, this.next(), this.classes.pop();
    let c = this.classes.at(-1);
    for (let p of n.used) if (!n.declared.has(p.name)) this.usePrivateName(p, c);
    let l = this.lastEnd;
    return { type: t, start: e, end: l, id: s, superClass: r, body: { type: "ClassBody", start: a, end: l, body: o } };
  }
  usePrivateName(t, e) {
    if (!e) this.raise(t.start, `Private field '#${t.name}' must be declared in an enclosing class`);
    e.used.push(t);
  }
  atPropertyName() {
    let { type: t } = this;
    return t === "name" || t === "num" || t === "string" || t === "[" || this.isKeyword;
  }
  atMemberName() {
    return this.atPropertyName() || this.type === "privateId";
  }
  classMember(t) {
    let { start: e } = this, s = false, i = false, r = false, n, a = false;
    if (this.eatWord("static")) {
      if (this.eat("{")) return this.staticBlock(e);
      s = this.atMemberName() || this.type === "*", a = !s;
    }
    if (!a && this.eatWord("async")) i = (this.atMemberName() || this.at("*")) && !this.isOnNewLine, a = !i;
    if (!a) r = this.eat("*");
    if (!a && !i && !r) {
      let p = this.atWord("get") ? "get" : "set";
      if (this.eatWord(p)) a = !this.atMemberName(), n = a ? void 0 : p;
    }
    let o = !a && this.type === "[", h;
    if (a) h = { type: "Identifier", start: this.lastStart, end: this.lastEnd, name: this.input.slice(this.lastStart, this.lastEnd) };
    else if (this.type === "privateId") {
      if (this.text === "constructor") this.raise(this.start, "Classes can't have an element named '#constructor'");
      h = this.privateName();
    } else h = this.propertyName();
    let c = o ? void 0 : yt(h);
    if (this.type === "(" || n || r || i) {
      let p = !s && c === "constructor";
      if (p && n) this.raise(h.start, "Constructor can't have get/set modifier");
      if (p && r) this.raise(h.start, "Constructor can't be a generator");
      if (p && i) this.raise(h.start, "Constructor can't be an async method");
      if (s && c === "prototype") this.raise(h.start, "Classes may not have a static property named prototype");
      let b = p ? "constructor" : n ?? "method", w = this.method(i, r, b, p && t ? x | G : x);
      return { type: "MethodDefinition", start: e, end: this.lastEnd, static: s, computed: o, key: h, kind: b, value: w };
    }
    if (c === "constructor") this.raise(h.start, "Classes can't have a field named 'constructor'");
    if (s && c === "prototype") this.raise(h.start, "Classes can't have a static field named 'prototype'");
    let l = null;
    if (this.eat("=")) this.openScope(Y | x), l = this.assignment(), this.closeScope();
    return this.semicolon(), { type: "PropertyDefinition", start: e, end: this.lastEnd, static: s, computed: o, key: h, value: l };
  }
  staticBlock(t) {
    let { labels: e } = this, s = [];
    this.labels = [], this.openScope(V | x);
    while (this.type !== "}") s.push(this.statement(""));
    return this.next(), this.closeScope(), this.labels = e, { type: "StaticBlock", start: t, end: this.lastEnd, body: s };
  }
  expression(t = f, e) {
    let { start: s } = this, i = this.assignment(t, e);
    if (this.type !== ",") return i;
    let r = [i];
    while (this.eat(",")) r.push(this.assignment(t, e));
    return { type: "SequenceExpression", start: s, end: this.lastEnd, expressions: r };
  }
  assignment(t = f, e) {
    let { start: s, type: i } = this;
    if (this.atWord("yield")) {
      if (this.inBody(P)) return this.yieldExpression(t);
      this.operandAllowed = false;
    }
    if (i === "name" || i === "(") this.arrowMayStartAt = s, this.arrowIsInForAwait = t === ut;
    let r = e ?? (i === "(" || i === "[" || i === "{" ? new A() : this.noDoubts), { parenthesizedTarget: n, commaAfterSpread: a, secondProto: o } = r;
    r.parenthesizedTarget = r.commaAfterSpread = -1;
    let h = this.unary(r, false, false, t);
    if (!r.mustBePattern()) {
      if (this.precedence > 0 && (h.type !== "ArrowFunctionExpression" || h.start !== s)) h = this.binary(h, s, 0, t);
      if (this.eat("?")) {
        let c = this.assignment();
        this.expect(":");
        let l = this.assignment(t);
        h = { type: "ConditionalExpression", start: s, end: this.lastEnd, test: this.notPrivate(h), consequent: c, alternate: l };
      }
    }
    if (h = this.notPrivate(h), this.type !== "=" && this.type !== "assign") {
      if (!e) this.settleAsExpression(r);
      if (n >= 0) r.parenthesizedTarget = n;
      if (a >= 0) r.commaAfterSpread = a;
      return h;
    }
    return this.assignTo(h, s, r, o, t);
  }
  assignTo(t, e, s, i, r) {
    let n = this.text, a;
    if (n === "=") a = this.toPattern(t, false, s), this.checkPattern(a);
    else this.checkTarget(t), a = t;
    if (s.parenthesizedTarget = s.commaAfterSpread = -1, s.secondProto = -1, s.shorthandDefault >= t.start) s.shorthandDefault = -1;
    this.next();
    let o = this.assignment(r);
    return s.secondProto = i, { type: "AssignmentExpression", start: e, end: this.lastEnd, operator: n, left: a, right: o };
  }
  notPrivate(t) {
    return t.type === "PrivateIdentifier" ? this.unexpected() : t;
  }
  yieldExpression(t) {
    let { start: e } = this;
    this.firstYield ||= e, this.next();
    let s = !this.isOnNewLine && (this.at("*") || Nt.has(this.type)), i = s && this.eat("*"), r = s ? this.assignment(t) : null;
    return { type: "YieldExpression", start: e, end: this.lastEnd, delegate: i, argument: r };
  }
  binary(t, e, s, i) {
    while (this.precedence > s && !(i && this.type === "in")) {
      let { type: r, text: n } = this, a = r === "??" ? 2 : this.precedence;
      this.next();
      let o = this.start, h = this.unary(void 0, false, false, i);
      if (this.precedence > a) h = this.binary(h, o, a, i);
      h = this.rightOperand(h);
      let c = this.lastEnd;
      if (a > 2) {
        t = { type: "BinaryExpression", start: e, end: c, left: t, operator: n, right: h };
        continue;
      }
      if (t = { type: "LogicalExpression", start: e, end: c, left: this.notPrivate(t), operator: n, right: h }, r === "??" ? this.at("||") || this.at("&&") : this.at("??")) this.raise(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses");
    }
    return t;
  }
  rightOperand(t) {
    return t.type === "PrivateIdentifier" ? this.raise(t.start, "Private identifier can only be left side of binary expression") : t;
  }
  unary(t, e, s, i) {
    let { start: r, type: n } = this, a;
    if (n === "prefix" || n === "sign" || n === "typeof" || n === "void" || n === "delete") return this.prefixed(t, s, i);
    if (n === "update") {
      let h = this.text;
      this.next();
      let c = this.notPrivate(this.unary(void 0, true, true, i));
      this.settleAsExpression(t), this.checkTarget(c), a = { type: "UpdateExpression", start: r, end: this.lastEnd, operator: h, prefix: true, argument: c };
    } else if (this.atWord("await") && this.canAwait()) {
      this.firstAwait ||= r, this.next();
      let h = this.notPrivate(this.unary(void 0, true, false, i));
      e = true, a = { type: "AwaitExpression", start: r, end: this.lastEnd, argument: h };
    } else if (n === "privateId" && !e) {
      if (i || this.classes.length === 0) this.unexpected();
      let h = this.privateName();
      return this.at("in") ? h : this.unexpected();
    } else {
      if (a = this.subscripted(t, i), t?.mustBePattern()) return a;
      while (this.at("update") && !this.isOnNewLine) {
        let h = this.text;
        this.checkTarget(a), this.next(), a = { type: "UpdateExpression", start: r, end: this.lastEnd, operator: h, prefix: false, argument: a };
      }
    }
    if (this.type !== "**" || s) return a;
    if (this.next(), e) this.unexpected(this.lastStart);
    let o = this.rightOperand(this.unary(void 0, false, false, i));
    return { type: "BinaryExpression", start: r, end: this.lastEnd, left: a, operator: "**", right: o };
  }
  prefixed(t, e, s) {
    let { start: i, text: r } = this;
    this.next();
    let n = this.notPrivate(this.unary(void 0, true, false, s));
    if (this.settleAsExpression(t), r === "delete") this.checkDelete(n, i);
    let a = this.lastEnd;
    if (!e && this.eat("**")) this.unexpected(this.lastStart);
    return { type: "UnaryExpression", start: i, end: a, operator: r, prefix: true, argument: n };
  }
  tagged(t, e, s) {
    let i = s ? this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions") : this.template(true);
    return { type: "TaggedTemplateExpression", start: e, end: i.end, tag: t, quasi: i };
  }
  checkDelete(t, e) {
    if (t.type === "Identifier" && this.strict) this.raise(e, "Deleting local variable in strict mode");
    let s = t.type === "ChainExpression" ? t.expression : t;
    if (s.type === "MemberExpression" && s.property.type === "PrivateIdentifier") this.raise(e, "Private fields can not be deleted");
  }
  subscripted(t, e) {
    let { start: s } = this, i = this.atom(t, e, false);
    if (i.type === "ArrowFunctionExpression" && this.input.charCodeAt(this.lastStart) !== 41) return i;
    let r = this.subscripts(i, s, true, e);
    if (t && r.type === "MemberExpression") {
      if (t.parenthesizedTarget >= r.start) t.parenthesizedTarget = -1;
      if (t.parenthesized >= r.start) t.parenthesized = -1;
      if (t.commaAfterSpread >= r.start) t.commaAfterSpread = -1;
    }
    return r;
  }
  subscripts(t, e, s, i) {
    let r = this.arrowMayStartAt === t.start && t.type === "Identifier" && t.name === "async" && t.end - t.start === 5 && t.end === this.lastEnd && !this.isOnNewLine, n = t, a = false;
    for (; ; ) {
      let o = this.eat("?.");
      if (o && !s) this.raise(this.lastStart, "Optional chaining cannot appear in the callee of new expressions");
      let { type: h } = this;
      if (h === "(" && s) {
        let c = this.call(n, e, o, r && !o, i);
        if (c.type === "ArrowFunctionExpression") {
          n = c;
          break;
        }
        n = c;
      } else if (h === "`" && n.type !== "Super") n = this.tagged(n, e, a || o);
      else if (h === "[" || o || h === ".") {
        let c = h === "[", l;
        if (c) this.next(), l = this.expression(), this.expect("]");
        else {
          if (!o) this.next();
          l = this.at("privateId") && n.type !== "Super" ? this.privateName() : this.anyName();
        }
        n = { type: "MemberExpression", start: e, end: this.lastEnd, object: n, property: l, computed: c, optional: o };
      } else break;
      a ||= o;
    }
    if (n.type === "Super") this.unexpected();
    return a ? { type: "ChainExpression", start: e, end: this.lastEnd, expression: n } : n;
  }
  call(t, e, s, i, r) {
    let { firstYield: n, firstAwait: a, firstAwaitName: o } = this, h = new A();
    this.next(), this.firstYield = this.firstAwait = this.firstAwaitName = 0;
    let c = this.callArguments(h);
    if (i && !this.isOnNewLine && this.eat("=>")) {
      if (this.settleAsPattern(h, true), this.checkParamDefaults(), this.firstAwaitName) this.raise(this.firstAwaitName, X);
      return this.firstYield = n, this.firstAwait = a, this.firstAwaitName = o, this.arrow(e, c, true, r);
    }
    return this.settleAsExpression(h), this.firstYield = n || this.firstYield, this.firstAwait = a || this.firstAwait, this.firstAwaitName = o || this.firstAwaitName, { type: "CallExpression", start: e, end: this.lastEnd, callee: t, arguments: c, optional: s };
  }
  callArguments(t) {
    let e = [];
    while (!this.listEnds(")", e.length === 0)) e.push(this.type === "..." ? this.spread(t) : this.assignment(f, t));
    return e;
  }
  spread(t) {
    let { start: e } = this;
    this.next();
    let s = this.assignment(f, t);
    if (t && this.type === "," && t.commaAfterSpread < 0) t.commaAfterSpread = this.start;
    return { type: "SpreadElement", start: e, end: this.lastEnd, argument: s };
  }
  atom(t, e, s) {
    if (this.type === "/") this.readRegExp();
    let { start: i, end: r, type: n } = this;
    switch (n) {
      case "name":
        return this.nameOrArrow(e);
      case "num":
      case "string":
      case "regexp":
        return this.literal();
      case "this":
        return this.next(), { type: "ThisExpression", start: i, end: r };
      case "null":
      case "true":
      case "false":
        return this.next(), { type: "Literal", start: i, end: r, value: n === "null" ? null : n === "true", raw: n };
      case "(": {
        let a = this.parenthesesOrArrow(e);
        if (t) {
          if (t.parenthesizedTarget < 0 && a.type !== "Identifier" && a.type !== "MemberExpression") t.parenthesizedTarget = i;
          if (t.parenthesized < 0) t.parenthesized = i;
        }
        return a;
      }
      case "[": {
        let a = [];
        this.next();
        while (!this.listEnds("]", a.length === 0)) a.push(this.type === "," ? null : this.type === "..." ? this.spread(t) : this.assignment(f, t));
        return { type: "ArrayExpression", start: i, end: this.lastEnd, elements: a };
      }
      case "{":
        return this.object(t);
      case "function":
        return this.next(), this.functionExpression(i, false);
      case "class": {
        let a = this.classHead(), o = this.at("name") ? this.name() : null;
        return this.classRest("ClassExpression", i, o, a);
      }
      case "new":
        return this.newExpression();
      case "`":
        return this.template(false);
      case "super":
        if (!(this.scope.thisScope.flags & x)) this.raise(i, "'super' keyword outside a method");
        if (this.next(), this.at("(") && !(this.scope.thisScope.flags & G)) this.raise(i, "super() call outside constructor of a subclass");
        if (!this.at(".") && !this.at("[") && !this.at("(")) this.unexpected();
        return { type: "Super", start: i, end: r };
      case "import":
        if (this.next(), this.at("(") && !s) return this.dynamicImport(i);
        return this.at(".") ? this.metaProperty("import", "meta", i) : this.unexpected();
      default:
        this.unexpected();
    }
  }
  nameOrArrow(t) {
    let { start: e, hasEscape: s } = this, i = this.arrowMayStartAt === e, r = this.name();
    if (this.isOnNewLine) return r;
    let n = r.name === "async" && !s;
    if (n && this.eat("function")) return this.setContext(S), this.functionExpression(e, true);
    if (!i) return r;
    if (this.eat("=>")) return this.arrow(e, [r], false, t);
    if (n && this.type === "name" && !(this.arrowIsInForAwait && this.atWord("of"))) {
      let a = this.name();
      if (this.isOnNewLine) this.unexpected();
      return this.expect("=>"), this.arrow(e, [a], true, t);
    }
    return r;
  }
  parenthesesOrArrow(t) {
    let { start: e, firstYield: s, firstAwait: i } = this, r = this.arrowMayStartAt === e, n = new A(), a = [], o, h = false;
    this.next();
    let c = this.start;
    this.firstYield = this.firstAwait = 0;
    while (this.type !== ")") {
      if (a.length > 0) {
        if (this.expect(","), this.at(")")) {
          h = true;
          break;
        }
      }
      if (this.type === "...") {
        o = this.restBinding();
        break;
      }
      a.push(this.assignment(f, n));
    }
    let l = this.lastEnd;
    if (this.expect(")"), r && !this.isOnNewLine && this.eat("=>")) return this.settleAsPattern(n, true), this.checkParamDefaults(), this.firstYield = s, this.firstAwait = i, this.arrow(e, o ? [...a, o] : a, false, t);
    let [p] = a;
    if (o) this.unexpected(o.start);
    if (!p || h) this.unexpected(this.lastStart);
    return this.settleAsExpression(n), this.firstYield = s || this.firstYield, this.firstAwait = i || this.firstAwait, a.length === 1 ? p : { type: "SequenceExpression", start: c, end: l, expressions: a };
  }
  newExpression() {
    let { start: t } = this;
    if (this.next(), this.type === ".") return this.metaProperty("new", "target", t);
    let e = this.start, s = this.atom(void 0, f, true), i = s.type === "Super" && this.at("(") ? s : this.subscripts(s, e, false, f), r = this.eat("(") ? this.callArguments() : [];
    return { type: "NewExpression", start: t, end: this.lastEnd, callee: i, arguments: r };
  }
  metaProperty(t, e, s) {
    let i = this.lastEnd;
    this.next();
    let { hasEscape: r } = this, n = this.anyName();
    if (n.name !== e) this.raise(n.start, `The only valid meta property for ${t} is '${t}.${e}'`);
    if (r) this.raise(s, `'${t}.${e}' must not contain escaped characters`);
    if (t === "import" && !this.isModule) this.raise(s, "Cannot use 'import.meta' outside a module");
    if (t === "new" && this.scope.thisScope === this.top) this.raise(s, "'new.target' can only be used in functions and class static block");
    return { type: "MetaProperty", start: s, end: n.end, meta: { type: "Identifier", start: s, end: i, name: t }, property: n };
  }
  dynamicImport(t) {
    this.next();
    let e = this.assignment(), s = null;
    if (!this.listEnds(")", false)) {
      if (s = this.assignment(), !this.listEnds(")", false)) this.unexpected();
    }
    return { type: "ImportExpression", start: t, end: this.lastEnd, source: e, options: s };
  }
  template(t) {
    let e = this.start, s = [], i = [];
    this.next();
    for (; ; ) {
      let { start: r, end: n } = this, a = this.type !== "invalidTemplate";
      if (!a && !t) this.raise(r, "Bad escape sequence in untagged template literal");
      let o = { raw: this.input.slice(r, n).replace(/\r\n?/g, `
`), cooked: a ? this.text : null };
      this.next();
      let h = this.type === "`";
      if (i.push({ type: "TemplateElement", start: r, end: n, value: o, tail: h }), h) break;
      if (this.type === "eof") this.raise(this.pos, "Unterminated template literal");
      this.expect("${"), s.push(this.expression()), this.expect("}");
    }
    return this.next(), { type: "TemplateLiteral", start: e, end: this.lastEnd, expressions: s, quasis: i };
  }
  object(t) {
    let { start: e } = this, s = [], i = false;
    this.setContext(N), this.next();
    while (!this.listEnds("}", s.length === 0)) {
      if (this.type === "...") {
        s.push(this.spread(t));
        continue;
      }
      let r = this.property(t);
      if (s.push(r), yt(r.key) === "__proto__" && r.kind === "init" && !r.computed && !r.method && !r.shorthand) {
        if (i && !t) this.raise(r.key.start, "Redefinition of __proto__ property");
        if (i && t && t.secondProto < 0) t.secondProto = r.key.start;
        i = true;
      }
    }
    return { type: "ObjectExpression", start: e, end: this.lastEnd, properties: s };
  }
  property(t) {
    let { start: e } = this, s = this.eat("*"), i = false, r = this.type === "[", n = this.type === "name" && !this.hasEscape && !s ? this.text : "", a = this.propertyName();
    if (n === "async" && !this.isOnNewLine && (this.atPropertyName() || this.type === "*")) i = true, s = this.eat("*"), r = this.at("["), a = this.propertyName();
    let o = "init", h = false, c = false, l;
    if (this.type === "(") h = true, l = this.method(i, s, o);
    else if (i || s) this.unexpected();
    else if (this.eat(":")) l = this.assignment(f, t);
    else if ((n === "get" || n === "set") && this.type !== "," && this.type !== "}" && this.type !== "=") o = n, r = this.type === "[", a = this.propertyName(), l = this.method(false, false, o);
    else if (c = true, l = this.shorthandValue(a, r, t !== void 0), this.type === "=" && t) {
      if (t.shorthandDefault < 0) t.shorthandDefault = this.start;
      this.next();
      let p = this.assignment();
      l = { type: "AssignmentPattern", start: e, end: this.lastEnd, left: l, right: p };
    }
    return { type: "Property", start: e, end: this.lastEnd, method: h, shorthand: c, computed: r, key: a, value: l, kind: o };
  }
  shorthandValue(t, e, s) {
    if (e || t.type !== "Identifier") this.unexpected();
    let { start: i, end: r, name: n } = t;
    if (this.refuseReservedWord(t), n === "await" && s) this.firstAwaitName ||= i;
    return { type: "Identifier", start: i, end: r, name: n };
  }
  propertyName() {
    if (this.type === "num" || this.type === "string") return this.literal();
    if (!this.eat("[")) return this.anyName();
    let t = this.assignment();
    return this.expect("]"), t;
  }
  literal() {
    let { type: t, start: e, end: s, text: i, value: r } = this, n = this.input.slice(e, s);
    if (this.next(), t === "string") return { type: "Literal", start: e, end: s, value: i, raw: n };
    if (t === "regexp") {
      let a = { pattern: i, flags: n.slice(i.length + 2) };
      return { type: "Literal", start: e, end: s, value: r, raw: n, regex: a };
    }
    return typeof r === "bigint" ? { type: "Literal", start: e, end: s, value: r, raw: n, bigint: r.toString() } : { type: "Literal", start: e, end: s, value: r, raw: n };
  }
  privateName() {
    let { start: t, end: e, text: s } = this, i = { type: "PrivateIdentifier", start: t, end: e, name: s };
    return this.next(), this.usePrivateName(i, this.classes.at(-1)), i;
  }
  anyName() {
    let { start: t, end: e, text: s } = this;
    if (this.isKeyword) this.keywordIsName();
    else if (this.type !== "name") this.unexpected();
    return this.next(), { type: "Identifier", start: t, end: e, name: s };
  }
  name() {
    let t = this.anyName();
    if (this.refuseReservedWord(t), t.name === "await") this.firstAwaitName ||= t.start;
    return t;
  }
  plainName() {
    return this.type === "name" ? this.name() : this.unexpected();
  }
}
function mt(t) {
  return t >= 55296 && t < 56320;
}
function _(t) {
  return t.type === "Identifier" ? t.name : String(t.value);
}
function yt(t) {
  if (t.type === "Identifier") return t.name;
  return t.type === "Literal" ? t.value : void 0;
}
function Vt(t, e = {}) {
  return new J(t, e, 0).program();
}
