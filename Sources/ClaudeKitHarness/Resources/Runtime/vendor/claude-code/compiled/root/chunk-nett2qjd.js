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
var chunk_nett2qjd_exports = {};
__export(chunk_nett2qjd_exports, {
  HMe: () => HMe
});
module.exports = __toCommonJS(chunk_nett2qjd_exports);
var B = new Uint8Array(), k = { pendingBytes: 0, fields: void 0, comment: void 0, line: B, lineBytes: 0, skipping: false, afterCarriageReturn: false, pastFirstLine: false };
var M = new TextDecoder("utf-8", { ignoreBOM: true });
function w(f, e, g) {
  let r = f;
  if (e + g.length > f.length) r = new Uint8Array(Math.max(e + g.length, 2 * f.length)), r.set(f.subarray(0, e));
  return r.set(g, e), r;
}
function HMe(f, e, g = 1 / 0) {
  let r = [], c = f ?? k;
  if (e.length === 0) return { state: c, events: r };
  let { comment: p, line: u, lineBytes: a, skipping: d, pastFirstLine: C } = c, s = c.fields && { ...c.fields }, m = c.pendingBytes - a, x = c.afterCarriageReturn && e[0] === 10 ? 1 : 0, R = e.lastIndexOf(10), h = (e.includes(13, R + 1) ? e.lastIndexOf(13) : R) + 1;
  if (h > x) {
    let y = h - x === e.length ? e : e.subarray(x, h), F = d && a > 0;
    if (a > 0 && !d) y = w(u, a, y).subarray(0, a + y.length);
    u = B, a = 0;
    let n = M.decode(y), T = n.length === y.length, S = -1, b = -1, o = -1, i = 0, A = 0;
    while (i < n.length) {
      if (S < i) {
        let t = n.indexOf(`
`, i);
        S = t === -1 ? n.length : t;
      }
      if (b < i) {
        let t = n.indexOf("\r", i);
        b = t === -1 ? n.length : t;
      }
      let l = Math.min(S, b), U = T ? l : y.indexOf(n.charCodeAt(l), A), O = U - A + 1, I = l === b && S === l + 1 ? 2 : 1;
      if (!C && n.charCodeAt(i) === 65279) i++;
      if (C = true, i === l && !F) {
        if (p !== void 0) r.push({ kind: "comment", text: p });
        if (s !== void 0) r.push(s);
        p = void 0, s = void 0, m = 0, d = false;
      } else if (!d) {
        if (o < i) {
          let t = n.indexOf(":", i);
          o = t === -1 ? n.length : t;
        }
        if (m + O > g) r.push({ kind: "tooLarge" }), s = void 0, d = true;
        else if (o === i) p = n.slice(i + 1, l);
        else {
          m += O, s ??= { kind: "event" };
          let t = n.slice(o + (n.charCodeAt(o + 1) === 32 ? 2 : 1), l);
          switch (o < l ? n.slice(i, o) : "") {
            case "data":
              s.data = s.data === void 0 ? t : `${s.data}
${t}`;
              break;
            case "event":
              s.event = t;
              break;
            case "id":
              if (!t.includes("\0")) s.id = t;
              break;
            case "retry":
              if (/^[0-9]+$/.test(t)) s.retry = Number(t);
          }
        }
      }
      F = false, i = l + I, A = U + I;
    }
  }
  let v = Math.max(x, h), L = e.length - v;
  if (!d && m + a + L > g) r.push({ kind: "tooLarge" }), s = void 0, d = true;
  if (d) u = B;
  else if (L > 0) u = w(u, a, e.subarray(v));
  return a += L, { state: { pendingBytes: m + a, fields: s, comment: p, line: u, lineBytes: a, skipping: d, afterCarriageReturn: e.at(-1) === 13, pastFirstLine: C }, events: r };
}
