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
var chunk_s1g9cytz_exports = {};
__export(chunk_s1g9cytz_exports, {
  a5s: () => a5s,
  axa: () => axa,
  i5s: () => i5s,
  ixa: () => ixa,
  lVr: () => lVr,
  oxa: () => oxa,
  sxa: () => sxa
});
module.exports = __toCommonJS(chunk_s1g9cytz_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_f2vegtjy = require("/$bunfs/root/chunk-f2vegtjy.js");
var import_chunk_qsvts4bv = require("/$bunfs/root/chunk-qsvts4bv.js");
var import_chunk_mha8pjbc = require("/$bunfs/root/chunk-mha8pjbc.js");
var import_chunk_bsnb5bky = require("/$bunfs/root/chunk-bsnb5bky.js");
var import_chunk_r9mc45j8 = require("/$bunfs/root/chunk-r9mc45j8.js");
var import_chunk_m9439hrw = require("/$bunfs/root/chunk-m9439hrw.js");
var import_chunk_hsfenxnq = require("/$bunfs/root/chunk-hsfenxnq.js");
var import_chunk_h46f12bd = require("/$bunfs/root/chunk-h46f12bd.js");
var import_chunk_s72sr7gg = require("/$bunfs/root/chunk-s72sr7gg.js");
var import_chunk_r48wrczg = require("/$bunfs/root/chunk-r48wrczg.js");
var import_chunk_339n78pp = require("/$bunfs/root/chunk-339n78pp.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_591v79xj = require("/$bunfs/root/chunk-591v79xj.js");
var import_chunk_s7qm8psr = require("/$bunfs/root/chunk-s7qm8psr.js");
var import_chunk_nwk8fexj = require("/$bunfs/root/chunk-nwk8fexj.js");
var import_chunk_ht78eyc4 = require("/$bunfs/root/chunk-ht78eyc4.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var j = null, A = null;
function H(e, s = ", and ") {
  let t = e.join(s);
  return t === "" ? "" : ` ${t[0].toUpperCase()}${t.slice(1)}.`;
}
var D = " `preflight.js` at the artifact root is reserved: it runs against open pages when Claude publishes updates, and it must be a JavaScript module of at most 8 KiB whose default export is a function, or the publish is refused.";
function I(e) {
  let s = ["publish", "list", "read"];
  if (e.roomOn) s.push("room_send");
  if (e.deleteOn || e.assetsOn) s.push("delete");
  if (e.openOn) s.push("open");
  if (e.pinOn) s.push("pin", "unpin");
  if (e.handlersOn) s.push("get_endpoints", "call_endpoint", "run_script");
  if (e.quickstartOn) s.push("quickstart");
  if (e.shareOn) s.push("share");
  return s;
}
function G(e) {
  let s = [...import_chunk_f2vegtjy.Xwr, "types"];
  if (e.multiFileOn) s.push("files");
  if (e.assetsOn) s.push("assets");
  return s;
}
function J(e) {
  return `One of ${I(e).map((t) => `'${t}'`).join(", ")}. Omitting it means 'publish'. **Calls** in the description says what each one does and takes, except as noted here.${e.handlersOn && A ? A.HANDLERS_CLAUSE : ""}${e.versionsOn ? import_chunk_h46f12bd._wr : ""}`;
}
function m(e, s) {
  let t = e.description ?? "";
  for (let [i, h] of s) t = t.replace(i, h);
  return e.describe(t);
}
function K(e, s) {
  let t = s.shape, i = (...h) => Object.fromEntries(h.filter((u) => u in t).map((u) => [u, t[u]]));
  return (0, import_chunk_adx6804h.Ae)({ action: (0, import_chunk_adx6804h.F)(I(e)).optional().describe(J(e)), file_path: (0, import_chunk_adx6804h.n)().optional().describe(`publish: the local page Claude publishes (.html, or .md only when a skill says so).${e.typesOn ? " For an Artifact created from an Artifact type, it is one of that Artifact's data files." : ""}${e.assetsOn ? " With `asset: true`, it is the local file Claude uploads." : ""} A short, distinctive basename also serves as the title when nothing else gives one.`), ...e.assetsOn && { asset: (0, import_chunk_adx6804h.P)().optional().describe(e.copyOn ? "publish with `url`: true uploads `file_path` (or each of `file_paths`) to that artifact's asset store instead of publishing it as the page \u2014 or, with `from_url` and `asset_ids` in place of `file_path`, copies those assets of another artifact into it server side (see **Calls**)." : "publish with `url`: true uploads `file_path` (or each of `file_paths`) to that artifact's asset store instead of publishing it as the page (see **Calls**)."), ..."file_paths" in t && { file_paths: m(t.file_paths, [["upload_asset:", "publish with `asset: true` only:"]]) }, ...e.copyOn && "from_url" in t && { from_url: m(t.from_url, [["copy_from only:", "publish with `asset: true`, in place of `file_path`:"], ["one you can open", "one the person can open"]]), asset_ids: m(t.asset_ids, [["copy_from only:", "publish with `asset: true` and `from_url` only:"], ["(its list_assets or upload_asset results)", '(from a `scope: "assets"` listing of it, or an upload result)']]) } }, ..."favicon" in t && { favicon: t.favicon.describe("Deprecated; Claude omits it and uses `icon`.") }, ..."icon" in t && { icon: t.icon.describe(`One short generic word for the artifact's browser-tab icon, such as chart, calendar, recipe, code or map: a plain signifier, never a product or brand name. Claude includes it on every page's first publish and omits it on a redeploy so the artifact keeps its icon, passing a new one only when the person asks.${e.typesOn ? " Ignored on an Artifact created from an Artifact type." : ""}`) }, ..."files" in t && !e.copyOn && { files: t.files.describe(`Supporting files to publish alongside the page, as a map {"published/path": "source/path" | {from, contentType} | null}. The key is what the HTML references. The source is a path on disk, or {from, contentType} when the type cannot be inferred from the published extension. null removes that path on an update, and files left out are kept. A plain list publishes each file at its own spelling. Sources must be under the working directory or Claude's scratchpad directory.` + D) }, ..."files" in t && e.copyOn && { files: t.files.describe(`Supporting files to publish alongside the page, as a map {"published/path": "source/path" | {from, contentType} | {artifact, path, ver?} | null}. The key is what the HTML references. The source is a path on disk, or {from, contentType} when the type cannot be inferred from the published extension. An {artifact, path} source copies that Artifact's published file on the server: an Artifact the person can open, with its type carried over, never an HTML or XML document, and at most ${import_chunk_f2vegtjy.q8e} source Artifact versions per publish. null removes that path on an update, and files left out are kept. A plain list publishes each file at its own spelling. Sources must be under the working directory or Claude's scratchpad directory.` + D) }, ..."edits" in t && { edits: t.edits.describe((0, import_chunk_339n78pp.iuo)({ core: true, typesOn: e.typesOn, multiFileOn: e.multiFileOn })) }, ..."root" in t && { root: t.root.describe(`The base directory that relative \`files\` sources resolve against, like a bundler root. ${e.typesOn ? "It never changes the published path of a `files` entry" : "It never changes published paths"}. It is relative to the working directory, or absolute within it or within Claude's scratchpad directory.` + (e.typesOn ? " It requires `files`, except on an Artifact made from a type, where a data `file_path` is served at its path relative to `root`, unless a `files` map entry states its served path. Claude sends it with every such publish, set to the folder that holds the Artifact's files at their served paths." : " It requires `files`.")) }, ...e.pinOn && "pin" in t && { pin: t.pin.describe("publish only: true also pins the published artifact to the person's claude.ai sidebar once it is published. Claude passes it only when the person asked for that. A failed pin never fails the publish, and the result says so.") }, limit: t.limit.describe(`list only: the maximum number of artifacts to return (default ${import_chunk_r8478wtb.VNe}).`), page_token: t.page_token, scope: (0, import_chunk_adx6804h.F)(G(e)).optional().describe(`list: which listing to return. 'mine' is the default. The others are ${["'shared'", "'all'", e.typeCatalogOn ? "'types'" : "", e.multiFileOn ? "'files' (with `url`)" : "", e.assetsOn ? "'assets' (with `url`, continued with `after`)" : ""].filter(Boolean).reduce((h, u, y, o) => h + (y === 0 ? "" : y === o.length - 1 ? " and " : ", ") + u, "")}. See **Calls**.`), ...e.typeCatalogOn && { type_query: (0, import_chunk_adx6804h.n)().max(200).optional().describe("list with scope 'types' only: limits the listing to the types whose title or description match this text best, ignoring case; a type that matches less well is left out, so a narrowed listing is not the whole catalog. Claude omits it when choosing a type for a request, unless a listing made without it says more types exist than it shows."), type: (0, import_chunk_adx6804h.n)().max(200).optional().describe("list only: the name of a published Artifact type, as a 'types' listing shows it (case does not matter). The listing then shows the Artifacts made from that type instead of the person's gallery. Claude passes this or `type_url`, not both.") }, ...i("intent", "design_systems"), title: (0, import_chunk_adx6804h.n)().optional().describe(`publish: the fallback title for an HTML page whose file has no <title>. It is a name, not a summary, and Claude keeps it the same across redeploys.${e.typeCreateOn ? " On a `type_url` create, it is the new Artifact's name: what the person called it, or a short descriptive name. If it is left out, the Artifact is named after the type." : ""}`), description: (0, import_chunk_adx6804h.n)().max(1e3).optional().describe("publish: one sentence for the subtitle on the gallery card."), ..."session_context" in t && { session_context: t.session_context.describe(`Context stored with the version so that a later session can pick up the work: ${import_chunk_mha8pjbc.rgl}. Required on an artifact's first publish. After that, Claude omits it unless things changed, since it replaces the stored text.`) }, ..."label" in t && { label: t.label.describe(`A short name for this publish, at most ${import_chunk_r8478wtb.Toe} characters (e.g. "Draft to legal"). Optional. It is a few words, not a description.`) }, ...i("deadline"), ...i("overwrite_unread"), url: (0, import_chunk_adx6804h.n)().optional().describe('An existing artifact\'s claude.ai link (claude.ai/artifact/{id} or claude.ai/code/artifact/{uuid}); a chat, project or session link is not one, and `action: "list"` lists the person\'s artifacts. On a publish, it is the artifact to update in place, one the person owns or was given edit access to (a read of it says "writer"). Before publishing to an artifact this conversation has neither read nor published, Claude reads it (`action: "read"`) and builds on what comes back; a publish sent without that read is refused. A refusal that hands Claude the live version counts as that read: Claude merges its changes into that version and publishes the result, and never resends the refused content unchanged. Claude omits `url` for a new artifact or to redeploy a file this conversation already published. For read, delete and the other calls that take a URL, it is the artifact to act on.'), ...(e.typeCreateOn || e.typeCatalogOn) && { type_url: (0, import_chunk_adx6804h.n)().max(2048).optional().describe((e.typeCreateOn ? "publish: the Artifact type to create this new, private Artifact from (a link from a 'types' listing). Claude omits `url`. Any `file_path`/`files` passed become the new Artifact's own files beside the type's fixed ones." : "An Artifact type's link.") + (e.typeCatalogOn ? ` read (no \`url\`): the type to describe. list: the type whose Artifacts to list, or Claude names the type with \`type\` instead.${e.typeCreateOn ? "" : " Creating an Artifact from a type is not available in this session, so it is accepted only with those two actions."}` : "")) }, ..."auto_open" in t && { auto_open: t.auto_open.describe('Only with `type_url` and no `file_path`: when the new Artifact opens for the person. Claude passes "after_first_write" when it will fill the Artifact right after creating it with a files publish to its url, so the person does not first see it empty. The Artifact then opens on that first write. Otherwise Claude omits it, and the Artifact opens when created; Claude always omits it for a type whose content it writes through a connector, such as a Claude Docs document, since no publish or store write follows to open it.') }, prompt: (0, import_chunk_adx6804h.n)().optional().describe("read, for an artifact shared with the person: what Claude needs from it, which steers the isolated summary."), force: (0, import_chunk_adx6804h.P)().optional().describe("publish: a last-resort overwrite that **discards** the newer published version. On a conflict, Claude merges its changes onto the newer content that the rejection hands it and publishes again. Claude passes true only when the person explicitly said to discard that specific version, and the server may still refuse it over a version saved from inside the page."), ...(e.assetsOn || e.multiFileOn) && { out_dir: t.out_dir.describe("read with `path`: the directory to save into. The default is this artifact's folder in Claude's scratchpad directory, where saving needs no approval." + (e.multiFileOn ? " A published file lands at <out_dir>/<published path>, and saving it outside that default folder asks the person first." : "") + (e.assetsOn ? " An asset's file is named by its id plus its type's extension; saving it outside the default folder is an ordinary file save the person may be asked to approve." : "")) }, ...(e.assetsOn || e.multiFileOn || e.handlersOn) && { path: (0, import_chunk_adx6804h.n)().max(e.handlersOn && j ? j.MAX_HANDLER_TARGET_CHARS : import_chunk_mha8pjbc.sM).optional().describe([e.multiFileOn ? `read: the file's published path inside the artifact, exactly as a 'files' listing printed it ("index.html" is the page itself). The file is saved locally, the result says where, and a small text file's contents are included.` : "", e.assetsOn ? `${e.multiFileOn ? "It can instead be an" : "read: an"} uploaded asset's id (32 hex characters, from an 'assets' listing or an upload result), and that asset is saved to a local file. delete: the id of the one asset to remove.` : "", e.handlersOn && A ? A.CALL_HANDLER_PATH_DESCRIBE : ""].filter(Boolean).join(" ")) }, ..."paths" in t && { paths: t.paths.describe(`read: several published paths in place of \`path\`, up to ${import_chunk_mha8pjbc.I0e} in one call. Each file is saved as a single \`path\` would be, and the result lists where each one landed, or why it could not be read, with small text files' contents included while they fit.`) }, ...e.handlersOn && i("method", "body", "body_file", "mode", "script"), ...e.shareOn && i("mode", "people", "access"), ...e.versionsOn && i("version"), ...e.assetsOn && { after: (0, import_chunk_adx6804h.n)().regex(import_chunk_r48wrczg.fTe).optional().describe("list with scope 'assets' only: the `next` value from a previous listing, passed to continue it.") }, ..."page" in t && { page: t.page.describe(`read only: true returns the rendered page in cases where a read otherwise returns something else.${H([e.typeCatalogOn ? "a typed Artifact's read leaves out the type's own page" : ""].filter(Boolean))}`) }, ..."topic" in t && { topic: t.topic.describe('room_send only: the event topic, which the page listens to through its room capability. It is lowercase and starts with a letter, followed by letters, digits, "_", "-" or ".", at most 48 characters.') }, ...e.roomOn && { data: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional().describe("room_send: the event payload, a JSON object of at most 4 KiB when serialized. Claude omits it for a bare signal.") }, ..."capabilities" in t && { capabilities: t.capabilities.describe(`publish: the runtime capabilities this page declares, as {name: config}. Claude loads the \`${import_chunk_nwk8fexj.Hx}\` skill before passing it. On a redeploy Claude omits the field to keep what the page has, and {} clears it.`), contract: t.contract.describe("publish: the artifact's runtime version. Leaving it out keeps the current version (the default), 'latest' upgrades, and an exact version pins or rolls back. It changes how the published page behaves, so Claude passes it only when the author explicitly intends that change.") } });
}
var x = (0, import_chunk_2cbgkbm2.p)(() => K((0, import_chunk_s72sr7gg.TMe)(), (0, import_chunk_s72sr7gg.SW)()));
function Y(e) {
  let s = e.shape.action;
  return Object.keys(import_chunk_qsvts4bv.Vpe).filter((t) => (0, import_chunk_s72sr7gg.Gqe)(s, t));
}
function X() {
  return [...Object.keys((0, import_chunk_s72sr7gg.i8r)(true)), ...Object.keys((0, import_chunk_s72sr7gg.l8r)()), ...Object.keys((0, import_chunk_s72sr7gg.a8r)()), "data", "out_dir"];
}
function W(e, s, t) {
  let i = Y(s);
  if (i.length === 0) return t;
  let h = s.shape, u = Object.fromEntries(X().filter((y) => y in h).map((y) => [y, h[y]]));
  return (0, import_chunk_adx6804h.Ae)({ ...u, ...t.shape, action: (0, import_chunk_adx6804h.F)([...I(e), ...i]).optional().describe(t.shape.action.description ?? "") });
}
var U = (0, import_chunk_2cbgkbm2.p)(() => W((0, import_chunk_s72sr7gg.TMe)(), (0, import_chunk_s72sr7gg.SW)(), x()));
function Q(e) {
  let s = (0, import_chunk_s72sr7gg.l8r)();
  return (0, import_chunk_adx6804h.Ae)({ action: (0, import_chunk_adx6804h.F)(["read", "reply", "resolve", "watch"]).describe("'read' reads the comment threads on the artifact at `url` (add `thread_id` for one thread, or `cursor` to continue a listing); 'reply' posts `text` into the thread `thread_id`; 'resolve' marks that thread resolved; 'watch' manages this session's artifact watches \u2014 with `url` it starts watching that artifact (`on: false` stops), with no `url` it lists this session's watches and rooms" + (e.watchRail === "live" ? ", and `replies: true` re-enables automatic comment replies that were stopped or paused for the artifact at `url` (only when the user explicitly asked; approved the way a publish is)." : ".")), url: (0, import_chunk_adx6804h.n)().optional().describe("The artifact's claude.ai URL. Required for every action except a bare 'watch' listing."), thread_id: m(s.thread_id, [["comments: read just", "read: read just"], ['action "comments"', 'action "read"']]), text: s.text, cursor: m(s.cursor, [["comments only:", "read only:"]]), acknowledge_duplicate: s.acknowledge_duplicate, on: (0, import_chunk_adx6804h.P)().optional().describe("watch only: false stops watching the artifact at `url`; omit (or true) to start."), ...e.watchRail === "live" && { replies: (0, import_chunk_adx6804h.P)().optional().describe("watch only: true re-enables automatic comment replies for the artifact at `url` after the user stopped or paused them \u2014 pass it ONLY when the user explicitly asked to resume.") } });
}
function ee(e) {
  let s = e.shape, t = "old_str" in s, i = (0, import_chunk_s72sr7gg.i8r)(t);
  return (0, import_chunk_adx6804h.Ae)({ action: (0, import_chunk_adx6804h.F)([...import_chunk_bsnb5bky.LWt, ...import_chunk_bsnb5bky.Vje, ...t ? [import_chunk_bsnb5bky.UP] : [], import_chunk_h46f12bd.b0, import_chunk_h46f12bd.B8e]).describe(`Reads: 'get' (one document: \`collection\` + \`doc_id\`), 'list' (a page of a collection: \`collection\`, with optional \`query.limit\`/\`query.cursor\`), 'query' (filtered: \`collection\` + \`query\`), 'profiles' (people's display names: \`ids\`, nothing else). Writes: 'set' (replace) or 'update' (merge) with \`collection\`, \`doc_id\`, and either \`data\` or \`file_path\`;${t ? " 'str_replace' with `collection`, `doc_id`, `field`, `old_str`, `new_str` \u2014 swaps one exact, unique piece of text inside a string field without resending the field (`replace_all`: every occurrence);" : ""} 'delete' with \`collection\` + \`doc_id\`; 'batch' with \`writes\`. Every action takes the artifact's \`url\`.`), url: (0, import_chunk_adx6804h.n)().optional().describe("The artifact's claude.ai URL. Required."), writes: m(i.writes, [["write_db with db_op 'batch' only:", "action 'batch' only:"], ["separate write_db calls", "separate calls"]]), collection: m(i.collection, [["Required for read_db and write_db.", "Required for every action except 'batch' and 'profiles'."]]), ids: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).min(1).max(import_chunk_591v79xj.AYt).optional().describe(`action 'profiles' only: the people to name, 1-${import_chunk_591v79xj.AYt} ids exactly as a document or live event showed them ("u_" plus 22 characters).`), doc_id: m(i.doc_id, [["Required for db_op", "Required for action"]]), query: m(i.query, [["Options for db_op", "Options for action"]]), ...i.field !== void 0 && { field: m(i.field, [["write_db with db_op 'str_replace' only:", "action 'str_replace' only:"]]), old_str: m(i.old_str, [["write_db with db_op 'str_replace' only:", "action 'str_replace' only:"]]), new_str: m(i.new_str, [["write_db with db_op 'str_replace' only:", "action 'str_replace' only:"]]), replace_all: m(i.replace_all, [["write_db with db_op 'str_replace' only:", "action 'str_replace' only:"]]), if_version: m(i.if_version, [["write_db with db_op 'set', 'update', 'str_replace' or 'delete'", "action 'set', 'update', 'str_replace' or 'delete'"], ["every read_db document", "every document a get, list or query returns"]]) }, data: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional().describe('set and update: the document fields to write, as a JSON object \u2014 pass exactly one of `data` or `file_path`. In an update, a field given as `{"__delete__": true}` is removed instead.'), file_path: (0, import_chunk_adx6804h.n)().optional().describe("set and update: a local JSON file whose top-level object is sent as the document \u2014 an alternative to inline `data`, so a large document need not pass through the conversation."), ..."out_dir" in s && { out_dir: s.out_dir.describe("get, list and query: when given, each returned document is written as pretty-printed JSON to <out_dir>/<collection path>/<doc_id>.json (directories created as needed) and the result lists the files instead of the document contents \u2014 use it for large documents or many of them.") }, as_level: m(i.as_level, [["read_db and write_db only: act", "Act"]]) });
}
function te(e) {
  let s = (0, import_chunk_s72sr7gg.a8r)(), t = e.previewOn && (0, import_chunk_r9mc45j8.Z5)() === "emulator", i = [];
  if (e.verifyOn) i.push("verify");
  if (e.previewOn) i.push("preview");
  return (0, import_chunk_adx6804h.Ae)({ action: (0, import_chunk_adx6804h.F)(i.length > 0 ? i : ["verify"]).describe(((e.verifyOn ? import_chunk_h46f12bd.dwr : "") + (e.previewOn ? t ? import_chunk_h46f12bd.fwr : import_chunk_h46f12bd.cwr : "")).trim()), ...e.verifyOn && { url: (0, import_chunk_adx6804h.n)().optional().describe("verify: the artifact's claude.ai URL \u2014 omit to target this session's most recent publish.") }, ...e.previewOn && { file_path: (0, import_chunk_adx6804h.n)().optional().describe(t ? "preview: the page's .html file to look at in the artifact viewer." : "preview: the local .html page to render.") }, ...e.previewOn && !t && { widths: s.widths, themes: s.themes } });
}
var oxa = (0, import_chunk_2cbgkbm2.p)(() => Q((0, import_chunk_s72sr7gg.TMe)())), sxa = (0, import_chunk_2cbgkbm2.p)(() => ee((0, import_chunk_s72sr7gg.SW)())), ixa = (0, import_chunk_2cbgkbm2.p)(() => te((0, import_chunk_s72sr7gg.TMe)()));
function i5s(e, s, t) {
  let i = t !== void 0 && typeof s === "object" && s !== null ? t(s, e) : s;
  return (0, import_chunk_hsfenxnq.dV)((0, import_chunk_bz1f2qnq.Z)(e), i, "ask");
}
function a5s(e, s, t, i, h, u, y = { deny: null, ask: () => null }) {
  let o = (0, import_chunk_bz1f2qnq.Z)(h), r = u !== void 0 && typeof t === "object" && t !== null ? u(t, h) : t, c = y.deny ?? (0, import_chunk_hsfenxnq.dV)(o, r, "deny");
  if (c) return { behavior: "deny", message: `Permission to use ${e} has been denied by your rule ${(0, import_chunk_591v79xj.nq)(c)}.`, decisionReason: { type: "rule", rule: c } };
  let d = s(), l = d?.behavior === "deny" ? null : y.ask() ?? (0, import_chunk_hsfenxnq.dV)(o, r, "ask");
  if (!l) return d;
  return d?.behavior === "ask" ? { ...d, matchedAskRule: d.matchedAskRule ?? l } : { behavior: "ask", message: `Your ask rule ${(0, import_chunk_591v79xj.nq)(l)} covers this call, and its full permission check could not complete \u2014 approving covers only this call.`, updatedInput: { ...i, [import_chunk_m9439hrw.RS]: false }, suppressAlwaysAllowRule: true, decisionReason: { type: "rule", rule: l } };
}
function k(e) {
  let s = e?.action;
  return typeof s === "string" ? s : void 0;
}
function lVr(e, s) {
  if (e === void 0 || !("updatedInput" in e) || e.updatedInput === void 0) return e;
  return { ...e, updatedInput: s(e.updatedInput) };
}
var se = [[/action:? "upload_asset"|\bupload_asset\b/g, "publish with `asset: true`"], [/action:? "read_file"|\bread_file\b/g, "read with a file `path`"], [/action:? "read_asset"|\bread_asset\b/g, "read with an asset id as `path`"], [/action:? "list_files"|\blist_files\b/g, 'list with `scope: "files"`'], [/action:? "list_assets"|\blist_assets\b/g, 'list with `scope: "assets"`'], [/action:? "list_types"|\blist_types\b/g, 'list with `scope: "types"`'], [/action:? "describe_type"|\bdescribe_type\b/g, "read with `type_url`"], [/action:? "delete_asset"|\bdelete_asset\b/g, "delete with an asset id as `path`"], [/action:? "copy_from"|\bcopy_from\b/g, "publish with `asset: true` and `from_url`"], [/`asset_id`/g, "`path` (the asset id)"], [/\basset_id\b/g, "path (the asset id)"]];
function N(e) {
  let s = import_chunk_r8478wtb.P9i.exec(e), t = s === null ? e.length : s.index, i = e.slice(0, t);
  for (let [h, u] of se) i = i.replace(h, u);
  return i + e.slice(t);
}
function ne(e) {
  if (typeof e !== "object" || e === null || !("action" in e)) return e;
  let { action: s, ...t } = e;
  return t;
}
function q(e) {
  return e !== void 0 && e.behavior === "deny" ? { ...e, message: N(e.message) } : e;
}
var M = { delete: 'deleting a whole Artifact is not available in this session \u2014 `delete` here takes `path` (an uploaded asset\'s id, from a `scope: "assets"` listing) and removes that one asset', read_asset: "`path` looks like an uploaded asset's id, but this session cannot read an artifact's asset store \u2014 pass a file's published path", delete_asset: "`path` looks like an uploaded asset's id, but this session cannot change an artifact's asset store", read_file: "reading one published file by `path` is not available in this session \u2014 `path` here takes an uploaded asset's id; read the whole artifact with `url` alone", describe_type: "`type_url` here only starts a new Artifact from that type \u2014 reading a type's details is not available in this session", copy_from: "copying another artifact's assets (`from_url`) is not available in this session \u2014 `asset: true` here takes a local `file_path` to upload" }, ae = /* @__PURE__ */ new Set(["body"]);
function L(e) {
  let s = e ?? "publish";
  if ((0, import_chunk_s72sr7gg.Gqe)((0, import_chunk_s72sr7gg.SW)().shape.action, s)) return null;
  return Object.hasOwn(M, s) ? M[s] : `action "${s}" is not available in this session`;
}
function axa(e, s = {}) {
  let t = import_chunk_ht78eyc4.Fg, i = e, h = (o) => (r, ...c) => i[o].call(e, t() ? (0, import_chunk_qsvts4bv.D0e)(r) : r, ...c), u = (o) => i[o] === void 0 ? {} : { [o]: h(o) }, y = { get inputSchema() {
    return t() ? U() : i.inputSchema;
  }, get inputJSONSchema() {
    return t() ? (0, import_chunk_sjqze7qg.Pq)(x()) : i.inputJSONSchema;
  }, streamedInputRepairExemptKeys() {
    let o = i.streamedInputRepairExemptKeys?.();
    return t() ? /* @__PURE__ */ new Set([...o ?? [], ...ae]) : o;
  }, prompt(o, ...r) {
    return t() ? Promise.resolve((0, import_chunk_s7qm8psr.Cti)(o?.tools)) : i.prompt.call(e, o, ...r);
  }, isConcurrencySafe: h("isConcurrencySafe"), isReadOnly: h("isReadOnly"), ...u("isDestructive"), ...u("ignoresWholeToolAllowRule"), ...u("suppressesAlwaysAllowRule"), ...u("getPath"), toAutoClassifierInput: h("toAutoClassifierInput"), ...u("staleServerClassifierContext"), description: h("description"), ...u("getToolUseSummary"), ...i.permissionCheckFailureDecision !== void 0 && { permissionCheckFailureDecision(o, ...r) {
    let c = r[0], d = t(), l = d ? (0, import_chunk_qsvts4bv.D0e)(o) : o, b = (0, import_chunk_bz1f2qnq.Z)(c), g = { name: i.name, ruleContentField: i.ruleContentField };
    return a5s(i.name, () => {
      let v = i.permissionCheckFailureDecision.call(e, l, ...r);
      return d ? q(lVr(v, import_chunk_qsvts4bv.dRe)) : v;
    }, l, o, c, s.ruleTargetInput, { deny: (0, import_chunk_hsfenxnq.Aan)(b, g, l, "deny"), ask: () => (0, import_chunk_hsfenxnq.Aan)(b, g, l, "ask") });
  } }, async checkPermissions(o, ...r) {
    let c = r[0], d = t(), l = d ? (0, import_chunk_qsvts4bv.D0e)(o) : o;
    if (d) {
      let w = L(k(l));
      if (w !== null) return { behavior: "deny", message: w, decisionReason: { type: "other", reason: w } };
    }
    let b = d ? l : (0, import_chunk_qsvts4bv.dRe)(o), g = b !== o, v = d ? b : ne(b), R = { name: i.name, ruleContentField: i.ruleContentField }, O = (0, import_chunk_bz1f2qnq.Z)(c), E = (g ? (0, import_chunk_ht27b0vz.pu)(O, R, v, "deny") : null) ?? (0, import_chunk_hsfenxnq.Aan)(O, R, l, "deny");
    if (E) return { behavior: "deny", message: `Permission to use ${R.name} has been denied by your rule ${(0, import_chunk_591v79xj.nq)(E)}.`, decisionReason: { type: "rule", rule: E } };
    let z = await i.checkPermissions.call(e, l, ...r), _ = d ? q(lVr(z, import_chunk_qsvts4bv.dRe)) : z;
    if (_.behavior !== "deny") {
      let w = (g ? (0, import_chunk_ht27b0vz.pu)(O, R, v, "ask") : null) ?? (0, import_chunk_hsfenxnq.Aan)(O, R, l, "ask") ?? i5s(c, l, s.ruleTargetInput);
      if (w) return _.behavior === "ask" ? { ..._, matchedAskRule: w } : { behavior: "ask", message: await i.description.call(e, l, ...r), decisionReason: { type: "rule", rule: w }, ..."updatedInput" in _ && _.updatedInput !== void 0 && { updatedInput: _.updatedInput } };
    }
    return _;
  }, ...i.validateInput !== void 0 && { async validateInput(o, ...r) {
    if (!t()) return i.validateInput.call(e, o, ...r);
    let c = (0, import_chunk_qsvts4bv.D0e)(o), d = k(c), l = L(d);
    if (l !== null) return { result: false, message: l, errorCode: 8 };
    if (d !== void 0 && (0, import_chunk_qsvts4bv.D$n)(d)) (0, import_chunk_y53wbr8a.a)("tengu_artifact_legacy_verb", { verb: (0, import_chunk_78g0060s.f)(d), disposition: (0, import_chunk_78g0060s.S)("served") });
    let b = await i.validateInput.call(e, c, ...r);
    return b.result ? b : { ...b, message: N(b.message) };
  } }, async call(o, ...r) {
    if (!t()) return i.call.call(e, o, ...r);
    let c = (0, import_chunk_qsvts4bv.D0e)(o), d = L(k(c));
    if (d !== null) throw new import_chunk_r8478wtb.pt(d, "core_verb_unavailable");
    try {
      return await i.call.call(e, c, ...r);
    } catch (l) {
      if (l instanceof import_chunk_r8478wtb.pt) l.message = N(l.message);
      throw l;
    }
  }, hookMatcherFamilyNames(o) {
    let r = (0, import_chunk_hsfenxnq.Can)(i, o);
    return r === void 0 ? [] : [r.tool.name];
  }, coerceInput(o) {
    let r = k(o);
    if (t()) {
      if (r !== void 0 && import_chunk_qsvts4bv.ogl.includes(r)) {
        let c = (0, import_chunk_qsvts4bv.dRe)(o);
        return c === o ? null : { input: c, shapeClass: `artifact_legacy_verb_${r}` };
      }
      if (r === "read" && (0, import_chunk_ma3kja9f.T)(o) && typeof o.path === "string" && o.type_url === void 0 && o.out_dir === void 0) {
        let c = o.path.replace(import_chunk_r8478wtb.HOr, "");
        if (c !== o.path && import_chunk_r8478wtb.ey.test(c)) {
          let d = { ...o, path: c }, l = i.coerceInput?.call(e, d);
          return l ? { ...l, shapeClass: `asset_url_to_id+${l.shapeClass}` } : { input: d, shapeClass: "asset_url_to_id" };
        }
      }
    } else {
      let c = (0, import_chunk_qsvts4bv.D0e)(o);
      if (c !== o) return { input: c, shapeClass: `artifact_core_verb_${r ?? "publish"}` };
    }
    return i.coerceInput?.call(e, o) ?? null;
  } };
  return Object.defineProperties(Object.defineProperties({}, Object.getOwnPropertyDescriptors(e)), Object.getOwnPropertyDescriptors(y));
}
