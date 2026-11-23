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
var chunk_v7fhe4dc_exports = {};
__export(chunk_v7fhe4dc_exports, {
  BVe: () => BVe
});
module.exports = __toCommonJS(chunk_v7fhe4dc_exports);
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_2t5dst6n = require("/$bunfs/root/chunk-2t5dst6n.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_7azstk6m = require("/$bunfs/root/chunk-7azstk6m.js");
var import_chunk_6n3q0gvw = require("/$bunfs/root/chunk-6n3q0gvw.js");
var import_chunk_6k3h3wej = require("/$bunfs/root/chunk-6k3h3wej.js");
var import_chunk_s4tz6qdb = require("/$bunfs/root/chunk-s4tz6qdb.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var BVe = (d, o, w) => new Promise((u, l) => {
  let r = false, n = null, c = o ? import_chunk_2t5dst6n.K3 : import_chunk_2t5dst6n.KE;
  function s(t, f = import_chunk_2t5dst6n.KE) {
    return n !== null && !(0, import_chunk_2t5dst6n.Ha)(t, n, f);
  }
  function p(t) {
    if (s(t, c)) return true;
    if (o && n !== null) n = Date.now();
    return false;
  }
  (async () => {
    let { rerender: t, unmount: f, waitUntilExit: S } = await (0, import_chunk_8bkqeb5d.cY)((0, import_chunk_a46xeenj.e)(import_chunk_7azstk6m.Nv, { children: (0, import_chunk_a46xeenj.e)(b, { settings: d, baseline: w, answerWindowMs: c, onAccept: (a) => {
      if (!p(a)) return false;
      r = true, u("approved");
      let m = o ? (0, import_chunk_8bkqeb5d.eXn)(process.stdout) : void 0;
      if (m && (0, import_chunk_6n3q0gvw.Jjs)(m)) return;
      if (t(null), !o) f();
    }, onReject: (a) => {
      if (!s(a)) return false;
      if (r = true, u("rejected"), t(null), !o) f();
    } }) }, "managed-settings-security"), (0, import_chunk_6k3h3wej.Sx)(false));
    if (n = Date.now(), await S(), !r) {
      let a = Error("Managed-settings consent dialog exited without an answer");
      (0, import_chunk_k449cc64.i)(a), l(a);
    }
  })().catch((t) => {
    (0, import_chunk_k449cc64.i)(t), l(t);
  });
});
function b(d) {
  let c = (0, import_chunk_sng02qpc.k)(12), { settings: o, baseline: w, answerWindowMs: u, onAccept: l, onReject: r } = d, n = (0, import_chunk_8bkqeb5d.si)(), s;
  if (c[0] !== n || c[1] !== l) s = () => l(n), c[0] = n, c[1] = l, c[2] = s;
  else s = c[2];
  let p;
  if (c[3] !== n || c[4] !== r) p = () => r(n), c[3] = n, c[4] = r, c[5] = p;
  else p = c[5];
  let t;
  if (c[6] !== u || c[7] !== w || c[8] !== o || c[9] !== s || c[10] !== p) t = (0, import_chunk_a46xeenj.e)(import_chunk_s4tz6qdb.omt, { settings: o, baseline: w, reveal: "default", answerWindowMs: u, onAccept: s, onReject: p }), c[6] = u, c[7] = w, c[8] = o, c[9] = s, c[10] = p, c[11] = t;
  else t = c[11];
  return t;
}
