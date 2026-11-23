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
var chunk_tb2czq5h_exports = {};
__export(chunk_tb2czq5h_exports, {
  I3r: () => I3r,
  Ktr: () => Ktr,
  Vtr: () => Vtr,
  i4o: () => i4o,
  n4o: () => n4o,
  o4o: () => o4o,
  qtr: () => qtr,
  r4o: () => r4o,
  s4o: () => s4o,
  t4o: () => t4o,
  ztr: () => ztr
});
module.exports = __toCommonJS(chunk_tb2czq5h_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_43nz5n02 = require("/$bunfs/root/chunk-43nz5n02.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_3hr8g93j = require("/$bunfs/root/chunk-3hr8g93j.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_7d2qr9z5 = require("/$bunfs/root/chunk-7d2qr9z5.js");
var import_chunk_7q6ee47s = require("/$bunfs/root/chunk-7q6ee47s.js");
var import_chunk_zh47ka3v = require("/$bunfs/root/chunk-zh47ka3v.js");
var import_chunk_5agyr1mw = require("/$bunfs/root/chunk-5agyr1mw.js");
var import_chunk_21y9ek9j = require("/$bunfs/root/chunk-21y9ek9j.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_w0pnqmj8 = require("/$bunfs/root/chunk-w0pnqmj8.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_e15pxvhz = require("/$bunfs/root/chunk-e15pxvhz.js");
var import_chunk_6s9tac84 = require("/$bunfs/root/chunk-6s9tac84.js");
var import_chunk_yr25sywv = require("/$bunfs/root/chunk-yr25sywv.js");
var import_chunk_6mhz7ytj = require("/$bunfs/root/chunk-6mhz7ytj.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_os = require("os");
var import_path = require("path");
var ae = /^(https:\/\/(?:[^/?#@:]*@)?)(\[[0-9a-f:.]+\]|[a-z0-9._-]+)((?::\d*)?)((?:\/[^?#]*)?)$/i;
function ve(t) {
  let [, e, h, i, r] = ae.exec(t) ?? [];
  if (e === void 0 || h === void 0 || i === void 0 || r === void 0) return [];
  let n = e + h + (h.endsWith(".") ? "" : ".") + i, d = n + (r.endsWith("/") ? r : `${r}/`);
  return [n + r, `${d}/`, `${d}//`];
}
function ce(t, e) {
  return (URL.canParse(t) ? ["", new URL(t).origin + "/.", t + ".", ...ve(t).map((i) => i + ".")] : [""]).flatMap((i) => Object.entries(e).flatMap(([r, n]) => ["-c", "http." + i + r + "=" + n]));
}
function de(t) {
  let [, , e, , h] = ae.exec(t) ?? [];
  return URL.canParse(t) && e !== void 0 && h !== void 0 && !/^\.|\.\./.test(e) && !/\/(?:\.|%2e){1,2}(?:\/|$)/i.test(h);
}
var ue = "4b825dc642cb6eb9a060e54bf8d69288fbee4904";
var t4o = `
Note: --post was ignored \u2014 posting applies only to GitHub.com pull request reviews.`, n4o = `
Note: --post was ignored \u2014 posting findings to the PR is currently turned off.`;
function ztr(t) {
  let e = (d) => String.raw`--fix|--comment|--post|--no-post|--max-findings(?:\s*=\s*(?!--)\S*|\s*=\S*|\s+${d})?`, h = new RegExp(`^(${e(String.raw`(?!--)\S+`)})(?:\\s+|$)`), i = new RegExp(`(?:^|\\s+)(${e(String.raw`(?:\d+|[Aa][Ll][Ll]|[Dd][Ee][Ff][Aa][Uu][Ll][Tt])`)})$`), r = /* @__PURE__ */ new Set(), n = t.trim();
  for (; ; ) {
    let d = n.match(h);
    if (!d) break;
    r.add(d[1]), n = n.slice(d[0].length);
  }
  for (; ; ) {
    let d = n.match(i);
    if (!d) break;
    r.add(d[1]), n = n.slice(0, n.length - d[0].length);
  }
  return { scopeArgs: n, applyFixes: r.has("--fix"), postReview: r.has("--no-post") ? false : r.has("--post") ? true : void 0 };
}
async function r4o(t, e = "/code-review ultra", h) {
  if (!await (0, import_chunk_sjqze7qg.sDn)()) return (0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_failed", { reason: (0, import_chunk_78g0060s.S)("not_git_repo"), cwd_is_home: D() }), { ok: false, reason: "not_git_repo", error: we(e, h?.confirmsBeforeLaunch !== true) };
  let i = t.trim(), r = (0, import_chunk_sjqze7qg.Cot)(i), n = r?.num.toString() ?? i.match(/^(?:#|PR[\s#]*)(\d+)$/i)?.[1] ?? i;
  if (/^\d+$/.test(n)) {
    let o = (A) => {
      if (A === "succeeded" && h?.suppressSucceededRecoveryEvent) return;
      if (n !== i) (0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_recovery", { reason: (0, import_chunk_78g0060s.S)("base_ref_not_found"), method: (0, import_chunk_78g0060s.S)("pr_arg_normalization"), outcome: (0, import_chunk_78g0060s.f)(A) });
    }, _ = await (0, import_chunk_3hr8g93j.gT)(), c = _ && (0, import_chunk_3hr8g93j.x8)(_) ? null : _, k = (0, import_chunk_43nz5n02.Nxt)(r?.host, c?.host) || !!r && !!c && (0, import_chunk_43nz5n02.Ro)(r.host) && (0, import_chunk_43nz5n02.Ro)(c.host);
    if (r && (!k || r.owner.toLowerCase() !== c?.owner.toLowerCase() || r.repo.toLowerCase() !== c?.name.toLowerCase())) {
      (0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_failed", { reason: (0, import_chunk_78g0060s.S)("pr_url_wrong_repo"), has_remote: !!c, cwd_is_home: D() }), o("failed");
      let A = `${r.owner}/${r.repo} on ${r.host}`, M = c ? `you're in ${c.owner}/${c.name} on ${c.host}` : "this directory has no GitHub remote";
      return { ok: false, reason: "pr_url_wrong_repo", error: `That link is for ${A}, but ${M}. cd into a checkout of that repo and run ${e} ${r.num} from there.` };
    }
    if (!c) return (0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_failed", { reason: (0, import_chunk_78g0060s.S)("no_github_remote"), cwd_is_home: D() }), o("failed"), { ok: false, reason: "no_github_remote", error: `${e} <PR#> needs a GitHub remote so it knows which repository the PR is in. ${import_chunk_6s9tac84.don} If a GitHub repo already exists, run \`git remote add origin REPO_URL\`. Or run ${e} with no argument to review your current branch instead.` };
    if ((0, import_chunk_w0pnqmj8.W2t)(c)) return (0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_failed", { reason: (0, import_chunk_78g0060s.S)("monorepo_blocked"), cwd_is_home: D() }), o("failed"), { ok: false, reason: "monorepo_blocked", error: `${e} doesn't support pull requests in this repository. Run /code-review ${n}${e.startsWith("/") ? "" : " in Claude Code"} for a local review instead.` };
    let b, C, [{ stdout: N, code: Y }, P] = await Promise.all([(0, import_chunk_7fsmgfxx.kt)("gh", ["pr", "view", n, "--repo", `${c.host}/${c.owner}/${c.name}`, "--json", "additions,deletions,changedFiles"], { timeout: 5e3, preserveOutputOnError: false }), (0, import_chunk_43nz5n02.Ro)(c.host) && (0, import_chunk_sjqze7qg.xXa)() && !(0, import_chunk_k449cc64.wt)() ? (0, import_chunk_bzyb60p0.ulr)(c.owner, c.name, h?.accessProbeBudgetMs) : null]);
    if (P && !h?.suppressOfferedRecoveryEvent) (0, import_chunk_y53wbr8a.a)("tengu_review_remote_github_access_probe", { verdict: (0, import_chunk_78g0060s.f)(P.verdict), http_status: P.httpStatus ?? void 0 });
    if (P?.verdict === "github_not_connected" || P?.verdict === "github_repo_not_found") {
      (0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_failed", { reason: (0, import_chunk_78g0060s.f)(P.verdict), cwd_is_home: D() }), o("failed");
      let A = (0, import_chunk_zh47ka3v.Bbt)() ? `run /web-setup${e.startsWith("/") ? "" : " in Claude Code"} to reuse your GitHub CLI login` : "", M = `then re-run ${e} ${r === null ? n : `https://${r.host}/${r.owner}/${r.repo}/pull/${n}`}`;
      return { ok: false, reason: P.verdict, error: P.verdict === "github_not_connected" ? (0, import_chunk_bzyb60p0.HZr)({ subject: `Ultrareview clones ${c.owner}/${c.name} in the cloud`, webSetupHint: A, rerun: M }) : (0, import_chunk_bzyb60p0.DZr)({ owner: c.owner, name: c.name, webSetupHint: A, rerun: M, leadWithWebSetup: Y === 0 }) };
    }
    if (Y === 0 && N.trim()) try {
      let A = (0, import_chunk_w578pjby.te)(N), { maxFiles: M, maxLines: ie } = (0, import_chunk_sjqze7qg.rDn)(), W = A.additions + A.deletions;
      if (Number.isFinite(A.changedFiles) && Number.isFinite(W)) b = A.changedFiles, C = W;
      if (A.changedFiles > M || W > ie) return (0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_failed", { reason: (0, import_chunk_78g0060s.S)("pr_diff_too_large"), files: A.changedFiles, lines: W, max_files: M, max_lines: ie, cwd_is_home: D() }), o("failed"), { ok: false, reason: "pr_diff_too_large", error: `PR #${n} is too large for ultrareview (${A.changedFiles} files, ${W.toLocaleString()} lines). Split it into smaller PRs, or run \`${e}\` on a narrower local diff.` };
    } catch {
    }
    return o("succeeded"), { ok: true, scope: { mode: "pr", prNumber: n, repo: `${c.owner}/${c.name}`, host: c.host, hadArg: true, diffFiles: b, diffLines: C } };
  }
  let d = await _e((0, import_chunk_18rsj2ts.pe)()), w = null;
  if (d !== null) try {
    w = await (0, import_chunk_z6pfqf6e.T$)((0, import_chunk_w578pjby.le)().cwd());
  } catch {
  }
  if (d !== null && w !== null && !(0, import_chunk_z6pfqf6e.Ya)(d, w)) {
    let o = (0, import_chunk_w5s307zm.ol)(w) !== null, _ = o ? await _e(w) : null;
    if (!o || _ !== null && !(0, import_chunk_2yx6c1y2.bv)(_, d) && !await (0, import_chunk_bzyb60p0.J0t)(_, d)) return (0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_failed", { reason: (0, import_chunk_78g0060s.S)("cwd_in_other_repo"), cwd_is_home: D() }), { ok: false, reason: "cwd_in_other_repo", error: Ue(e, w, o) };
  }
  let R = await (0, import_chunk_yr25sywv.Lei)();
  if (R.tooLarge) return (0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_failed", { reason: (0, import_chunk_78g0060s.S)("repo_too_large_to_bundle"), pack_bytes: R.sizeBytes ?? void 0, pack_objects: R.inPackCount ?? void 0, cwd_is_home: D() }), { ok: false, reason: "repo_too_large_to_bundle", error: `Repo is too large to bundle. Push a PR and use \`${e} <PR#>\` instead.` };
  let E = async (o) => (await (0, import_chunk_7fsmgfxx.kt)((0, import_chunk_w5s307zm.Ht)(), [...import_chunk_gd77dyw4.Nn, "rev-parse", "--verify", "--quiet", "--end-of-options", o], { preserveOutputOnError: false })).code === 0, H = /\s/.test(i), V = H && (await E(`origin/${i}`) || await E(i)), T = H && !V ? i.match(/https:\/\/\S*\/pull\/\d+\b/) : null, x = H && !V && !T ? i.match(/(?<![\w/#-])(?:#|PR)[-\s#]*(\d+)\b/i) ?? i.match(/(?<![\w/#-])pull[\s-]+request[-\s#]*(\d+)\b/i) ?? i.match(/\/pull\/(\d+)\b/i) ?? i.match(/^(\d+)\b/) : null;
  if (T || x) {
    let o = T ? T[0] : `#${x[1]}`, _ = T ? T[0] : x[1];
    return (0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_recovery", { reason: (0, import_chunk_78g0060s.S)("base_ref_not_found"), method: (0, import_chunk_78g0060s.S)("embedded_pr_hint"), outcome: (0, import_chunk_78g0060s.S)("offered") }), (0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_failed", { reason: (0, import_chunk_78g0060s.S)("base_ref_not_found"), looks_like_url: /^https?:/i.test(i), looks_like_sha: false, starts_with_hash: i.startsWith("#"), has_slash: i.includes("/"), has_whitespace: true, has_pr_ref: true, has_remote: await me(), cwd_is_home: D() }), { ok: false, reason: "base_ref_not_found", error: `Your request mentions what looks like a PR reference (${o}). To review that PR, run \`${e} ${_}\`. To review your current branch instead, rerun without the PR-style reference.` };
  }
  let F = H && !V && !i.startsWith("-"), X = F ? i : void 0, g = F ? "" : i, z = false, j;
  if (g) {
    if (!await E(`origin/${g}`) && !await E(g)) {
      let o = await Se(g);
      if (o.outcome === "recovered" && (o.sha !== void 0 || await E(`origin/${g}`))) z = true, j = o.sha;
      else {
        if (o.outcome !== "not_found") (0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_recovery", { reason: (0, import_chunk_78g0060s.S)("base_ref_not_found"), method: (0, import_chunk_78g0060s.S)("fetch_retry"), outcome: (0, import_chunk_78g0060s.S)("failed") });
        (0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_failed", { reason: (0, import_chunk_78g0060s.S)("base_ref_not_found"), looks_like_url: /^https?:/i.test(g), looks_like_sha: /^[0-9a-f]{7,40}$/i.test(g), starts_with_hash: g.startsWith("#"), has_slash: g.includes("/"), has_whitespace: /\s/.test(g), has_remote: await me(), cwd_is_home: D() });
        let _ = ge(g), c;
        switch (o.outcome) {
          case "fetch_failed": {
            let k = _ ? `Run \`git fetch origin ${g}\`` : "Fetch that branch from origin with git";
            c = `"${g}" exists on origin but couldn't be fetched. ${k} and try ${e} again.`;
            break;
          }
          case "probe_failed":
          case "recovered":
          case "not_found": {
            let k = await Te(g), b = k !== null && ge(k) ? ` Did you mean \`${k}\`?` : "";
            if (b) (0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_recovery", { reason: (0, import_chunk_78g0060s.S)("base_ref_not_found"), method: (0, import_chunk_78g0060s.S)("branch_suggestion"), outcome: (0, import_chunk_78g0060s.S)("offered") });
            let C = _ ? `run \`git fetch origin refs/heads/${g}:refs/remotes/origin/${g}\` and try ${e} ${g} again` : `fetch it from origin with git and try ${e} again`;
            c = o.outcome === "probe_failed" ? `"${g}" is not a local branch or commit, and origin couldn't be checked for it.${b} If it is a branch on origin, ${C}; ${e} also takes a PR number, a commit, or no argument (reviews your current branch).` : `"${g}" is not a branch or commit in this repo.${b} ${e} takes a PR number, a base branch or commit, or no argument (reviews your current branch). Try ${e} by itself.`;
            break;
          }
        }
        return { ok: false, reason: "base_ref_not_found", error: c };
      }
    }
  }
  let I = (o) => {
    if (z) {
      if (!(o === "succeeded" && j !== void 0 && h?.suppressSucceededRecoveryEvent === true)) (0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_recovery", { reason: (0, import_chunk_78g0060s.S)("base_ref_not_found"), method: (0, import_chunk_78g0060s.S)("fetch_retry"), outcome: (0, import_chunk_78g0060s.f)(o) });
    }
    if (F) {
      if (o === "succeeded" && h?.suppressSucceededRecoveryEvent) return;
      (0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_recovery", { reason: (0, import_chunk_78g0060s.S)("base_ref_not_found"), method: (0, import_chunk_78g0060s.S)("prose_instructions"), outcome: (0, import_chunk_78g0060s.f)(o) });
    }
  }, v = g || await (0, import_chunk_w5s307zm._L)() || "main", K = await (0, import_chunk_w5s307zm.pm)() || "HEAD", Q = async (o) => (0, import_chunk_7fsmgfxx.kt)((0, import_chunk_w5s307zm.Ht)(), [...import_chunk_gd77dyw4.Nn, "merge-base", o, "HEAD"], { preserveOutputOnError: false, env: (0, import_chunk_gd77dyw4.ms)() }), y = j ?? `origin/${v}`, { stdout: G, code: J } = await Q(y);
  if (J !== 0) y = v, { stdout: G, code: J } = await Q(y);
  let q = G.trim(), Z = (o) => (0, import_chunk_7fsmgfxx.kt)((0, import_chunk_w5s307zm.Ht)(), [...import_chunk_gd77dyw4.Nn, ...o], { preserveOutputOnError: false, env: (0, import_chunk_gd77dyw4.ms)() }), re = `Your checkout has no branches (detached HEAD only), which cloud review can't bundle. Create one first \u2014 \`git checkout -b <name>\` \u2014 then rerun ${e}.`, oe = async () => g.length > 0 || (await Z(["rev-parse", "--verify", "--quiet", `origin/${v}`])).code === 0 || (await Z(["rev-parse", "--verify", "--quiet", v])).code === 0, ne = async (o, _ = K) => {
    let c = o || await oe(), { stdout: k, code: b } = await (0, import_chunk_7fsmgfxx.kt)((0, import_chunk_w5s307zm.Ht)(), [...import_chunk_gd77dyw4.Nn, "diff", "--no-ext-diff", "--no-textconv", import_chunk_gd77dyw4.zy, "--shortstat", ue, "--"], { preserveOutputOnError: false, env: (0, import_chunk_gd77dyw4.ms)() });
    if (b === 0) {
      if (o && !k.trim()) return null;
      if (!k.trim()) return (0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_failed", { reason: (0, import_chunk_78g0060s.S)("empty_diff"), cwd_is_home: D() }), I("failed"), { ok: false, reason: "empty_diff", error: c ? `It doesn't look like you have any new commits or changes to review against your ${v} branch. Stage or commit them first?` : "It doesn't look like you have any changes to review. Stage or commit them first?" };
      let C = (0, import_chunk_e15pxvhz.uao)(k), N = C ? C.linesAdded + C.linesRemoved : 0, { maxFiles: Y, maxLines: P } = (0, import_chunk_sjqze7qg.rDn)();
      if (C && (C.filesCount > Y || N > P)) {
        (0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_failed", { reason: (0, import_chunk_78g0060s.S)("local_diff_too_large"), files: C.filesCount, lines: N, max_files: Y, max_lines: P, after_fallback: true, cwd_is_home: D(), first_commit: o || void 0 }), I("failed");
        let A = o ? `Your first commit is the base from here on: make your changes and rerun ${e} to review only those.` : c ? `Review a smaller subset by committing it on a branch off an empty base, or push a PR and use \`${e} <PR#>\`.` : `This repo has no ${v} branch \u2014 if another branch is your base, pass it explicitly (\`${e} <branch>\`). Otherwise review a smaller subset by committing it on a branch off an empty base, or push a PR and use \`${e} <PR#>\`.`;
        return { ok: false, reason: "local_diff_too_large", error: `This looks like a first review of the entire repository (${k.trim()}), which exceeds ultrareview's limit. ${A}` };
      }
      if (!h?.suppressOfferedRecoveryEvent) (0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_recovery", { reason: (0, import_chunk_78g0060s.S)("no_merge_base"), method: (0, import_chunk_78g0060s.S)("empty_tree_bundle"), outcome: (0, import_chunk_78g0060s.S)("offered"), files: C?.filesCount, lines: C ? N : void 0, is_shallow: false, first_commit: o || void 0 });
      return I("succeeded"), { ok: true, scope: { mode: "branch", headBranch: _, baseBranch: v, mergeBaseSha: ue, diffStat: k.trim(), hadArg: g.length > 0, diffFiles: C?.filesCount, diffLines: C ? N : void 0, noMergeBase: o ? "first_commit" : c ? "unrelated_history" : "base_ref_missing", instructions: X } };
    }
    return null;
  };
  if (J !== 0 || !q) {
    let o = (await Z(["rev-parse", "--verify", "--quiet", "HEAD"])).code === 0, _ = (await Z(["rev-parse", "--is-shallow-repository"])).stdout.trim(), c = _ === "true", k = _ === "false", b = o && k && (0, import_chunk_sjqze7qg.vbi)(), C = b ? await Z(["for-each-ref", "--count=1", "refs/"]) : null, N = C !== null && C.stdout.trim() !== "", Y = C !== null && C.code === 0 && C.stdout.trim() === "", P = false;
    if (b && N) if (h?.confirmsBeforeLaunch === true || h?.personRanTheCommand === true) {
      let M = await ne(false);
      if (M) return M;
    } else P = true;
    if ((0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_failed", { reason: (0, import_chunk_78g0060s.S)("no_merge_base"), cwd_is_home: D(), is_shallow: c, head_resolves: o, arg_was_explicit: g.length > 0, has_refs: N ? true : Y ? false : void 0, whole_repository_held_back: P || void 0 }), I("failed"), P) return { ok: false, reason: "no_merge_base", error: `${await oe() ? `${v} shares no history with your checkout` : `This repository has no ${v} branch to compare with`}, so a review here would cover every file. To review it whole, a person can run /ultrareview in an interactive Claude Code session, which asks before it spends anything.` };
    if (!o) return { ok: false, reason: "no_merge_base", error: !h?.confirmsBeforeLaunch ? `Your current branch has no commits yet, so there is nothing to review. Commit a starting point first. ${e} then reviews the changes you make on top of that commit.` : `Your current branch has no commits yet, so there is nothing to review. Commit your work first, then rerun ${e}.` };
    if (c) return (0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_recovery", { reason: (0, import_chunk_78g0060s.S)("no_merge_base"), method: (0, import_chunk_78g0060s.S)("deepen_hint"), outcome: (0, import_chunk_78g0060s.S)("offered"), is_shallow: true }), { ok: false, reason: "no_merge_base", error: g ? `Your clone is shallow and doesn't contain the point where your branch forked from ${v}. Run \`git fetch --deepen=100 origin ${v}\` (or \`git fetch --unshallow origin\`) and rerun ${e}.` : `Your clone is shallow and doesn't contain the point where your branch forked from ${v}. Run \`git fetch --unshallow origin\` and rerun ${e}. If your base branch isn't ${v}, pass it explicitly (\`${e} <branch>\`).` };
    if (Y) return { ok: false, reason: "no_refs", error: re };
    let A = z ? k ? `${v} was fetched from origin but shares no history with HEAD. If another branch is your real base, pass it explicitly (\`${e} <branch>\`).` : `${v} was fetched from origin but shares no history with HEAD. Try \`git fetch --unshallow origin\` (or deepen the clone) and rerun.` : g ? `Make sure ${v} exists locally or on origin (try \`git fetch origin ${v}\`).` : `Pass the base branch explicitly (e.g. \`${e} develop\`) or make sure you're in a git repo with a ${v} branch.`;
    return { ok: false, reason: "no_merge_base", error: `Could not find merge-base with ${v}. ${A}` };
  }
  if (g.length > 0) {
    let o = await Z(["for-each-ref", "--count=1", "refs/"]);
    if (o.code === 0 && o.stdout.trim() === "") return (0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_failed", { reason: (0, import_chunk_78g0060s.S)("no_refs"), cwd_is_home: D(), arg_was_explicit: true }), I("failed"), { ok: false, reason: "no_refs", error: re };
  }
  let { stdout: p, code: L } = await (0, import_chunk_e15pxvhz.iao)((0, import_chunk_w578pjby.le)().cwd(), [...import_chunk_gd77dyw4.Nn, "diff", "--no-ext-diff", "--no-textconv", import_chunk_gd77dyw4.zy, "--shortstat", q, "--"], { LC_ALL: "C" }, { preserveOutputOnError: false });
  if (L === 0 && !p.trim()) {
    let o = await $e(q, v), _ = o.headBranch, c = o.headAtMergeBase === true && o.headIsRoot === true && o.untrackedCount === 0 && (0, import_chunk_sjqze7qg.vbi)() && (await Z(["rev-parse", "--is-shallow-repository"])).stdout.trim() === "false" && (await Z(["rev-parse", "--verify", "--quiet", "--end-of-options", `${y}^{commit}`])).stdout.trim() === q, k = c && h?.confirmsBeforeLaunch !== true;
    if (c && !k) {
      let W = await ne(true, _);
      if (W) return W;
    }
    (0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_failed", { reason: (0, import_chunk_78g0060s.S)("empty_diff"), used_origin_ref: y !== v, had_explicit_base: g.length > 0, cwd_is_home: D(), on_base_branch: o.onBaseBranch, head_at_merge_base: o.headAtMergeBase, first_commit_held_back: k || void 0, has_untracked: o.untrackedCount === void 0 ? void 0 : o.untrackedCount > 0 }), I("failed");
    let b = g ? `try a different base, e.g. \`${e} <branch>\`` : `pass one explicitly, e.g. \`${e} <branch>\``, N = `${j !== void 0 && y === j ? `${v} on origin` : y} (merge-base ${q.slice(0, 7)})`, Y = "no staged or unstaged edits to tracked files", P, A;
    if (o.headAtMergeBase && _ && o.onBaseBranch) {
      let W = `If your work is on another branch, switch to it, or if the base should be something else, ${b}.`;
      if (y === _) P = `you're on ${_}, which is also the base of this review, and it has ${Y}`, A = `Everything already committed on ${_} counts as the base here, so only edits you haven't committed yet would be reviewed. ${W}`;
      else P = `you're on ${_}, which is also the base of this review, and it has no commits beyond ${N} and ${Y}`, A = W;
    } else if (o.headAtMergeBase && _ === "HEAD") P = `the commit you have checked out is already part of ${N}, and there are ${Y}`, A = `If your work is on a branch, switch to it. If you meant a different base, ${b}.`;
    else if (o.headAtMergeBase && _) P = `${_} has no commits beyond ${N} and ${Y}`, A = `If your work is on another branch, switch to it. If this branch was already merged or you meant a different base, ${b}.`;
    else P = `the diff against ${N} is empty`, A = `If you have local edits, stage or commit them first. If your branch was already merged or you meant a different base, ${b}.`;
    let M = "";
    if (o.headAtMergeBase && o.parentSha) {
      let W = o.parentSha.slice(0, 12), be = /^\d+$/.test(W) ? o.parentSha : W;
      (0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_recovery", { reason: (0, import_chunk_78g0060s.S)("empty_diff"), method: (0, import_chunk_78g0060s.S)("last_commit_hint"), outcome: (0, import_chunk_78g0060s.S)("offered") }), M = ` To review your latest commit anyway, run \`${e} ${be}\`. That id is the commit before it, and any earlier commit id or tag works the same way.`;
    }
    let ie = k ? " To review this first commit whole, run /ultrareview in an interactive Claude Code session, which asks before it spends anything." : "";
    return { ok: false, reason: "empty_diff", error: `No changes to review: ${P}.${ke(o.untrackedCount, e)} ${A}${M}${ie}` };
  }
  let B = (0, import_chunk_e15pxvhz.uao)(p);
  if (B) {
    let { maxFiles: o, maxLines: _ } = (0, import_chunk_sjqze7qg.rDn)(), c = B.linesAdded + B.linesRemoved;
    if (B.filesCount > o || c > _) {
      (0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_failed", { reason: (0, import_chunk_78g0060s.S)("local_diff_too_large"), files: B.filesCount, lines: c, max_files: o, max_lines: _, cwd_is_home: D() }), I("failed");
      let { stdout: k, code: b } = await (0, import_chunk_e15pxvhz.iao)((0, import_chunk_w578pjby.le)().cwd(), [...import_chunk_gd77dyw4.Nn, "-c", "core.quotepath=false", "diff", "--no-ext-diff", "--no-textconv", import_chunk_gd77dyw4.zy, "--numstat", q, "--"], {}, { preserveOutputOnError: false, timeout: 1e4, maxBuffer: 10485760 }), C = b === 0 ? Ee(k) : "";
      return { ok: false, reason: "local_diff_too_large", error: `Diff is too large for ultrareview: ${B.filesCount.toLocaleString()} ${(0, import_chunk_7cfjrnwy.O)(B.filesCount, "file")}, ${c.toLocaleString()} ${(0, import_chunk_7cfjrnwy.O)(c, "line")} changed (limits: ${o.toLocaleString()} ${(0, import_chunk_7cfjrnwy.O)(o, "file")}, ${_.toLocaleString()} ${(0, import_chunk_7cfjrnwy.O)(_, "line")}).${C} Pass a closer base branch (\`${e} <branch>\`) to narrow the scope, or split the change.` };
    }
  }
  return I("succeeded"), { ok: true, scope: { mode: "branch", headBranch: K, baseBranch: v, mergeBaseSha: q, diffStat: p.trim(), hadArg: g.length > 0, diffFiles: B?.filesCount, diffLines: B ? B.linesAdded + B.linesRemoved : void 0, instructions: X } };
}
async function $e(t, e) {
  let [h, i, r] = await Promise.all([(0, import_chunk_7fsmgfxx.kt)((0, import_chunk_w5s307zm.Ht)(), [...import_chunk_gd77dyw4.Nn, "rev-list", "--parents", "--max-count=1", "HEAD", "--"], { preserveOutputOnError: false, env: (0, import_chunk_gd77dyw4.ms)() }), (0, import_chunk_7fsmgfxx.kt)((0, import_chunk_w5s307zm.Ht)(), [...import_chunk_gd77dyw4.Nn, "symbolic-ref", "--quiet", "HEAD"], { preserveOutputOnError: false, env: (0, import_chunk_gd77dyw4.ms)() }), (0, import_chunk_7fsmgfxx.kt)((0, import_chunk_w5s307zm.Ht)(), [...import_chunk_gd77dyw4.Nn, "ls-files", "--others", "--exclude-standard", "--directory", "--no-empty-directory", "-z", "--", ":/"], { preserveOutputOnError: false, timeout: 5e3, maxBuffer: 1048576, env: (0, import_chunk_gd77dyw4.ms)({ GIT_LITERAL_PATHSPECS: "" }) })]), [n, d, ...w] = h.code === 0 ? h.stdout.trim().split(/\s+/) : [], R = i.exitCode === 0 ? i.stdout.trim().replace(/^refs\/heads\//, "") || void 0 : i.exitCode === 1 ? "HEAD" : void 0;
  return { headBranch: R, onBaseBranch: R === void 0 ? void 0 : R !== "HEAD" && (R === e || `origin/${R}` === e), headAtMergeBase: n ? n === t : void 0, parentSha: w.length ? void 0 : d || void 0, headIsRoot: n ? !d : void 0, untrackedCount: r.code === 0 ? (0, import_chunk_4smdap7r.U)(r.stdout.split("\0"), Boolean) : void 0 };
}
function ke(t, e) {
  if (!t) return "";
  return ` Git also sees ${t.toLocaleString()} untracked ${(0, import_chunk_7cfjrnwy.O)(t, "file or folder", "files or folders")} here. New files aren't part of a review until git tracks them: run \`git add\` on the ones you want reviewed, then rerun ${e}.`;
}
function Ee(t, e = 3) {
  let { perFileStats: h } = (0, import_chunk_e15pxvhz.dao)(t, Number.POSITIVE_INFINITY), i = [...h.entries()].map(([n, d]) => ({ path: n, lines: d.added + d.removed })).filter((n) => n.lines > 0);
  if (i.length === 0) return "";
  return ` Largest files: ${i.sort((n, d) => d.lines - n.lines).slice(0, e).map((n) => `${n.path} (${n.lines.toLocaleString()} ${(0, import_chunk_7cfjrnwy.O)(n.lines, "line")})`).join(", ")}.`;
}
function Vtr(t, e = 80) {
  return (0, import_chunk_f64qna2j.Tt)(t.replace(/\s+/g, " ").trim(), e);
}
var Ce = "tengu_tranquil_peach";
async function Se(t) {
  if (t.startsWith("-") || t.includes(":") || /\s/.test(t)) return { outcome: "not_found" };
  let e = { ...(0, import_chunk_7fsmgfxx.nQe)(), GIT_SSH_COMMAND: `${import_chunk_c203g5kd.s.GIT_SSH_COMMAND || "ssh"} -o BatchMode=yes -o StrictHostKeyChecking=yes`, GIT_ALLOW_PROTOCOL: "https:http:ssh" }, h = e.GIT_ALLOW_PROTOCOL.split(":").flatMap((y) => ["-c", `alias.remote-${y}=version`, "-c", `alias.remote-${y}.command=version`]), i = (0, import_chunk_sghy0qej.Pe)(Ce, { safe: true }), r = await (0, import_chunk_7fsmgfxx.kt)((0, import_chunk_w5s307zm.Ht)(), [...import_chunk_gd77dyw4.Nn, "ls-remote", "--get-url", "origin"], { preserveOutputOnError: false, env: e }), n = r.code === 0 ? r.stdout.replace(/\r?\n$/, "") : "";
  if (n === "origin") return { outcome: "not_found" };
  let d = /^https?:/i.test(n), w = { ...e, ...(0, import_chunk_7fsmgfxx.S6e)(e, (y) => y === "GIT_CONFIG") }, R = false;
  if (i && n !== "" && !d) R = (await (0, import_chunk_7fsmgfxx.kt)((0, import_chunk_w5s307zm.Ht)(), [...import_chunk_gd77dyw4.Nn, "config", "--get", "remote.origin.vcs"], { preserveOutputOnError: false, env: w })).exitCode !== 1;
  let E = n.replace(/^https?::/, "").replace(/^(https?:\/\/[^/?#@:]*):[^/?#@]*@/i, "$1@"), H = d && /^[\x21-\x7e]+$/.test(E) && !E.includes("=") && de(E);
  if (!(d ? H : n !== "" && !R) && i) return { outcome: "probe_failed" };
  let T = H ? ce(E, { saveCookies: "false" }) : ["-c", "http.saveCookies=false"], x = await (0, import_chunk_7fsmgfxx.kt)((0, import_chunk_w5s307zm.Ht)(), [...import_chunk_gd77dyw4.Nn, ...import_chunk_7fsmgfxx.Oxt, ...h, "-c", "credential.helper=", "-c", "core.askPass=", ...T, "ls-remote", import_chunk_7fsmgfxx.H8, "--heads", "--exit-code", "--end-of-options", "origin", t], { timeout: 4e3, preserveOutputOnError: false, env: e });
  if (x.code !== 0) return { outcome: x.code === 2 ? "not_found" : "probe_failed" };
  let F = x.stdout.split(`
`).find((y) => y.split("	")[1]?.trim() === `refs/heads/${t}`);
  if (F === void 0) return { outcome: "not_found" };
  let X = [...import_chunk_gd77dyw4.Nn, ...import_chunk_7fsmgfxx.Oxt, ...h, ...import_chunk_7fsmgfxx.CDo, "-c", "credential.helper=", "-c", "core.askPass=", ...T, "-c", "fetch.bundleURI="], g = { timeout: 15e3, preserveOutputOnError: false, env: e };
  if (!i) return (await (0, import_chunk_7fsmgfxx.kt)((0, import_chunk_w5s307zm.Ht)(), [...X, "fetch", import_chunk_7fsmgfxx.H8, "--no-tags", "--end-of-options", "origin", `refs/heads/${t}:refs/remotes/origin/${t}`], g)).code === 0 ? { outcome: "recovered", sha: void 0 } : { outcome: "fetch_failed" };
  let z = (0, import_chunk_7cfjrnwy.nt)(F, "	");
  if (!/^[0-9a-f]{40}(?:[0-9a-f]{24})?$/.test(z)) return { outcome: "probe_failed" };
  let j = await (0, import_chunk_7fsmgfxx.kt)((0, import_chunk_w5s307zm.Ht)(), [...import_chunk_gd77dyw4.Nn, "config", "--get-regexp", "^(extensions\\.partialclone|remote\\..*\\.(promisor|partialclonefilter))$"], { preserveOutputOnError: false, env: w }), I;
  if (j.exitCode === 0) I = j.stdout.split(`
`).some((y) => {
    if (y === "") return false;
    let G = y.indexOf(" "), J = G === -1 ? y : y.slice(0, G), q = G === -1 ? "" : y.slice(G + 1).trim();
    return J.endsWith(".promisor") ? G === -1 || !/^(false|no|off|0*)$/i.test(q) : q !== "";
  });
  else I = j.exitCode !== 1;
  let v = [...X, ...import_chunk_7fsmgfxx.Yna.config, "-c", "remote.origin.followRemoteHEAD=never", ...I ? import_chunk_7fsmgfxx.DUl : [], "fetch", import_chunk_7fsmgfxx.H8, ...I ? [] : ["--no-filter"], ...import_chunk_7fsmgfxx.Yna.options, "--end-of-options", "origin", `refs/heads/${t}`], K = await (0, import_chunk_7fsmgfxx.kt)((0, import_chunk_w5s307zm.Ht)(), v, g);
  if (K.exitCode === 129) K = await (0, import_chunk_7fsmgfxx.kt)((0, import_chunk_w5s307zm.Ht)(), v.map((y) => y === "--no-write-fetch-head" ? "--dry-run" : y), g);
  if (K.code !== 0) return { outcome: "fetch_failed" };
  return (await (0, import_chunk_7fsmgfxx.kt)((0, import_chunk_w5s307zm.Ht)(), [...import_chunk_gd77dyw4.Nn, "rev-list", "--max-count=1", "--no-walk", "--missing=allow-any", "--end-of-options", `${z}^{commit}`], { preserveOutputOnError: false, env: (0, import_chunk_gd77dyw4.ms)() })).code === 0 ? { outcome: "recovered", sha: z } : { outcome: "fetch_failed" };
}
async function Te(t) {
  let { stdout: e, code: h } = await (0, import_chunk_7fsmgfxx.kt)((0, import_chunk_w5s307zm.Ht)(), [...import_chunk_gd77dyw4.Nn, "for-each-ref", "--format=%(refname:short)", "--count=2000", "refs/heads", "refs/remotes/origin"], { preserveOutputOnError: false, env: (0, import_chunk_gd77dyw4.ms)() });
  if (h !== 0) return null;
  let i = /* @__PURE__ */ new Map();
  for (let w of e.split(`
`)) {
    let R = w.trim();
    if (!R || R === "origin" || R === "origin/HEAD") continue;
    let E = R.startsWith("origin/") ? R.slice(7) : R;
    if (R.startsWith("origin/") || !i.has(E)) i.set(E, R);
  }
  let r = t === "main" ? "master" : t === "master" ? "main" : null;
  if (r !== null) {
    let w = i.get(r);
    if (w) return w;
  }
  let n = null, d = 3;
  for (let [w, R] of i) {
    if (Math.abs(w.length - t.length) >= d) continue;
    let E = (0, import_chunk_xcgcdx61.CK)(t, w, d - 1);
    if (E > 0 && E < d) d = E, n = R;
  }
  return n;
}
var Ae = "Couldn't check whether this review can run, so it stopped before uploading your code. Try again shortly; if this keeps happening, open a pull request for this branch and review the pull request instead.";
async function o4o({ overageConfirmed: t, credentials: e, skipLowCreditsNote: h = false, bundleFollows: i }) {
  let r = await (0, import_chunk_5agyr1mw.M3r)(e);
  if (!r) {
    if (i && (0, import_chunk_sjqze7qg.PXa)()) return { kind: "blocked", reason: "preflight_unavailable", message: Ae, actionUrl: null };
    return { kind: "proceed", billingNote: "", preflightUnavailable: true };
  }
  let n = r.billing_note ?? "", d = r.github_login ?? null;
  switch (r.action) {
    case "proceed":
      return { kind: "proceed", billingNote: n, githubLogin: d };
    case "blocked":
      return { kind: "blocked", reason: r.blocked?.reason ?? "server", message: r.blocked?.message ?? "Ultrareview is unavailable for your organization.", actionUrl: r.blocked?.action_url ?? null };
    case "confirm": {
      if (t) return { kind: "proceed", billingNote: n, githubLogin: d };
      let w = h ? null : await (0, import_chunk_5agyr1mw.FDa)(e);
      return { kind: "needs-confirm", body: `This review bills as usage credits (${(0, import_chunk_sjqze7qg.RCe)()}).${w ? `
${w.text}` : ""}`, lowCreditsNote: w?.text ?? null, creditsFallShort: w?.creditsFallShort ?? false, billingNote: n, githubLogin: d };
    }
  }
}
var Le = 3, I3r = "Ultrareview could not start the cloud session:", s4o = "Ultrareview cannot launch:", he = "env_011111111111111111111113";
async function i4o(t, e, h, i) {
  let r = i?.invocation ?? "/code-review ultra", n = i?.forShip, d = n?.asksOnly === true, w = (p) => ({ launched: false, blocks: [{ type: "text", text: p }] }), R = n && t.mode === "pr" ? { eligible: true } : await (0, import_chunk_bzyb60p0.art)({ allowBundle: true, storageV5: e.storageV5, credentials: e.credentials });
  if (!R.eligible) {
    let p = R.errors;
    if (p.length > 0) {
      (0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_failed", { reason: (0, import_chunk_78g0060s.S)("remote_agent_ineligible"), precondition_errors: (0, import_chunk_78g0060s.sl)(p.map((B) => B.type)), cwd_is_home: D() });
      let L = p.map((B) => {
        if (B.type === "not_in_git_repo") return we(r);
        if (B.type === "no_git_remote") return `${r} needs a GitHub remote so it can clone this repository into the cloud. ${import_chunk_6s9tac84.don} If a GitHub repo already exists, run \`git remote add origin REPO_URL && git push -u origin HEAD\`.`;
        return (0, import_chunk_bzyb60p0.n3e)(B);
      }).join(`
`);
      if (t.mode === "branch" && t.noMergeBase) (0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_recovery", { reason: (0, import_chunk_78g0060s.S)("no_merge_base"), method: (0, import_chunk_78g0060s.S)("empty_tree_bundle"), outcome: (0, import_chunk_78g0060s.S)("failed") });
      return (0, import_chunk_cqa9hrgx.m)("ultrareview_launch", "remote_agent_ineligible"), w(`${s4o}
${L}`);
    }
  }
  let E = await (0, import_chunk_5agyr1mw.nDt)();
  if (E !== null) {
    if (t.mode === "branch" && t.noMergeBase) (0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_recovery", { reason: (0, import_chunk_78g0060s.S)("no_merge_base"), method: (0, import_chunk_78g0060s.S)("empty_tree_bundle"), outcome: (0, import_chunk_78g0060s.S)("failed") });
    return w(E);
  }
  let H = (0, import_chunk_sjqze7qg.ySe)(), V = (p, L, B) => {
    if (typeof p !== "number" || !Number.isFinite(p)) return L;
    let o = Math.floor(p);
    if (o <= 0) return L;
    return o > B ? L : o;
  }, T = (0, import_chunk_sjqze7qg.RXa)(), x = { BUGHUNTER_DRY_RUN: "1", AUTOPATCH_ENABLE_ASIMOV: "1", ...H?.code_quality !== false && { BUGHUNTER_CODE_QUALITY: "1" }, BUGHUNTER_FLEET_SIZE: String(V(H?.fleet_size, 5, 20)), BUGHUNTER_MAX_DURATION: String(V(H?.max_duration_minutes, 10, 25)), BUGHUNTER_AGENT_TIMEOUT: String(V(H?.agent_timeout_seconds, 600, 1800)), BUGHUNTER_TOTAL_WALLCLOCK: String(V(H?.total_wallclock_minutes, 22, 27)), BUGHUNTER_RESULT_RELAY_MAX_SEC: String(((0, import_chunk_sjqze7qg.Eot)() - Le) * 60), ...T && { BUGHUNTER_MODEL: T }, ...process.env.BUGHUNTER_DEV_BUNDLE_B64 && { BUGHUNTER_DEV_BUNDLE_B64: process.env.BUGHUNTER_DEV_BUNDLE_B64 } }, F, X, g, z = "", j = [], I, v, K, Q, y, G, J = import_chunk_c203g5kd.s.CLAUDE_CODE_ULTRAREVIEW_REVIEW_MD_FILE;
  if (J && !(t.mode === "pr" && import_chunk_c203g5kd.s.CLAUDE_CODE_ULTRAREVIEW_PR_AS_MERGED && !i?.postReviewToPR && !i?.applyFixesOnComplete && !n)) return (0, import_chunk_cqa9hrgx.m)("ultrareview_launch", "review_md_not_allowed"), w("A draft REVIEW.md can be sent only with a pull request that is reviewed as it was merged, with no findings posted or applied, so nothing was launched. CLAUDE_CODE_ULTRAREVIEW_REVIEW_MD_FILE asked for a draft. Unset that variable to review without a REVIEW.md.");
  if (t.mode === "pr") {
    let p = (n && n.repository) ?? await (0, import_chunk_3hr8g93j.gT)(), L = p && (0, import_chunk_3hr8g93j.x8)(p) ? null : p;
    if (!L) return (0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_failed", { reason: (0, import_chunk_78g0060s.S)("no_github_remote_post_confirm"), cwd_is_home: D() }), (0, import_chunk_cqa9hrgx.m)("ultrareview_launch", "no_github_remote"), null;
    let B = import_chunk_c203g5kd.s.CLAUDE_CODE_ULTRAREVIEW_PR_AS_MERGED;
    if (B && !(0, import_chunk_sjqze7qg.eio)()) return (0, import_chunk_cqa9hrgx.m)("ultrareview_launch", "as_merged_unavailable"), w("Reviewing a pull request as it was merged is currently unavailable, so nothing was launched. CLAUDE_CODE_ULTRAREVIEW_PR_AS_MERGED asked for it: without it, the pull request is reviewed as it stands.");
    if (J && (0, import_chunk_wtm85h0y.lK)()) return (0, import_chunk_cqa9hrgx.m)("ultrareview_launch", "review_md_in_session"), w("This shell looks like part of a Claude Code session, and only a person may send a draft REVIEW.md, so nothing was launched. CLAUDE_CODE_ULTRAREVIEW_REVIEW_MD_FILE asked for a draft. To send one, a person should run claude ultrareview eval --review-md <file> in a new terminal window, outside Claude Code and any tmux or screen that it started.");
    let o = !J ? null : (0, import_path.isAbsolute)(J) ? await (0, import_chunk_5agyr1mw.H3r)(J) : "not_absolute";
    if (o !== null && (typeof o === "string" || !("text" in o))) {
      let [c, k] = typeof o === "string" ? [o, { not_absolute: "the path isn't absolute", not_text: "it isn't UTF-8 text", blank: "it is blank" }[o]] : "refused" in o ? ["refused", `it ${o.refused}`] : ["not_real_path", "the path isn't the file's real path (it goes through a symbolic link, or is spelled another way)"];
      return (0, import_chunk_cqa9hrgx.m)("ultrareview_launch", `review_md_${c}`), w(`The draft REVIEW.md that CLAUDE_CODE_ULTRAREVIEW_REVIEW_MD_FILE names can't be sent, so nothing was launched: ${k}. Fix the file or the path, or unset the variable to review without a REVIEW.md.`);
    }
    let _ = `ultrareview: ${L.owner}/${L.name}#${t.prNumber}`;
    F = await (0, import_chunk_bzyb60p0._q)({ initialMessage: null, source: "ultrareview", description: _, title: _, signal: e.abortController.signal, storageV5: e.storageV5, credentials: e.credentials, branchName: `refs/pull/${t.prNumber}/head`, ...n && { sourceUrl: `https://${L.host}/${L.owner}/${L.name}` }, environmentId: he, tags: ["ultrareview"], environmentVariables: { BUGHUNTER_PR_NUMBER: t.prNumber, BUGHUNTER_REPOSITORY: `${L.owner}/${L.name}`, ...B && { BUGHUNTER_PR_AS_MERGED: "1" }, ...n && { BUGHUNTER_SHIP_SESSION: d ? "ask" : n.session ?? "" }, ...o && { BUGHUNTER_REVIEW_MD: o.text }, ...x }, onCreateFail: (c, k, b) => {
      I = c, v = (0, import_chunk_78g0060s.f)(k), K = b?.status, Q = (0, import_chunk_78g0060s.fe)(b?.serverType), y = (0, import_chunk_78g0060s.fe)(b?.serverReason), G = { kind: k, reason: b?.serverReason, status: b?.status, message: c };
    } }), X = `/ultrareview ${t.prNumber}`, g = `${L.owner}/${L.name}#${t.prNumber}`;
  } else {
    let { headBranch: p, baseBranch: L, mergeBaseSha: B, diffStat: o, noMergeBase: _ } = t;
    z = o;
    let c, k;
    if (F = await (0, import_chunk_bzyb60p0._q)({ initialMessage: null, source: "ultrareview", description: `ultrareview: ${p}`, signal: e.abortController.signal, storageV5: e.storageV5, credentials: e.credentials, useBundle: true, bundleBaseRef: B, bundleForceScope: _ ? "squashed" : void 0, environmentId: he, tags: ["ultrareview"], environmentVariables: { BUGHUNTER_BASE_BRANCH: B, ...x }, onBundleFail: (b, C) => {
      c = b, k = (0, import_chunk_78g0060s.f)(C);
    }, onBundleNotice: (b) => {
      j.push(b);
    }, onCreateFail: (b, C, N) => {
      I = b, v = (0, import_chunk_78g0060s.f)(C), K = N?.status, Q = (0, import_chunk_78g0060s.fe)(N?.serverType), y = (0, import_chunk_78g0060s.fe)(N?.serverReason);
    } }), !F) {
      (0, import_chunk_y53wbr8a.a)("tengu_review_remote_teleport_failed", { mode: (0, import_chunk_78g0060s.S)("branch"), reason: v, bundle_fail_kind: k, status_code: K, server_type: Q, server_reason: y });
      let b = e.abortController.signal.aborted;
      if (_ && !b) (0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_recovery", { reason: (0, import_chunk_78g0060s.S)("no_merge_base"), method: (0, import_chunk_78g0060s.S)("empty_tree_bundle"), outcome: (0, import_chunk_78g0060s.S)("failed") });
      if (!b) (0, import_chunk_cqa9hrgx.m)("ultrareview_launch", "teleport_failed");
      return w(c ?? (I ? `${I3r} ${I}` : `Repo is too large. Push a PR and use \`${r} <PR#>\` instead.`));
    }
    X = "/ultrareview", g = _ === "unrelated_history" ? `${p} (all files \u2014 no common history with ${L})` : _ === "base_ref_missing" ? `${p} (all files)` : _ === "first_commit" ? `${p} (every file in the first commit)` : p === L ? p : `${p} \u2192 ${L}`;
  }
  if (!F) {
    (0, import_chunk_y53wbr8a.a)(d ? "tengu_review_remote_ship_ask" : "tengu_review_remote_teleport_failed", { mode: (0, import_chunk_78g0060s.S)("pr"), reason: v, status_code: K, server_type: Q, server_reason: y });
    let p = G?.reason;
    if (d) {
      let L = G?.status ?? 0;
      if (!(G?.kind === "create_request_failed" && L >= 400 && L < 500) && !e.abortController.signal.aborted) (0, import_chunk_cqa9hrgx.m)("ultrareview_launch", "ship_ask_failed");
    } else if (n && (p === "ultrareview_ship_code_review_covers" || p === "ultrareview_ship_code_review_on_request" || p === "ultrareview_ship_code_review_ask_once" || p === "ultrareview_ship_code_review_stopped" || p === "ultrareview_ship_already_reviewed" || p === "ultrareview_ship_order_under_way" || p === "ultrareview_ship_order_spent" || p === "ultrareview_ship_order_withdrawn" || p === "ultrareview_ship_not_pr_author" || p === "ultrareview_ship_cannot_post") || p === "ultrareview_off_for_organization") (0, import_chunk_cqa9hrgx.l)("ultrareview_launch", p);
    else if (!e.abortController.signal.aborted) (0, import_chunk_cqa9hrgx.m)("ultrareview_launch", "teleport_failed");
    if (I) return { launched: false, blocks: [{ type: "text", text: `${I3r} ${I}` }], createFailure: G };
    return null;
  }
  if (d) return (0, import_chunk_y53wbr8a.a)("tengu_review_remote_ship_ask", { mode: (0, import_chunk_78g0060s.S)("pr"), reason: (0, import_chunk_78g0060s.S)("started_a_session") }), (0, import_chunk_cqa9hrgx.m)("ultrareview_launch", "ship_ask_started_a_session"), { launched: true, blocks: [], sessionId: F.id, sessionUrl: (0, import_chunk_bzyb60p0.oBe)(F.id), taskId: void 0, title: F.title };
  let q;
  if (!i?.skipTaskRegistration) q = (0, import_chunk_bzyb60p0.uyt)({ remoteTaskType: "ultrareview", session: F, command: X, context: e, isRemoteReview: true, applyFixesOnComplete: i?.applyFixesOnComplete, reviewInstructions: t.mode === "branch" ? t.instructions : void 0, postReviewTo: i?.postReviewToPR && t.mode === "pr" && !i?.signal?.aborted ? { repo: t.repo, prNumber: t.prNumber } : void 0 }).taskId;
  if ((0, import_chunk_y53wbr8a.a)("tengu_review_remote_launched", { mode: (0, import_chunk_78g0060s.f)(t.mode), had_arg: t.hadArg, post_armed: i?.postReviewToPR === true && t.mode === "pr" && !i?.signal?.aborted, had_instructions: t.mode === "branch" && !!t.instructions, diff_files: t.diffFiles, diff_lines: t.diffLines }), t.mode === "branch" && t.noMergeBase) if ((0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_recovery", { reason: (0, import_chunk_78g0060s.S)("no_merge_base"), method: (0, import_chunk_78g0060s.S)("empty_tree_bundle"), outcome: (0, import_chunk_78g0060s.S)("succeeded") }), t.noMergeBase === "first_commit") (0, import_chunk_cqa9hrgx.u)("ultrareview_launch");
  else (0, import_chunk_cqa9hrgx.l)("ultrareview_launch", "no_merge_base_empty_tree_fallback");
  else (0, import_chunk_cqa9hrgx.u)("ultrareview_launch");
  (0, import_chunk_6mhz7ytj.$Da)(e.storageV5);
  let Z = (0, import_chunk_bzyb60p0.oBe)(F.id), re = h.trim() ? `${h.trim()}
` : "", oe = z ? `
Scope: ${z}` : "", ne = t.mode === "branch" && t.instructions ? i?.skipTaskRegistration ? `
Your text was read as a note, not a base branch \u2014 the standard review runs on the diff above.` : `
Your text was read as a note, not a base branch \u2014 the standard review runs on the diff above, and the findings will be related to your note when they arrive.` : "";
  return { launched: true, sessionId: F.id, sessionUrl: Z, taskId: q, title: F.title, blocks: [{ type: "text", text: `${re}Ultrareview launched for ${g} (${(0, import_chunk_sjqze7qg.xQ)()}, runs in the cloud).${i?.findingsArriveInSession ? " The findings arrive here when it finishes." : ""}${i?.postReviewToPR && t.mode === "pr" ? `
When it finishes, the findings will be posted to the PR as a comment from your GitHub account. (Keep this session open: the consent lives only here, so if it ends before the review finishes, nothing will be posted \u2014 even on resume.)` : ""}${oe}${ne}${j.map((p) => `
${p}`).join("")}` }] };
}
function Ktr(t, e) {
  return `The output above is already visible to the user. Briefly acknowledge it without repeating the target or billing note. Findings will arrive via task-notification.${t ? " The user passed --fix: when the findings arrive, apply them to the local working tree." : ""}${e ? ` The user's argument was interpreted as a review note, not a base branch: "${(0, import_chunk_7cfjrnwy.ee)(e, import_chunk_bzyb60p0.EZr)}". The cloud review runs its standard pass over the branch diff and does not see the note; when the findings arrive, prioritize and relate them to the user's request.` : ""}`;
}
var Be = /^[a-z][a-z0-9_]{0,63}$/;
async function qtr(t, e) {
  if (!(0, import_chunk_sjqze7qg.D6)()) {
    let T = (0, import_chunk_sjqze7qg.OXa)(), x = T === "entitlement" ? (0, import_chunk_7d2qr9z5.Dyr)() : null;
    return (0, import_chunk_y53wbr8a.a)("tengu_review_remote_gate_blocked", { reason: (0, import_chunk_78g0060s.fe)(T) ?? (0, import_chunk_78g0060s.S)("unknown"), entitlement_blocker: (0, import_chunk_78g0060s.fe)(x) }), { status: "error", message: "Ultrareview is currently unavailable.", ...T !== null && { gate_blocker: T }, ...x !== null && { entitlement_blocker: x } };
  }
  await (0, import_chunk_7q6ee47s.Zh)();
  let h = (0, import_chunk_2nv4wrez.Dp)("allow_remote_sessions", "Cloud sessions", "are");
  if (h) return (0, import_chunk_21y9ek9j.$H)("allow_remote_sessions", "slash_command"), { status: "error", message: h };
  let i = await (0, import_chunk_5agyr1mw.nDt)(0);
  if (i !== null) return { status: "error", message: i };
  let r = await r4o(t, e.invocation, { suppressSucceededRecoveryEvent: !e.confirm, suppressOfferedRecoveryEvent: e.confirm && !e.singlePass, confirmsBeforeLaunch: e.confirmsBeforeLaunch === true, personRanTheCommand: e.personRanTheCommand === true });
  if (!r.ok) return { status: "error", message: r.error, reason: r.reason };
  let n = await o4o({ overageConfirmed: e.overageConfirmed, credentials: e.context.credentials, skipLowCreditsNote: e.confirm && !e.singlePass, bundleFollows: r.scope.mode === "branch" });
  if (n.kind === "blocked") return (0, import_chunk_y53wbr8a.a)("tengu_review_overage_blocked", { reason: (0, import_chunk_jv7av99m.dA)(n.reason) }), { status: "blocked", message: n.message, actionUrl: n.actionUrl, ...Be.test(n.reason) && { reason: n.reason } };
  let d = () => {
    let T = r.scope.mode === "pr" ? `Reviewing PR ${r.scope.repo}#${r.scope.prNumber}.` : r.scope.noMergeBase ? "Reviewing all files on the current branch." : `Reviewing current branch against ${r.scope.baseBranch}.`, x = r.scope.mode === "branch" && r.scope.instructions ? ` Note for findings (not a base branch): "${Vtr(r.scope.instructions)}"` : "";
    return `
${T}${x}`;
  };
  if (n.kind === "proceed" && n.preflightUnavailable && e.withholdOverageConsent && !e.overageConfirmed) return { status: "needs-confirm", body: `Couldn't verify your review quota right now, so this review may bill as usage credits (${(0, import_chunk_sjqze7qg.RCe)()}).${d()}`, billingNote: "" };
  if (n.kind === "needs-confirm") {
    if (e.withholdOverageConsent) return { status: "needs-confirm", body: `${n.body}${d()}`, billingNote: n.billingNote };
    if ((0, import_chunk_y53wbr8a.a)("tengu_review_overage_dialog_shown", {}), !e.confirm) return { status: "needs-confirm", body: `${n.body}${d()}`, billingNote: n.billingNote };
    e.markOverageConfirmed();
  }
  if (e.confirm && r.scope.mode === "branch" && r.scope.noMergeBase) (0, import_chunk_y53wbr8a.a)("tengu_review_remote_precondition_recovery", { reason: (0, import_chunk_78g0060s.S)("no_merge_base"), method: (0, import_chunk_78g0060s.S)("empty_tree_bundle"), outcome: (0, import_chunk_78g0060s.S)("accepted") });
  if (!e.confirm) {
    let T = r.scope.mode === "pr" ? `Reviewing PR ${r.scope.repo}#${r.scope.prNumber}` : r.scope.noMergeBase === "unrelated_history" ? `Reviewing all files (no common history with ${r.scope.baseBranch})
Scope: ${r.scope.diffStat}` : r.scope.noMergeBase === "base_ref_missing" ? `Reviewing all files (no ${r.scope.baseBranch} branch to compare against)
Scope: ${r.scope.diffStat}` : r.scope.noMergeBase === "first_commit" ? `Reviewing every file in the first commit (there is nothing earlier to compare with)
Scope: ${r.scope.diffStat}` : `Reviewing current branch against ${r.scope.baseBranch}
Scope: ${r.scope.diffStat}`, x = r.scope.mode === "branch" && r.scope.instructions ? `
Note for findings (not a base branch): "${Vtr(r.scope.instructions)}"` : "";
    return { status: "needs-confirm", body: `${T}${x}
${(0, import_chunk_sjqze7qg.xQ)()} \xB7 Est. cost ${(0, import_chunk_sjqze7qg.RCe)()} USD`, billingNote: n.billingNote };
  }
  let w = e.postReview === true && !(0, import_chunk_sjqze7qg.Snn)(), R = e.postReview === true && !w && r.scope.mode === "pr" && (0, import_chunk_43nz5n02.Ro)(r.scope.host), E = await i4o(r.scope, e.context, n.billingNote, { skipTaskRegistration: e.skipTaskRegistration, invocation: e.invocation, applyFixesOnComplete: e.applyFixes, postReviewToPR: R });
  if (!E?.launched) return { status: "error", message: E?.blocks.map((T) => T.type === "text" ? T.text : "").join("").trim() || "Failed to launch cloud review session." };
  let H = e.postReview === true && !R, V = E.blocks.map((T) => T.type === "text" ? T.text : "").join("").trim();
  return { status: "launched", sessionId: E.sessionId, sessionUrl: E.sessionUrl, taskId: E.taskId, title: E.title, message: w ? `${V}${n4o}` : H ? `${V}${t4o}` : V, billingNote: n.billingNote, postReviewTo: R && r.scope.mode === "pr" ? { repo: r.scope.repo, prNumber: r.scope.prNumber } : void 0, postIgnored: H || void 0, lowCreditsNote: e.singlePass && n.kind === "needs-confirm" && n.lowCreditsNote || void 0 };
}
async function me() {
  let t = await (0, import_chunk_3hr8g93j.gT)();
  return !!t && !(0, import_chunk_3hr8g93j.x8)(t);
}
function we(t, e = false) {
  let h = e ? `run "git init" and commit a starting point. ${t} then reviews the changes you make on top of that commit.` : `run "git init" and commit your work. ${t} then reviews that first commit whole if it is small enough, and after that the changes you make on top of it.`, i = (0, import_chunk_3t7ve0wy.Ol)() ? "Open a folder that is a git repository with at least one commit, then try again." : `If your project already uses git, cd into its folder and rerun ${t}. If it doesn't yet, ${h}`;
  return `${t} reviews the changes a git branch makes on top of an earlier commit, but ${(0, import_chunk_18rsj2ts.pe)()} is not inside a git repository. ${i}`;
}
async function _e(t) {
  let e = await (0, import_chunk_w5s307zm.SOe)(t), h = e === null ? null : await (0, import_chunk_z6pfqf6e.T$)(await (0, import_chunk_w5s307zm.c2)(e) ?? e);
  return h !== null && await (0, import_chunk_w5s307zm.bUl)(h) && await Oe(h) ? h : null;
}
async function Oe(t) {
  return !(await Promise.all([import_chunk_w5s307zm.t1e.objects, import_chunk_w5s307zm.t1e.refs].map((h) => (0, import_chunk_w578pjby.le)().lstat((0, import_path.resolve)(t, h)).then((i) => i.isDirectory() || i.isSymbolicLink(), () => false)))).includes(false);
}
function Ue(t, e, h) {
  let i = `"${(0, import_chunk_xfj2cwfv.Gj)((0, import_chunk_n2dbhmj2.os)(e))}"`, r = `"${(0, import_chunk_xfj2cwfv.Gj)((0, import_chunk_n2dbhmj2.os)((0, import_chunk_18rsj2ts.pe)()))}"`, n = `\`${t}\` didn't start. Nothing was uploaded, and no review was used or charged. Claude Code is running in ${i}`, d = `To review the second folder, open a pull request from its branch and run \`${t} <PR#>\`, or ${(0, import_chunk_3t7ve0wy.Ol)() ? "open that folder, then try again" : "start Claude Code there"}.`;
  return h ? `${n}, but its shell has moved to ${r}, which is in a different git repository. A review now would measure your changes in the first folder and upload the second, so it could fail or cover the wrong code. To review the first folder, ask Claude to cd back to it and run \`${t}\` again. ${d}` : `${n}, which isn't inside a git repository, but its shell has moved to ${r}, which is. \`${t}\` measures your changes from the folder Claude Code is running in, and that folder has no repository to measure. ${d}`;
}
function D() {
  try {
    let t = (0, import_os.homedir)();
    if (!t) return false;
    return (0, import_chunk_2yx6c1y2.bv)((0, import_chunk_z6pfqf6e.pn)((0, import_path.resolve)((0, import_chunk_18rsj2ts.pe)())), (0, import_chunk_z6pfqf6e.pn)((0, import_path.resolve)(t)));
  } catch {
    return false;
  }
}
function ge(t) {
  return /^[A-Za-z0-9_./-]+$/.test(t);
}
