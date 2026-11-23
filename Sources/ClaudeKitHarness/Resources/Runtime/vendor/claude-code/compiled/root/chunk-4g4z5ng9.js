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
var chunk_4g4z5ng9_exports = {};
__export(chunk_4g4z5ng9_exports, {
  S1o: () => S1o,
  y1o: () => y1o
});
module.exports = __toCommonJS(chunk_4g4z5ng9_exports);
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
function g(n) {
  return n.recurring === true && n.finalRunNotice === void 0;
}
function s(n, d, r) {
  let { plugin: o } = n, e = o !== void 0 && (0, import_chunk_bzyb60p0.hye)();
  if (e) (0, import_chunk_sjqze7qg.Of)(() => (0, import_chunk_bzyb60p0.Kyt)(o));
  if (e && !g(n)) (0, import_chunk_bzyb60p0.QJ)(d, void 0, n.agentId ? "stays" : r);
  return e;
}
var y1o = (n) => (d, r) => {
  let o = () => {
    if (r !== void 0) (0, import_chunk_sjqze7qg.Of)(r);
  }, e = () => {
    if (s(d, e, o)) return;
    n(d, o);
  }, i = s(d, e, o);
  if (!i) n(d, () => {
  });
  return i && !g(d);
}, S1o = (n) => (d, r) => {
  let o = /* @__PURE__ */ new Map();
  return d.forEach((e) => {
    o.set(e.plugin, [...o.get(e.plugin) ?? [], e]);
  }), [...o].flatMap(([e, i]) => {
    let u = e === void 0 ? {} : { plugin: e }, t = () => (0, import_chunk_sjqze7qg.Of)(() => r(i)), l = () => {
      if (s(u, l, t)) return;
      n(i, e, t);
    }, f = s(u, l, t), a = false, c = false;
    if (!f) n(i, e, () => {
      if (a = true, c) t();
    });
    return c = true, f || !a ? i.map((p) => p.id) : [];
  });
};
