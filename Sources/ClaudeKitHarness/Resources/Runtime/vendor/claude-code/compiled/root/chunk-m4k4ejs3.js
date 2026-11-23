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
var chunk_m4k4ejs3_exports = {};
__export(chunk_m4k4ejs3_exports, {
  AFa: () => AFa,
  Krr: () => Krr,
  Oue: () => Oue,
  jti: () => jti,
  vAn: () => vAn
});
module.exports = __toCommonJS(chunk_m4k4ejs3_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_3a2r0s2z = require("/$bunfs/root/chunk-3a2r0s2z.js");
var import_chunk_np189awg = require("/$bunfs/root/chunk-np189awg.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_f2vegtjy = require("/$bunfs/root/chunk-f2vegtjy.js");
var import_chunk_ac8t6db0 = require("/$bunfs/root/chunk-ac8t6db0.js");
var import_chunk_qhpw13wh = require("/$bunfs/root/chunk-qhpw13wh.js");
var import_chunk_ddfyyyy7 = require("/$bunfs/root/chunk-ddfyyyy7.js");
var import_chunk_0rbztqww = require("/$bunfs/root/chunk-0rbztqww.js");
var import_chunk_mha8pjbc = require("/$bunfs/root/chunk-mha8pjbc.js");
var import_chunk_qtg8rez4 = require("/$bunfs/root/chunk-qtg8rez4.js");
var import_chunk_r48wrczg = require("/$bunfs/root/chunk-r48wrczg.js");
var import_chunk_7j8he8m3 = require("/$bunfs/root/chunk-7j8he8m3.js");
var import_chunk_rnm2beqc = require("/$bunfs/root/chunk-rnm2beqc.js");
var import_crypto = require("crypto");
var vAn = 4096, X = 16777216, D = 9e4, Q = "x-frame-doc-sha256", Z = "x-frame-doc-seq", J = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ ver: (0, import_chunk_rnm2beqc.we)(), files: (0, import_chunk_rnm2beqc.mk)((0, import_chunk_rnm2beqc.on)({ sha256: (0, import_chunk_rnm2beqc.we)().regex(import_chunk_r48wrczg.cq), size: (0, import_chunk_rnm2beqc.nr)().int().nonnegative().max(import_chunk_ddfyyyy7.vEt), contentType: (0, import_chunk_rnm2beqc.we)().regex(import_chunk_r48wrczg.bW) })), narrowed: (0, import_chunk_rnm2beqc.Ci)().optional() }));
function x(r) {
  return r === "file list" ? "artifact_file_list" : "artifact_file_read";
}
function v(r, n, c, h = true) {
  if (h) (0, import_chunk_cqa9hrgx.m)(x(r), n);
  return { kind: "error", message: `${r} failed: ${c}`, reason: n };
}
function M(r) {
  let n = r - 1;
  return n >= 1048576 ? `${n >> 20} MiB` : `${n >> 10} KiB`;
}
var q = "published-file reads run only from a local session or an Anthropic-hosted cloud session with its gateway relay enabled; retrying from here will not help", ee = "published-file reads aren't available from this kind of session; retrying from here will not help";
async function N(r, n, c, h, { admitPublicRead: e, probeToolUseId: f }) {
  if (!import_chunk_r8478wtb.yo.test(r.slug)) return v(n, "invalid_slug", "not a valid artifact id");
  let d = (0, import_chunk_ac8t6db0.bkr)(), F = !d && ((0, import_chunk_ac8t6db0.Gbe)() || (0, import_chunk_ac8t6db0.rUn)() && !(0, import_chunk_ac8t6db0.r9)(import_chunk_865at33z.FN));
  if (!F && !d && import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) return v(n, "relay_unavailable", q);
  let a = d || (0, import_chunk_6e68m1dj.hn)() && (0, import_chunk_ac8t6db0.xEt)();
  if (F && !(0, import_chunk_ac8t6db0.mj)(import_chunk_ac8t6db0.Gyo) && !a) return v(n, "relay_not_served", ee);
  let i = await (0, import_chunk_mha8pjbc.l1)(r, x(n), c, { gatePublicRead: false, relayOnly: !a, credentials: h, probeToolUseId: f });
  if (i.err !== null) {
    let S = i.errorCode === "boot_relay_error";
    if (S && (i.status === 403 || i.status === 404)) return { kind: "error", reason: "relay_refused", message: `${n} failed: published-file reads from a cloud session go through the session gateway's artifact relay, which is not enabled for this session yet; retrying from here will not help` };
    if (S && i.status === 401) return { kind: "error", reason: "relay_unauthorized", message: `${n} failed: the session gateway did not accept this session's credential for the artifact relay; retrying from here will not help` };
    return { kind: "error", message: i.err.replace(/^artifact read/, n), reason: i.errorCode };
  }
  let y = i.assetToken === void 0;
  if (y && !(0, import_chunk_0rbztqww.zH)()) return v(n, "tokenless", "this artifact is served to you as a public (non-member) reader, and its files are not readable that way");
  if (y && e?.() !== true) return (0, import_chunk_cqa9hrgx.l)(x(n), import_chunk_0rbztqww.X0e), v(n, import_chunk_0rbztqww.X0e, import_chunk_0rbztqww.qkr, false);
  let R = i.data.cowritten === true || i.data.artifactKind === import_chunk_qhpw13wh.c1 || (0, import_chunk_qtg8rez4.Bt)(r.slug)?.cowritten === true || (0, import_chunk_qtg8rez4.Bt)(r.slug)?.artifactKind === import_chunk_qhpw13wh.c1, b = (0, import_chunk_qtg8rez4.iYe)(r.slug, i.data.type), k = (0, import_chunk_mha8pjbc.O_s)(i), w = y ? "public" : (0, import_chunk_mha8pjbc.eyo)(k) ? void 0 : i.data.perm?.mode || void 0, L = (0, import_chunk_qtg8rez4.LEt)(i.data.perm?.role === "owner", (0, import_chunk_qtg8rez4.oYe)(i.data.outsideWriter), (0, import_chunk_qtg8rez4.Bt)(r.slug)?.outsideWriter);
  return { kind: "ok", target: r, ver: i.ver, assetToken: i.assetToken, publicRead: y, relay: F && !y, frameContent: !F && !y && (0, import_chunk_mha8pjbc.O$n)(i.data), credentials: h, agentDirect: a, cowritten: R, typeLocked: b, writerClass: (0, import_chunk_mha8pjbc.zpe)(i.data.perm?.role), owner: i.data.perm?.role === "owner", ...w !== void 0 && { audience: (0, import_chunk_qtg8rez4.wle)(w, i.data.shared).mode }, foreign: i.data.authoredByOthers === true || (0, import_chunk_qtg8rez4.Bt)(r.slug)?.authoredByOthers === true || (0, import_chunk_qhpw13wh.o9)(i.data.outsidersMayHaveWritten) || (0, import_chunk_qtg8rez4.Bt)(r.slug)?.outsidersMayHaveWritten === true || i.data.perm?.role !== "owner" || R || b || L, outsideOrg: L, orgRelation: k, livePaths: (0, import_chunk_f2vegtjy.$_s)(i.data).map((S) => S.path), typePaths: (0, import_chunk_mha8pjbc.R_s)(i.data.files)?.type ?? [], source: (0, import_chunk_mha8pjbc.P_s)(i), ...typeof i.data.title === "string" && { title: i.data.title }, ...i.data.favicon !== void 0 && { favicon: i.data.favicon }, ...i.data.publishPreconditions === true && { publishPreconditions: true }, filesCounted: typeof i.data.fileCount === "number" && Number.isSafeInteger(i.data.fileCount) && i.data.fileCount > 0, reused: i.reused === true };
}
async function I(r, n, c, h, e, f, d = true, F = false) {
  let a = (g, _) => v(c, g, _, d), i = (g) => ({ kind: "status", status: g }), { target: y, assetToken: R, relay: b } = r, { host: k, base: w, headers: L } = (0, import_chunk_mha8pjbc.M$n)(y), S = () => ((0, import_chunk_0rkwgmhx.se)().contentHostEgressDenied.add(y.env), a("egress_blocked", `this environment's network allowlist blocks ${k}, so the file cannot be fetched (access to the artifact itself is fine). ${r.publicRead ? `Public artifacts from outside your organization are fetched from that host directly, so it must be on this session's network allowlist. ${(0, import_chunk_mha8pjbc.H$n)(y.env)}` : import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE ? "This is a restriction of where this session runs; retrying from here will not help." : `To allow it, add *.frame.${y.env === "staging" ? "staging." : ""}claudeusercontent.com to the environment's allowed domains.`}`)), B = (g, _) => ((0, import_chunk_w578pjby.t)(`[artifact] ${c}: egress proxy denied (${_})`), a("egress_denied", `artifact content fetch refused by the environment's egress proxy (${g})`)), T = false, E;
  if (r.frameContent && R !== void 0) {
    try {
      E = await (0, import_chunk_mha8pjbc.I$n)(y.slug, n, { token: R, timeout: D, maxContentLength: h, signal: e, credentials: r.credentials });
    } catch (g) {
      if ((0, import_chunk_3jjr3wje.wd)(g) || g instanceof import_chunk_jv7av99m.Ie) throw g;
      return F ? i(0) : a("request_error", `the content fetch failed in transit, timed out, or exceeded the ${M(h)} limit`);
    }
    T = E.kind === "answer";
  }
  let o;
  try {
    if (E?.kind === "answer") o = E;
    else if (b) {
      if (R === void 0) return a("internal", "internal error: a public artifact read was routed where it cannot be served \u2014 this is a bug in this build; do not retry");
      let g = await (0, import_chunk_mha8pjbc.P$n)(y.slug, n, { token: R, timeout: D, maxContentLength: h, signal: e, retryBudget: f });
      if (!g.ok) return a(g.reason.replace(/-/g, "_"), g.reason === "no-auth" ? (0, import_chunk_7j8he8m3.djt)(g.detail) : `artifact content is unreachable from this session (${g.reason})`);
      o = { status: g.status, headers: g.response.headers, data: g.data };
    } else {
      let g = R === void 0 ? "" : `?__frame_t=${encodeURIComponent(R)}`, _ = await import_chunk_np189awg.Xd.get(`${w}${n}${g}`, { signal: e, timeout: D, responseType: "arraybuffer", maxRedirects: 0, maxContentLength: h, validateStatus: () => true, ...L && { headers: L } });
      if ((0, import_chunk_3a2r0s2z.iX)(_.status, _.headers)) return S();
      let C = (0, import_chunk_3a2r0s2z.nxe)(_.headers);
      if (C !== void 0 && (_.status < 200 || _.status >= 300)) return B(`HTTP ${_.status}`, C);
      o = { status: _.status, headers: _.headers, data: _.data };
    }
  } catch (g) {
    if ((0, import_chunk_3jjr3wje.wd)(g) || g instanceof import_chunk_jv7av99m.Ie) throw g;
    if (b && !F) (0, import_chunk_ac8t6db0.eYe)();
    let _ = b ? void 0 : (0, import_chunk_3jjr3wje.gD)(g);
    if (_ !== void 0) {
      if ((0, import_chunk_3a2r0s2z.iX)(_.connectStatus, _.headers)) return S();
      let C = (0, import_chunk_3a2r0s2z.nxe)(_.headers);
      if (C !== void 0) return B((0, import_chunk_3jjr3wje.qX)(_.connectStatus), C);
      let W = (0, import_chunk_3a2r0s2z.Ycn)(_.headers);
      if (W !== void 0) (0, import_chunk_w578pjby.t)(`[artifact] ${c}: proxy refused, marker ${W}`);
      return F ? i(0) : a("proxy_refused", `the proxy refused the connection to the artifact's content host (${(0, import_chunk_3jjr3wje.qX)(_.connectStatus)})`);
    }
    return F ? i(0) : a("request_error", `the content fetch failed in transit, timed out, or exceeded the ${M(h)} limit`);
  }
  if (F && o.status !== 200) return i(o.status);
  if (!b && !T) (0, import_chunk_0rkwgmhx.se)().contentHostEgressDenied.delete(y.env);
  if (b && (0, import_chunk_ac8t6db0.VWt)(o.status)) return a("relay_unavailable", q);
  if (b && (0, import_chunk_ac8t6db0.zWt)(o.status, o.data)) return a("network_off", `${import_chunk_ac8t6db0.GWt}; retrying from here will not help`);
  if (b && (0, import_chunk_mha8pjbc.L7)(o.status)) return a(`http_${o.status}`, (0, import_chunk_mha8pjbc.x$n)(o.status));
  if (b) (0, import_chunk_ac8t6db0.eYe)(o.status);
  if (o.status === 404) return { kind: "status", status: 404, frameNotFound: o.data !== void 0 && o.data.byteLength <= 256 && (0, import_chunk_ac8t6db0.Xpe)(Buffer.from(o.data).toString("utf8")) };
  if (R === void 0 && o.status === 403 && (0, import_chunk_qtg8rez4.fat)(o.headers, (0, import_chunk_3a2r0s2z.txe)(o.headers, o.data, (g) => g))) return { kind: "status", status: 403 };
  let A = b ? void 0 : (0, import_chunk_3a2r0s2z.Kcn)({ status: o.status, headers: o.headers, data: o.data, redact: (g) => (0, import_chunk_mha8pjbc.DWt)(g, R), label: `[artifact] ${c}` });
  if (A !== void 0) return a(A, import_chunk_3a2r0s2z.qcn[A]);
  if (o.status === 401 || o.status === 403) return a(`http_${o.status}`, b ? "the cloud session's artifact mount refused the read \u2014 file reads may not be enabled for this session, or the artifact was unshared or taken down" : "access to the artifact content was refused \u2014 the artifact may have been unshared or taken down");
  if (o.status !== 200) return a(`http_${o.status}`, `unexpected answer from the ${T ? "artifact service" : "content host"} (HTTP ${o.status})`);
  if (b) (0, import_chunk_ac8t6db0.hRe)(import_chunk_865at33z.FN);
  let P = o.headers, O = b || T ? (0, import_chunk_mha8pjbc.yEt)(P) : P?.["content-type"], U = String(P?.[Q] ?? "").toLowerCase(), Y = String(P?.[Z] ?? "");
  return { kind: "ok", status: 200, bytes: Buffer.from(o.data ?? new ArrayBuffer(0)), contentType: typeof O === "string" ? (0, import_chunk_7cfjrnwy.nt)(O, ";").trim().toLowerCase() : "", ...import_chunk_r48wrczg.cq.test(U) && { docSha256: U }, .../^\d{1,15}$/.test(Y) && { docSeq: Number(Y) } };
}
function z(r, n, c, h) {
  let e;
  try {
    e = J().safeParse((0, import_chunk_w578pjby.te)(r.toString("utf8")));
  } catch {
    return v(c, "bad_json", "the artifact service answered with something other than a file list", h);
  }
  if (!e.success) return v(c, "bad_shape", "the artifact service answered with a file list this version of the tool cannot read", h);
  if (e.data.ver !== n) return v(c, "bad_shape", "the artifact service answered with the file list of another version of this artifact; try again", h);
  return e.data;
}
async function H(r, n, c, h, e = true) {
  let f = await I(r, `/_f/${r.ver}/${import_chunk_r8478wtb.Mde}`, n, X + 1, c, h, e);
  if (f.kind !== "ok") return f;
  let d = z(f.bytes, r.ver, n, e);
  if ("kind" in d) return d;
  let F = Object.entries(d.files);
  if (F.length > vAn) return v(n, "too_many", `the file list names more than ${vAn} files`, e);
  return { kind: "ok", files: F.filter(([i]) => i.length <= import_chunk_mha8pjbc.sM && !/[\p{Cc}\p{Cf}\p{Co}\p{Zl}\p{Zp}]/u.test(i) && (0, import_chunk_7cfjrnwy.Cf)(i) && !(0, import_chunk_mha8pjbc.C_s)(i)).map(([i, y]) => ({ path: i, contentType: y.contentType, sizeBytes: y.size, sha256: y.sha256 })).sort((i, y) => i.path < y.path ? -1 : i.path > y.path ? 1 : 0), narrowed: d.narrowed === true };
}
async function Oue(r, n, c, h = {}) {
  let e = await N(r, "file list", n, c, h);
  if (e.kind === "error") return e;
  let f = await H(e, "file list", n, (0, import_chunk_mha8pjbc._Et)());
  if (f.kind === "error") return f;
  if (f.kind === "status") {
    if (f.status === 404 && !e.filesCounted && (!e.relay || f.frameNotFound === true)) return (0, import_chunk_cqa9hrgx.l)("artifact_file_list", "single_page"), { kind: "error", reason: "single_page", message: "this artifact is a single page with no separately published files, so there is no file list; read the page itself", ver: e.ver, cowritten: e.cowritten, typeLocked: e.typeLocked };
    if (e.publicRead && f.status === 403) {
      if (await re(e, n)) return (0, import_chunk_cqa9hrgx.l)("artifact_file_list", "single_page"), { kind: "error", reason: "single_page", message: "this public artifact is a single page with no separately published files, so there is no file list; read the page itself", ver: e.ver, cowritten: e.cowritten, typeLocked: e.typeLocked };
      return v("file list", "public_refused", "this public artifact's files are not available to readers outside its organization right now \u2014 it may no longer be public, or it was taken down");
    }
    return (0, import_chunk_cqa9hrgx.m)("artifact_file_list", `http_${f.status}`), v("file list", `http_${f.status}`, e.relay ? e.filesCounted ? "not found through this cloud session's artifact mount \u2014 the artifact has published files, but file reads are not enabled for this session yet or the artifact service does not offer their list yet; retrying from here will not help" : "not found through this cloud session's artifact mount \u2014 this artifact is a single page with no separate files, or file reads are not enabled for this session yet" : "the artifact has published files, but the artifact service does not offer their list yet; retrying from here will not help", false);
  }
  return (0, import_chunk_cqa9hrgx.u)("artifact_file_list", { relay: e.relay, files: f.files.length, ...e.agentDirect && { agent_direct: true }, ...e.publicRead && { public: true }, ...e.reused && { boot_reused: true } }), { kind: "ok", ver: e.ver, files: f.files.map((d) => e.livePaths.includes(d.path) ? { ...d, live: true } : d), relay: e.relay, agentDirect: e.agentDirect, cowritten: e.cowritten, typeLocked: e.typeLocked, writerClass: e.writerClass, owner: e.owner, ...e.audience !== void 0 && { audience: e.audience }, foreign: e.foreign, outsideOrg: e.outsideOrg, publicRead: e.publicRead, narrowed: e.publicRead && f.narrowed, ...e.typePaths.length > 0 && { typePaths: e.typePaths }, ...e.title !== void 0 && { title: e.title }, ...e.favicon !== void 0 && { favicon: e.favicon }, ...e.publishPreconditions === true && { publishPreconditions: true } };
}
function G(r) {
  return { ver: r.ver, relay: r.relay, agentDirect: r.agentDirect, cowritten: r.cowritten, typeLocked: r.typeLocked, writerClass: r.writerClass, foreign: r.foreign, outsideOrg: r.outsideOrg, ...r.orgRelation === "external" && { external: true }, offOrgRamp: (0, import_chunk_mha8pjbc.eyo)(r.orgRelation), publicRead: r.publicRead, ...r.title !== void 0 && { title: r.title } };
}
function V(r, n, c = true) {
  let h = r.relay && !(n.frameNotFound === true && (0, import_chunk_ac8t6db0.Wln)(import_chunk_865at33z.FN));
  return v("file read", `http_${n.status}`, h ? `not found through this cloud session's artifact mount \u2014 no file is published at that path in the served version, or file reads are not enabled for this session yet; action "list_files" shows the paths` : r.publicRead ? 'this public artifact serves no file at that path to readers outside its organization \u2014 action "list_files" shows the paths it does serve (or the artifact is no longer public)' : 'no file is published at that path in the served version \u2014 action "list_files" shows the paths', c);
}
async function re(r, n) {
  let { base: c, headers: h } = (0, import_chunk_mha8pjbc.M$n)(r.target);
  try {
    return (await import_chunk_np189awg.Xd.head(`${c}/_f/${r.ver}/`, { signal: n, timeout: import_chunk_mha8pjbc.tyo, maxRedirects: 0, validateStatus: () => true, ...h && { headers: h } })).status === 200;
  } catch (e) {
    if ((0, import_chunk_3jjr3wje.wd)(e) || e instanceof import_chunk_jv7av99m.Ie) throw e;
    return false;
  }
}
async function K(r, n, c, h, e, f = true) {
  let d = n.split("/").map(encodeURIComponent).join("/"), F = r.source ? await I(r, (0, import_chunk_mha8pjbc.I_s)(r.ver, d), "file read", import_chunk_mha8pjbc.zje, c, h, f, true) : void 0;
  if (F?.kind === "error") return F;
  let a = F?.kind === "ok" ? F : await I(r, `/_f/${r.ver}/${d}`, "file read", import_chunk_mha8pjbc.zje, c, h, f), i = a === F;
  if (a.kind !== "ok") return a;
  if (!import_chunk_r48wrczg.bW.test(a.contentType)) return v("file read", "unexpected_type", "the content host served the file with a type this tool does not save", f);
  if (a.bytes.length >= import_chunk_mha8pjbc.zje) return v("file read", "size", `the file exceeds the ${M(import_chunk_mha8pjbc.zje)} limit`, f);
  let y = (E) => (0, import_crypto.createHash)("sha256").update(E).digest("hex"), R = a.bytes, b = y(R), k = true, w = "unused", L = false, S, B, T = r.livePaths.includes(n);
  if (a.contentType === "text/html") {
    let E = await e(), o = E.kind === "ok" ? E.files.find((A) => A.path === n)?.sha256 : void 0;
    if (B = o, o === void 0) w = T ? "live" : "missing", k = false;
    else if (b === o) w = "verified";
    else {
      let A = i ? void 0 : (0, import_chunk_f2vegtjy.Pln)(a.bytes, (P) => y(P) === o);
      if (A !== void 0) R = A, b = o, w = "verified";
      else w = T ? "live" : "unverified", k = false;
    }
  }
  return { kind: "ok", path: n, bytes: R, contentType: a.contentType, sha256: b, asPublished: k, listing: w, ...B !== void 0 && { listedSha256: B }, docVerified: L, ...S !== void 0 && { docSeq: S }, ...i && { source: true } };
}
async function Krr(r, n, c, h, e = {}) {
  let f = e.mayNameFileList ? (0, import_chunk_mha8pjbc.z_o)(n) : (0, import_chunk_mha8pjbc.s4)(n);
  if ("errMsg" in f) return v("file read", "invalid_path", f.errMsg);
  let d = await N(r, "file read", c, h, e);
  if (d.kind === "error") return d;
  let F = (0, import_chunk_mha8pjbc._Et)(), a = await K(d, f.key, c, F, () => H(d, "file read", c, F, false));
  if (a.kind === "error") return a;
  if (a.kind === "status") return f.key === import_chunk_r8478wtb.Mde ? v("file read", `http_${a.status}`, 'no list of files is served for this version (a single-page artifact has none) \u2014 action "list_files" says why') : V(d, a);
  if (f.key === import_chunk_r8478wtb.Mde) {
    let i = z(a.bytes, d.ver, "file read", true);
    if ("kind" in i) return i;
  }
  return { ...a, ...G(d) };
}
var jti = 4, ie = import_chunk_f2vegtjy.Wbe;
async function AFa(r, n, c, h, { byteBudget: e = ie, ...f } = {}) {
  let d = await N(r, "file read", c, h, f);
  if (d.kind === "error") return d;
  let F = (0, import_chunk_mha8pjbc._Et)(), a, i = () => a ??= H(d, "file read", c, F, false).then((b) => {
    if (b.kind !== "ok") a = void 0;
    return b;
  }), y = 0;
  return { kind: "ok", files: await ne(n, jti, async (b) => {
    let k = (0, import_chunk_mha8pjbc.s4)(b);
    if ("errMsg" in k) return { ...v("file read", "invalid_path", k.errMsg, false), path: b };
    if (y >= e) return { kind: "error", reason: "batch_budget", message: `not fetched: the files read before it in this call already hold ${Math.floor(e / 1048576)}MB, the most one read carries \u2014 read it, and any after it, in another call`, path: k.key };
    if (d.livePaths.includes(k.key)) return { kind: "error", reason: "live_path", message: "this is a live file: read it by itself with `path`, which returns its current state", path: k.key };
    let w = await K(d, k.key, c, (0, import_chunk_mha8pjbc._Et)(), i, false);
    if (w.kind === "status" && w.status === 404 && import_chunk_r8478wtb.ey.test(k.key)) return { ...v("file read", "http_404", `no published file was found at that path. It has the form of an uploaded asset's id, and an asset is read one per call, ${(0, import_chunk_mha8pjbc.Eu)('with action "read_asset" and the id as `asset_id`', () => "with the id as `path`")}`, false), path: k.key };
    if (w.kind === "status") return { ...V(d, w, false), path: k.key };
    if (w.kind === "ok") y += w.bytes.length;
    return w.kind === "error" ? { ...w, path: k.key } : w;
  }), ...G(d) };
}
async function ne(r, n, c) {
  let h = Array(r.length), e = 0, f = async () => {
    while (e < r.length) {
      let d = e++;
      h[d] = await c(r[d]);
    }
  };
  return await Promise.all(Array.from({ length: Math.min(n, r.length) }, () => f())), h;
}
