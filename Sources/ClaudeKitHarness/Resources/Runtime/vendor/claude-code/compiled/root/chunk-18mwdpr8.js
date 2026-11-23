const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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
  var E2 = typeof SuppressedError === "function" ? SuppressedError : function(e, s2, m, _) {
    return _ = Error(m), _.name = "SuppressedError", _.error = e, _.suppressed = s2, _;
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
var chunk_18mwdpr8_exports = {};
__export(chunk_18mwdpr8_exports, {
  DTn: () => DTn,
  I7l: () => I7l,
  Ket: () => Ket,
  LTn: () => LTn,
  NKo: () => NKo,
  etr: () => etr,
  p4r: () => p4r,
  qet: () => qet
});
module.exports = __toCommonJS(chunk_18mwdpr8_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_akwvpp7y = require("/$bunfs/root/chunk-akwvpp7y.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_np189awg = require("/$bunfs/root/chunk-np189awg.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_jg3mepas = require("/$bunfs/root/chunk-jg3mepas.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_4yjj7pjs = require("/$bunfs/root/chunk-4yjj7pjs.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_ha393e1n = require("/$bunfs/root/chunk-ha393e1n.js");
var import_chunk_mndk3x2g = require("/$bunfs/root/chunk-mndk3x2g.js");
var import_chunk_b83x8d52 = require("/$bunfs/root/chunk-b83x8d52.js");
var import_chunk_6dfy8crz = require("/$bunfs/root/chunk-6dfy8crz.js");
var import_chunk_rmc00en4 = require("/$bunfs/root/chunk-rmc00en4.js");
var import_chunk_6d4w1614 = require("/$bunfs/root/chunk-6d4w1614.js");
var import_chunk_wyxkas6w = require("/$bunfs/root/chunk-wyxkas6w.js");
var import_chunk_ed372ykp = require("/$bunfs/root/chunk-ed372ykp.js");
var import_chunk_wwft95x8 = require("/$bunfs/root/chunk-wwft95x8.js");
var import_chunk_s1btam0h = require("/$bunfs/root/chunk-s1btam0h.js");
var import_chunk_9xt9z453 = require("/$bunfs/root/chunk-9xt9z453.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_tt4yhkc0 = require("/$bunfs/root/chunk-tt4yhkc0.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_net = require("net");
var import_promises = require("dns/promises");
var import_net2 = require("net");
var import_ws = __toESM(require("ws"));
(0, import_chunk_adx6804h.B)();
class Ket extends Error {
  constructor(e) {
    super(e);
    this.name = "MonitorWsPreconditionError";
  }
}
function NKo(e) {
  switch (e.protocol) {
    case "wss:":
    case "https:":
      e.protocol = "wss:";
      break;
    case "ws:":
    case "http:":
      e.protocol = "ws:";
      break;
    default:
      throw new Ket(`unsupported socket base scheme ${e.protocol}`);
  }
  return e.toString();
}
async function ye(e, o) {
  let r = new URL(e), a = (0, import_chunk_sjqze7qg.hnn)(r.hostname);
  if ((0, import_net2.isIP)(a)) {
    if ((0, import_chunk_sjqze7qg.bot)(a)) throw new Ket(`${a} is in a private, link-local, or cloud-metadata range`);
    return { url: e, tls: o.tls };
  }
  let u;
  try {
    u = await (0, import_promises.lookup)(a, { all: true });
  } catch (T) {
    let L = (0, import_chunk_jv7av99m.w)(T);
    if (o.proxy && import_chunk_c203g5kd.s.CLAUDE_CODE_PROXY_RESOLVES_HOSTS && (L === "EAI_AGAIN" || L === "ENOTFOUND")) {
      if ((0, import_chunk_akwvpp7y.pF)(a) || a.replace(/\.$/, "").split(".").includes("")) throw new Ket(`${a} did not resolve here and is not left to the proxy: the name means loopback or cloud metadata, or has an empty label`);
      return (0, import_chunk_w578pjby.t)(`[callWs] ${a} did not resolve here (${(0, import_chunk_jv7av99m.D)(T).message}); left to the proxy`), { url: e, tls: o.tls };
    }
    throw new Ket(`could not resolve ${a}: ${(0, import_chunk_jv7av99m.D)(T).message}`);
  }
  if (u.length === 0) throw new Ket(`could not resolve ${a}`);
  for (let { address: T } of u) if ((0, import_chunk_sjqze7qg.bot)(T)) throw new Ket(`${a} resolves to ${T}, which is in a private, link-local, or cloud-metadata range`);
  if (o.proxy) return { url: e, tls: o.tls };
  if (r.protocol === "wss:") return { url: e, tls: o.tls };
  let h = u.find((T) => T.family === 4) ?? u[0], I = r.host;
  return r.hostname = h.family === 6 ? `[${h.address}]` : h.address, { url: r.toString(), headers: { Host: I }, tls: o.tls };
}
var be = 3e4, p4r = "handshake_timeout";
function Se(e, o) {
  let r = Number.isInteger(e) && e >= 100 && e <= 599 ? e : 0;
  return `${o ? "cf_mitigated" : "upgrade_rejected"}_${r}`;
}
function qet(e) {
  let o = /^(cf_mitigated|upgrade_rejected)_(\d{1,3})$/.exec(e ?? "");
  if (o === null) return null;
  return { status: Number(o[2]), cfMitigated: o[1] === "cf_mitigated" };
}
var Q = 1048576;
function we(e) {
  if (Array.isArray(e)) return e.reduce((o, r) => o + r.length, 0);
  if (e instanceof ArrayBuffer) return e.byteLength;
  return e.length;
}
function DTn(e) {
  return { taskRegistry: e.taskRegistry, toolUseId: e.toolUseId, agentId: e.agentId, storageV5: e.storageV5, credentials: e.credentials, hookCaller: e.hookCaller, hookServesModel: e.hookServesModel };
}
function Ce(e) {
  return (o) => {
    if (e.readyState === import_ws.default.OPEN) try {
      e.send(o);
    } catch {
    }
  };
}
async function etr(e, o) {
  let r = DTn(o), { description: a, timeout_ms: u, persistent: h } = e, { url: I, protocols: T } = e.ws;
  (0, import_chunk_np189awg.COo)(I);
  let { toolUseId: L, taskRegistry: y } = r, b = (0, import_chunk_sjqze7qg.PCe)(r), m = e.reuseTaskId ?? (0, import_chunk_ed372ykp.OT)("monitor_ws");
  (0, import_chunk_6d4w1614.S3r)(m, r, y);
  let N = (0, import_chunk_6d4w1614.y3r)({ description: a, agentId: b, taskRef: { id: m }, arm: e.quietLifecycle ? void 0 : "ws", killTask: () => {
    if (!(0, import_chunk_6d4w1614.qqo)(m, g)) return false;
    return (0, import_chunk_6d4w1614.xO)(m, y, { quiet: true }), true;
  } }), z = (0, import_chunk_3jjr3wje.Z1)(I), W = await ye(I, { proxy: z, tls: (0, import_chunk_3jjr3wje.QN)(I) }), j = (0, import_chunk_xcgcdx61.mi)(e.headers ?? {}, (f, d) => d.toLowerCase() === "host"), g = new import_ws.default(W.url, T, { proxy: z, headers: { ...j, ...W.headers }, tls: W.tls }), F = Date.now(), R, v = () => (0, import_chunk_6d4w1614.qqo)(m, g), H = Date.now();
  g.on("open", () => {
    let f = y.all()[m];
    if (f && f.status === "running" && v()) try {
      e.onLifecycle?.("open", void 0, Date.now() - F);
    } catch {
    }
    let d = e.keepalive;
    if (d && f && f.status === "running" && v()) {
      for (let M of d.openFrames) try {
        g.send(M);
      } catch {
      }
      H = Date.now();
      let k = { lastAt: H };
      R = setInterval((M, x, _, pe, q, X) => {
        let K = Date.now();
        if (_ !== void 0 && K - H > _) {
          try {
            M.terminate();
          } catch {
          }
          return;
        }
        let G = q;
        try {
          G = pe?.() ?? q;
        } catch {
        }
        if (!(_ !== void 0 && K - H > _ - q * 2) && K - X.lastAt < G - q / 2) return;
        X.lastAt = K;
        for (let fe of typeof x === "function" ? x() : x) try {
          M.send(fe);
        } catch {
        }
      }, d.intervalMs, g, typeof d.frame === "string" ? [d.frame] : d.frame, d.deadlineMs, d.sendEveryMs, d.intervalMs, k), R.unref?.();
    }
    if (e.onSender && f && f.status === "running" && v()) try {
      e.onSender(Ce(g));
    } catch {
    }
  }), g.on("ping", () => {
    H = Date.now();
  }), g.on("message", (f, d) => {
    H = Date.now();
    let k = y.all()[m];
    if (!k || k.status !== "running" || !v()) return;
    let M = we(f);
    if (M > Q) {
      (0, import_chunk_6d4w1614.Gte)(a, `[Dropped ${M}-byte frame (exceeds ${Q}); closing]`, m, { isHousekeeping: true, agentId: b, turnAttribution: "none" }), (0, import_chunk_6d4w1614.xO)(m, y, { quiet: true });
      return;
    }
    if (d) {
      if (typeof e.transform === "function") return;
      N.onData(`[binary frame, ${M} bytes]
`);
      return;
    }
    let x = f.toString("utf8");
    if (typeof e.transform === "function") {
      let _;
      try {
        _ = e.transform(x);
      } catch {
        _ = null;
      }
      if (_ === null) return;
      x = _;
    }
    N.onData(x + `
`);
  });
  let V;
  g.on("unexpected-response", (f, d) => {
    let k = d?.statusCode ?? 0;
    if (k === 101) return;
    let M = d?.headers ?? {}, x = M["cf-mitigated"] !== void 0;
    V = Se(k, x), (0, import_chunk_w578pjby.t)(`[callWs] upgrade rejected: status=${k} cf-mitigated=${String(M["cf-mitigated"])} cf-ray=${String(M["cf-ray"])}`), d?.resume?.();
    let _ = y.all()[m];
    if (!e.quietLifecycle && _?.status === "running" && v()) (0, import_chunk_6d4w1614.Gte)(a, `[WebSocket upgrade rejected: HTTP ${k}]`, m, { isHousekeeping: true, agentId: b, turnAttribution: "none" });
    try {
      g.terminate();
    } catch {
    }
  }), g.on("error", (f) => {
    clearInterval(R);
    try {
      e.onSenderClosed?.();
    } catch {
    }
    let d = y.all()[m];
    if (!d || d.status !== "running" || !v()) return;
    if ((0, import_chunk_w578pjby.t)(`[callWs] socket error: ${f.message}`), !e.quietLifecycle && V === void 0) (0, import_chunk_6d4w1614.Gte)(a, `[WebSocket error: ${f.message}]`, m, { isHousekeeping: true, agentId: b, turnAttribution: "none" });
  }), g.on("close", (f, d) => {
    clearInterval(R), N.flushAndClose();
    try {
      e.onSenderClosed?.();
    } catch {
    }
    let k = y.all()[m];
    if (!k || k.status !== "running" || !v()) return;
    try {
      e.onLifecycle?.("close", V ?? String(f), Date.now() - F);
    } catch {
    }
    if (!e.quietLifecycle) {
      let M = d.length ? ` ${d.toString("utf8")}` : "";
      (0, import_chunk_6d4w1614.Gte)(a, `[WebSocket closed: ${f}${M}]`, m, { isHousekeeping: true, agentId: b, turnAttribution: "none" });
    }
    (0, import_chunk_6d4w1614.xO)(m, y, { quiet: true, connectionLost: true });
  });
  let me = h ? void 0 : setTimeout((f, d, k, M, x, _) => {
    if (f.isClosed()) return;
    if (!_.quiet) {
      if (f.flush(), f.isClosed()) return;
      (0, import_chunk_6d4w1614.Gte)(d, (0, import_chunk_6dfy8crz.Wds)(_.timeoutMs, f.eventCount(), _.bounded), k, { isHousekeeping: true, agentId: M });
    }
    (0, import_chunk_6d4w1614.xO)(k, x, { quiet: true });
  }, u, N, a, m, b, y, { timeoutMs: u, bounded: e.bounded === true, quiet: e.quietLifecycle }), de = { ...(0, import_chunk_ed372ykp.tb)(m, "monitor_ws", a, L), type: "monitor_ws", status: "running", url: I, timeoutId: me, agentId: b, ...e.ambient && { ambient: true }, ...e.autoReactArmed && { autoReactArmed: true }, ...e.autoReactSlug && { autoReactSlug: e.autoReactSlug }, ...e.frameLive && { frameLive: { ...e.frameLive, armedAt: Date.now() } } };
  if (y.register(de), (0, import_chunk_6d4w1614.iDa)(m, g), (0, import_chunk_4yjj7pjs.EH)(b, `monitor:${m}`, y), e.ambient) {
    let f = setTimeout((d, k, M, x, _) => {
      if (d.readyState === 0 && (0, import_chunk_6d4w1614.qqo)(k, d)) {
        try {
          x.onLifecycle?.("close", p4r, Date.now() - _);
        } catch {
        }
        (0, import_chunk_6d4w1614.xO)(k, M, { quiet: true, connectionLost: true });
      }
    }, e.handshakeDeadlineMs ?? be, g, m, y, e, F);
    f.unref?.(), g.once("open", () => clearTimeout(f)), g.once("close", () => clearTimeout(f));
  }
  return { data: { taskId: m, timeoutMs: h ? 0 : u, persistent: h } };
}
var te = "Shell command or script. Each stdout line is an event; exit ends the watch.", Te = "command contains control characters that would be hidden in the approval dialog", oe = () => (0, import_chunk_adx6804h.n)().refine(import_chunk_xfj2cwfv.Kx, Te), _e = () => (0, import_chunk_adx6804h.c)({ url: (0, import_chunk_adx6804h.n)().refine(import_chunk_xfj2cwfv.Kx, "url contains control characters that would be hidden in the approval dialog").refine((e) => {
  try {
    let o = new URL(e);
    return (o.protocol === "ws:" || o.protocol === "wss:") && !o.username && !o.password && !/[\t\n\r]/.test(e) && /^[\x00-\x7F]*$/.test(e);
  } catch {
    return false;
  }
}, "url must be a valid ASCII ws:// or wss:// URL with no userinfo or whitespace"), protocols: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)().regex(/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/, "protocol must be an RFC 6455 token")).refine((e) => new Set(e).size === e.length, "protocols must be unique").optional() }).describe("WebSocket to open. Each text frame is an event; binary frames are reported as a placeholder line. Socket close ends the watch. Cannot be combined with command."), ne = "Short human-readable description of what you are monitoring (shown in notifications).";
function Ie() {
  return { description: (0, import_chunk_adx6804h.n)().describe(ne), timeout_ms: (0, import_chunk_adx6804h.E)().min(1e3).optional().default(import_chunk_6dfy8crz.Xbt).describe(`Kill the monitor after this deadline. Default ${import_chunk_6dfy8crz.Xbt}ms, max ${import_chunk_6dfy8crz.Thr}ms. Ignored when persistent is true.`), persistent: (0, import_chunk_adx6804h.P)().optional().default(false).describe((0, import_chunk_jg3mepas.Ly)() ? `Run with no timeout until ${import_chunk_s1btam0h.Ra}. In this session a monitor is likely stopped a few minutes after your reply, so persistent does not keep a watch running past your reply.` : "Run for the lifetime of the session (no timeout). Use for session-length watches like PR monitoring or log tails. Stop with TaskStop.") };
}
function re() {
  let e = (0, import_chunk_6dfy8crz.V5e)();
  return { description: (0, import_chunk_adx6804h.n)().describe(ne), timeout_ms: (0, import_chunk_adx6804h.E)().min(1e3).max(import_chunk_6dfy8crz.Thr, `timeout_ms must be \u2264 ${import_chunk_6dfy8crz.Thr}`).optional().default(import_chunk_6dfy8crz.Xbt).describe(`Kill the monitor after this deadline. Default ${import_chunk_6dfy8crz.Xbt}ms. Deadlines above ${e}ms are capped to ${e}ms. You are notified at expiry and can re-arm.`) };
}
var ve = { message: `timeout_ms must be \u2264 ${import_chunk_6dfy8crz.Thr}`, path: ["timeout_ms"] };
function xe(e) {
  return e.persistent || e.timeout_ms <= import_chunk_6dfy8crz.Thr;
}
function se(...e) {
  return (0, import_chunk_4smdap7r.U)(e, Boolean) === 1;
}
function Re() {
  return (0, import_chunk_bzyb60p0.JMe)() ? (0, import_chunk_bzyb60p0.Zxn)() : {};
}
var ie = "allowed_domains applies only to a command monitor";
function ae(e) {
  return e.command !== void 0 || (0, import_chunk_bzyb60p0._ye)(e) === void 0;
}
function Ee(e) {
  let o = (0, import_chunk_bzyb60p0.ePn)(e);
  return o === void 0 ? e.command ?? "" : { command: e.command ?? "", ...o };
}
var le = "exactly one of command or ws";
function ce() {
  return { command: oe().optional().describe(te), ...Re(), ws: _e().optional() };
}
var De = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ ...Ie(), ...ce() }).refine((e) => se(e.command, e.ws), le).refine(ae, ie).refine(xe, ve)), Oe = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ ...re(), ...ce() }).refine((e) => se(e.command, e.ws), le).refine(ae, ie));
function Pe() {
  return (0, import_chunk_6dfy8crz.ZCe)() ? Oe() : De();
}
var Le = (0, import_chunk_2cbgkbm2.p)(() => {
  let e = re(), o = (0, import_chunk_6dfy8crz.V5e)();
  return (0, import_chunk_adx6804h.c)({ ...e, timeout_ms: e.timeout_ms.describe(`Kill the monitor after this deadline. Default ${import_chunk_6dfy8crz.Xbt}ms. Deadlines above ${o}ms are capped to ${o}ms.${(0, import_chunk_6dfy8crz.Jbt)() ? " It may also stop soon after your reply." : ""}`), command: oe().describe(te) });
});
function $e() {
  if (!(0, import_chunk_f9x2f6cx.Y)()) return;
  let e = (0, import_chunk_sjqze7qg.Pq)(Le());
  return Ne(e) ? e : void 0;
}
function Ne(e) {
  return e.type === "object";
}
var We = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ taskId: (0, import_chunk_adx6804h.n)().describe("ID of the background monitor task."), timeoutMs: (0, import_chunk_adx6804h.E)().describe("Timeout deadline in milliseconds (0 when persistent)."), persistent: (0, import_chunk_adx6804h.P)().optional().describe("No timeout \u2014 runs until TaskStop or session end."), keptInSandboxByCheck: (0, import_chunk_adx6804h.P)().optional().describe("True when the command ran in the sandbox only because its permission check relied on the sandbox; the settings would otherwise have exempted it.") }));
function Be(e) {
  let o = (0, import_chunk_sjqze7qg.PCe)(e);
  if (o !== void 0 && (0, import_chunk_bzyb60p0.FF)(o)) throw Error("This agent has been stopped and its stop is still completing; it cannot start monitors.");
}
async function He(e, o, r) {
  var _stack = [];
  try {
    const a = __using(_stack, (0, import_chunk_bzyb60p0.SOn)({ ...r, toolState: o.toolState }, e, import_chunk_9xt9z453.Xo, () => (0, import_chunk_bzyb60p0.qm)({ command: e.command }), () => import_chunk_ha393e1n.Ue.isSandboxingEnabled()));
    let u = (0, import_chunk_b83x8d52.Z0n)((0, import_chunk_bz1f2qnq.Z)(o), import_chunk_9xt9z453.Xo);
    if (u?.verdict.behavior === "deny") return u.verdict;
    let h = await (0, import_chunk_bzyb60p0.KZr)({ ...e, command: e.command }, { ...o, permissionLayers: [...o.permissionLayers ?? [], { kind: "sandbox_auto_allow_suspended" }] });
    if (u === null || h.behavior === "deny") return h;
    if (h.behavior === "ask") {
      let { suggestions: I, ...T } = h;
      return { ...T, matchedAskRule: u.rule };
    }
    return u.verdict;
  } catch (_) {
    var _error = _, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
function ze(e, o) {
  let r = (0, import_chunk_b83x8d52.Z0n)((0, import_chunk_bz1f2qnq.Z)(o), import_chunk_9xt9z453.Xo);
  if (r === null) return e;
  return r.verdict.behavior === "deny" ? r.verdict : { ...e, matchedAskRule: r.rule };
}
async function je(e) {
  if (e.command === void 0) return { result: true };
  let o = (0, import_chunk_bzyb60p0.qm)({ command: e.command }), r = (0, import_chunk_bzyb60p0.hHe)(o, e.command, false, "bash");
  if (r !== null) return (0, import_chunk_cqa9hrgx.l)("sandbox_exec", "sandbox_policy_refusal", { tool: (0, import_chunk_78g0060s.S)("monitor") }), { result: false, message: r, errorCode: 14 };
  return (0, import_chunk_bzyb60p0.tPn)(e, o) ?? { result: true };
}
function Fe(e, o, r, a) {
  return (0, import_chunk_6d4w1614.y3r)({ description: e, agentId: o, taskRef: r, arm: "bash", killTask: () => {
    if (!r.id) return false;
    return (0, import_chunk_bzyb60p0.l5)(r.id, a), true;
  } });
}
function Ve({ delivery: e, description: o, handle: r, agentId: a, taskRegistry: u, shellCommand: h, timeout_ms: I, persistent: T, bounded: L }) {
  let y = T ? void 0 : setTimeout((b, m, O, N, z, W, j) => {
    if (b.isClosed()) return;
    if (b.flush(), b.isClosed()) return;
    let g = W.totalBytes > W.pipedStdoutBytes ? W.path : void 0;
    (0, import_chunk_6d4w1614.Gte)(m, (0, import_chunk_6dfy8crz.Wds)(j.timeoutMs, b.eventCount(), j.bounded, g), O, { isHousekeeping: true, agentId: N, exactPath: g }), (0, import_chunk_bzyb60p0.l5)(O, z);
  }, I, e, o, r.taskId, a, u, h.taskOutput, { timeoutMs: I, bounded: L });
  h.result.then(async () => {
    if (y) clearTimeout(y);
    try {
      await e.reportExit(r);
    } catch (b) {
      (0, import_chunk_k449cc64.i)(b);
    } finally {
      (0, import_chunk_4yjj7pjs.NO)(a, `monitor:${r.taskId}`, u);
    }
  });
}
async function qe(e, o, r, a, { parentMessage: u, permissionPhase: h }) {
  let { description: I, timeout_ms: T, persistent: L } = o, { abortController: y, toolUseId: b, taskRegistry: m } = a, O = (0, import_chunk_sjqze7qg.PCe)(a), N = (0, import_chunk_bzyb60p0.Ryt)(h, { command: e }), z = (0, import_chunk_bzyb60p0.qm)({ command: e }, { disableUnsandboxedCommands: N }), W = (0, import_chunk_bzyb60p0.hHe)(z, e, false, "bash");
  if (W !== null) throw (0, import_chunk_cqa9hrgx.l)("sandbox_exec", "sandbox_policy_refusal", { tool: (0, import_chunk_78g0060s.S)("monitor") }), new import_chunk_ha393e1n.Xq(W);
  if (N && !z) throw (0, import_chunk_cqa9hrgx.l)("sandbox_exec", "sandbox_gone_since_check", { tool: (0, import_chunk_78g0060s.S)("monitor") }), new import_chunk_ha393e1n.Xq(import_chunk_bzyb60p0.xyt);
  let j = (0, import_chunk_bzyb60p0.bOn)(N, "monitor", () => (0, import_chunk_bzyb60p0.qm)({ command: e })), g = {}, F = Fe(I, O, g, m), R = await (0, import_chunk_bzyb60p0.Xrt)(e, y.signal, "bash", { session: a.session, owningAgentId: O, preventCwdChanges: true, shouldUseSandbox: z, sandboxAttributionId: b, sandboxNetworkLists: (0, import_chunk_bzyb60p0.nPn)(b, e), attributionMessageId: u?.message.id, onStdout: F.onData, agentWorktree: a.agentWorktree, isolationRoot: (0, import_chunk_mndk3x2g.ape)(a), sessionEnvVars: a.sessionEnvVars, storageV5: a.storageV5 });
  if (R.status === "completed") {
    let H = await R.result;
    if (H.preSpawnError) {
      let V = new import_chunk_jv7av99m.A(H.preSpawnError, "Monitor: pre-spawn error (cwd/argv redacted)");
      throw H.preSpawnErrorCode === "e2big" ? (0, import_chunk_r8478wtb.MX)(V, { kind: "spawn_arg_limit" }) : V;
    }
  }
  if (R.status === "killed") {
    if (await R.result, R.cleanup(), O !== void 0 && (0, import_chunk_bzyb60p0.FF)(O)) throw Error("This agent has been stopped and its stop is still completing; it cannot start monitors.");
    throw Error("This call was interrupted before the monitor started; nothing is running.");
  }
  let v = await (0, import_chunk_bzyb60p0.BSt)({ command: e, description: I, shellCommand: R, toolUseId: b, agentId: O, kind: "monitor" }, { abortController: y, taskRegistry: m });
  return g.id = v.taskId, (0, import_chunk_6d4w1614.S3r)(v.taskId, a, m), (0, import_chunk_4yjj7pjs.EH)(O, `monitor:${v.taskId}`, m), Ve({ delivery: F, description: I, handle: v, agentId: O, taskRegistry: m, shellCommand: R, timeout_ms: T, persistent: L, bounded: r }), { data: { taskId: v.taskId, timeoutMs: L ? 0 : T, persistent: L, ...j && { keptInSandboxByCheck: j } } };
}
function LTn(e) {
  let o = (0, import_chunk_2nv4wrez.Dp)("allow_web_fetch", "Arbitrary-URL egress", "is");
  if (o !== null) return { kind: "compliance", host: "", detail: o };
  let r = new URL(e), a = (0, import_chunk_sjqze7qg.hnn)(r.hostname);
  if ((0, import_net.isIP)(a) && (0, import_chunk_sjqze7qg.bot)(a)) return { kind: "ssrf", host: a, detail: "the address is in a private, link-local, or cloud-metadata range" };
  let u = r.port !== "" ? Number(r.port) : r.protocol === "wss:" ? 443 : 80, h = (0, import_chunk_ha393e1n.k_r)(a, u);
  if (!h.allowed) return { kind: "sandbox-policy", host: a, detail: h.reason };
  return null;
}
function Ke(e, o) {
  let r = LTn(e.url);
  if (r !== null) return { behavior: "deny", message: ue(r), decisionReason: { type: "other", reason: r.kind === "compliance" ? "organization policy disables model-chosen URL egress" : r.kind === "ssrf" ? "SSRF-blocked address range" : r.detail } };
  let a = e.protocols !== void 0 && e.protocols.length > 0 ? ` (subprotocols: ${(0, import_chunk_wyxkas6w.ttr)(e.protocols)})` : "";
  return ze({ behavior: "ask", message: `Monitor will open a WebSocket to ${e.url}${a}`, suggestions: [] }, o);
}
function ue(e) {
  return e.kind === "compliance" ? `Monitor cannot open a WebSocket. ${e.detail}` : `Monitor cannot open a WebSocket to ${e.host}: ${e.detail}.`;
}
async function Je(e, o) {
  let r = LTn(e.ws.url);
  if (r !== null) throw new Ket(ue(r));
  return etr(e, DTn(o));
}
function J(e, o) {
  return { get session() {
    return e.session;
  }, get hookCaller() {
    return e.hookCaller;
  }, get hookServesModel() {
    return e.hookServesModel;
  }, get hookOrigin() {
    return e.hookOrigin;
  }, get storageV5() {
    return e.storageV5;
  }, get credentials() {
    return e.credentials;
  }, get agentId() {
    return e.agentId;
  }, get agentWorktree() {
    return e.agentWorktree;
  }, get taskRegistry() {
    return e.taskRegistry;
  }, get sessionEnvVars() {
    return e.sessionEnvVars;
  }, get shellPermission() {
    return { ...e.shellPermission, abortController: { signal: o.signal }, toolUseId: o.toolUseId };
  }, get mcpState() {
    return e.mcpState;
  }, get getMcp() {
    return e.mcpState;
  }, get messages() {
    return e.messages;
  }, get toolUseId() {
    return o.toolUseId;
  }, get abortController() {
    return { signal: o.signal };
  } };
}
var Ye = { name: import_chunk_9xt9z453.Xo, registryToolId: "7f34ad1c-1fde-5aff-ae62-687a9ba1bf3e", enablesCodeExecution: true, maxResultSizeChars: 1e4, whenToUse: `When you are about to check a log, process or job again and again to catch each new event, use it and not repeated ${import_chunk_hn3cwwzt.ke} calls or sleeps.`, shouldDefer: true, userFacingName() {
  return "Monitor";
}, getToolUseSummary(e) {
  if (!e?.description) return null;
  return (0, import_chunk_f64qna2j.Us)(e.description, import_chunk_tt4yhkc0.Yx);
}, getActivityDescription(e) {
  return e?.description ? `Monitoring: ${e.description}` : "Monitoring";
}, isEnabled() {
  return (0, import_chunk_wwft95x8.Gd)();
}, async preparePermissionMatcher(e) {
  let o = (0, import_chunk_rmc00en4.xus)(e);
  return o === void 0 ? () => false : (0, import_chunk_bzyb60p0.Ies)(o);
}, isConcurrencySafe() {
  return true;
}, renderToolUseMessage(e) {
  if (!e.description) return null;
  return e.description;
}, get outputSchema() {
  return We();
}, mapToolResultToToolResultBlockParam(e, o) {
  let r = (0, import_chunk_f64qna2j.Cn)(e.timeoutMs, { hideTrailingZeros: true }), a = (0, import_chunk_6dfy8crz.Jbt)() ? `expires in ${r} unless the command exits first, and may stop soon after your reply` : e.persistent ? "persistent \u2014 runs until TaskStop or session end" : (0, import_chunk_6dfy8crz.ZCe)() ? `expires in ${r} unless the source ends first; you get one notice at expiry \u2014 re-arm if you still need the watch` : `timeout ${e.timeoutMs}ms`, u = !(0, import_chunk_f9x2f6cx.Y)() && (0, import_chunk_jg3mepas.Ly)() ? `${a}; in this session it is also likely stopped a few minutes after your reply` : a;
  return { tool_use_id: o, type: "tool_result", content: `Monitor started (task ${e.taskId}, ${u}). You will be notified on each event. Keep working \u2014 do not poll or sleep. ${(0, import_chunk_6dfy8crz.Jbt)() ? "An event that arrives after your reply is not the user's reply." : "Events may arrive while you are waiting for the user \u2014 an event is not their reply."}${e.keptInSandboxByCheck === true ? ` ${import_chunk_bzyb60p0.wOn}` : ""}` };
} }, Xe = (0, import_chunk_4vsz8a99.vn)({ ...Ye, backgrounding: "never", searchHint: "watch, monitor, or keep an eye on a process/log/command or WebSocket \u2014 stream each stdout line as a live notification", async description(e, o) {
  return (0, import_chunk_6dfy8crz.ITi)((0, import_chunk_bzyb60p0.oHe)(o?.tools ?? [])) + ((0, import_chunk_f9x2f6cx.Y)() ? "" : import_chunk_6dfy8crz.MTi) + (0, import_chunk_6dfy8crz.OTi)();
}, async prompt(e) {
  return (0, import_chunk_6dfy8crz.ITi)((0, import_chunk_bzyb60p0.oHe)(e?.tools ?? [])) + ((0, import_chunk_f9x2f6cx.Y)() ? "" : import_chunk_6dfy8crz.MTi) + (0, import_chunk_6dfy8crz.OTi)();
}, get inputSchema() {
  return Pe();
}, get inputJSONSchema() {
  return $e();
}, toAutoClassifierInput(e) {
  return e.ws ? `websocket ${e.ws.url}${(0, import_chunk_wyxkas6w.iMa)(e.ws)}` : Ee(e);
}, sandboxNetworkLists(e) {
  return (0, import_chunk_bzyb60p0._ye)(e);
}, create(e) {
  return { permissionCheckFailureDecision(o, r) {
    let a = J(e, r);
    return (0, import_chunk_bzyb60p0._Qo)(import_chunk_9xt9z453.Xo, a.shellPermission);
  }, validateInput: je, async checkPermissions(o, r) {
    let a = J(e, r);
    if (o.ws) {
      let u = (0, import_chunk_bzyb60p0.tKa)("Monitor websocket", a.shellPermission);
      if (u !== void 0) return u;
      return Ke(o.ws, a.shellPermission);
    }
    return He(o, a.shellPermission, r);
  }, async call(o, r) {
    let a = J(e, r);
    Be(a);
    let u = (0, import_chunk_6dfy8crz.ZCe)(), h = (0, import_chunk_6dfy8crz.arl)(o, u);
    if (o.ws) return Je({ ...o, ...h, bounded: u, ws: o.ws }, a);
    return qe(o.command, { ...o, ...h }, u, a, r);
  } };
} }), I7l = Xe;
