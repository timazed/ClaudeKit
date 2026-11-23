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
var chunk_5emkb4ye_exports = {};
__export(chunk_5emkb4ye_exports, {
  MEMORY_FLUSH_TIMEOUT_MS: () => xt,
  SessionMemoryError: () => L,
  SessionMemoryStores: () => Xe,
  betaAgentToolset20260401: () => Pr,
  setupSkills: () => ut
});
module.exports = __toCommonJS(chunk_5emkb4ye_exports);
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_bx427yq2 = require("/$bunfs/root/chunk-bx427yq2.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var w = __toESM(require("fs/promises"));
var Z = __toESM(require("fs"));
var g = __toESM(require("path"));
var ve = __toESM(require("child_process"));
var rt = __toESM(require("crypto"));
var it = __toESM(require("readline"));
function R(r2) {
  if (r2.inputSchema.type !== "object") throw Error(`JSON schema for tool "${r2.name}" must be an object, but got ${r2.inputSchema.type}`);
  return { type: "custom", name: r2.name, input_schema: r2.inputSchema, description: r2.description, run: r2.run, parse: (e) => e, ...r2.close ? { close: r2.close } : {} };
}
var T = import_chunk_bx427yq2.SGt.promises, z = 448, dt = 384;
function te(r2, e) {
  let t = import_chunk_bx427yq2.V_.relative(r2, e);
  return t === "" || !t.startsWith(".." + import_chunk_bx427yq2.V_.sep) && t !== ".." && !import_chunk_bx427yq2.V_.isAbsolute(t);
}
async function ue(r2, e) {
  for (let t of r2) if (te(await q(import_chunk_bx427yq2.V_.resolve(t)), e)) return t;
  return;
}
var ht = 40;
function G(r2) {
  let e = r2?.code;
  return typeof e === "string" ? e : void 0;
}
async function q(r2) {
  let e = [], t = r2, n = 0;
  for (; ; ) {
    let i;
    try {
      i = await T.realpath(t);
    } catch (o) {
      let s;
      try {
        s = (await T.lstat(t)).isSymbolicLink();
      } catch (a) {
        let l = G(a);
        if (l !== "ENOENT" && l !== "ENOTDIR") throw a;
        let f = import_chunk_bx427yq2.V_.dirname(t);
        if (f === t) throw a;
        e.push(import_chunk_bx427yq2.V_.basename(t)), t = f;
        continue;
      }
      if (!s) throw o;
      if (++n > ht) throw Object.assign(Error("too many levels of symbolic links"), { code: "ELOOP" });
      t = import_chunk_bx427yq2.V_.resolve(import_chunk_bx427yq2.V_.dirname(t), await T.readlink(t));
      continue;
    }
    return e.length ? import_chunk_bx427yq2.V_.join(i, ...e.reverse()) : i;
  }
}
async function ke(r2, e, t) {
  let n = t?.allowedRoots ?? [], i = await q(import_chunk_bx427yq2.V_.resolve(r2)), o;
  try {
    o = await q(import_chunk_bx427yq2.V_.resolve(i, e));
  } catch (a) {
    throw new import_chunk_gq1dr8pm.Mb(P(a, `path ${JSON.stringify(e)}`));
  }
  if (te(i, o) || await ue(n, o) !== void 0) return o;
  let s = n.length ? "the session's working directory and its other permitted directories" : "the session's working directory";
  throw new import_chunk_gq1dr8pm.Mb(`path ${JSON.stringify(e)} is outside ${s}`);
}
async function pe(r2, e) {
  let t = import_chunk_bx427yq2.V_.dirname(r2), n = import_chunk_bx427yq2.V_.join(t, `.tmp-${process.pid}-${import_chunk_bx427yq2.wun.randomUUID()}`), i = await T.stat(r2).then((s) => s.mode & 511, () => {
    return;
  }), o;
  try {
    if (o = await T.open(n, "wx", dt), i !== void 0) await o.chmod(i);
    await o.writeFile(e, "utf-8"), await o.sync(), await o.close(), o = void 0, await T.rename(n, r2);
  } catch (s) {
    if (o) await o.close().catch(() => {
    });
    throw await T.unlink(n).catch(() => {
    }), s;
  }
}
function P(r2, e) {
  let t = G(r2);
  switch (t) {
    case "ENOENT":
      return `${e}: no such file or directory`;
    case "EACCES":
    case "EPERM":
      return `${e}: permission denied`;
    case "ENOTDIR":
      return `${e}: not a directory`;
    case "EISDIR":
      return `${e}: is a directory`;
    case "ELOOP":
      return `${e}: too many levels of symbolic links`;
    case "ENAMETOOLONG":
      return `${e}: file name too long`;
    case "ENOSPC":
      return `${e}: no space left on device`;
    case "EMFILE":
    case "ENFILE":
      return `${e}: too many open files`;
    default:
      return `${e}: ${t !== void 0 ? `i/o error (${t})` : "i/o error"}`;
  }
}
var E = import_chunk_bx427yq2.SGt.promises, mt = import_chunk_bx427yq2.qGi.promisify(import_chunk_bx427yq2.KGi.execFile);
async function ut(r2) {
  let { client: e, sessionId: t } = r2;
  if (!e) return async () => {
  };
  let n = (0, import_chunk_gq1dr8pm.Yv)(e), i = r2.session;
  if (!i) {
    if (t === void 0) return async () => {
    };
    n.warn("AgentToolContext.sessionId is deprecated and costs an extra session fetch; fetch the session once and set `session` instead", { component: "agent-tool-context" }), i = await e.beta.sessions.retrieve(t);
  }
  let o = import_chunk_bx427yq2.V_.resolve(r2.workdir, "skills"), s = [];
  for (let a of i.agent.skills) try {
    let l = await e.beta.skills.versions.retrieve(a.version, { skill_id: a.skill_id }), f = import_chunk_bx427yq2.V_.basename(l.name.trim());
    if (f === "" || f === "." || f === "..") f = a.skill_id;
    let c = import_chunk_bx427yq2.V_.resolve(o, f);
    if (c !== o && !c.startsWith(o + import_chunk_bx427yq2.V_.sep)) {
      n.warn("skill name escapes the skills dir; skipping", { component: "agent-tool-context", name: l.name });
      continue;
    }
    let h = await e.beta.skills.versions.download(l.id, { skill_id: a.skill_id });
    await E.rm(c, { recursive: true, force: true }), await E.mkdir(c, { recursive: true, mode: z }), s.push(c), await Re(h, c), n.info("downloaded skill", { component: "agent-tool-context", skill_id: a.skill_id, version: l.id, dest: c });
  } catch (l) {
    n.warn("failed to download skill", { component: "agent-tool-context", skill_id: a.skill_id, error: String(l) });
  }
  return async () => {
    for (let a of s) await E.rm(a, { recursive: true, force: true }).catch((l) => {
      n.warn("failed to clean up skill", { component: "agent-tool-context", dest: a, error: String(l) });
    });
  };
}
function pt(r2) {
  for (let e of r2) {
    let t = e.trim();
    if (!t) continue;
    if (import_chunk_bx427yq2.V_.isAbsolute(t) || t.split(/[\\/]/).includes("..")) throw new import_chunk_jv7av99m.Mo(`refusing to extract unsafe archive member: ${t}`);
  }
}
var we = "skill archive listing is inconsistent; refusing to extract", yt = { unzip: /* @__PURE__ */ new Set(["-", "d", "?"]), tar: /* @__PURE__ */ new Set(["-", "d", "C"]) };
function Ie(r2) {
  let e = r2.split(`
`);
  if (e[e.length - 1] === "") e.pop();
  return e;
}
function wt(r2, e) {
  return /^[\x20-\x7E]+$/.test(e) && !/[\\^#]/.test(e) && !(r2 === "unzip" && e.startsWith("-"));
}
function _t(r2, e, t) {
  let n = Ie(e), i = Ie(t);
  if (n.length !== i.length) throw new import_chunk_jv7av99m.Mo(we);
  let o = [], s = [];
  return n.forEach((a, l) => {
    if (yt[r2].has(i[l].charAt(0))) {
      o.push(a);
      return;
    }
    if (!wt(r2, a)) throw new import_chunk_jv7av99m.Mo(`refusing to extract archive: cannot safely exclude member ${JSON.stringify(a)}`);
    s.push(a);
  }), { plain: o, special: s };
}
async function Ne(r2) {
  for (let e of await E.readdir(r2, { withFileTypes: true })) if (e.isDirectory()) await Ne(import_chunk_bx427yq2.V_.join(r2, e.name));
  else if (!e.isFile()) throw new import_chunk_jv7av99m.Mo(we);
}
async function ye(r2, e) {
  try {
    let { stdout: t } = await mt(r2, e);
    return t;
  } catch (t) {
    if (G(t) === "ENOENT") throw new import_chunk_jv7av99m.Mo(`skill extraction requires the \`${r2}\` command, but it was not found on PATH`);
    throw t;
  }
}
function gt(r2) {
  let e, t = false;
  for (let n of r2) {
    let i = n.trim().split("/").filter((s) => s !== "" && s !== ".");
    if (i.length === 0) continue;
    let o = i[0];
    if (e === void 0) e = o;
    else if (o !== e) return "";
    if (i.length > 1) t = true;
  }
  return e !== void 0 && t ? e : "";
}
async function Re(r2, e) {
  let t = import_chunk_bx427yq2.V_.join(e, `.skill-archive-${process.pid}-${Date.now()}`);
  if (!r2.body) throw new import_chunk_jv7av99m.Mo("skill download response had no body");
  await import_chunk_bx427yq2.MEs.promises.pipeline(import_chunk_bx427yq2.MEs.Readable.fromWeb(r2.body), import_chunk_bx427yq2.SGt.createWriteStream(t));
  let n = import_chunk_bx427yq2.V_.join(import_chunk_bx427yq2.V_.dirname(e), `.skill-stage-${process.pid}-${Date.now()}`), i = import_chunk_bx427yq2.V_.join(import_chunk_bx427yq2.V_.dirname(e), `.skill-exclude-${process.pid}-${Date.now()}`);
  try {
    let o = await Et(t, 4), s = o.length >= 4 && o[0] === 80 && o[1] === 75 && o[2] === 3 && o[3] === 4, a = s ? "unzip" : "tar", l = await ye(a, s ? ["-Z1", t] : ["-tf", t]), f = await ye(a, s ? ["-Z", "--h", "--t", t] : ["-tvf", t]), { plain: c, special: h } = _t(a, l, f);
    pt([...c, ...h]);
    let y = gt(c);
    if (await E.mkdir(n, { recursive: true, mode: z }), c.length > 0) await ye(a, await St(a, t, n, h, i));
    await Ne(n);
    let O = y ? import_chunk_bx427yq2.V_.join(n, y) : n, v = await E.readdir(O).catch((M) => {
      throw G(M) === "ENOENT" ? new import_chunk_jv7av99m.Mo(we) : M;
    });
    for (let M of v) await E.rename(import_chunk_bx427yq2.V_.join(O, M), import_chunk_bx427yq2.V_.join(e, M));
  } finally {
    await E.rm(t, { force: true }), await E.rm(i, { force: true }), await E.rm(n, { recursive: true, force: true });
  }
}
async function St(r2, e, t, n, i) {
  let o = n.map((s) => s.replace(/[*?[\\]/g, "\\$&"));
  if (r2 === "unzip") return ["-oq", e, "-d", t, ...o.length > 0 ? ["-x", ...o] : []];
  if (o.length === 0) return ["-xf", e, "-C", t];
  return await E.writeFile(i, o.join(`
`) + `
`, { flag: "wx", mode: 384 }), ["-xf", e, "-C", t, "-X", i];
}
async function Et(r2, e) {
  let t = await E.open(r2, "r");
  try {
    let n = Buffer.alloc(e), { bytesRead: i } = await t.read(n, 0, e, 0);
    return n.subarray(0, i);
  } finally {
    await t.close();
  }
}
var p = import_chunk_bx427yq2.SGt.promises, W = import_chunk_bx427yq2.SGt.constants, Ae = 448, bt = 384, Ot = 448, ge = W.O_NOFOLLOW ?? 0, Mt = W.O_NONBLOCK ?? 0, m = (() => {
  class r2 extends Error {
    constructor(e, t) {
      super(`path ${JSON.stringify(t)} ${e}`);
      this.name = "FileStoreError", this.reason = e, this.relPath = t;
    }
  }
  return r2.ESCAPES_ROOT = "escapes the store root", r2.IS_A_SYMLINK = "is a symlink", r2.NOT_A_FILE = "is not a regular file", r2.NOT_A_DIRECTORY = "is not a directory", r2.NOT_UTF8 = "is not valid utf-8", r2.MOVE_DESTINATION_EXISTS = "already exists", r2;
})();
function Se(r2) {
  return r2.startsWith("/") && !r2.split("/").includes("..");
}
var _e = (() => {
  class r2 {
    constructor(e, t, n = false) {
      this.hashes = /* @__PURE__ */ new Map(), this.rootPath = e, this.removedOnDispose = t, this.decoder = n ? new TextDecoder("utf-8", { fatal: true }) : void 0;
    }
    static async open(e, t) {
      if (!vt()) throw Error("FileStore requires O_NOFOLLOW support on this platform");
      let n = false;
      try {
        await p.lstat(e);
      } catch (i) {
        if (i.code !== "ENOENT") throw i;
        n = true;
      }
      return new r2(import_chunk_bx427yq2.V_.resolve(e), n, t?.utf8 ?? false);
    }
    async createRoot() {
      await kt(this.rootPath);
    }
    root() {
      return { path: this.rootPath, removedOnDispose: this.removedOnDispose };
    }
    async dispose() {
      if (!this.removedOnDispose) return;
      await p.rm(this.rootPath, { recursive: true, force: true });
    }
    async put(e, t, n) {
      let i = e.replace(/\\/g, "/");
      if (i.endsWith("/") || i.endsWith("/.") || i === "" || i === ".") throw new m(m.NOT_A_FILE, e);
      let o = this.resolveUnderRoot(e), s = typeof t === "string" ? (0, import_chunk_gq1dr8pm.EFn)(t) : t;
      this.requireUtf8(e, s), await Te(this.rootPath, import_chunk_bx427yq2.V_.dirname(o)), await It(o, s, n?.executable ?? false);
    }
    async get(e) {
      let t = this.resolveUnderRoot(e), n;
      try {
        n = await xe(e, t);
      } catch (o) {
        if (o.code === "ENOENT") return null;
        throw o;
      }
      let i;
      try {
        let o = await n.readFile();
        i = new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
      } finally {
        await n.close();
      }
      return this.requireUtf8(e, i), i;
    }
    async ls(e = "/") {
      let t = this.resolveUnderRoot(e);
      return new Set((await Le(this.rootPath, e, t)).map(([n]) => n));
    }
    async findSymlinks(e = "/") {
      let t = this.resolveUnderRoot(e);
      return Rt(this.rootPath, e, t);
    }
    async hashtree(e = "/") {
      let t = this.resolveUnderRoot(e), n = re.nowNs(), i = /* @__PURE__ */ Object.create(null);
      for (let [o, s] of await Le(this.rootPath, e, t)) {
        let a = await this.hashViaCache(o, s, n);
        if (a !== null) i[o] = a;
      }
      return i;
    }
    async hashFile(e) {
      let t = this.resolveUnderRoot(e), n;
      try {
        n = await p.lstat(t, { bigint: true });
      } catch (o) {
        if (o.code === "ENOENT") return null;
        throw o;
      }
      if (n.isSymbolicLink()) throw new m(m.IS_A_SYMLINK, e);
      if (!n.isFile()) throw new m(m.NOT_A_FILE, e);
      let i = import_chunk_bx427yq2.V_.relative(this.rootPath, t).split(import_chunk_bx427yq2.V_.sep).join("/");
      return this.hashViaCache(i, t, re.nowNs());
    }
    async move(e, t) {
      let n = this.resolveUnderRoot(e), i = this.resolveUnderRoot(t);
      if (n === this.rootPath || i === this.rootPath) return;
      if (await p.stat(i).then(() => true, () => false)) throw new m(m.MOVE_DESTINATION_EXISTS, t);
      await Te(this.rootPath, import_chunk_bx427yq2.V_.dirname(i)), await p.rename(n, i);
    }
    async remove(e) {
      let t = this.resolveUnderRoot(e);
      if (t === this.rootPath) return;
      let n;
      try {
        n = await p.lstat(t, { bigint: true });
      } catch (i) {
        if (i.code === "ENOENT") return;
        throw i;
      }
      if (n.isDirectory()) await p.rm(t, { recursive: true, force: true });
      else try {
        await p.unlink(t);
      } catch (i) {
        if (i.code !== "ENOENT") throw i;
      }
    }
    resolveUnderRoot(e) {
      let t = e.replace(/\\/g, "/").replace(/^\/+/, ""), n = t.split("/").filter((i) => i !== "" && i !== ".");
      if (import_chunk_bx427yq2.V_.posix.isAbsolute(t) || n.includes("..")) throw new m(m.ESCAPES_ROOT, e);
      return n.length === 0 ? this.rootPath : import_chunk_bx427yq2.V_.join(this.rootPath, ...n);
    }
    requireUtf8(e, t) {
      if (!this.decoder) return;
      try {
        this.decoder.decode(t);
      } catch {
        throw new m(m.NOT_UTF8, e);
      }
    }
    async hashViaCache(e, t, n) {
      let i;
      try {
        i = await p.lstat(t, { bigint: true });
      } catch (a) {
        if (a.code === "ENOENT") return null;
        throw a;
      }
      if (!i.isFile()) return null;
      let o = this.hashes.get(e), s;
      if (o !== void 0 && Lt(o, i)) s = o.sha;
      else try {
        s = await re.hashFile(t);
      } catch (a) {
        let l = a.code;
        if (l === "ENOENT" || a instanceof m) return null;
        if (l === "ELOOP" || l === "EMLINK") return null;
        throw a;
      }
      if ($t(i, n)) this.hashes.set(e, { mtimeNs: i.mtimeNs, ctimeNs: i.ctimeNs, size: i.size, sha: s });
      return s;
    }
  }
  return r2.isPathLegal = Se, r2;
})();
function vt() {
  return ge !== 0;
}
async function kt(r2) {
  let e = [], t = r2;
  for (; ; ) {
    try {
      await p.stat(t);
      break;
    } catch (i) {
      let o = i.code;
      if (o !== "ENOENT" && o !== "ENOTDIR" && o !== "ELOOP") throw i;
    }
    e.push(t);
    let n = import_chunk_bx427yq2.V_.dirname(t);
    if (n === t) break;
    t = n;
  }
  for (let n of e.reverse()) try {
    await p.mkdir(n, { mode: Ae });
  } catch (i) {
    if (i.code !== "EEXIST") throw i;
  }
}
async function Te(r2, e) {
  let t = import_chunk_bx427yq2.V_.relative(r2, e);
  if (t === "") return;
  let n = r2;
  for (let i of t.split(import_chunk_bx427yq2.V_.sep)) {
    n = import_chunk_bx427yq2.V_.join(n, i);
    try {
      await p.mkdir(n, { mode: Ae });
    } catch (o) {
      if (o.code !== "EEXIST") throw o;
    }
  }
}
async function It(r2, e, t) {
  let n = t ? Ot : bt, i = import_chunk_bx427yq2.V_.join(import_chunk_bx427yq2.V_.dirname(r2), `.fs-${import_chunk_bx427yq2.wun.randomBytes(8).toString("hex")}.tmp`), o;
  try {
    o = await p.open(i, W.O_WRONLY | W.O_CREAT | W.O_EXCL | ge, n), await o.writeFile(e), await o.close(), o = void 0, await p.rename(i, r2);
  } catch (s) {
    if (o) await o.close().catch(() => {
    });
    throw await p.unlink(i).catch(() => {
    }), s;
  }
}
async function xe(r2, e) {
  let t;
  try {
    t = await p.open(e, W.O_RDONLY | ge | Mt);
  } catch (n) {
    let i = n.code;
    if (i === "ELOOP" || i === "EMLINK") throw new m(m.IS_A_SYMLINK, r2);
    throw n;
  }
  try {
    if (!(await t.stat()).isFile()) throw new m(m.NOT_A_FILE, r2);
  } catch (n) {
    throw await t.close().catch(() => {
    }), n;
  }
  return t;
}
async function Nt(r2) {
  let e = import_chunk_bx427yq2.wun.createHash("sha256"), t = await xe(import_chunk_bx427yq2.V_.basename(r2), r2), n = new Uint8Array(1048576);
  try {
    for (; ; ) {
      let { bytesRead: i } = await t.read(n, 0, n.length);
      if (i === 0) break;
      e.update(n.subarray(0, i));
    }
  } finally {
    await t.close();
  }
  return e.digest("hex");
}
async function Le(r2, e, t) {
  if (!await Tt(e, t)) return [];
  let n = [];
  return await De(t, (i, o) => {
    if (o.isFile()) n.push([import_chunk_bx427yq2.V_.relative(r2, i).split(import_chunk_bx427yq2.V_.sep).join("/"), i]);
  }), n.sort(), n;
}
async function Rt(r2, e, t) {
  let n = (s) => import_chunk_bx427yq2.V_.relative(r2, s).split(import_chunk_bx427yq2.V_.sep).join("/"), i;
  try {
    i = await p.lstat(t, { bigint: true });
  } catch (s) {
    let a = s.code;
    if (a === "ENOENT" || a === "ENOTDIR") return /* @__PURE__ */ new Set();
    throw s;
  }
  if (i.isSymbolicLink()) return /* @__PURE__ */ new Set([n(t)]);
  if (!i.isDirectory()) throw new m(m.NOT_A_DIRECTORY, e);
  let o = /* @__PURE__ */ new Set();
  return await De(t, (s, a) => {
    if (a.isSymbolicLink()) o.add(n(s));
  }), o;
}
async function Tt(r2, e) {
  let t;
  try {
    t = await p.lstat(e, { bigint: true });
  } catch (n) {
    let i = n.code;
    if (i === "ENOENT" || i === "ENOTDIR") return false;
    throw n;
  }
  if (!t.isDirectory()) throw new m(m.NOT_A_DIRECTORY, r2);
  return true;
}
async function De(r2, e) {
  let t = [r2];
  while (t.length) {
    let n = t.pop(), i;
    try {
      i = await p.readdir(n, { withFileTypes: true });
    } catch (o) {
      if (o.code === "ENOENT") continue;
      throw o;
    }
    for (let o of i) {
      let s = import_chunk_bx427yq2.V_.join(n, o.name);
      if (e(s, o), o.isDirectory() && !o.isSymbolicLink()) t.push(s);
    }
  }
}
function Lt(r2, e) {
  return e.mtimeNs === r2.mtimeNs && e.ctimeNs === r2.ctimeNs && e.size === r2.size;
}
function $t(r2, e) {
  return (r2.mtimeNs > r2.ctimeNs ? r2.mtimeNs : r2.ctimeNs) < e - re.timestampTrustMarginNs;
}
var At = 2000000000n, re = { hashFile: Nt, timestampTrustMarginNs: At, nowNs: () => BigInt(Date.now()) * 1000000n }, Ce = _e, $e = Symbol.asyncDispose;
if ($e) Object.defineProperty(_e.prototype, $e, { value: _e.prototype.dispose, configurable: true, writable: true });
var u, I, ae, H, ce, d, U, oe, k, qe, se, ze, He, Ee, Oe, Fe, Pe, be, We, Ue, ie, ne, je, Be, xt = 3e4, j = ".anthropic-memory-store", Ke = 1;
function Ye(r2) {
  return import_chunk_bx427yq2.wun.createHash("sha256").update(`version ${Ke}
${r2}`, "utf-8").digest("hex");
}
var Dt = 3e4, Ct = 100, Ft = 20, Pt = 16, Wt = 32, Ut = 8, jt = 50;
class L extends import_chunk_jv7av99m.Mo {
  constructor(r2, e) {
    super(r2);
    if (this.name = "SessionMemoryError", e !== void 0) this.cause = e;
  }
}
class Ve {
  constructor(r2, e, t) {
    this.mode = r2, this.cap = e, this.waiveWindow = t, this.attempted = 0, this.capped = 0, this.suppressed = 0;
  }
  takeSlot() {
    if (this.attempted >= this.cap) return this.capped++, false;
    return this.attempted++, true;
  }
}
class Xe {
  constructor(r2, e) {
    u.add(this), I.set(this, void 0), ae.set(this, void 0), H.set(this, void 0), ce.set(this, void 0), d.set(this, void 0), U.set(this, void 0), oe.set(this, false), k.set(this, []), (0, import_chunk_gq1dr8pm.qr)(this, I, r2, "f"), (0, import_chunk_gq1dr8pm.qr)(this, ae, e.workdir, "f"), (0, import_chunk_gq1dr8pm.qr)(this, H, e.syncIntervalMs ?? import_chunk_gq1dr8pm.xIi, "f"), (0, import_chunk_gq1dr8pm.cms)((0, import_chunk_gq1dr8pm.Ge)(this, H, "f"), "syncIntervalMs"), (0, import_chunk_gq1dr8pm.qr)(this, ce, e.syncDeletions ?? "enabled", "f"), (0, import_chunk_gq1dr8pm.qr)(this, d, (0, import_chunk_gq1dr8pm.Yv)(r2), "f"), (0, import_chunk_gq1dr8pm.qr)(this, U, Date.now(), "f");
  }
  get roots() {
    return (0, import_chunk_gq1dr8pm.Ge)(this, k, "f").map((r2) => r2.files.root().path);
  }
  get readOnlyRoots() {
    return (0, import_chunk_gq1dr8pm.Ge)(this, k, "f").filter((r2) => r2.readOnly).map((r2) => r2.files.root().path);
  }
  async download(r2) {
    for (let e of r2.resources) {
      if (e.type !== "memory_store") continue;
      let t = (0, import_chunk_gq1dr8pm.Ge)(this, u, "m", qe).call(this, e), n;
      try {
        if (n = { memoryStoreId: e.memory_store_id, files: await Ce.open(t, { utf8: true }), readOnly: e.access === "read_only", baseline: /* @__PURE__ */ new Map(), refusedShas: /* @__PURE__ */ new Map(), pendingDeletes: /* @__PURE__ */ new Map() }, !n.files.root().removedOnDispose) throw new L(`something already exists at the memory store's path: ${t} (memory_store_id=${e.memory_store_id}); it must not exist when the session starts`);
        try {
          await n.files.createRoot();
        } catch (i) {
          if (!B(i)) throw i;
          throw new L(`cannot create the memory store's folder: ${t} (memory_store_id=${e.memory_store_id}): ${i}; the worker host must make this mount path writable`, i);
        }
        await (0, import_chunk_gq1dr8pm.Ge)(this, u, "m", Oe).call(this, n), (0, import_chunk_gq1dr8pm.Ge)(this, d, "f").info("downloaded memories", { count: n.baseline.size, memory_store_id: n.memoryStoreId, dest: n.files.root().path }), (0, import_chunk_gq1dr8pm.Ge)(this, k, "f").push(n);
      } catch (i) {
        if (n) await n.files.dispose().catch(() => {
        });
        if (i instanceof L) throw i;
        throw new L(`failed to download memory store memory_store_id=${e.memory_store_id}: ${i}`, i);
      }
    }
    (0, import_chunk_gq1dr8pm.qr)(this, U, Date.now(), "f");
  }
  async finish() {
    if ((0, import_chunk_gq1dr8pm.Ge)(this, oe, "f")) throw new import_chunk_jv7av99m.Mo("finish() was already called: it is the session's last sync and runs once");
    (0, import_chunk_gq1dr8pm.qr)(this, oe, true, "f"), await this.syncAll(true);
  }
  async syncAll(r2) {
    await Promise.all((0, import_chunk_gq1dr8pm.Ge)(this, k, "f").map((e) => (0, import_chunk_gq1dr8pm.Ge)(this, u, "m", ze).call(this, e, r2))), (0, import_chunk_gq1dr8pm.qr)(this, U, Date.now(), "f");
  }
  async syncIfDue() {
    if (Date.now() - (0, import_chunk_gq1dr8pm.Ge)(this, U, "f") < (0, import_chunk_gq1dr8pm.Ge)(this, H, "f")) return;
    await this.syncAll(false);
  }
  async flushWrites(r2) {
    await Promise.all((0, import_chunk_gq1dr8pm.Ge)(this, k, "f").map((e) => (0, import_chunk_gq1dr8pm.Ge)(this, u, "m", He).call(this, e, r2)));
  }
  async dispose() {
    for (let r2 of (0, import_chunk_gq1dr8pm.Ge)(this, k, "f")) {
      let e = r2.files.root();
      try {
        let t = await (0, import_chunk_gq1dr8pm.Ge)(this, u, "m", se).call(this, r2);
        if (!t.markerOk && Object.keys(t.files).length > 0) {
          (0, import_chunk_gq1dr8pm.Ge)(this, d, "f").warn(`${t.distrustReason}; leaving the memory store folder on disk`, { root: e.path, memory_store_id: r2.memoryStoreId });
          continue;
        }
        await r2.files.dispose();
      } catch (t) {
        if (!(t instanceof m) && !B(t)) throw t;
        (0, import_chunk_gq1dr8pm.Ge)(this, d, "f").warn("failed to remove the memory store folder", { root: r2.files.root().path, memory_store_id: r2.memoryStoreId, error: String(t) });
        continue;
      }
      if (e.removedOnDispose) (0, import_chunk_gq1dr8pm.Ge)(this, d, "f").info("removed memory store dir", { dest: e.path, memory_store_id: r2.memoryStoreId });
    }
  }
}
I = /* @__PURE__ */ new WeakMap(), ae = /* @__PURE__ */ new WeakMap(), H = /* @__PURE__ */ new WeakMap(), ce = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap(), U = /* @__PURE__ */ new WeakMap(), oe = /* @__PURE__ */ new WeakMap(), k = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakSet(), qe = function(e) {
  if (e.mount_path) {
    if (!Se(e.mount_path)) throw new L(`memory store mount_path is not a clean absolute path: ${JSON.stringify(e.mount_path)} (memory_store_id=${e.memory_store_id})`);
    return e.mount_path;
  }
  return import_chunk_bx427yq2.V_.join((0, import_chunk_gq1dr8pm.Ge)(this, ae, "f"), "memory", e.name || e.memory_store_id);
}, se = async function(e) {
  let t = await e.files.hashtree(), n = t[j];
  if (delete t[j], n === Ye(e.memoryStoreId)) return { files: t, markerOk: true, distrustReason: null };
  return { files: t, markerOk: false, distrustReason: n !== void 0 ? "the marker file does not match this store" : "the marker file is gone" };
}, ze = async function(e, t) {
  try {
    let n = await (0, import_chunk_gq1dr8pm.Ge)(this, u, "m", se).call(this, e), i = n.files;
    if (!n.markerOk) {
      if (Object.keys(i).length > 0) {
        (0, import_chunk_gq1dr8pm.Ge)(this, d, "f").warn(`${n.distrustReason}; leaving the memory store folder as found and not syncing`, { root: e.files.root().path, memory_store_id: e.memoryStoreId });
        return;
      }
      await (0, import_chunk_gq1dr8pm.Ge)(this, u, "m", Ee).call(this, e, "the folder or its marker is gone");
      return;
    }
    if (Object.keys(i).length === 0 && e.baseline.size > 1) {
      await (0, import_chunk_gq1dr8pm.Ge)(this, u, "m", Ee).call(this, e, "every memory file is gone at once");
      return;
    }
    let o = /* @__PURE__ */ new Map();
    for await (let [c, h] of (0, import_chunk_gq1dr8pm.Ge)(this, u, "m", ie).call(this, e.memoryStoreId)) o.set(c, h);
    let s = new Ve((0, import_chunk_gq1dr8pm.Ge)(this, ce, "f"), Math.max(Ut, Math.min(jt, Math.floor(e.baseline.size / 4))), t), a = [], l = /* @__PURE__ */ new Map(), f = [.../* @__PURE__ */ new Set([...o.keys(), ...Object.keys(i), ...e.baseline.keys()])].sort();
    for (let c of f) {
      let h = o.get(c), y = i[c], O = e.baseline.get(c), v;
      if (y === void 0 && O !== void 0 && h !== void 0 && h.content_sha256 === O && !e.readOnly) v = await (0, import_chunk_gq1dr8pm.Ge)(this, u, "m", je).call(this, e, c, h, O, s);
      else v = await (0, import_chunk_gq1dr8pm.Ge)(this, u, "m", Fe).call(this, e, c, h, y, a);
      if (v !== void 0) l.set(c, v);
    }
    if (e.baseline = l, await (0, import_chunk_gq1dr8pm.Ge)(this, u, "m", We).call(this, e, a), s.suppressed > 0) (0, import_chunk_gq1dr8pm.Ge)(this, d, "f").debug("remote deletes are disabled; locally deleted memories stay on the server", { count: s.suppressed, memory_store_id: e.memoryStoreId });
    if (s.capped > 0) (0, import_chunk_gq1dr8pm.Ge)(this, d, "f").warn(`delete cap reached: ${s.mode === "log_only" ? "would send" : "sent"} ${s.attempted} deletes, held ${s.capped} for later syncs`, { memory_store_id: e.memoryStoreId });
  } catch (n) {
    (0, import_chunk_gq1dr8pm.Ge)(this, d, "f").warn("memory sync failed", { memory_store_id: e.memoryStoreId, error: String(n) });
  }
}, He = async function(e, t) {
  let n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set(), o = async () => {
    if (e.readOnly) return;
    let s = await (0, import_chunk_gq1dr8pm.Ge)(this, u, "m", se).call(this, e);
    if (!s.markerOk) {
      (0, import_chunk_gq1dr8pm.Ge)(this, d, "f").warn(`${s.distrustReason}; not uploading anything from the memory store folder`, { root: e.files.root().path, memory_store_id: e.memoryStoreId });
      return;
    }
    for (let [f, c] of Object.entries(s.files)) if (c !== e.baseline.get(f) && e.refusedShas.get(f) !== c) n.set(f, c), i.add(f);
    if (n.size === 0 || t?.aborted) return;
    let a = /* @__PURE__ */ new Map();
    for await (let [f, c] of (0, import_chunk_gq1dr8pm.Ge)(this, u, "m", ie).call(this, e.memoryStoreId)) {
      if (t?.aborted) return;
      a.set(f, c);
    }
    let l = [];
    for (let f of [...n.keys()].sort()) {
      let c = n.get(f), h = e.baseline.get(f), y = a.get(f);
      if (y !== void 0 && y.content_sha256 === c) {
        e.baseline.set(f, y.content_sha256), i.delete(f);
        continue;
      }
      if (y !== void 0 && y.content_sha256 !== h) {
        (0, import_chunk_gq1dr8pm.Ge)(this, d, "f").warn("memory changed both locally and remotely; the flush leaves the remote version", { path: f, memory_store_id: e.memoryStoreId }), i.delete(f);
        continue;
      }
      l.push([f, c, y]);
    }
    await (0, import_chunk_gq1dr8pm.Ge)(this, u, "m", Ue).call(this, e, l, i, t);
  };
  try {
    if (await Bt(o(), t), t?.aborted && i.size > 0) (0, import_chunk_gq1dr8pm.Ge)(this, d, "f").warn(`memory flush cut off part-way; ${i.size} of ${n.size} changed files had not finished uploading`, { memory_store_id: e.memoryStoreId });
  } catch (s) {
    (0, import_chunk_gq1dr8pm.Ge)(this, d, "f").warn("memory flush failed", { memory_store_id: e.memoryStoreId, error: String(s) });
  }
}, Ee = async function(e, t) {
  (0, import_chunk_gq1dr8pm.Ge)(this, d, "f").warn(`${t}; re-downloading the memory store folder instead of syncing`, { root: e.files.root().path, memory_store_id: e.memoryStoreId }), await e.files.createRoot(), await (0, import_chunk_gq1dr8pm.Ge)(this, u, "m", Oe).call(this, e);
}, Oe = async function(e) {
  e.baseline = /* @__PURE__ */ new Map(), e.pendingDeletes.clear(), await e.files.put(j, `version ${Ke}
${e.memoryStoreId}`);
  for await (let [t, n] of (0, import_chunk_gq1dr8pm.Ge)(this, u, "m", ie).call(this, e.memoryStoreId, "full")) if (await (0, import_chunk_gq1dr8pm.Ge)(this, u, "m", be).call(this, e, t, n.content ?? "")) e.baseline.set(t, n.content_sha256);
}, Fe = async function(e, t, n, i, o) {
  let s = e.baseline.get(t);
  if (i !== void 0) e.pendingDeletes.delete(t);
  if (!n) {
    if (i === void 0) {
      e.pendingDeletes.delete(t);
      return;
    }
    if (s !== void 0) {
      if (i === s) {
        let h = await (0, import_chunk_gq1dr8pm.Ge)(this, u, "m", Pe).call(this, e, t, s);
        if (h === void 0) return;
        if (h === s) return s;
        i = h;
      }
      if (e.readOnly) (0, import_chunk_gq1dr8pm.Ge)(this, d, "f").warn("memory deleted remotely but edited locally; keeping the file, which a read-only store cannot push", { path: t, memory_store_id: e.memoryStoreId });
      else if (e.refusedShas.get(t) !== i) (0, import_chunk_gq1dr8pm.Ge)(this, d, "f").info("memory deleted remotely but edited locally; re-creating it from the file", { path: t, memory_store_id: e.memoryStoreId });
    }
    if (e.readOnly) return;
    if (e.refusedShas.get(t) === i) return;
    return await (0, import_chunk_gq1dr8pm.Ge)(this, u, "m", ne).call(this, e, t, i, void 0);
  }
  let a = n.content_sha256, l = a !== s, f = i !== void 0 && i !== s && i !== a, c = !e.readOnly && f;
  if (i === void 0 && s !== void 0) {
    if (l) (0, import_chunk_gq1dr8pm.Ge)(this, d, "f").warn("memory deleted locally but changed remotely; restoring the remote version", { path: t, memory_store_id: e.memoryStoreId }), e.pendingDeletes.delete(t), o.push([t, n]);
    return s;
  }
  if (l) {
    if (i === a) return a;
    if (f) (0, import_chunk_gq1dr8pm.Ge)(this, d, "f").warn("memory changed both locally and remotely; keeping the remote version", { path: t, memory_store_id: e.memoryStoreId });
    return o.push([t, n]), s;
  }
  if (c) {
    if (e.refusedShas.get(t) === i) return a;
    return await (0, import_chunk_gq1dr8pm.Ge)(this, u, "m", ne).call(this, e, t, i, n) ?? a;
  }
  return a;
}, Pe = async function(e, t, n) {
  let i;
  try {
    i = await e.files.hashFile(t);
  } catch (o) {
    if (!(o instanceof m) && !B(o)) throw o;
    return n;
  }
  if (i === null) return;
  if (i !== n) return i;
  try {
    await e.files.remove(t);
  } catch (o) {
    if (!(o instanceof m) && !B(o)) throw o;
    return (0, import_chunk_gq1dr8pm.Ge)(this, d, "f").warn("failed to remove memory deleted remotely", { path: t, memory_store_id: e.memoryStoreId, error: String(o) }), n;
  }
  return;
}, be = async function(e, t, n) {
  try {
    await e.files.put(t, n);
  } catch (i) {
    if (!(i instanceof m) && !B(i)) throw i;
    return (0, import_chunk_gq1dr8pm.Ge)(this, d, "f").warn("failed to write memory", { path: t, memory_store_id: e.memoryStoreId, error: String(i) }), false;
  }
  return true;
}, We = async function(e, t) {
  if (t.length === 0) return;
  let n = async (s, a) => {
    let l;
    try {
      l = await (0, import_chunk_gq1dr8pm.Ge)(this, I, "f").beta.memoryStores.memories.retrieve(a.id, { memory_store_id: e.memoryStoreId, view: "full" });
    } catch (f) {
      if ((0, import_chunk_gq1dr8pm.Ape)(f, 404)) return;
      (0, import_chunk_gq1dr8pm.Ge)(this, d, "f").warn("failed to fetch memory content", { path: s, memory_store_id: e.memoryStoreId, error: String(f) });
      return;
    }
    if (await (0, import_chunk_gq1dr8pm.Ge)(this, u, "m", be).call(this, e, s, l.content ?? "")) e.baseline.set(s, l.content_sha256);
  }, i = t[Symbol.iterator](), o = async () => {
    for (let [s, a] of i) await n(s, a);
  };
  await Promise.all(Array.from({ length: Math.min(Pt, t.length) }, o));
}, Ue = async function(e, t, n, i) {
  let o = t[Symbol.iterator](), s = async () => {
    for (let [a, l, f] of o) {
      if (i?.aborted) return;
      let c = await (0, import_chunk_gq1dr8pm.Ge)(this, u, "m", ne).call(this, e, a, l, f);
      if (n.delete(a), c !== void 0) e.baseline.set(a, c);
    }
  };
  await Promise.all(Array.from({ length: Math.min(Wt, t.length) }, s));
}, ie = async function* (e, t = "basic") {
  let n = t === "basic" ? Ct : Ft;
  for await (let i of (0, import_chunk_gq1dr8pm.Ge)(this, I, "f").beta.memoryStores.memories.list(e, { view: t, limit: n })) {
    if (i.type !== "memory") continue;
    let o = i.path.replace(/^\/+/, "");
    if (o === j) {
      (0, import_chunk_gq1dr8pm.Ge)(this, d, "f").warn("the server listed the reserved marker path; skipping", { path: i.path, memory_store_id: e });
      continue;
    }
    yield [o, i];
  }
}, ne = async function r(e, t, n, i) {
  try {
    let o = await e.files.get(t);
    if (o === null) return;
    let s = (0, import_chunk_gq1dr8pm.vFn)(o), a = i ? await (0, import_chunk_gq1dr8pm.Ge)(this, I, "f").beta.memoryStores.memories.update(i.id, { memory_store_id: e.memoryStoreId, content: s, precondition: { type: "content_sha256", content_sha256: i.content_sha256 } }) : await (0, import_chunk_gq1dr8pm.Ge)(this, I, "f").beta.memoryStores.memories.create(e.memoryStoreId, { path: "/" + t, content: s });
    return e.refusedShas.delete(t), a.content_sha256;
  } catch (o) {
    if (i && (0, import_chunk_gq1dr8pm.Ape)(o, 404)) return await (0, import_chunk_gq1dr8pm.Ge)(this, u, "m", r).call(this, e, t, n, void 0);
    let s = o instanceof m || (0, import_chunk_gq1dr8pm.Ape)(o, 400) || (0, import_chunk_gq1dr8pm.Ape)(o, 413);
    if (i && (0, import_chunk_gq1dr8pm.Ape)(o, 409)) (0, import_chunk_gq1dr8pm.Ge)(this, d, "f").warn("memory changed both locally and remotely; the upload was refused and the local edit loses", { path: t, memory_store_id: e.memoryStoreId });
    else if (s && n !== void 0) e.refusedShas.set(t, n), (0, import_chunk_gq1dr8pm.Ge)(this, d, "f").warn("the server rejected this memory file, so it stays un-synced until its content changes", { path: t, memory_store_id: e.memoryStoreId, rejection: String(o) });
    else (0, import_chunk_gq1dr8pm.Ge)(this, d, "f").warn("failed to upload memory", { path: t, memory_store_id: e.memoryStoreId, error: String(o) });
    return;
  }
}, je = async function(e, t, n, i, o) {
  if (o.mode === "disabled") return o.suppressed++, i;
  let s = e.pendingDeletes.get(t);
  if (s === void 0) s = Date.now(), e.pendingDeletes.set(t, s);
  if (!o.waiveWindow && Date.now() - s < Dt) return i;
  let a, l;
  try {
    a = await e.files.hashFile(j) === Ye(e.memoryStoreId), l = await e.files.hashFile(t) === null;
  } catch (c) {
    if (!(c instanceof m) && !B(c)) throw c;
    a = l = false;
  }
  if (!a) return i;
  if (!l) return e.pendingDeletes.delete(t), i;
  if (!o.takeSlot()) return i;
  if (o.mode === "log_only") return (0, import_chunk_gq1dr8pm.Ge)(this, d, "f").info("log-only: sync would delete this memory on the server", { path: t, memory_store_id: e.memoryStoreId }), i;
  let f = await (0, import_chunk_gq1dr8pm.Ge)(this, u, "m", Be).call(this, e, t, n, i);
  if (f === void 0) e.pendingDeletes.delete(t);
  return f;
}, Be = async function(e, t, n, i) {
  try {
    await (0, import_chunk_gq1dr8pm.Ge)(this, I, "f").beta.memoryStores.memories.delete(n.id, { memory_store_id: e.memoryStoreId, expected_content_sha256: i });
  } catch (o) {
    if ((0, import_chunk_gq1dr8pm.Ape)(o, 404)) return;
    if ((0, import_chunk_gq1dr8pm.Ape)(o, 409) || (0, import_chunk_gq1dr8pm.Ape)(o, 412)) (0, import_chunk_gq1dr8pm.Ge)(this, d, "f").warn("memory deleted locally but changed remotely; keeping the remote version", { path: t, memory_store_id: e.memoryStoreId });
    else (0, import_chunk_gq1dr8pm.Ge)(this, d, "f").warn("failed to delete memory", { path: t, memory_store_id: e.memoryStoreId, error: String(o) });
    return i;
  }
  (0, import_chunk_gq1dr8pm.Ge)(this, d, "f").info("propagated local deletion", { path: t, memory_store_id: e.memoryStoreId });
  return;
};
function B(r2) {
  return typeof r2 === "object" && r2 !== null && typeof r2.code === "string";
}
async function Bt(r2, e) {
  if (!e) {
    await r2;
    return;
  }
  let t, n = new Promise((i) => {
    if (t = i, e.aborted) i();
  });
  e.addEventListener("abort", t, { once: true });
  try {
    await Promise.race([r2, n]);
  } finally {
    e.removeEventListener("abort", t);
  }
}
var le, _, S, K, A, b, Me, fe, V, de, he, D, C, Y, x, X, N, tt, Je, Ze = 102400, nt = 12e4, Yt = 262144, qt = 65536, Qe = Buffer.from(`
`), J = 102400, zt = 2e3, Gt = 200;
class ot extends import_chunk_jv7av99m.Mo {
  constructor(r2) {
    super(`bash command timed out after ${r2}ms`);
    this.name = "BashTimeoutError", this.timeoutMs = r2;
  }
}
var Ht = /\x1b\[[0-9;?]*[ -/]*[@-~]/g, Kt = w.glob;
function st(r2) {
  return r2 === void 0 ? Yt : r2;
}
function F(r2) {
  if (r2 === void 0) return;
  throw new import_chunk_jv7av99m.Mo("The `unrestrictedPaths` option you passed to the agent toolset (AgentToolContext) is no longer supported. The toolset's file tools (read, write, edit, glob, grep) are now always confined to the working directory plus the directories listed in `allowedRoots`. Remove `unrestrictedPaths` from your context; to let the file tools reach any other directory, add it to `allowedRoots`.");
}
function Pr(r2) {
  return [Jt(r2), Zt(r2), er(r2), tr(r2), ir(r2), nr(r2)];
}
async function Q(r2, e) {
  return F(r2.unrestrictedPaths), ke(r2.workdir, e, { allowedRoots: r2.allowedRoots ?? [] });
}
function at(r2, e) {
  return ue(r2.readOnlyRoots ?? [], e);
}
function Vt() {
  let r2 = {};
  for (let [e, t] of Object.entries(process.env)) {
    if (e.startsWith("ANTHROPIC_")) continue;
    r2[e] = t;
  }
  return r2;
}
var Xt = (() => {
  class r2 {
    constructor(e, t = Vt()) {
      le.add(this), _.set(this, void 0), S.set(this, ""), K.set(this, false), A.set(this, false), b.set(this, null), (0, import_chunk_gq1dr8pm.qr)(this, _, ve.spawn("/bin/bash", ["--noprofile", "--norc"], { cwd: e, env: { ...t, PS1: "", PS2: "", TERM: "dumb" }, stdio: ["pipe", "pipe", "pipe"], detached: true }), "f"), (0, import_chunk_gq1dr8pm.Ge)(this, _, "f").stdout.setEncoding("utf8"), (0, import_chunk_gq1dr8pm.Ge)(this, _, "f").stderr.setEncoding("utf8"), (0, import_chunk_gq1dr8pm.Ge)(this, _, "f").stdout.on("data", (n) => (0, import_chunk_gq1dr8pm.Ge)(this, le, "m", Me).call(this, n)), (0, import_chunk_gq1dr8pm.Ge)(this, _, "f").stderr.on("data", (n) => (0, import_chunk_gq1dr8pm.Ge)(this, le, "m", Me).call(this, n)), (0, import_chunk_gq1dr8pm.Ge)(this, _, "f").once("close", () => {
        (0, import_chunk_gq1dr8pm.qr)(this, A, true, "f");
        let n = (0, import_chunk_gq1dr8pm.Ge)(this, b, "f");
        (0, import_chunk_gq1dr8pm.qr)(this, b, null, "f"), n?.resolve();
      });
    }
    get closed() {
      return (0, import_chunk_gq1dr8pm.Ge)(this, A, "f");
    }
    async exec(e, t = {}) {
      if ((0, import_chunk_gq1dr8pm.Ge)(this, A, "f")) throw new import_chunk_jv7av99m.Mo("bash session terminated");
      let n = t.timeoutMs ?? nt, i = t.signal;
      i?.throwIfAborted(), (0, import_chunk_gq1dr8pm.qr)(this, S, "", "f"), (0, import_chunk_gq1dr8pm.qr)(this, K, false, "f");
      let o = `__ANT_CMD_${rt.randomUUID()}_DONE__`, s = `${o.slice(0, 8)}''${o.slice(8)}`, a = `{ ${e}
} </dev/null 2>&1; printf '\\n${s}%d\\n' $?
`;
      if ((0, import_chunk_gq1dr8pm.Ge)(this, _, "f").stdin.write(a), (0, import_chunk_gq1dr8pm.Ge)(this, S, "f").indexOf(o) < 0) {
        let { promise: O, resolve: v } = (0, import_chunk_gq1dr8pm.Byr)();
        (0, import_chunk_gq1dr8pm.qr)(this, b, { sentinel: o, resolve: v }, "f");
        let M, ee;
        try {
          await Promise.race([O, new Promise((ft, me) => {
            M = setTimeout(() => me(new ot(n)), n);
          }), new Promise((ft, me) => {
            if (!i) return;
            ee = () => me(i.reason), i.addEventListener("abort", ee, { once: true });
          })]);
        } finally {
          if (M) clearTimeout(M);
          if (ee && i) i.removeEventListener("abort", ee);
          (0, import_chunk_gq1dr8pm.qr)(this, b, null, "f");
        }
      }
      let l = (0, import_chunk_gq1dr8pm.Ge)(this, S, "f").indexOf(o);
      if (l < 0) throw new import_chunk_jv7av99m.Mo("bash session terminated");
      let c = (0, import_chunk_gq1dr8pm.Ge)(this, S, "f").slice(l + o.length).match(/^(-?\d+)/), h = c ? parseInt(c[1], 10) : -1, y = (0, import_chunk_gq1dr8pm.Ge)(this, S, "f").slice(0, l).replace(Ht, "").replace(/\n+$/, "");
      if ((0, import_chunk_gq1dr8pm.Ge)(this, K, "f")) y = `[output truncated]
${y}`;
      return { output: y, exitCode: h };
    }
    close() {
      if ((0, import_chunk_gq1dr8pm.Ge)(this, A, "f")) return;
      (0, import_chunk_gq1dr8pm.qr)(this, A, true, "f");
      let e = (0, import_chunk_gq1dr8pm.Ge)(this, b, "f");
      (0, import_chunk_gq1dr8pm.qr)(this, b, null, "f"), e?.resolve(), (0, import_chunk_gq1dr8pm.Ge)(this, _, "f").stdout.destroy(), (0, import_chunk_gq1dr8pm.Ge)(this, _, "f").stderr.destroy(), (0, import_chunk_gq1dr8pm.Ge)(this, _, "f").stdin.destroy();
      try {
        process.kill(-(0, import_chunk_gq1dr8pm.Ge)(this, _, "f").pid, "SIGKILL");
      } catch {
        (0, import_chunk_gq1dr8pm.Ge)(this, _, "f").kill("SIGKILL");
      }
      (0, import_chunk_gq1dr8pm.Ge)(this, _, "f").unref();
    }
  }
  return _ = /* @__PURE__ */ new WeakMap(), S = /* @__PURE__ */ new WeakMap(), K = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new WeakMap(), le = /* @__PURE__ */ new WeakSet(), Me = function(t) {
    if ((0, import_chunk_gq1dr8pm.qr)(this, S, (0, import_chunk_gq1dr8pm.Ge)(this, S, "f") + t, "f"), (0, import_chunk_gq1dr8pm.Ge)(this, S, "f").length > Ze) (0, import_chunk_gq1dr8pm.qr)(this, S, (0, import_chunk_gq1dr8pm.Ge)(this, S, "f").slice((0, import_chunk_gq1dr8pm.Ge)(this, S, "f").length - Ze), "f"), (0, import_chunk_gq1dr8pm.qr)(this, K, true, "f");
    if ((0, import_chunk_gq1dr8pm.Ge)(this, b, "f") && (0, import_chunk_gq1dr8pm.Ge)(this, S, "f").indexOf((0, import_chunk_gq1dr8pm.Ge)(this, b, "f").sentinel) >= 0) {
      let n = (0, import_chunk_gq1dr8pm.Ge)(this, b, "f");
      (0, import_chunk_gq1dr8pm.qr)(this, b, null, "f"), n.resolve();
    }
  }, r2;
})();
function Jt(r2) {
  F(r2.unrestrictedPaths);
  let e, t = Promise.resolve();
  return R({ name: "bash", description: "Run a bash command in a persistent shell. State (cwd, env vars) persists across calls.", inputSchema: { type: "object", properties: { command: { type: "string", description: "The command to run" }, restart: { type: "boolean", description: "Restart the persistent shell before running" }, timeout_ms: { type: "integer", description: "Per-call timeout in milliseconds" } } }, run: async ({ command: n, restart: i, timeout_ms: o }, s) => {
    let a = t, l = (0, import_chunk_gq1dr8pm.Byr)();
    t = l.promise;
    try {
      await a;
    } catch {
    }
    try {
      if (i) e?.close(), e = void 0;
      if (!n) {
        if (i) return "bash session restarted";
        throw new import_chunk_gq1dr8pm.Mb("bash: command is required");
      }
      e ?? (e = new Xt(r2.workdir, r2.env));
      try {
        let { output: f, exitCode: c } = await e.exec(n, { timeoutMs: o ?? nt, signal: s?.signal });
        if (c !== 0) throw new import_chunk_gq1dr8pm.Mb(f || `exit ${c}`);
        return f;
      } catch (f) {
        if (f instanceof import_chunk_gq1dr8pm.Mb) throw f;
        throw e.close(), e = void 0, new import_chunk_gq1dr8pm.Mb(`bash: ${f instanceof Error ? f.message : String(f)}`);
      }
    } finally {
      l.resolve();
    }
  }, close: () => {
    e?.close(), e = void 0;
  } });
}
function Zt(r2) {
  return F(r2.unrestrictedPaths), R({ name: "read", description: "Read a UTF-8 text file relative to the workdir.", inputSchema: { type: "object", properties: { file_path: { type: "string" }, view_range: { type: "array", items: { type: "integer" }, description: "[start_line, end_line] 1-indexed inclusive" } }, required: ["file_path"] }, run: async ({ file_path: e, view_range: t }) => {
    if (!e) throw new import_chunk_gq1dr8pm.Mb("read: file_path is required");
    let n = await Q(r2, e);
    if (t?.length && t.length !== 2) throw new import_chunk_gq1dr8pm.Mb("read: view_range must be [start_line, end_line]");
    let i;
    try {
      let c = await w.stat(n);
      if (!c.isFile()) throw new import_chunk_gq1dr8pm.Mb(`read: ${e} is not a regular file`);
      let h = st(r2.maxFileBytes);
      if (h !== null && c.size > h) {
        if (!t?.length) throw new import_chunk_gq1dr8pm.Mb(`read: ${e} is ${c.size} bytes, exceeds ${h}-byte limit. Use the view_range parameter to read specific line ranges, e.g. view_range: [1, 500].`);
        let [y, O] = t;
        return await Qt(n, e, y, O, h);
      }
      i = await w.readFile(n, "utf8");
    } catch (c) {
      if (c instanceof import_chunk_gq1dr8pm.Mb) throw c;
      throw new import_chunk_gq1dr8pm.Mb(`read: ${P(c, e)}`);
    }
    if (!t?.length) return i;
    let [o, s] = t, a = i.split(`
`), l = Math.max(0, o - 1), f = s > 0 ? s : a.length;
    return a.slice(l, f).join(`
`);
  } });
}
async function Qt(r2, e, t, n, i) {
  let o = new ct(e, t, n, i);
  if (o.rangeIsEmpty()) return "";
  let s = Z.createReadStream(r2, { highWaterMark: qt });
  try {
    for await (let a of s) if (o.collectFrom(a), o.rangeIsCollected()) break;
  } finally {
    s.destroy();
  }
  return o.text();
}
class ct {
  constructor(r2, e, t, n) {
    fe.add(this), V.set(this, void 0), de.set(this, void 0), he.set(this, void 0), D.set(this, void 0), C.set(this, void 0), Y.set(this, void 0), x.set(this, 0), X.set(this, []), N.set(this, 0), (0, import_chunk_gq1dr8pm.qr)(this, V, r2, "f"), (0, import_chunk_gq1dr8pm.qr)(this, de, e, "f"), (0, import_chunk_gq1dr8pm.qr)(this, he, t, "f"), (0, import_chunk_gq1dr8pm.qr)(this, D, Math.max(0, e - 1), "f"), (0, import_chunk_gq1dr8pm.qr)(this, C, t > 0 ? t : 1 / 0, "f"), (0, import_chunk_gq1dr8pm.qr)(this, Y, n, "f");
  }
  rangeIsEmpty() {
    return (0, import_chunk_gq1dr8pm.Ge)(this, C, "f") <= (0, import_chunk_gq1dr8pm.Ge)(this, D, "f");
  }
  rangeIsCollected() {
    return (0, import_chunk_gq1dr8pm.Ge)(this, x, "f") >= (0, import_chunk_gq1dr8pm.Ge)(this, C, "f");
  }
  collectFrom(r2) {
    var e;
    let t = 0;
    while (t < r2.length && !this.rangeIsCollected()) {
      let n = r2.indexOf(10, t), i = n < 0 ? r2.length : n;
      if ((0, import_chunk_gq1dr8pm.Ge)(this, x, "f") >= (0, import_chunk_gq1dr8pm.Ge)(this, D, "f")) (0, import_chunk_gq1dr8pm.Ge)(this, fe, "m", tt).call(this, r2.subarray(t, i), n >= 0);
      if (n < 0) break;
      (0, import_chunk_gq1dr8pm.qr)(this, x, (e = (0, import_chunk_gq1dr8pm.Ge)(this, x, "f"), e++, e), "f"), t = n + 1;
    }
  }
  text() {
    return Buffer.concat((0, import_chunk_gq1dr8pm.Ge)(this, X, "f"), (0, import_chunk_gq1dr8pm.Ge)(this, N, "f")).toString("utf8");
  }
}
V = /* @__PURE__ */ new WeakMap(), de = /* @__PURE__ */ new WeakMap(), he = /* @__PURE__ */ new WeakMap(), D = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap(), Y = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap(), X = /* @__PURE__ */ new WeakMap(), N = /* @__PURE__ */ new WeakMap(), fe = /* @__PURE__ */ new WeakSet(), tt = function(e, t) {
  if ((0, import_chunk_gq1dr8pm.Ge)(this, X, "f").push(e), (0, import_chunk_gq1dr8pm.qr)(this, N, (0, import_chunk_gq1dr8pm.Ge)(this, N, "f") + e.length, "f"), t && (0, import_chunk_gq1dr8pm.Ge)(this, x, "f") + 1 < (0, import_chunk_gq1dr8pm.Ge)(this, C, "f")) (0, import_chunk_gq1dr8pm.Ge)(this, X, "f").push(Qe), (0, import_chunk_gq1dr8pm.qr)(this, N, (0, import_chunk_gq1dr8pm.Ge)(this, N, "f") + Qe.length, "f");
  if ((0, import_chunk_gq1dr8pm.Ge)(this, N, "f") > (0, import_chunk_gq1dr8pm.Ge)(this, Y, "f")) throw (0, import_chunk_gq1dr8pm.Ge)(this, fe, "m", Je).call(this);
}, Je = function() {
  if ((0, import_chunk_gq1dr8pm.Ge)(this, C, "f") - (0, import_chunk_gq1dr8pm.Ge)(this, D, "f") === 1) return new import_chunk_gq1dr8pm.Mb(`read: line ${(0, import_chunk_gq1dr8pm.Ge)(this, D, "f") + 1} of ${(0, import_chunk_gq1dr8pm.Ge)(this, V, "f")} alone exceeds ${(0, import_chunk_gq1dr8pm.Ge)(this, Y, "f")}-byte limit. The read tool cannot return part of a line, so view_range cannot narrow this further.`);
  return new import_chunk_gq1dr8pm.Mb(`read: view_range [${(0, import_chunk_gq1dr8pm.Ge)(this, de, "f")}, ${(0, import_chunk_gq1dr8pm.Ge)(this, he, "f")}] of ${(0, import_chunk_gq1dr8pm.Ge)(this, V, "f")} exceeds ${(0, import_chunk_gq1dr8pm.Ge)(this, Y, "f")}-byte limit. Narrow the view_range to read a smaller portion.`);
};
function er(r2) {
  return F(r2.unrestrictedPaths), R({ name: "write", description: "Write a UTF-8 text file relative to the workdir, creating parent directories as needed.", inputSchema: { type: "object", properties: { file_path: { type: "string" }, content: { type: "string" } }, required: ["file_path", "content"] }, run: async ({ file_path: e, content: t }) => {
    if (!e) throw new import_chunk_gq1dr8pm.Mb("write: file_path is required");
    let n = await Q(r2, e), i = await at(r2, n);
    if (i !== void 0) throw new import_chunk_gq1dr8pm.Mb(`write: ${e} is inside read-only directory ${i}`);
    try {
      await w.mkdir(g.dirname(n), { recursive: true, mode: z }), await pe(n, t ?? "");
    } catch (o) {
      throw new import_chunk_gq1dr8pm.Mb(`write: ${P(o, e)}`);
    }
    return `wrote ${Buffer.byteLength(t ?? "")} bytes to ${e}`;
  } });
}
function tr(r2) {
  return F(r2.unrestrictedPaths), R({ name: "edit", description: "Replace old_string with new_string in a file. old_string must be unique unless replace_all.", inputSchema: { type: "object", properties: { file_path: { type: "string" }, old_string: { type: "string" }, new_string: { type: "string" }, replace_all: { type: "boolean" } }, required: ["file_path", "old_string", "new_string"] }, run: async ({ file_path: e, old_string: t, new_string: n, replace_all: i }) => {
    if (!e) throw new import_chunk_gq1dr8pm.Mb("edit: file_path is required");
    if (!t) throw new import_chunk_gq1dr8pm.Mb("edit: old_string is required");
    let o = await Q(r2, e), s = await at(r2, o);
    if (s !== void 0) throw new import_chunk_gq1dr8pm.Mb(`edit: ${e} is inside read-only directory ${s}`);
    let a;
    try {
      let c = await w.stat(o);
      if (!c.isFile()) throw new import_chunk_gq1dr8pm.Mb(`edit: ${e} is not a regular file`);
      let h = st(r2.maxFileBytes);
      if (h !== null && c.size > h) throw new import_chunk_gq1dr8pm.Mb(`edit: ${e} is ${c.size} bytes, exceeds ${h}-byte limit. The edit tool loads the whole file and cannot modify a file this large.`);
      a = await w.readFile(o, "utf8");
    } catch (c) {
      if (c instanceof import_chunk_gq1dr8pm.Mb) throw c;
      throw new import_chunk_gq1dr8pm.Mb(`edit: ${P(c, e)}`);
    }
    let l = a.split(t).length - 1;
    if (l === 0) throw new import_chunk_gq1dr8pm.Mb(`edit: old_string not found in ${e}`);
    let f;
    if (i) f = a.split(t).join(n);
    else {
      if (l > 1) throw new import_chunk_gq1dr8pm.Mb(`edit: old_string appears ${l} times in ${e} (must be unique)`);
      f = a.replace(t, () => n);
    }
    try {
      await pe(o, f);
    } catch (c) {
      throw new import_chunk_gq1dr8pm.Mb(`edit: write: ${P(c, e)}`);
    }
    return `edited ${e} (${i ? l : 1} replacement(s))`;
  } });
}
function rr(r2) {
  return r2.split(/[\\/{},]/).includes("..");
}
function ir(r2) {
  return F(r2.unrestrictedPaths), R({ name: "glob", description: "Match files under the workdir against a glob pattern. Results are mtime-sorted, newest first.", inputSchema: { type: "object", properties: { pattern: { type: "string" }, path: { type: "string", description: "Directory to search in. Defaults to the workdir." } }, required: ["pattern"] }, run: async ({ pattern: e, path: t }) => {
    if (!e) throw new import_chunk_gq1dr8pm.Mb("glob: pattern is required");
    if (g.isAbsolute(e)) throw new import_chunk_gq1dr8pm.Mb("glob: absolute pattern not permitted; pass a relative pattern (and optionally path)");
    if (rr(e)) throw new import_chunk_gq1dr8pm.Mb('glob: ".." is not permitted in the pattern');
    let n = t ? await Q(r2, t) : g.resolve(r2.workdir), i = t ? n : await q(n), o = [], s = lt;
    try {
      for await (let a of Kt(e, { cwd: n, withFileTypes: true, exclude: (l) => l.name === ".git" || l.name === "node_modules" })) {
        if (s-- <= 0) break;
        if (!a.isFile()) continue;
        let l = g.join(a.parentPath, a.name), f;
        try {
          f = await w.realpath(l);
        } catch {
          continue;
        }
        if (!te(i, f)) continue;
        let c = 0;
        try {
          c = (await w.stat(l)).mtimeMs;
        } catch {
        }
        o.push({ path: l, mtime: c });
      }
    } catch (a) {
      throw new import_chunk_gq1dr8pm.Mb(`glob: ${a instanceof Error ? a.message : String(a)}`);
    }
    if (o.length === 0) return "no matches";
    return o.sort((a, l) => l.mtime - a.mtime), o.slice(0, Gt).map((a) => a.path).join(`
`);
  } });
}
function nr(r2) {
  return F(r2.unrestrictedPaths), R({ name: "grep", description: "Search file contents for a regex. Uses ripgrep if available, otherwise a built-in walker.", inputSchema: { type: "object", properties: { pattern: { type: "string" }, path: { type: "string" } }, required: ["pattern"] }, run: async ({ pattern: e, path: t }, n) => {
    if (!e) throw new import_chunk_gq1dr8pm.Mb("grep: pattern is required");
    let i = g.resolve(r2.workdir);
    if (t) i = await Q(r2, t);
    let o = await lr();
    return o ? or(o, e, i, n?.signal) : sr(e, i, n?.signal);
  } });
}
function or(r2, e, t, n) {
  return new Promise((i, o) => {
    let s = ve.spawn(r2, ["-n", "--no-heading", "-e", e, "--", t], { ...n ? { signal: n } : {} }), a = "", l = "", f = false;
    s.stdout.on("data", (c) => {
      if (f) return;
      if (a += c, a.length > J) f = true, a = a.slice(0, J), s.kill("SIGKILL");
    }), s.stderr.on("data", (c) => l += c), s.on("close", (c) => {
      if (n?.aborted) return o(new import_chunk_gq1dr8pm.Mb("grep: aborted"));
      if (f) return i(a + `
[output truncated at ${J} bytes]`);
      if (c === 0) return i(a);
      if (c === 1) return i("no matches");
      o(new import_chunk_gq1dr8pm.Mb(`grep: rg failed: ${l || `exit ${c}`}`));
    }), s.on("error", (c) => {
      if (n?.aborted) return o(new import_chunk_gq1dr8pm.Mb("grep: aborted"));
      o(new import_chunk_gq1dr8pm.Mb(`grep: rg failed: ${c.message}`));
    });
  });
}
async function sr(r2, e, t) {
  let n;
  try {
    n = new RegExp(r2);
  } catch (l) {
    throw new import_chunk_gq1dr8pm.Mb(`grep: invalid regex: ${l instanceof Error ? l.message : String(l)}`);
  }
  let i = [], o = J, s = (l) => {
    if (o -= l.length + 1, o < 0) return i.push(`[output truncated at ${J} bytes]`), false;
    return i.push(l), true;
  };
  if ((await w.stat(e).catch(() => null))?.isFile()) await et(e, n, s);
  else await cr(e, "", (l) => et(g.join(e, l), n, s), t);
  if (t?.aborted) throw new import_chunk_gq1dr8pm.Mb("grep: aborted");
  if (i.length === 0) return "no matches";
  return i.join(`
`);
}
async function et(r2, e, t) {
  let n = Z.createReadStream(r2, { encoding: "utf8" }), i = it.createInterface({ input: n, crlfDelay: 1 / 0 }), o = 0;
  try {
    for await (let s of i) {
      if (o++, s.length > zt) continue;
      if (e.test(s) && !t(`${r2}:${o}:${s}`)) return false;
    }
  } catch {
  } finally {
    n.destroy();
  }
  return true;
}
var ar = 40, lt = 5e4;
async function cr(r2, e, t, n) {
  let i = lt;
  async function o(s, a) {
    if (a > ar) return true;
    if (n?.aborted) return false;
    let l;
    try {
      l = await w.readdir(g.join(r2, s), { withFileTypes: true });
    } catch {
      return true;
    }
    for (let f of l) {
      if (f.name === ".git" || f.name === "node_modules") continue;
      if (i-- <= 0) return false;
      if (n?.aborted) return false;
      let c = s ? g.join(s, f.name) : f.name;
      if (f.isDirectory()) {
        if (!await o(c, a + 1)) return false;
      } else if (f.isFile()) {
        if (await t(c) === false) return false;
      }
    }
    return true;
  }
  await o(e, 0);
}
async function lr() {
  let r2 = (process.env.PATH ?? "").split(g.delimiter);
  for (let e of r2) {
    let t = g.join(e, "rg");
    try {
      return await w.access(t, Z.constants.X_OK), t;
    } catch {
    }
  }
  return null;
}
