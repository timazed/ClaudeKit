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
var chunk_gt0vfa7p_exports = {};
__export(chunk_gt0vfa7p_exports, {
  Iji: () => Iji,
  Oji: () => Oji,
  xTr: () => xTr
});
module.exports = __toCommonJS(chunk_gt0vfa7p_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_psw95195 = require("/$bunfs/root/chunk-psw95195.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_r3mm3x33 = require("/$bunfs/root/chunk-r3mm3x33.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_path = require("path");
var b = 3, z = 8;
function v() {
  let s = (0, import_chunk_2yx6c1y2._n)("userSettings");
  return s !== void 0 && (0, import_path.basename)(s) === import_chunk_6mfepmbb.YR.default ? s : void 0;
}
async function Oji(s, e) {
  if (!(0, import_chunk_m15w38ag.ne)()) return;
  let n = e.epoch;
  await Promise.all([N(s, e), R(s, e), F("managed-settings file tier", () => U(s, e, n))]), await F("project/local layers", () => O(s, e, e.epoch));
}
async function F(s, e) {
  try {
    await e();
  } catch (n) {
    (0, import_chunk_w578pjby.t)(`settingsPrime: start-up seed of the ${s} failed: ${(0, import_chunk_jv7av99m.d)(n)}; the file reads serve`, { level: "warn" });
  }
}
async function R(s, e) {
  try {
    await X(s, e);
  } catch (n) {
    (0, import_chunk_w578pjby.t)(`settingsPrime: ownership read-ahead for the local settings root failed: ${(0, import_chunk_jv7av99m.d)(n)}; the probe runs as today`, { level: "warn" });
  }
}
async function N(s, e) {
  try {
    let n = v();
    if (n === void 0) return;
    if (e.parsedFiles.has(n)) {
      (0, import_chunk_w578pjby.t)("settingsPrime: user settings already read before start-up; seed skipped");
      return;
    }
    let r = e.epoch, a = await (0, import_chunk_2yx6c1y2.iKt)(s, n);
    if (a.kind === "absent") {
      if ((0, import_chunk_6mfepmbb.kKt)(n), e.seedParsedFile(n, "userSettings", (0, import_chunk_6mfepmbb.Uoe)(), r)) (0, import_chunk_w578pjby.t)("settingsPrime: user settings absent; seeded as none");
      return;
    }
    if (a.kind !== "seeded") {
      (0, import_chunk_w578pjby.t)(`settingsPrime: start-up seed skipped (${(0, import_chunk_2yx6c1y2.pKn)(a)}); the file read serves`);
      return;
    }
    if (e.seedParsedFile(n, "userSettings", a.parsed, r)) (0, import_chunk_w578pjby.t)(`settingsPrime: user settings seeded at start-up (${a.size} bytes)`);
  } catch (n) {
    (0, import_chunk_w578pjby.t)(`settingsPrime: start-up seed failed: ${(0, import_chunk_jv7av99m.d)(n)}; the file read serves`, { level: "warn" });
  }
}
class T {
  storageV5;
  store;
  inFlight = null;
  followUpQueued = false;
  disposed = false;
  state = { kind: "unprimed" };
  consecutiveThrows = 0;
  runsInState = 0;
  loggedThrowMessages = /* @__PURE__ */ new Set();
  loggedOwnershipThrowMessages = /* @__PURE__ */ new Set();
  loggedHostFilesThrowMessages = /* @__PURE__ */ new Set();
  unsubscribe;
  constructor(s, e) {
    this.storageV5 = s;
    this.store = e;
    this.unsubscribe = e.onInvalidate(() => {
      if (!this.disposed) this.seedAttestedTier(), this.keepUserLayer(), this.schedule();
    }), this.seedAttestedTier(), this.schedule();
  }
  keepUserLayer() {
    let s = (0, import_chunk_psw95195.rve)() ? this.store.lastSeededUserLayer : void 0;
    if (s !== void 0) this.store.seedParsedFile(s.path, "userSettings", s.parsed, this.store.epoch);
  }
  seedAttestedTier() {
    try {
      P(this.storageV5, this.store, this.store.epoch);
    } catch (s) {
      this.logThrowOnce(s, this.loggedHostFilesThrowMessages);
    }
  }
  schedule() {
    if (this.inFlight !== null) {
      this.followUpQueued = true;
      return;
    }
    this.inFlight = this.run().finally(() => {
      if (this.disposed) return;
      if (this.inFlight = null, this.followUpQueued) this.followUpQueued = false, this.schedule();
    });
  }
  async run() {
    let s = I(this.storageV5, this.store).then((e) => (this.loggedOwnershipThrowMessages.clear(), e), (e) => {
      if (!this.disposed) this.logThrowOnce(e, this.loggedOwnershipThrowMessages);
      return;
    });
    try {
      let e = this.store.epoch;
      try {
        let a = v();
        if (a !== void 0) {
          if (!await this.seedFromBackend(a, e)) return;
        }
      } catch (a) {
        if (!this.disposed) this.onThrow(a);
        return;
      }
      let n = await s;
      if (this.disposed) return;
      if (E(this.store, n), (await Promise.all([this.seedLogged(e, O), this.seedLogged(e, U)])).includes(false)) return;
      this.consecutiveThrows = 0;
      try {
        (0, import_chunk_2yx6c1y2._p)(), this.loggedThrowMessages.clear();
      } catch (a) {
        if (!this.disposed) this.logThrowOnce(a);
      }
    } finally {
      await s;
    }
  }
  async seedLogged(s, e) {
    try {
      return await e(this.storageV5, this.store, s);
    } catch (n) {
      if (!this.disposed) this.logThrowOnce(n, this.loggedHostFilesThrowMessages);
      return this.store.epoch === s && !this.disposed;
    }
  }
  async seedFromBackend(s, e) {
    let n = this.state, r = await (0, import_chunk_2yx6c1y2.iKt)(this.storageV5, s, n.kind === "seeded" ? n : void 0);
    if (this.store.epoch !== e || this.disposed) return false;
    if (r.kind === "seeded") {
      if (this.store.seedParsedFile(s, "userSettings", r.parsed, e), n.kind === "seeded" && n.contentHash === r.contentHash) return true;
    } else if (r.kind === "absent") (0, import_chunk_6mfepmbb.kKt)(s), this.store.seedParsedFile(s, "userSettings", (0, import_chunk_6mfepmbb.Uoe)(), e);
    return this.transition(r), true;
  }
  transition(s) {
    let e = this.state;
    if (this.state = s, e.kind === s.kind && (s.kind !== "failing" || e.kind === "failing" && e.code === s.code)) {
      this.runsInState++;
      return;
    }
    if (e.kind === "failing" && s.kind === "seeded") (0, import_chunk_w578pjby.t)(`settingsPrime: backend read recovered after ${this.runsInState} failing run(s)`);
    switch (this.runsInState = 1, s.kind) {
      case "seeded":
        (0, import_chunk_w578pjby.t)(`settingsPrime: user settings seeded (${s.size} bytes)`);
        return;
      case "absent":
        (0, import_chunk_w578pjby.t)("settingsPrime: user settings absent; served as none");
        return;
      case "oversize":
        (0, import_chunk_w578pjby.t)("settingsPrime: user settings not seeded (oversize); the last seed or the raw path serves");
        return;
      case "failing":
        (0, import_chunk_w578pjby.t)(`settingsPrime: backend read failed: ${s.code}${s.failureClass ? ` (${s.failureClass})` : ""}; the last seed or the raw path serves`, { level: "warn" });
        return;
      case "unprimed":
      case "broken":
        return;
    }
  }
  onThrow(s) {
    if (this.consecutiveThrows++, this.state = { kind: "broken" }, this.logThrowOnce(s), this.consecutiveThrows >= b) (0, import_chunk_w578pjby.t)(`settingsPrime: disabled after ${b} consecutive failures; the raw path serves from the next reset`, { level: "warn" }), this.dispose();
  }
  logThrowOnce(s, e = this.loggedThrowMessages) {
    let n = (0, import_chunk_jv7av99m.d)(s);
    if (e.has(n) || e.size >= z) return;
    e.add(n), (0, import_chunk_k449cc64.i)(s);
  }
  primes(s) {
    return this.storageV5 === s;
  }
  async whenIdle() {
    while (this.inFlight !== null || this.followUpQueued) await (this.inFlight ?? Promise.resolve());
  }
  dispose() {
    if (this.disposed = true, this.unsubscribe(), this.inFlight = null, this.followUpQueued = false, this.store.primer === this) this.store.primer = void 0, this.store.managedFileReads.clear(), this.store.lastSeededUserLayer = void 0;
  }
}
async function Iji(s, e) {
  if (!(0, import_chunk_m15w38ag.ne)() || s === void 0) return;
  if (e.primer !== void 0) {
    if (!e.primer.primes(s)) (0, import_chunk_w578pjby.t)("settingsPrime: store already primed through another backend; second prime ignored");
    return;
  }
  (0, import_chunk_xcgcdx61.bDr)(s).catch(import_chunk_k449cc64.i), e.primer = new T(s, e), await e.primer.whenIdle();
}
async function xTr(s) {
  let e = (0, import_chunk_r3mm3x33.Br)(), n = e.backendReadResetTail, r;
  e.backendReadResetTail = new Promise((a) => r = a), await n;
  try {
    return await x(s, e);
  } finally {
    r();
  }
}
async function x(s, e) {
  if (await e.primer?.whenIdle(), e.primer !== void 0) await R(s, e);
  let n = e.primer === void 0 ? [] : (await Promise.all([...W(s).map((r) => (0, import_chunk_2yx6c1y2.dJi)(e, r)), Q(s, e)])).flat().filter((r) => r !== void 0);
  if ((0, import_chunk_r3mm3x33.pr)(n.length > 0 ? { userLayer: "retain" } : void 0), n.length === 0) return;
  return () => {
    for (let r of n) r();
  };
}
function W(s) {
  let e = v();
  return [...e === void 0 ? [] : [(0, import_chunk_2yx6c1y2.cJi)(s, e)], ...B(s)];
}
function B(s) {
  let e = [];
  for (let n of ["projectSettings", "localSettings"]) {
    if (n === "projectSettings" && (0, import_chunk_2yx6c1y2.vm)()) continue;
    let r = (0, import_chunk_2yx6c1y2._n)(n);
    if (r !== void 0) e.push((0, import_chunk_2yx6c1y2.uJi)(s, n, r, n === "projectSettings" ? "project settings" : "local settings"));
    if (n === "localSettings") {
      let a = (0, import_chunk_2yx6c1y2.A_)();
      if (a !== void 0 && a !== r) e.push((0, import_chunk_2yx6c1y2.uJi)(s, n, a, "legacy local settings"));
    }
  }
  return e;
}
async function M(s, e) {
  let n = s.hostFiles;
  if (!n.serves("system")) {
    if (!e.systemSpaceServingLogged) e.systemSpaceServingLogged = true, (0, import_chunk_w578pjby.t)("settingsPrime: the managed-settings file tier is not read ahead (the backend does not serve 'system'); the policy walk reads the host's files itself");
    return;
  }
  let r = (0, import_chunk_6mfepmbb.sge)((0, import_chunk_2yx6c1y2.SB)()), a = e.policyWalkCount, o = r.map((u) => (0, import_chunk_2yx6c1y2.fJi)(s, (0, import_path.join)(u, "managed-settings.json"), "managed settings", e)), [g, c] = await Promise.all([Promise.all(r.map((u) => (0, import_chunk_2yx6c1y2.RFl)(n, (0, import_path.join)(u, "managed-settings.d")))), Promise.all(o.map((u) => u.read()))]), l = { listings: [], unlisted: [], layers: [...o], walksAtReadStart: a }, f = [];
  for (let [u, S] of r.entries()) {
    let p = g[u], m = (0, import_path.join)(S, "managed-settings.d");
    if (p.kind === "failing") {
      (0, import_chunk_w578pjby.t)(`settingsPrime: ${m} not listed through the backend (backend listing failed: ${p.code}${p.failureClass ? ` (${p.failureClass})` : ""}); the folder read serves`), l.unlisted.push(m);
      continue;
    }
    if (p.names.length === 0) {
      (0, import_chunk_w578pjby.t)(`settingsPrime: ${m} has no drop-ins to read ahead; the folder read confirms`), l.unlisted.push(m);
      continue;
    }
    l.listings.push({ dir: m, names: p.names });
    for (let j of p.names) f.push((0, import_chunk_2yx6c1y2.fJi)(s, (0, import_path.join)(m, j), "managed settings drop-in", e));
  }
  return l.layers.push(...f), { ...l, reads: Promise.all(f.map((u) => u.read())).then((u) => [...c, ...u]) };
}
async function O(s, e, n) {
  let r = B(s);
  if (r.length === 0) return true;
  let a = await Promise.all(r.map((o) => o.read()));
  if (e.epoch !== n) return false;
  return G(e, r, a, n), true;
}
var L = Object.freeze([]);
function P(s, e, n) {
  if (s.hostFiles.serving("system") !== "absent" || e.systemAttestationContradicted) return;
  let r = (0, import_chunk_6mfepmbb.sge)((0, import_chunk_2yx6c1y2.SB)()).map((a) => ({ dropInDir: (0, import_path.join)(a, "managed-settings.d"), basePath: (0, import_path.join)(a, "managed-settings.json") }));
  if (r.some(({ basePath: a, dropInDir: o }) => e.walkReadManagedFileIn(a, o))) {
    e.systemAttestationContradicted = true;
    for (let { basePath: a, dropInDir: o } of r) e.clearFolderListing(o, n), e.unseedParsedFile(a, "policySettings", n);
    (0, import_chunk_k449cc64.i)(Error("settings: a managed-settings file was read from a folder the host attested absent ('system' space); the attestation is ignored for the rest of this process"));
    return;
  }
  if (!e.systemSpaceServingLogged) e.systemSpaceServingLogged = true, (0, import_chunk_w578pjby.t)("settingsPrime: the host attests the 'system' space absent, so this machine's policy folder (or the one CLAUDE_CODE_MANAGED_SETTINGS_PATH names) is not read and the session has no managed-settings files");
  for (let { basePath: a, dropInDir: o } of r) if (e.seedFolderListing(o, L, n), !e.walkRead(a)) e.seedParsedFile(a, "policySettings", (0, import_chunk_6mfepmbb.Uoe)(), n);
  return { listings: r.map(({ dropInDir: a }) => ({ dir: a, names: L })), layers: r.map(({ basePath: a }) => ({ path: a, parsed: (0, import_chunk_6mfepmbb.Uoe)() })) };
}
async function U(s, e, n) {
  if (P(s, e, n) !== void 0) return e.epoch === n;
  let r = await M(s, e);
  if (r === void 0) return C(e, n), true;
  let a = await r.reads;
  if (e.epoch !== n) return false;
  let { verdicts: o } = H(e, r, n);
  return A(e, r, a, o, n), true;
}
function A(s, e, n, r, a) {
  let o = [], g = /* @__PURE__ */ new Set();
  for (let [c, l] of e.layers.entries()) {
    let f = n[c];
    if (f.kind !== "seeded") {
      (0, import_chunk_w578pjby.t)(`settingsPrime: ${l.label} not seeded (${(0, import_chunk_2yx6c1y2.pKn)(f)}); the file read serves`), s.managedFileReads.delete(l.path), s.unseedParsedFile(l.path, l.source, a);
      continue;
    }
    g.add(l.path), s.managedFileReads.set(l.path, { contentHash: f.contentHash, parsed: f.parsed });
    let u = r.get((0, import_path.dirname)(l.path)), S = u !== void 0 && u !== "install" ? u : s.policyInstallVerdict(l.path, f.parsed, e.walksAtReadStart);
    if (S === "raced") {
      s.dropRetainedLayer(l.path), (0, import_chunk_w578pjby.t)(`settingsPrime: ${l.label} not installed (the walk read different content while this read was in flight); re-verified next generation`);
      continue;
    }
    if (S === "deferred") {
      (0, import_chunk_w578pjby.t)(`settingsPrime: ${l.label} changed after this generation's policy walk; it applies from the next reset, as today`), o.push({ layer: l, parsed: f.parsed });
      continue;
    }
    if (s.seedParsedFile(l.path, l.source, f.parsed, a)) o.push({ layer: l, parsed: f.parsed });
  }
  for (let c of [...s.managedFileReads.keys()]) if (!g.has(c)) s.managedFileReads.delete(c), s.unseedParsedFile(c, "policySettings", a);
  return o;
}
function C(s, e) {
  for (let n of [...s.managedFileReads.keys()]) s.managedFileReads.delete(n), s.unseedParsedFile(n, "policySettings", e);
  for (let n of (0, import_chunk_6mfepmbb.sge)((0, import_chunk_2yx6c1y2.SB)())) s.clearFolderListing((0, import_path.join)(n, "managed-settings.d"), e);
}
function H(s, e, n) {
  for (let o of e.unlisted) s.clearFolderListing(o, n);
  let r = [], a = /* @__PURE__ */ new Map();
  for (let o of e.listings) {
    let g = s.folderInstallVerdict(o.dir, o.names, e.walksAtReadStart);
    if (a.set(o.dir, g), g === "raced") s.clearFolderListing(o.dir, n), (0, import_chunk_w578pjby.t)(`settingsPrime: ${o.dir} listing not installed (a read this generation went by another membership while it was in flight); the walk's membership or its own folder read serves until the next reset`);
    else if (g === "deferred") (0, import_chunk_w578pjby.t)(`settingsPrime: ${o.dir} membership changed after this generation's policy walk; it applies from the next reset, as today`), r.push(o);
    else if (s.seedFolderListing(o.dir, o.names, n)) r.push(o);
  }
  return { kept: r, verdicts: a };
}
function G(s, e, n, r) {
  for (let [a, o] of e.entries()) {
    let g = n[a], c = g.kind === "seeded" ? g.parsed : g.kind === "absent" && o.whenAbsent === "seedAbsence" ? (0, import_chunk_6mfepmbb.Uoe)() : void 0;
    if (c !== void 0 && s.walkReadDiffers(o.path, c)) (0, import_chunk_w578pjby.t)(`settingsPrime: ${o.label} not installed (the file read already saw different content this generation)`);
    else if (g.kind === "seeded") s.seedParsedFile(o.path, o.source, g.parsed, r);
    else if (c !== void 0) (0, import_chunk_6mfepmbb.kKt)(o.path), s.seedParsedFile(o.path, o.source, c, r);
    else (0, import_chunk_w578pjby.t)(`settingsPrime: ${o.label} not seeded (${(0, import_chunk_2yx6c1y2.pKn)(g)}); the file read serves`);
  }
}
async function Q(s, e) {
  if (!(0, import_chunk_m15w38ag.ne)()) return [];
  let n = e.epoch;
  try {
    let r = P(s, e, n);
    if (r !== void 0) return [...r.listings.map(({ dir: c, names: l }) => e.retainFolderListing(c, l)), ...r.layers.map(({ path: c, parsed: l }) => e.retainLayer(c, l))];
    let a = await M(s, e);
    if (a === void 0) return C(e, n), [];
    let o = await a.reads;
    if (e.epoch !== n) return [];
    let g = H(e, a, n);
    return [...g.kept.map(({ dir: c, names: l }) => e.retainFolderListing(c, l)), ...A(e, a, o, g.verdicts, n).map(({ layer: c, parsed: l }) => e.retainLayer(c.path, l))];
  } catch (r) {
    return (0, import_chunk_w578pjby.t)(`settings: managed settings not re-seeded: ${(0, import_chunk_jv7av99m.d)(r)}; the file reads serve`, { level: "warn" }), [];
  }
}
async function X(s, e) {
  E(e, await I(s, e));
}
async function I(s, e) {
  if (!(0, import_chunk_m15w38ag.ne)()) return;
  if (typeof process.getuid !== "function" && typeof process.geteuid !== "function") return;
  let n = (0, import_chunk_2yx6c1y2.mJi)();
  if (n === void 0 || e.localStoreProbes.hasCanonicalRootOwnerUids(n)) return;
  let r = s.hostFiles;
  if (!r.serves("workspace")) {
    (0, import_chunk_w578pjby.t)("settingsPrime: ownership of the local settings root not read ahead (the backend does not serve the workspace); the probe runs as today");
    return;
  }
  let [a, o, g] = await Promise.allSettled([r.stat(import_chunk_w578pjby.yS.workspace(n)), r.stat(import_chunk_w578pjby.yS.workspace((0, import_path.join)(n, ".git")), { follow: false }), r.stat(import_chunk_w578pjby.yS.workspace((0, import_path.join)(n, ".claude")), { follow: false })]), c = y(a), l = y(o), f = y(g), u = q(c, l, f);
  if ("skipped" in u) {
    (0, import_chunk_w578pjby.t)(`settingsPrime: ownership of the local settings root not read ahead (${u.skipped}); the probe runs as today`);
    return;
  }
  return { root: n, uids: u.uids };
}
function E(s, e) {
  if (e !== void 0 && s.localStoreProbes.primeCanonicalRootOwnerUids(e.root, e.uids)) (0, import_chunk_w578pjby.t)("settingsPrime: ownership of the local settings root read ahead through the backend");
}
function y(s) {
  if (s.status === "rejected") throw s.reason;
  return s.value;
}
function q(s, e, n) {
  if (!s.ok) return { skipped: `stat of the root failed: ${k(s.error)}` };
  if (!e.ok) return { skipped: `lstat of .git failed: ${k(e.error)}` };
  if (!n.ok) return { skipped: `lstat of .claude failed: ${k(n.error)}` };
  let r = w(s.value);
  if (r === void 0) return { skipped: s.value.kind === "absent" ? "the root is absent" : "no owner uid for the root" };
  let a = w(e.value);
  if (a === void 0) return { skipped: e.value.kind === "absent" ? "no .git entry (left to the probe's per-call throw)" : "no owner uid for .git" };
  let o = null;
  if (n.value.kind !== "absent") {
    let g = w(n.value);
    if (g === void 0) return { skipped: "no owner uid for .claude" };
    o = g;
  }
  return { uids: { rootUid: r, gitEntryUid: a, claudeEntryUid: o } };
}
function w(s) {
  return s.kind === "absent" ? void 0 : s.uid;
}
function k(s) {
  return s.code === "Failed" ? s.telemetryCode ?? s.failureClass : s.code;
}
