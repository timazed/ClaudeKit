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
var chunk_x0nfhv1g_exports = {};
__export(chunk_x0nfhv1g_exports, {
  $3o: () => $3o,
  B3o: () => B3o,
  C9r: () => C9r,
  Ctt: () => Ctt,
  E9r: () => E9r,
  F3o: () => F3o,
  JCn: () => JCn,
  KJ: () => KJ,
  QCn: () => QCn,
  T9r: () => T9r,
  Tgt: () => Tgt,
  U3o: () => U3o,
  W3o: () => W3o,
  XCn: () => XCn,
  _ei: () => _ei,
  bXt: () => bXt,
  cei: () => cei,
  fei: () => fei,
  gei: () => gei,
  grr: () => grr,
  hE: () => hE,
  hei: () => hei,
  mei: () => mei,
  pNa: () => pNa,
  pei: () => pei,
  uei: () => uei,
  v9r: () => v9r
});
module.exports = __toCommonJS(chunk_x0nfhv1g_exports);
var import_chunk_kf08yh2z = require("/$bunfs/root/chunk-kf08yh2z.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_2fxy1zey = require("/$bunfs/root/chunk-2fxy1zey.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_fs = require("fs");
var import_path = require("path");
var cei = ["-verbose", "-debug"], A = ["-erroraction", "-warningaction", "-informationaction", "-progressaction"], w = ["-ea", "-wa", "-infa", "-proga"], E = ["-errorvariable", "-warningvariable", "-informationvariable", "-outvariable", "-pipelinevariable"], F = ["-ev", "-wv", "-iv", "-ov", "-pv"], uei = [...A, ...E, "-outbuffer", ...w], v = /* @__PURE__ */ new Set([...cei, ...uei]);
function y(e) {
  if (e.length < 2) return false;
  return w.includes(e) || A.some((t) => t.startsWith(e));
}
var L = /* @__PURE__ */ new Set(["silentlycontinue", "0", "stop", "1", "continue", "2", "ignore", "4"]);
function R(e) {
  if (e.length < 2) return false;
  return F.includes(e) || E.some((t) => t.startsWith(e));
}
var O = /* @__PURE__ */ new Set(["global", "script", "local", "private", "variable"]), T = /* @__PURE__ */ new Set(["psdefaultparametervalues", "confirmpreference", "debugpreference", "erroractionpreference", "errorview", "formatenumerationlimit", "informationpreference", "maximumhistorycount", "ofs", "outputencoding", "progresspreference", "psemailserver", "psmoduleautoloadingpreference", "psnativecommandargumentpassing", "psnativecommanduseerroractionpreference", "pssessionapplicationname", "pssessionconfigurationname", "pssessionoption", "psstyle", "transcript", "verbosepreference", "warningpreference", "whatifpreference", "logcommandhealthevent", "logcommandlifecycleevent", "logenginehealthevent", "logenginelifecycleevent", "logproviderhealthevent", "logproviderlifecycleevent", "maximumaliascount", "maximumdrivecount", "maximumerrorcount", "maximumfunctioncount", "maximumvariablecount"]), D = [...A, ...E, "-outbuffer", "-verbose", "-debug"], q = D.filter((e) => e !== "-progressaction");
function Y(e, t) {
  let n = null;
  for (let r of t) if (r.startsWith(e)) {
    if (n !== null) return null;
    n = r;
  }
  return n;
}
function Z(e, t) {
  if (e.length < 2) return false;
  for (let n of [D, q]) {
    let r = Y(e, n);
    if (r !== null && t.includes(r)) return true;
  }
  return false;
}
var J = /* @__PURE__ */ new Set([...F, "-ea", "-wa", "-p"]), ee = false;
function te(e, t, n, r) {
  if (!r && J.has(e)) return false;
  return t.includes(e) || Z(e, n);
}
function N(e, t, n) {
  return te(e, t, n, ee);
}
function k(e) {
  return N(e, F, E);
}
function W(e) {
  return N(e, w, A);
}
var F3o = /* @__PURE__ */ new Set(["add", "clear", "close", "copy", "enter", "exit", "find", "format", "get", "hide", "join", "lock", "move", "new", "open", "optimize", "pop", "push", "redo", "remove", "rename", "reset", "resize", "resume", "search", "select", "set", "show", "skip", "split", "step", "switch", "undo", "unlock", "watch", "connect", "disconnect", "read", "receive", "send", "write", "backup", "checkpoint", "compare", "compress", "convert", "convertfrom", "convertto", "dismount", "edit", "expand", "export", "group", "import", "initialize", "limit", "merge", "mount", "out", "publish", "restore", "save", "sync", "unpublish", "update", "debug", "measure", "ping", "repair", "resolve", "test", "trace", "approve", "assert", "build", "complete", "confirm", "deny", "deploy", "disable", "enable", "install", "invoke", "register", "request", "restart", "start", "stop", "submit", "suspend", "uninstall", "unregister", "wait", "block", "grant", "protect", "revoke", "unblock", "unprotect", "use", "sort", "tee", "where", "foreach"]), ne = ["-variable", "-sessionvariable", "-responseheadersvariable", "-statuscodevariable"];
function M(e) {
  if (e.length < 3) return false;
  return ne.some((t) => t.startsWith(e));
}
var ae = /* @__PURE__ */ new Set(["--list-runtimes", "--list-sdks"]);
function KJ(e, t) {
  let n = (t?.elementTypes ?? []).slice(1), r = t?.args ?? [], a = t?.children;
  for (let i = 0; i < n.length; i++) {
    if (n[i] !== "StringConstant" && n[i] !== "Parameter") {
      if (!/[$(@{[]/.test(r[i] ?? "")) continue;
      return true;
    }
    if (n[i] === "Parameter") {
      let l = a?.[i];
      if (l) {
        if (l.some((f) => f.type !== "StringConstant")) return true;
      } else {
        let f = r[i] ?? "", o = f.indexOf(":");
        if (o > 0 && /[$(@{[]/.test(f.slice(o + 1))) return true;
      }
    }
  }
  return false;
}
var $3o = Object.assign(/* @__PURE__ */ Object.create(null), { "get-childitem": { safeFlags: ["-Path", "-LiteralPath", "-Filter", "-Include", "-Exclude", "-Recurse", "-Depth", "-Name", "-Force", "-Attributes", "-Directory", "-File", "-Hidden", "-ReadOnly", "-System"] }, "get-content": { safeFlags: ["-Path", "-LiteralPath", "-TotalCount", "-Head", "-Tail", "-Raw", "-Encoding", "-Delimiter", "-ReadCount"] }, "get-item": { safeFlags: ["-Path", "-LiteralPath", "-Force", "-Stream"] }, "get-itemproperty": { safeFlags: ["-Path", "-LiteralPath", "-Name"] }, "test-path": { safeFlags: ["-Path", "-LiteralPath", "-PathType", "-Filter", "-Include", "-Exclude", "-IsValid", "-NewerThan", "-OlderThan"] }, "resolve-path": { safeFlags: ["-Path", "-LiteralPath", "-Relative"] }, "get-filehash": { safeFlags: ["-Path", "-LiteralPath", "-Algorithm", "-InputStream"] }, "get-acl": { safeFlags: ["-Path", "-LiteralPath", "-Audit", "-Filter", "-Include", "-Exclude"] }, "set-location": { safeFlags: ["-Path", "-LiteralPath", "-PassThru", "-StackName"] }, "push-location": { safeFlags: ["-Path", "-LiteralPath", "-PassThru", "-StackName"] }, "pop-location": { safeFlags: ["-PassThru", "-StackName"] }, "select-string": { safeFlags: ["-Path", "-LiteralPath", "-Pattern", "-InputObject", "-SimpleMatch", "-CaseSensitive", "-Quiet", "-List", "-NotMatch", "-AllMatches", "-Encoding", "-Context", "-Raw", "-NoEmphasis"] }, "convertto-json": { safeFlags: ["-InputObject", "-Depth", "-Compress", "-EnumsAsStrings", "-AsArray"] }, "convertfrom-json": { safeFlags: ["-InputObject", "-Depth", "-AsHashtable", "-NoEnumerate"] }, "convertto-csv": { safeFlags: ["-InputObject", "-Delimiter", "-NoTypeInformation", "-NoHeader", "-UseQuotes"] }, "convertfrom-csv": { safeFlags: ["-InputObject", "-Delimiter", "-Header", "-UseCulture"] }, "convertto-xml": { safeFlags: ["-InputObject", "-Depth", "-As", "-NoTypeInformation"] }, "convertto-html": { safeFlags: ["-InputObject", "-Property", "-Head", "-Title", "-Body", "-Pre", "-Post", "-As", "-Fragment"] }, "format-hex": { safeFlags: ["-Path", "-LiteralPath", "-InputObject", "-Encoding", "-Count", "-Offset"] }, "get-member": { safeFlags: ["-InputObject", "-MemberType", "-Name", "-Static", "-View", "-Force"] }, "get-unique": { safeFlags: ["-InputObject", "-AsString", "-CaseInsensitive", "-OnType"] }, "compare-object": { safeFlags: ["-ReferenceObject", "-DifferenceObject", "-Property", "-SyncWindow", "-CaseSensitive", "-Culture", "-ExcludeDifferent", "-IncludeEqual", "-PassThru"] }, "join-string": { safeFlags: ["-InputObject", "-Property", "-Separator", "-SingleQuote", "-DoubleQuote", "-FormatString"] }, "get-random": { safeFlags: ["-InputObject", "-Minimum", "-Maximum", "-Count", "-SetSeed", "-Shuffle"] }, "convert-path": { safeFlags: ["-Path", "-LiteralPath"] }, "join-path": { safeFlags: ["-Path", "-ChildPath", "-AdditionalChildPath"] }, "split-path": { safeFlags: ["-Path", "-LiteralPath", "-Qualifier", "-NoQualifier", "-Parent", "-Leaf", "-LeafBase", "-Extension", "-IsAbsolute"] }, "get-itempropertyvalue": { safeFlags: ["-Path", "-LiteralPath", "-Name"] }, "get-psprovider": { safeFlags: ["-PSProvider"] }, "get-computerinfo": { allowAllFlags: true }, "get-host": { allowAllFlags: true }, "get-date": { safeFlags: ["-Date", "-Format", "-UFormat", "-DisplayHint", "-AsUTC"] }, "get-location": { safeFlags: ["-PSProvider", "-PSDrive", "-Stack", "-StackName"] }, "get-psdrive": { safeFlags: ["-Name", "-PSProvider", "-Scope"] }, "get-module": { safeFlags: ["-Name", "-ListAvailable", "-All", "-FullyQualifiedName", "-PSEdition"], additionalCommandIsDangerousCallback: (e, t) => T9r() || t?.name.toLowerCase() !== "get-module" }, "get-alias": { safeFlags: ["-Name", "-Definition", "-Scope", "-Exclude"] }, "get-history": { safeFlags: ["-Id", "-Count"] }, "get-culture": { allowAllFlags: true }, "get-uiculture": { allowAllFlags: true }, "get-timezone": { safeFlags: ["-Name", "-Id", "-ListAvailable"] }, "get-uptime": { allowAllFlags: true }, "write-output": { safeFlags: ["-InputObject", "-NoEnumerate"], additionalCommandIsDangerousCallback: KJ }, "write-host": { safeFlags: ["-Object", "-NoNewline", "-Separator", "-ForegroundColor", "-BackgroundColor"], additionalCommandIsDangerousCallback: KJ }, "start-sleep": { safeFlags: ["-Seconds", "-Milliseconds", "-Duration"], additionalCommandIsDangerousCallback: KJ }, "format-table": { allowAllFlags: true, additionalCommandIsDangerousCallback: KJ }, "format-list": { allowAllFlags: true, additionalCommandIsDangerousCallback: KJ }, "format-wide": { allowAllFlags: true, additionalCommandIsDangerousCallback: KJ }, "format-custom": { allowAllFlags: true, additionalCommandIsDangerousCallback: KJ }, "measure-object": { allowAllFlags: true, additionalCommandIsDangerousCallback: KJ }, "select-object": { allowAllFlags: true, additionalCommandIsDangerousCallback: KJ }, "sort-object": { allowAllFlags: true, additionalCommandIsDangerousCallback: KJ }, "group-object": { allowAllFlags: true, additionalCommandIsDangerousCallback: KJ }, "where-object": { allowAllFlags: true, additionalCommandIsDangerousCallback: KJ }, "out-string": { allowAllFlags: true, additionalCommandIsDangerousCallback: KJ }, "out-host": { allowAllFlags: true, additionalCommandIsDangerousCallback: KJ }, "get-netadapter": { safeFlags: ["-Name", "-InterfaceDescription", "-InterfaceIndex", "-Physical"] }, "get-netipaddress": { safeFlags: ["-InterfaceIndex", "-InterfaceAlias", "-AddressFamily", "-Type"] }, "get-netroute": { safeFlags: ["-InterfaceIndex", "-InterfaceAlias", "-AddressFamily", "-DestinationPrefix"] }, "get-dnsclient": { safeFlags: ["-InterfaceIndex", "-InterfaceAlias"] }, "get-winevent": { safeFlags: ["-LogName", "-ListLog", "-ListProvider", "-ProviderName", "-Path", "-MaxEvents", "-FilterXPath", "-Force", "-Oldest"] }, git: {}, gh: {}, docker: {}, ipconfig: { safeFlags: ["/all", "/allcompartments"], additionalCommandIsDangerousCallback: (e, t) => (t?.args ?? []).some((n) => !n.startsWith("/") && !n.startsWith("-")) }, netstat: { safeFlags: ["-a", "-b", "-e", "-f", "-n", "-o", "-p", "-q", "-r", "-s", "-t", "-x", "-y"] }, systeminfo: { safeFlags: ["/FO", "/NH"] }, tasklist: { safeFlags: ["/M", "/SVC", "/V", "/FI", "/FO", "/NH"] }, "where.exe": { allowAllFlags: true }, hostname: { safeFlags: ["-a", "-d", "-f", "-i", "-I", "-s", "-y", "-A"], additionalCommandIsDangerousCallback: (e, t) => (t?.args ?? []).some((n) => !n.startsWith("-")) }, whoami: { safeFlags: ["/user", "/groups", "/claims", "/priv", "/logonid", "/all", "/fo", "/nh"] }, ver: { allowAllFlags: true }, arp: { safeFlags: ["-a", "-g", "-v", "-n"], additionalCommandIsDangerousCallback: (e, t) => (t?.args ?? []).some((n) => !n.startsWith("-")) }, route: { safeFlags: ["print", "PRINT", "-4", "-6"], additionalCommandIsDangerousCallback: (e, t) => {
  if (!t) return true;
  return t.args.find((r) => !r.startsWith("-"))?.toLowerCase() !== "print";
} }, getmac: { safeFlags: ["/FO", "/NH", "/V"] }, tree: { safeFlags: ["/F", "/A", "/Q", "/L"] }, findstr: { safeFlags: ["/B", "/E", "/L", "/R", "/S", "/I", "/X", "/V", "/N", "/M", "/O", "/P", "/C", "/G", "/D", "/A"] }, dotnet: {} }), oe = /* @__PURE__ */ new Set(["out-null"]), ie = /* @__PURE__ */ new Set(["format-table", "format-list", "format-wide", "format-custom", "measure-object", "select-object", "sort-object", "group-object", "where-object", "out-string", "out-host"]), le = /* @__PURE__ */ new Set(["where.exe"]), U = /* @__PURE__ */ new Set(["git", "gh", "docker", "dotnet"]);
function fei(e) {
  let t = hE(e.name), [n = "", r] = t.split("-");
  return e.nameType === "application" || !U.has(t) && (r === void 0 || !F3o.has(n));
}
function E9r(e) {
  return e === "" || e === "--%";
}
var ce = ["", ".exe", ".bat", ".cmd", ".com", ".ps1", ".vbs", ".js", ".wsf", ".vbe", ".jse", ".wsh", ".msc", ".cpl"];
class z {
  listByPathext = /* @__PURE__ */ new Map();
  regexByPathext = /* @__PURE__ */ new Map();
  list() {
    let e = import_chunk_c203g5kd.s.PATHEXT ?? "", t = this.listByPathext.get(e);
    if (t === void 0) {
      let n = new Set(ce);
      for (let r of e.split(";").slice(0, 64)) {
        let a = r.trim().toLowerCase();
        if (a.startsWith(".") && a.length <= 16) n.add(a);
      }
      t = [...n], this.listByPathext.set(e, t);
    }
    return t;
  }
  regex() {
    let e = import_chunk_c203g5kd.s.PATHEXT ?? "", t = this.regexByPathext.get(e);
    if (t === void 0) {
      let n = this.list().filter((r) => r !== "").map((r) => (0, import_chunk_7cfjrnwy.fo)(r.slice(1)));
      t = new RegExp(`\\.(${n.join("|")})$`, "i"), this.regexByPathext.set(e, t);
    }
    return t;
  }
}
var Q = new z();
function ue() {
  return Q.list();
}
function fe() {
  return Q.regex();
}
function U3o(e) {
  let t = new Set(B3o(e).map((n) => n.stem));
  return t.delete(""), Array.from(t);
}
function B3o(e) {
  let t = fe(), n = /* @__PURE__ */ new Set(), r = [];
  for (let a of [(i) => i, import_chunk_bzyb60p0.TW, import_chunk_bzyb60p0.Kue, import_chunk_bzyb60p0.xTe]) {
    let i = ge(e, a);
    if (n.has(i)) continue;
    n.add(i), r.push({ base: i, stem: i.replace(t, "") });
  }
  return r;
}
function ge(e, t) {
  let r = t(e).replace(/^[A-Za-z]:(?![\\/])/, ""), a = [];
  for (let i of r.split(/[\\/]+/)) {
    let l = (0, import_chunk_2fxy1zey.x9)(i.replace(/:.*$/, ""));
    if (l === "." || l === "") continue;
    if (l === "..") {
      if (a.length > 0 && a.at(-1) !== "..") a.pop();
      else a.push("..");
      continue;
    }
    a.push(l);
  }
  return (a.at(-1) ?? "").toLowerCase();
}
function de(e) {
  if ((0, import_chunk_cg8dqz0a.x)() !== "windows") return null;
  let t = (0, import_chunk_18rsj2ts.pe)(), n = /* @__PURE__ */ new Set();
  for (let { base: r, stem: a } of B3o(e)) for (let i of r === a ? [a] : [a, r]) {
    if (i === "" || n.has(i)) continue;
    n.add(i);
    for (let l of ue()) {
      let f = (0, import_path.join)(t, i + l);
      try {
        if ((0, import_fs.statSync)(f).isFile()) return i + l;
      } catch {
      }
    }
  }
  return null;
}
var me = /\.(exe|cmd|bat|com)$/;
function hE(e, t = (n) => n.toLowerCase()) {
  let n = t(e);
  if (!n.includes("\\") && !n.includes("/")) n = n.replace(me, "");
  let r = import_chunk_bzyb60p0.fye[n];
  if (r) return r.toLowerCase();
  return n;
}
function v9r(e) {
  let t = e.toLowerCase();
  if (t === "cd.." || t === "cd\\" || t === "cd/" || t === "cd~" || /^[a-z]:$/.test(t)) return true;
  let n = hE(e);
  return n === "set-location" || n === "push-location" || n === "pop-location" || n === "new-psdrive" || (0, import_chunk_cg8dqz0a.x)() === "windows" && (n === "ndr" || n === "mount");
}
function XCn(e) {
  let t = hE(e);
  return oe.has(t);
}
function pei(e, t) {
  let n = hE(e.name);
  if (!ie.has(n)) return false;
  return Tgt(e, t);
}
function mei(e) {
  if (e.statementType !== "PipelineAst") return false;
  if (e.commands.length === 0) return false;
  for (let t of e.commands) if (t.elementType !== "CommandAst") return false;
  return true;
}
function he(e) {
  let t = Ctt(), n = t(e), r = $3o[n] ? n : hE(n, t);
  if (r === "convertfrom-csv" && (0, import_chunk_sghy0qej.Pe)(Se, { safe: true })) return;
  return $3o[r];
}
function pNa(e) {
  let t = e.trim();
  if (!t) return false;
  if (/\$\(/.test(t)) return true;
  if (/(?:^|[^\w.])@\w+/.test(t)) return true;
  if (/\.\w+\s*\(/.test(t)) return true;
  if (/\$\w+\s*[+\-*/]?=/.test(t)) return true;
  if (/--%/.test(t)) return true;
  if (/\\\\/.test(t) || /(?<!:)\/\//.test(t)) return true;
  if (/::/.test(t)) return true;
  return false;
}
function bXt(e, t, n) {
  if (!e.trim()) return false;
  if (!t) return false;
  if (!t.valid) return false;
  let a = (0, import_chunk_bzyb60p0.PTe)(t);
  if (a.hasScriptBlocks || a.hasSubExpressions || a.hasExpandableStrings || a.hasSplatting || a.hasMemberInvocations || a.hasAssignments || a.hasStopParsing) return false;
  let i = (0, import_chunk_bzyb60p0.xJr)(t);
  if (i.length === 0) return false;
  if (i.reduce((f, o) => f + o.commands.length, 0) > 1) {
    if (i.some((o) => o.commands.some((u) => v9r(u.name)))) return false;
  }
  for (let f of i) {
    if (!f || f.commands.length === 0) return false;
    if (f.redirections.length > 0) {
      if (f.redirections.some((c) => !c.isMerging && !(0, import_chunk_bzyb60p0.yxn)(c.target))) return false;
    }
    let o = f.commands[0];
    if (!o) return false;
    if (!Tgt(o, e, n)) return false;
    for (let u = 1; u < f.commands.length; u++) {
      let c = f.commands[u];
      if (!c || c.nameType === "application") return false;
      if (XCn(c.name) && c.args.length === 0) continue;
      if (!Tgt(c, e, n)) return false;
    }
    if (f.nestedCommands && f.nestedCommands.length > 0) return false;
  }
  return true;
}
var b = (e, t = false) => t && e.length > 1 && e[1] === "-" ? e : e.replace(/(?!^)[-']/g, "");
function JCn(e, t, n = "full") {
  let r = n === "full" ? y : W;
  for (let a = 0; a < e.length; a++) {
    let i = e[a];
    if (!import_chunk_bzyb60p0.que.has(i[0])) continue;
    if (t !== void 0 && t[a + 1] !== void 0 && t[a + 1] !== "Parameter") continue;
    let l = i[0] === "-" ? i : "-" + i.slice(1), f = l.indexOf(":"), o = (f > 0 ? l.slice(0, f) : l).toLowerCase(), u = null;
    if (!r(o) && !r(b(o, n === "exact"))) {
      let m = (0, import_chunk_bzyb60p0.cR)(o.replace(/`[\r\n]+\s*/g, "")).toLowerCase(), p = m.indexOf(":", 1), h = p > 0 ? m.slice(0, p) : m;
      if (!r(h) && !r(b(h, n === "exact")) && !/[^\x20-\x7e]/.test(m)) continue;
      if (p > 0) {
        let S = m.slice(p + 1);
        u = S.trim() !== "" ? S : e[a + 1] ?? "";
      }
    }
    let c = f > 0 ? l.slice(f + 1) : null, d = (u ?? (c !== null && c.trim() !== "" ? c : e[a + 1] ?? "")).toLowerCase().replace(/^['"]|['"]$/g, "").trim();
    if (d.length > 0 && !L.has(d)) return true;
  }
  return false;
}
function QCn(e, t, n = "full") {
  let r = n === "full" ? R : k, a = (i) => r(i) || n === "full" && (i.endsWith("variable") || M(i));
  for (let i = 0; i < e.length; i++) {
    let l = e[i];
    if (!import_chunk_bzyb60p0.que.has(l[0])) continue;
    if (t !== void 0 && t[i + 1] !== void 0 && t[i + 1] !== "Parameter") continue;
    let f = l[0] === "-" ? l : "-" + l.slice(1), o = P(f), u = (o !== null ? f.slice(0, o.colonIdx) : f).toLowerCase();
    if (!a(u) && !a(b(u, n === "exact"))) {
      let h = (0, import_chunk_bzyb60p0.cR)(u.replace(/`[\r\n]+\s*/g, "")).toLowerCase();
      if (h !== u && (a(h) || a(b(h, n === "exact")))) return true;
      let S = h.indexOf(":", 1);
      if (S > 0 && a(b(h.slice(0, S), n === "exact"))) return true;
      if (/[^\x20-\x7e]/.test(h)) return true;
      continue;
    }
    let c;
    if (o !== null) {
      if (o.isHereString) return true;
      if (o.post.includes("$") || o.post.includes("`")) return true;
      c = o.postResolved !== "" ? o.postResolved : e[i + 1] ?? "";
    } else c = e[i + 1] ?? "";
    if (c.includes("$") || c.includes("`")) return true;
    let g = (0, import_chunk_bzyb60p0.TW)((0, import_chunk_bzyb60p0.Tie)(c)).toLowerCase().trim();
    if (g.length === 0) continue;
    let d = g.startsWith("+") ? g.slice(1) : g, m = d.lastIndexOf(":"), p = d;
    if (m >= 0) {
      let h = d.slice(0, m);
      if (!O.has(h) && !/^[0-9]+$/.test(h)) return true;
      p = d.slice(m + 1);
    }
    if (!/^[a-z0-9_]+$/.test(p)) return true;
    if (T.has(p)) return true;
  }
  return false;
}
function C(e) {
  return e.includes('"') || /[\s\u0085\u180e]/.test(e) && (e.match(/\\+$/)?.[0].length ?? 0) % 2 === 1;
}
function P(e) {
  if (e.length === 0 || !(import_chunk_bzyb60p0.que.has(e[0]) || e[0] === "/")) return null;
  let t = e.indexOf(":", 1);
  if (t <= 0) return null;
  let n = (0, import_chunk_bzyb60p0.Tie)(e.slice(t + 1)), r = (0, import_chunk_bzyb60p0.Tie)(n.replace(/`[\r\n]+\s*/g, "")), a = /^@['"\u2018-\u201F]/.test(n) || /^@['"\u2018-\u201F]/.test(r);
  return { colonIdx: t, post: n, postResolved: r, isHereString: a };
}
function hei(e) {
  let t = P(e);
  return t !== null && (t.isHereString || (0, import_chunk_bzyb60p0.Cie)((0, import_chunk_bzyb60p0.cR)((0, import_chunk_bzyb60p0.TW)(t.postResolved))) === "--%");
}
function _(e, t = true) {
  let n = e.replace(/`[\r\n]+\s*/g, "");
  if (C(e) || C((0, import_chunk_bzyb60p0.AJr)(n))) return true;
  if (t) {
    let r = P(e);
    if (r !== null) {
      let { post: a, postResolved: i } = r;
      if (r.isHereString) return true;
      let l = (0, import_chunk_bzyb60p0.TW)(i), f = (0, import_chunk_bzyb60p0.TW)(a), o = (0, import_chunk_bzyb60p0.Kue)(i), u = (0, import_chunk_bzyb60p0.Kue)(a), c = (0, import_chunk_bzyb60p0.xTe)(i), g = (0, import_chunk_bzyb60p0.xTe)(a);
      if (C(l) || C(f) || C((0, import_chunk_bzyb60p0.AJr)(l)) || C(o) || C(u) || C((0, import_chunk_bzyb60p0.AJr)(o)) || C(c) || C(g) || C((0, import_chunk_bzyb60p0.AJr)(c))) return true;
    }
  }
  return false;
}
var Ce = "tengu_hazy_peach";
function gei() {
  return (0, import_chunk_sghy0qej.Pe)(Ce, { safe: true });
}
var Se = "bot_protected_tengu_enumerated_brooks", be = "tengu_steady_treehouse";
function Ctt(e = W3o()) {
  return e ? import_chunk_kf08yh2z.Hln : (t) => t.toLowerCase();
}
function W3o() {
  return (0, import_chunk_sghy0qej.Pe)(be, { safe: true });
}
function _ei() {
  return W3o() ? (e) => e.toLowerCase().toUpperCase().toLowerCase() : (e) => e.toLowerCase();
}
var Ae = "bot_protected_tengu_sienna_grebe";
function T9r() {
  return (0, import_chunk_sghy0qej.Pe)(Ae, { safe: true });
}
function Tgt(e, t, n) {
  if (e.nameType === "application") {
    let o = gei() ? import_chunk_bzyb60p0.kir : /\s/, c = Ctt()(e.text.split(o, 1)[0] ?? "");
    if (!le.has(c)) return false;
  }
  let r = he(e.name);
  if (!r) return false;
  if (r.regex && !r.regex.test(t)) return false;
  if (r.additionalCommandIsDangerousCallback?.(t, e)) return false;
  if (!e.elementTypes) return false;
  for (let o = 1; o < e.elementTypes.length; o++) {
    let u = e.elementTypes[o];
    if (u !== "StringConstant" && u !== "Parameter") {
      if (!/[$(@{[]/.test(e.args[o - 1] ?? "")) continue;
      return false;
    }
    if (u === "Parameter") {
      let c = e.children?.[o - 1];
      if (c) {
        if (c.some((g) => g.type !== "StringConstant")) return false;
      } else {
        let g = e.args[o - 1] ?? "", d = g.indexOf(":");
        if (d > 0 && /[$(@{[]/.test(g.slice(d + 1))) return false;
      }
    }
  }
  let a = hE(e.name), i = U.has(a), l = a.includes("-");
  if (!n?.ignoreConvertibleArguments && e.typedArgs !== void 0 && C9r(e) && (e.typedArgs.some(grr) || !Tgt({ ...e, args: e.typedArgs, typedArgs: void 0 }, t, n))) return false;
  let f = e.nameType !== "cmdlet";
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") {
    if (!n?.ignoreConvertibleArguments && fei(e) && (e.dashFolded || e.args.some((o) => /[\u0080-\uffff]/.test(o)))) return false;
    if (f || i) {
      for (let o of e.args) if (_(o, !l || e.nameType === "application")) return false;
    }
    if (de(e.name) !== null) return false;
  }
  if (!l || e.nameType === "application") for (let o = 1; o < e.elementTypes.length; o++) {
    let u = e.elementTypes[o];
    if (u !== "StringConstant" && u !== "Parameter") return false;
    if (E9r(e.args[o - 1])) return false;
    if (u === "Parameter" && !i && (e.args[o - 1] ?? "").includes(":")) return false;
  }
  if (i) {
    let o = null;
    for (let u = 1; u < e.elementTypes.length; u++) {
      let c = e.args[u - 1] ?? "";
      if (e.elementTypes[u] === "Parameter") {
        let g = P(c);
        if (g !== null) {
          if (g.isHereString) return false;
          o ??= e.args.slice(0, u - 1);
          let d = (0, import_chunk_bzyb60p0.cR)((0, import_chunk_bzyb60p0.TW)(g.postResolved));
          if (E9r(d)) return false;
          o.push(c.slice(0, g.colonIdx), d);
          continue;
        }
      }
      o?.push(c);
    }
    if (o !== null && !V(a, o)) return false;
    return V(a, e.args);
  }
  if (l && JCn(e.args, e.elementTypes)) return false;
  if (l && QCn(e.args, e.elementTypes)) return false;
  if (r.allowAllFlags) return true;
  if (!r.safeFlags || r.safeFlags.length === 0) return !e.args.some((u, c) => {
    if (l) return (0, import_chunk_bzyb60p0.Ent)(u, e.elementTypes?.[c + 1]);
    return u.startsWith("-") || false;
  });
  for (let o = 0; o < e.args.length; o++) {
    let u = e.args[o];
    if (l ? (0, import_chunk_bzyb60p0.Ent)(u, e.elementTypes?.[o + 1]) : u.startsWith("-") || false) {
      let g = l ? "-" + u.slice(1) : u;
      if (l || u.startsWith("/")) {
        let p = g.indexOf(":");
        if (p > 0) g = g.substring(0, p);
      }
      let d = g.toLowerCase();
      if (l && v.has(d)) continue;
      if (!(l ? r.safeFlags.some((p) => p.toLowerCase() === d) : r.safeFlags.includes(g))) return false;
    }
  }
  return true;
}
function V(e, t) {
  if (t.some(grr)) return false;
  switch (e) {
    case "git":
      return we(t);
    case "gh":
      return Fe(t);
    case "docker":
      return Ie(t);
    case "dotnet":
      return ve(t);
    default:
      return false;
  }
}
var Ee = /* @__PURE__ */ new Set(["-c", "-C", "--exec-path", "--config-env", "--git-dir", "--work-tree", "--bare", "--attr-source", "--help", "-h", "--shallow-file"]), K = /* @__PURE__ */ new Set(["-c", "-C", "--exec-path", "--config-env", "--git-dir", "--work-tree", "--namespace", "--super-prefix", "--shallow-file"]), xe = ["-c", "-C"];
function j(e) {
  return !e.includes("=") && K.has(e);
}
function X(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n] ?? "", a = t[n] ?? "";
    if (a.includes("\0") || (0, import_chunk_bzyb60p0.u2a)(r).includes("\0")) return false;
    if ((0, import_chunk_p1ewvgeh.bjt)(a) !== (0, import_chunk_p1ewvgeh.bjt)(r) || a === "--" !== (r === "--")) return false;
    if ((0, import_chunk_p1ewvgeh.bjt)(r) && r !== a && j(r) !== j(a)) return false;
  }
  return true;
}
function I(e) {
  return e.map((t) => (0, import_chunk_bzyb60p0.Cie)((0, import_chunk_bzyb60p0.cR)(t.replace(/`[\r\n]+\s*/g, ""))));
}
function we(e) {
  let t = I(e);
  if (!X(e, t)) return false;
  return B(e) && B(t);
}
function B(e) {
  if (e.length === 0) return true;
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") {
    for (let c of e) if (_(c)) return false;
  }
  for (let c of e) if (c.includes("$")) return false;
  let t = 0;
  while (t < e.length) {
    let c = e[t];
    if (!c || !c.startsWith("-")) break;
    for (let m of xe) if (c.length > m.length && c.startsWith(m) && (m === "-C" || c[m.length] !== "-")) return false;
    let g = c.includes("="), d = g ? (0, import_chunk_7cfjrnwy.nt)(c, "=") : c;
    if (Ee.has(d)) return false;
    if (!g && K.has(d)) t += 2;
    else t++;
  }
  if (t >= e.length) return true;
  let n = Ctt(), r = n(e[t] ?? ""), a = t + 1 < e.length ? n(e[t + 1] ?? "") : "", i = `git ${r} ${a}`, l = `git ${r}`, f = import_chunk_p1ewvgeh.Sjt[i], o = 2;
  if (!f) f = import_chunk_p1ewvgeh.Sjt[l], o = 1;
  if (!f) return false;
  let u = e.slice(t + o);
  if (r === "ls-remote") {
    let c = false;
    for (let g of u) {
      if (!c && g === "--") {
        c = true;
        continue;
      }
      if (c || g === "-" || !g.startsWith("-")) return false;
    }
  }
  if (f.additionalCommandIsDangerousCallback && f.additionalCommandIsDangerousCallback("", u)) return false;
  return (0, import_chunk_p1ewvgeh.g2e)(u, 0, f, { commandName: "git" });
}
function Fe(e) {
  let t = I(e);
  if (!X(e, t)) return false;
  return H(e) && H(t);
}
function H(e) {
  return false;
}
var G = new Set(import_chunk_p1ewvgeh.NSo.filter((e) => /^-[^-]$/.test(e)).map((e) => e[1])), _e = [...import_chunk_p1ewvgeh.NSo.filter((e) => e.startsWith("--")), "--tls"];
function Ie(e) {
  if (e.length === 0) return true;
  let t = I(e);
  if (e.some((l) => (0, import_chunk_bzyb60p0.Cie)(l) !== l)) return false;
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") {
    for (let l of e) if (_(l)) return false;
  }
  for (let l of t) if (l.includes("$")) return false;
  for (let l of t) {
    if (l[0] === "-" && l[1] !== "-") for (let o = 1; o < l.length; o++) {
      let u = l[o];
      if (G.has(u)) return false;
      if (u !== "h" && G.has(u.toLowerCase())) return false;
    }
    let f = l.toLowerCase();
    if (_e.some((o) => f.startsWith(o))) return false;
  }
  let r = `docker ${Ctt()(t[0] ?? "")}`;
  if (import_chunk_p1ewvgeh.$So.includes(r)) return true;
  let a = import_chunk_p1ewvgeh.FSo[r];
  if (!a) return false;
  let i = t.slice(1);
  if (a.additionalCommandIsDangerousCallback && a.additionalCommandIsDangerousCallback("", i)) return false;
  return (0, import_chunk_p1ewvgeh.g2e)(i, 0, a);
}
function ve(e) {
  if (e.length === 0) return false;
  let t = Ctt();
  for (let n of e) if (!ae.has(t(n))) return false;
  return true;
}
var ye = /* @__PURE__ */ new Set(["ac", "cat", "ci", "clear", "cp", "gsv", "help", "icim", "iwmi", "kill", "ls", "man", "md", "mkdir", "mv", "ogv", "ps", "rm", "rmdir", "sleep", "start", "tee", "write"]);
function C9r(e) {
  return !hE(e.name).includes("-") || e.nameType === "application" || (0, import_chunk_cg8dqz0a.x)() !== "windows" && ye.has(e.name.toLowerCase());
}
function grr(e) {
  let t = e[0] ?? "";
  return t !== "-" && import_chunk_bzyb60p0.que.has(t);
}
