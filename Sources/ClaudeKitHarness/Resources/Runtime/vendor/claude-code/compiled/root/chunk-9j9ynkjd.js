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
var chunk_9j9ynkjd_exports = {};
__export(chunk_9j9ynkjd_exports, {
  Ebn: () => Ebn
});
module.exports = __toCommonJS(chunk_9j9ynkjd_exports);
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_2t5dst6n = require("/$bunfs/root/chunk-2t5dst6n.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_zs6b24vw = require("/$bunfs/root/chunk-zs6b24vw.js");
var import_chunk_s4tz6qdb = require("/$bunfs/root/chunk-s4tz6qdb.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
function Ebn({ children: n }) {
  let [t, u] = (0, import_chunk_bs4h6795.y)(null), [l, c] = (0, import_chunk_bs4h6795.y)(false), r = (0, import_chunk_bs4h6795.I)({ current: 0, revealedAt: null });
  if ((0, import_chunk_bs4h6795.H)(() => {
    let s = null;
    return (0, import_chunk_zs6b24vw.WJt)((f, d, R) => new Promise((a) => {
      s = a, r.current = { current: 0, revealedAt: null };
      function p(o, v) {
        if (s !== a || v !== r.current.current) return false;
        return s = null, u(null), c(o === "rejected"), a(o), true;
      }
      u({ settings: f, baseline: d, version: 0, answer: p }), (async () => {
        for await (let o of R) {
          if (s !== a) return;
          r.current = { current: r.current.current + 1, revealedAt: null }, u({ settings: o.settings, baseline: o.baseline, version: r.current.current, answer: p });
        }
      })().catch((o) => (0, import_chunk_k449cc64.i)(o));
    })), () => {
      (0, import_chunk_zs6b24vw.WJt)(null);
      let f = s;
      s = null, f?.("deferred_no_consent_surface");
    };
  }, []), l) return null;
  if (t === null) return n;
  return (0, import_chunk_a46xeenj.e)(m, { review: t, gate: r.current });
}
function m({ review: n, gate: t }) {
  let u = (0, import_chunk_8bkqeb5d.si)();
  (0, import_chunk_bs4h6795.H)(() => {
    if (t.current === n.version) t.revealedAt = Date.now();
  }, [t, n.version, n.settings, n.baseline]);
  function l() {
    return t.current === n.version && t.revealedAt !== null && !(0, import_chunk_2t5dst6n.Ha)(u, t.revealedAt, import_chunk_2t5dst6n._s);
  }
  function c(r) {
    if (!l()) {
      if (t.revealedAt !== null) t.revealedAt = Date.now();
      return false;
    }
    return n.answer(r, n.version);
  }
  return (0, import_chunk_a46xeenj.e)(import_chunk_s4tz6qdb.omt, { settings: n.settings, baseline: n.baseline, reveal: "org_config_hold", wouldTakeAnswer: l, onAccept: () => c("approved"), onReject: () => c("rejected") });
}
