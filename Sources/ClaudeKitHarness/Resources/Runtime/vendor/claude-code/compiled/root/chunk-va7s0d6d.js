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
var chunk_va7s0d6d_exports = {};
__export(chunk_va7s0d6d_exports, {
  AF: () => AF,
  Ijl: () => Ijl,
  Mjl: () => Mjl,
  PL: () => PL,
  R2: () => R2,
  SVe: () => SVe,
  cNo: () => cNo,
  h5n: () => h5n,
  nSn: () => nSn,
  tSn: () => tSn
});
module.exports = __toCommonJS(chunk_va7s0d6d_exports);
function PL(e) {
  return e.slice(e.lastIndexOf(")") + 2).split(" ")[19];
}
function Ijl(e) {
  return e.slice(e.indexOf("(") + 1, e.lastIndexOf(")"));
}
function SVe(e) {
  let r = e.slice(e.lastIndexOf(")") + 2).split(" ")[1], n = r === void 0 ? NaN : Number.parseInt(r, 10);
  return Number.isNaN(n) ? void 0 : n;
}
function h5n(e) {
  let r = e.slice(e.lastIndexOf(")") + 2).split(" ")[2], n = r === void 0 ? NaN : Number.parseInt(r, 10);
  return Number.isNaN(n) ? void 0 : n;
}
function tSn(e) {
  let r = e.slice(e.lastIndexOf(")") + 2).split(" ")[3], n = r === void 0 ? NaN : Number.parseInt(r, 10);
  return Number.isNaN(n) ? void 0 : n;
}
function Mjl(e) {
  let [, r, n, i, , , , , , , , t, u, d, o] = e.slice(e.lastIndexOf(")") + 2).split(" ", 15).map(Number), s = (t ?? NaN) + (u ?? NaN) + (d ?? NaN) + (o ?? NaN);
  return r === void 0 || n === void 0 || i === void 0 || Number.isNaN(r + n + i + s) ? void 0 : { ppid: r, pgrp: n, session: i, cpuTicks: s };
}
function nSn(e) {
  let r = e.slice(e.lastIndexOf(")") + 2).split(" ", 20).map(Number), [, n, i, t, , , , , , , , u, d, o, s] = r, c = r[19], m = (u ?? NaN) + (d ?? NaN), a = (o ?? NaN) + (s ?? NaN);
  return n === void 0 || i === void 0 || t === void 0 || c === void 0 || Number.isNaN(n + i + t + c + m + a) ? void 0 : { ppid: n, pgrp: i, session: t, starttime: c, ownTicks: m, childrenTicks: a };
}
function R2(e) {
  let r = e.lastIndexOf(")");
  if (r < 0) return;
  let n = e.slice(r + 2), i = n.indexOf(" "), t = i < 0 ? n : n.slice(0, i);
  return t.length === 0 ? void 0 : t;
}
function AF(e) {
  return e === "Z" || e === "X";
}
function cNo(e) {
  let r = e.indexOf("("), n = e.lastIndexOf(")"), i = Number.parseInt(e.slice(n + 2).split(" ", 13)[12] ?? "", 10);
  return r < 0 || n < r || Number.isNaN(i) ? void 0 : { name: e.slice(r + 1, n), systemTicks: i };
}
