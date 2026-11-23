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
var chunk_jq86mb8m_exports = {};
__export(chunk_jq86mb8m_exports, {
  runPtyHost: () => ke
});
module.exports = __toCommonJS(chunk_jq86mb8m_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_kr68f0mb = require("/$bunfs/root/chunk-kr68f0mb.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_h3s25p5k = require("/$bunfs/root/chunk-h3s25p5k.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_psw95195 = require("/$bunfs/root/chunk-psw95195.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_xppq9kzc = require("/$bunfs/root/chunk-xppq9kzc.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_72r477hv = require("/$bunfs/root/chunk-72r477hv.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_ds5wjsjg = require("/$bunfs/root/chunk-ds5wjsjg.js");
var import_chunk_pm6bf5qr = require("/$bunfs/root/chunk-pm6bf5qr.js");
var import_chunk_sgar51s8 = require("/$bunfs/root/chunk-sgar51s8.js");
var import_chunk_jmxgdf7r = require("/$bunfs/root/chunk-jmxgdf7r.js");
var import_chunk_d55td748 = require("/$bunfs/root/chunk-d55td748.js");
var import_chunk_78wqjv8b = require("/$bunfs/root/chunk-78wqjv8b.js");
var import_chunk_kzxr3yqp = require("/$bunfs/root/chunk-kzxr3yqp.js");
var import_chunk_bdxa2qdh = require("/$bunfs/root/chunk-bdxa2qdh.js");
var import_chunk_thchq5z2 = require("/$bunfs/root/chunk-thchq5z2.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_net = require("net");
var import_os = require("os");
var import_path = require("path");
var ae = 1048576, le = 5e3;
async function ke(i) {
  let t = i.indexOf("--"), n = i.includes("--bg-spare", t + 1);
  if (!n) await (0, import_chunk_78wqjv8b.OSa)();
  if (import_chunk_c203g5kd.s.unset("CLAUDE_PTY_HOST_NO_STABLE_PATH"), (0, import_chunk_kzxr3yqp.VXr)(), t < 3 || t === i.length - 1) return R(void 0, "bad argv: --bg-pty-host <sock> <cols> <rows> -- <file> [args...]");
  let o = i[0];
  process.on("uncaughtException", (e) => R(o, `uncaught: ${e?.stack ?? String(e)}`)), process.on("unhandledRejection", (e) => R(o, `unhandledRejection: ${e?.stack ?? String(e)}`));
  let d = Number(i[1]) || 200, S = Number(i[2]) || 50, h = i[t + 1], p = i.slice(t + 2), a = process.env.CLAUDE_PTY_HOST_EXEC === "1";
  import_chunk_c203g5kd.s.unset("CLAUDE_PTY_HOST_EXEC");
  let y = process.env.CLAUDE_BG_PTY_AUTH;
  import_chunk_c203g5kd.s.unset("CLAUDE_BG_PTY_AUTH");
  let b = process.env.CLAUDE_BG_SOCKET_TOKENS_PATH;
  if (b) {
    let e = await (0, import_chunk_jmxgdf7r.yhn)(b);
    if (e?.ptyAuth) y = e.ptyAuth;
    else if (!y) await Q(o, "tokens-file unreadable; DATA gate fail-open");
    if (a) import_chunk_c203g5kd.s.unset("CLAUDE_BG_SOCKET_TOKENS_PATH"), await (0, import_promises.unlink)(b).catch(() => {
    });
  }
  let V = import_chunk_c203g5kd.s.CLAUDE_BG_SOCK_ADMIT_SILENT_PEERS === "1";
  if (a) import_chunk_c203g5kd.s.unset("CLAUDE_BG_SOCK_ADMIT_SILENT_PEERS");
  let j = V || !y && !b, q = import_chunk_c203g5kd.s.CLAUDE_BG_SILENT_PEER_TIMEOUT_MS || le;
  if ((0, import_chunk_cg8dqz0a.x)() !== "windows") try {
    (0, import_os.setPriority)(0, Math.min((0, import_os.getPriority)(0) + 5, 19));
  } catch {
  }
  let k = ue(import_chunk_bdxa2qdh.Chr), u = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new WeakMap(), H = /* @__PURE__ */ new WeakSet(), D = /* @__PURE__ */ new WeakSet(), m = false, O, g = false, B = false, W = process.ppid, U = 0, P = null, Y = pe(process.env.CLAUDE_PTY_RECORD, d, S);
  function F(e) {
    for (let r of u) {
      if (r.destroyed) {
        u.delete(r);
        continue;
      }
      if (r.writableLength > ae) {
        r.destroy(), u.delete(r);
        continue;
      }
      r.write(e);
    }
  }
  let _, f;
  try {
    _ = new Bun.Terminal({ cols: d, rows: S, data(e, r) {
      B = true;
      let c = Buffer.from(r);
      if (k.push(c), Y?.write(c), u.size) F((0, import_chunk_bdxa2qdh.Rhr)(c));
    } }), f = Bun.spawn([h, ...p], { cwd: process.cwd(), env: { ...process.env, TERM: "xterm-256color" }, terminal: _, windowsHide: true, detached: false, ...n && { argv0: "claude bg-spare" } });
  } catch (e) {
    R(o, `spawn failed: ${String(e)}`);
  }
  function w(e, r) {
    if (!e.destroyed) e.write(r);
  }
  function J(e) {
    switch (e.t) {
      case "resize": {
        let r = Number(e.cols), c = Number(e.rows);
        if (r > 0 && r <= import_chunk_bdxa2qdh.ust && c > 0 && c <= import_chunk_bdxa2qdh.ust && !m && !g) {
          if (_.resize(r, c), (0, import_chunk_cg8dqz0a.x)() !== "windows") {
            try {
              process.kill(-process.pid, "SIGWINCH");
            } catch {
            }
            try {
              f.kill("SIGWINCH");
            } catch {
            }
          }
        }
        return;
      }
      case "kill": {
        let r = e.sig === "SIGKILL" ? "SIGKILL" : "SIGTERM";
        try {
          g = fe(r, f, _) || g;
        } catch {
        }
        if (r === "SIGTERM") setTimeout(() => {
          if (!m) try {
            f.kill("SIGKILL");
          } catch {
          }
        }, 5e3).unref();
        return;
      }
      default:
        return;
    }
  }
  await (0, import_promises.unlink)(o).catch(() => {
  });
  let L = (0, import_net.createServer)((e) => {
    e.on("error", () => e.destroy()), e.once("close", () => u.delete(e));
    let r = false, c = false;
    function E() {
      if (r || e.destroyed) return;
      r = true, c = m, e.setTimeout(0), w(e, (0, import_chunk_bdxa2qdh.H5)({ t: "hello", replPid: f.pid, version: typeof { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" } < "u" ? { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION : void 0 }));
      for (let l of k.chunks) w(e, (0, import_chunk_bdxa2qdh.Rhr)(l));
      if (w(e, (0, import_chunk_bdxa2qdh.H5)({ t: "live" })), u.add(e), U = 0, G.set(e, { armed: false, missed: 0 }), w(e, (0, import_chunk_bdxa2qdh.H5)({ t: "ping" })), m) w(e, (0, import_chunk_bdxa2qdh.H5)({ t: "exit", code: C, signal: M })), e.end(), O?.();
    }
    if (j) {
      if (E(), m) return;
    } else e.setTimeout(q, () => e.destroy());
    let I = (0, import_chunk_bdxa2qdh.jdo)((l) => {
      if (!r) E();
      if (c) return;
      if (l.kind === import_chunk_bdxa2qdh.Zrn) {
        if (y && !H.has(e)) {
          if (!D.has(e)) D.add(e), w(e, (0, import_chunk_bdxa2qdh.H5)({ t: "auth-required" }));
          return;
        }
        if (!m && !g) {
          if (_.write(l.payload), a && (0, import_chunk_cg8dqz0a.x)() !== "windows") {
            let T = l.payload.includes(3) ? "SIGINT" : l.payload.includes(28) ? "SIGQUIT" : null;
            if (T) {
              P = T;
              try {
                process.kill(-process.pid, T);
              } catch {
              }
              setImmediate(() => {
                P = null;
              });
            }
          }
        }
      } else if (l.kind === import_chunk_bdxa2qdh.Wdo) if (l.ctrl.t === "pong") {
        let T = G.get(e);
        if (T) T.armed = true, T.missed = 0;
      } else if (l.ctrl.t === "auth") {
        if ((0, import_chunk_jmxgdf7r.Zj)(l.ctrl.token, y)) H.add(e);
      } else J(l.ctrl);
    }, () => e.destroy());
    e.on("data", I);
  });
  L.on("error", (e) => {
    try {
      f.kill("SIGTERM");
    } catch {
    }
    R(o, `server error: ${String(e)}`);
  }), L.listen(o), L.unref();
  let A, v;
  if ((0, import_chunk_cg8dqz0a.x)() !== "windows") {
    let e = (0, import_chunk_2gtmjt3y.Cse)(process.env.CLAUDE_PTY_HEARTBEAT_MS) || 6e4, r = 3;
    v = setInterval(() => {
      if (m) return;
      for (let I of u) {
        let l = G.get(I);
        if (!l?.armed) continue;
        if (l.missed++, l.missed >= 3) I.destroy(), u.delete(I);
        else w(I, (0, import_chunk_bdxa2qdh.H5)({ t: "ping" }));
      }
    }, e), v.unref();
    let c = (0, import_chunk_2gtmjt3y.Cse)(process.env.CLAUDE_PTY_ORPHAN_CHECK_MS) || 2e3, E = 30;
    A = setInterval(() => {
      if (m) return;
      if (process.ppid === W || u.size > 0) {
        U = 0;
        return;
      }
      if (++U < E) return;
      clearInterval(A), clearInterval(v), Q(o, `orphan watchdog: ppid ${W}\u2192${process.ppid}, no client for ${E * c}ms`), (0, import_chunk_ndrgvsn7.ix)("ptyhost_orphan_watchdog");
      try {
        f.kill("SIGTERM");
      } catch {
      }
      setTimeout(() => {
        if (!m) try {
          f.kill("SIGKILL");
        } catch {
        }
      }, 5e3).unref();
    }, c), A.unref();
  }
  for (let e of ["SIGTERM", "SIGINT", "SIGHUP"]) process.on(e, () => {
    if (P === e) return;
    try {
      f.kill(e === "SIGHUP" ? "SIGTERM" : e);
    } catch {
    }
  });
  if (a && (0, import_chunk_cg8dqz0a.x)() !== "windows") process.on("SIGQUIT", () => {
    if (P === "SIGQUIT") return;
    try {
      f.kill("SIGQUIT");
    } catch {
    }
  });
  let C = 0;
  C = await f.exited;
  let z = 0;
  for (let e = 0; e < 20; e++) if (B = false, await (0, import_chunk_5appeerh.K)(5), B) z = 0;
  else if (++z >= 2) break;
  let M = f.signalCode ?? void 0;
  if (m = true, a) try {
    let e = (0, import_chunk_d55td748.ube)(o), r = Buffer.concat(k.chunks).subarray(-4096), c = 0;
    while (c < 3 && c < r.length && (r[c] & 192) === 128) c++;
    let E = r.subarray(c).toString("utf8");
    (0, import_chunk_q7qjcthc.b3)(e, JSON.stringify({ code: C, signal: M, tail: E }), 384);
  } catch {
  }
  if (A) clearInterval(A);
  if (v) clearInterval(v);
  if (!g) _.close();
  if (Y?.close(), a && (0, import_chunk_cg8dqz0a.x)() !== "windows") {
    P = "SIGHUP";
    try {
      process.kill(-process.pid, "SIGHUP");
    } catch {
    }
  }
  if (F((0, import_chunk_bdxa2qdh.H5)({ t: "exit", code: C, signal: M })), u.size === 0) {
    let e = new Promise((r) => {
      O = r;
    });
    await de(e, a ? () => (0, import_promises.writeFile)((0, import_chunk_d55td748.tV)(o), Buffer.concat(k.chunks)) : void 0);
  }
  for (let e of u) e.end();
  if (await Promise.race([new Promise((e) => L.close(() => e())), (0, import_chunk_5appeerh.K)(2e3, void 0, { unref: true })]), (0, import_chunk_cg8dqz0a.x)() !== "windows") await (0, import_promises.unlink)(o).catch(() => {
  });
  process.exit(C);
}
async function de(i, t, n = 5e3) {
  let o = (t ? t().catch(() => {
  }) : Promise.resolve()).then(() => (0, import_chunk_5appeerh.K)(n));
  await Promise.race([i, o]);
}
function fe(i, t, n) {
  if (i === "SIGTERM" && (0, import_chunk_cg8dqz0a.x)() === "windows") return n.close(), true;
  return t.kill(i), false;
}
function ue(i) {
  let t = [], n = 0, o = 0;
  function d() {
    if (n > 0) t = t.slice(n), n = 0;
  }
  return { get chunks() {
    return d(), t;
  }, push(S) {
    t.push(S), o += S.length;
    while (o > i && t.length - n > 1) {
      o -= t[n++].length;
      for (let h = 0; h < 3; ) {
        let p = t[n], a = 0;
        while (h + a < 3 && a < p.length && (p[a] & 192) === 128) a++;
        if (a > 0) t[n] = p.subarray(a), o -= a, h += a;
        if (t[n].length > 0 || t.length - n === 1) break;
        n++;
      }
    }
    if (n >= t.length - n) d();
  } };
}
function pe(i, t, n) {
  if (!i) return;
  let o = process.hrtime.bigint(), d;
  try {
    d = (0, import_fs.createWriteStream)(i, { flags: "w" });
  } catch {
    return;
  }
  d.on("error", () => {
    d?.destroy(), d = void 0;
  });
  let S = Buffer.allocUnsafe(8);
  return S.writeUInt32BE(t, 0), S.writeUInt32BE(n, 4), d.write(S), { write(h) {
    if (!d) return;
    let p = Buffer.allocUnsafe(8 + h.length), a = Number((process.hrtime.bigint() - o) / 1000n);
    p.writeUInt32BE(a >>> 0, 0), p.writeUInt32BE(h.length, 4), h.copy(p, 8), d.write(p);
  }, close() {
    d?.end();
  } };
}
async function Q(i, t) {
  try {
    let n = (0, import_chunk_d55td748.f0)(i);
    await (0, import_promises.mkdir)((0, import_path.dirname)(n), { recursive: true }), await (0, import_promises.appendFile)(n, `${(/* @__PURE__ */ new Date()).toISOString()} ${t}
`);
  } catch {
  }
}
function R(i, t) {
  if (i) try {
    let n = (0, import_chunk_d55td748.f0)(i);
    (0, import_fs.mkdirSync)((0, import_path.dirname)(n), { recursive: true }), (0, import_fs.appendFileSync)(n, `${(/* @__PURE__ */ new Date()).toISOString()} ${t}
`);
  } catch {
  }
  process.exit(1);
}
