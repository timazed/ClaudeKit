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
var chunk_px0hhsq7_exports = {};
__export(chunk_px0hhsq7_exports, {
  $$l: () => $$l,
  $qn: () => $qn,
  A$l: () => A$l,
  B$l: () => B$l,
  Bta: () => Bta,
  Bu: () => Bu,
  C$l: () => C$l,
  D$l: () => D$l,
  Ev: () => Ev,
  F$l: () => F$l,
  Fqn: () => Fqn,
  G$l: () => G$l,
  GDr: () => GDr,
  GDs: () => GDs,
  Gta: () => Gta,
  H$l: () => H$l,
  I$l: () => I$l,
  JFe: () => JFe,
  JHo: () => JHo,
  KDr: () => KDr,
  KDs: () => KDs,
  Kta: () => Kta,
  L$l: () => L$l,
  Lqn: () => Lqn,
  M$l: () => M$l,
  N$l: () => N$l,
  Nqn: () => Nqn,
  O$l: () => O$l,
  P$l: () => P$l,
  QHo: () => QHo,
  R$l: () => R$l,
  Rr: () => Rr,
  S_n: () => S_n,
  Sqt: () => Sqt,
  T$l: () => T$l,
  U$l: () => U$l,
  Uqn: () => Uqn,
  VDr: () => VDr,
  VDs: () => VDs,
  VJe: () => VJe,
  Vta: () => Vta,
  W$l: () => W$l,
  Wta: () => Wta,
  XHo: () => XHo,
  YDs: () => YDs,
  YHo: () => YHo,
  ZHo: () => ZHo,
  __n: () => __n,
  _qt: () => _qt,
  b_n: () => b_n,
  bge: () => bge,
  bqt: () => bqt,
  ca: () => ca,
  ch: () => ch,
  eDo: () => eDo,
  fxt: () => fxt,
  gqt: () => gqt,
  hOe: () => hOe,
  hce: () => hce,
  hqt: () => hqt,
  j$l: () => j$l,
  jDr: () => jDr,
  jDs: () => jDs,
  jta: () => jta,
  lr: () => lr,
  mL: () => mL,
  mqt: () => mqt,
  mr: () => mr,
  mxt: () => mxt,
  nC: () => nC,
  nDo: () => nDo,
  pxt: () => pxt,
  qDs: () => qDs,
  rC: () => rC,
  rft: () => rft,
  tDo: () => tDo,
  u6e: () => u6e,
  uxt: () => uxt,
  w_n: () => w_n,
  wge: () => wge,
  x$l: () => x$l,
  y_n: () => y_n,
  yqt: () => yqt,
  z$l: () => z$l,
  zDr: () => zDr,
  zDs: () => zDs,
  zJe: () => zJe,
  zta: () => zta
});
module.exports = __toCommonJS(chunk_px0hhsq7_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_3f4m74y6 = require("/$bunfs/root/chunk-3f4m74y6.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_8jsh3ct2 = require("/$bunfs/root/chunk-8jsh3ct2.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_crypto = require("crypto");
var import_net = require("net");
var __n = 200, zJe = 128;
function Bta(e) {
  if (e.length <= __n) return false;
  let n = 0;
  for (let r of e) if (n++, n > __n) return true;
  return false;
}
function YHo(e) {
  return typeof e === "string" && Bta(e) ? (0, import_chunk_7cfjrnwy.Ea)(e, __n) : void 0;
}
function T$l(e) {
  if (!Array.isArray(e)) return e;
  let n;
  return e.forEach((r, t) => {
    if (!q(r) || r.type !== "tool_use") return;
    let o = YHo(r.name);
    if (o === void 0) return;
    n ??= e.slice(), n[t] = { ...r, name: o };
  }), n === void 0 ? e : n;
}
function q(e) {
  return typeof e === "object" && e !== null;
}
var jDr = /^mem_[A-Za-z0-9_-]{1,120}$/;
function ee(e) {
  let n = BigInt(58), r = Array(22).fill("1"), t = 21, o = e;
  while (o > 0n) {
    let i = Number(o % n);
    r[t] = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"[i], o = o / n, t--;
  }
  return r.join("");
}
function ne(e) {
  let n = e.replaceAll("-", "");
  if (n.length !== 32) throw Error(`Invalid UUID hex length: ${n.length}`);
  return BigInt("0x" + n);
}
function XHo(e, n) {
  try {
    let r = ne(n);
    return `${e}_01${ee(r)}`;
  } catch {
    return;
  }
}
function re(e) {
  if (e.length !== 22) return;
  let n = BigInt(58), r = 0n;
  for (let t of e) {
    let o = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz".indexOf(t);
    if (o < 0) return;
    r = r * n + BigInt(o);
  }
  return r;
}
function nC(e) {
  let n = e.lastIndexOf("_");
  if (n < 0) return;
  let r = e.slice(n + 1);
  if (!r.startsWith("01")) return;
  let t = re(r.slice(2));
  if (t === void 0) return;
  let o = t.toString(16).padStart(32, "0");
  if (o.length !== 32) return;
  return `${o.slice(0, 8)}-${o.slice(8, 12)}-${o.slice(12, 16)}-${o.slice(16, 20)}-${o.slice(20, 32)}`;
}
var oe = 54, se = 253, ie = 21, ae = 32, de = 8, ce = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", fe = /* @__PURE__ */ new Set(["001d7d58914b066125876ce23d2d6d112d8289118e9a57f569a430c38d8faa3c", "058c32f177ce90792b36d516790f6443d632f83c6119d72ef32b1a815be6ee87", "08c07051187ca5d47aa75782fc2060a206e136d85cb398778a9f54e3db2caa47", "0c3f27c51e8b8915edf0f99b20a24644f301d475247d6f6f08374b46bdd81b7c", "0ebe1e8065774e27792b7880d5caf63a366a8f4c135e5a42e15ba58769ae20f9", "0ff9d8927e9828d185f11126acb1b8da2e92a15012de9ed113b3d1a04a73f407", "10be6beef496b89dae799c37bd04e5eba2a6264a0a4d605f5661b50d7dc4d1ea", "132d17d1cd7966dd9d7519bf995a5f2af9e76abd489eb1cdde6cd6066cce4cb5", "1360816558a23fd518959284a182f4d9e1cb362f47e472cff3b455babcba3144", "1e5fb8ca7bc55583e22e442dbd431ba55b70a579c5d1e7429ec9c91d4d9cf008", "1f100a7fa106825b9587fc9102815e07bc345e84c6ef109b39ce776af439ce7f", "21a3230e03772a58aff1b3709a9e232850916337e1fba95c434076b6668c6e08", "243689f0a34348668a106d9b4c366eba9a279d3a38c831e34ca67a53430f35f8", "2824b7bb47f3e5ae3e0e90c4ea28182e5c0060e6497a4f7020a913a14d8c18cd", "2c1ce718525496974dc28bd457a3de87820bfd74fd5a499cac0db7aa6b33d9b8", "36c717254b394a2fd1d02f706960152d8d1ae2e7155a152037e730721dd3dbac", "380e87dd0048d82132f3259960c821b86a101e84da8ef94fa20cf8ceb4f905dd", "38c5db643cca7001e885f94c1c72bce5ffd5ca3e6c00f36b9381a1ff1c677515", "3d8c0d8ccdf38a6d9103dbda04b18dade7588e32db531e85b051a2bc07c55fe6", "4b75867727276e96a05d681ede545d314c7c7106b3fa9fbd5643c2dc1662cb94", "585b9501131729a7b00bd745e8fe7ab9687ffdaaf91e4c6408d94b7fc15e8f2b", "5c64a05e1995976045ec40d500cc0e173639525b7aac994a8cf2e5b152966c58", "66b8245886077eaaa79f378369261e020fb19d2c6ae53f94dfd8dfbc0282d029", "750bd39768d2b52a276a0f16e37e8d89cc51808ed2aee34292a613728c215aec", "7b1694f99542e733abaa2b776ab1261a98fc697118538d53d3b0242ffed329d3", "7deb7a951ec3b81573a7bf1e375e584b444c1bdf4cf5fc820708c663ba57b292", "82142dc93de09756fc53b25be1e0cedbcc71bb8418ee720d9d8a0ca8fc74b71a", "836e98bf162bd453eb76c3115a7bfc6649b5d8e0b09c61288aee7a7214dcabe3", "8f68ef8293d7c78db41cb358a2a5f3e54eada3985950d78ec79640d804cf9c26", "a6ebfa4f158ef450cef3c6738c4107a87e4300cfa8900ffe801de9cca91dfe0c", "ac4db1553b96800b17a9badb490cd250e8957f1516b0755985f92b98e6e77fb5", "b1f3f7220f5aa8683d21539155e87e170952dbed4ecc5c6637979100cc791b5d", "b4126249adb972b50222897e622fa7980e4ac2cb717c1891a2e250798331aff7", "b6ed110d3683e593243d76a62dc45f6a7374ebf59d23aec3fc5361fb34bad9dd", "c064fbca9d9de8dd9bb0624984403b28d0da807a69365d4f7fb09123ecb0c405", "d4c3e8a11256ab82a4fc72560eb4a2b0e87bad820c290dd9b03616de240aa6db", "d780682093f3c46cce9817cf19a8ae72d8e863af8e11d2e3c2017af411b17893", "dd7f1bcb57a00ea6327356b1bf0751320daae910c9d3309d22e83924ddb67cc4", "df471311a60874f28a0b62b44b471480efda48bcc55af7659834f0af40f32f71", "e32dc9b0503a1d4982d028acd3a7fd5c4d30f044e7e336f78632d572b40d5328", "e537c3eb39f7a75157dfb1d52e0fc930bbf1af9a0040456e74b2ee7b62136d2c", "ea307c363088a80405d68d46e1b4117c1a982dbe35eaab9fcf1d51577e2b8181", "fb099cb999784a21b51ca9a017b44877826f93f380021e05e6fee571d3861edb", "fe2914f62e20325b719ba405e6a8f299f46ce8f1ad11b6f03681ceda5a935454"]), le = /* @__PURE__ */ new Set(["0e4a7f621b2756c6d34c5f409d886ec7622482db96cbcfae01e14b142ce12b1d", "0f4dd7885db7d0bf0b1e86b5dd22c2d4f9937994c66e30f3cf0fd7468033f7d4", "12ca17b49af2289436f303e0166030a21e525d266e209267433801a8fd4071a0", "28cac3b96a52871fc67bc5f353858d4f945316d964778d026fafd408e9840cf5", "49960de5880e8c687434170f6476605b8fe4aeb9a28632c7995cf3ba831d9763", "d470ff28ce01e69add79d828d4085e3ec719a6536712b5d60afcf1a10976e451", "eff8e7ca506627fe15dda5e0e512fcaad70b6d520f37cc76597fdb4f2d83a1a3"]), ue = /^([A-Za-z0-9._-]+)(?::[0-9]*)?$/, ye = /^\[([0-9A-Fa-f:.]+)\](?::[0-9]*)?$/, pe = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/, ge = /^(?:[0-9]+|0x[0-9a-f]*)$/, me = /^(?:0x)?[0-9a-f_]+$/, be = "org-connector-";
function R(e) {
  return (0, import_chunk_mzmcvr6c.cx)(`mcp://claude.ai/client-integration/${e}`, ce);
}
function Wta(e) {
  return /^[A-Za-z0-9_-]+$/.test(e) && !e.includes("__") && !e.startsWith("_") && !e.endsWith("_");
}
function we(e) {
  let n = Se(e.replace(/[\t\r\n]/g, "")), r = n.indexOf("://"), t = n.slice(0, r).toLowerCase();
  if (r < 0 || t !== "http" && t !== "https") return;
  let [o = ""] = n.slice(r + 3).split(/[/?#]/, 1);
  if (o.includes("\\")) return;
  let i = o.slice(o.lastIndexOf("@") + 1), s = ue.exec(i) ?? ye.exec(i);
  if (!s?.[1] || i.startsWith("[") && !(0, import_net.isIPv6)(s[1])) return;
  let a = s[1].toLowerCase().replace(/\.$/, "");
  return a === "" || le.has((0, import_chunk_ccm69jjy.Je)(a)) ? void 0 : { scheme: t, host: a };
}
function Se(e) {
  let n = 0, r = e.length;
  while (n < r && e.charCodeAt(n) <= 32) n++;
  while (r > n && e.charCodeAt(r - 1) <= 32) r--;
  return e.slice(n, r);
}
function _e(e) {
  for (let n = 1; n <= e.length; n++) if (fe.has((0, import_chunk_ccm69jjy.Je)(e.slice(0, n)))) return true;
  return false;
}
function he(e, n) {
  let r = n.split("."), t = r.at(-1) ?? "";
  if (e !== "https" || n.length > se || r.length < 2 || t.includes("-") || r.some((i) => i.startsWith("sk-ant-")) || ge.test(t) || !r.every((i) => pe.test(i))) return;
  let o = r.join("_");
  return _e(o) || ve(o) ? void 0 : o;
}
function ve(e) {
  let n = e.replaceAll("-", "");
  return (n.length === 32 || n.length === 23) && me.test(n);
}
function Ke(e) {
  return `${e}-`.replace(/[_-]+/g, "-").startsWith(be);
}
function jDs(e) {
  let n = we(e);
  if (n === void 0) return;
  let { scheme: r, host: t } = n, o = `${r}://${t.includes(":") ? `[${t}]` : t}`, i = (0, import_chunk_ccm69jjy.Je)(o).slice(0, ae), s = he(r, t), a = `h-${i}`, d = s === void 0 ? a : s.length > oe ? `${s.slice(0, ie).replace(/^[_-]+|[_-]+$/g, "")}-${i}` : s, c = Ke(d) ? a : d;
  return Wta(c) ? c : void 0;
}
function Lqn(e, n) {
  let r = e.args ?? [];
  return e.command === n.command && r.length === (n.args?.length ?? 0) && r.every((t, o) => t === n.args?.[o]) ? void 0 : { command: e.command, args: r };
}
function _(e, n) {
  return `${e}-a${(0, import_chunk_ccm69jjy.Je)(n).slice(0, de)}`;
}
function x(e) {
  let n = /* @__PURE__ */ new Map();
  for (let { id: o, key: i, pinned: s = false } of e) {
    let a = n.get(o);
    if (i !== void 0 && (a === void 0 || s && !a.pinned || s === a.pinned && i < a.key)) n.set(o, { key: i, pinned: s });
  }
  let r = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  for (let [o, { key: i, pinned: s }] of n) {
    if (s) {
      r.set(o, i);
      continue;
    }
    t.set(i, (t.get(i) ?? /* @__PURE__ */ new Set()).add(o));
  }
  for (let [o, i] of t) for (let s of i) r.set(s, i.size > 1 ? _(o, s) : o);
  return r;
}
var p = "mcp__", Me = [], k = "mcp__retired-", Ne = /-a[0-9a-f]{8}(?:__|$)/, Re = /^(.*[^_])-a[0-9a-f]{8}$/;
function E() {
  return { active: false, enforcesGrants: false, readLegacyKeyOwner: () => {
    return;
  }, claimLegacyKeyOwner: async () => {
    return;
  }, legacyKeyOwners: /* @__PURE__ */ new Map(), unsavedLegacyKeys: /* @__PURE__ */ new Set(), refusedLegacyKeys: /* @__PURE__ */ new Map(), claimedMayNotOwn: /* @__PURE__ */ new Set(), notedMayNotOwn: /* @__PURE__ */ new Set(), needsRebuild: false, servers: /* @__PURE__ */ new Map(), tools: /* @__PURE__ */ new Map(), wireByInternal: /* @__PURE__ */ new Map(), internalByWire: /* @__PURE__ */ new Map(), wireKeyByInternalKey: /* @__PURE__ */ new Map(), internalKeyByWireKey: /* @__PURE__ */ new Map(), keptLegacyNames: 0, serverKeyMoved: false, sessionKeyById: /* @__PURE__ */ new Map(), formerKeys: /* @__PURE__ */ new Map(), formerSessionKeys: /* @__PURE__ */ new Map(), spelledKeys: /* @__PURE__ */ new Map(), otherDenyOrAskNames: /* @__PURE__ */ new Map(), retiredWireNames: /* @__PURE__ */ new Map(), wireHolders: /* @__PURE__ */ new Map(), sentWires: /* @__PURE__ */ new Map() };
}
var xe = new import_chunk_pzzqg6s3.ze(E), P = new import_chunk_2904xtvq.j(() => ({ used: false })), Ie = E();
function l() {
  return (0, import_chunk_f9x2f6cx.kr)(P).used ? xe.of((0, import_chunk_f9x2f6cx.N)()) : Ie;
}
function C$l(e) {
  (0, import_chunk_f9x2f6cx.kr)(P).used = true;
  let n = l();
  n.active = true, n.enforcesGrants = e.enforcesGrants, n.readLegacyKeyOwner = e.read, n.claimLegacyKeyOwner = e.claim;
}
function mL() {
  return l().active;
}
function A$l() {
  return l().serverKeyMoved;
}
function GDs() {
  let { tools: e, wireByInternal: n, sessionKeyById: r } = l();
  return [...e].filter(([t, { serverId: o }]) => !n.has(t) && r.has(o)).map(([t]) => t);
}
function R$l(e) {
  let { wireByInternal: n, sentWires: r } = l();
  return n.has(e) && !r.has(e);
}
function x$l() {
  let e = [...l().servers.values()].flatMap(({ standardKey: n }) => n === void 0 ? [] : [n.key]);
  return new Set(e).size < e.length;
}
function rft() {
  return l().enforcesGrants;
}
function P$l() {
  return l().keptLegacyNames;
}
function m(e) {
  return e.serverType === "claudeai-proxy" && e.serverId ? nC(e.serverId) ?? e.serverId : R(e.serverName);
}
function Te(e, n, r, t) {
  let o = e.tools.get(n), i = o && e.servers.get(o.serverId)?.standardKey;
  if (o === void 0 || i === void 0 || i.pinned) return;
  let s = new Set(t.values());
  for (let a = 0; a <= e.tools.size; a++) {
    let d = a === 0 ? o.serverId : `${o.serverId}#${a}`, c = `${p}${_(i.key, d)}__${o.toolPart}`;
    if (c.length > zJe) return;
    if (!r.has(c) && !s.has(c)) return c;
  }
  return;
}
function I(e, n, r, t) {
  let o = e.servers.get(t);
  return r !== t && o?.standardKey?.key !== o?.legacyKey && !(n.has(r) && e.servers.get(r)?.mayRecordOwner === false && o?.mayRecordOwner !== false);
}
function L(e, n) {
  let r = e.servers.get(n);
  return (0, import_chunk_4smdap7r.M)([e.sessionKeyById.get(n), r?.standardKey?.key, r?.denyKey, ...e.formerKeys.get(n) ?? [], ...e.formerSessionKeys.get(n) ?? []]).filter((t) => t !== void 0);
}
function Ae(e) {
  let n = [...e.servers.values()], r = x([...n.map(({ id: s, standardKey: a }) => ({ id: s, key: a?.key, pinned: a?.pinned })), ...[...e.formerKeys].flatMap(([s, a]) => [...a].filter((d) => d !== e.servers.get(s)?.standardKey?.key).map((d) => ({ id: `former:${d}:${s}`, key: d })))]);
  for (let { id: s, legacyKey: a } of n) {
    let d = (0, import_chunk_7cfjrnwy.nt)(`${a}__`, "__");
    e.spelledKeys.set(d, (e.spelledKeys.get(d) ?? /* @__PURE__ */ new Set()).add(s));
  }
  for (let [s, a] of r) {
    let d = e.servers.get(s)?.standardKey;
    if ([...e.spelledKeys.get(a) ?? []].some((f) => I(e, r, f, s)) && d?.key === a && !d.pinned) r.set(s, _(a, s));
  }
  let t = /* @__PURE__ */ new Map();
  for (let { legacyKey: s } of n) t.set(s, (t.get(s) ?? 0) + 1);
  let o = e.internalByWire;
  e.sessionKeyById = r, e.wireByInternal = /* @__PURE__ */ new Map(), e.internalByWire = /* @__PURE__ */ new Map(), e.wireKeyByInternalKey = /* @__PURE__ */ new Map(), e.internalKeyByWireKey = /* @__PURE__ */ new Map(), e.keptLegacyNames = 0;
  for (let { id: s, legacyKey: a } of n) {
    let d = r.get(s);
    if (d !== void 0) {
      if (d !== a) e.internalKeyByWireKey.set(d, a);
      if (t.get(a) === 1) e.wireKeyByInternalKey.set(a, d);
    }
  }
  let i = /* @__PURE__ */ new Map();
  for (let [s, { serverId: a, toolPart: d }] of e.tools) {
    let c = r.get(a), f = `${p}${c}__${d}`;
    if (c !== void 0 && f.length <= zJe) i.set(s, f);
  }
  for (let [s, a] of e.sentWires) {
    let d = e.tools.get(s), c = d && e.servers.get(d.serverId), f = c?.standardKey;
    if (d !== void 0 && c !== void 0 && f !== void 0 && i.has(s)) {
      let u = [f.key, _(f.key, d.serverId)].find((g) => a === `${p}${g}__${d.toolPart}`), y = [...e.spelledKeys.get(f.key) ?? []].some((g) => I(e, r, g, d.serverId)), b = c.mayRecordOwner === false && [...e.servers.values()].some((g) => g.id !== c.id && g.mayRecordOwner !== false && B(e, g, f.key));
      if (u !== void 0 && !(u === f.key && (y || b))) {
        if (i.set(s, a), e.internalKeyByWireKey.set(u, c.legacyKey), e.wireKeyByInternalKey.has(c.legacyKey)) e.wireKeyByInternalKey.set(c.legacyKey, u);
      }
    }
  }
  for (let s = true; s; ) {
    s = false;
    let a = new Set([...e.tools.keys()].filter((c) => !i.has(c))), d = /* @__PURE__ */ new Set();
    for (let [c, f] of i) {
      let u = d.has(f) || a.has(f) && f !== c;
      if (d.add(f), u) {
        let y = Te(e, c, a, i);
        if (y === void 0) i.delete(c);
        else i.set(c, y);
        s = true;
      }
    }
  }
  e.keptLegacyNames = e.tools.size - i.size;
  for (let [s, a] of i) {
    e.wireByInternal.set(s, a), e.internalByWire.set(a, s);
    let d = e.wireHolders.get(a);
    e.wireHolders.set(a, d === void 0 || d === s ? s : null);
  }
  for (let [s, { serverId: a, toolPart: d }] of e.tools) for (let c of e.formerKeys.get(a) ?? []) {
    let f = `${p}${c}__${d}`;
    if (e.wireHolders.get(f) === s && !e.internalByWire.has(f) && (f === s || !e.tools.has(f))) e.internalByWire.set(f, s);
  }
  for (let [s, a] of o) {
    let d = s === a && e.tools.has(s) && !e.wireByInternal.has(s);
    if (!e.internalByWire.has(s) && !e.retiredWireNames.has(s) && !d) e.retiredWireNames.set(s, `${k}${(0, import_crypto.randomUUID)().replaceAll("-", "")}`);
  }
  e.otherDenyOrAskNames = /* @__PURE__ */ new Map();
  for (let [s, { serverId: a, toolPart: d }] of e.tools) {
    let c = i.get(s), f = (0, import_chunk_4smdap7r.M)([...L(e, a).map((u) => `${p}${u}__${d}`), ...c === void 0 ? [] : [c]]).filter((u) => u !== s);
    if (f.length > 0) e.otherDenyOrAskNames.set(s, f);
  }
}
async function O$l(e, n = false, r = true) {
  let t = l();
  if (!t.active) return false;
  let o = (0, import_chunk_3f4m74y6.xn)(e.serverName), i = m(e);
  if (r) t.claimedMayNotOwn.delete(i);
  else t.claimedMayNotOwn.add(i);
  let s = n || await ke(t, o, i, r) && (t.enforcesGrants || !r && w(t, o, false, true)), a = t.refusedLegacyKeys.get(o) ?? /* @__PURE__ */ new Set();
  if (t.refusedLegacyKeys.set(o, a), s) a.add(i);
  else a.delete(i);
  return s;
}
function C(e) {
  let n = `${e}__`, r = [e];
  for (let t = n.indexOf("__"); t >= 0; t = n.indexOf("__", t + 1)) r.push(n.slice(0, t));
  return r;
}
function B(e, n, r) {
  return n.standardKey?.key === r || e.sessionKeyById.get(n.id) === r || e.formerKeys.get(n.id)?.has(r) === true || e.formerSessionKeys.get(n.id)?.has(r) === true;
}
function w(e, n, r, t = false) {
  let o = C(n);
  return [...e.servers.values()].some((i) => {
    let s = !r && i.mayRecordOwner !== false;
    return i.legacyKey !== n && !((r || t) && i.mayRecordOwner === false) && (s ? o : [n]).some((a) => s && i.legacyKey === a || B(e, i, a));
  });
}
function A(e, n) {
  let r = e.servers.get(n)?.mayRecordOwner;
  return r === void 0 ? e.claimedMayNotOwn.has(n) || e.notedMayNotOwn.has(n) : !r;
}
function uxt(e) {
  let n = l();
  if (!n.active) return false;
  return D(n, m(e), (0, import_chunk_3f4m74y6.xn)(e.serverName));
}
function D(e, n, r) {
  return e.enforcesGrants ? w(e, r, !A(e, n)) : A(e, n) && w(e, r, false, true);
}
async function ke(e, n, r, t) {
  if (w(e, n, t)) return true;
  let o = e.unsavedLegacyKeys.has(n) ? void 0 : e.readLegacyKeyOwner(n), i = e.legacyKeyOwners.get(n);
  if (o !== void 0 || i !== void 0) return (o ?? r) !== r || (i ?? r) !== r;
  if (!t) return e.unsavedLegacyKeys.has(n);
  e.unsavedLegacyKeys.add(n);
  let s = await e.claimLegacyKeyOwner(n, r);
  if (s === void 0) return true;
  e.unsavedLegacyKeys.delete(n);
  let a = e.legacyKeyOwners.get(n) ?? s;
  return e.legacyKeyOwners.set(n, a), a !== r;
}
async function I$l(e) {
  let n = l();
  if (!n.active) return false;
  let r = (0, import_chunk_3f4m74y6.xn)(e.serverName);
  if (w(n, r, true)) return false;
  let t = m(e), o = O(n, r);
  if (o !== void 0) n.legacyKeyOwners.set(r, o);
  if (n.unsavedLegacyKeys.add(r), await n.claimLegacyKeyOwner(r, t, true) !== t) return false;
  return n.legacyKeyOwners.set(r, t), n.unsavedLegacyKeys.delete(r), n.refusedLegacyKeys.get(r)?.delete(t), true;
}
function M$l(e) {
  let n = l(), r = (0, import_chunk_3f4m74y6.xn)(e.serverName), t = n.legacyKeyOwners.get(r) ?? n.readLegacyKeyOwner(r);
  return n.active && (!n.unsavedLegacyKeys.has(r) || n.legacyKeyOwners.has(r)) && !w(n, r, true) && t !== void 0 && t !== m(e);
}
function JHo(e) {
  return l().refusedLegacyKeys.get((0, import_chunk_3f4m74y6.xn)(e.serverName))?.has(m(e)) === true;
}
function fxt(e) {
  let n = l(), r = (0, import_chunk_3f4m74y6.xn)(e.serverName), t = m(e);
  return O(n, r) === t && (n.legacyKeyOwners.get(r) ?? t) === t;
}
function y_n(e) {
  return W(l(), (0, import_chunk_3f4m74y6.xn)(e.serverName), m(e));
}
function W(e, n, r) {
  let t = O(e, n);
  return e.active && e.enforcesGrants && (t === void 0 ? e.unsavedLegacyKeys.has(n) : t !== r);
}
function O(e, n) {
  return (e.unsavedLegacyKeys.has(n) ? void 0 : e.readLegacyKeyOwner(n)) ?? e.legacyKeyOwners.get(n);
}
function H(e, { server: n, standardKey: r, denyKey: t, mayRecordOwner: o }) {
  let i = m(n), s = (0, import_chunk_3f4m74y6.xn)(n.serverName), a = e.servers.get(i), d = a?.standardKey, c = r ?? d, f = t ?? a?.denyKey, u = o ?? a?.mayRecordOwner;
  if (a === void 0 || a.legacyKey !== s || d?.key !== c?.key || d?.pinned !== c?.pinned || a.denyKey !== f || a.mayRecordOwner !== u) {
    if (d !== void 0 && d.key !== c?.key) e.serverKeyMoved = true;
    if (d !== void 0 && !d.pinned && d.key !== c?.key) {
      e.formerKeys.set(i, (e.formerKeys.get(i) ?? /* @__PURE__ */ new Set()).add(d.key));
      let y = e.sessionKeyById.get(i);
      if (y !== void 0) e.formerSessionKeys.set(i, (e.formerSessionKeys.get(i) ?? /* @__PURE__ */ new Set()).add(y));
    }
    e.needsRebuild = true, e.servers.set(i, { id: i, legacyKey: s, standardKey: c, denyKey: f, mayRecordOwner: u });
  }
  return i;
}
function G(e) {
  if (e.needsRebuild) {
    let n = { ...e };
    try {
      Ae(e), e.needsRebuild = false;
    } catch (r) {
      throw Object.assign(e, n), r;
    }
  }
}
function H$l(e) {
  let n = l();
  if (!n.active) return;
  for (let r of e) H(n, r);
  G(n);
}
function D$l(e) {
  let n = l();
  if (!n.active) return;
  for (let r of e) {
    let t = H(n, r), o = (0, import_chunk_3f4m74y6.xn)(r.server.serverName);
    if (n.tools.get(r.name)?.serverId !== t) n.needsRebuild = true, n.tools.set(r.name, { serverId: t, toolPart: r.name.slice(`${p}${o}__`.length) });
  }
  G(n);
}
function S_n(e) {
  let { active: n, wireByInternal: r, sentWires: t } = l();
  if (n) for (let o of e) {
    let i = r.get(o);
    if (i !== void 0) t.set(o, i);
  }
}
function Ev(e) {
  return l().wireByInternal.get(e) ?? e;
}
function b_n(e) {
  return (e.startsWith(k) ? [...l().retiredWireNames].find(([, r]) => r === e) : void 0)?.[0] ?? Ev(e);
}
function QHo(e) {
  let n = b_n(e);
  return n === e && e.startsWith(p) && !l().tools.has(e) ? [e, ZHo(e)] : [n];
}
function bge(e) {
  let { internalByWire: n, retiredWireNames: r } = l();
  return n.get(e) ?? r.get(e) ?? e;
}
function pxt(e) {
  return l().internalKeyByWireKey.get(e) ?? e;
}
function F(e, n) {
  if (!e.startsWith(p)) return e;
  let r = e.slice(p.length), t = r.indexOf("__"), o = t === -1 ? r : r.slice(0, t);
  return `${p}${n(o)}${t === -1 ? "" : r.slice(t)}`;
}
function u6e(e) {
  if (!e.startsWith(p) || l().internalKeyByWireKey.size === 0) return e;
  return F(e, pxt);
}
function ZHo(e, n) {
  let { refusedLegacyKeys: r, wireKeyByInternalKey: t } = l();
  if (t.size === 0) return e;
  let o = Ee(e);
  return o === void 0 || n === "allow" && (r.get(o.legacy)?.size ?? 0) > 0 ? e : `${p}${o.wire}${e.slice(p.length + o.legacy.length)}`;
}
function L$l() {
  let e = l(), n = [...e.servers.values()].filter((r) => (e.refusedLegacyKeys.get(r.legacyKey)?.size ?? 0) > 0 || W(e, r.legacyKey, r.id) || D(e, r.id, r.legacyKey)).flatMap((r) => C(r.legacyKey)).map((r) => `${p}${r}`);
  return (r) => n.some((t) => r === t || r.startsWith(`${t}__`) || r.startsWith(`${t}(`));
}
function Ee(e) {
  let n;
  for (let [r, t] of l().wireKeyByInternalKey) {
    let o = `${p}${r}`;
    if ((e === o || e.startsWith(`${o}__`) || e.startsWith(`${o}(`)) && r.length > (n?.legacy.length ?? -1)) n = { legacy: r, wire: t };
  }
  return n;
}
function eDo(e) {
  return l().otherDenyOrAskNames.get(e) ?? Me;
}
function N$l(e) {
  return L(l(), m(e));
}
function Nqn(e) {
  if (!Ne.test(e) || !l().active) return;
  let n = F(e, (r) => Re.exec(r)?.[1] ?? r);
  return n === e ? void 0 : n;
}
function mqt(e, n) {
  let r = Nqn(e);
  if (r === void 0) return;
  let { tools: t, servers: o, sessionKeyById: i } = l(), s = t.get(n), a = s === void 0 ? void 0 : o.get(s.serverId)?.standardKey?.key;
  return s === void 0 || a === void 0 || i.get(s.serverId) !== a ? void 0 : { rule: r, row: `${p}${a}__${s.toolPart}` };
}
var Pe = "tengu_inherited_gosling", U = new import_chunk_8jsh3ct2.ex();
function F$l(e) {
  return U.register(e);
}
function zDs() {
  return U.read(Pe, true);
}
var $e = "tengu_misty_oasis", z = new import_chunk_8jsh3ct2.ex();
function $$l(e) {
  return z.register(e);
}
function X() {
  return z.read($e, true);
}
function VDs(e) {
  return nC(e) ?? e;
}
function KDs(e) {
  if (!(0, import_chunk_ma3kja9f.T)(e)) return;
  let { id: n, directory_id: r, transport: t, plugin_id_hash: o } = e;
  switch (e.type) {
    case "anthropic":
      return wge(n) ? { type: "anthropic", id: n } : void 0;
    case "claude_ai_connector":
      return wge(n) && (r === null || wge(r)) ? { type: "claude_ai_connector", id: VDs(n), directory_id: r } : void 0;
    case "client_configured":
      return (t === "stdio" || t === "http" || t === "in_process") && (o === void 0 || wge(o)) ? { type: "client_configured", transport: t, ...o !== void 0 && { plugin_id_hash: o } } : void 0;
    default:
      return;
  }
}
var qDs = 256;
function wge(e) {
  return typeof e === "string" && e.length > 0 && e.length <= qDs && !/[\x00-\x1f\x7f]/.test(e);
}
function V(e) {
  return typeof e === "number" && Number.isInteger(e) && e > 0 ? e : void 0;
}
var Le = { always_allow: true, always_ask: true, always_deny: true };
function Ce(e) {
  return typeof e === "string" && Object.hasOwn(Le, e);
}
function GDr(e) {
  if (!(0, import_chunk_ma3kja9f.T)(e) || typeof e.name !== "string") return;
  let { name: n, permission_policy: r } = e;
  if (r === void 0) return { policy: { name: n }, rewritten: false };
  return Ce(r) ? { policy: { name: n, permission_policy: r }, rewritten: false } : { policy: { name: n, permission_policy: "always_ask" }, rewritten: true };
}
function tDo(e, n) {
  if (e === void 0 || n === void 0) return e === n;
  return e.length === n.length && e.every((r, t) => r.name === n[t]?.name && r.permission_policy === n[t]?.permission_policy);
}
var jta = 64, Gta = 128, zta = 16, Vta = 128;
function Y(e, n, r) {
  if (!Array.isArray(e) || e.length > n) return;
  let t = e.filter((o) => typeof o === "string" && o.length <= r);
  return t.length === e.length ? t : void 0;
}
function hqt(e) {
  if (!(0, import_chunk_ma3kja9f.T)(e)) return { settings: {}, ignored: [] };
  let { timeout: n, disableAutoBackground: r, tools: t, connectorId: o, autoModeVerdictTools: i, remoteControlMetaKeys: s, dataFlowServer: a, onPersonsMachine: d } = e, c = V(n), f = [];
  if (n !== void 0 && c === void 0) f.push("timeout");
  if (r !== void 0 && typeof r !== "boolean") f.push("disableAutoBackground");
  let u = Be(t);
  if (gqt(e) !== void 0) f.push("tools");
  let y = typeof o === "string" && o !== "";
  if (o !== void 0 && !y) f.push("connectorId");
  let b = Y(i, jta, Gta);
  if (i !== void 0 && b === void 0) f.push("autoModeVerdictTools");
  let g = Y(s, zta, Vta);
  if (s !== void 0 && g === void 0) f.push("remoteControlMetaKeys");
  let S = KDs(a), v = o === void 0 || S?.type === "claude_ai_connector" ? S : void 0;
  if (a !== void 0 && v === void 0) f.push("dataFlowServer");
  let K = (0, import_chunk_ma3kja9f.T)(d) ? d.exceptTools : void 0, J = Array.isArray(K) && K.every((Q) => typeof Q === "string") ? [...K] : [];
  return { settings: { ...c !== void 0 && { timeout: c }, ...r === true && { disableAutoBackground: r }, ...u !== void 0 && { tools: u }, ...y && { connectorId: o }, ...b !== void 0 && { autoModeVerdictTools: b }, ...g !== void 0 && { remoteControlMetaKeys: g }, ...v !== void 0 && { dataFlowServer: v }, ...d !== void 0 && { onPersonsMachine: { exceptTools: J } } }, ignored: f };
}
function gqt(e) {
  let n = (0, import_chunk_ma3kja9f.T)(e) ? e.tools : void 0;
  if (n === void 0) return;
  if (!Array.isArray(n)) return { kind: "not_a_list" };
  let r = 0, t = 0;
  for (let o of n) {
    let i = GDr(o);
    if (i === void 0) r++;
    else if (i.rewritten) t++;
  }
  return r + t > 0 ? { kind: "entries", dropped: r, rewritten: t, kept: n.length - r } : void 0;
}
function w_n(e) {
  if (e.kind === "not_a_list") return "tools[] is not a list; no per-tool policy taken";
  let n = [];
  if (e.dropped > 0) n.push(`dropped ${e.dropped} malformed tools[] ${e.dropped === 1 ? "entry" : "entries"}`);
  if (e.rewritten > 0) n.push(`read ${e.rewritten} tools[] ${e.rewritten === 1 ? "entry" : "entries"} with an invalid permission_policy as always_ask`);
  return `${n.join(", ")}; kept ${e.kept}`;
}
function Be(e) {
  if (!Array.isArray(e)) return;
  let n = [];
  for (let r of e) {
    let t = GDr(r);
    if (t !== void 0) n.push(t.policy);
  }
  return n;
}
var ch = "mcp__";
function _qt(e) {
  return e.startsWith(ch) && (0, import_chunk_3f4m74y6.dDo)(e.slice(ch.length));
}
function mr(e) {
  if (!e.startsWith(ch)) return null;
  let n = e.indexOf("__", ch.length);
  if (n === -1) {
    let r = e.slice(ch.length);
    return r ? { serverName: r, toolName: void 0 } : null;
  }
  if (n === ch.length) return null;
  return { serverName: e.slice(ch.length, n), toolName: e.slice(n + 2) };
}
function Rr(e) {
  return `${ch}${(0, import_chunk_3f4m74y6.xn)(e)}__`;
}
function YDs(e) {
  return `${Rr(e)}${De}`;
}
var De = "marker_only_not_a_tool_call";
function Bu(e, n, r) {
  if (e.mcpInfo?.serverName !== void 0) return e.mcpInfo.serverName === n;
  return e.name.startsWith(r ?? Rr(n));
}
function rC(e) {
  return mr(`${Rr(e)}x`)?.serverName ?? (0, import_chunk_3f4m74y6.xn)(e);
}
function U$l(e, { listedServer: n, parsedServer: r }) {
  if (n !== void 0) return e === n;
  return r !== void 0 && $qn(r, e);
}
function lr(e, n) {
  return `${Rr(e)}${(0, import_chunk_3f4m74y6.xn)(n)}`;
}
var Z = { always_allow: 0, always_ask: 1, always_deny: 2 };
function yqt(...e) {
  let n = /* @__PURE__ */ new Map();
  for (let i of e) for (let [s, a] of Object.entries(i)) {
    let d = a.type === "sdk";
    if (!d && a.type !== "http" && a.type !== "sse") continue;
    let c = a.tools;
    if (!Array.isArray(c)) continue;
    for (let f of c) {
      let u = GDr(f);
      if (u === void 0) continue;
      let y = u.policy.permission_policy;
      if (y === void 0 || (d ? y === "always_allow" : u.rewritten)) continue;
      let b = Z[y], g = lr(s, u.policy.name), S = n.get(g);
      if (S === void 0 || b > Z[S]) n.set(g, y);
    }
  }
  let r = [], t = [], o = [];
  for (let [i, s] of n) if (s === "always_allow") r.push(i);
  else if (s === "always_deny") t.push(i);
  else o.push(i);
  return { allow: r, deny: t, ask: o };
}
function B$l(e, n) {
  let r = Object.fromEntries(Object.entries(n).filter(([, t]) => t.scope === "dynamic" && t.type !== "sdk"));
  return Fqn(e, yqt(r), "merge");
}
function Fqn(e, n, r) {
  let t = (a, d) => {
    let c = a.mcpServerPolicy ?? [], f = r === "replace" ? d : (0, import_chunk_4smdap7r.M)([...c, ...d]);
    if (f.length === c.length && f.every((u, y) => u === c[y])) return a;
    if (f.length === 0) {
      let { mcpServerPolicy: u, ...y } = a;
      return y;
    }
    return { ...a, mcpServerPolicy: f };
  }, o = t(e.alwaysAllowRules, n.allow), i = t(e.alwaysDenyRules, (0, import_chunk_4smdap7r.M)([...n.deny, ...e.mcpDeniedTools ?? []])), s = t(e.alwaysAskRules, n.ask);
  if (o === e.alwaysAllowRules && i === e.alwaysDenyRules && s === e.alwaysAskRules) return e;
  return { ...e, alwaysAllowRules: o, alwaysDenyRules: i, alwaysAskRules: s };
}
var We = 2048, He = 512;
function W$l(e) {
  if (!Array.isArray(e) || e.length > We) return;
  let n = [];
  for (let r of e) {
    if (typeof r !== "string" || r.length > He || !/^[A-Za-z0-9_-]+$/.test(r) || !mr(r)?.toolName) return;
    n.push(r);
  }
  return n;
}
function j$l(e, n) {
  return (0, import_chunk_4smdap7r.Xy)(e.mcpDeniedTools ?? [], n) ? e : Fqn({ ...e, mcpDeniedTools: n }, { allow: [], deny: [], ask: [] }, "merge");
}
function ca(e) {
  return e.mcpInfo ? lr(e.mcpInfo.serverName, e.mcpInfo.toolName) : e.name;
}
function JFe(e) {
  let n = e.mcpInfo?.nameKey !== void 0 && zDs() ? e.mcpInfo.nameKey : void 0;
  if (!e.mcpInfo || e.mcpInfo.denyKey === void 0 && n === void 0 && !mL()) return [];
  let r = ca(e), t = eDo(r), o = `${ch}${(0, import_chunk_3f4m74y6.xn)(e.mcpInfo.serverName)}__`, i = r.slice(o.length), s = [e.mcpInfo.standardKey?.key, e.mcpInfo.denyKey, n].flatMap((a) => a === void 0 ? [] : [`${ch}${a}__${i}`]);
  return (0, import_chunk_4smdap7r.M)([...t, ...s]).filter((a) => a !== r);
}
function mxt(e, n) {
  let r = `mcp__${(0, import_chunk_3f4m74y6.xn)(n)}__`;
  return e.replace(r, "");
}
function zDr(e) {
  let n = e.replace(/\s*\(MCP\)\s*$/, "");
  n = n.trim();
  let r = n.indexOf(" - ");
  if (r !== -1) return n.substring(r + 3).trim();
  return n;
}
function Sqt(e, n) {
  if (!n) return (0, import_chunk_tp3c5q2s.Ft)(e, h);
  let r = hOe(e);
  return r ? `${(0, import_chunk_tp3c5q2s.Ft)(r.serverName, h)} (from plugin ${(0, import_chunk_tp3c5q2s.Ft)(r.pluginName, h)})` : (0, import_chunk_tp3c5q2s.Ft)(e, h);
}
var h = 80;
function hOe(e) {
  if (!e.startsWith("plugin:")) return;
  let n = e.split(":");
  if (n.length < 3) return;
  return { pluginName: n[1], serverName: n.slice(2).join(":") };
}
function VDr(e, n) {
  if (e === n) return true;
  if (X()) return false;
  return $qn(e, n);
}
function $qn(e, n) {
  if (e === n) return true;
  if (e.startsWith("plugin:") || n.startsWith("plugin:")) return false;
  return (0, import_chunk_3f4m74y6.xn)(e) === (0, import_chunk_3f4m74y6.xn)(n);
}
function nDo(e, n) {
  return Uqn(e)(mr(n));
}
function G$l(e) {
  let n = Uqn(e);
  return GDs().filter((r) => [r, ...eDo(r)].some((t) => t === e || n(mr(t))));
}
function Uqn(e) {
  let n = mr(e);
  if (n === null) return () => false;
  let r = n.toolName === void 0 || n.toolName === "*", t = n.toolName !== void 0 && (0, import_chunk_qebpc5de.vv)(n.toolName) ? n.toolName : void 0, o;
  return (i) => i !== null && n.serverName === i.serverName && (r || i.toolName !== void 0 && t !== void 0 && (o ??= (0, import_chunk_qebpc5de.iDo)(t))(i.toolName));
}
function hce(e) {
  if (e.mcpInfo) {
    let { serverName: r } = e.mcpInfo;
    return [`${ch}${(0, import_chunk_3f4m74y6.xn)(r)}`, `${ch}${rC(r)}`];
  }
  let n = [];
  if (!e.name.startsWith(ch)) return n;
  for (let r = e.name.indexOf("__", ch.length); r !== -1; r = e.name.indexOf("__", r + 1)) n.push(e.name.slice(0, r));
  return n;
}
function KDr(e) {
  let n = mr(e);
  if (n === null || n.toolName === void 0) return n === null ? [] : [n];
  return hce({ name: e }).map((r) => ({ serverName: r.slice(ch.length), toolName: e.slice(r.length + 2) }));
}
function Kta(e, n) {
  return (n.mcpInfo ? [`${ch}${(0, import_chunk_3f4m74y6.xn)(n.mcpInfo.serverName)}`] : hce(n)).every((r) => e === r || e.startsWith(`${r}__`));
}
function bqt(e, n) {
  return nDo(e, ca(n)) && Kta(e, n);
}
function z$l(e, n) {
  if (!n.mcpInfo) return false;
  if (!mL()) return JFe(n).some((t) => t === e || VJe(e, { name: t }));
  let r = mqt(e, ca(n));
  return JFe(n).includes(e) || r !== void 0 && r.rule === r.row || VJe(e, n);
}
function VJe(e, n) {
  let r = n.mcpInfo ? mqt(e, ca(n)) : void 0;
  return r !== void 0 && VJe(r.rule, { name: r.row }) || nDo(e, ca(n)) || e.startsWith(ch) && hce(n).includes(e) || JFe(n).some((t) => VJe(e, { name: t }));
}
