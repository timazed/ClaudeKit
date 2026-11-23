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
var chunk_rwh01902_exports = {};
__export(chunk_rwh01902_exports, {
  pgt: () => pgt
});
module.exports = __toCommonJS(chunk_rwh01902_exports);
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var J = (0, import_chunk_w1d7ygsk.V)(function(Xe) {
  Object.defineProperty(Xe, "__esModule", { value: true });
  Xe.AggregationTemporality = void 0;
  var pn;
  (function(e) {
    e[e.DELTA = 0] = "DELTA", e[e.CUMULATIVE = 1] = "CUMULATIVE";
  })(pn = Xe.AggregationTemporality || (Xe.AggregationTemporality = {}));
});
var v = (0, import_chunk_w1d7ygsk.V)(function(Ke) {
  Object.defineProperty(Ke, "__esModule", { value: true });
  Ke.DataPointType = Ke.InstrumentType = void 0;
  var fn;
  (function(e) {
    e.COUNTER = "COUNTER", e.GAUGE = "GAUGE", e.HISTOGRAM = "HISTOGRAM", e.UP_DOWN_COUNTER = "UP_DOWN_COUNTER", e.OBSERVABLE_COUNTER = "OBSERVABLE_COUNTER", e.OBSERVABLE_GAUGE = "OBSERVABLE_GAUGE", e.OBSERVABLE_UP_DOWN_COUNTER = "OBSERVABLE_UP_DOWN_COUNTER";
  })(fn = Ke.InstrumentType || (Ke.InstrumentType = {}));
  var Mn;
  (function(e) {
    e[e.HISTOGRAM = 0] = "HISTOGRAM", e[e.EXPONENTIAL_HISTOGRAM = 1] = "EXPONENTIAL_HISTOGRAM", e[e.GAUGE = 2] = "GAUGE", e[e.SUM = 3] = "SUM";
  })(Mn = Ke.DataPointType || (Ke.DataPointType = {}));
});
var b = (0, import_chunk_w1d7ygsk.V)(function(Je) {
  Object.defineProperty(Je, "__esModule", { value: true });
  Je.equalsCaseInsensitive = Je.binarySearchUB = Je.setEquals = Je.callWithTimeout = Je.TimeoutError = Je.instrumentationScopeId = Je.hashAttributes = void 0;
  function An(e) {
    let t = Object.keys(e);
    if (t.length === 0) return "";
    return t = t.sort(), JSON.stringify(t.map((r) => [r, e[r]]));
  }
  Je.hashAttributes = An;
  function Sn(e) {
    return `${e.name}:${e.version ?? ""}:${e.schemaUrl ?? ""}`;
  }
  Je.instrumentationScopeId = Sn;
  class Z extends Error {
    constructor(e) {
      super(e);
      Object.setPrototypeOf(this, Z.prototype);
    }
  }
  Je.TimeoutError = Z;
  function yn(e, t) {
    let r, i = new Promise(function(o, n) {
      r = setTimeout(function() {
        n(new Z("Operation timed out."));
      }, t);
    });
    return Promise.race([e, i]).then((s) => (clearTimeout(r), s), (s) => {
      throw clearTimeout(r), s;
    });
  }
  Je.callWithTimeout = yn;
  function xn(e, t) {
    if (e.size !== t.size) return false;
    for (let r of e) if (!t.has(r)) return false;
    return true;
  }
  Je.setEquals = xn;
  function bn(e, t) {
    let r = 0, i = e.length - 1, s = e.length;
    while (i >= r) {
      let o = r + Math.trunc((i - r) / 2);
      if (e[o] < t) r = o + 1;
      else s = o, i = o - 1;
    }
    return s;
  }
  Je.binarySearchUB = bn;
  function Tn(e, t) {
    return e.toLowerCase() === t.toLowerCase();
  }
  Je.equalsCaseInsensitive = Tn;
});
var L = (0, import_chunk_w1d7ygsk.V)(function(Qe) {
  Object.defineProperty(Qe, "__esModule", { value: true });
  Qe.AggregatorKind = void 0;
  var Rn;
  (function(e) {
    e[e.DROP = 0] = "DROP", e[e.SUM = 1] = "SUM", e[e.LAST_VALUE = 2] = "LAST_VALUE", e[e.HISTOGRAM = 3] = "HISTOGRAM", e[e.EXPONENTIAL_HISTOGRAM = 4] = "EXPONENTIAL_HISTOGRAM";
  })(Rn = Qe.AggregatorKind || (Qe.AggregatorKind = {}));
});
var st = (0, import_chunk_w1d7ygsk.V)(function(rt) {
  Object.defineProperty(rt, "__esModule", { value: true });
  rt.DropAggregator = void 0;
  var et = L();
  class tt {
    kind = et.AggregatorKind.DROP;
    createAccumulation() {
      return;
    }
    merge(e, t) {
      return;
    }
    diff(e, t) {
      return;
    }
    toMetricData(e, t, r, i) {
      return;
    }
  }
  rt.DropAggregator = tt;
});
var lt = (0, import_chunk_w1d7ygsk.V)(function(ct) {
  Object.defineProperty(ct, "__esModule", { value: true });
  ct.HistogramAggregator = ct.HistogramAccumulation = void 0;
  var nt = L(), T = v(), ot = b();
  function Nn(e) {
    let t = e.map(() => 0);
    return t.push(0), { buckets: { boundaries: e, counts: t }, sum: 0, count: 0, hasMinMax: false, min: 1 / 0, max: -1 / 0 };
  }
  class H {
    startTime;
    _boundaries;
    _recordMinMax;
    _current;
    constructor(e, t, r = true, i = Nn(t)) {
      this.startTime = e, this._boundaries = t, this._recordMinMax = r, this._current = i;
    }
    record(e) {
      if (Number.isNaN(e)) return;
      if (this._current.count += 1, this._current.sum += e, this._recordMinMax) this._current.min = Math.min(e, this._current.min), this._current.max = Math.max(e, this._current.max), this._current.hasMinMax = true;
      let t = ot.binarySearchUB(this._boundaries, e);
      this._current.buckets.counts[t] += 1;
    }
    setStartTime(e) {
      this.startTime = e;
    }
    toPointValue() {
      return this._current;
    }
  }
  ct.HistogramAccumulation = H;
  class at {
    kind = nt.AggregatorKind.HISTOGRAM;
    _boundaries;
    _recordMinMax;
    constructor(e, t) {
      this._boundaries = e, this._recordMinMax = t;
    }
    createAccumulation(e) {
      return new H(e, this._boundaries, this._recordMinMax);
    }
    merge(e, t) {
      let r = e.toPointValue(), i = t.toPointValue(), s = r.buckets.counts, o = i.buckets.counts, n = Array(s.length);
      for (let l = 0; l < s.length; l++) n[l] = s[l] + o[l];
      let a = 1 / 0, c = -1 / 0;
      if (this._recordMinMax) {
        if (r.hasMinMax && i.hasMinMax) a = Math.min(r.min, i.min), c = Math.max(r.max, i.max);
        else if (r.hasMinMax) a = r.min, c = r.max;
        else if (i.hasMinMax) a = i.min, c = i.max;
      }
      return new H(e.startTime, r.buckets.boundaries, this._recordMinMax, { buckets: { boundaries: r.buckets.boundaries, counts: n }, count: r.count + i.count, sum: r.sum + i.sum, hasMinMax: this._recordMinMax && (r.hasMinMax || i.hasMinMax), min: a, max: c });
    }
    diff(e, t) {
      let r = e.toPointValue(), i = t.toPointValue(), s = r.buckets.counts, o = i.buckets.counts, n = Array(s.length);
      for (let a = 0; a < s.length; a++) n[a] = o[a] - s[a];
      return new H(t.startTime, r.buckets.boundaries, this._recordMinMax, { buckets: { boundaries: r.buckets.boundaries, counts: n }, count: i.count - r.count, sum: i.sum - r.sum, hasMinMax: false, min: 1 / 0, max: -1 / 0 });
    }
    toMetricData(e, t, r, i) {
      return { descriptor: e, aggregationTemporality: t, dataPointType: T.DataPointType.HISTOGRAM, dataPoints: r.map(([s, o]) => {
        let n = o.toPointValue(), a = e.type === T.InstrumentType.GAUGE || e.type === T.InstrumentType.UP_DOWN_COUNTER || e.type === T.InstrumentType.OBSERVABLE_GAUGE || e.type === T.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER;
        return { attributes: s, startTime: o.startTime, endTime: i, value: { min: n.hasMinMax ? n.min : void 0, max: n.hasMinMax ? n.max : void 0, sum: !a ? n.sum : void 0, buckets: n.buckets, count: n.count } };
      }) };
    }
  }
  ct.HistogramAggregator = at;
});
var gt = (0, import_chunk_w1d7ygsk.V)(function(ht) {
  Object.defineProperty(ht, "__esModule", { value: true });
  ht.Buckets = void 0;
  class Pe {
    backing;
    indexBase;
    indexStart;
    indexEnd;
    constructor(e = new Re(), t = 0, r = 0, i = 0) {
      this.backing = e, this.indexBase = t, this.indexStart = r, this.indexEnd = i;
    }
    get offset() {
      return this.indexStart;
    }
    get length() {
      if (this.backing.length === 0) return 0;
      if (this.indexEnd === this.indexStart && this.at(0) === 0) return 0;
      return this.indexEnd - this.indexStart + 1;
    }
    counts() {
      return Array.from({ length: this.length }, (e, t) => this.at(t));
    }
    at(e) {
      let t = this.indexBase - this.indexStart;
      if (e < t) e += this.backing.length;
      return e -= t, this.backing.countAt(e);
    }
    incrementBucket(e, t) {
      this.backing.increment(e, t);
    }
    decrementBucket(e, t) {
      this.backing.decrement(e, t);
    }
    trim() {
      for (let e = 0; e < this.length; e++) if (this.at(e) !== 0) {
        this.indexStart += e;
        break;
      } else if (e === this.length - 1) {
        this.indexStart = this.indexEnd = this.indexBase = 0;
        return;
      }
      for (let e = this.length - 1; e >= 0; e--) if (this.at(e) !== 0) {
        this.indexEnd -= this.length - e - 1;
        break;
      }
      this._rotate();
    }
    downscale(e) {
      this._rotate();
      let t = 1 + this.indexEnd - this.indexStart, r = 1 << e, i = 0, s = 0;
      for (let o = this.indexStart; o <= this.indexEnd; ) {
        let n = o % r;
        if (n < 0) n += r;
        for (let a = n; a < r && i < t; a++) this._relocateBucket(s, i), i++, o++;
        s++;
      }
      this.indexStart >>= e, this.indexEnd >>= e, this.indexBase = this.indexStart;
    }
    clone() {
      return new Pe(this.backing.clone(), this.indexBase, this.indexStart, this.indexEnd);
    }
    _rotate() {
      let e = this.indexBase - this.indexStart;
      if (e === 0) return;
      else if (e > 0) this.backing.reverse(0, this.backing.length), this.backing.reverse(0, e), this.backing.reverse(e, this.backing.length);
      else this.backing.reverse(0, this.backing.length), this.backing.reverse(0, this.backing.length + e);
      this.indexBase = this.indexStart;
    }
    _relocateBucket(e, t) {
      if (e === t) return;
      this.incrementBucket(e, this.backing.emptyBucket(t));
    }
  }
  ht.Buckets = Pe;
  class Re {
    _counts;
    constructor(e = [0]) {
      this._counts = e;
    }
    get length() {
      return this._counts.length;
    }
    countAt(e) {
      return this._counts[e];
    }
    growTo(e, t, r) {
      let i = Array(e).fill(0);
      i.splice(r, this._counts.length - t, ...this._counts.slice(t)), i.splice(0, t, ...this._counts.slice(0, t)), this._counts = i;
    }
    reverse(e, t) {
      let r = Math.floor((e + t) / 2) - e;
      for (let i = 0; i < r; i++) {
        let s = this._counts[e + i];
        this._counts[e + i] = this._counts[t - i - 1], this._counts[t - i - 1] = s;
      }
    }
    emptyBucket(e) {
      let t = this._counts[e];
      return this._counts[e] = 0, t;
    }
    increment(e, t) {
      this._counts[e] += t;
    }
    decrement(e, t) {
      if (this._counts[e] >= t) this._counts[e] -= t;
      else this._counts[e] = 0;
    }
    clone() {
      return new Re([...this._counts]);
    }
  }
});
var Ce = (0, import_chunk_w1d7ygsk.V)(function(dt) {
  Object.defineProperty(dt, "__esModule", { value: true });
  dt.getSignificand = dt.getNormalBase2 = dt.MIN_VALUE = dt.MAX_NORMAL_EXPONENT = dt.MIN_NORMAL_EXPONENT = dt.SIGNIFICAND_WIDTH = void 0;
  dt.SIGNIFICAND_WIDTH = 52;
  var Ln = 2146435072, Gn = 1048575, Ne = 1023;
  dt.MIN_NORMAL_EXPONENT = -Ne + 1;
  dt.MAX_NORMAL_EXPONENT = Ne;
  dt.MIN_VALUE = Math.pow(2, -1022);
  function Un(e) {
    let t = new DataView(new ArrayBuffer(8));
    return t.setFloat64(0, e), ((t.getUint32(0) & Ln) >> 20) - Ne;
  }
  dt.getNormalBase2 = Un;
  function Bn(e) {
    let t = new DataView(new ArrayBuffer(8));
    t.setFloat64(0, e);
    let r = t.getUint32(0), i = t.getUint32(4);
    return (r & Gn) * Math.pow(2, 32) + i;
  }
  dt.getSignificand = Bn;
});
var Q = (0, import_chunk_w1d7ygsk.V)(function(pt) {
  Object.defineProperty(pt, "__esModule", { value: true });
  pt.nextGreaterSquare = pt.ldexp = void 0;
  function Hn(e, t) {
    if (e === 0 || e === Number.POSITIVE_INFINITY || e === Number.NEGATIVE_INFINITY || Number.isNaN(e)) return e;
    return e * Math.pow(2, t);
  }
  pt.ldexp = Hn;
  function jn(e) {
    return e--, e |= e >> 1, e |= e >> 2, e |= e >> 4, e |= e >> 8, e |= e >> 16, e++, e;
  }
  pt.nextGreaterSquare = jn;
});
var ee = (0, import_chunk_w1d7ygsk.V)(function(At) {
  Object.defineProperty(At, "__esModule", { value: true });
  At.MappingError = void 0;
  class Mt extends Error {
  }
  At.MappingError = Mt;
});
var Et = (0, import_chunk_w1d7ygsk.V)(function(bt) {
  Object.defineProperty(bt, "__esModule", { value: true });
  bt.ExponentMapping = void 0;
  var M = Ce(), yt = Q(), te = ee();
  class xt {
    _shift;
    constructor(e) {
      this._shift = -e;
    }
    mapToIndex(e) {
      if (e < M.MIN_VALUE) return this._minNormalLowerBoundaryIndex();
      let t = M.getNormalBase2(e), r = this._rightShift(M.getSignificand(e) - 1, M.SIGNIFICAND_WIDTH);
      return t + r >> this._shift;
    }
    lowerBoundary(e) {
      let t = this._minNormalLowerBoundaryIndex();
      if (e < t) throw new te.MappingError(`underflow: ${e} is < minimum lower boundary: ${t}`);
      let r = this._maxNormalLowerBoundaryIndex();
      if (e > r) throw new te.MappingError(`overflow: ${e} is > maximum lower boundary: ${r}`);
      return yt.ldexp(1, e << this._shift);
    }
    get scale() {
      if (this._shift === 0) return 0;
      return -this._shift;
    }
    _minNormalLowerBoundaryIndex() {
      let e = M.MIN_NORMAL_EXPONENT >> this._shift;
      if (this._shift < 2) e--;
      return e;
    }
    _maxNormalLowerBoundaryIndex() {
      return M.MAX_NORMAL_EXPONENT >> this._shift;
    }
    _rightShift(e, t) {
      return Math.floor(e * Math.pow(2, -t));
    }
  }
  bt.ExponentMapping = xt;
});
var Ot = (0, import_chunk_w1d7ygsk.V)(function(vt) {
  Object.defineProperty(vt, "__esModule", { value: true });
  vt.LogarithmMapping = void 0;
  var A = Ce(), re = Q(), ie = ee();
  class wt {
    _scale;
    _scaleFactor;
    _inverseFactor;
    constructor(e) {
      this._scale = e, this._scaleFactor = re.ldexp(Math.LOG2E, e), this._inverseFactor = re.ldexp(Math.LN2, -e);
    }
    mapToIndex(e) {
      if (e <= A.MIN_VALUE) return this._minNormalLowerBoundaryIndex() - 1;
      if (A.getSignificand(e) === 0) return (A.getNormalBase2(e) << this._scale) - 1;
      let t = Math.floor(Math.log(e) * this._scaleFactor), r = this._maxNormalLowerBoundaryIndex();
      if (t >= r) return r;
      return t;
    }
    lowerBoundary(e) {
      let t = this._maxNormalLowerBoundaryIndex();
      if (e >= t) {
        if (e === t) return 2 * Math.exp((e - (1 << this._scale)) / this._scaleFactor);
        throw new ie.MappingError(`overflow: ${e} is > maximum lower boundary: ${t}`);
      }
      let r = this._minNormalLowerBoundaryIndex();
      if (e <= r) {
        if (e === r) return A.MIN_VALUE;
        else if (e === r - 1) return Math.exp((e + (1 << this._scale)) / this._scaleFactor) / 2;
        throw new ie.MappingError(`overflow: ${e} is < minimum lower boundary: ${r}`);
      }
      return Math.exp(e * this._inverseFactor);
    }
    get scale() {
      return this._scale;
    }
    _minNormalLowerBoundaryIndex() {
      return A.MIN_NORMAL_EXPONENT << this._scale;
    }
    _maxNormalLowerBoundaryIndex() {
      return (A.MAX_NORMAL_EXPONENT + 1 << this._scale) - 1;
    }
  }
  vt.LogarithmMapping = wt;
});
var Bt = (0, import_chunk_w1d7ygsk.V)(function(Gt) {
  Object.defineProperty(Gt, "__esModule", { value: true });
  Gt.getMapping = void 0;
  var Nt = Et(), Ct = Ot(), Lt = ee(), Pt = -10, Rt = 20, zn = Array.from({ length: 31 }, (e, t) => {
    if (t > 10) return new Ct.LogarithmMapping(t - 10);
    return new Nt.ExponentMapping(t - 10);
  });
  function Wn(e) {
    if (e > Rt || e < Pt) throw new Lt.MappingError(`expected scale >= ${Pt} && <= ${Rt}, got: ${e}`);
    return zn[e + 10];
  }
  Gt.getMapping = Wn;
});
var jt = (0, import_chunk_w1d7ygsk.V)(function(Ft) {
  Object.defineProperty(Ft, "__esModule", { value: true });
  Ft.ExponentialHistogramAggregator = Ft.ExponentialHistogramAccumulation = void 0;
  var Dt = L(), E = v(), qt = (0, import_chunk_xfj2cwfv._u)(), se = gt(), ne = Bt(), Vt = Q();
  class G {
    static combine(e, t) {
      return new G(Math.min(e.low, t.low), Math.max(e.high, t.high));
    }
    low;
    high;
    constructor(e, t) {
      this.low = e, this.high = t;
    }
  }
  var Xn = 20, Yn = 160, Le = 2;
  class oe {
    startTime;
    _maxSize;
    _recordMinMax;
    _sum;
    _count;
    _zeroCount;
    _min;
    _max;
    _positive;
    _negative;
    _mapping;
    constructor(e, t = Yn, r = true, i = 0, s = 0, o = 0, n = Number.POSITIVE_INFINITY, a = Number.NEGATIVE_INFINITY, c = new se.Buckets(), l = new se.Buckets(), F = ne.getMapping(Xn)) {
      if (this.startTime = e, this._maxSize = t, this._recordMinMax = r, this._sum = i, this._count = s, this._zeroCount = o, this._min = n, this._max = a, this._positive = c, this._negative = l, this._mapping = F, this._maxSize < Le) qt.diag.warn(`Exponential Histogram Max Size set to ${this._maxSize},                 changing to the minimum size of: ${Le}`), this._maxSize = Le;
    }
    record(e) {
      this.updateByIncrement(e, 1);
    }
    setStartTime(e) {
      this.startTime = e;
    }
    toPointValue() {
      return { hasMinMax: this._recordMinMax, min: this.min, max: this.max, sum: this.sum, positive: { offset: this.positive.offset, bucketCounts: this.positive.counts() }, negative: { offset: this.negative.offset, bucketCounts: this.negative.counts() }, count: this.count, scale: this.scale, zeroCount: this.zeroCount };
    }
    get sum() {
      return this._sum;
    }
    get min() {
      return this._min;
    }
    get max() {
      return this._max;
    }
    get count() {
      return this._count;
    }
    get zeroCount() {
      return this._zeroCount;
    }
    get scale() {
      if (this._count === this._zeroCount) return 0;
      return this._mapping.scale;
    }
    get positive() {
      return this._positive;
    }
    get negative() {
      return this._negative;
    }
    updateByIncrement(e, t) {
      if (Number.isNaN(e)) return;
      if (e > this._max) this._max = e;
      if (e < this._min) this._min = e;
      if (this._count += t, e === 0) {
        this._zeroCount += t;
        return;
      }
      if (this._sum += e * t, e > 0) this._updateBuckets(this._positive, e, t);
      else this._updateBuckets(this._negative, -e, t);
    }
    merge(e) {
      if (this._count === 0) this._min = e.min, this._max = e.max;
      else if (e.count !== 0) {
        if (e.min < this.min) this._min = e.min;
        if (e.max > this.max) this._max = e.max;
      }
      this.startTime = e.startTime, this._sum += e.sum, this._count += e.count, this._zeroCount += e.zeroCount;
      let t = this._minScale(e);
      this._downscale(this.scale - t), this._mergeBuckets(this.positive, e, e.positive, t), this._mergeBuckets(this.negative, e, e.negative, t);
    }
    diff(e) {
      this._min = 1 / 0, this._max = -1 / 0, this._sum -= e.sum, this._count -= e.count, this._zeroCount -= e.zeroCount;
      let t = this._minScale(e);
      this._downscale(this.scale - t), this._diffBuckets(this.positive, e, e.positive, t), this._diffBuckets(this.negative, e, e.negative, t);
    }
    clone() {
      return new oe(this.startTime, this._maxSize, this._recordMinMax, this._sum, this._count, this._zeroCount, this._min, this._max, this.positive.clone(), this.negative.clone(), this._mapping);
    }
    _updateBuckets(e, t, r) {
      let i = this._mapping.mapToIndex(t), s = false, o = 0, n = 0;
      if (e.length === 0) e.indexStart = i, e.indexEnd = e.indexStart, e.indexBase = e.indexStart;
      else if (i < e.indexStart && e.indexEnd - i >= this._maxSize) s = true, n = i, o = e.indexEnd;
      else if (i > e.indexEnd && i - e.indexStart >= this._maxSize) s = true, n = e.indexStart, o = i;
      if (s) {
        let a = this._changeScale(o, n);
        this._downscale(a), i = this._mapping.mapToIndex(t);
      }
      this._incrementIndexBy(e, i, r);
    }
    _incrementIndexBy(e, t, r) {
      if (r === 0) return;
      if (e.length === 0) e.indexStart = e.indexEnd = e.indexBase = t;
      if (t < e.indexStart) {
        let s = e.indexEnd - t;
        if (s >= e.backing.length) this._grow(e, s + 1);
        e.indexStart = t;
      } else if (t > e.indexEnd) {
        let s = t - e.indexStart;
        if (s >= e.backing.length) this._grow(e, s + 1);
        e.indexEnd = t;
      }
      let i = t - e.indexBase;
      if (i < 0) i += e.backing.length;
      e.incrementBucket(i, r);
    }
    _grow(e, t) {
      let r = e.backing.length, i = e.indexBase - e.indexStart, s = r - i, o = Vt.nextGreaterSquare(t);
      if (o > this._maxSize) o = this._maxSize;
      let n = o - i;
      e.backing.growTo(o, s, n);
    }
    _changeScale(e, t) {
      let r = 0;
      while (e - t >= this._maxSize) e >>= 1, t >>= 1, r++;
      return r;
    }
    _downscale(e) {
      if (e === 0) return;
      if (e < 0) throw Error(`impossible change of scale: ${this.scale}`);
      let t = this._mapping.scale - e;
      this._positive.downscale(e), this._negative.downscale(e), this._mapping = ne.getMapping(t);
    }
    _minScale(e) {
      let t = Math.min(this.scale, e.scale), r = G.combine(this._highLowAtScale(this.positive, this.scale, t), this._highLowAtScale(e.positive, e.scale, t)), i = G.combine(this._highLowAtScale(this.negative, this.scale, t), this._highLowAtScale(e.negative, e.scale, t));
      return Math.min(t - this._changeScale(r.high, r.low), t - this._changeScale(i.high, i.low));
    }
    _highLowAtScale(e, t, r) {
      if (e.length === 0) return new G(0, -1);
      let i = t - r;
      return new G(e.indexStart >> i, e.indexEnd >> i);
    }
    _mergeBuckets(e, t, r, i) {
      let s = r.offset, o = t.scale - i;
      for (let n = 0; n < r.length; n++) this._incrementIndexBy(e, s + n >> o, r.at(n));
    }
    _diffBuckets(e, t, r, i) {
      let s = r.offset, o = t.scale - i;
      for (let n = 0; n < r.length; n++) {
        let c = (s + n >> o) - e.indexBase;
        if (c < 0) c += e.backing.length;
        e.decrementBucket(c, r.at(n));
      }
      e.trim();
    }
  }
  Ft.ExponentialHistogramAccumulation = oe;
  class kt {
    kind = Dt.AggregatorKind.EXPONENTIAL_HISTOGRAM;
    _maxSize;
    _recordMinMax;
    constructor(e, t) {
      this._maxSize = e, this._recordMinMax = t;
    }
    createAccumulation(e) {
      return new oe(e, this._maxSize, this._recordMinMax);
    }
    merge(e, t) {
      let r = t.clone();
      return r.merge(e), r;
    }
    diff(e, t) {
      let r = t.clone();
      return r.diff(e), r;
    }
    toMetricData(e, t, r, i) {
      return { descriptor: e, aggregationTemporality: t, dataPointType: E.DataPointType.EXPONENTIAL_HISTOGRAM, dataPoints: r.map(([s, o]) => {
        let n = o.toPointValue(), a = e.type === E.InstrumentType.GAUGE || e.type === E.InstrumentType.UP_DOWN_COUNTER || e.type === E.InstrumentType.OBSERVABLE_GAUGE || e.type === E.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER;
        return { attributes: s, startTime: o.startTime, endTime: i, value: { min: n.hasMinMax ? n.min : void 0, max: n.hasMinMax ? n.max : void 0, sum: !a ? n.sum : void 0, positive: { offset: n.positive.offset, bucketCounts: n.positive.bucketCounts }, negative: { offset: n.negative.offset, bucketCounts: n.negative.bucketCounts }, count: n.count, scale: n.scale, zeroCount: n.zeroCount } };
      }) };
    }
  }
  Ft.ExponentialHistogramAggregator = kt;
});
var Kt = (0, import_chunk_w1d7ygsk.V)(function(Xt) {
  Object.defineProperty(Xt, "__esModule", { value: true });
  Xt.LastValueAggregator = Xt.LastValueAccumulation = void 0;
  var $t = L(), w = (0, import_chunk_xfj2cwfv.Q_)(), zt = v();
  class j {
    startTime;
    _current;
    sampleTime;
    constructor(e, t = 0, r = [0, 0]) {
      this.startTime = e, this._current = t, this.sampleTime = r;
    }
    record(e) {
      this._current = e, this.sampleTime = w.millisToHrTime(Date.now());
    }
    setStartTime(e) {
      this.startTime = e;
    }
    toPointValue() {
      return this._current;
    }
  }
  Xt.LastValueAccumulation = j;
  class Wt {
    kind = $t.AggregatorKind.LAST_VALUE;
    createAccumulation(e) {
      return new j(e);
    }
    merge(e, t) {
      let r = w.hrTimeToMicroseconds(t.sampleTime) >= w.hrTimeToMicroseconds(e.sampleTime) ? t : e;
      return new j(e.startTime, r.toPointValue(), r.sampleTime);
    }
    diff(e, t) {
      let r = w.hrTimeToMicroseconds(t.sampleTime) >= w.hrTimeToMicroseconds(e.sampleTime) ? t : e;
      return new j(t.startTime, r.toPointValue(), r.sampleTime);
    }
    toMetricData(e, t, r, i) {
      return { descriptor: e, aggregationTemporality: t, dataPointType: zt.DataPointType.GAUGE, dataPoints: r.map(([s, o]) => ({ attributes: s, startTime: o.startTime, endTime: i, value: o.toPointValue() })) };
    }
  }
  Xt.LastValueAggregator = Wt;
});
var rr = (0, import_chunk_w1d7ygsk.V)(function(er) {
  Object.defineProperty(er, "__esModule", { value: true });
  er.SumAggregator = er.SumAccumulation = void 0;
  var Jt = L(), Zt = v();
  class N {
    startTime;
    monotonic;
    _current;
    reset;
    constructor(e, t, r = 0, i = false) {
      this.startTime = e, this.monotonic = t, this._current = r, this.reset = i;
    }
    record(e) {
      if (this.monotonic && e < 0) return;
      this._current += e;
    }
    setStartTime(e) {
      this.startTime = e;
    }
    toPointValue() {
      return this._current;
    }
  }
  er.SumAccumulation = N;
  class Qt {
    kind = Jt.AggregatorKind.SUM;
    monotonic;
    constructor(e) {
      this.monotonic = e;
    }
    createAccumulation(e) {
      return new N(e, this.monotonic);
    }
    merge(e, t) {
      let r = e.toPointValue(), i = t.toPointValue();
      if (t.reset) return new N(t.startTime, this.monotonic, i, t.reset);
      return new N(e.startTime, this.monotonic, r + i);
    }
    diff(e, t) {
      let r = e.toPointValue(), i = t.toPointValue();
      if (this.monotonic && r > i) return new N(t.startTime, this.monotonic, i, true);
      return new N(t.startTime, this.monotonic, i - r);
    }
    toMetricData(e, t, r, i) {
      return { descriptor: e, aggregationTemporality: t, dataPointType: Zt.DataPointType.SUM, dataPoints: r.map(([s, o]) => ({ attributes: s, startTime: o.startTime, endTime: i, value: o.toPointValue() })), isMonotonic: this.monotonic };
    }
  }
  er.SumAggregator = Qt;
});
var ar = (0, import_chunk_w1d7ygsk.V)(function(x) {
  Object.defineProperty(x, "__esModule", { value: true });
  x.SumAggregator = x.SumAccumulation = x.LastValueAggregator = x.LastValueAccumulation = x.ExponentialHistogramAggregator = x.ExponentialHistogramAccumulation = x.HistogramAggregator = x.HistogramAccumulation = x.DropAggregator = void 0;
  var Qn = st();
  Object.defineProperty(x, "DropAggregator", { enumerable: true, get: function() {
    return Qn.DropAggregator;
  } });
  var ir = lt();
  Object.defineProperty(x, "HistogramAccumulation", { enumerable: true, get: function() {
    return ir.HistogramAccumulation;
  } });
  Object.defineProperty(x, "HistogramAggregator", { enumerable: true, get: function() {
    return ir.HistogramAggregator;
  } });
  var sr = jt();
  Object.defineProperty(x, "ExponentialHistogramAccumulation", { enumerable: true, get: function() {
    return sr.ExponentialHistogramAccumulation;
  } });
  Object.defineProperty(x, "ExponentialHistogramAggregator", { enumerable: true, get: function() {
    return sr.ExponentialHistogramAggregator;
  } });
  var nr = Kt();
  Object.defineProperty(x, "LastValueAccumulation", { enumerable: true, get: function() {
    return nr.LastValueAccumulation;
  } });
  Object.defineProperty(x, "LastValueAggregator", { enumerable: true, get: function() {
    return nr.LastValueAggregator;
  } });
  var or = rr();
  Object.defineProperty(x, "SumAccumulation", { enumerable: true, get: function() {
    return or.SumAccumulation;
  } });
  Object.defineProperty(x, "SumAggregator", { enumerable: true, get: function() {
    return or.SumAggregator;
  } });
});
var mr = (0, import_chunk_w1d7ygsk.V)(function(ur) {
  Object.defineProperty(ur, "__esModule", { value: true });
  ur.DEFAULT_AGGREGATION = ur.EXPONENTIAL_HISTOGRAM_AGGREGATION = ur.HISTOGRAM_AGGREGATION = ur.LAST_VALUE_AGGREGATION = ur.SUM_AGGREGATION = ur.DROP_AGGREGATION = ur.DefaultAggregation = ur.ExponentialHistogramAggregation = ur.ExplicitBucketHistogramAggregation = ur.HistogramAggregation = ur.LastValueAggregation = ur.SumAggregation = ur.DropAggregation = void 0;
  var cr = (0, import_chunk_xfj2cwfv._u)(), h = ar(), u = v();
  class ae {
    static DEFAULT_INSTANCE = new h.DropAggregator();
    createAggregator(e) {
      return ae.DEFAULT_INSTANCE;
    }
  }
  ur.DropAggregation = ae;
  class z {
    static MONOTONIC_INSTANCE = new h.SumAggregator(true);
    static NON_MONOTONIC_INSTANCE = new h.SumAggregator(false);
    createAggregator(e) {
      switch (e.type) {
        case u.InstrumentType.COUNTER:
        case u.InstrumentType.OBSERVABLE_COUNTER:
        case u.InstrumentType.HISTOGRAM:
          return z.MONOTONIC_INSTANCE;
        default:
          return z.NON_MONOTONIC_INSTANCE;
      }
    }
  }
  ur.SumAggregation = z;
  class ce {
    static DEFAULT_INSTANCE = new h.LastValueAggregator();
    createAggregator(e) {
      return ce.DEFAULT_INSTANCE;
    }
  }
  ur.LastValueAggregation = ce;
  class ue {
    static DEFAULT_INSTANCE = new h.HistogramAggregator([0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1e3, 2500, 5e3, 7500, 1e4], true);
    createAggregator(e) {
      return ue.DEFAULT_INSTANCE;
    }
  }
  ur.HistogramAggregation = ue;
  class Ge {
    _boundaries;
    _recordMinMax;
    constructor(e, t = true) {
      if (e == null) throw Error("ExplicitBucketHistogramAggregation should be created with explicit boundaries, if a single bucket histogram is required, please pass an empty array");
      e = e.concat(), e = e.sort((s, o) => s - o);
      let r = e.lastIndexOf(-1 / 0), i = e.indexOf(1 / 0);
      if (i === -1) i = void 0;
      this._boundaries = e.slice(r + 1, i), this._recordMinMax = t;
    }
    createAggregator(e) {
      return new h.HistogramAggregator(this._boundaries, this._recordMinMax);
    }
  }
  ur.ExplicitBucketHistogramAggregation = Ge;
  class Ue {
    _maxSize;
    _recordMinMax;
    constructor(e = 160, t = true) {
      this._maxSize = e, this._recordMinMax = t;
    }
    createAggregator(e) {
      return new h.ExponentialHistogramAggregator(this._maxSize, this._recordMinMax);
    }
  }
  ur.ExponentialHistogramAggregation = Ue;
  class Be {
    _resolve(e) {
      switch (e.type) {
        case u.InstrumentType.COUNTER:
        case u.InstrumentType.UP_DOWN_COUNTER:
        case u.InstrumentType.OBSERVABLE_COUNTER:
        case u.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
          return ur.SUM_AGGREGATION;
        case u.InstrumentType.GAUGE:
        case u.InstrumentType.OBSERVABLE_GAUGE:
          return ur.LAST_VALUE_AGGREGATION;
        case u.InstrumentType.HISTOGRAM: {
          if (e.advice.explicitBucketBoundaries) return new Ge(e.advice.explicitBucketBoundaries);
          return ur.HISTOGRAM_AGGREGATION;
        }
      }
      return cr.diag.warn(`Unable to recognize instrument type: ${e.type}`), ur.DROP_AGGREGATION;
    }
    createAggregator(e) {
      return this._resolve(e).createAggregator(e);
    }
  }
  ur.DefaultAggregation = Be;
  ur.DROP_AGGREGATION = new ae();
  ur.SUM_AGGREGATION = new z();
  ur.LAST_VALUE_AGGREGATION = new ce();
  ur.HISTOGRAM_AGGREGATION = new ue();
  ur.EXPONENTIAL_HISTOGRAM_AGGREGATION = new Ue();
  ur.DEFAULT_AGGREGATION = new Be();
});
var W = (0, import_chunk_w1d7ygsk.V)(function(fr) {
  Object.defineProperty(fr, "__esModule", { value: true });
  fr.toAggregation = fr.AggregationType = void 0;
  var _ = mr(), C;
  (function(e) {
    e[e.DEFAULT = 0] = "DEFAULT", e[e.DROP = 1] = "DROP", e[e.SUM = 2] = "SUM", e[e.LAST_VALUE = 3] = "LAST_VALUE", e[e.EXPLICIT_BUCKET_HISTOGRAM = 4] = "EXPLICIT_BUCKET_HISTOGRAM", e[e.EXPONENTIAL_HISTOGRAM = 5] = "EXPONENTIAL_HISTOGRAM";
  })(C = fr.AggregationType || (fr.AggregationType = {}));
  function uo(e) {
    switch (e.type) {
      case C.DEFAULT:
        return _.DEFAULT_AGGREGATION;
      case C.DROP:
        return _.DROP_AGGREGATION;
      case C.SUM:
        return _.SUM_AGGREGATION;
      case C.LAST_VALUE:
        return _.LAST_VALUE_AGGREGATION;
      case C.EXPONENTIAL_HISTOGRAM: {
        let t = e;
        return new _.ExponentialHistogramAggregation(t.options?.maxSize, t.options?.recordMinMax);
      }
      case C.EXPLICIT_BUCKET_HISTOGRAM: {
        let t = e;
        if (t.options == null) return _.HISTOGRAM_AGGREGATION;
        else return new _.ExplicitBucketHistogramAggregation(t.options?.boundaries, t.options?.recordMinMax);
      }
      default:
        throw Error("Unsupported Aggregation");
    }
  }
  fr.toAggregation = uo;
});
var De = (0, import_chunk_w1d7ygsk.V)(function(yr) {
  Object.defineProperty(yr, "__esModule", { value: true });
  yr.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR = yr.DEFAULT_AGGREGATION_SELECTOR = void 0;
  var Ar = J(), Sr = W(), lo = (e) => ({ type: Sr.AggregationType.DEFAULT });
  yr.DEFAULT_AGGREGATION_SELECTOR = lo;
  var ho = (e) => Ar.AggregationTemporality.CUMULATIVE;
  yr.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR = ho;
});
var qe = (0, import_chunk_w1d7ygsk.V)(function(Tr) {
  Object.defineProperty(Tr, "__esModule", { value: true });
  Tr.MetricReader = void 0;
  var le = (0, import_chunk_xfj2cwfv._u)(), he = b(), _e = De();
  class br {
    _shutdown = false;
    _metricProducers;
    _sdkMetricProducer;
    _aggregationTemporalitySelector;
    _aggregationSelector;
    _cardinalitySelector;
    constructor(e) {
      this._aggregationSelector = e?.aggregationSelector ?? _e.DEFAULT_AGGREGATION_SELECTOR, this._aggregationTemporalitySelector = e?.aggregationTemporalitySelector ?? _e.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR, this._metricProducers = e?.metricProducers ?? [], this._cardinalitySelector = e?.cardinalitySelector;
    }
    setMetricProducer(e) {
      if (this._sdkMetricProducer) throw Error("MetricReader can not be bound to a MeterProvider again.");
      this._sdkMetricProducer = e, this.onInitialized();
    }
    selectAggregation(e) {
      return this._aggregationSelector(e);
    }
    selectAggregationTemporality(e) {
      return this._aggregationTemporalitySelector(e);
    }
    selectCardinalityLimit(e) {
      return this._cardinalitySelector ? this._cardinalitySelector(e) : 2e3;
    }
    onInitialized() {
    }
    async collect(e) {
      if (this._sdkMetricProducer === void 0) throw Error("MetricReader is not bound to a MetricProducer");
      if (this._shutdown) throw Error("MetricReader is shutdown");
      let [t, ...r] = await Promise.all([this._sdkMetricProducer.collect({ timeoutMillis: e?.timeoutMillis }), ...this._metricProducers.map((n) => n.collect({ timeoutMillis: e?.timeoutMillis }))]), i = t.errors.concat(r.flatMap((n) => n.errors)), s = t.resourceMetrics.resource, o = t.resourceMetrics.scopeMetrics.concat(r.flatMap((n) => n.resourceMetrics.scopeMetrics));
      return { resourceMetrics: { resource: s, scopeMetrics: o }, errors: i };
    }
    async shutdown(e) {
      if (this._shutdown) {
        le.diag.error("Cannot call shutdown twice.");
        return;
      }
      if (e?.timeoutMillis == null) await this.onShutdown();
      else await he.callWithTimeout(this.onShutdown(), e.timeoutMillis);
      this._shutdown = true;
    }
    async forceFlush(e) {
      if (this._shutdown) {
        le.diag.warn("Cannot forceFlush on already shutdown MetricReader.");
        return;
      }
      if (e?.timeoutMillis == null) {
        await this.onForceFlush();
        return;
      }
      await he.callWithTimeout(this.onForceFlush(), e.timeoutMillis);
    }
  }
  Tr.MetricReader = br;
});
var Pr = (0, import_chunk_w1d7ygsk.V)(function(Ir) {
  Object.defineProperty(Ir, "__esModule", { value: true });
  Ir.PeriodicExportingMetricReader = void 0;
  var I = (0, import_chunk_xfj2cwfv._u)(), O = (0, import_chunk_xfj2cwfv.Q_)(), wr = qe(), ge = b(), g = v();
  class vr extends wr.MetricReader {
    _interval;
    _exporter;
    _exportInterval;
    _exportTimeout;
    constructor(e) {
      let { exporter: t, exportIntervalMillis: r = 6e4, metricProducers: i, cardinalityLimits: s } = e, { exportTimeoutMillis: o = 3e4 } = e;
      super({ aggregationSelector: t.selectAggregation?.bind(t), aggregationTemporalitySelector: t.selectAggregationTemporality?.bind(t), metricProducers: i, cardinalitySelector: (n) => {
        let a = { default: 2e3, ...s };
        switch (n) {
          case g.InstrumentType.COUNTER:
            return a.counter ?? a.default;
          case g.InstrumentType.GAUGE:
            return a.gauge ?? a.default;
          case g.InstrumentType.HISTOGRAM:
            return a.histogram ?? a.default;
          case g.InstrumentType.OBSERVABLE_COUNTER:
            return a.observableCounter ?? a.default;
          case g.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
            return a.observableUpDownCounter ?? a.default;
          case g.InstrumentType.OBSERVABLE_GAUGE:
            return a.observableGauge ?? a.default;
          case g.InstrumentType.UP_DOWN_COUNTER:
            return a.upDownCounter ?? a.default;
          default:
            return a.default;
        }
      } });
      if (r <= 0) throw Error("exportIntervalMillis must be greater than 0");
      if (o <= 0) throw Error("exportTimeoutMillis must be greater than 0");
      if (r < o) if ("exportIntervalMillis" in e && "exportTimeoutMillis" in e) throw Error("exportIntervalMillis must be greater than or equal to exportTimeoutMillis");
      else I.diag.info(`Timeout of ${o} exceeds the interval of ${r}. Clamping timeout to interval duration.`), o = r;
      this._exportInterval = r, this._exportTimeout = o, this._exporter = t;
    }
    async _runOnce() {
      try {
        await ge.callWithTimeout(this._doRun(), this._exportTimeout);
      } catch (e) {
        if (e instanceof ge.TimeoutError) {
          I.diag.error("Export took longer than %s milliseconds and timed out.", this._exportTimeout);
          return;
        }
        O.globalErrorHandler(e);
      }
    }
    async _doRun() {
      let { resourceMetrics: e, errors: t } = await this.collect({ timeoutMillis: this._exportTimeout });
      if (t.length > 0) I.diag.error("PeriodicExportingMetricReader: metrics collection errors", ...t);
      if (e.resource.asyncAttributesPending) try {
        await e.resource.waitForAsyncAttributes?.();
      } catch (i) {
        I.diag.debug("Error while resolving async portion of resource: ", i), O.globalErrorHandler(i);
      }
      if (e.scopeMetrics.length === 0) return;
      let r = await O.internal._export(this._exporter, e);
      if (r.code !== O.ExportResultCode.SUCCESS) throw Error(`PeriodicExportingMetricReader: metrics export failed (error ${r.error})`);
    }
    onInitialized() {
      if (this._interval = setInterval(() => {
        this._runOnce();
      }, this._exportInterval), typeof this._interval !== "number") this._interval.unref();
    }
    async onForceFlush() {
      await this._runOnce(), await this._exporter.forceFlush();
    }
    async onShutdown() {
      if (this._interval) clearInterval(this._interval);
      await this.onForceFlush(), await this._exporter.shutdown();
    }
  }
  Ir.PeriodicExportingMetricReader = vr;
});
var Lr = (0, import_chunk_w1d7ygsk.V)(function(Nr) {
  Object.defineProperty(Nr, "__esModule", { value: true });
  Nr.InMemoryMetricExporter = void 0;
  var de = (0, import_chunk_xfj2cwfv.Q_)();
  class Rr {
    _shutdown = false;
    _aggregationTemporality;
    _metrics = [];
    constructor(e) {
      this._aggregationTemporality = e;
    }
    export(e, t) {
      if (this._shutdown) {
        setTimeout(() => t({ code: de.ExportResultCode.FAILED }), 0);
        return;
      }
      this._metrics.push(e), setTimeout(() => t({ code: de.ExportResultCode.SUCCESS }), 0);
    }
    getMetrics() {
      return this._metrics;
    }
    forceFlush() {
      return Promise.resolve();
    }
    reset() {
      this._metrics = [];
    }
    selectAggregationTemporality(e) {
      return this._aggregationTemporality;
    }
    shutdown() {
      return this._shutdown = true, Promise.resolve();
    }
  }
  Nr.InMemoryMetricExporter = Rr;
});
var Dr = (0, import_chunk_w1d7ygsk.V)(function(Ur) {
  Object.defineProperty(Ur, "__esModule", { value: true });
  Ur.ConsoleMetricExporter = void 0;
  var me = (0, import_chunk_xfj2cwfv.Q_)(), Gr = De();
  class Ve {
    _shutdown = false;
    _temporalitySelector;
    constructor(e) {
      this._temporalitySelector = e?.temporalitySelector ?? Gr.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR;
    }
    export(e, t) {
      if (this._shutdown) {
        t({ code: me.ExportResultCode.FAILED });
        return;
      }
      return Ve._sendMetrics(e, t);
    }
    forceFlush() {
      return Promise.resolve();
    }
    selectAggregationTemporality(e) {
      return this._temporalitySelector(e);
    }
    shutdown() {
      return this._shutdown = true, Promise.resolve();
    }
    static _sendMetrics(e, t) {
      for (let r of e.scopeMetrics) for (let i of r.metrics) console.dir({ descriptor: i.descriptor, dataPointType: i.dataPointType, dataPoints: i.dataPoints }, { depth: null });
      t({ code: me.ExportResultCode.SUCCESS });
    }
  }
  Ur.ConsoleMetricExporter = Ve;
});
var Fr = (0, import_chunk_w1d7ygsk.V)(function(Vr) {
  Object.defineProperty(Vr, "__esModule", { value: true });
  Vr.ViewRegistry = void 0;
  class qr {
    _registeredViews = [];
    addView(e) {
      this._registeredViews.push(e);
    }
    findViews(e, t) {
      return this._registeredViews.filter((i) => this._matchInstrument(i.instrumentSelector, e) && this._matchMeter(i.meterSelector, t));
    }
    _matchInstrument(e, t) {
      return (e.getType() === void 0 || t.type === e.getType()) && e.getNameFilter().match(t.name) && e.getUnitFilter().match(t.unit);
    }
    _matchMeter(e, t) {
      return e.getNameFilter().match(t.name) && (t.version === void 0 || e.getVersionFilter().match(t.version)) && (t.schemaUrl === void 0 || e.getSchemaUrlFilter().match(t.schemaUrl));
    }
  }
  Vr.ViewRegistry = qr;
});
var X = (0, import_chunk_w1d7ygsk.V)(function($r) {
  Object.defineProperty($r, "__esModule", { value: true });
  $r.isValidName = $r.isDescriptorCompatibleWith = $r.createInstrumentDescriptorWithView = $r.createInstrumentDescriptor = void 0;
  var pe = (0, import_chunk_xfj2cwfv._u)(), Hr = b();
  function go(e, t, r) {
    if (!jr(e)) pe.diag.warn(`Invalid metric name: "${e}". The metric name should be a ASCII string with a length no greater than 255 characters.`);
    return { name: e, type: t, description: r?.description ?? "", unit: r?.unit ?? "", valueType: r?.valueType ?? pe.ValueType.DOUBLE, advice: r?.advice ?? {} };
  }
  $r.createInstrumentDescriptor = go;
  function mo(e, t) {
    return { name: e.name ?? t.name, description: e.description ?? t.description, type: t.type, unit: t.unit, valueType: t.valueType, advice: t.advice };
  }
  $r.createInstrumentDescriptorWithView = mo;
  function po(e, t) {
    return Hr.equalsCaseInsensitive(e.name, t.name) && e.unit === t.unit && e.type === t.type && e.valueType === t.valueType;
  }
  $r.isDescriptorCompatibleWith = po;
  var fo = /^[a-z][a-z0-9_.\-/]{0,254}$/i;
  function jr(e) {
    return fo.test(e);
  }
  $r.isValidName = jr;
});
var fe = (0, import_chunk_w1d7ygsk.V)(function(ti) {
  Object.defineProperty(ti, "__esModule", { value: true });
  ti.isObservableInstrument = ti.ObservableUpDownCounterInstrument = ti.ObservableGaugeInstrument = ti.ObservableCounterInstrument = ti.ObservableInstrument = ti.HistogramInstrument = ti.GaugeInstrument = ti.CounterInstrument = ti.UpDownCounterInstrument = ti.SyncInstrument = void 0;
  var S = (0, import_chunk_xfj2cwfv._u)(), Wr = (0, import_chunk_xfj2cwfv.Q_)();
  class U {
    _writableMetricStorage;
    _descriptor;
    constructor(e, t) {
      this._writableMetricStorage = e, this._descriptor = t;
    }
    _record(e, t = {}, r = S.context.active()) {
      if (typeof e !== "number") {
        S.diag.warn(`non-number value provided to metric ${this._descriptor.name}: ${e}`);
        return;
      }
      if (this._descriptor.valueType === S.ValueType.INT && !Number.isInteger(e)) {
        if (S.diag.warn(`INT value type cannot accept a floating-point value for ${this._descriptor.name}, ignoring the fractional digits.`), e = Math.trunc(e), !Number.isInteger(e)) return;
      }
      this._writableMetricStorage.record(e, t, r, Wr.millisToHrTime(Date.now()));
    }
  }
  ti.SyncInstrument = U;
  class Xr extends U {
    add(e, t, r) {
      this._record(e, t, r);
    }
  }
  ti.UpDownCounterInstrument = Xr;
  class Yr extends U {
    add(e, t, r) {
      if (e < 0) {
        S.diag.warn(`negative value provided to counter ${this._descriptor.name}: ${e}`);
        return;
      }
      this._record(e, t, r);
    }
  }
  ti.CounterInstrument = Yr;
  class Kr extends U {
    record(e, t, r) {
      this._record(e, t, r);
    }
  }
  ti.GaugeInstrument = Kr;
  class Jr extends U {
    record(e, t, r) {
      if (e < 0) {
        S.diag.warn(`negative value provided to histogram ${this._descriptor.name}: ${e}`);
        return;
      }
      this._record(e, t, r);
    }
  }
  ti.HistogramInstrument = Jr;
  class B {
    _metricStorages;
    _descriptor;
    _observableRegistry;
    constructor(e, t, r) {
      this._descriptor = e, this._metricStorages = t, this._observableRegistry = r;
    }
    addCallback(e) {
      this._observableRegistry.addCallback(e, this);
    }
    removeCallback(e) {
      this._observableRegistry.removeCallback(e, this);
    }
  }
  ti.ObservableInstrument = B;
  class Zr extends B {
  }
  ti.ObservableCounterInstrument = Zr;
  class Qr extends B {
  }
  ti.ObservableGaugeInstrument = Qr;
  class ei extends B {
  }
  ti.ObservableUpDownCounterInstrument = ei;
  function yo(e) {
    return e instanceof B;
  }
  ti.isObservableInstrument = yo;
});
var oi = (0, import_chunk_w1d7ygsk.V)(function(si) {
  Object.defineProperty(si, "__esModule", { value: true });
  si.Meter = void 0;
  var d = X(), m = fe(), p = v();
  class ii {
    _meterSharedState;
    constructor(e) {
      this._meterSharedState = e;
    }
    createGauge(e, t) {
      let r = d.createInstrumentDescriptor(e, p.InstrumentType.GAUGE, t), i = this._meterSharedState.registerMetricStorage(r);
      return new m.GaugeInstrument(i, r);
    }
    createHistogram(e, t) {
      let r = d.createInstrumentDescriptor(e, p.InstrumentType.HISTOGRAM, t), i = this._meterSharedState.registerMetricStorage(r);
      return new m.HistogramInstrument(i, r);
    }
    createCounter(e, t) {
      let r = d.createInstrumentDescriptor(e, p.InstrumentType.COUNTER, t), i = this._meterSharedState.registerMetricStorage(r);
      return new m.CounterInstrument(i, r);
    }
    createUpDownCounter(e, t) {
      let r = d.createInstrumentDescriptor(e, p.InstrumentType.UP_DOWN_COUNTER, t), i = this._meterSharedState.registerMetricStorage(r);
      return new m.UpDownCounterInstrument(i, r);
    }
    createObservableGauge(e, t) {
      let r = d.createInstrumentDescriptor(e, p.InstrumentType.OBSERVABLE_GAUGE, t), i = this._meterSharedState.registerAsyncMetricStorage(r);
      return new m.ObservableGaugeInstrument(r, i, this._meterSharedState.observableRegistry);
    }
    createObservableCounter(e, t) {
      let r = d.createInstrumentDescriptor(e, p.InstrumentType.OBSERVABLE_COUNTER, t), i = this._meterSharedState.registerAsyncMetricStorage(r);
      return new m.ObservableCounterInstrument(r, i, this._meterSharedState.observableRegistry);
    }
    createObservableUpDownCounter(e, t) {
      let r = d.createInstrumentDescriptor(e, p.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER, t), i = this._meterSharedState.registerAsyncMetricStorage(r);
      return new m.ObservableUpDownCounterInstrument(r, i, this._meterSharedState.observableRegistry);
    }
    addBatchObservableCallback(e, t) {
      this._meterSharedState.observableRegistry.addBatchCallback(e, t);
    }
    removeBatchObservableCallback(e, t) {
      this._meterSharedState.observableRegistry.removeBatchCallback(e, t);
    }
  }
  si.Meter = ii;
});
var ke = (0, import_chunk_w1d7ygsk.V)(function(ui) {
  Object.defineProperty(ui, "__esModule", { value: true });
  ui.MetricStorage = void 0;
  var ai = X();
  class ci {
    _instrumentDescriptor;
    constructor(e) {
      this._instrumentDescriptor = e;
    }
    getInstrumentDescriptor() {
      return this._instrumentDescriptor;
    }
    updateDescription(e) {
      this._instrumentDescriptor = ai.createInstrumentDescriptor(this._instrumentDescriptor.name, this._instrumentDescriptor.type, { description: e, valueType: this._instrumentDescriptor.valueType, unit: this._instrumentDescriptor.unit, advice: this._instrumentDescriptor.advice });
    }
  }
  ui.MetricStorage = ci;
});
var Y = (0, import_chunk_w1d7ygsk.V)(function(gi) {
  Object.defineProperty(gi, "__esModule", { value: true });
  gi.AttributeHashMap = gi.HashMap = void 0;
  var hi = b();
  class Fe {
    _valueMap = /* @__PURE__ */ new Map();
    _keyMap = /* @__PURE__ */ new Map();
    _hash;
    constructor(e) {
      this._hash = e;
    }
    get(e, t) {
      return t ??= this._hash(e), this._valueMap.get(t);
    }
    getOrDefault(e, t) {
      let r = this._hash(e);
      if (this._valueMap.has(r)) return this._valueMap.get(r);
      let i = t();
      if (!this._keyMap.has(r)) this._keyMap.set(r, e);
      return this._valueMap.set(r, i), i;
    }
    set(e, t, r) {
      if (r ??= this._hash(e), !this._keyMap.has(r)) this._keyMap.set(r, e);
      this._valueMap.set(r, t);
    }
    has(e, t) {
      return t ??= this._hash(e), this._valueMap.has(t);
    }
    *keys() {
      let e = this._keyMap.entries(), t = e.next();
      while (t.done !== true) yield [t.value[1], t.value[0]], t = e.next();
    }
    *entries() {
      let e = this._valueMap.entries(), t = e.next();
      while (t.done !== true) yield [this._keyMap.get(t.value[0]), t.value[1], t.value[0]], t = e.next();
    }
    get size() {
      return this._valueMap.size;
    }
  }
  gi.HashMap = Fe;
  class _i extends Fe {
    constructor() {
      super(hi.hashAttributes);
    }
  }
  gi.AttributeHashMap = _i;
});
var He = (0, import_chunk_w1d7ygsk.V)(function(fi) {
  Object.defineProperty(fi, "__esModule", { value: true });
  fi.DeltaMetricProcessor = void 0;
  var mi = b(), D = Y();
  class pi {
    _activeCollectionStorage = new D.AttributeHashMap();
    _cumulativeMemoStorage = new D.AttributeHashMap();
    _cardinalityLimit;
    _overflowAttributes = { "otel.metric.overflow": true };
    _overflowHashCode;
    _aggregator;
    constructor(e, t) {
      this._aggregator = e, this._cardinalityLimit = (t ?? 2e3) - 1, this._overflowHashCode = mi.hashAttributes(this._overflowAttributes);
    }
    record(e, t, r, i) {
      let s = this._activeCollectionStorage.get(t);
      if (!s) {
        if (this._activeCollectionStorage.size >= this._cardinalityLimit) {
          this._activeCollectionStorage.getOrDefault(this._overflowAttributes, () => this._aggregator.createAccumulation(i))?.record(e);
          return;
        }
        s = this._aggregator.createAccumulation(i), this._activeCollectionStorage.set(t, s);
      }
      s?.record(e);
    }
    batchCumulate(e, t) {
      for (let [r, i, s] of e.entries()) {
        let o = r, n = s, a = this._aggregator.createAccumulation(t);
        a?.record(i);
        let c = a;
        if (this._cumulativeMemoStorage.has(o, n)) {
          let l = this._cumulativeMemoStorage.get(o, n);
          c = this._aggregator.diff(l, a);
        } else if (this._cumulativeMemoStorage.size >= this._cardinalityLimit) {
          if (o = this._overflowAttributes, n = this._overflowHashCode, this._cumulativeMemoStorage.has(o, n)) {
            let l = this._cumulativeMemoStorage.get(o, n);
            c = this._aggregator.diff(l, a);
          }
        }
        if (this._activeCollectionStorage.has(o, n)) {
          let l = this._activeCollectionStorage.get(o, n);
          c = this._aggregator.merge(l, c);
        }
        this._cumulativeMemoStorage.set(o, a, n), this._activeCollectionStorage.set(o, c, n);
      }
    }
    collect() {
      let e = this._activeCollectionStorage;
      return this._activeCollectionStorage = new D.AttributeHashMap(), e;
    }
  }
  fi.DeltaMetricProcessor = pi;
});
var je = (0, import_chunk_w1d7ygsk.V)(function(yi) {
  Object.defineProperty(yi, "__esModule", { value: true });
  yi.TemporalMetricProcessor = void 0;
  var Ai = J(), Si = Y();
  class K {
    _aggregator;
    _unreportedAccumulations = /* @__PURE__ */ new Map();
    _reportHistory = /* @__PURE__ */ new Map();
    constructor(e, t) {
      this._aggregator = e, t.forEach((r) => {
        this._unreportedAccumulations.set(r, []);
      });
    }
    buildMetrics(e, t, r, i) {
      this._stashAccumulations(r);
      let s = this._getMergedUnreportedAccumulations(e), o = s, n;
      if (this._reportHistory.has(e)) {
        let c = this._reportHistory.get(e), l = c.collectionTime;
        if (n = c.aggregationTemporality, n === Ai.AggregationTemporality.CUMULATIVE) o = K.merge(c.accumulations, s, this._aggregator);
        else o = K.calibrateStartTime(c.accumulations, s, l);
      } else n = e.selectAggregationTemporality(t.type);
      this._reportHistory.set(e, { accumulations: o, collectionTime: i, aggregationTemporality: n });
      let a = No(o);
      if (a.length === 0) return;
      return this._aggregator.toMetricData(t, n, a, i);
    }
    _stashAccumulations(e) {
      let t = this._unreportedAccumulations.keys();
      for (let r of t) {
        let i = this._unreportedAccumulations.get(r);
        if (i === void 0) i = [], this._unreportedAccumulations.set(r, i);
        i.push(e);
      }
    }
    _getMergedUnreportedAccumulations(e) {
      let t = new Si.AttributeHashMap(), r = this._unreportedAccumulations.get(e);
      if (this._unreportedAccumulations.set(e, []), r === void 0) return t;
      for (let i of r) t = K.merge(t, i, this._aggregator);
      return t;
    }
    static merge(e, t, r) {
      let i = e, s = t.entries(), o = s.next();
      while (o.done !== true) {
        let [n, a, c] = o.value;
        if (e.has(n, c)) {
          let l = e.get(n, c), F = r.merge(l, a);
          i.set(n, F, c);
        } else i.set(n, a, c);
        o = s.next();
      }
      return i;
    }
    static calibrateStartTime(e, t, r) {
      for (let [i, s] of e.keys()) t.get(i, s)?.setStartTime(r);
      return t;
    }
  }
  yi.TemporalMetricProcessor = K;
  function No(e) {
    return Array.from(e.entries());
  }
});
var Pi = (0, import_chunk_w1d7ygsk.V)(function(Ii) {
  Object.defineProperty(Ii, "__esModule", { value: true });
  Ii.AsyncMetricStorage = void 0;
  var bi = ke(), Ti = He(), Ei = je(), wi = Y();
  class vi extends bi.MetricStorage {
    _aggregationCardinalityLimit;
    _deltaMetricStorage;
    _temporalMetricStorage;
    _attributesProcessor;
    constructor(e, t, r, i, s) {
      super(e);
      this._aggregationCardinalityLimit = s, this._deltaMetricStorage = new Ti.DeltaMetricProcessor(t, this._aggregationCardinalityLimit), this._temporalMetricStorage = new Ei.TemporalMetricProcessor(t, i), this._attributesProcessor = r;
    }
    record(e, t) {
      let r = new wi.AttributeHashMap();
      for (let [i, s] of e.entries()) r.set(this._attributesProcessor.process(i), s);
      this._deltaMetricStorage.batchCumulate(r, t);
    }
    collect(e, t) {
      let r = this._deltaMetricStorage.collect();
      return this._temporalMetricStorage.buildMetrics(e, this._instrumentDescriptor, r, t);
    }
  }
  Ii.AsyncMetricStorage = vi;
});
var Bi = (0, import_chunk_w1d7ygsk.V)(function(Gi) {
  Object.defineProperty(Gi, "__esModule", { value: true });
  Gi.getConflictResolutionRecipe = Gi.getDescriptionResolutionRecipe = Gi.getTypeConflictResolutionRecipe = Gi.getUnitConflictResolutionRecipe = Gi.getValueTypeConflictResolutionRecipe = Gi.getIncompatibilityDetails = void 0;
  function Co(e, t) {
    let r = "";
    if (e.unit !== t.unit) r += `	- Unit '${e.unit}' does not match '${t.unit}'
`;
    if (e.type !== t.type) r += `	- Type '${e.type}' does not match '${t.type}'
`;
    if (e.valueType !== t.valueType) r += `	- Value Type '${e.valueType}' does not match '${t.valueType}'
`;
    if (e.description !== t.description) r += `	- Description '${e.description}' does not match '${t.description}'
`;
    return r;
  }
  Gi.getIncompatibilityDetails = Co;
  function Ri(e, t) {
    return `	- use valueType '${e.valueType}' on instrument creation or use an instrument name other than '${t.name}'`;
  }
  Gi.getValueTypeConflictResolutionRecipe = Ri;
  function Ni(e, t) {
    return `	- use unit '${e.unit}' on instrument creation or use an instrument name other than '${t.name}'`;
  }
  Gi.getUnitConflictResolutionRecipe = Ni;
  function Ci(e, t) {
    let r = { name: t.name, type: t.type, unit: t.unit }, i = JSON.stringify(r);
    return `	- create a new view with a name other than '${e.name}' and InstrumentSelector '${i}'`;
  }
  Gi.getTypeConflictResolutionRecipe = Ci;
  function Li(e, t) {
    let r = { name: t.name, type: t.type, unit: t.unit }, i = JSON.stringify(r);
    return `	- create a new view with a name other than '${e.name}' and InstrumentSelector '${i}'
    	- OR - create a new view with the name ${e.name} and description '${e.description}' and InstrumentSelector ${i}
    	- OR - create a new view with the name ${t.name} and description '${e.description}' and InstrumentSelector ${i}`;
  }
  Gi.getDescriptionResolutionRecipe = Li;
  function Lo(e, t) {
    if (e.valueType !== t.valueType) return Ri(e, t);
    if (e.unit !== t.unit) return Ni(e, t);
    if (e.type !== t.type) return Ci(e, t);
    if (e.description !== t.description) return Li(e, t);
    return "";
  }
  Gi.getConflictResolutionRecipe = Lo;
});
var ki = (0, import_chunk_w1d7ygsk.V)(function(qi) {
  Object.defineProperty(qi, "__esModule", { value: true });
  qi.MetricStorageRegistry = void 0;
  var Di = X(), Me = (0, import_chunk_xfj2cwfv._u)(), P = Bi();
  class $e {
    _sharedRegistry = /* @__PURE__ */ new Map();
    _perCollectorRegistry = /* @__PURE__ */ new Map();
    static create() {
      return new $e();
    }
    getStorages(e) {
      let t = [];
      for (let i of this._sharedRegistry.values()) t = t.concat(i);
      let r = this._perCollectorRegistry.get(e);
      if (r != null) for (let i of r.values()) t = t.concat(i);
      return t;
    }
    register(e) {
      this._registerStorage(e, this._sharedRegistry);
    }
    registerForCollector(e, t) {
      let r = this._perCollectorRegistry.get(e);
      if (r == null) r = /* @__PURE__ */ new Map(), this._perCollectorRegistry.set(e, r);
      this._registerStorage(t, r);
    }
    findOrUpdateCompatibleStorage(e) {
      let t = this._sharedRegistry.get(e.name);
      if (t === void 0) return null;
      return this._findOrUpdateCompatibleStorage(e, t);
    }
    findOrUpdateCompatibleCollectorStorage(e, t) {
      let r = this._perCollectorRegistry.get(e);
      if (r === void 0) return null;
      let i = r.get(t.name);
      if (i === void 0) return null;
      return this._findOrUpdateCompatibleStorage(t, i);
    }
    _registerStorage(e, t) {
      let r = e.getInstrumentDescriptor(), i = t.get(r.name);
      if (i === void 0) {
        t.set(r.name, [e]);
        return;
      }
      i.push(e);
    }
    _findOrUpdateCompatibleStorage(e, t) {
      let r = null;
      for (let i of t) {
        let s = i.getInstrumentDescriptor();
        if (Di.isDescriptorCompatibleWith(s, e)) {
          if (s.description !== e.description) {
            if (e.description.length > s.description.length) i.updateDescription(e.description);
            Me.diag.warn("A view or instrument with the name ", e.name, ` has already been registered, but has a different description and is incompatible with another registered view.
`, `Details:
`, P.getIncompatibilityDetails(s, e), `The longer description will be used.
To resolve the conflict:`, P.getConflictResolutionRecipe(s, e));
          }
          r = i;
        } else Me.diag.warn("A view or instrument with the name ", e.name, ` has already been registered and is incompatible with another registered view.
`, `Details:
`, P.getIncompatibilityDetails(s, e), `To resolve the conflict:
`, P.getConflictResolutionRecipe(s, e));
      }
      return r;
    }
  }
  qi.MetricStorageRegistry = $e;
});
var $i = (0, import_chunk_w1d7ygsk.V)(function(Hi) {
  Object.defineProperty(Hi, "__esModule", { value: true });
  Hi.MultiMetricStorage = void 0;
  class Fi {
    _backingStorages;
    constructor(e) {
      this._backingStorages = e;
    }
    record(e, t, r, i) {
      let s = this._backingStorages;
      for (let o = 0; o < s.length; o++) s[o].record(e, t, r, i);
    }
  }
  Hi.MultiMetricStorage = Fi;
});
var Ji = (0, import_chunk_w1d7ygsk.V)(function(Yi) {
  Object.defineProperty(Yi, "__esModule", { value: true });
  Yi.BatchObservableResultImpl = Yi.ObservableResultImpl = void 0;
  var y = (0, import_chunk_xfj2cwfv._u)(), Ae = Y(), zi = fe();
  class Wi {
    _buffer = new Ae.AttributeHashMap();
    _instrumentName;
    _valueType;
    constructor(e, t) {
      this._instrumentName = e, this._valueType = t;
    }
    observe(e, t = {}) {
      if (typeof e !== "number") {
        y.diag.warn(`non-number value provided to metric ${this._instrumentName}: ${e}`);
        return;
      }
      if (this._valueType === y.ValueType.INT && !Number.isInteger(e)) {
        if (y.diag.warn(`INT value type cannot accept a floating-point value for ${this._instrumentName}, ignoring the fractional digits.`), e = Math.trunc(e), !Number.isInteger(e)) return;
      }
      this._buffer.set(t, e);
    }
  }
  Yi.ObservableResultImpl = Wi;
  class Xi {
    _buffer = /* @__PURE__ */ new Map();
    observe(e, t, r = {}) {
      if (!zi.isObservableInstrument(e)) return;
      let i = this._buffer.get(e);
      if (i == null) i = new Ae.AttributeHashMap(), this._buffer.set(e, i);
      if (typeof t !== "number") {
        y.diag.warn(`non-number value provided to metric ${e._descriptor.name}: ${t}`);
        return;
      }
      if (e._descriptor.valueType === y.ValueType.INT && !Number.isInteger(t)) {
        if (y.diag.warn(`INT value type cannot accept a floating-point value for ${e._descriptor.name}, ignoring the fractional digits.`), t = Math.trunc(t), !Number.isInteger(t)) return;
      }
      i.set(r, t);
    }
  }
  Yi.BatchObservableResultImpl = Xi;
});
var rs = (0, import_chunk_w1d7ygsk.V)(function(es) {
  Object.defineProperty(es, "__esModule", { value: true });
  es.ObservableRegistry = void 0;
  var Zi = (0, import_chunk_xfj2cwfv._u)(), Se = fe(), ye = Ji(), q = b();
  class Qi {
    _callbacks = [];
    _batchCallbacks = [];
    addCallback(e, t) {
      if (this._findCallback(e, t) >= 0) return;
      this._callbacks.push({ callback: e, instrument: t });
    }
    removeCallback(e, t) {
      let r = this._findCallback(e, t);
      if (r < 0) return;
      this._callbacks.splice(r, 1);
    }
    addBatchCallback(e, t) {
      let r = new Set(t.filter(Se.isObservableInstrument));
      if (r.size === 0) {
        Zi.diag.error("BatchObservableCallback is not associated with valid instruments", t);
        return;
      }
      if (this._findBatchCallback(e, r) >= 0) return;
      this._batchCallbacks.push({ callback: e, instruments: r });
    }
    removeBatchCallback(e, t) {
      let r = new Set(t.filter(Se.isObservableInstrument)), i = this._findBatchCallback(e, r);
      if (i < 0) return;
      this._batchCallbacks.splice(i, 1);
    }
    async observe(e, t) {
      let r = this._observeCallbacks(e, t), i = this._observeBatchCallbacks(e, t);
      return (await Promise.allSettled([...r, ...i])).filter((n) => n.status === "rejected").map((n) => n.reason);
    }
    _observeCallbacks(e, t) {
      return this._callbacks.map(async ({ callback: r, instrument: i }) => {
        let s = new ye.ObservableResultImpl(i._descriptor.name, i._descriptor.valueType), o = Promise.resolve(r(s));
        if (t != null) o = q.callWithTimeout(o, t);
        await o, i._metricStorages.forEach((n) => {
          n.record(s._buffer, e);
        });
      });
    }
    _observeBatchCallbacks(e, t) {
      return this._batchCallbacks.map(async ({ callback: r, instruments: i }) => {
        let s = new ye.BatchObservableResultImpl(), o = Promise.resolve(r(s));
        if (t != null) o = q.callWithTimeout(o, t);
        await o, i.forEach((n) => {
          let a = s._buffer.get(n);
          if (a == null) return;
          n._metricStorages.forEach((c) => {
            c.record(a, e);
          });
        });
      });
    }
    _findCallback(e, t) {
      return this._callbacks.findIndex((r) => r.callback === e && r.instrument === t);
    }
    _findBatchCallback(e, t) {
      return this._batchCallbacks.findIndex((r) => r.callback === e && q.setEquals(r.instruments, t));
    }
  }
  es.ObservableRegistry = Qi;
});
var us = (0, import_chunk_w1d7ygsk.V)(function(as) {
  Object.defineProperty(as, "__esModule", { value: true });
  as.SyncMetricStorage = void 0;
  var is = ke(), ss = He(), ns = je();
  class os extends is.MetricStorage {
    _aggregationCardinalityLimit;
    _deltaMetricStorage;
    _temporalMetricStorage;
    _attributesProcessor;
    constructor(e, t, r, i, s) {
      super(e);
      this._aggregationCardinalityLimit = s, this._deltaMetricStorage = new ss.DeltaMetricProcessor(t, this._aggregationCardinalityLimit), this._temporalMetricStorage = new ns.TemporalMetricProcessor(t, i), this._attributesProcessor = r;
    }
    record(e, t, r, i) {
      t = this._attributesProcessor.process(t, r), this._deltaMetricStorage.record(e, t, r, i);
    }
    collect(e, t) {
      let r = this._deltaMetricStorage.collect();
      return this._temporalMetricStorage.buildMetrics(e, this._instrumentDescriptor, r, t);
    }
  }
  as.SyncMetricStorage = os;
});
var xe = (0, import_chunk_w1d7ygsk.V)(function(ds) {
  Object.defineProperty(ds, "__esModule", { value: true });
  ds.createDenyListAttributesProcessor = ds.createAllowListAttributesProcessor = ds.createMultiAttributesProcessor = ds.createNoopAttributesProcessor = void 0;
  class ls {
    process(e, t) {
      return e;
    }
  }
  class hs {
    _processors;
    constructor(e) {
      this._processors = e;
    }
    process(e, t) {
      let r = e;
      for (let i of this._processors) r = i.process(r, t);
      return r;
    }
  }
  class _s {
    _allowedAttributeNames;
    constructor(e) {
      this._allowedAttributeNames = new Set(e);
    }
    process(e, t) {
      let r = {};
      for (let i in e) if (Object.prototype.hasOwnProperty.call(e, i) && this._allowedAttributeNames.has(i)) r[i] = e[i];
      return r;
    }
  }
  class gs {
    _deniedAttributeNames;
    constructor(e) {
      this._deniedAttributeNames = new Set(e);
    }
    process(e, t) {
      let r = {};
      for (let i in e) if (Object.prototype.hasOwnProperty.call(e, i) && !this._deniedAttributeNames.has(i)) r[i] = e[i];
      return r;
    }
  }
  function ko() {
    return $o;
  }
  ds.createNoopAttributesProcessor = ko;
  function Fo(e) {
    return new hs(e);
  }
  ds.createMultiAttributesProcessor = Fo;
  function Ho(e) {
    return new _s(e);
  }
  ds.createAllowListAttributesProcessor = Ho;
  function jo(e) {
    return new gs(e);
  }
  ds.createDenyListAttributesProcessor = jo;
  var $o = new ls();
});
var vs = (0, import_chunk_w1d7ygsk.V)(function(Es) {
  Object.defineProperty(Es, "__esModule", { value: true });
  Es.MeterSharedState = void 0;
  var ps = X(), fs = oi(), Ms = Pi(), As = ki(), Ss = $i(), ys = rs(), xs = us(), bs = xe();
  class Ts {
    metricStorageRegistry = new As.MetricStorageRegistry();
    observableRegistry = new ys.ObservableRegistry();
    meter;
    _meterProviderSharedState;
    _instrumentationScope;
    constructor(e, t) {
      this.meter = new fs.Meter(this), this._meterProviderSharedState = e, this._instrumentationScope = t;
    }
    registerMetricStorage(e) {
      let t = this._registerMetricStorage(e, xs.SyncMetricStorage);
      if (t.length === 1) return t[0];
      return new Ss.MultiMetricStorage(t);
    }
    registerAsyncMetricStorage(e) {
      return this._registerMetricStorage(e, Ms.AsyncMetricStorage);
    }
    async collect(e, t, r) {
      let i = await this.observableRegistry.observe(t, r?.timeoutMillis), s = this.metricStorageRegistry.getStorages(e);
      if (s.length === 0) return null;
      let o = [];
      if (s.forEach((n) => {
        let a = n.collect(e, t);
        if (a != null) o.push(a);
      }), o.length === 0) return { errors: i };
      return { scopeMetrics: { scope: this._instrumentationScope, metrics: o }, errors: i };
    }
    _registerMetricStorage(e, t) {
      let i = this._meterProviderSharedState.viewRegistry.findViews(e, this._instrumentationScope).map((s) => {
        let o = ps.createInstrumentDescriptorWithView(s, e), n = this.metricStorageRegistry.findOrUpdateCompatibleStorage(o);
        if (n != null) return n;
        let a = s.aggregation.createAggregator(o), c = new t(o, a, s.attributesProcessor, this._meterProviderSharedState.metricCollectors, s.aggregationCardinalityLimit);
        return this.metricStorageRegistry.register(c), c;
      });
      if (i.length === 0) {
        let o = this._meterProviderSharedState.selectAggregations(e.type).map(([n, a]) => {
          let c = this.metricStorageRegistry.findOrUpdateCompatibleCollectorStorage(n, e);
          if (c != null) return c;
          let l = a.createAggregator(e), F = n.selectCardinalityLimit(e.type), We = new t(e, l, bs.createNoopAttributesProcessor(), [n], F);
          return this.metricStorageRegistry.registerForCollector(n, We), We;
        });
        i = i.concat(o);
      }
      return i;
    }
  }
  Es.MeterSharedState = Ts;
});
var Gs = (0, import_chunk_w1d7ygsk.V)(function(Cs) {
  Object.defineProperty(Cs, "__esModule", { value: true });
  Cs.MeterProviderSharedState = void 0;
  var Is = b(), Os = Fr(), Ps = vs(), Rs = W();
  class Ns {
    viewRegistry = new Os.ViewRegistry();
    metricCollectors = [];
    meterSharedStates = /* @__PURE__ */ new Map();
    resource;
    constructor(e) {
      this.resource = e;
    }
    getMeterSharedState(e) {
      let t = Is.instrumentationScopeId(e), r = this.meterSharedStates.get(t);
      if (r == null) r = new Ps.MeterSharedState(this, e), this.meterSharedStates.set(t, r);
      return r;
    }
    selectAggregations(e) {
      let t = [];
      for (let r of this.metricCollectors) t.push([r, Rs.toAggregation(r.selectAggregation(e))]);
      return t;
    }
  }
  Cs.MeterProviderSharedState = Ns;
});
var Vs = (0, import_chunk_w1d7ygsk.V)(function(Ds) {
  Object.defineProperty(Ds, "__esModule", { value: true });
  Ds.MetricCollector = void 0;
  var Us = (0, import_chunk_xfj2cwfv.Q_)();
  class Bs {
    _sharedState;
    _metricReader;
    constructor(e, t) {
      this._sharedState = e, this._metricReader = t;
    }
    async collect(e) {
      let t = Us.millisToHrTime(Date.now()), r = [], i = [], s = Array.from(this._sharedState.meterSharedStates.values()).map(async (o) => {
        let n = await o.collect(this, t, e);
        if (n?.scopeMetrics != null) r.push(n.scopeMetrics);
        if (n?.errors != null) i.push(...n.errors);
      });
      return await Promise.all(s), { resourceMetrics: { resource: this._sharedState.resource, scopeMetrics: r }, errors: i };
    }
    async forceFlush(e) {
      await this._metricReader.forceFlush(e);
    }
    async shutdown(e) {
      await this._metricReader.shutdown(e);
    }
    selectAggregationTemporality(e) {
      return this._metricReader.selectAggregationTemporality(e);
    }
    selectAggregation(e) {
      return this._metricReader.selectAggregation(e);
    }
    selectCardinalityLimit(e) {
      return this._metricReader.selectCardinalityLimit?.(e) ?? 2e3;
    }
  }
  Ds.MetricCollector = Bs;
});
var be = (0, import_chunk_w1d7ygsk.V)(function(Fs) {
  Object.defineProperty(Fs, "__esModule", { value: true });
  Fs.ExactPredicate = Fs.PatternPredicate = void 0;
  var Yo = /[\^$\\.+?()[\]{}|]/g;
  class ze {
    _matchAll;
    _regexp;
    constructor(e) {
      if (e === "*") this._matchAll = true, this._regexp = /.*/;
      else this._matchAll = false, this._regexp = new RegExp(ze.escapePattern(e));
    }
    match(e) {
      if (this._matchAll) return true;
      return this._regexp.test(e);
    }
    static escapePattern(e) {
      return `^${e.replace(Yo, "\\$&").replace("*", ".*")}$`;
    }
    static hasWildcard(e) {
      return e.includes("*");
    }
  }
  Fs.PatternPredicate = ze;
  class ks {
    _matchAll;
    _pattern;
    constructor(e) {
      this._matchAll = e === void 0, this._pattern = e;
    }
    match(e) {
      if (this._matchAll) return true;
      if (e === this._pattern) return true;
      return false;
    }
  }
  Fs.ExactPredicate = ks;
});
var Ws = (0, import_chunk_w1d7ygsk.V)(function($s) {
  Object.defineProperty($s, "__esModule", { value: true });
  $s.InstrumentSelector = void 0;
  var Te = be();
  class js {
    _nameFilter;
    _type;
    _unitFilter;
    constructor(e) {
      this._nameFilter = new Te.PatternPredicate(e?.name ?? "*"), this._type = e?.type, this._unitFilter = new Te.ExactPredicate(e?.unit);
    }
    getType() {
      return this._type;
    }
    getNameFilter() {
      return this._nameFilter;
    }
    getUnitFilter() {
      return this._unitFilter;
    }
  }
  $s.InstrumentSelector = js;
});
var Js = (0, import_chunk_w1d7ygsk.V)(function(Ys) {
  Object.defineProperty(Ys, "__esModule", { value: true });
  Ys.MeterSelector = void 0;
  var k = be();
  class Xs {
    _nameFilter;
    _versionFilter;
    _schemaUrlFilter;
    constructor(e) {
      this._nameFilter = new k.ExactPredicate(e?.name), this._versionFilter = new k.ExactPredicate(e?.version), this._schemaUrlFilter = new k.ExactPredicate(e?.schemaUrl);
    }
    getNameFilter() {
      return this._nameFilter;
    }
    getVersionFilter() {
      return this._versionFilter;
    }
    getSchemaUrlFilter() {
      return this._schemaUrlFilter;
    }
  }
  Ys.MeterSelector = Xs;
});
var nn = (0, import_chunk_w1d7ygsk.V)(function(rn) {
  Object.defineProperty(rn, "__esModule", { value: true });
  rn.View = void 0;
  var Zs = be(), Ee = xe(), Qs = Ws(), en = Js(), we = W();
  function Jo(e) {
    return e.instrumentName == null && e.instrumentType == null && e.instrumentUnit == null && e.meterName == null && e.meterVersion == null && e.meterSchemaUrl == null;
  }
  function Zo(e) {
    if (Jo(e)) throw Error("Cannot create view with no selector arguments supplied");
    if (e.name != null && (e?.instrumentName == null || Zs.PatternPredicate.hasWildcard(e.instrumentName))) throw Error("Views with a specified name must be declared with an instrument selector that selects at most one instrument per meter.");
  }
  class tn {
    name;
    description;
    aggregation;
    attributesProcessor;
    instrumentSelector;
    meterSelector;
    aggregationCardinalityLimit;
    constructor(e) {
      if (Zo(e), e.attributesProcessors != null) this.attributesProcessor = Ee.createMultiAttributesProcessor(e.attributesProcessors);
      else this.attributesProcessor = Ee.createNoopAttributesProcessor();
      this.name = e.name, this.description = e.description, this.aggregation = we.toAggregation(e.aggregation ?? { type: we.AggregationType.DEFAULT }), this.instrumentSelector = new Qs.InstrumentSelector({ name: e.instrumentName, type: e.instrumentType, unit: e.instrumentUnit }), this.meterSelector = new en.MeterSelector({ name: e.meterName, version: e.meterVersion, schemaUrl: e.meterSchemaUrl }), this.aggregationCardinalityLimit = e.aggregationCardinalityLimit;
    }
  }
  rn.View = tn;
});
var gn = (0, import_chunk_w1d7ygsk.V)(function(hn) {
  Object.defineProperty(hn, "__esModule", { value: true });
  hn.MeterProvider = void 0;
  var R = (0, import_chunk_xfj2cwfv._u)(), on = (0, import_chunk_xfj2cwfv.U6t)(), an = Gs(), cn = Vs(), un = nn();
  class ln {
    _sharedState;
    _shutdown = false;
    constructor(e) {
      if (this._sharedState = new an.MeterProviderSharedState(e?.resource ?? on.defaultResource()), e?.views != null && e.views.length > 0) for (let t of e.views) this._sharedState.viewRegistry.addView(new un.View(t));
      if (e?.readers != null && e.readers.length > 0) for (let t of e.readers) {
        let r = new cn.MetricCollector(this._sharedState, t);
        t.setMetricProducer(r), this._sharedState.metricCollectors.push(r);
      }
    }
    getMeter(e, t = "", r = {}) {
      if (this._shutdown) return R.diag.warn("A shutdown MeterProvider cannot provide a Meter"), R.createNoopMeter();
      return this._sharedState.getMeterSharedState({ name: e, version: t, schemaUrl: r.schemaUrl }).meter;
    }
    async shutdown(e) {
      if (this._shutdown) {
        R.diag.warn("shutdown may only be called once per MeterProvider");
        return;
      }
      this._shutdown = true, await Promise.all(this._sharedState.metricCollectors.map((t) => t.shutdown(e)));
    }
    async forceFlush(e) {
      if (this._shutdown) {
        R.diag.warn("invalid attempt to force flush after MeterProvider shutdown");
        return;
      }
      await Promise.all(this._sharedState.metricCollectors.map((t) => t.forceFlush(e)));
    }
  }
  hn.MeterProvider = ln;
});
var pgt = (0, import_chunk_w1d7ygsk.V)(function(f) {
  Object.defineProperty(f, "__esModule", { value: true });
  f.TimeoutError = f.createDenyListAttributesProcessor = f.createAllowListAttributesProcessor = f.AggregationType = f.MeterProvider = f.ConsoleMetricExporter = f.InMemoryMetricExporter = f.PeriodicExportingMetricReader = f.MetricReader = f.InstrumentType = f.DataPointType = f.AggregationTemporality = void 0;
  var Qo = J();
  Object.defineProperty(f, "AggregationTemporality", { enumerable: true, get: function() {
    return Qo.AggregationTemporality;
  } });
  var dn = v();
  Object.defineProperty(f, "DataPointType", { enumerable: true, get: function() {
    return dn.DataPointType;
  } });
  Object.defineProperty(f, "InstrumentType", { enumerable: true, get: function() {
    return dn.InstrumentType;
  } });
  var ea = qe();
  Object.defineProperty(f, "MetricReader", { enumerable: true, get: function() {
    return ea.MetricReader;
  } });
  var ta = Pr();
  Object.defineProperty(f, "PeriodicExportingMetricReader", { enumerable: true, get: function() {
    return ta.PeriodicExportingMetricReader;
  } });
  var ra = Lr();
  Object.defineProperty(f, "InMemoryMetricExporter", { enumerable: true, get: function() {
    return ra.InMemoryMetricExporter;
  } });
  var ia = Dr();
  Object.defineProperty(f, "ConsoleMetricExporter", { enumerable: true, get: function() {
    return ia.ConsoleMetricExporter;
  } });
  var sa = gn();
  Object.defineProperty(f, "MeterProvider", { enumerable: true, get: function() {
    return sa.MeterProvider;
  } });
  var na = W();
  Object.defineProperty(f, "AggregationType", { enumerable: true, get: function() {
    return na.AggregationType;
  } });
  var mn = xe();
  Object.defineProperty(f, "createAllowListAttributesProcessor", { enumerable: true, get: function() {
    return mn.createAllowListAttributesProcessor;
  } });
  Object.defineProperty(f, "createDenyListAttributesProcessor", { enumerable: true, get: function() {
    return mn.createDenyListAttributesProcessor;
  } });
  var oa = b();
  Object.defineProperty(f, "TimeoutError", { enumerable: true, get: function() {
    return oa.TimeoutError;
  } });
});
