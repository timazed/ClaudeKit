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
var chunk_bajcmrn3_exports = {};
__export(chunk_bajcmrn3_exports, {
  checkRecordingAvailability: () => pe,
  checkVoiceDependencies: () => le,
  requestMicrophonePermission: () => ue,
  startRecording: () => k,
  stopRecording: () => P
});
module.exports = __toCommonJS(chunk_bajcmrn3_exports);
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
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_xppq9kzc = require("/$bunfs/root/chunk-xppq9kzc.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_72r477hv = require("/$bunfs/root/chunk-72r477hv.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_ds5wjsjg = require("/$bunfs/root/chunk-ds5wjsjg.js");
var import_chunk_pm6bf5qr = require("/$bunfs/root/chunk-pm6bf5qr.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_z8cg6ntt = require("/$bunfs/root/chunk-z8cg6ntt.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_wn8z7ghn = require("/$bunfs/root/chunk-wn8z7ghn.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_child_process = require("child_process");
var import_os = require("os");
var import_path = require("path");
var L = (0, import_path.join)((0, import_os.homedir)(), ".cache", "coder-audio", "port"), B = (0, import_path.join)((0, import_os.homedir)(), ".cache", "coder-audio", "token");
class g {
  audioNapi = null;
  audioNapiPromise = null;
  arecordProbe = null;
  linuxAlsaCardsProbe = null;
  activeRecorder = null;
  activeForwardedSocket = null;
  forwardedStartGeneration = 0;
  nativeRecordingActive = false;
}
var l = new import_chunk_2904xtvq.j(() => new g());
var w = { started: true };
function f(e) {
  return e.audioNapiPromise ??= (async () => {
    let o = Date.now(), r = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-er690gme.js")));
    return r.isNativeAudioAvailable(), e.audioNapi = r, (0, import_chunk_w578pjby.t)(`[voice] audio-capture-napi loaded in ${Date.now() - o}ms`), r;
  })(), e.audioNapiPromise;
}
var A = 16e3, h = 1, E = "2.0", R = "3%";
async function p(e) {
  return (await (0, import_chunk_7fsmgfxx.kt)(e, ["--version"], { timeout: 3e3, useCwd: false })).code === 0;
}
async function S() {
  if (await p("brew")) return { cmd: "brew", args: ["install", "sox"], displayCommand: "brew install sox" };
  return null;
}
async function le(e) {
  let o = l.of(e);
  if ((await f(o)).isNativeAudioAvailable()) return { available: true, missing: [], installCommand: null };
  let n = [];
  if (!await p("sox")) n.push("sox (rec command)");
  let a = n.length > 0 ? await S() : null;
  return { available: n.length === 0, missing: n, installCommand: a?.displayCommand ?? null };
}
async function ue(e) {
  if (!(await f(l.of(e))).isNativeAudioAvailable()) return true;
  if ((await k(e, (n) => {
  }, () => {
  }, { silenceDetection: false })).started) return P(e), true;
  return false;
}
async function pe(e, o = {}) {
  if ((0, import_chunk_2gtmjt3y.ZA)() || import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) return { available: false, reason: `Voice mode needs a microphone, and there's no audio device here.

Run Claude Code on your computer to use voice mode.` };
  let r = l.of(e);
  if ((await f(r)).isNativeAudioAvailable()) return { available: true, reason: null };
  let a = `Voice mode could not find a working audio recorder in WSL.

WSL2 with WSLg provides audio via PulseAudio \u2014 install SoX with its PulseAudio backend (sudo apt install sox libsox-fmt-pulse) so Claude Code can record through it.

If WSLg is not available (for example WSL1), run Claude Code in native Windows instead.`, c = await p("sox");
  if (c && await p("rec")) return { available: true, reason: null };
  if ((0, import_chunk_cg8dqz0a.x)() === "wsl") return { available: false, reason: a };
  if (!c) {
    let i = await S();
    return { available: false, reason: i ? `Voice mode needs SoX to record. Install it with: ${i.displayCommand}` : `Voice mode needs SoX to record. Install it:
  macOS: brew install sox
  Ubuntu/Debian: sudo apt-get install sox
  Fedora: sudo dnf install sox` };
  }
  return { available: false, reason: `Voice mode needs a microphone, and SoX couldn't open one.

Remote servers usually have no microphone. Run Claude Code on a computer with a microphone.` };
}
async function k(e, o, r, n) {
  (0, import_chunk_w578pjby.t)("[voice] startRecording called, platform=darwin");
  let a = l.of(e);
  return C(a, o, r, n);
}
async function C(e, o, r, n) {
  let a = await f(e), c = a.isNativeAudioAvailable() && true, i = n?.silenceDetection !== false;
  if (c) {
    if (e.nativeRecordingActive || a.isNativeRecordingActive()) a.stopNativeRecording(), e.nativeRecordingActive = false;
    if (a.startNativeRecording((u) => {
      o(u);
    }, () => {
      if (i) e.nativeRecordingActive = false, r();
    })) return e.nativeRecordingActive = true, w;
  }
  return y(e, o, r, n), w;
}
function y(e, o, r, n) {
  let a = n?.silenceDetection !== false, c = ["-q", "--buffer", "1024", "-t", "raw", "-r", String(A), "-e", "signed", "-b", "16", "-c", String(h), "-"];
  if (a) c.push("silence", "1", "0.1", R, "1", E, R);
  let i = (0, import_child_process.spawn)("rec", c, { stdio: ["pipe", "pipe", "pipe"], windowsHide: true, ...(0, import_chunk_9zdrdv25.hm)("helper") });
  e.activeRecorder = i, i.stdout?.on("data", (d) => {
    o(d);
  }), i.stderr?.on("data", () => {
  }), i.on("close", () => {
    e.activeRecorder = null, r();
  }), i.on("error", (d) => {
    (0, import_chunk_w578pjby.t)(`[voice] SoX rec spawn failed: ${d instanceof Error ? d.message : String(d)}`, { level: "error" }), e.activeRecorder = null, r();
  });
}
function P(e) {
  let o = l.of(e);
  if (o.nativeRecordingActive && o.audioNapi) {
    o.audioNapi.stopNativeRecording(), o.nativeRecordingActive = false;
    return;
  }
  if (o.activeRecorder) o.activeRecorder.kill("SIGTERM"), o.activeRecorder = null;
}
