var of = Object.defineProperty,
  sf = Object.defineProperties;
var af = Object.getOwnPropertyDescriptors;
var xn = Object.getOwnPropertySymbols;
var ha = Object.prototype.hasOwnProperty,
  pa = Object.prototype.propertyIsEnumerable;
var fa = (e, t, n) =>
    t in e
      ? of(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  ee = (e, t) => {
    for (var n in (t ||= {})) ha.call(t, n) && fa(e, n, t[n]);
    if (xn) for (var n of xn(t)) pa.call(t, n) && fa(e, n, t[n]);
    return e;
  },
  ue = (e, t) => sf(e, af(t));
var Xv = (e, t) => {
  var n = {};
  for (var r in e) ha.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && xn)
    for (var r of xn(e)) t.indexOf(r) < 0 && pa.call(e, r) && (n[r] = e[r]);
  return n;
};
function ga(e, t) {
  return Object.is(e, t);
}
var V = null,
  Qt = !1,
  Sn = 1,
  ge = Symbol("SIGNAL");
function b(e) {
  let t = V;
  return (V = e), t;
}
function ma() {
  return V;
}
function uf() {
  return Qt;
}
var yt = {
  version: 0,
  lastCleanEpoch: 0,
  dirty: !1,
  producerNode: void 0,
  producerLastReadVersion: void 0,
  producerIndexOfThis: void 0,
  nextProducerIndex: 0,
  liveConsumerNode: void 0,
  liveConsumerIndexOfThis: void 0,
  consumerAllowSignalWrites: !1,
  consumerIsAlwaysLive: !1,
  producerMustRecompute: () => !1,
  producerRecomputeValue: () => {},
  consumerMarkedDirty: () => {},
  consumerOnSignalRead: () => {},
};
function _o(e) {
  if (Qt) throw new Error("");
  if (V === null) return;
  V.consumerOnSignalRead(e);
  let t = V.nextProducerIndex++;
  if ((Rn(V), t < V.producerNode.length && V.producerNode[t] !== e && Kt(V))) {
    let n = V.producerNode[t];
    Fn(n, V.producerIndexOfThis[t]);
  }
  V.producerNode[t] !== e &&
    ((V.producerNode[t] = e),
    (V.producerIndexOfThis[t] = Kt(V) ? Ea(e, V, t) : 0)),
    (V.producerLastReadVersion[t] = e.version);
}
function cf() {
  Sn++;
}
function ya(e) {
  if (!(Kt(e) && !e.dirty) && !(!e.dirty && e.lastCleanEpoch === Sn)) {
    if (!e.producerMustRecompute(e) && !An(e)) {
      (e.dirty = !1), (e.lastCleanEpoch = Sn);
      return;
    }
    e.producerRecomputeValue(e), (e.dirty = !1), (e.lastCleanEpoch = Sn);
  }
}
function Da(e) {
  if (e.liveConsumerNode === void 0) return;
  let t = Qt;
  Qt = !0;
  try {
    for (let n of e.liveConsumerNode) n.dirty || Ia(n);
  } finally {
    Qt = t;
  }
}
function va() {
  return V?.consumerAllowSignalWrites !== !1;
}
function Ia(e) {
  (e.dirty = !0), Da(e), e.consumerMarkedDirty?.(e);
}
function Jt(e) {
  return e && (e.nextProducerIndex = 0), b(e);
}
function Nn(e, t) {
  if (
    (b(t),
    !(
      !e ||
      e.producerNode === void 0 ||
      e.producerIndexOfThis === void 0 ||
      e.producerLastReadVersion === void 0
    ))
  ) {
    if (Kt(e))
      for (let n = e.nextProducerIndex; n < e.producerNode.length; n++)
        Fn(e.producerNode[n], e.producerIndexOfThis[n]);
    for (; e.producerNode.length > e.nextProducerIndex; )
      e.producerNode.pop(),
        e.producerLastReadVersion.pop(),
        e.producerIndexOfThis.pop();
  }
}
function An(e) {
  Rn(e);
  for (let t = 0; t < e.producerNode.length; t++) {
    let n = e.producerNode[t],
      r = e.producerLastReadVersion[t];
    if (r !== n.version || (ya(n), r !== n.version)) return !0;
  }
  return !1;
}
function On(e) {
  if ((Rn(e), Kt(e)))
    for (let t = 0; t < e.producerNode.length; t++)
      Fn(e.producerNode[t], e.producerIndexOfThis[t]);
  (e.producerNode.length =
    e.producerLastReadVersion.length =
    e.producerIndexOfThis.length =
      0),
    e.liveConsumerNode &&
      (e.liveConsumerNode.length = e.liveConsumerIndexOfThis.length = 0);
}
function Ea(e, t, n) {
  if ((wa(e), e.liveConsumerNode.length === 0 && Ca(e)))
    for (let r = 0; r < e.producerNode.length; r++)
      e.producerIndexOfThis[r] = Ea(e.producerNode[r], e, r);
  return e.liveConsumerIndexOfThis.push(n), e.liveConsumerNode.push(t) - 1;
}
function Fn(e, t) {
  if ((wa(e), e.liveConsumerNode.length === 1 && Ca(e)))
    for (let r = 0; r < e.producerNode.length; r++)
      Fn(e.producerNode[r], e.producerIndexOfThis[r]);
  let n = e.liveConsumerNode.length - 1;
  if (
    ((e.liveConsumerNode[t] = e.liveConsumerNode[n]),
    (e.liveConsumerIndexOfThis[t] = e.liveConsumerIndexOfThis[n]),
    e.liveConsumerNode.length--,
    e.liveConsumerIndexOfThis.length--,
    t < e.liveConsumerNode.length)
  ) {
    let r = e.liveConsumerIndexOfThis[t],
      o = e.liveConsumerNode[t];
    Rn(o), (o.producerIndexOfThis[r] = t);
  }
}
function Kt(e) {
  return e.consumerIsAlwaysLive || (e?.liveConsumerNode?.length ?? 0) > 0;
}
function Rn(e) {
  (e.producerNode ??= []),
    (e.producerIndexOfThis ??= []),
    (e.producerLastReadVersion ??= []);
}
function wa(e) {
  (e.liveConsumerNode ??= []), (e.liveConsumerIndexOfThis ??= []);
}
function Ca(e) {
  return e.producerNode !== void 0;
}
function ba(e) {
  let t = Object.create(lf);
  t.computation = e;
  let n = () => {
    if ((ya(t), _o(t), t.value === Tn)) throw t.error;
    return t.value;
  };
  return (n[ge] = t), n;
}
var wo = Symbol("UNSET"),
  Co = Symbol("COMPUTING"),
  Tn = Symbol("ERRORED"),
  lf = ue(ee({}, yt), {
    value: wo,
    dirty: !0,
    error: null,
    equal: ga,
    producerMustRecompute(e) {
      return e.value === wo || e.value === Co;
    },
    producerRecomputeValue(e) {
      if (e.value === Co) throw new Error("Detected cycle in computations.");
      let t = e.value;
      e.value = Co;
      let n = Jt(e),
        r;
      try {
        r = e.computation();
      } catch (o) {
        (r = Tn), (e.error = o);
      } finally {
        Nn(e, n);
      }
      if (t !== wo && t !== Tn && r !== Tn && e.equal(t, r)) {
        e.value = t;
        return;
      }
      (e.value = r), e.version++;
    },
  });
function df() {
  throw new Error();
}
var _a = df;
function Ma() {
  _a();
}
function xa(e) {
  _a = e;
}
var ff = null;
function Sa(e) {
  let t = Object.create(Na);
  t.value = e;
  let n = () => (_o(t), t.value);
  return (n[ge] = t), n;
}
function Mo(e, t) {
  va() || Ma(), e.equal(e.value, t) || ((e.value = t), hf(e));
}
function Ta(e, t) {
  va() || Ma(), Mo(e, t(e.value));
}
var Na = ue(ee({}, yt), { equal: ga, value: void 0 });
function hf(e) {
  e.version++, cf(), Da(e), ff?.();
}
function Aa(e, t, n) {
  let r = Object.create(pf);
  n && (r.consumerAllowSignalWrites = !0), (r.fn = e), (r.schedule = t);
  let o = (u) => {
    r.cleanupFn = u;
  };
  function i(u) {
    return u.fn === null && u.schedule === null;
  }
  function s(u) {
    i(u) ||
      (On(u),
      u.cleanupFn(),
      (u.fn = null),
      (u.schedule = null),
      (u.cleanupFn = bo));
  }
  let a = () => {
    if (r.fn === null) return;
    if (uf())
      throw new Error(
        "Schedulers cannot synchronously execute watches while scheduling.",
      );
    if (((r.dirty = !1), r.hasRun && !An(r))) return;
    r.hasRun = !0;
    let u = Jt(r);
    try {
      r.cleanupFn(), (r.cleanupFn = bo), r.fn(o);
    } finally {
      Nn(r, u);
    }
  };
  return (
    (r.ref = {
      notify: () => Ia(r),
      run: a,
      cleanup: () => r.cleanupFn(),
      destroy: () => s(r),
      [ge]: r,
    }),
    r.ref
  );
}
var bo = () => {},
  pf = ue(ee({}, yt), {
    consumerIsAlwaysLive: !0,
    consumerAllowSignalWrites: !1,
    consumerMarkedDirty: (e) => {
      e.schedule !== null && e.schedule(e.ref);
    },
    hasRun: !1,
    cleanupFn: bo,
  });
function g(e) {
  return typeof e == "function";
}
function Dt(e) {
  let n = e((r) => {
    Error.call(r), (r.stack = new Error().stack);
  });
  return (
    (n.prototype = Object.create(Error.prototype)),
    (n.prototype.constructor = n),
    n
  );
}
var Pn = Dt(
  (e) =>
    function (n) {
      e(this),
        (this.message = n
          ? `${n.length} errors occurred during unsubscription:
${n.map((r, o) => `${o + 1}) ${r.toString()}`).join(`
  `)}`
          : ""),
        (this.name = "UnsubscriptionError"),
        (this.errors = n);
    },
);
function We(e, t) {
  if (e) {
    let n = e.indexOf(t);
    0 <= n && e.splice(n, 1);
  }
}
var j = class e {
  constructor(t) {
    (this.initialTeardown = t),
      (this.closed = !1),
      (this._parentage = null),
      (this._finalizers = null);
  }
  unsubscribe() {
    let t;
    if (!this.closed) {
      this.closed = !0;
      let { _parentage: n } = this;
      if (n)
        if (((this._parentage = null), Array.isArray(n)))
          for (let i of n) i.remove(this);
        else n.remove(this);
      let { initialTeardown: r } = this;
      if (g(r))
        try {
          r();
        } catch (i) {
          t = i instanceof Pn ? i.errors : [i];
        }
      let { _finalizers: o } = this;
      if (o) {
        this._finalizers = null;
        for (let i of o)
          try {
            Oa(i);
          } catch (s) {
            (t = t ?? []),
              s instanceof Pn ? (t = [...t, ...s.errors]) : t.push(s);
          }
      }
      if (t) throw new Pn(t);
    }
  }
  add(t) {
    var n;
    if (t && t !== this)
      if (this.closed) Oa(t);
      else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this)) return;
          t._addParent(this);
        }
        (this._finalizers =
          (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t);
      }
  }
  _hasParent(t) {
    let { _parentage: n } = this;
    return n === t || (Array.isArray(n) && n.includes(t));
  }
  _addParent(t) {
    let { _parentage: n } = this;
    this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t;
  }
  _removeParent(t) {
    let { _parentage: n } = this;
    n === t ? (this._parentage = null) : Array.isArray(n) && We(n, t);
  }
  remove(t) {
    let { _finalizers: n } = this;
    n && We(n, t), t instanceof e && t._removeParent(this);
  }
};
j.EMPTY = (() => {
  let e = new j();
  return (e.closed = !0), e;
})();
var xo = j.EMPTY;
function kn(e) {
  return (
    e instanceof j ||
    (e && "closed" in e && g(e.remove) && g(e.add) && g(e.unsubscribe))
  );
}
function Oa(e) {
  g(e) ? e() : e.unsubscribe();
}
var ce = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1,
};
var vt = {
  setTimeout(e, t, ...n) {
    let { delegate: r } = vt;
    return r?.setTimeout ? r.setTimeout(e, t, ...n) : setTimeout(e, t, ...n);
  },
  clearTimeout(e) {
    let { delegate: t } = vt;
    return (t?.clearTimeout || clearTimeout)(e);
  },
  delegate: void 0,
};
function Ln(e) {
  vt.setTimeout(() => {
    let { onUnhandledError: t } = ce;
    if (t) t(e);
    else throw e;
  });
}
function Xt() {}
var Fa = So("C", void 0, void 0);
function Ra(e) {
  return So("E", void 0, e);
}
function Pa(e) {
  return So("N", e, void 0);
}
function So(e, t, n) {
  return { kind: e, value: t, error: n };
}
var qe = null;
function It(e) {
  if (ce.useDeprecatedSynchronousErrorHandling) {
    let t = !qe;
    if ((t && (qe = { errorThrown: !1, error: null }), e(), t)) {
      let { errorThrown: n, error: r } = qe;
      if (((qe = null), n)) throw r;
    }
  } else e();
}
function ka(e) {
  ce.useDeprecatedSynchronousErrorHandling &&
    qe &&
    ((qe.errorThrown = !0), (qe.error = e));
}
var Ze = class extends j {
    constructor(t) {
      super(),
        (this.isStopped = !1),
        t
          ? ((this.destination = t), kn(t) && t.add(this))
          : (this.destination = yf);
    }
    static create(t, n, r) {
      return new be(t, n, r);
    }
    next(t) {
      this.isStopped ? No(Pa(t), this) : this._next(t);
    }
    error(t) {
      this.isStopped
        ? No(Ra(t), this)
        : ((this.isStopped = !0), this._error(t));
    }
    complete() {
      this.isStopped ? No(Fa, this) : ((this.isStopped = !0), this._complete());
    }
    unsubscribe() {
      this.closed ||
        ((this.isStopped = !0), super.unsubscribe(), (this.destination = null));
    }
    _next(t) {
      this.destination.next(t);
    }
    _error(t) {
      try {
        this.destination.error(t);
      } finally {
        this.unsubscribe();
      }
    }
    _complete() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    }
  },
  gf = Function.prototype.bind;
function To(e, t) {
  return gf.call(e, t);
}
var Ao = class {
    constructor(t) {
      this.partialObserver = t;
    }
    next(t) {
      let { partialObserver: n } = this;
      if (n.next)
        try {
          n.next(t);
        } catch (r) {
          jn(r);
        }
    }
    error(t) {
      let { partialObserver: n } = this;
      if (n.error)
        try {
          n.error(t);
        } catch (r) {
          jn(r);
        }
      else jn(t);
    }
    complete() {
      let { partialObserver: t } = this;
      if (t.complete)
        try {
          t.complete();
        } catch (n) {
          jn(n);
        }
    }
  },
  be = class extends Ze {
    constructor(t, n, r) {
      super();
      let o;
      if (g(t) || !t)
        o = { next: t ?? void 0, error: n ?? void 0, complete: r ?? void 0 };
      else {
        let i;
        this && ce.useDeprecatedNextContext
          ? ((i = Object.create(t)),
            (i.unsubscribe = () => this.unsubscribe()),
            (o = {
              next: t.next && To(t.next, i),
              error: t.error && To(t.error, i),
              complete: t.complete && To(t.complete, i),
            }))
          : (o = t);
      }
      this.destination = new Ao(o);
    }
  };
function jn(e) {
  ce.useDeprecatedSynchronousErrorHandling ? ka(e) : Ln(e);
}
function mf(e) {
  throw e;
}
function No(e, t) {
  let { onStoppedNotification: n } = ce;
  n && vt.setTimeout(() => n(e, t));
}
var yf = { closed: !0, next: Xt, error: mf, complete: Xt };
var Et = (typeof Symbol == "function" && Symbol.observable) || "@@observable";
function W(e) {
  return e;
}
function Df(...e) {
  return Oo(e);
}
function Oo(e) {
  return e.length === 0
    ? W
    : e.length === 1
      ? e[0]
      : function (n) {
          return e.reduce((r, o) => o(r), n);
        };
}
var S = (() => {
  class e {
    constructor(n) {
      n && (this._subscribe = n);
    }
    lift(n) {
      let r = new e();
      return (r.source = this), (r.operator = n), r;
    }
    subscribe(n, r, o) {
      let i = If(n) ? n : new be(n, r, o);
      return (
        It(() => {
          let { operator: s, source: a } = this;
          i.add(
            s ? s.call(i, a) : a ? this._subscribe(i) : this._trySubscribe(i),
          );
        }),
        i
      );
    }
    _trySubscribe(n) {
      try {
        return this._subscribe(n);
      } catch (r) {
        n.error(r);
      }
    }
    forEach(n, r) {
      return (
        (r = La(r)),
        new r((o, i) => {
          let s = new be({
            next: (a) => {
              try {
                n(a);
              } catch (u) {
                i(u), s.unsubscribe();
              }
            },
            error: i,
            complete: o,
          });
          this.subscribe(s);
        })
      );
    }
    _subscribe(n) {
      var r;
      return (r = this.source) === null || r === void 0
        ? void 0
        : r.subscribe(n);
    }
    [Et]() {
      return this;
    }
    pipe(...n) {
      return Oo(n)(this);
    }
    toPromise(n) {
      return (
        (n = La(n)),
        new n((r, o) => {
          let i;
          this.subscribe(
            (s) => (i = s),
            (s) => o(s),
            () => r(i),
          );
        })
      );
    }
  }
  return (e.create = (t) => new e(t)), e;
})();
function La(e) {
  var t;
  return (t = e ?? ce.Promise) !== null && t !== void 0 ? t : Promise;
}
function vf(e) {
  return e && g(e.next) && g(e.error) && g(e.complete);
}
function If(e) {
  return (e && e instanceof Ze) || (vf(e) && kn(e));
}
function Fo(e) {
  return g(e?.lift);
}
function I(e) {
  return (t) => {
    if (Fo(t))
      return t.lift(function (n) {
        try {
          return e(n, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function v(e, t, n, r, o) {
  return new Ro(e, t, n, r, o);
}
var Ro = class extends Ze {
  constructor(t, n, r, o, i, s) {
    super(t),
      (this.onFinalize = i),
      (this.shouldUnsubscribe = s),
      (this._next = n
        ? function (a) {
            try {
              n(a);
            } catch (u) {
              t.error(u);
            }
          }
        : super._next),
      (this._error = o
        ? function (a) {
            try {
              o(a);
            } catch (u) {
              t.error(u);
            } finally {
              this.unsubscribe();
            }
          }
        : super._error),
      (this._complete = r
        ? function () {
            try {
              r();
            } catch (a) {
              t.error(a);
            } finally {
              this.unsubscribe();
            }
          }
        : super._complete);
  }
  unsubscribe() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      let { closed: n } = this;
      super.unsubscribe(),
        !n && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }
};
function Po() {
  return I((e, t) => {
    let n = null;
    e._refCount++;
    let r = v(t, void 0, void 0, void 0, () => {
      if (!e || e._refCount <= 0 || 0 < --e._refCount) {
        n = null;
        return;
      }
      let o = e._connection,
        i = n;
      (n = null), o && (!i || o === i) && o.unsubscribe(), t.unsubscribe();
    });
    e.subscribe(r), r.closed || (n = e.connect());
  });
}
var ko = class extends S {
  constructor(t, n) {
    super(),
      (this.source = t),
      (this.subjectFactory = n),
      (this._subject = null),
      (this._refCount = 0),
      (this._connection = null),
      Fo(t) && (this.lift = t.lift);
  }
  _subscribe(t) {
    return this.getSubject().subscribe(t);
  }
  getSubject() {
    let t = this._subject;
    return (
      (!t || t.isStopped) && (this._subject = this.subjectFactory()),
      this._subject
    );
  }
  _teardown() {
    this._refCount = 0;
    let { _connection: t } = this;
    (this._subject = this._connection = null), t?.unsubscribe();
  }
  connect() {
    let t = this._connection;
    if (!t) {
      t = this._connection = new j();
      let n = this.getSubject();
      t.add(
        this.source.subscribe(
          v(
            n,
            void 0,
            () => {
              this._teardown(), n.complete();
            },
            (r) => {
              this._teardown(), n.error(r);
            },
            () => this._teardown(),
          ),
        ),
      ),
        t.closed && ((this._connection = null), (t = j.EMPTY));
    }
    return t;
  }
  refCount() {
    return Po()(this);
  }
};
var ja = Dt(
  (e) =>
    function () {
      e(this),
        (this.name = "ObjectUnsubscribedError"),
        (this.message = "object unsubscribed");
    },
);
var ne = (() => {
    class e extends S {
      constructor() {
        super(),
          (this.closed = !1),
          (this.currentObservers = null),
          (this.observers = []),
          (this.isStopped = !1),
          (this.hasError = !1),
          (this.thrownError = null);
      }
      lift(n) {
        let r = new Vn(this, this);
        return (r.operator = n), r;
      }
      _throwIfClosed() {
        if (this.closed) throw new ja();
      }
      next(n) {
        It(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.currentObservers ||
              (this.currentObservers = Array.from(this.observers));
            for (let r of this.currentObservers) r.next(n);
          }
        });
      }
      error(n) {
        It(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            (this.hasError = this.isStopped = !0), (this.thrownError = n);
            let { observers: r } = this;
            for (; r.length; ) r.shift().error(n);
          }
        });
      }
      complete() {
        It(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.isStopped = !0;
            let { observers: n } = this;
            for (; n.length; ) n.shift().complete();
          }
        });
      }
      unsubscribe() {
        (this.isStopped = this.closed = !0),
          (this.observers = this.currentObservers = null);
      }
      get observed() {
        var n;
        return (
          ((n = this.observers) === null || n === void 0 ? void 0 : n.length) >
          0
        );
      }
      _trySubscribe(n) {
        return this._throwIfClosed(), super._trySubscribe(n);
      }
      _subscribe(n) {
        return (
          this._throwIfClosed(),
          this._checkFinalizedStatuses(n),
          this._innerSubscribe(n)
        );
      }
      _innerSubscribe(n) {
        let { hasError: r, isStopped: o, observers: i } = this;
        return r || o
          ? xo
          : ((this.currentObservers = null),
            i.push(n),
            new j(() => {
              (this.currentObservers = null), We(i, n);
            }));
      }
      _checkFinalizedStatuses(n) {
        let { hasError: r, thrownError: o, isStopped: i } = this;
        r ? n.error(o) : i && n.complete();
      }
      asObservable() {
        let n = new S();
        return (n.source = this), n;
      }
    }
    return (e.create = (t, n) => new Vn(t, n)), e;
  })(),
  Vn = class extends ne {
    constructor(t, n) {
      super(), (this.destination = t), (this.source = n);
    }
    next(t) {
      var n, r;
      (r =
        (n = this.destination) === null || n === void 0 ? void 0 : n.next) ===
        null ||
        r === void 0 ||
        r.call(n, t);
    }
    error(t) {
      var n, r;
      (r =
        (n = this.destination) === null || n === void 0 ? void 0 : n.error) ===
        null ||
        r === void 0 ||
        r.call(n, t);
    }
    complete() {
      var t, n;
      (n =
        (t = this.destination) === null || t === void 0
          ? void 0
          : t.complete) === null ||
        n === void 0 ||
        n.call(t);
    }
    _subscribe(t) {
      var n, r;
      return (r =
        (n = this.source) === null || n === void 0
          ? void 0
          : n.subscribe(t)) !== null && r !== void 0
        ? r
        : xo;
    }
  };
var en = class extends ne {
  constructor(t) {
    super(), (this._value = t);
  }
  get value() {
    return this.getValue();
  }
  _subscribe(t) {
    let n = super._subscribe(t);
    return !n.closed && t.next(this._value), n;
  }
  getValue() {
    let { hasError: t, thrownError: n, _value: r } = this;
    if (t) throw n;
    return this._throwIfClosed(), r;
  }
  next(t) {
    super.next((this._value = t));
  }
};
var tn = {
  now() {
    return (tn.delegate || Date).now();
  },
  delegate: void 0,
};
var Bn = class extends ne {
  constructor(t = 1 / 0, n = 1 / 0, r = tn) {
    super(),
      (this._bufferSize = t),
      (this._windowTime = n),
      (this._timestampProvider = r),
      (this._buffer = []),
      (this._infiniteTimeWindow = !0),
      (this._infiniteTimeWindow = n === 1 / 0),
      (this._bufferSize = Math.max(1, t)),
      (this._windowTime = Math.max(1, n));
  }
  next(t) {
    let {
      isStopped: n,
      _buffer: r,
      _infiniteTimeWindow: o,
      _timestampProvider: i,
      _windowTime: s,
    } = this;
    n || (r.push(t), !o && r.push(i.now() + s)),
      this._trimBuffer(),
      super.next(t);
  }
  _subscribe(t) {
    this._throwIfClosed(), this._trimBuffer();
    let n = this._innerSubscribe(t),
      { _infiniteTimeWindow: r, _buffer: o } = this,
      i = o.slice();
    for (let s = 0; s < i.length && !t.closed; s += r ? 1 : 2) t.next(i[s]);
    return this._checkFinalizedStatuses(t), n;
  }
  _trimBuffer() {
    let {
        _bufferSize: t,
        _timestampProvider: n,
        _buffer: r,
        _infiniteTimeWindow: o,
      } = this,
      i = (o ? 1 : 2) * t;
    if ((t < 1 / 0 && i < r.length && r.splice(0, r.length - i), !o)) {
      let s = n.now(),
        a = 0;
      for (let u = 1; u < r.length && r[u] <= s; u += 2) a = u;
      a && r.splice(0, a + 1);
    }
  }
};
var $n = class extends j {
  constructor(t, n) {
    super();
  }
  schedule(t, n = 0) {
    return this;
  }
};
var nn = {
  setInterval(e, t, ...n) {
    let { delegate: r } = nn;
    return r?.setInterval ? r.setInterval(e, t, ...n) : setInterval(e, t, ...n);
  },
  clearInterval(e) {
    let { delegate: t } = nn;
    return (t?.clearInterval || clearInterval)(e);
  },
  delegate: void 0,
};
var Hn = class extends $n {
  constructor(t, n) {
    super(t, n), (this.scheduler = t), (this.work = n), (this.pending = !1);
  }
  schedule(t, n = 0) {
    var r;
    if (this.closed) return this;
    this.state = t;
    let o = this.id,
      i = this.scheduler;
    return (
      o != null && (this.id = this.recycleAsyncId(i, o, n)),
      (this.pending = !0),
      (this.delay = n),
      (this.id =
        (r = this.id) !== null && r !== void 0
          ? r
          : this.requestAsyncId(i, this.id, n)),
      this
    );
  }
  requestAsyncId(t, n, r = 0) {
    return nn.setInterval(t.flush.bind(t, this), r);
  }
  recycleAsyncId(t, n, r = 0) {
    if (r != null && this.delay === r && this.pending === !1) return n;
    n != null && nn.clearInterval(n);
  }
  execute(t, n) {
    if (this.closed) return new Error("executing a cancelled action");
    this.pending = !1;
    let r = this._execute(t, n);
    if (r) return r;
    this.pending === !1 &&
      this.id != null &&
      (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }
  _execute(t, n) {
    let r = !1,
      o;
    try {
      this.work(t);
    } catch (i) {
      (r = !0), (o = i || new Error("Scheduled action threw falsy error"));
    }
    if (r) return this.unsubscribe(), o;
  }
  unsubscribe() {
    if (!this.closed) {
      let { id: t, scheduler: n } = this,
        { actions: r } = n;
      (this.work = this.state = this.scheduler = null),
        (this.pending = !1),
        We(r, this),
        t != null && (this.id = this.recycleAsyncId(n, t, null)),
        (this.delay = null),
        super.unsubscribe();
    }
  }
};
var wt = class e {
  constructor(t, n = e.now) {
    (this.schedulerActionCtor = t), (this.now = n);
  }
  schedule(t, n = 0, r) {
    return new this.schedulerActionCtor(this, t).schedule(r, n);
  }
};
wt.now = tn.now;
var Un = class extends wt {
  constructor(t, n = wt.now) {
    super(t, n), (this.actions = []), (this._active = !1);
  }
  flush(t) {
    let { actions: n } = this;
    if (this._active) {
      n.push(t);
      return;
    }
    let r;
    this._active = !0;
    do if ((r = t.execute(t.state, t.delay))) break;
    while ((t = n.shift()));
    if (((this._active = !1), r)) {
      for (; (t = n.shift()); ) t.unsubscribe();
      throw r;
    }
  }
};
var rn = new Un(Hn),
  Va = rn;
var Ye = new S((e) => e.complete());
function zn(e) {
  return e && g(e.schedule);
}
function Lo(e) {
  return e[e.length - 1];
}
function Gn(e) {
  return g(Lo(e)) ? e.pop() : void 0;
}
function me(e) {
  return zn(Lo(e)) ? e.pop() : void 0;
}
function Ba(e, t) {
  return typeof Lo(e) == "number" ? e.pop() : t;
}
function Ha(e, t, n, r) {
  function o(i) {
    return i instanceof n
      ? i
      : new n(function (s) {
          s(i);
        });
  }
  return new (n || (n = Promise))(function (i, s) {
    function a(l) {
      try {
        c(r.next(l));
      } catch (d) {
        s(d);
      }
    }
    function u(l) {
      try {
        c(r.throw(l));
      } catch (d) {
        s(d);
      }
    }
    function c(l) {
      l.done ? i(l.value) : o(l.value).then(a, u);
    }
    c((r = r.apply(e, t || [])).next());
  });
}
function $a(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    n = t && e[t],
    r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (
          e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined.",
  );
}
function Qe(e) {
  return this instanceof Qe ? ((this.v = e), this) : new Qe(e);
}
function Ua(e, t, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(e, t || []),
    o,
    i = [];
  return (
    (o = Object.create(
      (typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype,
    )),
    a("next"),
    a("throw"),
    a("return", s),
    (o[Symbol.asyncIterator] = function () {
      return this;
    }),
    o
  );
  function s(f) {
    return function (p) {
      return Promise.resolve(p).then(f, d);
    };
  }
  function a(f, p) {
    r[f] &&
      ((o[f] = function (m) {
        return new Promise(function (F, _) {
          i.push([f, m, F, _]) > 1 || u(f, m);
        });
      }),
      p && (o[f] = p(o[f])));
  }
  function u(f, p) {
    try {
      c(r[f](p));
    } catch (m) {
      h(i[0][3], m);
    }
  }
  function c(f) {
    f.value instanceof Qe
      ? Promise.resolve(f.value.v).then(l, d)
      : h(i[0][2], f);
  }
  function l(f) {
    u("next", f);
  }
  function d(f) {
    u("throw", f);
  }
  function h(f, p) {
    f(p), i.shift(), i.length && u(i[0][0], i[0][1]);
  }
}
function za(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    n;
  return t
    ? t.call(e)
    : ((e = typeof $a == "function" ? $a(e) : e[Symbol.iterator]()),
      (n = {}),
      r("next"),
      r("throw"),
      r("return"),
      (n[Symbol.asyncIterator] = function () {
        return this;
      }),
      n);
  function r(i) {
    n[i] =
      e[i] &&
      function (s) {
        return new Promise(function (a, u) {
          (s = e[i](s)), o(a, u, s.done, s.value);
        });
      };
  }
  function o(i, s, a, u) {
    Promise.resolve(u).then(function (c) {
      i({ value: c, done: a });
    }, s);
  }
}
var Ct = (e) => e && typeof e.length == "number" && typeof e != "function";
function Wn(e) {
  return g(e?.then);
}
function qn(e) {
  return g(e[Et]);
}
function Zn(e) {
  return Symbol.asyncIterator && g(e?.[Symbol.asyncIterator]);
}
function Yn(e) {
  return new TypeError(
    `You provided ${e !== null && typeof e == "object" ? "an invalid object" : `'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`,
  );
}
function Ef() {
  return typeof Symbol != "function" || !Symbol.iterator
    ? "@@iterator"
    : Symbol.iterator;
}
var Qn = Ef();
function Kn(e) {
  return g(e?.[Qn]);
}
function Jn(e) {
  return Ua(this, arguments, function* () {
    let n = e.getReader();
    try {
      for (;;) {
        let { value: r, done: o } = yield Qe(n.read());
        if (o) return yield Qe(void 0);
        yield yield Qe(r);
      }
    } finally {
      n.releaseLock();
    }
  });
}
function Xn(e) {
  return g(e?.getReader);
}
function N(e) {
  if (e instanceof S) return e;
  if (e != null) {
    if (qn(e)) return wf(e);
    if (Ct(e)) return Cf(e);
    if (Wn(e)) return bf(e);
    if (Zn(e)) return Ga(e);
    if (Kn(e)) return _f(e);
    if (Xn(e)) return Mf(e);
  }
  throw Yn(e);
}
function wf(e) {
  return new S((t) => {
    let n = e[Et]();
    if (g(n.subscribe)) return n.subscribe(t);
    throw new TypeError(
      "Provided object does not correctly implement Symbol.observable",
    );
  });
}
function Cf(e) {
  return new S((t) => {
    for (let n = 0; n < e.length && !t.closed; n++) t.next(e[n]);
    t.complete();
  });
}
function bf(e) {
  return new S((t) => {
    e.then(
      (n) => {
        t.closed || (t.next(n), t.complete());
      },
      (n) => t.error(n),
    ).then(null, Ln);
  });
}
function _f(e) {
  return new S((t) => {
    for (let n of e) if ((t.next(n), t.closed)) return;
    t.complete();
  });
}
function Ga(e) {
  return new S((t) => {
    xf(e, t).catch((n) => t.error(n));
  });
}
function Mf(e) {
  return Ga(Jn(e));
}
function xf(e, t) {
  var n, r, o, i;
  return Ha(this, void 0, void 0, function* () {
    try {
      for (n = za(e); (r = yield n.next()), !r.done; ) {
        let s = r.value;
        if ((t.next(s), t.closed)) return;
      }
    } catch (s) {
      o = { error: s };
    } finally {
      try {
        r && !r.done && (i = n.return) && (yield i.call(n));
      } finally {
        if (o) throw o.error;
      }
    }
    t.complete();
  });
}
function Y(e, t, n, r = 0, o = !1) {
  let i = t.schedule(function () {
    n(), o ? e.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if ((e.add(i), !o)) return i;
}
function er(e, t = 0) {
  return I((n, r) => {
    n.subscribe(
      v(
        r,
        (o) => Y(r, e, () => r.next(o), t),
        () => Y(r, e, () => r.complete(), t),
        (o) => Y(r, e, () => r.error(o), t),
      ),
    );
  });
}
function tr(e, t = 0) {
  return I((n, r) => {
    r.add(e.schedule(() => n.subscribe(r), t));
  });
}
function Wa(e, t) {
  return N(e).pipe(tr(t), er(t));
}
function qa(e, t) {
  return N(e).pipe(tr(t), er(t));
}
function Za(e, t) {
  return new S((n) => {
    let r = 0;
    return t.schedule(function () {
      r === e.length
        ? n.complete()
        : (n.next(e[r++]), n.closed || this.schedule());
    });
  });
}
function Ya(e, t) {
  return new S((n) => {
    let r;
    return (
      Y(n, t, () => {
        (r = e[Qn]()),
          Y(
            n,
            t,
            () => {
              let o, i;
              try {
                ({ value: o, done: i } = r.next());
              } catch (s) {
                n.error(s);
                return;
              }
              i ? n.complete() : n.next(o);
            },
            0,
            !0,
          );
      }),
      () => g(r?.return) && r.return()
    );
  });
}
function nr(e, t) {
  if (!e) throw new Error("Iterable cannot be null");
  return new S((n) => {
    Y(n, t, () => {
      let r = e[Symbol.asyncIterator]();
      Y(
        n,
        t,
        () => {
          r.next().then((o) => {
            o.done ? n.complete() : n.next(o.value);
          });
        },
        0,
        !0,
      );
    });
  });
}
function Qa(e, t) {
  return nr(Jn(e), t);
}
function Ka(e, t) {
  if (e != null) {
    if (qn(e)) return Wa(e, t);
    if (Ct(e)) return Za(e, t);
    if (Wn(e)) return qa(e, t);
    if (Zn(e)) return nr(e, t);
    if (Kn(e)) return Ya(e, t);
    if (Xn(e)) return Qa(e, t);
  }
  throw Yn(e);
}
function ye(e, t) {
  return t ? Ka(e, t) : N(e);
}
function Sf(...e) {
  let t = me(e);
  return ye(e, t);
}
function Tf(e, t) {
  let n = g(e) ? e : () => e,
    r = (o) => o.error(n());
  return new S(t ? (o) => t.schedule(r, 0, o) : r);
}
function Nf(e) {
  return !!e && (e instanceof S || (g(e.lift) && g(e.subscribe)));
}
var Ke = Dt(
  (e) =>
    function () {
      e(this),
        (this.name = "EmptyError"),
        (this.message = "no elements in sequence");
    },
);
function Ja(e) {
  return e instanceof Date && !isNaN(e);
}
function _e(e, t) {
  return I((n, r) => {
    let o = 0;
    n.subscribe(
      v(r, (i) => {
        r.next(e.call(t, i, o++));
      }),
    );
  });
}
var { isArray: Af } = Array;
function Of(e, t) {
  return Af(t) ? e(...t) : e(t);
}
function bt(e) {
  return _e((t) => Of(e, t));
}
var { isArray: Ff } = Array,
  { getPrototypeOf: Rf, prototype: Pf, keys: kf } = Object;
function rr(e) {
  if (e.length === 1) {
    let t = e[0];
    if (Ff(t)) return { args: t, keys: null };
    if (Lf(t)) {
      let n = kf(t);
      return { args: n.map((r) => t[r]), keys: n };
    }
  }
  return { args: e, keys: null };
}
function Lf(e) {
  return e && typeof e == "object" && Rf(e) === Pf;
}
function or(e, t) {
  return e.reduce((n, r, o) => ((n[r] = t[o]), n), {});
}
function jf(...e) {
  let t = me(e),
    n = Gn(e),
    { args: r, keys: o } = rr(e);
  if (r.length === 0) return ye([], t);
  let i = new S(Vf(r, t, o ? (s) => or(o, s) : W));
  return n ? i.pipe(bt(n)) : i;
}
function Vf(e, t, n = W) {
  return (r) => {
    Xa(
      t,
      () => {
        let { length: o } = e,
          i = new Array(o),
          s = o,
          a = o;
        for (let u = 0; u < o; u++)
          Xa(
            t,
            () => {
              let c = ye(e[u], t),
                l = !1;
              c.subscribe(
                v(
                  r,
                  (d) => {
                    (i[u] = d), l || ((l = !0), a--), a || r.next(n(i.slice()));
                  },
                  () => {
                    --s || r.complete();
                  },
                ),
              );
            },
            r,
          );
      },
      r,
    );
  };
}
function Xa(e, t, n) {
  e ? Y(n, e, t) : t();
}
function eu(e, t, n, r, o, i, s, a) {
  let u = [],
    c = 0,
    l = 0,
    d = !1,
    h = () => {
      d && !u.length && !c && t.complete();
    },
    f = (m) => (c < r ? p(m) : u.push(m)),
    p = (m) => {
      i && t.next(m), c++;
      let F = !1;
      N(n(m, l++)).subscribe(
        v(
          t,
          (_) => {
            o?.(_), i ? f(_) : t.next(_);
          },
          () => {
            F = !0;
          },
          void 0,
          () => {
            if (F)
              try {
                for (c--; u.length && c < r; ) {
                  let _ = u.shift();
                  s ? Y(t, s, () => p(_)) : p(_);
                }
                h();
              } catch (_) {
                t.error(_);
              }
          },
        ),
      );
    };
  return (
    e.subscribe(
      v(t, f, () => {
        (d = !0), h();
      }),
    ),
    () => {
      a?.();
    }
  );
}
function Me(e, t, n = 1 / 0) {
  return g(t)
    ? Me((r, o) => _e((i, s) => t(r, i, o, s))(N(e(r, o))), n)
    : (typeof t == "number" && (n = t), I((r, o) => eu(r, o, e, n)));
}
function on(e = 1 / 0) {
  return Me(W, e);
}
function tu() {
  return on(1);
}
function ir(...e) {
  return tu()(ye(e, me(e)));
}
function Bf(e) {
  return new S((t) => {
    N(e()).subscribe(t);
  });
}
function $f(...e) {
  let t = Gn(e),
    { args: n, keys: r } = rr(e),
    o = new S((i) => {
      let { length: s } = n;
      if (!s) {
        i.complete();
        return;
      }
      let a = new Array(s),
        u = s,
        c = s;
      for (let l = 0; l < s; l++) {
        let d = !1;
        N(n[l]).subscribe(
          v(
            i,
            (h) => {
              d || ((d = !0), c--), (a[l] = h);
            },
            () => u--,
            void 0,
            () => {
              (!u || !d) && (c || i.next(r ? or(r, a) : a), i.complete());
            },
          ),
        );
      }
    });
  return t ? o.pipe(bt(t)) : o;
}
var Hf = ["addListener", "removeListener"],
  Uf = ["addEventListener", "removeEventListener"],
  zf = ["on", "off"];
function jo(e, t, n, r) {
  if ((g(n) && ((r = n), (n = void 0)), r)) return jo(e, t, n).pipe(bt(r));
  let [o, i] = qf(e)
    ? Uf.map((s) => (a) => e[s](t, a, n))
    : Gf(e)
      ? Hf.map(nu(e, t))
      : Wf(e)
        ? zf.map(nu(e, t))
        : [];
  if (!o && Ct(e)) return Me((s) => jo(s, t, n))(N(e));
  if (!o) throw new TypeError("Invalid event target");
  return new S((s) => {
    let a = (...u) => s.next(1 < u.length ? u : u[0]);
    return o(a), () => i(a);
  });
}
function nu(e, t) {
  return (n) => (r) => e[n](t, r);
}
function Gf(e) {
  return g(e.addListener) && g(e.removeListener);
}
function Wf(e) {
  return g(e.on) && g(e.off);
}
function qf(e) {
  return g(e.addEventListener) && g(e.removeEventListener);
}
function Vo(e = 0, t, n = Va) {
  let r = -1;
  return (
    t != null && (zn(t) ? (n = t) : (r = t)),
    new S((o) => {
      let i = Ja(e) ? +e - n.now() : e;
      i < 0 && (i = 0);
      let s = 0;
      return n.schedule(function () {
        o.closed ||
          (o.next(s++), 0 <= r ? this.schedule(void 0, r) : o.complete());
      }, i);
    })
  );
}
function Zf(...e) {
  let t = me(e),
    n = Ba(e, 1 / 0),
    r = e;
  return r.length ? (r.length === 1 ? N(r[0]) : on(n)(ye(r, t))) : Ye;
}
function Je(e, t) {
  return I((n, r) => {
    let o = 0;
    n.subscribe(v(r, (i) => e.call(t, i, o++) && r.next(i)));
  });
}
function ru(e) {
  return I((t, n) => {
    let r = !1,
      o = null,
      i = null,
      s = !1,
      a = () => {
        if ((i?.unsubscribe(), (i = null), r)) {
          r = !1;
          let c = o;
          (o = null), n.next(c);
        }
        s && n.complete();
      },
      u = () => {
        (i = null), s && n.complete();
      };
    t.subscribe(
      v(
        n,
        (c) => {
          (r = !0), (o = c), i || N(e(c)).subscribe((i = v(n, a, u)));
        },
        () => {
          (s = !0), (!r || !i || i.closed) && n.complete();
        },
      ),
    );
  });
}
function Yf(e, t = rn) {
  return ru(() => Vo(e, t));
}
function ou(e) {
  return I((t, n) => {
    let r = null,
      o = !1,
      i;
    (r = t.subscribe(
      v(n, void 0, void 0, (s) => {
        (i = N(e(s, ou(e)(t)))),
          r ? (r.unsubscribe(), (r = null), i.subscribe(n)) : (o = !0);
      }),
    )),
      o && (r.unsubscribe(), (r = null), i.subscribe(n));
  });
}
function iu(e, t, n, r, o) {
  return (i, s) => {
    let a = n,
      u = t,
      c = 0;
    i.subscribe(
      v(
        s,
        (l) => {
          let d = c++;
          (u = a ? e(u, l, d) : ((a = !0), l)), r && s.next(u);
        },
        o &&
          (() => {
            a && s.next(u), s.complete();
          }),
      ),
    );
  };
}
function Qf(e, t) {
  return g(t) ? Me(e, t, 1) : Me(e, 1);
}
function Kf(e, t = rn) {
  return I((n, r) => {
    let o = null,
      i = null,
      s = null,
      a = () => {
        if (o) {
          o.unsubscribe(), (o = null);
          let c = i;
          (i = null), r.next(c);
        }
      };
    function u() {
      let c = s + e,
        l = t.now();
      if (l < c) {
        (o = this.schedule(void 0, c - l)), r.add(o);
        return;
      }
      a();
    }
    n.subscribe(
      v(
        r,
        (c) => {
          (i = c), (s = t.now()), o || ((o = t.schedule(u, e)), r.add(o));
        },
        () => {
          a(), r.complete();
        },
        void 0,
        () => {
          i = o = null;
        },
      ),
    );
  });
}
function sn(e) {
  return I((t, n) => {
    let r = !1;
    t.subscribe(
      v(
        n,
        (o) => {
          (r = !0), n.next(o);
        },
        () => {
          r || n.next(e), n.complete();
        },
      ),
    );
  });
}
function Bo(e) {
  return e <= 0
    ? () => Ye
    : I((t, n) => {
        let r = 0;
        t.subscribe(
          v(n, (o) => {
            ++r <= e && (n.next(o), e <= r && n.complete());
          }),
        );
      });
}
function Jf(e) {
  return _e(() => e);
}
function Xf(e, t = W) {
  return (
    (e = e ?? eh),
    I((n, r) => {
      let o,
        i = !0;
      n.subscribe(
        v(r, (s) => {
          let a = t(s);
          (i || !e(o, a)) && ((i = !1), (o = a), r.next(s));
        }),
      );
    })
  );
}
function eh(e, t) {
  return e === t;
}
function sr(e = th) {
  return I((t, n) => {
    let r = !1;
    t.subscribe(
      v(
        n,
        (o) => {
          (r = !0), n.next(o);
        },
        () => (r ? n.complete() : n.error(e())),
      ),
    );
  });
}
function th() {
  return new Ke();
}
function nh(e) {
  return I((t, n) => {
    try {
      t.subscribe(n);
    } finally {
      n.add(e);
    }
  });
}
function su(e, t) {
  let n = arguments.length >= 2;
  return (r) =>
    r.pipe(
      e ? Je((o, i) => e(o, i, r)) : W,
      Bo(1),
      n ? sn(t) : sr(() => new Ke()),
    );
}
function $o(e) {
  return e <= 0
    ? () => Ye
    : I((t, n) => {
        let r = [];
        t.subscribe(
          v(
            n,
            (o) => {
              r.push(o), e < r.length && r.shift();
            },
            () => {
              for (let o of r) n.next(o);
              n.complete();
            },
            void 0,
            () => {
              r = null;
            },
          ),
        );
      });
}
function rh(e, t) {
  let n = arguments.length >= 2;
  return (r) =>
    r.pipe(
      e ? Je((o, i) => e(o, i, r)) : W,
      $o(1),
      n ? sn(t) : sr(() => new Ke()),
    );
}
function oh(e, t) {
  return I(iu(e, t, arguments.length >= 2, !0));
}
function Uo(e = {}) {
  let {
    connector: t = () => new ne(),
    resetOnError: n = !0,
    resetOnComplete: r = !0,
    resetOnRefCountZero: o = !0,
  } = e;
  return (i) => {
    let s,
      a,
      u,
      c = 0,
      l = !1,
      d = !1,
      h = () => {
        a?.unsubscribe(), (a = void 0);
      },
      f = () => {
        h(), (s = u = void 0), (l = d = !1);
      },
      p = () => {
        let m = s;
        f(), m?.unsubscribe();
      };
    return I((m, F) => {
      c++, !d && !l && h();
      let _ = (u = u ?? t());
      F.add(() => {
        c--, c === 0 && !d && !l && (a = Ho(p, o));
      }),
        _.subscribe(F),
        !s &&
          c > 0 &&
          ((s = new be({
            next: (R) => _.next(R),
            error: (R) => {
              (d = !0), h(), (a = Ho(f, n, R)), _.error(R);
            },
            complete: () => {
              (l = !0), h(), (a = Ho(f, r)), _.complete();
            },
          })),
          N(m).subscribe(s));
    })(i);
  };
}
function Ho(e, t, ...n) {
  if (t === !0) {
    e();
    return;
  }
  if (t === !1) return;
  let r = new be({
    next: () => {
      r.unsubscribe(), e();
    },
  });
  return N(t(...n)).subscribe(r);
}
function ih(e, t, n) {
  let r,
    o = !1;
  return (
    e && typeof e == "object"
      ? ({
          bufferSize: r = 1 / 0,
          windowTime: t = 1 / 0,
          refCount: o = !1,
          scheduler: n,
        } = e)
      : (r = e ?? 1 / 0),
    Uo({
      connector: () => new Bn(r, t, n),
      resetOnError: !0,
      resetOnComplete: !1,
      resetOnRefCountZero: o,
    })
  );
}
function sh(e) {
  return Je((t, n) => e <= n);
}
function ah(...e) {
  let t = me(e);
  return I((n, r) => {
    (t ? ir(e, n, t) : ir(e, n)).subscribe(r);
  });
}
function uh(e, t) {
  return I((n, r) => {
    let o = null,
      i = 0,
      s = !1,
      a = () => s && !o && r.complete();
    n.subscribe(
      v(
        r,
        (u) => {
          o?.unsubscribe();
          let c = 0,
            l = i++;
          N(e(u, l)).subscribe(
            (o = v(
              r,
              (d) => r.next(t ? t(u, d, l, c++) : d),
              () => {
                (o = null), a();
              },
            )),
          );
        },
        () => {
          (s = !0), a();
        },
      ),
    );
  });
}
function ch(e) {
  return I((t, n) => {
    N(e).subscribe(v(n, () => n.complete(), Xt)), !n.closed && t.subscribe(n);
  });
}
function lh(e, t, n) {
  let r = g(e) || t || n ? { next: e, error: t, complete: n } : e;
  return r
    ? I((o, i) => {
        var s;
        (s = r.subscribe) === null || s === void 0 || s.call(r);
        let a = !0;
        o.subscribe(
          v(
            i,
            (u) => {
              var c;
              (c = r.next) === null || c === void 0 || c.call(r, u), i.next(u);
            },
            () => {
              var u;
              (a = !1),
                (u = r.complete) === null || u === void 0 || u.call(r),
                i.complete();
            },
            (u) => {
              var c;
              (a = !1),
                (c = r.error) === null || c === void 0 || c.call(r, u),
                i.error(u);
            },
            () => {
              var u, c;
              a && ((u = r.unsubscribe) === null || u === void 0 || u.call(r)),
                (c = r.finalize) === null || c === void 0 || c.call(r);
            },
          ),
        );
      })
    : W;
}
var Ju = "https://g.co/ng/security#xss",
  x = class extends Error {
    constructor(t, n) {
      super(Xu(t, n)), (this.code = t);
    }
  };
function Xu(e, t) {
  return `${`NG0${Math.abs(e)}`}${t ? ": " + t : ""}`;
}
function Dn(e) {
  return { toString: e }.toString();
}
var ar = "__parameters__";
function dh(e) {
  return function (...n) {
    if (e) {
      let r = e(...n);
      for (let o in r) this[o] = r[o];
    }
  };
}
function ec(e, t, n) {
  return Dn(() => {
    let r = dh(t);
    function o(...i) {
      if (this instanceof o) return r.apply(this, i), this;
      let s = new o(...i);
      return (a.annotation = s), a;
      function a(u, c, l) {
        let d = u.hasOwnProperty(ar)
          ? u[ar]
          : Object.defineProperty(u, ar, { value: [] })[ar];
        for (; d.length <= l; ) d.push(null);
        return (d[l] = d[l] || []).push(s), u;
      }
    }
    return (
      n && (o.prototype = Object.create(n.prototype)),
      (o.prototype.ngMetadataName = e),
      (o.annotationCls = o),
      o
    );
  });
}
var ln = globalThis;
function O(e) {
  for (let t in e) if (e[t] === O) return t;
  throw Error("Could not find renamed property on target object.");
}
function fh(e, t) {
  for (let n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
}
function K(e) {
  if (typeof e == "string") return e;
  if (Array.isArray(e)) return "[" + e.map(K).join(", ") + "]";
  if (e == null) return "" + e;
  if (e.overriddenName) return `${e.overriddenName}`;
  if (e.name) return `${e.name}`;
  let t = e.toString();
  if (t == null) return "" + t;
  let n = t.indexOf(`
`);
  return n === -1 ? t : t.substring(0, n);
}
function ri(e, t) {
  return e == null || e === ""
    ? t === null
      ? ""
      : t
    : t == null || t === ""
      ? e
      : e + " " + t;
}
var hh = O({ __forward_ref__: O });
function tc(e) {
  return (
    (e.__forward_ref__ = tc),
    (e.toString = function () {
      return K(this());
    }),
    e
  );
}
function q(e) {
  return nc(e) ? e() : e;
}
function nc(e) {
  return (
    typeof e == "function" && e.hasOwnProperty(hh) && e.__forward_ref__ === tc
  );
}
function A(e) {
  return {
    token: e.token,
    providedIn: e.providedIn || null,
    factory: e.factory,
    value: void 0,
  };
}
function hs(e) {
  return { providers: e.providers || [], imports: e.imports || [] };
}
function Jr(e) {
  return au(e, rc) || au(e, oc);
}
function s0(e) {
  return Jr(e) !== null;
}
function au(e, t) {
  return e.hasOwnProperty(t) ? e[t] : null;
}
function ph(e) {
  let t = e && (e[rc] || e[oc]);
  return t || null;
}
function uu(e) {
  return e && (e.hasOwnProperty(cu) || e.hasOwnProperty(gh)) ? e[cu] : null;
}
var rc = O({ ɵprov: O }),
  cu = O({ ɵinj: O }),
  oc = O({ ngInjectableDef: O }),
  gh = O({ ngInjectorDef: O }),
  T = class {
    constructor(t, n) {
      (this._desc = t),
        (this.ngMetadataName = "InjectionToken"),
        (this.ɵprov = void 0),
        typeof n == "number"
          ? (this.__NG_ELEMENT_ID__ = n)
          : n !== void 0 &&
            (this.ɵprov = A({
              token: this,
              providedIn: n.providedIn || "root",
              factory: n.factory,
            }));
    }
    get multi() {
      return this;
    }
    toString() {
      return `InjectionToken ${this._desc}`;
    }
  };
function ic(e) {
  return e && !!e.ɵproviders;
}
var mh = O({ ɵcmp: O }),
  yh = O({ ɵdir: O }),
  Dh = O({ ɵpipe: O }),
  vh = O({ ɵmod: O }),
  Er = O({ ɵfac: O }),
  un = O({ __NG_ELEMENT_ID__: O }),
  lu = O({ __NG_ENV_ID__: O });
function vn(e) {
  return typeof e == "string" ? e : e == null ? "" : String(e);
}
function Ih(e) {
  return typeof e == "function"
    ? e.name || e.toString()
    : typeof e == "object" && e != null && typeof e.type == "function"
      ? e.type.name || e.type.toString()
      : vn(e);
}
function Eh(e, t) {
  let n = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
  throw new x(-200, e);
}
function ps(e, t) {
  throw new x(-201, !1);
}
var M = (function (e) {
    return (
      (e[(e.Default = 0)] = "Default"),
      (e[(e.Host = 1)] = "Host"),
      (e[(e.Self = 2)] = "Self"),
      (e[(e.SkipSelf = 4)] = "SkipSelf"),
      (e[(e.Optional = 8)] = "Optional"),
      e
    );
  })(M || {}),
  oi;
function sc() {
  return oi;
}
function re(e) {
  let t = oi;
  return (oi = e), t;
}
function ac(e, t, n) {
  let r = Jr(e);
  if (r && r.providedIn == "root")
    return r.value === void 0 ? (r.value = r.factory()) : r.value;
  if (n & M.Optional) return null;
  if (t !== void 0) return t;
  ps(e, "Injector");
}
var wh = {},
  dn = wh,
  ii = "__NG_DI_FLAG__",
  wr = "ngTempTokenPath",
  Ch = "ngTokenPath",
  bh = /\n/gm,
  _h = "\u0275",
  du = "__source",
  Tt;
function Mh() {
  return Tt;
}
function Re(e) {
  let t = Tt;
  return (Tt = e), t;
}
function xh(e, t = M.Default) {
  if (Tt === void 0) throw new x(-203, !1);
  return Tt === null
    ? ac(e, void 0, t)
    : Tt.get(e, t & M.Optional ? null : void 0, t);
}
function L(e, t = M.Default) {
  return (sc() || xh)(q(e), t);
}
function w(e, t = M.Default) {
  return L(e, Xr(t));
}
function Xr(e) {
  return typeof e > "u" || typeof e == "number"
    ? e
    : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4);
}
function si(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = q(e[n]);
    if (Array.isArray(r)) {
      if (r.length === 0) throw new x(900, !1);
      let o,
        i = M.Default;
      for (let s = 0; s < r.length; s++) {
        let a = r[s],
          u = Sh(a);
        typeof u == "number" ? (u === -1 ? (o = a.token) : (i |= u)) : (o = a);
      }
      t.push(L(o, i));
    } else t.push(L(r));
  }
  return t;
}
function uc(e, t) {
  return (e[ii] = t), (e.prototype[ii] = t), e;
}
function Sh(e) {
  return e[ii];
}
function Th(e, t, n, r) {
  let o = e[wr];
  throw (
    (t[du] && o.unshift(t[du]),
    (e.message = Nh(
      `
` + e.message,
      o,
      n,
      r,
    )),
    (e[Ch] = o),
    (e[wr] = null),
    e)
  );
}
function Nh(e, t, n, r = null) {
  e =
    e &&
    e.charAt(0) ===
      `
` &&
    e.charAt(1) == _h
      ? e.slice(2)
      : e;
  let o = K(t);
  if (Array.isArray(t)) o = t.map(K).join(" -> ");
  else if (typeof t == "object") {
    let i = [];
    for (let s in t)
      if (t.hasOwnProperty(s)) {
        let a = t[s];
        i.push(s + ":" + (typeof a == "string" ? JSON.stringify(a) : K(a)));
      }
    o = `{${i.join(", ")}}`;
  }
  return `${n}${r ? "(" + r + ")" : ""}[${o}]: ${e.replace(
    bh,
    `
  `,
  )}`;
}
var Ah = uc(ec("Optional"), 8);
var Oh = uc(ec("SkipSelf"), 4);
function At(e, t) {
  let n = e.hasOwnProperty(Er);
  return n ? e[Er] : null;
}
function Fh(e, t, n) {
  if (e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) {
    let o = e[r],
      i = t[r];
    if ((n && ((o = n(o)), (i = n(i))), i !== o)) return !1;
  }
  return !0;
}
function Rh(e) {
  return e.flat(Number.POSITIVE_INFINITY);
}
function gs(e, t) {
  e.forEach((n) => (Array.isArray(n) ? gs(n, t) : t(n)));
}
function cc(e, t, n) {
  t >= e.length ? e.push(n) : e.splice(t, 0, n);
}
function Cr(e, t) {
  return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
}
function Ph(e, t) {
  let n = [];
  for (let r = 0; r < e; r++) n.push(t);
  return n;
}
function kh(e, t, n, r) {
  let o = e.length;
  if (o == t) e.push(n, r);
  else if (o === 1) e.push(r, e[0]), (e[0] = n);
  else {
    for (o--, e.push(e[o - 1], e[o]); o > t; ) {
      let i = o - 2;
      (e[o] = e[i]), o--;
    }
    (e[t] = n), (e[t + 1] = r);
  }
}
function eo(e, t, n) {
  let r = In(e, t);
  return r >= 0 ? (e[r | 1] = n) : ((r = ~r), kh(e, r, t, n)), r;
}
function zo(e, t) {
  let n = In(e, t);
  if (n >= 0) return e[n | 1];
}
function In(e, t) {
  return Lh(e, t, 1);
}
function Lh(e, t, n) {
  let r = 0,
    o = e.length >> n;
  for (; o !== r; ) {
    let i = r + ((o - r) >> 1),
      s = e[i << n];
    if (t === s) return i << n;
    s > t ? (o = i) : (r = i + 1);
  }
  return ~(o << n);
}
var Ot = {},
  Q = [],
  br = new T(""),
  lc = new T("", -1),
  dc = new T(""),
  _r = class {
    get(t, n = dn) {
      if (n === dn) {
        let r = new Error(`NullInjectorError: No provider for ${K(t)}!`);
        throw ((r.name = "NullInjectorError"), r);
      }
      return n;
    }
  },
  fc = (function (e) {
    return (e[(e.OnPush = 0)] = "OnPush"), (e[(e.Default = 1)] = "Default"), e;
  })(fc || {}),
  fn = (function (e) {
    return (
      (e[(e.Emulated = 0)] = "Emulated"),
      (e[(e.None = 2)] = "None"),
      (e[(e.ShadowDom = 3)] = "ShadowDom"),
      e
    );
  })(fn || {}),
  Le = (function (e) {
    return (
      (e[(e.None = 0)] = "None"),
      (e[(e.SignalBased = 1)] = "SignalBased"),
      (e[(e.HasDecoratorInputTransform = 2)] = "HasDecoratorInputTransform"),
      e
    );
  })(Le || {});
function jh(e, t, n) {
  let r = e.length;
  for (;;) {
    let o = e.indexOf(t, n);
    if (o === -1) return o;
    if (o === 0 || e.charCodeAt(o - 1) <= 32) {
      let i = t.length;
      if (o + i === r || e.charCodeAt(o + i) <= 32) return o;
    }
    n = o + 1;
  }
}
function ai(e, t, n) {
  let r = 0;
  for (; r < n.length; ) {
    let o = n[r];
    if (typeof o == "number") {
      if (o !== 0) break;
      r++;
      let i = n[r++],
        s = n[r++],
        a = n[r++];
      e.setAttribute(t, s, a, i);
    } else {
      let i = o,
        s = n[++r];
      Vh(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), r++;
    }
  }
  return r;
}
function hc(e) {
  return e === 3 || e === 4 || e === 6;
}
function Vh(e) {
  return e.charCodeAt(0) === 64;
}
function hn(e, t) {
  if (!(t === null || t.length === 0))
    if (e === null || e.length === 0) e = t.slice();
    else {
      let n = -1;
      for (let r = 0; r < t.length; r++) {
        let o = t[r];
        typeof o == "number"
          ? (n = o)
          : n === 0 ||
            (n === -1 || n === 2
              ? fu(e, n, o, null, t[++r])
              : fu(e, n, o, null, null));
      }
    }
  return e;
}
function fu(e, t, n, r, o) {
  let i = 0,
    s = e.length;
  if (t === -1) s = -1;
  else
    for (; i < e.length; ) {
      let a = e[i++];
      if (typeof a == "number") {
        if (a === t) {
          s = -1;
          break;
        } else if (a > t) {
          s = i - 1;
          break;
        }
      }
    }
  for (; i < e.length; ) {
    let a = e[i];
    if (typeof a == "number") break;
    if (a === n) {
      if (r === null) {
        o !== null && (e[i + 1] = o);
        return;
      } else if (r === e[i + 1]) {
        e[i + 2] = o;
        return;
      }
    }
    i++, r !== null && i++, o !== null && i++;
  }
  s !== -1 && (e.splice(s, 0, t), (i = s + 1)),
    e.splice(i++, 0, n),
    r !== null && e.splice(i++, 0, r),
    o !== null && e.splice(i++, 0, o);
}
var pc = "ng-template";
function Bh(e, t, n, r) {
  let o = 0;
  if (r) {
    for (; o < t.length && typeof t[o] == "string"; o += 2)
      if (t[o] === "class" && jh(t[o + 1].toLowerCase(), n, 0) !== -1)
        return !0;
  } else if (ms(e)) return !1;
  if (((o = t.indexOf(1, o)), o > -1)) {
    let i;
    for (; ++o < t.length && typeof (i = t[o]) == "string"; )
      if (i.toLowerCase() === n) return !0;
  }
  return !1;
}
function ms(e) {
  return e.type === 4 && e.value !== pc;
}
function $h(e, t, n) {
  let r = e.type === 4 && !n ? pc : e.value;
  return t === r;
}
function Hh(e, t, n) {
  let r = 4,
    o = e.attrs,
    i = o !== null ? Gh(o) : 0,
    s = !1;
  for (let a = 0; a < t.length; a++) {
    let u = t[a];
    if (typeof u == "number") {
      if (!s && !le(r) && !le(u)) return !1;
      if (s && le(u)) continue;
      (s = !1), (r = u | (r & 1));
      continue;
    }
    if (!s)
      if (r & 4) {
        if (
          ((r = 2 | (r & 1)),
          (u !== "" && !$h(e, u, n)) || (u === "" && t.length === 1))
        ) {
          if (le(r)) return !1;
          s = !0;
        }
      } else if (r & 8) {
        if (o === null || !Bh(e, o, u, n)) {
          if (le(r)) return !1;
          s = !0;
        }
      } else {
        let c = t[++a],
          l = Uh(u, o, ms(e), n);
        if (l === -1) {
          if (le(r)) return !1;
          s = !0;
          continue;
        }
        if (c !== "") {
          let d;
          if (
            (l > i ? (d = "") : (d = o[l + 1].toLowerCase()), r & 2 && c !== d)
          ) {
            if (le(r)) return !1;
            s = !0;
          }
        }
      }
  }
  return le(r) || s;
}
function le(e) {
  return (e & 1) === 0;
}
function Uh(e, t, n, r) {
  if (t === null) return -1;
  let o = 0;
  if (r || !n) {
    let i = !1;
    for (; o < t.length; ) {
      let s = t[o];
      if (s === e) return o;
      if (s === 3 || s === 6) i = !0;
      else if (s === 1 || s === 2) {
        let a = t[++o];
        for (; typeof a == "string"; ) a = t[++o];
        continue;
      } else {
        if (s === 4) break;
        if (s === 0) {
          o += 4;
          continue;
        }
      }
      o += i ? 1 : 2;
    }
    return -1;
  } else return Wh(t, e);
}
function gc(e, t, n = !1) {
  for (let r = 0; r < t.length; r++) if (Hh(e, t[r], n)) return !0;
  return !1;
}
function zh(e) {
  let t = e.attrs;
  if (t != null) {
    let n = t.indexOf(5);
    if (!(n & 1)) return t[n + 1];
  }
  return null;
}
function Gh(e) {
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (hc(n)) return t;
  }
  return e.length;
}
function Wh(e, t) {
  let n = e.indexOf(4);
  if (n > -1)
    for (n++; n < e.length; ) {
      let r = e[n];
      if (typeof r == "number") return -1;
      if (r === t) return n;
      n++;
    }
  return -1;
}
function qh(e, t) {
  e: for (let n = 0; n < t.length; n++) {
    let r = t[n];
    if (e.length === r.length) {
      for (let o = 0; o < e.length; o++) if (e[o] !== r[o]) continue e;
      return !0;
    }
  }
  return !1;
}
function hu(e, t) {
  return e ? ":not(" + t.trim() + ")" : t;
}
function Zh(e) {
  let t = e[0],
    n = 1,
    r = 2,
    o = "",
    i = !1;
  for (; n < e.length; ) {
    let s = e[n];
    if (typeof s == "string")
      if (r & 2) {
        let a = e[++n];
        o += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
      } else r & 8 ? (o += "." + s) : r & 4 && (o += " " + s);
    else
      o !== "" && !le(s) && ((t += hu(i, o)), (o = "")),
        (r = s),
        (i = i || !le(r));
    n++;
  }
  return o !== "" && (t += hu(i, o)), t;
}
function Yh(e) {
  return e.map(Zh).join(",");
}
function Qh(e) {
  let t = [],
    n = [],
    r = 1,
    o = 2;
  for (; r < e.length; ) {
    let i = e[r];
    if (typeof i == "string")
      o === 2 ? i !== "" && t.push(i, e[++r]) : o === 8 && n.push(i);
    else {
      if (!le(o)) break;
      o = i;
    }
    r++;
  }
  return { attrs: t, classes: n };
}
function a0(e) {
  return Dn(() => {
    let t = vc(e),
      n = ue(ee({}, t), {
        decls: e.decls,
        vars: e.vars,
        template: e.template,
        consts: e.consts || null,
        ngContentSelectors: e.ngContentSelectors,
        onPush: e.changeDetection === fc.OnPush,
        directiveDefs: null,
        pipeDefs: null,
        dependencies: (t.standalone && e.dependencies) || null,
        getStandaloneInjector: null,
        signals: e.signals ?? !1,
        data: e.data || {},
        encapsulation: e.encapsulation || fn.Emulated,
        styles: e.styles || Q,
        _: null,
        schemas: e.schemas || null,
        tView: null,
        id: "",
      });
    Ic(n);
    let r = e.dependencies;
    return (
      (n.directiveDefs = gu(r, !1)), (n.pipeDefs = gu(r, !0)), (n.id = ep(n)), n
    );
  });
}
function Kh(e) {
  return je(e) || mc(e);
}
function Jh(e) {
  return e !== null;
}
function ys(e) {
  return Dn(() => ({
    type: e.type,
    bootstrap: e.bootstrap || Q,
    declarations: e.declarations || Q,
    imports: e.imports || Q,
    exports: e.exports || Q,
    transitiveCompileScopes: null,
    schemas: e.schemas || null,
    id: e.id || null,
  }));
}
function pu(e, t) {
  if (e == null) return Ot;
  let n = {};
  for (let r in e)
    if (e.hasOwnProperty(r)) {
      let o = e[r],
        i,
        s,
        a = Le.None;
      Array.isArray(o)
        ? ((a = o[0]), (i = o[1]), (s = o[2] ?? i))
        : ((i = o), (s = o)),
        t ? ((n[i] = a !== Le.None ? [r, a] : r), (t[i] = s)) : (n[i] = r);
    }
  return n;
}
function Ds(e) {
  return Dn(() => {
    let t = vc(e);
    return Ic(t), t;
  });
}
function je(e) {
  return e[mh] || null;
}
function mc(e) {
  return e[yh] || null;
}
function yc(e) {
  return e[Dh] || null;
}
function Xh(e) {
  let t = je(e) || mc(e) || yc(e);
  return t !== null ? t.standalone : !1;
}
function Dc(e, t) {
  let n = e[vh] || null;
  if (!n && t === !0)
    throw new Error(`Type ${K(e)} does not have '\u0275mod' property.`);
  return n;
}
function vc(e) {
  let t = {};
  return {
    type: e.type,
    providersResolver: null,
    factory: null,
    hostBindings: e.hostBindings || null,
    hostVars: e.hostVars || 0,
    hostAttrs: e.hostAttrs || null,
    contentQueries: e.contentQueries || null,
    declaredInputs: t,
    inputTransforms: null,
    inputConfig: e.inputs || Ot,
    exportAs: e.exportAs || null,
    standalone: e.standalone === !0,
    signals: e.signals === !0,
    selectors: e.selectors || Q,
    viewQuery: e.viewQuery || null,
    features: e.features || null,
    setInput: null,
    findHostDirectiveDefs: null,
    hostDirectives: null,
    inputs: pu(e.inputs, t),
    outputs: pu(e.outputs),
    debugInfo: null,
  };
}
function Ic(e) {
  e.features?.forEach((t) => t(e));
}
function gu(e, t) {
  if (!e) return null;
  let n = t ? yc : Kh;
  return () => (typeof e == "function" ? e() : e).map((r) => n(r)).filter(Jh);
}
function ep(e) {
  let t = 0,
    n = [
      e.selectors,
      e.ngContentSelectors,
      e.hostVars,
      e.hostAttrs,
      e.consts,
      e.vars,
      e.decls,
      e.encapsulation,
      e.standalone,
      e.signals,
      e.exportAs,
      JSON.stringify(e.inputs),
      JSON.stringify(e.outputs),
      Object.getOwnPropertyNames(e.type.prototype),
      !!e.contentQueries,
      !!e.viewQuery,
    ].join("|");
  for (let o of n) t = (Math.imul(31, t) + o.charCodeAt(0)) << 0;
  return (t += 2147483648), "c" + t;
}
function u0(e) {
  return { ɵproviders: e };
}
function tp(...e) {
  return { ɵproviders: Ec(!0, e), ɵfromNgModule: !0 };
}
function Ec(e, ...t) {
  let n = [],
    r = new Set(),
    o,
    i = (s) => {
      n.push(s);
    };
  return (
    gs(t, (s) => {
      let a = s;
      ui(a, i, [], r) && ((o ||= []), o.push(a));
    }),
    o !== void 0 && wc(o, i),
    n
  );
}
function wc(e, t) {
  for (let n = 0; n < e.length; n++) {
    let { ngModule: r, providers: o } = e[n];
    vs(o, (i) => {
      t(i, r);
    });
  }
}
function ui(e, t, n, r) {
  if (((e = q(e)), !e)) return !1;
  let o = null,
    i = uu(e),
    s = !i && je(e);
  if (!i && !s) {
    let u = e.ngModule;
    if (((i = uu(u)), i)) o = u;
    else return !1;
  } else {
    if (s && !s.standalone) return !1;
    o = e;
  }
  let a = r.has(o);
  if (s) {
    if (a) return !1;
    if ((r.add(o), s.dependencies)) {
      let u =
        typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
      for (let c of u) ui(c, t, n, r);
    }
  } else if (i) {
    if (i.imports != null && !a) {
      r.add(o);
      let c;
      try {
        gs(i.imports, (l) => {
          ui(l, t, n, r) && ((c ||= []), c.push(l));
        });
      } finally {
      }
      c !== void 0 && wc(c, t);
    }
    if (!a) {
      let c = At(o) || (() => new o());
      t({ provide: o, useFactory: c, deps: Q }, o),
        t({ provide: dc, useValue: o, multi: !0 }, o),
        t({ provide: br, useValue: () => L(o), multi: !0 }, o);
    }
    let u = i.providers;
    if (u != null && !a) {
      let c = e;
      vs(u, (l) => {
        t(l, c);
      });
    }
  } else return !1;
  return o !== e && e.providers !== void 0;
}
function vs(e, t) {
  for (let n of e)
    ic(n) && (n = n.ɵproviders), Array.isArray(n) ? vs(n, t) : t(n);
}
var np = O({ provide: String, useValue: O });
function Cc(e) {
  return e !== null && typeof e == "object" && np in e;
}
function rp(e) {
  return !!(e && e.useExisting);
}
function op(e) {
  return !!(e && e.useFactory);
}
function Ft(e) {
  return typeof e == "function";
}
function ip(e) {
  return !!e.useClass;
}
var bc = new T(""),
  gr = {},
  sp = {},
  Go;
function Is() {
  return Go === void 0 && (Go = new _r()), Go;
}
var Ve = class {},
  pn = class extends Ve {
    get destroyed() {
      return this._destroyed;
    }
    constructor(t, n, r, o) {
      super(),
        (this.parent = n),
        (this.source = r),
        (this.scopes = o),
        (this.records = new Map()),
        (this._ngOnDestroyHooks = new Set()),
        (this._onDestroyHooks = []),
        (this._destroyed = !1),
        li(t, (s) => this.processProvider(s)),
        this.records.set(lc, _t(void 0, this)),
        o.has("environment") && this.records.set(Ve, _t(void 0, this));
      let i = this.records.get(bc);
      i != null && typeof i.value == "string" && this.scopes.add(i.value),
        (this.injectorDefTypes = new Set(this.get(dc, Q, M.Self)));
    }
    destroy() {
      this.assertNotDestroyed(), (this._destroyed = !0);
      let t = b(null);
      try {
        for (let r of this._ngOnDestroyHooks) r.ngOnDestroy();
        let n = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let r of n) r();
      } finally {
        this.records.clear(),
          this._ngOnDestroyHooks.clear(),
          this.injectorDefTypes.clear(),
          b(t);
      }
    }
    onDestroy(t) {
      return (
        this.assertNotDestroyed(),
        this._onDestroyHooks.push(t),
        () => this.removeOnDestroy(t)
      );
    }
    runInContext(t) {
      this.assertNotDestroyed();
      let n = Re(this),
        r = re(void 0),
        o;
      try {
        return t();
      } finally {
        Re(n), re(r);
      }
    }
    get(t, n = dn, r = M.Default) {
      if ((this.assertNotDestroyed(), t.hasOwnProperty(lu))) return t[lu](this);
      r = Xr(r);
      let o,
        i = Re(this),
        s = re(void 0);
      try {
        if (!(r & M.SkipSelf)) {
          let u = this.records.get(t);
          if (u === void 0) {
            let c = dp(t) && Jr(t);
            c && this.injectableDefInScope(c)
              ? (u = _t(ci(t), gr))
              : (u = null),
              this.records.set(t, u);
          }
          if (u != null) return this.hydrate(t, u);
        }
        let a = r & M.Self ? Is() : this.parent;
        return (n = r & M.Optional && n === dn ? null : n), a.get(t, n);
      } catch (a) {
        if (a.name === "NullInjectorError") {
          if (((a[wr] = a[wr] || []).unshift(K(t)), i)) throw a;
          return Th(a, t, "R3InjectorError", this.source);
        } else throw a;
      } finally {
        re(s), Re(i);
      }
    }
    resolveInjectorInitializers() {
      let t = b(null),
        n = Re(this),
        r = re(void 0),
        o;
      try {
        let i = this.get(br, Q, M.Self);
        for (let s of i) s();
      } finally {
        Re(n), re(r), b(t);
      }
    }
    toString() {
      let t = [],
        n = this.records;
      for (let r of n.keys()) t.push(K(r));
      return `R3Injector[${t.join(", ")}]`;
    }
    assertNotDestroyed() {
      if (this._destroyed) throw new x(205, !1);
    }
    processProvider(t) {
      t = q(t);
      let n = Ft(t) ? t : q(t && t.provide),
        r = up(t);
      if (!Ft(t) && t.multi === !0) {
        let o = this.records.get(n);
        o ||
          ((o = _t(void 0, gr, !0)),
          (o.factory = () => si(o.multi)),
          this.records.set(n, o)),
          (n = t),
          o.multi.push(t);
      }
      this.records.set(n, r);
    }
    hydrate(t, n) {
      let r = b(null);
      try {
        return (
          n.value === gr && ((n.value = sp), (n.value = n.factory())),
          typeof n.value == "object" &&
            n.value &&
            lp(n.value) &&
            this._ngOnDestroyHooks.add(n.value),
          n.value
        );
      } finally {
        b(r);
      }
    }
    injectableDefInScope(t) {
      if (!t.providedIn) return !1;
      let n = q(t.providedIn);
      return typeof n == "string"
        ? n === "any" || this.scopes.has(n)
        : this.injectorDefTypes.has(n);
    }
    removeOnDestroy(t) {
      let n = this._onDestroyHooks.indexOf(t);
      n !== -1 && this._onDestroyHooks.splice(n, 1);
    }
  };
function ci(e) {
  let t = Jr(e),
    n = t !== null ? t.factory : At(e);
  if (n !== null) return n;
  if (e instanceof T) throw new x(204, !1);
  if (e instanceof Function) return ap(e);
  throw new x(204, !1);
}
function ap(e) {
  if (e.length > 0) throw new x(204, !1);
  let n = ph(e);
  return n !== null ? () => n.factory(e) : () => new e();
}
function up(e) {
  if (Cc(e)) return _t(void 0, e.useValue);
  {
    let t = _c(e);
    return _t(t, gr);
  }
}
function _c(e, t, n) {
  let r;
  if (Ft(e)) {
    let o = q(e);
    return At(o) || ci(o);
  } else if (Cc(e)) r = () => q(e.useValue);
  else if (op(e)) r = () => e.useFactory(...si(e.deps || []));
  else if (rp(e)) r = () => L(q(e.useExisting));
  else {
    let o = q(e && (e.useClass || e.provide));
    if (cp(e)) r = () => new o(...si(e.deps));
    else return At(o) || ci(o);
  }
  return r;
}
function _t(e, t, n = !1) {
  return { factory: e, value: t, multi: n ? [] : void 0 };
}
function cp(e) {
  return !!e.deps;
}
function lp(e) {
  return (
    e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"
  );
}
function dp(e) {
  return typeof e == "function" || (typeof e == "object" && e instanceof T);
}
function li(e, t) {
  for (let n of e)
    Array.isArray(n) ? li(n, t) : n && ic(n) ? li(n.ɵproviders, t) : t(n);
}
function c0(e, t) {
  e instanceof pn && e.assertNotDestroyed();
  let n,
    r = Re(e),
    o = re(void 0);
  try {
    return t();
  } finally {
    Re(r), re(o);
  }
}
function Mc() {
  return sc() !== void 0 || Mh() != null;
}
function Es(e) {
  if (!Mc()) throw new x(-203, !1);
}
function fp(e) {
  let t = ln.ng;
  if (t && t.ɵcompilerFacade) return t.ɵcompilerFacade;
  throw new Error("JIT compiler unavailable");
}
function hp(e) {
  return typeof e == "function";
}
var we = 0,
  D = 1,
  y = 2,
  G = 3,
  fe = 4,
  J = 5,
  Rt = 6,
  Mr = 7,
  H = 8,
  Pt = 9,
  Ie = 10,
  P = 11,
  gn = 12,
  mu = 13,
  Gt = 14,
  te = 15,
  nt = 16,
  Mt = 17,
  xe = 18,
  to = 19,
  xc = 20,
  Pe = 21,
  mr = 22,
  oe = 23,
  Z = 25,
  ws = 1;
var rt = 7,
  xr = 8,
  kt = 9,
  U = 10,
  Sr = (function (e) {
    return (
      (e[(e.None = 0)] = "None"),
      (e[(e.HasTransplantedViews = 2)] = "HasTransplantedViews"),
      e
    );
  })(Sr || {});
function ke(e) {
  return Array.isArray(e) && typeof e[ws] == "object";
}
function Ne(e) {
  return Array.isArray(e) && e[ws] === !0;
}
function Cs(e) {
  return (e.flags & 4) !== 0;
}
function no(e) {
  return e.componentOffset > -1;
}
function ro(e) {
  return (e.flags & 1) === 1;
}
function Se(e) {
  return !!e.template;
}
function di(e) {
  return (e[y] & 512) !== 0;
}
var fi = class {
  constructor(t, n, r) {
    (this.previousValue = t), (this.currentValue = n), (this.firstChange = r);
  }
  isFirstChange() {
    return this.firstChange;
  }
};
function Sc(e, t, n, r) {
  t !== null ? t.applyValueToInputSignal(t, r) : (e[n] = r);
}
function bs() {
  return Tc;
}
function Tc(e) {
  return e.type.prototype.ngOnChanges && (e.setInput = gp), pp;
}
bs.ngInherit = !0;
function pp() {
  let e = Ac(this),
    t = e?.current;
  if (t) {
    let n = e.previous;
    if (n === Ot) e.previous = t;
    else for (let r in t) n[r] = t[r];
    (e.current = null), this.ngOnChanges(t);
  }
}
function gp(e, t, n, r, o) {
  let i = this.declaredInputs[r],
    s = Ac(e) || mp(e, { previous: Ot, current: null }),
    a = s.current || (s.current = {}),
    u = s.previous,
    c = u[i];
  (a[i] = new fi(c && c.currentValue, n, u === Ot)), Sc(e, t, o, n);
}
var Nc = "__ngSimpleChanges__";
function Ac(e) {
  return e[Nc] || null;
}
function mp(e, t) {
  return (e[Nc] = t);
}
var yu = null;
var De = function (e, t, n) {
    yu?.(e, t, n);
  },
  Oc = "svg",
  yp = "math";
function Ee(e) {
  for (; Array.isArray(e); ) e = e[we];
  return e;
}
function Dp(e) {
  for (; Array.isArray(e); ) {
    if (typeof e[ws] == "object") return e;
    e = e[we];
  }
  return null;
}
function Fc(e, t) {
  return Ee(t[e]);
}
function se(e, t) {
  return Ee(t[e.index]);
}
function _s(e, t) {
  return e.data[t];
}
function vp(e, t) {
  return e[t];
}
function Ue(e, t) {
  let n = t[e];
  return ke(n) ? n : n[we];
}
function Ip(e) {
  return (e[y] & 4) === 4;
}
function Ms(e) {
  return (e[y] & 128) === 128;
}
function Ep(e) {
  return Ne(e[G]);
}
function Be(e, t) {
  return t == null ? null : e[t];
}
function Rc(e) {
  e[Mt] = 0;
}
function Pc(e) {
  e[y] & 1024 || ((e[y] |= 1024), Ms(e) && io(e));
}
function wp(e, t) {
  for (; e > 0; ) (t = t[Gt]), e--;
  return t;
}
function oo(e) {
  return !!(e[y] & 9216 || e[oe]?.dirty);
}
function hi(e) {
  e[Ie].changeDetectionScheduler?.notify(8),
    e[y] & 64 && (e[y] |= 1024),
    oo(e) && io(e);
}
function io(e) {
  e[Ie].changeDetectionScheduler?.notify(0);
  let t = ot(e);
  for (; t !== null && !(t[y] & 8192 || ((t[y] |= 8192), !Ms(t))); ) t = ot(t);
}
function kc(e, t) {
  if ((e[y] & 256) === 256) throw new x(911, !1);
  e[Pe] === null && (e[Pe] = []), e[Pe].push(t);
}
function Cp(e, t) {
  if (e[Pe] === null) return;
  let n = e[Pe].indexOf(t);
  n !== -1 && e[Pe].splice(n, 1);
}
function ot(e) {
  let t = e[G];
  return Ne(t) ? t[G] : t;
}
var C = { lFrame: qc(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var Lc = !1;
function bp() {
  return C.lFrame.elementDepthCount;
}
function _p() {
  C.lFrame.elementDepthCount++;
}
function Mp() {
  C.lFrame.elementDepthCount--;
}
function jc() {
  return C.bindingsEnabled;
}
function Vc() {
  return C.skipHydrationRootTNode !== null;
}
function xp(e) {
  return C.skipHydrationRootTNode === e;
}
function Sp() {
  C.skipHydrationRootTNode = null;
}
function E() {
  return C.lFrame.lView;
}
function k() {
  return C.lFrame.tView;
}
function l0(e) {
  return (C.lFrame.contextLView = e), e[H];
}
function d0(e) {
  return (C.lFrame.contextLView = null), e;
}
function $() {
  let e = Bc();
  for (; e !== null && e.type === 64; ) e = e.parent;
  return e;
}
function Bc() {
  return C.lFrame.currentTNode;
}
function Tp() {
  let e = C.lFrame,
    t = e.currentTNode;
  return e.isParent ? t : t.parent;
}
function dt(e, t) {
  let n = C.lFrame;
  (n.currentTNode = e), (n.isParent = t);
}
function xs() {
  return C.lFrame.isParent;
}
function Ss() {
  C.lFrame.isParent = !1;
}
function Np() {
  return C.lFrame.contextLView;
}
function $c() {
  return Lc;
}
function Du(e) {
  Lc = e;
}
function Hc() {
  let e = C.lFrame,
    t = e.bindingRootIndex;
  return t === -1 && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t;
}
function Ap(e) {
  return (C.lFrame.bindingIndex = e);
}
function ft() {
  return C.lFrame.bindingIndex++;
}
function Uc(e) {
  let t = C.lFrame,
    n = t.bindingIndex;
  return (t.bindingIndex = t.bindingIndex + e), n;
}
function Op() {
  return C.lFrame.inI18n;
}
function Fp(e, t) {
  let n = C.lFrame;
  (n.bindingIndex = n.bindingRootIndex = e), pi(t);
}
function Rp() {
  return C.lFrame.currentDirectiveIndex;
}
function pi(e) {
  C.lFrame.currentDirectiveIndex = e;
}
function Ts(e) {
  let t = C.lFrame.currentDirectiveIndex;
  return t === -1 ? null : e[t];
}
function zc() {
  return C.lFrame.currentQueryIndex;
}
function Ns(e) {
  C.lFrame.currentQueryIndex = e;
}
function Pp(e) {
  let t = e[D];
  return t.type === 2 ? t.declTNode : t.type === 1 ? e[J] : null;
}
function Gc(e, t, n) {
  if (n & M.SkipSelf) {
    let o = t,
      i = e;
    for (; (o = o.parent), o === null && !(n & M.Host); )
      if (((o = Pp(i)), o === null || ((i = i[Gt]), o.type & 10))) break;
    if (o === null) return !1;
    (t = o), (e = i);
  }
  let r = (C.lFrame = Wc());
  return (r.currentTNode = t), (r.lView = e), !0;
}
function As(e) {
  let t = Wc(),
    n = e[D];
  (C.lFrame = t),
    (t.currentTNode = n.firstChild),
    (t.lView = e),
    (t.tView = n),
    (t.contextLView = e),
    (t.bindingIndex = n.bindingStartIndex),
    (t.inI18n = !1);
}
function Wc() {
  let e = C.lFrame,
    t = e === null ? null : e.child;
  return t === null ? qc(e) : t;
}
function qc(e) {
  let t = {
    currentTNode: null,
    isParent: !0,
    lView: null,
    tView: null,
    selectedIndex: -1,
    contextLView: null,
    elementDepthCount: 0,
    currentNamespace: null,
    currentDirectiveIndex: -1,
    bindingRootIndex: -1,
    bindingIndex: -1,
    currentQueryIndex: 0,
    parent: e,
    child: null,
    inI18n: !1,
  };
  return e !== null && (e.child = t), t;
}
function Zc() {
  let e = C.lFrame;
  return (C.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e;
}
var Yc = Zc;
function Os() {
  let e = Zc();
  (e.isParent = !0),
    (e.tView = null),
    (e.selectedIndex = -1),
    (e.contextLView = null),
    (e.elementDepthCount = 0),
    (e.currentDirectiveIndex = -1),
    (e.currentNamespace = null),
    (e.bindingRootIndex = -1),
    (e.bindingIndex = -1),
    (e.currentQueryIndex = 0);
}
function kp(e) {
  return (C.lFrame.contextLView = wp(e, C.lFrame.contextLView))[H];
}
function ze() {
  return C.lFrame.selectedIndex;
}
function it(e) {
  C.lFrame.selectedIndex = e;
}
function En() {
  let e = C.lFrame;
  return _s(e.tView, e.selectedIndex);
}
function f0() {
  C.lFrame.currentNamespace = Oc;
}
function Lp() {
  return C.lFrame.currentNamespace;
}
var Qc = !0;
function so() {
  return Qc;
}
function ao(e) {
  Qc = e;
}
function jp(e, t, n) {
  let { ngOnChanges: r, ngOnInit: o, ngDoCheck: i } = t.type.prototype;
  if (r) {
    let s = Tc(t);
    (n.preOrderHooks ??= []).push(e, s),
      (n.preOrderCheckHooks ??= []).push(e, s);
  }
  o && (n.preOrderHooks ??= []).push(0 - e, o),
    i &&
      ((n.preOrderHooks ??= []).push(e, i),
      (n.preOrderCheckHooks ??= []).push(e, i));
}
function uo(e, t) {
  for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
    let i = e.data[n].type.prototype,
      {
        ngAfterContentInit: s,
        ngAfterContentChecked: a,
        ngAfterViewInit: u,
        ngAfterViewChecked: c,
        ngOnDestroy: l,
      } = i;
    s && (e.contentHooks ??= []).push(-n, s),
      a &&
        ((e.contentHooks ??= []).push(n, a),
        (e.contentCheckHooks ??= []).push(n, a)),
      u && (e.viewHooks ??= []).push(-n, u),
      c &&
        ((e.viewHooks ??= []).push(n, c), (e.viewCheckHooks ??= []).push(n, c)),
      l != null && (e.destroyHooks ??= []).push(n, l);
  }
}
function yr(e, t, n) {
  Kc(e, t, 3, n);
}
function Dr(e, t, n, r) {
  (e[y] & 3) === n && Kc(e, t, n, r);
}
function Wo(e, t) {
  let n = e[y];
  (n & 3) === t && ((n &= 16383), (n += 1), (e[y] = n));
}
function Kc(e, t, n, r) {
  let o = r !== void 0 ? e[Mt] & 65535 : 0,
    i = r ?? -1,
    s = t.length - 1,
    a = 0;
  for (let u = o; u < s; u++)
    if (typeof t[u + 1] == "number") {
      if (((a = t[u]), r != null && a >= r)) break;
    } else
      t[u] < 0 && (e[Mt] += 65536),
        (a < i || i == -1) &&
          (Vp(e, n, t, u), (e[Mt] = (e[Mt] & 4294901760) + u + 2)),
        u++;
}
function vu(e, t) {
  De(4, e, t);
  let n = b(null);
  try {
    t.call(e);
  } finally {
    b(n), De(5, e, t);
  }
}
function Vp(e, t, n, r) {
  let o = n[r] < 0,
    i = n[r + 1],
    s = o ? -n[r] : n[r],
    a = e[s];
  o
    ? e[y] >> 14 < e[Mt] >> 16 &&
      (e[y] & 3) === t &&
      ((e[y] += 16384), vu(a, i))
    : vu(a, i);
}
var Nt = -1,
  st = class {
    constructor(t, n, r) {
      (this.factory = t),
        (this.resolving = !1),
        (this.canSeeViewProviders = n),
        (this.injectImpl = r);
    }
  };
function Bp(e) {
  return e instanceof st;
}
function $p(e) {
  return (e.flags & 8) !== 0;
}
function Hp(e) {
  return (e.flags & 16) !== 0;
}
var qo = {},
  gi = class {
    constructor(t, n) {
      (this.injector = t), (this.parentInjector = n);
    }
    get(t, n, r) {
      r = Xr(r);
      let o = this.injector.get(t, qo, r);
      return o !== qo || n === qo ? o : this.parentInjector.get(t, n, r);
    }
  };
function Jc(e) {
  return e !== Nt;
}
function Tr(e) {
  return e & 32767;
}
function Up(e) {
  return e >> 16;
}
function Nr(e, t) {
  let n = Up(e),
    r = t;
  for (; n > 0; ) (r = r[Gt]), n--;
  return r;
}
var mi = !0;
function Iu(e) {
  let t = mi;
  return (mi = e), t;
}
var zp = 256,
  Xc = zp - 1,
  el = 5,
  Gp = 0,
  ve = {};
function Wp(e, t, n) {
  let r;
  typeof n == "string"
    ? (r = n.charCodeAt(0) || 0)
    : n.hasOwnProperty(un) && (r = n[un]),
    r == null && (r = n[un] = Gp++);
  let o = r & Xc,
    i = 1 << o;
  t.data[e + (o >> el)] |= i;
}
function Ar(e, t) {
  let n = tl(e, t);
  if (n !== -1) return n;
  let r = t[D];
  r.firstCreatePass &&
    ((e.injectorIndex = t.length),
    Zo(r.data, e),
    Zo(t, null),
    Zo(r.blueprint, null));
  let o = Fs(e, t),
    i = e.injectorIndex;
  if (Jc(o)) {
    let s = Tr(o),
      a = Nr(o, t),
      u = a[D].data;
    for (let c = 0; c < 8; c++) t[i + c] = a[s + c] | u[s + c];
  }
  return (t[i + 8] = o), i;
}
function Zo(e, t) {
  e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
}
function tl(e, t) {
  return e.injectorIndex === -1 ||
    (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
    t[e.injectorIndex + 8] === null
    ? -1
    : e.injectorIndex;
}
function Fs(e, t) {
  if (e.parent && e.parent.injectorIndex !== -1) return e.parent.injectorIndex;
  let n = 0,
    r = null,
    o = t;
  for (; o !== null; ) {
    if (((r = sl(o)), r === null)) return Nt;
    if ((n++, (o = o[Gt]), r.injectorIndex !== -1))
      return r.injectorIndex | (n << 16);
  }
  return Nt;
}
function yi(e, t, n) {
  Wp(e, t, n);
}
function qp(e, t) {
  if (t === "class") return e.classes;
  if (t === "style") return e.styles;
  let n = e.attrs;
  if (n) {
    let r = n.length,
      o = 0;
    for (; o < r; ) {
      let i = n[o];
      if (hc(i)) break;
      if (i === 0) o = o + 2;
      else if (typeof i == "number")
        for (o++; o < r && typeof n[o] == "string"; ) o++;
      else {
        if (i === t) return n[o + 1];
        o = o + 2;
      }
    }
  }
  return null;
}
function nl(e, t, n) {
  if (n & M.Optional || e !== void 0) return e;
  ps(t, "NodeInjector");
}
function rl(e, t, n, r) {
  if (
    (n & M.Optional && r === void 0 && (r = null), !(n & (M.Self | M.Host)))
  ) {
    let o = e[Pt],
      i = re(void 0);
    try {
      return o ? o.get(t, r, n & M.Optional) : ac(t, r, n & M.Optional);
    } finally {
      re(i);
    }
  }
  return nl(r, t, n);
}
function ol(e, t, n, r = M.Default, o) {
  if (e !== null) {
    if (t[y] & 2048 && !(r & M.Self)) {
      let s = Kp(e, t, n, r, ve);
      if (s !== ve) return s;
    }
    let i = il(e, t, n, r, ve);
    if (i !== ve) return i;
  }
  return rl(t, n, r, o);
}
function il(e, t, n, r, o) {
  let i = Yp(n);
  if (typeof i == "function") {
    if (!Gc(t, e, r)) return r & M.Host ? nl(o, n, r) : rl(t, n, r, o);
    try {
      let s;
      if (((s = i(r)), s == null && !(r & M.Optional))) ps(n);
      else return s;
    } finally {
      Yc();
    }
  } else if (typeof i == "number") {
    let s = null,
      a = tl(e, t),
      u = Nt,
      c = r & M.Host ? t[te][J] : null;
    for (
      (a === -1 || r & M.SkipSelf) &&
      ((u = a === -1 ? Fs(e, t) : t[a + 8]),
      u === Nt || !wu(r, !1)
        ? (a = -1)
        : ((s = t[D]), (a = Tr(u)), (t = Nr(u, t))));
      a !== -1;

    ) {
      let l = t[D];
      if (Eu(i, a, l.data)) {
        let d = Zp(a, t, n, s, r, c);
        if (d !== ve) return d;
      }
      (u = t[a + 8]),
        u !== Nt && wu(r, t[D].data[a + 8] === c) && Eu(i, a, t)
          ? ((s = l), (a = Tr(u)), (t = Nr(u, t)))
          : (a = -1);
    }
  }
  return o;
}
function Zp(e, t, n, r, o, i) {
  let s = t[D],
    a = s.data[e + 8],
    u = r == null ? no(a) && mi : r != s && (a.type & 3) !== 0,
    c = o & M.Host && i === a,
    l = vr(a, s, n, u, c);
  return l !== null ? at(t, s, l, a) : ve;
}
function vr(e, t, n, r, o) {
  let i = e.providerIndexes,
    s = t.data,
    a = i & 1048575,
    u = e.directiveStart,
    c = e.directiveEnd,
    l = i >> 20,
    d = r ? a : a + l,
    h = o ? a + l : c;
  for (let f = d; f < h; f++) {
    let p = s[f];
    if ((f < u && n === p) || (f >= u && p.type === n)) return f;
  }
  if (o) {
    let f = s[u];
    if (f && Se(f) && f.type === n) return u;
  }
  return null;
}
function at(e, t, n, r) {
  let o = e[n],
    i = t.data;
  if (Bp(o)) {
    let s = o;
    s.resolving && Eh(Ih(i[n]));
    let a = Iu(s.canSeeViewProviders);
    s.resolving = !0;
    let u,
      c = s.injectImpl ? re(s.injectImpl) : null,
      l = Gc(e, r, M.Default);
    try {
      (o = e[n] = s.factory(void 0, i, e, r)),
        t.firstCreatePass && n >= r.directiveStart && jp(n, i[n], t);
    } finally {
      c !== null && re(c), Iu(a), (s.resolving = !1), Yc();
    }
  }
  return o;
}
function Yp(e) {
  if (typeof e == "string") return e.charCodeAt(0) || 0;
  let t = e.hasOwnProperty(un) ? e[un] : void 0;
  return typeof t == "number" ? (t >= 0 ? t & Xc : Qp) : t;
}
function Eu(e, t, n) {
  let r = 1 << e;
  return !!(n[t + (e >> el)] & r);
}
function wu(e, t) {
  return !(e & M.Self) && !(e & M.Host && t);
}
var tt = class {
  constructor(t, n) {
    (this._tNode = t), (this._lView = n);
  }
  get(t, n, r) {
    return ol(this._tNode, this._lView, t, Xr(r), n);
  }
};
function Qp() {
  return new tt($(), E());
}
function h0(e) {
  return Dn(() => {
    let t = e.prototype.constructor,
      n = t[Er] || Di(t),
      r = Object.prototype,
      o = Object.getPrototypeOf(e.prototype).constructor;
    for (; o && o !== r; ) {
      let i = o[Er] || Di(o);
      if (i && i !== n) return i;
      o = Object.getPrototypeOf(o);
    }
    return (i) => new i();
  });
}
function Di(e) {
  return nc(e)
    ? () => {
        let t = Di(q(e));
        return t && t();
      }
    : At(e);
}
function Kp(e, t, n, r, o) {
  let i = e,
    s = t;
  for (; i !== null && s !== null && s[y] & 2048 && !(s[y] & 512); ) {
    let a = il(i, s, n, r | M.Self, ve);
    if (a !== ve) return a;
    let u = i.parent;
    if (!u) {
      let c = s[xc];
      if (c) {
        let l = c.get(n, ve, r);
        if (l !== ve) return l;
      }
      (u = sl(s)), (s = s[Gt]);
    }
    i = u;
  }
  return o;
}
function sl(e) {
  let t = e[D],
    n = t.type;
  return n === 2 ? t.declTNode : n === 1 ? e[J] : null;
}
function Jp(e) {
  return qp($(), e);
}
function Cu(e, t = null, n = null, r) {
  let o = al(e, t, n, r);
  return o.resolveInjectorInitializers(), o;
}
function al(e, t = null, n = null, r, o = new Set()) {
  let i = [n || Q, tp(e)];
  return (
    (r = r || (typeof e == "object" ? void 0 : K(e))),
    new pn(i, t || Is(), r || null, o)
  );
}
var Xe = class Xe {
  static create(t, n) {
    if (Array.isArray(t)) return Cu({ name: "" }, n, t, "");
    {
      let r = t.name ?? "";
      return Cu({ name: r }, t.parent, t.providers, r);
    }
  }
};
(Xe.THROW_IF_NOT_FOUND = dn),
  (Xe.NULL = new _r()),
  (Xe.ɵprov = A({ token: Xe, providedIn: "any", factory: () => L(lc) })),
  (Xe.__NG_ELEMENT_ID__ = -1);
var he = Xe;
var Xp = new T("");
Xp.__NG_ELEMENT_ID__ = (e) => {
  let t = $();
  if (t === null) throw new x(204, !1);
  if (t.type & 2) return t.value;
  if (e & M.Optional) return null;
  throw new x(204, !1);
};
var eg = "ngOriginalError";
function Yo(e) {
  return e[eg];
}
var ul = !0,
  co = (() => {
    let t = class t {};
    (t.__NG_ELEMENT_ID__ = tg), (t.__NG_ENV_ID__ = (r) => r);
    let e = t;
    return e;
  })(),
  vi = class extends co {
    constructor(t) {
      super(), (this._lView = t);
    }
    onDestroy(t) {
      return kc(this._lView, t), () => Cp(this._lView, t);
    }
  };
function tg() {
  return new vi(E());
}
var wn = (() => {
  let t = class t {
    constructor() {
      (this.taskId = 0),
        (this.pendingTasks = new Set()),
        (this.hasPendingTasks = new en(!1));
    }
    get _hasPendingTasks() {
      return this.hasPendingTasks.value;
    }
    add() {
      this._hasPendingTasks || this.hasPendingTasks.next(!0);
      let r = this.taskId++;
      return this.pendingTasks.add(r), r;
    }
    remove(r) {
      this.pendingTasks.delete(r),
        this.pendingTasks.size === 0 &&
          this._hasPendingTasks &&
          this.hasPendingTasks.next(!1);
    }
    ngOnDestroy() {
      this.pendingTasks.clear(),
        this._hasPendingTasks && this.hasPendingTasks.next(!1);
    }
  };
  t.ɵprov = A({ token: t, providedIn: "root", factory: () => new t() });
  let e = t;
  return e;
})();
var Ii = class extends ne {
    constructor(t = !1) {
      super(),
        (this.destroyRef = void 0),
        (this.pendingTasks = void 0),
        (this.__isAsync = t),
        Mc() &&
          ((this.destroyRef = w(co, { optional: !0 }) ?? void 0),
          (this.pendingTasks = w(wn, { optional: !0 }) ?? void 0));
    }
    emit(t) {
      let n = b(null);
      try {
        super.next(t);
      } finally {
        b(n);
      }
    }
    subscribe(t, n, r) {
      let o = t,
        i = n || (() => null),
        s = r;
      if (t && typeof t == "object") {
        let u = t;
        (o = u.next?.bind(u)),
          (i = u.error?.bind(u)),
          (s = u.complete?.bind(u));
      }
      this.__isAsync &&
        ((i = this.wrapInTimeout(i)),
        o && (o = this.wrapInTimeout(o)),
        s && (s = this.wrapInTimeout(s)));
      let a = super.subscribe({ next: o, error: i, complete: s });
      return t instanceof j && t.add(a), a;
    }
    wrapInTimeout(t) {
      return (n) => {
        let r = this.pendingTasks?.add();
        setTimeout(() => {
          t(n), r !== void 0 && this.pendingTasks?.remove(r);
        });
      };
    }
  },
  de = Ii;
function Or(...e) {}
function cl(e) {
  let t, n;
  function r() {
    e = Or;
    try {
      n !== void 0 &&
        typeof cancelAnimationFrame == "function" &&
        cancelAnimationFrame(n),
        t !== void 0 && clearTimeout(t);
    } catch {}
  }
  return (
    (t = setTimeout(() => {
      e(), r();
    })),
    typeof requestAnimationFrame == "function" &&
      (n = requestAnimationFrame(() => {
        e(), r();
      })),
    () => r()
  );
}
function bu(e) {
  return (
    queueMicrotask(() => e()),
    () => {
      e = Or;
    }
  );
}
var Rs = "isAngularZone",
  Fr = Rs + "_ID",
  ng = 0,
  z = class e {
    constructor(t) {
      (this.hasPendingMacrotasks = !1),
        (this.hasPendingMicrotasks = !1),
        (this.isStable = !0),
        (this.onUnstable = new de(!1)),
        (this.onMicrotaskEmpty = new de(!1)),
        (this.onStable = new de(!1)),
        (this.onError = new de(!1));
      let {
        enableLongStackTrace: n = !1,
        shouldCoalesceEventChangeDetection: r = !1,
        shouldCoalesceRunChangeDetection: o = !1,
        scheduleInRootZone: i = ul,
      } = t;
      if (typeof Zone > "u") throw new x(908, !1);
      Zone.assertZonePatched();
      let s = this;
      (s._nesting = 0),
        (s._outer = s._inner = Zone.current),
        Zone.TaskTrackingZoneSpec &&
          (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec())),
        n &&
          Zone.longStackTraceZoneSpec &&
          (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)),
        (s.shouldCoalesceEventChangeDetection = !o && r),
        (s.shouldCoalesceRunChangeDetection = o),
        (s.callbackScheduled = !1),
        (s.scheduleInRootZone = i),
        ig(s);
    }
    static isInAngularZone() {
      return typeof Zone < "u" && Zone.current.get(Rs) === !0;
    }
    static assertInAngularZone() {
      if (!e.isInAngularZone()) throw new x(909, !1);
    }
    static assertNotInAngularZone() {
      if (e.isInAngularZone()) throw new x(909, !1);
    }
    run(t, n, r) {
      return this._inner.run(t, n, r);
    }
    runTask(t, n, r, o) {
      let i = this._inner,
        s = i.scheduleEventTask("NgZoneEvent: " + o, t, rg, Or, Or);
      try {
        return i.runTask(s, n, r);
      } finally {
        i.cancelTask(s);
      }
    }
    runGuarded(t, n, r) {
      return this._inner.runGuarded(t, n, r);
    }
    runOutsideAngular(t) {
      return this._outer.run(t);
    }
  },
  rg = {};
function Ps(e) {
  if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
    try {
      e._nesting++, e.onMicrotaskEmpty.emit(null);
    } finally {
      if ((e._nesting--, !e.hasPendingMicrotasks))
        try {
          e.runOutsideAngular(() => e.onStable.emit(null));
        } finally {
          e.isStable = !0;
        }
    }
}
function og(e) {
  if (e.isCheckStableRunning || e.callbackScheduled) return;
  e.callbackScheduled = !0;
  function t() {
    cl(() => {
      (e.callbackScheduled = !1),
        Ei(e),
        (e.isCheckStableRunning = !0),
        Ps(e),
        (e.isCheckStableRunning = !1);
    });
  }
  e.scheduleInRootZone
    ? Zone.root.run(() => {
        t();
      })
    : e._outer.run(() => {
        t();
      }),
    Ei(e);
}
function ig(e) {
  let t = () => {
      og(e);
    },
    n = ng++;
  e._inner = e._inner.fork({
    name: "angular",
    properties: { [Rs]: !0, [Fr]: n, [Fr + n]: !0 },
    onInvokeTask: (r, o, i, s, a, u) => {
      if (sg(u)) return r.invokeTask(i, s, a, u);
      try {
        return _u(e), r.invokeTask(i, s, a, u);
      } finally {
        ((e.shouldCoalesceEventChangeDetection && s.type === "eventTask") ||
          e.shouldCoalesceRunChangeDetection) &&
          t(),
          Mu(e);
      }
    },
    onInvoke: (r, o, i, s, a, u, c) => {
      try {
        return _u(e), r.invoke(i, s, a, u, c);
      } finally {
        e.shouldCoalesceRunChangeDetection &&
          !e.callbackScheduled &&
          !ag(u) &&
          t(),
          Mu(e);
      }
    },
    onHasTask: (r, o, i, s) => {
      r.hasTask(i, s),
        o === i &&
          (s.change == "microTask"
            ? ((e._hasPendingMicrotasks = s.microTask), Ei(e), Ps(e))
            : s.change == "macroTask" &&
              (e.hasPendingMacrotasks = s.macroTask));
    },
    onHandleError: (r, o, i, s) => (
      r.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1
    ),
  });
}
function Ei(e) {
  e._hasPendingMicrotasks ||
  ((e.shouldCoalesceEventChangeDetection ||
    e.shouldCoalesceRunChangeDetection) &&
    e.callbackScheduled === !0)
    ? (e.hasPendingMicrotasks = !0)
    : (e.hasPendingMicrotasks = !1);
}
function _u(e) {
  e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
}
function Mu(e) {
  e._nesting--, Ps(e);
}
var Rr = class {
  constructor() {
    (this.hasPendingMicrotasks = !1),
      (this.hasPendingMacrotasks = !1),
      (this.isStable = !0),
      (this.onUnstable = new de()),
      (this.onMicrotaskEmpty = new de()),
      (this.onStable = new de()),
      (this.onError = new de());
  }
  run(t, n, r) {
    return t.apply(n, r);
  }
  runGuarded(t, n, r) {
    return t.apply(n, r);
  }
  runOutsideAngular(t) {
    return t();
  }
  runTask(t, n, r, o) {
    return t.apply(n, r);
  }
};
function sg(e) {
  return ll(e, "__ignore_ng_zone__");
}
function ag(e) {
  return ll(e, "__scheduler_tick__");
}
function ll(e, t) {
  return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0;
}
function ug(e = "zone.js", t) {
  return e === "noop" ? new Rr() : e === "zone.js" ? new z(t) : e;
}
var ut = class {
    constructor() {
      this._console = console;
    }
    handleError(t) {
      let n = this._findOriginalError(t);
      this._console.error("ERROR", t),
        n && this._console.error("ORIGINAL ERROR", n);
    }
    _findOriginalError(t) {
      let n = t && Yo(t);
      for (; n && Yo(n); ) n = Yo(n);
      return n || null;
    }
  },
  cg = new T("", {
    providedIn: "root",
    factory: () => {
      let e = w(z),
        t = w(ut);
      return (n) => e.runOutsideAngular(() => t.handleError(n));
    },
  });
function lg() {
  return Wt($(), E());
}
function Wt(e, t) {
  return new qt(se(e, t));
}
var qt = (() => {
  let t = class t {
    constructor(r) {
      this.nativeElement = r;
    }
  };
  t.__NG_ELEMENT_ID__ = lg;
  let e = t;
  return e;
})();
function dg(e) {
  return e instanceof qt ? e.nativeElement : e;
}
function fg() {
  return this._results[Symbol.iterator]();
}
var wi = class e {
  get changes() {
    return (this._changes ??= new de());
  }
  constructor(t = !1) {
    (this._emitDistinctChangesOnly = t),
      (this.dirty = !0),
      (this._onDirty = void 0),
      (this._results = []),
      (this._changesDetected = !1),
      (this._changes = void 0),
      (this.length = 0),
      (this.first = void 0),
      (this.last = void 0);
    let n = e.prototype;
    n[Symbol.iterator] || (n[Symbol.iterator] = fg);
  }
  get(t) {
    return this._results[t];
  }
  map(t) {
    return this._results.map(t);
  }
  filter(t) {
    return this._results.filter(t);
  }
  find(t) {
    return this._results.find(t);
  }
  reduce(t, n) {
    return this._results.reduce(t, n);
  }
  forEach(t) {
    this._results.forEach(t);
  }
  some(t) {
    return this._results.some(t);
  }
  toArray() {
    return this._results.slice();
  }
  toString() {
    return this._results.toString();
  }
  reset(t, n) {
    this.dirty = !1;
    let r = Rh(t);
    (this._changesDetected = !Fh(this._results, r, n)) &&
      ((this._results = r),
      (this.length = r.length),
      (this.last = r[this.length - 1]),
      (this.first = r[0]));
  }
  notifyOnChanges() {
    this._changes !== void 0 &&
      (this._changesDetected || !this._emitDistinctChangesOnly) &&
      this._changes.emit(this);
  }
  onDirty(t) {
    this._onDirty = t;
  }
  setDirty() {
    (this.dirty = !0), this._onDirty?.();
  }
  destroy() {
    this._changes !== void 0 &&
      (this._changes.complete(), this._changes.unsubscribe());
  }
};
function dl(e) {
  return (e.flags & 128) === 128;
}
var fl = new Map(),
  hg = 0;
function pg() {
  return hg++;
}
function gg(e) {
  fl.set(e[to], e);
}
function Ci(e) {
  fl.delete(e[to]);
}
var xu = "__ngContext__";
function $e(e, t) {
  ke(t) ? ((e[xu] = t[to]), gg(t)) : (e[xu] = t);
}
function hl(e) {
  return gl(e[gn]);
}
function pl(e) {
  return gl(e[fe]);
}
function gl(e) {
  for (; e !== null && !Ne(e); ) e = e[fe];
  return e;
}
var bi;
function p0(e) {
  bi = e;
}
function ml() {
  if (bi !== void 0) return bi;
  if (typeof document < "u") return document;
  throw new x(210, !1);
}
var g0 = new T("", { providedIn: "root", factory: () => mg }),
  mg = "ng",
  yg = new T(""),
  ks = new T("", { providedIn: "platform", factory: () => "unknown" });
var m0 = new T(""),
  y0 = new T("", {
    providedIn: "root",
    factory: () =>
      ml().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") ||
      null,
  });
var Dg = "h",
  vg = "b";
var Ig = () => null;
function Ls(e, t, n = !1) {
  return Ig(e, t, n);
}
var yl = !1,
  Eg = new T("", { providedIn: "root", factory: () => yl });
var ur;
function wg() {
  if (ur === void 0 && ((ur = null), ln.trustedTypes))
    try {
      ur = ln.trustedTypes.createPolicy("angular", {
        createHTML: (e) => e,
        createScript: (e) => e,
        createScriptURL: (e) => e,
      });
    } catch {}
  return ur;
}
function lo(e) {
  return wg()?.createHTML(e) || e;
}
var cr;
function Dl() {
  if (cr === void 0 && ((cr = null), ln.trustedTypes))
    try {
      cr = ln.trustedTypes.createPolicy("angular#unsafe-bypass", {
        createHTML: (e) => e,
        createScript: (e) => e,
        createScriptURL: (e) => e,
      });
    } catch {}
  return cr;
}
function Su(e) {
  return Dl()?.createHTML(e) || e;
}
function Tu(e) {
  return Dl()?.createScriptURL(e) || e;
}
var Te = class {
    constructor(t) {
      this.changingThisBreaksApplicationSecurity = t;
    }
    toString() {
      return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Ju})`;
    }
  },
  _i = class extends Te {
    getTypeName() {
      return "HTML";
    }
  },
  Mi = class extends Te {
    getTypeName() {
      return "Style";
    }
  },
  xi = class extends Te {
    getTypeName() {
      return "Script";
    }
  },
  Si = class extends Te {
    getTypeName() {
      return "URL";
    }
  },
  Ti = class extends Te {
    getTypeName() {
      return "ResourceURL";
    }
  };
function ht(e) {
  return e instanceof Te ? e.changingThisBreaksApplicationSecurity : e;
}
function js(e, t) {
  let n = Cg(e);
  if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL") return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${Ju})`);
  }
  return n === t;
}
function Cg(e) {
  return (e instanceof Te && e.getTypeName()) || null;
}
function D0(e) {
  return new _i(e);
}
function v0(e) {
  return new Mi(e);
}
function I0(e) {
  return new xi(e);
}
function E0(e) {
  return new Si(e);
}
function w0(e) {
  return new Ti(e);
}
function bg(e) {
  let t = new Ai(e);
  return _g() ? new Ni(t) : t;
}
var Ni = class {
    constructor(t) {
      this.inertDocumentHelper = t;
    }
    getInertBodyElement(t) {
      t = "<body><remove></remove>" + t;
      try {
        let n = new window.DOMParser().parseFromString(lo(t), "text/html").body;
        return n === null
          ? this.inertDocumentHelper.getInertBodyElement(t)
          : (n.firstChild?.remove(), n);
      } catch {
        return null;
      }
    }
  },
  Ai = class {
    constructor(t) {
      (this.defaultDoc = t),
        (this.inertDocument =
          this.defaultDoc.implementation.createHTMLDocument(
            "sanitization-inert",
          ));
    }
    getInertBodyElement(t) {
      let n = this.inertDocument.createElement("template");
      return (n.innerHTML = lo(t)), n;
    }
  };
function _g() {
  try {
    return !!new window.DOMParser().parseFromString(lo(""), "text/html");
  } catch {
    return !1;
  }
}
var Mg = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function vl(e) {
  return (e = String(e)), e.match(Mg) ? e : "unsafe:" + e;
}
function Ae(e) {
  let t = {};
  for (let n of e.split(",")) t[n] = !0;
  return t;
}
function Cn(...e) {
  let t = {};
  for (let n of e) for (let r in n) n.hasOwnProperty(r) && (t[r] = !0);
  return t;
}
var Il = Ae("area,br,col,hr,img,wbr"),
  El = Ae("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
  wl = Ae("rp,rt"),
  xg = Cn(wl, El),
  Sg = Cn(
    El,
    Ae(
      "address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul",
    ),
  ),
  Tg = Cn(
    wl,
    Ae(
      "a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video",
    ),
  ),
  Nu = Cn(Il, Sg, Tg, xg),
  Cl = Ae("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
  Ng = Ae(
    "abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width",
  ),
  Ag = Ae(
    "aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext",
  ),
  Og = Cn(Cl, Ng, Ag),
  Fg = Ae("script,style,template"),
  Oi = class {
    constructor() {
      (this.sanitizedSomething = !1), (this.buf = []);
    }
    sanitizeChildren(t) {
      let n = t.firstChild,
        r = !0,
        o = [];
      for (; n; ) {
        if (
          (n.nodeType === Node.ELEMENT_NODE
            ? (r = this.startElement(n))
            : n.nodeType === Node.TEXT_NODE
              ? this.chars(n.nodeValue)
              : (this.sanitizedSomething = !0),
          r && n.firstChild)
        ) {
          o.push(n), (n = kg(n));
          continue;
        }
        for (; n; ) {
          n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
          let i = Pg(n);
          if (i) {
            n = i;
            break;
          }
          n = o.pop();
        }
      }
      return this.buf.join("");
    }
    startElement(t) {
      let n = Au(t).toLowerCase();
      if (!Nu.hasOwnProperty(n))
        return (this.sanitizedSomething = !0), !Fg.hasOwnProperty(n);
      this.buf.push("<"), this.buf.push(n);
      let r = t.attributes;
      for (let o = 0; o < r.length; o++) {
        let i = r.item(o),
          s = i.name,
          a = s.toLowerCase();
        if (!Og.hasOwnProperty(a)) {
          this.sanitizedSomething = !0;
          continue;
        }
        let u = i.value;
        Cl[a] && (u = vl(u)), this.buf.push(" ", s, '="', Ou(u), '"');
      }
      return this.buf.push(">"), !0;
    }
    endElement(t) {
      let n = Au(t).toLowerCase();
      Nu.hasOwnProperty(n) &&
        !Il.hasOwnProperty(n) &&
        (this.buf.push("</"), this.buf.push(n), this.buf.push(">"));
    }
    chars(t) {
      this.buf.push(Ou(t));
    }
  };
function Rg(e, t) {
  return (
    (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !==
    Node.DOCUMENT_POSITION_CONTAINED_BY
  );
}
function Pg(e) {
  let t = e.nextSibling;
  if (t && e !== t.previousSibling) throw bl(t);
  return t;
}
function kg(e) {
  let t = e.firstChild;
  if (t && Rg(e, t)) throw bl(t);
  return t;
}
function Au(e) {
  let t = e.nodeName;
  return typeof t == "string" ? t : "FORM";
}
function bl(e) {
  return new Error(
    `Failed to sanitize html because the element is clobbered: ${e.outerHTML}`,
  );
}
var Lg = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
  jg = /([^\#-~ |!])/g;
function Ou(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(Lg, function (t) {
      let n = t.charCodeAt(0),
        r = t.charCodeAt(1);
      return "&#" + ((n - 55296) * 1024 + (r - 56320) + 65536) + ";";
    })
    .replace(jg, function (t) {
      return "&#" + t.charCodeAt(0) + ";";
    })
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
var lr;
function Vg(e, t) {
  let n = null;
  try {
    lr = lr || bg(e);
    let r = t ? String(t) : "";
    n = lr.getInertBodyElement(r);
    let o = 5,
      i = r;
    do {
      if (o === 0)
        throw new Error(
          "Failed to sanitize html because the input is unstable",
        );
      o--, (r = i), (i = n.innerHTML), (n = lr.getInertBodyElement(r));
    } while (r !== i);
    let a = new Oi().sanitizeChildren(Fu(n) || n);
    return lo(a);
  } finally {
    if (n) {
      let r = Fu(n) || n;
      for (; r.firstChild; ) r.firstChild.remove();
    }
  }
}
function Fu(e) {
  return "content" in e && Bg(e) ? e.content : null;
}
function Bg(e) {
  return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE";
}
var fo = (function (e) {
  return (
    (e[(e.NONE = 0)] = "NONE"),
    (e[(e.HTML = 1)] = "HTML"),
    (e[(e.STYLE = 2)] = "STYLE"),
    (e[(e.SCRIPT = 3)] = "SCRIPT"),
    (e[(e.URL = 4)] = "URL"),
    (e[(e.RESOURCE_URL = 5)] = "RESOURCE_URL"),
    e
  );
})(fo || {});
function C0(e) {
  let t = Vs();
  return t
    ? Su(t.sanitize(fo.HTML, e) || "")
    : js(e, "HTML")
      ? Su(ht(e))
      : Vg(ml(), vn(e));
}
function $g(e) {
  let t = Vs();
  return t ? t.sanitize(fo.URL, e) || "" : js(e, "URL") ? ht(e) : vl(vn(e));
}
function Hg(e) {
  let t = Vs();
  if (t) return Tu(t.sanitize(fo.RESOURCE_URL, e) || "");
  if (js(e, "ResourceURL")) return Tu(ht(e));
  throw new x(904, !1);
}
function Ug(e, t) {
  return (t === "src" &&
    (e === "embed" ||
      e === "frame" ||
      e === "iframe" ||
      e === "media" ||
      e === "script")) ||
    (t === "href" && (e === "base" || e === "link"))
    ? Hg
    : $g;
}
function b0(e, t, n) {
  return Ug(t, n)(e);
}
function Vs() {
  let e = E();
  return e && e[Ie].sanitizer;
}
var zg = /^>|^->|<!--|-->|--!>|<!-$/g,
  Gg = /(<|>)/g,
  Wg = "\u200B$1\u200B";
function qg(e) {
  return e.replace(zg, (t) => t.replace(Gg, Wg));
}
function _0(e) {
  return e.ownerDocument.defaultView;
}
function _l(e) {
  return e instanceof Function ? e() : e;
}
function Ml(e) {
  return (e ?? w(he)).get(ks) === "browser";
}
var Pr = (function (e) {
    return (
      (e[(e.Important = 1)] = "Important"),
      (e[(e.DashCase = 2)] = "DashCase"),
      e
    );
  })(Pr || {}),
  Zg;
function Bs(e, t) {
  return Zg(e, t);
}
function xt(e, t, n, r, o) {
  if (r != null) {
    let i,
      s = !1;
    Ne(r) ? (i = r) : ke(r) && ((s = !0), (r = r[we]));
    let a = Ee(r);
    e === 0 && n !== null
      ? o == null
        ? Al(t, n, a)
        : kr(t, n, a, o || null, !0)
      : e === 1 && n !== null
        ? kr(t, n, a, o || null, !0)
        : e === 2
          ? um(t, a, s)
          : e === 3 && t.destroyNode(a),
      i != null && lm(t, e, i, n, o);
  }
}
function Yg(e, t) {
  return e.createText(t);
}
function Qg(e, t, n) {
  e.setValue(t, n);
}
function Kg(e, t) {
  return e.createComment(qg(t));
}
function xl(e, t, n) {
  return e.createElement(t, n);
}
function Jg(e, t) {
  Sl(e, t), (t[we] = null), (t[J] = null);
}
function Xg(e, t, n, r, o, i) {
  (r[we] = o), (r[J] = t), go(e, r, n, 1, o, i);
}
function Sl(e, t) {
  t[Ie].changeDetectionScheduler?.notify(9), go(e, t, t[P], 2, null, null);
}
function em(e) {
  let t = e[gn];
  if (!t) return Qo(e[D], e);
  for (; t; ) {
    let n = null;
    if (ke(t)) n = t[gn];
    else {
      let r = t[U];
      r && (n = r);
    }
    if (!n) {
      for (; t && !t[fe] && t !== e; ) ke(t) && Qo(t[D], t), (t = t[G]);
      t === null && (t = e), ke(t) && Qo(t[D], t), (n = t && t[fe]);
    }
    t = n;
  }
}
function tm(e, t, n, r) {
  let o = U + r,
    i = n.length;
  r > 0 && (n[o - 1][fe] = t),
    r < i - U ? ((t[fe] = n[o]), cc(n, U + r, t)) : (n.push(t), (t[fe] = null)),
    (t[G] = n);
  let s = t[nt];
  s !== null && n !== s && Tl(s, t);
  let a = t[xe];
  a !== null && a.insertView(e), hi(t), (t[y] |= 128);
}
function Tl(e, t) {
  let n = e[kt],
    r = t[G];
  if (ke(r)) e[y] |= Sr.HasTransplantedViews;
  else {
    let o = r[G][te];
    t[te] !== o && (e[y] |= Sr.HasTransplantedViews);
  }
  n === null ? (e[kt] = [t]) : n.push(t);
}
function $s(e, t) {
  let n = e[kt],
    r = n.indexOf(t);
  n.splice(r, 1);
}
function mn(e, t) {
  if (e.length <= U) return;
  let n = U + t,
    r = e[n];
  if (r) {
    let o = r[nt];
    o !== null && o !== e && $s(o, r), t > 0 && (e[n - 1][fe] = r[fe]);
    let i = Cr(e, U + t);
    Jg(r[D], r);
    let s = i[xe];
    s !== null && s.detachView(i[D]),
      (r[G] = null),
      (r[fe] = null),
      (r[y] &= -129);
  }
  return r;
}
function ho(e, t) {
  if (!(t[y] & 256)) {
    let n = t[P];
    n.destroyNode && go(e, t, n, 3, null, null), em(t);
  }
}
function Qo(e, t) {
  if (t[y] & 256) return;
  let n = b(null);
  try {
    (t[y] &= -129),
      (t[y] |= 256),
      t[oe] && On(t[oe]),
      rm(e, t),
      nm(e, t),
      t[D].type === 1 && t[P].destroy();
    let r = t[nt];
    if (r !== null && Ne(t[G])) {
      r !== t[G] && $s(r, t);
      let o = t[xe];
      o !== null && o.detachView(e);
    }
    Ci(t);
  } finally {
    b(n);
  }
}
function nm(e, t) {
  let n = e.cleanup,
    r = t[Mr];
  if (n !== null)
    for (let i = 0; i < n.length - 1; i += 2)
      if (typeof n[i] == "string") {
        let s = n[i + 3];
        s >= 0 ? r[s]() : r[-s].unsubscribe(), (i += 2);
      } else {
        let s = r[n[i + 1]];
        n[i].call(s);
      }
  r !== null && (t[Mr] = null);
  let o = t[Pe];
  if (o !== null) {
    t[Pe] = null;
    for (let i = 0; i < o.length; i++) {
      let s = o[i];
      s();
    }
  }
}
function rm(e, t) {
  let n;
  if (e != null && (n = e.destroyHooks) != null)
    for (let r = 0; r < n.length; r += 2) {
      let o = t[n[r]];
      if (!(o instanceof st)) {
        let i = n[r + 1];
        if (Array.isArray(i))
          for (let s = 0; s < i.length; s += 2) {
            let a = o[i[s]],
              u = i[s + 1];
            De(4, a, u);
            try {
              u.call(a);
            } finally {
              De(5, a, u);
            }
          }
        else {
          De(4, o, i);
          try {
            i.call(o);
          } finally {
            De(5, o, i);
          }
        }
      }
    }
}
function Nl(e, t, n) {
  return om(e, t.parent, n);
}
function om(e, t, n) {
  let r = t;
  for (; r !== null && r.type & 168; ) (t = r), (r = t.parent);
  if (r === null) return n[we];
  {
    let { componentOffset: o } = r;
    if (o > -1) {
      let { encapsulation: i } = e.data[r.directiveStart + o];
      if (i === fn.None || i === fn.Emulated) return null;
    }
    return se(r, n);
  }
}
function kr(e, t, n, r, o) {
  e.insertBefore(t, n, r, o);
}
function Al(e, t, n) {
  e.appendChild(t, n);
}
function Ru(e, t, n, r, o) {
  r !== null ? kr(e, t, n, r, o) : Al(e, t, n);
}
function Ol(e, t) {
  return e.parentNode(t);
}
function im(e, t) {
  return e.nextSibling(t);
}
function Fl(e, t, n) {
  return am(e, t, n);
}
function sm(e, t, n) {
  return e.type & 40 ? se(e, n) : null;
}
var am = sm,
  Pu;
function po(e, t, n, r) {
  let o = Nl(e, r, t),
    i = t[P],
    s = r.parent || t[J],
    a = Fl(s, r, t);
  if (o != null)
    if (Array.isArray(n))
      for (let u = 0; u < n.length; u++) Ru(i, o, n[u], a, !1);
    else Ru(i, o, n, a, !1);
  Pu !== void 0 && Pu(i, r, t, n, o);
}
function an(e, t) {
  if (t !== null) {
    let n = t.type;
    if (n & 3) return se(t, e);
    if (n & 4) return Fi(-1, e[t.index]);
    if (n & 8) {
      let r = t.child;
      if (r !== null) return an(e, r);
      {
        let o = e[t.index];
        return Ne(o) ? Fi(-1, o) : Ee(o);
      }
    } else {
      if (n & 128) return an(e, t.next);
      if (n & 32) return Bs(t, e)() || Ee(e[t.index]);
      {
        let r = Rl(e, t);
        if (r !== null) {
          if (Array.isArray(r)) return r[0];
          let o = ot(e[te]);
          return an(o, r);
        } else return an(e, t.next);
      }
    }
  }
  return null;
}
function Rl(e, t) {
  if (t !== null) {
    let r = e[te][J],
      o = t.projection;
    return r.projection[o];
  }
  return null;
}
function Fi(e, t) {
  let n = U + e + 1;
  if (n < t.length) {
    let r = t[n],
      o = r[D].firstChild;
    if (o !== null) return an(r, o);
  }
  return t[rt];
}
function um(e, t, n) {
  e.removeChild(null, t, n);
}
function Hs(e, t, n, r, o, i, s) {
  for (; n != null; ) {
    if (n.type === 128) {
      n = n.next;
      continue;
    }
    let a = r[n.index],
      u = n.type;
    if (
      (s && t === 0 && (a && $e(Ee(a), r), (n.flags |= 2)),
      (n.flags & 32) !== 32)
    )
      if (u & 8) Hs(e, t, n.child, r, o, i, !1), xt(t, e, o, a, i);
      else if (u & 32) {
        let c = Bs(n, r),
          l;
        for (; (l = c()); ) xt(t, e, o, l, i);
        xt(t, e, o, a, i);
      } else u & 16 ? Pl(e, t, r, n, o, i) : xt(t, e, o, a, i);
    n = s ? n.projectionNext : n.next;
  }
}
function go(e, t, n, r, o, i) {
  Hs(n, r, e.firstChild, t, o, i, !1);
}
function cm(e, t, n) {
  let r = t[P],
    o = Nl(e, n, t),
    i = n.parent || t[J],
    s = Fl(i, n, t);
  Pl(r, 0, t, n, o, s);
}
function Pl(e, t, n, r, o, i) {
  let s = n[te],
    u = s[J].projection[r.projection];
  if (Array.isArray(u))
    for (let c = 0; c < u.length; c++) {
      let l = u[c];
      xt(t, e, o, l, i);
    }
  else {
    let c = u,
      l = s[G];
    dl(r) && (c.flags |= 128), Hs(e, t, c, l, o, i, !0);
  }
}
function lm(e, t, n, r, o) {
  let i = n[rt],
    s = Ee(n);
  i !== s && xt(t, e, r, i, o);
  for (let a = U; a < n.length; a++) {
    let u = n[a];
    go(u[D], u, e, t, r, i);
  }
}
function dm(e, t, n, r, o) {
  if (t) o ? e.addClass(n, r) : e.removeClass(n, r);
  else {
    let i = r.indexOf("-") === -1 ? void 0 : Pr.DashCase;
    o == null
      ? e.removeStyle(n, r, i)
      : (typeof o == "string" &&
          o.endsWith("!important") &&
          ((o = o.slice(0, -10)), (i |= Pr.Important)),
        e.setStyle(n, r, o, i));
  }
}
function fm(e, t, n) {
  e.setAttribute(t, "style", n);
}
function kl(e, t, n) {
  n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n);
}
function Ll(e, t, n) {
  let { mergedAttrs: r, classes: o, styles: i } = n;
  r !== null && ai(e, t, r),
    o !== null && kl(e, t, o),
    i !== null && fm(e, t, i);
}
var pe = {};
function M0(e = 1) {
  jl(k(), E(), ze() + e, !1);
}
function jl(e, t, n, r) {
  if (!r)
    if ((t[y] & 3) === 3) {
      let i = e.preOrderCheckHooks;
      i !== null && yr(t, i, n);
    } else {
      let i = e.preOrderHooks;
      i !== null && Dr(t, i, 0, n);
    }
  it(n);
}
function Ge(e, t = M.Default) {
  let n = E();
  if (n === null) return L(e, t);
  let r = $();
  return ol(r, n, q(e), t);
}
function x0() {
  let e = "invalid";
  throw new Error(e);
}
function Vl(e, t, n, r, o, i) {
  let s = b(null);
  try {
    let a = null;
    o & Le.SignalBased && (a = t[r][ge]),
      a !== null && a.transformFn !== void 0 && (i = a.transformFn(i)),
      o & Le.HasDecoratorInputTransform &&
        (i = e.inputTransforms[r].call(t, i)),
      e.setInput !== null ? e.setInput(t, a, i, n, r) : Sc(t, a, r, i);
  } finally {
    b(s);
  }
}
function hm(e, t) {
  let n = e.hostBindingOpCodes;
  if (n !== null)
    try {
      for (let r = 0; r < n.length; r++) {
        let o = n[r];
        if (o < 0) it(~o);
        else {
          let i = o,
            s = n[++r],
            a = n[++r];
          Fp(s, i);
          let u = t[i];
          a(2, u);
        }
      }
    } finally {
      it(-1);
    }
}
function mo(e, t, n, r, o, i, s, a, u, c, l) {
  let d = t.blueprint.slice();
  return (
    (d[we] = o),
    (d[y] = r | 4 | 128 | 8 | 64),
    (c !== null || (e && e[y] & 2048)) && (d[y] |= 2048),
    Rc(d),
    (d[G] = d[Gt] = e),
    (d[H] = n),
    (d[Ie] = s || (e && e[Ie])),
    (d[P] = a || (e && e[P])),
    (d[Pt] = u || (e && e[Pt]) || null),
    (d[J] = i),
    (d[to] = pg()),
    (d[Rt] = l),
    (d[xc] = c),
    (d[te] = t.type == 2 ? e[te] : d),
    d
  );
}
function Zt(e, t, n, r, o) {
  let i = e.data[t];
  if (i === null) (i = pm(e, t, n, r, o)), Op() && (i.flags |= 32);
  else if (i.type & 64) {
    (i.type = n), (i.value = r), (i.attrs = o);
    let s = Tp();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
  }
  return dt(i, !0), i;
}
function pm(e, t, n, r, o) {
  let i = Bc(),
    s = xs(),
    a = s ? i : i && i.parent,
    u = (e.data[t] = Im(e, a, n, t, r, o));
  return (
    e.firstChild === null && (e.firstChild = u),
    i !== null &&
      (s
        ? i.child == null && u.parent !== null && (i.child = u)
        : i.next === null && ((i.next = u), (u.prev = i))),
    u
  );
}
function Bl(e, t, n, r) {
  if (n === 0) return -1;
  let o = t.length;
  for (let i = 0; i < n; i++) t.push(r), e.blueprint.push(r), e.data.push(null);
  return o;
}
function $l(e, t, n, r, o) {
  let i = ze(),
    s = r & 2;
  try {
    it(-1), s && t.length > Z && jl(e, t, Z, !1), De(s ? 2 : 0, o), n(r, o);
  } finally {
    it(i), De(s ? 3 : 1, o);
  }
}
function Us(e, t, n) {
  if (Cs(t)) {
    let r = b(null);
    try {
      let o = t.directiveStart,
        i = t.directiveEnd;
      for (let s = o; s < i; s++) {
        let a = e.data[s];
        if (a.contentQueries) {
          let u = n[s];
          a.contentQueries(1, u, s);
        }
      }
    } finally {
      b(r);
    }
  }
}
function zs(e, t, n) {
  jc() && (Mm(e, t, n, se(n, t)), (n.flags & 64) === 64 && zl(e, t, n));
}
function Gs(e, t, n = se) {
  let r = t.localNames;
  if (r !== null) {
    let o = t.index + 1;
    for (let i = 0; i < r.length; i += 2) {
      let s = r[i + 1],
        a = s === -1 ? n(t, e) : e[s];
      e[o++] = a;
    }
  }
}
function Hl(e) {
  let t = e.tView;
  return t === null || t.incompleteFirstPass
    ? (e.tView = Ws(
        1,
        null,
        e.template,
        e.decls,
        e.vars,
        e.directiveDefs,
        e.pipeDefs,
        e.viewQuery,
        e.schemas,
        e.consts,
        e.id,
      ))
    : t;
}
function Ws(e, t, n, r, o, i, s, a, u, c, l) {
  let d = Z + r,
    h = d + o,
    f = gm(d, h),
    p = typeof c == "function" ? c() : c;
  return (f[D] = {
    type: e,
    blueprint: f,
    template: n,
    queries: null,
    viewQuery: a,
    declTNode: t,
    data: f.slice().fill(null, d),
    bindingStartIndex: d,
    expandoStartIndex: h,
    hostBindingOpCodes: null,
    firstCreatePass: !0,
    firstUpdatePass: !0,
    staticViewQueries: !1,
    staticContentQueries: !1,
    preOrderHooks: null,
    preOrderCheckHooks: null,
    contentHooks: null,
    contentCheckHooks: null,
    viewHooks: null,
    viewCheckHooks: null,
    destroyHooks: null,
    cleanup: null,
    contentQueries: null,
    components: null,
    directiveRegistry: typeof i == "function" ? i() : i,
    pipeRegistry: typeof s == "function" ? s() : s,
    firstChild: null,
    schemas: u,
    consts: p,
    incompleteFirstPass: !1,
    ssrId: l,
  });
}
function gm(e, t) {
  let n = [];
  for (let r = 0; r < t; r++) n.push(r < e ? null : pe);
  return n;
}
function mm(e, t, n, r) {
  let i = r.get(Eg, yl) || n === fn.ShadowDom,
    s = e.selectRootElement(t, i);
  return ym(s), s;
}
function ym(e) {
  Dm(e);
}
var Dm = () => null;
function vm(e, t, n, r) {
  let o = ql(t);
  o.push(n), e.firstCreatePass && Zl(e).push(r, o.length - 1);
}
function Im(e, t, n, r, o, i) {
  let s = t ? t.injectorIndex : -1,
    a = 0;
  return (
    Vc() && (a |= 128),
    {
      type: n,
      index: r,
      insertBeforeIndex: null,
      injectorIndex: s,
      directiveStart: -1,
      directiveEnd: -1,
      directiveStylingLast: -1,
      componentOffset: -1,
      propertyBindings: null,
      flags: a,
      providerIndexes: 0,
      value: o,
      attrs: i,
      mergedAttrs: null,
      localNames: null,
      initialInputs: void 0,
      inputs: null,
      outputs: null,
      tView: null,
      next: null,
      prev: null,
      projectionNext: null,
      child: null,
      parent: t,
      projection: null,
      styles: null,
      stylesWithoutHost: null,
      residualStyles: void 0,
      classes: null,
      classesWithoutHost: null,
      residualClasses: void 0,
      classBindings: 0,
      styleBindings: 0,
    }
  );
}
function ku(e, t, n, r, o) {
  for (let i in t) {
    if (!t.hasOwnProperty(i)) continue;
    let s = t[i];
    if (s === void 0) continue;
    r ??= {};
    let a,
      u = Le.None;
    Array.isArray(s) ? ((a = s[0]), (u = s[1])) : (a = s);
    let c = i;
    if (o !== null) {
      if (!o.hasOwnProperty(i)) continue;
      c = o[i];
    }
    e === 0 ? Lu(r, n, c, a, u) : Lu(r, n, c, a);
  }
  return r;
}
function Lu(e, t, n, r, o) {
  let i;
  e.hasOwnProperty(n) ? (i = e[n]).push(t, r) : (i = e[n] = [t, r]),
    o !== void 0 && i.push(o);
}
function Em(e, t, n) {
  let r = t.directiveStart,
    o = t.directiveEnd,
    i = e.data,
    s = t.attrs,
    a = [],
    u = null,
    c = null;
  for (let l = r; l < o; l++) {
    let d = i[l],
      h = n ? n.get(d) : null,
      f = h ? h.inputs : null,
      p = h ? h.outputs : null;
    (u = ku(0, d.inputs, l, u, f)), (c = ku(1, d.outputs, l, c, p));
    let m = u !== null && s !== null && !ms(t) ? Lm(u, l, s) : null;
    a.push(m);
  }
  u !== null &&
    (u.hasOwnProperty("class") && (t.flags |= 8),
    u.hasOwnProperty("style") && (t.flags |= 16)),
    (t.initialInputs = a),
    (t.inputs = u),
    (t.outputs = c);
}
function wm(e) {
  return e === "class"
    ? "className"
    : e === "for"
      ? "htmlFor"
      : e === "formaction"
        ? "formAction"
        : e === "innerHtml"
          ? "innerHTML"
          : e === "readonly"
            ? "readOnly"
            : e === "tabindex"
              ? "tabIndex"
              : e;
}
function yo(e, t, n, r, o, i, s, a) {
  let u = se(t, n),
    c = t.inputs,
    l;
  !a && c != null && (l = c[r])
    ? (Zs(e, n, l, r, o), no(t) && Cm(n, t.index))
    : t.type & 3
      ? ((r = wm(r)),
        (o = s != null ? s(o, t.value || "", r) : o),
        i.setProperty(u, r, o))
      : t.type & 12;
}
function Cm(e, t) {
  let n = Ue(t, e);
  n[y] & 16 || (n[y] |= 64);
}
function qs(e, t, n, r) {
  if (jc()) {
    let o = r === null ? null : { "": -1 },
      i = Sm(e, n),
      s,
      a;
    i === null ? (s = a = null) : ([s, a] = i),
      s !== null && Ul(e, t, n, s, o, a),
      o && Tm(n, r, o);
  }
  n.mergedAttrs = hn(n.mergedAttrs, n.attrs);
}
function Ul(e, t, n, r, o, i) {
  for (let c = 0; c < r.length; c++) yi(Ar(n, t), e, r[c].type);
  Am(n, e.data.length, r.length);
  for (let c = 0; c < r.length; c++) {
    let l = r[c];
    l.providersResolver && l.providersResolver(l);
  }
  let s = !1,
    a = !1,
    u = Bl(e, t, r.length, null);
  for (let c = 0; c < r.length; c++) {
    let l = r[c];
    (n.mergedAttrs = hn(n.mergedAttrs, l.hostAttrs)),
      Om(e, n, t, u, l),
      Nm(u, l, o),
      l.contentQueries !== null && (n.flags |= 4),
      (l.hostBindings !== null || l.hostAttrs !== null || l.hostVars !== 0) &&
        (n.flags |= 64);
    let d = l.type.prototype;
    !s &&
      (d.ngOnChanges || d.ngOnInit || d.ngDoCheck) &&
      ((e.preOrderHooks ??= []).push(n.index), (s = !0)),
      !a &&
        (d.ngOnChanges || d.ngDoCheck) &&
        ((e.preOrderCheckHooks ??= []).push(n.index), (a = !0)),
      u++;
  }
  Em(e, n, i);
}
function bm(e, t, n, r, o) {
  let i = o.hostBindings;
  if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    _m(s) != a && s.push(a), s.push(n, r, i);
  }
}
function _m(e) {
  let t = e.length;
  for (; t > 0; ) {
    let n = e[--t];
    if (typeof n == "number" && n < 0) return n;
  }
  return 0;
}
function Mm(e, t, n, r) {
  let o = n.directiveStart,
    i = n.directiveEnd;
  no(n) && Fm(t, n, e.data[o + n.componentOffset]),
    e.firstCreatePass || Ar(n, t),
    $e(r, t);
  let s = n.initialInputs;
  for (let a = o; a < i; a++) {
    let u = e.data[a],
      c = at(t, e, a, n);
    if (($e(c, t), s !== null && km(t, a - o, c, u, n, s), Se(u))) {
      let l = Ue(n.index, t);
      l[H] = at(t, e, a, n);
    }
  }
}
function zl(e, t, n) {
  let r = n.directiveStart,
    o = n.directiveEnd,
    i = n.index,
    s = Rp();
  try {
    it(i);
    for (let a = r; a < o; a++) {
      let u = e.data[a],
        c = t[a];
      pi(a),
        (u.hostBindings !== null || u.hostVars !== 0 || u.hostAttrs !== null) &&
          xm(u, c);
    }
  } finally {
    it(-1), pi(s);
  }
}
function xm(e, t) {
  e.hostBindings !== null && e.hostBindings(1, t);
}
function Sm(e, t) {
  let n = e.directiveRegistry,
    r = null,
    o = null;
  if (n)
    for (let i = 0; i < n.length; i++) {
      let s = n[i];
      if (gc(t, s.selectors, !1))
        if ((r || (r = []), Se(s)))
          if (s.findHostDirectiveDefs !== null) {
            let a = [];
            (o = o || new Map()),
              s.findHostDirectiveDefs(s, a, o),
              r.unshift(...a, s);
            let u = a.length;
            Ri(e, t, u);
          } else r.unshift(s), Ri(e, t, 0);
        else
          (o = o || new Map()), s.findHostDirectiveDefs?.(s, r, o), r.push(s);
    }
  return r === null ? null : [r, o];
}
function Ri(e, t, n) {
  (t.componentOffset = n), (e.components ??= []).push(t.index);
}
function Tm(e, t, n) {
  if (t) {
    let r = (e.localNames = []);
    for (let o = 0; o < t.length; o += 2) {
      let i = n[t[o + 1]];
      if (i == null) throw new x(-301, !1);
      r.push(t[o], i);
    }
  }
}
function Nm(e, t, n) {
  if (n) {
    if (t.exportAs)
      for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
    Se(t) && (n[""] = e);
  }
}
function Am(e, t, n) {
  (e.flags |= 1),
    (e.directiveStart = t),
    (e.directiveEnd = t + n),
    (e.providerIndexes = t);
}
function Om(e, t, n, r, o) {
  e.data[r] = o;
  let i = o.factory || (o.factory = At(o.type, !0)),
    s = new st(i, Se(o), Ge);
  (e.blueprint[r] = s), (n[r] = s), bm(e, t, r, Bl(e, n, o.hostVars, pe), o);
}
function Fm(e, t, n) {
  let r = se(t, e),
    o = Hl(n),
    i = e[Ie].rendererFactory,
    s = 16;
  n.signals ? (s = 4096) : n.onPush && (s = 64);
  let a = Do(
    e,
    mo(e, o, null, s, r, t, null, i.createRenderer(r, n), null, null, null),
  );
  e[t.index] = a;
}
function Rm(e, t, n, r, o, i) {
  let s = se(e, t);
  Pm(t[P], s, i, e.value, n, r, o);
}
function Pm(e, t, n, r, o, i, s) {
  if (i == null) e.removeAttribute(t, o, n);
  else {
    let a = s == null ? vn(i) : s(i, r || "", o);
    e.setAttribute(t, o, a, n);
  }
}
function km(e, t, n, r, o, i) {
  let s = i[t];
  if (s !== null)
    for (let a = 0; a < s.length; ) {
      let u = s[a++],
        c = s[a++],
        l = s[a++],
        d = s[a++];
      Vl(r, n, u, c, l, d);
    }
}
function Lm(e, t, n) {
  let r = null,
    o = 0;
  for (; o < n.length; ) {
    let i = n[o];
    if (i === 0) {
      o += 4;
      continue;
    } else if (i === 5) {
      o += 2;
      continue;
    }
    if (typeof i == "number") break;
    if (e.hasOwnProperty(i)) {
      r === null && (r = []);
      let s = e[i];
      for (let a = 0; a < s.length; a += 3)
        if (s[a] === t) {
          r.push(i, s[a + 1], s[a + 2], n[o + 1]);
          break;
        }
    }
    o += 2;
  }
  return r;
}
function Gl(e, t, n, r) {
  return [e, !0, 0, t, null, r, null, n, null, null];
}
function Wl(e, t) {
  let n = e.contentQueries;
  if (n !== null) {
    let r = b(null);
    try {
      for (let o = 0; o < n.length; o += 2) {
        let i = n[o],
          s = n[o + 1];
        if (s !== -1) {
          let a = e.data[s];
          Ns(i), a.contentQueries(2, t[s], s);
        }
      }
    } finally {
      b(r);
    }
  }
}
function Do(e, t) {
  return e[gn] ? (e[mu][fe] = t) : (e[gn] = t), (e[mu] = t), t;
}
function Pi(e, t, n) {
  Ns(0);
  let r = b(null);
  try {
    t(e, n);
  } finally {
    b(r);
  }
}
function ql(e) {
  return (e[Mr] ??= []);
}
function Zl(e) {
  return (e.cleanup ??= []);
}
function Yl(e, t, n) {
  return (e === null || Se(e)) && (n = Dp(n[t.index])), n[P];
}
function Ql(e, t) {
  let n = e[Pt],
    r = n ? n.get(ut, null) : null;
  r && r.handleError(t);
}
function Zs(e, t, n, r, o) {
  for (let i = 0; i < n.length; ) {
    let s = n[i++],
      a = n[i++],
      u = n[i++],
      c = t[s],
      l = e.data[s];
    Vl(l, c, r, a, u, o);
  }
}
function jm(e, t, n) {
  let r = Fc(t, e);
  Qg(e[P], r, n);
}
function Vm(e, t) {
  let n = Ue(t, e),
    r = n[D];
  Bm(r, n);
  let o = n[we];
  o !== null && n[Rt] === null && (n[Rt] = Ls(o, n[Pt])), Ys(r, n, n[H]);
}
function Bm(e, t) {
  for (let n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n]);
}
function Ys(e, t, n) {
  As(t);
  try {
    let r = e.viewQuery;
    r !== null && Pi(1, r, n);
    let o = e.template;
    o !== null && $l(e, t, o, 1, n),
      e.firstCreatePass && (e.firstCreatePass = !1),
      t[xe]?.finishViewCreation(e),
      e.staticContentQueries && Wl(e, t),
      e.staticViewQueries && Pi(2, e.viewQuery, n);
    let i = e.components;
    i !== null && $m(t, i);
  } catch (r) {
    throw (
      (e.firstCreatePass &&
        ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
      r)
    );
  } finally {
    (t[y] &= -5), Os();
  }
}
function $m(e, t) {
  for (let n = 0; n < t.length; n++) Vm(e, t[n]);
}
function bn(e, t, n, r) {
  let o = b(null);
  try {
    let i = t.tView,
      a = e[y] & 4096 ? 4096 : 16,
      u = mo(
        e,
        i,
        n,
        a,
        null,
        t,
        null,
        null,
        r?.injector ?? null,
        r?.embeddedViewInjector ?? null,
        r?.dehydratedView ?? null,
      ),
      c = e[t.index];
    u[nt] = c;
    let l = e[xe];
    return l !== null && (u[xe] = l.createEmbeddedView(i)), Ys(i, u, n), u;
  } finally {
    b(o);
  }
}
function Kl(e, t) {
  let n = U + t;
  if (n < e.length) return e[n];
}
function Lt(e, t) {
  return !t || t.firstChild === null || dl(e);
}
function _n(e, t, n, r = !0) {
  let o = t[D];
  if ((tm(o, t, e, n), r)) {
    let s = Fi(n, e),
      a = t[P],
      u = Ol(a, e[rt]);
    u !== null && Xg(o, e[J], a, t, u, s);
  }
  let i = t[Rt];
  i !== null && i.firstChild !== null && (i.firstChild = null);
}
function Jl(e, t) {
  let n = mn(e, t);
  return n !== void 0 && ho(n[D], n), n;
}
function Lr(e, t, n, r, o = !1) {
  for (; n !== null; ) {
    if (n.type === 128) {
      n = o ? n.projectionNext : n.next;
      continue;
    }
    let i = t[n.index];
    i !== null && r.push(Ee(i)), Ne(i) && Hm(i, r);
    let s = n.type;
    if (s & 8) Lr(e, t, n.child, r);
    else if (s & 32) {
      let a = Bs(n, t),
        u;
      for (; (u = a()); ) r.push(u);
    } else if (s & 16) {
      let a = Rl(t, n);
      if (Array.isArray(a)) r.push(...a);
      else {
        let u = ot(t[te]);
        Lr(u[D], u, a, r, !0);
      }
    }
    n = o ? n.projectionNext : n.next;
  }
  return r;
}
function Hm(e, t) {
  for (let n = U; n < e.length; n++) {
    let r = e[n],
      o = r[D].firstChild;
    o !== null && Lr(r[D], r, o, t);
  }
  e[rt] !== e[we] && t.push(e[rt]);
}
var Xl = [];
function Um(e) {
  return e[oe] ?? zm(e);
}
function zm(e) {
  let t = Xl.pop() ?? Object.create(Wm);
  return (t.lView = e), t;
}
function Gm(e) {
  e.lView[oe] !== e && ((e.lView = null), Xl.push(e));
}
var Wm = ue(ee({}, yt), {
  consumerIsAlwaysLive: !0,
  consumerMarkedDirty: (e) => {
    io(e.lView);
  },
  consumerOnSignalRead() {
    this.lView[oe] = this;
  },
});
function qm(e) {
  let t = e[oe] ?? Object.create(Zm);
  return (t.lView = e), t;
}
var Zm = ue(ee({}, yt), {
  consumerIsAlwaysLive: !0,
  consumerMarkedDirty: (e) => {
    let t = ot(e.lView);
    for (; t && !ed(t[D]); ) t = ot(t);
    t && Pc(t);
  },
  consumerOnSignalRead() {
    this.lView[oe] = this;
  },
});
function ed(e) {
  return e.type !== 2;
}
var Ym = 100;
function td(e, t = !0, n = 0) {
  let r = e[Ie],
    o = r.rendererFactory,
    i = !1;
  i || o.begin?.();
  try {
    Qm(e, n);
  } catch (s) {
    throw (t && Ql(e, s), s);
  } finally {
    i || (o.end?.(), r.inlineEffectRunner?.flush());
  }
}
function Qm(e, t) {
  let n = $c();
  try {
    Du(!0), ki(e, t);
    let r = 0;
    for (; oo(e); ) {
      if (r === Ym) throw new x(103, !1);
      r++, ki(e, 1);
    }
  } finally {
    Du(n);
  }
}
function Km(e, t, n, r) {
  let o = t[y];
  if ((o & 256) === 256) return;
  let i = !1,
    s = !1;
  !i && t[Ie].inlineEffectRunner?.flush(), As(t);
  let a = !0,
    u = null,
    c = null;
  i ||
    (ed(e)
      ? ((c = Um(t)), (u = Jt(c)))
      : ma() === null
        ? ((a = !1), (c = qm(t)), (u = Jt(c)))
        : t[oe] && (On(t[oe]), (t[oe] = null)));
  try {
    Rc(t), Ap(e.bindingStartIndex), n !== null && $l(e, t, n, 2, r);
    let l = (o & 3) === 3;
    if (!i)
      if (l) {
        let f = e.preOrderCheckHooks;
        f !== null && yr(t, f, null);
      } else {
        let f = e.preOrderHooks;
        f !== null && Dr(t, f, 0, null), Wo(t, 0);
      }
    if ((s || Jm(t), nd(t, 0), e.contentQueries !== null && Wl(e, t), !i))
      if (l) {
        let f = e.contentCheckHooks;
        f !== null && yr(t, f);
      } else {
        let f = e.contentHooks;
        f !== null && Dr(t, f, 1), Wo(t, 1);
      }
    hm(e, t);
    let d = e.components;
    d !== null && od(t, d, 0);
    let h = e.viewQuery;
    if ((h !== null && Pi(2, h, r), !i))
      if (l) {
        let f = e.viewCheckHooks;
        f !== null && yr(t, f);
      } else {
        let f = e.viewHooks;
        f !== null && Dr(t, f, 2), Wo(t, 2);
      }
    if ((e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[mr])) {
      for (let f of t[mr]) f();
      t[mr] = null;
    }
    i || (t[y] &= -73);
  } catch (l) {
    throw (i || io(t), l);
  } finally {
    c !== null && (Nn(c, u), a && Gm(c)), Os();
  }
}
function nd(e, t) {
  for (let n = hl(e); n !== null; n = pl(n))
    for (let r = U; r < n.length; r++) {
      let o = n[r];
      rd(o, t);
    }
}
function Jm(e) {
  for (let t = hl(e); t !== null; t = pl(t)) {
    if (!(t[y] & Sr.HasTransplantedViews)) continue;
    let n = t[kt];
    for (let r = 0; r < n.length; r++) {
      let o = n[r];
      Pc(o);
    }
  }
}
function Xm(e, t, n) {
  let r = Ue(t, e);
  rd(r, n);
}
function rd(e, t) {
  Ms(e) && ki(e, t);
}
function ki(e, t) {
  let r = e[D],
    o = e[y],
    i = e[oe],
    s = !!(t === 0 && o & 16);
  if (
    ((s ||= !!(o & 64 && t === 0)),
    (s ||= !!(o & 1024)),
    (s ||= !!(i?.dirty && An(i))),
    (s ||= !1),
    i && (i.dirty = !1),
    (e[y] &= -9217),
    s)
  )
    Km(r, e, r.template, e[H]);
  else if (o & 8192) {
    nd(e, 1);
    let a = r.components;
    a !== null && od(e, a, 1);
  }
}
function od(e, t, n) {
  for (let r = 0; r < t.length; r++) Xm(e, t[r], n);
}
function Qs(e, t) {
  let n = $c() ? 64 : 1088;
  for (e[Ie].changeDetectionScheduler?.notify(t); e; ) {
    e[y] |= n;
    let r = ot(e);
    if (di(e) && !r) return e;
    e = r;
  }
  return null;
}
var ct = class {
    get rootNodes() {
      let t = this._lView,
        n = t[D];
      return Lr(n, t, n.firstChild, []);
    }
    constructor(t, n, r = !0) {
      (this._lView = t),
        (this._cdRefInjectingView = n),
        (this.notifyErrorHandler = r),
        (this._appRef = null),
        (this._attachedToViewContainer = !1);
    }
    get context() {
      return this._lView[H];
    }
    set context(t) {
      this._lView[H] = t;
    }
    get destroyed() {
      return (this._lView[y] & 256) === 256;
    }
    destroy() {
      if (this._appRef) this._appRef.detachView(this);
      else if (this._attachedToViewContainer) {
        let t = this._lView[G];
        if (Ne(t)) {
          let n = t[xr],
            r = n ? n.indexOf(this) : -1;
          r > -1 && (mn(t, r), Cr(n, r));
        }
        this._attachedToViewContainer = !1;
      }
      ho(this._lView[D], this._lView);
    }
    onDestroy(t) {
      kc(this._lView, t);
    }
    markForCheck() {
      Qs(this._cdRefInjectingView || this._lView, 4);
    }
    detach() {
      this._lView[y] &= -129;
    }
    reattach() {
      hi(this._lView), (this._lView[y] |= 128);
    }
    detectChanges() {
      (this._lView[y] |= 1024), td(this._lView, this.notifyErrorHandler);
    }
    checkNoChanges() {}
    attachToViewContainerRef() {
      if (this._appRef) throw new x(902, !1);
      this._attachedToViewContainer = !0;
    }
    detachFromAppRef() {
      this._appRef = null;
      let t = di(this._lView),
        n = this._lView[nt];
      n !== null && !t && $s(n, this._lView), Sl(this._lView[D], this._lView);
    }
    attachToAppRef(t) {
      if (this._attachedToViewContainer) throw new x(902, !1);
      this._appRef = t;
      let n = di(this._lView),
        r = this._lView[nt];
      r !== null && !n && Tl(r, this._lView), hi(this._lView);
    }
  },
  jt = (() => {
    let t = class t {};
    t.__NG_ELEMENT_ID__ = ny;
    let e = t;
    return e;
  })(),
  ey = jt,
  ty = class extends ey {
    constructor(t, n, r) {
      super(),
        (this._declarationLView = t),
        (this._declarationTContainer = n),
        (this.elementRef = r);
    }
    get ssrId() {
      return this._declarationTContainer.tView?.ssrId || null;
    }
    createEmbeddedView(t, n) {
      return this.createEmbeddedViewImpl(t, n);
    }
    createEmbeddedViewImpl(t, n, r) {
      let o = bn(this._declarationLView, this._declarationTContainer, t, {
        embeddedViewInjector: n,
        dehydratedView: r,
      });
      return new ct(o);
    }
  };
function ny() {
  return vo($(), E());
}
function vo(e, t) {
  return e.type & 4 ? new ty(t, e, Wt(e, t)) : null;
}
var T0 = new RegExp(`^(\\d+)*(${vg}|${Dg})*(.*)`);
var ry = () => null;
function Vt(e, t) {
  return ry(e, t);
}
var Bt = class {},
  id = new T("", { providedIn: "root", factory: () => !1 });
var sd = new T(""),
  ad = new T(""),
  Li = class {},
  jr = class {};
function oy(e) {
  let t = Error(`No component factory found for ${K(e)}.`);
  return (t[iy] = e), t;
}
var iy = "ngComponent";
var ji = class {
    resolveComponentFactory(t) {
      throw oy(t);
    }
  },
  oa = class oa {};
oa.NULL = new ji();
var $t = oa,
  Vr = class {},
  ud = (() => {
    let t = class t {
      constructor() {
        this.destroyNode = null;
      }
    };
    t.__NG_ELEMENT_ID__ = () => sy();
    let e = t;
    return e;
  })();
function sy() {
  let e = E(),
    t = $(),
    n = Ue(t.index, e);
  return (ke(n) ? n : e)[P];
}
var ay = (() => {
  let t = class t {};
  t.ɵprov = A({ token: t, providedIn: "root", factory: () => null });
  let e = t;
  return e;
})();
function Br(e, t, n) {
  let r = n ? e.styles : null,
    o = n ? e.classes : null,
    i = 0;
  if (t !== null)
    for (let s = 0; s < t.length; s++) {
      let a = t[s];
      if (typeof a == "number") i = a;
      else if (i == 1) o = ri(o, a);
      else if (i == 2) {
        let u = a,
          c = t[++s];
        r = ri(r, u + ": " + c + ";");
      }
    }
  n ? (e.styles = r) : (e.stylesWithoutHost = r),
    n ? (e.classes = o) : (e.classesWithoutHost = o);
}
var $r = class extends $t {
  constructor(t) {
    super(), (this.ngModule = t);
  }
  resolveComponentFactory(t) {
    let n = je(t);
    return new Ht(n, this.ngModule);
  }
};
function ju(e, t) {
  let n = [];
  for (let r in e) {
    if (!e.hasOwnProperty(r)) continue;
    let o = e[r];
    if (o === void 0) continue;
    let i = Array.isArray(o),
      s = i ? o[0] : o,
      a = i ? o[1] : Le.None;
    t
      ? n.push({
          propName: s,
          templateName: r,
          isSignal: (a & Le.SignalBased) !== 0,
        })
      : n.push({ propName: s, templateName: r });
  }
  return n;
}
function uy(e) {
  let t = e.toLowerCase();
  return t === "svg" ? Oc : t === "math" ? yp : null;
}
var Ht = class extends jr {
    get inputs() {
      let t = this.componentDef,
        n = t.inputTransforms,
        r = ju(t.inputs, !0);
      if (n !== null)
        for (let o of r)
          n.hasOwnProperty(o.propName) && (o.transform = n[o.propName]);
      return r;
    }
    get outputs() {
      return ju(this.componentDef.outputs, !1);
    }
    constructor(t, n) {
      super(),
        (this.componentDef = t),
        (this.ngModule = n),
        (this.componentType = t.type),
        (this.selector = Yh(t.selectors)),
        (this.ngContentSelectors = t.ngContentSelectors
          ? t.ngContentSelectors
          : []),
        (this.isBoundToModule = !!n);
    }
    create(t, n, r, o) {
      let i = b(null);
      try {
        o = o || this.ngModule;
        let s = o instanceof Ve ? o : o?.injector;
        s &&
          this.componentDef.getStandaloneInjector !== null &&
          (s = this.componentDef.getStandaloneInjector(s) || s);
        let a = s ? new gi(t, s) : t,
          u = a.get(Vr, null);
        if (u === null) throw new x(407, !1);
        let c = a.get(ay, null),
          l = a.get(Bt, null),
          d = {
            rendererFactory: u,
            sanitizer: c,
            inlineEffectRunner: null,
            changeDetectionScheduler: l,
          },
          h = u.createRenderer(null, this.componentDef),
          f = this.componentDef.selectors[0][0] || "div",
          p = r
            ? mm(h, r, this.componentDef.encapsulation, a)
            : xl(h, f, uy(f)),
          m = 512;
        this.componentDef.signals
          ? (m |= 4096)
          : this.componentDef.onPush || (m |= 16);
        let F = null;
        p !== null && (F = Ls(p, a, !0));
        let _ = Ws(0, null, null, 1, 0, null, null, null, null, null, null),
          R = mo(null, _, null, m, null, null, d, h, a, null, F);
        As(R);
        let Ce,
          ae,
          gt = null;
        try {
          let X = this.componentDef,
            mt,
            Eo = null;
          X.findHostDirectiveDefs
            ? ((mt = []),
              (Eo = new Map()),
              X.findHostDirectiveDefs(X, mt, Eo),
              mt.push(X))
            : (mt = [X]);
          let rf = cy(R, p);
          (gt = ly(rf, p, X, mt, R, d, h)),
            (ae = _s(_, Z)),
            p && hy(h, X, p, r),
            n !== void 0 && py(ae, this.ngContentSelectors, n),
            (Ce = fy(gt, X, mt, Eo, R, [gy])),
            Ys(_, R, null);
        } catch (X) {
          throw (gt !== null && Ci(gt), Ci(R), X);
        } finally {
          Os();
        }
        return new Vi(this.componentType, Ce, Wt(ae, R), R, ae);
      } finally {
        b(i);
      }
    }
  },
  Vi = class extends Li {
    constructor(t, n, r, o, i) {
      super(),
        (this.location = r),
        (this._rootLView = o),
        (this._tNode = i),
        (this.previousInputValues = null),
        (this.instance = n),
        (this.hostView = this.changeDetectorRef = new ct(o, void 0, !1)),
        (this.componentType = t);
    }
    setInput(t, n) {
      let r = this._tNode.inputs,
        o;
      if (r !== null && (o = r[t])) {
        if (
          ((this.previousInputValues ??= new Map()),
          this.previousInputValues.has(t) &&
            Object.is(this.previousInputValues.get(t), n))
        )
          return;
        let i = this._rootLView;
        Zs(i[D], i, o, t, n), this.previousInputValues.set(t, n);
        let s = Ue(this._tNode.index, i);
        Qs(s, 1);
      }
    }
    get injector() {
      return new tt(this._tNode, this._rootLView);
    }
    destroy() {
      this.hostView.destroy();
    }
    onDestroy(t) {
      this.hostView.onDestroy(t);
    }
  };
function cy(e, t) {
  let n = e[D],
    r = Z;
  return (e[r] = t), Zt(n, r, 2, "#host", null);
}
function ly(e, t, n, r, o, i, s) {
  let a = o[D];
  dy(r, e, t, s);
  let u = null;
  t !== null && (u = Ls(t, o[Pt]));
  let c = i.rendererFactory.createRenderer(t, n),
    l = 16;
  n.signals ? (l = 4096) : n.onPush && (l = 64);
  let d = mo(o, Hl(n), null, l, o[e.index], e, i, c, null, null, u);
  return (
    a.firstCreatePass && Ri(a, e, r.length - 1), Do(o, d), (o[e.index] = d)
  );
}
function dy(e, t, n, r) {
  for (let o of e) t.mergedAttrs = hn(t.mergedAttrs, o.hostAttrs);
  t.mergedAttrs !== null &&
    (Br(t, t.mergedAttrs, !0), n !== null && Ll(r, n, t));
}
function fy(e, t, n, r, o, i) {
  let s = $(),
    a = o[D],
    u = se(s, o);
  Ul(a, o, s, n, null, r);
  for (let l = 0; l < n.length; l++) {
    let d = s.directiveStart + l,
      h = at(o, a, d, s);
    $e(h, o);
  }
  zl(a, o, s), u && $e(u, o);
  let c = at(o, a, s.directiveStart + s.componentOffset, s);
  if (((e[H] = o[H] = c), i !== null)) for (let l of i) l(c, t);
  return Us(a, s, o), c;
}
function hy(e, t, n, r) {
  if (r) ai(e, n, ["ng-version", "18.2.4"]);
  else {
    let { attrs: o, classes: i } = Qh(t.selectors[0]);
    o && ai(e, n, o), i && i.length > 0 && kl(e, n, i.join(" "));
  }
}
function py(e, t, n) {
  let r = (e.projection = []);
  for (let o = 0; o < t.length; o++) {
    let i = n[o];
    r.push(i != null ? Array.from(i) : null);
  }
}
function gy() {
  let e = $();
  uo(E()[D], e);
}
var Yt = (() => {
  let t = class t {};
  t.__NG_ELEMENT_ID__ = my;
  let e = t;
  return e;
})();
function my() {
  let e = $();
  return ld(e, E());
}
var yy = Yt,
  cd = class extends yy {
    constructor(t, n, r) {
      super(),
        (this._lContainer = t),
        (this._hostTNode = n),
        (this._hostLView = r);
    }
    get element() {
      return Wt(this._hostTNode, this._hostLView);
    }
    get injector() {
      return new tt(this._hostTNode, this._hostLView);
    }
    get parentInjector() {
      let t = Fs(this._hostTNode, this._hostLView);
      if (Jc(t)) {
        let n = Nr(t, this._hostLView),
          r = Tr(t),
          o = n[D].data[r + 8];
        return new tt(o, n);
      } else return new tt(null, this._hostLView);
    }
    clear() {
      for (; this.length > 0; ) this.remove(this.length - 1);
    }
    get(t) {
      let n = Vu(this._lContainer);
      return (n !== null && n[t]) || null;
    }
    get length() {
      return this._lContainer.length - U;
    }
    createEmbeddedView(t, n, r) {
      let o, i;
      typeof r == "number"
        ? (o = r)
        : r != null && ((o = r.index), (i = r.injector));
      let s = Vt(this._lContainer, t.ssrId),
        a = t.createEmbeddedViewImpl(n || {}, i, s);
      return this.insertImpl(a, o, Lt(this._hostTNode, s)), a;
    }
    createComponent(t, n, r, o, i) {
      let s = t && !hp(t),
        a;
      if (s) a = n;
      else {
        let p = n || {};
        (a = p.index),
          (r = p.injector),
          (o = p.projectableNodes),
          (i = p.environmentInjector || p.ngModuleRef);
      }
      let u = s ? t : new Ht(je(t)),
        c = r || this.parentInjector;
      if (!i && u.ngModule == null) {
        let m = (s ? c : this.parentInjector).get(Ve, null);
        m && (i = m);
      }
      let l = je(u.componentType ?? {}),
        d = Vt(this._lContainer, l?.id ?? null),
        h = d?.firstChild ?? null,
        f = u.create(c, o, h, i);
      return this.insertImpl(f.hostView, a, Lt(this._hostTNode, d)), f;
    }
    insert(t, n) {
      return this.insertImpl(t, n, !0);
    }
    insertImpl(t, n, r) {
      let o = t._lView;
      if (Ep(o)) {
        let a = this.indexOf(t);
        if (a !== -1) this.detach(a);
        else {
          let u = o[G],
            c = new cd(u, u[J], u[G]);
          c.detach(c.indexOf(t));
        }
      }
      let i = this._adjustIndex(n),
        s = this._lContainer;
      return _n(s, o, i, r), t.attachToViewContainerRef(), cc(Ko(s), i, t), t;
    }
    move(t, n) {
      return this.insert(t, n);
    }
    indexOf(t) {
      let n = Vu(this._lContainer);
      return n !== null ? n.indexOf(t) : -1;
    }
    remove(t) {
      let n = this._adjustIndex(t, -1),
        r = mn(this._lContainer, n);
      r && (Cr(Ko(this._lContainer), n), ho(r[D], r));
    }
    detach(t) {
      let n = this._adjustIndex(t, -1),
        r = mn(this._lContainer, n);
      return r && Cr(Ko(this._lContainer), n) != null ? new ct(r) : null;
    }
    _adjustIndex(t, n = 0) {
      return t ?? this.length + n;
    }
  };
function Vu(e) {
  return e[xr];
}
function Ko(e) {
  return e[xr] || (e[xr] = []);
}
function ld(e, t) {
  let n,
    r = t[e.index];
  return (
    Ne(r) ? (n = r) : ((n = Gl(r, t, null, e)), (t[e.index] = n), Do(t, n)),
    vy(n, t, e, r),
    new cd(n, e, t)
  );
}
function Dy(e, t) {
  let n = e[P],
    r = n.createComment(""),
    o = se(t, e),
    i = Ol(n, o);
  return kr(n, i, r, im(n, o), !1), r;
}
var vy = wy,
  Iy = () => !1;
function Ey(e, t, n) {
  return Iy(e, t, n);
}
function wy(e, t, n, r) {
  if (e[rt]) return;
  let o;
  n.type & 8 ? (o = Ee(r)) : (o = Dy(t, n)), (e[rt] = o);
}
var Bi = class e {
    constructor(t) {
      (this.queryList = t), (this.matches = null);
    }
    clone() {
      return new e(this.queryList);
    }
    setDirty() {
      this.queryList.setDirty();
    }
  },
  $i = class e {
    constructor(t = []) {
      this.queries = t;
    }
    createEmbeddedView(t) {
      let n = t.queries;
      if (n !== null) {
        let r = t.contentQueries !== null ? t.contentQueries[0] : n.length,
          o = [];
        for (let i = 0; i < r; i++) {
          let s = n.getByIndex(i),
            a = this.queries[s.indexInDeclarationView];
          o.push(a.clone());
        }
        return new e(o);
      }
      return null;
    }
    insertView(t) {
      this.dirtyQueriesWithMatches(t);
    }
    detachView(t) {
      this.dirtyQueriesWithMatches(t);
    }
    finishViewCreation(t) {
      this.dirtyQueriesWithMatches(t);
    }
    dirtyQueriesWithMatches(t) {
      for (let n = 0; n < this.queries.length; n++)
        Ks(t, n).matches !== null && this.queries[n].setDirty();
    }
  },
  Hr = class {
    constructor(t, n, r = null) {
      (this.flags = n),
        (this.read = r),
        typeof t == "string" ? (this.predicate = Ny(t)) : (this.predicate = t);
    }
  },
  Hi = class e {
    constructor(t = []) {
      this.queries = t;
    }
    elementStart(t, n) {
      for (let r = 0; r < this.queries.length; r++)
        this.queries[r].elementStart(t, n);
    }
    elementEnd(t) {
      for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementEnd(t);
    }
    embeddedTView(t) {
      let n = null;
      for (let r = 0; r < this.length; r++) {
        let o = n !== null ? n.length : 0,
          i = this.getByIndex(r).embeddedTView(t, o);
        i &&
          ((i.indexInDeclarationView = r), n !== null ? n.push(i) : (n = [i]));
      }
      return n !== null ? new e(n) : null;
    }
    template(t, n) {
      for (let r = 0; r < this.queries.length; r++)
        this.queries[r].template(t, n);
    }
    getByIndex(t) {
      return this.queries[t];
    }
    get length() {
      return this.queries.length;
    }
    track(t) {
      this.queries.push(t);
    }
  },
  Ui = class e {
    constructor(t, n = -1) {
      (this.metadata = t),
        (this.matches = null),
        (this.indexInDeclarationView = -1),
        (this.crossesNgTemplate = !1),
        (this._appliesToNextNode = !0),
        (this._declarationNodeIndex = n);
    }
    elementStart(t, n) {
      this.isApplyingToNode(n) && this.matchTNode(t, n);
    }
    elementEnd(t) {
      this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1);
    }
    template(t, n) {
      this.elementStart(t, n);
    }
    embeddedTView(t, n) {
      return this.isApplyingToNode(t)
        ? ((this.crossesNgTemplate = !0),
          this.addMatch(-t.index, n),
          new e(this.metadata))
        : null;
    }
    isApplyingToNode(t) {
      if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let n = this._declarationNodeIndex,
          r = t.parent;
        for (; r !== null && r.type & 8 && r.index !== n; ) r = r.parent;
        return n === (r !== null ? r.index : -1);
      }
      return this._appliesToNextNode;
    }
    matchTNode(t, n) {
      let r = this.metadata.predicate;
      if (Array.isArray(r))
        for (let o = 0; o < r.length; o++) {
          let i = r[o];
          this.matchTNodeWithReadOption(t, n, Cy(n, i)),
            this.matchTNodeWithReadOption(t, n, vr(n, t, i, !1, !1));
        }
      else
        r === jt
          ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1)
          : this.matchTNodeWithReadOption(t, n, vr(n, t, r, !1, !1));
    }
    matchTNodeWithReadOption(t, n, r) {
      if (r !== null) {
        let o = this.metadata.read;
        if (o !== null)
          if (o === qt || o === Yt || (o === jt && n.type & 4))
            this.addMatch(n.index, -2);
          else {
            let i = vr(n, t, o, !1, !1);
            i !== null && this.addMatch(n.index, i);
          }
        else this.addMatch(n.index, r);
      }
    }
    addMatch(t, n) {
      this.matches === null ? (this.matches = [t, n]) : this.matches.push(t, n);
    }
  };
function Cy(e, t) {
  let n = e.localNames;
  if (n !== null) {
    for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
  }
  return null;
}
function by(e, t) {
  return e.type & 11 ? Wt(e, t) : e.type & 4 ? vo(e, t) : null;
}
function _y(e, t, n, r) {
  return n === -1 ? by(t, e) : n === -2 ? My(e, t, r) : at(e, e[D], n, t);
}
function My(e, t, n) {
  if (n === qt) return Wt(t, e);
  if (n === jt) return vo(t, e);
  if (n === Yt) return ld(t, e);
}
function dd(e, t, n, r) {
  let o = t[xe].queries[r];
  if (o.matches === null) {
    let i = e.data,
      s = n.matches,
      a = [];
    for (let u = 0; s !== null && u < s.length; u += 2) {
      let c = s[u];
      if (c < 0) a.push(null);
      else {
        let l = i[c];
        a.push(_y(t, l, s[u + 1], n.metadata.read));
      }
    }
    o.matches = a;
  }
  return o.matches;
}
function zi(e, t, n, r) {
  let o = e.queries.getByIndex(n),
    i = o.matches;
  if (i !== null) {
    let s = dd(e, t, o, n);
    for (let a = 0; a < i.length; a += 2) {
      let u = i[a];
      if (u > 0) r.push(s[a / 2]);
      else {
        let c = i[a + 1],
          l = t[-u];
        for (let d = U; d < l.length; d++) {
          let h = l[d];
          h[nt] === h[G] && zi(h[D], h, c, r);
        }
        if (l[kt] !== null) {
          let d = l[kt];
          for (let h = 0; h < d.length; h++) {
            let f = d[h];
            zi(f[D], f, c, r);
          }
        }
      }
    }
  }
  return r;
}
function xy(e, t) {
  return e[xe].queries[t].queryList;
}
function fd(e, t, n) {
  let r = new wi((n & 4) === 4);
  return (
    vm(e, t, r, r.destroy), (t[xe] ??= new $i()).queries.push(new Bi(r)) - 1
  );
}
function Sy(e, t, n) {
  let r = k();
  return (
    r.firstCreatePass &&
      (hd(r, new Hr(e, t, n), -1), (t & 2) === 2 && (r.staticViewQueries = !0)),
    fd(r, E(), t)
  );
}
function Ty(e, t, n, r) {
  let o = k();
  if (o.firstCreatePass) {
    let i = $();
    hd(o, new Hr(t, n, r), i.index),
      Ay(o, e),
      (n & 2) === 2 && (o.staticContentQueries = !0);
  }
  return fd(o, E(), n);
}
function Ny(e) {
  return e.split(",").map((t) => t.trim());
}
function hd(e, t, n) {
  e.queries === null && (e.queries = new Hi()), e.queries.track(new Ui(t, n));
}
function Ay(e, t) {
  let n = e.contentQueries || (e.contentQueries = []),
    r = n.length ? n[n.length - 1] : -1;
  t !== r && n.push(e.queries.length - 1, t);
}
function Ks(e, t) {
  return e.queries.getByIndex(t);
}
function Oy(e, t) {
  let n = e[D],
    r = Ks(n, t);
  return r.crossesNgTemplate ? zi(n, e, t, []) : dd(n, e, r, t);
}
var Bu = new Set();
function Oe(e) {
  Bu.has(e) ||
    (Bu.add(e),
    performance?.mark?.("mark_feature_usage", { detail: { feature: e } }));
}
function A0(e) {
  return typeof e == "function" && e[ge] !== void 0;
}
function O0(e, t) {
  Oe("NgSignals");
  let n = Sa(e),
    r = n[ge];
  return (
    t?.equal && (r.equal = t.equal),
    (n.set = (o) => Mo(r, o)),
    (n.update = (o) => Ta(r, o)),
    (n.asReadonly = Fy.bind(n)),
    n
  );
}
function Fy() {
  let e = this[ge];
  if (e.readonlyFn === void 0) {
    let t = () => this();
    (t[ge] = e), (e.readonlyFn = t);
  }
  return e.readonlyFn;
}
function Ry(e) {
  let t = [],
    n = new Map();
  function r(o) {
    let i = n.get(o);
    if (!i) {
      let s = e(o);
      n.set(o, (i = s.then(jy)));
    }
    return i;
  }
  return (
    Ur.forEach((o, i) => {
      let s = [];
      o.templateUrl &&
        s.push(
          r(o.templateUrl).then((c) => {
            o.template = c;
          }),
        );
      let a = typeof o.styles == "string" ? [o.styles] : o.styles || [];
      if (((o.styles = a), o.styleUrl && o.styleUrls?.length))
        throw new Error(
          "@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple",
        );
      if (o.styleUrls?.length) {
        let c = o.styles.length,
          l = o.styleUrls;
        o.styleUrls.forEach((d, h) => {
          a.push(""),
            s.push(
              r(d).then((f) => {
                (a[c + h] = f),
                  l.splice(l.indexOf(d), 1),
                  l.length == 0 && (o.styleUrls = void 0);
              }),
            );
        });
      } else
        o.styleUrl &&
          s.push(
            r(o.styleUrl).then((c) => {
              a.push(c), (o.styleUrl = void 0);
            }),
          );
      let u = Promise.all(s).then(() => Vy(i));
      t.push(u);
    }),
    ky(),
    Promise.all(t).then(() => {})
  );
}
var Ur = new Map(),
  Py = new Set();
function ky() {
  let e = Ur;
  return (Ur = new Map()), e;
}
function Ly() {
  return Ur.size === 0;
}
function jy(e) {
  return typeof e == "string" ? e : e.text();
}
function Vy(e) {
  Py.delete(e);
}
function By(e) {
  return Object.getPrototypeOf(e.prototype).constructor;
}
function $y(e) {
  let t = By(e.type),
    n = !0,
    r = [e];
  for (; t; ) {
    let o;
    if (Se(e)) o = t.ɵcmp || t.ɵdir;
    else {
      if (t.ɵcmp) throw new x(903, !1);
      o = t.ɵdir;
    }
    if (o) {
      if (n) {
        r.push(o);
        let s = e;
        (s.inputs = dr(e.inputs)),
          (s.inputTransforms = dr(e.inputTransforms)),
          (s.declaredInputs = dr(e.declaredInputs)),
          (s.outputs = dr(e.outputs));
        let a = o.hostBindings;
        a && Wy(e, a);
        let u = o.viewQuery,
          c = o.contentQueries;
        if (
          (u && zy(e, u),
          c && Gy(e, c),
          Hy(e, o),
          fh(e.outputs, o.outputs),
          Se(o) && o.data.animation)
        ) {
          let l = e.data;
          l.animation = (l.animation || []).concat(o.data.animation);
        }
      }
      let i = o.features;
      if (i)
        for (let s = 0; s < i.length; s++) {
          let a = i[s];
          a && a.ngInherit && a(e), a === $y && (n = !1);
        }
    }
    t = Object.getPrototypeOf(t);
  }
  Uy(r);
}
function Hy(e, t) {
  for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n)) continue;
    let r = t.inputs[n];
    if (
      r !== void 0 &&
      ((e.inputs[n] = r),
      (e.declaredInputs[n] = t.declaredInputs[n]),
      t.inputTransforms !== null)
    ) {
      let o = Array.isArray(r) ? r[0] : r;
      if (!t.inputTransforms.hasOwnProperty(o)) continue;
      (e.inputTransforms ??= {}), (e.inputTransforms[o] = t.inputTransforms[o]);
    }
  }
}
function Uy(e) {
  let t = 0,
    n = null;
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    (o.hostVars = t += o.hostVars),
      (o.hostAttrs = hn(o.hostAttrs, (n = hn(n, o.hostAttrs))));
  }
}
function dr(e) {
  return e === Ot ? {} : e === Q ? [] : e;
}
function zy(e, t) {
  let n = e.viewQuery;
  n
    ? (e.viewQuery = (r, o) => {
        t(r, o), n(r, o);
      })
    : (e.viewQuery = t);
}
function Gy(e, t) {
  let n = e.contentQueries;
  n
    ? (e.contentQueries = (r, o, i) => {
        t(r, o, i), n(r, o, i);
      })
    : (e.contentQueries = t);
}
function Wy(e, t) {
  let n = e.hostBindings;
  n
    ? (e.hostBindings = (r, o) => {
        t(r, o), n(r, o);
      })
    : (e.hostBindings = t);
}
function qy(e) {
  let t = e.inputConfig,
    n = {};
  for (let r in t)
    if (t.hasOwnProperty(r)) {
      let o = t[r];
      Array.isArray(o) && o[3] && (n[r] = o[3]);
    }
  e.inputTransforms = n;
}
var He = class {},
  Gi = class {};
var zr = class extends He {
    constructor(t, n, r, o = !0) {
      super(),
        (this.ngModuleType = t),
        (this._parent = n),
        (this._bootstrapComponents = []),
        (this.destroyCbs = []),
        (this.componentFactoryResolver = new $r(this));
      let i = Dc(t);
      (this._bootstrapComponents = _l(i.bootstrap)),
        (this._r3Injector = al(
          t,
          n,
          [
            { provide: He, useValue: this },
            { provide: $t, useValue: this.componentFactoryResolver },
            ...r,
          ],
          K(t),
          new Set(["environment"]),
        )),
        o && this.resolveInjectorInitializers();
    }
    resolveInjectorInitializers() {
      this._r3Injector.resolveInjectorInitializers(),
        (this.instance = this._r3Injector.get(this.ngModuleType));
    }
    get injector() {
      return this._r3Injector;
    }
    destroy() {
      let t = this._r3Injector;
      !t.destroyed && t.destroy(),
        this.destroyCbs.forEach((n) => n()),
        (this.destroyCbs = null);
    }
    onDestroy(t) {
      this.destroyCbs.push(t);
    }
  },
  Gr = class extends Gi {
    constructor(t) {
      super(), (this.moduleType = t);
    }
    create(t) {
      return new zr(this.moduleType, t, []);
    }
  };
function Zy(e, t, n) {
  return new zr(e, t, n, !1);
}
var Wi = class extends He {
  constructor(t) {
    super(),
      (this.componentFactoryResolver = new $r(this)),
      (this.instance = null);
    let n = new pn(
      [
        ...t.providers,
        { provide: He, useValue: this },
        { provide: $t, useValue: this.componentFactoryResolver },
      ],
      t.parent || Is(),
      t.debugName,
      new Set(["environment"]),
    );
    (this.injector = n),
      t.runEnvironmentInitializers && n.resolveInjectorInitializers();
  }
  destroy() {
    this.injector.destroy();
  }
  onDestroy(t) {
    this.injector.onDestroy(t);
  }
};
function Yy(e, t, n = null) {
  return new Wi({
    providers: e,
    parent: t,
    debugName: n,
    runEnvironmentInitializers: !0,
  }).injector;
}
function pd(e) {
  return Ky(e)
    ? Array.isArray(e) || (!(e instanceof Map) && Symbol.iterator in e)
    : !1;
}
function Qy(e, t) {
  if (Array.isArray(e)) for (let n = 0; n < e.length; n++) t(e[n]);
  else {
    let n = e[Symbol.iterator](),
      r;
    for (; !(r = n.next()).done; ) t(r.value);
  }
}
function Ky(e) {
  return e !== null && (typeof e == "function" || typeof e == "object");
}
function gd(e, t, n) {
  return (e[t] = n);
}
function ie(e, t, n) {
  let r = e[t];
  return Object.is(r, n) ? !1 : ((e[t] = n), !0);
}
function Jy(e, t, n, r) {
  let o = ie(e, t, n);
  return ie(e, t + 1, r) || o;
}
function Xy(e) {
  return (e.flags & 32) === 32;
}
function eD(e, t, n, r, o, i, s, a, u) {
  let c = t.consts,
    l = Zt(t, e, 4, s || null, a || null);
  qs(t, n, l, Be(c, u)), uo(t, l);
  let d = (l.tView = Ws(
    2,
    l,
    r,
    o,
    i,
    t.directiveRegistry,
    t.pipeRegistry,
    null,
    t.schemas,
    c,
    null,
  ));
  return (
    t.queries !== null &&
      (t.queries.template(t, l), (d.queries = t.queries.embeddedTView(l))),
    l
  );
}
function Wr(e, t, n, r, o, i, s, a, u, c) {
  let l = n + Z,
    d = t.firstCreatePass ? eD(l, t, e, r, o, i, s, a, u) : t.data[l];
  dt(d, !1);
  let h = nD(t, e, d, n);
  so() && po(t, e, h, d), $e(h, e);
  let f = Gl(h, e, h, d);
  return (
    (e[l] = f),
    Do(e, f),
    Ey(f, d, e),
    ro(d) && zs(t, e, d),
    u != null && Gs(e, d, c),
    d
  );
}
function tD(e, t, n, r, o, i, s, a) {
  let u = E(),
    c = k(),
    l = Be(c.consts, i);
  return Wr(u, c, e, t, n, r, o, l, s, a), tD;
}
var nD = rD;
function rD(e, t, n, r) {
  return ao(!0), t[P].createComment("");
}
var St = (function (e) {
    return (
      (e[(e.EarlyRead = 0)] = "EarlyRead"),
      (e[(e.Write = 1)] = "Write"),
      (e[(e.MixedReadWrite = 2)] = "MixedReadWrite"),
      (e[(e.Read = 3)] = "Read"),
      e
    );
  })(St || {}),
  md = (() => {
    let t = class t {
      constructor() {
        this.impl = null;
      }
      execute() {
        this.impl?.execute();
      }
    };
    t.ɵprov = A({ token: t, providedIn: "root", factory: () => new t() });
    let e = t;
    return e;
  })(),
  et = class et {
    constructor() {
      (this.ngZone = w(z)),
        (this.scheduler = w(Bt)),
        (this.errorHandler = w(ut, { optional: !0 })),
        (this.sequences = new Set()),
        (this.deferredRegistrations = new Set()),
        (this.executing = !1);
    }
    execute() {
      this.executing = !0;
      for (let t of et.PHASES)
        for (let n of this.sequences)
          if (!(n.erroredOrDestroyed || !n.hooks[t]))
            try {
              n.pipelinedValue = this.ngZone.runOutsideAngular(() =>
                n.hooks[t](n.pipelinedValue),
              );
            } catch (r) {
              (n.erroredOrDestroyed = !0), this.errorHandler?.handleError(r);
            }
      this.executing = !1;
      for (let t of this.sequences)
        t.afterRun(), t.once && this.sequences.delete(t);
      for (let t of this.deferredRegistrations) this.sequences.add(t);
      this.deferredRegistrations.size > 0 && this.scheduler.notify(7),
        this.deferredRegistrations.clear();
    }
    register(t) {
      this.executing
        ? this.deferredRegistrations.add(t)
        : (this.sequences.add(t), this.scheduler.notify(6));
    }
    unregister(t) {
      this.executing && this.sequences.has(t)
        ? ((t.erroredOrDestroyed = !0),
          (t.pipelinedValue = void 0),
          (t.once = !0))
        : (this.sequences.delete(t), this.deferredRegistrations.delete(t));
    }
  };
(et.PHASES = [St.EarlyRead, St.Write, St.MixedReadWrite, St.Read]),
  (et.ɵprov = A({ token: et, providedIn: "root", factory: () => new et() }));
var qi = et,
  Zi = class {
    constructor(t, n, r, o) {
      (this.impl = t),
        (this.hooks = n),
        (this.once = r),
        (this.erroredOrDestroyed = !1),
        (this.pipelinedValue = void 0),
        (this.unregisterOnDestroy = o.onDestroy(() => this.destroy()));
    }
    afterRun() {
      (this.erroredOrDestroyed = !1), (this.pipelinedValue = void 0);
    }
    destroy() {
      this.impl.unregister(this), this.unregisterOnDestroy();
    }
  };
function oD(e, t) {
  !t?.injector && Es(oD);
  let n = t?.injector ?? w(he);
  return Ml(n) ? (Oe("NgAfterRender"), yd(e, n, t, !1)) : Dd;
}
function iD(e, t) {
  !t?.injector && Es(iD);
  let n = t?.injector ?? w(he);
  return Ml(n) ? (Oe("NgAfterNextRender"), yd(e, n, t, !0)) : Dd;
}
function sD(e, t) {
  if (e instanceof Function) {
    let n = [void 0, void 0, void 0, void 0];
    return (n[t] = e), n;
  } else return [e.earlyRead, e.write, e.mixedReadWrite, e.read];
}
function yd(e, t, n, r) {
  let o = t.get(md);
  o.impl ??= t.get(qi);
  let i = n?.phase ?? St.MixedReadWrite,
    s = new Zi(o.impl, sD(e, i), r, t.get(co));
  return o.impl.register(s), s;
}
var Dd = { destroy() {} };
function aD(e, t, n, r) {
  let o = E(),
    i = ft();
  if (ie(o, i, t)) {
    let s = k(),
      a = En();
    Rm(a, o, e, t, n, r);
  }
  return aD;
}
function vd(e, t, n, r) {
  return ie(e, ft(), n) ? t + vn(n) + r : pe;
}
function fr(e, t) {
  return (e << 17) | (t << 2);
}
function lt(e) {
  return (e >> 17) & 32767;
}
function uD(e) {
  return (e & 2) == 2;
}
function cD(e, t) {
  return (e & 131071) | (t << 17);
}
function Yi(e) {
  return e | 2;
}
function Ut(e) {
  return (e & 131068) >> 2;
}
function Jo(e, t) {
  return (e & -131069) | (t << 2);
}
function lD(e) {
  return (e & 1) === 1;
}
function Qi(e) {
  return e | 1;
}
function dD(e, t, n, r, o, i) {
  let s = i ? t.classBindings : t.styleBindings,
    a = lt(s),
    u = Ut(s);
  e[r] = n;
  let c = !1,
    l;
  if (Array.isArray(n)) {
    let d = n;
    (l = d[1]), (l === null || In(d, l) > 0) && (c = !0);
  } else l = n;
  if (o)
    if (u !== 0) {
      let h = lt(e[a + 1]);
      (e[r + 1] = fr(h, a)),
        h !== 0 && (e[h + 1] = Jo(e[h + 1], r)),
        (e[a + 1] = cD(e[a + 1], r));
    } else
      (e[r + 1] = fr(a, 0)), a !== 0 && (e[a + 1] = Jo(e[a + 1], r)), (a = r);
  else
    (e[r + 1] = fr(u, 0)),
      a === 0 ? (a = r) : (e[u + 1] = Jo(e[u + 1], r)),
      (u = r);
  c && (e[r + 1] = Yi(e[r + 1])),
    $u(e, l, r, !0),
    $u(e, l, r, !1),
    fD(t, l, e, r, i),
    (s = fr(a, u)),
    i ? (t.classBindings = s) : (t.styleBindings = s);
}
function fD(e, t, n, r, o) {
  let i = o ? e.residualClasses : e.residualStyles;
  i != null &&
    typeof t == "string" &&
    In(i, t) >= 0 &&
    (n[r + 1] = Qi(n[r + 1]));
}
function $u(e, t, n, r) {
  let o = e[n + 1],
    i = t === null,
    s = r ? lt(o) : Ut(o),
    a = !1;
  for (; s !== 0 && (a === !1 || i); ) {
    let u = e[s],
      c = e[s + 1];
    hD(u, t) && ((a = !0), (e[s + 1] = r ? Qi(c) : Yi(c))),
      (s = r ? lt(c) : Ut(c));
  }
  a && (e[n + 1] = r ? Yi(o) : Qi(o));
}
function hD(e, t) {
  return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t
    ? !0
    : Array.isArray(e) && typeof t == "string"
      ? In(e, t) >= 0
      : !1;
}
var B = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function Id(e) {
  return e.substring(B.key, B.keyEnd);
}
function pD(e) {
  return e.substring(B.value, B.valueEnd);
}
function gD(e) {
  return Cd(e), Ed(e, zt(e, 0, B.textEnd));
}
function Ed(e, t) {
  let n = B.textEnd;
  return n === t ? -1 : ((t = B.keyEnd = yD(e, (B.key = t), n)), zt(e, t, n));
}
function mD(e) {
  return Cd(e), wd(e, zt(e, 0, B.textEnd));
}
function wd(e, t) {
  let n = B.textEnd,
    r = (B.key = zt(e, t, n));
  return n === r
    ? -1
    : ((r = B.keyEnd = DD(e, r, n)),
      (r = Hu(e, r, n, 58)),
      (r = B.value = zt(e, r, n)),
      (r = B.valueEnd = vD(e, r, n)),
      Hu(e, r, n, 59));
}
function Cd(e) {
  (B.key = 0),
    (B.keyEnd = 0),
    (B.value = 0),
    (B.valueEnd = 0),
    (B.textEnd = e.length);
}
function zt(e, t, n) {
  for (; t < n && e.charCodeAt(t) <= 32; ) t++;
  return t;
}
function yD(e, t, n) {
  for (; t < n && e.charCodeAt(t) > 32; ) t++;
  return t;
}
function DD(e, t, n) {
  let r;
  for (
    ;
    t < n &&
    ((r = e.charCodeAt(t)) === 45 ||
      r === 95 ||
      ((r & -33) >= 65 && (r & -33) <= 90) ||
      (r >= 48 && r <= 57));

  )
    t++;
  return t;
}
function Hu(e, t, n, r) {
  return (t = zt(e, t, n)), t < n && t++, t;
}
function vD(e, t, n) {
  let r = -1,
    o = -1,
    i = -1,
    s = t,
    a = s;
  for (; s < n; ) {
    let u = e.charCodeAt(s++);
    if (u === 59) return a;
    u === 34 || u === 39
      ? (a = s = Uu(e, u, s, n))
      : t === s - 4 && i === 85 && o === 82 && r === 76 && u === 40
        ? (a = s = Uu(e, 41, s, n))
        : u > 32 && (a = s),
      (i = o),
      (o = r),
      (r = u & -33);
  }
  return a;
}
function Uu(e, t, n, r) {
  let o = -1,
    i = n;
  for (; i < r; ) {
    let s = e.charCodeAt(i++);
    if (s == t && o !== 92) return i;
    s == 92 && o === 92 ? (o = 0) : (o = s);
  }
  throw new Error();
}
function ID(e, t, n) {
  let r = E(),
    o = ft();
  if (ie(r, o, t)) {
    let i = k(),
      s = En();
    yo(i, s, r, e, t, r[P], n, !1);
  }
  return ID;
}
function Ki(e, t, n, r, o) {
  let i = t.inputs,
    s = o ? "class" : "style";
  Zs(e, n, i[s], s, r);
}
function bd(e, t, n) {
  return _d(e, t, n, !1), bd;
}
function ED(e, t) {
  return _d(e, t, null, !0), ED;
}
function F0(e) {
  Md(Td, wD, e, !1);
}
function wD(e, t) {
  for (let n = mD(t); n >= 0; n = wd(t, n)) Td(e, Id(t), pD(t));
}
function R0(e) {
  Md(TD, CD, e, !0);
}
function CD(e, t) {
  for (let n = gD(t); n >= 0; n = Ed(t, n)) eo(e, Id(t), !0);
}
function _d(e, t, n, r) {
  let o = E(),
    i = k(),
    s = Uc(2);
  if ((i.firstUpdatePass && Sd(i, e, s, r), t !== pe && ie(o, s, t))) {
    let a = i.data[ze()];
    Nd(i, a, o, o[P], e, (o[s + 1] = AD(t, n)), r, s);
  }
}
function Md(e, t, n, r) {
  let o = k(),
    i = Uc(2);
  o.firstUpdatePass && Sd(o, null, i, r);
  let s = E();
  if (n !== pe && ie(s, i, n)) {
    let a = o.data[ze()];
    if (Ad(a, r) && !xd(o, i)) {
      let u = r ? a.classesWithoutHost : a.stylesWithoutHost;
      u !== null && (n = ri(u, n || "")), Ki(o, a, s, n, r);
    } else ND(o, a, s, s[P], s[i + 1], (s[i + 1] = SD(e, t, n)), r, i);
  }
}
function xd(e, t) {
  return t >= e.expandoStartIndex;
}
function Sd(e, t, n, r) {
  let o = e.data;
  if (o[n + 1] === null) {
    let i = o[ze()],
      s = xd(e, n);
    Ad(i, r) && t === null && !s && (t = !1),
      (t = bD(o, i, t, r)),
      dD(o, i, t, n, s, r);
  }
}
function bD(e, t, n, r) {
  let o = Ts(e),
    i = r ? t.residualClasses : t.residualStyles;
  if (o === null)
    (r ? t.classBindings : t.styleBindings) === 0 &&
      ((n = Xo(null, e, t, n, r)), (n = yn(n, t.attrs, r)), (i = null));
  else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== o)
      if (((n = Xo(o, e, t, n, r)), i === null)) {
        let u = _D(e, t, r);
        u !== void 0 &&
          Array.isArray(u) &&
          ((u = Xo(null, e, t, u[1], r)),
          (u = yn(u, t.attrs, r)),
          MD(e, t, r, u));
      } else i = xD(e, t, r);
  }
  return (
    i !== void 0 && (r ? (t.residualClasses = i) : (t.residualStyles = i)), n
  );
}
function _D(e, t, n) {
  let r = n ? t.classBindings : t.styleBindings;
  if (Ut(r) !== 0) return e[lt(r)];
}
function MD(e, t, n, r) {
  let o = n ? t.classBindings : t.styleBindings;
  e[lt(o)] = r;
}
function xD(e, t, n) {
  let r,
    o = t.directiveEnd;
  for (let i = 1 + t.directiveStylingLast; i < o; i++) {
    let s = e[i].hostAttrs;
    r = yn(r, s, n);
  }
  return yn(r, t.attrs, n);
}
function Xo(e, t, n, r, o) {
  let i = null,
    s = n.directiveEnd,
    a = n.directiveStylingLast;
  for (
    a === -1 ? (a = n.directiveStart) : a++;
    a < s && ((i = t[a]), (r = yn(r, i.hostAttrs, o)), i !== e);

  )
    a++;
  return e !== null && (n.directiveStylingLast = a), r;
}
function yn(e, t, n) {
  let r = n ? 1 : 2,
    o = -1;
  if (t !== null)
    for (let i = 0; i < t.length; i++) {
      let s = t[i];
      typeof s == "number"
        ? (o = s)
        : o === r &&
          (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]),
          eo(e, s, n ? !0 : t[++i]));
    }
  return e === void 0 ? null : e;
}
function SD(e, t, n) {
  if (n == null || n === "") return Q;
  let r = [],
    o = ht(n);
  if (Array.isArray(o)) for (let i = 0; i < o.length; i++) e(r, o[i], !0);
  else if (typeof o == "object")
    for (let i in o) o.hasOwnProperty(i) && e(r, i, o[i]);
  else typeof o == "string" && t(r, o);
  return r;
}
function Td(e, t, n) {
  eo(e, t, ht(n));
}
function TD(e, t, n) {
  let r = String(t);
  r !== "" && !r.includes(" ") && eo(e, r, n);
}
function ND(e, t, n, r, o, i, s, a) {
  o === pe && (o = Q);
  let u = 0,
    c = 0,
    l = 0 < o.length ? o[0] : null,
    d = 0 < i.length ? i[0] : null;
  for (; l !== null || d !== null; ) {
    let h = u < o.length ? o[u + 1] : void 0,
      f = c < i.length ? i[c + 1] : void 0,
      p = null,
      m;
    l === d
      ? ((u += 2), (c += 2), h !== f && ((p = d), (m = f)))
      : d === null || (l !== null && l < d)
        ? ((u += 2), (p = l))
        : ((c += 2), (p = d), (m = f)),
      p !== null && Nd(e, t, n, r, p, m, s, a),
      (l = u < o.length ? o[u] : null),
      (d = c < i.length ? i[c] : null);
  }
}
function Nd(e, t, n, r, o, i, s, a) {
  if (!(t.type & 3)) return;
  let u = e.data,
    c = u[a + 1],
    l = lD(c) ? zu(u, t, n, o, Ut(c), s) : void 0;
  if (!qr(l)) {
    qr(i) || (uD(c) && (i = zu(u, null, n, o, a, s)));
    let d = Fc(ze(), n);
    dm(r, s, d, o, i);
  }
}
function zu(e, t, n, r, o, i) {
  let s = t === null,
    a;
  for (; o > 0; ) {
    let u = e[o],
      c = Array.isArray(u),
      l = c ? u[1] : u,
      d = l === null,
      h = n[o + 1];
    h === pe && (h = d ? Q : void 0);
    let f = d ? zo(h, r) : l === r ? h : void 0;
    if ((c && !qr(f) && (f = zo(u, r)), qr(f) && ((a = f), s))) return a;
    let p = e[o + 1];
    o = s ? lt(p) : Ut(p);
  }
  if (t !== null) {
    let u = i ? t.residualClasses : t.residualStyles;
    u != null && (a = zo(u, r));
  }
  return a;
}
function qr(e) {
  return e !== void 0;
}
function AD(e, t) {
  return (
    e == null ||
      e === "" ||
      (typeof t == "string"
        ? (e = e + t)
        : typeof e == "object" && (e = K(ht(e)))),
    e
  );
}
function Ad(e, t) {
  return (e.flags & (t ? 8 : 16)) !== 0;
}
var Ji = class {
  destroy(t) {}
  updateValue(t, n) {}
  swap(t, n) {
    let r = Math.min(t, n),
      o = Math.max(t, n),
      i = this.detach(o);
    if (o - r > 1) {
      let s = this.detach(r);
      this.attach(r, i), this.attach(o, s);
    } else this.attach(r, i);
  }
  move(t, n) {
    this.attach(n, this.detach(t));
  }
};
function ei(e, t, n, r, o) {
  return e === n && Object.is(t, r) ? 1 : Object.is(o(e, t), o(n, r)) ? -1 : 0;
}
function OD(e, t, n) {
  let r,
    o,
    i = 0,
    s = e.length - 1,
    a = void 0;
  if (Array.isArray(t)) {
    let u = t.length - 1;
    for (; i <= s && i <= u; ) {
      let c = e.at(i),
        l = t[i],
        d = ei(i, c, i, l, n);
      if (d !== 0) {
        d < 0 && e.updateValue(i, l), i++;
        continue;
      }
      let h = e.at(s),
        f = t[u],
        p = ei(s, h, u, f, n);
      if (p !== 0) {
        p < 0 && e.updateValue(s, f), s--, u--;
        continue;
      }
      let m = n(i, c),
        F = n(s, h),
        _ = n(i, l);
      if (Object.is(_, F)) {
        let R = n(u, f);
        Object.is(R, m)
          ? (e.swap(i, s), e.updateValue(s, f), u--, s--)
          : e.move(s, i),
          e.updateValue(i, l),
          i++;
        continue;
      }
      if (((r ??= new Zr()), (o ??= Wu(e, i, s, n)), Xi(e, r, i, _)))
        e.updateValue(i, l), i++, s++;
      else if (o.has(_)) r.set(m, e.detach(i)), s--;
      else {
        let R = e.create(i, t[i]);
        e.attach(i, R), i++, s++;
      }
    }
    for (; i <= u; ) Gu(e, r, n, i, t[i]), i++;
  } else if (t != null) {
    let u = t[Symbol.iterator](),
      c = u.next();
    for (; !c.done && i <= s; ) {
      let l = e.at(i),
        d = c.value,
        h = ei(i, l, i, d, n);
      if (h !== 0) h < 0 && e.updateValue(i, d), i++, (c = u.next());
      else {
        (r ??= new Zr()), (o ??= Wu(e, i, s, n));
        let f = n(i, d);
        if (Xi(e, r, i, f)) e.updateValue(i, d), i++, s++, (c = u.next());
        else if (!o.has(f))
          e.attach(i, e.create(i, d)), i++, s++, (c = u.next());
        else {
          let p = n(i, l);
          r.set(p, e.detach(i)), s--;
        }
      }
    }
    for (; !c.done; ) Gu(e, r, n, e.length, c.value), (c = u.next());
  }
  for (; i <= s; ) e.destroy(e.detach(s--));
  r?.forEach((u) => {
    e.destroy(u);
  });
}
function Xi(e, t, n, r) {
  return t !== void 0 && t.has(r)
    ? (e.attach(n, t.get(r)), t.delete(r), !0)
    : !1;
}
function Gu(e, t, n, r, o) {
  if (Xi(e, t, r, n(r, o))) e.updateValue(r, o);
  else {
    let i = e.create(r, o);
    e.attach(r, i);
  }
}
function Wu(e, t, n, r) {
  let o = new Set();
  for (let i = t; i <= n; i++) o.add(r(i, e.at(i)));
  return o;
}
var Zr = class {
  constructor() {
    (this.kvMap = new Map()), (this._vMap = void 0);
  }
  has(t) {
    return this.kvMap.has(t);
  }
  delete(t) {
    if (!this.has(t)) return !1;
    let n = this.kvMap.get(t);
    return (
      this._vMap !== void 0 && this._vMap.has(n)
        ? (this.kvMap.set(t, this._vMap.get(n)), this._vMap.delete(n))
        : this.kvMap.delete(t),
      !0
    );
  }
  get(t) {
    return this.kvMap.get(t);
  }
  set(t, n) {
    if (this.kvMap.has(t)) {
      let r = this.kvMap.get(t);
      this._vMap === void 0 && (this._vMap = new Map());
      let o = this._vMap;
      for (; o.has(r); ) r = o.get(r);
      o.set(r, n);
    } else this.kvMap.set(t, n);
  }
  forEach(t) {
    for (let [n, r] of this.kvMap)
      if ((t(r, n), this._vMap !== void 0)) {
        let o = this._vMap;
        for (; o.has(r); ) (r = o.get(r)), t(r, n);
      }
  }
};
function P0(e, t) {
  Oe("NgControlFlow");
  let n = E(),
    r = ft(),
    o = n[r] !== pe ? n[r] : -1,
    i = o !== -1 ? Yr(n, Z + o) : void 0,
    s = 0;
  if (ie(n, r, e)) {
    let a = b(null);
    try {
      if ((i !== void 0 && Jl(i, s), e !== -1)) {
        let u = Z + e,
          c = Yr(n, u),
          l = rs(n[D], u),
          d = Vt(c, l.tView.ssrId),
          h = bn(n, l, t, { dehydratedView: d });
        _n(c, h, s, Lt(l, d));
      }
    } finally {
      b(a);
    }
  } else if (i !== void 0) {
    let a = Kl(i, s);
    a !== void 0 && (a[H] = t);
  }
}
var es = class {
  constructor(t, n, r) {
    (this.lContainer = t), (this.$implicit = n), (this.$index = r);
  }
  get $count() {
    return this.lContainer.length - U;
  }
};
function k0(e, t) {
  return t;
}
var ts = class {
  constructor(t, n, r) {
    (this.hasEmptyBlock = t), (this.trackByFn = n), (this.liveCollection = r);
  }
};
function L0(e, t, n, r, o, i, s, a, u, c, l, d, h) {
  Oe("NgControlFlow");
  let f = E(),
    p = k(),
    m = u !== void 0,
    F = E(),
    _ = a ? s.bind(F[te][H]) : s,
    R = new ts(m, _);
  (F[Z + e] = R),
    Wr(f, p, e + 1, t, n, r, o, Be(p.consts, i)),
    m && Wr(f, p, e + 2, u, c, l, d, Be(p.consts, h));
}
var ns = class extends Ji {
  constructor(t, n, r) {
    super(),
      (this.lContainer = t),
      (this.hostLView = n),
      (this.templateTNode = r),
      (this.operationsCounter = void 0),
      (this.needsIndexUpdate = !1);
  }
  get length() {
    return this.lContainer.length - U;
  }
  at(t) {
    return this.getLView(t)[H].$implicit;
  }
  attach(t, n) {
    let r = n[Rt];
    (this.needsIndexUpdate ||= t !== this.length),
      _n(this.lContainer, n, t, Lt(this.templateTNode, r));
  }
  detach(t) {
    return (
      (this.needsIndexUpdate ||= t !== this.length - 1), FD(this.lContainer, t)
    );
  }
  create(t, n) {
    let r = Vt(this.lContainer, this.templateTNode.tView.ssrId),
      o = bn(
        this.hostLView,
        this.templateTNode,
        new es(this.lContainer, n, t),
        { dehydratedView: r },
      );
    return this.operationsCounter?.recordCreate(), o;
  }
  destroy(t) {
    ho(t[D], t), this.operationsCounter?.recordDestroy();
  }
  updateValue(t, n) {
    this.getLView(t)[H].$implicit = n;
  }
  reset() {
    (this.needsIndexUpdate = !1), this.operationsCounter?.reset();
  }
  updateIndexes() {
    if (this.needsIndexUpdate)
      for (let t = 0; t < this.length; t++) this.getLView(t)[H].$index = t;
  }
  getLView(t) {
    return RD(this.lContainer, t);
  }
};
function j0(e) {
  let t = b(null),
    n = ze();
  try {
    let r = E(),
      o = r[D],
      i = r[n],
      s = n + 1,
      a = Yr(r, s);
    if (i.liveCollection === void 0) {
      let c = rs(o, s);
      i.liveCollection = new ns(a, r, c);
    } else i.liveCollection.reset();
    let u = i.liveCollection;
    if ((OD(u, e, i.trackByFn), u.updateIndexes(), i.hasEmptyBlock)) {
      let c = ft(),
        l = u.length === 0;
      if (ie(r, c, l)) {
        let d = n + 2,
          h = Yr(r, d);
        if (l) {
          let f = rs(o, d),
            p = Vt(h, f.tView.ssrId),
            m = bn(r, f, void 0, { dehydratedView: p });
          _n(h, m, 0, Lt(f, p));
        } else Jl(h, 0);
      }
    }
  } finally {
    b(t);
  }
}
function Yr(e, t) {
  return e[t];
}
function FD(e, t) {
  return mn(e, t);
}
function RD(e, t) {
  return Kl(e, t);
}
function rs(e, t) {
  return _s(e, t);
}
function PD(e, t, n, r, o, i) {
  let s = t.consts,
    a = Be(s, o),
    u = Zt(t, e, 2, r, a);
  return (
    qs(t, n, u, Be(s, i)),
    u.attrs !== null && Br(u, u.attrs, !1),
    u.mergedAttrs !== null && Br(u, u.mergedAttrs, !0),
    t.queries !== null && t.queries.elementStart(t, u),
    u
  );
}
function Od(e, t, n, r) {
  let o = E(),
    i = k(),
    s = Z + e,
    a = o[P],
    u = i.firstCreatePass ? PD(s, i, o, t, n, r) : i.data[s],
    c = LD(i, o, u, a, t, e);
  o[s] = c;
  let l = ro(u);
  return (
    dt(u, !0),
    Ll(a, c, u),
    !Xy(u) && so() && po(i, o, c, u),
    bp() === 0 && $e(c, o),
    _p(),
    l && (zs(i, o, u), Us(i, u, o)),
    r !== null && Gs(o, u),
    Od
  );
}
function Fd() {
  let e = $();
  xs() ? Ss() : ((e = e.parent), dt(e, !1));
  let t = e;
  xp(t) && Sp(), Mp();
  let n = k();
  return (
    n.firstCreatePass && (uo(n, e), Cs(e) && n.queries.elementEnd(e)),
    t.classesWithoutHost != null &&
      $p(t) &&
      Ki(n, t, E(), t.classesWithoutHost, !0),
    t.stylesWithoutHost != null &&
      Hp(t) &&
      Ki(n, t, E(), t.stylesWithoutHost, !1),
    Fd
  );
}
function kD(e, t, n, r) {
  return Od(e, t, n, r), Fd(), kD;
}
var LD = (e, t, n, r, o, i) => (ao(!0), xl(r, o, Lp()));
function jD(e, t, n, r, o) {
  let i = t.consts,
    s = Be(i, r),
    a = Zt(t, e, 8, "ng-container", s);
  s !== null && Br(a, s, !0);
  let u = Be(i, o);
  return qs(t, n, a, u), t.queries !== null && t.queries.elementStart(t, a), a;
}
function Rd(e, t, n) {
  let r = E(),
    o = k(),
    i = e + Z,
    s = o.firstCreatePass ? jD(i, o, r, t, n) : o.data[i];
  dt(s, !0);
  let a = BD(o, r, s, e);
  return (
    (r[i] = a),
    so() && po(o, r, a, s),
    $e(a, r),
    ro(s) && (zs(o, r, s), Us(o, s, r)),
    n != null && Gs(r, s),
    Rd
  );
}
function Pd() {
  let e = $(),
    t = k();
  return (
    xs() ? Ss() : ((e = e.parent), dt(e, !1)),
    t.firstCreatePass && (uo(t, e), Cs(e) && t.queries.elementEnd(e)),
    Pd
  );
}
function VD(e, t, n) {
  return Rd(e, t, n), Pd(), VD;
}
var BD = (e, t, n, r) => (ao(!0), Kg(t[P], ""));
function V0() {
  return E();
}
function $D(e, t, n) {
  let r = E(),
    o = ft();
  if (ie(r, o, t)) {
    let i = k(),
      s = En();
    yo(i, s, r, e, t, r[P], n, !0);
  }
  return $D;
}
function HD(e, t, n) {
  let r = E(),
    o = ft();
  if (ie(r, o, t)) {
    let i = k(),
      s = En(),
      a = Ts(i.data),
      u = Yl(a, s, r);
    yo(i, s, r, e, t, u, n, !0);
  }
  return HD;
}
var Qr = "en-US";
var UD = Qr;
function zD(e) {
  typeof e == "string" && (UD = e.toLowerCase().replace(/_/g, "-"));
}
var GD = (e, t, n) => {};
function WD(e, t, n, r) {
  let o = E(),
    i = k(),
    s = $();
  return kd(i, o, o[P], s, e, t, r), WD;
}
function qD(e, t) {
  let n = $(),
    r = E(),
    o = k(),
    i = Ts(o.data),
    s = Yl(i, n, r);
  return kd(o, r, s, n, e, t), qD;
}
function ZD(e, t, n, r) {
  let o = e.cleanup;
  if (o != null)
    for (let i = 0; i < o.length - 1; i += 2) {
      let s = o[i];
      if (s === n && o[i + 1] === r) {
        let a = t[Mr],
          u = o[i + 2];
        return a.length > u ? a[u] : null;
      }
      typeof s == "string" && (i += 2);
    }
  return null;
}
function kd(e, t, n, r, o, i, s) {
  let a = ro(r),
    c = e.firstCreatePass && Zl(e),
    l = t[H],
    d = ql(t),
    h = !0;
  if (r.type & 3 || s) {
    let m = se(r, t),
      F = s ? s(m) : m,
      _ = d.length,
      R = s ? (ae) => s(Ee(ae[r.index])) : r.index,
      Ce = null;
    if ((!s && a && (Ce = ZD(e, t, o, r.index)), Ce !== null)) {
      let ae = Ce.__ngLastListenerFn__ || Ce;
      (ae.__ngNextListenerFn__ = i), (Ce.__ngLastListenerFn__ = i), (h = !1);
    } else {
      (i = Zu(r, t, l, i)), GD(m, o, i);
      let ae = n.listen(F, o, i);
      d.push(i, ae), c && c.push(o, R, _, _ + 1);
    }
  } else i = Zu(r, t, l, i);
  let f = r.outputs,
    p;
  if (h && f !== null && (p = f[o])) {
    let m = p.length;
    if (m)
      for (let F = 0; F < m; F += 2) {
        let _ = p[F],
          R = p[F + 1],
          gt = t[_][R].subscribe(i),
          X = d.length;
        d.push(i, gt), c && c.push(o, r.index, X, -(X + 1));
      }
  }
}
function qu(e, t, n, r) {
  let o = b(null);
  try {
    return De(6, t, n), n(r) !== !1;
  } catch (i) {
    return Ql(e, i), !1;
  } finally {
    De(7, t, n), b(o);
  }
}
function Zu(e, t, n, r) {
  return function o(i) {
    if (i === Function) return r;
    let s = e.componentOffset > -1 ? Ue(e.index, t) : t;
    Qs(s, 5);
    let a = qu(t, n, r, i),
      u = o.__ngNextListenerFn__;
    for (; u; ) (a = qu(t, n, u, i) && a), (u = u.__ngNextListenerFn__);
    return a;
  };
}
function B0(e = 1) {
  return kp(e);
}
function YD(e, t) {
  let n = null,
    r = zh(e);
  for (let o = 0; o < t.length; o++) {
    let i = t[o];
    if (i === "*") {
      n = o;
      continue;
    }
    if (r === null ? gc(e, i, !0) : qh(r, i)) return o;
  }
  return n;
}
function $0(e) {
  let t = E()[te][J];
  if (!t.projection) {
    let n = e ? e.length : 1,
      r = (t.projection = Ph(n, null)),
      o = r.slice(),
      i = t.child;
    for (; i !== null; ) {
      if (i.type !== 128) {
        let s = e ? YD(i, e) : 0;
        s !== null &&
          (o[s] ? (o[s].projectionNext = i) : (r[s] = i), (o[s] = i));
      }
      i = i.next;
    }
  }
}
function H0(e, t = 0, n, r, o, i) {
  let s = E(),
    a = k(),
    u = r ? e + 1 : null;
  u !== null && Wr(s, a, u, r, o, i, null, n);
  let c = Zt(a, Z + e, 16, null, n || null);
  c.projection === null && (c.projection = t), Ss();
  let d = !s[Rt] || Vc();
  s[te][J].projection[c.projection] === null && u !== null
    ? QD(s, a, u)
    : d && (c.flags & 32) !== 32 && cm(a, s, c);
}
function QD(e, t, n) {
  let r = Z + n,
    o = t.data[r],
    i = e[r],
    s = Vt(i, o.tView.ssrId),
    a = bn(e, o, void 0, { dehydratedView: s });
  _n(i, a, 0, Lt(o, s));
}
function KD(e, t, n) {
  return Ld(e, "", t, "", n), KD;
}
function Ld(e, t, n, r, o) {
  let i = E(),
    s = vd(i, t, n, r);
  if (s !== pe) {
    let a = k(),
      u = En();
    yo(a, u, i, e, s, i[P], o, !1);
  }
  return Ld;
}
function U0(e, t, n, r) {
  Ty(e, t, n, r);
}
function z0(e, t, n) {
  Sy(e, t, n);
}
function G0(e) {
  let t = E(),
    n = k(),
    r = zc();
  Ns(r + 1);
  let o = Ks(n, r);
  if (e.dirty && Ip(t) === ((o.metadata.flags & 2) === 2)) {
    if (o.matches === null) e.reset([]);
    else {
      let i = Oy(t, r);
      e.reset(i, dg), e.notifyOnChanges();
    }
    return !0;
  }
  return !1;
}
function W0() {
  return xy(E(), zc());
}
function q0(e) {
  let t = Np();
  return vp(t, Z + e);
}
function Z0(e, t = "") {
  let n = E(),
    r = k(),
    o = e + Z,
    i = r.firstCreatePass ? Zt(r, o, 1, t, null) : r.data[o],
    s = JD(r, n, i, t, e);
  (n[o] = s), so() && po(r, n, s, i), dt(i, !1);
}
var JD = (e, t, n, r, o) => (ao(!0), Yg(t[P], r));
function XD(e) {
  return jd("", e, ""), XD;
}
function jd(e, t, n) {
  let r = E(),
    o = vd(r, e, t, n);
  return o !== pe && jm(r, ze(), o), jd;
}
function ev(e, t, n) {
  let r = k();
  if (r.firstCreatePass) {
    let o = Se(e);
    os(n, r.data, r.blueprint, o, !0), os(t, r.data, r.blueprint, o, !1);
  }
}
function os(e, t, n, r, o) {
  if (((e = q(e)), Array.isArray(e)))
    for (let i = 0; i < e.length; i++) os(e[i], t, n, r, o);
  else {
    let i = k(),
      s = E(),
      a = $(),
      u = Ft(e) ? e : q(e.provide),
      c = _c(e),
      l = a.providerIndexes & 1048575,
      d = a.directiveStart,
      h = a.providerIndexes >> 20;
    if (Ft(e) || !e.multi) {
      let f = new st(c, o, Ge),
        p = ni(u, t, o ? l : l + h, d);
      p === -1
        ? (yi(Ar(a, s), i, u),
          ti(i, e, t.length),
          t.push(u),
          a.directiveStart++,
          a.directiveEnd++,
          o && (a.providerIndexes += 1048576),
          n.push(f),
          s.push(f))
        : ((n[p] = f), (s[p] = f));
    } else {
      let f = ni(u, t, l + h, d),
        p = ni(u, t, l, l + h),
        m = f >= 0 && n[f],
        F = p >= 0 && n[p];
      if ((o && !F) || (!o && !m)) {
        yi(Ar(a, s), i, u);
        let _ = rv(o ? nv : tv, n.length, o, r, c);
        !o && F && (n[p].providerFactory = _),
          ti(i, e, t.length, 0),
          t.push(u),
          a.directiveStart++,
          a.directiveEnd++,
          o && (a.providerIndexes += 1048576),
          n.push(_),
          s.push(_);
      } else {
        let _ = Vd(n[o ? p : f], c, !o && r);
        ti(i, e, f > -1 ? f : p, _);
      }
      !o && r && F && n[p].componentProviders++;
    }
  }
}
function ti(e, t, n, r) {
  let o = Ft(t),
    i = ip(t);
  if (o || i) {
    let u = (i ? q(t.useClass) : t).prototype.ngOnDestroy;
    if (u) {
      let c = e.destroyHooks || (e.destroyHooks = []);
      if (!o && t.multi) {
        let l = c.indexOf(n);
        l === -1 ? c.push(n, [r, u]) : c[l + 1].push(r, u);
      } else c.push(n, u);
    }
  }
}
function Vd(e, t, n) {
  return n && e.componentProviders++, e.multi.push(t) - 1;
}
function ni(e, t, n, r) {
  for (let o = n; o < r; o++) if (t[o] === e) return o;
  return -1;
}
function tv(e, t, n, r) {
  return is(this.multi, []);
}
function nv(e, t, n, r) {
  let o = this.multi,
    i;
  if (this.providerFactory) {
    let s = this.providerFactory.componentProviders,
      a = at(n, n[D], this.providerFactory.index, r);
    (i = a.slice(0, s)), is(o, i);
    for (let u = s; u < a.length; u++) i.push(a[u]);
  } else (i = []), is(o, i);
  return i;
}
function is(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    t.push(r());
  }
  return t;
}
function rv(e, t, n, r, o) {
  let i = new st(e, n, Ge);
  return (
    (i.multi = []),
    (i.index = t),
    (i.componentProviders = 0),
    Vd(i, o, r && !n),
    i
  );
}
function Y0(e, t = []) {
  return (n) => {
    n.providersResolver = (r, o) => ev(r, o ? o(e) : e, t);
  };
}
var ov = (() => {
  let t = class t {
    constructor(r) {
      (this._injector = r), (this.cachedInjectors = new Map());
    }
    getOrCreateStandaloneInjector(r) {
      if (!r.standalone) return null;
      if (!this.cachedInjectors.has(r)) {
        let o = Ec(!1, r.type),
          i =
            o.length > 0
              ? Yy([o], this._injector, `Standalone[${r.type.name}]`)
              : null;
        this.cachedInjectors.set(r, i);
      }
      return this.cachedInjectors.get(r);
    }
    ngOnDestroy() {
      try {
        for (let r of this.cachedInjectors.values()) r !== null && r.destroy();
      } finally {
        this.cachedInjectors.clear();
      }
    }
  };
  t.ɵprov = A({
    token: t,
    providedIn: "environment",
    factory: () => new t(L(Ve)),
  });
  let e = t;
  return e;
})();
function Q0(e) {
  Oe("NgStandalone"),
    (e.getStandaloneInjector = (t) =>
      t.get(ov).getOrCreateStandaloneInjector(e));
}
function K0(e, t, n, r) {
  return iv(E(), Hc(), e, t, n, r);
}
function J0(e, t, n, r, o) {
  return sv(E(), Hc(), e, t, n, r, o);
}
function Bd(e, t) {
  let n = e[t];
  return n === pe ? void 0 : n;
}
function iv(e, t, n, r, o, i) {
  let s = t + n;
  return ie(e, s, o) ? gd(e, s + 1, i ? r.call(i, o) : r(o)) : Bd(e, s + 1);
}
function sv(e, t, n, r, o, i, s) {
  let a = t + n;
  return Jy(e, a, o, i)
    ? gd(e, a + 2, s ? r.call(s, o, i) : r(o, i))
    : Bd(e, a + 2);
}
function X0(e, t) {
  return vo(e, t);
}
var hr = null;
function av(e) {
  (hr !== null &&
    (e.defaultEncapsulation !== hr.defaultEncapsulation ||
      e.preserveWhitespaces !== hr.preserveWhitespaces)) ||
    (hr = e);
}
var ex = (() => {
  let t = class t {
    log(r) {
      console.log(r);
    }
    warn(r) {
      console.warn(r);
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵprov = A({ token: t, factory: t.ɵfac, providedIn: "platform" }));
  let e = t;
  return e;
})();
var uv = new T(""),
  cv = new T(""),
  tx = (() => {
    let t = class t {
      constructor(r, o, i) {
        (this._ngZone = r),
          (this.registry = o),
          (this._isZoneStable = !0),
          (this._callbacks = []),
          (this.taskTrackingZone = null),
          Js || (dv(i), i.addToWindow(o)),
          this._watchAngularEvents(),
          r.run(() => {
            this.taskTrackingZone =
              typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone");
          });
      }
      _watchAngularEvents() {
        this._ngZone.onUnstable.subscribe({
          next: () => {
            this._isZoneStable = !1;
          },
        }),
          this._ngZone.runOutsideAngular(() => {
            this._ngZone.onStable.subscribe({
              next: () => {
                z.assertNotInAngularZone(),
                  queueMicrotask(() => {
                    (this._isZoneStable = !0), this._runCallbacksIfReady();
                  });
              },
            });
          });
      }
      isStable() {
        return this._isZoneStable && !this._ngZone.hasPendingMacrotasks;
      }
      _runCallbacksIfReady() {
        if (this.isStable())
          queueMicrotask(() => {
            for (; this._callbacks.length !== 0; ) {
              let r = this._callbacks.pop();
              clearTimeout(r.timeoutId), r.doneCb();
            }
          });
        else {
          let r = this.getPendingTasks();
          this._callbacks = this._callbacks.filter((o) =>
            o.updateCb && o.updateCb(r) ? (clearTimeout(o.timeoutId), !1) : !0,
          );
        }
      }
      getPendingTasks() {
        return this.taskTrackingZone
          ? this.taskTrackingZone.macroTasks.map((r) => ({
              source: r.source,
              creationLocation: r.creationLocation,
              data: r.data,
            }))
          : [];
      }
      addCallback(r, o, i) {
        let s = -1;
        o &&
          o > 0 &&
          (s = setTimeout(() => {
            (this._callbacks = this._callbacks.filter(
              (a) => a.timeoutId !== s,
            )),
              r();
          }, o)),
          this._callbacks.push({ doneCb: r, timeoutId: s, updateCb: i });
      }
      whenStable(r, o, i) {
        if (i && !this.taskTrackingZone)
          throw new Error(
            'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?',
          );
        this.addCallback(r, o, i), this._runCallbacksIfReady();
      }
      registerApplication(r) {
        this.registry.registerApplication(r, this);
      }
      unregisterApplication(r) {
        this.registry.unregisterApplication(r);
      }
      findProviders(r, o, i) {
        return [];
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(L(z), L(lv), L(cv));
    }),
      (t.ɵprov = A({ token: t, factory: t.ɵfac }));
    let e = t;
    return e;
  })(),
  lv = (() => {
    let t = class t {
      constructor() {
        this._applications = new Map();
      }
      registerApplication(r, o) {
        this._applications.set(r, o);
      }
      unregisterApplication(r) {
        this._applications.delete(r);
      }
      unregisterAllApplications() {
        this._applications.clear();
      }
      getTestability(r) {
        return this._applications.get(r) || null;
      }
      getAllTestabilities() {
        return Array.from(this._applications.values());
      }
      getAllRootElements() {
        return Array.from(this._applications.keys());
      }
      findTestabilityInTree(r, o = !0) {
        return Js?.findTestabilityInTree(this, r, o) ?? null;
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = A({ token: t, factory: t.ɵfac, providedIn: "platform" }));
    let e = t;
    return e;
  })();
function dv(e) {
  Js = e;
}
var Js;
function Xs(e) {
  return !!e && typeof e.then == "function";
}
function $d(e) {
  return !!e && typeof e.subscribe == "function";
}
var fv = new T(""),
  Hd = (() => {
    let t = class t {
      constructor() {
        (this.initialized = !1),
          (this.done = !1),
          (this.donePromise = new Promise((r, o) => {
            (this.resolve = r), (this.reject = o);
          })),
          (this.appInits = w(fv, { optional: !0 }) ?? []);
      }
      runInitializers() {
        if (this.initialized) return;
        let r = [];
        for (let i of this.appInits) {
          let s = i();
          if (Xs(s)) r.push(s);
          else if ($d(s)) {
            let a = new Promise((u, c) => {
              s.subscribe({ complete: u, error: c });
            });
            r.push(a);
          }
        }
        let o = () => {
          (this.done = !0), this.resolve();
        };
        Promise.all(r)
          .then(() => {
            o();
          })
          .catch((i) => {
            this.reject(i);
          }),
          r.length === 0 && o(),
          (this.initialized = !0);
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = A({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })(),
  hv = new T("");
function pv() {
  xa(() => {
    throw new x(600, !1);
  });
}
function gv(e) {
  return e.isBoundToModule;
}
var mv = 10;
function yv(e, t, n) {
  try {
    let r = n();
    return Xs(r)
      ? r.catch((o) => {
          throw (t.runOutsideAngular(() => e.handleError(o)), o);
        })
      : r;
  } catch (r) {
    throw (t.runOutsideAngular(() => e.handleError(r)), r);
  }
}
function Ud(e, t) {
  return Array.isArray(t) ? t.reduce(Ud, e) : ee(ee({}, e), t);
}
var Mn = (() => {
  let t = class t {
    constructor() {
      (this._bootstrapListeners = []),
        (this._runningTick = !1),
        (this._destroyed = !1),
        (this._destroyListeners = []),
        (this._views = []),
        (this.internalErrorHandler = w(cg)),
        (this.afterRenderManager = w(md)),
        (this.zonelessEnabled = w(id)),
        (this.dirtyFlags = 0),
        (this.deferredDirtyFlags = 0),
        (this.externalTestViews = new Set()),
        (this.beforeRender = new ne()),
        (this.afterTick = new ne()),
        (this.componentTypes = []),
        (this.components = []),
        (this.isStable = w(wn).hasPendingTasks.pipe(_e((r) => !r))),
        (this._injector = w(Ve));
    }
    get allViews() {
      return [...this.externalTestViews.keys(), ...this._views];
    }
    get destroyed() {
      return this._destroyed;
    }
    whenStable() {
      let r;
      return new Promise((o) => {
        r = this.isStable.subscribe({
          next: (i) => {
            i && o();
          },
        });
      }).finally(() => {
        r.unsubscribe();
      });
    }
    get injector() {
      return this._injector;
    }
    bootstrap(r, o) {
      let i = r instanceof jr;
      if (!this._injector.get(Hd).done) {
        let f = !i && Xh(r),
          p = !1;
        throw new x(405, p);
      }
      let a;
      i ? (a = r) : (a = this._injector.get($t).resolveComponentFactory(r)),
        this.componentTypes.push(a.componentType);
      let u = gv(a) ? void 0 : this._injector.get(He),
        c = o || a.selector,
        l = a.create(he.NULL, [], c, u),
        d = l.location.nativeElement,
        h = l.injector.get(uv, null);
      return (
        h?.registerApplication(d),
        l.onDestroy(() => {
          this.detachView(l.hostView),
            Ir(this.components, l),
            h?.unregisterApplication(d);
        }),
        this._loadComponent(l),
        l
      );
    }
    tick() {
      this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick();
    }
    _tick() {
      if (this._runningTick) throw new x(101, !1);
      let r = b(null);
      try {
        (this._runningTick = !0), this.synchronize();
      } catch (o) {
        this.internalErrorHandler(o);
      } finally {
        (this._runningTick = !1), b(r), this.afterTick.next();
      }
    }
    synchronize() {
      let r = null;
      this._injector.destroyed ||
        (r = this._injector.get(Vr, null, { optional: !0 })),
        (this.dirtyFlags |= this.deferredDirtyFlags),
        (this.deferredDirtyFlags = 0);
      let o = 0;
      for (; this.dirtyFlags !== 0 && o++ < mv; ) this.synchronizeOnce(r);
    }
    synchronizeOnce(r) {
      if (
        ((this.dirtyFlags |= this.deferredDirtyFlags),
        (this.deferredDirtyFlags = 0),
        this.dirtyFlags & 7)
      ) {
        let o = !!(this.dirtyFlags & 1);
        (this.dirtyFlags &= -8),
          (this.dirtyFlags |= 8),
          this.beforeRender.next(o);
        for (let { _lView: i, notifyErrorHandler: s } of this._views)
          Dv(i, s, o, this.zonelessEnabled);
        if (
          ((this.dirtyFlags &= -5),
          this.syncDirtyFlagsWithViews(),
          this.dirtyFlags & 7)
        )
          return;
      } else r?.begin?.(), r?.end?.();
      this.dirtyFlags & 8 &&
        ((this.dirtyFlags &= -9), this.afterRenderManager.execute()),
        this.syncDirtyFlagsWithViews();
    }
    syncDirtyFlagsWithViews() {
      if (this.allViews.some(({ _lView: r }) => oo(r))) {
        this.dirtyFlags |= 2;
        return;
      } else this.dirtyFlags &= -8;
    }
    attachView(r) {
      let o = r;
      this._views.push(o), o.attachToAppRef(this);
    }
    detachView(r) {
      let o = r;
      Ir(this._views, o), o.detachFromAppRef();
    }
    _loadComponent(r) {
      this.attachView(r.hostView), this.tick(), this.components.push(r);
      let o = this._injector.get(hv, []);
      [...this._bootstrapListeners, ...o].forEach((i) => i(r));
    }
    ngOnDestroy() {
      if (!this._destroyed)
        try {
          this._destroyListeners.forEach((r) => r()),
            this._views.slice().forEach((r) => r.destroy());
        } finally {
          (this._destroyed = !0),
            (this._views = []),
            (this._bootstrapListeners = []),
            (this._destroyListeners = []);
        }
    }
    onDestroy(r) {
      return (
        this._destroyListeners.push(r), () => Ir(this._destroyListeners, r)
      );
    }
    destroy() {
      if (this._destroyed) throw new x(406, !1);
      let r = this._injector;
      r.destroy && !r.destroyed && r.destroy();
    }
    get viewCount() {
      return this._views.length;
    }
    warnIfDestroyed() {}
  };
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵprov = A({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let e = t;
  return e;
})();
function Ir(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function Dv(e, t, n, r) {
  if (!n && !oo(e)) return;
  td(e, t, n && !r ? 0 : 1);
}
var ss = class {
    constructor(t, n) {
      (this.ngModuleFactory = t), (this.componentFactories = n);
    }
  },
  nx = (() => {
    let t = class t {
      compileModuleSync(r) {
        return new Gr(r);
      }
      compileModuleAsync(r) {
        return Promise.resolve(this.compileModuleSync(r));
      }
      compileModuleAndAllComponentsSync(r) {
        let o = this.compileModuleSync(r),
          i = Dc(r),
          s = _l(i.declarations).reduce((a, u) => {
            let c = je(u);
            return c && a.push(new Ht(c)), a;
          }, []);
        return new ss(o, s);
      }
      compileModuleAndAllComponentsAsync(r) {
        return Promise.resolve(this.compileModuleAndAllComponentsSync(r));
      }
      clearCache() {}
      clearCacheFor(r) {}
      getModuleId(r) {}
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = A({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })(),
  vv = new T("");
function Iv(e, t, n) {
  let r = new Gr(n);
  return Promise.resolve(r);
}
function Yu(e) {
  for (let t = e.length - 1; t >= 0; t--) if (e[t] !== void 0) return e[t];
}
var Ev = (() => {
  let t = class t {
    constructor() {
      (this.zone = w(z)),
        (this.changeDetectionScheduler = w(Bt)),
        (this.applicationRef = w(Mn));
    }
    initialize() {
      this._onMicrotaskEmptySubscription ||
        (this._onMicrotaskEmptySubscription =
          this.zone.onMicrotaskEmpty.subscribe({
            next: () => {
              this.changeDetectionScheduler.runningTick ||
                this.zone.run(() => {
                  this.applicationRef.tick();
                });
            },
          }));
    }
    ngOnDestroy() {
      this._onMicrotaskEmptySubscription?.unsubscribe();
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵprov = A({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let e = t;
  return e;
})();
function wv({
  ngZoneFactory: e,
  ignoreChangesOutsideZone: t,
  scheduleInRootZone: n,
}) {
  return (
    (e ??= () => new z(ue(ee({}, zd()), { scheduleInRootZone: n }))),
    [
      { provide: z, useFactory: e },
      {
        provide: br,
        multi: !0,
        useFactory: () => {
          let r = w(Ev, { optional: !0 });
          return () => r.initialize();
        },
      },
      {
        provide: br,
        multi: !0,
        useFactory: () => {
          let r = w(Cv);
          return () => {
            r.initialize();
          };
        },
      },
      t === !0 ? { provide: sd, useValue: !0 } : [],
      { provide: ad, useValue: n ?? ul },
    ]
  );
}
function zd(e) {
  return {
    enableLongStackTrace: !1,
    shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1,
    shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1,
  };
}
var Cv = (() => {
  let t = class t {
    constructor() {
      (this.subscription = new j()),
        (this.initialized = !1),
        (this.zone = w(z)),
        (this.pendingTasks = w(wn));
    }
    initialize() {
      if (this.initialized) return;
      this.initialized = !0;
      let r = null;
      !this.zone.isStable &&
        !this.zone.hasPendingMacrotasks &&
        !this.zone.hasPendingMicrotasks &&
        (r = this.pendingTasks.add()),
        this.zone.runOutsideAngular(() => {
          this.subscription.add(
            this.zone.onStable.subscribe(() => {
              z.assertNotInAngularZone(),
                queueMicrotask(() => {
                  r !== null &&
                    !this.zone.hasPendingMacrotasks &&
                    !this.zone.hasPendingMicrotasks &&
                    (this.pendingTasks.remove(r), (r = null));
                });
            }),
          );
        }),
        this.subscription.add(
          this.zone.onUnstable.subscribe(() => {
            z.assertInAngularZone(), (r ??= this.pendingTasks.add());
          }),
        );
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵprov = A({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let e = t;
  return e;
})();
var bv = (() => {
  let t = class t {
    constructor() {
      (this.appRef = w(Mn)),
        (this.taskService = w(wn)),
        (this.ngZone = w(z)),
        (this.zonelessEnabled = w(id)),
        (this.disableScheduling = w(sd, { optional: !0 }) ?? !1),
        (this.zoneIsDefined = typeof Zone < "u" && !!Zone.root.run),
        (this.schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }]),
        (this.subscriptions = new j()),
        (this.angularZoneId = this.zoneIsDefined
          ? this.ngZone._inner?.get(Fr)
          : null),
        (this.scheduleInRootZone =
          !this.zonelessEnabled &&
          this.zoneIsDefined &&
          (w(ad, { optional: !0 }) ?? !1)),
        (this.cancelScheduledCallback = null),
        (this.useMicrotaskScheduler = !1),
        (this.runningTick = !1),
        (this.pendingRenderTaskId = null),
        this.subscriptions.add(
          this.appRef.afterTick.subscribe(() => {
            this.runningTick || this.cleanup();
          }),
        ),
        this.subscriptions.add(
          this.ngZone.onUnstable.subscribe(() => {
            this.runningTick || this.cleanup();
          }),
        ),
        (this.disableScheduling ||=
          !this.zonelessEnabled &&
          (this.ngZone instanceof Rr || !this.zoneIsDefined));
    }
    notify(r) {
      if (!this.zonelessEnabled && r === 5) return;
      switch (r) {
        case 0: {
          this.appRef.dirtyFlags |= 2;
          break;
        }
        case 3:
        case 2:
        case 4:
        case 5:
        case 1: {
          this.appRef.dirtyFlags |= 4;
          break;
        }
        case 7: {
          this.appRef.deferredDirtyFlags |= 8;
          break;
        }
        case 9:
        case 8:
        case 6:
        case 10:
        default:
          this.appRef.dirtyFlags |= 8;
      }
      if (!this.shouldScheduleTick()) return;
      let o = this.useMicrotaskScheduler ? bu : cl;
      (this.pendingRenderTaskId = this.taskService.add()),
        this.scheduleInRootZone
          ? (this.cancelScheduledCallback = Zone.root.run(() =>
              o(() => this.tick()),
            ))
          : (this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() =>
              o(() => this.tick()),
            ));
    }
    shouldScheduleTick() {
      return !(
        this.disableScheduling ||
        this.pendingRenderTaskId !== null ||
        this.runningTick ||
        this.appRef._runningTick ||
        (!this.zonelessEnabled &&
          this.zoneIsDefined &&
          Zone.current.get(Fr + this.angularZoneId))
      );
    }
    tick() {
      if (this.runningTick || this.appRef.destroyed) return;
      !this.zonelessEnabled &&
        this.appRef.dirtyFlags & 7 &&
        (this.appRef.dirtyFlags |= 1);
      let r = this.taskService.add();
      try {
        this.ngZone.run(
          () => {
            (this.runningTick = !0), this.appRef._tick();
          },
          void 0,
          this.schedulerTickApplyArgs,
        );
      } catch (o) {
        throw (this.taskService.remove(r), o);
      } finally {
        this.cleanup();
      }
      (this.useMicrotaskScheduler = !0),
        bu(() => {
          (this.useMicrotaskScheduler = !1), this.taskService.remove(r);
        });
    }
    ngOnDestroy() {
      this.subscriptions.unsubscribe(), this.cleanup();
    }
    cleanup() {
      if (
        ((this.runningTick = !1),
        this.cancelScheduledCallback?.(),
        (this.cancelScheduledCallback = null),
        this.pendingRenderTaskId !== null)
      ) {
        let r = this.pendingRenderTaskId;
        (this.pendingRenderTaskId = null), this.taskService.remove(r);
      }
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵprov = A({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let e = t;
  return e;
})();
function _v() {
  return (typeof $localize < "u" && $localize.locale) || Qr;
}
var ea = new T("", {
  providedIn: "root",
  factory: () => w(ea, M.Optional | M.SkipSelf) || _v(),
});
var ta = new T("");
function pr(e) {
  return !!e.platformInjector;
}
function Mv(e) {
  let t = pr(e) ? e.r3Injector : e.moduleRef.injector,
    n = t.get(z);
  return n.run(() => {
    pr(e)
      ? e.r3Injector.resolveInjectorInitializers()
      : e.moduleRef.resolveInjectorInitializers();
    let r = t.get(ut, null),
      o;
    if (
      (n.runOutsideAngular(() => {
        o = n.onError.subscribe({
          next: (i) => {
            r.handleError(i);
          },
        });
      }),
      pr(e))
    ) {
      let i = () => t.destroy(),
        s = e.platformInjector.get(ta);
      s.add(i),
        t.onDestroy(() => {
          o.unsubscribe(), s.delete(i);
        });
    } else
      e.moduleRef.onDestroy(() => {
        Ir(e.allPlatformModules, e.moduleRef), o.unsubscribe();
      });
    return yv(r, n, () => {
      let i = t.get(Hd);
      return (
        i.runInitializers(),
        i.donePromise.then(() => {
          let s = t.get(ea, Qr);
          if ((zD(s || Qr), pr(e))) {
            let a = t.get(Mn);
            return (
              e.rootComponent !== void 0 && a.bootstrap(e.rootComponent), a
            );
          } else return xv(e.moduleRef, e.allPlatformModules), e.moduleRef;
        })
      );
    });
  });
}
function xv(e, t) {
  let n = e.injector.get(Mn);
  if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach((r) => n.bootstrap(r));
  else if (e.instance.ngDoBootstrap) e.instance.ngDoBootstrap(n);
  else throw new x(-403, !1);
  t.push(e);
}
var Gd = (() => {
    let t = class t {
      constructor(r) {
        (this._injector = r),
          (this._modules = []),
          (this._destroyListeners = []),
          (this._destroyed = !1);
      }
      bootstrapModuleFactory(r, o) {
        let i = o?.scheduleInRootZone,
          s = () =>
            ug(
              o?.ngZone,
              ue(
                ee(
                  {},
                  zd({
                    eventCoalescing: o?.ngZoneEventCoalescing,
                    runCoalescing: o?.ngZoneRunCoalescing,
                  }),
                ),
                { scheduleInRootZone: i },
              ),
            ),
          a = o?.ignoreChangesOutsideZone,
          u = [
            wv({ ngZoneFactory: s, ignoreChangesOutsideZone: a }),
            { provide: Bt, useExisting: bv },
          ],
          c = Zy(r.moduleType, this.injector, u);
        return Mv({ moduleRef: c, allPlatformModules: this._modules });
      }
      bootstrapModule(r, o = []) {
        let i = Ud({}, o);
        return Iv(this.injector, i, r).then((s) =>
          this.bootstrapModuleFactory(s, i),
        );
      }
      onDestroy(r) {
        this._destroyListeners.push(r);
      }
      get injector() {
        return this._injector;
      }
      destroy() {
        if (this._destroyed) throw new x(404, !1);
        this._modules.slice().forEach((o) => o.destroy()),
          this._destroyListeners.forEach((o) => o());
        let r = this._injector.get(ta, null);
        r && (r.forEach((o) => o()), r.clear()), (this._destroyed = !0);
      }
      get destroyed() {
        return this._destroyed;
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(L(he));
    }),
      (t.ɵprov = A({ token: t, factory: t.ɵfac, providedIn: "platform" }));
    let e = t;
    return e;
  })(),
  cn = null,
  Wd = new T("");
function Sv(e) {
  if (cn && !cn.get(Wd, !1)) throw new x(400, !1);
  pv(), (cn = e);
  let t = e.get(Gd);
  return Ov(e), t;
}
function Tv(e, t, n = []) {
  let r = `Platform: ${t}`,
    o = new T(r);
  return (i = []) => {
    let s = qd();
    if (!s || s.injector.get(Wd, !1)) {
      let a = [...n, ...i, { provide: o, useValue: !0 }];
      e ? e(a) : Sv(Nv(a, r));
    }
    return Av(o);
  };
}
function Nv(e = [], t) {
  return he.create({
    name: t,
    providers: [
      { provide: bc, useValue: "platform" },
      { provide: ta, useValue: new Set([() => (cn = null)]) },
      ...e,
    ],
  });
}
function Av(e) {
  let t = qd();
  if (!t) throw new x(401, !1);
  return t;
}
function qd() {
  return cn?.get(Gd) ?? null;
}
function Ov(e) {
  e.get(yg, null)?.forEach((n) => n());
}
var na = (() => {
  let t = class t {};
  t.__NG_ELEMENT_ID__ = Fv;
  let e = t;
  return e;
})();
function Fv(e) {
  return Rv($(), E(), (e & 16) === 16);
}
function Rv(e, t, n) {
  if (no(e) && !n) {
    let r = Ue(e.index, t);
    return new ct(r, r);
  } else if (e.type & 175) {
    let r = t[te];
    return new ct(r, t);
  }
  return null;
}
var as = class {
    constructor() {}
    supports(t) {
      return pd(t);
    }
    create(t) {
      return new us(t);
    }
  },
  Pv = (e, t) => t,
  us = class {
    constructor(t) {
      (this.length = 0),
        (this._linkedRecords = null),
        (this._unlinkedRecords = null),
        (this._previousItHead = null),
        (this._itHead = null),
        (this._itTail = null),
        (this._additionsHead = null),
        (this._additionsTail = null),
        (this._movesHead = null),
        (this._movesTail = null),
        (this._removalsHead = null),
        (this._removalsTail = null),
        (this._identityChangesHead = null),
        (this._identityChangesTail = null),
        (this._trackByFn = t || Pv);
    }
    forEachItem(t) {
      let n;
      for (n = this._itHead; n !== null; n = n._next) t(n);
    }
    forEachOperation(t) {
      let n = this._itHead,
        r = this._removalsHead,
        o = 0,
        i = null;
      for (; n || r; ) {
        let s = !r || (n && n.currentIndex < Qu(r, o, i)) ? n : r,
          a = Qu(s, o, i),
          u = s.currentIndex;
        if (s === r) o--, (r = r._nextRemoved);
        else if (((n = n._next), s.previousIndex == null)) o++;
        else {
          i || (i = []);
          let c = a - o,
            l = u - o;
          if (c != l) {
            for (let h = 0; h < c; h++) {
              let f = h < i.length ? i[h] : (i[h] = 0),
                p = f + h;
              l <= p && p < c && (i[h] = f + 1);
            }
            let d = s.previousIndex;
            i[d] = l - c;
          }
        }
        a !== u && t(s, a, u);
      }
    }
    forEachPreviousItem(t) {
      let n;
      for (n = this._previousItHead; n !== null; n = n._nextPrevious) t(n);
    }
    forEachAddedItem(t) {
      let n;
      for (n = this._additionsHead; n !== null; n = n._nextAdded) t(n);
    }
    forEachMovedItem(t) {
      let n;
      for (n = this._movesHead; n !== null; n = n._nextMoved) t(n);
    }
    forEachRemovedItem(t) {
      let n;
      for (n = this._removalsHead; n !== null; n = n._nextRemoved) t(n);
    }
    forEachIdentityChange(t) {
      let n;
      for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange)
        t(n);
    }
    diff(t) {
      if ((t == null && (t = []), !pd(t))) throw new x(900, !1);
      return this.check(t) ? this : null;
    }
    onDestroy() {}
    check(t) {
      this._reset();
      let n = this._itHead,
        r = !1,
        o,
        i,
        s;
      if (Array.isArray(t)) {
        this.length = t.length;
        for (let a = 0; a < this.length; a++)
          (i = t[a]),
            (s = this._trackByFn(a, i)),
            n === null || !Object.is(n.trackById, s)
              ? ((n = this._mismatch(n, i, s, a)), (r = !0))
              : (r && (n = this._verifyReinsertion(n, i, s, a)),
                Object.is(n.item, i) || this._addIdentityChange(n, i)),
            (n = n._next);
      } else
        (o = 0),
          Qy(t, (a) => {
            (s = this._trackByFn(o, a)),
              n === null || !Object.is(n.trackById, s)
                ? ((n = this._mismatch(n, a, s, o)), (r = !0))
                : (r && (n = this._verifyReinsertion(n, a, s, o)),
                  Object.is(n.item, a) || this._addIdentityChange(n, a)),
              (n = n._next),
              o++;
          }),
          (this.length = o);
      return this._truncate(n), (this.collection = t), this.isDirty;
    }
    get isDirty() {
      return (
        this._additionsHead !== null ||
        this._movesHead !== null ||
        this._removalsHead !== null ||
        this._identityChangesHead !== null
      );
    }
    _reset() {
      if (this.isDirty) {
        let t;
        for (t = this._previousItHead = this._itHead; t !== null; t = t._next)
          t._nextPrevious = t._next;
        for (t = this._additionsHead; t !== null; t = t._nextAdded)
          t.previousIndex = t.currentIndex;
        for (
          this._additionsHead = this._additionsTail = null, t = this._movesHead;
          t !== null;
          t = t._nextMoved
        )
          t.previousIndex = t.currentIndex;
        (this._movesHead = this._movesTail = null),
          (this._removalsHead = this._removalsTail = null),
          (this._identityChangesHead = this._identityChangesTail = null);
      }
    }
    _mismatch(t, n, r, o) {
      let i;
      return (
        t === null ? (i = this._itTail) : ((i = t._prev), this._remove(t)),
        (t =
          this._unlinkedRecords === null
            ? null
            : this._unlinkedRecords.get(r, null)),
        t !== null
          ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
            this._reinsertAfter(t, i, o))
          : ((t =
              this._linkedRecords === null
                ? null
                : this._linkedRecords.get(r, o)),
            t !== null
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._moveAfter(t, i, o))
              : (t = this._addAfter(new cs(n, r), i, o))),
        t
      );
    }
    _verifyReinsertion(t, n, r, o) {
      let i =
        this._unlinkedRecords === null
          ? null
          : this._unlinkedRecords.get(r, null);
      return (
        i !== null
          ? (t = this._reinsertAfter(i, t._prev, o))
          : t.currentIndex != o &&
            ((t.currentIndex = o), this._addToMoves(t, o)),
        t
      );
    }
    _truncate(t) {
      for (; t !== null; ) {
        let n = t._next;
        this._addToRemovals(this._unlink(t)), (t = n);
      }
      this._unlinkedRecords !== null && this._unlinkedRecords.clear(),
        this._additionsTail !== null && (this._additionsTail._nextAdded = null),
        this._movesTail !== null && (this._movesTail._nextMoved = null),
        this._itTail !== null && (this._itTail._next = null),
        this._removalsTail !== null && (this._removalsTail._nextRemoved = null),
        this._identityChangesTail !== null &&
          (this._identityChangesTail._nextIdentityChange = null);
    }
    _reinsertAfter(t, n, r) {
      this._unlinkedRecords !== null && this._unlinkedRecords.remove(t);
      let o = t._prevRemoved,
        i = t._nextRemoved;
      return (
        o === null ? (this._removalsHead = i) : (o._nextRemoved = i),
        i === null ? (this._removalsTail = o) : (i._prevRemoved = o),
        this._insertAfter(t, n, r),
        this._addToMoves(t, r),
        t
      );
    }
    _moveAfter(t, n, r) {
      return (
        this._unlink(t), this._insertAfter(t, n, r), this._addToMoves(t, r), t
      );
    }
    _addAfter(t, n, r) {
      return (
        this._insertAfter(t, n, r),
        this._additionsTail === null
          ? (this._additionsTail = this._additionsHead = t)
          : (this._additionsTail = this._additionsTail._nextAdded = t),
        t
      );
    }
    _insertAfter(t, n, r) {
      let o = n === null ? this._itHead : n._next;
      return (
        (t._next = o),
        (t._prev = n),
        o === null ? (this._itTail = t) : (o._prev = t),
        n === null ? (this._itHead = t) : (n._next = t),
        this._linkedRecords === null && (this._linkedRecords = new Kr()),
        this._linkedRecords.put(t),
        (t.currentIndex = r),
        t
      );
    }
    _remove(t) {
      return this._addToRemovals(this._unlink(t));
    }
    _unlink(t) {
      this._linkedRecords !== null && this._linkedRecords.remove(t);
      let n = t._prev,
        r = t._next;
      return (
        n === null ? (this._itHead = r) : (n._next = r),
        r === null ? (this._itTail = n) : (r._prev = n),
        t
      );
    }
    _addToMoves(t, n) {
      return (
        t.previousIndex === n ||
          (this._movesTail === null
            ? (this._movesTail = this._movesHead = t)
            : (this._movesTail = this._movesTail._nextMoved = t)),
        t
      );
    }
    _addToRemovals(t) {
      return (
        this._unlinkedRecords === null && (this._unlinkedRecords = new Kr()),
        this._unlinkedRecords.put(t),
        (t.currentIndex = null),
        (t._nextRemoved = null),
        this._removalsTail === null
          ? ((this._removalsTail = this._removalsHead = t),
            (t._prevRemoved = null))
          : ((t._prevRemoved = this._removalsTail),
            (this._removalsTail = this._removalsTail._nextRemoved = t)),
        t
      );
    }
    _addIdentityChange(t, n) {
      return (
        (t.item = n),
        this._identityChangesTail === null
          ? (this._identityChangesTail = this._identityChangesHead = t)
          : (this._identityChangesTail =
              this._identityChangesTail._nextIdentityChange =
                t),
        t
      );
    }
  },
  cs = class {
    constructor(t, n) {
      (this.item = t),
        (this.trackById = n),
        (this.currentIndex = null),
        (this.previousIndex = null),
        (this._nextPrevious = null),
        (this._prev = null),
        (this._next = null),
        (this._prevDup = null),
        (this._nextDup = null),
        (this._prevRemoved = null),
        (this._nextRemoved = null),
        (this._nextAdded = null),
        (this._nextMoved = null),
        (this._nextIdentityChange = null);
    }
  },
  ls = class {
    constructor() {
      (this._head = null), (this._tail = null);
    }
    add(t) {
      this._head === null
        ? ((this._head = this._tail = t),
          (t._nextDup = null),
          (t._prevDup = null))
        : ((this._tail._nextDup = t),
          (t._prevDup = this._tail),
          (t._nextDup = null),
          (this._tail = t));
    }
    get(t, n) {
      let r;
      for (r = this._head; r !== null; r = r._nextDup)
        if ((n === null || n <= r.currentIndex) && Object.is(r.trackById, t))
          return r;
      return null;
    }
    remove(t) {
      let n = t._prevDup,
        r = t._nextDup;
      return (
        n === null ? (this._head = r) : (n._nextDup = r),
        r === null ? (this._tail = n) : (r._prevDup = n),
        this._head === null
      );
    }
  },
  Kr = class {
    constructor() {
      this.map = new Map();
    }
    put(t) {
      let n = t.trackById,
        r = this.map.get(n);
      r || ((r = new ls()), this.map.set(n, r)), r.add(t);
    }
    get(t, n) {
      let r = t,
        o = this.map.get(r);
      return o ? o.get(t, n) : null;
    }
    remove(t) {
      let n = t.trackById;
      return this.map.get(n).remove(t) && this.map.delete(n), t;
    }
    get isEmpty() {
      return this.map.size === 0;
    }
    clear() {
      this.map.clear();
    }
  };
function Qu(e, t, n) {
  let r = e.previousIndex;
  if (r === null) return r;
  let o = 0;
  return n && r < n.length && (o = n[r]), r + t + o;
}
function Ku() {
  return new ra([new as()]);
}
var ra = (() => {
  let t = class t {
    constructor(r) {
      this.factories = r;
    }
    static create(r, o) {
      if (o != null) {
        let i = o.factories.slice();
        r = r.concat(i);
      }
      return new t(r);
    }
    static extend(r) {
      return {
        provide: t,
        useFactory: (o) => t.create(r, o || Ku()),
        deps: [[t, new Oh(), new Ah()]],
      };
    }
    find(r) {
      let o = this.factories.find((i) => i.supports(r));
      if (o != null) return o;
      throw new x(901, !1);
    }
  };
  t.ɵprov = A({ token: t, providedIn: "root", factory: Ku });
  let e = t;
  return e;
})();
var rx = Tv(null, "core", []),
  ox = (() => {
    let t = class t {
      constructor(r) {}
    };
    (t.ɵfac = function (o) {
      return new (o || t)(L(Mn));
    }),
      (t.ɵmod = ys({ type: t })),
      (t.ɵinj = hs({}));
    let e = t;
    return e;
  })();
var ix = new T("");
function kv(e) {
  return typeof e == "boolean" ? e : e != null && e !== "false";
}
function Lv(e, t = NaN) {
  return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t;
}
function sx(e, t) {
  Oe("NgSignals");
  let n = ba(e);
  return t?.equal && (n[ge].equal = t.equal), n;
}
function jv(e) {
  let t = b(null);
  try {
    return e();
  } finally {
    b(t);
  }
}
var Vv = new T("", { providedIn: "root", factory: () => w(Bv) }),
  Bv = (() => {
    let t = class t {};
    t.ɵprov = A({ token: t, providedIn: "root", factory: () => new ds() });
    let e = t;
    return e;
  })(),
  ds = class {
    constructor() {
      (this.queuedEffectCount = 0),
        (this.queues = new Map()),
        (this.pendingTasks = w(wn)),
        (this.taskId = null);
    }
    scheduleEffect(t) {
      if ((this.enqueue(t), this.taskId === null)) {
        let n = (this.taskId = this.pendingTasks.add());
        queueMicrotask(() => {
          this.flush(), this.pendingTasks.remove(n), (this.taskId = null);
        });
      }
    }
    enqueue(t) {
      let n = t.creationZone;
      this.queues.has(n) || this.queues.set(n, new Set());
      let r = this.queues.get(n);
      r.has(t) || (this.queuedEffectCount++, r.add(t));
    }
    flush() {
      for (; this.queuedEffectCount > 0; )
        for (let [t, n] of this.queues)
          t === null ? this.flushQueue(n) : t.run(() => this.flushQueue(n));
    }
    flushQueue(t) {
      for (let n of t) t.delete(n), this.queuedEffectCount--, n.run();
    }
  },
  fs = class {
    constructor(t, n, r, o, i, s) {
      (this.scheduler = t),
        (this.effectFn = n),
        (this.creationZone = r),
        (this.injector = i),
        (this.watcher = Aa(
          (a) => this.runEffect(a),
          () => this.schedule(),
          s,
        )),
        (this.unregisterOnDestroy = o?.onDestroy(() => this.destroy()));
    }
    runEffect(t) {
      try {
        this.effectFn(t);
      } catch (n) {
        this.injector.get(ut, null, { optional: !0 })?.handleError(n);
      }
    }
    run() {
      this.watcher.run();
    }
    schedule() {
      this.scheduler.scheduleEffect(this);
    }
    destroy() {
      this.watcher.destroy(), this.unregisterOnDestroy?.();
    }
  };
function $v(e, t) {
  Oe("NgSignals"), !t?.injector && Es($v);
  let n = t?.injector ?? w(he),
    r = t?.manualCleanup !== !0 ? n.get(co) : null,
    o = new fs(
      n.get(Vv),
      e,
      typeof Zone > "u" ? null : Zone.current,
      r,
      n,
      t?.allowSignalWrites ?? !1,
    ),
    i = n.get(na, null, { optional: !0 });
  return (
    !i || !(i._lView[y] & 8)
      ? o.watcher.notify()
      : (i._lView[mr] ??= []).push(o.watcher.notify),
    o
  );
}
function ax(e) {
  let t = je(e);
  if (!t) return null;
  let n = new Ht(t);
  return {
    get selector() {
      return n.selector;
    },
    get type() {
      return n.componentType;
    },
    get inputs() {
      return n.inputs;
    },
    get outputs() {
      return n.outputs;
    },
    get ngContentSelectors() {
      return n.ngContentSelectors;
    },
    get isStandalone() {
      return t.standalone;
    },
    get isSignal() {
      return t.signals;
    },
  };
}
var Xd = null;
function ia() {
  return Xd;
}
function Rx(e) {
  Xd ??= e;
}
var Zd = class {};
var ca = new T(""),
  la = (() => {
    let t = class t {
      historyGo(r) {
        throw new Error("");
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = A({ token: t, factory: () => w(Uv), providedIn: "platform" }));
    let e = t;
    return e;
  })(),
  Px = new T(""),
  Uv = (() => {
    let t = class t extends la {
      constructor() {
        super(),
          (this._doc = w(ca)),
          (this._location = window.location),
          (this._history = window.history);
      }
      getBaseHrefFromDOM() {
        return ia().getBaseHref(this._doc);
      }
      onPopState(r) {
        let o = ia().getGlobalEventTarget(this._doc, "window");
        return (
          o.addEventListener("popstate", r, !1),
          () => o.removeEventListener("popstate", r)
        );
      }
      onHashChange(r) {
        let o = ia().getGlobalEventTarget(this._doc, "window");
        return (
          o.addEventListener("hashchange", r, !1),
          () => o.removeEventListener("hashchange", r)
        );
      }
      get href() {
        return this._location.href;
      }
      get protocol() {
        return this._location.protocol;
      }
      get hostname() {
        return this._location.hostname;
      }
      get port() {
        return this._location.port;
      }
      get pathname() {
        return this._location.pathname;
      }
      get search() {
        return this._location.search;
      }
      get hash() {
        return this._location.hash;
      }
      set pathname(r) {
        this._location.pathname = r;
      }
      pushState(r, o, i) {
        this._history.pushState(r, o, i);
      }
      replaceState(r, o, i) {
        this._history.replaceState(r, o, i);
      }
      forward() {
        this._history.forward();
      }
      back() {
        this._history.back();
      }
      historyGo(r = 0) {
        this._history.go(r);
      }
      getState() {
        return this._history.state;
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = A({
        token: t,
        factory: () => new t(),
        providedIn: "platform",
      }));
    let e = t;
    return e;
  })();
function da(e, t) {
  if (e.length == 0) return t;
  if (t.length == 0) return e;
  let n = 0;
  return (
    e.endsWith("/") && n++,
    t.startsWith("/") && n++,
    n == 2 ? e + t.substring(1) : n == 1 ? e + t : e + "/" + t
  );
}
function Yd(e) {
  let t = e.match(/#|\?|$/),
    n = (t && t.index) || e.length,
    r = n - (e[n - 1] === "/" ? 1 : 0);
  return e.slice(0, r) + e.slice(n);
}
function Fe(e) {
  return e && e[0] !== "?" ? "?" + e : e;
}
var Io = (() => {
    let t = class t {
      historyGo(r) {
        throw new Error("");
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = A({ token: t, factory: () => w(zv), providedIn: "root" }));
    let e = t;
    return e;
  })(),
  ef = new T(""),
  zv = (() => {
    let t = class t extends Io {
      constructor(r, o) {
        super(),
          (this._platformLocation = r),
          (this._removeListenerFns = []),
          (this._baseHref =
            o ??
            this._platformLocation.getBaseHrefFromDOM() ??
            w(ca).location?.origin ??
            "");
      }
      ngOnDestroy() {
        for (; this._removeListenerFns.length; )
          this._removeListenerFns.pop()();
      }
      onPopState(r) {
        this._removeListenerFns.push(
          this._platformLocation.onPopState(r),
          this._platformLocation.onHashChange(r),
        );
      }
      getBaseHref() {
        return this._baseHref;
      }
      prepareExternalUrl(r) {
        return da(this._baseHref, r);
      }
      path(r = !1) {
        let o =
            this._platformLocation.pathname + Fe(this._platformLocation.search),
          i = this._platformLocation.hash;
        return i && r ? `${o}${i}` : o;
      }
      pushState(r, o, i, s) {
        let a = this.prepareExternalUrl(i + Fe(s));
        this._platformLocation.pushState(r, o, a);
      }
      replaceState(r, o, i, s) {
        let a = this.prepareExternalUrl(i + Fe(s));
        this._platformLocation.replaceState(r, o, a);
      }
      forward() {
        this._platformLocation.forward();
      }
      back() {
        this._platformLocation.back();
      }
      getState() {
        return this._platformLocation.getState();
      }
      historyGo(r = 0) {
        this._platformLocation.historyGo?.(r);
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(L(la), L(ef, 8));
    }),
      (t.ɵprov = A({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })(),
  kx = (() => {
    let t = class t extends Io {
      constructor(r, o) {
        super(),
          (this._platformLocation = r),
          (this._baseHref = ""),
          (this._removeListenerFns = []),
          o != null && (this._baseHref = o);
      }
      ngOnDestroy() {
        for (; this._removeListenerFns.length; )
          this._removeListenerFns.pop()();
      }
      onPopState(r) {
        this._removeListenerFns.push(
          this._platformLocation.onPopState(r),
          this._platformLocation.onHashChange(r),
        );
      }
      getBaseHref() {
        return this._baseHref;
      }
      path(r = !1) {
        let o = this._platformLocation.hash ?? "#";
        return o.length > 0 ? o.substring(1) : o;
      }
      prepareExternalUrl(r) {
        let o = da(this._baseHref, r);
        return o.length > 0 ? "#" + o : o;
      }
      pushState(r, o, i, s) {
        let a = this.prepareExternalUrl(i + Fe(s));
        a.length == 0 && (a = this._platformLocation.pathname),
          this._platformLocation.pushState(r, o, a);
      }
      replaceState(r, o, i, s) {
        let a = this.prepareExternalUrl(i + Fe(s));
        a.length == 0 && (a = this._platformLocation.pathname),
          this._platformLocation.replaceState(r, o, a);
      }
      forward() {
        this._platformLocation.forward();
      }
      back() {
        this._platformLocation.back();
      }
      getState() {
        return this._platformLocation.getState();
      }
      historyGo(r = 0) {
        this._platformLocation.historyGo?.(r);
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(L(la), L(ef, 8));
    }),
      (t.ɵprov = A({ token: t, factory: t.ɵfac }));
    let e = t;
    return e;
  })(),
  Gv = (() => {
    let t = class t {
      constructor(r) {
        (this._subject = new de()),
          (this._urlChangeListeners = []),
          (this._urlChangeSubscription = null),
          (this._locationStrategy = r);
        let o = this._locationStrategy.getBaseHref();
        (this._basePath = Zv(Yd(Qd(o)))),
          this._locationStrategy.onPopState((i) => {
            this._subject.emit({
              url: this.path(!0),
              pop: !0,
              state: i.state,
              type: i.type,
            });
          });
      }
      ngOnDestroy() {
        this._urlChangeSubscription?.unsubscribe(),
          (this._urlChangeListeners = []);
      }
      path(r = !1) {
        return this.normalize(this._locationStrategy.path(r));
      }
      getState() {
        return this._locationStrategy.getState();
      }
      isCurrentPathEqualTo(r, o = "") {
        return this.path() == this.normalize(r + Fe(o));
      }
      normalize(r) {
        return t.stripTrailingSlash(qv(this._basePath, Qd(r)));
      }
      prepareExternalUrl(r) {
        return (
          r && r[0] !== "/" && (r = "/" + r),
          this._locationStrategy.prepareExternalUrl(r)
        );
      }
      go(r, o = "", i = null) {
        this._locationStrategy.pushState(i, "", r, o),
          this._notifyUrlChangeListeners(this.prepareExternalUrl(r + Fe(o)), i);
      }
      replaceState(r, o = "", i = null) {
        this._locationStrategy.replaceState(i, "", r, o),
          this._notifyUrlChangeListeners(this.prepareExternalUrl(r + Fe(o)), i);
      }
      forward() {
        this._locationStrategy.forward();
      }
      back() {
        this._locationStrategy.back();
      }
      historyGo(r = 0) {
        this._locationStrategy.historyGo?.(r);
      }
      onUrlChange(r) {
        return (
          this._urlChangeListeners.push(r),
          (this._urlChangeSubscription ??= this.subscribe((o) => {
            this._notifyUrlChangeListeners(o.url, o.state);
          })),
          () => {
            let o = this._urlChangeListeners.indexOf(r);
            this._urlChangeListeners.splice(o, 1),
              this._urlChangeListeners.length === 0 &&
                (this._urlChangeSubscription?.unsubscribe(),
                (this._urlChangeSubscription = null));
          }
        );
      }
      _notifyUrlChangeListeners(r = "", o) {
        this._urlChangeListeners.forEach((i) => i(r, o));
      }
      subscribe(r, o, i) {
        return this._subject.subscribe({ next: r, error: o, complete: i });
      }
    };
    (t.normalizeQueryParams = Fe),
      (t.joinWithSlash = da),
      (t.stripTrailingSlash = Yd),
      (t.ɵfac = function (o) {
        return new (o || t)(L(Io));
      }),
      (t.ɵprov = A({ token: t, factory: () => Wv(), providedIn: "root" }));
    let e = t;
    return e;
  })();
function Wv() {
  return new Gv(L(Io));
}
function qv(e, t) {
  if (!e || !t.startsWith(e)) return t;
  let n = t.substring(e.length);
  return n === "" || ["/", ";", "?", "#"].includes(n[0]) ? n : t;
}
function Qd(e) {
  return e.replace(/\/index.html$/, "");
}
function Zv(e) {
  if (new RegExp("^(https?:)?//").test(e)) {
    let [, n] = e.split(/\/\/[^\/]+/);
    return n;
  }
  return e;
}
function Lx(e, t) {
  t = encodeURIComponent(t);
  for (let n of e.split(";")) {
    let r = n.indexOf("="),
      [o, i] = r == -1 ? [n, ""] : [n.slice(0, r), n.slice(r + 1)];
    if (o.trim() === t) return decodeURIComponent(i);
  }
  return null;
}
var sa = class {
    constructor(t, n, r, o) {
      (this.$implicit = t),
        (this.ngForOf = n),
        (this.index = r),
        (this.count = o);
    }
    get first() {
      return this.index === 0;
    }
    get last() {
      return this.index === this.count - 1;
    }
    get even() {
      return this.index % 2 === 0;
    }
    get odd() {
      return !this.even;
    }
  },
  jx = (() => {
    let t = class t {
      set ngForOf(r) {
        (this._ngForOf = r), (this._ngForOfDirty = !0);
      }
      set ngForTrackBy(r) {
        this._trackByFn = r;
      }
      get ngForTrackBy() {
        return this._trackByFn;
      }
      constructor(r, o, i) {
        (this._viewContainer = r),
          (this._template = o),
          (this._differs = i),
          (this._ngForOf = null),
          (this._ngForOfDirty = !0),
          (this._differ = null);
      }
      set ngForTemplate(r) {
        r && (this._template = r);
      }
      ngDoCheck() {
        if (this._ngForOfDirty) {
          this._ngForOfDirty = !1;
          let r = this._ngForOf;
          if (!this._differ && r)
            if (0)
              try {
              } catch {}
            else this._differ = this._differs.find(r).create(this.ngForTrackBy);
        }
        if (this._differ) {
          let r = this._differ.diff(this._ngForOf);
          r && this._applyChanges(r);
        }
      }
      _applyChanges(r) {
        let o = this._viewContainer;
        r.forEachOperation((i, s, a) => {
          if (i.previousIndex == null)
            o.createEmbeddedView(
              this._template,
              new sa(i.item, this._ngForOf, -1, -1),
              a === null ? void 0 : a,
            );
          else if (a == null) o.remove(s === null ? void 0 : s);
          else if (s !== null) {
            let u = o.get(s);
            o.move(u, a), Kd(u, i);
          }
        });
        for (let i = 0, s = o.length; i < s; i++) {
          let u = o.get(i).context;
          (u.index = i), (u.count = s), (u.ngForOf = this._ngForOf);
        }
        r.forEachIdentityChange((i) => {
          let s = o.get(i.currentIndex);
          Kd(s, i);
        });
      }
      static ngTemplateContextGuard(r, o) {
        return !0;
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(Ge(Yt), Ge(jt), Ge(ra));
    }),
      (t.ɵdir = Ds({
        type: t,
        selectors: [["", "ngFor", "", "ngForOf", ""]],
        inputs: {
          ngForOf: "ngForOf",
          ngForTrackBy: "ngForTrackBy",
          ngForTemplate: "ngForTemplate",
        },
        standalone: !0,
      }));
    let e = t;
    return e;
  })();
function Kd(e, t) {
  e.context.$implicit = t.item;
}
var Vx = (() => {
  let t = class t {
    constructor(r) {
      (this._viewContainerRef = r),
        (this._viewRef = null),
        (this.ngTemplateOutletContext = null),
        (this.ngTemplateOutlet = null),
        (this.ngTemplateOutletInjector = null);
    }
    ngOnChanges(r) {
      if (this._shouldRecreateView(r)) {
        let o = this._viewContainerRef;
        if (
          (this._viewRef && o.remove(o.indexOf(this._viewRef)),
          !this.ngTemplateOutlet)
        ) {
          this._viewRef = null;
          return;
        }
        let i = this._createContextForwardProxy();
        this._viewRef = o.createEmbeddedView(this.ngTemplateOutlet, i, {
          injector: this.ngTemplateOutletInjector ?? void 0,
        });
      }
    }
    _shouldRecreateView(r) {
      return !!r.ngTemplateOutlet || !!r.ngTemplateOutletInjector;
    }
    _createContextForwardProxy() {
      return new Proxy(
        {},
        {
          set: (r, o, i) =>
            this.ngTemplateOutletContext
              ? Reflect.set(this.ngTemplateOutletContext, o, i)
              : !1,
          get: (r, o, i) => {
            if (this.ngTemplateOutletContext)
              return Reflect.get(this.ngTemplateOutletContext, o, i);
          },
        },
      );
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)(Ge(Yt));
  }),
    (t.ɵdir = Ds({
      type: t,
      selectors: [["", "ngTemplateOutlet", ""]],
      inputs: {
        ngTemplateOutletContext: "ngTemplateOutletContext",
        ngTemplateOutlet: "ngTemplateOutlet",
        ngTemplateOutletInjector: "ngTemplateOutletInjector",
      },
      standalone: !0,
      features: [bs],
    }));
  let e = t;
  return e;
})();
var Bx = (() => {
    let t = class t {};
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵmod = ys({ type: t })),
      (t.ɵinj = hs({}));
    let e = t;
    return e;
  })(),
  Yv = "browser",
  Qv = "server";
function Kv(e) {
  return e === Yv;
}
function $x(e) {
  return e === Qv;
}
var Hx = (() => {
    let t = class t {};
    t.ɵprov = A({
      token: t,
      providedIn: "root",
      factory: () => (Kv(w(ks)) ? new aa(w(ca), window) : new ua()),
    });
    let e = t;
    return e;
  })(),
  aa = class {
    constructor(t, n) {
      (this.document = t), (this.window = n), (this.offset = () => [0, 0]);
    }
    setOffset(t) {
      Array.isArray(t) ? (this.offset = () => t) : (this.offset = t);
    }
    getScrollPosition() {
      return [this.window.scrollX, this.window.scrollY];
    }
    scrollToPosition(t) {
      this.window.scrollTo(t[0], t[1]);
    }
    scrollToAnchor(t) {
      let n = Jv(this.document, t);
      n && (this.scrollToElement(n), n.focus());
    }
    setHistoryScrollRestoration(t) {
      this.window.history.scrollRestoration = t;
    }
    scrollToElement(t) {
      let n = t.getBoundingClientRect(),
        r = n.left + this.window.pageXOffset,
        o = n.top + this.window.pageYOffset,
        i = this.offset();
      this.window.scrollTo(r - i[0], o - i[1]);
    }
  };
function Jv(e, t) {
  let n = e.getElementById(t) || e.getElementsByName(t)[0];
  if (n) return n;
  if (
    typeof e.createTreeWalker == "function" &&
    e.body &&
    typeof e.body.attachShadow == "function"
  ) {
    let r = e.createTreeWalker(e.body, NodeFilter.SHOW_ELEMENT),
      o = r.currentNode;
    for (; o; ) {
      let i = o.shadowRoot;
      if (i) {
        let s = i.getElementById(t) || i.querySelector(`[name="${t}"]`);
        if (s) return s;
      }
      o = r.nextNode();
    }
  }
  return null;
}
var ua = class {
    setOffset(t) {}
    getScrollPosition() {
      return [0, 0];
    }
    scrollToPosition(t) {}
    scrollToAnchor(t) {}
    setHistoryScrollRestoration(t) {}
  },
  Jd = class {};
var pt = (function (e) {
    return (
      (e[(e.State = 0)] = "State"),
      (e[(e.Transition = 1)] = "Transition"),
      (e[(e.Sequence = 2)] = "Sequence"),
      (e[(e.Group = 3)] = "Group"),
      (e[(e.Animate = 4)] = "Animate"),
      (e[(e.Keyframes = 5)] = "Keyframes"),
      (e[(e.Style = 6)] = "Style"),
      (e[(e.Trigger = 7)] = "Trigger"),
      (e[(e.Reference = 8)] = "Reference"),
      (e[(e.AnimateChild = 9)] = "AnimateChild"),
      (e[(e.AnimateRef = 10)] = "AnimateRef"),
      (e[(e.Query = 11)] = "Query"),
      (e[(e.Stagger = 12)] = "Stagger"),
      e
    );
  })(pt || {}),
  Gx = "*";
function Wx(e, t) {
  return { type: pt.Trigger, name: e, definitions: t, options: {} };
}
function qx(e, t = null) {
  return { type: pt.Animate, styles: t, timings: e };
}
function Zx(e, t = null) {
  return { type: pt.Sequence, steps: e, options: t };
}
function Yx(e) {
  return { type: pt.Style, styles: e, offset: null };
}
function Qx(e, t, n) {
  return { type: pt.State, name: e, styles: t, options: n };
}
function Kx(e, t, n = null) {
  return { type: pt.Transition, expr: e, animation: t, options: n };
}
var tf = class {
    constructor(t = 0, n = 0) {
      (this._onDoneFns = []),
        (this._onStartFns = []),
        (this._onDestroyFns = []),
        (this._originalOnDoneFns = []),
        (this._originalOnStartFns = []),
        (this._started = !1),
        (this._destroyed = !1),
        (this._finished = !1),
        (this._position = 0),
        (this.parentPlayer = null),
        (this.totalTime = t + n);
    }
    _onFinish() {
      this._finished ||
        ((this._finished = !0),
        this._onDoneFns.forEach((t) => t()),
        (this._onDoneFns = []));
    }
    onStart(t) {
      this._originalOnStartFns.push(t), this._onStartFns.push(t);
    }
    onDone(t) {
      this._originalOnDoneFns.push(t), this._onDoneFns.push(t);
    }
    onDestroy(t) {
      this._onDestroyFns.push(t);
    }
    hasStarted() {
      return this._started;
    }
    init() {}
    play() {
      this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
        (this._started = !0);
    }
    triggerMicrotask() {
      queueMicrotask(() => this._onFinish());
    }
    _onStart() {
      this._onStartFns.forEach((t) => t()), (this._onStartFns = []);
    }
    pause() {}
    restart() {}
    finish() {
      this._onFinish();
    }
    destroy() {
      this._destroyed ||
        ((this._destroyed = !0),
        this.hasStarted() || this._onStart(),
        this.finish(),
        this._onDestroyFns.forEach((t) => t()),
        (this._onDestroyFns = []));
    }
    reset() {
      (this._started = !1),
        (this._finished = !1),
        (this._onStartFns = this._originalOnStartFns),
        (this._onDoneFns = this._originalOnDoneFns);
    }
    setPosition(t) {
      this._position = this.totalTime ? t * this.totalTime : 1;
    }
    getPosition() {
      return this.totalTime ? this._position / this.totalTime : 1;
    }
    triggerCallback(t) {
      let n = t == "start" ? this._onStartFns : this._onDoneFns;
      n.forEach((r) => r()), (n.length = 0);
    }
  },
  nf = class {
    constructor(t) {
      (this._onDoneFns = []),
        (this._onStartFns = []),
        (this._finished = !1),
        (this._started = !1),
        (this._destroyed = !1),
        (this._onDestroyFns = []),
        (this.parentPlayer = null),
        (this.totalTime = 0),
        (this.players = t);
      let n = 0,
        r = 0,
        o = 0,
        i = this.players.length;
      i == 0
        ? queueMicrotask(() => this._onFinish())
        : this.players.forEach((s) => {
            s.onDone(() => {
              ++n == i && this._onFinish();
            }),
              s.onDestroy(() => {
                ++r == i && this._onDestroy();
              }),
              s.onStart(() => {
                ++o == i && this._onStart();
              });
          }),
        (this.totalTime = this.players.reduce(
          (s, a) => Math.max(s, a.totalTime),
          0,
        ));
    }
    _onFinish() {
      this._finished ||
        ((this._finished = !0),
        this._onDoneFns.forEach((t) => t()),
        (this._onDoneFns = []));
    }
    init() {
      this.players.forEach((t) => t.init());
    }
    onStart(t) {
      this._onStartFns.push(t);
    }
    _onStart() {
      this.hasStarted() ||
        ((this._started = !0),
        this._onStartFns.forEach((t) => t()),
        (this._onStartFns = []));
    }
    onDone(t) {
      this._onDoneFns.push(t);
    }
    onDestroy(t) {
      this._onDestroyFns.push(t);
    }
    hasStarted() {
      return this._started;
    }
    play() {
      this.parentPlayer || this.init(),
        this._onStart(),
        this.players.forEach((t) => t.play());
    }
    pause() {
      this.players.forEach((t) => t.pause());
    }
    restart() {
      this.players.forEach((t) => t.restart());
    }
    finish() {
      this._onFinish(), this.players.forEach((t) => t.finish());
    }
    destroy() {
      this._onDestroy();
    }
    _onDestroy() {
      this._destroyed ||
        ((this._destroyed = !0),
        this._onFinish(),
        this.players.forEach((t) => t.destroy()),
        this._onDestroyFns.forEach((t) => t()),
        (this._onDestroyFns = []));
    }
    reset() {
      this.players.forEach((t) => t.reset()),
        (this._destroyed = !1),
        (this._finished = !1),
        (this._started = !1);
    }
    setPosition(t) {
      let n = t * this.totalTime;
      this.players.forEach((r) => {
        let o = r.totalTime ? Math.min(1, n / r.totalTime) : 1;
        r.setPosition(o);
      });
    }
    getPosition() {
      let t = this.players.reduce(
        (n, r) => (n === null || r.totalTime > n.totalTime ? r : n),
        null,
      );
      return t != null ? t.getPosition() : 0;
    }
    beforeDestroy() {
      this.players.forEach((t) => {
        t.beforeDestroy && t.beforeDestroy();
      });
    }
    triggerCallback(t) {
      let n = t == "start" ? this._onStartFns : this._onDoneFns;
      n.forEach((r) => r()), (n.length = 0);
    }
  },
  Jx = "!";
export {
  ee as a,
  ue as b,
  Xv as c,
  j as d,
  Df as e,
  S as f,
  Po as g,
  ko as h,
  ne as i,
  en as j,
  Ye as k,
  ye as l,
  Sf as m,
  Tf as n,
  Nf as o,
  Ke as p,
  _e as q,
  jf as r,
  Me as s,
  on as t,
  ir as u,
  Bf as v,
  $f as w,
  jo as x,
  Vo as y,
  Zf as z,
  Je as A,
  Yf as B,
  ou as C,
  Qf as D,
  Kf as E,
  sn as F,
  Bo as G,
  Jf as H,
  Xf as I,
  nh as J,
  su as K,
  $o as L,
  rh as M,
  oh as N,
  Uo as O,
  ih as P,
  sh as Q,
  ah as R,
  uh as S,
  ch as T,
  lh as U,
  x as V,
  ln as W,
  tc as X,
  A as Y,
  hs as Z,
  s0 as _,
  T as $,
  M as aa,
  L as ba,
  w as ca,
  Ah as da,
  Oh as ea,
  fn as fa,
  a0 as ga,
  ys as ha,
  Ds as ia,
  u0 as ja,
  bc as ka,
  Ve as la,
  c0 as ma,
  bs as na,
  l0 as oa,
  d0 as pa,
  f0 as qa,
  h0 as ra,
  Jp as sa,
  he as ta,
  wn as ua,
  de as va,
  z as wa,
  ut as xa,
  qt as ya,
  wi as za,
  p0 as Aa,
  g0 as Ba,
  yg as Ca,
  ks as Da,
  m0 as Ea,
  y0 as Fa,
  ht as Ga,
  js as Ha,
  D0 as Ia,
  v0 as Ja,
  I0 as Ka,
  E0 as La,
  w0 as Ma,
  vl as Na,
  Vg as Oa,
  fo as Pa,
  C0 as Qa,
  $g as Ra,
  Hg as Sa,
  b0 as Ta,
  _0 as Ua,
  Pr as Va,
  M0 as Wa,
  Ge as Xa,
  x0 as Ya,
  jt as Za,
  Bt as _a,
  $t as $a,
  Vr as ab,
  ud as bb,
  Yt as cb,
  Oe as db,
  A0 as eb,
  O0 as fb,
  $y as gb,
  qy as hb,
  Gi as ib,
  Yy as jb,
  tD as kb,
  St as lb,
  oD as mb,
  iD as nb,
  aD as ob,
  ID as pb,
  bd as qb,
  ED as rb,
  F0 as sb,
  R0 as tb,
  P0 as ub,
  k0 as vb,
  L0 as wb,
  j0 as xb,
  Od as yb,
  Fd as zb,
  kD as Ab,
  VD as Bb,
  V0 as Cb,
  $D as Db,
  HD as Eb,
  WD as Fb,
  qD as Gb,
  B0 as Hb,
  $0 as Ib,
  H0 as Jb,
  KD as Kb,
  U0 as Lb,
  z0 as Mb,
  G0 as Nb,
  W0 as Ob,
  q0 as Pb,
  Z0 as Qb,
  XD as Rb,
  jd as Sb,
  Y0 as Tb,
  Q0 as Ub,
  K0 as Vb,
  J0 as Wb,
  X0 as Xb,
  ex as Yb,
  uv as Zb,
  cv as _b,
  tx as $b,
  lv as ac,
  Xs as bc,
  fv as cc,
  hv as dc,
  Mn as ec,
  nx as fc,
  Tv as gc,
  na as hc,
  rx as ic,
  ox as jc,
  ix as kc,
  kv as lc,
  Lv as mc,
  sx as nc,
  jv as oc,
  $v as pc,
  ax as qc,
  ia as rc,
  Rx as sc,
  Zd as tc,
  ca as uc,
  Px as vc,
  Io as wc,
  zv as xc,
  kx as yc,
  Gv as zc,
  Lx as Ac,
  jx as Bc,
  Vx as Cc,
  Bx as Dc,
  Yv as Ec,
  Kv as Fc,
  $x as Gc,
  Hx as Hc,
  Jd as Ic,
  pt as Jc,
  Gx as Kc,
  Wx as Lc,
  qx as Mc,
  Zx as Nc,
  Yx as Oc,
  Qx as Pc,
  Kx as Qc,
  tf as Rc,
  nf as Sc,
  Jx as Tc,
};
