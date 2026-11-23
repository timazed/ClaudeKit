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
var chunk_xqpr4fa5_exports = {};
__export(chunk_xqpr4fa5_exports, {
  FWr: () => FWr,
  Q1e: () => Q1e,
  f7n: () => f7n,
  u7n: () => u7n
});
module.exports = __toCommonJS(chunk_xqpr4fa5_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
var import_chunk_8nvd6fqx = require("/$bunfs/root/chunk-8nvd6fqx.js");
var import_chunk_ky5sghtd = require("/$bunfs/root/chunk-ky5sghtd.js");
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_8c111j67 = require("/$bunfs/root/chunk-8c111j67.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_4p0gkthx = require("/$bunfs/root/chunk-4p0gkthx.js");
var import_chunk_0w2wb7gk = require("/$bunfs/root/chunk-0w2wb7gk.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_wgyw76w5 = require("/$bunfs/root/chunk-wgyw76w5.js");
var import_chunk_mqh12c0a = require("/$bunfs/root/chunk-mqh12c0a.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_promises = require("fs/promises");
(0, import_chunk_bs4h6795.G)();
var Q1e = (0, import_chunk_bs4h6795.an)(null);
var u7n = "detached";
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
var ae = 24, me = 4, ue = 384, fe = /* @__PURE__ */ new Set(["EAGAIN", "EBUSY", "EINTR", "EMFILE", "ENFILE", "ENOSPC"]);
async function j(e, i) {
  let m = i.allocate(ae);
  if (m === void 0) return v("probe: no image id to ask under");
  let n;
  try {
    n = (0, import_chunk_8nvd6fqx.dJe)("tty-graphics-protocol", ".rgba"), await (0, import_promises.writeFile)(n, Buffer.alloc(me), { mode: ue });
    let [o, a] = await Promise.all([e.send({ request: (0, import_chunk_4p0gkthx.gSa)(m, n), match: (u) => u.type === "kittyGraphics" && u.id === m }), e.flush()]);
    return o !== void 0 ? O({ value: o.message === "OK", source: `probe: file query answered ${o.message}` }) : a ? O({ value: false, source: "probe: no reply to the file query" }) : v("probe: the query was dropped");
  } catch (o) {
    let a = (0, import_chunk_jv7av99m.w)(o) ?? "error", u = `probe: could not write its file (${a})`;
    return fe.has(a) ? v(u) : O({ value: false, source: u });
  } finally {
    if (i.free(m), n !== void 0) await (0, import_promises.unlink)(n).catch(() => {
    });
  }
}
function O(e) {
  return { kind: "answered", answer: e };
}
function v(e) {
  return { kind: "inconclusive", source: e };
}
function k(e, i) {
  let m = (0, import_chunk_ky5sghtd.Hfr)();
  if (!(e !== null && i !== null && (0, import_chunk_ky5sghtd.IYa)() && m.begin())) return;
  j(e, i).then((o) => {
    let a = (o.kind === "inconclusive" ? o.source : o.answer.source).replace(import_chunk_0w2wb7gk.I9, "?");
    if (o.kind === "inconclusive") {
      (0, import_chunk_w578pjby.t)(`Terminal image files: not known yet (${a}); asked again when next needed`), m.unask();
      return;
    }
    let u = o.answer.value ? "yes" : "no";
    (0, import_chunk_w578pjby.t)(`Terminal image files: ${u} (${a})`), m.answer({ value: o.answer.value, source: a });
  }).catch((o) => (0, import_chunk_w578pjby.t)(`Terminal image files: a listener threw (${o})`, { level: "warn" }));
}
function b() {
  let e = (0, import_chunk_ky5sghtd.nv)().get("itermImages");
  if (e.state !== "settled" || !e.value) return e;
  if (!(0, import_chunk_8c111j67.Mf)()) return q("Claude Code's classic renderer would send the picture again for every new line; fullscreen rendering (/tui fullscreen) draws it");
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT) return q("CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT is set, so every frame repaints the screen and would send the picture again each time");
  return e;
}
function q(e) {
  return { state: "settled", value: false, source: e };
}
function K(e) {
  let { source: i, columns: m, rows: n } = e;
  if ((0, import_chunk_0w2wb7gk.Wun)(i)) return () => {
    throw TypeError("iTerm2 image: a file or shm source is not sent");
  };
  let o;
  return () => (o ??= (0, import_chunk_8bkqeb5d.nSa)({ pngBase64: (0, import_chunk_0w2wb7gk.JCr)(i) ? i.png : (0, import_chunk_8bkqeb5d.J7n)(i.rgba, i.width, i.height), columns: m, rows: n }), o);
}
var M = (e) => (i) => (0, import_chunk_4p0gkthx.mSa)({ id: i, source: (0, import_chunk_0w2wb7gk.rCl)(e.source), columns: e.columns, rows: e.rows });
var z = 5e3;
function W(e) {
  let { plugin: i, requestId: m, key: n } = e, o = n === void 0 ? "Image" : `Image "${n}"`, a = "", u = -1 / 0;
  return (f) => {
    let p = Date.now();
    if (f === a && p - u < z) return;
    a = f, u = p, (0, import_chunk_w578pjby.t)(`${o} (${i}) in ${m}: the terminal refused its source: ` + f.replace(import_chunk_0w2wb7gk.I9, "?"), { level: "warn" });
  };
}
var P = { reactKey: void 0, source: void 0, box: void 0 };
(0, import_chunk_bs4h6795.G)();
function FWr() {
  let [e, i] = (0, import_chunk_bs4h6795.y)(import_chunk_ky5sghtd.cot);
  if ((0, import_chunk_bs4h6795.H)(() => (0, import_chunk_ky5sghtd.MYa)(i), []), e === "iterm") {
    let n = b();
    return n.state === "settled" && n.value ? { protocol: e, width: import_chunk_mqh12c0a.gDt.smallIdWidth } : void 0;
  }
  if (e === void 0 || import_chunk_d57v19zt.Re.level < import_chunk_mqh12c0a.gDt.indexed) return;
  let m = import_chunk_d57v19zt.Re.level >= import_chunk_mqh12c0a.gDt.truecolor;
  return { protocol: e, width: m ? import_chunk_mqh12c0a.gDt.wideIdWidth : import_chunk_mqh12c0a.gDt.smallIdWidth };
}
(0, import_chunk_bs4h6795.G)();
function Q(e, i, m) {
  let { plugin: n, requestId: o, key: a } = e, { columns: u, rows: f } = i;
  (0, import_chunk_bs4h6795.It)(() => {
    if (a === void 0) return;
    return (0, import_chunk_bzyb60p0.M6l)((0, import_chunk_bzyb60p0.H6l)({ plugin: n, requestId: o, key: a }, { columns: u, rows: f }, m));
  }, [n, o, a, u, f, m]);
}
(0, import_chunk_bs4h6795.G)();
function V(e) {
  let { terminalImages: i } = (0, import_chunk_8bkqeb5d.gx)(), { internal_querier: m } = (0, import_chunk_3jkk3v3z.BI)(), n = (0, import_chunk_ky5sghtd.Hfr)(), [o, a] = (0, import_chunk_bs4h6795.y)(() => n.get());
  return (0, import_chunk_bs4h6795.H)(() => (a(n.get()), n.onSettle(() => a(n.get()))), [n]), (0, import_chunk_bs4h6795.H)(() => {
    if (e) k(m, i), a(n.get());
  }, [e, m, i, n]), o;
}
var Y = (e, i) => e === "iterm" ? K(i) : M(i);
function X(e) {
  let { plugin: i, elementKey: m, source: n, columns: o, rows: a } = e, { terminalImages: u } = (0, import_chunk_8bkqeb5d.gx)(), { internal_querier: f } = (0, import_chunk_3jkk3v3z.BI)(), p = (0, import_chunk_bs4h6795.be)(Q1e), h = p?.requestId ?? u7n, _ = p?.component, A = FWr(), L = A?.width, S = A?.protocol, F = (0, import_chunk_0w2wb7gk.Wun)(n), C = S === "kitty", D = V(F && C), N = !F || C && D.state === "settled" && D.value, [l, U] = (0, import_chunk_bs4h6795.y)(), [J, R] = (0, import_chunk_bs4h6795.y)(), d = (0, import_chunk_bs4h6795.I)(P);
  return (0, import_chunk_bs4h6795.It)(() => {
    let c = u === null || L === void 0 || S === void 0 ? void 0 : u.allocate(L, W({ plugin: i, requestId: h, key: m }), S, m === void 0 && _ === void 0 ? void 0 : [_, (0, import_chunk_0w2wb7gk.jun)(h, m ?? "", i)].join(import_chunk_0w2wb7gk.$we));
    if (u === null || c === void 0 || S === void 0) return;
    return U({ id: c, images: u, protocol: S }), () => {
      u.free(c), d.current = P, U(void 0), R(void 0);
    };
  }, [u, L, S, i, _, h, m]), (0, import_chunk_bs4h6795.It)(() => {
    if (l === void 0) return;
    if (!N) {
      d.current = P, R(void 0);
      return;
    }
    let T = (0, import_chunk_wgyw76w5.di)(n), c = `${o}x${a}`, E = T !== d.current.reactKey, x = E ? n : d.current.source ?? n, B = !E && c === d.current.box, Z = !E && (0, import_chunk_0w2wb7gk.Xzi)(x);
    if (B || Z) return;
    let ee = l.images.transmit(l.id, Y(l.protocol, { source: x, columns: o, rows: a }), { resend: !(0, import_chunk_0w2wb7gk.Xzi)(x), box: { columns: o, rows: a } });
    d.current = { reactKey: T, source: x, box: c }, R(ee ? l : void 0);
  }, [l, n, N, o, a]), Q({ plugin: i, requestId: h, key: m }, { columns: o, rows: a }, (0, import_chunk_bs4h6795.ye)((T) => {
    let c = (0, import_chunk_0w2wb7gk.Wun)(T);
    if (c) k(f, u);
    let E = (0, import_chunk_bzyb60p0.P3a)({ hasRoot: u !== null, placeholders: (0, import_chunk_ky5sghtd.nv)().get("kittyGraphics"), inlineImages: b(), hasId: l !== void 0, isReference: c, files: (0, import_chunk_ky5sghtd.Hfr)().get() });
    if (E !== void 0 || l === void 0) return E;
    let x = (0, import_chunk_0w2wb7gk.Xzi)(T);
    if (x && l.images.isBackedUp(l.id)) return "the surface has not written its last frames (paused or busy); the object was not sent, unlink it and blit again later";
    if (!l.images.transmit(l.id, Y(l.protocol, { source: T, columns: o, rows: a }), { resend: !x, box: { columns: o, rows: a } })) return "the terminal sink refused the source";
    d.current = { ...d.current, source: T, box: `${o}x${a}` }, R(l);
    return;
  }, [f, u, l, o, a])), J;
}
function f7n(e) {
  let { plugin: i, elementKey: m, columns: n, rows: o, alt: a } = e, u = X(e), f = u?.id, p = u?.protocol, h = (0, import_chunk_bs4h6795.re)(() => f === void 0 ? "" : p === "iterm" ? (0, import_chunk_8bkqeb5d.tSa)(f, n, o) : (0, import_chunk_4p0gkthx.pSa)(f, n, o), [f, p, n, o]);
  if (f === void 0) return (0, import_chunk_bs4h6795.rf)(import_chunk_8bkqeb5d.r, { dimColor: true }, a);
  return (0, import_chunk_bs4h6795.rf)(import_chunk_8bkqeb5d.g, { flexShrink: 0, width: n, height: o, overflow: "hidden", noSelect: true, ...m !== void 0 && { elementKey: m, elementPlugin: i } }, (0, import_chunk_bs4h6795.rf)("ink-raw-ansi", { rawText: h, rawWidth: n, rawHeight: o }));
}
