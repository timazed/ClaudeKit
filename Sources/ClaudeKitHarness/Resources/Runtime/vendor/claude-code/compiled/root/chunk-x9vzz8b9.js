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
var chunk_x9vzz8b9_exports = {};
__export(chunk_x9vzz8b9_exports, {
  Hlo: () => Hlo,
  Ilo: () => Ilo,
  Jls: () => Jls,
  Mlo: () => Mlo,
  OEi: () => OEi,
  PEi: () => PEi,
  SKl: () => SKl,
  SWe: () => SWe,
  bKl: () => bKl,
  k0n: () => k0n,
  nst: () => nst,
  vrn: () => vrn,
  w0n: () => w0n,
  xEi: () => xEi,
  yWe: () => yWe
});
module.exports = __toCommonJS(chunk_x9vzz8b9_exports);
var import_chunk_zcpqgt0x = require("/$bunfs/root/chunk-zcpqgt0x.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_nwzbbv1c = require("/$bunfs/root/chunk-nwzbbv1c.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_path = require("path");
var import_path2 = require("path");
var import_path3 = require("path");
var import_path4 = require("path");
function yWe(o, e) {
  let r = (0, import_path.relative)(o, e);
  return !((0, import_path.isAbsolute)(r) || r === ".." || r.startsWith(`..${import_path.sep}`));
}
var Ilo = { tsconfig: "tsconfig.json", gitignore: ".gitignore" };
var w0n = "claude-code";
var Mlo = "index.d.ts";
var vrn = "claude-code-mcp";
var k0n = "claude-code-tools";
var nst = (0, import_path2.join)((0, import_path2.dirname)(import_chunk_zcpqgt0x.Vp), "types");
var f = (o) => o.replace(/\s+/g, " ").trim().replace(/\*\//g, "* /");
function l(o, e) {
  let { description: r } = o, n = typeof r === "string" ? f(r) : "";
  return n === "" ? "" : `${e}/** ${n} */
`;
}
var xEi = (o) => import_chunk_nwzbbv1c.Klo.test(o) ? o : (0, import_chunk_w578pjby._)(o);
function x(o) {
  return typeof o === "string" || typeof o === "number" || typeof o === "boolean" || o === null ? (0, import_chunk_w578pjby._)(o) : "unknown";
}
var b = 32;
function SWe(o, e = "", r = 0) {
  if (o === true || r > b) return "unknown";
  if (o === false) return "never";
  if (!(0, import_chunk_ma3kja9f.T)(o)) return "unknown";
  if ("const" in o) return x(o.const);
  if (Array.isArray(o.enum)) return o.enum.map(x).join(" | ") || "never";
  if (Array.isArray(o.anyOf) || Array.isArray(o.oneOf)) {
    let t = (o.anyOf ?? o.oneOf).map((n) => SWe(n, e, r + 1));
    return t.length === 0 ? "unknown" : (0, import_chunk_4smdap7r.M)(t).join(" | ");
  }
  if (Array.isArray(o.allOf)) {
    let t = o.allOf.map((s) => SWe(s, e, r + 1));
    return t.length === 0 ? "unknown" : t.map((s) => s.includes(" | ") ? `(${s})` : s).join(" & ");
  }
  if (Array.isArray(o.type)) return (0, import_chunk_4smdap7r.M)(o.type.map((t) => SWe({ ...o, type: t }, e, r + 1))).join(" | ") || "unknown";
  switch (o.type) {
    case "string":
      return "string";
    case "number":
    case "integer":
      return "number";
    case "boolean":
      return "boolean";
    case "null":
      return "null";
    case "array": {
      if (Array.isArray(o.items)) return `[${o.items.map((s) => SWe(s, e, r + 1)).join(", ")}]`;
      let t = SWe(o.items, e, r + 1);
      return t.includes(" | ") || t.includes(" & ") || t.includes("/*") ? `Array<${t}>` : `${t}[]`;
    }
    case "object":
    case void 0: {
      if (!(0, import_chunk_ma3kja9f.T)(o.properties)) {
        let p = o.type === "object", i = "$ref" in o;
        return p ? "{}" : i ? `unknown /* $ref ${f(String(o.$ref))} */` : "unknown";
      }
      let t = new Set(Array.isArray(o.required) ? o.required.map(String) : []), n = `${e}  `, s = Object.entries(o.properties).map(([p, i]) => {
        let y = (0, import_chunk_ma3kja9f.T)(i) ? l(i, n) : "", O = t.has(p) ? "" : "?", g = SWe(i, n, r + 1);
        return `${y}${n}${xEi(p)}${O}: ${g}`;
      });
      return s.length === 0 ? "{}" : `{
${s.join(`
`)}
${e}}`;
    }
    default:
      return "unknown";
  }
}
var Hlo = (o, e, r = (t) => SWe(t.inputSchema, "    ")) => ["declare module 'claude-code' {", `  interface ${o} {`, ...[...e].sort((t, n) => t.name.localeCompare(n.name)).map((t) => {
  let s = t.description === void 0 ? "" : l({ description: t.description }, "    "), u = xEi(t.name);
  return `${s}    ${u}: ${r(t)}`;
}), "  }", "}"];
var Jls = (o) => ["// The inputs of the MCP tools the session had connected when this mod", "// was last saved, from each server's tools/list inputSchema.", "// Merges into the engine's ToolCallInput (types/ McpToolInputs) so", '// `e.tool === "mcp__<server>__<tool>"` narrows to the tool\'s arguments.', "// Written again at a save of the mod with a server connected.", "export {}", ...Hlo("McpToolInputs", o), ""].join(`
`);
var PEi = { target: "es2023", lib: ["es2023"], module: "esnext", moduleResolution: "bundler", strict: true, noUncheckedIndexedAccess: true, noEmit: true, skipLibCheck: true, jsx: "react", jsxFactory: "h", jsxFragmentFactory: "Fragment" };
function OEi(o) {
  let e = (0, import_path3.join)(o.path, "hooks"), r = o.modulePath === void 0 ? void 0 : (0, import_path3.resolve)(o.modulePath), t = r !== void 0 && !yWe(e, r);
  return [e, (0, import_path3.join)(o.path, "types"), (0, import_path3.join)(o.path, "tests"), ...t ? [r] : []].map((n) => (0, import_path3.relative)((0, import_path3.join)(o.path, nst), n).split(import_path3.sep).join("/"));
}
var SKl = `${(0, import_chunk_w578pjby._)({ extends: [".", ...nst.split(import_path4.sep), Ilo.tsconfig].join("/") }, null, 2)}
`;
var bKl = (o, e) => `${(0, import_chunk_w578pjby._)({ compilerOptions: { ...PEi, typeRoots: ["."], types: o }, include: e }, null, 2)}
`;
