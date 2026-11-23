const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __using = (stack, value, async) => {
  if (value != null) {
    if (typeof value !== "object" && typeof value !== "function") __typeError("Object expected");
    var dispose, inner;
    if (async) dispose = value[__knownSymbol("asyncDispose")];
    if (dispose === void 0) {
      dispose = value[__knownSymbol("dispose")];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") __typeError("Object not disposable");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    stack.push([async, dispose, value]);
  } else if (async) {
    stack.push([async]);
  }
  return value;
};
var __callDispose = (stack, error, hasError) => {
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s2, m2, _2) {
    return _2 = Error(m2), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s2, _2;
  };
  var fail = (e) => error = hasError ? new E(e, error, "An error was suppressed during disposal") : (hasError = true, e);
  var next = (it) => {
    while (it = stack.pop()) {
      try {
        var result = it[1] && it[1].call(it[2]);
        if (it[0]) return Promise.resolve(result).then(next, (e) => (fail(e), next()));
      } catch (e) {
        fail(e);
      }
    }
    if (hasError) throw error;
  };
  return next();
};
var chunk_ynbv8e5n_exports = {};
__export(chunk_ynbv8e5n_exports, {
  BXs: () => BXs,
  D4r: () => D4r,
  GTn: () => GTn,
  GXs: () => GXs,
  H4r: () => H4r,
  KTn: () => KTn,
  KXs: () => KXs,
  L4r: () => L4r,
  Qet: () => Qet,
  V2: () => V2,
  VTn: () => VTn,
  VXs: () => VXs,
  WJ: () => WJ,
  WXs: () => WXs,
  aie: () => aie,
  aq: () => aq,
  aqo: () => aqo,
  cHa: () => cHa,
  cqo: () => cqo,
  dqo: () => dqo,
  fHa: () => fHa,
  fqo: () => fqo,
  gW: () => gW,
  gf: () => gf,
  iqo: () => iqo,
  jHt: () => jHt,
  jXs: () => jXs,
  kqe: () => kqe,
  lqo: () => lqo,
  pHa: () => pHa,
  pqo: () => pqo,
  qXs: () => qXs,
  uHa: () => uHa,
  uqo: () => uqo,
  wue: () => wue,
  z$e: () => z$e,
  z2: () => z2,
  zTn: () => zTn,
  zXs: () => zXs
});
module.exports = __toCommonJS(chunk_ynbv8e5n_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_yesjd46y = require("/$bunfs/root/chunk-yesjd46y.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_8hfdvrr1 = require("/$bunfs/root/chunk-8hfdvrr1.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_trwykz8a = require("/$bunfs/root/chunk-trwykz8a.js");
var import_chunk_3grsnd7a = require("/$bunfs/root/chunk-3grsnd7a.js");
var import_chunk_0ha8wex8 = require("/$bunfs/root/chunk-0ha8wex8.js");
var import_chunk_hr2stdq7 = require("/$bunfs/root/chunk-hr2stdq7.js");
var import_chunk_drk264d0 = require("/$bunfs/root/chunk-drk264d0.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_gbskgz33 = require("/$bunfs/root/chunk-gbskgz33.js");
var import_chunk_q2404y26 = require("/$bunfs/root/chunk-q2404y26.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
var import_chunk_pmryp5f3 = require("/$bunfs/root/chunk-pmryp5f3.js");
var import_chunk_060xwhvh = require("/$bunfs/root/chunk-060xwhvh.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_mxhw2w5n = require("/$bunfs/root/chunk-mxhw2w5n.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_4f4ysf31 = require("/$bunfs/root/chunk-4f4ysf31.js");
var import_chunk_tc5xmewh = require("/$bunfs/root/chunk-tc5xmewh.js");
var import_chunk_4yjj7pjs = require("/$bunfs/root/chunk-4yjj7pjs.js");
var import_chunk_4dnx2vkh = require("/$bunfs/root/chunk-4dnx2vkh.js");
var import_chunk_yq00hd9s = require("/$bunfs/root/chunk-yq00hd9s.js");
var import_chunk_nhpsytqr = require("/$bunfs/root/chunk-nhpsytqr.js");
var import_chunk_7jczpc8b = require("/$bunfs/root/chunk-7jczpc8b.js");
var import_chunk_jg3mepas = require("/$bunfs/root/chunk-jg3mepas.js");
var import_chunk_g9n176jp = require("/$bunfs/root/chunk-g9n176jp.js");
var import_chunk_qf73a9we = require("/$bunfs/root/chunk-qf73a9we.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_jar84hn9 = require("/$bunfs/root/chunk-jar84hn9.js");
var import_chunk_0canfdjs = require("/$bunfs/root/chunk-0canfdjs.js");
var import_chunk_ze4kt7fs = require("/$bunfs/root/chunk-ze4kt7fs.js");
var import_chunk_1ek4hhs6 = require("/$bunfs/root/chunk-1ek4hhs6.js");
var import_chunk_fe5esh7d = require("/$bunfs/root/chunk-fe5esh7d.js");
var import_chunk_qp5chy39 = require("/$bunfs/root/chunk-qp5chy39.js");
var import_chunk_yg9g0473 = require("/$bunfs/root/chunk-yg9g0473.js");
var import_chunk_b83x8d52 = require("/$bunfs/root/chunk-b83x8d52.js");
var import_chunk_jhdsf4g3 = require("/$bunfs/root/chunk-jhdsf4g3.js");
var import_chunk_6dfy8crz = require("/$bunfs/root/chunk-6dfy8crz.js");
var import_chunk_a9nnd83v = require("/$bunfs/root/chunk-a9nnd83v.js");
var import_chunk_zsqk76p8 = require("/$bunfs/root/chunk-zsqk76p8.js");
var import_chunk_6h9mds0d = require("/$bunfs/root/chunk-6h9mds0d.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_tfs0ssqe = require("/$bunfs/root/chunk-tfs0ssqe.js");
var import_chunk_d3vfy4gs = require("/$bunfs/root/chunk-d3vfy4gs.js");
var import_chunk_8fkaxt3d = require("/$bunfs/root/chunk-8fkaxt3d.js");
var import_chunk_6hkrqqbp = require("/$bunfs/root/chunk-6hkrqqbp.js");
var import_chunk_z2c6pmpw = require("/$bunfs/root/chunk-z2c6pmpw.js");
var import_chunk_21whhrcv = require("/$bunfs/root/chunk-21whhrcv.js");
var import_chunk_sphs90qq = require("/$bunfs/root/chunk-sphs90qq.js");
var import_chunk_knp99ee7 = require("/$bunfs/root/chunk-knp99ee7.js");
var import_chunk_wx3ay5nf = require("/$bunfs/root/chunk-wx3ay5nf.js");
var import_chunk_qr6brph0 = require("/$bunfs/root/chunk-qr6brph0.js");
var import_chunk_s3mp6vdq = require("/$bunfs/root/chunk-s3mp6vdq.js");
var import_chunk_mzra7agn = require("/$bunfs/root/chunk-mzra7agn.js");
var import_chunk_drmc79tc = require("/$bunfs/root/chunk-drmc79tc.js");
var import_chunk_yegw2jm5 = require("/$bunfs/root/chunk-yegw2jm5.js");
var import_chunk_5dea9071 = require("/$bunfs/root/chunk-5dea9071.js");
var import_chunk_pmap704y = require("/$bunfs/root/chunk-pmap704y.js");
var import_chunk_cpv7yv0r = require("/$bunfs/root/chunk-cpv7yv0r.js");
var import_chunk_41appe38 = require("/$bunfs/root/chunk-41appe38.js");
var import_chunk_wd66nsbc = require("/$bunfs/root/chunk-wd66nsbc.js");
var import_chunk_ed372ykp = require("/$bunfs/root/chunk-ed372ykp.js");
var import_chunk_abbz0fqx = require("/$bunfs/root/chunk-abbz0fqx.js");
var import_chunk_harsxaq1 = require("/$bunfs/root/chunk-harsxaq1.js");
var import_chunk_cc0rj9gh = require("/$bunfs/root/chunk-cc0rj9gh.js");
var import_chunk_z6hn62tj = require("/$bunfs/root/chunk-z6hn62tj.js");
var import_chunk_cvv9kfq3 = require("/$bunfs/root/chunk-cvv9kfq3.js");
var import_chunk_s1btam0h = require("/$bunfs/root/chunk-s1btam0h.js");
var import_chunk_9xt9z453 = require("/$bunfs/root/chunk-9xt9z453.js");
var import_chunk_c4zg4pwc = require("/$bunfs/root/chunk-c4zg4pwc.js");
var import_chunk_bne5t4g3 = require("/$bunfs/root/chunk-bne5t4g3.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_crypto = require("crypto");
var import_fs = require("fs");
var eo = "a working directory of its own is unavailable in a session without a disk";
function no(e) {
  if (e === void 0 || e === null) return;
  if (typeof e !== "string" || e.trim() === "") return "cwd must be a string holding a path";
  return (0, import_chunk_f9x2f6cx.Y)() ? eo : void 0;
}
async function uHa(e) {
  return no(e) ?? (typeof e === "string" && await (0, import_chunk_w578pjby.dte)(e) ? 'cwd must be a local path with no ".." in it, whose every part can be examined' : void 0);
}
(0, import_chunk_adx6804h.B)();
function lqo(e, o, r) {
  if (o !== void 0) return { from: o, displayName: o };
  if ((0, import_chunk_z6hn62tj.Xm)(r)) return { from: r.identity.agentName, displayName: r.identity.agentName };
  return { from: e, displayName: (0, import_chunk_4yjj7pjs.An)(r) ? r.agentType : e };
}
var Yo = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ message: (0, import_chunk_adx6804h.n)().describe("Your full report for your caller") })), Jo = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ success: (0, import_chunk_adx6804h.P)(), message: (0, import_chunk_adx6804h.n)() }));
function Zo(e, o) {
  return { get session() {
    return e.session;
  }, get storageV5() {
    return e.storageV5;
  }, get agentId() {
    return e.agentId;
  }, get taskRegistry() {
    return e.taskRegistry;
  }, get agentLifecycle() {
    return e.agentLifecycle;
  }, get messageQueue() {
    return e.messageQueue;
  }, get messages() {
    return e.messages;
  }, get tools() {
    return e.tools;
  }, get hookCaller() {
    return e.hookCaller;
  }, get hookServesModel() {
    return e.hookServesModel;
  }, get pluginUnnamed() {
    return e.pluginUnnamed;
  }, get toolUseId() {
    return o.toolUseId;
  }, get scriptMarkers() {
    return o.scriptMarkers;
  } };
}
var GTn = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "9bd314a8-dbf1-5d05-aeee-8f21ec501ad2", name: import_chunk_060xwhvh.mu, searchHint: "deliver your final report to the agent that spawned you", backgrounding: "never", maxResultSizeChars: 1e5, alwaysLoad: true, userFacingName() {
  return import_chunk_060xwhvh.mu;
}, get inputSchema() {
  return Yo();
}, get outputSchema() {
  return Jo();
}, isReadOnly() {
  return false;
}, classifierOnly() {
  return { onBlock: "flag" };
}, async description() {
  return import_chunk_6hkrqqbp.U4r;
}, async prompt() {
  return import_chunk_6hkrqqbp.B4r;
}, toAutoClassifierInput(e) {
  return `${import_chunk_6hkrqqbp.W4r}: ${e.message}`;
}, create(e) {
  return { async validateInput(o) {
    if (o.message.trim().length === 0) return { result: false, message: "message must not be empty", errorCode: 9 };
    return { result: true };
  }, async call(o, r) {
    let h = Zo(e, r), k = h.agentId, O = (0, import_chunk_bzyb60p0.JZr)(h.toolUseId), W = es(O);
    if (k !== void 0) to(k, W);
    let L = ko(h);
    if (k === void 0 || L === void 0) return { data: { success: false, message: `Nothing was sent: ${import_chunk_060xwhvh.mu} is not active for this agent. Write your report as plain text instead.` } };
    if ((0, import_chunk_4dnx2vkh.fys)(k, L.recipient)) return oo(k, h.tools);
    let G = (0, import_chunk_trwykz8a.mn)().runReports.get(k)?.asked("completed", L.recipient), E = G && await (0, import_chunk_bzyb60p0.gOn)({ ...G, given: W }, o.message, r.signal), D = ts(h, k);
    if (E?.consumed !== void 0) {
      let ee = ko(h)?.recipient ?? L.recipient;
      if ((0, import_chunk_4dnx2vkh.fys)(k, ee)) return oo(k, h.tools);
      return (0, import_chunk_4dnx2vkh.jWt)({ sender: k, recipient: ee, senderName: D, flagged: to(k, E.verdict), consumed: E.consumed }), ho("Report received.");
    }
    if (E !== void 0 && r.signal.aborted) throw new import_chunk_jv7av99m.Ie();
    let q = E?.text ?? o.message, ve = (0, import_chunk_xfj2cwfv.iT)(lqo(k, h.agentLifecycle.nameOf((0, import_chunk_mzmcvr6c.ro)(k)), h.taskRegistry.get(k)).displayName), g = (0, import_chunk_yq00hd9s.k0)(q).sanitized, X = (0, import_chunk_yesjd46y.ZAt)(await ns(g, h)), T = (0, import_chunk_bzyb60p0.vQt)((0, import_chunk_bzyb60p0.vnt)(k), E?.verdict ?? W), { warning: nn } = T, yn = to(k, T), he = h.taskRegistry.get(k), je = [(0, import_chunk_xfj2cwfv.Rde)(h.messages(), [...(0, import_chunk_4yjj7pjs.An)(he) && he.priorCarriedMarkers || [], ...h.scriptMarkers ?? [], ...(0, import_chunk_bzyb60p0.gHe)(k), ...(0, import_chunk_4yjj7pjs.An)(he) && he.askers ? (0, import_chunk_bzyb60p0.aQ)(k, h.taskRegistry) : []]).trimEnd(), nn ?? ""].filter((ee) => ee !== "").join(`
`), xe = je === "" ? X : `${(0, import_chunk_yesjd46y.Kke)(je)}
${X}`, le = (0, import_chunk_865at33z.Ypn)(xe), $e = (0, import_chunk_yesjd46y.mOo)(le), K = { kind: "peer", from: D, senderTaskId: k, ...ve && { name: ve }, body: le, handback: true, ...h.hookCaller !== void 0 && !h.hookServesModel && { plugin: h.hookCaller }, ...yn && { flagged: true }, ...$e?.note !== void 0 && { handbackNote: $e.note }, ...$e !== void 0 && { handbackReportText: $e.report }, ...h.toolUseId !== void 0 && { handbackToolUseId: h.toolUseId } }, wn = h.taskRegistry.get(k), we = (0, import_chunk_4yjj7pjs.An)(wn) && wn.isBackgrounded ? wn : void 0, oe = we && ((0, import_chunk_bzyb60p0.Meo)(we, h.taskRegistry) || !(0, import_chunk_bzyb60p0.Reo)(L.recipient, h.taskRegistry)) ? (0, import_chunk_f9x2f6cx.ot)() : L.recipient;
    if (oe !== L.recipient) h.taskRegistry.update(k, (ee) => ({ ...ee, handbackRecipient: oe }));
    if ((0, import_chunk_4dnx2vkh.fys)(k, oe)) return oo(k, h.tools);
    let tn = (0, import_chunk_865at33z.Ndt)(D, xe), v = (0, import_chunk_bzyb60p0.rne)(h.messages()), Ce = v.length > 0 ? { toolsUsed: v } : {};
    if (oe === (0, import_chunk_f9x2f6cx.ot)()) {
      let ee = () => h.messageQueue.enqueueReportingAdmission({ mode: "prompt", agentId: (0, import_chunk_f9x2f6cx.ot)(), value: tn, priority: "next", origin: K, skipSlashCommands: true, isMeta: true, skipAttachments: true, ...Ce });
      if ((0, import_chunk_bzyb60p0.$4e)(h)) {
        (0, import_chunk_4dnx2vkh.jWt)({ sender: k, recipient: oe, senderName: D, flagged: yn });
        let A = () => {
          if ((0, import_chunk_bzyb60p0.$4e)(h)) return (0, import_chunk_bzyb60p0.QJ)(A);
          let be = (0, import_chunk_4dnx2vkh.okr)(k);
          if (ee(), !be) (0, import_chunk_4dnx2vkh.Jje)(k);
        };
        (0, import_chunk_bzyb60p0.QJ)(A);
      } else if (!ee().admitted) return { data: { success: false, message: "Nothing was sent: the main conversation did not accept the message." } };
    } else {
      if (!(0, import_chunk_bzyb60p0.u3e)(h.taskRegistry.get(L.recipient))) return { data: { success: false, message: "Nothing was sent: the agent that spawned you is no longer running." } };
      (0, import_chunk_bzyb60p0.Hye)(L.recipient, tn, h.taskRegistry, { origin: K, isMeta: true, ...Ce });
    }
    let on = we && we.askers === void 0 && oe === (0, import_chunk_f9x2f6cx.ot)() ? (0, import_chunk_bzyb60p0.Iyt)(we.ownerAgentId, h.taskRegistry.get(we.ownerAgentId), (0, import_chunk_f9x2f6cx.Se)()) : void 0, J = we?.askers ? (0, import_chunk_bzyb60p0.bye)(we) : [], rn = on && (0, import_chunk_bzyb60p0.Kar)() ? [on] : J.filter((ee) => ee !== oe && ee !== (0, import_chunk_f9x2f6cx.ot)() && (0, import_chunk_bzyb60p0.Ieo)(ee, h.taskRegistry));
    for (let ee of rn) (0, import_chunk_bzyb60p0.Hye)(ee, tn, h.taskRegistry, { origin: K, isMeta: true, ...Ce }), (0, import_chunk_4dnx2vkh.jWt)({ sender: k, recipient: oe, senderName: D, flagged: yn });
    return (0, import_chunk_bzyb60p0.kxn)(k), h.taskRegistry.update(k, (ee) => ({ ...ee, handbackReport: { text: (0, import_chunk_865at33z.Ypn)((0, import_chunk_yq00hd9s.k0)(q, { prependMarker: false }).sanitized), ...nn !== void 0 && { warning: (0, import_chunk_865at33z.Ypn)(nn) }, ...h.toolUseId !== void 0 && { toolUseId: h.toolUseId } } })), ho("Report delivered to your caller.");
  } };
}, mapToolResultToToolResultBlockParam(e, o) {
  return { tool_use_id: o, type: "tool_result", content: [{ type: "text", text: (0, import_chunk_w578pjby._)(e) }] };
}, renderToolUseMessage() {
  return null;
} });
function ho(e) {
  return { data: { success: true, message: e }, ...(0, import_chunk_865at33z.b)("tengu_purring_pine", true) && { endsTurn: true } };
}
function es(e) {
  return e === void 0 ? { review: "cleared" } : { review: e.kind === "blocked" ? "flagged" : e.kind, warning: (0, import_chunk_bzyb60p0.ZNt)(e) };
}
function to(e, { review: o, warning: r }) {
  let h = o === "flagged" || o === "refused";
  if (h) (0, import_chunk_4dnx2vkh.U0e)(e);
  if (r !== void 0) (0, import_chunk_4dnx2vkh.fRe)(e);
  return h;
}
async function ns(e, o) {
  let r = (0, import_chunk_qp5chy39.UQ)(import_chunk_060xwhvh._t, import_chunk_060xwhvh.Hcn);
  if (e.length <= r) return e;
  let h = await (0, import_chunk_qp5chy39.Bq)(e, o.toolUseId ?? `${import_chunk_060xwhvh.mu}-${(0, import_crypto.randomUUID)()}`, (0, import_chunk_mxhw2w5n.bV)(o.session), o.storageV5);
  if ((0, import_chunk_qp5chy39.Wq)(h)) {
    if ((0, import_chunk_7jczpc8b.Bwt)(o.session) !== void 0) return (0, import_chunk_qp5chy39.son)(e, r)?.message ?? e;
    return e;
  }
  return (0, import_chunk_qp5chy39.FSe)(h);
}
function ko(e) {
  if (e.agentId === void 0) return;
  let o = e.taskRegistry.get(e.agentId);
  if (!(0, import_chunk_4yjj7pjs.An)(o) || o.handbackContract !== true || o.handbackRecipient === void 0) return;
  return { recipient: o.handbackRecipient };
}
function oo(e, o) {
  return (0, import_chunk_4dnx2vkh.Pgl)(e), { data: { success: false, message: `Nothing was sent: an earlier report of yours was already delivered (${import_chunk_060xwhvh.mu} delivers one report), so this one did not reach your caller. ${(0, import_chunk_wd66nsbc.bC)(o) && (0, import_chunk_bzyb60p0.Lnt)(e) ? `Use ${import_chunk_bne5t4g3.Ln} to send anything further, then stop.` : "Stop now."}` } };
}
function ts(e, o) {
  return e.agentLifecycle.nameOf((0, import_chunk_mzmcvr6c.ro)(o)) ?? o;
}
var Bt = "ObserverReport";
(0, import_chunk_adx6804h.B)();
var bo = "Send a report to your report target \u2014 the agent you observe, or the coordinating agent that spawned the worker you observe. The target is resolved from your observer pairing \u2014 there is no recipient to name. Use this only when you have something genuinely useful: a mistake about to compound, a missed constraint, prior art the observed agent should see. The expected steady state is silence \u2014 if nothing warrants action, end your turn without calling this.", _o = "Send a report to your report target \u2014 the agent you observe, or the coordinating agent that spawned the worker you observe. The target is resolved from your observer pairing \u2014 there is no recipient to name. Use this only when you have something genuinely useful: a mistake about to compound, a missed constraint, prior art the observed agent should see. The expected steady state is silence \u2014 if nothing warrants action, end your turn without calling this.";
var os = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ report: (0, import_chunk_adx6804h.n)().min(1).describe("The report to deliver to your report target. Be concise and specific.") })), iqo = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "5ede02e8-f720-5cd1-b5a6-653d29862bcc", name: Bt, backgrounding: "never", maxResultSizeChars: 1e3, async description() {
  return bo;
}, async prompt() {
  return _o;
}, get inputSchema() {
  return os();
}, isReadOnly() {
  return false;
}, isEnabled() {
  return true;
}, create(e) {
  return { async checkPermissions(o) {
    return { behavior: "allow", updatedInput: o };
  }, async call(o) {
    let r = e.agentId;
    if (r === void 0) return { data: { success: false, message: "ObserverReport is only available to an observer agent; the main session does not have an observed pairing." } };
    let h = (0, import_chunk_41appe38.eNa)(e.session, r);
    if (!h) return { data: { success: false, message: "Your observer pairing is not armed (stopped, retired, or never installed). The report was not delivered." } };
    let { reportTargetTaskId: k, reportTargetName: O, viaWorkerName: W } = h;
    if (k !== void 0) {
      let q = e.taskRegistry.get(k);
      if (!((0, import_chunk_4yjj7pjs.An)(q) && (q.status === "running" || (0, import_chunk_bzyb60p0.GY)(q)))) return { data: { success: false, message: `The report target (${O}) is not running. The report was not delivered.` } };
    }
    let L = `observer:${h.observerAgentType}`, G = h.observedTaskId === void 0 ? `"${W}"` : `"${W}" [${h.observedTaskId}]`, E = (0, import_chunk_865at33z.Ndt)(L, W === void 0 ? o.report : `(observing worker ${G})
${o.report}`), D = { kind: "observer", from: L, senderTaskId: r };
    if (h.reportOrigins.add(D), k === void 0) (0, import_chunk_bzyb60p0.HO)({ mode: "prompt", agentId: (0, import_chunk_f9x2f6cx.ot)(), value: E, priority: "next", origin: D, skipSlashCommands: true, isMeta: true, skipAttachments: true });
    else (0, import_chunk_bzyb60p0.qlr)(k, E, e.taskRegistry, { origin: D, isMeta: true });
    return { data: { success: true, message: `Report queued for ${k === void 0 ? "the main conversation" : O}.` } };
  } };
}, mapToolResultToToolResultBlockParam(e, o) {
  return { type: "tool_result", tool_use_id: o, content: e.message, is_error: !e.success };
}, renderToolUseMessage(e) {
  return `report: ${e.report}`;
} });
var ss = [import_chunk_bne5t4g3.Ln, import_chunk_060xwhvh.mu, Bt, import_chunk_060xwhvh._t, import_chunk_jar84hn9.xc, import_chunk_xfj2cwfv.bl, import_chunk_9xt9z453.Xo, import_chunk_xfj2cwfv.af, import_chunk_3grsnd7a.Vo, import_chunk_6dfy8crz.Vv];
function aqo(e) {
  return [...e.filter((o) => ss.every((r) => !(0, import_chunk_4vsz8a99.gt)(o, r))), iqo];
}
var So = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Set(), (e) => e.clear());
function cHa(e) {
  for (let o of e) So.add(o);
}
function so(e) {
  return So.has(e);
}
var Ao = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Set(), (e) => e.clear());
function H4r(e) {
  for (let o of e) Ao.add(o);
}
function Ro(e) {
  return Ao.has(e);
}
function To(e) {
  let { mainLoopModel: o, getPlanModeSetting: r } = e.rootToolSurface;
  return (0, import_chunk_865at33z.lI)({ permissionMode: (0, import_chunk_bz1f2qnq.Z)((0, import_chunk_bz1f2qnq._y)(e)).mode, setting: r?.(), mainLoopModel: o });
}
function vo(e, o) {
  let r = e.findLast((E) => E.type === "assistant");
  if (r === void 0) return [];
  let h = e.slice(e.findIndex((E) => (0, import_chunk_knp99ee7.zHt)(E, r))), k = h.filter((E) => (0, import_chunk_knp99ee7.zHt)(E, r)), O = k.flatMap(import_chunk_knp99ee7.egt);
  if (!h.every((E) => E.type === "assistant" ? (0, import_chunk_knp99ee7.zHt)(E, r) : E.type !== "user" || (0, import_chunk_bzyb60p0.NMe)(E) || !(0, import_chunk_0ha8wex8._ze)(E) && E.interruptedByShutdown !== true && O.some((D) => (0, import_chunk_bzyb60p0.jTe)([E]).has(D)))) return [];
  let L = (0, import_chunk_bzyb60p0.jTe)(e), G = (0, import_chunk_bzyb60p0.tJr)(k, new Set(O.filter((E) => !L.has(E))), o, false);
  return k.flatMap((E) => (0, import_chunk_knp99ee7.egt)(E).filter((D) => G.has(D)).map((D) => ({ toolUseId: D, row: E })));
}
function Mo(e, o) {
  let r = e.findLastIndex(import_chunk_bzyb60p0.NMe) + 1;
  return [...e.slice(0, r), ...o(e.slice(r))];
}
function D4r(e) {
  let { refreshTools: o, refreshMcpClients: r } = e.options, h;
  return { ...(0, import_chunk_bz1f2qnq.mvt)(e, (k) => {
    let O = (0, import_chunk_pmryp5f3.yLe)(k), { mode: W } = (0, import_chunk_ze4kt7fs.Ebe)(e.setSessionToolPermissionContext);
    return (0, import_chunk_xcgcdx61.nP)(O.mode, W) === void 0 || W === "dontAsk" && O.mode === "default" ? (0, import_chunk_bzyb60p0.oOn)(O, W) : O;
  }), permissionLayers: e.permissionLayers && [...e.permissionLayers.filter(({ kind: k }) => k !== "allowed_tools" && k !== "permission_mode" && k !== "permission_mode_cap"), ...(0, import_chunk_bz1f2qnq.L2e)(e.permissionLayers)], options: { ...e.options, tools: Oo(e.options.tools, e), refreshTools: o && (() => {
    let k = o();
    if (h?.of !== k) h = { of: k, tools: Oo(k, e) };
    return h.tools;
  }), mcpClients: Co(e.options.mcpClients, e), refreshMcpClients: r && (() => Co(r(), e)) } };
}
function Oo(e, o) {
  return e.filter(({ mcpInfo: r }) => r === void 0 || Po(r.serverName, r.scope, o));
}
function Co(e, o) {
  return e.filter((r) => Po(r.name, r.config.scope, o));
}
function Po(e, o, r) {
  return o === void 0 || o === "dynamic" || o === "claudeai" || [...(0, import_chunk_f9x2f6cx.VB)() ?? [], ...r.getMcp().clients].some((h) => h.name === e && h.config.scope === o && h.type !== "disabled");
}
var wue = new import_chunk_pzzqg6s3.ze(() => ({ typedSinceStop: /* @__PURE__ */ new Set(), closed: /* @__PURE__ */ new Set() }));
function BXs(e) {
  return (e.name === import_chunk_060xwhvh._t || e.name === import_chunk_060xwhvh.Df) && typeof e.input === "object" && e.input !== null && "subagent_type" in e.input && (0, import_chunk_tc5xmewh.p1t)(e.input.subagent_type);
}
function Eo(e, o) {
  let r = /* @__PURE__ */ new Set();
  for (let h of e) if (h.type === "assistant") {
    let k = h.message.content;
    if (h.madeBy === "input" || !Array.isArray(k)) continue;
    for (let O of k) if (O.type === "tool_use" && BXs(O)) r.add(O.id);
  } else if (h.type === "user" && r.size > 0) {
    let k = h.toolUseResult, O = h.message.content;
    if (typeof k !== "object" || k === null || !("agentId" in k) || k.agentId !== o || !Array.isArray(O)) continue;
    if (O.some((W) => W.type === "tool_result" && r.has(W.tool_use_id))) return true;
  }
  return false;
}
async function dqo(e, { origin: o, ...r }, h = false) {
  let k = (0, import_chunk_bzyb60p0.GLt)(e)?.hookOrigin, O = h ? k : (0, import_chunk_yg9g0473.p0n)(k, (0, import_chunk_865at33z.ce)().loopDepths.get(e) ?? 0), W = [...O ?? [], ...o ?? []];
  (0, import_chunk_bzyb60p0.QXr)(o, W);
  let L = await (0, import_chunk_pmap704y.hqo)({ ...r, agents: [], resume: Object.freeze({ agentId: e }), origin: O === void 0 ? o : W });
  if (L.starting !== import_chunk_qr6brph0.K4r && (0, import_chunk_bzyb60p0.Kxn)(r.signal, r.background)) throw L.starting?.[Symbol.dispose](), new import_chunk_jv7av99m.Ie();
  return L;
}
function cqo(e) {
  return `a plugin declined the resume: ${e}`;
}
(0, import_chunk_adx6804h.B)();
var is = "tengu_eager_oasis", as = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ mode: (0, import_chunk_adx6804h.F)(["off", "shadow", "on"]), moves: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.Ae)({ lead: (0, import_chunk_adx6804h.n)().min(1).max(100), model: (0, import_chunk_adx6804h.n)().min(1).max(100), agent: (0, import_chunk_adx6804h.n)().min(1).max(100), effort: (0, import_chunk_adx6804h.F)(import_chunk_8hfdvrr1.ea), leadEfforts: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.F)(import_chunk_8hfdvrr1.ea)).min(1).optional() })).max(20).default([]) }));
function uqo(e, { parentModel: o, callModel: r, effortState: h, inheritedLayers: k, isResume: O }) {
  let W = (0, import_chunk_zmb62hr5.Yt)(o);
  if (!(0, import_chunk_3t7ve0wy.kl)() || e.source !== "built-in" || e.model !== void 0 || r !== void 0 || W !== (0, import_chunk_zmb62hr5.Yt)((0, import_chunk_865at33z.dt)()) || import_chunk_c203g5kd.s.CLAUDE_CODE_SUBAGENT_MODEL !== void 0 || import_chunk_c203g5kd.s.CLAUDE_CODE_SUBAGENT_MODEL_FORCE || (0, import_chunk_abbz0fqx.pDe)() !== void 0 || (0, import_chunk_c4zg4pwc.dl)() || (0, import_chunk_bzyb60p0.nZt)() || (0, import_chunk_865at33z.GZ)()) return;
  let L = (0, import_chunk_865at33z.b)(is, null);
  if (L === null) return;
  let G = as().safeParse(L);
  if (!G.success) {
    (0, import_chunk_cqa9hrgx.l)("subagent_model_move", "malformed");
    return;
  }
  if (G.data.mode === "off") return;
  let E = (0, import_chunk_6hkrqqbp.qTn)(h), D = G.data.moves.find((T) => T.lead === W && T.agent === e.agentType && (T.leadEfforts === void 0 || E !== void 0 && T.leadEfforts.includes(E)));
  if (D === void 0) return;
  let q = (0, import_chunk_zmb62hr5.u4t)((0, import_chunk_zmb62hr5.Qd)(D.model)?.family ?? ""), ve = (0, import_chunk_zmb62hr5.u4t)((0, import_chunk_zmb62hr5.Qd)(W)?.family ?? "");
  if ((0, import_chunk_zhr7rpv7.kd)(D.model) === void 0 || q === void 0 || ve === void 0 || q >= ve) {
    (0, import_chunk_cqa9hrgx.l)("subagent_model_move", "not_known_to_be_lower");
    return;
  }
  if ((0, import_chunk_865at33z.GU)(D.model) || (0, import_chunk_865at33z.Qxl)(D.model) || (0, import_chunk_865at33z.Wxe)(o, D.model) || !(0, import_chunk_sjqze7qg.CCe)(D.model) || !(0, import_chunk_865at33z.wo)(D.model) || (0, import_chunk_865at33z.Dj)(D.model, (0, import_chunk_865at33z.Lj)({ evenInHostedChat: true }))) {
    (0, import_chunk_cqa9hrgx.l)("subagent_model_move", "model_not_usable");
    return;
  }
  let g = G.data.mode === "on", X = e.effort !== void 0 || (0, import_chunk_bz1f2qnq.kh)(k) !== void 0 || import_chunk_c203g5kd.s.CLAUDE_CODE_SUBAGENT_EFFORT !== void 0;
  return { definition: g ? { ...e, model: D.model, ...!X && { effort: D.effort } } : e, event: { enabled: g, is_resume: O, agent_type: (0, import_chunk_78g0060s.Xge)(e), from_model: (0, import_chunk_865at33z.Xt)(W), to_model: (0, import_chunk_865at33z.Xt)(D.model), session_effort: (0, import_chunk_78g0060s.fe)(E) } };
}
function fqo(e) {
  if (e !== void 0) (0, import_chunk_cqa9hrgx.u)("subagent_model_move"), (0, import_chunk_y53wbr8a.a)("tengu_subagent_model_move", e.event);
}
function No(e, o, r, h) {
  let k = { name: import_chunk_060xwhvh._t }, O = (0, import_chunk_ht27b0vz.al)(e).filter((W) => !(0, import_chunk_ht27b0vz.zjt)({ name: import_chunk_bne5t4g3.Ln }, W, e));
  return (0, import_chunk_ht27b0vz.Tr)(e, k) !== null || (0, import_chunk_ht27b0vz.Di)(e, k, O) !== null || (0, import_chunk_ht27b0vz.vZ)(e, import_chunk_060xwhvh._t, o) !== null || ["deny", "ask"].some((W) => (0, import_chunk_ht27b0vz.pu)(e, k, { subagent_type: o, ...r !== void 0 && { model: r }, ...h && { run_in_background: true } }, W) !== null);
}
function WXs(e, o, r, h) {
  let k = e.find((O) => (0, import_chunk_4vsz8a99.gt)(O, import_chunk_060xwhvh._t));
  return k !== void 0 && (0, import_chunk_ht27b0vz.Tr)(o, k) === null && (0, import_chunk_ht27b0vz.Di)(o, k) === null && (0, import_chunk_ht27b0vz.vZ)(o, import_chunk_060xwhvh._t, r) === null && (0, import_chunk_ht27b0vz.Ebo)(o, import_chunk_060xwhvh._t, r) === null && ["deny", "ask"].every((O) => (0, import_chunk_ht27b0vz.pu)(o, k, { subagent_type: r, ...h !== void 0 && { model: h, run_in_background: true } }, O) === null);
}
var ds = "tengu_gleaming_spindle", Fo = "The user pressed Stop, which ended every background agent, you among them. You have now been resumed, so a line above that tells you to stop and wait no longer holds. A tool call that was running then may have run in part or in full, so check before you repeat it. Background commands and agents that you started may have ended, and their reports may be lost.";
function io(e, o) {
  switch (o) {
    case "not_main":
      return `Agent ${e} ended when the user pressed Stop, and was not resumed. Only Claude's own message from the main conversation can resume it. Its work stays undone unless the sender does it or the main conversation resumes the agent.`;
    case "not_live":
      return `Agent ${e} was not resumed: this turn was stopped, or a newer message from the user is waiting. It can be resumed in the turn that answers that message.`;
    case "not_typed":
      return `Agent ${e} ended when the user pressed Stop, and was not resumed. It can be resumed only in answer to a message that the user types in the Claude app (web, desktop or mobile) after the Stop. This turn answers no such message, so its work stays stopped until the user asks for it there.`;
    case "check_failed":
      return `Agent ${e} ended when the user pressed Stop, and was not resumed: the check of whether this turn may resume it failed. Its work stays stopped until the user asks for it.`;
  }
}
var us = "tengu_tender_feather";
function Lo() {
  return !(0, import_chunk_3t7ve0wy.kb)() && import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE !== true && import_chunk_c203g5kd.s.CLAUDE_CODE_ENVIRONMENT_KIND === void 0;
}
function pqo() {
  return !(0, import_chunk_f9x2f6cx.st)() && (0, import_chunk_865at33z.b)(Lo() ? us : ds, false);
}
function jHt() {
  return Lo() && pqo();
}
function Do(e) {
  let o = e.filter((r) => r?.stoppedByUser);
  return o.length > 0 && o.every((r) => r?.sweptByStop === true) && pqo();
}
function fHa(e, o, r, h) {
  let { typedSinceStop: k } = wue.of(e);
  if ([o, ...h].some(({ uuid: O, origin: W }) => O === void 0 && (0, import_chunk_865at33z._a)(W))) k.clear();
  else if (r && o.uuid !== void 0) k.add(o.uuid);
}
function ao(e, o, r) {
  if (r === void 0 || o?.kind !== "coordinator" || o.plugin !== void 0) return "not_main";
  try {
    let h = r();
    if (h === void 0) return "not_live";
    if (jHt()) return;
    let k = (0, import_chunk_865at33z.CNe)(h), O = [];
    if (k?.type === "user") {
      if (k.promptRewritten !== true) O = [k.uuid, ...k.mergedSendUuids ?? []];
    } else if (k?.type === "attachment" && k.attachment.type === "queued_command") {
      let { promptRewritten: L, source_uuid: G } = k.attachment;
      if (L !== true && G !== void 0) O = [G];
    } else if ((0, import_chunk_865at33z.bw)(h)) {
      let L = h.findLast((G) => G.type === "user" && G.isCompactSummary === true);
      O = L === void 0 ? [] : (0, import_chunk_bzyb60p0.drt)(L);
    }
    let { typedSinceStop: W } = wue.of(e);
    return O.length > 0 && O.every((L) => W.has(L)) ? void 0 : "not_typed";
  } catch (h) {
    if (!(0, import_chunk_jv7av99m.Fe)(h)) (0, import_chunk_k449cc64.i)(h);
    return "check_failed";
  }
}
var ls = 2e3;
function lo(e, o) {
  return `its saved state cannot be read (${(0, import_chunk_jv7av99m.w)(e) ?? (0, import_chunk_jv7av99m.kO)(e) ?? "storage error"}), so it cannot be told whether the user stopped it. ${o ? "Send the message again in a moment, or the user" : "The user"} can resume it themselves.`;
}
function pHa(e) {
  if (e instanceof gf) return e;
  let o = e instanceof import_chunk_bzyb60p0.Tne || (0, import_chunk_6mfepmbb.Rz)((0, import_chunk_jv7av99m.w)(e) ?? (0, import_chunk_jv7av99m.kO)(e)), r = (0, import_chunk_jv7av99m.fn)(e) ? lo(e, o) : (0, import_chunk_jv7av99m.d)(e);
  return o ? new z2(r) : new gf(r);
}
function gW(e) {
  return typeof e === "object" && e !== null && "deniedByPlugin" in e && typeof e.deniedByPlugin === "string";
}
var fo = "resumedInline", yt = "resumedInlinePriorCarriedMarkers", wt = "resumedInlineSalvage";
class Wt extends Map {
}
var fs = "Background agents cannot be started in this session right now. Send the message again if you still need this agent: it should then run while you wait, and its report will be that call's result.", Wo = "This agent cannot be resumed in the background in this session. Start a new agent instead.";
function zTn(e) {
  return e.agentId === void 0 && e.innerCall !== true;
}
function cs(e, o) {
  if (e === "auto") return "auto_mode";
  let r = o.findLast((h) => h.type === "user" || h.type === "assistant");
  return r?.type === "assistant" && r.message.stop_reason === "end_turn" && Array.isArray(r.message.content) && (0, import_chunk_knp99ee7.ttt)(r.message.content) ? void 0 : "no_final_text";
}
function z$e(e) {
  return e instanceof Error && fo in e && e[fo] === true;
}
function mo(e, o) {
  let r = e instanceof Error && wt in e ? e[wt] : void 0;
  return r instanceof Wt ? r.get(o) : void 0;
}
function jXs(e, o) {
  return mo(e, o)?.handback;
}
function GXs(e, o) {
  return mo(e, o)?.reviewTools;
}
function zXs(e, o) {
  return mo(e, o)?.definedBy;
}
function VXs(e) {
  let o = e instanceof Error && yt in e ? e[yt] : void 0;
  return Array.isArray(o) ? import_chunk_trwykz8a.Th.filter((r) => o.includes(r)) : import_chunk_trwykz8a.Th;
}
class gf extends Error {
  transcriptMissing;
  constructor(e, o) {
    super(e);
    this.name = "ResumeAgentStateError", this.transcriptMissing = o?.transcriptMissing === true;
  }
}
var uo = "git_worktree_create";
class z2 extends gf {
  constructor(e) {
    super(e);
    this.name = "AgentResumeTransientError";
  }
}
class V2 extends gf {
  constructor(e) {
    super(e);
    this.name = "AgentResumePermanentlyRefusedError";
  }
}
class L4r extends gf {
  constructor(e) {
    super(e);
    this.name = "AgentResumeBarredByRulesError";
  }
}
function VTn(e) {
  return `Agent ${e} was stopped and won't be resumed. Treat its work as cancelled; only launch a new agent if the user explicitly asks.`;
}
class aq extends gf {
  constructor(e) {
    super(e);
    this.name = "AgentStoppedByUserError";
  }
}
class WJ extends gf {
  constructor(e) {
    super(e);
    this.name = "AgentResumeInProgressError";
  }
}
class kqe extends gf {
  constructor(e) {
    super(e);
    this.name = "AgentStillStoppingError";
  }
}
function Ho(e, o) {
  return e.getCommandQueueSnapshot().some((r) => (0, import_chunk_qf73a9we.N8e)(r, o) && (0, import_chunk_qf73a9we.C_o)(r));
}
function aie(e) {
  return Ht(e, "notification");
}
function KXs(e) {
  return Ht(e, "inline");
}
function Io(e, o = import_chunk_w578pjby.Cv) {
  return typeof e === "string" && e !== "" && !(0, import_chunk_z6pfqf6e.pg)(e) && !(0, import_chunk_z6pfqf6e.sa)(e) && !(0, import_chunk_z6pfqf6e.vd)(e) && !(0, import_chunk_z6pfqf6e.dx)(e) && !import_chunk_drmc79tc.$4r.test(e) && (0, import_chunk_w578pjby.ig)(o, e, (0, import_chunk_w578pjby.sy)()) === void 0 ? e : void 0;
}
function KTn(e) {
  return (0, import_chunk_xfj2cwfv.NNe)([{ origin: e.promptOrigin }]), Ht(e, "reply");
}
function qXs(e) {
  return Ht(e, "call");
}
async function Ht(e, o) {
  let { agentId: r } = e, { clientLaunches: h, resumesInFlight: k, stoppedWithNoRecord: O } = (0, import_chunk_trwykz8a.mn)();
  if (h.has(r)) throw new V2(`Agent ${r} was started by this chat's app for one run, so it cannot be continued. Work from its report, if it sent one.`);
  if (k.has(r)) throw new WJ(`Agent ${r} is already running or being resumed`);
  if (k.add(r), e.userInitiated) O.delete(r);
  let W = true, L = () => {
    if (W) {
      if (W = false, k.delete(r), O.get(r) === "written") O.delete(r);
    }
  };
  try {
    return await ms(e, o, L);
  } finally {
    L();
  }
}
class co extends Error {
}
function I(e, ...o) {
  if (e) (0, import_chunk_cqa9hrgx.m)(...o);
}
var Go = { isResume: false, logsRefusals: false, releaseLock: () => {
}, admit: async () => ({ admitted: void 0 }) };
async function jo(e) {
  let { mainLoopModel: o, getPlanModeSetting: r } = e.rootToolSurface;
  return { ...e, options: { ...e.options, mainLoopModel: o, getPlanModeSetting: r }, modelFacts: await (0, import_chunk_bzyb60p0.pne)(To(D4r(e)), e), loopModel: o, availabilityFallback: void 0, permissionLayers: e.permissionLayers?.filter((h) => h.kind !== "model") };
}
async function po({ agentId: e, toolUseContext: o, promptOrigin: r, continueInterruptedTurn: h, waitingToolUse: k, finishesCutRun: O, userInitiated: W, workerPermissionMode: L, isWebFetchLaunch: G, liveTranscript: E, delivery: D, lineage: q, keepsUnansweredCalls: ve }, g) {
  let X = q !== void 0, T = g.releaseLock, { agent: nn, agentDefinitions: yn } = o.getAppState(), he = (0, import_chunk_bz1f2qnq.Z)((0, import_chunk_bz1f2qnq._y)(o)), { taskRegistry: je } = o, xe = he.mode, le = je.get(e), $e = () => (I(g.logsRefusals, "subagent_launch", "subagent_resume_transcript_over_bound"), T(), new V2(`Agent ${e}'s earlier transcript is too large to load, or has a row with a malformed timestamp. Sending the message again will not help. Start a new agent if the work is still needed.`));
  if (!X && (0, import_chunk_bzyb60p0.fro)(e)) throw $e();
  let K = (y) => {
    let U = (0, import_chunk_jv7av99m.Cy)((0, import_chunk_jv7av99m.w)(y) ?? (0, import_chunk_jv7av99m.kO)(y));
    return U && { errno: U };
  }, wn = (y) => (I(g.logsRefusals, "subagent_launch", "subagent_resume_stop_probe_failed", K(y)), T(), (0, import_chunk_bzyb60p0.C2a)(y) ? new z2(lo(y, true)) : new gf(lo(y, false))), we = r?.kind === "observer-activity" || X ? { found: false } : await (0, import_chunk_bzyb60p0.lMn)((0, import_chunk_mzmcvr6c.ro)(e), "stoppedByUser", o.storageV5).then((y) => ({ found: y }), (y) => ({ found: false, err: y })), oe = W || r?.kind === "observer-activity" ? void 0 : import_chunk_jv7av99m.kn, tn = (0, import_chunk_bzyb60p0.Zns)((0, import_chunk_mzmcvr6c.ro)(e)), v = (0, import_chunk_bzyb60p0.aw)((0, import_chunk_mzmcvr6c.ro)(e), o.storageV5, oe), Ce = `Part of agent ${e}'s transcript is missing, so it cannot go on from where it stopped. Start a new agent if the work is still needed.`, on = async () => (await (0, import_chunk_5appeerh.qt)((0, import_chunk_bzyb60p0.Pf)(), ls, "agent resume: transcript flush wait").catch(() => {
  }), (0, import_chunk_bzyb60p0.gCe)((0, import_chunk_mzmcvr6c.ro)(e), o.storageV5, { signal: o.abortController.signal }).catch((y) => {
    if (!X || (0, import_chunk_jv7av99m.Fe)(y)) throw y;
    return null;
  })), J = (0, import_chunk_bzyb60p0.i5)(), rn = g.isResume && (0, import_chunk_f9x2f6cx.Y)() && !X && !(0, import_chunk_4yjj7pjs.An)(le) && J === void 0, ee = (0, import_chunk_f9x2f6cx.Y)() ? v.then((y) => y === null || rn || y.isFork === true && (0, import_chunk_bzyb60p0.ors)(e) ? null : on()) : on(), [Dn, A] = await Promise.all([ee, v.then((y) => y === null && !(0, import_chunk_f9x2f6cx.Y)() && (0, import_chunk_bzyb60p0.UNt)() ? ee.then(() => (tn ||= (0, import_chunk_bzyb60p0.Zns)((0, import_chunk_mzmcvr6c.ro)(e)), (0, import_chunk_bzyb60p0.aw)((0, import_chunk_mzmcvr6c.ro)(e), o.storageV5, oe))) : y)]).catch((y) => {
    if ((0, import_chunk_jv7av99m.Fe)(y)) throw T(), y;
    if ((0, import_chunk_bzyb60p0.fro)(e)) throw $e();
    if (y instanceof import_chunk_bzyb60p0.Tne && y.outcome === "rows_lost") throw I(g.logsRefusals, "subagent_launch", "subagent_resume_transcript_rows_lost"), T(), new V2(Ce);
    if (y instanceof import_chunk_bzyb60p0.Tne && y.outcome === "body_encoded") throw I(g.logsRefusals, "subagent_launch", "subagent_resume_transcript_body_encoded"), T(), new z2(`Agent ${e}'s earlier transcript arrived in an encoding that was not asked for, so it was not read. Send the message again, or start a new agent if that fails too.`);
    throw I(g.logsRefusals, "subagent_launch", "subagent_resume_setup_read_failed", K(y)), T(), pHa(y);
  });
  if (o.abortController.signal.aborted) throw T(), new import_chunk_jv7av99m.Ie();
  if (g.isResume) (0, import_chunk_y53wbr8a.a)("tengu_subagent_resume_sidecar_read", { metadata_found: A !== null, is_fork: A?.isFork === true, prompt_origin_kind: (0, import_chunk_78g0060s.fe)(r?.kind), has_task_record: (0, import_chunk_4yjj7pjs.An)(le), continue_interrupted_turn: h === true, resumer_is_subagent: o.agentId !== void 0, storage_v5: o.storageV5 !== void 0 });
  if (A === null && X) throw new co();
  let be = D === "notification" && J !== void 0 && (0, import_chunk_bzyb60p0.QZr)(J, e), bn = D === "notification" && J !== void 0 && !be;
  if (A === null && (0, import_chunk_f9x2f6cx.Y)()) throw I(g.logsRefusals, "subagent_launch", "subagent_resume_sidecar_missing_diskless"), T(), new V2(`This session has no saved settings for agent ${e}: it never ran here, or they did not survive a restart of the server that runs the session. Start a new agent if the work is still needed.`);
  let rt = no(A?.cwd), It = (0, import_chunk_f9x2f6cx.Y)() && ((A?.worktreePath ?? void 0) !== void 0 || (A?.inheritedWorktreePath ?? void 0) !== void 0 || A?.spawnedWithWorktree === true) ? eo : void 0;
  if (rt !== void 0 || It !== void 0) throw I(g.logsRefusals, "subagent_launch", rt !== void 0 ? "subagent_resume_cwd_refused" : "subagent_resume_worktree_refused"), T(), new V2(rt !== void 0 ? `Cannot resume this agent in the directory its record names: ${rt}. Start a new agent instead.` : `Cannot resume this agent, which was started in a worktree: ${It}. Start a new agent instead.`);
  if (tn && ((A?.worktreePath ?? void 0) !== void 0 || (A?.inheritedWorktreePath ?? void 0) !== void 0 || (A?.cwd ?? void 0) !== void 0)) throw I(g.logsRefusals, "subagent_launch", "subagent_resume_record_from_elsewhere"), T(), new V2("This agent can't be resumed. This session was opened from a file outside Claude Code's own session folder, so the directory saved for the agent can't be trusted. Start a new agent instead.");
  let Ue = (0, import_chunk_trwykz8a.sB)(A?.toolUseId), _n = (0, import_chunk_bzyb60p0.VI)(A?.description), _e = typeof A?.worktreeBranch === "string" && (0, import_chunk_s3mp6vdq.N4r)(A.worktreeBranch) ? A.worktreeBranch : void 0, Bn = typeof A?.name === "string" && import_chunk_bzyb60p0.v_t.test(A.name) && !(0, import_chunk_865at33z.$j)(A.name) ? A.name : void 0, Ne = D === "reply" && Do([le, A]);
  if ("err" in we && !W && (!A?.stoppedByUser || Ne)) throw wn(we.err);
  let x = we.found, { maxBudgetUsd: Le } = o.options, $n = Ne && (Le === void 0 || (0, import_chunk_bzyb60p0.GTe)() < Le) && !x && !wue.of(o.session).closed.has(e), De = $n ? ao(o.session, r, E) : void 0;
  if (De !== void 0) throw (0, import_chunk_cqa9hrgx.l)("subagent_resume_after_stop", De), T(), new aq(io(e, De));
  if ((A?.stoppedByUser || x) && r?.kind !== "observer-activity") {
    if (!W && !X && !$n) throw T(), new aq(VTn(e));
  }
  if (!X && A?.isFork === true && (0, import_chunk_bzyb60p0.ors)(e)) throw I(g.logsRefusals, "subagent_launch", "subagent_resume_fork_dropped"), T(), new V2(Ce);
  if (rn) throw I(g.logsRefusals, "subagent_launch", "subagent_resume_no_rule_diskless"), T(), new V2(`Background agents are switched off in this session, and it no longer tracks agent ${e}, so the agent cannot be resumed. Start a new agent if the work is still needed.`);
  let se = await (0, import_chunk_5dea9071.z4r)((0, import_chunk_mzmcvr6c.ro)(e), o.storageV5), it = "transientRead" in se && se.transientRead ? z2 : gf;
  if (se.status === "malformed") throw I(g.logsRefusals, "subagent_launch", "forked_skill_resume_scoping_invalid"), T(), new it(`Agent ${e} has a malformed forked-skill scoping record; refusing to resume it without the skill's permission scoping.`);
  if (se.status === "diskless") throw I(g.logsRefusals, "subagent_launch", "forked_skill_resume_scoping_diskless"), T(), new gf(`Agent ${e} cannot be checked for a forked-skill scoping record: this diskless session has no storage backend or key for it. Refusing to resume it.`);
  if ((se.status === "absent" || se.status === "absent-but-marked") && (0, import_chunk_4yjj7pjs.An)(le) && le.forkedSkillName !== void 0) throw I(g.logsRefusals, "subagent_launch", "forked_skill_resume_scoping_missing"), T(), new it(`Agent ${e} ran as a forked skill but its scoping record is missing; refusing to resume it without the skill's permission scoping.`);
  let Ge = Dn?.messages.some((y) => "forkedSkill" in y) === true;
  if (se.status === "absent" && Ge) throw I(g.logsRefusals, "subagent_launch", "forked_skill_resume_scoping_missing_rows"), T(), new gf(`Agent ${e} ran as a forked skill but its scoping record is missing; refusing to resume it without the skill's permission scoping.`);
  if (se.status === "absent-but-marked") throw I(g.logsRefusals, "subagent_launch", "forked_skill_resume_scoping_missing_cold"), T(), new it(`Agent ${e} carries a forked-skill provenance marker but its scoping record is missing; refusing to resume it without the skill's permission scoping.`);
  if (se.status === "valid" && (0, import_chunk_4yjj7pjs.An)(le)) {
    if (le.forkedSkillName !== se.scoping.skillName) throw I(g.logsRefusals, "subagent_launch", "forked_skill_resume_scoping_mismatch"), T(), new gf(`Agent ${e} has a forked-skill scoping record that does not match its task record; refusing to resume it.`);
  } else if (se.status === "valid") {
    if (await (0, import_chunk_5dea9071.V4r)((0, import_chunk_mzmcvr6c.ro)(e), o.storageV5) !== se.scoping.skillName) throw I(g.logsRefusals, "subagent_launch", "forked_skill_resume_cold_witness_mismatch"), T(), new gf(`Agent ${e} has a forked-skill scoping record with no matching provenance-marker witness; refusing to resume it on a cold path without a corroborated fork identity.`);
  }
  if (se.status !== "valid") ;
  if (Ge) (0, import_chunk_bzyb60p0.nur)(e);
  let ne = se.status === "valid" ? se.scoping : void 0, an = [], Wn = [], bt, at, ut, St;
  if (ne) {
    let y = await (0, import_chunk_bzyb60p0.Fm)((0, import_chunk_f9x2f6cx.Ed)(), o.storageV5).catch(() => []), U = o.getAppState().mcp.commands.filter((ae) => ae.type === "prompt" && ae.loadedFrom === "mcp"), N = [...(0, import_chunk_bzyb60p0.lne)(y, o.getAppState().mcp.commands), ...U].find((ae) => ae.name === ne.skillName && ae.type === "prompt");
    if (N?.type === "prompt" && N.isKeptUnread === true) throw N.loadDefinition?.().catch(() => {
    }), I(g.logsRefusals, "subagent_launch", "forked_skill_resume_skill_unread"), T(), new z2(`Agent ${e} ran as forked skill ${ne.skillName}, whose file has not been read since a reload kept it; refusing to resume it before it is. Try again shortly.`);
    if (N?.type !== "prompt" || N.context !== "fork" && N.getContext === void 0) throw I(g.logsRefusals, "subagent_launch", "forked_skill_resume_skill_unresolved"), T(), new gf(`Agent ${e} ran as forked skill ${ne.skillName}, which no longer resolves to a fork-capable skill; refusing to resume it without its permission scoping.`);
    let z = (0, import_chunk_tfs0ssqe.wwt)(N);
    if (z !== void 0) throw I(g.logsRefusals, "subagent_launch", "forked_skill_resume_hidden_behind_plugin"), T(), new gf(`Agent ${e} ran as forked skill ${ne.skillName}; refusing to resume it: ${z}`);
    let Ze = await (0, import_chunk_tfs0ssqe.DDe)(N).catch((ae) => {
      throw T(), ae instanceof gf ? ae : new gf((0, import_chunk_jv7av99m.d)(ae));
    });
    if ((0, import_chunk_tfs0ssqe.c9e)(N)) {
      let ae = (0, import_chunk_a9nnd83v.ej)(N);
      throw I(g.logsRefusals, "subagent_launch", ae ? "forked_skill_resume_host_catalog_withheld" : "forked_skill_resume_sync_vetoed"), T(), new gf(ae ? `Agent ${e} ran as forked skill ${ne.skillName}, which your organization's Skills setting currently turns off; refusing to resume it.` : `Agent ${e} ran as forked skill ${ne.skillName}, an account-synced skill that is currently disabled (skills sync turned off or denied by policy); refusing to resume it.`);
    }
    if ((0, import_chunk_tfs0ssqe.tpe)(Ze)) throw (0, import_chunk_tfs0ssqe.qSe)(N, Ze), I(g.logsRefusals, "subagent_launch", "forked_skill_resume_synced_plugin_refused", { reason: (0, import_chunk_78g0060s.f)(Ze) }), T(), new gf(`Agent ${e} ran as forked skill ${ne.skillName}; refusing to resume it: ${(0, import_chunk_jhdsf4g3.Oon)(Ze)}.`);
    an = (0, import_chunk_qebpc5de.$f)(await (0, import_chunk_gbskgz33.vvt)(N).catch((ae) => {
      throw I(g.logsRefusals, "subagent_launch", "forked_skill_resume_allowed_tools_failed"), T(), ae instanceof gf ? ae : new gf((0, import_chunk_jv7av99m.d)(ae));
    })), Wn = (0, import_chunk_qebpc5de.$f)(N.disallowedTools ?? []), bt = N, at = (0, import_chunk_tfs0ssqe.V6)(N), ut = (0, import_chunk_tfs0ssqe.xon)(N), St = (0, import_chunk_sjqze7qg.tDe)(ut) === null ? void 0 : await (0, import_chunk_bzyb60p0.FPn)(N, null);
  }
  let Ut = ne ? ne.frozenCommandDenies ?? o.getAppState().toolPermissionContext.alwaysDenyRules.command ?? [] : void 0, lt = ne ? [...an.length === 0 ? [] : [{ kind: "allowed_tools", allowedTools: an }], ...Wn.length === 0 ? [] : [{ kind: "disallowed_tools", disallowedTools: Wn }]] : [], At = (0, import_chunk_bzyb60p0.aes)(e, A, o), Q = ((0, import_chunk_4yjj7pjs.An)(le) ? le.parentAgentId : void 0) ?? A?.parentAgentId, Ve = (0, import_chunk_865at33z.Kk)(o.agentId, o.agentContext), Hn = Ve !== void 0 && Ve !== Q && !A?.isObserver, ye = Hn ? await jo({ ...o, permissionLayers: o.permissionLayers?.filter((y) => y.kind !== "effort"), pickedEffortModel: void 0 }) : o;
  (0, import_chunk_sphs90qq.JXs)(e, A?.runLimits);
  let In = (0, import_chunk_trwykz8a.mn)().runScopes.get(e), jn = Hn ? D4r(ye) : ye, Rt = In ? In(jn) : jn, Pe = g.isResume ? { ...Rt, ...At.marks } : { ...(0, import_chunk_bz1f2qnq.Uat)(Rt), abortController: o.abortController, toolUseId: o.toolUseId, permissionLayers: [] }, dn = je.get(e), Tt = ((0, import_chunk_4yjj7pjs.An)(dn) ? dn.spawnDepth : A?.spawnDepth) ?? (0, import_chunk_865at33z.oh)(o.agentContext) + 1, H = Dn;
  if (!H) {
    let y = je.getTranscript(e)?.messages;
    if (y && y.length > 0) (0, import_chunk_w578pjby.t)(`[resumeAgentBackground ${e}] disk transcript missing; using ${y.length} in-memory messages mirrored during the run`), H = { messages: gs(y), contentReplacements: [] };
  }
  if (!H && X) H = { messages: [], contentReplacements: [] };
  if (!H) throw I(g.logsRefusals, "subagent_launch", "subagent_resume_transcript_missing"), T(), new gf(`No transcript found for agent ID: ${e}`, { transcriptMissing: true });
  if (H.isCut === true && !bn && !X) throw I(g.logsRefusals, "subagent_launch", "subagent_resume_transcript_cut"), T(), new V2(Ce);
  if ((0, import_chunk_f9x2f6cx.Y)() && !X && !(0, import_chunk_4yjj7pjs.An)(le) && !bn) {
    let { signal: y } = o.abortController, U = H.fetchedRowLinks ?? await (0, import_chunk_bzyb60p0.rrs)(e, y).catch((N) => {
      if (!y.aborted) (0, import_chunk_k449cc64.i)(N);
      return null;
    }) ?? null;
    if (y.aborted) throw T(), new import_chunk_jv7av99m.Ie();
    if ((0, import_chunk_bzyb60p0.fro)(e)) throw $e();
    if (U === null || U.length === 0 && !(0, import_chunk_bzyb60p0.phi)(e)) throw I(g.logsRefusals, "subagent_launch", U === null ? "subagent_resume_transcript_read_failed" : "subagent_resume_transcript_stored_empty"), T(), new z2(`Agent ${e}'s stored transcript could not be read, or is empty. Send the message again, or start a new agent if that fails too.`);
    if (!(0, import_chunk_bzyb60p0.R7o)(U, H.messages.map((N) => N.uuid))) throw I(g.logsRefusals, "subagent_launch", "subagent_resume_transcript_gap"), T(), new V2(Ce);
  }
  (0, import_chunk_bzyb60p0.dyt)(H.messages);
  let ft = h === true && k !== void 0 && (0, import_chunk_knp99ee7.vHa)(H.messages, k.id), xn = h === true && k?.cardAnswer !== void 0 && !H.messages.some((y) => (0, import_chunk_bzyb60p0.jTe)([y]).has(k.id) && !(0, import_chunk_knp99ee7.tJs)(y, k.id)), ct = xn && k !== void 0 && (0, import_chunk_knp99ee7.ktr)(H.messages, k.id) !== void 0, Un = ft || ct;
  if (!Un && !xn) k?.settled();
  let un = O === true && k === void 0 ? vo(H.messages, new Set(o.options.tools.filter((y) => y.requiresUserInteraction?.() === true).map((y) => y.name))) : [], vt = h ? ft || un.length > 0 ? H.messages : (0, import_chunk_knp99ee7.THa)(ct ? k.id : void 0, O === true ? Mo(H.messages, import_chunk_z2c6pmpw.cXt) : (0, import_chunk_z2c6pmpw.cXt)(H.messages), H.messages) : H.messages.map((y) => y.type === "user" && "agentId" in y && y.agentId === e ? (0, import_chunk_0ha8wex8.Ymn)(y) : y), Mt = (0, import_chunk_bzyb60p0.jMn)((0, import_chunk_bzyb60p0.fyt)((0, import_chunk_bzyb60p0.uHe)(vt), { site: "agent_resume" })), Be = (0, import_chunk_bzyb60p0.S5)(ve ? Mt : (0, import_chunk_bzyb60p0.iae)(Mt, Un ? /* @__PURE__ */ new Set([k.id]) : new Set(un.map((y) => y.toolUseId)))), Gn = un.filter((y) => (0, import_chunk_knp99ee7.ktr)(Be, y.toolUseId) !== void 0).map(({ toolUseId: y, row: U }) => (0, import_chunk_bzyb60p0.Me)({ content: [{ type: "tool_result", content: import_chunk_0ha8wex8.dT, is_error: true, tool_use_id: y }], toolUseResult: import_chunk_0ha8wex8.dT, toolDenialKind: "interrupted", sourceToolAssistantUUID: U.uuid })), Sn = [...Be, ...Gn].findLast((y) => y.type === "user" || y.type === "assistant");
  if (h && !Un && !(O === true && Sn !== void 0 && (0, import_chunk_bzyb60p0.NMe)(Sn)) && Be.length > 0 && !(0, import_chunk_z2c6pmpw.B5r)(Be)) return { alreadyCompleted: true, sidecarDescription: _n };
  let Gt = (0, import_chunk_qp5chy39.ico)(o.contentReplacementState, Be, H.contentReplacements), Ke = !A && ((0, import_chunk_4yjj7pjs.An)(dn) && (dn.agentType === import_chunk_bzyb60p0.TZt.agentType || dn.webFetchSavedFiles !== void 0) || G === true || Eo(o.messages, e)) ? import_chunk_bzyb60p0.TZt.agentType : A?.agentType, Re = A?.isFork === true ? void 0 : Ke ? o.options.agentDefinitions.activeAgents.find((y) => y.agentType === Ke) : void 0, te = A?.isFork === true || !Re && A?.isFork === void 0 && A?.agentType === import_chunk_bzyb60p0.zY.agentType, Ot = Ke === import_chunk_bzyb60p0.TZt.agentType && A?.isBuiltIn !== false;
  if (((0, import_chunk_f9x2f6cx.Y)() || so(e) || A === null && (0, import_chunk_bzyb60p0.fhi)() && !Ro(e)) && (!Re || A?.isBuiltIn !== void 0 && A.isBuiltIn !== (0, import_chunk_bzyb60p0.ic)(Re)) && A?.isFork !== true && !Ot && !bn) {
    if (T(), A === null) throw I(g.logsRefusals, "subagent_launch", so(e) ? "subagent_resume_sidecar_missing_held" : "subagent_resume_sidecar_missing_gate_on"), new V2(`This session no longer has the saved settings of agent ${e}, so it cannot be resumed as the type it ran as. Start a new agent if the work is still needed.`);
    throw I(g.logsRefusals, "subagent_launch", (0, import_chunk_f9x2f6cx.Y)() ? "subagent_resume_type_unmatched_diskless" : "subagent_resume_type_unmatched_held"), new z2(`The agent type that agent ${e} ran as is not on this session's list right now, or its name now belongs to a different type. Try once more; if that fails too, start a new agent.`);
  }
  let Rn = Ot ? Re && (0, import_chunk_bzyb60p0.ic)(Re) ? Re : import_chunk_bzyb60p0.TZt : A?.isBuiltIn === false && Ke === import_chunk_bzyb60p0.TZt.agentType ? Re && !(0, import_chunk_bzyb60p0.ic)(Re) ? Re : import_chunk_bzyb60p0.W$ : Re ?? (te ? import_chunk_bzyb60p0.zY : import_chunk_bzyb60p0.W$), We = await (0, import_chunk_bzyb60p0.cHe)(Rn, o.abortController.signal).catch((y) => {
    if (T(), (0, import_chunk_jv7av99m.Fe)(y)) throw y;
    throw I(g.logsRefusals, "subagent_launch", "subagent_resume_plugin_load_threw"), new z2((0, import_chunk_jv7av99m.d)(y));
  });
  if (We === void 0) throw I(g.logsRefusals, "subagent_launch", "subagent_resume_plugin_load_failed"), T(), new gf(`Agent type '${Rn.agentType}' could not be loaded from its plugin, so the agent was not resumed.`);
  if (!X && (0, import_chunk_bzyb60p0.LZt)(We, he)) throw I(g.logsRefusals, "subagent_launch", "subagent_resume_tools_denied"), T(), new gf((0, import_chunk_bzyb60p0.NZt)(We.agentType));
  if (!(X || (await (0, import_chunk_bzyb60p0.hcr)([We], o.agentCall && o, g.isResume ? e : void 0)).length === 1)) throw I(g.logsRefusals, "subagent_launch", "subagent_resume_not_offered"), T(), new gf(`Agent type '${We.agentType}' is not offered in this session.`);
  let Vn = await g.admit({ meta: A, resolvedAgent: We, isResumedFork: te, forkedSkillScoping: ne, sidecarDescription: _n, sidecarName: Bn, backgroundLaunchRule: J, ruleAdmitsWake: be, permissionMode: xe, parentModel: ye.loopModel });
  if ("refused" in Vn) return { refusedAtAdmission: Vn.refused };
  let Tn = (y, U) => {
    if ($n) throw (0, import_chunk_cqa9hrgx.l)("subagent_resume_after_stop", "worktree_gone"), T(), new aq(VTn(e));
    let N = (0, import_chunk_rb36kwbn.ui)(), z = A?.cwd && !(0, import_chunk_w578pjby.g$)(A.cwd) ? A.cwd : (0, import_chunk_18rsj2ts.pe)(), Ze = (0, import_chunk_6h9mds0d.o0)(z), ae = N !== null && Ze.length > 0 && (() => {
      let R = [N.worktreePath, ...(0, import_chunk_6h9mds0d.o0)(N.originalCwd), ...N.liveLaunchAnchor ? [N.liveLaunchAnchor, ...(0, import_chunk_6h9mds0d.o0)(N.liveLaunchAnchor)] : [], import_chunk_21whhrcv.Zet, ...(0, import_chunk_6h9mds0d.o0)(import_chunk_21whhrcv.Zet)];
      return Ze.every((j) => R.some((ge) => (0, import_chunk_6h9mds0d.bE)(j, ge) === "same"));
    })(), Nn = U?.telemetryCode ?? "git_worktree_resume_worktree_gone", S = A?.worktreePath ?? `agent ${e}`;
    if (ae) {
      (0, import_chunk_cqa9hrgx.l)(uo, Nn), (0, import_chunk_w578pjby.t)(`Resumed worktree ${S} ${y}; falling back to ${z} under the session worktree's fences`, { level: "error" });
      return;
    }
    if (U?.terminalOnUncovered === false) throw T(), new z2(`Cannot resume this agent right now: its worktree ${y}, and the fallback directory is not covered by the session's isolation fences. Re-run from a session whose fences cover the agent's directory.`);
    throw I(g.logsRefusals, uo, Nn), T(), new V2(`This agent cannot be resumed: its worktree ${y}, and the fallback directory is not covered by the session's isolation fences.`);
  }, zn = Io(A?.worktreePath), Qe = Io(A?.inheritedWorktreePath), ln = g.isResume && zn !== void 0 && _e === void 0 && !A?.inWorkflowRun && (0, import_chunk_harsxaq1.Dg)() ? await import_chunk_bzyb60p0.qY.get()?.reask(zn, { from: (0, import_chunk_18rsj2ts.pe)(), isolated: { name: (0, import_chunk_xcgcdx61.mHo)(e), for: "agent", agentId: e, base: (0, import_chunk_bzyb60p0.lQ)() }, parentAgentId: o.agentId, asking: { origin: o.hookOrigin, signal: o.abortController.signal } }) : void 0, Ye = ln?.worktreePath ?? zn ?? Qe, Je = Ye ? await import_fs.promises.stat(Ye).then((y) => y.isDirectory() ? Ye : Tn("exists but is not a directory"), (y) => {
    let U = (0, import_chunk_jv7av99m.w)(y);
    if (U === "ENOENT" || U === "ENOTDIR") return Tn("no longer exists");
    throw T(), new z2(`Cannot resume this agent: its worktree could not be examined (${String(U ?? "unknown error")}). Re-run once the directory is accessible.`);
  }) : void 0;
  if (Ye === void 0 && !(0, import_chunk_rb36kwbn.x0l)(e) && (A !== null && A.spawnedWithWorktree === true && A.worktreeCleanlyRemoved !== true && !(A.inheritedWorktreePath !== void 0 && A.parentAgentId !== void 0 && (await (0, import_chunk_bzyb60p0.aw)((0, import_chunk_mzmcvr6c.ro)(A.parentAgentId), o.storageV5).catch((0, import_chunk_bzyb60p0.O4e)("resumeAgentBackground (parent)")))?.worktreeCleanlyRemoved === true) || (0, import_chunk_rb36kwbn.MYi)(e))) Tn("is not recorded for this isolated agent", { telemetryCode: "git_worktree_resume_binding_missing", terminalOnUncovered: (0, import_chunk_rb36kwbn.MYi)(e) });
  let Xe = Je;
  if (Je) {
    let y = (0, import_chunk_f9x2f6cx.Te)(), U = await import_fs.promises.realpath(y).catch(() => y), N = await (0, import_chunk_6h9mds0d.FCe)(Je, (0, import_chunk_6h9mds0d.o0)(y), (0, import_chunk_4smdap7r.M)([U, import_chunk_21whhrcv.Zet, ...(0, import_chunk_6h9mds0d.o0)(import_chunk_21whhrcv.Zet)]), { requireWitnessForSelfOwningPins: true, declineSelfOwningPinUnderLiveRoot: true, isModsCopy: (ln?.copy ?? (0, import_chunk_rb36kwbn.dFe)(Je))?.madeBy === "mod" });
    if (!N.ok) {
      if (T(), N.reason !== "unverifiable" && N.reason !== "pin-is-own-launch-tree") throw I(g.logsRefusals, uo, "git_worktree_create_root_rejected"), (0, import_chunk_w578pjby.t)(`[worktree] refusing to resume parked agent into ${Je} (${N.reason}): ${N.message}`, { level: "error" }), new V2(`This agent cannot be resumed: its worktree was refused (${N.reason}). ${N.message}`);
      throw (0, import_chunk_w578pjby.t)(`[worktree] could not verify parked agent worktree ${Je} this attempt; the resume will retry: ${N.message}`), new z2(`Cannot resume this agent right now: its worktree could not be verified (${N.reason}). Re-run once git can answer.`);
    }
  }
  if (Xe && g.isResume) {
    let y = /* @__PURE__ */ new Date();
    try {
      await import_fs.promises.utimes(Xe, y, y);
    } catch (U) {
      let N = (0, import_chunk_jv7av99m.w)(U);
      if (N === "ENOENT" || N === "ENOTDIR") Xe = Tn("vanished between verification and the resume");
      else throw T(), new z2(`Cannot resume this agent: its worktree could not be touched (${String(N ?? "unknown error")}). Re-run once the directory is accessible.`);
    }
  }
  let qn = A?.cwd && !(0, import_chunk_w578pjby.g$)(A.cwd) ? A.cwd : Xe, Ct = k?.askedInDirectory !== void 0 && Ye === void 0 && (0, import_chunk_wx3ay5nf.qHt)() ? await (0, import_chunk_cc0rj9gh.ndl)((0, import_chunk_cc0rj9gh.dje)(o.session.project?.projectRoot), k.askedInDirectory) : void 0, Kn = o.session.withProject({ cwd: qn ?? Ct ?? (o.session.project === null ? void 0 : (0, import_chunk_18rsj2ts.pe)()) });
  if (Kn.project === null && (0, import_chunk_18rsj2ts.Nz)()) throw I(g.logsRefusals, "subagent_launch", "subagent_resume_no_directory_in_cwd_scope"), T(), new V2("This agent cannot be resumed from here in this session. Do the rest of the task without it.");
  let Pt = A?.effort !== void 0 && (0, import_chunk_k67pwqya.nk)(A.effort) ? A.effort : void 0, Qn = A?.isObserver || te ? void 0 : Pt, Yn = ne?.effort ?? Qn, re = Yn !== void 0 ? { ...We, effort: Yn } : We;
  if (A?.runLimits !== void 0 && !(0, import_chunk_sphs90qq.gqo)(A.runLimits) || A?.requireCanUseTool === true && !(0, import_chunk_trwykz8a.mn)().canUseToolNarrowings.has(e)) throw I(g.logsRefusals, "subagent_launch", "subagent_resume_limits_unknown"), T(), new V2(`Agent ${e} ran under limits this process can't apply, so nothing can run on what it ran under. Start a new agent if the work is still needed.`);
  let me, Mn = false, Jn = false, Xn = false;
  if (te) {
    let y = Q === void 0 ? void 0 : je.get(Q), U = (0, import_chunk_4yjj7pjs.An)(y) && y.agentType === "main-session", N = Q === void 0 ? void 0 : (0, import_chunk_trwykz8a.mn)().runningAgents.get(Q);
    if (N !== void 0 && !U) {
      let z = (0, import_chunk_bz1f2qnq.WG)((0, import_chunk_knp99ee7.Cqo)(N));
      me = (0, import_chunk_bz1f2qnq.c2t)(In?.(z) ?? z), Mn = true;
    } else if (Q !== void 0 && !U && (0, import_chunk_mzmcvr6c.DD)(Q) && Q !== e && q?.has(Q) !== true) try {
      let z = await po({ agentId: Q, toolUseContext: { ...Pe, options: { ...Pe.options, tools: (0, import_chunk_b83x8d52.jne)(o) } }, lineage: /* @__PURE__ */ new Set([...q ?? [], e]) }, { ...Go, logsRefusals: g.logsRefusals });
      if ("meta" in z) me = await (0, import_chunk_knp99ee7.kqo)(Q, z), Mn = true, Jn = z.resumedMessages.length === 0 || !z.isPoolShown;
    } catch (z) {
      if (!(z instanceof co)) {
        if (T(), z instanceof gf || (0, import_chunk_jv7av99m.Fe)(z)) throw z;
        throw I(g.logsRefusals, "subagent_launch", "subagent_resume_fork_parent_refused"), new gf((0, import_chunk_jv7av99m.d)(z));
      }
    }
    if (!Mn) Xn = U || H.isForkOfMainSession === true || (0, import_chunk_4yjj7pjs.An)(le) && le.agentType === import_chunk_060xwhvh.pv && le.parentAgentId === void 0, me = Ve === void 0 ? void 0 : await jo({ ...Pe, options: { ...Pe.options, tools: o.rootToolSurface.tools }, renderedSystemPrompt: void 0 });
  }
  let On = !te || Xn || Mn && !Jn, Et = On ? (me ?? Pe).primitiveToolGrant : /* @__PURE__ */ new Set(), cn = !te ? Pe : me === void 0 ? { ...Pe, primitiveToolGrant: Et } : { ...Pe, getAppState: me.getAppState, primitiveToolGrant: Et, modelFacts: me.modelFacts, loopModel: me.loopModel, options: { ...Pe.options, thinkingConfig: me.options.thinkingConfig, getPlanModeSetting: me.options.getPlanModeSetting }, permissionLayers: [...(0, import_chunk_bz1f2qnq.Lre)(me.permissionLayers) ?? [], ...(0, import_chunk_bz1f2qnq.L2e)(me.permissionLayers), ...g.isResume ? (0, import_chunk_bz1f2qnq.$at)(o.permissionLayers) : [], { kind: "model", mainLoopModel: me.loopModel }] }, Oe = ne ? { ...cn, getAppState: (0, import_chunk_pmryp5f3.Ocn)(cn.getAppState, an, Wn, { replaceCommandRules: true, frozenCommandDenies: Ut }), permissionLayers: lt.length > 0 ? [...cn.permissionLayers ?? [], ...lt] : cn.permissionLayers } : cn, V = me ?? ye, Cn;
  if (te) {
    if (V.renderedSystemPrompt) Cn = V.renderedSystemPrompt;
    else try {
      let y = nn ? yn.activeAgents.find((N) => N.agentType === nn) : void 0, U = await (0, import_chunk_bzyb60p0.eG)((0, import_chunk_q2404y26.wA)(V), V.modelFacts.model);
      Cn = (0, import_chunk_bzyb60p0.Nye)({ mainThreadAgentDefinition: y, toolUseContext: V, customSystemPrompt: V.options.customSystemPrompt, defaultSystemPrompt: U, appendSystemPrompt: V.options.appendSystemPrompt, model: V.modelFacts.model });
    } catch (y) {
      throw I(g.logsRefusals, "subagent_launch", "subagent_resume_fork_prompt_reconstruct_failed"), T(), y instanceof gf ? y : new gf((0, import_chunk_jv7av99m.d)(y));
    }
    if (!Cn) throw I(g.logsRefusals, "subagent_launch", "subagent_resume_fork_prompt_missing"), T(), new gf("Cannot resume fork agent: unable to reconstruct parent system prompt");
  }
  if (r?.kind === "observer-activity" && A?.isObserver !== true) throw I(g.logsRefusals, "subagent_launch", "observer_resume_sidecar_unconfirmed"), T(), new gf(`Observer sidecar for ${e} missing or did not confirm isObserver; refusing delivery`);
  let Nt = V.loopModel, mt = typeof A?.model === "string" && !(0, import_chunk_865at33z.GU)((0, import_chunk_865at33z.jt)(A.model)) ? A.model : void 0, Pn = A?.isObserver ? void 0 : te ? "inherit" : mt, En = A?.isBuiltIn !== true || A.agentType !== re.agentType || A.isObserver || ne !== void 0 ? void 0 : uqo(re, { parentModel: Nt, callModel: Pn, effortState: Oe.getAppState(), inheritedLayers: Oe.permissionLayers, isResume: true });
  re = En?.definition ?? re;
  let Ft = (0, import_chunk_bzyb60p0.pQt)(re, Nt), Zn = await (0, import_chunk_knp99ee7.NF)({ agentDefinition: re, model: Pn, toolUseContext: g.isResume ? Oe : (0, import_chunk_bz1f2qnq.Nre)(Oe, [{ kind: "permission_mode", mode: xe }]), run: g.isResume ? "resume" : "rebuild", detached: true, onModelRestricted: !g.isResume || A?.isObserver ? void 0 : (0, import_chunk_cpv7yv0r.ett)(at ?? re.agentType, o.appendSystemMessage) }), Ee = typeof A?.pickedEffortModel === "string" ? A.pickedEffortModel : void 0, et = te && Ee === void 0 ? null : (0, import_chunk_bzyb60p0.Xza)(Ft, Pn) ? void 0 : Ee, ke = (0, import_chunk_fe5esh7d.spe)(Be, Oe.options)?.systemPrompt, ie = A?.isObserver || ne !== void 0 ? void 0 : (0, import_chunk_6hkrqqbp.j4r)({ agentDefinition: re, isFork: te, modelFacts: Zn, effortState: Oe.getAppState(), pickedEffortModel: et ?? (0, import_chunk_bz1f2qnq.oX)(ye), inheritedLayers: Oe.permissionLayers, recordedBudgetText: te ? (0, import_chunk_6hkrqqbp._Ha)(Be) : ke });
  re = ie?.agentDefinition ?? re;
  let nt = ie === void 0 && ke ? (0, import_chunk_bzyb60p0.Neo)(Zn, void 0, ke) : void 0, pt = A?.isObserver ? (0, import_chunk_xcgcdx61.nP)(L, xe) ?? xe : void 0, pn = jn.options.tools.filter(import_chunk_cvv9kfq3.qf);
  if (!te && !A?.isObserver) await (0, import_chunk_0canfdjs.EBt)(() => o.getAppState().mcp);
  if (!te) {
    let y = (0, import_chunk_b83x8d52.ZI)(o.abortController.signal);
    if (y !== void 0) await y;
  }
  let tt = te ? (0, import_chunk_0canfdjs.m8e)(Xn || X || On && !(0, import_chunk_fe5esh7d.QSe)(Oe.options) ? (0, import_chunk_b83x8d52.jne)(V) : (0, import_chunk_knp99ee7.wqo)((0, import_chunk_b83x8d52.jne)(V), Be, Oe.options)) : (0, import_chunk_knp99ee7.F7t)(o, he, o.getAppState().mcp.tools.concat(pn)), Lt = A?.isObserver ? aqo((0, import_chunk_knp99ee7.KL)(re, (0, import_chunk_knp99ee7.F7t)(o, he, pn), true, false, false, Tt, (0, import_chunk_sjqze7qg.dG)(o).mode).resolvedTools) : tt;
  return { admitted: Vn.admitted, meta: A, backgroundLaunchRule: J, stoppedBesideSidecar: x, liftsSweptStop: $n, sidecarToolUseId: Ue, sidecarDescription: _n, sidecarWorktreeBranch: _e, sidecarName: Bn, forkedSkillScoping: ne, definedBy: bt ?? (Rn === import_chunk_bzyb60p0.W$ && Rn !== Re ? void 0 : re), forkedSkillAttributionName: at, forkedSkillVerificationName: ut, forkedSkillCheckout: St, resumed: At, inheritedContext: ye, grantedContext: jn, provenanceContext: Pe, runToolUseContext: Oe, priorTask: dn, resumedDepth: Tt, transcript: H, resumedMessages: Be, cutCallResults: Gn, keepsWaitingCall: Un, waitsOnCard: xn, endsOnWaitingCall: ft, resumedReplacementState: Gt, isResumedFork: te, isPoolShown: On, forkParentSystemPrompt: Cn, forkQuerySource: te ? (0, import_chunk_qr6brph0.Zve)(re.agentType, (0, import_chunk_bzyb60p0.ic)(re)) : void 0, selectedAgent: re, requestedModel: Pn, modelFacts: Zn, resumedPickedEffortModel: et, modelMove: En, costControls: ie, replayedBudget: nt, replayedSystemPrompt: ke, spawnEffort: Qn, observerMode: pt, workerTools: Lt, resumedWorktreePath: Xe, landPin: Xe === void 0 ? void 0 : ln?.land, resumedCwdOverride: qn, resumedSession: Kn };
}
async function ms({ agentId: e, prompt: o, promptOrigin: r, promptToolsUsed: h, promptToolsFromLoop: k, promptNoticeLengths: O, promptNoticeOwn: W, promptNoticeRunIds: L, promptIsMeta: G, continueInterruptedTurn: E, waitingToolUse: D, finishesCutRun: q, resultsOnly: ve, toolUseContext: g, liveTranscript: X, canUseTool: T, invokingRequestId: nn, parentPromptId: yn, userInitiated: he, suppressOwnerNotification: je, workerPermissionMode: xe, onDeliveryCommitted: le, isWebFetchLaunch: $e }, K, wn) {
  var _stack = [];
  try {
    let we = Date.now(), oe = (0, import_chunk_r3kja8v6.ue)() && ve === true && E !== true;
    if (oe && !Ho(g.messageQueue, (0, import_chunk_mzmcvr6c.ro)(e))) throw new gf(`Agent ${e} has no queued results to wake for.`);
    let tn = (0, import_chunk_bz1f2qnq.Z)((0, import_chunk_bz1f2qnq._y)(g)), { taskRegistry: v } = g, Ce = g.agentId;
    if (Ce !== void 0 && (0, import_chunk_bzyb60p0.FF)(Ce)) throw new kqe("This agent has been stopped and its stop is still completing; it cannot resume other agents.");
    let on = zo(e, v);
    if (on !== void 0) throw new kqe(v.get(e)?.sweptByStop ? `Agent ${e} is still stopping, and can take a message in a few seconds. If it is still stopping then, ${import_chunk_s1btam0h.Ra} ends what is left of its run.` : on);
    let J = v.get(e), rn = 0, ee = Date.now();
    if ((0, import_chunk_4yjj7pjs.An)(J)) {
      let S = false;
      if (v.update(e, (R) => {
        if (R.status === "running" || R.resuming) return R;
        if ((0, import_chunk_r3kja8v6.ue)() && R.finalizing === true && R.finalizingPass !== void 0) return R;
        return S = true, rn = R.userStopCount ?? 0, { ...R, resuming: true };
      }), !S) throw new WJ(`Agent ${e} is already running or being resumed`);
    }
    let Dn = () => {
      v.update(e, (S) => S.resuming ? { ...S, resuming: false } : S);
    }, A = false, be = () => {
      if (Dn(), A) (0, import_chunk_bzyb60p0.vq)((0, import_chunk_mzmcvr6c.ro)(e), { finished: true }, g.storageV5).catch(import_chunk_k449cc64.i);
      (0, import_chunk_bzyb60p0.cfe)(e, v), (0, import_chunk_4yjj7pjs.Qtn)(e, v);
    }, bn;
    const rt = __using(_stack, { [Symbol.dispose]: () => bn?.[Symbol.dispose]() });
    let Ue = await po({ agentId: e, toolUseContext: g, promptOrigin: r, continueInterruptedTurn: E, waitingToolUse: D, finishesCutRun: q, userInitiated: he, workerPermissionMode: xe, isWebFetchLaunch: $e, liveTranscript: X, delivery: K }, { isResume: true, logsRefusals: true, releaseLock: be, admit: async ({ meta: S, resolvedAgent: R, isResumedFork: j, forkedSkillScoping: ge, sidecarDescription: Fn, sidecarName: gn, backgroundLaunchRule: He, ruleAdmitsWake: ht, permissionMode: Qt, parentModel: Dt }) => {
      let kt = He !== void 0 && (ht || K === "reply" && g.toolUseId !== void 0 && (S?.requestShape !== "foreground" || (0, import_chunk_bzyb60p0.lKa)(He, e))) && !(0, import_chunk_jg3mepas.A9)() && !(0, import_chunk_tc5xmewh.yA)(R) ? (0, import_chunk_bzyb60p0.WZt)(He, { toolUseId: g.toolUseId, callerAgentId: g.agentId, signal: g.abortController.signal, resumedAgentId: e }) : void 0, hn = K === "inline" || K === "call" || K === "reply" && ((0, import_chunk_jg3mepas.Yle)() && kt === void 0 || (0, import_chunk_tc5xmewh.yA)(R)), Ko = hn && (K === "call" ? zTn(g) : K === "reply" && (He === void 0 ? zTn(g) && g.hookCaller === void 0 && (0, import_chunk_jg3mepas.Yle)() && ((0, import_chunk_mzra7agn.vY)() || (0, import_chunk_6e68m1dj.Qp)() && (0, import_chunk_865at33z.b)("tengu_floating_waffle", false)) : zTn(g) || g.innerCall !== true && g.isBackgroundAgent !== true && g.agentContext?.agentType === "subagent" && g.agentContext.isBackgroundAgent === false && g.agentContext.isMainSession !== true && (0, import_chunk_jg3mepas.Slt)()));
      if (!hn && He !== void 0 && kt === void 0) throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_resume_background_rule"), be(), new V2(Wo);
      let Jt = Fn ?? "(resumed)", Zt = r?.kind === "observer-activity" ? void 0 : await dqo(e, { tool_use_id: g.toolUseId ?? "", parentModel: Dt, parentAgentId: Ce, signal: g.abortController.signal, origin: g.hookOrigin, agent: R, prompt: E || oe ? "" : o, description: Jt, model: !j && !S?.isObserver && typeof S?.model === "string" ? S.model : void 0, permissionMode: Qt, background: !hn, fork: j, name: gn, cwd: S?.cwd && !(0, import_chunk_w578pjby.g$)(S.cwd) ? S.cwd : void 0 }, ge !== void 0).catch((go) => {
        if (be(), !(0, import_chunk_jv7av99m.Fe)(go)) (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_resume_spawn_chain_failed");
        throw go;
      });
      if (bn = Zt?.starting, Zt?.deny !== void 0) return (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_resume_denied_by_hook"), Dn(), { refused: { agentId: e, description: Jt, deniedByPlugin: cqo(Zt.deny) } };
      return { admitted: { backgroundAdmission: kt, runInline: hn, awaitedByMainTurn: Ko, uiDescription: Jt } };
    } });
    if ("refusedAtAdmission" in Ue) return Ue.refusedAtAdmission;
    if ("alreadyCompleted" in Ue) return v.update(e, (S) => ({ ...S, resuming: false, notified: true, evictAfter: (0, import_chunk_4yjj7pjs.Bss)(S) })), (0, import_chunk_cqa9hrgx.u)("subagent_launch"), { agentId: e, description: Ue.sidecarDescription ?? "(resumed)", outputFile: (0, import_chunk_f9x2f6cx.Y)() ? void 0 : (0, import_chunk_4f4ysf31.cp)(e), alreadyCompleted: true };
    let { admitted: { backgroundAdmission: _n, runInline: _e, awaitedByMainTurn: Bn, uiDescription: Ne }, meta: x, backgroundLaunchRule: Le, stoppedBesideSidecar: $n, liftsSweptStop: De, sidecarToolUseId: se, sidecarDescription: it, sidecarWorktreeBranch: xt, sidecarName: Ge, forkedSkillScoping: ne, definedBy: an, forkedSkillAttributionName: Wn, forkedSkillVerificationName: bt, forkedSkillCheckout: at, resumed: ut, inheritedContext: St, grantedContext: Ut, provenanceContext: lt, runToolUseContext: At, priorTask: Q, resumedDepth: Ve, transcript: Hn, resumedMessages: ye, cutCallResults: In, keepsWaitingCall: jn, waitsOnCard: Rt, endsOnWaitingCall: Pe, resumedReplacementState: dn, isResumedFork: qe, forkParentSystemPrompt: Tt, selectedAgent: H, requestedModel: ft, modelFacts: xn, resumedPickedEffortModel: ct, modelMove: Un, costControls: un, replayedBudget: vt, spawnEffort: Mt, observerMode: Be, workerTools: Gn, resumedWorktreePath: Sn, resumedCwdOverride: Gt, resumedSession: Vt } = Ue, Ke = xn.model, { closed: Re } = wue.of(g.session), te = (0, import_chunk_4yjj7pjs.An)(Q) ? Q.result : void 0, Ot = te?.modelsUsed ?? (te?.resolvedModel ? [te.resolvedModel] : void 0), Rn = (0, import_chunk_4yjj7pjs.An)(Q) ? Q.startTime : we, We = r?.kind === "peer" && !(0, import_chunk_wd66nsbc.bC)(qe || x?.isObserver ? Gn : (0, import_chunk_knp99ee7.KL)(H, Gn, true, false, false, Ve).resolvedTools), zt = (0, import_chunk_bzyb60p0.lQt)(h ?? [], ye, k === true ? "loop" : "notice", e), Vn = zt === void 0 ? [] : [(0, import_chunk_bzyb60p0.lNt)((0, import_chunk_bzyb60p0.Me)((0, import_chunk_bzyb60p0._Jr)(zt)))], Tn = De ? Fo : Le === void 0 ? void 0 : (0, import_chunk_bzyb60p0.dKa)(Le, e), zn = Tn === void 0 ? Vn : [(0, import_chunk_bzyb60p0.lNt)((0, import_chunk_bzyb60p0.Me)({ content: (0, import_chunk_bzyb60p0.Qs)(Tn), isMeta: true, turnCompanion: true })), ...Vn];
    if (qo(e, Ue), x?.warningOwed !== void 0 && (0, import_chunk_4dnx2vkh.pRe)(e) === void 0) (0, import_chunk_bzyb60p0.v2a)(e, x.warningOwed);
    let Qe, Kt = (0, import_chunk_knp99ee7.W_e)(g, e, H.agentType, an);
    if (K === "reply" && Le !== void 0 && !((0, import_chunk_4yjj7pjs.An)(J) && J.retrieved) && x?.reportTaken === void 0 && (0, import_chunk_bzyb60p0.vnt)(e) === void 0 && Kt("completed") === void 0 && zTn(g) && (0, import_chunk_bzyb60p0.cKa)(Le, e, () => {
      let S = cs((0, import_chunk_bz1f2qnq.Z)(g).mode, Hn.messages);
      if (S !== void 0) return S;
      let R = (0, import_chunk_knp99ee7.rtt)(Hn.messages, e, { prompt: o, resolvedAgentModel: Ke, isBuiltInAgent: (0, import_chunk_bzyb60p0.ic)(H), startTime: Rn, agentType: H.agentType, isAsync: true, agentDepth: Ve }, { suppressTelemetry: true });
      if (R.content.length <= (R.harnessNoteCount ?? 0) + (R.harnessTailCount ?? 0)) return "no_final_text";
      Qe = R;
      return;
    }) && Qe !== void 0) return be(), { agentId: e, description: Ne, inlineHandback: { content: Qe.content, harnessNoteCount: Qe.harnessNoteCount, harnessTailCount: Qe.harnessTailCount, harnessSectionHash: Qe.harnessSectionHash, toolsUsed: Qe.toolsUsed, stored: true } };
    let ln = r ? ps(O, W, L, (0, import_chunk_bzyb60p0.Me)({ content: (0, import_chunk_bzyb60p0.uSe)(o, r, { sendMessageToolAbsent: We }), origin: r, isMeta: true })) : (0, import_chunk_bzyb60p0.Me)({ content: G ? (0, import_chunk_bzyb60p0.uSe)(o, void 0, { isMeta: true }) : o, ...G && { isMeta: true } }), Ye = (0, import_chunk_4yjj7pjs.An)(Q) ? Q.webFetchSavedFiles : void 0, Je = (0, import_chunk_tc5xmewh.yA)(H) ? Ye ? { dirs: [...Ye.dirs], paths: [...Ye.paths] } : (0, import_chunk_d3vfy4gs.abe)() : void 0, Xe = { agentId: e, deliveringLoop: g.agentId }, qn = x?.isObserver === true && (r?.kind === "observer-activity" || (0, import_chunk_4yjj7pjs.An)(Q) && Q.isObserver === true);
    if (x?.isObserver === true && !qn && (0, import_chunk_865at33z.gzn)()) (0, import_chunk_cqa9hrgx.m)("agent_intent_forward", "unconfirmed_observer");
    let Ct = he && (x?.stoppedByUser === true || $n || (0, import_chunk_4yjj7pjs.An)(J) && J.stoppedByUser === true), Kn = Ct || he && (0, import_chunk_4yjj7pjs.An)(J) && (J.status === "killed" || J.status === "completed" || J.status === "failed"), Pt = x?.finished === true || (0, import_chunk_4yjj7pjs.An)(J) && (J.status === "completed" || J.status === "failed");
    if (Kn && (0, import_chunk_4yjj7pjs.Rfr)(v.get(e)) === rn) try {
      await (0, import_chunk_bzyb60p0.vq)((0, import_chunk_mzmcvr6c.ro)(e), { revivedAt: ee, ...Pt && { finished: void 0 } }, g.storageV5), A = Pt;
    } catch (S) {
      if ((0, import_chunk_jv7av99m.fn)(S) || (0, import_chunk_jv7av99m.HD)((0, import_chunk_jv7av99m.kO)(S))) (0, import_chunk_w578pjby.t)(`failed to record the revival of ${e}: ${(0, import_chunk_bzyb60p0.KI)(S)}`, { level: "warn" });
      else (0, import_chunk_k449cc64.i)(S);
    }
    if (!E && !oe) (0, import_chunk_865at33z.fRo)(e, ln, "user");
    let Qn;
    if (!E && !qn) try {
      Qn = X?.();
    } catch (S) {
      (0, import_chunk_k449cc64.i)(S), (0, import_chunk_cqa9hrgx.l)("agent_intent_forward", "live_check_failed");
    }
    let Yn = E || qn ? void 0 : (0, import_chunk_865at33z._Ol)(Xe, Qn ?? g.messages, Qn === void 0 ? "snapshot" : "live"), re = Yn?.copies ?? [], me = (0, import_chunk_trwykz8a.mn)().canUseToolNarrowings.get(e), Mn = { ...qe ? { systemPrompt: Tt, parentSystemPrompt: true } : x?.isObserver ? { agentToolScope: H } : void 0, pickedEffortModel: ct }, Jn = x?.launchedWithDefaults === true && !(0, import_chunk_drk264d0.Ey)(lt), Xn = Jn || qe || x?.isObserver || (0, import_chunk_drk264d0.Ey)(lt) ? void 0 : x?.model, On = !x?.isObserver && (x?.requestShape === "foreground" || x?.requestShape === "background") ? x.requestShape : void 0, { onToolPool: Et, reviewTools: cn } = (0, import_chunk_knp99ee7.tTe)(g.options.tools), Oe = { agentDefinition: H, promptMessages: E ? [...ye, ...In] : oe ? [...ye, ...re] : [...ye, ...re, ...zn, ln], turnPrompt: E || oe ? void 0 : (0, import_chunk_bzyb60p0.wu)(ln.message.content) ?? void 0, waitingToolUse: D && (jn || Rt) ? { ...D, tailStripped: !Pe, noteOfLostCall: (S) => (0, import_chunk_bzyb60p0.Me)({ content: `A call of ${D?.toolName ?? "a tool"} that a restart lost was refused. Do not make it again.${S.message ? ` Reason: ${S.message}` : ""}`, isMeta: true }) } : void 0, toolUseContext: At, canUseTool: me ? me(T) : T, handbackOptIn: !(qe || x?.isObserver), handbackTool: GTn, isAsync: true, requestShape: On, requestNonInteractive: !x?.isObserver && typeof x?.requestNonInteractive === "boolean" ? x.requestNonInteractive || (0, import_chunk_f9x2f6cx.Se)() : void 0, preserveToolUseResults: !(0, import_chunk_f9x2f6cx.Se)(), persistedToolResultFiles: Je, querySource: (0, import_chunk_qr6brph0.Zve)(H.agentType, (0, import_chunk_bzyb60p0.ic)(H)), spawnedBySkill: Wn, ...ne !== void 0 && { spawnedByForkedSkill: true, staysInHookCall: true }, model: ft, modelFacts: xn, effort: Mt, override: me ? { ...Mn, requireCanUseTool: true } : Mn, availableTools: Gn, assembleAvailableTools: (S) => (0, import_chunk_knp99ee7.F7t)(g, tn, S), onToolPool: Et, forkContextMessages: void 0, recordedUuids: new Set(ye.map((S) => S.uuid)), compactTranscriptUnavailable: qe, ...(qe || x?.isObserver) && { useExactTools: true }, totalTokensReminderBudget: un ? un.totalTokensBudget : vt, isTotalTokensReminderBudgetOnTopOfStart: un ? un.isBudgetOnTopOfStart : vt !== void 0 && (qe ? (0, import_chunk_bzyb60p0.Myt)() !== "none" : (0, import_chunk_bzyb60p0.Myt)() === "all"), worktreePath: Sn, worktreeBranch: xt, cwd: x?.cwd, launchedWithDefaults: Jn, spawnMode: Be ?? x?.spawnMode, description: it, name: Ge, toolUseId: se, contentReplacementState: dn }, V = v.get(e), Cn = (0, import_chunk_bzyb60p0.RLt)(e, v), Nt = !he && r?.kind !== "observer-activity" && (0, import_chunk_4yjj7pjs.An)(J) && J.status !== "killed" && V?.status === "killed", mt = De && Re.has(e) || (0, import_chunk_4yjj7pjs.An)(V) && V.stoppedByUser && (!he && !(De && V.sweptByStop) || (V.userStopCount ?? 0) !== rn) || r?.kind !== "observer-activity" && Le === void 0 && (0, import_chunk_trwykz8a.mn)().stoppedWithNoRecord.has(e), Pn = De && !mt ? ao(g.session, r, X) : void 0;
    if (Pn !== void 0) throw (0, import_chunk_cqa9hrgx.l)("subagent_resume_after_stop", "changed_in_set_up"), be(), new aq(io(e, Pn));
    if (Nt || mt) throw be(), new aq(mt ? VTn(e) : `Agent ${e} was stopped meanwhile, so this delivery was dropped.`);
    if (oe && !Ho(g.messageQueue, (0, import_chunk_mzmcvr6c.ro)(e))) throw be(), new gf(`Agent ${e} has no queued results to wake for.`);
    let En = _n?.confirm(g.abortController.signal);
    if (En !== void 0) {
      if (be(), En.kind === "aborted") throw new import_chunk_jv7av99m.Ie();
      if (En.kind === "refused") throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_resume_refused_by_rule"), new V2(En.message);
      throw (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_resume_background_closed"), new gf(fs);
    }
    if (!he && (r?.kind === "coordinator" || r?.kind === "peer" && r.handback !== true) && (0, import_chunk_865at33z.b)(import_chunk_060xwhvh.Hkl, false) && No((0, import_chunk_bz1f2qnq.Z)(g), H.agentType, Xn, !_e)) throw be(), (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_resume_permission_rules"), new L4r("This session's permission rules block the Agent tool, this agent's type, its model or a background agent, or require approval for one of them.");
    for (let S of [...re, ...In]) (0, import_chunk_bzyb60p0.TOn)(e, S, v);
    if (!G && !E && !oe) {
      for (let S of zn) (0, import_chunk_bzyb60p0.TOn)(e, S, v);
      (0, import_chunk_bzyb60p0.TOn)(e, (0, import_chunk_zsqk76p8.E5)(r) ? ln : (0, import_chunk_bzyb60p0.Me)({ content: o, origin: r }), v);
    }
    if (le?.(), (0, import_chunk_r3kja8v6.ue)()) (0, import_chunk_trwykz8a.mn)().onSubagentResume?.(ye, (0, import_chunk_mzmcvr6c.ro)(e), g.toolState);
    let Ft = { outputFileReadable: (0, import_chunk_bzyb60p0.q$)((0, import_chunk_q2404y26.wA)(g)), agentId: e, ownerAgentId: (0, import_chunk_f9x2f6cx.ot)(), parentAgentId: x?.parentAgentId, spawnDepth: Ve, launchedWithDefaults: Jn, launchModel: Xn, ...On === "foreground" && { requestShape: On }, description: Ne, prompt: o, ...r?.kind === "task-notification" && { promptIsNotice: true }, model: Ke, selectedAgent: H, taskRegistry: v, toolUseId: g.toolUseId ?? (0, import_chunk_trwykz8a.sB)(V?.toolUseId) ?? se, cwd: Gt ?? (g.agentWorktree !== void 0 ? (0, import_chunk_18rsj2ts.pe)() : void 0) }, Zn = K === "call" && (0, import_chunk_yegw2jm5.M7t)(Le, (0, import_chunk_jg3mepas.Yle)()), Ee = K === "call" ? (0, import_chunk_bzyb60p0.sen)({ ...Ft, parentAbortController: g.abortController, ...(0, import_chunk_yegw2jm5.G4r)(Le, Zn), isDirectCall: !g.innerCall && g.hookCaller === void 0 }) : void 0, et = { moved: false }, ke = Ee !== void 0 ? { agentId: e, abortController: Ee.abortController, outputFile: Ee.outputFile } : (0, import_chunk_bzyb60p0.yHe)({ ...Ft, parentAbortController: _e ? g.abortController : void 0, awaitedByCaller: _e, awaitedByMainTurn: Bn, launchToolUseId: se, forkedSkillName: ne?.skillName, ...r?.kind === "observer-activity" && { isObserver: true }, sessionScratch: g.session.sessionScratch });
    if (_n !== void 0 && !_n.handOver({ agentId: ke.agentId, abortController: ke.abortController })) throw (0, import_chunk_bzyb60p0.XI)(ke.agentId, v, "system", void 0, { lifecycleNotStarted: true }), (0, import_chunk_bzyb60p0.ZL)(ke.agentId, v), (0, import_chunk_cqa9hrgx.m)("subagent_launch", "subagent_resume_background_not_taken"), new V2(Wo);
    if (ut.admit(), Ue.landPin?.(), !oe) (0, import_chunk_bzyb60p0.cLt)(e, { at: "message", origin: r });
    fqo(Un), wn(), bn?.started({ agentId: e, model: Ke });
    let ie = r?.kind === "observer-activity" ? void 0 : (0, import_chunk_bzyb60p0._ne)(g.agentId, v), nt = !(0, import_chunk_4yjj7pjs.An)(V) || V.notified && V.quietlyParked !== true, pt = (0, import_chunk_bzyb60p0.nci)(), pn = (0, import_chunk_4dnx2vkh.hV)(v.get(e));
    if (pt && pn !== void 0) {
      let S = (0, import_chunk_bzyb60p0._ne)(pn.parentAgentId, v), R = (0, import_chunk_4yjj7pjs.An)(V) || K !== "reply" || S === void 0 || (0, import_chunk_bzyb60p0.yZo)(S, e, v) ? pn.ownerAgentId : S, j = g.agentId === void 0 && g.hookCaller === void 0 ? (0, import_chunk_f9x2f6cx.ot)() : ie, ge = K === "reply" && nt && j !== void 0 && j !== e && !(0, import_chunk_bzyb60p0.yZo)(j, e, v), Fn = ge && j !== R, { toolUseId: gn } = g, He = j === (0, import_chunk_f9x2f6cx.ot)() && gn && !g.innerCall ? gn : (0, import_chunk_bzyb60p0.RLt)(g.agentId, v), Qt = gn !== void 0 && (j === R || nt && !(0, import_chunk_bzyb60p0.QTe)(V)) && (pn.parentAgentId === void 0 || Cn !== void 0) ? He : Cn, Dt = (0, import_chunk_4dnx2vkh.kEt)(e), kt = pn.handbackReport?.warning;
      if (Fn && Dt?.flagged) (0, import_chunk_bzyb60p0.TQt)(e, { review: "flagged", warning: kt });
      else if (Fn && Dt?.consumed === void 0) (0, import_chunk_4dnx2vkh.Jje)(e);
      if (v.update(e, (hn) => ({ ...hn, ownerAgentId: R, mainToolUseId: Qt, ...Fn && { askers: (0, import_chunk_4smdap7r.M)([...hn.askers ?? [], j]), waitingNoticeRecipient: void 0 }, ...hn.handbackRecipient !== void 0 && R !== (0, import_chunk_f9x2f6cx.ot)() && (0, import_chunk_4dnx2vkh.kEt)(e) === void 0 && { handbackRecipient: R } })), ge && !_e && j !== (0, import_chunk_f9x2f6cx.ot)() && !(0, import_chunk_f9x2f6cx.Se)()) (0, import_chunk_4yjj7pjs.EH)(j, `agent:${e}`, v);
    }
    if (ie !== void 0 && ie !== e && nt && !pt && !(0, import_chunk_bzyb60p0.yZo)(ie, e, v)) {
      let S, R = !(0, import_chunk_f9x2f6cx.Se)();
      if (v.update(e, (j) => {
        if (j.ownerAgentId !== ie) S = j.ownerAgentId;
        else if (!R || j.handbackRecipient === ie) return j;
        return { ...j, ownerAgentId: ie, ...R && { handbackRecipient: ie } };
      }), R) (0, import_chunk_4yjj7pjs.EH)(ie, `agent:${e}`, v);
      if (S !== void 0) (0, import_chunk_bzyb60p0.qKa)(e, S, v);
      try {
        if (R && S === (0, import_chunk_f9x2f6cx.ot)() && (0, import_chunk_bzyb60p0.QTe)(V) && (0, import_chunk_865at33z.b)("tengu_clever_pillow", true)) {
          (0, import_chunk_bzyb60p0.Ylr)(e, void 0, v, { sentMessage: false });
          let j = g.agentLifecycle.nameOf((0, import_chunk_mzmcvr6c.ro)(ie)) ?? ie, ge = (0, import_chunk_nhpsytqr.Ni)({ taskId: e, summary: (0, import_chunk_hr2stdq7.sn)(`Agent "${V.description}", which was waiting on its own background work, was resumed by another agent (${j}) and now reports to that agent. Do not treat its work as cancelled or relaunch it, and do not count on a notification from it here, even after messaging it.`) });
          (0, import_chunk_bzyb60p0.Oeo)(e, (0, import_chunk_f9x2f6cx.ot)(), () => ({ value: ge })), (0, import_chunk_cqa9hrgx.u)("agent_takeover_notice");
        }
      } catch (j) {
        (0, import_chunk_k449cc64.i)(j), (0, import_chunk_cqa9hrgx.l)("agent_takeover_notice", "delivery_threw");
      }
    }
    try {
      if (ie !== void 0 && ie !== e && nt && (0, import_chunk_4dnx2vkh.hV)(v.get(e))?.parentAgentId === void 0 && !_e && ((0, import_chunk_f9x2f6cx.Se)() || pt || !(0, import_chunk_bzyb60p0.QTe)(V)) && (0, import_chunk_bzyb60p0.Kar)()) {
        let S = g.agentLifecycle.nameOf((0, import_chunk_mzmcvr6c.ro)(ie)) ?? ie, R = (0, import_chunk_nhpsytqr.Ni)({ taskId: e, summary: (0, import_chunk_hr2stdq7.sn)(`Agent "${Ne}" is working again: another agent (${S}) sent it a message after it had stopped`), body: `
<${import_chunk_k449cc64.rA}>You will get its report or a notice when it stops again. Nothing is needed from you.</${import_chunk_k449cc64.rA}>` });
        (0, import_chunk_bzyb60p0.Oeo)(e, (0, import_chunk_f9x2f6cx.ot)(), () => ({ value: R, shouldQuery: false, handbackPointer: true })), (0, import_chunk_cqa9hrgx.u)("agent_sibling_wake_notice");
      }
    } catch (S) {
      (0, import_chunk_k449cc64.i)(S), (0, import_chunk_cqa9hrgx.l)("agent_sibling_wake_notice", "delivery_threw");
    }
    let tt = v.get(e), Lt = (0, import_chunk_4yjj7pjs.An)(tt) && (0, import_chunk_bzyb60p0.vui)(g.agentId, tt.ownerAgentId, v), y = Lt ? (0, import_chunk_wd66nsbc.bC)((0, import_chunk_q2404y26.kLn)(g, (0, import_chunk_b83x8d52.jne)(g))) : (0, import_chunk_4yjj7pjs.An)(tt) ? tt.ownerCanContinueAgents : void 0;
    if (Lt) v.update(e, (S) => S.ownerCanContinueAgents === y ? S : { ...S, ownerCanContinueAgents: y });
    if (Kn || De) g.messageQueue.removeByFilter((S) => S.userStopNotice === true && S.taskId === e, { reason: "superseded_by_resume" });
    if (Kn) {
      let S = v.get(e);
      g.messageQueue.enqueuePendingNotification((0, import_chunk_bzyb60p0.OKa)({ agentId: e, description: Ne, to: (0, import_chunk_bzyb60p0.oen)({ ownerAgentId: (0, import_chunk_4yjj7pjs.An)(S) ? S.ownerAgentId : void 0, keepaliveReason: `agent:${e}`, delivering: true, taskRegistry: v }) }));
    }
    if (De) v.update(e, (S) => ({ ...S, pendingMessages: S.pendingMessages.filter((R) => (0, import_chunk_4yjj7pjs.dot)(S, [R]) || R.origin?.kind === "peer" && R.origin.handback === true) })), (0, import_chunk_cqa9hrgx.u)("subagent_resume_after_stop");
    if (Ct || De) {
      Re.delete(e);
      let S = (ge) => {
        if ((0, import_chunk_jv7av99m.fn)(ge) || (0, import_chunk_jv7av99m.HD)((0, import_chunk_jv7av99m.kO)(ge))) (0, import_chunk_w578pjby.t)(`failed to clear stop marker for ${e}: ${(0, import_chunk_bzyb60p0.KI)(ge)}`, { level: "warn" });
        else (0, import_chunk_k449cc64.i)(ge);
      }, R = (0, import_chunk_4yjj7pjs.Rfr)(V), j = () => (0, import_chunk_4yjj7pjs.Rfr)(v.get(e)) !== R;
      if (!j()) {
        if (await (0, import_chunk_bzyb60p0.nhi)((0, import_chunk_mzmcvr6c.ro)(e), "stoppedByUser", g.storageV5).catch(S), await (0, import_chunk_q7qjcthc.ZR)(() => (0, import_chunk_bzyb60p0.vq)((0, import_chunk_mzmcvr6c.ro)(e), { stoppedByUser: false }, g.storageV5, import_chunk_jv7av99m.kn)).catch(S), j()) await (0, import_chunk_bzyb60p0.aMn)((0, import_chunk_mzmcvr6c.ro)(e), H.agentType, g.storageV5);
      }
    }
    if (je) (0, import_chunk_bzyb60p0.ZL)(ke.agentId, v);
    if (await (0, import_chunk_41appe38.rNa)({ observedTaskId: e, observedDefinition: H, observedName: Ge ?? H.agentType, observedMeta: x ? { observerTaskId: x.observerTaskId, observerTaskIds: x.observerTaskIds, armingPermissionMode: x.armingPermissionMode } : null, toolUseContext: Ut, canUseTool: T }), (0, import_chunk_bzyb60p0.cfe)(e, v), Ge !== void 0 && g.getAppState().agentNameRegistry.get(Ge) === void 0) g.agentLifecycle.registerName(Ge, (0, import_chunk_mzmcvr6c.ro)(e));
    let U = { prompt: o, resolvedAgentModel: Ke, modelsUsed: Ot, isBuiltInAgent: (0, import_chunk_bzyb60p0.ic)(H), startTime: Rn, agentType: H.agentType, isAsync: true, agentDepth: Ve, callerCanContinueAgents: y, source: H.source, pluginId: (0, import_chunk_bzyb60p0.Q4e)(H) ? (0, import_chunk_xcgcdx61.uf)(H.plugin) : void 0, persistedToolResultFiles: Je, cutRun: q ? ye.slice(Math.max(0, ye.findLastIndex((S) => S.type === "user" && S.isMeta !== true && !(0, import_chunk_bzyb60p0.Sm)(S)))) : void 0, spawnedSubagent: (0, import_chunk_4yjj7pjs.An)(Q) ? Q.spawnedSubagent : void 0, priorCarriedMarkers: (0, import_chunk_4smdap7r.M)([...te !== void 0 ? (0, import_chunk_xfj2cwfv.LMl)(te) : [], ...(0, import_chunk_xfj2cwfv.J9)(Hn.messages), ...import_chunk_trwykz8a.Th.filter((S) => o.includes(S)), ...(0, import_chunk_4yjj7pjs.An)(Q) && Q.priorCarriedMarkers || []]) };
    if (U.priorCarriedMarkers.length > 0) v.update(e, (S) => ({ ...S, priorCarriedMarkers: U.priorCarriedMarkers }));
    let N = _e && K !== "inline" && g.innerCall !== true && g.hookCaller === void 0 && g.agentContext?.agentType === "subagent" && g.agentContext.isBackgroundAgent === false && !(0, import_chunk_865at33z.iPr)(g) ? g.agentContext.backgroundMove : void 0, z = { agentId: e, parentAgentId: g.agentId, depth: Ve, ...(0, import_chunk_trwykz8a.mn)().spawnedByMainThread.has(e) && { spawnedByMainThread: true }, parentSessionId: (0, import_chunk_wtm85h0y.cD)(), agentType: "subagent", subagentName: H.agentType, displayName: Ge, isAsync: true, isBuiltIn: (0, import_chunk_bzyb60p0.ic)(H), invokingRequestId: nn, invocationKind: "resume", invocationEmitted: false, parentPromptId: yn, isBackgroundAgent: !Bn, ...N !== void 0 && { backgroundMove: { spawner: N, spawnerWaits: true } }, ...K === "call" && { reapsShellsUnlessMoved: true }, ...(0, import_chunk_865at33z.CX)(g.agentContext) }, Ze = r?.kind === "observer-activity" ? () => {
    } : v.takeConcurrencySlot(), Nn = (_e ? import_chunk_865at33z.qAl : import_chunk_865at33z.Qme)(import_chunk_865at33z.N1, z, () => (0, import_chunk_18rsj2ts.k6e)(Vt.project, () => (0, import_chunk_knp99ee7.j_e)({ taskId: ke.agentId, abortController: ke.abortController, makeStream: (S, R, j) => (0, import_chunk_knp99ee7.VL)({ ...Oe, session: Vt, override: { ...Oe.override, agentId: (0, import_chunk_mzmcvr6c.ro)(ke.agentId), agentContext: z, abortController: ke.abortController }, onCacheSafeParams: S, onQueryProgress: R, onStreamTokenEstimate: j, ...Le !== void 0 && _e && !Bn && { canShowPermissionPrompts: false } }), metadata: { ...U, agentContext: z, pickedEffortModel: ct }, definedBy: an, description: Ne, toolUseContext: St, taskRegistry: v, agentIdForCleanup: e, reviewTools: cn, enableSummarization: (0, import_chunk_f9x2f6cx.nVe)() || ((0, import_chunk_8fkaxt3d.W5e)() || qe || (0, import_chunk_bzyb60p0.ZUe)()) && !(0, import_chunk_f9x2f6cx.Se)(), getWorktreeResult: async () => {
      let S = (0, import_chunk_9e5mdyfk.Wnn)([...(0, import_chunk_rb36kwbn.UX)()].find((ge) => ge.agentId === e)?.copy), R = (0, import_chunk_rb36kwbn.dFe)(Sn), j = R?.madeBy === "mod" ? (0, import_chunk_9e5mdyfk.HCe)(R) : xt;
      return Sn ? { worktreePath: Sn, ...j !== void 0 && { worktreeBranch: j }, ...S && { inPlace: S } } : { ...S && { inPlace: S } };
    }, shouldNotifyOwner: K === "call" ? () => et.moved : _e ? () => false : void 0, reviewInlineHandoff: K !== "inline" && _e, onTerminalSuccess: ne ? () => {
      let S = ne.skillName, R = `:${S}`;
      if ((0, import_chunk_f9x2f6cx.XEe)().has(R)) return;
      (0, import_chunk_f9x2f6cx.zOe)(S, S, "", null);
      let j = (0, import_chunk_sjqze7qg.tDe)(bt ?? S);
      if (j) g.applyAttributionOp({ kind: "recordVerification", method: j, checkout: at });
    } : x?.restartResumes ? () => {
      if (v.get(e)?.status === "completed" && !(0, import_chunk_bzyb60p0.Oyt)(e, v)) (0, import_chunk_bzyb60p0.vq)((0, import_chunk_mzmcvr6c.ro)(e), { restartResumes: 0 }, g.storageV5).catch(import_chunk_k449cc64.i);
    } : void 0, onRunSettled: Ze })));
    if (Yn !== void 0) (0, import_chunk_865at33z.hOl)(Xe, Yn);
    if ((0, import_chunk_cqa9hrgx.u)("subagent_launch"), _e) try {
      if (Ee === void 0) await Nn;
      else if ((0, import_chunk_yegw2jm5.D7t)({ outcome: await (0, import_chunk_yegw2jm5.H7t)(Nn, Ee.backgroundSignal, Zn), registration: Ee, agentContext: z, wait: et, ownerAgentId: (0, import_chunk_f9x2f6cx.ot)(), taskRegistry: v, sessionScratch: g.session.sessionScratch, agentTask: { startWorkerCheckinForBackgroundedAgent: import_chunk_bzyb60p0.ien, backgroundAgentTask: import_chunk_bzyb60p0.ZTe, hasAgentChildKeepalive: import_chunk_bzyb60p0.jie } })) return { agentId: e, description: Ne, outputFile: Ee.outputFile, movedRunEnded: Nn.catch(import_chunk_k449cc64.i) };
      let S = v.get(e), R = (0, import_chunk_4yjj7pjs.An)(S) ? S.result : void 0;
      return { agentId: e, description: Ne, outputFile: ke.outputFile, inlineHandback: { content: R?.content ?? [], harnessNoteCount: R?.harnessNoteCount, harnessTailCount: R?.harnessTailCount, harnessSectionHash: R?.harnessSectionHash, toolsUsed: R?.toolsUsed, handback: R?.handback } };
    } catch (S) {
      let R = S, j = K === "reply" ? Kt((0, import_chunk_jv7av99m.Fe)(S) ? "stopped" : "failed") : void 0;
      if (g.abortController.signal.aborted) (0, import_chunk_knp99ee7.eTe)(j);
      else if (j !== void 0) R = await (0, import_chunk_knp99ee7.uMe)(S, j, g.abortController.signal);
      if (R instanceof Error) {
        Object.defineProperty(R, fo, { value: true });
        let ge = yt in R ? R[yt] : void 0, Fn = Array.isArray(ge) ? ge : [];
        Object.defineProperty(R, yt, { value: import_chunk_trwykz8a.Th.filter((ht) => U.priorCarriedMarkers?.includes(ht) === true || Fn.includes(ht)), configurable: true });
        let gn = wt in R ? R[wt] : void 0, He = gn instanceof Wt ? gn : new Wt();
        He.set(e, { handback: (0, import_chunk_4dnx2vkh.B0e)(v.get(e), e), reviewTools: cn(), definedBy: an }), Object.defineProperty(R, wt, { value: He });
      }
      throw R;
    } finally {
      if (z.backgroundMove ??= {}, z.backgroundMove.moved = true, Ee?.cancelAutoBackground?.(), Ee?.detachParentAbortRelay(), !et.moved) {
        if ((0, import_chunk_trwykz8a.mn)().agentBackgroundSignalResolvers.delete(e), !(0, import_chunk_bzyb60p0.jie)(e, v) && !(0, import_chunk_bzyb60p0.Oyt)(e, v)) (0, import_chunk_4dnx2vkh.Jje)(e);
        v.update(e, (S) => ({ ...S, notified: true, ...!(0, import_chunk_bzyb60p0.jie)(e, v) && !(0, import_chunk_bzyb60p0.QTe)(S) && { askers: void 0 }, evictAfter: (0, import_chunk_4yjj7pjs.Bss)(S) }));
      }
    }
    return Nn.finally(() => D?.settled()).catch(import_chunk_k449cc64.i), { agentId: e, description: Ne, outputFile: ke.outputFile };
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
function ps(e, o, r, h) {
  return e === void 0 ? h : { ...h, joinedNoticeLengths: e, joinedNoticeOwn: o, joinedNoticeRunIds: r };
}
function zo(e, o) {
  return (0, import_chunk_bzyb60p0.FF)(e) || !(0, import_chunk_4yjj7pjs.kH)(e) && (0, import_chunk_ed372ykp.$o)(o.get(e)?.status ?? "running") ? `Agent ${e} is still stopping \u2014 its previous run was stopped but has not exited. Re-run ${import_chunk_s1btam0h.Ra} on it or wait for it to exit before resuming.` : void 0;
}
async function Qet(e, o, r, h) {
  if ((0, import_chunk_bzyb60p0.P6l)(e)) return { refusal: `agent ${e} has not started its loop yet: its first turn.start hooks are still running. Try again after they finish, from outside those hooks.`, isRetryable: true };
  let k = (0, import_chunk_trwykz8a.mn)().runningAgents.get(e);
  if (k !== void 0) {
    let L;
    try {
      L = await (0, import_chunk_bzyb60p0.aw)((0, import_chunk_mzmcvr6c.ro)(e), o.storageV5, import_chunk_jv7av99m.kn);
    } catch (q) {
      return xo(q);
    }
    if ((0, import_chunk_trwykz8a.mn)().runningAgents.get(e) !== k) return await Qet(e, o, r, h);
    let G = Uo(e, L, k);
    if (G !== void 0) return { refusal: G };
    let E = (0, import_chunk_bz1f2qnq.WG)((0, import_chunk_knp99ee7.Cqo)(k)), D = o.agentCall ? E : (0, import_chunk_bz1f2qnq.c2t)(E);
    return D.messages.length === 0 ? { refusal: `this session cannot read agent ${e}'s conversation` } : { context: D, canUseTool: k.canUseTool, isRestored: false };
  }
  if (!(0, import_chunk_mzmcvr6c.DD)(e)) return { refusal: `no agent ${e} in this session` };
  let O = o.taskRegistry.get(e);
  if ((0, import_chunk_4yjj7pjs.An)(O) && (O.status === "running" || O.status === "pending")) return { refusal: `agent ${e} has not started its loop yet`, isRetryable: true };
  let W = zo(e, o.taskRegistry);
  if (W !== void 0) return { refusal: W, isRetryable: true };
  try {
    let L = await po({ agentId: e, toolUseContext: o, keepsUnansweredCalls: h }, Go);
    if (!("meta" in L)) return { refusal: `agent ${e} could not be rebuilt` };
    let { meta: G, resumedMessages: E, resumedWorktreePath: D } = L, q = o.taskRegistry.get(e);
    if ((0, import_chunk_trwykz8a.mn)().runningAgents.has(e) || (0, import_chunk_4yjj7pjs.An)(q) && (q.status === "running" || q.status === "pending")) return await Qet(e, o, r, h);
    if ((0, import_chunk_4yjj7pjs.An)(q) && q.stoppedByUser) return { refusal: VTn(e) };
    if (G === null) return { refusal: `this session has no readable record of agent ${e}, so a mod can run nothing under it. Start a new agent if the work is still needed.` };
    let ve = Uo(e, G);
    if (ve !== void 0) return { refusal: ve };
    if (E.length === 0) return { refusal: `this session cannot read agent ${e}'s conversation` };
    if ((0, import_chunk_1ek4hhs6.Ysn)(E), D !== void 0) {
      let g = /* @__PURE__ */ new Date();
      await import_fs.promises.utimes(D, g, g);
    }
    return qo(e, L), { context: await (0, import_chunk_knp99ee7.kqo)(e, L, o.agentCall !== void 0), canUseTool: r, isRestored: true };
  } catch (L) {
    return xo(L);
  }
}
function qo(e, { transcript: o, resumedMessages: r, isResumedFork: h }) {
  if ((0, import_chunk_f9x2f6cx.en)().record((0, import_chunk_g9n176jp.rM)(r, void 0, false)), (0, import_chunk_1ek4hhs6.yyr)(r)) (0, import_chunk_f9x2f6cx.en)().record([import_chunk_pmryp5f3.vu]);
  if ((0, import_chunk_bzyb60p0.SMn)(e, o.dataFlow ?? "none", r, [], o.dataFlowLoadedFrom), h) (0, import_chunk_f9x2f6cx.en)().markIncomplete(e, import_chunk_f9x2f6cx.jWl);
}
function xo(e) {
  if ((0, import_chunk_jv7av99m.Fe)(e)) throw e;
  let o = pHa(e);
  return { refusal: o.message, ...o instanceof z2 && { isRetryable: true } };
}
function Uo(e, o, r) {
  if ((0, import_chunk_trwykz8a.mn)().clientLaunches.has(e)) return `agent ${e} was started by this chat's app for one run, and a mod runs nothing under it`;
  if (o?.takesNoHooks === true || r?.isHookable === false) return `agent ${e}'s run takes no hooks`;
  if (o?.taskKind === "in_process_teammate" || r?.context.agentContext.agentType === "teammate") return `agent ${e} is a teammate, and a mod runs nothing under one`;
  if (o?.isObserver === true) return `agent ${e} is an observer`;
  if (o?.workflowPhase !== void 0 || o?.inWorkflowRun === true || r?.context.spawnedByWorkflowRunId !== void 0) return `agent ${e} belongs to a workflow run`;
  return;
}
function gs(e) {
  return e.map((o) => o.type === "user" && o.isMeta !== true && o.origin?.kind === "coordinator" && typeof o.message.content === "string" ? { ...o, isMeta: true, message: { ...o.message, content: (0, import_chunk_865at33z.QRo)(o.message.content) } } : o);
}
