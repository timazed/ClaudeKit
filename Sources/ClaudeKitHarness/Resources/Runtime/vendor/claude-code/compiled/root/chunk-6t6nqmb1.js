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
var chunk_6t6nqmb1_exports = {};
__export(chunk_6t6nqmb1_exports, {
  JLa: () => JLa,
  SXt: () => SXt,
  _9r: () => _9r
});
module.exports = __toCommonJS(chunk_6t6nqmb1_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_ed372ykp = require("/$bunfs/root/chunk-ed372ykp.js");
var import_chunk_z6hn62tj = require("/$bunfs/root/chunk-z6hn62tj.js");
var import_chunk_z688m88d = require("/$bunfs/root/chunk-z688m88d.js");
function f(i, r) {
  if (Object.hasOwn(i, r)) return i[r];
  return Object.values(i).find((n) => (0, import_chunk_z6hn62tj.Xm)(n) && n.identity.resumableAgentId === r);
}
function _9r(i, r) {
  return new Map([...i].filter(([, n]) => {
    let e = f(r, n);
    if (e === void 0) return false;
    return !(0, import_chunk_ed372ykp.$o)(e.status) || (0, import_chunk_bzyb60p0.GY)(e);
  }));
}
var SXt = { registerName() {
}, allocateName(i) {
  return i;
}, nameOf() {
  return;
}, clearTodos() {
}, setTeammate() {
}, setSendMessagePin() {
} };
function JLa(i, r) {
  return { registerName(n, e) {
    if ((0, import_chunk_865at33z.$j)(n)) {
      (0, import_chunk_w578pjby.t)(`[registerName] refused reserved or agent-id-shaped name "${n}" for ${e}`);
      return;
    }
    r((s) => {
      if (s.agentNameRegistry.get(n) === e) return s;
      let a = new Map(s.agentNameRegistry);
      return a.set(n, e), { ...s, agentNameRegistry: a };
    });
  }, allocateName(n) {
    let e = c(n), s = i(), a = s.agentNameRegistry, g = new Set(Object.values(s.teamContext?.teammates ?? {}).map((o) => o.name));
    for (let o = 1; ; o++) {
      let m = o === 1 ? e : `${e}-${o}`;
      if ((0, import_chunk_865at33z.$j)(m) || g.has(m)) continue;
      let d = a.get(m);
      if (d === void 0 || f(s.tasks, d) === void 0) return m;
    }
  }, nameOf(n) {
    for (let [e, s] of i().agentNameRegistry) if (s === n) return e;
    return;
  }, clearTodos(n) {
    r((e) => {
      if (!(n in e.todos)) return e;
      let { [n]: s, ...a } = e.todos;
      return { ...e, todos: a };
    });
  }, setSendMessagePin(n, e) {
    r((s) => {
      let a = Object.hasOwn(s.sendMessagePins, n) ? s.sendMessagePins[n] : void 0;
      if ((0, import_chunk_z688m88d.Zt)(a, e)) return s;
      return { ...s, sendMessagePins: { ...s.sendMessagePins, [n]: e } };
    });
  }, setTeammate(n, e) {
    if (e !== void 0 && (0, import_chunk_865at33z.$j)(e.name)) {
      (0, import_chunk_w578pjby.t)(`[setTeammate] refused reserved or agent-id-shaped teammate name "${e.name}" for ${n}`);
      return;
    }
    r((s) => {
      let a = s.teamContext;
      if (!a) return s;
      let g = a.teammates?.[n];
      if (e === void 0) {
        if (!g) return s;
        let { [n]: o, ...m } = a.teammates;
        return { ...s, teamContext: { ...a, teammates: m } };
      }
      if (g === e) return s;
      return { ...s, teamContext: { ...a, teammates: { ...a.teammates, [n]: e } } };
    });
  } };
}
function c(i) {
  let r = i.replace(/[^A-Za-z0-9_-]+/g, "-").replace(/^-+/, "").slice(0, 64);
  return r.length > 0 ? r : "agent";
}
