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
var chunk_1g374pth_exports = {};
__export(chunk_1g374pth_exports, {
  EventStreamSerde: () => E
});
module.exports = __toCommonJS(chunk_1g374pth_exports);
var import_chunk_z3ydstra = require("/$bunfs/root/chunk-z3ydstra.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
class x {
  marshaller;
  serializer;
  deserializer;
  serdeContext;
  defaultContentType;
  constructor({ marshaller: a, serializer: i, deserializer: o, serdeContext: m, defaultContentType: d }) {
    this.marshaller = a, this.serializer = i, this.deserializer = o, this.serdeContext = m, this.defaultContentType = d;
  }
  async serializeEventStream({ eventStream: a, requestSchema: i, initialRequest: o }) {
    let m = this.marshaller, d = i.getEventStreamMember(), p = i.getMemberSchema(d), y = this.serializer, f = this.defaultContentType, h = Symbol("initialRequestMarker"), S = { async *[Symbol.asyncIterator]() {
      if (o) {
        let r = { ":event-type": { type: "string", value: "initial-request" }, ":message-type": { type: "string", value: "event" }, ":content-type": { type: "string", value: f } };
        y.write(i, o);
        let t = y.flush();
        yield { [h]: true, headers: r, body: t };
      }
      for await (let r of a) yield r;
    } };
    return m.serialize(S, (r) => {
      if (r[h]) return { headers: r.headers, body: r.body };
      let t = Object.keys(r).find((s) => s !== "__type") ?? "", { additionalHeaders: e, body: n, eventType: l, explicitPayloadContentType: c } = this.writeEventBody(t, p, r);
      return { headers: { ":event-type": { type: "string", value: l }, ":message-type": { type: "string", value: "event" }, ":content-type": { type: "string", value: c ?? f }, ...e }, body: n };
    });
  }
  async deserializeEventStream({ response: a, responseSchema: i, initialResponseContainer: o }) {
    let m = this.marshaller, d = i.getEventStreamMember(), y = i.getMemberSchema(d).getMemberSchemas(), f = Symbol("initialResponseMarker"), h = m.deserialize(a.body, async (t) => {
      let e = Object.keys(t).find((l) => l !== "__type") ?? "", n = t[e].body;
      if (e === "initial-response") {
        let l = await this.deserializer.read(i, n);
        return delete l[d], { [f]: true, ...l };
      } else if (e in y) {
        let l = y[e];
        if (l.isStructSchema()) {
          let c = {}, u = false;
          for (let [s, v] of l.structIterator()) {
            let { eventHeader: g, eventPayload: w } = v.getMergedTraits();
            if (u = u || Boolean(g || w), w) {
              if (v.isBlobSchema()) c[s] = n;
              else if (v.isStringSchema()) c[s] = (this.serdeContext?.utf8Encoder ?? z.toUtf8)(n);
              else if (v.isStructSchema()) c[s] = await this.deserializer.read(v, n);
            } else if (g) {
              let b = t[e].headers[s]?.value;
              if (b != null) if (v.isNumericSchema()) if (b && typeof b === "object" && "bytes" in b) c[s] = BigInt(b.toString());
              else c[s] = Number(b);
              else c[s] = b;
            }
          }
          if (u) return { [e]: c };
        }
        return { [e]: await this.deserializer.read(l, n) };
      } else return { $unknown: t };
    }), S = h[Symbol.asyncIterator](), r = await S.next();
    if (r.done) return h;
    if (r.value?.[f]) {
      if (!i) throw Error("@smithy::core/protocols - initial-response event encountered in event stream but no response schema given.");
      for (let [t, e] of Object.entries(r.value)) o[t] = e;
    }
    return { async *[Symbol.asyncIterator]() {
      if (!r?.value?.[f]) yield r.value;
      while (true) {
        let { done: t, value: e } = await S.next();
        if (t) break;
        yield e;
      }
    } };
  }
  writeEventBody(a, i, o) {
    let m = this.serializer, d = a, p = null, y, f = (() => i.getSchema()[4].includes(a))(), h = {};
    if (!f) {
      let [t, e] = o[a];
      d = t, m.write(15, e);
    } else {
      let t = i.getMemberSchema(a);
      if (t.isStructSchema()) {
        for (let [e, n] of t.structIterator()) {
          let { eventHeader: l, eventPayload: c } = n.getMergedTraits();
          if (c) {
            p = e;
            break;
          } else if (l) {
            let u = o[a][e], s = "binary";
            if (n.isNumericSchema()) if (-2147483648 <= u && u <= 2147483647) s = "integer";
            else s = "long";
            else if (n.isTimestampSchema()) s = "timestamp";
            else if (n.isStringSchema()) s = "string";
            else if (n.isBooleanSchema()) s = "boolean";
            if (u != null) h[e] = { type: s, value: u }, delete o[a][e];
          }
        }
        if (p !== null) {
          let e = t.getMemberSchema(p);
          if (e.isBlobSchema()) y = "application/octet-stream";
          else if (e.isStringSchema()) y = "text/plain";
          m.write(e, o[a][p]);
        } else m.write(t, o[a]);
      } else throw Error("@smithy/core/event-streams - non-struct member not supported in event stream union.");
    }
    let S = m.flush();
    return { body: typeof S === "string" ? (this.serdeContext?.utf8Decoder ?? z.fromUtf8)(S) : S, eventType: d, explicitPayloadContentType: y, additionalHeaders: h };
  }
}
var z, E;
var M = (0, import_chunk_w1d7ygsk.bo)(() => {
  z = (0, import_chunk_z3ydstra.SL)();
  E = x;
});
M();
