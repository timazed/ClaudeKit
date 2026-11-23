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
var chunk_1ppj401s_exports = {};
__export(chunk_1ppj401s_exports, {
  ESa: () => ESa,
  vSa: () => vSa
});
module.exports = __toCommonJS(chunk_1ppj401s_exports);
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_fp3vnecp = require("/$bunfs/root/chunk-fp3vnecp.js");
var import_chunk_hnt4bwpe = require("/$bunfs/root/chunk-hnt4bwpe.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_promises = require("fs/promises");
var import_path = require("path");
function C(i) {
  let e = (0, import_path.relative)((0, import_chunk_q3a5dy2r.Em)(), i);
  if (e === "" || e.startsWith(`..${import_path.sep}`) || e === ".." || (0, import_path.isAbsolute)(e)) return null;
  let n = e.split(import_path.sep);
  return n.length < 4 || n[2] !== "subagents" ? null : n;
}
function ESa(i) {
  let e = C(i), n = e?.at(-1);
  if (!e || !n?.startsWith("agent-") || !n.endsWith(".jsonl")) return null;
  let o = n.slice(6, -6), r = e.slice(3, -1);
  if (!(0, import_chunk_hkvzj051.HM)([e[0], e[1], o]) || r.length > 0 && !(0, import_chunk_hkvzj051.HM)(r)) return null;
  let a = import_chunk_hkvzj051.at.transcript(e[0], e[1], o, r.length > 0 ? r : void 0);
  return (0, import_chunk_fp3vnecp.db)(a) === void 0 ? a : null;
}
async function vSa(i, e, { rejectUnlistable: n = false, withLinks: o = false } = {}) {
  let r = (0, import_chunk_m15w38ag.ne)() && e !== void 0 ? _(i) : null;
  if (e !== void 0 && r !== null) return P(e, r, i, v, n);
  let a = [];
  async function u(d) {
    let l;
    try {
      l = await (0, import_promises.readdir)(d, { withFileTypes: true });
    } catch (s) {
      if (n && !(0, import_chunk_jv7av99m.J)(s)) throw s;
      return;
    }
    for (let s of l) {
      let c = o && s.isSymbolicLink();
      if ((s.isFile() || c) && s.name.startsWith("agent-") && s.name.endsWith(".jsonl")) {
        let g = s.name.slice(6, -6);
        a.push({ agentId: g, filePath: (0, import_path.join)(d, s.name), ...c && { isLink: c } });
      } else if (s.isDirectory()) await u((0, import_path.join)(d, s.name));
    }
  }
  return await u(i), a;
}
function _(i) {
  let e = (0, import_path.relative)((0, import_chunk_q3a5dy2r.Em)(), i);
  if (e === "" || e.startsWith(`..${import_path.sep}`) || (0, import_path.isAbsolute)(e)) return null;
  let n = e.split(import_path.sep);
  if (n.length !== 3 || n[2] !== "subagents" || !(0, import_chunk_hkvzj051.HM)([n[0], n[1]])) return null;
  let o = { namespace: "transcript", projectKey: n[0], sessionId: n[1] };
  return (0, import_chunk_fp3vnecp.Ddn)(o) === void 0 ? o : null;
}
var v = 1e4;
async function P(i, e, n, o, r) {
  let a = [], u = [e], d = /* @__PURE__ */ new Set([""]), l = 0;
  try {
    while (u.length > 0) {
      if (++l > o) throw Error("sub-agent listing incomplete");
      let s = u.shift(), c = [];
      if ((await (0, import_chunk_hnt4bwpe.Nd)((f) => i.listEntries(s, { skipKeyStats: true, skipScopeStats: true, ...f !== void 0 && { cursor: f } }), (f) => {
        for (let t of f) if (t.kind === "key" && t.key.namespace === "transcript" && t.key.agentId !== void 0 && (0, import_chunk_hkvzj051.Ao)(t.key.agentId) && (t.key.agentRelPath === void 0 || (0, import_chunk_hkvzj051.HM)(t.key.agentRelPath))) a.push({ agentId: t.key.agentId, filePath: (0, import_path.join)(n, ...t.key.agentRelPath ?? [], `agent-${t.key.agentId}.jsonl`) });
        else if (t.kind === "scope" && t.scope.namespace === "transcript" && t.scope.agentRelPath !== void 0 && (0, import_chunk_hkvzj051.HM)(t.scope.agentRelPath) && !d.has(t.scope.agentRelPath.join("/"))) {
          let y = { ...e, agentRelPath: t.scope.agentRelPath };
          if ((0, import_chunk_fp3vnecp.Ddn)(y) === void 0) d.add(t.scope.agentRelPath.join("/")), c.push(y);
        }
      })).status !== "done") throw Error("sub-agent listing incomplete");
      u.unshift(...c);
    }
  } catch (s) {
    if (r) throw s;
    return [];
  }
  return a;
}
