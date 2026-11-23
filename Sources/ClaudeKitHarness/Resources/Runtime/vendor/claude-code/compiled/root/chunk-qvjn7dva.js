const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_qvjn7dva_exports = {};
__export(chunk_qvjn7dva_exports, {
  AUn: () => AUn,
  Qkr: () => Qkr,
  RUn: () => RUn,
  a2e: () => a2e,
  dc: () => dc,
  fjt: () => fjt,
  gql: () => gql,
  iSs: () => iSs,
  u1: () => u1,
  ujt: () => ujt
});
module.exports = __toCommonJS(chunk_qvjn7dva_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_h6kjpwzv = require("/$bunfs/root/chunk-h6kjpwzv.js");
var import_chunk_5nf47kr4 = require("/$bunfs/root/chunk-5nf47kr4.js");
var import_path = require("path");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path2 = __toESM(require("path"));
var y = import_fs.constants.O_NOFOLLOW ?? 0, B = import_fs.constants.O_WRONLY | import_fs.constants.O_CREAT | import_fs.constants.O_EXCL | y;
async function T(e, r, n = 384) {
  let o = await (0, import_promises.open)(e, B, n);
  try {
    if (n !== 384) await o.chmod(n);
    await o.writeFile(r, "utf8");
  } finally {
    await o.close();
  }
}
function O(e, r, n = import_path2.default) {
  let o = n.normalize(r);
  if (n.isAbsolute(o) || o.split(n.sep).includes("..") || o.split("/").includes("..")) throw Error("bundled file path escapes its extraction dir");
  return n.join(e, o);
}
async function AUn(e, r, n) {
  let o = /* @__PURE__ */ new Map();
  for (let [c, l] of Object.entries(r)) {
    let i = O(e, c), d = (0, import_path2.dirname)(i), g = [i, l, n?.mode?.(c) ?? 384], a = o.get(d);
    if (a) a.push(g);
    else o.set(d, [g]);
  }
  await Promise.all([...o].map(async ([c, l]) => {
    await (0, import_promises.mkdir)(c, { recursive: true, mode: 448 }), await Promise.all(l.map(([i, d, g]) => T(i, d, g).catch((a) => {
      if (n?.tolerateExisting && (0, import_chunk_jv7av99m.w)(a) === "EEXIST") {
        if (n.tolerateExisting !== "verify-content") return (0, import_promises.lstat)(i).then((s) => {
          if (!s.isFile()) throw a;
        });
        return (0, import_promises.open)(i, import_fs.constants.O_RDONLY | y | (import_fs.constants.O_NONBLOCK ?? 0)).then((s) => s.stat().then((S) => {
          if (!S.isFile()) throw a;
          return s.readFile({ encoding: "utf8" });
        }).finally(() => s.close())).then((s) => {
          if (s !== d) throw a;
        });
      }
      throw a;
    })));
  }));
}
function Qkr(e) {
  (0, import_chunk_865at33z.to)().bundledSkillSessionResetHooks.push(e);
}
function ujt() {
  for (let e of (0, import_chunk_865at33z.to)().bundledSkillSessionResetHooks) try {
    e();
  } catch (r) {
    (0, import_chunk_w578pjby.t)(`[skills] session-reset hook failed: ${r instanceof Error ? r.message : String(r)}`);
  }
}
function gql(e) {
  let { files: r } = e, n = e.readsOtherSessions ? (...d) => ((0, import_chunk_f9x2f6cx.en)().markIncomplete(void 0, import_chunk_f9x2f6cx.GWl), e.getPromptForCommand(...d)) : e.getPromptForCommand, o = typeof r === "function";
  if (!r || !o && Object.keys(r).length === 0) return { skillRoot: void 0, getPromptForCommand: n };
  let c, l, i = async (d, g) => {
    l ??= (async () => {
      let k = c ?? (o ? await r(g) : r);
      if (Object.keys(k).length > 0) c = k;
      return E(e.name, k);
    })();
    let a = l, f;
    try {
      f = await a;
    } catch (k) {
      if (l === a) l = void 0, c = void 0;
      throw k;
    }
    if (l === a) l = void 0;
    let s = await n(d, g, f);
    if (f === null) return s;
    let S = `Base directory for this skill: ${f}

`;
    if (s.length > 0 && s[0].type === "text") return [{ type: "text", text: S + s[0].text }, ...s.slice(1)];
    return [{ type: "text", text: S }, ...s];
  };
  return { skillRoot: fjt(e.name), getPromptForCommand: i };
}
function dc(e) {
  let { skillRoot: r, getPromptForCommand: n } = gql(e), o = { type: "prompt", name: e.name, description: typeof e.description === "function" ? "" : e.description, menuDescription: typeof e.menuDescription === "function" ? void 0 : e.menuDescription, listingDescription: typeof e.listingDescription === "function" ? void 0 : e.listingDescription, aliases: e.aliases, subcommands: e.subcommands, subcommandsBareOnly: e.subcommandsBareOnly, hasUserSpecifiedDescription: true, allowedTools: e.allowedTools ?? [], getAllowedTools: e.getAllowedTools, disallowedTools: e.disallowedTools ?? [], argumentHint: typeof e.argumentHint === "function" ? void 0 : e.argumentHint, whenToUse: typeof e.whenToUse === "function" ? void 0 : e.whenToUse, model: e.model, disableModelInvocation: typeof e.disableModelInvocation === "function" ? true : e.disableModelInvocation ?? false, disableBridgeInvocation: e.disableBridgeInvocation, userInvocable: e.userInvocable ?? true, terminalOriented: e.terminalOriented, argsMayContainSlashCommands: e.argsMayContainSlashCommands, contentLength: 0, source: "bundled", loadedFrom: "bundled", hooks: e.hooks, skillRoot: r, context: e.context, getContext: e.getContext, agent: e.agent, background: e.background, formatForegroundForkResult: e.formatForegroundForkResult, isEnabled: e.isEnabled, policyGate: typeof e.policyGate === "function" ? void 0 : e.policyGate, requires: e.requires, isHidden: e.rowFromHost || !(e.userInvocable ?? true), rowFromHost: e.rowFromHost, userFacingName: e.userFacingName, progressMessage: e.progressMessage ?? "running", getPromptForCommand: n, getEffort: e.getEffort, getDefaultEffort: e.getDefaultEffort, onUserTypedArgs: e.onUserTypedArgs, getArgumentCompletions: e.getArgumentCompletions, enterTakesArgumentCompletion: e.enterTakesArgumentCompletion };
  (0, import_chunk_h6kjpwzv.EGe)(o, "description", e.description), (0, import_chunk_h6kjpwzv.EGe)(o, "menuDescription", e.menuDescription), (0, import_chunk_h6kjpwzv.EGe)(o, "listingDescription", e.listingDescription), (0, import_chunk_h6kjpwzv.EGe)(o, "argumentHint", e.argumentHint), (0, import_chunk_h6kjpwzv.EGe)(o, "whenToUse", e.whenToUse), (0, import_chunk_h6kjpwzv.qTo)(o, "disableModelInvocation", e.disableModelInvocation), (0, import_chunk_h6kjpwzv.XTo)(o, e.policyGate), (0, import_chunk_h6kjpwzv.YTo)(o, e.isHidden);
  let { aliases: c = [], moreAliases: l } = e;
  if (l) Object.defineProperty(o, "aliases", { get: () => [...c, ...l()], enumerable: true, configurable: true });
  let i = (0, import_chunk_865at33z.to)();
  if (e.survivesBundledKillSwitch) i.bundledSkillKillSwitchSurvivors.add(o);
  if (e.cannotBeShadowed) i.unshadowableBundledSkills.add(o);
  for (let d of e.readsSkillFolders ?? []) i.skillFoldersReadByBundledSkills.add(d);
  i.bundledSkills.push(o);
}
function u1() {
  let e = (0, import_chunk_865at33z.to)();
  if ((0, import_chunk_5nf47kr4.Xre)()) return e.bundledSkills.filter((r) => e.bundledSkillKillSwitchSurvivors.has(r));
  if ((0, import_chunk_5nf47kr4.HTt)()) return e.bundledSkills.filter((r) => e.bundledSkillKillSwitchSurvivors.has(r) || !(0, import_chunk_5nf47kr4.Jre)(r.name));
  return [...e.bundledSkills];
}
function RUn(e) {
  if (e.type !== "prompt" || e.source !== "bundled") return false;
  for (let r of (0, import_chunk_865at33z.to)().bundledSkillKillSwitchSurvivors) if (r === e || r.name === e.name) return false;
  return (0, import_chunk_5nf47kr4.Jre)(e.name);
}
function a2e() {
  return [...(0, import_chunk_865at33z.to)().bundledSkills];
}
function fjt(e) {
  let r = (0, import_chunk_865at33z.to)().bundledSkillFilesElsewhere;
  return r ? import_path.posix.join(r.root, e) : (0, import_path.join)((0, import_chunk_p1ewvgeh.XUn)(), e);
}
async function E(e, r) {
  if (Object.keys(r).length === 0) return null;
  let n = fjt(e);
  try {
    return await h(n, r, "verify-content"), (0, import_chunk_cqa9hrgx.u)("skill_bundled_extract"), n;
  } catch (o) {
    return (0, import_chunk_w578pjby.t)(`Failed to extract bundled skill '${e}' to ${n}: ${o instanceof Error ? o.message : String(o)}`), (0, import_chunk_cqa9hrgx.m)("skill_bundled_extract", "skill_bundled_extract_write_failed"), null;
  }
}
async function iSs(e, r) {
  if (Object.keys(r).length === 0) return null;
  let n = fjt(e);
  try {
    return await h(n, r, true), n;
  } catch (o) {
    return (0, import_chunk_w578pjby.t)(`Failed to extract additional skill files for '${e}' to ${n}: ${o instanceof Error ? o.message : String(o)}`), null;
  }
}
function h(e, r, n) {
  let o = (0, import_chunk_865at33z.to)().bundledSkillFilesElsewhere;
  return o ? o.write(e, r) : AUn(e, r, { tolerateExisting: n });
}
