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
var chunk_x1z3yh1m_exports = {};
__export(chunk_x1z3yh1m_exports, {
  Eal: () => Eal,
  gAe: () => gAe,
  kal: () => kal,
  q6: () => q6,
  wal: () => wal,
  xfo: () => xfo
});
module.exports = __toCommonJS(chunk_x1z3yh1m_exports);
var q6 = "SetGoal", gAe = "ProposeGoal", xfo = 500, wal = "Set a session goal, a stop check that keeps you working until it is met, when the user asks you to set one (such as by naming /goal or set_goal)", kal = "Set a session goal, a stop check that keeps Claude working until a separate evaluator confirms it is met, asking the user first unless their own words stated it", Eal = `Set a completion condition for this session's work \u2014 a goal enforced by a stop check, which keeps you working until a separate evaluator confirms it is met. Non-blocking: a request for approval renders alongside your work, so keep working while it is handled.

ask_user true (the default) asks the user first, with an approval dialog. If they decline you will not be notified \u2014 do not ask about the decision and do not re-propose the same or a reworded condition. Set ask_user false \u2014 which sets the goal directly, with no dialog \u2014 ONLY when the user's own words in this conversation stated this outcome as what they want; if you inferred it from their intent or the task's shape \u2014 or are in doubt \u2014 ask. While a goal is active the user is always asked, whatever ask_user says, and the current goal stays in force unless they approve. An approval reaches you as a "Goal set" message; until it does, the proposed goal is not set. You cannot see whether a proposal is still waiting or was declined, so never say it is pending; GetGoal shows the goal in force. Once a goal is set, work toward it without asking what to do. It clears by itself once met, so do not tell the user to run /goal clear after success.

Set a goal only when the user has asked for an outcome with a verifiable end state ("make the tests pass", "migrate every call site") and the work spans multiple turns. Not for one-off tasks, and never to widen scope: the condition must follow from their request.

The evaluator verifies the condition from the conversation alone \u2014 it cannot run commands or read files \u2014 so state one measurable end state with its check (e.g. "bun test exits 0"), in at most ${500} characters. One stop-check goal is active at a time; a newly approved goal replaces the current one.`;
