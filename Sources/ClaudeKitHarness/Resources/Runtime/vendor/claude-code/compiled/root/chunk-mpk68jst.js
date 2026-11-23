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
var chunk_mpk68jst_exports = {};
__export(chunk_mpk68jst_exports, {
  Bn: () => Bn,
  GWn: () => GWn,
  Hp: () => Hp,
  IS: () => IS,
  IV: () => IV,
  Lo: () => Lo,
  PN: () => PN,
  WTr: () => WTr,
  am: () => am,
  ho: () => ho,
  jWn: () => jWn,
  sX: () => sX
});
module.exports = __toCommonJS(chunk_mpk68jst_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_r9kxf52b = require("/$bunfs/root/chunk-r9kxf52b.js");
var import_chunk_0yc3wy8b = require("/$bunfs/root/chunk-0yc3wy8b.js");
var import_chunk_7e1w6rv3 = require("/$bunfs/root/chunk-7e1w6rv3.js");
var import_chunk_13h3tw8q = require("/$bunfs/root/chunk-13h3tw8q.js");
function jWn(e, r, t = "now") {
  if (e <= 0 || e >= 128) return;
  try {
    (0, import_chunk_42tcgre6.q)("error", "cli_exit_cause", { exit_code: e, cause: r, spawned_by_session: Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_CHILD_SESSION || import_chunk_c203g5kd.s.CLAUDECODE) }, t);
  } catch {
  }
}
function Hp(e) {
  console.error(import_chunk_d57v19zt.Re.red(e));
}
function Bn(e, r = "cli_error", t = "unnamed_cli_error", i = 1) {
  if (e) Hp(e);
  if (!(0, import_chunk_f9x2f6cx.Pd)()) (0, import_chunk_ndrgvsn7.ix)(r);
  jWn(i, t), process.exit(i);
  return;
}
function sX(e) {
  if (e) process.stdout.write(e + `
`);
  process.exit(0);
  return;
}
function GWn(e) {
  process.exit(e);
  return;
}
async function am(e) {
  await new Promise((r) => {
    process.stdout.write(e, () => r());
  });
}
function PN(e) {
  process.stderr.write(import_chunk_d57v19zt.Re.yellow((0, import_chunk_13h3tw8q.js)(e)) + `
`);
}
var n = 2e3, o = 250;
async function IV({ waitForOAuthRefresh: e = true } = {}) {
  let r = (0, import_chunk_r9kxf52b.vVt)();
  if (e && !r) await (0, import_chunk_r9kxf52b.eRt)();
  await (0, import_chunk_5appeerh.me)((0, import_chunk_0yc3wy8b.AM)(), n);
  try {
    let { flushAnalyticsSinks: t } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-1s1e57bz.js")));
    await t();
  } catch {
  }
  if (e && r) await (0, import_chunk_r9kxf52b.eRt)(), await (0, import_chunk_5appeerh.me)((0, import_chunk_0yc3wy8b.AM)(), o);
}
async function Lo(e) {
  await IV(), process.exit(e);
  return;
}
function WTr(e) {
  let r = (0, import_chunk_7e1w6rv3.ud)(() => void Lo(0));
  e.on("end", r), e.on("error", r);
}
async function ho(e, r) {
  if (e) Hp(e);
  return await IV(), Bn(void 0, void 0, r);
}
async function IS(e) {
  if (e) process.stdout.write(e + `
`);
  return await IV(), sX();
}
