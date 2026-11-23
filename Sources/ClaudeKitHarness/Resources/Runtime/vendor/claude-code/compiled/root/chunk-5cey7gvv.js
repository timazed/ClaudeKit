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
var chunk_5cey7gvv_exports = {};
__export(chunk_5cey7gvv_exports, {
  wC: () => wC
});
module.exports = __toCommonJS(chunk_5cey7gvv_exports);
class n {
  proc;
  constructor(r = process) {
    this.proc = r;
  }
  isJetBrainsIdeTerminal() {
    return this.proc.env.TERMINAL_EMULATOR === "JetBrains-JediTerm";
  }
  isMicrosoftWindowsTerminal() {
    return this.proc.platform === "win32" && !!this.proc.env.WT_SESSION;
  }
  isGhostty() {
    return this.proc.env.TERM === "xterm-ghostty" || this.proc.env.TERM_PROGRAM === "ghostty";
  }
  isVteBasedTerminal(r) {
    let e = this.proc.env;
    return t(e.VTE_VERSION) && (r === "vte-based" || r === "gnome-terminal") && (e.TERM ?? "").trim().startsWith("xterm") && !t(e.TMUX) && !t(e.STY) && e.ZELLIJ === void 0 && !t(e.XTERM_VERSION) && !t(e.ALACRITTY_WINDOW_ID) && !t(e.ALACRITTY_LOG) && !t(e.KITTY_WINDOW_ID) && !t(e.WEZTERM_PANE) && !t(e.INSIDE_EMACS) && !t(e.VIM_TERMINAL) && !t(e.NVIM);
  }
  isMintty() {
    if (this.proc.env.TERM_PROGRAM === "mintty") return true;
    if (this.proc.platform === "win32" && this.proc.env.MSYSTEM) return true;
    return false;
  }
  windowsConsoleSupportsVirtualTerminalSequences() {
    if (this.isMicrosoftWindowsTerminal()) return true;
    if (this.proc.platform === "win32" && this.proc.env.TERM_PROGRAM === "vscode" && this.proc.env.TERM_PROGRAM_VERSION) return true;
    if (this.isMintty()) return true;
    return false;
  }
  hasGeometricShapesInkBleedBug() {
    return this.isGhostty();
  }
  hasErasedRowsStayJoinedBug() {
    return this.proc.env.TERM === "xterm-ghostty";
  }
  hasUnknownSequencePrintingBug(r) {
    return this.isVteBasedTerminal(r) && Number.parseInt(this.proc.env.VTE_VERSION ?? "", 10) < 5300;
  }
  hasOsc52ClipboardUtf8Bug() {
    if (this.proc.env.TERM_PROGRAM !== "vscode") return false;
    let r = i(this.proc.env.TERM_PROGRAM_VERSION);
    return r !== null && r >= 1123e3 && r < 1125e3;
  }
  macCmdClickArrivesWithoutSgrModifierBit() {
    return this.proc.platform === "darwin" && (this.proc.env.TERM_PROGRAM === "ghostty" || this.proc.env.TERM_PROGRAM === "WarpTerminal");
  }
  rendersItalicAsStandout() {
    return (this.proc.env.TERM ?? "").startsWith("screen");
  }
}
function i(r) {
  if (!r) return null;
  let e = /^(\d+)\.(\d+)\.(\d+)/.exec(r);
  if (!e) return null;
  return +e[1] * 1e6 + +e[2] * 1e3 + +e[3];
}
function t(r) {
  return (r ?? "").trim() !== "";
}
var wC = new n();
