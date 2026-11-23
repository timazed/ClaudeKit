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
var chunk_ykad4ek3_exports = {};
__export(chunk_ykad4ek3_exports, {
  Eo: () => Eo,
  GBo: () => GBo,
  aa: () => aa,
  bP: () => bP,
  jBo: () => jBo,
  mx: () => mx
});
module.exports = __toCommonJS(chunk_ykad4ek3_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
var l = (0, import_chunk_bs4h6795.an)(null), d = (0, import_chunk_bs4h6795.an)(null), P = (0, import_chunk_bs4h6795.an)(null), j = () => () => {
};
function jBo(i) {
  let r = (0, import_chunk_sng02qpc.k)(11), { session: o, children: c } = i, s;
  if (r[0] !== o) s = () => ({ subscribe: o.subscribe, get: () => (0, import_chunk_f9x2f6cx.Rs)(o) }), r[0] = o, r[1] = s;
  else s = r[1];
  let [u] = (0, import_chunk_bs4h6795.y)(s), t;
  if (r[2] !== c || r[3] !== u) t = (0, import_chunk_a46xeenj.e)(P.Provider, { value: u, children: c }), r[2] = c, r[3] = u, r[4] = t;
  else t = r[4];
  let n;
  if (r[5] !== o.host || r[6] !== t) n = (0, import_chunk_a46xeenj.e)(d.Provider, { value: o.host, children: t }), r[5] = o.host, r[6] = t, r[7] = n;
  else n = r[7];
  let p;
  if (r[8] !== o || r[9] !== n) p = (0, import_chunk_a46xeenj.e)(l.Provider, { value: o, children: n }), r[8] = o, r[9] = n, r[10] = p;
  else p = r[10];
  return p;
}
function GBo(i) {
  let s = (0, import_chunk_sng02qpc.k)(8), { host: o, project: c, children: r } = i, u;
  if (s[0] !== c) u = () => ({ subscribe: j, get: () => c }), s[0] = c, s[1] = u;
  else u = s[1];
  let [t] = (0, import_chunk_bs4h6795.y)(u), n;
  if (s[2] !== r || s[3] !== t) n = (0, import_chunk_a46xeenj.e)(P.Provider, { value: t, children: r }), s[2] = r, s[3] = t, s[4] = n;
  else n = s[4];
  let p;
  if (s[5] !== o || s[6] !== n) p = (0, import_chunk_a46xeenj.e)(d.Provider, { value: o, children: n }), s[5] = o, s[6] = n, s[7] = p;
  else p = s[7];
  return p;
}
function aa() {
  let i = (0, import_chunk_bs4h6795.be)(d);
  if (!i) {
    throw ReferenceError("useHost cannot be called outside of a <SessionProvider /> or <HostProjectProvider />");
  }
  return i;
}
function bP(i) {
  let o = (0, import_chunk_bs4h6795.be)(P);
  if (!o) {
    throw ReferenceError("useProject cannot be called outside of a <SessionProvider /> or <HostProjectProvider />");
  }
  return v(o, o.subscribe, o.get, i);
}
function mx() {
  return (0, import_chunk_bs4h6795.be)(l) ?? void 0;
}
function Eo(i) {
  let c = (0, import_chunk_sng02qpc.k)(2), o = (0, import_chunk_bs4h6795.be)(l);
  if (!o) {
    throw ReferenceError("useSession cannot be called outside of a <SessionProvider />");
  }
  let r;
  if (c[0] !== o) r = () => o, c[0] = o, c[1] = r;
  else r = c[1];
  return v(o, o.subscribe, r, i);
}
function v(i, o, c, r) {
  let s = (0, import_chunk_bs4h6795.I)(null);
  if (s.current === null || s.current.owner !== i) {
    let t = { owner: i, read: c, selector: r, get: () => {
      let n = t.read();
      return t.selector ? t.selector(n) : n;
    } };
    s.current = t;
  }
  s.current.read = c, s.current.selector = r;
  let u = s.current.get;
  return (0, import_chunk_bs4h6795.Ot)(o, u, u);
}
