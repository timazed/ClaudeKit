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
var chunk_xzph4c6z_exports = {};
__export(chunk_xzph4c6z_exports, {
  Jbr: () => Jbr,
  Jgs: () => Jgs,
  Qgs: () => Qgs,
  Yit: () => Yit,
  Zan: () => Zan,
  fhl: () => fhl,
  h$n: () => h$n,
  oEt: () => oEt,
  phl: () => phl,
  sEt: () => sEt,
  uhl: () => uhl
});
module.exports = __toCommonJS(chunk_xzph4c6z_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_ge3qft6b = require("/$bunfs/root/chunk-ge3qft6b.js");
var u = /* @__PURE__ */ new Set(["pdf"]);
function Jgs(e) {
  let t = /^(\d{1,9})(?:\s*(-)\s*(\d{1,9})?)?$/.exec(e.trim());
  if (!t) return null;
  let [, r, l, s] = t, a = Number(r), o = s ? Number(s) : l ? 1 / 0 : a;
  if (a < 1 || o < a) return null;
  return { firstPage: a, lastPage: o };
}
var d = ["claude-3-opus", "claude-3-sonnet", "claude-3-haiku"];
function h$n(e) {
  return !(0, import_chunk_2gtmjt3y.zge)(e ?? (0, import_chunk_865at33z.dt)(), d);
}
function Yit(e) {
  let t = e.startsWith(".") ? e.slice(1) : e;
  return u.has(t.toLowerCase());
}
var i = `
- Do NOT re-read a file you just edited to verify \u2014 Edit/Write would have errored if the change failed, and the harness tracks file state for you.`, Qgs = " (file state is current in your context \u2014 no need to Read it back)", h = "File unchanged since last read. The content from the earlier Read tool_result in this conversation is still current \u2014 refer to that instead of re-reading.", c = "Wasted call \u2014 file unchanged since your last Read. Refer to that earlier tool_result instead.", p = "<system-reminder>This file is already in your context";
function Zan(e) {
  return e.startsWith(h) || e.startsWith(c) || e.startsWith(p);
}
var oEt = "[Truncated: PARTIAL view \u2014 ", sEt = 2e3, uhl = "Read a file from the local filesystem.", Jbr = "- Results are returned using cat -n format, with line numbers starting at 1", fhl = `${Jbr}. Each line is the line number, a single separator (a tab or \`:\`), then the verbatim file content (including any leading whitespace).`, n = "- When you already know which part of the file you need, only read that part. This can be important for larger files.";
function phl(e, t, r) {
  if ((0, import_chunk_ge3qft6b.R0)({ model: e, leanPrompt: r })) return `Reads a file from the local filesystem.

- \`file_path\` must be an absolute path.
- Reads up to ${sEt} lines by default.
${n}
${t}
- Reads images (PNG, JPG, \u2026) and presents them visually.${h$n(e) ? ' Reads PDFs via the `pages` parameter (e.g. "1-5", max 20 pages/request; required for PDFs over 10 pages).' : ""} Reads Jupyter notebooks (.ipynb) as cells with outputs.
- Reading a directory, a missing file, or an empty file returns an error or system reminder rather than content.${i}`;
  return `Reads a file from the local filesystem. You can access any file directly by using this tool.
Assume this tool is able to read all files on the machine. If the User provides a path to a file assume that path is valid. It is okay to read a file that does not exist; an error will be returned.

Usage:
- The file_path parameter must be an absolute path, not a relative path
- By default, it reads up to ${sEt} lines starting from the beginning of the file
${n}
${t}
- This tool allows Claude Code to read images (eg PNG, JPG, etc). When reading an image file the contents are presented visually as Claude Code is a multimodal LLM.${h$n(e) ? `
- This tool can read PDF files (.pdf). For large PDFs (more than 10 pages), you MUST provide the pages parameter to read specific page ranges (e.g., pages: "1-5"). Reading a large PDF without the pages parameter will fail. Maximum 20 pages per request.` : ""}
- This tool can read Jupyter notebooks (.ipynb files) and returns all cells with their outputs, combining code, text, and visualizations.
- This tool can only read files, not directories. To list files in a directory, use the registered shell tool.
- You will regularly be asked to read screenshots. If the user provides a path to a screenshot, ALWAYS use this tool to view the file at the path. This tool will work with all temporary file paths.
- If you read a file that exists but has empty contents you will receive a system reminder warning in place of file contents.${i}`;
}
