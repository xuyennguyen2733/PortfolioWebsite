var Hl = Object.defineProperty,
  Ul = Object.defineProperties;
var zl = Object.getOwnPropertyDescriptors;
var dn = Object.getOwnPropertySymbols;
var Is = Object.prototype.hasOwnProperty,
  Es = Object.prototype.propertyIsEnumerable;
var vs = (e, t, n) =>
    t in e
      ? Hl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Q = (e, t) => {
    for (var n in (t ||= {})) Is.call(t, n) && vs(e, n, t[n]);
    if (dn) for (var n of dn(t)) Es.call(t, n) && vs(e, n, t[n]);
    return e;
  },
  ie = (e, t) => Ul(e, zl(t));
var iD = (e, t) => {
  var n = {};
  for (var r in e) Is.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && dn)
    for (var r of dn(e)) t.indexOf(r) < 0 && Es.call(e, r) && (n[r] = e[r]);
  return n;
};
function ws(e, t) {
  return Object.is(e, t);
}
var k = null,
  Lt = !1,
  fn = 1,
  de = Symbol("SIGNAL");
function C(e) {
  let t = k;
  return (k = e), t;
}
function Cs() {
  return k;
}
function Gl() {
  return Lt;
}
var ct = {
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
function Jr(e) {
  if (Lt) throw new Error("");
  if (k === null) return;
  k.consumerOnSignalRead(e);
  let t = k.nextProducerIndex++;
  if ((Dn(k), t < k.producerNode.length && k.producerNode[t] !== e && jt(k))) {
    let n = k.producerNode[t];
    yn(n, k.producerIndexOfThis[t]);
  }
  k.producerNode[t] !== e &&
    ((k.producerNode[t] = e),
    (k.producerIndexOfThis[t] = jt(k) ? Ss(e, k, t) : 0)),
    (k.producerLastReadVersion[t] = e.version);
}
function Wl() {
  fn++;
}
function bs(e) {
  if (!(jt(e) && !e.dirty) && !(!e.dirty && e.lastCleanEpoch === fn)) {
    if (!e.producerMustRecompute(e) && !gn(e)) {
      (e.dirty = !1), (e.lastCleanEpoch = fn);
      return;
    }
    e.producerRecomputeValue(e), (e.dirty = !1), (e.lastCleanEpoch = fn);
  }
}
function _s(e) {
  if (e.liveConsumerNode === void 0) return;
  let t = Lt;
  Lt = !0;
  try {
    for (let n of e.liveConsumerNode) n.dirty || xs(n);
  } finally {
    Lt = t;
  }
}
function Ms() {
  return k?.consumerAllowSignalWrites !== !1;
}
function xs(e) {
  (e.dirty = !0), _s(e), e.consumerMarkedDirty?.(e);
}
function Vt(e) {
  return e && (e.nextProducerIndex = 0), C(e);
}
function pn(e, t) {
  if (
    (C(t),
    !(
      !e ||
      e.producerNode === void 0 ||
      e.producerIndexOfThis === void 0 ||
      e.producerLastReadVersion === void 0
    ))
  ) {
    if (jt(e))
      for (let n = e.nextProducerIndex; n < e.producerNode.length; n++)
        yn(e.producerNode[n], e.producerIndexOfThis[n]);
    for (; e.producerNode.length > e.nextProducerIndex; )
      e.producerNode.pop(),
        e.producerLastReadVersion.pop(),
        e.producerIndexOfThis.pop();
  }
}
function gn(e) {
  Dn(e);
  for (let t = 0; t < e.producerNode.length; t++) {
    let n = e.producerNode[t],
      r = e.producerLastReadVersion[t];
    if (r !== n.version || (bs(n), r !== n.version)) return !0;
  }
  return !1;
}
function mn(e) {
  if ((Dn(e), jt(e)))
    for (let t = 0; t < e.producerNode.length; t++)
      yn(e.producerNode[t], e.producerIndexOfThis[t]);
  (e.producerNode.length =
    e.producerLastReadVersion.length =
    e.producerIndexOfThis.length =
      0),
    e.liveConsumerNode &&
      (e.liveConsumerNode.length = e.liveConsumerIndexOfThis.length = 0);
}
function Ss(e, t, n) {
  if ((Ts(e), e.liveConsumerNode.length === 0 && Ns(e)))
    for (let r = 0; r < e.producerNode.length; r++)
      e.producerIndexOfThis[r] = Ss(e.producerNode[r], e, r);
  return e.liveConsumerIndexOfThis.push(n), e.liveConsumerNode.push(t) - 1;
}
function yn(e, t) {
  if ((Ts(e), e.liveConsumerNode.length === 1 && Ns(e)))
    for (let r = 0; r < e.producerNode.length; r++)
      yn(e.producerNode[r], e.producerIndexOfThis[r]);
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
    Dn(o), (o.producerIndexOfThis[r] = t);
  }
}
function jt(e) {
  return e.consumerIsAlwaysLive || (e?.liveConsumerNode?.length ?? 0) > 0;
}
function Dn(e) {
  (e.producerNode ??= []),
    (e.producerIndexOfThis ??= []),
    (e.producerLastReadVersion ??= []);
}
function Ts(e) {
  (e.liveConsumerNode ??= []), (e.liveConsumerIndexOfThis ??= []);
}
function Ns(e) {
  return e.producerNode !== void 0;
}
function As(e) {
  let t = Object.create(ql);
  t.computation = e;
  let n = () => {
    if ((bs(t), Jr(t), t.value === hn)) throw t.error;
    return t.value;
  };
  return (n[de] = t), n;
}
var Yr = Symbol("UNSET"),
  Qr = Symbol("COMPUTING"),
  hn = Symbol("ERRORED"),
  ql = ie(Q({}, ct), {
    value: Yr,
    dirty: !0,
    error: null,
    equal: ws,
    producerMustRecompute(e) {
      return e.value === Yr || e.value === Qr;
    },
    producerRecomputeValue(e) {
      if (e.value === Qr) throw new Error("Detected cycle in computations.");
      let t = e.value;
      e.value = Qr;
      let n = Vt(e),
        r;
      try {
        r = e.computation();
      } catch (o) {
        (r = hn), (e.error = o);
      } finally {
        pn(e, n);
      }
      if (t !== Yr && t !== hn && r !== hn && e.equal(t, r)) {
        e.value = t;
        return;
      }
      (e.value = r), e.version++;
    },
  });
function Zl() {
  throw new Error();
}
var Os = Zl;
function Fs() {
  Os();
}
function Rs(e) {
  Os = e;
}
var Yl = null;
function Ps(e) {
  let t = Object.create(Ls);
  t.value = e;
  let n = () => (Jr(t), t.value);
  return (n[de] = t), n;
}
function Xr(e, t) {
  Ms() || Fs(), e.equal(e.value, t) || ((e.value = t), Ql(e));
}
function ks(e, t) {
  Ms() || Fs(), Xr(e, t(e.value));
}
var Ls = ie(Q({}, ct), { equal: ws, value: void 0 });
function Ql(e) {
  e.version++, Wl(), _s(e), Yl?.();
}
function js(e, t, n) {
  let r = Object.create(Kl);
  n && (r.consumerAllowSignalWrites = !0), (r.fn = e), (r.schedule = t);
  let o = (u) => {
    r.cleanupFn = u;
  };
  function i(u) {
    return u.fn === null && u.schedule === null;
  }
  function s(u) {
    i(u) ||
      (mn(u),
      u.cleanupFn(),
      (u.fn = null),
      (u.schedule = null),
      (u.cleanupFn = Kr));
  }
  let a = () => {
    if (r.fn === null) return;
    if (Gl())
      throw new Error(
        "Schedulers cannot synchronously execute watches while scheduling.",
      );
    if (((r.dirty = !1), r.hasRun && !gn(r))) return;
    r.hasRun = !0;
    let u = Vt(r);
    try {
      r.cleanupFn(), (r.cleanupFn = Kr), r.fn(o);
    } finally {
      pn(r, u);
    }
  };
  return (
    (r.ref = {
      notify: () => xs(r),
      run: a,
      cleanup: () => r.cleanupFn(),
      destroy: () => s(r),
      [de]: r,
    }),
    r.ref
  );
}
var Kr = () => {},
  Kl = ie(Q({}, ct), {
    consumerIsAlwaysLive: !0,
    consumerAllowSignalWrites: !1,
    consumerMarkedDirty: (e) => {
      e.schedule !== null && e.schedule(e.ref);
    },
    hasRun: !1,
    cleanupFn: Kr,
  });
function g(e) {
  return typeof e == "function";
}
function lt(e) {
  let n = e((r) => {
    Error.call(r), (r.stack = new Error().stack);
  });
  return (
    (n.prototype = Object.create(Error.prototype)),
    (n.prototype.constructor = n),
    n
  );
}
var vn = lt(
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
function je(e, t) {
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
          t = i instanceof vn ? i.errors : [i];
        }
      let { _finalizers: o } = this;
      if (o) {
        this._finalizers = null;
        for (let i of o)
          try {
            Vs(i);
          } catch (s) {
            (t = t ?? []),
              s instanceof vn ? (t = [...t, ...s.errors]) : t.push(s);
          }
      }
      if (t) throw new vn(t);
    }
  }
  add(t) {
    var n;
    if (t && t !== this)
      if (this.closed) Vs(t);
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
    n === t ? (this._parentage = null) : Array.isArray(n) && je(n, t);
  }
  remove(t) {
    let { _finalizers: n } = this;
    n && je(n, t), t instanceof e && t._removeParent(this);
  }
};
P.EMPTY = (() => {
  let e = new P();
  return (e.closed = !0), e;
})();
var eo = P.EMPTY;
function In(e) {
  return (
    e instanceof P ||
    (e && "closed" in e && g(e.remove) && g(e.add) && g(e.unsubscribe))
  );
}
function Vs(e) {
  g(e) ? e() : e.unsubscribe();
}
var se = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1,
};
var dt = {
  setTimeout(e, t, ...n) {
    let { delegate: r } = dt;
    return r?.setTimeout ? r.setTimeout(e, t, ...n) : setTimeout(e, t, ...n);
  },
  clearTimeout(e) {
    let { delegate: t } = dt;
    return (t?.clearTimeout || clearTimeout)(e);
  },
  delegate: void 0,
};
function En(e) {
  dt.setTimeout(() => {
    let { onUnhandledError: t } = se;
    if (t) t(e);
    else throw e;
  });
}
function Bt() {}
var Bs = to("C", void 0, void 0);
function $s(e) {
  return to("E", void 0, e);
}
function Hs(e) {
  return to("N", e, void 0);
}
function to(e, t, n) {
  return { kind: e, value: t, error: n };
}
var Ve = null;
function ft(e) {
  if (se.useDeprecatedSynchronousErrorHandling) {
    let t = !Ve;
    if ((t && (Ve = { errorThrown: !1, error: null }), e(), t)) {
      let { errorThrown: n, error: r } = Ve;
      if (((Ve = null), n)) throw r;
    }
  } else e();
}
function Us(e) {
  se.useDeprecatedSynchronousErrorHandling &&
    Ve &&
    ((Ve.errorThrown = !0), (Ve.error = e));
}
var Be = class extends P {
    constructor(t) {
      super(),
        (this.isStopped = !1),
        t
          ? ((this.destination = t), In(t) && t.add(this))
          : (this.destination = ed);
    }
    static create(t, n, r) {
      return new ht(t, n, r);
    }
    next(t) {
      this.isStopped ? ro(Hs(t), this) : this._next(t);
    }
    error(t) {
      this.isStopped
        ? ro($s(t), this)
        : ((this.isStopped = !0), this._error(t));
    }
    complete() {
      this.isStopped ? ro(Bs, this) : ((this.isStopped = !0), this._complete());
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
  Jl = Function.prototype.bind;
function no(e, t) {
  return Jl.call(e, t);
}
var oo = class {
    constructor(t) {
      this.partialObserver = t;
    }
    next(t) {
      let { partialObserver: n } = this;
      if (n.next)
        try {
          n.next(t);
        } catch (r) {
          wn(r);
        }
    }
    error(t) {
      let { partialObserver: n } = this;
      if (n.error)
        try {
          n.error(t);
        } catch (r) {
          wn(r);
        }
      else wn(t);
    }
    complete() {
      let { partialObserver: t } = this;
      if (t.complete)
        try {
          t.complete();
        } catch (n) {
          wn(n);
        }
    }
  },
  ht = class extends Be {
    constructor(t, n, r) {
      super();
      let o;
      if (g(t) || !t)
        o = { next: t ?? void 0, error: n ?? void 0, complete: r ?? void 0 };
      else {
        let i;
        this && se.useDeprecatedNextContext
          ? ((i = Object.create(t)),
            (i.unsubscribe = () => this.unsubscribe()),
            (o = {
              next: t.next && no(t.next, i),
              error: t.error && no(t.error, i),
              complete: t.complete && no(t.complete, i),
            }))
          : (o = t);
      }
      this.destination = new oo(o);
    }
  };
function wn(e) {
  se.useDeprecatedSynchronousErrorHandling ? Us(e) : En(e);
}
function Xl(e) {
  throw e;
}
function ro(e, t) {
  let { onStoppedNotification: n } = se;
  n && dt.setTimeout(() => n(e, t));
}
var ed = { closed: !0, next: Bt, error: Xl, complete: Bt };
var pt = (typeof Symbol == "function" && Symbol.observable) || "@@observable";
function H(e) {
  return e;
}
function td(...e) {
  return io(e);
}
function io(e) {
  return e.length === 0
    ? H
    : e.length === 1
      ? e[0]
      : function (n) {
          return e.reduce((r, o) => o(r), n);
        };
}
var b = (() => {
  class e {
    constructor(n) {
      n && (this._subscribe = n);
    }
    lift(n) {
      let r = new e();
      return (r.source = this), (r.operator = n), r;
    }
    subscribe(n, r, o) {
      let i = rd(n) ? n : new ht(n, r, o);
      return (
        ft(() => {
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
        (r = zs(r)),
        new r((o, i) => {
          let s = new ht({
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
    [pt]() {
      return this;
    }
    pipe(...n) {
      return io(n)(this);
    }
    toPromise(n) {
      return (
        (n = zs(n)),
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
function zs(e) {
  var t;
  return (t = e ?? se.Promise) !== null && t !== void 0 ? t : Promise;
}
function nd(e) {
  return e && g(e.next) && g(e.error) && g(e.complete);
}
function rd(e) {
  return (e && e instanceof Be) || (nd(e) && In(e));
}
function so(e) {
  return g(e?.lift);
}
function v(e) {
  return (t) => {
    if (so(t))
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
  return new ao(e, t, n, r, o);
}
var ao = class extends Be {
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
function uo() {
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
var co = class extends b {
  constructor(t, n) {
    super(),
      (this.source = t),
      (this.subjectFactory = n),
      (this._subject = null),
      (this._refCount = 0),
      (this._connection = null),
      so(t) && (this.lift = t.lift);
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
    return uo()(this);
  }
};
var Gs = lt(
  (e) =>
    function () {
      e(this),
        (this.name = "ObjectUnsubscribedError"),
        (this.message = "object unsubscribed");
    },
);
var Se = (() => {
    class e extends b {
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
        let r = new Cn(this, this);
        return (r.operator = n), r;
      }
      _throwIfClosed() {
        if (this.closed) throw new Gs();
      }
      next(n) {
        ft(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.currentObservers ||
              (this.currentObservers = Array.from(this.observers));
            for (let r of this.currentObservers) r.next(n);
          }
        });
      }
      error(n) {
        ft(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            (this.hasError = this.isStopped = !0), (this.thrownError = n);
            let { observers: r } = this;
            for (; r.length; ) r.shift().error(n);
          }
        });
      }
      complete() {
        ft(() => {
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
          ? eo
          : ((this.currentObservers = null),
            i.push(n),
            new P(() => {
              (this.currentObservers = null), je(i, n);
            }));
      }
      _checkFinalizedStatuses(n) {
        let { hasError: r, thrownError: o, isStopped: i } = this;
        r ? n.error(o) : i && n.complete();
      }
      asObservable() {
        let n = new b();
        return (n.source = this), n;
      }
    }
    return (e.create = (t, n) => new Cn(t, n)), e;
  })(),
  Cn = class extends Se {
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
        : eo;
    }
  };
var $t = class extends Se {
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
var lo = {
  now() {
    return (lo.delegate || Date).now();
  },
  delegate: void 0,
};
var bn = class extends P {
  constructor(t, n) {
    super();
  }
  schedule(t, n = 0) {
    return this;
  }
};
var Ht = {
  setInterval(e, t, ...n) {
    let { delegate: r } = Ht;
    return r?.setInterval ? r.setInterval(e, t, ...n) : setInterval(e, t, ...n);
  },
  clearInterval(e) {
    let { delegate: t } = Ht;
    return (t?.clearInterval || clearInterval)(e);
  },
  delegate: void 0,
};
var _n = class extends bn {
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
    return Ht.setInterval(t.flush.bind(t, this), r);
  }
  recycleAsyncId(t, n, r = 0) {
    if (r != null && this.delay === r && this.pending === !1) return n;
    n != null && Ht.clearInterval(n);
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
        je(r, this),
        t != null && (this.id = this.recycleAsyncId(n, t, null)),
        (this.delay = null),
        super.unsubscribe();
    }
  }
};
var gt = class e {
  constructor(t, n = e.now) {
    (this.schedulerActionCtor = t), (this.now = n);
  }
  schedule(t, n = 0, r) {
    return new this.schedulerActionCtor(this, t).schedule(r, n);
  }
};
gt.now = lo.now;
var Mn = class extends gt {
  constructor(t, n = gt.now) {
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
var Ut = new Mn(_n),
  Ws = Ut;
var $e = new b((e) => e.complete());
function xn(e) {
  return e && g(e.schedule);
}
function fo(e) {
  return e[e.length - 1];
}
function Sn(e) {
  return g(fo(e)) ? e.pop() : void 0;
}
function fe(e) {
  return xn(fo(e)) ? e.pop() : void 0;
}
function qs(e, t) {
  return typeof fo(e) == "number" ? e.pop() : t;
}
function Ys(e, t, n, r) {
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
function Zs(e) {
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
function He(e) {
  return this instanceof He ? ((this.v = e), this) : new He(e);
}
function Qs(e, t, n) {
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
        return new Promise(function (j, O) {
          i.push([f, S, j, O]) > 1 || u(f, S);
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
    f.value instanceof He
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
function Ks(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    n;
  return t
    ? t.call(e)
    : ((e = typeof Zs == "function" ? Zs(e) : e[Symbol.iterator]()),
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
var mt = (e) => e && typeof e.length == "number" && typeof e != "function";
function Tn(e) {
  return g(e?.then);
}
function Nn(e) {
  return g(e[pt]);
}
function An(e) {
  return Symbol.asyncIterator && g(e?.[Symbol.asyncIterator]);
}
function On(e) {
  return new TypeError(
    `You provided ${e !== null && typeof e == "object" ? "an invalid object" : `'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`,
  );
}
function od() {
  return typeof Symbol != "function" || !Symbol.iterator
    ? "@@iterator"
    : Symbol.iterator;
}
var Fn = od();
function Rn(e) {
  return g(e?.[Fn]);
}
function Pn(e) {
  return Qs(this, arguments, function* () {
    let n = e.getReader();
    try {
      for (;;) {
        let { value: r, done: o } = yield He(n.read());
        if (o) return yield He(void 0);
        yield yield He(r);
      }
    } finally {
      n.releaseLock();
    }
  });
}
function kn(e) {
  return g(e?.getReader);
}
function A(e) {
  if (e instanceof b) return e;
  if (e != null) {
    if (Nn(e)) return id(e);
    if (mt(e)) return sd(e);
    if (Tn(e)) return ad(e);
    if (An(e)) return Js(e);
    if (Rn(e)) return ud(e);
    if (kn(e)) return cd(e);
  }
  throw On(e);
}
function id(e) {
  return new b((t) => {
    let n = e[pt]();
    if (g(n.subscribe)) return n.subscribe(t);
    throw new TypeError(
      "Provided object does not correctly implement Symbol.observable",
    );
  });
}
function sd(e) {
  return new b((t) => {
    for (let n = 0; n < e.length && !t.closed; n++) t.next(e[n]);
    t.complete();
  });
}
function ad(e) {
  return new b((t) => {
    e.then(
      (n) => {
        t.closed || (t.next(n), t.complete());
      },
      (n) => t.error(n),
    ).then(null, En);
  });
}
function ud(e) {
  return new b((t) => {
    for (let n of e) if ((t.next(n), t.closed)) return;
    t.complete();
  });
}
function Js(e) {
  return new b((t) => {
    ld(e, t).catch((n) => t.error(n));
  });
}
function cd(e) {
  return Js(Pn(e));
}
function ld(e, t) {
  var n, r, o, i;
  return Ys(this, void 0, void 0, function* () {
    try {
      for (n = Ks(e); (r = yield n.next()), !r.done; ) {
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
function z(e, t, n, r = 0, o = !1) {
  let i = t.schedule(function () {
    n(), o ? e.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if ((e.add(i), !o)) return i;
}
function Ln(e, t = 0) {
  return v((n, r) => {
    n.subscribe(
      y(
        r,
        (o) => z(r, e, () => r.next(o), t),
        () => z(r, e, () => r.complete(), t),
        (o) => z(r, e, () => r.error(o), t),
      ),
    );
  });
}
function jn(e, t = 0) {
  return v((n, r) => {
    r.add(e.schedule(() => n.subscribe(r), t));
  });
}
function Xs(e, t) {
  return A(e).pipe(jn(t), Ln(t));
}
function ea(e, t) {
  return A(e).pipe(jn(t), Ln(t));
}
function ta(e, t) {
  return new b((n) => {
    let r = 0;
    return t.schedule(function () {
      r === e.length
        ? n.complete()
        : (n.next(e[r++]), n.closed || this.schedule());
    });
  });
}
function na(e, t) {
  return new b((n) => {
    let r;
    return (
      z(n, t, () => {
        (r = e[Fn]()),
          z(
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
function Vn(e, t) {
  if (!e) throw new Error("Iterable cannot be null");
  return new b((n) => {
    z(n, t, () => {
      let r = e[Symbol.asyncIterator]();
      z(
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
function ra(e, t) {
  return Vn(Pn(e), t);
}
function oa(e, t) {
  if (e != null) {
    if (Nn(e)) return Xs(e, t);
    if (mt(e)) return ta(e, t);
    if (Tn(e)) return ea(e, t);
    if (An(e)) return Vn(e, t);
    if (Rn(e)) return na(e, t);
    if (kn(e)) return ra(e, t);
  }
  throw On(e);
}
function he(e, t) {
  return t ? oa(e, t) : A(e);
}
function dd(...e) {
  let t = fe(e);
  return he(e, t);
}
function fd(e, t) {
  let n = g(e) ? e : () => e,
    r = (o) => o.error(n());
  return new b(t ? (o) => t.schedule(r, 0, o) : r);
}
function hd(e) {
  return !!e && (e instanceof b || (g(e.lift) && g(e.subscribe)));
}
var Ue = lt(
  (e) =>
    function () {
      e(this),
        (this.name = "EmptyError"),
        (this.message = "no elements in sequence");
    },
);
function ia(e) {
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
var { isArray: pd } = Array;
function gd(e, t) {
  return pd(t) ? e(...t) : e(t);
}
function yt(e) {
  return Ee((t) => gd(e, t));
}
var { isArray: md } = Array,
  { getPrototypeOf: yd, prototype: Dd, keys: vd } = Object;
function Bn(e) {
  if (e.length === 1) {
    let t = e[0];
    if (md(t)) return { args: t, keys: null };
    if (Id(t)) {
      let n = vd(t);
      return { args: n.map((r) => t[r]), keys: n };
    }
  }
  return { args: e, keys: null };
}
function Id(e) {
  return e && typeof e == "object" && yd(e) === Dd;
}
function $n(e, t) {
  return e.reduce((n, r, o) => ((n[r] = t[o]), n), {});
}
function Ed(...e) {
  let t = fe(e),
    n = Sn(e),
    { args: r, keys: o } = Bn(e);
  if (r.length === 0) return he([], t);
  let i = new b(wd(r, t, o ? (s) => $n(o, s) : H));
  return n ? i.pipe(yt(n)) : i;
}
function wd(e, t, n = H) {
  return (r) => {
    sa(
      t,
      () => {
        let { length: o } = e,
          i = new Array(o),
          s = o,
          a = o;
        for (let u = 0; u < o; u++)
          sa(
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
function sa(e, t, n) {
  e ? z(n, e, t) : t();
}
function aa(e, t, n, r, o, i, s, a) {
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
      let j = !1;
      A(n(S, l++)).subscribe(
        y(
          t,
          (O) => {
            o?.(O), i ? f(O) : t.next(O);
          },
          () => {
            j = !0;
          },
          void 0,
          () => {
            if (j)
              try {
                for (c--; u.length && c < r; ) {
                  let O = u.shift();
                  s ? z(t, s, () => p(O)) : p(O);
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
    : (typeof t == "number" && (n = t), v((r, o) => aa(r, o, e, n)));
}
function zt(e = 1 / 0) {
  return we(H, e);
}
function ua() {
  return zt(1);
}
function Hn(...e) {
  return ua()(he(e, fe(e)));
}
function Cd(e) {
  return new b((t) => {
    A(e()).subscribe(t);
  });
}
function bd(...e) {
  let t = Sn(e),
    { args: n, keys: r } = Bn(e),
    o = new b((i) => {
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
              (!u || !d) && (c || i.next(r ? $n(r, a) : a), i.complete());
            },
          ),
        );
      }
    });
  return t ? o.pipe(yt(t)) : o;
}
var _d = ["addListener", "removeListener"],
  Md = ["addEventListener", "removeEventListener"],
  xd = ["on", "off"];
function ho(e, t, n, r) {
  if ((g(n) && ((r = n), (n = void 0)), r)) return ho(e, t, n).pipe(yt(r));
  let [o, i] = Nd(e)
    ? Md.map((s) => (a) => e[s](t, a, n))
    : Sd(e)
      ? _d.map(ca(e, t))
      : Td(e)
        ? xd.map(ca(e, t))
        : [];
  if (!o && mt(e)) return we((s) => ho(s, t, n))(A(e));
  if (!o) throw new TypeError("Invalid event target");
  return new b((s) => {
    let a = (...u) => s.next(1 < u.length ? u : u[0]);
    return o(a), () => i(a);
  });
}
function ca(e, t) {
  return (n) => (r) => e[n](t, r);
}
function Sd(e) {
  return g(e.addListener) && g(e.removeListener);
}
function Td(e) {
  return g(e.on) && g(e.off);
}
function Nd(e) {
  return g(e.addEventListener) && g(e.removeEventListener);
}
function la(e = 0, t, n = Ws) {
  let r = -1;
  return (
    t != null && (xn(t) ? (n = t) : (r = t)),
    new b((o) => {
      let i = ia(e) ? +e - n.now() : e;
      i < 0 && (i = 0);
      let s = 0;
      return n.schedule(function () {
        o.closed ||
          (o.next(s++), 0 <= r ? this.schedule(void 0, r) : o.complete());
      }, i);
    })
  );
}
function Ad(...e) {
  let t = fe(e),
    n = qs(e, 1 / 0),
    r = e;
  return r.length ? (r.length === 1 ? A(r[0]) : zt(n)(he(r, t))) : $e;
}
function ze(e, t) {
  return v((n, r) => {
    let o = 0;
    n.subscribe(y(r, (i) => e.call(t, i, o++) && r.next(i)));
  });
}
function da(e) {
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
function Od(e, t = Ut) {
  return da(() => la(e, t));
}
function fa(e) {
  return v((t, n) => {
    let r = null,
      o = !1,
      i;
    (r = t.subscribe(
      y(n, void 0, void 0, (s) => {
        (i = A(e(s, fa(e)(t)))),
          r ? (r.unsubscribe(), (r = null), i.subscribe(n)) : (o = !0);
      }),
    )),
      o && (r.unsubscribe(), (r = null), i.subscribe(n));
  });
}
function ha(e, t, n, r, o) {
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
function Fd(e, t) {
  return g(t) ? we(e, t, 1) : we(e, 1);
}
function Rd(e, t = Ut) {
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
function Gt(e) {
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
function po(e) {
  return e <= 0
    ? () => $e
    : v((t, n) => {
        let r = 0;
        t.subscribe(
          y(n, (o) => {
            ++r <= e && (n.next(o), e <= r && n.complete());
          }),
        );
      });
}
function Pd(e) {
  return Ee(() => e);
}
function kd(e, t = H) {
  return (
    (e = e ?? Ld),
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
function Ld(e, t) {
  return e === t;
}
function Un(e = jd) {
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
function jd() {
  return new Ue();
}
function Vd(e) {
  return v((t, n) => {
    try {
      t.subscribe(n);
    } finally {
      n.add(e);
    }
  });
}
function pa(e, t) {
  let n = arguments.length >= 2;
  return (r) =>
    r.pipe(
      e ? ze((o, i) => e(o, i, r)) : H,
      po(1),
      n ? Gt(t) : Un(() => new Ue()),
    );
}
function go(e) {
  return e <= 0
    ? () => $e
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
function Bd(e, t) {
  let n = arguments.length >= 2;
  return (r) =>
    r.pipe(
      e ? ze((o, i) => e(o, i, r)) : H,
      go(1),
      n ? Gt(t) : Un(() => new Ue()),
    );
}
function $d(e, t) {
  return v(ha(e, t, arguments.length >= 2, !0));
}
function Hd(e) {
  return ze((t, n) => e <= n);
}
function Ud(...e) {
  let t = fe(e);
  return v((n, r) => {
    (t ? Hn(e, n, t) : Hn(e, n)).subscribe(r);
  });
}
function zd(e, t) {
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
function Gd(e) {
  return v((t, n) => {
    A(e).subscribe(y(n, () => n.complete(), Bt)), !n.closed && t.subscribe(n);
  });
}
function Wd(e, t, n) {
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
    : H;
}
var Qa = "https://g.co/ng/security#xss",
  _ = class extends Error {
    constructor(t, n) {
      super(Ka(t, n)), (this.code = t);
    }
  };
function Ka(e, t) {
  return `${`NG0${Math.abs(e)}`}${t ? ": " + t : ""}`;
}
function rn(e) {
  return { toString: e }.toString();
}
var zn = "__parameters__";
function qd(e) {
  return function (...n) {
    if (e) {
      let r = e(...n);
      for (let o in r) this[o] = r[o];
    }
  };
}
function Ja(e, t, n) {
  return rn(() => {
    let r = qd(t);
    function o(...i) {
      if (this instanceof o) return r.apply(this, i), this;
      let s = new o(...i);
      return (a.annotation = s), a;
      function a(u, c, l) {
        let d = u.hasOwnProperty(zn)
          ? u[zn]
          : Object.defineProperty(u, zn, { value: [] })[zn];
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
var So = globalThis;
function T(e) {
  for (let t in e) if (e[t] === T) return t;
  throw Error("Could not find renamed property on target object.");
}
function Zd(e, t) {
  for (let n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
}
function W(e) {
  if (typeof e == "string") return e;
  if (Array.isArray(e)) return "[" + e.map(W).join(", ") + "]";
  if (e == null) return "" + e;
  if (e.overriddenName) return `${e.overriddenName}`;
  if (e.name) return `${e.name}`;
  let t = e.toString();
  if (t == null) return "" + t;
  let n = t.indexOf(`
`);
  return n === -1 ? t : t.substring(0, n);
}
function To(e, t) {
  return e == null || e === ""
    ? t === null
      ? ""
      : t
    : t == null || t === ""
      ? e
      : e + " " + t;
}
var Yd = T({ __forward_ref__: T });
function Xa(e) {
  return (
    (e.__forward_ref__ = Xa),
    (e.toString = function () {
      return W(this());
    }),
    e
  );
}
function U(e) {
  return eu(e) ? e() : e;
}
function eu(e) {
  return (
    typeof e == "function" && e.hasOwnProperty(Yd) && e.__forward_ref__ === Xa
  );
}
function N(e) {
  return {
    token: e.token,
    providedIn: e.providedIn || null,
    factory: e.factory,
    value: void 0,
  };
}
function wi(e) {
  return { providers: e.providers || [], imports: e.imports || [] };
}
function Fr(e) {
  return ga(e, tu) || ga(e, nu);
}
function Jb(e) {
  return Fr(e) !== null;
}
function ga(e, t) {
  return e.hasOwnProperty(t) ? e[t] : null;
}
function Qd(e) {
  let t = e && (e[tu] || e[nu]);
  return t || null;
}
function ma(e) {
  return e && (e.hasOwnProperty(ya) || e.hasOwnProperty(Kd)) ? e[ya] : null;
}
var tu = T({ ɵprov: T }),
  ya = T({ ɵinj: T }),
  nu = T({ ngInjectableDef: T }),
  Kd = T({ ngInjectorDef: T }),
  M = class {
    constructor(t, n) {
      (this._desc = t),
        (this.ngMetadataName = "InjectionToken"),
        (this.ɵprov = void 0),
        typeof n == "number"
          ? (this.__NG_ELEMENT_ID__ = n)
          : n !== void 0 &&
            (this.ɵprov = N({
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
function ru(e) {
  return e && !!e.ɵproviders;
}
var Jd = T({ ɵcmp: T }),
  Xd = T({ ɵdir: T }),
  ef = T({ ɵpipe: T }),
  tf = T({ ɵmod: T }),
  nr = T({ ɵfac: T }),
  qt = T({ __NG_ELEMENT_ID__: T }),
  Da = T({ __NG_ENV_ID__: T });
function Rr(e) {
  return typeof e == "string" ? e : e == null ? "" : String(e);
}
function nf(e) {
  return typeof e == "function"
    ? e.name || e.toString()
    : typeof e == "object" && e != null && typeof e.type == "function"
      ? e.type.name || e.type.toString()
      : Rr(e);
}
function rf(e, t) {
  let n = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
  throw new _(-200, e);
}
function Ci(e, t) {
  throw new _(-201, !1);
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
  No;
function ou() {
  return No;
}
function J(e) {
  let t = No;
  return (No = e), t;
}
function iu(e, t, n) {
  let r = Fr(e);
  if (r && r.providedIn == "root")
    return r.value === void 0 ? (r.value = r.factory()) : r.value;
  if (n & w.Optional) return null;
  if (t !== void 0) return t;
  Ci(e, "Injector");
}
var of = {},
  Yt = of,
  Ao = "__NG_DI_FLAG__",
  rr = "ngTempTokenPath",
  sf = "ngTokenPath",
  af = /\n/gm,
  uf = "\u0275",
  va = "__source",
  wt;
function cf() {
  return wt;
}
function Te(e) {
  let t = wt;
  return (wt = e), t;
}
function lf(e, t = w.Default) {
  if (wt === void 0) throw new _(-203, !1);
  return wt === null
    ? iu(e, void 0, t)
    : wt.get(e, t & w.Optional ? null : void 0, t);
}
function F(e, t = w.Default) {
  return (ou() || lf)(U(e), t);
}
function I(e, t = w.Default) {
  return F(e, Pr(t));
}
function Pr(e) {
  return typeof e > "u" || typeof e == "number"
    ? e
    : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4);
}
function Oo(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = U(e[n]);
    if (Array.isArray(r)) {
      if (r.length === 0) throw new _(900, !1);
      let o,
        i = w.Default;
      for (let s = 0; s < r.length; s++) {
        let a = r[s],
          u = df(a);
        typeof u == "number" ? (u === -1 ? (o = a.token) : (i |= u)) : (o = a);
      }
      t.push(F(o, i));
    } else t.push(F(r));
  }
  return t;
}
function su(e, t) {
  return (e[Ao] = t), (e.prototype[Ao] = t), e;
}
function df(e) {
  return e[Ao];
}
function ff(e, t, n, r) {
  let o = e[rr];
  throw (
    (t[va] && o.unshift(t[va]),
    (e.message = hf(
      `
` + e.message,
      o,
      n,
      r,
    )),
    (e[sf] = o),
    (e[rr] = null),
    e)
  );
}
function hf(e, t, n, r = null) {
  e =
    e &&
    e.charAt(0) ===
      `
` &&
    e.charAt(1) == uf
      ? e.slice(2)
      : e;
  let o = W(t);
  if (Array.isArray(t)) o = t.map(W).join(" -> ");
  else if (typeof t == "object") {
    let i = [];
    for (let s in t)
      if (t.hasOwnProperty(s)) {
        let a = t[s];
        i.push(s + ":" + (typeof a == "string" ? JSON.stringify(a) : W(a)));
      }
    o = `{${i.join(", ")}}`;
  }
  return `${n}${r ? "(" + r + ")" : ""}[${o}]: ${e.replace(
    af,
    `
  `,
  )}`;
}
var Xb = su(Ja("Optional"), 8);
var e_ = su(Ja("SkipSelf"), 4);
function bt(e, t) {
  let n = e.hasOwnProperty(nr);
  return n ? e[nr] : null;
}
function pf(e, t, n) {
  if (e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) {
    let o = e[r],
      i = t[r];
    if ((n && ((o = n(o)), (i = n(i))), i !== o)) return !1;
  }
  return !0;
}
function gf(e) {
  return e.flat(Number.POSITIVE_INFINITY);
}
function bi(e, t) {
  e.forEach((n) => (Array.isArray(n) ? bi(n, t) : t(n)));
}
function au(e, t, n) {
  t >= e.length ? e.push(n) : e.splice(t, 0, n);
}
function or(e, t) {
  return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
}
function mf(e, t) {
  let n = [];
  for (let r = 0; r < e; r++) n.push(t);
  return n;
}
function yf(e, t, n, r) {
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
function _i(e, t, n) {
  let r = on(e, t);
  return r >= 0 ? (e[r | 1] = n) : ((r = ~r), yf(e, r, t, n)), r;
}
function mo(e, t) {
  let n = on(e, t);
  if (n >= 0) return e[n | 1];
}
function on(e, t) {
  return Df(e, t, 1);
}
function Df(e, t, n) {
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
var _t = {},
  G = [],
  ir = new M(""),
  uu = new M("", -1),
  cu = new M(""),
  sr = class {
    get(t, n = Yt) {
      if (n === Yt) {
        let r = new Error(`NullInjectorError: No provider for ${W(t)}!`);
        throw ((r.name = "NullInjectorError"), r);
      }
      return n;
    }
  },
  lu = (function (e) {
    return (e[(e.OnPush = 0)] = "OnPush"), (e[(e.Default = 1)] = "Default"), e;
  })(lu || {}),
  Qt = (function (e) {
    return (
      (e[(e.Emulated = 0)] = "Emulated"),
      (e[(e.None = 2)] = "None"),
      (e[(e.ShadowDom = 3)] = "ShadowDom"),
      e
    );
  })(Qt || {}),
  Oe = (function (e) {
    return (
      (e[(e.None = 0)] = "None"),
      (e[(e.SignalBased = 1)] = "SignalBased"),
      (e[(e.HasDecoratorInputTransform = 2)] = "HasDecoratorInputTransform"),
      e
    );
  })(Oe || {});
function vf(e, t, n) {
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
function Fo(e, t, n) {
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
      If(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), r++;
    }
  }
  return r;
}
function du(e) {
  return e === 3 || e === 4 || e === 6;
}
function If(e) {
  return e.charCodeAt(0) === 64;
}
function Kt(e, t) {
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
              ? Ia(e, n, o, null, t[++r])
              : Ia(e, n, o, null, null));
      }
    }
  return e;
}
function Ia(e, t, n, r, o) {
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
var fu = "ng-template";
function Ef(e, t, n, r) {
  let o = 0;
  if (r) {
    for (; o < t.length && typeof t[o] == "string"; o += 2)
      if (t[o] === "class" && vf(t[o + 1].toLowerCase(), n, 0) !== -1)
        return !0;
  } else if (Mi(e)) return !1;
  if (((o = t.indexOf(1, o)), o > -1)) {
    let i;
    for (; ++o < t.length && typeof (i = t[o]) == "string"; )
      if (i.toLowerCase() === n) return !0;
  }
  return !1;
}
function Mi(e) {
  return e.type === 4 && e.value !== fu;
}
function wf(e, t, n) {
  let r = e.type === 4 && !n ? fu : e.value;
  return t === r;
}
function Cf(e, t, n) {
  let r = 4,
    o = e.attrs,
    i = o !== null ? Mf(o) : 0,
    s = !1;
  for (let a = 0; a < t.length; a++) {
    let u = t[a];
    if (typeof u == "number") {
      if (!s && !ae(r) && !ae(u)) return !1;
      if (s && ae(u)) continue;
      (s = !1), (r = u | (r & 1));
      continue;
    }
    if (!s)
      if (r & 4) {
        if (
          ((r = 2 | (r & 1)),
          (u !== "" && !wf(e, u, n)) || (u === "" && t.length === 1))
        ) {
          if (ae(r)) return !1;
          s = !0;
        }
      } else if (r & 8) {
        if (o === null || !Ef(e, o, u, n)) {
          if (ae(r)) return !1;
          s = !0;
        }
      } else {
        let c = t[++a],
          l = bf(u, o, Mi(e), n);
        if (l === -1) {
          if (ae(r)) return !1;
          s = !0;
          continue;
        }
        if (c !== "") {
          let d;
          if (
            (l > i ? (d = "") : (d = o[l + 1].toLowerCase()), r & 2 && c !== d)
          ) {
            if (ae(r)) return !1;
            s = !0;
          }
        }
      }
  }
  return ae(r) || s;
}
function ae(e) {
  return (e & 1) === 0;
}
function bf(e, t, n, r) {
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
  } else return xf(t, e);
}
function hu(e, t, n = !1) {
  for (let r = 0; r < t.length; r++) if (Cf(e, t[r], n)) return !0;
  return !1;
}
function _f(e) {
  let t = e.attrs;
  if (t != null) {
    let n = t.indexOf(5);
    if (!(n & 1)) return t[n + 1];
  }
  return null;
}
function Mf(e) {
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (du(n)) return t;
  }
  return e.length;
}
function xf(e, t) {
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
function Sf(e, t) {
  e: for (let n = 0; n < t.length; n++) {
    let r = t[n];
    if (e.length === r.length) {
      for (let o = 0; o < e.length; o++) if (e[o] !== r[o]) continue e;
      return !0;
    }
  }
  return !1;
}
function Ea(e, t) {
  return e ? ":not(" + t.trim() + ")" : t;
}
function Tf(e) {
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
      o !== "" && !ae(s) && ((t += Ea(i, o)), (o = "")),
        (r = s),
        (i = i || !ae(r));
    n++;
  }
  return o !== "" && (t += Ea(i, o)), t;
}
function Nf(e) {
  return e.map(Tf).join(",");
}
function Af(e) {
  let t = [],
    n = [],
    r = 1,
    o = 2;
  for (; r < e.length; ) {
    let i = e[r];
    if (typeof i == "string")
      o === 2 ? i !== "" && t.push(i, e[++r]) : o === 8 && n.push(i);
    else {
      if (!ae(o)) break;
      o = i;
    }
    r++;
  }
  return { attrs: t, classes: n };
}
function t_(e) {
  return rn(() => {
    let t = yu(e),
      n = ie(Q({}, t), {
        decls: e.decls,
        vars: e.vars,
        template: e.template,
        consts: e.consts || null,
        ngContentSelectors: e.ngContentSelectors,
        onPush: e.changeDetection === lu.OnPush,
        directiveDefs: null,
        pipeDefs: null,
        dependencies: (t.standalone && e.dependencies) || null,
        getStandaloneInjector: null,
        signals: e.signals ?? !1,
        data: e.data || {},
        encapsulation: e.encapsulation || Qt.Emulated,
        styles: e.styles || G,
        _: null,
        schemas: e.schemas || null,
        tView: null,
        id: "",
      });
    Du(n);
    let r = e.dependencies;
    return (
      (n.directiveDefs = Ca(r, !1)), (n.pipeDefs = Ca(r, !0)), (n.id = kf(n)), n
    );
  });
}
function Of(e) {
  return Fe(e) || pu(e);
}
function Ff(e) {
  return e !== null;
}
function xi(e) {
  return rn(() => ({
    type: e.type,
    bootstrap: e.bootstrap || G,
    declarations: e.declarations || G,
    imports: e.imports || G,
    exports: e.exports || G,
    transitiveCompileScopes: null,
    schemas: e.schemas || null,
    id: e.id || null,
  }));
}
function wa(e, t) {
  if (e == null) return _t;
  let n = {};
  for (let r in e)
    if (e.hasOwnProperty(r)) {
      let o = e[r],
        i,
        s,
        a = Oe.None;
      Array.isArray(o)
        ? ((a = o[0]), (i = o[1]), (s = o[2] ?? i))
        : ((i = o), (s = o)),
        t ? ((n[i] = a !== Oe.None ? [r, a] : r), (t[i] = s)) : (n[i] = r);
    }
  return n;
}
function Rf(e) {
  return rn(() => {
    let t = yu(e);
    return Du(t), t;
  });
}
function Fe(e) {
  return e[Jd] || null;
}
function pu(e) {
  return e[Xd] || null;
}
function gu(e) {
  return e[ef] || null;
}
function Pf(e) {
  let t = Fe(e) || pu(e) || gu(e);
  return t !== null ? t.standalone : !1;
}
function mu(e, t) {
  let n = e[tf] || null;
  if (!n && t === !0)
    throw new Error(`Type ${W(e)} does not have '\u0275mod' property.`);
  return n;
}
function yu(e) {
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
    inputConfig: e.inputs || _t,
    exportAs: e.exportAs || null,
    standalone: e.standalone === !0,
    signals: e.signals === !0,
    selectors: e.selectors || G,
    viewQuery: e.viewQuery || null,
    features: e.features || null,
    setInput: null,
    findHostDirectiveDefs: null,
    hostDirectives: null,
    inputs: wa(e.inputs, t),
    outputs: wa(e.outputs),
    debugInfo: null,
  };
}
function Du(e) {
  e.features?.forEach((t) => t(e));
}
function Ca(e, t) {
  if (!e) return null;
  let n = t ? gu : Of;
  return () => (typeof e == "function" ? e() : e).map((r) => n(r)).filter(Ff);
}
function kf(e) {
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
function n_(e) {
  return { ɵproviders: e };
}
function Lf(...e) {
  return { ɵproviders: vu(!0, e), ɵfromNgModule: !0 };
}
function vu(e, ...t) {
  let n = [],
    r = new Set(),
    o,
    i = (s) => {
      n.push(s);
    };
  return (
    bi(t, (s) => {
      let a = s;
      Ro(a, i, [], r) && ((o ||= []), o.push(a));
    }),
    o !== void 0 && Iu(o, i),
    n
  );
}
function Iu(e, t) {
  for (let n = 0; n < e.length; n++) {
    let { ngModule: r, providers: o } = e[n];
    Si(o, (i) => {
      t(i, r);
    });
  }
}
function Ro(e, t, n, r) {
  if (((e = U(e)), !e)) return !1;
  let o = null,
    i = ma(e),
    s = !i && Fe(e);
  if (!i && !s) {
    let u = e.ngModule;
    if (((i = ma(u)), i)) o = u;
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
      for (let c of u) Ro(c, t, n, r);
    }
  } else if (i) {
    if (i.imports != null && !a) {
      r.add(o);
      let c;
      try {
        bi(i.imports, (l) => {
          Ro(l, t, n, r) && ((c ||= []), c.push(l));
        });
      } finally {
      }
      c !== void 0 && Iu(c, t);
    }
    if (!a) {
      let c = bt(o) || (() => new o());
      t({ provide: o, useFactory: c, deps: G }, o),
        t({ provide: cu, useValue: o, multi: !0 }, o),
        t({ provide: ir, useValue: () => F(o), multi: !0 }, o);
    }
    let u = i.providers;
    if (u != null && !a) {
      let c = e;
      Si(u, (l) => {
        t(l, c);
      });
    }
  } else return !1;
  return o !== e && e.providers !== void 0;
}
function Si(e, t) {
  for (let n of e)
    ru(n) && (n = n.ɵproviders), Array.isArray(n) ? Si(n, t) : t(n);
}
var jf = T({ provide: String, useValue: T });
function Eu(e) {
  return e !== null && typeof e == "object" && jf in e;
}
function Vf(e) {
  return !!(e && e.useExisting);
}
function Bf(e) {
  return !!(e && e.useFactory);
}
function Mt(e) {
  return typeof e == "function";
}
function $f(e) {
  return !!e.useClass;
}
var wu = new M(""),
  Qn = {},
  Hf = {},
  yo;
function Ti() {
  return yo === void 0 && (yo = new sr()), yo;
}
var Re = class {},
  Jt = class extends Re {
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
        ko(t, (s) => this.processProvider(s)),
        this.records.set(uu, Dt(void 0, this)),
        o.has("environment") && this.records.set(Re, Dt(void 0, this));
      let i = this.records.get(wu);
      i != null && typeof i.value == "string" && this.scopes.add(i.value),
        (this.injectorDefTypes = new Set(this.get(cu, G, w.Self)));
    }
    destroy() {
      this.assertNotDestroyed(), (this._destroyed = !0);
      let t = C(null);
      try {
        for (let r of this._ngOnDestroyHooks) r.ngOnDestroy();
        let n = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let r of n) r();
      } finally {
        this.records.clear(),
          this._ngOnDestroyHooks.clear(),
          this.injectorDefTypes.clear(),
          C(t);
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
      let n = Te(this),
        r = J(void 0),
        o;
      try {
        return t();
      } finally {
        Te(n), J(r);
      }
    }
    get(t, n = Yt, r = w.Default) {
      if ((this.assertNotDestroyed(), t.hasOwnProperty(Da))) return t[Da](this);
      r = Pr(r);
      let o,
        i = Te(this),
        s = J(void 0);
      try {
        if (!(r & w.SkipSelf)) {
          let u = this.records.get(t);
          if (u === void 0) {
            let c = qf(t) && Fr(t);
            c && this.injectableDefInScope(c)
              ? (u = Dt(Po(t), Qn))
              : (u = null),
              this.records.set(t, u);
          }
          if (u != null) return this.hydrate(t, u);
        }
        let a = r & w.Self ? Ti() : this.parent;
        return (n = r & w.Optional && n === Yt ? null : n), a.get(t, n);
      } catch (a) {
        if (a.name === "NullInjectorError") {
          if (((a[rr] = a[rr] || []).unshift(W(t)), i)) throw a;
          return ff(a, t, "R3InjectorError", this.source);
        } else throw a;
      } finally {
        J(s), Te(i);
      }
    }
    resolveInjectorInitializers() {
      let t = C(null),
        n = Te(this),
        r = J(void 0),
        o;
      try {
        let i = this.get(ir, G, w.Self);
        for (let s of i) s();
      } finally {
        Te(n), J(r), C(t);
      }
    }
    toString() {
      let t = [],
        n = this.records;
      for (let r of n.keys()) t.push(W(r));
      return `R3Injector[${t.join(", ")}]`;
    }
    assertNotDestroyed() {
      if (this._destroyed) throw new _(205, !1);
    }
    processProvider(t) {
      t = U(t);
      let n = Mt(t) ? t : U(t && t.provide),
        r = zf(t);
      if (!Mt(t) && t.multi === !0) {
        let o = this.records.get(n);
        o ||
          ((o = Dt(void 0, Qn, !0)),
          (o.factory = () => Oo(o.multi)),
          this.records.set(n, o)),
          (n = t),
          o.multi.push(t);
      }
      this.records.set(n, r);
    }
    hydrate(t, n) {
      let r = C(null);
      try {
        return (
          n.value === Qn && ((n.value = Hf), (n.value = n.factory())),
          typeof n.value == "object" &&
            n.value &&
            Wf(n.value) &&
            this._ngOnDestroyHooks.add(n.value),
          n.value
        );
      } finally {
        C(r);
      }
    }
    injectableDefInScope(t) {
      if (!t.providedIn) return !1;
      let n = U(t.providedIn);
      return typeof n == "string"
        ? n === "any" || this.scopes.has(n)
        : this.injectorDefTypes.has(n);
    }
    removeOnDestroy(t) {
      let n = this._onDestroyHooks.indexOf(t);
      n !== -1 && this._onDestroyHooks.splice(n, 1);
    }
  };
function Po(e) {
  let t = Fr(e),
    n = t !== null ? t.factory : bt(e);
  if (n !== null) return n;
  if (e instanceof M) throw new _(204, !1);
  if (e instanceof Function) return Uf(e);
  throw new _(204, !1);
}
function Uf(e) {
  if (e.length > 0) throw new _(204, !1);
  let n = Qd(e);
  return n !== null ? () => n.factory(e) : () => new e();
}
function zf(e) {
  if (Eu(e)) return Dt(void 0, e.useValue);
  {
    let t = Cu(e);
    return Dt(t, Qn);
  }
}
function Cu(e, t, n) {
  let r;
  if (Mt(e)) {
    let o = U(e);
    return bt(o) || Po(o);
  } else if (Eu(e)) r = () => U(e.useValue);
  else if (Bf(e)) r = () => e.useFactory(...Oo(e.deps || []));
  else if (Vf(e)) r = () => F(U(e.useExisting));
  else {
    let o = U(e && (e.useClass || e.provide));
    if (Gf(e)) r = () => new o(...Oo(e.deps));
    else return bt(o) || Po(o);
  }
  return r;
}
function Dt(e, t, n = !1) {
  return { factory: e, value: t, multi: n ? [] : void 0 };
}
function Gf(e) {
  return !!e.deps;
}
function Wf(e) {
  return (
    e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"
  );
}
function qf(e) {
  return typeof e == "function" || (typeof e == "object" && e instanceof M);
}
function ko(e, t) {
  for (let n of e)
    Array.isArray(n) ? ko(n, t) : n && ru(n) ? ko(n.ɵproviders, t) : t(n);
}
function r_(e, t) {
  e instanceof Jt && e.assertNotDestroyed();
  let n,
    r = Te(e),
    o = J(void 0);
  try {
    return t();
  } finally {
    Te(r), J(o);
  }
}
function bu() {
  return ou() !== void 0 || cf() != null;
}
function _u(e) {
  if (!bu()) throw new _(-203, !1);
}
function Zf(e) {
  let t = So.ng;
  if (t && t.ɵcompilerFacade) return t.ɵcompilerFacade;
  throw new Error("JIT compiler unavailable");
}
function Yf(e) {
  return typeof e == "function";
}
var ve = 0,
  D = 1,
  m = 2,
  B = 3,
  le = 4,
  Z = 5,
  Xt = 6,
  ar = 7,
  ee = 8,
  xt = 9,
  me = 10,
  R = 11,
  en = 12,
  ba = 13,
  Ft = 14,
  te = 15,
  Ze = 16,
  vt = 17,
  Ce = 18,
  kr = 19,
  Mu = 20,
  Ne = 21,
  Kn = 22,
  X = 23,
  ne = 25,
  Ni = 1;
var Ye = 7,
  ur = 8,
  St = 9,
  q = 10,
  cr = (function (e) {
    return (
      (e[(e.None = 0)] = "None"),
      (e[(e.HasTransplantedViews = 2)] = "HasTransplantedViews"),
      e
    );
  })(cr || {});
function Ae(e) {
  return Array.isArray(e) && typeof e[Ni] == "object";
}
function _e(e) {
  return Array.isArray(e) && e[Ni] === !0;
}
function xu(e) {
  return (e.flags & 4) !== 0;
}
function Lr(e) {
  return e.componentOffset > -1;
}
function Ai(e) {
  return (e.flags & 1) === 1;
}
function be(e) {
  return !!e.template;
}
function Lo(e) {
  return (e[m] & 512) !== 0;
}
var jo = class {
  constructor(t, n, r) {
    (this.previousValue = t), (this.currentValue = n), (this.firstChange = r);
  }
  isFirstChange() {
    return this.firstChange;
  }
};
function Su(e, t, n, r) {
  t !== null ? t.applyValueToInputSignal(t, r) : (e[n] = r);
}
function Tu() {
  return Nu;
}
function Nu(e) {
  return e.type.prototype.ngOnChanges && (e.setInput = Kf), Qf;
}
Tu.ngInherit = !0;
function Qf() {
  let e = Ou(this),
    t = e?.current;
  if (t) {
    let n = e.previous;
    if (n === _t) e.previous = t;
    else for (let r in t) n[r] = t[r];
    (e.current = null), this.ngOnChanges(t);
  }
}
function Kf(e, t, n, r, o) {
  let i = this.declaredInputs[r],
    s = Ou(e) || Jf(e, { previous: _t, current: null }),
    a = s.current || (s.current = {}),
    u = s.previous,
    c = u[i];
  (a[i] = new jo(c && c.currentValue, n, u === _t)), Su(e, t, o, n);
}
var Au = "__ngSimpleChanges__";
function Ou(e) {
  return e[Au] || null;
}
function Jf(e, t) {
  return (e[Au] = t);
}
var _a = null;
var pe = function (e, t, n) {
    _a?.(e, t, n);
  },
  Fu = "svg",
  Xf = "math";
function ye(e) {
  for (; Array.isArray(e); ) e = e[ve];
  return e;
}
function eh(e) {
  for (; Array.isArray(e); ) {
    if (typeof e[Ni] == "object") return e;
    e = e[ve];
  }
  return null;
}
function Ru(e, t) {
  return ye(t[e]);
}
function re(e, t) {
  return ye(t[e.index]);
}
function Oi(e, t) {
  return e.data[t];
}
function ke(e, t) {
  let n = t[e];
  return Ae(n) ? n : n[ve];
}
function th(e) {
  return (e[m] & 4) === 4;
}
function Fi(e) {
  return (e[m] & 128) === 128;
}
function nh(e) {
  return _e(e[B]);
}
function lr(e, t) {
  return t == null ? null : e[t];
}
function Pu(e) {
  e[vt] = 0;
}
function ku(e) {
  e[m] & 1024 || ((e[m] |= 1024), Fi(e) && Vr(e));
}
function rh(e, t) {
  for (; e > 0; ) (t = t[Ft]), e--;
  return t;
}
function jr(e) {
  return !!(e[m] & 9216 || e[X]?.dirty);
}
function Vo(e) {
  e[me].changeDetectionScheduler?.notify(8),
    e[m] & 64 && (e[m] |= 1024),
    jr(e) && Vr(e);
}
function Vr(e) {
  e[me].changeDetectionScheduler?.notify(0);
  let t = Qe(e);
  for (; t !== null && !(t[m] & 8192 || ((t[m] |= 8192), !Fi(t))); ) t = Qe(t);
}
function Lu(e, t) {
  if ((e[m] & 256) === 256) throw new _(911, !1);
  e[Ne] === null && (e[Ne] = []), e[Ne].push(t);
}
function oh(e, t) {
  if (e[Ne] === null) return;
  let n = e[Ne].indexOf(t);
  n !== -1 && e[Ne].splice(n, 1);
}
function Qe(e) {
  let t = e[B];
  return _e(t) ? t[B] : t;
}
var E = { lFrame: Yu(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var ju = !1;
function ih() {
  return E.lFrame.elementDepthCount;
}
function sh() {
  E.lFrame.elementDepthCount++;
}
function ah() {
  E.lFrame.elementDepthCount--;
}
function Vu() {
  return E.bindingsEnabled;
}
function Bu() {
  return E.skipHydrationRootTNode !== null;
}
function uh(e) {
  return E.skipHydrationRootTNode === e;
}
function ch() {
  E.skipHydrationRootTNode = null;
}
function x() {
  return E.lFrame.lView;
}
function L() {
  return E.lFrame.tView;
}
function o_(e) {
  return (E.lFrame.contextLView = e), e[ee];
}
function i_(e) {
  return (E.lFrame.contextLView = null), e;
}
function $() {
  let e = $u();
  for (; e !== null && e.type === 64; ) e = e.parent;
  return e;
}
function $u() {
  return E.lFrame.currentTNode;
}
function lh() {
  let e = E.lFrame,
    t = e.currentTNode;
  return e.isParent ? t : t.parent;
}
function sn(e, t) {
  let n = E.lFrame;
  (n.currentTNode = e), (n.isParent = t);
}
function Hu() {
  return E.lFrame.isParent;
}
function Uu() {
  E.lFrame.isParent = !1;
}
function zu() {
  return ju;
}
function Ma(e) {
  ju = e;
}
function dh(e) {
  return (E.lFrame.bindingIndex = e);
}
function Rt() {
  return E.lFrame.bindingIndex++;
}
function Gu(e) {
  let t = E.lFrame,
    n = t.bindingIndex;
  return (t.bindingIndex = t.bindingIndex + e), n;
}
function fh() {
  return E.lFrame.inI18n;
}
function hh(e, t) {
  let n = E.lFrame;
  (n.bindingIndex = n.bindingRootIndex = e), Bo(t);
}
function ph() {
  return E.lFrame.currentDirectiveIndex;
}
function Bo(e) {
  E.lFrame.currentDirectiveIndex = e;
}
function Ri(e) {
  let t = E.lFrame.currentDirectiveIndex;
  return t === -1 ? null : e[t];
}
function Wu() {
  return E.lFrame.currentQueryIndex;
}
function Pi(e) {
  E.lFrame.currentQueryIndex = e;
}
function gh(e) {
  let t = e[D];
  return t.type === 2 ? t.declTNode : t.type === 1 ? e[Z] : null;
}
function qu(e, t, n) {
  if (n & w.SkipSelf) {
    let o = t,
      i = e;
    for (; (o = o.parent), o === null && !(n & w.Host); )
      if (((o = gh(i)), o === null || ((i = i[Ft]), o.type & 10))) break;
    if (o === null) return !1;
    (t = o), (e = i);
  }
  let r = (E.lFrame = Zu());
  return (r.currentTNode = t), (r.lView = e), !0;
}
function ki(e) {
  let t = Zu(),
    n = e[D];
  (E.lFrame = t),
    (t.currentTNode = n.firstChild),
    (t.lView = e),
    (t.tView = n),
    (t.contextLView = e),
    (t.bindingIndex = n.bindingStartIndex),
    (t.inI18n = !1);
}
function Zu() {
  let e = E.lFrame,
    t = e === null ? null : e.child;
  return t === null ? Yu(e) : t;
}
function Yu(e) {
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
function Qu() {
  let e = E.lFrame;
  return (E.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e;
}
var Ku = Qu;
function Li() {
  let e = Qu();
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
function mh(e) {
  return (E.lFrame.contextLView = rh(e, E.lFrame.contextLView))[ee];
}
function ot() {
  return E.lFrame.selectedIndex;
}
function Ke(e) {
  E.lFrame.selectedIndex = e;
}
function Br() {
  let e = E.lFrame;
  return Oi(e.tView, e.selectedIndex);
}
function s_() {
  E.lFrame.currentNamespace = Fu;
}
function yh() {
  return E.lFrame.currentNamespace;
}
var Ju = !0;
function ji() {
  return Ju;
}
function Vi(e) {
  Ju = e;
}
function Dh(e, t, n) {
  let { ngOnChanges: r, ngOnInit: o, ngDoCheck: i } = t.type.prototype;
  if (r) {
    let s = Nu(t);
    (n.preOrderHooks ??= []).push(e, s),
      (n.preOrderCheckHooks ??= []).push(e, s);
  }
  o && (n.preOrderHooks ??= []).push(0 - e, o),
    i &&
      ((n.preOrderHooks ??= []).push(e, i),
      (n.preOrderCheckHooks ??= []).push(e, i));
}
function Bi(e, t) {
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
function Jn(e, t, n) {
  Xu(e, t, 3, n);
}
function Xn(e, t, n, r) {
  (e[m] & 3) === n && Xu(e, t, n, r);
}
function Do(e, t) {
  let n = e[m];
  (n & 3) === t && ((n &= 16383), (n += 1), (e[m] = n));
}
function Xu(e, t, n, r) {
  let o = r !== void 0 ? e[vt] & 65535 : 0,
    i = r ?? -1,
    s = t.length - 1,
    a = 0;
  for (let u = o; u < s; u++)
    if (typeof t[u + 1] == "number") {
      if (((a = t[u]), r != null && a >= r)) break;
    } else
      t[u] < 0 && (e[vt] += 65536),
        (a < i || i == -1) &&
          (vh(e, n, t, u), (e[vt] = (e[vt] & 4294901760) + u + 2)),
        u++;
}
function xa(e, t) {
  pe(4, e, t);
  let n = C(null);
  try {
    t.call(e);
  } finally {
    C(n), pe(5, e, t);
  }
}
function vh(e, t, n, r) {
  let o = n[r] < 0,
    i = n[r + 1],
    s = o ? -n[r] : n[r],
    a = e[s];
  o
    ? e[m] >> 14 < e[vt] >> 16 &&
      (e[m] & 3) === t &&
      ((e[m] += 16384), xa(a, i))
    : xa(a, i);
}
var Ct = -1,
  Je = class {
    constructor(t, n, r) {
      (this.factory = t),
        (this.resolving = !1),
        (this.canSeeViewProviders = n),
        (this.injectImpl = r);
    }
  };
function Ih(e) {
  return e instanceof Je;
}
function Eh(e) {
  return (e.flags & 8) !== 0;
}
function wh(e) {
  return (e.flags & 16) !== 0;
}
var vo = {},
  $o = class {
    constructor(t, n) {
      (this.injector = t), (this.parentInjector = n);
    }
    get(t, n, r) {
      r = Pr(r);
      let o = this.injector.get(t, vo, r);
      return o !== vo || n === vo ? o : this.parentInjector.get(t, n, r);
    }
  };
function ec(e) {
  return e !== Ct;
}
function dr(e) {
  return e & 32767;
}
function Ch(e) {
  return e >> 16;
}
function fr(e, t) {
  let n = Ch(e),
    r = t;
  for (; n > 0; ) (r = r[Ft]), n--;
  return r;
}
var Ho = !0;
function Sa(e) {
  let t = Ho;
  return (Ho = e), t;
}
var bh = 256,
  tc = bh - 1,
  nc = 5,
  _h = 0,
  ge = {};
function Mh(e, t, n) {
  let r;
  typeof n == "string"
    ? (r = n.charCodeAt(0) || 0)
    : n.hasOwnProperty(qt) && (r = n[qt]),
    r == null && (r = n[qt] = _h++);
  let o = r & tc,
    i = 1 << o;
  t.data[e + (o >> nc)] |= i;
}
function hr(e, t) {
  let n = rc(e, t);
  if (n !== -1) return n;
  let r = t[D];
  r.firstCreatePass &&
    ((e.injectorIndex = t.length),
    Io(r.data, e),
    Io(t, null),
    Io(r.blueprint, null));
  let o = $i(e, t),
    i = e.injectorIndex;
  if (ec(o)) {
    let s = dr(o),
      a = fr(o, t),
      u = a[D].data;
    for (let c = 0; c < 8; c++) t[i + c] = a[s + c] | u[s + c];
  }
  return (t[i + 8] = o), i;
}
function Io(e, t) {
  e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
}
function rc(e, t) {
  return e.injectorIndex === -1 ||
    (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
    t[e.injectorIndex + 8] === null
    ? -1
    : e.injectorIndex;
}
function $i(e, t) {
  if (e.parent && e.parent.injectorIndex !== -1) return e.parent.injectorIndex;
  let n = 0,
    r = null,
    o = t;
  for (; o !== null; ) {
    if (((r = uc(o)), r === null)) return Ct;
    if ((n++, (o = o[Ft]), r.injectorIndex !== -1))
      return r.injectorIndex | (n << 16);
  }
  return Ct;
}
function Uo(e, t, n) {
  Mh(e, t, n);
}
function xh(e, t) {
  if (t === "class") return e.classes;
  if (t === "style") return e.styles;
  let n = e.attrs;
  if (n) {
    let r = n.length,
      o = 0;
    for (; o < r; ) {
      let i = n[o];
      if (du(i)) break;
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
function oc(e, t, n) {
  if (n & w.Optional || e !== void 0) return e;
  Ci(t, "NodeInjector");
}
function ic(e, t, n, r) {
  if (
    (n & w.Optional && r === void 0 && (r = null), !(n & (w.Self | w.Host)))
  ) {
    let o = e[xt],
      i = J(void 0);
    try {
      return o ? o.get(t, r, n & w.Optional) : iu(t, r, n & w.Optional);
    } finally {
      J(i);
    }
  }
  return oc(r, t, n);
}
function sc(e, t, n, r = w.Default, o) {
  if (e !== null) {
    if (t[m] & 2048 && !(r & w.Self)) {
      let s = Ah(e, t, n, r, ge);
      if (s !== ge) return s;
    }
    let i = ac(e, t, n, r, ge);
    if (i !== ge) return i;
  }
  return ic(t, n, r, o);
}
function ac(e, t, n, r, o) {
  let i = Th(n);
  if (typeof i == "function") {
    if (!qu(t, e, r)) return r & w.Host ? oc(o, n, r) : ic(t, n, r, o);
    try {
      let s;
      if (((s = i(r)), s == null && !(r & w.Optional))) Ci(n);
      else return s;
    } finally {
      Ku();
    }
  } else if (typeof i == "number") {
    let s = null,
      a = rc(e, t),
      u = Ct,
      c = r & w.Host ? t[te][Z] : null;
    for (
      (a === -1 || r & w.SkipSelf) &&
      ((u = a === -1 ? $i(e, t) : t[a + 8]),
      u === Ct || !Na(r, !1)
        ? (a = -1)
        : ((s = t[D]), (a = dr(u)), (t = fr(u, t))));
      a !== -1;

    ) {
      let l = t[D];
      if (Ta(i, a, l.data)) {
        let d = Sh(a, t, n, s, r, c);
        if (d !== ge) return d;
      }
      (u = t[a + 8]),
        u !== Ct && Na(r, t[D].data[a + 8] === c) && Ta(i, a, t)
          ? ((s = l), (a = dr(u)), (t = fr(u, t)))
          : (a = -1);
    }
  }
  return o;
}
function Sh(e, t, n, r, o, i) {
  let s = t[D],
    a = s.data[e + 8],
    u = r == null ? Lr(a) && Ho : r != s && (a.type & 3) !== 0,
    c = o & w.Host && i === a,
    l = er(a, s, n, u, c);
  return l !== null ? Xe(t, s, l, a) : ge;
}
function er(e, t, n, r, o) {
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
function Xe(e, t, n, r) {
  let o = e[n],
    i = t.data;
  if (Ih(o)) {
    let s = o;
    s.resolving && rf(nf(i[n]));
    let a = Sa(s.canSeeViewProviders);
    s.resolving = !0;
    let u,
      c = s.injectImpl ? J(s.injectImpl) : null,
      l = qu(e, r, w.Default);
    try {
      (o = e[n] = s.factory(void 0, i, e, r)),
        t.firstCreatePass && n >= r.directiveStart && Dh(n, i[n], t);
    } finally {
      c !== null && J(c), Sa(a), (s.resolving = !1), Ku();
    }
  }
  return o;
}
function Th(e) {
  if (typeof e == "string") return e.charCodeAt(0) || 0;
  let t = e.hasOwnProperty(qt) ? e[qt] : void 0;
  return typeof t == "number" ? (t >= 0 ? t & tc : Nh) : t;
}
function Ta(e, t, n) {
  let r = 1 << e;
  return !!(n[t + (e >> nc)] & r);
}
function Na(e, t) {
  return !(e & w.Self) && !(e & w.Host && t);
}
var qe = class {
  constructor(t, n) {
    (this._tNode = t), (this._lView = n);
  }
  get(t, n, r) {
    return sc(this._tNode, this._lView, t, Pr(r), n);
  }
};
function Nh() {
  return new qe($(), x());
}
function a_(e) {
  return rn(() => {
    let t = e.prototype.constructor,
      n = t[nr] || zo(t),
      r = Object.prototype,
      o = Object.getPrototypeOf(e.prototype).constructor;
    for (; o && o !== r; ) {
      let i = o[nr] || zo(o);
      if (i && i !== n) return i;
      o = Object.getPrototypeOf(o);
    }
    return (i) => new i();
  });
}
function zo(e) {
  return eu(e)
    ? () => {
        let t = zo(U(e));
        return t && t();
      }
    : bt(e);
}
function Ah(e, t, n, r, o) {
  let i = e,
    s = t;
  for (; i !== null && s !== null && s[m] & 2048 && !(s[m] & 512); ) {
    let a = ac(i, s, n, r | w.Self, ge);
    if (a !== ge) return a;
    let u = i.parent;
    if (!u) {
      let c = s[Mu];
      if (c) {
        let l = c.get(n, ge, r);
        if (l !== ge) return l;
      }
      (u = uc(s)), (s = s[Ft]);
    }
    i = u;
  }
  return o;
}
function uc(e) {
  let t = e[D],
    n = t.type;
  return n === 2 ? t.declTNode : n === 1 ? e[Z] : null;
}
function Oh(e) {
  return xh($(), e);
}
function Aa(e, t = null, n = null, r) {
  let o = cc(e, t, n, r);
  return o.resolveInjectorInitializers(), o;
}
function cc(e, t = null, n = null, r, o = new Set()) {
  let i = [n || G, Lf(e)];
  return (
    (r = r || (typeof e == "object" ? void 0 : W(e))),
    new Jt(i, t || Ti(), r || null, o)
  );
}
var Ge = class Ge {
  static create(t, n) {
    if (Array.isArray(t)) return Aa({ name: "" }, n, t, "");
    {
      let r = t.name ?? "";
      return Aa({ name: r }, t.parent, t.providers, r);
    }
  }
};
(Ge.THROW_IF_NOT_FOUND = Yt),
  (Ge.NULL = new sr()),
  (Ge.ɵprov = N({ token: Ge, providedIn: "any", factory: () => F(uu) })),
  (Ge.__NG_ELEMENT_ID__ = -1);
var De = Ge;
var Fh = new M("");
Fh.__NG_ELEMENT_ID__ = (e) => {
  let t = $();
  if (t === null) throw new _(204, !1);
  if (t.type & 2) return t.value;
  if (e & w.Optional) return null;
  throw new _(204, !1);
};
var Rh = "ngOriginalError";
function Eo(e) {
  return e[Rh];
}
var lc = !0,
  $r = (() => {
    let t = class t {};
    (t.__NG_ELEMENT_ID__ = Ph), (t.__NG_ENV_ID__ = (r) => r);
    let e = t;
    return e;
  })(),
  Go = class extends $r {
    constructor(t) {
      super(), (this._lView = t);
    }
    onDestroy(t) {
      return Lu(this._lView, t), () => oh(this._lView, t);
    }
  };
function Ph() {
  return new Go(x());
}
var an = (() => {
  let t = class t {
    constructor() {
      (this.taskId = 0),
        (this.pendingTasks = new Set()),
        (this.hasPendingTasks = new $t(!1));
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
  t.ɵprov = N({ token: t, providedIn: "root", factory: () => new t() });
  let e = t;
  return e;
})();
var Wo = class extends Se {
    constructor(t = !1) {
      super(),
        (this.destroyRef = void 0),
        (this.pendingTasks = void 0),
        (this.__isAsync = t),
        bu() &&
          ((this.destroyRef = I($r, { optional: !0 }) ?? void 0),
          (this.pendingTasks = I(an, { optional: !0 }) ?? void 0));
    }
    emit(t) {
      let n = C(null);
      try {
        super.next(t);
      } finally {
        C(n);
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
  ce = Wo;
function pr(...e) {}
function dc(e) {
  let t, n;
  function r() {
    e = pr;
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
function Oa(e) {
  return (
    queueMicrotask(() => e()),
    () => {
      e = pr;
    }
  );
}
var Hi = "isAngularZone",
  gr = Hi + "_ID",
  kh = 0,
  V = class e {
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
        scheduleInRootZone: i = lc,
      } = t;
      if (typeof Zone > "u") throw new _(908, !1);
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
        Vh(s);
    }
    static isInAngularZone() {
      return typeof Zone < "u" && Zone.current.get(Hi) === !0;
    }
    static assertInAngularZone() {
      if (!e.isInAngularZone()) throw new _(909, !1);
    }
    static assertNotInAngularZone() {
      if (e.isInAngularZone()) throw new _(909, !1);
    }
    run(t, n, r) {
      return this._inner.run(t, n, r);
    }
    runTask(t, n, r, o) {
      let i = this._inner,
        s = i.scheduleEventTask("NgZoneEvent: " + o, t, Lh, pr, pr);
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
  Lh = {};
function Ui(e) {
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
function jh(e) {
  if (e.isCheckStableRunning || e.callbackScheduled) return;
  e.callbackScheduled = !0;
  function t() {
    dc(() => {
      (e.callbackScheduled = !1),
        qo(e),
        (e.isCheckStableRunning = !0),
        Ui(e),
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
    qo(e);
}
function Vh(e) {
  let t = () => {
      jh(e);
    },
    n = kh++;
  e._inner = e._inner.fork({
    name: "angular",
    properties: { [Hi]: !0, [gr]: n, [gr + n]: !0 },
    onInvokeTask: (r, o, i, s, a, u) => {
      if (Bh(u)) return r.invokeTask(i, s, a, u);
      try {
        return Fa(e), r.invokeTask(i, s, a, u);
      } finally {
        ((e.shouldCoalesceEventChangeDetection && s.type === "eventTask") ||
          e.shouldCoalesceRunChangeDetection) &&
          t(),
          Ra(e);
      }
    },
    onInvoke: (r, o, i, s, a, u, c) => {
      try {
        return Fa(e), r.invoke(i, s, a, u, c);
      } finally {
        e.shouldCoalesceRunChangeDetection &&
          !e.callbackScheduled &&
          !$h(u) &&
          t(),
          Ra(e);
      }
    },
    onHasTask: (r, o, i, s) => {
      r.hasTask(i, s),
        o === i &&
          (s.change == "microTask"
            ? ((e._hasPendingMicrotasks = s.microTask), qo(e), Ui(e))
            : s.change == "macroTask" &&
              (e.hasPendingMacrotasks = s.macroTask));
    },
    onHandleError: (r, o, i, s) => (
      r.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1
    ),
  });
}
function qo(e) {
  e._hasPendingMicrotasks ||
  ((e.shouldCoalesceEventChangeDetection ||
    e.shouldCoalesceRunChangeDetection) &&
    e.callbackScheduled === !0)
    ? (e.hasPendingMicrotasks = !0)
    : (e.hasPendingMicrotasks = !1);
}
function Fa(e) {
  e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
}
function Ra(e) {
  e._nesting--, Ui(e);
}
var mr = class {
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
function Bh(e) {
  return fc(e, "__ignore_ng_zone__");
}
function $h(e) {
  return fc(e, "__scheduler_tick__");
}
function fc(e, t) {
  return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0;
}
function Hh(e = "zone.js", t) {
  return e === "noop" ? new mr() : e === "zone.js" ? new V(t) : e;
}
var et = class {
    constructor() {
      this._console = console;
    }
    handleError(t) {
      let n = this._findOriginalError(t);
      this._console.error("ERROR", t),
        n && this._console.error("ORIGINAL ERROR", n);
    }
    _findOriginalError(t) {
      let n = t && Eo(t);
      for (; n && Eo(n); ) n = Eo(n);
      return n || null;
    }
  },
  Uh = new M("", {
    providedIn: "root",
    factory: () => {
      let e = I(V),
        t = I(et);
      return (n) => e.runOutsideAngular(() => t.handleError(n));
    },
  });
function zh() {
  return Pt($(), x());
}
function Pt(e, t) {
  return new kt(re(e, t));
}
var kt = (() => {
  let t = class t {
    constructor(r) {
      this.nativeElement = r;
    }
  };
  t.__NG_ELEMENT_ID__ = zh;
  let e = t;
  return e;
})();
function Gh(e) {
  return e instanceof kt ? e.nativeElement : e;
}
function Wh() {
  return this._results[Symbol.iterator]();
}
var Zo = class e {
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
    n[Symbol.iterator] || (n[Symbol.iterator] = Wh);
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
    let r = gf(t);
    (this._changesDetected = !pf(this._results, r, n)) &&
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
function hc(e) {
  return (e.flags & 128) === 128;
}
var pc = new Map(),
  qh = 0;
function Zh() {
  return qh++;
}
function Yh(e) {
  pc.set(e[kr], e);
}
function Yo(e) {
  pc.delete(e[kr]);
}
var Pa = "__ngContext__";
function tt(e, t) {
  Ae(t) ? ((e[Pa] = t[kr]), Yh(t)) : (e[Pa] = t);
}
function gc(e) {
  return yc(e[en]);
}
function mc(e) {
  return yc(e[le]);
}
function yc(e) {
  for (; e !== null && !_e(e); ) e = e[le];
  return e;
}
var Qo;
function u_(e) {
  Qo = e;
}
function Qh() {
  if (Qo !== void 0) return Qo;
  if (typeof document < "u") return document;
  throw new _(210, !1);
}
var c_ = new M("", { providedIn: "root", factory: () => Kh }),
  Kh = "ng",
  Jh = new M(""),
  zi = new M("", { providedIn: "platform", factory: () => "unknown" });
var l_ = new M(""),
  d_ = new M("", {
    providedIn: "root",
    factory: () =>
      Qh().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") ||
      null,
  });
var Xh = "h",
  ep = "b";
var tp = () => null;
function Gi(e, t, n = !1) {
  return tp(e, t, n);
}
var Dc = !1,
  np = new M("", { providedIn: "root", factory: () => Dc });
var Gn;
function rp() {
  if (Gn === void 0 && ((Gn = null), So.trustedTypes))
    try {
      Gn = So.trustedTypes.createPolicy("angular#unsafe-bypass", {
        createHTML: (e) => e,
        createScript: (e) => e,
        createScriptURL: (e) => e,
      });
    } catch {}
  return Gn;
}
function ka(e) {
  return rp()?.createScriptURL(e) || e;
}
var yr = class {
  constructor(t) {
    this.changingThisBreaksApplicationSecurity = t;
  }
  toString() {
    return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Qa})`;
  }
};
function un(e) {
  return e instanceof yr ? e.changingThisBreaksApplicationSecurity : e;
}
function vc(e, t) {
  let n = op(e);
  if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL") return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${Qa})`);
  }
  return n === t;
}
function op(e) {
  return (e instanceof yr && e.getTypeName()) || null;
}
var ip = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function sp(e) {
  return (e = String(e)), e.match(ip) ? e : "unsafe:" + e;
}
var Wi = (function (e) {
  return (
    (e[(e.NONE = 0)] = "NONE"),
    (e[(e.HTML = 1)] = "HTML"),
    (e[(e.STYLE = 2)] = "STYLE"),
    (e[(e.SCRIPT = 3)] = "SCRIPT"),
    (e[(e.URL = 4)] = "URL"),
    (e[(e.RESOURCE_URL = 5)] = "RESOURCE_URL"),
    e
  );
})(Wi || {});
function ap(e) {
  let t = Ic();
  return t ? t.sanitize(Wi.URL, e) || "" : vc(e, "URL") ? un(e) : sp(Rr(e));
}
function up(e) {
  let t = Ic();
  if (t) return ka(t.sanitize(Wi.RESOURCE_URL, e) || "");
  if (vc(e, "ResourceURL")) return ka(un(e));
  throw new _(904, !1);
}
function cp(e, t) {
  return (t === "src" &&
    (e === "embed" ||
      e === "frame" ||
      e === "iframe" ||
      e === "media" ||
      e === "script")) ||
    (t === "href" && (e === "base" || e === "link"))
    ? up
    : ap;
}
function f_(e, t, n) {
  return cp(t, n)(e);
}
function Ic() {
  let e = x();
  return e && e[me].sanitizer;
}
function h_(e) {
  return e.ownerDocument.defaultView;
}
function Ec(e) {
  return e instanceof Function ? e() : e;
}
function lp(e) {
  return (e ?? I(De)).get(zi) === "browser";
}
var Dr = (function (e) {
    return (
      (e[(e.Important = 1)] = "Important"),
      (e[(e.DashCase = 2)] = "DashCase"),
      e
    );
  })(Dr || {}),
  dp;
function qi(e, t) {
  return dp(e, t);
}
function It(e, t, n, r, o) {
  if (r != null) {
    let i,
      s = !1;
    _e(r) ? (i = r) : Ae(r) && ((s = !0), (r = r[ve]));
    let a = ye(r);
    e === 0 && n !== null
      ? o == null
        ? Mc(t, n, a)
        : Ir(t, n, a, o || null, !0)
      : e === 1 && n !== null
        ? Ir(t, n, a, o || null, !0)
        : e === 2
          ? bp(t, a, s)
          : e === 3 && t.destroyNode(a),
      i != null && Mp(t, e, i, n, o);
  }
}
function fp(e, t) {
  return e.createText(t);
}
function hp(e, t, n) {
  e.setValue(t, n);
}
function wc(e, t, n) {
  return e.createElement(t, n);
}
function pp(e, t) {
  Cc(e, t), (t[ve] = null), (t[Z] = null);
}
function gp(e, t, n, r, o, i) {
  (r[ve] = o), (r[Z] = t), Hr(e, r, n, 1, o, i);
}
function Cc(e, t) {
  t[me].changeDetectionScheduler?.notify(9), Hr(e, t, t[R], 2, null, null);
}
function mp(e) {
  let t = e[en];
  if (!t) return wo(e[D], e);
  for (; t; ) {
    let n = null;
    if (Ae(t)) n = t[en];
    else {
      let r = t[q];
      r && (n = r);
    }
    if (!n) {
      for (; t && !t[le] && t !== e; ) Ae(t) && wo(t[D], t), (t = t[B]);
      t === null && (t = e), Ae(t) && wo(t[D], t), (n = t && t[le]);
    }
    t = n;
  }
}
function yp(e, t, n, r) {
  let o = q + r,
    i = n.length;
  r > 0 && (n[o - 1][le] = t),
    r < i - q ? ((t[le] = n[o]), au(n, q + r, t)) : (n.push(t), (t[le] = null)),
    (t[B] = n);
  let s = t[Ze];
  s !== null && n !== s && bc(s, t);
  let a = t[Ce];
  a !== null && a.insertView(e), Vo(t), (t[m] |= 128);
}
function bc(e, t) {
  let n = e[St],
    r = t[B];
  if (Ae(r)) e[m] |= cr.HasTransplantedViews;
  else {
    let o = r[B][te];
    t[te] !== o && (e[m] |= cr.HasTransplantedViews);
  }
  n === null ? (e[St] = [t]) : n.push(t);
}
function Zi(e, t) {
  let n = e[St],
    r = n.indexOf(t);
  n.splice(r, 1);
}
function vr(e, t) {
  if (e.length <= q) return;
  let n = q + t,
    r = e[n];
  if (r) {
    let o = r[Ze];
    o !== null && o !== e && Zi(o, r), t > 0 && (e[n - 1][le] = r[le]);
    let i = or(e, q + t);
    pp(r[D], r);
    let s = i[Ce];
    s !== null && s.detachView(i[D]),
      (r[B] = null),
      (r[le] = null),
      (r[m] &= -129);
  }
  return r;
}
function Yi(e, t) {
  if (!(t[m] & 256)) {
    let n = t[R];
    n.destroyNode && Hr(e, t, n, 3, null, null), mp(t);
  }
}
function wo(e, t) {
  if (t[m] & 256) return;
  let n = C(null);
  try {
    (t[m] &= -129),
      (t[m] |= 256),
      t[X] && mn(t[X]),
      vp(e, t),
      Dp(e, t),
      t[D].type === 1 && t[R].destroy();
    let r = t[Ze];
    if (r !== null && _e(t[B])) {
      r !== t[B] && Zi(r, t);
      let o = t[Ce];
      o !== null && o.detachView(e);
    }
    Yo(t);
  } finally {
    C(n);
  }
}
function Dp(e, t) {
  let n = e.cleanup,
    r = t[ar];
  if (n !== null)
    for (let i = 0; i < n.length - 1; i += 2)
      if (typeof n[i] == "string") {
        let s = n[i + 3];
        s >= 0 ? r[s]() : r[-s].unsubscribe(), (i += 2);
      } else {
        let s = r[n[i + 1]];
        n[i].call(s);
      }
  r !== null && (t[ar] = null);
  let o = t[Ne];
  if (o !== null) {
    t[Ne] = null;
    for (let i = 0; i < o.length; i++) {
      let s = o[i];
      s();
    }
  }
}
function vp(e, t) {
  let n;
  if (e != null && (n = e.destroyHooks) != null)
    for (let r = 0; r < n.length; r += 2) {
      let o = t[n[r]];
      if (!(o instanceof Je)) {
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
function _c(e, t, n) {
  return Ip(e, t.parent, n);
}
function Ip(e, t, n) {
  let r = t;
  for (; r !== null && r.type & 168; ) (t = r), (r = t.parent);
  if (r === null) return n[ve];
  {
    let { componentOffset: o } = r;
    if (o > -1) {
      let { encapsulation: i } = e.data[r.directiveStart + o];
      if (i === Qt.None || i === Qt.Emulated) return null;
    }
    return re(r, n);
  }
}
function Ir(e, t, n, r, o) {
  e.insertBefore(t, n, r, o);
}
function Mc(e, t, n) {
  e.appendChild(t, n);
}
function La(e, t, n, r, o) {
  r !== null ? Ir(e, t, n, r, o) : Mc(e, t, n);
}
function xc(e, t) {
  return e.parentNode(t);
}
function Ep(e, t) {
  return e.nextSibling(t);
}
function Sc(e, t, n) {
  return Cp(e, t, n);
}
function wp(e, t, n) {
  return e.type & 40 ? re(e, n) : null;
}
var Cp = wp,
  ja;
function Qi(e, t, n, r) {
  let o = _c(e, r, t),
    i = t[R],
    s = r.parent || t[Z],
    a = Sc(s, r, t);
  if (o != null)
    if (Array.isArray(n))
      for (let u = 0; u < n.length; u++) La(i, o, n[u], a, !1);
    else La(i, o, n, a, !1);
  ja !== void 0 && ja(i, r, t, n, o);
}
function Wt(e, t) {
  if (t !== null) {
    let n = t.type;
    if (n & 3) return re(t, e);
    if (n & 4) return Ko(-1, e[t.index]);
    if (n & 8) {
      let r = t.child;
      if (r !== null) return Wt(e, r);
      {
        let o = e[t.index];
        return _e(o) ? Ko(-1, o) : ye(o);
      }
    } else {
      if (n & 128) return Wt(e, t.next);
      if (n & 32) return qi(t, e)() || ye(e[t.index]);
      {
        let r = Tc(e, t);
        if (r !== null) {
          if (Array.isArray(r)) return r[0];
          let o = Qe(e[te]);
          return Wt(o, r);
        } else return Wt(e, t.next);
      }
    }
  }
  return null;
}
function Tc(e, t) {
  if (t !== null) {
    let r = e[te][Z],
      o = t.projection;
    return r.projection[o];
  }
  return null;
}
function Ko(e, t) {
  let n = q + e + 1;
  if (n < t.length) {
    let r = t[n],
      o = r[D].firstChild;
    if (o !== null) return Wt(r, o);
  }
  return t[Ye];
}
function bp(e, t, n) {
  e.removeChild(null, t, n);
}
function Ki(e, t, n, r, o, i, s) {
  for (; n != null; ) {
    if (n.type === 128) {
      n = n.next;
      continue;
    }
    let a = r[n.index],
      u = n.type;
    if (
      (s && t === 0 && (a && tt(ye(a), r), (n.flags |= 2)),
      (n.flags & 32) !== 32)
    )
      if (u & 8) Ki(e, t, n.child, r, o, i, !1), It(t, e, o, a, i);
      else if (u & 32) {
        let c = qi(n, r),
          l;
        for (; (l = c()); ) It(t, e, o, l, i);
        It(t, e, o, a, i);
      } else u & 16 ? Nc(e, t, r, n, o, i) : It(t, e, o, a, i);
    n = s ? n.projectionNext : n.next;
  }
}
function Hr(e, t, n, r, o, i) {
  Ki(n, r, e.firstChild, t, o, i, !1);
}
function _p(e, t, n) {
  let r = t[R],
    o = _c(e, n, t),
    i = n.parent || t[Z],
    s = Sc(i, n, t);
  Nc(r, 0, t, n, o, s);
}
function Nc(e, t, n, r, o, i) {
  let s = n[te],
    u = s[Z].projection[r.projection];
  if (Array.isArray(u))
    for (let c = 0; c < u.length; c++) {
      let l = u[c];
      It(t, e, o, l, i);
    }
  else {
    let c = u,
      l = s[B];
    hc(r) && (c.flags |= 128), Ki(e, t, c, l, o, i, !0);
  }
}
function Mp(e, t, n, r, o) {
  let i = n[Ye],
    s = ye(n);
  i !== s && It(t, e, r, i, o);
  for (let a = q; a < n.length; a++) {
    let u = n[a];
    Hr(u[D], u, e, t, r, i);
  }
}
function xp(e, t, n, r, o) {
  if (t) o ? e.addClass(n, r) : e.removeClass(n, r);
  else {
    let i = r.indexOf("-") === -1 ? void 0 : Dr.DashCase;
    o == null
      ? e.removeStyle(n, r, i)
      : (typeof o == "string" &&
          o.endsWith("!important") &&
          ((o = o.slice(0, -10)), (i |= Dr.Important)),
        e.setStyle(n, r, o, i));
  }
}
function Sp(e, t, n) {
  e.setAttribute(t, "style", n);
}
function Ac(e, t, n) {
  n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n);
}
function Oc(e, t, n) {
  let { mergedAttrs: r, classes: o, styles: i } = n;
  r !== null && Fo(e, t, r),
    o !== null && Ac(e, t, o),
    i !== null && Sp(e, t, i);
}
var Me = {};
function p_(e = 1) {
  Fc(L(), x(), ot() + e, !1);
}
function Fc(e, t, n, r) {
  if (!r)
    if ((t[m] & 3) === 3) {
      let i = e.preOrderCheckHooks;
      i !== null && Jn(t, i, n);
    } else {
      let i = e.preOrderHooks;
      i !== null && Xn(t, i, 0, n);
    }
  Ke(n);
}
function Ur(e, t = w.Default) {
  let n = x();
  if (n === null) return F(e, t);
  let r = $();
  return sc(r, n, U(e), t);
}
function g_() {
  let e = "invalid";
  throw new Error(e);
}
function Rc(e, t, n, r, o, i) {
  let s = C(null);
  try {
    let a = null;
    o & Oe.SignalBased && (a = t[r][de]),
      a !== null && a.transformFn !== void 0 && (i = a.transformFn(i)),
      o & Oe.HasDecoratorInputTransform &&
        (i = e.inputTransforms[r].call(t, i)),
      e.setInput !== null ? e.setInput(t, a, i, n, r) : Su(t, a, r, i);
  } finally {
    C(s);
  }
}
function Tp(e, t) {
  let n = e.hostBindingOpCodes;
  if (n !== null)
    try {
      for (let r = 0; r < n.length; r++) {
        let o = n[r];
        if (o < 0) Ke(~o);
        else {
          let i = o,
            s = n[++r],
            a = n[++r];
          hh(s, i);
          let u = t[i];
          a(2, u);
        }
      }
    } finally {
      Ke(-1);
    }
}
function zr(e, t, n, r, o, i, s, a, u, c, l) {
  let d = t.blueprint.slice();
  return (
    (d[ve] = o),
    (d[m] = r | 4 | 128 | 8 | 64),
    (c !== null || (e && e[m] & 2048)) && (d[m] |= 2048),
    Pu(d),
    (d[B] = d[Ft] = e),
    (d[ee] = n),
    (d[me] = s || (e && e[me])),
    (d[R] = a || (e && e[R])),
    (d[xt] = u || (e && e[xt]) || null),
    (d[Z] = i),
    (d[kr] = Zh()),
    (d[Xt] = l),
    (d[Mu] = c),
    (d[te] = t.type == 2 ? e[te] : d),
    d
  );
}
function cn(e, t, n, r, o) {
  let i = e.data[t];
  if (i === null) (i = Np(e, t, n, r, o)), fh() && (i.flags |= 32);
  else if (i.type & 64) {
    (i.type = n), (i.value = r), (i.attrs = o);
    let s = lh();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
  }
  return sn(i, !0), i;
}
function Np(e, t, n, r, o) {
  let i = $u(),
    s = Hu(),
    a = s ? i : i && i.parent,
    u = (e.data[t] = kp(e, a, n, t, r, o));
  return (
    e.firstChild === null && (e.firstChild = u),
    i !== null &&
      (s
        ? i.child == null && u.parent !== null && (i.child = u)
        : i.next === null && ((i.next = u), (u.prev = i))),
    u
  );
}
function Pc(e, t, n, r) {
  if (n === 0) return -1;
  let o = t.length;
  for (let i = 0; i < n; i++) t.push(r), e.blueprint.push(r), e.data.push(null);
  return o;
}
function kc(e, t, n, r, o) {
  let i = ot(),
    s = r & 2;
  try {
    Ke(-1), s && t.length > ne && Fc(e, t, ne, !1), pe(s ? 2 : 0, o), n(r, o);
  } finally {
    Ke(i), pe(s ? 3 : 1, o);
  }
}
function Lc(e, t, n) {
  if (xu(t)) {
    let r = C(null);
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
      C(r);
    }
  }
}
function jc(e, t, n) {
  Vu() && (Hp(e, t, n, re(n, t)), (n.flags & 64) === 64 && Uc(e, t, n));
}
function Vc(e, t, n = re) {
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
function Bc(e) {
  let t = e.tView;
  return t === null || t.incompleteFirstPass
    ? (e.tView = Ji(
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
function Ji(e, t, n, r, o, i, s, a, u, c, l) {
  let d = ne + r,
    h = d + o,
    f = Ap(d, h),
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
function Ap(e, t) {
  let n = [];
  for (let r = 0; r < t; r++) n.push(r < e ? null : Me);
  return n;
}
function Op(e, t, n, r) {
  let i = r.get(np, Dc) || n === Qt.ShadowDom,
    s = e.selectRootElement(t, i);
  return Fp(s), s;
}
function Fp(e) {
  Rp(e);
}
var Rp = () => null;
function Pp(e, t, n, r) {
  let o = Wc(t);
  o.push(n), e.firstCreatePass && qc(e).push(r, o.length - 1);
}
function kp(e, t, n, r, o, i) {
  let s = t ? t.injectorIndex : -1,
    a = 0;
  return (
    Bu() && (a |= 128),
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
function Va(e, t, n, r, o) {
  for (let i in t) {
    if (!t.hasOwnProperty(i)) continue;
    let s = t[i];
    if (s === void 0) continue;
    r ??= {};
    let a,
      u = Oe.None;
    Array.isArray(s) ? ((a = s[0]), (u = s[1])) : (a = s);
    let c = i;
    if (o !== null) {
      if (!o.hasOwnProperty(i)) continue;
      c = o[i];
    }
    e === 0 ? Ba(r, n, c, a, u) : Ba(r, n, c, a);
  }
  return r;
}
function Ba(e, t, n, r, o) {
  let i;
  e.hasOwnProperty(n) ? (i = e[n]).push(t, r) : (i = e[n] = [t, r]),
    o !== void 0 && i.push(o);
}
function Lp(e, t, n) {
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
    (u = Va(0, d.inputs, l, u, f)), (c = Va(1, d.outputs, l, c, p));
    let S = u !== null && s !== null && !Mi(t) ? Xp(u, l, s) : null;
    a.push(S);
  }
  u !== null &&
    (u.hasOwnProperty("class") && (t.flags |= 8),
    u.hasOwnProperty("style") && (t.flags |= 16)),
    (t.initialInputs = a),
    (t.inputs = u),
    (t.outputs = c);
}
function jp(e) {
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
function Xi(e, t, n, r, o, i, s, a) {
  let u = re(t, n),
    c = t.inputs,
    l;
  !a && c != null && (l = c[r])
    ? (es(e, n, l, r, o), Lr(t) && Vp(n, t.index))
    : t.type & 3
      ? ((r = jp(r)),
        (o = s != null ? s(o, t.value || "", r) : o),
        i.setProperty(u, r, o))
      : t.type & 12;
}
function Vp(e, t) {
  let n = ke(t, e);
  n[m] & 16 || (n[m] |= 64);
}
function $c(e, t, n, r) {
  if (Vu()) {
    let o = r === null ? null : { "": -1 },
      i = zp(e, n),
      s,
      a;
    i === null ? (s = a = null) : ([s, a] = i),
      s !== null && Hc(e, t, n, s, o, a),
      o && Gp(n, r, o);
  }
  n.mergedAttrs = Kt(n.mergedAttrs, n.attrs);
}
function Hc(e, t, n, r, o, i) {
  for (let c = 0; c < r.length; c++) Uo(hr(n, t), e, r[c].type);
  qp(n, e.data.length, r.length);
  for (let c = 0; c < r.length; c++) {
    let l = r[c];
    l.providersResolver && l.providersResolver(l);
  }
  let s = !1,
    a = !1,
    u = Pc(e, t, r.length, null);
  for (let c = 0; c < r.length; c++) {
    let l = r[c];
    (n.mergedAttrs = Kt(n.mergedAttrs, l.hostAttrs)),
      Zp(e, n, t, u, l),
      Wp(u, l, o),
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
  Lp(e, n, i);
}
function Bp(e, t, n, r, o) {
  let i = o.hostBindings;
  if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    $p(s) != a && s.push(a), s.push(n, r, i);
  }
}
function $p(e) {
  let t = e.length;
  for (; t > 0; ) {
    let n = e[--t];
    if (typeof n == "number" && n < 0) return n;
  }
  return 0;
}
function Hp(e, t, n, r) {
  let o = n.directiveStart,
    i = n.directiveEnd;
  Lr(n) && Yp(t, n, e.data[o + n.componentOffset]),
    e.firstCreatePass || hr(n, t),
    tt(r, t);
  let s = n.initialInputs;
  for (let a = o; a < i; a++) {
    let u = e.data[a],
      c = Xe(t, e, a, n);
    if ((tt(c, t), s !== null && Jp(t, a - o, c, u, n, s), be(u))) {
      let l = ke(n.index, t);
      l[ee] = Xe(t, e, a, n);
    }
  }
}
function Uc(e, t, n) {
  let r = n.directiveStart,
    o = n.directiveEnd,
    i = n.index,
    s = ph();
  try {
    Ke(i);
    for (let a = r; a < o; a++) {
      let u = e.data[a],
        c = t[a];
      Bo(a),
        (u.hostBindings !== null || u.hostVars !== 0 || u.hostAttrs !== null) &&
          Up(u, c);
    }
  } finally {
    Ke(-1), Bo(s);
  }
}
function Up(e, t) {
  e.hostBindings !== null && e.hostBindings(1, t);
}
function zp(e, t) {
  let n = e.directiveRegistry,
    r = null,
    o = null;
  if (n)
    for (let i = 0; i < n.length; i++) {
      let s = n[i];
      if (hu(t, s.selectors, !1))
        if ((r || (r = []), be(s)))
          if (s.findHostDirectiveDefs !== null) {
            let a = [];
            (o = o || new Map()),
              s.findHostDirectiveDefs(s, a, o),
              r.unshift(...a, s);
            let u = a.length;
            Jo(e, t, u);
          } else r.unshift(s), Jo(e, t, 0);
        else
          (o = o || new Map()), s.findHostDirectiveDefs?.(s, r, o), r.push(s);
    }
  return r === null ? null : [r, o];
}
function Jo(e, t, n) {
  (t.componentOffset = n), (e.components ??= []).push(t.index);
}
function Gp(e, t, n) {
  if (t) {
    let r = (e.localNames = []);
    for (let o = 0; o < t.length; o += 2) {
      let i = n[t[o + 1]];
      if (i == null) throw new _(-301, !1);
      r.push(t[o], i);
    }
  }
}
function Wp(e, t, n) {
  if (n) {
    if (t.exportAs)
      for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
    be(t) && (n[""] = e);
  }
}
function qp(e, t, n) {
  (e.flags |= 1),
    (e.directiveStart = t),
    (e.directiveEnd = t + n),
    (e.providerIndexes = t);
}
function Zp(e, t, n, r, o) {
  e.data[r] = o;
  let i = o.factory || (o.factory = bt(o.type, !0)),
    s = new Je(i, be(o), Ur);
  (e.blueprint[r] = s), (n[r] = s), Bp(e, t, r, Pc(e, n, o.hostVars, Me), o);
}
function Yp(e, t, n) {
  let r = re(t, e),
    o = Bc(n),
    i = e[me].rendererFactory,
    s = 16;
  n.signals ? (s = 4096) : n.onPush && (s = 64);
  let a = Gr(
    e,
    zr(e, o, null, s, r, t, null, i.createRenderer(r, n), null, null, null),
  );
  e[t.index] = a;
}
function Qp(e, t, n, r, o, i) {
  let s = re(e, t);
  Kp(t[R], s, i, e.value, n, r, o);
}
function Kp(e, t, n, r, o, i, s) {
  if (i == null) e.removeAttribute(t, o, n);
  else {
    let a = s == null ? Rr(i) : s(i, r || "", o);
    e.setAttribute(t, o, a, n);
  }
}
function Jp(e, t, n, r, o, i) {
  let s = i[t];
  if (s !== null)
    for (let a = 0; a < s.length; ) {
      let u = s[a++],
        c = s[a++],
        l = s[a++],
        d = s[a++];
      Rc(r, n, u, c, l, d);
    }
}
function Xp(e, t, n) {
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
function zc(e, t, n, r) {
  return [e, !0, 0, t, null, r, null, n, null, null];
}
function Gc(e, t) {
  let n = e.contentQueries;
  if (n !== null) {
    let r = C(null);
    try {
      for (let o = 0; o < n.length; o += 2) {
        let i = n[o],
          s = n[o + 1];
        if (s !== -1) {
          let a = e.data[s];
          Pi(i), a.contentQueries(2, t[s], s);
        }
      }
    } finally {
      C(r);
    }
  }
}
function Gr(e, t) {
  return e[en] ? (e[ba][le] = t) : (e[en] = t), (e[ba] = t), t;
}
function Xo(e, t, n) {
  Pi(0);
  let r = C(null);
  try {
    t(e, n);
  } finally {
    C(r);
  }
}
function Wc(e) {
  return (e[ar] ??= []);
}
function qc(e) {
  return (e.cleanup ??= []);
}
function Zc(e, t, n) {
  return (e === null || be(e)) && (n = eh(n[t.index])), n[R];
}
function Yc(e, t) {
  let n = e[xt],
    r = n ? n.get(et, null) : null;
  r && r.handleError(t);
}
function es(e, t, n, r, o) {
  for (let i = 0; i < n.length; ) {
    let s = n[i++],
      a = n[i++],
      u = n[i++],
      c = t[s],
      l = e.data[s];
    Rc(l, c, r, a, u, o);
  }
}
function eg(e, t, n) {
  let r = Ru(t, e);
  hp(e[R], r, n);
}
function tg(e, t) {
  let n = ke(t, e),
    r = n[D];
  ng(r, n);
  let o = n[ve];
  o !== null && n[Xt] === null && (n[Xt] = Gi(o, n[xt])), ts(r, n, n[ee]);
}
function ng(e, t) {
  for (let n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n]);
}
function ts(e, t, n) {
  ki(t);
  try {
    let r = e.viewQuery;
    r !== null && Xo(1, r, n);
    let o = e.template;
    o !== null && kc(e, t, o, 1, n),
      e.firstCreatePass && (e.firstCreatePass = !1),
      t[Ce]?.finishViewCreation(e),
      e.staticContentQueries && Gc(e, t),
      e.staticViewQueries && Xo(2, e.viewQuery, n);
    let i = e.components;
    i !== null && rg(t, i);
  } catch (r) {
    throw (
      (e.firstCreatePass &&
        ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
      r)
    );
  } finally {
    (t[m] &= -5), Li();
  }
}
function rg(e, t) {
  for (let n = 0; n < t.length; n++) tg(e, t[n]);
}
function ns(e, t, n, r) {
  let o = C(null);
  try {
    let i = t.tView,
      a = e[m] & 4096 ? 4096 : 16,
      u = zr(
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
    u[Ze] = c;
    let l = e[Ce];
    return l !== null && (u[Ce] = l.createEmbeddedView(i)), ts(i, u, n), u;
  } finally {
    C(o);
  }
}
function og(e, t) {
  let n = q + t;
  if (n < e.length) return e[n];
}
function Er(e, t) {
  return !t || t.firstChild === null || hc(e);
}
function rs(e, t, n, r = !0) {
  let o = t[D];
  if ((yp(o, t, e, n), r)) {
    let s = Ko(n, e),
      a = t[R],
      u = xc(a, e[Ye]);
    u !== null && gp(o, e[Z], a, t, u, s);
  }
  let i = t[Xt];
  i !== null && i.firstChild !== null && (i.firstChild = null);
}
function ig(e, t) {
  let n = vr(e, t);
  return n !== void 0 && Yi(n[D], n), n;
}
function wr(e, t, n, r, o = !1) {
  for (; n !== null; ) {
    if (n.type === 128) {
      n = o ? n.projectionNext : n.next;
      continue;
    }
    let i = t[n.index];
    i !== null && r.push(ye(i)), _e(i) && sg(i, r);
    let s = n.type;
    if (s & 8) wr(e, t, n.child, r);
    else if (s & 32) {
      let a = qi(n, t),
        u;
      for (; (u = a()); ) r.push(u);
    } else if (s & 16) {
      let a = Tc(t, n);
      if (Array.isArray(a)) r.push(...a);
      else {
        let u = Qe(t[te]);
        wr(u[D], u, a, r, !0);
      }
    }
    n = o ? n.projectionNext : n.next;
  }
  return r;
}
function sg(e, t) {
  for (let n = q; n < e.length; n++) {
    let r = e[n],
      o = r[D].firstChild;
    o !== null && wr(r[D], r, o, t);
  }
  e[Ye] !== e[ve] && t.push(e[Ye]);
}
var Qc = [];
function ag(e) {
  return e[X] ?? ug(e);
}
function ug(e) {
  let t = Qc.pop() ?? Object.create(lg);
  return (t.lView = e), t;
}
function cg(e) {
  e.lView[X] !== e && ((e.lView = null), Qc.push(e));
}
var lg = ie(Q({}, ct), {
  consumerIsAlwaysLive: !0,
  consumerMarkedDirty: (e) => {
    Vr(e.lView);
  },
  consumerOnSignalRead() {
    this.lView[X] = this;
  },
});
function dg(e) {
  let t = e[X] ?? Object.create(fg);
  return (t.lView = e), t;
}
var fg = ie(Q({}, ct), {
  consumerIsAlwaysLive: !0,
  consumerMarkedDirty: (e) => {
    let t = Qe(e.lView);
    for (; t && !Kc(t[D]); ) t = Qe(t);
    t && ku(t);
  },
  consumerOnSignalRead() {
    this.lView[X] = this;
  },
});
function Kc(e) {
  return e.type !== 2;
}
var hg = 100;
function Jc(e, t = !0, n = 0) {
  let r = e[me],
    o = r.rendererFactory,
    i = !1;
  i || o.begin?.();
  try {
    pg(e, n);
  } catch (s) {
    throw (t && Yc(e, s), s);
  } finally {
    i || (o.end?.(), r.inlineEffectRunner?.flush());
  }
}
function pg(e, t) {
  let n = zu();
  try {
    Ma(!0), ei(e, t);
    let r = 0;
    for (; jr(e); ) {
      if (r === hg) throw new _(103, !1);
      r++, ei(e, 1);
    }
  } finally {
    Ma(n);
  }
}
function gg(e, t, n, r) {
  let o = t[m];
  if ((o & 256) === 256) return;
  let i = !1,
    s = !1;
  !i && t[me].inlineEffectRunner?.flush(), ki(t);
  let a = !0,
    u = null,
    c = null;
  i ||
    (Kc(e)
      ? ((c = ag(t)), (u = Vt(c)))
      : Cs() === null
        ? ((a = !1), (c = dg(t)), (u = Vt(c)))
        : t[X] && (mn(t[X]), (t[X] = null)));
  try {
    Pu(t), dh(e.bindingStartIndex), n !== null && kc(e, t, n, 2, r);
    let l = (o & 3) === 3;
    if (!i)
      if (l) {
        let f = e.preOrderCheckHooks;
        f !== null && Jn(t, f, null);
      } else {
        let f = e.preOrderHooks;
        f !== null && Xn(t, f, 0, null), Do(t, 0);
      }
    if ((s || mg(t), Xc(t, 0), e.contentQueries !== null && Gc(e, t), !i))
      if (l) {
        let f = e.contentCheckHooks;
        f !== null && Jn(t, f);
      } else {
        let f = e.contentHooks;
        f !== null && Xn(t, f, 1), Do(t, 1);
      }
    Tp(e, t);
    let d = e.components;
    d !== null && tl(t, d, 0);
    let h = e.viewQuery;
    if ((h !== null && Xo(2, h, r), !i))
      if (l) {
        let f = e.viewCheckHooks;
        f !== null && Jn(t, f);
      } else {
        let f = e.viewHooks;
        f !== null && Xn(t, f, 2), Do(t, 2);
      }
    if ((e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[Kn])) {
      for (let f of t[Kn]) f();
      t[Kn] = null;
    }
    i || (t[m] &= -73);
  } catch (l) {
    throw (i || Vr(t), l);
  } finally {
    c !== null && (pn(c, u), a && cg(c)), Li();
  }
}
function Xc(e, t) {
  for (let n = gc(e); n !== null; n = mc(n))
    for (let r = q; r < n.length; r++) {
      let o = n[r];
      el(o, t);
    }
}
function mg(e) {
  for (let t = gc(e); t !== null; t = mc(t)) {
    if (!(t[m] & cr.HasTransplantedViews)) continue;
    let n = t[St];
    for (let r = 0; r < n.length; r++) {
      let o = n[r];
      ku(o);
    }
  }
}
function yg(e, t, n) {
  let r = ke(t, e);
  el(r, n);
}
function el(e, t) {
  Fi(e) && ei(e, t);
}
function ei(e, t) {
  let r = e[D],
    o = e[m],
    i = e[X],
    s = !!(t === 0 && o & 16);
  if (
    ((s ||= !!(o & 64 && t === 0)),
    (s ||= !!(o & 1024)),
    (s ||= !!(i?.dirty && gn(i))),
    (s ||= !1),
    i && (i.dirty = !1),
    (e[m] &= -9217),
    s)
  )
    gg(r, e, r.template, e[ee]);
  else if (o & 8192) {
    Xc(e, 1);
    let a = r.components;
    a !== null && tl(e, a, 1);
  }
}
function tl(e, t, n) {
  for (let r = 0; r < t.length; r++) yg(e, t[r], n);
}
function os(e, t) {
  let n = zu() ? 64 : 1088;
  for (e[me].changeDetectionScheduler?.notify(t); e; ) {
    e[m] |= n;
    let r = Qe(e);
    if (Lo(e) && !r) return e;
    e = r;
  }
  return null;
}
var nt = class {
    get rootNodes() {
      let t = this._lView,
        n = t[D];
      return wr(n, t, n.firstChild, []);
    }
    constructor(t, n, r = !0) {
      (this._lView = t),
        (this._cdRefInjectingView = n),
        (this.notifyErrorHandler = r),
        (this._appRef = null),
        (this._attachedToViewContainer = !1);
    }
    get context() {
      return this._lView[ee];
    }
    set context(t) {
      this._lView[ee] = t;
    }
    get destroyed() {
      return (this._lView[m] & 256) === 256;
    }
    destroy() {
      if (this._appRef) this._appRef.detachView(this);
      else if (this._attachedToViewContainer) {
        let t = this._lView[B];
        if (_e(t)) {
          let n = t[ur],
            r = n ? n.indexOf(this) : -1;
          r > -1 && (vr(t, r), or(n, r));
        }
        this._attachedToViewContainer = !1;
      }
      Yi(this._lView[D], this._lView);
    }
    onDestroy(t) {
      Lu(this._lView, t);
    }
    markForCheck() {
      os(this._cdRefInjectingView || this._lView, 4);
    }
    detach() {
      this._lView[m] &= -129;
    }
    reattach() {
      Vo(this._lView), (this._lView[m] |= 128);
    }
    detectChanges() {
      (this._lView[m] |= 1024), Jc(this._lView, this.notifyErrorHandler);
    }
    checkNoChanges() {}
    attachToViewContainerRef() {
      if (this._appRef) throw new _(902, !1);
      this._attachedToViewContainer = !0;
    }
    detachFromAppRef() {
      this._appRef = null;
      let t = Lo(this._lView),
        n = this._lView[Ze];
      n !== null && !t && Zi(n, this._lView), Cc(this._lView[D], this._lView);
    }
    attachToAppRef(t) {
      if (this._attachedToViewContainer) throw new _(902, !1);
      this._appRef = t;
      let n = Lo(this._lView),
        r = this._lView[Ze];
      r !== null && !n && bc(r, this._lView), Vo(this._lView);
    }
  },
  tn = (() => {
    let t = class t {};
    t.__NG_ELEMENT_ID__ = Ig;
    let e = t;
    return e;
  })(),
  Dg = tn,
  vg = class extends Dg {
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
      let o = ns(this._declarationLView, this._declarationTContainer, t, {
        embeddedViewInjector: n,
        dehydratedView: r,
      });
      return new nt(o);
    }
  };
function Ig() {
  return is($(), x());
}
function is(e, t) {
  return e.type & 4 ? new vg(t, e, Pt(e, t)) : null;
}
var y_ = new RegExp(`^(\\d+)*(${ep}|${Xh})*(.*)`);
var Eg = () => null;
function Cr(e, t) {
  return Eg(e, t);
}
var Tt = class {},
  nl = new M("", { providedIn: "root", factory: () => !1 });
var rl = new M(""),
  ol = new M(""),
  ti = class {},
  br = class {};
function wg(e) {
  let t = Error(`No component factory found for ${W(e)}.`);
  return (t[Cg] = e), t;
}
var Cg = "ngComponent";
var ni = class {
    resolveComponentFactory(t) {
      throw wg(t);
    }
  },
  fs = class fs {};
fs.NULL = new ni();
var Nt = fs,
  _r = class {},
  il = (() => {
    let t = class t {
      constructor() {
        this.destroyNode = null;
      }
    };
    t.__NG_ELEMENT_ID__ = () => bg();
    let e = t;
    return e;
  })();
function bg() {
  let e = x(),
    t = $(),
    n = ke(t.index, e);
  return (Ae(n) ? n : e)[R];
}
var _g = (() => {
  let t = class t {};
  t.ɵprov = N({ token: t, providedIn: "root", factory: () => null });
  let e = t;
  return e;
})();
function ri(e, t, n) {
  let r = n ? e.styles : null,
    o = n ? e.classes : null,
    i = 0;
  if (t !== null)
    for (let s = 0; s < t.length; s++) {
      let a = t[s];
      if (typeof a == "number") i = a;
      else if (i == 1) o = To(o, a);
      else if (i == 2) {
        let u = a,
          c = t[++s];
        r = To(r, u + ": " + c + ";");
      }
    }
  n ? (e.styles = r) : (e.stylesWithoutHost = r),
    n ? (e.classes = o) : (e.classesWithoutHost = o);
}
var Mr = class extends Nt {
  constructor(t) {
    super(), (this.ngModule = t);
  }
  resolveComponentFactory(t) {
    let n = Fe(t);
    return new At(n, this.ngModule);
  }
};
function $a(e, t) {
  let n = [];
  for (let r in e) {
    if (!e.hasOwnProperty(r)) continue;
    let o = e[r];
    if (o === void 0) continue;
    let i = Array.isArray(o),
      s = i ? o[0] : o,
      a = i ? o[1] : Oe.None;
    t
      ? n.push({
          propName: s,
          templateName: r,
          isSignal: (a & Oe.SignalBased) !== 0,
        })
      : n.push({ propName: s, templateName: r });
  }
  return n;
}
function Mg(e) {
  let t = e.toLowerCase();
  return t === "svg" ? Fu : t === "math" ? Xf : null;
}
var At = class extends br {
    get inputs() {
      let t = this.componentDef,
        n = t.inputTransforms,
        r = $a(t.inputs, !0);
      if (n !== null)
        for (let o of r)
          n.hasOwnProperty(o.propName) && (o.transform = n[o.propName]);
      return r;
    }
    get outputs() {
      return $a(this.componentDef.outputs, !1);
    }
    constructor(t, n) {
      super(),
        (this.componentDef = t),
        (this.ngModule = n),
        (this.componentType = t.type),
        (this.selector = Nf(t.selectors)),
        (this.ngContentSelectors = t.ngContentSelectors
          ? t.ngContentSelectors
          : []),
        (this.isBoundToModule = !!n);
    }
    create(t, n, r, o) {
      let i = C(null);
      try {
        o = o || this.ngModule;
        let s = o instanceof Re ? o : o?.injector;
        s &&
          this.componentDef.getStandaloneInjector !== null &&
          (s = this.componentDef.getStandaloneInjector(s) || s);
        let a = s ? new $o(t, s) : t,
          u = a.get(_r, null);
        if (u === null) throw new _(407, !1);
        let c = a.get(_g, null),
          l = a.get(Tt, null),
          d = {
            rendererFactory: u,
            sanitizer: c,
            inlineEffectRunner: null,
            changeDetectionScheduler: l,
          },
          h = u.createRenderer(null, this.componentDef),
          f = this.componentDef.selectors[0][0] || "div",
          p = r
            ? Op(h, r, this.componentDef.encapsulation, a)
            : wc(h, f, Mg(f)),
          S = 512;
        this.componentDef.signals
          ? (S |= 4096)
          : this.componentDef.onPush || (S |= 16);
        let j = null;
        p !== null && (j = Gi(p, a, !0));
        let O = Ji(0, null, null, 1, 0, null, null, null, null, null, null),
          K = zr(null, O, null, S, null, null, d, h, a, null, j);
        ki(K);
        let Ie,
          oe,
          at = null;
        try {
          let Y = this.componentDef,
            ut,
            Zr = null;
          Y.findHostDirectiveDefs
            ? ((ut = []),
              (Zr = new Map()),
              Y.findHostDirectiveDefs(Y, ut, Zr),
              ut.push(Y))
            : (ut = [Y]);
          let $l = xg(K, p);
          (at = Sg($l, p, Y, ut, K, d, h)),
            (oe = Oi(O, ne)),
            p && Ag(h, Y, p, r),
            n !== void 0 && Og(oe, this.ngContentSelectors, n),
            (Ie = Ng(at, Y, ut, Zr, K, [Fg])),
            ts(O, K, null);
        } catch (Y) {
          throw (at !== null && Yo(at), Yo(K), Y);
        } finally {
          Li();
        }
        return new oi(this.componentType, Ie, Pt(oe, K), K, oe);
      } finally {
        C(i);
      }
    }
  },
  oi = class extends ti {
    constructor(t, n, r, o, i) {
      super(),
        (this.location = r),
        (this._rootLView = o),
        (this._tNode = i),
        (this.previousInputValues = null),
        (this.instance = n),
        (this.hostView = this.changeDetectorRef = new nt(o, void 0, !1)),
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
        es(i[D], i, o, t, n), this.previousInputValues.set(t, n);
        let s = ke(this._tNode.index, i);
        os(s, 1);
      }
    }
    get injector() {
      return new qe(this._tNode, this._rootLView);
    }
    destroy() {
      this.hostView.destroy();
    }
    onDestroy(t) {
      this.hostView.onDestroy(t);
    }
  };
function xg(e, t) {
  let n = e[D],
    r = ne;
  return (e[r] = t), cn(n, r, 2, "#host", null);
}
function Sg(e, t, n, r, o, i, s) {
  let a = o[D];
  Tg(r, e, t, s);
  let u = null;
  t !== null && (u = Gi(t, o[xt]));
  let c = i.rendererFactory.createRenderer(t, n),
    l = 16;
  n.signals ? (l = 4096) : n.onPush && (l = 64);
  let d = zr(o, Bc(n), null, l, o[e.index], e, i, c, null, null, u);
  return (
    a.firstCreatePass && Jo(a, e, r.length - 1), Gr(o, d), (o[e.index] = d)
  );
}
function Tg(e, t, n, r) {
  for (let o of e) t.mergedAttrs = Kt(t.mergedAttrs, o.hostAttrs);
  t.mergedAttrs !== null &&
    (ri(t, t.mergedAttrs, !0), n !== null && Oc(r, n, t));
}
function Ng(e, t, n, r, o, i) {
  let s = $(),
    a = o[D],
    u = re(s, o);
  Hc(a, o, s, n, null, r);
  for (let l = 0; l < n.length; l++) {
    let d = s.directiveStart + l,
      h = Xe(o, a, d, s);
    tt(h, o);
  }
  Uc(a, o, s), u && tt(u, o);
  let c = Xe(o, a, s.directiveStart + s.componentOffset, s);
  if (((e[ee] = o[ee] = c), i !== null)) for (let l of i) l(c, t);
  return Lc(a, s, o), c;
}
function Ag(e, t, n, r) {
  if (r) Fo(e, n, ["ng-version", "18.2.4"]);
  else {
    let { attrs: o, classes: i } = Af(t.selectors[0]);
    o && Fo(e, n, o), i && i.length > 0 && Ac(e, n, i.join(" "));
  }
}
function Og(e, t, n) {
  let r = (e.projection = []);
  for (let o = 0; o < t.length; o++) {
    let i = n[o];
    r.push(i != null ? Array.from(i) : null);
  }
}
function Fg() {
  let e = $();
  Bi(x()[D], e);
}
var Wr = (() => {
  let t = class t {};
  t.__NG_ELEMENT_ID__ = Rg;
  let e = t;
  return e;
})();
function Rg() {
  let e = $();
  return al(e, x());
}
var Pg = Wr,
  sl = class extends Pg {
    constructor(t, n, r) {
      super(),
        (this._lContainer = t),
        (this._hostTNode = n),
        (this._hostLView = r);
    }
    get element() {
      return Pt(this._hostTNode, this._hostLView);
    }
    get injector() {
      return new qe(this._hostTNode, this._hostLView);
    }
    get parentInjector() {
      let t = $i(this._hostTNode, this._hostLView);
      if (ec(t)) {
        let n = fr(t, this._hostLView),
          r = dr(t),
          o = n[D].data[r + 8];
        return new qe(o, n);
      } else return new qe(null, this._hostLView);
    }
    clear() {
      for (; this.length > 0; ) this.remove(this.length - 1);
    }
    get(t) {
      let n = Ha(this._lContainer);
      return (n !== null && n[t]) || null;
    }
    get length() {
      return this._lContainer.length - q;
    }
    createEmbeddedView(t, n, r) {
      let o, i;
      typeof r == "number"
        ? (o = r)
        : r != null && ((o = r.index), (i = r.injector));
      let s = Cr(this._lContainer, t.ssrId),
        a = t.createEmbeddedViewImpl(n || {}, i, s);
      return this.insertImpl(a, o, Er(this._hostTNode, s)), a;
    }
    createComponent(t, n, r, o, i) {
      let s = t && !Yf(t),
        a;
      if (s) a = n;
      else {
        let p = n || {};
        (a = p.index),
          (r = p.injector),
          (o = p.projectableNodes),
          (i = p.environmentInjector || p.ngModuleRef);
      }
      let u = s ? t : new At(Fe(t)),
        c = r || this.parentInjector;
      if (!i && u.ngModule == null) {
        let S = (s ? c : this.parentInjector).get(Re, null);
        S && (i = S);
      }
      let l = Fe(u.componentType ?? {}),
        d = Cr(this._lContainer, l?.id ?? null),
        h = d?.firstChild ?? null,
        f = u.create(c, o, h, i);
      return this.insertImpl(f.hostView, a, Er(this._hostTNode, d)), f;
    }
    insert(t, n) {
      return this.insertImpl(t, n, !0);
    }
    insertImpl(t, n, r) {
      let o = t._lView;
      if (nh(o)) {
        let a = this.indexOf(t);
        if (a !== -1) this.detach(a);
        else {
          let u = o[B],
            c = new sl(u, u[Z], u[B]);
          c.detach(c.indexOf(t));
        }
      }
      let i = this._adjustIndex(n),
        s = this._lContainer;
      return rs(s, o, i, r), t.attachToViewContainerRef(), au(Co(s), i, t), t;
    }
    move(t, n) {
      return this.insert(t, n);
    }
    indexOf(t) {
      let n = Ha(this._lContainer);
      return n !== null ? n.indexOf(t) : -1;
    }
    remove(t) {
      let n = this._adjustIndex(t, -1),
        r = vr(this._lContainer, n);
      r && (or(Co(this._lContainer), n), Yi(r[D], r));
    }
    detach(t) {
      let n = this._adjustIndex(t, -1),
        r = vr(this._lContainer, n);
      return r && or(Co(this._lContainer), n) != null ? new nt(r) : null;
    }
    _adjustIndex(t, n = 0) {
      return t ?? this.length + n;
    }
  };
function Ha(e) {
  return e[ur];
}
function Co(e) {
  return e[ur] || (e[ur] = []);
}
function al(e, t) {
  let n,
    r = t[e.index];
  return (
    _e(r) ? (n = r) : ((n = zc(r, t, null, e)), (t[e.index] = n), Gr(t, n)),
    Lg(n, t, e, r),
    new sl(n, e, t)
  );
}
function kg(e, t) {
  let n = e[R],
    r = n.createComment(""),
    o = re(t, e),
    i = xc(n, o);
  return Ir(n, i, r, Ep(n, o), !1), r;
}
var Lg = Bg,
  jg = () => !1;
function Vg(e, t, n) {
  return jg(e, t, n);
}
function Bg(e, t, n, r) {
  if (e[Ye]) return;
  let o;
  n.type & 8 ? (o = ye(r)) : (o = kg(t, n)), (e[Ye] = o);
}
var ii = class e {
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
  si = class e {
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
        ss(t, n).matches !== null && this.queries[n].setDirty();
    }
  },
  xr = class {
    constructor(t, n, r = null) {
      (this.flags = n),
        (this.read = r),
        typeof t == "string" ? (this.predicate = Zg(t)) : (this.predicate = t);
    }
  },
  ai = class e {
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
  ui = class e {
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
          this.matchTNodeWithReadOption(t, n, $g(n, i)),
            this.matchTNodeWithReadOption(t, n, er(n, t, i, !1, !1));
        }
      else
        r === tn
          ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1)
          : this.matchTNodeWithReadOption(t, n, er(n, t, r, !1, !1));
    }
    matchTNodeWithReadOption(t, n, r) {
      if (r !== null) {
        let o = this.metadata.read;
        if (o !== null)
          if (o === kt || o === Wr || (o === tn && n.type & 4))
            this.addMatch(n.index, -2);
          else {
            let i = er(n, t, o, !1, !1);
            i !== null && this.addMatch(n.index, i);
          }
        else this.addMatch(n.index, r);
      }
    }
    addMatch(t, n) {
      this.matches === null ? (this.matches = [t, n]) : this.matches.push(t, n);
    }
  };
function $g(e, t) {
  let n = e.localNames;
  if (n !== null) {
    for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
  }
  return null;
}
function Hg(e, t) {
  return e.type & 11 ? Pt(e, t) : e.type & 4 ? is(e, t) : null;
}
function Ug(e, t, n, r) {
  return n === -1 ? Hg(t, e) : n === -2 ? zg(e, t, r) : Xe(e, e[D], n, t);
}
function zg(e, t, n) {
  if (n === kt) return Pt(t, e);
  if (n === tn) return is(t, e);
  if (n === Wr) return al(t, e);
}
function ul(e, t, n, r) {
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
        a.push(Ug(t, l, s[u + 1], n.metadata.read));
      }
    }
    o.matches = a;
  }
  return o.matches;
}
function ci(e, t, n, r) {
  let o = e.queries.getByIndex(n),
    i = o.matches;
  if (i !== null) {
    let s = ul(e, t, o, n);
    for (let a = 0; a < i.length; a += 2) {
      let u = i[a];
      if (u > 0) r.push(s[a / 2]);
      else {
        let c = i[a + 1],
          l = t[-u];
        for (let d = q; d < l.length; d++) {
          let h = l[d];
          h[Ze] === h[B] && ci(h[D], h, c, r);
        }
        if (l[St] !== null) {
          let d = l[St];
          for (let h = 0; h < d.length; h++) {
            let f = d[h];
            ci(f[D], f, c, r);
          }
        }
      }
    }
  }
  return r;
}
function Gg(e, t) {
  return e[Ce].queries[t].queryList;
}
function cl(e, t, n) {
  let r = new Zo((n & 4) === 4);
  return (
    Pp(e, t, r, r.destroy), (t[Ce] ??= new si()).queries.push(new ii(r)) - 1
  );
}
function Wg(e, t, n) {
  let r = L();
  return (
    r.firstCreatePass &&
      (ll(r, new xr(e, t, n), -1), (t & 2) === 2 && (r.staticViewQueries = !0)),
    cl(r, x(), t)
  );
}
function qg(e, t, n, r) {
  let o = L();
  if (o.firstCreatePass) {
    let i = $();
    ll(o, new xr(t, n, r), i.index),
      Yg(o, e),
      (n & 2) === 2 && (o.staticContentQueries = !0);
  }
  return cl(o, x(), n);
}
function Zg(e) {
  return e.split(",").map((t) => t.trim());
}
function ll(e, t, n) {
  e.queries === null && (e.queries = new ai()), e.queries.track(new ui(t, n));
}
function Yg(e, t) {
  let n = e.contentQueries || (e.contentQueries = []),
    r = n.length ? n[n.length - 1] : -1;
  t !== r && n.push(e.queries.length - 1, t);
}
function ss(e, t) {
  return e.queries.getByIndex(t);
}
function Qg(e, t) {
  let n = e[D],
    r = ss(n, t);
  return r.crossesNgTemplate ? ci(n, e, t, []) : ul(n, e, r, t);
}
var Ua = new Set();
function it(e) {
  Ua.has(e) ||
    (Ua.add(e),
    performance?.mark?.("mark_feature_usage", { detail: { feature: e } }));
}
function v_(e) {
  return typeof e == "function" && e[de] !== void 0;
}
function I_(e, t) {
  it("NgSignals");
  let n = Ps(e),
    r = n[de];
  return (
    t?.equal && (r.equal = t.equal),
    (n.set = (o) => Xr(r, o)),
    (n.update = (o) => ks(r, o)),
    (n.asReadonly = Kg.bind(n)),
    n
  );
}
function Kg() {
  let e = this[de];
  if (e.readonlyFn === void 0) {
    let t = () => this();
    (t[de] = e), (e.readonlyFn = t);
  }
  return e.readonlyFn;
}
function Jg(e) {
  let t = [],
    n = new Map();
  function r(o) {
    let i = n.get(o);
    if (!i) {
      let s = e(o);
      n.set(o, (i = s.then(nm)));
    }
    return i;
  }
  return (
    Sr.forEach((o, i) => {
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
      let u = Promise.all(s).then(() => rm(i));
      t.push(u);
    }),
    em(),
    Promise.all(t).then(() => {})
  );
}
var Sr = new Map(),
  Xg = new Set();
function em() {
  let e = Sr;
  return (Sr = new Map()), e;
}
function tm() {
  return Sr.size === 0;
}
function nm(e) {
  return typeof e == "string" ? e : e.text();
}
function rm(e) {
  Xg.delete(e);
}
function om(e) {
  return Object.getPrototypeOf(e.prototype).constructor;
}
function im(e) {
  let t = om(e.type),
    n = !0,
    r = [e];
  for (; t; ) {
    let o;
    if (be(e)) o = t.ɵcmp || t.ɵdir;
    else {
      if (t.ɵcmp) throw new _(903, !1);
      o = t.ɵdir;
    }
    if (o) {
      if (n) {
        r.push(o);
        let s = e;
        (s.inputs = Wn(e.inputs)),
          (s.inputTransforms = Wn(e.inputTransforms)),
          (s.declaredInputs = Wn(e.declaredInputs)),
          (s.outputs = Wn(e.outputs));
        let a = o.hostBindings;
        a && lm(e, a);
        let u = o.viewQuery,
          c = o.contentQueries;
        if (
          (u && um(e, u),
          c && cm(e, c),
          sm(e, o),
          Zd(e.outputs, o.outputs),
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
          a && a.ngInherit && a(e), a === im && (n = !1);
        }
    }
    t = Object.getPrototypeOf(t);
  }
  am(r);
}
function sm(e, t) {
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
function am(e) {
  let t = 0,
    n = null;
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    (o.hostVars = t += o.hostVars),
      (o.hostAttrs = Kt(o.hostAttrs, (n = Kt(n, o.hostAttrs))));
  }
}
function Wn(e) {
  return e === _t ? {} : e === G ? [] : e;
}
function um(e, t) {
  let n = e.viewQuery;
  n
    ? (e.viewQuery = (r, o) => {
        t(r, o), n(r, o);
      })
    : (e.viewQuery = t);
}
function cm(e, t) {
  let n = e.contentQueries;
  n
    ? (e.contentQueries = (r, o, i) => {
        t(r, o, i), n(r, o, i);
      })
    : (e.contentQueries = t);
}
function lm(e, t) {
  let n = e.hostBindings;
  n
    ? (e.hostBindings = (r, o) => {
        t(r, o), n(r, o);
      })
    : (e.hostBindings = t);
}
function dm(e) {
  let t = e.inputConfig,
    n = {};
  for (let r in t)
    if (t.hasOwnProperty(r)) {
      let o = t[r];
      Array.isArray(o) && o[3] && (n[r] = o[3]);
    }
  e.inputTransforms = n;
}
var Pe = class {},
  li = class {};
var Tr = class extends Pe {
    constructor(t, n, r, o = !0) {
      super(),
        (this.ngModuleType = t),
        (this._parent = n),
        (this._bootstrapComponents = []),
        (this.destroyCbs = []),
        (this.componentFactoryResolver = new Mr(this));
      let i = mu(t);
      (this._bootstrapComponents = Ec(i.bootstrap)),
        (this._r3Injector = cc(
          t,
          n,
          [
            { provide: Pe, useValue: this },
            { provide: Nt, useValue: this.componentFactoryResolver },
            ...r,
          ],
          W(t),
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
  Nr = class extends li {
    constructor(t) {
      super(), (this.moduleType = t);
    }
    create(t) {
      return new Tr(this.moduleType, t, []);
    }
  };
function fm(e, t, n) {
  return new Tr(e, t, n, !1);
}
var di = class extends Pe {
  constructor(t) {
    super(),
      (this.componentFactoryResolver = new Mr(this)),
      (this.instance = null);
    let n = new Jt(
      [
        ...t.providers,
        { provide: Pe, useValue: this },
        { provide: Nt, useValue: this.componentFactoryResolver },
      ],
      t.parent || Ti(),
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
function hm(e, t, n = null) {
  return new di({
    providers: e,
    parent: t,
    debugName: n,
    runEnvironmentInitializers: !0,
  }).injector;
}
function Le(e, t, n) {
  let r = e[t];
  return Object.is(r, n) ? !1 : ((e[t] = n), !0);
}
function pm(e) {
  return (e.flags & 32) === 32;
}
function gm(e, t, n, r, o, i, s, a, u) {
  let c = t.consts,
    l = cn(t, e, 4, s || null, a || null);
  $c(t, n, l, lr(c, u)), Bi(t, l);
  let d = (l.tView = Ji(
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
function dl(e, t, n, r, o, i, s, a, u, c) {
  let l = n + ne,
    d = t.firstCreatePass ? gm(l, t, e, r, o, i, s, a, u) : t.data[l];
  sn(d, !1);
  let h = ym(t, e, d, n);
  ji() && Qi(t, e, h, d), tt(h, e);
  let f = zc(h, e, h, d);
  return (
    (e[l] = f),
    Gr(e, f),
    Vg(f, d, e),
    Ai(d) && jc(t, e, d),
    u != null && Vc(e, d, c),
    d
  );
}
function mm(e, t, n, r, o, i, s, a) {
  let u = x(),
    c = L(),
    l = lr(c.consts, i);
  return dl(u, c, e, t, n, r, o, l, s, a), mm;
}
var ym = Dm;
function Dm(e, t, n, r) {
  return Vi(!0), t[R].createComment("");
}
var Et = (function (e) {
    return (
      (e[(e.EarlyRead = 0)] = "EarlyRead"),
      (e[(e.Write = 1)] = "Write"),
      (e[(e.MixedReadWrite = 2)] = "MixedReadWrite"),
      (e[(e.Read = 3)] = "Read"),
      e
    );
  })(Et || {}),
  fl = (() => {
    let t = class t {
      constructor() {
        this.impl = null;
      }
      execute() {
        this.impl?.execute();
      }
    };
    t.ɵprov = N({ token: t, providedIn: "root", factory: () => new t() });
    let e = t;
    return e;
  })(),
  We = class We {
    constructor() {
      (this.ngZone = I(V)),
        (this.scheduler = I(Tt)),
        (this.errorHandler = I(et, { optional: !0 })),
        (this.sequences = new Set()),
        (this.deferredRegistrations = new Set()),
        (this.executing = !1);
    }
    execute() {
      this.executing = !0;
      for (let t of We.PHASES)
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
(We.PHASES = [Et.EarlyRead, Et.Write, Et.MixedReadWrite, Et.Read]),
  (We.ɵprov = N({ token: We, providedIn: "root", factory: () => new We() }));
var fi = We,
  hi = class {
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
function vm(e, t) {
  !t?.injector && _u(vm);
  let n = t?.injector ?? I(De);
  return lp(n) ? (it("NgAfterNextRender"), Em(e, n, t, !0)) : wm;
}
function Im(e, t) {
  if (e instanceof Function) {
    let n = [void 0, void 0, void 0, void 0];
    return (n[t] = e), n;
  } else return [e.earlyRead, e.write, e.mixedReadWrite, e.read];
}
function Em(e, t, n, r) {
  let o = t.get(fl);
  o.impl ??= t.get(fi);
  let i = n?.phase ?? Et.MixedReadWrite,
    s = new hi(o.impl, Im(e, i), r, t.get($r));
  return o.impl.register(s), s;
}
var wm = { destroy() {} };
function Cm(e, t, n, r) {
  let o = x(),
    i = Rt();
  if (Le(o, i, t)) {
    let s = L(),
      a = Br();
    Qp(a, o, e, t, n, r);
  }
  return Cm;
}
function bm(e, t, n, r) {
  return Le(e, Rt(), n) ? t + Rr(n) + r : Me;
}
function qn(e, t) {
  return (e << 17) | (t << 2);
}
function rt(e) {
  return (e >> 17) & 32767;
}
function _m(e) {
  return (e & 2) == 2;
}
function Mm(e, t) {
  return (e & 131071) | (t << 17);
}
function pi(e) {
  return e | 2;
}
function Ot(e) {
  return (e & 131068) >> 2;
}
function bo(e, t) {
  return (e & -131069) | (t << 2);
}
function xm(e) {
  return (e & 1) === 1;
}
function gi(e) {
  return e | 1;
}
function Sm(e, t, n, r, o, i) {
  let s = i ? t.classBindings : t.styleBindings,
    a = rt(s),
    u = Ot(s);
  e[r] = n;
  let c = !1,
    l;
  if (Array.isArray(n)) {
    let d = n;
    (l = d[1]), (l === null || on(d, l) > 0) && (c = !0);
  } else l = n;
  if (o)
    if (u !== 0) {
      let h = rt(e[a + 1]);
      (e[r + 1] = qn(h, a)),
        h !== 0 && (e[h + 1] = bo(e[h + 1], r)),
        (e[a + 1] = Mm(e[a + 1], r));
    } else
      (e[r + 1] = qn(a, 0)), a !== 0 && (e[a + 1] = bo(e[a + 1], r)), (a = r);
  else
    (e[r + 1] = qn(u, 0)),
      a === 0 ? (a = r) : (e[u + 1] = bo(e[u + 1], r)),
      (u = r);
  c && (e[r + 1] = pi(e[r + 1])),
    za(e, l, r, !0),
    za(e, l, r, !1),
    Tm(t, l, e, r, i),
    (s = qn(a, u)),
    i ? (t.classBindings = s) : (t.styleBindings = s);
}
function Tm(e, t, n, r, o) {
  let i = o ? e.residualClasses : e.residualStyles;
  i != null &&
    typeof t == "string" &&
    on(i, t) >= 0 &&
    (n[r + 1] = gi(n[r + 1]));
}
function za(e, t, n, r) {
  let o = e[n + 1],
    i = t === null,
    s = r ? rt(o) : Ot(o),
    a = !1;
  for (; s !== 0 && (a === !1 || i); ) {
    let u = e[s],
      c = e[s + 1];
    Nm(u, t) && ((a = !0), (e[s + 1] = r ? gi(c) : pi(c))),
      (s = r ? rt(c) : Ot(c));
  }
  a && (e[n + 1] = r ? pi(o) : gi(o));
}
function Nm(e, t) {
  return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t
    ? !0
    : Array.isArray(e) && typeof t == "string"
      ? on(e, t) >= 0
      : !1;
}
var ue = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function Am(e) {
  return e.substring(ue.key, ue.keyEnd);
}
function Om(e) {
  return Fm(e), hl(e, pl(e, 0, ue.textEnd));
}
function hl(e, t) {
  let n = ue.textEnd;
  return n === t ? -1 : ((t = ue.keyEnd = Rm(e, (ue.key = t), n)), pl(e, t, n));
}
function Fm(e) {
  (ue.key = 0),
    (ue.keyEnd = 0),
    (ue.value = 0),
    (ue.valueEnd = 0),
    (ue.textEnd = e.length);
}
function pl(e, t, n) {
  for (; t < n && e.charCodeAt(t) <= 32; ) t++;
  return t;
}
function Rm(e, t, n) {
  for (; t < n && e.charCodeAt(t) > 32; ) t++;
  return t;
}
function Pm(e, t, n) {
  let r = x(),
    o = Rt();
  if (Le(r, o, t)) {
    let i = L(),
      s = Br();
    Xi(i, s, r, e, t, r[R], n, !1);
  }
  return Pm;
}
function mi(e, t, n, r, o) {
  let i = t.inputs,
    s = o ? "class" : "style";
  es(e, n, i[s], s, r);
}
function gl(e, t, n) {
  return ml(e, t, n, !1), gl;
}
function km(e, t) {
  return ml(e, t, null, !0), km;
}
function E_(e) {
  jm(zm, Lm, e, !0);
}
function Lm(e, t) {
  for (let n = Om(t); n >= 0; n = hl(t, n)) _i(e, Am(t), !0);
}
function ml(e, t, n, r) {
  let o = x(),
    i = L(),
    s = Gu(2);
  if ((i.firstUpdatePass && Dl(i, e, s, r), t !== Me && Le(o, s, t))) {
    let a = i.data[ot()];
    vl(i, a, o, o[R], e, (o[s + 1] = Wm(t, n)), r, s);
  }
}
function jm(e, t, n, r) {
  let o = L(),
    i = Gu(2);
  o.firstUpdatePass && Dl(o, null, i, r);
  let s = x();
  if (n !== Me && Le(s, i, n)) {
    let a = o.data[ot()];
    if (Il(a, r) && !yl(o, i)) {
      let u = r ? a.classesWithoutHost : a.stylesWithoutHost;
      u !== null && (n = To(u, n || "")), mi(o, a, s, n, r);
    } else Gm(o, a, s, s[R], s[i + 1], (s[i + 1] = Um(e, t, n)), r, i);
  }
}
function yl(e, t) {
  return t >= e.expandoStartIndex;
}
function Dl(e, t, n, r) {
  let o = e.data;
  if (o[n + 1] === null) {
    let i = o[ot()],
      s = yl(e, n);
    Il(i, r) && t === null && !s && (t = !1),
      (t = Vm(o, i, t, r)),
      Sm(o, i, t, n, s, r);
  }
}
function Vm(e, t, n, r) {
  let o = Ri(e),
    i = r ? t.residualClasses : t.residualStyles;
  if (o === null)
    (r ? t.classBindings : t.styleBindings) === 0 &&
      ((n = _o(null, e, t, n, r)), (n = nn(n, t.attrs, r)), (i = null));
  else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== o)
      if (((n = _o(o, e, t, n, r)), i === null)) {
        let u = Bm(e, t, r);
        u !== void 0 &&
          Array.isArray(u) &&
          ((u = _o(null, e, t, u[1], r)),
          (u = nn(u, t.attrs, r)),
          $m(e, t, r, u));
      } else i = Hm(e, t, r);
  }
  return (
    i !== void 0 && (r ? (t.residualClasses = i) : (t.residualStyles = i)), n
  );
}
function Bm(e, t, n) {
  let r = n ? t.classBindings : t.styleBindings;
  if (Ot(r) !== 0) return e[rt(r)];
}
function $m(e, t, n, r) {
  let o = n ? t.classBindings : t.styleBindings;
  e[rt(o)] = r;
}
function Hm(e, t, n) {
  let r,
    o = t.directiveEnd;
  for (let i = 1 + t.directiveStylingLast; i < o; i++) {
    let s = e[i].hostAttrs;
    r = nn(r, s, n);
  }
  return nn(r, t.attrs, n);
}
function _o(e, t, n, r, o) {
  let i = null,
    s = n.directiveEnd,
    a = n.directiveStylingLast;
  for (
    a === -1 ? (a = n.directiveStart) : a++;
    a < s && ((i = t[a]), (r = nn(r, i.hostAttrs, o)), i !== e);

  )
    a++;
  return e !== null && (n.directiveStylingLast = a), r;
}
function nn(e, t, n) {
  let r = n ? 1 : 2,
    o = -1;
  if (t !== null)
    for (let i = 0; i < t.length; i++) {
      let s = t[i];
      typeof s == "number"
        ? (o = s)
        : o === r &&
          (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]),
          _i(e, s, n ? !0 : t[++i]));
    }
  return e === void 0 ? null : e;
}
function Um(e, t, n) {
  if (n == null || n === "") return G;
  let r = [],
    o = un(n);
  if (Array.isArray(o)) for (let i = 0; i < o.length; i++) e(r, o[i], !0);
  else if (typeof o == "object")
    for (let i in o) o.hasOwnProperty(i) && e(r, i, o[i]);
  else typeof o == "string" && t(r, o);
  return r;
}
function zm(e, t, n) {
  let r = String(t);
  r !== "" && !r.includes(" ") && _i(e, r, n);
}
function Gm(e, t, n, r, o, i, s, a) {
  o === Me && (o = G);
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
      p !== null && vl(e, t, n, r, p, S, s, a),
      (l = u < o.length ? o[u] : null),
      (d = c < i.length ? i[c] : null);
  }
}
function vl(e, t, n, r, o, i, s, a) {
  if (!(t.type & 3)) return;
  let u = e.data,
    c = u[a + 1],
    l = xm(c) ? Ga(u, t, n, o, Ot(c), s) : void 0;
  if (!Ar(l)) {
    Ar(i) || (_m(c) && (i = Ga(u, null, n, o, a, s)));
    let d = Ru(ot(), n);
    xp(r, s, d, o, i);
  }
}
function Ga(e, t, n, r, o, i) {
  let s = t === null,
    a;
  for (; o > 0; ) {
    let u = e[o],
      c = Array.isArray(u),
      l = c ? u[1] : u,
      d = l === null,
      h = n[o + 1];
    h === Me && (h = d ? G : void 0);
    let f = d ? mo(h, r) : l === r ? h : void 0;
    if ((c && !Ar(f) && (f = mo(u, r)), Ar(f) && ((a = f), s))) return a;
    let p = e[o + 1];
    o = s ? rt(p) : Ot(p);
  }
  if (t !== null) {
    let u = i ? t.residualClasses : t.residualStyles;
    u != null && (a = mo(u, r));
  }
  return a;
}
function Ar(e) {
  return e !== void 0;
}
function Wm(e, t) {
  return (
    e == null ||
      e === "" ||
      (typeof t == "string"
        ? (e = e + t)
        : typeof e == "object" && (e = W(un(e)))),
    e
  );
}
function Il(e, t) {
  return (e.flags & (t ? 8 : 16)) !== 0;
}
function w_(e, t) {
  it("NgControlFlow");
  let n = x(),
    r = Rt(),
    o = n[r] !== Me ? n[r] : -1,
    i = o !== -1 ? Wa(n, ne + o) : void 0,
    s = 0;
  if (Le(n, r, e)) {
    let a = C(null);
    try {
      if ((i !== void 0 && ig(i, s), e !== -1)) {
        let u = ne + e,
          c = Wa(n, u),
          l = qm(n[D], u),
          d = Cr(c, l.tView.ssrId),
          h = ns(n, l, t, { dehydratedView: d });
        rs(c, h, s, Er(l, d));
      }
    } finally {
      C(a);
    }
  } else if (i !== void 0) {
    let a = og(i, s);
    a !== void 0 && (a[ee] = t);
  }
}
function Wa(e, t) {
  return e[t];
}
function qm(e, t) {
  return Oi(e, t);
}
function Zm(e, t, n, r, o, i) {
  let s = t.consts,
    a = lr(s, o),
    u = cn(t, e, 2, r, a);
  return (
    $c(t, n, u, lr(s, i)),
    u.attrs !== null && ri(u, u.attrs, !1),
    u.mergedAttrs !== null && ri(u, u.mergedAttrs, !0),
    t.queries !== null && t.queries.elementStart(t, u),
    u
  );
}
function El(e, t, n, r) {
  let o = x(),
    i = L(),
    s = ne + e,
    a = o[R],
    u = i.firstCreatePass ? Zm(s, i, o, t, n, r) : i.data[s],
    c = Qm(i, o, u, a, t, e);
  o[s] = c;
  let l = Ai(u);
  return (
    sn(u, !0),
    Oc(a, c, u),
    !pm(u) && ji() && Qi(i, o, c, u),
    ih() === 0 && tt(c, o),
    sh(),
    l && (jc(i, o, u), Lc(i, u, o)),
    r !== null && Vc(o, u),
    El
  );
}
function wl() {
  let e = $();
  Hu() ? Uu() : ((e = e.parent), sn(e, !1));
  let t = e;
  uh(t) && ch(), ah();
  let n = L();
  return (
    n.firstCreatePass && (Bi(n, e), xu(e) && n.queries.elementEnd(e)),
    t.classesWithoutHost != null &&
      Eh(t) &&
      mi(n, t, x(), t.classesWithoutHost, !0),
    t.stylesWithoutHost != null &&
      wh(t) &&
      mi(n, t, x(), t.stylesWithoutHost, !1),
    wl
  );
}
function Ym(e, t, n, r) {
  return El(e, t, n, r), wl(), Ym;
}
var Qm = (e, t, n, r, o, i) => (Vi(!0), wc(r, o, yh()));
function C_() {
  return x();
}
function Km(e, t, n) {
  let r = x(),
    o = Rt();
  if (Le(r, o, t)) {
    let i = L(),
      s = Br();
    Xi(i, s, r, e, t, r[R], n, !0);
  }
  return Km;
}
function Jm(e, t, n) {
  let r = x(),
    o = Rt();
  if (Le(r, o, t)) {
    let i = L(),
      s = Br(),
      a = Ri(i.data),
      u = Zc(a, s, r);
    Xi(i, s, r, e, t, u, n, !0);
  }
  return Jm;
}
var Or = "en-US";
var Xm = Or;
function ey(e) {
  typeof e == "string" && (Xm = e.toLowerCase().replace(/_/g, "-"));
}
var ty = (e, t, n) => {};
function ny(e, t, n, r) {
  let o = x(),
    i = L(),
    s = $();
  return Cl(i, o, o[R], s, e, t, r), ny;
}
function ry(e, t) {
  let n = $(),
    r = x(),
    o = L(),
    i = Ri(o.data),
    s = Zc(i, n, r);
  return Cl(o, r, s, n, e, t), ry;
}
function oy(e, t, n, r) {
  let o = e.cleanup;
  if (o != null)
    for (let i = 0; i < o.length - 1; i += 2) {
      let s = o[i];
      if (s === n && o[i + 1] === r) {
        let a = t[ar],
          u = o[i + 2];
        return a.length > u ? a[u] : null;
      }
      typeof s == "string" && (i += 2);
    }
  return null;
}
function Cl(e, t, n, r, o, i, s) {
  let a = Ai(r),
    c = e.firstCreatePass && qc(e),
    l = t[ee],
    d = Wc(t),
    h = !0;
  if (r.type & 3 || s) {
    let S = re(r, t),
      j = s ? s(S) : S,
      O = d.length,
      K = s ? (oe) => s(ye(oe[r.index])) : r.index,
      Ie = null;
    if ((!s && a && (Ie = oy(e, t, o, r.index)), Ie !== null)) {
      let oe = Ie.__ngLastListenerFn__ || Ie;
      (oe.__ngNextListenerFn__ = i), (Ie.__ngLastListenerFn__ = i), (h = !1);
    } else {
      (i = Za(r, t, l, i)), ty(S, o, i);
      let oe = n.listen(j, o, i);
      d.push(i, oe), c && c.push(o, K, O, O + 1);
    }
  } else i = Za(r, t, l, i);
  let f = r.outputs,
    p;
  if (h && f !== null && (p = f[o])) {
    let S = p.length;
    if (S)
      for (let j = 0; j < S; j += 2) {
        let O = p[j],
          K = p[j + 1],
          at = t[O][K].subscribe(i),
          Y = d.length;
        d.push(i, at), c && c.push(o, r.index, Y, -(Y + 1));
      }
  }
}
function qa(e, t, n, r) {
  let o = C(null);
  try {
    return pe(6, t, n), n(r) !== !1;
  } catch (i) {
    return Yc(e, i), !1;
  } finally {
    pe(7, t, n), C(o);
  }
}
function Za(e, t, n, r) {
  return function o(i) {
    if (i === Function) return r;
    let s = e.componentOffset > -1 ? ke(e.index, t) : t;
    os(s, 5);
    let a = qa(t, n, r, i),
      u = o.__ngNextListenerFn__;
    for (; u; ) (a = qa(t, n, u, i) && a), (u = u.__ngNextListenerFn__);
    return a;
  };
}
function b_(e = 1) {
  return mh(e);
}
function iy(e, t) {
  let n = null,
    r = _f(e);
  for (let o = 0; o < t.length; o++) {
    let i = t[o];
    if (i === "*") {
      n = o;
      continue;
    }
    if (r === null ? hu(e, i, !0) : Sf(r, i)) return o;
  }
  return n;
}
function __(e) {
  let t = x()[te][Z];
  if (!t.projection) {
    let n = e ? e.length : 1,
      r = (t.projection = mf(n, null)),
      o = r.slice(),
      i = t.child;
    for (; i !== null; ) {
      if (i.type !== 128) {
        let s = e ? iy(i, e) : 0;
        s !== null &&
          (o[s] ? (o[s].projectionNext = i) : (r[s] = i), (o[s] = i));
      }
      i = i.next;
    }
  }
}
function M_(e, t = 0, n, r, o, i) {
  let s = x(),
    a = L(),
    u = r ? e + 1 : null;
  u !== null && dl(s, a, u, r, o, i, null, n);
  let c = cn(a, ne + e, 16, null, n || null);
  c.projection === null && (c.projection = t), Uu();
  let d = !s[Xt] || Bu();
  s[te][Z].projection[c.projection] === null && u !== null
    ? sy(s, a, u)
    : d && (c.flags & 32) !== 32 && _p(a, s, c);
}
function sy(e, t, n) {
  let r = ne + n,
    o = t.data[r],
    i = e[r],
    s = Cr(i, o.tView.ssrId),
    a = ns(e, o, void 0, { dehydratedView: s });
  rs(i, a, 0, Er(o, s));
}
function x_(e, t, n, r) {
  qg(e, t, n, r);
}
function S_(e, t, n) {
  Wg(e, t, n);
}
function T_(e) {
  let t = x(),
    n = L(),
    r = Wu();
  Pi(r + 1);
  let o = ss(n, r);
  if (e.dirty && th(t) === ((o.metadata.flags & 2) === 2)) {
    if (o.matches === null) e.reset([]);
    else {
      let i = Qg(t, r);
      e.reset(i, Gh), e.notifyOnChanges();
    }
    return !0;
  }
  return !1;
}
function N_() {
  return Gg(x(), Wu());
}
function A_(e, t = "") {
  let n = x(),
    r = L(),
    o = e + ne,
    i = r.firstCreatePass ? cn(r, o, 1, t, null) : r.data[o],
    s = ay(r, n, i, t, e);
  (n[o] = s), ji() && Qi(r, n, s, i), sn(i, !1);
}
var ay = (e, t, n, r, o) => (Vi(!0), fp(t[R], r));
function uy(e) {
  return bl("", e, ""), uy;
}
function bl(e, t, n) {
  let r = x(),
    o = bm(r, e, t, n);
  return o !== Me && eg(r, ot(), o), bl;
}
function cy(e, t, n) {
  let r = L();
  if (r.firstCreatePass) {
    let o = be(e);
    yi(n, r.data, r.blueprint, o, !0), yi(t, r.data, r.blueprint, o, !1);
  }
}
function yi(e, t, n, r, o) {
  if (((e = U(e)), Array.isArray(e)))
    for (let i = 0; i < e.length; i++) yi(e[i], t, n, r, o);
  else {
    let i = L(),
      s = x(),
      a = $(),
      u = Mt(e) ? e : U(e.provide),
      c = Cu(e),
      l = a.providerIndexes & 1048575,
      d = a.directiveStart,
      h = a.providerIndexes >> 20;
    if (Mt(e) || !e.multi) {
      let f = new Je(c, o, Ur),
        p = xo(u, t, o ? l : l + h, d);
      p === -1
        ? (Uo(hr(a, s), i, u),
          Mo(i, e, t.length),
          t.push(u),
          a.directiveStart++,
          a.directiveEnd++,
          o && (a.providerIndexes += 1048576),
          n.push(f),
          s.push(f))
        : ((n[p] = f), (s[p] = f));
    } else {
      let f = xo(u, t, l + h, d),
        p = xo(u, t, l, l + h),
        S = f >= 0 && n[f],
        j = p >= 0 && n[p];
      if ((o && !j) || (!o && !S)) {
        Uo(hr(a, s), i, u);
        let O = fy(o ? dy : ly, n.length, o, r, c);
        !o && j && (n[p].providerFactory = O),
          Mo(i, e, t.length, 0),
          t.push(u),
          a.directiveStart++,
          a.directiveEnd++,
          o && (a.providerIndexes += 1048576),
          n.push(O),
          s.push(O);
      } else {
        let O = _l(n[o ? p : f], c, !o && r);
        Mo(i, e, f > -1 ? f : p, O);
      }
      !o && r && j && n[p].componentProviders++;
    }
  }
}
function Mo(e, t, n, r) {
  let o = Mt(t),
    i = $f(t);
  if (o || i) {
    let u = (i ? U(t.useClass) : t).prototype.ngOnDestroy;
    if (u) {
      let c = e.destroyHooks || (e.destroyHooks = []);
      if (!o && t.multi) {
        let l = c.indexOf(n);
        l === -1 ? c.push(n, [r, u]) : c[l + 1].push(r, u);
      } else c.push(n, u);
    }
  }
}
function _l(e, t, n) {
  return n && e.componentProviders++, e.multi.push(t) - 1;
}
function xo(e, t, n, r) {
  for (let o = n; o < r; o++) if (t[o] === e) return o;
  return -1;
}
function ly(e, t, n, r) {
  return Di(this.multi, []);
}
function dy(e, t, n, r) {
  let o = this.multi,
    i;
  if (this.providerFactory) {
    let s = this.providerFactory.componentProviders,
      a = Xe(n, n[D], this.providerFactory.index, r);
    (i = a.slice(0, s)), Di(o, i);
    for (let u = s; u < a.length; u++) i.push(a[u]);
  } else (i = []), Di(o, i);
  return i;
}
function Di(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    t.push(r());
  }
  return t;
}
function fy(e, t, n, r, o) {
  let i = new Je(e, n, Ur);
  return (
    (i.multi = []),
    (i.index = t),
    (i.componentProviders = 0),
    _l(i, o, r && !n),
    i
  );
}
function O_(e, t = []) {
  return (n) => {
    n.providersResolver = (r, o) => cy(r, o ? o(e) : e, t);
  };
}
var hy = (() => {
  let t = class t {
    constructor(r) {
      (this._injector = r), (this.cachedInjectors = new Map());
    }
    getOrCreateStandaloneInjector(r) {
      if (!r.standalone) return null;
      if (!this.cachedInjectors.has(r)) {
        let o = vu(!1, r.type),
          i =
            o.length > 0
              ? hm([o], this._injector, `Standalone[${r.type.name}]`)
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
  t.ɵprov = N({
    token: t,
    providedIn: "environment",
    factory: () => new t(F(Re)),
  });
  let e = t;
  return e;
})();
function F_(e) {
  it("NgStandalone"),
    (e.getStandaloneInjector = (t) =>
      t.get(hy).getOrCreateStandaloneInjector(e));
}
var Zn = null;
function py(e) {
  (Zn !== null &&
    (e.defaultEncapsulation !== Zn.defaultEncapsulation ||
      e.preserveWhitespaces !== Zn.preserveWhitespaces)) ||
    (Zn = e);
}
var R_ = (() => {
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
    (t.ɵprov = N({ token: t, factory: t.ɵfac, providedIn: "platform" }));
  let e = t;
  return e;
})();
var gy = new M(""),
  my = new M(""),
  P_ = (() => {
    let t = class t {
      constructor(r, o, i) {
        (this._ngZone = r),
          (this.registry = o),
          (this._isZoneStable = !0),
          (this._callbacks = []),
          (this.taskTrackingZone = null),
          as || (Dy(i), i.addToWindow(o)),
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
                V.assertNotInAngularZone(),
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
      return new (o || t)(F(V), F(yy), F(my));
    }),
      (t.ɵprov = N({ token: t, factory: t.ɵfac }));
    let e = t;
    return e;
  })(),
  yy = (() => {
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
        return as?.findTestabilityInTree(this, r, o) ?? null;
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = N({ token: t, factory: t.ɵfac, providedIn: "platform" }));
    let e = t;
    return e;
  })();
function Dy(e) {
  as = e;
}
var as;
function us(e) {
  return !!e && typeof e.then == "function";
}
function Ml(e) {
  return !!e && typeof e.subscribe == "function";
}
var vy = new M(""),
  xl = (() => {
    let t = class t {
      constructor() {
        (this.initialized = !1),
          (this.done = !1),
          (this.donePromise = new Promise((r, o) => {
            (this.resolve = r), (this.reject = o);
          })),
          (this.appInits = I(vy, { optional: !0 }) ?? []);
      }
      runInitializers() {
        if (this.initialized) return;
        let r = [];
        for (let i of this.appInits) {
          let s = i();
          if (us(s)) r.push(s);
          else if (Ml(s)) {
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
      (t.ɵprov = N({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })(),
  Iy = new M("");
function Ey() {
  Rs(() => {
    throw new _(600, !1);
  });
}
function wy(e) {
  return e.isBoundToModule;
}
var Cy = 10;
function by(e, t, n) {
  try {
    let r = n();
    return us(r)
      ? r.catch((o) => {
          throw (t.runOutsideAngular(() => e.handleError(o)), o);
        })
      : r;
  } catch (r) {
    throw (t.runOutsideAngular(() => e.handleError(r)), r);
  }
}
function Sl(e, t) {
  return Array.isArray(t) ? t.reduce(Sl, e) : Q(Q({}, e), t);
}
var ln = (() => {
  let t = class t {
    constructor() {
      (this._bootstrapListeners = []),
        (this._runningTick = !1),
        (this._destroyed = !1),
        (this._destroyListeners = []),
        (this._views = []),
        (this.internalErrorHandler = I(Uh)),
        (this.afterRenderManager = I(fl)),
        (this.zonelessEnabled = I(nl)),
        (this.dirtyFlags = 0),
        (this.deferredDirtyFlags = 0),
        (this.externalTestViews = new Set()),
        (this.beforeRender = new Se()),
        (this.afterTick = new Se()),
        (this.componentTypes = []),
        (this.components = []),
        (this.isStable = I(an).hasPendingTasks.pipe(Ee((r) => !r))),
        (this._injector = I(Re));
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
      let i = r instanceof br;
      if (!this._injector.get(xl).done) {
        let f = !i && Pf(r),
          p = !1;
        throw new _(405, p);
      }
      let a;
      i ? (a = r) : (a = this._injector.get(Nt).resolveComponentFactory(r)),
        this.componentTypes.push(a.componentType);
      let u = wy(a) ? void 0 : this._injector.get(Pe),
        c = o || a.selector,
        l = a.create(De.NULL, [], c, u),
        d = l.location.nativeElement,
        h = l.injector.get(gy, null);
      return (
        h?.registerApplication(d),
        l.onDestroy(() => {
          this.detachView(l.hostView),
            tr(this.components, l),
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
      if (this._runningTick) throw new _(101, !1);
      let r = C(null);
      try {
        (this._runningTick = !0), this.synchronize();
      } catch (o) {
        this.internalErrorHandler(o);
      } finally {
        (this._runningTick = !1), C(r), this.afterTick.next();
      }
    }
    synchronize() {
      let r = null;
      this._injector.destroyed ||
        (r = this._injector.get(_r, null, { optional: !0 })),
        (this.dirtyFlags |= this.deferredDirtyFlags),
        (this.deferredDirtyFlags = 0);
      let o = 0;
      for (; this.dirtyFlags !== 0 && o++ < Cy; ) this.synchronizeOnce(r);
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
          _y(i, s, o, this.zonelessEnabled);
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
      if (this.allViews.some(({ _lView: r }) => jr(r))) {
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
      tr(this._views, o), o.detachFromAppRef();
    }
    _loadComponent(r) {
      this.attachView(r.hostView), this.tick(), this.components.push(r);
      let o = this._injector.get(Iy, []);
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
        this._destroyListeners.push(r), () => tr(this._destroyListeners, r)
      );
    }
    destroy() {
      if (this._destroyed) throw new _(406, !1);
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
    (t.ɵprov = N({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let e = t;
  return e;
})();
function tr(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function _y(e, t, n, r) {
  if (!n && !jr(e)) return;
  Jc(e, t, n && !r ? 0 : 1);
}
var vi = class {
    constructor(t, n) {
      (this.ngModuleFactory = t), (this.componentFactories = n);
    }
  },
  k_ = (() => {
    let t = class t {
      compileModuleSync(r) {
        return new Nr(r);
      }
      compileModuleAsync(r) {
        return Promise.resolve(this.compileModuleSync(r));
      }
      compileModuleAndAllComponentsSync(r) {
        let o = this.compileModuleSync(r),
          i = mu(r),
          s = Ec(i.declarations).reduce((a, u) => {
            let c = Fe(u);
            return c && a.push(new At(c)), a;
          }, []);
        return new vi(o, s);
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
      (t.ɵprov = N({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })(),
  My = new M("");
function xy(e, t, n) {
  let r = new Nr(n);
  return Promise.resolve(r);
}
function Ya(e) {
  for (let t = e.length - 1; t >= 0; t--) if (e[t] !== void 0) return e[t];
}
var Sy = (() => {
  let t = class t {
    constructor() {
      (this.zone = I(V)),
        (this.changeDetectionScheduler = I(Tt)),
        (this.applicationRef = I(ln));
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
    (t.ɵprov = N({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let e = t;
  return e;
})();
function Ty({
  ngZoneFactory: e,
  ignoreChangesOutsideZone: t,
  scheduleInRootZone: n,
}) {
  return (
    (e ??= () => new V(ie(Q({}, Tl()), { scheduleInRootZone: n }))),
    [
      { provide: V, useFactory: e },
      {
        provide: ir,
        multi: !0,
        useFactory: () => {
          let r = I(Sy, { optional: !0 });
          return () => r.initialize();
        },
      },
      {
        provide: ir,
        multi: !0,
        useFactory: () => {
          let r = I(Ny);
          return () => {
            r.initialize();
          };
        },
      },
      t === !0 ? { provide: rl, useValue: !0 } : [],
      { provide: ol, useValue: n ?? lc },
    ]
  );
}
function Tl(e) {
  return {
    enableLongStackTrace: !1,
    shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1,
    shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1,
  };
}
var Ny = (() => {
  let t = class t {
    constructor() {
      (this.subscription = new P()),
        (this.initialized = !1),
        (this.zone = I(V)),
        (this.pendingTasks = I(an));
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
              V.assertNotInAngularZone(),
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
            V.assertInAngularZone(), (r ??= this.pendingTasks.add());
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
    (t.ɵprov = N({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let e = t;
  return e;
})();
var Ay = (() => {
  let t = class t {
    constructor() {
      (this.appRef = I(ln)),
        (this.taskService = I(an)),
        (this.ngZone = I(V)),
        (this.zonelessEnabled = I(nl)),
        (this.disableScheduling = I(rl, { optional: !0 }) ?? !1),
        (this.zoneIsDefined = typeof Zone < "u" && !!Zone.root.run),
        (this.schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }]),
        (this.subscriptions = new P()),
        (this.angularZoneId = this.zoneIsDefined
          ? this.ngZone._inner?.get(gr)
          : null),
        (this.scheduleInRootZone =
          !this.zonelessEnabled &&
          this.zoneIsDefined &&
          (I(ol, { optional: !0 }) ?? !1)),
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
          (this.ngZone instanceof mr || !this.zoneIsDefined));
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
      let o = this.useMicrotaskScheduler ? Oa : dc;
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
          Zone.current.get(gr + this.angularZoneId))
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
        Oa(() => {
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
    (t.ɵprov = N({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let e = t;
  return e;
})();
function Oy() {
  return (typeof $localize < "u" && $localize.locale) || Or;
}
var cs = new M("", {
  providedIn: "root",
  factory: () => I(cs, w.Optional | w.SkipSelf) || Oy(),
});
var ls = new M("");
function Yn(e) {
  return !!e.platformInjector;
}
function Fy(e) {
  let t = Yn(e) ? e.r3Injector : e.moduleRef.injector,
    n = t.get(V);
  return n.run(() => {
    Yn(e)
      ? e.r3Injector.resolveInjectorInitializers()
      : e.moduleRef.resolveInjectorInitializers();
    let r = t.get(et, null),
      o;
    if (
      (n.runOutsideAngular(() => {
        o = n.onError.subscribe({
          next: (i) => {
            r.handleError(i);
          },
        });
      }),
      Yn(e))
    ) {
      let i = () => t.destroy(),
        s = e.platformInjector.get(ls);
      s.add(i),
        t.onDestroy(() => {
          o.unsubscribe(), s.delete(i);
        });
    } else
      e.moduleRef.onDestroy(() => {
        tr(e.allPlatformModules, e.moduleRef), o.unsubscribe();
      });
    return by(r, n, () => {
      let i = t.get(xl);
      return (
        i.runInitializers(),
        i.donePromise.then(() => {
          let s = t.get(cs, Or);
          if ((ey(s || Or), Yn(e))) {
            let a = t.get(ln);
            return (
              e.rootComponent !== void 0 && a.bootstrap(e.rootComponent), a
            );
          } else return Ry(e.moduleRef, e.allPlatformModules), e.moduleRef;
        })
      );
    });
  });
}
function Ry(e, t) {
  let n = e.injector.get(ln);
  if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach((r) => n.bootstrap(r));
  else if (e.instance.ngDoBootstrap) e.instance.ngDoBootstrap(n);
  else throw new _(-403, !1);
  t.push(e);
}
var Nl = (() => {
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
            Hh(
              o?.ngZone,
              ie(
                Q(
                  {},
                  Tl({
                    eventCoalescing: o?.ngZoneEventCoalescing,
                    runCoalescing: o?.ngZoneRunCoalescing,
                  }),
                ),
                { scheduleInRootZone: i },
              ),
            ),
          a = o?.ignoreChangesOutsideZone,
          u = [
            Ty({ ngZoneFactory: s, ignoreChangesOutsideZone: a }),
            { provide: Tt, useExisting: Ay },
          ],
          c = fm(r.moduleType, this.injector, u);
        return Fy({ moduleRef: c, allPlatformModules: this._modules });
      }
      bootstrapModule(r, o = []) {
        let i = Sl({}, o);
        return xy(this.injector, i, r).then((s) =>
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
        if (this._destroyed) throw new _(404, !1);
        this._modules.slice().forEach((o) => o.destroy()),
          this._destroyListeners.forEach((o) => o());
        let r = this._injector.get(ls, null);
        r && (r.forEach((o) => o()), r.clear()), (this._destroyed = !0);
      }
      get destroyed() {
        return this._destroyed;
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(F(De));
    }),
      (t.ɵprov = N({ token: t, factory: t.ɵfac, providedIn: "platform" }));
    let e = t;
    return e;
  })(),
  Zt = null,
  Al = new M("");
function Py(e) {
  if (Zt && !Zt.get(Al, !1)) throw new _(400, !1);
  Ey(), (Zt = e);
  let t = e.get(Nl);
  return Vy(e), t;
}
function ky(e, t, n = []) {
  let r = `Platform: ${t}`,
    o = new M(r);
  return (i = []) => {
    let s = Ol();
    if (!s || s.injector.get(Al, !1)) {
      let a = [...n, ...i, { provide: o, useValue: !0 }];
      e ? e(a) : Py(Ly(a, r));
    }
    return jy(o);
  };
}
function Ly(e = [], t) {
  return De.create({
    name: t,
    providers: [
      { provide: wu, useValue: "platform" },
      { provide: ls, useValue: new Set([() => (Zt = null)]) },
      ...e,
    ],
  });
}
function jy(e) {
  let t = Ol();
  if (!t) throw new _(401, !1);
  return t;
}
function Ol() {
  return Zt?.get(Nl) ?? null;
}
function Vy(e) {
  e.get(Jh, null)?.forEach((n) => n());
}
var ds = (() => {
  let t = class t {};
  t.__NG_ELEMENT_ID__ = By;
  let e = t;
  return e;
})();
function By(e) {
  return $y($(), x(), (e & 16) === 16);
}
function $y(e, t, n) {
  if (Lr(e) && !n) {
    let r = ke(e.index, t);
    return new nt(r, r);
  } else if (e.type & 175) {
    let r = t[te];
    return new nt(r, t);
  }
  return null;
}
var L_ = ky(null, "core", []),
  j_ = (() => {
    let t = class t {
      constructor(r) {}
    };
    (t.ɵfac = function (o) {
      return new (o || t)(F(ln));
    }),
      (t.ɵmod = xi({ type: t })),
      (t.ɵinj = wi({}));
    let e = t;
    return e;
  })();
var V_ = new M("");
function Hy(e) {
  return typeof e == "boolean" ? e : e != null && e !== "false";
}
function Uy(e, t = NaN) {
  return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t;
}
function B_(e, t) {
  it("NgSignals");
  let n = As(e);
  return t?.equal && (n[de].equal = t.equal), n;
}
function zy(e) {
  let t = C(null);
  try {
    return e();
  } finally {
    C(t);
  }
}
var Gy = new M("", { providedIn: "root", factory: () => I(Wy) }),
  Wy = (() => {
    let t = class t {};
    t.ɵprov = N({ token: t, providedIn: "root", factory: () => new Ii() });
    let e = t;
    return e;
  })(),
  Ii = class {
    constructor() {
      (this.queuedEffectCount = 0),
        (this.queues = new Map()),
        (this.pendingTasks = I(an)),
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
  Ei = class {
    constructor(t, n, r, o, i, s) {
      (this.scheduler = t),
        (this.effectFn = n),
        (this.creationZone = r),
        (this.injector = i),
        (this.watcher = js(
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
        this.injector.get(et, null, { optional: !0 })?.handleError(n);
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
function qy(e, t) {
  it("NgSignals"), !t?.injector && _u(qy);
  let n = t?.injector ?? I(De),
    r = t?.manualCleanup !== !0 ? n.get($r) : null,
    o = new Ei(
      n.get(Gy),
      e,
      typeof Zone > "u" ? null : Zone.current,
      r,
      n,
      t?.allowSignalWrites ?? !1,
    ),
    i = n.get(ds, null, { optional: !0 });
  return (
    !i || !(i._lView[m] & 8)
      ? o.watcher.notify()
      : (i._lView[Kn] ??= []).push(o.watcher.notify),
    o
  );
}
function $_(e) {
  let t = Fe(e);
  if (!t) return null;
  let n = new At(t);
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
var Ll = null;
function hs() {
  return Ll;
}
function gM(e) {
  Ll ??= e;
}
var Fl = class {};
var ms = new M(""),
  ys = (() => {
    let t = class t {
      historyGo(r) {
        throw new Error("");
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = N({ token: t, factory: () => I(Yy), providedIn: "platform" }));
    let e = t;
    return e;
  })(),
  mM = new M(""),
  Yy = (() => {
    let t = class t extends ys {
      constructor() {
        super(),
          (this._doc = I(ms)),
          (this._location = window.location),
          (this._history = window.history);
      }
      getBaseHrefFromDOM() {
        return hs().getBaseHref(this._doc);
      }
      onPopState(r) {
        let o = hs().getGlobalEventTarget(this._doc, "window");
        return (
          o.addEventListener("popstate", r, !1),
          () => o.removeEventListener("popstate", r)
        );
      }
      onHashChange(r) {
        let o = hs().getGlobalEventTarget(this._doc, "window");
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
      (t.ɵprov = N({
        token: t,
        factory: () => new t(),
        providedIn: "platform",
      }));
    let e = t;
    return e;
  })();
function Ds(e, t) {
  if (e.length == 0) return t;
  if (t.length == 0) return e;
  let n = 0;
  return (
    e.endsWith("/") && n++,
    t.startsWith("/") && n++,
    n == 2 ? e + t.substring(1) : n == 1 ? e + t : e + "/" + t
  );
}
function Rl(e) {
  let t = e.match(/#|\?|$/),
    n = (t && t.index) || e.length,
    r = n - (e[n - 1] === "/" ? 1 : 0);
  return e.slice(0, r) + e.slice(n);
}
function xe(e) {
  return e && e[0] !== "?" ? "?" + e : e;
}
var qr = (() => {
    let t = class t {
      historyGo(r) {
        throw new Error("");
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = N({ token: t, factory: () => I(Qy), providedIn: "root" }));
    let e = t;
    return e;
  })(),
  jl = new M(""),
  Qy = (() => {
    let t = class t extends qr {
      constructor(r, o) {
        super(),
          (this._platformLocation = r),
          (this._removeListenerFns = []),
          (this._baseHref =
            o ??
            this._platformLocation.getBaseHrefFromDOM() ??
            I(ms).location?.origin ??
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
        return Ds(this._baseHref, r);
      }
      path(r = !1) {
        let o =
            this._platformLocation.pathname + xe(this._platformLocation.search),
          i = this._platformLocation.hash;
        return i && r ? `${o}${i}` : o;
      }
      pushState(r, o, i, s) {
        let a = this.prepareExternalUrl(i + xe(s));
        this._platformLocation.pushState(r, o, a);
      }
      replaceState(r, o, i, s) {
        let a = this.prepareExternalUrl(i + xe(s));
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
      return new (o || t)(F(ys), F(jl, 8));
    }),
      (t.ɵprov = N({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })(),
  yM = (() => {
    let t = class t extends qr {
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
        let o = Ds(this._baseHref, r);
        return o.length > 0 ? "#" + o : o;
      }
      pushState(r, o, i, s) {
        let a = this.prepareExternalUrl(i + xe(s));
        a.length == 0 && (a = this._platformLocation.pathname),
          this._platformLocation.pushState(r, o, a);
      }
      replaceState(r, o, i, s) {
        let a = this.prepareExternalUrl(i + xe(s));
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
      return new (o || t)(F(ys), F(jl, 8));
    }),
      (t.ɵprov = N({ token: t, factory: t.ɵfac }));
    let e = t;
    return e;
  })(),
  Ky = (() => {
    let t = class t {
      constructor(r) {
        (this._subject = new ce()),
          (this._urlChangeListeners = []),
          (this._urlChangeSubscription = null),
          (this._locationStrategy = r);
        let o = this._locationStrategy.getBaseHref();
        (this._basePath = eD(Rl(Pl(o)))),
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
        return this.path() == this.normalize(r + xe(o));
      }
      normalize(r) {
        return t.stripTrailingSlash(Xy(this._basePath, Pl(r)));
      }
      prepareExternalUrl(r) {
        return (
          r && r[0] !== "/" && (r = "/" + r),
          this._locationStrategy.prepareExternalUrl(r)
        );
      }
      go(r, o = "", i = null) {
        this._locationStrategy.pushState(i, "", r, o),
          this._notifyUrlChangeListeners(this.prepareExternalUrl(r + xe(o)), i);
      }
      replaceState(r, o = "", i = null) {
        this._locationStrategy.replaceState(i, "", r, o),
          this._notifyUrlChangeListeners(this.prepareExternalUrl(r + xe(o)), i);
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
    (t.normalizeQueryParams = xe),
      (t.joinWithSlash = Ds),
      (t.stripTrailingSlash = Rl),
      (t.ɵfac = function (o) {
        return new (o || t)(F(qr));
      }),
      (t.ɵprov = N({ token: t, factory: () => Jy(), providedIn: "root" }));
    let e = t;
    return e;
  })();
function Jy() {
  return new Ky(F(qr));
}
function Xy(e, t) {
  if (!e || !t.startsWith(e)) return t;
  let n = t.substring(e.length);
  return n === "" || ["/", ";", "?", "#"].includes(n[0]) ? n : t;
}
function Pl(e) {
  return e.replace(/\/index.html$/, "");
}
function eD(e) {
  if (new RegExp("^(https?:)?//").test(e)) {
    let [, n] = e.split(/\/\/[^\/]+/);
    return n;
  }
  return e;
}
function DM(e, t) {
  t = encodeURIComponent(t);
  for (let n of e.split(";")) {
    let r = n.indexOf("="),
      [o, i] = r == -1 ? [n, ""] : [n.slice(0, r), n.slice(r + 1)];
    if (o.trim() === t) return decodeURIComponent(i);
  }
  return null;
}
var vM = (() => {
    let t = class t {};
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵmod = xi({ type: t })),
      (t.ɵinj = wi({}));
    let e = t;
    return e;
  })(),
  tD = "browser",
  nD = "server";
function rD(e) {
  return e === tD;
}
function IM(e) {
  return e === nD;
}
var EM = (() => {
    let t = class t {};
    t.ɵprov = N({
      token: t,
      providedIn: "root",
      factory: () => (rD(I(zi)) ? new ps(I(ms), window) : new gs()),
    });
    let e = t;
    return e;
  })(),
  ps = class {
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
      let n = oD(this.document, t);
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
function oD(e, t) {
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
var gs = class {
    setOffset(t) {}
    getScrollPosition() {
      return [0, 0];
    }
    scrollToPosition(t) {}
    scrollToAnchor(t) {}
    setHistoryScrollRestoration(t) {}
  },
  kl = class {};
var st = (function (e) {
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
  })(st || {}),
  bM = "*";
function _M(e, t) {
  return { type: st.Trigger, name: e, definitions: t, options: {} };
}
function MM(e, t = null) {
  return { type: st.Animate, styles: t, timings: e };
}
function xM(e, t = null) {
  return { type: st.Sequence, steps: e, options: t };
}
function SM(e) {
  return { type: st.Style, styles: e, offset: null };
}
function TM(e, t, n) {
  return { type: st.State, name: e, styles: t, options: n };
}
function NM(e, t, n = null) {
  return { type: st.Transition, expr: e, animation: t, options: n };
}
var Vl = class {
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
  Bl = class {
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
  AM = "!";
export {
  Q as a,
  ie as b,
  iD as c,
  P as d,
  td as e,
  b as f,
  uo as g,
  co as h,
  Se as i,
  $t as j,
  $e as k,
  he as l,
  dd as m,
  fd as n,
  hd as o,
  Ue as p,
  Ee as q,
  Ed as r,
  we as s,
  zt as t,
  Hn as u,
  Cd as v,
  bd as w,
  ho as x,
  Ad as y,
  ze as z,
  Od as A,
  fa as B,
  Fd as C,
  Rd as D,
  Gt as E,
  po as F,
  Pd as G,
  kd as H,
  Vd as I,
  pa as J,
  go as K,
  Bd as L,
  $d as M,
  Hd as N,
  Ud as O,
  zd as P,
  Gd as Q,
  Wd as R,
  _ as S,
  So as T,
  Xa as U,
  N as V,
  wi as W,
  Jb as X,
  M as Y,
  w as Z,
  F as _,
  I as $,
  Xb as aa,
  e_ as ba,
  Qt as ca,
  t_ as da,
  xi as ea,
  Rf as fa,
  n_ as ga,
  wu as ha,
  Re as ia,
  r_ as ja,
  Tu as ka,
  o_ as la,
  i_ as ma,
  s_ as na,
  a_ as oa,
  Oh as pa,
  De as qa,
  an as ra,
  ce as sa,
  V as ta,
  et as ua,
  kt as va,
  Zo as wa,
  u_ as xa,
  c_ as ya,
  Jh as za,
  zi as Aa,
  l_ as Ba,
  d_ as Ca,
  f_ as Da,
  h_ as Ea,
  Dr as Fa,
  p_ as Ga,
  Ur as Ha,
  g_ as Ia,
  Tt as Ja,
  _r as Ka,
  il as La,
  Wr as Ma,
  it as Na,
  v_ as Oa,
  I_ as Pa,
  im as Qa,
  dm as Ra,
  li as Sa,
  hm as Ta,
  mm as Ua,
  Et as Va,
  vm as Wa,
  Cm as Xa,
  Pm as Ya,
  gl as Za,
  km as _a,
  E_ as $a,
  w_ as ab,
  El as bb,
  wl as cb,
  Ym as db,
  C_ as eb,
  Km as fb,
  Jm as gb,
  ny as hb,
  ry as ib,
  b_ as jb,
  __ as kb,
  M_ as lb,
  x_ as mb,
  S_ as nb,
  T_ as ob,
  N_ as pb,
  A_ as qb,
  uy as rb,
  O_ as sb,
  F_ as tb,
  R_ as ub,
  gy as vb,
  my as wb,
  P_ as xb,
  yy as yb,
  us as zb,
  vy as Ab,
  Iy as Bb,
  ln as Cb,
  k_ as Db,
  ky as Eb,
  ds as Fb,
  L_ as Gb,
  j_ as Hb,
  V_ as Ib,
  Hy as Jb,
  Uy as Kb,
  B_ as Lb,
  zy as Mb,
  qy as Nb,
  $_ as Ob,
  hs as Pb,
  gM as Qb,
  Fl as Rb,
  ms as Sb,
  mM as Tb,
  qr as Ub,
  Qy as Vb,
  yM as Wb,
  Ky as Xb,
  DM as Yb,
  vM as Zb,
  tD as _b,
  rD as $b,
  IM as ac,
  EM as bc,
  kl as cc,
  st as dc,
  bM as ec,
  _M as fc,
  MM as gc,
  xM as hc,
  SM as ic,
  TM as jc,
  NM as kc,
  Vl as lc,
  Bl as mc,
  AM as nc,
};
