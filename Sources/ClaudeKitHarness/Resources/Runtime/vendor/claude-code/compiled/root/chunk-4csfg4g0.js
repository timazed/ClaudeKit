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
var chunk_4csfg4g0_exports = {};
__export(chunk_4csfg4g0_exports, {
  runChromeNativeHost: () => ne
});
module.exports = __toCommonJS(chunk_4csfg4g0_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_kr68f0mb = require("/$bunfs/root/chunk-kr68f0mb.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_h3s25p5k = require("/$bunfs/root/chunk-h3s25p5k.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_psw95195 = require("/$bunfs/root/chunk-psw95195.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
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
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_pm6bf5qr = require("/$bunfs/root/chunk-pm6bf5qr.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_z8cg6ntt = require("/$bunfs/root/chunk-z8cg6ntt.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_929j4hj9 = require("/$bunfs/root/chunk-929j4hj9.js");
var import_chunk_1w26p6p9 = require("/$bunfs/root/chunk-1w26p6p9.js");
var import_chunk_x0vfzwdd = require("/$bunfs/root/chunk-x0vfzwdd.js");
var import_chunk_rnm2beqc = require("/$bunfs/root/chunk-rnm2beqc.js");
var import_chunk_wn8z7ghn = require("/$bunfs/root/chunk-wn8z7ghn.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_promises = require("fs/promises");
var import_net = require("net");
var import_os = require("os");
var import_path = require("path");
var U = "1.0.0", w = 1048576, T = 64, x = 2e3, k = void 0;
function r(e, ...t) {
  if (k) {
    let n = (/* @__PURE__ */ new Date()).toISOString(), i = t.length > 0 ? " " + (0, import_chunk_w578pjby._)(t) : "", o = `[${n}] [Claude Chrome Native Host] ${e}${i}
`;
    (0, import_promises.appendFile)(k, o).catch(() => {
    });
  }
  console.error(`[Claude Chrome Native Host] ${e}`, ...t);
}
var C;
async function L() {
  let e = C ??= z();
  try {
    let t = await e;
    if (t !== void 0) return t;
  } catch {
    r("Computer name lookup failed");
  }
  if (C === e) C = void 0;
  try {
    return d((0, import_os.hostname)());
  } catch {
    return;
  }
}
function d(e) {
  let t = e.replace(new RegExp("\\p{Cc}", "gu"), "").trim().replace(/\.local$/i, "").trim();
  return t ? (0, import_chunk_7cfjrnwy.ee)(t, T) : void 0;
}
async function z() {
  switch ((0, import_os.platform)()) {
    case "darwin": {
      let { stdout: e, code: t } = await (0, import_chunk_7fsmgfxx.kt)("/usr/sbin/scutil", ["--get", "ComputerName"], { timeout: x, useCwd: false, stderr: "ignore" });
      return t === 0 ? d(e) : void 0;
    }
    case "win32":
      return d(import_chunk_c203g5kd.s.COMPUTERNAME ?? "");
    default:
      return d((0, import_os.hostname)());
  }
}
function c(e) {
  let t = Buffer.from(e, "utf-8"), n = Buffer.alloc(4);
  n.writeUInt32LE(t.length, 0), process.stdout.write(n), process.stdout.write(t);
}
async function ne() {
  return (0, import_chunk_cqa9hrgx.qo)("chrome_native_host_run", async () => {
    r("Initializing...");
    let e = new S(), t = new R();
    await e.start();
    while (true) {
      let n = await t.read();
      if (n === null) break;
      await e.handleMessage(n);
    }
    await e.stop();
  });
}
var D = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ type: (0, import_chunk_rnm2beqc.we)() }).passthrough());
class S {
  mcpClients = /* @__PURE__ */ new Map();
  nextClientId = 1;
  server = null;
  running = false;
  socketPath = null;
  async start() {
    if (this.running) return;
    if (this.socketPath = (0, import_chunk_1w26p6p9.Agr)(), (0, import_os.platform)() !== "win32") {
      let e = (0, import_chunk_1w26p6p9.Cgr)();
      await (0, import_promises.unlink)(e).catch(() => {
      }), await (0, import_promises.mkdir)(e, { recursive: true, mode: 448 }), await (0, import_promises.chmod)(e, 448).catch(() => {
      });
      try {
        let t = await (0, import_promises.readdir)(e);
        for (let n of t) {
          if (!n.endsWith(".sock")) continue;
          let i = parseInt(n.replace(".sock", ""), 10);
          if (isNaN(i)) continue;
          try {
            process.kill(i, 0);
          } catch {
            await (0, import_promises.unlink)((0, import_path.join)(e, n)).catch(() => {
            }), r(`Removed stale socket for PID ${i}`);
          }
        }
      } catch {
      }
    }
    if (r(`Creating socket listener: ${this.socketPath}`), this.server = (0, import_net.createServer)((e) => this.handleMcpClient(e)), await new Promise((e, t) => {
      this.server.listen(this.socketPath, () => {
        r("Socket server listening for connections"), this.running = true, e();
      }), this.server.on("error", (n) => {
        r("Socket server error:", n), t(n);
      });
    }), (0, import_os.platform)() !== "win32") try {
      await (0, import_promises.chmod)(this.socketPath, 384), r("Socket permissions set to 0600");
    } catch (e) {
      r("Failed to set socket permissions:", e);
    }
  }
  async stop() {
    if (!this.running) return;
    for (let [, e] of this.mcpClients) e.socket.destroy();
    if (this.mcpClients.clear(), this.server) await new Promise((e) => {
      this.server.close(() => e());
    }), this.server = null;
    if ((0, import_os.platform)() !== "win32" && this.socketPath) {
      try {
        await (0, import_promises.unlink)(this.socketPath), r("Cleaned up socket file");
      } catch {
      }
      try {
        let e = (0, import_chunk_1w26p6p9.Cgr)();
        if ((await (0, import_promises.readdir)(e)).length === 0) await (0, import_promises.rmdir)(e), r("Removed empty socket directory");
      } catch {
      }
    }
    this.running = false;
  }
  async handleMessage(e) {
    let t;
    try {
      t = (0, import_chunk_w578pjby.te)(e);
    } catch (o) {
      r("Invalid JSON from Chrome:", o.message), c((0, import_chunk_w578pjby._)({ type: "error", error: "Invalid message format" }));
      return;
    }
    let n = D().safeParse(t);
    if (!n.success) {
      r("Invalid message from Chrome:", n.error.message), c((0, import_chunk_w578pjby._)({ type: "error", error: "Invalid message format" }));
      return;
    }
    let i = n.data;
    switch (r(`Handling Chrome message type: ${i.type}`), i.type) {
      case "ping":
        r("Responding to ping"), c((0, import_chunk_w578pjby._)({ type: "pong", timestamp: Date.now() }));
        break;
      case "get_status":
        L().then((o) => c((0, import_chunk_w578pjby._)({ type: "status_response", native_host_version: U, computer_name: o }))).catch((o) => r("Failed to send status_response:", o));
        break;
      case "tool_response": {
        if (this.mcpClients.size > 0) {
          r(`Forwarding tool response to ${this.mcpClients.size} MCP clients`);
          let { type: o, ...l } = i, a = Buffer.from((0, import_chunk_w578pjby._)(l), "utf-8"), f = Buffer.alloc(4);
          f.writeUInt32LE(a.length, 0);
          let h = Buffer.concat([f, a]);
          for (let [m, g] of this.mcpClients) try {
            g.socket.write(h);
          } catch (v) {
            r(`Failed to send to MCP client ${m}:`, v);
          }
        }
        break;
      }
      case "notification": {
        if (this.mcpClients.size > 0) {
          r(`Forwarding notification to ${this.mcpClients.size} MCP clients`);
          let { type: o, ...l } = i, a = Buffer.from((0, import_chunk_w578pjby._)(l), "utf-8"), f = Buffer.alloc(4);
          f.writeUInt32LE(a.length, 0);
          let h = Buffer.concat([f, a]);
          for (let [m, g] of this.mcpClients) try {
            g.socket.write(h);
          } catch (v) {
            r(`Failed to send notification to MCP client ${m}:`, v);
          }
        }
        break;
      }
      default:
        r(`Unknown message type: ${i.type}`), c((0, import_chunk_w578pjby._)({ type: "error", error: `Unknown message type: ${i.type}` }));
    }
  }
  handleMcpClient(e) {
    let t = this.nextClientId++, n = { id: t, socket: e, buffer: Buffer.alloc(0) };
    this.mcpClients.set(t, n), r(`MCP client ${t} connected. Total clients: ${this.mcpClients.size}`), c((0, import_chunk_w578pjby._)({ type: "mcp_connected" })), e.on("data", (i) => {
      n.buffer = Buffer.concat([n.buffer, i]);
      while (n.buffer.length >= 4) {
        let o = n.buffer.readUInt32LE(0);
        if (o === 0 || o > w) {
          r(`Invalid message length from MCP client ${t}: ${o}`), e.destroy();
          return;
        }
        if (n.buffer.length < 4 + o) break;
        let l = n.buffer.slice(4, 4 + o);
        n.buffer = n.buffer.slice(4 + o);
        try {
          let a = (0, import_chunk_w578pjby.te)(l.toString("utf-8"));
          r(`Forwarding tool request from MCP client ${t}: ${a.method}`), c((0, import_chunk_w578pjby._)({ type: "tool_request", method: a.method, params: a.params }));
        } catch (a) {
          r(`Failed to parse tool request from MCP client ${t}:`, a);
        }
      }
    }), e.on("error", (i) => {
      r(`MCP client ${t} error: ${i}`);
    }), e.on("close", () => {
      r(`MCP client ${t} disconnected. Remaining clients: ${this.mcpClients.size - 1}`), this.mcpClients.delete(t), c((0, import_chunk_w578pjby._)({ type: "mcp_disconnected" }));
    });
  }
}
class R {
  buffer = Buffer.alloc(0);
  pendingResolve = null;
  closed = false;
  constructor() {
    process.stdin.on("data", (e) => {
      this.buffer = Buffer.concat([this.buffer, e]), this.tryProcessMessage();
    }), process.stdin.on("end", () => {
      if (this.closed = true, this.pendingResolve) this.pendingResolve(null), this.pendingResolve = null;
    }), process.stdin.on("error", () => {
      if (this.closed = true, this.pendingResolve) this.pendingResolve(null), this.pendingResolve = null;
    });
  }
  tryProcessMessage() {
    if (!this.pendingResolve) return;
    if (this.buffer.length < 4) return;
    let e = this.buffer.readUInt32LE(0);
    if (e === 0 || e > w) {
      r(`Invalid message length: ${e}`), this.pendingResolve(null), this.pendingResolve = null;
      return;
    }
    if (this.buffer.length < 4 + e) return;
    let t = this.buffer.subarray(4, 4 + e);
    this.buffer = this.buffer.subarray(4 + e);
    let n = t.toString("utf-8");
    this.pendingResolve(n), this.pendingResolve = null;
  }
  async read() {
    if (this.closed) return null;
    if (this.buffer.length >= 4) {
      let e = this.buffer.readUInt32LE(0);
      if (e > 0 && e <= w && this.buffer.length >= 4 + e) {
        let t = this.buffer.subarray(4, 4 + e);
        return this.buffer = this.buffer.subarray(4 + e), t.toString("utf-8");
      }
    }
    return new Promise((e) => {
      this.pendingResolve = e, this.tryProcessMessage();
    });
  }
}
