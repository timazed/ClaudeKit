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
var chunk_zfx767v7_exports = {};
__export(chunk_zfx767v7_exports, {
  $Xt: () => $Xt,
  Ati: () => Ati,
  M5o: () => M5o,
  SAn: () => SAn,
  Wrr: () => Wrr,
  cFa: () => cFa,
  dFa: () => dFa,
  dUe: () => dUe,
  fFa: () => fFa,
  gFa: () => gFa,
  hFa: () => hFa,
  jqe: () => jqe,
  lFa: () => lFa,
  mFa: () => mFa,
  o8r: () => o8r,
  pFa: () => pFa,
  r8r: () => r8r,
  uFa: () => uFa
});
module.exports = __toCommonJS(chunk_zfx767v7_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_hr2stdq7 = require("/$bunfs/root/chunk-hr2stdq7.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_f2vegtjy = require("/$bunfs/root/chunk-f2vegtjy.js");
var import_chunk_q2a93xh8 = require("/$bunfs/root/chunk-q2a93xh8.js");
var import_chunk_mha8pjbc = require("/$bunfs/root/chunk-mha8pjbc.js");
var import_chunk_kzzkh06w = require("/$bunfs/root/chunk-kzzkh06w.js");
var import_chunk_h46f12bd = require("/$bunfs/root/chunk-h46f12bd.js");
var import_chunk_nwk8fexj = require("/$bunfs/root/chunk-nwk8fexj.js");
var import_chunk_ht78eyc4 = require("/$bunfs/root/chunk-ht78eyc4.js");
var import_path = require("path");
var import_path2 = require("path");
var Ati = "in this session's scratch folder", I = import_chunk_r8478wtb.dK.source.replace(/\{2,\}$/, ""), R = [..."abcdefghijklmnopqrstuvwxyz"].map(import_chunk_hr2stdq7.Tee).join(""), P = `[^\\p{L}\\p{N}${R}]`, L = `(?=[\\p{L}\\p{N}])(?:\\p{Default_Ignorable_Code_Point}|${I})`, u = `(?:${P}|${L})`, c = (e) => [...e].map((a) => `[${(0, import_chunk_hr2stdq7.Tee)(a)}]`).join(""), w;
function N() {
  return w ??= new RegExp(`${c("in")}${u}+${c("this")}${u}+${c("session")}${u}*${c("s")}${u}+${c("scratch")}${u}+${c("folder")}`, "giu"), w;
}
function jqe(e) {
  return e.replace(N(), "in-this-sessions-scratch-folder");
}
function Wrr(e, a) {
  return C(e, a);
}
function C(e, a) {
  if (e === "") return { shown: "", inScratchpad: false };
  let t;
  try {
    t = (0, import_chunk_n2dbhmj2.xt)(e);
  } catch {
    return { shown: e, inScratchpad: false };
  }
  let r = (a ?? [(0, import_chunk_p1ewvgeh.Fx)()].filter((o) => o !== null && o !== "")).find((o) => o !== "" && t.startsWith(o + import_path.sep)), i = a === void 0 && (0, import_chunk_p1ewvgeh.Pre)(t);
  if (r === void 0 && !i) {
    let o = (0, import_chunk_2yx6c1y2.Po)(t), h = e.split(/[\\/]/).some((l) => l === ".." || l === ".");
    return { shown: o !== t ? o : h ? t : e, inScratchpad: false };
  }
  return { shown: r !== void 0 ? (0, import_path.relative)(r, t).split(import_path.sep).join("/") : (0, import_path.basename)(t), inScratchpad: true };
}
var p = 4096, M = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
function b(e) {
  let a = (0, import_chunk_kzzkh06w.cy)(e);
  if (a === "image/png") return e.length >= 8 && e.subarray(0, 8).equals(M) ? a : null;
  return a === "image/jpeg" ? a : null;
}
function k(e, a) {
  if (a === "image/png") {
    if (e.length < 24 || e.readUInt32BE(8) !== 13 || e.toString("latin1", 12, 16) !== "IHDR") return null;
    return { width: e.readUInt32BE(16), height: e.readUInt32BE(20) };
  }
  let t = 2;
  while (t + 4 <= e.length) {
    if (e[t] !== 255) return null;
    let n = e[t + 1];
    if (n === 255) {
      t += 1;
      continue;
    }
    if (n === 1 || n >= 208 && n <= 215) {
      t += 2;
      continue;
    }
    if (n === 217 || n === 218) return null;
    let r = e.readUInt16BE(t + 2);
    if (r < 2 || t + 2 + r > e.length) return null;
    if (n >= 192 && n <= 207 && n !== 196 && n !== 200 && n !== 204) {
      if (n > 194) return "unsupported";
      if (r < 7) return null;
      return { height: e.readUInt16BE(t + 5), width: e.readUInt16BE(t + 7) };
    }
    t += 2 + r;
  }
  return null;
}
var f = "the automatic screenshot is used instead", U = "nothing was published", j = 1200;
function m(e) {
  return (0, import_chunk_r8478wtb.qu)((0, import_chunk_r8478wtb.z1)(e, j));
}
var SAn = '`<link rel="artifact-thumbnail" href="thumb.png">` at the top of the HTML (the same first 8KB as the title) sets the artifact\'s gallery and link-preview image: a PNG or JPEG of about 1200\xD7630 and at most 1MB, saved next to the HTML file and referenced by a relative path. A second such tag with `media="(prefers-color-scheme: dark)"` sets a dark-mode variant. Without the tag, a screenshot of the page is used.';
function r8r(e, a) {
  let t = (0, import_chunk_r8478wtb.z9i)(e), n = { skipped: [], problems: [] };
  if (t.pastWindow) n.skipped.push(`A <link rel="artifact-thumbnail"> tag past the first ${import_chunk_r8478wtb.eVt} characters of the file (or after an <svg>) was ignored; only tags at the top, next to <title>, count.`);
  if (t.oversizeTag) n.skipped.push("A <link> tag naming artifact-thumbnail is longer than 2 kB, so it was not read \u2014 keep the tag to its rel, href and media attributes.");
  if (t.missingHref) n.problems.push('a <link rel="artifact-thumbnail"> tag has no href \u2014 name the image file, or remove the tag');
  if (t.badMedia !== void 0) n.problems.push(`a <link rel="artifact-thumbnail"> tag has media=${(0, import_chunk_w578pjby._)(t.badMedia)}; the only media value allowed is "(prefers-color-scheme: dark)" (for the dark-mode variant) \u2014 remove or fix the attribute`);
  if (t.dark !== void 0 && t.light === void 0) n.problems.push(`a dark-mode thumbnail (media="(prefers-color-scheme: dark)") needs a default <link rel="artifact-thumbnail"> as well \u2014 add one without a media attribute${t.pastWindow ? `, within the first ${import_chunk_r8478wtb.eVt} characters (the one further down does not count)` : ""}${t.oversizeTag ? " (the over-long tag that was not read does not count)" : ""}`);
  let r = (0, import_path2.dirname)(a);
  for (let i of ["light", "dark"]) {
    let s = t[i];
    if (s === void 0) continue;
    let o = s.startsWith("./") ? s.slice(2) : s, h = (0, import_chunk_mha8pjbc.Jhl)(o);
    if ("errMsg" in h) {
      n.problems.push(h.errMsg);
      continue;
    }
    n[i] = { href: s, rel: h.rel, fromAbs: (0, import_path2.join)(r, (0, import_path2.normalize)(o)), dark: i === "dark" };
  }
  return n.skipped = n.skipped.map(m), n.problems = n.problems.map(m), n;
}
function M5o(e) {
  return [e.light?.href, e.dark?.href].filter((a) => a !== void 0);
}
function lFa(e, a) {
  if (e.problems.length > 0) return [];
  return [e.light, e.dark].filter((t) => t !== void 0 && a.some(([n, r]) => (0, import_chunk_mha8pjbc.hEt)(t.fromAbs, n, r)));
}
function H(e) {
  return `${Math.ceil(e / 1e3)} kB`;
}
function d(e) {
  return new import_chunk_r8478wtb.pt(`${m(e)}; ${U}`, "thumbnail_invalid");
}
function y(e, a) {
  let t = (0, import_chunk_w578pjby._)(e), n = b(a);
  if (n === null) throw d(`thumbnail ${t} is not a PNG or JPEG image (its bytes match neither format) \u2014 save the image as PNG or JPEG, or remove the <link rel="artifact-thumbnail"> tag`);
  if (a.length > import_chunk_mha8pjbc.Xhl) throw d(`thumbnail ${t} is ${H(a.length)}, over the 1 MB thumbnail limit \u2014 export a smaller image (about 1200\xD7630)`);
  let r = k(a, n);
  if (r === "unsupported") throw d(`thumbnail ${t} uses a JPEG encoding that cannot be read (arithmetic-coded, lossless or hierarchical) \u2014 re-export it as a baseline or progressive JPEG, or as PNG`);
  if (r === null) throw d(`thumbnail ${t}: the image's dimensions could not be read (its header is malformed) \u2014 re-export it as PNG or JPEG`);
  if (r.width < 1 || r.height < 1 || r.width > p || r.height > p) throw d(`thumbnail ${t} is ${r.width}\xD7${r.height}; each side must be 1 to ${p} pixels \u2014 export it at about 1200\xD7630`);
  return a;
}
async function dFa(e, a, t, n) {
  if (e.problems.length > 0) throw d(e.problems.join("; "));
  let r = { skipped: [...e.skipped] };
  for (let i of ["light", "dark"]) {
    let s = e[i];
    if (s === void 0) continue;
    let o = (0, import_chunk_w578pjby._)(s.href);
    if (i === "dark" && r.light === void 0) {
      r.skipped.push(`The dark-mode thumbnail ${o} was not sent because the default one was not; ${f}.`);
      continue;
    }
    let h = n.declarationCurrent ? a?.find((A) => A.path === s.rel) : void 0;
    if (h !== void 0) {
      r[i] = y(s.href, typeof h.content === "string" ? Buffer.from(h.content) : h.content);
      continue;
    }
    if (!n.named.includes(s.href)) {
      r.skipped.push(`The custom thumbnail ${o} was not sent because ${n.unnamedReason ?? `this publish's approval could not name it (the image is outside the working directory${n.scratchpadDir !== void 0 ? " and your scratchpad directory" : ""}, a Read rule covers it, or a Read approval was pending for this publish)`}; ${f}. To use it, keep the image beside the page inside the working directory${n.scratchpadDir !== void 0 ? " or your scratchpad directory" : ""} and allow Read for that folder so the approval can name it.`);
      continue;
    }
    let l = await (0, import_chunk_mha8pjbc.Qhl)(s.href, s.fromAbs, t, n);
    if ("errMsg" in l) {
      if (l.missing) throw d(`${l.errMsg} \u2014 save the image next to the HTML file (or fix the href), or remove the <link rel="artifact-thumbnail"> tag`);
      if (l.tooLarge) throw d(`thumbnail ${o} is far over the 1 MB thumbnail limit \u2014 export a smaller image (about 1200\xD7630)`);
      r.skipped.push(`${l.errMsg.replace(/\.$/, "")}. For this publish, ${f}.`);
      continue;
    }
    r[i] = y(s.href, l.content);
  }
  return r.skipped = r.skipped.map(m), r;
}
function cFa(e) {
  let a = e.map((t) => `"${jqe((0, import_chunk_r8478wtb.lB)(t.href) || "(unprintable path)")}"${t.dark ? " (dark)" : ""}`);
  if (a.length === 0) return "";
  return a.length === 1 ? ` Also uploads a custom thumbnail, ${a[0]}.` : ` Also uploads custom thumbnails ${a[0]} and ${a[1]}.`;
}
function o8r() {
  return `**Pages that keep their state**: a page this user publishes can save new versions of itself \u2014 the artifact publish capability, declared as \`${import_chunk_q2a93xh8.a9}\` \u2014 so a checklist, tracker, plan, or poll keeps its editors' changes for whoever opens it. If people will change things on the page itself (tick items off, edit entries), or fellow editors should fill it in, build it to save itself; load the \`${import_chunk_nwk8fexj.Hx}\` skill first for the how-to. A page only read needs none of this.`;
}
function uFa() {
  return ' Watching for new comments isn\'t available in this session, so none reach it on their own: read them with `action: "comments"` when the user asks, and if the user expects you to notice comments as they arrive, say so plainly.';
}
function fFa(e, a) {
  return a === "none" ? `**Watching for republishes**: not available in this session \u2014 nothing notifies it when an artifact is republished elsewhere${e ? " or when a comment on one is sent to Claude" : ""}, and \`action: "watch"\` only reports that. If the user asks you to watch an artifact, say so plainly, and never claim you are watching one. \`action: "status"\` lists this session's watches (pass \`url\` to check one); \`action: "unwatch"\` with \`url\` stops one.${e ? "" : import_chunk_h46f12bd.tat}` : a === "durable" ? `**Watching for republishes**: in this remote session a watch is a durable wake subscription held by the artifact service, not a live connection: this session is woken with a new turn when the watched artifact is republished elsewhere${e ? ", or when a comment on it is sent to Claude" : ""}; nothing streams in between, so on a wake re-read the artifact${e ? " (and its comments, on a comment wake)" : ""} before editing.${e ? ' Plain comments never wake this session \u2014 read them with `action: "comments"` when the user asks.' : import_chunk_h46f12bd.tat} Publishing an artifact starts registering its watch in the background, and the result line says whether that began, was skipped, or was already registered; \`action: "status"\` lists the watches that actually registered and what wakes each (pass \`url\` to check one). To watch an artifact you did not just publish, pass \`action: "watch"\` with its \`url\`; \`action: "unwatch"\` with \`url\` stops one. Do not claim you are watching an artifact unless a watch result, \`status\`, or a publish result's "already registered" line says so \u2014 its "arming" line is not yet a watch.` : `**Watching for republishes**: publishing an artifact starts subscribing this session to its live changes in the background, and the result line says whether that began, was skipped, or was already connected \u2014 \`status\` shows whether it actually connected, and you are told if it cannot; watches reconnect on their own if the connection drops. To watch an artifact you did not just publish (or to restart a stopped watch), pass \`action: "watch"\` with its \`url\`; a later republish from elsewhere \u2014 another session, or someone saving from a page that can publish new versions of itself \u2014 starts no turn and sends no notification. Some Artifact results open with one line saying a newer version was published; when one does, fetch the artifact's URL again (the \`${import_chunk_r8478wtb.Vt}\` tool's \`action: "read"\`, not your local file) and merge your edits onto that version before publishing. When a publish is refused because the artifact changed, follow the refusal, which usually hands you that version to merge.${e ? ' A comment on a watched artifact that is sent to Claude wakes this session, but only while that artifact\'s `status` row says auto-replies armed (when comment auto-replies are on for this session, a publish arms those, and so does `action: "watch"` on an artifact the user can edit whose link the user gave in their own message \u2014 never on one the user can only view); plain comments never notify this session \u2014 read them with `action: "comments"` when the user asks.' : import_chunk_h46f12bd.tat} \`action: "status"\` lists this session's watches (pass \`url\` to check one); \`action: "unwatch"\` with \`url\` stops one. Watches are session-local, and the user can see and stop them in /tasks. ${e ? "After a `--resume` or `--continue` in an interactive terminal, the watch on the artifact this session most recently published or read usually comes back, along with every watch that was replying to comments (replying again, unless the user had stopped it); other clients may restore nothing. `status` shows what is armed." : "After a `--resume` or `--continue` in an interactive terminal, the watch on the artifact this session most recently published or read usually comes back; other clients may restore nothing. `status` shows what is armed."} Do not claim you are watching an artifact unless a watch result, \`status\`, or a publish result's "already connected" line says so \u2014 its "arming" line is not yet a watch. Only a main-loop session (interactive, SDK, or background) holds a watch, not a subagent, teammate, or print session.`;
}
var G = "**External resources \u2014 CDN allowlist (CSP-enforced)**: external scripts load ONLY from https://cdnjs.cloudflare.com (preferred), https://cdn.jsdelivr.net/npm/, https://unpkg.com, https://cdn.tailwindcss.com (Tailwind's play-CDN script) and https://code.jquery.com; external stylesheets ONLY from https://fonts.googleapis.com, with the font files they pull from https://fonts.gstatic.com (give every face a real fallback stack). Everything else is blocked, with no visible error: every other host (esm.sh included) and, even on those CDNs, anything but a script \u2014 stylesheets, images, media, fetch/XHR/WebSocket, a library's runtime fetches. So inline all other CSS and JS and embed assets as data: URIs.", F = "**Responsive**: The page must also work at phone width (about 400px), and the page body must never scroll horizontally. Keep a side gutter of at least 16px at every width, written `padding-left: max(16px, env(safe-area-inset-left, 0px))` and `padding-right: max(16px, env(safe-area-inset-right, 0px))` so that it also clears a system bar at the phone's side: set it once on `body` or one outer wrapper (where colored bands span the width, on each band's inner wrapper), and give that element its vertical padding with `padding-block`, never a `padding` shorthand that zeroes the sides. Use relative units. Let flex and grid rows wrap or stack to one column when narrow, and give any flex or grid child that holds running text, code or a table `min-width: 0`, so long content wraps or scrolls inside it instead of pushing the page wider. Put `max-width: 100%` on images and on any `aspect-ratio` box, and give nothing a `min-width` wider than the screen. Only tables, diagrams and code blocks may be wider, each inside its own `overflow-x: auto` container.", W = '**Theme-aware**: The page renders in the viewer\'s theme, which has three states: an explicit choice sets `data-theme="dark"` or `data-theme="light"` on the root element, and the default "system" setting sets nothing, so for most viewers only `prefers-color-scheme` tells light from dark. Define every color as a token, in this shape (token names and count are the design\'s own):\n```css\n:root { --bg: \u2026; --fg: \u2026; --accent: \u2026 }  /* every token, light values */\n@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { --bg: \u2026; --fg: \u2026; --accent: \u2026; color-scheme: dark } }\n:root[data-theme="dark"] { --bg: \u2026; --fg: \u2026; --accent: \u2026; color-scheme: dark }  /* same dark values, so the toggle wins both ways */\nbody { background: var(--bg); color: var(--fg) }\n```\nEvery token gets its first definition on bare `:root`; the two dark blocks only redefine tokens, and their `color-scheme: dark` makes form controls and scrollbars follow. No color has its only definition inside a media or `[data-theme]` block, and no component rule uses a literal color that reads in one theme only. `body` keeps that explicit token background: the viewer paints its own ground behind the page, so a transparent body shows the host\'s theme instead. A dark-first design mirrors the whole shape, selectors included: dark values and `color-scheme: dark` on bare `:root` (the skeleton pins `light` there), light values and `color-scheme: light` under `(prefers-color-scheme: light)` guarded `:root:not([data-theme="dark"])` and again under `:root[data-theme="light"]`. A design that deliberately commits to a single look may drop the two dark blocks but still sets the background and every color explicitly, plus `color-scheme: dark` on `:root` if that look is dark.', v = `${G} **How to load a library**: \`<script src="https://cdnjs.cloudflare.com/ajax/libs/<lib>/<exact version>/<file>">\` \u2014 pick the UMD build, which defines a global (e.g. react/18.3.1/umd/react.production.min.js, then react-dom) \u2014 placed BEFORE any inline \`<script>\` that uses it. Pin every library URL to an exact version (\`react@18.3.1\` on jsDelivr or unpkg, \`react/18.3.1/\u2026\` on cdnjs, \`cdn.tailwindcss.com/3.4.17\`), never a bare name, a range or a tag (\`react\`, \`react@18\`, \`@latest\`). Choose a version at least two weeks old. Any version you knew before this conversation is old enough; if you look versions up, skip any published in the last two weeks. The viewer's sandbox also blocks any download the page starts itself \u2014 \`<a download>\` links (data:/blob: hrefs included) and script-driven saves are inert for viewers \u2014 so never offer a file through a plain link. Links to other websites (\`https://\u2026\`) open in a new tab, but email, phone and app links (\`mailto:\`, \`tel:\`, \`sms:\`, other custom schemes) are unreliable inside an artifact: for many viewers (for example anyone outside the user's organization, or anyone viewing through a public link) following one, by link or by script, often does not work, and the page cannot tell whether it did. So show the address or number itself as selectable text (a copy button helps), treat such a link as a convenience that may do nothing, and never tell the viewer a message was sent or a call placed because the viewer tapped one. Artifacts render mermaid diagrams natively \u2014 markdown via \`\`\`mermaid fences, HTML via \`<pre class="mermaid">\` blocks \u2014 no library needed, don't load one. The viewer never shows \`alert()\`, \`confirm()\` or \`prompt()\` dialogs \u2014 \`confirm()\` returns false and \`prompt()\` returns null immediately \u2014 so build any confirmation step into the page itself.

**What the viewer's frame allows**: The page runs in a locked-down frame; what it refuses below, it refuses for every viewer (anonymous, signed-in, embedded, desktop and mobile apps), so build around these limits instead of detecting them. The page cannot open the print dialog \u2014 \`window.print()\` does nothing \u2014 so never offer a Print or "Save as PDF" button. Forms work as page UI (inputs, validation, submit events), but a real submission has nowhere to go: handle \`submit\` in script with \`preventDefault()\` and never point \`action\` at another site or a mailto: address. Copy buttons work when \`navigator.clipboard.writeText\` is called inside the click handler \u2014 catch its rejection (older desktop apps and some app views refuse it) and fall back to selecting the text; reading the clipboard never works, though the viewer's own Paste (the \`paste\` event) does. Camera, microphone, screen capture, location, motion, Web Share and similar device APIs are refused without a prompt \u2014 build on one only when this user has a runtime capability for that device (the \`${import_chunk_nwk8fexj.Hx}\` skill lists them) and the page declares it; otherwise take photos, audio and data as uploaded files instead (file inputs, drag-and-drop of files and \`FileReader\` work in browsers). A screen wake lock may be granted while the page is visible: request it and tolerate rejection. Fullscreen and pointer lock work from a click in desktop browsers; treat both as optional (handle the rejection) since phones and some app views lack them. Sound plays only after the viewer interacts (muted autoplay is fine), so start audio from a button. Other sites cannot be embedded \u2014 no YouTube, map or form iframes, and no \`<object>\`/\`<embed>\`; link out instead: links open outside the artifact, normally in a new tab, while \`window.open\` works only for some signed-in viewers in the artifact's own organization and returns null for everyone else, so use real \`<a href>\` links. Web Workers work from your own files or \`blob:\` URLs; service workers and WebRTC do not. \`fetch()\` of files published alongside the page works with relative URLs; images from your own files, \`data:\` or \`blob:\` URLs draw to canvas and export cleanly. Only a plain \`#name\` passes between the artifact's link and \`location.hash\`, never \`#/path\`, \`#key=value\`, a \`pushState\` path or a query string. The address bar on the artifact's own page and Share's Copy link follow the page's hash; beside a chat, in a project or in an app the bar may not. Only where a page has several views worth bookmarking or sending, route on the hash: name each in ASCII letters, digits and hyphens (never \`settings\`, \`sidebar\`, \`customize\`, \`upgrade\`, \`downloads\` or \`comment-*\`, which claude.ai reserves) and show the one in \`location.hash\`, or the start view if none, on load and on \`hashchange\`. Keep other state in the page, and keys, tokens or private values out of the hash: it shows in history and copied links.

**Browser storage**: \`localStorage\` (also \`sessionStorage\` and IndexedDB) works, but each artifact has its own origin and the data lives only in that viewer's browser \u2014 it survives republishes to the same URL and never reaches other viewers, other devices, or Claude. It can come back empty or the accessor can throw (a private window, cleared or blocked site data, previews or thumbnail capture), so wrap every read and write in try/catch and render the page correctly without it. Use it only for per-viewer conveniences (a remembered tab or filter, a collapsed section, an unsent draft), never for state that must persist reliably, be shared between viewers, or be read back by Claude \u2014 state like that belongs in a runtime capability when this user has one: load the \`${import_chunk_nwk8fexj.Hx}\` skill before writing the page.

**Size**: The rendered page must be ${import_chunk_f2vegtjy.EE / 1024 / 1024}MB or smaller, and embedded data: URIs count toward that. Put any dataset over about 100KB beside the page as a .csv file, or a .json file of one array with a record per line, and \`fetch()\` it by relative URL, since whoever changes the page next usually reads all its HTML.

${F}

${W}

**Icon** (on every first publish): Pass one short generic word as \`icon\` (e.g. \`"chart"\`, \`"calendar"\`, \`"recipe"\`) for the artifact's browser-tab icon \u2014 a plain signifier for what the page is, never a product or brand name, and never an emoji or markup. It stays the **same** for the life of an artifact, so on a redeploy (the same file path this session, or \`url\`) omit \`icon\` and the artifact keeps the one it has; pass a different one only when the user asks.`, T = [[`Camera, microphone, screen capture, location, motion, Web Share and similar device APIs are refused without a prompt \u2014 build on one only when this user has a runtime capability for that device (the \`${import_chunk_nwk8fexj.Hx}\` skill lists them) and the page declares it; otherwise take photos, audio and data as uploaded files instead (file inputs, drag-and-drop of files and \`FileReader\` work in browsers). A screen wake lock may be granted while the page is visible: request it and tolerate rejection.`, "Camera, microphone, screen capture, location, Web Share and similar device APIs are refused without a prompt \u2014 don't build features on them (a screen wake lock may be granted while the page is visible: request it and tolerate rejection); file inputs, drag-and-drop of files and `FileReader` work in browsers, so take photos, audio and data as uploaded files instead."]];
function dUe(e, a) {
  let t = e;
  for (let [n, r] of a) {
    if (!t.includes(n)) throw Error("core prompt: a lifted paragraph lacks a spelling it rewrites");
    t = t.replaceAll(n, r);
  }
  return t;
}
var pFa = [['`action: "status"` lists the rooms', `the \`${import_chunk_r8478wtb.sh}\` tool's \`watch\` action with no \`url\` lists the rooms`]], mFa = [['`action: "status"` lists the rooms this session is in and, while your own user has the page open, the presence data their page shares with the room', "no tool in this session lists the rooms it is in; while your own user has the page open, their page shares presence data with the room"]];
function $Xt(e) {
  let a = new Set((e ?? []).map((t) => t.name));
  return { comments: a.has(import_chunk_r8478wtb.sh), data: a.has(import_chunk_r8478wtb.Zf), check: a.has(import_chunk_r8478wtb.G1) };
}
var K = "the Artifact tool's description lists the few other script hosts the CSP admits", z = "the page contract above lists the few other script hosts the CSP admits";
function hFa(e) {
  let a = q();
  return a === "" ? e : a + e.replace(K, z);
}
function S() {
  let e = (0, import_chunk_f2vegtjy.dle)() ? `**Thumbnail** (optional): ${SAn}

` : "";
  return `${import_chunk_h46f12bd.PNi}

**Skeleton**: ${import_chunk_h46f12bd.ONi}

${import_chunk_h46f12bd.INi}

${e}${v}`;
}
function q() {
  if (!(0, import_chunk_ht78eyc4.Fg)()) return "";
  return `## Page contract \u2014 read before your first publish

These are the Artifact tool's own rules for the file you publish; the design guidance below builds on them.

${S()}

`;
}
function gFa() {
  return `**Page contract** (the \`artifact-design\` skill is not available in this session, so its rules follow here):

${dUe(S(), T)}`;
}
