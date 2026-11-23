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
var chunk_bsnb5bky_exports = {};
__export(chunk_bsnb5bky_exports, {
  Kpe: () => Kpe,
  L$n: () => L$n,
  LWt: () => LWt,
  M_s: () => M_s,
  NWt: () => NWt,
  Nwr: () => Nwr,
  Tln: () => Tln,
  UP: () => UP,
  Vje: () => Vje,
  agl: () => agl,
  cgl: () => cgl,
  dgl: () => dgl,
  fFi: () => fFi,
  fgl: () => fgl,
  iat: () => iat,
  igl: () => igl,
  j8e: () => j8e,
  l4: () => l4,
  lgl: () => lgl,
  lle: () => lle,
  nyo: () => nyo,
  oyo: () => oyo,
  pFi: () => pFi,
  pgl: () => pgl,
  ryo: () => ryo,
  sat: () => sat,
  sgl: () => sgl,
  syo: () => syo,
  t9: () => t9,
  uFi: () => uFi,
  ugl: () => ugl,
  wre: () => wre
});
module.exports = __toCommonJS(chunk_bsnb5bky_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_qhpw13wh = require("/$bunfs/root/chunk-qhpw13wh.js");
var import_chunk_q2a93xh8 = require("/$bunfs/root/chunk-q2a93xh8.js");
var import_chunk_qtg8rez4 = require("/$bunfs/root/chunk-qtg8rez4.js");
var import_chunk_3a2r0s2z = require("/$bunfs/root/chunk-3a2r0s2z.js");
var import_chunk_ddfyyyy7 = require("/$bunfs/root/chunk-ddfyyyy7.js");
var import_chunk_s12gh88k = require("/$bunfs/root/chunk-s12gh88k.js");
var import_chunk_ac8t6db0 = require("/$bunfs/root/chunk-ac8t6db0.js");
var import_chunk_7j8he8m3 = require("/$bunfs/root/chunk-7j8he8m3.js");
var import_chunk_rnm2beqc = require("/$bunfs/root/chunk-rnm2beqc.js");
var import_chunk_qwbhh2k3 = require("/$bunfs/root/chunk-qwbhh2k3.js");
var import_chunk_7e12xj51 = require("/$bunfs/root/chunk-7e12xj51.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_crypto = require("crypto");
function j8e() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_ARTIFACT_DB ?? true;
}
function sat() {
  return j8e() && (import_chunk_c203g5kd.s.CLAUDE_CODE_ARTIFACT_DB_STR_REPLACE ?? (0, import_chunk_865at33z.b)("tengu_umber_stile", false)) === true;
}
var Re = "/api/frame/db/agent", Je = 5e3;
class Y extends import_chunk_jv7av99m.Ie {
}
var ae = String.raw`(?!\.\.?(?:/|$))[A-Za-z0-9_\-.~:@+]{1,200}`, wre = new RegExp(`^${ae}$`), lle = new RegExp(`^${ae}(?:/${ae}){0,14}$`);
function L$n(e) {
  return ((0, import_chunk_7cfjrnwy.Mt)(e, "/") + 1) % 2 === 1;
}
function nyo(e) {
  let t = (n) => n.length > 120 ? `${n.slice(0, 60)}\u2026${n.slice(-40)}` : n, r = e.split("/"), c = r.length, o = t(r.slice(0, -1).join("/")), a = t(r[c - 1]);
  return `collection '${t(e)}' has ${c} segments, which makes it a document path, not a collection: collection paths have an odd number of segments (collection/document/collection/\u2026) and the document is collection + doc_id. For that document use collection '${o}' with doc_id '${a}'; for a collection inside it, add one more segment. Per-user data follows the same rule \u2014 collection 'data/users/<id>' (3 segments) holds that user's documents, so 'data/users/<id>/decks' is one document and 'data/users/<id>/decks/cards' a collection.`;
}
var t9 = 1e3, LWt = ["get", "list", "query"], Vje = ["set", "update", "delete"], UP = "str_replace", or = [...Vje, UP], NWt = ["view", "interact", "admin"];
function sgl() {
  return (0, import_crypto.randomBytes)(16).toString("base64url");
}
var iat = 200, ryo = /^(?!__.*__$)[^\p{Cc}\p{Cf}\p{Zl}\p{Zp}"\\./[\]]{1,200}$/u, Kpe = 262144, Tln = 4 * Kpe, Qe = 4194304, ue = 16384, Nwr = 1e3, uFi = 100, l4 = 50, oyo = 1048576, $e = ["edit_no_match", "edit_ambiguous", "edit_field_missing", "edit_field_not_string", "version_mismatch"];
function le(e) {
  return $e.some((t) => t === e);
}
var Ze = new Map([["not_found", "not_found"], ["invalid_argument", "invalid_argument"], ["quota_or_rate", "quota_or_rate"], ["busy", "busy"], ["upstream_auth", "upstream_auth"], ["store_unavailable", "store_unavailable"], ["not_declared", "not_declared"], ["too_large", "too_large"], ["quota_exceeded", "quota_exceeded"], ["store_read_only", "store_read_only"], ["invalid-argument", "invalid_argument"], ["not-found", "not_found"], ["resource-exhausted", "quota_or_rate"], ["resource_exhausted", "quota_or_rate"], ["data-unavailable", "store_unavailable"], ["unavailable", "store_unavailable"], ["upstream-error", "store_unavailable"], ...$e.map((e) => [e, e])]), et = /* @__PURE__ */ new Set(["an OAuth access token is required", "a directly presented OAuth access token is required", "db verbs require a user-scoped OAuth token, not an org service key"]);
function tt(e, t) {
  if (e !== 403 || typeof t !== "string") return;
  let r = t.trim();
  if (et.has(r)) return { code: "credential_rejected", reason: "custody_403" };
  if (r.startsWith(import_chunk_ac8t6db0.hZ)) return { code: "cloud_unavailable", reason: "ccr_credential_refused" };
  if ((0, import_chunk_ac8t6db0.mle)(e, r)) return { code: "restricted_sandbox", reason: "restricted_sandbox" };
  return;
}
function rt(e) {
  if (e === 404 || e === 403) return "not_found";
  if (e === 400 || e === 422) return "invalid_argument";
  if (e === 413) return "too_large";
  if (e === 429) return "quota_or_rate";
  if (e === 409 || e === 412) return "busy";
  if (e === 401) return "upstream_auth";
  return "store_unavailable";
}
function O(e) {
  switch (e) {
    case "not_found":
    case "invalid_argument":
    case "too_large":
    case "not_declared":
      return "invalid_argument";
    case "quota_or_rate":
      return "resource_exhausted";
    case "quota_exceeded":
      return "quota_exceeded";
    case "busy":
    case "upstream_auth":
    case "store_unavailable":
    case "credential_rejected":
    case "cloud_unavailable":
    case "vm_unavailable":
    case "restricted_sandbox":
    case "network_off":
      return "unavailable";
    case "edit_no_match":
    case "edit_ambiguous":
    case "edit_field_missing":
    case "edit_field_not_string":
    case "version_mismatch":
    case "store_read_only":
      return e;
  }
}
var igl = ["eq", "ne", "in", "not-in", "lt", "lte", "gt", "gte", "array-contains"], agl = ["==", "!=", "<", "<=", ">", ">="], De = { "==": "eq", "!=": "ne", "<": "lt", "<=": "lte", ">": "gt", ">=": "gte" };
function nt(e) {
  return Object.hasOwn(De, e);
}
function at(e) {
  return nt(e) ? De[e] : e;
}
var X = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.Cg)(true).optional().catch(void 0)), Ae = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.Ci)().optional().catch(void 0)), ot = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ exists: (0, import_chunk_rnm2beqc.Ci)(), data: (0, import_chunk_rnm2beqc.mk)((0, import_chunk_rnm2beqc.we)(), (0, import_chunk_rnm2beqc.vf)()).optional(), version: (0, import_chunk_rnm2beqc.nr)().int().optional(), updatedAt: (0, import_chunk_rnm2beqc.we)().optional(), authoredByOthers: X(), [import_chunk_qhpw13wh.s9]: X(), outside_writer: Ae() })), it = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ docs: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.on)({ id: (0, import_chunk_rnm2beqc.we)(), data: (0, import_chunk_rnm2beqc.mk)((0, import_chunk_rnm2beqc.we)(), (0, import_chunk_rnm2beqc.vf)()), version: (0, import_chunk_rnm2beqc.nr)().int().optional(), updatedAt: (0, import_chunk_rnm2beqc.we)().optional() })), nextCursor: (0, import_chunk_rnm2beqc.we)().optional(), authoredByOthers: X(), [import_chunk_qhpw13wh.s9]: X(), outside_writer: Ae() })), Ee = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ documents: (0, import_chunk_rnm2beqc.nr)().int().safe().nonnegative(), maxDocuments: (0, import_chunk_rnm2beqc.nr)().int().safe().positive() }).optional().catch(void 0));
function Fe(e, t) {
  if (t === void 0 && typeof e === "object" && e !== null && e.usage !== void 0) (0, import_chunk_cqa9hrgx.l)("artifact_db_write", "malformed_usage");
}
var Se = 4, st = 600;
function xe(e) {
  let t = e !== null && typeof e === "object" ? e.warnings : void 0;
  if (!Array.isArray(t)) return [];
  let r = [];
  for (let c of t) {
    if (r.length >= Se) break;
    if (typeof c !== "string") continue;
    let o = (0, import_chunk_q2a93xh8.Kkr)(c, st);
    if (o !== void 0) r.push(o);
  }
  return r;
}
var dt = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ version: (0, import_chunk_rnm2beqc.nr)().int().optional(), usage: Ee() })), ut = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ results: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.on)({ version: (0, import_chunk_rnm2beqc.nr)().int().optional() })), usage: Ee() })), lt = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ error: (0, import_chunk_rnm2beqc.on)({ code: (0, import_chunk_rnm2beqc.Cg)("invalid_argument"), message: (0, import_chunk_rnm2beqc.Cg)("invalid argument"), verb: (0, import_chunk_rnm2beqc.BYi)().optional() }) }));
function G(e, t) {
  return e === 400 && lt().safeParse(t).success;
}
class Q {
  refusedAt = void 0;
  get unsupported() {
    return this.refusedAt !== void 0 && Date.now() - this.refusedAt < ct;
  }
}
var ct = 36e5, fFi = new import_chunk_2904xtvq.j(() => new Q()), Ce = new import_chunk_2904xtvq.j(() => new Q()), ft = new import_chunk_2904xtvq.j(() => new Q());
function ht(e, t) {
  if (!G(e, t)) return false;
  let { reason: r } = t.error;
  return r === void 0 || r === "bad_json";
}
var mt = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ error: (0, import_chunk_rnm2beqc.on)({ code: (0, import_chunk_rnm2beqc.we)().optional(), reason: (0, import_chunk_rnm2beqc.vf)().optional(), kind: (0, import_chunk_rnm2beqc.vf)().optional(), limit: (0, import_chunk_rnm2beqc.vf)().optional(), version: (0, import_chunk_rnm2beqc.vf)().optional(), index: (0, import_chunk_rnm2beqc.vf)().optional(), required: (0, import_chunk_rnm2beqc.vf)().optional() }).optional() })), Oe = /* @__PURE__ */ new Set(["docs_per_collection", "docs_per_database", "databases_per_org"]);
function lgl(e) {
  return Oe.has(e);
}
var _t = { quota_exceeded: /* @__PURE__ */ new Set([...Oe, "bytes_per_database"]), quota_or_rate: /* @__PURE__ */ new Set(["active_leases", "rate_limited", "write_capacity", "scan_budget", "response_budget", "refused_writes"]) };
function bt(e, t) {
  let r = _t[e];
  return r !== void 0 && r.has(t);
}
function pe(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e > 0 ? e : void 0;
}
function ge(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e >= 0 ? e : void 0;
}
var pt = /^[a-z][a-z_-]{0,63}$/;
function Z(e, t) {
  if ((0, import_chunk_3a2r0s2z.bvl)(e, t)) return { code: "vm_unavailable", reason: "vm_route_not_served" };
  let r = tt(e, t);
  if (r !== void 0) return r;
  let c = mt().safeParse(t), o = c.success ? c.data.error : void 0, a = o?.code, n = a !== void 0 ? Ze.get(a) : void 0;
  if (a !== void 0 && n !== void 0) {
    let d = o?.kind;
    if (n === "store_read_only") {
      let h = d === void 0 ? "files_content" : d === "page_only_document" || d === "page_only_unjudged" ? d : "unrecognized";
      return { code: n, reason: h === "page_only_document" || h === "page_only_unjudged" ? h : a, readOnly: h, index: ge(o?.index) };
    }
    if (bt(n, d)) return { code: n, reason: d === "refused_writes" ? a.replace(/-/g, "_") : d, kind: d, limit: pe(o?.limit) };
    let g = n === "version_mismatch" && o?.required === true, v = typeof o?.reason === "string" && pt.test(o.reason) ? o.reason : void 0;
    return { code: n, reason: g ? "version_required" : a.replace(/-/g, "_"), ...le(n) && { version: pe(o?.version), index: ge(o?.index), ...g && { required: true } }, ...v !== void 0 && { serverReason: v }, ...a === "not-found" && { storeNotFound: true } };
  }
  let i = rt(e);
  return { code: i, reason: i };
}
var dgl = [`db write failed (${O("version_mismatch")}): `, `db batch write failed (${O("version_mismatch")}): `], pFi = { write: "Not saved: Claude needs to read the latest version of this document before changing it.", delete: "Not deleted: Claude needs to read the latest version of this document before deleting it." };
function Be(e, t, r) {
  switch (e) {
    case "page_only_document":
      return `${t} is kept by the artifact's own page. You can read it with read_db, but not write or delete it. Trying again will not help, so do not try to write it another way or under another name.${r ? " The batch's other writes can be sent again without that one." : ""} If the task can be done by changing the artifact's other content, do that; if not, ask the user to change this document on the artifact's page`;
    case "page_only_unjudged":
      return "This artifact keeps some documents for its own page, and the server could not work out which documents this call writes. This is a server bug, not a problem with the call, and a retry will fail the same way. Tell the user that the write failed because of a server error";
    case "files_content":
      return "This artifact keeps its content in files under project/, not in its database, so do not retry the write. read_db still works, but its rows are not what the artifact shows now. Publish the content as files under project/ instead. If project/ has no index file yet (project/deck.json, project/canvas.json or project/design-system.json) and the database already holds earlier content, read ALL of that content first and include it in the files you publish; never publish only part of it or only new content onto such an artifact. If you cannot carry all of it over, publish nothing and tell the user their earlier content is still in the artifact's database";
    case "unrecognized":
      return "The artifact's database refused this write for good: the same change sent another way will be refused too. Tell the user it could not be saved";
  }
}
function W(e, t, r, c, o, a, n, i) {
  let d = `field '${o ?? "?"}'`, g = a?.current !== void 0 ? ` The document is at version ${a.current}.` : "", v = a?.pinned !== void 0 && a.current === a.pinned, h = `db ${t} failed (${O(e)})`;
  switch (e) {
    case "not_found": {
      if (a?.storeNotFound !== true) return `${h}: no such artifact, collection, or document (or no access \u2014 the two are deliberately indistinguishable), and the same call gets the same answer until the link or the access changes`;
      let y = a.op;
      if (y === "update" || y === "str_replace") return `${h}: no such artifact, collection, or document \u2014 the artifact's database refused this ${y}. Most often there is no document at its path; otherwise the database's access rules or your access level do not let you write it. This write was not applied. ${y} only changes an existing document. If you read this document earlier and it was there, read it again before anything else rather than re-creating it. Otherwise, if it should exist, create it with set (if set is refused the same way, you may not write there); if not, stop \u2014 resending this ${y} will not succeed`;
      return y === "delete" ? `${h}: the artifact's database refused this delete: the database has never been written to (so there is nothing to delete), the database's access rules or your access level do not let you delete there, or, less often, this artifact's data cannot be written right now; do not retry it` : `${h}: the artifact's database refused this write at its path, most often because the database's access rules or your access level do not allow it (less often, this artifact's data cannot be written right now); this write was not applied \u2014 do not retry it`;
    }
    case "invalid_argument":
      return `${h}: the server could not accept the request as shaped${n !== void 0 ? ` (reason: ${n})` : ""}, and the same call gets the same answer`;
    case "too_large":
      return `${h}: the request body exceeds the server's size limit \u2014 send less per call`;
    case "quota_or_rate":
      return `${h}: ${ye(r, c) ?? "over a rate or storage limit \u2014 retry later or write less"}`;
    case "quota_exceeded":
      return `${h}: ${ye(r, c) ?? "a storage limit on this artifact's database has been reached \u2014 delete documents; retrying won't help"}`;
    case "busy":
      return `${h}: lost to a concurrent change \u2014 re-read and retry deliberately`;
    case "upstream_auth":
      return `${h}: could not authenticate \u2014 the session's credential may need a refresh; try again`;
    case "store_unavailable":
      return `${h}: the store is unavailable right now \u2014 try again`;
    case "not_declared":
      return `${h}: the version of this artifact served to this session does not declare the database capability`;
    case "store_read_only":
      return `${h}${H}. ${Be(i ?? "unrecognized", "This document", false)}`;
    case "credential_rejected":
      return `${h}: the server refused this session's credential at the artifact-db door \u2014 not an artifact-access or existence answer; report this as a client/server integration fault`;
    case "cloud_unavailable":
      return `${h}: reading and editing artifact data isn't available in this cloud session right now; this says nothing about the artifact or its data, and if the user has access, Claude Code on their own machine can still read and edit it`;
    case "vm_unavailable":
      return `${h}: artifact data isn't available here`;
    case "restricted_sandbox":
      return `${h}: ${import_chunk_ac8t6db0.gZ}`;
    case "network_off":
      return t === "read" ? `${h}: this cloud session's network access is turned off (or could not be confirmed), so it cannot read artifact data${(0, import_chunk_ac8t6db0.gV)() ? "" : " \u2014 writes still work"}; do not retry the read here` : `${h}: this cloud session's network access is turned off (or could not be confirmed), and the gateway did not accept this call as a write it allows \u2014 do not retry it here`;
    case "edit_no_match":
      return v ? `${h}: old_str does not occur in ${d} of that document, so nothing was written by this call. The document is still at version ${a?.current}, the one this edit was pinned to, so nothing changed under you: old_str itself does not match the stored text \u2014 copy it exactly as it appears in the field's value (the decoded string, not JSON-escaped source)` : `${h}: old_str does not occur in ${d} of that document, so nothing was written by this call.${g} Copy the text exactly as it appears in the field's value (the decoded string, not JSON-escaped source). If you were retrying after a call whose outcome you did not see, that earlier call may already have applied \u2014 read the document back before trying again. If someone else changed that text, re-read and re-plan the edit`;
    case "edit_ambiguous":
      return `${h}: old_str occurs more than once in ${d} of that document; nothing was written.${g} Include more surrounding text so it is unique, or pass replace_all to change every occurrence`;
    case "edit_field_missing":
      return `${h}: the document has no top-level ${d}; nothing was written.${g} str_replace edits an existing top-level string field \u2014 read the document to see its fields, or use update to add one`;
    case "edit_field_not_string":
      return `${h}: ${d} is not a string (str_replace edits top-level string fields only); nothing was written \u2014 use update for structured fields.${g}`;
    case "version_mismatch":
      if (a?.required === true) {
        let y = a.path ?? "that document", k = "Read it back with read_db, base the change on what it holds now, and resend with if_version set to the version that read returns";
        switch (a.op) {
          case "delete":
            return `${h}: ${y} is an existing document and this delete carried no if_version \u2014 nothing was deleted. Read it back and, if it should still be deleted, resend the delete with if_version set to the version that read returns`;
          case "update":
            return `${h}: ${y} is an existing document and this update carried no if_version \u2014 nothing was written. ${"Read it back with read_db, base the change on what it holds now, and resend with if_version set to the version that read returns"}`;
          default:
            return `${h}: ${y} already exists and this write carried no if_version \u2014 nothing was written. ${"Read it back with read_db, base the change on what it holds now, and resend with if_version set to the version that read returns"}`;
        }
      }
      return a?.current !== void 0 ? `${h}: the document is no longer at version ${a.pinned ?? "?"}, the one this write was pinned to \u2014 it is now at version ${a.current}; nothing was written. Read it back, re-plan the write against what it holds now, and pin to that version` : `${h}: the document is no longer at version ${a?.pinned ?? "?"}, the one this write was pinned to \u2014 it has changed or may have been deleted; nothing was written. Read it back: if it still exists, re-plan the write against what it holds now and pin to its version; if it is gone, ${a?.op === "delete" ? "a delete has nothing left to do" : 're-create it with a "set" and no if_version only if it should exist again'}`;
  }
}
var gt = 36e5, oe = "not_declared_remembered";
function cgl(e, t) {
  return t.code === "not_declared" && (t.reason === "not_declared" || t.reason === oe) && (0, import_chunk_0rkwgmhx.se)().dbUndeclaredAt.has(e);
}
function ce(e, t, r, c = "") {
  let { dbUndeclaredAt: o } = (0, import_chunk_0rkwgmhx.se)(), a = o.get(t);
  if (a === void 0) return;
  if (Date.now() - a >= gt) {
    o.delete(t);
    return;
  }
  return (0, import_chunk_cqa9hrgx.m)(e, `${c}${oe}`), { kind: "error", code: "not_declared", message: `${r} (this repeats the server's answer from earlier in this session; the call was not sent. The server is asked again an hour after that answer, or sooner if this session publishes the artifact, sees a new version of it, or sees its capabilities include a database)`, reason: oe };
}
function fe(e, t) {
  let r = (0, import_chunk_0rkwgmhx.se)();
  r.dbUndeclaredAt.delete(e);
  let c = r.dbUndeclaredDroppedAt.get(e);
  if (c === void 0 || c < t) r.dbUndeclaredDroppedAt.set(e, t);
}
function he(e, t, r, c) {
  if (t !== 404 || r !== "not_declared") return;
  let o = (0, import_chunk_0rkwgmhx.se)(), a = o.dbUndeclaredDroppedAt.get(e);
  if ((0, import_chunk_qtg8rez4.E0)(c) || a !== void 0 && c <= a) return;
  o.dbUndeclaredAt.set(e, Date.now());
}
function ye(e, t) {
  let r = t === void 0 ? "document limit" : `limit of ${t} documents`, c = t === void 0 ? "storage limit" : `storage limit of ${(0, import_chunk_7e12xj51.P4n)(t)}`;
  switch (e) {
    case "docs_per_collection":
      return `this collection has reached its ${r} \u2014 delete documents; retrying won't help`;
    case "docs_per_database":
      return `this artifact's database has reached its ${r} \u2014 delete documents before adding more; retrying won't help`;
    case "bytes_per_database":
      return `this artifact's database has reached its ${c} (the total size of its documents, not their count) \u2014 delete documents or make them smaller; a write that makes an existing document larger can be refused too, and retrying won't help`;
    case "databases_per_org":
      return "this organization has reached its limit on artifact databases; retrying won't help";
    case "active_leases":
      return "this database has too many active leases \u2014 retry after some expire or are released";
    case "rate_limited":
      return "rate-limited \u2014 retry shortly";
    case "write_capacity":
      return "too many concurrent writes to this database \u2014 retry shortly";
    case "scan_budget":
      return "this collection holds too much data to sort, whatever `query.where` or `query.limit` you pass \u2014 drop `query.order_by`, page with `query.cursor` and sort the results yourself; an ordered query will keep failing until the collection holds fewer or smaller documents";
    case "response_budget":
      return "the query's result is too large \u2014 request fewer documents; retrying won't help";
    case "refused_writes":
      return "the server refused this operation on this path earlier (a missing document, a path you may not write, or an invalid argument), and after repeated refused writes to this artifact it is briefly turning away repeats of it, whatever data they carry; this write was not applied. Do not resend it unchanged now: use a different operation or path (for example set, to create a document that should exist); if it was refused for its data, fix the data and send it again in a few minutes; otherwise stop";
    case void 0:
      return;
  }
}
var re = "data/users/me", qe = "whoami", wt = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ id: (0, import_chunk_rnm2beqc.we)().min(1) }));
function Me(e, t) {
  return `${e}:${t}`;
}
function J() {
  return (0, import_chunk_ac8t6db0.kkr)("POST", Re, "bound") === "relay";
}
async function yt(e, t) {
  if (J()) return null;
  let r = (await (0, import_chunk_7j8he8m3.cjt)(t))?.accountUuid;
  return r ? Me(r, e) : null;
}
async function ie(e, t, r) {
  let c = await (0, import_chunk_865at33z.uS)(r);
  return c?.accountUuid !== void 0 && Me(c.accountUuid, e) === t;
}
function de() {
  let e = (0, import_chunk_865at33z.QV)().headers.Authorization;
  return e === void 0 ? null : (0, import_chunk_865at33z.Mdt)(e);
}
async function Te(e) {
  if (!(0, import_chunk_865at33z.W0)()) return;
  for (let t = 0; t < 2; t++) try {
    await (0, import_chunk_865at33z.od)({ credentials: e });
  } catch {
  }
}
function ugl(e) {
  let { resolvedMeIds: t, inFlightMeIds: r } = We.of(e);
  t.clear(), r.clear();
}
function Le(e, t) {
  if (e === re || e.startsWith(re + "/")) return (r) => ({ collection: "data/users/" + r + e.slice(re.length), docId: t });
  return null;
}
var V = Symbol("contested-me-key");
class Pe {
  resolvedMeIds = /* @__PURE__ */ new Map();
  inFlightMeIds = /* @__PURE__ */ new Map();
}
var We = new import_chunk_2904xtvq.j(() => new Pe());
function He(e, t, r, c, o) {
  if (t === "malformed_whoami_echo") return `db ${r} failed (unavailable): resolving 'me' returned an unreadable response \u2014 the artifact db service may need an update`;
  if (e === "not_declared") return `db ${r} failed (${O(e)}): resolving 'me' needs this artifact's published version to declare the db and user capabilities \u2014 republish with both declared, then retry`;
  return W(e, r, c, o) + (r === "write" && Ne.has(e) ? H : "");
}
var H = "; nothing was written", Ne = /* @__PURE__ */ new Set(["too_large", "credential_rejected", "cloud_unavailable", "vm_unavailable", "restricted_sandbox", "network_off"]);
async function me(e, t, r, c, o, a) {
  let n = We.of(e), { resolvedMeIds: i, inFlightMeIds: d } = n, g = await yt(r, a), v = null;
  if (g !== null && (i.has(g) || d.has(g))) {
    if (await ie(r, g, o)) {
      if (i.has(g)) await Te(a);
      v = g;
    }
  }
  let h = v === null ? void 0 : i.get(v);
  if (v !== null && h !== void 0 && !J()) {
    if (h.fingerprint === de()) return { ok: true, id: h.id };
    if (i.get(v) === h) i.delete(v);
  }
  let y;
  if (g === null) y = await ne(n, t, r, c, g, o, a);
  else {
    let f = v === null ? void 0 : d.get(v);
    if (!f) f = (async () => {
      if (!await ie(r, g, o)) return (0, import_chunk_cqa9hrgx.l)(t, "contested_me_key"), V;
      return ne(n, t, r, c, g, o, a);
    })(), d.set(g, f), f.finally(() => {
      if (d.get(g) === f) d.delete(g);
    }).catch(() => {
    });
    let w = await f;
    y = w === V ? await ne(n, t, r, c, null, o, a) : w;
  }
  if (y.ok) return y;
  if ("composed" in y) return { ok: false, result: y.composed };
  let k = t === "artifact_db_read" ? "read" : "write";
  return (0, import_chunk_cqa9hrgx.m)(t, y.reason), { ok: false, result: { kind: "error", code: y.code, message: He(y.code, y.reason, k, y.kind, y.limit), reason: y.reason } };
}
async function ne(e, t, r, c, o, a, n) {
  let i = null;
  if (o !== null) {
    if (await Te(n), i = de(), i === null || J()) return V;
  }
  let d = await ee(t, r, qe, {}, { timeout: 15e3, maxContentLength: ue, credentials: n, reportSentAuth: o !== null }, c);
  if (!d.ok) return { ok: false, composed: d.result };
  if (d.status !== 200) {
    let { code: v, reason: h, kind: y, limit: k } = Z(d.status, d.data);
    return { ok: false, code: v, reason: `whoami_${h}`, kind: y, limit: k };
  }
  let g = wt().safeParse(d.data);
  if (!g.success || !wre.test(g.data.id)) return { ok: false, code: "store_unavailable", reason: "malformed_whoami_echo" };
  if (o !== null) {
    if (i === null || i !== d.sentAuthFingerprint || i !== de() || !await ie(r, o, a)) return (0, import_chunk_cqa9hrgx.l)(t, "auth_unstable_me_key"), V;
    if (J()) return V;
    e.resolvedMeIds.set(o, { id: g.data.id, fingerprint: i });
  }
  return { ok: true, id: g.data.id };
}
async function ee(e, t, r, c, o, a) {
  let n = r === "batch" ? "batch_" : "", i = r === qe, d = e === "artifact_db_read" ? "read" : "write", g = o.requestId !== void 0 ? ft.of(o.requestId.host) : void 0, v = { slug: t, verb: r, args: c, ...o.asLevel !== void 0 && { asLevel: o.asLevel }, ...o.requireVersion === true && { requireVersion: true }, ...e === "artifact_db_write" && !i && (0, import_chunk_s12gh88k.uyo)(), ...e === "artifact_db_write" && !i && o.requestId !== void 0 && g !== void 0 && !g.unsupported && (0, import_chunk_ddfyyyy7.Q8e)(o.requestId.id) }, h = () => import_chunk_ac8t6db0.im.postRelayBound(Re, v, { refreshOAuth: true, credentials: o.credentials, headers: (0, import_chunk_ddfyyyy7.sm)(), timeout: o.timeout, maxContentLength: o.maxContentLength, signal: a, reportSentAuth: o.reportSentAuth }), y = false, k = async () => {
    let w = await h();
    if (w.ok && w.gatewayRetryAfterMs !== void 0 && !y) {
      if (y = true, await (0, import_chunk_5appeerh.K)(Math.min(w.gatewayRetryAfterMs, Je), a, { abortError: () => new Y() }), w = await h(), w.ok && w.route === "relay" && w.fromFrame) (0, import_chunk_cqa9hrgx.l)(e, `${n}${i ? "whoami_" : ""}relay_busy_recovered`);
    }
    return w;
  }, f;
  try {
    f = await k();
    let w = f.ok && f.fromFrame ? (0, import_chunk_s12gh88k.pyo)(f.status, f.data, v) : [];
    if (w.length > 0) {
      if (w.includes("request_id") && g !== void 0) (0, import_chunk_cqa9hrgx.l)(e, `${n}request_id_rejected`), g.refusedAt = Date.now();
      if ((0, import_chunk_s12gh88k.Qwr)(w)) (0, import_chunk_cqa9hrgx.l)(e, `${n}session_hints_rejected`), (0, import_chunk_s12gh88k.fyo)();
      v = (0, import_chunk_qwbhh2k3.Pn)(v, (0, import_chunk_s12gh88k.Qwr)(w) ? import_chunk_s12gh88k.tys : w), f = await k();
    }
    if (g !== void 0 && v.request_id !== void 0 && f.ok && f.fromFrame && ht(f.status, f.data)) {
      let { request_id: R, ...x } = v;
      if (v = x, f = await k(), f.ok && f.fromFrame && f.status >= 200 && f.status < 300) g.refusedAt = Date.now(), (0, import_chunk_cqa9hrgx.l)(e, `${n}request_id_unsupported`);
    }
  } catch (w) {
    if ((0, import_chunk_3jjr3wje.wd)(w) || w instanceof Y) throw w;
    let R = e !== "artifact_db_read" && !i && (0, import_chunk_ac8t6db0.SN)(w);
    return (0, import_chunk_cqa9hrgx.m)(e, `${n}${R ? "relay_request_error" : "request_error"}`), { ok: false, result: { kind: "error", code: "store_unavailable", message: R ? "db write outcome unknown (relay request failed) \u2014 it may have applied; read back before retrying" : `db ${d} failed (network error)`, reason: R ? "relay_request_error" : "request_error" } };
  }
  if (!f.ok) {
    if (f.reason === "relay-unavailable" || f.reason === "relay-not-served") {
      let w = `${i ? "whoami_" : ""}${f.reason.replace(/-/g, "_")}`;
      return (0, import_chunk_cqa9hrgx.m)(e, `${n}${w}`, { status: f.status }), { ok: false, result: { kind: "error", code: "store_unavailable", message: `db ${d} failed (${O("store_unavailable")}): ${i ? "resolving 'me' failed \u2014 " : ""}this cloud session's artifact connection did not carry the request${f.status ? ` (HTTP ${f.status})` : ""}, so nothing ran; this says nothing about the artifact or its data, and if the user has access, Claude Code on their own machine can still read and edit it${d === "write" ? H : ""}`, reason: w } };
    }
    return (0, import_chunk_cqa9hrgx.m)(e, `${n}${f.reason.replace(/-/g, "_")}`), { ok: false, result: { kind: "error", code: "store_unavailable", message: f.reason === "no-auth" ? (0, import_chunk_7j8he8m3.TE)(f.detail) : `db ${d} unavailable: ${f.reason}`, reason: "transport" } };
  }
  if (f.gatewayPolicy === "network-off") {
    let w = i ? "whoami_network_off" : "network_off";
    return (0, import_chunk_cqa9hrgx.l)(e, `${n}${w}`), { ok: false, result: { kind: "error", code: "network_off", message: i ? He("network_off", w, d) : W("network_off", d) + (d === "write" ? H : ""), reason: w } };
  }
  if (f.gatewayRetryAfterMs !== void 0) {
    let w = `${i ? "whoami_" : ""}relay_busy_retried`, R = r === UP;
    return (0, import_chunk_cqa9hrgx.m)(e, `${n}${w}`, { status: f.status }), { ok: false, result: { kind: "error", code: "store_unavailable", message: `db ${d} failed (${O("store_unavailable")}): ${i ? "resolving 'me' failed \u2014 " : ""}this cloud session's artifact connection was temporarily unavailable (HTTP ${f.status}, after one retry); ${R ? "the edit may or may not have applied \u2014 read it back before retrying" : `this is transient and nothing ran \u2014 retry shortly${d === "write" ? H : ""}`}`, reason: w } };
  }
  if (!f.fromFrame) return (0, import_chunk_cqa9hrgx.m)(e, `${n}${i ? "whoami_relay_error" : "relay_error"}`, { status: f.status }), { ok: false, result: { kind: "error", code: "store_unavailable", message: i ? `db ${d} failed: resolving 'me' failed (relay HTTP ${f.status}) \u2014 try again` : e === "artifact_db_read" ? `db read failed (relay HTTP ${f.status}) \u2014 try again` : `db write outcome unknown (relay HTTP ${f.status}) \u2014 it may have applied; read back before retrying`, reason: i ? "whoami_relay_error" : "relay_error" } };
  return { ok: true, status: f.status, data: f.data, sentAuthFingerprint: f.sentAuthFingerprint, ...f.route === "relay" && f.response.headers?.[vt] === "session" && { sessionScoped: true }, ...o.asLevel !== void 0 && { levelConfirmed: Rt(f.data) === o.asLevel } };
}
var vt = "x-frame-relay-read-scope-applied", kt = `db read failed (${O("not_found")}): nothing this session can read at that address \u2014 with the organization's cloud network access turned off, this session can read the data only of artifacts it published itself (or there is no such artifact, collection, or document); do not retry the read here`;
function Rt(e) {
  if (e === null || typeof e !== "object") return;
  let t = Reflect.get(e, "asLevel");
  if (typeof t === "string") return t;
  let r = Reflect.get(e, "error"), c = r !== null && typeof r === "object" ? Reflect.get(r, "asLevel") : void 0;
  return typeof c === "string" ? c : void 0;
}
var ve = /* @__PURE__ */ new Map([["where_field", "the field in a `query.where` clause is a top-level field name, not empty and with no dot"], ["order_by_field", "`query.order_by.field` is a top-level field name, with no dot"], ["where_in_needs_list", '"in" and "not-in" take a list as their value'], ["where_in_too_long", 'an "in" or "not-in" list holds at most 30 values'], ["where_in_element", 'each value in an "in" or "not-in" list is null, a boolean, a number or a string'], ["where_range_value", '"lt", "lte", "gt" and "gte" compare with null, a boolean, a number or a string'], ["where_value", 'a list or object compared with "eq", "ne" or "array-contains" holds at most 30 values, nested at most one level'], ["cursor", "`query.cursor` is the `next_cursor` of the previous page of the same read, unchanged; without it the read starts from the first page"]]);
async function syo(e, t, r, c, o) {
  let { slug: a, op: n, query: i } = t, { collection: d, docId: g } = t;
  if (!import_chunk_r8478wtb.yo.test(a)) return (0, import_chunk_cqa9hrgx.m)("artifact_db_read", "invalid_slug"), { kind: "error", code: "invalid_argument", message: "not a valid artifact id", reason: "invalid_slug" };
  let v = t.askFrame ? void 0 : ce("artifact_db_read", a, W("not_declared", "read"));
  if (v !== void 0) return v;
  if (!lle.test(d) || g !== void 0 && !wre.test(g)) return (0, import_chunk_cqa9hrgx.m)("artifact_db_read", "invalid_segment"), { kind: "error", code: "invalid_argument", message: 'collection must be a path of 1-15 "/"-separated segments and doc_id one segment (letters, digits, _ - . ~ : @ + per segment; "." and ".." reserved)', reason: "invalid_segment" };
  if (!L$n(d)) return (0, import_chunk_cqa9hrgx.m)("artifact_db_read", "parity"), { kind: "error", code: "invalid_argument", message: nyo(d), reason: "parity" };
  if (n === "get" && g === void 0) return (0, import_chunk_cqa9hrgx.m)("artifact_db_read", "missing_doc_id"), { kind: "error", code: "invalid_argument", message: "doc_id is required for a get", reason: "missing_doc_id" };
  let h = Le(d, g), y;
  if (h !== null) {
    let D = await me(e, "artifact_db_read", a, r, c, o);
    if (!D.ok) return D.result;
    y = D.id, { collection: d, docId: g } = h(D.id);
  }
  let k = g !== void 0 ? `${d}/${g}` : d;
  if (k.length > t9) return (0, import_chunk_cqa9hrgx.m)("artifact_db_read", "path_too_long"), { kind: "error", code: "invalid_argument", message: `the composed document path is ${k.length} bytes \u2014 the limit is ${t9}`, reason: "path_too_long" };
  let f = n === "get" ? { path: k } : { collection: d, ...i?.limit !== void 0 && { limit: i.limit }, ...i?.cursor !== void 0 && { cursor: i.cursor }, ...n === "query" && i?.where !== void 0 && { where: i.where.map(([D, E, N]) => ({ field: D, op: at(E), value: N })) }, ...n === "query" && i?.order_by !== void 0 && { orderBy: { field: i.order_by.field, ...i.order_by.direction !== void 0 && { direction: i.order_by.direction } } } }, w = Date.now(), R = await ee("artifact_db_read", a, n, f, { timeout: 15e3, maxContentLength: Qe, credentials: o, ...t.asLevel !== void 0 && { asLevel: t.asLevel } }, r);
  if (!R.ok) return R.result;
  if (R.status === 200) {
    if (fe(a, w), n === "get") {
      let E = ot().safeParse(R.data);
      if (!E.success) return (0, import_chunk_cqa9hrgx.m)("artifact_db_read", "malformed_echo"), { kind: "error", code: "store_unavailable", message: "db read returned an unreadable response \u2014 try again", reason: "malformed_echo" };
      let N = { ...R.levelConfirmed !== void 0 && { levelConfirmed: R.levelConfirmed }, ...y !== void 0 && { meId: y } };
      if (!E.data.exists) return (0, import_chunk_cqa9hrgx.l)("artifact_db_read", "not_found"), { kind: "not_found", ...N };
      return (0, import_chunk_cqa9hrgx.u)("artifact_db_read"), { kind: "ok", ...N, docs: [{ id: g ?? "", data: E.data.data ?? {}, ...E.data.version !== void 0 && { version: E.data.version }, ...E.data.updatedAt !== void 0 && { updatedAt: E.data.updatedAt } }], ...E.data.version !== void 0 && { version: E.data.version }, ...E.data[import_chunk_qhpw13wh.s9] ? { markReads: true } : E.data.authoredByOthers && { authoredByOthers: true }, ...E.data.outside_writer !== void 0 && { outsideWriter: E.data.outside_writer } };
    }
    let D = it().safeParse(R.data);
    if (!D.success) return (0, import_chunk_cqa9hrgx.m)("artifact_db_read", "malformed_echo"), { kind: "error", code: "store_unavailable", message: "db read returned an unreadable response \u2014 try again", reason: "malformed_echo" };
    return (0, import_chunk_cqa9hrgx.u)("artifact_db_read"), { kind: "ok", ...R.levelConfirmed !== void 0 && { levelConfirmed: R.levelConfirmed }, ...y !== void 0 && { meId: y }, docs: D.data.docs, ...D.data.nextCursor !== void 0 && D.data.nextCursor !== "" && { nextCursor: D.data.nextCursor }, ...D.data[import_chunk_qhpw13wh.s9] ? { markReads: true } : D.data.authoredByOthers && { authoredByOthers: true }, ...D.data.outside_writer !== void 0 && { outsideWriter: D.data.outside_writer } };
  }
  let { code: x, reason: I, kind: T, limit: F, serverReason: S } = Z(R.status, R.data);
  he(a, R.status, x, w);
  let L = x === "not_found" && R.sessionScoped === true;
  (0, import_chunk_cqa9hrgx.m)("artifact_db_read", L ? "not_found_session_scoped" : I);
  let A = ve.get(S ?? ""), B = A !== void 0 ? `. The rule: ${A}` : n === "query" && S === "upstream_invalid_argument" ? `. The server did not name the rule. The rules for \`query\` are: ${[...ve.values()].join("; ")}` : "";
  return { kind: "error", code: x, ...R.levelConfirmed !== void 0 && { levelConfirmed: R.levelConfirmed }, message: L ? kt : W(x, "read", T, F, void 0, void 0, S) + B, reason: L ? "not_found_session_scoped" : I };
}
function P(e, t, r = "") {
  return (0, import_chunk_cqa9hrgx.m)("artifact_db_write", `${r}${e}`), { kind: "error", code: "invalid_argument", message: t, reason: e };
}
async function Ue(e, t, r = "") {
  let { collection: c, docId: o } = e;
  if (!lle.test(c) || !wre.test(o)) return { ok: false, result: P("invalid_segment", 'collection must be a path of 1-15 "/"-separated segments and doc_id one segment (letters, digits, _ - . ~ : @ + per segment; "." and ".." reserved)', r) };
  if (!L$n(c)) return { ok: false, result: P("parity", nyo(c), r) };
  let a = Le(c, o);
  if (a !== null) {
    let i = await t();
    if (!i.ok) return i;
    ({ collection: c, docId: o } = a(i.id));
  }
  let n = `${c}/${o}`;
  if (n.length > t9) return { ok: false, result: P("path_too_long", `the composed document path is ${n.length} bytes \u2014 the limit is ${t9}`, r) };
  return { ok: true, path: n };
}
function je(e, t, r, c, o) {
  let a = o !== void 0 && { ifVersion: o };
  switch (e) {
    case "delete":
      return { path: t, ...a };
    case "set":
      return { path: t, data: r, replace: true, ...a };
    case "update":
      return { path: t, data: r, ...a };
    case "str_replace":
      return { path: t, field: c?.field, old_str: c?.oldStr, new_str: c?.newStr, ...c?.replaceAll === true && { replace_all: true }, idem: c?.idem, ...a };
  }
}
async function fgl(e, t, r, c, o) {
  let { slug: a, op: n, data: i, edit: d } = t;
  if (!import_chunk_r8478wtb.yo.test(a)) return P("invalid_slug", "not a valid artifact id");
  let g = ce("artifact_db_write", a, W("not_declared", "write"));
  if (g !== void 0) return g;
  let v = await Ue(t, () => me(e, "artifact_db_write", a, r, c, o));
  if (!v.ok) return v.result;
  return _e(a, n, v.path, i, r, o, t.asLevel, d, t.ifVersion, t.requireVersion === true && n !== "str_replace" ? { host: e, address: `${t.collection}/${t.docId}` } : void 0, t.requestId !== void 0 ? { host: e, id: t.requestId } : void 0);
}
async function _e(e, t, r, c, o, a, n, i, d, g, v) {
  let h = g !== void 0 ? Ce.of(g.host) : void 0, y = h !== void 0 && !h.unsupported, k = Date.now(), f = await ee("artifact_db_write", e, t, je(t, r, c, i, d), { timeout: 3e4, ...n !== void 0 && { asLevel: n }, ...y && { requireVersion: true }, ...v !== void 0 && { requestId: v }, maxContentLength: ue, credentials: a }, o);
  if (!f.ok) return f.result;
  if (y && h !== void 0 && G(f.status, f.data)) {
    let B = await _e(e, t, r, c, o, a, n, i, d, void 0, v);
    if ($t(B)) h.refusedAt = Date.now(), (0, import_chunk_cqa9hrgx.l)("artifact_db_write", "require_version_unsupported");
    return B;
  }
  if (f.status === 200) {
    fe(e, k);
    let B = f.levelConfirmed !== void 0 && { levelConfirmed: f.levelConfirmed }, D = dt().safeParse(f.data);
    if (!D.success) return (0, import_chunk_cqa9hrgx.l)("artifact_db_write", "malformed_echo"), { kind: "ok", ...B };
    (0, import_chunk_cqa9hrgx.u)("artifact_db_write"), Fe(f.data, D.data.usage);
    let E = xe(f.data);
    return { kind: "ok", ...B, ...D.data.version !== void 0 && { version: D.data.version }, ...D.data.usage !== void 0 && { usage: D.data.usage }, ...E.length > 0 && { warnings: E } };
  }
  let { code: w, reason: R, kind: x, limit: I, version: T, required: F, serverReason: S, storeNotFound: L, readOnly: A } = Z(f.status, f.data);
  return he(e, f.status, w, k), (le(w) ? import_chunk_cqa9hrgx.l : import_chunk_cqa9hrgx.m)("artifact_db_write", Ke(R, x, L)), { kind: "error", code: w, ...f.levelConfirmed !== void 0 && { levelConfirmed: f.levelConfirmed }, message: W(w, "write", x, I, i?.field, { pinned: d, current: T, op: t, required: F, path: g?.address, storeNotFound: L }, S, A) + (Ne.has(w) ? H : "") + (w === "invalid_argument" && (d !== void 0 || i?.replaceAll === true) ? `. If this server does not yet accept \`${d !== void 0 ? "if_version" : "replace_all"}\`, that alone explains the refusal \u2014 nothing was written; retry without it only if an unconditional ${d !== void 0 ? "write" : "single replacement"} is acceptable here` : ""), reason: R };
}
function $t(e) {
  if (e.kind !== "error") return true;
  switch (e.code) {
    case "invalid_argument":
    case "store_unavailable":
    case "quota_or_rate":
    case "quota_exceeded":
    case "upstream_auth":
    case "credential_rejected":
    case "cloud_unavailable":
    case "vm_unavailable":
    case "restricted_sandbox":
    case "network_off":
      return false;
    default:
      return true;
  }
}
async function pgl(e, t, r, c, o) {
  let { slug: a, ops: n, asLevel: i } = t;
  if (!import_chunk_r8478wtb.yo.test(a)) return P("invalid_slug", "not a valid artifact id", "batch_");
  let d = ce("artifact_db_write", a, W("not_declared", "batch write"), "batch_");
  if (d !== void 0) return d;
  if (n.length === 0 || n.length > l4) return P("batch_size", `a batch takes 1-${l4} writes \u2014 ${n.length} were given`, "batch_");
  let g, v = () => g ??= me(e, "artifact_db_write", a, r, c, o), h = [], y = /* @__PURE__ */ new Set();
  for (let [q, C] of n.entries()) {
    let M = await Ue(C, v, "batch_");
    if (!M.ok) return { ...M.result, message: `write ${q + 1} of ${n.length}: ${M.result.message}` };
    if (y.has(M.path)) return P("duplicate_path", `write ${q + 1} of ${n.length} addresses ${M.path}, which an earlier write in this batch already addresses \u2014 a batch writes each document at most once`, "batch_");
    y.add(M.path), h.push({ op: C.op, path: M.path, ...C.data !== void 0 && { data: C.data }, ...C.ifVersion !== void 0 && { ifVersion: C.ifVersion } });
  }
  let k = h.some((q) => q.ifVersion !== void 0), f = { ops: h.map(({ op: q, path: C, data: M, ifVersion: z }) => ({ op: q, ...je(q, C, M, void 0, z) })) }, w;
  try {
    w = Buffer.byteLength((0, import_chunk_w578pjby._)({ slug: a, verb: "batch", args: f }), "utf8");
  } catch {
    return P("data_invalid", "every document in the batch must be a JSON-serializable object", "batch_");
  }
  if (w > oyo) return P("batch_too_large", `the batch serializes to ${w} bytes \u2014 the limit for one request is ${oyo}; split it into smaller batches`, "batch_");
  let R = fFi.of(e), x = t.requireVersion === true ? e : void 0, I = t.requestId !== void 0 ? { host: e, id: t.requestId } : void 0;
  if (R.unsupported && !k) return ke(a, h, r, o, i, x, I);
  let T = Ce.of(e), F = t.requireVersion === true && !T.unsupported, S = Date.now(), L = (q) => ee("artifact_db_write", a, "batch", f, { timeout: 6e4, maxContentLength: ue, credentials: o, ...i !== void 0 && { asLevel: i }, ...q && { requireVersion: true }, ...I !== void 0 && { requestId: I } }, r), A = await L(F);
  if (!A.ok) return A.result;
  if (F && G(A.status, A.data)) {
    if (A = await L(false), !A.ok) return A.result;
    if (i === void 0) T.refusedAt = Date.now(), (0, import_chunk_cqa9hrgx.l)("artifact_db_write", "batch_require_version_unsupported");
  }
  if (i === void 0 && G(A.status, A.data)) return R.refusedAt = Date.now(), k ? Dt() : ke(a, h, r, o, void 0, x, I);
  if (A.status === 200) {
    fe(a, S);
    let q = A.levelConfirmed !== void 0 && { levelConfirmed: A.levelConfirmed }, C = ut().safeParse(A.data);
    if (!C.success || C.data.results.length !== n.length) return (0, import_chunk_cqa9hrgx.l)("artifact_db_write", "malformed_batch_echo"), { kind: "ok", ...q, results: n.map(() => ({})) };
    (0, import_chunk_cqa9hrgx.u)("artifact_db_write"), Fe(A.data, C.data.usage);
    let M = xe(A.data);
    return { kind: "ok", ...q, results: C.data.results.map((z) => z.version !== void 0 ? { version: z.version } : {}), ...C.data.usage !== void 0 && { usage: C.data.usage }, ...M.length > 0 && { warnings: M } };
  }
  let { code: B, reason: D, kind: E, limit: N, version: Ve, index: te, required: ze, serverReason: Ye, storeNotFound: be, readOnly: Xe } = Z(A.status, A.data);
  he(a, A.status, B, S), (le(B) ? import_chunk_cqa9hrgx.l : import_chunk_cqa9hrgx.m)("artifact_db_write", `batch_${Ke(D, E, be)}`);
  let U = te !== void 0 && te < h.length ? te : void 0;
  return { kind: "error", code: B, ...A.levelConfirmed !== void 0 && { levelConfirmed: A.levelConfirmed }, message: At(B, E, N, { pinned: k, stale: U !== void 0 ? { index: U, path: `${n[U].collection}/${n[U].docId}`, op: n[U].op, ifVersion: n[U].ifVersion, total: n.length } : void 0, version: Ve, required: ze, serverReason: Ye, storeNotFound: be, readOnly: Xe }), reason: D };
}
function Dt() {
  return (0, import_chunk_cqa9hrgx.l)("artifact_db_write", "batch_pinned_unsupported"), { kind: "error", code: "invalid_argument", reason: "batch_pinned_unsupported", message: `db batch write failed (${O("invalid_argument")}): this server does not take batch writes yet (nor, most likely, \`if_version\`), and a batch with \`if_version\` pins is never applied one write at a time \u2014 nothing was written. Resend it without the pins only if unconditional writes are acceptable here` };
}
function At(e, t, r, c) {
  if (e === "store_read_only") {
    let n = c?.stale, i = n === void 0 ? "One of the batch's documents (the server did not say which)" : `${(0, import_chunk_w578pjby._)(n.path)} (writes[${n.index}], write ${n.index + 1} of ${n.total})`;
    return `db batch write failed (${O(e)}): the batch is atomic, so nothing was written. ${Be(c?.readOnly ?? "unrecognized", i, n !== void 0 && n.total > 1)}`;
  }
  if (e === "too_large") return `db batch write failed (${O(e)}): the batch body exceeds the server's 1 MiB request limit \u2014 nothing was written; split it into smaller write_db calls`;
  if (e === "version_mismatch" && c?.required === true) {
    let n = `db batch write failed (${O(e)})`, i = "Other unpinned entries that write existing documents would be refused the same way \u2014 read and pin those too before resending", d = c.stale;
    return d !== void 0 ? `${n}: writes[${d.index}] (write ${d.index + 1} of ${d.total}) targets ${d.path}, which already exists, and carried no if_version \u2014 the whole batch wrote nothing. Read that document back, re-plan its ${d.op === "delete" ? "delete (if it should still be deleted)" : "write on what it holds now"} with if_version set to the version the read returns, then resend the batch. ${"Other unpinned entries that write existing documents would be refused the same way \u2014 read and pin those too before resending"}` : `${n}: one of the writes targets a document that already exists and carried no if_version \u2014 the whole batch wrote nothing. Read the existing documents this batch writes, re-plan those entries on what they hold now with if_version set to the versions the reads return, then resend the batch`;
  }
  if (e === "version_mismatch") {
    let n = `db batch write failed (${O(e)}): the batch is atomic, so nothing was written \u2014 none of the writes applied`, i = c?.stale;
    if (i === void 0 || i.ifVersion === void 0) return `${n}. A document one of the writes was pinned to with if_version is no longer at that version (or no longer exists). Re-read the pinned documents, re-plan those writes against what they hold now with fresh pins, then resend the batch`;
    let d = `writes[${i.index}] (write ${i.index + 1} of ${i.total}, ${(0, import_chunk_w578pjby._)(i.path)})`, g = "It is the first stale pin the server met; later pinned entries were not checked, so re-read any pinned document you are unsure of too, then resend the batch";
    return c?.version !== void 0 ? `${n}. ${d} was pinned to version ${i.ifVersion} and that document is now at version ${c.version}: read it back, re-plan its write against what it holds now and pin to that version. ${g}` : `${n}. ${d} was pinned to version ${i.ifVersion} and that document has changed or may have been deleted (the server named no current version): read it back \u2014 if it still exists, re-plan its write against what it holds now and pin to its version; if it is gone, drop that entry, or re-create it with a "set" entry and no if_version only if it should exist again. ${g}`;
  }
  if (t === "refused_writes") return `db batch write failed (${O(e)}): one of the writes repeats an operation on a path the server refused earlier (a missing document, a path you may not write, or an invalid argument), and after repeated refused writes to this artifact it is briefly turning such repeats away, whatever data they carry; the batch is atomic, so nothing was written. Do not resend the batch as it is: drop or change the entry that was refused before (the server does not say which; for example, use set to create a document that should exist), or stop`;
  if (e === "not_found" && c?.storeNotFound === true) return `db batch write failed (${O(e)}): the artifact's database refused one of the writes: most often it updates a document that does not exist (update needs an existing one), deletes from a database that has never been written to (nothing to delete), or the database's access rules or your access level do not let you write its path; the batch is atomic, so nothing was written. Read back any document you expected to exist before re-creating it; create documents that should exist with set, and drop the entries that have nothing to do or that you may not write`;
  let o = W(e, "batch write", t, r, void 0, void 0, c?.serverReason), a = e === "invalid_argument" && c?.pinned === true ? ". If this server does not yet accept `if_version` on batch writes, that alone explains the refusal \u2014 resend without the pins only if unconditional writes are acceptable here" : "";
  return M_s(e) ? `${o}; the batch is atomic, so nothing was written${a}` : `${o}; the batch's outcome is unknown \u2014 it applies all-or-nothing and may have committed; read back before retrying`;
}
function Ke(e, t, r) {
  if (r === true) return "store_not_found";
  return t === "refused_writes" ? t : e;
}
function M_s(e) {
  return e !== "store_unavailable";
}
async function ke(e, t, r, c, o, a, n) {
  (0, import_chunk_cqa9hrgx.l)("artifact_db_write", "batch_fallback_sequential");
  let i = [], d, g = [], v, h = (k) => o !== void 0 && k > 0 && v !== true ? ` (as_level '${o}' unconfirmed for them \u2014 they may have run at your own level)` : "", y = "this server does not take batch writes yet, so the batch was applied one write at a time and is NOT atomic";
  for (let [k, { op: f, path: w, data: R }] of t.entries()) {
    let x = `${k} ${k === 1 ? "entry" : "entries"} before it already committed`, I = t.length - k - 1, T = (S) => ({ kind: "error", code: "store_unavailable", reason: "batch_fallback_aborted", message: `${y}: interrupted at writes[${k}] (write ${k + 1} of ${t.length}). The ${x}${h(k)}; writes[${k}] itself ${S ? "may or may not have applied" : "did not run"}; the ${I} after it did not run.`, fallback: "sequential", results: i, failedIndex: k });
    if (r.aborted) return T(false);
    let F;
    try {
      F = await _e(e, f, w, R, r, c, o, void 0, void 0, a && { host: a, address: w }, n);
    } catch (S) {
      if ((0, import_chunk_3jjr3wje.wd)(S)) return T(true);
      if (S instanceof Y) return T(false);
      throw S;
    }
    if (F.kind === "error") return { kind: "error", code: F.code, reason: F.reason, message: `${y}: writes[${k}] (write ${k + 1} of ${t.length}) failed \u2014 ${F.message.replace(H, `; writes[${k}] was not applied`)}. The ${x}${h(k)}; the ${I} after it did not run.`, fallback: "sequential", results: i, failedIndex: k };
    i.push(F.version !== void 0 ? { version: F.version } : {}), d = F.usage ?? (f === "delete" ? void 0 : d);
    for (let S of F.warnings ?? []) if (g.length < Se && !g.includes(S)) g.push(S);
    if (F.levelConfirmed !== void 0) v = (v ?? true) && F.levelConfirmed;
  }
  return { kind: "ok", results: i, ...d !== void 0 && { usage: d }, ...g.length > 0 && { warnings: g }, fallback: "sequential", ...v !== void 0 && { levelConfirmed: v } };
}
