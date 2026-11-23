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
var chunk_hw7myrmg_exports = {};
__export(chunk_hw7myrmg_exports, {
  sTa: () => sTa,
  wzr: () => wzr
});
module.exports = __toCommonJS(chunk_hw7myrmg_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w82axegn = require("/$bunfs/root/chunk-w82axegn.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_szvrpg0x = require("/$bunfs/root/chunk-szvrpg0x.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_s7eqtcpb = require("/$bunfs/root/chunk-s7eqtcpb.js");
var import_chunk_e15pxvhz = require("/$bunfs/root/chunk-e15pxvhz.js");
var import_chunk_dkc86g0t = require("/$bunfs/root/chunk-dkc86g0t.js");
var import_chunk_pqb914sj = require("/$bunfs/root/chunk-pqb914sj.js");
var import_chunk_ztgy6ctb = require("/$bunfs/root/chunk-ztgy6ctb.js");
var import_chunk_cdgrg7dd = require("/$bunfs/root/chunk-cdgrg7dd.js");
var import_chunk_p3h9bq2s = require("/$bunfs/root/chunk-p3h9bq2s.js");
var import_chunk_pf5ex2vv = require("/$bunfs/root/chunk-pf5ex2vv.js");
var import_chunk_ayyyz8kh = require("/$bunfs/root/chunk-ayyyz8kh.js");
var import_chunk_g9ztbtfd = require("/$bunfs/root/chunk-g9ztbtfd.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_os = require("os");
var import_path = require("path");
var import_path2 = require("path");
function R(e) {
  let n = (0, import_chunk_s7eqtcpb.eV)([e]);
  return (0, import_chunk_4smdap7r.M)((0, import_chunk_s7eqtcpb.eV)((0, import_chunk_p1ewvgeh.fw)()).flatMap((r) => n.flatMap((d) => {
    if ((0, import_chunk_g9ztbtfd.ti)(r, d, true)) return [""];
    return (0, import_chunk_g9ztbtfd.ti)(d, r, false) ? [`${(0, import_path2.relative)(d, r)}/`] : [];
  })));
}
var Q = "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391", V = "4b825dc642cb6eb9a060e54bf8d69288fbee4904", Z = 1e4, ee = 256, te = 32, oe = new RegExp(`^(?:[^/]*/){${te + 1}}`), ie = [...import_chunk_w5s307zm.y0r, "head", ...import_chunk_w5s307zm.i0s.map((e) => e.toLowerCase())], F = "[0-9a-fA-F]{8}(?:-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}", ne = new RegExp(`^((?:[^]*\\/)?)projects\\/[^/]+\\/${F}\\.jsonl$`), re = new RegExp(`^${F}\\.jsonl$`), I = 256, N = ["EMFILE", "ENFILE", "ENOMEM"], se = /[^\x20-\x7e]|["\\]/, ae = 2e7, fe = 1e8, v = [".gitignore", ".gitattributes"], x = ["node_modules", "site-packages", "__pycache__"], le = ["/.*", ...v.map((e) => `!/${e}`), ".*/", ...x.map((e) => `${e}/`), ""].join(`
`);
function ce(e) {
  let n = e.split("/").slice(0, -1);
  return e.startsWith(".") && !v.includes(e) || n.some((r) => r.startsWith(".") || x.includes(r));
}
var de = `[core]
	repositoryformatversion = 0
	bare = false
	excludesFile = ${import_chunk_dkc86g0t.zhr}
	attributesFile = ${import_chunk_dkc86g0t.zhr}
`, me = { GIT_AUTHOR_NAME: "Claude Code", GIT_AUTHOR_EMAIL: "noreply@anthropic.com", GIT_COMMITTER_NAME: "Claude Code", GIT_COMMITTER_EMAIL: "noreply@anthropic.com" };
function P() {
  return false;
}
function wzr(e) {
  if ((0, import_chunk_ztgy6ctb.rQn)()) return { listed: null, noDiffReason: "no-repository" };
  let n = (0, import_chunk_e15pxvhz.g5e)();
  if ((0, import_chunk_w5s307zm.ol)(n) !== null) return { listed: null, noDiffReason: "diff-failed" };
  try {
    return P() ? { listed: n } : { listed: null, noDiffReason: "no-repository" };
  } catch {
    if ((0, import_chunk_w578pjby.t)("workspace diff (launch folder not in a git repository): reading the settings that switch this listing on threw an error, so no listing was made", { level: "warn" }), e !== void 0 && import_chunk_szvrpg0x.iO.of(e).claim("workspace_diff_no_repository:failed")) (0, import_chunk_cqa9hrgx.m)("workspace_diff_no_repository", "failed");
    return { listed: null, noDiffReason: "diff-failed" };
  }
}
async function sTa(e, n, r, d) {
  let f, h = false, c = { diff: null, noDiffReason: "diff-failed" };
  try {
    if (!P()) return null;
    f = await (0, import_promises.mkdtemp)((0, import_path.join)((0, import_os.tmpdir)(), "ccdiff-empty-"));
    for (let S of ["objects", (0, import_path.join)("refs", "heads"), "info"]) await (0, import_promises.mkdir)((0, import_path.join)(f, S), { recursive: true });
    let p = (0, import_chunk_cdgrg7dd.k5o)(f, f, r);
    for (let [S, o] of [["HEAD", `ref: refs/heads/main
`], ["config", de], [(0, import_path.join)("info", "exclude"), le]]) await (0, import_promises.writeFile)((0, import_path.join)(f, S), o, { flag: "wx" });
    if (!await (0, import_chunk_cdgrg7dd.w5o)(r, p, void 0)) {
      if ((0, import_chunk_w578pjby.t)("workspace diff (launch folder not in a git repository): files not listed: this needs git 2.32 or later, and git here is older or its version could not be read", { level: "warn" }), import_chunk_szvrpg0x.iO.of(e).claim("workspace_diff_no_repository:old_or_unknown_git")) (0, import_chunk_cqa9hrgx.m)("workspace_diff_no_repository", "old_or_unknown_git");
      return null;
    }
    let y = await pe(p, r, f);
    if (y === null) return null;
    h = y.launchDirLeftOut, await ue(p, r, f, y.files, n), c = await d(p);
  } catch {
    (0, import_chunk_w578pjby.t)("workspace diff (launch folder not in a git repository): a step failed; its error is not logged because it can contain file names", { level: "warn" });
  } finally {
    if (f !== void 0) {
      let p = (0, import_chunk_w5s307zm.Ju)().gitDirByCwd, y = (0, import_path.resolve)(r);
      if (p.get(y) === null) p.delete(y);
      await (0, import_promises.rm)(f, { recursive: true, force: true }).catch(() => {
        return;
      });
    }
  }
  let E = c.diff === null ? "failed" : h ? "launch_directory_left_out" : "ok";
  if (import_chunk_szvrpg0x.iO.of(e).claim(`workspace_diff_no_repository:${E}`)) if (E === "ok") (0, import_chunk_cqa9hrgx.u)("workspace_diff_no_repository");
  else if (E === "failed") (0, import_chunk_cqa9hrgx.m)("workspace_diff_no_repository", E);
  else (0, import_chunk_cqa9hrgx.l)("workspace_diff_no_repository", E);
  return c;
}
async function pe(e, n, r) {
  let f = (await k(e, n, ["ls-files", "-z", "--others", "--exclude-standard"])).split("\0").filter((o) => o !== "" && !oe.test(o) && !ce(o)), h = f.filter((o) => !o.endsWith("/"));
  if (f.some((o) => /^[^/]+\/$/.test(o)) || h.length > Z) return null;
  let c = /* @__PURE__ */ new Set(), E = /* @__PURE__ */ new Set([""]), p = performance.now();
  for (let o of h) {
    let s = o.lastIndexOf("/");
    if (import_chunk_w5s307zm.i0s.includes(o.slice(s + 1))) c.add(o.slice(0, s + 1));
    let a = ne.exec(o)?.[1];
    if (a !== void 0) c.add(a);
    for (let i = o.lastIndexOf("/"); i > 0; i = o.lastIndexOf("/", i - 1)) {
      let O = o.slice(0, i + 1);
      if (E.has(O)) break;
      E.add(O);
    }
    if (performance.now() - p >= 10) await (0, import_chunk_ayyyz8kh.Kd)(), p = performance.now();
  }
  let y = new Set(h);
  for (let o of (0, import_chunk_pf5ex2vv.fnt)(Array.from(E), ee)) await Promise.all(o.map(async (s) => {
    if (await (0, import_chunk_w5s307zm.wUl)((0, import_path.join)(n, s))) {
      c.add(s);
      return;
    }
    let a = (0, import_path.join)(n, s, "projects"), i, O = [];
    if (y.has(`${s}projects`)) {
      if (i = await (0, import_promises.lstat)(a).then((_) => _.isFile() ? void 0 : _.isSymbolicLink() ? "an entry named projects is a link, which is not followed" : "an entry named projects that git listed as a file is now neither a file nor a link", (_) => {
        if ((0, import_chunk_jv7av99m.kn)(_)) return;
        let T = (0, import_chunk_jv7av99m.w)(_) ?? "no error code";
        if (N.includes(T)) throw _;
        return `an entry named projects that git listed could not be looked at (${T})`;
      }), i === void 0) return;
    } else {
      let _ = await A(a);
      if (typeof _ === "string") i = `a folder named projects could not be read (${_})`;
      else if (_.some((T) => T.isSymbolicLink())) i = "a folder named projects holds a link, which is not followed";
      else if (O = _.filter((T) => !T.isFile()), O.length > I) i = `a folder named projects holds more than ${I} entries besides its files`;
    }
    let D = false;
    for (let _ of i === void 0 ? O : []) {
      let T = await A((0, import_path.join)(a, _.name));
      if (typeof T === "string") {
        i = `a folder inside a folder named projects could not be read (${T})`;
        break;
      }
      if (T.some((j) => re.test(j.name))) {
        D = true;
        break;
      }
    }
    if (i !== void 0) (0, import_chunk_w578pjby.t)(`workspace diff (launch folder not in a git repository): ${i}, so the folder that holds projects is left out of the listing in case it is a copy of a Claude Code config folder`, { level: "warn" });
    if (i !== void 0 || D) c.add(s);
  }));
  for (let o of R(n)) c.add(o);
  if (c.size === 0) return { files: h, launchDirLeftOut: false };
  await (0, import_promises.appendFile)((0, import_path.join)(r, "info", "exclude"), Array.from(c, G).join(""));
  let S = c.has("");
  return { launchDirLeftOut: S, files: S ? [] : h.filter((o) => !Array.from(o.matchAll(/\//g), (s) => o.slice(0, s.index + 1)).some((s) => c.has(s))) };
}
async function ue(e, n, r, d, f) {
  let h = (await k({ ...e, env: { ...e.env, ...me } }, n, ["commit-tree", V, "-m", "empty"])).trim();
  await (0, import_promises.writeFile)((0, import_path.join)(r, "refs", "heads", "main"), `${h}
`, { flag: "wx" });
  let c = (0, import_chunk_f9x2f6cx.X6e)(), E = await Promise.all(d.map(async (s) => {
    let a = (0, import_path.join)(n, s), i = await (0, import_promises.lstat)(a).catch(() => null);
    if (i !== null && Math.max(i.mtimeMs, i.ctimeMs) < c) return "untouched";
    if (!i?.isFile() || i.nlink !== 1 || i.size > ae) return null;
    return (0, import_promises.access)(a, import_fs.constants.R_OK).then(() => i.size, () => null);
  }));
  await (0, import_promises.appendFile)((0, import_path.join)(r, "info", "exclude"), d.filter((s, a) => E[a] === "untouched" && se.test(s)).map(G).join(""));
  let p = fe, y = [], S = (0, import_chunk_p3h9bq2s.kzr)(n), o = performance.now();
  for (let [s, a] of d.entries()) {
    let i = E[s];
    if (typeof i !== "number" || i > p) continue;
    if (performance.now() - o >= 10) await (0, import_chunk_ayyyz8kh.Kd)(), o = performance.now();
    let O = (0, import_path.join)(n, a);
    if (!(0, import_chunk_w82axegn.E9e)((0, import_path.basename)(a)).some((D) => ie.includes(D)) && !(0, import_chunk_w82axegn.c0)(a) && !(0, import_chunk_w82axegn.wG)(a) && !(0, import_chunk_w82axegn.rsn)(a) && !S(a) && (0, import_chunk_pqb914sj.R9e)(O, f).allowed && (0, import_chunk_p1ewvgeh.Ia)(O, f, "read", "ask") === null) p -= i, y.push(a);
  }
  if (y.length > 0) await k(e, n, ["update-index", "-z", "--index-info"], y.map((s) => `100644 ${Q} 0	${s}\0`).join(""));
}
async function k(e, n, r, d) {
  let { code: f, stdout: h, timedOut: c } = await (0, import_chunk_7fsmgfxx.kt)((0, import_chunk_w5s307zm.Ht)(), [...import_chunk_gd77dyw4.Nn, ...r], { ...e, cwd: n, ...d === void 0 ? { stdin: "ignore" } : { input: d }, timeout: import_chunk_e15pxvhz.Iq, preserveOutputOnError: false, maxBuffer: 5e7 });
  if (f === 0) return h;
  throw (0, import_chunk_w578pjby.t)(`workspace diff (launch folder not in a git repository): git ${r[0]} ${c ? `timed out after ${import_chunk_e15pxvhz.Iq} ms` : `exited with code ${f}`}`, { level: "warn" }), Error("a git step failed");
}
function G(e) {
  if (e.includes(`
`)) return "";
  return `/${e.replace(/[\\*?[]/g, "\\$&").replace(/ +$/, (r) => r.replaceAll(" ", "\\ ")).replaceAll("\r", "[\r]") || "*"}
`;
}
function A(e) {
  return (0, import_promises.readdir)(e, { withFileTypes: true }).catch((n) => {
    if ((0, import_chunk_jv7av99m.kn)(n)) return [];
    let r = (0, import_chunk_jv7av99m.w)(n) ?? "no error code";
    if (N.includes(r)) throw n;
    return r;
  });
}
