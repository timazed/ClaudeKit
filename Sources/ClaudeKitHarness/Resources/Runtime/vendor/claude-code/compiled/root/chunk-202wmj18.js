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
var chunk_202wmj18_exports = {};
__export(chunk_202wmj18_exports, {
  Ini: () => Ini,
  Kqe: () => Kqe,
  Z3: () => Z3,
  g1a: () => g1a,
  h1a: () => h1a
});
module.exports = __toCommonJS(chunk_202wmj18_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_52ckkfmm = require("/$bunfs/root/chunk-52ckkfmm.js");
var import_chunk_5g3apnc6 = require("/$bunfs/root/chunk-5g3apnc6.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var c = (0, import_chunk_w1d7ygsk.V)(function(w, p) {
  var R = (0, import_chunk_w1d7ygsk.ft)("path"), s = (0, import_chunk_5g3apnc6.Mzi)();
  p.exports = s.computerUse;
});
function Z3() {
  return (0, import_chunk_52ckkfmm.Fh)().swiftModule ??= c();
}
function g(e) {
  e._drainMainRunLoop();
}
function m() {
  let e = (0, import_chunk_52ckkfmm.Fh)();
  if (e.runLoopPumpRetainCount++, e.runLoopPump === void 0) e.runLoopPump = setInterval(g, 1, Z3()), (0, import_chunk_w578pjby.t)("[drainRunLoop] pump started", { level: "verbose" });
}
function a() {
  let e = (0, import_chunk_52ckkfmm.Fh)();
  if (e.runLoopPumpRetainCount--, e.runLoopPumpRetainCount <= 0 && e.runLoopPump !== void 0) clearInterval(e.runLoopPump), e.runLoopPump = void 0, (0, import_chunk_w578pjby.t)("[drainRunLoop] pump stopped", { level: "verbose" }), e.runLoopPumpRetainCount = 0;
}
var P = 3e4;
class f extends Error {
  constructor(e) {
    super(`computer-use native call exceeded ${e}ms`);
  }
}
function v(e, r) {
  e(new f(r));
}
var d = m, y = a;
async function Kqe(e, r = P) {
  m();
  let o;
  try {
    let i = e();
    i.catch(() => {
    });
    let n = Promise.withResolvers();
    return o = setTimeout(v, r, n.reject, r), await Promise.race([i, n.promise]);
  } finally {
    clearTimeout(o), a();
  }
}
function h1a(e) {
  if ((0, import_chunk_52ckkfmm.Fh)().escHotkeyRegistered) return true;
  if (!Z3().hotkey.registerEscape(e)) return (0, import_chunk_w578pjby.t)("[cu-esc] registerEscape returned false", { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("computeruse_esc_register", "tap_create_failed"), false;
  return d(), (0, import_chunk_52ckkfmm.Fh)().escHotkeyRegistered = true, (0, import_chunk_w578pjby.t)("[cu-esc] registered"), (0, import_chunk_cqa9hrgx.u)("computeruse_esc_register"), true;
}
function g1a() {
  if (!(0, import_chunk_52ckkfmm.Fh)().escHotkeyRegistered) return;
  try {
    Z3().hotkey.unregister();
  } finally {
    y(), (0, import_chunk_52ckkfmm.Fh)().escHotkeyRegistered = false, (0, import_chunk_w578pjby.t)("[cu-esc] unregistered");
  }
}
function Ini() {
  if (!(0, import_chunk_52ckkfmm.Fh)().escHotkeyRegistered) return;
  Z3().hotkey.notifyExpectedEscape();
}
