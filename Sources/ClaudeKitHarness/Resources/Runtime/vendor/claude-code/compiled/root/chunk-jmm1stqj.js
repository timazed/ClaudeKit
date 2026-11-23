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
var chunk_jmm1stqj_exports = {};
__export(chunk_jmm1stqj_exports, {
  $Gi: () => $Gi,
  BGi: () => BGi,
  FGi: () => FGi,
  ITl: () => ITl,
  MLe: () => MLe,
  UGi: () => UGi,
  _Gt: () => _Gt,
  yed: () => yed
});
module.exports = __toCommonJS(chunk_jmm1stqj_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_cvbctnmz = require("/$bunfs/root/chunk-cvbctnmz.js");
var import_chunk_7mk0bxzp = require("/$bunfs/root/chunk-7mk0bxzp.js");
var MLe = "claude-cli";
function E(e, { allowNewlineAndTab: r = false } = {}) {
  for (let t = 0; t < e.length; t++) {
    let i = e.charCodeAt(t);
    if (i <= 31 || i >= 127 && i <= 159) {
      if (r && (i === 10 || i === 9)) continue;
      return true;
    }
  }
  return false;
}
var I = /^[\w.-]+\/[\w.-]+$/, g = 5e3, w = 4096, y = /^[A-Za-z0-9][A-Za-z0-9._-]{0,99}$/, O = /^(?:https:\/\/\w[\w.-]*(?::\d{1,5})?(?:\/[\w.~:/+-]*)?|\w[\w-]{0,63}@\w[\w.-]*:[\w.~:/+-]+)$/, L = /^\w[\w./-]{0,127}$/, k = 256, R = import_chunk_7mk0bxzp.HLe.repo;
function FGi(e, r = import_chunk_w578pjby.Cv) {
  if ((0, import_chunk_z6pfqf6e.$r)(e) || (0, import_chunk_z6pfqf6e.KS)(e)) throw Error(`Invalid cwd in deep link: UNC / network paths are not supported, got "${e}"`);
  if ((0, import_chunk_z6pfqf6e.pg)(e)) throw new import_chunk_jv7av99m.A(`Invalid cwd in deep link: parent-directory segments are not supported, got "${e}"`, "Invalid cwd in deep link: parent-directory segments are not supported");
  if (!e.startsWith("/") && !/^[a-zA-Z]:[/\\]/.test(e)) throw Error(`Invalid cwd in deep link: must be an absolute path, got "${e}"`);
  if (E(e)) throw Error("Deep link cwd contains disallowed control characters");
  if (new RegExp(`(?![\\u200C\\u200D\\uFE00-\\uFE0F\\u{E0100}-\\u{E01EF}])[${import_chunk_kx2fp6pc.V6e}\\u2028\\u2029\\u2800]`, "u").test(e)) throw Error("Deep link cwd contains invisible or bidirectional control characters");
  if (e.length > w) throw Error(`Deep link cwd exceeds ${w} characters (got ${e.length})`);
  if ((0, import_chunk_w578pjby.ig)(r, e, (0, import_chunk_w578pjby.sy)()) !== void 0) throw new import_chunk_jv7av99m.A(`Invalid cwd in deep link: the path resolves through a network link, or through a folder or link that could not be checked, got "${e}"`, "Invalid cwd in deep link: the path resolves through a network link or could not be checked");
}
function $Gi(e) {
  let r = (0, import_chunk_kx2fp6pc.N4t)(e).replace(/\r\n?/g, `
`);
  if (E(r, { allowNewlineAndTab: true })) throw Error("Deep link query contains disallowed control characters");
  if (r.length > g) throw Error(`Deep link query exceeds ${g} characters (got ${r.length})`);
  return r;
}
function UGi(e) {
  if (!y.test(e)) throw Error('Invalid plugin in deep link: expected a plugin name of ASCII letters, digits, ".", "_" and "-" (at most 100 characters)');
}
function _Gt(e) {
  if (e.length > k) throw new import_chunk_jv7av99m.A(`Deep link marketplace exceeds ${k} characters (got ${e.length})`, "Deep link marketplace exceeds the length limit");
  let r = e.indexOf("#"), t = r === -1 ? e : e.slice(0, r), i = r === -1 ? void 0 : e.slice(r + 1), o = t.indexOf("@");
  if (i === void 0 && o !== -1 && !t.includes(":")) i = t.slice(o + 1), t = t.slice(0, o);
  if (t.includes("%")) throw Error("Invalid marketplace in deep link: percent-encoded characters are not allowed in the source");
  if (!import_chunk_xcgcdx61.nqn.test(t) && !O.test(t)) throw Error('Invalid marketplace in deep link: expected a GitHub "owner/repo", an https:// URL, or a git SSH URL like git@host:owner/repo.git');
  if (/(?:^|[/:])\.\.?(?=[/:]|$)/.test(t) || t.replace(/^https:\/\//, "").includes("//")) throw Error('Invalid marketplace in deep link: ".", ".." and empty path segments are not allowed');
  if (i !== void 0 && !L.test(i)) throw Error('Invalid marketplace in deep link: the git ref after "#" or "@" may only contain letters, digits, ".", "_", "-" and "/"');
  if (i !== void 0 && (0, import_chunk_xcgcdx61.Ugn)(t)) throw Error("Invalid marketplace in deep link: an Anthropic marketplace can't be pinned to a git ref");
}
function ITl(e) {
  let r = e.startsWith(`${MLe}://`) ? e : e.startsWith(`${MLe}:`) ? e.replace(`${MLe}:`, `${MLe}://`) : null;
  if (!r) throw Error(`Invalid deep link: expected ${MLe}:// scheme, got "${e}"`);
  let t;
  try {
    t = new URL(r);
  } catch {
    throw Error(`Invalid deep link URL: "${e}"`);
  }
  if (t.hostname === "install-plugin") {
    if (t.hash) throw Error('Invalid deep link: install-plugin has a raw "#"; encode a marketplace ref as %23 (marketplace=owner/repo%23v1)');
    let d = t.searchParams.get("plugin");
    if (!d) throw Error("Invalid deep link: install-plugin requires a plugin parameter");
    UGi(d);
    let a = t.searchParams.get("marketplace") ?? R;
    return _Gt(a), { action: "install-plugin", plugin: d, marketplace: a };
  }
  if (t.hostname !== "open") throw Error(`Unknown deep link action: "${t.hostname}"`);
  let i = t.searchParams.get("cwd") ?? void 0, o = t.searchParams.get("repo") ?? void 0, n = t.searchParams.get("q");
  if (i) FGi(i);
  if (o && !I.test(o)) throw Error(`Invalid repo in deep link: expected "owner/repo", got "${o}"`);
  let s;
  if (n && n.trim().length > 0) s = $Gi(n.trim());
  return { action: "open", query: s, cwd: i, repo: o };
}
var _ = 100, x = /^[0-9a-f]{40}$/i;
async function yed(e, r) {
  {
    let t = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
    for (let n of e) {
      let s = n.source === "url" ? void 0 : n.ref, d = n.source === "github" ? `${n.repo}${s === void 0 ? "" : `@${s}`}` : `${n.url}${s === void 0 ? "" : `#${s}`}`, a;
      if (n.credentialKind === "credentialHelper") a = "needing a command to get a credential";
      else if (n.credentialKind === "inferenceCredential") a = "needing the credential for model requests";
      else if (n.source === "url" && n.credentialKind === "userGit") a = "needing your git credential at a URL";
      else if (n.source === "url" && n.manifestSha256 !== void 0) a = "pinned to a manifest hash";
      else if (n.source !== "url" && n.path !== void 0) a = "in a subfolder";
      else if (x.test(s ?? "")) a = "pinned to a commit";
      else try {
        if (/[#@]/.test(n.source === "github" ? n.repo : n.url)) throw Error();
        _Gt(d);
      } catch {
        a = "with an address or ref in a form that a terminal doesn't take";
      }
      let c = a === void 0 ? await (0, import_chunk_xcgcdx61.fEe)(d) : null, p = c !== null && !("error" in c) && c.source === n.source ? c : null, f = n.source === "url" ? null : (0, import_chunk_xcgcdx61.LJe)(n.source === "github" ? n.repo : n.url), h = f === null ? d : `${f}@${s ?? ""}`;
      if (p !== null) {
        if (t.has(h)) continue;
        if (t.size < _) {
          t.set(h, { address: d, source: p });
          continue;
        }
        a = `past the ${_} that a terminal offers`;
      }
      a ??= 'at an address that a terminal reads as another kind of source (for example, a git address with no ".git")', i.set(a, (i.get(a) ?? 0) + 1);
    }
    let o = Array.isArray(r) ? r.length - e.length : Number(r !== void 0 && r !== null);
    if (o > 0) i.set("that couldn't be read", o);
    if (i.size === 0) {
      if (t.size > 0) (0, import_chunk_cqa9hrgx.u)("hybrid_plugin_marketplaces");
      return { offered: [...t.values()], leftOut: null };
    }
    if (t.size === 0) (0, import_chunk_cqa9hrgx.m)("hybrid_plugin_marketplaces", "none_offered");
    else (0, import_chunk_cqa9hrgx.l)("hybrid_plugin_marketplaces", "left_out");
    return { offered: [...t.values()], leftOut: `a terminal session doesn't offer every plugin marketplace your organization listed in the admin console; ask an administrator about these: ${[...i].map(([n, s]) => `${s} ${n}`).join(", ")}` };
  }
  return { offered: [], leftOut: null };
}
async function BGi(e = true) {
  if ((0, import_chunk_xcgcdx61.Si)() !== null) {
    if (e) await import_chunk_cvbctnmz.oI.wait?.();
    return (0, import_chunk_xcgcdx61.mDr)();
  }
  return [];
}
