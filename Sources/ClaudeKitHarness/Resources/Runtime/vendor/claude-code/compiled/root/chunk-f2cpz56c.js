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
var chunk_f2cpz56c_exports = {};
__export(chunk_f2cpz56c_exports, {
  JH: () => JH,
  zcn: () => zcn
});
module.exports = __toCommonJS(chunk_f2cpz56c_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_hazyxdac = require("/$bunfs/root/chunk-hazyxdac.js");
var import_chunk_0bfd61k9 = require("/$bunfs/root/chunk-0bfd61k9.js");
var import_chunk_xrtwe9rg = require("/$bunfs/root/chunk-xrtwe9rg.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
function f() {
  let e = (0, import_chunk_hazyxdac.qde)();
  return e === null ? null : { storeDir: e, storePath: (0, import_path.join)(e, ".credentials.json") };
}
var N = import_fs.constants.O_NONBLOCK, c = 1048576;
async function P(e) {
  try {
    return { kind: "open", fileHandle: await (0, import_promises.open)(e, import_fs.constants.O_RDONLY | import_fs.constants.O_NOFOLLOW | N) };
  } catch (t) {
    let n = (0, import_chunk_jv7av99m.w)(t);
    if (n === "ELOOP") return { kind: "refused-symlink" };
    return { kind: "error", code: n };
  }
}
async function T(e, t) {
  let n = import_fs.constants.O_WRONLY | import_fs.constants.O_CREAT | import_fs.constants.O_TRUNC;
  try {
    return { kind: "open", fileHandle: await (0, import_promises.open)(e, n | import_fs.constants.O_NOFOLLOW, t) };
  } catch (r) {
    let a = (0, import_chunk_jv7av99m.w)(r);
    if (a === "ELOOP") return { kind: "refused-symlink" };
    return { kind: "error", code: a };
  }
}
function g(e) {
  return e.length > 0 && !e.includes("\0") && (0, import_path.isAbsolute)(e);
}
var v = /* @__PURE__ */ new Set([".oauth_token", ".api_key", ".session_ingress_token"]);
function m(e) {
  return e === "ENOENT" ? { state: "absent" } : { state: "read-failed", code: e };
}
function E(e) {
  return e === "ENOENT" ? "absent" : "read-failed";
}
function B(e, t) {
  if (e === "ENOENT" || e === "EISDIR" || e === "ENOTDIR") return "absent";
  if ((e === "EACCES" || e === "EPERM") && t !== "win32") return "absent";
  return "read-failed";
}
async function k(e) {
  let t = f();
  if (t === null) return { state: "absent" };
  let n = await P(t.storePath);
  switch (n.kind) {
    case "refused-symlink":
      return { state: "refused-symlink" };
    case "error":
      return e(n.code) === "absent" ? { state: "absent" } : { state: "read-failed", code: n.code };
    case "open": {
      let { fileHandle: r } = n, a, l, O;
      try {
        let s = await r.stat();
        if (!s.isFile()) {
          if (s.isDirectory()) return e("EISDIR") === "absent" ? { state: "absent" } : { state: "read-failed", code: "EISDIR" };
          return { state: "corrupt" };
        }
        if (s.size > c) return { state: "corrupt" };
        l = s.uid, O = s.mode;
        let i = Buffer.alloc(Math.min(s.size, c) + 1), d = 0;
        for (; ; ) {
          let { bytesRead: S } = await r.read(i, d, i.length - d, d);
          if (S === 0) break;
          if (d += S, d === i.length) {
            if (i.length > c) return { state: "corrupt" };
            let C = Buffer.alloc(c + 1);
            i.copy(C, 0, 0, d), i = C;
          }
        }
        a = i.toString("utf8", 0, d);
      } catch (s) {
        let i = (0, import_chunk_jv7av99m.w)(s);
        return e(i) === "absent" ? { state: "absent" } : { state: "read-failed", code: i };
      } finally {
        await r.close().catch(() => {
        });
      }
      let u;
      try {
        u = JSON.parse(a);
      } catch {
        return { state: "corrupt" };
      }
      if (u === null) return { state: "absent" };
      return { state: "present", data: u, uid: l, mode: O };
    }
  }
}
var y = { readCredentials() {
  return k(E);
}, readCredentialsStrict() {
  return k((e) => B(e, "darwin"));
}, async writeCredentials(e) {
  let t = f();
  if (t === null) return { state: "write-failed", code: "ENOTSUP" };
  let { storeDir: n, storePath: r } = t;
  try {
    await (0, import_chunk_w578pjby.le)().mkdir(n), await (0, import_chunk_q7qjcthc.FM)(r, (0, import_chunk_w578pjby._)(e), { mode: 384, exactMode: 384, flush: true, flushForgivesEbadf: true });
  } catch (a) {
    return await (0, import_chunk_0bfd61k9.xIo)(a), { state: "write-failed", code: (0, import_chunk_jv7av99m.w)(a) };
  }
  return { state: "written" };
}, async deleteCredentials() {
  let e = f();
  return e === null ? { state: "delete-failed", code: "ENOTSUP" } : R(e.storePath);
}, async discardSpentCredentialFile(e) {
  if ((0, import_chunk_f9x2f6cx.Y)()) return { state: "delete-failed", code: "ENOTSUP" };
  return R(e);
}, async readHandoffCredential(e, { symlinkAtPath: t }) {
  if ((0, import_chunk_f9x2f6cx.Y)()) return { state: "read-failed", code: "ENOTSUP" };
  if (!g(e)) return { state: "read-failed", code: "EINVAL" };
  let n;
  if (t === "follow") try {
    n = await (0, import_promises.open)(e, import_fs.constants.O_RDONLY | N);
  } catch (r) {
    return m((0, import_chunk_jv7av99m.w)(r));
  }
  else {
    let r = await P(e);
    switch (r.kind) {
      case "refused-symlink":
        return { state: "read-failed", code: "ELOOP" };
      case "error":
        return m(r.code);
      case "open":
        n = r.fileHandle;
    }
  }
  try {
    if (!(await n.stat()).isFile()) return { state: "read-failed", code: "EINVAL" };
    let r = Buffer.alloc(import_chunk_xrtwe9rg.BMr + 1), a = 0;
    for (; ; ) {
      let { bytesRead: l } = await n.read(r, a, r.length - a, a);
      if (l === 0) break;
      if (a += l, a > import_chunk_xrtwe9rg.BMr) return { state: "read-failed", code: "EFBIG" };
    }
    return { state: "present", contents: r.toString("utf8", 0, a) };
  } catch (r) {
    return m((0, import_chunk_jv7av99m.w)(r));
  } finally {
    await n.close().catch(() => {
    });
  }
}, async writeHandoffCredential(e, t) {
  if ((0, import_chunk_f9x2f6cx.Y)()) return { state: "write-failed", code: "ENOTSUP" };
  if (!g(e)) return { state: "write-failed", code: "EINVAL" };
  if (!v.has((0, import_path.basename)(e))) return { state: "write-failed", code: "EINVAL" };
  try {
    await (0, import_promises.mkdir)((0, import_path.dirname)(e), { recursive: true, mode: 448 });
  } catch (r) {
    return { state: "write-failed", code: (0, import_chunk_jv7av99m.w)(r) };
  }
  let n = await T(e, 384);
  switch (n.kind) {
    case "refused-symlink":
      return { state: "write-failed", code: "ELOOP" };
    case "error":
      return { state: "write-failed", code: n.code };
    case "open":
      try {
        return await n.fileHandle.writeFile(t, { encoding: "utf8" }), { state: "written" };
      } catch (r) {
        return { state: "write-failed", code: (0, import_chunk_jv7av99m.w)(r) };
      } finally {
        await n.fileHandle.close().catch(() => {
        });
      }
  }
}, async probeCredentials() {
  let e = f();
  if (e === null) return { state: "absent" };
  let t;
  try {
    t = await (0, import_promises.lstat)(e.storePath, { bigint: true });
  } catch (n) {
    let r = (0, import_chunk_jv7av99m.w)(n);
    return E(r) === "absent" ? { state: "absent" } : { state: "read-failed", code: r };
  }
  if (t.isSymbolicLink()) return { state: "read-failed", code: "ELOOP" };
  return { state: "present", version: `${t.dev}:${t.ino}:${t.size}:${t.mtimeNs}` };
} };
async function R(e) {
  try {
    return await (0, import_chunk_w578pjby.le)().unlink(e), { state: "deleted" };
  } catch (t) {
    let n = (0, import_chunk_jv7av99m.w)(t);
    if (n === "ENOENT") return { state: "deleted" };
    return { state: "delete-failed", code: n };
  }
}
var A = Symbol("secureStorage.CredentialsStoreHandle");
function JH(e, t = y) {
  return (0, import_chunk_m15w38ag.ne)() && e !== void 0 ? I(t) : void 0;
}
function zcn(e) {
  return { storageV5: e, credentials: JH(e) };
}
function I(e = y) {
  return { ...e, [A]: "CredentialsStoreHandle" };
}
