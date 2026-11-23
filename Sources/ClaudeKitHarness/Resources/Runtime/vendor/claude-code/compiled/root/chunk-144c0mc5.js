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
var chunk_144c0mc5_exports = {};
__export(chunk_144c0mc5_exports, {
  eUe: () => eUe
});
module.exports = __toCommonJS(chunk_144c0mc5_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_2vn4k5m6 = require("/$bunfs/root/chunk-2vn4k5m6.js");
var import_chunk_em330z26 = require("/$bunfs/root/chunk-em330z26.js");
var import_chunk_wwft95x8 = require("/$bunfs/root/chunk-wwft95x8.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var K = /AndroidManifest\.xml|<manifest xmlns:android=/, P = /com\.android\.(application|library|tools\.build)/, F = /\bimport android\./, I = new RegExp([String.raw`adb(?:\.exe)?\s`, String.raw`emulator(?:\.exe)?\s+(?:-|@)`, String.raw`(?:sdkmanager|avdmanager)\b`, String.raw`(?<gradle>gradlew?(?:\.bat)?\s)`, String.raw`(?:npx\s+)?react-native\s+run-android\b`].join("|"), "y"), G = /\b(?:assemble|install|bundle)\w*(?:Debug|Release)\b/, g = /\\\n|[&|;\n]/g, v = /[;&|(]/, C = /[\n\r\u2028\u2029]/, O = /\w+=|(?:sudo|time|env)(?=\s)/y, _ = /[;&|(\\/]|\s+/g, W = [".kt", ".kts", ".java"], V = /* @__PURE__ */ new Set([import_chunk_rb36kwbn.lt, import_chunk_rb36kwbn.Dt]);
function R() {
  return { kotlinOrJavaFileEdited: false, evidence: null };
}
function A(e) {
  return e.kotlinOrJavaFileEdited && e.evidence !== null;
}
function N(e, n) {
  for (let o of n) {
    if (A(e)) return;
    let r = o.type === "progress" && (o.data.type === "agent_progress" || o.data.type === "skill_progress") ? o.data.message : o;
    if (r.type === "assistant") {
      if (!Array.isArray(r.message.content)) continue;
      for (let s of r.message.content) {
        if (s.type !== "tool_use") continue;
        let t = s.input;
        if (typeof t !== "object" || t === null) continue;
        if (V.has(s.name)) {
          if ("file_path" in t && typeof t.file_path === "string" && U(t.file_path)) e.kotlinOrJavaFileEdited = true;
          if (e.evidence === null) e.evidence = "content" in t && b(t.content) || "new_string" in t && b(t.new_string) || null;
        } else if (e.evidence === null && import_chunk_wwft95x8.dp.includes(s.name) && "command" in t && typeof t.command === "string" && B(t.command)) e.evidence = "android_command";
      }
    } else if (r.type === "user" && e.evidence === null) {
      if (!Array.isArray(r.message.content)) continue;
      for (let s of r.message.content) {
        if (s.type !== "tool_result") continue;
        let t = J(s.content);
        if (t !== null) {
          e.evidence = t;
          break;
        }
      }
    }
  }
}
function B(e) {
  let n = 0, o = true, r = true, s = false, t = 0;
  for (; ; ) {
    if (r) {
      I.lastIndex = n;
      let l = I.exec(e), d = I.lastIndex;
      if (l !== null) {
        if (l.groups?.gradle === void 0) return true;
        if (d >= t) {
          g.lastIndex = d;
          let p = g.exec(e);
          while (p !== null && p[0] === "\\\n") p = g.exec(e);
          if (t = p?.index ?? e.length, G.test(e.slice(d, t))) return true;
        }
      }
    }
    if (o) O.lastIndex = n, s ||= O.test(e);
    _.lastIndex = n;
    let a = _.exec(e);
    if (a === null) return false;
    if (n = _.lastIndex, a[0] === "/" || a[0] === "\\") o = false;
    else if (v.test(a[0])) o = r = true;
    else o = r = s || v.test(e.charAt(a.index - 1)) || C.test(e.charAt(n - 1)), s = false;
  }
}
function U(e) {
  let n = e.toLowerCase();
  return W.some((o) => n.endsWith(o));
}
function b(e) {
  if (typeof e !== "string") return null;
  if (F.test(e)) return "android_import";
  return E(e);
}
function E(e) {
  if (K.test(e)) return "android_manifest";
  return P.test(e) ? "gradle_plugin" : null;
}
function J(e) {
  if (typeof e === "string") return E(e);
  if (!Array.isArray(e)) return null;
  for (let n of e) {
    let o = n.type === "text" ? E(n.text) : null;
    if (o !== null) return o;
  }
  return null;
}
var H = /IPHONEOS_DEPLOYMENT_TARGET|TARGETED_DEVICE_FAMILY/, Y = /\bimport UIKit\b|#import\s*<UIKit\/|\.iOS\(/, X = [".swift", ".m", ".mm", ".h"], z = /simctl|devicectl|iphone(?:os|simulator)|platform=iOS|-apple-ios|Simulator/i, S = String.raw`-sdk\s+\S*iphone(?:os|simulator)`, q = String.raw`(?:"[^"]*"|'[^']*'|[^\s"'])*`, Q = new RegExp(String.raw`^(?:(?:\w+=${q}|sudo|time|env|nice|caffeinate|xcrun|timeout\s+\S+|arch\s+-\S+)\s+){0,20}` + String.raw`(?:\S*[\\/])?(?:` + [String.raw`(?:xcrun\s[\s\S]*?)?\b(?:simctl|devicectl)\b`, String.raw`xcrun\s[\s\S]*${S}`, String.raw`xcodebuild\s[\s\S]*(?:${S}|platform=iOS\b)`, String.raw`swift\s+(?:build|test|run)\s[\s\S]*(?:${S}|-triple\s+\S*-apple-ios)`, String.raw`open\s[\s\S]*-a\s+["']?Simulator\b`].join("|") + ")", "i"), Z = /\bsimctl\b|-sdk iphonesimulator|-sdk iphoneos|platform=iOS Simulator/, ee = /* @__PURE__ */ new Set([import_chunk_rb36kwbn.lt, import_chunk_rb36kwbn.Dt]);
function h() {
  return { swiftFileEdited: false, evidence: null, conclusiveEvidence: null };
}
function y(e) {
  return e.swiftFileEdited && e.evidence !== null ? e.evidence : e.conclusiveEvidence;
}
function te(e) {
  return y(e) !== null;
}
function x(e, n) {
  for (let o of n) {
    if (te(e)) return;
    let r = o.type === "progress" && (o.data.type === "agent_progress" || o.data.type === "skill_progress") ? o.data.message : o;
    if (r.type === "assistant") {
      if (!Array.isArray(r.message.content)) continue;
      for (let s of r.message.content) {
        if (s.type !== "tool_use") continue;
        let t = s.input;
        if (typeof t !== "object" || t === null) continue;
        if (ee.has(s.name)) {
          let a = "file_path" in t && typeof t.file_path === "string" ? t.file_path.toLowerCase() : "";
          if (a.endsWith(".swift")) e.swiftFileEdited = true;
          let l = X.some((d) => a.endsWith(d));
          if ("content" in t) w(e, t.content, l);
          if ("new_string" in t) w(e, t.new_string, l);
        } else if (import_chunk_wwft95x8.dp.includes(s.name) && "command" in t && typeof t.command === "string") {
          let a = re(t.command);
          if (a || Z.test(t.command)) c(e, "ios_command", a);
        }
      }
    } else if (r.type === "user") {
      if (!Array.isArray(r.message.content)) continue;
      for (let s of r.message.content) if (s.type === "tool_result") for (let t of ne(s.content)) M(e, t);
    }
  }
}
function c(e, n, o) {
  if (e.evidence ??= n, o) e.conclusiveEvidence ??= n;
}
function M(e, n) {
  if (import_chunk_em330z26.M3o.test(n)) c(e, "xcode_project", true);
  else if (H.test(n)) c(e, "xcode_project", false);
}
function w(e, n, o) {
  if (typeof n !== "string") return;
  if (Y.test(n)) c(e, "uikit_import", o);
  M(e, n);
}
function ne(e) {
  if (typeof e === "string") return [e];
  return Array.isArray(e) ? e.flatMap((n) => n.type === "text" ? [n.text] : []) : [];
}
function re(e) {
  return z.test(e) && (0, import_chunk_2vn4k5m6.x$t)(e).some((n) => Q.test(n));
}
var oe = { ios_app: () => {
  let e = h();
  return { absorb: (n) => x(e, n), trigger: () => y(e) };
}, android_app: () => {
  let e = R();
  return { absorb: (n) => N(e, n), trigger: () => A(e) ? e.evidence : null };
} };
function k() {
  return new Map(import_chunk_xfj2cwfv.b6n.map((e) => [e, oe[e]()]));
}
class L {
  #t = k();
  #e = /* @__PURE__ */ new Set();
  #n = /* @__PURE__ */ new Set();
  #r = /* @__PURE__ */ new WeakSet();
  get intents() {
    return this.#e;
  }
  absorb(e) {
    let n = [];
    if (this.#e.size === this.#t.size) return n;
    let o = e.filter((r) => !this.#r.has(r));
    for (let r of o) if ((0, import_chunk_ma3kja9f.T)(r)) this.#r.add(r);
    for (let [r, s] of this.#t) {
      if (this.#e.has(r)) continue;
      let t = null;
      try {
        s.absorb(o);
        let l = s.trigger();
        if (l !== null) (0, import_chunk_865at33z.Fs)({ type: "system", subtype: "dev_intent", kind: r, trigger: l }), this.#e.add(r), t = l;
      } catch (l) {
        if ((0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(l), "dev intent fold")), !this.#n.has(r)) this.#n.add(r), (0, import_chunk_cqa9hrgx.m)("dev_intent_detect", "fold_threw");
      }
      let a = t;
      if (a !== null) n.push(r), (0, import_chunk_cqa9hrgx.u)("dev_intent_detect", { kind: (0, import_chunk_78g0060s.f)(r), trigger: (0, import_chunk_78g0060s.f)(a) });
    }
    return n;
  }
  reset() {
    this.#t = k(), this.#e.clear(), this.#n.clear(), this.#r = /* @__PURE__ */ new WeakSet();
  }
}
var eUe = new import_chunk_2904xtvq.j(() => new L());
