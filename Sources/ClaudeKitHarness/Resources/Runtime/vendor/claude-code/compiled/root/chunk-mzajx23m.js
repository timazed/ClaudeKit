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
var chunk_mzajx23m_exports = {};
__export(chunk_mzajx23m_exports, {
  $rr: () => $rr,
  Brr: () => Brr,
  Ogt: () => Ogt,
  Q9r: () => Q9r,
  Urr: () => Urr,
  nFa: () => nFa,
  tFa: () => tFa
});
module.exports = __toCommonJS(chunk_mzajx23m_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_09gzjq1e = require("/$bunfs/root/chunk-09gzjq1e.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_khxw3ng0 = require("/$bunfs/root/chunk-khxw3ng0.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_bsw3jbbx = require("/$bunfs/root/chunk-bsw3jbbx.js");
var import_chunk_w2hrk3t1 = require("/$bunfs/root/chunk-w2hrk3t1.js");
var import_chunk_wm6xsfs2 = require("/$bunfs/root/chunk-wm6xsfs2.js");
var import_chunk_fwgyarbe = require("/$bunfs/root/chunk-fwgyarbe.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_jxja0v0z = require("/$bunfs/root/chunk-jxja0v0z.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
var import_promises2 = require("fs/promises");
var import_path2 = require("path");
var Q9r = 500, ce = 31457280, le = 1e4, fe = 4e3, ee = 8e3;
function N(e) {
  return { removed_count: 0, kept_changed_file_count: 0, kept_in_store_file_count: 0, failed_count: e === void 0 ? 0 : 1, whyFailed: e };
}
function B(e, n) {
  let o = AbortSignal.timeout(le);
  return (0, import_chunk_5appeerh.Tn)(e(o), o, () => Error("the pass is out of time")).catch(() => n);
}
function H(e, n) {
  return AbortSignal.any([e, AbortSignal.timeout(n)]);
}
function te(e, n) {
  return B(async (o) => {
    let r = N(), a = H(o, fe), t = H(o, ee), f, y = await ne(r, a, async () => {
      let _ = await _e(e, n, o);
      if (typeof _ === "string") {
        if (_ !== "none_served") O(r, _);
        return;
      }
      if (_.listCut) O(r, "records_page_cut");
      return f = _.facts, { records: _.records, filesystemId: f.filesystemId };
    });
    if (f !== void 0) await oe(r, o, await ue(r, t, y, f));
    return r;
  }, N("pass_deadline"));
}
function tFa(e) {
  return B(async (n) => {
    let o = N();
    return { pass: o, matches: await ne(o, H(n, ee), () => Promise.resolve(e)) };
  }, { pass: N("pass_deadline"), matches: [] });
}
function nFa(e) {
  return B(async (n) => {
    let o = N();
    return await oe(o, n, e), o;
  }, N("pass_deadline"));
}
async function ne(e, n, o) {
  let r = [], a = [];
  try {
    let t = await ie(e);
    if (t === void 0) return r;
    let f = ["", ...(await (0, import_promises2.readdir)(t, { withFileTypes: true })).filter((p) => p.isDirectory()).map((p) => p.name)], y = [];
    for (let p of f) {
      let d = await (0, import_chunk_w2hrk3t1.QF)((0, import_path2.join)(t, p), 0);
      if (d === "absent") continue;
      if (typeof d === "string") {
        O(e, d);
        continue;
      }
      a.push(d);
      for (let c of await (0, import_promises2.readdir)(d.at, { withFileTypes: true })) if (c.isFile()) y.push({ at: (0, import_path2.join)(d.at, c.name), path: import_path2.posix.join(import_chunk_6mfepmbb.S8, p, c.name) });
    }
    let _ = y.length === 0 ? void 0 : await o();
    if (_ === void 0) return r;
    let { hashStandingFile: g } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-21191a82.js")));
    for (let { at: p, path: d } of y) {
      let c = (0, import_chunk_ccm69jjy.Je)(`${_.filesystemId}
${d}`), F = _.records.filter((D) => D.d === c);
      if (F.length === 0) continue;
      if (n.aborted) {
        O(e, "pass_deadline");
        break;
      }
      let S = await (0, import_promises2.lstat)(p, { bigint: true }).catch(() => {
        return;
      });
      if (S === void 0) {
        O(e, "look_failed");
        continue;
      }
      if (!S.isFile() || S.size > ce) {
        e.kept_changed_file_count++;
        continue;
      }
      let k = await (0, import_chunk_5appeerh.Tn)(g(p, S), n, () => Error("the look is out of time")).catch(() => "timed_out");
      if (typeof k === "string") {
        O(e, `hash_${k}`);
        continue;
      }
      if (!F.some((D) => D.md5 === k.md5)) {
        e.kept_changed_file_count++;
        continue;
      }
      let { dev: v, ino: P, nlink: U, size: C, mtimeNs: M, ctimeNs: L } = k.opened;
      r.push({ path: d, seen: (0, import_chunk_khxw3ng0.er)({ dev: v, ino: P, nlink: U, size: C, mtimeNs: M, ctimeNs: L }, String) });
    }
  } catch (t) {
    (0, import_chunk_k449cc64.i)(t), O(e, "staged_pass_threw");
  } finally {
    await Promise.all(a.map((t) => t.release()));
  }
  return r;
}
async function ue(e, n, o, r) {
  let a = [];
  for (let t of o) {
    if (n.aborted) {
      O(e, "pass_deadline");
      break;
    }
    let f = await r.holdsAt(t.path, { signal: n });
    if (f === "a_file") e.kept_in_store_file_count++;
    else if (f === "nothing") a.push(t);
    else O(e, "store_gave_no_answer");
  }
  return a;
}
async function oe(e, n, o) {
  let r = /* @__PURE__ */ new Map();
  try {
    let a = o.length === 0 ? void 0 : await ie(e);
    if (a === void 0) {
      e.kept_changed_file_count += o.length;
      return;
    }
    let { sameFileUntouched: t } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-21191a82.js")));
    for (let { path: f, seen: y } of o) {
      let [_, ...g] = f.split("/").slice(1), p = g.pop(), d = g.pop() ?? "";
      if (`/${_}` !== import_chunk_6mfepmbb.S8 || p === void 0 || g.length > 0 || import_path2.posix.join(import_chunk_6mfepmbb.S8, d, p) !== f) {
        O(e, "no_staged_path");
        continue;
      }
      let c = r.get(d);
      if (c === void 0) {
        c = await (0, import_chunk_w2hrk3t1.QF)((0, import_path2.join)(a, d), 0), r.set(d, c);
        let v = typeof c === "string" ? c : await (0, import_chunk_w2hrk3t1.PDe)(c);
        if (typeof c !== "string" && v !== true) await c.release(), c = v, r.set(d, c);
      }
      if (c === "absent") {
        e.kept_changed_file_count++;
        continue;
      }
      if (typeof c === "string") {
        O(e, c);
        continue;
      }
      let F = (0, import_path2.join)(c.at, p), S = await (0, import_promises2.lstat)(F).catch(() => {
        return;
      }), k = await (0, import_promises2.lstat)(F, { bigint: true }).catch(() => {
        return;
      });
      if (S === void 0 || k === void 0 || !t(k, (0, import_chunk_khxw3ng0.er)(y, BigInt))) e.kept_changed_file_count++;
      else if (n.aborted) {
        O(e, "pass_deadline");
        break;
      } else if (await (0, import_chunk_bsw3jbbx.EUe)(F, S)) e.removed_count++;
      else O(e, "unlink_failed");
    }
  } catch (a) {
    (0, import_chunk_k449cc64.i)(a), O(e, "staged_pass_threw");
  } finally {
    await Promise.all([...r.values()].map((a) => typeof a === "string" ? void 0 : a.release()));
  }
}
function ie(e) {
  return (0, import_promises2.realpath)((0, import_chunk_6mfepmbb.eP)()).catch((n) => {
    if ((0, import_chunk_jv7av99m.w)(n) !== "ENOENT") O(e, (0, import_chunk_jv7av99m.Cr)(n) ?? "unknown");
    return;
  });
}
async function _e(e, n, o) {
  let r = Object.entries((0, import_chunk_ma3kja9f.T)(n) ? n : {}).flatMap(([f, y]) => e.has(f) && Array.isArray(y) ? y.flatMap((_) => (0, import_chunk_ma3kja9f.T)(_) && typeof _.md5 === "string" && /^[0-9a-f]{32}$/.test(_.md5) && typeof _.path_sha256 === "string" && import_chunk_ccm69jjy.fm.test(_.path_sha256) ? [{ md5: _.md5, d: _.path_sha256 }] : []) : []);
  if (r.length === 0) return "none_served";
  let { openFilestoreReader: a } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-vrd3zykg.js"))), t = await a(o);
  if (!t.ok) return "no_store_credential";
  return { records: r.slice(0, Q9r), listCut: r.length > Q9r, facts: t.facts };
}
function O(e, n) {
  e.failed_count++, e.whyFailed = n;
}
var X = ".saved-uploads.jsonl", he = /^[0-9a-f]{8}-image\.[a-z]+$/, ge = 1048576, we = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(Z|[+-]\d\d:\d\d)$/, ye = 864e5, Se = 3e5, ke = 6e5, be = 2e3;
function Ogt() {
  return ((0, import_chunk_6e68m1dj.hn)() || import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE === true && import_chunk_c203g5kd.s.CLAUDE_CODE_ENVIRONMENT_KIND === "anthropic_cloud") && import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE !== "self_hosted" && (0, import_chunk_f9x2f6cx.HI)() === null && !(0, import_chunk_f9x2f6cx.Y)();
}
async function J(e) {
  let n = await (0, import_promises.open)((0, import_path.join)(e, X), import_chunk_09gzjq1e.Fo | import_chunk_jxja0v0z.cr).catch((o) => (0, import_chunk_jv7av99m.w)(o) === "ENOENT" ? "" : void 0);
  if (typeof n !== "object") return n;
  try {
    let o = await n.stat(), r = o.isFile() ? await (0, import_chunk_xfj2cwfv.IE)(n, ge, o.size) : void 0;
    return r === void 0 || r.overLimit ? void 0 : r.bytes.toString("utf8");
  } finally {
    await n.close();
  }
}
async function $rr(e, { path: n, sha256: o, size: r }, a = false) {
  try {
    if (!Ogt() || (0, import_path.basename)(n) === X) return false;
    let t = a ? await (0, import_chunk_w2hrk3t1.QF)((0, import_path.dirname)(n), 0) : await (0, import_chunk_w2hrk3t1.oAe)((0, import_path.dirname)(n));
    if (typeof t === "string") return (0, import_chunk_cqa9hrgx.l)("bridge_attachment_deleted_copy", t), false;
    try {
      let f = await J(t.at);
      if (f === void 0) return (0, import_chunk_cqa9hrgx.l)("bridge_attachment_deleted_copy", "record_unreadable"), false;
      let y = (0, import_chunk_w578pjby.fP)({ name: (0, import_path.basename)(n), file_uuid: e, sha256: o, size: r });
      if (f.includes(y)) return true;
      let _ = await (0, import_promises.open)((0, import_path.join)(t.at, X), import_fs.constants.O_WRONLY | import_fs.constants.O_APPEND | import_fs.constants.O_CREAT | import_chunk_09gzjq1e.Fo | import_chunk_jxja0v0z.cr, 384);
      try {
        await _.appendFile(y);
      } finally {
        await _.close();
      }
      return true;
    } finally {
      await t.release();
    }
  } catch (t) {
    return (0, import_chunk_k449cc64.i)(t), (0, import_chunk_cqa9hrgx.l)("bridge_attachment_deleted_copy", "not_recorded"), false;
  }
}
async function Urr(e) {
  let n = [];
  try {
    if (!Ogt()) return n;
    let o = new Set(e.map((r) => r.toLowerCase()));
    for (let r of (0, import_chunk_fwgyarbe.Fae)()) {
      let a = (0, import_path.join)(r, (0, import_chunk_f9x2f6cx.W)()), t = await (0, import_chunk_w2hrk3t1.QF)(a, 0);
      if (typeof t === "string") {
        if (t !== "absent") (0, import_chunk_cqa9hrgx.l)("bridge_attachment_deleted_copy", t);
        continue;
      }
      try {
        let f = await J(t.at);
        if (f === void 0) {
          (0, import_chunk_cqa9hrgx.l)("bridge_attachment_deleted_copy", "record_unreadable");
          continue;
        }
        let y = f.split(`
`).flatMap((g) => {
          let p = (0, import_chunk_0jve1fep.et)(g, false);
          return (0, import_chunk_ma3kja9f.T)(p) && typeof p.name === "string" && typeof p.file_uuid === "string" ? [{ name: p.name, id: p.file_uuid.toLowerCase() }] : [];
        }), _ = new Set(y.filter(({ id: g }) => !o.has(g)).map(({ name: g }) => g));
        for (let { name: g, id: p } of y) if (o.has(p) && !_.has(g) && (0, import_path.basename)(g) === g && !g.endsWith(".") && (g.toLowerCase().startsWith(`${p.slice(0, 8).replace(/[^a-z0-9_-]/g, "_")}-`) || he.test(g))) n.push({ file_uuid: p, path: (0, import_path.join)(a, g) });
      } finally {
        await t.release();
      }
    }
  } catch (o) {
    (0, import_chunk_k449cc64.i)(o), (0, import_chunk_cqa9hrgx.m)("bridge_attachment_deleted_copy", "threw");
  }
  return n;
}
async function Brr(e, n) {
  let o = n?.report ?? Oe, r = /* @__PURE__ */ new Set();
  try {
    let a = e?.internal?.removed_chat_files;
    if (!(0, import_chunk_ma3kja9f.T)(a) || !Ogt()) return r;
    if (Object.keys(a).length === 0) return r;
    let { deleted: t, tooOld: f, unknown: y, whyUnknown: _ } = Ee(a), g = true, p = false;
    if (n === void 0) {
      if (await (0, import_chunk_5appeerh.me)((0, import_chunk_865at33z.ci)().catch(() => null), be), g = (0, import_chunk_865at33z.b)("tengu_cozy_hamming", false) === true, p = (0, import_chunk_865at33z.b)("tengu_mossy_kepler", false) === true, !g && !p) {
        if ((0, import_chunk_865at33z.Lc)() && !(0, import_chunk_865at33z.ni)()) o("sad", "flags_not_fetched");
        return r;
      }
    }
    if (g) r = t;
    let d = { listed_count: t.size, too_old_count: f.size, recorded_count: 0, removed_count: 0, kept_changed_file_count: 0, staged_removed_count: 0, kept_in_store_file_count: 0, failed_count: y.size }, c = _, F = n === void 0 ? (0, import_chunk_fwgyarbe.Fae)().map((S) => (0, import_path.join)(S, (0, import_chunk_f9x2f6cx.W)())) : [n.folder];
    for (let S of g && t.size > 0 ? F : []) {
      let k = await (0, import_chunk_w2hrk3t1.QF)(S, 0);
      if (k === "absent") continue;
      if (typeof k === "string") {
        d.failed_count++, c = k;
        continue;
      }
      try {
        let v = (await J(k.at))?.split(`
`).filter((h) => h !== ""), P = (v ?? []).flatMap((h) => {
          let E = (0, import_chunk_0jve1fep.et)(h, false);
          return (0, import_chunk_ma3kja9f.T)(E) && typeof E.name === "string" && typeof E.file_uuid === "string" ? [{ name: E.name, file_uuid: E.file_uuid, sha256: E.sha256, size: E.size }] : [];
        });
        if (P.length !== v?.length) {
          d.failed_count++, c = "record_unreadable";
          continue;
        }
        let U = new Set(P.filter((h) => !t.has(h.file_uuid.toLowerCase())).map((h) => h.name)), C = new Set(await (0, import_promises.readdir)(k.at)), M = [], L = new Set(P.map((h) => h.name));
        for (let h of L) {
          if (U.has(h)) continue;
          if (d.recorded_count++, !C.has(h)) continue;
          let E = (0, import_path.join)(k.at, h), R = await (0, import_promises.lstat)(E).catch(() => {
            return;
          });
          if (R === void 0) {
            d.failed_count++, c = "look_failed";
            continue;
          }
          let I = P.filter((z) => z.name === h && z.size === R.size), Z = R.isFile() && I.length > 0 ? await (0, import_chunk_wm6xsfs2.Htt)(E, R.size, R) : null;
          if (Z === null || !I.some((z) => z.sha256 === Z)) {
            d.kept_changed_file_count++;
            continue;
          }
          M.push({ at: E, stands: R });
        }
        let D = [...t].flatMap((h) => [`${(0, import_chunk_fwgyarbe.Hwt)(h)}-`, ...h.length >= 8 ? [`${h.slice(0, 8).replace(/[^a-z0-9_-]/g, "_")}-`] : []]);
        for (let h of C) {
          if (L.has(h) || !(n !== void 0 && h.startsWith(import_chunk_6mfepmbb.r2) || (0, import_chunk_q7qjcthc.R_n)(h) && D.some((I) => h.toLowerCase().startsWith(I)))) continue;
          let E = (0, import_path.join)(k.at, h), R = await (0, import_promises.lstat)(E).catch(() => {
            return;
          });
          if (R?.isFile() === true && R.mtimeMs < Date.now() - ke) M.push({ at: E, stands: R });
        }
        let j;
        for (let { at: h, stands: E } of M) if (j ??= await (0, import_chunk_w2hrk3t1.PDe)(k), j !== true) d.failed_count++, c = j;
        else if (await (0, import_chunk_bsw3jbbx.EUe)(h, E)) d.removed_count++;
        else d.failed_count++, c = "unlink_failed";
      } finally {
        await k.release();
      }
    }
    if (p && t.size > 0) {
      let S = await te(t, e?.internal?.removed_chat_file_copies);
      d.staged_removed_count = S.removed_count, d.kept_in_store_file_count = S.kept_in_store_file_count, d.kept_changed_file_count += S.kept_changed_file_count, d.failed_count += S.failed_count, c = S.whyFailed ?? c;
    }
    if (d.failed_count > 0) o("sad", c, d);
    else o("ok", void 0, d);
  } catch (a) {
    (0, import_chunk_k449cc64.i)(a), o("bad", "threw");
  }
  return r;
}
function Ee(e) {
  let n = Date.now(), o = Object.keys(e).map((t) => {
    let f = e[t];
    return { id: t.toLowerCase(), age: typeof f === "string" && we.test(f) ? n - Date.parse(f) : Number.NaN };
  }), r = new Set(o.filter(({ age: t }) => !(t >= -Se)).map(({ id: t }) => t)), a = new Set(o.filter(({ id: t, age: f }) => f > ye && !r.has(t)).map(({ id: t }) => t));
  return { deleted: new Set(o.map(({ id: t }) => t).filter((t) => !r.has(t) && !a.has(t))), tooOld: a, unknown: r, whyUnknown: o.some(({ age: t }) => Number.isNaN(t)) ? "list_value_unknown" : "check_ahead_of_clock" };
}
function Oe(e, n, o) {
  switch (e) {
    case "ok":
      (0, import_chunk_cqa9hrgx.u)("bridge_attachment_deleted_copy", o);
      break;
    case "sad":
      (0, import_chunk_cqa9hrgx.l)("bridge_attachment_deleted_copy", n ?? "unknown", o);
      break;
    case "bad":
      (0, import_chunk_cqa9hrgx.m)("bridge_attachment_deleted_copy", n ?? "unknown");
      break;
  }
}
