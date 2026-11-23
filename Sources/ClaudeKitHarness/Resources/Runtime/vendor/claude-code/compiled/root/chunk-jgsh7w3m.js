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
var chunk_jgsh7w3m_exports = {};
__export(chunk_jgsh7w3m_exports, {
  $k: () => $k,
  Dco: () => Dco,
  HCi: () => HCi,
  Hco: () => Hco,
  ICi: () => ICi,
  Jhr: () => Jhr,
  Khr: () => Khr,
  MCi: () => MCi,
  Mco: () => Mco,
  OCi: () => OCi,
  PCi: () => PCi,
  WSe: () => WSe,
  Xhr: () => Xhr,
  Yhr: () => Yhr,
  awt: () => awt,
  b$t: () => b$t,
  dol: () => dol,
  h7: () => h7,
  qQl: () => qQl,
  qhr: () => qhr,
  vcs: () => vcs,
  w$t: () => w$t
});
module.exports = __toCommonJS(chunk_jgsh7w3m_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_0dht3xy7 = require("/$bunfs/root/chunk-0dht3xy7.js");
var import_crypto = require("crypto");
var import_promises = require("fs/promises");
var import_path = require("path");
class h7 extends Error {
  constructor(e) {
    super(e);
    this.name = "SwarmPaneError";
  }
}
var F = new RegExp("\\p{Cc}", "u");
function dol(e) {
  return F.test(e);
}
function Mco(e) {
  let r = F.exec(e);
  if (r) {
    let n = r[0].codePointAt(0);
    throw new h7(`Refusing to send command containing control character U+${n.toString(16).padStart(4, "0").toUpperCase()} to terminal pane`);
  }
}
function Khr(e) {
  return e === "tmux" || e === "iterm2";
}
function R(e) {
  return e.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
}
function PCi(e) {
  return e.replaceAll("@", "-");
}
function qhr(e) {
  return (0, import_path.join)((0, import_chunk_2gtmjt3y.IPt)(), R(e));
}
function awt(e) {
  return (0, import_path.join)(qhr(e), "config.json");
}
function v(e) {
  return import_chunk_hkvzj051.at.team(R(e));
}
function k(e) {
  let r = "failureClass" in e ? `/${e.failureClass}` : "", n = "telemetryCode" in e && e.telemetryCode !== void 0 ? ` [${e.telemetryCode}]` : "";
  return `${e.code}${r}${n}`;
}
function I(e) {
  return e.code === "Unavailable" && e.telemetryCode === "LockSuspect";
}
function K(e) {
  return e.code === "Unavailable" && e.telemetryCode === "LockContended";
}
function P(e) {
  return e.code === "Unavailable" || e.code === "NotFound" || e.code === "Failed" && (e.failureClass === "permission" || e.failureClass === "resource" || e.failureClass === "environment" || e.failureClass === "unknown" && (0, import_chunk_jv7av99m.pa)(e.cause));
}
function x(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return null;
  let r = e, n = Array.isArray(r.members) ? r.members.filter(q) : [], a = V(r.leadProcess) ? r.leadProcess : void 0;
  return Array.isArray(r.members) && n.length === r.members.length && a === r.leadProcess ? r : { ...r, members: n, leadProcess: a };
}
function V(e) {
  return typeof e === "object" && e !== null && "pid" in e && Number.isSafeInteger(e.pid) && "pidSpace" in e && typeof e.pidSpace === "string" && "claimedAt" in e && Number.isFinite(e.claimedAt) && (!("procStart" in e) || typeof e.procStart === "string");
}
function q(e) {
  return typeof e === "object" && e !== null && "agentId" in e && typeof e.agentId === "string" && "name" in e && typeof e.name === "string";
}
async function $k(e, r) {
  if (r) {
    let n = await r.read([v(e)]);
    if (!n.ok) return (0, import_chunk_w578pjby.t)(`[TeammateTool] Failed to read team file for ${e}: ${n.error.code}`), null;
    let a = n.value.items[0];
    if (!a.found) return null;
    try {
      return x((0, import_chunk_w578pjby.te)(Buffer.from(a.value).toString("utf8")));
    } catch (o) {
      return (0, import_chunk_w578pjby.t)(`[TeammateTool] Failed to read team file for ${e}: ${(0, import_chunk_jv7av99m.d)(o)}`), null;
    }
  }
  try {
    let n = await (0, import_promises.readFile)(awt(e), "utf-8");
    return x((0, import_chunk_w578pjby.te)(n));
  } catch (n) {
    if ((0, import_chunk_jv7av99m.w)(n) === "ENOENT") return null;
    return (0, import_chunk_w578pjby.t)(`[TeammateTool] Failed to read team file for ${e}: ${(0, import_chunk_jv7av99m.d)(n)}`), null;
  }
}
function Hco(e, r) {
  if ((0, import_chunk_jv7av99m.pa)(r)) (0, import_chunk_w578pjby.t)(`[TeammateTool] Failed to write team file for ${e} (${(0, import_chunk_jv7av99m.w)(r)}): ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "error" });
  else if (H(r)) (0, import_chunk_w578pjby.t)(`[TeammateTool] Failed to write team file for ${e}: ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "error" });
  else (0, import_chunk_k449cc64.i)(r);
}
function H(e) {
  if (!(e instanceof Error) || e.cause === void 0 || e.cause === null) return false;
  let r = e.cause;
  if (typeof r !== "object" || typeof r.code !== "string") return false;
  return P(r);
}
var J = { realpath: false, retries: { retries: 10, minTimeout: 5, maxTimeout: 100 }, onCompromised: () => {
} };
function S(e) {
  return new import_chunk_jv7av99m.A(`Internal error: team file for "${e}" not found. The session team should have been initialized at startup.`, "Team file missing (session team not initialized)");
}
async function WSe(e, r, n, a) {
  if (a) return Y(e, r, n, a);
  let o = awt(e), f;
  try {
    f = await (0, import_chunk_2yx6c1y2.Rc)(o, { lockfilePath: `${o}.lock`, ...J });
  } catch (c) {
    if ((0, import_chunk_jv7av99m.w)(c) === "ENOENT") throw S(e);
    throw c;
  }
  try {
    let c = await $k(e);
    if (!c) throw Error("Team config file unreadable (lock acquired, read failed)");
    let p = r(c);
    if (p === false) return;
    try {
      let g = (0, import_chunk_w578pjby._)(c, null, 2), s = await (0, import_promises.open)(o, "r+");
      try {
        await (0, import_promises.writeFile)(s, g), await s.truncate(Buffer.byteLength(g));
      } finally {
        await s.close();
      }
    } catch (g) {
      if (!n?.bestEffortWrite) throw (0, import_chunk_jv7av99m.w)(g) === "ENOENT" ? S(e) : g;
      Hco(e, g);
    }
    return p;
  } finally {
    try {
      await f();
    } catch (c) {
      (0, import_chunk_w578pjby.t)(`[TeammateTool] updateTeamFile lock release failed: ${(0, import_chunk_jv7av99m.d)(c)}`);
    }
  }
}
async function OCi(e, r, n) {
  try {
    await WSe(e, (a) => {
      let o = a.members.findIndex((f) => f.agentId === r);
      if (o === -1) return false;
      a.members.splice(o, 1);
    }, void 0, n);
  } catch (a) {
    (0, import_chunk_w578pjby.t)(`[TeammateTool] removeTeamMember(${r}) failed: ${(0, import_chunk_jv7av99m.d)(a)}`);
  }
}
async function Y(e, r, n, a) {
  let o = v(e), f = 5, c = (0, import_chunk_0dht3xy7.CLn)(50), p, g = (T) => {
    if (T === void 0) return { skip: true, result: { kind: "missing" } };
    let y;
    try {
      y = x((0, import_chunk_w578pjby.te)(Buffer.from(T.value).toString("utf8"))) ?? void 0;
    } catch (h) {
      return { skip: true, result: { kind: "unreadable", parseError: (0, import_chunk_jv7av99m.d)(h) } };
    }
    if (!y) return { skip: true, result: { kind: "unreadable" } };
    let b;
    try {
      b = r(y);
    } catch (h) {
      return { skip: true, result: { kind: "threw", error: h } };
    }
    if (b === false) return { skip: true, result: { kind: "declined" } };
    return p = b, { write: (0, import_chunk_w578pjby._)(y, null, 2), result: { kind: "applied", result: b } };
  }, s;
  for (let T = 1; ; T++) {
    if (s = await a.update(o, g), !s.ok) {
      if (I(s.error) && T < 5) {
        await c(T);
        continue;
      }
      break;
    }
    let y = s.value.result;
    if (y === void 0 || y.kind === "declined") return;
    switch (y.kind) {
      case "missing":
        throw S(e);
      case "unreadable":
        if (y.parseError !== void 0) (0, import_chunk_w578pjby.t)(`[TeammateTool] Failed to read team file for ${e}: ${y.parseError}`);
        if (T < 5) {
          await c(T);
          continue;
        }
        throw Error("Team config file unreadable (lock acquired, read failed)");
      case "threw":
        throw y.error;
      case "applied":
        return (0, import_chunk_cqa9hrgx.u)("swarm_team_file_update"), y.result;
      default:
        return y;
    }
  }
  if (K(s.error)) (0, import_chunk_cqa9hrgx.l)("swarm_team_file_update", "lock_contended");
  if (!n?.bestEffortWrite) {
    let T = new import_chunk_jv7av99m.A(`Team file update failed (${k(s.error)}) for ${e}`, "Team file update failed (storage v5)");
    if (T.cause = s.error, !P(s.error)) (0, import_chunk_cqa9hrgx.m)("swarm_team_file_update", s.error.code);
    throw T;
  }
  if (!I(s.error) && P(s.error)) (0, import_chunk_w578pjby.t)(`[TeammateTool] Failed to update team file for ${e} (${k(s.error)})`, { level: "error" });
  else {
    let T = new import_chunk_jv7av99m.A(`Team file update failed (${k(s.error)}) for ${e}`, "Team file update failed (storage v5)");
    T.cause = s.error, (0, import_chunk_cqa9hrgx.m)("swarm_team_file_update", s.error.code), (0, import_chunk_k449cc64.i)(T);
  }
  return p;
}
async function ICi(e, r, n) {
  if (n) {
    let o = await n.write(v(e), (0, import_chunk_w578pjby._)(r, null, 2), { precondition: { type: "none" } });
    if (!o.ok) {
      let f = new import_chunk_jv7av99m.A(`Team file write failed (${k(o.error)}) for ${e}`, "Team file write failed (storage v5)");
      throw f.cause = o.error, f;
    }
    return;
  }
  let a = qhr(e);
  await (0, import_promises.mkdir)(a, { recursive: true }), await (0, import_promises.writeFile)(awt(e), (0, import_chunk_w578pjby._)(r, null, 2));
}
async function b$t(e, r, n) {
  let a = r.agentId || r.name;
  if (!a) return (0, import_chunk_w578pjby.t)("[TeammateTool] removeTeammateFromTeamFile called with no identifier"), false;
  let o = false;
  try {
    let f = await WSe(e, (c) => {
      o = false;
      let p = c.members.length;
      c.members = c.members.filter((s) => {
        if (r.agentId && s.agentId === r.agentId) return false;
        if (r.name && s.name === r.name) return false;
        return true;
      });
      let g = c.members.length !== p;
      return o = !g, g;
    }, { bestEffortWrite: true }, n) ?? false;
    if (f) {
      if (r.name) (0, import_chunk_0dht3xy7.Zhr)((0, import_chunk_0dht3xy7.eM)(r.name, e));
      (0, import_chunk_w578pjby.t)(`[TeammateTool] Removed teammate from team file: ${a}`);
    } else if (o) (0, import_chunk_w578pjby.t)(`[TeammateTool] Teammate ${a} not found in team file for "${e}"`);
    return f;
  } catch (f) {
    return (0, import_chunk_w578pjby.t)(`[TeammateTool] Cannot remove teammate ${a} from "${e}": ${(0, import_chunk_jv7av99m.d)(f)}`), false;
  }
}
async function w$t(e, r, n, a) {
  let f = (await $k(e, a).catch(() => null))?.members.find((p) => p.agentId === r), c = f !== void 0 && f.joinedAt >= Date.parse(n);
  if (c) (0, import_chunk_w578pjby.t)(`[TeammateTool] Ignoring a shutdown approval for ${r}: it was sent before this member joined`);
  return c;
}
async function Yhr(e, r, n, a) {
  let o = false;
  try {
    let f = await WSe(e, (c) => {
      let p = c.members.findIndex((s) => s.agentId === r), g = c.members[p];
      if (!g) return o = false, false;
      if (n?.onlyIfJoinedBefore !== void 0 && g.joinedAt >= n.onlyIfJoinedBefore) return o = true, false;
      return o = false, c.members.splice(p, 1), true;
    }, { bestEffortWrite: true }, a) ?? false;
    if (f) (0, import_chunk_w578pjby.t)(`[TeammateTool] Removed member ${r} from team ${e}`);
    else if (o) (0, import_chunk_w578pjby.t)(`[TeammateTool] Skipped stale removal of ${r} from team ${e} (re-added after removal was initiated)`);
    return f;
  } catch (f) {
    return (0, import_chunk_w578pjby.t)(`[TeammateTool] removeMemberByAgentId(${r}) failed for team ${e}: ${(0, import_chunk_jv7av99m.d)(f)}`), false;
  }
}
async function vcs(e, r, n, a) {
  let o = "unchanged";
  try {
    if (await WSe(e, (f) => {
      let c = f.members.find((p) => p.name === r);
      if (!c) return o = "absent", false;
      if (c.mode === n) return o = "unchanged", false;
      o = "set", c.mode = n;
    }, void 0, a), o === "absent") (0, import_chunk_w578pjby.t)(`[TeammateTool] Cannot set member mode: member ${r} not found in team ${e}`);
    else if (o === "set") (0, import_chunk_w578pjby.t)(`[TeammateTool] Set member ${r} in team ${e} to mode: ${n}`);
  } catch (f) {
    (0, import_chunk_w578pjby.t)(`[TeammateTool] Cannot set member mode: ${(0, import_chunk_jv7av99m.d)(f)}`);
  }
}
async function Xhr(e, r, n) {
  if (!(0, import_chunk_wtm85h0y.Yc)()) return;
  let a = r ?? (0, import_chunk_wtm85h0y.Nf)(), o = (0, import_chunk_wtm85h0y.jR)();
  if (a && o) await vcs(a, o, e, n);
}
async function Jhr(e, r, n, a) {
  let o = "unchanged";
  try {
    if (await WSe(e, (f) => {
      let c = f.members.find((p) => p.name === r);
      if (!c) return o = "absent", false;
      if (c.isActive === n) return o = "unchanged", false;
      o = "set", c.isActive = n;
    }, void 0, a), o === "absent") (0, import_chunk_w578pjby.t)(`[TeammateTool] Cannot set member active: member ${r} not found in team ${e}`);
    else if (o === "set") (0, import_chunk_w578pjby.t)(`[TeammateTool] Set member ${r} in team ${e} to ${n ? "active" : "idle"}`);
  } catch (f) {
    (0, import_chunk_w578pjby.t)(`[TeammateTool] Cannot set member active: ${(0, import_chunk_jv7av99m.d)(f)}`);
  }
}
function MCi(e) {
  (0, import_chunk_f9x2f6cx.$3n)().add(e);
}
async function qQl(e) {
  return (0, import_chunk_cqa9hrgx.qo)("swarm_session_cleanup", async () => {
    let r = (0, import_chunk_f9x2f6cx.$3n)();
    if (r.size === 0) return;
    let n = Array.from(r);
    (0, import_chunk_w578pjby.t)(`cleanupSessionTeams: removing ${n.length} orphan team dir(s): ${n.join(", ")}`), await Promise.allSettled(n.map((o) => Z(o, e)));
    let a = await Promise.allSettled(n.map((o) => Dco(o)));
    r.clear();
    for (let o of a) if (o.status === "rejected") throw o.reason;
  }).catch(() => {
  });
}
function M(e, r) {
  return `${e}:${r}`;
}
function HCi(e, r) {
  if (Khr(e) && r) (0, import_chunk_f9x2f6cx.sFs)().add(M(e, r));
}
async function Z(e, r) {
  let n = await $k(e, r);
  if (!n) return;
  let a = (0, import_chunk_f9x2f6cx.sFs)(), o = n.members.filter((s) => s.name !== import_chunk_xfj2cwfv.cd && s.tmuxPaneId && s.backendType && Khr(s.backendType) && a.has(M(s.backendType, s.tmuxPaneId)));
  if (o.length === 0) return;
  let [{ ensureBackendsRegistered: f, getBackendByType: c }, { isInsideTmux: p }] = await Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-cmd1a5s4.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-5851p3re.js")))]);
  await f();
  let g = !await p();
  await Promise.allSettled(o.map(async (s) => {
    if (!s.tmuxPaneId || !s.backendType || !Khr(s.backendType)) return;
    let E = await c(s.backendType).killPane(s.tmuxPaneId, g);
    (0, import_chunk_w578pjby.t)(`cleanupSessionTeams: killPane ${s.name} (${s.backendType} ${s.tmuxPaneId}) \u2192 ${E}`);
  }));
}
var G = 3;
async function Dco(e) {
  return (0, import_chunk_cqa9hrgx.qo)("swarm_team_cleanup", async () => {
    let r = qhr(e);
    try {
      let n = `${r}.deleted-${(0, import_crypto.randomUUID)()}`, a = await (0, import_promises.rename)(r, n).then(() => n, () => r);
      for (let o = 1; ; o++) {
        if (await (0, import_promises.rm)(a, { recursive: true, force: true }), await (0, import_promises.stat)(a).then(() => false, (c) => (0, import_chunk_jv7av99m.w)(c) === "ENOENT")) break;
        if (o === G) throw (0, import_chunk_w578pjby.t)(`[TeammateTool] ${a} still exists after ${o} delete attempts`), Error("team folder still exists after every delete attempt");
      }
      (0, import_chunk_w578pjby.t)(`[TeammateTool] Cleaned up team directory: ${r}`);
    } catch (n) {
      throw (0, import_chunk_w578pjby.t)(`[TeammateTool] Failed to clean up team directory ${r}: ${(0, import_chunk_jv7av99m.d)(n)}`), n;
    }
  }, (r) => (0, import_chunk_jv7av99m.Cr)(r) ?? "error");
}
