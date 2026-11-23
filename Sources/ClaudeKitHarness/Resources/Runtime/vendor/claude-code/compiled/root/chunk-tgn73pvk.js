const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
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
var __using = (stack, value, async) => {
  if (value != null) {
    if (typeof value !== "object" && typeof value !== "function") __typeError("Object expected");
    var dispose, inner;
    if (async) dispose = value[__knownSymbol("asyncDispose")];
    if (dispose === void 0) {
      dispose = value[__knownSymbol("dispose")];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") __typeError("Object not disposable");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    stack.push([async, dispose, value]);
  } else if (async) {
    stack.push([async]);
  }
  return value;
};
var __callDispose = (stack, error, hasError) => {
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s2, m2, _2) {
    return _2 = Error(m2), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s2, _2;
  };
  var fail = (e) => error = hasError ? new E(e, error, "An error was suppressed during disposal") : (hasError = true, e);
  var next = (it2) => {
    while (it2 = stack.pop()) {
      try {
        var result = it2[1] && it2[1].call(it2[2]);
        if (it2[0]) return Promise.resolve(result).then(next, (e) => (fail(e), next()));
      } catch (e) {
        fail(e);
      }
    }
    if (hasError) throw error;
  };
  return next();
};
var chunk_tgn73pvk_exports = {};
__export(chunk_tgn73pvk_exports, {
  $9o: () => $9o,
  Azl: () => Azl,
  CYr: () => CYr,
  Czl: () => Czl,
  D$a: () => D$a,
  F$a: () => F$a,
  H$a: () => H$a,
  L$a: () => L$a,
  N$a: () => N$a,
  Rzl: () => Rzl,
  Sie: () => Sie,
  TYr: () => TYr,
  ZXl: () => ZXl,
  aJl: () => aJl,
  cRn: () => cRn,
  dRn: () => dRn,
  eJl: () => eJl,
  iJl: () => iJl,
  lRn: () => lRn,
  nJl: () => nJl,
  oJl: () => oJl,
  rJl: () => rJl,
  sJl: () => sJl,
  tJl: () => tJl,
  vYr: () => vYr,
  xzl: () => xzl,
  zri: () => zri
});
module.exports = __toCommonJS(chunk_tgn73pvk_exports);
var import_chunk_racn22qq = require("/$bunfs/root/chunk-racn22qq.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_akwvpp7y = require("/$bunfs/root/chunk-akwvpp7y.js");
var import_chunk_zzrn5zap = require("/$bunfs/root/chunk-zzrn5zap.js");
var import_chunk_hazyxdac = require("/$bunfs/root/chunk-hazyxdac.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_yz5b8aaa = require("/$bunfs/root/chunk-yz5b8aaa.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_htn4d0yq = require("/$bunfs/root/chunk-htn4d0yq.js");
var import_chunk_x8rfwr2t = require("/$bunfs/root/chunk-x8rfwr2t.js");
var import_chunk_sppbt6xz = require("/$bunfs/root/chunk-sppbt6xz.js");
var import_chunk_7625rswd = require("/$bunfs/root/chunk-7625rswd.js");
var import_chunk_271xsh6x = require("/$bunfs/root/chunk-271xsh6x.js");
var import_chunk_yrpmp1hk = require("/$bunfs/root/chunk-yrpmp1hk.js");
var import_chunk_rwc528c4 = require("/$bunfs/root/chunk-rwc528c4.js");
var import_chunk_jbjjrhxt = require("/$bunfs/root/chunk-jbjjrhxt.js");
var import_chunk_gbskgz33 = require("/$bunfs/root/chunk-gbskgz33.js");
var import_chunk_zddv3vvj = require("/$bunfs/root/chunk-zddv3vvj.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_q7cfnzfy = require("/$bunfs/root/chunk-q7cfnzfy.js");
var import_chunk_z88wr2ke = require("/$bunfs/root/chunk-z88wr2ke.js");
var import_chunk_e2p0azgz = require("/$bunfs/root/chunk-e2p0azgz.js");
var import_chunk_kj84g0v7 = require("/$bunfs/root/chunk-kj84g0v7.js");
var import_chunk_vp3hv9ky = require("/$bunfs/root/chunk-vp3hv9ky.js");
var import_chunk_r64qzndq = require("/$bunfs/root/chunk-r64qzndq.js");
var import_chunk_3fqcfedz = require("/$bunfs/root/chunk-3fqcfedz.js");
var import_chunk_fkbh0xha = require("/$bunfs/root/chunk-fkbh0xha.js");
var import_chunk_0zqda2sj = require("/$bunfs/root/chunk-0zqda2sj.js");
var import_chunk_h3t3td58 = require("/$bunfs/root/chunk-h3t3td58.js");
var import_chunk_aj8wb2xh = require("/$bunfs/root/chunk-aj8wb2xh.js");
var import_chunk_myvyhcm0 = require("/$bunfs/root/chunk-myvyhcm0.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_49zxha55 = require("/$bunfs/root/chunk-49zxha55.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_crypto = require("crypto");
var import_http = require("http");
var import_url = require("url");
var import_os = require("os");
var import_path = require("path");
var ft = "require_connector_block_on_plugin_servers";
async function Ee(e, r, o) {
  let i = (0, import_chunk_sjqze7qg.KHn)();
  if (i !== null) return i.assertSignInClearOfConnectorBlock(e, r, o);
  Be(r);
}
function ge(e, r, o, i) {
  let h = (0, import_chunk_sjqze7qg.KHn)();
  if (h !== null) return h.assertSentHeadersClearOfConnectorBlock(e, r, o, i);
  Be(r);
}
function Be(e) {
  if ((e.pluginSource !== void 0 || e.agentSource === "plugin") && (0, import_chunk_2zeyvjwb.Oze)(ft) !== false) throw new import_chunk_jv7av99m.A("Could not check this MCP server against your organization's connector settings, so the sign-in was stopped.", "MCP OAuth refused: connector check failed");
}
function Xe(e) {
  switch (e) {
    case "projectSettings":
    case "localSettings":
      return "repo";
    case "plugin":
    case "additionalDirectory":
      return "thirdParty";
    case "userSettings":
    case "flagSettings":
    case "policySettings":
    case "built-in":
      return "operator";
    default:
      return e;
  }
}
function gt(e) {
  switch (e) {
    case "project":
    case "local":
      return "repo";
    case "user":
    case "dynamic":
    case "enterprise":
    case "claudeai":
    case "managed":
    case "agent":
      return "operator";
    default:
      return e;
  }
}
function St(e) {
  return gt(e.scope) === "repo" || e.agentSource !== void 0 && Xe(e.agentSource) === "repo";
}
function vt(e, r) {
  if (r !== void 0) return true;
  if (e.scope === "project" || (0, import_chunk_f9x2f6cx.BOe)(e) !== void 0) return true;
  return e.agentSource !== void 0 && Xe(e.agentSource) !== "operator";
}
async function kt(e, r) {
  if (!r.headersHelper) return null;
  let o = typeof r.pluginPath === "string" && (0, import_path.isAbsolute)(r.pluginPath) ? r.pluginPath : void 0;
  try {
    (0, import_chunk_k449cc64.He)(e, "Executing headersHelper to get dynamic headers");
    let i = (0, import_chunk_f9x2f6cx.BOe)(r), h = i !== void 0 || r.scope !== void 0 && St({ scope: r.scope, agentSource: r.agentSource }), v = (0, import_chunk_f9x2f6cx.hPt)(r), y = i ?? r.declaredIn, k = await (0, import_chunk_zddv3vvj.vho)({ command: r.headersHelper, isRepoResidentConfig: h, repoResidentOrigin: y, cwd: o ?? (h ? v ?? r.declaredIn ?? (0, import_chunk_f9x2f6cx.Te)() : r.scope === "dynamic" && r.agentSource === void 0 ? ((0, import_chunk_f9x2f6cx.hP)() ? null : v) ?? (0, import_chunk_f9x2f6cx.Te)() : (0, import_chunk_2gtmjt3y.Ze)()), scrubCredentialEnv: vt(r, o), pluginId: r.pluginSource, readEnvAsStarts: (g) => (0, import_chunk_q7cfnzfy.U5)(r, g), env: { CLAUDE_CODE_MCP_SERVER_NAME: e, CLAUDE_CODE_MCP_SERVER_URL: r.url, ...o && { CLAUDE_PLUGIN_ROOT: o } } });
    if (k.ok) return (0, import_chunk_k449cc64.He)(e, `Successfully retrieved ${Object.keys(k.headers).length} headers from headersHelper`), (0, import_chunk_cqa9hrgx.u)("mcp_headers_helper"), k.headers;
    if (k.reason === "missing_trust") {
      let g = y === (0, import_chunk_f9x2f6cx.x1e)() && y !== (0, import_chunk_f9x2f6cx.Te)() && !(0, import_chunk_865at33z.mz)() ? y : null, T = g === null ? "this workspace has no persisted trust" : "the folder that this session was launched in has no persisted trust (the session has moved and still reads that folder's .mcp.json)", O = (0, import_chunk_865at33z.mz)() ? `${import_chunk_865at33z.mPe}, so add the server at user scope or in a managed MCP config instead` : g !== null ? g === (0, import_os.homedir)() ? "it is the home directory, whose trust is session-only, so launch from a project directory you have trusted" : `set projects[${(0, import_chunk_zddv3vvj.XFn)((0, import_chunk_865at33z.iD)(g))}].hasTrustDialogAccepted to true in ${(0, import_chunk_c203g5kd.DB)()}` : (0, import_chunk_f9x2f6cx.XM)() ? "not available to a session rooted at the home directory without a person present (home trust is session-only): run Claude Code interactively here and accept the trust dialog for that session, or work from a project directory you have trusted" : `accept the trust dialog here once interactively, or set projects[${(0, import_chunk_zddv3vvj.XFn)((0, import_chunk_865at33z.iD)())}].hasTrustDialogAccepted in ${(0, import_chunk_c203g5kd.DB)()}`;
      if ((0, import_chunk_k449cc64.He)(e, `headersHelper not run: ${T}; ${O}.`), (0, import_chunk_f9x2f6cx.Se)() && (0, import_chunk_gbskgz33.hcn)(`mcp headersHelper ${e}`)) (0, import_chunk_ndrgvsn7.$E)(`MCP server '${(0, import_chunk_kx2fp6pc.Yn)(e)}': headersHelper not run \u2014 ${T}; ${O}.
`);
      return (0, import_chunk_y53wbr8a.a)("tengu_mcp_headersHelper_missing_trust", {}), (0, import_chunk_cqa9hrgx.l)("mcp_headers_helper", "missing_trust"), null;
    }
    throw (0, import_chunk_cqa9hrgx.m)("mcp_headers_helper", k.reason), Error(At(e, k.reason));
  } catch (i) {
    return (0, import_chunk_k449cc64.id)(e, `Error getting headers from headersHelper: ${(0, import_chunk_jv7av99m.d)(i)}`), (0, import_chunk_w578pjby.t)(`Error getting MCP headers from headersHelper for server '${e}': ${(0, import_chunk_jv7av99m.d)(i)}`, { level: "error" }), null;
  }
}
function yt(e) {
  let r, o = {}, i = [];
  for (let [h, v] of Object.entries(e ?? {})) {
    if (typeof v === "string" && v.includes("${")) r ??= (0, import_chunk_bzyb60p0.ine)();
    let { expanded: y, missingVars: k } = (0, import_chunk_bzyb60p0.xie)(v, void 0, void 0, { remoteSink: true, blankList: r });
    o[h] = y, i.push(...k);
  }
  return { staticHeaders: o, missingVars: i };
}
function At(e, r) {
  switch (r) {
    case "exec_failed":
      return `headersHelper for MCP server '${e}' did not return a valid value`;
    case "parse_failed":
      return `headersHelper for MCP server '${e}' did not return valid JSON`;
    case "non_object":
      return `headersHelper for MCP server '${e}' must return a JSON object with string key-value pairs`;
    case "non_string_value":
      return `headersHelper for MCP server '${e}' returned a non-string header value`;
  }
}
async function lRn(e, r, o) {
  let { staticHeaders: i, missingVars: h } = (0, import_chunk_q7cfnzfy.U5)(r, () => yt(r.headers));
  if (h.length > 0) (0, import_chunk_k449cc64.He)(e, `Header values reference unset environment variables: ${(0, import_chunk_4smdap7r.M)(h).join(", ")}`);
  let v = await kt(e, r);
  if (r.headersHelper && v === null) o?.();
  let y = { ...i, ...v };
  if ((0, import_chunk_7625rswd.c1n)() && ((0, import_chunk_7625rswd.u1n)() || URL.parse(r.url)?.hostname === import_chunk_0zqda2sj.gan.host) && !Object.keys(y).some((k) => k.toLowerCase() === import_chunk_0zqda2sj.gan.name.toLowerCase())) y[import_chunk_0zqda2sj.gan.name] = import_chunk_0zqda2sj.gan.value;
  return y;
}
function ie(e, r, o, i = false) {
  let h;
  return async (v, y) => {
    let k = (y?.method ?? "GET").toUpperCase() === "GET", g = v;
    for (let T = 0; ; T++) {
      if (!Ue(r, g)) return await o(g, y);
      h ??= Ve(e, r, i);
      let O = new Headers(await h);
      if (!i) ge(e, r, Object.fromEntries(O), String(g));
      new Headers(y?.headers).forEach((E, F) => O.set(F, E));
      let C = await o(g, { ...y, headers: O, redirect: "manual" }), R = C.headers.get("location");
      if (!(C.status >= 300 && C.status < 400) || !R || T === import_chunk_fkbh0xha.ERn) return C;
      let I = new URL(R, g);
      if (!(k ? I.protocol === "https:" || I.protocol === "http:" : (C.status === 307 || C.status === 308) && Ue(r, I))) return C;
      g = I;
    }
  };
}
async function We(e, r, o) {
  if ((0, import_chunk_sjqze7qg.KHn)()?.isHelperJudgedBeforeSignIn(e, r)) ge(e, r, await lRn(e, r)), o?.throwIfAborted();
}
async function Ke(e, r, o) {
  return Ue(r, o) ? Object.fromEntries(await Ve(e, r, true)) : {};
}
function Ge(e, { mayMoveToHttps: r }) {
  let o = r ? import_chunk_fkbh0xha.zor : import_chunk_akwvpp7y.a2;
  return { beforeRedirect: (i) => {
    if (!o((0, import_chunk_akwvpp7y.Koe)(i), e)) throw (0, import_chunk_cqa9hrgx.m)("mcp_oauth_redirect_guard", "not_same_origin"), Error("Refused a redirect to another origin");
  }, adapter: "http" };
}
function Ue(e, r) {
  return (!!e.headers || !!e.headersHelper) && (0, import_chunk_akwvpp7y.a2)(String(r), e.url);
}
async function Ve(e, r, o) {
  let i = await lRn(e, r);
  if (!o) ge(e, r, i);
  let h = new Headers();
  for (let [v, y] of Object.entries(i)) h.set(v, y);
  return h.delete("authorization"), (0, import_chunk_yrpmp1hk.fRn)(r.headers, Object.fromEntries(h)), h;
}
function qe(e, r) {
  let o = typeof e.pluginSource === "string" ? e.pluginSource : void 0;
  return { scope: (0, import_chunk_78g0060s.fe)((0, import_chunk_xcgcdx61.BHr)().safeParse(e.scope).data), isPlugin: e.pluginSource !== void 0, plugin_marketplace_kind: (0, import_chunk_78g0060s.fe)(o === void 0 ? void 0 : (0, import_chunk_xcgcdx61.Iw)(o) ?? ((0, import_chunk_xcgcdx61.is)(o) === import_chunk_xcgcdx61.Ds ? "builtin" : "marketplace")), has_config_client_id: Boolean(e.oauth?.clientId), redirect_kind: (0, import_chunk_78g0060s.f)(r ? "custom" : "loopback") };
}
(0, import_chunk_adx6804h.B)();
var wt = 3e4, Tt = "urn:ietf:params:oauth:grant-type:token-exchange", Ye = "urn:ietf:params:oauth:grant-type:jwt-bearer", Je = "urn:ietf:params:oauth:token-type:id-jag", Ct = "urn:ietf:params:oauth:token-type:id_token";
function Qe(e, r) {
  let o = (0, import_chunk_fkbh0xha.mJt)((i, h) => (r?.() ?? fetch)(i, h));
  return async (i, h) => {
    let v = AbortSignal.timeout(wt), y = e ? AbortSignal.any([v, e]) : v, k = { ...h, ...(0, import_chunk_3jjr3wje.wl)({ url: String(i) }), signal: y };
    try {
      return await o(i, k);
    } catch (g) {
      (0, import_chunk_jbjjrhxt.ent)(g, i);
    }
  };
}
var ve = Qe();
function oe(e) {
  try {
    return new URL(e).href.replace(/\/$/, "");
  } catch {
    return e.replace(/\/$/, "");
  }
}
class Z extends Error {
  shouldClearIdToken;
  constructor(e, r) {
    super(e);
    this.name = "XaaTokenExchangeError", this.shouldClearIdToken = r;
  }
}
var Ot = /"(access_token|refresh_token|id_token|assertion|subject_token|client_secret)"\s*:\s*"[^"]*"/g;
function ue(e) {
  return (typeof e === "string" ? e : (0, import_chunk_w578pjby._)(e)).replace(Ot, (o, i) => `"${i}":"[REDACTED]"`);
}
var Rt = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ access_token: (0, import_chunk_adx6804h.n)().optional(), issued_token_type: (0, import_chunk_adx6804h.n)().optional(), expires_in: (0, import_chunk_adx6804h.Tft)().optional(), scope: (0, import_chunk_adx6804h.n)().optional() })), Et = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ access_token: (0, import_chunk_adx6804h.n)().min(1), token_type: (0, import_chunk_adx6804h.n)().default("Bearer"), expires_in: (0, import_chunk_adx6804h.Tft)().optional(), scope: (0, import_chunk_adx6804h.n)().optional(), refresh_token: (0, import_chunk_adx6804h.n)().optional() }));
async function Ut(e, r) {
  let o;
  try {
    o = await (0, import_chunk_racn22qq.q9o)(e, void 0, r?.fetchFn ?? ve);
  } catch (i) {
    if ((0, import_chunk_jv7av99m.Fe)(i) || (0, import_chunk_3fqcfedz.OMe)(i)) throw i;
    let h = i instanceof Error ? /^HTTP (\d{3}) /.exec(i.message)?.[1] : void 0;
    throw Error(`XAA: PRM discovery failed for ${(0, import_chunk_jbjjrhxt.bu)(e)} (${h ? `HTTP ${h}` : i instanceof Error ? i.name : typeof i})`);
  }
  if (!o.resource || !o.authorization_servers?.[0]) throw Error("XAA: PRM discovery failed: PRM missing resource or authorization_servers");
  if (oe(o.resource) !== oe(e)) throw Error(`XAA: PRM discovery failed: PRM resource mismatch: expected ${(0, import_chunk_jbjjrhxt.bu)(e)}, got ${(0, import_chunk_jbjjrhxt.bu)(o.resource)}`);
  return { resource: o.resource, authorization_servers: o.authorization_servers };
}
async function Mt(e, r) {
  let o;
  try {
    o = await (0, import_chunk_racn22qq.yRn)(e, { fetchFn: r?.fetchFn ?? ve, skipIssuerValidation: true });
  } catch (i) {
    if ((0, import_chunk_jv7av99m.Fe)(i) || (0, import_chunk_3fqcfedz.OMe)(i)) throw i;
    let h = i instanceof Error ? /^HTTP (\d{3}) /.exec(i.message)?.[1] : void 0;
    throw new import_chunk_jv7av99m.A(`XAA: AS metadata discovery failed (${h ? `HTTP ${h}` : i instanceof Error ? i.name : typeof i})`, "XAA: AS metadata discovery failed");
  }
  if (!o?.issuer || !o.token_endpoint) throw Error(`XAA: AS metadata discovery failed: no valid metadata at ${(0, import_chunk_jbjjrhxt.bu)(e)}`);
  if (oe(o.issuer) !== oe(e)) throw Error(`XAA: AS metadata discovery failed: issuer mismatch: expected ${(0, import_chunk_jbjjrhxt.bu)(e)}, got ${(0, import_chunk_jbjjrhxt.bu)(o.issuer)}`);
  if (!URL.canParse(o.token_endpoint) || new URL(o.token_endpoint).protocol !== "https:") throw Error(`XAA: refusing non-HTTPS token endpoint: ${(0, import_chunk_jbjjrhxt.bu)(o.token_endpoint)}`);
  return { issuer: o.issuer, token_endpoint: o.token_endpoint, grant_types_supported: o.grant_types_supported, token_endpoint_auth_methods_supported: o.token_endpoint_auth_methods_supported };
}
async function bt(e) {
  let r = e.fetchFn ?? ve, o = new URLSearchParams({ grant_type: Tt, requested_token_type: Je, audience: e.audience, resource: e.resource, subject_token: e.idToken, subject_token_type: Ct, client_id: e.clientId });
  if (e.clientSecret) o.set("client_secret", e.clientSecret);
  let i = await r(e.tokenEndpoint, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: o });
  if (!i.ok) {
    let k = ue(await i.text()).slice(0, 200), g = i.status < 500;
    throw new Z(`XAA: token exchange failed: HTTP ${i.status}: ${k}`, g);
  }
  let h;
  try {
    h = await i.json();
  } catch {
    throw new Z(`XAA: token exchange returned non-JSON (captive portal?) at ${(0, import_chunk_jbjjrhxt.bu)(e.tokenEndpoint)}`, false);
  }
  let v = Rt().safeParse(h);
  if (!v.success) throw new Z(`XAA: token exchange response did not match expected shape: ${ue(h)}`, true);
  let y = v.data;
  if (!y.access_token) throw new Z(`XAA: token exchange response missing access_token: ${ue(y)}`, true);
  if (y.issued_token_type !== Je) throw new Z(`XAA: token exchange returned unexpected issued_token_type: ${y.issued_token_type}`, true);
  return { jwtAuthGrant: y.access_token, expiresIn: y.expires_in, scope: y.scope };
}
async function It(e) {
  let r = e.fetchFn ?? ve, o = e.authMethod ?? "client_secret_basic", i = new URLSearchParams({ grant_type: Ye, assertion: e.assertion }), h = { "Content-Type": "application/x-www-form-urlencoded" };
  if (o === "client_secret_basic") {
    let g = Buffer.from(`${encodeURIComponent(e.clientId)}:${encodeURIComponent(e.clientSecret)}`).toString("base64");
    h.Authorization = `Basic ${g}`, (0, import_chunk_rwc528c4.KD)().record(g);
  } else i.set("client_id", e.clientId), i.set("client_secret", e.clientSecret);
  (0, import_chunk_rwc528c4.KD)().record(e.clientSecret), (0, import_chunk_rwc528c4.KD)().record(e.assertion);
  let v = await r(e.tokenEndpoint, { method: "POST", headers: h, body: i });
  if (!v.ok) {
    let g = ue(await v.text()).slice(0, 200);
    throw Error(`XAA: jwt-bearer grant failed: HTTP ${v.status}: ${g}`);
  }
  let y;
  try {
    y = await v.json();
  } catch {
    throw Error(`XAA: jwt-bearer grant returned non-JSON (captive portal?) at ${(0, import_chunk_jbjjrhxt.bu)(e.tokenEndpoint)}`);
  }
  let k = Et().safeParse(y);
  if (!k.success) throw Error(`XAA: jwt-bearer response did not match expected shape: ${ue(y)}`);
  return k.data;
}
async function Me(e, r, o = "xaa", i) {
  let h = Qe(i, r.runtimeFetch);
  (0, import_chunk_k449cc64.He)(o, `XAA: discovering PRM for ${(0, import_chunk_jbjjrhxt.bu)(e)}`);
  let v = await Ut(e, { fetchFn: h });
  (0, import_chunk_k449cc64.He)(o, `XAA: discovered resource=${(0, import_chunk_jbjjrhxt.bu)(v.resource)} ASes=[${v.authorization_servers.map(import_chunk_jbjjrhxt.bu).join(", ")}]`);
  let y = r.pinnedAuthorizationServer, k = y === void 0 ? v.authorization_servers : v.authorization_servers.filter((I) => oe(I) === oe(y));
  if (y !== void 0 && k.length === 0) throw new import_chunk_jv7av99m.A(`XAA: authorization server changed: signed in with ${(0, import_chunk_jbjjrhxt.bu)(y)}, server now names [${v.authorization_servers.map(import_chunk_jbjjrhxt.bu).join(", ")}]. If this move is expected, run \`claude mcp remove\` for this server and add it again with its client secret.`, "XAA: authorization server changed");
  let g, T = [];
  for (let I of k) {
    let U;
    try {
      U = await Mt(I, { fetchFn: h });
    } catch (E) {
      if (i?.aborted || (0, import_chunk_3fqcfedz.OMe)(E)) throw E;
      T.push(`${(0, import_chunk_jbjjrhxt.bu)(I)}: ${E instanceof Error ? E.message : String(E)}`);
      continue;
    }
    if (U.grant_types_supported && !U.grant_types_supported.includes(Ye)) {
      T.push(`${(0, import_chunk_jbjjrhxt.bu)(I)}: does not advertise jwt-bearer grant (supported: ${U.grant_types_supported.join(", ")})`);
      continue;
    }
    g = U;
    break;
  }
  if (!g) throw new import_chunk_jv7av99m.A(`XAA: no authorization server supports jwt-bearer. Tried: ${T.join("; ")}`, `XAA: no authorization server supports jwt-bearer (tried ${k.length})`);
  let O = g.token_endpoint_auth_methods_supported, C = O && !O.includes("client_secret_basic") && O.includes("client_secret_post") ? "client_secret_post" : "client_secret_basic";
  (0, import_chunk_k449cc64.He)(o, `XAA: AS issuer=${(0, import_chunk_jbjjrhxt.bu)(g.issuer)} token_endpoint=${(0, import_chunk_jbjjrhxt.bu)(g.token_endpoint)} auth_method=${C}`), (0, import_chunk_k449cc64.He)(o, "XAA: exchanging id_token for ID-JAG at IdP");
  let R = await bt({ tokenEndpoint: r.idpTokenEndpoint, audience: g.issuer, resource: v.resource, idToken: r.idpIdToken, clientId: r.idpClientId, clientSecret: r.idpClientSecret, fetchFn: h });
  (0, import_chunk_k449cc64.He)(o, "XAA: ID-JAG obtained"), (0, import_chunk_k449cc64.He)(o, "XAA: exchanging ID-JAG for access_token at AS");
  let P = await It({ tokenEndpoint: g.token_endpoint, assertion: R.jwtAuthGrant, clientId: r.clientId, clientSecret: r.clientSecret, authMethod: C, fetchFn: h });
  return (0, import_chunk_k449cc64.He)(o, "XAA: access_token obtained"), { ...P, authorizationServerUrl: g.issuer };
}
var Pe = 3e4, Ft = 500, et = 6e5, Lt = /* @__PURE__ */ new Set([...import_chunk_865at33z.roe, ...import_chunk_865at33z.D4, "ETIMEDOUT"]);
function Nt(e) {
  if ((0, import_chunk_jv7av99m.Fe)(e)) return true;
  if (e instanceof Error && e.name === "TimeoutError") return true;
  let r = (0, import_chunk_865at33z.rh)(e);
  return r !== null && Lt.has(r.code);
}
function xe(e) {
  let r = e;
  return (r?.name === "ZodError" || r?.name === "$ZodError") && Array.isArray(r?.issues);
}
var tt = new Set(Object.values(import_chunk_racn22qq.DY)), zt = ["authorization_pending", "expired_token", "slow_down"], Ht = [...Object.values(import_chunk_racn22qq.DY), ...zt];
function Czl(e) {
  let r = Ht.find((o) => o === e);
  return (0, import_chunk_78g0060s.fe)(r) ?? (0, import_chunk_78g0060s.S)("other");
}
function Azl(e, r) {
  let o = r instanceof Error ? `${e}
${r.message}` : e;
  if (r instanceof Sie) return "issuer_echo_denied";
  if (r instanceof import_chunk_racn22qq.n4e) return r.kind === "metadata" ? "issuer_echo_mismatch" : "issuer_response_mismatch";
  if (r instanceof import_chunk_racn22qq.K9o) return "dcr_rejected";
  if (o.includes("dynamic client registration") || r instanceof import_chunk_racn22qq.bie && r.code === "invalid_client_metadata") return "dcr_failed";
  if (o.includes("trying to load") && o.includes("metadata") || o.includes("Incompatible auth server")) return "discovery_failed";
  if (r instanceof import_chunk_racn22qq.bie) return "dcr_rejected";
  if (o.includes("Issuer mismatch in authorization server metadata")) return "issuer_echo_mismatch";
  if (o.includes("Issuer mismatch in authorization response")) return "issuer_response_mismatch";
  let i = (0, import_chunk_jv7av99m.w)(r) ?? (0, import_chunk_jv7av99m.w)(r instanceof Error ? r.cause : void 0);
  if (i && import_chunk_yz5b8aaa.COr.has(i)) return "network_failed";
  return "sdk_auth_failed";
}
var be = 5;
function H$a(e) {
  return (0, import_chunk_jbjjrhxt.bu)(e.origin + e.pathname) + (0, import_chunk_jbjjrhxt.iBa)(e);
}
var jt = /* @__PURE__ */ new Set(["invalid_refresh_token", "expired_refresh_token", "token_expired"]);
async function D$a(e) {
  if (!e.ok) return e;
  let r = await e.text(), o;
  try {
    o = (0, import_chunk_w578pjby.te)(r);
  } catch {
    return new Response(r, e);
  }
  if (import_chunk_racn22qq.cJt.safeParse(o).success) return new Response(r, e);
  let i = import_chunk_racn22qq.uJt.safeParse(o);
  if (!i.success) return new Response(r, e);
  let h = jt.has(i.data.error) ? { error: "invalid_grant", error_description: i.data.error_description ?? `Server returned non-standard error code: ${i.data.error}` } : i.data;
  return new Response((0, import_chunk_w578pjby._)(h), { status: 400, statusText: "Bad Request", headers: e.headers });
}
function vYr(e) {
  return (0, import_chunk_3fqcfedz.voi)(async (r, o) => {
    try {
      return await rt(e, r, o);
    } catch (i) {
      if (o?.signal?.aborted || !Nt(i)) throw i;
      return await (0, import_chunk_5appeerh.K)(Ft, o?.signal ?? void 0), await rt(e, r, o);
    }
  }, e.url);
}
async function rt(e, r, o) {
  let i = (0, import_chunk_3fqcfedz.qYr)(e, fetch), h = (0, import_chunk_fkbh0xha.mJt)((C, R) => (i ?? fetch)(C, R)), v = AbortSignal.timeout(Pe), y = o?.method?.toUpperCase() === "POST", k = (0, import_chunk_3jjr3wje.wl)({ url: String(r) });
  if (!o?.signal) {
    let C;
    try {
      C = await h(r, { ...o, ...k, signal: v });
    } catch (R) {
      (0, import_chunk_jbjjrhxt.ent)(R, r);
    }
    return y ? D$a(C) : C;
  }
  let g = new AbortController(), T = () => g.abort();
  o.signal.addEventListener("abort", T), v.addEventListener("abort", T);
  let O = () => {
    o.signal?.removeEventListener("abort", T), v.removeEventListener("abort", T);
  };
  if (o.signal.aborted) g.abort();
  try {
    let C = await h(r, { ...o, ...k, signal: g.signal });
    return O(), y ? D$a(C) : C;
  } catch (C) {
    O(), (0, import_chunk_jbjjrhxt.ent)(C, r);
  }
}
async function ye(e, r, o) {
  let { configuredMetadataUrl: i, fetchFn: h, resourceMetadataUrl: v, serverConfigForAnalytics: y } = o;
  if (i) {
    if (!i.startsWith("https://")) throw Error(`authServerMetadataUrl must use https:// (got: ${(0, import_chunk_jbjjrhxt.bu)(i)})`);
    let g = await h(i, { headers: { Accept: "application/json" } });
    if (g.ok) {
      let T;
      try {
        T = await g.json();
      } catch {
        throw Error(`Configured auth server metadata at ${(0, import_chunk_jbjjrhxt.bu)(i)} is not valid JSON`);
      }
      return import_chunk_racn22qq.dJt.parse(T);
    }
    throw Error(`HTTP ${g.status} fetching configured auth server metadata from ${(0, import_chunk_jbjjrhxt.bu)(i)}`);
  }
  try {
    let { authorizationServerUrl: g, authorizationServerMetadata: T } = await (0, import_chunk_racn22qq.Y9o)(r, { fetchFn: h, ...v && { resourceMetadataUrl: v }, skipIssuerMetadataValidation: true });
    if (T) return TYr({ serverName: e, site: "rfc9728_chain", expectedIssuer: g, receivedIssuer: T.issuer, serverConfig: y }), T;
  } catch (g) {
    if ((0, import_chunk_3fqcfedz.OMe)(g)) throw g;
    if (g instanceof Sie) throw g;
    (0, import_chunk_k449cc64.He)(e, `RFC 9728 discovery failed, falling back: ${(0, import_chunk_jbjjrhxt.Ztt)(g, r)}`);
  }
  let k = new URL(r);
  if (k.pathname === "/") return;
  try {
    let g = await (0, import_chunk_racn22qq.yRn)(k, { fetchFn: h, skipIssuerValidation: true });
    if (g) TYr({ serverName: e, site: "legacy_path_fallback", expectedIssuer: k.href, receivedIssuer: g.issuer, serverConfig: y });
    return g;
  } catch (g) {
    if (g instanceof Sie) throw g;
    (0, import_chunk_k449cc64.He)(e, `Path-aware auth server discovery failed: ${(0, import_chunk_jbjjrhxt.Ztt)(g, r)}`);
    return;
  }
}
class Sie extends import_chunk_jv7av99m.A {
  expected;
  received;
  constructor(e, r) {
    super(`Issuer echo cross-origin mismatch (RFC 8414 \xA73.3): expected ${(0, import_chunk_w578pjby._)(e)}, received ${(0, import_chunk_w578pjby._)(r)}`, "issuer echo cross-origin mismatch (RFC 8414 \xA73.3)", "issuer_echo_denied");
    this.expected = e;
    this.received = r;
    this.name = "IssuerEchoCrossOriginError";
  }
}
function ke() {
  try {
    return (0, import_chunk_865at33z.b)("tengu_mcp_issuer_strict_echo", false) === true;
  } catch {
    return false;
  }
}
function Bt(e, r) {
  return r === e || e.endsWith("/") && r === e.slice(0, -1);
}
function Ae(e) {
  try {
    let r = new URL(e);
    if ((r.protocol === "https:" || r.protocol === "http:") && r.origin !== "null") return r;
  } catch {
  }
  return;
}
function Xt(e, r) {
  let o = Ae(e), i = Ae(r);
  if (!o || !i) return "unparseable";
  if (o.username !== "" || o.password !== "" || i.username !== "" || i.password !== "" || i.search !== "" || i.hash !== "") return "cross_origin";
  return o.origin === i.origin ? "same_origin" : "cross_origin";
}
function Wt(e, r) {
  let o = Ae(e), i = Ae(r);
  if (!o || !i) return [];
  let h = [];
  if (o.protocol !== i.protocol) h.push("scheme");
  if (o.username !== i.username || o.password !== i.password) h.push("userinfo");
  if (o.hostname !== i.hostname) h.push("host");
  if (o.port !== i.port) h.push("port");
  if (o.pathname !== i.pathname) h.push("path");
  if (o.search !== i.search) h.push("query");
  if (o.hash !== i.hash) h.push("fragment");
  if (h.length === 0) h.push("normalization_only");
  return h;
}
function TYr({ serverName: e, site: r, expectedIssuer: o, receivedIssuer: i, serverConfig: h }) {
  if (o === void 0) return;
  if (i !== void 0 && Bt(o, i)) return;
  let v = i === void 0 ? "unparseable" : Xt(o, i), y = ke() ? "enforce" : "observe", k = y === "enforce" && v !== "same_origin";
  try {
    let g = i === void 0 ? ["issuer_missing"] : Wt(o, i), T = h ? (0, import_chunk_bzyb60p0.Nie)(h) : void 0, O = h ? (0, import_chunk_78g0060s.R$)(e, (0, import_chunk_865at33z.ZV)(e, h)) : void 0;
    (0, import_chunk_y53wbr8a.a)("tengu_mcp_oauth_issuer_echo_mismatch", { site: (0, import_chunk_78g0060s.f)(r), mode: (0, import_chunk_78g0060s.f)(y), originRelation: (0, import_chunk_78g0060s.f)(v), outcome: k ? (0, import_chunk_78g0060s.S)("denied") : (0, import_chunk_78g0060s.S)("proceeded"), ...g.length > 0 && { mismatchFacets: (0, import_chunk_78g0060s.sl)(g) }, expectedIssuerHash: (0, import_chunk_myvyhcm0.Zn)(o), ...i !== void 0 && { receivedIssuerHash: (0, import_chunk_myvyhcm0.Zn)(i) }, ...T && { mcpServerBaseUrl: T }, ...O && { mcpServerName: O } });
  } catch (g) {
    try {
      (0, import_chunk_k449cc64.He)(e, `issuer-echo telemetry failed: ${(0, import_chunk_jv7av99m.d)(g)}`);
    } catch {
    }
  }
  if (k) throw new Sie(o, i);
}
class L$a extends import_chunk_racn22qq.YL {
  serverName;
  constructor(e) {
    super("Authentication required; client registration is deferred until the user authenticates");
    this.serverName = e;
    this.name = "McpClientRegistrationDeferredError";
  }
}
class dRn extends Error {
  constructor() {
    super("Authentication was cancelled");
    this.name = "AuthenticationCancelledError";
  }
}
function $e(e) {
  try {
    let r = new URL(e);
    return `${r.protocol}//${r.hostname}`;
  } catch {
    return e;
  }
}
function ot(e) {
  let r = $e(e);
  return r === "http://127.0.0.1" || r === "http://localhost";
}
function nt(e) {
  if (!e?.clientId || !e.redirectUri || !ot(e.redirectUri)) return;
  let r = Number(new URL(e.redirectUri).port);
  return r && e.redirectUri.replace("//127.0.0.1:", "//localhost:") === (0, import_chunk_r64qzndq.j9o)(r) ? r : void 0;
}
function at() {
  return import_chunk_c203g5kd.s.MCP_OAUTH_CLIENT_METADATA_URL || import_chunk_ephf358x.I0o;
}
function Ie(e) {
  if (!ot(e)) return false;
  try {
    return new URL(e).pathname === "/callback";
  } catch {
    return false;
  }
}
function Kt(e) {
  return e !== void 0 && (e === import_chunk_ephf358x.I0o || e === at());
}
function ZXl(e) {
  return (0, import_chunk_qdcbcsg7.mt)().oauthCallbackSubmitters.get(e);
}
function eJl(e, r) {
  let o = (0, import_chunk_qdcbcsg7.mt)().activeOAuthFlows;
  o.set(e, r), r.finally(() => {
    if (o.get(e) === r) o.delete(e);
  }).catch(() => {
  });
}
function tJl(e) {
  return (0, import_chunk_qdcbcsg7.mt)().activeOAuthFlows.get(e);
}
async function $9o(e, r) {
  let o = (0, import_chunk_yz5b8aaa.kc)(e, r), i = (await (0, import_chunk_zzrn5zap.Er)().readAsync())?.mcpOAuth?.[o];
  if (!i || (0, import_chunk_qdcbcsg7.$Oo)(e) || i.accessToken || i.refreshToken || (0, import_chunk_271xsh6x.UBt)(i.discoveryState)) return;
  try {
    await (0, import_chunk_zzrn5zap.Er)().mutate((h) => {
      let v = h.mcpOAuth?.[o];
      if (!v || v.accessToken || v.refreshToken || (0, import_chunk_271xsh6x.UBt)(v.discoveryState)) return h;
      let y = { ...h.mcpOAuth };
      return delete y[o], { ...h, mcpOAuth: y };
    });
  } catch (h) {
    (0, import_chunk_k449cc64.He)(e, `clear tokenless stub failed: ${(0, import_chunk_jv7av99m.d)(h)}`);
  }
}
async function st({ serverName: e, endpoint: r, token: o, tokenTypeHint: i, clientId: h, clientSecret: v, accessToken: y, authMethod: k = "client_secret_basic", configuredHeaders: g, checkAddress: T }) {
  let O = new URLSearchParams();
  O.set("token", o), O.set("token_type_hint", i);
  let C = { ...g, "Content-Type": "application/x-www-form-urlencoded" }, R = Object.keys(g).length > 0, P = (0, import_chunk_fkbh0xha.Coi)() || R ? Ge(r, { mayMoveToHttps: !R }) : void 0, I = T ? { adapter: "http", beforeRedirect: (U) => {
    P?.beforeRedirect(U), T(U.href ?? "");
  } } : P ?? {};
  if (h && v) if (k === "client_secret_post") O.set("client_id", h), O.set("client_secret", v);
  else {
    let U = Buffer.from(`${encodeURIComponent(h)}:${encodeURIComponent(v)}`).toString("base64");
    C.Authorization = `Basic ${U}`, (0, import_chunk_rwc528c4.KD)().record(U);
  }
  else if (h) O.set("client_id", h);
  else (0, import_chunk_k449cc64.He)(e, `No client_id available for ${i} revocation - server may reject`);
  try {
    T?.(r), await import_chunk_3jjr3wje.bn.post(r, O, { headers: C, ...I, timeout: Pe }), (0, import_chunk_k449cc64.He)(e, `Successfully revoked ${i}`);
  } catch (U) {
    if (import_chunk_3jjr3wje.bn.isAxiosError(U) && U.response?.status === 401 && y) (0, import_chunk_k449cc64.He)(e, `Got 401, retrying ${i} revocation with Bearer auth`), O.delete("client_id"), O.delete("client_secret"), T?.(r), await import_chunk_3jjr3wje.bn.post(r, O, { headers: { ...C, Authorization: `Bearer ${y}` }, ...I, timeout: Pe }), (0, import_chunk_k449cc64.He)(e, `Successfully revoked ${i} with Bearer auth`);
    else throw U;
  }
}
async function nJl(e, r) {
  let i = (await (0, import_chunk_zzrn5zap.Er)().readAsync())?.mcpOAuth?.[(0, import_chunk_yz5b8aaa.kc)(e, r)];
  if (!i?.accessToken && !i?.refreshToken) return;
  return { accessToken: i.accessToken || void 0, refreshToken: i.refreshToken, clientId: i.clientId, clientSecret: i.clientSecret, ...i.discoveryState && { discoveryState: (0, import_chunk_271xsh6x.Vho)(i.discoveryState) } };
}
async function ct(e, r, o) {
  let i = (0, import_chunk_rwc528c4.KD)();
  i.record(o.accessToken), i.record(o.refreshToken), i.record(o.clientSecret);
  let h;
  try {
    await Ee(e, r);
    let v = o.discoveryState?.authorizationServerUrl ?? r.url, y = await ye(e, v, { configuredMetadataUrl: (0, import_chunk_271xsh6x.UBt)(o.discoveryState) ? void 0 : r.oauth?.authServerMetadataUrl, fetchFn: ie(e, r, vYr(r), true), serverConfigForAnalytics: r });
    if (!y) (0, import_chunk_k449cc64.He)(e, "No OAuth metadata found"), h = "no_metadata";
    else {
      let k = "revocation_endpoint" in y ? y.revocation_endpoint : null;
      if (!k) (0, import_chunk_k449cc64.He)(e, "Server does not support token revocation"), h = "no_revocation_endpoint";
      else if (!(0, import_chunk_fkbh0xha.vRn)(String(k))) (0, import_chunk_k449cc64.He)(e, "The revocation endpoint is not http(s), so no token is revoked there"), (0, import_chunk_cqa9hrgx.m)("mcp_oauth_redirect_guard", "not_web_address"), h = "revocation_endpoint_not_web";
      else {
        let g = String(k), T = await Ke(e, r, g), O = ("revocation_endpoint_auth_methods_supported" in y ? y.revocation_endpoint_auth_methods_supported : void 0) ?? ("token_endpoint_auth_methods_supported" in y ? y.token_endpoint_auth_methods_supported : void 0), C = O && !O.includes("client_secret_basic") && O.includes("client_secret_post") ? "client_secret_post" : "client_secret_basic";
        if ((0, import_chunk_k449cc64.He)(e, `Revoking tokens via ${(0, import_chunk_jbjjrhxt.bu)(g)} (${C})`), o.refreshToken) try {
          await st({ serverName: e, endpoint: g, token: o.refreshToken, tokenTypeHint: "refresh_token", clientId: o.clientId, clientSecret: o.clientSecret, accessToken: o.accessToken, authMethod: C, configuredHeaders: T, checkAddress: (0, import_chunk_3fqcfedz.r8o)(r) });
        } catch (R) {
          (0, import_chunk_k449cc64.He)(e, `Failed to revoke refresh token: ${(0, import_chunk_jv7av99m.d)(R)}`), h = "server_revoke_failed";
        }
        if (o.accessToken) try {
          await st({ serverName: e, endpoint: g, token: o.accessToken, tokenTypeHint: "access_token", clientId: o.clientId, clientSecret: o.clientSecret, accessToken: o.accessToken, authMethod: C, configuredHeaders: T, checkAddress: (0, import_chunk_3fqcfedz.r8o)(r) });
        } catch (R) {
          (0, import_chunk_k449cc64.He)(e, `Failed to revoke access token: ${(0, import_chunk_jv7av99m.d)(R)}`), h = "server_revoke_failed";
        }
      }
    }
  } catch (v) {
    (0, import_chunk_k449cc64.He)(e, `Failed to revoke tokens: ${(0, import_chunk_jv7av99m.d)(v)}`), h = v instanceof Sie ? "issuer_echo_denied" : "server_revoke_failed";
  }
  return h;
}
async function rJl(e, r, o) {
  let i;
  try {
    let h = (await (0, import_chunk_zzrn5zap.Er)().readAsync())?.mcpOAuth?.[(0, import_chunk_yz5b8aaa.kc)(e, r)], v = { ...o, accessToken: o.accessToken && o.accessToken !== h?.accessToken ? o.accessToken : void 0, refreshToken: o.refreshToken && o.refreshToken !== h?.refreshToken ? o.refreshToken : void 0 };
    if (!v.accessToken && !v.refreshToken) {
      (0, import_chunk_k449cc64.He)(e, "No replaced tokens to revoke"), (0, import_chunk_cqa9hrgx.u)("mcp_oauth_revoke");
      return;
    }
    i = await ct(e, r, v);
  } catch (h) {
    (0, import_chunk_k449cc64.He)(e, `Failed to revoke replaced tokens: ${(0, import_chunk_jv7av99m.d)(h)}`), i = "server_revoke_failed";
  }
  if (i) (0, import_chunk_cqa9hrgx.l)("mcp_oauth_revoke", i);
  else (0, import_chunk_cqa9hrgx.u)("mcp_oauth_revoke");
}
async function oJl(e, r, { preserveStepUpState: o = false } = {}) {
  var _stack = [];
  try {
    let i = (0, import_chunk_yz5b8aaa.kc)(e, r);
    const h = __using(_stack, await (0, import_chunk_kj84g0v7.W$a)(e, i), true);
    (0, import_chunk_hazyxdac.GPe)();
    const v = __using(_stack, (0, import_chunk_kj84g0v7.Vri)(i));
    let y = (0, import_chunk_zzrn5zap.Er)(), k = await (0, import_chunk_yz5b8aaa.oB)();
    if (k === import_chunk_zzrn5zap.bs) return (0, import_chunk_k449cc64.He)(e, "Could not read the credential store to clear tokens"), (0, import_chunk_cqa9hrgx.m)("mcp_oauth_revoke", "local_read_failed"), { cleared: false, reason: "credential_store_failed" };
    let g = k?.mcpOAuth?.[i], T;
    if (g?.accessToken || g?.refreshToken) T = await ct(e, r, { accessToken: g.accessToken || void 0, refreshToken: g.refreshToken, clientId: g.clientId, clientSecret: g.clientSecret, ...g.discoveryState && { discoveryState: (0, import_chunk_271xsh6x.Vho)(g.discoveryState) } });
    else (0, import_chunk_k449cc64.He)(e, "No tokens to revoke");
    let O = false;
    try {
      if (o && g && (g.stepUpScope || g.discoveryState || g.clientId)) {
        let C = await y.mutate((R) => {
          let P = R.mcpOAuth?.[i];
          if (P?.accessToken !== g.accessToken || P?.clientId !== g.clientId) return R;
          return { ...R, mcpOAuth: { ...R.mcpOAuth, [i]: { serverName: e, serverUrl: r.url, accessToken: "", refreshToken: void 0, expiresAt: void 0, ...g.clientId && { clientId: g.clientId, ...!r.oauth?.clientId && { issuer: P?.issuer }, ...g.redirectUri && { redirectUri: g.redirectUri }, ...g.clientSecret !== void 0 && { clientSecret: g.clientSecret } }, ...g.stepUpScope && { stepUpScope: g.stepUpScope }, ...g.discoveryState && { discoveryState: { ...(0, import_chunk_271xsh6x.Vho)(g.discoveryState), resourceMetadataUrl: g.discoveryState.resourceMetadataUrl, tokenlessRejectedAt: g.discoveryState.tokenlessRejectedAt } } } } };
        });
        O = C.success, (0, import_chunk_k449cc64.He)(e, C.success ? "Preserved step-up auth state across revocation" : `clear local tokens failed: ${C.warning ?? "storage write failed"}`);
      } else if (o) O = (await N$a(e, r)).success;
      else {
        let C = await (0, import_chunk_aj8wb2xh.B0l)(y, (R) => {
          if (!R.mcpOAuth?.[i]) return R;
          let { [i]: P, ...I } = R.mcpOAuth;
          return { ...R, mcpOAuth: I };
        }, (R) => !!R.mcpOAuth?.[i]);
        if (!C.confirmed && C.reason === "keychain_unreadable") return (0, import_chunk_k449cc64.He)(e, "Could not read the keychain to clear tokens"), (0, import_chunk_cqa9hrgx.m)("mcp_oauth_revoke", "keychain_unreadable"), { cleared: false, reason: "keychain_unreadable" };
        O = C.confirmed;
      }
    } catch (C) {
      (0, import_chunk_k449cc64.He)(e, `clear local tokens failed: ${(0, import_chunk_jv7av99m.d)(C)}`);
    }
    if (!O) T ??= "local_clear_failed";
    if ((0, import_chunk_yrpmp1hk.xMe)(e), T) (0, import_chunk_cqa9hrgx.l)("mcp_oauth_revoke", T);
    else (0, import_chunk_cqa9hrgx.u)("mcp_oauth_revoke");
    return O ? { cleared: true } : { cleared: false, reason: "credential_store_failed" };
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    var _promise = __callDispose(_stack, _error, _hasError);
    _promise && await _promise;
  }
}
async function N$a(e, r, o) {
  var _stack = [];
  try {
    let i = (0, import_chunk_yz5b8aaa.kc)(e, r), h;
    const v = __using(_stack, (0, import_chunk_kj84g0v7.Vri)(i));
    let y = await (0, import_chunk_zzrn5zap.Er)().mutate((k) => {
      let g = k.mcpOAuth?.[i];
      if (!g) return k;
      let T = { ...k.mcpOAuth };
      if (g.clientId && o?.preserveClientRegistration?.(g)) {
        if (!g.accessToken && !g.refreshToken) return k;
        T[i] = { ...g, accessToken: "", refreshToken: void 0, expiresAt: 0, scope: void 0 }, h = "tokens";
      } else if (o?.keepXaaPin && (0, import_chunk_271xsh6x.UBt)(g.discoveryState)) T[i] = { serverName: g.serverName, serverUrl: g.serverUrl, accessToken: "", expiresAt: 0, discoveryState: g.discoveryState }, h = "all";
      else delete T[i], h = "all";
      return { ...k, mcpOAuth: T };
    });
    if (h) (0, import_chunk_k449cc64.He)(e, h === "tokens" ? "Cleared stored tokens (preserved client registration)" : "Cleared stored tokens");
    return y;
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
function dt(e, r, o, i) {
  if (o?.success) return;
  let h = i ? "mutate_rejected" : "storage_write_failed", v = i ? (0, import_chunk_jv7av99m.d)(i) : o?.warning ?? "storage write failed";
  (0, import_chunk_k449cc64.He)(e, `Token persist failed: ${v}`);
  let y = (0, import_chunk_bzyb60p0.Nie)(r);
  (0, import_chunk_y53wbr8a.a)("tengu_mcp_oauth_token_persist_failed", { transportType: (0, import_chunk_78g0060s.f)(r.type), ...y && { mcpServerBaseUrl: y }, reason: (0, import_chunk_78g0060s.f)(h) });
}
async function ae(e, r) {
  let o = (0, import_chunk_yz5b8aaa.kc)(e, r), i = await (0, import_chunk_yz5b8aaa.oB)();
  if (i === import_chunk_zzrn5zap.bs || r.oauth?.xaa && !i?.mcpOAuthClientConfig?.[o]) return import_chunk_zzrn5zap.bs;
  return (0, import_chunk_271xsh6x.UBt)(i?.mcpOAuth?.[o]?.discoveryState);
}
async function Gt(e, r, o, i, h) {
  if (!r.oauth?.xaa) throw Error("XAA: oauth.xaa must be set");
  let v = (0, import_chunk_yz5b8aaa.cct)();
  if (!v) throw Error("XAA: no IdP connection configured. Run 'claude mcp xaa setup --issuer <url> --client-id <id> --client-secret' to configure.");
  let y = r.oauth?.clientId;
  if (!y) throw Error(`XAA: server '${e}' needs an AS client_id. Re-add with --client-id.`);
  let g = (await F$a(e, r))?.clientSecret;
  if (!g) {
    let R = (0, import_chunk_yz5b8aaa.kc)(e, r), P = Object.keys((await (0, import_chunk_zzrn5zap.Er)().readAsync())?.mcpOAuthClientConfig ?? {}), I = (0, import_chunk_jbjjrhxt.rsr)(r.headers ?? {});
    throw (0, import_chunk_k449cc64.He)(e, `XAA: secret lookup miss. wanted=${R} have=[${P.join(", ")}] configHeaders=${(0, import_chunk_w578pjby._)(I)}`), Error(`XAA: AS client secret not found for '${e}'. Re-add with --client-secret.`);
  }
  if (await ae(e, r) === import_chunk_zzrn5zap.bs) throw new import_chunk_yz5b8aaa.AAt(e);
  (0, import_chunk_k449cc64.He)(e, "XAA: starting cross-app access flow");
  let T = await (0, import_chunk_z88wr2ke.W9o)(v.issuer), O = await (0, import_chunk_z88wr2ke.DYr)(v.issuer) !== void 0, C = "idp_login";
  try {
    let R;
    try {
      R = await (0, import_chunk_z88wr2ke.ioi)({ idpIssuer: v.issuer, idpClientId: v.clientId, idpClientSecret: T, callbackPort: v.callbackPort, onAuthorizationUrl: o, skipBrowserOpen: h, abortSignal: i });
    } catch (D) {
      if (i?.aborted) throw new dRn();
      throw D;
    }
    C = "discovery";
    let P = await (0, import_chunk_z88wr2ke.LYr)(v.issuer);
    C = "token_exchange", (0, import_chunk_rwc528c4.KD)().record(g);
    let I = await ae(e, r);
    if (I === import_chunk_zzrn5zap.bs) throw new import_chunk_yz5b8aaa.AAt(e);
    let U;
    try {
      U = await Me(r.url, { clientId: y, clientSecret: g, idpClientId: v.clientId, idpClientSecret: T, idpIdToken: R, idpTokenEndpoint: P.token_endpoint, pinnedAuthorizationServer: I, runtimeFetch: () => (0, import_chunk_3fqcfedz.qYr)(r, fetch) }, e, i);
    } catch (D) {
      if (i?.aborted) throw new dRn();
      if ((0, import_chunk_3fqcfedz.OMe)(D)) throw Object.assign(new import_chunk_jv7av99m.A(`SDK auth failed: ${D.message}`, "SDK auth failed"), { cause: D });
      let N = (0, import_chunk_jv7av99m.d)(D);
      if (D instanceof Z) {
        if (D.shouldClearIdToken) await (0, import_chunk_z88wr2ke.B9o)(v.issuer), (0, import_chunk_k449cc64.He)(e, "XAA: cleared cached id_token after token-exchange failure");
      } else if (N.includes("PRM discovery failed") || N.includes("AS metadata discovery failed") || N.includes("no authorization server supports jwt-bearer") || N.includes("authorization server changed")) C = "discovery";
      else if (N.includes("jwt-bearer")) C = "jwt_bearer";
      throw D;
    }
    let E = (0, import_chunk_yz5b8aaa.kc)(e, r), F = (0, import_chunk_rwc528c4.KD)();
    F.record(U.access_token), F.record(U.refresh_token);
    let z, q;
    try {
      z = await (0, import_chunk_zzrn5zap.Er)().mutate((D) => {
        let N = D.mcpOAuth?.[E];
        return { ...D, mcpOAuth: { ...D.mcpOAuth, [E]: { ...N, serverName: e, serverUrl: r.url, accessToken: U.access_token, refreshToken: U.refresh_token ?? N?.refreshToken, expiresAt: U.expires_in != null ? Date.now() + U.expires_in * 1e3 : void 0, scope: U.scope, clientId: y, clientSecret: g, discoveryState: (0, import_chunk_271xsh6x.tDi)({ previous: N?.discoveryState, issuedBy: U.authorizationServerUrl, interactiveSignIn: true }) } } };
      });
    } catch (D) {
      q = D;
    }
    if (z?.success) (0, import_chunk_k449cc64.He)(e, "XAA: tokens saved");
    else dt(e, r, z, q);
    (0, import_chunk_y53wbr8a.a)("tengu_mcp_oauth_flow_success", { authMethod: (0, import_chunk_78g0060s.S)("xaa"), idTokenCacheHit: O }), (0, import_chunk_cqa9hrgx.u)("mcp_oauth_flow");
  } catch (R) {
    if (R instanceof dRn) throw R;
    throw (0, import_chunk_cqa9hrgx.m)("mcp_oauth_flow", "mcp_oauth_xaa_failed"), (0, import_chunk_y53wbr8a.a)("tengu_mcp_oauth_flow_failure", { authMethod: (0, import_chunk_78g0060s.S)("xaa"), xaaFailureStage: (0, import_chunk_78g0060s.f)(C), idTokenCacheHit: O }), R;
  }
}
function it(e) {
  return e === void 0 ? "no issuer" : (0, import_chunk_jbjjrhxt.bu)(e).slice(0, 100);
}
async function zri(e, r, o, i, h) {
  if (!URL.canParse(r.url)) {
    (0, import_chunk_cqa9hrgx.m)("mcp_oauth_flow", "mcp_oauth_no_valid_url");
    let E = "configError" in r && typeof r.configError === "string" ? r.configError : void 0;
    throw new import_chunk_jv7av99m.A(E || "This server's URL is missing or not a valid URL, so sign-in can't start. Fix the URL in its MCP config (or set the environment variable it uses) and try again.", "MCP OAuth refused: no valid server URL");
  }
  try {
    for (let E of h?.declaredEntry ? [r, h.declaredEntry] : [r]) await Ee(e, E, i), await We(e, E, i);
  } catch (E) {
    throw i?.aborted ? new dRn() : E;
  }
  if (h?.redirectUriOnly) (0, import_chunk_e2p0azgz.$$a)(h.redirectUri, r);
  if (r.oauth?.xaa) {
    if (!(0, import_chunk_yz5b8aaa.gee)()) throw Error(`XAA is not enabled (set CLAUDE_CODE_ENABLE_XAA=1). Remove 'oauth.xaa' from server '${e}' to use the standard consent flow.`);
    (0, import_chunk_y53wbr8a.a)("tengu_mcp_oauth_flow_start", { isOAuthFlow: true, authMethod: (0, import_chunk_78g0060s.S)("xaa"), transportType: (0, import_chunk_78g0060s.f)(r.type), ...(0, import_chunk_bzyb60p0.Nie)(r) && { mcpServerBaseUrl: (0, import_chunk_bzyb60p0.Nie)(r) } }), await Gt(e, r, o, i, h?.skipBrowserOpen);
    return;
  }
  let v = (0, import_chunk_zzrn5zap.Er)(), y = (0, import_chunk_yz5b8aaa.kc)(e, r), k = (await v.readAsync())?.mcpOAuth?.[y], g = k?.stepUpScope, T = k?.discoveryState?.resourceMetadataUrl, O = nt(k), C;
  if (T) try {
    C = new URL(T);
  } catch {
    (0, import_chunk_k449cc64.He)(e, `Invalid cached resourceMetadataUrl: ${(0, import_chunk_jbjjrhxt.bu)(T)}`);
  }
  let R = { scope: g, resourceMetadataUrl: C }, P = (0, import_crypto.randomUUID)(), I = qe(r, h?.redirectUri);
  (0, import_chunk_y53wbr8a.a)("tengu_mcp_oauth_flow_start", { flowAttemptId: (0, import_chunk_49zxha55.Ce)(P), isOAuthFlow: true, transportType: (0, import_chunk_78g0060s.f)(r.type), ...I, ...(0, import_chunk_bzyb60p0.Nie)(r) && { mcpServerBaseUrl: (0, import_chunk_bzyb60p0.Nie)(r) } });
  let U = false;
  try {
    let E = r.oauth?.callbackPort, F = !!h?.redirectUri, z = F ? 0 : E ?? await (0, import_chunk_r64qzndq.NYr)(O), q = h?.redirectUri ?? (0, import_chunk_r64qzndq.j9o)(z);
    (0, import_chunk_k449cc64.He)(e, F ? `Using custom redirectUri: ${(0, import_chunk_jbjjrhxt.bu)(q)} (no localhost listener)` : `Using redirect port: ${z}${E ? " (from config)" : O && z === O ? " (reusing registered port)" : ""}`);
    try {
      await N$a(e, r, { preserveClientRegistration: (L) => z === nt(L) || L.redirectUri === q, keepXaaPin: true });
    } catch (L) {
      (0, import_chunk_k449cc64.He)(e, `clear stored credentials failed: ${(0, import_chunk_jv7av99m.d)(L)}`);
    }
    let D = (0, import_chunk_qdcbcsg7.mt)(), N = new AbortController();
    if (!F) D.oauthCallbackListeners.get(z)?.abort(), D.oauthCallbackListeners.set(z, N);
    let J = new cRn(e, r, q, true, o, h?.skipBrowserOpen), he = Boolean(r.oauth?.scopes || r.oauth?.authServerMetadataUrl);
    if (R.scope && !he) J.markStepUpPending(R.scope);
    let we = ie(e, r, vYr(r));
    try {
      let L = await ye(e, r.url, { configuredMetadataUrl: r.oauth?.authServerMetadataUrl, fetchFn: we, resourceMetadataUrl: R.resourceMetadataUrl, serverConfigForAnalytics: r });
      if (L) J.setMetadata(L), (0, import_chunk_k449cc64.He)(e, `Fetched OAuth metadata with scope: ${(0, import_chunk_jbjjrhxt.STe)("scope", ut(L) ?? "") || "NONE"}`);
    } catch (L) {
      if (L instanceof Sie) throw L;
      (0, import_chunk_k449cc64.He)(e, `Failed to fetch OAuth metadata: ${(0, import_chunk_jbjjrhxt.Ztt)(L, r.url)}`);
    }
    let ne = await J.state(), X = null, j = null, W = null, De = null, Q = () => {
      if (X) X.removeAllListeners(), X.on("error", () => {
      }), X.close(), X = null;
      if (j) clearTimeout(j), j = null;
      if (W) i?.removeEventListener("abort", W), N.signal.removeEventListener("abort", W), W = null;
      if (D.oauthCallbackListeners.get(z) === N) D.oauthCallbackListeners.delete(z);
      if (D.oauthCallbackSubmitters.get(e) === De) D.oauthCallbackSubmitters.delete(e);
      (0, import_chunk_k449cc64.He)(e, "MCP OAuth server cleaned up");
    }, { code: Le, iss: ht } = await new Promise((L, pe) => {
      let me = false, ze = (H, G) => {
        if (me) return;
        me = true, L({ code: H, iss: G });
      }, ee = (H) => {
        if (me) return;
        me = true, pe(H);
      };
      if (W = () => {
        Q(), ee(new dRn());
      }, i?.aborted || N.signal.aborted) {
        W();
        return;
      }
      i?.addEventListener("abort", W), N.signal.addEventListener("abort", W);
      {
        let H = (G) => {
          try {
            let V = new URL(G), se = V.searchParams.get("code"), Oe = V.searchParams.get("state"), re = V.searchParams.get("error"), de = (0, import_chunk_r64qzndq.Oor)(V.searchParams.get("iss"));
            if (!se && !re) return false;
            if (Oe !== ne) return (0, import_chunk_k449cc64.He)(e, "Ignoring manual callback URL whose state belongs to a different flow"), false;
            if (re) {
              let _e = V.searchParams.get("error_description") || "";
              return Q(), ee(Error(`OAuth error: ${re} - ${_e}`)), true;
            }
            if (!se) return false;
            return (0, import_chunk_k449cc64.He)(e, "Received auth code via manual callback URL"), Q(), ze(se, de), true;
          } catch {
            return false;
          }
        };
        De = H, D.oauthCallbackSubmitters.set(e, H), h?.onWaitingForCallback?.(H, z, ne);
      }
      let je = async () => {
        try {
          (0, import_chunk_k449cc64.He)(e, "Starting SDK auth"), (0, import_chunk_k449cc64.He)(e, `Server URL: ${(0, import_chunk_jbjjrhxt.bu)(r.url)}`);
          let H = await (0, import_chunk_racn22qq.pJt)(J, { serverUrl: r.url, scope: R.scope, resourceMetadataUrl: R.resourceMetadataUrl, fetchFn: we, skipIssuerMetadataValidation: true });
          if ((0, import_chunk_k449cc64.He)(e, `Initial auth result: ${H}`), H !== "REDIRECT") (0, import_chunk_k449cc64.He)(e, `Unexpected auth result, expected REDIRECT: ${H}`);
        } catch (H) {
          (0, import_chunk_k449cc64.He)(e, `SDK auth error: ${(0, import_chunk_jbjjrhxt.Ztt)(H, r.url)}`), Q(), ee(Object.assign(new import_chunk_jv7av99m.A(`SDK auth failed: ${(0, import_chunk_jbjjrhxt.Ztt)(H, r.url)}`, "SDK auth failed"), { cause: H }));
        }
      };
      if (F) je();
      else X = (0, import_http.createServer)((H, G) => {
        let V = (0, import_url.parse)(H.url || "", true);
        if (V.pathname === "/callback") {
          let se = V.query.code, Oe = V.query.state, re = V.query.error, de = V.query.error_description, _e = V.query.error_uri, lt = (0, import_chunk_r64qzndq.Oor)(V.query.iss);
          if (Oe !== ne) {
            G.writeHead(400, { "Content-Type": "text/html" }), G.end((0, import_chunk_x8rfwr2t.PMe)({ ok: false, heading: "Authentication failed", message: "Invalid state parameter. Close this tab and try again from Claude Code." }));
            return;
          }
          if (re) {
            G.writeHead(200, { "Content-Type": "text/html" }), G.end((0, import_chunk_x8rfwr2t.PMe)({ ok: false, heading: "Authentication failed", message: "Close this tab and try again from Claude Code.", detail: `${String(re)}: ${de ?? ""}` })), Q();
            let Re = `OAuth error: ${re}`;
            if (de) Re += ` - ${de}`;
            if (_e) Re += ` (See: ${_e})`;
            ee(Error(Re));
            return;
          }
          if (se) G.writeHead(200, { "Content-Type": "text/html" }), G.end((0, import_chunk_x8rfwr2t.PMe)({ ok: true, heading: "Authentication successful", message: "You can close this tab and return to Claude Code." })), Q(), ze(se, lt);
        } else G.writeHead(404, { "Content-Type": "text/html" }), G.end((0, import_chunk_x8rfwr2t.PMe)({ ok: false, heading: "Not found", message: `This is the Claude Code MCP OAuth callback listener. It only handles /callback. If your OAuth provider redirected here, the registered redirect_uri must be ${(0, import_chunk_jbjjrhxt.bu)(q)}.` }));
      }), X.on("error", (H) => {
        if (Q(), H.code === "EADDRINUSE") {
          let G = (0, import_chunk_cg8dqz0a.x)() === "windows" ? `netstat -ano | findstr :${z}` : `lsof -ti:${z} -sTCP:LISTEN`;
          ee(new import_chunk_jv7av99m.A(`OAuth callback port ${z} is already in use \u2014 another process may be holding it. Run \`${G}\` to find it.`, "OAuth callback port already in use"));
        } else ee(new import_chunk_jv7av99m.A(`OAuth callback server failed: ${H.message}`, "OAuth callback server failed"));
      }), X.listen(z, "127.0.0.1", () => void je()), X.unref();
      j = setTimeout((H, G) => {
        H(), G(new import_chunk_jv7av99m.A("Authentication timeout", "Authentication timeout"));
      }, 3e5, Q, ee), j.unref();
    });
    U = true, (0, import_chunk_k449cc64.He)(e, "Completing auth flow with authorization code"), (0, import_chunk_rwc528c4.KD)().record(Le);
    let Ne = { serverUrl: r.url, authorizationCode: Le, resourceMetadataUrl: R.resourceMetadataUrl, fetchFn: ie(e, r, vYr(r)), skipIssuerMetadataValidation: true }, ce;
    try {
      ce = await (0, import_chunk_racn22qq.pJt)(J, { ...Ne, iss: ht });
    } catch (L) {
      if (!(L instanceof import_chunk_racn22qq.n4e) || L.kind !== "authorization_response" || L.expected === void 0 || !(0, import_chunk_sppbt6xz.s1)()) throw L;
      let pe = (0, import_chunk_bzyb60p0.Nie)(r);
      (0, import_chunk_y53wbr8a.a)("tengu_mcp_oauth_iss_compat", { flowAttemptId: (0, import_chunk_49zxha55.Ce)(P), reason: L.received === void 0 ? (0, import_chunk_78g0060s.S)("absent") : (0, import_chunk_78g0060s.S)("differs"), transportType: (0, import_chunk_78g0060s.f)(r.type), ...pe && { mcpServerBaseUrl: pe } }), (0, import_chunk_k449cc64.He)(e, `Issuer mismatch in authorization response (expected ${it(L.expected)}, received ${it(L.received)}). Sign-in continues: the selection of the v1 MCP client turns this check off.`), ce = await (0, import_chunk_racn22qq.pJt)(J, { ...Ne, iss: L.expected });
    }
    if ((0, import_chunk_k449cc64.He)(e, `Auth result: ${ce}`), ce === "AUTHORIZED") {
      let L = await J.tokens().catch(() => {
        return;
      });
      if ((0, import_chunk_k449cc64.He)(e, `Tokens after auth: ${L ? "Present" : "Missing"}`), L) (0, import_chunk_k449cc64.He)(e, `Token expires_in: ${L.expires_in}`);
      (0, import_chunk_y53wbr8a.a)("tengu_mcp_oauth_flow_success", { flowAttemptId: (0, import_chunk_49zxha55.Ce)(P), transportType: (0, import_chunk_78g0060s.f)(r.type), ...I, ...(0, import_chunk_bzyb60p0.Nie)(r) && { mcpServerBaseUrl: (0, import_chunk_bzyb60p0.Nie)(r) } }), (0, import_chunk_cqa9hrgx.u)("mcp_oauth_flow");
    } else throw new import_chunk_jv7av99m.A("Unexpected auth result: " + ce, "Unexpected auth result");
  } catch (E) {
    (0, import_chunk_k449cc64.He)(e, `Error during auth completion: ${(0, import_chunk_jbjjrhxt.Ztt)(E, r.url)}`);
    let F = "unknown", z, q, D = (0, import_chunk_jv7av99m.d)(E), N = E instanceof Error ? E.cause : void 0;
    if (E instanceof dRn) F = "cancelled";
    else if (E instanceof Sie || N instanceof Sie) F = "issuer_echo_denied";
    else if (E instanceof import_chunk_racn22qq.n4e || N instanceof import_chunk_racn22qq.n4e) F = [E, N].find((j) => j instanceof import_chunk_racn22qq.n4e)?.kind === "metadata" ? "issuer_echo_mismatch" : "issuer_response_mismatch";
    else if (/AADSTS\d/.test(D)) F = "entra_specific";
    else if (/redirect[_ ]uri/i.test(D)) F = "redirect_uri_mismatch";
    else if (U && (xe(E) || xe(N))) F = "token_response_schema_rejected";
    else if (U) F = "token_exchange_failed";
    else if (D.includes("Authentication timeout")) F = "timeout";
    else if (D.includes("OAuth error:")) F = "provider_denied";
    else if (D.includes("already in use") || D.includes("EADDRINUSE") || D.includes("callback server failed") || D.includes("No available port")) F = "port_unavailable";
    else if (D.includes("SDK auth failed")) F = Azl(D, N);
    let J = [N, E].find((X) => X instanceof import_chunk_racn22qq.K9o), he = (N instanceof Error ? N : E instanceof Error ? E : null)?.message.match(/^HTTP (\d{3})\b/);
    if (J) q = J.status;
    else if (he) q = Number(he[1]);
    if (N instanceof import_chunk_racn22qq.bie) z = N.code;
    if (E instanceof import_chunk_racn22qq.bie) {
      if (z = E.code, E.code === "invalid_client" || E.code === "unauthorized_client") {
        let X = (0, import_chunk_yz5b8aaa.kc)(e, r);
        try {
          await (0, import_chunk_zzrn5zap.Er)().mutate((j) => {
            let W = j.mcpOAuth?.[X];
            if (!W) return j;
            return { ...j, mcpOAuth: { ...j.mcpOAuth, [X]: { ...W, clientId: void 0, clientSecret: void 0 } } };
          });
        } catch (j) {
          (0, import_chunk_k449cc64.He)(e, `clear clientId failed: ${(0, import_chunk_jv7av99m.d)(j)}`);
        }
      }
    }
    if (!/^OAuth error: access_denied(?: |$)/.test(D) && (F === "timeout" || D.includes("OAuth error:"))) {
      let X = (0, import_chunk_yz5b8aaa.kc)(e, r);
      await (0, import_chunk_zzrn5zap.Er)().mutate((j) => {
        let W = j.mcpOAuth?.[X];
        if (!W?.clientId || W.accessToken || W.refreshToken || W.clientId !== k?.clientId) return j;
        return { ...j, mcpOAuth: { ...j.mcpOAuth, [X]: { ...W, clientId: void 0, clientSecret: void 0 } } };
      }).catch((j) => (0, import_chunk_k449cc64.He)(e, `drop clientId failed: ${(0, import_chunk_jv7av99m.d)(j)}`));
    }
    if (F !== "cancelled") (0, import_chunk_cqa9hrgx.m)("mcp_oauth_flow", "mcp_oauth_flow_failed");
    (0, import_chunk_y53wbr8a.a)("tengu_mcp_oauth_flow_error", { flowAttemptId: (0, import_chunk_49zxha55.Ce)(P), reason: (0, import_chunk_78g0060s.f)(F), error_code: z === void 0 ? void 0 : Czl(z), http_status: (0, import_chunk_78g0060s.ove)(q), transportType: (0, import_chunk_78g0060s.f)(r.type), ...I, ...(0, import_chunk_bzyb60p0.Nie)(r) && { mcpServerBaseUrl: (0, import_chunk_bzyb60p0.Nie)(r) } });
    let ne = (0, import_chunk_jbjjrhxt.Ztt)(E, r.url);
    throw ne === (0, import_chunk_jv7av99m.d)(E) ? E : Error(ne, { cause: E });
  }
}
var Vt = 1e3, qt = 5e3, Jt = /* @__PURE__ */ new Set([import_chunk_racn22qq.DY.InvalidGrant, import_chunk_racn22qq.DY.InvalidClient, import_chunk_racn22qq.DY.UnauthorizedClient, import_chunk_racn22qq.DY.ServerError, import_chunk_racn22qq.DY.TemporarilyUnavailable, import_chunk_racn22qq.DY.TooManyRequests]);
function CYr(e, r) {
  let o = (0, import_chunk_fkbh0xha.mJt)(e, import_chunk_fkbh0xha.Vor);
  return async (i, h) => {
    let v = await r.rewriteRefusedRefresh(() => r.servedSignIns.send(h, () => o(i, h)), h);
    if (v.status === 401 || v.status === 403) r.sawAuthChallenge = true;
    if (r.noteServerAnswer(i, v.status === 401 || v.status === 403 && (0, import_chunk_racn22qq.Fgt)(v).error === "insufficient_scope"), v.status === 401 || v.status === 403) r.noteAuthRejection(i, v.status, new Headers(h?.headers).get("authorization"));
    if (!new Headers(h?.headers).has("authorization")) return v;
    if (v.status === 403) {
      let { error: y, scope: k } = (0, import_chunk_racn22qq.Fgt)(v);
      if (y === "insufficient_scope" && k) r.markStepUpPending(k);
    } else if (v.status === 401) r.clearStepUpPending();
    return v;
  };
}
class cRn {
  serverName;
  serverConfig;
  redirectUri;
  handleRedirection;
  _codeVerifier;
  _flowDiscoveryState;
  _flowDiscoveryStateAt = 0;
  _flowDiscoveryStateFromConfiguredUrl = false;
  _metadataEchoMode;
  _authorizationUrl;
  _state;
  _scopes;
  _metadata;
  _refreshInProgress;
  _pendingStepUpScope;
  _servedOverrideAuthorizationServerUrl;
  _servedOverrideDocuments = /* @__PURE__ */ new WeakMap();
  _discoveredAuthorizationServer;
  _lastServedClientId;
  _lastServedAccessToken;
  _lastServedRefreshToken;
  servedSignIns = new import_chunk_kj84g0v7.qri();
  _lastAuthRejection;
  _presented;
  onAuthorizationUrlCallback;
  skipBrowserOpen;
  constructor(e, r, o = (0, import_chunk_r64qzndq.j9o)(), i = false, h, v) {
    this.serverName = e, this.serverConfig = r, this.redirectUri = o, this.handleRedirection = i, this.owesHeldSignInOnlyDial = (0, import_chunk_qdcbcsg7.mt)().heldSignInOnlyDials.has(e), this.onAuthorizationUrlCallback = h, this.skipBrowserOpen = v ?? false, this._presented = (0, import_chunk_rwc528c4.KD)();
  }
  get redirectUrl() {
    return this.redirectUri;
  }
  get authorizationUrl() {
    return this._authorizationUrl;
  }
  _xaaPin = import_chunk_zzrn5zap.bs;
  allowInsecureTokenEndpoint = (e, r) => {
    if (e.protocol !== "http:" || r !== "authorization_code" && r !== "refresh_token" || this.serverConfig.oauth?.xaa || this._xaaPin !== void 0 || !(0, import_chunk_sppbt6xz.s1)()) return false;
    let o = r === "refresh_token" ? "refresh" : "exchange", i = (0, import_chunk_bzyb60p0.Nie)(this.serverConfig);
    return (0, import_chunk_y53wbr8a.a)("tengu_mcp_oauth_insecure_token_endpoint_compat", { operation: (0, import_chunk_78g0060s.f)(o), transportType: (0, import_chunk_78g0060s.f)(this.serverConfig.type), ...i && { mcpServerBaseUrl: i } }), (0, import_chunk_k449cc64.He)(this.serverName, `Sending the OAuth ${o === "refresh" ? "token refresh" : "code exchange"} to a token endpoint that is not https (${(0, import_chunk_jbjjrhxt.bu)(e.href).slice(0, 200)}), because the v1 MCP client is selected. Tokens and client secrets are not encrypted on this connection.`), true;
  };
  get clientMetadata() {
    let e = { client_name: `Claude Code (${this.serverName})`, redirect_uris: [this.redirectUri], grant_types: ["authorization_code", "refresh_token"], response_types: ["code"], token_endpoint_auth_method: "none" }, r = this.getCuratedMetadataScope();
    if (r) e.scope = r, (0, import_chunk_k449cc64.He)(this.serverName, `Using scope from metadata: ${(0, import_chunk_jbjjrhxt.STe)("scope", e.scope)}`);
    return e;
  }
  get clientMetadataUrl() {
    if (this.refuseToStartSignIn(), !Ie(this.redirectUri)) {
      (0, import_chunk_k449cc64.He)(this.serverName, `redirectUri ${(0, import_chunk_jbjjrhxt.bu)(this.redirectUri)} is not the document's loopback /callback: withholding CIMD client_id \u2014 registering via DCR`);
      return;
    }
    let e = at();
    if (e !== import_chunk_ephf358x.I0o) (0, import_chunk_k449cc64.He)(this.serverName, `Using CIMD URL from env: ${e}`);
    return e;
  }
  setMetadata(e) {
    this._metadata = e, this._metadataEchoMode = ke() ? "enforce" : "observe";
  }
  getCuratedMetadataScope() {
    let e = ut(this._metadata);
    if (e !== void 0) return e;
    if (this.serverConfig.oauth?.authServerMetadataUrl && Array.isArray(this._metadata?.scopes_supported)) return this._metadata.scopes_supported.join(" ");
    return;
  }
  markStepUpPending(e) {
    this._pendingStepUpScope = e, (0, import_chunk_k449cc64.He)(this.serverName, `Marked step-up pending: ${(0, import_chunk_jbjjrhxt.STe)("scope", e)}`);
  }
  get pendingStepUpScope() {
    return this._pendingStepUpScope;
  }
  get lastAuthRejection() {
    return this._lastAuthRejection;
  }
  noteAuthRejection(e, r, o) {
    let i = this.serverConfig.url;
    if (String(e) === (URL.canParse(i) ? new URL(i).href : i)) this._lastAuthRejection = { status: r, accessToken: o?.startsWith("Bearer ") ? o.slice(7) : void 0 };
  }
  clearStepUpPending() {
    this._pendingStepUpScope = void 0;
  }
  clearStepUpPendingOnCredentialGone() {
    if (!this.handleRedirection) this.clearStepUpPending();
  }
  sawAuthChallenge = false;
  authChallengeOpen = false;
  owesHeldSignInOnlyDial;
  noteServerAnswer(e, r) {
    let o = this.serverConfig.url;
    if (String(e) === (URL.canParse(o) ? new URL(o).href : o)) this.authChallengeOpen = r, this.owesHeldSignInOnlyDial = r && (this.owesHeldSignInOnlyDial || (0, import_chunk_qdcbcsg7.mt)().heldSignInOnlyDials.has(this.serverName));
  }
  registrationOfferedByDiscovery = false;
  async readCredentialStore() {
    let e = await (0, import_chunk_yz5b8aaa.oB)(this.handleRedirection ? void 0 : { serverName: this.serverName, serverConfig: this.serverConfig, challenged: this.authChallengeOpen });
    if (e === import_chunk_zzrn5zap.bs) throw (0, import_chunk_k449cc64.He)(this.serverName, "Credential store could not be read (the login keychain may be locked); not reporting credentials as absent"), new import_chunk_yz5b8aaa.AAt(this.serverName);
    return e;
  }
  async hasOtherClientThan(e) {
    if (!e) return false;
    let o = (await (0, import_chunk_zzrn5zap.Er)().readAsync())?.mcpOAuth?.[(0, import_chunk_yz5b8aaa.kc)(this.serverName, this.serverConfig)];
    return !!o?.clientId && o.clientId !== e;
  }
  refuseToStartSignIn() {
    if (!this.handleRedirection && (this.owesHeldSignInOnlyDial || (0, import_chunk_qdcbcsg7.mt)().heldSignInOnlyDials.has(this.serverName))) throw new import_chunk_racn22qq.YL("Authentication required");
  }
  async state() {
    if (this.refuseToStartSignIn(), !this._state) this._state = (0, import_crypto.randomBytes)(32).toString("base64url"), (0, import_chunk_k449cc64.He)(this.serverName, "Generated new OAuth state");
    return this._state;
  }
  async clientInformation() {
    let e = await this.resolveClientInformation();
    return this._presented.record(e?.client_secret), this._presented.record((0, import_chunk_rwc528c4.zsi)(e?.client_id, e?.client_secret)), e;
  }
  async resolveClientInformation() {
    let e = await this.readCredentialStore(), r = (0, import_chunk_yz5b8aaa.kc)(this.serverName, this.serverConfig), o = e?.mcpOAuthClientConfig?.[r]?.clientSecret, i = this.serverConfig.oauth?.clientId, h = e?.mcpOAuth?.[r], v = this.handleRedirection && Kt(h?.clientId) && !Ie(this.redirectUri);
    if (v) {
      if ((0, import_chunk_k449cc64.He)(this.serverName, `Stored client_id is the CIMD document URL (loopback /callback only); current redirectUri is ${(0, import_chunk_jbjjrhxt.bu)(this.redirectUri)} \u2014 ${i ? "serving the configured client" : "registering via DCR"} instead`), i) await this.patchStoredClientEntry(r, { clientId: i, clientSecret: void 0, redirectUri: this.redirectUri }, "stale CIMD client_id repair");
    }
    if (h?.clientId && !v) {
      let y = h.redirectUri;
      if (this.handleRedirection && (y ? $e(y) !== $e(this.redirectUri) : !this.redirectUri.startsWith("http://localhost"))) {
        let k = y ? (0, import_chunk_jbjjrhxt.bu)(y) : "localhost";
        if (!i) {
          (0, import_chunk_k449cc64.He)(this.serverName, `Cached client_id was registered for ${k}; current redirectUri is ${(0, import_chunk_jbjjrhxt.bu)(this.redirectUri)} \u2014 forcing re-DCR`);
          return;
        }
        if (h.clientId !== i) return (0, import_chunk_k449cc64.He)(this.serverName, `Stored client_id is stale and its redirectUri ${k} predates ${(0, import_chunk_jbjjrhxt.bu)(this.redirectUri)} \u2014 serving the configured client (no registration to redo)`), await this.patchStoredClientEntry(r, { clientId: i, clientSecret: void 0, redirectUri: this.redirectUri }, "stale client_id repair"), this._lastServedClientId = i, { client_id: i, issuer: h.issuer, client_secret: o };
        (0, import_chunk_k449cc64.He)(this.serverName, `Stored redirectUri ${k} predates ${(0, import_chunk_jbjjrhxt.bu)(this.redirectUri)}, but the client_id is the configured one \u2014 serving it (no registration to redo)`), await this.patchStoredClientEntry(r, { redirectUri: this.redirectUri }, "stored redirectUri convergence");
      }
      return (0, import_chunk_k449cc64.He)(this.serverName, "Found client info"), this._lastServedClientId = h.clientId, { client_id: h.clientId, issuer: h.issuer, client_secret: h.clientSecret ?? (h.clientId === i ? o : void 0) };
    }
    if (i) return (0, import_chunk_k449cc64.He)(this.serverName, "Using pre-configured client ID"), this._lastServedClientId = i, { client_id: i, client_secret: o };
    if (!this.handleRedirection && this.registrationOfferedByDiscovery && !h?.accessToken && !h?.refreshToken) throw (0, import_chunk_k449cc64.He)(this.serverName, "No client info found; deferring client registration to authentication time"), new L$a(this.serverName);
    (0, import_chunk_k449cc64.He)(this.serverName, "No client info found");
    return;
  }
  async patchStoredClientEntry(e, r, o) {
    try {
      if (!(await (0, import_chunk_zzrn5zap.Er)().mutate((h) => {
        let v = h.mcpOAuth?.[e];
        if (!v) return h;
        return { ...h, mcpOAuth: { ...h.mcpOAuth, [e]: { ...v, ...r } } };
      }))?.success) (0, import_chunk_k449cc64.He)(this.serverName, `${o} resolved unsuccessful`);
    } catch (i) {
      (0, import_chunk_k449cc64.He)(this.serverName, `${o} failed: ${(0, import_chunk_jv7av99m.d)(i)}`);
    }
  }
  async saveClientInformation(e) {
    this._presented.record(e.client_secret), this._presented.record((0, import_chunk_rwc528c4.zsi)(e.client_id, e.client_secret));
    let r = (0, import_chunk_yz5b8aaa.kc)(this.serverName, this.serverConfig);
    try {
      if ((await (0, import_chunk_zzrn5zap.Er)().mutate((i) => ({ ...i, mcpOAuth: { ...i.mcpOAuth, [r]: { ...i.mcpOAuth?.[r], serverName: this.serverName, serverUrl: this.serverConfig.url, clientId: e.client_id, clientSecret: e.issuer !== void 0 && e.client_id === i.mcpOAuth?.[r]?.clientId && i.mcpOAuth?.[r]?.clientSecret === void 0 && e.client_id === this.serverConfig.oauth?.clientId ? void 0 : e.client_secret, issuer: e.issuer ?? i.mcpOAuth?.[r]?.issuer, redirectUri: !this.handleRedirection && e.client_id === i.mcpOAuth?.[r]?.clientId ? i.mcpOAuth?.[r]?.redirectUri : this.redirectUri, accessToken: i.mcpOAuth?.[r]?.accessToken || "", expiresAt: i.mcpOAuth?.[r]?.expiresAt } } })))?.success) this._lastServedClientId = e.client_id;
      else (0, import_chunk_k449cc64.He)(this.serverName, "saveClientInformation persist resolved unsuccessful");
    } catch (o) {
      (0, import_chunk_k449cc64.He)(this.serverName, `saveClientInformation persist failed: ${(0, import_chunk_jv7av99m.d)(o)}`);
    }
  }
  async tokens() {
    let e = (0, import_chunk_yz5b8aaa.kc)(this.serverName, this.serverConfig), r = (0, import_chunk_kj84g0v7.nJt)(e), o = this._lastServedClientId, h = (await this.readCredentialStore())?.mcpOAuth?.[e];
    if ((0, import_chunk_yz5b8aaa.gee)() && this.serverConfig.oauth?.xaa && !h?.refreshToken && (!h?.accessToken || h.expiresAt != null && (h.expiresAt - Date.now()) / 1e3 <= 300)) {
      if (!this._refreshInProgress) (0, import_chunk_k449cc64.He)(this.serverName, h ? "XAA: access_token expiring, attempting silent exchange" : "XAA: no access_token yet, attempting silent exchange"), this._refreshInProgress = this.xaaRefresh().finally(() => {
        this._refreshInProgress = void 0;
      });
      try {
        let T = await this._refreshInProgress;
        if (T) return this._lastServedAccessToken = T.access_token, this._presented.record(T.access_token), this._presented.record(T.refresh_token), this._lastServedRefreshToken = T.refresh_token ?? this._lastServedRefreshToken, { ...T, issuer: h?.issuer };
      } catch (T) {
        (0, import_chunk_k449cc64.He)(this.serverName, `XAA silent exchange failed: ${(0, import_chunk_jv7av99m.d)(T)}`);
      }
    }
    if (!h) {
      (0, import_chunk_k449cc64.He)(this.serverName, "No token data found"), this.clearStepUpPendingOnCredentialGone();
      return;
    }
    if (!h.accessToken) {
      (0, import_chunk_k449cc64.He)(this.serverName, "No access token in storage"), this.clearStepUpPendingOnCredentialGone();
      return;
    }
    if ((0, import_chunk_vp3hv9ky.Xri)(e, h.accessToken)) {
      (0, import_chunk_k449cc64.He)(this.serverName, "Not sending the stored access token, because the server rejected it earlier in this session");
      return;
    }
    this._lastServedAccessToken = h.accessToken, this._presented.record(h.accessToken), this._presented.record(h.refreshToken), this._lastServedRefreshToken = h.refreshToken, this.servedSignIns.served(r, h.accessToken, h.refreshToken);
    let v = h.expiresAt != null ? (h.expiresAt - Date.now()) / 1e3 : void 0, y = this._pendingStepUpScope, k = y !== void 0;
    if (k) (0, import_chunk_k449cc64.He)(this.serverName, `Step-up pending (${(0, import_chunk_jbjjrhxt.STe)("scope", y)}), omitting refresh_token`);
    if (v != null && v <= 0 && !h.refreshToken) {
      (0, import_chunk_k449cc64.He)(this.serverName, "Token expired without refresh token"), this.clearStepUpPendingOnCredentialGone();
      return;
    }
    if (v != null && v <= 300 && h.refreshToken && !k && !(0, import_chunk_kj84g0v7.uRn)(e, r)) {
      if (!this._refreshInProgress) (0, import_chunk_k449cc64.He)(this.serverName, `Token expires in ${Math.floor(v)}s, attempting proactive refresh`), this._refreshInProgress = this.refreshAuthorization(h.refreshToken).finally(() => {
        this._refreshInProgress = void 0;
      });
      else (0, import_chunk_k449cc64.He)(this.serverName, "Token refresh already in progress, reusing existing promise");
      try {
        let T = await this._refreshInProgress, O = (0, import_chunk_kj84g0v7.nJt)(e) !== r && await this.hasOtherClientThan(o), C = this.servedSignIns.clearsAt(T?.access_token);
        if (T && (0, import_chunk_kj84g0v7.nJt)(e) === C) {
          let R = O || (0, import_chunk_kj84g0v7.uRn)(e, C) ? { ...T, refresh_token: void 0 } : T;
          return (0, import_chunk_k449cc64.He)(this.serverName, "Token refreshed successfully"), this._lastServedAccessToken = R.access_token, this._presented.record(R.access_token), this._presented.record(R.refresh_token), this._lastServedRefreshToken = R.refresh_token ?? this._lastServedRefreshToken, { ...R, issuer: h?.issuer };
        }
        (0, import_chunk_k449cc64.He)(this.serverName, "Token refresh failed, returning current tokens");
      } catch (T) {
        (0, import_chunk_k449cc64.He)(this.serverName, `Token refresh error: ${(0, import_chunk_jbjjrhxt.Ztt)(T, this.serverConfig.url)}`);
      }
    }
    if ((0, import_chunk_kj84g0v7.nJt)(e) !== r) {
      (0, import_chunk_k449cc64.He)(this.serverName, "Not returning tokens that were cleared"), this.clearStepUpPendingOnCredentialGone();
      return;
    }
    let g = { access_token: h.accessToken, refresh_token: k || (0, import_chunk_kj84g0v7.uRn)(e, r) ? void 0 : h.refreshToken, expires_in: v, scope: h.scope, token_type: "Bearer", issuer: h.issuer };
    return (0, import_chunk_k449cc64.He)(this.serverName, "Returning tokens"), (0, import_chunk_k449cc64.He)(this.serverName, `Has refresh token: ${!!g.refresh_token}`), (0, import_chunk_k449cc64.He)(this.serverName, v != null ? `Expires in: ${Math.floor(v)}s` : "No expiration specified"), g;
  }
  async saveTokens(e) {
    this._presented.record(e.access_token), this._presented.record(e.refresh_token);
    let r = e.access_token !== this._lastServedAccessToken, o = this._flowDiscoveryStateAt;
    if (r && this.handleRedirection) this._pendingStepUpScope = void 0;
    let i = (0, import_chunk_yz5b8aaa.kc)(this.serverName, this.serverConfig);
    (0, import_chunk_k449cc64.He)(this.serverName, "Saving tokens"), (0, import_chunk_k449cc64.He)(this.serverName, `Token expires in: ${e.expires_in}`), (0, import_chunk_k449cc64.He)(this.serverName, `Has refresh token: ${!!e.refresh_token}`);
    let h = this._servedOverrideAuthorizationServerUrl === void 0 ? this._discoveredAuthorizationServer : { authorizationServerUrl: this._servedOverrideAuthorizationServerUrl, oauthMetadataFound: true }, v = this.servedMetadataUrl() ?? this._discoveredAuthorizationServer?.servedMetadataUrl, y = this.servedSignIns.clearsAt(e.access_token, e.refresh_token), k, g;
    try {
      let T = (O) => ({ ...O, mcpOAuth: { ...O.mcpOAuth, [i]: { ...O.mcpOAuth?.[i], serverName: this.serverName, serverUrl: this.serverConfig.url, accessToken: e.access_token, refreshToken: e.refresh_token ?? O.mcpOAuth?.[i]?.refreshToken, expiresAt: e.expires_in != null ? Date.now() + e.expires_in * 1e3 : void 0, scope: e.scope, issuer: e.issuer ?? O.mcpOAuth?.[i]?.issuer, discoveryState: (0, import_chunk_vp3hv9ky.Yri)((0, import_chunk_271xsh6x.xpl)({ previous: O.mcpOAuth?.[i]?.discoveryState, signIn: h, servedMetadataUrl: v, interactiveSignIn: this.handleRedirection })) } } });
      if (k = await (0, import_chunk_kj84g0v7.j$a)(this.serverName, this.serverConfig, this.handleRedirection ? void 0 : y, T), !k) return;
    } catch (T) {
      g = T;
    }
    if (k?.success) {
      let { dialedWithoutOAuth: T } = (0, import_chunk_qdcbcsg7.mt)();
      if (T.get(this.serverName) === this.serverConfig.url) T.delete(this.serverName);
      (0, import_chunk_qdcbcsg7.mt)().searchRedialFailures.delete(this.serverName), this._lastServedAccessToken = e.access_token, this._lastServedRefreshToken = e.refresh_token ?? this._lastServedRefreshToken, (0, import_chunk_vp3hv9ky.G$a)(i, e.access_token);
    }
    if (this.logTokenPersistFailed(k, g), r && this._flowDiscoveryStateAt === o) this._flowDiscoveryState = void 0, this._flowDiscoveryStateAt = 0;
  }
  logTokenPersistFailed(e, r) {
    dt(this.serverName, this.serverConfig, e, r);
  }
  async xaaRefresh() {
    let e = (0, import_chunk_yz5b8aaa.cct)();
    if (!e) return;
    let r = await (0, import_chunk_z88wr2ke.DYr)(e.issuer);
    if (!r) {
      (0, import_chunk_k449cc64.He)(this.serverName, "XAA: id_token not cached, needs interactive re-auth");
      return;
    }
    let o = this.serverConfig.oauth?.clientId, i = await F$a(this.serverName, this.serverConfig);
    if (!o || !i?.clientSecret) {
      (0, import_chunk_k449cc64.He)(this.serverName, "XAA: missing clientId or clientSecret in config \u2014 skipping silent refresh");
      return;
    }
    let h = await ae(this.serverName, this.serverConfig);
    if (h === import_chunk_zzrn5zap.bs) {
      (0, import_chunk_k449cc64.He)(this.serverName, "XAA: stored credentials unreadable");
      return;
    }
    let v = h ? void 0 : await (0, import_chunk_zzrn5zap.Er)().readAsyncStrict?.(void 0, { inaccessibleAs: "failure" });
    if (v === import_chunk_zzrn5zap.bs) {
      (0, import_chunk_k449cc64.He)(this.serverName, "XAA: no pin and the keychain is unreadable");
      return;
    }
    let y = h ?? (0, import_chunk_271xsh6x.UBt)(v?.mcpOAuth?.[(0, import_chunk_yz5b8aaa.kc)(this.serverName, this.serverConfig)]?.discoveryState), k = await (0, import_chunk_z88wr2ke.W9o)(e.issuer), g;
    try {
      g = await (0, import_chunk_z88wr2ke.LYr)(e.issuer);
    } catch (T) {
      (0, import_chunk_k449cc64.He)(this.serverName, `XAA: OIDC discovery failed in silent refresh: ${(0, import_chunk_jv7av99m.d)(T)}`);
      return;
    }
    this._presented.record(i.clientSecret);
    try {
      let T = await Me(this.serverConfig.url, { clientId: o, clientSecret: i.clientSecret, idpClientId: e.clientId, idpClientSecret: k, idpIdToken: r, idpTokenEndpoint: g.token_endpoint, pinnedAuthorizationServer: y, runtimeFetch: () => (0, import_chunk_3fqcfedz.qYr)(this.serverConfig, fetch) }, this.serverName), O = (0, import_chunk_yz5b8aaa.kc)(this.serverName, this.serverConfig), C, R;
      try {
        C = await (0, import_chunk_zzrn5zap.Er)().mutate((P) => {
          let I = P.mcpOAuth?.[O];
          return { ...P, mcpOAuth: { ...P.mcpOAuth, [O]: { ...I, serverName: this.serverName, serverUrl: this.serverConfig.url, accessToken: T.access_token, refreshToken: T.refresh_token ?? I?.refreshToken, expiresAt: T.expires_in != null ? Date.now() + T.expires_in * 1e3 : void 0, scope: T.scope, clientId: o, clientSecret: i.clientSecret, discoveryState: (0, import_chunk_271xsh6x.tDi)({ previous: I?.discoveryState, issuedBy: T.authorizationServerUrl, interactiveSignIn: false }) } } };
        });
      } catch (P) {
        R = P;
      }
      return this.logTokenPersistFailed(C, R), { access_token: T.access_token, token_type: "Bearer", expires_in: T.expires_in, scope: T.scope, refresh_token: T.refresh_token };
    } catch (T) {
      if (T instanceof Z && T.shouldClearIdToken) await (0, import_chunk_z88wr2ke.B9o)(e.issuer), (0, import_chunk_k449cc64.He)(this.serverName, "XAA: cleared id_token after exchange failure");
      throw T;
    }
  }
  async redirectToAuthorization(e) {
    let r = this._pendingStepUpScope ? void 0 : this.serverConfig.oauth?.scopes || (this.serverConfig.oauth?.authServerMetadataUrl ? this.getCuratedMetadataScope() : void 0), o = e.searchParams.get("scope"), i = r ?? o;
    if (i !== o) (0, import_chunk_k449cc64.He)(this.serverName, `Overrode authorization scope from ${o ? (0, import_chunk_jbjjrhxt.STe)("scope", o) : "NONE"} to configured: ${i ? (0, import_chunk_jbjjrhxt.STe)("scope", i) : "NONE"}`);
    let h = i === null ? null : Rzl(i, this._metadata);
    if (h !== null && h !== o) {
      if (e.searchParams.set("scope", h), h !== r) (0, import_chunk_k449cc64.He)(this.serverName, "Appended offline_access to authorization scope");
    }
    let v = xzl(e), y = e.searchParams.getAll("prompt"), k = v ? y.filter((I) => I !== "consent") : y;
    if (k.length !== y.length || k.length > 1) {
      if (e.searchParams.delete("prompt"), k.length > 0) e.searchParams.set("prompt", k.includes("consent") ? "consent" : k.at(-1));
    }
    this._authorizationUrl = e.toString();
    let g = e.searchParams.get("scope");
    if ((0, import_chunk_k449cc64.He)(this.serverName, `Authorization URL: ${H$a(e)}`), (0, import_chunk_k449cc64.He)(this.serverName, `Scopes in URL: ${g ? (0, import_chunk_jbjjrhxt.STe)("scope", g) : "NOT FOUND"}`), g) this._scopes = g, (0, import_chunk_k449cc64.He)(this.serverName, `Captured scopes from authorization URL: ${(0, import_chunk_jbjjrhxt.STe)("scope", g)}`);
    else {
      let I = this.getCuratedMetadataScope();
      if (I) this._scopes = I, (0, import_chunk_k449cc64.He)(this.serverName, `Using scopes from metadata: ${(0, import_chunk_jbjjrhxt.STe)("scope", I)}`);
      else (0, import_chunk_k449cc64.He)(this.serverName, "No scopes available from URL or metadata");
    }
    if (this._scopes && !this.handleRedirection && this._pendingStepUpScope) {
      let I = (0, import_chunk_yz5b8aaa.kc)(this.serverName, this.serverConfig), U = this._scopes, E = false;
      try {
        await (0, import_chunk_zzrn5zap.Er)().mutate((F) => {
          let z = F.mcpOAuth?.[I];
          if (!z) return F;
          return E = true, { ...F, mcpOAuth: { ...F.mcpOAuth, [I]: { ...z, stepUpScope: U } } };
        });
      } catch (F) {
        (0, import_chunk_k449cc64.He)(this.serverName, `step-up scope persist failed: ${(0, import_chunk_jv7av99m.d)(F)}`);
      }
      if (E) (0, import_chunk_k449cc64.He)(this.serverName, `Persisted step-up scope: ${(0, import_chunk_jbjjrhxt.STe)("scope", U)}`);
    }
    if (!this.handleRedirection) {
      (0, import_chunk_k449cc64.He)(this.serverName, "Redirection handling is disabled, skipping redirect");
      return;
    }
    let T = e.toString();
    if (!T.startsWith("http://") && !T.startsWith("https://")) throw Error("Invalid authorization URL: must use http:// or https:// scheme");
    let O = (0, import_chunk_3fqcfedz.r8o)(this.serverConfig);
    O?.(T), O?.(this._metadata?.token_endpoint ?? T), (0, import_chunk_k449cc64.He)(this.serverName, "Redirecting to authorization URL");
    let C = H$a(e);
    if ((0, import_chunk_k449cc64.He)(this.serverName, `Authorization URL: ${C}`), this.onAuthorizationUrlCallback) this.onAuthorizationUrlCallback(T);
    if (this.skipBrowserOpen) {
      (0, import_chunk_k449cc64.He)(this.serverName, `Skipping browser open (skipBrowserOpen=true). URL: ${C}`);
      return;
    }
    let R = (0, import_chunk_h3t3td58.$U)();
    if (R) (0, import_chunk_k449cc64.He)(this.serverName, `Skipping browser open (headless environment). URL: ${C}`);
    else (0, import_chunk_k449cc64.He)(this.serverName, `Opening authorization URL: ${C}`);
    let P = R ? false : await (0, import_chunk_h3t3td58.ml)(T);
    if ((0, import_chunk_y53wbr8a.a)("tengu_mcp_oauth_browser_open", { success: P, headless: R, platform: (0, import_chunk_78g0060s.f)((0, import_chunk_cg8dqz0a.x)()) }), !R && !P) (0, import_chunk_k449cc64.He)(this.serverName, "Browser didn't open automatically. URL is shown in UI.");
  }
  async saveCodeVerifier(e) {
    (0, import_chunk_k449cc64.He)(this.serverName, "Saving code verifier"), this._codeVerifier = e;
  }
  async codeVerifier() {
    if (!this._codeVerifier) throw (0, import_chunk_k449cc64.He)(this.serverName, "No code verifier saved"), Error("No code verifier saved");
    return (0, import_chunk_k449cc64.He)(this.serverName, "Returning code verifier"), this._presented.record(this._codeVerifier), this._codeVerifier;
  }
  _pendingSdkRefreshes = /* @__PURE__ */ new Set();
  grantedSdkRefreshCount = 0;
  rewrittenRefusalCount = 0;
  lastRefreshWasRewritten = false;
  hasServerAnswered = false;
  async rewriteRefusedRefresh(e, r) {
    let o = r?.body instanceof URLSearchParams && r.body.get("grant_type") === "refresh_token" ? r.body.get("refresh_token") : null;
    if (o === null) {
      let U = await e();
      return this.hasServerAnswered ||= U.status !== 401 && typeof r?.body === "string" && (0, import_chunk_fkbh0xha.Vor)(r), U;
    }
    this.lastRefreshWasRewritten = false;
    let i = this._lastServedAccessToken, h = this.grantedSdkRefreshCount, v = e().then(async (U) => {
      let E = await U.clone().json().catch(() => {
        return;
      });
      return { response: U, body: E };
    });
    this._pendingSdkRefreshes.add(v);
    let { response: y, body: k } = await v.finally(() => this._pendingSdkRefreshes.delete(v)), g = import_chunk_racn22qq.cJt.safeParse(k);
    if (y.ok && g.success) return this.grantedSdkRefreshCount++, y;
    let T = import_chunk_racn22qq.uJt.safeParse(k), O = y.ok ? Jt : tt;
    if (!T.success || !(y.ok || y.status === 400 || y.status === 401) || O.has(T.data.error)) return y;
    let C = r?.signal ?? void 0;
    if (!(this._pendingSdkRefreshes.size === 0 || await Promise.race([Promise.allSettled(this._pendingSdkRefreshes).then(() => true), (0, import_chunk_5appeerh.K)(qt, C, { unref: true }).then(() => false)]))) return y;
    await (0, import_chunk_5appeerh.K)(Vt, C);
    let P = await (async () => {
      let U = (0, import_chunk_zzrn5zap.Er)();
      return await (U.readAsyncStrict?.(void 0, { inaccessibleAs: "failureIfTransient" }) ?? U.readAsync());
    })().catch((U) => ((0, import_chunk_k449cc64.He)(this.serverName, `Reading the stored sign-in failed: ${(0, import_chunk_jv7av99m.d)(U)}`), null)), I = P === import_chunk_zzrn5zap.bs ? void 0 : P?.mcpOAuth?.[(0, import_chunk_yz5b8aaa.kc)(this.serverName, this.serverConfig)];
    if (C?.aborted || this.grantedSdkRefreshCount !== h || I?.refreshToken !== o || I.accessToken !== i) return y;
    return (0, import_chunk_k449cc64.He)(this.serverName, "The token refresh was refused with an error code that the MCP SDK does not handle, and the stored sign-in has not changed since: asking for a new sign-in"), this.rewrittenRefusalCount++, this.lastRefreshWasRewritten = true, new Response((0, import_chunk_w578pjby._)({ error: import_chunk_racn22qq.DY.ServerError }), { status: 400, headers: { "Content-Type": "application/json" } });
  }
  async invalidateCredentials(e) {
    if (e === "verifier") {
      this._codeVerifier = void 0, (0, import_chunk_k449cc64.He)(this.serverName, "Invalidated credentials (scope: verifier)");
      return;
    }
    let r = e, o = (0, import_chunk_yz5b8aaa.kc)(this.serverName, this.serverConfig), i = false;
    try {
      let h = this._lastServedClientId, v = this._lastServedAccessToken, y = this._lastServedRefreshToken;
      await (0, import_chunk_zzrn5zap.Er)().mutate((k) => {
        let g = k.mcpOAuth?.[o];
        if (!g) return k;
        let T = { ...k.mcpOAuth };
        switch (r) {
          case "all": {
            let O = v != null && !!g.accessToken && g.accessToken !== v, C = h != null && g.clientId != null && g.clientId !== h;
            if (O || C) return (0, import_chunk_k449cc64.He)(this.serverName, `invalidateCredentials('all') preserved: ${O ? "foreign token" : "concurrent re-registration"}`), k;
            if (!g.clientId && !g.refreshToken && g.accessToken === "") return k;
            T[o] = { serverName: g.serverName, serverUrl: g.serverUrl, accessToken: "", expiresAt: g.accessToken || g.refreshToken ? 0 : g.expiresAt, ...g.discoveryState && { discoveryState: g.discoveryState }, ...g.stepUpScope && { stepUpScope: g.stepUpScope } };
            break;
          }
          case "client":
            T[o] = { ...g, clientId: void 0, clientSecret: void 0 };
            break;
          case "tokens": {
            if (!g.accessToken && !g.refreshToken) return k;
            if (y != null && g.refreshToken && g.refreshToken !== y || v != null && !!g.accessToken && g.accessToken !== v) return (0, import_chunk_k449cc64.He)(this.serverName, "invalidateCredentials('tokens') preserved: concurrent rotation"), k;
            T[o] = { ...g, accessToken: "", refreshToken: void 0, expiresAt: 0 };
            break;
          }
          case "discovery": {
            if (!g.discoveryState?.authorizationServerMetadata) return (0, import_chunk_k449cc64.He)(this.serverName, "invalidateCredentials('discovery') preserved: concurrent URL-only re-save"), k;
            T[o] = { ...g, discoveryState: (0, import_chunk_271xsh6x.Vho)(g.discoveryState) };
            break;
          }
        }
        return i = true, { ...k, mcpOAuth: T };
      });
    } catch (h) {
      (0, import_chunk_k449cc64.He)(this.serverName, `invalidateCredentials persist failed: ${(0, import_chunk_jv7av99m.d)(h)}`);
    }
    if (i) (0, import_chunk_k449cc64.He)(this.serverName, `Invalidated credentials (scope: ${e})`);
  }
  async saveDiscoveryState(e) {
    if (e.authorizationServerMetadata) TYr({ serverName: this.serverName, site: "sdk_auth", expectedIssuer: e.authorizationServerUrl, receivedIssuer: e.authorizationServerMetadata.issuer, serverConfig: this.serverConfig });
    if (this.serverConfig.oauth?.xaa) return;
    this._flowDiscoveryState = e, this._flowDiscoveryStateAt = Date.now(), this._flowDiscoveryStateFromConfiguredUrl = false;
    let r = (0, import_chunk_yz5b8aaa.kc)(this.serverName, this.serverConfig);
    (0, import_chunk_k449cc64.He)(this.serverName, `Saving discovery state (authServer: ${(0, import_chunk_jbjjrhxt.bu)(e.authorizationServerUrl)})`);
    let o = e.authorizationServerMetadata;
    this.registrationOfferedByDiscovery = o !== void 0 && (typeof o.registration_endpoint === "string" || o.client_id_metadata_document_supported === true && Ie(this.redirectUri));
    let i = { authorizationServerUrl: e.authorizationServerUrl, oauthMetadataFound: !!e.authorizationServerMetadata }, h = (e.authorizationServerMetadata !== void 0 ? this._servedOverrideDocuments.get(e.authorizationServerMetadata) : void 0) ?? this.servedMetadataUrl();
    this._discoveredAuthorizationServer = { ...i, servedMetadataUrl: h };
    try {
      await (0, import_chunk_zzrn5zap.Er)().mutate((v) => {
        let y = (0, import_chunk_271xsh6x.Rpl)({ previous: v.mcpOAuth?.[r]?.discoveryState, discovered: i, servedMetadataUrl: h });
        return { ...v, mcpOAuth: { ...v.mcpOAuth, [r]: { ...v.mcpOAuth?.[r], serverName: this.serverName, serverUrl: this.serverConfig.url, accessToken: v.mcpOAuth?.[r]?.accessToken || "", expiresAt: v.mcpOAuth?.[r]?.expiresAt, discoveryState: { ...y, resourceMetadataUrl: e.resourceMetadataUrl, tokenlessRejectedAt: (0, import_chunk_vp3hv9ky.z$a)(r, v.mcpOAuth?.[r]), registrationNotOfferedAt: o === void 0 ? v.mcpOAuth?.[r]?.discoveryState?.registrationNotOfferedAt : typeof o.registration_endpoint !== "string" && o.client_id_metadata_document_supported !== true ? Date.now() : void 0 } } } };
      });
    } catch (v) {
      (0, import_chunk_k449cc64.He)(this.serverName, `saveDiscoveryState persist failed: ${(0, import_chunk_jv7av99m.d)(v)}`);
    }
  }
  servePolicyCheckedDiscoveryState(e) {
    if (e?.authorizationServerMetadata && e.authorizationServerUrl) try {
      TYr({ serverName: this.serverName, site: "persisted_state", expectedIssuer: e.authorizationServerUrl, receivedIssuer: e.authorizationServerMetadata.issuer, serverConfig: this.serverConfig });
    } catch (r) {
      if (r instanceof Sie && this._flowDiscoveryState === e) this._flowDiscoveryState = void 0, this._flowDiscoveryStateAt = 0;
      throw r;
    }
    return e;
  }
  servedMetadataUrl() {
    return this._servedOverrideAuthorizationServerUrl === void 0 ? void 0 : this.serverConfig.oauth?.authServerMetadataUrl;
  }
  async discoveryState() {
    this._servedOverrideAuthorizationServerUrl = void 0;
    let e = this.serverConfig.oauth?.authServerMetadataUrl;
    if (this.authChallengeOpen) {
      let k = await this.readCredentialStore();
      if (this._pendingStepUpScope !== void 0 || !k?.mcpOAuth?.[(0, import_chunk_yz5b8aaa.kc)(this.serverName, this.serverConfig)]?.refreshToken) this.refuseToStartSignIn();
    }
    let r = await ae(this.serverName, this.serverConfig);
    if (this._xaaPin = r, r === import_chunk_zzrn5zap.bs) {
      if (this.serverConfig.oauth?.xaa) throw new import_chunk_yz5b8aaa.AAt(this.serverName);
    } else if (r) return { authorizationServerUrl: r };
    if (e) {
      (0, import_chunk_k449cc64.He)(this.serverName, `Fetching metadata from configured URL: ${(0, import_chunk_jbjjrhxt.bu)(e)}`);
      try {
        let k = await ye(this.serverName, this.serverConfig.url, { configuredMetadataUrl: e, fetchFn: ie(this.serverName, this.serverConfig, vYr(this.serverConfig)) });
        if (k) {
          let g = { authorizationServerUrl: k.issuer, authorizationServerMetadata: k };
          return this._servedOverrideAuthorizationServerUrl = k.issuer, this._servedOverrideDocuments.set(k, e), this._flowDiscoveryState = g, this._flowDiscoveryStateFromConfiguredUrl = true, this.servePolicyCheckedDiscoveryState(g);
        }
      } catch (k) {
        if ((0, import_chunk_3fqcfedz.OMe)(k)) throw k;
        (0, import_chunk_k449cc64.He)(this.serverName, `Failed to fetch from configured metadata URL: ${(0, import_chunk_jbjjrhxt.Ztt)(k, this.serverConfig.url)}`);
      }
      if (this._flowDiscoveryStateFromConfiguredUrl) this._servedOverrideAuthorizationServerUrl = this._flowDiscoveryState?.authorizationServerUrl;
      return this.servePolicyCheckedDiscoveryState(this._flowDiscoveryState);
    }
    if (this._flowDiscoveryState && Date.now() - this._flowDiscoveryStateAt < et) return this.servePolicyCheckedDiscoveryState(this._flowDiscoveryState);
    let o = this._flowDiscoveryStateAt, h = await (0, import_chunk_zzrn5zap.Er)().readAsync();
    if (this._flowDiscoveryState && this._flowDiscoveryStateAt !== o && Date.now() - this._flowDiscoveryStateAt < et) return this.servePolicyCheckedDiscoveryState(this._flowDiscoveryState);
    let v = (0, import_chunk_yz5b8aaa.kc)(this.serverName, this.serverConfig), y = h?.mcpOAuth?.[v]?.discoveryState;
    if (y?.authorizationServerUrl) {
      (0, import_chunk_k449cc64.He)(this.serverName, `Returning cached discovery state (authServer: ${(0, import_chunk_jbjjrhxt.bu)(y.authorizationServerUrl)})`);
      let k = { authorizationServerUrl: y.authorizationServerUrl, resourceMetadataUrl: y.resourceMetadataUrl, resourceMetadata: y.resourceMetadata, authorizationServerMetadata: y.authorizationServerMetadata };
      try {
        this.servePolicyCheckedDiscoveryState(k);
      } catch (g) {
        if (g instanceof Sie) {
          if (await this.invalidateCredentials("discovery").catch(() => {
          }), this._flowDiscoveryStateAt === o) this._flowDiscoveryState = void 0, this._flowDiscoveryStateAt = 0;
        }
        throw g;
      }
      return this._flowDiscoveryStateFromConfiguredUrl = false, this._flowDiscoveryState = k;
    }
    return this.servePolicyCheckedDiscoveryState(this._flowDiscoveryState);
  }
  async refreshAuthorization(e) {
    if ((0, import_chunk_f9x2f6cx.Y)()) {
      (0, import_chunk_k449cc64.He)(this.serverName, "claude-code-server session; skipping refresh");
      return;
    }
    let r = (0, import_chunk_yz5b8aaa.kc)(this.serverName, this.serverConfig), o = (0, import_chunk_hazyxdac.KX)();
    await (0, import_chunk_w578pjby.le)().mkdir(o);
    let i = (0, import_chunk_kj84g0v7.Kri)(o, r), h;
    for (let v = 0; v < be; v++) try {
      (0, import_chunk_k449cc64.He)(this.serverName, `Acquiring refresh lock (attempt ${v + 1})`), h = await (0, import_chunk_2yx6c1y2.Rc)(i, { realpath: false, stale: 6e4, update: 5e3, onCompromised: () => {
        (0, import_chunk_k449cc64.He)(this.serverName, "Refresh lock was compromised");
      } }), (0, import_chunk_k449cc64.He)(this.serverName, "Acquired refresh lock");
      break;
    } catch (y) {
      let k = (0, import_chunk_jv7av99m.w)(y);
      if (k === "ELOCKED") {
        (0, import_chunk_k449cc64.He)(this.serverName, `Refresh lock held by another process, waiting (attempt ${v + 1}/${be})`), await (0, import_chunk_5appeerh.K)(1e3 + Math.random() * 1e3);
        continue;
      }
      (0, import_chunk_k449cc64.He)(this.serverName, `Failed to acquire refresh lock: ${k}; skipping refresh`);
      return;
    }
    if (!h) {
      (0, import_chunk_k449cc64.He)(this.serverName, `Could not acquire refresh lock after ${be} retries; skipping refresh`);
      return;
    }
    try {
      let { tokenData: v, freshTokens: y } = await this.readConcurrentRefreshWinner();
      if (y) return y;
      if (v?.refreshToken) e = v.refreshToken, this._lastServedRefreshToken = v.refreshToken, this._presented.record(v.refreshToken);
      let k = this.servedSignIns.clearsAt(e);
      if ((0, import_chunk_kj84g0v7.uRn)(r, k)) {
        (0, import_chunk_k449cc64.He)(this.serverName, "Sign-in was cleared; skipping refresh");
        return;
      }
      return await this._doRefresh(e, k);
    } finally {
      if (h) try {
        await h(), (0, import_chunk_k449cc64.He)(this.serverName, "Released refresh lock");
      } catch {
        (0, import_chunk_k449cc64.He)(this.serverName, "Failed to release refresh lock");
      }
    }
  }
  async readConcurrentRefreshWinner() {
    (0, import_chunk_hazyxdac.GPe)();
    let e = (0, import_chunk_yz5b8aaa.kc)(this.serverName, this.serverConfig), r = (0, import_chunk_kj84g0v7.nJt)(e), i = (await (0, import_chunk_zzrn5zap.Er)().readAsync())?.mcpOAuth?.[e];
    if (i?.accessToken) this.servedSignIns.served(r, i.accessToken, i.refreshToken);
    let h = i?.expiresAt != null ? (i.expiresAt - Date.now()) / 1e3 : void 0;
    if (i?.accessToken && (h == null || h > 300)) {
      (0, import_chunk_k449cc64.He)(this.serverName, "Another process landed fresh tokens; using those");
      let v = { access_token: i.accessToken, refresh_token: i.refreshToken, expires_in: h, scope: i.scope, token_type: "Bearer" };
      return { tokenData: i, freshTokens: v };
    }
    return { tokenData: i, freshTokens: void 0 };
  }
  async _doRefresh(e, r) {
    this._presented.record(e);
    let o = 3, i = (0, import_chunk_bzyb60p0.Nie)(this.serverConfig), h = (v, y) => {
      (0, import_chunk_y53wbr8a.a)(v === "success" ? "tengu_mcp_oauth_refresh_success" : "tengu_mcp_oauth_refresh_failure", { transportType: (0, import_chunk_78g0060s.f)(this.serverConfig.type), ...i && { mcpServerBaseUrl: i }, ...y && { reason: (0, import_chunk_78g0060s.f)(y) } });
    };
    for (let v = 1; v <= o; v++) {
      let y;
      try {
        (0, import_chunk_k449cc64.He)(this.serverName, "Starting token refresh");
        let k = ie(this.serverName, this.serverConfig, vYr(this.serverConfig)), g = ke() ? "enforce" : "observe", T = this._metadataEchoMode === g ? this._metadata : void 0;
        if (!T) {
          let C = await this.discoveryState();
          if (C?.authorizationServerMetadata) T = C.authorizationServerMetadata;
          else if (C?.authorizationServerUrl) {
            (0, import_chunk_k449cc64.He)(this.serverName, `Re-discovering metadata from persisted auth server URL: ${(0, import_chunk_jbjjrhxt.bu)(C.authorizationServerUrl)}`);
            let R = C.authorizationServerUrl;
            if (T = await (0, import_chunk_racn22qq.yRn)(R, { fetchFn: k, skipIssuerValidation: true }), T) TYr({ serverName: this.serverName, site: "refresh_rediscovery", expectedIssuer: R, receivedIssuer: T.issuer, serverConfig: this.serverConfig });
          }
        }
        if (!T && !this.serverConfig.oauth?.xaa && await ae(this.serverName, this.serverConfig) === void 0) T = await ye(this.serverName, this.serverConfig.url, { configuredMetadataUrl: this.serverConfig.oauth?.authServerMetadataUrl, fetchFn: k, serverConfigForAnalytics: this.serverConfig });
        if (!T) {
          (0, import_chunk_k449cc64.He)(this.serverName, "Failed to discover OAuth metadata"), h("failure", "metadata_discovery_failed"), (0, import_chunk_cqa9hrgx.m)("mcp_oauth_refresh", "mcp_oauth_refresh_metadata_failed");
          return;
        }
        if (this._metadata = T, this._metadataEchoMode = ke() ? "enforce" : "observe", y = await this.clientInformation(), !y) {
          (0, import_chunk_k449cc64.He)(this.serverName, "No client information available"), h("failure", "no_client_info"), (0, import_chunk_cqa9hrgx.m)("mcp_oauth_refresh", "mcp_oauth_refresh_no_client_info");
          return;
        }
        if ((0, import_chunk_sppbt6xz.s1)()) this._xaaPin = await ae(this.serverName, this.serverConfig);
        let O = await (0, import_chunk_racn22qq.poi)(new URL(this.serverConfig.url), { metadata: T, clientInformation: y, refreshToken: e, resource: new URL(this.serverConfig.url), fetchFn: k, allowInsecureTokenEndpoint: this.allowInsecureTokenEndpoint });
        if (O) return (0, import_chunk_k449cc64.He)(this.serverName, "Token refresh successful"), this.servedSignIns.granted(r, O.access_token, O.refresh_token), await this.saveTokens(O), h("success"), (0, import_chunk_cqa9hrgx.u)("mcp_oauth_refresh"), (0, import_chunk_kj84g0v7.uRn)((0, import_chunk_yz5b8aaa.kc)(this.serverName, this.serverConfig), r) ? void 0 : O;
        (0, import_chunk_k449cc64.He)(this.serverName, "Token refresh returned no tokens"), h("failure", "no_tokens_returned"), (0, import_chunk_cqa9hrgx.m)("mcp_oauth_refresh", "mcp_oauth_refresh_no_tokens");
        return;
      } catch (k) {
        if (k instanceof Sie) {
          (0, import_chunk_k449cc64.He)(this.serverName, `Token refresh denied by issuer-echo policy: ${(0, import_chunk_jv7av99m.d)(k)}`), h("failure", "issuer_echo_denied"), (0, import_chunk_cqa9hrgx.m)("mcp_oauth_refresh", "mcp_oauth_refresh_issuer_echo_denied");
          return;
        }
        if (k instanceof import_chunk_racn22qq.bie && k.code === import_chunk_racn22qq.DY.InvalidGrant) {
          (0, import_chunk_k449cc64.He)(this.serverName, `Token refresh failed with invalid_grant: ${k.message}`);
          let { freshTokens: P } = await this.readConcurrentRefreshWinner();
          if (P) return (0, import_chunk_cqa9hrgx.l)("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner"), P;
          (0, import_chunk_k449cc64.He)(this.serverName, "No valid tokens in storage, clearing stored tokens"), h("failure", "invalid_grant"), (0, import_chunk_cqa9hrgx.m)("mcp_oauth_refresh", "mcp_oauth_refresh_invalid_grant"), await this.invalidateCredentials("tokens"), import_chunk_htn4d0yq.d0t.emit(this.serverName);
          return;
        }
        if (k instanceof import_chunk_racn22qq.bie && (k.code === "invalid_client" || k.code === "unauthorized_client")) {
          (0, import_chunk_k449cc64.He)(this.serverName, "Token refresh failed: DCR client expired or invalid; clearing stored client registration");
          let { tokenData: P, freshTokens: I } = await this.readConcurrentRefreshWinner();
          if (I) return (0, import_chunk_cqa9hrgx.l)("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner"), I;
          if (P?.clientId && y && P.clientId !== y.client_id) {
            (0, import_chunk_k449cc64.He)(this.serverName, "Another process re-registered client; preserving"), h("failure", "concurrent_reregister"), (0, import_chunk_cqa9hrgx.l)("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_reregister");
            return;
          }
          h("failure", k.code === "unauthorized_client" ? "unauthorized_client" : "invalid_client"), (0, import_chunk_cqa9hrgx.m)("mcp_oauth_refresh", k.code === "unauthorized_client" ? "mcp_oauth_refresh_unauthorized_client" : "mcp_oauth_refresh_invalid_client"), await this.invalidateCredentials("all"), import_chunk_htn4d0yq.d0t.emit(this.serverName);
          return;
        }
        if (xe(k)) {
          (0, import_chunk_k449cc64.He)(this.serverName, `Token refresh failed: token response rejected by SDK schema: ${(0, import_chunk_jv7av99m.d)(k)}`), h("failure", "token_response_schema_rejected"), (0, import_chunk_cqa9hrgx.m)("mcp_oauth_refresh", "mcp_oauth_refresh_token_response_schema_rejected");
          return;
        }
        let g = k instanceof import_chunk_yz5b8aaa.AAt, T = k instanceof Error && /timeout|timed out|etimedout|econnreset/i.test(k.message), O = k instanceof import_chunk_racn22qq.bie && (k.code === import_chunk_racn22qq.DY.ServerError || k.code === import_chunk_racn22qq.DY.TemporarilyUnavailable || k.code === import_chunk_racn22qq.DY.TooManyRequests || !tt.has(k.code)), C = T || O || g;
        if (!C || v >= o) {
          (0, import_chunk_k449cc64.He)(this.serverName, `Token refresh failed: ${(0, import_chunk_jbjjrhxt.Ztt)(k, this.serverConfig.url)}`), h("failure", C ? "transient_retries_exhausted" : "request_failed"), (0, import_chunk_cqa9hrgx.m)("mcp_oauth_refresh", "mcp_oauth_refresh_request_failed");
          return;
        }
        let R = 1e3 * Math.pow(2, v - 1);
        (0, import_chunk_k449cc64.He)(this.serverName, `Token refresh failed, retrying in ${R}ms (attempt ${v}/${o})`), await (0, import_chunk_5appeerh.K)(R);
      }
    }
    return;
  }
}
async function sJl() {
  let e = process.env.MCP_CLIENT_SECRET;
  if (e) return e;
  if (!process.stdin.isTTY) throw Error("No TTY available to prompt for client secret. Set MCP_CLIENT_SECRET env var instead.");
  return new Promise((r, o) => {
    process.stderr.write("Enter OAuth client secret: "), process.stdin.setRawMode?.(true);
    let i = "", h = (v) => {
      let y = v.toString();
      if (y === `
` || y === "\r") process.stdin.setRawMode?.(false), process.stdin.removeListener("data", h), process.stderr.write(`
`), r(i);
      else if (y === "") process.stdin.setRawMode?.(false), process.stdin.removeListener("data", h), o(Error("Cancelled"));
      else if (y === "\x7F" || y === "\b") i = i.slice(0, -1);
      else i += y;
    };
    process.stdin.on("data", h);
  });
}
async function iJl(e, r, o) {
  let i = (0, import_chunk_yz5b8aaa.kc)(e, r);
  try {
    return await (0, import_chunk_zzrn5zap.Er)().mutate((h) => ({ ...h, mcpOAuthClientConfig: { ...h.mcpOAuthClientConfig, [i]: { clientSecret: o } } }));
  } catch (h) {
    return { success: false, warning: (0, import_chunk_jv7av99m.d)(h) };
  }
}
async function aJl(e, r) {
  let o = (0, import_chunk_yz5b8aaa.kc)(e, r);
  await (0, import_chunk_zzrn5zap.Er)().mutate((i) => {
    if (!i.mcpOAuthClientConfig?.[o]) return i;
    let h = { ...i.mcpOAuthClientConfig };
    return delete h[o], { ...i, mcpOAuthClientConfig: h };
  });
}
async function F$a(e, r) {
  let i = await (0, import_chunk_zzrn5zap.Er)().readAsync(), h = (0, import_chunk_yz5b8aaa.kc)(e, r);
  return i?.mcpOAuthClientConfig?.[h];
}
function ut(e) {
  if (!e) return;
  if ("scope" in e && typeof e.scope === "string") return e.scope;
  if ("default_scope" in e && typeof e.default_scope === "string") return e.default_scope;
  return;
}
function Rzl(e, r) {
  if (e !== null && e.split(" ").includes("offline_access")) return e;
  if (!r?.scopes_supported?.includes("offline_access")) return e;
  return e === null ? "offline_access" : `${e} offline_access`;
}
var Yt = ["login.microsoftonline.com", "login.microsoftonline.us", "login.partner.microsoftonline.cn", "login.chinacloudapi.cn"], Zt = [".b2clogin.com", ".ciamlogin.com"];
function xzl(e) {
  try {
    let r = (typeof e === "string" ? new URL(e) : e).hostname;
    return Yt.includes(r) || Zt.some((o) => r.endsWith(o));
  } catch {
    return false;
  }
}
