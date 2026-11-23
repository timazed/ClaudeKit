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
var chunk_51mmywgr_exports = {};
__export(chunk_51mmywgr_exports, {
  jNn: () => jNn
});
module.exports = __toCommonJS(chunk_51mmywgr_exports);
class O extends Error {
  constructor(n, o) {
    super(n), this.name = "ParseError", this.type = o.type, this.field = o.field, this.value = o.value, this.line = o.line;
  }
}
var I = 10, _ = 13, A = 32;
function y(n) {
}
function jNn(n) {
  if (typeof n == "function") throw TypeError("`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?");
  let { onEvent: o = y, onError: v = y, onRetry: S = y, onComment: b } = n, a = [], x = true, c, f = "", s = 0, l;
  function j(t) {
    if (x && (x = false, t.charCodeAt(0) === 239 && t.charCodeAt(1) === 187 && t.charCodeAt(2) === 191 && (t = t.slice(3))), a.length === 0) {
      let d = m(t);
      d !== "" && a.push(d);
      return;
    }
    if (t.indexOf(`
`) === -1 && t.indexOf("\r") === -1) {
      a.push(t);
      return;
    }
    a.push(t);
    let e = a.join("");
    a.length = 0;
    let i = m(e);
    i !== "" && a.push(i);
  }
  function m(t) {
    let e = 0;
    if (t.indexOf("\r") === -1) {
      let i = t.indexOf(`
`, e);
      for (; i !== -1; ) {
        if (e === i) {
          s > 0 && o({ id: c, event: l, data: f }), c = void 0, f = "", s = 0, l = void 0, e = i + 1, i = t.indexOf(`
`, e);
          continue;
        }
        let d = t.charCodeAt(e);
        if (L(t, e, d)) {
          let r = t.charCodeAt(e + 5) === A ? e + 6 : e + 5, C = t.slice(r, i);
          if (s === 0 && t.charCodeAt(i + 1) === I) {
            o({ id: c, event: l, data: C }), c = void 0, f = "", l = void 0, e = i + 2, i = t.indexOf(`
`, e);
            continue;
          }
          f = s === 0 ? C : `${f}
${C}`, s++;
        } else F(t, e, d) ? l = t.slice(t.charCodeAt(e + 6) === A ? e + 7 : e + 6, i) || void 0 : g(t, e, i);
        e = i + 1, i = t.indexOf(`
`, e);
      }
      return t.slice(e);
    }
    for (; e < t.length; ) {
      let i = t.indexOf("\r", e), d = t.indexOf(`
`, e), r = -1;
      if (i !== -1 && d !== -1 ? r = i < d ? i : d : i !== -1 ? i === t.length - 1 ? r = -1 : r = i : d !== -1 && (r = d), r === -1) break;
      g(t, e, r), e = r + 1, t.charCodeAt(e - 1) === _ && t.charCodeAt(e) === I && e++;
    }
    return t.slice(e);
  }
  function g(t, e, i) {
    if (e === i) {
      P();
      return;
    }
    let d = t.charCodeAt(e);
    if (L(t, e, d)) {
      let p = t.charCodeAt(e + 5) === A ? e + 6 : e + 5, w = t.slice(p, i);
      f = s === 0 ? w : `${f}
${w}`, s++;
      return;
    }
    if (F(t, e, d)) {
      l = t.slice(t.charCodeAt(e + 6) === A ? e + 7 : e + 6, i) || void 0;
      return;
    }
    if (d === 105 && t.charCodeAt(e + 1) === 100 && t.charCodeAt(e + 2) === 58) {
      let p = t.slice(t.charCodeAt(e + 3) === A ? e + 4 : e + 3, i);
      c = p.includes("\0") ? void 0 : p;
      return;
    }
    if (d === 58) {
      if (b) {
        let p = t.slice(e, i);
        b(p.slice(t.charCodeAt(e + 1) === A ? 2 : 1));
      }
      return;
    }
    let r = t.slice(e, i), C = r.indexOf(":");
    if (C === -1) {
      E(r, "", r);
      return;
    }
    let R = r.slice(0, C), T = r.charCodeAt(C + 1) === A ? 2 : 1, U = r.slice(C + T);
    E(R, U, r);
  }
  function E(t, e, i) {
    switch (t) {
      case "event":
        l = e || void 0;
        break;
      case "data":
        f = s === 0 ? e : `${f}
${e}`, s++;
        break;
      case "id":
        c = e.includes("\0") ? void 0 : e;
        break;
      case "retry":
        /^\d+$/.test(e) ? S(parseInt(e, 10)) : v(new O(`Invalid \`retry\` value: "${e}"`, { type: "invalid-retry", value: e, line: i }));
        break;
      default:
        v(new O(`Unknown field "${t.length > 20 ? `${t.slice(0, 20)}\u2026` : t}"`, { type: "unknown-field", field: t, value: e, line: i }));
        break;
    }
  }
  function P() {
    s > 0 && o({ id: c, event: l, data: f }), c = void 0, f = "", s = 0, l = void 0;
  }
  function D(t = {}) {
    if (t.consume && a.length > 0) {
      let e = a.join("");
      g(e, 0, e.length);
    }
    x = true, c = void 0, f = "", s = 0, l = void 0, a.length = 0;
  }
  return { feed: j, reset: D };
}
function L(n, o, v) {
  return v === 100 && n.charCodeAt(o + 1) === 97 && n.charCodeAt(o + 2) === 116 && n.charCodeAt(o + 3) === 97 && n.charCodeAt(o + 4) === 58;
}
function F(n, o, v) {
  return v === 101 && n.charCodeAt(o + 1) === 118 && n.charCodeAt(o + 2) === 101 && n.charCodeAt(o + 3) === 110 && n.charCodeAt(o + 4) === 116 && n.charCodeAt(o + 5) === 58;
}
