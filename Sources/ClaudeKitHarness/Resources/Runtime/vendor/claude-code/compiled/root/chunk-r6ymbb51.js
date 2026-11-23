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
var chunk_r6ymbb51_exports = {};
__export(chunk_r6ymbb51_exports, {
  q7l: () => q7l,
  sqo: () => sqo
});
module.exports = __toCommonJS(chunk_r6ymbb51_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_syr33dp2 = require("/$bunfs/root/chunk-syr33dp2.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_cee6q0wn = require("/$bunfs/root/chunk-cee6q0wn.js");
var import_chunk_e1ww8aev = require("/$bunfs/root/chunk-e1ww8aev.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var a = "office_device.uploaded_files", f = 27e5, u = /^wd_[0-9a-hjkmnp-tv-z]{26}$/;
function s(e) {
  return e.split("/").every((n) => (0, import_chunk_e1ww8aev.Kgt)(n) && n.trim() !== "") && (0, import_chunk_kx2fp6pc.mh)((0, import_chunk_syr33dp2.vp)(e)) === e;
}
function l({ root: e, path: n }) {
  return typeof e === "string" && u.test(e) && typeof n === "string" && `${import_chunk_cee6q0wn.ROr}${e}/${n}`.length <= 1024 && s(n) ? { root: e, path: n } : void 0;
}
function d(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e >= 0;
}
function m(e) {
  return (0, import_chunk_ma3kja9f.T)(e) && typeof e.path === "string" && e.path.length <= 255 && s(e.path) && typeof e.file_uuid === "string" && (0, import_chunk_mzmcvr6c.jQe)(e.file_uuid) && d(e.size) && typeof e.sha256 === "string" && /^[0-9a-f]{64}$/.test(e.sha256);
}
function c({ companion_files: e }) {
  return Array.isArray(e) && e.length > 0 && e.length <= 16 && e.every(m) ? e.map(({ path: n, file_uuid: o, size: t, sha256: i }) => ({ path: n, file_uuid: o, size: t, sha256: i })) : void 0;
}
function _(e) {
  if (!(0, import_chunk_ma3kja9f.T)(e)) return;
  let { ref: n, file_uuid: o, name: t, size: i, is_image: r } = e;
  return e.ok === true && typeof n === "string" && import_chunk_cee6q0wn.u9i.test(n) && typeof o === "string" && (0, import_chunk_mzmcvr6c.jQe)(o) && typeof t === "string" && (0, import_chunk_e1ww8aev.Kgt)(t) && !/^\s*$|^\.{1,2}$/.test((0, import_chunk_syr33dp2.vp)(t)) && d(i) && typeof r === "boolean" ? { ref: n, file_uuid: o, name: t, size: i, is_image: r, place: l(e), companion_files: c(e) } : void 0;
}
class p {
  #o = () => {
    return;
  };
  #e = () => {
  };
  #n = /* @__PURE__ */ new Map();
  bind(e, n) {
    this.#o = e, this.#e = n;
  }
  reportsOn(e) {
    return e.mcpInfo?.listedAsDeliveringFiles === true && e.mcpInfo.serverName === this.#o();
  }
  keep(e, n) {
    if (this.reportsOn(e)) {
      this.#e(this.#t(n));
      return;
    }
    this.#e(e.mcpInfo?.serverName === import_chunk_qdcbcsg7.$n && this.#o() === void 0 ? "no_bridge" : "not_the_bridge");
  }
  keepFromAnswer(e) {
    this.#e(this.#t(e));
  }
  #t(e) {
    if (e === void 0) return "no_report";
    if (!(0, import_chunk_ma3kja9f.T)(e) || e.v !== 1 || !Array.isArray(e.files)) return "report_unreadable";
    let n = "none_uploaded";
    for (let o of e.files) {
      let t = _(o);
      if (t !== void 0) {
        this.#n.set(t.ref, { file: t, at: Date.now() });
        let i = t.place === void 0 && (0, import_chunk_ma3kja9f.T)(o) && (o.root !== void 0 || o.path !== void 0), r = t.companion_files === void 0 && (0, import_chunk_ma3kja9f.T)(o) && o.companion_files !== void 0 && !(Array.isArray(o.companion_files) && o.companion_files.length === 0);
        if (n === "none_uploaded" || n === "kept") n = i ? "place_dropped" : r ? "companions_dropped" : "kept";
      } else if ((0, import_chunk_ma3kja9f.T)(o) && typeof o.ref === "string") this.#n.delete(o.ref), n = o.ok === false ? n : "entry_unreadable";
      else n = "entry_unreadable";
    }
    return n;
  }
  fresh(e) {
    let n = this.#n.get(e);
    if (n !== void 0 && Date.now() - n.at >= f) {
      this.#n.delete(e);
      return;
    }
    return n?.file;
  }
}
var sqo = new import_chunk_pzzqg6s3.ze(() => new p());
function q7l(e, n, o) {
  sqo.peek(e)?.keep(n, o?._meta?.[a]);
}
