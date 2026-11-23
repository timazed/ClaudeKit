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
var chunk_89bjmq9y_exports = {};
__export(chunk_89bjmq9y_exports, {
  $Ce: () => $Ce,
  $Ei: () => $Ei,
  FEi: () => FEi,
  Glo: () => Glo,
  L1t: () => L1t,
  NEi: () => NEi,
  UEi: () => UEi,
  Vmr: () => Vmr,
  eds: () => eds,
  tds: () => tds,
  xH: () => xH
});
module.exports = __toCommonJS(chunk_89bjmq9y_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_znn7ks07 = require("/$bunfs/root/chunk-znn7ks07.js");
var import_chunk_p51r1nb3 = require("/$bunfs/root/chunk-p51r1nb3.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var L = 16, E = 64;
function T(e, n) {
  if (e.startedAt !== n.startedAt) return e.startedAt < n.startedAt;
  let s = e.procStart ?? "", i = n.procStart ?? "";
  if (s !== i) return s < i;
  return e.pid < n.pid;
}
function D(e, n, s) {
  return n.filter((i) => i.pid !== s && i.name !== void 0 && i.procStart !== void 0 && (0, import_chunk_865at33z.$s)(i.name) === e);
}
function O(e) {
  return new Set(e.flatMap((n) => n.name === void 0 ? [] : [(0, import_chunk_865at33z.$s)(n.name)]));
}
function B(e, n, s = import_chunk_865at33z.fPe) {
  let i = (r) => `${(0, import_chunk_7cfjrnwy.ee)(e, import_chunk_xfj2cwfv.dD - r.length - 1)}-${r}`;
  for (let r = 0; r < L; r++) {
    let c = i(s());
    if (!n.has((0, import_chunk_865at33z.$s)(c))) return c;
  }
  for (let r = 2; ; r++) {
    let c = i(`${s()}-${r}`);
    if (!n.has((0, import_chunk_865at33z.$s)(c))) return c;
  }
}
function F(e) {
  let { desiredName: n, self: s, live: i, moment: r, slug: c } = e, l = e.suffixBase ?? n, g = (0, import_chunk_865at33z.$s)(n);
  if (!g) return { kind: "keep" };
  let p = D(g, i, s.pid), o = r === "rename" ? p : r === "startup" ? p.filter((a) => T(a, s)) : p.filter((a) => T({ ...a, startedAt: a.nameSince ?? a.startedAt }, { ...s, startedAt: s.nameSince ?? s.startedAt }));
  if (o.length === 0) return { kind: "keep" };
  return { kind: "yield", newName: B(l, O(i), c), holders: o };
}
class R {
  correspondents = /* @__PURE__ */ new Map();
  senderMode = null;
  userTypedName = void 0;
  hasAdopter = false;
  lastYield = void 0;
  yielded = (0, import_chunk_69qhefwa.Be)();
  pendingYield = void 0;
  noteCorrespondent(e, n, s) {
    if (!e || (0, import_chunk_xfj2cwfv.Wb)(e).scheme !== "uds") return;
    if (this.correspondents.delete(e), this.correspondents.set(e, { pid: n, procStart: s }), this.correspondents.size > E) {
      let i = this.correspondents.keys().next().value;
      if (i !== void 0) this.correspondents.delete(i);
    }
  }
  announceYield(e, n) {
    this.pendingYield = [e, n], this.yielded.emit(e, n);
  }
  reset() {
    this.correspondents.clear(), this.lastYield = void 0, this.yielded.clear(), this.pendingYield = void 0, this.senderMode = null, this.userTypedName = void 0, this.hasAdopter = false;
  }
}
var I = new import_chunk_2904xtvq.j(() => new R());
function xH() {
  return I.of((0, import_chunk_f9x2f6cx.N)().host);
}
function NEi() {
  let e = (0, import_chunk_865at33z.wM)();
  return e !== void 0 && (e.source === "user" || e.source === "collision") && xH().userTypedName === e.name ? e.name : void 0;
}
function FEi(e, n, s) {
  xH().noteCorrespondent(e, n, s);
}
function eds() {
  let e = xH(), n = e.pendingYield;
  return e.pendingYield = void 0, n;
}
var C = { whenRegistered: import_chunk_865at33z.zCt, listLive: import_chunk_p51r1nb3.Yae };
function P() {
  return (0, import_chunk_865at33z.b)("tengu_session_name_uniqueness", true);
}
async function Vmr(e, n, s = C, i = e) {
  if (!P()) return { name: e, yielded: false };
  if (i = A(i) ?? i, !await s.whenRegistered()) return { name: e, yielded: false };
  try {
    let r = (0, import_chunk_f9x2f6cx.W)(), c = (await s.listLive()).filter((a) => a.pid === process.pid || a.sessionId !== r), l = c.find((a) => a.pid === process.pid);
    if (!l) return { name: e, yielded: false };
    let g = F({ desiredName: e, self: l, live: c, moment: n, slug: s.slug, suffixBase: i });
    if (g.kind === "keep") return { name: e, yielded: false };
    let p = U(e, l), o = (0, import_chunk_xfj2cwfv.Ba)(p !== void 0 && (0, import_chunk_865at33z.$s)(p) !== (0, import_chunk_865at33z.$s)(e) ? p : g.newName) || g.newName;
    return (0, import_chunk_w578pjby.t)(`[session-name] "${e}" is held by live pid ${g.holders[0]?.pid}; this session takes "${o}"`, { level: "info" }), (0, import_chunk_cqa9hrgx.u)("session_name_collision"), xH().lastYield = { base: (0, import_chunk_865at33z.$s)(i), name: o }, { name: o, yielded: true };
  } catch (r) {
    return (0, import_chunk_w578pjby.t)(`[session-name] uniqueness check failed, keeping "${e}": ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "warn" }), (0, import_chunk_cqa9hrgx.m)("session_name_collision", "check_failed"), { name: e, yielded: false };
  }
}
function U(e, n) {
  let s = L1t(e, n.name);
  if (s !== void 0) return s;
  let i = n.name, r = i === void 0 ? void 0 : _(i);
  if (i === void 0 || r === void 0) return;
  let c = A(e) ?? e, l = (0, import_chunk_7cfjrnwy.ee)(c, import_chunk_xfj2cwfv.dD - r.suffix.length - 1);
  return r.base.toLowerCase() === l.toLowerCase() ? i : void 0;
}
function _(e) {
  let n = /-([a-z]+-[a-z]+)(-\d{1,4})?$/i.exec(e);
  if (!n || !(0, import_chunk_865at33z.NIl)(n[1].toLowerCase())) return;
  let s = e.slice(0, e.length - n[0].length);
  return s.length > 0 ? { base: s, suffix: n[0].slice(1) } : void 0;
}
function L1t(e, n) {
  if (!P()) return;
  let s = xH().lastYield, i = A(e) ?? e;
  return s !== void 0 && n !== void 0 && (0, import_chunk_865at33z.$s)(s.name) === (0, import_chunk_865at33z.$s)(n) && s.base === (0, import_chunk_865at33z.$s)(i) ? n : void 0;
}
function x(e) {
  let n = (0, import_chunk_865at33z.wM)();
  return n !== void 0 && (0, import_chunk_865at33z.$s)(n.name) === (0, import_chunk_865at33z.$s)(e);
}
function A(e) {
  return _(e)?.base;
}
var z = 3e3;
function M(e) {
  setTimeout(e, z).unref();
}
async function $Ei(e) {
  let { sessionNameArg: n, interactive: s, writeName: i, onRenamed: r, deps: c } = e, l = e.scheduleRecheck ?? M;
  if (n && s) xH().userTypedName = n;
  if (n) await i(n, e.sessionNameArgSource ?? "user");
  let g = (0, import_chunk_865at33z.wM)();
  if (!s || !g || g.source === "derived") return;
  let p = async (o, a, S = o) => {
    if (a && !x(o)) return;
    let f = await Vmr(o, a ? "recheck" : "startup", c, S);
    if (!x(o)) return;
    if (!f.yielded) {
      if (!a) l(() => void p(o, true));
      return;
    }
    if (xH().userTypedName === o) xH().userTypedName = f.name;
    if (await i(f.name, "collision"), r?.(f.name, o), xH().announceYield(f.name, o), !a) l(() => void p(f.name, true, o));
  };
  await p(g.name, false);
}
function Glo(e) {
  let { name: n, onYield: s, deps: i } = e, r = e.suffixBase ?? n;
  (e.scheduleRecheck ?? M)(() => {
    (async () => {
      if (!x(n)) return;
      let l = await Vmr(n, "recheck", i, r);
      if (!l.yielded || !x(n)) return;
      if (xH().userTypedName === n) xH().userTypedName = l.name;
      await s(l.name, n);
    })();
  });
}
function tds(e, n, s) {
  let i = (0, import_chunk_865at33z.wM)();
  if (i === void 0 || i.source === "derived" || i.source === "auto") return;
  if (i.source === "collision" && L1t(e?.name ?? n, i.name) !== void 0) return;
  let r = (0, import_chunk_865at33z.$s)(i.name);
  if (e !== void 0 && r === (0, import_chunk_865at33z.$s)(e.name) || r === (0, import_chunk_865at33z.$s)(n) || r === (0, import_chunk_865at33z.$s)(s)) return;
  return i;
}
async function $Ce(e, n, s = {}) {
  let i = s.deps ?? C, r = e ? (0, import_chunk_xfj2cwfv.Ba)(e) : "";
  if (!r) return;
  let c = (0, import_chunk_865at33z.G4)(), l = c.adoptions, g = ++c.restores, p = () => c.adoptions === l && (!s.yieldToLaterRestore || c.restores === g);
  if (!await i.whenRegistered() || !p()) return;
  if (s.keepLaunchName && (0, import_chunk_865at33z.wM)()?.givenAtLaunch) return;
  if (s.autoOnly) {
    await (0, import_chunk_865at33z.hoe)(r, n, "auto");
    return;
  }
  let o = (0, import_chunk_865at33z.wM)();
  if (o !== void 0 && o.source !== "auto" && o.source !== "derived" && (0, import_chunk_865at33z.$s)(o.name) === (0, import_chunk_865at33z.$s)(r)) return;
  let a = await Vmr(r, "rename", i);
  if (!p() || tds(o, r, a.name)) return;
  let S = (0, import_chunk_865at33z.wM)();
  if (s.source === "auto" && S !== void 0 && S.source !== "derived" && (S.name !== o?.name || S.source !== o.source)) return;
  let f = s.source === "auto" ? "auto" : "collision", h = async (y, k) => {
    if (f === "auto" && (0, import_chunk_865at33z.wM)()?.source !== "auto") return;
    await (0, import_chunk_865at33z.hoe)(y, n, f), xH().announceYield(y, k);
  };
  if (!a.yielded) {
    await (0, import_chunk_865at33z.hoe)(r, n, s.source), Glo({ name: r, deps: i, onYield: h });
    return;
  }
  if (await (0, import_chunk_865at33z.hoe)(a.name, n, f), xH().userTypedName === r) xH().userTypedName = a.name;
  if (Glo({ name: a.name, suffixBase: r, deps: i, onYield: h }), a.name === o?.name) return;
  xH().announceYield(a.name, r);
}
async function UEi(e, n, s, i, r = import_chunk_p51r1nb3.XOi, c = C.listLive) {
  if (!P() || !(0, import_chunk_znn7ks07.Hl)() || xH().correspondents.size === 0) return;
  let l = (0, import_chunk_p51r1nb3.ybe)(), [g, p, o] = [e, n, s].map(import_chunk_xfj2cwfv.Ba), a = `This session was renamed from "${g}" to "${p}" ("${o}" is held by another live session on this machine). Address this one as "${p}" from now on.`, S;
  try {
    S = new Map((await c(i)).map((f) => [f.pid, f.sock]));
  } catch (f) {
    (0, import_chunk_w578pjby.t)(`[session-name] rename notice skipped: registry unreadable (${(0, import_chunk_jv7av99m.w)(f) ?? (0, import_chunk_jv7av99m.d)(f)})`);
    return;
  }
  await Promise.all([...xH().correspondents].map(async ([f, { pid: h, procStart: y }]) => {
    let { scheme: k, target: v } = (0, import_chunk_xfj2cwfv.Wb)(f);
    if (k !== "uds" || !v || l !== void 0 && (0, import_chunk_xfj2cwfv.jNe)(v, l) || S.get(h) !== v) return;
    try {
      await r(v, a, i, p, void 0, void 0, xH().senderMode?.(), { trackReceipts: false, expectPeerPid: h, ...y !== void 0 && { expectPeerProcStart: y } });
    } catch (Y) {
      (0, import_chunk_w578pjby.t)(`[session-name] rename notice to ${(0, import_chunk_p51r1nb3.Uk)(f)} failed: ${(0, import_chunk_jv7av99m.w)(Y) ?? "send error"}`);
    }
  }));
}
