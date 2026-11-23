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
var chunk_vbjta162_exports = {};
__export(chunk_vbjta162_exports, {
  a2i: () => a2i,
  vks: () => vks
});
module.exports = __toCommonJS(chunk_vbjta162_exports);
var import_chunk_43nz5n02 = require("/$bunfs/root/chunk-43nz5n02.js");
async function vks(s) {
  let { isNestedGitLabProject: e, parseGitRemote: t, parseGitHubRepository: u } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-9p8w0n1t.js"))), r = t(s);
  if (r) return e(r) ? null : r;
  let i = u(s);
  if (i) {
    let [o, n] = i.split("/");
    if (o && n) return { host: import_chunk_43nz5n02.Vr, owner: o, name: n };
  }
  return null;
}
async function a2i(s, e, t) {
  let u = { revisionGuessUsed: false };
  if (!s) return { sources: [], outcomes: [], report: u };
  let { getDefaultBranch: r } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-0aa26gtm.js")));
  if (e === "HEAD") e = "";
  let i = false, o = e || t || void 0;
  if (!o) o = await r() || void 0, i = o !== void 0;
  let n = e && t && e !== t ? [e] : [], c, a;
  if (e && n.length === 0) c = t ? "is_default" : "no_evidence", a = t ? `[bridge] requested branch '${e}' is the default branch \u2014 omitted from outcomes.branches (the runner stays on the clone)` : `[bridge] no session-anchored default-branch evidence \u2014 omitting requested branch '${e}' from outcomes.branches; the remote session will work on a generated branch instead. Run 'git remote set-head origin -a' in the repo (or supply defaultBranch via the SDK) to restore branch continuity.`;
  let g = { branchDropped: c, revisionGuessUsed: i, warnMessage: a }, l = (y, d, m) => ({ report: g, sources: [{ type: "git_repository", url: `https://${y}/${d}/${m}`, revision: o }], outcomes: [{ type: "git_repository", git_info: { type: "github", repo: `${d}/${m}`, branches: n } }] }), p = await vks(s);
  if (p) return l(p.host, p.owner, p.name);
  return { sources: [], outcomes: [], report: u };
}
