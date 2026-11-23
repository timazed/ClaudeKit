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
var chunk_gzt0mgvc_exports = {};
__export(chunk_gzt0mgvc_exports, {
  G3o: () => G3o,
  P9r: () => P9r,
  hNa: () => hNa,
  mNa: () => mNa,
  vei: () => vei,
  x9r: () => x9r
});
module.exports = __toCommonJS(chunk_gzt0mgvc_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_crypto = require("crypto");
var import_promises = require("fs/promises");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
var l = 864e5, m = 8388608;
function f(t) {
  return (0, import_crypto.createHash)("sha256").update(t).digest("hex").slice(0, 8);
}
function i(t) {
  return (0, import_path.join)((0, import_chunk_9e5mdyfk.N6)(), `.draft-${f(t)}`);
}
function u(t) {
  return (0, import_chunk_w578pjby._)({ ...t, ...false, ts: Date.now() });
}
async function x9r(t, r, e) {
  await G3o(t, r, e);
}
async function G3o(t, r, e) {
  if ((0, import_chunk_m15w38ag.ne)() && e) return (await e.write(import_chunk_hkvzj051.at.jobDraft(f(t)), u(r), { publishDiscipline: "atomic", mode: 438 & ~process.umask() }).catch(() => {
    return;
  }))?.ok === true;
  try {
    return await (0, import_promises.mkdir)((0, import_chunk_9e5mdyfk.N6)(), { recursive: true }), await (0, import_chunk_q7qjcthc.yr)(i(t), u(r)), true;
  } catch {
    return false;
  }
}
function vei(t, r) {
  try {
    (0, import_chunk_q7qjcthc.b3)(i(t), u(r));
  } catch {
  }
}
async function mNa(t, r) {
  if (r) {
    await r.delete(import_chunk_hkvzj051.at.jobDraft(f(t))).catch(() => {
    });
    return;
  }
  await (0, import_promises.unlink)(i(t)).catch(() => {
  });
}
var S = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ q: (0, import_chunk_adx6804h.n)(), collapsed: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), ts: (0, import_chunk_adx6804h.E)() }));
async function hNa(t, r) {
  let e = r ? await P(r, t) : await (0, import_chunk_xfj2cwfv.Uu)(i(t), m);
  if (e === null) return;
  let a;
  try {
    a = S().safeParse((0, import_chunk_w578pjby.te)(e));
  } catch {
    return;
  }
  if (!a.success) return;
  let { q: o, collapsed: s, ts: g } = a.data;
  if (Date.now() - g > l) return;
  return { q: o, collapsed: s ?? [] };
}
async function P(t, r) {
  return (0, import_chunk_9e5mdyfk.Vas)(t, import_chunk_hkvzj051.at.jobDraft(f(r)), { cap: m, screens: k(), screenKey: i(r) });
}
function k() {
  return import_chunk_9e5mdyfk.zas.of((0, import_chunk_f9x2f6cx.N)().host).drafts;
}
async function P9r() {
  return (0, import_chunk_cqa9hrgx.qo)("job_sweep_drafts", async () => {
    let t;
    try {
      t = await (0, import_promises.readdir)((0, import_chunk_9e5mdyfk.N6)());
    } catch {
      return;
    }
    let r = Date.now();
    await Promise.all(t.filter((e) => e.startsWith(".draft-")).map(async (e) => {
      let a = (0, import_path.join)((0, import_chunk_9e5mdyfk.N6)(), e), o = await (0, import_chunk_xfj2cwfv.Uu)(a, m);
      if (o !== null) try {
        let s = S().safeParse((0, import_chunk_w578pjby.te)(o));
        if (s.success && r - s.data.ts <= l) return;
      } catch {
      }
      await (0, import_promises.rm)(a, { recursive: true, force: true }).catch(() => {
      });
    }));
  });
}
