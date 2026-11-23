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
var chunk_n1eez895_exports = {};
__export(chunk_n1eez895_exports, {
  JZl: () => JZl,
  PEl: () => PEl,
  QZl: () => QZl,
  Sql: () => Sql,
  ZZl: () => ZZl,
  Zko: () => Zko,
  bql: () => bql,
  eed: () => eed,
  sks: () => sks,
  wql: () => wql,
  xji: () => xji,
  yql: () => yql
});
module.exports = __toCommonJS(chunk_n1eez895_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_dc6nb19r = require("/$bunfs/root/chunk-dc6nb19r.js");
var import_chunk_w71cxznt = require("/$bunfs/root/chunk-w71cxznt.js");
var import_chunk_7e1w6rv3 = require("/$bunfs/root/chunk-7e1w6rv3.js");
var import_chunk_jxja0v0z = require("/$bunfs/root/chunk-jxja0v0z.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_os = require("os");
var import_util = require("util");
class xji extends Error {
  code;
  constructor(e) {
    super("the new file could not be given its owner", { cause: e });
    this.code = (0, import_chunk_jv7av99m.w)(e);
  }
}
var yql = ["unsupported_platform", "no_procfs", "no_ffi", "nofollow_any_unenforced", "remote_volume", "unstable_identity", "bring_up_failed", "no_hard_links"];
function JZl(e) {
  return yql.includes(e);
}
function wn(e) {
  switch (e) {
    case "WORKING_PARENT_NOT_DIRECTORY":
      return Error("a destination ancestor is a symlink or not a directory");
    case "WORKING_NAME_NOT_PLAIN":
      return Error("not a plain file name here");
    case "WORKING_FILE_HELD":
      return Error("another program holds the file");
    case "WORKING_LIST_UNSUPPORTED":
      return Error("this backend cannot list a held directory, or cannot stop at the bound that was set");
    case "WORKING_LIST_TOO_LONG":
      return Error("the directory holds more names than may be listed");
    case "WORKING_DIRECTORY_MOVED":
      return Error("the operation succeeded, but a directory that it used may have been moved meanwhile: what it made or moved may lie outside the tree, or have come from outside it");
    case "WORKING_DIRECTORY_MOVED_UNDONE":
      return Error("a directory may have been moved, so the operation made nothing, or what it made was removed again");
    case "WORKING_LINK_UNSUPPORTED":
      return Error("this backend cannot make or read a symbolic link in a held directory");
  }
}
function gn() {
  let e = Error("tree anchor root is not a canonical path");
  return e.code = "WORKING_ROOT_NOT_CANONICAL", e;
}
function z(e) {
  let a = wn(e);
  return a.code = e, a;
}
var qe = Symbol("createsInHeldDirectoryCheckedByPath"), _e = 536870912, Dn = 2097152, K = import_fs.constants.O_RDONLY | import_fs.constants.O_DIRECTORY | import_fs.constants.O_NOFOLLOW | import_chunk_jxja0v0z.cr, ae = import_fs.constants.O_WRONLY | import_fs.constants.O_CREAT | import_fs.constants.O_EXCL | import_chunk_jxja0v0z.cr, bn = 511, pn = 1e7, Pn = 512, kn = 3, On = 16, Ke = Error("removeTree stopped after a failure");
function ce(e, a) {
  let l = e.split("/");
  if (e.includes("\0") || l.some((c) => c === "" || c === "." || c === ".." || a !== "/" && c.includes(a))) throw Error("anchored path must be relative, of plain segments");
  return l;
}
function he(e, a) {
  let l = ce(e, a);
  return { dirs: l.slice(0, -1), leaf: l.at(-1) ?? "" };
}
function Ye(e) {
  if ((e & import_fs.constants.O_CREAT) !== 0) throw Error("anchored open never creates");
  return e;
}
function q(e) {
  let a = (0, import_chunk_jv7av99m.w)(e);
  return a === "ENOTDIR" || a === "ELOOP" ? z("WORKING_PARENT_NOT_DIRECTORY") : e;
}
var oe = { found: "same" };
function we(e, a) {
  return e.ino !== 0n && e.dev === a.dev && e.ino === a.ino;
}
async function vn(e, a, l, c, g) {
  let n = null;
  try {
    for (let [m, k] of c.entries()) {
      let D = n ?? e.getHeldDir(l), d = await (m < c.length - 1 && e.openDirToPass !== void 0 ? e.openDirToPass(D, k, g) : e.openDir(D, k, g));
      if (n !== null) await e.closeDir(n);
      n = d;
    }
  } catch {
    if (n !== null) await e.closeDir(n);
    return null;
  } finally {
    await l.close();
  }
  return n === null ? null : e.holdOpenedDir(n, a.path.join(l.realPath, ...c));
}
function sks(e, a, l, c, g, n, m = [], k) {
  let { sep: D } = a.path, d = void 0, h = void 0, O = void 0, v = void 0, G = false, Z = false, { renameNoReplace: x, renameInNoReplace: L } = n, j = null, N = () => j ??= l.close(), u = /* @__PURE__ */ new WeakMap(), y = async (r, o, s = false) => {
    let f = o === "" ? [] : ce(o, D), b = await n.hold(r), P = b === null || f.length === 0 ? b : await vn(n, a, b, f, s);
    if (P === null) return null;
    let E = null, T = () => E ??= P.close(), A = { realPath: P.realPath, get closed() {
      return E !== null;
    }, stat: async () => {
      if (E !== null) throw Error("held directory is closed");
      return P.stat();
    }, close: T, [Symbol.asyncDispose]: T };
    return u.set(A, P), A;
  }, p = (r) => {
    let o = u.get(r);
    if (o === void 0) throw Error("held directory belongs to another anchor");
    if (r.closed) throw Error("held directory is closed");
    return o;
  }, I = (r) => r === c ? Promise.resolve() : n.closeDir(r), Y = async (r, o, s, f) => {
    try {
      return await n.openDir(r, o);
    } catch (b) {
      if (s === null || !(0, import_chunk_jv7av99m.J)(b)) throw q(b);
      if (await n.mkdir(r, o, s).then(() => true, (E) => {
        if ((0, import_chunk_jv7av99m.w)(E) !== "EEXIST") throw E;
        return false;
      })) await ee("mkdir", { to: { dir: r, dirs: f } }, () => n.rmdir(r, o));
      return n.openDir(r, o).catch((E) => {
        throw q(E);
      });
    }
  }, F = () => {
    if (j !== null) throw Error("tree anchor is closed");
  }, se = async (r, o) => {
    if (n.list === void 0) throw z("WORKING_LIST_UNSUPPORTED");
    let s = typeof o === "object" ? o.first : o, f = await n.list(r, s);
    if (s !== void 0 && !(f.length <= s)) {
      if (typeof o === "object" && s >= 0) return Ge(f.slice(0, s), D);
      throw z("WORKING_LIST_TOO_LONG");
    }
    return Ge(f, D);
  }, V = async (r, o) => {
    F();
    let s = c;
    try {
      for (let [f, b] of r.entries()) {
        F();
        let P = await Y(s, b, o, r.slice(0, f));
        await I(s), s = P;
      }
      return s;
    } catch (f) {
      throw await I(s), f;
    }
  }, B = async (r, o) => {
    let { dirs: s, leaf: f } = he(r, D), b = await V(s, null);
    try {
      return F(), await o(b, f, s);
    } finally {
      await I(b);
    }
  }, De = async (r, o, s) => {
    let f = he(o, D);
    return he(r, D).dirs.join("/") === f.dirs.join("/") ? B(r, (b, P, E) => s({ dir: b, leaf: P, dirs: E }, { dir: b, leaf: f.leaf, dirs: E })) : B(r, (b, P, E) => B(o, (T, A, X) => s({ dir: b, leaf: P, dirs: E }, { dir: T, leaf: A, dirs: X })));
  }, be = (r) => (0, import_chunk_jv7av99m.J)(r) ? { found: "missing" } : (0, import_chunk_jv7av99m.w)(r) === "WORKING_PARENT_NOT_DIRECTORY" ? { found: "replaced" } : { found: "check_failed", checkError: r }, Ne = async (r, o) => {
    let s = await V(r, null).then((f) => ({ now: f }), be);
    if (!("now" in s)) return s;
    try {
      return await o(s.now);
    } catch (f) {
      return be(f);
    } finally {
      await I(s.now).catch(() => {
      });
    }
  }, pe = (r) => n.holdOpenedDir(r, "").stat(), Re = (r, o) => r.dev !== o.dev ? { found: "replaced", differs: "device" } : r.ino !== o.ino ? { found: "replaced", differs: "inode" } : oe, Be = async ({ dir: r, dirs: o }) => o.length === 0 ? oe : Ne(o, async (s) => Re(await pe(r), await pe(s))), He = async ({ dir: r, dirs: o }) => oe, fe = null, Pe = async ({ to: r, from: o }) => null, me = (r, o, s) => {
    try {
    } catch (f) {
      (0, import_chunk_k449cc64.i)(f);
    }
    return z(s ? "WORKING_DIRECTORY_MOVED_UNDONE" : "WORKING_DIRECTORY_MOVED");
  }, Un = async (r) => {
    return;
  }, ee = async (r, o, s) => {
    let f = await Pe(o);
    if (f === null) return;
    throw me(r, f, s !== void 0 && await s(f.side).then(() => true, () => false));
  }, Ae = async ({ dir: r, leaf: o }, s) => {
    if (!we(await n.lstat(r, o), await s())) throw Error("another file has the name");
    await n.unlink(r, o);
  }, Ce = (r, o, s, f, b) => B(r, async (P, E, T) => {
    let A = null, X = false, ke = async (ne) => {
      let le = async (te) => ne !== null && we(ne, await n.lstat(te, E));
      if (fe !== null && !await fe()) throw A = { found: "replaced", side: "destination", rel: T.join("/") }, X = await le(P).catch(() => false), Error("the root is not in its place");
      let re = oe, de = re.found === "same" || (await Ne(T, async (te) => ({ found: await le(te) ? "same" : "replaced" }))).found === "same" ? await He({ dir: P, dirs: T }) : re;
      if (de.found === "same") return;
      throw A = { ...de, side: "destination", rel: T.join("/") }, X = await le(P).catch(() => false), Error("the file is not at its name");
    };
    await n.create(P, E, [...m, ...T], o, s, f, b, void 0).catch(async (ne) => {
      throw A === null ? ne : me("create", A, X && await n.lstat(P, E).then(() => false, import_chunk_jv7av99m.J));
    });
  }), Te = (r) => async (o, s) => {
    await n.link(o.dir, o.leaf, s.dir, s.leaf), await ee("link", { to: s, from: o }, async (f) => {
      let b = Ae(s, () => n.lstat(o.dir, o.leaf));
      if (await b.catch(() => {
      }), r && f !== "destination") await n.unlink(o.dir, o.leaf);
      await b;
    });
  }, Fe = (r, o, s) => B(s, async (f, b, P) => {
    await n.linkIn(p(r), U(o), f, b), await ee("link", { to: { dir: f, dirs: P } }, () => Ae({ dir: f, leaf: b, dirs: P }, () => n.statIn(p(r), U(o))));
  }), rn = async (r, o) => {
    await n.rename(r.dir, r.leaf, o.dir, o.leaf), await ee("rename", { to: o, from: r });
  }, Se = async (r, o, s) => s();
  return { backend: e, realRoot: g, createsInHeldDirectory: n.createsInHeldDirectory !== false, heldCreateRefusal: n.heldCreateRefusal ?? null, ...false, checksCreatedFiles: false, mkdirp: async (r, o = bn) => I(await V(ce(r, D), o)), create: (r, o, s) => Ce(r, o, s, false), createSynced: (r, o, s, f) => Ce(r, o, s, true, f), createAndOpen: (r, o) => B(r, (s, f, b) => n.createAndOpen(s, f, [...m, ...b], o)), link: (r, o) => De(r, o, Te(false)), rename: (r, o) => De(r, o, rn), placeCreated: (r, o) => De(r, o, x === void 0 ? Te(true) : (s, f) => Se({ to: f, from: s }, f, (b) => x(s.dir, s.leaf, f.dir, f.leaf, b))), symlink: (r, o) => B(o, (s, f) => n.symlink(r, s, f)), readlink: (r) => B(r, n.readlink), unlink: (r) => B(r, n.unlink), rmdir: (r) => B(r, n.rmdir), list: async (r, o) => {
    let s = r === "" ? [] : ce(r, D), f = await V(s, null);
    try {
      return F(), await se(f, o);
    } finally {
      await I(f);
    }
  }, removeTree: (r, { keep: o, onDeleted: s } = {}) => B(r, async (f, b, P) => {
    if (o !== void 0) U(o);
    let E = o === void 0 ? null : Buffer.from(o), T = (_) => E !== null && (typeof _ === "string" ? _ === o : _.equals(E)), { bytes: A } = n, X = (_, C) => typeof C === "string" ? n.unlink(_, C) : A.unlink(_, C), ke = (_, C) => typeof C === "string" ? n.rmdir(_, C) : A.rmdir(_, C), ne = (_, C) => typeof C === "string" ? n.openDir(_, C) : A.openDir(_, C), le = async (_) => A === void 0 ? se(_) : In(await A.list(_), D), re = async (_, C) => {
      try {
        await X(_, C);
      } catch (W) {
        let ie = (0, import_chunk_jv7av99m.w)(W);
        if (ie === "ENOENT") return "gone";
        if (ie === "EISDIR" || ie === "EPERM") return "directory";
        throw W;
      }
      return s?.(), "gone";
    }, de = pn, te = async (_, C, W, ie, Le = false) => {
      for (let Me = 0; ; Me++) {
        F();
        let ve = (await le(W)).filter((R) => !(Le && T(R)));
        if (de -= ve.length, de < 0) throw Object.assign(Error("directory too large to remove: too many entries"), { code: "E2BIG" });
        if (ie.length >= Pn) throw Object.assign(Error("directory too deep to remove"), { code: "ENAMETOOLONG" });
        let xe = false, tn = (0, import_chunk_w71cxznt.Rl)(On, async (R) => {
          if (xe) throw Ke;
          F();
          try {
            return await re(W, R);
          } catch (M) {
            throw xe = true, M;
          }
        }), We = await Promise.allSettled(ve.map((R) => tn(R))), Ie = We.filter((R) => R.status === "rejected");
        if (Ie.length > 0) throw (Ie.find((R) => R.reason !== Ke) ?? Ie[0]).reason;
        let on = ve.filter((R, M) => {
          let Ue = We[M];
          return Ue?.status === "fulfilled" && Ue.value === "directory";
        });
        for (let R of on) {
          let M = await ne(W, R).catch(() => null);
          if (M === null) {
            if (await re(W, R) === "directory") await ke(W, R), s?.();
            continue;
          }
          try {
            await te(W, R, M, [...ie, R]);
          } finally {
            await n.closeDir(M);
          }
        }
        if (Le && E !== null) return;
        try {
          await ke(_, C), s?.();
          return;
        } catch (R) {
          let M = (0, import_chunk_jv7av99m.w)(R);
          if (M === "ENOENT") return;
          if (M !== "ENOTEMPTY" || Me >= kn) throw R;
        }
      }
    }, Oe = await n.openDir(f, b).catch(async (_) => {
      if ((0, import_chunk_jv7av99m.J)(_)) return null;
      if (E !== null) throw q(_);
      if (await re(f, b) === "gone") return null;
      throw q(_);
    });
    if (Oe === null) return;
    try {
      await te(f, b, Oe, [...P, b], true);
    } finally {
      await n.closeDir(Oe);
    }
  }), lstat: async (r) => {
    if (r !== "") return B(r, n.lstat);
    return F(), l.stat();
  }, open: async (r, o) => {
    let s = Ye(o);
    if (n.openBeneath !== void 0) {
      let { dirs: f, leaf: b } = he(r, D);
      return F(), n.openBeneath([...m, ...f], b, s);
    }
    return B(r, (f, b, P) => n.open(f, b, [...m, ...P], s));
  }, anchorBeneath: async (r) => {
    let o = ce(r, D), s = n.holdOpenedDir(await V(o, null), a.path.join(g, ...o));
    return sks(e, a, s, n.getHeldDir(s), s.realPath, n.forAnchorBeneath ?? n, [...m, ...o], k);
  }, holdOutside: y, moveOut: (r, o, s) => B(r, async (f, b, P) => {
    await n.renameOut(f, b, p(o), U(s)), await ee("rename", { from: { dir: f, dirs: P } });
  }), moveIn: (r, o, s) => B(s, async (f, b, P) => {
    await n.renameIn(p(r), U(o), f, b), await ee("rename", { to: { dir: f, dirs: P } });
  }), linkIn: Fe, placeCreatedIn: (r, o, s) => L === void 0 ? Fe(r, o, s) : B(s, (f, b, P) => Se({ to: { dir: f, dirs: P } }, { dir: f, leaf: b, dirs: P }, (E) => L(p(r), U(o), f, b, E))), statIn: async (r, o) => n.statIn(p(r), U(o)), openIn: async (r, o, s) => n.openIn(p(r), U(o), Ye(s)), unlinkIn: async (r, o) => n.unlinkIn(p(r), U(o)), close: N, [Symbol.asyncDispose]: N };
}
function Ge(e, a) {
  return e.filter((l) => ze(l, a));
}
function In(e, a) {
  return e.filter((l) => ze(l.toString("latin1"), a));
}
function ze(e, a) {
  return e !== "" && e !== "." && e !== ".." && !e.includes("/") && !e.includes(a) && !e.includes("\0");
}
function U(e) {
  if (e === "" || e === "." || e === ".." || e.includes("/") || e.includes("\\") || e.includes("\0")) throw Error("a held-directory leaf must be one plain name");
  return e;
}
async function Qe(e, a) {
  let { fs: l } = e, c = await l.realpath(a).catch(() => null);
  if (c === null) return null;
  let g = await l.open(c, K).catch(() => null);
  if (g === null) return null;
  try {
    let [n, m] = await Promise.all([g.stat({ bigint: true }), l.lstat(c, { bigint: true })]);
    if (!n.isDirectory() || !m.isDirectory() || n.ino === 0n || n.dev !== m.dev || n.ino !== m.ino) return await g.close().catch(() => {
    }), null;
  } catch {
    return await g.close().catch(() => {
    }), null;
  }
  return { realPath: c, dir: g, stat: () => g.stat({ bigint: true }), close: () => g.close() };
}
function Ze(e) {
  return { stat: () => e.stat({ bigint: true }), close: () => e.close() };
}
async function En(e, a, l, c, g, n, m) {
  let k = (D, d) => e.chown(D, d).catch((h) => {
    throw new xji(h);
  });
  try {
    if (await e.writeFile(a), n !== void 0 && n.to.gid !== n.from.gid) await k(n.from.uid, n.to.gid);
    if (await e.chmod(l), n !== void 0 && n.to.uid !== n.from.uid) await k(n.to.uid, n.to.gid);
    if (c) await e.sync();
    await m();
  } catch (D) {
    throw await g().catch(() => {
    }), await e.close().catch(() => {
    }), D;
  }
  try {
    await e.close();
  } catch (D) {
    throw await g().catch(() => {
    }), D;
  }
}
var en = (e, a) => a === void 0 ? e : e & 448;
async function PEl(e, a, l, c, g, n = false, m, k = () => Promise.resolve()) {
  let { made: D, lookError: d } = await e.stat({ bigint: true }).then((v) => ({ made: v, lookError: void 0 }), (v) => ({ made: null, lookError: v })), h = async () => {
    let v = await c();
    if (D !== null && D.ino !== 0n && v !== null && v.dev === D.dev && v.ino === D.ino) await g();
  };
  if (m !== void 0 && D === null) throw await e.close().catch(() => {
  }), new xji(d);
  let O = D && { uid: Number(D.uid), gid: Number(D.gid) };
  return En(e, a, l, n, h, m === void 0 || O === null ? void 0 : { from: O, to: { ...O, ...m } }, () => k(D));
}
async function je(e, a, l) {
  let [c, g] = await Promise.all([e.fs.lstat(l, { bigint: true }), a.stat({ bigint: true })]);
  return c.dev === g.dev && c.ino === g.ino && g.ino !== 0n;
}
async function _n(e, a) {
  try {
    let [l, c] = await Promise.all([e.fs.lstat(`/proc/self/fd/${a.fd}/.`, { bigint: true }), a.stat({ bigint: true })]);
    return l.dev === c.dev && l.ino === c.ino && c.ino !== 0n;
  } catch (l) {
    let c = (0, import_chunk_jv7av99m.w)(l);
    if (c === "ENOENT" || c === "EACCES" || c === "EPERM") return false;
    throw l;
  }
}
function Nn(e, a, { realRoot: l, directoryCheck: c }, g) {
  let { fs: n } = e, m = (d, h) => `/proc/self/fd/${d.fd}/${h}`, k = (d, h) => Buffer.concat([Buffer.from(`/proc/self/fd/${d.fd}/`), h]), D = { openDir: (d, h) => n.open(m(d, h), K), mkdir: async (d, h, O) => {
    await n.mkdir(m(d, h), { mode: O });
  }, closeDir: (d) => d.close(), ...{}, create: async (d, h, O, v, G, Z, x, L) => {
    if (await PEl(await n.open(m(d, h), ae | import_fs.constants.O_NOFOLLOW, en(G, x)), v, G, () => n.lstat(m(d, h), { bigint: true }).catch(() => null), () => n.unlink(m(d, h)), Z, x, L), Z) await d.sync().catch(() => {
    });
  }, createAndOpen: (d, h, O, v) => n.open(m(d, h), ae | import_fs.constants.O_NOFOLLOW, v), link: (d, h, O, v) => n.link(m(d, h), m(O, v)), rename: (d, h, O, v) => n.rename(m(d, h), m(O, v)), symlink: (d, h, O) => n.symlink(d, m(h, O)), readlink: (d, h) => n.readlink(m(d, h)), unlink: (d, h) => n.unlink(m(d, h)), rmdir: (d, h) => n.rmdir(m(d, h)), list: async (d, h) => {
    if (h === void 0) return n.readdir(`/proc/self/fd/${d.fd}`);
    throw z("WORKING_LIST_UNSUPPORTED");
  }, bytes: { list: (d) => n.readdir(`/proc/self/fd/${d.fd}`, { encoding: "buffer" }), openDir: (d, h) => n.open(k(d, h), K), unlink: (d, h) => n.unlink(k(d, h)), rmdir: (d, h) => n.rmdir(k(d, h)) }, lstat: (d, h) => n.lstat(m(d, h), { bigint: true }), open: (d, h, O, v) => n.open(m(d, h), v | import_fs.constants.O_NOFOLLOW | import_chunk_jxja0v0z.cr), hold: (d) => Qe(e, d), getHeldDir: (d) => d.dir, holdOpenedDir: (d, h) => ({ realPath: h, dir: d, stat: () => d.stat({ bigint: true }), close: () => d.close() }), renameOut: (d, h, O, v) => n.rename(m(d, h), m(O.dir, v)), renameIn: (d, h, O, v) => n.rename(m(d.dir, h), m(O, v)), linkIn: (d, h, O, v) => n.link(m(d.dir, h), m(O, v)), statIn: (d, h) => n.lstat(m(d.dir, h), { bigint: true }), openIn: (d, h, O) => n.open(m(d.dir, h), O | import_fs.constants.O_NOFOLLOW | import_chunk_jxja0v0z.cr), unlinkIn: (d, h) => n.unlink(m(d.dir, h)) };
  return sks("linux_procfd", e, Ze(a), a, l, D, [], c);
}
function Rn() {
  let e = globalThis.Bun?.ant?.posixFsAt;
  return typeof e?.openat === "function" ? e : null;
}
function Bn(e, a, l) {
  return l >= 0 ? e.readdirat(a, { maxNames: Math.min(Math.floor(l), Number.MAX_SAFE_INTEGER) }) : [];
}
var ge = (0, import_util.promisify)(import_fs.fstat), ue = (0, import_util.promisify)(import_fs.close), $e = (0, import_util.promisify)(import_fs.open), nn = (0, import_util.promisify)(import_fs.fsync), Hn = (0, import_util.promisify)(import_fs.fchmod), An = (0, import_util.promisify)(import_fs.fchown), Cn = (0, import_util.promisify)(import_fs.writeFile);
function Tn(e) {
  return { stat: (a) => ge(e, a), writeFile: (a) => Cn(e, a), chown: (a, l) => An(e, a, l), chmod: (a) => Hn(e, a), sync: () => nn(e), close: () => ue(e) };
}
var ye, Fn = (0, import_chunk_7e1w6rv3.ud)(() => (0, import_chunk_w578pjby.t)("anchor: this runtime has no Bun.ant.posixFsAt, so the macOS backend cannot come up", { level: "warn" }));
function Sql() {
  let e = Rn();
  if (e === null) return Fn(), null;
  if (ye !== void 0) return ye;
  let a = (0, import_chunk_7e1w6rv3.ud)(() => {
    return;
  }), l = (c, g) => {
    try {
      return g();
    } catch (n) {
      let m = Error("a file call failed (see the code and syscall properties)");
      throw m.errno = (0, import_chunk_jv7av99m.pa)(n) && n.errno !== void 0 ? Math.abs(n.errno) : 0, m.code = m.errno === 0 ? (0, import_chunk_jv7av99m.w)(n) ?? "EUNKNOWN" : (0, import_util.getSystemErrorName)(-m.errno), m.syscall = c, m;
    }
  };
  return ye = { openat: (c, g, n) => l("openat", () => e.openat(c, g, n)), getBeneath: a, mkdirat: (c, g, n) => l("mkdirat", () => e.mkdirat(c, g, n)), renameat: (c, g, n, m) => l("renameat", () => e.renameat(c, g, n, m)), linkat: (c, g, n, m) => l("linkat", () => e.linkat(c, g, n, m)), symlinkat: (c, g, n) => l("symlinkat", () => e.symlinkat(c, g, n)), readlinkat: (c, g) => l("readlinkat", () => e.readlinkat(c, g)), unlinkat: (c, g) => l("unlinkat", () => e.unlinkat(c, g)), rmdirat: (c, g) => l("unlinkat", () => e.unlinkat(c, g, { removeDir: true })), listDirectory: (c, g) => l("readdir", () => g === void 0 ? e.readdirat(c) : Bn(e, c, g)), listDirectoryBytes: (c) => l("readdir", () => e.readdirat(c, { encoding: "buffer" })), ...{} }, ye;
}
function bql(e) {
  return e.noFollowAnyEnforced ??= Sn(e);
}
async function Sn(e) {
  let { fs: a, path: l } = e, c = null;
  try {
    c = await a.realpath(await (0, import_promises.mkdtemp)(l.join((0, import_os.tmpdir)(), "claude-nfa-"))), await a.mkdir(l.join(c, "d")), await (0, import_promises.symlink)(l.join(c, "d"), l.join(c, "l"));
    let g = ae | _e;
    try {
      await (await a.open(l.join(c, "d", "control"), g, 384)).close();
    } catch (n) {
      if ((0, import_chunk_jv7av99m.w)(n) === "EINVAL") return false;
      throw n;
    }
    try {
      return await (await a.open(l.join(c, "l", "probe"), g, 384)).close(), false;
    } catch (n) {
      if ((0, import_chunk_jv7av99m.w)(n) === "ELOOP") return true;
      throw n;
    }
  } catch (g) {
    return (0, import_chunk_w578pjby.t)(`anchor: O_NOFOLLOW_ANY probe not run (${(0, import_chunk_jv7av99m.w)(g) ?? "not an errno"})`), true;
  } finally {
    if (c !== null) await (0, import_promises.rm)(c, { recursive: true, force: true }).catch(() => {
    });
  }
}
async function Ln(e, a) {
  let l = a.getBeneath?.();
  if (l === void 0) return "not_bound";
  return await wql(e, l) ?? ((c, g, n) => l.create(c, [g], n & 511));
}
function wql(e, a) {
  return e.heldCreateProbed ??= Mn(a).then((l) => {
    if (l === "probe_not_run" || l === "probe_create_failed") e.heldCreateProbed = void 0;
    return l;
  });
}
async function Mn(e) {
  let a = (n, m) => (0, import_chunk_w578pjby.t)(`anchor: the probe of the create in a held directory ${n}, so this ${m} creates by full path`), l = null, c = [], g = (n) => (c.push(n), ge(n, { bigint: true }));
  try {
    l = await (0, import_promises.mkdtemp)(`${(0, import_os.tmpdir)()}/claude-held-`);
    let n = await $e(l, K);
    c.push(n);
    let m = await g(await $e(`${l}/by-path`, ae, 384)), k;
    try {
      k = await g(e.create(n, ["held"], 384));
    } catch (d) {
      return a(`failed (${(0, import_chunk_jv7av99m.w)(d) ?? "not an errno"})`, "anchor"), "probe_create_failed";
    }
    if (k.mode !== m.mode) return a(`made a file of mode ${k.mode.toString(8)} where node made one of ${m.mode.toString(8)}`, "host"), "probe_wrong_mode";
    let D = await (0, import_promises.lstat)(`${l}/held`, { bigint: true }).catch((d) => {
      if ((0, import_chunk_jv7av99m.J)(d)) return null;
      throw d;
    });
    if (D === null || !we(k, D)) return a("made a file that is not seen at its name", "host"), "probe_wrong_place";
    return null;
  } catch (n) {
    return a(`could not be staged (${(0, import_chunk_jv7av99m.w)(n) ?? "not an errno"})`, "anchor"), "probe_not_run";
  } finally {
    if (await Promise.all(c.map((n) => ue(n).catch(() => {
    }))), l !== null) await (0, import_promises.rm)(l, { recursive: true, force: true }).catch(() => {
    });
  }
}
var Ee = import_fs.constants.O_RDONLY | Dn | import_fs.constants.O_NONBLOCK;
function xn(e, a, l, { realRoot: c, directoryCheck: g }, n, m, k) {
  let { fs: D, path: d } = e, h = (N, u, y, p) => D.open(d.join(c, ...N, u), y & ~import_fs.constants.O_NOFOLLOW | _e | import_chunk_jxja0v0z.cr, p), O = async (N, u) => {
    let y = a.fstatat?.(N, u);
    return y !== void 0 && y.dev >= 0n && y.ino < 2n ** 63n ? y : v(N, u, Ee);
  }, v = async (N, u, y) => {
    let p = a.openat(N, u, y | import_chunk_jxja0v0z.cr);
    try {
      return await ge(p, { bigint: true });
    } finally {
      await ue(p);
    }
  }, G = async (N, u, y) => {
    try {
      let [p, I] = await Promise.all([N.stat({ bigint: true }), u()]);
      if (p.dev !== I.dev || p.ino !== I.ino) throw y?.(), Object.assign(Error("not the file the held directory names"), { code: "ELOOP" });
      return N;
    } catch (p) {
      throw await N.close().catch(() => {
      }), p;
    }
  }, Z = async (N, u, y, p, I) => {
    try {
      return N === null ? await h(p, y, ae, I) : Tn(N(u, y, I));
    } catch (Y) {
      throw q(Y);
    }
  }, { listDirectory: x, listDirectoryBytes: L } = a, j = (N) => ({ ...L !== void 0 && { bytes: { list: async (u) => L(u), openDir: async (u, y) => a.openat(u, y, K), unlink: async (u, y) => a.unlinkat(u, y), rmdir: async (u, y) => a.rmdirat(u, y) } }, openDir: async (u, y) => a.openat(u, y, K), mkdir: async (u, y, p) => a.mkdirat(u, y, p), closeDir: (u) => ue(u), createsInHeldDirectory: N !== null, ...N !== null && { statDirectoryByPath: async (u) => {
    let y = await h(u, "", K | import_fs.constants.O_NONBLOCK).catch((p) => {
      throw q(p);
    });
    try {
      return await y.stat({ bigint: true });
    } finally {
      await y.close();
    }
  } }, create: async (u, y, p, I, Y, F, se, V) => {
    if (await PEl(await Z(N, u, y, p, en(Y, se)), I, Y, () => v(u, y, Ee).catch(() => null), () => a.unlinkat(u, y), F, se, V), F) await nn(u).catch(() => {
    });
  }, createAndOpen: (u, y, p, I) => h(p, y, ae, I).catch((Y) => {
    throw q(Y);
  }), link: async (u, y, p, I) => a.linkat(u, y, p, I), rename: async (u, y, p, I) => a.renameat(u, y, p, I), symlink: async (u, y, p) => {
    if (a.symlinkat === void 0) throw z("WORKING_LINK_UNSUPPORTED");
    a.symlinkat(u, y, p);
  }, readlink: async (u, y) => {
    if (a.readlinkat === void 0) throw z("WORKING_LINK_UNSUPPORTED");
    return a.readlinkat(u, y);
  }, unlink: async (u, y) => a.unlinkat(u, y), rmdir: async (u, y) => a.rmdirat(u, y), ...x !== void 0 && { list: async (u, y) => x(u, y) }, lstat: O, open: async (u, y, p, I) => G(await h(p, y, I), () => O(u, y), () => k?.([...p, y].join("/"))), ...k === null && { openBeneath: (u, y, p) => h(u, y, p) }, hold: (u) => Qe(e, u), getHeldDir: (u) => u.dir.fd, holdOpenedDir: (u, y) => ({ realPath: y, dir: { fd: u }, stat: () => ge(u, { bigint: true }), close: () => ue(u) }), renameOut: async (u, y, p, I) => a.renameat(u, y, p.dir.fd, I), renameIn: async (u, y, p, I) => a.renameat(u.dir.fd, y, p, I), linkIn: async (u, y, p, I) => a.linkat(u.dir.fd, y, p, I), statIn: (u, y) => O(u.dir.fd, y), openIn: async (u, y, p) => G(await D.open(d.join(u.realPath, y), p & ~import_fs.constants.O_NOFOLLOW | _e | import_chunk_jxja0v0z.cr), () => v(u.dir.fd, y, Ee)), unlinkIn: async (u, y) => a.unlinkat(u.dir.fd, y) });
  return sks("darwin_at", e, Ze(l), l.fd, c, { ...j(typeof n === "function" ? n : null), ...typeof n === "string" && { heldCreateRefusal: n }, ...!m && { forAnchorBeneath: j(null) } }, [], g);
}
function QZl(e, a, { createsInHeldDirectoryCheckedByPath: l = false } = {}) {
  return Zko(e, { gitRoot: a, realRoot: a, isRootNameExchangeable: true, ...l && { [qe]: true } });
}
async function Zko(e, a) {
  let { [qe]: l, ...c } = a, g = void 0, n = false, m = { ...c, directoryCheck: void 0 };
  switch (e.platform()) {
    case "windows": {
      let { loadNt: k } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-fykn3k83.js"))), D = k();
      if (D === null) return { unavailable: "no_ffi" };
      let { openWin32Backend: d } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-1fyv3evb.js"))), h = await d(e, D, m);
      return "unanchored" in h ? { unavailable: h.unanchored } : sks("win32_handle", e, h.root, h.held, m.realRoot, h.ops, [], false ? void 0 : void 0);
    }
    case "linux":
    case "wsl": {
      let k = await e.fs.open(m.realRoot, K);
      try {
        if (!await je(e, k, m.realRoot)) return await k.close(), { unavailable: "unstable_identity" };
        if (await _n(e, k)) {
          let D = false;
          return Nn(e, k, m, D);
        }
        return await k.close(), { unavailable: "no_procfs" };
      } catch (D) {
        throw await k.close().catch(() => {
        }), D;
      }
    }
    case "macos": {
      let k = e.darwinAt ?? Sql();
      if (k === null) return { unavailable: "no_ffi" };
      if (!await bql(e)) return { unavailable: "nofollow_any_unenforced" };
      let D = await e.fs.open(m.realRoot, K);
      try {
        if (await (0, import_chunk_dc6nb19r.RTr)(e, m) !== m.realRoot) throw gn();
        if (!await je(e, D, m.realRoot)) return await D.close(), { unavailable: "unstable_identity" };
        return xn(e, k, D, m, false ? await Ln(e, k) : null, false, null);
      } catch (d) {
        throw await D.close().catch(() => {
        }), d;
      }
    }
    case "unknown":
      return { unavailable: "unsupported_platform" };
  }
}
function ZZl(e) {
  return e.kind === "unavailable" ? e.reason : null;
}
async function eed(e, { host: a = (0, import_chunk_dc6nb19r.ATr)(), now: l = () => performance.now() } = {}) {
  let c = l();
  return { ...await Wn(a, e).catch((n) => ({ kind: "threw" })), elapsedMs: Math.round(l() - c) };
}
async function Wn(e, a) {
  let l = await Zko(e, { gitRoot: a, realRoot: await e.fs.realpath(a) });
  if ("unavailable" in l) return { kind: "unavailable", reason: l.unavailable };
  return await l.close().catch(() => {
  }), { kind: "available" };
}
