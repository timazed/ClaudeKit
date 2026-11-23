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
var chunk_mqj2w7ns_exports = {};
__export(chunk_mqj2w7ns_exports, {
  $ao: () => $ao,
  Dao: () => Dao,
  Dk: () => Dk,
  E5e: () => E5e,
  Fao: () => Fao,
  Hao: () => Hao,
  IQ: () => IQ,
  Lao: () => Lao,
  Mao: () => Mao,
  Nao: () => Nao,
  XDn: () => XDn,
  Znn: () => Znn,
  _ae: () => _ae,
  cZa: () => cZa,
  dZa: () => dZa,
  els: () => els,
  k5e: () => k5e,
  l7: () => l7,
  lZa: () => lZa,
  u1t: () => u1t,
  uZa: () => uZa,
  x5: () => x5
});
module.exports = __toCommonJS(chunk_mqj2w7ns_exports);
var import_chunk_0f2gasyz = require("/$bunfs/root/chunk-0f2gasyz.js");
var Dk = { AUTO_WRAP: 7, CURSOR_VISIBLE: 25, ALT_SCREEN: 47, ALT_SCREEN_CLEAR: 1049, MOUSE_NORMAL: 1e3, MOUSE_BUTTON: 1002, MOUSE_ANY: 1003, MOUSE_SGR: 1006, MOUSE_SGR_PIXELS: 1016, FOCUS_EVENTS: 1004, BRACKETED_PASTE: 2004, THEME_NOTIFY: 2031, SYNCHRONIZED_UPDATE: 2026, WIN32_INPUT_MODE: 9001 };
function l7(E) {
  return (0, import_chunk_0f2gasyz.Jl)(`?${E}h`);
}
function _ae(E) {
  return (0, import_chunk_0f2gasyz.Jl)(`?${E}l`);
}
var lZa = l7(Dk.SYNCHRONIZED_UPDATE), Mao = _ae(Dk.SYNCHRONIZED_UPDATE), dZa = l7(Dk.BRACKETED_PASTE), Hao = _ae(Dk.BRACKETED_PASTE), Dao = l7(Dk.FOCUS_EVENTS), XDn = _ae(Dk.FOCUS_EVENTS), cZa = l7(Dk.THEME_NOTIFY), Lao = _ae(Dk.THEME_NOTIFY), k5e = l7(Dk.AUTO_WRAP), els = _ae(Dk.AUTO_WRAP), x5 = l7(Dk.CURSOR_VISIBLE), IQ = _ae(Dk.CURSOR_VISIBLE), Znn = l7(Dk.ALT_SCREEN_CLEAR), u1t = _ae(Dk.ALT_SCREEN_CLEAR), Nao = _ae(Dk.WIN32_INPUT_MODE), _ = l7(Dk.MOUSE_NORMAL) + l7(Dk.MOUSE_BUTTON) + l7(Dk.MOUSE_ANY) + l7(Dk.MOUSE_SGR), S = l7(Dk.MOUSE_NORMAL) + l7(Dk.MOUSE_SGR), E5e = _ae(Dk.MOUSE_SGR) + _ae(Dk.MOUSE_ANY) + _ae(Dk.MOUSE_BUTTON) + _ae(Dk.MOUSE_NORMAL), uZa = l7(Dk.MOUSE_SGR_PIXELS), Fao = _ae(Dk.MOUSE_SGR_PIXELS) + l7(Dk.MOUSE_SGR);
function $ao(E) {
  switch (E) {
    case "full":
      return _;
    case "scroll":
      return S;
    case "off":
      return "";
  }
}
