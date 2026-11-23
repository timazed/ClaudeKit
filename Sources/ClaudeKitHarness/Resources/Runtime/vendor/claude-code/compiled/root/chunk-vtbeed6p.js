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
var chunk_vtbeed6p_exports = {};
__export(chunk_vtbeed6p_exports, {
  Pha: () => Pha,
  T9l: () => T9l,
  W1o: () => W1o
});
module.exports = __toCommonJS(chunk_vtbeed6p_exports);
var import_chunk_zwfq7wpn = require("/$bunfs/root/chunk-zwfq7wpn.js");
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_1tyxkk56 = require("/$bunfs/root/chunk-1tyxkk56.js");
var import_chunk_jnjxe5w9 = require("/$bunfs/root/chunk-jnjxe5w9.js");
var import_chunk_nej2e75x = require("/$bunfs/root/chunk-nej2e75x.js");
var import_chunk_8c111j67 = require("/$bunfs/root/chunk-8c111j67.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_hghmr3e2 = require("/$bunfs/root/chunk-hghmr3e2.js");
var import_chunk_7gv3ezdz = require("/$bunfs/root/chunk-7gv3ezdz.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
var u = { light: { background: "#f9f9f7", foreground: "#000000" }, dark: { background: "#1f1f1e", foreground: "#ffffff" } };
function Pha(i, n, t) {
  if (!t) return;
  let r;
  if (i === "auto") {
    if (n === void 0) return;
    r = n;
  } else r = (0, import_chunk_7gv3ezdz.Jnr)(i);
  return (0, import_chunk_1tyxkk56.ASe)(r) ? u.light : u.dark;
}
function d() {
  let t = (0, import_chunk_sng02qpc.k)(4), [i, n] = (0, import_chunk_bs4h6795.y)(import_chunk_7gv3ezdz.Q5r), r, o;
  if (t[0] === import_chunk_w1d7ygsk.R) r = () => (0, import_chunk_7gv3ezdz.FCn)(() => n((0, import_chunk_7gv3ezdz.Q5r)())), o = [], t[0] = r, t[1] = o;
  else r = t[0], o = t[1];
  (0, import_chunk_bs4h6795.H)(r, o);
  let m;
  if (t[2] !== i) m = Pha((0, import_chunk_3jkk3v3z._jr)(), i, (0, import_chunk_zwfq7wpn.Qss)()), t[2] = i, t[3] = m;
  else m = t[3];
  return m;
}
function W1o(i) {
  let m = (0, import_chunk_sng02qpc.k)(9), { children: n, mouseTracking: t, killRing: r } = i, o = d(), s;
  if (m[0] !== n || m[1] !== r) s = (0, import_chunk_a46xeenj.e)(import_chunk_jnjxe5w9.ykn, { handle: r, children: n }), m[0] = n, m[1] = r, m[2] = s;
  else s = m[2];
  let f = s;
  if ((0, import_chunk_8c111j67.gbt)()) {
    let a;
    if (m[3] !== t) a = t ?? (0, import_chunk_8c111j67.n0)(), m[3] = t, m[4] = a;
    else a = m[4];
    let c;
    if (m[5] !== o || m[6] !== a || m[7] !== f) c = (0, import_chunk_a46xeenj.e)(import_chunk_nej2e75x.dve, { mouseTracking: a, surface: o, children: f }), m[5] = o, m[6] = a, m[7] = f, m[8] = c;
    else c = m[8];
    return c;
  }
  return f;
}
function T9l() {
  if ((0, import_chunk_hghmr3e2.Z0a)()) process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT ??= "1";
}
