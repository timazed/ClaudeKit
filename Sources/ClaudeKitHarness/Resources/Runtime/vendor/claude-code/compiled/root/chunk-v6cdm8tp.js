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
var chunk_v6cdm8tp_exports = {};
__export(chunk_v6cdm8tp_exports, {
  D0l: () => D0l,
  EVn: () => EVn,
  H0l: () => H0l,
  L0l: () => L0l,
  N0l: () => N0l,
  Rd: () => Rd,
  Shn: () => Shn,
  qIr: () => qIr
});
module.exports = __toCommonJS(chunk_v6cdm8tp_exports);
var import_promises = require("fs/promises");
var import_os = require("os");
var import_path = require("path");
function H0l(n) {
  return (0, import_path.join)(n, "sessions");
}
var Shn = 262144;
function D0l(n) {
  let e = n.replace(/\.json$/, ""), t = parseInt(e, 10);
  if (isNaN(t)) return null;
  return { pid: t, canonical: String(t) === e };
}
var d = ["interactive", "bg", "daemon", "daemon-worker"];
function a(n) {
  return d.includes(n) ? n : void 0;
}
var p = ["busy", "shell", "idle", "waiting"];
function c(n) {
  return p.includes(n) ? n : void 0;
}
var S = 4e15;
function EVn(n) {
  return typeof n === "number" && Number.isFinite(n) && n >= 0 && n <= S;
}
function qIr(n) {
  return EVn(n) ? n : void 0;
}
function L0l(n) {
  let e = typeof n === "object" && n !== null ? n : {};
  return { cwd: typeof e.cwd === "string" ? e.cwd : "?", startedAt: qIr(e.startedAt) ?? 0, procStart: typeof e.procStart === "string" ? e.procStart : void 0, ...typeof e.procStartFt === "string" && { procStartFt: e.procStartFt }, kind: a(e.kind), sessionId: typeof e.sessionId === "string" ? e.sessionId : void 0, status: c(e.status), entrypoint: typeof e.entrypoint === "string" ? e.entrypoint : void 0, ...typeof e.pidDomain === "string" && { pidDomain: e.pidDomain } };
}
function Rd(n) {
  if (n <= 1) return false;
  try {
    return process.kill(n, 0), true;
  } catch {
    return false;
  }
}
async function N0l(n) {
  if (n === "windows") return `darwin:${(0, import_os.hostname)().toLowerCase()}`;
  if (n !== "linux" && n !== "wsl") return "darwin";
  let [e, t] = await Promise.all([(0, import_promises.readFile)("/etc/machine-id", "utf8").then((o) => o.trim(), () => ""), (0, import_promises.readlink)("/proc/self/ns/pid").catch(() => "")]);
  return `darwin:${e}:${t}`;
}
