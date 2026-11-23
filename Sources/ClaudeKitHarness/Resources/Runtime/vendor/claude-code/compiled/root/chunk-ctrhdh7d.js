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
  var E2 = typeof SuppressedError === "function" ? SuppressedError : function(e, s2, m, _2) {
    return _2 = Error(m), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s2, _2;
  };
  var fail = (e) => error = hasError ? new E2(e, error, "An error was suppressed during disposal") : (hasError = true, e);
  var next = (it) => {
    while (it = stack.pop()) {
      try {
        var result = it[1] && it[1].call(it[2]);
        if (it[0]) return Promise.resolve(result).then(next, (e) => (fail(e), next()));
      } catch (e) {
        fail(e);
      }
    }
    if (hasError) throw error;
  };
  return next();
};
var chunk_ctrhdh7d_exports = {};
__export(chunk_ctrhdh7d_exports, {
  MMt: () => MMt
});
module.exports = __toCommonJS(chunk_ctrhdh7d_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_mgntjepj = require("/$bunfs/root/chunk-mgntjepj.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_4b5275ey = require("/$bunfs/root/chunk-4b5275ey.js");
var import_chunk_gazdkqyt = require("/$bunfs/root/chunk-gazdkqyt.js");
var import_chunk_xs8rc77k = require("/$bunfs/root/chunk-xs8rc77k.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var A = ["access denied by the git proxy", "add the repository to the session's sources"];
function I(n, e) {
  try {
    let r = e.split(`
`).find((p) => A.every((c) => p.includes(c))), u = (0, import_chunk_f9x2f6cx.mVe)(), o = `marketplace-not-in-session:${n}:${r}`;
    if (r === void 0 || u.has(o)) return;
    u.add(o), (0, import_chunk_865at33z.Fs)({ type: "system", subtype: "informational", content: `Plugin marketplace '${(0, import_chunk_tp3c5q2s.Qe)(n)}' couldn't be fetched: its repository, or one of its submodules, isn't among this session's repositories or is misnamed in settings. If your access and your organization's policies allow it, you can choose that repository when you start a session, or ask Claude to add that repository to this session.`, level: "warning" });
  } catch (r) {
    (0, import_chunk_k449cc64.i)(Error("Failed to send the refused-marketplace notice", { cause: r }));
  }
}
async function H() {
  try {
    let n = await (0, import_promises.readFile)((0, import_chunk_4b5275ey.Kls)(), "utf-8"), e = (0, import_chunk_xcgcdx61.Ggn)().safeParse((0, import_chunk_w578pjby.te)(n));
    if (!e.success) return (0, import_chunk_w578pjby.t)(`Invalid known_marketplaces.json in zip cache: ${e.error.message}`, { level: "error" }), {};
    return e.data;
  } catch {
    return {};
  }
}
async function O(n) {
  await (0, import_chunk_4b5275ey.Clo)((0, import_chunk_4b5275ey.Kls)(), (0, import_chunk_w578pjby._)(n, null, 2));
}
async function D(n, e) {
  let r = (0, import_chunk_4b5275ey.Hmr)();
  if (!r) return;
  let u = await L(e);
  if (u !== null) {
    let o = (0, import_chunk_4b5275ey.CEi)(n);
    await (0, import_chunk_4b5275ey.Clo)((0, import_path.join)(r, o), u);
  }
}
async function L(n) {
  let e = [(0, import_path.join)(n, ".claude-plugin", "marketplace.json"), (0, import_path.join)(n, "marketplace.json"), n];
  for (let r of e) try {
    return await (0, import_promises.readFile)(r, "utf-8");
  } catch {
  }
  return null;
}
async function E(n) {
  let e = await (0, import_chunk_bzyb60p0.Bd)(n), r = Object.entries((0, import_chunk_xcgcdx61._Ho)(e)).filter(([p, c]) => (0, import_chunk_bzyb60p0.DHe)(p, c) === null && !(0, import_chunk_bzyb60p0.qye)(p, c));
  for (let [p, c] of r) {
    if (!c.installLocation) continue;
    try {
      await D(p, c.installLocation);
    } catch (g) {
      (0, import_chunk_w578pjby.t)(`Failed to save marketplace JSON for ${p}: ${g}`);
    }
  }
  let o = { ...await H(), ...Object.fromEntries(r) };
  await O(o);
}
var R = 3e4, N = 3e4;
function MMt(n, e, r, u) {
  let o = (0, import_chunk_865at33z.ce)(), p = (o.headlessInstallPass ?? Promise.resolve()).then(() => j(n, e, r, u));
  return o.headlessInstallPass = p.then(() => {
    return;
  }, () => {
    return;
  }), p;
}
async function T(n, e) {
  var _stack = [];
  try {
    if ((0, import_chunk_w578pjby.c_)()) return;
    if ((0, import_chunk_k449cc64.wt)()) {
      (0, import_chunk_w578pjby.t)("installPluginsForHeadless: not recording enabled plugins: CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC is set; the next start records them", { level: "warn" });
      return;
    }
    if (import_chunk_c203g5kd.s.CLAUDE_CODE_SYNC_PLUGIN_INSTALL) {
      (0, import_chunk_w578pjby.t)("installPluginsForHeadless: not recording enabled plugins: CLAUDE_CODE_SYNC_PLUGIN_INSTALL is set, so a full load follows");
      return;
    }
    (0, import_chunk_w578pjby.t)("installPluginsForHeadless: recording enabled plugins");
    let r = (0, import_chunk_42tcgre6.Fqt)("headless_enabled_plugins_record", () => (0, import_chunk_bzyb60p0.zIn)(n, e)).catch((o) => {
      (0, import_chunk_w578pjby.t)(`installPluginsForHeadless: failed to record enabled plugins: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "error" });
    });
    const u = __using(_stack, (0, import_chunk_w578pjby.oA)(() => r, N));
    await r;
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
async function j(n, e, r, u) {
  let o = (0, import_chunk_4b5275ey.mG)();
  (0, import_chunk_w578pjby.t)(`installPluginsForHeadless: starting${o ? " (zip cache mode)" : ""}`);
  let p = await (0, import_chunk_bzyb60p0.CNt)(), c, g = () => c !== void 0 && (0, import_chunk_865at33z.ce)().pluginLoadCacheOnly === c;
  if (p) (0, import_chunk_bzyb60p0.yfe)(), (0, import_chunk_bzyb60p0.N_)("headlessPluginInstall: seed marketplaces registered"), c = (0, import_chunk_bzyb60p0.ONt)(e, "headlessPluginInstall");
  if (o) await (0, import_chunk_w578pjby.le)().mkdir((0, import_chunk_4b5275ey.vEi)()), await (0, import_chunk_w578pjby.le)().mkdir((0, import_chunk_4b5275ey.TEi)());
  let b = Object.keys((0, import_chunk_bzyb60p0.tN)()).length, C = (0, import_chunk_f9x2f6cx.Se)() && !(0, import_chunk_865at33z.ce)().repoMarketplacesSetAsideSaid ? await (0, import_chunk_gazdkqyt.Kzr)(e) : null;
  if (C !== null) (0, import_chunk_865at33z.ce)().repoMarketplacesSetAsideSaid = true, (0, import_chunk_ndrgvsn7.$E)(`${C}
`);
  let k = { marketplaces_installed: 0, delisted_count: 0 }, m = p || (0, import_chunk_865at33z.ce)().pluginSyncChangeOwed;
  try {
    if (b === 0) (0, import_chunk_w578pjby.t)("installPluginsForHeadless: no marketplaces declared"), await (0, import_chunk_bzyb60p0.Tcr)(e);
    else {
      let f = await (0, import_chunk_42tcgre6.Fqt)("headless_marketplace_reconcile", () => (0, import_chunk_xs8rc77k.Xzr)({ skip: o ? (l, y) => !(0, import_chunk_4b5275ey.AEi)(y) : void 0, onProgress: (l) => {
        if (l.type === "installed") n?.({ status: "installed", name: l.name }), (0, import_chunk_w578pjby.t)(`installPluginsForHeadless: installed marketplace ${l.name}`);
        else if (l.type === "failed") n?.({ status: "failed", name: l.name, error: l.error }), I(l.name, l.error), (0, import_chunk_w578pjby.t)(`installPluginsForHeadless: failed to install marketplace ${l.name}: ${l.error}`);
      }, storageV5: e }), (l) => ({ installed_count: l.installed.length, updated_count: l.updated.length, failed_count: l.failed.length, skipped_count: l.skipped.length }));
      if (f.skipped.length > 0) (0, import_chunk_w578pjby.t)(`installPluginsForHeadless: skipped ${f.skipped.length} marketplace(s) unsupported by zip cache: ${f.skipped.join(", ")}`);
      let P = f.installed.length + f.updated.length;
      if (P > 0) (0, import_chunk_bzyb60p0.yfe)(), await T(e, u?.fetchMissing !== false), (0, import_chunk_bzyb60p0.N_)("headlessPluginInstall: marketplaces reconciled"), c = (0, import_chunk_bzyb60p0.ONt)(e, "headlessPluginInstall"), m = true;
      k.marketplaces_installed = P;
    }
    if (o) c = void 0, await E(e);
    let h = await (0, import_chunk_gazdkqyt.Vzr)(e);
    if (k.delisted_count = h.length, h.length > 0) m = true, c = void 0;
    let S = (0, import_chunk_bzyb60p0.Mxn)() ? (await (0, import_chunk_bzyb60p0.pi)(e, r)).errors.filter(import_chunk_mgntjepj.Sfn) : [];
    if (S.length > 0) {
      var _stack = [];
      try {
        (0, import_chunk_bzyb60p0.N_)("headlessPluginInstall: a copy awaits a full load"), c = void 0, m = true;
        let f = (0, import_chunk_bzyb60p0.Ok)(e, r);
        const P = __using(_stack, (0, import_chunk_w578pjby.oA)(() => f.then(() => {
          return;
        }, () => {
          return;
        }), R));
        let l = await f;
        (0, import_chunk_865at33z.ce)().copyRepairAwaitsRefresh = l.enabled.some((y) => S.some((v) => v.source === y.source));
      } catch (_2) {
        var _error = _2, _hasError = true;
      } finally {
        __callDispose(_stack, _error, _hasError);
      }
    }
    if (m && !g()) (0, import_chunk_bzyb60p0.N_)("headlessPluginInstall: plugins changed"), (0, import_chunk_bzyb60p0.ONt)(e, "headlessPluginInstall");
    return F(e, r), (0, import_chunk_865at33z.ce)().pluginSyncChangeOwed = false, m;
  } catch (h) {
    if ((0, import_chunk_w578pjby.t)(`installPluginsForHeadless: failed: ${(0, import_chunk_jv7av99m.d)(h)}`, { level: "error" }), m && !g()) {
      if ((0, import_chunk_m15w38ag.ne)() && e !== void 0) (0, import_chunk_bzyb60p0.N_)("headlessPluginInstall: pass failed after a change");
      (0, import_chunk_bzyb60p0.ONt)(e, "headlessPluginInstall");
    }
    return F(e, r), false;
  } finally {
    (0, import_chunk_y53wbr8a.a)("tengu_headless_plugin_install", k);
  }
}
function F(n, e) {
  if ((0, import_chunk_bzyb60p0.PBe)(e)) (0, import_chunk_bzyb60p0.pi)(n, e).catch(() => {
  });
}
