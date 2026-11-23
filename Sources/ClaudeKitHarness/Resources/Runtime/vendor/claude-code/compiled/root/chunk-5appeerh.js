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
var chunk_5appeerh_exports = {};
__export(chunk_5appeerh_exports, {
  FFs: () => FFs,
  Gi: () => Gi,
  K: () => K,
  LI: () => LI,
  Tn: () => Tn,
  m5n: () => m5n,
  me: () => me,
  qt: () => qt
});
module.exports = __toCommonJS(chunk_5appeerh_exports);
var import_chunk_4pgkmw1e = require("/$bunfs/root/chunk-4pgkmw1e.js");
class FFs {
  now() {
    return Date.now();
  }
  monotonicNow() {
    return performance.now();
  }
  setTimeout(t, r, e) {
    let o = setTimeout(t, r);
    if (e?.unref) o.unref();
    return () => clearTimeout(o);
  }
}
var Gi = new FFs();
function K(t, r, e) {
  return new Promise((o, n) => {
    if (r?.aborted) {
      if (e?.throwOnAbort || e?.abortError) n(e.abortError?.() ?? Error("aborted"));
      else o();
      return;
    }
    let i = (e?.clock ?? Gi).setTimeout(() => {
      r?.removeEventListener("abort", m), o();
    }, t, { unref: e?.unref });
    function m() {
      if (i(), e?.throwOnAbort || e?.abortError) n(e.abortError?.() ?? Error("aborted"));
      else o();
    }
    r?.addEventListener("abort", m, { once: true });
  });
}
var u = 6e4;
function LI({ baseMs: t, capMs: r = u, attempt: e, floorMs: o = 0, random: n = Math.random }) {
  return Math.floor((0, import_chunk_4pgkmw1e.Id)({ attempt: Math.max(0, e) + 1, baseMs: t, capMs: r, jitter: { kind: "full", floorMs: o }, random: n }));
}
function a(t, r) {
  t(Error(r));
}
function qt(t, r, e) {
  let o, n = new Promise((i, m) => {
    o = setTimeout(a, r, m, e);
  });
  return Promise.race([t, n]).finally(() => {
    if (o !== void 0) clearTimeout(o);
  });
}
var m5n = (t, r) => {
  let e = setTimeout(t, r);
  return () => clearTimeout(e);
};
function me(t, r, e = m5n) {
  let o = () => {
  }, n = new Promise((i) => {
    o = e(() => i(void 0), r);
  });
  return Promise.race([t, n]).finally(o);
}
async function Tn(t, r, e) {
  let o = () => {
    t.catch(() => {
    });
  };
  if (r.aborted) throw o(), e();
  let n = () => {
  };
  try {
    return await Promise.race([t, new Promise((i, m) => {
      n = () => m(e()), r.addEventListener("abort", n, { once: true });
    })]);
  } catch (i) {
    throw o(), i;
  } finally {
    r.removeEventListener("abort", n);
  }
}
