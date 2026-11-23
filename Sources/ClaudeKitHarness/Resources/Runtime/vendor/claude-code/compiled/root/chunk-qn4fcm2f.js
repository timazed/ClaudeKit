const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_qn4fcm2f_exports = {};
__export(chunk_qn4fcm2f_exports, {
  Fbn: () => Fbn
});
module.exports = __toCommonJS(chunk_qn4fcm2f_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_6fvsq616 = require("/$bunfs/root/chunk-6fvsq616.js");
var import_chunk_b15sr8av = require("/$bunfs/root/chunk-b15sr8av.js");
var import_chunk_s73318k8 = require("/$bunfs/root/chunk-s73318k8.js");
var import_chunk_sxscgpaq = require("/$bunfs/root/chunk-sxscgpaq.js");
var import_chunk_8n6jzsq4 = require("/$bunfs/root/chunk-8n6jzsq4.js");
var import_chunk_yss9hm8r = require("/$bunfs/root/chunk-yss9hm8r.js");
var import_chunk_7a5j4de6 = require("/$bunfs/root/chunk-7a5j4de6.js");
var import_chunk_ee10yhqw = require("/$bunfs/root/chunk-ee10yhqw.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_ydqx1fa1 = require("/$bunfs/root/chunk-ydqx1fa1.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var import_os = require("os");
var import_path2 = require("path");
var C = { AUTH_METHOD: 0, SERVICE_ACCOUNT: 1, PROJECT: 2, REGION: 3, VERIFY: 4, PIN_MODELS: 5, CONFIRM: 6 };
function B() {
  let u = (0, import_chunk_sng02qpc.k)(10), { goBack: t, goToStep: d, updateWizardData: i, wizardData: n } = (0, import_chunk_b15sr8av.xh)(), p;
  if (u[0] === import_chunk_w1d7ygsk.R) p = [{ label: "Application Default Credentials (gcloud auth)", value: "adc" }, { label: "Service account key file", value: "serviceAccount" }, { label: "Use credentials already in my environment", value: "environment" }], u[0] = p;
  else p = u[0];
  let c = p, m;
  if (u[1] === import_chunk_w1d7ygsk.R) m = { adc: C.PROJECT, serviceAccount: C.SERVICE_ACCOUNT, environment: C.PROJECT }, u[1] = m;
  else m = u[1];
  let l = m, h;
  if (u[2] !== d || u[3] !== i) h = (f) => {
    let D = f;
    i({ authMethod: D }), d(l[D]);
  }, u[2] = d, u[3] = i, u[4] = h;
  else h = u[4];
  let A = h, g;
  if (u[5] === import_chunk_w1d7ygsk.R) g = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "Claude Code uses the standard GCP credential chain. Pick the method you already use with gcloud or in your deployment." }), u[5] = g;
  else g = u[5];
  let P;
  if (u[6] !== t || u[7] !== A || u[8] !== n.authMethod) P = (0, import_chunk_a46xeenj.o)(import_chunk_b15sr8av.D_, { subtitle: "How do you authenticate to Google Cloud?", children: [g, (0, import_chunk_a46xeenj.e)(import_chunk_s73318k8.ct, { options: c, defaultValue: n.authMethod, onChange: A, onCancel: t })] }), u[6] = t, u[7] = A, u[8] = n.authMethod, u[9] = P;
  else P = u[9];
  return P;
}
(0, import_chunk_bs4h6795.G)();
function ut(me) {
  return me[1] !== void 0;
}
function Ce(t) {
  let d = { CLAUDE_CODE_USE_VERTEX: "1", CLAUDE_CODE_USE_BEDROCK: void 0, CLAUDE_CODE_USE_FOUNDRY: void 0, CLAUDE_CODE_USE_ANTHROPIC_AWS: void 0, CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD: void 0, CLAUDE_CODE_USE_MANTLE: void 0, ANTHROPIC_VERTEX_PROJECT_ID: t.projectId, CLOUD_ML_REGION: t.region, GOOGLE_APPLICATION_CREDENTIALS: void 0, ANTHROPIC_DEFAULT_SONNET_MODEL: void 0, ANTHROPIC_DEFAULT_OPUS_MODEL: void 0, ANTHROPIC_DEFAULT_HAIKU_MODEL: void 0, ANTHROPIC_DEFAULT_FABLE_MODEL: void 0, ANTHROPIC_SMALL_FAST_MODEL: void 0 };
  if (t.authMethod === "serviceAccount") d.GOOGLE_APPLICATION_CREDENTIALS = t.keyFile;
  if (t.pinSonnet) d.ANTHROPIC_DEFAULT_SONNET_MODEL = t.pinSonnet;
  if (t.pinOpus) d.ANTHROPIC_DEFAULT_OPUS_MODEL = t.pinOpus;
  if (t.pinFable) d.ANTHROPIC_DEFAULT_FABLE_MODEL = t.pinFable;
  if (t.pinHaiku) d.ANTHROPIC_DEFAULT_HAIKU_MODEL = t.pinHaiku;
  return d;
}
function q(t) {
  let c = (0, import_chunk_sng02qpc.k)(20), { onComplete: d } = t, { storageV5: i } = (0, import_chunk_3jkk3v3z.Ve)(), { wizardData: n } = (0, import_chunk_b15sr8av.xh)(), [u, p] = (0, import_chunk_bs4h6795.y)(null), m;
  if (c[0] === import_chunk_w1d7ygsk.R) m = (0, import_chunk_n2dbhmj2.os)((0, import_chunk_2yx6c1y2._n)("userSettings") ?? "~/.claude/settings.json"), c[0] = m;
  else m = c[0];
  let l = m, h;
  if (c[1] !== n) h = Ce(n), c[1] = n, c[2] = h;
  else h = c[2];
  let f = h, D;
  if (c[3] !== f) D = Object.entries(f).filter(ut), c[3] = f, c[4] = D;
  else D = c[4];
  let A = D, g = (0, import_chunk_bs4h6795.I)(false), P;
  if (c[5] !== f || c[6] !== d || c[7] !== i || c[8] !== n.authMethod || c[9] !== n.pinFable || c[10] !== n.pinHaiku || c[11] !== n.pinOpus || c[12] !== n.pinSonnet || c[13] !== n.verifiedIdentity) P = async () => {
    if (g.current) {
      return;
    }
    g.current = true;
    let { error: S } = await (0, import_chunk_2yx6c1y2.Mr)("userSettings", { env: f }, void 0, i);
    if (S) {
      g.current = false, p(S.message);
      return;
    }
    (0, import_chunk_y53wbr8a.a)("tengu_vertex_setup_complete", { auth_method: (0, import_chunk_78g0060s.fe)(n.authMethod), pinned_models: Boolean(n.pinSonnet || n.pinOpus || n.pinFable || n.pinHaiku), verified: Boolean(n.verifiedIdentity) }), d(`Vertex AI configuration saved to ${l}.${n.authMethod === "adc" ? " When your ADC token expires, run `gcloud auth application-default login` \u2014 Claude Code picks up refreshed credentials automatically." : ""}`);
  }, c[5] = f, c[6] = d, c[7] = i, c[8] = n.authMethod, c[9] = n.pinFable, c[10] = n.pinHaiku, c[11] = n.pinOpus, c[12] = n.pinSonnet, c[13] = n.verifiedIdentity, c[14] = P;
  else P = c[14];
  let j = P, b;
  if (c[15] !== A || c[16] !== j || c[17] !== u || c[18] !== n.verifiedIdentity) b = (0, import_chunk_a46xeenj.e)(import_chunk_b15sr8av.R5t, { settingsPath: l, entries: A, verifiedIdentity: n.verifiedIdentity, saveError: u, onSave: j }), c[15] = A, c[16] = j, c[17] = u, c[18] = n.verifiedIdentity, c[19] = b;
  else b = c[19];
  return b;
}
function J() {
  return { sonnet: import_chunk_zhr7rpv7.Xs[import_chunk_865at33z.zU].vertex, opus: import_chunk_zhr7rpv7.Xs[import_chunk_865at33z.QRr].vertex, haiku: import_chunk_zhr7rpv7.Xs[import_chunk_865at33z.I7e].vertex, fable: import_chunk_zhr7rpv7.Xs[import_chunk_865at33z.ZRr].vertex };
}
function Ee(t) {
  let d = /* @__PURE__ */ new Set();
  for (let i of Object.values(import_chunk_zhr7rpv7.Xs)) if (i.vertex !== null && i.vertex.toLowerCase().includes(t)) d.add(i.vertex);
  return [...d].sort().reverse();
}
function _e(t) {
  if (t.authMethod === "serviceAccount" && t.keyFile) return { kind: "keyFile", path: t.keyFile };
  return { kind: "default" };
}
var pt = 12e3;
async function X(t) {
  let d;
  try {
    let u = await (0, import_chunk_xfj2cwfv.h6n)(_e(t), t.projectId), p = (async () => {
      await (await u.getClient()).getAccessToken();
    })();
    await (0, import_chunk_5appeerh.qt)(p, pt, "Timed out waiting for GCP credentials");
    let c;
    try {
      c = (await u.getCredentials()).client_email;
    } catch {
      c = void 0;
    }
    d = c ?? (t.authMethod === "serviceAccount" ? `service account (${t.keyFile})` : "Application Default Credentials");
  } catch (u) {
    return { status: "error", ...ft(u, t) };
  }
  let i = J().haiku, n = await Z(t, i);
  if (n.ok) return { status: "ok", identity: d, note: `Test request to ${i} succeeded.` };
  switch (n.reason) {
    case "auth":
      return { status: "error", error: "Got a token, but Vertex AI rejected it. The credential may lack the cloud-platform scope." };
    case "permission":
      return { status: "error", error: `Permission denied calling Vertex AI in project "${t.projectId}". The principal needs the aiplatform.endpoints.predict permission (Vertex AI User role), and the Vertex AI API must be enabled.` };
    case "model":
      return { status: "ok", identity: d, note: `Credentials work, but ${i} returned not-found in ${t.region}. Pin a model you have access to on the next step, or try the 'global' region.` };
    case "network":
      return { status: "error", error: `Couldn't reach Vertex AI in region "${t.region}". Check the region name and your network.` };
    case "other":
      return { status: "ok", identity: d, note: `Credentials work, but the test request to ${i} didn't. You can pin a different model on the next step.` };
  }
}
async function Z(t, d) {
  return (0, import_chunk_b15sr8av.mBr)(() => mt(t), d, () => "auth");
}
async function mt(t) {
  let [{ AnthropicVertex: d }, { getProxyFetchOptions: i }] = await Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-a3tb07vm.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-cydghwmm.js")))]), n = await (0, import_chunk_xfj2cwfv.h6n)(_e(t), t.projectId);
  return (0, import_chunk_xfj2cwfv.pXe)(new d({ region: t.region, projectId: t.projectId, googleAuth: n, maxRetries: 0, defaultHeaders: { ...(0, import_chunk_gq1dr8pm.c0e)(), ...(0, import_chunk_xfj2cwfv.mXe)() }, ...import_chunk_xfj2cwfv.jj, timeout: 15e3, fetchOptions: i({ url: import_chunk_c203g5kd.s.ANTHROPIC_VERTEX_BASE_URL || (0, import_chunk_2gtmjt3y.Xyn)(t.region) }) }));
}
var Y = "gcloud auth application-default login";
function ft(t, d) {
  let i = t?.message ?? String(t);
  if (/ENOENT|no such file/i.test(i)) {
    if (d.authMethod === "serviceAccount" && d.keyFile && i.includes(d.keyFile)) return { error: `Service account key file not found: ${d.keyFile}` };
    let n = import_chunk_c203g5kd.s.GOOGLE_APPLICATION_CREDENTIALS ? ["GOOGLE_APPLICATION_CREDENTIALS", import_chunk_c203g5kd.s.GOOGLE_APPLICATION_CREDENTIALS] : import_chunk_c203g5kd.s.google_application_credentials ? ["google_application_credentials", import_chunk_c203g5kd.s.google_application_credentials] : void 0;
    if (n && d.authMethod !== "serviceAccount" && i.includes(`The file at ${n[1]} does not exist`)) return { error: `Key file named by ${n[0]} not found: ${n[1]}` };
  }
  if (/Could not load the default credentials/i.test(i)) return d.authMethod === "adc" ? { error: "No Application Default Credentials found. Run:", command: Y } : { error: "No GCP credentials found in the environment. Set GOOGLE_APPLICATION_CREDENTIALS or run gcloud auth application-default login." };
  if (/invalid_grant|Token has been expired|reauth/i.test(i)) {
    if (d.authMethod === "serviceAccount") return { error: "Service account credentials have been revoked or expired. Get a new key file from GCP IAM (IAM \u2192 Service Accounts \u2192 Keys \u2192 Add Key)." };
    if (d.authMethod === "adc") return { error: "GCP credentials expired. Run:", command: Y };
    return { error: "GCP credentials in the environment have expired or been revoked. Refresh them (gcloud auth application-default login for ADC, or replace the GOOGLE_APPLICATION_CREDENTIALS key file)." };
  }
  if (/Unable to detect a Project Id/i.test(i)) return { error: "Couldn't find a GCP project in the credentials. Go back and set the project ID." };
  if (/Timed out waiting for GCP/i.test(i)) return { error: "Timed out resolving GCP credentials (no ADC, no key file, and no GCE metadata server).", ...d.authMethod === "adc" && { command: Y } };
  return { error: i };
}
var xe = { reasonLabel: { auth: "auth failed", permission: "no aiplatform.endpoints.predict permission", model: "not enabled in this project", network: "unreachable", other: "request failed" }, intro: "Without pinning, Claude Code uses its built-in defaults. When a new model ships, your install will try to call it even if it is not yet available in your project \u2014 Claude Code will fail to connect to Vertex AI until you enable the model or pin to one you have.", resolveTierDefaults: () => {
  let t = J();
  return Object.fromEntries(import_chunk_b15sr8av.B3.map((d) => [d, { fallback: t[d] }]));
}, listTierCandidates: (t) => Ee(t), pickerSubtitle: (t) => `Available ${import_chunk_sxscgpaq.vW[t]} versions on Vertex AI \xB7 each tested with a one-token request.`, preferOnSettle: ["current", "fallback"], probe: (t, d) => Z(t, d) };
function ee() {
  let d = (0, import_chunk_sng02qpc.k)(2), { updateWizardData: t } = (0, import_chunk_b15sr8av.xh)(), i;
  if (d[0] !== t) i = (0, import_chunk_a46xeenj.e)(import_chunk_b15sr8av.x5t, { provider: xe, onPins: t }), d[0] = t, d[1] = i;
  else i = d[1];
  return i;
}
(0, import_chunk_bs4h6795.G)();
async function oe() {
  let t = /* @__PURE__ */ new Set(), d = (0, import_chunk_ydqx1fa1.BXr)();
  try {
    let i = (0, import_path.join)(d, "configurations");
    for (let n of await (0, import_promises.readdir)(i)) {
      if (!n.startsWith("config_")) continue;
      try {
        let u = await (0, import_promises.readFile)((0, import_path.join)(i, n), "utf8");
        for (let p of u.matchAll(/^project\s*=\s*(\S+)/gm)) {
          let c = p[1]?.trim();
          if (c) t.add(c);
        }
      } catch {
      }
    }
  } catch {
  }
  try {
    let i = (0, import_chunk_w578pjby.te)(await (0, import_promises.readFile)((0, import_path.join)(d, "application_default_credentials.json"), "utf8"));
    if (i.quota_project_id) t.add(i.quota_project_id);
  } catch {
  }
  return [...t].sort();
}
function Vt() {
  return [];
}
function kt() {
  return oe().catch(Vt);
}
function Lt(qe) {
  return (0, import_chunk_a46xeenj.e)(import_chunk_8n6jzsq4.Qn.Item, { label: qe }, qe);
}
var Ie = "__manual__", Pe = 12;
function ae() {
  let d = (0, import_chunk_sng02qpc.k)(3), [t] = (0, import_chunk_bs4h6795.y)(kt), i;
  if (d[0] === import_chunk_w1d7ygsk.R) i = (0, import_chunk_a46xeenj.e)(import_chunk_b15sr8av.D_, { subtitle: "GCP project", takesEscape: true, children: (0, import_chunk_a46xeenj.e)(import_chunk_7a5j4de6.Et, { message: "Reading ~/.config/gcloud\u2026" }) }), d[0] = i;
  else i = d[0];
  let n;
  if (d[1] !== t) n = (0, import_chunk_a46xeenj.e)(import_chunk_bs4h6795.ai, { fallback: i, children: (0, import_chunk_a46xeenj.e)(ne, { projectsPromise: t }) }), d[1] = t, d[2] = n;
  else n = d[2];
  return n;
}
function ne(t) {
  let l = (0, import_chunk_sng02qpc.k)(47), { projectsPromise: d } = t, i = (0, import_chunk_bs4h6795.Ms)(d), { goBack: n, goToStep: u, updateWizardData: p, wizardData: c } = (0, import_chunk_b15sr8av.xh)(), m = i.length > Pe, h;
  if (l[0] !== i || l[1] !== c.projectId) h = c.projectId && !i.includes(c.projectId), l[0] = i, l[1] = c.projectId, l[2] = h;
  else h = l[2];
  let f = Boolean(h), [D, A] = (0, import_chunk_bs4h6795.y)(i.length === 0 || m || f), [g, P] = (0, import_chunk_bs4h6795.y)(c.projectId ?? ""), [S, j] = (0, import_chunk_bs4h6795.y)(null);
  const b = !D;
  let me;
  if (l[3] !== b) me = { context: "Confirmation", isActive: b }, l[3] = b, l[4] = me;
  else me = l[4];
  (0, import_chunk_6fvsq616.In)("confirm:no", n, me);
  let He;
  if (l[5] !== u || l[6] !== p) He = (tr) => {
    p({ projectId: tr }), u(C.REGION);
  }, l[5] = u, l[6] = p, l[7] = He;
  else He = l[7];
  let z = He;
  if (!D) {
    const F2 = i.length;
    let V2;
    if (l[8] !== i.length) V2 = (0, import_chunk_7cfjrnwy.O)(i.length, "project"), l[8] = i.length, l[9] = V2;
    else V2 = l[9];
    let x2;
    if (l[10] !== i.length || l[11] !== V2) x2 = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["Found ", F2, " ", V2, " in your gcloud configurations."] }), l[10] = i.length, l[11] = V2, l[12] = x2;
    else x2 = l[12];
    let M2;
    if (l[13] !== i || l[14] !== c.projectId) M2 = i.indexOf(c.projectId ?? ""), l[13] = i, l[14] = c.projectId, l[15] = M2;
    else M2 = l[15];
    const T2 = Math.max(0, M2);
    let L2;
    if (l[16] !== i || l[17] !== z) L2 = (rr) => {
      let Be = i[rr];
      if (Be === void 0) A(true);
      else z(Be);
    }, l[16] = i, l[17] = z, l[18] = L2;
    else L2 = l[18];
    let v2;
    if (l[19] !== i) v2 = i.map(Lt), l[19] = i, l[20] = v2;
    else v2 = l[20];
    let w2;
    if (l[21] === import_chunk_w1d7ygsk.R) w2 = (0, import_chunk_a46xeenj.e)(import_chunk_8n6jzsq4.Qn.Item, { label: "Type a different project\u2026" }, Ie), l[21] = w2;
    else w2 = l[21];
    let U;
    if (l[22] !== L2 || l[23] !== v2 || l[24] !== T2) U = (0, import_chunk_a46xeenj.o)(import_chunk_8n6jzsq4.Qn, { wrap: false, defaultFocusIndex: T2, onSelect: L2, children: [v2, w2] }), l[22] = L2, l[23] = v2, l[24] = T2, l[25] = U;
    else U = l[25];
    let $e;
    if (l[26] !== U || l[27] !== x2) $e = (0, import_chunk_a46xeenj.o)(import_chunk_b15sr8av.D_, { subtitle: "GCP project", children: [x2, U] }), l[26] = U, l[27] = x2, l[28] = $e;
    else $e = l[28];
    return $e;
  }
  let F;
  if (l[29] !== z || l[30] !== g) F = () => {
    let Ke = g.trim();
    if (!Ke) {
      j("Project ID is required");
      return;
    }
    j(null), z(Ke);
  }, l[29] = z, l[30] = g, l[31] = F;
  else F = l[31];
  let he = F, V;
  if (l[32] === import_chunk_w1d7ygsk.R) V = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "The project where Vertex AI is enabled." }), l[32] = V;
  else V = l[32];
  let x;
  if (l[33] !== i.length || l[34] !== m) x = m && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["Found ", i.length, " projects \u2014 too many to list."] }), l[33] = i.length, l[34] = m, l[35] = x;
  else x = l[35];
  let M;
  if (l[36] === import_chunk_w1d7ygsk.R) M = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "Find it with `gcloud config get-value project` or in the GCP console header." }), l[36] = M;
  else M = l[36];
  let T;
  if (l[37] !== x) T = (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [V, x, M] }), l[37] = x, l[38] = T;
  else T = l[38];
  let L;
  if (l[39] === import_chunk_w1d7ygsk.R) L = (or) => {
    j(null), P(or);
  }, l[39] = L;
  else L = l[39];
  let v;
  if (l[40] !== S || l[41] !== he || l[42] !== g) v = (0, import_chunk_a46xeenj.e)(import_chunk_yss9hm8r.hd, { label: "Project ID", value: g, onChange: L, onSubmit: he, placeholder: "my-gcp-project", error: S }), l[40] = S, l[41] = he, l[42] = g, l[43] = v;
  else v = l[43];
  let w;
  if (l[44] !== v || l[45] !== T) w = (0, import_chunk_a46xeenj.o)(import_chunk_b15sr8av.D_, { subtitle: "GCP project ID", enterAction: "continue", takesEscape: true, children: [T, v] }), l[44] = v, l[45] = T, l[46] = w;
  else w = l[46];
  return w;
}
(0, import_chunk_bs4h6795.G)();
function de() {
  let m = (0, import_chunk_sng02qpc.k)(10), { goNext: t, updateWizardData: d, wizardData: i } = (0, import_chunk_b15sr8av.xh)(), [n, u] = (0, import_chunk_bs4h6795.y)(i.region ?? "global"), [p, c] = (0, import_chunk_bs4h6795.y)(null), l;
  if (m[0] !== t || m[1] !== d || m[2] !== n) l = () => {
    let h = n.trim();
    if (!h) {
      c("Region is required");
      return;
    }
    c(null), d({ region: h }), t();
  }, m[0] = t, m[1] = d, m[2] = n, m[3] = l;
  else l = m[3];
  let f = l, D;
  if (m[4] === import_chunk_w1d7ygsk.R) D = (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "Where Claude models are served from." }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "Use 'global', 'us', or 'eu' for a multi-region endpoint (recommended), or a specific location like us-east5 if you have regional quota." })] }), m[4] = D;
  else D = m[4];
  let A;
  if (m[5] === import_chunk_w1d7ygsk.R) A = (g) => {
    c(null), u(g);
  }, m[5] = A;
  else A = m[5];
  let P;
  if (m[6] !== p || m[7] !== f || m[8] !== n) P = (0, import_chunk_a46xeenj.o)(import_chunk_b15sr8av.D_, { subtitle: "Vertex AI region", enterAction: "continue", takesEscape: true, children: [D, (0, import_chunk_a46xeenj.e)(import_chunk_yss9hm8r.hd, { label: "Region", value: n, onChange: A, onSubmit: f, placeholder: "global", error: p })] }), m[6] = p, m[7] = f, m[8] = n, m[9] = P;
  else P = m[9];
  return P;
}
(0, import_chunk_bs4h6795.G)();
function le() {
  let m = (0, import_chunk_sng02qpc.k)(10), { goToStep: t, updateWizardData: d, wizardData: i } = (0, import_chunk_b15sr8av.xh)(), [n, u] = (0, import_chunk_bs4h6795.y)(i.keyFile ?? ""), [p, c] = (0, import_chunk_bs4h6795.y)(null), l;
  if (m[0] !== t || m[1] !== d || m[2] !== n) l = () => {
    let h = n.trim();
    if (!h) {
      c("Path is required");
      return;
    }
    c(null);
    let f = h === "~" || h.startsWith("~/") ? (0, import_path2.join)((0, import_os.homedir)(), h.slice(1)) : h;
    d({ keyFile: f }), t(C.PROJECT);
  }, m[0] = t, m[1] = d, m[2] = n, m[3] = l;
  else l = m[3];
  let D = l, A;
  if (m[4] === import_chunk_w1d7ygsk.R) A = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "Download a JSON key from the GCP console under IAM \u2192 Service Accounts \u2192 Keys \u2192 Add key." }), m[4] = A;
  else A = m[4];
  let g;
  if (m[5] === import_chunk_w1d7ygsk.R) g = (P) => {
    c(null), u(P);
  }, m[5] = g;
  else g = m[5];
  let S;
  if (m[6] !== p || m[7] !== D || m[8] !== n) S = (0, import_chunk_a46xeenj.o)(import_chunk_b15sr8av.D_, { subtitle: "Service account key", enterAction: "continue", takesEscape: true, children: [A, (0, import_chunk_a46xeenj.e)(import_chunk_yss9hm8r.hd, { label: "Key file path", value: n, onChange: g, onSubmit: D, placeholder: "~/keys/my-project-vertex.json", error: p })] }), m[6] = p, m[7] = D, m[8] = n, m[9] = S;
  else S = m[9];
  return S;
}
(0, import_chunk_bs4h6795.G)();
function pe() {
  let i = (0, import_chunk_sng02qpc.k)(8), { updateWizardData: t, wizardData: d } = (0, import_chunk_b15sr8av.xh)(), n;
  if (i[0] === import_chunk_w1d7ygsk.R) n = { phase: "checking" }, i[0] = n;
  else n = i[0];
  let [u, p] = (0, import_chunk_bs4h6795.y)(n), c;
  if (i[1] !== t || i[2] !== d) c = () => {
    let m = false;
    return X(d).then((l) => {
      if (m) {
        return;
      }
      if (l.status === "ok") t({ verifiedIdentity: l.identity });
      else t({ verifiedIdentity: void 0 });
      p({ phase: "done", result: l });
    }), () => {
      m = true;
    };
  }, i[1] = t, i[2] = d, i[3] = c;
  else c = i[3];
  let h;
  if (i[4] === import_chunk_w1d7ygsk.R) h = [], i[4] = h;
  else h = i[4];
  if ((0, import_chunk_bs4h6795.H)(c, h), u.phase === "checking") {
    let f2;
    if (i[5] === import_chunk_w1d7ygsk.R) f2 = (0, import_chunk_a46xeenj.e)(import_chunk_b15sr8av.D_, { subtitle: "Verifying credentials", takesEscape: true, children: (0, import_chunk_a46xeenj.e)(import_chunk_7a5j4de6.Et, { message: "Calling Google Cloud\u2026", subtitle: "This may take a few seconds." }) }), i[5] = f2;
    else f2 = i[5];
    return f2;
  }
  let f;
  if (i[6] !== u.result) f = (0, import_chunk_a46xeenj.e)(import_chunk_b15sr8av.A5t, { result: u.result }), i[6] = u.result, i[7] = f;
  else f = i[7];
  return f;
}
var Ue = [B, le, ae, de, pe, ee, q];
function Fbn(t) {
  let u = (0, import_chunk_sng02qpc.k)(6), { onComplete: d, onCancel: i, exitOnCtrlCD: n } = t, p;
  if (u[0] !== d) p = { onComplete: d }, u[0] = d, u[1] = p;
  else p = u[1];
  let c;
  if (u[2] !== n || u[3] !== i || u[4] !== p) c = (0, import_chunk_a46xeenj.e)(import_chunk_b15sr8av.FOt, { steps: Ue, stepProps: p, onCancel: i, exitOnCtrlCD: n, title: "Set up Google Vertex AI" }), u[2] = n, u[3] = i, u[4] = p, u[5] = c;
  else c = u[5];
  return c;
}
