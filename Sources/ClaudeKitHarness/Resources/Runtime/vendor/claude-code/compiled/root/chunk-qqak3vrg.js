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
var chunk_qqak3vrg_exports = {};
__export(chunk_qqak3vrg_exports, {
  $Zl: () => $Zl,
  BZl: () => BZl,
  UZl: () => UZl,
  akr: () => akr,
  fql: () => fql,
  mql: () => mql,
  mys: () => mys,
  n1i: () => n1i,
  pql: () => pql,
  pys: () => pys,
  t1i: () => t1i,
  uql: () => uql
});
module.exports = __toCommonJS(chunk_qqak3vrg_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_yz5b8aaa = require("/$bunfs/root/chunk-yz5b8aaa.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_0pb268nk = require("/$bunfs/root/chunk-0pb268nk.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_gbskgz33 = require("/$bunfs/root/chunk-gbskgz33.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_z1z1qsrb = require("/$bunfs/root/chunk-z1z1qsrb.js");
var import_chunk_qtg8rez4 = require("/$bunfs/root/chunk-qtg8rez4.js");
var import_chunk_pkzhb7kv = require("/$bunfs/root/chunk-pkzhb7kv.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_tmh9ctw1 = require("/$bunfs/root/chunk-tmh9ctw1.js");
var import_chunk_1dwdshew = require("/$bunfs/root/chunk-1dwdshew.js");
var import_chunk_a7h1jnra = require("/$bunfs/root/chunk-a7h1jnra.js");
var import_chunk_k2g55agd = require("/$bunfs/root/chunk-k2g55agd.js");
var import_chunk_ddfyyyy7 = require("/$bunfs/root/chunk-ddfyyyy7.js");
var import_chunk_tgyp6t8q = require("/$bunfs/root/chunk-tgyp6t8q.js");
var import_chunk_6ygedzfy = require("/$bunfs/root/chunk-6ygedzfy.js");
var import_chunk_zc3emgcg = require("/$bunfs/root/chunk-zc3emgcg.js");
var import_chunk_zkwftgft = require("/$bunfs/root/chunk-zkwftgft.js");
var import_chunk_7j8he8m3 = require("/$bunfs/root/chunk-7j8he8m3.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
function Q(e) {
  for (let r of e) {
    let o = (0, import_chunk_ma3kja9f.T)(r) && typeof r.text === "string" ? (0, import_chunk_0jve1fep.et)(r.text, false) : null;
    if ((0, import_chunk_ma3kja9f.T)(o)) {
      let n = o.type;
      if (o.creatable !== true || !(0, import_chunk_ma3kja9f.T)(n) || n.tier !== "core") return;
      return n.title === "Slides" ? "slides" : n.title === "Design" ? "design" : void 0;
    }
  }
  return;
}
function W(e) {
  let r = e.call;
  e.call = async (...o) => {
    let n = await r.apply(e, o), [c, d] = o, y = n.data;
    try {
      if (!Array.isArray(y) || (0, import_chunk_ma3kja9f.T)(c) && c.file !== void 0) return n;
      let p = Q(y);
      if (p === void 0 || (0, import_chunk_tmh9ctw1.Tyo)() || !(0, import_chunk_tmh9ctw1.Cyo)(d)) return n;
      return (0, import_chunk_cqa9hrgx.u)("artifact_mcp_ask_first", { intent: (0, import_chunk_78g0060s.f)(p) }), { ...n, data: [{ type: "text", text: (0, import_chunk_tmh9ctw1.t_l)(p) }, ...y] };
    } catch (p) {
      return (0, import_chunk_cqa9hrgx.m)("artifact_mcp_ask_first", "threw"), (0, import_chunk_k449cc64.i)(p), n;
    }
  };
}
var F = { wire: (0, import_chunk_78g0060s.S)("mcp_server_tool") }, tt = /* @__PURE__ */ new Set(["bad_entry", "input_schema", "relative_path", "too_many_files", "path_rejected", "resolves_elsewhere", "name_direction", "hard_links", "not_regular", "too_large", "too_large_total", "input_changed", "policy_denied", "uploads_off", "egress_blocked", "essential_traffic", "rule_not_applicable", "moved", "grew", "changed"]);
function R(e) {
  try {
    e();
  } catch (r) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(r), "The outcome of an Artifacts MCP publish could not be counted in analytics; the call itself is unaffected"));
  }
}
async function q(e, r, o, n, c) {
  if (!import_chunk_a7h1jnra.Nln.has(e)) return n();
  let d;
  R(() => {
    let _ = c?.();
    d = _ && { permissionMode: (0, import_chunk_78g0060s.f)(_) };
  });
  let y = e === "create_from_type", p = () => ({ is_redeploy: !(0, import_chunk_a7h1jnra.Y8e)(e, r()), ...d, ...F }), h = performance.now(), b;
  try {
    b = await n();
  } catch (_) {
    throw R(() => {
      if (o()) return;
      let E = _ instanceof import_chunk_yz5b8aaa.Bm, k = E ? (0, import_chunk_1dwdshew.o1i)(_) : void 0;
      if (y) {
        if (!E) (0, import_chunk_cqa9hrgx.m)("artifact_create_from_type", "request_error", { ...K("status", _, h), ...F });
        else if (k === void 0) (0, import_chunk_cqa9hrgx.m)("artifact_create_from_type", "mcp_tool_error", F);
        else (0, import_chunk_cqa9hrgx.m)("artifact_create_from_type", k === 404 ? "not_found" : k === 403 ? "denied" : `status_${k}`, { status: k, ...F });
        return;
      }
      let g = p();
      if (_ instanceof import_chunk_yz5b8aaa.EXe) (0, import_chunk_cqa9hrgx.m)("artifact_publish", tt.has(_.code) || _.code.startsWith("model_") ? `attach_refused_${_.code}` : `attach_failed_${_.code}`, { ..._.facts, ...g });
      else if (!E) (0, import_chunk_cqa9hrgx.m)("artifact_publish", "request_error", { ...K("deploy_status", _, h), ...g });
      else if (k === void 0) (0, import_chunk_cqa9hrgx.m)("artifact_publish", "deploy_failed", g);
      else (0, import_chunk_cqa9hrgx.m)("artifact_publish", k === 403 ? "publish_denied" : k === 404 && g.is_redeploy ? "slug_gone" : "deploy_failed", { ...g, deploy_status: k });
    }), _;
  }
  return R(() => {
    if ((0, import_chunk_a7h1jnra.n9)(b.data) === null) return;
    if (y) (0, import_chunk_cqa9hrgx.u)("artifact_create_from_type", F);
    else (0, import_chunk_cqa9hrgx.u)("artifact_publish", p());
  }), b;
}
function K(e, r, o) {
  let { http_status: n, ...c } = (0, import_chunk_1dwdshew.vyo)(r, o);
  return n === void 0 ? c : { ...c, [e]: n };
}
var G = /* @__PURE__ */ new Set(["artifact_tool_off", "org_policy_cache_miss"]), uql = new import_chunk_2904xtvq.j(() => ({ built: /* @__PURE__ */ new WeakSet(), hookAnswerLogged: /* @__PURE__ */ new WeakSet(), laterBuild: { kind: "closed" }, loginsCompleted: { count: 0, account: null } }));
function C() {
  return uql.of((0, import_chunk_f9x2f6cx.N)().host);
}
function $Zl(e) {
  let r = X(e, null), o = C();
  if (o.laterBuild = { kind: "closed" }, r.skip === void 0) return r.entry;
  if (G.has(r.skip)) o.laterBuild = { kind: "waiting", startup: r }, o.loginsCompleted = { count: 0, account: B() };
  return V(r, false), null;
}
function t1i(e) {
  let r = C(), { laterBuild: o } = r;
  if (o.kind === "closed") return null;
  if (!mys()) return "waiting";
  let n = X(e, o.kind === "built" ? o.entry : null);
  if (n.skip !== void 0 && G.has(n.skip)) return "waiting";
  if (o.kind === "built") return n.entry ?? null;
  if (n.skip !== void 0) return r.laterBuild = { kind: "closed" }, V(n, true), null;
  return r.laterBuild = { kind: "built", entry: n.entry }, (0, import_chunk_y53wbr8a.a)("tengu_artifact_mcp_laptop_entry_added_later", { startup_reason: (0, import_chunk_78g0060s.f)(o.startup.skip), startup_part: (0, import_chunk_78g0060s.fe)(o.startup.part) }), n.entry;
}
function pys(e, r) {
  let o = C();
  if (e > o.loginsCompleted.count) o.loginsCompleted = { count: e, account: r === "as_it_completed" ? B() : null };
}
function mys() {
  let e = B();
  return e !== null && e === C().loginsCompleted.account;
}
function n1i() {
  return C().laterBuild.kind !== "closed";
}
function B() {
  try {
    if (!(0, import_chunk_7j8he8m3.hat)()) return null;
    let e = (0, import_chunk_7j8he8m3.sdn)();
    if (!e?.accountUuid) return null;
    return `${e.accountUuid}|${e.organizationUuid}`;
  } catch (e) {
    return (0, import_chunk_k449cc64.i)(e), null;
  }
}
function V({ skip: e, part: r, agentCloudSession: o }, n) {
  let c = r === "growthbook_off" ? "feature_flag_off" : r;
  switch ((0, import_chunk_w578pjby.t)(`Artifacts MCP server not added: ${e}${c === void 0 ? "" : ` (${c})`}`), e) {
    case "threw":
    case "remote_session":
    case "desktop_host":
    case "desktop_share_action":
      return;
    case "managed_or_strict_mcp_config":
    case "safe_or_bare_mode":
    case "artifact_tool_off":
    case "artifact_tool_denied":
      if (!(0, import_chunk_f9x2f6cx.Y)() && o === true) (0, import_chunk_z1z1qsrb.fUn)(() => (0, import_chunk_y53wbr8a.a)("tengu_artifact_mcp_laptop_entry_skipped", { reason: (0, import_chunk_78g0060s.f)(e), part: (0, import_chunk_78g0060s.fe)(r), after_start: n }));
      return;
    default:
      (0, import_chunk_z1z1qsrb.fUn)(() => (0, import_chunk_cqa9hrgx.l)("artifact_mcp_laptop_entry", e));
  }
}
function X({ toolPermissionContext: e, configuredNames: r, fixedServerSet: o, allowedByPolicy: n }, c) {
  try {
    let d = rt(e, r, o);
    if (d.skip !== void 0) return d;
    if (d.stubDir !== void 0) {
      let h = { ...(0, import_chunk_tgyp6t8q.Ygl)(d.stubDir, (0, import_chunk_tgyp6t8q.qgl)((0, import_chunk_f9x2f6cx.Te)(), e)), scope: "dynamic" };
      if (!n(import_chunk_qdcbcsg7.ri, h)) return { skip: "org_mcp_policy" };
      if (c !== null) return { entry: c };
      let b = (0, import_chunk_qdcbcsg7.Vhe)(h);
      return C().built.add(b), { entry: { name: import_chunk_qdcbcsg7.ri, config: b } };
    }
    let y = { type: "http", url: d.url, headers: { "anthropic-beta": import_chunk_ephf358x.ff }, scope: "dynamic", toolPermissions: { ...import_chunk_k2g55agd.s1i } };
    if (!n(import_chunk_qdcbcsg7.ri, y)) return { skip: "org_mcp_policy" };
    if (c !== null) return { entry: c };
    let p = (0, import_chunk_qdcbcsg7.Vhe)(y, { firstPartyServer: { id: import_chunk_qdcbcsg7.aO, allowsFileUpload: () => !z() && n(import_chunk_qdcbcsg7.ri, y) }, resolveBearerToken: at, withheldBearerRefusal: (0, import_chunk_pkzhb7kv.yZ)() ? "Artifacts request not sent: this session can no longer use Artifacts. A permission rule or policy stops it, or its own token no longer works." : "Artifacts request not sent: this session can no longer use Artifacts with its login. In a terminal, check /login, /permissions and /config.", requestHeaders: () => (0, import_chunk_6mfepmbb.cf)((0, import_chunk_ddfyyyy7.sm)(), ["X-Frame-Surface", "X-Frame-Platform", "X-Frame-Client-Version", "X-Frame-Session-Id", "X-Frame-Claude-Code-Session-Id", "X-Frame-Tool-Use-Id"]) });
    return C().built.add(p), (0, import_chunk_z1z1qsrb.fUn)(() => (0, import_chunk_cqa9hrgx.u)("artifact_mcp_laptop_entry")), { entry: { name: import_chunk_qdcbcsg7.ri, config: p } };
  } catch {
    return (0, import_chunk_z1z1qsrb.fUn)(() => (0, import_chunk_cqa9hrgx.m)("artifact_mcp_laptop_entry", "threw")), { skip: "threw" };
  }
}
function rt(e, r, o) {
  if ((0, import_chunk_f9x2f6cx.Hn)() || (0, import_chunk_6e68m1dj.Ru)()) return { skip: "remote_session" };
  let n = (0, import_chunk_pkzhb7kv.yZ)();
  if (n) {
    let h = require("/$bunfs/root/chunk-cdqpyrz8.js");
    if (h.relayIsOnlyRoute() || !h.agentSessionMaySendDirect()) return { skip: "remote_session" };
  }
  if (((0, import_chunk_3t7ve0wy.Ol)() || (0, import_chunk_3t7ve0wy.Rft)()) && import_chunk_c203g5kd.s.CLAUDE_CODE_HOST_GUARDS_ARTIFACTS_MCP !== true) return { skip: "desktop_host" };
  if ((0, import_chunk_zc3emgcg.Eyo)()) return { skip: "desktop_share_action" };
  if (o !== null) return { skip: "managed_or_strict_mcp_config", part: o, agentCloudSession: n };
  if ((0, import_chunk_2gtmjt3y.Xn)() || (0, import_chunk_0pb268nk.Lr)("mcpAutoDiscovered")) return { skip: "safe_or_bare_mode", agentCloudSession: n };
  if (!(0, import_chunk_z1z1qsrb.FT)()) return { skip: "artifact_tool_off", part: (0, import_chunk_7j8he8m3.hat)() ? (0, import_chunk_z1z1qsrb.uUn)() ?? ((0, import_chunk_z1z1qsrb.qbe)() ? "not_found" : "admin_policy") : "login", agentCloudSession: n };
  let c = (0, import_chunk_ht27b0vz.Vs)(e);
  if ((0, import_chunk_ht27b0vz.Tr)(e, { name: import_chunk_r8478wtb.Vt }, c) !== null) return { skip: "artifact_tool_denied", part: (0, import_chunk_ht27b0vz.Tr)(e, { name: import_chunk_r8478wtb.Vt }, c.filter((h) => h.source !== "toolsNarrowing")) === null ? "tools_list" : "deny_rule", agentCloudSession: n };
  let d = (0, import_chunk_r8478wtb.kf)();
  if (d !== null) return r.has(import_chunk_qdcbcsg7.ri) ? { skip: "name_taken" } : { stubDir: d };
  let y = (0, import_chunk_2nv4wrez.ba)("allow_cobalt_plinth");
  if (y !== null) return { skip: `org_policy_${y}` };
  if (!(0, import_chunk_865at33z.W0)()) return { skip: "essential_traffic_or_3p" };
  if ((0, import_chunk_865at33z.Idt)() !== void 0) return { skip: "dev_frame_override" };
  let p;
  try {
    p = new URL((0, import_chunk_865at33z.jRo)());
  } catch {
    return { skip: "base_not_first_party" };
  }
  if (p.protocol !== "https:" || p.username !== "" || p.password !== "" || p.pathname !== "/" || p.search !== "" || p.hash !== "" || !(0, import_chunk_zhr7rpv7.md)(p.href)) return { skip: "base_not_first_party" };
  if (r.has(import_chunk_qdcbcsg7.ri)) return { skip: "name_taken" };
  return { url: new URL(import_chunk_qdcbcsg7.sJe, p.origin).href };
}
function akr(e) {
  return typeof e === "object" && e !== null && C().built.has(e) && (0, import_chunk_qdcbcsg7.Pl)(e);
}
function UZl(e) {
  if (!akr(e)) return {};
  return { skipAggregateToolResultBudget: true };
}
function BZl(e, r) {
  ot(e, r), nt(e, r);
}
function ot(e, r) {
  let o = (0, import_chunk_z1z1qsrb.z_l)(e, r.mcpInfo?.serverName);
  if (o === void 0) return;
  let { hookAnswerLogged: n } = C();
  if (!n.has(o.config)) n.add(o.config), (0, import_chunk_z1z1qsrb.V_l)(o);
  (0, import_chunk_zkwftgft.u_l)(o, r);
}
function nt(e, r) {
  let o = r.mcpInfo?.toolName;
  if (o === void 0 || !(akr(e) || (0, import_chunk_865at33z.oD)(e))) return;
  if (o === import_chunk_pkzhb7kv.Ikr) {
    W(r);
    return;
  }
  if (o === import_chunk_pkzhb7kv.pUn) {
    (0, import_chunk_6ygedzfy.Xgl)(r);
    return;
  }
  if (!(import_chunk_a7h1jnra.Nln.has(o) || o === import_chunk_a7h1jnra.fkr)) return;
  if (import_chunk_a7h1jnra.Nln.has(o)) Object.assign(r, { preserveToolUseResultInSubagents: true, mcpInfo: { ...r.mcpInfo, publishesArtifact: true } });
  let n = r.call;
  r.call = async (c, d, y, p, h, b) => {
    let _ = (0, import_chunk_0rkwgmhx.se)(), { accountEpoch: E, conversationEpoch: k } = _, g = await q(o, () => {
      let A = p?.message?.content, O = Array.isArray(A) ? A.find((P) => P.type === "tool_use" && P.id === d.toolUseId) : void 0;
      return O?.type === "tool_use" ? O.input : c;
    }, () => d.abortController.signal.aborted, () => n.call(r, c, d, y, p, h, b), () => (0, import_chunk_bz1f2qnq.Z)(d).mode);
    if (o === import_chunk_a7h1jnra.fkr) {
      try {
        let A = (0, import_chunk_a7h1jnra.Hyo)(g.data);
        if (A !== null && (0, import_chunk_ma3kja9f.T)(c) && c.slug === A) import_chunk_a7h1jnra.jbe.loaded()?.forgetArtifactDeletedThroughMcp(d, A);
      } catch (A) {
        (0, import_chunk_cqa9hrgx.m)("artifact_mcp_laptop_publish_row", "forget_threw"), (0, import_chunk_k449cc64.i)(A);
      }
      return g;
    }
    let M = (0, import_chunk_0rkwgmhx.se)();
    if (M.accountEpoch !== E || M.conversationEpoch !== k) return g;
    let w;
    try {
      w = (0, import_chunk_a7h1jnra.n9)(g.data);
    } catch (A) {
      return (0, import_chunk_cqa9hrgx.m)("artifact_mcp_laptop_publish_row", "threw"), (0, import_chunk_k449cc64.i)(A), g;
    }
    if (w === null) return (0, import_chunk_cqa9hrgx.l)("artifact_mcp_laptop_publish_row", "unlisted"), g;
    (0, import_chunk_qtg8rez4.NEt)(w.slug, (0, import_chunk_a7h1jnra.m_l)(g.data));
    let v = (0, import_chunk_qtg8rez4.gj)((0, import_chunk_qtg8rez4.Bt)(w.slug)), I = { ...g, mcpMeta: { ...g.mcpMeta, url: (0, import_chunk_r8478wtb.sr)(w), title: w.title, ...v !== void 0 && { type: { url: (0, import_chunk_r8478wtb.sr)({ slug: v, env: w.env }) } } } }, U = akr(e);
    if (it(d, w, o, c, U, (0, import_chunk_a7h1jnra.Iyo)(g.data).read === "owner", o === import_chunk_a7h1jnra.ule && (0, import_chunk_a7h1jnra.Myo)(g.data) && d.options.tools.some((A) => A.mcpInfo?.serverName === r.mcpInfo?.serverName && A.mcpInfo?.toolName === import_chunk_a7h1jnra.yN)), !U) return I;
    let x = import_chunk_a7h1jnra.m1i.arm;
    if (x === null) return (0, import_chunk_cqa9hrgx.l)("artifact_mcp_laptop_publish_row", "no_wake_arm"), I;
    let L = false;
    try {
      let { title: A, ...O } = w, P = (0, import_chunk_ma3kja9f.T)(c) && typeof c.title === "string" ? (0, import_chunk_r8478wtb.GR)(c.title) : null, H = P === null ? O : { ...O, title: P }, { version: ct, ...J } = H;
      L = x(d, o === import_chunk_a7h1jnra.ule ? J : H);
    } catch (A) {
      (0, import_chunk_cqa9hrgx.m)("artifact_mcp_laptop_publish_row", "wake_threw"), (0, import_chunk_k449cc64.i)(A);
    }
    return L !== false && Array.isArray(g.data) ? { ...I, data: [...g.data, { type: "text", text: st[L] }] } : I;
  };
}
function it(e, r, o, n, c, d, y) {
  try {
    (0, import_chunk_0rkwgmhx.se)().reservedMints.delete(r.slug);
    let p = (0, import_chunk_0rkwgmhx.se)().ownPublishedSlugs, h = p.get(r.slug);
    if (!d && h !== void 0) p.set(r.slug, { env: h.env });
    if (c && d && o !== import_chunk_a7h1jnra.ule && o !== import_chunk_a7h1jnra._ys && !(0, import_chunk_865at33z.qi)(e.agentContext) && !(0, import_chunk_bz1f2qnq.TN)(e) && (0, import_chunk_865at33z.bw)(e.messages)) p.set(r.slug, { env: r.env, byPerson: true });
    let b = (0, import_chunk_a7h1jnra.Y8e)(o, n);
    if (b && o !== import_chunk_a7h1jnra.ule && c && !(0, import_chunk_865at33z.qi)(e.agentContext) && !(0, import_chunk_bz1f2qnq.TN)(e)) (0, import_chunk_0rkwgmhx.se)().ownCreatedSlugs.set(r.slug, { env: r.env, wrotePage: true });
    let _ = import_chunk_a7h1jnra.jbe.loaded();
    if (_ === null) {
      (0, import_chunk_cqa9hrgx.l)("artifact_mcp_laptop_publish_row", "no_writer");
      return;
    }
    let E = _.addOpenedFrameRow(e, r, r.title, { mcpPublished: true });
    (0, import_chunk_cqa9hrgx.u)("artifact_mcp_laptop_publish_row");
    let k = { slug: r.slug, url: (0, import_chunk_r8478wtb.sr)(r) }, g = _.derivePublishContext(e).hasInteractiveUI && e.agentId === void 0, { deferredSurface: M } = (0, import_chunk_0rkwgmhx.se)();
    if (y) {
      if (g) M.set(r.slug, k);
      return;
    }
    let w = o !== import_chunk_a7h1jnra._ys && M.delete(r.slug), v = _.surfacePublishedArtifact(e, w || g, k, !b && !w, (I) => _.markFrameOpenOutcome(e, E.rowKey, I));
    if (w && v === "auto_open_skipped_remote_control") M.set(r.slug, k);
  } catch (p) {
    (0, import_chunk_cqa9hrgx.m)("artifact_mcp_laptop_publish_row", "threw"), (0, import_chunk_k449cc64.i)(p);
  }
}
var fql = `Once this session's watch on this artifact connects, when the user sends a comment on the artifact to Claude, this session gets a message naming the artifact and the thread. Plain comments, and comments other people send to Claude, do not wake it. Any "wake" field in this answer describes cloud sessions only.`, pql = 'A wake for this session is registered with the artifact service, or is being registered (a notice follows if it cannot be). With it, this session gets a new turn when anyone sends a comment on the artifact to Claude, or when the artifact is republished elsewhere. Plain comments do not wake it. A wake carries neither the comment nor the new version. Any "wake" field in this answer does not describe this registration.', mql = 'No wake could be registered for this session, so comments on this artifact and republishes of it will not start a turn here: this session is not watching the artifact. Any "wake" field in this answer does not describe this session.', st = { local: fql, cloud: pql, cloud_unwoken: mql };
function z() {
  return !(0, import_chunk_z1z1qsrb.FT)() || (0, import_chunk_2nv4wrez.ba)("allow_cobalt_plinth") !== null || (0, import_chunk_ht27b0vz.Tr)((0, import_chunk_4vsz8a99.Vd)(), { name: import_chunk_r8478wtb.Vt }, (0, import_chunk_gbskgz33.eI)().filter((e) => e.ruleBehavior === "deny")) !== null;
}
async function at() {
  if (z()) return null;
  return await (0, import_chunk_865at33z.rIl)();
}
