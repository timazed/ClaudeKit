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
var chunk_3bgaher8_exports = {};
__export(chunk_3bgaher8_exports, {
  J8l: () => J8l,
  KKs: () => KKs,
  VKs: () => VKs,
  X8l: () => X8l,
  Y8l: () => Y8l,
  YKs: () => YKs,
  jJn: () => jJn,
  k$e: () => k$e,
  qKs: () => qKs,
  zKs: () => zKs
});
module.exports = __toCommonJS(chunk_3bgaher8_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_0f2gasyz = require("/$bunfs/root/chunk-0f2gasyz.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_jmxgdf7r = require("/$bunfs/root/chunk-jmxgdf7r.js");
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
var import_chunk_r60bafc1 = require("/$bunfs/root/chunk-r60bafc1.js");
var import_chunk_ma8jx6m7 = require("/$bunfs/root/chunk-ma8jx6m7.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_gpb7vtp4 = require("/$bunfs/root/chunk-gpb7vtp4.js");
var import_chunk_ky5sghtd = require("/$bunfs/root/chunk-ky5sghtd.js");
var import_chunk_k59mf0h7 = require("/$bunfs/root/chunk-k59mf0h7.js");
var import_chunk_brp4kre5 = require("/$bunfs/root/chunk-brp4kre5.js");
var import_chunk_r5rtrbxq = require("/$bunfs/root/chunk-r5rtrbxq.js");
var import_chunk_5h9h52az = require("/$bunfs/root/chunk-5h9h52az.js");
var import_chunk_7gv3ezdz = require("/$bunfs/root/chunk-7gv3ezdz.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_promises = require("fs/promises");
var import_net = require("net");
var import_path = require("path");
var import_string_decoder = require("string_decoder");
var import_promises2 = require("fs/promises");
var import_path2 = require("path");
class k {
  resolver = null;
  registerResolver(e) {
    this.resolver = e;
  }
}
var E = new import_chunk_2904xtvq.j(() => new k());
function jJn(e, r) {
  E.of(e).registerResolver(r);
}
function R(e, r) {
  return E.of(e).resolver?.(r) ?? false;
}
class D {
  runner = null;
  registerRunner(e) {
    this.runner = e;
  }
}
var P = new import_chunk_2904xtvq.j(() => new D());
function zKs(e, r) {
  P.of(e).registerRunner(r);
}
function b(e, r) {
  try {
    return P.of(e).runner?.(r) ?? false;
  } catch (n) {
    return (0, import_chunk_w578pjby.t)(`[bg-rv] command runner threw, queueing the reply: ${(0, import_chunk_jv7av99m.d)(n)}`, { level: "warn" }), false;
  }
}
class l {
  static NAME = ".prompt-draft";
  static MAX_BYTES = 262144;
  #t;
  #r;
  #e = Promise.resolve();
  #n;
  constructor(e) {
    this.#t = e;
  }
  follow() {
    return this.#n ??= this.#t.subscribe(this.#s), this.#o();
  }
  settled() {
    return this.#i(this.#e);
  }
  dispose() {
    this.#n?.(), this.#n = void 0;
  }
  #s = () => {
    let { value: e, cameBack: r } = this.#t.getState();
    if (e !== this.#r?.value || r !== this.#r.cameBack) this.#o();
  };
  #o(e = import_chunk_c203g5kd.s.CLAUDE_JOB_DIR) {
    if (this.#r = this.#t.getState(), e) this.#e = this.#e.then(() => this.#a(e)).catch(import_chunk_9e5mdyfk.Lu);
    return this.#e;
  }
  #a(e) {
    let { value: r, cameBack: n } = this.#t.getState(), o = (0, import_path2.join)(e, l.NAME);
    return r !== "" && !n ? (0, import_chunk_brp4kre5.uht)(o, (0, import_chunk_7cfjrnwy.ee)(r, l.MAX_BYTES)) : (0, import_promises2.rm)(o, { force: true }).catch((p) => ((0, import_chunk_9e5mdyfk.Lu)(p), (0, import_chunk_brp4kre5.uht)(o, "")));
  }
  async #i(e) {
    return await e, e === this.#e ? void 0 : this.#i(this.#e);
  }
}
var F = 3, V = 5e3;
class A {
  server;
  current = void 0;
  heartbeat;
  wedgeTimer = void 0;
  wedgeDisarmed = false;
  authToken;
  currentAuthed = false;
  unadmitted = /* @__PURE__ */ new Set();
  admitOnAccept;
  silentPeerTimeoutMs = import_chunk_c203g5kd.s.CLAUDE_BG_SILENT_PEER_TIMEOUT_MS || V;
  unauthedDrops = 0;
  gateReported = false;
  nativeBrowserEnv;
  pendingInteractiveMarks;
  storageV5;
  promptInput = (0, import_chunk_ma8jx6m7.gE)(B());
  promptDraftFile = new l(this.promptInput);
  promptStash = new import_chunk_brp4kre5.JKs(this.promptInput);
  constructor(e, r, n, o, a, p) {
    this.authToken = r, this.admitOnAccept = n, this.storageV5 = p, this.nativeBrowserEnv = o, this.pendingInteractiveMarks = a, this.server = (0, import_net.createServer)((c) => this.onConnection(c)), this.server.on("error", (c) => (0, import_chunk_w578pjby.t)(`[bg-rv] server error: ${String(c)}`, { level: "warn" })), this.server.listen(e), this.server.unref(), this.heartbeat = setInterval(() => this.send({ type: "heartbeat" }), 3e4), this.heartbeat.unref();
  }
  admit(e) {
    e.setTimeout(0), this.current?.destroy(), this.current = e, this.currentAuthed = false, (0, import_chunk_f9x2f6cx.vNr)(false);
    while (this.pendingInteractiveMarks.length > 0) {
      let r = this.pendingInteractiveMarks[0];
      if (r === void 0 || !this.send(r)) break;
      this.pendingInteractiveMarks.shift();
    }
    this.unauthedDrops = 0, this.gateReported = false, this.clearPreBootState().catch((r) => {
      if (!(0, import_chunk_jv7av99m.J)(r)) (0, import_chunk_9e5mdyfk.Lu)(r);
    }), this.restorePromptDraft().catch(() => {
    }), this.promptStash.restore().catch(import_chunk_k449cc64.i), e.once("close", () => {
      if (this.current === e) this.current = void 0, (0, import_chunk_f9x2f6cx.vNr)(false);
    });
  }
  onConnection(e) {
    if (e.on("error", () => e.destroy()), this.admitOnAccept) this.admit(e);
    else this.unadmitted.add(e), e.once("close", () => this.unadmitted.delete(e)), e.setTimeout(this.silentPeerTimeoutMs, () => {
      (0, import_chunk_w578pjby.t)(`[bg-rv] closed a connection that wrote nothing in ${this.silentPeerTimeoutMs}ms`), e.destroy();
    });
    let r = "", n = new import_string_decoder.StringDecoder("utf8");
    e.on("data", (o) => {
      if (this.current !== e && !this.unadmitted.has(e)) {
        e.destroy();
        return;
      }
      r += n.write(o);
      let a;
      while ((a = r.indexOf(`
`)) >= 0) {
        let p = r.slice(0, a);
        if (r = r.slice(a + 1), p) {
          if (this.unadmitted.delete(e)) this.admit(e);
          this.handleLine(p);
        }
      }
      if (r.length > 1048576) r = "", e.destroy();
    });
  }
  stop() {
    clearInterval(this.heartbeat), clearTimeout(this.wedgeTimer), this.wedgeTimer = void 0, this.current?.destroy(), this.current = void 0;
    for (let e of this.unadmitted) e.destroy();
    this.unadmitted.clear(), (0, import_chunk_f9x2f6cx.vNr)(false), this.restoreNativeBrowserEnv(), this.promptDraftFile.dispose(), this.promptStash.dispose(), this.server.close();
  }
  send(e) {
    if (!this.current || this.current.destroyed) return false;
    try {
      return this.current.write((0, import_chunk_w578pjby._)(e) + `
`), true;
    } catch {
      return false;
    }
  }
  noteUnauthedRejection() {
    if (this.unauthedDrops++, !this.gateReported && this.unauthedDrops >= F) this.gateReported = true, (0, import_chunk_cqa9hrgx.m)("bg_rv_gate", "unauthed_drops");
  }
  restoreNativeBrowserEnv() {
    if (this.nativeBrowserEnv === void 0) import_chunk_c203g5kd.s.unset("BROWSER");
    else import_chunk_c203g5kd.s.set("BROWSER", this.nativeBrowserEnv);
  }
  handleLine(e) {
    let r;
    try {
      r = (0, import_chunk_w578pjby.te)(e);
    } catch {
      return;
    }
    if (!r || typeof r !== "object") return;
    if ("role" in r) {
      if (this.authToken) if ("auth" in r && (0, import_chunk_jmxgdf7r.Zj)(r.auth, this.authToken)) {
        if (this.currentAuthed = true, !this.gateReported) this.gateReported = true, (0, import_chunk_cqa9hrgx.u)("bg_rv_gate");
      } else {
        if (!this.currentAuthed) this.noteUnauthedRejection();
        this.send({ type: "auth-rejected" });
      }
      return;
    }
    let n = r;
    if (this.authToken && !this.currentAuthed && n.type !== "repaint") {
      if ((0, import_chunk_w578pjby.t)(`[bg-rv] dropped ${typeof n.type === "string" ? n.type : "unknown"} from un-authed connection`, { level: "warn" }), n.type !== "attacher-caps" && n.type !== "program-status-viewers") this.noteUnauthedRejection();
      this.send({ type: "reply-rejected" });
      return;
    }
    if (n.type === "shutdown") {
      q(this.promptDraftFile, this.storageV5);
      return;
    }
    if (n.type === "repaint") {
      z();
      return;
    }
    if (n.type === "attacher-caps") {
      this.handleAttachedClientCapabilities(n);
      return;
    }
    if (n.type === "program-status-viewers") {
      (0, import_chunk_f9x2f6cx.Eaa)({ keep: n.keep === "all" || n.keep === "some" ? n.keep : "none" });
      return;
    }
    if (n.type === "reply" && typeof n.text === "string") X(n);
  }
  handleAttachedClientCapabilities(e) {
    if ((0, import_chunk_f9x2f6cx.baa)(e.caps), (0, import_chunk_f9x2f6cx.vNr)(true), e.caps) (0, import_chunk_gpb7vtp4.QKs)(Date.now());
    else (0, import_chunk_gpb7vtp4.GJn)();
    if ((0, import_chunk_d57v19zt.OHl)(e.caps?.colorLevel), !e.caps) this.restoreNativeBrowserEnv();
    else if (typeof e.caps.browser === "string") import_chunk_c203g5kd.s.set("BROWSER", e.caps.browser);
    else import_chunk_c203g5kd.s.unset("BROWSER");
    if (e.caps?.systemTheme) (0, import_chunk_7gv3ezdz.Xnr)(e.caps.systemTheme);
  }
  async waitForInkMount(e) {
    for (let r = 0; !(0, import_chunk_ky5sghtd.va)().has(process.stdout); r++) {
      if (r >= 60 || this.current !== e) return false;
      await (0, import_chunk_5appeerh.K)(500);
    }
    return true;
  }
  async clearPreBootState() {
    let e = import_chunk_c203g5kd.s.CLAUDE_JOB_DIR;
    if (!e) return;
    if (!await this.waitForInkMount(this.current)) return;
    await (0, import_chunk_9e5mdyfk.uDe)(async () => {
      let r = await (0, import_chunk_9e5mdyfk.Is)(e, this.storageV5);
      if (!r) return;
      if (!r.forkSourceAlive) {
        let o = (0, import_chunk_bzyb60p0.FJr)(import_chunk_c203g5kd.s.CLAUDE_CODE_RESUME_SOURCE_ALIVE);
        if (o) await (0, import_chunk_9e5mdyfk.Hf)(e, { ...r, ...o }, this.storageV5), Object.assign(r, o);
      }
      if (r.state === "working" && r.detail === import_chunk_9e5mdyfk.uWe) this.armStartupWedgeWatchdog(e);
      let n = (o) => {
        let a = import_chunk_bzyb60p0.JI.current();
        return o.tempo === "blocked" && (0, import_chunk_9e5mdyfk.Knn)(o) && !(a?.overlay === true && a.text === o.needs);
      };
      if (n(r)) {
        let o = await (0, import_chunk_9e5mdyfk.Is)(e, this.storageV5) ?? r;
        if (!n(o)) return;
        await (0, import_chunk_9e5mdyfk.Hf)(e, { ...o, ...import_chunk_9e5mdyfk.Ebt.includes(o.state) && { state: "running" }, tempo: "idle", needs: void 0, needsOverlay: void 0, block: void 0, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, this.storageV5), this.send({ type: "state", patch: { ...import_chunk_9e5mdyfk.Ebt.includes(o.state) && { state: "running" }, tempo: "idle", needs: "" } });
        return;
      }
      if (!import_chunk_9e5mdyfk.Ebt.includes(r.state)) return;
      if (r.tempo === "blocked") return;
      await (0, import_chunk_9e5mdyfk.Hf)(e, { ...r, state: "running", tempo: "idle", updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, this.storageV5), this.send({ type: "state", patch: { state: "running", tempo: "idle" } });
    });
  }
  armStartupWedgeWatchdog(e) {
    if (this.wedgeDisarmed) return;
    clearTimeout(this.wedgeTimer);
    let r = import_chunk_c203g5kd.s.CLAUDE_BG_STARTUP_WEDGE_MS || 45e3;
    this.wedgeTimer = setTimeout((n) => this.onStartupWedgeTimeout(n), r, e), this.wedgeTimer.unref();
  }
  disarmStartupWedgeWatchdog() {
    this.wedgeDisarmed = true, clearTimeout(this.wedgeTimer), this.wedgeTimer = void 0;
  }
  onStartupWedgeTimeout(e) {
    (0, import_chunk_9e5mdyfk.Is)(e, this.storageV5).then(async (r) => {
      if (this.wedgeDisarmed || r?.state !== "working" || r.detail !== import_chunk_9e5mdyfk.uWe || r.tempo === "blocked") return;
      await (0, import_chunk_9e5mdyfk.Hf)(e, { ...r, tempo: "blocked", detail: f, needs: g, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, this.storageV5), this.send({ type: "state", patch: { tempo: "blocked", detail: f, needs: g } });
    }).catch((r) => {
      if (!(0, import_chunk_jv7av99m.J)(r)) (0, import_chunk_9e5mdyfk.Lu)(r);
    });
  }
  async restorePromptDraft() {
    let e = import_chunk_c203g5kd.s.CLAUDE_JOB_DIR;
    if (!e) return;
    let r = (0, import_path.join)(e, l.NAME), n = await (0, import_chunk_xfj2cwfv.Uu)(r, 4 * l.MAX_BYTES);
    if (n === null) return;
    await (0, import_promises.unlink)(r).catch(() => {
    });
    let o = (0, import_chunk_brp4kre5.XKs)(n);
    if (!o) return;
    if (!(0, import_chunk_k59mf0h7.N2t)()) (0, import_chunk_k59mf0h7.F2t)(o);
    if (!await this.waitForInkMount(this.current)) return;
    if (this.promptInput.getState().value === "") (0, import_chunk_ma8jx6m7.t_t)(this.promptInput, o);
  }
}
class T {
  server = void 0;
}
var G = new import_chunk_2904xtvq.j(() => new T());
function B() {
  return (0, import_chunk_f9x2f6cx.N)();
}
function w() {
  return B().host;
}
function v() {
  return G.of(w());
}
async function Y8l(e) {
  let r = import_chunk_c203g5kd.s.CLAUDE_BG_RENDEZVOUS_SOCK, n = v();
  if (!r || n.server) return;
  let o = import_chunk_c203g5kd.s.BROWSER, a = [];
  (0, import_chunk_bzyb60p0.HVa)((h) => {
    let y = { type: "interactive-mark", ...h };
    if (k$e(y)) return true;
    return a.push(y), true;
  }), import_chunk_c203g5kd.s.unset("CLAUDE_BG_RENDEZVOUS_SOCK");
  let p = import_chunk_c203g5kd.s.CLAUDE_BG_RV_AUTH;
  import_chunk_c203g5kd.s.unset("CLAUDE_BG_RV_AUTH");
  let c = import_chunk_c203g5kd.s.CLAUDE_BG_SOCKET_TOKENS_PATH;
  if (import_chunk_c203g5kd.s.unset("CLAUDE_BG_SOCKET_TOKENS_PATH"), c) {
    let h = await (0, import_chunk_jmxgdf7r.yhn)(c);
    if (h?.rvAuth) p = h.rvAuth;
    await (0, import_promises.unlink)(c).catch(() => {
    });
  }
  let I = import_chunk_c203g5kd.s.CLAUDE_BG_SOCK_ADMIT_SILENT_PEERS === "1" || !p && !c;
  await (0, import_promises.unlink)(r).catch(() => {
  }), n.server = new A(r, p, I, o, a, e);
  let x = n.server;
  (0, import_chunk_w578pjby.Ct)(() => x.promptStash.flush());
}
function k$e(e) {
  return v().server?.send(e) ?? false;
}
function q(e, r) {
  k$e({ type: "shutting-down" });
  let n = (0, import_chunk_r60bafc1.Pc)(), o = [e.follow()];
  if (n) {
    let a = n.getLastSequenceNum();
    n.teardown({ skipArchive: true }).catch(() => {
    });
    let p = import_chunk_c203g5kd.s.CLAUDE_JOB_DIR;
    if (p && a > 0) o.push(Y(p, a, r).catch(() => {
    }));
  }
  o.push((0, import_chunk_w578pjby.Vft)()), Promise.race([Promise.all(o).catch(() => {
  }).then(() => Promise.all([e.settled(), (0, import_chunk_9e5mdyfk.uDe)(async () => {
  })])), (0, import_chunk_5appeerh.K)(5e3)]).finally(() => {
    process.exit(0);
  });
}
function z() {
  if ((0, import_chunk_f9x2f6cx.pf)() !== null) (0, import_chunk_gpb7vtp4.QKs)(Date.now());
  if (!(0, import_chunk_ky5sghtd.va)().get(process.stdout)?.forceRedraw({ flushReact: true })) process.stdout.write(import_chunk_0f2gasyz.YN + import_chunk_0f2gasyz.Xx + `
  \x1B[2mSession can't redraw right now \u2014 Ctrl+Z to detach\x1B[0m
`);
  k$e({ type: "repaint-done" });
}
function X(e) {
  if (e.nextTurn === true) {
    (0, import_chunk_bzyb60p0.HO)({ agentId: (0, import_chunk_f9x2f6cx.ot)(), mode: "prompt", value: e.text, priority: "next", origin: { kind: "human" }, skipSlashCommands: true }), (0, import_chunk_f9x2f6cx.K4t)(), (0, import_chunk_w578pjby.t)(`[bg-rv] enqueued next-turn prompt (${e.text.length} chars)`);
    return;
  }
  if (R(w(), e.text)) {
    (0, import_chunk_w578pjby.t)(`[bg-rv] peer reply answered question (${e.text.length} chars)`);
    return;
  }
  let r = (0, import_chunk_r5rtrbxq.fht)(e.text);
  if (!r && b(w(), e.text)) {
    (0, import_chunk_w578pjby.t)(`[bg-rv] peer reply ran at once (${e.text.length} chars)`);
    return;
  }
  let n = (0, import_chunk_5h9h52az.Rk)(e.text);
  if ((0, import_chunk_bzyb60p0.HO)({ agentId: (0, import_chunk_f9x2f6cx.ot)(), mode: n, value: (0, import_chunk_5h9h52az.WL)(e.text), priority: "next", origin: { kind: "human" }, ...r && { skipSlashCommands: true, skipAttachments: true } }), n === "prompt" && !e.text.trim().startsWith("/")) (0, import_chunk_f9x2f6cx.K4t)();
  (0, import_chunk_w578pjby.t)(`[bg-rv] enqueued reply (${e.text.length} chars)`);
}
var f = "stuck on a startup dialog", g = "open this session to continue setup";
function VKs() {
  v().server?.disarmStartupWedgeWatchdog();
}
async function C(e, r, n, o) {
  let a = await (0, import_chunk_9e5mdyfk.Is)(e, o);
  if (!a) return { kind: "refused" };
  if (a.tempo === "blocked" && a.needs === r) return { kind: "already" };
  if (a.tempo === "blocked" && a.needs !== import_chunk_9e5mdyfk.jv) return { kind: "refused" };
  return await (0, import_chunk_9e5mdyfk.Hf)(e, { ...a, tempo: "blocked", detail: n, needs: r, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, o), k$e({ type: "state", patch: { tempo: "blocked", detail: n, needs: r } }), { kind: "wrote", prior: { tempo: a.tempo, needs: a.needs, detail: a.detail } };
}
async function O(e, r, n, o) {
  let a = await (0, import_chunk_9e5mdyfk.Is)(e, o);
  if (!a || a.tempo !== "blocked" || a.needs !== r) return;
  await (0, import_chunk_9e5mdyfk.Hf)(e, { ...a, ...n, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, o), k$e({ type: "state", patch: { tempo: n.tempo, needs: n.needs, detail: n.detail } });
}
async function X8l(e, r) {
  let n = import_chunk_c203g5kd.s.CLAUDE_JOB_DIR;
  if (!n || v().server?.wedgeDisarmed) return;
  let o = e ? `${f} (${e})` : f, a = await C(n, g, o, r);
  return a.kind === "wrote" ? a.prior : void 0;
}
async function J8l(e, r) {
  let n = import_chunk_c203g5kd.s.CLAUDE_JOB_DIR;
  if (!n) return;
  await O(n, g, e, r);
}
async function KKs(e, r, n) {
  let o = import_chunk_c203g5kd.s.CLAUDE_JOB_DIR;
  if (!o) return { kind: "refused" };
  return (0, import_chunk_9e5mdyfk.uDe)(() => C(o, e, r, n));
}
async function qKs(e, r, n) {
  let o = import_chunk_c203g5kd.s.CLAUDE_JOB_DIR;
  if (!o) return;
  await (0, import_chunk_9e5mdyfk.uDe)(() => O(o, e, r, n));
}
async function YKs(e) {
  let r = import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_KIND === "bg" ? import_chunk_c203g5kd.s.CLAUDE_JOB_DIR : void 0, n = r ?? (0, import_chunk_rb36kwbn.pk)()?.jobDir;
  if (!n) return;
  let o = await (0, import_chunk_9e5mdyfk.Is)(n, e);
  if (o?.replayOwed === true && await (0, import_chunk_9e5mdyfk.uDe)(async () => {
    (0, import_chunk_9e5mdyfk.Qg)(n);
    let p = await (0, import_chunk_9e5mdyfk.Is)(n, e);
    if (p?.replayOwed !== true || p.tempo !== "active" || !(0, import_chunk_9e5mdyfk.aN)(p.state)) return false;
    return (0, import_chunk_9e5mdyfk.Hf)(n, { ...p, tempo: "idle", replayOwed: void 0, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, e).then(() => true, (c) => ((0, import_chunk_9e5mdyfk.Lu)(c), false));
  })) {
    k$e({ type: "state", patch: { tempo: "idle" } });
    return;
  }
  if (!r || !o || o.state !== "working" || o.tempo !== "active") return;
  await (0, import_chunk_9e5mdyfk.Hf)(n, { ...o, tempo: "blocked", needs: import_chunk_9e5mdyfk.jv, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, e), k$e({ type: "state", patch: { tempo: "blocked", needs: import_chunk_9e5mdyfk.jv } });
}
async function Y(e, r, n) {
  let o = await (0, import_chunk_9e5mdyfk.Is)(e, n);
  if (!o || o.bridgeSessionSeq === r) return;
  await (0, import_chunk_9e5mdyfk.Hf)(e, { ...o, bridgeSessionSeq: r, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, n);
}
