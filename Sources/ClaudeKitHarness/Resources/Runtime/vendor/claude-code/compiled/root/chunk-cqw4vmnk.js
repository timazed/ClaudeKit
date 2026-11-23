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
var chunk_cqw4vmnk_exports = {};
__export(chunk_cqw4vmnk_exports, {
  n2s: () => n2s
});
module.exports = __toCommonJS(chunk_cqw4vmnk_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_paah1wya = require("/$bunfs/root/chunk-paah1wya.js");
var import_chunk_s73318k8 = require("/$bunfs/root/chunk-s73318k8.js");
var import_chunk_6fvsq616 = require("/$bunfs/root/chunk-6fvsq616.js");
var import_chunk_wvchre07 = require("/$bunfs/root/chunk-wvchre07.js");
var import_chunk_vs99e3g5 = require("/$bunfs/root/chunk-vs99e3g5.js");
var import_chunk_9e7jz16m = require("/$bunfs/root/chunk-9e7jz16m.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_ee10yhqw = require("/$bunfs/root/chunk-ee10yhqw.js");
var import_chunk_cak1hmy1 = require("/$bunfs/root/chunk-cak1hmy1.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
function n2s({ configHome: _, storageV5: h, origin: d, onDone: g }) {
  let s = d === "first_run", t = (0, import_chunk_9e7jz16m.EZe)(g, { selfOpened: s, onCancelled: (n) => (0, import_chunk_cqa9hrgx.l)("ccr_home_seed_mode_prompt", n ? "cancelled_saving" : "cancelled") });
  (0, import_chunk_6fvsq616.In)("confirm:no", () => c("not_now"), { context: "Confirmation", isActive: s && !t.decided }), (0, import_chunk_bs4h6795.H)(() => {
    (0, import_chunk_y53wbr8a.a)("tengu_home_settings_mode_prompt_shown", { origin: (0, import_chunk_78g0060s.f)(d) });
  }, [d]);
  function c(n) {
    if (!t.take()) return;
    if ((0, import_chunk_y53wbr8a.a)("tengu_home_settings_mode_prompt", { choice: (0, import_chunk_78g0060s.f)(n), origin: (0, import_chunk_78g0060s.f)(d) }), n === "not_now") {
      (0, import_chunk_cqa9hrgx.l)("ccr_home_seed_mode_prompt", "dismissed"), t.handBack(n);
      return;
    }
    (0, import_chunk_bzyb60p0.ueo)(n, h).then((p) => {
      if (t.settled()) return;
      switch (p) {
        case "refused":
          (0, import_chunk_cqa9hrgx.m)("ccr_home_seed_mode_prompt", "not_written"), t.handBack("not_saved");
          return;
        case "not_stored":
          (0, import_chunk_cqa9hrgx.m)("ccr_home_seed_mode_prompt", "not_stored"), t.handBack("not_stored");
          return;
        case "unconfirmed":
          (0, import_chunk_cqa9hrgx.l)("ccr_home_seed_mode_prompt", "unconfirmed");
          break;
        case "written":
          if (n === "forward") (0, import_chunk_cqa9hrgx.u)("ccr_home_seed_mode_prompt");
          else (0, import_chunk_cqa9hrgx.l)("ccr_home_seed_mode_prompt", "declined");
          break;
      }
      t.handBack(n);
    }, (p) => {
      if ((0, import_chunk_k449cc64.i)(p), t.settled()) return;
      (0, import_chunk_cqa9hrgx.m)("ccr_home_seed_mode_prompt", "write_failed"), t.handBack("not_saved");
    });
  }
  if (t.decided) return t.exitHintShowing ? (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, italic: true, children: ["Press ", t.exit.keyName, " again to exit"] }) : null;
  return (0, import_chunk_a46xeenj.o)(import_chunk_vs99e3g5.Oe, { title: "Use this machine's settings in cloud sessions?", onCancel: () => c("not_now"), isCancelActive: !s, inputGuide: t.exit.pending ? (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["Press ", t.exit.keyName, " again to exit"] }) : (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "enter", action: "confirm" }), (0, import_chunk_a46xeenj.e)(import_chunk_cak1hmy1.rs, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "skip for now" })] }), children: [(0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, children: (0, import_chunk_xfj2cwfv.wr)(_) }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "Send the CLAUDE.md, rules, output styles, and preferences in this folder, plus your portable permission rules, into each claude --cloud session. It skips credential files and files your Read rules or sandbox settings deny (your preferences and permission rules are still sent), never sends hooks, environment variables, MCP servers, or plugins, and copies no file from outside this folder, even through a link or an @import. Deny and ask rules can go with their paths; file rules need a ~/ or relative path. What is sent is encrypted at rest, and each launch shows whether it was sent." }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "Without this, cloud sessions keep their own default settings, as they do today. Yes and No are saved for this machine; /config changes it later, from a session started without --cloud." })] }), (0, import_chunk_a46xeenj.e)(import_chunk_s73318k8.ct, { options: [{ label: "Yes, send my settings", value: "forward" }, { label: "No, keep them on this machine", value: "keep_local" }, { label: "Not now", value: "not_now" }], defaultFocusValue: "not_now", hideIndexes: s, disablePrintableKeybindings: s, isDisabled: t.choicesDisabled, refuseInput: t.refuseInput, onChange: c, onCancel: () => c("not_now") })] });
}
