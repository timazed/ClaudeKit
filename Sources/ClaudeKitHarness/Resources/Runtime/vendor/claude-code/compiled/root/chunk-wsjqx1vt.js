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
var chunk_wsjqx1vt_exports = {};
__export(chunk_wsjqx1vt_exports, {
  $qs: () => $qs,
  DGo: () => DGo,
  Fqs: () => Fqs,
  HGo: () => HGo,
  fCa: () => fCa,
  mCa: () => mCa,
  pCa: () => pCa
});
module.exports = __toCommonJS(chunk_wsjqx1vt_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_43nz5n02 = require("/$bunfs/root/chunk-43nz5n02.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_r6r2wdsw = require("/$bunfs/root/chunk-r6r2wdsw.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var R = ["set_up", "gh_installed", "path_search_failed", "essential_traffic_only", "third_party_provider", "relay_leaves_github_out", "github_tools_denied", "offer_set_aside", "still_trying", "failed"];
var Fqs = { set_up: "set up: the session's gh is Claude Code's built-in `gh api`", gh_installed: "not set up: a gh is installed on the session's PATH, and is left alone", path_search_failed: "not set up: the search of the session's PATH for an installed gh failed or took too long. Claude Code's debug log for the session may say more (claude-code-debug.txt; the operator guide says where it lies and how long it is kept)", essential_traffic_only: "not set up: the session's settings disable nonessential traffic (CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC in a settings file, or in your organization's server-managed settings)", third_party_provider: "not set up: the session's model provider is not Anthropic's own API (CLAUDE_CODE_USE_BEDROCK, another provider's switch or a gateway), and the built-in gh sends its requests to Anthropic", relay_leaves_github_out: "not set up: this environment's selective relay does not carry GitHub's API host, which the built-in gh needs", github_tools_denied: "not set up: the session's settings restrict Claude's GitHub tools, and it is offered by default only (--use-anthropic-gh true sets it up all the same)", offer_set_aside: "not set up: the session's own environment or settings made Claude Code turn the offer down (CLAUDE_CODE_CHILD_SESSION, or a variable of its GitHub proxy, from the server or a settings file)", still_trying: "not set up yet: the first try failed, usually because Anthropic's certificate for the built-in gh's connection could not be fetched from api.anthropic.com. Claude Code keeps trying while the session runs, and what it then says comes here as a later report", failed: "not set up: Claude Code began to set it up and stopped. Claude Code's debug log for the session may say more (claude-code-debug.txt; the operator guide says where it lies and how long it is kept)" };
function m(e) {
  return e === "unknown" ? "Claude Code reported a result that this runner does not recognize, most likely because Claude Code is newer than the runner (update the runner to read it). Claude Code's debug log for the session may say more (claude-code-debug.txt; the operator guide says where it lies and how long it is kept)" : Fqs[e];
}
function fCa(e) {
  return "[built-in gh] " + e;
}
function w(e) {
  if (!/^\[built-in gh\] [a-z_]{1,40}$/.test(e)) return;
  return R.find((n) => e === "[built-in gh] " + n) ?? "unknown";
}
function pCa() {
  let e, n = /* @__PURE__ */ new Set();
  return { wordsFor(a) {
    let r = w(a);
    if (r === void 0) return;
    if (e === void 0) return e = r, m(r);
    if (e !== "still_trying" || r === "still_trying" || n.has(r)) return;
    return n.add(r), "later report, on an output that the session's own commands can also write to: " + m(r);
  }, wordsAtEnd() {
    if (e === void 0) return "Claude Code ended without saying whether it set up the built-in gh. Claude Code's debug log for the session may say more (claude-code-debug.txt; the operator guide says where it lies and how long it is kept)";
    return e === "still_trying" && n.size === 0 ? "not set up: Claude Code ended while it was still trying to set it up. Claude Code's debug log for the session may say more (claude-code-debug.txt; the operator guide says where it lies and how long it is kept)" : void 0;
  } };
}
function mCa(e, n = false) {
  return (!n ? `if [ -n "\${GH_TOKEN:-}\${GITHUB_TOKEN:-}\${GH_ENTERPRISE_TOKEN:-}\${GITHUB_ENTERPRISE_TOKEN:-}" ]; then
  exec '${e}' "$@"
fi
` : `case "\${GH_TOKEN:-}" in ''|'${import_chunk_r6r2wdsw.BX}') ;; *) exec '${e}' "$@" ;; esac
case "\${GITHUB_TOKEN:-}" in ''|'${import_chunk_r6r2wdsw.BX}') ;; *) exec '${e}' "$@" ;; esac
if [ -n "\${GH_ENTERPRISE_TOKEN:-}\${GITHUB_ENTERPRISE_TOKEN:-}" ]; then
  exec '${e}' "$@"
fi
`) + `host="\${GH_HOST:-}"
repo="\${GH_REPO:-}"
prev=''
for a in "$@"; do
  if [ "$prev" = '--hostname' ]; then host="$a"; prev=''; continue; fi
  if [ "$prev" = '--repo' ]; then repo="$a"; prev=''; continue; fi
  case "$a" in
    --hostname) prev='--hostname' ;;
    --hostname=*) host="\${a#--hostname=}" ;;
    -R|--repo) prev='--repo' ;;
    --repo=*) repo="\${a#--repo=}" ;;
    -R=*) repo="\${a#-R=}" ;;
    -R?*) repo="\${a#-R}" ;;
  esac
done
# Hostnames are case-insensitive \u2014 normalize before every compare.
host="$(printf %s "$host" | tr '[:upper:]' '[:lower:]')"
if [ -n "$host" ] && [ "$host" != '${import_chunk_43nz5n02.Vr}' ]; then
  exec '${e}' "$@"
fi
# A -R/--repo/GH_REPO [HOST/]OWNER/REPO (or URL) carries its own host
# and overrides the checkout. Otherwise repo-scoped commands resolve
# their target from the checkout remote, not GH_HOST \u2014 treat a
# non-github.com origin as a GHE signal. An EXPLICIT github.com host
# above skips the origin probe: it must not be kicked off the relay
# by the checkout heuristic.
rhost=''
if [ -n "$repo" ]; then
  case "$repo" in
    *://*) rhost="\${repo#*://}"; rhost="\${rhost%%/*}"; rhost="\${rhost##*@}"; rhost="\${rhost%%:*}" ;;
    */*/*) rhost="\${repo%%/*}" ;;
  esac
elif [ -z "$host" ]; then
  origin="$(git config --get remote.origin.url 2>/dev/null || true)"
  case "$origin" in
    *://*) rhost="\${origin#*://}"; rhost="\${rhost%%/*}"; rhost="\${rhost##*@}"; rhost="\${rhost%%:*}" ;;
    *@*:*) rhost="\${origin#*@}"; rhost="\${rhost%%:*}" ;;
  esac
fi
rhost="$(printf %s "$rhost" | tr '[:upper:]' '[:lower:]')"
if [ -n "$rhost" ] && [ "$rhost" != '${import_chunk_43nz5n02.Vr}' ]; then
  exec '${e}' "$@"
fi
`;
}
var N = ["/etc/ssl/certs/ca-certificates.crt", "/etc/pki/tls/certs/ca-bundle.crt"], C = 1048576, k = 8388608;
function f(e) {
  return e.replace(/\s/g, "");
}
async function HGo(e, n, a = N) {
  if (e === void 0) return { status: "unavailable", reason: "variable_unset" };
  let r = await DGo(e, C);
  if (r.kind !== "text") return { status: "unavailable", reason: r.kind === "too_large" ? "file_too_large" : "file_unreadable" };
  if (/^-----BEGIN (?!CERTIFICATE-----)[A-Z0-9 ]*CERTIFICATE-----/m.test(r.text)) return { status: "unavailable", reason: "file_other_certificate_kinds" };
  let u = r.text.match(import_chunk_3jjr3wje.yI);
  if (!u) return { status: "unavailable", reason: "file_not_pem" };
  let o = /* @__PURE__ */ new Set(), s, p = [];
  for (let i of a) {
    let _ = await DGo(i, k);
    if (_.kind !== "text") continue;
    let E = (0, import_chunk_3jjr3wje.hJe)(_.text, "git trust bundle", void 0, o);
    if (E?.match(import_chunk_3jjr3wje.yI)) {
      s = E, p = _.text.match(import_chunk_3jjr3wje.yI) ?? [];
      break;
    }
  }
  if (s === void 0) return { status: "unavailable", reason: "no_system_roots" };
  let T = (0, import_chunk_3jjr3wje.hJe)(r.text, "git trust bundle", void 0, o)?.match(import_chunk_3jjr3wje.yI) ?? [], c = new Set(s.match(import_chunk_3jjr3wje.yI)), h = s.endsWith(`
`) ? s : `${s}
`;
  for (let i of T) if (!c.has(i)) c.add(i), h += `${i}
`;
  try {
    await (0, import_chunk_q7qjcthc.yr)(n, h, 384);
  } catch (i) {
    return (0, import_chunk_w578pjby.t)(`[runner:session] governed git: the trust bundle could not be written: ${(0, import_chunk_jv7av99m.d)(i)}`, { level: "warn" }), await (0, import_promises.unlink)(n).catch(() => {
    }), { status: "unavailable", reason: "bundle_write_failed" };
  }
  let b = new Set([...c].map(f)), g = new Set([...p, ...u].map(f).filter((i) => !b.has(i))).size, I = new Set((0, import_chunk_3jjr3wje.nKn)(h)), l = new Set([...o].filter((i) => I.has(i)).map(f)).size;
  if (l > 0) (0, import_chunk_w578pjby.t)(`[runner:session] governed git: kept ${l} certificate block(s) in the trust bundle without checking their keys against the deny list, because this runtime could not parse them or read their keys`);
  return { status: "built", path: n, ...g > 0 && { certificatesLeftOut: g }, ...l > 0 && { certificatesUnjudged: l } };
}
async function $qs(e) {
  try {
    await (0, import_promises.unlink)(e);
  } catch (n) {
    if (!(0, import_chunk_jv7av99m.J)(n)) throw n;
  }
}
async function DGo(e, n) {
  let a;
  try {
    a = await (0, import_promises.open)(e, import_fs.constants.O_RDONLY | import_chunk_q7qjcthc.Ege);
  } catch {
    return { kind: "unreadable" };
  }
  try {
    let r = await a.stat();
    if (!r.isFile()) return { kind: "unreadable" };
    if (r.size > n) return { kind: "too_large" };
    let u = Buffer.alloc(n + 1), o = 0;
    while (o < u.length) {
      let { bytesRead: s } = await a.read(u, o, u.length - o, o);
      if (s === 0) break;
      o += s;
    }
    if (o > n) return { kind: "too_large" };
    return { kind: "text", text: u.toString("utf8", 0, o) };
  } catch {
    return { kind: "unreadable" };
  } finally {
    await a.close().catch(() => {
    });
  }
}
