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
var chunk_d55td748_exports = {};
__export(chunk_d55td748_exports, {
  $sn: () => $sn,
  APi: () => APi,
  AUt: () => AUt,
  All: () => All,
  CAe: () => CAe,
  CPi: () => CPi,
  Cll: () => Cll,
  Cpo: () => Cpo,
  Ell: () => Ell,
  Fsn: () => Fsn,
  Gae: () => Gae,
  HH: () => HH,
  JDe: () => JDe,
  K_r: () => K_r,
  Lsn: () => Lsn,
  MH: () => MH,
  Nsn: () => Nsn,
  QDe: () => QDe,
  RPi: () => RPi,
  RUt: () => RUt,
  TPi: () => TPi,
  Tll: () => Tll,
  Tpo: () => Tpo,
  V_r: () => V_r,
  X_r: () => X_r,
  YNn: () => YNn,
  Y_r: () => Y_r,
  ZDe: () => ZDe,
  aje: () => aje,
  bll: () => bll,
  cbe: () => cbe,
  cps: () => cps,
  f0: () => f0,
  fps: () => fps,
  ije: () => ije,
  kll: () => kll,
  q_r: () => q_r,
  sje: () => sje,
  tV: () => tV,
  ube: () => ube,
  ups: () => ups,
  vll: () => vll,
  vpo: () => vpo,
  wll: () => wll,
  xUt: () => xUt
});
module.exports = __toCommonJS(chunk_d55td748_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_jmxgdf7r = require("/$bunfs/root/chunk-jmxgdf7r.js");
var import_chunk_839h1d5e = require("/$bunfs/root/chunk-839h1d5e.js");
var import_crypto = require("crypto");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_net = require("net");
var import_path = require("path");
var import_promises2 = require("fs/promises");
var f = 65534, I = /* @__PURE__ */ new Set(["/", "/dev", "/dev/shm", "/run", "/run/user", "/tmp", "/var", "/var/tmp", "/var/run", "/home", "/var/home", "/root", "/var/roothome", "/mnt", "/mnt/wslg"]);
function bll() {
  return I;
}
async function U() {
  return;
}
function b(e) {
  let n = [];
  for (let t of e.split(`
`)) {
    if (t.trim() === "") continue;
    let i = t.trim().split(/\s+/), o = Number(i[0]), u = Number(i[1]), c = Number(i[2]);
    if (i.length !== 3 || !Number.isSafeInteger(o) || o < 0 || !Number.isSafeInteger(u) || u < 0 || !Number.isSafeInteger(c) || c <= 0) return;
    n.push({ innerStart: o, hostStart: u, count: c });
  }
  return n;
}
function g(e) {
  return e.length === 1 && e[0].innerStart === 0 && e[0].count >= 4294967295;
}
async function l() {
  try {
    return k(await (0, import_promises2.readFile)("/proc/sys/kernel/overflowuid", "utf8"));
  } catch {
    return;
  }
}
function k(e) {
  let n = e.trim();
  if (!/^\d+$/.test(n)) return;
  let t = Number(n);
  return Number.isSafeInteger(t) ? t : void 0;
}
function M(e, n) {
  if (e.length === 0 || n === void 0) return;
  return e.some((i) => n >= i.innerStart && n < i.innerStart + i.count) ? void 0 : n;
}
async function wll() {
  return;
}
async function _(e, n) {
  let t = await l(), i = t ?? f;
  return { unmappedOwnerUid: M(e, t), uidCollapses: e.length === 0 || n !== void 0 && n === i, rootUidAmbiguous: t === 0 };
}
async function V_r() {
  let e = process.getuid?.();
  if (e === void 0) return;
  return e;
}
function cps() {
  return import_chunk_jmxgdf7r.rRt.uidsCollapse ??= A((0, import_chunk_w578pjby.le)()), import_chunk_jmxgdf7r.rRt.uidsCollapse;
}
function A(e) {
  return false;
}
function a(e) {
  return e === void 0 ? (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "daemon") : (0, import_path.join)(e, "daemon");
}
function q() {
  return (0, import_crypto.createHash)("sha256").update((0, import_path.resolve)((0, import_chunk_2gtmjt3y.Ze)())).digest("hex").slice(0, 8);
}
function JDe() {
  let e = process.getuid?.() ?? 0, n = import_chunk_c203g5kd.s.TERMUX_VERSION && import_chunk_c203g5kd.s.PREFIX ? (0, import_path.join)(import_chunk_c203g5kd.s.PREFIX, "tmp") : "/tmp";
  return (0, import_path.join)(n, `cc-daemon-${e}`, q());
}
var G = /^[a-f0-9]{16}$/;
function TPi(e) {
  return (0, import_path.join)(a(e), "pipe.key");
}
var Q = (0, import_chunk_839h1d5e.Co)(() => {
  let e = TPi();
  for (let n = 0; n < 8; n++) {
    let t;
    try {
      let o = (0, import_fs.lstatSync)(e);
      if (!o.isFile() || o.size > 4096) {
        try {
          (0, import_fs.rmSync)(e, { recursive: true, force: true });
        } catch {
        }
        t = "invalid";
      } else t = (0, import_fs.readFileSync)(e, "utf8").trim();
    } catch (o) {
      if (!(0, import_chunk_jv7av99m.J)(o)) throw o;
    }
    if (t !== void 0) {
      if (G.test(t)) return t;
      if (t === "" && n < 3) continue;
      let o = (0, import_crypto.randomBytes)(8).toString("hex");
      return (0, import_chunk_q7qjcthc.b3)(e, o, 384), o;
    }
    let i = (0, import_crypto.randomBytes)(8).toString("hex");
    (0, import_fs.mkdirSync)(a(), { recursive: true, mode: 448 });
    try {
      return (0, import_fs.writeFileSync)(e, i, { flag: "wx", mode: 384 }), i;
    } catch (o) {
      if ((0, import_chunk_jv7av99m.w)(o) !== "EEXIST") throw o;
    }
  }
  throw Error("daemon pipe.key is not a valid nonce");
}, () => (0, import_chunk_2gtmjt3y.Ze)());
function S(e) {
  return `\\\\.\\pipe\\cc-daemon-${Q()}-${e}`;
}
function MH(e) {
  return e.replace(/cc-daemon-[0-9a-f]{16}/g, "cc-daemon-*");
}
function YNn(e) {
  if (e instanceof Error) {
    if (e.message = MH(e.message), typeof e.stack === "string") e.stack = MH(e.stack);
  }
  return e;
}
function vpo(e) {
  return (0, import_path.join)(a(e), "control.key");
}
async function kll() {
  let e = vpo();
  try {
    let t = await (0, import_promises.lstat)(e);
    if (t.isFile() && t.size <= 4096) {
      let i = (await (0, import_promises.readFile)(e, "utf8")).trim();
      if (i) return i;
    } else await (0, import_promises.rm)(e, { recursive: true, force: true }).catch(() => {
    });
  } catch (t) {
    if (!(0, import_chunk_jv7av99m.J)(t)) throw t;
  }
  let n = (0, import_crypto.randomBytes)(16).toString("hex");
  return await (0, import_promises.mkdir)(a(), { recursive: true, mode: 448 }), await (0, import_chunk_q7qjcthc.yr)(e, n, 384), n;
}
async function cbe() {
  try {
    let e = await (0, import_promises.lstat)(vpo());
    if (!e.isFile() || e.size > 4096) return;
    return (await (0, import_promises.readFile)(vpo(), "utf8")).trim() || void 0;
  } catch {
    return;
  }
}
async function Ell() {
  let e = a();
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") {
    await (0, import_promises.mkdir)(e, { recursive: true }), await (0, import_promises.chmod)(e, 448).catch(() => {
    });
    return;
  }
  await (0, import_promises.mkdir)(e, { recursive: true, mode: 448 }), E();
  let n = process.getuid?.(), t = await (0, import_promises.lstat)(e);
  if (n !== void 0 && t.uid !== n) throw Error(`refusing to use daemon dir: ${e} is owned by uid ${t.uid}`);
  if ((t.mode & 511) !== 448) await (0, import_promises.chmod)(e, 448);
}
async function K_r() {
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") return;
  let e = JDe();
  await (0, import_promises.mkdir)(e, { recursive: true, mode: 448 });
  let n = /* @__PURE__ */ new Date();
  await (0, import_promises.utimes)(e, n, n).catch(() => {
  }), await O([(0, import_path.dirname)(e), e]);
}
var ups = "ENOTOWNED";
async function O(e) {
  let n = process.getuid?.();
  E();
  for (let t of e) {
    let i = await (0, import_promises.lstat)(t);
    if (n !== void 0 && i.uid !== n) throw Object.assign(Error(`refusing to bind: ${t} is owned by uid ${i.uid}`), { code: ups });
    if ((i.mode & 511) !== 448) await (0, import_promises.chmod)(t, 448);
  }
}
var CPi = "refusing to use the daemon socket: this process runs in a user namespace without a uid mapping, so directory and peer ownership cannot be verified (start it with a mapping, e.g. unshare -Ur)";
function E() {
  if (cps()) throw Object.assign(Error(CPi), { code: ups });
}
async function vll(e) {
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") {
    await (0, import_promises.mkdir)(e, { recursive: true }).catch(() => {
    });
    return;
  }
  await K_r();
  let n = [$sn(), fps()];
  for (let t of n) await (0, import_promises.mkdir)(t, { recursive: true, mode: 448 });
  if (!n.includes(e)) {
    if (await (0, import_promises.mkdir)(e, { recursive: true, mode: 448 }).then(() => true, () => false)) n.push(e);
  }
  await O(n);
}
function Tll() {
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") return;
  let e = JDe(), n = (0, import_path.dirname)(e), t = (0, import_path.basename)(e);
  (0, import_promises.readdir)(n, { withFileTypes: true }).then(async (i) => {
    for (let o of i) {
      if (!o.isDirectory() || o.name === t) continue;
      let u = (0, import_path.join)(n, o.name);
      if (!await Z((0, import_path.join)(u, "control.sock"))) continue;
      let c = await (0, import_promises.lstat)(u).catch(() => null);
      if (!c || Date.now() - c.mtimeMs < 1e4) continue;
      let D = await (0, import_promises.readdir)((0, import_path.join)(u, "rv")).catch(() => []), T = await (0, import_promises.readdir)((0, import_path.join)(u, "pty")).catch(() => []), C = await (0, import_promises.readdir)((0, import_path.join)(u, "spare")).catch(() => []);
      if (D.length || T.length || C.length) continue;
      await (0, import_promises.rm)(u, { recursive: true, force: true }).catch(() => {
      });
    }
  }).catch(() => {
  });
}
function q_r(e) {
  return e === "ENOENT" || e === "ECONNREFUSED" || e === "ENOTSOCK";
}
function Z(e) {
  let n, t = new Promise((o) => {
    n = o;
  }), i = (0, import_net.connect)(e);
  return i.setTimeout(1e3, () => {
    i.destroy(), n(false);
  }), i.on("error", (o) => {
    n(q_r((0, import_chunk_jv7av99m.w)(o)));
  }), i.once("connect", () => {
    i.end(`{"op":"ping"}
`), n(false);
  }), t;
}
function sje(e) {
  return (0, import_path.join)(a(e), "dispatch");
}
function APi() {
  return (0, import_path.join)(a(), "dispatch", "rejected");
}
function Gae(e) {
  return (0, import_path.join)(a(e), "roster.json");
}
var Tpo = "attach-journal";
function ije() {
  return (0, import_path.join)(a(), Tpo);
}
function fps() {
  return (0, import_path.join)(JDe(), "rv");
}
function Lsn(e) {
  return (0, import_path.join)(a(e), "auth");
}
function Nsn(e) {
  return (0, import_path.join)(Lsn(), `${e}.json`);
}
function Y_r() {
  return (0, import_path.join)(a(), "host-managed");
}
function QDe(e) {
  return (0, import_path.join)(Y_r(), e);
}
function AUt() {
  return (0, import_path.join)(a(), "gateway-routed");
}
function RUt(e) {
  return (0, import_path.join)(AUt(), e);
}
function RPi() {
  return (0, import_path.join)(a(), "sign-in");
}
function Cpo(e) {
  return (0, import_path.join)(RPi(), e);
}
function Fsn(e) {
  return (0, import_path.join)(Lsn(), `${e}.tokens.json`);
}
function X_r(e) {
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") return S(`rv-${e}`);
  return (0, import_path.join)(fps(), `${e}.sock`);
}
function $sn() {
  return (0, import_path.join)(JDe(), "pty");
}
function HH(e) {
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") return S(`pty-${e}`);
  return (0, import_path.join)($sn(), `${e}.sock`);
}
function ZDe() {
  return (0, import_path.join)(JDe(), "spare");
}
function Cll(e) {
  return (0, import_path.join)(ZDe(), `${e}.pty.sock`);
}
function All(e) {
  return (0, import_path.join)(ZDe(), `${e}.claim.sock`);
}
function xUt() {
  return (0, import_path.join)(a(), "pty-pids");
}
function aje(e) {
  return (0, import_path.join)(xUt(), `${e}.pid`);
}
function f0(e) {
  return R(e, "err");
}
function tV(e) {
  return R(e, "late");
}
function R(e, n) {
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") return (0, import_path.join)(xUt(), `${e.split("\\").pop()}.${n}`);
  return `${e}.${n}`;
}
function ube(e) {
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") return (0, import_path.join)(xUt(), `${e.split("\\").pop()}.exec-exit`);
  return `${e}.exec-exit`;
}
function CAe() {
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") return S("control");
  return E(), (0, import_path.join)(JDe(), "control.sock");
}
