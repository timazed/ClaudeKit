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
var chunk_yrh4vxq4_exports = {};
__export(chunk_yrh4vxq4_exports, {
  AYa: () => AYa,
  CYa: () => CYa,
  EYa: () => EYa,
  IHn: () => IHn,
  Ifr: () => Ifr,
  Mfr: () => Mfr,
  PYa: () => PYa,
  RYa: () => RYa,
  TYa: () => TYa,
  Vss: () => Vss,
  cso: () => cso,
  dso: () => dso,
  lso: () => lso,
  vYa: () => vYa,
  xYa: () => xYa,
  zss: () => zss
});
module.exports = __toCommonJS(chunk_yrh4vxq4_exports);
var import_chunk_0f2gasyz = require("/$bunfs/root/chunk-0f2gasyz.js");
function Ifr() {
  return { bold: false, dim: false, italic: false, underline: "none", blink: false, inverse: false, hidden: false, strikethrough: false, overline: false, fg: { type: "default" }, bg: { type: "default" }, underlineColor: { type: "default" } };
}
var EYa = (0, import_chunk_0f2gasyz.Jl)(0, "m"), lso = (0, import_chunk_0f2gasyz.Jl)(1, "m"), dso = (0, import_chunk_0f2gasyz.Jl)(2, "m"), vYa = (0, import_chunk_0f2gasyz.Jl)(4, "m"), TYa = (0, import_chunk_0f2gasyz.Jl)(7, "m"), CYa = (0, import_chunk_0f2gasyz.Jl)(33, "m"), zss = (0, import_chunk_0f2gasyz.Jl)(22, "m"), cso = (0, import_chunk_0f2gasyz.Jl)(24, "m"), Mfr = (0, import_chunk_0f2gasyz.Jl)(27, "m"), AYa = (0, import_chunk_0f2gasyz.Jl)(28, "m"), RYa = (0, import_chunk_0f2gasyz.Jl)(29, "m"), IHn = (0, import_chunk_0f2gasyz.Jl)(39, "m"), Vss = (0, import_chunk_0f2gasyz.Jl)(49, "m"), xYa = (0, import_chunk_0f2gasyz.Jl)(55, "m"), u = ["black", "red", "green", "yellow", "blue", "magenta", "cyan", "white", "brightBlack", "brightRed", "brightGreen", "brightYellow", "brightBlue", "brightMagenta", "brightCyan", "brightWhite"], p = ["none", "single", "double", "curly", "dotted", "dashed"];
function d(r) {
  if (r === "") return [{ value: 0, subparams: [], colon: false }];
  let i = [], o = { value: void 0, subparams: [], colon: false }, n = "", t = false;
  for (let a = 0; a <= r.length; a++) {
    let e = r[a];
    if (e === ";" || e === void 0) {
      let l = n === "" ? void 0 : parseInt(n, 10);
      if (t) {
        if (l !== void 0) o.subparams.push(l);
      } else o.value = l;
      i.push(o), o = { value: void 0, subparams: [], colon: false }, n = "", t = false;
    } else if (e === ":") {
      let l = n === "" ? void 0 : parseInt(n, 10);
      if (!t) o.value = l, o.colon = true, t = true;
      else if (l !== void 0) o.subparams.push(l);
      n = "";
    } else if (e >= "0" && e <= "9") n += e;
  }
  return i;
}
function c(r, i) {
  let o = r[i];
  if (!o) return null;
  if (o.colon && o.subparams.length >= 1) {
    if (o.subparams[0] === 5 && o.subparams.length >= 2) return { type: "indexed", index: o.subparams[1] };
    if (o.subparams[0] === 2 && o.subparams.length >= 4) {
      let t = o.subparams.length >= 5 ? 1 : 0;
      return { type: "rgb", r: o.subparams[1 + t], g: o.subparams[2 + t], b: o.subparams[3 + t] };
    }
  }
  let n = r[i + 1];
  if (!n) return null;
  if (n.value === 5) {
    let t = r[i + 2]?.value;
    return t === void 0 ? null : { type: "indexed", index: t };
  }
  if (n.value === 2) {
    let t = r[i + 2]?.value, a = r[i + 3]?.value, e = r[i + 4]?.value;
    if (t !== void 0 && a !== void 0 && e !== void 0) return { type: "rgb", r: t, g: a, b: e };
  }
  return null;
}
function PYa(r, i) {
  let o = d(r), n = { ...i }, t = 0;
  while (t < o.length) {
    let a = o[t], e = a.value ?? 0;
    if (e === 0) {
      n = Ifr(), t++;
      continue;
    }
    if (e === 1) {
      n.bold = true, t++;
      continue;
    }
    if (e === 2) {
      n.dim = true, t++;
      continue;
    }
    if (e === 3) {
      n.italic = true, t++;
      continue;
    }
    if (e === 4) {
      n.underline = a.colon ? p[a.subparams[0]] ?? "single" : "single", t++;
      continue;
    }
    if (e === 5 || e === 6) {
      n.blink = true, t++;
      continue;
    }
    if (e === 7) {
      n.inverse = true, t++;
      continue;
    }
    if (e === 8) {
      n.hidden = true, t++;
      continue;
    }
    if (e === 9) {
      n.strikethrough = true, t++;
      continue;
    }
    if (e === 21) {
      n.underline = "double", t++;
      continue;
    }
    if (e === 22) {
      n.bold = false, n.dim = false, t++;
      continue;
    }
    if (e === 23) {
      n.italic = false, t++;
      continue;
    }
    if (e === 24) {
      n.underline = "none", t++;
      continue;
    }
    if (e === 25) {
      n.blink = false, t++;
      continue;
    }
    if (e === 27) {
      n.inverse = false, t++;
      continue;
    }
    if (e === 28) {
      n.hidden = false, t++;
      continue;
    }
    if (e === 29) {
      n.strikethrough = false, t++;
      continue;
    }
    if (e === 53) {
      n.overline = true, t++;
      continue;
    }
    if (e === 55) {
      n.overline = false, t++;
      continue;
    }
    if (e >= 30 && e <= 37) {
      n.fg = { type: "named", name: u[e - 30] }, t++;
      continue;
    }
    if (e === 39) {
      n.fg = { type: "default" }, t++;
      continue;
    }
    if (e >= 40 && e <= 47) {
      n.bg = { type: "named", name: u[e - 40] }, t++;
      continue;
    }
    if (e === 49) {
      n.bg = { type: "default" }, t++;
      continue;
    }
    if (e >= 90 && e <= 97) {
      n.fg = { type: "named", name: u[e - 90 + 8] }, t++;
      continue;
    }
    if (e >= 100 && e <= 107) {
      n.bg = { type: "named", name: u[e - 100 + 8] }, t++;
      continue;
    }
    if (e === 38 || e === 48 || e === 58) {
      let l = c(o, t);
      if (l) if (e === 38) n.fg = l;
      else if (e === 48) n.bg = l;
      else n.underlineColor = l;
      let s = o[t + 1]?.value;
      t += a.colon ? 1 : s === 5 ? 3 : s === 2 ? 5 : 1;
      continue;
    }
    if (e === 59) {
      n.underlineColor = { type: "default" }, t++;
      continue;
    }
    t++;
  }
  return n;
}
