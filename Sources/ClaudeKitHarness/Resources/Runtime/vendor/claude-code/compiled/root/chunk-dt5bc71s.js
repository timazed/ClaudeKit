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
var chunk_dt5bc71s_exports = {};
__export(chunk_dt5bc71s_exports, {
  KXt: () => KXt,
  mTe: () => mTe,
  n9o: () => n9o,
  o1a: () => o1a,
  r1a: () => r1a
});
module.exports = __toCommonJS(chunk_dt5bc71s_exports);
var n9o = "com.anthropic.cu.screen", r1a = " (dialog)", mTe = { clipboardRead: false, clipboardWrite: false, systemKeyCombos: false };
function r(e) {
  return e.toLowerCase().split(/[\\/]/).pop() ?? "";
}
function d(e) {
  let o = r(e), n = [o, o.replace(/[-.]?\d+(\.\d+)*$/, "")], t = e.toLowerCase();
  if (t.startsWith("/snap/bin/") && o.includes(".")) n.push(o.split(".")[0]);
  else if (t.includes("/exports/bin/") && o.includes(".")) n.push(o.split(".").pop() ?? o);
  return n;
}
var i = /* @__PURE__ */ new Set(["com.apple.Terminal", "com.googlecode.iterm2", "com.microsoft.VSCode", "dev.warp.Warp-Stable", "com.github.wez.wezterm", "org.alacritty", "io.alacritty", "net.kovidgoyal.kitty", "co.zeit.hyper", "com.mitchellh.ghostty", "com.todesktop.230313mzl4w4u92", "com.vscodium", "com.exafunction.windsurf", "dev.zed.Zed", "org.tabby", "com.jetbrains.intellij", "com.jetbrains.pycharm", "com.raphaelamorim.rio", "org.contourterminal.Contour", "com.neovide.neovide"]), s = /* @__PURE__ */ new Set(["com.apple.finder"]), a = /* @__PURE__ */ new Set(["com.apple.systempreferences"]), l = /* @__PURE__ */ new Set(["cmd.exe", "powershell.exe", "pwsh.exe", "wt.exe", "windowsterminal.exe", "wsl.exe", "bash.exe", "conhost.exe", "openconsole.exe", "xshell.exe", "code.exe", "cursor.exe", "vscodium.exe", "windsurf.exe", "zed.exe", "alacritty.exe", "wezterm-gui.exe", "warp.exe", "hyper.exe", "tabby.exe", "idea64.exe", "pycharm64.exe", "conemu.exe", "conemu64.exe", "rio.exe", "contour.exe", "pterm.exe", "putty.exe", "puttytel.exe", "mobaxterm.exe", "mintty.exe", "ttermpro.exe", "securecrt.exe", "mremoteng.exe", "mlterm.exe", "gvim.exe", "neovide.exe", "autohotkey.exe", "autohotkey32.exe", "autohotkey64.exe", "autohotkeyu32.exe", "autohotkeyu64.exe", "regedit.exe"]), p = ["Microsoft.WindowsTerminal_", "Microsoft.WindowsTerminalPreview_", "Microsoft.PowerShell_"], u = /* @__PURE__ */ new Set(["explorer.exe"]), c = /* @__PURE__ */ new Set(["systemsettings.exe"]), g = /* @__PURE__ */ new Set(["gnome-terminal-server", "kgx", "ptyxis", "konsole", "yakuake", "xfce4-terminal", "mate-terminal", "lxterminal", "qterminal", "terminator", "tilix", "guake", "tilda", "xterm", "uxterm", "rxvt", "urxvt", "urxvtd", "st", "alacritty", "kitty", "wezterm-gui", "foot", "ghostty", "warp", "hyper", "tabby", "code", "codium", "cursor", "windsurf", "zed", "idea", "pycharm", "emacs", "neovide", "putty", "puttytel", "intellij-idea-community", "intellij-idea-ultimate", "pycharm-community", "pycharm-professional", "blackbox", "wezterm", "org.gnome.console", "gnome-builder", "builder", "spyder", "spyder3", "idle", "idle3", "idle-python", "thonny", "jupyter-qtconsole", "sakura", "terminology", "roxterm", "cool-retro-term", "contour", "rio", "autokey-gtk", "autokey-qt", "gnome-session-properties", "mate-session-properties", "xfce4-session-settings", "lxqt-config-session", "dconf-editor", "deepin-terminal", "io.elementary.terminal", "mlterm", "zutty", "pterm"]), m = /* @__PURE__ */ new Set(["nautilus", "dolphin", "nemo", "thunar", "caja", "pcmanfm", "pcmanfm-qt"]), b = /* @__PURE__ */ new Set(["gnome-control-center", "systemsettings", "cinnamon-settings", "xfce4-settings-manager", "mate-control-center", "gnome-tweaks", "org.gnome.tweaks"]), S = ["windows.immersivecontrolpanel_"], h = /* @__PURE__ */ new Set([...i, ...s, ...a]);
function KXt(e) {
  if (i.has(e)) return "shell";
  if (s.has(e)) return "filesystem";
  if (a.has(e)) return "system_settings";
  if (p.some((n) => e.startsWith(n))) return "shell";
  if (S.some((n) => e.startsWith(n))) return "system_settings";
  let o = r(e);
  if (l.has(o)) return "shell";
  if (u.has(o)) return "filesystem";
  if (c.has(o)) return "system_settings";
  for (let n of d(e)) {
    if (g.has(n)) return "shell";
    if (m.has(n)) return "filesystem";
    if (b.has(n)) return "system_settings";
  }
  return null;
}
function o1a(e) {
  return KXt(e) !== null;
}
