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
var chunk_tnqn47cg_exports = {};
__export(chunk_tnqn47cg_exports, {
  ENa: () => ENa,
  kNa: () => kNa,
  nAn: () => nAn,
  rAn: () => rAn,
  vNa: () => vNa
});
module.exports = __toCommonJS(chunk_tnqn47cg_exports);
var import_chunk_6s9tac84 = require("/$bunfs/root/chunk-6s9tac84.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_crypto = require("crypto");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_stream = require("stream");
var import_promises2 = require("stream/promises");
var nAn = "refs/seed/stash", rAn = "refs/seed/root", o = "refs/seed/", g = 72e5, m = 65536, E = /^refs\/seed\/(\d+)-[0-9a-f]{16}\/(?:stash|root)$/;
function kNa(e = Date.now()) {
  let t = `${e}-${(0, import_crypto.randomBytes)(8).toString("hex")}`;
  return { stash: `${o}${t}/stash`, root: `${o}${t}/root` };
}
function ENa(e, t = Date.now()) {
  return e.filter((r) => {
    if (r === nAn || r === rAn) return true;
    let s = E.exec(r);
    return s !== null && Math.abs(t - Number(s[1])) > g;
  });
}
async function vNa(e, t, r, s) {
  let i = new a(r);
  try {
    return await (0, import_promises2.pipeline)((0, import_fs.createReadStream)(e), i, (0, import_fs.createWriteStream)(t, { flags: "wx" }), { signal: s }), { ok: true, sizeBytes: i.outputBytes };
  } catch (n) {
    if ((0, import_chunk_jv7av99m.w)(n) !== "EEXIST") await (0, import_promises.unlink)(t).catch(() => {
    });
    return { ok: false, error: (0, import_chunk_jv7av99m.d)(n) };
  }
}
class a extends import_stream.Transform {
  labels;
  outputBytes = 0;
  state = "signature";
  version = 2;
  sawRef = false;
  pending = Buffer.alloc(0);
  applied = /* @__PURE__ */ new Set();
  constructor(e) {
    super();
    this.labels = e;
  }
  _transform(e, t, r) {
    try {
      if (this.state === "pack") this.writeOut(e);
      else this.pending = this.pending.length === 0 ? e : Buffer.concat([this.pending, e]), this.consumeHeaderLines();
      r();
    } catch (s) {
      r((0, import_chunk_jv7av99m.D)(s));
    }
  }
  _flush(e) {
    e(this.state === "pack" ? null : Error("bundle ended before the end of its header"));
  }
  writeOut(e) {
    let t = typeof e === "string" ? Buffer.from(e, "latin1") : e;
    this.outputBytes += t.length, this.push(t);
  }
  consumeHeaderLines() {
    for (; ; ) {
      let e = this.pending.indexOf(10);
      if (e < 0) {
        if (this.pending.length > m) throw Error("bundle header line too long");
        return;
      }
      let t = this.pending.toString("latin1", 0, e);
      if (this.pending = this.pending.subarray(e + 1), this.state === "signature") {
        if (t === "# v2 git bundle") this.version = 2;
        else if (t === "# v3 git bundle") this.version = 3;
        else throw Error("not a v2 or v3 git bundle");
        this.state = "header", this.writeOut(`${t}
`);
        continue;
      }
      if (t === "") {
        if (this.applied.size !== this.labels.size) throw Error("bundle header does not name every ref to relabel");
        this.state = "pack", this.writeOut(`
`), this.writeOut(this.pending), this.pending = Buffer.alloc(0);
        return;
      }
      this.writeOut(`${this.headerLine(t)}
`);
    }
  }
  headerLine(e) {
    if (e.startsWith("@")) {
      if (this.version !== 3 || this.sawRef) throw Error("bundle capability line out of place");
      return e;
    }
    this.sawRef = true;
    let t = e.indexOf(" "), r = t < 0 ? e : e.slice(0, t);
    if (e.startsWith("-")) {
      if (!import_chunk_6s9tac84.Qfe.test(r.slice(1))) throw Error("malformed bundle prerequisite line");
      return e;
    }
    let s = r, i = e.slice(t + 1);
    if (t < 0 || i === "" || !import_chunk_6s9tac84.Qfe.test(s)) throw Error("malformed bundle ref line");
    let n = this.labels.get(i);
    if (n !== void 0) {
      if (this.applied.has(i)) throw Error("bundle header names a ref to relabel twice");
      return this.applied.add(i), `${s} ${n}`;
    }
    if (i.startsWith(o)) throw Error("bundle header carries a seed ref that is not this build's");
    return e;
  }
}
