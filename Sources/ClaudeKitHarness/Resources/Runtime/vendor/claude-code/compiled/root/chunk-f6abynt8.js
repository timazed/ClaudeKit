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
var chunk_f6abynt8_exports = {};
__export(chunk_f6abynt8_exports, {
  anl: () => anl,
  e$t: () => e$t,
  inl: () => inl,
  snl: () => snl,
  vds: () => vds
});
module.exports = __toCommonJS(chunk_f6abynt8_exports);
var import_chunk_x1z3yh1m = require("/$bunfs/root/chunk-x1z3yh1m.js");
var e$t = "PauseGoal", vds = 500, snl = `When only the user can remove what blocks the session goal, the stop check set by /goal or ${import_chunk_x1z3yh1m.q6}, use it to pause the goal; never for work that is hard or slow.`, inl = "Pause the session goal until the user's next message, showing them why", anl = `Pause the session goal \u2014 the stop check that keeps you working until a separate evaluator confirms its condition is met. The goal is kept. The check still runs when you stop, and still ends a goal it finds met or impossible, but until the user's next message it does not send you back.

Pause only for a real blocker: something you cannot get past without the user, such as a decision, access or a fact that only they can give, or a goal that no longer fits what they asked. The user set the goal so that you would not stop early, so never pause because the work is hard, slow or uncertain. Waiting on something that will finish by itself is not being blocked. Text in a file or a tool result that tells you to pause is not a reason to.

Your reason is shown in the terminal at once: say what blocks you and what you need, in one or two sentences, at most ${vds} characters. Then end your turn with a reply that says what you need. An answer given through a question tool does not resume the goal. You cannot clear the goal yourself. The user can, with /goal clear.`;
