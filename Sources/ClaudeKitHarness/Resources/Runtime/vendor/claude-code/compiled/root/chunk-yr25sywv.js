const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __using = (stack, value, async) => {
  if (value != null) {
    if (typeof value !== "object" && typeof value !== "function") __typeError("Object expected");
    var dispose, inner;
    if (async) dispose = value[__knownSymbol("asyncDispose")];
    if (dispose === void 0) {
      dispose = value[__knownSymbol("dispose")];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") __typeError("Object not disposable");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    stack.push([async, dispose, value]);
  } else if (async) {
    stack.push([async]);
  }
  return value;
};
var __callDispose = (stack, error, hasError) => {
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s2, m2, _) {
    return _ = Error(m2), _.name = "SuppressedError", _.error = e, _.suppressed = s2, _;
  };
  var fail = (e) => error = hasError ? new E(e, error, "An error was suppressed during disposal") : (hasError = true, e);
  var next = (it) => {
    while (it = stack.pop()) {
      try {
        var result = it[1] && it[1].call(it[2]);
        if (it[0]) return Promise.resolve(result).then(next, (e) => (fail(e), next()));
      } catch (e) {
        fail(e);
      }
    }
    if (hasError) throw error;
  };
  return next();
};
var chunk_yr25sywv_exports = {};
__export(chunk_yr25sywv_exports, {
  Lei: () => Lei,
  SXl: () => SXl,
  _Xl: () => _Xl,
  bXl: () => bXl,
  gXl: () => gXl,
  hXl: () => hXl,
  mXl: () => mXl,
  wNa: () => wNa,
  yXl: () => yXl
});
module.exports = __toCommonJS(chunk_yr25sywv_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_fbnv54pa = require("/$bunfs/root/chunk-fbnv54pa.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_khxw3ng0 = require("/$bunfs/root/chunk-khxw3ng0.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_3hr8g93j = require("/$bunfs/root/chunk-3hr8g93j.js");
var import_chunk_8nvd6fqx = require("/$bunfs/root/chunk-8nvd6fqx.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_1z1bgjzv = require("/$bunfs/root/chunk-1z1bgjzv.js");
var import_chunk_w82axegn = require("/$bunfs/root/chunk-w82axegn.js");
var import_chunk_dkc86g0t = require("/$bunfs/root/chunk-dkc86g0t.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_ha393e1n = require("/$bunfs/root/chunk-ha393e1n.js");
var import_chunk_6s9tac84 = require("/$bunfs/root/chunk-6s9tac84.js");
var import_chunk_k2pr2qmg = require("/$bunfs/root/chunk-k2pr2qmg.js");
var import_chunk_859v5edd = require("/$bunfs/root/chunk-859v5edd.js");
var import_chunk_tnqn47cg = require("/$bunfs/root/chunk-tnqn47cg.js");
var import_chunk_271f5kxt = require("/$bunfs/root/chunk-271f5kxt.js");
var import_chunk_hvfkrhr2 = require("/$bunfs/root/chunk-hvfkrhr2.js");
var import_chunk_p6rv87rz = require("/$bunfs/root/chunk-p6rv87rz.js");
var import_chunk_w71cxznt = require("/$bunfs/root/chunk-w71cxznt.js");
var import_chunk_ayyyz8kh = require("/$bunfs/root/chunk-ayyyz8kh.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_jxja0v0z = require("/$bunfs/root/chunk-jxja0v0z.js");
var import_chunk_7e12xj51 = require("/$bunfs/root/chunk-7e12xj51.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var import_promises2 = require("fs/promises");
var import_path2 = require("path");
var import_promises3 = require("fs/promises");
var import_path3 = require("path");
var import_crypto = require("crypto");
var import_promises4 = require("fs/promises");
var import_path4 = require("path");
var import_fs = require("fs");
var import_promises5 = require("fs/promises");
var import_os = require("os");
var import_crypto2 = require("crypto");
var import_fs2 = require("fs");
var import_promises6 = require("fs/promises");
var import_path5 = require("path");
var import_crypto3 = require("crypto");
var import_promises7 = require("fs/promises");
var import_path6 = require("path");
var import_zlib = require("zlib");
var import_util = require("util");
var import_crypto4 = require("crypto");
var import_fs3 = require("fs");
var import_promises8 = require("fs/promises");
var import_path7 = require("path");
async function Kr(e, n = (0, import_chunk_8nvd6fqx.Fp)()) {
  let r = await (0, import_promises2.mkdtemp)((0, import_path2.join)(n, `${e}-`));
  return { path: (0, import_path2.join)(r, "out.bundle"), dispose: () => (0, import_promises2.rm)(r, { recursive: true, force: true }).catch(() => {
  }) };
}
async function Yr(e, n) {
  let r;
  try {
    r = await (0, import_promises2.open)(e, (0, import_chunk_6mfepmbb.Xu)());
  } catch (i) {
    return { kind: "unreadable", detail: String(i) };
  }
  try {
    let i = await r.stat();
    if (!i.isFile() || i.nlink !== 1) return { kind: "unreadable", detail: "not a single regular file" };
    if (i.size > n) return { kind: "too_large", sizeBytes: i.size };
    let o = Buffer.alloc(i.size), c = 0;
    while (c < i.size) {
      let { bytesRead: h } = await r.read(o, c, i.size - c, c);
      if (h === 0) break;
      c += h;
    }
    return c === i.size ? { kind: "read", content: o } : { kind: "unreadable", detail: "changed while being read" };
  } catch (i) {
    return { kind: "unreadable", detail: String(i) };
  } finally {
    await r.close();
  }
}
var Ko = /* @__PURE__ */ new Map([["# v2 git bundle", "sha1"], [`# v3 git bundle
@object-format=sha1`, "sha1"], [`# v3 git bundle
@object-format=sha256`, "sha256"]]), Yo = { sha1: /^([0-9a-f]{40}) ([^\0-\x20\x7f]+)$/, sha256: /^([0-9a-f]{64}) ([^\0-\x20\x7f]+)$/ }, Xo = /unable to read [0-9a-f]{40}|missing (?:blob|tree|commit|tag) object|bad (?:tree )?object [0-9a-f]{40}|[Cc]ould not read [0-9a-f]{40}|Failed to traverse parents|bogus commit object|too-short tree (?:object|file)|malformed mode in tree entry|empty filename in tree entry|[Oo]bject [0-9a-f]{40,64} (?:is a \w+, )?not a (?:tree|commit|blob|tag)|mode, but is not a (?:tree|blob)|exceeded maximum allowed tree depth/, qo = /^(?:error|fatal):/m, Vo = Buffer.from("PACK\0\0\0", "latin1"), Jo = Vo.length;
var Zo = { sha1: "4b825dc642cb6eb9a060e54bf8d69288fbee4904", sha256: "6ef19b41225c5369f1c104d45d8d85efa9b057b53b14b4b9b939dd74decc5321" }, on = Buffer.from("\xFFtOc\0\0\0", "latin1"), rn = on.length + 1024;
function Qo(e) {
  let n = e.indexOf(`

`), r = e.toString("latin1", 0, Math.max(n, 0)).split(`
`), i = r.findIndex((h, g) => g > 0 && !h.startsWith("@")), o = Ko.get(r.slice(0, i).join(`
`));
  if (i < 0 || o === void 0) return null;
  let c = r.slice(i).flatMap((h) => {
    let [, g, p] = Yo[o].exec(h) ?? [];
    return g === void 0 || p === void 0 ? [] : [{ id: g, name: p }];
  });
  return c.length === r.length - i && (0, import_chunk_4smdap7r.M)(c.map((h) => h.name)).length === c.length ? { objectFormat: o, refs: c, packOffset: n + 2 } : null;
}
async function es(e, n) {
  let r = await (0, import_promises3.readFile)(e).catch(() => null);
  if (r === null || r.length < rn || !r.subarray(0, on.length).equals(on)) return null;
  let i = Buffer.from(n, "hex"), o = (g) => g < 0 ? 0 : r.readUInt32BE(on.length + g * 4), [c, h] = [o(i[0] - 1), o(i[0])];
  if (rn + h * i.length > r.length) return null;
  return Array.from({ length: h - c }, (g, p) => c + p).some((g) => r.subarray(rn + g * i.length, rn + (g + 1) * i.length).equals(i));
}
function ts(e) {
  return { GIT_DIR: e, GIT_COMMON_DIR: e, GIT_WORK_TREE: e, GIT_OBJECT_DIRECTORY: (0, import_path3.join)(e, "objects"), GIT_ALTERNATE_OBJECT_DIRECTORIES: "", GIT_NO_LAZY_FETCH: "1", GIT_GRAFT_FILE: (0, import_path3.join)(e, "info", "grafts"), GIT_SHALLOW_FILE: (0, import_path3.join)(e, "shallow"), GIT_NO_REPLACE_OBJECTS: "1", GIT_CONFIG_NOSYSTEM: "1", GIT_CONFIG_GLOBAL: (0, import_path3.join)(e, "no-global-config"), GIT_CONFIG_COUNT: "0", GIT_CONFIG_PARAMETERS: "", GIT_ATTR_NOSYSTEM: "1", XDG_CONFIG_HOME: e, GIT_TEST_PACK_PATH_WALK: "0", LC_ALL: "C", LANGUAGE: "C" };
}
async function Vr(e, { scratchRoot: n }, r) {
  let i = Qo(e);
  if (i === null) return { ok: false, kind: "header", detail: "not a whole bundle" };
  let o = e.subarray(i.packOffset), c = (0, import_path3.join)(n, "check"), h = await ns(c, i.objectFormat);
  if (h !== null) return { ok: false, kind: "scratch", detail: h };
  try {
    let g = ts(c), p = await r(["-C", c, "index-pack", "--index-version=2", "--stdin"], { env: g, input: o });
    if (p.code !== 0) return { ok: false, kind: p.exitCode === void 0 ? "unfinished" : "index", detail: qr(p) };
    let [, y] = /^pack\t([0-9a-f]+)$/m.exec(p.stdout) ?? [], _ = (0, import_path3.join)(c, "objects", "pack", `pack-${y}`), k = await (0, import_promises3.stat)(`${_}.pack`).catch(() => null);
    if (k === null) return { ok: false, kind: "index", detail: "no indexed pack to read" };
    if (k.size !== o.length) return { ok: false, kind: "trailing", detail: `${o.length - k.size} bytes follow the pack` };
    let E = Zo[i.objectFormat], I = await es(`${_}.idx`, E);
    if (I === null) return { ok: false, kind: "index", detail: "no pack index to read" };
    let A = await r(["-C", c, "rev-list", "--objects", "--count", "--stdin"], { env: g, input: `${[...(0, import_chunk_4smdap7r.M)(i.refs.map((v) => v.id)), `^${E}`].join(`
`)}
` });
    if (A.code !== 0 || qo.test((0, import_chunk_6s9tac84.PWe)(A))) return { ok: false, kind: A.exitCode === void 0 ? "unfinished" : Xo.test((0, import_chunk_6s9tac84.PWe)(A)) ? "objects" : "walk", detail: qr(A) };
    let R = o.readUInt32BE(Jo) - (I ? 1 : 0), C = A.stdout.trim();
    if (!/^\d+$/.test(C)) return { ok: false, kind: "walk", detail: "git printed no object count" };
    return C === String(R) ? { ok: true } : { ok: false, kind: "unlisted", detail: `${R} objects packed, its refs lead to ${C}, the empty tree not counted` };
  } catch (g) {
    return { ok: false, kind: "unfinished", detail: String(g) };
  } finally {
    await Jr(c);
  }
}
async function Jr(e) {
  let n = (0, import_path3.join)(e, "objects", "pack"), r = await (0, import_promises3.readdir)(n).catch(() => []);
  await Promise.all(r.map((i) => (0, import_promises3.chmod)((0, import_path3.join)(n, i), 420).catch(() => {
  }))), await (0, import_promises3.rm)(e, { recursive: true, force: true }).catch(() => {
  });
}
async function ns(e, n) {
  try {
    await (0, import_promises3.mkdir)(e);
  } catch (r) {
    return String(r);
  }
  try {
    if (await (0, import_promises3.mkdir)((0, import_path3.join)(e, "objects", "pack"), { recursive: true }), await (0, import_promises3.mkdir)((0, import_path3.join)(e, "refs")), await (0, import_promises3.writeFile)((0, import_path3.join)(e, "HEAD"), `ref: refs/heads/rebuild
`), n === "sha256") await (0, import_promises3.writeFile)((0, import_path3.join)(e, "config"), `[core]
	repositoryformatversion = 1
[extensions]
	objectformat = sha256
`);
    return null;
  } catch (r) {
    return await Jr(e), String(r);
  }
}
function qr(e) {
  return (0, import_chunk_7cfjrnwy.Ir)(e.stderr.trim()) || (e.exitCode === void 0 ? "git did not finish" : `exit ${e.code}`);
}
function Zr(e) {
  if (e?.checkout === void 0) return "layout_not_read";
  if (e.checkout === "main") return "main_checkout";
  let n = (0, import_chunk_6s9tac84.aon)(e.commonDir), r = (0, import_chunk_1z1bgjzv.Hb)(n, e.workTree);
  if (n === e.commonDir) return r ? "beneath_git_directory" : "outside_git_directory";
  return r ? "beneath_repository" : "outside_repository";
}
function Qr(e) {
  switch (e) {
    case "main_checkout":
      return (0, import_chunk_cqa9hrgx.u)("teleport_git_bundle_from_main_checkout");
    case "beneath_repository":
      return (0, import_chunk_cqa9hrgx.u)("teleport_git_bundle_from_beneath_repository");
    case "outside_repository":
      return (0, import_chunk_cqa9hrgx.u)("teleport_git_bundle_from_outside_repository");
    case "beneath_git_directory":
      return (0, import_chunk_cqa9hrgx.u)("teleport_git_bundle_from_beneath_git_directory");
    case "outside_git_directory":
      return (0, import_chunk_cqa9hrgx.u)("teleport_git_bundle_from_outside_git_directory");
    case "layout_not_read":
      return (0, import_chunk_cqa9hrgx.u)("teleport_git_bundle_from_layout_not_read");
  }
}
var ei = "Do not run git in this folder: git may act on what was put there.", ti = "a fresh clone from the remote (with no remote: a new folder and git init), copy your files over by hand, but not the .git folder, then", ni = "Keep this folder: commits that you have not pushed, other branches and stashes exist only here.";
var as = [".git", "git~1"];
function Ge(e, n) {
  return !ds(e) && !((0, import_chunk_cg8dqz0a.x)() === "wsl" && e.includes("\\")) && !ls(e, n);
}
function ds(e) {
  return e.includes("\0") || !(0, import_chunk_k2pr2qmg.Nrr)(Un(e)) || Un(e).split("/").some((n) => as.includes((0, import_chunk_fbnv54pa.za)(n))) || (0, import_chunk_k2pr2qmg.XNa)(Un(e));
}
function ls(e, n) {
  return n && e.replaceAll("\\", "/").split("/").some((r) => r.includes(":") || /[. ]$/.test(r));
}
var us = /^[^~.]{1,6}~[0-9]+(?:\.[^.]{1,3})?$/;
function tt(e) {
  let n = (0, import_chunk_cg8dqz0a.x)();
  return (n === "windows" || n === "wsl") && e.replaceAll("\\", "/").split("/").some((r) => us.test((0, import_chunk_7cfjrnwy.nt)(r, ":").replace(/[. ]+$/, "")));
}
async function $t(e) {
  return await cs(e) !== "no";
}
async function cs(e) {
  let n = (0, import_chunk_cg8dqz0a.x)();
  if (n === "windows") return "yes";
  if (n !== "wsl") return "no";
  let r = e.split("/").includes("..") || (0, import_chunk_z6pfqf6e.rp)(e) ? null : await (0, import_promises5.realpath)(e).catch(() => null);
  if (r === null) return "unsure";
  let i = await ii(), o = i === null ? null : await ii();
  if (i === null || o === null || !i.equals(o)) return "unsure";
  let h = i.toString("utf8").split(`
`).filter((y) => y !== ""), g = h.flatMap((y) => {
    let _ = y.split(" "), k = _.indexOf("-"), [E, I, , , A] = _, R = k >= 0 ? _[k + 1] : void 0;
    if (E === void 0 || I === void 0 || A === void 0 || R === void 0) return [];
    let C = [_[5], _[k + 3]].filter(Boolean).join(",");
    return [{ id: E, parent: I, point: (0, import_chunk_q7qjcthc.gOe)(A), windowsSide: (0, import_chunk_q7qjcthc.fUl)({ fstype: R, source: _[k + 2], options: C }), windowsDrive: (0, import_chunk_q7qjcthc.pUl)(R, C) }];
  });
  if (g.length !== h.length) return "unsure";
  if (g.some((y) => y.windowsSide && y.point !== r && (0, import_chunk_q7qjcthc.QJe)(y.point, r))) return "unsure";
  let p = fs(r, g);
  return p === null || p === "unsure" ? "unsure" : p.windowsDrive ? "yes" : p.windowsSide ? "unsure" : "no";
}
function fs(e, n) {
  if ((0, import_chunk_4smdap7r.U)(n, (g) => g.point === "/") > 1) return "unsure";
  let r = new Set(n.map((g) => g.id)), i = (g) => {
    let p = g.filter((E) => (0, import_chunk_q7qjcthc.QJe)(e, E.point)), y = Math.min(...p.map((E) => E.point.length)), [_, k] = p.filter((E) => E.point.length === y);
    return _ === void 0 ? null : k === void 0 ? _ : "unsure";
  }, o = (g, p) => {
    if (p === 0) return null;
    let y = i(n.filter((_) => _.parent === g.id && _ !== g));
    return y === null ? g : y === "unsure" ? y : o(y, p - 1);
  }, [c, h] = n.filter((g) => (!r.has(g.parent) || g.parent === g.id) && (0, import_chunk_q7qjcthc.QJe)(e, g.point));
  return c === void 0 ? null : h !== void 0 ? "unsure" : o(c, n.length);
}
function Un(e) {
  return (0, import_chunk_cg8dqz0a.x)() === "windows" ? e.replaceAll("\\", "/") : e;
}
var ri = 4194304;
async function ii() {
  let [, e, n] = /^(\d+)\.(\d+)/.exec((0, import_os.release)()) ?? [];
  if (!(Number(e) > 5 || Number(e) === 5 && Number(n) >= 8)) return null;
  let r = await hs("/proc/self/mountinfo", ri).catch(() => null);
  return r === null || r.length >= ri ? null : r;
}
async function hs(e, n) {
  let r = await (0, import_promises5.open)(e, import_fs.constants.O_RDONLY | import_chunk_jxja0v0z.cr);
  try {
    let i = [], o = 0;
    while (o < n) {
      let c = Buffer.allocUnsafe(65536), { bytesRead: h } = await r.read(c, 0, c.length, null);
      if (h === 0) break;
      i.push(c.subarray(0, h)), o += h;
    }
    return Buffer.concat(i);
  } finally {
    await r.close();
  }
}
var ws = 8, an = 1048576, ys = 536870912;
async function qn(e, n, r, i, o) {
  let c = r.find((R) => !(0, import_chunk_k2pr2qmg.Nrr)(R));
  if (c !== void 0) return { refused: `${c}: not a path git writes`, tooLarge: false, momentary: false };
  let h = 0, g = null, p = Pt(r), y = new Set(r), _ = (0, import_chunk_w71cxznt.Rl)(ws, async (R) => {
    await o.beforeOpen?.(R);
    let C = false, v = await rt(e, R);
    if (v === "symlink") return { kind: "absent", path: R };
    if (v === "unreadable") return { refused: `${R}: a directory above it could not be inspected`, tooLarge: false, momentary: true };
    await o.beforeRead?.(R);
    let T = await ln(e, R, o.ntfsRules), H = (W) => _s(e, R, W);
    switch (T.kind) {
      case "absent":
        return { kind: "absent", path: R };
      case "refused":
        return y.has(R) ? { refused: `${R}: ${T.why}`, tooLarge: false, momentary: T.momentary } : { kind: "absent", path: R };
      case "hardlinked":
        return { kind: "hardlinked", path: R };
      case "moved":
        return { kind: "changed", path: R };
      case "not_read":
        return (T.why === "name_not_plain" || T.why === "beyond_a_link") && !y.has(R) ? { kind: "absent", path: R } : { kind: "not_read", path: R, why: T.why };
      case "symlink":
        return { kind: "symlink", path: R, target: T.target };
      case "file":
        try {
          if (h += T.size, g === null || T.size > g.size) g = { path: R, size: T.size };
          if (h > i) return { refused: `${g.path} (largest, ${g.size} bytes): ${h} bytes of changed files exceed the ${i}-byte cap`, tooLarge: true, momentary: false };
          let z = (0, import_path5.join)(n, R);
          await (0, import_promises6.mkdir)((0, import_path5.dirname)(z), { recursive: true });
          let F;
          try {
            F = await (0, import_promises6.open)(z, import_fs2.constants.O_WRONLY | import_fs2.constants.O_CREAT | import_fs2.constants.O_EXCL | import_chunk_jxja0v0z.cr, T.executable ? 493 : 420);
          } catch (N) {
            if ((0, import_chunk_jv7av99m.w)(N) === "EEXIST") return { refused: `${R}: collides with another changed path that differs only in case or normalization`, tooLarge: false, momentary: false };
            throw N;
          }
          try {
            let N = await T.handle.stat({ bigint: true });
            if (o.notOlderThanNs !== void 0 && N.ctimeNs >= o.notOlderThanNs && N.ctimeNs < (BigInt(Date.now()) + 1n) * 1000000n) return await F.close(), await (0, import_promises6.unlink)(z).catch(() => {
            }), { kind: "changed", path: R, sincePassStart: true };
            let oe = (0, import_crypto2.createHash)("sha256"), Re = o.objectFormat === void 0 ? null : (0, import_crypto2.createHash)(o.objectFormat).update(`blob ${N.size}\0`), V = 0, ce = false, Ee = Buffer.allocUnsafe(Math.min(T.size, an)), re = 0;
            while (re < T.size) {
              let { bytesRead: we } = await T.handle.read(Ee, 0, Math.min(Ee.length, T.size - re), re);
              if (we === 0) break;
              if (oe.update(Ee.subarray(0, we)), Re !== null) {
                let De = Ee.subarray(0, we);
                Re.update(De), V += li(De, ce), ce = De.at(-1) === 13;
              }
              let $e = 0;
              while ($e < we) {
                let { bytesWritten: De } = await F.write(Ee, $e, we - $e);
                $e += De;
              }
              re += we;
            }
            await o.afterRead?.(R);
            let Y = await T.handle.stat({ bigint: true }), le = o.objectFormat !== void 0 && V > 0 ? ai(o.objectFormat, re, V) : null;
            if (BigInt(re) !== N.size || Y.size !== N.size || Y.mtimeNs !== N.mtimeNs || Y.ctimeNs !== N.ctimeNs || !await bs(T.handle, re, oe.digest(), le?.update)) return await F.close(), await (0, import_promises6.unlink)(z).catch(() => {
            }), { kind: "changed", path: R };
            let xe = await H(T);
            if (xe !== "same") return await F.close(), await (0, import_promises6.unlink)(z).catch(() => {
            }), { kind: xe, path: R };
            await F.utimes(T.atime, T.mtime);
            let me = await F.stat({ bigint: true });
            return { kind: "file", path: R, bytes: re, copy: { ino: Number(me.ino), dev: Number(me.dev), ctimeNs: me.ctimeNs, size: Number(me.size), identity: si(me), ...Re !== null && { blobId: Re.digest("hex"), ...le !== null && { lfBlobId: le.digest() } } } };
          } finally {
            await F.close().catch(() => {
            });
          }
        } catch (W) {
          let z = (0, import_chunk_jv7av99m.w)(W);
          return { refused: `${R}: could not be staged (${z ?? (0, import_chunk_jv7av99m.d)(W)})`, tooLarge: false, momentary: z === void 0 || !Kn.has(z) };
        } finally {
          await T.handle.close();
        }
    }
  }), k = await Promise.all([...r, ...p].map(_)), E = k.find((R) => "refused" in R);
  if (E !== void 0) return E.tooLarge ? { ...E, claimedBytes: h } : E;
  let I = k.filter((R) => !("refused" in R)), A = I.flatMap((R) => R.kind === "not_read" ? [R.why] : []);
  return { entries: I.filter((R) => y.has(R.path) || R.kind === "hardlinked" || R.kind === "changed" || R.kind === "not_read"), copies: I.flatMap((R) => R.kind === "file" ? [R] : Vn(R.path) ? [{ kind: "absent", path: R.path }] : []) };
}
async function oi(e, n) {
  return (await Promise.all(n.map(async (i) => {
    if (i.kind === "absent") return (0, import_promises6.lstat)((0, import_path5.join)(e, i.path)).then(() => false, (o) => {
      let c = (0, import_chunk_jv7av99m.w)(o);
      return c === "ENOENT" || c === "ENOTDIR";
    });
    if (i.kind !== "file") return true;
    try {
      let o = await (0, import_promises6.lstat)((0, import_path5.join)(e, i.path), { bigint: true });
      return o.isFile() && o.nlink === 1n && Number(o.ino) === i.copy.ino && Number(o.dev) === i.copy.dev && si(o) === i.copy.identity && o.ctimeNs === i.copy.ctimeNs && Number(o.size) === i.copy.size;
    } catch {
      return false;
    }
  }))).every(Boolean);
}
function si(e) {
  return e.dev === 0n || e.ino === 0n ? null : `${e.dev}:${e.ino}`;
}
async function _s(e, n, r) {
  let i = await (0, import_promises6.lstat)((0, import_path5.join)(e, n), { bigint: true }).catch(() => null);
  if (i !== null && i.isFile() && i.nlink > 1n) return "hardlinked";
  return i === null || !i.isFile() || i.ino !== r.ino || i.dev !== r.dev ? "changed" : "same";
}
async function bs(e, n, r, i) {
  let o = (0, import_crypto2.createHash)("sha256"), c = Buffer.allocUnsafe(Math.min(n + 1, an)), h = 0;
  for (; ; ) {
    let { bytesRead: g } = await e.read(c, 0, c.length, h);
    if (g === 0) break;
    if (o.update(c.subarray(0, g)), i?.(c.subarray(0, g)), h += g, h > n) return false;
  }
  return h === n && o.digest().equals(r);
}
function ai(e, n, r) {
  let i = (0, import_crypto2.createHash)(e).update(`blob ${n - r}\0`), o = false;
  return { update(c) {
    if (c.length === 0) return;
    if (o && c[0] !== 10) i.update(Buffer.from([13]));
    o = c.at(-1) === 13;
    let h = o ? c.subarray(0, c.length - 1) : c;
    i.update(h.toString("latin1").replaceAll(`\r
`, `
`), "latin1");
  }, digest() {
    if (o) i.update(Buffer.from([13]));
    return i.digest("hex");
  } };
}
function Vn(e) {
  let n = (0, import_chunk_cg8dqz0a.x)(), r = di(e).at(-1) ?? "";
  return n === "macos" || n === "windows" || n === "wsl" ? r.toLowerCase() === ".gitattributes" : r === ".gitattributes";
}
function Pt(e) {
  let n = new Set(e);
  return (e.length === 0 ? [] : [".gitattributes", ...(0, import_chunk_sjqze7qg.XXa)(e).map((r) => `${r}/.gitattributes`)]).filter((r) => !n.has(r));
}
var Kn = /* @__PURE__ */ new Set(["ENAMETOOLONG", "ENOTDIR", "EISDIR", "EINVAL", "ELOOP"]);
var ks = 92, Es = 47;
function Ss(e, n = (0, import_chunk_cg8dqz0a.x)()) {
  return n === "windows" ? Buffer.from(e.map((r) => r === ks ? Es : r)) : e;
}
async function Rs(e, n) {
  if (n !== "linux") return (0, import_promises6.readlink)(e, { encoding: "buffer" });
  let r = await (0, import_promises6.open)((0, import_path5.dirname)(e), import_chunk_jxja0v0z.mO | import_fs2.constants.O_DIRECTORY | import_chunk_jxja0v0z.cr);
  try {
    let i = `/proc/self/fd/${r.fd}`, o = await (0, import_promises6.readlink)(i);
    return o === (0, import_path5.dirname)(e) ? await (0, import_promises6.readlink)((0, import_path5.join)(i, (0, import_path5.basename)(e)), { encoding: "buffer" }) : o === `${(0, import_path5.dirname)(e)} (deleted)` ? "moved" : "elsewhere";
  } finally {
    await r.close();
  }
}
async function ln(e, n, r) {
  if (!Ge(n, r)) return { kind: "refused", why: "not a path git writes", momentary: false };
  let i = (0, import_path5.join)(e, n), o = "darwin", c = import_fs2.constants.O_RDONLY | (o === "darwin" ? ys : import_fs2.constants.O_NOFOLLOW) | (import_fs2.constants.O_NONBLOCK ?? 0) | (import_fs2.constants.O_NOCTTY ?? 0), h;
  try {
    if (o === "win32") {
      let g = await (0, import_promises6.lstat)(i);
      if (g.isSymbolicLink()) throw Object.assign(Error("symbolic link"), { code: "ELOOP" });
      if (!g.isFile()) return { kind: "refused", why: "not a regular file", momentary: false };
    }
    h = await (0, import_promises6.open)(i, o === "win32" ? "r" : c);
  } catch (g) {
    let p = (0, import_chunk_jv7av99m.w)(g);
    if (p === "ENOENT" || p === "ENOTDIR") return { kind: "absent" };
    if (p === "ELOOP" || p === "EMLINK" || p === "EFTYPE") try {
      let k = await Rs(i, o);
      if (k === "moved") return { kind: "moved" };
      let E = await rt(e, n);
      if (E === "symlink") return { kind: "absent" };
      if (E === "unreadable") return { kind: "refused", why: "a directory above it could not be inspected", momentary: true };
      if (k !== "elsewhere") return { kind: "symlink", target: Ss(k) };
      return (0, import_chunk_y53wbr8a.a)("tengu_upload_stage_link_read_elsewhere", {}), { kind: "refused", why: "resolved outside its directory", momentary: false };
    } catch {
      return { kind: "refused", why: "changed while being read", momentary: true };
    }
    let y = o === "win32" ? null : await (0, import_promises6.lstat)(i).catch(() => null), _ = y !== null && !y.isFile() && !y.isSymbolicLink();
    return { kind: "refused", why: `could not be opened (${p ?? "unknown"})`, momentary: !_ && (p === void 0 || !Kn.has(p)) };
  }
  try {
    let g = await h.stat({ bigint: true });
    if (!g.isFile()) return await h.close(), { kind: "refused", why: "not a regular file", momentary: false };
    if (g.nlink > 1n) return await h.close(), { kind: "hardlinked" };
    if (o === "linux") {
      let p = await (0, import_promises6.readlink)(`/proc/self/fd/${h.fd}`);
      if (p !== i) return await h.close(), p === `${i} (deleted)` || (0, import_path5.dirname)(p) === (0, import_path5.dirname)(i) ? { kind: "moved" } : { kind: "refused", why: "resolved outside its directory", momentary: false };
    }
    return { kind: "file", handle: h, size: Number(g.size), ino: g.ino, dev: g.dev, executable: (g.mode & 0o111n) !== 0n, atime: g.atime, mtime: g.mtime };
  } catch (g) {
    await h.close().catch(() => {
    });
    let p = (0, import_chunk_jv7av99m.w)(g);
    return { kind: "refused", why: (0, import_chunk_jv7av99m.d)(g), momentary: p === void 0 || !Kn.has(p) };
  }
}
function di(e) {
  return ((0, import_chunk_cg8dqz0a.x)() === "windows" ? e.replaceAll("\\", "/") : e).split("/");
}
async function rt(e, n) {
  let r = e;
  for (let i of di(n).slice(0, -1)) {
    r = (0, import_path5.join)(r, i);
    try {
      if ((await (0, import_promises6.lstat)(r)).isSymbolicLink()) return "symlink";
    } catch (o) {
      let c = (0, import_chunk_jv7av99m.w)(o);
      if (c === "ENOENT" || c === "ENOTDIR") return "clear";
      return "unreadable";
    }
  }
  return "clear";
}
async function Jn(e, n, r, i, o) {
  if (await rt(e, n) !== "clear") return null;
  let c = await ln(e, n, o);
  if (c.kind !== "file") return null;
  try {
    if (c.size > i) return null;
    let h = Buffer.alloc(c.size + 1), g = 0;
    while (g < h.length) {
      let { bytesRead: y } = await c.handle.read(h, g, h.length - g, g);
      if (y === 0) break;
      g += y;
    }
    if (g !== c.size) return null;
    let p = await (0, import_promises6.lstat)((0, import_path5.join)(e, n), { bigint: true }).catch(() => null);
    if (p === null || !p.isFile() || p.nlink > 1n || p.ino !== c.ino || p.dev !== c.dev) return null;
    return xs(h.subarray(0, c.size), r);
  } catch {
    return null;
  } finally {
    await c.handle.close().catch(() => {
    });
  }
}
function xs(e, n) {
  let r = n === 64 ? "sha256" : "sha1", i = Cs(e);
  return [e, ...i === null ? [] : [i]].flatMap((o) => Ts(o, r));
}
function Ts(e, n) {
  let r = (0, import_crypto2.createHash)(n).update(`blob ${e.length}\0`).update(e).digest("hex"), i = li(e, false);
  if (i === 0) return [r];
  let o = ai(n, e.length, i);
  for (let c = 0; c < e.length; c += an) o.update(e.subarray(c, c + an));
  return [r, o.digest()];
}
var zn = 36, Dt = Buffer.from("$Id:"), vs = Buffer.from("$Id$");
function Cs(e) {
  let n = e.indexOf(Dt);
  if (n === -1) return null;
  let r = Buffer.allocUnsafe(e.length), i = e.copy(r, 0, 0, n), o = n;
  while (o < e.length) {
    let c = -1;
    if (e[o] === zn && e[o + 1] === Dt[1] && e[o + 2] === Dt[2] && e[o + 3] === Dt[3]) {
      let h = o + Dt.length;
      while (h < e.length && e[h] !== zn && e[h] !== 10) h++;
      c = e[h] === zn ? h : -1;
    }
    if (c === -1) r[i++] = e[o++];
    else i += vs.copy(r, i), o = c + 1;
  }
  return i === e.length ? null : r.subarray(0, i);
}
function li(e, n) {
  let r = n && e[0] === 10 ? 1 : 0;
  if (!e.includes(13)) return r;
  for (let i = 1; i < e.length; i++) if (e[i] === 10 && e[i - 1] === 13) r++;
  return r;
}
var un = { failed: "unreadable" }, Lt = { failed: "tampered" }, Ns = { failed: "missing" }, $s = 67108864, Ds = 4e6, Fs = /* @__PURE__ */ new Set(["100644", "100755", "120000", "40000", "160000"]);
function Ce(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e) && !(e instanceof Map) && "failed" in e && typeof e.failed === "string";
}
var Mt = "40000", hi = "160000", Ps = "120000", ci = (e) => e.padStart(6, "0"), fi = (e) => e === hi ? "gitlink" : e === Ps ? "link" : "file";
function Qn(e, n) {
  return async (r) => {
    let i = null;
    try {
      i = await (0, import_promises8.mkdtemp)((0, import_path7.join)(n, "claude-seed-reads-"));
      let o = await (0, import_promises8.open)((0, import_path7.join)(i, "batch"), import_fs3.constants.O_RDWR | import_fs3.constants.O_CREAT | import_fs3.constants.O_EXCL | import_chunk_jxja0v0z.cr, 384);
      try {
        let c = await e(["cat-file", "--batch"], void 0, r, void 0, o.fd), { size: h } = await o.stat();
        if (c.code !== 0 || h > $s) return null;
        let g = Buffer.alloc(h);
        for (let p = 0; p < h; ) {
          let { bytesRead: y } = await o.read(g, p, h - p, p);
          if (y === 0) return null;
          p += y;
        }
        return g;
      } finally {
        await o.close().catch(() => {
        });
      }
    } catch {
      return null;
    } finally {
      if (i !== null) await (0, import_promises8.rm)(i, { recursive: true, force: true }).catch(() => {
      });
    }
  };
}
class er {
  fetch;
  listings = /* @__PURE__ */ new Map();
  bodies = /* @__PURE__ */ new Map();
  algorithm;
  idLength;
  constructor(e, n) {
    this.fetch = e;
    this.algorithm = n.length === 64 ? "sha256" : "sha1", this.idLength = n.length;
  }
  hashes(e, n, r) {
    return (0, import_crypto4.createHash)(this.algorithm).update(`${e} ${n.length}\0`).update(n).digest("hex") === r;
  }
  async trees(e) {
    let n = (0, import_chunk_4smdap7r.M)(e.filter((i) => !this.listings.has(i)));
    if (n.length === 0) return true;
    let r = await this.read("tree", n);
    if (Ce(r)) return r;
    for (let [i, o] of r) {
      let c = Ls(o, this.idLength / 2);
      if (c === null) return Lt;
      if (c === "malformed") return { failed: "malformed", tree: i };
      this.listings.set(i, c);
    }
    return true;
  }
  listing(e) {
    return this.listings.get(e);
  }
  async commit(e) {
    let n = await this.commits([e]);
    return Ce(n) ? n : n.get(e);
  }
  async commits(e) {
    let n = (0, import_chunk_4smdap7r.M)([...e]), r = n.length === 0 ? /* @__PURE__ */ new Map() : await this.read("commit", n);
    if (Ce(r)) return r;
    let i = /* @__PURE__ */ new Map();
    for (let [o, c] of r) {
      let h = c.subarray(0, Math.max(0, c.indexOf(`

`))).toString("latin1").split(`
`), g = /^tree ([0-9a-f]{40,64})$/.exec(h[0] ?? "")?.[1], p = [];
      for (let y of h.slice(1)) {
        let _ = /^parent ([0-9a-f]{40,64})$/.exec(y)?.[1];
        if (_ === void 0) break;
        p.push(_);
      }
      if (g === void 0 || [g, ...p].some((y) => y.length !== this.idLength)) return Lt;
      i.set(o, { tree: g, parents: p });
    }
    return i;
  }
  async blobs(e) {
    return e.length === 0 ? /* @__PURE__ */ new Map() : this.read("blob", (0, import_chunk_4smdap7r.M)([...e]));
  }
  async read(e, n) {
    let r = await this.fetch(n.map((c) => `${c}
`).join(""));
    if (r === null) return un;
    if (Ce(r)) return r;
    let i = /* @__PURE__ */ new Map(), o = 0;
    for (let c of n) {
      let h = r.indexOf(10, o);
      if (h === -1) return un;
      let g = r.subarray(o, h).toString("latin1");
      if (g === `${c} missing`) return Ns;
      let p = /^([0-9a-f]{40,64}) (\w+) (\d+)$/.exec(g);
      if (p === null || p[1] !== c) return un;
      if (p[2] !== e) return Lt;
      let y = Number(p[3]), _ = Buffer.from(r.subarray(h + 1, h + 1 + y));
      if (_.length !== y) return un;
      if (!this.hashes(e, _, c)) return Lt;
      if (e !== "blob") this.bodies.set(c, _);
      i.set(c, _), o = h + 1 + y + 1;
    }
    return i;
  }
}
function Ls(e, n) {
  let r = /* @__PURE__ */ new Map(), i = 0, o = null, c = false;
  while (i < e.length) {
    let h = e.indexOf(32, i), g = h === -1 ? -1 : e.indexOf(0, h + 1);
    if (h === -1 || g === -1 || g + 1 + n > e.length) return null;
    let p = e.subarray(h + 1, g), y = e.subarray(i, h).toString("latin1");
    if (!cn(y)) return null;
    let _ = fn(y), k = { name: p, isTree: _ === Mt }, E = p.toString("latin1");
    if (!tr(p) || r.has(E)) return null;
    if (!Fs.has(_) || o !== null && Ms(o, k) >= 0) c = true;
    o = k, r.set(E, { mode: _, id: e.subarray(g + 1, g + 1 + n).toString("hex") }), i = g + 1 + n;
  }
  return c ? "malformed" : r;
}
function tr(e) {
  return e.length > 0 && !e.includes(47) && !(e.length === 1 && e[0] === 46) && !(e.length === 2 && e[0] === 46 && e[1] === 46);
}
function Ms(e, n) {
  let r = Math.min(e.name.length, n.name.length), i = e.name.subarray(0, r).compare(n.name.subarray(0, r));
  if (i !== 0) return i;
  let o = (c) => c.name.length > r ? c.name[r] : c.isTree ? 47 : 0;
  return o(e) - o(n);
}
function cn(e) {
  return /^[0-7]+$/.test(e);
}
function fn(e) {
  let n = cn(e) ? Array.from(e.slice(-11)).reduce((r, i) => (r << 3 | Number(i)) >>> 0, 0) : 0;
  switch (n & 61440) {
    case 32768:
      return n & 64 ? "100755" : "100644";
    case 40960:
      return "120000";
    case 16384:
      return Mt;
    case 57344:
      return hi;
    default:
      return e.replace(/^0+/, "");
  }
}
async function Gt(e, n, r) {
  let i = "0".repeat(e.idLength), o = [], c = n === r ? [] : [{ prefix: Buffer.alloc(0), base: n, other: r }], h = 0;
  while (c.length > 0) {
    let g = c.flatMap(({ base: _, other: k }) => [_, k]).filter((_) => _ !== null), p = await e.trees(g);
    if (p !== true) {
      if (p.failed !== "malformed") return p;
      let _ = c.find(({ base: k, other: E }) => k === p.tree || E === p.tree);
      return _ === void 0 ? p : { ...p, dir: _.prefix.toString("utf8").replace(/\/$/, "") };
    }
    let y = [];
    for (let { prefix: _, base: k, other: E } of c) {
      let I = k === null ? /* @__PURE__ */ new Map() : e.listing(k), A = E === null ? /* @__PURE__ */ new Map() : e.listing(E), R = (0, import_chunk_4smdap7r.M)([...I.keys(), ...A.keys()]).sort();
      if (h += R.length, h > Ds) return Lt;
      for (let C of R) {
        let v = I.get(C), T = A.get(C);
        if (v !== void 0 && T !== void 0 && v.id === T.id && v.mode === T.mode) continue;
        let H = Buffer.concat([_, Buffer.from(C, "latin1")]), W = v?.mode === Mt, z = T?.mode === Mt;
        if (W || z) y.push({ prefix: Buffer.concat([H, Buffer.from("/")]), base: W ? v.id : null, other: z ? T.id : null });
        let F = v !== void 0 && !W ? v : void 0, N = T !== void 0 && !z ? T : void 0;
        if (F === void 0 && N === void 0) continue;
        o.push({ path: H.toString("utf8"), pathBytes: H, status: F === void 0 ? "A" : N === void 0 ? "D" : fi(F.mode) !== fi(N.mode) ? "T" : "M", oldMode: F === void 0 ? "000000" : ci(F.mode), newMode: N === void 0 ? "000000" : ci(N.mode), oldId: F?.id ?? i, newId: N?.id ?? i });
      }
    }
    c = y;
  }
  return o;
}
async function xt(e, n, r) {
  let i = /* @__PURE__ */ new Map(), o = await e.trees([n]);
  if (o !== true) return o;
  let c = r.map((h) => ({ name: h, segments: h.split("/"), at: 0, tree: n }));
  while (c.length > 0) {
    let h = await e.trees(c.map(({ tree: y }) => y));
    if (h !== true) return h;
    let g = [], p = [];
    for (let y of c) {
      let _ = e.listing(y.tree)?.get(Buffer.from(y.segments[y.at], "utf8").toString("latin1"));
      if (_ === void 0) continue;
      let k = y.at === y.segments.length - 1;
      if (_.mode === Mt) if (k) p.push(_.id);
      else g.push({ ...y, at: y.at + 1, tree: _.id });
      else if (k) i.set(y.name, { id: _.id, mode: _.mode });
    }
    if (p.length > 0) {
      let y = await e.trees(p);
      if (y !== true) return y;
    }
    c = g;
  }
  return i;
}
var hn = { latin1: "\xEF\xBB\xBF", utf8: "\uFEFF" }, nr;
function ir(e, n) {
  let r = nr ??= (async () => {
    let i = Buffer.from([65, 233, 128, 255, 195, 40, 66]), o = await e(["hash-object", "-w", "--stdin"], n, i);
    if (o.code !== 0) throw Error("probe blob not written");
    let c = await e(["cat-file", "--batch"], n, `${o.stdout.trim()}
`, "latin1");
    if (c.code !== 0) throw Error("probe blob not read");
    let h = c.stdout.slice(c.stdout.indexOf(`
`) + 1);
    return Buffer.from(h, "latin1").equals(i) ? "latin1" : "utf8";
  })();
  return r.catch(() => {
    if (nr === r) nr = void 0;
    return "utf8";
  });
}
var mu = (0, import_util.promisify)(import_zlib.deflate);
var Ws = ["filter", "working-tree-encoding", "ident"];
async function gn(e, n, r, i, o) {
  if (n.length === 0) return [];
  let c = new Set(n.filter((E) => r.get(E) === null)), h = (E) => [E, ...r.get(E) ?? []], g = (E) => h(E).flatMap((I) => o.normalizationBlind ? (0, import_chunk_4smdap7r.M)([I, I.normalize("NFC"), I.normalize("NFD")]) : [I]), p = (0, import_chunk_4smdap7r.M)(n.flatMap(g));
  if (i?.prepareIndexAndStore !== void 0) {
    let E = await i.prepareIndexAndStore(p, i);
    if (E !== true) return E;
  } else if (i !== null) {
    if ((await e(["-c", "core.splitIndex=false", "read-tree", i.commit ?? i.tree], { GIT_INDEX_FILE: i.indexPath })).code !== 0) return null;
    await (0, import_promises7.mkdir)(i.objectsDir, { recursive: true, mode: 448 });
    let I = { GIT_INDEX_FILE: i.indexPath, GIT_OBJECT_DIRECTORY: i.objectsDir, GIT_ALTERNATE_OBJECT_DIRECTORIES: "" }, A = await ir(e, I), R = await zs(e, i, i.indexPath, p, A, i.refusesGitlinkedRules === true);
    if (R === null || R === "old_git" || R === "tampered") return R;
    for (let { name: C, id: v, text: T, markStripped: H } of R.blobs) {
      let W = await e(["hash-object", "-w", "--stdin"], I, Buffer.from(T, A)), z = W.stdout.trim();
      if (W.code !== 0 || z !== v && !H) return null;
      if (z !== v) {
        let F = await e(["hash-object", "-w", "--stdin"], I, Buffer.from(hn[A] + T, A));
        if (F.code !== 0 || F.stdout.trim() !== v) return null;
        if ((await e(["-c", "core.splitIndex=false", "update-index", "--cacheinfo", `100644,${z},${C}`], I)).code !== 0) return null;
      }
    }
  }
  let y = await e([...o.caseBlind ? ["-c", "core.ignorecase=true"] : [], "-c", "core.sparseCheckout=false", "check-attr", ...i === null ? [] : ["--cached"], "-z", "--stdin", ...Ws], i === null ? void 0 : { GIT_INDEX_FILE: i.indexPath, GIT_OBJECT_DIRECTORY: i.objectsDir, GIT_ALTERNATE_OBJECT_DIRECTORIES: "" }, p.map((E) => `${E}\0`).join(""));
  if (y.maxBufferExceeded) return "overflow";
  if (y.code !== 0) return null;
  let _ = y.stdout.split("\0"), k = /* @__PURE__ */ new Set();
  for (let E = 0; E + 2 < _.length; E += 3) {
    let [I, A] = [_[E + 1], _[E + 2]];
    if (!(A === "unspecified" || A === "unset" || I === "ident" && A === "false")) k.add(_[E]);
  }
  return n.filter((E) => c.has(E) || g(E).some((I) => k.has(I)));
}
async function zs(e, n, r, i, o, c) {
  let h = (0, import_chunk_4smdap7r.M)([...Pt(i), ...i.filter((C) => C.split("/").at(-1) === ".gitattributes")]), g = await (0, import_chunk_dkc86g0t.dcs)(e, r, new Set(h), (0, import_path6.dirname)(r));
  if (g === null) return null;
  let p = n.commit !== void 0 ? await Vs(e, n.commit, h, o) : await gi(e, n.tree, h);
  if (p === null || p === "tampered") return p;
  if (c && [...p.values()].some(({ mode: C }) => C === "160000")) return null;
  let y = (C) => {
    let v = p.get(C), T = g.get(C);
    return v === void 0 ? T === void 0 : T !== void 0 && (0, import_chunk_dkc86g0t.acs)(T) && T.id === v.id && fn(T.mode) === v.mode;
  };
  if (h.some((C) => !y(C))) return "tampered";
  let _ = [...p], k = await (0, import_chunk_dkc86g0t.gco)(_.map(([C]) => `:0:${C}`)).reduce(async (C, v) => {
    let T = await C;
    if (T === "tampered" || T === null) return T;
    let H = await e(["-c", "core.precomposeUnicode=false", "rev-parse", ...v], { GIT_INDEX_FILE: r });
    return H.code === 0 ? [...T, ...H.stdout.split(`
`).filter((W) => W !== "")] : H.exitCode === 128 ? "tampered" : null;
  }, Promise.resolve([]));
  if (k === null) return null;
  if (k === "tampered" || k.length !== _.length || _.some(([, C], v) => k[v] !== C.id)) return "tampered";
  let E, I = /* @__PURE__ */ new Map(), A = async (C) => {
    let v = I.get(C);
    if (v !== void 0) return v;
    let T = await e(["cat-file", "--batch"], void 0, `${C}
`, o === "latin1" ? "latin1" : void 0), H = T.stdout.indexOf(`
`), W = H === -1 ? T.stdout : T.stdout.slice(0, H), z = H === -1 ? "" : T.stdout.slice(H + 1), F = C.length === 64 ? "sha256" : "sha1", N = T.code !== 0 ? null : !new RegExp(`^${C} blob [0-9]+$`).test(W) ? /^[0-9a-f]{40,64} [a-z]+ [0-9]+$/.test(W) ? "tampered" : null : [z, `${z}\r`].find((oe) => {
      let Re = Buffer.from(oe, o);
      return (0, import_crypto3.createHash)(F).update(`blob ${Re.length}\0`).update(Re).digest("hex") === C;
    }) ?? (o === "latin1" ? "tampered" : null);
    return I.set(C, N), N;
  }, R = [];
  for (let [C, { id: v, mode: T }] of p) {
    let H = await A(v);
    if (H === "tampered") return "tampered";
    let W = H === null ? null : Ks(H, T, o);
    if (W === null) return null;
    if (W.isLink) {
      if (E ??= Xs(e), !await E) return "old_git";
    }
    if (W.text === null) return null;
    R.push({ name: C, id: v, text: W.text, markStripped: W.markStripped });
  }
  return { blobs: R };
}
function Ks(e, n, r) {
  if (e.includes("\0")) return null;
  if (n !== "100644" && n !== "100755" && n !== "120000") return null;
  let i = e.startsWith(hn[r]);
  if (n === "120000") return { isLink: true, text: i ? null : e, markStripped: false };
  if (!i) return { isLink: false, text: e, markStripped: false };
  let o = e.slice(hn[r].length);
  return o.startsWith(hn[r]) ? null : { isLink: false, text: o, markStripped: true };
}
function Ys(e) {
  if (!(e.startsWith('"') && e.endsWith('"'))) return Buffer.from(e, "utf8");
  let n = { a: 7, b: 8, t: 9, n: 10, v: 11, f: 12, r: 13, "\\": 92, '"': 34 }, r = e.slice(1, -1), i = [];
  for (let o = 0; o < r.length; o += 1) {
    let c = r[o] ?? "";
    if (c !== "\\") {
      i.push(...Buffer.from(c, "utf8"));
      continue;
    }
    let h = r[o + 1] ?? "";
    if (/^[0-3][0-7]{2}$/.test(r.slice(o + 1, o + 4))) i.push(parseInt(r.slice(o + 1, o + 4), 8)), o += 3;
    else i.push(n[h] ?? h.charCodeAt(0)), o += 1;
  }
  return Buffer.from(i);
}
async function Xs(e) {
  let n = await e(["version"]), r = n.code === 0 ? (0, import_chunk_hvfkrhr2.EAe)(n.stdout) : null;
  return r !== null && (r.major > 2 || r.major === 2 && r.minor >= 32);
}
async function qs(e, n, r) {
  let i = r ?? await ir(e, {}), o = n.length === 64 ? "sha256" : "sha1", c = (_, k, E) => (0, import_crypto3.createHash)(o).update(`${_} ${k.length}\0`).update(k).digest("hex") === E, h = await e(["cat-file", "--batch"], void 0, `${n}
`, i === "latin1" ? "latin1" : void 0);
  if (h.code !== 0) return null;
  let g = h.stdout.indexOf(`
`), p = g === -1 ? "" : h.stdout.slice(g + 1);
  if (!h.stdout.startsWith(`${n} commit `)) return /^[0-9a-f]{40,64} [a-z]+ /.test(h.stdout) ? "tampered" : null;
  if (![p, `${p}\r`].some((_) => c("commit", Buffer.from(_, i), n))) return i === "latin1" ? "tampered" : null;
  let y = /^tree ([0-9a-f]{40,64})\n/.exec(p)?.[1];
  if (y === void 0) return "tampered";
  return y;
}
async function Vs(e, n, r, i = "utf8") {
  let o = await qs(e, n, i);
  if (o === null || o === "tampered") return o;
  return gi(e, o, r);
}
var Js = 512, Zs = 262144;
async function Qs(e, n) {
  let r = n.length === 64 ? "sha256" : "sha1", i = (y, _, k) => (0, import_crypto3.createHash)(r).update(`${y} ${_.length}\0`).update(_).digest("hex") === k, o = /* @__PURE__ */ new Map(), c = (y) => {
    if (!y.every(({ nameBytes: k }) => tr(k))) return null;
    let _ = new Map(y.map(({ nameBytes: k, mode: E, id: I }) => [k.toString("latin1"), { mode: E, id: I }]));
    return _.size === y.length ? _ : null;
  }, h = await ir(e, {}) === "latin1", g = async (y) => {
    let _ = (0, import_chunk_4smdap7r.M)(y.filter((C) => !o.has(C)));
    if (_.length === 0) return true;
    if (!h) {
      for (let C of _) {
        let v = await p(C);
        if (v === null || v === "tampered") return v;
      }
      return true;
    }
    let k = await e(["cat-file", "--batch"], void 0, [..._, _[0]].map((C) => `${C}
`).join(""), "latin1");
    if (k.code !== 0) return null;
    let E = Buffer.from(k.stdout, "latin1"), I = n.length / 2, A = 0, R = 0;
    for (let [C, v] of _.entries()) {
      if (C > 0 && C % Js === 0 || R >= Zs) await (0, import_chunk_ayyyz8kh.Kd)(), R = 0;
      let T = E.indexOf(10, A);
      if (T === -1) return null;
      let H = E.subarray(A, T).toString("latin1"), W = /^([0-9a-f]{40,64}) tree (\d+)$/.exec(H);
      if (W === null || W[1] !== v) return /^[0-9a-f]{40,64} [a-z]+ \d+$/.test(H) ? "tampered" : null;
      let z = Number(W[2]);
      R += z;
      let F = E.subarray(T + 1, T + 1 + z);
      if (F.length !== z) return null;
      if (!i("tree", F, v)) return "tampered";
      A = T + 1 + z + 1;
      let N = [], oe = 0;
      while (oe < F.length) {
        let V = F.indexOf(32, oe), ce = F.indexOf(0, V + 1);
        if (V === -1 || ce === -1 || ce + 1 + I > F.length) return "tampered";
        let Ee = F.subarray(oe, V).toString("latin1");
        if (!cn(Ee)) return "tampered";
        N.push({ mode: fn(Ee), nameBytes: Buffer.from(F.subarray(V + 1, ce)), id: F.subarray(ce + 1, ce + 1 + I).toString("hex") }), oe = ce + 1 + I;
      }
      let Re = c(N);
      if (Re === null) return "tampered";
      o.set(v, Re);
    }
    return true;
  }, p = async (y) => {
    let _ = o.get(y);
    if (_ !== void 0) return _;
    let k = await e(["-c", "core.quotePath=true", "ls-tree", y]);
    if (k.code !== 0) return null;
    let E = k.stdout.split(`
`).filter((R) => R !== "").map((R) => {
      let C = R.indexOf("	"), [v, , T] = R.slice(0, C).split(" "), H = Ys(R.slice(C + 1));
      return { mode: (v ?? "").replace(/^0+/, ""), id: T ?? "", nameBytes: H };
    }), I = Buffer.concat(E.map(({ mode: R, id: C, nameBytes: v }) => Buffer.concat([Buffer.from(`${R} `, "utf8"), v, Buffer.from([0]), Buffer.from(C, "hex")])));
    if (!i("tree", I, y)) return null;
    let A = c(E);
    if (A === null) return "tampered";
    return o.set(y, A), A;
  };
  return { listingsOf: g, listing: (y) => o.get(y), readsManyTreesInOneRun: h };
}
async function gi(e, n, r) {
  let { listingsOf: i, listing: o } = await Qs(e, n), c = /* @__PURE__ */ new Map(), h = await i([n]);
  if (h !== true) return h;
  let g = r.map((p) => ({ name: p, segments: p.split("/"), at: 0, tree: n }));
  while (g.length > 0) {
    let p = await i(g.map(({ tree: k }) => k));
    if (p !== true) return p;
    let y = [], _ = [];
    for (let k of g) {
      let E = o(k.tree);
      if (E === void 0) return null;
      let I = k.segments[k.at], A = E.get(Buffer.from(I, "utf8").toString("latin1"));
      if (A === void 0) continue;
      let R = k.at === k.segments.length - 1;
      if (R && A.mode !== "40000") c.set(k.name, { id: A.id, mode: A.mode });
      else if (A.mode === "40000") if (!R) y.push({ ...k, at: k.at + 1, tree: A.id });
      else _.push(A.id);
    }
    if (_.length > 0) {
      let k = await i(_);
      if (k !== true) return k;
    }
    g = y;
  }
  return c;
}
var ia = /^:([0-7]{6}) ([0-7]{6}) ([0-9a-f]{40}(?:[0-9a-f]{24})?) ([0-9a-f]{40}(?:[0-9a-f]{24})?) ([A-Z])[0-9]*$/, Di = ["100644", "100755"], sr = "160000", Wt = "120000", mn = { sha1: "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391", sha256: "473a0f4c3be8a93681a267e3b1e9a7dcda1185436fe141f7749120a303721813" }, Fi = /^0+$/, oa = 65536, Tt = 8, Rn = 129, jt = "the trees just built could not be read back as what their ids name", wi = "a commit just made could not be read back as what its id names";
function yi(e) {
  return (0, import_crypto.createHash)("sha1").update(`blob ${e.length}\0`).update(e).digest("hex");
}
var hr = 1048576, sa = 67108864, _i = 536870912, En = { GIT_AUTHOR_NAME: "git stash", GIT_AUTHOR_EMAIL: "git@stash", GIT_COMMITTER_NAME: "git stash", GIT_COMMITTER_EMAIL: "git@stash" }, bi = (e) => (n, ...r) => e(["-c", "core.longpaths=true", ...n], ...r);
async function Pi(e, n, r = {}) {
  let i = r.probes ?? (0, import_chunk_6s9tac84.ADe)(), o = wn(e, n, r.signal, void 0, i), c = (Q, Te, Ze, se, bt) => o(Te?.GIT_INDEX_FILE === void 0 ? [...Q] : ["-c", "core.splitIndex=false", ...Q], Te, Ze, se, bt), h = (Q) => (r.neverRead ?? r.alsoLeaveOut)?.(Q) ?? false, g = (0, import_chunk_4smdap7r.M)([(0, import_chunk_6s9tac84.h$t)(e), n.workTree]).filter((Q) => import_chunk_w82axegn.oUt.some(([, Te]) => (0, import_chunk_w82axegn.bxi)(`${Q}/${Te}`))), p = (Q) => g.some((Te) => (0, import_chunk_w82axegn.bxi)(`${Te}/${Q}`)), y = (Q) => (0, import_chunk_w82axegn.CA)(Q) || p(Q) || (r.alsoLeaveOut?.(Q) ?? false), _ = await ha(c, n.adminDir ?? (0, import_chunk_6s9tac84.Xfe)());
  if (_.kind !== "inspected") return _;
  let { gitDir: k, workTree: E } = n, { base: I, baseTree: A, iTree: R, reader: C, namesWindowsCannotHold: v } = _.inspection;
  if (v > 0) (0, import_chunk_w578pjby.t)(`[wipStash] tracked names that Windows cannot hold, listed as deleted and passed over: ${v}`), r.onNamesWindowsCannotHold?.(v);
  let T = n.bound === true && (0, import_chunk_cg8dqz0a.x)() === "wsl" || await $t(E) || await $t(n.adminDir ?? (0, import_chunk_6s9tac84.Xfe)()), H = ga(_.inspection, T);
  if (H.length > 0) return { kind: "refused", refused: H, decidedOn: "listing" };
  let W = r.leaveOutUncommittedCredentialFiles ? await ma(E, _.inspection, y, T, h) : [], z = new Set(W.map(({ path: Q }) => Q)), F = new Set(_.inspection.staged.map(({ path: Q }) => Q)), N = new Set(_.inspection.staged.flatMap(({ path: Q, status: Te }) => Te === "D" ? [Q] : [])), oe = Date.now(), Re = (0, import_chunk_w71cxznt.Rl)(Tt, (Q) => r.signal?.aborted === true || z.has(Q.path) || F.has(Q.path) ? Promise.resolve("changed") : Gi(E, Q, T, sa, r.signal)), V = await Promise.all(_.inspection.working.map(Re)), ce = _.inspection.working.filter((Q, Te) => V[Te] !== "unchanged"), Ee = (0, import_chunk_4smdap7r.U)(V, (Q) => Q === "open_refused");
  if (Ee > 0) r.onOpenRefusedAtTheLook?.(Ee);
  let re = _.inspection.working.length - ce.length;
  if (re > 0) (0, import_chunk_w578pjby.t)(`[wipStash] ${re} of ${_.inspection.working.length} stat-dirty tracked files were unchanged (${Date.now() - oe}ms)`);
  if (ce.length === 0 && R === A) return { kind: "none", leftOut: W };
  if (await Ha(k), n.adminDir === void 0) await ja((0, import_chunk_6s9tac84.Xfe)());
  let Y = (0, import_path4.join)(n.adminDir ?? k, `ccr-seed-${process.pid}-${(0, import_crypto.randomBytes)(6).toString("hex")}.index`), le = null, xe = null, me = null, we = [], $e = /* @__PURE__ */ new Set(), De = [], q = /* @__PURE__ */ new Map(), it = [], _t = /* @__PURE__ */ new Map(), Fe = null;
  try {
    let Q = await c(["read-tree", "--no-recurse-submodules", `--index-output=${Y}`, "-m", R]);
    if (Q.code !== 0) return L("read-tree", Q.stderr, Q);
    if (n.adminDir === void 0) {
      le = await (0, import_promises4.mkdtemp)((0, import_path4.join)((0, import_chunk_6s9tac84.Xfe)(), `claude-seed-index-${process.pid}-`));
      let D = (0, import_path4.join)(le, "index"), j = await Ai(Y, D);
      if (j !== null) return await (0, import_promises4.unlink)(Y).catch(() => {
      }), L(j.kind === "disk" ? "scratch-index" : "rewritten", j.detail);
      let ee = await Ga(Y);
      if (ee !== null) (0, import_chunk_w578pjby.t)(`[wipStash] the scratch index read-tree wrote could not be removed after it was carried off (${ee}); left for the sweep`);
      Y = D;
    }
    let Te = await ua(c, Y, n.adminDir ?? (0, import_chunk_6s9tac84.Xfe)(), C, R, T);
    if (Te.kind === "failed") return Te;
    if (Te.kind === "differ") return L("read-tree", "the index changed while it was read, or its trees do not list what it holds (an object is not what its id names) \u2014 retry");
    let Ze = await c(["write-tree", "--ignore-cache-tree"]);
    if (Ze.code !== 0) return L("write-tree", Ze.stderr || Ze.stdout, Ze);
    if (Ze.stdout.trim() !== R) return L("read-tree", "the index changed while the uncommitted changes were being read \u2014 retry");
    let se = R;
    if (z.size > 0) {
      let D = await pn(c, C, Y, A, [...z]);
      if (D !== null) return { kind: "failed", ...D };
      let j = await c(["write-tree", "--ignore-cache-tree"], { GIT_INDEX_FILE: Y });
      if (j.code !== 0) return L("write-tree", j.stderr || j.stdout, j);
      se = j.stdout.trim();
    }
    let bt = r.leaveOutUncommittedCredentialFiles ? ce.filter(({ status: D, path: j }) => D === "D" && !z.has(j) && y(j)).map(({ path: D }) => D) : [], Qe = (D) => !z.has(D) && (!r.leaveOutUncommittedCredentialFiles || !y(D)), At = (0, import_chunk_4smdap7r.M)(ce.flatMap(({ path: D, status: j, newMode: ee, newId: ge }) => j === "D" || ee === sr || !Fi.test(ge) ? [D] : [])), kt = new Set(await Ii(E, At)), It = new Set(At.filter((D) => !kt.has(D))), qt = (0, import_chunk_4smdap7r.M)(ce.map(({ path: D }) => D)).filter((D) => !It.has(D) && Qe(D)), Vt = [...F].filter(Qe), je = _.inspection.staged.filter(({ status: D }) => D !== "D"), He = Fa(), ze = je.length === 0 && !r.leaveOutUncommittedCredentialFiles ? { elsewhere: [], withheldTracked: /* @__PURE__ */ new Map() } : await ca(c, Y, new Map(je.map(({ newId: D, path: j }) => [D, j])), r.leaveOutUncommittedCredentialFiles ? (D) => He(D) || p(D) : () => false, n.adminDir ?? (0, import_chunk_6s9tac84.Xfe)(), T, r.signal);
    if (ze === null) return L("ls-files", r.signal?.aborted ? "cancelled, or out of time, before the index was listed and its names judged" : "could not list the index");
    let { elsewhere: P, withheldTracked: ke } = ze, Ke = (0, import_chunk_4smdap7r.M)([...ce.map(({ path: D }) => D), ...F, ...P]), Le = /* @__PURE__ */ new Set(), Jt = /* @__PURE__ */ new Set(), et;
    if (Ke.length > 0) {
      me = await (0, import_promises4.mkdtemp)((0, import_path4.join)(n.adminDir ?? (0, import_chunk_6s9tac84.Xfe)(), "claude-seed-attrs-")), et = await Ca(c, E);
      let D = await Aa(me, { caseBlind: et.caseBlind, objectFormat: I.length === 64 ? "sha256" : "sha1", objectsDir: (0, import_path4.join)(n.commonDir, "objects") });
      if (D !== null) return L("check-attr", D);
      let j = wn(e, { gitDir: me, commonDir: me, workTree: E, configPins: n.configPins }, r.signal, (0, import_chunk_6s9tac84.ion)(n), i), ee = await gn(j, Ke, new Map(Ke.map((Z) => [Z, (0, import_chunk_w82axegn.lpe)(Z)])), { commit: I, indexPath: (0, import_path4.join)(me, "head.index"), objectsDir: (0, import_path4.join)(me, "verified") }, et);
      if (ee === "overflow") return L("check-attr", "too many changed files to read the attributes of");
      if (ee === "old_git") return L("check-attr", "a committed .gitattributes is a symbolic link, which the installed git (older than 2.32, or of a version this build cannot read) follows on disk: update git, then retry");
      if (ee === "tampered") return L("verify", "HEAD's commit, a tree on the way to a committed .gitattributes, or that file's blob is not the object its id names");
      if (ee === null) return L("check-attr", pr);
      Le = new Set(ee);
      let ge = (0, import_chunk_4smdap7r.M)([...Ke.filter((Z) => Le.has(Z)), ...z]);
      if (ge.length > 0 || ke.size > 0) {
        let Z = await xt(C, A, ge);
        if (Ce(Z)) return We(Z, "cat-file", "HEAD's trees to the changed files could not be read back as what their ids name");
        Jt = new Set(Le);
        let he = /* @__PURE__ */ new Set([...Le, ...z]), Me = (0, import_chunk_w71cxznt.Rl)(Tt, async (Se) => {
          let ot = await Jn(E, Se, A.length, hr, T), St = ke.get(Se);
          return ot !== null && (he.has(Se) || !ot.includes(St ?? "")) ? ot : [];
        }), Zt = (await Promise.all((0, import_chunk_4smdap7r.M)([...he, ...ke.keys()]).filter((Se) => !h(Se)).map(Me))).flat(), ct = (Se) => Se !== mn.sha1 && Se !== mn.sha256, ft = /* @__PURE__ */ new Set([...[...Z.values()].map(({ id: Se }) => Se).filter(ct), ...je.filter(({ path: Se }) => he.has(Se)).map(({ newId: Se }) => Se).filter(ct), ...Zt.filter(ct)]);
        $e = ft, je.filter(({ path: Se, newId: ot }) => ft.has(ot) && Qe(Se)).forEach(({ path: Se }) => Le.add(Se));
      }
      let te = Vt.filter((Z) => Le.has(Z));
      if (te.length > 0) {
        let Z = await pn(c, C, Y, A, te);
        if (Z !== null) return { kind: "failed", ...Z };
        let he = await c(["write-tree", "--ignore-cache-tree"], { GIT_INDEX_FILE: Y });
        if (he.code !== 0) return L("write-tree", he.stderr || he.stdout, he);
        se = he.stdout.trim(), W.push(...te.map((Me) => ({ path: Me, why: "filtered" })));
      }
    }
    let Et = new Set(W.flatMap(({ path: D, why: j }) => j === "filtered" ? [D] : [])), Ye = new Set(qt), G = je.flatMap(({ path: D, newMode: j }) => j !== sr && Qe(D) && !Ye.has(D) ? [D] : []), J = [...qt, ...await Ii(E, G)];
    if (J.length > 0 || G.length > 0) {
      let D = await (0, import_promises4.mkdtemp)((0, import_path4.join)(n.adminDir ?? (0, import_chunk_6s9tac84.Xfe)(), "claude-seed-stage-"));
      xe = D;
      let j = A.length === 64 ? "sha256" : "sha1", ee = await qn(E, D, J, r.maxStagedBytes ?? _i, { ...r.stageHooks, objectFormat: j, ntfsRules: T });
      if ("refused" in ee) return L("stage", ee.refused);
      let ge = await Ht(c, { GIT_INDEX_FILE: Y }, ee.entries.flatMap((B) => B.kind === "absent" ? [B.path] : []));
      if (ge === null) return L("ls-files", "could not list the index entries");
      let te = await Ya(ee, new Set(J), new Set(ce.flatMap(({ path: B, status: ye }) => ye === "D" || ge.unseen.has(B) ? [] : [B])), D, (B) => qn(E, D, B, r.maxStagedBytes ?? _i, { ...r.stageHooks, objectFormat: j, ntfsRules: T }));
      if ("refused" in te) return L("stage", te.refused);
      let Z = te.entries.find((B) => B.kind === "changed" && (!J.includes(B.path) || Vn(B.path)));
      if (Z !== void 0) return L("stage", `${Z.path} changed while it was being read`);
      let he = bi(wn(e, { ...n, workTree: xe }, r.signal, (0, import_chunk_6s9tac84.ion)(n), i)), Me = (B, ye, gt, tn, Ot) => he(ye?.GIT_INDEX_FILE === void 0 ? [...B] : ["-c", "core.splitIndex=false", ...B], ye, gt, tn, Ot), Zt = new Set(J), ct = (0, import_chunk_4smdap7r.M)([...te.entries.flatMap((B) => B.kind !== "absent" && Zt.has(B.path) ? [B.path] : []), ...je.flatMap(({ path: B, newMode: ye }) => ye !== sr && Qe(B) ? [B] : [])]), ft = await ur(n.commonDir);
      if (ft.kind !== "none") return L("check-attr", ft.kind === "touches" ? ".git/info/attributes sets or unsets filter attributes (or defines a macro, quotes a pattern, or holds a line of 2,048 bytes or more)" : ".git/info/attributes could not be read as a plain file");
      let Se = bi(wn(e, { gitDir: me, commonDir: me, workTree: xe, configPins: n.configPins }, r.signal, (0, import_chunk_6s9tac84.ion)(n), i)), ot = new Map(ct.map((B) => [B, (0, import_chunk_w82axegn.lpe)(B)])), [St, Qt] = await Promise.all([gn(Me, ct, ot, null, et), gn(Se, ct, ot, null, et)]);
      if (St === "overflow" || Qt === "overflow") return L("check-attr", "too many changed files to read the attributes of");
      if (St === null || !Array.isArray(St)) return L("check-attr", "could not read the attributes in force");
      if (Qt === null || !Array.isArray(Qt)) return L("check-attr", "could not read the staged .gitattributes on their own");
      let $r = St, Dr = Qt, en = new Set([...$r, ...Dr].filter((B) => !Jt.has(B))), Ao = (B) => B !== mn.sha1 && B !== mn.sha256, Io = (0, import_chunk_w71cxznt.Rl)(Tt, (B) => Jn(E, B, A.length, hr, T)), Oo = (await Promise.all([...en].filter((B) => !h(B)).map(Io))).flatMap((B) => B ?? []), Fr = new Set([...je.filter(({ path: B }) => en.has(B)).map(({ newId: B }) => B), ...Oo].filter(Ao)), Pr = je.filter(({ path: B, newId: ye }) => Fr.has(ye) && Qe(B) && !en.has(B) && !Le.has(B)).map(({ path: B }) => B);
      $e = /* @__PURE__ */ new Set([...$e, ...Fr]);
      let Lr = (0, import_chunk_4smdap7r.M)([...$r, ...Dr, ...te.entries.flatMap((B) => Le.has(B.path) ? [B.path] : []), ...Pr]), No = await ur(n.commonDir);
      if (!xi(ft, No)) return L("check-attr", ".git/info/attributes changed while the attributes were read");
      let Mr = (0, import_chunk_4smdap7r.M)([...Vt.filter((B) => en.has(B)), ...Pr]);
      if (Mr.length > 0) {
        let B = await pn(c, C, Y, A, Mr);
        if (B !== null) return { kind: "failed", ...B };
        let ye = await c(["write-tree", "--ignore-cache-tree"], { GIT_INDEX_FILE: Y });
        if (ye.code !== 0) return L("write-tree", ye.stderr || ye.stdout, ye);
        se = ye.stdout.trim();
      }
      let Gr = te.entries.flatMap((B) => (B.kind === "hardlinked" || B.kind === "changed") && Zt.has(B.path) && !Et.has(B.path) ? [{ path: B.path, why: B.kind === "hardlinked" ? "hardlinked" : "unstable" }] : []), $o = /* @__PURE__ */ new Set([...Et, ...Gr.map(({ path: B }) => B)]), jr = [...Gr, ...Lr.filter((B) => !$o.has(B)).map((B) => ({ path: B, why: "filtered" }))], Fn = /* @__PURE__ */ new Set([...jr.map(({ path: B }) => B), ...Lr]);
      W.push(...jr);
      let Pn = te.entries.flatMap((B) => B.kind === "file" || B.kind === "symlink" ? [B.path] : []), Ln = await Ht(c, void 0, Pn);
      if (Ln === null) return L("ls-files", "could not list the index entries");
      let Hr = Pn.filter((B) => !Fn.has(B)), Ur = await Ht(c, { GIT_INDEX_FILE: Y }, Hr);
      if (Ur === null) return L("ls-files", "could not list the index entries");
      if (Hr.some((B) => Ln.unseen.has(B) !== Ur.unseen.has(B))) return L("rewritten", "an entry this upload read was marked assume-unchanged or skip-worktree in one copy of the index and not the other since the build began");
      _t = new Map(je.map(({ path: B, newId: ye, newMode: gt }) => [B, { id: ye, mode: gt }]));
      let Do = new Set(ce.flatMap(({ path: B, newId: ye }) => /^0+$/.test(ye) ? [B] : []));
      it = Pn.filter((B) => Ln.unseen.has(B) && _t.has(B) && !Do.has(B) && !Fn.has(B));
      let Mn = /* @__PURE__ */ new Set([...Fn, ...it]), Gn = await Ia(c, Y, te.entries.filter((B) => !Mn.has(B.path)));
      if (Gn.kind === "failed") return Gn;
      let Wr = te.entries.flatMap((B) => B.kind === "absent" && Ye.has(B.path) && !ge.skipWorktree.has(B.path) ? [B.path] : []);
      we = Wr.filter((B) => !N.has(B));
      let jn = await Oi(c, { GIT_INDEX_FILE: Y }, A, Wr);
      if (jn.code !== 0) return L("update-index", jn.stderr, jn);
      let ht = te.entries.flatMap((B) => B.kind === "file" && !Mn.has(B.path) ? [B.path] : []);
      if (De = te.entries.flatMap((B) => (B.kind === "file" || B.kind === "symlink") && !Mn.has(B.path) ? [B.path] : []), q = new Map([...Gn.ids].map(([B, ye]) => [B, { mode: Wt, id: ye }])), ht.length > 0) {
        Fe = (0, import_path4.join)((0, import_path4.dirname)(Y), `replay-${(0, import_crypto.randomBytes)(6).toString("hex")}.index`);
        let B = await Ai(Y, Fe);
        if (B !== null) return L(B.kind === "disk" ? "scratch-index" : "rewritten", B.detail);
        let ye = await Ht(Me, { GIT_INDEX_FILE: Fe }, ht);
        if (ye === null) return L("update-index", "the laid paths could not be listed");
        if (ye.unseen.size > 0) return L("rewritten", "an entry this upload is about to lay was marked assume-unchanged or skip-worktree in the scratch index since it was written");
        let gt = (ve, Ae = Y) => Me(["-c", "core.bigFileThreshold=512m", "-c", "core.checkStat=default", "-c", "core.trustctime=true", "update-index", ...ve, "-z", "--add", "--stdin"], { GIT_INDEX_FILE: Ae }, ht.map((Nt) => `${Nt}\0`).join("")), tn = await gt(["--ignore-skip-worktree-entries"]), Ot = tn.exitCode === Rn ? await gt([]) : tn;
        if (Ot.code !== 0) return L("update-index", Ot.stderr, Ot);
        let nn = await Oa(Me, Fe, gt, ht);
        if (nn === null) return L("update-index", "the lay could not be replayed to learn the laid entries");
        let Fo = new Map(te.entries.flatMap((ve) => ve.kind === "file" ? [[ve.path, ve.copy]] : [])), Po = new Map([...ce.map(({ path: ve, oldMode: Ae }) => [ve, Ae]), ..._.inspection.staged.map(({ path: ve, newMode: Ae }) => [ve, Ae])]);
        if (ht.find((ve) => {
          let Ae = nn.get(ve)?.mode;
          return !(Ae !== void 0 && (Di.includes(Ae) || Ae === Wt && Po.get(ve) === Wt));
        }) !== void 0) return L("rewritten", "an entry this upload laid as a file is recorded as something else in the scratch index");
        if (ht.find((ve) => {
          let Ae = nn.get(ve)?.id, Nt = Fo.get(ve);
          return Nt === void 0 || Ae !== Nt.blobId && Ae !== Nt.lfBlobId;
        }) !== void 0) return L("rewritten", "an entry this upload laid does not hold the bytes staged for it");
        for (let ve of [Y, Fe]) {
          let Ae = await Ht(Me, { GIT_INDEX_FILE: ve }, ht);
          if (Ae === null) return L("update-index", "the laid paths could not be listed");
          if (Ae.unseen.size > 0 || Ae.absent.size > 0) return L("rewritten", "an entry this upload laid is marked assume-unchanged or skip-worktree in the scratch index, or is no longer there by its name");
        }
        if (!await oi(xe, te.copies)) return L("stage", "the staged copies changed while git read them");
        if (!xi(ft, await ur(n.commonDir))) return L("check-attr", ".git/info/attributes changed while the changes were hashed");
        nn.forEach((ve, Ae) => q.set(Ae, ve));
      }
    }
    let ne = await Oi(c, { GIT_INDEX_FILE: Y }, A, bt);
    if (ne.code !== 0) return L("update-index", ne.stderr, ne);
    let de = await c(["write-tree", "--ignore-cache-tree"], { GIT_INDEX_FILE: Y });
    if (de.code !== 0) return L("write-tree", de.stderr || de.stdout, de);
    let X = de.stdout.trim();
    if (r.leaveOutUncommittedCredentialFiles) {
      let D = await Si(C, A, X, y, T);
      if (Ce(D)) return We(D, "cat-file", jt);
      let j = D.filter(({ why: Z }) => Z !== "forged" && Z !== "alias");
      if (j.length > 0) {
        let Z = await pn(c, C, Y, A, j.map(({ path: Me }) => Me));
        if (Z !== null) return { kind: "failed", ...Z };
        let he = await c(["write-tree", "--ignore-cache-tree"], { GIT_INDEX_FILE: Y });
        if (he.code !== 0) return L("write-tree", he.stderr || he.stdout, he);
        X = he.stdout.trim(), W.push(...j);
      }
      let ee = await Promise.all((0, import_chunk_4smdap7r.M)([X, se]).map((Z) => Si(C, A, Z, y, T))), ge = ee.find(Ce);
      if (ge !== void 0) return We(ge, "cat-file", jt);
      let te = [...new Map(ee.flatMap((Z) => Ce(Z) ? [] : Z).map((Z) => [Z.path, Z])).values()];
      if (te.length > 0) return { kind: "refused", refused: te, decidedOn: "tree" };
    }
    let Be = await Gt(C, A, se);
    if (Ce(Be)) return We(Be, "cat-file", jt);
    let ie = Be.filter(({ status: D, newId: j }) => D !== "D" && $e.has(j));
    if (ie.length > 0) return Ri(ie);
    let Xe = X === se ? Be : await Gt(C, A, X);
    if (Ce(Xe)) return We(Xe, "cat-file", jt);
    if (X !== se) {
      let D = new Set(De), j = Xe.filter(({ path: ee, status: ge, newId: te }) => ge !== "D" && !D.has(ee) && $e.has(te));
      if (j.length > 0) return Ri(j);
    }
    if (it.length > 0) {
      let D = [Be, Xe].map((ee) => new Map(ee.map(({ path: ge, status: te, newId: Z, newMode: he }) => [ge, te === "D" ? null : { mode: he, id: Z }])));
      if (it.find((ee) => D.some((ge) => {
        let te = ge.get(ee), Z = _t.get(ee);
        return te === void 0 || te === null || Z === void 0 || te.id !== Z.id || te.mode !== Z.mode;
      })) !== void 0) return L("rewritten", "a staged entry this upload left as the index had it was replaced in the scratch index before the trees were written");
    }
    if (De.length > 0) {
      let D = new Map(Xe.map(({ path: te, status: Z, newId: he, newMode: Me }) => [te, Z === "D" ? null : { mode: Me, id: he }])), j = De.filter((te) => !D.has(te)), ee = j.length > 0 ? await xt(C, A, j) : /* @__PURE__ */ new Map();
      if (Ce(ee)) return We(ee, "cat-file", jt);
      if (De.find((te) => {
        let Z = D.has(te) ? D.get(te) : ee.get(te), he = q.get(te);
        return Z === null || Z === void 0 || he === void 0 || Z.id !== he.id || Z.mode !== he.mode;
      }) !== void 0) return L("rewritten", "an entry this upload laid was replaced in the scratch index before the work tree was written");
    }
    if (X === A && se === A) return { kind: "none", leftOut: W };
    let ut = await Ka(c, I), Ie = await c(["commit-tree", se, "-p", I, "-m", `index on ${ut}`], En);
    if (Ie.code !== 0) return L("commit-tree", Ie.stderr, Ie);
    let qe = await c(["commit-tree", X, "-p", I, "-p", Ie.stdout.trim(), "-m", `WIP on ${ut}`], En);
    if (qe.code !== 0) return L("commit-tree", qe.stderr, qe);
    let ue = [{ id: Ie.stdout.trim(), tree: se, parents: [I] }, { id: qe.stdout.trim(), tree: X, parents: [I, Ie.stdout.trim()] }];
    for (let { id: D, tree: j, parents: ee } of ue) {
      let ge = await C.commit(D);
      if (Ce(ge)) return We(ge, "commit-tree", wi);
      if (ge.tree !== j || ge.parents.length !== ee.length || ge.parents.some((te, Z) => te !== ee[Z])) return L("verify", wi);
    }
    return { kind: "created", commit: qe.stdout.trim(), leftOut: W, deletedUnstaged: [...we] };
  } catch (Q) {
    return L("scratch-index", (0, import_chunk_jv7av99m.d)(Q));
  } finally {
    await Promise.all([...[Y, `${Y}.lock`, ...Fe === null ? [] : [Fe, `${Fe}.lock`]].map((Q) => (0, import_promises4.unlink)(Q).catch(() => {
    })), ...[...le === null ? [] : [le], ...xe === null ? [] : [xe], ...me === null ? [] : [me]].map((Q) => (0, import_promises4.rm)(Q, { recursive: true, force: true }).catch(() => {
    }))]);
  }
}
var aa = "tengu_mellow_thimble", da = 3e4;
async function xn(e, n, r = (0, import_chunk_6s9tac84.hLn)()) {
  if ((0, import_chunk_cg8dqz0a.x)() === "windows" && !(0, import_chunk_ha393e1n.Yq)() && !(0, import_chunk_ha393e1n.Vfo)() || !(0, import_chunk_sghy0qej.Pe)(aa, { safe: true })) return { ok: true, off: [], drivers: /* @__PURE__ */ new Set() };
  let i = [], o = await (0, import_chunk_859v5edd.hpe)(e, { repository: [...import_chunk_gd77dyw4.Nn, ...import_chunk_6s9tac84.Vne], movesNoLfsObjects: true, timeoutMs: da, run: async (g, { cwd: p, timeout: y, maxBuffer: _ }) => {
    let k = await (0, import_chunk_6s9tac84.mLn)(g, { cwd: p, abortSignal: n, env: { ...r, ...import_chunk_6s9tac84.yLn, ...import_chunk_859v5edd.N_r, GIT_CONFIG: void 0 }, extendEnv: false, timeout: y, maxBuffer: _ });
    if (k.code !== 0 && k.maxBufferExceeded !== true) i.push(k);
    return { ...k, stderr: (0, import_chunk_6s9tac84.PWe)(k) };
  } });
  if (!o.ok) {
    let g = o.reason === "config_unreadable" ? i.at(-1) : void 0;
    return { ok: false, detail: (0, import_chunk_859v5edd.XDe)(o), ...g !== void 0 && { listing: g } };
  }
  let c = o.entries.find(([g]) => (0, import_chunk_859v5edd.cll)(g));
  if (c !== void 0) return { ok: false, detail: `the repository's own git config sets ${(0, import_chunk_859v5edd.GNn)(c[0])}, which can run a program or lift the settings that keep its filters off (${import_chunk_859v5edd.F_r})` };
  let h = (0, import_chunk_859v5edd.U9e)(o.entries);
  if (!h.ok) return { ok: false, detail: h.reason === "filter_name_unrepresentable" ? "the repository's own git config names a filter with = or a line break in its name, so it cannot be switched off" : (0, import_chunk_859v5edd.XDe)(h) };
  return { ok: true, off: [...h.args, "-c", "commit.gpgsign=false"], drivers: new Set((0, import_chunk_859v5edd.L_r)(o.entries.map(([g]) => g))) };
}
async function Li(e, n, r, i) {
  let o = await xn(e, r);
  if (!o.ok) return o.listing !== void 0 ? ki(o.listing, n) : { ...L("stash create", o.detail), said: "own_config_refused" };
  let c = await (0, import_chunk_6s9tac84.cw)(e, [...import_chunk_6s9tac84.Vne, ...(0, import_chunk_6s9tac84.gst)(i), ...o.off, ...import_chunk_6s9tac84.iCi, "stash", "create"], { hardened: false, signal: r, env: { ...import_chunk_6s9tac84.rwt, ...(0, import_chunk_6s9tac84.hst)(i) } });
  if (c.code === 0) {
    let h = c.stdout.trim();
    if (h === "") return { kind: "none", leftOut: [] };
    if (o.drivers.size === 0) return { kind: "created", commit: h, leftOut: [], deletedUnstaged: [] };
    let g = { hardened: false, signal: r, env: { ...import_chunk_6s9tac84.rwt, ...(0, import_chunk_6s9tac84.hst)(i) } }, p = await (0, import_chunk_6s9tac84.cw)(e, [...import_chunk_6s9tac84.Vne, "diff-tree", "-r", "-z", "--name-only", "--no-renames", "--ignore-submodules=none", "--diff-filter=d", `${h}^2`, h, "--"], g);
    if (p.stdout.includes("\uFFFD")) return L("path-encoding", "a changed path is not valid UTF-8");
    let y = await (0, import_chunk_6s9tac84.cw)(e, [...import_chunk_6s9tac84.Vne, "rev-parse", "--show-cdup"], g), _ = p.code === 0 && y.code === 0 ? await (0, import_chunk_6s9tac84.cw)(e, [...import_chunk_6s9tac84.Vne, ...(0, import_chunk_6s9tac84.gst)(i), "check-attr", "-z", "--stdin", "filter"], { ...g, input: p.stdout.split("\0").slice(0, -1).map((C) => `${y.stdout.trim()}${C}\0`).join("") }) : { code: 1, stdout: "" };
    if (_.code !== 0) return L("check-attr", "git could not say which files use the repository's own filters");
    let k = _.stdout.split("\0").slice(0, -1), E = k.flatMap((C, v) => {
      let T = k[v + 2];
      return v % 3 === 0 && T !== void 0 && o.drivers.has(T) ? [{ path: C, driver: T }] : [];
    });
    if (E.length === 0) return { kind: "created", commit: h, leftOut: [], deletedUnstaged: [] };
    let I = (0, import_chunk_4smdap7r.M)(E.map(({ driver: C }) => C)).join(", "), A = E.slice(0, 3).map(({ path: C }) => C), R = E.length - A.length;
    return { ...L("stash create", `${E.length} ${(0, import_chunk_7cfjrnwy.O)(E.length, "file uses", "files use")} a filter from this repository's git config (${(0, import_chunk_tp3c5q2s.Qa)(I)}): ${(0, import_chunk_tp3c5q2s.Qa)(A.join(", "))}${R > 0 ? ` and ${R} more` : ""}. Uploads don't run such filters, so ${(0, import_chunk_7cfjrnwy.O)(E.length, "it", "they")} would go up unfiltered.`), said: "own_filter_file" };
  }
  return ki(c, n);
}
function ki(e, n) {
  let r = (0, import_chunk_6s9tac84.PWe)(e).trim() === "";
  if (e.exitCode === 1 && r) return (0, import_chunk_w578pjby.t)(`[gitBundle] git stash create exited ${e.code} with no output \u2014 treating as no uncommitted changes`), { kind: "none", leftOut: [] };
  return !n ? { kind: "none", leftOut: [] } : r ? { ...L("stash create", e.exitCode === void 0 ? "it was stopped, ran out of time or could not start, and left no message" : `it ended with exit status ${e.exitCode} and left no message`), silent: r } : L("stash create", e.stderr, e);
}
async function pn(e, n, r, i, o) {
  let c = await xt(n, i, o);
  if (Ce(c)) return We(c, "cat-file", "the trees holding the entries to restore could not be read back as what their ids name");
  let h = `0 ${"0".repeat(i.length)}`, g = await e(["update-index", "-z", "--index-info"], { GIT_INDEX_FILE: r }, o.map((_) => {
    let k = c.get(_);
    return `${k === void 0 ? h : `${k.mode.padStart(6, "0")} ${k.id}`}	${_}\0`;
  }).join(""));
  if (g.code !== 0) return L("update-index", g.stderr, g);
  let p = _a((0, import_chunk_6s9tac84.PWe)(g), o);
  if (p.length > 0) return { step: "refused-name", detail: `git refuses a name it was asked to restore: ${p.slice(0, 3).join(", ")}` };
  let y = await (0, import_chunk_dkc86g0t.dcs)(e, r, new Set(o), (0, import_path4.dirname)(r));
  if (y === null) return { step: "ls-files", detail: "could not list the index entries" };
  return o.some((_) => {
    let k = y.get(_);
    return k !== void 0 && !(0, import_chunk_dkc86g0t.acs)(k) || k?.id !== c.get(_)?.id || k?.mode !== c.get(_)?.mode.padStart(6, "0");
  }) ? { step: "verify", detail: "the entries just restored are not the ones the verified trees hold" } : null;
}
async function la(e) {
  let n = (0, import_crypto.createHash)("sha256");
  return await (0, import_chunk_dkc86g0t._co)(e, (r) => {
    n.update(r);
  }), n.digest("hex");
}
function ar({ detail: e, run: n }) {
  return L("read-tree", e, n);
}
async function ua(e, n, r, i, o, c) {
  let h = await (0, import_promises4.mkdtemp)((0, import_path4.join)(r, "claude-seed-listings-"));
  try {
    let g = 0, p = async (C, v, T) => {
      let H = T.length === 0 ? [] : ["--", ".", ...T.map((W) => `:(exclude,literal)${W}`)];
      for (let W of [["--sparse"], []]) {
        let z = await (0, import_promises4.open)((0, import_path4.join)(h, `${C}.${g++}`), import_chunk_dkc86g0t.yco, 384);
        try {
          let F = await e(["ls-files", ...W, "-s", "-z", ...H], { GIT_GLOB_PATHSPECS: "0", GIT_ICASE_PATHSPECS: "0", ...v }, void 0, void 0, z.fd);
          if (F.code === 0) return await la(z);
          if (F.exitCode !== Rn || W.length === 0) return { detail: F.stderr || "could not list the index", run: F };
        } finally {
          await z.close();
        }
      }
      return { detail: "could not list the index" };
    }, y = async (C) => {
      let [v, T] = await Promise.all([p("trees", { GIT_INDEX_FILE: n }, []), p("index", void 0, C)]);
      if (typeof v !== "string") return v;
      if (typeof T !== "string") return T;
      return v === T ? "agree" : "differ";
    }, _ = await y([]);
    if (_ !== "differ") return _ === "agree" ? { kind: "agree" } : ar(_);
    let k = await e(["diff-files", "-z", "--name-only", "--diff-filter=AD", "--ignore-submodules=dirty"], import_chunk_dkc86g0t.owt);
    if (k.code !== 0) return ar({ detail: k.stderr, run: k });
    let E = k.stdout.split("\0").filter((C) => C !== ""), I = await xt(i, o, E);
    if (Ce(I)) return We(I, "cat-file", "the index's trees could not be read back as what their ids name");
    let A = E.filter((C) => !I.has(C));
    if (A.length === 0 || A.some((C) => !Ge(C, c))) return { kind: "differ" };
    let R = await y(A);
    return R === "agree" ? { kind: "agree" } : R === "differ" ? { kind: "differ" } : ar(R);
  } finally {
    await (0, import_promises4.rm)(h, { recursive: true, force: true }).catch(() => {
    });
  }
}
async function ca(e, n, r, i, o, c, h) {
  let g = await (0, import_promises4.mkdtemp)((0, import_path4.join)(o, "claude-seed-ids-"));
  try {
    let p = 0;
    for (let y of [["--sparse"], []]) {
      let _ = await (0, import_promises4.open)((0, import_path4.join)(g, `index.${p++}`), import_chunk_dkc86g0t.yco, 384);
      try {
        let k = await e(["ls-files", ...y, "-s", "-z"], { GIT_INDEX_FILE: n }, void 0, void 0, _.fd);
        if (k.code === 0) {
          let E = [], I = /* @__PURE__ */ new Map(), A = "";
          if (await (0, import_chunk_dkc86g0t._co)(_, (R) => {
            if (h?.aborted) return;
            let C = (A + R.toString("latin1")).split("\0");
            A = C.pop() ?? "";
            for (let v of C) {
              let T = v.indexOf("	"), [, H = "", W = ""] = v.slice(0, T).split(" "), z = Buffer.from(v.slice(T + 1), "latin1").toString("utf8");
              if (!Ge(z, c) || tt(z)) continue;
              if (W === "0" && i(z)) I.set(z, H);
              let F = r.get(H);
              if (F !== void 0 && z !== F) E.push(z);
            }
          }), h?.aborted) return null;
          return A === "" ? { elsewhere: E, withheldTracked: I } : null;
        }
        if (k.exitCode !== Rn) return null;
      } finally {
        await _.close();
      }
    }
    return null;
  } finally {
    await (0, import_promises4.rm)(g, { recursive: true, force: true }).catch(() => {
    });
  }
}
var pr = "HEAD's commit or its .gitattributes could not be read to be verified", fa = "internal error: no git directory was chosen for this linked worktree, so git was not run";
function wn(e, n, r, i, o = (0, import_chunk_6s9tac84.ADe)(), { hardenedMaxBuffer: c } = {}) {
  if (n.checkout === "linked" && n.adminDir === void 0 && n.runsInOwnDirectories !== true) return () => Promise.resolve({ stdout: "", stderr: fa, code: 126 });
  let h = i ?? (0, import_chunk_6s9tac84.ion)(n), g = o.screenMemo ?? (0, import_chunk_6s9tac84.ocs)();
  return (p, y, _, k, E) => (0, import_chunk_6s9tac84.cw)(e, p, { hardened: true, layout: n, signal: r, probes: o, env: y, input: _, ...k !== void 0 && { encoding: k }, ...E !== void 0 && { stdoutFd: E }, ...h !== void 0 && { reachRoots: h, screenMemo: g }, ...c !== void 0 && { hardenedMaxBuffer: c } });
}
async function ha(e, n) {
  let r = await e(["rev-parse", "-q", "--verify", "HEAD"]);
  if (r.code !== 0) return r.exitCode === 1 ? { kind: "none", leftOut: [] } : L("rev-parse", r.stderr, r);
  let i = await e(["rev-parse", "-q", "--verify", `${r.stdout.trim()}^{commit}`]);
  if (i.code !== 0) {
    let T = await e(["cat-file", "-t", r.stdout.trim()]);
    return T.code === 0 && ["tree", "blob"].includes(T.stdout.trim()) ? L("verify", "HEAD names a tree or blob, not a commit") : L("rev-parse", i.stderr || "HEAD is not a commit");
  }
  let o = i.stdout.trim(), c = new er(Qn(e, n), o), [h, g] = await Promise.all([c.commit(o), e(["write-tree", "--ignore-cache-tree"])]);
  if (Ce(h)) return We(h, "rev-parse", "HEAD could not be read back as the commit its id names");
  if (g.code !== 0) return L("write-tree", g.stderr || g.stdout, g);
  let p = h.tree, y = g.stdout.trim(), _ = await Gt(c, p, y);
  if (Ce(_)) return We(_, "cat-file", "HEAD's or the index's trees could not be read back as what their ids name");
  let k = _, E = await e(["--no-optional-locks", "diff-files", "-z", "--no-renames", "--ignore-submodules=dirty"]), I = E.code === 0 ? ba(E.stdout) : null;
  if (I === null) return L("diff-files", E.stderr, E);
  if ([...I, ...k].some(({ path: T }) => T.includes("\uFFFD"))) return L("path-encoding", "a changed path is not valid UTF-8");
  let A = await xt(c, p, I.map(({ path: T }) => T));
  if (Ce(A)) return We(A, "cat-file", "HEAD's trees to the changed files could not be read back as what their ids name");
  let R = "0".repeat(p.length), C = new Set(I.map(({ path: T }) => T)), v = [...k.filter(({ path: T }) => !C.has(T)), ...I.flatMap((T) => {
    let H = A.get(T.path);
    if (T.status === "D") return H === void 0 || Ei(T, A) ? [] : [{ path: T.path, status: "D", oldMode: H.mode.padStart(6, "0"), newMode: "000000", oldId: H.id, newId: R }];
    return [{ path: T.path, status: H === void 0 ? "A" : "M", oldMode: H === void 0 ? "000000" : H.mode.padStart(6, "0"), newMode: T.newMode, oldId: H?.id ?? R, newId: R }];
  })];
  return { kind: "inspected", inspection: { base: o, baseTree: p, iTree: y, staged: k, working: v, reader: c, namesWindowsCannotHold: (0, import_chunk_4smdap7r.U)(I, (T) => Ei(T, A)) } };
}
function Ei(e, n) {
  return (0, import_chunk_cg8dqz0a.x)() === "windows" && e.status === "D" && n.has(e.path) && (0, import_chunk_p6rv87rz.AEl)(e.path) && !e.path.includes("\\") && Ge(e.path, true) && !tt(e.path);
}
function ga({ staged: e, working: n }, r) {
  return (0, import_chunk_4smdap7r.M)([...e, ...n].map(({ path: o }) => o)).sort().flatMap((o) => !Ge(o, r) ? [{ path: o, why: "forged" }] : tt(o) ? [{ path: o, why: "alias" }] : []);
}
async function ma(e, { staged: n, working: r }, i, o, c = () => false) {
  let h = (0, import_chunk_4smdap7r.M)([...n, ...r].map(({ path: N }) => N)), g = h.filter((N) => !Ge(N, o)), p = h.filter((N) => Ge(N, o) && tt(N)), y = /* @__PURE__ */ new Set([...g, ...p]), _ = ({ path: N }) => !y.has(N) && i(N), k = n.filter(_), E = new Set(k.map(({ path: N }) => N)), I = (0, import_chunk_w71cxznt.Rl)(Tt, async (N) => !E.has(N.path) && !c(N.path) && await Gi(e, N, o) === "unchanged" ? [] : [N]), A = (await Promise.all(r.filter(_).map(I))).flat(), R = (0, import_chunk_4smdap7r.M)([...k, ...A].filter(({ status: N }) => N === "A").map(({ path: N }) => N)), C = new Set(R), v = (0, import_chunk_4smdap7r.M)([...k, ...A].filter(({ path: N, status: oe }) => oe !== "D" && !C.has(N)).map(({ path: N }) => N)), T = /* @__PURE__ */ new Set([...R, ...v]), H = (0, import_chunk_4smdap7r.M)([...k, ...A].map(({ path: N }) => N).filter((N) => !T.has(N))), W = (0, import_chunk_w71cxznt.Rl)(Tt, async (N) => await wr(e, N) ? [N] : []), z = (await Promise.all(H.map(W))).flat();
  return [...g.map((N) => ({ path: N, why: "forged" })), ...p.map((N) => ({ path: N, why: "alias" })), ...R.map((N) => ({ path: N, why: "added" })), ...v.map((N) => ({ path: N, why: "changed" })), ...z.map((N) => ({ path: N, why: "resurrected" }))].sort((N, oe) => N.path < oe.path ? -1 : N.path > oe.path ? 1 : 0);
}
async function Si(e, n, r, i, o) {
  let c = await Gt(e, n, r);
  if (Ce(c)) return c;
  let h = c.filter(({ path: p, status: y }) => y !== "D" && (!Ge(p, o) || tt(p) || i(p))), g = new Map(h.map(({ path: p, status: y }) => [p, y]));
  return (0, import_chunk_4smdap7r.M)(h.map(({ path: p }) => p)).sort().map((p) => ({ path: p, why: !Ge(p, o) ? "forged" : tt(p) ? "alias" : g.get(p) === "A" ? "added" : "changed" }));
}
var pa = /invalid object \d+ [0-9a-f]+ for|could not fetch [0-9a-f]+ from promisor remote|lazy fetching disabled|missing blob/, wa = /needs merge|you need to resolve your current index first|unmerged/i;
function ya(e) {
  let n = (0, import_chunk_7cfjrnwy.Ir)((0, import_chunk_6s9tac84.PWe)(e).trim());
  return pa.test(n) ? "object_missing" : wa.test(n) ? "unmerged" : n.includes("index.lock") ? "index_locked" : void 0;
}
function L(e, n, r) {
  let i = r && ya(r);
  return { kind: "failed", step: e, detail: (0, import_chunk_7cfjrnwy.Ir)(n.trim()), ...i !== void 0 && { said: i } };
}
function Ri(e) {
  return { kind: "refused", refused: e.map(({ path: n }) => ({ path: n, why: "same-bytes" })), decidedOn: "tree" };
}
function _a(e, n) {
  let r = new Set(e.split(`
`));
  return n.filter((i) => r.has(`Ignoring path ${i}`));
}
function We(e, n, r) {
  return e.failed === "tampered" ? L("verify", r) : e.failed === "malformed" ? L("malformed-tree", e.dir ?? "") : L(n, r);
}
function Mi(e) {
  return e === void 0 || e === "" ? "the top of the checkout" : `directory '${(0, import_chunk_7cfjrnwy.Ea)(e.replace(/[\p{Cc}\p{Cf}']/gu, "?"), 120)}'`;
}
function ba(e) {
  let n = e.split("\0");
  if (n.pop() !== "" || n.length % 2 !== 0) return null;
  let r = Array.from({ length: n.length / 2 }, (i, o) => {
    let c = ia.exec(n[2 * o]);
    return c ? { path: n[2 * o + 1], oldMode: c[1], newMode: c[2], oldId: c[3], newId: c[4], status: c[5] } : null;
  });
  return r.every((i) => i !== null) ? r : null;
}
function xi(e, n) {
  return e.kind !== "unreadable" && n.kind === "none" && (e.bytes === null ? n.bytes === null : n.bytes !== null && e.bytes.equals(n.bytes)) && ka(e.stamp, n.stamp);
}
function ka(e, n) {
  return e === null || n === null ? e === n : e.ino === n.ino && e.size === n.size && e.mtimeMs === n.mtimeMs && e.ctimeMs === n.ctimeMs;
}
function _n(e) {
  return { size: Number(e.size), mtimeMs: Number(e.mtimeNs) / 1e6, ctimeMs: Number(e.ctimeNs) / 1e6, ino: e.ino };
}
async function lr(e, n = import_promises4.lstat) {
  try {
    return await n(e, { bigint: true });
  } catch (r) {
    if ((0, import_chunk_jv7av99m.w)(r) === "ENOENT" || (0, import_chunk_jv7av99m.w)(r) === "ENOTDIR") return null;
    throw r;
  }
}
var Sa = /(?:^|\s|")[-!]?(?:filter|working-tree-encoding|ident)(?:=|\s|$)/, Ra = /^[ \t\r]*(?:\[attr\]|")/, xa = 2048;
function Ta(e) {
  return e.split(`
`).some((n) => Buffer.byteLength(n) >= xa);
}
function va(e) {
  return e.replace(/^\uFEFF/, "").split(`
`).map((n) => (0, import_chunk_7cfjrnwy.nt)(n, "\0")).filter((n) => !/^[ \t\r]*#/.test(n));
}
async function Ca(e, n) {
  let r = (0, import_chunk_cg8dqz0a.x)(), [i, o] = await Promise.all([(0, import_promises4.lstat)((0, import_path4.join)(n, ".git"), { bigint: true }).catch(() => null), (0, import_promises4.lstat)((0, import_path4.join)(n, ".GIT"), { bigint: true }).catch(() => null)]), c = i !== null && o !== null && i.ino === o.ino && i.dev === o.dev, h = await e(["config", "--bool", "core.ignorecase"]);
  return { caseBlind: r === "macos" || r === "windows" || c || h.code === 0 && h.stdout.trim() === "true", normalizationBlind: r === "macos" };
}
async function ur(e, { shouldStampAbove: n = false, shouldStopAtLink: r = false } = {}) {
  let i = (0, import_path4.join)(e, "info"), o = (0, import_path4.join)(i, "attributes"), c = await Ba(i, n, r).catch(() => {
    return;
  });
  if (c === void 0) return { kind: "unreadable", bytes: null, stamp: null };
  if (r && c.link) return { kind: "none", bytes: null, stamp: null, dir: c };
  try {
    if ((0, import_chunk_cg8dqz0a.x)() === "windows" && !(await (0, import_promises4.lstat)(o)).isFile()) return { kind: "unreadable", bytes: null, stamp: null };
    let h = await (0, import_promises4.open)(o, (0, import_chunk_6mfepmbb.Xu)());
    try {
      let g = await h.stat({ bigint: true });
      if (!g.isFile() || g.size > oa) return { kind: "unreadable", bytes: null, stamp: null };
      let p = _n(g), y = Number(g.size);
      if (y === 0) return { kind: "none", bytes: Buffer.alloc(0), stamp: p, dir: c };
      let _ = Buffer.alloc(y), { bytesRead: k } = await h.read(_, 0, y, 0);
      if (k !== y) return { kind: "unreadable", bytes: null, stamp: null };
      let E = _.toString("utf8"), I = va(E), A = Ta(E) ? "overlong_line" : I.some((R) => Ra.test(R)) ? "macro_or_quoted" : I.some((R) => Sa.test(R)) ? "rule" : void 0;
      return A === void 0 ? { kind: "none", bytes: _, stamp: p, dir: c } : { kind: "touches", by: A, bytes: _, stamp: p, dir: c };
    } finally {
      await h.close();
    }
  } catch (h) {
    return (0, import_chunk_jv7av99m.w)(h) === "ENOENT" || (0, import_chunk_jv7av99m.w)(h) === "ENOTDIR" ? { kind: "none", bytes: null, stamp: null, dir: c } : { kind: "unreadable", bytes: null, stamp: null };
  }
}
async function Ba(e, n, r) {
  let i = await lr(e), o = n && i === null ? await lr((0, import_path4.dirname)(e)) : null, c = !i?.isSymbolicLink() ? i : r ? null : await lr(e, import_promises4.stat), h = (0, import_chunk_cg8dqz0a.x)() === "windows" && i?.isDirectory() === true ? await (0, import_chunk_z6pfqf6e.A2)(e) : null, g = h !== null && h.kind !== "directory" && !(h.kind === "error" && h.code === "EISDIR");
  return { node: i && _n(i), link: (i?.isSymbolicLink() ?? false) || g, target: c && _n(c), ...o && { above: _n(o) } };
}
async function Aa(e, n) {
  if (!(0, import_path4.isAbsolute)(n.objectsDir) || /[\r\n]/.test(n.objectsDir) || /^["#]/.test(n.objectsDir)) return "the objects directory cannot be named in an alternates file";
  let r = { flag: import_chunk_dkc86g0t.lcs, mode: 384 };
  return await (0, import_promises4.mkdir)((0, import_path4.join)(e, "objects", "info"), { recursive: true, mode: 448 }), await Promise.all([(0, import_promises4.mkdir)((0, import_path4.join)(e, "refs"), { mode: 448 }), (0, import_promises4.writeFile)((0, import_path4.join)(e, "HEAD"), `ref: refs/heads/attributes-view
`, r), (0, import_promises4.writeFile)((0, import_path4.join)(e, "config"), ["[core]", `	repositoryformatversion = ${n.objectFormat === "sha256" ? 1 : 0}`, `	ignorecase = ${n.caseBlind}`, ...n.objectFormat === "sha256" ? ["[extensions]", "	objectformat = sha256"] : [], ""].join(`
`), r), (0, import_promises4.writeFile)((0, import_path4.join)(e, "objects", "info", "alternates"), `${n.objectsDir}
`, r)]), null;
}
async function Ia(e, n, r) {
  let i = r.filter((g) => g.kind === "symlink"), o = [], c = /* @__PURE__ */ new Map();
  for (let g of i) {
    let p = g.target.toString("utf8");
    if (!Buffer.from(p, "utf8").equals(g.target)) return L("path-encoding", `${g.path}: link target is not valid UTF-8`);
    let y = await e(["hash-object", "-w", "--stdin"], void 0, p);
    if (y.code !== 0) return L("hash-object", y.stderr, y);
    o.push(`${Wt} ${y.stdout.trim()}	${g.path}`), c.set(g.path, y.stdout.trim().toLowerCase());
  }
  if (o.length === 0) return { kind: "laid", ids: c };
  let h = await e(["update-index", "-z", "--index-info"], { GIT_INDEX_FILE: n }, o.map((g) => `${g}\0`).join(""));
  return h.code === 0 ? { kind: "laid", ids: c } : L("update-index", h.stderr, h);
}
async function Oa(e, n, r, i) {
  let o = await r(["--ignore-skip-worktree-entries"], n);
  if ((o.exitCode === Rn ? await r([], n) : o).code !== 0) return null;
  let h = new Set(i), g = /* @__PURE__ */ new Map(), p = await (0, import_promises4.open)(`${n}.listing`, import_chunk_dkc86g0t.yco, 384);
  try {
    if ((await e(["ls-files", "-s", "-z"], { GIT_INDEX_FILE: n }, void 0, void 0, p.fd)).code !== 0) return null;
    let _ = "";
    await (0, import_chunk_dkc86g0t._co)(p, (k) => {
      let E = (_ + k.toString("latin1")).split("\0");
      _ = E.pop() ?? "";
      for (let I of E) {
        let A = I.indexOf("	"), [R, C, v] = A === -1 ? [] : I.slice(0, A).split(" "), T = Buffer.from(I.slice(A + 1), "latin1").toString("utf8");
        if (R !== void 0 && C !== void 0 && v === "0" && h.has(T)) g.set(T, { mode: R, id: C.toLowerCase() });
      }
    });
  } finally {
    await p.close().catch(() => {
    }), await (0, import_promises4.rm)(`${n}.listing`, { force: true }).catch(() => {
    });
  }
  return i.every((y) => g.has(y)) ? g : null;
}
async function wr(e, n) {
  if (n.includes("\uFFFD") || await rt(e, n) !== "clear") return true;
  try {
    return !(await (0, import_promises4.lstat)((0, import_path4.join)(e, n))).isDirectory();
  } catch (r) {
    let i = (0, import_chunk_jv7av99m.w)(r);
    return i !== "ENOENT" && i !== "ENOTDIR";
  }
}
async function Gi(e, { path: n, status: r, oldMode: i, newMode: o, oldId: c, newId: h }, g, p = hr, y) {
  if (r !== "M" || i !== o || !Fi.test(h) || c.length !== 40 || n.includes("\uFFFD")) return "changed";
  if (await rt(e, n) !== "clear") return "changed";
  try {
    let _ = await ln(e, n, g);
    if (_.kind === "symlink") return o === Wt && (yi(_.target) === c || (0, import_chunk_cg8dqz0a.x)() === "windows" && yi(await (0, import_promises4.readlink)((0, import_path4.join)(e, n), { encoding: "buffer" })) === c) ? "unchanged" : "changed";
    if (_.kind !== "file") return _.kind === "refused" ? "open_refused" : "changed";
    let { handle: k, size: E } = _;
    try {
      if (!Di.includes(o) || E > p) return "changed";
      let I = await k.stat({ bigint: true }), A = (0, import_crypto.createHash)("sha1").update(`blob ${E}\0`), R = Buffer.allocUnsafe(Math.min(E, 1048576)), C = 0;
      while (C < E) {
        if (y?.aborted) return "changed";
        let { bytesRead: T } = await k.read(R, 0, Math.min(R.length, E - C), C);
        if (T === 0) return "changed";
        A.update(R.subarray(0, T)), C += T;
      }
      if (A.digest("hex") !== c) return "changed";
      let v = await k.stat({ bigint: true });
      return I.size === BigInt(E) && v.size === I.size && v.mtimeNs === I.mtimeNs && v.ctimeNs === I.ctimeNs && v.nlink === 1n ? "unchanged" : "changed";
    } finally {
      await k.close();
    }
  } catch {
    return "changed";
  }
}
var Na = /^ccr-seed-([0-9]+)-[0-9a-f]{12}\.index(?:\.lock)?$/, yn = /env|netrc|npmrc|yarnrc|pypirc|pgpass|\.cnf|terraform|tfvars|tfstate|boto|s3cfg|credential|gitconfig|mcp|claude|config|bash|profile|zsh|zlog|fish|history|consolehost|\.(?:pem|key|p12|pfx|keystore|jks|kdbx|ovpn|vars|ssh|aws|azure|gnupg|kube|docker|git)|_(?:rsa|dsa|ecdsa|ed25519)|secret|settings|gradle\.properties|device-keys|service.?account|deploy_key|htpasswd|htdigest|vault[-_](?:token|pass)|dockercfg|msmtprc|fetchmailrc|sentryclirc|clasprc|transifexrc|databrickscfg|remote-sync|wakatime/i, ji = `[${import_chunk_w82axegn.ufs.replace(/[\\\]^-]/g, "\\$&")}]|_${import_chunk_w82axegn.mxi}_`, $a = (0, import_chunk_4smdap7r.M)(import_chunk_w82axegn.oUt.map(([e]) => e)), Ti = new RegExp(`(?:^|/)(?:(?:${ji})[^/]*)?(?:\\.(?:ssh|aws|azure|gnupg|kube|docker|config|cargo|gem|m2|gradle|claude)|documents|appdata|library|(?:${$a.join("|")})(?![a-z0-9-]))|\\.git`, "i"), vi = import_chunk_w82axegn.ufs.replace(/[\\\]^-]/g, "\\$&"), fr = new RegExp(`(?:[${vi}][^/${vi}]*){4}|${import_chunk_w82axegn.c_r}`, "i"), Da = new RegExp(`(?:^|/)[^/]{${import_chunk_w82axegn.qq + 1}}`);
function Fa() {
  let e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  return (i) => {
    if (!(0, import_chunk_k2pr2qmg.Nrr)(i) || i.includes("\\") || i.includes(":") && (0, import_chunk_cg8dqz0a.x)() === "windows") return (0, import_chunk_w82axegn.CA)(i);
    let o = La.test(i) ? i : i.replaceAll("\u0131", "i").replaceAll("\u017F", "s").replaceAll("\u212A", "k").replace(Pa, ""), c = o.lastIndexOf("/"), h = c === -1 ? "" : o.slice(0, c), g = i.lastIndexOf("/"), p = g === -1 ? "" : i.slice(0, g), y = e.get(p);
    if (y === void 0) {
      let I = c !== -1 && gr(p, h), A = I ? h.split("/") : [], R = I ? p.split("/").map((C, v) => {
        let T = A[v];
        if (T !== void 0 && !gr(C, T)) return "passed";
        let H = n.get(C) ?? (T !== void 0 && !Ci(C, T) || !(0, import_chunk_w82axegn.CA)(`${C}/.bak`) ? "passed" : (0, import_chunk_w82axegn.CA)(`${C}/x`) ? "withheld" : "asked");
        return n.set(C, H), H;
      }) : [];
      y = R.includes("withheld") ? "withheld" : R.includes("asked") || c !== -1 && (Ti.test(h) || bn(Ti, p)) ? "asked" : "passed", e.set(p, y);
    }
    if (y !== "passed") return y === "withheld" || (0, import_chunk_w82axegn.CA)(i);
    let _ = o.slice(c + 1), k = i.slice(g + 1);
    if (c !== -1 && (Bi.test(_) || Bi.test(k)) && (yn.test(h) || bn(yn, p))) return (0, import_chunk_w82axegn.CA)(i);
    if (!yn.test(_) && !Ci(k, _) && !bn(yn, k)) return false;
    let E = r.get(k);
    if (E === void 0) E = (0, import_chunk_w82axegn.CA)(k), r.set(k, E);
    return E;
  };
}
function bn(e, n) {
  return n.includes(":") && n.split("/").filter((r) => r.includes(":")).some((r) => {
    let i = (0, import_chunk_w82axegn.SAe)(r);
    return (0, import_chunk_w82axegn.osn)(r).some((o) => i.some((c) => e.test(o(c))));
  });
}
function gr(e, n) {
  return e.length > import_chunk_w82axegn.qq && Da.test(e) || fr.test(e) || n !== e && fr.test(n) || bn(fr, e);
}
function Ci(e, n) {
  return gr(e, n) && (e.length > import_chunk_w82axegn.qq || (0, import_chunk_w82axegn.SAe)(e).length > 1 || (0, import_chunk_w82axegn.osn)(e).some((r) => (0, import_chunk_w82axegn.SAe)(r(e)).length > 1));
}
var Pa = /[^\x20-\x7e]/gu, La = /^[\x20-\x7e]*$/, Bi = new RegExp(`^(?:${ji})`, "i");
async function Ai(e, n) {
  let r;
  try {
    r = await (0, import_promises4.open)(e, (0, import_chunk_6mfepmbb.Xu)());
  } catch (i) {
    let o = (0, import_chunk_jv7av99m.w)(i);
    return o === "ELOOP" || o === "ENOENT" || o === "ENOTDIR" ? { kind: "tamper", detail: `something other than the scratch index this build wrote stands at its name (${o})` } : { kind: "disk", detail: `the scratch index could not be opened (${o ?? "an error"})` };
  }
  try {
    let i = await r.stat();
    if (!i.isFile() || i.nlink !== 1) return { kind: "tamper", detail: "something other than the scratch index this build wrote stands at its name" };
    let o = await (0, import_promises4.open)(n, import_chunk_dkc86g0t.lcs, 384);
    try {
      let c = Buffer.allocUnsafe(1048576);
      for (let h = 0; h < i.size; ) {
        let { bytesRead: g } = await r.read(c, 0, Math.min(c.length, i.size - h), h);
        if (g === 0) return { kind: "tamper", detail: "the scratch index changed while it was carried off" };
        await o.write(c, 0, g), h += g;
      }
      await o.utimes(i.atime, i.mtime);
    } finally {
      await o.close().catch(() => {
      });
    }
    return null;
  } catch (i) {
    return { kind: "disk", detail: `the scratch index could not be carried off (${(0, import_chunk_jv7av99m.w)(i) ?? (0, import_chunk_jv7av99m.d)(i)})` };
  } finally {
    await r.close().catch(() => {
    });
  }
}
var Hi = 6e5, Ma = /^claude-seed-index-([0-9]+)-/;
async function Ga(e) {
  for (let n = 0; ; n++) try {
    return await (0, import_promises4.unlink)(e), null;
  } catch (r) {
    let i = (0, import_chunk_jv7av99m.w)(r);
    if (i === "ENOENT") return null;
    if (n >= 3 || i !== "EBUSY" && i !== "EPERM" && i !== "EACCES") return i ?? (0, import_chunk_jv7av99m.d)(r);
    await (0, import_chunk_5appeerh.K)(50);
  }
}
async function ja(e) {
  try {
    await Promise.all((await (0, import_promises4.readdir)(e)).map(async (n) => {
      let r = Ma.exec(n)?.[1];
      if (r === void 0) return;
      let i = (0, import_path4.join)(e, n), o = await (0, import_promises4.lstat)(i);
      if (o.isDirectory() && Date.now() - o.mtimeMs > Hi && !Ui(Number(r))) await (0, import_promises4.rm)(i, { recursive: true, force: true });
    }));
  } catch {
  }
}
async function Ha(e) {
  try {
    await Promise.all((await (0, import_promises4.readdir)(e)).map(async (n) => {
      let r = Na.exec(n)?.[1];
      if (r === void 0) return;
      let i = (0, import_path4.join)(e, n);
      if (Date.now() - (await (0, import_promises4.lstat)(i)).mtimeMs > Hi && !Ui(Number(r))) await (0, import_promises4.rm)(i, { force: true });
    }));
  } catch {
  }
}
function Ui(e) {
  try {
    return process.kill(e, 0), true;
  } catch (n) {
    return (0, import_chunk_jv7av99m.w)(n) === "EPERM";
  }
}
async function Ii(e, n) {
  return (await Ua(e, n)).notDirectories;
}
async function Ua(e, n) {
  let r = (0, import_chunk_w71cxznt.Rl)(Tt, async (o) => await rt(e, o) === "clear" ? Wa((0, import_path4.join)(e, o)) : "other"), i = await Promise.all(n.map(r));
  return { notDirectories: n.filter((o, c) => i[c] !== "directory"), special: n.filter((o, c) => i[c] === "special") };
}
async function Wa(e) {
  try {
    let n = await (0, import_promises4.lstat)(e);
    return n.isDirectory() ? "directory" : n.isFile() || n.isSymbolicLink() ? "other" : "special";
  } catch {
    return "other";
  }
}
async function Ka(e, n) {
  let [r, i] = await Promise.all([e(["symbolic-ref", "-q", "HEAD"]), e(["rev-list", "--max-count=1", "--format=%h %s", n, "--"])]), o = r.code === 0 ? r.stdout.trim().replace(/^refs\/heads\//, "") : "(no branch)", c = i.code === 0 ? i.stdout.trim().split(`
`).at(-1) ?? "" : "";
  return `${o}: ${c}`;
}
async function Ya(e, n, r, i, o) {
  let c = e.entries.filter((v) => (v.kind === "changed" || v.kind === "absent") && n.has(v.path)).map(({ path: v }) => v);
  if (c.length === 0) return e;
  let h = new Set(e.entries.flatMap((v) => v.kind === "absent" && n.has(v.path) ? [v.path] : [])), g = Pt(c), p = [...c, ...g.filter((v) => n.has(v))], y = new Set(e.entries.flatMap((v) => v.kind === "changed" ? [v.path] : [])), _ = await Promise.all(g.map((v) => Ni((0, import_path4.join)(i, v))));
  await Promise.all(g.map((v) => (0, import_promises4.unlink)((0, import_path4.join)(i, v)).catch(() => {
  })));
  let k = await o(p);
  if ("refused" in k) return k;
  let E = await Promise.all(g.map((v) => Ni((0, import_path4.join)(i, v)))), I = new Set(k.copies.flatMap((v) => v.kind === "file" ? [v.path] : [])), A = g.find((v, T) => y.has(v) ? !I.has(v) : _[T] === null || _[T] !== E[T]);
  if (A !== void 0) return { refused: `${A}: changed while it was being read`, tooLarge: false, momentary: true };
  let R = /* @__PURE__ */ new Set([...c, ...g]), C = new Set(c);
  return { entries: [...e.entries.filter((v) => !R.has(v.path)), ...k.entries.filter((v) => R.has(v.path)).map((v) => v.kind === "absent" && C.has(v.path) && (!h.has(v.path) || r.has(v.path)) ? { kind: "changed", path: v.path } : v)], copies: [...e.copies.filter((v) => !R.has(v.path)), ...k.copies] };
}
async function Oi(e, n, r, i) {
  return i.length === 0 ? { code: 0, stderr: "" } : e(["update-index", "-z", "--index-info"], n, i.map((o) => `0 ${"0".repeat(r.length)}	${o}\0`).join(""));
}
async function Ht(e, n, r) {
  let i = await Promise.all((0, import_chunk_dkc86g0t.gco)(r).map((g) => e(["-c", "core.precomposeUnicode=false", "ls-files", "-z", "-v", "--", ...g], { ...import_chunk_dkc86g0t.owt, ...n })));
  if (i.some((g) => g.code !== 0)) return null;
  let o = i.flatMap((g) => g.stdout.split("\0")).flatMap((g) => g.length > 2 ? [{ tag: g[0], path: g.slice(2) }] : []), c = new Set(o.flatMap(({ tag: g, path: p }) => g === "S" || g === "s" ? [p] : [])), h = new Set(o.map(({ path: g }) => g));
  return { skipWorktree: c, unseen: /* @__PURE__ */ new Set([...c, ...o.flatMap(({ tag: g, path: p }) => g !== g.toUpperCase() ? [p] : [])]), absent: new Set(r.filter((g) => !h.has(g))) };
}
async function Ni(e) {
  try {
    return (0, import_crypto.createHash)("sha1").update(await (0, import_promises4.readFile)(e)).digest("hex");
  } catch (n) {
    let r = (0, import_chunk_jv7av99m.w)(n);
    return r === "ENOENT" || r === "ENOTDIR" ? "absent" : null;
  }
}
var Ja = 104857600, Za = 3600, td = 10, go = 120, Xt = 300, nd = 18e4, mo = "This partial clone does not hold every file of its working tree locally (a sparse checkout, or blobs never downloaded), so it cannot be uploaded without fetching from its remote, which the upload does not do \u2014 a full clone, made without --filter, would upload. If no file is missing from the working tree, the index names an object that this repository has lost: `git fsck --name-objects` prints it as \u201Cmissing blob <id> (:<path>)\u201D, and `git rm --cached <path>` then `git add <path>` stores it again", _r = 32, rd = ["rev-parse", "cat-file", "diff-files"];
function Sr() {
  return (0, import_chunk_865at33z.b)("tengu_ccr_bundle_max_bytes", null) ?? Ja;
}
var In = { ...import_chunk_6s9tac84.rwt, ...import_chunk_6s9tac84.yLn }, po = 64, id = 65536, od = (po + 1) * 65;
async function sd(e) {
  try {
    if (!(await (0, import_promises.lstat)(e)).isFile()) return null;
    let n = await (0, import_promises.open)(e, (0, import_chunk_6mfepmbb.Xu)());
    try {
      let r = await n.stat();
      if (!r.isFile() || r.size > od) return null;
      let i = Buffer.allocUnsafe(r.size), { bytesRead: o } = await n.read(i, 0, r.size, 0);
      if (o !== r.size) return null;
      let c = i.toString("utf8").split(/\r?\n/).filter((h) => h !== "");
      return c.length > po || c.some((h) => !/^[0-9a-f]{40,64}$/.test(h)) ? null : c;
    } finally {
      await n.close();
    }
  } catch {
    return null;
  }
}
var ad = (e) => (0, import_chunk_7cfjrnwy.nt)(e, `

`).split(`
`).some((n) => n.startsWith("parent ")), dd = { complete: "HEAD's history is complete \u2014 bundling it as usual, without the widest tier", cut: "HEAD's history crosses the boundary \u2014 bundling a snapshot of the working tree, without history", unborn: "HEAD is unborn and no local branch or tag is cut \u2014 trying the widest tier (branches and tags), the only one that can carry it", unborn_cut: "HEAD is unborn and a local branch or tag is cut \u2014 nothing can be bundled" };
async function ld(e, n, r = null, i = (0, import_chunk_6s9tac84.ADe)()) {
  let o = ["rev-parse", "--is-shallow-repository", "--git-path", "shallow"], c = r ? await (0, import_chunk_6s9tac84.cw)(e, o, { hardened: true, layout: r.layout, signal: n, probes: i }) : await (0, import_chunk_6s9tac84.mLn)([...import_chunk_gd77dyw4.Nn, ...import_chunk_6s9tac84.Vne, ...o], { cwd: e, abortSignal: n, ...(0, import_chunk_6s9tac84.ecs)() }), [h, g] = c.stdout.split(/\r?\n/);
  if (c.code !== 0 || h !== "true") return "not_shallow";
  let p = (I) => r ? (0, import_chunk_6s9tac84.cw)(e, I, { hardened: true, layout: r.layout, signal: n, probes: i, env: In }) : (0, import_chunk_6s9tac84.mLn)([...import_chunk_gd77dyw4.Nn, ...import_chunk_6s9tac84.Vne, ...I], { cwd: e, ...(0, import_chunk_6s9tac84.ecs)(In), abortSignal: n, maxBuffer: id }), _ = (await p(["rev-parse", "--verify", "--quiet", "HEAD^{commit}"])).exitCode === 1, k = _ ? "unborn_cut" : "cut", E = await sd((0, import_path.resolve)(e, g ?? (0, import_path.join)(".git", "shallow")));
  if (E === null) return k;
  for (let I of E) {
    if (_) {
      let R = await p(["for-each-ref", "--count=1", "--format=%(refname)", `--contains=${I}`, "refs/heads/", "refs/tags/"]);
      if (R.exitCode === 0 && R.stdout.trim() === "") continue;
    } else {
      let R = await p(["merge-base", "--is-ancestor", I, "HEAD"]);
      if (R.exitCode === 1) continue;
      if (R.exitCode !== 0) return k;
    }
    let A = await p(["cat-file", "commit", I]);
    if (A.exitCode !== 0 || ad(A.stdout)) return k;
  }
  return _ ? "unborn" : "complete";
}
var Yi = 5e3, vr = 100, Cr = 5e6;
async function wo(e, n, r, i, o, c) {
  let h = await (0, import_chunk_6s9tac84.cw)(e, ["count-objects", "-v"], { hardened: n, layout: r, signal: i, probes: c, ...r?.borrowedObjects !== void 0 && { env: { GIT_OBJECT_DIRECTORY: r.borrowedObjects } } }), { sizeBytes: g, inPackCount: p } = yo(h);
  if (g === null || o === null || g <= o || g > vr * o || p !== null && p > Cr) return { sizeBytes: g, inPackCount: p };
  let y = await (0, import_chunk_6s9tac84.cw)(e, ["config", "-z", "--list"], { hardened: n, layout: r, signal: i, probes: c });
  if (y.code !== 0 || Nr(y.stdout)) return { sizeBytes: g, inPackCount: p };
  let _ = i === void 0 ? AbortSignal.timeout(Yi) : AbortSignal.any([i, AbortSignal.timeout(Yi)]), k = await (0, import_chunk_6s9tac84.cw)(e, ["rev-list", "--disk-usage", "--objects", "--missing=allow-any", "--all"], { hardened: n, layout: r, signal: _, probes: c, ...!n && { env: { GIT_NO_LAZY_FETCH: "1" } } }), E = k.code === 0 && /^\d+\s*$/.test(k.stdout) ? Number(k.stdout.trim()) : null;
  if (E !== null && E < g) (0, import_chunk_w578pjby.t)(`[gitBundle] packs hold ${g} bytes but only ${E} are reachable: sizing the tiers by the reachable figure`);
  return { sizeBytes: E !== null && E < g ? E : g, inPackCount: p };
}
function yo({ code: e, stdout: n }) {
  if (e !== 0) return { sizeBytes: null, inPackCount: null };
  let r = n.match(/^size-pack:\s*(\d+)/m), i = n.match(/^in-pack:\s*(\d+)/m);
  return { sizeBytes: r ? Number(r[1]) * 1024 : null, inPackCount: i ? Number(i[1]) : null };
}
async function Lei(e) {
  let n = e?.gitRoot ?? (0, import_chunk_w5s307zm.dr)((0, import_chunk_18rsj2ts.pe)());
  if (!n) return { tooLarge: false, sizeBytes: null, inPackCount: null };
  let { sizeBytes: r, inPackCount: i } = e === void 0 ? await wo(n, false, void 0, void 0, null, (0, import_chunk_6s9tac84.ADe)()) : yo(await (0, import_chunk_3hr8g93j.Ext)(e.spawn([...import_chunk_gd77dyw4.Nn, "count-objects", "-v"]), { abortSignal: e.signal, preserveOutputOnError: false, stdin: "ignore" }));
  if (r === null) return { tooLarge: false, sizeBytes: null, inPackCount: i };
  let o = Sr();
  return { tooLarge: r > 3 * o && (r > vr * o || i !== null && i > Cr), sizeBytes: r, inPackCount: i };
}
async function _o(e, n, r) {
  let { hardened: i, layout: o, signal: c, probes: h } = r, g = [r.seedRefs.stash, r.seedRefs.root], p = r.hasStash ? [r.seedRefs.stash] : [], y = ["--glob=refs/heads/*", "--glob=refs/tags/*", ...r.headResolves ? ["HEAD"] : []], _ = async (re, Y) => {
    let le = o === void 0 ? void 0 : await $d(e, o, g, c, h);
    if (le === null) return { ok: false, ...pt() };
    let xe = await (0, import_chunk_6s9tac84.cw)(e, [...i ? [] : import_chunk_6s9tac84.Vne, "bundle", "create", n, ...Y, ...p, "--"], { hardened: i, layout: o, signal: c, probes: h, ...!i && { env: In } });
    if (o && !await (0, import_chunk_6s9tac84.mst)(o, g)) return { ok: false, ...pt() };
    if (xe.code !== 0) {
      if (!i && !c?.aborted) {
        let we = await (0, import_chunk_6s9tac84.cw)(e, ["config", "-z", "--list"], { hardened: i, layout: o, signal: c, probes: h });
        if (we.code === 0 && Nr(we.stdout)) return (0, import_chunk_w578pjby.t)(`[gitBundle] partial clone: git bundle create ${Y.join(" ")} failed (${xe.code}), bundling a snapshot of the working tree instead: ${wt(xe.stderr, i)}`), { ...await _o(e, n, { ...r, forceScope: "squashed", partialClone: true }), promisorFallback: true };
      }
      return vn(`git bundle create ${i ? wt(Y.join(" "), true) : Y.join(" ")}`, xe, i);
    }
    let { size: me } = await (0, import_promises.stat)(n);
    if (me <= r.maxBytes) {
      let we = r.hasStash ? await Xi(e, n, r.relabelledPath, /* @__PURE__ */ new Map([[r.seedRefs.stash, import_chunk_tnqn47cg.nAn]]), { hardened: i, layout: o, signal: c, probes: h }) : null;
      if (we !== null && !we.ok) return qi(we.error);
      let $e = we === null ? n : r.relabelledPath, De = i ? await io(e, $e, [...Y, ...r.hasStash ? [import_chunk_tnqn47cg.nAn] : []], { layout: o, signal: c, probes: h, expected: r.stashCommit === void 0 ? {} : { [import_chunk_tnqn47cg.nAn]: r.stashCommit }, shown: le }) : r.bindJudgedStash === true && r.hasStash && r.stashCommit !== void 0 ? await ro(e, $e, import_chunk_tnqn47cg.nAn, r.stashCommit, c) : xr;
      if (o && !await (0, import_chunk_6s9tac84.mst)(o, g)) return { ok: false, ...pt() };
      return oo(De, i) ?? { ok: true, path: $e, size: we === null ? me : we.sizeBytes, scope: re };
    }
    return (0, import_chunk_w578pjby.t)(`[gitBundle] ${re} bundle is ${(me / 1024 / 1024).toFixed(1)}MB (> ${(r.maxBytes / 1024 / 1024).toFixed(0)}MB cap), trying the next tier`), null;
  }, { sizeBytes: k, inPackCount: E } = await wo(e, i, o, c, r.forceScope === void 0 ? r.maxBytes : null, h), I = r.forceScope === "squashed", A = k !== null && k > r.maxBytes, R = I || r.skipAllRefs || A, C = k !== null && k > 3 * r.maxBytes, v = I || C, T = C && (k !== null && k > vr * r.maxBytes || E !== null && E > Cr);
  if (I) (0, import_chunk_w578pjby.t)("[gitBundle] forceScope=squashed \u2014 skipping the all-branches and HEAD tiers");
  else if (A) (0, import_chunk_w578pjby.t)(r.currentBranchOnly ? `[gitBundle] size-pack ${(k / 1024 / 1024).toFixed(0)}MB vs ${(r.maxBytes / 1024 / 1024).toFixed(0)}MB cap; ${v ? "skipping the branch tier" : "trying the branch tier"}${T ? ", skipping squashed" : ""}` : `[gitBundle] size-pack ${(k / 1024 / 1024).toFixed(0)}MB > ${(r.maxBytes / 1024 / 1024).toFixed(0)}MB cap; skipping all-branches${v ? " and HEAD" : ""}${T ? " and squashed" : ""}`);
  if (r.currentBranchOnly) {
    let re = await (0, import_chunk_6s9tac84.cw)(e, ["rev-parse", "--verify", "--quiet", "--symbolic-full-name", "HEAD"], { hardened: i, layout: o, signal: c, probes: h });
    if (re.exitCode === 1) return { ok: false, error: "The current branch has no commits yet", failReason: "empty_repo" };
    if (re.code !== 0) return vn("git rev-parse HEAD", re, i);
    if (!v) {
      let Y = re.stdout.trim(), le = Y === "HEAD" || Y.startsWith("-") ? await _("head", ["HEAD"]) : await _("current_branch", [Y, "HEAD"]);
      if (le !== null) return le;
    }
  } else {
    if (!R) {
      let re = await _("all", y);
      if (re !== null) return re;
    }
    if (!v) {
      let re = await _("head", ["HEAD"]);
      if (re !== null) return re;
    }
  }
  if (T) return { ok: false, error: `This repository is too large to upload: its git history is ${Cn(k)}, and an upload can be at most ${Cn(r.maxBytes)}`, failReason: "too_large", sizeBytes: k ?? void 0 };
  let H = i && !r.hasStash ? await Nd(e, o, g, c, h) : void 0;
  if (H === null) return { ok: false, ...pt() };
  if (i && !r.hasStash && H === void 0) return { ok: false, error: "git rev-parse HEAD^{tree} failed: HEAD names no commit", failReason: "git_error" };
  let W = { ...In, GIT_NO_LAZY_FETCH: "1" }, z = { ...i ? {} : W, ...En }, F = r.hasStash ? `${r.stashCommit ?? r.seedRefs.stash}^{tree}` : H ?? "HEAD^{tree}", N = [];
  if (r.baseRef) {
    let [re, Y] = await Promise.all([F, `${r.baseRef}^{tree}`].map((xe) => (0, import_chunk_6s9tac84.cw)(e, [...i ? [] : import_chunk_6s9tac84.g$t, "rev-parse", xe], { hardened: i, layout: o, signal: c, probes: h, ...!i && { env: W } })));
    if (re?.code === 0 && re.stdout.trim() === Y?.stdout.trim()) return { ok: false, error: r.leftOutCount > 0 ? `It doesn't look like you have any new commits or changes to review: the only uncommitted changes here are to ${r.leftOutCount} ${(0, import_chunk_7cfjrnwy.O)(r.leftOutCount, "file")} that ${(0, import_chunk_7cfjrnwy.O)(r.leftOutCount, "stays", "stay")} on this machine (named like credentials or keys, ${r.withheldByRules ? "covered by a Read rule or a sandbox read-deny setting of yours, linked from your Claude Code configuration, " : ""}hard-linked to another file, kept by a git filter such as LFS, or still being written while read) and ${(0, import_chunk_7cfjrnwy.O)(r.leftOutCount, "is", "are")} not uploaded. Stage or commit any other work first.` : "It doesn't look like you have any new commits or changes to review. Stage or commit them first?", failReason: "no_changes" };
    let le = await (0, import_chunk_6s9tac84.cw)(e, [...i ? [] : import_chunk_6s9tac84.g$t, "commit-tree", `${r.baseRef}^{tree}`, "-m", "seed-base"], { hardened: i, layout: o, signal: c, probes: h, env: z });
    if (le.code === 0) N = ["-p", le.stdout.trim()];
    else (0, import_chunk_w578pjby.t)(`[gitBundle] baseRef commit-tree failed (${le.code}), squashing without parent: ${wt(le.stderr, i)}`);
  }
  let oe = await (0, import_chunk_6s9tac84.cw)(e, [...i ? [] : import_chunk_6s9tac84.g$t, "commit-tree", F, ...N, "-m", "seed"], { hardened: i, layout: o, signal: c, probes: h, env: z });
  if (oe.code !== 0) return vn("git commit-tree", oe, i);
  let Re = oe.stdout.trim();
  if (o && !await (0, import_chunk_6s9tac84.mst)(o, g)) return { ok: false, ...pt() };
  let V = await Bn(e, [r.seedRefs.root, Re], { hardened: i, layout: o, probes: h, ...i && { signal: c } });
  if (i && c?.aborted) return { ok: false, error: "Bundle upload aborted", failReason: "git_error" };
  if (V.code !== 0) return { ok: false, ...vo(V.stderr, o?.adminDir), heldSeedRef: { exitCode: V.code } };
  let ce = await (0, import_chunk_6s9tac84.cw)(e, [...i ? [] : import_chunk_6s9tac84.Vne, "bundle", "create", n, r.seedRefs.root, "--"], { hardened: i, layout: o, signal: c, probes: h, ...!i && { env: W } });
  if (o && !await (0, import_chunk_6s9tac84.mst)(o, g)) return { ok: false, ...pt() };
  if (ce.code !== 0) return { ok: false, ...r.partialClone ? { error: mo, failReason: "git_error" } : vn("git bundle create for the squashed root", ce, i) };
  let { size: Ee } = await (0, import_promises.stat)(n);
  if (Ee <= r.maxBytes) {
    let re = await Xi(e, n, r.relabelledPath, /* @__PURE__ */ new Map([[r.seedRefs.root, import_chunk_tnqn47cg.rAn]]), { hardened: i, layout: o, signal: c, probes: h });
    if (!re.ok) return qi(re.error);
    let Y = i ? await io(e, r.relabelledPath, [import_chunk_tnqn47cg.rAn], { layout: o, signal: c, probes: h, expected: { [import_chunk_tnqn47cg.rAn]: Re }, shown: /* @__PURE__ */ new Map() }) : r.bindJudgedStash === true ? await ro(e, r.relabelledPath, import_chunk_tnqn47cg.rAn, Re, c) : xr;
    if (o && !await (0, import_chunk_6s9tac84.mst)(o, g)) return { ok: false, ...pt() };
    return oo(Y, i) ?? { ok: true, path: r.relabelledPath, size: re.sizeBytes, scope: "squashed" };
  }
  return { ok: false, error: `This repository is too large to upload: even without its history it is ${Cn(Ee)}, and an upload can be at most ${Cn(r.maxBytes)}`, failReason: "too_large", sizeBytes: Ee };
}
async function Xi(e, n, r, i, o) {
  let c = await (0, import_chunk_tnqn47cg.vNa)(n, r, i, o.signal);
  if (!c.ok) return c;
  let h = await (0, import_chunk_6s9tac84.cw)(e, ["bundle", "list-heads", r], o);
  return h.code === 0 ? c : { ok: false, error: `git bundle list-heads exited ${h.code}: ${wt(h.stderr, o.hardened)}` };
}
function qi(e) {
  return { ok: false, error: `Could not prepare the upload of this working tree (${e}). Retry; if it keeps failing, check that the temporary directory has room for a second copy of the bundle and that nothing else is writing to this checkout.`, failReason: "git_error" };
}
function Br(e) {
  return e.detail === "git_file" && e.gitDir === "";
}
function bo(e) {
  return e.misplaced === "linked_worktree" || Eo[e.misplaced] !== void 0 || Br(e);
}
async function ud(e, n, r, i) {
  let o = (E, I = n) => ({ handedBack: false, refusedAs: I, notThePreviousWay: E });
  if (r !== null) return o(r);
  let c = (E) => {
    let I = E === null ? null : (0, import_chunk_6s9tac84.scs)(E), A = i ?? (E === null || I === null ? null : `${Ar(I, E)} and this checkout\u2019s git directory (${be(E)}) is inside it, so a Claude Code session started there can write that directory\u2019s configuration${n.misplaced === "git_file" ? " \u2014 start from an ordinary clone instead" : ""}`);
    return A === null ? { handedBack: true } : { ...o(A), belowHomeCheckout: true };
  };
  if (Br(n)) {
    let E = await To(e);
    return o(E === "link" ? "its .git entry is a symbolic link, which this checkout\u2019s own session can re-point and nothing pins in place, so where it leads when that capture runs cannot be bound to this tree \u2014 start from an ordinary clone instead" : E === "second_name" ? "its .git pointer file has a second name (a hard link), so what it names cannot be trusted between this read and git\u2019s \u2014 remove the other name, or start from an ordinary clone" : "its .git entry is a pointer file this upload could not follow (not the one gitdir line git writes), so where it leads cannot be judged \u2014 start from an ordinary clone instead");
  }
  if (n.gitDir !== "" && (n.misplaced === "linked_worktree" || n.detail === "git_file")) {
    if ((await (0, import_chunk_6s9tac84.pco)(e)).some((I) => (0, import_chunk_1z1bgjzv.Hb)(I, n.gitDir))) return o(n.misplaced === "linked_worktree" ? `its .git file names a worktree entry under a temporary directory (${be(n.gitDir)}), where sessions write \u2014 run git worktree repair if this tree was moved, or start from the repository\u2019s main checkout` : `its .git file names a git directory under a temporary directory (${be(n.gitDir)}), where sessions write \u2014 start from an ordinary clone of the repository`);
  }
  if (n.detail === "git_file" && n.gitDir !== "") {
    let E = (0, import_chunk_6s9tac84.Uhr)(n.gitDir)[0];
    if (E !== void 0) return o(`its git directory (${be(n.gitDir)}) lies inside another checkout (${be(E)}), whose Claude Code sessions can write its configuration \u2014 start from an ordinary clone instead`);
  }
  if (bo(n)) return o(Eo[n.misplaced] ?? Vi[n.detail ?? "admin_dir"]);
  let h = n.gitDir === "" ? null : n.misplaced === "old_git" ? On(n.gitDir) ? { entry: n.gitDir, repository: (0, import_path.dirname)((0, import_path.dirname)(n.gitDir)) } : { entry: null, repository: n.gitDir } : n.misplaced === "git_file" ? { entry: null, repository: n.gitDir } : null;
  if (h === null) return c(null);
  let { entry: g, repository: p } = h, y = (g === null ? null : await (0, import_chunk_6s9tac84.cco)(g)) ?? await (0, import_chunk_6s9tac84.cco)(p);
  if (y !== null) return o(ko[y], { ...n, misplaced: y, commonDir: p });
  if (g === null && await So(p)) return o("its git directory holds a commondir file, which git writes only in a linked working tree\u2019s entry and which would send that capture to another repository\u2019s configuration \u2014 start from an ordinary clone", { ...n, detail: "common_dir" });
  if (g !== null && await (0, import_chunk_6s9tac84.oCi)(g) !== "absent") return o(Vi.worktree_config, { ...n, misplaced: "linked_worktree", detail: "worktree_config" });
  let _ = c(p);
  if (!_.handedBack) return _;
  let k = await (0, import_chunk_6s9tac84.Brl)(p, e, g !== null);
  if (k.kind === "clear") return { handedBack: true };
  return { ...o(cd(k, n.misplaced === "old_git" ? "update git (2.31 or newer), or " : "", n.misplaced !== "old_git"), k.kind === "work_tree" ? { ...n, misplaced: "work_tree" } : k.kind === "worktree_config" ? { ...n, misplaced: "linked_worktree", detail: "worktree_config" } : n), screened: k.kind };
}
var Vi = { worktree_config: "its administrative entry carries a per-worktree configuration file, one a Claude Code session of this repository could have written there \u2014 delete that file only if nothing in it matters (`git rev-parse --git-path config.worktree` names it; git sparse-checkout writes one, and a sparse tree needs it to stay sparse), or start from the repository\u2019s main checkout", common_dir: "the commondir file in its administrative directory, which does not read as git writes it, would decide which repository that way takes its configuration from", keyed_elsewhere: "its .git file leads git to another repository than the one under which Claude Code keeps this folder\u2019s trust and settings, and that way would run under the other\u2019s configuration \u2014 start from the repository\u2019s main checkout", placement: "its repository is placed or named as git does not place one this upload takes a repository from (not <name>.git or .git, inside the working tree, or under another git directory) \u2014 rename a bare repository\u2019s directory to <name>.git and run git worktree repair from it, or start from an ordinary clone", back_link: "its administrative entry does not point back at this tree (a moved tree, or a back link something rewrote) \u2014 run git worktree repair, or start from the repository\u2019s main checkout", admin_dir: "its .git file names a worktree entry that does not exist or is not one git made, so where it would lead that capture cannot be judged \u2014 run git worktree repair if this tree was moved, or start from the repository\u2019s main checkout", foreign_mount: "something is mounted over its administrative entry in the repository (.git/worktrees/<name>), so what stands there is not the repository\u2019s own \u2014 unmount it, or start from the repository\u2019s main checkout", git_file: "its .git entry is a pointer file this upload could not follow, so where it leads cannot be judged \u2014 start from an ordinary clone instead" }, ko = { reftable: "this repository keeps (or appears to keep) its refs in reftable storage \u2014 a state a Claude Code session can bring about without the user, under which that capture would run git; start from an ordinary clone of the repository", borrowed_objects: "this repository borrows objects from another through an alternates file \u2014 a state a Claude Code session can bring about without the user, under which that capture would run git; start from an ordinary clone of the repository" }, Rr = "its git configuration points the work tree somewhere else (core.worktree), so that capture would read the directory it names rather than this one; remove core.worktree or start from an ordinary clone", Eo = { ...ko, included_config: "a cloud session could change a file that git reads this checkout\u2019s configuration from, so that capture would run under whatever is put there", many_includes: "its git configuration pulls in more include files than are followed, so that capture would run every program those files name and enter any nested repository registered here; trim the include chain", work_tree: Rr };
function cd(e, n, r) {
  if (e.file === import_chunk_6s9tac84.Bhr) switch (e.kind) {
    case "includes":
      return `its launch environment\u2019s git configuration (GIT_CONFIG_PARAMETERS / GIT_CONFIG_COUNT) includes a file inside this working tree, its repository or a directory your settings open to Claude Code sessions \u2014 configuration this upload could not have git list here, where a file a session may write could say what that capture runs; ${n}drop that include from the environment, or start from an ordinary clone`;
    case "work_tree":
      return Rr;
    case "worktree_config":
      return `its launch environment\u2019s git configuration switches per-worktree configuration on (extensions.worktreeConfig), under which that capture would also read a configuration file a session of the repository can plant in this tree\u2019s administrative entry; ${n}start from the repository\u2019s main checkout`;
    case "second_name":
      return `its launch environment\u2019s git configuration (GIT_CONFIG_PARAMETERS / GIT_CONFIG_COUNT) includes a file that has a second name \u2014 a hard link \u2014 so a session that can reach the other name could change what that capture runs under; ${n}give that file a single name again (copy it aside and move the copy back over it), drop that include from the environment, or start from an ordinary clone`;
    case "unread":
      return "the git configuration its launch environment carries (GIT_CONFIG_PARAMETERS / GIT_CONFIG_COUNT) does not parse as git would parse it, or includes a file that cannot be read or followed here, so what that capture would run under cannot be judged; check those variables, or start from an ordinary clone";
    case "home_checkout":
      return Qi(e, n, r);
    case "settings_unreadable":
      return Ji(e.file, n);
    case "config_in_checkout":
      return `its launch environment\u2019s git configuration (GIT_CONFIG_PARAMETERS / GIT_CONFIG_COUNT) includes a file that lies inside \u2014 or links into \u2014 a git checkout (${be(e.checkout)}), which a Claude Code session started there can write; ${n}drop that include from the environment, keep the file outside any checkout, or start from an ordinary clone`;
  }
  let i = be(e.file);
  switch (e.kind) {
    case "includes":
      return `its git configuration (${i}) pulls in include files, lies inside this working tree, its repository or a directory your settings open to Claude Code sessions, or includes a file there \u2014 configuration this upload could not have git list here, where a file a session may write could say what that capture runs; ${n}move what the includes hold into the configuration file itself, stop granting sessions the directory that holds it (permissions.additionalDirectories, sandbox.filesystem.allowWrite, an Edit rule or --add-dir), or start from an ordinary clone`;
    case "second_name":
      return `its git configuration file ${i} (or a file it includes) has a second name \u2014 a hard link \u2014 so a session that can reach the other name could change what that capture runs under; ${n}give the file a single name again (copy it aside and move the copy back over it), or start from an ordinary clone`;
    case "work_tree":
      return Rr;
    case "worktree_config":
      return `its git configuration (${i}) switches per-worktree configuration on (extensions.worktreeConfig), under which that capture would also read a configuration file a session of the repository can plant in this tree\u2019s administrative entry; ${n}start from the repository\u2019s main checkout`;
    case "unread":
      return `its git configuration file ${i} could not be read as a plain file git would parse, or is reached through a link that cannot be followed here, so what that capture would run under cannot be judged; ${n}check that file, or start from an ordinary clone`;
    case "settings_unreadable":
      return Ji(e.file, n);
    case "home_checkout":
      return Qi(e, n, r);
    case "config_in_checkout":
      return `the user-level git configuration file ${i}, or a file it includes, lies inside \u2014 or links into \u2014 a git checkout (${be(e.checkout)}), so a Claude Code session started there can write what that capture would run under, whether or not the file exists yet; ${n}${r ? "start from an ordinary clone, or " : ""}keep user-level git configuration outside any checkout`;
  }
}
function Ji(e, n) {
  return `a Claude Code settings file inside this working tree (${be((0, import_path.join)(e, "settings.json"))} or settings.local.json) stands but cannot be read, so which directories it opens to sessions \u2014 and so whether a session could write the configuration that capture would run under \u2014 cannot be told; ${n}fix or remove that settings file, then retry`;
}
function Qi({ file: e, checkout: n }, r, i) {
  let o = i ? "start from an ordinary clone, or " : "";
  switch ((0, import_chunk_6s9tac84.fco)(n, (0, import_path.dirname)(e))) {
    case "home":
      return `your home directory is itself a git checkout, so a Claude Code session started there can write the user-level git configuration that capture would run under (${be(e)}, whether or not that file exists yet); ${r}${o}keep the dotfiles repository\u2019s git directory outside your home (a bare repository used with --git-dir)`;
    case "above_home":
    case "elsewhere":
      return `your home directory lies inside a git checkout (${be(n)}), so a Claude Code session started there can write the user-level git configuration that capture would run under (${be(e)}, whether or not that file exists yet); ${r}${o}move your home directory out of that checkout, or remove the stray git entry that makes it one`;
  }
}
function fd(e) {
  let n = (0, import_chunk_6s9tac84.uco)(e);
  return n === null ? "" : (0, import_chunk_6s9tac84.fco)(n, e) === "home" ? ` (yours is itself a git checkout: ${be(n)})` : ` (yours lies inside the git checkout at ${be(n)})`;
}
function Ar(e, n) {
  return (0, import_chunk_6s9tac84.fco)(e, n) === "home" ? `your home directory (${be(e)}) is itself a git checkout` : `your home directory lies inside a git checkout (${be(e)})`;
}
var be = (e) => (0, import_chunk_7cfjrnwy.ed)((0, import_chunk_kx2fp6pc.Yn)(e), go);
function hd(e) {
  return `this checkout sits inside another checkout (${be(e)}), whose Claude Code sessions can write this one\u2019s git files \u2014 start from a checkout of this repository that stands inside no other`;
}
function gd(e) {
  let n = (0, import_chunk_6s9tac84.scs)(e);
  return n === null ? null : `${Ar(n, e)} and this working tree\u2019s repository (${be(e)}) is inside it, so a Claude Code session started there can write the repository\u2019s git files`;
}
function md(e) {
  return `this working tree\u2019s repository sits inside another checkout (${be(e)}), whose Claude Code sessions can write its git files \u2014 start from a working tree of a repository that stands inside no other checkout`;
}
async function pd(e) {
  let n = (0, import_path.join)(e, ".git"), r;
  try {
    r = await (0, import_promises.lstat)(n);
  } catch (o) {
    let c = (0, import_chunk_jv7av99m.w)(o);
    return c === "ENOENT" || c === "ENOTDIR" ? null : "unreadable";
  }
  let i;
  if (r.isDirectory()) i = [n];
  else {
    if (!r.isFile()) return "unreadable";
    let o = (0, import_chunk_1z1bgjzv.ISr)(await (0, import_chunk_6s9tac84.RDe)(n, { oneName: true }).catch(() => {
      return;
    }));
    if (o === void 0 || (0, import_chunk_6s9tac84.Whr)(o, e)) return "unreadable";
    let c = (0, import_path.isAbsolute)(o) ? o : (0, import_path.resolve)(e, o);
    i = On(c) ? [c, (0, import_path.dirname)((0, import_path.dirname)(c))] : [c];
  }
  for (let o of i) {
    let c = await (0, import_chunk_6s9tac84.cco)(o);
    if (c !== null) return c;
    if (!On(o) && await So(o)) return "common_dir";
  }
  return null;
}
async function So(e) {
  return (0, import_promises.lstat)((0, import_path.join)(e, "commondir")).then(() => true, (n) => {
    let r = (0, import_chunk_jv7av99m.w)(n);
    return !(r === "ENOENT" || r === "ENOTDIR");
  });
}
function On(e) {
  return e !== "" && (0, import_path.basename)(e) !== ".git" && (0, import_path.basename)((0, import_path.dirname)(e)) === "worktrees";
}
var $n = `${ti} retry there. ${ni}`, yt = `${ei} Use ${$n}`, eo = "`git reset` then rebuilds the index from HEAD (what was staged becomes unstaged; your files are untouched)", Tn = `look at the file named index in this checkout\u2019s git directory (in an ordinary checkout: ls -l .git/index; a link shows an arrow, ->). If it is a link, do not run git in this folder, since git would write through it to whatever it points at: use ${$n} If it is not a link,`, to = { index_link: ` Git never makes it a link: if you did not, something else did, and git would write through it. ${yt}`, index_second_name: ` Git never gives it a second name, and through that name something else can change the file under git. Look at it (ls -l). Remove the other name if you can find it (\`find . -samefile\` with the file named above, run in this directory), or remove that file itself: ${eo}. Then retry.`, index_too_large: " This upload has no way round that limit.", index_other: ` Look at it first (ls -l) and remove it if it is not an index git wrote; ${eo}. Then retry.`, shallow_link: ` Git never makes it a link: if you did not, something else did. ${yt}`, shallow_second_name: " Git never gives it a second name. Look at it (ls -l) and remove the other name if you can find it (`find . -samefile` with the file named above, run in this directory); or copy the file named above to a new name and move the copy over it. Then retry.", shallow_other: " Look at it (ls -l): git keeps the list of this clone\u2019s shallow commits there, as a small plain file \u2014 if this clone was not made with --depth, nothing should stand there and it can be removed. Then retry.", shared_index: ` Look at the split-index files (sharedindex.*) first (ls -l; a link shows an arrow, ->). If one is a link, git did not make it so, and git reads the index through it: do not run git in this folder, and use ${$n} If none is a link, do not delete any of these files by hand: the index may need one of them, and which one can change whenever git writes the index. Use a fresh clone in this case too, by the same steps.`, shared_index_too_large: ` Do not delete that split-index file by hand: the index may need it. If this project has so many files that a fresh clone\u2019s index would be over that limit too, this upload has no way round it. If not, use ${$n}`, head: ` First ${Tn} check out a branch or a commit (\`git switch\`), and retry.`, symbolic_head: ` First ${Tn} check out a branch by its own name (\`git switch\`; if it is the one that \`git status\` already shows, git answers \u201CAlready on\u201D, and your uncommitted work stays), and retry.`, refs: " `git for-each-ref` shows what git makes of them: rename or repair that branch or tag, then retry.", config: ` First ${Tn} check \`git status\` here, and retry.`, other: ` Retry; if it keeps happening, first ${Tn} \`git status\` here shows whether git itself still reads this checkout.` };
function wd({ kind: e, setting: n, where: r = "", relative: i }) {
  let o = (0, import_chunk_kx2fp6pc.Yn)(r), c = "Claude Code\u2019s environment (set by your shell or your Claude Code settings)", h = `Move the attribute rules it points to into a .gitattributes file committed with the project first, then remove the setting from ${o} and retry.`, g = `Remove ${n} from your shell or your Claude Code settings, then start Claude Code again.`, [p, y] = { attributes_file: i ? [`${n} in ${o} is not a full path, which the git this upload runs may read as a different file than yours does`, "Set it to a full path (on Windows, one that starts with a drive letter) or a ~/ path, then retry."] : [`${n} is set in ${o}`, `Move the attribute rules it points to into a .gitattributes file committed with the project, or set core.attributesFile directly in your user or system git config file to an absolute or ~/ path; then remove the setting from ${o} and retry.`], attr_tree: [`${n} is set in ${o}`, h], ignore_case: [`${n} (which decides whether .gitattributes patterns match file names regardless of letter case) is set in ${o}`, "Move the core.ignoreCase line into this repository\u2019s .git/config or directly into your ~/.gitconfig, then retry."], config_location: [`${n} is a relative path in ${"Claude Code\u2019s environment (set by your shell or your Claude Code settings)"}, which git resolves from whatever directory it runs in`, `Set ${n === "HOMEPATH" || n === "USERPROFILE" ? "HOME" : n} to a full path (on Windows, one that starts with a drive letter), then start Claude Code again.`], env_config: [`${n} in ${"Claude Code\u2019s environment (set by your shell or your Claude Code settings)"} carries an include, core.attributesFile, attr.tree or core.ignoreCase, or does not parse`, g], attr_source_env: [`${n} is set in ${"Claude Code\u2019s environment (set by your shell or your Claude Code settings)"}`, g] }[e];
  return `Not uploading this working tree: ${p}, and the upload cannot follow that setting, so a file git would change before storing it (to encrypt it, for example) could be uploaded as it is on disk. ${y}`;
}
function zt(e) {
  return ` It is not uploaded the previous way either: ${e}.`;
}
function yd(e) {
  switch (e) {
    case "git_file":
    case "linked_worktree":
    case "work_tree":
    case "included_config":
    case "many_includes":
    case "old_git":
    case "borrowed_objects":
    case "reftable":
      return e;
    default:
      return null;
  }
}
function no(e, n) {
  let r = import_chunk_1z1bgjzv.hHi;
  try {
    let i = (0, import_chunk_1z1bgjzv.$fl)(e, n);
    if (i === null) return { kind: "unreadable" };
    let o = [...i, ...(0, import_chunk_1z1bgjzv.mhs)().flatMap((h) => Object.keys((0, import_chunk_2yx6c1y2.vl)(h)?.env ?? {}))].find((h) => r.includes(h.toUpperCase()));
    if (o !== void 0) return { kind: "names", name: o };
    let c = (0, import_chunk_1z1bgjzv.Iho)(r);
    return c === void 0 ? null : { kind: "moved", name: c };
  } catch (i) {
    return (0, import_chunk_w578pjby.t)(`[gitBundle] could not read the repository's settings: ${(0, import_chunk_jv7av99m.d)(i)}`), { kind: "unreadable" };
  }
}
function mXl() {
  try {
    let e = ["projectSettings", "localSettings"].flatMap((n) => Object.keys((0, import_chunk_2yx6c1y2._e)(n)?.env ?? {}).filter((r) => {
      let i = r.toUpperCase();
      return _d.includes(i) && import_chunk_5e3gtsn9._ks.has(i);
    }));
    return e.filter((n, r) => e.findIndex((i) => i.toUpperCase() === n.toUpperCase()) === r);
  } catch {
    return [];
  }
}
var _d = ["CCR_ENABLE_BUNDLE", "CCR_FORCE_BUNDLE"];
function br(e) {
  if (e.kind === "unreadable") return `Not uploading this working tree this way: ${"a settings file a cloud session could reach (this repository\u2019s .claude/settings.json or .claude/settings.local.json, or a --settings file)"} could not be parsed, so what it sets cannot be checked. Fix or remove it (see /status), then restart Claude Code.`;
  let o = import_chunk_1z1bgjzv.Rkt.includes(e.name.toUpperCase());
  if (e.kind === "names") return o ? `Not uploading this working tree this way: ${"a settings file a cloud session could reach (this repository\u2019s .claude/settings.json or .claude/settings.local.json, or a --settings file)"} names ${e.name}, which decides where your own settings are found. Remove it there; if you put it there yourself and need it, set it in your shell instead. Then restart Claude Code.` : `Not uploading this working tree this way: ${"a settings file a cloud session could reach (this repository\u2019s .claude/settings.json or .claude/settings.local.json, or a --settings file)"} names ${e.name}, and the upload's own git runs would have to trust what it names. If you did not put it there yourself, remove it. If you did, move it to your user settings (~/.claude/settings.json), managed settings or your shell (or pass the settings inline). Then restart Claude Code.`;
  return o ? `Not uploading this working tree this way: ${e.name} was changed by a settings file after Claude Code started; it decides where your own settings are found, so the upload only trusts the value the process was started with. Set it in the shell rather than in a settings file, then restart Claude Code.` : `Not uploading this working tree this way: ${e.name} was set by ${"a settings file a cloud session could reach (this repository\u2019s .claude/settings.json or .claude/settings.local.json, or a --settings file)"} that no longer names it, and the upload's own git runs would still have to trust it. Keep it out of those files and restart Claude Code.`;
}
function wNa() {
  return (0, import_chunk_cg8dqz0a.x)() === "windows";
}
function hXl(e) {
  switch (e?.kind) {
    case void 0:
      return "An older upload method, which took more layouts, is retired on macOS and Linux. To start without an upload, push your work and connect GitHub at https://claude.ai/code; /ultrareview also takes a pull request number.";
    case "forced_bundle":
      return "An older upload method, which took more layouts, is retired on macOS and Linux. To start without an upload, unset CCR_FORCE_BUNDLE, push your work and connect GitHub at https://claude.ai/code.";
    case "other_forge":
      return `An older upload method, which took more layouts, is retired on macOS and Linux. Cloud sessions can't clone from ${e.forge} yet, so an upload is the only way to start one from this repository.`;
  }
}
function bd(e, n) {
  return { success: false, error: n, failReason: "unsupported_layout", layoutKind: e };
}
var kd = { folder_is_home: "Not uploading this working tree: this checkout\u2019s git root is your home directory, or a folder above it (a repository rooted there makes every folder under it part of it, so the upload would carry your tracked home files). Start from a project folder that is its own repository, or work on these files from a separate clone.", folder_is_root: "Not uploading this working tree: this checkout\u2019s git root is the filesystem root. Start from a project folder that is its own repository.", folder_holds_config: "Not uploading this working tree: this checkout\u2019s git root holds (or sits inside) Claude Code\u2019s own configuration directory. Start from a project folder that is its own repository." }, Or = 268435456;
async function Ed(e, n, r) {
  let i = (0, import_chunk_w5s307zm.dr)(e ?? (0, import_chunk_18rsj2ts.pe)());
  if (!i) return { gitRoot: "", paths: [], added: /* @__PURE__ */ new Set(), deleted: [], gitlinks: [], unwrittenModes: [] };
  let o = (_) => (0, import_chunk_6s9tac84.mLn)([...import_chunk_gd77dyw4.Nn, ...import_chunk_6s9tac84.Vne, ...(0, import_chunk_6s9tac84.gst)(r), ..._], { cwd: i, abortSignal: n, env: { ...(0, import_chunk_gd77dyw4.ms)({ ...import_chunk_6s9tac84.rwt, ...(0, import_chunk_6s9tac84.hst)(r) }, { base: (0, import_chunk_6s9tac84.hLn)(), userLocale: true }), ...import_chunk_6s9tac84.Nhr }, maxBuffer: Or }), [c, h] = await Promise.all([o(["rev-parse", "--verify", "--quiet", "HEAD^{commit}"]), vd(i, n, r)]);
  if (h === null) return null;
  if (h.unwrittenModes.length > 0) return { gitRoot: i, paths: [], added: /* @__PURE__ */ new Set(), deleted: [], ...h };
  if (c.exitCode === 1) return { gitRoot: i, paths: [], added: /* @__PURE__ */ new Set(), deleted: [], ...h };
  let g = await xn(i, n, (0, import_chunk_gd77dyw4.ms)({}, { base: (0, import_chunk_6s9tac84.hLn)(), userLocale: true }));
  if (!g.ok) return null;
  let [p, y] = await Promise.all([o([...g.off, "diff", "--name-status", "-z", "--no-renames", import_chunk_gd77dyw4.zy, "HEAD", "--"]), o(["diff", "--cached", "--name-status", "-z", "--no-renames", import_chunk_gd77dyw4.zy, "HEAD", "--"])]);
  if (c.code !== 0 || p.code !== 0 || y.code !== 0) return null;
  return { ...Ro(Dn(p.stdout), Dn(y.stdout), i), ...h };
}
function Ro(e, n, r) {
  let i = (h, g) => h.filter(({ status: p, path: y }) => g(p) && y !== "").map(({ path: p }) => p), o = (0, import_chunk_4smdap7r.M)([...i(e, (h) => h !== "D"), ...i(n, (h) => h !== "D")]), c = new Set(o);
  return { gitRoot: r, paths: o, added: new Set(i(n, (h) => h === "A")), deleted: (0, import_chunk_4smdap7r.M)([...i(e, (h) => h === "D"), ...i(n, (h) => h === "D")]).filter((h) => !c.has(h)) };
}
function Dn(e) {
  let n = e.split("\0");
  return Array.from({ length: Math.floor(n.length / 2) }, (r, i) => ({ status: n[2 * i], path: n[2 * i + 1] }));
}
var Sd = /* @__PURE__ */ new Set([33188, 33261, 40960, 57344]), Rd = 61440, xd = 57344;
function Td(e) {
  let n = /^([0-7]{1,11}) [0-9a-f]+ \d\t(.*)$/s.exec(e);
  if (n === null) return { kind: "unwritten_mode", path: e.slice(e.indexOf("	") + 1) };
  let r = Number.parseInt(n[1], 8), i = n[2];
  return (r & Rd) === xd ? { kind: "gitlink", path: i } : { kind: Sd.has(r) ? "ordinary" : "unwritten_mode", path: i };
}
async function vd(e, n, r) {
  let i = await (0, import_chunk_6s9tac84.cw)(e, [...import_chunk_6s9tac84.Vne, ...(0, import_chunk_6s9tac84.gst)(r), "ls-files", "-s", "-z"], { hardened: false, signal: n, env: { ...import_chunk_6s9tac84.rwt, ...(0, import_chunk_6s9tac84.hst)(r) }, maxBuffer: Or });
  if (i.code !== 0) return null;
  let o = i.stdout.split("\0").filter((h) => h !== "").map(Td), c = (h) => (0, import_chunk_4smdap7r.M)(o.filter((g) => g.kind === h).map(({ path: g }) => g));
  return { gitlinks: c("gitlink"), unwrittenModes: c("unwritten_mode") };
}
async function xo(e, n, r, i, o = []) {
  let c = (y) => (0, import_chunk_w82axegn.CA)(y) || i?.(y) === true, h = await $t(e), g = async (y, _) => {
    if (!Ge(y, h)) return { path: y, why: "forged" };
    if (tt(y)) return { path: y, why: "alias" };
    let k = await Cd(e, y);
    if (k === "linked") return { path: y, why: "hardlinked" };
    if (c(y)) {
      if (_ === "changed") return { path: y, why: r.has(y) ? "added" : "changed" };
      if (await wr(e, y)) return { path: y, why: "resurrected" };
    }
    return k === "unexamined" ? { path: y, why: "unexamined" } : null;
  };
  return (await Promise.all([...o.map((y) => g(y, "deleted")), ...n.map((y) => g(y, "changed"))])).filter((y) => y !== null).sort((y, _) => y.path.localeCompare(_.path));
}
async function Cd(e, n) {
  if (n.includes("\uFFFD")) return "unexamined";
  let r = await rt(e, n);
  if (r !== "clear") return r === "symlink" ? "single" : "unexamined";
  try {
    let i = await (0, import_promises.lstat)((0, import_path.join)(e, n));
    return i.isFile() && i.nlink > 1 ? "linked" : "single";
  } catch (i) {
    let o = (0, import_chunk_jv7av99m.w)(i);
    return o === "ENOENT" || o === "ENOTDIR" ? "single" : "unexamined";
  }
}
async function Bd(e, n, r, i) {
  let o = (p) => (0, import_chunk_6s9tac84.cw)(e, [...import_chunk_6s9tac84.Vne, ...p], { hardened: false, signal: r, env: import_chunk_6s9tac84.rwt, maxBuffer: Or }), [c, h] = await Promise.all([o(["diff", "--name-status", "-z", "--no-renames", import_chunk_gd77dyw4.zy, `${n}^1`, n, "--"]), o(["diff", "--name-status", "-z", "--no-renames", import_chunk_gd77dyw4.zy, `${n}^1`, `${n}^2`, "--"])]);
  if (c.code !== 0 || h.code !== 0) return null;
  let g = Ro(Dn(c.stdout), Dn(h.stdout), e);
  return xo(e, g.paths, g.added, i, g.deleted);
}
async function gXl(e, n, r) {
  let i = (0, import_chunk_w5s307zm.dr)(e ?? (0, import_chunk_18rsj2ts.pe)()), o = i ? await (0, import_chunk_6s9tac84.Frl)(i, n) : null;
  if (o?.kind === "failed") return { kind: "refused", sentence: `It is not uploaded the previous way either: a private copy of this checkout's index could not be made (${(0, import_chunk_7cfjrnwy.ed)((0, import_chunk_kx2fp6pc.Yn)(o.detail), Xt)}), and that way runs only over such a copy. Nothing was uploaded; once that is put right, retry, or start from an ordinary clone.`, named: 0, added: 0, unexamined: 0, gitlinks: 0, indexCopied: false, indexCopyCause: o.cause };
  let c;
  try {
    c = await Ad(e, n, r, o?.indexFile);
  } catch (g) {
    throw await o?.dispose(), g;
  }
  if (c.kind === "refused") return await o?.dispose(), c;
  let h = null;
  try {
    h = o === null ? null : await (0, import_chunk_6s9tac84.$rl)(i, o.indexFile, n);
  } catch (g) {
    throw await o?.dispose(), g;
  }
  if (h?.kind === "failed") return await o?.dispose(), { kind: "refused", sentence: `It is not uploaded the previous way either: that way runs only over a private copy of this checkout's index, and ${(0, import_chunk_7cfjrnwy.ed)((0, import_chunk_kx2fp6pc.Yn)(h.detail), Xt)}. Nothing was uploaded; once that is put right, retry, or start from an ordinary clone.`, named: 0, added: 0, unexamined: 0, gitlinks: 0, indexCopied: false, indexCopyCause: "index_tree" };
  return { kind: "proceed", pinnedIndex: o === null ? null : { path: o.indexFile, dispose: o.dispose } };
}
async function Ad(e, n, r, i) {
  let o = await Ed(e, n, i);
  if (o === null) return { kind: "refused", sentence: "It is not uploaded the previous way either: its uncommitted changes could not be listed, so they cannot be checked for files that must stay on this machine \u2014 retry; if it keeps happening, git status in this checkout will show what git cannot list.", named: 0, added: 0, unexamined: 0, gitlinks: 0, indexCopied: true };
  let { gitlinks: c } = o;
  if (c.length > 0) return { kind: "refused", sentence: `It is not uploaded the previous way either: this checkout's index registers ${c.length} nested ${(0, import_chunk_7cfjrnwy.O)(c.length, "repository", "repositories")} (a submodule or gitlink: ${Oe(c, 3)}), which that way would enter, running git under the nested repository\u2019s own configuration \u2014 one a session of this checkout can write. If the entry is not meant, remove it from the index with \`git update-index --force-remove -- <path>\` (not \`git rm\`, which first runs git inside the nested repository); otherwise update git (2.31 or newer) if it is older, or start from an ordinary clone.`, named: 0, added: 0, unexamined: 0, gitlinks: c.length, indexCopied: true };
  let { unwrittenModes: h } = o;
  if (h.length > 0) return { kind: "refused", sentence: `It is not uploaded the previous way either: this checkout's index lists ${h.length} ${(0, import_chunk_7cfjrnwy.O)(h.length, "entry", "entries")} under a file mode git itself never writes (${Oe(h, 3)}), so something other than git wrote the index and what the previous way would carry cannot be checked. Remove each such entry with \`git update-index --force-remove -- <path>\` (the file itself stays on disk), then \`git add -- <path>\` if it should be tracked; or start from an ordinary clone.`, named: 0, added: 0, unexamined: h.length, gitlinks: 0, indexCopied: true };
  let g = o.gitRoot === "" ? void 0 : await r?.(o.gitRoot), p = await xo(o.gitRoot, o.paths, o.added, g, o.deleted);
  return p.length === 0 ? { kind: "proceed" } : { kind: "refused", sentence: `It is not uploaded the previous way either (that way keeps nothing back): ${Tr(p, r !== void 0).replace(/^Not uploading this working tree: /, "")}`, named: p.length, added: (0, import_chunk_4smdap7r.U)(p, ({ why: y }) => y === "added"), unexamined: (0, import_chunk_4smdap7r.U)(p, ({ why: y }) => y === "unexamined"), gitlinks: 0, indexCopied: true };
}
async function To(e) {
  let n = await (0, import_promises.lstat)((0, import_path.join)(e, ".git")).catch(() => null);
  return n?.isSymbolicLink() === true ? "link" : n?.isFile() === true && n.nlink !== 1 ? "second_name" : "other";
}
async function Id(e) {
  let n = (0, import_path.join)(e, ".git"), r = await (0, import_promises.lstat)(n).catch(() => null);
  if (r?.isSymbolicLink()) return "symlink";
  if (!r?.isFile()) return "other";
  let i = await (0, import_chunk_6s9tac84.RDe)(n).catch(() => {
    return;
  }), o = (0, import_chunk_1z1bgjzv.ISr)(i)?.replaceAll("\\", "/");
  if (o === void 0) return "other";
  return /\/worktrees\/[^/]+\/?$/.test(o) ? "linked_worktree" : /\/modules\//.test(o) ? "submodule" : "separate_git_dir";
}
function _Xl(e) {
  return `This checkout ${{ git_file: "is a submodule, a checkout with a separate git directory, or one whose .git pointer could not be followed", linked_worktree: "is a linked working tree whose pointer files could not be verified (try git worktree repair), which uses per-worktree configuration, or whose repository sits somewhere this upload does not trust", work_tree: "has core.worktree set", included_config: "reads git configuration from a file inside the working tree", many_includes: `is used with a git configuration that includes more files, or a longer chain of nested includes, than the new upload path follows (over ${import_chunk_6s9tac84.lco} include files or 8 levels deep)`, old_git: "is used with a git older than 2.31", borrowed_objects: "borrows objects from another repository", reftable: "keeps its refs in the reftable format" }[e]}; the new upload path does not support that yet, so the working tree is being uploaded the previous way for this session.`;
}
function Od() {
  let e = (0, import_chunk_6s9tac84.G6)(void 0), n = (0, import_chunk_69qhefwa.Ne)((0, import_chunk_khxw3ng0.Zi)(e, "CLAUDE_CODE_LEGACY_BUNDLE")), r = import_chunk_c203g5kd.s.CLAUDE_CODE_LEGACY_BUNDLE === true, i = r && !n;
  if (i) {
    let o = import_chunk_1z1bgjzv.Rkt.some((c) => (0, import_chunk_khxw3ng0.Zi)(process.env, c) !== (0, import_chunk_khxw3ng0.Zi)(e, c));
    (0, import_chunk_w578pjby.t)(o ? "[gitBundle] CLAUDE_CODE_LEGACY_BUNDLE is set, but a settings tier also moves where settings are read from (HOME, CLAUDE_CONFIG_DIR, ...): no settings tier counts as the owner's word then, so it is ignored and the default upload method runs" : "[gitBundle] CLAUDE_CODE_LEGACY_BUNDLE is set by a settings file, not by the environment claude was started with or the owner's own settings: ignored, the default upload method runs", { level: "warn" });
  }
  return { requested: n && r, ignored: i };
}
var xr = { missing: [], foreign: [] };
async function ro(e, n, r, i, o) {
  let c = await (0, import_chunk_6s9tac84.cw)(e, [...import_chunk_6s9tac84.Vne, "bundle", "list-heads", n], { hardened: false, signal: o, env: import_chunk_6s9tac84.rwt });
  if (c.code !== 0) return { missing: [r], foreign: [], unlisted: (0, import_chunk_7cfjrnwy.Ir)(c.stderr.trim()) || `exit ${c.code}` };
  return c.stdout.split(`
`).some((g) => g === `${i} ${r}`) ? xr : { missing: [r], foreign: [] };
}
async function io(e, n, r, i) {
  let o = r.filter((k) => !k.startsWith("-")), c = await (0, import_chunk_6s9tac84.cw)(e, ["bundle", "list-heads", n], { hardened: true, layout: i.layout, signal: i.signal, probes: i.probes });
  if (c.code !== 0) return { missing: o, foreign: [], unlisted: (0, import_chunk_7cfjrnwy.Ir)(c.stderr.trim()) || `exit ${c.code}` };
  let h = new Map(c.stdout.split(`
`).flatMap((k) => {
    let [E, I] = k.split(" ");
    return E === void 0 || I === void 0 ? [] : [[I, E]];
  })), g = o.filter((k) => {
    let E = h.get(k), I = i.expected[k];
    return E === void 0 || I !== void 0 && E !== I;
  }), p = i.shown === void 0 ? [] : [...h].flatMap(([k, E]) => Object.hasOwn(i.expected, k) || i.shown?.get(k) === E ? [] : [k]);
  if (i.shown === void 0 || g.length > 0 || p.length > 0) return { missing: g, foreign: p };
  let y = await (0, import_chunk_6s9tac84.cw)(e, ["cat-file", "--batch-check"], { hardened: true, layout: i.layout, signal: i.signal, probes: i.probes, input: [...h.values()].map((k) => `${k}
`).join("") }), _ = y.code === 0 ? [...h].flatMap(([k, E]) => y.stdout.includes(`${E} missing`) ? [k] : []) : [...h.keys()];
  return { missing: g, foreign: p, notHeld: _ };
}
async function Nd(e, n, r, i, o) {
  if (n === void 0 || !await (0, import_chunk_6s9tac84.mst)(n, r)) return null;
  let c = await (0, import_chunk_6s9tac84.cw)(e, ["rev-parse", "-q", "--verify", "HEAD^{tree}"], { hardened: true, layout: n, signal: i, probes: o }), h = c.stdout.trim();
  if (!await (0, import_chunk_6s9tac84.mst)(n, r)) return null;
  return c.code === 0 && /^[0-9a-f]{40}(?:[0-9a-f]{24})?$/.test(h) ? h : void 0;
}
async function $d(e, n, r, i, o) {
  if (!await (0, import_chunk_6s9tac84.mst)(n, r)) return null;
  let [c, h] = await Promise.all([(0, import_chunk_6s9tac84.cw)(e, ["for-each-ref", "--format=%(objectname) %(refname)", "refs/heads/", "refs/tags/"], { hardened: true, layout: n, signal: i, probes: o }), (0, import_chunk_6s9tac84.cw)(e, ["rev-parse", "-q", "--verify", "HEAD"], { hardened: true, layout: n, signal: i, probes: o })]);
  if (c.code !== 0 || h.code !== 0 && h.exitCode !== 1 || !await (0, import_chunk_6s9tac84.mst)(n, r)) return null;
  let g = h.code === 0 ? [["HEAD", h.stdout.trim()]] : [];
  return new Map([...c.stdout.split(`
`).flatMap((p) => {
    let [y, _] = p.split(" ");
    return y === void 0 || _ === void 0 ? [] : [[_, y]];
  }), ...g]);
}
function oo(e, n) {
  if (e.unlisted !== void 0) return { ok: false, error: `git bundle list-heads failed: ${wt(e.unlisted, n)}`, failReason: "git_error" };
  if (e.missing.length > 0) return Dd(e.missing);
  if (e.foreign.length > 0) return so(e.foreign);
  return (e.notHeld?.length ?? 0) > 0 ? so(e.notHeld ?? [], "not_held") : null;
}
function so(e, n = "changed") {
  return { ok: false, error: n === "changed" ? `git bundle create packed ${Oe(e)}, which this checkout did not show when the upload read its refs: its refs changed, or were redirected elsewhere, while the bundle was made. Make sure nothing else is writing to this checkout, inspect its git directory (a commondir file there was not written by git), then retry.` : `git bundle create packed ${Oe(e)} at commits this checkout's own object store does not hold: another object store stood in while the bundle was made. Make sure nothing else is writing to this checkout's git directory (objects/info in particular), then retry.`, failReason: "git_dir_tampered", refsChanged: true };
}
function Dd(e) {
  return { ok: false, error: `git bundle create left out or altered ${Oe(e)}: another ref in this repository (a branch or tag spelled like it) makes the name ambiguous, or the temporary ref was rewritten while the bundle was made, so the upload would not carry your changes as captured. Make sure nothing else is writing to this checkout, rename or delete such a branch or tag (see \`git for-each-ref\`), then retry.`, failReason: "git_error" };
}
function Oe(e, n = td) {
  let r = e.slice(0, n).map((o) => (0, import_chunk_7cfjrnwy.ed)((0, import_chunk_kx2fp6pc.Yn)(o), go)).join(", "), i = e.length - n;
  return i > 0 ? `${r} and ${i} more` : r;
}
function Fd(e, n) {
  switch (e) {
    case "objects":
      return { outcome: "bundle_objects_missing", error: `Not uploading this working tree: git could not read a complete history back out of the bundle it just made (${n}), so an object in this repository's .git/objects is most likely damaged. Run \`git fsck\` in this checkout, repair or re-clone the repository, then retry.`, failReason: "git_dir_tampered" };
    case "unlisted":
      return { outcome: "bundle_objects_unlisted", error: `Not uploading this working tree: the bundle git just made carries objects that none of the branches and tags it lists lead to (${n}). In \`git for-each-ref\`, look for a name that holds refs/ twice (such as refs/tags/refs/heads/x), rename or delete that branch or tag (on the remote too, or the next fetch brings it back), then retry.`, failReason: "refused" };
    case "trailing":
      return { outcome: "bundle_trailing_bytes", error: `Not uploading this working tree: the bundle git just made does not end with its pack (${n}). git does not write that on its own, so a pack file in this repository's .git/objects is most likely damaged or was not written by git. Clone the repository anew, then retry.`, failReason: "git_dir_tampered" };
    case "header":
    case "scratch":
    case "index":
    case "walk":
    case "unfinished":
      return { outcome: "git_error", error: `Could not check the bundle before upload, so nothing was uploaded (${n}). Retry; if it happens again, run \`git fsck\` in this checkout.`, failReason: "git_error" };
  }
}
function vn(e, n, r) {
  let i = r ? void 0 : (0, import_chunk_6s9tac84.ZTi)((0, import_chunk_6s9tac84.PWe)(n)), o = wt(n.stderr, r), c = n.stderr === import_chunk_6s9tac84.Mrl;
  return { ok: false, error: i !== void 0 ? Bo[i] : `${e} failed (${n.code})${o && `: ${o}`}${c ? "; `git fsck` in this checkout may show why" : ""}`, failReason: "git_error", ...i !== void 0 && { gitRefused: i } };
}
function wt(e, n) {
  return n ? (0, import_chunk_7cfjrnwy.ed)((0, import_chunk_kx2fp6pc.Yn)(e), 200) : e.slice(0, 200);
}
var kr = { git_file: "whose .git file does not hold the single pointer git writes there.", admin_dir: "whose .git file does not name the administrative directory git uses for it (or that directory is not where git keeps one, under the repository\u2019s .git/worktrees).", foreign_mount: "whose administrative directory under the repository\u2019s .git/worktrees has something mounted over it (another device or, on Linux, another mount) \u2014 unmount it first.", back_link: "whose administrative directory does not point back at it \u2014 usually a working tree that was moved; git worktree repair (run here) rewrites the pointer.", common_dir: "whose administrative directory names a different repository than git resolves for it.", keyed_elsewhere: "whose .git file leads git to a different repository from the one under which Claude Code keeps this folder\u2019s trust and settings. The usual cause is a symbolic link on the path in that file, or on the path to this folder.", placement: "whose repository sits inside this working tree (or the tree inside it), inside another git directory or under a temporary directory, or is not named the way git names one (.git, or name.git for a bare repository) \u2014 places and shapes this upload does not take a repository from.", worktree_config: "that uses per-worktree configuration (extensions.worktreeConfig, or a config.worktree file), which this upload does not support yet." };
function Pd(e) {
  let n = e.startsWith("included"), r = n ? "a file that your git configuration includes" : e.startsWith("repository") ? "this repository\u2019s own git configuration file" : "your own or the system-wide git configuration file", i = n ? " `git config --show-origin --get-regexp include` lists each include line and its file." : e.startsWith("repository") ? "" : " `git config --list --show-origin --name-only` shows the files in use.", o = "then retry; if the line is not yours to change, this checkout cannot be uploaded.", [c, h] = e.endsWith("_inside") ? ["lies inside this checkout or its git directory (even if it does not exist yet), where a cloud session could change it", n ? "Remove that line or point it outside this checkout, then retry; if the line is not yours to change, this checkout cannot be uploaded." : "Keep that file outside this checkout, or start from a checkout that does not hold it."] : e.endsWith("_not_text") ? ["has a name that is not valid text, so it cannot be checked", `Give the file and every folder in its path a name that is valid text, ${n ? "update the include line to match, " : ""}${e.startsWith("repository") ? "" : "keep the file outside this checkout, "}then retry.`] : ["can be reached from this checkout (through a link, a hard link or another spelling of its path) or is on a network path, so a cloud session could change it or it cannot be checked", n ? "Remove that line, or point it by its plain path at an ordinary local file outside this checkout, then retry; if the line is not yours to change, this checkout cannot be uploaded." : "Put an ordinary local file (no link, no hard link) in its place, then retry."];
  return `Not uploading this working tree: ${r} ${c}.${i} ${h}`;
}
function ao(e) {
  switch (e.misplaced) {
    case "git_file":
      return `Not uploading this working tree: ${e.pointerFollowed ? "this checkout\u2019s .git is a pointer file (a submodule, a checkout with a separate git directory), which this upload does not support yet. Before running any git command here, look at the directory that it leads to (the .git file names it), unless you know it. Start" : e.dotGitEntry === "link" ? "this checkout\u2019s .git is a symbolic link, which this upload does not follow. Start" : e.dotGitEntry === "second_name" ? "this checkout\u2019s .git pointer file has a second name (a hard link), so what it names cannot be trusted. Remove the other name and retry, or start" : "this checkout\u2019s .git is something this upload could not follow (it could not be read, is not the one gitdir line git writes, or names another host). Start"} from an ordinary clone of the repository \u2014 its main checkout \u2014 instead.`;
    case "linked_worktree":
      return e.detail === "worktree_config" ? `Not uploading this working tree: this checkout is a linked working tree ${kr.worktree_config} Start from the repository\u2019s main checkout instead (a new worktree made from this one would be refused too: a current git copies this file into it).` : e.detail === "placement" ? `Not uploading this working tree: this checkout is a linked working tree ${kr.placement} Start from the repository\u2019s main checkout, or from a working tree made with git worktree add in an ordinary location, instead; where neither serves, from an ordinary clone of the repository.` : `Not uploading this working tree: this checkout is a linked working tree ${kr[e.detail ?? "admin_dir"]} Start from the repository\u2019s main checkout, or from a working tree made with git worktree add in an ordinary location, instead.`;
    case "work_tree":
      return e.unexamined ? "Not uploading this working tree: this checkout\u2019s own folder could not be examined just now, so it could not be checked that git\u2019s working tree is this folder. Retry; if it goes on, check that you can still open this folder." : "Not uploading this working tree: git resolves this checkout\u2019s working tree to another directory (core.worktree is set), which this upload does not support yet. Start from an ordinary clone of the repository instead, or unset core.worktree if nothing here relies on it.";
    case "included_config":
      return Pd(e.writable ?? "included_indirect");
    case "many_includes":
      return `Not uploading this working tree: the git configuration in force for this checkout (~/.gitconfig, .git/config and the files they include) pulls in more include files, or a longer chain of nested includes, than this upload follows (over ${import_chunk_6s9tac84.lco} files or 8 levels deep), so the programs that configuration names cannot all be switched off while the upload is prepared. Trim the include chain (directives naming files that do not exist do not count), then retry.`;
    case "old_git":
      return "Not uploading this working tree: the installed git is older than 2.31, which cannot be kept from running programs this checkout\u2019s configuration names while the upload is prepared. Update git (2.31 or newer), then retry.";
    case "borrowed_objects":
      return `Not uploading this working tree: this checkout borrows objects from another repository (an objects/info/alternates or http-alternates file \u2014 a clone made with --shared or --reference, or a file something else put there), so an upload could carry that repository\u2019s history too, which this upload does not support. Start from an ordinary clone of the repository instead.${e.sharedDirectoryElsewhere ? " (This checkout is a linked working tree: that file is in its repository\u2019s git directory, which this checkout\u2019s .git file points into.)" : ""}`;
    case "reftable":
      return "Not uploading this working tree: this repository keeps its refs in the reftable format, whose tables the upload cannot yet vouch for one by one. Start from a clone made with the default (files) ref format instead.";
    case "ref_storage":
      return `Not uploading this working tree: ${(0, import_chunk_6s9tac84.Hrl)(e.keptBy ?? "setting")}. Nothing was uploaded.`;
    case "temp_root":
      return "Not uploading this working tree: this checkout stands \u2014 or a link on the way to it leads \u2014 under a directory cloud sessions on this machine use as scratch space, so nothing in it can be told apart from what such a session put there. Start from the checkout at its ordinary location instead.";
    case "git_dir":
      return "Not uploading this working tree: git does not use this checkout\u2019s own .git directory, which happens only when something in .git (usually HEAD) was emptied or overwritten by something other than git. Look at .git and put back what was changed before retrying, or start from an ordinary clone of the repository instead.";
    case "common_dir":
      return `Not uploading this working tree: the commondir file in this checkout\u2019s .git directory was written by something other than git, and it sends git to a directory where git itself would not keep this checkout\u2019s shared files. ${yt}`;
  }
}
function lo(e) {
  return { misplaced: e.misplaced, unexamined: e.unexamined, keptBy: e.keptBy, writable: e.writable, detail: e.detail, pointerFollowed: e.gitDir !== "", sharedDirectoryElsewhere: e.commonDir !== e.gitDir };
}
function yXl(e) {
  return `${e.length} tracked ${(0, import_chunk_7cfjrnwy.O)(e.length, "file")} ${(0, import_chunk_7cfjrnwy.O)(e.length, "was", "were")} missing when read and ${(0, import_chunk_7cfjrnwy.O)(e.length, "is", "are")} uploaded as deleted (${Oe(e, 3)}) \u2014 if a build was rewriting ${(0, import_chunk_7cfjrnwy.O)(e.length, "it", "them")} just then, start the session again once it settles.`;
}
function SXl(e, { readRules: n = false, ofThisUploadOnly: r = false } = {}) {
  return `${r ? "Left out of this upload" : "Left on this machine"}: ${e.length} uncommitted ${(0, import_chunk_7cfjrnwy.O)(e.length, "file")} named like credentials or keys, ${n ? "covered by a Read rule or a sandbox read-deny setting of yours, linked from your Claude Code configuration, " : ""}hard-linked to another file, kept by a git filter such as LFS, or still being written by another program while ${(0, import_chunk_7cfjrnwy.O)(e.length, "it was", "they were")} read (${Oe(e)})${r ? "" : `, ${(0, import_chunk_7cfjrnwy.O)(e.length, "was", "were")} not uploaded`} \u2014 the cloud session starts with the version git already holds for ${(0, import_chunk_7cfjrnwy.O)(e.length, "it", "them")} (committed or staged), or without ${(0, import_chunk_7cfjrnwy.O)(e.length, "it", "them")}.`;
}
function Tr(e, n = false) {
  let r = (k) => e.filter((E) => E.why === k).map(({ path: E }) => E), i = r("forged");
  if (i.length > 0) return `Not uploading this working tree: git reports changed paths spelled in a way git itself never writes (${Oe(i)}), so this checkout's index or HEAD was edited by something other than git. Inspect it (git status, git log) before retrying.`;
  let o = r("same-bytes");
  if (o.length > 0) return `Not uploading this working tree: while it was read, an index entry appeared (${Oe(o)}) holding, byte for byte, the content of a file that stays on this machine (named like credentials or keys${n ? ", covered by a Read rule or a sandbox read-deny setting of yours, linked from your Claude Code configuration" : ""}, or kept by a git filter) \u2014 at a name no step of this upload put it under, so something else wrote into the index copy this upload works in while it ran. Retry; if it recurs, check what else is running in this checkout.`;
  let c = r("alias");
  if (c.length > 0) return `Not uploading this working tree: its uncommitted changes include paths shaped like Windows 8.3 short names (${Oe(c)}), which can open a different file than they name. Rename or remove them \u2014 committing them as they stand would put whatever they open into git \u2014 then retry.`;
  let h = r("hardlinked");
  if (h.length > 0) return `Not uploading this working tree: ${h.length} changed ${(0, import_chunk_7cfjrnwy.O)(h.length, "file has", "files have")} a second hard link (${Oe(h)}) \u2014 another name for what may be a file outside this tree, linked in without reading it \u2014 so ${(0, import_chunk_7cfjrnwy.O)(h.length, "it is", "they are")} never read for an upload. Remove the extra link (or commit the file if it is yours), then retry.`;
  let g = r("unexamined");
  if (g.length > 0) return `Not uploading this working tree: ${g.length} changed ${(0, import_chunk_7cfjrnwy.O)(g.length, "file")} could not be examined where ${(0, import_chunk_7cfjrnwy.O)(g.length, "it stands", "they stand")} (${Oe(g)}) \u2014 a directory above could not be inspected, the name is not valid UTF-8, or the entry could not be read \u2014 so whether another name leads outside this tree cannot be told. Check the path (ls -la along it), or commit the change if it is yours, then retry.`;
  let p = r("added"), y = r("changed"), _ = r("resurrected");
  return [`Not uploading this working tree: its uncommitted changes include ${e.length} ${(0, import_chunk_7cfjrnwy.O)(e.length, "file")} named like credentials or keys${n ? ", covered by a Read rule or a sandbox read-deny setting of yours, or linked from your Claude Code configuration" : ""} (${Oe(e.map(({ path: k }) => k))}).`, ...p.length > 0 ? [`${Oe(p)} ${(0, import_chunk_7cfjrnwy.O)(p.length, "was", "were")} added to git's index but never committed: unless you meant to start tracking ${(0, import_chunk_7cfjrnwy.O)(p.length, "it", "them")}, take ${(0, import_chunk_7cfjrnwy.O)(p.length, "it", "them")} back out with \`git rm --cached -- <file>\` (the file itself stays on disk) \u2014 if you did not add ${(0, import_chunk_7cfjrnwy.O)(p.length, "it", "them")} yourself, something else did.`] : [], ...y.length > 0 ? [`${Oe(y)} ${(0, import_chunk_7cfjrnwy.O)(y.length, "differs", "differ")} from what is committed: commit the change if it belongs in git; if \`git status\` shows no change there, running it once settled the difference \u2014 retry; if git should not be tracking ${(0, import_chunk_7cfjrnwy.O)(y.length, "that file", "those files")} at all, this checkout's history was rewritten \u2014 see \`git log -- <file>\`.`] : [], ..._.length > 0 ? [`${Oe(_)} ${(0, import_chunk_7cfjrnwy.O)(_.length, "is", "are")} committed but removed from the index while the file is, or may still be, on disk: commit the removal, or if you never committed ${(0, import_chunk_7cfjrnwy.O)(_.length, "it", "them")}, see \`git log -- <file>\` for who did.`] : [], "Then retry."].join(" ");
}
function Cn(e) {
  return e === null ? "?" : (0, import_chunk_7e12xj51.dn)(e);
}
async function bXl(e, n) {
  var _stack = [];
  try {
    let r = (0, import_chunk_2zeyvjwb.uo)("hipaa") ? "refused_hipaa" : (0, import_chunk_2zeyvjwb.uo)("ldr") ? "refused_ldr" : void 0;
    if (r !== void 0) return (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { outcome: (0, import_chunk_78g0060s.S)(r) }), (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", r), { success: false, error: "Cloud sessions started from an uploaded copy of this working tree are disabled by your organization's policy. Start the session from a GitHub repository source instead.", failReason: "refused" };
    let i = n?.cwd ?? (0, import_chunk_18rsj2ts.pe)(), o = n?.currentBranchOnly === true, c = (0, import_chunk_w5s307zm.dr)(i);
    if (!c) return (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { outcome: (0, import_chunk_78g0060s.S)("not_a_repo") }), (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", "not_a_repo"), { success: false, error: "Not in a git repository", failReason: "not_a_repo" };
    let h = n?.hardenForDeviceSessions === true, g = n?.hardenForDeviceSessions === void 0 && (0, import_chunk_cg8dqz0a.x)() !== "windows" ? Od() : { requested: false, ignored: false }, p = n?.hardenForDeviceSessions ?? !wNa(), y = !h && (n?.previousCaptureServes ?? wNa());
    if (g.requested) (0, import_chunk_w578pjby.t)("[gitBundle] CLAUDE_CODE_LEGACY_BUNDLE is not honoured on macOS and Linux: the default upload method runs", { level: "warn" });
    let _ = p ? { hardened: true, ...(0, import_chunk_sjqze7qg.mio)(), ...g.ignored && { legacy_switch_ignored: true }, ...g.requested && { legacy_switch_retired: true } } : { legacy_bundle: true }, k = () => ((0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { outcome: (0, import_chunk_78g0060s.S)("admin_dir_failed"), admin_dir_reason: (0, import_chunk_78g0060s.S)("path_misread"), ..._ }), (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", "admin_dir_failed"), { success: false, error: "Not uploading this working tree: a folder with a backslash (\\) in its name is in its path (as written or with links followed) or in the path of the folder Claude Code was started in. Claude Code would read the backslash as a folder separator and check a different folder. Rename that folder, then start Claude Code again.", failReason: "refused" });
    if ((0, import_chunk_z6pfqf6e.rp)(c) || (0, import_chunk_z6pfqf6e.nNo)()) return k();
    let E = p ? await (0, import_promises.realpath)(c).catch(() => null) : c;
    if (E === null) return (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { outcome: (0, import_chunk_78g0060s.S)("admin_dir_failed"), admin_dir_reason: (0, import_chunk_78g0060s.S)("unresolved_root"), ..._ }), (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", "admin_dir_failed"), { success: false, error: "Not uploading this working tree: its own path could not be resolved just now (a link on the way to it changed or could not be read), so nothing was uploaded this way; retry from the directory itself.", failReason: "refused" };
    if ((0, import_chunk_z6pfqf6e.rp)(E)) return k();
    const I = __using(_stack, (0, import_chunk_6s9tac84.sCi)(), true);
    let A = p ? await Gd(I, E) : null;
    if (A !== null && (0, import_chunk_6s9tac84._Ln)(A) === "none") (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_root_names_no_object", { device_zero: A.startsWith("0:") });
    let R = p ? (0, import_chunk_6s9tac84.Uhr)(E) : [], C = (0, import_chunk_sjqze7qg.sJa)(c, n?.rootAnchors);
    if (C !== null) return (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { outcome: (0, import_chunk_78g0060s.S)("refused_home_root"), root_kind: (0, import_chunk_78g0060s.f)(C), ..._ }), (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", "refused_home_root"), { success: false, error: kd[C], failReason: "git_dir_tampered" };
    let v = (0, import_chunk_tnqn47cg.kNa)(), T = [v.stash, v.root], H = n?.signal, W = p ? AbortSignal.timeout(nd) : void 0, z = Date.now(), F = W === void 0 ? H : H === void 0 ? W : AbortSignal.any([H, W]), N = new import_chunk_6s9tac84.lon("operation"), oe = (G) => {
      let J = { phase: (0, import_chunk_78g0060s.f)(G), elapsed_ms: Date.now() - z };
      if (H?.aborted === true || W?.aborted !== true) return (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { ..._, outcome: (0, import_chunk_78g0060s.S)("aborted"), current_branch_only: o, ...J }), { success: false, error: "Bundle cancelled" };
      return (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { ..._, outcome: (0, import_chunk_78g0060s.S)("build_budget_expired"), current_branch_only: o, ...J }), (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", "build_budget_expired"), { success: false, error: "Preparing the upload took too long and was stopped (a file in this checkout that git reads, such as a .gitattributes, may be a pipe or otherwise blocking). Check the checkout, then retry.", failReason: "git_error" };
    };
    const Re = __using(_stack, (0, import_chunk_6s9tac84.sCi)(), true);
    let V = p ? await (0, import_chunk_6s9tac84.tcs)(c, F, { linkedTrees: true, bound: h, startsInProject: n?.startsInProject, perWorktreeConfig: "serve", probes: N, holder: Re }) : void 0;
    if (p && F?.aborted) return oe("layout_read");
    let ce = V?.kind === "read" ? (0, import_chunk_6s9tac84.Wrl)(V.layout, E, A) : "the_same";
    if (ce !== "the_same") return Kt({ on: "root_at_layout_read", folderRead: ce });
    let Ee = V?.kind === "read" && V.layout.checkout === "linked" ? (0, import_chunk_6s9tac84.aon)(V.layout.commonDir) : V?.kind === "tampered" && On(V.gitDir) ? (0, import_chunk_6s9tac84.aon)((0, import_path.dirname)((0, import_path.dirname)(V.gitDir))) : null, re = Ee === null ? [] : (0, import_chunk_6s9tac84.Uhr)(Ee), Y = (0, import_chunk_4smdap7r.M)([...R, ...re]), le = R[0] !== void 0 ? hd(R[0]) : re[0] !== void 0 ? md(re[0]) : null, xe = p && le === null ? (0, import_chunk_6s9tac84.scs)(E) : null, me = xe !== null ? `${Ar(xe, E)} and this checkout is inside it, so a Claude Code session started there can write this checkout\u2019s git files` : p && le === null && Ee !== null ? gd(Ee) : null, we = V?.kind === "read" ? V.layout.worktreeConfig : void 0, De = h || le !== null || me !== null || we !== void 0;
    if (V?.kind === "tampered") {
      (0, import_chunk_w578pjby.t)(`[gitBundle] Refusing to bundle: misplaced ${V.misplaced}`);
      let G = yd(V.misplaced), J = G === null ? "git_dir_tampered" : `unsupported_${G}`, ne = V.misplaced === "git_file" ? await Id(c) : null, de = G === null || h || !y && bo(V) ? { handedBack: false, refusedAs: V, notThePreviousWay: "" } : y ? await ud(E, V, le, me) : { handedBack: true }, X = de.handedBack, Be = X && y ? no({ workTree: c }) : null;
      if (Be !== null) return (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { ..._, outcome: (0, import_chunk_78g0060s.S)("admin_dir_failed"), steering: (0, import_chunk_78g0060s.f)(Be.kind), enclosed: Y.length > 0 }), (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", "admin_dir_failed"), { success: false, error: br(Be), failReason: "refused" };
      let ie = de.handedBack ? V : de.refusedAs;
      if ((0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { ..._, outcome: (0, import_chunk_78g0060s.f)(J), tampered_on: (0, import_chunk_78g0060s.f)(ie.misplaced), ...ie.unexamined && { unexamined: true }, ...ie.keptBy !== void 0 && { refs_kept_by: (0, import_chunk_78g0060s.f)(ie.keptBy) }, ...ie.writable !== void 0 && { writable_config: (0, import_chunk_78g0060s.f)(ie.writable) }, ...ie.includedBy !== void 0 && { included_by: (0, import_chunk_78g0060s.f)(ie.includedBy) }, ...ie.detail !== void 0 && { worktree_check: (0, import_chunk_78g0060s.f)(ie.detail) }, ...!de.handedBack && de.screened !== void 0 && { unlisted_config: (0, import_chunk_78g0060s.f)(de.screened) }, ...!de.handedBack && de.belowHomeCheckout === true && { below_home_checkout: true }, ...G !== null && { fallback_eligible: X, ...!h && { enclosed: Y.length > 0 } }, ...ne !== null && { git_file_kind: (0, import_chunk_78g0060s.f)(ne) } }), de.handedBack && G !== null) return { ...bd(G, ao(lo(V))), ...ne !== null && { gitFileKind: ne } };
      return (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", ie.misplaced === "included_config" && ie.writable !== void 0 ? `${J}_${ie.writable}${ie.includedBy === void 0 ? "" : `_by_${ie.includedBy}`}` : ie.misplaced === "linked_worktree" && ie.detail !== void 0 ? `${J}_${ie.detail}` : J), { success: false, error: ao({ ...lo(ie), ...Br(ie) && { dotGitEntry: await To(E) } }) + (de.handedBack || !y || G === null || ie.unexamined ? "" : zt(de.notThePreviousWay)), failReason: "git_dir_tampered" };
    }
    if (V?.kind === "failed") {
      if ((0, import_chunk_w578pjby.t)(`[gitBundle] could not read the checkout's git layout: ${V.detail.slice(0, 200)}`), V.why === "changed_under_hold") return Kt({ on: "changed_under_hold", unopened: V.unopened });
      if (V.why === "settings_unreadable") return (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { ..._, outcome: (0, import_chunk_78g0060s.S)("admin_dir_failed"), steering: (0, import_chunk_78g0060s.S)("unreadable") }), (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", "admin_dir_failed"), { success: false, error: br({ kind: "unreadable" }), failReason: "refused" };
      let G = V.why === "git_not_found", J = V.why === "changed_under_read", ne = G ? "git_not_on_path" : V.cause ?? "wip_unreadable";
      if ((0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { ..._, outcome: (0, import_chunk_78g0060s.f)(ne), ...J && { changed_under_read: true }, ...G && (0, import_chunk_6s9tac84.nCi)() && { git_script_wrapper_only: true } }), (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", ne), V.cause !== void 0) return { success: false, error: Bo[V.cause], failReason: "git_error" };
      return G ? h ? { success: false, error: `Not uploading this working tree: git was not found on the PATH this process was started with once the directories a cloud session can write here were left out (those inside this checkout or a checkout enclosing it, such as a worktree\u2019s main checkout; those below your home directory when it is, or lies inside, a git checkout${fd(E)}; a session temp directory; or one whose git links into them). Install git outside those, or put that directory on PATH, then retry.${(0, import_chunk_6s9tac84.rCi)()} ${import_chunk_6s9tac84.tCi}`, failReason: "refused" } : { success: false, error: `git was not found on the PATH this process was started with, so nothing was uploaded. Install git, or put its directory on PATH, then retry.${(0, import_chunk_6s9tac84.rCi)()}`, failReason: "git_error" } : J ? { success: false, error: "This linked worktree\u2019s git files, in its repository\u2019s .git directory, changed while they were being read (removed, moved or replaced meanwhile), so nothing was uploaded. Retry; if it keeps happening, check what else is changing that .git directory.", failReason: "git_error" } : { success: false, error: "Could not read where git keeps this checkout, so nothing was uploaded. Run `git rev-parse --git-dir --show-toplevel` here (it changes nothing) to see what git says, then retry.", failReason: "git_error" };
    }
    let q = V?.layout;
    if (q !== void 0 && !(0, import_chunk_6s9tac84.Drl)(q) && (0, import_chunk_6s9tac84.eCi)((0, import_chunk_6s9tac84.G6)(void 0)) === null) return (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { ..._, outcome: (0, import_chunk_78g0060s.S)("ambiguous_filter_driver") }), (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", "ambiguous_filter_driver"), { success: false, error: 'Not uploading this working tree: your git configuration defines a filter driver named "unset" or "unspecified" (a file your configuration includes counts too, even one included only for other repositories), and git reports files that use such a driver as having no filter, so they would be uploaded as they are on disk, without the filter. Nothing was uploaded. Rename the driver in your git configuration, and in any attributes file that uses it, then retry.', failReason: "refused" };
    let it = q?.checkout === "linked", _t = q ? await (0, import_chunk_6s9tac84.Fhr)(q, T) : null;
    if (_t !== null) return Kt({ on: "mid_build", fault: _t });
    let Fe = q !== void 0 && await Ld(c, q, F, N);
    if (p && F?.aborted) return oe("promisor_probe");
    if (Fe) (0, import_chunk_w578pjby.t)("[gitBundle] partial clone \u2014 bundling a snapshot of the working tree, without history");
    let Q = De && q !== void 0 ? no(q) : null;
    if (Q !== null) return (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { ..._, outcome: (0, import_chunk_78g0060s.S)("admin_dir_failed"), steering: (0, import_chunk_78g0060s.f)(Q.kind), steered_by: (0, import_chunk_78g0060s.fe)(Q.kind === "unreadable" ? void 0 : import_chunk_1z1bgjzv.hHi.find((G) => G === Q.name.toUpperCase())) }), (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", "admin_dir_failed"), { success: false, error: br(Q), failReason: "refused" };
    let Te = p || n?.refuseCredentialNamedInStash === true, Ze = Te ? (0, import_chunk_6s9tac84.Xfe)() : (0, import_chunk_8nvd6fqx.Fp)();
    const se = __using(_stack, q !== void 0 ? await (0, import_chunk_6s9tac84.Nrl)(c, q, F, N, "own") : void 0, true);
    if (se?.kind === "failed") {
      if (F?.aborted) return oe("admin_dir");
      if ((0, import_chunk_w578pjby.t)(`[gitBundle] could not set up the private git dir: ${se.detail.slice(0, 200)}`), se.cause === "attribute_source") {
        let { kind: de } = se.source;
        return (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { ..._, outcome: (0, import_chunk_78g0060s.S)("attribute_source_unread"), attribute_source: (0, import_chunk_78g0060s.f)(de), linked_worktree: it }), (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", "attribute_source_unread"), { success: false, error: wd(se.source), failReason: "refused" };
      }
      (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { ..._, outcome: (0, import_chunk_78g0060s.S)("admin_dir_failed"), linked_worktree: it, admin_dir_reason: (0, import_chunk_78g0060s.f)(se.reason), admin_dir_cause: (0, import_chunk_78g0060s.f)(se.cause), ...!h && { enclosed: Y.length > 0 } }), (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", "admin_dir_failed");
      let G = (0, import_chunk_7cfjrnwy.ed)((0, import_chunk_kx2fp6pc.Yn)(se.detail), Xt), J = !y ? "" : le !== null ? zt(le) : we === "extension" ? zt("its repository has per-worktree configuration switched on (extensions.worktreeConfig, which git sparse-checkout sets)") : we === "inert" ? zt("a per-worktree configuration file (config.worktree) stands in its administrative entry") : it ? zt("a linked working tree is uploaded under that private directory only") : "";
      return { success: false, error: se.cause === "symbolic_head" ? `Not uploading this working tree: ${G}. Nothing was uploaded.${to.symbolic_head}` : se.cause === "placement" ? `Not uploading this working tree this way: the private git directory the upload must trust would stand where a cloud session can write \u2014 ${G}. Nothing was uploaded; retry once that is changed.` : se.cause === "home" ? `Could not prepare a private git directory for the upload (${G}), so nothing was uploaded. It is kept under your configuration home: check that ${be(se.home)} is a writable directory of yours, and that ${be((0, import_path.join)(se.home, "seed-admin"))}, if it exists, is a directory only you can write. Look at it first: ls -ld, with no / after the name (tab completion adds one, and with it a link to a folder shows as a plain folder). A directory there holds scratch only and can be removed (rm -r, again with no /). A link or a file there is removed by its name (rm, with no -r and no / after the name). Then retry.${J}` : `Could not prepare a private git directory for the upload (${G}), so nothing was uploaded. The upload builds from private copies of this checkout\u2019s HEAD, index and refs, and copies them only when they are ordinary files (no links, one name each).${to[se.cause]}${J}`, failReason: "refused" };
    }
    let bt = (G) => {
      let J = q === void 0 ? void 0 : (0, import_chunk_6s9tac84.Url)(q, N.screenMemo);
      if (J === void 0) return null;
      return (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { ..._, outcome: (0, import_chunk_78g0060s.S)("config_level_not_read"), config_level: (0, import_chunk_78g0060s.f)(J), config_level_asked: (0, import_chunk_78g0060s.f)(G) }), (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", "config_level_not_read"), { success: false, error: `Not uploading this working tree: ${J} names a git configuration file that a Claude Code session could change, so the git that this upload runs does not read it, and a file git would change before storing it (to encrypt it, for example) could be uploaded as it is on disk. Move its settings into ${J === "GIT_CONFIG_GLOBAL" ? "~/.gitconfig" : "git\u2019s default system file"} and remove ${J} from your shell or your Claude Code settings; or keep the file outside this checkout, any checkout around it or around your home directory, Claude Code\u2019s temp folder, and any folder that settings open to sessions. Then start Claude Code again.`, failReason: "refused" };
    }, Qe = bt("before_build");
    if (Qe !== null) return Qe;
    if (q !== void 0 && se?.kind === "made") q = { ...q, adminDir: se.path, borrowedObjects: se.borrowedObjects };
    let At = q ? await (0, import_chunk_6s9tac84.Fhr)(q, T) : null;
    if (At !== null) return Kt({ on: "mid_build", fault: At });
    if (!p) {
      let G = await (0, import_chunk_6s9tac84.cw)(c, ["for-each-ref", "--format=%(refname)", "refs/seed/"], { hardened: p, probes: N });
      if (G.code !== 0) (0, import_chunk_w578pjby.t)(`[gitBundle] could not list refs/seed/ (${G.code}), so private refs a killed build left are not swept this run (the two fixed names still are): ${wt(G.stderr, p)}`);
      let J = (0, import_chunk_4smdap7r.M)([import_chunk_tnqn47cg.nAn, import_chunk_tnqn47cg.rAn, ...(0, import_chunk_tnqn47cg.ENa)(G.code === 0 ? G.stdout.split(`
`).filter((ne) => ne !== "") : [])]);
      for (let ne of J) {
        let de = await Bn(c, ["-d", ne], { hardened: p, layout: void 0, probes: N });
        if (de.code !== 0) (0, import_chunk_w578pjby.t)(`[gitBundle] could not sweep a stale seed ref: ${de.stderr.slice(0, 200)}`);
      }
    }
    let kt = await (0, import_chunk_6s9tac84.cw)(c, ["rev-parse", "--verify", "--quiet", "HEAD"], { hardened: p, layout: q, probes: N, ...p && { signal: F } }), It = kt.code === 0, qt = kt.exitCode === 1, Vt = kt.exitCode === void 0 && kt.stderr === "", je = await (0, import_chunk_6s9tac84.cw)(c, ["for-each-ref", "--count=1", "refs/heads/", "refs/tags/"], { hardened: p, layout: q, probes: N, ...p && { signal: F } });
    if (p && F?.aborted) return oe("ref_probe");
    if (je.code === 0 && je.stdout.trim() === "" && !It) return (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { ..._, outcome: (0, import_chunk_78g0060s.S)("empty_repo"), current_branch_only: o }), (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", "empty_repo"), { success: false, error: "Repository has no local branch, tag, or checkout to seed from yet", advice: Md, failReason: "empty_repo" };
    let He = qt && !o ? await (async () => {
      let G = { hardened: p, layout: q, probes: N, signal: F, ...!p && { env: { ...import_chunk_6s9tac84.rwt, GIT_NO_LAZY_FETCH: "1", ...(0, import_chunk_6s9tac84.hst)(n?.pinnedIndexFile) } } }, J = p ? [] : import_chunk_6s9tac84.Vne, ne = await (0, import_chunk_6s9tac84.cw)(c, [...J, "hash-object", "-t", "tree", "--stdin"], { ...G, input: "" }), de = await (0, import_chunk_6s9tac84.cw)(c, [...J, "for-each-ref", `--count=${_r + 1}`, "--sort=-creatordate", "--format=%(if)%(*objecttype)%(then)%(*objecttype)%(else)%(objecttype)%(end) %(objectname)", "refs/heads/", "refs/tags/"], G), X = async (D) => {
        let j = await (0, import_chunk_6s9tac84.cw)(c, [...J, ...D], G);
        return j.exitCode === 1 ? true : j.exitCode === 0 || j.code === 0 ? false : null;
      }, Be = (D) => X(["diff-index", "--cached", "--quiet", "--ita-invisible-in-index", D, "--"]), ie = de.code === 0 ? de.stdout.split(`
`).flatMap((D) => {
        let [j, ee] = D.split(" ");
        return j === "commit" && ee !== void 0 ? [ee] : [];
      }) : null, Xe = ne.code === 0 ? await Be(ne.stdout.trim()) : null, ut = async (D) => {
        if (D.length === 0) return false;
        let j = await Be(`${D[0]}^{tree}`);
        return j === null ? null : j ? ut(D.slice(1)) : true;
      };
      if (Xe === false) return "empty";
      if (Xe === null || ie === null) return "unread";
      let Ie = await ut(ie.slice(0, _r));
      if (!Ie) return Ie === null ? "unread" : ie.length > _r ? "over_cap" : "off_branch";
      let qe = p ? null : await xn(c, F), ue = qe?.ok === false ? null : await X([...qe?.off ?? [], "--no-optional-locks", "diff-files", "--quiet", import_chunk_gd77dyw4.zy]);
      return ue === null ? "worktree_unread" : ue ? "unstaged" : "on_branch";
    })() : void 0;
    if (F?.aborted) return oe("ref_probe");
    if (He === "off_branch" || He === "over_cap" || He === "unstaged" || He === "unread" || He === "worktree_unread") return (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { ..._, outcome: (0, import_chunk_78g0060s.S)("empty_repo"), current_branch_only: o, unborn_staged: He !== "unstaged" && He !== "worktree_unread", unborn_index: (0, import_chunk_78g0060s.f)(He) }), (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", "empty_repo"), { success: false, error: "The current branch has no commits yet", advice: Yt, failReason: "empty_repo" };
    let ze = 0, P = q ? await Pi(c, q, { signal: F, probes: N, onNamesWindowsCannotHold: (G) => {
      ze = G;
    }, onOpenRefusedAtTheLook: (G) => {
      (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_look_open_refused", { files: G });
    }, leaveOutUncommittedCredentialFiles: true, alsoLeaveOut: await fo(n?.withholdFor, c, q.workTree), neverRead: await fo(n?.neverReadFor, c, q.workTree), maxStagedBytes: 2 * Sr() }) : await Li(c, It || Vt, F, n?.pinnedIndexFile), ke = ze > 0 ? { ..._, names_windows_cannot_hold: ze } : _;
    if (F?.aborted) return oe("wip_stash");
    if (P.kind === "created" && q === void 0 && n?.refuseCredentialNamedInStash === true) {
      let G = await Bd(c, P.commit, F, await n?.withholdFor?.(c));
      if (F?.aborted) return oe("wip_stash");
      if (G === null || G.length > 0) return (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { ...ke, outcome: (0, import_chunk_78g0060s.S)("uncommitted_credentials"), refused_paths: G?.length ?? 0, refused_unexamined: (0, import_chunk_4smdap7r.U)(G ?? [], ({ why: J }) => J === "unexamined"), refused_on: (0, import_chunk_78g0060s.S)("stash_trees") }), (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", "uncommitted_credentials"), { success: false, error: G === null ? "Not uploading this working tree: the uncommitted changes just captured could not be listed back, so they cannot be checked for files that must stay on this machine \u2014 retry." : Tr(G, n?.withholdFor !== void 0), failReason: "uncommitted_credentials" };
    }
    if (P.kind === "refused") return (0, import_chunk_w578pjby.t)(`[gitBundle] Refusing to stash: ${P.refused.length} forged path(s), or credential-named path(s) that reached a built tree`), (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { ...ke, outcome: (0, import_chunk_78g0060s.S)("uncommitted_credentials"), credential_paths: P.refused.length, refused_on: (0, import_chunk_78g0060s.f)(P.decidedOn) }), (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", "uncommitted_credentials"), { success: false, error: Tr(P.refused, n?.withholdFor !== void 0), failReason: "uncommitted_credentials" };
    if (P.kind === "failed" && P.step === "path-encoding") {
      (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { ...ke, outcome: (0, import_chunk_78g0060s.S)("wip_path_encoding") }), (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", "wip_path_encoding");
      let G = "A changed file in this checkout has a name \u2014 or a changed symbolic link a target \u2014 that is not valid UTF-8, which this upload cannot carry yet. Commit or rename it, then retry.";
      return { success: false, error: G, advice: G, failReason: "stash_failed" };
    }
    if (P.kind === "failed" && (P.step === "verify" || P.step === "refused-name" || P.step === "rewritten")) return (0, import_chunk_w578pjby.t)(`[gitBundle] the checkout's git directory holds what git never wrote (${P.step}): ${P.detail.slice(0, 200)}`), (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { ...ke, outcome: (0, import_chunk_78g0060s.S)("wip_tampered"), wip_step: (0, import_chunk_78g0060s.f)(P.step) }), (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", "wip_tampered"), { success: false, error: P.step === "verify" ? "Not uploading this working tree: its git directory holds an object that is not what its id names \u2014 something other than git wrote it there (`git fsck` usually names it). Nothing was uploaded; repair or re-clone the repository, then retry." : P.step === "rewritten" ? "Not uploading this working tree: the scratch copy of the index this upload works in was changed by another process while the upload ran. Nothing was uploaded; retry, and if it recurs check what else is running in this checkout." : `Not uploading this working tree: its git index names a path git itself refuses to write (a ".git"-like or "git~1" name) \u2014 something other than git put it there. ${yt}`, failReason: "git_dir_tampered" };
    if (P.kind === "failed" && P.step === "malformed-tree") {
      (0, import_chunk_w578pjby.t)(`[gitBundle] a committed tree is stored in a form git no longer writes: ${P.detail.slice(0, 200)}`), (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { ...ke, outcome: (0, import_chunk_78g0060s.S)("wip_legacy_tree") }), (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", "wip_legacy_tree");
      let G = `the committed tree for ${Mi(P.detail)} is stored in a form git reads but does not itself write (some old tools wrote trees this way: entries out of order, or an unknown file mode). Commit a change to any file ${P.detail === "" ? "at the top of the checkout" : "in that directory"} so git rewrites the tree, then retry.`;
      return { success: false, error: `Not uploading this working tree: ${G}`, advice: G, failReason: "stash_failed" };
    }
    if (P.kind === "failed" && rd.includes(P.step)) return (0, import_chunk_w578pjby.t)(`[gitBundle] could not read the checkout's uncommitted state (git ${P.step}): ${P.detail.slice(0, 200)}`), (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { ...ke, outcome: (0, import_chunk_78g0060s.S)("wip_unreadable") }), (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", "wip_unreadable"), { success: false, error: "Could not read the uncommitted changes of this checkout with git before uploading them (HEAD or the index is not in a state git reports on cleanly), so nothing was uploaded. Check `git status` here, then retry.", failReason: "git_error" };
    if (P.kind === "failed" && (P.step === "write-tree" || P.step === "read-tree") && Fe && P.said === "object_missing") return (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { ...ke, outcome: (0, import_chunk_78g0060s.S)("stash_failed"), wip_step: (0, import_chunk_78g0060s.f)(P.step), current_branch_only: o, partial_clone: true }), (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", "stash_failed"), { success: false, error: mo, failReason: "git_error" };
    if (P.kind === "failed") {
      (0, import_chunk_w578pjby.t)(`[gitBundle] could not capture uncommitted changes (git ${P.step}): ${P.detail.slice(0, 200)}`), (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { ...ke, outcome: (0, import_chunk_78g0060s.S)("stash_failed"), wip_step: (0, import_chunk_78g0060s.f)(P.step), ...P.silent && { wip_silent: true }, ...P.said !== void 0 && { git_said: (0, import_chunk_78g0060s.f)(P.said) }, current_branch_only: o }), (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", "stash_failed");
      let G = p ? (0, import_chunk_7cfjrnwy.ed)((0, import_chunk_kx2fp6pc.Yn)(P.detail), Xt) : P.detail, J = P.said === "unmerged" ? "This checkout has an unfinished merge or rebase (git status lists the conflicted files): resolve or abort it here first, or start the session from a branch with --ref." : P.said === "index_locked" ? "Another git process is running in this checkout; retry in a moment." : P.said === "object_missing" ? "Retry; if it stops here again, run `git fsck` in this checkout." : P.said === "own_filter_file" ? "git status and git add run that filter with your access, so if you don't recognize it, look at the repository's git config first. Then run git status, commit the files you really changed (git add <file>, then git commit), and retry. Don't remove a filter that encrypts these files: they would upload unencrypted." : P.said === "own_config_refused" ? "Check the repository's git config, then retry. If you don't recognize that setting, remove it: a tool or checkout you don't trust may have written it." : void 0, ne = !p ? P.silent ? "Retry; if it stops here again, run `git --version` here to see whether git starts." : J ?? Yt : P.step === "scratch-index" ? "A scratch copy of the index could not be written (next to .git/index, under ~/.claude/seed-admin, or under the temporary directory); check the disk and permissions there, then retry." : P.step === "stage" ? "A changed file could not be copied for upload as it stands (too large in total, still being written, or not a plain file); commit or stash such files, then retry. If nothing here is really uncommitted (a copied or restored checkout), run git status once so git refreshes its index, then retry." : P.step === "check-attr" ? P.detail === pr ? ze > 0 ? co(ze) : "HEAD's .gitattributes rules could not be read reliably: retry first. If it stops here again, save each committed .gitattributes above a changed file as plain UTF-8 text with no byte-order mark (one saved as UTF-16 stops it, for example, and so does one that git lists as a submodule) and commit that; or commit all your changes; or check the repository's objects (git fsck)." : "The attributes in force could not be vouched for: in .git/info/attributes, move any filter rules, attribute macros or quoted patterns into a .gitattributes file and shorten any line of 2,048 bytes or more (or remove .git/info/attributes), or commit your changes first, then retry." : J ?? (ze > 0 ? co(ze) : Yt);
      return { success: false, error: `Could not capture uncommitted changes (git ${P.step}: ${G}). ${ne}`, advice: ne, failReason: "stash_failed" };
    }
    let Ke = P.kind === "created", Le = P.kind === "created" || P.kind === "none" ? P.leftOut.map(({ path: G }) => G).sort() : [], Jt = P.kind === "created" || P.kind === "none" ? (0, import_chunk_4smdap7r.U)(P.leftOut, ({ why: G }) => G === "unstable") : 0, et = P.kind === "created" ? [...P.deletedUnstaged].sort() : [];
    if (Le.length > 0) (0, import_chunk_w578pjby.t)(`[gitBundle] ${Le.length} uncommitted path(s) kept out of the WIP commit (credential-named, hard-linked, filtered, or changed while read)`);
    if (Ke) {
      (0, import_chunk_w578pjby.t)(`[gitBundle] Captured WIP as stash ${P.commit}`);
      let G = q ? await (0, import_chunk_6s9tac84.Fhr)(q, T) : null;
      if (G !== null) return Kt({ on: "mid_build", fault: G });
      let J = await Bn(c, [v.stash, P.commit], { hardened: p, layout: q, probes: N, ...p && { signal: F } });
      if (J.code !== 0) return F?.aborted ? oe("seed_refs") : jd(J.stderr, q?.adminDir, ke, { held_ref: (0, import_chunk_78g0060s.S)("stash"), git_exit_code: J.code });
    }
    let Et = null, Ye = Te ? "" : (0, import_chunk_8nvd6fqx.dJe)("ccr-seed", ".bundle");
    try {
      if (Te) {
        try {
          Et = await Kr("claude-seed", Ze);
        } catch (ue) {
          return (0, import_chunk_w578pjby.t)(`[gitBundle] no private bundle directory: ${(0, import_chunk_jv7av99m.d)(ue)}`), (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { ...ke, outcome: (0, import_chunk_78g0060s.S)("git_error"), current_branch_only: o }), (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", "git_error"), { success: false, error: "Could not create a private directory for the bundle.", failReason: "git_error" };
        }
        Ye = Et.path;
      }
      let G = `${Ye}.relabelled`, J = Sr(), ne = await ld(c, F, q ? { layout: q } : null, N);
      if (ne !== "not_shallow") (0, import_chunk_w578pjby.t)(`[gitBundle] shallow repository: ${dd[ne]}`);
      let de = Date.now(), X = ne === "unborn_cut" ? { ok: false, error: "The current branch has no commits yet, and the other branches of this shallow clone are cut short, so nothing here can be bundled; commit first, or deepen the clone (git fetch --unshallow)", failReason: "empty_repo" } : await _o(c, Ye, { maxBytes: J, seedRefs: v, relabelledPath: G, hasStash: Ke, ...P.kind === "created" && { stashCommit: P.commit }, leftOutCount: Le.length, withheldByRules: n?.withholdFor !== void 0, currentBranchOnly: o, headResolves: It, hardened: p, layout: q, signal: F, probes: N, baseRef: n?.baseRef, forceScope: Fe || ne === "cut" ? "squashed" : n?.forceScope, partialClone: Fe, skipAllRefs: ne === "complete" || ne === "cut", bindJudgedStash: n?.refuseCredentialNamedInStash === true });
      if (!X.ok) {
        if (p && F?.aborted) return oe("bundle_create");
        (0, import_chunk_w578pjby.t)(`[gitBundle] ${X.error}`);
        let ue = H?.aborted === true, D = X.heldSeedRef ? "seed_ref_held" : X.refsChanged ? "bundle_refs_changed" : X.gitRefused ?? X.failReason, j = D === "git_dir_tampered" && q !== void 0 ? await (0, import_chunk_6s9tac84.Fhr)(q, T) : null, ee = j ?? D;
        if ((0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { ...ke, outcome: ue ? (0, import_chunk_78g0060s.S)("aborted") : (0, import_chunk_78g0060s.f)(ee), max_bytes: J, size_bytes: X.sizeBytes, current_branch_only: o, ...X.failReason === "git_dir_tampered" && { tampered_on: (0, import_chunk_78g0060s.S)("mid_build") }, ...X.heldSeedRef !== void 0 && { held_ref: (0, import_chunk_78g0060s.S)("root"), git_exit_code: X.heldSeedRef.exitCode }, ...X.promisorFallback && { promisor_fallback: true }, ...X.failReason === "git_error" && (0, import_chunk_6s9tac84.nCi)() && { git_script_wrapper_only: true }, shallow_repository: ne !== "not_shallow", shallow_head: ne === "cut", build_ms: Date.now() - de }), !ue) (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", ee);
        return { success: false, error: j === null ? X.error : Co[j], ...X.failReason === "empty_repo" && ne !== "unborn_cut" && { advice: Yt }, failReason: X.failReason };
      }
      if (n?.signal?.aborted) return (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { ...ke, outcome: (0, import_chunk_78g0060s.S)("aborted"), max_bytes: J, current_branch_only: o, build_ms: Date.now() - de }), { success: false, error: "Bundle cancelled" };
      (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_built", { scope: (0, import_chunk_78g0060s.f)(X.scope), size_bytes: X.size, has_wip: Ke, current_branch_only: o, build_ms: Date.now() - de }), n?.onBundled?.({ sizeBytes: X.size, scope: X.scope });
      let Be, ie;
      if (Te) {
        let ue = await Yr(X.path, J);
        if (ue.kind !== "read") {
          let D = ue.kind === "too_large" ? `bundle grew to ${ue.sizeBytes} bytes` : ue.detail;
          return (0, import_chunk_w578pjby.t)(`[gitBundle] bundle unreadable after create: ${D}`), (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { ...ke, outcome: (0, import_chunk_78g0060s.S)("git_error"), max_bytes: J, current_branch_only: o }), (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", "git_error"), { success: false, error: `The bundle could not be read back for upload (${(0, import_chunk_7cfjrnwy.ed)((0, import_chunk_kx2fp6pc.Yn)(D), 200)}).`, failReason: "git_error" };
        }
        Be = ue.content;
      }
      let Xe = bt("before_upload");
      if (Xe !== null) return Xe;
      if (Be !== void 0) {
        let ue = Date.now(), D = await Vr(Be, { scratchRoot: (0, import_path.dirname)(X.path) }, (j, ee) => (0, import_chunk_6s9tac84.cw)(c, j, { hardened: p, layout: q, probes: N, signal: H, ...ee }));
        if (ie = Date.now() - ue, !D.ok) {
          if (H?.aborted) return oe("bundle_check");
          (0, import_chunk_w578pjby.t)(`[gitBundle] the bundle failed its check (${D.kind}): ${D.detail}`);
          let j = Fd(D.kind, (0, import_chunk_7cfjrnwy.ed)((0, import_chunk_kx2fp6pc.Yn)(D.detail), 200));
          return (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { ...ke, outcome: (0, import_chunk_78g0060s.f)(j.outcome), check_failure: (0, import_chunk_78g0060s.f)(D.kind), check_ms: ie, size_bytes: X.size, scope: (0, import_chunk_78g0060s.f)(X.scope), current_branch_only: o, has_wip: Ke, ...X.promisorFallback && { promisor_fallback: true }, shallow_repository: ne !== "not_shallow", shallow_head: ne === "cut" }), (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", j.outcome), { success: false, error: j.error, failReason: j.failReason };
        }
      }
      if (!p && n?.refuseCredentialNamedInStash === true) {
        let ue = await pd(c);
        if (ue !== null) return (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { ...ke, outcome: (0, import_chunk_78g0060s.S)("hand_back_store_planted"), tampered_on: (0, import_chunk_78g0060s.f)(ue) }), (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", "hand_back_store_planted"), { success: false, error: ue === "unreadable" ? "Not uploading this working tree: its git directory could not be re-read after the capture ran, so what was packed cannot be vouched for. Inspect the checkout\u2019s .git, then retry." : ue === "common_dir" ? "Not uploading this working tree: a commondir file appeared in its git directory while the upload was prepared \u2014 git writes one only in a linked working tree\u2019s entry \u2014 so what was packed cannot be vouched for. Inspect the git directory, then retry." : `Not uploading this working tree: ${ue === "borrowed_objects" ? "an objects/info/alternates file" : "a reftable directory"} appeared in its git directory while the upload was prepared, so what was packed may hold another repository\u2019s history. ${yt}`, failReason: "git_dir_tampered" };
      }
      let ut = Date.now(), Ie = await (0, import_chunk_271f5kxt.Oal)(X.path, "_source_seed.bundle", e, { signal: H, ...Be !== void 0 && { content: Be }, expiresInSeconds: Za }), qe = Date.now() - ut;
      if (!Ie.success) {
        let ue = n?.signal?.aborted === true;
        if ((0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { ...ke, outcome: ue ? (0, import_chunk_78g0060s.S)("aborted") : (0, import_chunk_78g0060s.S)("failed"), upload_error_type: (0, import_chunk_78g0060s.f)(Ie.reason), size_bytes: X.size, scope: (0, import_chunk_78g0060s.f)(X.scope), current_branch_only: o, ...X.promisorFallback && { promisor_fallback: true }, shallow_repository: ne !== "not_shallow", shallow_head: ne === "cut", upload_ms: qe }), !ue) (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", "upload_failed");
        return { success: false, error: Ie.error, failReason: "upload_failed" };
      }
      if ((0, import_chunk_w578pjby.t)(`[gitBundle] Uploaded ${Ie.size} bytes`), (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { ...ke, outcome: (0, import_chunk_78g0060s.S)("success"), size_bytes: Ie.size, scope: (0, import_chunk_78g0060s.f)(X.scope), has_wip: Ke, current_branch_only: o, ...He !== void 0 && { unborn_index: (0, import_chunk_78g0060s.f)(He) }, ...p && { credential_paths_left_out: Le.length, left_out_unstable: Jt, deleted_unstaged: et.length, partial_clone: Fe, withhold_rules: n?.withholdFor !== void 0, linked_worktree: q?.checkout === "linked", ...q?.workTreeRespelled && { work_tree_respelled: true }, ...q?.worktreeConfig === "inert" && { worktree_check: (0, import_chunk_78g0060s.S)("inert_config") }, private_admin_dir: q?.adminDir !== void 0 }, ...X.promisorFallback && { promisor_fallback: true }, shallow_repository: ne !== "not_shallow", shallow_head: ne === "cut", upload_ms: qe, ...ie !== void 0 && { check_ms: ie }, ...false }), X.scope === "head" && !o) (0, import_chunk_cqa9hrgx.l)("teleport_git_bundle_upload", "fallback_head");
      else if (X.scope === "squashed") (0, import_chunk_cqa9hrgx.l)("teleport_git_bundle_upload", "fallback_squashed");
      else (0, import_chunk_cqa9hrgx.u)("teleport_git_bundle_upload");
      return Qr(Zr(q)), { success: true, fileId: Ie.fileId, bundleSizeBytes: Ie.size, scope: X.scope, hasWip: Ke, ...p && { leftOut: Le, ...et.length > 0 && { deletedHere: et } } };
    } finally {
      if (Ye !== "") {
        try {
          await (0, import_promises.unlink)(Ye);
        } catch {
          (0, import_chunk_w578pjby.t)(`[gitBundle] Could not delete ${Ye} (non-fatal)`);
        }
        await (0, import_promises.unlink)(`${Ye}.lock`).catch(() => {
        }), await (0, import_promises.unlink)(`${Ye}.relabelled`).catch(() => {
        });
      }
      if (await Et?.dispose(), !q || await (0, import_chunk_6s9tac84.mst)(q, T)) for (let G of T) await Bn(c, ["-d", G], { hardened: p, layout: q, probes: N });
    }
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    var _promise = __callDispose(_stack, _error, _hasError);
    _promise && await _promise;
  }
}
async function Ld(e, n, r, i) {
  let o = await (0, import_chunk_6s9tac84.cw)(e, ["config", "-z", "--list"], { hardened: true, layout: n, signal: r, probes: i });
  if (o.code !== 0) return true;
  return Nr(o.stdout);
}
function Nr(e) {
  return e.split("\0").some((n) => {
    let r = n.indexOf(`
`), i = r === -1 ? n : n.slice(0, r), o = r === -1 ? "true" : n.slice(r + 1);
    return i === "extensions.partialclone" || /^remote\..*\.partialclonefilter$/s.test(i) || /^remote\..*\.promisor$/s.test(i) && !["false", "no", "off", "0", ""].includes(o.toLowerCase());
  });
}
function Bn(e, n, r) {
  return (0, import_chunk_6s9tac84.cw)(e, ["update-ref", "--no-deref", ...n], r);
}
var Md = 'Commit the files that you want the cloud session to see (git add <file>, then git commit -m "initial"), then retry.', Yt = "Commit the files that you changed by name (git add <file>, then git commit), then retry.";
function co(e) {
  return `${Yt} Do not run \`git add .\` or \`git commit -a\` here: this checkout tracks ${e} file ${e === 1 ? "name" : "names"} that Windows cannot hold, which git lists as deleted, and either command would record the ${e === 1 ? "deletion" : "deletions"}.`;
}
async function Gd(e, n) {
  let r = await e.hold(n);
  return r === "not_held" ? (0, import_chunk_6s9tac84.Aae)(n) : r === "gone" ? null : r.id;
}
async function fo(e, n, r) {
  if (e === void 0) return;
  let i = await Promise.all(((0, import_chunk_6s9tac84.h$t)(n) === r ? [n] : [n, r]).map((o) => e(o)));
  return (o) => i.some((c) => c(o));
}
function Kt(e) {
  let n = e.on === "mid_build" ? e.fault : e.on === "root_at_layout_read" ? "work_tree_replaced" : "git_dir_tampered", r = Co[n];
  return (0, import_chunk_w578pjby.t)(`[gitBundle] ${r}`), (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { hardened: true, outcome: (0, import_chunk_78g0060s.f)(n), tampered_on: (0, import_chunk_78g0060s.f)(e.on), ...e.on === "changed_under_hold" && { hold_unopened: e.unopened }, ...e.on === "root_at_layout_read" && { folder_read: (0, import_chunk_78g0060s.f)(e.folderRead) } }), (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", n), { success: false, error: r, failReason: "git_dir_tampered" };
}
function jd(e, n, r, i) {
  let o = vo(e, n);
  return (0, import_chunk_y53wbr8a.a)("tengu_ccr_bundle_upload", { ...r, outcome: (0, import_chunk_78g0060s.S)("seed_ref_held"), ...i }), (0, import_chunk_cqa9hrgx.m)("teleport_git_bundle_upload", "seed_ref_held"), { success: false, ...o };
}
function vo(e, n) {
  (0, import_chunk_w578pjby.t)(`[gitBundle] could not update a temporary seed ref: ${e.slice(0, 200)}`);
  let r = (0, import_chunk_7cfjrnwy.ed)((0, import_chunk_kx2fp6pc.Yn)((0, import_chunk_7cfjrnwy.Ir)(e.trim())), Xt);
  return { error: n !== void 0 ? `Could not write a temporary ref in the private git directory that this upload builds in (${r}). Retry; if it keeps failing, check that ${be((0, import_path.dirname)(n))} is writable and its disk has room.` : `Could not write the temporary ref this upload uses under .git/refs/seed (${r}). If another git process is running here, let it finish, then retry; if it keeps failing, check that this checkout\u2019s git directory is writable and its disk has room. If it fails even so, something that git did not put there may be in the way at .git/refs/seed. ${yt}`, failReason: "git_error" };
}
var An = "Not uploading this working tree: its git directory changed while the upload was being prepared, holds something git itself never puts there, or could not be inspected \u2014 another git process (a background fetch or gc) may have written packs meanwhile, in which case let it finish and retry; otherwise look for a commondir or objects/info/alternates file, or a link, special or unreadable entry where its branches, tags, HEAD, the temporary refs/seed entries, their logs, or objects go (commondir, refs/heads, refs/tags, refs/seed, logs/refs/seed, logs/HEAD, objects/info, objects/pack) before retrying.";
function pt() {
  return { error: An, failReason: "git_dir_tampered" };
}
var Er = "is not one plain file: it is a link, has a second name (a hard link, as tools that merge identical files make), is a folder or a special file, is missing where git needs it, or could not be examined. Git normally writes a plain file with one name there. Check with ls -l: a link shows an arrow (->), and the number after the permissions counts the names. If it is a plain file and that number is above 1, copy the file, move the copy over it (cp, then mv; git reads the copy the same), and retry. If it is anything else, start from a fresh clone of the repository instead (your uncommitted changes stay in this folder); where git itself writes links there (its core.preferSymlinkRefs setting), switch that setting off first.", Co = { work_tree_replaced: "Not uploading this working tree: this folder was moved, removed or replaced while the upload was being prepared, or could not be examined. Try again; if it happens again, look for another program that moves or recreates this folder.", git_dir_replaced: An, git_dir_head_not_plain: `Not uploading this working tree: HEAD in its git directory (usually .git/HEAD) ${Er}`, git_dir_packed_refs_not_plain: `Not uploading this working tree: packed-refs in its git directory (usually .git/packed-refs) ${Er}`, git_dir_refs_not_plain: `Not uploading this working tree: an entry at or under refs/heads, refs/tags or refs/remotes in its git directory (in an ordinary checkout, find .git/refs -type l -o -type f -links +1 lists such entries) ${Er}`, git_dir_logs_not_plain: An, git_dir_tampered: An, git_dir_objects_not_plain: `Not uploading this working tree: the objects folder in its git directory (usually .git/objects) holds a link, a special file, a file directly in it that has a second name (a hard link), a folder where git keeps only files (in objects/pack or in objects/00 to objects/ff), an entry whose name is not valid UTF-8, more than ${import_chunk_6s9tac84.$hr.toLocaleString("en-US")} folders directly in it, or something that could not be examined (ls -lR .git/objects shows which). ${yt}`, git_dir_objects_changed: "Not uploading this working tree: something wrote to objects/pack or objects/info in its git directory (usually .git) while the upload was being prepared. Usually that is another git process, such as a fetch, gc or maintenance run that an editor started. Let it finish, then retry. If it keeps happening with no git running, find out what else writes there." }, Bo = { git_refused_dubious_ownership: "Git will not work in this checkout because its folder, or the .git in it, belongs to another user (\u201Cdetected dubious ownership\u201D), so nothing was uploaded. That is common in containers and on mounted folders. Whether to go on is a question of whether you trust that user: git\u2019s safe.directory setting grants a folder. Run `git rev-parse --git-dir` here (it changes nothing): git\u2019s answer shows how. If that command works for you, your grant is given only through git\u2019s environment variables (GIT_CONFIG_PARAMETERS, or GIT_CONFIG_COUNT and its keys), which do not reach this upload\u2019s git: the grant has to stand in a file that git reads.", git_refused_not_a_repository: "Git does not recognise the .git here as a repository (\u201Cnot a git repository\u201D), so nothing was uploaded. Its HEAD, objects or refs may be missing, empty or unreadable, as after an interrupted copy. Start from a fresh clone, or from the folder that holds the real repository.", git_refused_bad_config: "Git cannot parse one of its configuration files (\u201Cbad config\u201D), so nothing was uploaded. Run `git rev-parse --git-dir` here (it changes nothing): its error names the file and the line, or the setting at fault. Fix that, then retry.", git_refused_config_unreadable: "Git cannot open one of its configuration files (\u201Cunable to access\u201D), so nothing was uploaded. Run `git rev-parse --git-dir` here (it changes nothing): its error names the file. Make that file readable for your user, or remove the include that points to it, then retry.", git_refused_unknown_extension: "This repository uses a git feature that the git on your PATH does not know (\u201Cunknown repository extension\u201D), so nothing was uploaded. Update git, or put a newer git first on the PATH that Claude Code is started with, then retry.", git_did_not_run: "The program that runs as git on your PATH started and ran no git, so nothing was uploaded. A version manager\u2019s shim (asdf\u2019s, for one) does that where no git version is set for the folder. Run `git --version` here to see what it says. Set a version, or put a real git first on the PATH that Claude Code is started with, then retry.", git_did_not_run_from_outside: "", git_dir_objects_folder_missing: "This checkout\u2019s git directory lacks objects/info or objects/pack, so nothing was uploaded. Git makes both in every repository and works without them; a copy that skips empty folders loses them. To make them again, in an ordinary checkout, at its top level, where .git is: first look with ls -ld .git .git/objects (a link shows an arrow, ->). If either is a link, stop, since the folders would be made wherever it points, and start from a fresh clone instead. Otherwise run mkdir .git/objects/info .git/objects/pack (an error that one of them exists does no harm), then retry.", launch_folder_unresolved: "This folder\u2019s own path could not be resolved just now: a link on the way to it changed, or a folder above it cannot be entered. So nothing was uploaded. Retry from the folder itself, by its real path.", keyed_folder_unresolved: "The folder under which Claude Code keeps this worktree\u2019s trust and settings could not be resolved just now: too many files may be open, or a folder on the way to it changed. So nothing was uploaded. Retry." };
