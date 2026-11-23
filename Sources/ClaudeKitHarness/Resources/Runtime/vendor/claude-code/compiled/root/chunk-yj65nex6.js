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
var chunk_yj65nex6_exports = {};
__export(chunk_yj65nex6_exports, {
  S5l: () => S5l,
  b5l: () => b5l,
  p1s: () => p1s,
  w5l: () => w5l,
  y5l: () => y5l
});
module.exports = __toCommonJS(chunk_yj65nex6_exports);
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_t3er6wbx = require("/$bunfs/root/chunk-t3er6wbx.js");
var import_chunk_7d2qr9z5 = require("/$bunfs/root/chunk-7d2qr9z5.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_89jb0md2 = require("/$bunfs/root/chunk-89jb0md2.js");
var import_chunk_mpk68jst = require("/$bunfs/root/chunk-mpk68jst.js");
var import_chunk_7azstk6m = require("/$bunfs/root/chunk-7azstk6m.js");
var import_chunk_42nfpkzm = require("/$bunfs/root/chunk-42nfpkzm.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_c1hnv4fm = require("/$bunfs/root/chunk-c1hnv4fm.js");
var import_chunk_z1z1qsrb = require("/$bunfs/root/chunk-z1z1qsrb.js");
var import_chunk_sq8gf26a = require("/$bunfs/root/chunk-sq8gf26a.js");
var import_chunk_6k3h3wej = require("/$bunfs/root/chunk-6k3h3wej.js");
var import_chunk_w58msjm6 = require("/$bunfs/root/chunk-w58msjm6.js");
var import_chunk_cpdpk5r1 = require("/$bunfs/root/chunk-cpdpk5r1.js");
var import_chunk_1g0cz451 = require("/$bunfs/root/chunk-1g0cz451.js");
var import_chunk_d04hzn3g = require("/$bunfs/root/chunk-d04hzn3g.js");
var import_chunk_fg1csfd8 = require("/$bunfs/root/chunk-fg1csfd8.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_9ph0ypyy = require("/$bunfs/root/chunk-9ph0ypyy.js");
var import_chunk_7bgv8haz = require("/$bunfs/root/chunk-7bgv8haz.js");
var import_process = require("process");
var import_util = require("util");
var import_readline = require("readline");
var C = 5e3;
function p1s(c, d = process.stdin) {
  let t = () => {
  }, m = new Promise((p) => {
    t = p;
  }), n = (0, import_readline.createInterface)({ input: d, output: process.stdout });
  return n.question(`${c} [y/N] `, (p) => {
    let w = p.trim().toLowerCase();
    t(w === "y" || w === "yes"), n.close();
  }), n.once("close", () => t(false)), m;
}
function y5l() {
  return (0, import_chunk_8bkqeb5d.i$e)({ ...(0, import_chunk_6k3h3wej.Sx)(false), patchConsole: false });
}
function E(c) {
  return { ok: true, days: import_chunk_ephf358x.eoa, seconds: import_chunk_ephf358x.h1e };
}
async function S5l(c, d) {
  (0, import_chunk_y53wbr8a.a)("tengu_setup_token_command", {});
  let t = E(d?.expiresInDays);
  if (!t.ok) {
    c.unmount(), process.stderr.write(`${t.message}
`), await (0, import_chunk_cqa9hrgx.Gt)("cli_setup_token", t.errorCode), await (0, import_chunk_mpk68jst.Lo)(1);
    return;
  }
  let m = (0, import_chunk_865at33z.lz)(true);
  if (!m.valid) c.unmount(), process.stderr.write(`${m.message}
setup-token creates a long-lived Claude.ai subscription token, which this policy does not permit.
`), await (0, import_chunk_cqa9hrgx.Gt)("cli_setup_token", "force_login_method_refused"), await (0, import_chunk_mpk68jst.Lo)(1);
  let n = (0, import_chunk_tvttgr51.xee)("firstParty");
  if (n !== void 0) c.unmount(), process.stderr.write(`${n}
setup-token creates a long-lived Claude.ai subscription token, which this machine's allowedProviders policy does not permit.
`), await (0, import_chunk_cqa9hrgx.Gt)("cli_setup_token", "provider_not_allowed"), await (0, import_chunk_mpk68jst.Lo)(1);
  let p = !(0, import_chunk_865at33z.wa)(), { ConsoleOAuthFlow: w } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-ehm616n6.js"))), f = (0, import_chunk_f9x2f6cx.N)(), h = false, A = false;
  if (await new Promise((S) => {
    c.render((0, import_chunk_a46xeenj.e)(import_chunk_7azstk6m.Nv, { session: f, onChangeAppState: (v) => (0, import_chunk_1g0cz451.hIe)(v, f), children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", gap: 1, children: [(0, import_chunk_a46xeenj.e)(import_chunk_89jb0md2.Wce, {}), p && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "warning", children: (0, import_chunk_d04hzn3g.m_)("You already have authentication configured via environment variable or API key helper.", "Warning: ") }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "warning", children: "The setup-token command will create a new OAuth token which you can use instead." })] }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { paddingLeft: 1, flexDirection: "column", gap: 1, children: [(0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { bold: true, children: ["This will guide you through long-lived (", t.days === 365 ? "1-year" : `${t.days}-day`, ") auth token setup for your Claude account. Claude subscription required."] }), (0, import_chunk_a46xeenj.e)(w, { onDone: () => {
      S();
    }, onAccountOnHold: () => {
      h = true, S();
    }, onOrgConfigRefused: () => {
      A = true, S();
    }, mode: "setup-token", expiresIn: t.seconds, urlOutdent: 1 })] })] }) }));
  }), c.unmount(), h) {
    await (0, import_chunk_cqa9hrgx.Gt)("cli_setup_token", "account_on_hold"), await (0, import_chunk_mpk68jst.Lo)(1);
    return;
  }
  if (A) {
    await (0, import_chunk_cqa9hrgx.Gt)("cli_setup_token", "org_config_refused"), await (0, import_chunk_mpk68jst.Lo)(1);
    return;
  }
  await (0, import_chunk_cqa9hrgx.To)("cli_setup_token"), await (0, import_chunk_mpk68jst.Lo)(0);
}
async function b5l(c) {
  (0, import_chunk_y53wbr8a.a)("tengu_doctor_command", {});
  let d;
  try {
    let t = await (0, import_chunk_sq8gf26a.qJt)({ probeKeychain: true, storageV5: c }), m = (0, import_chunk_fg1csfd8.Xce)(), n = ["Claude Code doctor", "", `Running: ${t.installationType} (${t.version})`, ...{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.GIT_SHA ? [`Commit: ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.GIT_SHA.slice(0, 12)}`] : [], "Platform: darwin-arm64", ...t.packageManager ? [`Package manager: ${l(t.packageManager)}`] : [], `Path: ${l(t.installationPath)}`, ...t.invokedBinary !== t.installationPath ? [`Invoked: ${l(t.invokedBinary)}`] : [], `Config install method: ${l(t.configInstallMethod)}`, `Search: ${t.ripgrepStatus.working ? "OK" : "Not working"} (${t.ripgrepStatus.mode === "embedded" ? "bundled" : l(t.ripgrepStatus.systemPath || "system")})`, `Auto-updates: ${t.packageManager ? "Managed by package manager" : l(t.autoUpdates)}`, `Auto-update channel: ${m === "rc" ? "slow" : m}`, `Last update attempt: ${L(t.lastUpdateResult)}`];
    if ((0, import_chunk_xcgcdx61.Si)() !== null && (0, import_chunk_t3er6wbx.ROs)()) await (0, import_chunk_5appeerh.me)((0, import_chunk_w58msjm6.Ih)(), C);
    let p = (0, import_chunk_t3er6wbx.Cct)();
    if (p) n.push(`Managed settings (remote): ${l((0, import_chunk_t3er6wbx.bIr)(p))}`);
    else if ((0, import_chunk_t3er6wbx.ROs)()) n.push("Managed settings (remote): checking\u2026 (fetch in progress; re-run in a moment)");
    {
      let i = (0, import_chunk_t3er6wbx.SIr)();
      if (i !== null) n.push(`Managed settings (fetched): ${l(i)}`);
      let u = (0, import_chunk_zhr7rpv7.ve)();
      if (u !== "firstParty" && (0, import_chunk_5e3gtsn9.MTr)()) n.push(`API provider: ${(0, import_chunk_zhr7rpv7.l4t)(u)} (chosen by your organization)`);
      let _ = (0, import_chunk_t3er6wbx.yIr)();
      if (_ !== null) n.push(`Managed settings (cached): ${l(_)}`);
      let y = (0, import_chunk_42nfpkzm.Vle)();
      if (y !== "none") n.push(`Anthropic sign-in: ${y === "hybrid" ? "required by this computer's managed settings (enforceAnthropicSignIn), and signed in to your organization" : y === "claude_ai" ? "required by this computer's managed settings (enforceAnthropicSignIn), and this session uses a claude.ai login (a start does not confirm it with Anthropic)" : l((0, import_chunk_t3er6wbx.jAt)(y, false, true))}`);
    }
    {
      let { waitForPolicyLimitsToLoad: i, POLICY_LIMITS_FIRST_ATTEMPT_WAIT_MS: u } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-7bg0909g.js"))), { getLastFetchOutcome: _ } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-ts9zreqg.js"))), y = false, k = i().then(() => {
        y = true;
      }), T = Date.now() + u;
      while (!y && _() === null && Date.now() < T) await Promise.race([k, (0, import_chunk_5appeerh.K)(200)]);
    }
    let w = n.push("Organization policy: \u2026") - 1, { statusNotices: f, invalidEntries: h } = (0, import_chunk_9ph0ypyy.y8t)((0, import_chunk_cpdpk5r1.Bqe)().errors);
    if (h.length > 0) {
      n.push("", import_chunk_d57v19zt.Re.yellow((0, import_chunk_d04hzn3g.m_)("Invalid settings", "")));
      for (let i of h) {
        let u = [i.file, i.path].flatMap((_) => _ ? [l(_)] : []).join(" \u203A ");
        n.push(`- ${u ? `${u}: ` : ""}${l(i.message)}${i.suggestion ? `
  Suggested fix: ${l(i.suggestion)}` : ""}`);
      }
    }
    if (f.length > 0) {
      n.push("");
      for (let i of f) n.push(`- ${l(i.message)}`);
    }
    let A = await (0, import_chunk_7bgv8haz.nGr)();
    if (A.length > 0) {
      n.push("", import_chunk_d57v19zt.Re.yellow((0, import_chunk_d04hzn3g.m_)("Permission rules that may not work as written", "")));
      for (let i of A) n.push(`- ${l(i)}`);
    }
    let S = (0, import_chunk_2yx6c1y2.oHr)();
    if (S.length > 0) {
      n.push("");
      for (let [i, u] of S) n.push(`- ${i}
  ${u}`);
    }
    let v = [{ name: "BASH_MAX_OUTPUT_LENGTH", default: import_chunk_c1hnv4fm.sds, upperLimit: import_chunk_c1hnv4fm.YEi }, { name: "CLAUDE_CODE_MAX_OUTPUT_TOKENS", ...(0, import_chunk_865at33z.NGe)("claude-opus-4-6") }].map((i) => ({ name: i.name, ...(0, import_chunk_865at33z.bGn)(i.name, process.env[i.name], i.default, i.upperLimit) })).filter((i) => i.status !== "valid");
    if (v.length > 0) {
      n.push("", import_chunk_d57v19zt.Re.yellow((0, import_chunk_d04hzn3g.m_)("Environment variables", "")));
      for (let i of v) n.push(`- ${i.name}: ${l(i.message ?? i.status)}`);
    }
    if (t.multipleInstallations.length > 1) {
      n.push("", import_chunk_d57v19zt.Re.yellow((0, import_chunk_d04hzn3g.m_)("Multiple installations found", "")));
      for (let i of t.multipleInstallations) n.push(`- ${l(`${i.type} at ${i.path}`)}`);
    }
    try {
      let i = await (0, import_chunk_7d2qr9z5.lIi)();
      if (n.push("", "Remote Control"), i.inRemoteSession) n.push("Inside a cloud session \u2014 Remote Control is unavailable here. Use it from the local session instead.");
      else {
        n.push(l(i.disabledReason ?? "Control this session from claude.ai/code or the Claude mobile app"));
        for (let u of i.checks.filter((_) => !_.ok)) n.push(l(`- ${u.label}${u.detail ? ` (${u.detail})` : ""}`));
      }
    } catch {
      await (0, import_chunk_cqa9hrgx.oi)("cli_doctor", "bridge_info_unavailable");
    }
    if (n[w] = `Organization policy: ${l((0, import_chunk_z1z1qsrb.rSo)((0, import_chunk_z1z1qsrb.nSo)()))}`, t.warnings.length > 0) {
      n.push("", import_chunk_d57v19zt.Re.yellow((0, import_chunk_d04hzn3g.m_)(`${t.warnings.length} ${(0, import_chunk_7cfjrnwy.O)(t.warnings.length, "warning")} found`, "")));
      for (let i of t.warnings) n.push(`- ${l(i.issue)}`, `  Fix: ${l(i.fix)}`);
    } else n.push("", (0, import_chunk_d04hzn3g.ux)("No installation issues found.", ""));
    n.push("", "For a full setup checkup that can also fix issues, run /doctor in a Claude Code session."), (0, import_chunk_ndrgvsn7.es)(n.join(`
`) + `
`), d = { warnings: t.warnings.length, settings_errors: h.length, env_var_issues: v.length, multiple_installs: t.multipleInstallations.length > 1, ripgrep_working: t.ripgrepStatus.working };
  } catch (t) {
    throw await (0, import_chunk_cqa9hrgx.Gt)("cli_doctor", "diagnostic_failed"), t;
  }
  await (0, import_chunk_cqa9hrgx.To)("cli_doctor", d), await (0, import_chunk_mpk68jst.Lo)(0);
}
function l(c) {
  return (0, import_chunk_kx2fp6pc.Yn)((0, import_util.stripVTControlCharacters)(c)).replaceAll("`", "");
}
function L(c) {
  if (!c) return "none recorded";
  let d = l(c.timestamp.slice(0, 10));
  switch (c.outcome) {
    case "success":
      return c.version_to ? `success \u2192 ${l(c.version_to)} (${d})` : `success (${d})`;
    case "failed":
      return `failed (${l(c.status)}) \u2014 ${d}`;
  }
}
async function w5l(c, d, t) {
  if (import_chunk_c203g5kd.s.DISABLE_UPDATES) process.stdout.write(`Updates are disabled by your administrator. Contact your IT team to get the latest version.
`), process.exit(0);
  let { awaitPolicyLimitsColdStart: m } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-7bg0909g.js")));
  await m();
  let { setup: n } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-jq3ec90n.js")));
  await n((0, import_process.cwd)(), "default", false, false, void 0, false, void 0, void 0, void 0, t);
  let { install: p } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-48p8cq4s.js")));
  await new Promise((w) => {
    let f = [];
    if (c) f.push(c);
    if (d.force) f.push("--force");
    p.call(async (h) => {
      if (h.includes("failed")) await (0, import_chunk_cqa9hrgx.Gt)("cli_install", "cli_install_failed");
      else await (0, import_chunk_cqa9hrgx.To)("cli_install");
      await (0, import_chunk_mpk68jst.Lo)(h.includes("failed") ? 1 : 0), w();
    }, { storageV5: t }, f);
  });
}
