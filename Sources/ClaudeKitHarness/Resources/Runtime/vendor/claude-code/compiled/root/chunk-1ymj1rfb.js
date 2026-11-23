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
var chunk_1ymj1rfb_exports = {};
__export(chunk_1ymj1rfb_exports, {
  DVr: () => DVr
});
module.exports = __toCommonJS(chunk_1ymj1rfb_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_e5q83yb8 = require("/$bunfs/root/chunk-e5q83yb8.js");
var import_chunk_awvk50qj = require("/$bunfs/root/chunk-awvk50qj.js");
var import_chunk_gc5a361p = require("/$bunfs/root/chunk-gc5a361p.js");
var import_chunk_wwft95x8 = require("/$bunfs/root/chunk-wwft95x8.js");
var import_chunk_kemkq7qp = require("/$bunfs/root/chunk-kemkq7qp.js");
var import_chunk_bkfd2ttj = require("/$bunfs/root/chunk-bkfd2ttj.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
function i() {
  return (0, import_chunk_865at33z.B9)() === "default" ? " (use the Agent tool instead)" : "";
}
function l() {
  return `## What Happens in Plan Mode

In plan mode, you'll:
1. Thoroughly explore the codebase using ${(0, import_chunk_bzyb60p0.dR)() && (0, import_chunk_wwft95x8.Gd)() ? `\`find\`/${import_chunk_865at33z.Qr}, \`grep\`/${import_chunk_865at33z.Sr}, and ${import_chunk_k883m4fq.De}` : `${import_chunk_865at33z.Qr}, ${import_chunk_865at33z.Sr}, and ${import_chunk_k883m4fq.De}`}
2. Understand existing patterns and architecture
3. Design an implementation approach
4. Present your plan to the user for approval
5. Use ${import_chunk_e5q83yb8.so} if you need to clarify approaches
6. Exit plan mode with ${import_chunk_bkfd2ttj.iS} when ready to implement

`;
}
function u() {
  let e = i();
  return `Use this tool proactively when you're about to start a non-trivial implementation task. Getting user sign-off on your approach before writing code prevents wasted effort and ensures alignment. This tool transitions you into plan mode where you can explore the codebase and design an implementation approach for user approval.

## When to Use This Tool

**Prefer using EnterPlanMode** for implementation tasks unless they're simple. Use it when ANY of these conditions apply:

1. **New Feature Implementation**: Adding meaningful new functionality
   - Example: "Add a logout button" - where should it go? What should happen on click?
   - Example: "Add form validation" - what rules? What error messages?

2. **Multiple Valid Approaches**: The task can be solved in several different ways
   - Example: "Add caching to the API" - could use Redis, in-memory, file-based, etc.
   - Example: "Improve performance" - many optimization strategies possible

3. **Code Modifications**: Changes that affect existing behavior or structure
   - Example: "Update the login flow" - what exactly should change?
   - Example: "Refactor this component" - what's the target architecture?

4. **Architectural Decisions**: The task requires choosing between patterns or technologies
   - Example: "Add real-time updates" - WebSockets vs SSE vs polling
   - Example: "Implement state management" - Redux vs Context vs custom solution

5. **Multi-File Changes**: The task will likely touch more than 2-3 files
   - Example: "Refactor the authentication system"
   - Example: "Add a new API endpoint with tests"

6. **Unclear Requirements**: You need to explore before understanding the full scope
   - Example: "Make the app faster" - need to profile and identify bottlenecks
   - Example: "Fix the bug in checkout" - need to investigate root cause

7. **User Preferences Matter**: The implementation could reasonably go multiple ways
   - If you would use ${import_chunk_e5q83yb8.so} to clarify the approach, use EnterPlanMode instead
   - Plan mode lets you explore first, then present options with context

## When NOT to Use This Tool

Only skip EnterPlanMode for simple tasks:
- Single-line or few-line fixes (typos, obvious bugs, small tweaks)
- Adding a single function with clear requirements
- Tasks where the user has given very specific, detailed instructions
- Pure research/exploration tasks${e}

${l()}## Examples

### GOOD - Use EnterPlanMode:
User: "Add user authentication to the app"
- Requires architectural decisions (session vs JWT, where to store tokens, middleware structure)

User: "Optimize the database queries"
- Multiple approaches possible, need to profile first, significant impact

User: "Implement dark mode"
- Architectural decision on theme system, affects many components

User: "Add a delete button to the user profile"
- Seems simple but involves: where to place it, confirmation dialog, API call, error handling, state updates

User: "Update the error handling in the API"
- Affects multiple files, user should approve the approach

### BAD - Don't use EnterPlanMode:
User: "Fix the typo in the README"
- Straightforward, no planning needed

User: "Add a console.log to debug this function"
- Simple, obvious implementation

User: "What files handle routing?"
- Research task, not implementation planning

## Important Notes

- This tool REQUIRES user approval - they must consent to entering plan mode
- If unsure whether to use it, err on the side of planning - it's better to get alignment upfront than to redo work
- Users appreciate being consulted before significant changes are made to their codebase
`;
}
function s() {
  return u();
}
var d = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({})), h = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ message: (0, import_chunk_adx6804h.n)().describe("Confirmation that plan mode was entered") })), DVr = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "1ebcdd8b-f962-5486-b990-a98460bb97a2", name: import_chunk_kemkq7qp.OA, searchHint: "switch to plan mode to design an approach before coding", backgrounding: "never", maxResultSizeChars: 1e5, async description() {
  return "Requests permission to enter plan mode for complex tasks requiring exploration and design";
}, async prompt() {
  return s();
}, get inputSchema() {
  return d();
}, get outputSchema() {
  return h();
}, userFacingName() {
  return "";
}, whenToUse: "When you are about to start writing code for a task that is not simple, use it and not a start on the edits, so that the user approves the approach first.", shouldDefer: true, isEnabled() {
  return import_chunk_gc5a361p.lie.isEnabled();
}, isConcurrencySafe() {
  return true;
}, isReadOnly() {
  return true;
}, renderToolUseMessage() {
  return null;
}, create(e) {
  return { async validateInput(t) {
    if (e.agentId) return { result: false, message: "Only the main session can enter plan mode.", errorCode: 1 };
    return { result: true };
  }, async checkPermissions(t) {
    let { mode: o } = e.permissions();
    return (0, import_chunk_f9x2f6cx.Y)() && o !== "auto" && o !== "plan" ? { behavior: "ask", message: "Enter plan mode?", updatedInput: t, personOnly: true, decisionReason: { type: "safetyCheck", reason: (0, import_chunk_awvk50qj.Unr)() ? "In plan mode, an automatic check may approve read-only actions that you would otherwise be asked about." : "In plan mode, you are still asked about every action that you would otherwise be asked about.", classifierApprovable: false } } : { behavior: "allow", updatedInput: t };
  }, async call(t) {
    if (e.agentId) throw Error("EnterPlanMode tool cannot be used in agent contexts");
    let o = e.permissions().mode;
    return (0, import_chunk_f9x2f6cx.pVe)(o, "plan"), e.setToolPermissionContext((a) => {
      if (a.mode === "plan") return a;
      let r = (0, import_chunk_p1ewvgeh.Jh)((0, import_chunk_awvk50qj.uXt)(a), { type: "setMode", mode: "plan", destination: "session" });
      return o === "auto" && a.mode === "auto" ? { ...r, planEnteredBy: "model" } : r;
    }), { data: { message: "Entered plan mode. You should now focus on exploring the codebase and designing an implementation approach." } };
  } };
}, mapToolResultToToolResultBlockParam({ message: e }, t) {
  return { type: "tool_result", content: `${e}

In plan mode, you should:
1. Thoroughly explore the codebase to understand existing patterns
2. Identify similar features and architectural approaches
3. Consider multiple approaches and their trade-offs
4. Use ${import_chunk_e5q83yb8.so} if you need to clarify the approach
5. Design a concrete implementation strategy
6. When ready, use ${import_chunk_bkfd2ttj.iS} to present your plan for approval

Remember: DO NOT write or edit any files yet. This is a read-only exploration and planning phase.`, tool_use_id: t };
} });
