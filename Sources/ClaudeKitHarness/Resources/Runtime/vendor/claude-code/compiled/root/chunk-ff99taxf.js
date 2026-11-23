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
var chunk_ff99taxf_exports = {};
__export(chunk_ff99taxf_exports, {
  Qjs: () => Qjs,
  TUo: () => TUo,
  gve: () => gve,
  vUo: () => vUo
});
module.exports = __toCommonJS(chunk_ff99taxf_exports);
var import_chunk_vw137skj = require("/$bunfs/root/chunk-vw137skj.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_paah1wya = require("/$bunfs/root/chunk-paah1wya.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
var P = 2e3, U = 2e3;
function gve(c) {
  return /^c+$/.test(c);
}
function Qjs(c) {
  let u = (0, import_chunk_8bkqeb5d.ir)(), [a, n] = (0, import_chunk_bs4h6795.y)(null), i = (0, import_chunk_bs4h6795.I)(null), t = (0, import_chunk_bs4h6795.I)(null), l = (0, import_chunk_bs4h6795.I)(null), s = (0, import_chunk_bs4h6795.I)(0), p = (0, import_chunk_bs4h6795.I)(true), d = (0, import_chunk_bs4h6795.ye)(() => {
    s.current += 1, l.current?.(), l.current = null, t.current = null, i.current?.(), i.current = null, n(null);
  }, []);
  (0, import_chunk_bs4h6795.H)(() => {
    if (d(), c !== null) (0, import_chunk_vw137skj.Vao)();
  }, [c, d]), (0, import_chunk_bs4h6795.H)(() => (p.current = true, () => {
    p.current = false, l.current?.(), l.current = null, t.current = null, i.current?.(), i.current = null;
  }), []);
  let V = (0, import_chunk_bs4h6795.ye)((f) => {
    if (t.current === f) return;
    t.current = f, l.current?.(), l.current = u.setTimeout(() => {
      l.current = null, t.current = null;
    }, P);
    let b = (0, import_chunk_vw137skj.kSe)(), x = s.current;
    (0, import_chunk_vw137skj.F6)(f).then((h) => {
      if (!p.current || x !== s.current) return;
      if (h) process.stdout.write(h);
      i.current?.(), i.current = null;
      let C = b;
      if (b === "osc52" && (0, import_chunk_vw137skj.Hq)()) C = (0, import_chunk_vw137skj.kSe)() === "native" ? "native" : "none";
      if (n(C), C === "native") i.current = u.setTimeout(() => {
        i.current = null, n(null);
      }, U);
    });
  }, [u]);
  return { copiedVia: a, copy: V, reset: d };
}
function vUo(c) {
  let a = (0, import_chunk_sng02qpc.k)(2), { via: u } = c;
  if (u === "native") {
    let n;
    if (a[0] === import_chunk_w1d7ygsk.R) n = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "success", children: "(Copied!)" }), a[0] = n;
    else n = a[0];
    return n;
  }
  if (u === null) {
    let n;
    if (a[1] === import_chunk_w1d7ygsk.R) n = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: (0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "c", action: "copy", parens: true }) }), a[1] = n;
    else n = a[1];
    return n;
  }
  return null;
}
function TUo(c) {
  let i = (0, import_chunk_sng02qpc.k)(6), { via: u, noun: a } = c, n = a === void 0 ? "URL" : a;
  if (u === "tmux-buffer") {
    let t;
    if (i[0] !== n) t = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["(Copied to tmux buffer \xB7 select the ", n, " manually if paste fails)"] }), i[0] = n, i[1] = t;
    else t = i[1];
    return t;
  }
  if (u === "none") {
    let t;
    if (i[2] !== n) t = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["(Couldn't copy \xB7 select the ", n, " and copy it with your terminal)"] }), i[2] = n, i[3] = t;
    else t = i[3];
    return t;
  }
  if (u === "osc52") {
    let t;
    if (i[4] !== n) t = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["(Sent via OSC 52 \xB7 select the ", n, " manually if paste fails)"] }), i[4] = n, i[5] = t;
    else t = i[5];
    return t;
  }
  return null;
}
