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
var chunk_y8s4362z_exports = {};
__export(chunk_y8s4362z_exports, {
  FJ: () => FJ
});
module.exports = __toCommonJS(chunk_y8s4362z_exports);
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_1jfwdjvf = require("/$bunfs/root/chunk-1jfwdjvf.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_3bjtjsgp = require("/$bunfs/root/chunk-3bjtjsgp.js");
function s() {
  return require("/$bunfs/root/chunk-4kvvnjdb.js").mcpClientModule();
}
async function FJ(e, c, d) {
  let i = (0, import_chunk_3bjtjsgp.Uo)(e.name, e.config), { captureDiscoveryGrantLeg: h, ensureDiscoveryCacheAccount: l, getMcpIdentityEpoch: f, persistRefreshedToolsIfPresent: m } = s();
  l();
  let a = (0, import_chunk_sjqze7qg.U_)() ? h(e.name, e.config) : void 0, n = (0, import_chunk_qdcbcsg7.mt)().toolRefreshSequences, r = n.get(e) ?? { started: 0, applied: 0 };
  n.set(e, r), r.started += 1;
  let p = r.started, { fetchToolsForClient: t } = s(), v = t.cache.get(i), g = f();
  t.cache.delete(i);
  let o = await t(e, d), u = s().getToolsListErrorForResult(o);
  if (u) return { status: "kept-previous", error: u };
  if (e.discoveryAuthFailure && o.length === 0) return { status: "kept-previous", error: "the server rejected tool discovery as unauthorized \u2014 the user needs to authorize this connector (e.g. via /mcp) before its tools are available" };
  if (r.applied > p) return { status: "kept-previous", error: "superseded by a newer concurrent refresh of this server \u2014 the newer refresh result is the one applied" };
  if (r.applied = p, c(e.name, (0, import_chunk_1jfwdjvf.eye)(e, o)), a) a.then((y) => m(e, o, { identityEpoch: g, grantLeg: y }));
  return { status: "refreshed", newTools: o, previousToolsPromise: v };
}
