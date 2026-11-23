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
var chunk_q2404y26_exports = {};
__export(chunk_q2404y26_exports, {
  BSe: () => BSe,
  ECi: () => ECi,
  Ob: () => Ob,
  S$t: () => S$t,
  SCi: () => SCi,
  WKl: () => WKl,
  WQ: () => WQ,
  bCi: () => bCi,
  bst: () => bst,
  e9e: () => e9e,
  gG: () => gG,
  iol: () => iol,
  jKl: () => jKl,
  kCi: () => kCi,
  kLn: () => kLn,
  kcs: () => kcs,
  m7: () => m7,
  t9e: () => t9e,
  vCi: () => vCi,
  wA: () => wA,
  wCi: () => wCi,
  wLn: () => wLn,
  xDe: () => xDe,
  xae: () => xae,
  yCi: () => yCi
});
module.exports = __toCommonJS(chunk_q2404y26_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_drk264d0 = require("/$bunfs/root/chunk-drk264d0.js");
var import_chunk_t99xdws4 = require("/$bunfs/root/chunk-t99xdws4.js");
var import_chunk_r0q0n8n3 = require("/$bunfs/root/chunk-r0q0n8n3.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var e9e = (0, import_chunk_865at33z.Yl)();
function xDe() {
  return e9e.get()?.isHooked() === true;
}
function yCi(e) {
  e9e.get()?.logFailure(e);
}
function u(e, o) {
  return e9e.get()?.isAskedAbout(o) === true && (o.name !== e.unasked || o.mcpInfo !== void 0);
}
function m(e) {
  return e9e.get()?.staysListed(e) === true;
}
function wLn(e) {
  return e.underlyingV1ToolName ?? e.name;
}
function y(e) {
  return e.stickyBetas === void 0 && e.agentId === void 0;
}
function k(e, o = false, t = true) {
  let s = /* @__PURE__ */ new Map();
  for (let r of e) if (t && r.type === "system" && r.subtype === "compact_boundary") s.clear();
  else if (r.type === "attachment" && r.attachment?.type === "tool_offer_record") {
    let { offered: n, hidden: f } = r.attachment;
    for (let [a, i] of [[n, true], [f, false]]) for (let d of Array.isArray(a) ? a : []) if (!o || s.get(d) !== false) s.set(d, i);
  }
  return s;
}
function SCi(e) {
  if (!xDe()) return [];
  let o = e.findLast((t) => t.type === "attachment" && t.attachment?.type === "tool_offer_record")?.attachment.withheld;
  return Array.isArray(o) ? o : [];
}
function S$t(e, o, t, s) {
  return xDe() ? { answers: new Map(e?.answers ?? k(o, true, t !== void 0)), asking: /* @__PURE__ */ new Map(), unanswered: /* @__PURE__ */ new Set(), asker: t, unasked: s, isBorrowed: false } : void 0;
}
function WKl(e, o, t, s = false) {
  if (t === "list" && e?.asker !== void 0) return { ...e, isBorrowed: true };
  let r = S$t(e, o, void 0);
  return r === void 0 || t === "nothing" ? r : { ...r, askerAtCall: e?.asker ?? e?.askerAtCall ?? (s ? {} : void 0) };
}
function t9e(e, o) {
  if (!xDe()) return;
  if (!y(e)) return e.stickyBetas?.toolOffers;
  let t = (0, import_chunk_f9x2f6cx.ao)();
  if (o !== void 0) t.toolOffers ??= S$t(void 0, o, {});
  return t.toolOffers;
}
var h = /* @__PURE__ */ new WeakMap();
function kcs(e, o) {
  return !u(e, o) || m(o) || (e.answers.get(wLn(o)) ?? e.asker === void 0);
}
function gG(e, o) {
  let t = t9e(e);
  if (t === void 0) return o;
  let s = h.get(t) ?? /* @__PURE__ */ new WeakMap(), r = s.get(o);
  if (r?.answered === t.answers.size) return r.shown;
  try {
    let n = o.filter((a) => kcs(t, a)), f = n.length === o.length ? o : n;
    return s.set(o, { answered: t.answers.size, shown: f }), h.set(t, s), f;
  } catch (n) {
    return e9e.get()?.logFailure(n), o;
  }
}
function Ob(e) {
  return gG(e, e.options.tools);
}
function bCi(e) {
  return t9e(e)?.answers.get(import_chunk_t99xdws4.co) === false;
}
function wCi(e) {
  let o = Ob(e);
  return o === e.options.tools ? void 0 : e.options.tools.filter((t) => !o.includes(t));
}
function kLn(e, o) {
  let t = t9e(e) ?? (y(e) ? S$t(void 0, e.messages ?? [], void 0) : void 0);
  return t === void 0 ? o : gG({ stickyBetas: { toolOffers: { ...t, asker: void 0 } } }, o);
}
function wA(e) {
  return kLn(e, e.options.tools);
}
function jKl(e) {
  if (!xDe()) return true;
  let o = t9e({});
  return o !== void 0 && o.asking.size === 0 && o.unanswered.size === 0 && gG({}, e) === e;
}
function iol(e) {
  let { tools: o, mcpClients: t } = e.options, s = gG(e, o);
  return s === o ? t : t.filter(({ name: r }) => s.some((n) => n.mcpInfo?.serverName === r) || !o.some((n) => n.mcpInfo?.serverName === r));
}
var BSe = (0, import_chunk_t57w17k7.de)((0, import_chunk_r0q0n8n3.Xr)(), (e) => e.set(void 0));
var xae = (0, import_chunk_t57w17k7.de)((0, import_chunk_r0q0n8n3.Xr)(), (e) => e.set(void 0));
var m7 = () => xae.get() ? BSe.get() : void 0;
function WQ(e, o) {
  let t = e9e.get(), s = [];
  try {
    let r = (0, import_chunk_drk264d0.Z_)(e) === void 0 ? t9e(e, e.messages) : void 0;
    if (r?.asker === void 0 || t === null) return;
    let { answers: n, asking: f, unanswered: a, asker: i } = r, d = e.stickyBetas ?? (0, import_chunk_f9x2f6cx.ao)();
    a.clear();
    for (let p of [...o, ...t.toolsIn(d.turnDeniedTools)]) {
      let l = wLn(p);
      if (n.has(l) || !u(r, p)) continue;
      let c = f.get(l)?.catch(() => t.ask(p, i, e)) ?? t.ask(p, i, e);
      if (c === true) {
        n.set(l, true);
        continue;
      }
      f.set(l, c), s.push(c.then((g) => {
        n.set(l, g), a.delete(l);
      }).catch((g) => {
        a.add(l), t.logFailure(g, e);
      }).finally(() => f.get(l) === c && f.delete(l)));
    }
  } catch (r) {
    t?.logFailure(r);
  }
  return s.length === 0 ? void 0 : (0, import_chunk_5appeerh.Tn)(Promise.all(s), e.abortController.signal, () => new import_chunk_jv7av99m.Ie()).then(() => {
  }, () => {
  });
}
async function bst(e) {
  if (m7() === void 0) await WQ(e, e.options.tools);
  return wA(e);
}
function kCi(e) {
  return `A plugin did not offer ${e} for this call, so it was not run.`;
}
async function x(e, o, t) {
  let s = !o.answers.has(wLn(t));
  if (s) await WQ(e, [t]);
  if (!kcs(o, t)) return "hidden";
  let r = o.asker ?? o.askerAtCall;
  if (s && o.asker !== void 0 || r === void 0) return "offered";
  let n = e9e.get();
  try {
    return await n?.ask(t, r, e) === false ? "refused" : "offered";
  } catch (f) {
    return n?.logFailure(f, e), "refused";
  }
}
function ECi(e, o) {
  try {
    let t = t9e(e, e.messages);
    return t === void 0 || !u(t, o) || m(o) ? void 0 : x(e, t, o);
  } catch (t) {
    e9e.get()?.logFailure(t);
    return;
  }
}
function vCi(e, o) {
  let t = t9e(e);
  if (t?.asker === void 0 || t.isBorrowed) return;
  let s = k(o), r = [...t.answers].filter(([i, d]) => s.get(i) !== d), n = new Set(gG(e, e.options.tools)), f = e.options.tools.flatMap((i) => n.has(i) ? [] : i.name), a = new Set(SCi(o));
  return r.length === 0 && f.length === a.size && f.every((i) => a.has(i)) ? void 0 : { type: "tool_offer_record", offered: r.flatMap(([i, d]) => d ? i : []), hidden: r.flatMap(([i, d]) => d ? [] : i), withheld: f };
}
