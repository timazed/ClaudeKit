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
var chunk_xkd0qe42_exports = {};
__export(chunk_xkd0qe42_exports, {
  Kpa: () => Kpa,
  Vpa: () => Vpa,
  fUs: () => fUs,
  lIe: () => lIe,
  mUs: () => mUs,
  pUs: () => pUs
});
module.exports = __toCommonJS(chunk_xkd0qe42_exports);
var import_chunk_y192p33y = require("/$bunfs/root/chunk-y192p33y.js");
var import_chunk_7e12xj51 = require("/$bunfs/root/chunk-7e12xj51.js");
function Vpa(e) {
  return { steps: [{ id: "check", status: "running", startedAt: e }, { id: "create", status: "pending" }], rerouted: false, folder: false, bundle: null, fallback: null, requestSent: false };
}
function fUs(e, n, a) {
  switch (n.kind) {
    case "move_sending":
      return e.steps.some((t) => t.id === "move") ? e : { ...e, steps: [{ id: "move", status: "running", startedAt: a }, { id: "check", status: "pending" }, ...e.steps.filter((t) => t.id !== "check")] };
    case "move_sent":
      return s(e, "move", "completed", a);
    case "failed":
      return e.steps.reduce((t, { id: r }) => s(t, r, "failed", a), { ...e, fallback: null });
    case "checking": {
      let t = i(e, "check", a);
      return n.folder === true && !t.folder ? { ...t, folder: true } : t;
    }
    case "bundling": {
      if (e.fallback !== null || e.steps.some((r) => r.id === "bundle") || !e.steps.some((r) => r.id === "create" && r.status === "pending")) return e;
      let t = s(e, "check", "completed", a);
      return { ...t, steps: t.steps.flatMap((r) => r.id === "create" ? [{ id: "bundle", status: "running", startedAt: a }, ...n.uploadedBySync === true ? [] : [{ id: "upload", status: "pending" }], r] : [r]), rerouted: n.rerouted, folder: n.folder === true };
    }
    case "bundled": {
      let t = s(e, "bundle", "completed", a);
      return t === e ? e : { ...i(t, "upload", a), bundle: { sizeBytes: n.sizeBytes, scope: n.scope } };
    }
    case "bundle_failed": {
      let t = e.steps.find((l) => l.status === "running" && (l.id === "bundle" || l.id === "upload"));
      if (t === void 0 && e.fallback !== null) return e;
      let r = t === void 0 ? e : s(e, t.id, "failed", a);
      return { ...r, steps: r.steps.filter((l) => !(l.id === "upload" && l.status === "pending")), fallback: n.fallback };
    }
    case "creating":
      return i(s(s(e, "check", "completed", a), "upload", "completed", a), "create", a);
    case "request_sent":
      return e.requestSent ? e : { ...e, requestSent: true };
    case "session_exists":
      return e;
    case "created":
      return s(e, "create", "completed", a);
  }
}
function s(e, n, a, t) {
  return e.steps.some((r) => r.id === n && r.status === "running") ? { ...e, steps: e.steps.map((r) => r.id === n && r.status === "running" ? { ...r, status: a, completedAt: t } : r) } : e;
}
function i(e, n, a) {
  return e.steps.some((t) => t.id === n && t.status === "pending") ? { ...e, steps: e.steps.map((t) => t.id === n && t.status === "pending" ? { ...t, status: "running", startedAt: a } : t) } : e;
}
function lIe(e) {
  let n = e.steps.findLast((a) => a.status !== "pending");
  switch (n?.id) {
    case void 0:
    case "move":
    case "check":
      return "checking";
    case "bundle":
      return "bundling";
    case "upload":
      return "uploading";
    case "create":
      return n.status === "completed" ? "created" : "creating";
  }
}
var d = { all: "with history", current_branch: "current branch only", head: "current history only", squashed: "snapshot without history" };
function pUs(e, n, a) {
  return { label: o(e, n), annotation: `${c(e, n)}${(0, import_chunk_y192p33y.c9t)(e, a)}`, detail: u(e, n) };
}
function u(e, n) {
  return;
}
function o(e, { rerouted: n, folder: a }) {
  let t = e.status === "completed", r = e.status === "failed";
  switch (e.id) {
    case "move":
      if (r) return "Couldn't send to cloud";
      return t ? "Sent to cloud" : "Sending to cloud";
    case "check":
      if (r) return `Stopped checking this ${a ? "directory" : "checkout"}`;
      if (a) return t ? "Checked this directory" : "Checking this directory";
      return t ? "Checked this checkout" : "Checking this checkout";
    case "bundle":
      if (a) return t ? "Packaged this directory" : "Packaging this directory";
      if (n) return t ? "Packaged local changes" : "Packaging local changes";
      return t ? "Packaged this repository" : "Packaging this repository";
    case "upload":
      if (n) return t ? "Uploaded your working tree" : "Uploading your working tree";
      return t ? "Uploaded this repository" : "Uploading this repository";
    case "create":
      if (r) return "Couldn't create cloud session";
      return t ? "Created cloud session" : "Creating cloud session";
  }
}
function c(e, { bundle: n, folder: a }) {
  if (n === null || e.status !== "running" && e.status !== "completed") return "";
  let t = (0, import_chunk_7e12xj51.dn)(n.sizeBytes);
  switch (e.id) {
    case "bundle":
      return e.status === "completed" ? a ? ` \xB7 ${t}` : ` \xB7 ${t}, ${d[n.scope]}` : "";
    case "upload":
      return e.status === "completed" ? ` \xB7 ${t}` : ` ${t}`;
    case "move":
    case "check":
    case "create":
      return "";
  }
}
function mUs(e) {
  let n = (0, import_chunk_y192p33y.RZe)("new");
  return lIe(e) === "created" && !e.steps.some((a) => a.status === "running") ? n.replace(/^Setting up/, "Set up") : `${n}\u2026`;
}
function Kpa(e) {
  return e !== null && e.requestSent ? "Cancelled after the request was sent, so a cloud session may still exist" : "Cancelled before a cloud session was created";
}
