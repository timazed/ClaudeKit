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
var chunk_2fxy1zey_exports = {};
__export(chunk_2fxy1zey_exports, {
  $Tl: () => $Tl,
  Aun: () => Aun,
  Cun: () => Cun,
  EGt: () => EGt,
  FTl: () => FTl,
  HCr: () => HCr,
  LEs: () => LEs,
  NTl: () => NTl,
  Ojn: () => Ojn,
  Pjn: () => Pjn,
  Tun: () => Tun,
  UTl: () => UTl,
  ivo: () => ivo,
  ozi: () => ozi,
  szi: () => szi,
  vlt: () => vlt,
  x9: () => x9
});
module.exports = __toCommonJS(chunk_2fxy1zey_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_2172r9j8 = require("/$bunfs/root/chunk-2172r9j8.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_path = require("path");
var import_path2 = require("path");
function x9(n) {
  let e = n.length;
  for (; ; ) {
    let o = e;
    while (o > 0 && n[o - 1] === " ") o--;
    let l = n.slice(0, o);
    if (l === "." || l === "..") return l;
    let r = o;
    while (r > 0 && n[r - 1] === ".") r--;
    if (r === e) return l;
    e = r;
  }
}
function NTl(n) {
  if (/^\\(?:\\\?|\?\?)\\/.test(n)) return n;
  let e = /^(?:[\\/]{2,}[?.](?=[\\/])|[\\/]\?\?(?=[\\/])|[\\/]{2,}[^\\/]*(?:[\\/]+[^\\/]+)?|[a-z]:(?=[\\/]))/i.exec(n)?.[0] ?? "";
  if (e === "" && !/^[\\/]/.test(n)) return n;
  let o = [], l = false;
  for (let a of n.slice(e.length).split(/[\\/]+/)) {
    if (a === "") continue;
    let u = x9(a);
    if (l ||= u !== a || u === "." || u === "..", u === "..") o.pop();
    else if (u !== "" && u !== ".") o.push(u);
  }
  if (!l) return n;
  let r = n.includes("\\") ? "\\" : "/";
  return `${e}${r}${o.join(r)}`;
}
var W = "unread", FTl = "served-mount-table-unreadable", K = /^\/mnt\/([a-z])(?=\/|$)/i, C = /^([a-z]):(?:[\\/](.*))?$/is, X = /^(?:[\\/]{2}[?.]|[\\/]\?\?)[\\/](?:(UNC[\\/])(?=[^\\/])|(?=[a-z]:))/i, U = /(?:^|[,;])aname=drvfsa?;(?:[^,;]*;)*path=(?:(?:[\\/]{2}[?.]|[\\/]\?\?)[\\/])?([a-z]):([^,;]*)(?=[,;]|$)/i, Y = /* @__PURE__ */ new Set(["drvfs", "cifs", "smb3", "smbfs", "ntfs", "ntfs3", "fuseblk", "vfat", "exfat"]), z = /(?:^|[,;])aname=drvfsa?(?=[,;]|$)/i, G = /^(?:\\\\|\/\/)[^\\/]/, J = /^(?:\\\\|\/\/|UNC\\)[^\\/]+[\\/]+[a-z]\$(?:[\\/](.*))?$/is, F = /^(?:\\\\|\/\/|UNC\\)([^\\/]+)[\\/]+([^\\/]+)(?:[\\/](.*))?$/is, Q = /(?:^|,)prefixpath=([^,]*)/, Z = /(?:^|[,;])aname=drvfsa?;(?:[^,;]*;)*path=((?:\\\\|\/\/|UNC\\|[\\/]\?\?[\\/])[^,;]*)(?=[,;]|$)/i, nn = /^\d+ \d+ \d+:\d+ ([^ ]+) ([^ ]+) (r[ow])(?:,[^ ]*)?(?: [^ ]+)*? - ([^ ]+) ([^ ]*) ((r[ow])(?:,.*)?)$/s, en = 2e3, f = (0, import_chunk_t57w17k7.de)({ read: void 0, readAt: 0, lastListed: void 0 }, (n) => {
  n.read = void 0, n.readAt = 0, n.lastListed = void 0;
});
function EGt() {
  if ((0, import_chunk_cg8dqz0a.x)() !== "wsl") return [];
  let n = p();
  return n === "unreadable" ? [] : n.secondRootMounts;
}
var tn = "/mnt/wslg/distro";
function Pjn() {
  let n = EGt().map((e) => e.mountPoint);
  return (Ojn() ? (0, import_chunk_4smdap7r.M)([...n, tn]) : n).toSorted((e, o) => o.length - e.length);
}
function ozi(n) {
  let e = Pjn();
  if (e.length === 0) return;
  let o = import_path.posix.normalize(n), l = e.find((r) => (0, import_chunk_q7qjcthc.QJe)(o, r));
  return l && (o.slice(l.length) || "/");
}
function Ojn() {
  if ((0, import_chunk_cg8dqz0a.x)() !== "wsl") return false;
  let n = p();
  return n === "unreadable" || n.malformedLineNumber !== void 0;
}
function on(n) {
  let e = n.split(`
`), o = e.map(ln), l = o.findIndex((s, c) => e[c] !== "" && (s === void 0 || an(s))), r = o.map((s) => s === void 0 ? E : dn(s)), u = r.flatMap((s, c) => s.otherWindowsMounts.map((h) => [h.mountPoint, e[c]])).reduce((s, [c, h]) => {
    let P = s.get(c);
    if (P === void 0) s.set(c, [h]);
    else P.push(h);
    return s;
  }, /* @__PURE__ */ new Map());
  return { driveMounts: H(r.flatMap((s) => s.drives)).toSorted((s, c) => c.mountPoint.length - s.mountPoint.length), otherWindowsMounts: [...new Map(r.flatMap((s) => s.otherWindowsMounts).map((s) => [`${s.mountPoint}\0${s.within}`, s])).values()].toSorted((s, c) => c.mountPoint.length - s.mountPoint.length), otherWindowsVolumes: r.flatMap((s) => s.otherWindowsVolumes), otherWindowsMountLines: new Map([...u].map(([s, c]) => [s, c.join(`
`)])), secondRootMountCandidates: rn(o.filter((s) => s !== void 0)), malformedLineNumber: l === -1 ? void 0 : l + 1 };
}
function rn(n) {
  let e = new Set(n.filter((r) => r.mountPoint === "/").map((r) => r.fstype));
  return [...n.filter((r) => e.has(r.fstype) && r.mountPoint !== "/" && import_path.posix.isAbsolute(r.mountPoint)).reduce((r, { mountPoint: a, readOnly: u }) => r.set(a, u && (r.get(a) ?? true)), /* @__PURE__ */ new Map())].map(([r, a]) => ({ mountPoint: r, readOnly: a }));
}
function sn(n) {
  if (n.length === 0) return [];
  let e = (0, import_chunk_w578pjby.le)(), o = e.statSync("/");
  return n.filter(({ mountPoint: l }) => {
    try {
      let r = e.statSync(l);
      return o.dev === r.dev && o.ino === r.ino;
    } catch (r) {
      let a = (0, import_chunk_jv7av99m.w)(r);
      if (a === "ENOENT" || a === "ENOTDIR") return false;
      return (0, import_chunk_w578pjby.t)(`[wsl] Could not look at ${l} (${a ?? (0, import_chunk_jv7av99m.d)(r)}): taken for a second mount of the root disk`), true;
    }
  });
}
function ln(n) {
  let e = nn.exec(n);
  if (e === null) return;
  let [, o, l, r, a, u, s, c] = e;
  return { root: (0, import_chunk_q7qjcthc.gOe)(o).replace(/\/\/deleted$/, ""), mountPoint: gn(import_path.posix.normalize((0, import_chunk_q7qjcthc.gOe)(l))), readOnly: r === "ro" || c === "ro", fstype: a, source: k((0, import_chunk_q7qjcthc.gOe)(u)), options: s };
}
function an({ fstype: n, source: e, options: o }) {
  return n === "9p" && (o.split(",trans=").length !== 2 || o.split(/aname=/i).length > 2 || o.split(/path=/i).length > 2 || C.test(e) && z.test(o) && !U.test(o));
}
var E = { drives: [], otherWindowsMounts: [], otherWindowsVolumes: [] };
function dn({ root: n, mountPoint: e, fstype: o, source: l, options: r }) {
  if (!import_path.posix.isAbsolute(e)) return E;
  let a = g(n), u = C.exec(l), s = U.exec(r);
  if ((u ?? s) === null) {
    if (!fn(o, l, r)) return E;
    let b = /\\[0-7]{3}/.test(r) ? [r, (0, import_chunk_q7qjcthc.gOe)(r)] : [r], R = (0, import_chunk_4smdap7r.M)(b.flatMap((m) => {
      let y = k(Z.exec(m)?.[1] ?? l), _ = Q.exec(m)?.[1];
      return _ === void 0 || _ === "" ? [y] : [y, `${y}/${_}`];
    }));
    return { drives: [], otherWindowsMounts: R.flatMap((m) => un(m, a)).map((m) => ({ mountPoint: e, within: m })), otherWindowsVolumes: R.flatMap((m) => cn(m, a)).map((m) => ({ mountPoint: e, ...m })) };
  }
  let h = s?.[2] ?? "";
  return { drives: [...u === null ? [] : [[u[1], u[2] ?? ""]], ...s === null ? [] : [[s[1], h]], ...u === null && s !== null && /\\[0-7]{3}/.test(h) ? [[s[1], (0, import_chunk_q7qjcthc.gOe)(h)]] : []].flatMap(([b, R]) => {
    let m = g(R);
    return (0, import_chunk_4smdap7r.M)(D(a, m).flatMap((y) => [y.join("/"), ...V(y)])).map((y) => ({ mountPoint: e, letter: b.toLowerCase(), within: y }));
  }), otherWindowsMounts: [], otherWindowsVolumes: [] };
}
function B(n, e) {
  return e.length > 0 && e.every((o, l) => (0, import_chunk_2172r9j8.Ff)(o) === (0, import_chunk_2172r9j8.Ff)(n[l] ?? "")) ? [n, n.slice(e.length)] : [n];
}
function D(n, e) {
  return B(n, e).map((o) => [...e, ...o]);
}
function un(n, e) {
  let o = g(F.exec(n)?.[3] ?? "");
  return [...J.test(n) ? D(e, o) : [], ...B(e, o), []].flatMap(V);
}
function cn(n, e) {
  let [, o, l, r] = F.exec(n) ?? [], a = /^([a-z])\$$/i.exec(l ?? "")?.[1]?.toLowerCase(), u = o === void 0 || l === void 0 ? [{ volume: n.startsWith("/dev/") ? n : W }] : [{ volume: `//${(0, import_chunk_2172r9j8.Ff)(o)}/${(0, import_chunk_2172r9j8.Ff)(l)}` }, ...a === void 0 ? [] : [{ volume: T(a), letter: a }]];
  return (0, import_chunk_4smdap7r.M)([...D(e, g(r ?? "")), ...u.some(({ volume: s }) => s === W) ? [[]] : []].flatMap(V)).flatMap((s) => u.map((c) => ({ ...c, within: s })));
}
function k(n) {
  return n.replace(X, (e, o) => o === void 0 ? "" : "//");
}
function T(n) {
  return `drive:${n.toLowerCase()}`;
}
function V(n) {
  let e = n.map((o) => x9((0, import_chunk_7cfjrnwy.nt)(o, ":"))).filter((o) => o !== "");
  return (0, import_chunk_4smdap7r.M)([n, e].map((o) => import_path.posix.normalize(`/${o.join("/")}`).slice(1)));
}
function fn(n, e, o) {
  return Y.has(n) || n.startsWith("fuseblk.") || z.test(o) || G.test(e);
}
function vlt(n) {
  if ((0, import_chunk_cg8dqz0a.x)() !== "wsl") return [];
  let e = K.exec(n), o = (0, import_chunk_2172r9j8.Ff)(n), l = g(n), r = [...j().filter((a) => L(a.mountPoint, o)), ...e === null ? [] : [{ mountPoint: e[0], letter: e[1].toLowerCase(), within: "" }]];
  return H(r).map((a) => ({ ...a, beneath: N(a, l) }));
}
function Tun(n) {
  if ((0, import_chunk_cg8dqz0a.x)() !== "wsl" || n === "") return [];
  let e = (0, import_chunk_2172r9j8.Ff)(n === "/" ? "/" : `${n.replace(/\/+$/, "")}/`);
  return j().filter((o) => (0, import_chunk_2172r9j8.Ff)(o.mountPoint).startsWith(e));
}
function ivo(n) {
  if ((0, import_chunk_cg8dqz0a.x)() !== "wsl") return [];
  let e = p();
  if (e === "unreadable") return [];
  let o = (0, import_chunk_2172r9j8.Ff)(n), l = g(n);
  return e.otherWindowsMounts.filter((r) => L(r.mountPoint, o)).map((r) => ({ mountPoint: r.mountPoint, beneath: N(r, l) }));
}
function v(n) {
  if ((0, import_chunk_cg8dqz0a.x)() !== "wsl") return [];
  let e = p(), o = (0, import_chunk_2172r9j8.Ff)(n), l = g(n);
  return [...vlt(n).flatMap((r) => [{ volume: T(r.letter), beneath: r.beneath }, { volume: I(r.mountPoint), beneath: r.beneath }]), ...ivo(n).map((r) => ({ volume: I(r.mountPoint), beneath: r.beneath })), ...(e === "unreadable" ? [] : e.otherWindowsVolumes).filter((r) => L(r.mountPoint, o)).map((r) => ({ volume: r.volume, beneath: N(r, l) }))];
}
function szi(n, e) {
  let o = (0, import_chunk_cg8dqz0a.x)() === "wsl" ? p() : "unreadable";
  if (o === "unreadable") return false;
  let l = new Set(v(n).map((a) => a.volume)), r = [...o.driveMounts.map(({ mountPoint: a, letter: u }) => ({ mountPoint: a, volume: T(u), letter: u, namesDrive: true })), ...o.otherWindowsVolumes.map((a) => ({ ...a, namesDrive: false }))].flatMap((a) => a.letter === void 0 ? [a] : [a, { ...a, mountPoint: `/mnt/${a.letter}`, namesDrive: true }]);
  return [...l].filter((a) => a !== W).some((a) => {
    let u = r.filter((s) => s.volume === a);
    return new Set(u.map((s) => (0, import_chunk_2172r9j8.Ff)(s.mountPoint))).size > 1 && (e === "all" || u.some((s) => !s.namesDrive));
  });
}
function $Tl(n) {
  let e = (0, import_chunk_cg8dqz0a.x)() === "wsl" ? p() : "unreadable";
  return e !== "unreadable" && e.otherWindowsVolumes.some((o) => o.volume === W) && v(n).length > 0;
}
function I(n) {
  return `at:${(0, import_chunk_2172r9j8.Ff)(n)}`;
}
function L(n, e) {
  return (0, import_chunk_q7qjcthc.QJe)(e, (0, import_chunk_2172r9j8.Ff)(n));
}
function N(n, e) {
  return [...g(n.within), ...e.slice(g(n.mountPoint).length)].join("/");
}
function UTl(n) {
  if ((0, import_chunk_cg8dqz0a.x)() !== "wsl") return;
  let e = p();
  return e === "unreadable" ? void 0 : e.otherWindowsMountLines.get(n);
}
function LEs(n) {
  if ((0, import_chunk_cg8dqz0a.x)() !== "wsl" || n === "") return [];
  let e = p();
  if (e === "unreadable") return [];
  let o = (0, import_chunk_2172r9j8.Ff)(n === "/" ? "/" : `${n.replace(/\/+$/, "")}/`);
  return e.otherWindowsMounts.filter((l) => (0, import_chunk_2172r9j8.Ff)(l.mountPoint).startsWith(o));
}
function j() {
  if ((0, import_chunk_cg8dqz0a.x)() !== "wsl") return [];
  let n = p();
  return n === "unreadable" ? [] : n.driveMounts;
}
function p() {
  if (f.read === void 0 || Date.now() - f.readAt > en) {
    let n = mn();
    f.read = n === "unreadable" && f.read !== void 0 ? f.read : n, f.readAt = Date.now();
  }
  return f.read;
}
function mn() {
  try {
    let { driveMounts: n, otherWindowsMounts: e, otherWindowsVolumes: o, otherWindowsMountLines: l, secondRootMountCandidates: r, malformedLineNumber: a } = on((0, import_chunk_w578pjby.le)().readFileSync("/proc/self/mountinfo", { encoding: "utf8" }));
    if (a !== void 0 && (typeof f.read !== "object" || f.read.malformedLineNumber !== a)) (0, import_chunk_k449cc64.i)(new import_chunk_jv7av99m.A(`[wsl] Line ${a} of /proc/self/mountinfo is not a whole line of that file (as when a line break in a folder's name splits an entry in two), repeats an option, or names a drive as its source but none in its drvfs options. It may belong to a Windows drive, so this machine serves no cloud session while the line is there.`, "[wsl] /proc/self/mountinfo holds a line that is not whole, repeats an option, or names a drive only as its source; no cloud session is served while it does"));
    let u = n.length === 0 ? "(none named; /mnt/<letter> applies)" : n.map((c) => `${c.letter.toUpperCase()}:${c.within === "" ? "" : `\\${c.within.replaceAll("/", "\\")}`} at ${c.mountPoint}`).join(", "), s = e.length === 0 ? u : `${u}; Windows mounts that name no drive: ${e.map((c) => c.within === "" ? c.mountPoint : `${c.mountPoint} (or from ${c.within.replaceAll("/", "\\")})`).join(", ")}`;
    if (s !== f.lastListed) f.lastListed = s, (0, import_chunk_w578pjby.t)(`[wsl] Windows drives in /proc/self/mountinfo: ${s}`);
    return { driveMounts: n, otherWindowsMounts: e, otherWindowsVolumes: o, otherWindowsMountLines: l, secondRootMounts: sn(r), malformedLineNumber: a };
  } catch (n) {
    let e = (0, import_chunk_jv7av99m.w)(n) ?? (0, import_chunk_jv7av99m.d)(n);
    if (f.read === void 0) (0, import_chunk_k449cc64.i)(new import_chunk_jv7av99m.A(`[wsl] Could not read /proc/self/mountinfo (${e}): this machine's Windows drives cannot be located, so it serves no cloud session until a retry succeeds (retried automatically).`, "[wsl] Could not read /proc/self/mountinfo; no cloud session is served until a retry succeeds"));
    else (0, import_chunk_w578pjby.t)(`[wsl] Could not read /proc/self/mountinfo (${e})`);
    return f.lastListed = void 0, "unreadable";
  }
}
function H(n) {
  let e = /* @__PURE__ */ new Set();
  return n.filter((o) => {
    let l = `${o.mountPoint}\0${o.letter}\0${o.within}`;
    if (e.has(l)) return false;
    return e.add(l), true;
  });
}
function g(n) {
  return n.split(/[\\/]+/).filter(Boolean);
}
function gn(n) {
  return n.length > 1 && n.endsWith("/") ? n.slice(0, -1) : n;
}
function HCr(n, e) {
  return q(v(import_path2.posix.normalize(n)), e);
}
function Cun(n, e) {
  if ((0, import_chunk_cg8dqz0a.x)() !== "wsl") return false;
  let o = v(import_path2.posix.normalize(n));
  return o.length > 0 && Aun(e).some((l) => q(o, l).length > 0);
}
function Aun(n) {
  let e = import_path2.posix.normalize(n);
  return (0, import_chunk_4smdap7r.M)([n, ...[...Tun(e), ...LEs(e)].map((o) => o.mountPoint)]);
}
function q(n, e) {
  return v(import_path2.posix.normalize(e)).flatMap((o) => n.flatMap((l) => o.volume === l.volume || [o.volume, l.volume].includes(W) ? (0, import_chunk_z6pfqf6e.eNo)(o.beneath, l.beneath) : []));
}
