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
var chunk_4vm1ywmw_exports = {};
__export(chunk_4vm1ywmw_exports, {
  Cj: () => Cj
});
module.exports = __toCommonJS(chunk_4vm1ywmw_exports);
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var Cj = (0, import_chunk_w1d7ygsk.V)(function(i) {
  var r = { warningEmitted: false }, n = (e) => {
    if (e && !r.warningEmitted && parseInt(e.substring(1, e.indexOf("."))) < 18) r.warningEmitted = true, process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js 16.x on January 6, 2025.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to a supported Node.js LTS version.

More information can be found at: https://a.co/74kJMmI`);
  };
  function a(e, t, s) {
    if (!e.$source) e.$source = {};
    return e.$source[t] = s, e;
  }
  function o(e, t, s) {
    if (!e.__aws_sdk_context) e.__aws_sdk_context = { features: {} };
    else if (!e.__aws_sdk_context.features) e.__aws_sdk_context.features = {};
    e.__aws_sdk_context.features[t] = s;
  }
  function u(e, t, s) {
    if (!e.$source) e.$source = {};
    return e.$source[t] = s, e;
  }
  i.emitWarningIfUnsupportedVersion = n;
  i.setCredentialFeature = a;
  i.setFeature = o;
  i.setTokenFeature = u;
  i.state = r;
});
