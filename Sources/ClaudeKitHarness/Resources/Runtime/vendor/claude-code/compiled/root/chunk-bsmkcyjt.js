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
var chunk_bsmkcyjt_exports = {};
__export(chunk_bsmkcyjt_exports, {
  Bjs: () => Bjs,
  DYn: () => DYn,
  Gjs: () => Gjs,
  HYn: () => HYn,
  IYn: () => IYn,
  LYn: () => LYn,
  L_a: () => L_a,
  MYn: () => MYn,
  N_a: () => N_a,
  SUo: () => SUo,
  Wjs: () => Wjs,
  _Uo: () => _Uo,
  bwn: () => bwn,
  eWr: () => eWr,
  fIt: () => fIt,
  jjs: () => jjs,
  nWr: () => nWr,
  pIt: () => pIt,
  tWr: () => tWr,
  uIt: () => uIt,
  yUo: () => yUo,
  zjs: () => zjs
});
module.exports = __toCommonJS(chunk_bsmkcyjt_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_r3wrey46 = require("/$bunfs/root/chunk-r3wrey46.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_d55td748 = require("/$bunfs/root/chunk-d55td748.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_bdxa2qdh = require("/$bunfs/root/chunk-bdxa2qdh.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_7n1spq36 = require("/$bunfs/root/chunk-7n1spq36.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_promises = require("fs/promises");
var import_promises2 = require("fs/promises");
var import_net = require("net");
var import_path = require("path");
async function uIt(t, e) {
  return await (0, import_chunk_9e5mdyfk.kbt)(t, e).catch(() => null) === "absent" ? "absent" : "unreadable";
}
function fIt(t, e) {
  (0, import_chunk_y53wbr8a.a)("tengu_bg_restart_without_saved_state", { trigger: (0, import_chunk_78g0060s.f)(t), reason: (0, import_chunk_78g0060s.f)(e) });
}
var v = /* @__PURE__ */ new Set([1e3, 1002, 1003, 1004, 1006, 2004, 2031]), M = /\x1b\[\?([\d;]+)([hl])/g;
function IYn() {
  let t = /* @__PURE__ */ new Set(), e = "";
  return { feed(o, r) {
    let c = e ? e + o : o, d = 0, l = false;
    for (let y of c.matchAll(M)) {
      let h = y[2] === "h";
      for (let b of y[1].split(";")) {
        let n = Number(b);
        if (v.has(n) && t.has(n) !== h) {
          if (h) t.add(n), r?.(n);
          else t.delete(n);
          l = true;
        }
      }
      d = y.index + y[0].length;
    }
    let g = c.slice(Math.max(d, c.length - 16)), k = g.lastIndexOf("\x1B");
    return e = k >= 0 && /^\x1b(\[(\?[\d;]*)?)?$/.test(g.slice(k)) ? g.slice(k) : "", l;
  }, seed(o) {
    for (let r of o) if (v.has(r)) t.add(r);
  }, snapshot() {
    return [...t];
  } };
}
function _Uo(t) {
  return import_chunk_hkvzj051.at.daemon(["host-managed", t]);
}
function MYn(t) {
  return ((0, import_chunk_69qhefwa.Ne)(t?.CLAUDE_CODE_USE_GATEWAY) ? `gateway
` : "") + ((0, import_chunk_69qhefwa.Ne)(t?.CLAUDE_CODE_HOST_GATEWAY_LINEAGE) ? `lineage
` : "");
}
function L_a(t) {
  let e = new Set(t.split(/\r?\n/));
  return { gateway: e.has("gateway"), lineage: e.has("lineage") };
}
var R = { namespace: "daemon", relPath: ["host-managed"] };
async function eWr(t) {
  let e = await t.ensureScope(R);
  if (!e.ok) throw P(Error("host tombstone folder not made", { cause: e.error }), e.error);
}
async function tWr(t, e, o) {
  let r = await t.write(_Uo(e), o, { publishDiscipline: "inPlace" });
  if (!r.ok) throw P(Error("host tombstone write failed", { cause: r.error }), r.error);
}
async function HYn(t, e) {
  await t.delete(_Uo(e)).catch(() => {
  });
}
function P(t, e) {
  let o = (0, import_chunk_7n1spq36.Xg)(e);
  return Object.assign(t, o !== void 0 ? { code: o } : {});
}
function yUo(t) {
  return import_chunk_hkvzj051.at.daemon(["gateway-routed", t]);
}
var O = { namespace: "daemon", relPath: ["gateway-routed"] };
async function N_a(t, e) {
  let o = await t.ensureScope(O), r = o.ok ? await t.write(yUo(e), "", { precondition: { type: "ifAbsent" } }) : o;
  if (!r.ok && r.error.code !== "AlreadyExists") throw P(Error("gateway mark write failed", { cause: r.error }), r.error);
}
async function Bjs(t, e) {
  await t.delete(yUo(e)).catch(() => {
  });
}
async function DYn(t, e) {
  if ((0, import_chunk_m15w38ag.ne)() && t !== void 0) await Bjs(t, e);
  else await (0, import_promises.unlink)((0, import_chunk_d55td748.RUt)(e)).catch(() => {
  });
}
var I = /* @__PURE__ */ new Set(["EMFILE", "ENFILE", "EBUSY", "EPERM", "EAGAIN"]);
async function bwn(t, e = true) {
  try {
    return await (0, import_promises.lstat)((0, import_chunk_d55td748.RUt)(t)), "set";
  } catch (o) {
    if ((0, import_chunk_jv7av99m.kn)(o)) return "absent";
    let r = (0, import_chunk_jv7av99m.w)(o) ?? "error";
    if (e && I.has(r)) return await (0, import_chunk_5appeerh.K)(50), bwn(t, false);
    return r;
  }
}
async function SUo(t, e) {
  if (e.launch.mode !== "exec" || !t) return null;
  try {
    let o = await (0, import_chunk_xfj2cwfv.Uu)((0, import_chunk_d55td748.ube)(t), 8192);
    if (o == null) return null;
    let r = JSON.parse(o);
    if (typeof r?.code !== "number") return null;
    let c = (0, import_chunk_wbk1hf21.Tl)(typeof r.tail === "string" ? r.tail : "").replace(/\r\n?/g, `
`).split(`
`).findLast((k) => k.trim())?.trim() ?? "", d = (0, import_chunk_r3wrey46.Sh)((0, import_chunk_sah8dzn4.As)(c), import_chunk_r3wrey46.oS);
    if (r.code === 0) return { state: "done", detail: d || "(no output)", code: 0 };
    let l = typeof r.signal === "string" ? r.signal : void 0;
    if (l === "SIGINT" || l === "SIGQUIT") return { state: "stopped", detail: "stopped", code: r.code };
    let g = l ? `${l} (${r.code})` : `exit ${r.code}`;
    return { state: "crashed", detail: d ? `${g} \u2014 ${d}` : g, signal: l, code: r.code };
  } catch {
    return null;
  }
}
async function Wjs(t = {}, e) {
  return (0, import_chunk_cqa9hrgx.qo)("daemon_bg_reap_all", async () => {
    let o = await (0, import_chunk_9e5mdyfk.Mq)({ silent: true }, e), r = /* @__PURE__ */ new Map();
    for (let [n, s] of Object.entries(o.workers)) r.set(n, { pid: s.pid, procStart: s.procStart, ptySock: s.ptySock, dispatch: s.dispatch, replPid: s.replPid, replProcStart: s.replProcStart });
    let c = (0, import_chunk_cg8dqz0a.x)() === "windows", [d, l] = c ? [(0, import_chunk_d55td748.xUt)(), ".pid"] : [(0, import_chunk_d55td748.$sn)(), ".sock"], g = c && e ? await jjs(e) : await (0, import_promises2.readdir)(d).catch(() => []), k = new Set(g.filter((n) => n.endsWith(l)));
    for (let n of g) {
      if (!n.endsWith(l)) {
        if (!c) {
          let p = [".err", ".late", ".exec-exit", ".err.read"].find((S) => n.endsWith(`.sock${S}`));
          if (p && !k.has(n.slice(0, -p.length))) {
            let S = n.slice(0, -`.sock${p}`.length);
            if (!(p === ".exec-exit" && r.has(S))) await (0, import_promises2.unlink)((0, import_path.join)(d, n)).catch(() => {
            });
          }
        }
        continue;
      }
      let s = n.slice(0, -l.length);
      if (r.has(s)) continue;
      let u = c ? Number((e ? await Gjs(e, s) : await (0, import_chunk_xfj2cwfv.Uu)((0, import_chunk_d55td748.aje)(s), LYn)) ?? "0") : 0;
      r.set(s, { pid: u, ptySock: (0, import_chunk_d55td748.HH)(s) });
    }
    if (!c) {
      let n = /* @__PURE__ */ new Set();
      for (let u of r.values()) if (u.ptySock) n.add(u.ptySock);
      let s = await (0, import_promises2.readdir)((0, import_chunk_d55td748.ZDe)()).catch(() => []);
      for (let u of s) {
        if (!u.endsWith(".pty.sock")) continue;
        let p = (0, import_path.join)((0, import_chunk_d55td748.ZDe)(), u);
        if (n.has(p)) continue;
        r.set(`spare:${u}`, { pid: 0, ptySock: p });
      }
    }
    let y = 0, h = /* @__PURE__ */ new Set(), b = setInterval(() => {
    }, 6e4);
    if (await Promise.all(Array.from(r.entries()).map(async ([n, s]) => {
      let u = s.dispatch ? await SUo(s.ptySock, s.dispatch) : null;
      if (s.ptySock && await pIt(s.ptySock, e)) y++;
      else if (s.pid) {
        let p = await zjs(s.pid, s.procStart), S = p !== "unverified" && await (0, import_chunk_rb36kwbn.Tze)(s.replPid, s.replProcStart);
        switch (p) {
          case "killed":
            y++;
            break;
          case "unverified":
            h.add(n);
            return;
          case "gone":
          case "foreign":
            if (S) y++;
            break;
          default:
        }
      }
      if (!n.startsWith("spare:")) {
        let p = { state: "stopped", detail: "stopped" }, S = u?.state === "done" ? u : t.supervisorKilledAll ? p : u ?? p;
        if (await (0, import_chunk_9e5mdyfk.d1t)(n, S.state, S.detail, void 0, e), c && e) await e.delete(import_chunk_hkvzj051.at.daemon(["pty-pids", (0, import_path.basename)((0, import_chunk_d55td748.ube)(s.ptySock ?? (0, import_chunk_d55td748.HH)(n)))])).catch(() => {
        });
        else await (0, import_promises2.unlink)((0, import_chunk_d55td748.ube)(s.ptySock ?? (0, import_chunk_d55td748.HH)(n))).catch(() => {
        });
      }
      if (c) if (e) await N(e, n);
      else {
        await (0, import_promises2.unlink)((0, import_chunk_d55td748.aje)(n)).catch(() => {
        });
        let p = (0, import_chunk_d55td748.f0)((0, import_chunk_d55td748.HH)(n));
        await (0, import_promises2.unlink)(p).catch(() => {
        }), await (0, import_promises2.unlink)(`${p}.read`).catch(() => {
        }), await (0, import_promises2.unlink)((0, import_chunk_d55td748.tV)((0, import_chunk_d55td748.HH)(n))).catch(() => {
        });
      }
    })).finally(() => clearInterval(b)), r.size > 0) await (0, import_chunk_9e5mdyfk.MCe)((n) => {
      for (let s of r.keys()) if (!h.has(s)) delete n.workers[s];
    }, e).catch(import_chunk_k449cc64.i);
    return { reaped: y, kept: h.size };
  });
}
async function jjs(t) {
  let e = [], o;
  do {
    let r = await t.listEntries({ namespace: "daemon", relPath: ["pty-pids"] }, { cursor: o, skipKeyStats: true, skipScopeStats: true }).catch(() => {
      return;
    });
    if (r === void 0 || !r.ok) return [];
    for (let c of r.value.items) if (c.kind === "key" && c.key.namespace === "daemon") {
      let d = c.key.relPath.at(-1);
      if (d !== void 0 && c.key.relPath.length === 2 && (0, import_chunk_hkvzj051.Ao)(d)) e.push(d);
    }
    o = r.value.cursor;
  } while (o !== void 0);
  return e;
}
var LYn = 4096;
async function C(t) {
  try {
    let e = await (0, import_promises2.lstat)((0, import_chunk_d55td748.aje)(t));
    return !e.isFile() || e.size > LYn;
  } catch (e) {
    return !(0, import_chunk_jv7av99m.J)(e);
  }
}
async function Gjs(t, e) {
  if (await C(e)) return null;
  let o = await t.readText([{ key: import_chunk_hkvzj051.at.daemon(["pty-pids", `${e}.pid`]), offset: 0, length: LYn + 1 }]).catch(() => {
    return;
  });
  if (o === void 0 || !o.ok) return null;
  let r = o.value.items[0];
  if (!r.found || r.totalBytes > LYn) return null;
  return r.value;
}
async function N(t, e) {
  await t.delete(import_chunk_hkvzj051.at.daemon(["pty-pids", `${e}.pid`])).catch(() => {
  }), await B(t, (0, import_chunk_d55td748.HH)(e));
}
async function B(t, e) {
  let o = (0, import_chunk_d55td748.f0)(e);
  for (let r of [(0, import_path.basename)(o), `${(0, import_path.basename)(o)}.read`, (0, import_path.basename)((0, import_chunk_d55td748.tV)(e))]) await t.delete(import_chunk_hkvzj051.at.daemon(["pty-pids", r])).catch(() => {
  });
}
function pIt(t, e) {
  return new Promise((o) => {
    let r = false, c = (l) => {
      if (r) return;
      r = true, o(l);
    }, d = (0, import_net.connect)(t);
    d.unref(), d.setTimeout(2e3, () => {
      d.destroy(), c(false);
    }), d.on("error", () => {
      (0, import_promises2.unlink)(t).catch(() => {
      });
      let l = (0, import_chunk_d55td748.f0)(t);
      if (e && (0, import_chunk_cg8dqz0a.x)() === "windows") B(e, t).catch(() => {
      });
      else (0, import_promises2.unlink)(l).catch(() => {
      }), (0, import_promises2.unlink)(`${l}.read`).catch(() => {
      }), (0, import_promises2.unlink)((0, import_chunk_d55td748.tV)(t)).catch(() => {
      });
      c(false);
    }), d.once("connect", () => {
      d.resume(), d.write((0, import_chunk_bdxa2qdh.H5)({ t: "kill", sig: "SIGTERM" }));
    }), d.once("close", () => c(true));
  });
}
function nWr(t) {
  return new Promise((e) => {
    let o = false, r = (d) => {
      if (o) return;
      o = true, e(d);
    }, c = (0, import_net.connect)(t);
    c.unref(), c.setTimeout(250, () => {
      c.destroy(), r(false);
    }), c.on("error", () => r(false)), c.once("connect", () => {
      c.end((0, import_chunk_bdxa2qdh.H5)({ t: "pong" })), r(true);
    });
  });
}
async function zjs(t, e) {
  try {
    process.kill(t, 0);
  } catch (r) {
    if ((0, import_chunk_jv7av99m.w)(r) !== "ESRCH") return "foreign";
    return (0, import_chunk_rb36kwbn.PPe)([-t, t], e) ? "killed" : "gone";
  }
  if (e === void 0) return "foreign";
  let o = await (0, import_chunk_rb36kwbn.jhe)(t);
  if (o === void 0) return "unverified";
  if (o !== e) return "foreign";
  return (0, import_chunk_rb36kwbn.PPe)([-t, t], e) ? "killed" : "gone";
}
