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
var chunk_crteww1n_exports = {};
__export(chunk_crteww1n_exports, {
  K6r: () => K6r,
  V6r: () => V6r,
  X6r: () => X6r,
  Y6r: () => Y6r,
  k3s: () => k3s,
  q6r: () => q6r,
  vRa: () => vRa,
  w3s: () => w3s,
  z6r: () => z6r
});
module.exports = __toCommonJS(chunk_crteww1n_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_4x1jja6d = require("/$bunfs/root/chunk-4x1jja6d.js");
var import_chunk_r60bafc1 = require("/$bunfs/root/chunk-r60bafc1.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_fbqj9ad4 = require("/$bunfs/root/chunk-fbqj9ad4.js");
var import_chunk_s7te3n3c = require("/$bunfs/root/chunk-s7te3n3c.js");
var import_chunk_twqew0sr = require("/$bunfs/root/chunk-twqew0sr.js");
var import_chunk_e1ww8aev = require("/$bunfs/root/chunk-e1ww8aev.js");
var import_chunk_t3j4pzwb = require("/$bunfs/root/chunk-t3j4pzwb.js");
var import_chunk_1pan7v6b = require("/$bunfs/root/chunk-1pan7v6b.js");
var import_chunk_w71cxznt = require("/$bunfs/root/chunk-w71cxznt.js");
var import_chunk_gjzwg6ck = require("/$bunfs/root/chunk-gjzwg6ck.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_promises = require("fs/promises");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
var re = 3, oe = 32, z6r = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ path: (0, import_chunk_adx6804h.n)(), size: (0, import_chunk_adx6804h.E)(), isImage: (0, import_chunk_adx6804h.P)(), file_uuid: (0, import_chunk_adx6804h.n)().optional(), media_type: (0, import_chunk_adx6804h.n)().optional(), pathValidated: (0, import_chunk_adx6804h.P)().optional(), upload_error: (0, import_chunk_adx6804h.n)().optional(), upload_error_code: (0, import_chunk_adx6804h.n)().optional(), upload_suspected_limit_bytes: (0, import_chunk_adx6804h.E)().optional(), scaled: (0, import_chunk_adx6804h.c)({ width: (0, import_chunk_adx6804h.E)(), height: (0, import_chunk_adx6804h.E)(), original_width: (0, import_chunk_adx6804h.E)(), original_height: (0, import_chunk_adx6804h.E)() }).optional(), thumbnail: (0, import_chunk_adx6804h.c)({ width: (0, import_chunk_adx6804h.E)(), height: (0, import_chunk_adx6804h.E)() }).optional() }));
function V6r(t) {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_ATTACHMENTS_BY_PATH) return "none";
  if (t.replBridgeEnabled) return "repl";
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_BRIEF_UPLOAD) return "env_brief_upload";
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE) return "env_ccr";
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) return "env_byoc";
  if ((0, import_chunk_r60bafc1.NT)() !== null && (0, import_chunk_f9x2f6cx.Od)()) return (0, import_chunk_865at33z.b)("tengu_async_goblet", true) ? "sdk_hosted" : "sdk_hosted_disabled";
  return "none";
}
function K6r(t) {
  return t === "sdk_hosted" && (0, import_chunk_3t7ve0wy.Wu)();
}
function w3s(t) {
  return t.pathValidated === true && t.file_uuid !== void 0 && (t.media_type === "image/png" || t.media_type === "image/jpeg") && t.media_type !== (0, import_chunk_t3j4pzwb.IDe)(t.path);
}
function se(t) {
  return { path: t.file_name, size: t.size, isImage: t.is_image, file_uuid: t.file_uuid, media_type: t.media_type ?? (0, import_chunk_t3j4pzwb.IDe)(t.file_name), pathValidated: false };
}
function X(t) {
  return typeof t !== "string";
}
async function ae(t, e, i) {
  let r = await (0, import_chunk_2yx6c1y2.qPe)(e);
  if (r) return r;
  if (!(0, import_path.isAbsolute)(t)) {
    let [a, ...u] = t.split(/[\\/]+/);
    if (a === (0, import_path.basename)(i) && u.length > 0) {
      let g = (0, import_path.join)(i, ...u);
      try {
        if ((await (0, import_promises.stat)(g)).isFile()) return u.join("/");
      } catch {
      }
    }
  }
  return await (0, import_chunk_2yx6c1y2._Je)(e);
}
function k3s(t) {
  let e = (0, import_chunk_kx2fp6pc.mh)(t);
  if (/^[a-z][a-z0-9+.-]+:\/\//i.test(t)) return { result: false, message: `Attachment "${e}" looks like a URL, not a local file path. This tool can only send files that exist on the local filesystem \u2014 download or write the content to a local file first, then pass that path.`, errorCode: 1 };
  let i = (0, import_chunk_n2dbhmj2.xt)(t);
  if ((0, import_chunk_z6pfqf6e.$r)(i)) return { result: false, message: `Attachment "${e}" is a UNC network path, which is not supported.`, errorCode: 1 };
  if ((0, import_chunk_z6pfqf6e.BE)(i)) return { result: false, message: `Attachment "${e}" is under /net, /Network, /.vol, /.file, /.nofollow or /.resolve, which could trigger a network mount, so it is not supported. Copy the file to an ordinary local path and pass that path instead.`, errorCode: 1 };
  let r = (0, import_chunk_xfj2cwfv.gXe)({ spellings: [i], unresolved: false });
  if (r !== void 0) return { result: false, message: `Attachment "${e}" is ${r === "links" ? import_chunk_xfj2cwfv.yPs : "a device or process file, which this tool does not send"}.`, errorCode: 1 };
  return;
}
var J = "A file path cannot be attached here: this tool cannot read files in this session.";
function q6r(t, e) {
  return F(t, e, void 0);
}
async function vRa(t, e) {
  if (!e.restricted && !(0, import_chunk_pbteexar.jS)(e)) return { verdict: await F(t, e, void 0), judged: void 0 };
  let i = [], r = /* @__PURE__ */ new Map();
  return { verdict: await F(t, e, { paths: i, identities: r }), judged: { paths: i, identities: r, doorChannel: void 0 } };
}
async function F(t, e, i) {
  for (let r of t) {
    if (X(r)) {
      let y = G(r.file_name, r.file_name, "Give a file_name without such characters.");
      if (y !== void 0) return y;
      continue;
    }
    if ((0, import_chunk_f9x2f6cx.Y)()) return { result: false, message: J, errorCode: 1 };
    let a = k3s(r);
    if (a !== void 0) return a;
    let u = (0, import_chunk_kx2fp6pc.mh)(r), g = (0, import_chunk_n2dbhmj2.xt)(r), R = G((0, import_path.basename)(g), g, "If a file is really named so, copy or rename it to a name without such characters and send that; otherwise correct the path.");
    if (R !== void 0) return R;
    let C = i !== void 0 || e.restricted || (0, import_chunk_pbteexar.jS)(e) ? (0, import_chunk_w578pjby.Ei)(g) : void 0;
    if (e.restricted && !(0, import_chunk_p1ewvgeh.w_)(g, e, C)) return { result: false, message: `Attachment "${u}" is outside the working directory; --restricted only sends files from inside it.`, errorCode: 1 };
    if ((0, import_chunk_p1ewvgeh.sme)(g, e, C)) return { result: false, message: `Attachment "${u}" is outside the working directories; reads outside them are blocked (${(0, import_chunk_pbteexar.Zut)(e)}).`, errorCode: 1 };
    try {
      if (!(await (0, import_promises.stat)(g)).isFile()) return { result: false, message: `Attachment "${u}" is not a regular file.`, errorCode: 1 };
    } catch (y) {
      let j = (0, import_chunk_jv7av99m.w)(y);
      if (j === "ENOENT") {
        let z = (0, import_chunk_18rsj2ts.pe)(), S = await ae(r, g, z), L = (0, import_chunk_kx2fp6pc.mh)(S);
        return { result: false, message: `Attachment "${u}" does not exist. Current working directory: ${(0, import_chunk_kx2fp6pc.mh)(z)}.` + (S && L === S ? ` Did you mean "${L}"?` : ""), errorCode: 1 };
      }
      if ((0, import_chunk_jv7av99m.pa)(y)) return { result: false, message: `Attachment "${u}" is not accessible (${j}).`, errorCode: 1 };
      throw y;
    }
    if (i !== void 0 && C !== void 0) i.paths.push(...C), i.identities.set(g, await (0, import_chunk_865at33z.mhe)(C));
  }
  return { result: true };
}
async function Y6r(t, e) {
  let i = [], r = [];
  for (let h of t) {
    if (X(h)) {
      i.push(se(h));
      continue;
    }
    if ((0, import_chunk_f9x2f6cx.Y)()) throw new import_chunk_jv7av99m.A(J, "attachment path refused in a diskless session");
    let m = (0, import_chunk_n2dbhmj2.xt)(h);
    if ((0, import_chunk_z6pfqf6e.ja)(m)) throw Error(`Attachment "${(0, import_chunk_kx2fp6pc.mh)(h)}" is a network path (UNC or /net autofs), which is not supported.`);
    let _ = await (0, import_promises.stat)(m).catch((o) => {
      if (o instanceof Error) o.message = (0, import_chunk_kx2fp6pc.mh)(o.message);
      throw o;
    });
    r.push(i.length), i.push({ path: m, size: _.size, isImage: import_chunk_s7te3n3c.Evn.test(m), media_type: (0, import_chunk_t3j4pzwb.IDe)(m), pathValidated: true });
  }
  let { lane: a } = e, u = (0, import_chunk_t39bs2jr.jo)().projectFilesDoor?.() ?? null, g = u !== null && u.channelId === e.projectFilesChannel ? u : null, R = a !== "none" && a !== "sdk_hosted_disabled";
  if (r.length === 0 || g === null && !R) {
    for (let h of r) {
      let m = W(i[h].path, e.judged?.paths);
      if (typeof m !== "string") i[h] = { ...i[h], upload_error: m.error };
    }
    if ((0, import_chunk_6e68m1dj.r$)()) for (let h of r) i[h] = { ...i[h], upload_error: u === null ? "not delivered: this session is not on a project thread, so it has nowhere to place a file" : "not delivered: the project folder is not written in plan mode until the plan is approved" };
    return i;
  }
  let { uploadBriefAttachment: C, writeAttachmentToProjectFolder: y } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-577me9yq.js"))), j = (0, import_chunk_gjzwg6ck.Yee)(), z = { upload_lane: (0, import_chunk_78g0060s.f)(a) }, S = !(0, import_chunk_865at33z.b)("tengu_playful_panda", true), L = !(0, import_chunk_865at33z.b)("tengu_level_wren", true), K = (0, import_chunk_865at33z.b)("tengu_zany_flask", 2), q = (0, import_chunk_6e68m1dj.hn)() && import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE !== "self_hosted" && (0, import_chunk_865at33z.b)("tengu_deep_plum", true), Q = (0, import_chunk_w71cxznt.kLe)(re), N = () => {
  }, Z = new Promise((h) => {
    N = h;
  });
  e.signal?.addEventListener("abort", N, { once: true });
  let ee = (0, import_chunk_w71cxznt.Rl)(oe, async (h) => {
    let { path: m, size: _ } = i[h], o = W(m, e.judged?.paths);
    if (typeof o !== "string") return { folder: { error: o.error }, chat: void 0 };
    let d = (0, import_path.basename)(m), I = ce(m, e.judged?.identities), T, v = async () => {
      await Promise.race([T ??= Q.acquire(), Z]);
    }, V = e.refuseUnsaveableSkills && R && (0, import_chunk_twqew0sr.ARa)(m) ? (k) => de(m, k, a) : void 0;
    try {
      let [k, U] = await Promise.allSettled([g ? y(o, _, g, { filename: d, identity: I, signal: e.signal, telemetry: z, waitForTurn: v, refusalOf: V }) : void 0, R ? C(o, _, { lane: a, filename: d, saysIfReceived: q && /^(image|audio|video)\//.test((0, import_chunk_t3j4pzwb.IDe)(d) ?? ""), identity: I, signal: e.signal, credentials: e.credentials, copyLock: j, waitForTurn: v, refusalOf: V, originalsOnly: e.originalsOnly, noPreviewCopies: S, noScaledCopies: L, maxPosts: K }) : void 0]);
      if (k.status === "rejected") throw k.reason;
      if (U.status === "rejected") throw U.reason;
      return { folder: k.value, chat: U.value };
    } finally {
      T?.then((k) => k());
    }
  }), M = r.map(ee);
  Promise.allSettled(M).then(() => e.signal?.removeEventListener("abort", N));
  let te = await Promise.all(M);
  return r.forEach((h, m) => {
    let { folder: _, chat: o } = te[m], d = { ...i[h] };
    if (typeof _ === "string") d.project_path = _;
    if (o !== void 0 && !("error" in o)) {
      if (d.file_uuid = o.file_uuid, o.copy !== void 0) d.isImage = o.copy.isImage, d.media_type = o.copy.mediaType;
      if (o.scaled !== void 0) d.scaled = o.scaled;
      if (o.thumbnail !== void 0 && d.media_type?.startsWith("video/")) d.thumbnail = o.thumbnail;
    }
    let I = _ !== void 0 && typeof _ !== "string", T = o !== void 0 && "error" in o;
    if (d.project_path === void 0 && d.file_uuid === void 0) {
      let v = I ? _ : T ? o : void 0;
      if (v !== void 0) {
        if (d.upload_error = v.error, v.errorCode !== void 0) d.upload_error_code = v.errorCode;
        if (v.suspectedLimitBytes !== void 0) d.upload_suspected_limit_bytes = v.suspectedLimitBytes;
      }
    } else if (I) d.partial_error = `not placed in the project folder (${_.error})`;
    else if (T) d.partial_error = `not sent to the chat viewers (${(0, import_chunk_fbqj9ad4.CAi)(o.error, o.errorCode, true)})`;
    i[h] = d;
  }), i;
}
function de(t, e, i) {
  let r = (0, import_chunk_twqew0sr.RRa)(t, e);
  if (!r) return;
  return (0, import_chunk_cqa9hrgx.l)("bridge_attachment_upload", `unsaveable_skill_${r.rule}`, { upload_lane: (0, import_chunk_78g0060s.f)(i) }), `not sent: claude.ai would refuse to save it as a skill, because ${r.why}. Fix the file and send it again; to send it only as a download, give the file a name that is not SKILL.md and does not end in .skill`;
}
function W(t, e) {
  let { resolvedPath: i } = (0, import_chunk_w578pjby.no)((0, import_chunk_w578pjby.le)(), t), r = (0, import_chunk_w578pjby.ua)(t), a = (0, import_chunk_xfj2cwfv.gXe)({ spellings: r.spellings, unresolved: r.unresolved || i !== r.landing && i !== r.spellings.at(-1) });
  if (a !== void 0 && (a !== "unresolved" || (0, import_chunk_cg8dqz0a.x)() !== "windows")) return { error: `not sent: it ${import_chunk_xfj2cwfv.kmn[a]}` };
  if (e === void 0) return i;
  return e.includes(i) ? i : { error: "not sent: it now resolves to what was not approved" };
}
function G(t, e, i) {
  if (!(0, import_chunk_e1ww8aev.Ssr)(t)) return;
  return { result: false, message: `Cannot send ${(0, import_chunk_1pan7v6b.ebe)(e)}: its name contains a line break, another control character or a character that changes text direction. ${i}`, errorCode: 1 };
}
function ce(t, e) {
  return e === void 0 || e.has(t) ? e?.get(t) : null;
}
function X6r(t) {
  let e = t.flatMap(({ path: r, scaled: a, project_path: u }) => a === void 0 ? [] : [{ path: (0, import_chunk_kx2fp6pc.Iu)(r), scaled: a, inFolder: u !== void 0 }]), i = e.length;
  if (i === 0) return;
  return `${i} ${(0, import_chunk_7cfjrnwy.O)(i, "image was sent to the chat as a scaled-down copy", "images were sent to the chat as scaled-down copies")}, ${import_chunk_4x1jja6d.BIr} ${import_chunk_fbqj9ad4.Zfe} pixels wide or tall:
` + e.map(({ path: r, scaled: a, inFolder: u }) => `  ${r}: sent at ${a.width}\xD7${a.height} pixels; the original (${a.original_width}\xD7${a.original_height}) is ${u ? "in the project folder" : "unchanged on disk"}`).join(`
`) + `
Tell the user they are seeing ${(0, import_chunk_7cfjrnwy.O)(i, "a scaled-down copy", "scaled-down copies")}; ` + (e.every((r) => r.inFolder) ? `the project folder has ${(0, import_chunk_7cfjrnwy.O)(i, "the full-size original", "the full-size originals")}.` : `if they need ${(0, import_chunk_7cfjrnwy.O)(i, "the full-size original", "a full-size original")}, offer to send it inside a .zip.`);
}
