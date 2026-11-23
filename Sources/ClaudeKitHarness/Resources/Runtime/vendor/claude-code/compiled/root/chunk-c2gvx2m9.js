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
var chunk_c2gvx2m9_exports = {};
__export(chunk_c2gvx2m9_exports, {
  Ay: () => Ay,
  jYn: () => jYn,
  t2s: () => t2s
});
module.exports = __toCommonJS(chunk_c2gvx2m9_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_zwfq7wpn = require("/$bunfs/root/chunk-zwfq7wpn.js");
var import_chunk_d55td748 = require("/$bunfs/root/chunk-d55td748.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_ty0kydzz = require("/$bunfs/root/chunk-ty0kydzz.js");
var import_chunk_p51r1nb3 = require("/$bunfs/root/chunk-p51r1nb3.js");
var import_net = require("net");
var import_string_decoder = require("string_decoder");
async function Ay(g, m) {
  let s;
  try {
    s = (0, import_net.connect)((0, import_chunk_d55td748.CAe)());
  } catch (r) {
    return { ok: false, code: "ENOCONN", error: (0, import_chunk_d55td748.MH)((0, import_chunk_jv7av99m.d)(r)), errno: (0, import_chunk_jv7av99m.w)(r) };
  }
  let p = m?.timeoutMs ?? 5e3, o, l = new Promise((r) => {
    o = r;
  }), c = false, i = false, u = (r) => {
    if (c) return;
    c = true, s.destroy(), o(r);
  };
  s.setTimeout(p, () => u({ ok: false, code: "ETIMEOUT", error: "control socket timeout", connected: i })), s.on("error", (r) => u({ ok: false, code: "ENOCONN", error: (0, import_chunk_d55td748.MH)((0, import_chunk_jv7av99m.d)(r)), connected: i, errno: (0, import_chunk_jv7av99m.w)(r) })), s.once("connect", () => {
    i = true, s.write((0, import_chunk_w578pjby._)(g) + `
`);
  });
  let e = new import_string_decoder.StringDecoder("utf8"), n = "";
  return s.on("data", (r) => {
    n += e.write(r);
    let E = n.indexOf(`
`);
    if (E < 0) return;
    let C = n.slice(0, E);
    try {
      u((0, import_chunk_w578pjby.te)(C));
    } catch (N) {
      u({ ok: false, code: "ENOCONN", error: (0, import_chunk_d55td748.MH)((0, import_chunk_jv7av99m.d)(N)), connected: i });
    }
  }), s.once("close", () => {
    if (!c) u({ ok: false, code: "ENOCONN", error: "connection dropped mid-request \u2014 it may have restarted; retry", connected: i });
  }), l;
}
var v = 4, O = /* @__PURE__ */ new Set(["shutdown_op", "upgrade", "yield", "displaced"]);
function jYn(g) {
  return b({ label: g, cwd: (0, import_chunk_18rsj2ts.pe)(), pid: process.pid });
}
function b(g, m) {
  let s = false, p = null, o = null, l = true, c = v, i = async (e) => {
    if (e || !m || !l || c === 0) {
      o = setTimeout(u, 1e3), o.unref();
      return;
    }
    let n = false;
    try {
      n = await m.ensureDaemon() === "started";
    } catch (r) {
      (0, import_chunk_w578pjby.t)(`daemon lease: ensureDaemon failed: ${(0, import_chunk_d55td748.MH)((0, import_chunk_jv7av99m.d)(r))}`, { level: "error" });
    }
    if (l = n, c -= n ? 1 : 0, c === 0) (0, import_chunk_y53wbr8a.a)("tengu_bg_cloud_lease", { transition: (0, import_chunk_78g0060s.S)("starts_used_up") }), (0, import_chunk_w578pjby.t)(`daemon lease: started a daemon ${v} times; from here it only reconnects`, { level: "warn" });
    u();
  }, u = () => {
    if (s) return;
    let e;
    try {
      e = (0, import_net.connect)((0, import_chunk_d55td748.CAe)());
    } catch {
      p = null, i(false);
      return;
    }
    p = e;
    let n = false;
    if (e.on("error", () => e.destroy()), e.once("connect", () => {
      let r = process.getuid?.();
      if (m && r !== void 0 && (0, import_chunk_p51r1nb3.hmo)(e) !== r) {
        if (l) l = false, (0, import_chunk_y53wbr8a.a)("tengu_bg_cloud_lease", { transition: (0, import_chunk_78g0060s.S)("server_not_this_user") }), (0, import_chunk_w578pjby.t)("daemon lease: the control socket is not served by this user, or its server cannot be told; not taking a lease there", { level: "warn" });
        e.destroy();
        return;
      }
      e.write((0, import_chunk_w578pjby._)({ proto: import_chunk_9e5mdyfk.ap, op: "lease", client: g }) + `
`);
    }), m) (0, import_chunk_ty0kydzz.GYn)(e, (r) => {
      if (s) return;
      let E = (0, import_chunk_0jve1fep.et)(r, false), C = (0, import_chunk_9e5mdyfk.bki)().safeParse(E).data?.closing;
      if (C !== void 0) {
        if (O.has(C)) l = false;
        (0, import_chunk_y53wbr8a.a)("tengu_bg_cloud_lease", { transition: (0, import_chunk_78g0060s.S)("daemon_closing"), cause: (0, import_chunk_78g0060s.f)(C) }), m.onClosing(C);
      } else if (!n && (0, import_chunk_9e5mdyfk.Ski)().safeParse(E).success) n = true, l = true, m.onAcknowledged();
    });
    else e.on("data", () => {
    });
    e.once("close", () => {
      if (p = null, s) return;
      i(n);
    }), e.unref();
  };
  return u(), () => {
    if (s = true, o) clearTimeout(o);
    p?.destroy();
  };
}
function t2s(g, m, s, p) {
  let o;
  try {
    o = (0, import_net.connect)((0, import_chunk_d55td748.CAe)());
  } catch (e) {
    return queueMicrotask(() => p((0, import_chunk_d55td748.MH)((0, import_chunk_jv7av99m.d)(e)))), () => {
    };
  }
  let l = false, c = false, i = (e) => {
    if (l) return;
    l = true, p(e);
  };
  o.setTimeout(1e4, () => {
    if (!c) i((0, import_chunk_zwfq7wpn.Ufr)()), o.destroy();
  }), o.on("error", (e) => i((0, import_chunk_d55td748.MH)((0, import_chunk_jv7av99m.d)(e)))), o.on("close", () => i("control socket closed")), o.on("connect", () => o.write((0, import_chunk_w578pjby._)({ proto: import_chunk_9e5mdyfk.ap, op: "subscribe", short: g, tail: m }) + `
`));
  let u = (0, import_chunk_ty0kydzz.GYn)(o, (e) => {
    if (!c) c = true, o.setTimeout(0);
    try {
      let n = (0, import_chunk_w578pjby.te)(e);
      if ("ok" in n && n.ok === false) i(n.error);
      else s(n);
    } catch {
    }
  });
  return () => {
    l = true, u(), o.destroy();
  };
}
