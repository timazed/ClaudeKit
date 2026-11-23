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
var chunk_sdks5h78_exports = {};
__export(chunk_sdks5h78_exports, {
  DTi: () => DTi,
  Gdo: () => Gdo,
  Gds: () => Gds,
  HTi: () => HTi,
  LTi: () => LTi,
  Phr: () => Phr,
  c$t: () => c$t,
  crl: () => crl,
  eAe: () => eAe,
  eon: () => eon,
  frl: () => frl,
  fst: () => fst,
  iLn: () => iLn,
  jds: () => jds,
  q5e: () => q5e,
  u$t: () => u$t,
  url: () => url,
  xhr: () => xhr
});
module.exports = __toCommonJS(chunk_sdks5h78_exports);
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_t8x29mwc = require("/$bunfs/root/chunk-t8x29mwc.js");
var import_chunk_8nvd6fqx = require("/$bunfs/root/chunk-8nvd6fqx.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_9b4aq7fb = require("/$bunfs/root/chunk-9b4aq7fb.js");
var import_chunk_2172r9j8 = require("/$bunfs/root/chunk-2172r9j8.js");
var import_os = require("os");
var import_path = require("path");
var fst = /* @__PURE__ */ new Set(["--model", "-m", "--permission-mode", "--inherit-permission-mode", "--proactivity", "--agent", "--agents", "--routine", "--effort", "--fast-mode", "--add-dir", "--mcp-config", "--settings", "--setting-sources", "--managed-settings", "--client-data-url", "--system-prompt", "--system-prompt-file", "--append-system-prompt", "--append-system-prompt-file", "--system-prompt-snapshot", "--append-subagent-system-prompt", "--append-subagent-system-prompt-file", "--fallback-model", "--advisor", "--channels", "--watch-artifact", "--watch-artifact-no-autoreact", "--permission-prompt-tool", "--permission-prompts", "--allowed-tools", "--allowedTools", "--disallowed-tools", "--disallowedTools", "--tools", "--session-id", "--debug-file", "-n", "--name", "--autocompact", "--betas", "--file", "--max-budget-usd", "--max-thinking-tokens", "--max-turns", "--task-budget", "--plan-mode-instructions", "--plugin-dir", "--plugin-dir-no-mcp", "--plugin-url", "--rewind-files", "--thinking", "--thinking-display", "--remote-control-session-name-prefix", "--json-schema"]), iLn = /* @__PURE__ */ new Set([...fst, "--resume-session-at", "--resume-drops-turn", "--project-config-root", "--exec", "--correlation-id", "--metadata", ...[]]), eon = /* @__PURE__ */ new Set(["--allowed-tools", "--allowedTools", "--disallowed-tools", "--disallowedTools", "--tools", "--mcp-config", "--betas", "--add-dir", "--file", "--channels"]), C = /* @__PURE__ */ new Set(["--plugin-dir", "--plugin-dir-no-mcp", "--plugin-url"]), xhr = /* @__PURE__ */ new Set(["--dangerously-skip-permissions", "--allow-dangerously-skip-permissions", "--strict-mcp-config", "--dangerously-allow-browser-network-access", "--restricted", "--disable-slash-commands", "--include-unsupported-models", "--verbose", "--reply-on-resume", "--ide", "--chrome", "--no-chrome", "--bare", "--safe-mode", "--brief", "--remote-control", "--rc", "--local", "--unsandboxed", "--personal", "--allow-other-models"]), HTi = /* @__PURE__ */ new Set(["CLAUDE_CODE_SUBAGENT_MODEL_FORCE", "CLAUDE_CODE_HOST_GATEWAY_LINEAGE", "CLAUDE_CODE_STOP_ON_UNUSABLE_PROFILE"]), DTi = [...import_chunk_gd77dyw4.t4t, ...import_chunk_gd77dyw4.sLr, "CLAUDE_CODE_SUBAGENT_MODEL_FORCE", "CLAUDE_CODE_SUBAGENT_EFFORT"], c$t = /* @__PURE__ */ new Set(["CLAUDE_CONFIG_DIR", "CLAUDE_INTERNAL_FC_OVERRIDES", ...DTi, "CLAUDE_CODE_CLIENT_DATA_URL", "CLAUDE_CODE_ALLOW_OTHER_MODELS", "CLAUDE_CODE_ATTRIBUTION_PROJECT", ...import_chunk_gd77dyw4.GA, "AWS_REGION", "AWS_DEFAULT_REGION", "ANTHROPIC_BEDROCK_REGION_PREFIX", "AWS_PROFILE", "AWS_CONFIG_FILE", "AWS_SHARED_CREDENTIALS_FILE", "GOOGLE_APPLICATION_CREDENTIALS", "GOOGLE_CLOUD_PROJECT", "GCLOUD_PROJECT", "CLAUDE_SECURESTORAGE_CONFIG_DIR", "ANTHROPIC_PROFILE", "CLAUDE_CODE_STOP_ON_UNUSABLE_PROFILE", import_chunk_t8x29mwc.Sg, "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST", "CLAUDE_CODE_HOST_GATEWAY_LINEAGE"]), m = /* @__PURE__ */ new Set(["AWS_CONFIG_FILE", "AWS_SHARED_CREDENTIALS_FILE", "GOOGLE_APPLICATION_CREDENTIALS"]), L = "CLAUDE_SECURESTORAGE_CONFIG_DIR";
function D(n) {
  let r = (0, import_chunk_2gtmjt3y.Ze)(), o = [(0, import_path.join)(r, "jobs"), (0, import_path.join)((0, import_chunk_8nvd6fqx.Fp)(), (0, import_chunk_8nvd6fqx.Yct)()), (0, import_path.join)(r, "projects"), (0, import_path.join)(r, "plans"), (0, import_path.join)(r, "agent-memory")], e = import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_MEMORY_DIR;
  if (e) o.push((0, import_path.join)(e, "projects"), (0, import_path.join)(e, "agent-memory"));
  if (m.has(n)) try {
    o.push((0, import_path.join)((0, import_os.homedir)(), ".claude"));
  } catch {
  }
  return o;
}
function f(n) {
  return (0, import_chunk_2172r9j8.Ff)((0, import_chunk_z6pfqf6e.pn)((0, import_path.resolve)(n)));
}
function T(n) {
  return (0, import_chunk_cg8dqz0a.x)() === "windows" ? /^([A-Za-z]:[\\/]|[\\/]{2})/.test(n) : (0, import_path.isAbsolute)(n);
}
function LTi(n, r) {
  if (r === "") return n === L ? void 0 : "empty path";
  if (!T(r)) return "not a full path";
  let o = f(r);
  if ((0, import_chunk_cg8dqz0a.x)() !== "windows" && o.split(import_path.sep).includes((0, import_chunk_2172r9j8.Ff)((0, import_chunk_8nvd6fqx.Yct)()))) return "path is inside a Claude temp folder, which background sessions can write to without asking";
  for (let e of D(n)) {
    let i = (0, import_path.relative)(f(e), o);
    if (i !== ".." && !i.startsWith(`..${import_path.sep}`) && !(0, import_path.isAbsolute)(i)) return `path is inside ${e}, where background sessions can write some files without asking`;
  }
  return;
}
function crl(n, r) {
  let o = {};
  for (let [e, i] of Object.entries(n)) o[e] = i !== "" && m.has(e) ? (0, import_path.resolve)(r, I(e, i)) : i;
  return o;
}
function I(n, r) {
  if (!n.startsWith("AWS_") || !r.startsWith("~/")) return r;
  try {
    return (0, import_path.join)((0, import_os.homedir)(), r.slice(2));
  } catch {
    return r;
  }
}
var N = /^\s*(?:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}|(?:claude_proj|chan)_(?:staging_|local_)?01[1-9A-HJ-NP-Za-km-z]{22})\s*$/;
function url(n) {
  let r = {}, o = [];
  for (let [e, i] of Object.entries(n)) {
    let a = !c$t.has(e) ? "not kept for background sessions" : HTi.has(e) && !(0, import_chunk_69qhefwa.Ne)(i) ? "only kept when set to a true value such as 1" : m.has(e) || e === L ? LTi(e, i) : e === "CLAUDE_CODE_ATTRIBUTION_PROJECT" && !N.test(i) ? "not a claude.ai Project ID" : e === "ANTHROPIC_PROFILE" && !(0, import_chunk_9b4aq7fb.jX)(i) ? "not a profile name" : e === import_chunk_t8x29mwc.Sg && (!(0, import_chunk_t8x29mwc.S0e)(i) || (0, import_chunk_t8x29mwc.rle)(i)) ? "not a valid sign-in record" : void 0;
    if (a) o.push(`${(0, import_chunk_5e3gtsn9.z2t)(e)} (${a})`);
    else r[e] = i;
  }
  if (o.length === 0) return n;
  return (0, import_chunk_w578pjby.t)(`[jobs] ignored these saved environment entries in the job's state.json: ${o.join(", ")}`, { level: "warn" }), Object.keys(r).length > 0 ? r : void 0;
}
function jds(n, r) {
  let { kept: o, dropped: e } = (0, import_chunk_5e3gtsn9.aEo)(n);
  return e.forEach(({ name: i, problem: a }) => {
    try {
      (0, import_chunk_w578pjby.t)(`[jobs] dropped environment entry ${(0, import_chunk_5e3gtsn9.z2t)(i)} from ${r}: ${import_chunk_5e3gtsn9.$Wn[a]}.`, { level: "warn" });
    } catch {
    }
  }), o;
}
function q5e(n) {
  let r = [], o = [];
  for (let e = 0; e < n.length; e++) {
    let i = n[e];
    if (!i.startsWith("-")) {
      o.push(i);
      continue;
    }
    let a = i.indexOf("="), l = a === -1 ? i : i.slice(0, a);
    if (a !== -1 && !fst.has(l) && xhr.has(l)) {
      r.push(l), o.push(i);
      continue;
    }
    let d = a === -1 && fst.has(l), h = l !== "-m" && (a === -1 ? xhr.has(l) || d && n[e + 1] !== void 0 : fst.has(l)), _ = h ? r : o;
    if (_.push(i), d && n[e + 1] !== void 0) _.push(n[++e]);
    if (!h || d && eon.has(l)) while (n[e + 1] !== void 0 && !n[e + 1].startsWith("-")) _.push(n[++e]);
  }
  if (o.length > 0) (0, import_chunk_w578pjby.t)(`[jobs] stripped respawnFlags token(s) that a restart does not re-apply: ${o.join(" ")}`, { level: "warn" });
  return y(w(r));
}
function w(n) {
  let r = [];
  for (let o = 0; o < n.length; o++) {
    let e = n[o];
    if (!fst.has(e)) {
      r.push(e);
      continue;
    }
    let i = n[++o];
    if (!i.startsWith("-")) {
      r.push(e, i);
      continue;
    }
    r.push(`${e === "-n" ? "--name" : e}=${i}`);
    let a = n[o + 1];
    if (eon.has(e) && a !== void 0 && !a.startsWith("-")) r.push(e);
  }
  return r;
}
function y(n) {
  let r = [];
  for (let e = 0; e < n.length; e++) {
    let i = n[e], a = i.indexOf("="), l = a === -1 ? i : i.slice(0, a), d = [i];
    if (a === -1 && fst.has(l) && n[e + 1] !== void 0) {
      if (d.push(n[++e]), eon.has(l)) while (n[e + 1] !== void 0 && !n[e + 1].startsWith("-")) d.push(n[++e]);
    }
    r.push({ name: l, toks: d });
  }
  let o = /* @__PURE__ */ new Map();
  for (let e = 0; e < r.length; e++) {
    let i = r[e];
    if (fst.has(i.name) && !eon.has(i.name) && !C.has(i.name)) o.set(i.name, e);
  }
  return r.filter((e, i) => (o.get(e.name) ?? i) === i).flatMap((e) => e.toks);
}
function frl(n) {
  let r = n.lastIndexOf("--dangerously-skip-permissions");
  return r !== -1 && n.slice(r + 1).some((e) => e === "--permission-mode" || e.startsWith("--permission-mode=")) ? n.filter((e) => e !== "--dangerously-skip-permissions") : [...n];
}
function Gdo(n) {
  return n.includes("--dangerously-skip-permissions") ? [...n.filter((r) => r !== "--dangerously-skip-permissions"), "--dangerously-skip-permissions"] : [...n];
}
function eAe(n) {
  let r = [];
  for (let o = 0; o < n.length; o++) {
    let e = n[o];
    if (e === "--") {
      for (let a = o; a < n.length; a++) r.push(n[a]);
      break;
    }
    let i = e.startsWith("--") ? e.indexOf("=") : -1;
    if (i !== -1 && (iLn.has(e.slice(0, i)) || c.has(e.slice(0, i)))) {
      r.push(e.slice(0, i + 1) + u(e.slice(0, i), e.slice(i + 1)));
      continue;
    }
    if (/^-[a-zA-Z].+/.test(e)) {
      let a = 1;
      while (a < e.length - 1 && Gds.has(`-${e[a]}`)) a++;
      let l = `-${e[a]}`;
      if (e.length > a + 1 && (iLn.has(l) || c.has(l))) {
        r.push(e.slice(0, a + 1) + u(l, e.slice(a + 1)));
        continue;
      }
      if (e.length === a + 1 && a > 1 && (iLn.has(l) || c.has(l))) {
        if (r.push(e), iLn.has(l) && n[o + 1] !== void 0) {
          if (r.push(u(l, n[++o])), eon.has(l)) while (n[o + 1] !== void 0 && !E(n[o + 1])) r.push(u(l, n[++o]));
        } else if (c.has(l) && n[o + 1] !== void 0 && !E(n[o + 1])) r.push((0, import_chunk_z6pfqf6e.vF)(n[++o]));
        continue;
      }
    }
    if (r.push(e), iLn.has(e) && n[o + 1] !== void 0) {
      if (r.push(u(e, n[++o])), eon.has(e)) while (n[o + 1] !== void 0 && !E(n[o + 1])) r.push(u(e, n[++o]));
    } else if (c.has(e) && n[o + 1] !== void 0 && !E(n[o + 1])) r.push((0, import_chunk_z6pfqf6e.vF)(n[++o]));
  }
  return r;
}
var F = /* @__PURE__ */ new Set(["--system-prompt", "--append-system-prompt", "--append-subagent-system-prompt", "--plan-mode-instructions", "--name", "-n"]);
function u(n, r) {
  return F.has(n) ? r : (0, import_chunk_z6pfqf6e.vF)(r);
}
var c = /* @__PURE__ */ new Set(["-r", "--resume"]), Gds = /* @__PURE__ */ new Set(["-c", "-p", "-h", "-v"]);
function E(n) {
  return n.length > 1 && n.startsWith("-");
}
function Phr(n) {
  return n.includes("--reply-on-resume") ? [...n] : [...n, "--reply-on-resume"];
}
function u$t(n) {
  return n.filter((r) => r !== "--reply-on-resume");
}
