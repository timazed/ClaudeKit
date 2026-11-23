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
var chunk_k353g4k2_exports = {};
__export(chunk_k353g4k2_exports, {
  E0t: () => E0t
});
module.exports = __toCommonJS(chunk_k353g4k2_exports);
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var p = { "remote-control": ["allow_remote_control"], cloud: ["allow_remote_sessions"], unknown: ["allow_remote_control", "allow_remote_sessions"] }, l = { featureLabel: "Remote Control and Cloud sessions", verb: "are" }, a = "No organization policy allows sends to this kind of session, so it can't be shown as permitted.";
function E0t(n) {
  if ((0, import_chunk_zhr7rpv7.ve)() !== "firstParty" || (0, import_chunk_k449cc64.wt)()) return { cause: "residency" };
  if ((0, import_chunk_xcgcdx61.T1l)()) return null;
  let e = require("/$bunfs/root/chunk-ts9zreqg.js"), r = p[n], o = [];
  for (let t of r) {
    let { featureLabel: u, verb: y } = e.policyKeyLabel(t), i = e.policyDeniedReason(t, u, y);
    if (i === null) return null;
    o.push(i);
  }
  let [s] = r;
  if (s === void 0) return { cause: "policy", reason: a };
  let { logOrgPolicyDenied: c } = require("/$bunfs/root/chunk-t4cr4yat.js");
  return c(s, "tool"), { cause: "policy", reason: (n === "unknown" && o.length > 1 ? e.policyDeniedReason(s, l.featureLabel, l.verb) ?? o[0] : o[0]) ?? a };
}
