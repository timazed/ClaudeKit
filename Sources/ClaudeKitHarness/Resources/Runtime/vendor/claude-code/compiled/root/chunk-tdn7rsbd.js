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
var chunk_tdn7rsbd_exports = {};
__export(chunk_tdn7rsbd_exports, {
  Aya: () => Aya,
  EWr: () => EWr,
  QYn: () => QYn,
  kWr: () => kWr,
  wWr: () => wWr
});
module.exports = __toCommonJS(chunk_tdn7rsbd_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_2t5dst6n = require("/$bunfs/root/chunk-2t5dst6n.js");
var import_chunk_0pb268nk = require("/$bunfs/root/chunk-0pb268nk.js");
var import_chunk_z8dyhx9v = require("/$bunfs/root/chunk-z8dyhx9v.js");
var import_chunk_s73318k8 = require("/$bunfs/root/chunk-s73318k8.js");
var import_chunk_paah1wya = require("/$bunfs/root/chunk-paah1wya.js");
var import_chunk_wvchre07 = require("/$bunfs/root/chunk-wvchre07.js");
var import_chunk_y0ntnrse = require("/$bunfs/root/chunk-y0ntnrse.js");
var import_chunk_vs99e3g5 = require("/$bunfs/root/chunk-vs99e3g5.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_cak1hmy1 = require("/$bunfs/root/chunk-cak1hmy1.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_xhqwsnqh = require("/$bunfs/root/chunk-xhqwsnqh.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
function C() {
  let t = (0, import_chunk_sng02qpc.k)(1), c;
  if (t[0] === import_chunk_w1d7ygsk.R) c = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { children: ["MCP servers may execute code or access system resources. All tool calls require approval. Learn more in the", " ", (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.En, { url: "https://code.claude.com/docs/en/mcp", children: "MCP documentation" }), "."] }), t[0] = c;
  else c = t[0];
  return c;
}
function wWr({ serverName: t, isPluginServer: c = false, onDone: l }) {
  let { storageV5: n } = (0, import_chunk_3jkk3v3z.Ve)(), i = (0, import_chunk_bs4h6795.I)(false), h = (0, import_chunk_z8dyhx9v.Ns)(import_chunk_2t5dst6n._s), { refusedWithin: u, noteRefused: S, epoch: v } = (0, import_chunk_z8dyhx9v.po)(), p = (0, import_chunk_z8dyhx9v.jf)(v, import_chunk_2t5dst6n._s);
  function E() {
    if (h() || u(import_chunk_2t5dst6n._s)) return S(), true;
    return false;
  }
  async function P(d) {
    if (E()) return;
    if (i.current) return;
    switch (i.current = true, (0, import_chunk_y53wbr8a.a)("tengu_mcp_dialog_choice", { choice: (0, import_chunk_78g0060s.f)(d) }), d) {
      case "yes":
      case "yes_all": {
        let m = false;
        {
          let { error: b } = await (0, import_chunk_2yx6c1y2.fl)("localSettings", (y) => {
            let w = y?.enabledMcpjsonServers || [];
            if (w.includes(t)) return null;
            return { enabledMcpjsonServers: [...w, t] };
          }, void 0, n);
          m ||= b != null;
        }
        if (d === "yes_all") {
          let { error: b } = await (0, import_chunk_2yx6c1y2.Mr)("localSettings", { enableAllProjectMcpServers: true }, void 0, n);
          m ||= b != null;
        }
        (0, import_chunk_f9x2f6cx.kLo)((0, import_chunk_865at33z.iD)(), [t]), l({ persistFailed: m });
        break;
      }
      case "no": {
        let { error: m } = await (0, import_chunk_2yx6c1y2.fl)("localSettings", (b) => {
          let y = b?.disabledMcpjsonServers || [];
          if (y.includes(t)) return null;
          return { disabledMcpjsonServers: [...y, t] };
        }, void 0, n);
        l({ persistFailed: m != null });
        break;
      }
    }
  }
  return (0, import_chunk_a46xeenj.o)(import_chunk_vs99e3g5.Oe, { title: `New MCP server found in this project: ${(0, import_chunk_px0hhsq7.Sqt)(t, c)}`, color: "warning", onCancel: () => void P("no"), exitOnCtrlCD: true, children: [(0, import_chunk_a46xeenj.e)(C, {}), (0, import_chunk_a46xeenj.e)(import_chunk_s73318k8.ct, { options: [{ label: "Use this MCP server", value: "yes" }, { label: "Use this and all future MCP servers in this project", value: "yes_all" }, { label: "Continue without using this MCP server", value: "no" }], onChange: (d) => void P(d), onCancel: () => void P("no"), hideIndexes: true, disablePrintableKeybindings: true, declineValue: "no", refuseInput: E, defaultFocusValue: "no", selectedValue: import_chunk_s73318k8.Do }, p.remountKey)] });
}
(0, import_chunk_bs4h6795.G)();
function kWr({ serverNames: t, pluginServerNames: c, onDone: l }) {
  let { storageV5: n } = (0, import_chunk_3jkk3v3z.Ve)(), i = (0, import_chunk_bs4h6795.I)(false), h = (0, import_chunk_z8dyhx9v.Ns)(import_chunk_2t5dst6n._s), { refusedWithin: u, noteRefused: S } = (0, import_chunk_z8dyhx9v.po)(), v = (0, import_chunk_8bkqeb5d.Xe)(), p = (0, import_chunk_bs4h6795.ye)(() => {
    if (h() || u(import_chunk_2t5dst6n._s)) return S(), true;
    return false;
  }, [h, u, S]);
  async function E(d) {
    if (p()) return;
    if (i.current) return;
    i.current = true;
    let [m, b] = (0, import_chunk_6mfepmbb.Wl)(t, (w) => d.includes(w));
    (0, import_chunk_y53wbr8a.a)("tengu_mcp_multidialog_choice", { approved: m.length, rejected: b.length });
    let y = false;
    if (m.length > 0) {
      let { error: w } = await (0, import_chunk_2yx6c1y2.fl)("localSettings", (A) => ({ enabledMcpjsonServers: (0, import_chunk_4smdap7r.M)([...A?.enabledMcpjsonServers || [], ...m]) }), void 0, n);
      y ||= w != null;
    }
    if ((0, import_chunk_f9x2f6cx.kLo)((0, import_chunk_865at33z.iD)(), m), b.length > 0) {
      let { error: w } = await (0, import_chunk_2yx6c1y2.fl)("localSettings", (A) => ({ disabledMcpjsonServers: (0, import_chunk_4smdap7r.M)([...A?.disabledMcpjsonServers || [], ...b]) }), void 0, n);
      y ||= w != null;
    }
    l({ persistFailed: y });
  }
  let P = (0, import_chunk_bs4h6795.ye)(async () => {
    if (p()) return;
    if (i.current) return;
    i.current = true;
    let { error: d } = await (0, import_chunk_2yx6c1y2.fl)("localSettings", (m) => ({ disabledMcpjsonServers: (0, import_chunk_4smdap7r.M)([...m?.disabledMcpjsonServers || [], ...t]) }), void 0, n);
    l({ persistFailed: d != null });
  }, [p, t, l, n]);
  return (0, import_chunk_a46xeenj.o)(import_chunk_a46xeenj.ae, { children: [(0, import_chunk_a46xeenj.o)(import_chunk_vs99e3g5.Oe, { title: `${t.length} new MCP servers found in this project`, subtitle: "Select any you wish to enable.", color: "warning", onCancel: P, exitOnCtrlCD: true, hideInputGuide: true, children: [(0, import_chunk_a46xeenj.e)(C, {}), (0, import_chunk_a46xeenj.e)(import_chunk_y0ntnrse.z3, { options: t.map((d) => ({ label: (0, import_chunk_px0hhsq7.Sqt)(d, c?.has(d) ?? false), value: d })), defaultValue: v ? [] : t, submitButtonText: "Enable selected", onSubmit: E, onCancel: P, hideIndexes: true, disablePrintableKeybindings: true, refuseInput: p, refuseSubmitFocus: p })] }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { paddingX: 1, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, italic: true, children: (0, import_chunk_a46xeenj.o)(import_chunk_wvchre07.it, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_paah1wya.Ee, { chord: "space", action: "select" }), (0, import_chunk_a46xeenj.e)(import_chunk_cak1hmy1.rs, { action: "confirm:no", context: "Confirmation", fallback: "Esc", description: "reject all" })] }) }) })] });
}
async function EWr(t) {
  if ((0, import_chunk_f9x2f6cx.rE)() || (0, import_chunk_865at33z.Qt)() && (0, import_chunk_0pb268nk.Lr)("mcpAutoDiscovered")) return { pendingServers: [], pluginServerNames: /* @__PURE__ */ new Set() };
  let { serverNames: c, pluginServerNames: l } = await QYn(t);
  return { pendingServers: c.filter((i) => (0, import_chunk_bzyb60p0.$Te)(i) === "pending"), pluginServerNames: l };
}
async function QYn(t) {
  let { servers: c } = (0, import_chunk_bzyb60p0.F_)("project"), l = Object.keys(c), n = new Set(l), i = /* @__PURE__ */ new Set(), u = (0, import_chunk_xhqwsnqh.oNe)((await (0, import_chunk_bzyb60p0.pi)(t)).enabled).filter(import_chunk_xcgcdx61.PK);
  for (let S of u) {
    let v = await (0, import_chunk_bzyb60p0.LQt)(S, [], t);
    if (!v) continue;
    for (let p of Object.keys(v)) {
      if (n.has(p) || i.has(p)) continue;
      l.push(p), i.add(p);
    }
  }
  return { serverNames: l, pluginServerNames: i, rootServers: c };
}
async function Aya({ pendingServers: t, pluginServerNames: c }, l, n) {
  if (t.length === 0) return null;
  let i;
  i = await D(t.map((v) => (0, import_chunk_px0hhsq7.Sqt)(v, c.has(v))), n);
  let h = (v) => {
    x(i, n).catch(() => {
    }).then(() => l(v));
  }, [u, ...S] = t;
  return u !== void 0 && S.length === 0 ? (0, import_chunk_a46xeenj.e)(wWr, { serverName: u, isPluginServer: c.has(u), onDone: h }) : (0, import_chunk_a46xeenj.e)(kWr, { serverNames: t, pluginServerNames: c, onDone: h });
}
async function D(t, c) {
  {
    if (!(0, import_chunk_865at33z.Qt)()) return;
    let l = import_chunk_c203g5kd.s.CLAUDE_JOB_DIR;
    if (!l) return;
    let n = await (0, import_chunk_9e5mdyfk.Is)(l, c);
    if (!n) return;
    let i = t.length, h = (0, import_chunk_7cfjrnwy.O)(i, "server"), u = (0, import_chunk_7cfjrnwy.O)(i, "needs", "need");
    try {
      return await (0, import_chunk_9e5mdyfk.Hf)(l, { ...n, state: "blocked", detail: `${i} new MCP ${h} ${u} approval`, tempo: "blocked", needs: `approve ${i} new project MCP ${h} (${t.join(", ")}) \u2014 attach to respond`, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, c), { state: n.state, tempo: n.tempo, needs: n.needs, detail: n.detail };
    } catch (S) {
      (0, import_chunk_9e5mdyfk.Lu)(S);
    }
  }
  return;
}
async function x(t, c) {
  {
    if (!t || !(0, import_chunk_865at33z.Qt)()) return;
    let l = import_chunk_c203g5kd.s.CLAUDE_JOB_DIR;
    if (!l) return;
    let n = await (0, import_chunk_9e5mdyfk.Is)(l, c);
    if (!n || n.state !== "blocked") return;
    try {
      await (0, import_chunk_9e5mdyfk.Hf)(l, { ...n, ...t, block: void 0, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, c);
    } catch (i) {
      (0, import_chunk_9e5mdyfk.Lu)(i);
    }
  }
}
