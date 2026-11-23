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
var chunk_2srd669c_exports = {};
__export(chunk_2srd669c_exports, {
  ive: () => ive,
  ws: () => ws
});
module.exports = __toCommonJS(chunk_2srd669c_exports);
class ive extends Error {
  name = "InvalidArgumentError";
}
class ws {
  flags;
  description;
  short;
  long;
  required = false;
  optional = false;
  variadic;
  negate;
  hidden = false;
  mandatory = false;
  defaultValue;
  presetValue;
  argChoices;
  conflictingKeys;
  impliedValues;
  parseArg;
  #e;
  constructor(e, t = "") {
    this.flags = e;
    this.description = t;
    let n = e.length, i = -1, o = e.length;
    for (let s = e.length - 1; s >= 0; s--) switch (e.charAt(s)) {
      case "<":
        this.required = true;
        break;
      case "[":
        this.optional = true;
        break;
      case " ":
      case ",":
      case "|":
        if (s + 1 < n) i = s + 1, o = n;
        n = s;
    }
    let r = e.slice(0, n);
    if (i > 0 && !"<[".includes(e.charAt(i))) this.short = r, this.long = e.slice(i, o);
    else if (n === 2 && r[0] === "-" && r !== "--") this.short = r;
    else this.long = r;
    let a = e.length - 4;
    this.variadic = (e.startsWith("...>", a) || e.startsWith("...]", a)) && /\w/.test(e.charAt(a - 1)), this.negate = (this.long ?? "").slice(0, 5) === "--no-";
  }
  name() {
    let { long: e, short: t = "" } = this;
    return e?.slice(e.startsWith("--") ? 2 : 0) ?? t.slice(1);
  }
  attributeName() {
    return this.#e ??= this.name().replace(/^no-/, "").replace(/-(.)/g, (e, t) => t.toUpperCase()), this.#e;
  }
  default(e) {
    return this.defaultValue = e, this;
  }
  preset(e) {
    return this.presetValue = e, this;
  }
  argParser(e) {
    return this.parseArg = e, this;
  }
  choices(e) {
    let t = [...e];
    return this.argChoices = t, this.parseArg = (n) => {
      if (!t.includes(n)) throw new ive(`Allowed choices are ${t.join(", ")}.`);
      return n;
    }, this;
  }
  makeOptionMandatory() {
    return this.mandatory = true, this;
  }
  hideHelp(e = true) {
    return this.hidden = e, this;
  }
  conflicts(e) {
    return this.conflictingKeys = [...this.conflictingKeys ?? [], e], this;
  }
  implies(e) {
    return this.impliedValues = { ...this.impliedValues, ...e }, this;
  }
}
