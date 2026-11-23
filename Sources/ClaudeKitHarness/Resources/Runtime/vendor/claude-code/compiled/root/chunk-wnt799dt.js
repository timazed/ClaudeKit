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
var chunk_wnt799dt_exports = {};
__export(chunk_wnt799dt_exports, {
  Dss: () => Dss,
  Hss: () => Hss,
  Iss: () => Iss,
  Joo: () => Joo,
  Mne: () => Mne,
  Mss: () => Mss,
  Qoo: () => Qoo,
  fYa: () => fYa,
  gYa: () => gYa,
  hYa: () => hYa,
  mYa: () => mYa,
  pYa: () => pYa,
  uYa: () => uYa
});
module.exports = __toCommonJS(chunk_wnt799dt_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_8j3h6yzg = require("/$bunfs/root/chunk-8j3h6yzg.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_trq47kfh = require("/$bunfs/root/chunk-trq47kfh.js");
var import_chunk_sqvd6je2 = require("/$bunfs/root/chunk-sqvd6je2.js");
var import_chunk_r3mm3x33 = require("/$bunfs/root/chunk-r3mm3x33.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_73gwqz1r = require("/$bunfs/root/chunk-73gwqz1r.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_path = require("path");
var import_crypto = require("crypto");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_os = require("os");
var import_path2 = require("path");
(0, import_chunk_adx6804h.B)();
function Mne(e) {
  return (e.startsWith("\uFEFF") ? e.slice(1) : e).replaceAll(`\r
`, `
`);
}
var Iss = 1, _e = 64, Re = 1048576, Mss = ".proposed-", De = /^[0-9a-f]{8}$/, Oe = 9e5, Fe = { userSettings: "user_settings", projectSettings: "project_settings", localSettings: "local_settings", flagSettings: "policy_settings", policySettings: "policy_settings" }, xe = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ id: (0, import_chunk_adx6804h.n)().min(1), path: (0, import_chunk_adx6804h.n)().min(1), resolvedPath: (0, import_chunk_adx6804h.n)().min(1), baseSha256: (0, import_chunk_adx6804h.n)().nullable(), proposedSha256: (0, import_chunk_adx6804h.n)(), proposedContent: (0, import_chunk_adx6804h.n)(), stagedAt: (0, import_chunk_adx6804h.n)(), by: (0, import_chunk_adx6804h.c)({ tool: (0, import_chunk_adx6804h.F)(["Write", "Edit"]), origin: (0, import_chunk_adx6804h.F)(["local", "served"]), sessionId: (0, import_chunk_adx6804h.n)() }) })), Ne = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ version: (0, import_chunk_adx6804h.v)(Iss), entries: (0, import_chunk_adx6804h.C)(xe()) }));
function Joo() {
  return (0, import_path2.join)((0, import_os.homedir)(), ".claude", "state", "settings-review.json");
}
var Se = ["policySettings", "flagSettings", ...import_chunk_xzvhvaa2.tp];
function N(e) {
  let r = (0, import_chunk_p1ewvgeh.Yo)(e);
  return Se.find((o) => {
    let s = (0, import_chunk_2yx6c1y2._n)(o);
    return s !== void 0 && (0, import_chunk_p1ewvgeh.Yo)(s) === r;
  });
}
async function we(e) {
  let r;
  try {
    r = await R(e);
  } catch {
    return N(e);
  }
  return G(e, r);
}
async function G(e, r) {
  let o = N(e);
  if (o !== void 0) return o;
  let s = (0, import_chunk_p1ewvgeh.Yo)(r);
  for (let l of Se) {
    let g = (0, import_chunk_2yx6c1y2._n)(l);
    if (g === void 0) continue;
    try {
      if ((0, import_chunk_p1ewvgeh.Yo)(await R(g)) === s) return l;
    } catch {
    }
  }
  return;
}
function ue(e) {
  let r = e.content.startsWith("\uFEFF");
  return { text: r ? e.content.slice(1) : e.content, encoding: e.encoding, bom: r, lineEndings: e.lineEndings };
}
function j(e) {
  return { readStore: async () => {
    try {
      return await (0, import_chunk_8j3h6yzg.Vn)().read(Joo());
    } catch (r) {
      if ((0, import_chunk_jv7av99m.J)(r)) return;
      throw r;
    }
  }, writeStore: async (r) => {
    let o = Joo();
    await (0, import_chunk_8j3h6yzg.Vn)().mkdir((0, import_path2.dirname)(o), 448), await (0, import_chunk_8j3h6yzg.Vn)().atomicWrite(o, r, 384);
  }, deleteStore: async () => {
    try {
      await (0, import_chunk_8j3h6yzg.Vn)().delete(Joo());
    } catch (r) {
      if (!(0, import_chunk_jv7av99m.J)(r)) throw r;
    }
  }, readTarget: async (r) => {
    try {
      return ue(await (0, import_chunk_73gwqz1r.wk)(await ye(r), import_chunk_6mfepmbb.Jp)).text;
    } catch (o) {
      if ((0, import_chunk_jv7av99m.J)(o)) return null;
      throw o;
    }
  }, writeTarget: async ({ path: r, resolvedPath: o, baseSha256: s, content: l, blockedOnceWritten: g }) => {
    let h = await G(r, o), S = h === void 0 ? void 0 : (0, import_chunk_2yx6c1y2._n)(h), y = S === r || S !== void 0 && await R(S).catch(() => {
      return;
    }) === o, E = (0, import_chunk_2yx6c1y2.A_)(), k = E !== void 0 && ((0, import_chunk_p1ewvgeh.Yo)(E) === (0, import_chunk_p1ewvgeh.Yo)(r) || (0, import_chunk_p1ewvgeh.Yo)(await R(E).catch(() => E)) === (0, import_chunk_p1ewvgeh.Yo)(o)), P;
    try {
      P = await (0, import_chunk_865at33z.NC)(o, [o], { createParents: true });
    } catch (T) {
      if (T instanceof import_chunk_2yx6c1y2.C_) return "redirected";
      throw T;
    }
    let V = (0, import_path2.basename)(o), X = `${Mss}${(0, import_crypto.randomBytes)(4).toString("hex")}`, Y = (0, import_path2.join)((0, import_path2.dirname)(o), import_chunk_q7qjcthc.ED), b = (0, import_path2.join)((0, import_path2.dirname)(P.ioPath), `${V}${X}`), q = false;
    try {
      b = (0, import_chunk_2yx6c1y2.BIo)(Y, P.ioPath, X, false);
      let T = (0, import_path2.dirname)(b) !== (0, import_path2.dirname)(P.ioPath);
      await Ae((0, import_path2.dirname)(b), V);
      let se = async () => {
        let O;
        try {
          O = await P.readExisting(import_chunk_6mfepmbb.Jp);
        } catch (ce) {
          if ((0, import_chunk_73gwqz1r.vD)(ce)) return "changed";
          throw ce;
        }
        let ee = O === null ? null : ue(O);
        return (ee === null ? null : (0, import_chunk_ccm69jjy.Je)(ee.text)) === s ? ee : "changed";
      }, z = await se();
      if (z === "changed") return "changed";
      let ae = z?.encoding ?? "utf8", K = (z?.bom ? "\uFEFF" : "") + (0, import_chunk_2yx6c1y2.Bze)(l, z?.lineEndings ?? "LF"), Q = Buffer.from(K, ae);
      await (0, import_chunk_q7qjcthc.l2)(b, Q, 384), q = true;
      let de = T ? b : (0, import_path2.join)((0, import_path2.dirname)(o), `${V}${X}`);
      if (await g(de)) return "blocked";
      if (await se() === "changed") return "changed";
      let Z = await We(b, de, Q);
      if (Z === null) return "tampered";
      await P.recheckBeforeWrite();
      let M = await (0, import_promises.lstat)(b).catch(() => null);
      if (M === null || M.isSymbolicLink() || M.ino !== Z.ino || M.dev !== Z.dev) return "tampered";
      if (T) (0, import_chunk_2yx6c1y2.Qhn)(Y);
      try {
        await (0, import_chunk_q7qjcthc.ra)(b, P.ioPath), q = false;
      } catch (O) {
        if (!import_chunk_q7qjcthc.mF.has((0, import_chunk_jv7av99m.w)(O) ?? "")) throw O;
        await (0, import_chunk_2yx6c1y2.SI)(P.ioPath, K, { encoding: ae, stagingDir: Y, refuseHardLinkedInPlace: true });
      }
      if (S !== void 0) if ((0, import_chunk_2yx6c1y2.ngn)(S, Q), y) (0, import_chunk_2yx6c1y2.lgn)(S, K);
      else (0, import_chunk_r3mm3x33.Br)().forgetLastRead(S);
      if (k) (0, import_chunk_r3mm3x33.Br)().forgetLastRead(E);
      return "written";
    } catch (T) {
      if (T instanceof import_chunk_2yx6c1y2.WMr) return "hard_linked";
      if (T instanceof import_chunk_2yx6c1y2.C_) return "redirected";
      if (T instanceof import_chunk_2yx6c1y2.WIo) return "tampered";
      throw T;
    } finally {
      if (q) await (0, import_promises.unlink)(b).catch((T) => {
        (0, import_chunk_w578pjby.t)(`settings review store: could not remove the proposal sibling (${(0, import_chunk_jv7av99m.d)(T)}); the next accept of this file sweeps it`, { level: "warn" });
      });
      await P.close();
    }
  }, locate: R, isSettingsFile: async (r) => (0, import_chunk_p1ewvgeh._2e)(r) || (0, import_chunk_p1ewvgeh.YUn)(r) && (0, import_chunk_p1ewvgeh.vdn)(r, await H()), configChangeBlocked: async (r, o, s) => {
    let l = await G(r, o);
    if (l === void 0) return false;
    if (e?.configChangeHookGate === void 0) return (0, import_chunk_k449cc64.i)(Error("settings review store: ConfigChange hook gate not wired")), true;
    return e.configChangeHookGate(Fe[l], s);
  }, afterApplied: async (r, o) => {
    let s = await G(r, o);
    if (s !== void 0) import_chunk_trq47kfh.Ti.notifyChange(s);
  }, now: () => /* @__PURE__ */ new Date() };
}
async function We(e, r, o) {
  try {
    let s = (0, import_chunk_cg8dqz0a.x)() === "windows";
    if (s && (await (0, import_promises.lstat)(e)).isSymbolicLink()) return null;
    let l = await (0, import_promises.open)(e, import_fs.constants.O_RDONLY | (s ? 0 : import_fs.constants.O_NOFOLLOW));
    try {
      let g = await l.stat();
      if (!g.isFile() || g.nlink !== 1) return null;
      if ((0, import_chunk_ccm69jjy.Je)(await l.readFile()) !== (0, import_chunk_ccm69jjy.Je)(o)) return null;
      let h = await (0, import_promises.stat)(r);
      return h.dev === g.dev && h.ino === g.ino ? { dev: g.dev, ino: g.ino } : null;
    } finally {
      await l.close();
    }
  } catch {
    return null;
  }
}
async function Ae(e, r) {
  let o;
  try {
    o = await (0, import_promises.readdir)(e);
  } catch {
    return;
  }
  let s = `${r}${Mss}`, l = Date.now() - Oe;
  for (let g of o) {
    if (!g.startsWith(s) || !De.test(g.slice(s.length))) continue;
    try {
      if ((await (0, import_promises.lstat)((0, import_path2.join)(e, g))).mtimeMs < l) await (0, import_promises.unlink)((0, import_path2.join)(e, g));
    } catch {
    }
  }
}
async function ye(e) {
  if (N(e) === "policySettings" || (0, import_chunk_6mfepmbb.qC)(e)) return e;
  let r = await (0, import_chunk_w578pjby.EL)((0, import_chunk_w578pjby.le)(), e);
  return r.linksResolvedPath ?? r.resolvedPath;
}
async function R(e) {
  return re(await ye(e));
}
async function re(e) {
  try {
    return await (0, import_promises.realpath)(e);
  } catch (r) {
    if (!(0, import_chunk_jv7av99m.J)(r) || (0, import_path2.dirname)(e) === e) throw r;
    return (0, import_path2.join)(await re((0, import_path2.dirname)(e)), (0, import_path2.basename)(e));
  }
}
async function H() {
  return (0, import_chunk_p1ewvgeh.sUi)(re);
}
async function L(e) {
  let r = await e.readStore();
  if (r === void 0) return [];
  let o;
  try {
    o = (0, import_chunk_w578pjby.te)(r);
  } catch {
    o = void 0;
  }
  let s = Ne().safeParse(o);
  if (!s.success) throw new ve();
  return s.data.entries;
}
class ve extends Error {
  constructor() {
    super("settings review store: malformed or of an unknown version");
  }
}
async function Le(e, r) {
  return await r.isSettingsFile(e.path) || await r.isSettingsFile(e.resolvedPath);
}
async function U(e, r) {
  if (e.length === 0) {
    await r.deleteStore();
    return;
  }
  await r.writeStore((0, import_chunk_w578pjby._)({ version: Iss, entries: e }, null, 2) + `
`);
}
async function Ce(e, r = j()) {
  let o = await L(r), s = await r.readTarget(e.path), l = Mne(e.proposedContent), g = { id: (0, import_crypto.randomBytes)(6).toString("hex"), path: e.path, resolvedPath: await r.locate(e.path), baseSha256: s === null ? null : (0, import_chunk_ccm69jjy.Je)(s), proposedSha256: (0, import_chunk_ccm69jjy.Je)(l), proposedContent: l, stagedAt: r.now().toISOString(), by: e.by }, h = (0, import_chunk_p1ewvgeh.Yo)(g.path), S = (0, import_chunk_p1ewvgeh.Yo)(g.resolvedPath), y = [...o.filter((k) => (0, import_chunk_p1ewvgeh.Yo)(k.path) !== h && (0, import_chunk_p1ewvgeh.Yo)(k.resolvedPath) !== S), g], E = 0;
  while (y.length > _e || (0, import_chunk_w578pjby._)(y).length > Re) {
    let k = y.findIndex((P) => P !== g && P.by.sessionId === g.by.sessionId);
    if (k === -1) throw Error("settings review store: no room, proposal not staged");
    y.splice(k, 1), E++;
  }
  if (E > 0) (0, import_chunk_w578pjby.t)(`settings review store: full, dropped the ${E} oldest pending proposal(s)`, { level: "warn" });
  return await U(y, r), g;
}
async function uYa(e, r = j()) {
  let s = (await L(r)).find((S) => S.id === e.id);
  if (s === void 0 || !await Le(s, r)) return "gone";
  if ((0, import_chunk_w578pjby._)(s) !== (0, import_chunk_w578pjby._)(e) || (0, import_chunk_ccm69jjy.Je)(s.proposedContent) !== s.proposedSha256) return "stale";
  if (await r.locate(s.path) !== s.resolvedPath) return "redirected";
  let l = await r.readTarget(s.resolvedPath);
  if ((l === null ? null : (0, import_chunk_ccm69jjy.Je)(l)) !== s.baseSha256) return "conflict";
  let h;
  try {
    h = await r.writeTarget({ path: s.path, resolvedPath: s.resolvedPath, baseSha256: s.baseSha256, content: s.proposedContent, blockedOnceWritten: (S) => r.configChangeBlocked(s.path, s.resolvedPath, S) });
  } catch (S) {
    let y = (0, import_chunk_jv7av99m.w)(S);
    if (y === "EACCES" || y === "EPERM" || y === "EROFS" || y === "EBUSY") return "not_writable";
    throw S;
  }
  switch (h) {
    case "changed":
      return "conflict";
    case "redirected":
    case "hard_linked":
    case "blocked":
    case "tampered":
      return h;
    case "written":
      break;
  }
  await r.afterApplied(s.path, s.resolvedPath);
  try {
    let S = await L(r);
    await U(S.filter((y) => y.id !== s.id), r);
  } catch (S) {
    (0, import_chunk_w578pjby.t)(`settings review store: applied, but the store could not be updated (${(0, import_chunk_jv7av99m.d)(S)})`, { level: "warn" });
  }
  return "applied";
}
async function fYa(e, r = j()) {
  let o = await L(r), s = o.filter((l) => l.id !== e);
  if (s.length === o.length) return false;
  return await U(s, r), true;
}
async function pYa(e, r = j()) {
  let o = await L(r), s = r.now().getTime(), l = o.filter((g) => {
    let h = Date.parse(g.stagedAt);
    return Number.isFinite(h) && h >= e.getTime() && h <= s;
  });
  if (l.length !== o.length || o.length === 0) await U(l, r);
  return o.length - l.length;
}
function Hss(e, r) {
  let o = (h) => {
    if (h === null) return {};
    try {
      let S = (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).safeParse((0, import_chunk_w578pjby.te)(Mne(h)));
      return S.success ? S.data : void 0;
    } catch {
      return;
    }
  }, s = o(e), l = o(r);
  if (l === void 0) return ["not valid JSON"];
  if (s === void 0) return ["replaces a file that was not valid JSON"];
  let g = [];
  for (let h of /* @__PURE__ */ new Set([...Object.keys(s), ...Object.keys(l)])) if (!(h in s)) g.push(`adds ${h}`);
  else if (!(h in l)) g.push(`removes ${h}`);
  else if ((0, import_chunk_w578pjby._)(s[h]) !== (0, import_chunk_w578pjby._)(l[h])) g.push(`changes ${h}`);
  return g;
}
function Me({ session: e, served: r }) {
  return !r && (0, import_chunk_3t7ve0wy.OB)() && (0, import_chunk_4vsz8a99.Obl)(e);
}
function mYa({ session: e, served: r, cause: o }) {
  if (o !== "unapproved") return o;
  if (Me({ session: e, served: r })) return "card";
  return !r && (0, import_chunk_3t7ve0wy.E0o)() ? "cloud" : "review";
}
function Dss(e, r) {
  switch (r) {
    case "card":
      return `Not applied: ${e} was NOT modified. In the Claude desktop app, a change to a Claude Code settings file applies only when the user approves that edit on its permission card. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`;
    case "cloud":
      return `Not applied: ${e} was NOT modified. A change to a Claude Code settings file applies only when a person approves it at the computer that Claude Code runs on, and a cloud session cannot take that approval. Approving the edit in this session does not apply it. The /settings-review command does not run in a cloud session, and on another computer it would not list this change. Tell the user what you meant to change. If the file is committed to a repository, the user can make the change themselves outside this session and push it. Do not retry the edit or try to make the same change another way.`;
    case "linked":
      return `Not applied: ${e} was NOT modified. The user approved this edit on its permission card, but this path reaches a Claude Code settings file through a symbolic link, so the approval does not apply it. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`;
    case "policy":
      return `Not applied: ${e} was NOT modified. The user approved this edit on its permission card, but this path is, or may be, a managed policy settings file or the --settings file, so the approval does not apply it. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`;
    case "review":
      return `Staged for review: ${e} was NOT modified. Changes to Claude Code settings files made without the owner of this computer approving them in person are held for their review; the owner applies or discards them with /settings-review, and the change takes effect only if they accept it. Do not retry the edit or try to make the same change another way.`;
  }
}
class oe extends import_chunk_jv7av99m.A {
  constructor(e) {
    super(`Not written: ${e} was NOT modified. Claude Code could not resolve where its managed settings folder is, so it cannot rule out that this path is a managed settings file, and it does not write the file. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`, "settings write refused: a managed drop-in directory did not resolve");
  }
}
var $e = "Staged for your review \xB7 not applied until you accept it in /settings-review", Be = "Not applied \xB7 a cloud session can't apply Claude's edits to settings files \xB7 if you want this change, make it outside this session";
function Qoo(e) {
  return e === "cloud" ? Be : $e;
}
async function hYa(e, r, o) {
  let s = e.remoteCall !== void 0;
  if (!(0, import_chunk_q7qjcthc.ZDs)({ served: s })) return;
  if (s) {
    let { settingsSpellings: E, unclassified: k } = await Pe(r), [P] = E;
    if (P !== void 0) return { path: P, cause: "unapproved" };
    if (k !== void 0) throw new oe(o.absolutePath);
    return;
  }
  if (e.permissionSurface !== void 0) return;
  let { settingsSpellings: l, unclassified: g, dropIns: h } = await Pe(r), [S] = l;
  if (S === void 0) {
    if (g !== void 0) throw new oe(o.absolutePath);
    return;
  }
  if (!(0, import_chunk_4vsz8a99.Mbl)(e.session, e.toolUseId, o)) return { path: S, cause: "unapproved" };
  let y = await Ge(o.absolutePath, r, l, h ?? await H());
  return y === "covered" ? void 0 : { path: S, cause: y };
}
async function Pe(e) {
  let r = e.some(import_chunk_p1ewvgeh.YUn) ? await H() : void 0;
  return { settingsSpellings: e.filter((o) => (0, import_chunk_p1ewvgeh._2e)(o) || r !== void 0 && (0, import_chunk_p1ewvgeh.vdn)(o, r)), unclassified: r === void 0 || r.allResolved ? void 0 : e.find(import_chunk_p1ewvgeh.YUn), dropIns: r };
}
async function Ge(e, r, o, s) {
  if (!o.includes(e)) return "linked";
  let l = r.filter((h) => h !== e);
  if (await je(r, s)) return l.length === 0 ? "policy" : "linked";
  if (l.length === 0) return "covered";
  let g = N(e);
  if (g === void 0) return "linked";
  for (let h of l) if (await we(h) !== g) return "linked";
  return "covered";
}
async function je(e, r) {
  if (!r.allResolved || !r.allLocated) return true;
  let o = /* @__PURE__ */ new Set();
  for (let s of He()) {
    o.add((0, import_chunk_sqvd6je2.my)(s));
    try {
      o.add((0, import_chunk_sqvd6je2.my)(await R(s)));
    } catch {
      return true;
    }
  }
  for (let s of e) {
    let l;
    try {
      l = await R(s);
    } catch {
      return true;
    }
    if ((0, import_chunk_p1ewvgeh.vdn)(s, r) || (0, import_chunk_p1ewvgeh.vdn)(l, r) || o.has((0, import_chunk_sqvd6je2.my)((0, import_chunk_n2dbhmj2.xt)(s))) || o.has((0, import_chunk_sqvd6je2.my)(l))) return true;
  }
  return false;
}
function He() {
  let e = (0, import_chunk_2yx6c1y2._n)("flagSettings");
  return [...(0, import_chunk_6mfepmbb.sge)((0, import_chunk_2yx6c1y2.SB)()).map((r) => (0, import_path.join)(r, "managed-settings.json")), ...e === void 0 ? [] : [e]];
}
async function gYa(e) {
  let r = e.writeCtx.remoteCall === void 0 ? "local" : "served";
  try {
    await Ce({ path: e.absolutePath, proposedContent: e.proposedContent, by: { tool: e.tool, origin: r, sessionId: e.writeCtx.remoteCall?.origin.callerSessionId ?? (0, import_chunk_f9x2f6cx.W)() } });
  } catch (o) {
    throw (0, import_chunk_cqa9hrgx.m)("settings_quarantine", "stage_failed"), new import_chunk_jv7av99m.A(`Could not stage this change to a Claude Code settings file for the owner's review, so nothing was written. (${(0, import_chunk_jv7av99m.d)(o)})`, "settings review store: stage failed");
  }
  (0, import_chunk_y53wbr8a.a)("tengu_settings_change_staged", { origin: (0, import_chunk_78g0060s.f)(r), tool: (0, import_chunk_78g0060s.f)(e.tool), source_kind: (0, import_chunk_78g0060s.f)(N(e.absolutePath) ?? "other"), key_count: Hss(e.currentContent, e.proposedContent).length }), (0, import_chunk_cqa9hrgx.u)("settings_quarantine");
}
