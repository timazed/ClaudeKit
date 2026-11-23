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
var chunk_m2r5bdfb_exports = {};
__export(chunk_m2r5bdfb_exports, {
  hri: () => hri,
  j1a: () => j1a
});
module.exports = __toCommonJS(chunk_m2r5bdfb_exports);
function hri(f, r) {
  let e = 0, i = [], n = f, o = true;
  for (; ; ) {
    if (o) {
      if (o = false, typeof n === "string") e += l(n, r - e);
      else if (typeof n === "number") e += Number.isFinite(n) ? String(n).length : 4;
      else if (typeof n === "boolean") e += n ? 4 : 5;
      else if (typeof n === "bigint") return 1 / 0;
      else if (Array.isArray(n)) {
        if (n.length > r - e) return 1 / 0;
        e += 2, i.push({ kind: "array", members: n, next: 0 });
      } else if (typeof n === "object" && n !== null) e += 2, i.push({ kind: "object", holder: n, keys: Object.keys(n), next: 0, written: 0 });
      else e += 4;
      if (e > r) return e;
      continue;
    }
    let t = i.at(-1);
    if (t === void 0) return e;
    if (t.kind === "array") {
      if (t.next >= t.members.length) {
        i.pop();
        continue;
      }
      if (t.next > 0) e += 1;
      n = t.members[t.next++], o = true;
      continue;
    }
    if (t.next >= t.keys.length) {
      i.pop();
      continue;
    }
    let s = t.keys[t.next++], u = Reflect.get(t.holder, s);
    if (u === void 0 || typeof u === "function" || typeof u === "symbol") continue;
    if (t.written++ > 0) e += 1;
    if (e += l(s, r - e) + 1, e > r) return e;
    n = u, o = true;
  }
}
function j1a(f, r) {
  let e = hri(f, r);
  return e === 1 / 0 || e > r;
}
function l(f, r) {
  if (f.length + 2 > r) return f.length + 2;
  let e = 2;
  for (let i = 0; i < f.length; i++) {
    let n = f.charCodeAt(i);
    if (n === 34 || n === 92) e += 2;
    else if (n < 32) e += n === 8 || n === 9 || n === 10 || n === 12 || n === 13 ? 2 : 6;
    else if (n < 128) e += 1;
    else if (n < 2048) e += 2;
    else if (n >= 55296 && n <= 56319) {
      let o = f.charCodeAt(i + 1);
      if (o >= 56320 && o <= 57343) e += 4, i++;
      else e += 6;
    } else if (n >= 56320 && n <= 57343) e += 6;
    else e += 3;
    if (e > r) return e;
  }
  return e;
}
