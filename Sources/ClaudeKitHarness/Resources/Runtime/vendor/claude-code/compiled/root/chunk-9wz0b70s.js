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
var chunk_9wz0b70s_exports = {};
__export(chunk_9wz0b70s_exports, {
  SGs: () => SGs,
  VBo: () => VBo,
  ijr: () => ijr,
  pKe: () => pKe,
  zBo: () => zBo
});
module.exports = __toCommonJS(chunk_9wz0b70s_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_3dxkbe9d = require("/$bunfs/root/chunk-3dxkbe9d.js");
var import_chunk_74h6kcya = require("/$bunfs/root/chunk-74h6kcya.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_0dht3xy7 = require("/$bunfs/root/chunk-0dht3xy7.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_7n1spq36 = require("/$bunfs/root/chunk-7n1spq36.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_fs = require("fs");
(0, import_chunk_bs4h6795.G)();
var g = 5e3, T = 50, f = 5e3;
class zBo {
  #c = void 0;
  #d = false;
  #n = null;
  #f = null;
  #i = false;
  #o = null;
  #p = false;
  #l = null;
  #t = null;
  #b = null;
  #y = (0, import_chunk_69qhefwa.Be)();
  #g = 0;
  #a = false;
  #r;
  #s;
  #e = { phase: "idle" };
  #R = 0;
  #S = 0;
  #m = 0;
  #E;
  constructor(s, r = globalThis, e = () => {
  }) {
    this.#r = (0, import_chunk_m15w38ag.ne)() && s !== void 0 ? s : void 0, this.#s = r, this.#E = e;
  }
  #w(s) {
    let r = this.#d;
    if (this.#d = s, s && !r) this.#E();
  }
  getSnapshot = () => this.#d ? void 0 : this.#c;
  subscribe = (s) => {
    let r = this.#y.subscribe(s);
    if (this.#g++, !this.#a) this.#a = true, this.#b = (0, import_chunk_0dht3xy7.Sol)(this.#h), this.#k();
    let e = false;
    return () => {
      if (e) return;
      if (e = true, r(), this.#g--, this.#g === 0) this.#L();
    };
  };
  #V() {
    this.#y.emit();
  }
  #F(s) {
    if (this.#r) {
      this.#T(this.#r, s, false);
      return;
    }
    let r = (0, import_chunk_0dht3xy7.OH)(s);
    if (r === this.#f && this.#n !== null) return;
    this.#n?.close(), this.#n = null, this.#f = r;
    try {
      let e = (0, import_fs.watch)(r, this.#h);
      e.on("error", (n) => {
        if ((0, import_chunk_w578pjby.t)(`Task list watcher error: ${(0, import_chunk_jv7av99m.d)(n)}`, { level: "warn" }), this.#n === e) {
          if (this.#f = null, this.#i = true, this.#t === null) this.#t = this.#s.setTimeout(this.#h, f), this.#t.unref();
        }
      }), e.unref(), this.#n = e, this.#i = false;
    } catch {
    }
  }
  #T(s, r, e) {
    let n = this.#e;
    if (n.phase !== "idle" && n.listId === r && !e) return;
    if (n.phase === "live") n.subscription.unsubscribe();
    let o = ++this.#m;
    this.#e = { phase: "subscribing", listId: r, generation: o, endedEarly: false }, this.#i = true, this.#u();
    let h = (l, p) => {
      if (o !== this.#m) {
        l?.unsubscribe();
        return;
      }
      let c = this.#e;
      if (l && c.phase === "subscribing" && c.endedEarly) {
        if (l.unsubscribe(), e) this.#v(r);
        else this.#T(s, r, true);
        return;
      }
      if (l) {
        this.#e = { phase: "live", listId: r, generation: o, subscription: l, onRetry: e }, this.#i = false, this.#h();
        return;
      }
      if ((0, import_chunk_w578pjby.t)(`Task list subscription unavailable: ${p}`, { level: "warn" }), e) {
        this.#v(r);
        return;
      }
      this.#e = { phase: "idle" }, this.#i = true, this.#u();
    }, a;
    try {
      a = s.subscribe({ target: "scope", scope: { namespace: "task", listId: (0, import_chunk_0dht3xy7.XW)(r) } }, (l) => this.#x(l, o));
    } catch (l) {
      h(null, (0, import_chunk_jv7av99m.d)(l));
      return;
    }
    a.then((l) => l.ok ? h(l.value) : h(null, (0, import_chunk_7n1spq36.un)(l.error)), (l) => h(null, (0, import_chunk_jv7av99m.d)(l)));
  }
  #x(s, r) {
    let e = this.#e;
    if (e.phase === "subscribing" && e.generation === r && !s.ok) {
      e.endedEarly = true;
      return;
    }
    if (!this.#a || e.phase !== "live" || e.generation !== r) return;
    if (s.ok) {
      e.onRetry = false, this.#h();
      return;
    }
    if ((0, import_chunk_w578pjby.t)(`Task list subscription ended: ${(0, import_chunk_7n1spq36.un)(s.error)}`, { level: "warn" }), e.onRetry || !this.#r) {
      e.subscription.unsubscribe(), this.#v(e.listId);
      return;
    }
    this.#T(this.#r, e.listId, true);
  }
  #v(s) {
    this.#m++, this.#e = { phase: "givenUp", listId: s }, this.#i = true, this.#h();
  }
  #u() {
    if (!this.#a) return;
    if (this.#t) this.#s.clearTimeout(this.#t);
    this.#t = this.#s.setTimeout(this.#h, f), this.#t.unref();
  }
  #h = () => {
    if (this.#l) this.#s.clearTimeout(this.#l);
    this.#l = this.#s.setTimeout(() => void this.#k(), T), this.#l.unref();
  };
  refetch = () => this.#k();
  #k = async () => {
    let s = ++this.#R, r = (0, import_chunk_0dht3xy7.rb)();
    this.#F(r);
    let e;
    try {
      e = await (0, import_chunk_0dht3xy7.wol)(r, this.#r);
    } catch (a) {
      (0, import_chunk_w578pjby.t)(`Task list read failed: ${(0, import_chunk_jv7av99m.d)(a)}`, { level: "warn" }), e = null;
    }
    if (this.#r && s < this.#S) return;
    if (this.#S = s, e === null) {
      if (this.#a) this.#i = true, this.#u();
      return;
    }
    if (this.#e.phase === "live") this.#i = false;
    let n = e.filter((a) => !a.metadata?._internal);
    if (!this.#a) return;
    let o = n.some((a) => a.status !== "completed"), h = !k(this.#c, n);
    if (h) this.#c = n;
    if (o || n.length === 0) this.#w(n.length === 0), this.#C();
    else if (this.#o === null && !this.#d) if (this.#p) (0, import_chunk_w578pjby.t)("Task list reset still in flight; not arming another hide until it settles", { level: "verbose" });
    else this.#o = this.#s.setTimeout(this.#B.bind(this, r), g), this.#o.unref();
    if (h) this.#V();
    if (this.#t) this.#s.clearTimeout(this.#t), this.#t = null;
    if (o || this.#i) {
      if (this.#e.phase === "live") return;
      this.#u();
    }
  };
  #B(s) {
    this.#o = null;
    let r = (0, import_chunk_0dht3xy7.rb)();
    if (r !== s) return;
    this.#p = true, (0, import_chunk_0dht3xy7.HP)(r, this.#r).then(async (e) => {
      if (e.length > 0 && e.every((o) => o.status === "completed") && await (0, import_chunk_0dht3xy7.bol)(r, this.#r)) this.#c = [], this.#w(true);
      this.#V();
    }).catch((e) => {
      if (this.#r) this.#u();
      if ((0, import_chunk_jv7av99m.w)(e) === "ELOCKED") {
        (0, import_chunk_w578pjby.t)("Task list lock is busy (another session or process sharing this task list, or an in-flight task write, holds it); completed tasks stay visible and the reset is retried on the next refresh");
        return;
      }
      if ((0, import_chunk_jv7av99m.SS)(e) || (0, import_chunk_jv7av99m.Tk)(e)) {
        (0, import_chunk_w578pjby.t)(`Task list reset failed on the tasks directory and will be retried on the next refresh: ${(0, import_chunk_jv7av99m.d)(e)}`, { level: "warn" });
        return;
      }
      (0, import_chunk_k449cc64.i)(e);
    }).finally(() => {
      this.#p = false;
    });
  }
  #C() {
    if (this.#o) this.#s.clearTimeout(this.#o), this.#o = null;
  }
  #L() {
    if (this.#n?.close(), this.#n = null, this.#e.phase === "live") this.#e.subscription.unsubscribe();
    if (this.#e = { phase: "idle" }, this.#m++, this.#f = null, this.#b?.(), this.#b = null, this.#C(), this.#l) this.#s.clearTimeout(this.#l);
    if (this.#t) this.#s.clearTimeout(this.#t);
    this.#l = null, this.#t = null, this.#i = false, this.#a = false;
  }
}
var VBo = (0, import_chunk_bs4h6795.an)(null), v = () => {
};
function u() {
  let s = (0, import_chunk_bs4h6795.be)(VBo), r = (0, import_chunk_74h6kcya.X)((n) => n.teamContext);
  if (!((0, import_chunk_bzyb60p0.QMe)() && !(0, import_chunk_f9x2f6cx.Hn)() && (!r || (0, import_chunk_wtm85h0y.Z4)(r)))) return null;
  if (!s) throw ReferenceError("useTasksV2 cannot be called outside of a TasksV2StoreContext provider (mounted by <AppStateProvider />)");
  return s;
}
function pKe() {
  return (0, import_chunk_3dxkbe9d.$e)(u());
}
function SGs() {
  let s = u();
  (0, import_chunk_bs4h6795.H)(() => {
    if (!s) return;
    return s.subscribe(v);
  }, [s]);
}
function ijr() {
  return (0, import_chunk_3dxkbe9d.$e)(u(), y) ?? false;
}
function k(s, r) {
  if (s === void 0 || s.length !== r.length) return false;
  for (let e = 0; e < r.length; e++) {
    let n = s[e], o = r[e];
    if (n.id !== o.id || n.status !== o.status || n.subject !== o.subject || n.activeForm !== o.activeForm || n.owner !== o.owner || n.description !== o.description || !m(n.blockedBy, o.blockedBy) || !m(n.blocks, o.blocks)) return false;
  }
  return true;
}
function m(s, r) {
  if (s.length !== r.length) return false;
  for (let e = 0; e < s.length; e++) if (s[e] !== r[e]) return false;
  return true;
}
function y(s) {
  return s !== void 0 && s.length > 0;
}
