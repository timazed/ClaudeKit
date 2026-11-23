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
var chunk_ffdwwm29_exports = {};
__export(chunk_ffdwwm29_exports, {
  L9l: () => L9l,
  OOt: () => OOt
});
module.exports = __toCommonJS(chunk_ffdwwm29_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_0tkterak = require("/$bunfs/root/chunk-0tkterak.js");
var import_chunk_ww4qymfd = require("/$bunfs/root/chunk-ww4qymfd.js");
var import_chunk_ee10yhqw = require("/$bunfs/root/chunk-ee10yhqw.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_h3t3td58 = require("/$bunfs/root/chunk-h3t3td58.js");
function f(n) {
  return `https://claude.ai/upgrade/max?utm_source=claude_code&utm_medium=cli&utm_campaign=${n}`;
}
async function L9l(n, u) {
  return OOt(n, u, "upgrade_command");
}
async function OOt(n, u, h) {
  let s = (0, import_chunk_0tkterak.gMe)(n), c = f(h);
  try {
    if ((0, import_chunk_865at33z.Rt)()) {
      let a = (0, import_chunk_865at33z.tr)(), p = false;
      if (a?.subscriptionType && a?.rateLimitTier) p = a.subscriptionType === "max" && a.rateLimitTier === "default_claude_max_20x";
      else if (a?.accessToken) {
        let t = await (0, import_chunk_865at33z.ehe)(a.accessToken);
        p = t?.organization?.organization_type === "claude_max" && t?.organization?.rate_limit_tier === "default_claude_max_20x";
      }
      if (p) {
        let t = (0, import_chunk_865at33z.jGe)();
        return setTimeout(s, 0, t ? `You\u2019re already on the highest individual plan. For additional usage, run ${t}.` : "You are already on the highest individual plan. For additional usage, run /login to switch to an API usage-billed account."), null;
      }
      let l = (0, import_chunk_865at33z.Sn)()?.billingType;
      if ((0, import_chunk_865at33z.Vg)() && (l === "apple_subscription" || l === "google_play_subscription")) {
        let t = (0, import_chunk_865at33z.jGe)(), m = l === "apple_subscription" ? "Your plan is billed through the App Store. To change it, open Claude for iOS and go to Settings \u2192 Billing. After you change it, run /login here so the new plan takes effect." : "Your plan is billed through Google Play. To change it, open Claude for Android and go to Settings. After you change it, run /login here so the new plan takes effect.";
        return setTimeout(s, 0, t ? `${m} For additional usage now, run ${t}.` : m), null;
      }
    }
    let d = await (0, import_chunk_h3t3td58.FYe)(c), _ = (0, import_chunk_ww4qymfd.T5t)(), y = (0, import_chunk_f9x2f6cx.Io)();
    return (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [(0, import_chunk_h3t3td58.wTr)(d) && (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { paddingX: 2, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "Couldn't open your browser. Open this page to upgrade:" }) }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.En, { url: c, assumeSupport: true })] }), (0, import_chunk_a46xeenj.e)(import_chunk_ww4qymfd.DOt, { startingMessage: "Starting new login following /upgrade. Exit with Ctrl-C to use existing account.", onDone: async (a, p, l) => {
      let t = await (0, import_chunk_ww4qymfd.v5t)(u, a, { setAppState: l, previousAccount: _, previousGatewayAuth: y });
      s(...(0, import_chunk_ww4qymfd.h$o)(u, a, t));
    } })] });
  } catch (d) {
    (0, import_chunk_k449cc64.i)(d), setTimeout(s, 0, `Failed to open browser. Please visit ${c} to upgrade.`);
  }
  return null;
}
