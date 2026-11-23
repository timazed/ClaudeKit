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
var chunk_ysm157pk_exports = {};
__export(chunk_ysm157pk_exports, {
  aei: () => aei,
  dei: () => dei,
  fNa: () => fNa,
  lei: () => lei
});
module.exports = __toCommonJS(chunk_ysm157pk_exports);
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var aei = /* @__PURE__ */ new Set(["invoke-command", "start-job", "start-threadjob", "register-scheduledjob"]), lei = /* @__PURE__ */ new Set(["invoke-command", "invoke-expression", "start-job", "start-threadjob", "register-scheduledjob", "register-engineevent", "register-objectevent", "register-wmievent", "new-pssession", "enter-pssession"]), dei = /* @__PURE__ */ new Set(["import-module", "ipmo", "install-module", "save-module", "update-module", "install-script", "save-script"]), o = ["pwsh", "powershell", "cmd", "bash", "wsl", "sh", "start-process", "start", "add-type", "new-object"];
function s(t) {
  return Object.entries(import_chunk_bzyb60p0.fye).filter(([, e]) => t.has(e.toLowerCase())).map(([e]) => e);
}
var r = /* @__PURE__ */ new Set(["invoke-webrequest", "invoke-restmethod"]), n = /* @__PURE__ */ new Set(["set-alias", "sal", "new-alias", "nal", "set-variable", "sv", "new-variable", "nv"]), i = /* @__PURE__ */ new Set(["invoke-wmimethod", "iwmi", "invoke-cimmethod", "icim", "wmic", "wmic.exe"]), a = /* @__PURE__ */ new Set(["select-object", "sort-object", "group-object", "where-object", "measure-object", "write-output", "write-host", "start-sleep", "format-table", "format-list", "format-wide", "format-custom", "out-string", "out-host", "get-module", "ipconfig", "hostname", "route", "arp"]), fNa = (() => {
  let t = /* @__PURE__ */ new Set([...o, ...aei, ...lei, ...dei, ...r, ...n, ...i, ...a, "foreach-object", "module", "convertfrom-csv", "import-csv", "ipcsv", ...import_chunk_bz1f2qnq.gwo.filter((e) => !e.includes(" "))]);
  return /* @__PURE__ */ new Set([...t, ...s(t)]);
})();
