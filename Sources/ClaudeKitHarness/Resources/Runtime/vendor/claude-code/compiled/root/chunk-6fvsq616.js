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
var chunk_6fvsq616_exports = {};
__export(chunk_6fvsq616_exports, {
  In: () => In,
  P9t: () => P9t,
  Pa: () => Pa,
  gs: () => gs
});
module.exports = __toCommonJS(chunk_6fvsq616_exports);
var import_chunk_ddk99w14 = require("/$bunfs/root/chunk-ddk99w14.js");
var import_chunk_9js1xpg4 = require("/$bunfs/root/chunk-9js1xpg4.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
function In(e, t, n = {}) {
  let { context: o = "Global", isActive: i = true } = n, r = (0, import_chunk_9js1xpg4.$d)(), [s] = (0, import_chunk_bs4h6795.y)(() => ({ handler: t }));
  (0, import_chunk_bs4h6795.It)(() => {
    s.handler = t;
  }), (0, import_chunk_bs4h6795.H)(() => {
    if (!r || !i) return;
    return r.registerHandler({ action: e, context: o, handler: () => s.handler(), singleKey: true });
  }, [e, o, r, i, s]);
}
function gs(e, t = {}) {
  let { context: n = "Global", isActive: o = true } = t, i = (0, import_chunk_9js1xpg4.$d)(), [r] = (0, import_chunk_bs4h6795.y)(() => ({ handlers: e })), s = Object.keys(e).sort().join("|");
  (0, import_chunk_bs4h6795.It)(() => {
    r.handlers = e;
  }), (0, import_chunk_bs4h6795.H)(() => {
    if (!i || !o) return;
    let a = Object.keys(r.handlers).map((l) => i.registerHandler({ action: l, context: n, handler: () => r.handlers[l]?.(), singleKey: true }));
    return () => {
      for (let l of a) l();
    };
  }, [n, s, i, o, r]);
}
function P9t(e) {
  let t = (0, import_chunk_9js1xpg4.$d)(), n = (0, import_chunk_bs4h6795.Ot)(t?.keyHandlerRegistry.handlersChanged.subscribe ?? import_chunk_ddk99w14.bKe, () => t?.hasHandler(e) ?? false);
  return t !== null && n ? () => t.runAction(e) : null;
}
function Pa(e, { isActive: t = true } = {}) {
  let n = (0, import_chunk_9js1xpg4.$d)(), [o] = (0, import_chunk_bs4h6795.y)(() => ({ handler: e }));
  (0, import_chunk_bs4h6795.It)(() => {
    o.handler = e;
  }), (0, import_chunk_bs4h6795.H)(() => {
    if (!t || !n) return;
    return n.registerPreDispatch({ handler: (i, r, s) => o.handler(i, r, s) });
  }, [t, n, o]);
}
