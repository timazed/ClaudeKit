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
var chunk_ez1sysdb_exports = {};
__export(chunk_ez1sysdb_exports, {
  Ijr: () => Ijr,
  PSa: () => PSa,
  cXn: () => cXn,
  ezs: () => ezs,
  fXn: () => fXn,
  pWo: () => pWo,
  uXn: () => uXn,
  xSa: () => xSa,
  zIt: () => zIt
});
module.exports = __toCommonJS(chunk_ez1sysdb_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_8j3h6yzg = require("/$bunfs/root/chunk-8j3h6yzg.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_b7d04a6f = require("/$bunfs/root/chunk-b7d04a6f.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var cXn = 1048576;
async function pWo(i) {
  let e;
  try {
    e = await m(i);
  } catch (o) {
    return { kind: "threw", error: o };
  }
  if (!e.ok) {
    let o = "telemetryCode" in e.error ? e.error.telemetryCode : void 0;
    if (o === "ENXIO" || o === "EISDIR" || o === "EFBIG") return { kind: "refused" };
    return { kind: "failed", error: e.error };
  }
  let r = e.value.items[0];
  if (!r.found) return { kind: "absent" };
  if (r.totalBytes > cXn) return { kind: "refused" };
  return { kind: "text", text: Buffer.from(r.value).toString("utf8") };
}
function m(i) {
  return i.read([{ key: import_chunk_hkvzj051.at.state("daemon-config"), offset: 0, length: cXn + 1 }]);
}
var k = 1e4, y = 15e3;
async function uXn(i, e) {
  let r = i ?? (0, import_chunk_b7d04a6f.a6)(), o;
  if ((0, import_chunk_m15w38ag.ne)() && e !== void 0 && r === (0, import_chunk_b7d04a6f.a6)()) o = await h(e, r);
  else try {
    let d = await (0, import_promises.stat)(r);
    if (!d.isFile() || d.size > cXn) throw Error(`${r} is not a regular file (or exceeds 1MiB); refusing read-modify-write`);
    o = await (0, import_promises.readFile)(r, "utf8");
  } catch (d) {
    if (!(0, import_chunk_jv7av99m.J)(d)) throw d;
  }
  if (o === void 0 || o.trim() === "") return {};
  let a;
  try {
    a = JSON.parse((0, import_chunk_0jve1fep.Ys)(o));
  } catch {
    throw Error(`daemon.json is malformed: ${r}`);
  }
  if (a && typeof a === "object" && !Array.isArray(a)) return a;
  return {};
}
async function h(i, e) {
  let r = await pWo(i);
  switch (r.kind) {
    case "text":
      return r.text;
    case "absent":
      return;
    case "refused": {
      let o = `${e} is not a regular file (or exceeds 1MiB); refusing read-modify-write`;
      throw Error(o);
    }
    case "failed":
      throw Object.assign(new import_chunk_jv7av99m.A(`daemon.json read failed: ${r.error.code}`, "daemon.json v5 read failed"), { cause: "cause" in r.error ? r.error.cause : r.error });
    case "threw":
      throw r.error;
  }
}
async function zIt(i, e, r) {
  let o = e ?? (0, import_chunk_b7d04a6f.a6)();
  await (0, import_chunk_2yx6c1y2.iKn)(o, (a) => S(i, o, a, r), { staleMs: k, acquireTimeoutMs: y, createParent: false, forgoIf: (a) => a.kind === "absent" || a.kind === "fs" && !(0, import_chunk_2yx6c1y2.Jhn)(a.error), onForgone: (a) => (0, import_chunk_w578pjby.t)(`[daemon-config] lock unavailable (${(0, import_chunk_2yx6c1y2.Fze)(a)}); changing ${o} without it`, { level: "warn" }), ifReentrant: () => {
    throw new import_chunk_jv7av99m.A("daemon.json was changed from inside another change to it");
  }, ifContended: (a) => {
    throw new import_chunk_jv7av99m.A(a.kind === "contended" ? `${o} is being changed by another Claude Code process. Nothing was saved. Try again, or delete ${o}.lock if no other Claude Code process is running.` : `Couldn't lock ${o} (${(0, import_chunk_2yx6c1y2.Fze)(a)}). Nothing was saved. Try again.`, "daemon.json lock not acquired");
  } });
}
async function S(i, e, r, o) {
  let a = await uXn(e, o);
  if (await i(a) === false) return;
  if (r.suspect()) throw new import_chunk_jv7av99m.A(`The lock on ${e} was lost before the change could be saved. Nothing was saved. Try again.`, "daemon.json lock lost before the write");
  if ((0, import_chunk_m15w38ag.ne)() && o !== void 0 && e === (0, import_chunk_b7d04a6f.a6)()) {
    let s = await o.write(import_chunk_hkvzj051.at.state("daemon-config"), (0, import_chunk_w578pjby._)(a, null, 2) + `
`, { publishDiscipline: "atomic", mode: 438 & ~process.umask() });
    if (!s.ok) throw Object.assign(new import_chunk_jv7av99m.A(`daemon.json write failed: ${s.error.code}`, "daemon.json v5 write failed"), { cause: "cause" in s.error ? s.error.cause : s.error });
    return;
  }
  await (0, import_chunk_8j3h6yzg.Vn)().mkdir((0, import_path.dirname)(e)), await (0, import_chunk_q7qjcthc.yr)(e, (0, import_chunk_w578pjby._)(a, null, 2) + `
`);
}
function ezs(i) {
  if (Array.isArray(i)) return i.filter((e) => !!e && typeof e.dir === "string");
  if (i && typeof i.dir === "string") return [i];
  return [];
}
(0, import_chunk_adx6804h.B)();
var fXn = "scheduledDeletes", u = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ id: (0, import_chunk_adx6804h.n)().min(1), requestedAt: (0, import_chunk_adx6804h.aC)() }));
function f(i) {
  let e = i[fXn];
  return Array.isArray(e) ? e : [];
}
function xSa(i, e) {
  let r = { id: e, requestedAt: (/* @__PURE__ */ new Date()).toISOString() };
  i[fXn] = [...f(i), r];
}
async function Ijr(i) {
  let e = await uXn(void 0, i);
  return f(e).flatMap((r) => {
    let o = u().safeParse(r);
    return o.success ? [o.data] : [];
  });
}
async function PSa(i, e) {
  await zIt((r) => {
    let o = f(r), a = o.filter((d) => {
      let s = u().safeParse(d);
      return !(s.success && s.data.id === i.id && s.data.requestedAt === i.requestedAt);
    });
    if (a.length === o.length) return false;
    if (a.length === 0) delete r[fXn];
    else r[fXn] = a;
  }, void 0, e);
}
