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
var chunk_a5v5cv8j_exports = {};
__export(chunk_a5v5cv8j_exports, {
  Bht: () => Bht
});
module.exports = __toCommonJS(chunk_a5v5cv8j_exports);
var import_chunk_s2fwt5ac = require("/$bunfs/root/chunk-s2fwt5ac.js");
var a = 10, n = Buffer.alloc(0);
class Bht {
  parseJson;
  jsonLine;
  input;
  output;
  onclose;
  onerror;
  onmessage;
  #r = false;
  #e = [];
  #t = n;
  #s = 0;
  #i = (t) => this.onerror?.(t);
  #o = (t) => {
    let e = typeof t === "string" ? Buffer.from(t) : t;
    this.#t = this.#s < this.#t.length ? Buffer.concat([this.#t.subarray(this.#s), e]) : e, this.#s = 0;
    let r;
    while ((r = this.#t.indexOf(a, this.#s)) !== -1) {
      let i = this.#s, o = this.#e;
      this.#s = r + 1;
      try {
        let s;
        if (o.length > 0) this.#e = [], o.push(this.#t.subarray(i, r)), s = Buffer.concat(o).toString();
        else s = this.#t.toString("utf8", i, r);
        this.onmessage?.((0, import_chunk_s2fwt5ac.Wet)().parse(this.parseJson(s.endsWith("\r") ? s.slice(0, -1) : s)));
      } catch (s) {
        this.onerror?.(s);
      }
    }
    if (this.#s < this.#t.length) this.#e.push(this.#t.subarray(this.#s));
    this.#t = n;
  };
  constructor(t, e, r = process.stdin, i = process.stdout) {
    this.parseJson = t;
    this.jsonLine = e;
    this.input = r;
    this.output = i;
  }
  async start() {
    if (this.#r) throw Error("StdioServerTransport already started!");
    this.#r = true, this.input.on("data", this.#o), this.input.on("error", this.#i);
  }
  send(t) {
    return new Promise((e) => {
      if (this.output.write(this.jsonLine(t))) e();
      else this.output.once("drain", e);
    });
  }
  async close() {
    if (this.input.off("data", this.#o), this.input.off("error", this.#i), this.input.listenerCount("data") === 0) this.input.pause();
    this.#e = [], this.#t = n, this.onclose?.();
  }
}
