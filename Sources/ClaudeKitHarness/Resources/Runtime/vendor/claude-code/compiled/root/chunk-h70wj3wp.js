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
var chunk_h70wj3wp_exports = {};
__export(chunk_h70wj3wp_exports, {
  Amo: () => Amo,
  RIi: () => RIi,
  Sin: () => Sin,
  Uyr: () => Uyr,
  ncl: () => ncl,
  rcl: () => rcl
});
module.exports = __toCommonJS(chunk_h70wj3wp_exports);
var import_crypto = require("crypto");
var a = { id: "claude-code-release-signing-key", spkiBase64: "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAp28rSV5I8HmK8CK9GixBUZR/gtJxeOCsRXO4EJiej40jzBmQA3cWXGosVO82ZfFsRKVTtMC5iB/HH9sxjncrmYNWGroJNbx29m/FgYQBgkCXT4AfFl6rnnXqRGLZOerj/4AqE4yQ1GZbhBgR55Z7ro0ieKK8RHYUspBKAFHyWRhCCz6THW6YRbf0p/hG/08TOY6Sj3cJ7/AEoTRf9ZmVNX1k0KvbUSiVGpGY9OIHWgxRJUF2pArU4o/hk+sqGAgEUh8Bjvjwvz6+quLXPg+y0Y8Ugb1Fg6BUppam/zydYY/Q/+yNjnuF154gD1jEeeir8R5czs6zUHSbo2yXUpAsIdWYo5End8vGsluVmFExnUWm/fTVMGoM5Wm3v1VRepMydEnJ+atz4oQdmPQcKNAip5GJO2uyk++xFr9CpKvlR5jral92toYV/m+mur3va8ydamWBo/qG7/wt0sdS81IwH6lcu0SQ39rgKD+bdoPLv05EqVMYTFRI2QZEsWGYTMs0DOrfCIJFH50qyD0x4sWw1gEWeG3jDgY8cj2StZz+zjqzUd05CibcCzEAGm1EQg5y9D40tIsAU1OI7bpgQ9V0lC8lrqE7zJY66UK9Z1daA8jrdDi6migNjHFrXfT3V4QvMthCIO05q05SS3x2G3ZpIgmI+CePUPB1pDf+lhPkU1MCAwEAAQ==" }, Sin = [a], Uyr = "managed-model-catalog-public-key";
function Amo(e) {
  if (e === void 0) return;
  return e === Uyr ? "managed_key" : "compiled_roots";
}
function i(e) {
  let t = /^-----BEGIN PUBLIC KEY-----([\s\S]*?)-----END PUBLIC KEY-----$/.exec(e.trim());
  if (t === null || t[1] === void 0) return;
  let r = t[1].replace(/\s+/g, "");
  if (r.length === 0 || !/^[A-Za-z0-9+/]+=*$/.test(r)) return;
  let n = Buffer.from(r, "base64");
  return n.length > 0 && n.toString("base64") === r ? new Uint8Array(n) : void 0;
}
var RIi = 2048;
function ncl(e) {
  let t = i(e);
  if (t === void 0) return { ok: false, reason: "not_spki_pem" };
  let r, n;
  try {
    let o = (0, import_crypto.createPublicKey)({ key: Buffer.from(t), format: "der", type: "spki" });
    r = o.asymmetricKeyType, n = o.asymmetricKeyDetails?.modulusLength;
  } catch {
    return { ok: false, reason: "not_spki_pem" };
  }
  if (r !== "rsa") return { ok: false, reason: "not_rsa" };
  if (n === void 0 || n < RIi) return { ok: false, reason: "modulus_too_short" };
  return { ok: true, der: t };
}
function rcl(e) {
  return new Uint8Array(Buffer.from(e.spkiBase64, "base64"));
}
