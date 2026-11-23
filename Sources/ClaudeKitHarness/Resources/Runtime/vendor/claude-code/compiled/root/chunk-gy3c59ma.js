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
var chunk_gy3c59ma_exports = {};
__export(chunk_gy3c59ma_exports, {
  $Fa: () => $Fa,
  FFa: () => FFa,
  G5o: () => G5o,
  NFa: () => NFa,
  RAn: () => RAn,
  S8r: () => S8r,
  UFa: () => UFa,
  X_e: () => X_e,
  _8r: () => _8r,
  eni: () => eni,
  eor: () => eor,
  g8r: () => g8r,
  xAn: () => xAn,
  y8r: () => y8r
});
module.exports = __toCommonJS(chunk_gy3c59ma_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_trwykz8a = require("/$bunfs/root/chunk-trwykz8a.js");
var import_chunk_nhpsytqr = require("/$bunfs/root/chunk-nhpsytqr.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_bp9b0hd8 = require("/$bunfs/root/chunk-bp9b0hd8.js");
function u(e) {
  return `${e} stopped`;
}
class c {
  #e = /* @__PURE__ */ new Map();
  #n;
  #t = /* @__PURE__ */ new Map();
  #s = 0;
  #i = false;
  #o = false;
  #r;
  #d;
  keepElsewhere;
  savesWith(e) {
    this.#n = e;
  }
  hold(e, n, s) {
    if (this.#n?.isOn()) this.#t.delete(e), this.#e.set(e, { ending: n, deleteFile: s, lostAtHold: this.#n.lostSoFar(), after: [] });
  }
  afterEnding(e, n) {
    let s = this.#e.get(e);
    if (s?.ending.sessionId !== (0, import_chunk_f9x2f6cx.W)()) return false;
    return s.after.push(n), true;
  }
  afterEndingOf(e, n) {
    for (let [s, { ending: o }] of this.#e) if (o.toolUseId === e) return this.afterEnding(s, n);
    return false;
  }
  holdStop(e, n, s) {
    this.#d = s, this.hold(u(e), { ...n, afterRow: this.#r }, () => {
    });
  }
  afterStop(e, n) {
    return this.afterEnding(u(e), n);
  }
  settleStop(e) {
    let n = this.#e.get(u(e));
    this.forget(u(e)), n?.after.forEach((s) => s());
  }
  forget(e) {
    this.#e.delete(e), this.#t.delete(e);
  }
  withdraw(e) {
    let n = [];
    for (let [s, { ending: o, deleteFile: a, after: d }] of this.#e) if (o.toolUseId !== void 0 && e(o.toolUseId)) {
      let r = this.#t.has(s);
      this.forget(s), a(r), d.forEach((f) => f()), n.push(s), (0, import_chunk_w578pjby.t)(`MCP task endings: a rewind removes the call that started task ${s}, so its saved ending is being deleted`);
    }
    return n;
  }
  get isConversationSaved() {
    return this.#n?.isOn() ?? false;
  }
  isHeld(e) {
    return this.#e.has(e);
  }
  look(e, n) {
    if (this.#r = e[n - 1]?.uuid, this.#e.size === 0) return;
    let s = (0, import_chunk_f9x2f6cx.W)();
    for (let { ending: a, after: d } of this.#e.values()) if (a.sessionId !== s) d.splice(0).forEach((r) => r());
    let o = /* @__PURE__ */ new Map();
    for (let a = 0; a < n; a++) {
      let d = e[a], r = this.#d?.(xAn(d) ?? ""), f = r === void 0 ? eor(d) : u(r);
      if (f !== void 0) {
        let l = this.#e.get(f), { afterRow: g } = l?.ending ?? {};
        if (l?.ending.sessionId === s && l.ending.runId === G5o(d) && (g === void 0 || a > e.findIndex(({ uuid: h }) => h === g))) o.set(f, d.uuid);
      } else if (o.size === 0) continue;
      else if (d.type === "system" && d.subtype === "compact_boundary") o.clear();
      else if (p(d)) {
        for (let [l, g] of o) this.#t.set(l, [g, d.uuid]);
        o.clear();
      }
    }
    return this.#s++, (a) => {
      if (this.#s--, a) this.#l();
      else this.#f([...this.#e.keys()]);
    };
  }
  #a() {
    if (this.#s > 0) return [];
    let e = [];
    for (let [n, s] of this.#t) {
      let o = this.#e.get(n);
      if (o !== void 0) e.push([n, o, s]);
    }
    return e;
  }
  #f(e) {
    for (let n of e) this.#e.delete(n), this.#t.delete(n), (0, import_chunk_w578pjby.t)(`MCP task endings: part of the conversation may not have been saved, so the saved ending of task ${n} is left for the next resume`, { level: "warn" });
  }
  async #l() {
    let e = this.#n;
    if (e === void 0) return;
    if (this.#i) {
      this.#o = true;
      return;
    }
    this.#i = true;
    try {
      for (let n = this.#a(); n.length > 0; n = this.#a()) {
        this.#o = false;
        let s = await e.save(n.flatMap(([, , r]) => r)).catch(() => false), o = e.lostSoFar(), a = n.filter(([r, f]) => this.#e.get(r) === f), d = a.filter(([, r]) => r.lostAtHold === o);
        if (this.#f(a.filter(([, r]) => r.lostAtHold !== o).map(([r]) => r)), !s) {
          if (this.#o) continue;
          if (d.length > 0) (0, import_chunk_w578pjby.t)(`MCP task endings: the conversation is not confirmed saved, so ${d.length} saved ending(s) are kept and checked again at the next save or resume`);
          return;
        }
        for (let [r, f] of d) this.#e.delete(r), this.#t.delete(r), f.deleteFile(true), f.after.forEach((l) => l()), (0, import_chunk_w578pjby.t)(`MCP task endings: the model has read the notification of task ${r}, so its saved ending is being deleted`);
      }
    } catch (n) {
      (0, import_chunk_k449cc64.i)(n);
    } finally {
      this.#i = false;
    }
  }
}
function p(e) {
  if (e.type !== "assistant" || e.message.model === import_chunk_bp9b0hd8.xs) return false;
  let { content: n } = e.message;
  return Array.isArray(n) && n.some((s) => s.type === "tool_use" || s.type === "text" && s.text.trim() !== "");
}
var X_e = new import_chunk_pzzqg6s3.ze(() => new c());
function g8r() {
  return X_e.peek((0, import_chunk_f9x2f6cx.N)())?.isConversationSaved ?? false;
}
function _8r(e, n, s) {
  try {
    X_e.peek((0, import_chunk_f9x2f6cx.N)())?.hold(e, n, s);
  } catch (o) {
    (0, import_chunk_k449cc64.i)(o);
  }
}
function y8r(e, n) {
  return X_e.peek((0, import_chunk_f9x2f6cx.N)())?.afterEnding(e, n) ?? false;
}
function NFa(e, n) {
  return e !== void 0 && (X_e.peek((0, import_chunk_f9x2f6cx.N)())?.afterEndingOf(e, n) ?? false);
}
function FFa(...e) {
  try {
    X_e.peek((0, import_chunk_f9x2f6cx.N)())?.holdStop(...e);
  } catch (n) {
    (0, import_chunk_k449cc64.i)(n);
  }
}
function eni(e, n) {
  return X_e.peek((0, import_chunk_f9x2f6cx.N)())?.afterStop(e, n) ?? false;
}
function $Fa(e) {
  X_e.peek((0, import_chunk_f9x2f6cx.N)())?.settleStop(e);
}
function S8r(e) {
  let n = X_e.peek((0, import_chunk_f9x2f6cx.N)())?.keepElsewhere;
  if (n !== void 0) (async () => n(e))().catch(() => (0, import_chunk_k449cc64.i)(new import_chunk_jv7av99m.A("The host could not keep an MCP task's ending, so a later process asks the server about the task again", "mcp task: the host could not keep an ending")));
}
function UFa(e) {
  X_e.peek((0, import_chunk_f9x2f6cx.N)())?.forget(e);
}
function RAn(e, n, s) {
  try {
    let o = X_e.peek(s ?? (0, import_chunk_f9x2f6cx.N)())?.look(e, n);
    return o && ((a) => {
      try {
        o(a);
      } catch (d) {
        (0, import_chunk_k449cc64.i)(d);
      }
    });
  } catch (o) {
    (0, import_chunk_k449cc64.i)(o);
    return;
  }
}
function eor(e) {
  return import_chunk_nhpsytqr.PAe.exec(xAn(e) ?? "")?.[1];
}
function G5o(e) {
  if (e.type === "user") return e.origin?.kind === "task-notification" && e.origin.subkind === void 0 ? (0, import_chunk_trwykz8a.sB)(e.origin.runId) : void 0;
  return e.type === "attachment" && e.attachment?.type === "queued_command" && e.attachment.commandMode === "task-notification" && (e.attachment.origin == null || e.attachment.origin.kind === "task-notification" && e.attachment.origin.subkind === void 0) ? (0, import_chunk_trwykz8a.sB)(e.attachment.runId) : void 0;
}
function xAn(e) {
  if (G5o(e) === void 0) return;
  if (e.type === "attachment") return e.attachment.type === "queued_command" && typeof e.attachment.prompt === "string" ? e.attachment.prompt : void 0;
  let n = e.type === "user" ? e.message?.content : void 0, s = Array.isArray(n) ? n[0] : n;
  if (typeof s === "string") return s;
  return typeof s === "object" && s !== null && "text" in s && typeof s.text === "string" ? s.text : void 0;
}
