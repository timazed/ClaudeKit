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
var chunk_y8kqnbqt_exports = {};
__export(chunk_y8kqnbqt_exports, {
  Avi: () => Avi,
  Cvi: () => Cvi,
  EWe: () => EWe,
  F0n: () => F0n,
  GCe: () => GCe,
  ISe: () => ISe,
  JF: () => JF,
  K1t: () => K1t,
  M5: () => M5,
  OP: () => OP,
  Tvi: () => Tvi,
  Urn: () => Urn,
  VCe: () => VCe,
  Vfe: () => Vfe,
  cdo: () => cdo,
  ddo: () => ddo,
  hds: () => hds,
  i0: () => i0,
  ihr: () => ihr,
  ldo: () => ldo,
  mds: () => mds,
  ntl: () => ntl,
  ohr: () => ohr,
  otl: () => otl,
  q1t: () => q1t,
  rtl: () => rtl,
  shr: () => shr,
  ttl: () => ttl,
  vvi: () => vvi,
  wE: () => wE,
  wae: () => wae,
  zCe: () => zCe
});
module.exports = __toCommonJS(chunk_y8kqnbqt_exports);
var import_chunk_dzf5h538 = require("/$bunfs/root/chunk-dzf5h538.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_0pb268nk = require("/$bunfs/root/chunk-0pb268nk.js");
var import_chunk_q4pszsad = require("/$bunfs/root/chunk-q4pszsad.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_7n1spq36 = require("/$bunfs/root/chunk-7n1spq36.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
function wE(e, r) {
  let i = new Set(typeof r === "string" ? [r] : r);
  return Object.fromEntries(Object.entries(e).filter(([o]) => !i.has(o)));
}
function wae(e) {
  let r = e.split("+"), i = { key: "", ctrl: false, alt: false, shift: false, meta: false, super: false };
  for (let o of r) {
    let g = o.toLowerCase();
    switch (g) {
      case "ctrl":
      case "control":
        i.ctrl = true;
        break;
      case "alt":
      case "opt":
      case "option":
        i.alt = true;
        break;
      case "shift":
        i.shift = true;
        break;
      case "meta":
        i.meta = true;
        break;
      case "cmd":
      case "command":
      case "super":
      case "win":
        i.super = true;
        break;
      case "esc":
        i.key = "escape";
        break;
      case "return":
        i.key = "enter";
        break;
      case "del":
        i.key = "delete";
        break;
      case "space":
        i.key = " ";
        break;
      case "\u2191":
        i.key = "up";
        break;
      case "\u2193":
        i.key = "down";
        break;
      case "\u2190":
        i.key = "left";
        break;
      case "\u2192":
        i.key = "right";
        break;
      default:
        i.key = g;
        break;
    }
  }
  return i;
}
function GCe(e) {
  if (e === " ") return [wae("space")];
  return e.trim().split(/\s+/).map(wae);
}
function Y(e) {
  let r = e.split("+"), i = r.findLastIndex((o) => wae(o).key !== "");
  return r.map((o, g) => ({ part: o, lost: g !== i && wae(o).key !== "" }));
}
function O(e) {
  return e.trim().split(/\s+/).some((r) => Y(r).some(({ lost: i }) => i));
}
function wn(e) {
  let r = [];
  if (e.ctrl) r.push("ctrl");
  if (e.alt) r.push("alt");
  if (e.shift) r.push("shift");
  if (e.meta) r.push("meta");
  if (e.super) r.push("cmd");
  let i = en(e.key);
  return r.push(i), r.join("+");
}
function en(e) {
  switch (e) {
    case "escape":
      return "Esc";
    case " ":
      return "space";
    case "tab":
      return "tab";
    case "enter":
      return "Enter";
    case "backspace":
      return "Backspace";
    case "delete":
      return "Delete";
    case "up":
      return "\u2191";
    case "down":
      return "\u2193";
    case "left":
      return "\u2190";
    case "right":
      return "\u2192";
    case "pageup":
      return "PageUp";
    case "pagedown":
      return "PageDown";
    case "home":
      return "Home";
    case "end":
      return "End";
    default:
      return e;
  }
}
function i0(e) {
  return e.map(wn).join(" ");
}
function _n(e, r = "linux") {
  let i = [];
  if (e.ctrl) i.push("ctrl");
  if (e.alt || e.meta) i.push(r === "macos" ? "opt" : "alt");
  if (e.shift) i.push("shift");
  if (e.super) i.push(r === "macos" ? "cmd" : "super");
  let o = en(e.key);
  return i.push(o), i.join("+");
}
function M5(e, r = "linux") {
  return e.map((i) => _n(i, r)).join(" ");
}
function Vfe(e) {
  let r = [];
  for (let i of e) for (let [o, g] of Object.entries(i.bindings)) r.push({ chord: GCe(o), action: g, context: i.context });
  return r;
}
function H(e) {
  return e.map((r) => ({ context: r.context, bindings: wE(r.bindings, Object.keys(r.bindings).filter(O)) }));
}
function L(e) {
  return Vfe((0, import_chunk_q4pszsad.LCl)(H(e))).filter((r) => r.action === null || (0, import_chunk_q4pszsad.STs)(r.action));
}
(0, import_chunk_adx6804h.B)();
var Kn = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ context: (0, import_chunk_adx6804h.n)(), bindings: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)().nullable()) }));
function xn(e) {
  return Kn().safeParse(e).success;
}
function A(e) {
  return Array.isArray(e) && e.every(xn);
}
var on = import_chunk_q4pszsad.w2n, tn = [{ name: "ctrl", aliases: ["control"] }, { name: "alt", aliases: ["opt", "option"] }, { name: "shift" }, { name: "meta" }, { name: "cmd", aliases: ["command", "super", "win"] }], rn = ["ctrl", "alt", "shift", "meta", "super"], sn = 3, j = 80;
function vn(e) {
  return on.includes(e);
}
function Cn(e, r) {
  let i = e.trim(), o = e === " " ? [] : i.split(/\s+/), g = e !== " " && e.split("+").some((P) => !P.trim()), y = /\s\+|\+\s/.test(i) && o.some((P) => wae(P).key === "");
  if (g || y) {
    let P = (0, import_chunk_7cfjrnwy.ed)(e, j);
    return { type: "parse_error", severity: "error", message: g ? `Empty key part in "${P}"` : `A space next to "+" splits "${P}" into separate presses, and one of them has no key`, key: e, suggestion: g ? 'Remove extra "+" characters' : 'Remove the spaces next to "+"' };
  }
  let h = [], w = [], k = true;
  for (let P of o) {
    let Q = wae(P), W = [];
    for (let { part: z, lost: kn } of Y(P)) {
      if (!kn) {
        W.push(z);
        continue;
      }
      h.push(z);
      let U = (0, import_chunk_xcgcdx61.IFe)(z.toLowerCase(), tn);
      if (U === void 0) {
        k = false;
        continue;
      }
      let nn = wae(U);
      if (rn.some((T) => Q[T] && nn[T])) continue;
      W.push(U);
      for (let T of rn) Q[T] ||= nn[T];
    }
    w.push(W.join("+"));
  }
  if (h.length === 0) return null;
  let _ = (0, import_chunk_4smdap7r.M)(h), K = _.length > sn + 1 ? sn : _.length, v = _.slice(0, K).map((P) => `"${(0, import_chunk_7cfjrnwy.ed)(P, j)}"`);
  if (_.length > K) v.push(`${_.length - K} more`);
  let C = new Intl.ListFormat("en", { type: "conjunction" }).format(v), D = new Intl.ListFormat("en", { type: "disjunction" }).format(tn.map((P) => P.name)), mn = _.length === 1 ? "is not a modifier" : "are not modifiers", bn = r ? ` in ${r}` : "", hn = (0, import_chunk_7cfjrnwy.ed)(e, j), Z = w.join(" ");
  return { type: "parse_error", severity: "error", message: `${C} ${mn}, so the binding "${hn}"${bn} is ignored`, key: e, suggestion: k && Z.length <= j ? `Did you mean "${Z}"?` : `Use ${D} before "+"; for keys pressed one after another, put a space between them, as in "ctrl+x ctrl+s"` };
}
function Bn(e, r) {
  let i = [];
  if (typeof e !== "object" || e === null) return i.push({ type: "parse_error", severity: "error", message: `Keybinding block ${r + 1} is not an object` }), i;
  let o = e, g = o.context, y;
  if (typeof g !== "string") i.push({ type: "parse_error", severity: "error", message: `Keybinding block ${r + 1} missing "context" field` });
  else if (!vn(g)) i.push({ type: "invalid_context", severity: "error", message: `Unknown context "${g}"`, context: g, suggestion: `Valid contexts: ${on.join(", ")}` });
  else y = g;
  if (typeof o.bindings !== "object" || o.bindings === null) return i.push({ type: "parse_error", severity: "error", message: `Keybinding block ${r + 1} missing "bindings" field` }), i;
  let h = o.bindings;
  for (let [w, k] of Object.entries(h)) {
    let _ = Cn(w, y);
    if (_) _.context = y, i.push(_);
    if (k !== null && typeof k !== "string") i.push({ type: "invalid_action", severity: "error", message: `Invalid action for "${w}": must be a string or null`, key: w, context: y });
    else if (typeof k === "string" && k.startsWith("command:")) {
      if (!/^command:[a-zA-Z0-9:\-_]+$/.test(k)) i.push({ type: "invalid_action", severity: "warning", message: `Command binding "${k}" for "${w}": a command name can only contain letters, numbers, colons, hyphens, and underscores`, key: w, context: y, action: k });
      if (y && y !== "Chat") i.push({ type: "invalid_action", severity: "warning", message: `Command binding "${k}" must be in "Chat" context, not "${y}"`, key: w, context: y, action: k, suggestion: 'Move this binding to a block with "context": "Chat"' });
    } else if (typeof k === "string" && !(0, import_chunk_q4pszsad.STs)(k) && !(0, import_chunk_q4pszsad.I6i)(k)) i.push({ type: "invalid_action", severity: "error", message: `Unknown action "${k}" for "${w}"${y ? ` in ${y}` : ""} \u2014 this binding is ignored`, key: w, context: y, action: k, suggestion: Sn(k) });
    else if (k === "voice:pushToTalk" && !O(w)) {
      let K = GCe(w)[0];
      if (K && !K.ctrl && !K.alt && !K.shift && !K.meta && !K.super && /^[a-z]$/.test(K.key)) i.push({ type: "invalid_action", severity: "warning", message: `Binding "${w}" to voice:pushToTalk prints into the input during warmup; use space or a modifier combo like meta+k`, key: w, context: y, action: k });
    }
  }
  return i;
}
function Sn(e) {
  let r, i = 1 / 0;
  for (let h of import_chunk_q4pszsad.Dlt) {
    let w = Pn(e.toLowerCase(), h.toLowerCase());
    if (w < i) i = w, r = h;
  }
  if (r && i <= 2) return `Did you mean "${r}"?`;
  let o = (0, import_chunk_7cfjrnwy.nt)(e, ":"), g = import_chunk_q4pszsad.Dlt.filter((h) => h.startsWith(`${o}:`));
  if (g.length > 0) return `Valid "${o}:" actions: ${g.join(", ")}`;
  return `Valid action namespaces: ${(0, import_chunk_4smdap7r.M)(import_chunk_q4pszsad.Dlt.map((h) => (0, import_chunk_7cfjrnwy.nt)(h, ":"))).map((h) => `${h}:`).join(", ")}`;
}
function Pn(e, r) {
  let i = Array.from({ length: r.length + 1 }, (o, g) => g);
  for (let o = 1; o <= e.length; o++) {
    let g = [o];
    for (let y = 1; y <= r.length; y++) {
      let h = e[o - 1] === r[y - 1] ? 0 : 1;
      g[y] = Math.min((i[y] ?? 0) + 1, (g[y - 1] ?? 0) + 1, (i[y - 1] ?? 0) + h);
    }
    i = g;
  }
  return i[r.length] ?? 0;
}
function I(e) {
  let r = [], i = /"bindings"\s*:\s*\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g, o;
  while ((o = i.exec(e)) !== null) {
    let g = o[1];
    if (!g) continue;
    let w = e.slice(0, o.index).match(/"context"\s*:\s*"([^"]+)"[^{]*$/)?.[1] ?? "unknown", k = /"([^"]+)"\s*:/g, _ = /* @__PURE__ */ new Map(), K;
    while ((K = k.exec(g)) !== null) {
      let v = K[1];
      if (!v) continue;
      let C = (_.get(v) ?? 0) + 1;
      if (_.set(v, C), C === 2) r.push({ type: "duplicate", severity: "warning", message: `Duplicate key "${v}" in ${w} bindings`, key: v, context: w, suggestion: "This key appears multiple times in the same context. JSON uses the last value, earlier values are ignored." });
    }
  }
  return r;
}
function En(e) {
  let r = [];
  if (!Array.isArray(e)) return r.push({ type: "parse_error", severity: "error", message: "keybindings.json must contain an array", suggestion: "Wrap your bindings in [ ]" }), r;
  for (let i = 0; i < e.length; i++) r.push(...Bn(e[i], i));
  return r;
}
function An(e) {
  let r = [], i = /* @__PURE__ */ new Map();
  for (let o of e) {
    let g = i.get(o.context) ?? /* @__PURE__ */ new Map();
    i.set(o.context, g);
    for (let [y, h] of Object.entries(o.bindings)) {
      let w = (0, import_chunk_q4pszsad.ETt)(y), k = g.get(w);
      if (k && k !== h) r.push({ type: "duplicate", severity: "warning", message: `Duplicate binding "${y}" in ${o.context} context`, key: y, context: o.context, action: h ?? "null (unbind)", suggestion: `Previously bound to "${k}". Only the last binding will be used.` });
      g.set(w, h ?? "null");
    }
  }
  return r;
}
function $n(e) {
  let r = [], i = (0, import_chunk_q4pszsad.HCl)();
  for (let o of e) {
    let g = i0(o.chord), y = (0, import_chunk_q4pszsad.ETt)(g);
    for (let h of i) if ((0, import_chunk_q4pszsad.ETt)(h.key) === y) r.push({ type: "reserved", severity: h.severity, message: `"${g}" may not work: ${h.reason}`, key: g, context: o.context, action: o.action ?? void 0 });
  }
  return r;
}
function Tn(e) {
  let r = [];
  for (let i of e) for (let [o, g] of Object.entries(i.bindings)) {
    let y = o.split(" ").map((h) => wae(h));
    r.push({ chord: y, action: g, context: i.context });
  }
  return r;
}
function F(e, r) {
  let i = [];
  if (i.push(...En(e)), A(e)) {
    let g = H(e);
    i.push(...An(g));
    let y = Tn(g);
    i.push(...$n(y));
  }
  let o = /* @__PURE__ */ new Set();
  return i.filter((g) => {
    let y = `${g.type}:${g.key}:${g.context}`;
    if (o.has(y)) return false;
    return o.add(y), true;
  });
}
function ISe() {
  return (0, import_chunk_865at33z.b)("tengu_keybinding_customization_release", true);
}
var On = 500, jn = 200;
function In() {
  let e = { bindings: null, warmedFromBackend: false, warmAttempted: false, warnings: [], watcher: null, initialized: false, disposed: false, lastCustomBindingsLogDate: null, loggedShortcutFallbacks: /* @__PURE__ */ new Set(), actionFiredLoggedAt: /* @__PURE__ */ new Map(), changed: (0, import_chunk_69qhefwa.Be)(), [Symbol.dispose]() {
    if (e.disposed = true, e.watcher) e.watcher.close(), e.watcher = null;
    e.changed.clear();
  } };
  return e;
}
var OP = In();
function G(e, r) {
  let i = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  if (e.lastCustomBindingsLogDate === i) return;
  e.lastCustomBindingsLogDate = i, (0, import_chunk_y53wbr8a.a)("tengu_custom_keybindings_loaded", { user_binding_count: r });
}
function ohr() {
  return (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "keybindings.json");
}
var vvi = import_chunk_hkvzj051.at.state("keybindings");
function R() {
  return Vfe(import_chunk_q4pszsad.NV);
}
function V(e) {
  for (let r of e) (0, import_chunk_w578pjby.t)(`[keybindings] [${r.severity}] ${r.message}${r.suggestion ? ` \u2014 ${r.suggestion}` : ""}`, { level: "warn" });
}
function E(e, r) {
  if (e?.suppressFeatureEvents) return;
  if (r === "ok") (0, import_chunk_cqa9hrgx.u)("keybinding_load_user_config");
  else (0, import_chunk_cqa9hrgx.m)("keybinding_load_user_config", r);
}
function q() {
  return !ISe() || (0, import_chunk_0pb268nk.Lr)("keybindings");
}
function Tvi(e) {
  let r = R();
  if (q()) return r;
  if ((0, import_chunk_m15w38ag.ne)() && e !== void 0) return r;
  try {
    let i = (0, import_fs.readFileSync)(ohr(), "utf-8"), o = (0, import_chunk_w578pjby.te)(i), g = typeof o === "object" && o !== null && "bindings" in o ? o.bindings : void 0;
    return A(g) ? [...r, ...L(g)] : r;
  } catch {
    return r;
  }
}
async function gn(e, r, i) {
  let o = R();
  if (!ISe() || (0, import_chunk_0pb268nk.Lr)("keybindings")) return { bindings: o, warnings: [] };
  let g = ohr();
  if (r) {
    let y = await r.read([vvi]);
    if (!y.ok) {
      let w = y.error, k = (0, import_chunk_7n1spq36.un)(w);
      if ((0, import_chunk_w578pjby.t)(`[keybindings] Error loading ${g}: ${k}`), i?.suppressFeatureEvents) (0, import_chunk_cqa9hrgx.l)("keybinding_load_user_config", "warm_backend_read_failed_fell_back");
      return E(i, "keybinding_config_parse_error"), { bindings: o, warnings: [{ type: "parse_error", severity: "error", message: `Couldn't read keybindings.json: ${k}` }] };
    }
    let h = y.value.items[0];
    if (!h.found) return E(i, "ok"), { bindings: o, warnings: [] };
    return Fn(Buffer.from(h.value).toString("utf-8"), e, o, g, i);
  }
  try {
    let y = await (0, import_promises.readFile)(g, "utf-8"), h = (0, import_chunk_w578pjby.te)(y), w;
    if (typeof h === "object" && h !== null && "bindings" in h) w = h.bindings;
    else return (0, import_chunk_w578pjby.t)('[keybindings] Invalid keybindings.json: keybindings.json must have a "bindings" array'), E(i, "keybinding_config_invalid_format"), { bindings: o, warnings: [{ type: "parse_error", severity: "error", message: 'keybindings.json must have a "bindings" array', suggestion: 'Use format: { "bindings": [ ... ] }' }] };
    if (!A(w)) {
      let C = !Array.isArray(w) ? '"bindings" must be an array' : "keybindings.json contains invalid block structure", D = !Array.isArray(w) ? 'Set "bindings" to an array of keybinding blocks' : 'Each block must have "context" (string) and "bindings" (object mapping keys to a string action or null)';
      return (0, import_chunk_w578pjby.t)(`[keybindings] Invalid keybindings.json: ${C}`), E(i, "keybinding_config_invalid_structure"), { bindings: o, warnings: [{ type: "parse_error", severity: "error", message: C, suggestion: D }] };
    }
    let k = L(w);
    (0, import_chunk_w578pjby.t)(`[keybindings] Loaded ${k.length} user bindings from ${g}`);
    let _ = [...o, ...k];
    G(e, k.length);
    let v = [...I(y), ...F(w, _)];
    if (v.length > 0) (0, import_chunk_w578pjby.t)(`[keybindings] Found ${v.length} validation issue(s)`), V(v);
    return E(i, "ok"), { bindings: _, warnings: v };
  } catch (y) {
    if ((0, import_chunk_jv7av99m.J)(y)) return E(i, "ok"), { bindings: o, warnings: [] };
    return (0, import_chunk_w578pjby.t)(`[keybindings] Error loading ${g}: ${(0, import_chunk_jv7av99m.d)(y)}`), E(i, "keybinding_config_parse_error"), { bindings: o, warnings: [{ type: "parse_error", severity: "error", message: `Couldn't read keybindings.json: ${(0, import_chunk_jv7av99m.d)(y)}` }] };
  }
}
function Fn(e, r, i, o, g) {
  try {
    let y = (0, import_chunk_w578pjby.te)(e), h;
    if (typeof y === "object" && y !== null && "bindings" in y) h = y.bindings;
    else return (0, import_chunk_w578pjby.t)('[keybindings] Invalid keybindings.json: keybindings.json must have a "bindings" array'), E(g, "keybinding_config_invalid_format"), { bindings: i, warnings: [{ type: "parse_error", severity: "error", message: 'keybindings.json must have a "bindings" array', suggestion: 'Use format: { "bindings": [ ... ] }' }] };
    if (!A(h)) {
      let v = !Array.isArray(h) ? '"bindings" must be an array' : "keybindings.json contains invalid block structure", C = !Array.isArray(h) ? 'Set "bindings" to an array of keybinding blocks' : 'Each block must have "context" (string) and "bindings" (object mapping keys to a string action or null)';
      return (0, import_chunk_w578pjby.t)(`[keybindings] Invalid keybindings.json: ${v}`), E(g, "keybinding_config_invalid_structure"), { bindings: i, warnings: [{ type: "parse_error", severity: "error", message: v, suggestion: C }] };
    }
    let w = L(h);
    (0, import_chunk_w578pjby.t)(`[keybindings] Loaded ${w.length} user bindings from ${o}`);
    let k = [...i, ...w];
    G(r, w.length);
    let K = [...I(e), ...F(h, k)];
    if (K.length > 0) (0, import_chunk_w578pjby.t)(`[keybindings] Found ${K.length} validation issue(s)`), V(K);
    return E(g, "ok"), { bindings: k, warnings: K };
  } catch (y) {
    return (0, import_chunk_w578pjby.t)(`[keybindings] Error loading ${o}: ${(0, import_chunk_jv7av99m.d)(y)}`), E(g, "keybinding_config_parse_error"), { bindings: i, warnings: [{ type: "parse_error", severity: "error", message: `Couldn't read keybindings.json: ${(0, import_chunk_jv7av99m.d)(y)}` }] };
  }
}
async function ttl(e, r) {
  if (e.bindings) return e.bindings;
  if (e.warmAttempted) return;
  if ((0, import_chunk_f9x2f6cx.Se)()) return;
  if (q()) return;
  let i = await gn(e, r, { suppressFeatureEvents: true });
  if (e.warmAttempted = true, i.warnings.length > 0) return i.bindings;
  if (!e.bindings) e.bindings = i.bindings, e.warnings = [], e.warmedFromBackend = true, (0, import_chunk_cqa9hrgx.u)("keybinding_load_user_config");
  return e.bindings;
}
function cn(e) {
  if (!e.warmedFromBackend) return false;
  if (q()) return e.bindings = null, e.warnings = [], e.warmedFromBackend = false, true;
  return e.warmedFromBackend = false, false;
}
function ldo(e) {
  if (e.bindings && !cn(e)) return e.bindings;
  return F0n(e).bindings;
}
function F0n(e) {
  if (e.bindings && !cn(e)) return { bindings: e.bindings, warnings: e.warnings };
  e.warmedFromBackend = false;
  let r = R();
  if (!ISe() || (0, import_chunk_0pb268nk.Lr)("keybindings")) return e.bindings = r, e.warnings = [], { bindings: e.bindings, warnings: e.warnings };
  let i = ohr();
  try {
    let o = (0, import_fs.readFileSync)(i, "utf-8"), g = (0, import_chunk_w578pjby.te)(o), y;
    if (typeof g === "object" && g !== null && "bindings" in g) y = g.bindings;
    else return (0, import_chunk_cqa9hrgx.m)("keybinding_load_user_config", "keybinding_config_invalid_format"), e.bindings = r, e.warnings = [{ type: "parse_error", severity: "error", message: 'keybindings.json must have a "bindings" array', suggestion: 'Use format: { "bindings": [ ... ] }' }], { bindings: e.bindings, warnings: e.warnings };
    if (!A(y)) {
      let k = !Array.isArray(y) ? '"bindings" must be an array' : "keybindings.json contains invalid block structure", _ = !Array.isArray(y) ? 'Set "bindings" to an array of keybinding blocks' : 'Each block must have "context" (string) and "bindings" (object mapping keys to a string action or null)';
      return (0, import_chunk_cqa9hrgx.m)("keybinding_load_user_config", "keybinding_config_invalid_structure"), e.bindings = r, e.warnings = [{ type: "parse_error", severity: "error", message: k, suggestion: _ }], { bindings: e.bindings, warnings: e.warnings };
    }
    let h = L(y);
    (0, import_chunk_w578pjby.t)(`[keybindings] Loaded ${h.length} user bindings from ${i}`), e.bindings = [...r, ...h], G(e, h.length);
    let w = I(o);
    if (e.warnings = [...w, ...F(y, e.bindings)], e.warnings.length > 0) (0, import_chunk_w578pjby.t)(`[keybindings] Found ${e.warnings.length} validation issue(s)`), V(e.warnings);
    return (0, import_chunk_cqa9hrgx.u)("keybinding_load_user_config"), { bindings: e.bindings, warnings: e.warnings };
  } catch (o) {
    if ((0, import_chunk_jv7av99m.J)(o)) return (0, import_chunk_cqa9hrgx.u)("keybinding_load_user_config"), e.bindings = r, e.warnings = [], { bindings: e.bindings, warnings: e.warnings };
    return (0, import_chunk_w578pjby.t)(`[keybindings] Error loading ${i}: ${(0, import_chunk_jv7av99m.d)(o)}`), (0, import_chunk_cqa9hrgx.m)("keybinding_load_user_config", "keybinding_config_parse_error"), e.bindings = r, e.warnings = [{ type: "parse_error", severity: "error", message: `Couldn't read keybindings.json: ${(0, import_chunk_jv7av99m.d)(o)}` }], { bindings: e.bindings, warnings: e.warnings };
  }
}
async function ntl(e) {
  if (e.initialized || e.disposed) return;
  if (!ISe() || (0, import_chunk_0pb268nk.Lr)("keybindings")) {
    (0, import_chunk_w578pjby.t)("[keybindings] Skipping file watcher - user customization disabled");
    return;
  }
  let r = ohr(), i = (0, import_path.dirname)(r);
  try {
    if (!(await (0, import_promises.stat)(i)).isDirectory()) {
      (0, import_chunk_w578pjby.t)(`[keybindings] Not watching: ${i} is not a directory`), (0, import_chunk_cqa9hrgx.l)("keybinding_watcher_init", "watch_dir_inaccessible");
      return;
    }
  } catch {
    (0, import_chunk_w578pjby.t)(`[keybindings] Not watching: ${i} does not exist`), (0, import_chunk_cqa9hrgx.l)("keybinding_watcher_init", "watch_dir_inaccessible");
    return;
  }
  e.initialized = true, (0, import_chunk_w578pjby.t)(`[keybindings] Watching for changes to ${r}`), e.watcher = import_chunk_dzf5h538.ZO.watch(r, { persistent: true, ignoreInitial: true, awaitWriteFinish: { stabilityThreshold: On, pollInterval: jn }, ignorePermissionErrors: true, usePolling: true, interval: 2e3, atomic: true }), e.watcher.on("add", (o) => an(e, o)), e.watcher.on("change", (o) => an(e, o)), e.watcher.on("unlink", (o) => Rn(e, o)), e.watcher.on("error", (o) => (0, import_chunk_w578pjby.t)(`[keybindings] watcher error: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "warn" })), (0, import_chunk_w578pjby.Ct)(e), (0, import_chunk_cqa9hrgx.u)("keybinding_watcher_init");
}
async function an(e, r) {
  (0, import_chunk_w578pjby.t)(`[keybindings] Detected change to ${r}`);
  try {
    let i = await gn(e);
    e.bindings = i.bindings, e.warnings = i.warnings, e.warmedFromBackend = false, e.changed.emit(i), (0, import_chunk_cqa9hrgx.u)("keybinding_hot_reload");
  } catch (i) {
    (0, import_chunk_w578pjby.t)(`[keybindings] Error reloading: ${(0, import_chunk_jv7av99m.d)(i)}`), (0, import_chunk_cqa9hrgx.l)("keybinding_hot_reload", "keybinding_reload_failed");
  }
}
function Rn(e, r) {
  (0, import_chunk_w578pjby.t)(`[keybindings] Detected deletion of ${r}`);
  let i = R();
  e.bindings = i, e.warnings = [], e.warmedFromBackend = false, e.changed.emit({ bindings: i, warnings: [] });
}
var X = { "\u2020": "t" };
function ln(e) {
  return Object.hasOwn(X, e);
}
var mds = { \u03C0: "alt+p", \u00F8: "alt+o" };
function Cvi(e) {
  return Object.hasOwn(mds, e);
}
function JF() {
  let e = (0, import_chunk_cg8dqz0a.x)();
  if (e === "macos") return e;
  if (import_chunk_c203g5kd.s.LC_TERMINAL === "iTerm2" || import_chunk_c203g5kd.s.TERM_PROGRAM === "Apple_Terminal" || import_chunk_c203g5kd.s.TERM_PROGRAM === "iTerm.app" || (0, import_chunk_3t7ve0wy.GM)() !== null) return "macos";
  return e;
}
var Wn = { escape: "escape", return: "enter", tab: "tab", backspace: "backspace", delete: "delete", up: "up", down: "down", left: "left", right: "right", pageup: "pageup", pagedown: "pagedown", wheelup: "wheelup", wheeldown: "wheeldown", home: "home", end: "end" };
function shr(e, r, i) {
  let o = false, g;
  for (let y = 0; y < i.length; y++) {
    let h = i[y];
    if (!h || h.context !== r || h.action !== e) continue;
    if (o = true, !fn(i, y)) g = h.chord;
  }
  if (g) return g;
  return o ? null : void 0;
}
function zCe(e, r, i) {
  let o = [];
  return i.forEach((g, y) => {
    if (g.context === r && g.action === e && !fn(i, y)) o.push(g.chord);
  }), o;
}
function rtl(e, r, i) {
  let o = i.filter((g) => g.context === r && g.action === e);
  return o.length > 0 && o.every((g) => i.findLast((y) => y.context === r && N(y.chord, g.chord))?.action === null);
}
function ddo(e, r, i, o) {
  let g, y = -1;
  for (let h of zCe(e, r, i)) {
    let w = o.some((C) => C.context === r && C.action === e && N(C.chord, h)), k = h.length === 1 ? h[0] : void 0, _ = k !== void 0 && !k.ctrl && !k.alt && !k.meta && !k.super, K = 0;
    if (_ && zn.has(k.key)) K = ["up", "down", "left", "right"].includes(k.key) ? 3 : 2;
    else if (_ && k.key.length === 1) K = 1;
    let v = (w ? 0 : 4) + K;
    if (v > y) g = h, y = v;
  }
  return g;
}
var zn = /* @__PURE__ */ new Set(["up", "down", "left", "right", "enter", "escape", "tab", " ", "pageup", "pagedown", "home", "end", "backspace", "delete"]);
function fn(e, r) {
  let i = e[r];
  if (!i) return false;
  for (let o = r + 1; o < e.length; o++) {
    let g = e[o];
    if (g && g.context === i.context && N(g.chord, i.chord)) return true;
  }
  return false;
}
function Avi(e, r, i) {
  let o = null;
  for (let g of i) {
    if (g.context !== r || g.chord.length !== 1) continue;
    let y = g.chord[0];
    if (y && EWe(y, e)) o = g.action;
  }
  return o;
}
function cdo(e, r, i) {
  let o;
  for (let g of i) {
    if (g.chord.length !== 1 || !r.includes(g.context)) continue;
    let y = g.chord[0];
    if (y && EWe(y, e)) o = g.action;
  }
  return o;
}
function otl(e, r, i) {
  let o = /* @__PURE__ */ new Set();
  for (let g of i) {
    let y = g.chord[0];
    if (g.context !== e || g.chord.length !== 1 || g.action === null || !y) continue;
    let h = cdo(y, [e, "Global"], i), w = cdo(y, [r, "Global"], i);
    if (h === g.action && w && w !== h) o.add(w);
  }
  return o;
}
function N(e, r) {
  if (e.length !== r.length) return false;
  for (let i = 0; i < e.length; i++) {
    let o = e[i], g = r[i];
    if (!o || !g || !EWe(o, g)) return false;
  }
  return true;
}
function K1t(e, r, i) {
  let o = shr(e, r, i);
  return o ? M5(o, JF()) : o;
}
function VCe(e) {
  let r = e.name === "enter" ? `
` : e.shortcutKey ?? e.key, i = e.meta;
  if (!e.meta && !e.ctrl && ln(r) && JF() === "macos") r = X[r], i = true;
  let o = Wn[e.name] ?? (r.length === 1 ? r.toLowerCase() : null);
  if (!o) return null;
  let y = !(e.shift && r.length === 1 && e.name.length === 1 && r !== e.name && r.toLowerCase() === r.toUpperCase()) && (e.shift || r.length === 1 && r !== r.toLowerCase() && r === r.toUpperCase());
  return { key: o, ctrl: e.ctrl, alt: i, shift: y, meta: i, super: e.superKey };
}
function EWe(e, r) {
  return e.key === r.key && e.ctrl === r.ctrl && e.shift === r.shift && (e.alt || e.meta) === (r.alt || r.meta) && e.super === r.super;
}
function yn(e, r) {
  if (e.length >= r.chord.length) return false;
  for (let i = 0; i < e.length; i++) {
    let o = e[i], g = r.chord[i];
    if (!o || !g) return false;
    if (!EWe(o, g)) return false;
  }
  return true;
}
function q1t(e, r, i, o) {
  if (e.name === "escape" && o !== null) return { type: "chord_cancelled" };
  let g = VCe(e);
  if (!g) {
    if (o !== null) return { type: "chord_cancelled" };
    return { type: "none" };
  }
  let y = o ? [...o, g] : [g], h = null, w;
  for (let k of i) {
    if (!r.includes(k.context)) continue;
    if (k.chord.length > y.length) {
      if (yn(y, k)) h ??= /* @__PURE__ */ new Map(), h.set(i0(k.chord), k.action);
    } else if (N(y, k.chord)) w = k;
  }
  if (h !== null) {
    for (let k of h.values()) if (k !== null) return { type: "chord_started", pending: y };
  }
  if (w) {
    if (w.action === null) return { type: "unbound" };
    return { type: "match", action: w.action };
  }
  if (o !== null) return { type: "chord_cancelled" };
  return { type: "none" };
}
function hds(e, r, i, o) {
  if (e.name === "escape" && o !== null) return { type: "chord_cancelled" };
  let g = VCe(e);
  if (!g) {
    if (o !== null) return { type: "chord_cancelled" };
    return { type: "none" };
  }
  let y = o ? [...o, g] : [g], h = new Set(r), w = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
  for (let _ of i) {
    if (!h.has(_.context)) continue;
    if (_.chord.length > y.length) {
      if (yn(y, _)) w.set(i0(_.chord), _.action);
    } else if (N(y, _.chord)) k.set(_.context, _);
  }
  for (let _ of w.values()) if (_ !== null) return { type: "chord_started", pending: y };
  for (let _ of r) {
    let K = k.get(_);
    if (K) {
      if (K.action === null) return { type: "unbound" };
      return { type: "match", action: K.action };
    }
  }
  if (o !== null) return { type: "chord_cancelled" };
  return { type: "none" };
}
var Un = new Set(import_chunk_q4pszsad.Dlt);
function pn(e) {
  if (e.startsWith("command:")) return (0, import_chunk_78g0060s.S)("command:custom");
  if (Un.has(e)) return (0, import_chunk_78g0060s.Fr)(e);
  return (0, import_chunk_78g0060s.S)("unknown");
}
var Yn = /^[A-Za-z0-9 +\-_/[\]\u2191\u2193\u2190\u2192]{1,32}$/u;
function Hn(e) {
  return Yn.test(e) ? (0, import_chunk_78g0060s.Fr)(e) : (0, import_chunk_78g0060s.S)("invalid");
}
var Gn = 1e3;
function ihr(e) {
  let r = Date.now(), i = OP.actionFiredLoggedAt, o = i.get(e);
  if (o !== void 0 && r - o < Gn) return;
  i.set(e, r), (0, import_chunk_y53wbr8a.a)("tengu_keybinding_fired", { action_id: pn(e) });
}
function Urn(e, r, i, o) {
  (0, import_chunk_y53wbr8a.a)("tengu_keybinding_fallback_used", { action: pn(e), context: (0, import_chunk_78g0060s.f)(r), fallback: Hn(i), reason: (0, import_chunk_78g0060s.f)(o) });
}
