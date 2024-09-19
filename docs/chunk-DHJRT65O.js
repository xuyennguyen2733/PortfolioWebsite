var Sd = Object.defineProperty,
  Td = Object.defineProperties;
var Nd = Object.getOwnPropertyDescriptors;
var Dn = Object.getOwnPropertySymbols;
var js = Object.prototype.hasOwnProperty,
  Vs = Object.prototype.propertyIsEnumerable;
var Ls = (e, t, n) =>
    t in e
      ? Sd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  K = (e, t) => {
    for (var n in (t ||= {})) js.call(t, n) && Ls(e, n, t[n]);
    if (Dn) for (var n of Dn(t)) Vs.call(t, n) && Ls(e, n, t[n]);
    return e;
  },
  se = (e, t) => Td(e, Nd(t));
var dv = (e, t) => {
  var n = {};
  for (var r in e) js.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Dn)
    for (var r of Dn(e)) t.indexOf(r) < 0 && Vs.call(e, r) && (n[r] = e[r]);
  return n;
};
function Bs(e, t) {
  return Object.is(e, t);
}
var k = null,
  Ht = !1,
  vn = 1,
  de = Symbol("SIGNAL");
function b(e) {
  let t = k;
  return (k = e), t;
}
function $s() {
  return k;
}
function Ad() {
  return Ht;
}
var ft = {
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
function uo(e) {
  if (Ht) throw new Error("");
  if (k === null) return;
  k.consumerOnSignalRead(e);
  let t = k.nextProducerIndex++;
  if ((_n(k), t < k.producerNode.length && k.producerNode[t] !== e && Ut(k))) {
    let n = k.producerNode[t];
    bn(n, k.producerIndexOfThis[t]);
  }
  k.producerNode[t] !== e &&
    ((k.producerNode[t] = e),
    (k.producerIndexOfThis[t] = Ut(k) ? Ws(e, k, t) : 0)),
    (k.producerLastReadVersion[t] = e.version);
}
function Od() {
  vn++;
}
function Hs(e) {
  if (!(Ut(e) && !e.dirty) && !(!e.dirty && e.lastCleanEpoch === vn)) {
    if (!e.producerMustRecompute(e) && !wn(e)) {
      (e.dirty = !1), (e.lastCleanEpoch = vn);
      return;
    }
    e.producerRecomputeValue(e), (e.dirty = !1), (e.lastCleanEpoch = vn);
  }
}
function Us(e) {
  if (e.liveConsumerNode === void 0) return;
  let t = Ht;
  Ht = !0;
  try {
    for (let n of e.liveConsumerNode) n.dirty || Gs(n);
  } finally {
    Ht = t;
  }
}
function zs() {
  return k?.consumerAllowSignalWrites !== !1;
}
function Gs(e) {
  (e.dirty = !0), Us(e), e.consumerMarkedDirty?.(e);
}
function zt(e) {
  return e && (e.nextProducerIndex = 0), b(e);
}
function En(e, t) {
  if (
    (b(t),
    !(
      !e ||
      e.producerNode === void 0 ||
      e.producerIndexOfThis === void 0 ||
      e.producerLastReadVersion === void 0
    ))
  ) {
    if (Ut(e))
      for (let n = e.nextProducerIndex; n < e.producerNode.length; n++)
        bn(e.producerNode[n], e.producerIndexOfThis[n]);
    for (; e.producerNode.length > e.nextProducerIndex; )
      e.producerNode.pop(),
        e.producerLastReadVersion.pop(),
        e.producerIndexOfThis.pop();
  }
}
function wn(e) {
  _n(e);
  for (let t = 0; t < e.producerNode.length; t++) {
    let n = e.producerNode[t],
      r = e.producerLastReadVersion[t];
    if (r !== n.version || (Hs(n), r !== n.version)) return !0;
  }
  return !1;
}
function Cn(e) {
  if ((_n(e), Ut(e)))
    for (let t = 0; t < e.producerNode.length; t++)
      bn(e.producerNode[t], e.producerIndexOfThis[t]);
  (e.producerNode.length =
    e.producerLastReadVersion.length =
    e.producerIndexOfThis.length =
      0),
    e.liveConsumerNode &&
      (e.liveConsumerNode.length = e.liveConsumerIndexOfThis.length = 0);
}
function Ws(e, t, n) {
  if ((qs(e), e.liveConsumerNode.length === 0 && Zs(e)))
    for (let r = 0; r < e.producerNode.length; r++)
      e.producerIndexOfThis[r] = Ws(e.producerNode[r], e, r);
  return e.liveConsumerIndexOfThis.push(n), e.liveConsumerNode.push(t) - 1;
}
function bn(e, t) {
  if ((qs(e), e.liveConsumerNode.length === 1 && Zs(e)))
    for (let r = 0; r < e.producerNode.length; r++)
      bn(e.producerNode[r], e.producerIndexOfThis[r]);
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
    _n(o), (o.producerIndexOfThis[r] = t);
  }
}
function Ut(e) {
  return e.consumerIsAlwaysLive || (e?.liveConsumerNode?.length ?? 0) > 0;
}
function _n(e) {
  (e.producerNode ??= []),
    (e.producerIndexOfThis ??= []),
    (e.producerLastReadVersion ??= []);
}
function qs(e) {
  (e.liveConsumerNode ??= []), (e.liveConsumerIndexOfThis ??= []);
}
function Zs(e) {
  return e.producerNode !== void 0;
}
function Ys(e) {
  let t = Object.create(Fd);
  t.computation = e;
  let n = () => {
    if ((Hs(t), uo(t), t.value === In)) throw t.error;
    return t.value;
  };
  return (n[de] = t), n;
}
var io = Symbol("UNSET"),
  so = Symbol("COMPUTING"),
  In = Symbol("ERRORED"),
  Fd = se(K({}, ft), {
    value: io,
    dirty: !0,
    error: null,
    equal: Bs,
    producerMustRecompute(e) {
      return e.value === io || e.value === so;
    },
    producerRecomputeValue(e) {
      if (e.value === so) throw new Error("Detected cycle in computations.");
      let t = e.value;
      e.value = so;
      let n = zt(e),
        r;
      try {
        r = e.computation();
      } catch (o) {
        (r = In), (e.error = o);
      } finally {
        En(e, n);
      }
      if (t !== io && t !== In && r !== In && e.equal(t, r)) {
        e.value = t;
        return;
      }
      (e.value = r), e.version++;
    },
  });
function Rd() {
  throw new Error();
}
var Qs = Rd;
function Ks() {
  Qs();
}
function Js(e) {
  Qs = e;
}
var Pd = null;
function Xs(e) {
  let t = Object.create(ta);
  t.value = e;
  let n = () => (uo(t), t.value);
  return (n[de] = t), n;
}
function co(e, t) {
  zs() || Ks(), e.equal(e.value, t) || ((e.value = t), kd(e));
}
function ea(e, t) {
  zs() || Ks(), co(e, t(e.value));
}
var ta = se(K({}, ft), { equal: Bs, value: void 0 });
function kd(e) {
  e.version++, Od(), Us(e), Pd?.();
}
function na(e, t, n) {
  let r = Object.create(Ld);
  n && (r.consumerAllowSignalWrites = !0), (r.fn = e), (r.schedule = t);
  let o = (u) => {
    r.cleanupFn = u;
  };
  function i(u) {
    return u.fn === null && u.schedule === null;
  }
  function s(u) {
    i(u) ||
      (Cn(u),
      u.cleanupFn(),
      (u.fn = null),
      (u.schedule = null),
      (u.cleanupFn = ao));
  }
  let a = () => {
    if (r.fn === null) return;
    if (Ad())
      throw new Error(
        "Schedulers cannot synchronously execute watches while scheduling.",
      );
    if (((r.dirty = !1), r.hasRun && !wn(r))) return;
    r.hasRun = !0;
    let u = zt(r);
    try {
      r.cleanupFn(), (r.cleanupFn = ao), r.fn(o);
    } finally {
      En(r, u);
    }
  };
  return (
    (r.ref = {
      notify: () => Gs(r),
      run: a,
      cleanup: () => r.cleanupFn(),
      destroy: () => s(r),
      [de]: r,
    }),
    r.ref
  );
}
var ao = () => {},
  Ld = se(K({}, ft), {
    consumerIsAlwaysLive: !0,
    consumerAllowSignalWrites: !1,
    consumerMarkedDirty: (e) => {
      e.schedule !== null && e.schedule(e.ref);
    },
    hasRun: !1,
    cleanupFn: ao,
  });
function g(e) {
  return typeof e == "function";
}
function ht(e) {
  let n = e((r) => {
    Error.call(r), (r.stack = new Error().stack);
  });
  return (
    (n.prototype = Object.create(Error.prototype)),
    (n.prototype.constructor = n),
    n
  );
}
var Mn = ht(
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
function Ve(e, t) {
  if (e) {
    let n = e.indexOf(t);
    0 <= n && e.splice(n, 1);
  }
}
var P = class e {
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
          t = i instanceof Mn ? i.errors : [i];
        }
      let { _finalizers: o } = this;
      if (o) {
        this._finalizers = null;
        for (let i of o)
          try {
            ra(i);
          } catch (s) {
            (t = t ?? []),
              s instanceof Mn ? (t = [...t, ...s.errors]) : t.push(s);
          }
      }
      if (t) throw new Mn(t);
    }
  }
  add(t) {
    var n;
    if (t && t !== this)
      if (this.closed) ra(t);
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
    n === t ? (this._parentage = null) : Array.isArray(n) && Ve(n, t);
  }
  remove(t) {
    let { _finalizers: n } = this;
    n && Ve(n, t), t instanceof e && t._removeParent(this);
  }
};
P.EMPTY = (() => {
  let e = new P();
  return (e.closed = !0), e;
})();
var lo = P.EMPTY;
function xn(e) {
  return (
    e instanceof P ||
    (e && "closed" in e && g(e.remove) && g(e.add) && g(e.unsubscribe))
  );
}
function ra(e) {
  g(e) ? e() : e.unsubscribe();
}
var ae = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1,
};
var pt = {
  setTimeout(e, t, ...n) {
    let { delegate: r } = pt;
    return r?.setTimeout ? r.setTimeout(e, t, ...n) : setTimeout(e, t, ...n);
  },
  clearTimeout(e) {
    let { delegate: t } = pt;
    return (t?.clearTimeout || clearTimeout)(e);
  },
  delegate: void 0,
};
function Sn(e) {
  pt.setTimeout(() => {
    let { onUnhandledError: t } = ae;
    if (t) t(e);
    else throw e;
  });
}
function Gt() {}
var oa = fo("C", void 0, void 0);
function ia(e) {
  return fo("E", void 0, e);
}
function sa(e) {
  return fo("N", e, void 0);
}
function fo(e, t, n) {
  return { kind: e, value: t, error: n };
}
var Be = null;
function gt(e) {
  if (ae.useDeprecatedSynchronousErrorHandling) {
    let t = !Be;
    if ((t && (Be = { errorThrown: !1, error: null }), e(), t)) {
      let { errorThrown: n, error: r } = Be;
      if (((Be = null), n)) throw r;
    }
  } else e();
}
function aa(e) {
  ae.useDeprecatedSynchronousErrorHandling &&
    Be &&
    ((Be.errorThrown = !0), (Be.error = e));
}
var $e = class extends P {
    constructor(t) {
      super(),
        (this.isStopped = !1),
        t
          ? ((this.destination = t), xn(t) && t.add(this))
          : (this.destination = Bd);
    }
    static create(t, n, r) {
      return new mt(t, n, r);
    }
    next(t) {
      this.isStopped ? po(sa(t), this) : this._next(t);
    }
    error(t) {
      this.isStopped
        ? po(ia(t), this)
        : ((this.isStopped = !0), this._error(t));
    }
    complete() {
      this.isStopped ? po(oa, this) : ((this.isStopped = !0), this._complete());
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
  jd = Function.prototype.bind;
function ho(e, t) {
  return jd.call(e, t);
}
var go = class {
    constructor(t) {
      this.partialObserver = t;
    }
    next(t) {
      let { partialObserver: n } = this;
      if (n.next)
        try {
          n.next(t);
        } catch (r) {
          Tn(r);
        }
    }
    error(t) {
      let { partialObserver: n } = this;
      if (n.error)
        try {
          n.error(t);
        } catch (r) {
          Tn(r);
        }
      else Tn(t);
    }
    complete() {
      let { partialObserver: t } = this;
      if (t.complete)
        try {
          t.complete();
        } catch (n) {
          Tn(n);
        }
    }
  },
  mt = class extends $e {
    constructor(t, n, r) {
      super();
      let o;
      if (g(t) || !t)
        o = { next: t ?? void 0, error: n ?? void 0, complete: r ?? void 0 };
      else {
        let i;
        this && ae.useDeprecatedNextContext
          ? ((i = Object.create(t)),
            (i.unsubscribe = () => this.unsubscribe()),
            (o = {
              next: t.next && ho(t.next, i),
              error: t.error && ho(t.error, i),
              complete: t.complete && ho(t.complete, i),
            }))
          : (o = t);
      }
      this.destination = new go(o);
    }
  };
function Tn(e) {
  ae.useDeprecatedSynchronousErrorHandling ? aa(e) : Sn(e);
}
function Vd(e) {
  throw e;
}
function po(e, t) {
  let { onStoppedNotification: n } = ae;
  n && pt.setTimeout(() => n(e, t));
}
var Bd = { closed: !0, next: Gt, error: Vd, complete: Gt };
var yt = (typeof Symbol == "function" && Symbol.observable) || "@@observable";
function U(e) {
  return e;
}
function $d(...e) {
  return mo(e);
}
function mo(e) {
  return e.length === 0
    ? U
    : e.length === 1
      ? e[0]
      : function (n) {
          return e.reduce((r, o) => o(r), n);
        };
}
var _ = (() => {
  class e {
    constructor(n) {
      n && (this._subscribe = n);
    }
    lift(n) {
      let r = new e();
      return (r.source = this), (r.operator = n), r;
    }
    subscribe(n, r, o) {
      let i = Ud(n) ? n : new mt(n, r, o);
      return (
        gt(() => {
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
        (r = ua(r)),
        new r((o, i) => {
          let s = new mt({
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
    [yt]() {
      return this;
    }
    pipe(...n) {
      return mo(n)(this);
    }
    toPromise(n) {
      return (
        (n = ua(n)),
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
function ua(e) {
  var t;
  return (t = e ?? ae.Promise) !== null && t !== void 0 ? t : Promise;
}
function Hd(e) {
  return e && g(e.next) && g(e.error) && g(e.complete);
}
function Ud(e) {
  return (e && e instanceof $e) || (Hd(e) && xn(e));
}
function yo(e) {
  return g(e?.lift);
}
function v(e) {
  return (t) => {
    if (yo(t))
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
function y(e, t, n, r, o) {
  return new Do(e, t, n, r, o);
}
var Do = class extends $e {
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
function vo() {
  return v((e, t) => {
    let n = null;
    e._refCount++;
    let r = y(t, void 0, void 0, void 0, () => {
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
var Io = class extends _ {
  constructor(t, n) {
    super(),
      (this.source = t),
      (this.subjectFactory = n),
      (this._subject = null),
      (this._refCount = 0),
      (this._connection = null),
      yo(t) && (this.lift = t.lift);
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
      t = this._connection = new P();
      let n = this.getSubject();
      t.add(
        this.source.subscribe(
          y(
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
        t.closed && ((this._connection = null), (t = P.EMPTY));
    }
    return t;
  }
  refCount() {
    return vo()(this);
  }
};
var ca = ht(
  (e) =>
    function () {
      e(this),
        (this.name = "ObjectUnsubscribedError"),
        (this.message = "object unsubscribed");
    },
);
var Te = (() => {
    class e extends _ {
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
        let r = new Nn(this, this);
        return (r.operator = n), r;
      }
      _throwIfClosed() {
        if (this.closed) throw new ca();
      }
      next(n) {
        gt(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.currentObservers ||
              (this.currentObservers = Array.from(this.observers));
            for (let r of this.currentObservers) r.next(n);
          }
        });
      }
      error(n) {
        gt(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            (this.hasError = this.isStopped = !0), (this.thrownError = n);
            let { observers: r } = this;
            for (; r.length; ) r.shift().error(n);
          }
        });
      }
      complete() {
        gt(() => {
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
          ? lo
          : ((this.currentObservers = null),
            i.push(n),
            new P(() => {
              (this.currentObservers = null), Ve(i, n);
            }));
      }
      _checkFinalizedStatuses(n) {
        let { hasError: r, thrownError: o, isStopped: i } = this;
        r ? n.error(o) : i && n.complete();
      }
      asObservable() {
        let n = new _();
        return (n.source = this), n;
      }
    }
    return (e.create = (t, n) => new Nn(t, n)), e;
  })(),
  Nn = class extends Te {
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
        : lo;
    }
  };
var Wt = class extends Te {
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
var Eo = {
  now() {
    return (Eo.delegate || Date).now();
  },
  delegate: void 0,
};
var An = class extends P {
  constructor(t, n) {
    super();
  }
  schedule(t, n = 0) {
    return this;
  }
};
var qt = {
  setInterval(e, t, ...n) {
    let { delegate: r } = qt;
    return r?.setInterval ? r.setInterval(e, t, ...n) : setInterval(e, t, ...n);
  },
  clearInterval(e) {
    let { delegate: t } = qt;
    return (t?.clearInterval || clearInterval)(e);
  },
  delegate: void 0,
};
var On = class extends An {
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
    return qt.setInterval(t.flush.bind(t, this), r);
  }
  recycleAsyncId(t, n, r = 0) {
    if (r != null && this.delay === r && this.pending === !1) return n;
    n != null && qt.clearInterval(n);
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
        Ve(r, this),
        t != null && (this.id = this.recycleAsyncId(n, t, null)),
        (this.delay = null),
        super.unsubscribe();
    }
  }
};
var Dt = class e {
  constructor(t, n = e.now) {
    (this.schedulerActionCtor = t), (this.now = n);
  }
  schedule(t, n = 0, r) {
    return new this.schedulerActionCtor(this, t).schedule(r, n);
  }
};
Dt.now = Eo.now;
var Fn = class extends Dt {
  constructor(t, n = Dt.now) {
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
var Zt = new Fn(On),
  la = Zt;
var He = new _((e) => e.complete());
function Rn(e) {
  return e && g(e.schedule);
}
function wo(e) {
  return e[e.length - 1];
}
function Pn(e) {
  return g(wo(e)) ? e.pop() : void 0;
}
function fe(e) {
  return Rn(wo(e)) ? e.pop() : void 0;
}
function da(e, t) {
  return typeof wo(e) == "number" ? e.pop() : t;
}
function ha(e, t, n, r) {
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
function fa(e) {
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
function Ue(e) {
  return this instanceof Ue ? ((this.v = e), this) : new Ue(e);
}
function pa(e, t, n) {
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
      ((o[f] = function (S) {
        return new Promise(function (V, O) {
          i.push([f, S, V, O]) > 1 || u(f, S);
        });
      }),
      p && (o[f] = p(o[f])));
  }
  function u(f, p) {
    try {
      c(r[f](p));
    } catch (S) {
      h(i[0][3], S);
    }
  }
  function c(f) {
    f.value instanceof Ue
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
function ga(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    n;
  return t
    ? t.call(e)
    : ((e = typeof fa == "function" ? fa(e) : e[Symbol.iterator]()),
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
var vt = (e) => e && typeof e.length == "number" && typeof e != "function";
function kn(e) {
  return g(e?.then);
}
function Ln(e) {
  return g(e[yt]);
}
function jn(e) {
  return Symbol.asyncIterator && g(e?.[Symbol.asyncIterator]);
}
function Vn(e) {
  return new TypeError(
    `You provided ${e !== null && typeof e == "object" ? "an invalid object" : `'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`,
  );
}
function zd() {
  return typeof Symbol != "function" || !Symbol.iterator
    ? "@@iterator"
    : Symbol.iterator;
}
var Bn = zd();
function $n(e) {
  return g(e?.[Bn]);
}
function Hn(e) {
  return pa(this, arguments, function* () {
    let n = e.getReader();
    try {
      for (;;) {
        let { value: r, done: o } = yield Ue(n.read());
        if (o) return yield Ue(void 0);
        yield yield Ue(r);
      }
    } finally {
      n.releaseLock();
    }
  });
}
function Un(e) {
  return g(e?.getReader);
}
function A(e) {
  if (e instanceof _) return e;
  if (e != null) {
    if (Ln(e)) return Gd(e);
    if (vt(e)) return Wd(e);
    if (kn(e)) return qd(e);
    if (jn(e)) return ma(e);
    if ($n(e)) return Zd(e);
    if (Un(e)) return Yd(e);
  }
  throw Vn(e);
}
function Gd(e) {
  return new _((t) => {
    let n = e[yt]();
    if (g(n.subscribe)) return n.subscribe(t);
    throw new TypeError(
      "Provided object does not correctly implement Symbol.observable",
    );
  });
}
function Wd(e) {
  return new _((t) => {
    for (let n = 0; n < e.length && !t.closed; n++) t.next(e[n]);
    t.complete();
  });
}
function qd(e) {
  return new _((t) => {
    e.then(
      (n) => {
        t.closed || (t.next(n), t.complete());
      },
      (n) => t.error(n),
    ).then(null, Sn);
  });
}
function Zd(e) {
  return new _((t) => {
    for (let n of e) if ((t.next(n), t.closed)) return;
    t.complete();
  });
}
function ma(e) {
  return new _((t) => {
    Qd(e, t).catch((n) => t.error(n));
  });
}
function Yd(e) {
  return ma(Hn(e));
}
function Qd(e, t) {
  var n, r, o, i;
  return ha(this, void 0, void 0, function* () {
    try {
      for (n = ga(e); (r = yield n.next()), !r.done; ) {
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
function G(e, t, n, r = 0, o = !1) {
  let i = t.schedule(function () {
    n(), o ? e.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if ((e.add(i), !o)) return i;
}
function zn(e, t = 0) {
  return v((n, r) => {
    n.subscribe(
      y(
        r,
        (o) => G(r, e, () => r.next(o), t),
        () => G(r, e, () => r.complete(), t),
        (o) => G(r, e, () => r.error(o), t),
      ),
    );
  });
}
function Gn(e, t = 0) {
  return v((n, r) => {
    r.add(e.schedule(() => n.subscribe(r), t));
  });
}
function ya(e, t) {
  return A(e).pipe(Gn(t), zn(t));
}
function Da(e, t) {
  return A(e).pipe(Gn(t), zn(t));
}
function va(e, t) {
  return new _((n) => {
    let r = 0;
    return t.schedule(function () {
      r === e.length
        ? n.complete()
        : (n.next(e[r++]), n.closed || this.schedule());
    });
  });
}
function Ia(e, t) {
  return new _((n) => {
    let r;
    return (
      G(n, t, () => {
        (r = e[Bn]()),
          G(
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
function Wn(e, t) {
  if (!e) throw new Error("Iterable cannot be null");
  return new _((n) => {
    G(n, t, () => {
      let r = e[Symbol.asyncIterator]();
      G(
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
function Ea(e, t) {
  return Wn(Hn(e), t);
}
function wa(e, t) {
  if (e != null) {
    if (Ln(e)) return ya(e, t);
    if (vt(e)) return va(e, t);
    if (kn(e)) return Da(e, t);
    if (jn(e)) return Wn(e, t);
    if ($n(e)) return Ia(e, t);
    if (Un(e)) return Ea(e, t);
  }
  throw Vn(e);
}
function he(e, t) {
  return t ? wa(e, t) : A(e);
}
function Kd(...e) {
  let t = fe(e);
  return he(e, t);
}
function Jd(e, t) {
  let n = g(e) ? e : () => e,
    r = (o) => o.error(n());
  return new _(t ? (o) => t.schedule(r, 0, o) : r);
}
function Xd(e) {
  return !!e && (e instanceof _ || (g(e.lift) && g(e.subscribe)));
}
var ze = ht(
  (e) =>
    function () {
      e(this),
        (this.name = "EmptyError"),
        (this.message = "no elements in sequence");
    },
);
function Ca(e) {
  return e instanceof Date && !isNaN(e);
}
function Ee(e, t) {
  return v((n, r) => {
    let o = 0;
    n.subscribe(
      y(r, (i) => {
        r.next(e.call(t, i, o++));
      }),
    );
  });
}
var { isArray: ef } = Array;
function tf(e, t) {
  return ef(t) ? e(...t) : e(t);
}
function It(e) {
  return Ee((t) => tf(e, t));
}
var { isArray: nf } = Array,
  { getPrototypeOf: rf, prototype: of, keys: sf } = Object;
function qn(e) {
  if (e.length === 1) {
    let t = e[0];
    if (nf(t)) return { args: t, keys: null };
    if (af(t)) {
      let n = sf(t);
      return { args: n.map((r) => t[r]), keys: n };
    }
  }
  return { args: e, keys: null };
}
function af(e) {
  return e && typeof e == "object" && rf(e) === of;
}
function Zn(e, t) {
  return e.reduce((n, r, o) => ((n[r] = t[o]), n), {});
}
function uf(...e) {
  let t = fe(e),
    n = Pn(e),
    { args: r, keys: o } = qn(e);
  if (r.length === 0) return he([], t);
  let i = new _(cf(r, t, o ? (s) => Zn(o, s) : U));
  return n ? i.pipe(It(n)) : i;
}
function cf(e, t, n = U) {
  return (r) => {
    ba(
      t,
      () => {
        let { length: o } = e,
          i = new Array(o),
          s = o,
          a = o;
        for (let u = 0; u < o; u++)
          ba(
            t,
            () => {
              let c = he(e[u], t),
                l = !1;
              c.subscribe(
                y(
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
function ba(e, t, n) {
  e ? G(n, e, t) : t();
}
function _a(e, t, n, r, o, i, s, a) {
  let u = [],
    c = 0,
    l = 0,
    d = !1,
    h = () => {
      d && !u.length && !c && t.complete();
    },
    f = (S) => (c < r ? p(S) : u.push(S)),
    p = (S) => {
      i && t.next(S), c++;
      let V = !1;
      A(n(S, l++)).subscribe(
        y(
          t,
          (O) => {
            o?.(O), i ? f(O) : t.next(O);
          },
          () => {
            V = !0;
          },
          void 0,
          () => {
            if (V)
              try {
                for (c--; u.length && c < r; ) {
                  let O = u.shift();
                  s ? G(t, s, () => p(O)) : p(O);
                }
                h();
              } catch (O) {
                t.error(O);
              }
          },
        ),
      );
    };
  return (
    e.subscribe(
      y(t, f, () => {
        (d = !0), h();
      }),
    ),
    () => {
      a?.();
    }
  );
}
function we(e, t, n = 1 / 0) {
  return g(t)
    ? we((r, o) => Ee((i, s) => t(r, i, o, s))(A(e(r, o))), n)
    : (typeof t == "number" && (n = t), v((r, o) => _a(r, o, e, n)));
}
function Yt(e = 1 / 0) {
  return we(U, e);
}
function Ma() {
  return Yt(1);
}
function Yn(...e) {
  return Ma()(he(e, fe(e)));
}
function lf(e) {
  return new _((t) => {
    A(e()).subscribe(t);
  });
}
function df(...e) {
  let t = Pn(e),
    { args: n, keys: r } = qn(e),
    o = new _((i) => {
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
        A(n[l]).subscribe(
          y(
            i,
            (h) => {
              d || ((d = !0), c--), (a[l] = h);
            },
            () => u--,
            void 0,
            () => {
              (!u || !d) && (c || i.next(r ? Zn(r, a) : a), i.complete());
            },
          ),
        );
      }
    });
  return t ? o.pipe(It(t)) : o;
}
var ff = ["addListener", "removeListener"],
  hf = ["addEventListener", "removeEventListener"],
  pf = ["on", "off"];
function Co(e, t, n, r) {
  if ((g(n) && ((r = n), (n = void 0)), r)) return Co(e, t, n).pipe(It(r));
  let [o, i] = yf(e)
    ? hf.map((s) => (a) => e[s](t, a, n))
    : gf(e)
      ? ff.map(xa(e, t))
      : mf(e)
        ? pf.map(xa(e, t))
        : [];
  if (!o && vt(e)) return we((s) => Co(s, t, n))(A(e));
  if (!o) throw new TypeError("Invalid event target");
  return new _((s) => {
    let a = (...u) => s.next(1 < u.length ? u : u[0]);
    return o(a), () => i(a);
  });
}
function xa(e, t) {
  return (n) => (r) => e[n](t, r);
}
function gf(e) {
  return g(e.addListener) && g(e.removeListener);
}
function mf(e) {
  return g(e.on) && g(e.off);
}
function yf(e) {
  return g(e.addEventListener) && g(e.removeEventListener);
}
function Sa(e = 0, t, n = la) {
  let r = -1;
  return (
    t != null && (Rn(t) ? (n = t) : (r = t)),
    new _((o) => {
      let i = Ca(e) ? +e - n.now() : e;
      i < 0 && (i = 0);
      let s = 0;
      return n.schedule(function () {
        o.closed ||
          (o.next(s++), 0 <= r ? this.schedule(void 0, r) : o.complete());
      }, i);
    })
  );
}
function Df(...e) {
  let t = fe(e),
    n = da(e, 1 / 0),
    r = e;
  return r.length ? (r.length === 1 ? A(r[0]) : Yt(n)(he(r, t))) : He;
}
function Ge(e, t) {
  return v((n, r) => {
    let o = 0;
    n.subscribe(y(r, (i) => e.call(t, i, o++) && r.next(i)));
  });
}
function Ta(e) {
  return v((t, n) => {
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
      y(
        n,
        (c) => {
          (r = !0), (o = c), i || A(e(c)).subscribe((i = y(n, a, u)));
        },
        () => {
          (s = !0), (!r || !i || i.closed) && n.complete();
        },
      ),
    );
  });
}
function vf(e, t = Zt) {
  return Ta(() => Sa(e, t));
}
function Na(e) {
  return v((t, n) => {
    let r = null,
      o = !1,
      i;
    (r = t.subscribe(
      y(n, void 0, void 0, (s) => {
        (i = A(e(s, Na(e)(t)))),
          r ? (r.unsubscribe(), (r = null), i.subscribe(n)) : (o = !0);
      }),
    )),
      o && (r.unsubscribe(), (r = null), i.subscribe(n));
  });
}
function Aa(e, t, n, r, o) {
  return (i, s) => {
    let a = n,
      u = t,
      c = 0;
    i.subscribe(
      y(
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
function If(e, t) {
  return g(t) ? we(e, t, 1) : we(e, 1);
}
function Ef(e, t = Zt) {
  return v((n, r) => {
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
      y(
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
function Qt(e) {
  return v((t, n) => {
    let r = !1;
    t.subscribe(
      y(
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
function bo(e) {
  return e <= 0
    ? () => He
    : v((t, n) => {
        let r = 0;
        t.subscribe(
          y(n, (o) => {
            ++r <= e && (n.next(o), e <= r && n.complete());
          }),
        );
      });
}
function wf(e) {
  return Ee(() => e);
}
function Cf(e, t = U) {
  return (
    (e = e ?? bf),
    v((n, r) => {
      let o,
        i = !0;
      n.subscribe(
        y(r, (s) => {
          let a = t(s);
          (i || !e(o, a)) && ((i = !1), (o = a), r.next(s));
        }),
      );
    })
  );
}
function bf(e, t) {
  return e === t;
}
function Qn(e = _f) {
  return v((t, n) => {
    let r = !1;
    t.subscribe(
      y(
        n,
        (o) => {
          (r = !0), n.next(o);
        },
        () => (r ? n.complete() : n.error(e())),
      ),
    );
  });
}
function _f() {
  return new ze();
}
function Mf(e) {
  return v((t, n) => {
    try {
      t.subscribe(n);
    } finally {
      n.add(e);
    }
  });
}
function Oa(e, t) {
  let n = arguments.length >= 2;
  return (r) =>
    r.pipe(
      e ? Ge((o, i) => e(o, i, r)) : U,
      bo(1),
      n ? Qt(t) : Qn(() => new ze()),
    );
}
function _o(e) {
  return e <= 0
    ? () => He
    : v((t, n) => {
        let r = [];
        t.subscribe(
          y(
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
function xf(e, t) {
  let n = arguments.length >= 2;
  return (r) =>
    r.pipe(
      e ? Ge((o, i) => e(o, i, r)) : U,
      _o(1),
      n ? Qt(t) : Qn(() => new ze()),
    );
}
function Sf(e, t) {
  return v(Aa(e, t, arguments.length >= 2, !0));
}
function Tf(e) {
  return Ge((t, n) => e <= n);
}
function Nf(...e) {
  let t = fe(e);
  return v((n, r) => {
    (t ? Yn(e, n, t) : Yn(e, n)).subscribe(r);
  });
}
function Af(e, t) {
  return v((n, r) => {
    let o = null,
      i = 0,
      s = !1,
      a = () => s && !o && r.complete();
    n.subscribe(
      y(
        r,
        (u) => {
          o?.unsubscribe();
          let c = 0,
            l = i++;
          A(e(u, l)).subscribe(
            (o = y(
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
function Of(e) {
  return v((t, n) => {
    A(e).subscribe(y(n, () => n.complete(), Gt)), !n.closed && t.subscribe(n);
  });
}
function Ff(e, t, n) {
  let r = g(e) || t || n ? { next: e, error: t, complete: n } : e;
  return r
    ? v((o, i) => {
        var s;
        (s = r.subscribe) === null || s === void 0 || s.call(r);
        let a = !0;
        o.subscribe(
          y(
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
    : U;
}
var Cu = "https://g.co/ng/security#xss",
  C = class extends Error {
    constructor(t, n) {
      super(bu(t, n)), (this.code = t);
    }
  };
function bu(e, t) {
  return `${`NG0${Math.abs(e)}`}${t ? ": " + t : ""}`;
}
function cn(e) {
  return { toString: e }.toString();
}
var Kn = "__parameters__";
function Rf(e) {
  return function (...n) {
    if (e) {
      let r = e(...n);
      for (let o in r) this[o] = r[o];
    }
  };
}
function _u(e, t, n) {
  return cn(() => {
    let r = Rf(t);
    function o(...i) {
      if (this instanceof o) return r.apply(this, i), this;
      let s = new o(...i);
      return (a.annotation = s), a;
      function a(u, c, l) {
        let d = u.hasOwnProperty(Kn)
          ? u[Kn]
          : Object.defineProperty(u, Kn, { value: [] })[Kn];
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
var en = globalThis;
function N(e) {
  for (let t in e) if (e[t] === N) return t;
  throw Error("Could not find renamed property on target object.");
}
function Pf(e, t) {
  for (let n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
}
function q(e) {
  if (typeof e == "string") return e;
  if (Array.isArray(e)) return "[" + e.map(q).join(", ") + "]";
  if (e == null) return "" + e;
  if (e.overriddenName) return `${e.overriddenName}`;
  if (e.name) return `${e.name}`;
  let t = e.toString();
  if (t == null) return "" + t;
  let n = t.indexOf(`
`);
  return n === -1 ? t : t.substring(0, n);
}
function jo(e, t) {
  return e == null || e === ""
    ? t === null
      ? ""
      : t
    : t == null || t === ""
      ? e
      : e + " " + t;
}
var kf = N({ __forward_ref__: N });
function Mu(e) {
  return (
    (e.__forward_ref__ = Mu),
    (e.toString = function () {
      return q(this());
    }),
    e
  );
}
function z(e) {
  return xu(e) ? e() : e;
}
function xu(e) {
  return (
    typeof e == "function" && e.hasOwnProperty(kf) && e.__forward_ref__ === Mu
  );
}
function T(e) {
  return {
    token: e.token,
    providedIn: e.providedIn || null,
    factory: e.factory,
    value: void 0,
  };
}
function ji(e) {
  return { providers: e.providers || [], imports: e.imports || [] };
}
function Ur(e) {
  return Fa(e, Su) || Fa(e, Tu);
}
function oM(e) {
  return Ur(e) !== null;
}
function Fa(e, t) {
  return e.hasOwnProperty(t) ? e[t] : null;
}
function Lf(e) {
  let t = e && (e[Su] || e[Tu]);
  return t || null;
}
function Ra(e) {
  return e && (e.hasOwnProperty(Pa) || e.hasOwnProperty(jf)) ? e[Pa] : null;
}
var Su = N({ ɵprov: N }),
  Pa = N({ ɵinj: N }),
  Tu = N({ ngInjectableDef: N }),
  jf = N({ ngInjectorDef: N }),
  M = class {
    constructor(t, n) {
      (this._desc = t),
        (this.ngMetadataName = "InjectionToken"),
        (this.ɵprov = void 0),
        typeof n == "number"
          ? (this.__NG_ELEMENT_ID__ = n)
          : n !== void 0 &&
            (this.ɵprov = T({
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
function Nu(e) {
  return e && !!e.ɵproviders;
}
var Vf = N({ ɵcmp: N }),
  Bf = N({ ɵdir: N }),
  $f = N({ ɵpipe: N }),
  Hf = N({ ɵmod: N }),
  dr = N({ ɵfac: N }),
  Jt = N({ __NG_ELEMENT_ID__: N }),
  ka = N({ __NG_ENV_ID__: N });
function ln(e) {
  return typeof e == "string" ? e : e == null ? "" : String(e);
}
function Uf(e) {
  return typeof e == "function"
    ? e.name || e.toString()
    : typeof e == "object" && e != null && typeof e.type == "function"
      ? e.type.name || e.type.toString()
      : ln(e);
}
function zf(e, t) {
  let n = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
  throw new C(-200, e);
}
function Vi(e, t) {
  throw new C(-201, !1);
}
var w = (function (e) {
    return (
      (e[(e.Default = 0)] = "Default"),
      (e[(e.Host = 1)] = "Host"),
      (e[(e.Self = 2)] = "Self"),
      (e[(e.SkipSelf = 4)] = "SkipSelf"),
      (e[(e.Optional = 8)] = "Optional"),
      e
    );
  })(w || {}),
  Vo;
function Au() {
  return Vo;
}
function X(e) {
  let t = Vo;
  return (Vo = e), t;
}
function Ou(e, t, n) {
  let r = Ur(e);
  if (r && r.providedIn == "root")
    return r.value === void 0 ? (r.value = r.factory()) : r.value;
  if (n & w.Optional) return null;
  if (t !== void 0) return t;
  Vi(e, "Injector");
}
var Gf = {},
  tn = Gf,
  Bo = "__NG_DI_FLAG__",
  fr = "ngTempTokenPath",
  Wf = "ngTokenPath",
  qf = /\n/gm,
  Zf = "\u0275",
  La = "__source",
  _t;
function Yf() {
  return _t;
}
function Ne(e) {
  let t = _t;
  return (_t = e), t;
}
function Qf(e, t = w.Default) {
  if (_t === void 0) throw new C(-203, !1);
  return _t === null
    ? Ou(e, void 0, t)
    : _t.get(e, t & w.Optional ? null : void 0, t);
}
function F(e, t = w.Default) {
  return (Au() || Qf)(z(e), t);
}
function I(e, t = w.Default) {
  return F(e, zr(t));
}
function zr(e) {
  return typeof e > "u" || typeof e == "number"
    ? e
    : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4);
}
function $o(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = z(e[n]);
    if (Array.isArray(r)) {
      if (r.length === 0) throw new C(900, !1);
      let o,
        i = w.Default;
      for (let s = 0; s < r.length; s++) {
        let a = r[s],
          u = Kf(a);
        typeof u == "number" ? (u === -1 ? (o = a.token) : (i |= u)) : (o = a);
      }
      t.push(F(o, i));
    } else t.push(F(r));
  }
  return t;
}
function Fu(e, t) {
  return (e[Bo] = t), (e.prototype[Bo] = t), e;
}
function Kf(e) {
  return e[Bo];
}
function Jf(e, t, n, r) {
  let o = e[fr];
  throw (
    (t[La] && o.unshift(t[La]),
    (e.message = Xf(
      `
` + e.message,
      o,
      n,
      r,
    )),
    (e[Wf] = o),
    (e[fr] = null),
    e)
  );
}
function Xf(e, t, n, r = null) {
  e =
    e &&
    e.charAt(0) ===
      `
` &&
    e.charAt(1) == Zf
      ? e.slice(2)
      : e;
  let o = q(t);
  if (Array.isArray(t)) o = t.map(q).join(" -> ");
  else if (typeof t == "object") {
    let i = [];
    for (let s in t)
      if (t.hasOwnProperty(s)) {
        let a = t[s];
        i.push(s + ":" + (typeof a == "string" ? JSON.stringify(a) : q(a)));
      }
    o = `{${i.join(", ")}}`;
  }
  return `${n}${r ? "(" + r + ")" : ""}[${o}]: ${e.replace(
    qf,
    `
  `,
  )}`;
}
var eh = Fu(_u("Optional"), 8);
var th = Fu(_u("SkipSelf"), 4);
function xt(e, t) {
  let n = e.hasOwnProperty(dr);
  return n ? e[dr] : null;
}
function nh(e, t, n) {
  if (e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) {
    let o = e[r],
      i = t[r];
    if ((n && ((o = n(o)), (i = n(i))), i !== o)) return !1;
  }
  return !0;
}
function rh(e) {
  return e.flat(Number.POSITIVE_INFINITY);
}
function Bi(e, t) {
  e.forEach((n) => (Array.isArray(n) ? Bi(n, t) : t(n)));
}
function Ru(e, t, n) {
  t >= e.length ? e.push(n) : e.splice(t, 0, n);
}
function hr(e, t) {
  return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
}
function oh(e, t) {
  let n = [];
  for (let r = 0; r < e; r++) n.push(t);
  return n;
}
function ih(e, t, n, r) {
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
function Gr(e, t, n) {
  let r = dn(e, t);
  return r >= 0 ? (e[r | 1] = n) : ((r = ~r), ih(e, r, t, n)), r;
}
function Mo(e, t) {
  let n = dn(e, t);
  if (n >= 0) return e[n | 1];
}
function dn(e, t) {
  return sh(e, t, 1);
}
function sh(e, t, n) {
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
var St = {},
  W = [],
  pr = new M(""),
  Pu = new M("", -1),
  ku = new M(""),
  gr = class {
    get(t, n = tn) {
      if (n === tn) {
        let r = new Error(`NullInjectorError: No provider for ${q(t)}!`);
        throw ((r.name = "NullInjectorError"), r);
      }
      return n;
    }
  },
  Lu = (function (e) {
    return (e[(e.OnPush = 0)] = "OnPush"), (e[(e.Default = 1)] = "Default"), e;
  })(Lu || {}),
  nn = (function (e) {
    return (
      (e[(e.Emulated = 0)] = "Emulated"),
      (e[(e.None = 2)] = "None"),
      (e[(e.ShadowDom = 3)] = "ShadowDom"),
      e
    );
  })(nn || {}),
  Fe = (function (e) {
    return (
      (e[(e.None = 0)] = "None"),
      (e[(e.SignalBased = 1)] = "SignalBased"),
      (e[(e.HasDecoratorInputTransform = 2)] = "HasDecoratorInputTransform"),
      e
    );
  })(Fe || {});
function ah(e, t, n) {
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
function Ho(e, t, n) {
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
      uh(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), r++;
    }
  }
  return r;
}
function ju(e) {
  return e === 3 || e === 4 || e === 6;
}
function uh(e) {
  return e.charCodeAt(0) === 64;
}
function rn(e, t) {
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
              ? ja(e, n, o, null, t[++r])
              : ja(e, n, o, null, null));
      }
    }
  return e;
}
function ja(e, t, n, r, o) {
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
var Vu = "ng-template";
function ch(e, t, n, r) {
  let o = 0;
  if (r) {
    for (; o < t.length && typeof t[o] == "string"; o += 2)
      if (t[o] === "class" && ah(t[o + 1].toLowerCase(), n, 0) !== -1)
        return !0;
  } else if ($i(e)) return !1;
  if (((o = t.indexOf(1, o)), o > -1)) {
    let i;
    for (; ++o < t.length && typeof (i = t[o]) == "string"; )
      if (i.toLowerCase() === n) return !0;
  }
  return !1;
}
function $i(e) {
  return e.type === 4 && e.value !== Vu;
}
function lh(e, t, n) {
  let r = e.type === 4 && !n ? Vu : e.value;
  return t === r;
}
function dh(e, t, n) {
  let r = 4,
    o = e.attrs,
    i = o !== null ? ph(o) : 0,
    s = !1;
  for (let a = 0; a < t.length; a++) {
    let u = t[a];
    if (typeof u == "number") {
      if (!s && !ue(r) && !ue(u)) return !1;
      if (s && ue(u)) continue;
      (s = !1), (r = u | (r & 1));
      continue;
    }
    if (!s)
      if (r & 4) {
        if (
          ((r = 2 | (r & 1)),
          (u !== "" && !lh(e, u, n)) || (u === "" && t.length === 1))
        ) {
          if (ue(r)) return !1;
          s = !0;
        }
      } else if (r & 8) {
        if (o === null || !ch(e, o, u, n)) {
          if (ue(r)) return !1;
          s = !0;
        }
      } else {
        let c = t[++a],
          l = fh(u, o, $i(e), n);
        if (l === -1) {
          if (ue(r)) return !1;
          s = !0;
          continue;
        }
        if (c !== "") {
          let d;
          if (
            (l > i ? (d = "") : (d = o[l + 1].toLowerCase()), r & 2 && c !== d)
          ) {
            if (ue(r)) return !1;
            s = !0;
          }
        }
      }
  }
  return ue(r) || s;
}
function ue(e) {
  return (e & 1) === 0;
}
function fh(e, t, n, r) {
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
  } else return gh(t, e);
}
function Bu(e, t, n = !1) {
  for (let r = 0; r < t.length; r++) if (dh(e, t[r], n)) return !0;
  return !1;
}
function hh(e) {
  let t = e.attrs;
  if (t != null) {
    let n = t.indexOf(5);
    if (!(n & 1)) return t[n + 1];
  }
  return null;
}
function ph(e) {
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (ju(n)) return t;
  }
  return e.length;
}
function gh(e, t) {
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
function mh(e, t) {
  e: for (let n = 0; n < t.length; n++) {
    let r = t[n];
    if (e.length === r.length) {
      for (let o = 0; o < e.length; o++) if (e[o] !== r[o]) continue e;
      return !0;
    }
  }
  return !1;
}
function Va(e, t) {
  return e ? ":not(" + t.trim() + ")" : t;
}
function yh(e) {
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
      o !== "" && !ue(s) && ((t += Va(i, o)), (o = "")),
        (r = s),
        (i = i || !ue(r));
    n++;
  }
  return o !== "" && (t += Va(i, o)), t;
}
function Dh(e) {
  return e.map(yh).join(",");
}
function vh(e) {
  let t = [],
    n = [],
    r = 1,
    o = 2;
  for (; r < e.length; ) {
    let i = e[r];
    if (typeof i == "string")
      o === 2 ? i !== "" && t.push(i, e[++r]) : o === 8 && n.push(i);
    else {
      if (!ue(o)) break;
      o = i;
    }
    r++;
  }
  return { attrs: t, classes: n };
}
function iM(e) {
  return cn(() => {
    let t = Gu(e),
      n = se(K({}, t), {
        decls: e.decls,
        vars: e.vars,
        template: e.template,
        consts: e.consts || null,
        ngContentSelectors: e.ngContentSelectors,
        onPush: e.changeDetection === Lu.OnPush,
        directiveDefs: null,
        pipeDefs: null,
        dependencies: (t.standalone && e.dependencies) || null,
        getStandaloneInjector: null,
        signals: e.signals ?? !1,
        data: e.data || {},
        encapsulation: e.encapsulation || nn.Emulated,
        styles: e.styles || W,
        _: null,
        schemas: e.schemas || null,
        tView: null,
        id: "",
      });
    Wu(n);
    let r = e.dependencies;
    return (
      (n.directiveDefs = $a(r, !1)), (n.pipeDefs = $a(r, !0)), (n.id = Ch(n)), n
    );
  });
}
function Ih(e) {
  return Re(e) || Hu(e);
}
function Eh(e) {
  return e !== null;
}
function Hi(e) {
  return cn(() => ({
    type: e.type,
    bootstrap: e.bootstrap || W,
    declarations: e.declarations || W,
    imports: e.imports || W,
    exports: e.exports || W,
    transitiveCompileScopes: null,
    schemas: e.schemas || null,
    id: e.id || null,
  }));
}
function Ba(e, t) {
  if (e == null) return St;
  let n = {};
  for (let r in e)
    if (e.hasOwnProperty(r)) {
      let o = e[r],
        i,
        s,
        a = Fe.None;
      Array.isArray(o)
        ? ((a = o[0]), (i = o[1]), (s = o[2] ?? i))
        : ((i = o), (s = o)),
        t ? ((n[i] = a !== Fe.None ? [r, a] : r), (t[i] = s)) : (n[i] = r);
    }
  return n;
}
function $u(e) {
  return cn(() => {
    let t = Gu(e);
    return Wu(t), t;
  });
}
function Re(e) {
  return e[Vf] || null;
}
function Hu(e) {
  return e[Bf] || null;
}
function Uu(e) {
  return e[$f] || null;
}
function wh(e) {
  let t = Re(e) || Hu(e) || Uu(e);
  return t !== null ? t.standalone : !1;
}
function zu(e, t) {
  let n = e[Hf] || null;
  if (!n && t === !0)
    throw new Error(`Type ${q(e)} does not have '\u0275mod' property.`);
  return n;
}
function Gu(e) {
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
    inputConfig: e.inputs || St,
    exportAs: e.exportAs || null,
    standalone: e.standalone === !0,
    signals: e.signals === !0,
    selectors: e.selectors || W,
    viewQuery: e.viewQuery || null,
    features: e.features || null,
    setInput: null,
    findHostDirectiveDefs: null,
    hostDirectives: null,
    inputs: Ba(e.inputs, t),
    outputs: Ba(e.outputs),
    debugInfo: null,
  };
}
function Wu(e) {
  e.features?.forEach((t) => t(e));
}
function $a(e, t) {
  if (!e) return null;
  let n = t ? Uu : Ih;
  return () => (typeof e == "function" ? e() : e).map((r) => n(r)).filter(Eh);
}
function Ch(e) {
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
function sM(e) {
  return { ɵproviders: e };
}
function bh(...e) {
  return { ɵproviders: qu(!0, e), ɵfromNgModule: !0 };
}
function qu(e, ...t) {
  let n = [],
    r = new Set(),
    o,
    i = (s) => {
      n.push(s);
    };
  return (
    Bi(t, (s) => {
      let a = s;
      Uo(a, i, [], r) && ((o ||= []), o.push(a));
    }),
    o !== void 0 && Zu(o, i),
    n
  );
}
function Zu(e, t) {
  for (let n = 0; n < e.length; n++) {
    let { ngModule: r, providers: o } = e[n];
    Ui(o, (i) => {
      t(i, r);
    });
  }
}
function Uo(e, t, n, r) {
  if (((e = z(e)), !e)) return !1;
  let o = null,
    i = Ra(e),
    s = !i && Re(e);
  if (!i && !s) {
    let u = e.ngModule;
    if (((i = Ra(u)), i)) o = u;
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
      for (let c of u) Uo(c, t, n, r);
    }
  } else if (i) {
    if (i.imports != null && !a) {
      r.add(o);
      let c;
      try {
        Bi(i.imports, (l) => {
          Uo(l, t, n, r) && ((c ||= []), c.push(l));
        });
      } finally {
      }
      c !== void 0 && Zu(c, t);
    }
    if (!a) {
      let c = xt(o) || (() => new o());
      t({ provide: o, useFactory: c, deps: W }, o),
        t({ provide: ku, useValue: o, multi: !0 }, o),
        t({ provide: pr, useValue: () => F(o), multi: !0 }, o);
    }
    let u = i.providers;
    if (u != null && !a) {
      let c = e;
      Ui(u, (l) => {
        t(l, c);
      });
    }
  } else return !1;
  return o !== e && e.providers !== void 0;
}
function Ui(e, t) {
  for (let n of e)
    Nu(n) && (n = n.ɵproviders), Array.isArray(n) ? Ui(n, t) : t(n);
}
var _h = N({ provide: String, useValue: N });
function Yu(e) {
  return e !== null && typeof e == "object" && _h in e;
}
function Mh(e) {
  return !!(e && e.useExisting);
}
function xh(e) {
  return !!(e && e.useFactory);
}
function Tt(e) {
  return typeof e == "function";
}
function Sh(e) {
  return !!e.useClass;
}
var Qu = new M(""),
  ir = {},
  Th = {},
  xo;
function zi() {
  return xo === void 0 && (xo = new gr()), xo;
}
var Pe = class {},
  on = class extends Pe {
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
        Go(t, (s) => this.processProvider(s)),
        this.records.set(Pu, Et(void 0, this)),
        o.has("environment") && this.records.set(Pe, Et(void 0, this));
      let i = this.records.get(Qu);
      i != null && typeof i.value == "string" && this.scopes.add(i.value),
        (this.injectorDefTypes = new Set(this.get(ku, W, w.Self)));
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
      let n = Ne(this),
        r = X(void 0),
        o;
      try {
        return t();
      } finally {
        Ne(n), X(r);
      }
    }
    get(t, n = tn, r = w.Default) {
      if ((this.assertNotDestroyed(), t.hasOwnProperty(ka))) return t[ka](this);
      r = zr(r);
      let o,
        i = Ne(this),
        s = X(void 0);
      try {
        if (!(r & w.SkipSelf)) {
          let u = this.records.get(t);
          if (u === void 0) {
            let c = Rh(t) && Ur(t);
            c && this.injectableDefInScope(c)
              ? (u = Et(zo(t), ir))
              : (u = null),
              this.records.set(t, u);
          }
          if (u != null) return this.hydrate(t, u);
        }
        let a = r & w.Self ? zi() : this.parent;
        return (n = r & w.Optional && n === tn ? null : n), a.get(t, n);
      } catch (a) {
        if (a.name === "NullInjectorError") {
          if (((a[fr] = a[fr] || []).unshift(q(t)), i)) throw a;
          return Jf(a, t, "R3InjectorError", this.source);
        } else throw a;
      } finally {
        X(s), Ne(i);
      }
    }
    resolveInjectorInitializers() {
      let t = b(null),
        n = Ne(this),
        r = X(void 0),
        o;
      try {
        let i = this.get(pr, W, w.Self);
        for (let s of i) s();
      } finally {
        Ne(n), X(r), b(t);
      }
    }
    toString() {
      let t = [],
        n = this.records;
      for (let r of n.keys()) t.push(q(r));
      return `R3Injector[${t.join(", ")}]`;
    }
    assertNotDestroyed() {
      if (this._destroyed) throw new C(205, !1);
    }
    processProvider(t) {
      t = z(t);
      let n = Tt(t) ? t : z(t && t.provide),
        r = Ah(t);
      if (!Tt(t) && t.multi === !0) {
        let o = this.records.get(n);
        o ||
          ((o = Et(void 0, ir, !0)),
          (o.factory = () => $o(o.multi)),
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
          n.value === ir && ((n.value = Th), (n.value = n.factory())),
          typeof n.value == "object" &&
            n.value &&
            Fh(n.value) &&
            this._ngOnDestroyHooks.add(n.value),
          n.value
        );
      } finally {
        b(r);
      }
    }
    injectableDefInScope(t) {
      if (!t.providedIn) return !1;
      let n = z(t.providedIn);
      return typeof n == "string"
        ? n === "any" || this.scopes.has(n)
        : this.injectorDefTypes.has(n);
    }
    removeOnDestroy(t) {
      let n = this._onDestroyHooks.indexOf(t);
      n !== -1 && this._onDestroyHooks.splice(n, 1);
    }
  };
function zo(e) {
  let t = Ur(e),
    n = t !== null ? t.factory : xt(e);
  if (n !== null) return n;
  if (e instanceof M) throw new C(204, !1);
  if (e instanceof Function) return Nh(e);
  throw new C(204, !1);
}
function Nh(e) {
  if (e.length > 0) throw new C(204, !1);
  let n = Lf(e);
  return n !== null ? () => n.factory(e) : () => new e();
}
function Ah(e) {
  if (Yu(e)) return Et(void 0, e.useValue);
  {
    let t = Ku(e);
    return Et(t, ir);
  }
}
function Ku(e, t, n) {
  let r;
  if (Tt(e)) {
    let o = z(e);
    return xt(o) || zo(o);
  } else if (Yu(e)) r = () => z(e.useValue);
  else if (xh(e)) r = () => e.useFactory(...$o(e.deps || []));
  else if (Mh(e)) r = () => F(z(e.useExisting));
  else {
    let o = z(e && (e.useClass || e.provide));
    if (Oh(e)) r = () => new o(...$o(e.deps));
    else return xt(o) || zo(o);
  }
  return r;
}
function Et(e, t, n = !1) {
  return { factory: e, value: t, multi: n ? [] : void 0 };
}
function Oh(e) {
  return !!e.deps;
}
function Fh(e) {
  return (
    e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"
  );
}
function Rh(e) {
  return typeof e == "function" || (typeof e == "object" && e instanceof M);
}
function Go(e, t) {
  for (let n of e)
    Array.isArray(n) ? Go(n, t) : n && Nu(n) ? Go(n.ɵproviders, t) : t(n);
}
function aM(e, t) {
  e instanceof on && e.assertNotDestroyed();
  let n,
    r = Ne(e),
    o = X(void 0);
  try {
    return t();
  } finally {
    Ne(r), X(o);
  }
}
function Ju() {
  return Au() !== void 0 || Yf() != null;
}
function Xu(e) {
  if (!Ju()) throw new C(-203, !1);
}
function Ph(e) {
  let t = en.ng;
  if (t && t.ɵcompilerFacade) return t.ɵcompilerFacade;
  throw new Error("JIT compiler unavailable");
}
function kh(e) {
  return typeof e == "function";
}
var ve = 0,
  D = 1,
  m = 2,
  $ = 3,
  le = 4,
  Y = 5,
  sn = 6,
  mr = 7,
  te = 8,
  Nt = 9,
  me = 10,
  R = 11,
  an = 12,
  Ha = 13,
  jt = 14,
  ne = 15,
  Ye = 16,
  wt = 17,
  Ce = 18,
  Wr = 19,
  ec = 20,
  Ae = 21,
  sr = 22,
  ee = 23,
  re = 25,
  Gi = 1;
var Qe = 7,
  yr = 8,
  At = 9,
  Z = 10,
  Dr = (function (e) {
    return (
      (e[(e.None = 0)] = "None"),
      (e[(e.HasTransplantedViews = 2)] = "HasTransplantedViews"),
      e
    );
  })(Dr || {});
function Oe(e) {
  return Array.isArray(e) && typeof e[Gi] == "object";
}
function _e(e) {
  return Array.isArray(e) && e[Gi] === !0;
}
function tc(e) {
  return (e.flags & 4) !== 0;
}
function qr(e) {
  return e.componentOffset > -1;
}
function Wi(e) {
  return (e.flags & 1) === 1;
}
function be(e) {
  return !!e.template;
}
function Wo(e) {
  return (e[m] & 512) !== 0;
}
var qo = class {
  constructor(t, n, r) {
    (this.previousValue = t), (this.currentValue = n), (this.firstChange = r);
  }
  isFirstChange() {
    return this.firstChange;
  }
};
function nc(e, t, n, r) {
  t !== null ? t.applyValueToInputSignal(t, r) : (e[n] = r);
}
function rc() {
  return oc;
}
function oc(e) {
  return e.type.prototype.ngOnChanges && (e.setInput = jh), Lh;
}
rc.ngInherit = !0;
function Lh() {
  let e = sc(this),
    t = e?.current;
  if (t) {
    let n = e.previous;
    if (n === St) e.previous = t;
    else for (let r in t) n[r] = t[r];
    (e.current = null), this.ngOnChanges(t);
  }
}
function jh(e, t, n, r, o) {
  let i = this.declaredInputs[r],
    s = sc(e) || Vh(e, { previous: St, current: null }),
    a = s.current || (s.current = {}),
    u = s.previous,
    c = u[i];
  (a[i] = new qo(c && c.currentValue, n, u === St)), nc(e, t, o, n);
}
var ic = "__ngSimpleChanges__";
function sc(e) {
  return e[ic] || null;
}
function Vh(e, t) {
  return (e[ic] = t);
}
var Ua = null;
var pe = function (e, t, n) {
    Ua?.(e, t, n);
  },
  ac = "svg",
  Bh = "math";
function ye(e) {
  for (; Array.isArray(e); ) e = e[ve];
  return e;
}
function $h(e) {
  for (; Array.isArray(e); ) {
    if (typeof e[Gi] == "object") return e;
    e = e[ve];
  }
  return null;
}
function uc(e, t) {
  return ye(t[e]);
}
function oe(e, t) {
  return ye(t[e.index]);
}
function qi(e, t) {
  return e.data[t];
}
function Le(e, t) {
  let n = t[e];
  return Oe(n) ? n : n[ve];
}
function Hh(e) {
  return (e[m] & 4) === 4;
}
function Zi(e) {
  return (e[m] & 128) === 128;
}
function Uh(e) {
  return _e(e[$]);
}
function vr(e, t) {
  return t == null ? null : e[t];
}
function cc(e) {
  e[wt] = 0;
}
function lc(e) {
  e[m] & 1024 || ((e[m] |= 1024), Zi(e) && Yr(e));
}
function zh(e, t) {
  for (; e > 0; ) (t = t[jt]), e--;
  return t;
}
function Zr(e) {
  return !!(e[m] & 9216 || e[ee]?.dirty);
}
function Zo(e) {
  e[me].changeDetectionScheduler?.notify(8),
    e[m] & 64 && (e[m] |= 1024),
    Zr(e) && Yr(e);
}
function Yr(e) {
  e[me].changeDetectionScheduler?.notify(0);
  let t = Ke(e);
  for (; t !== null && !(t[m] & 8192 || ((t[m] |= 8192), !Zi(t))); ) t = Ke(t);
}
function dc(e, t) {
  if ((e[m] & 256) === 256) throw new C(911, !1);
  e[Ae] === null && (e[Ae] = []), e[Ae].push(t);
}
function Gh(e, t) {
  if (e[Ae] === null) return;
  let n = e[Ae].indexOf(t);
  n !== -1 && e[Ae].splice(n, 1);
}
function Ke(e) {
  let t = e[$];
  return _e(t) ? t[$] : t;
}
var E = { lFrame: Cc(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var fc = !1;
function Wh() {
  return E.lFrame.elementDepthCount;
}
function qh() {
  E.lFrame.elementDepthCount++;
}
function Zh() {
  E.lFrame.elementDepthCount--;
}
function hc() {
  return E.bindingsEnabled;
}
function pc() {
  return E.skipHydrationRootTNode !== null;
}
function Yh(e) {
  return E.skipHydrationRootTNode === e;
}
function Qh() {
  E.skipHydrationRootTNode = null;
}
function x() {
  return E.lFrame.lView;
}
function j() {
  return E.lFrame.tView;
}
function uM(e) {
  return (E.lFrame.contextLView = e), e[te];
}
function cM(e) {
  return (E.lFrame.contextLView = null), e;
}
function H() {
  let e = gc();
  for (; e !== null && e.type === 64; ) e = e.parent;
  return e;
}
function gc() {
  return E.lFrame.currentTNode;
}
function Kh() {
  let e = E.lFrame,
    t = e.currentTNode;
  return e.isParent ? t : t.parent;
}
function fn(e, t) {
  let n = E.lFrame;
  (n.currentTNode = e), (n.isParent = t);
}
function mc() {
  return E.lFrame.isParent;
}
function yc() {
  E.lFrame.isParent = !1;
}
function Dc() {
  return fc;
}
function za(e) {
  fc = e;
}
function Jh(e) {
  return (E.lFrame.bindingIndex = e);
}
function Vt() {
  return E.lFrame.bindingIndex++;
}
function vc(e) {
  let t = E.lFrame,
    n = t.bindingIndex;
  return (t.bindingIndex = t.bindingIndex + e), n;
}
function Xh() {
  return E.lFrame.inI18n;
}
function ep(e, t) {
  let n = E.lFrame;
  (n.bindingIndex = n.bindingRootIndex = e), Yo(t);
}
function tp() {
  return E.lFrame.currentDirectiveIndex;
}
function Yo(e) {
  E.lFrame.currentDirectiveIndex = e;
}
function Yi(e) {
  let t = E.lFrame.currentDirectiveIndex;
  return t === -1 ? null : e[t];
}
function Ic() {
  return E.lFrame.currentQueryIndex;
}
function Qi(e) {
  E.lFrame.currentQueryIndex = e;
}
function np(e) {
  let t = e[D];
  return t.type === 2 ? t.declTNode : t.type === 1 ? e[Y] : null;
}
function Ec(e, t, n) {
  if (n & w.SkipSelf) {
    let o = t,
      i = e;
    for (; (o = o.parent), o === null && !(n & w.Host); )
      if (((o = np(i)), o === null || ((i = i[jt]), o.type & 10))) break;
    if (o === null) return !1;
    (t = o), (e = i);
  }
  let r = (E.lFrame = wc());
  return (r.currentTNode = t), (r.lView = e), !0;
}
function Ki(e) {
  let t = wc(),
    n = e[D];
  (E.lFrame = t),
    (t.currentTNode = n.firstChild),
    (t.lView = e),
    (t.tView = n),
    (t.contextLView = e),
    (t.bindingIndex = n.bindingStartIndex),
    (t.inI18n = !1);
}
function wc() {
  let e = E.lFrame,
    t = e === null ? null : e.child;
  return t === null ? Cc(e) : t;
}
function Cc(e) {
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
function bc() {
  let e = E.lFrame;
  return (E.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e;
}
var _c = bc;
function Ji() {
  let e = bc();
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
function rp(e) {
  return (E.lFrame.contextLView = zh(e, E.lFrame.contextLView))[te];
}
function it() {
  return E.lFrame.selectedIndex;
}
function Je(e) {
  E.lFrame.selectedIndex = e;
}
function Qr() {
  let e = E.lFrame;
  return qi(e.tView, e.selectedIndex);
}
function lM() {
  E.lFrame.currentNamespace = ac;
}
function op() {
  return E.lFrame.currentNamespace;
}
var Mc = !0;
function Xi() {
  return Mc;
}
function es(e) {
  Mc = e;
}
function ip(e, t, n) {
  let { ngOnChanges: r, ngOnInit: o, ngDoCheck: i } = t.type.prototype;
  if (r) {
    let s = oc(t);
    (n.preOrderHooks ??= []).push(e, s),
      (n.preOrderCheckHooks ??= []).push(e, s);
  }
  o && (n.preOrderHooks ??= []).push(0 - e, o),
    i &&
      ((n.preOrderHooks ??= []).push(e, i),
      (n.preOrderCheckHooks ??= []).push(e, i));
}
function ts(e, t) {
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
function ar(e, t, n) {
  xc(e, t, 3, n);
}
function ur(e, t, n, r) {
  (e[m] & 3) === n && xc(e, t, n, r);
}
function So(e, t) {
  let n = e[m];
  (n & 3) === t && ((n &= 16383), (n += 1), (e[m] = n));
}
function xc(e, t, n, r) {
  let o = r !== void 0 ? e[wt] & 65535 : 0,
    i = r ?? -1,
    s = t.length - 1,
    a = 0;
  for (let u = o; u < s; u++)
    if (typeof t[u + 1] == "number") {
      if (((a = t[u]), r != null && a >= r)) break;
    } else
      t[u] < 0 && (e[wt] += 65536),
        (a < i || i == -1) &&
          (sp(e, n, t, u), (e[wt] = (e[wt] & 4294901760) + u + 2)),
        u++;
}
function Ga(e, t) {
  pe(4, e, t);
  let n = b(null);
  try {
    t.call(e);
  } finally {
    b(n), pe(5, e, t);
  }
}
function sp(e, t, n, r) {
  let o = n[r] < 0,
    i = n[r + 1],
    s = o ? -n[r] : n[r],
    a = e[s];
  o
    ? e[m] >> 14 < e[wt] >> 16 &&
      (e[m] & 3) === t &&
      ((e[m] += 16384), Ga(a, i))
    : Ga(a, i);
}
var Mt = -1,
  Xe = class {
    constructor(t, n, r) {
      (this.factory = t),
        (this.resolving = !1),
        (this.canSeeViewProviders = n),
        (this.injectImpl = r);
    }
  };
function ap(e) {
  return e instanceof Xe;
}
function up(e) {
  return (e.flags & 8) !== 0;
}
function cp(e) {
  return (e.flags & 16) !== 0;
}
var To = {},
  Qo = class {
    constructor(t, n) {
      (this.injector = t), (this.parentInjector = n);
    }
    get(t, n, r) {
      r = zr(r);
      let o = this.injector.get(t, To, r);
      return o !== To || n === To ? o : this.parentInjector.get(t, n, r);
    }
  };
function Sc(e) {
  return e !== Mt;
}
function Ir(e) {
  return e & 32767;
}
function lp(e) {
  return e >> 16;
}
function Er(e, t) {
  let n = lp(e),
    r = t;
  for (; n > 0; ) (r = r[jt]), n--;
  return r;
}
var Ko = !0;
function Wa(e) {
  let t = Ko;
  return (Ko = e), t;
}
var dp = 256,
  Tc = dp - 1,
  Nc = 5,
  fp = 0,
  ge = {};
function hp(e, t, n) {
  let r;
  typeof n == "string"
    ? (r = n.charCodeAt(0) || 0)
    : n.hasOwnProperty(Jt) && (r = n[Jt]),
    r == null && (r = n[Jt] = fp++);
  let o = r & Tc,
    i = 1 << o;
  t.data[e + (o >> Nc)] |= i;
}
function wr(e, t) {
  let n = Ac(e, t);
  if (n !== -1) return n;
  let r = t[D];
  r.firstCreatePass &&
    ((e.injectorIndex = t.length),
    No(r.data, e),
    No(t, null),
    No(r.blueprint, null));
  let o = ns(e, t),
    i = e.injectorIndex;
  if (Sc(o)) {
    let s = Ir(o),
      a = Er(o, t),
      u = a[D].data;
    for (let c = 0; c < 8; c++) t[i + c] = a[s + c] | u[s + c];
  }
  return (t[i + 8] = o), i;
}
function No(e, t) {
  e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
}
function Ac(e, t) {
  return e.injectorIndex === -1 ||
    (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
    t[e.injectorIndex + 8] === null
    ? -1
    : e.injectorIndex;
}
function ns(e, t) {
  if (e.parent && e.parent.injectorIndex !== -1) return e.parent.injectorIndex;
  let n = 0,
    r = null,
    o = t;
  for (; o !== null; ) {
    if (((r = kc(o)), r === null)) return Mt;
    if ((n++, (o = o[jt]), r.injectorIndex !== -1))
      return r.injectorIndex | (n << 16);
  }
  return Mt;
}
function Jo(e, t, n) {
  hp(e, t, n);
}
function pp(e, t) {
  if (t === "class") return e.classes;
  if (t === "style") return e.styles;
  let n = e.attrs;
  if (n) {
    let r = n.length,
      o = 0;
    for (; o < r; ) {
      let i = n[o];
      if (ju(i)) break;
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
function Oc(e, t, n) {
  if (n & w.Optional || e !== void 0) return e;
  Vi(t, "NodeInjector");
}
function Fc(e, t, n, r) {
  if (
    (n & w.Optional && r === void 0 && (r = null), !(n & (w.Self | w.Host)))
  ) {
    let o = e[Nt],
      i = X(void 0);
    try {
      return o ? o.get(t, r, n & w.Optional) : Ou(t, r, n & w.Optional);
    } finally {
      X(i);
    }
  }
  return Oc(r, t, n);
}
function Rc(e, t, n, r = w.Default, o) {
  if (e !== null) {
    if (t[m] & 2048 && !(r & w.Self)) {
      let s = Dp(e, t, n, r, ge);
      if (s !== ge) return s;
    }
    let i = Pc(e, t, n, r, ge);
    if (i !== ge) return i;
  }
  return Fc(t, n, r, o);
}
function Pc(e, t, n, r, o) {
  let i = mp(n);
  if (typeof i == "function") {
    if (!Ec(t, e, r)) return r & w.Host ? Oc(o, n, r) : Fc(t, n, r, o);
    try {
      let s;
      if (((s = i(r)), s == null && !(r & w.Optional))) Vi(n);
      else return s;
    } finally {
      _c();
    }
  } else if (typeof i == "number") {
    let s = null,
      a = Ac(e, t),
      u = Mt,
      c = r & w.Host ? t[ne][Y] : null;
    for (
      (a === -1 || r & w.SkipSelf) &&
      ((u = a === -1 ? ns(e, t) : t[a + 8]),
      u === Mt || !Za(r, !1)
        ? (a = -1)
        : ((s = t[D]), (a = Ir(u)), (t = Er(u, t))));
      a !== -1;

    ) {
      let l = t[D];
      if (qa(i, a, l.data)) {
        let d = gp(a, t, n, s, r, c);
        if (d !== ge) return d;
      }
      (u = t[a + 8]),
        u !== Mt && Za(r, t[D].data[a + 8] === c) && qa(i, a, t)
          ? ((s = l), (a = Ir(u)), (t = Er(u, t)))
          : (a = -1);
    }
  }
  return o;
}
function gp(e, t, n, r, o, i) {
  let s = t[D],
    a = s.data[e + 8],
    u = r == null ? qr(a) && Ko : r != s && (a.type & 3) !== 0,
    c = o & w.Host && i === a,
    l = cr(a, s, n, u, c);
  return l !== null ? et(t, s, l, a) : ge;
}
function cr(e, t, n, r, o) {
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
    if (f && be(f) && f.type === n) return u;
  }
  return null;
}
function et(e, t, n, r) {
  let o = e[n],
    i = t.data;
  if (ap(o)) {
    let s = o;
    s.resolving && zf(Uf(i[n]));
    let a = Wa(s.canSeeViewProviders);
    s.resolving = !0;
    let u,
      c = s.injectImpl ? X(s.injectImpl) : null,
      l = Ec(e, r, w.Default);
    try {
      (o = e[n] = s.factory(void 0, i, e, r)),
        t.firstCreatePass && n >= r.directiveStart && ip(n, i[n], t);
    } finally {
      c !== null && X(c), Wa(a), (s.resolving = !1), _c();
    }
  }
  return o;
}
function mp(e) {
  if (typeof e == "string") return e.charCodeAt(0) || 0;
  let t = e.hasOwnProperty(Jt) ? e[Jt] : void 0;
  return typeof t == "number" ? (t >= 0 ? t & Tc : yp) : t;
}
function qa(e, t, n) {
  let r = 1 << e;
  return !!(n[t + (e >> Nc)] & r);
}
function Za(e, t) {
  return !(e & w.Self) && !(e & w.Host && t);
}
var Ze = class {
  constructor(t, n) {
    (this._tNode = t), (this._lView = n);
  }
  get(t, n, r) {
    return Rc(this._tNode, this._lView, t, zr(r), n);
  }
};
function yp() {
  return new Ze(H(), x());
}
function dM(e) {
  return cn(() => {
    let t = e.prototype.constructor,
      n = t[dr] || Xo(t),
      r = Object.prototype,
      o = Object.getPrototypeOf(e.prototype).constructor;
    for (; o && o !== r; ) {
      let i = o[dr] || Xo(o);
      if (i && i !== n) return i;
      o = Object.getPrototypeOf(o);
    }
    return (i) => new i();
  });
}
function Xo(e) {
  return xu(e)
    ? () => {
        let t = Xo(z(e));
        return t && t();
      }
    : xt(e);
}
function Dp(e, t, n, r, o) {
  let i = e,
    s = t;
  for (; i !== null && s !== null && s[m] & 2048 && !(s[m] & 512); ) {
    let a = Pc(i, s, n, r | w.Self, ge);
    if (a !== ge) return a;
    let u = i.parent;
    if (!u) {
      let c = s[ec];
      if (c) {
        let l = c.get(n, ge, r);
        if (l !== ge) return l;
      }
      (u = kc(s)), (s = s[jt]);
    }
    i = u;
  }
  return o;
}
function kc(e) {
  let t = e[D],
    n = t.type;
  return n === 2 ? t.declTNode : n === 1 ? e[Y] : null;
}
function vp(e) {
  return pp(H(), e);
}
function Ya(e, t = null, n = null, r) {
  let o = Lc(e, t, n, r);
  return o.resolveInjectorInitializers(), o;
}
function Lc(e, t = null, n = null, r, o = new Set()) {
  let i = [n || W, bh(e)];
  return (
    (r = r || (typeof e == "object" ? void 0 : q(e))),
    new on(i, t || zi(), r || null, o)
  );
}
var We = class We {
  static create(t, n) {
    if (Array.isArray(t)) return Ya({ name: "" }, n, t, "");
    {
      let r = t.name ?? "";
      return Ya({ name: r }, t.parent, t.providers, r);
    }
  }
};
(We.THROW_IF_NOT_FOUND = tn),
  (We.NULL = new gr()),
  (We.ɵprov = T({ token: We, providedIn: "any", factory: () => F(Pu) })),
  (We.__NG_ELEMENT_ID__ = -1);
var De = We;
var Ip = new M("");
Ip.__NG_ELEMENT_ID__ = (e) => {
  let t = H();
  if (t === null) throw new C(204, !1);
  if (t.type & 2) return t.value;
  if (e & w.Optional) return null;
  throw new C(204, !1);
};
var Ep = "ngOriginalError";
function Ao(e) {
  return e[Ep];
}
var jc = !0,
  Kr = (() => {
    let t = class t {};
    (t.__NG_ELEMENT_ID__ = wp), (t.__NG_ENV_ID__ = (r) => r);
    let e = t;
    return e;
  })(),
  ei = class extends Kr {
    constructor(t) {
      super(), (this._lView = t);
    }
    onDestroy(t) {
      return dc(this._lView, t), () => Gh(this._lView, t);
    }
  };
function wp() {
  return new ei(x());
}
var hn = (() => {
  let t = class t {
    constructor() {
      (this.taskId = 0),
        (this.pendingTasks = new Set()),
        (this.hasPendingTasks = new Wt(!1));
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
  t.ɵprov = T({ token: t, providedIn: "root", factory: () => new t() });
  let e = t;
  return e;
})();
var ti = class extends Te {
    constructor(t = !1) {
      super(),
        (this.destroyRef = void 0),
        (this.pendingTasks = void 0),
        (this.__isAsync = t),
        Ju() &&
          ((this.destroyRef = I(Kr, { optional: !0 }) ?? void 0),
          (this.pendingTasks = I(hn, { optional: !0 }) ?? void 0));
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
      return t instanceof P && t.add(a), a;
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
  ce = ti;
function Cr(...e) {}
function Vc(e) {
  let t, n;
  function r() {
    e = Cr;
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
function Qa(e) {
  return (
    queueMicrotask(() => e()),
    () => {
      e = Cr;
    }
  );
}
var rs = "isAngularZone",
  br = rs + "_ID",
  Cp = 0,
  B = class e {
    constructor(t) {
      (this.hasPendingMacrotasks = !1),
        (this.hasPendingMicrotasks = !1),
        (this.isStable = !0),
        (this.onUnstable = new ce(!1)),
        (this.onMicrotaskEmpty = new ce(!1)),
        (this.onStable = new ce(!1)),
        (this.onError = new ce(!1));
      let {
        enableLongStackTrace: n = !1,
        shouldCoalesceEventChangeDetection: r = !1,
        shouldCoalesceRunChangeDetection: o = !1,
        scheduleInRootZone: i = jc,
      } = t;
      if (typeof Zone > "u") throw new C(908, !1);
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
        Mp(s);
    }
    static isInAngularZone() {
      return typeof Zone < "u" && Zone.current.get(rs) === !0;
    }
    static assertInAngularZone() {
      if (!e.isInAngularZone()) throw new C(909, !1);
    }
    static assertNotInAngularZone() {
      if (e.isInAngularZone()) throw new C(909, !1);
    }
    run(t, n, r) {
      return this._inner.run(t, n, r);
    }
    runTask(t, n, r, o) {
      let i = this._inner,
        s = i.scheduleEventTask("NgZoneEvent: " + o, t, bp, Cr, Cr);
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
  bp = {};
function os(e) {
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
function _p(e) {
  if (e.isCheckStableRunning || e.callbackScheduled) return;
  e.callbackScheduled = !0;
  function t() {
    Vc(() => {
      (e.callbackScheduled = !1),
        ni(e),
        (e.isCheckStableRunning = !0),
        os(e),
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
    ni(e);
}
function Mp(e) {
  let t = () => {
      _p(e);
    },
    n = Cp++;
  e._inner = e._inner.fork({
    name: "angular",
    properties: { [rs]: !0, [br]: n, [br + n]: !0 },
    onInvokeTask: (r, o, i, s, a, u) => {
      if (xp(u)) return r.invokeTask(i, s, a, u);
      try {
        return Ka(e), r.invokeTask(i, s, a, u);
      } finally {
        ((e.shouldCoalesceEventChangeDetection && s.type === "eventTask") ||
          e.shouldCoalesceRunChangeDetection) &&
          t(),
          Ja(e);
      }
    },
    onInvoke: (r, o, i, s, a, u, c) => {
      try {
        return Ka(e), r.invoke(i, s, a, u, c);
      } finally {
        e.shouldCoalesceRunChangeDetection &&
          !e.callbackScheduled &&
          !Sp(u) &&
          t(),
          Ja(e);
      }
    },
    onHasTask: (r, o, i, s) => {
      r.hasTask(i, s),
        o === i &&
          (s.change == "microTask"
            ? ((e._hasPendingMicrotasks = s.microTask), ni(e), os(e))
            : s.change == "macroTask" &&
              (e.hasPendingMacrotasks = s.macroTask));
    },
    onHandleError: (r, o, i, s) => (
      r.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1
    ),
  });
}
function ni(e) {
  e._hasPendingMicrotasks ||
  ((e.shouldCoalesceEventChangeDetection ||
    e.shouldCoalesceRunChangeDetection) &&
    e.callbackScheduled === !0)
    ? (e.hasPendingMicrotasks = !0)
    : (e.hasPendingMicrotasks = !1);
}
function Ka(e) {
  e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
}
function Ja(e) {
  e._nesting--, os(e);
}
var _r = class {
  constructor() {
    (this.hasPendingMicrotasks = !1),
      (this.hasPendingMacrotasks = !1),
      (this.isStable = !0),
      (this.onUnstable = new ce()),
      (this.onMicrotaskEmpty = new ce()),
      (this.onStable = new ce()),
      (this.onError = new ce());
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
function xp(e) {
  return Bc(e, "__ignore_ng_zone__");
}
function Sp(e) {
  return Bc(e, "__scheduler_tick__");
}
function Bc(e, t) {
  return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0;
}
function Tp(e = "zone.js", t) {
  return e === "noop" ? new _r() : e === "zone.js" ? new B(t) : e;
}
var tt = class {
    constructor() {
      this._console = console;
    }
    handleError(t) {
      let n = this._findOriginalError(t);
      this._console.error("ERROR", t),
        n && this._console.error("ORIGINAL ERROR", n);
    }
    _findOriginalError(t) {
      let n = t && Ao(t);
      for (; n && Ao(n); ) n = Ao(n);
      return n || null;
    }
  },
  Np = new M("", {
    providedIn: "root",
    factory: () => {
      let e = I(B),
        t = I(tt);
      return (n) => e.runOutsideAngular(() => t.handleError(n));
    },
  });
function Ap() {
  return Bt(H(), x());
}
function Bt(e, t) {
  return new $t(oe(e, t));
}
var $t = (() => {
  let t = class t {
    constructor(r) {
      this.nativeElement = r;
    }
  };
  t.__NG_ELEMENT_ID__ = Ap;
  let e = t;
  return e;
})();
function Op(e) {
  return e instanceof $t ? e.nativeElement : e;
}
function Fp() {
  return this._results[Symbol.iterator]();
}
var ri = class e {
  get changes() {
    return (this._changes ??= new ce());
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
    n[Symbol.iterator] || (n[Symbol.iterator] = Fp);
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
    let r = rh(t);
    (this._changesDetected = !nh(this._results, r, n)) &&
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
function $c(e) {
  return (e.flags & 128) === 128;
}
var Hc = new Map(),
  Rp = 0;
function Pp() {
  return Rp++;
}
function kp(e) {
  Hc.set(e[Wr], e);
}
function oi(e) {
  Hc.delete(e[Wr]);
}
var Xa = "__ngContext__";
function nt(e, t) {
  Oe(t) ? ((e[Xa] = t[Wr]), kp(t)) : (e[Xa] = t);
}
function Uc(e) {
  return Gc(e[an]);
}
function zc(e) {
  return Gc(e[le]);
}
function Gc(e) {
  for (; e !== null && !_e(e); ) e = e[le];
  return e;
}
var ii;
function fM(e) {
  ii = e;
}
function Wc() {
  if (ii !== void 0) return ii;
  if (typeof document < "u") return document;
  throw new C(210, !1);
}
var hM = new M("", { providedIn: "root", factory: () => Lp }),
  Lp = "ng",
  jp = new M(""),
  is = new M("", { providedIn: "platform", factory: () => "unknown" });
var pM = new M(""),
  gM = new M("", {
    providedIn: "root",
    factory: () =>
      Wc().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") ||
      null,
  });
var Vp = "h",
  Bp = "b";
var $p = () => null;
function ss(e, t, n = !1) {
  return $p(e, t, n);
}
var qc = !1,
  Hp = new M("", { providedIn: "root", factory: () => qc });
var Jn;
function Up() {
  if (Jn === void 0 && ((Jn = null), en.trustedTypes))
    try {
      Jn = en.trustedTypes.createPolicy("angular", {
        createHTML: (e) => e,
        createScript: (e) => e,
        createScriptURL: (e) => e,
      });
    } catch {}
  return Jn;
}
function Jr(e) {
  return Up()?.createHTML(e) || e;
}
var Xn;
function Zc() {
  if (Xn === void 0 && ((Xn = null), en.trustedTypes))
    try {
      Xn = en.trustedTypes.createPolicy("angular#unsafe-bypass", {
        createHTML: (e) => e,
        createScript: (e) => e,
        createScriptURL: (e) => e,
      });
    } catch {}
  return Xn;
}
function eu(e) {
  return Zc()?.createHTML(e) || e;
}
function tu(e) {
  return Zc()?.createScriptURL(e) || e;
}
var Mr = class {
  constructor(t) {
    this.changingThisBreaksApplicationSecurity = t;
  }
  toString() {
    return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Cu})`;
  }
};
function st(e) {
  return e instanceof Mr ? e.changingThisBreaksApplicationSecurity : e;
}
function as(e, t) {
  let n = zp(e);
  if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL") return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${Cu})`);
  }
  return n === t;
}
function zp(e) {
  return (e instanceof Mr && e.getTypeName()) || null;
}
function Gp(e) {
  let t = new ai(e);
  return Wp() ? new si(t) : t;
}
var si = class {
    constructor(t) {
      this.inertDocumentHelper = t;
    }
    getInertBodyElement(t) {
      t = "<body><remove></remove>" + t;
      try {
        let n = new window.DOMParser().parseFromString(Jr(t), "text/html").body;
        return n === null
          ? this.inertDocumentHelper.getInertBodyElement(t)
          : (n.firstChild?.remove(), n);
      } catch {
        return null;
      }
    }
  },
  ai = class {
    constructor(t) {
      (this.defaultDoc = t),
        (this.inertDocument =
          this.defaultDoc.implementation.createHTMLDocument(
            "sanitization-inert",
          ));
    }
    getInertBodyElement(t) {
      let n = this.inertDocument.createElement("template");
      return (n.innerHTML = Jr(t)), n;
    }
  };
function Wp() {
  try {
    return !!new window.DOMParser().parseFromString(Jr(""), "text/html");
  } catch {
    return !1;
  }
}
var qp = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function Yc(e) {
  return (e = String(e)), e.match(qp) ? e : "unsafe:" + e;
}
function Me(e) {
  let t = {};
  for (let n of e.split(",")) t[n] = !0;
  return t;
}
function pn(...e) {
  let t = {};
  for (let n of e) for (let r in n) n.hasOwnProperty(r) && (t[r] = !0);
  return t;
}
var Qc = Me("area,br,col,hr,img,wbr"),
  Kc = Me("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
  Jc = Me("rp,rt"),
  Zp = pn(Jc, Kc),
  Yp = pn(
    Kc,
    Me(
      "address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul",
    ),
  ),
  Qp = pn(
    Jc,
    Me(
      "a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video",
    ),
  ),
  nu = pn(Qc, Yp, Qp, Zp),
  Xc = Me("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
  Kp = Me(
    "abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width",
  ),
  Jp = Me(
    "aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext",
  ),
  Xp = pn(Xc, Kp, Jp),
  eg = Me("script,style,template"),
  ui = class {
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
          o.push(n), (n = rg(n));
          continue;
        }
        for (; n; ) {
          n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
          let i = ng(n);
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
      let n = ru(t).toLowerCase();
      if (!nu.hasOwnProperty(n))
        return (this.sanitizedSomething = !0), !eg.hasOwnProperty(n);
      this.buf.push("<"), this.buf.push(n);
      let r = t.attributes;
      for (let o = 0; o < r.length; o++) {
        let i = r.item(o),
          s = i.name,
          a = s.toLowerCase();
        if (!Xp.hasOwnProperty(a)) {
          this.sanitizedSomething = !0;
          continue;
        }
        let u = i.value;
        Xc[a] && (u = Yc(u)), this.buf.push(" ", s, '="', ou(u), '"');
      }
      return this.buf.push(">"), !0;
    }
    endElement(t) {
      let n = ru(t).toLowerCase();
      nu.hasOwnProperty(n) &&
        !Qc.hasOwnProperty(n) &&
        (this.buf.push("</"), this.buf.push(n), this.buf.push(">"));
    }
    chars(t) {
      this.buf.push(ou(t));
    }
  };
function tg(e, t) {
  return (
    (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !==
    Node.DOCUMENT_POSITION_CONTAINED_BY
  );
}
function ng(e) {
  let t = e.nextSibling;
  if (t && e !== t.previousSibling) throw el(t);
  return t;
}
function rg(e) {
  let t = e.firstChild;
  if (t && tg(e, t)) throw el(t);
  return t;
}
function ru(e) {
  let t = e.nodeName;
  return typeof t == "string" ? t : "FORM";
}
function el(e) {
  return new Error(
    `Failed to sanitize html because the element is clobbered: ${e.outerHTML}`,
  );
}
var og = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
  ig = /([^\#-~ |!])/g;
function ou(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(og, function (t) {
      let n = t.charCodeAt(0),
        r = t.charCodeAt(1);
      return "&#" + ((n - 55296) * 1024 + (r - 56320) + 65536) + ";";
    })
    .replace(ig, function (t) {
      return "&#" + t.charCodeAt(0) + ";";
    })
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
var er;
function sg(e, t) {
  let n = null;
  try {
    er = er || Gp(e);
    let r = t ? String(t) : "";
    n = er.getInertBodyElement(r);
    let o = 5,
      i = r;
    do {
      if (o === 0)
        throw new Error(
          "Failed to sanitize html because the input is unstable",
        );
      o--, (r = i), (i = n.innerHTML), (n = er.getInertBodyElement(r));
    } while (r !== i);
    let a = new ui().sanitizeChildren(iu(n) || n);
    return Jr(a);
  } finally {
    if (n) {
      let r = iu(n) || n;
      for (; r.firstChild; ) r.firstChild.remove();
    }
  }
}
function iu(e) {
  return "content" in e && ag(e) ? e.content : null;
}
function ag(e) {
  return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE";
}
var Xr = (function (e) {
  return (
    (e[(e.NONE = 0)] = "NONE"),
    (e[(e.HTML = 1)] = "HTML"),
    (e[(e.STYLE = 2)] = "STYLE"),
    (e[(e.SCRIPT = 3)] = "SCRIPT"),
    (e[(e.URL = 4)] = "URL"),
    (e[(e.RESOURCE_URL = 5)] = "RESOURCE_URL"),
    e
  );
})(Xr || {});
function mM(e) {
  let t = us();
  return t
    ? eu(t.sanitize(Xr.HTML, e) || "")
    : as(e, "HTML")
      ? eu(st(e))
      : sg(Wc(), ln(e));
}
function ug(e) {
  let t = us();
  return t ? t.sanitize(Xr.URL, e) || "" : as(e, "URL") ? st(e) : Yc(ln(e));
}
function cg(e) {
  let t = us();
  if (t) return tu(t.sanitize(Xr.RESOURCE_URL, e) || "");
  if (as(e, "ResourceURL")) return tu(st(e));
  throw new C(904, !1);
}
function lg(e, t) {
  return (t === "src" &&
    (e === "embed" ||
      e === "frame" ||
      e === "iframe" ||
      e === "media" ||
      e === "script")) ||
    (t === "href" && (e === "base" || e === "link"))
    ? cg
    : ug;
}
function yM(e, t, n) {
  return lg(t, n)(e);
}
function us() {
  let e = x();
  return e && e[me].sanitizer;
}
function DM(e) {
  return e.ownerDocument.defaultView;
}
function tl(e) {
  return e instanceof Function ? e() : e;
}
function dg(e) {
  return (e ?? I(De)).get(is) === "browser";
}
var xr = (function (e) {
    return (
      (e[(e.Important = 1)] = "Important"),
      (e[(e.DashCase = 2)] = "DashCase"),
      e
    );
  })(xr || {}),
  fg;
function cs(e, t) {
  return fg(e, t);
}
function Ct(e, t, n, r, o) {
  if (r != null) {
    let i,
      s = !1;
    _e(r) ? (i = r) : Oe(r) && ((s = !0), (r = r[ve]));
    let a = ye(r);
    e === 0 && n !== null
      ? o == null
        ? sl(t, n, a)
        : Tr(t, n, a, o || null, !0)
      : e === 1 && n !== null
        ? Tr(t, n, a, o || null, !0)
        : e === 2
          ? _g(t, a, s)
          : e === 3 && t.destroyNode(a),
      i != null && xg(t, e, i, n, o);
  }
}
function hg(e, t) {
  return e.createText(t);
}
function pg(e, t, n) {
  e.setValue(t, n);
}
function nl(e, t, n) {
  return e.createElement(t, n);
}
function gg(e, t) {
  rl(e, t), (t[ve] = null), (t[Y] = null);
}
function mg(e, t, n, r, o, i) {
  (r[ve] = o), (r[Y] = t), eo(e, r, n, 1, o, i);
}
function rl(e, t) {
  t[me].changeDetectionScheduler?.notify(9), eo(e, t, t[R], 2, null, null);
}
function yg(e) {
  let t = e[an];
  if (!t) return Oo(e[D], e);
  for (; t; ) {
    let n = null;
    if (Oe(t)) n = t[an];
    else {
      let r = t[Z];
      r && (n = r);
    }
    if (!n) {
      for (; t && !t[le] && t !== e; ) Oe(t) && Oo(t[D], t), (t = t[$]);
      t === null && (t = e), Oe(t) && Oo(t[D], t), (n = t && t[le]);
    }
    t = n;
  }
}
function Dg(e, t, n, r) {
  let o = Z + r,
    i = n.length;
  r > 0 && (n[o - 1][le] = t),
    r < i - Z ? ((t[le] = n[o]), Ru(n, Z + r, t)) : (n.push(t), (t[le] = null)),
    (t[$] = n);
  let s = t[Ye];
  s !== null && n !== s && ol(s, t);
  let a = t[Ce];
  a !== null && a.insertView(e), Zo(t), (t[m] |= 128);
}
function ol(e, t) {
  let n = e[At],
    r = t[$];
  if (Oe(r)) e[m] |= Dr.HasTransplantedViews;
  else {
    let o = r[$][ne];
    t[ne] !== o && (e[m] |= Dr.HasTransplantedViews);
  }
  n === null ? (e[At] = [t]) : n.push(t);
}
function ls(e, t) {
  let n = e[At],
    r = n.indexOf(t);
  n.splice(r, 1);
}
function Sr(e, t) {
  if (e.length <= Z) return;
  let n = Z + t,
    r = e[n];
  if (r) {
    let o = r[Ye];
    o !== null && o !== e && ls(o, r), t > 0 && (e[n - 1][le] = r[le]);
    let i = hr(e, Z + t);
    gg(r[D], r);
    let s = i[Ce];
    s !== null && s.detachView(i[D]),
      (r[$] = null),
      (r[le] = null),
      (r[m] &= -129);
  }
  return r;
}
function ds(e, t) {
  if (!(t[m] & 256)) {
    let n = t[R];
    n.destroyNode && eo(e, t, n, 3, null, null), yg(t);
  }
}
function Oo(e, t) {
  if (t[m] & 256) return;
  let n = b(null);
  try {
    (t[m] &= -129),
      (t[m] |= 256),
      t[ee] && Cn(t[ee]),
      Ig(e, t),
      vg(e, t),
      t[D].type === 1 && t[R].destroy();
    let r = t[Ye];
    if (r !== null && _e(t[$])) {
      r !== t[$] && ls(r, t);
      let o = t[Ce];
      o !== null && o.detachView(e);
    }
    oi(t);
  } finally {
    b(n);
  }
}
function vg(e, t) {
  let n = e.cleanup,
    r = t[mr];
  if (n !== null)
    for (let i = 0; i < n.length - 1; i += 2)
      if (typeof n[i] == "string") {
        let s = n[i + 3];
        s >= 0 ? r[s]() : r[-s].unsubscribe(), (i += 2);
      } else {
        let s = r[n[i + 1]];
        n[i].call(s);
      }
  r !== null && (t[mr] = null);
  let o = t[Ae];
  if (o !== null) {
    t[Ae] = null;
    for (let i = 0; i < o.length; i++) {
      let s = o[i];
      s();
    }
  }
}
function Ig(e, t) {
  let n;
  if (e != null && (n = e.destroyHooks) != null)
    for (let r = 0; r < n.length; r += 2) {
      let o = t[n[r]];
      if (!(o instanceof Xe)) {
        let i = n[r + 1];
        if (Array.isArray(i))
          for (let s = 0; s < i.length; s += 2) {
            let a = o[i[s]],
              u = i[s + 1];
            pe(4, a, u);
            try {
              u.call(a);
            } finally {
              pe(5, a, u);
            }
          }
        else {
          pe(4, o, i);
          try {
            i.call(o);
          } finally {
            pe(5, o, i);
          }
        }
      }
    }
}
function il(e, t, n) {
  return Eg(e, t.parent, n);
}
function Eg(e, t, n) {
  let r = t;
  for (; r !== null && r.type & 168; ) (t = r), (r = t.parent);
  if (r === null) return n[ve];
  {
    let { componentOffset: o } = r;
    if (o > -1) {
      let { encapsulation: i } = e.data[r.directiveStart + o];
      if (i === nn.None || i === nn.Emulated) return null;
    }
    return oe(r, n);
  }
}
function Tr(e, t, n, r, o) {
  e.insertBefore(t, n, r, o);
}
function sl(e, t, n) {
  e.appendChild(t, n);
}
function su(e, t, n, r, o) {
  r !== null ? Tr(e, t, n, r, o) : sl(e, t, n);
}
function al(e, t) {
  return e.parentNode(t);
}
function wg(e, t) {
  return e.nextSibling(t);
}
function ul(e, t, n) {
  return bg(e, t, n);
}
function Cg(e, t, n) {
  return e.type & 40 ? oe(e, n) : null;
}
var bg = Cg,
  au;
function fs(e, t, n, r) {
  let o = il(e, r, t),
    i = t[R],
    s = r.parent || t[Y],
    a = ul(s, r, t);
  if (o != null)
    if (Array.isArray(n))
      for (let u = 0; u < n.length; u++) su(i, o, n[u], a, !1);
    else su(i, o, n, a, !1);
  au !== void 0 && au(i, r, t, n, o);
}
function Kt(e, t) {
  if (t !== null) {
    let n = t.type;
    if (n & 3) return oe(t, e);
    if (n & 4) return ci(-1, e[t.index]);
    if (n & 8) {
      let r = t.child;
      if (r !== null) return Kt(e, r);
      {
        let o = e[t.index];
        return _e(o) ? ci(-1, o) : ye(o);
      }
    } else {
      if (n & 128) return Kt(e, t.next);
      if (n & 32) return cs(t, e)() || ye(e[t.index]);
      {
        let r = cl(e, t);
        if (r !== null) {
          if (Array.isArray(r)) return r[0];
          let o = Ke(e[ne]);
          return Kt(o, r);
        } else return Kt(e, t.next);
      }
    }
  }
  return null;
}
function cl(e, t) {
  if (t !== null) {
    let r = e[ne][Y],
      o = t.projection;
    return r.projection[o];
  }
  return null;
}
function ci(e, t) {
  let n = Z + e + 1;
  if (n < t.length) {
    let r = t[n],
      o = r[D].firstChild;
    if (o !== null) return Kt(r, o);
  }
  return t[Qe];
}
function _g(e, t, n) {
  e.removeChild(null, t, n);
}
function hs(e, t, n, r, o, i, s) {
  for (; n != null; ) {
    if (n.type === 128) {
      n = n.next;
      continue;
    }
    let a = r[n.index],
      u = n.type;
    if (
      (s && t === 0 && (a && nt(ye(a), r), (n.flags |= 2)),
      (n.flags & 32) !== 32)
    )
      if (u & 8) hs(e, t, n.child, r, o, i, !1), Ct(t, e, o, a, i);
      else if (u & 32) {
        let c = cs(n, r),
          l;
        for (; (l = c()); ) Ct(t, e, o, l, i);
        Ct(t, e, o, a, i);
      } else u & 16 ? ll(e, t, r, n, o, i) : Ct(t, e, o, a, i);
    n = s ? n.projectionNext : n.next;
  }
}
function eo(e, t, n, r, o, i) {
  hs(n, r, e.firstChild, t, o, i, !1);
}
function Mg(e, t, n) {
  let r = t[R],
    o = il(e, n, t),
    i = n.parent || t[Y],
    s = ul(i, n, t);
  ll(r, 0, t, n, o, s);
}
function ll(e, t, n, r, o, i) {
  let s = n[ne],
    u = s[Y].projection[r.projection];
  if (Array.isArray(u))
    for (let c = 0; c < u.length; c++) {
      let l = u[c];
      Ct(t, e, o, l, i);
    }
  else {
    let c = u,
      l = s[$];
    $c(r) && (c.flags |= 128), hs(e, t, c, l, o, i, !0);
  }
}
function xg(e, t, n, r, o) {
  let i = n[Qe],
    s = ye(n);
  i !== s && Ct(t, e, r, i, o);
  for (let a = Z; a < n.length; a++) {
    let u = n[a];
    eo(u[D], u, e, t, r, i);
  }
}
function Sg(e, t, n, r, o) {
  if (t) o ? e.addClass(n, r) : e.removeClass(n, r);
  else {
    let i = r.indexOf("-") === -1 ? void 0 : xr.DashCase;
    o == null
      ? e.removeStyle(n, r, i)
      : (typeof o == "string" &&
          o.endsWith("!important") &&
          ((o = o.slice(0, -10)), (i |= xr.Important)),
        e.setStyle(n, r, o, i));
  }
}
function Tg(e, t, n) {
  e.setAttribute(t, "style", n);
}
function dl(e, t, n) {
  n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n);
}
function fl(e, t, n) {
  let { mergedAttrs: r, classes: o, styles: i } = n;
  r !== null && Ho(e, t, r),
    o !== null && dl(e, t, o),
    i !== null && Tg(e, t, i);
}
var xe = {};
function vM(e = 1) {
  hl(j(), x(), it() + e, !1);
}
function hl(e, t, n, r) {
  if (!r)
    if ((t[m] & 3) === 3) {
      let i = e.preOrderCheckHooks;
      i !== null && ar(t, i, n);
    } else {
      let i = e.preOrderHooks;
      i !== null && ur(t, i, 0, n);
    }
  Je(n);
}
function at(e, t = w.Default) {
  let n = x();
  if (n === null) return F(e, t);
  let r = H();
  return Rc(r, n, z(e), t);
}
function IM() {
  let e = "invalid";
  throw new Error(e);
}
function pl(e, t, n, r, o, i) {
  let s = b(null);
  try {
    let a = null;
    o & Fe.SignalBased && (a = t[r][de]),
      a !== null && a.transformFn !== void 0 && (i = a.transformFn(i)),
      o & Fe.HasDecoratorInputTransform &&
        (i = e.inputTransforms[r].call(t, i)),
      e.setInput !== null ? e.setInput(t, a, i, n, r) : nc(t, a, r, i);
  } finally {
    b(s);
  }
}
function Ng(e, t) {
  let n = e.hostBindingOpCodes;
  if (n !== null)
    try {
      for (let r = 0; r < n.length; r++) {
        let o = n[r];
        if (o < 0) Je(~o);
        else {
          let i = o,
            s = n[++r],
            a = n[++r];
          ep(s, i);
          let u = t[i];
          a(2, u);
        }
      }
    } finally {
      Je(-1);
    }
}
function to(e, t, n, r, o, i, s, a, u, c, l) {
  let d = t.blueprint.slice();
  return (
    (d[ve] = o),
    (d[m] = r | 4 | 128 | 8 | 64),
    (c !== null || (e && e[m] & 2048)) && (d[m] |= 2048),
    cc(d),
    (d[$] = d[jt] = e),
    (d[te] = n),
    (d[me] = s || (e && e[me])),
    (d[R] = a || (e && e[R])),
    (d[Nt] = u || (e && e[Nt]) || null),
    (d[Y] = i),
    (d[Wr] = Pp()),
    (d[sn] = l),
    (d[ec] = c),
    (d[ne] = t.type == 2 ? e[ne] : d),
    d
  );
}
function gn(e, t, n, r, o) {
  let i = e.data[t];
  if (i === null) (i = Ag(e, t, n, r, o)), Xh() && (i.flags |= 32);
  else if (i.type & 64) {
    (i.type = n), (i.value = r), (i.attrs = o);
    let s = Kh();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
  }
  return fn(i, !0), i;
}
function Ag(e, t, n, r, o) {
  let i = gc(),
    s = mc(),
    a = s ? i : i && i.parent,
    u = (e.data[t] = Lg(e, a, n, t, r, o));
  return (
    e.firstChild === null && (e.firstChild = u),
    i !== null &&
      (s
        ? i.child == null && u.parent !== null && (i.child = u)
        : i.next === null && ((i.next = u), (u.prev = i))),
    u
  );
}
function gl(e, t, n, r) {
  if (n === 0) return -1;
  let o = t.length;
  for (let i = 0; i < n; i++) t.push(r), e.blueprint.push(r), e.data.push(null);
  return o;
}
function ml(e, t, n, r, o) {
  let i = it(),
    s = r & 2;
  try {
    Je(-1), s && t.length > re && hl(e, t, re, !1), pe(s ? 2 : 0, o), n(r, o);
  } finally {
    Je(i), pe(s ? 3 : 1, o);
  }
}
function yl(e, t, n) {
  if (tc(t)) {
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
function Dl(e, t, n) {
  hc() && (Ug(e, t, n, oe(n, t)), (n.flags & 64) === 64 && Cl(e, t, n));
}
function vl(e, t, n = oe) {
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
function Il(e) {
  let t = e.tView;
  return t === null || t.incompleteFirstPass
    ? (e.tView = ps(
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
function ps(e, t, n, r, o, i, s, a, u, c, l) {
  let d = re + r,
    h = d + o,
    f = Og(d, h),
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
function Og(e, t) {
  let n = [];
  for (let r = 0; r < t; r++) n.push(r < e ? null : xe);
  return n;
}
function Fg(e, t, n, r) {
  let i = r.get(Hp, qc) || n === nn.ShadowDom,
    s = e.selectRootElement(t, i);
  return Rg(s), s;
}
function Rg(e) {
  Pg(e);
}
var Pg = () => null;
function kg(e, t, n, r) {
  let o = Ml(t);
  o.push(n), e.firstCreatePass && xl(e).push(r, o.length - 1);
}
function Lg(e, t, n, r, o, i) {
  let s = t ? t.injectorIndex : -1,
    a = 0;
  return (
    pc() && (a |= 128),
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
function uu(e, t, n, r, o) {
  for (let i in t) {
    if (!t.hasOwnProperty(i)) continue;
    let s = t[i];
    if (s === void 0) continue;
    r ??= {};
    let a,
      u = Fe.None;
    Array.isArray(s) ? ((a = s[0]), (u = s[1])) : (a = s);
    let c = i;
    if (o !== null) {
      if (!o.hasOwnProperty(i)) continue;
      c = o[i];
    }
    e === 0 ? cu(r, n, c, a, u) : cu(r, n, c, a);
  }
  return r;
}
function cu(e, t, n, r, o) {
  let i;
  e.hasOwnProperty(n) ? (i = e[n]).push(t, r) : (i = e[n] = [t, r]),
    o !== void 0 && i.push(o);
}
function jg(e, t, n) {
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
    (u = uu(0, d.inputs, l, u, f)), (c = uu(1, d.outputs, l, c, p));
    let S = u !== null && s !== null && !$i(t) ? em(u, l, s) : null;
    a.push(S);
  }
  u !== null &&
    (u.hasOwnProperty("class") && (t.flags |= 8),
    u.hasOwnProperty("style") && (t.flags |= 16)),
    (t.initialInputs = a),
    (t.inputs = u),
    (t.outputs = c);
}
function Vg(e) {
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
function gs(e, t, n, r, o, i, s, a) {
  let u = oe(t, n),
    c = t.inputs,
    l;
  !a && c != null && (l = c[r])
    ? (ms(e, n, l, r, o), qr(t) && Bg(n, t.index))
    : t.type & 3
      ? ((r = Vg(r)),
        (o = s != null ? s(o, t.value || "", r) : o),
        i.setProperty(u, r, o))
      : t.type & 12;
}
function Bg(e, t) {
  let n = Le(t, e);
  n[m] & 16 || (n[m] |= 64);
}
function El(e, t, n, r) {
  if (hc()) {
    let o = r === null ? null : { "": -1 },
      i = Gg(e, n),
      s,
      a;
    i === null ? (s = a = null) : ([s, a] = i),
      s !== null && wl(e, t, n, s, o, a),
      o && Wg(n, r, o);
  }
  n.mergedAttrs = rn(n.mergedAttrs, n.attrs);
}
function wl(e, t, n, r, o, i) {
  for (let c = 0; c < r.length; c++) Jo(wr(n, t), e, r[c].type);
  Zg(n, e.data.length, r.length);
  for (let c = 0; c < r.length; c++) {
    let l = r[c];
    l.providersResolver && l.providersResolver(l);
  }
  let s = !1,
    a = !1,
    u = gl(e, t, r.length, null);
  for (let c = 0; c < r.length; c++) {
    let l = r[c];
    (n.mergedAttrs = rn(n.mergedAttrs, l.hostAttrs)),
      Yg(e, n, t, u, l),
      qg(u, l, o),
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
  jg(e, n, i);
}
function $g(e, t, n, r, o) {
  let i = o.hostBindings;
  if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    Hg(s) != a && s.push(a), s.push(n, r, i);
  }
}
function Hg(e) {
  let t = e.length;
  for (; t > 0; ) {
    let n = e[--t];
    if (typeof n == "number" && n < 0) return n;
  }
  return 0;
}
function Ug(e, t, n, r) {
  let o = n.directiveStart,
    i = n.directiveEnd;
  qr(n) && Qg(t, n, e.data[o + n.componentOffset]),
    e.firstCreatePass || wr(n, t),
    nt(r, t);
  let s = n.initialInputs;
  for (let a = o; a < i; a++) {
    let u = e.data[a],
      c = et(t, e, a, n);
    if ((nt(c, t), s !== null && Xg(t, a - o, c, u, n, s), be(u))) {
      let l = Le(n.index, t);
      l[te] = et(t, e, a, n);
    }
  }
}
function Cl(e, t, n) {
  let r = n.directiveStart,
    o = n.directiveEnd,
    i = n.index,
    s = tp();
  try {
    Je(i);
    for (let a = r; a < o; a++) {
      let u = e.data[a],
        c = t[a];
      Yo(a),
        (u.hostBindings !== null || u.hostVars !== 0 || u.hostAttrs !== null) &&
          zg(u, c);
    }
  } finally {
    Je(-1), Yo(s);
  }
}
function zg(e, t) {
  e.hostBindings !== null && e.hostBindings(1, t);
}
function Gg(e, t) {
  let n = e.directiveRegistry,
    r = null,
    o = null;
  if (n)
    for (let i = 0; i < n.length; i++) {
      let s = n[i];
      if (Bu(t, s.selectors, !1))
        if ((r || (r = []), be(s)))
          if (s.findHostDirectiveDefs !== null) {
            let a = [];
            (o = o || new Map()),
              s.findHostDirectiveDefs(s, a, o),
              r.unshift(...a, s);
            let u = a.length;
            li(e, t, u);
          } else r.unshift(s), li(e, t, 0);
        else
          (o = o || new Map()), s.findHostDirectiveDefs?.(s, r, o), r.push(s);
    }
  return r === null ? null : [r, o];
}
function li(e, t, n) {
  (t.componentOffset = n), (e.components ??= []).push(t.index);
}
function Wg(e, t, n) {
  if (t) {
    let r = (e.localNames = []);
    for (let o = 0; o < t.length; o += 2) {
      let i = n[t[o + 1]];
      if (i == null) throw new C(-301, !1);
      r.push(t[o], i);
    }
  }
}
function qg(e, t, n) {
  if (n) {
    if (t.exportAs)
      for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
    be(t) && (n[""] = e);
  }
}
function Zg(e, t, n) {
  (e.flags |= 1),
    (e.directiveStart = t),
    (e.directiveEnd = t + n),
    (e.providerIndexes = t);
}
function Yg(e, t, n, r, o) {
  e.data[r] = o;
  let i = o.factory || (o.factory = xt(o.type, !0)),
    s = new Xe(i, be(o), at);
  (e.blueprint[r] = s), (n[r] = s), $g(e, t, r, gl(e, n, o.hostVars, xe), o);
}
function Qg(e, t, n) {
  let r = oe(t, e),
    o = Il(n),
    i = e[me].rendererFactory,
    s = 16;
  n.signals ? (s = 4096) : n.onPush && (s = 64);
  let a = no(
    e,
    to(e, o, null, s, r, t, null, i.createRenderer(r, n), null, null, null),
  );
  e[t.index] = a;
}
function Kg(e, t, n, r, o, i) {
  let s = oe(e, t);
  Jg(t[R], s, i, e.value, n, r, o);
}
function Jg(e, t, n, r, o, i, s) {
  if (i == null) e.removeAttribute(t, o, n);
  else {
    let a = s == null ? ln(i) : s(i, r || "", o);
    e.setAttribute(t, o, a, n);
  }
}
function Xg(e, t, n, r, o, i) {
  let s = i[t];
  if (s !== null)
    for (let a = 0; a < s.length; ) {
      let u = s[a++],
        c = s[a++],
        l = s[a++],
        d = s[a++];
      pl(r, n, u, c, l, d);
    }
}
function em(e, t, n) {
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
function bl(e, t, n, r) {
  return [e, !0, 0, t, null, r, null, n, null, null];
}
function _l(e, t) {
  let n = e.contentQueries;
  if (n !== null) {
    let r = b(null);
    try {
      for (let o = 0; o < n.length; o += 2) {
        let i = n[o],
          s = n[o + 1];
        if (s !== -1) {
          let a = e.data[s];
          Qi(i), a.contentQueries(2, t[s], s);
        }
      }
    } finally {
      b(r);
    }
  }
}
function no(e, t) {
  return e[an] ? (e[Ha][le] = t) : (e[an] = t), (e[Ha] = t), t;
}
function di(e, t, n) {
  Qi(0);
  let r = b(null);
  try {
    t(e, n);
  } finally {
    b(r);
  }
}
function Ml(e) {
  return (e[mr] ??= []);
}
function xl(e) {
  return (e.cleanup ??= []);
}
function Sl(e, t, n) {
  return (e === null || be(e)) && (n = $h(n[t.index])), n[R];
}
function Tl(e, t) {
  let n = e[Nt],
    r = n ? n.get(tt, null) : null;
  r && r.handleError(t);
}
function ms(e, t, n, r, o) {
  for (let i = 0; i < n.length; ) {
    let s = n[i++],
      a = n[i++],
      u = n[i++],
      c = t[s],
      l = e.data[s];
    pl(l, c, r, a, u, o);
  }
}
function tm(e, t, n) {
  let r = uc(t, e);
  pg(e[R], r, n);
}
function nm(e, t) {
  let n = Le(t, e),
    r = n[D];
  rm(r, n);
  let o = n[ve];
  o !== null && n[sn] === null && (n[sn] = ss(o, n[Nt])), ys(r, n, n[te]);
}
function rm(e, t) {
  for (let n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n]);
}
function ys(e, t, n) {
  Ki(t);
  try {
    let r = e.viewQuery;
    r !== null && di(1, r, n);
    let o = e.template;
    o !== null && ml(e, t, o, 1, n),
      e.firstCreatePass && (e.firstCreatePass = !1),
      t[Ce]?.finishViewCreation(e),
      e.staticContentQueries && _l(e, t),
      e.staticViewQueries && di(2, e.viewQuery, n);
    let i = e.components;
    i !== null && om(t, i);
  } catch (r) {
    throw (
      (e.firstCreatePass &&
        ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
      r)
    );
  } finally {
    (t[m] &= -5), Ji();
  }
}
function om(e, t) {
  for (let n = 0; n < t.length; n++) nm(e, t[n]);
}
function Ds(e, t, n, r) {
  let o = b(null);
  try {
    let i = t.tView,
      a = e[m] & 4096 ? 4096 : 16,
      u = to(
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
    u[Ye] = c;
    let l = e[Ce];
    return l !== null && (u[Ce] = l.createEmbeddedView(i)), ys(i, u, n), u;
  } finally {
    b(o);
  }
}
function im(e, t) {
  let n = Z + t;
  if (n < e.length) return e[n];
}
function Nr(e, t) {
  return !t || t.firstChild === null || $c(e);
}
function vs(e, t, n, r = !0) {
  let o = t[D];
  if ((Dg(o, t, e, n), r)) {
    let s = ci(n, e),
      a = t[R],
      u = al(a, e[Qe]);
    u !== null && mg(o, e[Y], a, t, u, s);
  }
  let i = t[sn];
  i !== null && i.firstChild !== null && (i.firstChild = null);
}
function sm(e, t) {
  let n = Sr(e, t);
  return n !== void 0 && ds(n[D], n), n;
}
function Ar(e, t, n, r, o = !1) {
  for (; n !== null; ) {
    if (n.type === 128) {
      n = o ? n.projectionNext : n.next;
      continue;
    }
    let i = t[n.index];
    i !== null && r.push(ye(i)), _e(i) && am(i, r);
    let s = n.type;
    if (s & 8) Ar(e, t, n.child, r);
    else if (s & 32) {
      let a = cs(n, t),
        u;
      for (; (u = a()); ) r.push(u);
    } else if (s & 16) {
      let a = cl(t, n);
      if (Array.isArray(a)) r.push(...a);
      else {
        let u = Ke(t[ne]);
        Ar(u[D], u, a, r, !0);
      }
    }
    n = o ? n.projectionNext : n.next;
  }
  return r;
}
function am(e, t) {
  for (let n = Z; n < e.length; n++) {
    let r = e[n],
      o = r[D].firstChild;
    o !== null && Ar(r[D], r, o, t);
  }
  e[Qe] !== e[ve] && t.push(e[Qe]);
}
var Nl = [];
function um(e) {
  return e[ee] ?? cm(e);
}
function cm(e) {
  let t = Nl.pop() ?? Object.create(dm);
  return (t.lView = e), t;
}
function lm(e) {
  e.lView[ee] !== e && ((e.lView = null), Nl.push(e));
}
var dm = se(K({}, ft), {
  consumerIsAlwaysLive: !0,
  consumerMarkedDirty: (e) => {
    Yr(e.lView);
  },
  consumerOnSignalRead() {
    this.lView[ee] = this;
  },
});
function fm(e) {
  let t = e[ee] ?? Object.create(hm);
  return (t.lView = e), t;
}
var hm = se(K({}, ft), {
  consumerIsAlwaysLive: !0,
  consumerMarkedDirty: (e) => {
    let t = Ke(e.lView);
    for (; t && !Al(t[D]); ) t = Ke(t);
    t && lc(t);
  },
  consumerOnSignalRead() {
    this.lView[ee] = this;
  },
});
function Al(e) {
  return e.type !== 2;
}
var pm = 100;
function Ol(e, t = !0, n = 0) {
  let r = e[me],
    o = r.rendererFactory,
    i = !1;
  i || o.begin?.();
  try {
    gm(e, n);
  } catch (s) {
    throw (t && Tl(e, s), s);
  } finally {
    i || (o.end?.(), r.inlineEffectRunner?.flush());
  }
}
function gm(e, t) {
  let n = Dc();
  try {
    za(!0), fi(e, t);
    let r = 0;
    for (; Zr(e); ) {
      if (r === pm) throw new C(103, !1);
      r++, fi(e, 1);
    }
  } finally {
    za(n);
  }
}
function mm(e, t, n, r) {
  let o = t[m];
  if ((o & 256) === 256) return;
  let i = !1,
    s = !1;
  !i && t[me].inlineEffectRunner?.flush(), Ki(t);
  let a = !0,
    u = null,
    c = null;
  i ||
    (Al(e)
      ? ((c = um(t)), (u = zt(c)))
      : $s() === null
        ? ((a = !1), (c = fm(t)), (u = zt(c)))
        : t[ee] && (Cn(t[ee]), (t[ee] = null)));
  try {
    cc(t), Jh(e.bindingStartIndex), n !== null && ml(e, t, n, 2, r);
    let l = (o & 3) === 3;
    if (!i)
      if (l) {
        let f = e.preOrderCheckHooks;
        f !== null && ar(t, f, null);
      } else {
        let f = e.preOrderHooks;
        f !== null && ur(t, f, 0, null), So(t, 0);
      }
    if ((s || ym(t), Fl(t, 0), e.contentQueries !== null && _l(e, t), !i))
      if (l) {
        let f = e.contentCheckHooks;
        f !== null && ar(t, f);
      } else {
        let f = e.contentHooks;
        f !== null && ur(t, f, 1), So(t, 1);
      }
    Ng(e, t);
    let d = e.components;
    d !== null && Pl(t, d, 0);
    let h = e.viewQuery;
    if ((h !== null && di(2, h, r), !i))
      if (l) {
        let f = e.viewCheckHooks;
        f !== null && ar(t, f);
      } else {
        let f = e.viewHooks;
        f !== null && ur(t, f, 2), So(t, 2);
      }
    if ((e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[sr])) {
      for (let f of t[sr]) f();
      t[sr] = null;
    }
    i || (t[m] &= -73);
  } catch (l) {
    throw (i || Yr(t), l);
  } finally {
    c !== null && (En(c, u), a && lm(c)), Ji();
  }
}
function Fl(e, t) {
  for (let n = Uc(e); n !== null; n = zc(n))
    for (let r = Z; r < n.length; r++) {
      let o = n[r];
      Rl(o, t);
    }
}
function ym(e) {
  for (let t = Uc(e); t !== null; t = zc(t)) {
    if (!(t[m] & Dr.HasTransplantedViews)) continue;
    let n = t[At];
    for (let r = 0; r < n.length; r++) {
      let o = n[r];
      lc(o);
    }
  }
}
function Dm(e, t, n) {
  let r = Le(t, e);
  Rl(r, n);
}
function Rl(e, t) {
  Zi(e) && fi(e, t);
}
function fi(e, t) {
  let r = e[D],
    o = e[m],
    i = e[ee],
    s = !!(t === 0 && o & 16);
  if (
    ((s ||= !!(o & 64 && t === 0)),
    (s ||= !!(o & 1024)),
    (s ||= !!(i?.dirty && wn(i))),
    (s ||= !1),
    i && (i.dirty = !1),
    (e[m] &= -9217),
    s)
  )
    mm(r, e, r.template, e[te]);
  else if (o & 8192) {
    Fl(e, 1);
    let a = r.components;
    a !== null && Pl(e, a, 1);
  }
}
function Pl(e, t, n) {
  for (let r = 0; r < t.length; r++) Dm(e, t[r], n);
}
function Is(e, t) {
  let n = Dc() ? 64 : 1088;
  for (e[me].changeDetectionScheduler?.notify(t); e; ) {
    e[m] |= n;
    let r = Ke(e);
    if (Wo(e) && !r) return e;
    e = r;
  }
  return null;
}
var rt = class {
    get rootNodes() {
      let t = this._lView,
        n = t[D];
      return Ar(n, t, n.firstChild, []);
    }
    constructor(t, n, r = !0) {
      (this._lView = t),
        (this._cdRefInjectingView = n),
        (this.notifyErrorHandler = r),
        (this._appRef = null),
        (this._attachedToViewContainer = !1);
    }
    get context() {
      return this._lView[te];
    }
    set context(t) {
      this._lView[te] = t;
    }
    get destroyed() {
      return (this._lView[m] & 256) === 256;
    }
    destroy() {
      if (this._appRef) this._appRef.detachView(this);
      else if (this._attachedToViewContainer) {
        let t = this._lView[$];
        if (_e(t)) {
          let n = t[yr],
            r = n ? n.indexOf(this) : -1;
          r > -1 && (Sr(t, r), hr(n, r));
        }
        this._attachedToViewContainer = !1;
      }
      ds(this._lView[D], this._lView);
    }
    onDestroy(t) {
      dc(this._lView, t);
    }
    markForCheck() {
      Is(this._cdRefInjectingView || this._lView, 4);
    }
    detach() {
      this._lView[m] &= -129;
    }
    reattach() {
      Zo(this._lView), (this._lView[m] |= 128);
    }
    detectChanges() {
      (this._lView[m] |= 1024), Ol(this._lView, this.notifyErrorHandler);
    }
    checkNoChanges() {}
    attachToViewContainerRef() {
      if (this._appRef) throw new C(902, !1);
      this._attachedToViewContainer = !0;
    }
    detachFromAppRef() {
      this._appRef = null;
      let t = Wo(this._lView),
        n = this._lView[Ye];
      n !== null && !t && ls(n, this._lView), rl(this._lView[D], this._lView);
    }
    attachToAppRef(t) {
      if (this._attachedToViewContainer) throw new C(902, !1);
      this._appRef = t;
      let n = Wo(this._lView),
        r = this._lView[Ye];
      r !== null && !n && ol(r, this._lView), Zo(this._lView);
    }
  },
  Ot = (() => {
    let t = class t {};
    t.__NG_ELEMENT_ID__ = Em;
    let e = t;
    return e;
  })(),
  vm = Ot,
  Im = class extends vm {
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
      let o = Ds(this._declarationLView, this._declarationTContainer, t, {
        embeddedViewInjector: n,
        dehydratedView: r,
      });
      return new rt(o);
    }
  };
function Em() {
  return Es(H(), x());
}
function Es(e, t) {
  return e.type & 4 ? new Im(t, e, Bt(e, t)) : null;
}
var wM = new RegExp(`^(\\d+)*(${Bp}|${Vp})*(.*)`);
var wm = () => null;
function Or(e, t) {
  return wm(e, t);
}
var Ft = class {},
  kl = new M("", { providedIn: "root", factory: () => !1 });
var Ll = new M(""),
  jl = new M(""),
  hi = class {},
  Fr = class {};
function Cm(e) {
  let t = Error(`No component factory found for ${q(e)}.`);
  return (t[bm] = e), t;
}
var bm = "ngComponent";
var pi = class {
    resolveComponentFactory(t) {
      throw Cm(t);
    }
  },
  Ts = class Ts {};
Ts.NULL = new pi();
var Rt = Ts,
  Rr = class {},
  Vl = (() => {
    let t = class t {
      constructor() {
        this.destroyNode = null;
      }
    };
    t.__NG_ELEMENT_ID__ = () => _m();
    let e = t;
    return e;
  })();
function _m() {
  let e = x(),
    t = H(),
    n = Le(t.index, e);
  return (Oe(n) ? n : e)[R];
}
var Mm = (() => {
  let t = class t {};
  t.ɵprov = T({ token: t, providedIn: "root", factory: () => null });
  let e = t;
  return e;
})();
function gi(e, t, n) {
  let r = n ? e.styles : null,
    o = n ? e.classes : null,
    i = 0;
  if (t !== null)
    for (let s = 0; s < t.length; s++) {
      let a = t[s];
      if (typeof a == "number") i = a;
      else if (i == 1) o = jo(o, a);
      else if (i == 2) {
        let u = a,
          c = t[++s];
        r = jo(r, u + ": " + c + ";");
      }
    }
  n ? (e.styles = r) : (e.stylesWithoutHost = r),
    n ? (e.classes = o) : (e.classesWithoutHost = o);
}
var Pr = class extends Rt {
  constructor(t) {
    super(), (this.ngModule = t);
  }
  resolveComponentFactory(t) {
    let n = Re(t);
    return new Pt(n, this.ngModule);
  }
};
function lu(e, t) {
  let n = [];
  for (let r in e) {
    if (!e.hasOwnProperty(r)) continue;
    let o = e[r];
    if (o === void 0) continue;
    let i = Array.isArray(o),
      s = i ? o[0] : o,
      a = i ? o[1] : Fe.None;
    t
      ? n.push({
          propName: s,
          templateName: r,
          isSignal: (a & Fe.SignalBased) !== 0,
        })
      : n.push({ propName: s, templateName: r });
  }
  return n;
}
function xm(e) {
  let t = e.toLowerCase();
  return t === "svg" ? ac : t === "math" ? Bh : null;
}
var Pt = class extends Fr {
    get inputs() {
      let t = this.componentDef,
        n = t.inputTransforms,
        r = lu(t.inputs, !0);
      if (n !== null)
        for (let o of r)
          n.hasOwnProperty(o.propName) && (o.transform = n[o.propName]);
      return r;
    }
    get outputs() {
      return lu(this.componentDef.outputs, !1);
    }
    constructor(t, n) {
      super(),
        (this.componentDef = t),
        (this.ngModule = n),
        (this.componentType = t.type),
        (this.selector = Dh(t.selectors)),
        (this.ngContentSelectors = t.ngContentSelectors
          ? t.ngContentSelectors
          : []),
        (this.isBoundToModule = !!n);
    }
    create(t, n, r, o) {
      let i = b(null);
      try {
        o = o || this.ngModule;
        let s = o instanceof Pe ? o : o?.injector;
        s &&
          this.componentDef.getStandaloneInjector !== null &&
          (s = this.componentDef.getStandaloneInjector(s) || s);
        let a = s ? new Qo(t, s) : t,
          u = a.get(Rr, null);
        if (u === null) throw new C(407, !1);
        let c = a.get(Mm, null),
          l = a.get(Ft, null),
          d = {
            rendererFactory: u,
            sanitizer: c,
            inlineEffectRunner: null,
            changeDetectionScheduler: l,
          },
          h = u.createRenderer(null, this.componentDef),
          f = this.componentDef.selectors[0][0] || "div",
          p = r
            ? Fg(h, r, this.componentDef.encapsulation, a)
            : nl(h, f, xm(f)),
          S = 512;
        this.componentDef.signals
          ? (S |= 4096)
          : this.componentDef.onPush || (S |= 16);
        let V = null;
        p !== null && (V = ss(p, a, !0));
        let O = ps(0, null, null, 1, 0, null, null, null, null, null, null),
          J = to(null, O, null, S, null, null, d, h, a, null, V);
        Ki(J);
        let Ie,
          ie,
          lt = null;
        try {
          let Q = this.componentDef,
            dt,
            oo = null;
          Q.findHostDirectiveDefs
            ? ((dt = []),
              (oo = new Map()),
              Q.findHostDirectiveDefs(Q, dt, oo),
              dt.push(Q))
            : (dt = [Q]);
          let xd = Sm(J, p);
          (lt = Tm(xd, p, Q, dt, J, d, h)),
            (ie = qi(O, re)),
            p && Om(h, Q, p, r),
            n !== void 0 && Fm(ie, this.ngContentSelectors, n),
            (Ie = Am(lt, Q, dt, oo, J, [Rm])),
            ys(O, J, null);
        } catch (Q) {
          throw (lt !== null && oi(lt), oi(J), Q);
        } finally {
          Ji();
        }
        return new mi(this.componentType, Ie, Bt(ie, J), J, ie);
      } finally {
        b(i);
      }
    }
  },
  mi = class extends hi {
    constructor(t, n, r, o, i) {
      super(),
        (this.location = r),
        (this._rootLView = o),
        (this._tNode = i),
        (this.previousInputValues = null),
        (this.instance = n),
        (this.hostView = this.changeDetectorRef = new rt(o, void 0, !1)),
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
        ms(i[D], i, o, t, n), this.previousInputValues.set(t, n);
        let s = Le(this._tNode.index, i);
        Is(s, 1);
      }
    }
    get injector() {
      return new Ze(this._tNode, this._rootLView);
    }
    destroy() {
      this.hostView.destroy();
    }
    onDestroy(t) {
      this.hostView.onDestroy(t);
    }
  };
function Sm(e, t) {
  let n = e[D],
    r = re;
  return (e[r] = t), gn(n, r, 2, "#host", null);
}
function Tm(e, t, n, r, o, i, s) {
  let a = o[D];
  Nm(r, e, t, s);
  let u = null;
  t !== null && (u = ss(t, o[Nt]));
  let c = i.rendererFactory.createRenderer(t, n),
    l = 16;
  n.signals ? (l = 4096) : n.onPush && (l = 64);
  let d = to(o, Il(n), null, l, o[e.index], e, i, c, null, null, u);
  return (
    a.firstCreatePass && li(a, e, r.length - 1), no(o, d), (o[e.index] = d)
  );
}
function Nm(e, t, n, r) {
  for (let o of e) t.mergedAttrs = rn(t.mergedAttrs, o.hostAttrs);
  t.mergedAttrs !== null &&
    (gi(t, t.mergedAttrs, !0), n !== null && fl(r, n, t));
}
function Am(e, t, n, r, o, i) {
  let s = H(),
    a = o[D],
    u = oe(s, o);
  wl(a, o, s, n, null, r);
  for (let l = 0; l < n.length; l++) {
    let d = s.directiveStart + l,
      h = et(o, a, d, s);
    nt(h, o);
  }
  Cl(a, o, s), u && nt(u, o);
  let c = et(o, a, s.directiveStart + s.componentOffset, s);
  if (((e[te] = o[te] = c), i !== null)) for (let l of i) l(c, t);
  return yl(a, s, o), c;
}
function Om(e, t, n, r) {
  if (r) Ho(e, n, ["ng-version", "18.2.4"]);
  else {
    let { attrs: o, classes: i } = vh(t.selectors[0]);
    o && Ho(e, n, o), i && i.length > 0 && dl(e, n, i.join(" "));
  }
}
function Fm(e, t, n) {
  let r = (e.projection = []);
  for (let o = 0; o < t.length; o++) {
    let i = n[o];
    r.push(i != null ? Array.from(i) : null);
  }
}
function Rm() {
  let e = H();
  ts(x()[D], e);
}
var mn = (() => {
  let t = class t {};
  t.__NG_ELEMENT_ID__ = Pm;
  let e = t;
  return e;
})();
function Pm() {
  let e = H();
  return $l(e, x());
}
var km = mn,
  Bl = class extends km {
    constructor(t, n, r) {
      super(),
        (this._lContainer = t),
        (this._hostTNode = n),
        (this._hostLView = r);
    }
    get element() {
      return Bt(this._hostTNode, this._hostLView);
    }
    get injector() {
      return new Ze(this._hostTNode, this._hostLView);
    }
    get parentInjector() {
      let t = ns(this._hostTNode, this._hostLView);
      if (Sc(t)) {
        let n = Er(t, this._hostLView),
          r = Ir(t),
          o = n[D].data[r + 8];
        return new Ze(o, n);
      } else return new Ze(null, this._hostLView);
    }
    clear() {
      for (; this.length > 0; ) this.remove(this.length - 1);
    }
    get(t) {
      let n = du(this._lContainer);
      return (n !== null && n[t]) || null;
    }
    get length() {
      return this._lContainer.length - Z;
    }
    createEmbeddedView(t, n, r) {
      let o, i;
      typeof r == "number"
        ? (o = r)
        : r != null && ((o = r.index), (i = r.injector));
      let s = Or(this._lContainer, t.ssrId),
        a = t.createEmbeddedViewImpl(n || {}, i, s);
      return this.insertImpl(a, o, Nr(this._hostTNode, s)), a;
    }
    createComponent(t, n, r, o, i) {
      let s = t && !kh(t),
        a;
      if (s) a = n;
      else {
        let p = n || {};
        (a = p.index),
          (r = p.injector),
          (o = p.projectableNodes),
          (i = p.environmentInjector || p.ngModuleRef);
      }
      let u = s ? t : new Pt(Re(t)),
        c = r || this.parentInjector;
      if (!i && u.ngModule == null) {
        let S = (s ? c : this.parentInjector).get(Pe, null);
        S && (i = S);
      }
      let l = Re(u.componentType ?? {}),
        d = Or(this._lContainer, l?.id ?? null),
        h = d?.firstChild ?? null,
        f = u.create(c, o, h, i);
      return this.insertImpl(f.hostView, a, Nr(this._hostTNode, d)), f;
    }
    insert(t, n) {
      return this.insertImpl(t, n, !0);
    }
    insertImpl(t, n, r) {
      let o = t._lView;
      if (Uh(o)) {
        let a = this.indexOf(t);
        if (a !== -1) this.detach(a);
        else {
          let u = o[$],
            c = new Bl(u, u[Y], u[$]);
          c.detach(c.indexOf(t));
        }
      }
      let i = this._adjustIndex(n),
        s = this._lContainer;
      return vs(s, o, i, r), t.attachToViewContainerRef(), Ru(Fo(s), i, t), t;
    }
    move(t, n) {
      return this.insert(t, n);
    }
    indexOf(t) {
      let n = du(this._lContainer);
      return n !== null ? n.indexOf(t) : -1;
    }
    remove(t) {
      let n = this._adjustIndex(t, -1),
        r = Sr(this._lContainer, n);
      r && (hr(Fo(this._lContainer), n), ds(r[D], r));
    }
    detach(t) {
      let n = this._adjustIndex(t, -1),
        r = Sr(this._lContainer, n);
      return r && hr(Fo(this._lContainer), n) != null ? new rt(r) : null;
    }
    _adjustIndex(t, n = 0) {
      return t ?? this.length + n;
    }
  };
function du(e) {
  return e[yr];
}
function Fo(e) {
  return e[yr] || (e[yr] = []);
}
function $l(e, t) {
  let n,
    r = t[e.index];
  return (
    _e(r) ? (n = r) : ((n = bl(r, t, null, e)), (t[e.index] = n), no(t, n)),
    jm(n, t, e, r),
    new Bl(n, e, t)
  );
}
function Lm(e, t) {
  let n = e[R],
    r = n.createComment(""),
    o = oe(t, e),
    i = al(n, o);
  return Tr(n, i, r, wg(n, o), !1), r;
}
var jm = $m,
  Vm = () => !1;
function Bm(e, t, n) {
  return Vm(e, t, n);
}
function $m(e, t, n, r) {
  if (e[Qe]) return;
  let o;
  n.type & 8 ? (o = ye(r)) : (o = Lm(t, n)), (e[Qe] = o);
}
var yi = class e {
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
  Di = class e {
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
        ws(t, n).matches !== null && this.queries[n].setDirty();
    }
  },
  kr = class {
    constructor(t, n, r = null) {
      (this.flags = n),
        (this.read = r),
        typeof t == "string" ? (this.predicate = Ym(t)) : (this.predicate = t);
    }
  },
  vi = class e {
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
  Ii = class e {
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
          this.matchTNodeWithReadOption(t, n, Hm(n, i)),
            this.matchTNodeWithReadOption(t, n, cr(n, t, i, !1, !1));
        }
      else
        r === Ot
          ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1)
          : this.matchTNodeWithReadOption(t, n, cr(n, t, r, !1, !1));
    }
    matchTNodeWithReadOption(t, n, r) {
      if (r !== null) {
        let o = this.metadata.read;
        if (o !== null)
          if (o === $t || o === mn || (o === Ot && n.type & 4))
            this.addMatch(n.index, -2);
          else {
            let i = cr(n, t, o, !1, !1);
            i !== null && this.addMatch(n.index, i);
          }
        else this.addMatch(n.index, r);
      }
    }
    addMatch(t, n) {
      this.matches === null ? (this.matches = [t, n]) : this.matches.push(t, n);
    }
  };
function Hm(e, t) {
  let n = e.localNames;
  if (n !== null) {
    for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
  }
  return null;
}
function Um(e, t) {
  return e.type & 11 ? Bt(e, t) : e.type & 4 ? Es(e, t) : null;
}
function zm(e, t, n, r) {
  return n === -1 ? Um(t, e) : n === -2 ? Gm(e, t, r) : et(e, e[D], n, t);
}
function Gm(e, t, n) {
  if (n === $t) return Bt(t, e);
  if (n === Ot) return Es(t, e);
  if (n === mn) return $l(t, e);
}
function Hl(e, t, n, r) {
  let o = t[Ce].queries[r];
  if (o.matches === null) {
    let i = e.data,
      s = n.matches,
      a = [];
    for (let u = 0; s !== null && u < s.length; u += 2) {
      let c = s[u];
      if (c < 0) a.push(null);
      else {
        let l = i[c];
        a.push(zm(t, l, s[u + 1], n.metadata.read));
      }
    }
    o.matches = a;
  }
  return o.matches;
}
function Ei(e, t, n, r) {
  let o = e.queries.getByIndex(n),
    i = o.matches;
  if (i !== null) {
    let s = Hl(e, t, o, n);
    for (let a = 0; a < i.length; a += 2) {
      let u = i[a];
      if (u > 0) r.push(s[a / 2]);
      else {
        let c = i[a + 1],
          l = t[-u];
        for (let d = Z; d < l.length; d++) {
          let h = l[d];
          h[Ye] === h[$] && Ei(h[D], h, c, r);
        }
        if (l[At] !== null) {
          let d = l[At];
          for (let h = 0; h < d.length; h++) {
            let f = d[h];
            Ei(f[D], f, c, r);
          }
        }
      }
    }
  }
  return r;
}
function Wm(e, t) {
  return e[Ce].queries[t].queryList;
}
function Ul(e, t, n) {
  let r = new ri((n & 4) === 4);
  return (
    kg(e, t, r, r.destroy), (t[Ce] ??= new Di()).queries.push(new yi(r)) - 1
  );
}
function qm(e, t, n) {
  let r = j();
  return (
    r.firstCreatePass &&
      (zl(r, new kr(e, t, n), -1), (t & 2) === 2 && (r.staticViewQueries = !0)),
    Ul(r, x(), t)
  );
}
function Zm(e, t, n, r) {
  let o = j();
  if (o.firstCreatePass) {
    let i = H();
    zl(o, new kr(t, n, r), i.index),
      Qm(o, e),
      (n & 2) === 2 && (o.staticContentQueries = !0);
  }
  return Ul(o, x(), n);
}
function Ym(e) {
  return e.split(",").map((t) => t.trim());
}
function zl(e, t, n) {
  e.queries === null && (e.queries = new vi()), e.queries.track(new Ii(t, n));
}
function Qm(e, t) {
  let n = e.contentQueries || (e.contentQueries = []),
    r = n.length ? n[n.length - 1] : -1;
  t !== r && n.push(e.queries.length - 1, t);
}
function ws(e, t) {
  return e.queries.getByIndex(t);
}
function Km(e, t) {
  let n = e[D],
    r = ws(n, t);
  return r.crossesNgTemplate ? Ei(n, e, t, []) : Hl(n, e, r, t);
}
var fu = new Set();
function ut(e) {
  fu.has(e) ||
    (fu.add(e),
    performance?.mark?.("mark_feature_usage", { detail: { feature: e } }));
}
function bM(e) {
  return typeof e == "function" && e[de] !== void 0;
}
function _M(e, t) {
  ut("NgSignals");
  let n = Xs(e),
    r = n[de];
  return (
    t?.equal && (r.equal = t.equal),
    (n.set = (o) => co(r, o)),
    (n.update = (o) => ea(r, o)),
    (n.asReadonly = Jm.bind(n)),
    n
  );
}
function Jm() {
  let e = this[de];
  if (e.readonlyFn === void 0) {
    let t = () => this();
    (t[de] = e), (e.readonlyFn = t);
  }
  return e.readonlyFn;
}
function Xm(e) {
  let t = [],
    n = new Map();
  function r(o) {
    let i = n.get(o);
    if (!i) {
      let s = e(o);
      n.set(o, (i = s.then(ry)));
    }
    return i;
  }
  return (
    Lr.forEach((o, i) => {
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
      let u = Promise.all(s).then(() => oy(i));
      t.push(u);
    }),
    ty(),
    Promise.all(t).then(() => {})
  );
}
var Lr = new Map(),
  ey = new Set();
function ty() {
  let e = Lr;
  return (Lr = new Map()), e;
}
function ny() {
  return Lr.size === 0;
}
function ry(e) {
  return typeof e == "string" ? e : e.text();
}
function oy(e) {
  ey.delete(e);
}
function iy(e) {
  return Object.getPrototypeOf(e.prototype).constructor;
}
function sy(e) {
  let t = iy(e.type),
    n = !0,
    r = [e];
  for (; t; ) {
    let o;
    if (be(e)) o = t.ɵcmp || t.ɵdir;
    else {
      if (t.ɵcmp) throw new C(903, !1);
      o = t.ɵdir;
    }
    if (o) {
      if (n) {
        r.push(o);
        let s = e;
        (s.inputs = tr(e.inputs)),
          (s.inputTransforms = tr(e.inputTransforms)),
          (s.declaredInputs = tr(e.declaredInputs)),
          (s.outputs = tr(e.outputs));
        let a = o.hostBindings;
        a && dy(e, a);
        let u = o.viewQuery,
          c = o.contentQueries;
        if (
          (u && cy(e, u),
          c && ly(e, c),
          ay(e, o),
          Pf(e.outputs, o.outputs),
          be(o) && o.data.animation)
        ) {
          let l = e.data;
          l.animation = (l.animation || []).concat(o.data.animation);
        }
      }
      let i = o.features;
      if (i)
        for (let s = 0; s < i.length; s++) {
          let a = i[s];
          a && a.ngInherit && a(e), a === sy && (n = !1);
        }
    }
    t = Object.getPrototypeOf(t);
  }
  uy(r);
}
function ay(e, t) {
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
function uy(e) {
  let t = 0,
    n = null;
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    (o.hostVars = t += o.hostVars),
      (o.hostAttrs = rn(o.hostAttrs, (n = rn(n, o.hostAttrs))));
  }
}
function tr(e) {
  return e === St ? {} : e === W ? [] : e;
}
function cy(e, t) {
  let n = e.viewQuery;
  n
    ? (e.viewQuery = (r, o) => {
        t(r, o), n(r, o);
      })
    : (e.viewQuery = t);
}
function ly(e, t) {
  let n = e.contentQueries;
  n
    ? (e.contentQueries = (r, o, i) => {
        t(r, o, i), n(r, o, i);
      })
    : (e.contentQueries = t);
}
function dy(e, t) {
  let n = e.hostBindings;
  n
    ? (e.hostBindings = (r, o) => {
        t(r, o), n(r, o);
      })
    : (e.hostBindings = t);
}
function fy(e) {
  let t = e.inputConfig,
    n = {};
  for (let r in t)
    if (t.hasOwnProperty(r)) {
      let o = t[r];
      Array.isArray(o) && o[3] && (n[r] = o[3]);
    }
  e.inputTransforms = n;
}
var ke = class {},
  wi = class {};
var jr = class extends ke {
    constructor(t, n, r, o = !0) {
      super(),
        (this.ngModuleType = t),
        (this._parent = n),
        (this._bootstrapComponents = []),
        (this.destroyCbs = []),
        (this.componentFactoryResolver = new Pr(this));
      let i = zu(t);
      (this._bootstrapComponents = tl(i.bootstrap)),
        (this._r3Injector = Lc(
          t,
          n,
          [
            { provide: ke, useValue: this },
            { provide: Rt, useValue: this.componentFactoryResolver },
            ...r,
          ],
          q(t),
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
  Vr = class extends wi {
    constructor(t) {
      super(), (this.moduleType = t);
    }
    create(t) {
      return new jr(this.moduleType, t, []);
    }
  };
function hy(e, t, n) {
  return new jr(e, t, n, !1);
}
var Ci = class extends ke {
  constructor(t) {
    super(),
      (this.componentFactoryResolver = new Pr(this)),
      (this.instance = null);
    let n = new on(
      [
        ...t.providers,
        { provide: ke, useValue: this },
        { provide: Rt, useValue: this.componentFactoryResolver },
      ],
      t.parent || zi(),
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
function py(e, t, n = null) {
  return new Ci({
    providers: e,
    parent: t,
    debugName: n,
    runEnvironmentInitializers: !0,
  }).injector;
}
function Gl(e) {
  return my(e)
    ? Array.isArray(e) || (!(e instanceof Map) && Symbol.iterator in e)
    : !1;
}
function gy(e, t) {
  if (Array.isArray(e)) for (let n = 0; n < e.length; n++) t(e[n]);
  else {
    let n = e[Symbol.iterator](),
      r;
    for (; !(r = n.next()).done; ) t(r.value);
  }
}
function my(e) {
  return e !== null && (typeof e == "function" || typeof e == "object");
}
function je(e, t, n) {
  let r = e[t];
  return Object.is(r, n) ? !1 : ((e[t] = n), !0);
}
function yy(e) {
  return (e.flags & 32) === 32;
}
function Dy(e, t, n, r, o, i, s, a, u) {
  let c = t.consts,
    l = gn(t, e, 4, s || null, a || null);
  El(t, n, l, vr(c, u)), ts(t, l);
  let d = (l.tView = ps(
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
function Wl(e, t, n, r, o, i, s, a, u, c) {
  let l = n + re,
    d = t.firstCreatePass ? Dy(l, t, e, r, o, i, s, a, u) : t.data[l];
  fn(d, !1);
  let h = Iy(t, e, d, n);
  Xi() && fs(t, e, h, d), nt(h, e);
  let f = bl(h, e, h, d);
  return (
    (e[l] = f),
    no(e, f),
    Bm(f, d, e),
    Wi(d) && Dl(t, e, d),
    u != null && vl(e, d, c),
    d
  );
}
function vy(e, t, n, r, o, i, s, a) {
  let u = x(),
    c = j(),
    l = vr(c.consts, i);
  return Wl(u, c, e, t, n, r, o, l, s, a), vy;
}
var Iy = Ey;
function Ey(e, t, n, r) {
  return es(!0), t[R].createComment("");
}
var bt = (function (e) {
    return (
      (e[(e.EarlyRead = 0)] = "EarlyRead"),
      (e[(e.Write = 1)] = "Write"),
      (e[(e.MixedReadWrite = 2)] = "MixedReadWrite"),
      (e[(e.Read = 3)] = "Read"),
      e
    );
  })(bt || {}),
  ql = (() => {
    let t = class t {
      constructor() {
        this.impl = null;
      }
      execute() {
        this.impl?.execute();
      }
    };
    t.ɵprov = T({ token: t, providedIn: "root", factory: () => new t() });
    let e = t;
    return e;
  })(),
  qe = class qe {
    constructor() {
      (this.ngZone = I(B)),
        (this.scheduler = I(Ft)),
        (this.errorHandler = I(tt, { optional: !0 })),
        (this.sequences = new Set()),
        (this.deferredRegistrations = new Set()),
        (this.executing = !1);
    }
    execute() {
      this.executing = !0;
      for (let t of qe.PHASES)
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
(qe.PHASES = [bt.EarlyRead, bt.Write, bt.MixedReadWrite, bt.Read]),
  (qe.ɵprov = T({ token: qe, providedIn: "root", factory: () => new qe() }));
var bi = qe,
  _i = class {
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
function wy(e, t) {
  !t?.injector && Xu(wy);
  let n = t?.injector ?? I(De);
  return dg(n) ? (ut("NgAfterNextRender"), by(e, n, t, !0)) : _y;
}
function Cy(e, t) {
  if (e instanceof Function) {
    let n = [void 0, void 0, void 0, void 0];
    return (n[t] = e), n;
  } else return [e.earlyRead, e.write, e.mixedReadWrite, e.read];
}
function by(e, t, n, r) {
  let o = t.get(ql);
  o.impl ??= t.get(bi);
  let i = n?.phase ?? bt.MixedReadWrite,
    s = new _i(o.impl, Cy(e, i), r, t.get(Kr));
  return o.impl.register(s), s;
}
var _y = { destroy() {} };
function My(e, t, n, r) {
  let o = x(),
    i = Vt();
  if (je(o, i, t)) {
    let s = j(),
      a = Qr();
    Kg(a, o, e, t, n, r);
  }
  return My;
}
function xy(e, t, n, r) {
  return je(e, Vt(), n) ? t + ln(n) + r : xe;
}
function nr(e, t) {
  return (e << 17) | (t << 2);
}
function ot(e) {
  return (e >> 17) & 32767;
}
function Sy(e) {
  return (e & 2) == 2;
}
function Ty(e, t) {
  return (e & 131071) | (t << 17);
}
function Mi(e) {
  return e | 2;
}
function kt(e) {
  return (e & 131068) >> 2;
}
function Ro(e, t) {
  return (e & -131069) | (t << 2);
}
function Ny(e) {
  return (e & 1) === 1;
}
function xi(e) {
  return e | 1;
}
function Ay(e, t, n, r, o, i) {
  let s = i ? t.classBindings : t.styleBindings,
    a = ot(s),
    u = kt(s);
  e[r] = n;
  let c = !1,
    l;
  if (Array.isArray(n)) {
    let d = n;
    (l = d[1]), (l === null || dn(d, l) > 0) && (c = !0);
  } else l = n;
  if (o)
    if (u !== 0) {
      let h = ot(e[a + 1]);
      (e[r + 1] = nr(h, a)),
        h !== 0 && (e[h + 1] = Ro(e[h + 1], r)),
        (e[a + 1] = Ty(e[a + 1], r));
    } else
      (e[r + 1] = nr(a, 0)), a !== 0 && (e[a + 1] = Ro(e[a + 1], r)), (a = r);
  else
    (e[r + 1] = nr(u, 0)),
      a === 0 ? (a = r) : (e[u + 1] = Ro(e[u + 1], r)),
      (u = r);
  c && (e[r + 1] = Mi(e[r + 1])),
    hu(e, l, r, !0),
    hu(e, l, r, !1),
    Oy(t, l, e, r, i),
    (s = nr(a, u)),
    i ? (t.classBindings = s) : (t.styleBindings = s);
}
function Oy(e, t, n, r, o) {
  let i = o ? e.residualClasses : e.residualStyles;
  i != null &&
    typeof t == "string" &&
    dn(i, t) >= 0 &&
    (n[r + 1] = xi(n[r + 1]));
}
function hu(e, t, n, r) {
  let o = e[n + 1],
    i = t === null,
    s = r ? ot(o) : kt(o),
    a = !1;
  for (; s !== 0 && (a === !1 || i); ) {
    let u = e[s],
      c = e[s + 1];
    Fy(u, t) && ((a = !0), (e[s + 1] = r ? xi(c) : Mi(c))),
      (s = r ? ot(c) : kt(c));
  }
  a && (e[n + 1] = r ? Mi(o) : xi(o));
}
function Fy(e, t) {
  return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t
    ? !0
    : Array.isArray(e) && typeof t == "string"
      ? dn(e, t) >= 0
      : !1;
}
var L = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function Zl(e) {
  return e.substring(L.key, L.keyEnd);
}
function Ry(e) {
  return e.substring(L.value, L.valueEnd);
}
function Py(e) {
  return Kl(e), Yl(e, Lt(e, 0, L.textEnd));
}
function Yl(e, t) {
  let n = L.textEnd;
  return n === t ? -1 : ((t = L.keyEnd = Ly(e, (L.key = t), n)), Lt(e, t, n));
}
function ky(e) {
  return Kl(e), Ql(e, Lt(e, 0, L.textEnd));
}
function Ql(e, t) {
  let n = L.textEnd,
    r = (L.key = Lt(e, t, n));
  return n === r
    ? -1
    : ((r = L.keyEnd = jy(e, r, n)),
      (r = pu(e, r, n, 58)),
      (r = L.value = Lt(e, r, n)),
      (r = L.valueEnd = Vy(e, r, n)),
      pu(e, r, n, 59));
}
function Kl(e) {
  (L.key = 0),
    (L.keyEnd = 0),
    (L.value = 0),
    (L.valueEnd = 0),
    (L.textEnd = e.length);
}
function Lt(e, t, n) {
  for (; t < n && e.charCodeAt(t) <= 32; ) t++;
  return t;
}
function Ly(e, t, n) {
  for (; t < n && e.charCodeAt(t) > 32; ) t++;
  return t;
}
function jy(e, t, n) {
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
function pu(e, t, n, r) {
  return (t = Lt(e, t, n)), t < n && t++, t;
}
function Vy(e, t, n) {
  let r = -1,
    o = -1,
    i = -1,
    s = t,
    a = s;
  for (; s < n; ) {
    let u = e.charCodeAt(s++);
    if (u === 59) return a;
    u === 34 || u === 39
      ? (a = s = gu(e, u, s, n))
      : t === s - 4 && i === 85 && o === 82 && r === 76 && u === 40
        ? (a = s = gu(e, 41, s, n))
        : u > 32 && (a = s),
      (i = o),
      (o = r),
      (r = u & -33);
  }
  return a;
}
function gu(e, t, n, r) {
  let o = -1,
    i = n;
  for (; i < r; ) {
    let s = e.charCodeAt(i++);
    if (s == t && o !== 92) return i;
    s == 92 && o === 92 ? (o = 0) : (o = s);
  }
  throw new Error();
}
function By(e, t, n) {
  let r = x(),
    o = Vt();
  if (je(r, o, t)) {
    let i = j(),
      s = Qr();
    gs(i, s, r, e, t, r[R], n, !1);
  }
  return By;
}
function Si(e, t, n, r, o) {
  let i = t.inputs,
    s = o ? "class" : "style";
  ms(e, n, i[s], s, r);
}
function Jl(e, t, n) {
  return Xl(e, t, n, !1), Jl;
}
function $y(e, t) {
  return Xl(e, t, null, !0), $y;
}
function MM(e) {
  ed(rd, Hy, e, !1);
}
function Hy(e, t) {
  for (let n = ky(t); n >= 0; n = Ql(t, n)) rd(e, Zl(t), Ry(t));
}
function xM(e) {
  ed(Yy, Uy, e, !0);
}
function Uy(e, t) {
  for (let n = Py(t); n >= 0; n = Yl(t, n)) Gr(e, Zl(t), !0);
}
function Xl(e, t, n, r) {
  let o = x(),
    i = j(),
    s = vc(2);
  if ((i.firstUpdatePass && nd(i, e, s, r), t !== xe && je(o, s, t))) {
    let a = i.data[it()];
    od(i, a, o, o[R], e, (o[s + 1] = Ky(t, n)), r, s);
  }
}
function ed(e, t, n, r) {
  let o = j(),
    i = vc(2);
  o.firstUpdatePass && nd(o, null, i, r);
  let s = x();
  if (n !== xe && je(s, i, n)) {
    let a = o.data[it()];
    if (id(a, r) && !td(o, i)) {
      let u = r ? a.classesWithoutHost : a.stylesWithoutHost;
      u !== null && (n = jo(u, n || "")), Si(o, a, s, n, r);
    } else Qy(o, a, s, s[R], s[i + 1], (s[i + 1] = Zy(e, t, n)), r, i);
  }
}
function td(e, t) {
  return t >= e.expandoStartIndex;
}
function nd(e, t, n, r) {
  let o = e.data;
  if (o[n + 1] === null) {
    let i = o[it()],
      s = td(e, n);
    id(i, r) && t === null && !s && (t = !1),
      (t = zy(o, i, t, r)),
      Ay(o, i, t, n, s, r);
  }
}
function zy(e, t, n, r) {
  let o = Yi(e),
    i = r ? t.residualClasses : t.residualStyles;
  if (o === null)
    (r ? t.classBindings : t.styleBindings) === 0 &&
      ((n = Po(null, e, t, n, r)), (n = un(n, t.attrs, r)), (i = null));
  else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== o)
      if (((n = Po(o, e, t, n, r)), i === null)) {
        let u = Gy(e, t, r);
        u !== void 0 &&
          Array.isArray(u) &&
          ((u = Po(null, e, t, u[1], r)),
          (u = un(u, t.attrs, r)),
          Wy(e, t, r, u));
      } else i = qy(e, t, r);
  }
  return (
    i !== void 0 && (r ? (t.residualClasses = i) : (t.residualStyles = i)), n
  );
}
function Gy(e, t, n) {
  let r = n ? t.classBindings : t.styleBindings;
  if (kt(r) !== 0) return e[ot(r)];
}
function Wy(e, t, n, r) {
  let o = n ? t.classBindings : t.styleBindings;
  e[ot(o)] = r;
}
function qy(e, t, n) {
  let r,
    o = t.directiveEnd;
  for (let i = 1 + t.directiveStylingLast; i < o; i++) {
    let s = e[i].hostAttrs;
    r = un(r, s, n);
  }
  return un(r, t.attrs, n);
}
function Po(e, t, n, r, o) {
  let i = null,
    s = n.directiveEnd,
    a = n.directiveStylingLast;
  for (
    a === -1 ? (a = n.directiveStart) : a++;
    a < s && ((i = t[a]), (r = un(r, i.hostAttrs, o)), i !== e);

  )
    a++;
  return e !== null && (n.directiveStylingLast = a), r;
}
function un(e, t, n) {
  let r = n ? 1 : 2,
    o = -1;
  if (t !== null)
    for (let i = 0; i < t.length; i++) {
      let s = t[i];
      typeof s == "number"
        ? (o = s)
        : o === r &&
          (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]),
          Gr(e, s, n ? !0 : t[++i]));
    }
  return e === void 0 ? null : e;
}
function Zy(e, t, n) {
  if (n == null || n === "") return W;
  let r = [],
    o = st(n);
  if (Array.isArray(o)) for (let i = 0; i < o.length; i++) e(r, o[i], !0);
  else if (typeof o == "object")
    for (let i in o) o.hasOwnProperty(i) && e(r, i, o[i]);
  else typeof o == "string" && t(r, o);
  return r;
}
function rd(e, t, n) {
  Gr(e, t, st(n));
}
function Yy(e, t, n) {
  let r = String(t);
  r !== "" && !r.includes(" ") && Gr(e, r, n);
}
function Qy(e, t, n, r, o, i, s, a) {
  o === xe && (o = W);
  let u = 0,
    c = 0,
    l = 0 < o.length ? o[0] : null,
    d = 0 < i.length ? i[0] : null;
  for (; l !== null || d !== null; ) {
    let h = u < o.length ? o[u + 1] : void 0,
      f = c < i.length ? i[c + 1] : void 0,
      p = null,
      S;
    l === d
      ? ((u += 2), (c += 2), h !== f && ((p = d), (S = f)))
      : d === null || (l !== null && l < d)
        ? ((u += 2), (p = l))
        : ((c += 2), (p = d), (S = f)),
      p !== null && od(e, t, n, r, p, S, s, a),
      (l = u < o.length ? o[u] : null),
      (d = c < i.length ? i[c] : null);
  }
}
function od(e, t, n, r, o, i, s, a) {
  if (!(t.type & 3)) return;
  let u = e.data,
    c = u[a + 1],
    l = Ny(c) ? mu(u, t, n, o, kt(c), s) : void 0;
  if (!Br(l)) {
    Br(i) || (Sy(c) && (i = mu(u, null, n, o, a, s)));
    let d = uc(it(), n);
    Sg(r, s, d, o, i);
  }
}
function mu(e, t, n, r, o, i) {
  let s = t === null,
    a;
  for (; o > 0; ) {
    let u = e[o],
      c = Array.isArray(u),
      l = c ? u[1] : u,
      d = l === null,
      h = n[o + 1];
    h === xe && (h = d ? W : void 0);
    let f = d ? Mo(h, r) : l === r ? h : void 0;
    if ((c && !Br(f) && (f = Mo(u, r)), Br(f) && ((a = f), s))) return a;
    let p = e[o + 1];
    o = s ? ot(p) : kt(p);
  }
  if (t !== null) {
    let u = i ? t.residualClasses : t.residualStyles;
    u != null && (a = Mo(u, r));
  }
  return a;
}
function Br(e) {
  return e !== void 0;
}
function Ky(e, t) {
  return (
    e == null ||
      e === "" ||
      (typeof t == "string"
        ? (e = e + t)
        : typeof e == "object" && (e = q(st(e)))),
    e
  );
}
function id(e, t) {
  return (e.flags & (t ? 8 : 16)) !== 0;
}
function SM(e, t) {
  ut("NgControlFlow");
  let n = x(),
    r = Vt(),
    o = n[r] !== xe ? n[r] : -1,
    i = o !== -1 ? yu(n, re + o) : void 0,
    s = 0;
  if (je(n, r, e)) {
    let a = b(null);
    try {
      if ((i !== void 0 && sm(i, s), e !== -1)) {
        let u = re + e,
          c = yu(n, u),
          l = Jy(n[D], u),
          d = Or(c, l.tView.ssrId),
          h = Ds(n, l, t, { dehydratedView: d });
        vs(c, h, s, Nr(l, d));
      }
    } finally {
      b(a);
    }
  } else if (i !== void 0) {
    let a = im(i, s);
    a !== void 0 && (a[te] = t);
  }
}
function yu(e, t) {
  return e[t];
}
function Jy(e, t) {
  return qi(e, t);
}
function Xy(e, t, n, r, o, i) {
  let s = t.consts,
    a = vr(s, o),
    u = gn(t, e, 2, r, a);
  return (
    El(t, n, u, vr(s, i)),
    u.attrs !== null && gi(u, u.attrs, !1),
    u.mergedAttrs !== null && gi(u, u.mergedAttrs, !0),
    t.queries !== null && t.queries.elementStart(t, u),
    u
  );
}
function sd(e, t, n, r) {
  let o = x(),
    i = j(),
    s = re + e,
    a = o[R],
    u = i.firstCreatePass ? Xy(s, i, o, t, n, r) : i.data[s],
    c = tD(i, o, u, a, t, e);
  o[s] = c;
  let l = Wi(u);
  return (
    fn(u, !0),
    fl(a, c, u),
    !yy(u) && Xi() && fs(i, o, c, u),
    Wh() === 0 && nt(c, o),
    qh(),
    l && (Dl(i, o, u), yl(i, u, o)),
    r !== null && vl(o, u),
    sd
  );
}
function ad() {
  let e = H();
  mc() ? yc() : ((e = e.parent), fn(e, !1));
  let t = e;
  Yh(t) && Qh(), Zh();
  let n = j();
  return (
    n.firstCreatePass && (ts(n, e), tc(e) && n.queries.elementEnd(e)),
    t.classesWithoutHost != null &&
      up(t) &&
      Si(n, t, x(), t.classesWithoutHost, !0),
    t.stylesWithoutHost != null &&
      cp(t) &&
      Si(n, t, x(), t.stylesWithoutHost, !1),
    ad
  );
}
function eD(e, t, n, r) {
  return sd(e, t, n, r), ad(), eD;
}
var tD = (e, t, n, r, o, i) => (es(!0), nl(r, o, op()));
function TM() {
  return x();
}
function nD(e, t, n) {
  let r = x(),
    o = Vt();
  if (je(r, o, t)) {
    let i = j(),
      s = Qr();
    gs(i, s, r, e, t, r[R], n, !0);
  }
  return nD;
}
function rD(e, t, n) {
  let r = x(),
    o = Vt();
  if (je(r, o, t)) {
    let i = j(),
      s = Qr(),
      a = Yi(i.data),
      u = Sl(a, s, r);
    gs(i, s, r, e, t, u, n, !0);
  }
  return rD;
}
var $r = "en-US";
var oD = $r;
function iD(e) {
  typeof e == "string" && (oD = e.toLowerCase().replace(/_/g, "-"));
}
var sD = (e, t, n) => {};
function aD(e, t, n, r) {
  let o = x(),
    i = j(),
    s = H();
  return ud(i, o, o[R], s, e, t, r), aD;
}
function uD(e, t) {
  let n = H(),
    r = x(),
    o = j(),
    i = Yi(o.data),
    s = Sl(i, n, r);
  return ud(o, r, s, n, e, t), uD;
}
function cD(e, t, n, r) {
  let o = e.cleanup;
  if (o != null)
    for (let i = 0; i < o.length - 1; i += 2) {
      let s = o[i];
      if (s === n && o[i + 1] === r) {
        let a = t[mr],
          u = o[i + 2];
        return a.length > u ? a[u] : null;
      }
      typeof s == "string" && (i += 2);
    }
  return null;
}
function ud(e, t, n, r, o, i, s) {
  let a = Wi(r),
    c = e.firstCreatePass && xl(e),
    l = t[te],
    d = Ml(t),
    h = !0;
  if (r.type & 3 || s) {
    let S = oe(r, t),
      V = s ? s(S) : S,
      O = d.length,
      J = s ? (ie) => s(ye(ie[r.index])) : r.index,
      Ie = null;
    if ((!s && a && (Ie = cD(e, t, o, r.index)), Ie !== null)) {
      let ie = Ie.__ngLastListenerFn__ || Ie;
      (ie.__ngNextListenerFn__ = i), (Ie.__ngLastListenerFn__ = i), (h = !1);
    } else {
      (i = vu(r, t, l, i)), sD(S, o, i);
      let ie = n.listen(V, o, i);
      d.push(i, ie), c && c.push(o, J, O, O + 1);
    }
  } else i = vu(r, t, l, i);
  let f = r.outputs,
    p;
  if (h && f !== null && (p = f[o])) {
    let S = p.length;
    if (S)
      for (let V = 0; V < S; V += 2) {
        let O = p[V],
          J = p[V + 1],
          lt = t[O][J].subscribe(i),
          Q = d.length;
        d.push(i, lt), c && c.push(o, r.index, Q, -(Q + 1));
      }
  }
}
function Du(e, t, n, r) {
  let o = b(null);
  try {
    return pe(6, t, n), n(r) !== !1;
  } catch (i) {
    return Tl(e, i), !1;
  } finally {
    pe(7, t, n), b(o);
  }
}
function vu(e, t, n, r) {
  return function o(i) {
    if (i === Function) return r;
    let s = e.componentOffset > -1 ? Le(e.index, t) : t;
    Is(s, 5);
    let a = Du(t, n, r, i),
      u = o.__ngNextListenerFn__;
    for (; u; ) (a = Du(t, n, u, i) && a), (u = u.__ngNextListenerFn__);
    return a;
  };
}
function NM(e = 1) {
  return rp(e);
}
function lD(e, t) {
  let n = null,
    r = hh(e);
  for (let o = 0; o < t.length; o++) {
    let i = t[o];
    if (i === "*") {
      n = o;
      continue;
    }
    if (r === null ? Bu(e, i, !0) : mh(r, i)) return o;
  }
  return n;
}
function AM(e) {
  let t = x()[ne][Y];
  if (!t.projection) {
    let n = e ? e.length : 1,
      r = (t.projection = oh(n, null)),
      o = r.slice(),
      i = t.child;
    for (; i !== null; ) {
      if (i.type !== 128) {
        let s = e ? lD(i, e) : 0;
        s !== null &&
          (o[s] ? (o[s].projectionNext = i) : (r[s] = i), (o[s] = i));
      }
      i = i.next;
    }
  }
}
function OM(e, t = 0, n, r, o, i) {
  let s = x(),
    a = j(),
    u = r ? e + 1 : null;
  u !== null && Wl(s, a, u, r, o, i, null, n);
  let c = gn(a, re + e, 16, null, n || null);
  c.projection === null && (c.projection = t), yc();
  let d = !s[sn] || pc();
  s[ne][Y].projection[c.projection] === null && u !== null
    ? dD(s, a, u)
    : d && (c.flags & 32) !== 32 && Mg(a, s, c);
}
function dD(e, t, n) {
  let r = re + n,
    o = t.data[r],
    i = e[r],
    s = Or(i, o.tView.ssrId),
    a = Ds(e, o, void 0, { dehydratedView: s });
  vs(i, a, 0, Nr(o, s));
}
function FM(e, t, n, r) {
  Zm(e, t, n, r);
}
function RM(e, t, n) {
  qm(e, t, n);
}
function PM(e) {
  let t = x(),
    n = j(),
    r = Ic();
  Qi(r + 1);
  let o = ws(n, r);
  if (e.dirty && Hh(t) === ((o.metadata.flags & 2) === 2)) {
    if (o.matches === null) e.reset([]);
    else {
      let i = Km(t, r);
      e.reset(i, Op), e.notifyOnChanges();
    }
    return !0;
  }
  return !1;
}
function kM() {
  return Wm(x(), Ic());
}
function LM(e, t = "") {
  let n = x(),
    r = j(),
    o = e + re,
    i = r.firstCreatePass ? gn(r, o, 1, t, null) : r.data[o],
    s = fD(r, n, i, t, e);
  (n[o] = s), Xi() && fs(r, n, s, i), fn(i, !1);
}
var fD = (e, t, n, r, o) => (es(!0), hg(t[R], r));
function hD(e) {
  return cd("", e, ""), hD;
}
function cd(e, t, n) {
  let r = x(),
    o = xy(r, e, t, n);
  return o !== xe && tm(r, it(), o), cd;
}
function pD(e, t, n) {
  let r = j();
  if (r.firstCreatePass) {
    let o = be(e);
    Ti(n, r.data, r.blueprint, o, !0), Ti(t, r.data, r.blueprint, o, !1);
  }
}
function Ti(e, t, n, r, o) {
  if (((e = z(e)), Array.isArray(e)))
    for (let i = 0; i < e.length; i++) Ti(e[i], t, n, r, o);
  else {
    let i = j(),
      s = x(),
      a = H(),
      u = Tt(e) ? e : z(e.provide),
      c = Ku(e),
      l = a.providerIndexes & 1048575,
      d = a.directiveStart,
      h = a.providerIndexes >> 20;
    if (Tt(e) || !e.multi) {
      let f = new Xe(c, o, at),
        p = Lo(u, t, o ? l : l + h, d);
      p === -1
        ? (Jo(wr(a, s), i, u),
          ko(i, e, t.length),
          t.push(u),
          a.directiveStart++,
          a.directiveEnd++,
          o && (a.providerIndexes += 1048576),
          n.push(f),
          s.push(f))
        : ((n[p] = f), (s[p] = f));
    } else {
      let f = Lo(u, t, l + h, d),
        p = Lo(u, t, l, l + h),
        S = f >= 0 && n[f],
        V = p >= 0 && n[p];
      if ((o && !V) || (!o && !S)) {
        Jo(wr(a, s), i, u);
        let O = yD(o ? mD : gD, n.length, o, r, c);
        !o && V && (n[p].providerFactory = O),
          ko(i, e, t.length, 0),
          t.push(u),
          a.directiveStart++,
          a.directiveEnd++,
          o && (a.providerIndexes += 1048576),
          n.push(O),
          s.push(O);
      } else {
        let O = ld(n[o ? p : f], c, !o && r);
        ko(i, e, f > -1 ? f : p, O);
      }
      !o && r && V && n[p].componentProviders++;
    }
  }
}
function ko(e, t, n, r) {
  let o = Tt(t),
    i = Sh(t);
  if (o || i) {
    let u = (i ? z(t.useClass) : t).prototype.ngOnDestroy;
    if (u) {
      let c = e.destroyHooks || (e.destroyHooks = []);
      if (!o && t.multi) {
        let l = c.indexOf(n);
        l === -1 ? c.push(n, [r, u]) : c[l + 1].push(r, u);
      } else c.push(n, u);
    }
  }
}
function ld(e, t, n) {
  return n && e.componentProviders++, e.multi.push(t) - 1;
}
function Lo(e, t, n, r) {
  for (let o = n; o < r; o++) if (t[o] === e) return o;
  return -1;
}
function gD(e, t, n, r) {
  return Ni(this.multi, []);
}
function mD(e, t, n, r) {
  let o = this.multi,
    i;
  if (this.providerFactory) {
    let s = this.providerFactory.componentProviders,
      a = et(n, n[D], this.providerFactory.index, r);
    (i = a.slice(0, s)), Ni(o, i);
    for (let u = s; u < a.length; u++) i.push(a[u]);
  } else (i = []), Ni(o, i);
  return i;
}
function Ni(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    t.push(r());
  }
  return t;
}
function yD(e, t, n, r, o) {
  let i = new Xe(e, n, at);
  return (
    (i.multi = []),
    (i.index = t),
    (i.componentProviders = 0),
    ld(i, o, r && !n),
    i
  );
}
function jM(e, t = []) {
  return (n) => {
    n.providersResolver = (r, o) => pD(r, o ? o(e) : e, t);
  };
}
var DD = (() => {
  let t = class t {
    constructor(r) {
      (this._injector = r), (this.cachedInjectors = new Map());
    }
    getOrCreateStandaloneInjector(r) {
      if (!r.standalone) return null;
      if (!this.cachedInjectors.has(r)) {
        let o = qu(!1, r.type),
          i =
            o.length > 0
              ? py([o], this._injector, `Standalone[${r.type.name}]`)
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
  t.ɵprov = T({
    token: t,
    providedIn: "environment",
    factory: () => new t(F(Pe)),
  });
  let e = t;
  return e;
})();
function VM(e) {
  ut("NgStandalone"),
    (e.getStandaloneInjector = (t) =>
      t.get(DD).getOrCreateStandaloneInjector(e));
}
var rr = null;
function vD(e) {
  (rr !== null &&
    (e.defaultEncapsulation !== rr.defaultEncapsulation ||
      e.preserveWhitespaces !== rr.preserveWhitespaces)) ||
    (rr = e);
}
var BM = (() => {
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
    (t.ɵprov = T({ token: t, factory: t.ɵfac, providedIn: "platform" }));
  let e = t;
  return e;
})();
var ID = new M(""),
  ED = new M(""),
  $M = (() => {
    let t = class t {
      constructor(r, o, i) {
        (this._ngZone = r),
          (this.registry = o),
          (this._isZoneStable = !0),
          (this._callbacks = []),
          (this.taskTrackingZone = null),
          Cs || (CD(i), i.addToWindow(o)),
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
                B.assertNotInAngularZone(),
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
      return new (o || t)(F(B), F(wD), F(ED));
    }),
      (t.ɵprov = T({ token: t, factory: t.ɵfac }));
    let e = t;
    return e;
  })(),
  wD = (() => {
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
        return Cs?.findTestabilityInTree(this, r, o) ?? null;
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = T({ token: t, factory: t.ɵfac, providedIn: "platform" }));
    let e = t;
    return e;
  })();
function CD(e) {
  Cs = e;
}
var Cs;
function bs(e) {
  return !!e && typeof e.then == "function";
}
function dd(e) {
  return !!e && typeof e.subscribe == "function";
}
var bD = new M(""),
  fd = (() => {
    let t = class t {
      constructor() {
        (this.initialized = !1),
          (this.done = !1),
          (this.donePromise = new Promise((r, o) => {
            (this.resolve = r), (this.reject = o);
          })),
          (this.appInits = I(bD, { optional: !0 }) ?? []);
      }
      runInitializers() {
        if (this.initialized) return;
        let r = [];
        for (let i of this.appInits) {
          let s = i();
          if (bs(s)) r.push(s);
          else if (dd(s)) {
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
      (t.ɵprov = T({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })(),
  _D = new M("");
function MD() {
  Js(() => {
    throw new C(600, !1);
  });
}
function xD(e) {
  return e.isBoundToModule;
}
var SD = 10;
function TD(e, t, n) {
  try {
    let r = n();
    return bs(r)
      ? r.catch((o) => {
          throw (t.runOutsideAngular(() => e.handleError(o)), o);
        })
      : r;
  } catch (r) {
    throw (t.runOutsideAngular(() => e.handleError(r)), r);
  }
}
function hd(e, t) {
  return Array.isArray(t) ? t.reduce(hd, e) : K(K({}, e), t);
}
var yn = (() => {
  let t = class t {
    constructor() {
      (this._bootstrapListeners = []),
        (this._runningTick = !1),
        (this._destroyed = !1),
        (this._destroyListeners = []),
        (this._views = []),
        (this.internalErrorHandler = I(Np)),
        (this.afterRenderManager = I(ql)),
        (this.zonelessEnabled = I(kl)),
        (this.dirtyFlags = 0),
        (this.deferredDirtyFlags = 0),
        (this.externalTestViews = new Set()),
        (this.beforeRender = new Te()),
        (this.afterTick = new Te()),
        (this.componentTypes = []),
        (this.components = []),
        (this.isStable = I(hn).hasPendingTasks.pipe(Ee((r) => !r))),
        (this._injector = I(Pe));
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
      let i = r instanceof Fr;
      if (!this._injector.get(fd).done) {
        let f = !i && wh(r),
          p = !1;
        throw new C(405, p);
      }
      let a;
      i ? (a = r) : (a = this._injector.get(Rt).resolveComponentFactory(r)),
        this.componentTypes.push(a.componentType);
      let u = xD(a) ? void 0 : this._injector.get(ke),
        c = o || a.selector,
        l = a.create(De.NULL, [], c, u),
        d = l.location.nativeElement,
        h = l.injector.get(ID, null);
      return (
        h?.registerApplication(d),
        l.onDestroy(() => {
          this.detachView(l.hostView),
            lr(this.components, l),
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
      if (this._runningTick) throw new C(101, !1);
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
        (r = this._injector.get(Rr, null, { optional: !0 })),
        (this.dirtyFlags |= this.deferredDirtyFlags),
        (this.deferredDirtyFlags = 0);
      let o = 0;
      for (; this.dirtyFlags !== 0 && o++ < SD; ) this.synchronizeOnce(r);
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
          ND(i, s, o, this.zonelessEnabled);
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
      if (this.allViews.some(({ _lView: r }) => Zr(r))) {
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
      lr(this._views, o), o.detachFromAppRef();
    }
    _loadComponent(r) {
      this.attachView(r.hostView), this.tick(), this.components.push(r);
      let o = this._injector.get(_D, []);
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
        this._destroyListeners.push(r), () => lr(this._destroyListeners, r)
      );
    }
    destroy() {
      if (this._destroyed) throw new C(406, !1);
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
    (t.ɵprov = T({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let e = t;
  return e;
})();
function lr(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function ND(e, t, n, r) {
  if (!n && !Zr(e)) return;
  Ol(e, t, n && !r ? 0 : 1);
}
var Ai = class {
    constructor(t, n) {
      (this.ngModuleFactory = t), (this.componentFactories = n);
    }
  },
  HM = (() => {
    let t = class t {
      compileModuleSync(r) {
        return new Vr(r);
      }
      compileModuleAsync(r) {
        return Promise.resolve(this.compileModuleSync(r));
      }
      compileModuleAndAllComponentsSync(r) {
        let o = this.compileModuleSync(r),
          i = zu(r),
          s = tl(i.declarations).reduce((a, u) => {
            let c = Re(u);
            return c && a.push(new Pt(c)), a;
          }, []);
        return new Ai(o, s);
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
      (t.ɵprov = T({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })(),
  AD = new M("");
function OD(e, t, n) {
  let r = new Vr(n);
  return Promise.resolve(r);
}
function Iu(e) {
  for (let t = e.length - 1; t >= 0; t--) if (e[t] !== void 0) return e[t];
}
var FD = (() => {
  let t = class t {
    constructor() {
      (this.zone = I(B)),
        (this.changeDetectionScheduler = I(Ft)),
        (this.applicationRef = I(yn));
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
    (t.ɵprov = T({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let e = t;
  return e;
})();
function RD({
  ngZoneFactory: e,
  ignoreChangesOutsideZone: t,
  scheduleInRootZone: n,
}) {
  return (
    (e ??= () => new B(se(K({}, pd()), { scheduleInRootZone: n }))),
    [
      { provide: B, useFactory: e },
      {
        provide: pr,
        multi: !0,
        useFactory: () => {
          let r = I(FD, { optional: !0 });
          return () => r.initialize();
        },
      },
      {
        provide: pr,
        multi: !0,
        useFactory: () => {
          let r = I(PD);
          return () => {
            r.initialize();
          };
        },
      },
      t === !0 ? { provide: Ll, useValue: !0 } : [],
      { provide: jl, useValue: n ?? jc },
    ]
  );
}
function pd(e) {
  return {
    enableLongStackTrace: !1,
    shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1,
    shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1,
  };
}
var PD = (() => {
  let t = class t {
    constructor() {
      (this.subscription = new P()),
        (this.initialized = !1),
        (this.zone = I(B)),
        (this.pendingTasks = I(hn));
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
              B.assertNotInAngularZone(),
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
            B.assertInAngularZone(), (r ??= this.pendingTasks.add());
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
    (t.ɵprov = T({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let e = t;
  return e;
})();
var kD = (() => {
  let t = class t {
    constructor() {
      (this.appRef = I(yn)),
        (this.taskService = I(hn)),
        (this.ngZone = I(B)),
        (this.zonelessEnabled = I(kl)),
        (this.disableScheduling = I(Ll, { optional: !0 }) ?? !1),
        (this.zoneIsDefined = typeof Zone < "u" && !!Zone.root.run),
        (this.schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }]),
        (this.subscriptions = new P()),
        (this.angularZoneId = this.zoneIsDefined
          ? this.ngZone._inner?.get(br)
          : null),
        (this.scheduleInRootZone =
          !this.zonelessEnabled &&
          this.zoneIsDefined &&
          (I(jl, { optional: !0 }) ?? !1)),
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
          (this.ngZone instanceof _r || !this.zoneIsDefined));
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
      let o = this.useMicrotaskScheduler ? Qa : Vc;
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
          Zone.current.get(br + this.angularZoneId))
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
        Qa(() => {
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
    (t.ɵprov = T({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let e = t;
  return e;
})();
function LD() {
  return (typeof $localize < "u" && $localize.locale) || $r;
}
var _s = new M("", {
  providedIn: "root",
  factory: () => I(_s, w.Optional | w.SkipSelf) || LD(),
});
var Ms = new M("");
function or(e) {
  return !!e.platformInjector;
}
function jD(e) {
  let t = or(e) ? e.r3Injector : e.moduleRef.injector,
    n = t.get(B);
  return n.run(() => {
    or(e)
      ? e.r3Injector.resolveInjectorInitializers()
      : e.moduleRef.resolveInjectorInitializers();
    let r = t.get(tt, null),
      o;
    if (
      (n.runOutsideAngular(() => {
        o = n.onError.subscribe({
          next: (i) => {
            r.handleError(i);
          },
        });
      }),
      or(e))
    ) {
      let i = () => t.destroy(),
        s = e.platformInjector.get(Ms);
      s.add(i),
        t.onDestroy(() => {
          o.unsubscribe(), s.delete(i);
        });
    } else
      e.moduleRef.onDestroy(() => {
        lr(e.allPlatformModules, e.moduleRef), o.unsubscribe();
      });
    return TD(r, n, () => {
      let i = t.get(fd);
      return (
        i.runInitializers(),
        i.donePromise.then(() => {
          let s = t.get(_s, $r);
          if ((iD(s || $r), or(e))) {
            let a = t.get(yn);
            return (
              e.rootComponent !== void 0 && a.bootstrap(e.rootComponent), a
            );
          } else return VD(e.moduleRef, e.allPlatformModules), e.moduleRef;
        })
      );
    });
  });
}
function VD(e, t) {
  let n = e.injector.get(yn);
  if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach((r) => n.bootstrap(r));
  else if (e.instance.ngDoBootstrap) e.instance.ngDoBootstrap(n);
  else throw new C(-403, !1);
  t.push(e);
}
var gd = (() => {
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
            Tp(
              o?.ngZone,
              se(
                K(
                  {},
                  pd({
                    eventCoalescing: o?.ngZoneEventCoalescing,
                    runCoalescing: o?.ngZoneRunCoalescing,
                  }),
                ),
                { scheduleInRootZone: i },
              ),
            ),
          a = o?.ignoreChangesOutsideZone,
          u = [
            RD({ ngZoneFactory: s, ignoreChangesOutsideZone: a }),
            { provide: Ft, useExisting: kD },
          ],
          c = hy(r.moduleType, this.injector, u);
        return jD({ moduleRef: c, allPlatformModules: this._modules });
      }
      bootstrapModule(r, o = []) {
        let i = hd({}, o);
        return OD(this.injector, i, r).then((s) =>
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
        if (this._destroyed) throw new C(404, !1);
        this._modules.slice().forEach((o) => o.destroy()),
          this._destroyListeners.forEach((o) => o());
        let r = this._injector.get(Ms, null);
        r && (r.forEach((o) => o()), r.clear()), (this._destroyed = !0);
      }
      get destroyed() {
        return this._destroyed;
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(F(De));
    }),
      (t.ɵprov = T({ token: t, factory: t.ɵfac, providedIn: "platform" }));
    let e = t;
    return e;
  })(),
  Xt = null,
  md = new M("");
function BD(e) {
  if (Xt && !Xt.get(md, !1)) throw new C(400, !1);
  MD(), (Xt = e);
  let t = e.get(gd);
  return zD(e), t;
}
function $D(e, t, n = []) {
  let r = `Platform: ${t}`,
    o = new M(r);
  return (i = []) => {
    let s = yd();
    if (!s || s.injector.get(md, !1)) {
      let a = [...n, ...i, { provide: o, useValue: !0 }];
      e ? e(a) : BD(HD(a, r));
    }
    return UD(o);
  };
}
function HD(e = [], t) {
  return De.create({
    name: t,
    providers: [
      { provide: Qu, useValue: "platform" },
      { provide: Ms, useValue: new Set([() => (Xt = null)]) },
      ...e,
    ],
  });
}
function UD(e) {
  let t = yd();
  if (!t) throw new C(401, !1);
  return t;
}
function yd() {
  return Xt?.get(gd) ?? null;
}
function zD(e) {
  e.get(jp, null)?.forEach((n) => n());
}
var xs = (() => {
  let t = class t {};
  t.__NG_ELEMENT_ID__ = GD;
  let e = t;
  return e;
})();
function GD(e) {
  return WD(H(), x(), (e & 16) === 16);
}
function WD(e, t, n) {
  if (qr(e) && !n) {
    let r = Le(e.index, t);
    return new rt(r, r);
  } else if (e.type & 175) {
    let r = t[ne];
    return new rt(r, t);
  }
  return null;
}
var Oi = class {
    constructor() {}
    supports(t) {
      return Gl(t);
    }
    create(t) {
      return new Fi(t);
    }
  },
  qD = (e, t) => t,
  Fi = class {
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
        (this._trackByFn = t || qD);
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
        let s = !r || (n && n.currentIndex < Eu(r, o, i)) ? n : r,
          a = Eu(s, o, i),
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
      if ((t == null && (t = []), !Gl(t))) throw new C(900, !1);
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
          gy(t, (a) => {
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
              : (t = this._addAfter(new Ri(n, r), i, o))),
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
        this._linkedRecords === null && (this._linkedRecords = new Hr()),
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
        this._unlinkedRecords === null && (this._unlinkedRecords = new Hr()),
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
  Ri = class {
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
  Pi = class {
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
  Hr = class {
    constructor() {
      this.map = new Map();
    }
    put(t) {
      let n = t.trackById,
        r = this.map.get(n);
      r || ((r = new Pi()), this.map.set(n, r)), r.add(t);
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
function Eu(e, t, n) {
  let r = e.previousIndex;
  if (r === null) return r;
  let o = 0;
  return n && r < n.length && (o = n[r]), r + t + o;
}
function wu() {
  return new Ss([new Oi()]);
}
var Ss = (() => {
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
        useFactory: (o) => t.create(r, o || wu()),
        deps: [[t, new th(), new eh()]],
      };
    }
    find(r) {
      let o = this.factories.find((i) => i.supports(r));
      if (o != null) return o;
      throw new C(901, !1);
    }
  };
  t.ɵprov = T({ token: t, providedIn: "root", factory: wu });
  let e = t;
  return e;
})();
var UM = $D(null, "core", []),
  zM = (() => {
    let t = class t {
      constructor(r) {}
    };
    (t.ɵfac = function (o) {
      return new (o || t)(F(yn));
    }),
      (t.ɵmod = Hi({ type: t })),
      (t.ɵinj = ji({}));
    let e = t;
    return e;
  })();
var GM = new M("");
function ZD(e) {
  return typeof e == "boolean" ? e : e != null && e !== "false";
}
function YD(e, t = NaN) {
  return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t;
}
function WM(e, t) {
  ut("NgSignals");
  let n = Ys(e);
  return t?.equal && (n[de].equal = t.equal), n;
}
function QD(e) {
  let t = b(null);
  try {
    return e();
  } finally {
    b(t);
  }
}
var KD = new M("", { providedIn: "root", factory: () => I(JD) }),
  JD = (() => {
    let t = class t {};
    t.ɵprov = T({ token: t, providedIn: "root", factory: () => new ki() });
    let e = t;
    return e;
  })(),
  ki = class {
    constructor() {
      (this.queuedEffectCount = 0),
        (this.queues = new Map()),
        (this.pendingTasks = I(hn)),
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
  Li = class {
    constructor(t, n, r, o, i, s) {
      (this.scheduler = t),
        (this.effectFn = n),
        (this.creationZone = r),
        (this.injector = i),
        (this.watcher = na(
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
        this.injector.get(tt, null, { optional: !0 })?.handleError(n);
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
function XD(e, t) {
  ut("NgSignals"), !t?.injector && Xu(XD);
  let n = t?.injector ?? I(De),
    r = t?.manualCleanup !== !0 ? n.get(Kr) : null,
    o = new Li(
      n.get(KD),
      e,
      typeof Zone > "u" ? null : Zone.current,
      r,
      n,
      t?.allowSignalWrites ?? !1,
    ),
    i = n.get(xs, null, { optional: !0 });
  return (
    !i || !(i._lView[m] & 8)
      ? o.watcher.notify()
      : (i._lView[sr] ??= []).push(o.watcher.notify),
    o
  );
}
function qM(e) {
  let t = Re(e);
  if (!t) return null;
  let n = new Pt(t);
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
var Cd = null;
function Ns() {
  return Cd;
}
function I0(e) {
  Cd ??= e;
}
var Dd = class {};
var Rs = new M(""),
  Ps = (() => {
    let t = class t {
      historyGo(r) {
        throw new Error("");
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = T({ token: t, factory: () => I(tv), providedIn: "platform" }));
    let e = t;
    return e;
  })(),
  E0 = new M(""),
  tv = (() => {
    let t = class t extends Ps {
      constructor() {
        super(),
          (this._doc = I(Rs)),
          (this._location = window.location),
          (this._history = window.history);
      }
      getBaseHrefFromDOM() {
        return Ns().getBaseHref(this._doc);
      }
      onPopState(r) {
        let o = Ns().getGlobalEventTarget(this._doc, "window");
        return (
          o.addEventListener("popstate", r, !1),
          () => o.removeEventListener("popstate", r)
        );
      }
      onHashChange(r) {
        let o = Ns().getGlobalEventTarget(this._doc, "window");
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
      (t.ɵprov = T({
        token: t,
        factory: () => new t(),
        providedIn: "platform",
      }));
    let e = t;
    return e;
  })();
function ks(e, t) {
  if (e.length == 0) return t;
  if (t.length == 0) return e;
  let n = 0;
  return (
    e.endsWith("/") && n++,
    t.startsWith("/") && n++,
    n == 2 ? e + t.substring(1) : n == 1 ? e + t : e + "/" + t
  );
}
function vd(e) {
  let t = e.match(/#|\?|$/),
    n = (t && t.index) || e.length,
    r = n - (e[n - 1] === "/" ? 1 : 0);
  return e.slice(0, r) + e.slice(n);
}
function Se(e) {
  return e && e[0] !== "?" ? "?" + e : e;
}
var ro = (() => {
    let t = class t {
      historyGo(r) {
        throw new Error("");
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = T({ token: t, factory: () => I(nv), providedIn: "root" }));
    let e = t;
    return e;
  })(),
  bd = new M(""),
  nv = (() => {
    let t = class t extends ro {
      constructor(r, o) {
        super(),
          (this._platformLocation = r),
          (this._removeListenerFns = []),
          (this._baseHref =
            o ??
            this._platformLocation.getBaseHrefFromDOM() ??
            I(Rs).location?.origin ??
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
        return ks(this._baseHref, r);
      }
      path(r = !1) {
        let o =
            this._platformLocation.pathname + Se(this._platformLocation.search),
          i = this._platformLocation.hash;
        return i && r ? `${o}${i}` : o;
      }
      pushState(r, o, i, s) {
        let a = this.prepareExternalUrl(i + Se(s));
        this._platformLocation.pushState(r, o, a);
      }
      replaceState(r, o, i, s) {
        let a = this.prepareExternalUrl(i + Se(s));
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
      return new (o || t)(F(Ps), F(bd, 8));
    }),
      (t.ɵprov = T({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })(),
  w0 = (() => {
    let t = class t extends ro {
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
        let o = ks(this._baseHref, r);
        return o.length > 0 ? "#" + o : o;
      }
      pushState(r, o, i, s) {
        let a = this.prepareExternalUrl(i + Se(s));
        a.length == 0 && (a = this._platformLocation.pathname),
          this._platformLocation.pushState(r, o, a);
      }
      replaceState(r, o, i, s) {
        let a = this.prepareExternalUrl(i + Se(s));
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
      return new (o || t)(F(Ps), F(bd, 8));
    }),
      (t.ɵprov = T({ token: t, factory: t.ɵfac }));
    let e = t;
    return e;
  })(),
  rv = (() => {
    let t = class t {
      constructor(r) {
        (this._subject = new ce()),
          (this._urlChangeListeners = []),
          (this._urlChangeSubscription = null),
          (this._locationStrategy = r);
        let o = this._locationStrategy.getBaseHref();
        (this._basePath = sv(vd(Id(o)))),
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
        return this.path() == this.normalize(r + Se(o));
      }
      normalize(r) {
        return t.stripTrailingSlash(iv(this._basePath, Id(r)));
      }
      prepareExternalUrl(r) {
        return (
          r && r[0] !== "/" && (r = "/" + r),
          this._locationStrategy.prepareExternalUrl(r)
        );
      }
      go(r, o = "", i = null) {
        this._locationStrategy.pushState(i, "", r, o),
          this._notifyUrlChangeListeners(this.prepareExternalUrl(r + Se(o)), i);
      }
      replaceState(r, o = "", i = null) {
        this._locationStrategy.replaceState(i, "", r, o),
          this._notifyUrlChangeListeners(this.prepareExternalUrl(r + Se(o)), i);
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
    (t.normalizeQueryParams = Se),
      (t.joinWithSlash = ks),
      (t.stripTrailingSlash = vd),
      (t.ɵfac = function (o) {
        return new (o || t)(F(ro));
      }),
      (t.ɵprov = T({ token: t, factory: () => ov(), providedIn: "root" }));
    let e = t;
    return e;
  })();
function ov() {
  return new rv(F(ro));
}
function iv(e, t) {
  if (!e || !t.startsWith(e)) return t;
  let n = t.substring(e.length);
  return n === "" || ["/", ";", "?", "#"].includes(n[0]) ? n : t;
}
function Id(e) {
  return e.replace(/\/index.html$/, "");
}
function sv(e) {
  if (new RegExp("^(https?:)?//").test(e)) {
    let [, n] = e.split(/\/\/[^\/]+/);
    return n;
  }
  return e;
}
function C0(e, t) {
  t = encodeURIComponent(t);
  for (let n of e.split(";")) {
    let r = n.indexOf("="),
      [o, i] = r == -1 ? [n, ""] : [n.slice(0, r), n.slice(r + 1)];
    if (o.trim() === t) return decodeURIComponent(i);
  }
  return null;
}
var As = class {
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
  b0 = (() => {
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
              new As(i.item, this._ngForOf, -1, -1),
              a === null ? void 0 : a,
            );
          else if (a == null) o.remove(s === null ? void 0 : s);
          else if (s !== null) {
            let u = o.get(s);
            o.move(u, a), Ed(u, i);
          }
        });
        for (let i = 0, s = o.length; i < s; i++) {
          let u = o.get(i).context;
          (u.index = i), (u.count = s), (u.ngForOf = this._ngForOf);
        }
        r.forEachIdentityChange((i) => {
          let s = o.get(i.currentIndex);
          Ed(s, i);
        });
      }
      static ngTemplateContextGuard(r, o) {
        return !0;
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(at(mn), at(Ot), at(Ss));
    }),
      (t.ɵdir = $u({
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
function Ed(e, t) {
  e.context.$implicit = t.item;
}
var _0 = (() => {
    let t = class t {};
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵmod = Hi({ type: t })),
      (t.ɵinj = ji({}));
    let e = t;
    return e;
  })(),
  av = "browser",
  uv = "server";
function cv(e) {
  return e === av;
}
function M0(e) {
  return e === uv;
}
var x0 = (() => {
    let t = class t {};
    t.ɵprov = T({
      token: t,
      providedIn: "root",
      factory: () => (cv(I(is)) ? new Os(I(Rs), window) : new Fs()),
    });
    let e = t;
    return e;
  })(),
  Os = class {
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
      let n = lv(this.document, t);
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
function lv(e, t) {
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
var Fs = class {
    setOffset(t) {}
    getScrollPosition() {
      return [0, 0];
    }
    scrollToPosition(t) {}
    scrollToAnchor(t) {}
    setHistoryScrollRestoration(t) {}
  },
  wd = class {};
var ct = (function (e) {
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
  })(ct || {}),
  N0 = "*";
function A0(e, t) {
  return { type: ct.Trigger, name: e, definitions: t, options: {} };
}
function O0(e, t = null) {
  return { type: ct.Animate, styles: t, timings: e };
}
function F0(e, t = null) {
  return { type: ct.Sequence, steps: e, options: t };
}
function R0(e) {
  return { type: ct.Style, styles: e, offset: null };
}
function P0(e, t, n) {
  return { type: ct.State, name: e, styles: t, options: n };
}
function k0(e, t, n = null) {
  return { type: ct.Transition, expr: e, animation: t, options: n };
}
var _d = class {
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
  Md = class {
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
  L0 = "!";
export {
  K as a,
  se as b,
  dv as c,
  P as d,
  $d as e,
  _ as f,
  vo as g,
  Io as h,
  Te as i,
  Wt as j,
  He as k,
  he as l,
  Kd as m,
  Jd as n,
  Xd as o,
  ze as p,
  Ee as q,
  uf as r,
  we as s,
  Yt as t,
  Yn as u,
  lf as v,
  df as w,
  Co as x,
  Df as y,
  Ge as z,
  vf as A,
  Na as B,
  If as C,
  Ef as D,
  Qt as E,
  bo as F,
  wf as G,
  Cf as H,
  Mf as I,
  Oa as J,
  _o as K,
  xf as L,
  Sf as M,
  Tf as N,
  Nf as O,
  Af as P,
  Of as Q,
  Ff as R,
  C as S,
  en as T,
  Mu as U,
  T as V,
  ji as W,
  oM as X,
  M as Y,
  w as Z,
  F as _,
  I as $,
  eh as aa,
  th as ba,
  nn as ca,
  iM as da,
  Hi as ea,
  $u as fa,
  sM as ga,
  Qu as ha,
  Pe as ia,
  aM as ja,
  rc as ka,
  uM as la,
  cM as ma,
  lM as na,
  dM as oa,
  vp as pa,
  De as qa,
  hn as ra,
  ce as sa,
  B as ta,
  tt as ua,
  $t as va,
  ri as wa,
  fM as xa,
  hM as ya,
  jp as za,
  is as Aa,
  pM as Ba,
  gM as Ca,
  mM as Da,
  yM as Ea,
  DM as Fa,
  xr as Ga,
  vM as Ha,
  at as Ia,
  IM as Ja,
  Ft as Ka,
  Rr as La,
  Vl as Ma,
  mn as Na,
  ut as Oa,
  bM as Pa,
  _M as Qa,
  sy as Ra,
  fy as Sa,
  wi as Ta,
  py as Ua,
  vy as Va,
  bt as Wa,
  wy as Xa,
  My as Ya,
  By as Za,
  Jl as _a,
  $y as $a,
  MM as ab,
  xM as bb,
  SM as cb,
  sd as db,
  ad as eb,
  eD as fb,
  TM as gb,
  nD as hb,
  rD as ib,
  aD as jb,
  uD as kb,
  NM as lb,
  AM as mb,
  OM as nb,
  FM as ob,
  RM as pb,
  PM as qb,
  kM as rb,
  LM as sb,
  hD as tb,
  jM as ub,
  VM as vb,
  BM as wb,
  ID as xb,
  ED as yb,
  $M as zb,
  wD as Ab,
  bs as Bb,
  bD as Cb,
  _D as Db,
  yn as Eb,
  HM as Fb,
  $D as Gb,
  xs as Hb,
  UM as Ib,
  zM as Jb,
  GM as Kb,
  ZD as Lb,
  YD as Mb,
  WM as Nb,
  QD as Ob,
  XD as Pb,
  qM as Qb,
  Ns as Rb,
  I0 as Sb,
  Dd as Tb,
  Rs as Ub,
  E0 as Vb,
  ro as Wb,
  nv as Xb,
  w0 as Yb,
  rv as Zb,
  C0 as _b,
  b0 as $b,
  _0 as ac,
  av as bc,
  cv as cc,
  M0 as dc,
  x0 as ec,
  wd as fc,
  ct as gc,
  N0 as hc,
  A0 as ic,
  O0 as jc,
  F0 as kc,
  R0 as lc,
  P0 as mc,
  k0 as nc,
  _d as oc,
  Md as pc,
  L0 as qc,
};
