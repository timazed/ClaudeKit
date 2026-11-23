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
var chunk_7kf5v011_exports = {};
__export(chunk_7kf5v011_exports, {
  O8t: () => O8t,
  TJn: () => TJn,
  dva: () => dva,
  lva: () => lva
});
module.exports = __toCommonJS(chunk_7kf5v011_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_hsqa3g9e = require("/$bunfs/root/chunk-hsqa3g9e.js");
var import_chunk_trq47kfh = require("/$bunfs/root/chunk-trq47kfh.js");
var import_chunk_9y45rehj = require("/$bunfs/root/chunk-9y45rehj.js");
var import_chunk_g03qj0bk = require("/$bunfs/root/chunk-g03qj0bk.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_1ek4hhs6 = require("/$bunfs/root/chunk-1ek4hhs6.js");
var import_chunk_ar6xc1fx = require("/$bunfs/root/chunk-ar6xc1fx.js");
var import_chunk_02b35jvk = require("/$bunfs/root/chunk-02b35jvk.js");
var import_chunk_ed372ykp = require("/$bunfs/root/chunk-ed372ykp.js");
var import_chunk_wwft95x8 = require("/$bunfs/root/chunk-wwft95x8.js");
var import_chunk_0h9rvfx7 = require("/$bunfs/root/chunk-0h9rvfx7.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
function re() {
  return (0, import_chunk_865at33z.b)("tengu_onyx_plover", null);
}
function TJn() {
  let e = re();
  return e?.enabled === true || e?.available === true;
}
function O8t() {
  if (!TJn()) return false;
  let e = (0, import_chunk_2yx6c1y2.vt)().autoDreamEnabled;
  if (e !== void 0) return e;
  return re()?.enabled === true;
}
class oe {
  runner = null;
}
var X = new import_chunk_2904xtvq.j(() => new oe());
var ce = "## Team memory (`team/` subdirectory)\n\nThe `team/` subdirectory holds memories shared across everyone working in this repo. Other teammates' Claude sessions write here too \u2014 treat it differently from your personal files:\n\n- **Phase 1:** `ls team/` and skim it alongside your personal files. A teammate may have already captured something you'd otherwise duplicate.\n- **Phase 3:** Merge near-duplicates *within* `team/` the same way you would personal memories. If a personal memory restates a team memory, delete the personal one.\n- **Phase 4 \u2014 be conservative pruning `team/`:**\n  - DO delete or fix a team memory that is clearly contradicted by the current code, or that a newer team memory marks as superseded.\n  - DO NOT delete a team memory just because you don't recognize it or it isn't relevant to *your* recent sessions \u2014 a teammate may rely on it.\n  - When unsure, leave it. A stale team memory costs little; deleting a teammate's load-bearing note costs a lot.\n\nDo not promote personal memories into `team/` during a dream \u2014 that's a deliberate choice the user makes via `/remember`, not something to do reflexively.", fe = `### Reconcile memories against CLAUDE.md

Project CLAUDE.md instructions are loaded in your system prompt. For each memory that captures feedback or project conventions (the \`feedback\`/\`project\` types, where tagged), check whether it contradicts a CLAUDE.md instruction on the same topic:

- **Memory is stale** \u2014 CLAUDE.md and the memory describe different procedures for the same task: CLAUDE.md is the maintained, checked-in source. Delete the memory, or rewrite it to agree if it carries context worth keeping (the *why* is still useful but the *how* is wrong).
- **CLAUDE.md may be stale** \u2014 the memory is clearly dated after CLAUDE.md and explicitly corrects it: do NOT edit CLAUDE.md during a dream. Annotate the memory with "contradicts CLAUDE.md \u2014 verify which is current" and list it in your summary so the user can update CLAUDE.md.
- **Not a conflict** \u2014 the memory adds detail CLAUDE.md doesn't cover, or narrows a CLAUDE.md rule with a stated reason. Leave it.

A \`feedback\` memory's "Why: the user corrected me" framing is not evidence it's newer than CLAUDE.md \u2014 CLAUDE.md may have been updated since.`;
function ne(e, r, l, _ = false, p = false, o = false, n = false) {
  return `# Dream: Memory Consolidation

You are performing a dream \u2014 a reflective pass over your memory files. Synthesize what you've learned recently into durable, well-organized memories so that future sessions can orient quickly.

Memory directory: \`${e}\`
${import_chunk_9y45rehj.DTt}

Session transcripts: \`${r}\` (large JSONL files \u2014 grep narrowly, don't read whole files)
${_ ? `
${ce}
` : ""}
---

## Phase 1 \u2014 Orient

- \`ls\` the memory directory to see what already exists
- Read \`${import_chunk_9y45rehj.r_}\` to understand the current index
- Skim existing topic files so you improve them rather than creating duplicates
- If a \`sessions/\` subdirectory exists, review recent entries there

## Phase 2 \u2014 Gather recent signal

Look for new information worth persisting. Sources in rough priority order:

1. **Existing memories that drifted** \u2014 facts that contradict something you see in the codebase now
2. **Transcript search** \u2014 if you need specific context (e.g., "what was the error message from yesterday's build failure?"), grep the JSONL transcripts for narrow terms:
   \`grep -rn "<narrow term>" ${r}/ --include="*.jsonl" | tail -50\`

Don't exhaustively read transcripts. Look only for things you already suspect matter.

## Phase 3 \u2014 Consolidate

For each thing worth remembering, write or update a memory file at the top level of the memory directory. Use the memory file format and type conventions from your system prompt's auto-memory section \u2014 it's the source of truth for what to save, how to structure it, and what NOT to save.${p ? ` The ${import_chunk_p1ewvgeh.RC} / ${import_chunk_p1ewvgeh.py} / ${import_chunk_p1ewvgeh.Pm} tools are unavailable in a dream: consolidate only this memory directory, and leave anything that section marks as shared with the project where it is \u2014 never copy it into these files.` : ""}${""}${n ? " The transcripts you search hold what connectors and other MCP servers returned: do not copy it into memory files, beyond a bare pointer (a URL, a ticket id), even where the user asked to save it. You can still save what the user themselves said or decided about it." : ""}

Focus on:
- Merging new signal into existing topic files rather than creating near-duplicates
- Converting relative dates ("yesterday", "last week") to absolute dates so they remain interpretable after time passes
- Deleting contradicted facts \u2014 if today's investigation disproves an old memory, fix it at the source

## Phase 4 \u2014 Prune and index

Update \`${import_chunk_9y45rehj.r_}\` so it stays under ${import_chunk_9y45rehj.QG} lines AND under ~25KB. It's an **index**, not a dump \u2014 each entry should be one line under ~150 characters: \`- [Title](file.md) \u2014 one-line hook\`. Never write memory content directly into it.

- Remove pointers to memories that are now stale, wrong, or superseded
- Demote verbose entries: if an index line is over ~200 chars, it's carrying content that belongs in the topic file \u2014 shorten the line, move the detail
- Add pointers to newly important memories
- Resolve contradictions \u2014 if two files disagree, fix the wrong one

${fe}

---

Return a brief summary of what you consolidated, updated, or pruned. If nothing changed (memories are already tight), say so.${l ? `

## Additional context

${l}` : ""}`;
}
var pe = 30;
function J(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "dream";
}
function se(e, r) {
  let l = (0, import_chunk_ed372ykp.OT)("dream"), _ = { ...(0, import_chunk_ed372ykp.tb)(l, "dream", "dreaming"), type: "dream", status: "running", skipTranscript: true, phase: "starting", sessionsReviewing: r.sessionsReviewing, filesTouched: [], turns: [], abortController: r.abortController, priorMtime: r.priorMtime, ...r.storageV5 !== void 0 && { storageV5: r.storageV5 } };
  return e.register(_), l;
}
function ae(e, r, l, _) {
  _.update(e, (p) => {
    let o = new Set(p.filesTouched), n = l.filter((s) => !o.has(s) && o.add(s));
    if (r.text === "" && r.toolUseCount === 0 && n.length === 0) return p;
    return { ...p, phase: n.length > 0 ? "updating" : p.phase, filesTouched: n.length > 0 ? [...p.filesTouched, ...n] : p.filesTouched, turns: p.turns.slice(-(pe - 1)).concat(r) };
  });
}
function ie(e, r) {
  (0, import_chunk_bzyb60p0.Uie)(r, e, "completed"), (0, import_chunk_cqa9hrgx.u)("task_dream");
}
function me(e, r) {
  (0, import_chunk_bzyb60p0.Uie)(r, e, "failed"), (0, import_chunk_cqa9hrgx.m)("task_dream", "task_dream_failed");
}
var w = null, ge = 6e5, ye = new RegExp(`^\\s*(?:${import_chunk_ar6xc1fx.K2o})\\b`, "i"), le = { minHours: 24, minSessions: 5 };
function _e() {
  let e = (0, import_chunk_865at33z.b)("tengu_onyx_plover", null);
  return { minHours: typeof e?.minHours === "number" && Number.isFinite(e.minHours) && e.minHours > 0 ? e.minHours : le.minHours, minSessions: typeof e?.minSessions === "number" && Number.isFinite(e.minSessions) && e.minSessions > 0 ? e.minSessions : le.minSessions };
}
function we() {
  if ((0, import_chunk_t7fzcstv.br)() !== null) return false;
  if ((0, import_chunk_3t7ve0wy.ste)()) return false;
  if (!(0, import_chunk_865at33z.by)()) return false;
  if ((0, import_chunk_trq47kfh.wwe)()) return false;
  return O8t();
}
function ke() {
  return false;
}
function lva(e) {
  let r = 0, l = false, _ = /* @__PURE__ */ new Set();
  X.of(e).runner = async function(o, n) {
    let s = _e(), c = ke();
    if (!c && !we()) return;
    let v;
    try {
      v = await (0, import_chunk_02b35jvk.q8t)(void 0, o.toolUseContext.storageV5);
    } catch (i) {
      (0, import_chunk_w578pjby.t)(`[autoDream] readLastConsolidatedAt failed: ${(0, import_chunk_jv7av99m.d)(i)}`);
      return;
    }
    let V = (Date.now() - v) / 36e5;
    if (!c && V < s.minHours) return;
    let K = Date.now() - r;
    if (!c && K < ge) {
      (0, import_chunk_w578pjby.t)(`[autoDream] scan throttle \u2014 time-gate passed but last scan was ${Math.round(K / 1e3)}s ago`);
      return;
    }
    r = Date.now();
    let x, h;
    try {
      x = (0, import_chunk_hsqa3g9e.Dy)((0, import_chunk_f9x2f6cx.Te)()), h = await (0, import_chunk_02b35jvk.BTa)(v, o.toolUseContext.storageV5, x);
    } catch (i) {
      (0, import_chunk_w578pjby.t)(`[autoDream] listSessionsTouchedSince failed: ${(0, import_chunk_jv7av99m.d)(i)}`);
      return;
    }
    let de = (0, import_chunk_f9x2f6cx.W)();
    if (h = h.filter((i) => i !== de), !c && h.length < s.minSessions) {
      (0, import_chunk_w578pjby.t)(`[autoDream] skip \u2014 ${h.length} sessions since last consolidation, need ${s.minSessions}`), (0, import_chunk_y53wbr8a.a)("tengu_auto_dream_skipped", { reason: (0, import_chunk_78g0060s.S)("sessions"), session_count: h.length, min_required: s.minSessions });
      return;
    }
    let B = (0, import_chunk_ar6xc1fx.q2o)(o.toolUseContext.getAppState().toolPermissionContext, (0, import_chunk_865at33z.Ede)());
    if (B !== void 0) {
      if ((0, import_chunk_w578pjby.t)(`[autoDream] skip \u2014 ${(0, import_chunk_ar6xc1fx.Pzr)(B)} would refuse memory writes`), (0, import_chunk_y53wbr8a.a)("tengu_auto_dream_skipped", { reason: (0, import_chunk_78g0060s.S)("permission_rule") }), n !== void 0) {
        let i = (0, import_chunk_ar6xc1fx.V2o)(e, B, (0, import_chunk_865at33z.wc)());
        if (i !== void 0) n((0, import_chunk_bzyb60p0.Pt)(i, "warning"));
      }
      return;
    }
    let T;
    if (c) T = v;
    else {
      try {
        T = await (0, import_chunk_02b35jvk.UTa)(o.toolUseContext.storageV5);
      } catch (i) {
        (0, import_chunk_w578pjby.t)(`[autoDream] lock acquire failed: ${(0, import_chunk_jv7av99m.d)(i)}`);
        return;
      }
      if (T === null) {
        (0, import_chunk_y53wbr8a.a)("tengu_auto_dream_skipped", { reason: (0, import_chunk_78g0060s.S)("lock") });
        return;
      }
    }
    let A = (0, import_chunk_865at33z.wc)(), I = void 0, g = I === "unplaced" || I === "capped" ? void 0 : I;
    if (g === "newer" || g !== void 0 && "unreadable" in g) {
      if (!c) await (0, import_chunk_02b35jvk.Y8t)(T, o.toolUseContext.storageV5);
      if (g !== "newer") {
        if ((0, import_chunk_w578pjby.t)(`[autoDream] skipped: the memory items could not be read (cause: ${g.unreadable}); the warning above says why and what resumes consolidation`), (0, import_chunk_y53wbr8a.a)("tengu_auto_dream_skipped", { reason: (0, import_chunk_78g0060s.S)("items_unreadable") }), w !== null && n !== void 0 && !_.has(g.unreadable)) _.add(g.unreadable), n?.((0, import_chunk_bzyb60p0.Pt)(await w.unreadableItemsNotice(g.unreadable, A), "warning"));
        return;
      }
      if ((0, import_chunk_w578pjby.t)("[autoDream] skip \u2014 newer item record"), (0, import_chunk_y53wbr8a.a)("tengu_auto_dream_skipped", { reason: (0, import_chunk_78g0060s.S)("record_newer") }), w !== null && n !== void 0 && !l) l = true, n?.((0, import_chunk_bzyb60p0.Pt)(w.NEWER_RECORD_NOTICE, "warning"));
      return;
    }
    {
      let i = [], L = await (0, import_chunk_g03qj0bk.apo)(["--no-config", "--no-ignore", "--hidden", "--text", "--no-filename", "--no-line-number", "--fixed-strings", "--glob", "*.jsonl*", "--regexp", '"type":"hybrid-organization"'], x, AbortSignal.timeout(6e4), (C) => {
        i.push(...C);
      }).then((C) => C === "complete" ? void 0 : C, import_chunk_jv7av99m.d);
      if (L !== void 0) (0, import_chunk_w578pjby.t)(`[autoDream] the search for marks of an organization sign-in failed: ${L}`);
      let U = L !== void 0 ? "hybrid_organization_check_failed" : !(0, import_chunk_p1ewvgeh.p4)("session_provider", (0, import_chunk_0h9rvfx7.ime)((0, import_chunk_0h9rvfx7.nvt)(i.join(`
`)), true)) ? "other_hybrid_organization" : void 0;
      if (U !== void 0) {
        if (!c) await (0, import_chunk_02b35jvk.Y8t)(T, o.toolUseContext.storageV5);
        (0, import_chunk_w578pjby.t)(`[autoDream] skip \u2014 ${U}`), (0, import_chunk_y53wbr8a.a)("tengu_auto_dream_skipped", { reason: (0, import_chunk_78g0060s.f)(U) });
        return;
      }
    }
    let Y = (0, import_chunk_p1ewvgeh.twe)();
    (0, import_chunk_w578pjby.t)(`[autoDream] firing \u2014 ${V.toFixed(1)}h since last, ${h.length} sessions to review`), (0, import_chunk_y53wbr8a.a)("tengu_auto_dream_fired", { hours_since: Math.round(V), sessions_since: h.length, team_memory_enabled: Y });
    let { taskRegistry: N } = o.toolUseContext, R = new AbortController(), P = se(N, { sessionsReviewing: h.length, priorMtime: T, abortController: R, storageV5: o.toolUseContext.storageV5 }), F = "fork";
    try {
      let i = `

**Tool constraints for this run:** Shell access is restricted to read-only commands (\`ls\`, \`find\`, \`grep\`, \`cat\`, \`stat\`, \`wc\`, \`head\`, \`tail\`, and similar) plus deleting \`.md\` files inside the memory directory (outside protected subdirectories like \`.git\` or \`agents\`; \`rm\` takes no flags except \`-f\`). Anything else that writes, redirects to a file, or modifies state will be denied. Plan your exploration with this in mind.

Sessions since last consolidation (${h.length}):
${h.map((y) => `- ${y}`).join(`
`)}`, L = false, U = ne(A, x, i, Y, (0, import_chunk_p1ewvgeh.ASo)(), false, (0, import_chunk_p1ewvgeh.BUn)()), C = De(P, N, A), z = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Set(), Q = false, Z = false, q = false, M, ee = (0, import_chunk_mzmcvr6c.qS)("auto_dream"), te = () => (0, import_chunk_1ek4hhs6.yg)((0, import_chunk_1ek4hhs6.fdl)(x), [], ee);
      te();
      try {
        M = await (0, import_chunk_bzyb60p0.yH)({ promptMessages: [(0, import_chunk_bzyb60p0.Me)({ content: U })], cacheSafeParams: (0, import_chunk_bzyb60p0.hfe)(o), canUseTool: (0, import_chunk_ar6xc1fx.Y2o)(A, g !== void 0 ? w?.keptItemsOf(g) : void 0, { fork: "dream", onWriteAllowed: (y, H) => z.set(H, y) }), querySource: "auto_dream", forkLabel: "auto_dream", skipTranscript: true, overrides: { abortController: R, agentId: ee }, onMessage: (y) => {
          if (C(y), be(y, G), y.type === "user") te();
          if (y.type === "assistant") Q = y.isApiErrorMessage === true;
        }, skipCacheWrite: (0, import_chunk_bzyb60p0.RIn)() }), Z = true, q = !R.signal.aborted && !Q;
      } finally {
        let y = new Set([...z].filter(([k]) => !q || !G.has(k)).map(([, k]) => k)), H = new Set([...z].filter(([k]) => q && G.has(k)).map(([, k]) => k));
        if (w !== null && I === "capped") await w.deferCappedRunWrites({ memoryDir: A, dreamWrote: y, mayHaveWritten: H });
        if (w !== null && g !== void 0) {
          let k = await w.settleDreamItems({ memoryDir: A, before: g, dreamWrote: y, mayHaveWritten: H });
          if ((k.skipped || k.failed) && Z && !R.signal.aborted && !c && await w.claimLockGiveBack(A)) await (0, import_chunk_02b35jvk.Y8t)(T, o.toolUseContext.storageV5);
        }
      }
      F = "completion", ie(P, N);
      let E = o.toolUseContext.taskRegistry.get(P), ue = J(E) ? E.filesTouched.length : 0;
      if (J(E) && E.filesTouched.length > 0) n?.({ ...(0, import_chunk_bzyb60p0.noo)(E.filesTouched), verb: "Improved" }), await (0, import_chunk_ar6xc1fx.xzr)(o.toolUseContext, { source: "dream", summary: `consolidated ${E.filesTouched.length} ${(0, import_chunk_7cfjrnwy.O)(E.filesTouched.length, "memory file")}`, paths: E.filesTouched });
      (0, import_chunk_w578pjby.t)(`[autoDream] completed \u2014 cache: read=${M.totalUsage.cache_read_input_tokens} created=${M.totalUsage.cache_creation_input_tokens}`), (0, import_chunk_y53wbr8a.a)("tengu_auto_dream_completed", { cache_read: M.totalUsage.cache_read_input_tokens, cache_created: M.totalUsage.cache_creation_input_tokens, output: M.totalUsage.output_tokens, sessions_reviewed: h.length, files_touched_count: ue, team_memory_enabled: Y, account_memory_line_rendered: false });
    } catch (i) {
      if (R.signal.aborted) {
        (0, import_chunk_w578pjby.t)("[autoDream] aborted by user");
        return;
      }
      if ((0, import_chunk_w578pjby.t)(`[autoDream] ${F} failed: ${(0, import_chunk_jv7av99m.d)(i)}`), (0, import_chunk_y53wbr8a.a)("tengu_auto_dream_failed", { phase: (0, import_chunk_78g0060s.f)(F), error_class: (0, import_chunk_jv7av99m.A$)((0, import_chunk_jv7av99m.D)(i)) }), F === "fork") me(P, N), await (0, import_chunk_02b35jvk.Y8t)(T, o.toolUseContext.storageV5);
    }
  };
}
function be(e, r) {
  if (e.type !== "user" || e.toolDenialKind !== void 0 || typeof e.message.content === "string") return;
  for (let l of e.message.content) if (l.type === "tool_result" && l.is_error === true) r.add(l.tool_use_id);
}
function De(e, r, l) {
  return (_) => {
    if (_.type !== "assistant") return;
    let p = "", o = 0, n = [];
    for (let s of _.message.content) if (s.type === "text") p += s.text;
    else if (s.type === "tool_use") {
      if (o++, s.name === import_chunk_rb36kwbn.lt || s.name === import_chunk_rb36kwbn.Dt) {
        let c = s.input;
        if (typeof c.file_path === "string") n.push(c.file_path);
      } else if (import_chunk_wwft95x8.dp.includes(s.name)) {
        let c = s.input;
        if (typeof c.command === "string" && ye.test(c.command)) for (let v of c.command.matchAll(/"[^"]*\.md"|'[^']*\.md'|(?:\/|[A-Za-z]:[\\/])\S*\.md\b/g)) n.push(v[0].replace(/^["']|["']$/g, ""));
      }
    }
    ae(e, { text: p.trim(), toolUseCount: o }, n.filter((s) => (0, import_chunk_ar6xc1fx.het)(s, l)), r);
  };
}
async function dva(e, r) {
  await X.of(e.toolUseContext.session.host).runner?.(e, r);
}
