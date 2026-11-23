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
var chunk_bmkapw2c_exports = {};
__export(chunk_bmkapw2c_exports, {
  $9r: () => $9r,
  Arr: () => Arr
});
module.exports = __toCommonJS(chunk_bmkapw2c_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_ha393e1n = require("/$bunfs/root/chunk-ha393e1n.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_57sd0ak5 = require("/$bunfs/root/chunk-57sd0ak5.js");
var import_chunk_0pb268nk = require("/$bunfs/root/chunk-0pb268nk.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_qp5chy39 = require("/$bunfs/root/chunk-qp5chy39.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_tbr7tkzm = require("/$bunfs/root/chunk-tbr7tkzm.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_crypto = require("crypto");
var import_path = require("path");
function k(e, o) {
  let a = (0, import_chunk_f9x2f6cx.tu)();
  if (a.some((m) => (0, import_chunk_z6pfqf6e.pn)((0, import_path.resolve)(m)) === o)) return false;
  return (0, import_chunk_f9x2f6cx.AL)([...a, o]), (0, import_chunk_bzyb60p0.hH)(e), (0, import_chunk_bzyb60p0.AP)(e, "directory_added"), (0, import_chunk_tbr7tkzm.Rgt)(), true;
}
async function $9r(e, o, a) {
  let d = { type: "addDirectories", directories: [o], destination: a ? "localSettings" : "session" };
  e.setToolPermissionContext((i) => (0, import_chunk_p1ewvgeh.Jh)(i, d)), k(e.session, o), import_chunk_ha393e1n.Ue.refreshConfig(), e.storageV5 ? (0, import_chunk_bzyb60p0.nrs)(o, e.storageV5) : (0, import_chunk_bzyb60p0.nrs)(o), (0, import_chunk_9e5mdyfk.vki)("--add-dir", o, e.storageV5);
  let l;
  if (a) try {
    let i;
    await (0, import_chunk_p1ewvgeh.fYe)(d, e.storageV5, (r) => {
      i = r;
    }), l = i === void 0 ? `Added ${import_chunk_d57v19zt.Re.bold(o)} as a working directory and saved to local settings` : `Added ${import_chunk_d57v19zt.Re.bold(o)} as a working directory. ${i}`;
  } catch (i) {
    l = `Added ${import_chunk_d57v19zt.Re.bold(o)} as a working directory. Couldn't save it to local settings: ${i instanceof Error ? i.message : "Unknown error"}`;
  }
  else l = `Added ${import_chunk_d57v19zt.Re.bold(o)} as a working directory for this session`;
  if ((0, import_chunk_bz1f2qnq.Z)(e).blockFileToolReadsOutsideWorkingDirectories === true) l += ". The file tools still refuse it: they count only the folders that this session was launched with";
  let f = (0, import_crypto.randomUUID)();
  return (0, import_chunk_bzyb60p0.AMn)(e.session, o, "slash_command", { storageV5: e.storageV5, credentials: e.credentials }).then(async ({ results: i, systemMessages: r }) => {
    for (let s of i) if (!s.succeeded && s.output) (0, import_chunk_w578pjby.t)(`DirectoryAdded hook failed: ${s.output}`, { level: "error" });
    let n = (0, import_chunk_4smdap7r.U)(i, (s) => !s.succeeded), u = [...await Promise.all(r.map((s, p) => (0, import_chunk_qp5chy39.CDe)(s, `add-dir-${f}-${p}`, "systemMessage", { storageV5: e.storageV5 }).then((g) => `DirectoryAdded hook: ${g}`))), ...n > 0 ? [`${n} DirectoryAdded ${(0, import_chunk_7cfjrnwy.O)(n, "hook")} failed; output is in the debug log, not shown here`] : []];
    if (u.length > 0) e.messageQueue.enqueuePendingNotification({ value: u.join(`
`), mode: "task-notification", skipAttachments: true, agentId: (0, import_chunk_f9x2f6cx.ot)(), isMeta: true });
  }).catch((i) => {
    e.messageQueue.enqueuePendingNotification({ value: `DirectoryAdded hook execution failed: ${i instanceof Error ? i.message : String(i)}`, mode: "task-notification", skipAttachments: true, agentId: (0, import_chunk_f9x2f6cx.ot)(), isMeta: true });
  }), l;
}
function Arr(e, o) {
  let a = (0, import_chunk_bz1f2qnq.Z)(e);
  if (o.isExactMatch || !o.isOriginalCwd) return null;
  let m = (0, import_chunk_w578pjby.le)(), { resolvedPath: d, isCanonical: l } = (0, import_chunk_w578pjby.no)(m, o.absolutePath), { resolvedPath: f, isCanonical: i } = (0, import_chunk_w578pjby.no)(m, o.workingDir), r = import_chunk_d57v19zt.Re.bold((0, import_chunk_xfj2cwfv.wr)(o.directoryPath));
  if (!l || !i) {
    if ([o.absolutePath, o.workingDir].some((c) => (0, import_chunk_z6pfqf6e.sa)(c) || (0, import_chunk_z6pfqf6e.Fl)(c) || (0, import_chunk_z6pfqf6e.eR)(c))) return null;
    return `${r} couldn't be resolved to a real location, so its skills, commands, and agents weren't loaded. Check that it is a directory inside the working directory and try again.`;
  }
  if (!(0, import_chunk_p1ewvgeh.w_)(o.absolutePath, { ...a, additionalWorkingDirectories: /* @__PURE__ */ new Map() }) || !(0, import_chunk_p1ewvgeh.Sc)(d, f, { caseFold: false, skipPrivateAlias: true, uncShapeParity: true })) {
    let c = (0, import_chunk_xfj2cwfv.wr)(d);
    return d === o.absolutePath ? `${r} leads outside the working directory, so its skills, commands, and agents weren't loaded. Add that location with /add-dir to grant access to it.` : `${r} leads outside the working directory through a link (it resolves to ${import_chunk_d57v19zt.Re.bold(c)}), so its skills, commands, and agents weren't loaded. Run /add-dir ${c} to grant access to it.`;
  }
  if (d === f) return null;
  let n = `${r} is inside the current working directory ${import_chunk_d57v19zt.Re.bold((0, import_chunk_xfj2cwfv.wr)(o.workingDir))}`, u = (0, import_chunk_xzvhvaa2.rn)("projectSettings"), s = u && !(0, import_chunk_0pb268nk.Lr)("skills", { explicitlyRequested: true }) && !(0, import_chunk_57sd0ak5.Dl)("skills"), p = u && !(0, import_chunk_0pb268nk.Lr)("agents") && !(0, import_chunk_57sd0ak5.Dl)("agents");
  if (!s && !p) return `${n}; skills, commands, and agents from additional directories are disabled in this session, so nothing was loaded.`;
  let g = s && p ? "skills, commands, and agents" : s ? "skills and commands" : "agents";
  if ((0, import_chunk_6mfepmbb.yHr)([o.absolutePath, (0, import_path.join)(o.absolutePath, ".claude"), (0, import_path.join)(o.absolutePath, ".claude", "skills"), (0, import_path.join)(o.absolutePath, ".claude", "commands")])) return `${n}; it is in a connector-downloads folder, where Claude Code saves files downloaded from claude.ai connectors, so its ${g} weren't loaded. To load them, copy the folder to a place outside connector-downloads and add the copy.`;
  let y = k(e.session, o.absolutePath);
  if (y) import_chunk_ha393e1n.Ue.refreshConfig();
  return y ? `${n}; loading its ${g} for this session.` : `${n}; its ${g} are already included for this session.`;
}
