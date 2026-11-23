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
var chunk_bqf1zbmm_exports = {};
__export(chunk_bqf1zbmm_exports, {
  AWo: () => AWo,
  CWo: () => CWo,
  I2l: () => I2l,
  Pkn: () => Pkn,
  RWo: () => RWo,
  TKe: () => TKe,
  f8l: () => f8l,
  xWo: () => xWo
});
module.exports = __toCommonJS(chunk_bqf1zbmm_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_aka192fb = require("/$bunfs/root/chunk-aka192fb.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_3hr8g93j = require("/$bunfs/root/chunk-3hr8g93j.js");
var import_chunk_r60bafc1 = require("/$bunfs/root/chunk-r60bafc1.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_ha393e1n = require("/$bunfs/root/chunk-ha393e1n.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_trq47kfh = require("/$bunfs/root/chunk-trq47kfh.js");
var import_chunk_6zh1j84y = require("/$bunfs/root/chunk-6zh1j84y.js");
var import_chunk_gbskgz33 = require("/$bunfs/root/chunk-gbskgz33.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_tvbk4t18 = require("/$bunfs/root/chunk-tvbk4t18.js");
var import_chunk_s0zsg6za = require("/$bunfs/root/chunk-s0zsg6za.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_e15pxvhz = require("/$bunfs/root/chunk-e15pxvhz.js");
var import_chunk_q0fr3q7r = require("/$bunfs/root/chunk-q0fr3q7r.js");
var import_chunk_2tqq6ycx = require("/$bunfs/root/chunk-2tqq6ycx.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_os = require("os");
var import_promises = require("fs/promises");
var import_path = require("path");
var N = "Cd";
function B(e, r) {
  let n = (0, import_chunk_4smdap7r.M)([...(0, import_chunk_w578pjby.Ei)(e.requestedPath), e.canonicalPath]), l = (0, import_chunk_4smdap7r.M)([e.canonicalPath, (0, import_chunk_p1ewvgeh.PRe)(e.canonicalPath)]), c = (o, u, g) => g.some((y) => U(o, u, y, r));
  for (let o of (0, import_chunk_ht27b0vz.Vs)(r)) {
    if (o.ruleValue.toolName !== N) continue;
    let u = o.ruleValue.ruleContent;
    if (u === void 0 || c(u, o, n)) return { result: "blockedByRule", rule: o };
  }
  let d = (0, import_chunk_ht27b0vz.wV)(r).filter((o) => o.ruleValue.toolName === N);
  if (d.length === 0) return { result: "allowed" };
  for (let o of d) {
    let u = o.ruleValue.ruleContent;
    if (u === void 0 || c(u, o, l)) return { result: "allowed" };
  }
  return { result: "outsideAllowedPatterns", allowedPatterns: d.map((o) => o.ruleValue.ruleContent).filter((o) => o !== void 0) };
}
function U(e, { source: r, ruleBehavior: n }, l, c) {
  let { relativePattern: d, root: o } = (0, import_chunk_p1ewvgeh.S2e)(e, r), u = d.replace(/\/{2,}/g, "/").replace(/^\//, "").replace(/\/$/, ""), g = V(u);
  return (o !== null ? [o] : (0, import_chunk_p1ewvgeh.ZUn)(n, c, l)).some((y) => {
    let p = (0, import_chunk_p1ewvgeh.wat)(y, l);
    return p !== ".." && !p.startsWith("../") && g.test(p);
  });
}
function V(e) {
  let r = "^";
  for (let n = 0; n < e.length; n++) {
    let l = e[n];
    if (n === 0 && l === "*" && e[1] === "*" && e[2] === "/") r += "(?:.*/)?", n += 2;
    else if (l === "/" && e[n + 1] === "*" && e[n + 2] === "*") r += "(/.*)?", n += 2;
    else if (l === "*") if (e[n + 1] === "*") r += ".*", n++;
    else r += "[^/]+";
    else if ("\\^$.|?+()[]{}".includes(l)) r += `\\${l}`;
    else r += l;
  }
  return new RegExp(`${r}$`, "i");
}
async function TKe(e, r) {
  if (await K(e)) return (0, import_chunk_f9x2f6cx.k2)(true), (0, import_chunk_f9x2f6cx.EPt)(true), false;
  return (0, import_chunk_865at33z.k3i)(e, r);
}
async function K(e) {
  let r = async (n) => {
    let l = n;
    try {
      l = await (0, import_promises.realpath)(n);
    } catch {
    }
    return (0, import_chunk_2yx6c1y2.ah)((0, import_chunk_z6pfqf6e.pn)(l));
  };
  return await r(e) === await r((0, import_os.homedir)());
}
async function CWo(e, r) {
  let n = (0, import_chunk_n2dbhmj2.xt)(e);
  try {
    if (!(await (0, import_promises.stat)(n)).isDirectory()) return { result: "not_a_directory", path: n, parent: (0, import_path.dirname)(n) };
  } catch (o) {
    if (!(0, import_chunk_jv7av99m.fn)(o)) (0, import_chunk_k449cc64.i)(Object.assign(Error("cd: unexpected stat errno"), { code: (0, import_chunk_jv7av99m.w)(o) }));
    return { result: "not_found", path: n };
  }
  let l = n;
  try {
    l = await (0, import_promises.realpath)(n);
  } catch {
    l = n;
  }
  let c = (0, import_chunk_z6pfqf6e.pn)(l);
  if (c === (0, import_chunk_18rsj2ts.pe)() && c === (0, import_chunk_f9x2f6cx.Te)()) return { result: "same", directory: l };
  let d = B({ requestedPath: n, canonicalPath: l }, r);
  if (d.result !== "allowed") return { result: "blocked_by_rule", directory: l, check: d };
  return { result: "ok", directory: l };
}
function AWo(e, r, n = (c) => c, l) {
  let c = l?.terminalAffordances !== false, d = l?.display ?? ((o) => o);
  if (e = d(e), r.result === "blockedByRule") {
    let o = d((0, import_chunk_qebpc5de.yn)(r.rule.ruleValue)), u = (0, import_chunk_bzyb60p0.Rye)(r.rule.source);
    if (r.rule.ruleValue.ruleContent === void 0) return c ? `Can't move to ${n(e)} \u2014 /cd is turned off by the ${n(o)} rule in ${u}. Update the rule in /permissions to move between directories again.` : `Can't move to ${n(e)} \u2014 directory changes are turned off by the ${n(o)} permission rule in ${u}.`;
    return c ? `Can't move to ${n(e)} \u2014 it's excluded by the ${n(o)} rule in ${u}. Pick a directory outside that rule, or update it in /permissions.` : `Can't move to ${n(e)} \u2014 it's excluded by the ${n(o)} permission rule in ${u}. Pick a directory outside that rule.`;
  }
  return c ? `Can't move to ${n(e)} \u2014 /cd is limited to directories matching ${r.allowedPatterns.map((o) => n(d(o))).join(", ")}. Pick a matching directory, or add a Cd rule in /permissions.` : `Can't move to ${n(e)} \u2014 directory changes are limited to ${r.allowedPatterns.map((o) => n(d(o))).join(", ")}. Pick a matching directory.`;
}
async function X(e, r, n) {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_CLAUDE_MDS) return "";
  let l = /* @__PURE__ */ new Set();
  for (let p of await (0, import_chunk_bzyb60p0.fR)(e, false, n)) l.add((0, import_chunk_2yx6c1y2.ah)(p.path));
  let c = [], d = r;
  while (d !== (0, import_path.parse)(d).root) {
    if (!(0, import_chunk_aka192fb.w3)(d)) c.push(d);
    d = (0, import_path.dirname)(d);
  }
  let o = (0, import_chunk_bzyb60p0.Bxn)(r), { held: u, keep: g } = (0, import_chunk_bzyb60p0.RGa)(e), y = [];
  for (let p of c.reverse()) y.push(...await (0, import_chunk_bzyb60p0.gXo)(p, r, l, { skipProject: (0, import_chunk_bzyb60p0.Wxn)(p, o), held: p === r ? u?.within : u?.above(p) }));
  return g(), (0, import_chunk_bzyb60p0.HGa)(y);
}
async function Pkn(e, r, n, { storageV5: l, credentials: c, freshSession: d = false, confirmFresh: o, requestBuilt: u } = {}) {
  var _stack = [];
  try {
    let g = (0, import_chunk_18rsj2ts.pe)(), y = (0, import_chunk_f9x2f6cx.Te)(), p = (0, import_chunk_4smdap7r.M)([y, g]), k = (0, import_chunk_4smdap7r.M)([...(0, import_chunk_2yx6c1y2.vl)("projectSettings")?.permissions?.additionalDirectories ?? [], ...(0, import_chunk_2yx6c1y2.vl)("localSettings")?.permissions?.additionalDirectories ?? []].flatMap((m) => {
      try {
        return p.map((_2) => (0, import_chunk_n2dbhmj2.xt)(m, _2));
      } catch {
        return [];
      }
    }));
    const P = __using(_stack, import_chunk_ha393e1n.Ue.markFolderMove());
    let h = (0, import_chunk_bzyb60p0.JNt)(r);
    (0, import_chunk_f9x2f6cx.w$)((0, import_chunk_18rsj2ts.pe)());
    let { rootPins: C } = (0, import_chunk_w5s307zm.Ju)();
    (0, import_chunk_e15pxvhz.hbt)((0, import_chunk_18rsj2ts.pe)(), import_chunk_865at33z.Xk);
    let b = true;
    try {
      await (0, import_chunk_bzyb60p0.utn)(l);
    } catch (m) {
      b = false;
      let _2 = (0, import_chunk_bzyb60p0.aSe)(g, (I) => I === g);
      if (_2 && h()) throw (0, import_chunk_bzyb60p0.Cfe)(_2, void 0), (0, import_chunk_f9x2f6cx.w$)(y), (0, import_chunk_w5s307zm.Ju)().rootPins = C, m;
      (0, import_chunk_w578pjby.t)(`directory move: transcript move failed and the session or the process could not go back; completing the move with the transcript left in its previous home: ${m}`, { level: "error" });
    }
    if ((0, import_chunk_rb36kwbn.A0l)(), b) try {
      await (0, import_chunk_9e5mdyfk.Qpr)((0, import_chunk_18rsj2ts.pe)(), l);
    } catch (m) {
      (0, import_chunk_w578pjby.t)(`directory move: bg session state rehome failed (continuing): ${m}`, { level: "error" });
    }
    (0, import_chunk_865at33z.rAt)();
    try {
      await import_chunk_trq47kfh.Ti.rehome();
    } catch (m) {
      (0, import_chunk_w578pjby.t)(`directory move: re-targeting the settings watcher failed (continuing with the previous watch): ${m}`, { level: "error" });
    }
    try {
      (0, import_chunk_6zh1j84y.KRe)(), import_chunk_trq47kfh.Ti.notifyChange("projectSettings", { prevCwd: y, countsAsStart: d && o?.() === true });
    } catch (m) {
      (0, import_chunk_w578pjby.t)(`directory move: re-resolving settings and hooks for the new directory failed (continuing): ${m}`, { level: "error" });
    }
    try {
      await import_chunk_q0fr3q7r.kMe.rehome();
    } catch (m) {
      (0, import_chunk_w578pjby.t)(`directory move: re-targeting the skill watcher failed (continuing with the previous watch): ${m}`, { level: "error" });
    }
    let R = d && (o === void 0 || o());
    if (R) (0, import_chunk_f9x2f6cx.vQe)((0, import_chunk_18rsj2ts.pe)()), (0, import_chunk_e15pxvhz.hbt)((0, import_chunk_18rsj2ts.pe)());
    else try {
      await (0, import_chunk_bzyb60p0.dFt)(await (0, import_chunk_bzyb60p0.kie)("skills", (0, import_chunk_18rsj2ts.pe)()));
    } catch (m) {
      (0, import_chunk_w578pjby.t)(`directory move: registering the new directory's skills failed (continuing without them): ${m}`, { level: "error" });
    }
    if ((0, import_chunk_w5s307zm.Joe)(), (0, import_chunk_w5s307zm.Xqn)(e), (0, import_chunk_r60bafc1.Pc)()?.refreshGitBranch?.(), n === "cd_command") import_chunk_ha393e1n.Ue.releaseRootMoveHold();
    import_chunk_ha393e1n.Ue.refreshConfig(), P[Symbol.dispose](), (0, import_chunk_sjqze7qg.fnn)(), (0, import_chunk_y53wbr8a.a)("tengu_cd_command", { source: (0, import_chunk_78g0060s.f)(n), fresh_session: R });
    let D = import_chunk_ha393e1n.Ue.configLeftBehindRefusal();
    if (D !== void 0) (0, import_chunk_w578pjby.t)("directory move: the sandbox config could not be rebuilt for the new directory, so sandboxed commands are refused", { level: "error" });
    if (R) {
      try {
        (0, import_chunk_bzyb60p0.lye)(), (0, import_chunk_bzyb60p0.tar)(e, "session_start"), (0, import_chunk_bzyb60p0.PGa)(e), (0, import_chunk_bzyb60p0.$Ga)(e), import_chunk_s0zsg6za.avr.of(e).clear(), (0, import_chunk_bzyb60p0.fQr)(e), (0, import_chunk_f9x2f6cx.WNr)(null), (0, import_chunk_3hr8g93j.c0r)(), (0, import_chunk_w5s307zm.Mqt)(), import_chunk_p1ewvgeh.Xh.cache.clear?.(), (0, import_chunk_p1ewvgeh.Nx)(l), (0, import_chunk_865at33z.pz)().reset(), (0, import_chunk_bzyb60p0.Hnt)(e), (0, import_chunk_bzyb60p0.$F)(e, l, c);
      } catch (m) {
        (0, import_chunk_w578pjby.t)(`directory move: re-deriving start-of-session state for the new directory failed (continuing): ${m}`, { level: "error" });
      }
      return { modelMessage: "", transcriptRelocated: b, projectGrantsGated: false, gatedNotice: "", departedAdditionalDirectories: k, freshSession: true };
    }
    let x = "";
    try {
      x = await X(e, r, l);
    } catch (m) {
      (0, import_chunk_w578pjby.t)(`directory move: loading the new directory's memory context failed (continuing without it): ${m}`, { level: "error" });
    }
    let v = (0, import_chunk_kx2fp6pc.mh)(r), O = n === "cd_command" ? "via /cd" : "by the user", j = (0, import_chunk_f9x2f6cx.dpt)(), S = j === null ? null : (0, import_chunk_kx2fp6pc.mh)(j), G = u === void 0 || u() ? "The environment block at the start of this conversation still names the previous directory \u2014 that information is stale. " : "", H = (0, import_chunk_bzyb60p0.Qs)(`The session's working directory has changed to ${v} (${O}). ` + G + `All tool calls and relative paths now resolve from ${v}. ` + (S === null ? `Project settings (permission rules, hooks), project MCP servers, and project skills now come from ${v}; its CLAUDE.md, if any, follows below. Environment variables set by the previous directory's settings stay in effect for this process \u2014 they cannot be unset \u2014 and the new directory's settings env is applied on top of them.` : `Project settings (permission rules, hooks), project MCP servers, and project skills still come from ${S}, where this session was launched, and not from ${v}, whose CLAUDE.md, if any, follows below.`)), T = false;
    try {
      T = !import_chunk_c203g5kd.s.CLAUDE_CODE_SANDBOXED && !(0, import_chunk_f9x2f6cx.XM)() && !(0, import_chunk_865at33z.wy)() && (0, import_chunk_gbskgz33.rWn)();
    } catch (m) {
      (0, import_chunk_w578pjby.t)(`directory move: probing the gated project grants failed (continuing): ${m}`, { level: "error" });
    }
    let A = T ? (0, import_chunk_bzyb60p0.Qs)(S === null ? `Note: ${v} declares project permission rules and/or additional directories in its settings, but they are NOT applied \u2014 the workspace is trusted only through a parent directory's grant, and project-scoped grants require trusting this directory explicitly. Tool calls those rules would have pre-approved will ask for permission.` : `Note: ${S} declares project permission rules and/or additional directories in its settings, but they are NOT applied \u2014 while the session is outside ${S}, they count only if both it and ${v} have been trusted explicitly. Tool calls those rules would have pre-approved will ask for permission.`) : "", L = D === void 0 ? "" : (0, import_chunk_bzyb60p0.Qs)(D);
    return { modelMessage: [H, L, A, x].filter(Boolean).join(`

`), transcriptRelocated: b, projectGrantsGated: T, gatedNotice: A, departedAdditionalDirectories: k, freshSession: false };
  } catch (_) {
    var _error = _, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
function RWo() {
  (0, import_chunk_865at33z.rAt)(), (0, import_chunk_6zh1j84y.KRe)(), import_chunk_trq47kfh.Ti.notifyChange("projectSettings", { trustFlip: true });
}
function xWo(e) {
  if (e.gatedNotice === "") return e.modelMessage;
  return e.modelMessage.replace(e.gatedNotice, (0, import_chunk_bzyb60p0.Qs)("The user trusted this directory explicitly: its project permission rules and additional directories are now applied."));
}
function I2l(e, r) {
  return import_chunk_tvbk4t18.zGi.test(e) ? r : e;
}
async function f8l(e, r) {
  if (r.fromRemoteControlClient && (0, import_chunk_sghy0qej.Pe)("tengu_idempotent_blossom", { safe: true })) return (0, import_chunk_y53wbr8a.a)("tengu_set_cwd_remote_refused", {}), { kind: "response", response: { status: "rejected", reason: "remote_origin", message: "This Remote Control session stays in the folder it was started in. To work in another folder, start a new session there." } };
  if (r.isBusy()) return { kind: "response", response: { status: "rejected", reason: "busy", message: "A turn is in progress \u2014 the working directory can only change while the session is idle. Wait for the turn to finish (or interrupt it), then retry." } };
  if (typeof e.path !== "string" || e.path.trim() === "") return { kind: "invalid", message: "set_cwd: invalid request \u2014 path must be a non-empty string" };
  let n = e.trust_accepted === true;
  if (n && typeof e.trusted_directory !== "string") return { kind: "invalid", message: "set_cwd: invalid request \u2014 trust_accepted requires trusted_directory (echo the directory from the needs_trust response)" };
  let l = false;
  try {
    l = (0, import_chunk_2tqq6ycx.Nq)(e.path, (0, import_chunk_n2dbhmj2.xt)(e.path), r.toolPermissionContext.trustedNetworkDirectories, { allowLinkTextClimbs: true }).ok;
  } catch {
    l = false;
  }
  if (!l) return { kind: "response", response: { status: "rejected", reason: "unsafe_path", message: "The target is a network path or an obfuscated spelling, which cannot be set as the working directory from a remote host. The path is deliberately not echoed back." } };
  let c = await CWo(e.path.trim(), r.toolPermissionContext), d = "directory" in c ? c.directory : c.path;
  if ((0, import_chunk_tvbk4t18.GT)(d)) return { kind: "response", response: { status: "rejected", reason: "unsafe_path", message: "The target path contains invisible or non-printing characters (control, formatting, zero-width, or non-standard space characters such as the narrow no-break space macOS puts in screenshot folder names), so it cannot safely cross the trust boundary. The path is deliberately not echoed back." } };
  if ("directory" in c && (0, import_chunk_2tqq6ycx.r0)(c.directory, r.toolPermissionContext.trustedNetworkDirectories) !== void 0) return { kind: "response", response: { status: "rejected", reason: "unsafe_path", message: "The target resolved to a network path or an obfuscated spelling, which cannot be set as the working directory from a remote host. The path is deliberately not echoed back." } };
  if (c.result === "not_found") return { kind: "response", response: { status: "rejected", reason: "not_found", message: `Couldn't find a directory at ${c.path}.` } };
  if (c.result === "not_a_directory") return { kind: "response", response: { status: "rejected", reason: "not_a_directory", message: `${c.path} is not a directory.` } };
  if (c.result === "blocked_by_rule") return { kind: "response", response: { status: "rejected", reason: "blocked_by_rule", message: I2l(AWo(c.directory, c.check, void 0, { terminalAffordances: false }), "A Cd permission rule blocks this directory. The rule text contains control or invisible characters, so it is not echoed here \u2014 check the Cd(...) entries in your settings.") } };
  if (c.result === "same") return { kind: "response", response: { status: "ok", cwd: c.directory, changed: false, transcript_relocated: true } };
  let o = c.directory;
  if (!(0, import_chunk_865at33z.Xk)(o)) {
    let h = (0, import_chunk_2yx6c1y2.wv)(o);
    if (h != null && (0, import_chunk_tvbk4t18.GT)(h)) return { kind: "response", response: { status: "rejected", reason: "unsafe_path", message: "The repository the target path belongs to has a root path with invisible or non-printing characters, so trust for it cannot be shown or recorded here. The path is deliberately not echoed back. To use the folder, trust it from a terminal session started there, or move the repository to a path without such characters." } };
    let C = h != null && h !== o ? h : void 0;
    if (!n) return { kind: "response", response: C != null ? { status: "needs_trust", directory: o, trust_root: C } : { status: "needs_trust", directory: o } };
    if (e.trusted_directory !== o) return { kind: "response", response: C != null ? { status: "needs_trust", directory: o, trust_root: C } : { status: "needs_trust", directory: o } };
    await TKe(o, r.storageV5);
  }
  if (r.isBusy()) return { kind: "response", response: { status: "rejected", reason: "busy", message: "A turn started while the request was being validated. Retry when the session is idle." } };
  let u = r.isFreshSession(), { modelMessage: g, transcriptRelocated: y, departedAdditionalDirectories: p, freshSession: k } = await Pkn(r.session, o, "set_cwd", { storageV5: r.storageV5, credentials: r.credentials, freshSession: u, confirmFresh: () => !r.isBusy() && r.isFreshSession(), requestBuilt: r.requestBuilt });
  try {
    if (k) r.settlePlanAutoMode();
  } catch (h) {
    (0, import_chunk_w578pjby.t)(`set_cwd: settling the plan setting for the new directory failed (continuing): ${h}`, { level: "error" });
  }
  try {
    r.retireDepartedAdditionalDirectories?.(p);
  } catch (h) {
    (0, import_chunk_w578pjby.t)(`set_cwd: retiring the previous project's additional directories failed (continuing): ${h}`, { level: "error" });
  }
  try {
    if (g) r.enqueueMoveNotice(g);
  } catch (h) {
    (0, import_chunk_w578pjby.t)(`set_cwd: enqueueing the move notice failed (continuing): ${h}`, { level: "error" });
  }
  let P = (0, import_chunk_18rsj2ts.pe)();
  return { kind: "response", response: { status: "ok", cwd: (0, import_chunk_tvbk4t18.GT)(P) ? o : P, changed: true, transcript_relocated: y }, freshSession: k };
}
