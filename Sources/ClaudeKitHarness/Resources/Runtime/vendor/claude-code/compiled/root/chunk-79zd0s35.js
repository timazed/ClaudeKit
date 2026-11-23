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
var chunk_79zd0s35_exports = {};
__export(chunk_79zd0s35_exports, {
  D2r: () => D2r,
  GXn: () => GXn,
  vwa: () => vwa,
  zXn: () => zXn
});
module.exports = __toCommonJS(chunk_79zd0s35_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_promises = require("fs/promises");
var import_os = require("os");
var import_path = require("path");
async function u(e, a) {
  await (0, import_chunk_865at33z.Ke)((r) => ({ ...r, appleTerminalSetupInProgress: true, appleTerminalBackupPath: e }), a);
}
async function GXn(e) {
  await (0, import_chunk_865at33z.Ke)((a) => ({ ...a, appleTerminalSetupInProgress: false }), e);
}
function p() {
  let e = (0, import_chunk_865at33z.ge)();
  return { inProgress: e.appleTerminalSetupInProgress ?? false, backupPath: e.appleTerminalBackupPath || null };
}
function zXn() {
  return (0, import_path.join)((0, import_os.homedir)(), "Library", "Preferences", "com.apple.Terminal.plist");
}
async function vwa(e) {
  let a = zXn(), r = `${a}.bak`;
  try {
    let { code: n } = await (0, import_chunk_7fsmgfxx.kt)("defaults", ["export", "com.apple.Terminal", a]);
    if (n !== 0) return null;
    try {
      await (0, import_promises.stat)(a);
    } catch {
      return null;
    }
    return await (0, import_chunk_7fsmgfxx.kt)("defaults", ["export", "com.apple.Terminal", r]), await u(r, e), r;
  } catch (n) {
    if ((0, import_chunk_jv7av99m.fn)(n)) return (0, import_chunk_w578pjby.t)(`backupTerminalPreferences: fs inaccessible: ${n}`), null;
    return (0, import_chunk_k449cc64.i)(n), null;
  }
}
async function D2r(e) {
  let { inProgress: a, backupPath: r } = p();
  if (!a) return { status: "no_backup" };
  if (!r) return await GXn(e), { status: "no_backup" };
  try {
    await (0, import_promises.stat)(r);
  } catch {
    return await GXn(e), { status: "no_backup" };
  }
  let n = false;
  try {
    let { code: o } = await (0, import_chunk_7fsmgfxx.kt)("defaults", ["import", "com.apple.Terminal", r]);
    if (o !== 0) return { status: "failed", backupPath: r };
    return n = true, await (0, import_chunk_7fsmgfxx.kt)("killall", ["cfprefsd"]), await GXn(e), { status: "restored" };
  } catch (o) {
    if ((0, import_chunk_jv7av99m.fn)(o)) (0, import_chunk_w578pjby.t)(`checkAndRestoreTerminalBackup: fs inaccessible: ${o}`);
    else (0, import_chunk_k449cc64.i)(o);
    return await GXn(e), n ? { status: "restored" } : { status: "failed", backupPath: r };
  }
}
