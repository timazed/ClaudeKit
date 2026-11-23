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
var chunk_y0ntnrse_exports = {};
__export(chunk_y0ntnrse_exports, {
  z3: () => z3
});
module.exports = __toCommonJS(chunk_y0ntnrse_exports);
var import_chunk_7r4ehpnw = require("/$bunfs/root/chunk-7r4ehpnw.js");
var import_chunk_dwa7jc2e = require("/$bunfs/root/chunk-dwa7jc2e.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_6qkpxgbg = require("/$bunfs/root/chunk-6qkpxgbg.js");
var import_chunk_zvx9zp0y = require("/$bunfs/root/chunk-zvx9zp0y.js");
var import_chunk_3j73ps7b = require("/$bunfs/root/chunk-3j73ps7b.js");
var import_chunk_s73318k8 = require("/$bunfs/root/chunk-s73318k8.js");
var import_chunk_fc9svvyv = require("/$bunfs/root/chunk-fc9svvyv.js");
var import_chunk_6fvsq616 = require("/$bunfs/root/chunk-6fvsq616.js");
var import_chunk_hn0x7v1y = require("/$bunfs/root/chunk-hn0x7v1y.js");
var import_chunk_z8dyhx9v = require("/$bunfs/root/chunk-z8dyhx9v.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_util = require("util");
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
function Ce({ isDisabled: i = false, visibleOptionCount: ce = 5, moreRows: te, takesHomeEnd: M, options: c, defaultValue: u = [], onChange: N, onCancel: E, onFocus: oe, submitButtonText: V, onSubmit: p, onDownFromLastItem: b, hideIndexes: ne = false, disablePrintableKeybindings: U = false, isQuestion: j = false, refuseSubmitFocus: X }) {
  let [W, z, H] = (0, import_chunk_hn0x7v1y.fu)(u), [J, O, s] = (0, import_chunk_hn0x7v1y.fu)(false), [v, fe] = (0, import_chunk_bs4h6795.y)(c);
  if (c !== v && !(0, import_util.isDeepStrictEqual)(c, v)) z(u), fe(c);
  let [ie, A] = (0, import_chunk_bs4h6795.y)(() => {
    let t = /* @__PURE__ */ new Map();
    return c.forEach((l) => {
      if (l.type === "input" && l.initialValue) t.set(l.value, l.initialValue);
    }), t;
  }), h = (0, import_chunk_bs4h6795.ye)((t) => {
    let l = typeof t === "function" ? t(H()) : t;
    if (N?.(l) === false) return;
    z(l);
  }, [H, z, N]), se = (0, import_chunk_bs4h6795.ye)((t) => {
    if (c.find((l) => l.value === t)?.disabled === true) return;
    h((l) => l.includes(t) ? l.filter((f) => f !== t) : [...l, t]);
  }, [c, h]), d = (0, import_chunk_z8dyhx9v.GWr)({ visibleOptionCount: ce, moreRows: te, options: c, onFocus: oe });
  (0, import_chunk_fc9svvyv.Cd)("multi-select");
  let R = (0, import_chunk_bs4h6795.ye)((t, l) => {
    let f = c.find((w) => w.value === t);
    if (f?.type === "input" && f.onChange(l) === false) return;
    A((w) => {
      let P = new Map(w);
      return P.set(t, l), P;
    }), h((w) => {
      if (l) {
        if (!w.includes(t)) return [...w, t];
        return w;
      } else return w.filter((P) => P !== t);
    });
  }, [c, h]);
  function Q() {
    p?.(H());
  }
  function B(t) {
    if (!j && s()) {
      if (t > 0) return;
      O(false), d.focusOption(c.at(-1)?.value);
    }
    if (t > 0) d.focusNextPage();
    else d.focusPreviousPage();
  }
  let _ = d.visibleToIndex - d.visibleFromIndex < c.length;
  (0, import_chunk_6fvsq616.gs)({ "select:pageDown": () => B(1), "select:pageUp": () => B(-1) }, { context: "Select", isActive: !i && !j && _ && (J || c.find((t) => t.value === d.focusedValue)?.type !== "input") });
  let me = (0, import_chunk_z8dyhx9v.y_e)();
  return { ...d, focusOption: (t) => {
    O(false), d.focusOption(t);
  }, scrollViewport: (t) => {
    let l = d.getFocusedValue(), f = d.scrollViewport(t);
    if (d.getFocusedValue() !== l) O(false);
    return f;
  }, selectedValues: W, getSelectedValues: H, inputValues: ie, isSubmitFocused: J, updateInputValue: R, toggleValue: se, onCancel: E, handleKeyDown: (t) => {
    if (i) return;
    let l = (0, import_chunk_7cfjrnwy.SJ)(me(t)), f = d.getFocusedValue(), P = c.find((C) => C.value === f)?.type === "input", D = s();
    if (P) {
      if (!(t.key === "up" || t.key === "down" || t.key === "escape" || t.key === "tab" || t.key === "return" || t.ctrl && (t.key === "n" || t.key === "p" || t.key === "return"))) return;
    }
    if (U && (0, import_chunk_7cfjrnwy.jEe)(t.key) !== " " && (0, import_chunk_8bkqeb5d.kP)(t)) {
      if (t.preventDefault(), !X?.()) h([]), O(Boolean(V && p) && H().length === 0);
      return;
    }
    let K = c.at(-1)?.value, q = !U && !t.ctrl && !t.shift;
    if (U && t.key === "tab") {
      t.preventDefault();
      return;
    }
    if (t.key === "tab" && !t.shift) {
      if (t.preventDefault(), V && p && f === K && !D) {
        if (X?.()) return;
        O(true);
      } else if (!D) d.focusNextOption();
      return;
    }
    if (t.key === "tab" && t.shift) {
      if (t.preventDefault(), V && p && D) O(false), d.focusOption(K);
      else d.focusPreviousOption();
      return;
    }
    if (t.key === "down" || t.ctrl && t.key === "n" || q && t.key === "j") {
      if (t.preventDefault(), D && b) b();
      else if (V && p && f === K && !D) {
        if (X?.()) return;
        O(true);
      } else if (!V && b && f === K) b();
      else if (!D) d.focusNextOption();
      return;
    }
    if (t.key === "up" || t.ctrl && t.key === "p" || q && t.key === "k") {
      if (t.preventDefault(), V && p && D) O(false), d.focusOption(K);
      else d.focusPreviousOption();
      return;
    }
    if (t.key === "pagedown" && (j || _)) {
      t.preventDefault(), B(1);
      return;
    }
    if (t.key === "pageup" && (j || _)) {
      t.preventDefault(), B(-1);
      return;
    }
    if (M && (t.name === "home" || t.name === "end")) {
      t.preventDefault(), O(false), d.focusOption(t.name === "home" ? c[0]?.value : K);
      return;
    }
    if (t.key === "return" || (0, import_chunk_7cfjrnwy.jEe)(l) === " ") {
      if (t.preventDefault(), t.ctrl && t.key === "return" && P && p) {
        Q();
        return;
      }
      if (t.key === "return" && D && p) {
        Q();
        return;
      }
      if (t.key === "return" && !V && p) {
        Q();
        return;
      }
      if (!D && f !== void 0) se(f);
      return;
    }
    if (!ne && /^[0-9]$/.test(l)) {
      t.preventDefault();
      let C = parseInt(l) - 1;
      if (C >= 0 && C < c.length) se(c[C].value);
      return;
    }
    if (t.key === "escape") E(), t.stopImmediatePropagation();
  } };
}
function At($t) {
  return $t.description;
}
function Bt(qt) {
  return qt.description;
}
function Lt() {
}
function z3(i) {
  let te = (0, import_chunk_sng02qpc.k)(13);
  if ((0, import_chunk_8bkqeb5d.Xe)()) {
    let M2;
    if (te[0] !== i.defaultValue || te[1] !== i.isDisabled || te[2] !== i.onCancel || te[3] !== i.onChange || te[4] !== i.onFocus || te[5] !== i.onOpenEditor || te[6] !== i.onSubmit || te[7] !== i.options || te[8] !== i.refuseInput || te[9] !== i.submitButtonText) M2 = (0, import_chunk_a46xeenj.e)(import_chunk_z8dyhx9v.gBo, { options: i.options, defaultValue: i.defaultValue, onChange: i.onChange, onSubmit: i.onSubmit, onFocus: i.onFocus, onCancel: i.onCancel, onOpenEditor: i.onOpenEditor, isDisabled: i.isDisabled, submitButtonText: i.submitButtonText, refuseInput: i.refuseInput }), te[0] = i.defaultValue, te[1] = i.isDisabled, te[2] = i.onCancel, te[3] = i.onChange, te[4] = i.onFocus, te[5] = i.onOpenEditor, te[6] = i.onSubmit, te[7] = i.options, te[8] = i.refuseInput, te[9] = i.submitButtonText, te[10] = M2;
    else M2 = te[10];
    return M2;
  }
  let M;
  if (te[11] !== i) M = (0, import_chunk_a46xeenj.e)(Pe, { ...i }), te[11] = i, te[12] = M;
  else M = te[12];
  return M;
}
function Pe(i) {
  let v = (0, import_chunk_sng02qpc.k)(100), { isDisabled: ce, refuseInput: te, visibleOptionCount: M, overflowHint: c, options: u, defaultValue: N, onCancel: E, onChange: oe, onFocus: V, submitButtonText: p, onSubmit: b, onDownFromLastItem: ne, onOpenEditor: U, hideIndexes: j, disablePrintableKeybindings: X, canPasteImage: W, onImagePaste: z, pastedContents: H, onRemoveImage: J, refuseSubmitFocus: O } = i, s = ce === void 0 ? false : ce, fe;
  if (v[0] !== N) fe = N === void 0 ? [] : N, v[0] = N, v[1] = fe;
  else fe = v[1];
  let ie = fe, A = j === void 0 ? false : j, h = X === void 0 ? false : X, se = u.some(At), d = (0, import_chunk_bs4h6795.I)(null), R = !(0, import_chunk_bs4h6795.be)(import_chunk_s73318k8.aKe) || te !== void 0 || h;
  const Q = !R, B = (0, import_chunk_s73318k8.Hmt)(M ?? 5, se ? "compact-vertical" : "compact"), _ = c === "glyph" || R && u.length <= (M ?? Infinity) ? "none" : u.every(Bt) ? "slotShared" : "slotEach";
  let me;
  if (v[2] !== ie || v[3] !== h || v[4] !== A || v[5] !== s || v[6] !== R || v[7] !== E || v[8] !== oe || v[9] !== ne || v[10] !== V || v[11] !== b || v[12] !== u || v[13] !== O || v[14] !== p || v[15] !== Q || v[16] !== B || v[17] !== _) me = { takesHomeEnd: Q, isDisabled: s, visibleOptionCount: B, moreRows: _, options: u, defaultValue: ie, onChange: oe, onCancel: E, onFocus: V, submitButtonText: p, onSubmit: b, onDownFromLastItem: ne, hideIndexes: A, disablePrintableKeybindings: h, isQuestion: R, refuseSubmitFocus: O }, v[2] = ie, v[3] = h, v[4] = A, v[5] = s, v[6] = R, v[7] = E, v[8] = oe, v[9] = ne, v[10] = V, v[11] = b, v[12] = u, v[13] = O, v[14] = p, v[15] = Q, v[16] = B, v[17] = _, v[18] = me;
  else me = v[18];
  let n = Ce(me);
  const t = n.isSubmitFocused ? void 0 : n.focusedValue;
  let l;
  if (v[19] !== W || v[20] !== u || v[21] !== n.focusOption || v[22] !== t) l = { options: u, focusedValue: t, focusOption: n.focusOption, canPaste: W }, v[19] = W, v[20] = u, v[21] = n.focusOption, v[22] = t, v[23] = l;
  else l = v[23];
  let f = (0, import_chunk_s73318k8._7n)(l);
  (0, import_chunk_dwa7jc2e.Dv)(d, !s);
  let w = n.isSubmitFocused || !p, P;
  if (v[24] !== w || v[25] !== s || v[26] !== b || v[27] !== u.length || v[28] !== n.isSubmitFocused || v[29] !== p) P = s ? null : [{ on: ["up", "down"], hint: u.length > 1 || p ? "navigate" : "" }, { on: "space", hint: n.isSubmitFocused ? "" : "toggle" }, { on: "enter", hint: w && b ? "confirm" : "" }], v[24] = w, v[25] = s, v[26] = b, v[27] = u.length, v[28] = n.isSubmitFocused, v[29] = p, v[30] = P;
  else P = v[30];
  (0, import_chunk_zvx9zp0y.nl)(P);
  let [D, K] = (0, import_chunk_bs4h6795.y)(false), q = (0, import_chunk_6qkpxgbg.NZe)(), C = !s && D && q === "inverse", Y = (0, import_chunk_3j73ps7b.Ab)(), L = (0, import_chunk_6qkpxgbg.cKe)(), Me = (0, import_chunk_3j73ps7b.qwn)(), ot;
  if (v[31] !== s || v[32] !== u.length || v[33] !== Me || v[34] !== n.scrollViewport || v[35] !== n.visibleFromIndex || v[36] !== n.visibleToIndex) ot = { isDisabled: s, visibleFromIndex: n.visibleFromIndex, visibleToIndex: n.visibleToIndex, optionCount: u.length, scrollViewport: n.scrollViewport, shouldDropWheel: Me }, v[31] = s, v[32] = u.length, v[33] = Me, v[34] = n.scrollViewport, v[35] = n.visibleFromIndex, v[36] = n.visibleToIndex, v[37] = ot;
  else ot = v[37];
  let Ee = (0, import_chunk_s73318k8.y7n)(ot), nt;
  if (v[38] !== s || v[39] !== R || v[40] !== Y || v[41] !== n || v[42] !== L) nt = (re) => s || re.disabled === true ? void 0 : (it) => {
    if (Y(it) || L.dropsClick(it)) {
      return;
    }
    if (re.type === "input") n.focusOption(re.value);
    else {
      if (!R) n.focusOption(re.value);
      n.toggleValue(re.value);
    }
  }, v[38] = s, v[39] = R, v[40] = Y, v[41] = n, v[42] = L, v[43] = nt;
  else nt = v[43];
  let ve = nt, he, ge, Se, De, ae, Oe, Ie, we, le;
  if (v[44] !== W || v[45] !== ve || v[46] !== h || v[47] !== f || v[48] !== A || v[49] !== s || v[50] !== E || v[51] !== z || v[52] !== U || v[53] !== J || v[54] !== u.length || v[55] !== H || v[56] !== n || v[57] !== L || v[58] !== Ee) {
    let st = u.length.toString().length;
    ge = import_chunk_8bkqeb5d.g;
    Ie = "column";
    we = d;
    if (v[68] !== h || v[69] !== f || v[70] !== s || v[71] !== n.handleKeyDown) le = s ? {} : { tabIndex: 0, textEntry: h ? true : void 0, onKeyDown: n.handleKeyDown, onPaste: f }, v[68] = h, v[69] = f, v[70] = s, v[71] = n.handleKeyDown, v[72] = le;
    else le = v[72];
    he = import_chunk_s73318k8.Uwn;
    Se = n;
    De = Ee;
    if (v[73] !== s || v[74] !== u.length || v[75] !== n || v[76] !== L) ae = s ? void 0 : (Nt, Ut) => {
      n.scrollViewport(Nt * u.length), L.pressed(Ut);
    }, v[73] = s, v[74] = u.length, v[75] = n, v[76] = L, v[77] = ae;
    else ae = v[77];
    Oe = n.visibleOptions.map((S, jt) => {
      let He = !s && n.focusedValue === S.value && !n.isSubmitFocused;
      let Te = n.selectedValues.includes(S.value);
      let rt = S.index === n.visibleFromIndex;
      let at = S.index === n.visibleToIndex - 1;
      let lt = n.moreRows === "none" && n.visibleToIndex < u.length;
      let ut = n.moreRows === "none" && n.visibleFromIndex > 0;
      let dt = n.visibleFromIndex + jt + 1;
      if (S.type === "input") {
        let zt = n.inputValues.get(S.value) || "";
        return (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "column", children: (0, import_chunk_a46xeenj.e)(import_chunk_s73318k8.LZe, { option: S, onClick: ve(S), isFocused: He, isSelected: false, shouldShowDownArrow: lt && at, shouldShowUpArrow: ut && rt, maxIndexWidth: st, index: dt, inputValue: zt, onInputChange: (Qt) => {
          n.updateInputValue(S.value, Qt);
        }, onSubmit: Lt, onExit: () => {
          E();
        }, layout: "compact", onOpenEditor: U, canPasteImage: W, onImagePaste: z, pastedContents: H, onRemoveImage: J, extraChromeWidth: 4, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexShrink: 0, children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: Te ? "success" : void 0, children: ["[", Te ? import_chunk_7r4ehpnw.xe.tick : " ", "]", " "] }) }) }) }, String(S.value));
      }
      return (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "column", children: (0, import_chunk_a46xeenj.o)(import_chunk_s73318k8.IIe, { isFocused: He, isSelected: false, shouldShowDownArrow: lt && at, shouldShowUpArrow: ut && rt, onClick: ve(S), children: [!A && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexShrink: 0, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: `${dt}.`.padEnd(st) }) }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexShrink: 0, children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: Te ? "success" : void 0, children: ["[", Te ? import_chunk_7r4ehpnw.xe.tick : " ", "]"] }) }), (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "column", children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: He ? "suggestion" : void 0, children: S.label }), S.description && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "inactive", children: S.description })] })] }) }, String(S.value));
    });
    v[44] = W, v[45] = ve, v[46] = h, v[47] = f, v[48] = A, v[49] = s, v[50] = E, v[51] = z, v[52] = U, v[53] = J, v[54] = u.length, v[55] = H, v[56] = n, v[57] = L, v[58] = Ee, v[59] = he, v[60] = ge, v[61] = Se, v[62] = De, v[63] = ae, v[64] = Oe, v[65] = Ie, v[66] = we, v[67] = le;
  } else he = v[59], ge = v[60], Se = v[61], De = v[62], ae = v[63], Oe = v[64], Ie = v[65], we = v[66], le = v[67];
  let ke;
  if (v[78] !== he || v[79] !== Se || v[80] !== De || v[81] !== ae || v[82] !== Oe) ke = (0, import_chunk_a46xeenj.e)(he, { state: Se, wheel: De, onMorePress: ae, children: Oe }), v[78] = he, v[79] = Se, v[80] = De, v[81] = ae, v[82] = Oe, v[83] = ke;
  else ke = v[83];
  let Ve;
  if (v[84] !== s || v[85] !== b || v[86] !== Y || v[87] !== n || v[88] !== p || v[89] !== q || v[90] !== D || v[91] !== C) Ve = p && b && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { marginTop: 0, gap: 1, onClick: s ? void 0 : (_t) => {
    if (Y(_t)) {
      return;
    }
    b(n.getSelectedValues());
  }, backgroundColor: !s && D && q === "tint" ? import_chunk_6qkpxgbg.XS : void 0, onMouseEnter: () => K(true), onMouseLeave: () => K(false), children: [!s && n.isSubmitFocused ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: "suggestion", inverse: C, children: import_chunk_7r4ehpnw.xe.pointer }) : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { inverse: C, children: " " }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { marginLeft: 3, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: !s && n.isSubmitFocused ? "suggestion" : void 0, bold: true, children: p }) })] }), v[84] = s, v[85] = b, v[86] = Y, v[87] = n, v[88] = p, v[89] = q, v[90] = D, v[91] = C, v[92] = Ve;
  else Ve = v[92];
  let pt;
  if (v[93] !== ge || v[94] !== Ie || v[95] !== we || v[96] !== le || v[97] !== ke || v[98] !== Ve) pt = (0, import_chunk_a46xeenj.o)(ge, { flexDirection: Ie, ref: we, ...le, children: [ke, Ve] }), v[93] = ge, v[94] = Ie, v[95] = we, v[96] = le, v[97] = ke, v[98] = Ve, v[99] = pt;
  else pt = v[99];
  return pt;
}
