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
var chunk_3jaw45cy_exports = {};
__export(chunk_3jaw45cy_exports, {
  Rei: () => Rei,
  eAn: () => eAn,
  xei: () => xei
});
module.exports = __toCommonJS(chunk_3jaw45cy_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_xfr8663h = require("/$bunfs/root/chunk-xfr8663h.js");
var import_chunk_839h1d5e = require("/$bunfs/root/chunk-839h1d5e.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var T = 255, h = 5, Rei = { "service.name": "claude-code", "service.version": "unknown", "os.type": "unknown", "os.version": "unknown", "host.arch": "unknown", "wsl.version": void 0 }, xei = new Set(Object.keys(Rei)), O = (0, import_chunk_t57w17k7.de)((0, import_chunk_839h1d5e.Co)(v, (a, E) => `${E}\0${a ?? ""}`), (a) => a.cache.clear?.());
function eAn() {
  return O(import_chunk_c203g5kd.s.OTEL_RESOURCE_ATTRIBUTES, (0, import_chunk_xfr8663h.B2t)("OTEL_METRICS_INCLUDE_RESOURCE_ATTRIBUTES"));
}
function v(a, E) {
  let u = (a ?? "").split(","), d = {}, r = [];
  for (let [n, o] of u.entries()) {
    if (o.trim() === "") continue;
    let c = `OTEL_RESOURCE_ATTRIBUTES: Entry ${n + 1} of ${u.length} (counting every part between commas) was left off the OpenTelemetry resource because`, l = o.split("="), y = (l[0] ?? "").trim(), g = (l[1] ?? "").trim();
    if (l.length === 1) {
      r.push(`${c} it has no "=". Write each entry as key=value, and a comma inside a value as %2C.`);
      continue;
    }
    if (l.length > 2) {
      r.push(`${c} it has more than one "=". Write an "=" inside a key or value as %3D.`);
      continue;
    }
    if (y === "") {
      r.push(`${c} it has no key before its "=". You can put a key before the "=", or remove the entry.`);
      continue;
    }
    let m, p;
    try {
      m = decodeURIComponent(y), p = decodeURIComponent(g);
    } catch {
      r.push(`${c} its percent-encoding is invalid. Each "%" must start a code such as %2C, and the codes must decode to UTF-8 text. To write a "%" itself, use %25.`);
      continue;
    }
    if (m.length > T || p.length > T) {
      r.push(`${c} its key or value is over ${T} characters once decoded. Shorten it.`);
      continue;
    }
    d[m] = p;
  }
  let i = r.slice(0, h), f = r.length - h;
  if (f > 0) i.push(`OTEL_RESOURCE_ATTRIBUTES: ${f} more ${f === 1 ? "entry was" : "entries were"} left off the OpenTelemetry resource.`);
  let R = [...xei].filter((n) => Object.hasOwn(d, n));
  if (r.length > 0 && R.length > 0) i.push(`OTEL_RESOURCE_ATTRIBUTES: While an entry is left off, the value sets none of these OpenTelemetry resource attributes: ${R.join(", ")}.`);
  if (r.length > 0) i.push(`OTEL_RESOURCE_ATTRIBUTES: After you fix ${r.length === 1 ? "that entry" : "those entries"}, restart Claude Code. The OpenTelemetry resource is built only at startup.`);
  let e = u.flatMap((n, o) => E && (0, import_chunk_7cfjrnwy.Mt)(n, "=") === 1 && Object.keys((0, import_chunk_xfr8663h.Yko)(n)).length === 0 ? [o + 1] : []);
  if (e.length > 0) {
    let n = e.length - h, o = `Entry ${e[0]}`;
    if (n > 0) o = `Entries ${e.slice(0, h).join(", ")}, and ${n} ${n === 1 ? "other" : "others"}`;
    else if (e.length > 2) o = `Entries ${e.slice(0, -1).join(", ")}, and ${e.at(-1)}`;
    else if (e.length === 2) o = `Entries ${e[0]} and ${e[1]}`;
    i.push(`OTEL_RESOURCE_ATTRIBUTES: ${o} of ${u.length} (counting every part between commas) ${e.length === 1 ? "was" : "were"} left off metric points, events, and spans. Write ${e.length === 1 ? "it" : "them"} with a key of letters, digits, dots, dashes, or underscores, and a value in printable ASCII without spaces, semicolons, or backslashes. In a value, percent-encode anything else: a space as %20, a "%" as %25. Keep the key and the value to ${import_chunk_xfr8663h.Yws} characters each as written, where %20 counts as three.`);
  }
  for (let n of i) (0, import_chunk_w578pjby.t)(`[3P telemetry] ${n}`, { level: "warn" });
  return { attributes: d, notices: i, isEveryEntryRead: r.length === 0 };
}
