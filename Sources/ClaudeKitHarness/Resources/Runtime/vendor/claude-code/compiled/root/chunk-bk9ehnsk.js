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
var chunk_bk9ehnsk_exports = {};
__export(chunk_bk9ehnsk_exports, {
  YFr: () => YFr,
  qFr: () => qFr
});
module.exports = __toCommonJS(chunk_bk9ehnsk_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_kr68f0mb = require("/$bunfs/root/chunk-kr68f0mb.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_t8x29mwc = require("/$bunfs/root/chunk-t8x29mwc.js");
var import_chunk_sdks5h78 = require("/$bunfs/root/chunk-sdks5h78.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_f2dee02n = require("/$bunfs/root/chunk-f2dee02n.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_dqanqm2x = require("/$bunfs/root/chunk-dqanqm2x.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_k5jn5rx9 = require("/$bunfs/root/chunk-k5jn5rx9.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_jmxgdf7r = require("/$bunfs/root/chunk-jmxgdf7r.js");
var import_chunk_n25gt70y = require("/$bunfs/root/chunk-n25gt70y.js");
var import_chunk_42nfpkzm = require("/$bunfs/root/chunk-42nfpkzm.js");
var import_chunk_3f2ytgjw = require("/$bunfs/root/chunk-3f2ytgjw.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_zjhyjv3y = require("/$bunfs/root/chunk-zjhyjv3y.js");
var import_chunk_f26je2c0 = require("/$bunfs/root/chunk-f26je2c0.js");
var import_chunk_r3mm3x33 = require("/$bunfs/root/chunk-r3mm3x33.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_net = require("net");
function qFr(e, o, c) {
  return new Promise((f, l) => {
    let p = (r) => {
      i.close(), l(r);
    }, i = (0, import_net.createServer)((r) => {
      let E = "";
      r.setEncoding("utf8"), r.on("data", (d) => {
        if (E += d, c && E.length > 8388608) {
          r.destroy();
          return;
        }
        let _ = E.indexOf(`
`);
        if (_ < 0) return;
        if (c) {
          let m;
          try {
            m = (0, import_chunk_w578pjby.te)(E.slice(0, _));
          } catch {
            m = void 0;
          }
          if (!m || !(0, import_chunk_jmxgdf7r.Zj)(m.auth, c)) {
            r.destroy();
            return;
          }
          i.close(), f(m);
          return;
        }
        i.close();
        try {
          f((0, import_chunk_w578pjby.te)(E.slice(0, _)));
        } catch (m) {
          l(m);
        }
      }), r.on("error", c ? () => r.destroy() : p);
    });
    if (i.on("error", p), o) i.once("listening", () => {
      try {
        o();
      } catch (r) {
        p(r);
      }
    });
    i.listen(e);
  });
}
async function YFr(e, o, c) {
  let f = performance.now(), l = await (0, import_chunk_q3a5dy2r.vw)(e.cwd, void 0);
  (0, import_chunk_w578pjby.u_)(l);
  let p = { originalCwd: l, projectRoot: l, cwd: l };
  if (e.sessionId) (0, import_chunk_f9x2f6cx.nE)((0, import_chunk_mzmcvr6c.wT)(e.sessionId), "spare_claim", null, p);
  else (0, import_chunk_f9x2f6cx.rNr)(p);
  (0, import_chunk_r3mm3x33.pr)(), (0, import_chunk_865at33z.rAt)(), (0, import_chunk_865at33z.jPr)(), (0, import_chunk_f9x2f6cx.oNr)(), (0, import_chunk_zjhyjv3y.sEo)(), (0, import_chunk_k5jn5rx9.$8)({ warm_spare_claimed: 1 });
  let i = (0, import_chunk_69qhefwa.Ne)(e.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST);
  if (i) {
    for (let n of Object.keys(process.env)) if (((0, import_chunk_gd77dyw4.LEe)(n) || n === "ANTHROPIC_CUSTOM_HEADERS" || (0, import_chunk_gd77dyw4.b4n)(n) || (0, import_chunk_gd77dyw4.o4t)(n)) && !(0, import_chunk_gd77dyw4.Z0s)(n)) delete process.env[n];
  }
  if ((0, import_chunk_865at33z.VGe)(e.env)) (0, import_chunk_5e3gtsn9.Fji)();
  if (import_chunk_c203g5kd.s.unset("ANTHROPIC_AUTH_TOKEN"), import_chunk_c203g5kd.s.unset("ANTHROPIC_API_KEY"), import_chunk_c203g5kd.s.unset("CLAUDE_CODE_OAUTH_TOKEN"), e.env[import_chunk_t8x29mwc.Sg]) {
    import_chunk_c203g5kd.s.unset("ANTHROPIC_FEDERATION_RULE_ID");
    for (let n of import_chunk_t8x29mwc.Hpe) import_chunk_c203g5kd.s.unset(n);
  }
  import_chunk_c203g5kd.s.unset("CLAUDE_CODE_CONFIG_WATCH_EVENTS"), import_chunk_c203g5kd.s.unset("CLAUDE_CODE_WITHHOLD_PRODUCT_EVENTS"), import_chunk_c203g5kd.s.unset("CLAUDE_BG_SOCK_ADMIT_SILENT_PEERS");
  let { kept: r, dropped: E } = (0, import_chunk_5e3gtsn9.aEo)(e.env), d = i && (0, import_chunk_5e3gtsn9.UWn)((0, import_chunk_5e3gtsn9.uEo)((0, import_chunk_5e3gtsn9.Gc)() ?? {}, Object.keys(r), r), import_chunk_gd77dyw4.Z0s);
  if (Object.assign(process.env, r), (0, import_chunk_865at33z.Zxe)()) (0, import_chunk_5e3gtsn9.UWn)((0, import_chunk_5e3gtsn9.uEo)((0, import_chunk_5e3gtsn9.Gc)(), Object.keys(r), r), import_chunk_865at33z.Gzt);
  if ((0, import_chunk_n25gt70y.aYi)(), (0, import_chunk_dqanqm2x.YFl)(), (0, import_chunk_dqanqm2x.NKn)()) {
    let { mdm: n, hkcu: v, wslInherits: g, whereAsked: S, readOutcomes: u } = await (0, import_chunk_2yx6c1y2.Zhe)();
    (0, import_chunk_2yx6c1y2.YPe)(n, v, g, S, u), (0, import_chunk_2yx6c1y2.ARt)(u);
  }
  if (process.argv = [process.argv[0], process.argv[1], ...e.argv], !e.sessionId) {
    let n = (0, import_chunk_kr68f0mb.OFr)();
    if (n) (0, import_chunk_f9x2f6cx.nE)((0, import_chunk_mzmcvr6c.wT)(n), "spare_claim");
  }
  if ((0, import_chunk_r3mm3x33.pr)(), (0, import_chunk_2yx6c1y2.rgn)().failedFor = void 0, (0, import_chunk_r3mm3x33.Br)().forgetFirstReads({ checkAgain: true }), (0, import_chunk_w578pjby.Joa)(), E.length > 0) A(E);
  c?.(), (0, import_chunk_865at33z.v3i)(), import_chunk_f2dee02n.Ql.reset();
  let _ = performance.now();
  if (await (0, import_chunk_f26je2c0.rEa)(e.argv), (0, import_chunk_zjhyjv3y.zo)("spare_claim_token_file_wait_ms", performance.now() - _, _), (0, import_chunk_f9x2f6cx.ola)(), (0, import_chunk_865at33z.ezn)(), (0, import_chunk_3f2ytgjw.Qvt)(), (0, import_chunk_42nfpkzm.k9)(), (0, import_chunk_865at33z.Kzn)({ preservePendingExposures: true, preserveLoggedExposures: true }), (0, import_chunk_865at33z.j4)(), (0, import_chunk_5e3gtsn9.zji)(Object.keys(r), r) || d) (0, import_chunk_3jjr3wje.rKn)();
  (0, import_chunk_3jjr3wje.Cw)();
  let { main: m } = await o;
  (0, import_chunk_zjhyjv3y.zo)("spare_claim_apply_ms", performance.now() - f, f), await m();
}
var C = 8;
function A(e) {
  if (e.slice(0, C).forEach(({ name: o, problem: c }) => {
    (0, import_chunk_w578pjby.t)(`[bg-spare] environment variable ${(0, import_chunk_5e3gtsn9.z2t)(o)} was not applied to this background session: ${import_chunk_5e3gtsn9.$Wn[c]}. Programs it starts will not see it.`, { level: "warn" });
  }), e.length > C) {
    let o = e.length - C;
    (0, import_chunk_w578pjby.t)(`[bg-spare] \u2026and ${o} more environment ${(0, import_chunk_7cfjrnwy.O)(o, "variable was", "variables were")} not applied.`, { level: "warn" });
  }
  (0, import_chunk_y53wbr8a.a)("tengu_bg_claim_env_dropped", { dropped: e.length, nul_in_value: (0, import_chunk_4smdap7r.U)(e, (o) => o.problem === "nul-in-value"), invalid_name: (0, import_chunk_4smdap7r.U)(e, (o) => o.problem === "invalid-name"), non_string_value: (0, import_chunk_4smdap7r.U)(e, (o) => o.problem === "non-string-value"), name_classes: (0, import_chunk_78g0060s.sl)((0, import_chunk_4smdap7r.M)(e.map((o) => D(o.name)))) });
}
function D(e) {
  return e === "PATH" ? "path" : e.startsWith("CLAUDE_BG_") || e === "CLAUDE_JOB_DIR" || e === "CLAUDE_CODE_SESSION_KIND" || e === "CLAUDE_CODE_SESSION_NAME" ? "bg_worker" : import_chunk_gd77dyw4.f2.includes(e) ? "credential" : import_chunk_gd77dyw4.Wxt.includes(e) ? "gateway" : import_chunk_sdks5h78.c$t.has(e) ? "provider" : (0, import_chunk_c203g5kd.Tce)(import_chunk_c203g5kd.s).includes(e) ? "declared" : "other";
}
