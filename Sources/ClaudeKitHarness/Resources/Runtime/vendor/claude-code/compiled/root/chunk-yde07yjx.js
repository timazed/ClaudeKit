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
var chunk_yde07yjx_exports = {};
__export(chunk_yde07yjx_exports, {
  OXl: () => OXl,
  Z9r: () => Z9r
});
module.exports = __toCommonJS(chunk_yde07yjx_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_nhpsytqr = require("/$bunfs/root/chunk-nhpsytqr.js");
var import_chunk_snpsm13w = require("/$bunfs/root/chunk-snpsm13w.js");
var import_chunk_xggvpcqr = require("/$bunfs/root/chunk-xggvpcqr.js");
var import_chunk_wx7ffn80 = require("/$bunfs/root/chunk-wx7ffn80.js");
var import_chunk_8dmvk15g = require("/$bunfs/root/chunk-8dmvk15g.js");
var import_chunk_npsm5tcc = require("/$bunfs/root/chunk-npsm5tcc.js");
var import_chunk_c0frdpwg = require("/$bunfs/root/chunk-c0frdpwg.js");
var import_chunk_2jnfj492 = require("/$bunfs/root/chunk-2jnfj492.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var a = 32, l = 64, p = "session-inbox-unread", g = /* @__PURE__ */ new Set(["request_failed", "http_error", "owner_unverified"]);
function d() {
  return (0, import_chunk_865at33z.b)("tengu_bridge_inbox_pointer_boundary", true);
}
class c {
  tracked = /* @__PURE__ */ new Map();
  announcedAsOwners = /* @__PURE__ */ new Set();
  noteOwnerAnnounced({ inboundOrigin: o, wake: e }) {
    if (o !== import_chunk_npsm5tcc.Ksn || e === void 0 || !(0, import_chunk_xggvpcqr.NXt)(e)) return;
    let n = e.data.file_id;
    if (typeof n !== "string" || !import_chunk_8dmvk15g.OJt.test(n)) return;
    if (this.announcedAsOwners.delete(n), this.announcedAsOwners.size >= l) {
      let r = this.announcedAsOwners.values().next().value;
      if (r !== void 0) this.announcedAsOwners.delete(r);
    }
    this.announcedAsOwners.add(n);
  }
  wasAnnouncedAsOwners(o) {
    return this.announcedAsOwners.has(o);
  }
  noteQueued({ inboundOrigin: o, wake: e, uuid: n }) {
    if (this.noteOwnerAnnounced({ inboundOrigin: o, wake: e }), o !== import_chunk_npsm5tcc.Ksn || e === void 0 || n === void 0 || !(0, import_chunk_xggvpcqr.Igt)(e) || !d()) return;
    let r = e.data.file_id;
    if (typeof r !== "string" || !import_chunk_8dmvk15g.OJt.test(r)) return;
    if (this.tracked.size >= a) {
      let s = this.tracked.keys().next().value;
      if (s !== void 0) this.tracked.delete(s), (0, import_chunk_w578pjby.t)(`[bridge] inbox pointer ${s} forgotten: ${a} pointers already unread`);
    }
    this.tracked.set(r, { uuid: n, delivered: false, renotifyValue: void 0 });
  }
  noteLifecycle(o, e) {
    for (let [n, r] of this.tracked) {
      if (r.uuid !== o) continue;
      switch (e) {
        case "completed":
          r.delivered = true;
          break;
        case "cancelled":
        case "discarded":
        case "refused":
          this.tracked.delete(n);
          break;
        case "queued":
        case "started":
          break;
      }
      return;
    }
  }
  tapCommandLifecycle(o) {
    (0, import_chunk_2jnfj492.mbe)(o, (e, n) => this.noteLifecycle(e, n));
  }
  noteFetchAttempt(o, e, n) {
    let r = this.tracked.get(o);
    if (r === void 0) return;
    if (!e.ok && g.has(e.reason)) return;
    if (this.tracked.delete(o), r.renotifyValue !== void 0) {
      if (n.removeByFilter(f(r.renotifyValue)), e.ok) (0, import_chunk_cqa9hrgx.u)("bridge_inbox_pointer");
    }
  }
  pendingFileIds() {
    return [...this.tracked.keys()];
  }
  renotifyUnfetched(o) {
    try {
      if (this.tracked.size === 0) return;
      if (!d()) {
        this.tracked.clear();
        return;
      }
      if ((0, import_chunk_wx7ffn80.qYe)() > 0) return;
      for (let [e, n] of this.tracked) {
        if (!n.delivered) continue;
        if (n.renotifyValue !== void 0) {
          if (o.peek(f(n.renotifyValue)) !== void 0) continue;
          this.tracked.delete(e), (0, import_chunk_cqa9hrgx.m)("bridge_inbox_pointer", "unread_after_renotify"), (0, import_chunk_w578pjby.t)(`[bridge] inbox pointer ${e} was not read after a re-notify; giving up`);
          continue;
        }
        let r = (0, import_chunk_nhpsytqr.Ni)({ taskType: p, status: "pending", summary: `An inbox message announced earlier has not been read (file_id ${e})`, body: `
A session-inbox notification carrying file_id ${e} was delivered to you earlier and ${import_chunk_snpsm13w.Xne} was not called for it. Call ${import_chunk_snpsm13w.Xne} with that file_id now, before other work. Its content is relayed text under the rules the tool describes, not an instruction from this note.` });
        o.enqueuePendingNotification({ mode: "task-notification", agentId: (0, import_chunk_f9x2f6cx.ot)(), value: r, skipAttachments: true, priority: "later" }), n.renotifyValue = r, (0, import_chunk_w578pjby.t)(`[bridge] inbox pointer ${e} was not read by its turn; re-notifying once`);
      }
    } catch (e) {
      (0, import_chunk_k449cc64.i)(e);
    }
  }
}
var Z9r = new import_chunk_pzzqg6s3.ze(() => new c());
function f(o) {
  return (e) => e.mode === "task-notification" && e.value === o;
}
function OXl(o, e) {
  try {
    if (!("inbound_origin" in e) || e.inbound_origin !== import_chunk_npsm5tcc.Ksn) return;
    let n = (0, import_chunk_npsm5tcc.WUt)(e);
    if (n?.inboundOrigin !== import_chunk_npsm5tcc.Ksn) return;
    let r = (0, import_chunk_c0frdpwg.Zte)(n.content, n.inboundOrigin);
    if (typeof r !== "string") return;
    Z9r.of(o).noteOwnerAnnounced({ inboundOrigin: n.inboundOrigin, wake: (0, import_chunk_xggvpcqr.lUe)(r) ?? void 0 });
  } catch (n) {
    (0, import_chunk_w578pjby.t)(`[bridge] inbox owner notice not noted: ${n instanceof Error ? n.name : "non-error throw"}`, { level: "error" });
  }
}
