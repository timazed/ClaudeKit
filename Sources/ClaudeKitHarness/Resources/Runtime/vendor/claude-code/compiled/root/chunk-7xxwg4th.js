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
var chunk_7xxwg4th_exports = {};
__export(chunk_7xxwg4th_exports, {
  Nlo: () => Nlo,
  Trn: () => Trn,
  yDe: () => yDe
});
module.exports = __toCommonJS(chunk_7xxwg4th_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_v6cdm8tp = require("/$bunfs/root/chunk-v6cdm8tp.js");
var import_chunk_rnm2beqc = require("/$bunfs/root/chunk-rnm2beqc.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var u = new Set(import_chunk_gd77dyw4.D8), O = /* @__PURE__ */ new Set([...import_chunk_gd77dyw4.Zee, ...import_chunk_gd77dyw4.D8.filter((e) => e !== "_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL" && !e.startsWith("CLAUDE_CODE_ARTIFACT") && !(0, import_chunk_gd77dyw4.a1e)(e)), "CLAUDE_CODE_SKIP_VERTEX_AUTH"]), D = (0, import_chunk_2cbgkbm2.p)(() => {
  let e = (0, import_chunk_rnm2beqc.fB)([(0, import_chunk_rnm2beqc.nr)(), (0, import_chunk_rnm2beqc.we)()]).pipe(import_chunk_rnm2beqc.pK.number());
  return (0, import_chunk_rnm2beqc.on)({ env: (0, import_chunk_rnm2beqc.mk)((0, import_chunk_rnm2beqc.we)()), expiresAt: e.nullable().default(null), pid: (0, import_chunk_rnm2beqc.nr)().int(), procStart: e });
}), R = 2e3, _ = /* @__PURE__ */ new Set(), l = null;
function Trn() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_HOST_AUTH_ENV_VAR || "ANTHROPIC_AUTH_TOKEN";
}
function yDe() {
  return !!(0, import_chunk_f9x2f6cx.tVe)() && (!((0, import_chunk_zhr7rpv7.jn)() && (0, import_chunk_zhr7rpv7.ya)()) || import_chunk_c203g5kd.s.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST);
}
async function h() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_HOST_CREDS_FILE;
  if (!e || !(0, import_path.isAbsolute)(e)) return null;
  let r;
  try {
    r = await (0, import_promises.open)(e, "r");
    let o = await r.stat();
    if (o.size > 65536) return null;
    if ((0, import_chunk_cg8dqz0a.x)() !== "windows") {
      if ((o.mode & 63) !== 0 || o.uid !== process.getuid?.()) return (0, import_chunk_w578pjby.t)("ignoring CLAUDE_CODE_HOST_CREDS_FILE with group/other-readable mode or wrong owner", { level: "warn" }), null;
    }
    let a = await r.readFile({ encoding: "utf8" }), n = D().safeParse((0, import_chunk_w578pjby.te)(a));
    if (!n.success || !Number.isFinite(n.data.procStart)) return null;
    let i = n.data;
    if (!(0, import_chunk_v6cdm8tp.Rd)(i.pid)) return null;
    let c = await (0, import_chunk_rb36kwbn.lFe)(i.pid);
    if (c !== null && Math.abs(i.procStart - c) > R) return null;
    if (i.expiresAt !== null && i.expiresAt < Date.now()) return null;
    let f = {};
    for (let [E, A] of Object.entries(i.env)) if (O.has(E)) f[E] = A;
    return { ...i, env: f, readOnce: !o.isFile() };
  } catch (o) {
    if (!(0, import_chunk_jv7av99m.J)(o)) (0, import_chunk_w578pjby.t)(`readHostCredsFile failed: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "warn" });
    return null;
  } finally {
    await r?.close().catch(() => {
    });
  }
}
async function Nlo() {
  if ((0, import_chunk_f9x2f6cx.tVe)() || l) return;
  if (!import_chunk_c203g5kd.s.CLAUDE_CODE_HOST_CREDS_FILE || !(0, import_chunk_69qhefwa.Ne)(import_chunk_c203g5kd.s.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) return;
  let e = await h();
  if (e) {
    let r = /* @__PURE__ */ new Map(), o = {}, a = true;
    for (let [n, i] of Object.entries(e.env)) if (u.has(n)) a = m(r, n, i) && a;
    else o[n] = i;
    if (l = r, a) C(o);
    else (0, import_chunk_w578pjby.t)("host-creds seed: taking no credential from a file that names an endpoint which the launch env holds blank (the provider's own address)", { level: "warn" });
    if (e.readOnce) return;
  } else (0, import_chunk_w578pjby.t)(`CLAUDE_CODE_HOST_CREDS_FILE is set (${import_chunk_c203g5kd.s.CLAUDE_CODE_HOST_CREDS_FILE}) but no usable host credentials were read`, { level: "warn" });
  (0, import_chunk_f9x2f6cx._Nr)(async () => {
    let r = await h();
    if (!r) throw Error("host-creds file re-read failed (missing/stale/expired)");
    let o = {};
    for (let [n, i] of Object.entries(r.env)) if (!u.has(n)) o[n] = i;
    else if (l && l.get(n) !== i) throw (0, import_chunk_w578pjby.t)(`host-creds refresh rejected: endpoint changed (${n})`, { level: "warn" }), Error("host-creds refresh rejected: endpoint changed");
    let a = Trn();
    if (_.has(a) && !o[a]) throw Error("host-creds refresh dropped the bearer key");
    if (!l) {
      let n = /* @__PURE__ */ new Map(), i = true;
      for (let [c, f] of Object.entries(r.env)) if (u.has(c)) i = m(n, c, f) && i;
      if (l = n, !i) throw Error("host-creds refresh rejected: the file names an endpoint which the launch env holds blank");
    }
    return C(o), { authToken: o[a] ?? null };
  });
}
function m(e, r, o) {
  let a = process.env[r], n = import_chunk_c203g5kd.s.CLAUDE_CODE_HOST_AUTH_ASK_AT_START ? a ?? "" : a || void 0;
  if (n !== void 0 && n !== o) return (0, import_chunk_w578pjby.t)(`host-creds seed: keeping the launch env's ${r}; the file names a different endpoint`, { level: "warn" }), e.set(r, n), n !== "";
  return process.env[r] = o, e.set(r, o), true;
}
function C(e) {
  for (let r of _) if (!(r in e)) delete process.env[r];
  Object.assign(process.env, e), _ = new Set(Object.keys(e));
}
