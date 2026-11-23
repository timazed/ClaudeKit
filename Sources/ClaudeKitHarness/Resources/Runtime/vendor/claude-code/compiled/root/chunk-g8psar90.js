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
var chunk_g8psar90_exports = {};
__export(chunk_g8psar90_exports, {
  CKe: () => CKe,
  dba: () => dba,
  l8t: () => l8t
});
module.exports = __toCommonJS(chunk_g8psar90_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_09gzjq1e = require("/$bunfs/root/chunk-09gzjq1e.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_73gwqz1r = require("/$bunfs/root/chunk-73gwqz1r.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_crypto = require("crypto");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
var y = 1, re = 8 * import_chunk_6mfepmbb.Jp, ne = 9e5, P = "accepted-", E = ".jsonl", oe = ".seen", C = ".accepting-";
function l8t(e) {
  return e === null ? null : (0, import_chunk_ccm69jjy.Je)(e);
}
var ie = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ v: (0, import_chunk_adx6804h.v)(y), kind: (0, import_chunk_adx6804h.v)("file"), path: (0, import_chunk_adx6804h.n)(), text: (0, import_chunk_adx6804h.n)().nullable(), sha256: (0, import_chunk_adx6804h.n)().regex(/^[0-9a-f]{64}$/).nullable(), at: (0, import_chunk_adx6804h.n)(), by: (0, import_chunk_adx6804h.F)(["first_attach", "own_write", "person"]) })), ae = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ v: (0, import_chunk_adx6804h.v)(y), kind: (0, import_chunk_adx6804h.v)("folder"), key: (0, import_chunk_adx6804h.n)(), project: (0, import_chunk_adx6804h.n)().nullable(), local: (0, import_chunk_adx6804h.n)().nullable(), legacy: (0, import_chunk_adx6804h.n)().nullable(), at: (0, import_chunk_adx6804h.n)() }));
function I(e, l) {
  return (0, import_chunk_cg8dqz0a.x)() === "windows" ? L(e) === L(l) : e === l;
}
function L(e) {
  return e.replace(/^[a-z](?=:)/, (l) => l.toUpperCase());
}
function M(e) {
  return (0, import_chunk_p1ewvgeh.Yo)(e.normalize("NFC"));
}
function b(e, l = (0, import_chunk_sjqze7qg.PQ)()) {
  return (0, import_path.join)(l, `${P}settings-${(0, import_chunk_ccm69jjy.Je)(M((0, import_path.resolve)(e))).slice(0, 32)}${E}`);
}
function A(e, l = (0, import_chunk_sjqze7qg.PQ)()) {
  return (0, import_path.join)(l, `${P}folder-${(0, import_chunk_ccm69jjy.Je)(M(e)).slice(0, 32)}${E}`);
}
function X(e) {
  return `${e.slice(0, -E.length)}${oe}`;
}
function T(e) {
  try {
    return (0, import_chunk_73gwqz1r.RB)(e, re);
  } catch (l) {
    if (!(0, import_chunk_jv7av99m.J)(l)) throw l;
  }
  try {
    (0, import_fs.lstatSync)(X(e));
  } catch (l) {
    if ((0, import_chunk_jv7av99m.J)(l)) return;
    throw l;
  }
  throw Error("record aged out");
}
function j(e) {
  try {
    let l = /* @__PURE__ */ new Date();
    (0, import_fs.utimesSync)(e, l, l);
  } catch {
  }
}
function CKe(e = (0, import_chunk_sjqze7qg.PQ)()) {
  let l = (r, o) => {
    (0, import_fs.mkdirSync)(e, { recursive: true, mode: 448 });
    let t = X(r), u = false;
    try {
      (0, import_fs.writeFileSync)(t, "", { mode: 384, flag: "wx" }), u = true;
    } catch (g) {
      if ((0, import_chunk_jv7av99m.w)(g) !== "EEXIST") throw g;
    }
    try {
      (0, import_chunk_q7qjcthc.b3)(r, `${(0, import_chunk_w578pjby._)(o)}
`, 384);
    } catch (g) {
      let m;
      try {
        m = (0, import_fs.lstatSync)(r).isFile();
      } catch (H) {
        m = !(0, import_chunk_jv7av99m.J)(H);
      }
      if (u && !m) {
        try {
          (0, import_fs.unlinkSync)(t);
        } catch {
        }
        try {
          if ((0, import_fs.lstatSync)(r).isFile()) (0, import_fs.writeFileSync)(t, "", { mode: 384, flag: "wx" });
        } catch {
        }
      }
      throw g;
    }
    try {
      (0, import_fs.writeFileSync)(t, "", { mode: 384, flag: "wx" });
    } catch (g) {
      if ((0, import_chunk_jv7av99m.w)(g) !== "EEXIST") throw g;
    }
  }, s = /* @__PURE__ */ new Set(), d = (r, o, t) => {
    let u = (0, import_chunk_7cfjrnwy.Ir)(t);
    if (t.length > u.length + 1 && !s.has(o)) {
      s.add(o);
      try {
        (0, import_chunk_y53wbr8a.a)("tengu_remote_tool_serving", { event: (0, import_chunk_78g0060s.S)("accepted_record_has_tail"), record_kind: (0, import_chunk_78g0060s.f)(r) });
      } catch (g) {
        (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(g));
      }
    }
    return u;
  };
  return { file: (r) => {
    try {
      let o = T(b(r, e));
      if (o === void 0) return "none";
      let t = ie().safeParse((0, import_chunk_w578pjby.te)(d("file", r, o)));
      if (!t.success || !I((0, import_path.resolve)(t.data.path), (0, import_path.resolve)(r)) || l8t(t.data.text) !== t.data.sha256) return "unreadable";
      return { text: t.data.text, sha256: t.data.sha256 };
    } catch {
      return "unreadable";
    }
  }, recordFile: (r, o, t) => {
    if (o !== null && Buffer.byteLength(o) > import_chunk_6mfepmbb.Jp) throw Error("accepted settings text exceeds the settings size limit");
    l(b(r, e), { v: y, kind: "file", path: r, text: o, sha256: l8t(o), at: (/* @__PURE__ */ new Date()).toISOString(), by: t }), s.delete(r);
  }, folder: (r) => {
    try {
      let o = T(A(r, e));
      if (o === void 0) return "none";
      let t = ae().safeParse((0, import_chunk_w578pjby.te)(d("folder", r, o)));
      if (!t.success || !I(t.data.key, r)) return "unreadable";
      let { project: u, local: g, legacy: m } = t.data;
      return { project: u, local: g, legacy: m };
    } catch {
      return "unreadable";
    }
  }, recordFolder: (r, o) => {
    l(A(r, e), { v: y, kind: "folder", key: r, project: o.project, local: o.local, legacy: o.legacy, at: (/* @__PURE__ */ new Date()).toISOString() }), s.delete(r);
  }, noteServed: (r, o) => {
    j(A(r, e));
    for (let t of o) j(b(t, e));
  } };
}
async function ce(e) {
  try {
    let l = Date.now() - ne;
    for (let s of await (0, import_promises.readdir)(e)) {
      let d = s.lastIndexOf(C);
      if (d <= 0 || !/^[0-9a-f]{8}\.jsonl$/.test(s.slice(d + C.length))) continue;
      let r = (0, import_path.join)(e, s);
      if ((await (0, import_promises.lstat)(r)).mtimeMs < l) await (0, import_promises.rm)(r, { recursive: true, force: true });
    }
  } catch {
  }
}
async function dba(e, l) {
  let s = e.dir ?? (0, import_chunk_sjqze7qg.PQ)();
  await (0, import_promises.mkdir)(s, { recursive: true, mode: 448 }), await ce(s);
  let d = (0, import_path.join)(s, `${(0, import_path.basename)(e.name)}${C}${(0, import_crypto.randomBytes)(4).toString("hex")}${E}`);
  await (0, import_promises.writeFile)(d, e.text, { mode: 384, flag: "wx" });
  try {
    let r = await (0, import_promises.lstat)(d);
    if (await l(d)) return "blocked";
    let o;
    try {
      if ((0, import_chunk_cg8dqz0a.x)() === "windows" && (await (0, import_promises.lstat)(d)).isSymbolicLink()) return "tampered";
      o = await (0, import_promises.open)(d, import_fs.constants.O_RDONLY | import_chunk_09gzjq1e.Fo);
      let t = await o.stat();
      return t.isFile() && t.nlink === 1 && t.ino === r.ino && t.dev === r.dev && t.size === r.size && await o.readFile({ encoding: "utf8" }) === e.text ? "allowed" : "tampered";
    } catch (t) {
      if ((0, import_chunk_jv7av99m.J)(t) || (0, import_chunk_jv7av99m.w)(t) === "ELOOP") return "tampered";
      throw t;
    } finally {
      await o?.close().catch(() => {
      });
    }
  } finally {
    await (0, import_promises.rm)(d, { recursive: true, force: true }).catch(() => {
    });
  }
}
