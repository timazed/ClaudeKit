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
  var E2 = typeof SuppressedError === "function" ? SuppressedError : function(e, s, m2, _2) {
    return _2 = Error(m2), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s, _2;
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
var chunk_0j39khhb_exports = {};
__export(chunk_0j39khhb_exports, {
  Eun: () => Eun,
  QGi: () => QGi,
  ZGi: () => ZGi,
  bed: () => bed,
  ezi: () => ezi,
  wed: () => wed
});
module.exports = __toCommonJS(chunk_0j39khhb_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_8j3h6yzg = require("/$bunfs/root/chunk-8j3h6yzg.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_fs = require("fs");
var import_os = require("os");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
function k(a) {
  {
    if ((0, import_chunk_6mfepmbb.t$)()) return false;
    let o = a.toLowerCase();
    try {
      let e = (0, import_chunk_2yx6c1y2.lFl)(), i = (0, import_chunk_2yx6c1y2.dFl)();
      if (e > 0 && i !== null && i.documentHasPolicyContent === true && i.userWritable !== true) return e === 1 && i.settings.enforceAnthropicSignIn === true && I(i.settings, o);
      return (0, import_chunk_2yx6c1y2.Mee)() === "set" && I((0, import_chunk_2yx6c1y2.Zde)(), o);
    } catch (e) {
      return (0, import_chunk_w578pjby.t)(`Organization commands: the machine policy read threw (${e instanceof Error ? e.name : typeof e})`, { level: "error" }), false;
    }
  }
  return false;
}
function I(a, o) {
  let e = a?.forceLoginOrgUUID;
  return (typeof e === "string" ? [e] : e ?? []).some((r) => r.toLowerCase() === o);
}
var D = 1, S = 864e5, N = 30 * S, T = 4096, y = 1e4, C = { realpath: false, stale: y, retries: { retries: 120, minTimeout: 100, maxTimeout: 100, factor: 1 } }, M = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ version: (0, import_chunk_adx6804h.v)(D), organizationUuid: (0, import_chunk_adx6804h.n)().regex(/^[0-9a-f-]{36}$/), lastUsedAt: (0, import_chunk_adx6804h.E)().finite(), notYetApplied: (0, import_chunk_adx6804h.v)(true).optional() }));
function Eun() {
  return (0, import_path.join)((0, import_os.homedir)(), ".claude", "state", "hybrid-organization-lock.json");
}
function O() {
  return (0, import_chunk_6mfepmbb.t$)();
}
function h(a, o) {
  if (a === void 0 || a.length > T) return;
  let e;
  try {
    e = (0, import_chunk_w578pjby.te)(a);
  } catch {
    e = void 0;
  }
  let i = M().safeParse(e), r = i.success ? o - i.data.lastUsedAt : 1 / 0;
  return i.success && r <= N && r >= -S ? i.data : void 0;
}
async function QGi(a) {
  {
    if (O()) return (0, import_chunk_cqa9hrgx.m)("hybrid_organization_lock", "desktop_document"), "desktop_document";
    let o = a.toLowerCase();
    if (k(o) || (0, import_chunk_xcgcdx61.vqn)(o)) return "admitted";
    let e = "admitted";
    try {
      let i = await (0, import_chunk_8j3h6yzg.Vn)().read(Eun()), r = h(i, Date.now());
      if (r !== void 0 && r.organizationUuid !== o) e = "another_organization";
    } catch (i) {
      if (!(0, import_chunk_jv7av99m.J)(i)) e = "lock_unusable";
    }
    if (e !== "admitted") (0, import_chunk_cqa9hrgx.m)("hybrid_organization_lock", e);
    return e;
  }
  return "lock_unusable";
}
async function ZGi(a) {
  {
    if (O()) return (0, import_chunk_cqa9hrgx.m)("hybrid_organization_lock", "desktop_document"), "desktop_document";
    let o = a.toLowerCase();
    if (k(o)) return "admitted";
    if ((0, import_chunk_xcgcdx61.vqn)(o)) return "admitted";
    let e = Eun(), i = (0, import_chunk_8j3h6yzg.Vn)(), r = "lock_unusable", s = false, l = false, b;
    try {
      await i.mkdir((0, import_path.dirname)(e), 448), b = await (0, import_chunk_2yx6c1y2.Rc)(e, { ...C, lockfilePath: `${e}.lock`, onCompromised: (g) => {
        l = true, (0, import_chunk_w578pjby.t)(`Organization lock: its file lock was lost (${(0, import_chunk_jv7av99m.w)(g) ?? "unknown"})`, { level: "warn" });
      } });
      let f = Date.now(), L;
      try {
        L = await i.read(e);
      } catch (g) {
        if (!(0, import_chunk_jv7av99m.J)(g)) throw g;
      }
      let z = Date.now(), d = h(L, z);
      if (d !== void 0 && d.organizationUuid !== o) r = "another_organization";
      else if (d !== void 0 && Math.abs(z - d.lastUsedAt) < S) r = "admitted";
      else if (!l && Date.now() - f < y) {
        let g = { version: D, organizationUuid: o, lastUsedAt: z, ...(d === void 0 || d.notYetApplied) && { notYetApplied: true } };
        try {
          await i.atomicWrite(e, (0, import_chunk_w578pjby._)(g), 384), r = Date.now() - f < y ? "admitted" : "lock_unusable", s = d === void 0;
        } catch (P) {
          (0, import_chunk_w578pjby.t)(`Organization lock: could not be written (${(0, import_chunk_jv7av99m.w)(P) ?? "unknown"})`, { level: "warn" }), r = d === void 0 ? "lock_unusable" : "admitted";
        }
      }
    } catch (f) {
      (0, import_chunk_w578pjby.t)(`Organization lock: could not be read (${(0, import_chunk_jv7av99m.w)(f) ?? "unknown"}), so your organization's commands don't run`, { level: "warn" }), r = "lock_unusable";
    } finally {
      await (0, import_chunk_2yx6c1y2.Kg)(b, "organization lock");
    }
    if (l && r === "admitted") r = "lock_unusable";
    if (r === "admitted") {
      if ((0, import_chunk_xcgcdx61.Vea)(o), s) (0, import_chunk_cqa9hrgx.u)("hybrid_organization_lock");
    } else (0, import_chunk_cqa9hrgx.m)("hybrid_organization_lock", r);
    return r;
  }
  return "lock_unusable";
}
async function bed(a) {
  {
    let o = a.toLowerCase(), e = Eun(), i = false, r;
    try {
      if (!(0, import_chunk_xcgcdx61.vqn)(o) || !await H(o)) return;
      r = await (0, import_chunk_2yx6c1y2.Rc)(e, { ...C, lockfilePath: `${e}.lock`, onCompromised: () => {
        i = true;
      } });
      let s = Date.now(), l = await H(o);
      if (l && !i && Date.now() - s < y) {
        let { notYetApplied: b, ...f } = l;
        await (0, import_chunk_8j3h6yzg.Vn)().atomicWrite(e, (0, import_chunk_w578pjby._)(f), 384);
      }
    } catch (s) {
      if (!(0, import_chunk_jv7av99m.J)(s)) (0, import_chunk_w578pjby.t)(`Organization lock: its entry keeps the mark of settings not yet applied (${(0, import_chunk_jv7av99m.w)(s) ?? "unknown"})`, { level: "warn" });
    } finally {
      await (0, import_chunk_2yx6c1y2.Kg)(r, "organization lock");
    }
  }
}
function wed(a) {
  {
    let o = a.toLowerCase();
    if (!(0, import_chunk_xcgcdx61.vqn)(o)) return;
    let e = Eun(), i = false;
    try {
      var _stack = [];
      try {
        const r = __using(_stack, (0, import_chunk_2yx6c1y2.UIo)(e, { ...C, retries: 0, lockfilePath: `${e}.lock` }));
        let s = h((0, import_fs.readFileSync)(e, "utf8"), Date.now());
        if (i = s?.organizationUuid === o && !s.notYetApplied, s?.organizationUuid === o && !i) (0, import_fs.unlinkSync)(e);
      } catch (_2) {
        var _error = _2, _hasError = true;
      } finally {
        __callDispose(_stack, _error, _hasError);
      }
    } catch (r) {
      (0, import_chunk_w578pjby.t)(`Organization lock: no entry was removed for the organization whose settings were not applied (${(0, import_chunk_jv7av99m.w)(r) ?? "unknown"})`, { level: "warn" });
    }
    if (!i) (0, import_chunk_xcgcdx61.Kea)(o);
  }
}
function ezi(a) {
  let o = a.toLowerCase();
  return !O() && (k(o) || (0, import_chunk_xcgcdx61.vqn)(o));
}
async function H(a) {
  let o = h(await (0, import_chunk_8j3h6yzg.Vn)().read(Eun()), Date.now());
  return o?.organizationUuid === a && o.notYetApplied ? o : void 0;
}
