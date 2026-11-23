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
var chunk_31467yzh_exports = {};
__export(chunk_31467yzh_exports, {
  jgt: () => jgt
});
module.exports = __toCommonJS(chunk_31467yzh_exports);
var import_chunk_rg2p81t1 = require("/$bunfs/root/chunk-rg2p81t1.js");
var import_chunk_1w26p6p9 = require("/$bunfs/root/chunk-1w26p6p9.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var a = { navigate: "navigate", read_page: "read the page", get_page_text: "extract page text", find: "find an element", form_input: "fill in a form field", javascript_tool: "run JavaScript", read_console_messages: "read console messages", read_network_requests: "read network requests", upload_image: "upload an image", file_upload: "upload a file", select_browser: "select a browser", gif_creator: "record a GIF of the page", shortcuts_execute: "run a saved browser shortcut", tabs_create_mcp: "open a new browser tab" }, i = { screenshot: "take a screenshot", left_click: "click", right_click: "right-click", middle_click: "middle-click", double_click: "double-click", triple_click: "triple-click", type: "type text", key: "press keys", hold_key: "hold a key", scroll: "scroll", scroll_to: "scroll to an element", left_click_drag: "drag", zoom: "zoom in", hover: "hover", mouse_move: "move the mouse", left_mouse_down: "press the mouse button", left_mouse_up: "release the mouse button", cursor_position: "read the cursor position", wait: "wait" }, c = 4;
function l(o) {
  let e = o.slice(0, c), r = o.length - e.length;
  if (r > 0) e.push(`${r} more`);
  if (e.length === 1) return e[0] ?? "";
  if (e.length === 2) return `${e[0]} and ${e[1]}`;
  return `${e.slice(0, -1).join(", ")}, and ${e.at(-1)}`;
}
function u(o) {
  if (!Array.isArray(o.actions)) return [];
  let e = /* @__PURE__ */ new Set(), r = [];
  for (let t of o.actions) {
    if (!(0, import_chunk_ma3kja9f.T)(t) || typeof t.name !== "string") continue;
    let n = (0, import_chunk_ma3kja9f.T)(t.input) ? t.input : {};
    if (t.name === "browser_batch" || import_chunk_rg2p81t1.tye.has(t.name) && (0, import_chunk_sjqze7qg.ACe)(t.name, n)) continue;
    let s = jgt(t.name, n);
    if (!e.has(s)) e.add(s), r.push(s);
  }
  return r;
}
function jgt(o, e) {
  let r = o.startsWith(import_chunk_1w26p6p9.d0) ? o.slice(import_chunk_1w26p6p9.d0.length) : o;
  if (r === "computer") {
    let t = typeof e.action === "string" ? e.action : void 0;
    if (t && i[t]) return i[t];
    return "use the browser";
  }
  if (r === "browser_batch") {
    let t = u(e);
    return t.length > 0 ? l(t) : "use the browser";
  }
  if (r === "tabs_context_mcp") return e.createIfEmpty ? "create a browser window and read your tabs" : "read your browser tabs";
  return a[r] ?? "use the browser";
}
