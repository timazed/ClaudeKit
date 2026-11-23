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
var chunk_f3kgcpgw_exports = {};
__export(chunk_f3kgcpgw_exports, {
  CKr: () => CKr,
  S8s: () => S8s,
  iqe: () => iqe,
  yVo: () => yVo
});
module.exports = __toCommonJS(chunk_f3kgcpgw_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
var S8s = "org-tip:", yVo = "custom-tip-", I = 500, H = 200, S = 262144, y = "Tip", X = /^[A-Za-z0-9._-]{1,64}$/, K = 40, P = ["policySettings", "flagSettings", "userSettings"], Y = [...import_chunk_xzvhvaa2.yp], W = "org-tip:file:", Z = /* @__PURE__ */ new Set(["EAGAIN", "EBUSY", "EINTR", "EIO", "EMFILE", "ENFILE"]), q = /[\p{Cc}\p{Cf}\u2028\u2029\u180e\ufe00-\ufe0f\u{e0100}-\u{e01ef}]/gu;
function N(e) {
  return (0, import_chunk_wbk1hf21.w1e)(e).replace(/[\t\n\r\u2028\u2029]+/g, " ").replace(q, "").replace(/ {2,}/g, " ").trim();
}
function Q(e) {
  if (e === void 0) return y;
  let i = (0, import_chunk_7cfjrnwy.ee)(N(e), K);
  return i === "" ? y : i;
}
var V = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.ie)()), (0, import_chunk_adx6804h.c)({ tips: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.ie)()) }).transform((e) => e.tips)]));
async function re(e) {
  try {
    let i = (0, import_chunk_cg8dqz0a.x)() === "windows" ? 0 : import_fs.constants.O_NOFOLLOW | import_fs.constants.O_NONBLOCK, r = await (0, import_promises.open)(await (0, import_promises.realpath)(e), import_fs.constants.O_RDONLY | i), n;
    try {
      let f = await r.stat();
      if (!f.isFile()) return (0, import_chunk_cqa9hrgx.m)("tips_org_tips_file_load", "not_regular_file"), (0, import_chunk_w578pjby.t)(`spinnerTipsOverride.tipsFile ${e} is not a regular file; ignoring it`, { level: "warn" }), { entries: [], transient: false };
      if (f.size > S) return (0, import_chunk_cqa9hrgx.m)("tips_org_tips_file_load", "too_large"), (0, import_chunk_w578pjby.t)(`spinnerTipsOverride.tipsFile ${e} is larger than ${S} bytes; ignoring it`, { level: "warn" }), { entries: [], transient: false };
      let g = Buffer.alloc(S + 1), { bytesRead: _ } = await r.read(g, 0, g.length, 0);
      if (_ > S) return (0, import_chunk_cqa9hrgx.m)("tips_org_tips_file_load", "too_large"), { entries: [], transient: false };
      n = (0, import_chunk_0jve1fep.Ys)(g.toString("utf8", 0, _));
    } finally {
      await r.close();
    }
    let l = V().safeParse((0, import_chunk_w578pjby.te)(n)), d = l.success ? (0, import_chunk_xcgcdx61.NZi)().parse(l.data) : void 0;
    if (d === void 0) return (0, import_chunk_cqa9hrgx.m)("tips_org_tips_file_load", "wrong_shape"), (0, import_chunk_w578pjby.t)(`spinnerTipsOverride.tipsFile ${e} must be a JSON array of tips (or {"tips": [...]}); ignoring it`, { level: "warn" }), { entries: [], transient: false };
    return (0, import_chunk_cqa9hrgx.u)("tips_org_tips_file_load"), { entries: d, transient: false };
  } catch (i) {
    let r = (0, import_chunk_jv7av99m.w)(i), n = (0, import_chunk_jv7av99m.J)(i) ? "not_found" : r === "ELOOP" || r === "EISDIR" ? "not_regular_file" : i instanceof SyntaxError ? "parse_failed" : "read_failed";
    return (0, import_chunk_cqa9hrgx.m)("tips_org_tips_file_load", n), (0, import_chunk_w578pjby.t)((0, import_chunk_jv7av99m.J)(i) ? `spinnerTipsOverride.tipsFile ${e} does not exist; no file tips loaded` : `spinnerTipsOverride.tipsFile ${e} could not be read: ${(0, import_chunk_jv7av99m.D)(i).message}`, { level: "warn" }), { entries: [], transient: r !== void 0 && Z.has(r) };
  }
}
class L {
  #e = /* @__PURE__ */ new Map();
  get size() {
    return this.#e.size;
  }
  read(e) {
    let i = this.#e.get(e);
    if (i) return i;
    let r = re(e).then((n) => {
      if (n.transient) this.#e.delete(e);
      return n;
    });
    return this.#e.set(e, r), r;
  }
}
var ne = new import_chunk_2904xtvq.j(() => new L());
function se() {
  if ((0, import_chunk_xcgcdx61.Yb)()?.spinnerTipsOverride?.tipsFile) return (0, import_chunk_w578pjby.t)("spinnerTipsOverride.tipsFile from remote managed settings is ignored; ship inline tips or install the file path via managed-settings.json", { level: "warn" }), true;
  return false;
}
function oe(e) {
  if (!e) return;
  if (!(0, import_path.isAbsolute)(e) && e !== "~" && !e.startsWith("~/")) {
    (0, import_chunk_w578pjby.t)(`spinnerTipsOverride.tipsFile must be an absolute or ~/ path (got "${e}"); ignoring it`, { level: "warn" });
    return;
  }
  if ((0, import_chunk_z6pfqf6e.wO)(e)) {
    (0, import_chunk_w578pjby.t)("spinnerTipsOverride.tipsFile must be a local path, not a network (UNC) path; ignoring it", { level: "warn" });
    return;
  }
  try {
    let i = (0, import_chunk_n2dbhmj2.xt)(e);
    return (0, import_chunk_z6pfqf6e.wO)(i) ? void 0 : i;
  } catch (i) {
    (0, import_chunk_w578pjby.t)(`spinnerTipsOverride.tipsFile "${e}" is not a usable path: ${(0, import_chunk_jv7av99m.D)(i).message}`, { level: "warn" });
    return;
  }
}
function R(e) {
  let i = [];
  for (let r of e) {
    if (!(0, import_chunk_xzvhvaa2.rn)(r)) continue;
    let n = (0, import_chunk_2yx6c1y2._e)(r)?.spinnerTipsOverride;
    if (n) i.push({ source: r, override: n });
  }
  return i;
}
function A(e, i) {
  return e.find((r) => r.override[i] !== void 0)?.override[i];
}
function iqe() {
  let e = R(P);
  if (A(e, "excludeDefault") !== true) return false;
  return e.some((i) => !!i.override.tipsFile) || e.some((i) => (i.override.tips?.length ?? 0) > 0);
}
async function CKr(e) {
  let i = R(P), r = R(Y);
  if (i.length === 0 && r.length === 0) return { tips: [], trustedCount: 0 };
  let n = Q(A(i, "label")), l = i.find((s) => !!s.override.tipsFile), d = l?.source, f = oe(d === "policySettings" && se() ? void 0 : l?.override.tipsFile);
  for (let { source: s, override: o } of r) if (o.tipsFile || o.label !== void 0) (0, import_chunk_w578pjby.t)(`spinnerTipsOverride.tipsFile/label in ${s} are ignored; set them in user or managed settings`, { level: "warn" });
  let g = f ? (await ne.of(e).read(f)).entries : [], _ = /* @__PURE__ */ new Set(), O = [], v = (s, o, a, T, M) => {
    if (O.length >= H) return;
    let h = N(o);
    if (h === "") {
      (0, import_chunk_w578pjby.t)(`spinnerTipsOverride: tip "${s}" is empty after sanitizing; dropped`, { level: "warn" });
      return;
    }
    if (h.length > I) {
      (0, import_chunk_w578pjby.t)(`spinnerTipsOverride: tip "${s}" is longer than ${I} characters; dropped`, { level: "warn" });
      return;
    }
    if (_.has(s)) {
      (0, import_chunk_w578pjby.t)(`spinnerTipsOverride: duplicate tip id "${s}"; keeping the first`, { level: "warn" });
      return;
    }
    _.add(s), O.push({ id: s, label: M, content: async () => h, cooldownSessions: a, priority: T, isRelevant: async () => true, providerAgnostic: true });
  }, b = 0;
  for (let { source: s, override: o } of i) {
    for (let a of o.tips ?? []) F(a, `${yVo}${b++}`, n, v);
    if (s === d) g.forEach((a, T) => F(a, `${W}${T}`, n, v));
  }
  let z = O.length;
  for (let { source: s, override: o } of r) for (let a of o.tips ?? []) {
    let T = `${yVo}${b++}`;
    if (typeof a === "string") F(a, T, y, v);
    else (0, import_chunk_w578pjby.t)(`spinnerTipsOverride: object tip entries in ${s} are ignored; only plain strings are read from project settings`, { level: "warn" });
  }
  return { tips: O, trustedCount: z };
}
function F(e, i, r, n) {
  if (typeof e === "string") {
    n(i, e, 0, 0, r);
    return;
  }
  if (typeof e.text !== "string") {
    (0, import_chunk_w578pjby.t)('spinnerTipsOverride: tip object without a "text" string; dropped', { level: "warn" });
    return;
  }
  if (typeof e.id !== "string" || !X.test(e.id)) {
    (0, import_chunk_w578pjby.t)('spinnerTipsOverride: tip object needs an "id" of 1-64 letters, digits, ".", "_" or "-"; dropped', { level: "warn" });
    return;
  }
  let l = typeof e.cooldownSessions === "number" && Number.isInteger(e.cooldownSessions) && e.cooldownSessions >= 0 ? Math.min(e.cooldownSessions, 1e3) : 0, d = typeof e.priority === "number" && Number.isFinite(e.priority) ? Math.max(-10, Math.min(10, Math.trunc(e.priority))) : 0;
  n(`${S8s}${e.id}`, e.text, l, d, r);
}
