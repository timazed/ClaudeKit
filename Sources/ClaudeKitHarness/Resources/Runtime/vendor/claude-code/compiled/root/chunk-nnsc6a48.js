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
var chunk_nnsc6a48_exports = {};
__export(chunk_nnsc6a48_exports, {
  ECa: () => ECa,
  FGo: () => FGo,
  Gqs: () => Gqs,
  LGo: () => LGo,
  NGo: () => NGo,
  SCa: () => SCa,
  Vqs: () => Vqs,
  Wqs: () => Wqs,
  _Ca: () => _Ca,
  bCa: () => bCa,
  eYt: () => eYt,
  jqs: () => jqs,
  kCa: () => kCa,
  nvn: () => nvn,
  t6r: () => t6r,
  vCa: () => vCa,
  wCa: () => wCa,
  yCa: () => yCa,
  zqs: () => zqs
});
module.exports = __toCommonJS(chunk_nnsc6a48_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_mpk68jst = require("/$bunfs/root/chunk-mpk68jst.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_dw5px5e0 = require("/$bunfs/root/chunk-dw5px5e0.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_trq47kfh = require("/$bunfs/root/chunk-trq47kfh.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_xfr8663h = require("/$bunfs/root/chunk-xfr8663h.js");
var import_chunk_mx7wawy7 = require("/$bunfs/root/chunk-mx7wawy7.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_path = require("path");
var import_util = require("util");
(0, import_chunk_adx6804h.B)();
function LGo(e) {
  switch (e) {
    case "first_line":
      return "initialize_not_first";
    case "managed_settings":
      return "managed_settings_not_delivered";
    case "settings":
    case "disallowed_tools":
      return "initialize_fields_not_delivered";
    case "plugins":
    case "mcp_servers":
      return;
  }
}
var NGo = ["settings", "disallowedTools"], t6r = 268435456, W = Symbol("first line too long"), H = 65536, N, E, oe = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("control_request"), request: (0, import_chunk_adx6804h.$t)({ subtype: (0, import_chunk_adx6804h.v)("initialize"), plugins: (0, import_chunk_adx6804h.ie)().optional(), mcpServers: (0, import_chunk_adx6804h.ie)().optional(), managedSettings: (0, import_chunk_adx6804h.ie)().optional(), settings: (0, import_chunk_adx6804h.ie)().optional(), disallowedTools: (0, import_chunk_adx6804h.ie)().optional() }) }));
function _Ca(e, r = false, o = []) {
  if (N) return;
  let a = V(e);
  N = ae(a).then((f) => le(f, r, o), (f) => (a.error = f, (0, import_chunk_cqa9hrgx.l)("sdk_launch_initialize", "stdin_error"), { kind: "absent" })).catch(() => ((0, import_chunk_cqa9hrgx.m)("sdk_launch_initialize", "parse_threw"), { kind: "absent" })), N.then((f) => {
    if (f.kind === "applied") a.managedSettings = f.managedSettings, a.settings = f.settings, a.disallowedTools = f.disallowedTools, a.mcpServers = f.mcpServers, a.mcpConfigItem = f.mcpConfigItem;
    return J(a);
  });
}
function yCa(e) {
  if (E) return;
  let r = V(e);
  J(r);
}
function SCa(e) {
  let r = E;
  if (!r || !r.pumping || r.capped || r.adopted || r.watch) return;
  let o = { watcher: e, held: [], heldChars: 0, passing: false };
  r.watch = o;
  for (let a of r.stash.splice(0)) K(r, a);
  if (r.ended || r.error !== void 0) e.ended();
  return () => U(r, o);
}
function eYt() {
  return N ?? Promise.resolve(void 0);
}
function FGo() {
  let e = E;
  if (!e || e.adopted) return;
  if (e.watch) U(e, e.watch);
  return e.adopted = true, de(e);
}
function Wqs(e) {
  let r = (0, import_chunk_adx6804h.C)((0, import_chunk_xfj2cwfv.B6t)()).optional().safeParse(e);
  if (!r.success) return false;
  let o = r.data;
  if (o === void 0 || o.length === 0) return;
  let a = (0, import_chunk_rb36kwbn.ui)(), f = a?.preEnterOriginalCwd ?? a?.originalCwd ?? (0, import_chunk_f9x2f6cx.Te)(), g = new Set((0, import_chunk_f9x2f6cx.Rv)().map((S) => (0, import_path.resolve)(f, S))), h = new Set((0, import_chunk_f9x2f6cx.ZM)().map((S) => (0, import_path.resolve)(f, S)));
  return o.every((S) => S.skipMcpDiscovery ? h.has((0, import_path.resolve)(f, S.path)) : g.has((0, import_path.resolve)(f, S.path)));
}
function jqs(e) {
  if (e === void 0) return;
  return D(E?.managedSettings, e);
}
function q(e, r) {
  if (r === void 0) return;
  return D(E?.[e], r);
}
function Gqs(e) {
  return { settings_applied: q("settings", e.settings), disallowed_tools_applied: q("disallowedTools", e.disallowedTools) };
}
function zqs(e) {
  if (e === void 0 || (0, import_chunk_ma3kja9f.T)(e) && Object.keys(e).length === 0) return;
  return D(E?.mcpServers, e);
}
function bCa(e) {
  let r = E?.mcpConfigItem;
  return r !== void 0 && e[0] === r ? e.slice(1) : e;
}
function wCa(e, r) {
  let o = e.getOptionValue("mcpConfig");
  e.setOptionValueWithSource("mcpConfig", [r, ...Array.isArray(o) ? o : []], e.getOptionValueSource("mcpConfig"));
}
function D(e, r) {
  try {
    return e !== void 0 && (0, import_util.isDeepStrictEqual)(e, r);
  } catch {
    return false;
  }
}
function V(e) {
  let r = { generator: e(), stash: [], inflight: void 0, ended: false, error: void 0, adopted: false, capped: false, pumping: false, watch: void 0, managedSettings: void 0, settings: void 0, disallowedTools: void 0, mcpServers: void 0, mcpConfigItem: void 0 };
  return E = r, r;
}
async function ae(e) {
  let r = "";
  for (; ; ) {
    let o = r.indexOf(`
`);
    if (o !== -1) {
      let f = r.slice(0, o);
      if (f.trim() !== "") return f;
      r = r.slice(o + 1);
      continue;
    }
    if (r.length > t6r) return e.capped = true, W;
    e.inflight = e.generator.next();
    let a = await e.inflight;
    if (e.inflight = void 0, a.done) return e.ended = true, null;
    e.stash.push(a.value), r += a.value;
  }
}
async function J(e) {
  e.pumping = true;
  try {
    while (!e.adopted && !e.ended && !e.capped && e.error === void 0) {
      e.inflight = e.generator.next();
      let r = await e.inflight;
      if (e.inflight = void 0, r.done) e.ended = true;
      else K(e, r.value);
    }
  } catch (r) {
    e.inflight = void 0, e.error = r;
  }
  if (e.ended || e.error !== void 0) e.watch?.watcher.ended();
}
function K(e, r) {
  let o = e.watch;
  if (!o) {
    e.stash.push(r);
    return;
  }
  let a = 0;
  for (; ; ) {
    let g = r.indexOf(`
`, a);
    if (g === -1) break;
    let h = r.slice(a, g);
    a = g + 1;
    let S = !o.passing && o.heldChars + h.length <= H;
    if (o.passing = false, S && o.watcher.takes(o.held.join("") + h)) {
      o.held = [], o.heldChars = 0;
      continue;
    }
    x(e, o), e.stash.push(h + `
`);
  }
  if (a === r.length) return;
  let f = a === 0 ? r : r.slice(a);
  if (o.passing) {
    e.stash.push(f);
    return;
  }
  if (o.held.push(f), o.heldChars += f.length, o.heldChars > H) x(e, o), o.passing = true;
}
function x(e, r) {
  for (let o of r.held) e.stash.push(o);
  r.held = [], r.heldChars = 0;
}
function U(e, r) {
  if (e.watch !== r) return;
  x(e, r), e.watch = void 0;
}
async function* de(e) {
  let r = false;
  try {
    while (e.stash.length > 0) yield e.stash.shift();
    if (e.inflight) {
      await e.inflight.catch(() => {
      });
      while (e.stash.length > 0) yield e.stash.shift();
    }
    if (e.error !== void 0) throw e.error;
    if (e.ended) return;
    r = true, yield* e.generator;
  } finally {
    if (!r && !e.ended) e.generator.return(void 0).catch(() => {
    });
  }
}
function le(e, r, o) {
  if (e === null) return (0, import_chunk_w578pjby.t)("--await-initialize: stdin ended before an initialize request arrived", { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("sdk_launch_initialize", "stdin_ended"), { kind: "absent" };
  if (e === W) return (0, import_chunk_w578pjby.t)("--await-initialize: first stdin line exceeds the line-size ceiling; not parsed", { level: "error" }), (0, import_chunk_cqa9hrgx.m)("sdk_launch_initialize", "first_line_too_long"), { kind: "absent" };
  let a;
  try {
    a = (0, import_chunk_mx7wawy7.blt)((0, import_chunk_w578pjby.te)((0, import_chunk_0jve1fep.Ys)(e)));
  } catch {
    return (0, import_chunk_cqa9hrgx.m)("sdk_launch_initialize", "first_line_not_json"), { kind: "violation", cause: "first_line", message: "Error: --await-initialize requires the initialize control request as the first stdin line, and the first line is not valid JSON." };
  }
  let f = oe().safeParse(a);
  if (!f.success) return (0, import_chunk_cqa9hrgx.m)("sdk_launch_initialize", "first_line_not_initialize"), { kind: "violation", cause: "first_line", message: "Error: --await-initialize requires the initialize control request as the first stdin line, and the first line is a different message." };
  let g = (0, import_chunk_adx6804h.C)((0, import_chunk_xfj2cwfv.B6t)()).optional().safeParse(f.data.request.plugins);
  if (!g.success) return (0, import_chunk_cqa9hrgx.m)("sdk_launch_initialize", "plugins_malformed"), { kind: "violation", cause: "plugins", message: "Error: initialize.plugins must be an array of { type: 'local', path: string, skipMcpDiscovery?: boolean } entries." };
  let h = f.data.request.mcpServers, S, k;
  if (h !== void 0) {
    if (!(0, import_chunk_ma3kja9f.T)(h)) return (0, import_chunk_cqa9hrgx.m)("sdk_launch_initialize", "mcp_servers_malformed"), { kind: "violation", cause: "mcp_servers", message: "Error: initialize.mcpServers must be a JSON object of MCP server configs keyed by server name." };
    try {
      k = (0, import_chunk_w578pjby._)({ mcpServers: h });
    } catch {
      return (0, import_chunk_cqa9hrgx.m)("sdk_launch_initialize", "mcp_servers_malformed"), { kind: "violation", cause: "mcp_servers", message: "Error: initialize.mcpServers could not be read. It may be nested too deeply." };
    }
    if (S = h, Object.keys(S).length === 0) S = void 0, k = void 0;
  }
  let z;
  if (r) {
    let y = f.data.request.managedSettings;
    if (!(0, import_chunk_ma3kja9f.T)(y)) return { kind: "violation", cause: "managed_settings", message: "Error: --managed-settings-in-initialize requires initialize.managedSettings to be a JSON object." };
    z = y;
  }
  let L;
  if (o.includes("settings")) {
    let y = f.data.request.settings;
    if (!(0, import_chunk_ma3kja9f.T)(y)) return { kind: "violation", cause: "settings", message: "Error: --initialize-fields=settings requires initialize.settings to be a JSON object." };
    L = y;
  }
  let O;
  if (o.includes("disallowedTools")) {
    let y = (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).safeParse(f.data.request.disallowedTools);
    if (!y.success) return { kind: "violation", cause: "disallowed_tools", message: "Error: --initialize-fields=disallowedTools requires initialize.disallowedTools to be a list of strings." };
    O = y.data;
  }
  let I = g.data ?? [];
  return (0, import_chunk_cqa9hrgx.u)("sdk_launch_initialize"), { kind: "applied", pluginDirs: I.filter((y) => !y.skipMcpDiscovery).map((y) => y.path), pluginDirsNoMcp: I.filter((y) => y.skipMcpDiscovery).map((y) => y.path), organizationPluginDirs: I.filter((y) => y.requiredByOrganization).map((y) => y.path), managedSettings: z, settings: L, disallowedTools: O, mcpServers: S, mcpConfigItem: k };
}
var X = 10485760, Y = Symbol("stream-json messages of this process's stdin");
function kCa(e) {
  return typeof e !== "string" && Y in e;
}
async function* nvn() {
  try {
    process.stdin.setEncoding("utf8"), yield* (0, import_chunk_ndrgvsn7.XLr)(process.stdin);
  } catch (e) {
    if (!(0, import_chunk_ndrgvsn7.l3n)(e)) throw e;
    (0, import_chunk_w578pjby.t)(`getInputPrompt: stream-json stdin unreadable: ${(0, import_chunk_jv7av99m.d)(e)}`, { level: "error" }), (0, import_chunk_k449cc64.i)(Object.assign(Error("getInputPrompt: stream-json stdin unreadable"), { code: (0, import_chunk_jv7av99m.w)(e) })), await (0, import_chunk_mpk68jst.ho)(`Error: cannot read --input-format=stream-json messages from stdin (${(0, import_chunk_jv7av99m.w)(e)}): stdin is unreadable. stream-json input requires a readable stdin for the lifetime of the session.`);
  }
}
async function ECa(e, r) {
  if (!process.stdin.isTTY && (0, import_chunk_dw5px5e0.MFr)() !== "mcp") {
    if (r === "stream-json") return Object.defineProperty(FGo() ?? nvn(), Y, { value: true });
    let o = "", a = (g) => {
      if (o.length + g.length > X) return process.stdin.off("data", a), (0, import_chunk_mpk68jst.Bn)(`Error: piped stdin input exceeds ${X / 1024 / 1024}MB. Pass large content as a file path in your prompt instead.`);
      o += g;
    };
    try {
      process.stdin.setEncoding("utf8"), process.stdin.on("data", a);
    } catch (g) {
      if (process.stdin.off("data", a), !(0, import_chunk_ndrgvsn7.l3n)(g)) throw g;
      return (0, import_chunk_w578pjby.t)(`getInputPrompt: piped stdin unreadable: ${(0, import_chunk_jv7av99m.d)(g)}`, { level: "error" }), (0, import_chunk_k449cc64.i)(Object.assign(Error("getInputPrompt: piped stdin unreadable"), { code: (0, import_chunk_jv7av99m.w)(g) })), (0, import_chunk_mpk68jst.PN)(`Warning: stdin is unreadable (${(0, import_chunk_jv7av99m.w)(g)}), proceeding without piped input. If you piped input, it was not received \u2014 pass it as a prompt argument, or check that the process launching Claude Code wires stdin to a pipe or /dev/null.`), e;
    }
    let f = await (0, import_chunk_ndrgvsn7.YLr)(process.stdin, 3e3);
    if (process.stdin.off("data", a), f) (0, import_chunk_mpk68jst.PN)("Warning: no stdin data received in 3s, proceeding without it. If piping from a slow command, redirect stdin explicitly: < /dev/null to skip, or wait longer.");
    return [e, o].filter(Boolean).join(`
`);
  }
  return e;
}
var b = "[REDACTED]";
function F(e) {
  let r = e;
  for (let o = 0; r && o < 32; o++) {
    let a = r._zod.def;
    switch (a.type) {
      case "optional":
      case "nullable":
      case "default":
      case "prefault":
      case "catch":
      case "nonoptional":
      case "readonly":
        r = a.innerType;
        break;
      case "pipe":
        r = a.in?._zod.def.type === "transform" ? a.out : a.in;
        break;
      case "lazy":
        r = a.getter?.();
        break;
      default:
        return r;
    }
  }
  return;
}
function G(e, r) {
  let o = F(e);
  if (o?._zod.def.type !== "union") return o;
  let a = o._zod.def.options?.find((f) => f.safeParse(r).success);
  return a && G(a, r);
}
function ce(e) {
  let r = e?._zod.def.type;
  return r !== void 0 && r !== "unknown" && r !== "any";
}
function ue(e, r) {
  let o = G(e, r)?._zod.def;
  return o?.type === "array" ? o.element : void 0;
}
function j(e, r) {
  let o = F(e)?._zod.def;
  switch (o?.type) {
    case "boolean":
      return typeof r === "boolean";
    case "number":
      return typeof r === "number";
    case "enum":
      return Object.values(o.entries ?? {}).includes(r);
    case "literal":
      return o.values?.includes(r) ?? false;
    case "union":
      return o.options?.some((a) => j(a, r)) ?? false;
    default:
      return false;
  }
}
var Z = /* @__PURE__ */ new Set(["permissions.allow", "permissions.deny", "permissions.ask"]), fe = /^mcp__[\w-]+(?:__(?:[\w.-]+|\*))?$/;
function ge() {
  return /* @__PURE__ */ new Set([...((0, import_chunk_4vsz8a99.OU)() ?? []).flatMap((e) => [e.name, ...e.aliases ?? []]), import_chunk_hn3cwwzt.ke, import_chunk_rb36kwbn.yt, import_chunk_865at33z.Qr, import_chunk_865at33z.Sr]);
}
function pe(e, r) {
  if (typeof e !== "string") return b;
  let { toolName: o, ruleContent: a } = (0, import_chunk_qebpc5de.Ur)(e);
  if (!(r.has(o) || fe.test(o))) return b;
  return a === void 0 ? o : `${o}(${b})`;
}
var me = "sandbox.ignoreViolations";
function he(e, r) {
  let o = G(r, e)?._zod.def;
  if (o?.type === "object" && o.shape) {
    let { shape: g } = o;
    return Object.keys(e).filter((h) => Object.hasOwn(g, h)).map((h) => [h, g[h]]);
  }
  let { keyType: a, valueType: f } = o ?? {};
  if (o?.type === "record" && a && f && ce(F(f))) return Object.keys(e).filter((g) => a.safeParse(g).success).map((g) => [g, f]);
  return;
}
var Se = /* @__PURE__ */ new Set(["sandbox.network.httpProxyPort", "sandbox.network.socksProxyPort"]);
function P(e, r, o, a) {
  switch (typeof e) {
    case "string":
    case "boolean":
      return j(r, e) ? e : b;
    case "number":
      return j(r, e) && !Se.has(o) ? e : b;
    case "undefined":
      return;
    case "object":
      break;
    default:
      return b;
  }
  if (e === null) return null;
  if (Array.isArray(e)) {
    if (Z.has(o)) return e.map((S) => pe(S, a));
    let h = ue(r, e);
    return h ? e.map((S) => P(S, h, o, a)) : b;
  }
  if (Z.has(o)) return b;
  let f = he(e, r);
  if (!f) return b;
  let g = e;
  if (o === me) return f.map(([h, S]) => P(g[h], S, o, a));
  return Object.fromEntries(f.map(([h, S]) => [h, P(g[h], S, o ? `${o}.${h}` : h, a)]));
}
var Q = 8192;
function ye(e) {
  let r = (0, import_chunk_w578pjby._)(P(e, (0, import_chunk_xcgcdx61.uge)(e), "", ge()));
  if (Buffer.byteLength(r) <= Q) return { content: r, truncated: false };
  let o = 0, a = 0;
  for (let f of r) {
    if (o += Buffer.byteLength(f), o > Q) break;
    a += f.length;
  }
  return { content: r.slice(0, a), truncated: true };
}
function ee(e) {
  let { sources: r, behavior: o } = (0, import_chunk_2yx6c1y2.rHr)(), a = (0, import_chunk_2yx6c1y2.ogn)(), f = a.entry, g = a.state === "none" && f?.path === void 0 && f?.script === void 0 && (0, import_chunk_2yx6c1y2.Dee)() === "remote" && (0, import_chunk_2yx6c1y2.lKt)().errors.some((S) => (0, import_chunk_xcgcdx61.zFe)().chain.some((k) => S.path === `policyHelpers.${k}`)), h = { "managed_settings.trigger": e, "managed_settings.sources": r, "managed_settings.source_behavior": o, "managed_settings.helper.state": g ? "entry_invalid" : a.state, "managed_settings.helper.applied": a.applied };
  if (f) {
    if (h["managed_settings.helper.entry"] = f.key, f.path !== void 0) h["managed_settings.helper.path"] = f.path;
    else if (f.script !== void 0) h["managed_settings.helper.script_sha256"] = (0, import_chunk_ccm69jjy.Je)(f.script);
  }
  return h;
}
function M(e) {
  let r = e instanceof Error ? e.constructor.name : typeof e;
  (0, import_chunk_k449cc64.i)(new import_chunk_jv7av99m.A(`managed_settings_resolved emit failed (${r})`, "managed_settings_resolved emit failed"));
}
function ne() {
  let e = (0, import_chunk_5e3gtsn9.b9)()?.OTEL_LOG_MANAGED_SETTINGS;
  for (let o of (0, import_chunk_xzvhvaa2.Ko)()) {
    if (import_chunk_xzvhvaa2.yp.has(o)) continue;
    e = (0, import_chunk_5e3gtsn9.Gle)((0, import_chunk_2yx6c1y2._e)(o)?.env, o).OTEL_LOG_MANAGED_SETTINGS ?? e;
  }
  let r = (0, import_chunk_5e3gtsn9.Gc)();
  return (0, import_chunk_69qhefwa.Ne)(e ?? (r ? r.OTEL_LOG_MANAGED_SETTINGS : import_chunk_c203g5kd.s.OTEL_LOG_MANAGED_SETTINGS));
}
function re(e, r) {
  if (!r) delete e["managed_settings.resolved_sha256"], delete e["managed_settings.helper.script_sha256"];
}
function vCa() {
  let e = false, r = null, o = (f) => {
    try {
      let g = ee(f), h = (0, import_chunk_2yx6c1y2._e)("policySettings");
      if (h) g["managed_settings.resolved_sha256"] = (0, import_chunk_ccm69jjy.Je)((0, import_chunk_w578pjby._)((0, import_chunk_xcgcdx61.sF)(h)));
      let { "managed_settings.trigger": S, ...k } = g, z = (0, import_chunk_w578pjby._)(k);
      if (z === r) return;
      r = z;
      let L = ne();
      if (re(g, L), h && L) {
        let { content: O, truncated: I } = ye(h);
        g["managed_settings.settings"] = O, g["managed_settings.settings_truncated"] = I;
      }
      (0, import_chunk_xfr8663h.ql)("managed_settings_resolved", g).catch(M);
    } catch (g) {
      M(g);
    }
  }, a = import_chunk_trq47kfh.Ti.subscribe((f) => {
    if (f === "policySettings" && e) o("change");
  });
  return o("startup"), e = true, a;
}
function Vqs(e) {
  try {
    let r = ee("refused");
    re(r, ne()), (0, import_chunk_xfr8663h.ql)("managed_settings_resolved", { ...r, "error.type": e }).catch(M);
  } catch (r) {
    M(r);
  }
}
