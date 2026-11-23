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
var chunk_ykcxdh1p_exports = {};
__export(chunk_ykcxdh1p_exports, {
  A5n: () => A5n,
  E1s: () => E1s,
  Gua: () => Gua,
  Kua: () => Kua,
  R5n: () => R5n,
  Vua: () => Vua,
  qua: () => qua,
  zua: () => zua
});
module.exports = __toCommonJS(chunk_ykcxdh1p_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_trq47kfh = require("/$bunfs/root/chunk-trq47kfh.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_promises = require("fs/promises");
var p = "claudecode/repoHooksStamp", Gua = 4096, A5n = ["userSettings", ...import_chunk_xzvhvaa2.WA];
async function E1s(r = 0) {
  let n = [...A5n.map(import_chunk_2yx6c1y2._n), (0, import_chunk_2yx6c1y2.A_)()];
  return [...await Promise.all(n.map(async (e) => {
    if (e === void 0) return "-";
    try {
      let { ino: s, size: a, ctimeNs: i } = await (0, import_promises.stat)(e, { bigint: true });
      return `${s}:${a}:${i}`;
    } catch (s) {
      return (0, import_chunk_jv7av99m.fn)(s) ? "-" : `?${(0, import_chunk_jv7av99m.w)(s)}`;
    }
  })), r].join("|");
}
var R5n = new import_chunk_2904xtvq.j(() => ({ news: 0 }));
function zua(r, n, o = () => false) {
  let e = R5n.of(r);
  if (e.tell = n, e.stop !== void 0) return;
  let s = import_chunk_trq47kfh.Ti.subscribe((a) => {
    if (!o() && !A5n.some((c) => c === a)) return;
    if (e.news++, e.tell === void 0) {
      (0, import_chunk_cqa9hrgx.l)("mcp_serve_repo_settings_notice", "no_caller");
      return;
    }
    e.tell().then(() => (0, import_chunk_cqa9hrgx.u)("mcp_serve_repo_settings_notice")).catch((c) => {
      (0, import_chunk_cqa9hrgx.l)("mcp_serve_repo_settings_notice", "not_sent"), (0, import_chunk_w578pjby.t)(`repo settings notice not sent: ${(0, import_chunk_jv7av99m.d)(c)}`);
    });
  });
  e.stop = () => {
    s(), e.stop = void 0;
  }, import_chunk_trq47kfh.Ti.initialize(async () => false);
}
function Vua(r, n) {
  let o = R5n.of(r);
  if (o.stop !== void 0) o.tell = n;
}
function Kua(r, n) {
  let o = R5n.of(r);
  if (o.tell === n) o.tell = void 0;
}
function qua(r, n, o, e) {
  r.setRequestHandler("tools/call", async (s, a) => {
    let i = await e(s, a);
    if (!n || s.params._meta?.[p] !== "1") return i;
    return { ...i, _meta: { ...i._meta, [p]: await E1s(R5n.of(o).news) } };
  });
}
