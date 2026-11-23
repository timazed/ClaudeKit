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
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s2, m, _2) {
    return _2 = Error(m), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s2, _2;
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
var chunk_9cw8ezgd_exports = {};
__export(chunk_9cw8ezgd_exports, {
  Jxa: () => Jxa,
  Kxa: () => Kxa,
  Qxa: () => Qxa,
  S6o: () => S6o,
  SGl: () => SGl,
  Wvn: () => Wvn,
  Xxa: () => Xxa,
  Yxa: () => Yxa,
  Z5s: () => Z5s,
  Zxa: () => Zxa,
  _6o: () => _6o,
  _Gl: () => _Gl,
  _Zn: () => _Zn,
  a9s: () => a9s,
  b6o: () => b6o,
  bGl: () => bGl,
  d9s: () => d9s,
  e9s: () => e9s,
  g6o: () => g6o,
  gZn: () => gZn,
  i9s: () => i9s,
  l9s: () => l9s,
  n9s: () => n9s,
  o9s: () => o9s,
  qxa: () => qxa,
  r9s: () => r9s,
  s9s: () => s9s,
  t9s: () => t9s,
  y6o: () => y6o,
  yGl: () => yGl
});
module.exports = __toCommonJS(chunk_9cw8ezgd_exports);
var import_chunk_zcpqgt0x = require("/$bunfs/root/chunk-zcpqgt0x.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_w82axegn = require("/$bunfs/root/chunk-w82axegn.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_8nvd6fqx = require("/$bunfs/root/chunk-8nvd6fqx.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_dy7yfx4p = require("/$bunfs/root/chunk-dy7yfx4p.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_a0mfj0s8 = require("/$bunfs/root/chunk-a0mfj0s8.js");
var import_chunk_tkg68a1m = require("/$bunfs/root/chunk-tkg68a1m.js");
var import_chunk_h7pf2vgc = require("/$bunfs/root/chunk-h7pf2vgc.js");
var import_chunk_d4d5q2mn = require("/$bunfs/root/chunk-d4d5q2mn.js");
var import_chunk_nb21njpa = require("/$bunfs/root/chunk-nb21njpa.js");
var import_chunk_w71cxznt = require("/$bunfs/root/chunk-w71cxznt.js");
var import_chunk_g9ztbtfd = require("/$bunfs/root/chunk-g9ztbtfd.js");
var import_chunk_7e1w6rv3 = require("/$bunfs/root/chunk-7e1w6rv3.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var import_path2 = require("path");
var import_promises2 = require("fs/promises");
var import_promises3 = require("fs/promises");
var import_path3 = require("path");
var import_promises4 = require("fs/promises");
var import_path4 = require("path");
var import_path5 = require("path");
var import_promises5 = require("fs/promises");
var import_path6 = require("path");
var import_path7 = require("path");
var import_path8 = require("path");
var import_path9 = require("path");
var import_path10 = require("path");
var import_promises6 = require("fs/promises");
var import_path11 = require("path");
var import_promises7 = require("fs/promises");
var import_path12 = require("path");
var import_promises8 = require("fs/promises");
var import_path13 = require("path");
var import_path14 = require("path");
var import_promises9 = require("fs/promises");
var import_promises10 = require("fs/promises");
var import_promises11 = require("fs/promises");
var import_path15 = require("path");
var import_path16 = require("path");
var import_path17 = require("path");
var import_path18 = require("path");
var import_path19 = require("path");
var import_path20 = require("path");
var import_crypto = require("crypto");
var import_path21 = require("path");
var import_promises12 = require("fs/promises");
var import_path22 = require("path");
var import_path23 = require("path");
var import_path24 = require("path");
var cs = (e) => e.kind === "needs-manifest" ? e.draft : void 0;
var De = (0, import_chunk_bzyb60p0.pH)((0, import_path2.dirname)((0, import_path2.join)(import_chunk_zcpqgt0x.Vp)));
function ze(e) {
  let r = e instanceof Error ? e.cause : void 0;
  return [(0, import_chunk_jv7av99m.d)(e), typeof r === "string" ? r : ""].filter(Boolean);
}
var gZn = (e) => e.catch((r) => (0, import_chunk_tkg68a1m.Bw)("unreadable", ze(r)));
var bs = 3;
var ys = 100;
async function Y(e, r = bs) {
  let o = await (0, import_promises2.rm)(e, { recursive: true, force: true }).then(() => {
    return;
  }, (i) => i);
  if (o === void 0) return;
  if (r > 0) return await (0, import_chunk_5appeerh.K)(ys), Y(e, r - 1);
  (0, import_chunk_w578pjby.t)(`A copy made to validate a plugin could not be removed: ${(0, import_chunk_jv7av99m.w)(o) ?? "no code"}`, { level: "warn" });
}
var F = () => Error("The copy to validate was ended as the process ends");
var J = (e, r) => e.path.localeCompare(r.path, "en");
var Rs = (e) => e.isSymbolicLink() && "link" || e.isDirectory() && "folder" || e.isFile() && "file" || "special";
async function _s(e) {
  let r = await (0, import_promises4.lstat)(e);
  return { path: e, kind: Rs(r), bytes: r.size, mode: r.mode, links: r.nlink };
}
var re = 32;
var We = ".gitignore";
var Ps = (e) => e.split(/\r?\n/).map((r, o) => ({ line: r, named: `line ${o + 1}: ${r}` })).find((r) => (0, import_chunk_p1ewvgeh.pEr)(r.line) !== null)?.named;
var Os = Object.freeze(["ENOENT", "ENOTDIR"]);
var $e = (e) => Os.includes((0, import_chunk_jv7av99m.w)(e) ?? "");
var Es = (e) => (0, import_promises5.lstat)(e).then(() => Promise.reject(Error("A .gitignore here cannot be read")), (r) => $e(r) ? "" : Promise.reject(r));
async function Ve(e) {
  let r = (0, import_path5.join)(e, We), o = await (0, import_chunk_nb21njpa.QW)(r) ?? await Es(r), i = Ps(o);
  if (i !== void 0) throw Error("A .gitignore line cannot be read", { cause: `${r} ${i}` });
  let a = (0, import_chunk_p1ewvgeh.wdn)(o);
  return a.length > 0 ? [{ base: e, rules: (0, import_chunk_p1ewvgeh.f4)().add(a) }] : [];
}
async function Ts(e, r) {
  let o = (0, import_path4.join)(e, We);
  if (r.some((a) => a.path === o && a.kind === "file" && a.links > 1)) throw Error("A .gitignore here cannot be read", { cause: o });
  return Ve(e);
}
var R = (e, r) => (0, import_chunk_bzyb60p0.pH)((0, import_path6.relative)(e, r.path));
var Kxa = Object.freeze([".mcp.json"]);
var Fs = (e, r) => !Kxa.includes(r) && ((0, import_chunk_w82axegn.CA)(`/${r}`) || (0, import_chunk_w82axegn.CA)(`/${(0, import_path8.basename)(e)}/${r}`) || (0, import_chunk_w82axegn.c0)(`/${r}`));
var Ns = Object.freeze({ file: "", folder: "/", link: "", special: "" });
var er = (e, r) => e.toReversed().map(({ base: o, rules: i }) => i.test(R(o, r) + Ns[r.kind])).find((o) => o.ignored || o.unignored)?.ignored ?? false;
function Us(e, r, o) {
  let i = (0, import_path9.join)(e, import_chunk_zcpqgt0x.Vp), a = (0, import_path9.dirname)(i);
  return !(o.path === i || o.path === a) && (er(r.scope, o) || r.path === a && er(r.scope.filter((m) => m.base !== a), { ...o, path: a, kind: "folder" }));
}
var zs = [...import_chunk_bzyb60p0.sto, ".hg", ".svn", ".jj", ".sl", ".bzr"];
function Cs(e) {
  let r = [(0, import_path10.basename)(e.path), ...(0, import_chunk_w82axegn.E9e)((0, import_path10.basename)(e.path))];
  return e.kind === "folder" && r.some((o) => o.endsWith(".git")) || r.some((o) => zs.includes(o));
}
var Hs = (e, r, o) => (0, import_chunk_h7pf2vgc.p8s)([o.kind === "link" && "link", o.kind === "special" && "special", o.kind === "file" && o.links > 1 && "hard-link", (0, import_path7.basename)(o.path).includes("\\") && "backslash", Cs(o) && "never", (0, import_chunk_bzyb60p0.NOn)(e, o.path) && "generated", Fs(e, R(e, o)) && "secret", Us(e, r, o) && "ignored"]);
function Ws(e, r, o) {
  let i = Hs(e, r, o);
  return i === void 0 ? [] : [{ path: R(e, o), why: i }];
}
var pr = 33188;
var Ks = 73;
var qxa = 33261;
function qs(e) {
  return (e.mode & Ks) !== 0 ? qxa : pr;
}
var $s = (e, r) => ({ path: R(e, r), bytes: r.bytes, mode: qs(r) });
function Gs(e, r, o) {
  let i = o.flatMap((f) => Ws(e, r, f)), a = new Set(i.map((f) => f.path)), m = o.filter((f) => !a.has(R(e, f)));
  return { files: m.filter((f) => f.kind === "file").map((f) => $s(e, f)), leftOut: i, folders: m.filter((f) => f.kind === "folder").map((f) => ({ path: f.path, scope: r.scope })) };
}
async function Qs(e, r) {
  let o = (0, import_chunk_w71cxznt.Rl)(re, (a) => _s((0, import_path3.join)(r.path, a))), i = await Promise.all((await (0, import_promises3.readdir)(r.path)).toSorted().map(o));
  return Gs(e, { path: r.path, scope: r.scope.concat(await Ts(r.path, i)) }, i);
}
var ei = (e) => (0, import_promises6.lstat)((0, import_path11.join)(e, ".git")).then(() => true, (r) => $e(r) ? false : Promise.reject(r));
async function ri(e) {
  let r = (0, import_chunk_sjqze7qg.pis)(e);
  for (let [o, i] of r.entries()) if (await ei(i)) return r.slice(1, o + 1).toReversed();
  return [];
}
var oi = async (e) => (await Promise.all((await ri(e)).map(Ve))).flat();
async function ae(e) {
  let r = [], o = [], i = [{ path: e, scope: await oi(e) }];
  for (let a of i) {
    if (r.length > import_chunk_tkg68a1m.G5s) break;
    let f = await Qs(e, a);
    r.push(...f.files), o.push(...f.leftOut), i.push(...f.folders);
  }
  return { files: r.toSorted(J), leftOut: o.toSorted(J) };
}
var xr = 448;
var ii = 384;
var ni = false;
var _r = 1n;
var Pr = Object.freeze({ bigint: true });
async function mi(e, r, o) {
  let i = await (0, import_promises9.realpath)(r).catch(() => e), m = (0, import_chunk_g9ztbtfd.ti)(e, i, ni) ? await (0, import_promises9.lstat)(i, Pr).catch(() => {
    return;
  }) : void 0;
  return m?.ino === o.ino && m.dev === o.dev && m.nlink === _r;
}
var fi = Object.freeze(["ENOENT", "ENOTDIR", "ELOOP", "EISDIR"]);
var ui = (e) => (0, import_promises10.open)(e, (0, import_chunk_6mfepmbb.Xu)()).catch((r) => fi.includes((0, import_chunk_jv7av99m.w)(r) ?? "") ? void 0 : Promise.reject(r));
var gi = async (e, r) => await (0, import_chunk_nb21njpa.DP)(e, (0, import_path15.dirname)(r)) === "ok" && (await (0, import_promises11.lstat)(r).catch(() => {
  return;
}))?.isFile() === true;
async function Z5s(e, r) {
  let o = (0, import_path14.join)(e, r.path), a = await gi(e, o) ? await ui(o) : void 0;
  try {
    let m = await a?.stat(Pr), u = m?.isFile() === true && m.size === BigInt(r.bytes) && m.nlink === _r && await mi(e, o, m) ? await a?.readFile() : void 0;
    return u?.length === r.bytes ? u : void 0;
  } finally {
    await a?.close();
  }
}
async function Ri(e, r, o) {
  let i = await Z5s(e, o);
  if (i === void 0) return;
  return await (0, import_promises8.mkdir)((0, import_path13.dirname)((0, import_path13.join)(r, o.path)), { recursive: true, mode: xr }).then(() => (0, import_promises8.writeFile)((0, import_path13.join)(r, o.path), i, { flag: "wx", mode: ii })).catch((a) => Promise.reject(Error("A file could not be copied to be validated", { cause: `${(0, import_chunk_jv7av99m.w)(a) ?? ""} ${o.path}`.trim() }))), (0, import_chunk_ccm69jjy.Je)(i);
}
async function Si(e, r, o) {
  e.abort(), await r, await o();
}
var _i = (e, r) => Object.fromEntries(e.map((o, i) => [o.path, r[i] ?? ""]));
var Pi = (e, r, o) => ({ home: e, dir: r, hashes: o });
async function Ei(e, r) {
  var _stack = [];
  try {
    if ((0, import_chunk_w578pjby.c_)()) return Promise.reject(F());
    let o = await (0, import_promises7.mkdtemp)((0, import_path12.join)((0, import_chunk_8nvd6fqx.Fp)(), "claude-publish-")).catch((h) => Promise.reject(Error("A folder to validate a copy in could not be made", { cause: (0, import_chunk_jv7av99m.w)(h) ?? "" }))), i = (0, import_chunk_7e1w6rv3.ud)(() => Y(o));
    if ((0, import_chunk_w578pjby.c_)()) return await i(), Promise.reject(F());
    let a = (0, import_path12.join)(o, "copy", (0, import_path12.basename)(e)), m = new AbortController(), f = Promise.resolve().then(() => (0, import_promises7.mkdir)(a, { recursive: true, mode: xr })).catch(() => {
      return;
    }).then(() => Promise.allSettled(r.map((0, import_chunk_w71cxznt.Rl)(re, (h) => m.signal.aborted ? Promise.resolve(void 0) : Ri(e, a, h).catch((T) => (m.abort(), Promise.reject(T)))))));
    const u = __using(_stack, (0, import_chunk_w578pjby.Ct)(() => Si(m, f, i)));
    let g = await f, L = g.find((h) => h.status === "rejected"), x = r.find((h, T) => g[T]?.status === "fulfilled" && !g[T].value);
    if (await (L === void 0 && x === void 0 && !m.signal.aborted ? void 0 : i()), L?.status === "rejected") return Promise.reject(L.reason);
    if (m.signal.aborted) return await i(), Promise.reject(F());
    if (x !== void 0) return { missed: x.path };
    return Pi(o, a, _i(r, g.map((h) => h.status === "fulfilled" ? h.value : void 0)));
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
var e9s = (e) => (0, import_chunk_tkg68a1m.Bw)("changed", [`${e.missed} is not the file that was listed`]);
function Li(e, r) {
  let o = new Set(e.listing.files.map((i) => i.path));
  return [...e.listing.files.filter((i) => !Object.hasOwn(r.hashes, i.path)).map((i) => "Among the files to send only since the folder was read: " + i.path), ...Object.keys(r.hashes).filter((i) => !o.has(i)).map((i) => "No longer among the files to send since the folder was read: " + i), ...e.listing.files.filter((i) => Object.hasOwn(r.hashes, i.path) && e.hashes[i.path] !== r.hashes[i.path]).map((i) => `${i.path} is not the file that was listed`)].slice(0, 1);
}
function wi(e, r) {
  let o = e.kind === "ready" ? Li(e, r) : [];
  return o.length === 0 && (e.kind !== "ready" || e.listing.files.length === Object.keys(r.hashes).length) ? e : (0, import_chunk_tkg68a1m.Bw)("changed", o);
}
var D = (e) => e.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replaceAll(/^-|-$/g, "") || "plugin";
function Mi(e) {
  let r = (0, import_chunk_dy7yfx4p.lHt)(D((0, import_path16.basename)(e)));
  return r?.severity === "error" ? [`${r.message} The name comes from the folder: rename it.`] : [];
}
var Ii = (e) => e && (0, import_chunk_tp3c5q2s.Ft)(e, import_chunk_tkg68a1m.Uxa);
var Fi = "0.1.0";
var ki = (e, r) => `${(0, import_chunk_w578pjby._)({ name: D((0, import_path17.basename)(e)), version: Fi, description: Ii(r) }, null, 2)}
`;
var Di = (e, r) => ({ kind: "needs-manifest", root: e, draft: ki(e, r) });
var Ui = (e) => e.flatMap((r) => r.errors.map((o) => `${r.filePath}: ${o.path}: ${(0, import_chunk_sah8dzn4.As)(o.message)}`));
var zi = (e) => ({ name: e.name, version: e.version, description: e.description });
(0, import_chunk_adx6804h.B)();
var Ci = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ name: (0, import_chunk_adx6804h.n)(), version: (0, import_chunk_adx6804h.n)().optional(), description: (0, import_chunk_adx6804h.n)().optional() }));
async function ji(e) {
  let r = await (0, import_chunk_nb21njpa.$5)((0, import_path18.join)(e, import_chunk_zcpqgt0x.Vp)), o = Ci().safeParse((0, import_chunk_0jve1fep.et)(r.kind === "ok" ? r.content : ""));
  if (r.kind === "absent") return "absent";
  return o.success ? zi(o.data) : "unreadable";
}
function Hi(e, r) {
  return e !== void 0 && r !== void 0 ? [[e.path, (0, import_chunk_ccm69jjy.Je)(r)]] : [];
}
async function Yxa(e, r, o) {
  let i = await Promise.all(e.map((0, import_chunk_w71cxznt.Rl)(re, r))), a = e.find((f, u) => i[u] === void 0);
  return a === void 0 ? i.flatMap((f, u) => o(e[u], f)) : { missed: a.path };
}
async function Wi(e, r) {
  let o = await Yxa(r, (i) => Z5s(e, i), Hi);
  return "missed" in o ? o : { hashes: Object.fromEntries(o) };
}
var Xr = (e) => e.files.map((r) => r.path).filter((r) => `/${r}`.endsWith(`/${(0, import_chunk_bzyb60p0.pH)(import_chunk_zcpqgt0x.Vp)}`));
function Qr(e, r) {
  let o = Xr(e);
  if (o.length > 1) return (0, import_chunk_tkg68a1m.Bw)("findings", [`More than one manifest: ${o.join(", ")}`]);
  if (e.files.length > import_chunk_tkg68a1m.G5s) return (0, import_chunk_tkg68a1m.Bw)("too-many-files");
  return r > import_chunk_tkg68a1m.c6o ? (0, import_chunk_tkg68a1m.Bw)("too-large") : void 0;
}
async function Jr(e, r) {
  let o = await ae(e), i = o.files.reduce((u, g) => u + g.bytes, 0), a = Qr(o, i);
  if (a !== void 0) return a;
  let m = await Wi(e, o.files);
  return "missed" in m ? e9s(m) : { kind: "ready", root: e, manifest: r, listing: o, bytes: i, hashes: m.hashes };
}
var Ki = [" ", "	", `
`, '"', "'", "("];
var qi = (e) => e.slice(0, 1 + Math.max(...Ki.map((r) => e.lastIndexOf(r))));
function $i(e, r, o) {
  let i = e.split(r);
  return i.slice(0, -1).map((a) => qi(a) + o).concat(i.at(-1) ?? "").join("");
}
function be(e, r, o) {
  let i = (0, import_path19.dirname)(r.dir), a = (0, import_path19.dirname)(o).replace(/[\\/]$/, "");
  return [`${(0, import_path19.basename)(r.home)}/copy`, `${(0, import_path19.basename)(r.home)}\\copy`].reduce((m, f) => $i(m, f, a), e.replaceAll(i, () => a).replaceAll((0, import_chunk_a0mfj0s8.Gf)(i, i.length), () => a));
}
var Gi = (e, r, o) => e.map((i) => ({ ...i, filePath: be(i.filePath, r, o), errors: i.errors.map((a) => ({ ...a, message: be(a.message, r, o) })) }));
function Vi(e) {
  return e.kind === "ready" && Xr(e.listing).length === 0 ? (0, import_chunk_tkg68a1m.Bw)("unreadable", [(0, import_chunk_bzyb60p0.pH)(import_chunk_zcpqgt0x.Vp)]) : e;
}
async function Yi(e, r, o) {
  let { manifest: i, contents: a } = await (0, import_chunk_a0mfj0s8.aHt)(r.dir, void 0, "unchecked"), m = i?.errors.some((x) => x.code === import_chunk_a0mfj0s8.T6o) ?? true, f = Ui(Gi(m ? a : [i ?? [], a].flat(), r, e)).concat(m ? Mi(e) : []), u = m ? await (0, import_chunk_zcpqgt0x.qin)(r.dir) : i?.fileType === "plugin", g = await ji(r.dir);
  if (!u) return (0, import_chunk_tkg68a1m.Bw)("not-a-plugin");
  if (f.length > 0) return (0, import_chunk_tkg68a1m.Bw)("findings", f);
  if (g === "unreadable") return (0, import_chunk_tkg68a1m.Bw)("unreadable", [(0, import_chunk_bzyb60p0.pH)(import_chunk_zcpqgt0x.Vp)]);
  return g === "absent" ? Di(e, o) : wi(Vi(await Jr(e, g)), r);
}
function Xi(e) {
  let r = (0, import_chunk_bzyb60p0.pH)(import_chunk_zcpqgt0x.Vp);
  return e.leftOut.some((i) => i.path === r) ? (0, import_chunk_tkg68a1m.Bw)("unreadable", [r]) : void 0;
}
async function Qi(e, r) {
  var _stack = [];
  try {
    let o = await ae(e), i = Xi(o) ?? Qr(o, o.files.reduce((u, g) => u + g.bytes, 0));
    if (i !== void 0) return i;
    let a = await Ei(e, o.files);
    if ("missed" in a) return e9s(a);
    let m = (0, import_chunk_7e1w6rv3.ud)(() => Y(a.home));
    const f = __using(_stack, (0, import_chunk_w578pjby.Ct)(m));
    if ((0, import_chunk_w578pjby.c_)()) return await m(), Promise.reject(F());
    try {
      return await Yi(e, a, r).catch((u) => (0, import_chunk_tkg68a1m.Bw)("unreadable", ze(u).map((g) => be(g, a, e))));
    } finally {
      await m();
    }
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
async function Xxa(e, r) {
  let o = await (0, import_promises.realpath)((0, import_path.resolve)((0, import_chunk_18rsj2ts.pe)(), e)).catch(() => {
    return;
  });
  if (!(o !== void 0 && await (0, import_chunk_nb21njpa._G)(o))) return (0, import_chunk_tkg68a1m.Bw)("no-folder", [e]);
  return await (0, import_chunk_nb21njpa.DP)(o, (0, import_path.join)(o, De)) === "refused" ? (0, import_chunk_tkg68a1m.Bw)("unreadable", [De]) : gZn(Qi(o, r));
}
var rn = (e) => ({ path: (0, import_chunk_bzyb60p0.pH)(import_chunk_zcpqgt0x.Vp), bytes: Buffer.byteLength(e.draft), mode: pr });
function tn(e) {
  let r = (0, import_chunk_xcgcdx61.t6e)().safeParse((0, import_chunk_0jve1fep.et)(e.draft));
  return { name: r.data?.name ?? (0, import_path20.basename)(e.root), version: r.data?.version, description: r.data?.description };
}
var sn = (e, r) => ({ files: e.files.concat(r).toSorted(J), leftOut: e.leftOut });
var nn = (e, r, o) => ({ ...e, [r]: (0, import_chunk_ccm69jjy.Je)(o) });
var an = (e, r, o) => ({ ...e, bytes: e.bytes + r.bytes, listing: sn(e.listing, r), hashes: nn(e.hashes, r.path, o.draft) });
async function pn(e) {
  let r = rn(e), o = await Jr(e.root, tn(e));
  return o.kind === "ready" ? an(o, r, e) : o;
}
async function mn(e) {
  return e.kind === "needs-manifest" ? gZn(pn(e)) : e;
}
async function g6o(e, r) {
  let o = await Xxa(e.folder, e.description), i = await mn(o);
  if (i.kind === "refused") return i;
  return i.kind === "ready" ? { wanted: e, plan: i, organization: r, draft: cs(o), withheld: false } : (0, import_chunk_tkg68a1m.Bw)("unreadable");
}
var Jxa = Object.freeze({ nothing: "Nothing was sent.", uploading: "The upload was on its way: look in your uploads on claude.ai, where it may have arrived. Nothing was submitted.", shelved: "The upload had arrived on your own shelf, where only you see it. It was not submitted.", submitting: "The upload had arrived, and its submission was on its way: it may have reached your organization." });
function Wvn(e, r, o) {
  return e.signal.aborted ? (0, import_chunk_tkg68a1m.Bw)("stopped", [Jxa[o]]) : r;
}
function xo(e) {
  return e === "." || e === ".." ? e.replaceAll(".", "%252E") : encodeURIComponent(e).replaceAll(".", "%2E");
}
var ln = (e) => `/api/oauth/organizations/${xo(e.organization.id)}`;
var Se = (e, r) => `${ln(e)}/${r.map(xo).join("/")}`;
var j = (e, r) => ({ method: "get", path: Se(e, r), body: void 0, headers: {}, agreed: e.agreed, bound: "clock", signal: e.signal });
var un = 200;
var dn = 300;
var _Zn = (e) => e.status >= un && e.status < dn;
var cn = 400;
var gn = 405;
var hn = 404;
var bn = 501;
var yn = 422;
var xn = Object.freeze([cn, hn, gn, yn, bn]);
var Rn = 20;
var Sn = 300;
var _n = Object.freeze(["scan", "other"]);
var Pn = (e, r) => [...r.findings, ...[r.message ?? ""].filter((o) => o !== "" && _n.includes(e))].slice(0, Rn).map((o) => (0, import_chunk_7cfjrnwy.ee)(o, Sn));
(0, import_chunk_adx6804h.B)();
var On = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ error: (0, import_chunk_adx6804h.c)({ message: (0, import_chunk_adx6804h.n)().optional(), details: (0, import_chunk_adx6804h.c)({ error_code: (0, import_chunk_adx6804h.n)().optional(), validation_errors: (0, import_chunk_adx6804h.c)({ message: (0, import_chunk_adx6804h.n)().optional(), plugins: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ name: (0, import_chunk_adx6804h.n)().optional(), error: (0, import_chunk_adx6804h.n)().optional() })).optional() }).optional() }).optional() }).optional() }));
function _e(e) {
  let r = On().safeParse(e.data).data?.error, o = r?.details?.validation_errors;
  return { code: r?.details?.error_code, message: r?.message, findings: [o?.message ?? "", ...(o?.plugins ?? []).map((i) => [i.name, i.error].filter(Boolean).join(": "))].filter(Boolean) };
}
function W(e, r) {
  let o = _e(e), i = r.codes[o.code ?? ""] ?? r.statuses[e.status] ?? "other";
  return (0, import_chunk_tkg68a1m.Bw)(i, Pn(i, o));
}
var vn = Object.freeze({});
var An = 12e4;
var En = 15e3;
var Ln = Object.freeze({ get: En, post: An });
function wn(e) {
  return e.bound === "progress" ? { streamUpload: vn } : { timeout: Ln[e.method] };
}
var Tn = (e) => ({ ...e.headers, "anthropic-beta": import_chunk_ephf358x.ff });
var Mn = 4194304;
var jo = (e) => ({ auth: "teleport-org", ...e.agreed && { forPluginsPublish: "agreed" }, headers: Tn(e), ...wn(e), signal: e.signal, maxBodyLength: Buffer.byteLength(e.body ?? ""), maxContentLength: Mn, maxRedirects: 0, validateStatus: () => true });
function In(e) {
  return e.method === "get" ? import_chunk_865at33z.zt.get(e.path, jo(e)) : import_chunk_865at33z.zt.post(e.path, e.body, jo(e));
}
var Ko = Object.freeze({ status: 0, data: void 0 });
function Fn(e, r) {
  return (0, import_chunk_w578pjby.t)(`plugin publish: ${e.method} ${e.path} got no answer: ` + (0, import_chunk_jv7av99m.d)(r), { level: "error" }), Ko;
}
var Nn = Object.freeze({ "data-residency": "third-party", "essential-traffic-only": "traffic-off", "no-auth": "signed-out" });
async function _6o(e) {
  let r = await In(e).catch((i) => Fn(e, i));
  return "status" in r ? { status: r.status, data: r.data } : (0, import_chunk_tkg68a1m.Bw)(Nn[r.reason] ?? "other");
}
var kn = Object.freeze(["plugin_upload_conflict", "plugin_previous_save_scanning", "plugin_upload_busy", "plugin_content_scan_rate_limited", "org_library_submission_conflict", "org_library_submission_source_changed"]);
var Dn = 429;
var Un = 503;
var zn = Object.freeze([Dn, Un]);
var Cn = (e, r) => e.method === "get" && r.status === Ko.status || zn.includes(r.status) || kn.includes(_e(r).code ?? "");
var Bn = 3;
var jn = 2e3;
async function A(e, r = Bn) {
  let o = await _6o(e);
  if (!(r > 0 && !e.signal.aborted && "status" in o && Cn(e, o))) return o;
  return await (0, import_chunk_5appeerh.K)(jn, e.signal), A(e, r - 1);
}
var rt = (e) => [e, ...Object.values(Object(e))].find(Array.isArray) ?? [];
(0, import_chunk_adx6804h.B)();
var ot = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ uuid: (0, import_chunk_adx6804h.n)().optional(), plugin_id: (0, import_chunk_adx6804h.n)().nullish(), plugin_name: (0, import_chunk_adx6804h.n)().nullish(), status: (0, import_chunk_adx6804h.n)().optional(), publish_state: (0, import_chunk_adx6804h.n)().nullish(), updates_published_plugin_id: (0, import_chunk_adx6804h.n)().nullish(), denial_reason: (0, import_chunk_adx6804h.n)().nullish(), content_scan: (0, import_chunk_adx6804h.ie)().optional(), outcome: (0, import_chunk_adx6804h.c)({ published_plugin_id: (0, import_chunk_adx6804h.n)().nullish(), published_marketplace_id: (0, import_chunk_adx6804h.n)().nullish(), failure_reason: (0, import_chunk_adx6804h.n)().nullish() }).nullish() }));
var Hn = (e) => rt(e).flatMap((r) => [ot().safeParse(r)].flatMap((o) => o.success ? [o.data] : []));
var Wn = Object.freeze({ oauth_scope_insufficient: "sign-in-scope", action_verification_refused: "needs-browser", plugin_version_scan_pending: "scan-pending", plugin_version_scan_failed: "scan", org_library_submission_already_pending: "already-pending", org_library_submission_installs_for_members: "installs-for-members", org_library_submission_nothing_to_publish: "nothing-new", org_library_submission_publish_in_progress: "in-progress", org_library_submission_update_needs_admin: "needs-admin", org_library_submission_update_needs_org_settings: "needs-org-settings", org_library_submission_name_taken: "name-conflict", org_library_submission_library_full: "library-full", org_library_submission_update_name_mismatch: "busy", org_library_submission_update_target_deleted: "busy", org_library_submission_install_preference_requires_review: "busy", org_library_submission_conflict: "busy", org_library_submission_source_changed: "busy", plugin_upload_busy: "busy", plugin_content_scan_rate_limited: "busy", legal_attestation_required: "legal" });
var Kn = Object.freeze({ 0: "busy", 401: "signed-out", 404: "publishing-off", 429: "busy", 503: "busy" });
var nt = Object.freeze({ codes: Wn, statuses: Kn });
async function t9s(e) {
  let r = await A(j(e, ["library_submissions", "me"]));
  if ("kind" in r) return r;
  if (xn.includes(r.status)) return (0, import_chunk_tkg68a1m.Bw)("not-served");
  return _Zn(r) ? Hn(r.data) : W(r, nt);
}
var Ee = (e, r) => (0, import_chunk_tkg68a1m.Bw)(e.refusal.kind, e.refusal.details.concat(`See or remove the upload: ${(0, import_chunk_tkg68a1m.z5s)(r.id)}`));
var Gn = Object.freeze({ plugin_version_scan_pending: "scan-pending", plugin_version_scan_failed: "scan", org_library_submission_publish_not_started: "busy", org_library_submission_publish_timed_out: "busy", org_library_submission_publisher_unavailable: "busy" });
var Vn = "claudeai-organization-library";
(0, import_chunk_adx6804h.B)();
var Yn = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ name: (0, import_chunk_adx6804h.n)().optional(), marketplace_name: (0, import_chunk_adx6804h.n)().optional() }));
function Xn(e, r) {
  let o = Yn().safeParse(e).data, i = (0, import_chunk_bzyb60p0.hli)(o?.marketplace_name ?? "") ?? Vn;
  return `${o?.name ?? r}@${i}`;
}
async function Qn(e, r, o) {
  let i = await _6o(j(e, ["plugins", r]));
  return Xn("status" in i ? i.data : void 0, o);
}
var Jn = 64;
var y6o = (e) => D(D(e.name).slice(0, Jn));
async function Zn(e, r, o, i) {
  let a = await Qn(e, r, y6o(e.manifest));
  return { kind: "published", manifest: e.manifest, isUnscanned: i, verdict: o.verdict, install: a, link: (0, import_chunk_tkg68a1m.z5s)(r) };
}
var ea = (e, r, o, i) => ({ kind: r, manifest: e.manifest, isUnscanned: i, verdict: o.verdict, id: o.id });
async function ra(e, r, o) {
  let i = r.outcome?.published_plugin_id ?? void 0, a = r.publish_state === "completed" && i !== void 0, m = r.status === "approved" && r.publish_state === "failed", f = r.status === "approved";
  if (m) return (0, import_chunk_tkg68a1m.Bw)(Gn[r.outcome?.failure_reason ?? ""] ?? "other");
  let u = f && a, g = o.scan === "none" && r.content_scan === null;
  return u ? Zn(e, i, o, g) : ea(e, f ? "publishing" : "in-review", o, g);
}
var yt = (e, r, o) => e.find((i) => i.plugin_id === r.id && i.status === o);
var oa = (e) => e === void 0 ? "available" : void 0;
var ta = (e) => ({ kind: "plugin", id: e.id });
var sa = (e, r) => ({ source: ta(e), proposed_install_preference: oa(yt(r, e, "approved")), predecessor_uuid: yt(r, e, "denied")?.uuid });
var ia = Object.freeze({ "Content-Type": "application/json" });
var Ot = (e, r, o) => ({ method: "post", path: Se(e, r), body: (0, import_chunk_w578pjby._)(o), headers: ia, agreed: e.agreed, bound: "clock", signal: e.signal });
async function na(e, r) {
  let o = await A(Ot(e, ["library_submissions"], r));
  if ("kind" in o) return o;
  return _Zn(o) ? ot().safeParse(o.data).data ?? (0, import_chunk_tkg68a1m.Bw)("other") : W(o, nt);
}
function aa(e, r) {
  if (e.signal.aborted || r.scan === "failed") return Ee(Wvn(e, (0, import_chunk_tkg68a1m.Bw)("scan", (0, import_chunk_tkg68a1m.jxa)(r)), "shelved"), r);
  if (r.isAwaitingCurrent) return Ee((0, import_chunk_tkg68a1m.Bw)("not-current"), r);
  return r.scan === "processing" ? { kind: "on-shelf", manifest: e.manifest, id: r.id } : void 0;
}
async function _Gl(e, r, o) {
  let i = aa(e, r);
  if (i !== void 0) return i;
  let a = await na(e, sa(r, o));
  return "kind" in a ? Ee(Wvn(e, a, "submitting"), r) : ra(e, a, r);
}
var Et = "manual";
var ma = Object.freeze({ name: "My Uploads", source: Et, source_url: "" });
(0, import_chunk_adx6804h.B)();
var fa = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ id: (0, import_chunk_adx6804h.n)().min(1), source: (0, import_chunk_adx6804h.n)().optional() }));
var la = (e) => [e, ...rt(e)].map((r) => fa().safeParse(r).data).find((r) => r?.source === Et)?.id;
var ua = Object.freeze({ oauth_scope_insufficient: "sign-in-scope", action_verification_refused: "needs-browser", oauth_organization_mismatch: "other", oauth_workspace_not_default: "other", plugin_upload_already_exists: "exists", plugin_upload_validation_failed: "invalid", plugin_upload_limit_reached: "shelf-full", plugin_previous_save_failed_scan: "scan", plugin_upload_conflict: "busy", plugin_previous_save_scanning: "busy", plugin_upload_busy: "busy", plugin_content_scan_rate_limited: "busy", legal_attestation_required: "legal" });
var da = Object.freeze({ 0: "busy", 401: "signed-out", 403: "creation-off", 413: "too-large", 429: "busy", 503: "busy" });
var Nt = Object.freeze({ codes: ua, statuses: da });
async function kt(e, r) {
  let o = await A(e);
  if ("kind" in o) return o;
  return _Zn(o) ? la(o.data) ?? r() : W(o, Nt);
}
var ca = (e) => kt(Ot(e, ["marketplaces", "create-account-marketplace"], ma), async () => (0, import_chunk_tkg68a1m.Bw)("other"));
var ga = 60;
var ha = (e) => ({ "Content-Type": `multipart/form-data; boundary=${e.boundary}` });
var yGl = (e, r, o) => ({ ...o, archive: e, manifest: r.manifest });
var ya = Object.freeze(["pass", "warn", "unknown"]);
function xa(e, r, o) {
  let i = o ? e.content_scan === null : e.content_scan == null, a = r === false && i, m = Boolean(e.pending_version) && e.served !== true, f = ya.includes(e.content_scan?.combined_assessment ?? "");
  return (0, import_chunk_h7pf2vgc.p8s)([e.content_scan?.status === "errored" && "failed", !a && e.content_scan?.status !== "completed" && "processing", e.served === false && "processing", m && "processing", a && "none", !f && "failed"]) ?? "passed";
}
var Ra = (e, r, o) => ({ id: e, name: r.name, version: r.version, scan: xa(r, r.scan_requested ?? o?.isScanAsked, o !== void 0), isScanAsked: r.scan_requested ?? o?.isScanAsked, verdict: r.content_scan?.combined_assessment ?? r.content_scan?.status, isAwaitingCurrent: r.awaiting_make_current === true || o?.isAwaitingCurrent === true });
(0, import_chunk_adx6804h.B)();
var Sa = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ id: (0, import_chunk_adx6804h.n)().min(1).optional(), name: (0, import_chunk_adx6804h.n)().optional(), version: (0, import_chunk_adx6804h.n)().optional(), marketplace_id: (0, import_chunk_adx6804h.n)().optional(), served: (0, import_chunk_adx6804h.P)().optional(), pending_version: (0, import_chunk_adx6804h.n)().nullish(), scan_requested: (0, import_chunk_adx6804h.P)().nullish(), awaiting_make_current: (0, import_chunk_adx6804h.ie)().optional(), content_scan: (0, import_chunk_adx6804h.c)({ status: (0, import_chunk_adx6804h.n)().optional(), combined_assessment: (0, import_chunk_adx6804h.n)().nullish() }).nullish() }));
function $t(e, r) {
  let o = Sa().safeParse(e).data ?? {}, i = r?.id ?? o.id;
  return i !== void 0 ? Ra(i, o, r) : void 0;
}
var _a = (e, r, o) => `${Se(r, ["marketplaces", e, "plugins", "account-upload"])}?overwrite=${String(o === "replace")}`;
function Pa(e, r) {
  let o = y6o(r);
  return o !== r.name ? `\r
--${e}\r
Content-Disposition: form-data; name="new_name"\r
\r
` + o : "";
}
function va(e, r) {
  let o = `----PluginPublish${(0, import_crypto.randomUUID)()}`, i = y6o(r);
  return { boundary: o, body: Buffer.concat([Buffer.from(`--${o}\r
Content-Disposition: form-data; name="file"; filename="${i}.zip"\r
Content-Type: application/zip\r
\r
`), e, Buffer.from(Pa(o, r) + `\r
--${o}--\r
`)]) };
}
function Aa(e, r, o) {
  let i = va(r.archive, r.manifest);
  return { method: "post", path: _a(e, r, o), body: i.body, headers: ha(i), agreed: r.agreed, bound: "progress", signal: r.signal };
}
async function Qt(e, r, o) {
  let i = await A(Aa(e, r, o));
  if ("kind" in i) return i;
  if (_e(i).code === "plugin_upload_already_exists") return "exists";
  return _Zn(i) ? $t(i.data, void 0) ?? (0, import_chunk_tkg68a1m.Bw)("other") : W(i, Nt);
}
async function Ea(e, r) {
  let o = await Qt(e, r, "replace");
  return o === "exists" ? (0, import_chunk_tkg68a1m.Bw)("busy") : o;
}
var La = 5e3;
async function wa(e, r) {
  let o = await _6o(j(e, ["plugins", r.id, "scan-status"]));
  return "status" in o && _Zn(o) ? $t(o.data, r) ?? r : r;
}
var Ta = 3e5;
async function Qxa(e, r, o = { left: ga, until: Date.now() + Ta }) {
  if (!(r.scan === "processing" && !r.isAwaitingCurrent && !e.signal.aborted && o.left > 0 && Date.now() < o.until)) return r;
  return await (0, import_chunk_5appeerh.K)(La, e.signal), Qxa(e, await wa(e, r), { left: o.left - 1, until: o.until });
}
var SGl = (e) => kt(j(e, ["marketplaces", "list-account-marketplaces"]), () => ca(e));
async function bGl(e, r) {
  let o = await Qt(e, r, "new");
  if (o !== "exists") return o;
  return r.mode === "replace" ? Ea(e, r) : (0, import_chunk_tkg68a1m.Bw)("exists");
}
async function ka() {
  let e = (0, import_chunk_mzmcvr6c.ht)((0, import_chunk_h7pf2vgc.gKr)() ? import_chunk_c203g5kd.s.CLAUDE_CODE_ORGANIZATION_UUID : await (0, import_chunk_865at33z.$fn)()), r = (0, import_chunk_865at33z.Dc)(), o = r?.organizationUuid === e;
  if (e === null) return;
  return { id: e, name: o && r?.organizationName || void 0 };
}
async function n9s(e) {
  return e !== void 0 ? void 0 : ka();
}
var r9s = () => (0, import_chunk_h7pf2vgc.gKr)() ? "no-organization" : (0, import_chunk_h7pf2vgc.jPa)();
var S6o = (e) => (0, import_chunk_ccm69jjy.Je)((0, import_chunk_w578pjby._)([e.plan.root, e.wanted.destination, e.organization.id, (0, import_chunk_tkg68a1m.u6o)(e.plan.manifest), e.wanted.mode, e.plan.listing.files.map((r) => [r.path, r.bytes, r.mode, e.plan.hashes[r.path]])]));
function o9s(e, r) {
  return e.refusal.kind === "unreadable" && (0, import_chunk_p1ewvgeh.hYe)(r.permissions()) ? { ...e, refusal: { ...e.refusal, details: [] } } : e;
}
var Ba = (e, r, o) => r.files.map((i) => i.path).filter((i) => (0, import_chunk_p1ewvgeh._j)((0, import_path21.join)(e[0] ?? "", i), o.permissions(), e.map((a) => (0, import_path21.join)(a, i))));
function Zxa(e, r, o) {
  return Ba(e, r, o).length === 0 ? void 0 : (0, import_chunk_tkg68a1m.Bw)("read-denied");
}
var ja = ["bare-deny", "path-deny"];
var Ha = (e, r) => ja.includes((0, import_chunk_p1ewvgeh.k2e)([e], r.permissions(), { refuseAutomounterShapes: true }).layer);
async function s9s(e, r) {
  let o = (0, import_path22.resolve)((0, import_chunk_18rsj2ts.pe)(), e.path);
  if (Ha(o, r)) return (0, import_chunk_tkg68a1m.Bw)("read-denied");
  if (!(0, import_chunk_p1ewvgeh.hYe)(r.permissions())) return;
  let i = await (0, import_promises12.realpath)(o).catch(() => o), a = await gZn(ae(i));
  return "kind" in a ? a : Zxa([o, i], a, r);
}
var ps = (e, r, o) => (0, import_chunk_p1ewvgeh.b2e)(o.tool, { path: e }, o.permissions(), r) !== null;
function Ga(e, r) {
  if (ps(e.path, [e.path], r)) return "network-path";
  let o = (0, import_path23.resolve)((0, import_chunk_18rsj2ts.pe)(), e.path), i = (0, import_chunk_w578pjby.gJ)(o);
  return ps(o, i.paths, r) ? "network-path" : i.vetted ? void 0 : "unreadable";
}
var i9s = (e, r) => (0, import_chunk_d4d5q2mn.yKr)() ? Ga(e, r) : "flag-off";
var b6o = (e) => (0, import_chunk_ccm69jjy.Je)((0, import_chunk_w578pjby._)((0, import_chunk_xcgcdx61.sF)(e)));
var a9s = (e) => b6o((0, import_chunk_tkg68a1m.Bxa)().safeParse(e).data ?? e);
var l9s = (e) => ({ folder: e.path, destination: e.destination ?? "organization", description: e.description, mode: e.replace === true ? "replace" : "new" });
var Qa = (e, r) => (0, import_chunk_p1ewvgeh.jP)(import_chunk_bzyb60p0.YI, { file_path: e, content: "" }, r).behavior === "deny" || (0, import_chunk_p1ewvgeh._j)(e, r);
var Ja = Object.freeze([import_chunk_rb36kwbn.Dt, import_chunk_rb36kwbn.lt].map((e) => Object.freeze({ name: e, mcpInfo: void 0, familyParentToolName: void 0, aliasSkillToolNames: void 0, packagingAliasSkillToolNames: void 0 })));
function d9s(e, r) {
  let o = r.permissions(), i = (0, import_chunk_ht27b0vz.Vs)(o).filter((a) => !import_chunk_ht27b0vz.Ple.includes(a.source));
  return Ja.some((a) => (0, import_chunk_ht27b0vz.Tr)(o, a, i) !== null) || (0, import_chunk_4smdap7r.M)(e).some((a) => Qa((0, import_path24.join)(a, import_chunk_zcpqgt0x.Vp), o));
}
