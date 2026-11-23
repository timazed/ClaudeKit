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
var chunk_p2xjsht5_exports = {};
__export(chunk_p2xjsht5_exports, {
  D8o: () => D8o,
  H8o: () => H8o,
  L8o: () => L8o,
  PJl: () => PJl,
  S0t: () => S0t,
  Y7r: () => Y7r,
  iii: () => iii
});
module.exports = __toCommonJS(chunk_p2xjsht5_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_tv1nt56b = require("/$bunfs/root/chunk-tv1nt56b.js");
var import_chunk_tb222zty = require("/$bunfs/root/chunk-tb222zty.js");
var import_chunk_7zd54r6w = require("/$bunfs/root/chunk-7zd54r6w.js");
var import_crypto = require("crypto");
var k = "anthropic.ccr.client_event.v1", H8o = "claude-code-jcs@1";
function D8o(r) {
  let n = [], o = [], i = (e) => {
    if (e === null || typeof e === "boolean" || typeof e === "string") n.push((0, import_chunk_w578pjby.cs)(e));
    else if (typeof e === "number") {
      if (!Number.isFinite(e)) throw Error("canonicalJson: non-finite number");
      n.push(String(e));
    } else if (Array.isArray(e)) n.push("["), o.push({ values: Array.from(e, (s) => s === void 0 ? null : s), next: 0 });
    else if (typeof e === "object") {
      let s = e, f = Object.keys(s).filter((l) => s[l] !== void 0).sort();
      n.push("{"), o.push({ names: f, values: f.map((l) => s[l]), next: 0 });
    } else throw Error("canonicalJson: a value with no JSON form");
  };
  i(r);
  while (o.length > 0) {
    let e = o.at(-1);
    if (e.next === e.values.length) {
      n.push(e.names ? "}" : "]"), o.pop();
      continue;
    }
    if (e.next > 0) n.push(",");
    if (e.names) n.push(`${(0, import_chunk_w578pjby.cs)(e.names[e.next])}:`);
    let s = e.values[e.next];
    e.next += 1, i(s);
  }
  return n.join("");
}
function E(r, n) {
  let { uuid: o, type: i, ...e } = n, s = (0, import_crypto.createHash)("sha256").update(D8o(e), "utf8").digest();
  return Buffer.concat([Buffer.from(k, "utf8"), g, Buffer.from(r, "utf8"), g, Buffer.from(o, "utf8"), g, Buffer.from(i, "utf8"), g, s]);
}
var g = Buffer.from([0]);
function Y7r(r, n) {
  let o = import_chunk_tb222zty.Ygt + r, i = false;
  return { noteSignFailure: () => {
    if (i) return false;
    return i = true, true;
  }, sign: async (e, s) => ({ kid: o, signature: (await n.sign(E(e, s))).toString("base64"), jcs_lib: H8o }) };
}
async function P({ accountUuid: r, boundDeviceUuid: n, credentials: o, held: i }) {
  return y(await S0t(r, o, v(i?.rowPk, n) ? i : void 0), n);
}
async function PJl(r, n) {
  let o = await (0, import_chunk_7zd54r6w.Y2)(n).catch(() => {
    return;
  });
  if (o?.status !== "resolved") return;
  let i = await S0t(o.accountUuid, n), e, s = 0, f = 0, l = (a, c) => {
    let p = ++s;
    a.then((S) => {
      if (p > f) f = p, e = c(S);
    }, () => {
    });
  };
  return l(r, (a) => a === void 0 ? void 0 : y(i, a)), i.status === "loaded" ? { sign: async (a, c) => e?.sign(a, c), noteSignFailure: () => e?.noteSignFailure() ?? false, rebind: (a) => l(a, (c) => c !== void 0 && v(i.rowPk, c) ? e ?? y(i, c) : void 0) } : void 0;
}
async function L8o(r, n, o) {
  let i = await (0, import_chunk_7zd54r6w.Y2)(n).catch(() => {
    return;
  });
  return i?.status === "resolved" ? P({ accountUuid: i.accountUuid, boundDeviceUuid: r, credentials: n, held: o }) : void 0;
}
async function iii(r, n) {
  let o = await (0, import_chunk_7zd54r6w.Y2)(n).catch(() => {
    return;
  });
  if (o?.status !== "resolved") return;
  let i = await S0t(o.accountUuid, n);
  if (i.status !== "loaded" || !v(i.rowPk, r)) return;
  return (0, import_chunk_cqa9hrgx.u)("client_event_signer"), Y7r(i.rowPk, i.key);
}
async function S0t(r, n, o) {
  if (o?.accountUuid === r) return { status: "loaded", rowPk: o.rowPk, key: o.key };
  try {
    let i = await (0, import_chunk_tv1nt56b.cii)(r, n);
    return i === void 0 ? { status: "no_device_key" } : { status: "loaded", rowPk: i.rowPk, key: i.key };
  } catch (i) {
    return (0, import_chunk_w578pjby.t)(`[clientEventSigner] could not load the device key: ${(0, import_chunk_jv7av99m.d)(i)}`), { status: "load_failed" };
  }
}
function v(r, n) {
  return r === n.toLowerCase();
}
function y(r, n) {
  switch (r.status) {
    case "no_device_key":
    case "load_failed":
      (0, import_chunk_cqa9hrgx.m)("client_event_signer", r.status);
      return;
    case "loaded":
      if (!v(r.rowPk, n)) {
        (0, import_chunk_cqa9hrgx.m)("client_event_signer", "bound_elsewhere");
        return;
      }
      return (0, import_chunk_cqa9hrgx.u)("client_event_signer"), Y7r(r.rowPk, r.key);
  }
}
