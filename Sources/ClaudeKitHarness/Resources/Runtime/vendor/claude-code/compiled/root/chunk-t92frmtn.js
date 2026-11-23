const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_t92frmtn_exports = {};
__export(chunk_t92frmtn_exports, {
  BIa: () => BIa,
  CTn: () => CTn,
  S7t: () => S7t,
  UIa: () => UIa,
  h7s: () => h7s,
  hKo: () => hKo,
  jer: () => jer,
  zht: () => zht
});
module.exports = __toCommonJS(chunk_t92frmtn_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_0pb268nk = require("/$bunfs/root/chunk-0pb268nk.js");
var import_chunk_gp23aqt9 = require("/$bunfs/root/chunk-gp23aqt9.js");
var import_chunk_mgntjepj = require("/$bunfs/root/chunk-mgntjepj.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_ebvp3bg3 = require("/$bunfs/root/chunk-ebvp3bg3.js");
var import_chunk_5nf47kr4 = require("/$bunfs/root/chunk-5nf47kr4.js");
var import_chunk_xhqwsnqh = require("/$bunfs/root/chunk-xhqwsnqh.js");
var import_chunk_hnt4bwpe = require("/$bunfs/root/chunk-hnt4bwpe.js");
var import_path = require("path");
var import_path2 = require("path");
var import_path3 = require("path");
async function v(r, a, i, n, k, c) {
  let d = (0, import_chunk_w578pjby.le)(), e;
  try {
    e = await d.readdir(r);
  } catch {
    return [];
  }
  return (await Promise.all(e.map(async (p) => {
    if (!(p.isFile() || p.isSymbolicLink())) return null;
    if (!p.name.endsWith(".js")) return null;
    let o = c === void 0 ? void 0 : await (0, import_chunk_bzyb60p0.WY)(c, r, p.name);
    if (o !== void 0) return (0, import_chunk_w578pjby.t)(`Plugin ${a}: did not read the workflow ${(0, import_path.join)(r, p.name)}: ${o}`, { level: "error" }), null;
    return P((0, import_path.join)(r, p.name), a, i, n, k);
  }))).filter((p) => p !== null);
}
async function P(r, a, i, n, k) {
  let c = (0, import_chunk_w578pjby.le)();
  if ((0, import_chunk_w578pjby.y1e)(c, r, k)) return null;
  try {
    let d = await (0, import_chunk_xfj2cwfv.gv)(c, r, import_chunk_p1ewvgeh.qO);
    if (d === null) return (0, import_chunk_w578pjby.t)(`Plugin workflow ${r}: not a regular file or exceeds ${import_chunk_p1ewvgeh.qO} bytes \u2014 skipping`, { level: "warn" }), null;
    let e = (0, import_chunk_p1ewvgeh.ARe)(d), f = (0, import_chunk_gp23aqt9.gR)(e, { validateBody: false });
    if ("error" in f) return (0, import_chunk_w578pjby.t)(`Plugin workflow ${r} has invalid meta: ${f.error} \u2014 skipping`, { level: "warn" }), null;
    let p = `${a}:${f.meta.name}`;
    return { source: "plugin", plugin: i, pluginManifest: n, name: p, description: f.meta.description, whenToUse: f.meta.whenToUse, phases: f.meta.phases, script: e, filePath: r };
  } catch (d) {
    return (0, import_chunk_w578pjby.t)(`Failed to load workflow from ${r}: ${d}`, { level: "error" }), null;
  }
}
function S(r) {
  let a = (0, import_chunk_865at33z.ce)();
  return a.workflows ??= (async () => {
    let { enabled: i, errors: n } = await (0, import_chunk_xhqwsnqh.ZG)(await (0, import_chunk_bzyb60p0.pi)(r)), k = i.filter((e) => !(0, import_chunk_bzyb60p0.k6)(e)), c = [];
    if (n.length > 0) (0, import_chunk_w578pjby.t)(`Plugin loading errors: ${n.map((e) => (0, import_chunk_mgntjepj.mb)(e)).join(", ")}`);
    let d = null;
    for (let e of k) {
      let f = /* @__PURE__ */ new Set(), p = c.length;
      if (e.workflowsPath) try {
        let o = await v(e.workflowsPath, e.name, e.source, e.manifest, f, e.entriesAnchor);
        if (c.push(...o), o.length > 0) (0, import_chunk_w578pjby.t)(`Loaded ${o.length} workflows from plugin ${e.name} default directory`);
      } catch (o) {
        d = "plugin_load_workflows_dir_failed", (0, import_chunk_w578pjby.t)(`Failed to load workflows from plugin ${e.name} default directory: ${o}`, { level: "error" });
      }
      if (e.workflowsPaths) for (let o of e.workflowsPaths) try {
        let h = await (0, import_chunk_w578pjby.le)().stat(o);
        if (h.isDirectory()) {
          let g = await v(o, e.name, e.source, e.manifest, f, e.entriesAnchor);
          if (c.push(...g), g.length > 0) (0, import_chunk_w578pjby.t)(`Loaded ${g.length} workflows from plugin ${e.name} custom path: ${o}`);
        } else if (h.isFile() && o.endsWith(".js")) {
          let g = await P(o, e.name, e.source, e.manifest, f);
          if (g) c.push(g), (0, import_chunk_w578pjby.t)(`Loaded workflow from plugin ${e.name} custom file: ${o}`);
        }
      } catch (w) {
        d = "plugin_load_workflows_path_failed", (0, import_chunk_w578pjby.t)(`Failed to load workflows from plugin ${e.name} custom path ${o}: ${w}`, { level: "error" });
      }
      if (c.push(...c.splice(p).filter((o) => (0, import_chunk_xhqwsnqh.$V)(e.source, "workflows", o.name))), e.serverPluginId !== void 0) for (let o of c.slice(p)) o.serverPluginId = e.serverPluginId;
    }
    if ((0, import_chunk_w578pjby.t)(`Total plugin workflows loaded: ${c.length}`), d) (0, import_chunk_cqa9hrgx.m)("plugin_load_workflows", d);
    else (0, import_chunk_cqa9hrgx.u)("plugin_load_workflows");
    return c;
  })(), a.workflows;
}
function y(r, a) {
  if (!a || (0, import_chunk_gp23aqt9.q8a)(r.script)) return true;
  return (0, import_chunk_w578pjby.t)(`Workflow ${r.filePath ?? r.name} (${r.source}) would override ${r.name} but does not parse \u2014 keeping the ${a.source} copy`, { level: "warn" }), false;
}
function D(r) {
  let a = /* @__PURE__ */ new Map();
  for (let i of r) {
    if (!y(i, a.get(i.name))) continue;
    a.set(i.name, i);
  }
  return [...a.values()];
}
function CTn() {
  return (0, import_path3.join)((0, import_chunk_2gtmjt3y.Ze)(), "workflows");
}
async function T(r, a) {
  try {
    return await (0, import_chunk_bzyb60p0.kie)("workflows", r);
  } catch (i) {
    if ((0, import_chunk_jv7av99m.pa)(i)) return (0, import_chunk_w578pjby.t)(`loadWorkflowsDir: project-dir walk failed: ${i.code}`, { level: "error" }), a.walkFailed = true, [];
    throw i;
  }
}
async function b(r, a, i, n) {
  if (n !== void 0 && a === "userSettings") return L(n, r, i);
  let k = (0, import_chunk_w578pjby.le)(), c;
  try {
    c = await k.readdir(r);
  } catch {
    return [];
  }
  return (await Promise.all(c.map(async (e) => {
    if (!(e.isFile() || e.isSymbolicLink())) return null;
    if (!e.name.endsWith(".js")) {
      if (/\.(mjs|cjs|ts)$/.test(e.name)) i.nearMissExt++;
      return null;
    }
    let f = (0, import_path2.join)(r, e.name), p;
    try {
      if (e.isSymbolicLink() && (await (0, import_chunk_xfj2cwfv.Ydt)(k, f, Number.POSITIVE_INFINITY)).verdict !== "read") return (0, import_chunk_w578pjby.t)(`Workflow ${f} is a link to no regular file, or one refused for where it leads \u2014 skipping`, { level: "warn" }), i.skippedUnreadable++, null;
      p = await k.readFileBytes(f, import_chunk_p1ewvgeh.qO + 1);
    } catch {
      return i.skippedUnreadable++, null;
    }
    if (p.byteLength > import_chunk_p1ewvgeh.qO) return (0, import_chunk_w578pjby.t)(`Workflow ${f} exceeds ${import_chunk_p1ewvgeh.qO} bytes \u2014 skipping`, { level: "warn" }), i.skippedOversize++, null;
    let o = (0, import_chunk_p1ewvgeh.ARe)(p.toString("utf-8")), w = (0, import_chunk_gp23aqt9.gR)(o, { validateBody: false });
    if ("error" in w) return (0, import_chunk_w578pjby.t)(`Workflow ${f} has invalid meta: ${w.error} \u2014 skipping`, { level: "warn" }), i.skippedInvalidMeta++, null;
    return { source: a, name: w.meta.name, description: w.meta.description, whenToUse: w.meta.whenToUse, phases: w.meta.phases, script: o, filePath: f };
  }))).filter((e) => e !== null);
}
async function L(r, a, i) {
  let n = [];
  switch ((await (0, import_chunk_hnt4bwpe.Nd)((d) => r.listEntries({ namespace: "userConfigDir", dir: "workflows" }, d === void 0 ? void 0 : { cursor: d }), (d) => {
    for (let e of d) {
      if (e.kind !== "key" || e.key.namespace !== "userConfigDir") continue;
      let f = e.key.relPath.at(-1);
      if (f === void 0 || e.key.relPath.length !== 1) continue;
      if (!f.endsWith(".js")) {
        if (/\.(mjs|cjs|ts)$/.test(f)) i.nearMissExt++;
        continue;
      }
      n.push({ key: e.key, name: f });
    }
  })).status) {
    case "done":
      break;
    case "error":
      return [];
    case "capped":
      (0, import_chunk_w578pjby.t)(`User workflows listing of ${a} truncated at ${import_chunk_hnt4bwpe.pS} pages \u2014 loading the ${n.length} workflow files seen`, { level: "warn" }), i.userListingTruncated = true;
      break;
  }
  return (await Promise.all(n.map(async ({ key: d, name: e }) => {
    let f = await r.read([{ key: d, offset: 0, length: import_chunk_p1ewvgeh.qO + 1 }]);
    if (!f.ok) return (0, import_chunk_w578pjby.t)(`Workflow ${(0, import_path2.join)(a, e)} could not be read through the storage backend (${f.error.code}) \u2014 skipping`, { level: "warn" }), i.skippedUnreadable++, null;
    let p = f.value.items[0];
    if (p === void 0 || !p.found) return i.skippedUnreadable++, null;
    let o = (0, import_path2.join)(a, e);
    if (p.value.byteLength > import_chunk_p1ewvgeh.qO) return (0, import_chunk_w578pjby.t)(`Workflow ${o} exceeds ${import_chunk_p1ewvgeh.qO} bytes \u2014 skipping`, { level: "warn" }), i.skippedOversize++, null;
    let w = (0, import_chunk_p1ewvgeh.ARe)(Buffer.from(p.value).toString("utf-8")), h = (0, import_chunk_gp23aqt9.gR)(w, { validateBody: false });
    if ("error" in h) return (0, import_chunk_w578pjby.t)(`Workflow ${o} has invalid meta: ${h.error} \u2014 skipping`, { level: "warn" }), i.skippedInvalidMeta++, null;
    return { source: "userSettings", name: h.meta.name, description: h.meta.description, whenToUse: h.meta.whenToUse, phases: h.meta.phases, script: w, filePath: o };
  }))).filter((d) => d !== null);
}
async function O(r, a) {
  let i = CTn(), n = { skippedInvalidMeta: 0, skippedOversize: 0, skippedUnreadable: 0, nearMissExt: 0, walkFailed: false, userListingTruncated: false }, k = await T(r, n), [c, ...d] = await Promise.all([(0, import_chunk_xzvhvaa2.rn)("userSettings") ? b(i, "userSettings", n, a) : Promise.resolve([]), ...(0, import_chunk_xzvhvaa2.rn)("projectSettings") ? k.map((o) => b(o, "projectSettings", n)) : []]), e = /* @__PURE__ */ new Map();
  for (let o of c) {
    if (!y(o, e.get(o.name))) continue;
    e.set(o.name, o);
  }
  for (let o = d.length - 1; o >= 0; o--) for (let w of d[o]) {
    if (!y(w, e.get(w.name))) continue;
    e.set(w.name, w);
  }
  let f = n.walkFailed && (0, import_chunk_xzvhvaa2.rn)("projectSettings"), p = n.skippedInvalidMeta + n.skippedOversize + n.skippedUnreadable;
  if (f || n.userListingTruncated || p > 0 || n.nearMissExt > 0) (0, import_chunk_cqa9hrgx.l)("workflow_discover", f ? "project_dir_walk_failed" : n.userListingTruncated ? "user_listing_truncated" : n.skippedInvalidMeta > 0 ? "invalid_meta" : n.skippedOversize > 0 ? "oversize" : n.skippedUnreadable > 0 ? "unreadable" : "near_miss_extension", { found: e.size, skipped_invalid_meta: n.skippedInvalidMeta, skipped_oversize: n.skippedOversize, skipped_unreadable: n.skippedUnreadable, near_miss_ext: n.nearMissExt, ...n.userListingTruncated && { user_listing_truncated: true } });
  else (0, import_chunk_cqa9hrgx.u)("workflow_discover", { found: e.size });
  return [...e.values()].sort((o, w) => o.name.localeCompare(w.name));
}
var UIa = "CLAUDE_REMOTE_WORKFLOW_SCRIPT", h7s = "CLAUDE_REMOTE_WORKFLOW_ARGS", BIa = "CLAUDE_WORKFLOW_NAME_ONLY";
function S7t() {
  return import_chunk_c203g5kd.s.CLAUDE_WORKFLOW_NAME_ONLY;
}
function zht(r, a) {
  return (0, import_chunk_865at33z._he)((0, import_chunk_865at33z.to)().allWorkflows, `${(0, import_chunk_5nf47kr4.JTo)()}:${S7t()}:${(0, import_chunk_865at33z.aPe)(r)}`, () => M(r, a));
}
async function M(r, a) {
  if ((0, import_chunk_0pb268nk.Lr)("workflows") || S7t()) return [...(0, import_chunk_ebvp3bg3.Ger)()];
  let [i, n] = await Promise.all([O(r, a), S(a)]), k = D(n), c = (0, import_chunk_ebvp3bg3.Ger)(), d = new Map(c.map((g) => [g.name, g])), e = E(k, d);
  for (let g of e) d.set(g.name, g);
  let f = E(i, d), p = new Set(f.map((g) => g.name)), o = e.filter((g) => !p.has(g.name)), w = /* @__PURE__ */ new Set([...p, ...o.map((g) => g.name)]);
  return [...c.filter((g) => !w.has(g.name)), ...o, ...f];
}
function E(r, a) {
  return r.filter((i) => y(i, a.get(i.name)));
}
async function jer(r, a, i) {
  return (await zht(a, i)).find((k) => k.name === r);
}
function hKo() {
  (0, import_chunk_865at33z.to)().allWorkflows.clear(), (0, import_chunk_865at33z.ePr)();
}
