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
var chunk_bwtr5psw_exports = {};
__export(chunk_bwtr5psw_exports, {
  Hbn: () => Hbn
});
module.exports = __toCommonJS(chunk_bwtr5psw_exports);
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_g7b7m49w = require("/$bunfs/root/chunk-g7b7m49w.js");
var import_chunk_9rhbtt44 = require("/$bunfs/root/chunk-9rhbtt44.js");
var import_chunk_se72nykz = require("/$bunfs/root/chunk-se72nykz.js");
class Hbn {
  connection;
  openPage;
  store = (0, import_chunk_se72nykz.ps)({ state: "discovering" });
  status = this.store;
  generation = 0;
  accountUuid;
  endpoints;
  signIn;
  constructor(n, t) {
    this.connection = n;
    this.openPage = t;
  }
  start() {
    let n = ++this.generation;
    this.signIn?.cancel(), this.store.setState(() => ({ state: "discovering" })), (0, import_chunk_g7b7m49w.Lqs)(this.connection).then((t) => {
      if (n === this.generation) this.accountUuid = t;
      return (0, import_chunk_9rhbtt44.Hqs)(this.connection.oidc);
    }).then((t) => {
      if (n !== this.generation) return;
      this.endpoints = t;
      let i = new URL(t.authorizationEndpoint).host, e = new URL(t.tokenEndpoint).host;
      this.store.setState(() => ({ state: "ready", signInHost: i, ...e !== i && { tokenHost: e }, gatewayHost: new URL(this.connection.gatewayUrl).host }));
    }, (t) => this.fail(n, t)).catch((t) => this.fail(n, t));
  }
  confirm() {
    let n = this.endpoints, t = this.accountUuid;
    if (this.store.getState().state !== "ready" || n === void 0 || t === void 0) return;
    this.store.setState(() => ({ state: "opening" }));
    let i = this.generation;
    (0, import_chunk_9rhbtt44.Dqs)(this.connection.oidc, n).then(async (e) => {
      if (i !== this.generation) {
        e.tokens.catch(() => {
          return;
        }), e.cancel();
        return;
      }
      this.signIn = e, this.store.setState(() => ({ state: "waiting", authorizationUrl: e.authorizationUrl })), this.openPage(e.authorizationUrl);
      let a = await e.tokens;
      if (i !== this.generation) return;
      this.store.setState(() => ({ state: "saving" }));
      let { signedInAs: o } = await (0, import_chunk_g7b7m49w.Nqs)(this.connection, n, a, Date.now(), t);
      this.generation += 1, (0, import_chunk_cqa9hrgx.u)("hybrid_gateway_idp_sign_in"), this.store.setState(() => ({ state: "done", signedInAs: o }));
    }, (e) => this.fail(i, e)).catch((e) => this.fail(i, e));
  }
  cancel() {
    let { state: n } = this.store.getState();
    if (n === "saving" || n === "done" || n === "cancelled") return;
    if (n !== "error") (0, import_chunk_cqa9hrgx.l)("hybrid_gateway_idp_sign_in", "cancelled");
    this.generation += 1, this.signIn?.cancel(), this.store.setState(() => ({ state: "cancelled" }));
  }
  fail(n, t) {
    if (n !== this.generation) return;
    (0, import_chunk_cqa9hrgx.m)("hybrid_gateway_idp_sign_in", t instanceof import_chunk_9rhbtt44.gY ? t.failure : "unknown"), this.store.setState(() => ({ state: "error", message: t instanceof import_chunk_9rhbtt44.gY ? t.message : "Claude Code could not sign in to your organization's gateway. Try again." }));
  }
}
