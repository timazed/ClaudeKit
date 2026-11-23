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
var chunk_3d2897vr_exports = {};
__export(chunk_3d2897vr_exports, {
  $Z: () => $Z,
  BCr: () => BCr,
  JTl: () => JTl,
  KTl: () => KTl,
  QTl: () => QTl,
  VTl: () => VTl,
  XTl: () => XTl,
  YTl: () => YTl,
  oTt: () => oTt,
  qTl: () => qTl
});
module.exports = __toCommonJS(chunk_3d2897vr_exports);
var VTl = "--gh-standin", oTt = ".ghe.com";
var KTl = "--any-host", BCr = "standalone-proxy", qTl = "gh: this session's proxy is not set (HTTPS_PROXY names no proxy on 127.0.0.1), so gh cannot reach GitHub; run gh from this session's own shell, with HTTPS_PROXY as the session set it.";
function YTl(n) {
  let t = URL.parse(n?.trim() ?? "");
  return t?.protocol === "http:" && t.hostname === "127.0.0.1" ? t.href : void 0;
}
function XTl() {
  return `proxy="$(printf %s "\${HTTPS_PROXY:-}" | tr -d '[:space:]')"
authority="\${proxy#http://}"
authority="\${authority%%[/?#]*}"
case "$proxy" in http://*) hostport="\${authority##*@}" ;; *) hostport= ;; esac
case "$hostport" in
  127.0.0.1:*[!0-9]*|127.0.0.1:) hostport= ;;
  127.0.0.1|127.0.0.1:*) ;;
  *) hostport= ;;
esac
if [ -z "$hostport" ]; then
  printf '%s\\n' "gh: this session's proxy is not set (HTTPS_PROXY names no proxy on 127.0.0.1), so gh cannot reach GitHub; run gh from this session's own shell, with HTTPS_PROXY as the session set it." >&2
  exit 1
fi
HTTPS_PROXY="$proxy"; https_proxy="$proxy"; export HTTPS_PROXY https_proxy
`;
}
var $Z = "any";
function JTl() {
  let [n, t = "", e = "", ...s] = process.argv.slice(2);
  if (n !== "--gh-standin") return;
  process.argv = process.argv.slice(0, 3);
  let o = s[0] === "--any-host", r = o || s[0]?.startsWith("--hosts=") ? s.shift() : void 0, [i, ...h] = s;
  if ((t === "standalone-proxy" || /^[1-9]\d{0,4}$/.test(t) && Number(t) <= 65535) && e !== "" && i === "--") {
    let a = o ? $Z : r?.slice(8).split(",") ?? [];
    return { port: t === "standalone-proxy" ? t : Number(t), caBundlePath: e, ghesHosts: a, ghArgs: h };
  }
  return process.stderr.write(`gh: this command is run by the gh shim Claude Code writes for a session; it is not for direct use.
`), process.exitCode = 1, "refused";
}
function QTl(n) {
  let [t, e] = n.ghesHosts === $Z ? ["--any-host", " or the GitHub Enterprise host a command names"] : n.ghesHosts.length > 0 ? ["--hosts=" + n.ghesHosts.join(","), " and the hosts named below"] : [void 0, ""], s = [...n.command, "--gh-standin", String(n.port), n.caBundlePath, ...t === void 0 ? [] : [t]].map((o) => `'${o}'`);
  return `#!/bin/sh
# Claude Code gh stand-in shim (auto-generated; per-session).
# No GitHub CLI was found on this machine when this session started,
# so gh here is Claude Code's own implementation of \`gh api\`: REST
# requests to github.com${e} through the session's GitHub proxy. It reads
# no GitHub token from the environment and sends none.
exec ${s.join(" ")} -- "$@"
`;
}
