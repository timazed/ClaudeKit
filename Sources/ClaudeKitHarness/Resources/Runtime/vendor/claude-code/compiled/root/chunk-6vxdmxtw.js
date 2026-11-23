const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __using = (stack, value, async) => {
  if (value != null) {
    if (typeof value !== "object" && typeof value !== "function") __typeError("Object expected");
    var dispose, inner;
    if (async) dispose = value[__knownSymbol("asyncDispose")];
    if (dispose === void 0) {
      dispose = value[__knownSymbol("dispose")];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") __typeError("Object not disposable");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    stack.push([async, dispose, value]);
  } else if (async) {
    stack.push([async]);
  }
  return value;
};
var __callDispose = (stack, error, hasError) => {
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s, m2, _2) {
    return _2 = Error(m2), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s, _2;
  };
  var fail = (e) => error = hasError ? new E(e, error, "An error was suppressed during disposal") : (hasError = true, e);
  var next = (it2) => {
    while (it2 = stack.pop()) {
      try {
        var result = it2[1] && it2[1].call(it2[2]);
        if (it2[0]) return Promise.resolve(result).then(next, (e) => (fail(e), next()));
      } catch (e) {
        fail(e);
      }
    }
    if (hasError) throw error;
  };
  return next();
};
var chunk_6vxdmxtw_exports = {};
__export(chunk_6vxdmxtw_exports, {
  $8r: () => $8r,
  Ani: () => Ani,
  BAn: () => BAn,
  Btt: () => Btt,
  Cni: () => Cni,
  Eni: () => Eni,
  F8r: () => F8r,
  GAn: () => GAn,
  L8r: () => L8r,
  N8r: () => N8r,
  Oni: () => Oni,
  Pni: () => Pni,
  Rni: () => Rni,
  Sni: () => Sni,
  Tni: () => Tni,
  U8r: () => U8r,
  VAn: () => VAn,
  WAn: () => WAn,
  Wtt: () => Wtt,
  YDt: () => YDt,
  a1a: () => a1a,
  a9o: () => a9o,
  bni: () => bni,
  c1a: () => c1a,
  c9o: () => c9o,
  d1a: () => d1a,
  d9o: () => d9o,
  f1a: () => f1a,
  f9o: () => f9o,
  fH: () => fH,
  i9o: () => i9o,
  jAn: () => jAn,
  jXl: () => jXl,
  kni: () => kni,
  l1a: () => l1a,
  l9o: () => l9o,
  m1a: () => m1a,
  o9o: () => o9o,
  p1a: () => p1a,
  pUe: () => pUe,
  por: () => por,
  r9o: () => r9o,
  s9o: () => s9o,
  u1a: () => u1a,
  u9o: () => u9o,
  uor: () => uor,
  uq: () => uq,
  vni: () => vni,
  wW: () => wW,
  wni: () => wni,
  xni: () => xni,
  yni: () => yni,
  zAn: () => zAn
});
module.exports = __toCommonJS(chunk_6vxdmxtw_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_52ckkfmm = require("/$bunfs/root/chunk-52ckkfmm.js");
var import_chunk_202wmj18 = require("/$bunfs/root/chunk-202wmj18.js");
var import_chunk_xc24z890 = require("/$bunfs/root/chunk-xc24z890.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_hj4mak61 = require("/$bunfs/root/chunk-hj4mak61.js");
var import_chunk_vrv1km14 = require("/$bunfs/root/chunk-vrv1km14.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var Ue = (0, import_chunk_w1d7ygsk.V)(function(So, Fe) {
  var _o = (0, import_chunk_w1d7ygsk.ft)("path");
  {
    let e = (0, import_chunk_xc24z890.Hzi)();
    Fe.exports = { isSupported: true, ...e };
  }
});
function et(e) {
  if (e === "browser" || e === "trading" || e === "remote_desktop") return "read";
  if (e === "terminal" || e === "shell") return "click";
  return "full";
}
var me = /* @__PURE__ */ new Set(["com.apple.Safari", "com.apple.SafariTechnologyPreview", "com.google.Chrome", "com.google.Chrome.beta", "com.google.Chrome.dev", "com.google.Chrome.canary", "com.microsoft.edgemac", "com.microsoft.edgemac.Beta", "com.microsoft.edgemac.Dev", "com.microsoft.edgemac.Canary", "org.mozilla.firefox", "org.mozilla.firefoxdeveloperedition", "org.mozilla.nightly", "app.zen-browser.zen", "io.gitlab.librewolf-community.librewolf", "org.waterfoxproject.waterfox", "net.mullvad.mullvadbrowser", "org.mozilla.floorp", "org.chromium.Thorium", "org.qutebrowser.qutebrowser", "org.chromium.Chromium", "com.brave.Browser", "com.brave.Browser.beta", "com.brave.Browser.nightly", "com.operasoftware.Opera", "com.operasoftware.OperaGX", "com.operasoftware.OperaDeveloper", "com.vivaldi.Vivaldi", "company.thebrowser.Browser", "company.thebrowser.dia", "org.torproject.torbrowser", "com.duckduckgo.macos.browser", "ru.yandex.desktop.yandex-browser", "ai.perplexity.comet", "com.openai.atlas", "com.sigmaos.sigmaos.macos", "com.kagi.kagimacOS", "com.talon-sec.Work", "io.island.Island"]), tt = /* @__PURE__ */ new Set(["com.apple.Terminal", "com.googlecode.iterm2", "dev.warp.Warp-Stable", "dev.warp.Warp-Beta", "com.github.wez.wezterm", "org.alacritty", "io.alacritty", "net.kovidgoyal.kitty", "co.zeit.hyper", "com.mitchellh.ghostty", "org.tabby", "com.termius-dmg.mac", "com.microsoft.VSCode", "com.microsoft.VSCodeInsiders", "com.vscodium", "com.todesktop.230313mzl4w4u92", "com.exafunction.windsurf", "dev.zed.Zed", "dev.zed.Zed-Preview", "com.jetbrains.intellij", "com.jetbrains.intellij.ce", "com.jetbrains.pycharm", "com.jetbrains.pycharm.ce", "com.jetbrains.WebStorm", "com.jetbrains.CLion", "com.jetbrains.goland", "com.jetbrains.rubymine", "com.jetbrains.PhpStorm", "com.jetbrains.datagrip", "com.jetbrains.rider", "com.jetbrains.AppCode", "com.jetbrains.rustrover", "com.jetbrains.fleet", "com.google.android.studio", "com.axosoft.gitkraken", "com.sublimetext.4", "com.sublimetext.3", "org.vim.MacVim", "com.neovim.neovim", "com.neovide.neovide", "org.gnu.Emacs", "com.apple.dt.Xcode", "org.eclipse.platform.ide", "org.netbeans.ide", "com.microsoft.visual-studio", "org.R-project.R", "com.apple.ScriptEditor2", "com.apple.Automator", "com.apple.shortcuts", "com.latenightsw.ScriptDebugger8", "com.latenightsw.ScriptDebugger7", "com.latenightsw.ScriptDebugger6", "com.latenightsw.ScriptDebugger5", "com.latenightsw.ScriptDebugger", "com.raphaelamorim.rio", "org.contourterminal.Contour", "com.stairways.keyboardmaestro.editor", "com.stairways.keyboardmaestro.engine", "org.hammerspoon.Hammerspoon", "com.hegenberg.BetterTouchTool", "com.hegenberg.bettertouchtool-setapp", "com.hegenberg.BetterTouchTool-setapp", "org.pqrs.Karabiner-Elements.Settings", "org.pqrs.Karabiner-Elements.Preferences"]), rt = /* @__PURE__ */ new Set(["com.webull.desktop.v1", "com.webull.trade.mac.v1", "com.tastytrade.desktop", "com.tradingview.tradingviewapp.desktop", "com.fidelity.activetrader", "com.fmr.activetrader", "com.install4j.5889-6375-8446-2021", "com.binance.BinanceDesktop", "com.electron.exodus", "org.pythonmac.unspecified.Electrum", "com.ledger.live", "io.trezor.TrezorSuite"]), ot = /* @__PURE__ */ new Set(["com.microsoft.rdc.macos", "com.apple.ScreenSharing", "com.apple.ScreenContinuity", "com.vmware.fusion", "org.virtualbox.app.VirtualBoxVM", "com.parallels.desktop.console", "com.parallels.desktop.appstore", "com.utmapp.UTM", "com.citrix.receiver.nomas", "com.citrix.receiver.icaviewer.mac", "com.vmware.horizon", "com.omnissa.horizon.client.mac", "com.teamviewer.TeamViewer", "com.philandro.anydesk", "com.carriez.rustdesk", "com.realvnc.vncviewer", "com.apple.RemoteDesktop", "com.amazon.workspaces", "com.nomachine.nxdock", "com.devolutions.remotedesktopmanager", "com.lemonmojo.RoyalTSX.App", "com.moonlight-stream.Moonlight", "com.p5sys.jump.mac.viewer"]), nt = ["com.edovia.screens", "com.splashtop.", "tv.parsec.", "com.parallels.winapp.", "com.parallels.vm"], yni = /* @__PURE__ */ new Set(["com.apple.TV", "com.apple.Music", "com.apple.iBooksX", "com.apple.podcasts", "com.spotify.client", "com.amazon.music", "com.tidal.desktop", "com.deezer.deezer-desktop", "com.pandora.desktop", "com.electron.pocket-casts", "au.com.shiftyjelly.PocketCasts", "tv.plex.desktop", "tv.plex.htpc", "tv.plex.plexamp", "com.amazon.aiv.AIVApp", "net.kovidgoyal.calibre", "com.amazon.Kindle", "com.amazon.Lassen", "com.kobo.desktop.Kobo", "org.qbittorrent.qBittorrent", "org.m0k.transmission", "org.deluge", "com.biglybt", "io.webtorrent.webtorrent", "com.bittorrent.uTorrent", "com.bitTorrent.utweb", "com.bittorrent.BitTorrent", "com.frostwire.FrostWire"]), at = ["netflix", "disney+", "hulu", "prime video", "apple tv", "peacock", "paramount+", "tubi", "crunchyroll", "vudu", "kindle", "apple books", "kobo", "play books", "calibre", "libby", "readium", "audible", "libro.fm", "speechify", "spotify", "apple music", "amazon music", "youtube music", "tidal", "deezer", "pandora", "pocket casts", "torrent", "transmission", "deluge", "biglybt", "tixati", "frostwire", "naver", "reddit", "sony music", "vegas pro", "pitchfork", "economist", "nytimes"], st = /* @__PURE__ */ new Set(["plex.exe", "plexamp.exe", "plex htpc.exe", "plexmediaplayer", "plexamp", "plex-htpc", "plex-desktop", "plexdesktop", "plexhtpc"]), fe = /* @__PURE__ */ new Set(["com.apple.inputmethod.assistivecontrol", "com.apple.assistivecontrol"]), q = /* @__PURE__ */ new Set(["osk.exe", "tabtip.exe", "textinputhost.exe", "windowsinternal.composableshell.experiences.textinput.inputapp.exe"]), it = /* @__PURE__ */ new Set(["ckeyboard.exe", "hvk.exe", "freevk.exe", "click-n-type.exe"]), lt = /* @__PURE__ */ new Set(["onboard", "florence", "xvkbd", "matchbox-keyboard", "kvkbd", "maliit-keyboard", "squeekboard", "wvkbd-mobintl"]), ct = ["onscreenkeyboard", "accessibilitykeyboard", "keyboardviewer"], dt = /* @__PURE__ */ new Set(["assistive control", "assistivecontrol"]), pt = /* @__PURE__ */ new Set([...fe, ...q, ...[...q].map((e) => e.replace(/\.exe$/, ""))]);
function BAn(e, r) {
  let o = r.toLowerCase();
  if (e) {
    let a = e.toLowerCase();
    if (fe.has(a) || q.has(Btt(a)) || it.has(Btt(a)) || T(a).some((i) => lt.has(i))) return true;
  } else if (pt.has(o)) return true;
  let n = o.replace(/[\s-]+/g, "");
  return dt.has(o) || ct.some((a) => n.includes(a));
}
function pUe(e, r) {
  if (BAn(e, r)) return true;
  if (e) {
    if (e.startsWith("<")) return true;
    if (yni.has(e)) return true;
    if (T(e).some((a) => st.has(a))) return true;
  }
  let o = r.toLowerCase(), n = o.replace(/\s+/g, "");
  for (let a of at) {
    if (o.includes(a)) return true;
    if (!a.includes(" ")) continue;
    let i = a.replace(/\s+/g, "");
    if (i === "playbooks") continue;
    if (n.includes(i)) return true;
  }
  return false;
}
var ut = /* @__PURE__ */ new Set(["Microsoft.MicrosoftEdge.Stable_8wekyb3d8bbwe!MSEDGE", "Microsoft.MicrosoftEdge.Beta_8wekyb3d8bbwe!MSEDGE", "Microsoft.MicrosoftEdge.Dev_8wekyb3d8bbwe!MSEDGE", "Microsoft.MicrosoftEdge.Canary_8wekyb3d8bbwe!MSEDGE", "Mozilla.Firefox_n80bbvh6b1yt2!App", "TheBrowserCompany.Arc_ttt1ap7aakyb4!App"]), mt = /* @__PURE__ */ new Set(["Microsoft.WindowsTerminal_8wekyb3d8bbwe!App", "Microsoft.WindowsTerminalPreview_8wekyb3d8bbwe!App", "Microsoft.PowerShell_8wekyb3d8bbwe!App", "Microsoft.CommandPalette_8wekyb3d8bbwe!App"]), ht = ["Microsoft.RemoteDesktop_8wekyb3d8bbwe!", "MicrosoftCorporationII.Windows365_8wekyb3d8bbwe!", "MicrosoftCorporationII.QuickAssist_8wekyb3d8bbwe!", "Microsoft.YourPhone_8wekyb3d8bbwe!"], gt = /* @__PURE__ */ new Set(["chrome.exe", "msedge.exe", "firefox.exe", "brave.exe", "opera.exe", "vivaldi.exe", "chrome_proxy.exe", "msedge_proxy.exe", "vivaldi_proxy.exe", "chromium.exe", "thorium.exe", "qutebrowser.exe", "palemoon.exe", "midori.exe", "arc.exe", "duckduckgo.exe", "zen.exe", "librewolf.exe", "waterfox.exe", "mullvadbrowser.exe", "floorp.exe", "comet.exe", "prismaaccessbrowser.exe", "prismabrowser.exe", "island.exe"]), yt = /* @__PURE__ */ new Set(["cmd.exe", "powershell.exe", "pwsh.exe", "wt.exe", "conemu.exe", "conemu64.exe", "cmder.exe", "alacritty.exe", "wezterm-gui.exe", "warp.exe", "hyper.exe", "zed.exe", "tabby.exe", "termius.exe", "code.exe", "code - insiders.exe", "cursor.exe", "vscodium.exe", "windsurf.exe", "sublime_text.exe", "devenv.exe", "gitkraken.exe", "idea64.exe", "pycharm64.exe", "webstorm64.exe", "goland64.exe", "clion64.exe", "rider64.exe", "rgui.exe", "rterm.exe", "r.exe", "wsl.exe", "bash.exe", "conhost.exe", "openconsole.exe", "rio.exe", "contour.exe", "pterm.exe", "putty.exe", "puttytel.exe", "mobaxterm.exe", "mintty.exe", "ttermpro.exe", "securecrt.exe", "xshell.exe", "mremoteng.exe", "mlterm.exe", "gvim.exe", "neovide.exe", "notepad++.exe", "autohotkey.exe", "autohotkey32.exe", "autohotkey64.exe", "autohotkeyu32.exe", "autohotkeyu64.exe", "regedit.exe"]), wt = /* @__PURE__ */ new Set(["explorer.exe", "searchhost.exe", "searchapp.exe", "searchui.exe", "startmenuexperiencehost.exe", "shellexperiencehost.exe", "taskmgr.exe", "powertoys.powerlauncher.exe", "powerlauncher.exe", "microsoft.cmdpal.ui.exe"]), _t = /* @__PURE__ */ new Set(["mstsc.exe", "msrdc.exe", "msrdcw.exe", "vmconnect.exe", "vmware.exe", "vmplayer.exe", "vmrc.exe", "vmware-view.exe", "horizon-client.exe", "windows365.exe", "rdclient.windows.exe", "virtualboxvm.exe", "prlclient.exe", "wfica32.exe", "cdviewer.exe", "teamviewer.exe", "anydesk.exe", "rustdesk.exe", "vncviewer.exe", "scrcpy.exe", "tvnviewer.exe", "quickassist.exe", "msra.exe", "screenconnect.windowsclient.exe", "parsecd.exe", "strwinclt.exe", "nxplayer.exe", "moonlight.exe", "jumpdesktop.exe", "jumpclient.exe", "mremoteng.exe", "royalts.exe", "remotedesktopmanager.exe", "windowssandbox.exe", "windowssandboxclient.exe", "windowssandboxremotesession.exe", "qemu-system-x86_64.exe", "qemu-system-x86_64w.exe", "qemu-system-aarch64.exe", "qemu-system-aarch64w.exe", "qemu-system-i386.exe", "rdcman.exe", "remote-viewer.exe", "virt-viewer.exe", "dwrcc.exe", "rutview.exe", "supremo.exe", "g2viewer.exe", "lmiignition.exe", "za_connect.exe", "workspaces.exe"]), St = /* @__PURE__ */ new Set(["webull.exe", "tradingview.exe", "tws.exe", "thinkorswim.exe", "binance.exe", "ledger live.exe", "trezor suite.exe"]), bt = /* @__PURE__ */ new Set(["firefox", "firefox-bin", "firefox-esr", "chrome", "google-chrome", "chromium", "chromium-browser", "brave", "msedge", "microsoft-edge", "opera", "vivaldi-bin", "librewolf", "zen", "zen-bin", "epiphany", "falkon", "konqueror", "vivaldi", "browser", "edge", "librewolf-community", "floorp", "waterfox", "mullvadbrowser", "torbrowser-launcher", "ungoogled_chromium", "thorium", "palemoon", "midori", "qutebrowser", "nyxt"]), Et = /* @__PURE__ */ new Set(["gnome-terminal-server", "kgx", "ptyxis", "konsole", "yakuake", "xfce4-terminal", "mate-terminal", "lxterminal", "qterminal", "terminator", "tilix", "guake", "tilda", "xterm", "uxterm", "rxvt", "urxvt", "urxvtd", "st", "alacritty", "kitty", "wezterm-gui", "foot", "ghostty", "warp", "hyper", "tabby", "zed", "dolphin", "kate", "emacs", "gvim", "vim.gtk3", "neovide", "geany", "code", "code-insiders", "codium", "cursor", "windsurf", "sublime_text", "idea", "pycharm", "webstorm", "goland", "clion", "rider", "rustrover", "qtcreator", "kdevelop", "rstudio", "matlab", "gitkraken", "putty", "puttytel", "intellij-idea-community", "intellij-idea-ultimate", "pycharm-community", "pycharm-professional", "phpstorm", "sublime-text", "three", "code-oss", "builder", "blackbox", "wezterm", "org.gnome.console", "octave", "octave-gui", "gnome-builder", "spyder", "spyder3", "idle", "idle3", "idle-python", "thonny", "jupyter-qtconsole", "sakura", "terminology", "roxterm", "cool-retro-term", "contour", "rio", "autokey-gtk", "autokey-qt", "gnome-session-properties", "mate-session-properties", "xfce4-session-settings", "lxqt-config-session", "dconf-editor", "deepin-terminal", "io.elementary.terminal", "mlterm", "zutty", "pterm"]), vt = /* @__PURE__ */ new Set(["vmware-view", "horizon-client", "wfica", "scrcpy", "remmina", "virt-viewer", "remote-viewer", "virt-manager", "virtualbox", "virtualboxvm", "vmware", "vmplayer", "gnome-boxes", "boxes", "connections", "gnome-connections", "krdc", "vinagre", "xfreerdp", "xfreerdp3", "rdesktop", "vncviewer", "rustdesk", "teamviewer", "anydesk", "nxplayer", "moonlight"]), xt = /* @__PURE__ */ new Set(["tradingview", "tws"]);
function Btt(e) {
  return e.toLowerCase().split(/[\\/]/).pop() ?? "";
}
function T(e) {
  let r = Btt(e), o = [r, r.replace(/[-.]?\d+(\.\d+)*$/, "")], n = e.toLowerCase();
  if (n.startsWith("/snap/bin/") && r.includes(".")) o.push(r.split(".")[0]);
  else if (n.includes("/exports/bin/") && r.includes(".")) o.push(r.split(".").pop() ?? r);
  return o;
}
var ue = /[\\/]/;
function Sni(e) {
  let r = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
  for (let n of e) {
    let a = n.trim().toLowerCase();
    if (r.add(a.replaceAll("\\", "/")), a !== "" && !ue.test(a)) o.add(a);
  }
  return (n) => {
    if (n === void 0) return false;
    if (r.has(n.toLowerCase().replaceAll("\\", "/"))) return true;
    return o.size > 0 && ue.test(n) && Rt(n).some((a) => o.has(a));
  };
}
function bni(e) {
  let r = /* @__PURE__ */ new Set();
  for (let o of e) {
    let n = o.trim().toLowerCase().replaceAll("\\", "/");
    if (n !== "") r.add(n);
  }
  return (o) => {
    if (o === void 0) return false;
    let n = o.toLowerCase().replaceAll("\\", "/");
    return r.has(n) || n.includes("/") && r.has(Btt(n));
  };
}
function YDt(e, r) {
  let o = Sni(e);
  return (n) => o(n) || r?.(n ?? "") === true;
}
function Rt(e) {
  let r = T(e), o = Btt(e).replace(/\.exe$/, "");
  while (o !== "") {
    r.push(o);
    let n = o.replace(/[-.]?\d+$/, "");
    if (n === o) break;
    o = n;
  }
  return r;
}
function Nt(e) {
  for (let r of me) if (e.startsWith(`${r}.`)) return true;
  return false;
}
function At(e) {
  if (me.has(e)) return "browser";
  if (tt.has(e)) return "terminal";
  if (rt.has(e)) return "trading";
  if (Nt(e)) return "browser";
  if (ut.has(e)) return "browser";
  if (mt.has(e)) return "terminal";
  let r = Btt(e);
  if (gt.has(r)) return "browser";
  if (yt.has(r)) return "terminal";
  if (St.has(r)) return "trading";
  if (wt.has(r)) return "shell";
  for (let o of T(e)) {
    if (bt.has(o)) return "browser";
    if (Et.has(o)) return "terminal";
    if (xt.has(o)) return "trading";
  }
  return null;
}
var It = ["safari", "chrome", "firefox", "microsoft edge", "brave", "opera", "vivaldi", "chromium", "arc browser", "tor browser", "duckduckgo", "yandex", "orion browser", "zen browser", "librewolf", "waterfox", "mullvad browser", "floorp", "comet", "atlas browser", "sigmaos", "dia browser", "prisma access browser", "prisma browser", "island browser", "island enterprise browser"], Dt = ["terminal", "iterm", "wezterm", "alacritty", "kitty", "ghostty", "tabby", "termius", "autohotkey", "script editor", "automator", "script debugger", "keyboard maestro", "hammerspoon", "bettertouchtool", "karabiner-elements", "powertoys", "powerlauncher", "command palette", "commandpalette", "cmdpal", "powershell", "cmd.exe", "command prompt", "git bash", "conemu", "cmder", "visual studio code", "visual studio", "vscode", "vs code", "vscodium", "cursor", "windsurf", "intellij", "pycharm", "webstorm", "clion", "goland", "rubymine", "phpstorm", "datagrip", "rider", "appcode", "rustrover", "fleet", "android studio", "sublime text", "notepad++", "macvim", "neovim", "emacs", "xcode", "eclipse", "netbeans"], Pt = ["bloomberg", "ameritrade", "thinkorswim", "schwab", "fidelity", "e*trade", "interactive brokers", "trader workstation", "tradestation", "webull", "robinhood", "tastytrade", "ninjatrader", "tradingview", "moomoo", "tradezero", "prorealtime", "plus500", "saxotrader", "oanda", "metatrader", "forex.com", "avaoptions", "ctrader", "jforex", "iq option", "olymp trade", "binomo", "pocket option", "raceoption", "expertoption", "quotex", "naga", "morgan stanley", "ubs neo", "eikon", "coinbase", "kraken", "binance", "okx", "bybit", "phemex", "stormgain", "crypto.com", "electrum", "ledger live", "trezor", "guarda", "atomic wallet", "bitpay", "bisq", "koinly", "cointracker", "blockfi", "stripe cli", "decentraland", "axie infinity", "gods unchained"], Tt = ["remote desktop", "iphone mirroring", "phone link", "scrcpy", "virtual machine connection", "vmware workstation", "vmware player", "vmware fusion", "vmware horizon", "omnissa horizon", "horizon client", "amazon workspaces", "vmware remote console", "virtualbox", "parallels desktop", "parallels client", "parallels vm", "parallels mac vm", "citrix workspace", "citrix viewer", "citrix receiver", "teamviewer", "anydesk", "rustdesk", "vnc viewer", "realvnc", "parsec", "splashtop", "nomachine", "screenconnect", "jump desktop", "quick assist", "remote assistance", "mremoteng", "royal ts", "windows sandbox", "qemu", "rdcman", "virt-viewer", "remote viewer", "gotomypc", "goto resolve", "beyondtrust remote support", "bomgar", "dameware", "zoho assist", "remote utilities", "supremo"];
function Ct(e) {
  let r = e.toLowerCase();
  for (let o of Pt) if (r.includes(o)) return "trading";
  for (let o of It) if (r.includes(o)) return "browser";
  for (let o of Dt) if (r.includes(o)) return "terminal";
  return null;
}
function Mt(e) {
  return ot.has(e) || nt.some((r) => e.startsWith(r)) || ht.some((r) => e.startsWith(r)) || _t.has(Btt(e)) || T(e).some((r) => vt.has(r));
}
function Ot(e) {
  let r = e.toLowerCase();
  return Tt.some((o) => r.includes(o) || r.includes(o.replace(/\s+/g, "")));
}
function WAn(e, r, o = false) {
  if (o && (e !== void 0 && Mt(e) || Ot(r))) return "remote_desktop";
  if (e) {
    let n = At(e);
    if (n) return n;
  }
  return Ct(r);
}
function L8r(e, r, o = false) {
  return et(WAn(e, r, o));
}
var jAn = { read: 0, click: 1, full: 2 };
function wni(e, r) {
  let o = e ?? "full", n = r ?? "full";
  return jAn[o] <= jAn[n] ? o : n;
}
function kni(e, r, o = {}) {
  let n = YDt(r, o.isOutsideAllowedApps), a = (s) => L8r(s.bundleId, s.displayName, o.holdRemoteDesktops), i = (s) => {
    let u = a(s);
    return s.tier === void 0 || jAn[s.tier] > jAn[u];
  }, f = e.some((s) => i(s) || n(s.bundleId) || pUe(s.bundleId, s.displayName)), h = f ? e.filter((s) => !n(s.bundleId)).filter((s) => !pUe(s.bundleId, s.displayName)).map((s) => i(s) ? { ...s, tier: wni(s.tier, a(s)) } : s) : e, S = f ? e.filter((s) => pUe(s.bundleId, s.displayName)).map((s) => s.bundleId) : void 0;
  return { allowedApps: o.forceFullTier ? h.map((s) => ({ ...s, tier: "full" })) : h, policyDeniedBundleIds: S };
}
class GAn {
  kind = "explicit";
  wantsHideBeforeAction = true;
  explicitGrants;
  policyDeniedBundleIds;
  grantByBundleId;
  isUserDenied;
  constructor(e, r, o = {}) {
    if (o.alreadyNormalized) this.explicitGrants = e, this.policyDeniedBundleIds = o.alreadyNormalized.policyDeniedBundleIds;
    else {
      let n = kni(e, r, o);
      this.explicitGrants = n.allowedApps, this.policyDeniedBundleIds = n.policyDeniedBundleIds ?? [];
    }
    this.isUserDenied = YDt(r, o.isOutsideAllowedApps), this.grantByBundleId = new Map(this.explicitGrants.map((n) => [n.bundleId, n]));
  }
  isEmpty() {
    return this.explicitGrants.length === 0;
  }
  lookup(e, r) {
    if (e !== void 0) {
      let o = this.grantByBundleId.get(e);
      if (o !== void 0) return { granted: true, grant: o, tier: o.tier ?? "full" };
    }
    if (e !== void 0 && this.policyDeniedBundleIds.includes(e) || pUe(e, r ?? e ?? "")) return { granted: false, reason: "policy_denied" };
    if (this.isUserDenied(e)) return { granted: false, reason: "user_denied" };
    return { granted: false, reason: "not_granted" };
  }
  captureAllowedBundleIds(e) {
    return Promise.resolve(this.explicitGrants.map((r) => r.bundleId));
  }
}
class Eni {
  kind = "wildcard";
  wantsHideBeforeAction = false;
  explicitGrants = [];
  isDeniedPredicate;
  deniedBundleIdSet;
  grantedAt;
  constructor(e) {
    if (e.deniedBundleIds.length === 0) throw Error("WildcardGrantSet: deniedBundleIds must be non-empty \u2014 an every-app grant policy without a policy denylist is a wiring bug");
    this.isDeniedPredicate = e.isDenied, this.deniedBundleIdSet = new Set(e.deniedBundleIds), this.grantedAt = e.grantedAt ?? Date.now();
  }
  isEmpty() {
    return false;
  }
  denies(e, r) {
    if (e !== void 0 && this.deniedBundleIdSet.has(e)) return true;
    try {
      return this.isDeniedPredicate(e, r);
    } catch {
      return true;
    }
  }
  lookup(e, r) {
    if (e === void 0 || e.trim() === "") return { granted: false, reason: "policy_denied" };
    let o = r !== void 0 && r !== "" ? r : e;
    if (this.denies(e, o)) return { granted: false, reason: "policy_denied" };
    return { granted: true, grant: { bundleId: e, displayName: o, grantedAt: this.grantedAt, tier: "full" }, tier: "full" };
  }
  async captureAllowedBundleIds(e) {
    let r;
    try {
      r = await e();
    } catch {
      return [];
    }
    return r.filter((o) => this.lookup(o.bundleId, o.displayName).granted).map((o) => o.bundleId);
  }
}
var y = () => true, N = (...e) => (r) => {
  let o = r.replace(/[. ]+$/, "");
  return e.some((n) => o.endsWith(n));
};
function I(e) {
  return e.slice(e.lastIndexOf("/") + 1);
}
function he(e) {
  let r = e.lastIndexOf("/");
  return r === -1 ? "" : e.slice(0, r);
}
function C(e) {
  let r = e.trim();
  while (r.length >= 2 && r.startsWith('"') && r.endsWith('"')) r = r.slice(1, -1).trim();
  return r;
}
function fH(e) {
  return e.normalize("NFKC").replace(new RegExp("\\p{Default_Ignorable_Code_Point}", "gu"), "").toLowerCase().toUpperCase().toLowerCase();
}
function b(e) {
  return fH(C(e));
}
class X {
  place;
  constructor(e) {
    this.place = e;
  }
}
var p = (e) => new X(e), Lt = [p(".zshrc"), p(".zshenv"), p(".zprofile"), p(".zlogin"), p(".zlogout"), p(".bashrc"), p(".bash_profile"), p(".bash_login"), p(".bash_logout"), p(".profile"), ".wezterm.lua", "Library/Application Support/SuperCollider/startup.scd", "Library/Application Support/REAPER/Scripts/__startup.lua", "Library/Application Support/REAPER/Scripts/__startup.eel", "Library/Application Support/virtualenv/virtualenv.ini", p(".config/fish/config.fish"), p(".config/fish/fish_variables"), ".config/starship.toml", "Library/Application Support/iTerm2/Scripts/AutoLaunch.scpt", "Library/Application Support/iTerm/Scripts/AutoLaunch.scpt", p(".gitconfig"), ".zcompdump", ".cache/prezto/zcompdump", ".cache/zsh4humans/v5/z4h.zsh", p("Library/Application Support/Claude/claude_desktop_config.json"), p("Library/Application Support/Claude-3p/claude_desktop_config.json"), p("Library/Application Support/Claude Nest/claude_desktop_config.json"), p("Library/Application Support/Claude Nest-3p/claude_desktop_config.json")], Bt = [p(".git"), "userSetup.py", "userSetup.mel", "StartupMacros.txt", "StartupMacros.ijm", "StartupMacros.fiji.ijm", "RunAtStartup.ijm", "openmpi-mca-params.conf", "prte-mca-params.conf", "pmix-mca-params.conf", "system.rootlogon.C", "system.rootrc", "openmpi-mca-params", "prte-mca-params", "pmix-mca-params", "system.rootlogon", p("gitdir"), p("commondir"), "__fish_build_paths.fish", "Breakpoints_v2.xcbkptlist", "MERGE_RR", "packed-refs", p("config.worktree"), "HEAD", "ORIG_HEAD", "FETCH_HEAD", "MERGE_HEAD", "CHERRY_PICK_HEAD", "REVERT_HEAD", "REBASE_HEAD", p("claude_desktop_config"), p("scheduled-tasks.json"), p("scheduled-tasks")], _e = [".terminal", ".term", ".fileloc", ".inetloc", ".webloc", ".ftploc", ".afploc", ".smbloc", ".vncloc", ".mailloc", ".newsloc", ".mobileconfig", ".webarchive", ".command", ".tool"], Ft = [p(".config/git/config"), "Library/Application Support/QGIS/QGIS3/startup.py"], Ut = [p("gitconfig"), "my.cnf", "my", "wgetrc", "screenrc", "supervisord.conf", "supervisord", "system"], N8r = new Set(["applypatch-msg", "pre-applypatch", "post-applypatch", "pre-commit", "pre-merge-commit", "prepare-commit-msg", "commit-msg", "post-commit", "pre-rebase", "post-checkout", "post-merge", "pre-push", "pre-receive", "update", "proc-receive", "post-receive", "post-update", "reference-transaction", "push-to-checkout", "pre-auto-gc", "post-rewrite", "sendemail-validate", "fsmonitor-watchman", "post-index-change", "p4-changelist", "p4-prepare-changelist", "p4-post-changelist", "p4-pre-submit"].map(fH)), Ht = (e) => N8r.has(e), Wt = new Set(["activate", "activate.csh", "activate.fish", "activate.nu", "activate.ps1"].map(fH)), zt = (e) => Wt.has(e), ge = ["__init__", "__main__", "_virtualenv", "info", "report", "version"], $t = new Set([...ge, ...ge.map((e) => `${e}.py`), "virtualenv"].map(fH)), Gt = (e) => $t.has(e), O = N(".fish"), ye = (e) => e.replace(/[. ]+$/, "").endsWith(".plist"), we = N(".yml", ".yaml"), Kt = (e) => e === "gradle.properties" || e === "gradle", jt = N(".zsh"), Vt = N(".zsh-theme"), L = "airflow", Se = new Set(["airflow.cfg", "webserver_config.py", "webserver_config", "airflow_local_settings.py", "airflow_local_settings"].map(fH)), Q = /* @__PURE__ */ new Set(["dags", "plugins"]), H = /* @__PURE__ */ new Set([...Q, "config"]), uor = N(".py", ".zip"), Z = (e) => uor(e) || !e.includes("."), Yt = [p({ homeRelativePath: ".ssh", refusedSaveNames: y }), p({ homeRelativePath: "Library/LaunchAgents", refusedSaveNames: y }), p({ homeRelativePath: "Library/LaunchDaemons", refusedSaveNames: y }), { homeRelativePath: "Library/KeyBindings", refusedSaveNames: y }, { homeRelativePath: "Library/Preferences", refusedSaveNames: ye }, { homeRelativePath: "Library/Preferences/ByHost", refusedSaveNames: ye }, { homeRelativePath: ".hammerspoon", refusedSaveNames: y }, { homeRelativePath: ".zsh_sessions", refusedSaveNames: y }, { homeRelativePath: ".bash_sessions", refusedSaveNames: y }, { homeRelativePath: ".config/wezterm", refusedSaveNames: y }, { homeRelativePath: ".config/kitty", refusedSaveNames: y }, { homeRelativePath: ".config/alacritty", refusedSaveNames: y }, { homeRelativePath: ".config/ghostty", refusedSaveNames: y }, p({ homeRelativePath: ".config/fish/conf.d", refusedSaveNames: O }), { homeRelativePath: ".config/fish/functions", refusedSaveNames: O }, { homeRelativePath: ".config/fish/completions", refusedSaveNames: O }, { homeRelativePath: ".config/mise", refusedSaveNames: y }, { homeRelativePath: ".local/share/fish/vendor_conf.d", refusedSaveNames: y }, { homeRelativePath: ".local/share/fish/vendor_functions.d", refusedSaveNames: y }, { homeRelativePath: ".local/share/fish/vendor_completions.d", refusedSaveNames: y }, { homeRelativePath: ".cache/zsh4humans", refusedSaveNames: y }, { homeRelativePath: ".config/karabiner", refusedSaveNames: y }, { homeRelativePath: ".config/skhd", refusedSaveNames: y }, { homeRelativePath: ".config/yabai", refusedSaveNames: y }, { homeRelativePath: ".config/espanso/match", refusedSaveNames: we }, { homeRelativePath: "Library/Application Support/espanso/match", refusedSaveNames: we }, { homeRelativePath: ".oh-my-zsh/custom", refusedSaveNames: N(".zsh", ".zsh-theme") }, { homeRelativePath: ".oh-my-zsh/custom/themes", refusedSaveNames: Vt }, { homeRelativePath: ".oh-my-zsh/lib", refusedSaveNames: jt }, { homeRelativePath: ".zprezto/runcoms", refusedSaveNames: y }, { homeRelativePath: "google-cloud-sdk", refusedSaveNames: y }, { homeRelativePath: "Library/Application Support/iTerm2/Scripts/AutoLaunch", refusedSaveNames: y }, { homeRelativePath: "Library/Application Support/com.mitchellh.ghostty", refusedSaveNames: y }, { homeRelativePath: "Library/Developer/Xcode/UserData/xcdebugger", refusedSaveNames: y }], Xt = ["opt/homebrew", "usr/local/homebrew", "usr/local/cellar", "share/zsh/site-functions", "share/zsh-completions", "etc/bash_completion.d", "etc/profile.d", "zsh-autosuggestions", "zsh-syntax-highlighting", "powerlevel10k", "znap", "zsh-snap", "liquidprompt", "amazon-q", "codewhisperer", "kiro-cli", "etc/conda/env_vars.d", "etc/my.cnf.d", "rr-cache", "multi-pack-index.d", "google-cloud-sdk", p("terminal-shell-integration"), p("claude-code-sessions"), p("nativemessaginghosts"), p("claude extensions"), p("claude extensions settings"), p("extensions update cache"), p("uv-runtime"), p("configlibrary"), p("scheduled-task-grants")], Qt = ["library/homebrew", "library/taps", "caches/antidote", "caches/antibody", "org.dystroy.broot/launcher", "share/bash-completion/completions", "venv/scripts", "virtualenv/activation", "site-packages/virtualenv", "caches/virtualenv", "application support/virtualenv", p("local-agent-mode-sessions/skills-plugin"), p("local-agent-mode-sessions/plugin-cache")], Zt = [p(".git/config"), "conda-meta/state", p("share/git-core/templates/config")], Jt = [p(/(?:^|\/)[^/]*\.git\/(?:(?:modules|worktrees)\/.*\/)?(?:(?:objects|refs|reftable)\/.*|packed-refs|(?:logs\/)?head|(?:orig|fetch|merge|cherry_pick|revert|rebase)_head|index|shallow|info\/grafts)$/s), /(?:^|\/)(?:objects\/info\/(?:(?:http-)?alternates|commit-graph(?:s\/.*)?)|objects\/pack\/.*|objects\/[0-9a-f]{2}\/[0-9a-f]{38}(?:[0-9a-f]{24})?|reftable\/(?:tables\.list|[^/]+\.ref)|refs\/(?:stash|(?:heads|tags|remotes|replace|bisect)\/(?:[^/]+\/)*[^/.]+)|packed-refs)$/s], be = /* @__PURE__ */ new Set(["shallow", "index"]), er = [["info", /^(?:(?:http-)?alternates|commit-graph|grafts)$/], ["commit-graphs", /^(?:commit-graph-chain|graph-[0-9a-f]{40,}\.graph)$/], ["pack", /^(?:.+\.(?:idx|pack|rev|mtimes|promisor)|multi-pack-index)$/s], ["reftable", /^(?:tables\.list|.+\.ref)$/s]], Y = /gradle-\d+\.\d+(?:\.\d+)?(?:-(?:rc|milestone)-\d+)?/.source, tr = new RegExp(`^${Y}$`), rr = [/(?:^|\/)(?:apache-maven(?:-[^/]+)?|maven\d*|maven-\d+(?:\.\d+)+(?:-(?:alpha|beta|rc)-\d+)?|maven-mvnd(?:-[^/]+)?|mvnd(?:-\d[^/]*)?|mvn)\/(?:conf\/(?:(?:settings|toolchains|extensions)(?:\.xml)?|maven[^/.]*(?:\.properties)?|mvnd(?:\.properties)?)|bin\/m2)$/, /(?:^|\/)bin\/m2\.conf$/, /(?:^|\/)init\.d\/[^/]+\.gradle(?:\.kts)?$/, new RegExp(`(?:^|/)${Y}/gradle(?:\\.properties)?$`), new RegExp(`(?:^|/)${Y}/init\\.d/[^/]+$`)], or = [p(/\/local-agent-mode-sessions\/[^/]+\/[^/]+\/scheduled-tasks\.json(?:\.tmp)?$/), p(/(?:^|\/)[^/]*\.git\/(?:modules\/.+\/)?(?:worktrees\/[^/]+\/)?(?:commondir|gitdir|config(?:\.worktree)?)$/), p(/\/share\/git-core\/templates\/(?:hooks\/[^/]+|commondir|config(?:\.worktree)?)$/), p(/(?:^|\/)[^/]*\.git\/(?:modules\/.+\/)?hooks\/[^/]+$/), p(/(?:^|\/)[^/]*\.git\/(?:modules\/.+\/)?(?:worktrees\/[^/]+\/)?merge_rr$/), p(/(?:^|\/)\.git$/), /\/bin\/activate(?:\.(?:csh|fish|nu|ps1))?$/, /\/share\/fish\/(?:(?:vendor_(?:conf|functions|completions)\.d|functions|completions)\/[^/]+|config|__fish_build_paths)\.fish$/, /\/etc\/fish\/(?:config|(?:conf\.d|functions|completions)\/[^/]+)\.fish$/, p(/\/etc\/gitconfig$/), /\/etc\/(?:my\.cnf|wgetrc|screenrc|supervisord\.conf)$/, /(?:^|\/)(?:(?:openmpi|prte|pmix)-mca-params\.conf|system\.rootlogon\.c|system\.rootrc)$/, /\/bin\/brew$/, /\/homebrew\/brew\.env$/, /\/xcdebugger\/[^/]+$/, /\/\.cache\/fish\/(?:generated_completions|completions)\/[^/]+\.fish$/, /\/application support\/blender\/[^/]+\/scripts\/startup\/(?:[^/]+\/__init__|[^/]+)\.py$/, /\/application support\/sketchup \d{4}\/sketchup\/plugins\/[^/]+\.rb$/, /\/application support\/freecad\/(?:[^/]+\/)?mod\/[^/]+\/init(?:gui)?\.py$/, /\/documents\/kicad\/\d+\.\d+\/(?:scripting|scripting\/plugins|3rdparty\/plugins)\/(?:[^/]+\/__init__|[^/]+)\.py$/, /\/igor procedures\/(?:[^/]+\/)*[^/]+\.ipf$/, /\/fiji(?:\.app)?\/macros\/autorun\/[^/]+\.ijm$/, /\/(?:fiji|imagej)(?:\.app)?\/macros\/(?:startupmacros(?:\.fiji)?\.(?:ijm|txt)|runatstartup\.ijm)$/, /\/\.cache\/p10k-(?:instant-prompt|dump)-[^/]+\.zsh$/, /(?:^|\/)\.zcompdump[^/]*$/, p(/(?:^|\/)\.claude\/settings(?:\.local)?\.json$/), p(/(?:^|\/)\.mcp\.json$/), /\/conda-meta\/state$/, p(/\/local-agent-mode-sessions\/[^/]+\/[^/]+\/(?:rpm|cowork_plugins|remote_cowork_plugins)\/./), p(/\/local-agent-mode-sessions\/[^/]+\/[^/]+\/(?:agent\/)?[^/]+\/\.claude\/./)], nr = [p("authorized_keys"), p("known_hosts"), p("id_rsa"), p("id_ed25519"), p("id_ecdsa"), p("id_dsa")], ar = ["p10k-instant-prompt-", "p10k-dump-", ".zcompdump", p("scheduled-tasks.json")], sr = [["bin", (e) => zt(e) || e === "brew" || e === "m2.conf"], p(["hooks", Ht]), ["virtualenv", Gt], ["generated_completions", O], ["root", (e) => e === "system"], ["init.d", N(".gradle", ".gradle.kts")], ["scripts", (e) => e === "autolaunch"], ["igor procedures", N(".ipf")]], ir = [["completions", (e) => O(e) || e.endsWith(".bash") || !e.includes(".")]], lr = /* @__PURE__ */ new Set([".trash"]), cr = [".claude.json", ".claude", ".mcp.json", ".mcp", ".ssh"], dr = [".ssh", ".claude", ".git"], pr = [".ssh", ".claude", ".claude.json", ".mcp.json"], ur = [".config/zsh", ".zsh"].flatMap((e) => [".zshenv", ".zprofile", ".zshrc", ".zlogin", ".zlogout"].map((r) => `${e}/${r}`)), mr = [/\/\.config\/fish\/(?:config|conf\.d\/[^/]*)$/], Ee = new Set(["profile"].map(fH));
function ve(e) {
  let r = (c) => c.flatMap((w) => {
    if (w instanceof X) return [w.place];
    return e ? [] : [w];
  }), o = r(Lt), n = r(Ft), a = r(Yt), i = r(Xt), f = [...i, ...r(Qt)], h = new Set(r(Ut)), S = [...r(Jt), ...r(rr)], l = new Set(cr.map(fH)), s = new Set(dr.map(fH)), u = e ? (c) => s.has(c) : (c) => c.startsWith("."), g = new Set(pr.map(fH));
  return { homeRelativeFiles: [...o, ...n, ...e ? ur : []], homeRelativeDirs: a.map((c) => c.homeRelativePath), basenames: new Set([...o.map(I), ...r(nr), ...r(Bt)].map(fH)), basenamePrefixes: r(ar).map(fH), anywhereDirs: f, anywhereShapes: [...r(or), ...S], wholePathSaveShapes: [...S, ...e ? mr : []], folderRules: new Map([...r(sr), ...r(er).map(([c, w]) => [c, (R) => w.test(R)]), ["etc", (c) => h.has(c)], ...a.map((c) => [fH(I(c.homeRelativePath)), c.refusedSaveNames]), ...i.map((c) => [I(c), y]), ...r(ir), ...[...n, ...r(Zt)].map((c) => {
    let w = fH(I(c)), R = w === "config" ? "config.worktree" : void 0;
    return [fH(I(he(c))), (E) => E === w || E === R];
  })]), patternFolderRule: (c) => !e && tr.test(c) ? Kt : void 0, visibleDirRuns: [...a.map((c) => [c.homeRelativePath, c.refusedSaveNames]), ...f.map((c) => [c, y])].map(([c, w]) => ({ relativePath: c, namesInnermostFirst: c.split("/").map(fH).reverse(), refusedSaveNames: w })).filter((c) => c.namesInnermostFirst.every((w) => !u(w))), followsRelocatedDir: e ? (c) => a.some((w) => w.homeRelativePath === c) : () => true, isProtectedHiddenName: e ? (c) => l.has(c) : (c) => c.startsWith("."), isProtectedHiddenFolder: u, isProtectedHiddenHomeEntry: e ? (c) => g.has(fH(c)) : (c) => fH(c).startsWith(".") && !lr.has(c.toLowerCase()) };
}
var xe = ve(false), fr = ve(true);
function Re(e) {
  return e ? fr : xe;
}
var hr = xe.basenames;
var Ne = "save-panel", gr = "open-panel", yr = "GoToWindow", J = "saveAsNameTextField", a1a = "CancelButton", wr = "Cancel Button", vni = "NS_OPEN_SAVE_DISCLOSURE_TRIANGLE";
var _r = "PathTextField", ee = "Search";
var Ae = () => false;
function x() {
  return Re(Ae());
}
var Sr = () => true;
function B() {
  return !Ae() && Sr();
}
function br(e) {
  let r = e.replace(/\/+$/, "").split(/\/+/), o = r.join("/").toLowerCase(), n = r.map((a) => fH(a).replaceAll("/", "\uFF0F")).join("/");
  return [o, n].some((a) => x().anywhereShapes.some((i) => i.test(a)) || x().anywhereDirs.some((i) => a.includes(`/${i}/`)));
}
function por(e) {
  return e.sheetIdentifiers.includes(Ne);
}
function l1a(e) {
  return e.sheetIdentifiers.includes(gr);
}
function r9o(e) {
  return e.sheetIdentifiers.includes(yr);
}
function Tni(e) {
  return e.hitIdentifier === J || e.hitIdentifier === ee;
}
function o9o() {
  return Er();
}
var Er = () => false;
function d1a(e) {
  return e.focusIdentifier === J || e.focusIdentifier === ee;
}
function Cni(e) {
  return e.sheetIdentifiers[0] === Ne;
}
function vr(e) {
  let r = e.replace(/[. ]+$/, "");
  return _e.some((o) => r.endsWith(o));
}
function ke(e) {
  return x().basenames.has(e) || x().basenamePrefixes.some((r) => e.startsWith(r)) || vr(e);
}
function F8r(e) {
  let r = b(e);
  return x().isProtectedHiddenName(r) || ke(r) || B() && Se.has(r);
}
function xr(e) {
  return x().isProtectedHiddenHomeEntry(e);
}
function Rr(e, r, o) {
  if (o.length === 0) return null;
  let n = ke(`.${r}`) && !Ee.has(r), a = null;
  for (let i of o) {
    let f = e !== null && b(i.folderName) === e;
    if ("hiddenHomeEntryName" in i) {
      if (f && xr(i.hiddenHomeEntryName)) return "folder";
    } else if (i.fileName === null) {
      let h = f ? Ie(b(i.canonicalFolderName)) : void 0;
      if (h === y) return "folder";
      if (h !== void 0 && h(r)) a = "name_in_folder";
    } else if ((f || n) && b(i.fileName) === r) a = "name_in_folder";
  }
  return a;
}
function Nr(e) {
  return e === L && B() ? (r) => r === L : void 0;
}
function Ie(e) {
  let r = De(e);
  if (r === void 0) return x().folderRules.get(e) ?? Nr(e) ?? x().patternFolderRule(e);
  return r === y ? y : (o) => be.has(o) || r(o);
}
function De(e) {
  if (x().isProtectedHiddenFolder(e)) return y;
  return e.endsWith(".git") ? x().folderRules.get(".git") : void 0;
}
function $8r(e, r, o = []) {
  let n = e === null ? null : b(e), a = n === null ? void 0 : Ie(n);
  if (a === y) return "folder";
  let i = b(r), f = Rr(n, i, o);
  if (f === "folder") return "folder";
  if (f === "name_in_folder" || a !== void 0 && a(i)) return "name_in_folder";
  return null;
}
function Ar(e, r, o) {
  let n = De(e[r]);
  return [...n === void 0 ? [] : [n], ...o.filter((a) => a.namesInnermostFirst.every((i, f) => e[r + f] === i)).map((a) => a.refusedSaveNames)];
}
function s9o(e) {
  if (e.windowDocumentReadFailed) return { allowed: false, reason: "document_read_failed" };
  if (e.documentPathIsProtected) return { allowed: false, reason: "protected_document" };
  return { allowed: true };
}
function U8r(e, r, o) {
  if (e.moveSheetIsUp) return r?.kind === "click" && r.button === "left" && (r.count ?? 1) === 1 && e.hitIdentifier === wr ? null : "move_sheet";
  let n = Ir(e, o);
  if (n) return n;
  if (e.popoverFolderMenuIsOpen) return "folder_menu";
  if (!((e.popoverPopUpValues ?? []).length > 0)) return null;
  if (r?.kind === "drag" && r.probeIsOfTheFocus) return "background_drag_beside_a_pop_up";
  if (e.hitTestFellBack && (r?.kind === "drag" || r?.kind === "click" && (r.count ?? 1) > 1)) return "unseen_point_beside_a_pop_up";
  if (e.focusRole !== "AXPopUpButton") return null;
  if (r?.kind === "drag") return "pop_up_drag";
  if (r?.kind === "click" && (r.count ?? 1) > 1) return "pop_up_multi_click";
  return o !== void 0 && Array.from(o).length > 1 ? "pop_up_burst" : null;
}
function kr(e, r, o = []) {
  let n = b(e);
  return B() && uor(b(r)) && (Q.has(n) || te(o, H).has(n));
}
function Ir(e, r) {
  if (e.popoverTextFieldIsUnreadable) return "unreadable_name";
  let o = e.popoverTextFieldValues ?? [], n = e.popoverPopUpValues ?? [], a = (h, S) => $8r(S, h, e.resolvedProtectedTargets);
  if (o.length > 0 && n.some((h) => a("", h) === "folder")) return "protected_folder_shown";
  let i = (h) => F8r(h) || n.some((S) => a(h, S) === "name_in_folder" || kr(S, h, e.resolvedProtectedTargets));
  if (o.some((h) => h !== "" && i(h))) return "new_name";
  if (r === void 0 || !Ani(e)) return null;
  return [r, ...o.map((h) => h + r)].some(i) ? "new_name" : null;
}
function Ani(e) {
  return e.popoverHoldsTheFocus === true && (e.popoverTextFieldValues ?? []).length > 0;
}
function i9o(e) {
  let r = C(e);
  return r.includes("/") || r.startsWith("..") || r.startsWith("~");
}
function c1a(e, r) {
  if (r9o(e) && e.focusIdentifier === _r) return { allowed: false, reason: "goto_path_unverifiable" };
  if (e.focusIdentifier === J) {
    if (r === null) return { allowed: true };
    if (i9o(r)) return { allowed: false, reason: "name_is_path" };
    if (F8r(r) || $8r(e.saveWhereDisplayName, r, e.resolvedProtectedTargets) === "name_in_folder") return { allowed: false, reason: "name_protected" };
    return { allowed: true };
  }
  if (e.focusIdentifier === ee) return { allowed: true };
  return { allowed: false, reason: "not_a_typing_field" };
}
var Pe = /* @__PURE__ */ new Set(["up", "down", "left", "right", "home", "end", "delete", "backspace", "forwarddelete", "pageup", "pagedown", "page_up", "page_down"]), a9o = /* @__PURE__ */ new Set(["return", "enter", "kp_enter", "escape", "tab", "up", "down", "left", "right", "home", "end", "delete", "backspace", "forwarddelete", "pageup", "pagedown", "page_up", "page_down"]);
function l9o(e, r = 1) {
  if (r > 1 && !Tni(e)) return { allowed: false, reason: "confirm_multi_click" };
  let { saveNameValue: o, saveWhereDisplayName: n } = e;
  if (o === null || n === null) return { allowed: false, reason: "confirm_target_unreadable" };
  let a = $8r(n, o, e.resolvedProtectedTargets);
  if (a === "folder") return { allowed: false, reason: "confirm_folder_protected" };
  if (a === "name_in_folder" || F8r(o) || i9o(o)) return { allowed: false, reason: "confirm_name_protected" };
  return { allowed: true };
}
function u1a(e, r) {
  let { saveNameValue: o, saveWhereDisplayName: n } = e;
  if (o === null || n === null || !r?.length) return { allowed: false, reason: "confirm_target_unreadable" };
  let [a, ...i] = r;
  if (b(a) !== b(n)) return { allowed: false, reason: "confirm_target_unreadable" };
  if (Dr(r, o, e.resolvedProtectedTargets)) return { allowed: false, reason: "confirm_name_protected" };
  let f = Te(o, a, i, e.resolvedProtectedTargets, e.relocatedProtectedDirs), h = (l) => br(["", ...[...r].reverse(), l].map((s) => s.replaceAll("/", "\uFF0F")).join("/")), S = [o, C(o), b(o).replace(/[. ]+$/, "")];
  if (!f.allowed || !S.some(h)) return f;
  return h("x.txt") ? { allowed: false, reason: "confirm_folder_protected" } : { allowed: false, reason: "confirm_name_protected" };
}
function d9o(e) {
  let r = e.map((n) => n.toLowerCase().replaceAll("/", "\uFF0F")).join("/"), o = e.map((n) => b(n).replaceAll("/", "\uFF0F")).join("/");
  return [r, o].some((n) => x().wholePathSaveShapes.some((a) => a.test(n)));
}
function Rni(e, r = []) {
  if (!B()) return false;
  let o = te(r, /* @__PURE__ */ new Set([L])).add(L), n = e.map(b);
  return n.some((a, i) => i > 0 && H.has(a) && o.has(n[i - 1]));
}
function Dr(e, r, o) {
  if (!B() || !Z(b(r))) return false;
  let n = te(o, H);
  return e.some((a) => n.has(b(a)));
}
function te(e, r) {
  return new Set(e.flatMap((o) => "canonicalFolderName" in o && r.has(b(o.canonicalFolderName)) ? [b(o.folderName)] : []));
}
function Te(e, r, o, n, a = []) {
  if (a === null) return { allowed: false, reason: "confirm_target_unreadable" };
  let i = o.map(b), f = [...x().visibleDirRuns, ...a.filter((s) => s.namesInnermostFirst.length > 0 && x().followsRelocatedDir(s.homeRelativePath)).map((s) => ({ namesInnermostFirst: s.namesInnermostFirst.slice(0, s.parentNameMayDiffer ? 1 : 2).map(b), refusedSaveNames: x().visibleDirRuns.find((u) => u.relativePath === s.homeRelativePath)?.refusedSaveNames ?? y }))], h = i.flatMap((s, u) => Ar(i, u, f)), S = [...o].reverse().concat(r);
  if (h.includes(y) || d9o([...S, ""])) return { allowed: false, reason: "confirm_folder_protected" };
  let l = b(e);
  return h.some((s) => s(l)) || d9o([...S, e]) || Z(l) && Rni(S, n) ? { allowed: false, reason: "confirm_name_protected" } : { allowed: true };
}
function Pr(e) {
  if (!e?.startsWith("file:///")) return null;
  try {
    let r = e.slice(7).split("/").filter((o) => o !== "").map(decodeURIComponent);
    return r.some((o) => o === "." || o === ".." || o.includes("/")) ? null : r.reverse();
  } catch {
    return null;
  }
}
function f1a(e) {
  let r = Pr(e.saveShownFolderUrl);
  if (r === null) return { allowed: false, reason: "confirm_folder_not_shown" };
  if (e.saveNameValue === null || e.saveWhereDisplayName === null) return { allowed: false, reason: "confirm_target_unreadable" };
  if (e.saveTargetPathIsProtected) return { allowed: false, reason: "confirm_folder_protected" };
  let [o = e.saveWhereDisplayName, ...n] = r, a = l9o({ ...e, saveWhereDisplayName: o });
  return a.allowed ? Te(e.saveNameValue, o, n, e.resolvedProtectedTargets) : a;
}
var Tr = { meta: "meta", super: "meta", command: "meta", cmd: "meta", windows: "meta", win: "meta", ctrl: "ctrl", control: "ctrl", lctrl: "ctrl", lcontrol: "ctrl", rctrl: "ctrl", rcontrol: "ctrl", shift: "shift", lshift: "shift", rshift: "shift", alt: "alt", option: "alt" }, Cr = { esc: "escape", del: "delete", " ": "space", "	": "tab", "\x1B": "escape", "\x7F": "delete", "\r": "enter", "\b": "backspace" };
function c9o(e) {
  return !/^[\x21-\x7e]+$/.test(e);
}
var Ce = ["ctrl", "alt", "shift", "meta"];
function Oe(e) {
  return [...new Set(e)].sort((r, o) => Ce.indexOf(r) - Ce.indexOf(o));
}
var Mr = ["", "ctrl+", "alt+", "shift+", "ctrl+alt+", "ctrl+shift+", "alt+shift+", "ctrl+alt+shift+"], Le = ["tab", ...Array.from("1234567890")].flatMap((e) => Mr.map((r) => `${r}meta+${e}`)), Or = /* @__PURE__ */ new Set(["meta+q", "shift+meta+q", "alt+shift+meta+q", "alt+meta+escape", "meta+tab", "shift+meta+tab", "meta+space", "alt+meta+space", "ctrl+meta+q", "ctrl+f2", "ctrl+f3", "ctrl+f8", "ctrl+f1", "ctrl+f7", "ctrl+up", "ctrl+down", "alt+f11", "alt+f8"]), Lr = /* @__PURE__ */ new Set(["ctrl+alt+delete", "alt+f4", "alt+tab", "alt+shift+tab", "ctrl+alt+tab", "ctrl+alt+shift+tab", ...Le, "meta+l", "meta+d", "meta+r", "meta+e", "meta+s", "meta+q", "ctrl+escape", "meta+i", "meta+u", "meta+x", "alt+f11", "alt+f8"]), Br = /* @__PURE__ */ new Set(["alt+f11", "meta", "ctrl+alt+delete", "ctrl+alt+backspace", ...Array.from({ length: 12 }, (e, r) => `ctrl+alt+f${r + 1}`), "meta+l", "ctrl+alt+l", "shift+meta+e", "alt+f4", "ctrl+q", "shift+meta+q", "ctrl+alt+escape", "alt+tab", "alt+shift+tab", "alt+escape", "alt+shift+escape", "ctrl+alt+tab", "ctrl+alt+shift+tab", "meta+a", "meta+s", "meta+w", "meta+g", "meta+v", "meta+m", "meta+n", "meta+d", "ctrl+alt+d", "ctrl+escape", ...Array.from({ length: 12 }, (e, r) => `ctrl+f${r + 1}`), ...["left", "right", "up", "down"].flatMap((e) => [`ctrl+alt+${e}`, `ctrl+alt+shift+${e}`]), ...["left", "right", "pageup", "pagedown"].flatMap((e) => [`meta+${e}`, `shift+meta+${e}`]), "meta+home", "meta+end", "alt+f2", "alt+space", "alt+f1", "alt+f3", "meta+space", "meta+r", "ctrl+alt+t", "meta+enter", "meta+return", "meta+e", ...Le]), Fr = { darwin: Or, win32: Lr, linux: Br };
function k(e) {
  let r = [];
  for (let a of e.toLowerCase().split("+")) {
    let i = a.trim();
    if (i === "") if (a.length === 1) i = a;
    else continue;
    let f = Tr[i];
    if (f !== void 0) r.push({ name: f, isMod: true });
    else r.push({ name: Cr[i] ?? i, isMod: false });
  }
  let o = Oe(r.filter((a) => a.isMod).map((a) => a.name)), n = r.filter((a) => !a.isMod).map((a) => a.name);
  return { mods: o, keys: n, ordered: r };
}
function Be(e) {
  let { mods: r, keys: o } = k(e);
  return [...r, ...o].join("+");
}
function p1a(e) {
  let { mods: r, keys: o } = k(e), n = r.includes("meta") || r.includes("ctrl"), a = r.includes("shift"), i = /* @__PURE__ */ new Set();
  for (let f of o) {
    if (n) {
      if (f === "v") i.add("clipboardRead");
      if (f === "c" || f === "x") i.add("clipboardWrite");
    }
    if (f === "insert") {
      if (a) i.add("clipboardRead");
      if (r.includes("ctrl")) i.add("clipboardWrite");
    }
    if (f === "delete" && a) i.add("clipboardWrite");
  }
  return i;
}
function zAn(e, r) {
  return Pni(e, Fr[r]) || r !== "darwin" && Hr(e);
}
var Ur = /^(?:[a-z0-9]|f(?:[1-9]|1[0-2])|space|tab|return|enter|backspace|delete|escape|up|down|left|right|home|end|pageup|pagedown)$/;
function Hr(e) {
  let { mods: r, keys: o } = k(e);
  return r.includes("meta") && o.some((n) => !Ur.test(n));
}
function uq(e) {
  return k(e).mods;
}
function wW(e) {
  return k(e).keys;
}
function m1a(e) {
  return e.split("+").map((r) => r.trim() || r).filter((r) => wW(r).length > 0);
}
function u9o(e) {
  return wW(e).length > 1;
}
function VAn(e) {
  return uq(e).every((r) => r === "shift") && wW(e).every((r) => Pe.has(r));
}
var Wr = /* @__PURE__ */ new Set(["delete", "backspace", "forwarddelete"]);
function zr(e) {
  return VAn(e) && wW(e).every((r) => !Wr.has(r));
}
var Me = 8;
function f9o(e, r) {
  let { ordered: o, keys: n } = k(e);
  if (o.length > Me) {
    let i = `A chord may name at most ${Me} keys, counting modifiers and repeated names; this one names ${o.length}.`;
    return r === "click" ? `${i} Press each key with its own \`key\` action, then click.` : r === "hold_key" ? `${i} Hold one key (with its modifiers) per call.` : `${i} Send one key (with its modifiers) per call.`;
  }
  if (n.length <= 1 || r !== "click" && zr(e)) return null;
  if (r === "click") return `A click may hold modifier keys and at most one other key; "${e}" has ${n.length} other keys. Press each with its own \`key\` action, then click.`;
  let a = `"${e}" presses more than one key in a single action, which is not allowed.`;
  return r === "hold_key" ? `${a} Hold one key (with its modifiers) per call.` : `${a} Send one key (with its modifiers) per call, each checked on its own; use \`repeat\` for repeated presses and \`type\` for text.`;
}
var $r = /[\u0000-\u001F\u007F-\u009F\u2028\u2029\uF700-\uF8FF]/;
function xni(e) {
  return /^(?:\r\n|[\n\v\f\r\u0003\u0085\u2028\u2029])$/.test(e);
}
function Wtt(e) {
  return $r.test(e);
}
function Pni(e, r) {
  let { mods: o, keys: n, ordered: a } = k(e);
  if (o.length > 0 && n.some(c9o)) return true;
  if (n.length === 0) return r.has(o.join("+"));
  let i = o.length > 0 ? o.join("+") + "+" : "";
  for (let h of n) if (r.has(i + h)) return true;
  let f = [];
  for (let h of a) if (h.isMod) f.push(h.name);
  else {
    let S = Oe(f), l = S.length > 0 ? S.join("+") + "+" : "";
    if (r.has(l + h.name)) return true;
  }
  return false;
}
function v() {
  let e = (0, import_chunk_52ckkfmm.Fh)();
  if (e.inputModule) return e.inputModule;
  let r = Ue();
  if (!r.isSupported) throw Error("@ant/computer-use-input is not supported on this platform");
  return e.inputModule = r;
}
var re = /* @__PURE__ */ new Set(["shift", "lshift", "rshift", "control", "ctrl", "lcontrol", "lctrl", "rcontrol", "rctrl", "alt", "option", "meta", "super", "command", "cmd", "windows", "win"]), Gr = /* @__PURE__ */ new Set(["shift", "lshift", "rshift"]), Kr = /* @__PURE__ */ new Set(["control", "ctrl", "lcontrol", "lctrl", "rcontrol", "rctrl", "alt", "option"]), jr = /* @__PURE__ */ new Set(["up", "down", "left", "right", "home", "end", "pageup", "pagedown", "page_up", "page_down"]), W = 8, $e = 32;
function Ge(e, r) {
  let o = F(e);
  if (o.length > W) throw new import_chunk_jv7av99m.A(`${r} ${U(o)} has ${o.length} components; at most ${W} are allowed. Send one key, with its modifiers, per action.`, "key chord rejected: too many components");
  let n = o.filter((i) => re.has(i.toLowerCase())), a = o.filter((i) => !re.has(i.toLowerCase()));
  if (a.length > 1 && !(r === "Key chord" && n.every((i) => Gr.has(i.toLowerCase())) && a.every((i) => jr.has(i.toLowerCase())))) throw new import_chunk_jv7av99m.A(`${r} ${U(o)} has ${a.length} keys that are not modifiers (${a.map((i) => (0, import_chunk_w578pjby._)((0, import_chunk_7cfjrnwy.ed)(i, $e))).join(", ")}); a chord is modifier keys plus at most one other key. Send a separate action for each key.`, "key chord rejected: more than one non-modifier key");
  return o;
}
function Ke(e, r, o = []) {
  let n = F(e);
  if (He(n)) throw new import_chunk_jv7av99m.A(`${r} ${U(n)} was refused and nothing was pressed: Space with Control or Option held can open an app launcher, which is outside the apps you have access to. If this shortcut is needed, ask the user to press it.`, "key chord rejected: space with control or option held");
  if (He([...F(o), ...n])) {
    if (r === "Typed text") throw new import_chunk_jv7av99m.A("A space or invisible character in the typed text was refused: another action is holding Control or Option, and together they can open an app launcher. Earlier characters may already have been typed, so check before you try again once that action has finished.", "typed text rejected: overlaps keys held by another action");
    throw new import_chunk_jv7av99m.A(`${r} ${U(n)} was refused and nothing was pressed: another action is holding Control, Option or Space, and together they can open an app launcher. Try again once that action has finished.`, "key chord rejected: overlaps keys held by another action");
  }
}
function je(e, r, o) {
  let n = F(e), a = F(o), i = We(n), f = We(a);
  if (Vr((0, import_chunk_4smdap7r.M)([...f, ...i])).some((S) => [...S.some((s) => i.includes(s)) ? ze(a) : [], ...S.some((s) => f.includes(s)) ? ze(n) : []].some((s) => zAn([...S, s].join("+"), import_chunk_xcgcdx61.ZKn.platform)))) {
    if (r === "Typed text") throw new import_chunk_jv7av99m.A("A character in the typed text was refused: together with keys another action is pressing, it would make a system shortcut. Earlier characters may already have been typed, so check before you try again once that action has finished.", "typed text rejected: system shortcut with keys from another action");
    throw new import_chunk_jv7av99m.A(`${r} ${U(n)} was refused: together with keys another action is pressing, it would make a system shortcut. Try again once that action has finished, or request the \`systemKeyCombos\` grant via request_access if you need the shortcut.`, "key chord rejected: system shortcut with keys from another action");
  }
}
function Ve(e) {
  return e.toLowerCase() === "space" || /^[\p{Zs}\p{Cf}]$/u.test(e);
}
function He(e) {
  return e.some((r) => Kr.has(r.toLowerCase())) && e.some(Ve);
}
function F(e) {
  return e.flatMap((r) => {
    let o = r.trim();
    return o !== "" ? [o] : r.length === 1 ? [r] : [];
  });
}
function qe(e) {
  return re.has(e.toLowerCase());
}
function We(e) {
  return Be(e.filter(qe).join("+")).split("+").filter((r) => r !== "");
}
function ze(e) {
  return e.filter((r) => !qe(r)).map((r) => Ve(r) ? "space" : r);
}
function Vr(e) {
  return e.reduce((r, o) => r.concat(r.map((n) => [...n, o])), [[]]);
}
function U(e) {
  let r = e.slice(0, W).map((n) => (0, import_chunk_7cfjrnwy.ed)(n, $e)).join("+"), o = e.length - W;
  return o > 0 ? `${(0, import_chunk_w578pjby._)(r)} (+${o} more)` : (0, import_chunk_w578pjby._)(r);
}
var z = "com.anthropic.cu.systemMenuBar";
function oe(e) {
  if (!(0, import_chunk_hj4mak61.ous)() || qr()) return;
  let { apps: r } = (0, import_chunk_202wmj18.Z3)();
  if (r.appUnderPoint(e.x, e.y)?.bundleId === z) throw (0, import_chunk_cqa9hrgx.m)("computeruse_menu_bar_check", "menu_bar_at_click"), new import_chunk_jv7av99m.A('Refused: that point is on the menu bar, and no app granted at tier "full" is in front. Clicks below the bar still work, and the user can use the menu bar themselves.', "mouse action refused at the menu bar: front app not at tier full");
}
async function D() {
  if ((0, import_chunk_hj4mak61.ous)()) oe(await v().mouseLocation());
}
function qr() {
  (0, import_chunk_202wmj18.Z3)()._drainMainRunLoop();
  let e = v().getFrontmostAppInfo()?.bundleId, { binding: r, hostAdapter: o } = (0, import_chunk_52ckkfmm.Fh)(), n = r?.ctx;
  if (!e || !n) return false;
  let a = new GAn(n.getAllowedApps(), n.getUserDeniedBundleIds(), { isOutsideAllowedApps: o?.isOutsideAllowedApps }).lookup(e);
  return a.granted && a.tier === "full";
}
var Yr = `
ObjC.import('Cocoa');
ObjC.import('CoreGraphics');
ObjC.bindFunction('CGWindowListCopyWindowInfo', ['id', ['unsigned int', 'unsigned int']]);
var INCLUDING_WINDOW = 8;
function run(argv) {
  $.NSApplication.sharedApplication;
  var primaryHeight = $.NSScreen.screens.objectAtIndex(0).frame.size.height;
  var windowNumber = Number($.NSWindow.windowNumberAtPointBelowWindowWithWindowNumber(
    $.NSMakePoint(parseFloat(argv[0]), primaryHeight - parseFloat(argv[1])),
    0,
  ));
  if (windowNumber === 0) {
    return '';
  }
  var row = ObjC.deepUnwrap($.CGWindowListCopyWindowInfo(INCLUDING_WINDOW, windowNumber))[0];
  var app = $.NSRunningApplication.runningApplicationWithProcessIdentifier(row.kCGWindowOwnerPID);
  if (!app || app.isNil()) {
    return '';
  }
  var bundleId = app.bundleIdentifier;
  return !bundleId || bundleId.isNil() ? '' : bundleId.js;
}
`, Xr = 3e3;
async function ne(e, r) {
  let { stdout: o, code: n, timedOut: a } = await (0, import_chunk_7fsmgfxx.kt)("/usr/bin/osascript", ["-l", "JavaScript", "-e", Yr, "--", String(e), String(r)], { timeout: Xr, useCwd: false });
  if (n !== 0) {
    let i = a ? "timeout" : "osascript_failed";
    throw (0, import_chunk_cqa9hrgx.m)("computeruse_window_owner_check", i), (0, import_chunk_w578pjby.t)(`[computer-use] window owner check failed: ${i}`), Error("macOS did not say which window is at the target point, so the action stopped and any held mouse button was released. Take a new screenshot and try again. If this keeps happening, tell the user.");
  }
  return o.trim() || null;
}
var ae = 0.75, Qr = /* @__PURE__ */ new Set([z, "com.apple.dock", "com.apple.Spotlight", "com.apple.notificationcenterui", "com.apple.controlcenter", "com.apple.WindowManager", "com.apple.systemuiserver"]), Zr = { bundleId: "unidentified window", displayName: "a window that could not be identified" }, Ye = 5e3, Qe = 3e4, Jr = `The app did not finish opening within ${Qe / 1e3} seconds. It may still open, or macOS may be waiting for the user to confirm the launch, so take a screenshot before acting on the screen.`;
function se(e, r, o) {
  let n = Math.round(e * o), a = Math.round(r * o);
  return (0, import_chunk_vrv1km14.KAn)(n, a, import_chunk_vrv1km14.mor);
}
async function le() {
  let { stdout: e, code: r } = await (0, import_chunk_7fsmgfxx.kt)("pbpaste", [], { useCwd: false });
  if (r !== 0) throw Error(`pbpaste exited with code ${r}`);
  return e;
}
async function ce(e) {
  let { code: r } = await (0, import_chunk_7fsmgfxx.kt)("pbcopy", [], { input: e, useCwd: false });
  if (r !== 0) throw Error(`pbcopy exited with code ${r}`);
}
function ie(e, r) {
  let o = (0, import_chunk_hj4mak61.msl)() ? Ge(e, r) : e;
  return Ze(o, r), o;
}
function Ze(e, r) {
  if ((0, import_chunk_hj4mak61.hsl)()) {
    let { binding: o, chordsDown: n } = (0, import_chunk_52ckkfmm.Fh)(), a = [...n].flat();
    if (Ke(e, r, a), !o?.ctx.getGrantFlags().systemKeyCombos || (0, import_chunk_hj4mak61.UWe)().allowed !== void 0) je(e, r, a);
  }
}
function G(e) {
  let { chordsDown: r } = (0, import_chunk_52ckkfmm.Fh)(), o = [...e];
  return r.add(o), { [Symbol.dispose]: () => void r.delete(o) };
}
function Xe(e) {
  if (e.length !== 1) return false;
  let r = e[0].toLowerCase();
  return r === "escape" || r === "esc";
}
var de = 50, eo = 50, to = 64;
async function P(e, r, o) {
  await e.moveMouse(r, o, false), await (0, import_chunk_5appeerh.K)(de);
}
async function Je(e, r) {
  let o;
  while ((o = r.pop()) !== void 0) try {
    await e.key(o, "release");
  } catch {
  }
}
async function ro(e, r, o) {
  let n = [];
  try {
    for (let a of r) await e.key(a, "press"), n.push(a);
    return await o();
  } finally {
    await Je(e, n);
  }
}
async function oo(e, r) {
  let o;
  try {
    o = await le();
  } catch {
    (0, import_chunk_w578pjby.t)("[computer-use] pbpaste before paste failed; proceeding without restore");
  }
  try {
    if (await ce(r), await le() !== r) throw Error("Clipboard write did not round-trip.");
    await e.keys(["command", "v"]), await (0, import_chunk_5appeerh.K)(100);
  } finally {
    if (typeof o === "string") try {
      await ce(o);
    } catch {
      (0, import_chunk_w578pjby.t)("[computer-use] clipboard restore after paste failed");
    }
  }
}
async function no(e, r, o, n) {
  if (!n) {
    await P(e, r, o);
    return;
  }
  let a = await e.mouseLocation(), i = r - a.x, f = o - a.y, h = Math.hypot(i, f);
  if (h < 1) return;
  let S = Math.min(h / 2e3, 0.5);
  if (S < 0.03) {
    await P(e, r, o);
    return;
  }
  let l = 60, s = 1e3 / l, u = Math.floor(S * l);
  for (let g = 1; g <= u; g++) {
    let c = g / u, w = 1 - Math.pow(1 - c, 3);
    if (await e.moveMouse(Math.round(a.x + i * w), Math.round(a.y + f * w), false), g < u) await (0, import_chunk_5appeerh.K)(s);
  }
  await (0, import_chunk_5appeerh.K)(de);
}
function Oni(e) {
  let r = (0, import_chunk_202wmj18.Z3)(), o = false, n = [], { getMouseAnimationEnabled: a, getHideBeforeActionEnabled: i } = e, f = (0, import_chunk_xcgcdx61.B1l)(), h = f ?? import_chunk_xcgcdx61.bZi, S = (l) => f === null ? [...l] : l.filter((s) => s !== f);
  return (0, import_chunk_w578pjby.t)(f ? `[computer-use] terminal ${f} \u2192 surrogate host (hide-exempt, activate-skip, screenshot-excluded)` : "[computer-use] terminal not detected; falling back to sentinel host"), { capabilities: { ...import_chunk_xcgcdx61.ZKn, hostBundleId: import_chunk_xcgcdx61.bZi }, async prepareForAction(l, s) {
    if (!i() || (0, import_chunk_52ckkfmm.Fh)().lettingGoAtTurnEnd) return [];
    return (0, import_chunk_202wmj18.Kqe)(async () => {
      try {
        let u = await r.apps.prepareDisplay(l, h, s);
        if (u.activated) (0, import_chunk_w578pjby.t)(`[computer-use] prepareForAction: activated ${u.activated}`);
        return u.hidden;
      } catch (u) {
        return (0, import_chunk_w578pjby.t)(`[computer-use] prepareForAction failed; continuing to action: ${(0, import_chunk_jv7av99m.d)(u)}`, { level: "warn" }), [];
      }
    });
  }, async previewHideSet(l, s) {
    return r.apps.previewHideSet([...l, h], s);
  }, async getDisplaySize(l) {
    return r.display.getSize(l);
  }, async listDisplays() {
    return r.display.listAll();
  }, async findWindowDisplays(l) {
    return r.apps.findWindowDisplays(l);
  }, async resolvePrepareCapture(l) {
    let s = r.display.getSize(l.preferredDisplayId), [u, g] = se(s.width, s.height, s.scaleFactor);
    return (0, import_chunk_202wmj18.Kqe)(() => r.resolvePrepareCapture(S(l.allowedBundleIds), h, ae, u, g, l.preferredDisplayId, l.autoResolve, l.doHide));
  }, async screenshot(l) {
    let s = r.display.getSize(l.displayId), [u, g] = se(s.width, s.height, s.scaleFactor);
    return (0, import_chunk_5appeerh.qt)(r.screenshot.captureExcluding(S(l.allowedBundleIds), ae, u, g, l.displayId), Ye, "CU screenshot backstop");
  }, async zoom(l, s, u) {
    let g = r.display.getSize(u), [c, w] = se(l.w, l.h, g.scaleFactor);
    return (0, import_chunk_5appeerh.qt)(r.screenshot.captureRegion(S(s), l.x, l.y, l.w, l.h, c, w, ae, u), Ye, "CU zoom backstop");
  }, async key(l, s) {
    var _stack = [];
    try {
      let u = ie(l.split("+"), "Key chord").filter((E) => E.length > 0);
      const g = __using(_stack, G(u));
      let c = v(), w = Xe(u), R = s ?? 1;
      await (0, import_chunk_202wmj18.Kqe)(async () => {
        for (let E = 0; E < R; E++) {
          if (E > 0) await (0, import_chunk_5appeerh.K)(8);
          if (w) (0, import_chunk_202wmj18.Ini)();
          await c.keys(u);
        }
      });
    } catch (_2) {
      var _error = _2, _hasError = true;
    } finally {
      __callDispose(_stack, _error, _hasError);
    }
  }, async holdKey(l, s, u) {
    var _stack = [];
    try {
      let g = ie(l, "Key chord");
      const c = __using(_stack, G(g));
      let w = v(), R = [], E = false;
      try {
        await (0, import_chunk_202wmj18.Kqe)(async () => {
          for (let j of g) {
            if (E) return;
            if (Xe([j])) (0, import_chunk_202wmj18.Ini)();
            await w.key(j, "press"), R.push(j);
          }
        });
        let pe = Date.now() + s;
        while (Date.now() < pe) {
          if (u?.()) return;
          await (0, import_chunk_5appeerh.K)(Math.min(eo, pe - Date.now()));
        }
      } finally {
        E = true, await (0, import_chunk_202wmj18.Kqe)(() => Je(w, R));
      }
    } catch (_2) {
      var _error = _2, _hasError = true;
    } finally {
      __callDispose(_stack, _error, _hasError);
    }
  }, async type(l, s) {
    var _stack = [];
    try {
      let u = v();
      if (s.viaClipboard) {
        await (0, import_chunk_202wmj18.Kqe)(() => oo(u, l));
        return;
      }
      let g = [...l];
      Ze(g, "Typed text");
      const c = __using(_stack, G(g));
      await u.typeText(l);
    } catch (_2) {
      var _error = _2, _hasError = true;
    } finally {
      __callDispose(_stack, _error, _hasError);
    }
  }, readClipboard: le, writeClipboard: ce, async moveMouse(l, s) {
    await P(v(), l, s);
  }, async click(l, s, u, g, c) {
    var _stack = [];
    try {
      let w = c === void 0 ? void 0 : ie(c, "Click modifier chord");
      const R = __using(_stack, G(w ?? []));
      let E = v();
      if (await P(E, l, s), w && w.length > 0) await (0, import_chunk_202wmj18.Kqe)(() => ro(E, w, async () => {
        await D(), await E.mouseButton(u, "click", g);
      }));
      else await D(), await E.mouseButton(u, "click", g);
    } catch (_2) {
      var _error = _2, _hasError = true;
    } finally {
      __callDispose(_stack, _error, _hasError);
    }
  }, async mouseDown() {
    await D(), await v().mouseButton("left", "press"), (0, import_chunk_52ckkfmm.Fh)().leftButtonDown = true;
  }, async mouseUp() {
    await v().mouseButton("left", "release"), (0, import_chunk_52ckkfmm.Fh)().leftButtonDown = false;
  }, async getCursorPosition() {
    return v().mouseLocation();
  }, async drag(l, s) {
    let u = v();
    if (l !== void 0) await P(u, l.x, l.y);
    if ((0, import_chunk_hj4mak61.qAi)()) {
      let g = l ?? await u.mouseLocation();
      for (let c of [s, g]) {
        let w = n.find((R) => R.x === c.x && R.y === c.y);
        if (w !== void 0 && await ne(c.x, c.y) !== w.owner) throw Error("The window at one end of the drag changed after it was checked, so the drag was refused. Take a new screenshot and try again.");
      }
    }
    oe(s), await D(), await u.mouseButton("left", "press"), await (0, import_chunk_5appeerh.K)(de);
    try {
      await no(u, s.x, s.y, a());
    } finally {
      await u.mouseButton("left", "release");
    }
  }, async scroll(l, s, u, g) {
    let c = v();
    if (await P(c, l, s), await D(), g !== 0) await c.mouseScroll(g, "vertical");
    if (u !== 0) await c.mouseScroll(u, "horizontal");
  }, async getFrontmostApp() {
    r._drainMainRunLoop();
    let l = v().getFrontmostAppInfo();
    if (!l || !l.bundleId) return null;
    return { bundleId: l.bundleId, displayName: l.appName };
  }, async getKeyFocusApp() {
    if (!(0, import_chunk_hj4mak61.gsl)()) return this.getFrontmostApp();
    let l = performance.now(), s = v().cuKeyFocusApp(), u = performance.now() - l, g = (0, import_chunk_52ckkfmm.Fh)().keyFocusReadMs;
    if (!s) {
      g.noAnswer = u;
      for (let c = 0; c < to; c++) r._drainMainRunLoop(), await (0, import_chunk_5appeerh.K)(1);
      return null;
    }
    if (g.longest = Math.max(g.longest ?? 0, u), !s.bundleId) return (0, import_chunk_w578pjby.t)(`[computer-use] key-focus owner pid ${s.pid} has no bundle id`), "unknown_process";
    return { bundleId: s.bundleId, displayName: s.appName ?? s.bundleId };
  }, async appUnderPoint(l, s) {
    let u = r.apps.appUnderPoint(l, s);
    if (n = n.filter((c) => c.x !== l || c.y !== s).slice(-1), u === null || u.bundleId === z || !(0, import_chunk_hj4mak61.qAi)()) return u;
    let g = await ne(l, s);
    if (n.push({ x: l, y: s, owner: g }), g === u.bundleId) return u;
    if (g === null) return Zr;
    return Qr.has(g) ? null : { bundleId: g, displayName: g };
  }, async listInstalledApps() {
    let { apps: l, spotlightIncomplete: s } = await (0, import_chunk_202wmj18.Kqe)(() => r.apps.listInstalled());
    return o = s, l;
  }, isAppIndexIncomplete() {
    return o;
  }, async getAppIcon(l) {
    return r.apps.iconDataUrl(l) ?? void 0;
  }, async listRunningApps() {
    return r.apps.listRunning();
  }, async openApp(l, s) {
    return (0, import_chunk_5appeerh.qt)(r.apps.open(l, s?.activates ?? true), Qe, Jr);
  } };
}
async function jXl(e) {
  if (e.length === 0) return;
  await (0, import_chunk_202wmj18.Z3)().apps.unhide([...e]);
}
