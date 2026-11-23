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
var chunk_6n3q0gvw_exports = {};
__export(chunk_6n3q0gvw_exports, {
  DL: () => DL,
  Jjs: () => Jjs,
  i9t: () => i9t
});
module.exports = __toCommonJS(chunk_6n3q0gvw_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_7azstk6m = require("/$bunfs/root/chunk-7azstk6m.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_gpb7vtp4 = require("/$bunfs/root/chunk-gpb7vtp4.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_f3ymc800 = require("/$bunfs/root/chunk-f3ymc800.js");
var import_chunk_6fvsq616 = require("/$bunfs/root/chunk-6fvsq616.js");
var import_chunk_96ypthzh = require("/$bunfs/root/chunk-96ypthzh.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
var F = /* @__PURE__ */ new WeakMap();
function oe(i) {
  let t = F.get(i);
  if (!t) t = { root: i, screen: null, rendered: false, run: 0, keys: 0, jobWrites: Promise.resolve() }, F.set(i, t);
  return t;
}
function i9t(i, t, a = {}) {
  let n = oe(i), c = ++n.run, f = a.marksJobBlocked === true && !!import_chunk_c203g5kd.s.CLAUDE_JOB_DIR;
  return new Promise((d, m) => {
    let u = false;
    function S(r) {
      if (u || n.run !== c) return;
      u = true, m(r);
    }
    function x(r) {
      if ((0, import_chunk_96ypthzh.F_a)()) {
        n.run++, r();
        return;
      }
      if ((0, import_chunk_865at33z.yke)()) {
        Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-p174a85v.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-yyfrb8gz.js")))]).then(([{ detachFromBackgroundHost: p }, { tabsHostDetachMessage: v }]) => p({ message: v({ kind: "quit" }) }));
        return;
      }
      n.run++, b(n, null), r(), (0, import_chunk_bzyb60p0.Da)(1);
    }
    function y(r) {
      let p = n.jobWrites.then(r).catch(() => {
        return;
      });
      return n.jobWrites = p, p;
    }
    function h(r) {
      for (let p = r; p < t.length; p++) {
        let v = false, N = true, A = false, D, L = false, U = () => {
          if (f && !D && !v && !L) D = y(() => Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-kq96bpjm.js"))).then((l) => l.markStartupDialogBlocked()));
        }, T = () => {
          let l = D;
          if (D = void 0, L = true, l) y(async () => {
            let Q = await l;
            if (Q) {
              let Y = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-kq96bpjm.js")));
              await Y.clearStartupDialogBlocked(Q);
            }
          });
        }, E = (l) => {
          if (v || u || n.run !== c) return;
          if (v = true, A = l === "stop", T(), !N) g(A ? "done" : h(p + 1));
        }, w;
        try {
          w = t[p](E);
        } catch (l) {
          return S(l), "failed";
        } finally {
          N = false;
        }
        if (v) {
          if (A) return "done";
          continue;
        }
        if (w instanceof Promise) w = w.catch((l) => (S(l), new Promise(() => {
        }))), w.then((l) => {
          if (l !== null && l !== void 0) U();
        });
        else if (w === null || w === void 0) {
          v = true;
          continue;
        } else U();
        return { key: ++n.keys, dialog: w, pass: () => E(), tornDown: T, replaced: T, exit: x, options: a };
      }
      return "done";
    }
    function g(r) {
      if (r === "failed" || n.run !== c) return;
      if (r === "done") {
        b(n, null), d();
        return;
      }
      if (!n.rendered && r.dialog instanceof Promise) {
        n.screen = r, r.dialog.then((p) => {
          if (n.screen !== r || n.run !== c) return;
          if (p === null || p === void 0) r.pass();
          else g({ ...r, dialog: p });
        });
        return;
      }
      if ((0, import_chunk_xfj2cwfv.nn)()) return;
      b(n, r);
    }
    g(h(0));
  });
}
function DL(i, t, a = {}, n) {
  let c = oe(i);
  c.run++;
  let f = () => {
  }, d = new Promise((u) => {
    f = u;
  }), m = { key: ++c.keys, dialog: t, pass: () => {
  }, tornDown: () => {
  }, replaced: () => {
    n?.(), f();
  }, options: a };
  return b(c, m), { update: (u) => {
    if (c.screen?.key === m.key) b(c, { ...m, dialog: u });
  }, replaced: d };
}
function Jjs(i) {
  let t = F.get(i);
  if (!t?.screen) return false;
  return b(t, t.screen), true;
}
function b(i, t) {
  if (i.screen && i.screen.key !== t?.key) i.screen.replaced();
  if (i.screen = t, !i.rendered && t === null) return;
  i.rendered = true, i.root.render((0, import_chunk_a46xeenj.e)(ie, { tree: i, screen: t }));
}
function ie(i) {
  let n = (0, import_chunk_sng02qpc.k)(8), { tree: t, screen: a } = i, c, f;
  if (n[0] !== t) c = () => () => {
    t.rendered = false, t.screen?.tornDown();
  }, f = [t], n[0] = t, n[1] = c, n[2] = f;
  else c = n[1], f = n[2];
  if ((0, import_chunk_bs4h6795.H)(c, f), a === null) {
    return null;
  }
  let d;
  if (n[3] !== a) d = (0, import_chunk_a46xeenj.e)(q, { screen: a }), n[3] = a, n[4] = d;
  else d = n[4];
  let m;
  if (n[5] !== a.key || n[6] !== d) m = (0, import_chunk_a46xeenj.e)(import_chunk_bs4h6795.ai, { fallback: null, children: d }, a.key), n[5] = a.key, n[6] = d, n[7] = m;
  else m = n[7];
  return m;
}
function q(i) {
  let c = (0, import_chunk_sng02qpc.k)(19), { screen: t } = i, a = t.dialog instanceof Promise ? (0, import_chunk_bs4h6795.Ms)(t.dialog) : t.dialog, n = a !== null && a !== void 0, f, d;
  if (c[0] !== t || c[1] !== n) f = () => {
    if (!n) t.pass();
  }, d = [t, n], c[0] = t, c[1] = n, c[2] = f, c[3] = d;
  else f = c[2], d = c[3];
  if ((0, import_chunk_bs4h6795.H)(f, d), !n) {
    return null;
  }
  let m;
  if (c[4] !== a || c[5] !== t.exit) m = t.exit ? (0, import_chunk_a46xeenj.e)(z, { exit: t.exit, children: a }) : a, c[4] = a, c[5] = t.exit, c[6] = m;
  else m = c[6];
  let u = m, { session: S, initialState: x, onChangeAppState: y, storageV5: h, presentation: g } = t.options;
  if (!S) {
    return u;
  }
  let r;
  if (c[7] !== y || c[8] !== S) r = y && ((p) => y(p, S)), c[7] = y, c[8] = S, c[9] = r;
  else r = c[9];
  let v;
  if (c[10] !== u || c[11] !== x || c[12] !== S || c[13] !== h || c[14] !== r) v = (0, import_chunk_a46xeenj.e)(import_chunk_7azstk6m.Nv, { session: S, storageV5: h, initialState: x, onChangeAppState: r, children: u }), c[10] = u, c[11] = x, c[12] = S, c[13] = h, c[14] = r, c[15] = v;
  else v = c[15];
  let N = v, A;
  if (c[16] !== N || c[17] !== g) A = g ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.W7n, { value: g, children: N }) : N, c[16] = N, c[17] = g, c[18] = A;
  else A = c[18];
  return A;
}
var B = 1e3;
function z(i) {
  let d = (0, import_chunk_sng02qpc.k)(11), { exit: t, children: a } = i, n = (0, import_chunk_bs4h6795.be)(import_chunk_8bkqeb5d.sp), c = n.exit, f = (0, import_chunk_bs4h6795.I)(Number.NEGATIVE_INFINITY), m;
  if (d[0] === import_chunk_w1d7ygsk.R) m = () => Number.isFinite(f.current) && (performance.now() - f.current < B || Date.now() - (0, import_chunk_gpb7vtp4.E$e)() < B), d[0] = m;
  else m = d[0];
  (0, import_chunk_6fvsq616.Pa)(m);
  let u;
  if (d[1] !== t || d[2] !== c) u = (S) => {
    f.current = performance.now(), t(() => c(S));
  }, d[1] = t, d[2] = c, d[3] = u;
  else u = d[3];
  let x = u, y;
  if (d[4] !== n || d[5] !== x) y = { ...n, exit: x }, d[4] = n, d[5] = x, d[6] = y;
  else y = d[6];
  let h = y, g;
  if (d[7] === import_chunk_w1d7ygsk.R) g = (0, import_chunk_a46xeenj.e)(import_chunk_f3ymc800.$se, { isMenu: true }), d[7] = g;
  else g = d[7];
  let r;
  if (d[8] !== a || d[9] !== h) r = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.sp.Provider, { value: h, children: [a, g] }), d[8] = a, d[9] = h, d[10] = r;
  else r = d[10];
  return r;
}
