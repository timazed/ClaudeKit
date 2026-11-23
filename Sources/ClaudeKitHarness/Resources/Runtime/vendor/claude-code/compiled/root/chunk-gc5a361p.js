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
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
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
var chunk_gc5a361p_exports = {};
__export(chunk_gc5a361p_exports, {
  PHa: () => PHa,
  lie: () => lie,
  n3r: () => n3r,
  r3r: () => r3r,
  xHa: () => xHa
});
module.exports = __toCommonJS(chunk_gc5a361p_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_060xwhvh = require("/$bunfs/root/chunk-060xwhvh.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_xfr8663h = require("/$bunfs/root/chunk-xfr8663h.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_yvad17bv = require("/$bunfs/root/chunk-yvad17bv.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_mvszxaxb = require("/$bunfs/root/chunk-mvszxaxb.js");
var import_chunk_0dht3xy7 = require("/$bunfs/root/chunk-0dht3xy7.js");
var import_chunk_e5q83yb8 = require("/$bunfs/root/chunk-e5q83yb8.js");
var import_chunk_jgsh7w3m = require("/$bunfs/root/chunk-jgsh7w3m.js");
var import_chunk_wvxk15ee = require("/$bunfs/root/chunk-wvxk15ee.js");
var import_chunk_yta0vzjp = require("/$bunfs/root/chunk-yta0vzjp.js");
var import_chunk_z6hn62tj = require("/$bunfs/root/chunk-z6hn62tj.js");
var import_chunk_pyt5z6an = require("/$bunfs/root/chunk-pyt5z6an.js");
var import_chunk_kemkq7qp = require("/$bunfs/root/chunk-kemkq7qp.js");
var import_chunk_bkfd2ttj = require("/$bunfs/root/chunk-bkfd2ttj.js");
var import_chunk_3b9jqhjk = require("/$bunfs/root/chunk-3b9jqhjk.js");
var import_chunk_bne5t4g3 = require("/$bunfs/root/chunk-bne5t4g3.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
function U(i, e, o) {
  e.update(i, (g) => ({ ...g, awaitingPlanApproval: o !== null, pendingPlanApproval: o ? { requestId: o.requestId, answered: false } : void 0 }));
}
function xHa(i, e, o, g) {
  let r = o.get(i);
  if (!r || !(0, import_chunk_z6hn62tj.Xm)(r) || !r.awaitingPlanApproval) return null;
  switch ((0, import_chunk_0dht3xy7.igr)(r.pendingPlanApproval, e)) {
    case "mismatch":
    case "plan_digest_mismatch":
      return (0, import_chunk_w578pjby.t)(`[InProcessTeammate] Plan approval response ${(0, import_chunk_w578pjby._)(e.requestId)} does not name the pending plan request ${(0, import_chunk_w578pjby._)(r.pendingPlanApproval?.requestId)}; resolving the wait as a rejection`, { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("plan_approval", "request_binding_mismatch"), U(i, o, null), (0, import_chunk_0dht3xy7.gon)(e);
    case "unbound":
      (0, import_chunk_cqa9hrgx.l)("plan_approval", "verdict_unbound");
      break;
    case "bound":
      (0, import_chunk_cqa9hrgx.u)("plan_approval");
      break;
    case "already_answered":
      return null;
  }
  if (!e.approved) return U(i, o, null), e;
  let d = re(e.permissionMode);
  return o.update(i, (h) => ({ ...h, awaitingPlanApproval: false, pendingPlanApproval: void 0, permissionMode: d, planHeldAfterSpawn: false })), (0, import_chunk_jgsh7w3m.vcs)(r.identity.teamName, r.identity.agentName, d, g), e;
}
function re(i) {
  let e = (0, import_chunk_xcgcdx61.Qc)((0, import_chunk_xcgcdx61.s$)(i ?? "default"));
  if (e === "bypassPermissions" && (0, import_chunk_3b9jqhjk.OC)()) return "default";
  if (e === "auto" && !(0, import_chunk_bzyb60p0.JS)()) return "default";
  return e;
}
function n3r({ recipientName: i, leaderMode: e, leaderAutoPickedByLevel: o, proactivityLevel: g, tasks: r }) {
  let y = Object.values(r).some((h) => Y(h, i)) ? e : (0, import_chunk_bzyb60p0.xye)(e, g, o), d = (0, import_chunk_xcgcdx61.Qc)(y);
  return d === "plan" ? "default" : d;
}
function PHa(i, e) {
  return Object.values(e).some((o) => (0, import_chunk_z6hn62tj.Xm)(o) && o.status === "running" && o.identity.agentName === i && o.identity.planModeRequired && !o.planHeldAfterSpawn);
}
function Y(i, e) {
  return (0, import_chunk_z6hn62tj.Xm)(i) && i.status === "running" && i.identity.agentName === e && i.paneTeardown === void 0 && i.identity.resumableAgentId !== void 0;
}
class x extends Error {
  constructor(i) {
    super(i);
    this.name = "PlanPreconditionError";
  }
}
function r3r(i) {
  if (!i || (0, import_chunk_865at33z.B9)() !== "default") return "";
  return `

If this plan can be broken down into multiple independent tasks, consider spawning named teammates with the ${import_chunk_060xwhvh._t} tool (pass a \`name\`) to parallelize the work.`;
}
var K = `Use this tool when you are in plan mode and have finished writing your plan to the plan file and are ready for user approval.

## How This Tool Works
- You should have already written your plan to the plan file specified in the plan mode system message
- This tool does NOT take the plan content as a parameter - it will read the plan from the file you wrote
- This tool simply signals that you're done planning and ready for the user to review and approve
- The user will see the contents of your plan file when they review it

## When to Use This Tool
IMPORTANT: Only use this tool when the task requires planning the implementation steps of a task that requires writing code. For research tasks where you're gathering information, searching files, reading files or in general trying to understand the codebase - do NOT use this tool.

## Before Using This Tool
Ensure your plan is complete and unambiguous:
- If you have unresolved questions about requirements or approach, use ${import_chunk_e5q83yb8.so} first (in earlier phases)
- Once your plan is finalized, use THIS tool to request approval

**Important:** Do NOT use ${import_chunk_e5q83yb8.so} to ask "Is this plan okay?" or "Should I proceed?" - that's exactly what THIS tool does. ExitPlanMode inherently requests user approval of your plan.

## Examples

1. Initial task: "Search for and understand the implementation of vim mode in the codebase" - Do not use the exit plan mode tool because you are not planning the implementation steps of a task.
2. Initial task: "Help me implement yank mode for vim" - Use the exit plan mode tool after you have finished planning the implementation steps of the task.
3. Initial task: "Add a new feature to handle user authentication" - If unsure about auth method (OAuth, JWT, etc.), use ${import_chunk_e5q83yb8.so} first, then use exit plan mode tool after clarifying the approach.
`, Q = `Use this tool when you are in plan mode and your plan is ready for the user to approve.

- Pass the whole plan as \`plan\`, in Markdown. This session has no plan file, so do not write the plan to a file.
- The user sees the plan on an approval card and approves or declines it. Do NOT ask "Is this plan okay?" or "Should I proceed?" in any other way: that is what this tool does.
- If they approve, plan mode ends and you carry out the plan as approved.
- If they decline, you stay in plan mode: find out what they want changed, revise the plan, and call this tool again.
`, Z = `Use this tool when you are in plan mode and your plan is ready for the user to approve.

- Plan mode's reminder says where this session's plan goes. If that is a Claude Doc, call this tool with no argument: the user has the Doc beside the chat, and a copy on the card could not be edited and would disagree with the Doc after their first change. Otherwise pass the whole plan as \`plan\`, in Markdown; this session has no plan file, so do not write the plan to a file.
- The user approves or declines on a card. Do NOT ask "Is this plan okay?" or "Should I proceed?" in any other way: that is what this tool does.
- If they approve, plan mode ends and you carry out the plan as approved. For a Doc, that is the Doc as it reads when they approve, their edits included, so read it before you start.
- If they decline, you stay in plan mode: find out what they want changed, revise the plan in the same place (the same Doc, or a new \`plan\`), and call this tool again.
`;
var ie = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ tool: (0, import_chunk_adx6804h.F)(["Bash"]).describe("The tool this prompt applies to"), prompt: (0, import_chunk_adx6804h.n)().describe('Semantic description of the action, e.g. "run tests", "install dependencies"') })), oe = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ allowedPrompts: (0, import_chunk_adx6804h.C)(ie()).optional().describe("Deprecated: no longer used.") }).passthrough()), se = { type: "object", properties: { plan: { type: "string", description: "The whole plan, in Markdown, as the user will see it" } }, required: ["plan"], additionalProperties: false }, ee = 32768, le = { type: "object", properties: { plan: { type: "string", description: "The whole plan, in Markdown, as the user will see it. Leave it out when plan mode's reminder has you keep the plan in a Claude Doc." } }, additionalProperties: false }, ct = (0, import_chunk_2cbgkbm2.p)(() => oe().extend({ plan: (0, import_chunk_adx6804h.n)().optional().describe("The plan content (injected by normalizeToolInput from disk)"), planFilePath: (0, import_chunk_adx6804h.n)().optional().describe("The plan file path (injected by normalizeToolInput)") })), de = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ plan: (0, import_chunk_adx6804h.n)().nullable().describe("The plan that was presented to the user"), isAgent: (0, import_chunk_adx6804h.P)(), filePath: (0, import_chunk_adx6804h.n)().optional().describe("The file path where the plan was saved"), hasTaskTool: (0, import_chunk_adx6804h.P)().optional().describe("Whether the Agent tool is available in the current context"), planWasEdited: (0, import_chunk_adx6804h.P)().optional().describe("True when the user edited the plan (CCR web UI or Ctrl+G); determines whether the plan is echoed back in tool_result"), awaitingLeaderApproval: (0, import_chunk_adx6804h.P)().optional().describe("When true, the teammate has sent a plan approval request to the team leader"), requestId: (0, import_chunk_adx6804h.n)().optional().describe("Unique identifier for the plan approval request") }));
function z(i) {
  if (i.teammateContext) return i.teammateContext;
  let e = (0, import_chunk_wtm85h0y.lT)();
  return e?.agentId && e.teamName ? e : void 0;
}
function te(i, e, o) {
  let g = `The approved plan is ${(0, import_chunk_wvxk15ee.Egr)(i)}, as the user left it when they approved. They may have changed it after you last wrote it, up to that moment, so what you remember writing may not be what they approved.`;
  return o === void 0 ? `${g}

Before your todo list or any other step, read the Doc: first call ${e} with only \`ref\` {"object":"project","id":"${i.id}"}, which lists its tabs and the id of each tab's body (\`content.id\`); then read each body with \`ref\` {"object":"node","id":"<content.id>"} and \`container\` {"kind":"project","id":"${i.id}"}. A whole view cannot show what is no longer there, so read each body once more, with the same \`ref\` and \`container\` and with \`payload\` {"kind":"view","sinceRev":<the \`rev\` in the answer to your last write to that body>}: that view holds only what changed since you wrote, and marks each block that the user removed as \`<gone/>\`. A step that they struck out is their instruction like any other: carrying it out because you remember writing it would undo their edit. Work to the Doc: where it differs from your draft, the Doc is the user's instruction, and following your draft would drop their corrections while they believe that the work follows their plan. If you have not started the work yet, say in one line what they changed, or that nothing changed, then start.

If the read fails, try it once more. If it still fails, do not work from memory: tell the user that you could not read the approved plan, and ask whether to go ahead with it as you last wrote it.` : `${g} Where it differs from what you last wrote, the user changed it: a step that is missing was removed on purpose, and carrying it out because you remember writing it would undo their edit. Work to the Doc as it reads here: it is the user's instruction, and following your draft would drop their corrections while they believe that the work follows their plan. If you have not started the work yet, say in one line what they changed, or that nothing changed, then start.

${o}`;
}
var lie = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "7dd67d58-1e1f-5950-83b4-fdf7c0c9ce28", name: import_chunk_bkfd2ttj._d, searchHint: "present plan for approval and start coding (plan mode only)", backgrounding: "never", maxResultSizeChars: 1e5, async description() {
  return "Prompts the user to exit plan mode and start coding";
}, async prompt() {
  if (!(0, import_chunk_bzyb60p0.P4e)()) return K;
  return (0, import_chunk_wvxk15ee.GLn)() ? Z : Q;
}, get inputSchema() {
  return oe();
}, get inputJSONSchema() {
  if (!(0, import_chunk_bzyb60p0.P4e)()) return;
  return (0, import_chunk_wvxk15ee.GLn)() ? le : se;
}, get outputSchema() {
  return de();
}, userFacingName() {
  return "";
}, whenToUse: `When you are in plan mode, your plan is ready and you are about to ask whether to proceed, use it and not a question, in plain text or through ${import_chunk_e5q83yb8.so}.`, shouldDefer: true, isEnabled() {
  return (0, import_chunk_wtm85h0y.Yc)() ? (0, import_chunk_pyt5z6an.l1i)() : (0, import_chunk_pyt5z6an.F7)();
}, isConcurrencySafe() {
  return true;
}, isReadOnly() {
  return false;
}, requiresUserInteraction() {
  if ((0, import_chunk_wtm85h0y.Yc)()) return false;
  return true;
}, renderToolUseMessage() {
  return null;
}, create(i) {
  return { async validateInput(e) {
    let o = i;
    if (o.agentContext.agentType === "subagent" && o.agentContext.isBuiltIn === true && o.agentContext.subagentName === import_chunk_060xwhvh.pv && (z(o) || o.permissions().mode === "plan")) return { result: false, message: "A fork cannot exit plan mode; that belongs to the session that forked it. Finish your part and report back.", errorCode: 2 };
    if (z(o)) return { result: true };
    if ((0, import_chunk_bzyb60p0.P4e)() && o.agentId) return { result: false, message: "Only the main conversation can ask for plan approval in this session. Give your plan in your final message.", errorCode: 3 };
    let r = o.permissions().mode;
    if (r !== "plan") return (0, import_chunk_y53wbr8a.a)("tengu_exit_plan_mode_called_outside_plan", { model: (0, import_chunk_865at33z.Xt)(o.modelFacts().model), mode: (0, import_chunk_78g0060s.f)(r), hasExitedPlanModeInSession: (0, import_chunk_f9x2f6cx.u3t)() }), { result: false, message: `You are not in plan mode. To enter plan mode, call the ${import_chunk_kemkq7qp.OA} tool first. If your plan was already approved, continue with implementation.`, errorCode: 1 };
    if ((0, import_chunk_bzyb60p0.P4e)()) {
      let y = (0, import_chunk_wvxk15ee.M$t)(o.permissions());
      if (y !== void 0) return Object.keys(e).length === 0 ? { result: true } : { result: false, message: `This session's plan is ${(0, import_chunk_wvxk15ee.Egr)(y)}, and the user approves the Doc as it stands. Put any change into the Doc, then call this tool with no argument.`, errorCode: 6 };
      let d = "plan" in e ? e.plan : void 0;
      if (typeof d !== "string" || d.trim() === "" || Object.keys(e).length > 1) return { result: false, message: (0, import_chunk_wvxk15ee.ouo)(o.tools, o.permissions()) === void 0 ? "Pass the whole plan as non-empty text in the `plan` argument, and pass no other argument. This session has no plan file to read it from." : "No plan Doc is recorded for this session: none was created, or it was created with arguments other than the ones that plan mode's reminder shows. If you created none, create it with exactly that call and then call this tool with no argument. If you already created one, pass the whole plan as non-empty text in `plan` as the only argument, so that the user is not left with two Docs.", errorCode: 4 };
      let h = Buffer.byteLength((0, import_chunk_w578pjby._)(e));
      if (h > ee) return { result: false, message: `The plan is ${h} bytes as JSON, over the ${ee} that the user's approval card can carry. A quote, backslash or line break counts as two bytes, and a non-ASCII character as two to four. Shorten the plan and call this tool again.`, errorCode: 5 };
    }
    return { result: true };
  }, async checkPermissions(e) {
    if (z(i)) return { behavior: "allow", updatedInput: (0, import_chunk_bzyb60p0.uR)(import_chunk_bkfd2ttj._d, e) };
    let o = "plan" in e ? void 0 : (0, import_chunk_wvxk15ee.M$t)(i.permissions());
    return { behavior: "ask", message: "Exit plan mode?", updatedInput: o === void 0 ? e : { plan: `${o.title === void 0 ? "This plan is a Claude Doc" : `**${o.title.replace(/[!-/:-@[-`{-~]/g, "\\$&")}**

This plan is the Claude Doc of the same name`} that Claude made in this chat. To change the plan, edit the Doc before you answer. If you approve, Claude carries out the Doc as it reads at that moment; if you decline, Claude keeps planning.`, planFilePath: (0, import_chunk_wvxk15ee.Gol)(o) } };
  }, async call(e, { onProgress: o, runEngine: g }) {
    let r = i, y = null, d = null;
    [y, d] = await Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-n6p52spf.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-6n47jape.js")))]);
    let h = !!r.agentId, v = (0, import_chunk_bzyb60p0.P4e)(), O = (0, import_chunk_wvxk15ee.M$t)(r.permissions()), E = (0, import_chunk_wvxk15ee.GLn)() && "planFilePath" in e ? (0, import_chunk_wvxk15ee.zol)(e.planFilePath) : void 0, A = E !== void 0 && E !== O?.id ? { id: E, title: void 0 } : E !== void 0 || !("plan" in e) ? O : void 0, G = r.tools.find((s) => s.mcpInfo?.docsConnector === true && s.mcpInfo.toolName === import_chunk_qdcbcsg7.zOo), J = G?.name ?? "the Claude Docs connector's read tool", N = (A && te(A, J, void 0)) ?? ("plan" in e && typeof e.plan === "string" ? e.plan : void 0);
    if (v && N === void 0) throw new x("The approval arrived without the plan, so plan mode was not exited. Call this tool again with the whole plan in the `plan` argument.");
    let w = (0, import_chunk_p1ewvgeh.xC)(r.agentId);
    if (!v) (0, import_chunk_p1ewvgeh.KH)(w), (0, import_chunk_bzyb60p0.jMe)([w], r.agentId), (0, import_chunk_bzyb60p0.b_t)(w);
    let D = N ?? await (0, import_chunk_p1ewvgeh.yjt)(r.agentId, r.storageV5), b;
    if (N !== void 0 && w) {
      if ((0, import_chunk_bzyb60p0.mxn)(import_chunk_rb36kwbn.Dt, { file_path: w }), b = await (0, import_chunk_p1ewvgeh.X$i)(w, N, r.storageV5), !v) if (b === void 0) (0, import_chunk_cqa9hrgx.u)("plan_edit_save");
      else if (b.savedTo !== void 0) w = b.savedTo, (0, import_chunk_cqa9hrgx.l)("plan_edit_save", "moved_to_default_folder");
      else (0, import_chunk_cqa9hrgx.m)("plan_edit_save", "not_saved");
      (0, import_chunk_bzyb60p0._Jo)(r.storageV5);
    }
    let k = z(r), j = k ? Object.values(r.tasks() ?? {}).find((s) => Y(s, k.agentName)) : void 0, X = r.teammateContext !== void 0 && r.permissions().mode === "plan";
    if (X && j === void 0) throw new x("This teammate's task could not be found, so plan mode was not exited. Ask the lead to approve your plan.");
    let ae = X && j?.permissionMode === "plan";
    if (k && (k.planModeRequired || ae)) {
      if (!D) throw new x(`No plan file found at ${w}. Please write your plan to this file before calling ExitPlanMode.`);
      let { agentName: s, teamName: I } = k, M = (0, import_chunk_865at33z.XRo)("plan_approval", (0, import_chunk_865at33z.aee)(s, I || "default")), S = { type: "plan_approval_request", from: s, timestamp: (/* @__PURE__ */ new Date()).toISOString(), planFilePath: w, planContent: D, requestId: M };
      if (await (0, import_chunk_0dht3xy7.$O)("team-lead", { from: s, text: (0, import_chunk_w578pjby._)(S), timestamp: (/* @__PURE__ */ new Date()).toISOString() }, I, r.storageV5) === void 0) throw new x("Failed to write the plan approval request to the lead's inbox \u2014 plan not submitted; try again");
      if (j) U(j.id, r.taskRegistry, { requestId: M });
      else (0, import_chunk_mvszxaxb.Zo)().teamPermissions.pendingPlanApproval = { requestId: M, answered: false, planDigest: (0, import_chunk_bzyb60p0.ddr)(D) };
      return { data: { plan: D, isAgent: true, filePath: w, awaitingLeaderApproval: true, requestId: M } };
    }
    let H = null;
    {
      let s = r.permissions().prePlanMode ?? "default";
      if (s === "auto" && !(d?.canPlanReturnToAutoMode(s) ?? false)) {
        let I = d?.getAutoModeUnavailableReason() ?? "circuit-breaker";
        H = d?.getAutoModeUnavailableNotification(I) ?? "auto mode unavailable", (0, import_chunk_w578pjby.t)(`[auto-mode gate @ ExitPlanModeV2Tool] prePlanMode=${s} but plan may not return to it (reason=${I}) \u2014 falling back to default on plan exit`, { level: "warn" });
      }
    }
    if (H) o?.({ type: "notification", notification: { key: "auto-mode-gate-plan-exit-fallback", text: `plan exit \u2192 default \xB7 ${H}`, priority: "immediate", color: "warning", timeoutMs: 1e4 } });
    let W = r.permissions();
    if (W.mode === "plan" && r.teammateContext === void 0) {
      (0, import_chunk_f9x2f6cx.GK)(true), (0, import_chunk_f9x2f6cx.bte)(true);
      let s = W.prePlanMode ?? "default";
      {
        if (s === "auto" && !(d?.canPlanReturnToAutoMode(s) ?? false)) s = "default";
        let L = s === "auto", T = y?.isAutoModeActive() ?? false;
        if (y?.setAutoModeActive(L), T && !L) (0, import_chunk_f9x2f6cx.zB)(true);
      }
      let I = s === "auto", M = W.strippedDangerousRules, S = s, q;
      if (r.setToolPermissionContext((L) => {
        let T = L;
        if (I) T = d?.stripDangerousPermissionsForAutoMode(T) ?? T;
        else if (M) T = d?.restoreDangerousPermissions(T) ?? T;
        if (s === "bypassPermissions") {
          let V = d?.guardPermissionModeChange(s, L);
          if (V === void 0 || !V.ok) S = "default", q = V?.error;
        }
        return { ...T, mode: S, prePlanMode: void 0, planEnteredBy: void 0 };
      }), S !== s) {
        if ((0, import_chunk_w578pjby.t)("[ExitPlanModeV2Tool] prePlanMode=bypassPermissions is no longer available \u2014 falling back to default on plan exit", { level: "warn" }), q) o?.({ type: "notification", notification: { key: "bypass-unavailable-plan-exit-fallback", text: `plan exit \u2192 default \xB7 ${q}`, priority: "immediate", color: "warning", timeoutMs: 1e4 } });
      }
      (0, import_chunk_xfr8663h.exe)({ from: "plan", to: S, trigger: "exit_plan_mode" }, r.agentContext);
    }
    let R;
    if (A && !h && k === void 0) {
      let s = import_chunk_wvxk15ee.jol.read;
      if (A.id !== O?.id) (0, import_chunk_cqa9hrgx.l)("plan_doc_read", "not_on_record");
      else if (!G) (0, import_chunk_cqa9hrgx.l)("plan_doc_read", "no_read_tool");
      else if (!s) (0, import_chunk_cqa9hrgx.l)("plan_doc_read", "no_reader");
      else R = await g?.(s, { id: A.id, tool: G });
    }
    let ne = (0, import_chunk_yvad17bv.xi)() && r.tools.some((s) => (0, import_chunk_4vsz8a99.gt)(s, import_chunk_060xwhvh._t)) && !(0, import_chunk_bzyb60p0.YXo)(import_chunk_bne5t4g3.Ln, r.tools);
    return { data: { plan: A && R?.text !== void 0 ? te(A, J, R.text) : D, isAgent: h, filePath: v || b && !b.savedTo ? void 0 : w, hasTaskTool: ne || void 0, planWasEdited: N !== void 0 && !v || void 0 }, ...R?.attachments.length && { newMessages: R.attachments }, ...b && !v && { newMessages: [(0, import_chunk_yta0vzjp.lp)(b.notice, "warning")] } };
  } };
}, mapToolResultToToolResultBlockParam({ isAgent: i, plan: e, filePath: o, hasTaskTool: g, planWasEdited: r, awaitingLeaderApproval: y, requestId: d }, h) {
  if (y) return { type: "tool_result", content: `Your plan has been submitted to the team lead for approval.

Plan file: ${o}

**What happens next:**
1. Wait for the team lead to review your plan
2. You will receive a message in your inbox with approval/rejection
3. If approved, you can proceed with implementation
4. If rejected, refine your plan based on the feedback

**Important:** Do NOT proceed until you receive approval. Check your inbox for response.

Request ID: ${d}`, tool_use_id: h };
  if (i) return { type: "tool_result", content: 'User has approved the plan. There is nothing else needed from you now. Please respond with "ok"', tool_use_id: h };
  if (!e || e.trim() === "") return { type: "tool_result", content: "User has approved exiting plan mode. You can now proceed.", tool_use_id: h };
  let v = r3r(Boolean(g)), O = r ? "Approved Plan (edited by user)" : "Approved Plan";
  return { type: "tool_result", content: `User has approved your plan. You can now start coding. Start with updating your todo list if applicable${o === void 0 ? r ? `

The edit could not be saved to the plan file, so work from the text below.` : "" : `

Your plan has been saved to: ${o}
You can refer back to it if needed during implementation.`}${v}

## ${O}:
${e}`, tool_use_id: h };
} });
