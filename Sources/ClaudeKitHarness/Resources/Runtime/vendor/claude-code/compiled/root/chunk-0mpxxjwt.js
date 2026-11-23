const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_0mpxxjwt_exports = {};
__export(chunk_0mpxxjwt_exports, {
  QGs: () => QGs,
  TSa: () => TSa,
  X9t: () => X9t,
  aXn: () => aXn,
  d$e: () => d$e,
  iXn: () => iXn,
  l8l: () => l8l
});
module.exports = __toCommonJS(chunk_0mpxxjwt_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_8j3h6yzg = require("/$bunfs/root/chunk-8j3h6yzg.js");
var import_chunk_zwfq7wpn = require("/$bunfs/root/chunk-zwfq7wpn.js");
var import_chunk_tbvdyndw = require("/$bunfs/root/chunk-tbvdyndw.js");
var import_chunk_f2cpz56c = require("/$bunfs/root/chunk-f2cpz56c.js");
var import_chunk_sr33d2zd = require("/$bunfs/root/chunk-sr33d2zd.js");
var import_chunk_mw2v4wks = require("/$bunfs/root/chunk-mw2v4wks.js");
var import_chunk_ez1sysdb = require("/$bunfs/root/chunk-ez1sysdb.js");
var import_chunk_9yrg7phs = require("/$bunfs/root/chunk-9yrg7phs.js");
var import_chunk_n6f4f9sf = require("/$bunfs/root/chunk-n6f4f9sf.js");
var import_chunk_m417dzmj = require("/$bunfs/root/chunk-m417dzmj.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_crypto = require("crypto");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
function Se(e) {
  return typeof e === "object" && e !== null && "type" in e && (e.type === "token_update" || e.type === "auth_401_result");
}
function _e(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "auth_401";
}
var be = 3e5, Z = 24e4, Ce = 3e5, Re = 3e4, Ee = 864e5;
function ye() {
  return import_chunk_hkvzj051.at.state("daemon-auth-cooldown");
}
function Pe() {
  return import_chunk_hkvzj051.at.state("daemon-auth-status");
}
function TSa(e, r, f, h, y, v = () => false) {
  let k = () => ({ usesLoginOffFirstParty: f() }), w, S = false, g = null, T = /* @__PURE__ */ new Set(), R = null, W = null;
  function I() {
    return W ??= Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-3n4jnb8b.js")));
  }
  function z(s) {
    let m = { type: "token_update", accessToken: s };
    for (let b of T) try {
      b.send(m);
    } catch {
    }
  }
  let Y;
  async function re(s, m = false) {
    if (Y === s || (0, import_chunk_cg8dqz0a.x)() !== "macos" || !(m || v()) || (0, import_chunk_k449cc64.wt)()) return;
    Y = s;
    try {
      let b = await I();
      if (b.isUsing3PServices() && !k().usesLoginOffFirstParty) {
        Q(s);
        return;
      }
      if (await b.getClaudeAIOAuthTokenOriginAsync(y) !== "store") return;
      let { validateOauthTokenWithOutcome: o, isTransientValidateFailure: a } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-11gqzp8f.js"))), C = await o(s);
      if (!C.ok) {
        let ee = a(C);
        if (ee) Q(s);
        (0, import_chunk_cqa9hrgx.l)("daemon_snapshot_org_lookup", C.reason, { transient: ee }), r(`auth: token organization lookup: no answer (${C.reason})`);
        return;
      }
      let O = C.data?.organization_uuid, L = typeof O === "string" && O ? O : null;
      if ((0, import_chunk_cqa9hrgx.u)("daemon_snapshot_org_lookup", { named: L !== null }), w?.accessToken === s) w = { ...w, organizationUuid: L };
    } catch {
      Q(s), r("auth: token organization lookup failed");
    }
  }
  function Q(s) {
    if (Y === s) Y = void 0;
  }
  function X(s) {
    w = { accessToken: s.accessToken, scopes: s.scopes, subscriptionType: s.subscriptionType ?? null, rateLimitTier: s.rateLimitTier ?? null, organizationUuid: null }, re(s.accessToken);
  }
  async function N() {
    let m = await (await I()).getClaudeAIOAuthTokensAsync(y);
    if (m?.accessToken && m.accessToken !== w?.accessToken) X(m), z(m.accessToken);
    M(m?.expiresAt ?? null);
  }
  let ie, H = false;
  function j(s) {
    if (ie = s, R || e.aborted) return;
    if (g) clearTimeout(g), g = null;
    r("auth: no token found, will re-check keychain every 30s"), R = setInterval(function() {
      I().then(async (b) => {
        let o = b.isUsing3PServices() && !f() && !v();
        if (o !== H) H = o, r(o ? "auth: re-check skips the keychain (3P provider, no worker uses the token)" : "auth: re-check reads the keychain again");
        if (o) return;
        b.clearOAuthTokenCache();
        let a = await b.getClaudeAIOAuthTokensAsync(y), C;
        if (a?.accessToken && a.accessToken !== ie && a.expiresAt && a.expiresAt > Date.now()) C = "auth: token found via keychain re-check";
        else if (a?.refreshToken && await b.checkAndRefreshOAuthTokenIfNeeded({ credentials: y, storageV5: h, ...k() })) C = "auth: token refreshed via keychain re-check retry";
        if (C) {
          if (await N(), w && R) clearInterval(R), R = null, r(C);
        }
      }).catch((b) => r(`auth: keychain re-check error: ${b}`));
    }, Re), R.unref();
  }
  function M(s) {
    if (g) clearTimeout(g), g = null;
    if (!s || e.aborted) return;
    let m = Math.min(Math.max(s - Date.now() - Z, 5e3), Ee);
    r(`auth: scheduling proactive refresh in ${Math.round(m / 1e3)}s`), g = setTimeout(se, m), g.unref();
  }
  async function se() {
    if (e.aborted) return;
    try {
      r("auth: proactive refresh starting");
      let s = await I(), m = w?.accessToken, b = await s.checkAndRefreshOAuthTokenIfNeededWithOutcome({ credentials: y, storageV5: h, ...k() }), o = b === "refreshed";
      s.clearOAuthTokenCache();
      let a = await s.getClaudeAIOAuthTokensAsync(y), C = a?.expiresAt ?? null, O = C === null || C > Date.now() + be;
      if (a?.accessToken && (o || a.accessToken !== m || O) && (C === null || C > Date.now() + Z)) {
        await N(), r(o ? "auth: proactive refresh succeeded" : "auth: token still valid (cross-process refresh or not yet due)");
        return;
      }
      if (a?.accessToken && C !== null && C > Date.now()) {
        r("auth: proactive refresh failed, retrying in ~60s (token still valid)"), M(Date.now() + 6e4 + Z);
        return;
      }
      if (b === "store_write_refused") {
        r("auth: proactive refresh not sent, the Keychain would not save, retrying in ~60s"), M(Date.now() + 6e4 + Z);
        return;
      }
      r("auth: proactive refresh failed, signalling re-auth required");
      let L = a?.accessToken ?? m;
      w = void 0, await ue(), j(L);
    } catch (s) {
      r(`auth: proactive refresh error: ${s}`), M(Date.now() + 6e4 + Z);
    }
  }
  async function ae(s) {
    if (S) return r("auth: 401 ignored (3P provider active, no OAuth)"), false;
    r("auth: handling 401");
    let m = await I(), b;
    if (await m.handleOAuth401Error(s, y, h, { ...k(), onForcedRefreshOutcome: (C) => {
      b = C;
    } })) return m.clearOAuthTokenCache(), await N(), r("auth: 401 recovery succeeded"), true;
    if (b === "store_write_refused") return r("auth: 401 recovery stopped, no refresh token sent, the Keychain would not save"), j(s), M(Date.now() + 6e4 + Z), false;
    r("auth: 401 recovery failed, signalling re-auth required"), w = void 0, await ue(), m.clearOAuthTokenCache();
    let a = await m.getClaudeAIOAuthTokensAsync(y);
    if (a?.accessToken !== void 0 && a.accessToken !== s) return await N(), true;
    return j(s), false;
  }
  let U = null;
  function ue() {
    if (U) return U;
    return U = ce().finally(() => {
      U = null;
    }), U;
  }
  async function ce() {
    let s = await I();
    if (s.getAnthropicApiKey()) {
      r("auth: browser login skipped (API key auth available)");
      return;
    }
    if (s.isUsing3PServices() && !f()) {
      r("auth: browser login skipped (3P provider, no OAuth-consuming worker)");
      return;
    }
    let m = (0, import_chunk_2gtmjt3y.Ze)(), b = (0, import_path.join)(m, "daemon-auth-cooldown"), o = (0, import_path.join)(m, "daemon-auth-status.json");
    try {
      let a;
      if ((0, import_chunk_m15w38ag.ne)() && h !== void 0) {
        let O = await h.read([ye()]);
        if (!O.ok) throw new import_chunk_jv7av99m.A(`v5 cooldown read failed: ${O.error.code}${"telemetryCode" in O.error && O.error.telemetryCode ? ` (${O.error.telemetryCode})` : ""}`, "daemon-auth v5 cooldown read failed");
        let L = O.value.items[0];
        a = L.found ? Buffer.from(L.value).toString("utf8") : null;
      } else a = await (0, import_chunk_8j3h6yzg.Vn)().read(b);
      let C = a === null ? NaN : parseInt(a, 10);
      if (!Number.isNaN(C) && Date.now() - C < Ce) {
        r("auth: browser login skipped (cooldown)");
        return;
      }
    } catch (a) {
      if (!(0, import_chunk_jv7av99m.J)(a)) r(`auth: cooldown read error: ${a}`);
    }
    try {
      if (await (0, import_chunk_8j3h6yzg.Vn)().mkdir(m), (0, import_chunk_m15w38ag.ne)() && h !== void 0) {
        let a = await h.write(ye(), String(Date.now()), { publishDiscipline: "inPlace" });
        if (!a.ok) throw new import_chunk_jv7av99m.A(`v5 cooldown write failed: ${a.error.code}${"telemetryCode" in a.error && a.error.telemetryCode ? ` (${a.error.telemetryCode})` : ""}`, "daemon-auth v5 cooldown write failed");
      } else await (0, import_chunk_8j3h6yzg.Vn)().write(b, String(Date.now()));
    } catch (a) {
      r(`auth: cooldown write error: ${a}`);
    }
    try {
      let { execFileNoThrow: a } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-hyafcq86.js")));
      a("osascript", ["-e", 'display notification "Log in to Claude Code again" with title "Claude"']);
    } catch {
    }
    try {
      if ((0, import_chunk_m15w38ag.ne)() && h !== void 0) {
        let a = await h.write(Pe(), (0, import_chunk_w578pjby._)({ status: "auth_required", since: Date.now() }), { publishDiscipline: "inPlace" });
        if (!a.ok) throw new import_chunk_jv7av99m.A(`v5 status write failed: ${a.error.code}${"telemetryCode" in a.error && a.error.telemetryCode ? ` (${a.error.telemetryCode})` : ""}`, "daemon-auth v5 status write failed");
      } else await (0, import_chunk_8j3h6yzg.Vn)().write(o, (0, import_chunk_w578pjby._)({ status: "auth_required", since: Date.now() }));
    } catch (a) {
      r(`auth: status write error: ${a}`);
    }
    r("auth: headless daemon cannot complete OAuth \u2014 run `claude auth login` to refresh");
  }
  function V(s) {
    if (!_e(s)) return;
    ae(s.failedToken).then((m) => {
      for (let b of T) try {
        let o = { type: "auth_401_result", refreshed: m, requestId: s.requestId };
        b.send(o);
      } catch {
      }
    }).catch((m) => {
      r(`auth: 401 handler error: ${m}`);
      for (let b of T) try {
        let o = { type: "auth_401_result", refreshed: false, requestId: s.requestId };
        b.send(o);
      } catch {
      }
    });
  }
  function fe(s) {
    if (T.add(s), s.on("message", V), w) try {
      let m = { type: "token_update", accessToken: w.accessToken };
      s.send(m);
    } catch {
    }
  }
  function de(s) {
    s.removeListener("message", V), T.delete(s);
  }
  let le = (async () => {
    if (e.aborted) return;
    try {
      let s = await I(), m = await s.getClaudeAIOAuthTokensAsync(y);
      if (!m?.accessToken && s.isUsing3PServices()) {
        S = true, r("auth: 3P provider active, skipping OAuth refresh loop");
        return;
      }
      if (m?.accessToken) X(m), M(m.expiresAt ?? null);
      await s.checkAndRefreshOAuthTokenIfNeeded({ credentials: y, storageV5: h, ...k() }), await N();
    } catch (s) {
      r(`auth: init error: ${s}`);
    }
  })();
  return le.then(() => {
    if (e.aborted || w || S) return;
    j();
  }), e.addEventListener("abort", () => {
    if (g) clearTimeout(g), g = null;
    if (R) clearInterval(R), R = null;
  }, { once: true }), { ready: le, getAccessToken() {
    return w?.accessToken;
  }, getAuthSnapshot() {
    if (w && !w.organizationUuid) re(w.accessToken, true);
    return w;
  }, attachWorker: fe, detachWorker: de, dispose: G, [Symbol.dispose]: G };
  function G() {
    if (g) clearTimeout(g), g = null;
    if (R) clearInterval(R), R = null;
    for (let s of T) s.removeListener("message", V);
    T.clear();
  }
}
function ke(e, r, f) {
  if (typeof process.send === "function") {
    let w = function(S) {
      let g = k.get(S);
      if (g) k.delete(S), g.resolve(false);
    }, v = e;
    process.on("message", (S) => {
      if (!Se(S)) return;
      if (S.type === "token_update") v = S.accessToken;
    });
    let k = /* @__PURE__ */ new Map();
    return process.on("message", (S) => {
      if (typeof S === "object" && S !== null && "type" in S && S.type === "auth_401_result") {
        let g = S, T = k.get(g.requestId);
        if (T) clearTimeout(T.timer), k.delete(g.requestId), T.resolve(g.refreshed);
      }
    }), process.channel?.unref(), { getAccessToken() {
      return v;
    }, reportAuth401(S) {
      let g = (0, import_crypto.randomUUID)(), T = { type: "auth_401", failedToken: S, requestId: g };
      return new Promise((R) => {
        let W = setTimeout(w, 3e4, g);
        W.unref(), k.set(g, { resolve: R, timer: W });
        try {
          process.send(T);
        } catch {
          clearTimeout(W), k.delete(g), R(false);
        }
      });
    } };
  }
  let h = null;
  async function y() {
    return h ??= await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-3n4jnb8b.js")));
  }
  return y(), { getAccessToken() {
    return h?.getClaudeAIOAuthTokens()?.accessToken;
  }, async reportAuth401(v) {
    return (await y()).handleOAuth401Error(v, r, f, { usesLoginOffFirstParty: true });
  } };
}
function oe(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "shutdown";
}
function we(e) {
  if (!oe(e) || typeof e !== "object" || e === null || !("cause" in e)) return;
  return e.cause === "upgrade" || e.cause === "reload" || e.cause === "yield" ? e.cause : void 0;
}
(0, import_chunk_adx6804h.B)();
var he = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ dir: (0, import_chunk_adx6804h.n)(), name: (0, import_chunk_adx6804h.n)().optional(), spawnMode: (0, import_chunk_adx6804h.F)(["same-dir", "worktree"]).default("same-dir"), capacity: (0, import_chunk_adx6804h.E)().int().positive().default(32), permissionMode: (0, import_chunk_adx6804h.bi)(import_chunk_pbteexar.NE, (0, import_chunk_adx6804h.F)(import_chunk_pbteexar.cF)).optional(), sandbox: (0, import_chunk_adx6804h.P)().optional(), sessionTimeoutSeconds: (0, import_chunk_adx6804h.E)().int().positive().optional(), createSessionOnStart: (0, import_chunk_adx6804h.P)().default(false) }).strict()), Ie = 6e4, De = 500, ve = async (e, r, f, h, y, v) => {
  let k = he().parse(e);
  if (k.sandbox) f(`The sandbox key is not supported for Remote Control. Remove it. ${import_chunk_sr33d2zd.pCr}`), process.exit(import_chunk_m417dzmj.n2);
  let { initializeErrorLogSink: w } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-f1nswdzb.js"))), { initializeAnalyticsSink: S } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-cyzc43gd.js")));
  w(), S();
  {
    let { remoteControlHybridReason: o } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-bqsy4qs6.js"))), a = o();
    if (a !== void 0) f(`${a} This worker stopped. It starts again when the daemon restarts or when its entry in daemon.json changes. If the organization sign-in is still stored then, it stops again. To use Remote Control, run \`claude auth logout\`. Then run \`claude auth login\` and choose the account or organization that has your Claude subscription. Then restart the daemon.`), process.exit(import_chunk_m417dzmj.n2);
  }
  let g = () => (0, import_chunk_mw2v4wks.CR)() ?? h.getAccessToken();
  if (!g()) f(import_chunk_sr33d2zd.ujn), process.exit(1);
  let [{ initialize1PEventLogging: T }, { initializeGrowthBook: R, getFeatureValue_CACHED_MAY_BE_STALE: W, getUserAttributes: I }, { flushAnalyticsSinks: z }, { populateOAuthAccountInfoIfNeeded: Y }] = await Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-5nyv269y.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-vgvexp78.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-1s1e57bz.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-ccbzx484.js")))]);
  T(y);
  let { orgPinRefusal: re, orgPinRefusalMayPass: Q } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-ydd9hzk4.js"))), X = await re(v);
  if (X !== null) {
    let o = Q(X);
    f(`${X.message}

${o ? "This worker tries again shortly." : "This worker has stopped. It starts again when the daemon restarts or its entry in daemon.json changes."}`), await z(), process.exit(o ? 1 : import_chunk_m417dzmj.n2);
  }
  if (await Y(v, y).catch((o) => {
    (0, import_chunk_w578pjby.t)(`[daemon:remoteControl] oauthAccount backfill failed (${o instanceof Error ? o.name : typeof o})`);
  }), !I().organizationUUID) (0, import_chunk_w578pjby.t)("[daemon:remoteControl] no org identity; GrowthBook not initialized, gates serve cached/default values");
  else R().catch((o) => {
    (0, import_chunk_w578pjby.t)(`[daemon:remoteControl] GrowthBook init failed (${o instanceof Error ? o.name : typeof o}); feature gates keep serving the disk cache`, { level: "error" });
  });
  if (!(0, import_chunk_zwfq7wpn.mSe)()) {
    let o = await QGs();
    if (o !== void 0) f(o.reason), await z(), process.exit(o.retry ? 1 : import_chunk_m417dzmj.n2);
  }
  let { runBridgeHeadless: N, BridgeHeadlessPermanentError: ie } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-jy29ybqd.js"))), H = null, j = false, M = (o) => {
    if (typeof process.send !== "function") return;
    try {
      process.send(o);
    } catch {
    }
  }, se = (o) => M({ type: "rc_busy", busy: o }), ae = () => {
    if (H !== null) clearInterval(H), H = null;
  }, U = (o) => {
    let a = o > 0;
    if (a !== j) j = a, se(a);
    if (a) {
      if (H === null) H = setInterval((C) => C(true), Ie, se), H.unref?.();
    } else ae();
  }, ue = W("tengu_daemon_upgrade_defer_busy", true), ce = null, V = () => {
  }, fe = new Promise((o) => {
    V = o;
  }), de = (o) => {
    if (oe(o)) ce = we(o) ?? null, V();
  };
  process.on("message", de);
  let le = async () => (await Promise.race([fe, (0, import_chunk_5appeerh.K)(De)]), ce), G, s, m;
  try {
    let o = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-tvt7zm70.js"))), a = o.liveToolHostChecks(k.dir, v), C = o.liveToolHostSwitches({ dir: k.dir, checks: a, isOfferingFolder: () => G?.getToolHostAdvert().kind === "advertise", hasAccessToken: () => Boolean(g()) }), O, L = false;
    G = await o.watchToolHostAdvert({ log: f, checks: a, refuse: o.helperRefusal, onVerdict: (pe) => {
      if (O !== void 0 && o.isSwitchedOffRemotely(pe)) O.sweep("gate_off").catch((q) => (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(q)));
    } }), s = (pe) => {
      try {
        O = o.buildToolHostWorkHandler({ folder: k.dir, switches: C, ...pe, onLiveCountChange: (q) => M({ type: "rc_serving_tools", count: q }) }, { unattendedGrant: void 0, withoutShellSecrets: false });
      } catch (q) {
        (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(q));
      }
      return O;
    };
    let ee;
    m = async () => {
      if (O !== void 0) ee ??= o.sweepToolHostForShutdown(O);
      await ee;
    }, r.addEventListener("abort", () => void m?.(), { once: true });
  } catch (o) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(o));
  }
  let b = false;
  try {
    await N({ dir: k.dir, name: k.name, spawnMode: k.spawnMode, capacity: k.capacity, permissionMode: k.permissionMode, createSessionOnStart: k.createSessionOnStart, getAccessToken: g, onAuth401: h.reportAuth401, log: f, storageV5: y, credentials: v, onBusyChange: U, persistActiveSessionsOnShutdown: ue, awaitShutdownCause: le, getToolHostAdvert: G?.getToolHostAdvert, createToolHostHandler: s }, r);
  } catch (o) {
    if (!(o instanceof ie)) throw o;
    f(o.message), b = true;
  } finally {
    await m?.();
    let { cleanupSessionPluginCache: o } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-3awj6yb0.js")));
    await o(), ae(), G?.stop(), process.off("message", de), await z();
  }
  if (b) process.exit(import_chunk_m417dzmj.n2);
};
async function QGs() {
  let [{ getBridgeBlockedCode: e }, { checkBridgeMinVersion: r }, { getUserAttributes: f }] = await Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-bqsy4qs6.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-h446sfby.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-vgvexp78.js")))]);
  if (!f().organizationUUID) return { reason: ge("token_scope_limited"), retry: false };
  let h = await e();
  if (h !== null) return { reason: ge(h), retry: h === "flags_unreachable" || h === "not_signed_in" };
  let y = r();
  return y === null ? void 0 : { reason: y, retry: false };
}
function ge(e) {
  return `Remote Control cannot start (${e}). Run \`claude remote-control\` in a terminal to see why.`;
}
async function iXn(e, r, f) {
  return (0, import_chunk_cqa9hrgx.qo)("daemon_rc_add", async () => {
    let h = "added";
    return await (0, import_chunk_ez1sysdb.zIt)((y) => {
      let v = (0, import_chunk_ez1sysdb.ezs)(y.remoteControl), k = v.findIndex((w) => w.dir === e.dir);
      if (k >= 0) {
        let w = (0, import_chunk_gd77dyw4.Hr)(e, (S) => S !== void 0);
        v[k] = { ...v[k], ...w }, h = "updated";
      } else v.push(e), h = "added";
      y.remoteControl = v;
    }, r, f), h;
  });
}
async function aXn(e, r, f) {
  return (0, import_chunk_cqa9hrgx.qo)("daemon_rc_remove", async () => {
    await (0, import_chunk_ez1sysdb.zIt)((h) => {
      let y = (0, import_chunk_ez1sysdb.ezs)(h.remoteControl), v = y.filter((k) => k.dir !== e);
      if (v.length === y.length) return false;
      if (v.length === 0) delete h.remoteControl;
      else h.remoteControl = v;
    }, r, f);
  });
}
var Te = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ intervalSeconds: (0, import_chunk_adx6804h.E)().positive().default(30) }).strict()), d$e = { heartbeat: { schema: Te, run: We, needsOAuth: false }, scheduled: { schema: import_chunk_9yrg7phs.ZGs, run: import_chunk_9yrg7phs.ASa, needsOAuth: true }, remoteControl: { schema: he, run: ve, needsOAuth: true } };
function X9t(e) {
  return e === "heartbeat" || (0, import_chunk_zwfq7wpn.mSe)() || e === "remoteControl" && (0, import_chunk_n6f4f9sf.eba)();
}
async function We(e, r, f, h) {
  let { intervalSeconds: y } = Te().parse(e);
  f(`heartbeat worker started (interval=${y}s)`);
  while (!r.aborted) if (await (0, import_chunk_5appeerh.K)(y * 1e3, r), !r.aborted) f("heartbeat");
}
function xe(e, r) {
  let f = () => r.abort();
  e.on("SIGTERM", f), e.on("SIGINT", f), e.on("message", (h) => {
    if (oe(h)) r.abort();
  });
}
async function l8l(e, r) {
  if (!e || !(e in d$e)) process.stderr.write(`unknown worker kind: ${e}
`), process.exit(2);
  if (!X9t(e)) process.stderr.write(`worker kind '${e}' is not available.
`), process.exit(import_chunk_m417dzmj.n2);
  let f = d$e[e], h = [];
  for await (let T of process.stdin) h.push(T);
  let y;
  try {
    y = (0, import_chunk_w578pjby.te)(Buffer.concat(h).toString("utf8"));
  } catch (T) {
    process.stderr.write(`invalid config JSON on stdin: ${(0, import_chunk_jv7av99m.d)(T)}
`), process.exit(2);
  }
  let v = f.schema().safeParse(y.config);
  if (!v.success) process.stderr.write(`config validation failed: ${v.error.message}
`), process.exit(2);
  let k = new AbortController();
  xe(process, k), Fe(k);
  let w = (0, import_chunk_tbvdyndw.kY)(r), S = (0, import_chunk_f2cpz56c.JH)(w), g = ke(y.initialAccessToken, S, w);
  if ((0, import_chunk_m15w38ag.ne)() && w !== void 0) {
    (0, import_chunk_w578pjby.mJ)({ storageV5: w }), (0, import_chunk_865at33z.PX)(w);
    let [{ composePolicyLimitsClient: T, primePolicyLimitsCache: R }, { primeFastPathCredentials: W }, { setGrowthBookCredentials: I, setGrowthBookStorageBackend: z }] = await Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-7bg0909g.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-d7v0b880.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-vgvexp78.js")))]);
    T({ storageV5: w, credentials: S }), I(S), z(w), await W(S), await R(w), await (0, import_chunk_865at33z.Cde)(w);
  }
  try {
    await f.run(v.data, k.signal, (T) => process.stdout.write(T + `
`), g, w, S);
  } catch (T) {
    if (Me(T) === 429) process.stdout.write(`rate limited (429): ${(0, import_chunk_jv7av99m.d)(T)}
`), process.exit(import_chunk_m417dzmj.CFe);
    if (He(T)) process.stdout.write(`folder already served: ${(0, import_chunk_jv7av99m.d)(T)}
`), process.exit(import_chunk_m417dzmj.CFe);
    throw T;
  }
}
function He(e) {
  let r = e;
  for (let f = 0; r != null && f < 8; f++) {
    if (r.errorType === import_chunk_sr33d2zd.fjn) return true;
    r = r.cause;
  }
  return false;
}
function Me(e) {
  let r = e;
  for (let f = 0; r != null && f < 8; f++) {
    let h = r.status;
    if (typeof h === "number") return h;
    let y = r.response?.status;
    if (typeof y === "number") return y;
    r = r.cause;
  }
  return;
}
var Be = 3e4;
function Le(e) {
  try {
    return process.kill(e, 0), true;
  } catch {
    return false;
  }
}
function Fe(e, r) {
  let f = { ppid: () => process.ppid, isAlive: Le, log: (k) => process.stdout.write(k + `
`), onGone: () => process.exit(0), intervalMs: Be, exitGraceMs: 2e3, ...r }, h = f.ppid();
  if (h <= 1) return;
  let y = false, v = setInterval(() => {
    if (y) return;
    if (!(!f.isAlive(h) || (0, import_chunk_cg8dqz0a.x)() !== "windows" && f.ppid() !== h)) return;
    y = true, clearInterval(v), f.log("parent supervisor gone \u2014 exiting"), e.abort(), setTimeout(f.onGone, f.exitGraceMs).unref();
  }, f.intervalMs);
  return v.unref(), v;
}
