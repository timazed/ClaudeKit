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
var chunk_svw2ngjw_exports = {};
__export(chunk_svw2ngjw_exports, {
  AVe: () => AVe,
  R1r: () => R1r,
  gFo: () => gFo,
  hFo: () => hFo,
  m9l: () => m9l,
  p9l: () => p9l
});
module.exports = __toCommonJS(chunk_svw2ngjw_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_hhhczk0w = require("/$bunfs/root/chunk-hhhczk0w.js");
var import_chunk_fqra1yx2 = require("/$bunfs/root/chunk-fqra1yx2.js");
var import_chunk_nbyg4q5d = require("/$bunfs/root/chunk-nbyg4q5d.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
(0, import_chunk_adx6804h.B)();
var h = 1, R1r = "upgrade_relay_marker";
function k(e) {
  return e === R1r;
}
var g = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, R = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ schema_version: (0, import_chunk_adx6804h.E)().int(), conversation_uuid: (0, import_chunk_adx6804h.n)().regex(g), anchor_line_uuid: (0, import_chunk_adx6804h.n)().regex(g), anthropic_version: (0, import_chunk_adx6804h.n)().regex(/^\d{4}-\d{2}-\d{2}$/), model: (0, import_chunk_adx6804h.n)().min(1).optional(), automation_tools: (0, import_chunk_adx6804h.P)().optional().catch(void 0) })), y = 16384;
function hFo(e) {
  if (Buffer.byteLength(e, "utf8") > y) return { ok: false, reason: `marker exceeds the ${y}-byte cap` };
  let d;
  try {
    d = (0, import_chunk_w578pjby.te)(e);
  } catch {
    return { ok: false, reason: "marker is not valid JSON" };
  }
  let o = (0, import_chunk_adx6804h.c)({ schema_version: (0, import_chunk_adx6804h.E)().int() }).loose().safeParse(d);
  if (!o.success) return { ok: false, reason: "marker has no integer schema_version" };
  if (o.data.schema_version > h) return { ok: false, reason: `marker schema_version ${o.data.schema_version} exceeds this consumer's ceiling ${h}` };
  if (o.data.schema_version < 1) return { ok: false, reason: `marker schema_version ${o.data.schema_version} is below the producer's floor of 1` };
  let a = R().safeParse(d);
  if (!a.success) return { ok: false, reason: `marker shape invalid: ${a.error.issues[0]?.message ?? "unknown issue"}` };
  return { ok: true, marker: a.data };
}
var x = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.n)().optional(), subtype: (0, import_chunk_adx6804h.n)().optional(), uuid: (0, import_chunk_adx6804h.n)().optional(), content: (0, import_chunk_adx6804h.n)().optional() }).loose()), v = { armed: false, code: "latch_not_inactive", reason: "teleport state is not inactive" };
function AVe(e) {
  (0, import_chunk_42tcgre6.q)(e.outcome === "refused" ? "warn" : "info", "cli_teleport_arm_verdict", e);
}
var T = 67108864;
function w(e) {
  try {
    let d = (0, import_chunk_w578pjby.Cs)(e), o = x().safeParse(d);
    return o.success ? o.data : null;
  } catch {
    return null;
  }
}
var O = [R1r, "\\u005", "\\u006", "\\u007"];
function L(e) {
  let d = Math.max(1e3, e.length / 4096), o = /* @__PURE__ */ new Set();
  for (let a of O) {
    let i = e.indexOf(a);
    while (i !== -1) {
      if (o.add(e.lastIndexOf(`
`, i) + 1), o.size > d) return e.toString().split(`
`);
      let r = e.indexOf(`
`, i);
      i = r === -1 ? -1 : e.indexOf(a, r);
    }
  }
  return [...o].sort((a, i) => a - i).map((a) => {
    let i = e.indexOf(`
`, a), r = i === -1 ? e.length : i;
    return typeof e === "string" ? e.slice(a, r) : e.toString("utf8", a, r);
  });
}
function M({ rawSeedLines: e, liveMessages: d, ingressOrigin: o, remoteSessionId: a }) {
  if ((0, import_chunk_fqra1yx2.zI)().status !== "inactive") return v;
  let i = null;
  for (let m = e.length - 1; m >= 0; m--) {
    let _ = e[m];
    if (_.trim() === "") continue;
    let f = w(_);
    if (f?.type === "system" && k(f.subtype)) {
      i = f;
      break;
    }
  }
  if (i === null) return { armed: false, code: "no_marker_line", reason: "no teleport marker line in the seed transcript" };
  let r = i.uuid, s = i.content;
  if (typeof r !== "string" || typeof s !== "string") return { armed: false, code: "marker_line_shape", reason: "marker line is missing its uuid or string content" };
  return gFo({ markerLineUuid: r, markerContent: s, liveMessages: d, ingressOrigin: o, remoteSessionId: a });
}
function gFo({ markerLineUuid: e, markerContent: d, liveMessages: o, ingressOrigin: a, remoteSessionId: i }) {
  if ((0, import_chunk_fqra1yx2.zI)().status !== "inactive") return v;
  let r = hFo(d);
  if (!r.ok) return { armed: false, code: "marker_refused", reason: r.reason };
  let s = o.map((f) => f.uuid), m = s.indexOf(r.marker.anchor_line_uuid);
  if (m === -1) return { armed: false, code: "anchor_not_in_view", reason: "marker anchor line uuid is not present in the hydrated view" };
  if (s.indexOf(r.marker.anchor_line_uuid, m + 1) !== -1) return { armed: false, code: "anchor_not_unique", reason: "marker anchor line uuid occurs more than once in the hydrated view \u2014 refusing a possibly planted duplicate" };
  if (o.slice(m + 1).some((f) => f.type === "attachment" && f.attachment.type === "thinking_stripped" && (0, import_chunk_bzyb60p0.xos)(f.attachment) === void 0)) return { armed: false, code: "relay_already_ended", reason: "the relay already ended: a whole-history thinking_stripped marker follows the marker anchor in the hydrated view" };
  let _ = s.slice(0, m + 1);
  return (0, import_chunk_fqra1yx2.msi)({ status: "active", marker: r.marker, markerLineUuid: e, preAnchorLineUuids: _, ingressOrigin: a, remoteSessionId: i }), (0, import_chunk_w578pjby.t)(`teleport relay armed (server-driven): marker line ${e}, anchor ${r.marker.anchor_line_uuid}, ${_.length} guarded pre-anchor lines`), { armed: true };
}
function p9l(e, d) {
  if ((0, import_chunk_fqra1yx2.k8o)(), !(0, import_chunk_hhhczk0w.D4s)()) {
    AVe({ outcome: "absent" });
    return;
  }
  if (d) {
    b(`boot_unreached_${e}`);
    return;
  }
  (0, import_chunk_cqa9hrgx.l)("upgrade_teleport_cache", `boot_unreached_${e}`), AVe({ outcome: "refused", error_code: `boot_unreached_${e}` }), (0, import_chunk_w578pjby.t)(`teleport relay carriers present but the resume lane exited before boot (${e}) \u2014 standard path`, { level: "warn" });
}
async function A(e, d) {
  let o = (0, import_chunk_bzyb60p0.Mh)(e), a = (0, import_chunk_nbyg4q5d.B_)(o, d);
  if (a !== void 0) {
    let r = await (0, import_chunk_bzyb60p0.mro)(a.key, T, a.backend).catch((s) => {
      (0, import_chunk_w578pjby.t)(`teleport relay seed read through storage threw; falling back to the file: ${String(s)}`, { level: "warn" });
      return;
    });
    if (r === null) throw Error("seed transcript stream not found");
    if (r?.ok) return r.content;
    if (r !== void 0) {
      let s = "telemetryCode" in r.error ? r.error.telemetryCode : void 0;
      if (s === "ELOOP" || s === "ENXIO") throw (0, import_chunk_w578pjby.t)(`teleport relay seed read refused by storage (${s}); the file is not re-read directly`, { level: "warn" }), Error("seed transcript refused by storage: a linked or indirect transcript file is not read");
      (0, import_chunk_w578pjby.t)(`teleport relay seed read through storage failed (${r.error.code}); falling back to the file`, { level: "warn" });
    }
  }
  let { bytes: i } = await (0, import_chunk_w578pjby.NLs)(o, T);
  return i;
}
async function m9l(e, d, o, a) {
  try {
    let i = (0, import_chunk_hhhczk0w.Uve)();
    if (!i) {
      let r = (0, import_chunk_hhhczk0w.H4s)();
      if (r !== null) (0, import_chunk_cqa9hrgx.l)("upgrade_teleport_cache", "env_config_refused"), AVe({ outcome: "refused", error_code: "env_config_refused", cause: r }), (0, import_chunk_w578pjby.t)(`teleport relay carriers present but env config refused (${r}) \u2014 standard path`, { level: "warn" });
      else AVe({ outcome: "absent" });
      return;
    }
    try {
      let r = await A(e, o), s = M({ rawSeedLines: L(r), liveMessages: d, ingressOrigin: i.ingressOrigin, remoteSessionId: i.remoteSessionId });
      if (a && !s.armed && s.code === "no_marker_line") b(s.code);
      else if (!s.armed) (0, import_chunk_cqa9hrgx.l)("upgrade_teleport_cache", s.code), AVe({ outcome: "refused", error_code: s.code }), (0, import_chunk_w578pjby.t)(`teleport relay not armed: ${s.reason}`);
      else (0, import_chunk_cqa9hrgx.u)("upgrade_teleport_cache"), AVe({ outcome: "armed" });
    } catch (r) {
      (0, import_chunk_cqa9hrgx.l)("upgrade_teleport_cache", "boot_failed"), AVe({ outcome: "refused", error_code: "boot_failed" }), (0, import_chunk_w578pjby.t)(`teleport relay boot failed: ${String(r)}`, { level: "warn" });
    }
  } finally {
    (0, import_chunk_fqra1yx2.k8o)();
  }
}
function b(e) {
  (0, import_chunk_w578pjby.Ct)(import_chunk_fqra1yx2._sr), (0, import_chunk_fqra1yx2.ysi)(e), AVe({ outcome: "awaiting_handoff" }), (0, import_chunk_w578pjby.t)(`prompt-cache relay not armed at boot (${e}); a hand-off may still arm it`);
}
