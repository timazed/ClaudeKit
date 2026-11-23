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
var chunk_28md5f4m_exports = {};
__export(chunk_28md5f4m_exports, {
  I7s: () => I7s,
  Yht: () => Yht,
  n4r: () => n4r
});
module.exports = __toCommonJS(chunk_28md5f4m_exports);
var import_chunk_72w4k1fr = require("/$bunfs/root/chunk-72w4k1fr.js");
function Yht(a) {
  if (!a) return { type: "menu" };
  let t = a.trim().split(/\s+/);
  switch (t[0]?.toLowerCase()) {
    case "help":
    case "--help":
    case "-h":
      return { type: "help" };
    case "list":
    case "ls": {
      let r = t.slice(1).find((e) => e === "--enabled" || e === "--disabled");
      if (r) return { type: "list", filter: r === "--enabled" ? "enabled" : "disabled" };
      return { type: "list" };
    }
    case "install":
    case "i": {
      let r = p(t.slice(1));
      if (r) return r;
      let e = t[1];
      if (!e) return { type: "install" };
      let n = e.lastIndexOf("@");
      if (n > 0) {
        let c = e.slice(0, n), i = e.slice(n + 1);
        return { type: "install", plugin: c, marketplace: i };
      }
      if (!e.startsWith("@") && (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("file://") || e.includes("/") || e.includes("\\"))) return { type: "install", marketplace: e };
      return { type: "install", plugin: e };
    }
    case "manage":
      return { type: "manage" };
    case "stats": {
      if ((0, import_chunk_72w4k1fr.W6)()) return { type: "stats" };
      return { type: "menu" };
    }
    case "directory":
    case "search": {
      if ((0, import_chunk_72w4k1fr.Cx)()) return { type: "directory", query: t.slice(1).join(" ").trim() || void 0 };
      return { type: "menu" };
    }
    case "uninstall":
      return { type: "uninstall", plugin: t[1] };
    case "enable":
      return { type: "enable", plugin: t[1] };
    case "disable":
      return { type: "disable", plugin: t[1] };
    case "configure":
    case "config":
      return { type: "configure", plugin: t[1] };
    case "validate":
      return { type: "validate", path: t.slice(1).join(" ").trim() || void 0 };
    case "tag": {
      let r = /* @__PURE__ */ new Set(["--push", "--dry-run", "--force", "-f"]), e = t.slice(1), n = e.filter((i) => i.startsWith("-")), l = e.filter((i) => !i.startsWith("-")), c = n.find((i) => !r.has(i)) ?? l[1];
      return { type: "tag", path: l[0], push: n.includes("--push"), dryRun: n.includes("--dry-run"), force: n.includes("--force") || n.includes("-f"), ...c !== void 0 && { unknownFlag: c } };
    }
    case "marketplace":
    case "market": {
      let r = t[1]?.toLowerCase(), e = t.slice(2).join(" ");
      switch (r) {
        case "add":
          return { type: "marketplace", action: "add", target: e };
        case "remove":
        case "rm":
          return { type: "marketplace", action: "remove", target: e };
        case "update":
          return { type: "marketplace", action: "update", target: e };
        case "list":
          return { type: "marketplace", action: "list" };
        default:
          return { type: "marketplace" };
      }
    }
    default:
      return { type: "menu" };
  }
}
var u = "/plugin install <plugin> --marketplace <source>";
function p(a) {
  let t = a.findIndex((n) => n === "--marketplace" || n.startsWith("--marketplace="));
  if (t === -1) return;
  let s = a[t], r = s !== "--marketplace", e = I7s({ plugins: a.filter((n, l) => l !== t && (r || l !== t + 1)), marketplaceSource: r ? s.slice(14) : a[t + 1], commandLine: u });
  return "usageError" in e ? { type: "usage-error", message: e.usageError } : { type: "install-from-source", ...e };
}
function I7s({ plugins: a, marketplaceSource: t, commandLine: s }) {
  if (!t || t.startsWith("-")) return { usageError: `--marketplace needs a marketplace source (owner/repo or a URL). Usage: ${s}` };
  let r = a[0];
  if (a.length !== 1 || !r || r.startsWith("-")) return { usageError: `--marketplace needs exactly one plugin name. Usage: ${s}` };
  if (r.lastIndexOf("@") > 0) return { usageError: `Name the marketplace once: <plugin>@<marketplace>, or ${s}` };
  return { plugin: r, marketplaceSource: t };
}
function n4r({ plugin: a, marketplaceSource: t }) {
  return `/plugin install ${a} --marketplace ${t}`;
}
