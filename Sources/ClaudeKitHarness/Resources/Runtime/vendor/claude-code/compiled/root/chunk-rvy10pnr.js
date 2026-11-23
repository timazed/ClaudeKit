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
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
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
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s2, m, _2) {
    return _2 = Error(m), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s2, _2;
  };
  var fail = (e) => error = hasError ? new E(e, error, "An error was suppressed during disposal") : (hasError = true, e);
  var next = (it) => {
    while (it = stack.pop()) {
      try {
        var result = it[1] && it[1].call(it[2]);
        if (it[0]) return Promise.resolve(result).then(next, (e) => (fail(e), next()));
      } catch (e) {
        fail(e);
      }
    }
    if (hasError) throw error;
  };
  return next();
};
var chunk_rvy10pnr_exports = {};
__export(chunk_rvy10pnr_exports, {
  ghStandinMain: () => ns
});
module.exports = __toCommonJS(chunk_rvy10pnr_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_kr68f0mb = require("/$bunfs/root/chunk-kr68f0mb.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_h3s25p5k = require("/$bunfs/root/chunk-h3s25p5k.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_psw95195 = require("/$bunfs/root/chunk-psw95195.js");
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_72r477hv = require("/$bunfs/root/chunk-72r477hv.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_xppq9kzc = require("/$bunfs/root/chunk-xppq9kzc.js");
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_ds5wjsjg = require("/$bunfs/root/chunk-ds5wjsjg.js");
var import_chunk_pm6bf5qr = require("/$bunfs/root/chunk-pm6bf5qr.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_r9kxf52b = require("/$bunfs/root/chunk-r9kxf52b.js");
var import_chunk_0yc3wy8b = require("/$bunfs/root/chunk-0yc3wy8b.js");
var import_chunk_mpk68jst = require("/$bunfs/root/chunk-mpk68jst.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_np189awg = require("/$bunfs/root/chunk-np189awg.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_z8cg6ntt = require("/$bunfs/root/chunk-z8cg6ntt.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_1frjyv5h = require("/$bunfs/root/chunk-1frjyv5h.js");
var import_chunk_43nz5n02 = require("/$bunfs/root/chunk-43nz5n02.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_3hr8g93j = require("/$bunfs/root/chunk-3hr8g93j.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_aka192fb = require("/$bunfs/root/chunk-aka192fb.js");
var import_chunk_09gzjq1e = require("/$bunfs/root/chunk-09gzjq1e.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_44yfdc64 = require("/$bunfs/root/chunk-44yfdc64.js");
var import_chunk_8hfdvrr1 = require("/$bunfs/root/chunk-8hfdvrr1.js");
var import_chunk_khxw3ng0 = require("/$bunfs/root/chunk-khxw3ng0.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_h4xqg980 = require("/$bunfs/root/chunk-h4xqg980.js");
var import_chunk_418mqjww = require("/$bunfs/root/chunk-418mqjww.js");
var import_chunk_03kvdj1s = require("/$bunfs/root/chunk-03kvdj1s.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_6sjp0rab = require("/$bunfs/root/chunk-6sjp0rab.js");
var import_chunk_akwvpp7y = require("/$bunfs/root/chunk-akwvpp7y.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_fbnv54pa = require("/$bunfs/root/chunk-fbnv54pa.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_4s4nxvxt = require("/$bunfs/root/chunk-4s4nxvxt.js");
var import_chunk_0f2gasyz = require("/$bunfs/root/chunk-0f2gasyz.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_dw5px5e0 = require("/$bunfs/root/chunk-dw5px5e0.js");
var import_chunk_k59mf0h7 = require("/$bunfs/root/chunk-k59mf0h7.js");
var import_chunk_zzrn5zap = require("/$bunfs/root/chunk-zzrn5zap.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_hazyxdac = require("/$bunfs/root/chunk-hazyxdac.js");
var import_chunk_kbsax5x5 = require("/$bunfs/root/chunk-kbsax5x5.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_dqanqm2x = require("/$bunfs/root/chunk-dqanqm2x.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_rpdn91q1 = require("/$bunfs/root/chunk-rpdn91q1.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_f2dee02n = require("/$bunfs/root/chunk-f2dee02n.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_k5jn5rx9 = require("/$bunfs/root/chunk-k5jn5rx9.js");
var import_chunk_7n1tpv84 = require("/$bunfs/root/chunk-7n1tpv84.js");
var import_chunk_nnk8tdzz = require("/$bunfs/root/chunk-nnk8tdzz.js");
var import_chunk_ch6jxpf8 = require("/$bunfs/root/chunk-ch6jxpf8.js");
var import_chunk_fzp6hh55 = require("/$bunfs/root/chunk-fzp6hh55.js");
var import_chunk_y6mqk49g = require("/$bunfs/root/chunk-y6mqk49g.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_cbnm4p23 = require("/$bunfs/root/chunk-cbnm4p23.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_702cfzzh = require("/$bunfs/root/chunk-702cfzzh.js");
var import_chunk_qbrmmydq = require("/$bunfs/root/chunk-qbrmmydq.js");
var import_chunk_trwykz8a = require("/$bunfs/root/chunk-trwykz8a.js");
var import_chunk_yesjd46y = require("/$bunfs/root/chunk-yesjd46y.js");
var import_chunk_4x1jja6d = require("/$bunfs/root/chunk-4x1jja6d.js");
var import_chunk_3grsnd7a = require("/$bunfs/root/chunk-3grsnd7a.js");
var import_chunk_9b4aq7fb = require("/$bunfs/root/chunk-9b4aq7fb.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_jmxgdf7r = require("/$bunfs/root/chunk-jmxgdf7r.js");
var import_chunk_epy4sc29 = require("/$bunfs/root/chunk-epy4sc29.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_49rkmh8j = require("/$bunfs/root/chunk-49rkmh8j.js");
var import_chunk_ay36ksef = require("/$bunfs/root/chunk-ay36ksef.js");
var import_chunk_kypvvv9j = require("/$bunfs/root/chunk-kypvvv9j.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_n5qd9b6p = require("/$bunfs/root/chunk-n5qd9b6p.js");
var import_chunk_0ha8wex8 = require("/$bunfs/root/chunk-0ha8wex8.js");
var import_chunk_8j3h6yzg = require("/$bunfs/root/chunk-8j3h6yzg.js");
var import_chunk_hr2stdq7 = require("/$bunfs/root/chunk-hr2stdq7.js");
var import_chunk_yz5b8aaa = require("/$bunfs/root/chunk-yz5b8aaa.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_cee6q0wn = require("/$bunfs/root/chunk-cee6q0wn.js");
var import_chunk_8tg38aha = require("/$bunfs/root/chunk-8tg38aha.js");
var import_chunk_drk264d0 = require("/$bunfs/root/chunk-drk264d0.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_nr0e9cdy = require("/$bunfs/root/chunk-nr0e9cdy.js");
var import_chunk_8nvd6fqx = require("/$bunfs/root/chunk-8nvd6fqx.js");
var import_chunk_r6r2wdsw = require("/$bunfs/root/chunk-r6r2wdsw.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_szvrpg0x = require("/$bunfs/root/chunk-szvrpg0x.js");
var import_chunk_n25gt70y = require("/$bunfs/root/chunk-n25gt70y.js");
var import_chunk_t3er6wbx = require("/$bunfs/root/chunk-t3er6wbx.js");
var import_chunk_8f66wxnw = require("/$bunfs/root/chunk-8f66wxnw.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_xfr8663h = require("/$bunfs/root/chunk-xfr8663h.js");
var import_chunk_e50v94g8 = require("/$bunfs/root/chunk-e50v94g8.js");
var import_chunk_v684xj67 = require("/$bunfs/root/chunk-v684xj67.js");
var import_chunk_mqqq0hpm = require("/$bunfs/root/chunk-mqqq0hpm.js");
var import_chunk_pqpv4rnx = require("/$bunfs/root/chunk-pqpv4rnx.js");
var import_chunk_h3t3td58 = require("/$bunfs/root/chunk-h3t3td58.js");
var import_chunk_2m7pv65a = require("/$bunfs/root/chunk-2m7pv65a.js");
var import_chunk_mh32mevx = require("/$bunfs/root/chunk-mh32mevx.js");
var import_chunk_v6tczjz9 = require("/$bunfs/root/chunk-v6tczjz9.js");
var import_chunk_3d2897vr = require("/$bunfs/root/chunk-3d2897vr.js");
var import_chunk_qk25vh5t = require("/$bunfs/root/chunk-qk25vh5t.js");
var import_chunk_4jzbgp2v = require("/$bunfs/root/chunk-4jzbgp2v.js");
var import_chunk_hz25f5zd = require("/$bunfs/root/chunk-hz25f5zd.js");
var import_chunk_se72nykz = require("/$bunfs/root/chunk-se72nykz.js");
var import_chunk_aj8wb2xh = require("/$bunfs/root/chunk-aj8wb2xh.js");
var import_chunk_myvyhcm0 = require("/$bunfs/root/chunk-myvyhcm0.js");
var import_chunk_2172r9j8 = require("/$bunfs/root/chunk-2172r9j8.js");
var import_chunk_cd75h1kz = require("/$bunfs/root/chunk-cd75h1kz.js");
var import_chunk_0bfd61k9 = require("/$bunfs/root/chunk-0bfd61k9.js");
var import_chunk_tp0b74sz = require("/$bunfs/root/chunk-tp0b74sz.js");
var import_chunk_5rd4zsth = require("/$bunfs/root/chunk-5rd4zsth.js");
var import_chunk_13h3tw8q = require("/$bunfs/root/chunk-13h3tw8q.js");
var import_chunk_xytxbeb6 = require("/$bunfs/root/chunk-xytxbeb6.js");
var import_chunk_r3mm3x33 = require("/$bunfs/root/chunk-r3mm3x33.js");
var import_chunk_wn8z7ghn = require("/$bunfs/root/chunk-wn8z7ghn.js");
var import_chunk_1m0ck3v8 = require("/$bunfs/root/chunk-1m0ck3v8.js");
var import_chunk_73gwqz1r = require("/$bunfs/root/chunk-73gwqz1r.js");
var import_chunk_jk26f2gn = require("/$bunfs/root/chunk-jk26f2gn.js");
var import_chunk_z3ydstra = require("/$bunfs/root/chunk-z3ydstra.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_49zxha55 = require("/$bunfs/root/chunk-49zxha55.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_j4z7srhg = require("/$bunfs/root/chunk-j4z7srhg.js");
var import_crypto = require("crypto");
var import_promises = require("fs/promises");
(0, import_chunk_adx6804h.B)();
var at = 200;
function R(e) {
  let t = (0, import_chunk_7cfjrnwy.ee)(e, at);
  return (0, import_chunk_7cfjrnwy.Am)(t) + (t.length < e.length ? "\u2026" : "");
}
var we = 255, ht = /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+(?:[a-z]{1,63}|xn--[a-z0-9-]{1,59})$/, dt = [import_chunk_43nz5n02.Vr, "githubusercontent.com", "ghcr.io", "github.dev", "githubpreview.dev", "github.io", "github.app", "githubapp.com", "githubassets.com", "githubcopilot.com"], ge = "api";
function Q(e) {
  let t = e.toLowerCase();
  return t.length <= we && import_chunk_43nz5n02.Xee.test(t) ? t : "that host";
}
function M(e) {
  let t = (0, import_chunk_43nz5n02.yL)(e), o = Q(t), i = { refusal: `${o} is not a host this gh sends a request to: name a GitHub Enterprise host by its DNS name alone (no scheme, port, path or IP address).` };
  if (t.length > we || !ht.test(t) || t.endsWith(".localhost")) return i;
  let r = { refusal: `${o} is not a GitHub Enterprise host; ${import_chunk_43nz5n02.Vr} itself is named as ${import_chunk_43nz5n02.Vr}.` };
  if (t === import_chunk_3d2897vr.oTt.slice(1) || dt.some((d) => t === d || t.endsWith(`.${d}`)) || (0, import_chunk_3jjr3wje.nL)(t)) return r;
  let a, h;
  if (t.endsWith(import_chunk_3d2897vr.oTt)) {
    let d = t.slice(0, -import_chunk_3d2897vr.oTt.length).split("."), [l, y, ...b] = d, E = y === void 0 ? l : y;
    if (b.length > 0 || y !== void 0 && l !== ge) return r;
    let f = E + import_chunk_3d2897vr.oTt;
    h = `${ge}.${f}`, a = { host: f, apiBase: `https://${h}` };
  } else h = t, a = { host: t, apiBase: (0, import_chunk_43nz5n02.HEe)(t) };
  return URL.parse(a.apiBase)?.hostname === h ? a : i;
}
var u = "repos/{owner}/{repo}", ye = `gh api ${u}/issues/<number>/comments -f body='<text>'`, be = `gh api ${u}/issues/<number>/labels -f 'labels[]=<label>'  # add a label`, Ee = "which are served from another host that this gh does not follow a redirect to", J = ["Nothing to sign in to and no token to read: requests go through this session's GitHub proxy, which adds the credential.", "gh api user  # the account behind it, where the credential has one"], K = "where this session's GitHub proxy refuses search/", v = `gh api '${u}/pulls?head={owner}:{branch}&state=all'  # <number> of the current branch's pull request (a fork's: its owner in place of {owner} before the colon)`, $e = "git clone https://github.com/<owner>/<repo>.git", Re = "This session's GitHub proxy creates private repositories only: keep -F private=true (--public and --internal have no form). For this call it takes plain values only, not 'key[sub]=<value>' or 'key[]=<value>'.", ct = /* @__PURE__ */ new Map([["pr create", [`gh api ${u}/pulls -f title='<title>' -f head='<branch>' -f base='<base branch>' -f body='<text>'  # a draft: add -F draft=true`]], ["pr view", [`gh api ${u}/pulls/<number>`, `gh api ${u}/pulls/<number>/ccr/review_threads  # its review threads`, `gh api ${u}/issues/<number>/comments  # its conversation comments`, v]], ["pr list", [`gh api '${u}/pulls?state=open&per_page=100'`]], ["pr merge", [`gh api -X PUT ${u}/pulls/<number>/merge -f merge_method=squash`, `gh api -X PUT ${u}/pulls/<number>/ccr/auto_merge -f merge_method=squash  # --auto; -X DELETE cancels it`, v]], ["pr comment", [ye, v]], ["pr checks", [`gh api ${u}/commits/<sha>/check-runs`, `gh api ${u}/pulls/<number>  # <sha> of a pull request: its head.sha`, v]], ["pr ready", [`gh api -X POST ${u}/pulls/<number>/ccr/ready_for_review`, `gh api -X POST ${u}/pulls/<number>/ccr/convert_to_draft  # --undo`, v]], ["pr review", [`gh api ${u}/pulls/<number>/reviews -f event=COMMENT -f body='<text>'  # or event=REQUEST_CHANGES`, v]], ["pr diff", [`gh api ${u}/pulls/<number> -H 'Accept: application/vnd.github.diff'`, `gh api ${u}/pulls/<number>/files  # one patch per file`, v]], ["pr close", [`gh api -X PATCH ${u}/pulls/<number> -f state=closed`]], ["pr edit", [`gh api -X PATCH ${u}/pulls/<number> -f title='<title>' -f body='<text>'`, be, v]], ["pr checkout", ["No `gh api` form: use git.", "git fetch origin refs/pull/<number>/head && git checkout FETCH_HEAD"]], ["issue create", [`gh api ${u}/issues -f title='<title>' -f body='<text>'`]], ["issue view", [`gh api ${u}/issues/<number>`, `gh api ${u}/issues/<number>/comments  # its comments`]], ["issue list", [`gh api '${u}/issues?state=open&per_page=100'  # pull requests are in the list too: each has a pull_request key`]], ["issue comment", [ye]], ["issue close", [`gh api -X PATCH ${u}/issues/<number> -f state=closed`]], ["issue edit", [`gh api -X PATCH ${u}/issues/<number> -f title='<title>' -f body='<text>'`, be]], ["run list", [`gh api '${u}/actions/runs?per_page=20'  # filters: branch=, event=, status=, head_sha=`]], ["run view", [`gh api ${u}/actions/runs/<run-id>`, `gh api ${u}/actions/runs/<run-id>/jobs  # its jobs and their steps`, `gh api ${u}/actions/jobs/<job-id>/logs  # --log: one job's log, where this session's GitHub proxy follows GitHub's redirect for it`]], ["run rerun", [`gh api -X POST ${u}/actions/runs/<run-id>/rerun-failed-jobs  # --failed`, `gh api -X POST ${u}/actions/runs/<run-id>/rerun  # every job`]], ["run watch", ["No `gh api` form: it polls. Poll the run yourself and read its status and conclusion:", `gh api ${u}/actions/runs/<run-id>`]], ["run cancel", [`gh api -X POST ${u}/actions/runs/<run-id>/cancel`]], ["run download", [`No \`gh api\` form for downloading artifacts, ${Ee}. Listing them:`, `gh api ${u}/actions/runs/<run-id>/artifacts`]], ["workflow list", [`gh api ${u}/actions/workflows`]], ["workflow view", [`gh api ${u}/actions/workflows/<workflow>  # <workflow>: its file name (ci.yml) or its id`, `gh api ${u}/actions/workflows/<workflow>/runs  # its runs`]], ["workflow run", [`gh api -X POST ${u}/actions/workflows/<workflow>/dispatches -f ref=<branch>  # <workflow>: its file name (ci.yml) or its id; inputs: -f 'inputs[<name>]=<value>'`]], ["release list", [`gh api ${u}/releases`]], ["release view", [`gh api ${u}/releases/tags/<tag>`, `gh api ${u}/releases/latest  # the latest release`]], ["release create", [`gh api ${u}/releases -f tag_name=<tag> -f name='<title>' -f body='<text>'  # this session's GitHub proxy may refuse release writes`, "No `gh api` form for uploading its files, which go to another host."]], ["release download", [`No \`gh api\` form for downloading a release's files, ${Ee}. Listing them (assets):`, `gh api ${u}/releases/tags/<tag>`]], ["release upload", ["No `gh api` form: a release's files are uploaded to another host, which this gh does not reach."]], ["repo view", [`gh api ${u}`]], ["repo clone", ["No `gh api` form: use git.", $e]], ["repo create", ["gh api user/repos -f name=<name> -F private=true  # in the account behind the credential (gh api user names it); this session's GitHub proxy may refuse creating a repository", "gh api orgs/<org>/repos -f name=<name> -F private=true  # in an organization: an OWNER the command named is <org>, unless it is the login gh api user names", Re]], ["label list", [`gh api ${u}/labels`]], ["search issues", ["gh api -X GET search/issues -f q='<terms> is:issue'", `gh api '${u}/issues?state=all&labels=<label>'  # ${K}: filter a list`]], ["search prs", ["gh api -X GET search/issues -f q='<terms> is:pr'", `gh api '${u}/pulls?state=all&per_page=100'  # ${K}: filter a list`]], ["search code", ["gh api -X GET search/code -f q='<terms> repo:<owner>/<repo>'", `Search a clone of the repository instead ${K}.`]], ["search repos", ["gh api -X GET search/repositories -f q='<terms>'"]], ["auth status", J], ["auth login", J], ["auth token", J]]), pt = /* @__PURE__ */ new Map([["new", "create"], ["ls", "list"]]), lt = /^(-R|--repo)(=|$)|^-R[^-]/, ft = /^https?:\/\/[^/]+\/[^/]+\/[^/]+/, mt = /^[^-/][^/]*(\/[^/]+){1,2}$/;
function Te(e, t) {
  let [o, i] = e;
  if (o === void 0 || i === void 0) return;
  let r = `${o} ${pt.get(i) ?? i}`, a = ct.get(r);
  if (a === void 0) return;
  let h = t === import_chunk_3d2897vr.$Z ? "the repository's GitHub Enterprise host" : t.join(" or "), d = h !== "" ? a.map((b) => b === $e ? `git clone https://<host>/<owner>/<repo>.git  # <host>: github.com or ${h}` : b === Re ? `${b} On github.com only: there is no form for a GitHub Enterprise host, with --hostname or without.` : b) : a, l = e.slice(2), y = d.some((b) => b.includes("{owner}")) && (e.some((b) => lt.test(b)) || l.some((b, E) => !(l[E - 1] ?? "").startsWith("-") && (ft.test(b) || o === "repo" && mt.test(b))));
  return `Instead of \`gh ${r}\`:
${d.map((b) => `  ${b}`).join(`
`)}` + (y ? `
  The command named a repository: write that repository in place of {owner}/{repo}.` + (h !== "" ? " If it is on another host, add --hostname <host>." : "") : "");
}
var Se = "GitHub GraphQL is not available through this session's GitHub proxy; use the REST API (gh api repos/{owner}/{repo}/...). For review threads, auto-merge and draft or ready, the proxy serves repos/{owner}/{repo}/pulls/<number>/ccr/review_threads, .../ccr/comments/<comment-id>/resolve, .../ccr/auto_merge, .../ccr/ready_for_review and .../ccr/convert_to_draft.", Ae = "Claude Code's built-in GitHub client, not the GitHub CLI", _e = "no GitHub CLI was found on this machine when this session started";
function j(e) {
  let t = e === import_chunk_3d2897vr.$Z, o = t || e.length > 0;
  return `Usage: gh api <endpoint> [flags]

This gh is ${Ae}:
${_e}.
${t ? `It makes GitHub REST API requests to ${import_chunk_43nz5n02.Vr}, or to the GitHub Enterprise
host of this checkout's remote (or --hostname <host>), through this session's
GitHub proxy, which supplies the credential for the hosts and repositories this
session is connected to, and has no other gh command.` : `It makes GitHub REST API requests to ${[import_chunk_43nz5n02.Vr, ...e].join(", ")} through this session's GitHub
proxy, already authenticated, and has no other gh command.`}
A GitHub CLI installed during the session takes this one's place once it is on
PATH. On a self-hosted runner that one has only the GitHub credentials the
runner's operator provides and does not go through this session's GitHub proxy.

Flags:${o ? `
      --hostname <host>     GitHub host of the request${t ? "" : ", as GH_HOST"} (default ${import_chunk_43nz5n02.Vr}, or the
                            host of the repository that fills {owner}, {repo} in the endpoint)` : ""}
  -X, --method <method>     HTTP method (default GET, or POST with parameters or --input)
  -f, --raw-field key=value String parameter
  -F, --field key=value     Typed parameter: true, false, null and integers become JSON
                            values, {owner} {repo} {branch} are filled in, @file reads a
                            file, @- reads standard input
  -H, --header 'Name: v'    Request header
      --input <file>        File to send as the request body (- for standard input)
  -i, --include             Print the response status line and headers
      --paginate            Follow the response's rel="next" links (GET only)
  -q, --jq <expression>     Filter the response with jq (needs jq on PATH; without it, pipe the
                            output to a JSON tool that is installed)
      --silent              Do not print the response body

{owner}, {repo} and {branch} (or :owner, :repo, :branch) in the endpoint and in
-F values are filled in from GH_REPO, else from the ${o && !t ? "remotes on those hosts" : `${import_chunk_43nz5n02.Vr} remotes`} of the
current repository: upstream, github, origin, then the others by name.${t ? `
A repository with no ${import_chunk_43nz5n02.Vr} remote is read for its other remotes the same
way, and the remote chosen names the host the request goes to.
GH_HOST and a host in GH_REPO pick no host other than ${import_chunk_43nz5n02.Vr} here: name one
with --hostname. A request to another host says so in one line on standard error.` : ""}

Example: gh api repos/{owner}/{repo}/pulls -f title='Fix' -f head='my-branch' -f base='main'
`;
}
var gt = ` The host came from GH_HOST: \`--hostname ${import_chunk_43nz5n02.Vr}\` names github.com for one command.`;
function Z(e) {
  return `${e} names a host other than ${import_chunk_43nz5n02.Vr}, and an environment variable is not used to pick a host in this session: ` + (e === "GH_HOST" ? `pass --hostname <host> on the command instead. For ${import_chunk_43nz5n02.Vr}, pass --hostname ${import_chunk_43nz5n02.Vr} or unset GH_HOST.` : "set GH_REPO=OWNER/REPO and pass --hostname <host> on the command instead.");
}
function I(e, t, o = false) {
  return `${Q(e)} is not served here: this gh reaches ${[import_chunk_43nz5n02.Vr, ...t].join(" and ")} only, through this session's GitHub proxy. Which GitHub Enterprise Server hosts it reaches is fixed when the session starts, and nothing run in the session adds one` + (o ? `.${gt}` : ".");
}
var yt = { "-X": "--method", "-f": "--raw-field", "-F": "--field", "-H": "--header", "-q": "--jq", "-t": "--template", "-p": "--preview", "--method": "--method", "--raw-field": "--raw-field", "--field": "--field", "--header": "--header", "--jq": "--jq", "--input": "--input", "--hostname": "--hostname", "--template": "--template", "--preview": "--preview", "--cache": "--cache" }, bt = { "-i": "--include", "-h": "--help", "--include": "--include", "--paginate": "--paginate", "--silent": "--silent", "--help": "--help", "--slurp": "--slurp", "--verbose": "--verbose" }, Et = /* @__PURE__ */ new Set(["--template", "--preview", "--slurp", "--verbose"]);
function He(e, t, o, i) {
  if (e[0] !== "api") return { kind: "refuse", message: `this gh is ${Ae} (Claude Code ${i}): \`gh api <REST endpoint>\` works here, already authenticated through this session's GitHub proxy, and there is no other gh command (${_e}).
` + (Te(e, o) ?? "Example: gh api repos/{owner}/{repo}/pulls/123") };
  let r = { endpoint: "", host: void 0, method: void 0, rawFields: [], typedFields: [], headers: [], inputFile: void 0, jq: void 0, include: false, paginate: false, silent: false }, a = [], h = t, d = true, l = [];
  for (let E = 1; E < e.length; E++) {
    let f = e[E];
    if (f === "--") {
      a.push(...e.slice(E + 1));
      break;
    }
    if (!f.startsWith("-") || f === "-") {
      a.push(f);
      continue;
    }
    let O = f.startsWith("--"), k = O ? [(0, import_chunk_7cfjrnwy.nt)(f, "=")] : Array.from(f.slice(1), (A) => `-${A}`);
    for (let [A, H] of k.entries()) {
      let X = bt[H], G = yt[H];
      if (X !== void 0) {
        if (!O || !/=(?:false|0)$/i.test(f)) l.push([X, ""]);
        continue;
      }
      if (G === void 0) return { kind: "refuse", message: `unknown ${O ? "flag" : "shorthand flag"}: ${R(H)}

${j(o)}` };
      let U = (O ? f.includes("=") ? f.slice(H.length + 1) : void 0 : f.slice(A + 2).replace(/^=/, "") || void 0) ?? e[++E];
      if (U === void 0) return { kind: "refuse", message: `flag needs an argument: ${H}` };
      l.push([G, U]);
      break;
    }
  }
  for (let [E, f] of l) {
    if (Et.has(E)) return { kind: "refuse", message: `${E} is not supported by this built-in gh.

${j(o)}` };
    switch (E) {
      case "--help":
        return { kind: "help" };
      case "--method":
        r.method = f;
        break;
      case "--raw-field":
        r.rawFields.push(f);
        break;
      case "--field":
        r.typedFields.push(f);
        break;
      case "--header":
        r.headers.push(f);
        break;
      case "--jq":
        r.jq = f;
        break;
      case "--input":
        r.inputFile = f;
        break;
      case "--hostname":
        h = f, d = false;
        break;
      case "--include":
        r.include = true;
        break;
      case "--paginate":
        r.paginate = true;
        break;
      case "--silent":
        r.silent = true;
        break;
    }
  }
  if (h !== void 0) {
    let E = (0, import_chunk_43nz5n02.yL)(h);
    if ((0, import_chunk_43nz5n02.Ro)(h)) r.host = import_chunk_43nz5n02.Vr;
    else if (o === import_chunk_3d2897vr.$Z && d) {
      if (h !== "" && !a[0]?.includes("://")) return { kind: "refuse", message: Z("GH_HOST") };
    } else if (o === import_chunk_3d2897vr.$Z) {
      let f = M(h);
      if ("refusal" in f) return { kind: "refuse", message: f.refusal };
      r.host = f.host;
    } else if (o.includes(E)) r.host = E;
    else return { kind: "refuse", message: I(h, o, d) };
  }
  let [y, ...b] = a;
  if (y === void 0 || b.length > 0) return { kind: "refuse", message: `accepts 1 arg(s), received ${a.length}

${j(o)}` };
  if (y === "") return { kind: "refuse", message: "the endpoint is empty; give a REST path such as repos/{owner}/{repo}/pulls" };
  if (r.paginate && r.inputFile !== void 0) return { kind: "refuse", message: "the `--paginate` option is not supported with `--input`" };
  if (r.paginate && r.method !== void 0 && r.method.toUpperCase() !== "GET") return { kind: "refuse", message: "the `--paginate` option is not supported for non-GET requests" };
  if (r.silent && r.jq !== void 0) return { kind: "refuse", message: "only one of `--silent` or `--jq` may be used, since `--silent` prints no response body" };
  return r.endpoint = y, { kind: "api", options: r };
}
class P extends Error {
}
async function Pe(e, t, o) {
  let i = /* @__PURE__ */ new Map();
  for (let r of e) {
    let { keys: a, key: h, value: d } = Oe(r);
    xe(i, a, h, d);
  }
  for (let r of t) {
    let { keys: a, key: h, value: d } = Oe(r);
    xe(i, a, h, d === void 0 ? d : await o(d));
  }
  return i;
}
function se(e) {
  return Object.fromEntries([...e].map(([t, o]) => [t, ve(o)]));
}
function Ge(e) {
  let t = [];
  for (let [o, i] of e) ne(t, o, i);
  return t;
}
function ve(e) {
  if (e instanceof Map) return se(e);
  return Array.isArray(e) ? e.map(ve) : e;
}
function ne(e, t, o) {
  if (o instanceof Map) for (let [i, r] of o) ne(e, `${t}[${i}]`, r);
  else if (Array.isArray(o)) for (let i of o) ne(e, `${t}[]`, i);
  else e.push([t, o === null ? "" : String(o)]);
}
function Oe(e) {
  let t = [], o = 0, i = 0;
  for (let r = 0; r < e.length && i === 0; r++) {
    let a = e[r];
    if (a === "[") {
      if (o === 0) t.push(e.slice(0, r));
      o = r + 1;
    } else if (a === "]") t.push(e.slice(o, r));
    else if (a === "=") {
      if (o === 0) t.push(e.slice(0, r));
      i = r + 1;
    }
  }
  if (t.length === 0 || t[0] === "") throw new P(`invalid key: "${R(e)}"`);
  if (i === 0) {
    if (t.at(-1) !== "") throw new P(`field "${R(e)}" requires a value separated by an '=' sign`);
    return { keys: t, key: e, value: void 0 };
  }
  return { keys: t, key: e.slice(0, i - 1), value: e.slice(i) };
}
function xe(e, t, o, i) {
  let r = e, a = false, h = "";
  for (let l of t) {
    if (l === "") {
      a = true;
      continue;
    }
    if (h !== "") r = $t(r, h, a ? l : void 0), a = false;
    h = l;
  }
  let d = r.get(h);
  if (!a) {
    if (d !== void 0 || i === void 0) throw new P(d !== void 0 ? `unexpected override existing field under "${R(h)}"` : `field "${R(o)}" requires a value separated by an '=' sign`);
    r.set(h, i);
    return;
  }
  if (d !== void 0 && !Array.isArray(d)) throw new P(`expected array type under "${R(h)}"`);
  r.set(h, i === void 0 ? d ?? [] : [...d ?? [], i]);
}
function $t(e, t, o) {
  let i = e.get(t), r = /* @__PURE__ */ new Map();
  if (o === void 0) {
    if (i instanceof Map) return i;
    if (i !== void 0) throw new P(`expected map type under "${R(t)}"`);
    return e.set(t, r), r;
  }
  if (i !== void 0 && !Array.isArray(i)) throw new P(`expected array type under "${R(t)}"`);
  let a = i?.at(-1);
  if (a instanceof Map && !a.has(o)) return a;
  return e.set(t, [...i ?? [], r]), r;
}
var Rt = 1e4, re = /\{(owner|repo|branch)\}|:(owner|repo|branch)\b/g, ke = ["upstream", "github", "origin"], Tt = "^remote\\..+\\.(url|gh-resolved)$", Fe = /^[^/]+\/[^/]+$/;
class S extends Error {
}
function Ce(e) {
  return e.search(re) !== -1;
}
class oe {
  cwd;
  ghRepo;
  ghRepoHost;
  ghesHosts;
  host;
  repository;
  branch;
  pathFrom;
  constructor(e, t, o, i) {
    this.cwd = e, this.ghRepo = t ?? "", this.ghRepoHost = o ?? import_chunk_43nz5n02.Vr, this.ghesHosts = i, this.host = o;
  }
  pathFilledFromHost() {
    return this.pathFrom?.repository.host;
  }
  pathFilledFromRemote() {
    return this.pathFrom?.remote;
  }
  async fill(e, t) {
    let o = /* @__PURE__ */ new Map();
    for (let [, i, r] of e.matchAll(re)) {
      let a = i ?? r ?? "";
      if (o.has(a)) continue;
      if (a === "branch") {
        let h = await (this.branch ??= this.findBranch());
        o.set(a, t ? h.split("/").map(encodeURIComponent).join("/") : h);
      } else {
        let h = await (this.repository ??= this.findRepository()), { owner: d, name: l } = h.repository, y = a === "owner" ? d : l;
        if (t && y.includes("/")) throw new S(`{${a}} would be more than one path segment here (this checkout's repository is a nested project path, not OWNER/REPO): spell the endpoint out`);
        if (o.set(a, y), t) this.pathFrom = h;
      }
    }
    return e.replace(re, (i, r, a) => o.get(r ?? a ?? "") ?? i);
  }
  async findRepository() {
    return this.ghesHosts === import_chunk_3d2897vr.$Z ? this.findOnAnyHost() : this.findOnServedHost(this.ghesHosts);
  }
  async remoteListing() {
    let e = ["config", "-z", "--get-regexp", Tt];
    return await this.git(e) ?? "";
  }
  ghRepoRepository() {
    return (0, import_chunk_3hr8g93j.eE)(`https://${Fe.test(this.ghRepo) ? `${this.ghRepoHost}/` : ""}${this.ghRepo}`);
  }
  async findOnServedHost(e) {
    let t, o = [import_chunk_43nz5n02.Vr, ...e], i = this.host === void 0 ? o : [this.host];
    if (this.ghRepo === "") {
      let r = await this.remoteListing();
      t = z(r, (h) => N(h, i));
      let a = Le(r).find(({ repository: h }) => !N(h, o));
      if (!t && a && !St(r, o)) throw new S(`{owner}/{repo} would be this checkout's repository, whose remote is on another host: ${I(a.repository.host, e)}`);
    } else {
      let r = this.ghRepoRepository();
      if (r && !N(r, o)) throw new S(I(r.host, e));
      let a = r && N(r, i);
      t = a ? { repository: a } : void 0;
    }
    if (!t) {
      let r = i.some((a) => a !== import_chunk_43nz5n02.Vr);
      throw new S(`could not tell which ${i.join(" or ")} repository {owner}/{repo} is: set GH_REPO=${r ? "[HOST/]" : ""}OWNER/REPO or spell the repository out in the endpoint${i.length > 1 ? " and name its host with --hostname" : ""}`);
    }
    return t;
  }
  async findOnAnyHost() {
    let e = this.host, t;
    if (this.ghRepo === "") {
      let o = await this.remoteListing();
      t = z(o, (r) => N(r, [e ?? import_chunk_43nz5n02.Vr]));
      let i = t || e !== void 0 ? void 0 : z(o, (r) => r);
      if (i) {
        let r = M(i.repository.host);
        if ("refusal" in r) throw new S(`{owner}/{repo} would be the repository of ${ae(i.remote)}: ${r.refusal}`);
        t = { remote: i.remote, repository: { ...i.repository, host: r.host } };
      }
    } else {
      let o = this.ghRepoRepository();
      if (o && !Fe.test(this.ghRepo) && !(0, import_chunk_43nz5n02.Ro)(o.host)) throw new S(Z("GH_REPO"));
      let i = o && N(o, [e ?? import_chunk_43nz5n02.Vr]);
      t = i ? { repository: i } : void 0;
    }
    if (!t) throw new S(`could not tell which ${e === void 0 ? "" : `${e} `}repository {owner}/{repo} is: set GH_REPO=OWNER/REPO or spell the repository out in the endpoint${e === void 0 ? " and name its host with --hostname" : ""}`);
    return t;
  }
  async findBranch() {
    let e = await this.git(["symbolic-ref", "--quiet", "--short", "HEAD"]);
    if (e === void 0) throw new S("could not tell the current branch for {branch}: spell the branch out");
    return e;
  }
  async git(e) {
    let t = await (0, import_chunk_7fsmgfxx.ut)("git", [...import_chunk_gd77dyw4.TD, ...e], { cwd: this.cwd, env: (0, import_chunk_gd77dyw4.ms)(), timeout: Rt, preserveOutputOnError: false });
    return t.code === 0 && t.stdout.trim() !== "" ? t.stdout.trim() : void 0;
  }
}
function N(e, t) {
  let o = (0, import_chunk_43nz5n02.Ro)(e.host) ? import_chunk_43nz5n02.Vr : (0, import_chunk_43nz5n02.yL)(e.host);
  return t.includes(o) ? { ...e, host: o } : void 0;
}
function St(e, t) {
  return z(e, (o) => N(o, t))?.repository;
}
function z(e, t) {
  let o = [];
  for (let { name: r, marked: a, repository: h } of Le(e)) {
    let d = t(h);
    if (!d) continue;
    let l = ke.indexOf(r);
    o.push({ name: r, rank: a ? -1 : l === -1 ? ke.length : l, repository: d });
  }
  o.sort((r, a) => r.rank - a.rank || (r.name < a.name ? -1 : r.name > a.name ? 1 : 0));
  let [i] = o;
  return i && { repository: i.repository, remote: i.name };
}
function ae(e) {
  return e !== void 0 && /^[A-Za-z0-9._-]{1,64}$/.test(e) ? `this checkout's remote ${e}` : "one of this checkout's remotes";
}
function Le(e) {
  let t = /* @__PURE__ */ new Map();
  for (let o of e.split("\0")) {
    let [i = "", r] = o.split(`
`, 2), a = /^remote\.(.+)\.(url|gh-resolved)$/.exec(i);
    if (r === void 0 || a === null) continue;
    let [, h = "", d] = a, l = t.get(h) ?? { marked: false };
    if (d === "url") l.url ??= r;
    else if (r === "base") l.marked = true;
    t.set(h, l);
  }
  return [...t].flatMap(([o, { url: i, marked: r }]) => {
    let a = i === void 0 ? null : (0, import_chunk_3hr8g93j.eE)(i);
    return a ? [{ name: o, marked: r, repository: a }] : [];
  });
}
var Ne = 4, At = /* @__PURE__ */ new Set(["api", "v3", "uploads"]);
function Ue(e, t) {
  let o = e;
  for (let r = 0; ; r++) {
    let a = o.replace(/%([0-9a-f]{2})/gi, (h, d) => String.fromCharCode(Number.parseInt(d, 16)));
    if (a === o) break;
    if (r === Ne) return `the path is percent-encoded more than ${Ne} times over; spell it plainly`;
    o = a;
  }
  let i = 0;
  for (let r of o.toLowerCase().replaceAll("\\", "/").split("/")) {
    let a = (0, import_chunk_7cfjrnwy.nt)(r, ";");
    if (a === "..") {
      if (t) return "the path holds a `..` segment (percent-encoded, or with `;` parameters); spell it plainly";
      i = 0;
    } else if (i === 0 && /^graphql(?![a-z0-9_-])/.test(a)) return Se;
    else if (a !== "" && a !== "." && !At.has(a)) i++;
  }
  return /[\0-\x1f\x7f]/.test(o) ? "the path contains an encoded control character" : void 0;
}
var D = 26214400, Ve = 104857600, Ht = 8388608, Ot = 1048576, he = 3e5, qe = 5, xt = 141, Pt = 3, Gt = 255, vt = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), kt = "2022-11-28", Ft = 120, Ct = /\/(?:repos\/[^/]+\/[^/]+|repositories\/\d+)\/actions\//, Me = `This session's GitHub proxy may have no GitHub Enterprise connection for that host, or it may not be a GitHub Enterprise host; nothing run in the session adds a connection. For ${import_chunk_43nz5n02.Vr}, add --hostname ${import_chunk_43nz5n02.Vr}.`, Qe = "the endpoint is not a valid URL path", Lt = 91, Nt = 93, Ut = /* @__PURE__ */ new Set([32, 9, 10, 13]), Ie = /* @__PURE__ */ new Set(["accept", "accept-language", "content-type", "if-match", "if-modified-since", "if-none-match", "time-zone", "x-github-api-version", "x-github-next-global-id"]), qt = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ message: (0, import_chunk_adx6804h.n)().optional().catch(void 0), errors: (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.ie)())]).optional().catch(void 0) })), Mt = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ message: (0, import_chunk_adx6804h.n)() }));
class g extends Error {
}
class ue extends Error {
}
async function It(e, t) {
  let o = t.ghesHosts === import_chunk_3d2897vr.$Z ? t.ghesHosts : t.ghesHosts.filter((r) => !r.endsWith(import_chunk_3d2897vr.oTt) && URL.parse((0, import_chunk_43nz5n02.HEe)(r))?.hostname === r), i = He(e, t.ghHost, o, { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION);
  try {
    switch (i.kind) {
      case "help":
        return await t.write("stdout", j(o)), 0;
      case "refuse":
        return await t.write("stderr", `gh: ${i.message}
`), 1;
      case "api":
        return await Dt(i.options, t, o);
    }
  } catch (r) {
    if (r instanceof ue) return xt;
    return await t.write("stderr", `gh: ${ot(r)}
`), 1;
  }
}
async function ns({ port: e, caBundlePath: t, ghesHosts: o, ghArgs: i }) {
  let r = Bt;
  (0, import_chunk_ndrgvsn7.q6e)(process.stdout), (0, import_chunk_ndrgvsn7.q6e)(process.stderr);
  let a = 1, h = e !== import_chunk_3d2897vr.BCr ? `http://127.0.0.1:${e}` : (0, import_chunk_3d2897vr.YTl)(import_chunk_c203g5kd.s.HTTPS_PROXY);
  if (h === void 0) {
    await r("stderr", `${import_chunk_3d2897vr.qTl}
`), (0, import_chunk_mpk68jst.GWn)(a);
    return;
  }
  let d = e === import_chunk_3d2897vr.BCr ? void 0 : await (0, import_chunk_v684xj67.oEl)(t, e), l;
  try {
    var _stack = [];
    try {
      const y = __using(_stack, await (0, import_promises.open)(t, "r"), true);
      l = (await (0, import_chunk_w578pjby.KM)(y, Ht)).toString("utf8");
    } catch (_2) {
      var _error = _2, _hasError = true;
    } finally {
      var _promise = __callDispose(_stack, _error, _hasError);
      _promise && await _promise;
    }
  } catch (y) {
    await r("stderr", `gh: ${Je((0, import_chunk_jv7av99m.w)(y) ?? "unreadable")}
`);
  }
  if (l !== void 0) a = await It(i, { proxyUrl: h, proxyAuthorization: d === void 0 ? void 0 : (0, import_chunk_v684xj67.sEl)(d), ca: l, cwd: (0, import_chunk_18rsj2ts.pe)(), path: import_chunk_c203g5kd.s.PATH ?? "", ghHost: import_chunk_c203g5kd.s.GH_HOST, ghRepo: import_chunk_c203g5kd.s.GH_REPO, ghesHosts: o, get stdin() {
    return process.stdin;
  }, write: r });
  (0, import_chunk_mpk68jst.GWn)(a);
}
async function Bt(e, t) {
  if (!await jt(process[e], t) && e === "stdout") throw new ue();
}
function jt(e, t) {
  if (e.destroyed || e.writableEnded) return Promise.resolve(false);
  let { promise: o, resolve: i } = Promise.withResolvers(), r = () => i(false);
  return e.once("error", r), e.once("close", r), e.write(t, (a) => i(!a)), o.finally(() => {
    e.off("error", r), e.off("close", r);
  });
}
function Je(e) {
  return `could not read this session's GitHub proxy CA bundle (${e}).`;
}
function Be(e, t) {
  return [...t === "windows" ? ["--binary"] : [], "-r", "-c", ` ${e}`];
}
function je(e) {
  let t = (0, import_chunk_7cfjrnwy.S$)(e);
  return t === "" || t.endsWith(`
`) ? t : `${t}
`;
}
async function Dt(e, t, o) {
  if ((0, import_chunk_k449cc64.wt)()) throw new g("the built-in gh api is off in this session: nonessential network traffic is disabled (CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC)");
  let i = t.apiOrigin ?? (0, import_chunk_43nz5n02.HEe)(import_chunk_43nz5n02.Vr), r = De(e.endpoint, i, o), a = new oe(t.cwd, t.ghRepo, r?.host ?? e.host, o), h = await Pe(e.rawFields, e.typedFields, async (m) => {
    if (m.startsWith("@")) return (await ze(m.slice(1), t)).toString("utf8");
    if (/^[+-]?\d+$/.test(m) && Number.isSafeInteger(Number(m))) return Number(m);
    switch (m) {
      case "true":
        return true;
      case "false":
        return false;
      case "null":
        return null;
      default:
        return a.fill(m, false);
    }
  }), d = e.inputFile !== void 0, l = (e.method ?? (h.size > 0 || d ? "POST" : "GET")).toUpperCase();
  if (e.paginate && l !== "GET") throw new g("the `--paginate` option is not supported for non-GET requests; with fields the method is POST unless `-X GET` sends them as query parameters");
  let y = await a.fill(e.endpoint, true), b = De(y, i, o);
  if (b?.host !== r?.host || b?.apiBase !== r?.apiBase) throw new g("filling in {owner}, {repo} or {branch} would change the host of the endpoint: spell the endpoint out");
  let E = b?.host ?? e.host ?? a.pathFilledFromHost(), { host: f, apiBase: O } = b ?? Ke(E ?? import_chunk_43nz5n02.Vr, i, o), k;
  if (f !== import_chunk_43nz5n02.Vr && o === import_chunk_3d2897vr.$Z) {
    let m = b !== void 0 ? "the host in the endpoint URL" : e.host !== void 0 ? "the host --hostname names" : `the host of ${ae(a.pathFilledFromRemote())}`;
    k = `${f}, not ${import_chunk_43nz5n02.Vr}: ${m}.`;
  }
  let A = Xe(y, O), H;
  if (l === "GET" || d) {
    for (let [m, q] of Ge(h)) A.searchParams.append(m, q);
    if (e.inputFile !== void 0) H = await ze(e.inputFile, t);
  } else if (h.size > 0) H = Buffer.from((0, import_chunk_w578pjby._)(se(h)), "utf8");
  if (e.paginate && !A.searchParams.has("per_page")) A.searchParams.set("per_page", "100");
  let X = Vt(e.headers, H !== void 0), G = e.jq === void 0 ? void 0 : (0, import_chunk_c203g5kd.dse)("jq", t.path);
  if (G === null) throw new g("--jq needs jq, which is not installed on this machine (not found on PATH): run the command without --jq and pipe the output to a JSON tool that is installed.");
  if (G !== void 0 && e.jq !== void 0) {
    let m = await (0, import_chunk_7fsmgfxx.ut)(G, Be(e.jq, (0, import_chunk_cg8dqz0a.x)()), { cwd: t.cwd, stdin: "ignore", timeout: he, stripFinalNewline: false, preserveOutputOnError: true });
    if (m.code === Pt) return await t.write("stderr", `${je(m.stderr)}gh: no request was sent: the jq on this machine could not compile the --jq filter. Change the filter, or run the command without --jq and pipe the output to a JSON tool that is installed.
`), 1;
  }
  try {
    new import_crypto.X509Certificate(t.ca);
  } catch {
    throw new g(Je("no certificate in it"));
  }
  let W = { ca: t.ca, rejectUnauthorized: true }, U = new import_chunk_3jjr3wje.Yhn(t.proxyUrl, { ...W, ...t.proxyAuthorization !== void 0 && { headers: { "Proxy-Authorization": t.proxyAuthorization } } });
  U.options = { ...U.options, ...W };
  let it = { httpsAgent: U, proxy: false, responseType: "arraybuffer", validateStatus: () => true, maxRedirects: 0, maxContentLength: Ve, maxBodyLength: D, timeout: he }, ce = k !== void 0, le = { answered: false }, Y = false, fe = false;
  for (; ; ) {
    let m;
    try {
      m = await zt({ method: l, url: A, body: H, headers: X }, it, O, le);
    } catch (T) {
      let L = ce && de(k, le.answered, Ze((0, import_chunk_3jjr3wje.gD)(T)?.connectStatus));
      if (!L) throw T;
      return await t.write("stderr", `gh: ${ot(T)}
${L}`), 1;
    }
    let q = m.status > 299, V = k;
    if (k = void 0, V !== void 0 && !q) await t.write("stderr", de(V, true, false));
    let me = e.paginate ? /<([^>]+)>;\s*rel="next"/.exec(String(m.headers.link ?? ""))?.[1] : void 0;
    if (e.include) await t.write("stdout", Qt(m));
    let F = m.data;
    if (F.length > 0 && !e.silent) if (G !== void 0 && e.jq !== void 0 && !q) {
      let T = await (0, import_chunk_7fsmgfxx.ut)(G, Be(e.jq, (0, import_chunk_cg8dqz0a.x)()), { cwd: t.cwd, input: F, timeout: he, stripFinalNewline: false, preserveOutputOnError: true });
      if (await t.write("stdout", T.stdout), T.code !== 0) {
        if (await t.write("stderr", je(T.stderr)), l !== "GET") await t.write("stderr", `gh: the ${l} was sent (last response: HTTP ${m.status}), but --jq could not filter the response. Running the command again would send the ${l} again.
`);
        return 1;
      }
    } else if (e.paginate && !e.include && !q && /[/+]json(;|$)/.test(String(m.headers["content-type"] ?? "")) && F[0] === Lt && F.at(-1) === Nt) {
      let T = F.subarray(1, -1);
      if (!Y) await t.write("stdout", "["), Y = true;
      if (T.some((L) => !Ut.has(L))) {
        if (fe) await t.write("stdout", ",");
        await t.write("stdout", T), fe = true;
      }
    } else await t.write("stdout", F);
    if (q) {
      await t.write("stderr", `gh: ${(0, import_chunk_7cfjrnwy.S$)(Jt(m.status, F))}
`);
      let T = [401, 403, 404].includes(m.status), L = ce && de(V, true, T || m.headers["x-proxy-error"] !== void 0);
      if (L) await t.write("stderr", L);
      else if (o !== import_chunk_3d2897vr.$Z && E === void 0 && o.length > 0 && T) await t.write("stderr", `this request went to ${import_chunk_43nz5n02.Vr}; for a repository on ${o.join(" or ")}, add --hostname <host> or write the endpoint as repos/{owner}/{repo}/...
`);
      return 1;
    }
    if (me === void 0) {
      if (Y) await t.write("stdout", "]");
      return 0;
    }
    A = Xt(Xe(me, O), A, O);
  }
}
function de(e, t, o) {
  if (e === void 0) return o ? `${Me}
` : "";
  return `this request ${t ? "went to" : "was for"} ${e}${o ? ` ${Me}` : ""}
`;
}
function Xt(e, t, o) {
  let i = new URL(o).pathname.replace(/\/$/, ""), r = /^\/repositories\/\d+(\/.*?)?\/?$/.exec(e.pathname.slice(i.length)), a = /^\/repos\/[^/]+\/[^/]+(\/.*?)?\/?$/.exec(t.pathname.slice(i.length));
  if (r === null || a === null || r[1] !== a[1]) return e;
  let h = new URL(t);
  return h.search = e.search, h;
}
async function zt(e, t, o, i) {
  let r = e;
  for (let a = 0; ; a++) {
    let h = await Wt(r, t);
    i.answered = true;
    let d = h.headers.location;
    if (!vt.has(h.status) || typeof d !== "string" || d === "") return h;
    if (a === qe) throw new g(`stopped after ${qe} redirects`);
    let l = Yt(d, r.url, o);
    r = h.status === 307 || h.status === 308 ? { ...r, url: l } : { method: r.method === "HEAD" ? "HEAD" : "GET", url: l, body: void 0, headers: { ...r.headers, "content-type": false } };
  }
}
function Wt({ method: e, url: t, body: o, headers: i }, r) {
  let a = { ...r, headers: i };
  switch (e) {
    case "GET":
      return import_chunk_np189awg.Xd.get(t.href, { ...a, data: o });
    case "HEAD":
      return import_chunk_np189awg.Xd.head(t.href, a);
    case "POST":
      return import_chunk_np189awg.Xd.post(t.href, o ?? Buffer.alloc(0), a);
    case "PUT":
      return import_chunk_np189awg.Xd.put(t.href, o ?? Buffer.alloc(0), a);
    case "PATCH":
      return import_chunk_np189awg.Xd.patch(t.href, o ?? Buffer.alloc(0), a);
    case "DELETE":
      return import_chunk_np189awg.Xd.delete(t.href, { ...a, data: o });
    default:
      throw new g("unsupported method; use GET, HEAD, POST, PUT, PATCH or DELETE");
  }
}
function Ke(e, t, o) {
  if (e === import_chunk_43nz5n02.Vr) return { host: e, apiBase: t };
  if (o !== import_chunk_3d2897vr.$Z) return { host: e, apiBase: (0, import_chunk_43nz5n02.HEe)(e) };
  let i = M(e);
  if ("refusal" in i) throw new g(i.refusal);
  return i;
}
function De(e, t, o) {
  let i = e.indexOf("://");
  if (i === -1) return;
  et(e);
  let r = e.slice(i + 3).search(/[/?#]/), a = r === -1 ? e : e.slice(0, i + 3 + r);
  if (!/[/?#]/.test(e.slice(0, i)) && Ce(a)) throw new g("{owner}, {repo} and {branch} are filled in only in the path and query of an endpoint: this one is a URL with a placeholder before its path");
  let h = URL.parse(e);
  if (!h) throw new g(Qe);
  let d = o !== import_chunk_3d2897vr.$Z && o.includes(h.hostname), l = h.protocol === "https:" && h.hostname !== new URL(t).hostname && !(0, import_chunk_43nz5n02.Ro)(h.hostname);
  if (l && !d && o !== import_chunk_3d2897vr.$Z) throw new g(I(h.hostname, o));
  let y = Ke(d || l ? h.hostname : import_chunk_43nz5n02.Vr, t, o);
  if (!st(h, new URL(y.apiBase))) throw new g(tt(y.apiBase));
  return y;
}
function Ze(e) {
  return e !== void 0 && e >= 400 && e < 500 && e !== 408 && e !== 429;
}
function Xe(e, t) {
  et(e);
  let o;
  try {
    if (e.includes("://")) o = new URL(e);
    else {
      let i = new URL(t).pathname.replace(/^\/|\/$/g, ""), r = e.replace(/^\//, ""), a = i !== "" && `${r.toLowerCase()}/`.startsWith(`${i.toLowerCase()}/`);
      o = new URL(a ? r.slice(i.length).replace(/^\//, "") : r, `${t}/`);
    }
  } catch {
    throw new g(Qe);
  }
  return rt(o, t, tt(t));
}
function et(e) {
  if (/[\p{Cc}\\]|(?! )\s/u.test(e)) throw new g("the endpoint contains a tab, a line break, a control character or a backslash");
}
function tt(e) {
  return `this gh sends requests to ${e.replace("https://", "")} only; give a REST path such as repos/{owner}/{repo}/pulls`;
}
function Yt(e, t, o) {
  let i;
  try {
    i = new URL(e, t);
  } catch {
    throw new g("refusing a redirect whose Location is not a URL");
  }
  let r = i.host === "" || i.host.length > Gt ? "another host" : `${i.protocol}//${i.host}`, a = i.username === "" && i.password === "" ? "" : " with a username or password in its URL", h = new URL(o);
  return rt(i, o, `refusing a redirect to ${r}${a}: this gh sends requests to ${o} only, and running the command again or with other flags will not change that.` + (i.hostname !== "" && i.hostname !== h.hostname ? " GitHub serves logs, archives, artifacts and release files from other hosts, which this built-in gh does not contact." : "") + (Ct.test(t.pathname) ? " For a failed CI job read repos/{owner}/{repo}/actions/runs/<run-id>/jobs (its steps) and repos/{owner}/{repo}/check-runs/<check-run-id>/annotations." : ""));
}
function st(e, t) {
  return e.protocol === t.protocol && e.host === t.host && e.username === "" && e.password === "";
}
function rt(e, t, o) {
  let i = new URL(t);
  if (!st(e, i)) throw new g(o);
  let r = Ue(e.pathname, i.pathname !== "/");
  if (r !== void 0) throw new g(r);
  if (i.pathname !== "/" && !e.pathname.startsWith(`${i.pathname}/`)) throw new g(o);
  return e.hash = "", e;
}
function Vt(e, t) {
  let o = { accept: "*/*", "x-github-api-version": kt, "content-type": t && "application/json; charset=utf-8" };
  for (let i of e) {
    let r = i.indexOf(":");
    if (r === -1) throw new g(`header "${R(i)}" requires a value separated by ':'`);
    let a = i.slice(0, r).trim().toLowerCase(), h = i.slice(r + 1).trim();
    if (!Ie.has(a)) throw new g(`the ${/^[a-z0-9-]+$/.test(a) ? `${a} ` : ""}header cannot be set through this session's GitHub proxy; headers that can: ${[...Ie].join(", ")}`);
    if (/[^\P{Cc}\t]/u.test(h)) throw new g(`the ${a} header value contains a control character`);
    o[a] = h;
  }
  return { ...o, authorization: `token ${import_chunk_r6r2wdsw.BX}`, "user-agent": `claude-code-gh-standin/${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION}` };
}
async function ze(e, t) {
  let o = new g(`${e === "-" ? "standard input" : R(e)} is larger than ${D / 1048576} MB, the most this gh sends`);
  if (e === "-") {
    let r = [], a = 0;
    for await (let h of t.stdin) {
      let d = Buffer.from(h);
      if (a += d.length, a > D) throw o;
      r.push(d);
    }
    return Buffer.concat(r);
  }
  let i;
  try {
    var _stack = [];
    try {
      const r = __using(_stack, await (0, import_promises.open)(e, "r"), true);
      i = await (0, import_chunk_w578pjby.KM)(r, D + 1);
    } catch (_2) {
      var _error = _2, _hasError = true;
    } finally {
      var _promise = __callDispose(_stack, _error, _hasError);
      _promise && await _promise;
    }
  } catch (r) {
    throw new g(`could not read ${R(e)} (${(0, import_chunk_jv7av99m.w)(r) ?? "unreadable"})`);
  }
  if (i.length > D) throw o;
  return i;
}
function Qt(e) {
  let t = [`HTTP/1.1 ${e.status} ${e.statusText}`.trimEnd()];
  for (let [o, i] of Object.entries(e.headers).sort(([r], [a]) => r < a ? -1 : r > a ? 1 : 0)) {
    let r = o.replace(/(^|-)([a-z])/g, (a, h, d) => `${h}${d.toUpperCase()}`);
    for (let a of Array.isArray(i) ? i : [i]) t.push(`${r}: ${String(a)}`);
  }
  return `${t.join(`\r
`)}\r
\r
`;
}
function Jt(e, t) {
  let o;
  try {
    o = t.length <= Ot ? (0, import_chunk_w578pjby.te)(t.toString("utf8")) : void 0;
  } catch {
    o = void 0;
  }
  let i = qt().safeParse(o);
  if (!i.success) return `HTTP ${e}`;
  let { message: r, errors: a } = i.data;
  if (typeof a === "string" && a !== "") return r ? `${a} (${r})` : a;
  if (r) return `${r} (HTTP ${e})`;
  let h = [];
  for (let d of Array.isArray(a) ? a : []) {
    let l = Mt().safeParse(d);
    if (typeof d === "string") h.push(d);
    else if (l.success) h.push(l.data.message);
  }
  return h.length > 0 ? h.join(`
`) : `HTTP ${e}`;
}
function ot(e) {
  if (e instanceof g || e instanceof P || e instanceof S) return e.message;
  let t = (0, import_chunk_3jjr3wje.gD)(e);
  if (t !== void 0) {
    let i = t.connectStatus, r = (0, import_chunk_3jjr3wje.qX)(i);
    if (i === 407 && String(t.headers["proxy-authenticate"] ?? "").includes(`realm="${import_chunk_v684xj67.Bko}"`)) return "this session's GitHub proxy did not accept this gh: the file with the session's secret, beside the CA bundle, is missing, unreadable or out of date. Run the command once more; if it fails again, stop: the built-in gh cannot be used until this session's GitHub proxy starts again";
    if (Ze(i)) return `this session's GitHub proxy refused the connection (${r}); do not retry unchanged`;
    let a = String(t.headers["retry-after"] ?? ""), h = /^\d{1,3}$/.test(a) ? Number(a) : 0, d = h > 1 && h <= Ft ? `${h} seconds` : "a few seconds";
    return `this session's GitHub proxy could not open the connection (${r}); nothing was sent. This can be temporary: wait ${d} and run the command once more. If it fails again, stop.`;
  }
  if ((0, import_chunk_3jjr3wje.fd)(e) && e.message.includes("maxContentLength")) return `the response is larger than ${Ve / 1048576} MB, the most this gh reads; ask for less (per_page, a narrower endpoint)`;
  if ((0, import_chunk_3jjr3wje.fd)(e) && e.message.includes("maxBodyLength")) return "the request body is too large";
  let o = (0, import_chunk_3jjr3wje.fd)(e) ? e.code : (0, import_chunk_jv7av99m.w)(e);
  return `could not reach GitHub through this session's GitHub proxy${o === void 0 ? "" : ` (${o})`}`;
}
