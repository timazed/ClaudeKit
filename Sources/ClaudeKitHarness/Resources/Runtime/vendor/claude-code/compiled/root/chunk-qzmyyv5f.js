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
var chunk_qzmyyv5f_exports = {};
__export(chunk_qzmyyv5f_exports, {
  readClaudeDesktopMcpServers: () => R
});
module.exports = __toCommonJS(chunk_qzmyyv5f_exports);
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_418mqjww = require("/$bunfs/root/chunk-418mqjww.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
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
var import_chunk_1frjyv5h = require("/$bunfs/root/chunk-1frjyv5h.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_jk26f2gn = require("/$bunfs/root/chunk-jk26f2gn.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_promises = require("fs/promises");
var import_os = require("os");
var import_path = require("path");
async function g() {
  let o = (0, import_chunk_cg8dqz0a.x)();
  if (!import_chunk_cg8dqz0a.noa.includes(o)) throw Error(`Unsupported platform: ${o} - Claude Desktop integration only works on macOS and WSL.`);
  if (o === "macos") return (0, import_path.join)((0, import_os.homedir)(), "Library", "Application Support", "Claude", "claude_desktop_config.json");
  let a = import_chunk_c203g5kd.s.USERPROFILE ? import_chunk_c203g5kd.s.USERPROFILE.replace(/\\/g, "/") : null;
  if (a) {
    let e = `/mnt/c${a.replace(/^[A-Z]:/, "")}/AppData/Roaming/Claude/claude_desktop_config.json`;
    try {
      return await (0, import_promises.stat)(e), e;
    } catch {
    }
  }
  try {
    try {
      let e = await (0, import_promises.readdir)("/mnt/c/Users", { withFileTypes: true });
      for (let r of e) {
        if (r.name === "Public" || r.name === "Default" || r.name === "Default User" || r.name === "All Users") continue;
        let i = (0, import_path.join)("/mnt/c/Users", r.name, "AppData", "Roaming", "Claude", "claude_desktop_config.json");
        try {
          return await (0, import_promises.stat)(i), i;
        } catch {
        }
      }
    } catch {
    }
  } catch (n) {
    (0, import_chunk_w578pjby.t)(`Failed scanning /mnt/c/Users for Claude Desktop config: ${n}`, { level: "error" });
  }
  throw Error("Could not find Claude Desktop config file in Windows. Make sure Claude Desktop is installed on Windows.");
}
async function R() {
  if (!import_chunk_cg8dqz0a.noa.includes((0, import_chunk_cg8dqz0a.x)())) throw Error("Unsupported platform - Claude Desktop integration only works on macOS and WSL.");
  try {
    let o = await g(), a;
    try {
      a = await (0, import_promises.readFile)(o, { encoding: "utf8" });
    } catch (i) {
      if ((0, import_chunk_jv7av99m.w)(i) === "ENOENT") return {};
      throw i;
    }
    let n = (0, import_chunk_0jve1fep.et)(a);
    if (!n || typeof n !== "object") return {};
    let e = n.mcpServers;
    if (!e || typeof e !== "object") return {};
    let r = {};
    for (let [i, c] of Object.entries(e)) {
      if (!c || typeof c !== "object") continue;
      let f = (0, import_chunk_xcgcdx61.PKt)().safeParse(c);
      if (f.success) r[i] = f.data;
    }
    return r;
  } catch (o) {
    return (0, import_chunk_w578pjby.t)(`Failed to read Claude Desktop MCP servers: ${o}`, { level: "error" }), {};
  }
}
