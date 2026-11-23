const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_rdp7jc15_exports = {};
__export(chunk_rdp7jc15_exports, {
  $4o: () => $4o,
  oXl: () => oXl
});
module.exports = __toCommonJS(chunk_rdp7jc15_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_702cfzzh = require("/$bunfs/root/chunk-702cfzzh.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_mw2v4wks = require("/$bunfs/root/chunk-mw2v4wks.js");
var import_chunk_r60bafc1 = require("/$bunfs/root/chunk-r60bafc1.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_hsqa3g9e = require("/$bunfs/root/chunk-hsqa3g9e.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_hk9jjzx6 = require("/$bunfs/root/chunk-hk9jjzx6.js");
var h = ["default", "reset", "none", "gray", "grey"], A = 5e3;
async function oXl(i, e, r) {
  return i(await $4o(r, e), { display: "system" }), null;
}
async function $4o(i, e) {
  if ((0, import_chunk_wtm85h0y.Yc)()) return "Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";
  let r = i?.trim() ?? "", o = r === "" ? import_chunk_xfj2cwfv.aT[Math.floor(Math.random() * import_chunk_xfj2cwfv.aT.length)] : r.toLowerCase(), n = h.includes(o);
  if (!n && !import_chunk_xfj2cwfv.aT.includes(o)) {
    let t = import_chunk_xfj2cwfv.aT.join(", ");
    return `"${o}" isn't an available color. Options: ${t}, default`;
  }
  let S = (0, import_chunk_f9x2f6cx.W)(), C = (0, import_chunk_hsqa3g9e.wh)(), d = n ? "default" : o, p = n ? void 0 : o, f = (0, import_chunk_t7fzcstv.CI)("sessionRecord");
  if (!f) await (0, import_chunk_bzyb60p0.hur)(S, d, C, e.storageV5);
  e.setAppState((t) => (0, import_chunk_hk9jjzx6.gtt)(t, { color: p }));
  let c = n ? "Session color reset to default" : `Session color set to: ${o}`;
  if (f) {
    (0, import_chunk_y53wbr8a.a)("tengu_agent_color_set", {});
    let t = (0, import_chunk_t7fzcstv.br)()?.sessionId;
    if (!t || !(0, import_chunk_t7fzcstv.Zl)() || (0, import_chunk_k449cc64.wt)()) return `${c} on this screen only: this terminal can't save it to the cloud session.`;
    let { updateSessionColorTag: v } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-s4watcfw.js"))), s = await (0, import_chunk_5appeerh.me)(v(t, d, import_chunk_xfj2cwfv.aT, e.credentials), A) ?? { code: "timeout" };
    if (s.code === "saved") return (0, import_chunk_cqa9hrgx.u)("cloud_session_color"), c;
    (0, import_chunk_cqa9hrgx.l)("cloud_session_color", s.code);
    let g = `${c} on this screen only. It couldn't be saved to the cloud session, so it may not show elsewhere or after you leave.`;
    if (s.code === "no_access") return `${g} ${s.refusal}`;
    return s.code === "timeout" || s.code === "request_failed" || /^http_(429|5\d\d)$/.test(s.code) ? `${g} Run /color ${d} to try again.` : g;
  }
  let m = e.getAppState(), y = m.agent ? m.agentDefinitions.activeAgents.find((t) => t.agentType === m.agent) : void 0;
  return (0, import_chunk_9e5mdyfk.Jpr)((0, import_chunk_9e5mdyfk.TS)(), (0, import_chunk_xfj2cwfv.lct)({ userOverride: p, agentDefinitionColor: y?.color }), e.storageV5), O(d, e.credentials), c;
}
function O(i, e) {
  let r = (0, import_chunk_r60bafc1.Pc)()?.bridgeSessionId;
  if (!r) return;
  let o = (0, import_chunk_mw2v4wks.CR)();
  Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-xjn4hrkg.js"))).then(({ updateBridgeSessionColorTag: n }) => n(r, i, import_chunk_xfj2cwfv.aT, { baseUrl: (0, import_chunk_702cfzzh.Fde)(), getAccessToken: o ? () => o : void 0, credentials: e }).catch(() => {
  }));
}
