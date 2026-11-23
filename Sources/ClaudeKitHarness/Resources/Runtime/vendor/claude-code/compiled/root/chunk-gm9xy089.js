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
var chunk_gm9xy089_exports = {};
__export(chunk_gm9xy089_exports, {
  AYl: () => AYl,
  CYl: () => CYl,
  EYl: () => EYl,
  Jqs: () => Jqs,
  RYl: () => RYl,
  TYl: () => TYl,
  oGl: () => oGl,
  pQn: () => pQn,
  rGl: () => rGl,
  vYl: () => vYl
});
module.exports = __toCommonJS(chunk_gm9xy089_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_49rd7rja = require("/$bunfs/root/chunk-49rd7rja.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_np189awg = require("/$bunfs/root/chunk-np189awg.js");
var import_chunk_nr0e9cdy = require("/$bunfs/root/chunk-nr0e9cdy.js");
var import_chunk_r6r2wdsw = require("/$bunfs/root/chunk-r6r2wdsw.js");
var import_chunk_hhhczk0w = require("/$bunfs/root/chunk-hhhczk0w.js");
var import_chunk_s2gxs18a = require("/$bunfs/root/chunk-s2gxs18a.js");
var import_chunk_5k07m56e = require("/$bunfs/root/chunk-5k07m56e.js");
var import_chunk_3fv71fhr = require("/$bunfs/root/chunk-3fv71fhr.js");
var import_chunk_xytxbeb6 = require("/$bunfs/root/chunk-xytxbeb6.js");
var import_chunk_dvkg7v5x = require("/$bunfs/root/chunk-dvkg7v5x.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_fs = require("fs");
(0, import_chunk_adx6804h.B)();
function y(e, t, o) {
  (async () => {
    let r = (() => {
      try {
        return Bun.file(e).stream().getReader();
      } catch {
        return;
      }
    })();
    if (r === void 0) {
      o("read_failed");
      return;
    }
    let i = r, d = new TextDecoder(), s = "", l = (f) => {
      i.cancel().catch(() => {
      }), o(f);
    };
    for (; ; ) {
      let f;
      try {
        let k = await i.read();
        if (k.done) {
          o("eof");
          return;
        }
        f = k.value;
      } catch {
        l("read_failed");
        return;
      }
      s += d.decode(f, { stream: true });
      let h = s.split(`
`);
      s = h.pop() ?? "";
      for (let k of h) {
        let a;
        try {
          a = (0, import_chunk_w578pjby.te)(k);
        } catch {
          l("bad_line");
          return;
        }
        try {
          t(a);
        } catch {
          l("frame_threw");
          return;
        }
      }
    }
  })();
}
var EYl = 69, R = 77, rGl = 78, pQn = 28471, L = 8e3, D = 64, N = 33554432, F = 1013, C = (0, import_chunk_w578pjby._)({ type: "error", error: { type: "not_forwarded", reason: "tool_server_starting", message: "the tool server is still starting, so this request did not run" } }), z = 6e5, M = 1;
function U(e) {
  let t = (0, import_chunk_hhhczk0w.czo)(e);
  if (t.ok) return (0, import_chunk_2mwshd9r.$ct)(t.origin) === null ? t.origin : void 0;
  let o = URL.parse(e);
  return o?.protocol === "http:" && (0, import_chunk_dvkg7v5x.P_)(o.hostname) && (e === o.origin || e === `${o.origin}/`) ? o.origin : void 0;
}
var j = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ v: (0, import_chunk_adx6804h.v)(1), session_id: (0, import_chunk_adx6804h.n)().min(1), session_token: (0, import_chunk_adx6804h.n)().min(1), api_base_url: (0, import_chunk_adx6804h.n)().transform((e, t) => {
  let o = U(e);
  if (o === void 0) return t.addIssue({ code: "custom" }), import_chunk_adx6804h.m$;
  return o;
}), session_token_expires_at: (0, import_chunk_adx6804h.E)().int().min(1e9).optional().catch(void 0), file_upload_path: (0, import_chunk_adx6804h.n)().regex(/^\/(?!\/)/).optional().catch(void 0), tool_host: (0, import_chunk_3fv71fhr.i6r)().optional().catch(void 0), git_token: (0, import_chunk_adx6804h.n)().min(1).optional().catch(void 0) }));
function vYl(e) {
  if (e === void 0) return;
  try {
    return j().safeParse((0, import_chunk_w578pjby.te)(e)).data;
  } catch {
    return;
  }
}
var V = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.c)({ token: (0, import_chunk_adx6804h.n)().min(1) }), (0, import_chunk_adx6804h.c)({ git_token: (0, import_chunk_adx6804h.n)().min(1) })]));
class oGl extends Error {
}
function TYl(e, t, o) {
  if (e !== "http" || t !== pQn) return `needs --transport http and --port ${pQn}`;
  if (o === void 0) return 'needs one line of JSON on standard input, which must be a pipe: "v": 1, "session_id", "session_token", and "api_base_url" set to the https origin of an Anthropic host';
  if (!(0, import_chunk_zhr7rpv7.jn)()) return "does not dial under a provider other than Anthropic";
  return (0, import_chunk_k449cc64.wt)() && !(0, import_chunk_6e68m1dj.hn)() ? "does not dial while CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC is set" : void 0;
}
function CYl(e, t, o = (r) => void (0, import_chunk_bzyb60p0.Yr)(r)) {
  let r = A(), i = O(t, /* @__PURE__ */ new Set([e.boundPort]), { boundPort: e.boundPort, authToken: e.authToken, answerInProcess: () => r.isOn() ? e.answer : void 0 }, o);
  return (0, import_chunk_cqa9hrgx.u)("cli_mcp_serve_session_tunnel"), { ...i, stop() {
    r.stop(), i.stop();
  } };
}
function Jqs(e, t = (o) => void (0, import_chunk_bzyb60p0.Yr)(o)) {
  let o, r, i = /* @__PURE__ */ new Set(), d = O(e, i, { get boundPort() {
    return o?.boundPort ?? pQn;
  }, get authToken() {
    return o?.authToken ?? "";
  }, answerInProcess: () => r?.isOn() ? o?.answer : void 0 }, t, { deadlineMs: L, maxFrames: D, maxBytes: N, answer: { statusCode: 503, contentType: "application/json", body: C }, closeCode: F, onClosing: () => (0, import_chunk_s2gxs18a.XIe)((0, import_chunk_f9x2f6cx.kr)(import_chunk_s2gxs18a.pue), "deadline_closed_at_ms") });
  return { async adopt(s) {
    if (o = s, i.add(s.boundPort), r = A(), await d.endHold() === "gone") {
      r.stop();
      return;
    }
    (0, import_chunk_s2gxs18a.XIe)((0, import_chunk_f9x2f6cx.kr)(import_chunk_s2gxs18a.pue), "adopted_at_ms"), (0, import_chunk_cqa9hrgx.u)("cli_mcp_serve_session_tunnel");
    let { stop: l } = r;
    return { ...d, stop() {
      l(), d.stop();
    } };
  } };
}
function O(e, t, o, r, i) {
  return G({ sessionId: e.session_id, apiBaseUrl: e.api_base_url, accessToken: e.session_token, allowedPorts: t, policyStopEnforce: true, livenessEnforce: true, livenessDeadlineMs: z, quietLivenessPings: M, hold: i, toolServer: { get port() {
    return o.boundPort;
  }, get authToken() {
    return o.authToken;
  }, answerInProcess: o.answerInProcess, asksForBinaryFrames: import_chunk_nr0e9cdy.zb.CLAUDE_CODE_MCP_SERVE_TUNNEL_BINARY_FRAMES, onOpen: () => (0, import_chunk_s2gxs18a.XIe)((0, import_chunk_f9x2f6cx.kr)(import_chunk_s2gxs18a.pue), "tunnel_open_at_ms") } }, e.session_token_expires_at, (d, s) => {
    process.stderr.write(s === "policy" ? `--session-tunnel: ${d}
` : `--session-tunnel: ${X[s]} (${d}); start another server${s === "renewed_token_unreachable" ? "" : " with a fresh token"}
`), (0, import_chunk_cqa9hrgx.m)("cli_mcp_serve_session_tunnel", s === "policy" ? "relay_refused" : s), r(s === "policy" ? rGl : R);
  });
}
function A() {
  let e = P(), t = (0, import_chunk_865at33z.ys)(() => {
    e = P();
  });
  return { isOn: () => e, stop: t };
}
function P() {
  return (0, import_chunk_865at33z.b)("tengu_compressed_marshmallow", false);
}
function AYl(e) {
  if (e === void 0) return;
  let t = (0, import_chunk_xytxbeb6.THs)(e);
  if (t !== "socket") {
    if ((0, import_chunk_cqa9hrgx.m)("cli_mcp_serve_token_update", t === "not_open" ? "not_open" : "not_a_socket"), t === "pipe") (0, import_fs.close)(e, () => {
    });
    return;
  }
  if (!(0, import_chunk_f9x2f6cx.kr)(import_chunk_5k07m56e._Y).madeNonDumpable) {
    (0, import_chunk_cqa9hrgx.m)("cli_mcp_serve_token_update", "not_made_non_dumpable"), (0, import_fs.close)(e, () => {
    });
    return;
  }
  return e;
}
function RYl(e, t) {
  e.expectTokens(true), y(t, (o) => {
    let r = V().safeParse(o).data;
    if (r === void 0) {
      (0, import_chunk_cqa9hrgx.m)("cli_mcp_serve_token_update", "unreadable_line");
      return;
    }
    if ("token" in r) (0, import_chunk_f9x2f6cx.kr)(import_chunk_5k07m56e._Y).renewedToken = r.token, e.updateToken(r.token);
    else (0, import_chunk_r6r2wdsw.ZIr)(r.git_token);
    (0, import_chunk_cqa9hrgx.u)("cli_mcp_serve_token_update");
  }, (o) => {
    if (e.expectTokens(false), o !== "eof") (0, import_chunk_cqa9hrgx.m)("cli_mcp_serve_token_update", o), (0, import_fs.close)(t, () => {
    });
  });
}
function G(e, t, o) {
  let r = e.accessToken, i = false, d = 0, s = { token: r, renewals: d }, l = false, f = e.hold, h = k();
  function k() {
    let a = d, I = f;
    return f = void 0, (0, import_chunk_49rd7rja.RCa)({ ...e, hold: I, accessToken: r, onEstablishedClose: () => {
      s = { token: r, renewals: d };
    }, onPermanentFailure: (T, H) => {
      if (l) return;
      if (H === "policy") {
        o(T, "policy");
        return;
      }
      let g = x(r, t);
      if (!i && g.expiry !== null && g.expiry * 1e3 < Date.now()) {
        o(T, g.own ? "token_expired" : "stated_expiry_passed");
        return;
      }
      let w = x(s.token, t).expiry;
      if (a > s.renewals && w !== null && w * 1e3 < Date.now()) {
        o(T, "renewed_token_unreachable");
        return;
      }
      process.stderr.write(`--session-tunnel: cannot reach the relay (${T}); dialing again
`), h = k();
    } });
  }
  return { updateToken(a) {
    r = a, d++, h.updateAccessToken(a);
  }, expectTokens(a) {
    i = a;
  }, endHold: () => h.endHold(), stop() {
    l = true, h.stop();
  } };
}
var X = { token_expired: "the token has expired", stated_expiry_passed: "the session_token_expires_at it was started with has passed", renewed_token_unreachable: "the relay could not be reached with a renewed token, and the token held when the relay was last reached (or at start-up) has expired" };
function x(e, t) {
  let o = (0, import_chunk_np189awg.Z0)(e);
  return { expiry: o ?? t ?? null, own: o !== null };
}
