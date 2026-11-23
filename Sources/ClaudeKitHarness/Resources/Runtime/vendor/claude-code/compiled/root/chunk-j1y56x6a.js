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
var chunk_j1y56x6a_exports = {};
__export(chunk_j1y56x6a_exports, {
  G1e: () => G1e,
  Kga: () => Kga,
  P$: () => P$,
  PWs: () => PWs,
  TBr: () => TBr,
  Vga: () => Vga,
  qbn: () => qbn,
  vBr: () => vBr,
  xWs: () => xWs,
  z1e: () => z1e,
  zga: () => zga
});
module.exports = __toCommonJS(chunk_j1y56x6a_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k59mf0h7 = require("/$bunfs/root/chunk-k59mf0h7.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_3hr8g93j = require("/$bunfs/root/chunk-3hr8g93j.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_y192p33y = require("/$bunfs/root/chunk-y192p33y.js");
var import_chunk_se72nykz = require("/$bunfs/root/chunk-se72nykz.js");
var import_chunk_13h3tw8q = require("/$bunfs/root/chunk-13h3tw8q.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_promises = require("fs/promises");
var G1e = 1e4;
function qbn({ takesCommand: e = false } = {}) {
  let o = (0, import_chunk_k59mf0h7.S9)(), n = (0, import_chunk_xfj2cwfv.UC)(o);
  if ((0, import_chunk_k59mf0h7.dji)() || o.length > G1e || n.removedTotal > 0 || !(e && o.trim().startsWith("/")) && (0, import_chunk_bzyb60p0.lar)(n.text, { ...n, textLength: o.length }, "prompt")) return false;
  return (0, import_chunk_k59mf0h7.cji)(), true;
}
class y {
  initialPromptUuid;
  cancelled;
  isMove;
  #e = (0, import_chunk_se72nykz.ps)({ create: null, entry: "typing", entered: "message", held: /* @__PURE__ */ new Map(), readPickedMode: void 0, question: null, asking: null, config: void 0 });
  #o = Promise.withResolvers();
  #n = Promise.withResolvers();
  #r = Promise.withResolvers();
  #t;
  #i = 0;
  subscribe = this.#e.subscribe;
  getSnapshot = this.#e.getSnapshot;
  opened = this.#n.promise;
  ended = this.#r.promise;
  constructor(e, o = new AbortController().signal, n = false) {
    this.initialPromptUuid = e;
    this.cancelled = o;
    this.isMove = n;
  }
  get isMounted() {
    return typeof this.#t === "object";
  }
  get isGone() {
    return this.#t === "gone";
  }
  get pickedMode() {
    return this.getSnapshot().readPickedMode?.();
  }
  async untilMounted(e) {
    try {
      await Promise.race([this.#o.promise, e]);
    } catch (o) {
      throw (0, import_chunk_cqa9hrgx.m)("ccr_screen_first", "mount_failed", { resumed: this.isMove }), o;
    }
  }
  showCreate(e) {
    this.#e.setState((o) => ({ ...o, create: e }));
  }
  openField() {
    let e = (0, import_chunk_k59mf0h7.OWn)(), o = (0, import_chunk_k59mf0h7.IWn)(), n = e.trimEnd(), r = (e.slice(n.length).includes(`
`) ? n : e).trimStart();
    if (r !== e && (0, import_chunk_k59mf0h7.kj)()) (0, import_chunk_k59mf0h7.PZ)(r);
    if (o) {
      let s = e.trim()[0];
      this.noteEnter(s !== "/", s === "/" ? "command" : s === "!" ? "shell" : "message");
    }
  }
  noteEdit() {
    this.#e.setState((e) => e.entry === "typing" ? e : { ...e, entry: "typing" });
  }
  noteEnter(e, o) {
    let n = e && qbn({ takesCommand: o === "command" }), r = n ? "queued" : "refused";
    if (r === this.getSnapshot().entry) return;
    if (this.#e.setState((s) => ({ ...s, entry: r, entered: o })), o === "message") (0, import_chunk_y53wbr8a.a)(n ? "tengu_cloud_create_prompt_queued" : "tengu_cloud_create_prompt_return_ignored", {});
    else if (!n) (0, import_chunk_cqa9hrgx.l)("ccr_create_command", `${o}_refused`);
  }
  holdMode(e) {
    this.#e.setState((o) => ({ ...o, readPickedMode: e }));
  }
  hold(e, o, n) {
    this.#e.setState((r) => ({ ...r, held: new Map(r.held).set(e, { label: o, send: n }) }));
  }
  drop(e) {
    this.#e.setState((o) => ({ ...o, held: new Map([...o.held].filter(([n]) => n !== e)) }));
  }
  sendHeld() {
    let { held: e } = this.getSnapshot();
    this.#e.setState((o) => ({ ...o, held: /* @__PURE__ */ new Map() })), e.forEach(({ send: o }, n) => {
      try {
        o(), (0, import_chunk_cqa9hrgx.u)("ccr_create_setting_held", { setting: (0, import_chunk_78g0060s.f)(n) });
      } catch (r) {
        (0, import_chunk_k449cc64.i)(r), (0, import_chunk_cqa9hrgx.m)("ccr_create_setting_held", "send_threw");
      }
    });
  }
  droppedPicksWarnings() {
    let e = [...this.getSnapshot().held.values()].map(({ label: o }) => o);
    if (!this.isGone || e.length === 0) return [];
    return (0, import_chunk_cqa9hrgx.l)("ccr_create_setting_held", "screen_replaced"), [`${(0, import_chunk_7cfjrnwy.wi)(e.join(", "))} not applied to this session \xB7 set ${(0, import_chunk_7cfjrnwy.O)(e.length, "it", "them")} again`];
  }
  bind(e) {
    return this.#t = e, this.#o.resolve(), () => {
      this.#t = "gone";
    };
  }
  enter(e) {
    return typeof this.#t === "object" && this.#t.enter(e);
  }
  async unlessCancelled(e) {
    await (0, import_chunk_5appeerh.Tn)(e, this.cancelled, () => new import_chunk_jv7av99m.Ie()).catch(() => {
    });
    let { create: o } = this.getSnapshot();
    return o?.isCancelling ? o.exitCancelled() : e;
  }
  hasKeysSinceLastAnswer() {
    return (0, import_chunk_k59mf0h7.Gws)() > this.#i;
  }
  async ask(e, o = false) {
    let n = typeof this.#t === "object" ? this.#t : void 0;
    do {
      if (n?.hasPanel()) this.#e.setState((d) => ({ ...d, asking: "behind_panel" })), await n.untilPanelCloses(this.cancelled);
      if ((0, import_chunk_k59mf0h7.MWn)() > 0) this.#e.setState((d) => ({ ...d, asking: "waiting" })), await (0, import_chunk_k59mf0h7.U2t)(this.cancelled);
    } while (n?.hasPanel() && !this.cancelled.aborted);
    let { create: r } = this.getSnapshot();
    if (r?.isCancelling) return r.exitCancelled();
    let s = new AbortController();
    return new Promise((d) => {
      let c = e((p) => {
        s.abort(), this.#i = (0, import_chunk_k59mf0h7.Gws)(), this.#e.setState((h) => ({ ...h, asking: null })), d(p);
      });
      if (this.#e.setState((p) => ({ ...p, question: c, asking: "open" })), typeof this.#t === "object") this.#t.showQuestion(s.signal, o);
    });
  }
  open(e) {
    if (this.#r.resolve(), typeof this.#t !== "object") return (0, import_chunk_cqa9hrgx.l)("ccr_screen_first", "screen_replaced", { resumed: this.isMove }), false;
    let o = this.#t.open(e);
    return this.#e.setState((n) => ({ ...n, config: e.config })), this.#n.resolve(o), (0, import_chunk_cqa9hrgx.u)("ccr_screen_first", { resumed: this.isMove }), true;
  }
}
var z1e = new import_chunk_2904xtvq.j(() => ({ current: void 0 }));
function P$(e = (0, import_chunk_f9x2f6cx.N)().host) {
  let o = z1e.of(e).current;
  return o?.isMounted && o.getSnapshot().config === void 0 ? o : void 0;
}
function zga(e, o) {
  return { ...e, initialMessage: null, remoteBootstrap: (0, import_chunk_y192p33y.Fse)(Date.now(), { wake: false, seededFor: "create" }), toolPermissionContext: { ...e.toolPermissionContext, mode: o ?? e.toolPermissionContext.mode } };
}
function Vga(e, o, n, r) {
  let s = new y(o, n.signal, r);
  z1e.of(e).current = s;
  let d = (0, import_chunk_w578pjby.Ct)(() => {
    n.abort();
    let c = (0, import_chunk_13h3tw8q.js)((0, import_chunk_k59mf0h7.$Ye)());
    if (c !== "") (0, import_chunk_ndrgvsn7.es)(`
Your message was not sent:
${c}
`);
  });
  return s.ended.then(d), s;
}
async function Kga(e) {
  try {
    let o = await (0, import_chunk_3hr8g93j.u0r)();
    if (!o) {
      (0, import_chunk_w578pjby.t)("Not in a GitHub repository, skipping path mapping update");
      return;
    }
    let n = (0, import_chunk_f9x2f6cx.Te)(), s = (0, import_chunk_w5s307zm.dr)(n) ?? n, d;
    try {
      d = (0, import_chunk_z6pfqf6e.pn)(await (0, import_promises.realpath)(s));
    } catch {
      d = s;
    }
    let c = o.toLowerCase(), h = (0, import_chunk_865at33z.ge)().githubRepoPaths?.[c] ?? [];
    if (h[0] === d) {
      (0, import_chunk_w578pjby.t)(`Path ${d} already tracked for repo ${c}`);
      return;
    }
    let S = h.filter((g) => g !== d), C = [d, ...S];
    await (0, import_chunk_865at33z.Ke)((g) => ({ ...g, githubRepoPaths: { ...g.githubRepoPaths, [c]: C } }), e), (0, import_chunk_w578pjby.t)(`Added ${d} to tracked paths for repo ${c}`);
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`Error updating repo path mapping: ${o}`);
  }
}
function vBr(e) {
  let o = (0, import_chunk_865at33z.ge)(), n = e.toLowerCase();
  return o.githubRepoPaths?.[n] ?? [];
}
async function TBr(e) {
  let o = await Promise.all(e.map(import_chunk_2yx6c1y2.ep));
  return e.filter((n, r) => o[r]);
}
async function xWs(e, o) {
  try {
    let n = await (0, import_chunk_w5s307zm.bOe)(e);
    if (!n) return false;
    let r = (0, import_chunk_3hr8g93j.eQe)(n);
    if (!r) return false;
    return r.toLowerCase() === o.toLowerCase();
  } catch {
    return false;
  }
}
function PWs(e, o, n) {
  let r = (0, import_chunk_865at33z.ge)(), s = e.toLowerCase(), d = r.githubRepoPaths?.[s] ?? [], c = d.filter((h) => h !== o);
  if (c.length === d.length) return;
  let p = { ...r.githubRepoPaths };
  if (c.length === 0) delete p[s];
  else p[s] = c;
  (0, import_chunk_865at33z.Ke)((h) => ({ ...h, githubRepoPaths: p }), n), (0, import_chunk_w578pjby.t)(`Removed ${o} from tracked paths for repo ${s}`);
}
