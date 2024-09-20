import {
  $ as C,
  $a as bi,
  $b as ur,
  A as Z,
  Aa as uc,
  Ab as T,
  Ac as Qc,
  B as jo,
  Ba as en,
  Bb as Tc,
  Bc as Yc,
  C as _e,
  Ca as mc,
  Cb as jt,
  Cc as Zc,
  D as ye,
  Da as We,
  Db as Ae,
  Dc as gr,
  E as Xt,
  Ea as mt,
  Eb as Rc,
  Ec as Kc,
  F as Vo,
  Fa as nn,
  Fb as Y,
  Fc as Xc,
  G as Ct,
  Ga as pi,
  Gb as Mc,
  Gc as Yo,
  H as Ji,
  Ha as fi,
  Hb as nt,
  Hc as Jc,
  I as Ue,
  Ia as pc,
  Ib as J,
  Ic as tl,
  J as He,
  Ja as fc,
  Jb as F,
  K as we,
  Ka as gc,
  Kb as qe,
  L as Bo,
  La as bc,
  Lb as ct,
  Lc as br,
  M as ac,
  Ma as vc,
  Mb as pt,
  Mc as Ye,
  N as sc,
  Na as _c,
  Nb as P,
  O as cc,
  Oa as yc,
  Ob as N,
  Oc as ce,
  P as zo,
  Pa as Ot,
  Pb as Qe,
  Pc as Ze,
  Q as ui,
  Qa as wc,
  Qb as g,
  Qc as Ke,
  R as vt,
  Ra as oe,
  Rb as St,
  S as It,
  Sa as xc,
  Sb as Go,
  T as z,
  Ta as Cc,
  Tb as gt,
  U as dt,
  Ua as gi,
  Ub as U,
  V as et,
  Va as rn,
  Vb as Oc,
  W as xe,
  Wa as D,
  Wb as Fc,
  X as Ce,
  Xa as d,
  Xb as lr,
  Y as y,
  Ya as Ge,
  Yb as dr,
  Z as L,
  Za as Lt,
  Zb as Pc,
  _ as lc,
  _a as Ic,
  _b as hr,
  a as b,
  aa as Uo,
  ab as sr,
  ac as qo,
  b as X,
  ba as f,
  bb as cr,
  bc as mr,
  ca as v,
  cb as Wt,
  cc as Qo,
  d as Et,
  da as or,
  db as Ec,
  dc as Nc,
  e as nc,
  ea as Ho,
  eb as $o,
  ec as an,
  f as Nt,
  fa as tn,
  fb as vi,
  fc as pr,
  g as No,
  ga as I,
  gb as it,
  gc as Lc,
  h as Lo,
  ha as j,
  hb as st,
  hc as ot,
  i as w,
  ia as M,
  ib as Dc,
  ic as jc,
  j as kt,
  ja as ar,
  jb as Wo,
  jc as Vc,
  k as Kt,
  ka as dc,
  kb as K,
  kc as Bc,
  l as xt,
  la as Ie,
  lb as Sc,
  lc as H,
  m as x,
  ma as Jt,
  mb as kc,
  mc as ae,
  n as Be,
  na as Mt,
  nb as Dt,
  nc as _i,
  o as ir,
  oa as ht,
  ob as G,
  oc as Gt,
  p as rc,
  pa as ut,
  pb as Q,
  pc as zc,
  q as R,
  qa as mi,
  qb as on,
  qc as Uc,
  r as hi,
  ra as te,
  rb as V,
  rc as fr,
  s as Rt,
  sa as Ee,
  sb as Ac,
  sc as Hc,
  t as Xi,
  ta as at,
  tb as Tt,
  tc as $c,
  u as nr,
  ua as hc,
  ub as ft,
  uc as k,
  v as ze,
  va as O,
  vb as De,
  vc as Wc,
  w as rr,
  wa as S,
  wb as Se,
  wc as sn,
  x as ne,
  xa as $e,
  xb as ke,
  xc as Gc,
  y as oc,
  ya as E,
  yb as u,
  yc as qc,
  z as At,
  za as re,
  zb as m,
  zc as se,
} from "./chunk-C2XUI3RM.js";
var Ko = class {};
var yi = class n {
  constructor(t) {
    (this.normalizedNames = new Map()),
      (this.lazyUpdate = null),
      t
        ? typeof t == "string"
          ? (this.lazyInit = () => {
              (this.headers = new Map()),
                t
                  .split(
                    `
`,
                  )
                  .forEach((r) => {
                    let e = r.indexOf(":");
                    if (e > 0) {
                      let i = r.slice(0, e),
                        o = i.toLowerCase(),
                        a = r.slice(e + 1).trim();
                      this.maybeSetNormalizedName(i, o),
                        this.headers.has(o)
                          ? this.headers.get(o).push(a)
                          : this.headers.set(o, [a]);
                    }
                  });
            })
          : typeof Headers < "u" && t instanceof Headers
            ? ((this.headers = new Map()),
              t.forEach((r, e) => {
                this.setHeaderEntries(e, r);
              }))
            : (this.lazyInit = () => {
                (this.headers = new Map()),
                  Object.entries(t).forEach(([r, e]) => {
                    this.setHeaderEntries(r, e);
                  });
              })
        : (this.headers = new Map());
  }
  has(t) {
    return this.init(), this.headers.has(t.toLowerCase());
  }
  get(t) {
    this.init();
    let r = this.headers.get(t.toLowerCase());
    return r && r.length > 0 ? r[0] : null;
  }
  keys() {
    return this.init(), Array.from(this.normalizedNames.values());
  }
  getAll(t) {
    return this.init(), this.headers.get(t.toLowerCase()) || null;
  }
  append(t, r) {
    return this.clone({ name: t, value: r, op: "a" });
  }
  set(t, r) {
    return this.clone({ name: t, value: r, op: "s" });
  }
  delete(t, r) {
    return this.clone({ name: t, value: r, op: "d" });
  }
  maybeSetNormalizedName(t, r) {
    this.normalizedNames.has(r) || this.normalizedNames.set(r, t);
  }
  init() {
    this.lazyInit &&
      (this.lazyInit instanceof n
        ? this.copyFrom(this.lazyInit)
        : this.lazyInit(),
      (this.lazyInit = null),
      this.lazyUpdate &&
        (this.lazyUpdate.forEach((t) => this.applyUpdate(t)),
        (this.lazyUpdate = null)));
  }
  copyFrom(t) {
    t.init(),
      Array.from(t.headers.keys()).forEach((r) => {
        this.headers.set(r, t.headers.get(r)),
          this.normalizedNames.set(r, t.normalizedNames.get(r));
      });
  }
  clone(t) {
    let r = new n();
    return (
      (r.lazyInit =
        this.lazyInit && this.lazyInit instanceof n ? this.lazyInit : this),
      (r.lazyUpdate = (this.lazyUpdate || []).concat([t])),
      r
    );
  }
  applyUpdate(t) {
    let r = t.name.toLowerCase();
    switch (t.op) {
      case "a":
      case "s":
        let e = t.value;
        if ((typeof e == "string" && (e = [e]), e.length === 0)) return;
        this.maybeSetNormalizedName(t.name, r);
        let i = (t.op === "a" ? this.headers.get(r) : void 0) || [];
        i.push(...e), this.headers.set(r, i);
        break;
      case "d":
        let o = t.value;
        if (!o) this.headers.delete(r), this.normalizedNames.delete(r);
        else {
          let a = this.headers.get(r);
          if (!a) return;
          (a = a.filter((s) => o.indexOf(s) === -1)),
            a.length === 0
              ? (this.headers.delete(r), this.normalizedNames.delete(r))
              : this.headers.set(r, a);
        }
        break;
    }
  }
  setHeaderEntries(t, r) {
    let e = (Array.isArray(r) ? r : [r]).map((o) => o.toString()),
      i = t.toLowerCase();
    this.headers.set(i, e), this.maybeSetNormalizedName(t, i);
  }
  forEach(t) {
    this.init(),
      Array.from(this.normalizedNames.keys()).forEach((r) =>
        t(this.normalizedNames.get(r), this.headers.get(r)),
      );
  }
};
var Xo = class {
  encodeKey(t) {
    return el(t);
  }
  encodeValue(t) {
    return el(t);
  }
  decodeKey(t) {
    return decodeURIComponent(t);
  }
  decodeValue(t) {
    return decodeURIComponent(t);
  }
};
function ou(n, t) {
  let r = new Map();
  return (
    n.length > 0 &&
      n
        .replace(/^\?/, "")
        .split("&")
        .forEach((i) => {
          let o = i.indexOf("="),
            [a, s] =
              o == -1
                ? [t.decodeKey(i), ""]
                : [t.decodeKey(i.slice(0, o)), t.decodeValue(i.slice(o + 1))],
            c = r.get(a) || [];
          c.push(s), r.set(a, c);
        }),
    r
  );
}
var au = /%(\d[a-f0-9])/gi,
  su = {
    40: "@",
    "3A": ":",
    24: "$",
    "2C": ",",
    "3B": ";",
    "3D": "=",
    "3F": "?",
    "2F": "/",
  };
function el(n) {
  return encodeURIComponent(n).replace(au, (t, r) => su[r] ?? t);
}
function vr(n) {
  return `${n}`;
}
var Te = class n {
  constructor(t = {}) {
    if (
      ((this.updates = null),
      (this.cloneFrom = null),
      (this.encoder = t.encoder || new Xo()),
      t.fromString)
    ) {
      if (t.fromObject)
        throw new Error("Cannot specify both fromString and fromObject.");
      this.map = ou(t.fromString, this.encoder);
    } else
      t.fromObject
        ? ((this.map = new Map()),
          Object.keys(t.fromObject).forEach((r) => {
            let e = t.fromObject[r],
              i = Array.isArray(e) ? e.map(vr) : [vr(e)];
            this.map.set(r, i);
          }))
        : (this.map = null);
  }
  has(t) {
    return this.init(), this.map.has(t);
  }
  get(t) {
    this.init();
    let r = this.map.get(t);
    return r ? r[0] : null;
  }
  getAll(t) {
    return this.init(), this.map.get(t) || null;
  }
  keys() {
    return this.init(), Array.from(this.map.keys());
  }
  append(t, r) {
    return this.clone({ param: t, value: r, op: "a" });
  }
  appendAll(t) {
    let r = [];
    return (
      Object.keys(t).forEach((e) => {
        let i = t[e];
        Array.isArray(i)
          ? i.forEach((o) => {
              r.push({ param: e, value: o, op: "a" });
            })
          : r.push({ param: e, value: i, op: "a" });
      }),
      this.clone(r)
    );
  }
  set(t, r) {
    return this.clone({ param: t, value: r, op: "s" });
  }
  delete(t, r) {
    return this.clone({ param: t, value: r, op: "d" });
  }
  toString() {
    return (
      this.init(),
      this.keys()
        .map((t) => {
          let r = this.encoder.encodeKey(t);
          return this.map
            .get(t)
            .map((e) => r + "=" + this.encoder.encodeValue(e))
            .join("&");
        })
        .filter((t) => t !== "")
        .join("&")
    );
  }
  clone(t) {
    let r = new n({ encoder: this.encoder });
    return (
      (r.cloneFrom = this.cloneFrom || this),
      (r.updates = (this.updates || []).concat(t)),
      r
    );
  }
  init() {
    this.map === null && (this.map = new Map()),
      this.cloneFrom !== null &&
        (this.cloneFrom.init(),
        this.cloneFrom
          .keys()
          .forEach((t) => this.map.set(t, this.cloneFrom.map.get(t))),
        this.updates.forEach((t) => {
          switch (t.op) {
            case "a":
            case "s":
              let r = (t.op === "a" ? this.map.get(t.param) : void 0) || [];
              r.push(vr(t.value)), this.map.set(t.param, r);
              break;
            case "d":
              if (t.value !== void 0) {
                let e = this.map.get(t.param) || [],
                  i = e.indexOf(vr(t.value));
                i !== -1 && e.splice(i, 1),
                  e.length > 0
                    ? this.map.set(t.param, e)
                    : this.map.delete(t.param);
              } else {
                this.map.delete(t.param);
                break;
              }
          }
        }),
        (this.cloneFrom = this.updates = null));
  }
};
var Jo = class {
  constructor() {
    this.map = new Map();
  }
  set(t, r) {
    return this.map.set(t, r), this;
  }
  get(t) {
    return (
      this.map.has(t) || this.map.set(t, t.defaultValue()), this.map.get(t)
    );
  }
  delete(t) {
    return this.map.delete(t), this;
  }
  has(t) {
    return this.map.has(t);
  }
  keys() {
    return this.map.keys();
  }
};
function cu(n) {
  switch (n) {
    case "DELETE":
    case "GET":
    case "HEAD":
    case "OPTIONS":
    case "JSONP":
      return !1;
    default:
      return !0;
  }
}
function il(n) {
  return typeof ArrayBuffer < "u" && n instanceof ArrayBuffer;
}
function nl(n) {
  return typeof Blob < "u" && n instanceof Blob;
}
function rl(n) {
  return typeof FormData < "u" && n instanceof FormData;
}
function lu(n) {
  return typeof URLSearchParams < "u" && n instanceof URLSearchParams;
}
var cn = class n {
    constructor(t, r, e, i) {
      (this.url = r),
        (this.body = null),
        (this.reportProgress = !1),
        (this.withCredentials = !1),
        (this.responseType = "json"),
        (this.method = t.toUpperCase());
      let o;
      if (
        (cu(this.method) || i
          ? ((this.body = e !== void 0 ? e : null), (o = i))
          : (o = e),
        o &&
          ((this.reportProgress = !!o.reportProgress),
          (this.withCredentials = !!o.withCredentials),
          o.responseType && (this.responseType = o.responseType),
          o.headers && (this.headers = o.headers),
          o.context && (this.context = o.context),
          o.params && (this.params = o.params),
          (this.transferCache = o.transferCache)),
        (this.headers ??= new yi()),
        (this.context ??= new Jo()),
        !this.params)
      )
        (this.params = new Te()), (this.urlWithParams = r);
      else {
        let a = this.params.toString();
        if (a.length === 0) this.urlWithParams = r;
        else {
          let s = r.indexOf("?"),
            c = s === -1 ? "?" : s < r.length - 1 ? "&" : "";
          this.urlWithParams = r + c + a;
        }
      }
    }
    serializeBody() {
      return this.body === null
        ? null
        : typeof this.body == "string" ||
            il(this.body) ||
            nl(this.body) ||
            rl(this.body) ||
            lu(this.body)
          ? this.body
          : this.body instanceof Te
            ? this.body.toString()
            : typeof this.body == "object" ||
                typeof this.body == "boolean" ||
                Array.isArray(this.body)
              ? JSON.stringify(this.body)
              : this.body.toString();
    }
    detectContentTypeHeader() {
      return this.body === null || rl(this.body)
        ? null
        : nl(this.body)
          ? this.body.type || null
          : il(this.body)
            ? null
            : typeof this.body == "string"
              ? "text/plain"
              : this.body instanceof Te
                ? "application/x-www-form-urlencoded;charset=UTF-8"
                : typeof this.body == "object" ||
                    typeof this.body == "number" ||
                    typeof this.body == "boolean"
                  ? "application/json"
                  : null;
    }
    clone(t = {}) {
      let r = t.method || this.method,
        e = t.url || this.url,
        i = t.responseType || this.responseType,
        o = t.transferCache ?? this.transferCache,
        a = t.body !== void 0 ? t.body : this.body,
        s = t.withCredentials ?? this.withCredentials,
        c = t.reportProgress ?? this.reportProgress,
        l = t.headers || this.headers,
        h = t.params || this.params,
        p = t.context ?? this.context;
      return (
        t.setHeaders !== void 0 &&
          (l = Object.keys(t.setHeaders).reduce(
            (_, A) => _.set(A, t.setHeaders[A]),
            l,
          )),
        t.setParams &&
          (h = Object.keys(t.setParams).reduce(
            (_, A) => _.set(A, t.setParams[A]),
            h,
          )),
        new n(r, e, a, {
          params: h,
          headers: l,
          context: p,
          reportProgress: c,
          responseType: i,
          withCredentials: s,
          transferCache: o,
        })
      );
    }
  },
  ol = (function (n) {
    return (
      (n[(n.Sent = 0)] = "Sent"),
      (n[(n.UploadProgress = 1)] = "UploadProgress"),
      (n[(n.ResponseHeader = 2)] = "ResponseHeader"),
      (n[(n.DownloadProgress = 3)] = "DownloadProgress"),
      (n[(n.Response = 4)] = "Response"),
      (n[(n.User = 5)] = "User"),
      n
    );
  })(ol || {}),
  ta = class {
    constructor(t, r = 200, e = "OK") {
      (this.headers = t.headers || new yi()),
        (this.status = t.status !== void 0 ? t.status : r),
        (this.statusText = t.statusText || e),
        (this.url = t.url || null),
        (this.ok = this.status >= 200 && this.status < 300);
    }
  };
var ea = class n extends ta {
  constructor(t = {}) {
    super(t),
      (this.type = ol.Response),
      (this.body = t.body !== void 0 ? t.body : null);
  }
  clone(t = {}) {
    return new n({
      body: t.body !== void 0 ? t.body : this.body,
      headers: t.headers || this.headers,
      status: t.status !== void 0 ? t.status : this.status,
      statusText: t.statusText || this.statusText,
      url: t.url || this.url || void 0,
    });
  }
};
function Zo(n, t) {
  return {
    body: t,
    headers: n.headers,
    context: n.context,
    observe: n.observe,
    params: n.params,
    reportProgress: n.reportProgress,
    responseType: n.responseType,
    withCredentials: n.withCredentials,
    transferCache: n.transferCache,
  };
}
var al = (() => {
  let t = class t {
    constructor(e) {
      this.handler = e;
    }
    request(e, i, o = {}) {
      let a;
      if (e instanceof cn) a = e;
      else {
        let l;
        o.headers instanceof yi ? (l = o.headers) : (l = new yi(o.headers));
        let h;
        o.params &&
          (o.params instanceof Te
            ? (h = o.params)
            : (h = new Te({ fromObject: o.params }))),
          (a = new cn(e, i, o.body !== void 0 ? o.body : null, {
            headers: l,
            context: o.context,
            params: h,
            reportProgress: o.reportProgress,
            responseType: o.responseType || "json",
            withCredentials: o.withCredentials,
            transferCache: o.transferCache,
          }));
      }
      let s = x(a).pipe(ye((l) => this.handler.handle(l)));
      if (e instanceof cn || o.observe === "events") return s;
      let c = s.pipe(Z((l) => l instanceof ea));
      switch (o.observe || "body") {
        case "body":
          switch (a.responseType) {
            case "arraybuffer":
              return c.pipe(
                R((l) => {
                  if (l.body !== null && !(l.body instanceof ArrayBuffer))
                    throw new Error("Response is not an ArrayBuffer.");
                  return l.body;
                }),
              );
            case "blob":
              return c.pipe(
                R((l) => {
                  if (l.body !== null && !(l.body instanceof Blob))
                    throw new Error("Response is not a Blob.");
                  return l.body;
                }),
              );
            case "text":
              return c.pipe(
                R((l) => {
                  if (l.body !== null && typeof l.body != "string")
                    throw new Error("Response is not a string.");
                  return l.body;
                }),
              );
            case "json":
            default:
              return c.pipe(R((l) => l.body));
          }
        case "response":
          return c;
        default:
          throw new Error(`Unreachable: unhandled observe type ${o.observe}}`);
      }
    }
    delete(e, i = {}) {
      return this.request("DELETE", e, i);
    }
    get(e, i = {}) {
      return this.request("GET", e, i);
    }
    head(e, i = {}) {
      return this.request("HEAD", e, i);
    }
    jsonp(e, i) {
      return this.request("JSONP", e, {
        params: new Te().append(i, "JSONP_CALLBACK"),
        observe: "body",
        responseType: "json",
      });
    }
    options(e, i = {}) {
      return this.request("OPTIONS", e, i);
    }
    patch(e, i, o = {}) {
      return this.request("PATCH", e, Zo(o, i));
    }
    post(e, i, o = {}) {
      return this.request("POST", e, Zo(o, i));
    }
    put(e, i, o = {}) {
      return this.request("PUT", e, Zo(o, i));
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(f(Ko));
  }),
    (t.ɵprov = y({ token: t, factory: t.ɵfac }));
  let n = t;
  return n;
})();
var ra = class extends $c {
    constructor() {
      super(...arguments), (this.supportsDOMEvents = !0);
    }
  },
  oa = class n extends ra {
    static makeCurrent() {
      Hc(new n());
    }
    onAndCancel(t, r, e) {
      return (
        t.addEventListener(r, e),
        () => {
          t.removeEventListener(r, e);
        }
      );
    }
    dispatchEvent(t, r) {
      t.dispatchEvent(r);
    }
    remove(t) {
      t.remove();
    }
    createElement(t, r) {
      return (r = r || this.getDefaultDocument()), r.createElement(t);
    }
    createHtmlDocument() {
      return document.implementation.createHTMLDocument("fakeTitle");
    }
    getDefaultDocument() {
      return document;
    }
    isElementNode(t) {
      return t.nodeType === Node.ELEMENT_NODE;
    }
    isShadowRoot(t) {
      return t instanceof DocumentFragment;
    }
    getGlobalEventTarget(t, r) {
      return r === "window"
        ? window
        : r === "document"
          ? t
          : r === "body"
            ? t.body
            : null;
    }
    getBaseHref(t) {
      let r = uu();
      return r == null ? null : mu(r);
    }
    resetBaseElement() {
      ln = null;
    }
    getUserAgent() {
      return window.navigator.userAgent;
    }
    getCookie(t) {
      return Qc(document.cookie, t);
    }
  },
  ln = null;
function uu() {
  return (
    (ln = ln || document.querySelector("base")),
    ln ? ln.getAttribute("href") : null
  );
}
function mu(n) {
  return new URL(n, document.baseURI).pathname;
}
var aa = class {
    addToWindow(t) {
      (xe.getAngularTestability = (e, i = !0) => {
        let o = t.findTestabilityInTree(e, i);
        if (o == null) throw new et(5103, !1);
        return o;
      }),
        (xe.getAllAngularTestabilities = () => t.getAllTestabilities()),
        (xe.getAllAngularRootElements = () => t.getAllRootElements());
      let r = (e) => {
        let i = xe.getAllAngularTestabilities(),
          o = i.length,
          a = function () {
            o--, o == 0 && e();
          };
        i.forEach((s) => {
          s.whenStable(a);
        });
      };
      xe.frameworkStabilizers || (xe.frameworkStabilizers = []),
        xe.frameworkStabilizers.push(r);
    }
    findTestabilityInTree(t, r, e) {
      if (r == null) return null;
      let i = t.getTestability(r);
      return (
        i ??
        (e
          ? fr().isShadowRoot(r)
            ? this.findTestabilityInTree(t, r.host, !0)
            : this.findTestabilityInTree(t, r.parentElement, !0)
          : null)
      );
    }
  },
  pu = (() => {
    let t = class t {
      build() {
        return new XMLHttpRequest();
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })(),
  _r = new C(""),
  ll = (() => {
    let t = class t {
      constructor(e, i) {
        (this._zone = i),
          (this._eventNameToPlugin = new Map()),
          e.forEach((o) => {
            o.manager = this;
          }),
          (this._plugins = e.slice().reverse());
      }
      addEventListener(e, i, o) {
        return this._findPluginFor(i).addEventListener(e, i, o);
      }
      getZone() {
        return this._zone;
      }
      _findPluginFor(e) {
        let i = this._eventNameToPlugin.get(e);
        if (i) return i;
        if (((i = this._plugins.find((a) => a.supports(e))), !i))
          throw new et(5101, !1);
        return this._eventNameToPlugin.set(e, i), i;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(_r), f(S));
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })(),
  dn = class {
    constructor(t) {
      this._doc = t;
    }
  },
  ia = "ng-app-id",
  dl = (() => {
    let t = class t {
      constructor(e, i, o, a = {}) {
        (this.doc = e),
          (this.appId = i),
          (this.nonce = o),
          (this.platformId = a),
          (this.styleRef = new Map()),
          (this.hostNodes = new Set()),
          (this.styleNodesInDOM = this.collectServerRenderedStyles()),
          (this.platformIsServer = Yo(a)),
          this.resetHostNodes();
      }
      addStyles(e) {
        for (let i of e)
          this.changeUsageCount(i, 1) === 1 && this.onStyleAdded(i);
      }
      removeStyles(e) {
        for (let i of e)
          this.changeUsageCount(i, -1) <= 0 && this.onStyleRemoved(i);
      }
      ngOnDestroy() {
        let e = this.styleNodesInDOM;
        e && (e.forEach((i) => i.remove()), e.clear());
        for (let i of this.getAllStyles()) this.onStyleRemoved(i);
        this.resetHostNodes();
      }
      addHost(e) {
        this.hostNodes.add(e);
        for (let i of this.getAllStyles()) this.addStyleToHost(e, i);
      }
      removeHost(e) {
        this.hostNodes.delete(e);
      }
      getAllStyles() {
        return this.styleRef.keys();
      }
      onStyleAdded(e) {
        for (let i of this.hostNodes) this.addStyleToHost(i, e);
      }
      onStyleRemoved(e) {
        let i = this.styleRef;
        i.get(e)?.elements?.forEach((o) => o.remove()), i.delete(e);
      }
      collectServerRenderedStyles() {
        let e = this.doc.head?.querySelectorAll(`style[${ia}="${this.appId}"]`);
        if (e?.length) {
          let i = new Map();
          return (
            e.forEach((o) => {
              o.textContent != null && i.set(o.textContent, o);
            }),
            i
          );
        }
        return null;
      }
      changeUsageCount(e, i) {
        let o = this.styleRef;
        if (o.has(e)) {
          let a = o.get(e);
          return (a.usage += i), a.usage;
        }
        return o.set(e, { usage: i, elements: [] }), i;
      }
      getStyleElement(e, i) {
        let o = this.styleNodesInDOM,
          a = o?.get(i);
        if (a?.parentNode === e) return o.delete(i), a.removeAttribute(ia), a;
        {
          let s = this.doc.createElement("style");
          return (
            this.nonce && s.setAttribute("nonce", this.nonce),
            (s.textContent = i),
            this.platformIsServer && s.setAttribute(ia, this.appId),
            e.appendChild(s),
            s
          );
        }
      }
      addStyleToHost(e, i) {
        let o = this.getStyleElement(e, i),
          a = this.styleRef,
          s = a.get(i)?.elements;
        s ? s.push(o) : a.set(i, { elements: [o], usage: 1 });
      }
      resetHostNodes() {
        let e = this.hostNodes;
        e.clear(), e.add(this.doc.head);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(k), f(en), f(nn, 8), f(We));
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })(),
  na = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
    math: "http://www.w3.org/1998/Math/MathML",
  },
  la = /%COMP%/g,
  hl = "%COMP%",
  fu = `_nghost-${hl}`,
  gu = `_ngcontent-${hl}`,
  bu = !0,
  vu = new C("", { providedIn: "root", factory: () => bu });
function _u(n) {
  return gu.replace(la, n);
}
function yu(n) {
  return fu.replace(la, n);
}
function ul(n, t) {
  return t.map((r) => r.replace(la, n));
}
var yr = (() => {
    let t = class t {
      constructor(e, i, o, a, s, c, l, h = null) {
        (this.eventManager = e),
          (this.sharedStylesHost = i),
          (this.appId = o),
          (this.removeStylesOnCompDestroy = a),
          (this.doc = s),
          (this.platformId = c),
          (this.ngZone = l),
          (this.nonce = h),
          (this.rendererByCompId = new Map()),
          (this.platformIsServer = Yo(c)),
          (this.defaultRenderer = new hn(e, s, l, this.platformIsServer));
      }
      createRenderer(e, i) {
        if (!e || !i) return this.defaultRenderer;
        this.platformIsServer &&
          i.encapsulation === tn.ShadowDom &&
          (i = X(b({}, i), { encapsulation: tn.Emulated }));
        let o = this.getOrCreateRenderer(e, i);
        return (
          o instanceof wr
            ? o.applyToHost(e)
            : o instanceof un && o.applyStyles(),
          o
        );
      }
      getOrCreateRenderer(e, i) {
        let o = this.rendererByCompId,
          a = o.get(i.id);
        if (!a) {
          let s = this.doc,
            c = this.ngZone,
            l = this.eventManager,
            h = this.sharedStylesHost,
            p = this.removeStylesOnCompDestroy,
            _ = this.platformIsServer;
          switch (i.encapsulation) {
            case tn.Emulated:
              a = new wr(l, h, i, this.appId, p, s, c, _);
              break;
            case tn.ShadowDom:
              return new sa(l, h, e, i, s, c, this.nonce, _);
            default:
              a = new un(l, h, i, p, s, c, _);
              break;
          }
          o.set(i.id, a);
        }
        return a;
      }
      ngOnDestroy() {
        this.rendererByCompId.clear();
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(ll), f(dl), f(en), f(vu), f(k), f(We), f(S), f(nn));
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })(),
  hn = class {
    constructor(t, r, e, i) {
      (this.eventManager = t),
        (this.doc = r),
        (this.ngZone = e),
        (this.platformIsServer = i),
        (this.data = Object.create(null)),
        (this.throwOnSyntheticProps = !0),
        (this.destroyNode = null);
    }
    destroy() {}
    createElement(t, r) {
      return r
        ? this.doc.createElementNS(na[r] || r, t)
        : this.doc.createElement(t);
    }
    createComment(t) {
      return this.doc.createComment(t);
    }
    createText(t) {
      return this.doc.createTextNode(t);
    }
    appendChild(t, r) {
      (sl(t) ? t.content : t).appendChild(r);
    }
    insertBefore(t, r, e) {
      t && (sl(t) ? t.content : t).insertBefore(r, e);
    }
    removeChild(t, r) {
      r.remove();
    }
    selectRootElement(t, r) {
      let e = typeof t == "string" ? this.doc.querySelector(t) : t;
      if (!e) throw new et(-5104, !1);
      return r || (e.textContent = ""), e;
    }
    parentNode(t) {
      return t.parentNode;
    }
    nextSibling(t) {
      return t.nextSibling;
    }
    setAttribute(t, r, e, i) {
      if (i) {
        r = i + ":" + r;
        let o = na[i];
        o ? t.setAttributeNS(o, r, e) : t.setAttribute(r, e);
      } else t.setAttribute(r, e);
    }
    removeAttribute(t, r, e) {
      if (e) {
        let i = na[e];
        i ? t.removeAttributeNS(i, r) : t.removeAttribute(`${e}:${r}`);
      } else t.removeAttribute(r);
    }
    addClass(t, r) {
      t.classList.add(r);
    }
    removeClass(t, r) {
      t.classList.remove(r);
    }
    setStyle(t, r, e, i) {
      i & (rn.DashCase | rn.Important)
        ? t.style.setProperty(r, e, i & rn.Important ? "important" : "")
        : (t.style[r] = e);
    }
    removeStyle(t, r, e) {
      e & rn.DashCase ? t.style.removeProperty(r) : (t.style[r] = "");
    }
    setProperty(t, r, e) {
      t != null && (t[r] = e);
    }
    setValue(t, r) {
      t.nodeValue = r;
    }
    listen(t, r, e) {
      if (
        typeof t == "string" &&
        ((t = fr().getGlobalEventTarget(this.doc, t)), !t)
      )
        throw new Error(`Unsupported event target ${t} for event ${r}`);
      return this.eventManager.addEventListener(
        t,
        r,
        this.decoratePreventDefault(e),
      );
    }
    decoratePreventDefault(t) {
      return (r) => {
        if (r === "__ngUnwrap__") return t;
        (this.platformIsServer ? this.ngZone.runGuarded(() => t(r)) : t(r)) ===
          !1 && r.preventDefault();
      };
    }
  };
function sl(n) {
  return n.tagName === "TEMPLATE" && n.content !== void 0;
}
var sa = class extends hn {
    constructor(t, r, e, i, o, a, s, c) {
      super(t, o, a, c),
        (this.sharedStylesHost = r),
        (this.hostEl = e),
        (this.shadowRoot = e.attachShadow({ mode: "open" })),
        this.sharedStylesHost.addHost(this.shadowRoot);
      let l = ul(i.id, i.styles);
      for (let h of l) {
        let p = document.createElement("style");
        s && p.setAttribute("nonce", s),
          (p.textContent = h),
          this.shadowRoot.appendChild(p);
      }
    }
    nodeOrShadowRoot(t) {
      return t === this.hostEl ? this.shadowRoot : t;
    }
    appendChild(t, r) {
      return super.appendChild(this.nodeOrShadowRoot(t), r);
    }
    insertBefore(t, r, e) {
      return super.insertBefore(this.nodeOrShadowRoot(t), r, e);
    }
    removeChild(t, r) {
      return super.removeChild(null, r);
    }
    parentNode(t) {
      return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)));
    }
    destroy() {
      this.sharedStylesHost.removeHost(this.shadowRoot);
    }
  },
  un = class extends hn {
    constructor(t, r, e, i, o, a, s, c) {
      super(t, o, a, s),
        (this.sharedStylesHost = r),
        (this.removeStylesOnCompDestroy = i),
        (this.styles = c ? ul(c, e.styles) : e.styles);
    }
    applyStyles() {
      this.sharedStylesHost.addStyles(this.styles);
    }
    destroy() {
      this.removeStylesOnCompDestroy &&
        this.sharedStylesHost.removeStyles(this.styles);
    }
  },
  wr = class extends un {
    constructor(t, r, e, i, o, a, s, c) {
      let l = i + "-" + e.id;
      super(t, r, e, o, a, s, c, l),
        (this.contentAttr = _u(l)),
        (this.hostAttr = yu(l));
    }
    applyToHost(t) {
      this.applyStyles(), this.setAttribute(t, this.hostAttr, "");
    }
    createElement(t, r) {
      let e = super.createElement(t, r);
      return super.setAttribute(e, this.contentAttr, ""), e;
    }
  },
  wu = (() => {
    let t = class t extends dn {
      constructor(e) {
        super(e);
      }
      supports(e) {
        return !0;
      }
      addEventListener(e, i, o) {
        return (
          e.addEventListener(i, o, !1), () => this.removeEventListener(e, i, o)
        );
      }
      removeEventListener(e, i, o) {
        return e.removeEventListener(i, o);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(k));
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })(),
  xu = (() => {
    let t = class t extends dn {
      constructor(e) {
        super(e), (this.delegate = v(Bc, { optional: !0 }));
      }
      supports(e) {
        return this.delegate ? this.delegate.supports(e) : !1;
      }
      addEventListener(e, i, o) {
        return this.delegate.addEventListener(e, i, o);
      }
      removeEventListener(e, i, o) {
        return this.delegate.removeEventListener(e, i, o);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(k));
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })(),
  cl = ["alt", "control", "meta", "shift"],
  Cu = {
    "\b": "Backspace",
    "	": "Tab",
    "\x7F": "Delete",
    "\x1B": "Escape",
    Del: "Delete",
    Esc: "Escape",
    Left: "ArrowLeft",
    Right: "ArrowRight",
    Up: "ArrowUp",
    Down: "ArrowDown",
    Menu: "ContextMenu",
    Scroll: "ScrollLock",
    Win: "OS",
  },
  Iu = {
    alt: (n) => n.altKey,
    control: (n) => n.ctrlKey,
    meta: (n) => n.metaKey,
    shift: (n) => n.shiftKey,
  },
  Eu = (() => {
    let t = class t extends dn {
      constructor(e) {
        super(e);
      }
      supports(e) {
        return t.parseEventName(e) != null;
      }
      addEventListener(e, i, o) {
        let a = t.parseEventName(i),
          s = t.eventCallback(a.fullKey, o, this.manager.getZone());
        return this.manager
          .getZone()
          .runOutsideAngular(() => fr().onAndCancel(e, a.domEventName, s));
      }
      static parseEventName(e) {
        let i = e.toLowerCase().split("."),
          o = i.shift();
        if (i.length === 0 || !(o === "keydown" || o === "keyup")) return null;
        let a = t._normalizeKey(i.pop()),
          s = "",
          c = i.indexOf("code");
        if (
          (c > -1 && (i.splice(c, 1), (s = "code.")),
          cl.forEach((h) => {
            let p = i.indexOf(h);
            p > -1 && (i.splice(p, 1), (s += h + "."));
          }),
          (s += a),
          i.length != 0 || a.length === 0)
        )
          return null;
        let l = {};
        return (l.domEventName = o), (l.fullKey = s), l;
      }
      static matchEventFullKeyCode(e, i) {
        let o = Cu[e.key] || e.key,
          a = "";
        return (
          i.indexOf("code.") > -1 && ((o = e.code), (a = "code.")),
          o == null || !o
            ? !1
            : ((o = o.toLowerCase()),
              o === " " ? (o = "space") : o === "." && (o = "dot"),
              cl.forEach((s) => {
                if (s !== o) {
                  let c = Iu[s];
                  c(e) && (a += s + ".");
                }
              }),
              (a += o),
              a === i)
        );
      }
      static eventCallback(e, i, o) {
        return (a) => {
          t.matchEventFullKeyCode(a, e) && o.runGuarded(() => i(a));
        };
      }
      static _normalizeKey(e) {
        return e === "esc" ? "escape" : e;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(k));
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })();
function Du() {
  oa.makeCurrent();
}
function Su() {
  return new $e();
}
function ku() {
  return uc(document), document;
}
var Au = [
    { provide: We, useValue: Kc },
    { provide: mc, useValue: Du, multi: !0 },
    { provide: k, useFactory: ku, deps: [] },
  ],
  ml = Lc(jc, "browser", Au),
  Tu = new C(""),
  Ru = [
    { provide: hr, useClass: aa, deps: [] },
    { provide: Pc, useClass: ur, deps: [S, qo, hr] },
    { provide: ur, useClass: ur, deps: [S, qo, hr] },
  ],
  Mu = [
    { provide: dc, useValue: "root" },
    { provide: $e, useFactory: Su, deps: [] },
    { provide: _r, useClass: wu, multi: !0, deps: [k, S, We] },
    { provide: _r, useClass: Eu, multi: !0, deps: [k] },
    { provide: _r, useClass: xu, multi: !0 },
    yr,
    dl,
    ll,
    { provide: sr, useExisting: yr },
    { provide: tl, useClass: pu, deps: [] },
    [],
  ],
  pl = (() => {
    let t = class t {
      constructor(e) {}
      static withServerTransition(e) {
        return { ngModule: t, providers: [{ provide: en, useValue: e.appId }] };
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(Tu, 12));
    }),
      (t.ɵmod = j({ type: t })),
      (t.ɵinj = L({ providers: [...Mu, ...Ru], imports: [gr, Vc] }));
    let n = t;
    return n;
  })();
var fl = (() => {
  let t = class t {
    constructor(e) {
      this._doc = e;
    }
    getTitle() {
      return this._doc.title;
    }
    setTitle(e) {
      this._doc.title = e || "";
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(f(k));
  }),
    (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let n = t;
  return n;
})();
var mn = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = y({
        token: t,
        factory: function (i) {
          let o = null;
          return i ? (o = new (i || t)()) : (o = f(Ou)), o;
        },
        providedIn: "root",
      }));
    let n = t;
    return n;
  })(),
  Ou = (() => {
    let t = class t extends mn {
      constructor(e) {
        super(), (this._doc = e);
      }
      sanitize(e, i) {
        if (i == null) return null;
        switch (e) {
          case Ot.NONE:
            return i;
          case Ot.HTML:
            return fi(i, "HTML") ? pi(i) : yc(this._doc, String(i)).toString();
          case Ot.STYLE:
            return fi(i, "Style") ? pi(i) : i;
          case Ot.SCRIPT:
            if (fi(i, "Script")) return pi(i);
            throw new et(5200, !1);
          case Ot.URL:
            return fi(i, "URL") ? pi(i) : _c(String(i));
          case Ot.RESOURCE_URL:
            if (fi(i, "ResourceURL")) return pi(i);
            throw new et(5201, !1);
          default:
            throw new et(5202, !1);
        }
      }
      bypassSecurityTrustHtml(e) {
        return pc(e);
      }
      bypassSecurityTrustStyle(e) {
        return fc(e);
      }
      bypassSecurityTrustScript(e) {
        return gc(e);
      }
      bypassSecurityTrustUrl(e) {
        return bc(e);
      }
      bypassSecurityTrustResourceUrl(e) {
        return vc(e);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(k));
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
var B = "primary",
  Sn = Symbol("RouteTitle"),
  pa = class {
    constructor(t) {
      this.params = t || {};
    }
    has(t) {
      return Object.prototype.hasOwnProperty.call(this.params, t);
    }
    get(t) {
      if (this.has(t)) {
        let r = this.params[t];
        return Array.isArray(r) ? r[0] : r;
      }
      return null;
    }
    getAll(t) {
      if (this.has(t)) {
        let r = this.params[t];
        return Array.isArray(r) ? r : [r];
      }
      return [];
    }
    get keys() {
      return Object.keys(this.params);
    }
  };
function Di(n) {
  return new pa(n);
}
function Fu(n, t, r) {
  let e = r.path.split("/");
  if (
    e.length > n.length ||
    (r.pathMatch === "full" && (t.hasChildren() || e.length < n.length))
  )
    return null;
  let i = {};
  for (let o = 0; o < e.length; o++) {
    let a = e[o],
      s = n[o];
    if (a[0] === ":") i[a.substring(1)] = s;
    else if (a !== s.path) return null;
  }
  return { consumed: n.slice(0, e.length), posParams: i };
}
function Pu(n, t) {
  if (n.length !== t.length) return !1;
  for (let r = 0; r < n.length; ++r) if (!ee(n[r], t[r])) return !1;
  return !0;
}
function ee(n, t) {
  let r = n ? fa(n) : void 0,
    e = t ? fa(t) : void 0;
  if (!r || !e || r.length != e.length) return !1;
  let i;
  for (let o = 0; o < r.length; o++)
    if (((i = r[o]), !Dl(n[i], t[i]))) return !1;
  return !0;
}
function fa(n) {
  return [...Object.keys(n), ...Object.getOwnPropertySymbols(n)];
}
function Dl(n, t) {
  if (Array.isArray(n) && Array.isArray(t)) {
    if (n.length !== t.length) return !1;
    let r = [...n].sort(),
      e = [...t].sort();
    return r.every((i, o) => e[o] === i);
  } else return n === t;
}
function Sl(n) {
  return n.length > 0 ? n[n.length - 1] : null;
}
function Me(n) {
  return ir(n) ? n : mr(n) ? xt(Promise.resolve(n)) : x(n);
}
var Nu = { exact: Al, subset: Tl },
  kl = { exact: Lu, subset: ju, ignored: () => !0 };
function gl(n, t, r) {
  return (
    Nu[r.paths](n.root, t.root, r.matrixParams) &&
    kl[r.queryParams](n.queryParams, t.queryParams) &&
    !(r.fragment === "exact" && n.fragment !== t.fragment)
  );
}
function Lu(n, t) {
  return ee(n, t);
}
function Al(n, t, r) {
  if (
    !Je(n.segments, t.segments) ||
    !Er(n.segments, t.segments, r) ||
    n.numberOfChildren !== t.numberOfChildren
  )
    return !1;
  for (let e in t.children)
    if (!n.children[e] || !Al(n.children[e], t.children[e], r)) return !1;
  return !0;
}
function ju(n, t) {
  return (
    Object.keys(t).length <= Object.keys(n).length &&
    Object.keys(t).every((r) => Dl(n[r], t[r]))
  );
}
function Tl(n, t, r) {
  return Rl(n, t, t.segments, r);
}
function Rl(n, t, r, e) {
  if (n.segments.length > r.length) {
    let i = n.segments.slice(0, r.length);
    return !(!Je(i, r) || t.hasChildren() || !Er(i, r, e));
  } else if (n.segments.length === r.length) {
    if (!Je(n.segments, r) || !Er(n.segments, r, e)) return !1;
    for (let i in t.children)
      if (!n.children[i] || !Tl(n.children[i], t.children[i], e)) return !1;
    return !0;
  } else {
    let i = r.slice(0, n.segments.length),
      o = r.slice(n.segments.length);
    return !Je(n.segments, i) || !Er(n.segments, i, e) || !n.children[B]
      ? !1
      : Rl(n.children[B], t, o, e);
  }
}
function Er(n, t, r) {
  return t.every((e, i) => kl[r](n[i].parameters, e.parameters));
}
var de = class {
    constructor(t = new tt([], {}), r = {}, e = null) {
      (this.root = t), (this.queryParams = r), (this.fragment = e);
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= Di(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      return zu.serialize(this);
    }
  },
  tt = class {
    constructor(t, r) {
      (this.segments = t),
        (this.children = r),
        (this.parent = null),
        Object.values(r).forEach((e) => (e.parent = this));
    }
    hasChildren() {
      return this.numberOfChildren > 0;
    }
    get numberOfChildren() {
      return Object.keys(this.children).length;
    }
    toString() {
      return Dr(this);
    }
  },
  Xe = class {
    constructor(t, r) {
      (this.path = t), (this.parameters = r);
    }
    get parameterMap() {
      return (this._parameterMap ??= Di(this.parameters)), this._parameterMap;
    }
    toString() {
      return Ol(this);
    }
  };
function Vu(n, t) {
  return Je(n, t) && n.every((r, e) => ee(r.parameters, t[e].parameters));
}
function Je(n, t) {
  return n.length !== t.length ? !1 : n.every((r, e) => r.path === t[e].path);
}
function Bu(n, t) {
  let r = [];
  return (
    Object.entries(n.children).forEach(([e, i]) => {
      e === B && (r = r.concat(t(i, e)));
    }),
    Object.entries(n.children).forEach(([e, i]) => {
      e !== B && (r = r.concat(t(i, e)));
    }),
    r
  );
}
var kn = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = y({ token: t, factory: () => new Si(), providedIn: "root" }));
    let n = t;
    return n;
  })(),
  Si = class {
    parse(t) {
      let r = new ba(t);
      return new de(
        r.parseRootSegment(),
        r.parseQueryParams(),
        r.parseFragment(),
      );
    }
    serialize(t) {
      let r = `/${pn(t.root, !0)}`,
        e = $u(t.queryParams),
        i = typeof t.fragment == "string" ? `#${Uu(t.fragment)}` : "";
      return `${r}${e}${i}`;
    }
  },
  zu = new Si();
function Dr(n) {
  return n.segments.map((t) => Ol(t)).join("/");
}
function pn(n, t) {
  if (!n.hasChildren()) return Dr(n);
  if (t) {
    let r = n.children[B] ? pn(n.children[B], !1) : "",
      e = [];
    return (
      Object.entries(n.children).forEach(([i, o]) => {
        i !== B && e.push(`${i}:${pn(o, !1)}`);
      }),
      e.length > 0 ? `${r}(${e.join("//")})` : r
    );
  } else {
    let r = Bu(n, (e, i) =>
      i === B ? [pn(n.children[B], !1)] : [`${i}:${pn(e, !1)}`],
    );
    return Object.keys(n.children).length === 1 && n.children[B] != null
      ? `${Dr(n)}/${r[0]}`
      : `${Dr(n)}/(${r.join("//")})`;
  }
}
function Ml(n) {
  return encodeURIComponent(n)
    .replace(/%40/g, "@")
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",");
}
function Cr(n) {
  return Ml(n).replace(/%3B/gi, ";");
}
function Uu(n) {
  return encodeURI(n);
}
function ga(n) {
  return Ml(n)
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/%26/gi, "&");
}
function Sr(n) {
  return decodeURIComponent(n);
}
function bl(n) {
  return Sr(n.replace(/\+/g, "%20"));
}
function Ol(n) {
  return `${ga(n.path)}${Hu(n.parameters)}`;
}
function Hu(n) {
  return Object.entries(n)
    .map(([t, r]) => `;${ga(t)}=${ga(r)}`)
    .join("");
}
function $u(n) {
  let t = Object.entries(n)
    .map(([r, e]) =>
      Array.isArray(e)
        ? e.map((i) => `${Cr(r)}=${Cr(i)}`).join("&")
        : `${Cr(r)}=${Cr(e)}`,
    )
    .filter((r) => r);
  return t.length ? `?${t.join("&")}` : "";
}
var Wu = /^[^\/()?;#]+/;
function da(n) {
  let t = n.match(Wu);
  return t ? t[0] : "";
}
var Gu = /^[^\/()?;=#]+/;
function qu(n) {
  let t = n.match(Gu);
  return t ? t[0] : "";
}
var Qu = /^[^=?&#]+/;
function Yu(n) {
  let t = n.match(Qu);
  return t ? t[0] : "";
}
var Zu = /^[^&#]+/;
function Ku(n) {
  let t = n.match(Zu);
  return t ? t[0] : "";
}
var ba = class {
  constructor(t) {
    (this.url = t), (this.remaining = t);
  }
  parseRootSegment() {
    return (
      this.consumeOptional("/"),
      this.remaining === "" ||
      this.peekStartsWith("?") ||
      this.peekStartsWith("#")
        ? new tt([], {})
        : new tt([], this.parseChildren())
    );
  }
  parseQueryParams() {
    let t = {};
    if (this.consumeOptional("?"))
      do this.parseQueryParam(t);
      while (this.consumeOptional("&"));
    return t;
  }
  parseFragment() {
    return this.consumeOptional("#")
      ? decodeURIComponent(this.remaining)
      : null;
  }
  parseChildren() {
    if (this.remaining === "") return {};
    this.consumeOptional("/");
    let t = [];
    for (
      this.peekStartsWith("(") || t.push(this.parseSegment());
      this.peekStartsWith("/") &&
      !this.peekStartsWith("//") &&
      !this.peekStartsWith("/(");

    )
      this.capture("/"), t.push(this.parseSegment());
    let r = {};
    this.peekStartsWith("/(") &&
      (this.capture("/"), (r = this.parseParens(!0)));
    let e = {};
    return (
      this.peekStartsWith("(") && (e = this.parseParens(!1)),
      (t.length > 0 || Object.keys(r).length > 0) && (e[B] = new tt(t, r)),
      e
    );
  }
  parseSegment() {
    let t = da(this.remaining);
    if (t === "" && this.peekStartsWith(";")) throw new et(4009, !1);
    return this.capture(t), new Xe(Sr(t), this.parseMatrixParams());
  }
  parseMatrixParams() {
    let t = {};
    for (; this.consumeOptional(";"); ) this.parseParam(t);
    return t;
  }
  parseParam(t) {
    let r = qu(this.remaining);
    if (!r) return;
    this.capture(r);
    let e = "";
    if (this.consumeOptional("=")) {
      let i = da(this.remaining);
      i && ((e = i), this.capture(e));
    }
    t[Sr(r)] = Sr(e);
  }
  parseQueryParam(t) {
    let r = Yu(this.remaining);
    if (!r) return;
    this.capture(r);
    let e = "";
    if (this.consumeOptional("=")) {
      let a = Ku(this.remaining);
      a && ((e = a), this.capture(e));
    }
    let i = bl(r),
      o = bl(e);
    if (t.hasOwnProperty(i)) {
      let a = t[i];
      Array.isArray(a) || ((a = [a]), (t[i] = a)), a.push(o);
    } else t[i] = o;
  }
  parseParens(t) {
    let r = {};
    for (
      this.capture("(");
      !this.consumeOptional(")") && this.remaining.length > 0;

    ) {
      let e = da(this.remaining),
        i = this.remaining[e.length];
      if (i !== "/" && i !== ")" && i !== ";") throw new et(4010, !1);
      let o;
      e.indexOf(":") > -1
        ? ((o = e.slice(0, e.indexOf(":"))), this.capture(o), this.capture(":"))
        : t && (o = B);
      let a = this.parseChildren();
      (r[o] = Object.keys(a).length === 1 ? a[B] : new tt([], a)),
        this.consumeOptional("//");
    }
    return r;
  }
  peekStartsWith(t) {
    return this.remaining.startsWith(t);
  }
  consumeOptional(t) {
    return this.peekStartsWith(t)
      ? ((this.remaining = this.remaining.substring(t.length)), !0)
      : !1;
  }
  capture(t) {
    if (!this.consumeOptional(t)) throw new et(4011, !1);
  }
};
function Fl(n) {
  return n.segments.length > 0 ? new tt([], { [B]: n }) : n;
}
function Pl(n) {
  let t = {};
  for (let [e, i] of Object.entries(n.children)) {
    let o = Pl(i);
    if (e === B && o.segments.length === 0 && o.hasChildren())
      for (let [a, s] of Object.entries(o.children)) t[a] = s;
    else (o.segments.length > 0 || o.hasChildren()) && (t[e] = o);
  }
  let r = new tt(n.segments, t);
  return Xu(r);
}
function Xu(n) {
  if (n.numberOfChildren === 1 && n.children[B]) {
    let t = n.children[B];
    return new tt(n.segments.concat(t.segments), t.children);
  }
  return n;
}
function ti(n) {
  return n instanceof de;
}
function Ju(n, t, r = null, e = null) {
  let i = Nl(n);
  return Ll(i, t, r, e);
}
function Nl(n) {
  let t;
  function r(o) {
    let a = {};
    for (let c of o.children) {
      let l = r(c);
      a[c.outlet] = l;
    }
    let s = new tt(o.url, a);
    return o === n && (t = s), s;
  }
  let e = r(n.root),
    i = Fl(e);
  return t ?? i;
}
function Ll(n, t, r, e) {
  let i = n;
  for (; i.parent; ) i = i.parent;
  if (t.length === 0) return ha(i, i, i, r, e);
  let o = tm(t);
  if (o.toRoot()) return ha(i, i, new tt([], {}), r, e);
  let a = em(o, i, n),
    s = a.processChildren
      ? bn(a.segmentGroup, a.index, o.commands)
      : Vl(a.segmentGroup, a.index, o.commands);
  return ha(i, a.segmentGroup, s, r, e);
}
function kr(n) {
  return typeof n == "object" && n != null && !n.outlets && !n.segmentPath;
}
function yn(n) {
  return typeof n == "object" && n != null && n.outlets;
}
function ha(n, t, r, e, i) {
  let o = {};
  e &&
    Object.entries(e).forEach(([c, l]) => {
      o[c] = Array.isArray(l) ? l.map((h) => `${h}`) : `${l}`;
    });
  let a;
  n === t ? (a = r) : (a = jl(n, t, r));
  let s = Fl(Pl(a));
  return new de(s, o, i);
}
function jl(n, t, r) {
  let e = {};
  return (
    Object.entries(n.children).forEach(([i, o]) => {
      o === t ? (e[i] = r) : (e[i] = jl(o, t, r));
    }),
    new tt(n.segments, e)
  );
}
var Ar = class {
  constructor(t, r, e) {
    if (
      ((this.isAbsolute = t),
      (this.numberOfDoubleDots = r),
      (this.commands = e),
      t && e.length > 0 && kr(e[0]))
    )
      throw new et(4003, !1);
    let i = e.find(yn);
    if (i && i !== Sl(e)) throw new et(4004, !1);
  }
  toRoot() {
    return (
      this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"
    );
  }
};
function tm(n) {
  if (typeof n[0] == "string" && n.length === 1 && n[0] === "/")
    return new Ar(!0, 0, n);
  let t = 0,
    r = !1,
    e = n.reduce((i, o, a) => {
      if (typeof o == "object" && o != null) {
        if (o.outlets) {
          let s = {};
          return (
            Object.entries(o.outlets).forEach(([c, l]) => {
              s[c] = typeof l == "string" ? l.split("/") : l;
            }),
            [...i, { outlets: s }]
          );
        }
        if (o.segmentPath) return [...i, o.segmentPath];
      }
      return typeof o != "string"
        ? [...i, o]
        : a === 0
          ? (o.split("/").forEach((s, c) => {
              (c == 0 && s === ".") ||
                (c == 0 && s === ""
                  ? (r = !0)
                  : s === ".."
                    ? t++
                    : s != "" && i.push(s));
            }),
            i)
          : [...i, o];
    }, []);
  return new Ar(r, t, e);
}
var Ci = class {
  constructor(t, r, e) {
    (this.segmentGroup = t), (this.processChildren = r), (this.index = e);
  }
};
function em(n, t, r) {
  if (n.isAbsolute) return new Ci(t, !0, 0);
  if (!r) return new Ci(t, !1, NaN);
  if (r.parent === null) return new Ci(r, !0, 0);
  let e = kr(n.commands[0]) ? 0 : 1,
    i = r.segments.length - 1 + e;
  return im(r, i, n.numberOfDoubleDots);
}
function im(n, t, r) {
  let e = n,
    i = t,
    o = r;
  for (; o > i; ) {
    if (((o -= i), (e = e.parent), !e)) throw new et(4005, !1);
    i = e.segments.length;
  }
  return new Ci(e, !1, i - o);
}
function nm(n) {
  return yn(n[0]) ? n[0].outlets : { [B]: n };
}
function Vl(n, t, r) {
  if (((n ??= new tt([], {})), n.segments.length === 0 && n.hasChildren()))
    return bn(n, t, r);
  let e = rm(n, t, r),
    i = r.slice(e.commandIndex);
  if (e.match && e.pathIndex < n.segments.length) {
    let o = new tt(n.segments.slice(0, e.pathIndex), {});
    return (
      (o.children[B] = new tt(n.segments.slice(e.pathIndex), n.children)),
      bn(o, 0, i)
    );
  } else
    return e.match && i.length === 0
      ? new tt(n.segments, {})
      : e.match && !n.hasChildren()
        ? va(n, t, r)
        : e.match
          ? bn(n, 0, i)
          : va(n, t, r);
}
function bn(n, t, r) {
  if (r.length === 0) return new tt(n.segments, {});
  {
    let e = nm(r),
      i = {};
    if (
      Object.keys(e).some((o) => o !== B) &&
      n.children[B] &&
      n.numberOfChildren === 1 &&
      n.children[B].segments.length === 0
    ) {
      let o = bn(n.children[B], t, r);
      return new tt(n.segments, o.children);
    }
    return (
      Object.entries(e).forEach(([o, a]) => {
        typeof a == "string" && (a = [a]),
          a !== null && (i[o] = Vl(n.children[o], t, a));
      }),
      Object.entries(n.children).forEach(([o, a]) => {
        e[o] === void 0 && (i[o] = a);
      }),
      new tt(n.segments, i)
    );
  }
}
function rm(n, t, r) {
  let e = 0,
    i = t,
    o = { match: !1, pathIndex: 0, commandIndex: 0 };
  for (; i < n.segments.length; ) {
    if (e >= r.length) return o;
    let a = n.segments[i],
      s = r[e];
    if (yn(s)) break;
    let c = `${s}`,
      l = e < r.length - 1 ? r[e + 1] : null;
    if (i > 0 && c === void 0) break;
    if (c && l && typeof l == "object" && l.outlets === void 0) {
      if (!_l(c, l, a)) return o;
      e += 2;
    } else {
      if (!_l(c, {}, a)) return o;
      e++;
    }
    i++;
  }
  return { match: !0, pathIndex: i, commandIndex: e };
}
function va(n, t, r) {
  let e = n.segments.slice(0, t),
    i = 0;
  for (; i < r.length; ) {
    let o = r[i];
    if (yn(o)) {
      let c = om(o.outlets);
      return new tt(e, c);
    }
    if (i === 0 && kr(r[0])) {
      let c = n.segments[t];
      e.push(new Xe(c.path, vl(r[0]))), i++;
      continue;
    }
    let a = yn(o) ? o.outlets[B] : `${o}`,
      s = i < r.length - 1 ? r[i + 1] : null;
    a && s && kr(s)
      ? (e.push(new Xe(a, vl(s))), (i += 2))
      : (e.push(new Xe(a, {})), i++);
  }
  return new tt(e, {});
}
function om(n) {
  let t = {};
  return (
    Object.entries(n).forEach(([r, e]) => {
      typeof e == "string" && (e = [e]),
        e !== null && (t[r] = va(new tt([], {}), 0, e));
    }),
    t
  );
}
function vl(n) {
  let t = {};
  return Object.entries(n).forEach(([r, e]) => (t[r] = `${e}`)), t;
}
function _l(n, t, r) {
  return n == r.path && ee(t, r.parameters);
}
var vn = "imperative",
  yt = (function (n) {
    return (
      (n[(n.NavigationStart = 0)] = "NavigationStart"),
      (n[(n.NavigationEnd = 1)] = "NavigationEnd"),
      (n[(n.NavigationCancel = 2)] = "NavigationCancel"),
      (n[(n.NavigationError = 3)] = "NavigationError"),
      (n[(n.RoutesRecognized = 4)] = "RoutesRecognized"),
      (n[(n.ResolveStart = 5)] = "ResolveStart"),
      (n[(n.ResolveEnd = 6)] = "ResolveEnd"),
      (n[(n.GuardsCheckStart = 7)] = "GuardsCheckStart"),
      (n[(n.GuardsCheckEnd = 8)] = "GuardsCheckEnd"),
      (n[(n.RouteConfigLoadStart = 9)] = "RouteConfigLoadStart"),
      (n[(n.RouteConfigLoadEnd = 10)] = "RouteConfigLoadEnd"),
      (n[(n.ChildActivationStart = 11)] = "ChildActivationStart"),
      (n[(n.ChildActivationEnd = 12)] = "ChildActivationEnd"),
      (n[(n.ActivationStart = 13)] = "ActivationStart"),
      (n[(n.ActivationEnd = 14)] = "ActivationEnd"),
      (n[(n.Scroll = 15)] = "Scroll"),
      (n[(n.NavigationSkipped = 16)] = "NavigationSkipped"),
      n
    );
  })(yt || {}),
  Vt = class {
    constructor(t, r) {
      (this.id = t), (this.url = r);
    }
  },
  ki = class extends Vt {
    constructor(t, r, e = "imperative", i = null) {
      super(t, r),
        (this.type = yt.NavigationStart),
        (this.navigationTrigger = e),
        (this.restoredState = i);
    }
    toString() {
      return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
    }
  },
  Qt = class extends Vt {
    constructor(t, r, e) {
      super(t, r), (this.urlAfterRedirects = e), (this.type = yt.NavigationEnd);
    }
    toString() {
      return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
    }
  },
  Pt = (function (n) {
    return (
      (n[(n.Redirect = 0)] = "Redirect"),
      (n[(n.SupersededByNewNavigation = 1)] = "SupersededByNewNavigation"),
      (n[(n.NoDataFromResolver = 2)] = "NoDataFromResolver"),
      (n[(n.GuardRejected = 3)] = "GuardRejected"),
      n
    );
  })(Pt || {}),
  Tr = (function (n) {
    return (
      (n[(n.IgnoredSameUrlNavigation = 0)] = "IgnoredSameUrlNavigation"),
      (n[(n.IgnoredByUrlHandlingStrategy = 1)] =
        "IgnoredByUrlHandlingStrategy"),
      n
    );
  })(Tr || {}),
  le = class extends Vt {
    constructor(t, r, e, i) {
      super(t, r),
        (this.reason = e),
        (this.code = i),
        (this.type = yt.NavigationCancel);
    }
    toString() {
      return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
    }
  },
  Re = class extends Vt {
    constructor(t, r, e, i) {
      super(t, r),
        (this.reason = e),
        (this.code = i),
        (this.type = yt.NavigationSkipped);
    }
  },
  wn = class extends Vt {
    constructor(t, r, e, i) {
      super(t, r),
        (this.error = e),
        (this.target = i),
        (this.type = yt.NavigationError);
    }
    toString() {
      return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
    }
  },
  Rr = class extends Vt {
    constructor(t, r, e, i) {
      super(t, r),
        (this.urlAfterRedirects = e),
        (this.state = i),
        (this.type = yt.RoutesRecognized);
    }
    toString() {
      return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  _a = class extends Vt {
    constructor(t, r, e, i) {
      super(t, r),
        (this.urlAfterRedirects = e),
        (this.state = i),
        (this.type = yt.GuardsCheckStart);
    }
    toString() {
      return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  ya = class extends Vt {
    constructor(t, r, e, i, o) {
      super(t, r),
        (this.urlAfterRedirects = e),
        (this.state = i),
        (this.shouldActivate = o),
        (this.type = yt.GuardsCheckEnd);
    }
    toString() {
      return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
    }
  },
  wa = class extends Vt {
    constructor(t, r, e, i) {
      super(t, r),
        (this.urlAfterRedirects = e),
        (this.state = i),
        (this.type = yt.ResolveStart);
    }
    toString() {
      return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  xa = class extends Vt {
    constructor(t, r, e, i) {
      super(t, r),
        (this.urlAfterRedirects = e),
        (this.state = i),
        (this.type = yt.ResolveEnd);
    }
    toString() {
      return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Ca = class {
    constructor(t) {
      (this.route = t), (this.type = yt.RouteConfigLoadStart);
    }
    toString() {
      return `RouteConfigLoadStart(path: ${this.route.path})`;
    }
  },
  Ia = class {
    constructor(t) {
      (this.route = t), (this.type = yt.RouteConfigLoadEnd);
    }
    toString() {
      return `RouteConfigLoadEnd(path: ${this.route.path})`;
    }
  },
  Ea = class {
    constructor(t) {
      (this.snapshot = t), (this.type = yt.ChildActivationStart);
    }
    toString() {
      return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  Da = class {
    constructor(t) {
      (this.snapshot = t), (this.type = yt.ChildActivationEnd);
    }
    toString() {
      return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  Sa = class {
    constructor(t) {
      (this.snapshot = t), (this.type = yt.ActivationStart);
    }
    toString() {
      return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  ka = class {
    constructor(t) {
      (this.snapshot = t), (this.type = yt.ActivationEnd);
    }
    toString() {
      return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  Mr = class {
    constructor(t, r, e) {
      (this.routerEvent = t),
        (this.position = r),
        (this.anchor = e),
        (this.type = yt.Scroll);
    }
    toString() {
      let t = this.position ? `${this.position[0]}, ${this.position[1]}` : null;
      return `Scroll(anchor: '${this.anchor}', position: '${t}')`;
    }
  },
  xn = class {},
  Ai = class {
    constructor(t, r) {
      (this.url = t), (this.navigationBehaviorOptions = r);
    }
  };
function am(n, t) {
  return (
    n.providers &&
      !n._injector &&
      (n._injector = Wo(n.providers, t, `Route: ${n.path}`)),
    n._injector ?? t
  );
}
function qt(n) {
  return n.outlet || B;
}
function sm(n, t) {
  let r = n.filter((e) => qt(e) === t);
  return r.push(...n.filter((e) => qt(e) !== t)), r;
}
function An(n) {
  if (!n) return null;
  if (n.routeConfig?._injector) return n.routeConfig._injector;
  for (let t = n.parent; t; t = t.parent) {
    let r = t.routeConfig;
    if (r?._loadedInjector) return r._loadedInjector;
    if (r?._injector) return r._injector;
  }
  return null;
}
var Aa = class {
    get injector() {
      return An(this.route?.snapshot) ?? this.rootInjector;
    }
    set injector(t) {}
    constructor(t) {
      (this.rootInjector = t),
        (this.outlet = null),
        (this.route = null),
        (this.children = new Tn(this.rootInjector)),
        (this.attachRef = null);
    }
  },
  Tn = (() => {
    let t = class t {
      constructor(e) {
        (this.rootInjector = e), (this.contexts = new Map());
      }
      onChildOutletCreated(e, i) {
        let o = this.getOrCreateContext(e);
        (o.outlet = i), this.contexts.set(e, o);
      }
      onChildOutletDestroyed(e) {
        let i = this.getContext(e);
        i && ((i.outlet = null), (i.attachRef = null));
      }
      onOutletDeactivated() {
        let e = this.contexts;
        return (this.contexts = new Map()), e;
      }
      onOutletReAttached(e) {
        this.contexts = e;
      }
      getOrCreateContext(e) {
        let i = this.getContext(e);
        return (
          i || ((i = new Aa(this.rootInjector)), this.contexts.set(e, i)), i
        );
      }
      getContext(e) {
        return this.contexts.get(e) || null;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(Ie));
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  Or = class {
    constructor(t) {
      this._root = t;
    }
    get root() {
      return this._root.value;
    }
    parent(t) {
      let r = this.pathFromRoot(t);
      return r.length > 1 ? r[r.length - 2] : null;
    }
    children(t) {
      let r = Ta(t, this._root);
      return r ? r.children.map((e) => e.value) : [];
    }
    firstChild(t) {
      let r = Ta(t, this._root);
      return r && r.children.length > 0 ? r.children[0].value : null;
    }
    siblings(t) {
      let r = Ra(t, this._root);
      return r.length < 2
        ? []
        : r[r.length - 2].children.map((i) => i.value).filter((i) => i !== t);
    }
    pathFromRoot(t) {
      return Ra(t, this._root).map((r) => r.value);
    }
  };
function Ta(n, t) {
  if (n === t.value) return t;
  for (let r of t.children) {
    let e = Ta(n, r);
    if (e) return e;
  }
  return null;
}
function Ra(n, t) {
  if (n === t.value) return [t];
  for (let r of t.children) {
    let e = Ra(n, r);
    if (e.length) return e.unshift(t), e;
  }
  return [];
}
var Ft = class {
  constructor(t, r) {
    (this.value = t), (this.children = r);
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function xi(n) {
  let t = {};
  return n && n.children.forEach((r) => (t[r.value.outlet] = r)), t;
}
var Fr = class extends Or {
  constructor(t, r) {
    super(t), (this.snapshot = r), Ba(this, t);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function Bl(n) {
  let t = cm(n),
    r = new kt([new Xe("", {})]),
    e = new kt({}),
    i = new kt({}),
    o = new kt({}),
    a = new kt(""),
    s = new ei(r, e, o, a, i, B, n, t.root);
  return (s.snapshot = t.root), new Fr(new Ft(s, []), t);
}
function cm(n) {
  let t = {},
    r = {},
    e = {},
    i = "",
    o = new Ii([], t, e, i, r, B, n, null, {});
  return new Nr("", new Ft(o, []));
}
var ei = class {
  constructor(t, r, e, i, o, a, s, c) {
    (this.urlSubject = t),
      (this.paramsSubject = r),
      (this.queryParamsSubject = e),
      (this.fragmentSubject = i),
      (this.dataSubject = o),
      (this.outlet = a),
      (this.component = s),
      (this._futureSnapshot = c),
      (this.title = this.dataSubject?.pipe(R((l) => l[Sn])) ?? x(void 0)),
      (this.url = t),
      (this.params = r),
      (this.queryParams = e),
      (this.fragment = i),
      (this.data = o);
  }
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  get root() {
    return this._routerState.root;
  }
  get parent() {
    return this._routerState.parent(this);
  }
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  get children() {
    return this._routerState.children(this);
  }
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    return (
      (this._paramMap ??= this.params.pipe(R((t) => Di(t)))), this._paramMap
    );
  }
  get queryParamMap() {
    return (
      (this._queryParamMap ??= this.queryParams.pipe(R((t) => Di(t)))),
      this._queryParamMap
    );
  }
  toString() {
    return this.snapshot
      ? this.snapshot.toString()
      : `Future(${this._futureSnapshot})`;
  }
};
function Pr(n, t, r = "emptyOnly") {
  let e,
    { routeConfig: i } = n;
  return (
    t !== null &&
    (r === "always" ||
      i?.path === "" ||
      (!t.component && !t.routeConfig?.loadComponent))
      ? (e = {
          params: b(b({}, t.params), n.params),
          data: b(b({}, t.data), n.data),
          resolve: b(b(b(b({}, n.data), t.data), i?.data), n._resolvedData),
        })
      : (e = {
          params: b({}, n.params),
          data: b({}, n.data),
          resolve: b(b({}, n.data), n._resolvedData ?? {}),
        }),
    i && Ul(i) && (e.resolve[Sn] = i.title),
    e
  );
}
var Ii = class {
    get title() {
      return this.data?.[Sn];
    }
    constructor(t, r, e, i, o, a, s, c, l) {
      (this.url = t),
        (this.params = r),
        (this.queryParams = e),
        (this.fragment = i),
        (this.data = o),
        (this.outlet = a),
        (this.component = s),
        (this.routeConfig = c),
        (this._resolve = l);
    }
    get root() {
      return this._routerState.root;
    }
    get parent() {
      return this._routerState.parent(this);
    }
    get firstChild() {
      return this._routerState.firstChild(this);
    }
    get children() {
      return this._routerState.children(this);
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this);
    }
    get paramMap() {
      return (this._paramMap ??= Di(this.params)), this._paramMap;
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= Di(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      let t = this.url.map((e) => e.toString()).join("/"),
        r = this.routeConfig ? this.routeConfig.path : "";
      return `Route(url:'${t}', path:'${r}')`;
    }
  },
  Nr = class extends Or {
    constructor(t, r) {
      super(r), (this.url = t), Ba(this, r);
    }
    toString() {
      return zl(this._root);
    }
  };
function Ba(n, t) {
  (t.value._routerState = n), t.children.forEach((r) => Ba(n, r));
}
function zl(n) {
  let t = n.children.length > 0 ? ` { ${n.children.map(zl).join(", ")} } ` : "";
  return `${n.value}${t}`;
}
function ua(n) {
  if (n.snapshot) {
    let t = n.snapshot,
      r = n._futureSnapshot;
    (n.snapshot = r),
      ee(t.queryParams, r.queryParams) ||
        n.queryParamsSubject.next(r.queryParams),
      t.fragment !== r.fragment && n.fragmentSubject.next(r.fragment),
      ee(t.params, r.params) || n.paramsSubject.next(r.params),
      Pu(t.url, r.url) || n.urlSubject.next(r.url),
      ee(t.data, r.data) || n.dataSubject.next(r.data);
  } else
    (n.snapshot = n._futureSnapshot),
      n.dataSubject.next(n._futureSnapshot.data);
}
function Ma(n, t) {
  let r = ee(n.params, t.params) && Vu(n.url, t.url),
    e = !n.parent != !t.parent;
  return r && !e && (!n.parent || Ma(n.parent, t.parent));
}
function Ul(n) {
  return typeof n.title == "string" || n.title === null;
}
var za = (() => {
    let t = class t {
      constructor() {
        (this.activated = null),
          (this._activatedRoute = null),
          (this.name = B),
          (this.activateEvents = new O()),
          (this.deactivateEvents = new O()),
          (this.attachEvents = new O()),
          (this.detachEvents = new O()),
          (this.parentContexts = v(Tn)),
          (this.location = v(Wt)),
          (this.changeDetector = v(ot)),
          (this.inputBinder = v(Hr, { optional: !0 })),
          (this.supportsBindingToComponentInputs = !0);
      }
      get activatedComponentRef() {
        return this.activated;
      }
      ngOnChanges(e) {
        if (e.name) {
          let { firstChange: i, previousValue: o } = e.name;
          if (i) return;
          this.isTrackedInParentContexts(o) &&
            (this.deactivate(), this.parentContexts.onChildOutletDestroyed(o)),
            this.initializeOutletWithName();
        }
      }
      ngOnDestroy() {
        this.isTrackedInParentContexts(this.name) &&
          this.parentContexts.onChildOutletDestroyed(this.name),
          this.inputBinder?.unsubscribeFromRouteData(this);
      }
      isTrackedInParentContexts(e) {
        return this.parentContexts.getContext(e)?.outlet === this;
      }
      ngOnInit() {
        this.initializeOutletWithName();
      }
      initializeOutletWithName() {
        if (
          (this.parentContexts.onChildOutletCreated(this.name, this),
          this.activated)
        )
          return;
        let e = this.parentContexts.getContext(this.name);
        e?.route &&
          (e.attachRef
            ? this.attach(e.attachRef, e.route)
            : this.activateWith(e.route, e.injector));
      }
      get isActivated() {
        return !!this.activated;
      }
      get component() {
        if (!this.activated) throw new et(4012, !1);
        return this.activated.instance;
      }
      get activatedRoute() {
        if (!this.activated) throw new et(4012, !1);
        return this._activatedRoute;
      }
      get activatedRouteData() {
        return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
      }
      detach() {
        if (!this.activated) throw new et(4012, !1);
        this.location.detach();
        let e = this.activated;
        return (
          (this.activated = null),
          (this._activatedRoute = null),
          this.detachEvents.emit(e.instance),
          e
        );
      }
      attach(e, i) {
        (this.activated = e),
          (this._activatedRoute = i),
          this.location.insert(e.hostView),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.attachEvents.emit(e.instance);
      }
      deactivate() {
        if (this.activated) {
          let e = this.component;
          this.activated.destroy(),
            (this.activated = null),
            (this._activatedRoute = null),
            this.deactivateEvents.emit(e);
        }
      }
      activateWith(e, i) {
        if (this.isActivated) throw new et(4013, !1);
        this._activatedRoute = e;
        let o = this.location,
          s = e.snapshot.component,
          c = this.parentContexts.getOrCreateContext(this.name).children,
          l = new Oa(e, c, o.injector);
        (this.activated = o.createComponent(s, {
          index: o.length,
          injector: l,
          environmentInjector: i,
        })),
          this.changeDetector.markForCheck(),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.activateEvents.emit(this.activated.instance);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵdir = M({
        type: t,
        selectors: [["router-outlet"]],
        inputs: { name: "name" },
        outputs: {
          activateEvents: "activate",
          deactivateEvents: "deactivate",
          attachEvents: "attach",
          detachEvents: "detach",
        },
        exportAs: ["outlet"],
        standalone: !0,
        features: [Mt],
      }));
    let n = t;
    return n;
  })(),
  Oa = class n {
    __ngOutletInjector(t) {
      return new n(this.route, this.childContexts, t);
    }
    constructor(t, r, e) {
      (this.route = t), (this.childContexts = r), (this.parent = e);
    }
    get(t, r) {
      return t === ei
        ? this.route
        : t === Tn
          ? this.childContexts
          : this.parent.get(t, r);
    }
  },
  Hr = new C(""),
  yl = (() => {
    let t = class t {
      constructor() {
        this.outletDataSubscriptions = new Map();
      }
      bindActivatedRouteToOutletComponent(e) {
        this.unsubscribeFromRouteData(e), this.subscribeToRouteData(e);
      }
      unsubscribeFromRouteData(e) {
        this.outletDataSubscriptions.get(e)?.unsubscribe(),
          this.outletDataSubscriptions.delete(e);
      }
      subscribeToRouteData(e) {
        let { activatedRoute: i } = e,
          o = hi([i.queryParams, i.params, i.data])
            .pipe(
              It(
                ([a, s, c], l) => (
                  (c = b(b(b({}, a), s), c)),
                  l === 0 ? x(c) : Promise.resolve(c)
                ),
              ),
            )
            .subscribe((a) => {
              if (
                !e.isActivated ||
                !e.activatedComponentRef ||
                e.activatedRoute !== i ||
                i.component === null
              ) {
                this.unsubscribeFromRouteData(e);
                return;
              }
              let s = Uc(i.component);
              if (!s) {
                this.unsubscribeFromRouteData(e);
                return;
              }
              for (let { templateName: c } of s.inputs)
                e.activatedComponentRef.setInput(c, a[c]);
            });
        this.outletDataSubscriptions.set(e, o);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })();
function lm(n, t, r) {
  let e = Cn(n, t._root, r ? r._root : void 0);
  return new Fr(e, t);
}
function Cn(n, t, r) {
  if (r && n.shouldReuseRoute(t.value, r.value.snapshot)) {
    let e = r.value;
    e._futureSnapshot = t.value;
    let i = dm(n, t, r);
    return new Ft(e, i);
  } else {
    if (n.shouldAttach(t.value)) {
      let o = n.retrieve(t.value);
      if (o !== null) {
        let a = o.route;
        return (
          (a.value._futureSnapshot = t.value),
          (a.children = t.children.map((s) => Cn(n, s))),
          a
        );
      }
    }
    let e = hm(t.value),
      i = t.children.map((o) => Cn(n, o));
    return new Ft(e, i);
  }
}
function dm(n, t, r) {
  return t.children.map((e) => {
    for (let i of r.children)
      if (n.shouldReuseRoute(e.value, i.value.snapshot)) return Cn(n, e, i);
    return Cn(n, e);
  });
}
function hm(n) {
  return new ei(
    new kt(n.url),
    new kt(n.params),
    new kt(n.queryParams),
    new kt(n.fragment),
    new kt(n.data),
    n.outlet,
    n.component,
    n,
  );
}
var In = class {
    constructor(t, r) {
      (this.redirectTo = t), (this.navigationBehaviorOptions = r);
    }
  },
  Hl = "ngNavigationCancelingError";
function Lr(n, t) {
  let { redirectTo: r, navigationBehaviorOptions: e } = ti(t)
      ? { redirectTo: t, navigationBehaviorOptions: void 0 }
      : t,
    i = $l(!1, Pt.Redirect);
  return (i.url = r), (i.navigationBehaviorOptions = e), i;
}
function $l(n, t) {
  let r = new Error(`NavigationCancelingError: ${n || ""}`);
  return (r[Hl] = !0), (r.cancellationCode = t), r;
}
function um(n) {
  return Wl(n) && ti(n.url);
}
function Wl(n) {
  return !!n && n[Hl];
}
var mm = (n, t, r, e) =>
    R(
      (i) => (
        new Fa(t, i.targetRouterState, i.currentRouterState, r, e).activate(n),
        i
      ),
    ),
  Fa = class {
    constructor(t, r, e, i, o) {
      (this.routeReuseStrategy = t),
        (this.futureState = r),
        (this.currState = e),
        (this.forwardEvent = i),
        (this.inputBindingEnabled = o);
    }
    activate(t) {
      let r = this.futureState._root,
        e = this.currState ? this.currState._root : null;
      this.deactivateChildRoutes(r, e, t),
        ua(this.futureState.root),
        this.activateChildRoutes(r, e, t);
    }
    deactivateChildRoutes(t, r, e) {
      let i = xi(r);
      t.children.forEach((o) => {
        let a = o.value.outlet;
        this.deactivateRoutes(o, i[a], e), delete i[a];
      }),
        Object.values(i).forEach((o) => {
          this.deactivateRouteAndItsChildren(o, e);
        });
    }
    deactivateRoutes(t, r, e) {
      let i = t.value,
        o = r ? r.value : null;
      if (i === o)
        if (i.component) {
          let a = e.getContext(i.outlet);
          a && this.deactivateChildRoutes(t, r, a.children);
        } else this.deactivateChildRoutes(t, r, e);
      else o && this.deactivateRouteAndItsChildren(r, e);
    }
    deactivateRouteAndItsChildren(t, r) {
      t.value.component &&
      this.routeReuseStrategy.shouldDetach(t.value.snapshot)
        ? this.detachAndStoreRouteSubtree(t, r)
        : this.deactivateRouteAndOutlet(t, r);
    }
    detachAndStoreRouteSubtree(t, r) {
      let e = r.getContext(t.value.outlet),
        i = e && t.value.component ? e.children : r,
        o = xi(t);
      for (let a of Object.values(o)) this.deactivateRouteAndItsChildren(a, i);
      if (e && e.outlet) {
        let a = e.outlet.detach(),
          s = e.children.onOutletDeactivated();
        this.routeReuseStrategy.store(t.value.snapshot, {
          componentRef: a,
          route: t,
          contexts: s,
        });
      }
    }
    deactivateRouteAndOutlet(t, r) {
      let e = r.getContext(t.value.outlet),
        i = e && t.value.component ? e.children : r,
        o = xi(t);
      for (let a of Object.values(o)) this.deactivateRouteAndItsChildren(a, i);
      e &&
        (e.outlet && (e.outlet.deactivate(), e.children.onOutletDeactivated()),
        (e.attachRef = null),
        (e.route = null));
    }
    activateChildRoutes(t, r, e) {
      let i = xi(r);
      t.children.forEach((o) => {
        this.activateRoutes(o, i[o.value.outlet], e),
          this.forwardEvent(new ka(o.value.snapshot));
      }),
        t.children.length && this.forwardEvent(new Da(t.value.snapshot));
    }
    activateRoutes(t, r, e) {
      let i = t.value,
        o = r ? r.value : null;
      if ((ua(i), i === o))
        if (i.component) {
          let a = e.getOrCreateContext(i.outlet);
          this.activateChildRoutes(t, r, a.children);
        } else this.activateChildRoutes(t, r, e);
      else if (i.component) {
        let a = e.getOrCreateContext(i.outlet);
        if (this.routeReuseStrategy.shouldAttach(i.snapshot)) {
          let s = this.routeReuseStrategy.retrieve(i.snapshot);
          this.routeReuseStrategy.store(i.snapshot, null),
            a.children.onOutletReAttached(s.contexts),
            (a.attachRef = s.componentRef),
            (a.route = s.route.value),
            a.outlet && a.outlet.attach(s.componentRef, s.route.value),
            ua(s.route.value),
            this.activateChildRoutes(t, null, a.children);
        } else
          (a.attachRef = null),
            (a.route = i),
            a.outlet && a.outlet.activateWith(i, a.injector),
            this.activateChildRoutes(t, null, a.children);
      } else this.activateChildRoutes(t, null, e);
    }
  },
  jr = class {
    constructor(t) {
      (this.path = t), (this.route = this.path[this.path.length - 1]);
    }
  },
  Ei = class {
    constructor(t, r) {
      (this.component = t), (this.route = r);
    }
  };
function pm(n, t, r) {
  let e = n._root,
    i = t ? t._root : null;
  return fn(e, i, r, [e.value]);
}
function fm(n) {
  let t = n.routeConfig ? n.routeConfig.canActivateChild : null;
  return !t || t.length === 0 ? null : { node: n, guards: t };
}
function Ri(n, t) {
  let r = Symbol(),
    e = t.get(n, r);
  return e === r ? (typeof n == "function" && !lc(n) ? n : t.get(n)) : e;
}
function fn(
  n,
  t,
  r,
  e,
  i = { canDeactivateChecks: [], canActivateChecks: [] },
) {
  let o = xi(t);
  return (
    n.children.forEach((a) => {
      gm(a, o[a.value.outlet], r, e.concat([a.value]), i),
        delete o[a.value.outlet];
    }),
    Object.entries(o).forEach(([a, s]) => _n(s, r.getContext(a), i)),
    i
  );
}
function gm(
  n,
  t,
  r,
  e,
  i = { canDeactivateChecks: [], canActivateChecks: [] },
) {
  let o = n.value,
    a = t ? t.value : null,
    s = r ? r.getContext(n.value.outlet) : null;
  if (a && o.routeConfig === a.routeConfig) {
    let c = bm(a, o, o.routeConfig.runGuardsAndResolvers);
    c
      ? i.canActivateChecks.push(new jr(e))
      : ((o.data = a.data), (o._resolvedData = a._resolvedData)),
      o.component ? fn(n, t, s ? s.children : null, e, i) : fn(n, t, r, e, i),
      c &&
        s &&
        s.outlet &&
        s.outlet.isActivated &&
        i.canDeactivateChecks.push(new Ei(s.outlet.component, a));
  } else
    a && _n(t, s, i),
      i.canActivateChecks.push(new jr(e)),
      o.component
        ? fn(n, null, s ? s.children : null, e, i)
        : fn(n, null, r, e, i);
  return i;
}
function bm(n, t, r) {
  if (typeof r == "function") return r(n, t);
  switch (r) {
    case "pathParamsChange":
      return !Je(n.url, t.url);
    case "pathParamsOrQueryParamsChange":
      return !Je(n.url, t.url) || !ee(n.queryParams, t.queryParams);
    case "always":
      return !0;
    case "paramsOrQueryParamsChange":
      return !Ma(n, t) || !ee(n.queryParams, t.queryParams);
    case "paramsChange":
    default:
      return !Ma(n, t);
  }
}
function _n(n, t, r) {
  let e = xi(n),
    i = n.value;
  Object.entries(e).forEach(([o, a]) => {
    i.component
      ? t
        ? _n(a, t.children.getContext(o), r)
        : _n(a, null, r)
      : _n(a, t, r);
  }),
    i.component
      ? t && t.outlet && t.outlet.isActivated
        ? r.canDeactivateChecks.push(new Ei(t.outlet.component, i))
        : r.canDeactivateChecks.push(new Ei(null, i))
      : r.canDeactivateChecks.push(new Ei(null, i));
}
function Rn(n) {
  return typeof n == "function";
}
function vm(n) {
  return typeof n == "boolean";
}
function _m(n) {
  return n && Rn(n.canLoad);
}
function ym(n) {
  return n && Rn(n.canActivate);
}
function wm(n) {
  return n && Rn(n.canActivateChild);
}
function xm(n) {
  return n && Rn(n.canDeactivate);
}
function Cm(n) {
  return n && Rn(n.canMatch);
}
function Gl(n) {
  return n instanceof rc || n?.name === "EmptyError";
}
var Ir = Symbol("INITIAL_VALUE");
function Ti() {
  return It((n) =>
    hi(n.map((t) => t.pipe(Ct(1), vt(Ir)))).pipe(
      R((t) => {
        for (let r of t)
          if (r !== !0) {
            if (r === Ir) return Ir;
            if (r === !1 || Im(r)) return r;
          }
        return !0;
      }),
      Z((t) => t !== Ir),
      Ct(1),
    ),
  );
}
function Im(n) {
  return ti(n) || n instanceof In;
}
function Em(n, t) {
  return Rt((r) => {
    let {
      targetSnapshot: e,
      currentSnapshot: i,
      guards: { canActivateChecks: o, canDeactivateChecks: a },
    } = r;
    return a.length === 0 && o.length === 0
      ? x(X(b({}, r), { guardsResult: !0 }))
      : Dm(a, e, i, n).pipe(
          Rt((s) => (s && vm(s) ? Sm(e, o, n, t) : x(s))),
          R((s) => X(b({}, r), { guardsResult: s })),
        );
  });
}
function Dm(n, t, r, e) {
  return xt(n).pipe(
    Rt((i) => Mm(i.component, i.route, r, t, e)),
    we((i) => i !== !0, !0),
  );
}
function Sm(n, t, r, e) {
  return xt(t).pipe(
    ye((i) =>
      nr(
        Am(i.route.parent, e),
        km(i.route, e),
        Rm(n, i.path, r),
        Tm(n, i.route, r),
      ),
    ),
    we((i) => i !== !0, !0),
  );
}
function km(n, t) {
  return n !== null && t && t(new Sa(n)), x(!0);
}
function Am(n, t) {
  return n !== null && t && t(new Ea(n)), x(!0);
}
function Tm(n, t, r) {
  let e = t.routeConfig ? t.routeConfig.canActivate : null;
  if (!e || e.length === 0) return x(!0);
  let i = e.map((o) =>
    ze(() => {
      let a = An(t) ?? r,
        s = Ri(o, a),
        c = ym(s) ? s.canActivate(t, n) : Jt(a, () => s(t, n));
      return Me(c).pipe(we());
    }),
  );
  return x(i).pipe(Ti());
}
function Rm(n, t, r) {
  let e = t[t.length - 1],
    o = t
      .slice(0, t.length - 1)
      .reverse()
      .map((a) => fm(a))
      .filter((a) => a !== null)
      .map((a) =>
        ze(() => {
          let s = a.guards.map((c) => {
            let l = An(a.node) ?? r,
              h = Ri(c, l),
              p = wm(h) ? h.canActivateChild(e, n) : Jt(l, () => h(e, n));
            return Me(p).pipe(we());
          });
          return x(s).pipe(Ti());
        }),
      );
  return x(o).pipe(Ti());
}
function Mm(n, t, r, e, i) {
  let o = t && t.routeConfig ? t.routeConfig.canDeactivate : null;
  if (!o || o.length === 0) return x(!0);
  let a = o.map((s) => {
    let c = An(t) ?? i,
      l = Ri(s, c),
      h = xm(l) ? l.canDeactivate(n, t, r, e) : Jt(c, () => l(n, t, r, e));
    return Me(h).pipe(we());
  });
  return x(a).pipe(Ti());
}
function Om(n, t, r, e) {
  let i = t.canLoad;
  if (i === void 0 || i.length === 0) return x(!0);
  let o = i.map((a) => {
    let s = Ri(a, n),
      c = _m(s) ? s.canLoad(t, r) : Jt(n, () => s(t, r));
    return Me(c);
  });
  return x(o).pipe(Ti(), ql(e));
}
function ql(n) {
  return nc(
    dt((t) => {
      if (typeof t != "boolean") throw Lr(n, t);
    }),
    R((t) => t === !0),
  );
}
function Fm(n, t, r, e) {
  let i = t.canMatch;
  if (!i || i.length === 0) return x(!0);
  let o = i.map((a) => {
    let s = Ri(a, n),
      c = Cm(s) ? s.canMatch(t, r) : Jt(n, () => s(t, r));
    return Me(c);
  });
  return x(o).pipe(Ti(), ql(e));
}
var En = class {
    constructor(t) {
      this.segmentGroup = t || null;
    }
  },
  Dn = class extends Error {
    constructor(t) {
      super(), (this.urlTree = t);
    }
  };
function wi(n) {
  return Be(new En(n));
}
function Pm(n) {
  return Be(new et(4e3, !1));
}
function Nm(n) {
  return Be($l(!1, Pt.GuardRejected));
}
var Pa = class {
    constructor(t, r) {
      (this.urlSerializer = t), (this.urlTree = r);
    }
    lineralizeSegments(t, r) {
      let e = [],
        i = r.root;
      for (;;) {
        if (((e = e.concat(i.segments)), i.numberOfChildren === 0)) return x(e);
        if (i.numberOfChildren > 1 || !i.children[B])
          return Pm(`${t.redirectTo}`);
        i = i.children[B];
      }
    }
    applyRedirectCommands(t, r, e, i, o) {
      if (typeof r != "string") {
        let s = r,
          {
            queryParams: c,
            fragment: l,
            routeConfig: h,
            url: p,
            outlet: _,
            params: A,
            data: W,
            title: rt,
          } = i,
          _t = Jt(o, () =>
            s({
              params: A,
              data: W,
              queryParams: c,
              fragment: l,
              routeConfig: h,
              url: p,
              outlet: _,
              title: rt,
            }),
          );
        if (_t instanceof de) throw new Dn(_t);
        r = _t;
      }
      let a = this.applyRedirectCreateUrlTree(
        r,
        this.urlSerializer.parse(r),
        t,
        e,
      );
      if (r[0] === "/") throw new Dn(a);
      return a;
    }
    applyRedirectCreateUrlTree(t, r, e, i) {
      let o = this.createSegmentGroup(t, r.root, e, i);
      return new de(
        o,
        this.createQueryParams(r.queryParams, this.urlTree.queryParams),
        r.fragment,
      );
    }
    createQueryParams(t, r) {
      let e = {};
      return (
        Object.entries(t).forEach(([i, o]) => {
          if (typeof o == "string" && o[0] === ":") {
            let s = o.substring(1);
            e[i] = r[s];
          } else e[i] = o;
        }),
        e
      );
    }
    createSegmentGroup(t, r, e, i) {
      let o = this.createSegments(t, r.segments, e, i),
        a = {};
      return (
        Object.entries(r.children).forEach(([s, c]) => {
          a[s] = this.createSegmentGroup(t, c, e, i);
        }),
        new tt(o, a)
      );
    }
    createSegments(t, r, e, i) {
      return r.map((o) =>
        o.path[0] === ":"
          ? this.findPosParam(t, o, i)
          : this.findOrReturn(o, e),
      );
    }
    findPosParam(t, r, e) {
      let i = e[r.path.substring(1)];
      if (!i) throw new et(4001, !1);
      return i;
    }
    findOrReturn(t, r) {
      let e = 0;
      for (let i of r) {
        if (i.path === t.path) return r.splice(e), i;
        e++;
      }
      return t;
    }
  },
  Na = {
    matched: !1,
    consumedSegments: [],
    remainingSegments: [],
    parameters: {},
    positionalParamSegments: {},
  };
function Lm(n, t, r, e, i) {
  let o = Ql(n, t, r);
  return o.matched
    ? ((e = am(t, e)),
      Fm(e, t, r, i).pipe(R((a) => (a === !0 ? o : b({}, Na)))))
    : x(o);
}
function Ql(n, t, r) {
  if (t.path === "**") return jm(r);
  if (t.path === "")
    return t.pathMatch === "full" && (n.hasChildren() || r.length > 0)
      ? b({}, Na)
      : {
          matched: !0,
          consumedSegments: [],
          remainingSegments: r,
          parameters: {},
          positionalParamSegments: {},
        };
  let i = (t.matcher || Fu)(r, n, t);
  if (!i) return b({}, Na);
  let o = {};
  Object.entries(i.posParams ?? {}).forEach(([s, c]) => {
    o[s] = c.path;
  });
  let a =
    i.consumed.length > 0
      ? b(b({}, o), i.consumed[i.consumed.length - 1].parameters)
      : o;
  return {
    matched: !0,
    consumedSegments: i.consumed,
    remainingSegments: r.slice(i.consumed.length),
    parameters: a,
    positionalParamSegments: i.posParams ?? {},
  };
}
function jm(n) {
  return {
    matched: !0,
    parameters: n.length > 0 ? Sl(n).parameters : {},
    consumedSegments: n,
    remainingSegments: [],
    positionalParamSegments: {},
  };
}
function wl(n, t, r, e) {
  return r.length > 0 && zm(n, r, e)
    ? {
        segmentGroup: new tt(t, Bm(e, new tt(r, n.children))),
        slicedSegments: [],
      }
    : r.length === 0 && Um(n, r, e)
      ? {
          segmentGroup: new tt(n.segments, Vm(n, r, e, n.children)),
          slicedSegments: r,
        }
      : { segmentGroup: new tt(n.segments, n.children), slicedSegments: r };
}
function Vm(n, t, r, e) {
  let i = {};
  for (let o of r)
    if ($r(n, t, o) && !e[qt(o)]) {
      let a = new tt([], {});
      i[qt(o)] = a;
    }
  return b(b({}, e), i);
}
function Bm(n, t) {
  let r = {};
  r[B] = t;
  for (let e of n)
    if (e.path === "" && qt(e) !== B) {
      let i = new tt([], {});
      r[qt(e)] = i;
    }
  return r;
}
function zm(n, t, r) {
  return r.some((e) => $r(n, t, e) && qt(e) !== B);
}
function Um(n, t, r) {
  return r.some((e) => $r(n, t, e));
}
function $r(n, t, r) {
  return (n.hasChildren() || t.length > 0) && r.pathMatch === "full"
    ? !1
    : r.path === "";
}
function Hm(n, t, r) {
  return t.length === 0 && !n.children[r];
}
var La = class {};
function $m(n, t, r, e, i, o, a = "emptyOnly") {
  return new ja(n, t, r, e, i, a, o).recognize();
}
var Wm = 31,
  ja = class {
    constructor(t, r, e, i, o, a, s) {
      (this.injector = t),
        (this.configLoader = r),
        (this.rootComponentType = e),
        (this.config = i),
        (this.urlTree = o),
        (this.paramsInheritanceStrategy = a),
        (this.urlSerializer = s),
        (this.applyRedirects = new Pa(this.urlSerializer, this.urlTree)),
        (this.absoluteRedirectCount = 0),
        (this.allowRedirects = !0);
    }
    noMatchError(t) {
      return new et(4002, `'${t.segmentGroup}'`);
    }
    recognize() {
      let t = wl(this.urlTree.root, [], [], this.config).segmentGroup;
      return this.match(t).pipe(
        R(({ children: r, rootSnapshot: e }) => {
          let i = new Ft(e, r),
            o = new Nr("", i),
            a = Ju(e, [], this.urlTree.queryParams, this.urlTree.fragment);
          return (
            (a.queryParams = this.urlTree.queryParams),
            (o.url = this.urlSerializer.serialize(a)),
            { state: o, tree: a }
          );
        }),
      );
    }
    match(t) {
      let r = new Ii(
        [],
        Object.freeze({}),
        Object.freeze(b({}, this.urlTree.queryParams)),
        this.urlTree.fragment,
        Object.freeze({}),
        B,
        this.rootComponentType,
        null,
        {},
      );
      return this.processSegmentGroup(this.injector, this.config, t, B, r).pipe(
        R((e) => ({ children: e, rootSnapshot: r })),
        _e((e) => {
          if (e instanceof Dn)
            return (this.urlTree = e.urlTree), this.match(e.urlTree.root);
          throw e instanceof En ? this.noMatchError(e) : e;
        }),
      );
    }
    processSegmentGroup(t, r, e, i, o) {
      return e.segments.length === 0 && e.hasChildren()
        ? this.processChildren(t, r, e, o)
        : this.processSegment(t, r, e, e.segments, i, !0, o).pipe(
            R((a) => (a instanceof Ft ? [a] : [])),
          );
    }
    processChildren(t, r, e, i) {
      let o = [];
      for (let a of Object.keys(e.children))
        a === "primary" ? o.unshift(a) : o.push(a);
      return xt(o).pipe(
        ye((a) => {
          let s = e.children[a],
            c = sm(r, a);
          return this.processSegmentGroup(t, c, s, a, i);
        }),
        sc((a, s) => (a.push(...s), a)),
        Vo(null),
        ac(),
        Rt((a) => {
          if (a === null) return wi(e);
          let s = Yl(a);
          return Gm(s), x(s);
        }),
      );
    }
    processSegment(t, r, e, i, o, a, s) {
      return xt(r).pipe(
        ye((c) =>
          this.processSegmentAgainstRoute(
            c._injector ?? t,
            r,
            c,
            e,
            i,
            o,
            a,
            s,
          ).pipe(
            _e((l) => {
              if (l instanceof En) return x(null);
              throw l;
            }),
          ),
        ),
        we((c) => !!c),
        _e((c) => {
          if (Gl(c)) return Hm(e, i, o) ? x(new La()) : wi(e);
          throw c;
        }),
      );
    }
    processSegmentAgainstRoute(t, r, e, i, o, a, s, c) {
      return qt(e) !== a && (a === B || !$r(i, o, e))
        ? wi(i)
        : e.redirectTo === void 0
          ? this.matchSegmentAgainstRoute(t, i, e, o, a, c)
          : this.allowRedirects && s
            ? this.expandSegmentAgainstRouteUsingRedirect(t, i, r, e, o, a, c)
            : wi(i);
    }
    expandSegmentAgainstRouteUsingRedirect(t, r, e, i, o, a, s) {
      let {
        matched: c,
        parameters: l,
        consumedSegments: h,
        positionalParamSegments: p,
        remainingSegments: _,
      } = Ql(r, i, o);
      if (!c) return wi(r);
      typeof i.redirectTo == "string" &&
        i.redirectTo[0] === "/" &&
        (this.absoluteRedirectCount++,
        this.absoluteRedirectCount > Wm && (this.allowRedirects = !1));
      let A = new Ii(
          o,
          l,
          Object.freeze(b({}, this.urlTree.queryParams)),
          this.urlTree.fragment,
          xl(i),
          qt(i),
          i.component ?? i._loadedComponent ?? null,
          i,
          Cl(i),
        ),
        W = Pr(A, s, this.paramsInheritanceStrategy);
      (A.params = Object.freeze(W.params)), (A.data = Object.freeze(W.data));
      let rt = this.applyRedirects.applyRedirectCommands(
        h,
        i.redirectTo,
        p,
        A,
        t,
      );
      return this.applyRedirects
        .lineralizeSegments(i, rt)
        .pipe(Rt((_t) => this.processSegment(t, e, r, _t.concat(_), a, !1, s)));
    }
    matchSegmentAgainstRoute(t, r, e, i, o, a) {
      let s = Lm(r, e, i, t, this.urlSerializer);
      return (
        e.path === "**" && (r.children = {}),
        s.pipe(
          It((c) =>
            c.matched
              ? ((t = e._injector ?? t),
                this.getChildConfig(t, e, i).pipe(
                  It(({ routes: l }) => {
                    let h = e._loadedInjector ?? t,
                      {
                        parameters: p,
                        consumedSegments: _,
                        remainingSegments: A,
                      } = c,
                      W = new Ii(
                        _,
                        p,
                        Object.freeze(b({}, this.urlTree.queryParams)),
                        this.urlTree.fragment,
                        xl(e),
                        qt(e),
                        e.component ?? e._loadedComponent ?? null,
                        e,
                        Cl(e),
                      ),
                      rt = Pr(W, a, this.paramsInheritanceStrategy);
                    (W.params = Object.freeze(rt.params)),
                      (W.data = Object.freeze(rt.data));
                    let { segmentGroup: _t, slicedSegments: ve } = wl(
                      r,
                      _,
                      A,
                      l,
                    );
                    if (ve.length === 0 && _t.hasChildren())
                      return this.processChildren(h, l, _t, W).pipe(
                        R((Ve) => new Ft(W, Ve)),
                      );
                    if (l.length === 0 && ve.length === 0)
                      return x(new Ft(W, []));
                    let je = qt(e) === o;
                    return this.processSegment(
                      h,
                      l,
                      _t,
                      ve,
                      je ? B : o,
                      !0,
                      W,
                    ).pipe(R((Ve) => new Ft(W, Ve instanceof Ft ? [Ve] : [])));
                  }),
                ))
              : wi(r),
          ),
        )
      );
    }
    getChildConfig(t, r, e) {
      return r.children
        ? x({ routes: r.children, injector: t })
        : r.loadChildren
          ? r._loadedRoutes !== void 0
            ? x({ routes: r._loadedRoutes, injector: r._loadedInjector })
            : Om(t, r, e, this.urlSerializer).pipe(
                Rt((i) =>
                  i
                    ? this.configLoader.loadChildren(t, r).pipe(
                        dt((o) => {
                          (r._loadedRoutes = o.routes),
                            (r._loadedInjector = o.injector);
                        }),
                      )
                    : Nm(r),
                ),
              )
          : x({ routes: [], injector: t });
    }
  };
function Gm(n) {
  n.sort((t, r) =>
    t.value.outlet === B
      ? -1
      : r.value.outlet === B
        ? 1
        : t.value.outlet.localeCompare(r.value.outlet),
  );
}
function qm(n) {
  let t = n.value.routeConfig;
  return t && t.path === "";
}
function Yl(n) {
  let t = [],
    r = new Set();
  for (let e of n) {
    if (!qm(e)) {
      t.push(e);
      continue;
    }
    let i = t.find((o) => e.value.routeConfig === o.value.routeConfig);
    i !== void 0 ? (i.children.push(...e.children), r.add(i)) : t.push(e);
  }
  for (let e of r) {
    let i = Yl(e.children);
    t.push(new Ft(e.value, i));
  }
  return t.filter((e) => !r.has(e));
}
function xl(n) {
  return n.data || {};
}
function Cl(n) {
  return n.resolve || {};
}
function Qm(n, t, r, e, i, o) {
  return Rt((a) =>
    $m(n, t, r, e, a.extractedUrl, i, o).pipe(
      R(({ state: s, tree: c }) =>
        X(b({}, a), { targetSnapshot: s, urlAfterRedirects: c }),
      ),
    ),
  );
}
function Ym(n, t) {
  return Rt((r) => {
    let {
      targetSnapshot: e,
      guards: { canActivateChecks: i },
    } = r;
    if (!i.length) return x(r);
    let o = new Set(i.map((c) => c.route)),
      a = new Set();
    for (let c of o) if (!a.has(c)) for (let l of Zl(c)) a.add(l);
    let s = 0;
    return xt(a).pipe(
      ye((c) =>
        o.has(c)
          ? Zm(c, e, n, t)
          : ((c.data = Pr(c, c.parent, n).resolve), x(void 0)),
      ),
      dt(() => s++),
      Bo(1),
      Rt((c) => (s === a.size ? x(r) : Kt)),
    );
  });
}
function Zl(n) {
  let t = n.children.map((r) => Zl(r)).flat();
  return [n, ...t];
}
function Zm(n, t, r, e) {
  let i = n.routeConfig,
    o = n._resolve;
  return (
    i?.title !== void 0 && !Ul(i) && (o[Sn] = i.title),
    Km(o, n, t, e).pipe(
      R(
        (a) => (
          (n._resolvedData = a), (n.data = Pr(n, n.parent, r).resolve), null
        ),
      ),
    )
  );
}
function Km(n, t, r, e) {
  let i = fa(n);
  if (i.length === 0) return x({});
  let o = {};
  return xt(i).pipe(
    Rt((a) =>
      Xm(n[a], t, r, e).pipe(
        we(),
        dt((s) => {
          if (s instanceof In) throw Lr(new Si(), s);
          o[a] = s;
        }),
      ),
    ),
    Bo(1),
    Ji(o),
    _e((a) => (Gl(a) ? Kt : Be(a))),
  );
}
function Xm(n, t, r, e) {
  let i = An(t) ?? e,
    o = Ri(n, i),
    a = o.resolve ? o.resolve(t, r) : Jt(i, () => o(t, r));
  return Me(a);
}
function ma(n) {
  return It((t) => {
    let r = n(t);
    return r ? xt(r).pipe(R(() => t)) : x(t);
  });
}
var Kl = (() => {
    let t = class t {
      buildTitle(e) {
        let i,
          o = e.root;
        for (; o !== void 0; )
          (i = this.getResolvedTitleForRoute(o) ?? i),
            (o = o.children.find((a) => a.outlet === B));
        return i;
      }
      getResolvedTitleForRoute(e) {
        return e.data[Sn];
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = y({ token: t, factory: () => v(Jm), providedIn: "root" }));
    let n = t;
    return n;
  })(),
  Jm = (() => {
    let t = class t extends Kl {
      constructor(e) {
        super(), (this.title = e);
      }
      updateTitle(e) {
        let i = this.buildTitle(e);
        i !== void 0 && this.title.setTitle(i);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(fl));
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  Mn = new C("", { providedIn: "root", factory: () => ({}) }),
  tp = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵcmp = I({
        type: t,
        selectors: [["ng-component"]],
        standalone: !0,
        features: [U],
        decls: 1,
        vars: 0,
        template: function (i, o) {
          i & 1 && T(0, "router-outlet");
        },
        dependencies: [za],
        encapsulation: 2,
      }));
    let n = t;
    return n;
  })();
function Ua(n) {
  let t = n.children && n.children.map(Ua),
    r = t ? X(b({}, n), { children: t }) : b({}, n);
  return (
    !r.component &&
      !r.loadComponent &&
      (t || r.loadChildren) &&
      r.outlet &&
      r.outlet !== B &&
      (r.component = tp),
    r
  );
}
var Vr = new C(""),
  Ha = (() => {
    let t = class t {
      constructor() {
        (this.componentLoaders = new WeakMap()),
          (this.childrenLoaders = new WeakMap()),
          (this.compiler = v(pr));
      }
      loadComponent(e) {
        if (this.componentLoaders.get(e)) return this.componentLoaders.get(e);
        if (e._loadedComponent) return x(e._loadedComponent);
        this.onLoadStartListener && this.onLoadStartListener(e);
        let i = Me(e.loadComponent()).pipe(
            R(Xl),
            dt((a) => {
              this.onLoadEndListener && this.onLoadEndListener(e),
                (e._loadedComponent = a);
            }),
            He(() => {
              this.componentLoaders.delete(e);
            }),
          ),
          o = new Lo(i, () => new w()).pipe(No());
        return this.componentLoaders.set(e, o), o;
      }
      loadChildren(e, i) {
        if (this.childrenLoaders.get(i)) return this.childrenLoaders.get(i);
        if (i._loadedRoutes)
          return x({ routes: i._loadedRoutes, injector: i._loadedInjector });
        this.onLoadStartListener && this.onLoadStartListener(i);
        let a = ep(i, this.compiler, e, this.onLoadEndListener).pipe(
            He(() => {
              this.childrenLoaders.delete(i);
            }),
          ),
          s = new Lo(a, () => new w()).pipe(No());
        return this.childrenLoaders.set(i, s), s;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
function ep(n, t, r, e) {
  return Me(n.loadChildren()).pipe(
    R(Xl),
    Rt((i) =>
      i instanceof Dc || Array.isArray(i) ? x(i) : xt(t.compileModuleAsync(i)),
    ),
    R((i) => {
      e && e(n);
      let o,
        a,
        s = !1;
      return (
        Array.isArray(i)
          ? ((a = i), (s = !0))
          : ((o = i.create(r).injector),
            (a = o.get(Vr, [], { optional: !0, self: !0 }).flat())),
        { routes: a.map(Ua), injector: o }
      );
    }),
  );
}
function ip(n) {
  return n && typeof n == "object" && "default" in n;
}
function Xl(n) {
  return ip(n) ? n.default : n;
}
var $a = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = y({ token: t, factory: () => v(np), providedIn: "root" }));
    let n = t;
    return n;
  })(),
  np = (() => {
    let t = class t {
      shouldProcessUrl(e) {
        return !0;
      }
      extract(e) {
        return e;
      }
      merge(e, i) {
        return e;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  Jl = new C(""),
  td = new C("");
function rp(n, t, r) {
  let e = n.get(td),
    i = n.get(k);
  return n.get(S).runOutsideAngular(() => {
    if (!i.startViewTransition || e.skipNextTransition)
      return (e.skipNextTransition = !1), new Promise((l) => setTimeout(l));
    let o,
      a = new Promise((l) => {
        o = l;
      }),
      s = i.startViewTransition(() => (o(), op(n))),
      { onViewTransitionCreated: c } = e;
    return c && Jt(n, () => c({ transition: s, from: t, to: r })), a;
  });
}
function op(n) {
  return new Promise((t) => {
    Dt({ read: () => setTimeout(t) }, { injector: n });
  });
}
var ap = new C(""),
  Wa = (() => {
    let t = class t {
      get hasRequestedNavigation() {
        return this.navigationId !== 0;
      }
      constructor() {
        (this.currentNavigation = null),
          (this.currentTransition = null),
          (this.lastSuccessfulNavigation = null),
          (this.events = new w()),
          (this.transitionAbortSubject = new w()),
          (this.configLoader = v(Ha)),
          (this.environmentInjector = v(Ie)),
          (this.urlSerializer = v(kn)),
          (this.rootContexts = v(Tn)),
          (this.location = v(se)),
          (this.inputBindingEnabled = v(Hr, { optional: !0 }) !== null),
          (this.titleStrategy = v(Kl)),
          (this.options = v(Mn, { optional: !0 }) || {}),
          (this.paramsInheritanceStrategy =
            this.options.paramsInheritanceStrategy || "emptyOnly"),
          (this.urlHandlingStrategy = v($a)),
          (this.createViewTransition = v(Jl, { optional: !0 })),
          (this.navigationErrorHandler = v(ap, { optional: !0 })),
          (this.navigationId = 0),
          (this.afterPreactivation = () => x(void 0)),
          (this.rootComponentType = null);
        let e = (o) => this.events.next(new Ca(o)),
          i = (o) => this.events.next(new Ia(o));
        (this.configLoader.onLoadEndListener = i),
          (this.configLoader.onLoadStartListener = e);
      }
      complete() {
        this.transitions?.complete();
      }
      handleNavigationRequest(e) {
        let i = ++this.navigationId;
        this.transitions?.next(
          X(b(b({}, this.transitions.value), e), { id: i }),
        );
      }
      setupNavigations(e, i, o) {
        return (
          (this.transitions = new kt({
            id: 0,
            currentUrlTree: i,
            currentRawUrl: i,
            extractedUrl: this.urlHandlingStrategy.extract(i),
            urlAfterRedirects: this.urlHandlingStrategy.extract(i),
            rawUrl: i,
            extras: {},
            resolve: () => {},
            reject: () => {},
            promise: Promise.resolve(!0),
            source: vn,
            restoredState: null,
            currentSnapshot: o.snapshot,
            targetSnapshot: null,
            currentRouterState: o,
            targetRouterState: null,
            guards: { canActivateChecks: [], canDeactivateChecks: [] },
            guardsResult: null,
          })),
          this.transitions.pipe(
            Z((a) => a.id !== 0),
            R((a) =>
              X(b({}, a), {
                extractedUrl: this.urlHandlingStrategy.extract(a.rawUrl),
              }),
            ),
            It((a) => {
              let s = !1,
                c = !1;
              return x(a).pipe(
                It((l) => {
                  if (this.navigationId > a.id)
                    return (
                      this.cancelNavigationTransition(
                        a,
                        "",
                        Pt.SupersededByNewNavigation,
                      ),
                      Kt
                    );
                  (this.currentTransition = a),
                    (this.currentNavigation = {
                      id: l.id,
                      initialUrl: l.rawUrl,
                      extractedUrl: l.extractedUrl,
                      targetBrowserUrl:
                        typeof l.extras.browserUrl == "string"
                          ? this.urlSerializer.parse(l.extras.browserUrl)
                          : l.extras.browserUrl,
                      trigger: l.source,
                      extras: l.extras,
                      previousNavigation: this.lastSuccessfulNavigation
                        ? X(b({}, this.lastSuccessfulNavigation), {
                            previousNavigation: null,
                          })
                        : null,
                    });
                  let h =
                      !e.navigated ||
                      this.isUpdatingInternalState() ||
                      this.isUpdatedBrowserUrl(),
                    p = l.extras.onSameUrlNavigation ?? e.onSameUrlNavigation;
                  if (!h && p !== "reload") {
                    let _ = "";
                    return (
                      this.events.next(
                        new Re(
                          l.id,
                          this.urlSerializer.serialize(l.rawUrl),
                          _,
                          Tr.IgnoredSameUrlNavigation,
                        ),
                      ),
                      l.resolve(!1),
                      Kt
                    );
                  }
                  if (this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))
                    return x(l).pipe(
                      It((_) => {
                        let A = this.transitions?.getValue();
                        return (
                          this.events.next(
                            new ki(
                              _.id,
                              this.urlSerializer.serialize(_.extractedUrl),
                              _.source,
                              _.restoredState,
                            ),
                          ),
                          A !== this.transitions?.getValue()
                            ? Kt
                            : Promise.resolve(_)
                        );
                      }),
                      Qm(
                        this.environmentInjector,
                        this.configLoader,
                        this.rootComponentType,
                        e.config,
                        this.urlSerializer,
                        this.paramsInheritanceStrategy,
                      ),
                      dt((_) => {
                        (a.targetSnapshot = _.targetSnapshot),
                          (a.urlAfterRedirects = _.urlAfterRedirects),
                          (this.currentNavigation = X(
                            b({}, this.currentNavigation),
                            { finalUrl: _.urlAfterRedirects },
                          ));
                        let A = new Rr(
                          _.id,
                          this.urlSerializer.serialize(_.extractedUrl),
                          this.urlSerializer.serialize(_.urlAfterRedirects),
                          _.targetSnapshot,
                        );
                        this.events.next(A);
                      }),
                    );
                  if (
                    h &&
                    this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)
                  ) {
                    let {
                        id: _,
                        extractedUrl: A,
                        source: W,
                        restoredState: rt,
                        extras: _t,
                      } = l,
                      ve = new ki(_, this.urlSerializer.serialize(A), W, rt);
                    this.events.next(ve);
                    let je = Bl(this.rootComponentType).snapshot;
                    return (
                      (this.currentTransition = a =
                        X(b({}, l), {
                          targetSnapshot: je,
                          urlAfterRedirects: A,
                          extras: X(b({}, _t), {
                            skipLocationChange: !1,
                            replaceUrl: !1,
                          }),
                        })),
                      (this.currentNavigation.finalUrl = A),
                      x(a)
                    );
                  } else {
                    let _ = "";
                    return (
                      this.events.next(
                        new Re(
                          l.id,
                          this.urlSerializer.serialize(l.extractedUrl),
                          _,
                          Tr.IgnoredByUrlHandlingStrategy,
                        ),
                      ),
                      l.resolve(!1),
                      Kt
                    );
                  }
                }),
                dt((l) => {
                  let h = new _a(
                    l.id,
                    this.urlSerializer.serialize(l.extractedUrl),
                    this.urlSerializer.serialize(l.urlAfterRedirects),
                    l.targetSnapshot,
                  );
                  this.events.next(h);
                }),
                R(
                  (l) => (
                    (this.currentTransition = a =
                      X(b({}, l), {
                        guards: pm(
                          l.targetSnapshot,
                          l.currentSnapshot,
                          this.rootContexts,
                        ),
                      })),
                    a
                  ),
                ),
                Em(this.environmentInjector, (l) => this.events.next(l)),
                dt((l) => {
                  if (
                    ((a.guardsResult = l.guardsResult),
                    l.guardsResult && typeof l.guardsResult != "boolean")
                  )
                    throw Lr(this.urlSerializer, l.guardsResult);
                  let h = new ya(
                    l.id,
                    this.urlSerializer.serialize(l.extractedUrl),
                    this.urlSerializer.serialize(l.urlAfterRedirects),
                    l.targetSnapshot,
                    !!l.guardsResult,
                  );
                  this.events.next(h);
                }),
                Z((l) =>
                  l.guardsResult
                    ? !0
                    : (this.cancelNavigationTransition(l, "", Pt.GuardRejected),
                      !1),
                ),
                ma((l) => {
                  if (l.guards.canActivateChecks.length)
                    return x(l).pipe(
                      dt((h) => {
                        let p = new wa(
                          h.id,
                          this.urlSerializer.serialize(h.extractedUrl),
                          this.urlSerializer.serialize(h.urlAfterRedirects),
                          h.targetSnapshot,
                        );
                        this.events.next(p);
                      }),
                      It((h) => {
                        let p = !1;
                        return x(h).pipe(
                          Ym(
                            this.paramsInheritanceStrategy,
                            this.environmentInjector,
                          ),
                          dt({
                            next: () => (p = !0),
                            complete: () => {
                              p ||
                                this.cancelNavigationTransition(
                                  h,
                                  "",
                                  Pt.NoDataFromResolver,
                                );
                            },
                          }),
                        );
                      }),
                      dt((h) => {
                        let p = new xa(
                          h.id,
                          this.urlSerializer.serialize(h.extractedUrl),
                          this.urlSerializer.serialize(h.urlAfterRedirects),
                          h.targetSnapshot,
                        );
                        this.events.next(p);
                      }),
                    );
                }),
                ma((l) => {
                  let h = (p) => {
                    let _ = [];
                    p.routeConfig?.loadComponent &&
                      !p.routeConfig._loadedComponent &&
                      _.push(
                        this.configLoader.loadComponent(p.routeConfig).pipe(
                          dt((A) => {
                            p.component = A;
                          }),
                          R(() => {}),
                        ),
                      );
                    for (let A of p.children) _.push(...h(A));
                    return _;
                  };
                  return hi(h(l.targetSnapshot.root)).pipe(Vo(null), Ct(1));
                }),
                ma(() => this.afterPreactivation()),
                It(() => {
                  let { currentSnapshot: l, targetSnapshot: h } = a,
                    p = this.createViewTransition?.(
                      this.environmentInjector,
                      l.root,
                      h.root,
                    );
                  return p ? xt(p).pipe(R(() => a)) : x(a);
                }),
                R((l) => {
                  let h = lm(
                    e.routeReuseStrategy,
                    l.targetSnapshot,
                    l.currentRouterState,
                  );
                  return (
                    (this.currentTransition = a =
                      X(b({}, l), { targetRouterState: h })),
                    (this.currentNavigation.targetRouterState = h),
                    a
                  );
                }),
                dt(() => {
                  this.events.next(new xn());
                }),
                mm(
                  this.rootContexts,
                  e.routeReuseStrategy,
                  (l) => this.events.next(l),
                  this.inputBindingEnabled,
                ),
                Ct(1),
                dt({
                  next: (l) => {
                    (s = !0),
                      (this.lastSuccessfulNavigation = this.currentNavigation),
                      this.events.next(
                        new Qt(
                          l.id,
                          this.urlSerializer.serialize(l.extractedUrl),
                          this.urlSerializer.serialize(l.urlAfterRedirects),
                        ),
                      ),
                      this.titleStrategy?.updateTitle(
                        l.targetRouterState.snapshot,
                      ),
                      l.resolve(!0);
                  },
                  complete: () => {
                    s = !0;
                  },
                }),
                z(
                  this.transitionAbortSubject.pipe(
                    dt((l) => {
                      throw l;
                    }),
                  ),
                ),
                He(() => {
                  !s &&
                    !c &&
                    this.cancelNavigationTransition(
                      a,
                      "",
                      Pt.SupersededByNewNavigation,
                    ),
                    this.currentTransition?.id === a.id &&
                      ((this.currentNavigation = null),
                      (this.currentTransition = null));
                }),
                _e((l) => {
                  if (((c = !0), Wl(l)))
                    this.events.next(
                      new le(
                        a.id,
                        this.urlSerializer.serialize(a.extractedUrl),
                        l.message,
                        l.cancellationCode,
                      ),
                    ),
                      um(l)
                        ? this.events.next(
                            new Ai(l.url, l.navigationBehaviorOptions),
                          )
                        : a.resolve(!1);
                  else {
                    let h = new wn(
                      a.id,
                      this.urlSerializer.serialize(a.extractedUrl),
                      l,
                      a.targetSnapshot ?? void 0,
                    );
                    try {
                      let p = Jt(this.environmentInjector, () =>
                        this.navigationErrorHandler?.(h),
                      );
                      if (p instanceof In) {
                        let { message: _, cancellationCode: A } = Lr(
                          this.urlSerializer,
                          p,
                        );
                        this.events.next(
                          new le(
                            a.id,
                            this.urlSerializer.serialize(a.extractedUrl),
                            _,
                            A,
                          ),
                        ),
                          this.events.next(
                            new Ai(p.redirectTo, p.navigationBehaviorOptions),
                          );
                      } else {
                        this.events.next(h);
                        let _ = e.errorHandler(l);
                        a.resolve(!!_);
                      }
                    } catch (p) {
                      this.options.resolveNavigationPromiseOnError
                        ? a.resolve(!1)
                        : a.reject(p);
                    }
                  }
                  return Kt;
                }),
              );
            }),
          )
        );
      }
      cancelNavigationTransition(e, i, o) {
        let a = new le(
          e.id,
          this.urlSerializer.serialize(e.extractedUrl),
          i,
          o,
        );
        this.events.next(a), e.resolve(!1);
      }
      isUpdatingInternalState() {
        return (
          this.currentTransition?.extractedUrl.toString() !==
          this.currentTransition?.currentUrlTree.toString()
        );
      }
      isUpdatedBrowserUrl() {
        let e = this.urlHandlingStrategy.extract(
            this.urlSerializer.parse(this.location.path(!0)),
          ),
          i =
            this.currentNavigation?.targetBrowserUrl ??
            this.currentNavigation?.extractedUrl;
        return (
          e.toString() !== i?.toString() &&
          !this.currentNavigation?.extras.skipLocationChange
        );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
function sp(n) {
  return n !== vn;
}
var cp = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = y({ token: t, factory: () => v(lp), providedIn: "root" }));
    let n = t;
    return n;
  })(),
  Va = class {
    shouldDetach(t) {
      return !1;
    }
    store(t, r) {}
    shouldAttach(t) {
      return !1;
    }
    retrieve(t) {
      return null;
    }
    shouldReuseRoute(t, r) {
      return t.routeConfig === r.routeConfig;
    }
  },
  lp = (() => {
    let t = class t extends Va {};
    (t.ɵfac = (() => {
      let e;
      return function (o) {
        return (e || (e = te(t)))(o || t);
      };
    })()),
      (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  ed = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = y({ token: t, factory: () => v(dp), providedIn: "root" }));
    let n = t;
    return n;
  })(),
  dp = (() => {
    let t = class t extends ed {
      constructor() {
        super(...arguments),
          (this.location = v(se)),
          (this.urlSerializer = v(kn)),
          (this.options = v(Mn, { optional: !0 }) || {}),
          (this.canceledNavigationResolution =
            this.options.canceledNavigationResolution || "replace"),
          (this.urlHandlingStrategy = v($a)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.currentUrlTree = new de()),
          (this.rawUrlTree = this.currentUrlTree),
          (this.currentPageId = 0),
          (this.lastSuccessfulId = -1),
          (this.routerState = Bl(null)),
          (this.stateMemento = this.createStateMemento());
      }
      getCurrentUrlTree() {
        return this.currentUrlTree;
      }
      getRawUrlTree() {
        return this.rawUrlTree;
      }
      restoredState() {
        return this.location.getState();
      }
      get browserPageId() {
        return this.canceledNavigationResolution !== "computed"
          ? this.currentPageId
          : (this.restoredState()?.ɵrouterPageId ?? this.currentPageId);
      }
      getRouterState() {
        return this.routerState;
      }
      createStateMemento() {
        return {
          rawUrlTree: this.rawUrlTree,
          currentUrlTree: this.currentUrlTree,
          routerState: this.routerState,
        };
      }
      registerNonRouterCurrentEntryChangeListener(e) {
        return this.location.subscribe((i) => {
          i.type === "popstate" && e(i.url, i.state);
        });
      }
      handleRouterEvent(e, i) {
        if (e instanceof ki) this.stateMemento = this.createStateMemento();
        else if (e instanceof Re) this.rawUrlTree = i.initialUrl;
        else if (e instanceof Rr) {
          if (
            this.urlUpdateStrategy === "eager" &&
            !i.extras.skipLocationChange
          ) {
            let o = this.urlHandlingStrategy.merge(i.finalUrl, i.initialUrl);
            this.setBrowserUrl(i.targetBrowserUrl ?? o, i);
          }
        } else
          e instanceof xn
            ? ((this.currentUrlTree = i.finalUrl),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                i.finalUrl,
                i.initialUrl,
              )),
              (this.routerState = i.targetRouterState),
              this.urlUpdateStrategy === "deferred" &&
                !i.extras.skipLocationChange &&
                this.setBrowserUrl(i.targetBrowserUrl ?? this.rawUrlTree, i))
            : e instanceof le &&
                (e.code === Pt.GuardRejected ||
                  e.code === Pt.NoDataFromResolver)
              ? this.restoreHistory(i)
              : e instanceof wn
                ? this.restoreHistory(i, !0)
                : e instanceof Qt &&
                  ((this.lastSuccessfulId = e.id),
                  (this.currentPageId = this.browserPageId));
      }
      setBrowserUrl(e, i) {
        let o = e instanceof de ? this.urlSerializer.serialize(e) : e;
        if (this.location.isCurrentPathEqualTo(o) || i.extras.replaceUrl) {
          let a = this.browserPageId,
            s = b(b({}, i.extras.state), this.generateNgRouterState(i.id, a));
          this.location.replaceState(o, "", s);
        } else {
          let a = b(
            b({}, i.extras.state),
            this.generateNgRouterState(i.id, this.browserPageId + 1),
          );
          this.location.go(o, "", a);
        }
      }
      restoreHistory(e, i = !1) {
        if (this.canceledNavigationResolution === "computed") {
          let o = this.browserPageId,
            a = this.currentPageId - o;
          a !== 0
            ? this.location.historyGo(a)
            : this.currentUrlTree === e.finalUrl &&
              a === 0 &&
              (this.resetState(e), this.resetUrlToCurrentUrlTree());
        } else
          this.canceledNavigationResolution === "replace" &&
            (i && this.resetState(e), this.resetUrlToCurrentUrlTree());
      }
      resetState(e) {
        (this.routerState = this.stateMemento.routerState),
          (this.currentUrlTree = this.stateMemento.currentUrlTree),
          (this.rawUrlTree = this.urlHandlingStrategy.merge(
            this.currentUrlTree,
            e.finalUrl ?? this.rawUrlTree,
          ));
      }
      resetUrlToCurrentUrlTree() {
        this.location.replaceState(
          this.urlSerializer.serialize(this.rawUrlTree),
          "",
          this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId),
        );
      }
      generateNgRouterState(e, i) {
        return this.canceledNavigationResolution === "computed"
          ? { navigationId: e, ɵrouterPageId: i }
          : { navigationId: e };
      }
    };
    (t.ɵfac = (() => {
      let e;
      return function (o) {
        return (e || (e = te(t)))(o || t);
      };
    })()),
      (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  gn = (function (n) {
    return (
      (n[(n.COMPLETE = 0)] = "COMPLETE"),
      (n[(n.FAILED = 1)] = "FAILED"),
      (n[(n.REDIRECTING = 2)] = "REDIRECTING"),
      n
    );
  })(gn || {});
function id(n, t) {
  n.events
    .pipe(
      Z(
        (r) =>
          r instanceof Qt ||
          r instanceof le ||
          r instanceof wn ||
          r instanceof Re,
      ),
      R((r) =>
        r instanceof Qt || r instanceof Re
          ? gn.COMPLETE
          : (
                r instanceof le
                  ? r.code === Pt.Redirect ||
                    r.code === Pt.SupersededByNewNavigation
                  : !1
              )
            ? gn.REDIRECTING
            : gn.FAILED,
      ),
      Z((r) => r !== gn.REDIRECTING),
      Ct(1),
    )
    .subscribe(() => {
      t();
    });
}
function hp(n) {
  throw n;
}
var up = {
    paths: "exact",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "exact",
  },
  mp = {
    paths: "subset",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "subset",
  },
  he = (() => {
    let t = class t {
      get currentUrlTree() {
        return this.stateManager.getCurrentUrlTree();
      }
      get rawUrlTree() {
        return this.stateManager.getRawUrlTree();
      }
      get events() {
        return this._events;
      }
      get routerState() {
        return this.stateManager.getRouterState();
      }
      constructor() {
        (this.disposed = !1),
          (this.console = v(dr)),
          (this.stateManager = v(ed)),
          (this.options = v(Mn, { optional: !0 }) || {}),
          (this.pendingTasks = v(hc)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.navigationTransitions = v(Wa)),
          (this.urlSerializer = v(kn)),
          (this.location = v(se)),
          (this.urlHandlingStrategy = v($a)),
          (this._events = new w()),
          (this.errorHandler = this.options.errorHandler || hp),
          (this.navigated = !1),
          (this.routeReuseStrategy = v(cp)),
          (this.onSameUrlNavigation =
            this.options.onSameUrlNavigation || "ignore"),
          (this.config = v(Vr, { optional: !0 })?.flat() ?? []),
          (this.componentInputBindingEnabled = !!v(Hr, { optional: !0 })),
          (this.eventsSubscription = new Et()),
          this.resetConfig(this.config),
          this.navigationTransitions
            .setupNavigations(this, this.currentUrlTree, this.routerState)
            .subscribe({
              error: (e) => {
                this.console.warn(e);
              },
            }),
          this.subscribeToNavigationEvents();
      }
      subscribeToNavigationEvents() {
        let e = this.navigationTransitions.events.subscribe((i) => {
          try {
            let o = this.navigationTransitions.currentTransition,
              a = this.navigationTransitions.currentNavigation;
            if (o !== null && a !== null) {
              if (
                (this.stateManager.handleRouterEvent(i, a),
                i instanceof le &&
                  i.code !== Pt.Redirect &&
                  i.code !== Pt.SupersededByNewNavigation)
              )
                this.navigated = !0;
              else if (i instanceof Qt) this.navigated = !0;
              else if (i instanceof Ai) {
                let s = i.navigationBehaviorOptions,
                  c = this.urlHandlingStrategy.merge(i.url, o.currentRawUrl),
                  l = b(
                    {
                      browserUrl: o.extras.browserUrl,
                      info: o.extras.info,
                      skipLocationChange: o.extras.skipLocationChange,
                      replaceUrl:
                        o.extras.replaceUrl ||
                        this.urlUpdateStrategy === "eager" ||
                        sp(o.source),
                    },
                    s,
                  );
                this.scheduleNavigation(c, vn, null, l, {
                  resolve: o.resolve,
                  reject: o.reject,
                  promise: o.promise,
                });
              }
            }
            fp(i) && this._events.next(i);
          } catch (o) {
            this.navigationTransitions.transitionAbortSubject.next(o);
          }
        });
        this.eventsSubscription.add(e);
      }
      resetRootComponentType(e) {
        (this.routerState.root.component = e),
          (this.navigationTransitions.rootComponentType = e);
      }
      initialNavigation() {
        this.setUpLocationChangeListener(),
          this.navigationTransitions.hasRequestedNavigation ||
            this.navigateToSyncWithBrowser(
              this.location.path(!0),
              vn,
              this.stateManager.restoredState(),
            );
      }
      setUpLocationChangeListener() {
        this.nonRouterCurrentEntryChangeSubscription ??=
          this.stateManager.registerNonRouterCurrentEntryChangeListener(
            (e, i) => {
              setTimeout(() => {
                this.navigateToSyncWithBrowser(e, "popstate", i);
              }, 0);
            },
          );
      }
      navigateToSyncWithBrowser(e, i, o) {
        let a = { replaceUrl: !0 },
          s = o?.navigationId ? o : null;
        if (o) {
          let l = b({}, o);
          delete l.navigationId,
            delete l.ɵrouterPageId,
            Object.keys(l).length !== 0 && (a.state = l);
        }
        let c = this.parseUrl(e);
        this.scheduleNavigation(c, i, s, a);
      }
      get url() {
        return this.serializeUrl(this.currentUrlTree);
      }
      getCurrentNavigation() {
        return this.navigationTransitions.currentNavigation;
      }
      get lastSuccessfulNavigation() {
        return this.navigationTransitions.lastSuccessfulNavigation;
      }
      resetConfig(e) {
        (this.config = e.map(Ua)), (this.navigated = !1);
      }
      ngOnDestroy() {
        this.dispose();
      }
      dispose() {
        this.navigationTransitions.complete(),
          this.nonRouterCurrentEntryChangeSubscription &&
            (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
            (this.nonRouterCurrentEntryChangeSubscription = void 0)),
          (this.disposed = !0),
          this.eventsSubscription.unsubscribe();
      }
      createUrlTree(e, i = {}) {
        let {
            relativeTo: o,
            queryParams: a,
            fragment: s,
            queryParamsHandling: c,
            preserveFragment: l,
          } = i,
          h = l ? this.currentUrlTree.fragment : s,
          p = null;
        switch (c ?? this.options.defaultQueryParamsHandling) {
          case "merge":
            p = b(b({}, this.currentUrlTree.queryParams), a);
            break;
          case "preserve":
            p = this.currentUrlTree.queryParams;
            break;
          default:
            p = a || null;
        }
        p !== null && (p = this.removeEmptyProps(p));
        let _;
        try {
          let A = o ? o.snapshot : this.routerState.snapshot.root;
          _ = Nl(A);
        } catch {
          (typeof e[0] != "string" || e[0][0] !== "/") && (e = []),
            (_ = this.currentUrlTree.root);
        }
        return Ll(_, e, p, h ?? null);
      }
      navigateByUrl(e, i = { skipLocationChange: !1 }) {
        let o = ti(e) ? e : this.parseUrl(e),
          a = this.urlHandlingStrategy.merge(o, this.rawUrlTree);
        return this.scheduleNavigation(a, vn, null, i);
      }
      navigate(e, i = { skipLocationChange: !1 }) {
        return pp(e), this.navigateByUrl(this.createUrlTree(e, i), i);
      }
      serializeUrl(e) {
        return this.urlSerializer.serialize(e);
      }
      parseUrl(e) {
        try {
          return this.urlSerializer.parse(e);
        } catch {
          return this.urlSerializer.parse("/");
        }
      }
      isActive(e, i) {
        let o;
        if (
          (i === !0 ? (o = b({}, up)) : i === !1 ? (o = b({}, mp)) : (o = i),
          ti(e))
        )
          return gl(this.currentUrlTree, e, o);
        let a = this.parseUrl(e);
        return gl(this.currentUrlTree, a, o);
      }
      removeEmptyProps(e) {
        return Object.entries(e).reduce(
          (i, [o, a]) => (a != null && (i[o] = a), i),
          {},
        );
      }
      scheduleNavigation(e, i, o, a, s) {
        if (this.disposed) return Promise.resolve(!1);
        let c, l, h;
        s
          ? ((c = s.resolve), (l = s.reject), (h = s.promise))
          : (h = new Promise((_, A) => {
              (c = _), (l = A);
            }));
        let p = this.pendingTasks.add();
        return (
          id(this, () => {
            queueMicrotask(() => this.pendingTasks.remove(p));
          }),
          this.navigationTransitions.handleNavigationRequest({
            source: i,
            restoredState: o,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.currentUrlTree,
            rawUrl: e,
            extras: a,
            resolve: c,
            reject: l,
            promise: h,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState,
          }),
          h.catch((_) => Promise.reject(_))
        );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
function pp(n) {
  for (let t = 0; t < n.length; t++) if (n[t] == null) throw new et(4008, !1);
}
function fp(n) {
  return !(n instanceof xn) && !(n instanceof Ai);
}
var Br = (() => {
    let t = class t {
      constructor(e, i, o, a, s, c) {
        (this.router = e),
          (this.route = i),
          (this.tabIndexAttribute = o),
          (this.renderer = a),
          (this.el = s),
          (this.locationStrategy = c),
          (this.href = null),
          (this.onChanges = new w()),
          (this.preserveFragment = !1),
          (this.skipLocationChange = !1),
          (this.replaceUrl = !1),
          (this.routerLinkInput = null);
        let l = s.nativeElement.tagName?.toLowerCase();
        (this.isAnchorElement = l === "a" || l === "area"),
          this.isAnchorElement
            ? (this.subscription = e.events.subscribe((h) => {
                h instanceof Qt && this.updateHref();
              }))
            : this.setTabIndexIfNotOnNativeEl("0");
      }
      setTabIndexIfNotOnNativeEl(e) {
        this.tabIndexAttribute != null ||
          this.isAnchorElement ||
          this.applyAttributeValue("tabindex", e);
      }
      ngOnChanges(e) {
        this.isAnchorElement && this.updateHref(), this.onChanges.next(this);
      }
      set routerLink(e) {
        e == null
          ? ((this.routerLinkInput = null),
            this.setTabIndexIfNotOnNativeEl(null))
          : (ti(e)
              ? (this.routerLinkInput = e)
              : (this.routerLinkInput = Array.isArray(e) ? e : [e]),
            this.setTabIndexIfNotOnNativeEl("0"));
      }
      onClick(e, i, o, a, s) {
        let c = this.urlTree;
        if (
          c === null ||
          (this.isAnchorElement &&
            (e !== 0 ||
              i ||
              o ||
              a ||
              s ||
              (typeof this.target == "string" && this.target != "_self")))
        )
          return !0;
        let l = {
          skipLocationChange: this.skipLocationChange,
          replaceUrl: this.replaceUrl,
          state: this.state,
          info: this.info,
        };
        return this.router.navigateByUrl(c, l), !this.isAnchorElement;
      }
      ngOnDestroy() {
        this.subscription?.unsubscribe();
      }
      updateHref() {
        let e = this.urlTree;
        this.href =
          e !== null && this.locationStrategy
            ? this.locationStrategy?.prepareExternalUrl(
                this.router.serializeUrl(e),
              )
            : null;
        let i =
          this.href === null
            ? null
            : Cc(
                this.href,
                this.el.nativeElement.tagName.toLowerCase(),
                "href",
              );
        this.applyAttributeValue("href", i);
      }
      applyAttributeValue(e, i) {
        let o = this.renderer,
          a = this.el.nativeElement;
        i !== null ? o.setAttribute(a, e, i) : o.removeAttribute(a, e);
      }
      get urlTree() {
        return this.routerLinkInput === null
          ? null
          : ti(this.routerLinkInput)
            ? this.routerLinkInput
            : this.router.createUrlTree(this.routerLinkInput, {
                relativeTo:
                  this.relativeTo !== void 0 ? this.relativeTo : this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: this.preserveFragment,
              });
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(he), d(ei), Ee("tabindex"), d(cr), d(E), d(sn));
    }),
      (t.ɵdir = M({
        type: t,
        selectors: [["", "routerLink", ""]],
        hostVars: 1,
        hostBindings: function (i, o) {
          i & 1 &&
            Y("click", function (s) {
              return o.onClick(
                s.button,
                s.ctrlKey,
                s.shiftKey,
                s.altKey,
                s.metaKey,
              );
            }),
            i & 2 && G("target", o.target);
        },
        inputs: {
          target: "target",
          queryParams: "queryParams",
          fragment: "fragment",
          queryParamsHandling: "queryParamsHandling",
          state: "state",
          info: "info",
          relativeTo: "relativeTo",
          preserveFragment: [2, "preserveFragment", "preserveFragment", H],
          skipLocationChange: [
            2,
            "skipLocationChange",
            "skipLocationChange",
            H,
          ],
          replaceUrl: [2, "replaceUrl", "replaceUrl", H],
          routerLink: "routerLink",
        },
        standalone: !0,
        features: [st, Mt],
      }));
    let n = t;
    return n;
  })(),
  nd = (() => {
    let t = class t {
      get isActive() {
        return this._isActive;
      }
      constructor(e, i, o, a, s) {
        (this.router = e),
          (this.element = i),
          (this.renderer = o),
          (this.cdr = a),
          (this.link = s),
          (this.classes = []),
          (this._isActive = !1),
          (this.routerLinkActiveOptions = { exact: !1 }),
          (this.isActiveChange = new O()),
          (this.routerEventsSubscription = e.events.subscribe((c) => {
            c instanceof Qt && this.update();
          }));
      }
      ngAfterContentInit() {
        x(this.links.changes, x(null))
          .pipe(Xi())
          .subscribe((e) => {
            this.update(), this.subscribeToEachLinkOnChanges();
          });
      }
      subscribeToEachLinkOnChanges() {
        this.linkInputChangesSubscription?.unsubscribe();
        let e = [...this.links.toArray(), this.link]
          .filter((i) => !!i)
          .map((i) => i.onChanges);
        this.linkInputChangesSubscription = xt(e)
          .pipe(Xi())
          .subscribe((i) => {
            this._isActive !== this.isLinkActive(this.router)(i) &&
              this.update();
          });
      }
      set routerLinkActive(e) {
        let i = Array.isArray(e) ? e : e.split(" ");
        this.classes = i.filter((o) => !!o);
      }
      ngOnChanges(e) {
        this.update();
      }
      ngOnDestroy() {
        this.routerEventsSubscription.unsubscribe(),
          this.linkInputChangesSubscription?.unsubscribe();
      }
      update() {
        !this.links ||
          !this.router.navigated ||
          queueMicrotask(() => {
            let e = this.hasActiveLinks();
            this.classes.forEach((i) => {
              e
                ? this.renderer.addClass(this.element.nativeElement, i)
                : this.renderer.removeClass(this.element.nativeElement, i);
            }),
              e && this.ariaCurrentWhenActive !== void 0
                ? this.renderer.setAttribute(
                    this.element.nativeElement,
                    "aria-current",
                    this.ariaCurrentWhenActive.toString(),
                  )
                : this.renderer.removeAttribute(
                    this.element.nativeElement,
                    "aria-current",
                  ),
              this._isActive !== e &&
                ((this._isActive = e),
                this.cdr.markForCheck(),
                this.isActiveChange.emit(e));
          });
      }
      isLinkActive(e) {
        let i = gp(this.routerLinkActiveOptions)
          ? this.routerLinkActiveOptions
          : this.routerLinkActiveOptions.exact || !1;
        return (o) => {
          let a = o.urlTree;
          return a ? e.isActive(a, i) : !1;
        };
      }
      hasActiveLinks() {
        let e = this.isLinkActive(this.router);
        return (this.link && e(this.link)) || this.links.some(e);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(he), d(E), d(cr), d(ot), d(Br, 8));
    }),
      (t.ɵdir = M({
        type: t,
        selectors: [["", "routerLinkActive", ""]],
        contentQueries: function (i, o, a) {
          if ((i & 1 && ct(a, Br, 5), i & 2)) {
            let s;
            P((s = N())) && (o.links = s);
          }
        },
        inputs: {
          routerLinkActiveOptions: "routerLinkActiveOptions",
          ariaCurrentWhenActive: "ariaCurrentWhenActive",
          routerLinkActive: "routerLinkActive",
        },
        outputs: { isActiveChange: "isActiveChange" },
        exportAs: ["routerLinkActive"],
        standalone: !0,
        features: [Mt],
      }));
    let n = t;
    return n;
  })();
function gp(n) {
  return !!n.paths;
}
var zr = class {};
var bp = (() => {
    let t = class t {
      constructor(e, i, o, a, s) {
        (this.router = e),
          (this.injector = o),
          (this.preloadingStrategy = a),
          (this.loader = s);
      }
      setUpPreloading() {
        this.subscription = this.router.events
          .pipe(
            Z((e) => e instanceof Qt),
            ye(() => this.preload()),
          )
          .subscribe(() => {});
      }
      preload() {
        return this.processRoutes(this.injector, this.router.config);
      }
      ngOnDestroy() {
        this.subscription && this.subscription.unsubscribe();
      }
      processRoutes(e, i) {
        let o = [];
        for (let a of i) {
          a.providers &&
            !a._injector &&
            (a._injector = Wo(a.providers, e, `Route: ${a.path}`));
          let s = a._injector ?? e,
            c = a._loadedInjector ?? s;
          ((a.loadChildren && !a._loadedRoutes && a.canLoad === void 0) ||
            (a.loadComponent && !a._loadedComponent)) &&
            o.push(this.preloadConfig(s, a)),
            (a.children || a._loadedRoutes) &&
              o.push(this.processRoutes(c, a.children ?? a._loadedRoutes));
        }
        return xt(o).pipe(Xi());
      }
      preloadConfig(e, i) {
        return this.preloadingStrategy.preload(i, () => {
          let o;
          i.loadChildren && i.canLoad === void 0
            ? (o = this.loader.loadChildren(e, i))
            : (o = x(null));
          let a = o.pipe(
            Rt((s) =>
              s === null
                ? x(void 0)
                : ((i._loadedRoutes = s.routes),
                  (i._loadedInjector = s.injector),
                  this.processRoutes(s.injector ?? e, s.routes)),
            ),
          );
          if (i.loadComponent && !i._loadedComponent) {
            let s = this.loader.loadComponent(i);
            return xt([a, s]).pipe(Xi());
          } else return a;
        });
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(he), f(pr), f(Ie), f(zr), f(Ha));
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  rd = new C(""),
  vp = (() => {
    let t = class t {
      constructor(e, i, o, a, s = {}) {
        (this.urlSerializer = e),
          (this.transitions = i),
          (this.viewportScroller = o),
          (this.zone = a),
          (this.options = s),
          (this.lastId = 0),
          (this.lastSource = "imperative"),
          (this.restoredId = 0),
          (this.store = {}),
          (s.scrollPositionRestoration ||= "disabled"),
          (s.anchorScrolling ||= "disabled");
      }
      init() {
        this.options.scrollPositionRestoration !== "disabled" &&
          this.viewportScroller.setHistoryScrollRestoration("manual"),
          (this.routerEventsSubscription = this.createScrollEvents()),
          (this.scrollEventsSubscription = this.consumeScrollEvents());
      }
      createScrollEvents() {
        return this.transitions.events.subscribe((e) => {
          e instanceof ki
            ? ((this.store[this.lastId] =
                this.viewportScroller.getScrollPosition()),
              (this.lastSource = e.navigationTrigger),
              (this.restoredId = e.restoredState
                ? e.restoredState.navigationId
                : 0))
            : e instanceof Qt
              ? ((this.lastId = e.id),
                this.scheduleScrollEvent(
                  e,
                  this.urlSerializer.parse(e.urlAfterRedirects).fragment,
                ))
              : e instanceof Re &&
                e.code === Tr.IgnoredSameUrlNavigation &&
                ((this.lastSource = void 0),
                (this.restoredId = 0),
                this.scheduleScrollEvent(
                  e,
                  this.urlSerializer.parse(e.url).fragment,
                ));
        });
      }
      consumeScrollEvents() {
        return this.transitions.events.subscribe((e) => {
          e instanceof Mr &&
            (e.position
              ? this.options.scrollPositionRestoration === "top"
                ? this.viewportScroller.scrollToPosition([0, 0])
                : this.options.scrollPositionRestoration === "enabled" &&
                  this.viewportScroller.scrollToPosition(e.position)
              : e.anchor && this.options.anchorScrolling === "enabled"
                ? this.viewportScroller.scrollToAnchor(e.anchor)
                : this.options.scrollPositionRestoration !== "disabled" &&
                  this.viewportScroller.scrollToPosition([0, 0]));
        });
      }
      scheduleScrollEvent(e, i) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => {
            this.zone.run(() => {
              this.transitions.events.next(
                new Mr(
                  e,
                  this.lastSource === "popstate"
                    ? this.store[this.restoredId]
                    : null,
                  i,
                ),
              );
            });
          }, 0);
        });
      }
      ngOnDestroy() {
        this.routerEventsSubscription?.unsubscribe(),
          this.scrollEventsSubscription?.unsubscribe();
      }
    };
    (t.ɵfac = function (i) {
      Ge();
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })();
function _p(n) {
  return n.routerState.root;
}
function On(n, t) {
  return { ɵkind: n, ɵproviders: t };
}
function yp() {
  let n = v(at);
  return (t) => {
    let r = n.get(an);
    if (t !== r.components[0]) return;
    let e = n.get(he),
      i = n.get(od);
    n.get(Ga) === 1 && e.initialNavigation(),
      n.get(ad, null, Uo.Optional)?.setUpPreloading(),
      n.get(rd, null, Uo.Optional)?.init(),
      e.resetRootComponentType(r.componentTypes[0]),
      i.closed || (i.next(), i.complete(), i.unsubscribe());
  };
}
var od = new C("", { factory: () => new w() }),
  Ga = new C("", { providedIn: "root", factory: () => 1 });
function wp() {
  return On(2, [
    { provide: Ga, useValue: 0 },
    {
      provide: Qo,
      multi: !0,
      deps: [at],
      useFactory: (t) => {
        let r = t.get(Wc, Promise.resolve());
        return () =>
          r.then(
            () =>
              new Promise((e) => {
                let i = t.get(he),
                  o = t.get(od);
                id(i, () => {
                  e(!0);
                }),
                  (t.get(Wa).afterPreactivation = () => (
                    e(!0), o.closed ? x(void 0) : o
                  )),
                  i.initialNavigation();
              }),
          );
      },
    },
  ]);
}
function xp() {
  return On(3, [
    {
      provide: Qo,
      multi: !0,
      useFactory: () => {
        let t = v(he);
        return () => {
          t.setUpLocationChangeListener();
        };
      },
    },
    { provide: Ga, useValue: 2 },
  ]);
}
var ad = new C("");
function Cp(n) {
  return On(0, [
    { provide: ad, useExisting: bp },
    { provide: zr, useExisting: n },
  ]);
}
function Ip() {
  return On(8, [yl, { provide: Hr, useExisting: yl }]);
}
function Ep(n) {
  let t = [
    { provide: Jl, useValue: rp },
    {
      provide: td,
      useValue: b({ skipNextTransition: !!n?.skipInitialTransition }, n),
    },
  ];
  return On(9, t);
}
var Il = new C("ROUTER_FORROOT_GUARD"),
  Dp = [
    se,
    { provide: kn, useClass: Si },
    he,
    Tn,
    { provide: ei, useFactory: _p, deps: [he] },
    Ha,
    [],
  ],
  qa = (() => {
    let t = class t {
      constructor(e) {}
      static forRoot(e, i) {
        return {
          ngModule: t,
          providers: [
            Dp,
            [],
            { provide: Vr, multi: !0, useValue: e },
            { provide: Il, useFactory: Tp, deps: [[he, new or(), new Ho()]] },
            { provide: Mn, useValue: i || {} },
            i?.useHash ? kp() : Ap(),
            Sp(),
            i?.preloadingStrategy ? Cp(i.preloadingStrategy).ɵproviders : [],
            i?.initialNavigation ? Rp(i) : [],
            i?.bindToComponentInputs ? Ip().ɵproviders : [],
            i?.enableViewTransitions ? Ep().ɵproviders : [],
            Mp(),
          ],
        };
      }
      static forChild(e) {
        return {
          ngModule: t,
          providers: [{ provide: Vr, multi: !0, useValue: e }],
        };
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(Il, 8));
    }),
      (t.ɵmod = j({ type: t })),
      (t.ɵinj = L({}));
    let n = t;
    return n;
  })();
function Sp() {
  return {
    provide: rd,
    useFactory: () => {
      let n = v(Jc),
        t = v(S),
        r = v(Mn),
        e = v(Wa),
        i = v(kn);
      return (
        r.scrollOffset && n.setOffset(r.scrollOffset), new vp(i, e, n, t, r)
      );
    },
  };
}
function kp() {
  return { provide: sn, useClass: qc };
}
function Ap() {
  return { provide: sn, useClass: Gc };
}
function Tp(n) {
  return "guarded";
}
function Rp(n) {
  return [
    n.initialNavigation === "disabled" ? xp().ɵproviders : [],
    n.initialNavigation === "enabledBlocking" ? wp().ɵproviders : [],
  ];
}
var El = new C("");
function Mp() {
  return [
    { provide: El, useFactory: yp },
    { provide: Nc, multi: !0, useExisting: El },
  ];
}
var Ya;
try {
  Ya = typeof Intl < "u" && Intl.v8BreakIterator;
} catch {
  Ya = !1;
}
var q = (() => {
  let t = class t {
    constructor(e) {
      (this._platformId = e),
        (this.isBrowser = this._platformId
          ? Xc(this._platformId)
          : typeof document == "object" && !!document),
        (this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent)),
        (this.TRIDENT =
          this.isBrowser && /(msie|trident)/i.test(navigator.userAgent)),
        (this.BLINK =
          this.isBrowser &&
          !!(window.chrome || Ya) &&
          typeof CSS < "u" &&
          !this.EDGE &&
          !this.TRIDENT),
        (this.WEBKIT =
          this.isBrowser &&
          /AppleWebKit/i.test(navigator.userAgent) &&
          !this.BLINK &&
          !this.EDGE &&
          !this.TRIDENT),
        (this.IOS =
          this.isBrowser &&
          /iPad|iPhone|iPod/.test(navigator.userAgent) &&
          !("MSStream" in window)),
        (this.FIREFOX =
          this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent)),
        (this.ANDROID =
          this.isBrowser &&
          /android/i.test(navigator.userAgent) &&
          !this.TRIDENT),
        (this.SAFARI =
          this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT);
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(f(We));
  }),
    (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let n = t;
  return n;
})();
var Fn;
function Op() {
  if (Fn == null && typeof window < "u")
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", { get: () => (Fn = !0) }),
      );
    } finally {
      Fn = Fn || !1;
    }
  return Fn;
}
function Oe(n) {
  return Op() ? n : !!n.capture;
}
var Yt = (function (n) {
    return (
      (n[(n.NORMAL = 0)] = "NORMAL"),
      (n[(n.NEGATED = 1)] = "NEGATED"),
      (n[(n.INVERTED = 2)] = "INVERTED"),
      n
    );
  })(Yt || {}),
  Wr,
  ii;
function Gr() {
  if (ii == null) {
    if (
      typeof document != "object" ||
      !document ||
      typeof Element != "function" ||
      !Element
    )
      return (ii = !1), ii;
    if ("scrollBehavior" in document.documentElement.style) ii = !0;
    else {
      let n = Element.prototype.scrollTo;
      n ? (ii = !/\{\s*\[native code\]\s*\}/.test(n.toString())) : (ii = !1);
    }
  }
  return ii;
}
function Mi() {
  if (typeof document != "object" || !document) return Yt.NORMAL;
  if (Wr == null) {
    let n = document.createElement("div"),
      t = n.style;
    (n.dir = "rtl"),
      (t.width = "1px"),
      (t.overflow = "auto"),
      (t.visibility = "hidden"),
      (t.pointerEvents = "none"),
      (t.position = "absolute");
    let r = document.createElement("div"),
      e = r.style;
    (e.width = "2px"),
      (e.height = "1px"),
      n.appendChild(r),
      document.body.appendChild(n),
      (Wr = Yt.NORMAL),
      n.scrollLeft === 0 &&
        ((n.scrollLeft = 1),
        (Wr = n.scrollLeft === 0 ? Yt.NEGATED : Yt.INVERTED)),
      n.remove();
  }
  return Wr;
}
var Qa;
function Fp() {
  if (Qa == null) {
    let n = typeof document < "u" ? document.head : null;
    Qa = !!(n && (n.createShadowRoot || n.attachShadow));
  }
  return Qa;
}
function cd(n) {
  if (Fp()) {
    let t = n.getRootNode ? n.getRootNode() : null;
    if (typeof ShadowRoot < "u" && ShadowRoot && t instanceof ShadowRoot)
      return t;
  }
  return null;
}
function Pn() {
  let n = typeof document < "u" && document ? document.activeElement : null;
  for (; n && n.shadowRoot; ) {
    let t = n.shadowRoot.activeElement;
    if (t === n) break;
    n = t;
  }
  return n;
}
function Bt(n) {
  return n.composedPath ? n.composedPath()[0] : n.target;
}
function Nn() {
  return (
    (typeof __karma__ < "u" && !!__karma__) ||
    (typeof jasmine < "u" && !!jasmine) ||
    (typeof jest < "u" && !!jest) ||
    (typeof Mocha < "u" && !!Mocha)
  );
}
function zt(n, ...t) {
  return t.length
    ? t.some((r) => n[r])
    : n.altKey || n.shiftKey || n.ctrlKey || n.metaKey;
}
function ie(n) {
  return n != null && `${n}` != "false";
}
function Ut(n, t = 0) {
  return Pp(n) ? Number(n) : arguments.length === 2 ? t : 0;
}
function Pp(n) {
  return !isNaN(parseFloat(n)) && !isNaN(Number(n));
}
function Oi(n) {
  return Array.isArray(n) ? n : [n];
}
function bt(n) {
  return n == null ? "" : typeof n == "string" ? n : `${n}px`;
}
function Zt(n) {
  return n instanceof E ? n.nativeElement : n;
}
function Np(n) {
  if (n.type === "characterData" && n.target instanceof Comment) return !0;
  if (n.type === "childList") {
    for (let t = 0; t < n.addedNodes.length; t++)
      if (!(n.addedNodes[t] instanceof Comment)) return !1;
    for (let t = 0; t < n.removedNodes.length; t++)
      if (!(n.removedNodes[t] instanceof Comment)) return !1;
    return !0;
  }
  return !1;
}
var Lp = (() => {
    let t = class t {
      create(e) {
        return typeof MutationObserver > "u" ? null : new MutationObserver(e);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  jp = (() => {
    let t = class t {
      constructor(e) {
        (this._mutationObserverFactory = e),
          (this._observedElements = new Map()),
          (this._ngZone = v(S));
      }
      ngOnDestroy() {
        this._observedElements.forEach((e, i) => this._cleanupObserver(i));
      }
      observe(e) {
        let i = Zt(e);
        return new Nt((o) => {
          let s = this._observeElement(i)
            .pipe(
              R((c) => c.filter((l) => !Np(l))),
              Z((c) => !!c.length),
            )
            .subscribe((c) => {
              this._ngZone.run(() => {
                o.next(c);
              });
            });
          return () => {
            s.unsubscribe(), this._unobserveElement(i);
          };
        });
      }
      _observeElement(e) {
        return this._ngZone.runOutsideAngular(() => {
          if (this._observedElements.has(e))
            this._observedElements.get(e).count++;
          else {
            let i = new w(),
              o = this._mutationObserverFactory.create((a) => i.next(a));
            o &&
              o.observe(e, { characterData: !0, childList: !0, subtree: !0 }),
              this._observedElements.set(e, {
                observer: o,
                stream: i,
                count: 1,
              });
          }
          return this._observedElements.get(e).stream;
        });
      }
      _unobserveElement(e) {
        this._observedElements.has(e) &&
          (this._observedElements.get(e).count--,
          this._observedElements.get(e).count || this._cleanupObserver(e));
      }
      _cleanupObserver(e) {
        if (this._observedElements.has(e)) {
          let { observer: i, stream: o } = this._observedElements.get(e);
          i && i.disconnect(), o.complete(), this._observedElements.delete(e);
        }
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(Lp));
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  ld = (() => {
    let t = class t {
      get disabled() {
        return this._disabled;
      }
      set disabled(e) {
        (this._disabled = e),
          this._disabled ? this._unsubscribe() : this._subscribe();
      }
      get debounce() {
        return this._debounce;
      }
      set debounce(e) {
        (this._debounce = Ut(e)), this._subscribe();
      }
      constructor(e, i) {
        (this._contentObserver = e),
          (this._elementRef = i),
          (this.event = new O()),
          (this._disabled = !1),
          (this._currentSubscription = null);
      }
      ngAfterContentInit() {
        !this._currentSubscription && !this.disabled && this._subscribe();
      }
      ngOnDestroy() {
        this._unsubscribe();
      }
      _subscribe() {
        this._unsubscribe();
        let e = this._contentObserver.observe(this._elementRef);
        this._currentSubscription = (
          this.debounce ? e.pipe(Xt(this.debounce)) : e
        ).subscribe(this.event);
      }
      _unsubscribe() {
        this._currentSubscription?.unsubscribe();
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(jp), d(E));
    }),
      (t.ɵdir = M({
        type: t,
        selectors: [["", "cdkObserveContent", ""]],
        inputs: {
          disabled: [2, "cdkObserveContentDisabled", "disabled", H],
          debounce: "debounce",
        },
        outputs: { event: "cdkObserveContent" },
        exportAs: ["cdkObserveContent"],
        standalone: !0,
        features: [st],
      }));
    let n = t;
    return n;
  })();
var dd = new Set(),
  ni,
  Vp = (() => {
    let t = class t {
      constructor(e, i) {
        (this._platform = e),
          (this._nonce = i),
          (this._matchMedia =
            this._platform.isBrowser && window.matchMedia
              ? window.matchMedia.bind(window)
              : zp);
      }
      matchMedia(e) {
        return (
          (this._platform.WEBKIT || this._platform.BLINK) && Bp(e, this._nonce),
          this._matchMedia(e)
        );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(q), f(nn, 8));
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
function Bp(n, t) {
  if (!dd.has(n))
    try {
      ni ||
        ((ni = document.createElement("style")),
        t && ni.setAttribute("nonce", t),
        ni.setAttribute("type", "text/css"),
        document.head.appendChild(ni)),
        ni.sheet &&
          (ni.sheet.insertRule(`@media ${n} {body{ }}`, 0), dd.add(n));
    } catch (r) {
      console.error(r);
    }
}
function zp(n) {
  return {
    matches: n === "all" || n === "",
    media: n,
    addListener: () => {},
    removeListener: () => {},
  };
}
var ud = (() => {
  let t = class t {
    constructor(e, i) {
      (this._mediaMatcher = e),
        (this._zone = i),
        (this._queries = new Map()),
        (this._destroySubject = new w());
    }
    ngOnDestroy() {
      this._destroySubject.next(), this._destroySubject.complete();
    }
    isMatched(e) {
      return hd(Oi(e)).some((o) => this._registerQuery(o).mql.matches);
    }
    observe(e) {
      let o = hd(Oi(e)).map((s) => this._registerQuery(s).observable),
        a = hi(o);
      return (
        (a = nr(a.pipe(Ct(1)), a.pipe(ui(1), Xt(0)))),
        a.pipe(
          R((s) => {
            let c = { matches: !1, breakpoints: {} };
            return (
              s.forEach(({ matches: l, query: h }) => {
                (c.matches = c.matches || l), (c.breakpoints[h] = l);
              }),
              c
            );
          }),
        )
      );
    }
    _registerQuery(e) {
      if (this._queries.has(e)) return this._queries.get(e);
      let i = this._mediaMatcher.matchMedia(e),
        a = {
          observable: new Nt((s) => {
            let c = (l) => this._zone.run(() => s.next(l));
            return (
              i.addListener(c),
              () => {
                i.removeListener(c);
              }
            );
          }).pipe(
            vt(i),
            R(({ matches: s }) => ({ query: e, matches: s })),
            z(this._destroySubject),
          ),
          mql: i,
        };
      return this._queries.set(e, a), a;
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(f(Vp), f(S));
  }),
    (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let n = t;
  return n;
})();
function hd(n) {
  return n
    .map((t) => t.split(","))
    .reduce((t, r) => t.concat(r))
    .map((t) => t.trim());
}
var rf = 200,
  Ka = class {
    constructor(t, r) {
      (this._letterKeyStream = new w()),
        (this._items = []),
        (this._selectedItemIndex = -1),
        (this._pressedLetters = []),
        (this._selectedItem = new w()),
        (this.selectedItem = this._selectedItem);
      let e = typeof r?.debounceInterval == "number" ? r.debounceInterval : rf;
      r?.skipPredicate && (this._skipPredicateFn = r.skipPredicate),
        this.setItems(t),
        this._setupKeyHandler(e);
    }
    destroy() {
      (this._pressedLetters = []),
        this._letterKeyStream.complete(),
        this._selectedItem.complete();
    }
    setCurrentSelectedItemIndex(t) {
      this._selectedItemIndex = t;
    }
    setItems(t) {
      this._items = t;
    }
    handleKey(t) {
      let r = t.keyCode;
      t.key && t.key.length === 1
        ? this._letterKeyStream.next(t.key.toLocaleUpperCase())
        : ((r >= 65 && r <= 90) || (r >= 48 && r <= 57)) &&
          this._letterKeyStream.next(String.fromCharCode(r));
    }
    isTyping() {
      return this._pressedLetters.length > 0;
    }
    reset() {
      this._pressedLetters = [];
    }
    _setupKeyHandler(t) {
      this._letterKeyStream
        .pipe(
          dt((r) => this._pressedLetters.push(r)),
          Xt(t),
          Z(() => this._pressedLetters.length > 0),
          R(() => this._pressedLetters.join("").toLocaleUpperCase()),
        )
        .subscribe((r) => {
          for (let e = 1; e < this._items.length + 1; e++) {
            let i = (this._selectedItemIndex + e) % this._items.length,
              o = this._items[i];
            if (
              !this._skipPredicateFn?.(o) &&
              o.getLabel?.().toLocaleUpperCase().trim().indexOf(r) === 0
            ) {
              this._selectedItem.next(o);
              break;
            }
          }
          this._pressedLetters = [];
        });
    }
  },
  Xa = class {
    constructor(t, r) {
      (this._items = t),
        (this._activeItemIndex = -1),
        (this._activeItem = null),
        (this._wrap = !1),
        (this._typeaheadSubscription = Et.EMPTY),
        (this._vertical = !0),
        (this._allowedModifierKeys = []),
        (this._homeAndEnd = !1),
        (this._pageUpAndDown = { enabled: !1, delta: 10 }),
        (this._skipPredicateFn = (e) => e.disabled),
        (this.tabOut = new w()),
        (this.change = new w()),
        t instanceof re
          ? (this._itemChangesSubscription = t.changes.subscribe((e) =>
              this._itemsChanged(e.toArray()),
            ))
          : $o(t) &&
            (this._effectRef = zc(() => this._itemsChanged(t()), {
              injector: r,
            }));
    }
    skipPredicate(t) {
      return (this._skipPredicateFn = t), this;
    }
    withWrap(t = !0) {
      return (this._wrap = t), this;
    }
    withVerticalOrientation(t = !0) {
      return (this._vertical = t), this;
    }
    withHorizontalOrientation(t) {
      return (this._horizontal = t), this;
    }
    withAllowedModifierKeys(t) {
      return (this._allowedModifierKeys = t), this;
    }
    withTypeAhead(t = 200) {
      this._typeaheadSubscription.unsubscribe();
      let r = this._getItemsArray();
      return (
        (this._typeahead = new Ka(r, {
          debounceInterval: typeof t == "number" ? t : void 0,
          skipPredicate: (e) => this._skipPredicateFn(e),
        })),
        (this._typeaheadSubscription = this._typeahead.selectedItem.subscribe(
          (e) => {
            this.setActiveItem(e);
          },
        )),
        this
      );
    }
    cancelTypeahead() {
      return this._typeahead?.reset(), this;
    }
    withHomeAndEnd(t = !0) {
      return (this._homeAndEnd = t), this;
    }
    withPageUpDown(t = !0, r = 10) {
      return (this._pageUpAndDown = { enabled: t, delta: r }), this;
    }
    setActiveItem(t) {
      let r = this._activeItem;
      this.updateActiveItem(t),
        this._activeItem !== r && this.change.next(this._activeItemIndex);
    }
    onKeydown(t) {
      let r = t.keyCode,
        i = ["altKey", "ctrlKey", "metaKey", "shiftKey"].every(
          (o) => !t[o] || this._allowedModifierKeys.indexOf(o) > -1,
        );
      switch (r) {
        case 9:
          this.tabOut.next();
          return;
        case 40:
          if (this._vertical && i) {
            this.setNextItemActive();
            break;
          } else return;
        case 38:
          if (this._vertical && i) {
            this.setPreviousItemActive();
            break;
          } else return;
        case 39:
          if (this._horizontal && i) {
            this._horizontal === "rtl"
              ? this.setPreviousItemActive()
              : this.setNextItemActive();
            break;
          } else return;
        case 37:
          if (this._horizontal && i) {
            this._horizontal === "rtl"
              ? this.setNextItemActive()
              : this.setPreviousItemActive();
            break;
          } else return;
        case 36:
          if (this._homeAndEnd && i) {
            this.setFirstItemActive();
            break;
          } else return;
        case 35:
          if (this._homeAndEnd && i) {
            this.setLastItemActive();
            break;
          } else return;
        case 33:
          if (this._pageUpAndDown.enabled && i) {
            let o = this._activeItemIndex - this._pageUpAndDown.delta;
            this._setActiveItemByIndex(o > 0 ? o : 0, 1);
            break;
          } else return;
        case 34:
          if (this._pageUpAndDown.enabled && i) {
            let o = this._activeItemIndex + this._pageUpAndDown.delta,
              a = this._getItemsArray().length;
            this._setActiveItemByIndex(o < a ? o : a - 1, -1);
            break;
          } else return;
        default:
          (i || zt(t, "shiftKey")) && this._typeahead?.handleKey(t);
          return;
      }
      this._typeahead?.reset(), t.preventDefault();
    }
    get activeItemIndex() {
      return this._activeItemIndex;
    }
    get activeItem() {
      return this._activeItem;
    }
    isTyping() {
      return !!this._typeahead && this._typeahead.isTyping();
    }
    setFirstItemActive() {
      this._setActiveItemByIndex(0, 1);
    }
    setLastItemActive() {
      this._setActiveItemByIndex(this._getItemsArray().length - 1, -1);
    }
    setNextItemActive() {
      this._activeItemIndex < 0
        ? this.setFirstItemActive()
        : this._setActiveItemByDelta(1);
    }
    setPreviousItemActive() {
      this._activeItemIndex < 0 && this._wrap
        ? this.setLastItemActive()
        : this._setActiveItemByDelta(-1);
    }
    updateActiveItem(t) {
      let r = this._getItemsArray(),
        e = typeof t == "number" ? t : r.indexOf(t),
        i = r[e];
      (this._activeItem = i ?? null),
        (this._activeItemIndex = e),
        this._typeahead?.setCurrentSelectedItemIndex(e);
    }
    destroy() {
      this._typeaheadSubscription.unsubscribe(),
        this._itemChangesSubscription?.unsubscribe(),
        this._effectRef?.destroy(),
        this._typeahead?.destroy(),
        this.tabOut.complete(),
        this.change.complete();
    }
    _setActiveItemByDelta(t) {
      this._wrap
        ? this._setActiveInWrapMode(t)
        : this._setActiveInDefaultMode(t);
    }
    _setActiveInWrapMode(t) {
      let r = this._getItemsArray();
      for (let e = 1; e <= r.length; e++) {
        let i = (this._activeItemIndex + t * e + r.length) % r.length,
          o = r[i];
        if (!this._skipPredicateFn(o)) {
          this.setActiveItem(i);
          return;
        }
      }
    }
    _setActiveInDefaultMode(t) {
      this._setActiveItemByIndex(this._activeItemIndex + t, t);
    }
    _setActiveItemByIndex(t, r) {
      let e = this._getItemsArray();
      if (e[t]) {
        for (; this._skipPredicateFn(e[t]); ) if (((t += r), !e[t])) return;
        this.setActiveItem(t);
      }
    }
    _getItemsArray() {
      return $o(this._items)
        ? this._items()
        : this._items instanceof re
          ? this._items.toArray()
          : this._items;
    }
    _itemsChanged(t) {
      if ((this._typeahead?.setItems(t), this._activeItem)) {
        let r = t.indexOf(this._activeItem);
        r > -1 &&
          r !== this._activeItemIndex &&
          ((this._activeItemIndex = r),
          this._typeahead?.setCurrentSelectedItemIndex(r));
      }
    }
  };
var Pi = class extends Xa {
  constructor() {
    super(...arguments), (this._origin = "program");
  }
  setFocusOrigin(t) {
    return (this._origin = t), this;
  }
  setActiveItem(t) {
    super.setActiveItem(t),
      this.activeItem && this.activeItem.focus(this._origin);
  }
};
var oi = (() => {
  let t = class t {
    constructor(e) {
      this._platform = e;
    }
    isDisabled(e) {
      return e.hasAttribute("disabled");
    }
    isVisible(e) {
      return af(e) && getComputedStyle(e).visibility === "visible";
    }
    isTabbable(e) {
      if (!this._platform.isBrowser) return !1;
      let i = of(pf(e));
      if (i && (md(i) === -1 || !this.isVisible(i))) return !1;
      let o = e.nodeName.toLowerCase(),
        a = md(e);
      return e.hasAttribute("contenteditable")
        ? a !== -1
        : o === "iframe" ||
            o === "object" ||
            (this._platform.WEBKIT && this._platform.IOS && !uf(e))
          ? !1
          : o === "audio"
            ? e.hasAttribute("controls")
              ? a !== -1
              : !1
            : o === "video"
              ? a === -1
                ? !1
                : a !== null
                  ? !0
                  : this._platform.FIREFOX || e.hasAttribute("controls")
              : e.tabIndex >= 0;
    }
    isFocusable(e, i) {
      return (
        mf(e) &&
        !this.isDisabled(e) &&
        (i?.ignoreVisibility || this.isVisible(e))
      );
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(f(q));
  }),
    (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let n = t;
  return n;
})();
function of(n) {
  try {
    return n.frameElement;
  } catch {
    return null;
  }
}
function af(n) {
  return !!(
    n.offsetWidth ||
    n.offsetHeight ||
    (typeof n.getClientRects == "function" && n.getClientRects().length)
  );
}
function sf(n) {
  let t = n.nodeName.toLowerCase();
  return t === "input" || t === "select" || t === "button" || t === "textarea";
}
function cf(n) {
  return df(n) && n.type == "hidden";
}
function lf(n) {
  return hf(n) && n.hasAttribute("href");
}
function df(n) {
  return n.nodeName.toLowerCase() == "input";
}
function hf(n) {
  return n.nodeName.toLowerCase() == "a";
}
function gd(n) {
  if (!n.hasAttribute("tabindex") || n.tabIndex === void 0) return !1;
  let t = n.getAttribute("tabindex");
  return !!(t && !isNaN(parseInt(t, 10)));
}
function md(n) {
  if (!gd(n)) return null;
  let t = parseInt(n.getAttribute("tabindex") || "", 10);
  return isNaN(t) ? -1 : t;
}
function uf(n) {
  let t = n.nodeName.toLowerCase(),
    r = t === "input" && n.type;
  return r === "text" || r === "password" || t === "select" || t === "textarea";
}
function mf(n) {
  return cf(n)
    ? !1
    : sf(n) || lf(n) || n.hasAttribute("contenteditable") || gd(n);
}
function pf(n) {
  return (n.ownerDocument && n.ownerDocument.defaultView) || window;
}
var Ja = class {
    get enabled() {
      return this._enabled;
    }
    set enabled(t) {
      (this._enabled = t),
        this._startAnchor &&
          this._endAnchor &&
          (this._toggleAnchorTabIndex(t, this._startAnchor),
          this._toggleAnchorTabIndex(t, this._endAnchor));
    }
    constructor(t, r, e, i, o = !1, a) {
      (this._element = t),
        (this._checker = r),
        (this._ngZone = e),
        (this._document = i),
        (this._injector = a),
        (this._hasAttached = !1),
        (this.startAnchorListener = () => this.focusLastTabbableElement()),
        (this.endAnchorListener = () => this.focusFirstTabbableElement()),
        (this._enabled = !0),
        o || this.attachAnchors();
    }
    destroy() {
      let t = this._startAnchor,
        r = this._endAnchor;
      t &&
        (t.removeEventListener("focus", this.startAnchorListener), t.remove()),
        r &&
          (r.removeEventListener("focus", this.endAnchorListener), r.remove()),
        (this._startAnchor = this._endAnchor = null),
        (this._hasAttached = !1);
    }
    attachAnchors() {
      return this._hasAttached
        ? !0
        : (this._ngZone.runOutsideAngular(() => {
            this._startAnchor ||
              ((this._startAnchor = this._createAnchor()),
              this._startAnchor.addEventListener(
                "focus",
                this.startAnchorListener,
              )),
              this._endAnchor ||
                ((this._endAnchor = this._createAnchor()),
                this._endAnchor.addEventListener(
                  "focus",
                  this.endAnchorListener,
                ));
          }),
          this._element.parentNode &&
            (this._element.parentNode.insertBefore(
              this._startAnchor,
              this._element,
            ),
            this._element.parentNode.insertBefore(
              this._endAnchor,
              this._element.nextSibling,
            ),
            (this._hasAttached = !0)),
          this._hasAttached);
    }
    focusInitialElementWhenReady(t) {
      return new Promise((r) => {
        this._executeOnStable(() => r(this.focusInitialElement(t)));
      });
    }
    focusFirstTabbableElementWhenReady(t) {
      return new Promise((r) => {
        this._executeOnStable(() => r(this.focusFirstTabbableElement(t)));
      });
    }
    focusLastTabbableElementWhenReady(t) {
      return new Promise((r) => {
        this._executeOnStable(() => r(this.focusLastTabbableElement(t)));
      });
    }
    _getRegionBoundary(t) {
      let r = this._element.querySelectorAll(
        `[cdk-focus-region-${t}], [cdkFocusRegion${t}], [cdk-focus-${t}]`,
      );
      return t == "start"
        ? r.length
          ? r[0]
          : this._getFirstTabbableElement(this._element)
        : r.length
          ? r[r.length - 1]
          : this._getLastTabbableElement(this._element);
    }
    focusInitialElement(t) {
      let r = this._element.querySelector(
        "[cdk-focus-initial], [cdkFocusInitial]",
      );
      if (r) {
        if (!this._checker.isFocusable(r)) {
          let e = this._getFirstTabbableElement(r);
          return e?.focus(t), !!e;
        }
        return r.focus(t), !0;
      }
      return this.focusFirstTabbableElement(t);
    }
    focusFirstTabbableElement(t) {
      let r = this._getRegionBoundary("start");
      return r && r.focus(t), !!r;
    }
    focusLastTabbableElement(t) {
      let r = this._getRegionBoundary("end");
      return r && r.focus(t), !!r;
    }
    hasAttached() {
      return this._hasAttached;
    }
    _getFirstTabbableElement(t) {
      if (this._checker.isFocusable(t) && this._checker.isTabbable(t)) return t;
      let r = t.children;
      for (let e = 0; e < r.length; e++) {
        let i =
          r[e].nodeType === this._document.ELEMENT_NODE
            ? this._getFirstTabbableElement(r[e])
            : null;
        if (i) return i;
      }
      return null;
    }
    _getLastTabbableElement(t) {
      if (this._checker.isFocusable(t) && this._checker.isTabbable(t)) return t;
      let r = t.children;
      for (let e = r.length - 1; e >= 0; e--) {
        let i =
          r[e].nodeType === this._document.ELEMENT_NODE
            ? this._getLastTabbableElement(r[e])
            : null;
        if (i) return i;
      }
      return null;
    }
    _createAnchor() {
      let t = this._document.createElement("div");
      return (
        this._toggleAnchorTabIndex(this._enabled, t),
        t.classList.add("cdk-visually-hidden"),
        t.classList.add("cdk-focus-trap-anchor"),
        t.setAttribute("aria-hidden", "true"),
        t
      );
    }
    _toggleAnchorTabIndex(t, r) {
      t ? r.setAttribute("tabindex", "0") : r.removeAttribute("tabindex");
    }
    toggleAnchors(t) {
      this._startAnchor &&
        this._endAnchor &&
        (this._toggleAnchorTabIndex(t, this._startAnchor),
        this._toggleAnchorTabIndex(t, this._endAnchor));
    }
    _executeOnStable(t) {
      this._injector ? Dt(t, { injector: this._injector }) : setTimeout(t);
    }
  },
  Ni = (() => {
    let t = class t {
      constructor(e, i, o) {
        (this._checker = e),
          (this._ngZone = i),
          (this._injector = v(at)),
          (this._document = o);
      }
      create(e, i = !1) {
        return new Ja(
          e,
          this._checker,
          this._ngZone,
          this._document,
          i,
          this._injector,
        );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(oi), f(S), f(k));
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
function is(n) {
  return n.buttons === 0 || n.detail === 0;
}
function ns(n) {
  let t =
    (n.touches && n.touches[0]) || (n.changedTouches && n.changedTouches[0]);
  return (
    !!t &&
    t.identifier === -1 &&
    (t.radiusX == null || t.radiusX === 1) &&
    (t.radiusY == null || t.radiusY === 1)
  );
}
var ff = new C("cdk-input-modality-detector-options"),
  gf = { ignoreKeys: [18, 17, 224, 91, 16] },
  bd = 650,
  Fi = Oe({ passive: !0, capture: !0 }),
  bf = (() => {
    let t = class t {
      get mostRecentModality() {
        return this._modality.value;
      }
      constructor(e, i, o, a) {
        (this._platform = e),
          (this._mostRecentTarget = null),
          (this._modality = new kt(null)),
          (this._lastTouchMs = 0),
          (this._onKeydown = (s) => {
            this._options?.ignoreKeys?.some((c) => c === s.keyCode) ||
              (this._modality.next("keyboard"),
              (this._mostRecentTarget = Bt(s)));
          }),
          (this._onMousedown = (s) => {
            Date.now() - this._lastTouchMs < bd ||
              (this._modality.next(is(s) ? "keyboard" : "mouse"),
              (this._mostRecentTarget = Bt(s)));
          }),
          (this._onTouchstart = (s) => {
            if (ns(s)) {
              this._modality.next("keyboard");
              return;
            }
            (this._lastTouchMs = Date.now()),
              this._modality.next("touch"),
              (this._mostRecentTarget = Bt(s));
          }),
          (this._options = b(b({}, gf), a)),
          (this.modalityDetected = this._modality.pipe(ui(1))),
          (this.modalityChanged = this.modalityDetected.pipe(Ue())),
          e.isBrowser &&
            i.runOutsideAngular(() => {
              o.addEventListener("keydown", this._onKeydown, Fi),
                o.addEventListener("mousedown", this._onMousedown, Fi),
                o.addEventListener("touchstart", this._onTouchstart, Fi);
            });
      }
      ngOnDestroy() {
        this._modality.complete(),
          this._platform.isBrowser &&
            (document.removeEventListener("keydown", this._onKeydown, Fi),
            document.removeEventListener("mousedown", this._onMousedown, Fi),
            document.removeEventListener("touchstart", this._onTouchstart, Fi));
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(q), f(S), f(k), f(ff, 8));
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
var Qr = (function (n) {
    return (
      (n[(n.IMMEDIATE = 0)] = "IMMEDIATE"),
      (n[(n.EVENTUAL = 1)] = "EVENTUAL"),
      n
    );
  })(Qr || {}),
  vf = new C("cdk-focus-monitor-default-options"),
  qr = Oe({ passive: !0, capture: !0 }),
  Ht = (() => {
    let t = class t {
      constructor(e, i, o, a, s) {
        (this._ngZone = e),
          (this._platform = i),
          (this._inputModalityDetector = o),
          (this._origin = null),
          (this._windowFocused = !1),
          (this._originFromTouchInteraction = !1),
          (this._elementInfo = new Map()),
          (this._monitoredElementCount = 0),
          (this._rootNodeFocusListenerCount = new Map()),
          (this._windowFocusListener = () => {
            (this._windowFocused = !0),
              (this._windowFocusTimeoutId = window.setTimeout(
                () => (this._windowFocused = !1),
              ));
          }),
          (this._stopInputModalityDetector = new w()),
          (this._rootNodeFocusAndBlurListener = (c) => {
            let l = Bt(c);
            for (let h = l; h; h = h.parentElement)
              c.type === "focus" ? this._onFocus(c, h) : this._onBlur(c, h);
          }),
          (this._document = a),
          (this._detectionMode = s?.detectionMode || Qr.IMMEDIATE);
      }
      monitor(e, i = !1) {
        let o = Zt(e);
        if (!this._platform.isBrowser || o.nodeType !== 1) return x();
        let a = cd(o) || this._getDocument(),
          s = this._elementInfo.get(o);
        if (s) return i && (s.checkChildren = !0), s.subject;
        let c = { checkChildren: i, subject: new w(), rootNode: a };
        return (
          this._elementInfo.set(o, c),
          this._registerGlobalListeners(c),
          c.subject
        );
      }
      stopMonitoring(e) {
        let i = Zt(e),
          o = this._elementInfo.get(i);
        o &&
          (o.subject.complete(),
          this._setClasses(i),
          this._elementInfo.delete(i),
          this._removeGlobalListeners(o));
      }
      focusVia(e, i, o) {
        let a = Zt(e),
          s = this._getDocument().activeElement;
        a === s
          ? this._getClosestElementsInfo(a).forEach(([c, l]) =>
              this._originChanged(c, i, l),
            )
          : (this._setOrigin(i), typeof a.focus == "function" && a.focus(o));
      }
      ngOnDestroy() {
        this._elementInfo.forEach((e, i) => this.stopMonitoring(i));
      }
      _getDocument() {
        return this._document || document;
      }
      _getWindow() {
        return this._getDocument().defaultView || window;
      }
      _getFocusOrigin(e) {
        return this._origin
          ? this._originFromTouchInteraction
            ? this._shouldBeAttributedToTouch(e)
              ? "touch"
              : "program"
            : this._origin
          : this._windowFocused && this._lastFocusOrigin
            ? this._lastFocusOrigin
            : e && this._isLastInteractionFromInputLabel(e)
              ? "mouse"
              : "program";
      }
      _shouldBeAttributedToTouch(e) {
        return (
          this._detectionMode === Qr.EVENTUAL ||
          !!e?.contains(this._inputModalityDetector._mostRecentTarget)
        );
      }
      _setClasses(e, i) {
        e.classList.toggle("cdk-focused", !!i),
          e.classList.toggle("cdk-touch-focused", i === "touch"),
          e.classList.toggle("cdk-keyboard-focused", i === "keyboard"),
          e.classList.toggle("cdk-mouse-focused", i === "mouse"),
          e.classList.toggle("cdk-program-focused", i === "program");
      }
      _setOrigin(e, i = !1) {
        this._ngZone.runOutsideAngular(() => {
          if (
            ((this._origin = e),
            (this._originFromTouchInteraction = e === "touch" && i),
            this._detectionMode === Qr.IMMEDIATE)
          ) {
            clearTimeout(this._originTimeoutId);
            let o = this._originFromTouchInteraction ? bd : 1;
            this._originTimeoutId = setTimeout(() => (this._origin = null), o);
          }
        });
      }
      _onFocus(e, i) {
        let o = this._elementInfo.get(i),
          a = Bt(e);
        !o ||
          (!o.checkChildren && i !== a) ||
          this._originChanged(i, this._getFocusOrigin(a), o);
      }
      _onBlur(e, i) {
        let o = this._elementInfo.get(i);
        !o ||
          (o.checkChildren &&
            e.relatedTarget instanceof Node &&
            i.contains(e.relatedTarget)) ||
          (this._setClasses(i), this._emitOrigin(o, null));
      }
      _emitOrigin(e, i) {
        e.subject.observers.length && this._ngZone.run(() => e.subject.next(i));
      }
      _registerGlobalListeners(e) {
        if (!this._platform.isBrowser) return;
        let i = e.rootNode,
          o = this._rootNodeFocusListenerCount.get(i) || 0;
        o ||
          this._ngZone.runOutsideAngular(() => {
            i.addEventListener("focus", this._rootNodeFocusAndBlurListener, qr),
              i.addEventListener(
                "blur",
                this._rootNodeFocusAndBlurListener,
                qr,
              );
          }),
          this._rootNodeFocusListenerCount.set(i, o + 1),
          ++this._monitoredElementCount === 1 &&
            (this._ngZone.runOutsideAngular(() => {
              this._getWindow().addEventListener(
                "focus",
                this._windowFocusListener,
              );
            }),
            this._inputModalityDetector.modalityDetected
              .pipe(z(this._stopInputModalityDetector))
              .subscribe((a) => {
                this._setOrigin(a, !0);
              }));
      }
      _removeGlobalListeners(e) {
        let i = e.rootNode;
        if (this._rootNodeFocusListenerCount.has(i)) {
          let o = this._rootNodeFocusListenerCount.get(i);
          o > 1
            ? this._rootNodeFocusListenerCount.set(i, o - 1)
            : (i.removeEventListener(
                "focus",
                this._rootNodeFocusAndBlurListener,
                qr,
              ),
              i.removeEventListener(
                "blur",
                this._rootNodeFocusAndBlurListener,
                qr,
              ),
              this._rootNodeFocusListenerCount.delete(i));
        }
        --this._monitoredElementCount ||
          (this._getWindow().removeEventListener(
            "focus",
            this._windowFocusListener,
          ),
          this._stopInputModalityDetector.next(),
          clearTimeout(this._windowFocusTimeoutId),
          clearTimeout(this._originTimeoutId));
      }
      _originChanged(e, i, o) {
        this._setClasses(e, i),
          this._emitOrigin(o, i),
          (this._lastFocusOrigin = i);
      }
      _getClosestElementsInfo(e) {
        let i = [];
        return (
          this._elementInfo.forEach((o, a) => {
            (a === e || (o.checkChildren && a.contains(e))) && i.push([a, o]);
          }),
          i
        );
      }
      _isLastInteractionFromInputLabel(e) {
        let { _mostRecentTarget: i, mostRecentModality: o } =
          this._inputModalityDetector;
        if (
          o !== "mouse" ||
          !i ||
          i === e ||
          (e.nodeName !== "INPUT" && e.nodeName !== "TEXTAREA") ||
          e.disabled
        )
          return !1;
        let a = e.labels;
        if (a) {
          for (let s = 0; s < a.length; s++) if (a[s].contains(i)) return !0;
        }
        return !1;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(S), f(q), f(bf), f(k, 8), f(vf, 8));
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  vd = (() => {
    let t = class t {
      constructor(e, i) {
        (this._elementRef = e),
          (this._focusMonitor = i),
          (this._focusOrigin = null),
          (this.cdkFocusChange = new O());
      }
      get focusOrigin() {
        return this._focusOrigin;
      }
      ngAfterViewInit() {
        let e = this._elementRef.nativeElement;
        this._monitorSubscription = this._focusMonitor
          .monitor(
            e,
            e.nodeType === 1 && e.hasAttribute("cdkMonitorSubtreeFocus"),
          )
          .subscribe((i) => {
            (this._focusOrigin = i), this.cdkFocusChange.emit(i);
          });
      }
      ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef),
          this._monitorSubscription && this._monitorSubscription.unsubscribe();
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(E), d(Ht));
    }),
      (t.ɵdir = M({
        type: t,
        selectors: [
          ["", "cdkMonitorElementFocus", ""],
          ["", "cdkMonitorSubtreeFocus", ""],
        ],
        outputs: { cdkFocusChange: "cdkFocusChange" },
        exportAs: ["cdkMonitorFocus"],
        standalone: !0,
      }));
    let n = t;
    return n;
  })(),
  ri = (function (n) {
    return (
      (n[(n.NONE = 0)] = "NONE"),
      (n[(n.BLACK_ON_WHITE = 1)] = "BLACK_ON_WHITE"),
      (n[(n.WHITE_ON_BLACK = 2)] = "WHITE_ON_BLACK"),
      n
    );
  })(ri || {}),
  pd = "cdk-high-contrast-black-on-white",
  fd = "cdk-high-contrast-white-on-black",
  Za = "cdk-high-contrast-active",
  _d = (() => {
    let t = class t {
      constructor(e, i) {
        (this._platform = e),
          (this._document = i),
          (this._breakpointSubscription = v(ud)
            .observe("(forced-colors: active)")
            .subscribe(() => {
              this._hasCheckedHighContrastMode &&
                ((this._hasCheckedHighContrastMode = !1),
                this._applyBodyHighContrastModeCssClasses());
            }));
      }
      getHighContrastMode() {
        if (!this._platform.isBrowser) return ri.NONE;
        let e = this._document.createElement("div");
        (e.style.backgroundColor = "rgb(1,2,3)"),
          (e.style.position = "absolute"),
          this._document.body.appendChild(e);
        let i = this._document.defaultView || window,
          o = i && i.getComputedStyle ? i.getComputedStyle(e) : null,
          a = ((o && o.backgroundColor) || "").replace(/ /g, "");
        switch ((e.remove(), a)) {
          case "rgb(0,0,0)":
          case "rgb(45,50,54)":
          case "rgb(32,32,32)":
            return ri.WHITE_ON_BLACK;
          case "rgb(255,255,255)":
          case "rgb(255,250,239)":
            return ri.BLACK_ON_WHITE;
        }
        return ri.NONE;
      }
      ngOnDestroy() {
        this._breakpointSubscription.unsubscribe();
      }
      _applyBodyHighContrastModeCssClasses() {
        if (
          !this._hasCheckedHighContrastMode &&
          this._platform.isBrowser &&
          this._document.body
        ) {
          let e = this._document.body.classList;
          e.remove(Za, pd, fd), (this._hasCheckedHighContrastMode = !0);
          let i = this.getHighContrastMode();
          i === ri.BLACK_ON_WHITE
            ? e.add(Za, pd)
            : i === ri.WHITE_ON_BLACK && e.add(Za, fd);
        }
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(q), f(k));
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
var _f = new C("cdk-dir-doc", { providedIn: "root", factory: yf });
function yf() {
  return v(k);
}
var wf =
  /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function xf(n) {
  let t = n?.toLowerCase() || "";
  return t === "auto" && typeof navigator < "u" && navigator?.language
    ? wf.test(navigator.language)
      ? "rtl"
      : "ltr"
    : t === "rtl"
      ? "rtl"
      : "ltr";
}
var wt = (() => {
  let t = class t {
    constructor(e) {
      if (((this.value = "ltr"), (this.change = new O()), e)) {
        let i = e.body ? e.body.dir : null,
          o = e.documentElement ? e.documentElement.dir : null;
        this.value = xf(i || o || "ltr");
      }
    }
    ngOnDestroy() {
      this.change.complete();
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(f(_f, 8));
  }),
    (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let n = t;
  return n;
})();
var rs = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = j({ type: t })),
    (t.ɵinj = L({}));
  let n = t;
  return n;
})();
function Cf() {
  return !0;
}
var If = new C("mat-sanity-checks", { providedIn: "root", factory: Cf }),
  lt = (() => {
    let t = class t {
      constructor(e, i, o) {
        (this._sanityChecks = i),
          (this._document = o),
          (this._hasDoneGlobalChecks = !1),
          e._applyBodyHighContrastModeCssClasses(),
          this._hasDoneGlobalChecks || (this._hasDoneGlobalChecks = !0);
      }
      _checkIsEnabled(e) {
        return Nn()
          ? !1
          : typeof this._sanityChecks == "boolean"
            ? this._sanityChecks
            : !!this._sanityChecks[e];
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(_d), f(If, 8), f(k));
    }),
      (t.ɵmod = j({ type: t })),
      (t.ɵinj = L({ imports: [rs, rs] }));
    let n = t;
    return n;
  })();
var Kr = class {
  constructor(t, r, e, i, o) {
    (this._defaultMatcher = t),
      (this.ngControl = r),
      (this._parentFormGroup = e),
      (this._parentForm = i),
      (this._stateChanges = o),
      (this.errorState = !1);
  }
  updateErrorState() {
    let t = this.errorState,
      r = this._parentFormGroup || this._parentForm,
      e = this.matcher || this._defaultMatcher,
      i = this.ngControl ? this.ngControl.control : null,
      o = e?.isErrorState(i, r) ?? !1;
    o !== t && ((this.errorState = o), this._stateChanges.next());
  }
};
var ds = (() => {
  let t = class t {
    isErrorState(e, i) {
      return !!(e && e.invalid && (e.touched || (i && i.submitted)));
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let n = t;
  return n;
})();
var hs = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵmod = j({ type: t })),
      (t.ɵinj = L({ imports: [lt, lt] }));
    let n = t;
    return n;
  })(),
  $t = (function (n) {
    return (
      (n[(n.FADING_IN = 0)] = "FADING_IN"),
      (n[(n.VISIBLE = 1)] = "VISIBLE"),
      (n[(n.FADING_OUT = 2)] = "FADING_OUT"),
      (n[(n.HIDDEN = 3)] = "HIDDEN"),
      n
    );
  })($t || {}),
  ss = class {
    constructor(t, r, e, i = !1) {
      (this._renderer = t),
        (this.element = r),
        (this.config = e),
        (this._animationForciblyDisabledThroughCss = i),
        (this.state = $t.HIDDEN);
    }
    fadeOut() {
      this._renderer.fadeOutRipple(this);
    }
  },
  yd = Oe({ passive: !0, capture: !0 }),
  cs = class {
    constructor() {
      (this._events = new Map()),
        (this._delegateEventHandler = (t) => {
          let r = Bt(t);
          r &&
            this._events.get(t.type)?.forEach((e, i) => {
              (i === r || i.contains(r)) && e.forEach((o) => o.handleEvent(t));
            });
        });
    }
    addHandler(t, r, e, i) {
      let o = this._events.get(r);
      if (o) {
        let a = o.get(e);
        a ? a.add(i) : o.set(e, new Set([i]));
      } else
        this._events.set(r, new Map([[e, new Set([i])]])),
          t.runOutsideAngular(() => {
            document.addEventListener(r, this._delegateEventHandler, yd);
          });
    }
    removeHandler(t, r, e) {
      let i = this._events.get(t);
      if (!i) return;
      let o = i.get(r);
      o &&
        (o.delete(e),
        o.size === 0 && i.delete(r),
        i.size === 0 &&
          (this._events.delete(t),
          document.removeEventListener(t, this._delegateEventHandler, yd)));
    }
  },
  wd = { enterDuration: 225, exitDuration: 150 },
  Ef = 800,
  xd = Oe({ passive: !0, capture: !0 }),
  Cd = ["mousedown", "touchstart"],
  Id = ["mouseup", "mouseleave", "touchend", "touchcancel"],
  jn = class jn {
    constructor(t, r, e, i) {
      (this._target = t),
        (this._ngZone = r),
        (this._platform = i),
        (this._isPointerDown = !1),
        (this._activeRipples = new Map()),
        (this._pointerUpEventsRegistered = !1),
        i.isBrowser && (this._containerElement = Zt(e));
    }
    fadeInRipple(t, r, e = {}) {
      let i = (this._containerRect =
          this._containerRect ||
          this._containerElement.getBoundingClientRect()),
        o = b(b({}, wd), e.animation);
      e.centered && ((t = i.left + i.width / 2), (r = i.top + i.height / 2));
      let a = e.radius || Df(t, r, i),
        s = t - i.left,
        c = r - i.top,
        l = o.enterDuration,
        h = document.createElement("div");
      h.classList.add("mat-ripple-element"),
        (h.style.left = `${s - a}px`),
        (h.style.top = `${c - a}px`),
        (h.style.height = `${a * 2}px`),
        (h.style.width = `${a * 2}px`),
        e.color != null && (h.style.backgroundColor = e.color),
        (h.style.transitionDuration = `${l}ms`),
        this._containerElement.appendChild(h);
      let p = window.getComputedStyle(h),
        _ = p.transitionProperty,
        A = p.transitionDuration,
        W =
          _ === "none" ||
          A === "0s" ||
          A === "0s, 0s" ||
          (i.width === 0 && i.height === 0),
        rt = new ss(this, h, e, W);
      (h.style.transform = "scale3d(1, 1, 1)"),
        (rt.state = $t.FADING_IN),
        e.persistent || (this._mostRecentTransientRipple = rt);
      let _t = null;
      return (
        !W &&
          (l || o.exitDuration) &&
          this._ngZone.runOutsideAngular(() => {
            let ve = () => {
                _t && (_t.fallbackTimer = null),
                  clearTimeout(Ve),
                  this._finishRippleTransition(rt);
              },
              je = () => this._destroyRipple(rt),
              Ve = setTimeout(je, l + 100);
            h.addEventListener("transitionend", ve),
              h.addEventListener("transitioncancel", je),
              (_t = {
                onTransitionEnd: ve,
                onTransitionCancel: je,
                fallbackTimer: Ve,
              });
          }),
        this._activeRipples.set(rt, _t),
        (W || !l) && this._finishRippleTransition(rt),
        rt
      );
    }
    fadeOutRipple(t) {
      if (t.state === $t.FADING_OUT || t.state === $t.HIDDEN) return;
      let r = t.element,
        e = b(b({}, wd), t.config.animation);
      (r.style.transitionDuration = `${e.exitDuration}ms`),
        (r.style.opacity = "0"),
        (t.state = $t.FADING_OUT),
        (t._animationForciblyDisabledThroughCss || !e.exitDuration) &&
          this._finishRippleTransition(t);
    }
    fadeOutAll() {
      this._getActiveRipples().forEach((t) => t.fadeOut());
    }
    fadeOutAllNonPersistent() {
      this._getActiveRipples().forEach((t) => {
        t.config.persistent || t.fadeOut();
      });
    }
    setupTriggerEvents(t) {
      let r = Zt(t);
      !this._platform.isBrowser ||
        !r ||
        r === this._triggerElement ||
        (this._removeTriggerEvents(),
        (this._triggerElement = r),
        Cd.forEach((e) => {
          jn._eventManager.addHandler(this._ngZone, e, r, this);
        }));
    }
    handleEvent(t) {
      t.type === "mousedown"
        ? this._onMousedown(t)
        : t.type === "touchstart"
          ? this._onTouchStart(t)
          : this._onPointerUp(),
        this._pointerUpEventsRegistered ||
          (this._ngZone.runOutsideAngular(() => {
            Id.forEach((r) => {
              this._triggerElement.addEventListener(r, this, xd);
            });
          }),
          (this._pointerUpEventsRegistered = !0));
    }
    _finishRippleTransition(t) {
      t.state === $t.FADING_IN
        ? this._startFadeOutTransition(t)
        : t.state === $t.FADING_OUT && this._destroyRipple(t);
    }
    _startFadeOutTransition(t) {
      let r = t === this._mostRecentTransientRipple,
        { persistent: e } = t.config;
      (t.state = $t.VISIBLE), !e && (!r || !this._isPointerDown) && t.fadeOut();
    }
    _destroyRipple(t) {
      let r = this._activeRipples.get(t) ?? null;
      this._activeRipples.delete(t),
        this._activeRipples.size || (this._containerRect = null),
        t === this._mostRecentTransientRipple &&
          (this._mostRecentTransientRipple = null),
        (t.state = $t.HIDDEN),
        r !== null &&
          (t.element.removeEventListener("transitionend", r.onTransitionEnd),
          t.element.removeEventListener(
            "transitioncancel",
            r.onTransitionCancel,
          ),
          r.fallbackTimer !== null && clearTimeout(r.fallbackTimer)),
        t.element.remove();
    }
    _onMousedown(t) {
      let r = is(t),
        e =
          this._lastTouchStartEvent &&
          Date.now() < this._lastTouchStartEvent + Ef;
      !this._target.rippleDisabled &&
        !r &&
        !e &&
        ((this._isPointerDown = !0),
        this.fadeInRipple(t.clientX, t.clientY, this._target.rippleConfig));
    }
    _onTouchStart(t) {
      if (!this._target.rippleDisabled && !ns(t)) {
        (this._lastTouchStartEvent = Date.now()), (this._isPointerDown = !0);
        let r = t.changedTouches;
        if (r)
          for (let e = 0; e < r.length; e++)
            this.fadeInRipple(
              r[e].clientX,
              r[e].clientY,
              this._target.rippleConfig,
            );
      }
    }
    _onPointerUp() {
      this._isPointerDown &&
        ((this._isPointerDown = !1),
        this._getActiveRipples().forEach((t) => {
          let r =
            t.state === $t.VISIBLE ||
            (t.config.terminateOnPointerUp && t.state === $t.FADING_IN);
          !t.config.persistent && r && t.fadeOut();
        }));
    }
    _getActiveRipples() {
      return Array.from(this._activeRipples.keys());
    }
    _removeTriggerEvents() {
      let t = this._triggerElement;
      t &&
        (Cd.forEach((r) => jn._eventManager.removeHandler(r, t, this)),
        this._pointerUpEventsRegistered &&
          (Id.forEach((r) => t.removeEventListener(r, this, xd)),
          (this._pointerUpEventsRegistered = !1)));
    }
  };
jn._eventManager = new cs();
var ls = jn;
function Df(n, t, r) {
  let e = Math.max(Math.abs(n - r.left), Math.abs(n - r.right)),
    i = Math.max(Math.abs(t - r.top), Math.abs(t - r.bottom));
  return Math.sqrt(e * e + i * i);
}
var ji = new C("mat-ripple-global-options"),
  Xr = (() => {
    let t = class t {
      get disabled() {
        return this._disabled;
      }
      set disabled(e) {
        e && this.fadeOutAllNonPersistent(),
          (this._disabled = e),
          this._setupTriggerEventsIfEnabled();
      }
      get trigger() {
        return this._trigger || this._elementRef.nativeElement;
      }
      set trigger(e) {
        (this._trigger = e), this._setupTriggerEventsIfEnabled();
      }
      constructor(e, i, o, a, s) {
        (this._elementRef = e),
          (this._animationMode = s),
          (this.radius = 0),
          (this._disabled = !1),
          (this._isInitialized = !1),
          (this._globalOptions = a || {}),
          (this._rippleRenderer = new ls(this, i, e, o));
      }
      ngOnInit() {
        (this._isInitialized = !0), this._setupTriggerEventsIfEnabled();
      }
      ngOnDestroy() {
        this._rippleRenderer._removeTriggerEvents();
      }
      fadeOutAll() {
        this._rippleRenderer.fadeOutAll();
      }
      fadeOutAllNonPersistent() {
        this._rippleRenderer.fadeOutAllNonPersistent();
      }
      get rippleConfig() {
        return {
          centered: this.centered,
          radius: this.radius,
          color: this.color,
          animation: b(
            b(
              b({}, this._globalOptions.animation),
              this._animationMode === "NoopAnimations"
                ? { enterDuration: 0, exitDuration: 0 }
                : {},
            ),
            this.animation,
          ),
          terminateOnPointerUp: this._globalOptions.terminateOnPointerUp,
        };
      }
      get rippleDisabled() {
        return this.disabled || !!this._globalOptions.disabled;
      }
      _setupTriggerEventsIfEnabled() {
        !this.disabled &&
          this._isInitialized &&
          this._rippleRenderer.setupTriggerEvents(this.trigger);
      }
      launch(e, i = 0, o) {
        return typeof e == "number"
          ? this._rippleRenderer.fadeInRipple(
              e,
              i,
              b(b({}, this.rippleConfig), o),
            )
          : this._rippleRenderer.fadeInRipple(
              0,
              0,
              b(b({}, this.rippleConfig), e),
            );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(E), d(S), d(q), d(ji, 8), d(mt, 8));
    }),
      (t.ɵdir = M({
        type: t,
        selectors: [
          ["", "mat-ripple", ""],
          ["", "matRipple", ""],
        ],
        hostAttrs: [1, "mat-ripple"],
        hostVars: 2,
        hostBindings: function (i, o) {
          i & 2 && V("mat-ripple-unbounded", o.unbounded);
        },
        inputs: {
          color: [0, "matRippleColor", "color"],
          unbounded: [0, "matRippleUnbounded", "unbounded"],
          centered: [0, "matRippleCentered", "centered"],
          radius: [0, "matRippleRadius", "radius"],
          animation: [0, "matRippleAnimation", "animation"],
          disabled: [0, "matRippleDisabled", "disabled"],
          trigger: [0, "matRippleTrigger", "trigger"],
        },
        exportAs: ["matRipple"],
        standalone: !0,
      }));
    let n = t;
    return n;
  })(),
  us = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵmod = j({ type: t })),
      (t.ɵinj = L({ imports: [lt, lt] }));
    let n = t;
    return n;
  })();
var Ed = { capture: !0 },
  Dd = ["focus", "mousedown", "mouseenter", "touchstart"],
  os = "mat-ripple-loader-uninitialized",
  as = "mat-ripple-loader-class-name",
  Sd = "mat-ripple-loader-centered",
  Zr = "mat-ripple-loader-disabled",
  Jr = (() => {
    let t = class t {
      constructor() {
        (this._document = v(k, { optional: !0 })),
          (this._animationMode = v(mt, { optional: !0 })),
          (this._globalRippleOptions = v(ji, { optional: !0 })),
          (this._platform = v(q)),
          (this._ngZone = v(S)),
          (this._hosts = new Map()),
          (this._onInteraction = (e) => {
            let i = Bt(e);
            if (i instanceof HTMLElement) {
              let o = i.closest(
                `[${os}="${this._globalRippleOptions?.namespace ?? ""}"]`,
              );
              o && this._createRipple(o);
            }
          }),
          this._ngZone.runOutsideAngular(() => {
            for (let e of Dd)
              this._document?.addEventListener(e, this._onInteraction, Ed);
          });
      }
      ngOnDestroy() {
        let e = this._hosts.keys();
        for (let i of e) this.destroyRipple(i);
        for (let i of Dd)
          this._document?.removeEventListener(i, this._onInteraction, Ed);
      }
      configureRipple(e, i) {
        e.setAttribute(os, this._globalRippleOptions?.namespace ?? ""),
          (i.className || !e.hasAttribute(as)) &&
            e.setAttribute(as, i.className || ""),
          i.centered && e.setAttribute(Sd, ""),
          i.disabled && e.setAttribute(Zr, "");
      }
      getRipple(e) {
        return this._hosts.get(e) || this._createRipple(e);
      }
      setDisabled(e, i) {
        let o = this._hosts.get(e);
        if (o) {
          o.disabled = i;
          return;
        }
        i ? e.setAttribute(Zr, "") : e.removeAttribute(Zr);
      }
      _createRipple(e) {
        if (!this._document) return;
        let i = this._hosts.get(e);
        if (i) return i;
        e.querySelector(".mat-ripple")?.remove();
        let o = this._document.createElement("span");
        o.classList.add("mat-ripple", e.getAttribute(as)), e.append(o);
        let a = new Xr(
          new E(o),
          this._ngZone,
          this._platform,
          this._globalRippleOptions ? this._globalRippleOptions : void 0,
          this._animationMode ? this._animationMode : void 0,
        );
        return (
          (a._isInitialized = !0),
          (a.trigger = e),
          (a.centered = e.hasAttribute(Sd)),
          (a.disabled = e.hasAttribute(Zr)),
          this.attachRipple(e, a),
          a
        );
      }
      attachRipple(e, i) {
        e.removeAttribute(os), this._hosts.set(e, i);
      }
      destroyRipple(e) {
        let i = this._hosts.get(e);
        i && (i.ngOnDestroy(), this._hosts.delete(e));
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
var kf = ["*"];
var Af = [
    [
      ["", "mat-card-avatar", ""],
      ["", "matCardAvatar", ""],
    ],
    [
      ["mat-card-title"],
      ["mat-card-subtitle"],
      ["", "mat-card-title", ""],
      ["", "mat-card-subtitle", ""],
      ["", "matCardTitle", ""],
      ["", "matCardSubtitle", ""],
    ],
    "*",
  ],
  Tf = [
    "[mat-card-avatar], [matCardAvatar]",
    `mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,
    "*",
  ],
  Rf = new C("MAT_CARD_CONFIG"),
  Vi = (() => {
    let t = class t {
      constructor(e) {
        this.appearance = e?.appearance || "raised";
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(Rf, 8));
    }),
      (t.ɵcmp = I({
        type: t,
        selectors: [["mat-card"]],
        hostAttrs: [1, "mat-mdc-card", "mdc-card"],
        hostVars: 4,
        hostBindings: function (i, o) {
          i & 2 &&
            V("mat-mdc-card-outlined", o.appearance === "outlined")(
              "mdc-card--outlined",
              o.appearance === "outlined",
            );
        },
        inputs: { appearance: "appearance" },
        exportAs: ["matCard"],
        standalone: !0,
        features: [U],
        ngContentSelectors: kf,
        decls: 1,
        vars: 0,
        template: function (i, o) {
          i & 1 && (J(), F(0));
        },
        styles: [
          '.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mdc-elevated-card-container-color, var(--mat-app-surface));border-color:var(--mdc-elevated-card-container-color, var(--mat-app-surface));border-radius:var(--mdc-elevated-card-container-shape, var(--mat-app-corner-medium));box-shadow:var(--mdc-elevated-card-container-elevation, var(--mat-app-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mdc-elevated-card-container-shape, var(--mat-app-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mdc-outlined-card-container-color, var(--mat-app-surface));border-radius:var(--mdc-outlined-card-container-shape, var(--mat-app-corner-medium));border-width:var(--mdc-outlined-card-outline-width);border-color:var(--mdc-outlined-card-outline-color, var(--mat-app-outline-variant));box-shadow:var(--mdc-outlined-card-container-elevation, var(--mat-app-level0))}.mat-mdc-card-outlined::after{border:none}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-app-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-app-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-app-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-app-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-app-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-app-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-app-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-app-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-app-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-app-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-app-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}',
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })(),
  Bi = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵdir = M({
        type: t,
        selectors: [
          ["mat-card-title"],
          ["", "mat-card-title", ""],
          ["", "matCardTitle", ""],
        ],
        hostAttrs: [1, "mat-mdc-card-title"],
        standalone: !0,
      }));
    let n = t;
    return n;
  })();
var zi = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵdir = M({
      type: t,
      selectors: [["mat-card-content"]],
      hostAttrs: [1, "mat-mdc-card-content"],
      standalone: !0,
    }));
  let n = t;
  return n;
})();
var Ui = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵcmp = I({
      type: t,
      selectors: [["mat-card-header"]],
      hostAttrs: [1, "mat-mdc-card-header"],
      standalone: !0,
      features: [U],
      ngContentSelectors: Tf,
      decls: 4,
      vars: 0,
      consts: [[1, "mat-mdc-card-header-text"]],
      template: function (i, o) {
        i & 1 && (J(Af), F(0), u(1, "div", 0), F(2, 1), m(), F(3, 2));
      },
      encapsulation: 2,
      changeDetection: 0,
    }));
  let n = t;
  return n;
})();
var to = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵdir = M({
      type: t,
      selectors: [
        ["", "mat-card-image", ""],
        ["", "matCardImage", ""],
      ],
      hostAttrs: [1, "mat-mdc-card-image", "mdc-card__media"],
      standalone: !0,
    }));
  let n = t;
  return n;
})();
var kd = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = j({ type: t })),
    (t.ɵinj = L({ imports: [lt, gr, lt] }));
  let n = t;
  return n;
})();
var Hi = (() => {
    let t = class t {
      constructor() {
        (this._vertical = !1), (this._inset = !1);
      }
      get vertical() {
        return this._vertical;
      }
      set vertical(e) {
        this._vertical = ie(e);
      }
      get inset() {
        return this._inset;
      }
      set inset(e) {
        this._inset = ie(e);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵcmp = I({
        type: t,
        selectors: [["mat-divider"]],
        hostAttrs: ["role", "separator", 1, "mat-divider"],
        hostVars: 7,
        hostBindings: function (i, o) {
          i & 2 &&
            (G("aria-orientation", o.vertical ? "vertical" : "horizontal"),
            V("mat-divider-vertical", o.vertical)(
              "mat-divider-horizontal",
              !o.vertical,
            )("mat-divider-inset", o.inset));
        },
        inputs: { vertical: "vertical", inset: "inset" },
        standalone: !0,
        features: [U],
        decls: 0,
        vars: 0,
        template: function (i, o) {},
        styles: [
          ".mat-divider{display:block;margin:0;border-top-style:solid;border-top-color:var(--mat-divider-color, var(--mat-app-outline));border-top-width:var(--mat-divider-width)}.mat-divider.mat-divider-vertical{border-top:0;border-right-style:solid;border-right-color:var(--mat-divider-color, var(--mat-app-outline));border-right-width:var(--mat-divider-width)}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })(),
  Ad = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵmod = j({ type: t })),
      (t.ɵinj = L({ imports: [lt, lt] }));
    let n = t;
    return n;
  })();
var io = class n {
  static ɵfac = function (r) {
    return new (r || n)();
  };
  static ɵcmp = I({
    type: n,
    selectors: [["svg-placeholder-image"]],
    decls: 14,
    vars: 0,
    consts: [
      [
        "version",
        "1.0",
        "xmlns",
        "http://www.w3.org/2000/svg",
        "width",
        "100%",
        "height",
        "100%",
        "viewBox",
        "0 0 2557.000000 2555.000000",
        "preserveAspectRatio",
        "xMidYMid meet",
      ],
      [
        "transform",
        "translate(0.000000,2555.000000) scale(0.100000,-0.100000)",
        "fill",
        "currentColor",
        "stroke",
        "currentColor",
      ],
      [
        "d",
        `M12930 20901 c-169 -30 -437 -147 -674 -294 -321 -199 -542 -359
-912 -659 -456 -368 -1126 -1016 -1643 -1587 -154 -171 -281 -315 -605 -691
-136 -158 -555 -691 -671 -854 -16 -23 -62 -87 -101 -142 -165 -230 -307 -440
-380 -564 -213 -358 -251 -430 -274 -521 -16 -62 5 -114 53 -134 85 -35 147
21 311 287 48 77 115 177 277 416 68 100 135 200 149 220 125 187 500 681 768
1011 78 97 175 216 215 266 216 267 736 835 1077 1175 401 401 877 828 1220
1096 541 423 977 669 1263 714 139 22 214 -6 242 -90 27 -80 19 -205 -21 -330
-8 -25 -21 -65 -28 -90 -19 -60 -44 -128 -61 -167 -8 -17 -15 -35 -15 -40 0
-4 -9 -26 -20 -48 -10 -22 -44 -94 -75 -160 -31 -66 -69 -145 -85 -175 -16
-30 -45 -86 -64 -125 -20 -38 -40 -77 -46 -85 -5 -8 -53 -91 -106 -185 -53
-93 -114 -195 -134 -225 -20 -31 -39 -62 -43 -70 -4 -8 -15 -27 -25 -41 -9
-14 -24 -36 -32 -49 -133 -209 -307 -461 -514 -745 -252 -347 -466 -618 -846
-1070 -65 -77 -152 -180 -193 -230 -70 -85 -233 -269 -698 -790 -108 -121
-295 -317 -417 -436 -131 -128 -224 -227 -227 -242 -13 -51 41 -104 94 -92 55
12 915 808 1186 1097 105 111 235 250 290 308 329 346 943 1116 1293 1620 70
101 219 324 267 400 56 88 80 126 127 200 19 30 44 70 54 89 11 18 24 41 29
50 6 9 30 51 55 95 25 43 55 95 66 115 48 80 252 491 279 561 16 41 32 80 36
85 10 14 59 140 59 151 0 5 7 22 15 38 9 16 20 46 25 65 5 20 15 56 23 81 39
121 52 206 51 335 0 119 -3 136 -29 199 -40 98 -118 179 -215 224 -71 34 -81
35 -200 38 -69 1 -145 -1 -170 -5z`,
      ],
      [
        "d",
        `M13860 18059 c-168 -16 -298 -78 -411 -196 -72 -75 -124 -157 -159
-248 -12 -33 -28 -76 -36 -95 -7 -19 -23 -95 -35 -169 -55 -338 28 -731 252
-1186 43 -88 90 -178 104 -200 13 -22 32 -53 41 -70 9 -16 52 -82 94 -145 402
-600 1046 -1294 1735 -1870 163 -136 214 -179 440 -375 159 -137 170 -145 222
-145 54 0 79 31 69 84 -6 29 -49 74 -289 294 -155 143 -316 295 -357 338 -41
44 -176 183 -300 310 -482 493 -852 911 -1115 1259 -93 122 -259 368 -301 444
-11 19 -32 57 -47 85 -145 262 -214 442 -274 716 -28 130 -25 427 5 529 50
170 128 278 242 338 51 26 63 28 170 28 145 -1 238 -27 440 -124 87 -41 102
-50 275 -163 213 -140 432 -308 779 -597 226 -189 265 -222 401 -341 66 -58
151 -131 188 -164 235 -203 637 -584 1062 -1005 504 -499 679 -664 940 -886
247 -210 335 -260 411 -235 21 7 40 23 49 40 42 81 -1 146 -239 359 -72 64
-390 373 -706 686 -546 542 -961 940 -1170 1126 -346 307 -431 382 -714 619
-250 210 -535 436 -676 535 -116 81 -214 147 -229 153 -9 3 -35 19 -59 35 -42
29 -274 147 -287 147 -4 0 -21 6 -38 14 -68 31 -185 64 -247 71 -36 3 -81 8
-100 10 -19 2 -78 -1 -130 -6z`,
      ],
      [
        "d",
        `M7960 15305 c-8 -2 -82 -11 -165 -20 -238 -26 -445 -70 -790 -166
-253 -70 -749 -284 -1125 -486 -388 -208 -908 -566 -1260 -868 -542 -464 -950
-913 -1426 -1565 -106 -145 -274 -387 -274 -395 0 -1 -21 -33 -46 -71 -81
-121 -140 -257 -130 -299 3 -13 18 -37 32 -54 51 -61 127 -35 212 72 45 57
232 330 241 351 4 11 218 311 251 354 12 15 57 73 100 129 546 712 1218 1348
1900 1797 239 158 198 132 515 318 17 10 138 71 270 137 323 160 594 266 905
354 182 52 370 92 525 113 66 9 149 20 185 25 36 4 189 8 341 9 243 0 296 -3
450 -25 237 -35 405 -74 554 -130 39 -14 84 -30 100 -34 17 -5 46 -15 65 -24
19 -9 64 -27 100 -41 85 -33 260 -124 363 -188 386 -241 689 -578 802 -888 77
-215 70 -168 70 -455 0 -218 -3 -267 -17 -305 -9 -25 -19 -62 -22 -82 -4 -20
-13 -50 -21 -65 -8 -15 -15 -35 -15 -43 0 -27 -90 -203 -138 -269 -43 -61 -82
-132 -82 -151 0 -5 12 -22 26 -39 56 -67 110 -32 236 152 139 203 226 383 282
577 19 69 46 243 40 267 -2 10 -8 70 -14 133 -17 195 -61 355 -146 524 -30 60
-70 131 -89 158 -19 26 -35 51 -35 54 0 16 -187 238 -262 310 -152 148 -353
300 -543 410 -74 43 -263 135 -355 173 -30 13 -74 32 -98 42 -23 10 -49 19
-58 19 -8 0 -28 7 -45 15 -16 9 -48 20 -72 24 -42 9 -126 29 -227 56 -231 61
-459 86 -800 90 -162 2 -302 2 -310 0z`,
      ],
      [
        "d",
        `M11985 14970 c-55 -4 -127 -15 -160 -24 -125 -36 -230 -70 -240 -77
-5 -3 -21 -10 -35 -14 -82 -24 -347 -170 -455 -251 -84 -62 -99 -78 -120 -127
-14 -33 -14 -40 0 -67 48 -92 107 -81 380 70 99 54 212 109 320 153 108 45
306 87 408 87 66 0 200 -25 252 -47 60 -25 143 -91 176 -140 102 -148 97 -372
-16 -638 -24 -57 -76 -160 -101 -200 -13 -22 -27 -47 -31 -55 -20 -45 -139
-210 -259 -360 -134 -168 -447 -468 -663 -635 -222 -173 -398 -305 -406 -305
-3 0 -30 -18 -60 -40 -30 -22 -58 -40 -62 -41 -33 -2 -143 -112 -143 -141 0
-18 68 -78 86 -78 20 1 109 48 274 145 56 33 126 74 156 90 29 17 59 36 66 43
7 7 16 12 21 12 5 0 48 26 95 59 314 211 460 329 692 558 107 105 214 216 238
245 193 240 299 420 400 678 12 31 22 62 22 70 0 8 10 44 21 80 18 55 22 91
23 240 1 160 -1 181 -23 245 -32 92 -56 138 -108 207 -108 142 -299 237 -518
258 -55 5 -107 9 -115 8 -8 0 -60 -4 -115 -8z`,
      ],
      [
        "d",
        `M19470 14269 c-14 -6 -52 -16 -85 -24 -74 -16 -283 -74 -420 -115
-137 -42 -161 -50 -290 -95 -71 -25 -148 -52 -170 -60 -22 -7 -92 -32 -155
-55 -63 -23 -134 -48 -156 -55 -23 -7 -50 -18 -60 -23 -11 -5 -46 -20 -79 -32
-33 -12 -81 -30 -107 -41 -27 -10 -72 -29 -100 -40 -29 -12 -71 -30 -94 -40
-23 -11 -46 -19 -52 -19 -5 0 -41 -14 -78 -31 -38 -16 -98 -41 -134 -55 -36
-13 -83 -33 -105 -43 -22 -10 -105 -47 -185 -81 -80 -35 -156 -69 -170 -76
-40 -20 -201 -94 -207 -94 -7 0 -363 -179 -438 -219 -33 -18 -89 -50 -124 -70
-35 -20 -84 -48 -110 -62 -202 -115 -501 -340 -665 -502 -138 -137 -289 -326
-355 -447 -104 -192 -147 -302 -197 -505 -26 -104 -32 -444 -9 -536 9 -37 20
-89 25 -116 23 -128 102 -311 191 -446 22 -32 39 -60 39 -62 0 -11 109 -166
139 -197 28 -30 42 -38 71 -38 86 0 96 81 23 192 -34 50 -68 113 -89 163 -37
87 -64 160 -64 175 -1 8 -9 33 -20 55 -11 22 -19 50 -20 61 0 12 -7 41 -15 65
-20 55 -55 300 -55 380 0 81 27 256 53 344 44 151 80 237 152 360 147 252 368
475 692 699 45 31 84 56 87 56 4 0 28 15 54 33 26 17 59 38 72 46 14 8 63 37
110 64 114 67 566 292 712 355 64 28 125 55 135 60 10 6 41 19 68 30 58 24
241 99 270 112 73 32 128 54 185 76 36 14 85 34 110 44 25 10 77 31 115 45 39
14 79 30 90 34 19 8 74 28 193 72 31 12 77 30 102 39 124 50 229 90 260 99 19
5 67 21 105 36 68 25 114 40 213 69 26 8 58 18 72 24 35 14 230 73 375 114
155 43 213 62 268 87 99 43 128 113 72 171 -28 29 -31 30 -124 29 -53 0 -107
-5 -121 -10z`,
      ],
      [
        "d",
        `M8356 14060 c-56 -17 -96 -73 -96 -134 0 -46 54 -106 97 -106 16 0
44 -8 64 -18 43 -22 198 -145 299 -238 41 -38 116 -103 165 -144 50 -41 117
-100 151 -130 80 -73 211 -183 287 -244 85 -67 438 -379 461 -408 11 -12 58
-65 105 -117 197 -214 277 -320 321 -421 21 -47 24 -71 25 -170 0 -99 -4 -123
-24 -175 -73 -181 -124 -259 -439 -672 -62 -81 -153 -202 -202 -268 -49 -66
-111 -144 -136 -173 -40 -44 -47 -59 -48 -96 -1 -57 16 -76 68 -76 41 0 44 3
316 283 325 332 415 442 589 716 37 59 88 179 120 285 42 139 20 360 -49 497
-113 221 -490 628 -880 947 -46 37 -151 126 -235 197 -84 72 -202 171 -261
220 -60 50 -138 117 -174 150 -36 33 -105 92 -155 131 -198 154 -279 191 -369
164z`,
      ],
      [
        "d",
        `M20053 14023 c-61 -30 -65 -113 -11 -198 31 -48 144 -183 408 -486
107 -123 220 -253 250 -290 50 -61 151 -178 461 -535 236 -271 288 -332 390
-457 57 -70 144 -176 192 -235 150 -183 325 -410 362 -471 6 -9 23 -33 39 -54
60 -80 284 -418 356 -537 13 -22 39 -66 93 -155 7 -11 19 -31 28 -45 9 -14 27
-45 41 -70 27 -49 163 -286 178 -310 5 -8 23 -42 41 -75 17 -33 35 -64 39 -70
4 -5 31 -55 60 -110 30 -55 72 -136 96 -180 23 -44 54 -105 69 -135 14 -30 31
-64 37 -75 37 -66 152 -309 193 -405 15 -36 36 -83 46 -105 65 -143 210 -578
209 -631 0 -11 7 -40 15 -65 8 -24 19 -84 24 -134 6 -49 15 -119 21 -155 14
-93 12 -254 -4 -351 -8 -46 -17 -109 -21 -139 -4 -30 -13 -70 -21 -89 -8 -18
-14 -44 -14 -58 0 -49 -93 -243 -173 -363 -28 -41 -96 -120 -151 -175 -265
-263 -612 -409 -1086 -456 -129 -13 -476 -4 -597 16 -49 8 -108 15 -133 15
-25 0 -76 7 -115 16 -38 8 -101 19 -140 25 -213 28 -592 138 -910 263 -50 20
-94 36 -99 36 -5 0 -27 8 -50 19 -23 10 -66 29 -96 41 -109 44 -233 104 -379
182 -152 82 -183 108 -163 136 20 30 133 255 158 317 24 57 31 73 76 175 11
25 26 59 33 75 7 17 31 68 53 115 77 159 82 179 82 311 0 84 -4 130 -15 156
-65 156 83 38 184 -146 31 -56 115 -185 155 -235 17 -22 94 -96 172 -165 142
-126 194 -159 364 -233 97 -42 276 -93 360 -103 30 -3 100 -13 155 -22 167
-26 423 -6 598 49 101 31 132 83 86 142 l-20 26 -202 1 c-268 1 -402 14 -617
61 -117 25 -157 38 -289 95 -122 52 -143 67 -295 204 -103 92 -175 178 -222
264 -94 173 -168 264 -266 332 -154 106 -333 161 -433 133 -42 -12 -46 -11
-150 39 -73 35 -120 51 -148 52 -23 0 -62 4 -87 8 l-45 7 55 54 c31 30 106
102 167 160 119 113 136 144 111 197 -11 24 -20 28 -59 31 -42 3 -51 -1 -123
-58 -43 -33 -83 -60 -87 -60 -12 0 -112 -65 -176 -115 -28 -22 -77 -58 -109
-80 -154 -107 -268 -255 -339 -441 -14 -38 -32 -82 -40 -99 -34 -70 -45 -115
-34 -143 26 -68 79 -86 152 -53 72 33 119 89 146 173 30 93 80 189 137 261 51
66 73 71 114 27 15 -16 37 -30 47 -30 67 0 287 -105 405 -193 58 -44 71 -59
92 -112 31 -79 41 -187 27 -290 -11 -78 -54 -209 -72 -221 -5 -3 -9 -12 -9
-21 0 -8 -6 -29 -14 -46 -37 -83 -56 -131 -56 -143 0 -17 -78 -166 -118 -224
-90 -132 -209 -255 -317 -327 -118 -79 -201 -109 -370 -135 -126 -20 -134 -20
-255 -4 -149 21 -249 52 -385 121 -202 102 -401 289 -501 470 -70 127 -77 143
-119 275 -35 107 -47 195 -52 354 -3 95 1 174 12 255 16 112 23 141 68 296 43
150 149 390 244 556 12 20 27 47 35 60 7 13 27 44 44 69 16 25 33 52 36 62 9
23 146 215 246 343 272 349 660 756 947 992 137 112 297 226 455 323 253 156
292 199 256 285 -46 109 -247 29 -642 -252 -411 -294 -925 -812 -1275 -1285
-166 -224 -266 -372 -292 -430 -13 -32 -18 -33 -58 -12 -27 13 -51 14 -202 4
-247 -16 -287 -10 -477 70 -36 15 -100 40 -143 55 -68 23 -83 25 -108 15 -34
-14 -49 -37 -49 -74 0 -44 11 -55 112 -114 55 -31 112 -65 126 -74 15 -10 34
-21 42 -24 8 -4 33 -14 55 -24 84 -36 194 -60 275 -60 77 0 200 27 273 61 53
24 54 -1 2 -108 -25 -54 -53 -111 -60 -128 -7 -16 -21 -48 -30 -70 -10 -22
-24 -60 -31 -85 -7 -25 -23 -76 -34 -115 -31 -102 -60 -238 -72 -335 -15 -126
-5 -458 17 -545 23 -91 66 -236 76 -255 4 -8 20 -44 35 -80 15 -36 36 -77 46
-92 10 -14 18 -29 18 -32 0 -18 130 -193 195 -264 294 -316 703 -490 1101
-468 245 13 489 115 669 280 28 25 56 46 62 46 7 0 45 -22 85 -48 101 -67 161
-104 248 -154 41 -24 83 -47 92 -53 352 -210 704 -360 1093 -465 44 -12 109
-30 145 -40 77 -21 232 -52 385 -76 139 -21 587 -31 730 -15 161 17 305 39
375 56 158 38 289 79 355 110 132 62 223 107 240 117 157 101 200 135 319 248
99 94 190 210 273 345 13 22 68 133 88 180 7 17 21 48 30 70 46 107 81 256 96
415 14 143 4 445 -17 560 -31 167 -55 276 -75 335 -10 33 -19 67 -19 76 0 9
-8 38 -19 65 -10 27 -28 81 -41 119 -12 39 -26 79 -30 90 -5 11 -25 61 -44
110 -111 290 -356 788 -608 1235 -32 58 -63 112 -68 120 -5 8 -18 31 -28 50
-24 46 -55 100 -85 147 -13 21 -27 45 -31 53 -4 8 -17 31 -29 51 -12 20 -39
65 -60 100 -21 35 -58 96 -83 134 -24 39 -47 76 -51 83 -3 8 -67 105 -141 215
-192 288 -370 523 -695 920 -32 39 -88 103 -125 142 -37 39 -123 136 -192 215
-68 80 -152 177 -186 215 -34 39 -140 160 -235 270 -95 110 -214 247 -265 305
-582 663 -617 700 -702 733 -50 20 -48 20 -89 0z`,
      ],
      [
        "d",
        `M7310 12614 c-39 -26 -50 -45 -50 -84 0 -63 65 -132 255 -271 428
-313 855 -735 1072 -1059 54 -80 141 -246 168 -320 53 -148 65 -211 65 -365 0
-168 -13 -233 -78 -384 -108 -252 -403 -520 -677 -614 -185 -64 -229 -71 -440
-71 -180 0 -206 2 -263 22 -34 12 -68 22 -76 22 -13 0 -71 22 -141 54 -154 70
-219 113 -325 212 -82 78 -120 95 -161 74 -32 -17 -39 -29 -39 -71 0 -32 10
-47 70 -112 139 -148 294 -271 438 -346 119 -63 371 -121 519 -121 91 0 310
32 388 56 405 128 720 376 909 716 87 156 146 385 146 563 0 160 -49 373 -123
540 -57 126 -84 174 -183 322 -202 300 -599 694 -1025 1014 -196 148 -236 174
-314 210 -74 33 -100 36 -135 13z`,
      ],
      [
        "d",
        `M13240 12564 c-233 -40 -411 -105 -520 -192 -191 -151 -287 -309
-330 -542 -25 -133 -25 -227 0 -365 90 -507 451 -954 1093 -1354 54 -33 102
-61 106 -61 4 0 12 -5 19 -12 31 -31 395 -215 567 -288 55 -23 119 -50 143
-61 23 -10 51 -19 60 -19 10 0 23 -5 29 -11 5 -5 32 -16 59 -24 84 -24 148
-46 176 -61 14 -8 34 -14 43 -14 9 0 31 -6 48 -14 34 -16 135 -49 257 -85 41
-13 86 -27 100 -33 14 -5 58 -18 97 -29 107 -27 153 -6 153 70 0 25 -8 37 -42
61 -22 16 -48 30 -57 30 -23 0 -291 91 -396 135 -16 7 -57 23 -90 35 -62 23
-135 55 -170 73 -11 6 -128 65 -260 132 -257 131 -331 170 -349 184 -6 4 -36
22 -66 38 -30 17 -71 40 -90 51 -19 12 -48 29 -65 38 -51 29 -195 125 -305
203 -216 154 -459 388 -580 559 -159 225 -233 429 -234 647 -2 202 45 325 169
451 123 124 248 177 461 195 297 25 556 -35 919 -211 99 -48 197 -93 217 -99
21 -7 40 -17 43 -22 4 -5 30 -9 59 -9 72 0 106 32 106 98 0 41 -4 50 -48 92
-111 107 -310 210 -632 325 -50 18 -181 51 -280 70 -80 16 -355 29 -410 19z`,
      ],
      [
        "d",
        `M18950 12508 c-127 -38 -325 -102 -355 -114 -16 -6 -56 -21 -87 -33
-170 -62 -168 -62 -278 -109 -25 -11 -63 -28 -85 -37 -206 -89 -508 -247 -733
-382 -110 -66 -459 -297 -537 -356 -333 -250 -427 -326 -640 -518 -319 -289
-533 -544 -664 -794 -95 -180 -152 -395 -151 -572 1 -72 29 -245 50 -303 25
-70 96 -207 139 -270 97 -140 290 -317 486 -446 156 -102 411 -224 565 -270
74 -22 236 -78 288 -100 18 -8 52 -14 77 -14 35 0 48 5 64 26 27 34 27 64 0
97 -18 24 -97 67 -121 67 -6 0 -26 7 -46 16 -81 36 -148 67 -167 77 -62 32
-131 71 -140 77 -5 4 -39 23 -75 42 -36 20 -82 45 -102 57 -21 11 -55 31 -75
42 -195 110 -457 329 -542 453 -42 60 -88 149 -118 225 -25 61 -27 77 -27 226
-1 189 12 240 103 425 178 357 585 775 1193 1223 148 109 342 241 450 305 46
27 112 67 148 89 36 22 94 56 130 75 36 19 82 45 103 57 21 11 97 51 170 87
72 36 143 71 157 79 22 11 235 103 360 155 57 24 209 77 375 131 241 79 322
116 345 158 20 39 12 95 -18 124 -26 25 -35 27 -103 26 -42 -1 -102 -10 -139
-21z`,
      ],
      [
        "d",
        `M6433 11114 c-24 -24 -25 -31 -20 -84 4 -32 15 -85 25 -117 41 -125
49 -207 31 -307 -23 -130 -77 -235 -195 -381 -143 -178 -625 -606 -899 -800
-23 -16 -94 -69 -156 -116 -107 -80 -229 -161 -309 -206 -19 -11 -64 -36 -100
-57 -36 -20 -72 -40 -80 -45 -34 -18 -68 -36 -113 -59 -92 -48 -120 -110 -72
-157 33 -34 77 -32 145 4 30 17 82 44 115 61 55 29 131 70 261 141 61 32 155
87 192 111 15 10 43 26 62 36 71 38 116 65 147 88 17 13 35 24 38 24 15 0 270
184 395 284 237 190 578 528 647 641 57 92 105 185 110 208 9 44 31 30 102
-63 137 -179 256 -271 334 -256 54 10 97 65 97 121 0 44 -3 48 -98 143 -91 90
-184 207 -389 485 -46 62 -83 117 -83 122 0 6 -7 23 -15 38 -8 16 -20 47 -26
69 -13 51 -58 98 -94 98 -15 0 -37 -11 -52 -26z`,
      ],
      [
        "d",
        `M6926 9103 c-11 -3 -41 -20 -67 -39 -27 -19 -51 -34 -54 -34 -3 0
-74 -55 -157 -122 -222 -181 -335 -266 -548 -418 -51 -36 -110 -79 -133 -96
-45 -33 -325 -221 -442 -296 -88 -56 -253 -155 -325 -195 -30 -16 -73 -40 -95
-53 -93 -53 -349 -181 -460 -229 -66 -29 -134 -59 -152 -67 -17 -8 -37 -14
-45 -14 -8 0 -18 -4 -24 -8 -17 -16 -227 -84 -374 -122 -47 -12 -107 -28 -135
-35 -27 -8 -72 -17 -100 -20 -27 -4 -77 -13 -110 -20 -33 -8 -155 -21 -271
-31 -198 -16 -221 -16 -400 0 -104 9 -211 23 -239 31 -27 7 -68 16 -90 20
-102 17 -328 107 -465 186 -118 68 -312 260 -378 376 -41 72 -82 160 -82 175
0 9 -6 31 -14 49 -20 51 -48 295 -41 370 8 91 -14 133 -72 137 -37 3 -44 -1
-66 -30 -20 -27 -26 -49 -31 -118 -9 -124 21 -389 56 -490 9 -25 26 -76 39
-115 81 -250 279 -478 540 -625 148 -83 379 -166 529 -189 36 -6 80 -15 99
-20 73 -22 403 -33 608 -21 109 6 216 15 238 20 22 5 72 14 110 20 199 30 556
132 770 220 17 7 53 21 80 32 47 19 83 34 165 71 77 34 378 186 430 217 30 18
64 36 75 41 11 5 52 29 90 54 39 25 77 48 85 52 109 50 738 479 1010 690 371
287 483 383 544 464 53 70 59 108 23 152 -23 29 -78 42 -121 30z`,
      ],
    ],
    template: function (r, e) {
      r & 1 &&
        (mi(),
        u(0, "svg", 0)(1, "g", 1),
        T(2, "path", 2)(3, "path", 3)(4, "path", 4)(5, "path", 5)(6, "path", 6)(
          7,
          "path",
          7,
        )(8, "path", 8)(9, "path", 9)(10, "path", 10)(11, "path", 11)(
          12,
          "path",
          12,
        )(13, "path", 13),
        m()());
    },
  });
};
function Of(n, t) {
  if ((n & 1 && T(0, "img", 4), n & 2)) {
    let r = nt(2);
    qe("src", r.imagePath, oe);
  }
}
function Ff(n, t) {
  n & 1 && T(0, "svg-placeholder-image", 5);
}
function Pf(n, t) {
  if (
    (n & 1 &&
      (u(0, "a", 0)(1, "div", 2)(2, "div", 3),
      K(3, Of, 1, 1, "img", 4)(4, Ff, 1, 0, "svg-placeholder-image", 5),
      m(),
      u(5, "div", 6),
      g(6),
      m(),
      u(7, "div", 7),
      g(8),
      m()()()),
    n & 2)
  ) {
    let r = nt();
    qe("href", r.link, oe),
      D(3),
      ft(r.imagePath ? 3 : 4),
      D(3),
      St(r.title),
      D(2),
      St(r.summary);
  }
}
function Nf(n, t) {
  if ((n & 1 && T(0, "img", 4), n & 2)) {
    let r = nt(2);
    qe("src", r.imagePath, oe);
  }
}
function Lf(n, t) {
  n & 1 && T(0, "svg-placeholder-image", 5);
}
function jf(n, t) {
  if (
    (n & 1 &&
      (u(0, "div", 1)(1, "div", 2)(2, "div", 3),
      K(3, Nf, 1, 1, "img", 4)(4, Lf, 1, 0, "svg-placeholder-image", 5),
      m(),
      u(5, "div", 6),
      g(6),
      m(),
      u(7, "div", 7),
      g(8),
      m()()()),
    n & 2)
  ) {
    let r = nt();
    D(3), ft(r.imagePath ? 3 : 4), D(3), St(r.title), D(2), St(r.summary);
  }
}
var no = class n {
  link;
  imagePath;
  summary = "";
  title;
  ngOnInit() {}
  static ɵfac = function (r) {
    return new (r || n)();
  };
  static ɵcmp = I({
    type: n,
    selectors: [["app-link-card"]],
    inputs: {
      link: "link",
      imagePath: "imagePath",
      summary: "summary",
      title: "title",
    },
    decls: 2,
    vars: 1,
    consts: [
      ["target", "_blank", 1, "list-item", 3, "href"],
      ["target", "_blank", 1, "list-item"],
      [1, "card"],
      [1, "card-image-wrapper"],
      ["mat-card-image", "", "width", "100%", 3, "src"],
      [1, "image-place-holder"],
      [1, "card-title"],
      [1, "card-summary"],
    ],
    template: function (r, e) {
      r & 1 && K(0, Pf, 9, 4, "a", 0)(1, jf, 9, 3, "div", 1),
        r & 2 && ft(e.link ? 0 : 1);
    },
    dependencies: [to, io],
    styles: [
      ".card[_ngcontent-%COMP%]{overflow:hidden;width:20rem;height:20rem;transition:background .3s ease}.list-item[_ngcontent-%COMP%]{display:inline-block;margin:1.2rem;vertical-align:top}.list-item[_ngcontent-%COMP%]   .card-summary[_ngcontent-%COMP%], .list-item[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{display:flex;align-items:center;text-align:left}.list-item[_ngcontent-%COMP%]   .card-summary[_ngcontent-%COMP%]{display:block;font-size:1rem;margin:0 1rem 1rem;overflow:auto;height:3rem}.list-item[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:500;padding:1rem}.list-item[_ngcontent-%COMP%], .list-item[_ngcontent-%COMP%]:active, .list-item[_ngcontent-%COMP%]:hover, .list-item[_ngcontent-%COMP%]:focus{text-decoration:none}.card-image-wrapper[_ngcontent-%COMP%]{height:12rem;overflow:hidden}",
    ],
  });
};
var Bf = ["cardContentRef"];
function zf(n, t) {
  if ((n & 1 && T(0, "app-link-card", 4), n & 2)) {
    let r = t.$implicit;
    Q("title", r.title)("link", r.link)("imagePath", r.imagePath)(
      "summary",
      r.summary,
    );
  }
}
var ro = class n {
  constructor(t, r) {
    this.elRef = t;
    this.cdr = r;
  }
  cardContentRef;
  resizeObserver;
  title = "Web App";
  rowHeight = "3:1";
  projects = [
    {
      title: "Signable - Capstone Project",
      imagePath: "images/web-preview/signable.png",
      link: "https://signable-ffg0eegcfngdgubn.westus2-01.azurewebsites.net/",
      summary:
        "This web app integrates machine learning solutions and 3D illustrations to teach the American Sign Language alphabet.",
    },
    {
      title: "Chinese Typing Practice",
      imagePath: "images/web-preview/typing-practice-preview.png",
      link: "https://xuyennguyen2733.github.io/TypingPractice/",
      summary:
        "Inspired by Typer Shark! Deluxe, this tool helps users practice typing Chinese characters using the Bopomofo keyboard layout, commonly used in Taiwan.",
    },
    {
      title: "Class Schedule Maker",
      imagePath: "images/web-preview/class-scheduler.png",
      link: "https://xuyennguyen2733.github.io/ClassSchedule/",
      summary:
        "This web app allows users to log there class information (such as class name, location, time, etc.) onto a weekly calendar.",
    },
    {
      title: "Signaway - Learn Sign Language",
      summary:
        "(Comming soon!) Stemming from the idea of Signable, this app goes beyond the ASL alphabet by teaching users basic hand shapes and guiding them through signing words and phrases.",
    },
  ];
  ngAfterViewInit() {
    this.calculateRowHeight(),
      (this.resizeObserver = new ResizeObserver(() => {
        this.calculateRowHeight();
      })),
      this.resizeObserver.observe(this.cardContentRef.nativeElement);
  }
  initializeResizeObserver() {
    this.cardContentRef && this.cardContentRef.nativeElement
      ? ((this.resizeObserver = new ResizeObserver(() => {
          this.calculateRowHeight();
        })),
        this.resizeObserver.observe(this.cardContentRef.nativeElement))
      : console.error("cardContentRef is not available.");
  }
  onResize() {
    this.calculateRowHeight();
  }
  calculateRowHeight() {
    let t = this.elRef.nativeElement.querySelector(".container-card"),
      r = this.elRef.nativeElement.querySelector(
        ".container-card > mat-card-header",
      ),
      e = t.offsetWidth,
      i = t.offsetHeight - r.offsetHeight;
    (this.rowHeight = (e / i).toFixed(2) + ":1"), this.cdr.detectChanges();
  }
  ngOnDestroy() {
    this.resizeObserver && this.resizeObserver.disconnect();
  }
  static ɵfac = function (r) {
    return new (r || n)(d(E), d(ot));
  };
  static ɵcmp = I({
    type: n,
    selectors: [["app-web-app"]],
    viewQuery: function (r, e) {
      if ((r & 1 && pt(Bf, 5), r & 2)) {
        let i;
        P((i = N())) && (e.cardContentRef = i.first);
      }
    },
    hostBindings: function (r, e) {
      r & 1 &&
        Y(
          "resize",
          function (o) {
            return e.onResize(o);
          },
          !1,
          gi,
        );
    },
    decls: 10,
    vars: 1,
    consts: [
      ["cardContentRef", ""],
      [
        1,
        "container-card",
        2,
        "text-align",
        "center",
        "max-width",
        "70rem",
        "margin",
        "auto",
      ],
      [1, "container-card-content"],
      [1, "project-list"],
      [3, "title", "link", "imagePath", "summary"],
    ],
    template: function (r, e) {
      r & 1 &&
        (u(0, "mat-card", 1)(1, "mat-card-header")(2, "mat-card-title"),
        g(3),
        m()(),
        T(4, "mat-divider"),
        u(5, "mat-card-content", 2, 0)(7, "div", 3),
        Se(8, zf, 1, 4, "app-link-card", 4, De),
        m()()()),
        r & 2 && (D(3), St(e.title), D(5), ke(e.projects));
    },
    dependencies: [Vi, zi, Ui, Bi, Hi, no],
    styles: [
      ".project-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;max-width:50rem;margin:auto}",
    ],
  });
};
var Uf = 20,
  Vn = (() => {
    let t = class t {
      constructor(e, i, o) {
        (this._ngZone = e),
          (this._platform = i),
          (this._scrolled = new w()),
          (this._globalSubscription = null),
          (this._scrolledCount = 0),
          (this.scrollContainers = new Map()),
          (this._document = o);
      }
      register(e) {
        this.scrollContainers.has(e) ||
          this.scrollContainers.set(
            e,
            e.elementScrolled().subscribe(() => this._scrolled.next(e)),
          );
      }
      deregister(e) {
        let i = this.scrollContainers.get(e);
        i && (i.unsubscribe(), this.scrollContainers.delete(e));
      }
      scrolled(e = Uf) {
        return this._platform.isBrowser
          ? new Nt((i) => {
              this._globalSubscription || this._addGlobalListener();
              let o =
                e > 0
                  ? this._scrolled.pipe(jo(e)).subscribe(i)
                  : this._scrolled.subscribe(i);
              return (
                this._scrolledCount++,
                () => {
                  o.unsubscribe(),
                    this._scrolledCount--,
                    this._scrolledCount || this._removeGlobalListener();
                }
              );
            })
          : x();
      }
      ngOnDestroy() {
        this._removeGlobalListener(),
          this.scrollContainers.forEach((e, i) => this.deregister(i)),
          this._scrolled.complete();
      }
      ancestorScrolled(e, i) {
        let o = this.getAncestorScrollContainers(e);
        return this.scrolled(i).pipe(Z((a) => !a || o.indexOf(a) > -1));
      }
      getAncestorScrollContainers(e) {
        let i = [];
        return (
          this.scrollContainers.forEach((o, a) => {
            this._scrollableContainsElement(a, e) && i.push(a);
          }),
          i
        );
      }
      _getWindow() {
        return this._document.defaultView || window;
      }
      _scrollableContainsElement(e, i) {
        let o = Zt(i),
          a = e.getElementRef().nativeElement;
        do if (o == a) return !0;
        while ((o = o.parentElement));
        return !1;
      }
      _addGlobalListener() {
        this._globalSubscription = this._ngZone.runOutsideAngular(() => {
          let e = this._getWindow();
          return ne(e.document, "scroll").subscribe(() =>
            this._scrolled.next(),
          );
        });
      }
      _removeGlobalListener() {
        this._globalSubscription &&
          (this._globalSubscription.unsubscribe(),
          (this._globalSubscription = null));
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(S), f(q), f(k, 8));
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  $i = (() => {
    let t = class t {
      constructor(e, i, o, a) {
        (this.elementRef = e),
          (this.scrollDispatcher = i),
          (this.ngZone = o),
          (this.dir = a),
          (this._destroyed = new w()),
          (this._elementScrolled = new Nt((s) =>
            this.ngZone.runOutsideAngular(() =>
              ne(this.elementRef.nativeElement, "scroll")
                .pipe(z(this._destroyed))
                .subscribe(s),
            ),
          ));
      }
      ngOnInit() {
        this.scrollDispatcher.register(this);
      }
      ngOnDestroy() {
        this.scrollDispatcher.deregister(this),
          this._destroyed.next(),
          this._destroyed.complete();
      }
      elementScrolled() {
        return this._elementScrolled;
      }
      getElementRef() {
        return this.elementRef;
      }
      scrollTo(e) {
        let i = this.elementRef.nativeElement,
          o = this.dir && this.dir.value == "rtl";
        e.left == null && (e.left = o ? e.end : e.start),
          e.right == null && (e.right = o ? e.start : e.end),
          e.bottom != null &&
            (e.top = i.scrollHeight - i.clientHeight - e.bottom),
          o && Mi() != Yt.NORMAL
            ? (e.left != null &&
                (e.right = i.scrollWidth - i.clientWidth - e.left),
              Mi() == Yt.INVERTED
                ? (e.left = e.right)
                : Mi() == Yt.NEGATED && (e.left = e.right ? -e.right : e.right))
            : e.right != null &&
              (e.left = i.scrollWidth - i.clientWidth - e.right),
          this._applyScrollToOptions(e);
      }
      _applyScrollToOptions(e) {
        let i = this.elementRef.nativeElement;
        Gr()
          ? i.scrollTo(e)
          : (e.top != null && (i.scrollTop = e.top),
            e.left != null && (i.scrollLeft = e.left));
      }
      measureScrollOffset(e) {
        let i = "left",
          o = "right",
          a = this.elementRef.nativeElement;
        if (e == "top") return a.scrollTop;
        if (e == "bottom") return a.scrollHeight - a.clientHeight - a.scrollTop;
        let s = this.dir && this.dir.value == "rtl";
        return (
          e == "start" ? (e = s ? o : i) : e == "end" && (e = s ? i : o),
          s && Mi() == Yt.INVERTED
            ? e == i
              ? a.scrollWidth - a.clientWidth - a.scrollLeft
              : a.scrollLeft
            : s && Mi() == Yt.NEGATED
              ? e == i
                ? a.scrollLeft + a.scrollWidth - a.clientWidth
                : -a.scrollLeft
              : e == i
                ? a.scrollLeft
                : a.scrollWidth - a.clientWidth - a.scrollLeft
        );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(E), d(Vn), d(S), d(wt, 8));
    }),
      (t.ɵdir = M({
        type: t,
        selectors: [
          ["", "cdk-scrollable", ""],
          ["", "cdkScrollable", ""],
        ],
        standalone: !0,
      }));
    let n = t;
    return n;
  })(),
  Hf = 20,
  Fe = (() => {
    let t = class t {
      constructor(e, i, o) {
        (this._platform = e),
          (this._change = new w()),
          (this._changeListener = (a) => {
            this._change.next(a);
          }),
          (this._document = o),
          i.runOutsideAngular(() => {
            if (e.isBrowser) {
              let a = this._getWindow();
              a.addEventListener("resize", this._changeListener),
                a.addEventListener("orientationchange", this._changeListener);
            }
            this.change().subscribe(() => (this._viewportSize = null));
          });
      }
      ngOnDestroy() {
        if (this._platform.isBrowser) {
          let e = this._getWindow();
          e.removeEventListener("resize", this._changeListener),
            e.removeEventListener("orientationchange", this._changeListener);
        }
        this._change.complete();
      }
      getViewportSize() {
        this._viewportSize || this._updateViewportSize();
        let e = {
          width: this._viewportSize.width,
          height: this._viewportSize.height,
        };
        return this._platform.isBrowser || (this._viewportSize = null), e;
      }
      getViewportRect() {
        let e = this.getViewportScrollPosition(),
          { width: i, height: o } = this.getViewportSize();
        return {
          top: e.top,
          left: e.left,
          bottom: e.top + o,
          right: e.left + i,
          height: o,
          width: i,
        };
      }
      getViewportScrollPosition() {
        if (!this._platform.isBrowser) return { top: 0, left: 0 };
        let e = this._document,
          i = this._getWindow(),
          o = e.documentElement,
          a = o.getBoundingClientRect(),
          s = -a.top || e.body.scrollTop || i.scrollY || o.scrollTop || 0,
          c = -a.left || e.body.scrollLeft || i.scrollX || o.scrollLeft || 0;
        return { top: s, left: c };
      }
      change(e = Hf) {
        return e > 0 ? this._change.pipe(jo(e)) : this._change;
      }
      _getWindow() {
        return this._document.defaultView || window;
      }
      _updateViewportSize() {
        let e = this._getWindow();
        this._viewportSize = this._platform.isBrowser
          ? { width: e.innerWidth, height: e.innerHeight }
          : { width: 0, height: 0 };
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(q), f(S), f(k, 8));
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
var Bn = class {
    attach(t) {
      return (this._attachedHost = t), t.attach(this);
    }
    detach() {
      let t = this._attachedHost;
      t != null && ((this._attachedHost = null), t.detach());
    }
    get isAttached() {
      return this._attachedHost != null;
    }
    setAttachedHost(t) {
      this._attachedHost = t;
    }
  },
  Wi = class extends Bn {
    constructor(t, r, e, i, o) {
      super(),
        (this.component = t),
        (this.viewContainerRef = r),
        (this.injector = e),
        (this.componentFactoryResolver = i),
        (this.projectableNodes = o);
    }
  },
  pe = class extends Bn {
    constructor(t, r, e, i) {
      super(),
        (this.templateRef = t),
        (this.viewContainerRef = r),
        (this.context = e),
        (this.injector = i);
    }
    get origin() {
      return this.templateRef.elementRef;
    }
    attach(t, r = this.context) {
      return (this.context = r), super.attach(t);
    }
    detach() {
      return (this.context = void 0), super.detach();
    }
  },
  fs = class extends Bn {
    constructor(t) {
      super(), (this.element = t instanceof E ? t.nativeElement : t);
    }
  },
  Gi = class {
    constructor() {
      (this._isDisposed = !1), (this.attachDomPortal = null);
    }
    hasAttached() {
      return !!this._attachedPortal;
    }
    attach(t) {
      if (t instanceof Wi)
        return (this._attachedPortal = t), this.attachComponentPortal(t);
      if (t instanceof pe)
        return (this._attachedPortal = t), this.attachTemplatePortal(t);
      if (this.attachDomPortal && t instanceof fs)
        return (this._attachedPortal = t), this.attachDomPortal(t);
    }
    detach() {
      this._attachedPortal &&
        (this._attachedPortal.setAttachedHost(null),
        (this._attachedPortal = null)),
        this._invokeDisposeFn();
    }
    dispose() {
      this.hasAttached() && this.detach(),
        this._invokeDisposeFn(),
        (this._isDisposed = !0);
    }
    setDisposeFn(t) {
      this._disposeFn = t;
    }
    _invokeDisposeFn() {
      this._disposeFn && (this._disposeFn(), (this._disposeFn = null));
    }
  };
var oo = class extends Gi {
  constructor(t, r, e, i, o) {
    super(),
      (this.outletElement = t),
      (this._componentFactoryResolver = r),
      (this._appRef = e),
      (this._defaultInjector = i),
      (this.attachDomPortal = (a) => {
        this._document;
        let s = a.element;
        s.parentNode;
        let c = this._document.createComment("dom-portal");
        s.parentNode.insertBefore(c, s),
          this.outletElement.appendChild(s),
          (this._attachedPortal = a),
          super.setDisposeFn(() => {
            c.parentNode && c.parentNode.replaceChild(s, c);
          });
      }),
      (this._document = o);
  }
  attachComponentPortal(t) {
    let e = (
        t.componentFactoryResolver || this._componentFactoryResolver
      ).resolveComponentFactory(t.component),
      i;
    return (
      t.viewContainerRef
        ? ((i = t.viewContainerRef.createComponent(
            e,
            t.viewContainerRef.length,
            t.injector || t.viewContainerRef.injector,
            t.projectableNodes || void 0,
          )),
          this.setDisposeFn(() => i.destroy()))
        : ((i = e.create(t.injector || this._defaultInjector || at.NULL)),
          this._appRef.attachView(i.hostView),
          this.setDisposeFn(() => {
            this._appRef.viewCount > 0 && this._appRef.detachView(i.hostView),
              i.destroy();
          })),
      this.outletElement.appendChild(this._getComponentRootNode(i)),
      (this._attachedPortal = t),
      i
    );
  }
  attachTemplatePortal(t) {
    let r = t.viewContainerRef,
      e = r.createEmbeddedView(t.templateRef, t.context, {
        injector: t.injector,
      });
    return (
      e.rootNodes.forEach((i) => this.outletElement.appendChild(i)),
      e.detectChanges(),
      this.setDisposeFn(() => {
        let i = r.indexOf(e);
        i !== -1 && r.remove(i);
      }),
      (this._attachedPortal = t),
      e
    );
  }
  dispose() {
    super.dispose(), this.outletElement.remove();
  }
  _getComponentRootNode(t) {
    return t.hostView.rootNodes[0];
  }
};
var Td = (() => {
  let t = class t extends pe {
    constructor(e, i) {
      super(e, i);
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(d(Lt), d(Wt));
  }),
    (t.ɵdir = M({
      type: t,
      selectors: [["", "cdkPortal", ""]],
      exportAs: ["cdkPortal"],
      standalone: !0,
      features: [it],
    }));
  let n = t;
  return n;
})();
var fe = (() => {
  let t = class t extends Gi {
    constructor(e, i, o) {
      super(),
        (this._componentFactoryResolver = e),
        (this._viewContainerRef = i),
        (this._isInitialized = !1),
        (this.attached = new O()),
        (this.attachDomPortal = (a) => {
          this._document;
          let s = a.element;
          s.parentNode;
          let c = this._document.createComment("dom-portal");
          a.setAttachedHost(this),
            s.parentNode.insertBefore(c, s),
            this._getRootNode().appendChild(s),
            (this._attachedPortal = a),
            super.setDisposeFn(() => {
              c.parentNode && c.parentNode.replaceChild(s, c);
            });
        }),
        (this._document = o);
    }
    get portal() {
      return this._attachedPortal;
    }
    set portal(e) {
      (this.hasAttached() && !e && !this._isInitialized) ||
        (this.hasAttached() && super.detach(),
        e && super.attach(e),
        (this._attachedPortal = e || null));
    }
    get attachedRef() {
      return this._attachedRef;
    }
    ngOnInit() {
      this._isInitialized = !0;
    }
    ngOnDestroy() {
      super.dispose(), (this._attachedRef = this._attachedPortal = null);
    }
    attachComponentPortal(e) {
      e.setAttachedHost(this);
      let i =
          e.viewContainerRef != null
            ? e.viewContainerRef
            : this._viewContainerRef,
        a = (
          e.componentFactoryResolver || this._componentFactoryResolver
        ).resolveComponentFactory(e.component),
        s = i.createComponent(
          a,
          i.length,
          e.injector || i.injector,
          e.projectableNodes || void 0,
        );
      return (
        i !== this._viewContainerRef &&
          this._getRootNode().appendChild(s.hostView.rootNodes[0]),
        super.setDisposeFn(() => s.destroy()),
        (this._attachedPortal = e),
        (this._attachedRef = s),
        this.attached.emit(s),
        s
      );
    }
    attachTemplatePortal(e) {
      e.setAttachedHost(this);
      let i = this._viewContainerRef.createEmbeddedView(
        e.templateRef,
        e.context,
        { injector: e.injector },
      );
      return (
        super.setDisposeFn(() => this._viewContainerRef.clear()),
        (this._attachedPortal = e),
        (this._attachedRef = i),
        this.attached.emit(i),
        i
      );
    }
    _getRootNode() {
      let e = this._viewContainerRef.element.nativeElement;
      return e.nodeType === e.ELEMENT_NODE ? e : e.parentNode;
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(d(bi), d(Wt), d(k));
  }),
    (t.ɵdir = M({
      type: t,
      selectors: [["", "cdkPortalOutlet", ""]],
      inputs: { portal: [0, "cdkPortalOutlet", "portal"] },
      outputs: { attached: "attached" },
      exportAs: ["cdkPortalOutlet"],
      standalone: !0,
      features: [it],
    }));
  let n = t;
  return n;
})();
var Rd = Gr(),
  gs = class {
    constructor(t, r) {
      (this._viewportRuler = t),
        (this._previousHTMLStyles = { top: "", left: "" }),
        (this._isEnabled = !1),
        (this._document = r);
    }
    attach() {}
    enable() {
      if (this._canBeEnabled()) {
        let t = this._document.documentElement;
        (this._previousScrollPosition =
          this._viewportRuler.getViewportScrollPosition()),
          (this._previousHTMLStyles.left = t.style.left || ""),
          (this._previousHTMLStyles.top = t.style.top || ""),
          (t.style.left = bt(-this._previousScrollPosition.left)),
          (t.style.top = bt(-this._previousScrollPosition.top)),
          t.classList.add("cdk-global-scrollblock"),
          (this._isEnabled = !0);
      }
    }
    disable() {
      if (this._isEnabled) {
        let t = this._document.documentElement,
          r = this._document.body,
          e = t.style,
          i = r.style,
          o = e.scrollBehavior || "",
          a = i.scrollBehavior || "";
        (this._isEnabled = !1),
          (e.left = this._previousHTMLStyles.left),
          (e.top = this._previousHTMLStyles.top),
          t.classList.remove("cdk-global-scrollblock"),
          Rd && (e.scrollBehavior = i.scrollBehavior = "auto"),
          window.scroll(
            this._previousScrollPosition.left,
            this._previousScrollPosition.top,
          ),
          Rd && ((e.scrollBehavior = o), (i.scrollBehavior = a));
      }
    }
    _canBeEnabled() {
      if (
        this._document.documentElement.classList.contains(
          "cdk-global-scrollblock",
        ) ||
        this._isEnabled
      )
        return !1;
      let r = this._document.body,
        e = this._viewportRuler.getViewportSize();
      return r.scrollHeight > e.height || r.scrollWidth > e.width;
    }
  };
var bs = class {
    constructor(t, r, e, i) {
      (this._scrollDispatcher = t),
        (this._ngZone = r),
        (this._viewportRuler = e),
        (this._config = i),
        (this._scrollSubscription = null),
        (this._detach = () => {
          this.disable(),
            this._overlayRef.hasAttached() &&
              this._ngZone.run(() => this._overlayRef.detach());
        });
    }
    attach(t) {
      this._overlayRef, (this._overlayRef = t);
    }
    enable() {
      if (this._scrollSubscription) return;
      let t = this._scrollDispatcher
        .scrolled(0)
        .pipe(
          Z(
            (r) =>
              !r ||
              !this._overlayRef.overlayElement.contains(
                r.getElementRef().nativeElement,
              ),
          ),
        );
      this._config && this._config.threshold && this._config.threshold > 1
        ? ((this._initialScrollPosition =
            this._viewportRuler.getViewportScrollPosition().top),
          (this._scrollSubscription = t.subscribe(() => {
            let r = this._viewportRuler.getViewportScrollPosition().top;
            Math.abs(r - this._initialScrollPosition) > this._config.threshold
              ? this._detach()
              : this._overlayRef.updatePosition();
          })))
        : (this._scrollSubscription = t.subscribe(this._detach));
    }
    disable() {
      this._scrollSubscription &&
        (this._scrollSubscription.unsubscribe(),
        (this._scrollSubscription = null));
    }
    detach() {
      this.disable(), (this._overlayRef = null);
    }
  },
  ao = class {
    enable() {}
    disable() {}
    attach() {}
  };
function vs(n, t) {
  return t.some((r) => {
    let e = n.bottom < r.top,
      i = n.top > r.bottom,
      o = n.right < r.left,
      a = n.left > r.right;
    return e || i || o || a;
  });
}
function Md(n, t) {
  return t.some((r) => {
    let e = n.top < r.top,
      i = n.bottom > r.bottom,
      o = n.left < r.left,
      a = n.right > r.right;
    return e || i || o || a;
  });
}
var _s = class {
    constructor(t, r, e, i) {
      (this._scrollDispatcher = t),
        (this._viewportRuler = r),
        (this._ngZone = e),
        (this._config = i),
        (this._scrollSubscription = null);
    }
    attach(t) {
      this._overlayRef, (this._overlayRef = t);
    }
    enable() {
      if (!this._scrollSubscription) {
        let t = this._config ? this._config.scrollThrottle : 0;
        this._scrollSubscription = this._scrollDispatcher
          .scrolled(t)
          .subscribe(() => {
            if (
              (this._overlayRef.updatePosition(),
              this._config && this._config.autoClose)
            ) {
              let r = this._overlayRef.overlayElement.getBoundingClientRect(),
                { width: e, height: i } = this._viewportRuler.getViewportSize();
              vs(r, [
                { width: e, height: i, bottom: i, right: e, top: 0, left: 0 },
              ]) &&
                (this.disable(),
                this._ngZone.run(() => this._overlayRef.detach()));
            }
          });
      }
    }
    disable() {
      this._scrollSubscription &&
        (this._scrollSubscription.unsubscribe(),
        (this._scrollSubscription = null));
    }
    detach() {
      this.disable(), (this._overlayRef = null);
    }
  },
  $f = (() => {
    let t = class t {
      constructor(e, i, o, a) {
        (this._scrollDispatcher = e),
          (this._viewportRuler = i),
          (this._ngZone = o),
          (this.noop = () => new ao()),
          (this.close = (s) =>
            new bs(
              this._scrollDispatcher,
              this._ngZone,
              this._viewportRuler,
              s,
            )),
          (this.block = () => new gs(this._viewportRuler, this._document)),
          (this.reposition = (s) =>
            new _s(
              this._scrollDispatcher,
              this._viewportRuler,
              this._ngZone,
              s,
            )),
          (this._document = a);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(Vn), f(Fe), f(S), f(k));
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  zn = class {
    constructor(t) {
      if (
        ((this.scrollStrategy = new ao()),
        (this.panelClass = ""),
        (this.hasBackdrop = !1),
        (this.backdropClass = "cdk-overlay-dark-backdrop"),
        (this.disposeOnNavigation = !1),
        t)
      ) {
        let r = Object.keys(t);
        for (let e of r) t[e] !== void 0 && (this[e] = t[e]);
      }
    }
  };
var ys = class {
  constructor(t, r) {
    (this.connectionPair = t), (this.scrollableViewProperties = r);
  }
};
var Vd = (() => {
    let t = class t {
      constructor(e) {
        (this._attachedOverlays = []), (this._document = e);
      }
      ngOnDestroy() {
        this.detach();
      }
      add(e) {
        this.remove(e), this._attachedOverlays.push(e);
      }
      remove(e) {
        let i = this._attachedOverlays.indexOf(e);
        i > -1 && this._attachedOverlays.splice(i, 1),
          this._attachedOverlays.length === 0 && this.detach();
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(k));
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  Wf = (() => {
    let t = class t extends Vd {
      constructor(e, i) {
        super(e),
          (this._ngZone = i),
          (this._keydownListener = (o) => {
            let a = this._attachedOverlays;
            for (let s = a.length - 1; s > -1; s--)
              if (a[s]._keydownEvents.observers.length > 0) {
                let c = a[s]._keydownEvents;
                this._ngZone ? this._ngZone.run(() => c.next(o)) : c.next(o);
                break;
              }
          });
      }
      add(e) {
        super.add(e),
          this._isAttached ||
            (this._ngZone
              ? this._ngZone.runOutsideAngular(() =>
                  this._document.body.addEventListener(
                    "keydown",
                    this._keydownListener,
                  ),
                )
              : this._document.body.addEventListener(
                  "keydown",
                  this._keydownListener,
                ),
            (this._isAttached = !0));
      }
      detach() {
        this._isAttached &&
          (this._document.body.removeEventListener(
            "keydown",
            this._keydownListener,
          ),
          (this._isAttached = !1));
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(k), f(S, 8));
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  Gf = (() => {
    let t = class t extends Vd {
      constructor(e, i, o) {
        super(e),
          (this._platform = i),
          (this._ngZone = o),
          (this._cursorStyleIsSet = !1),
          (this._pointerDownListener = (a) => {
            this._pointerDownEventTarget = Bt(a);
          }),
          (this._clickListener = (a) => {
            let s = Bt(a),
              c =
                a.type === "click" && this._pointerDownEventTarget
                  ? this._pointerDownEventTarget
                  : s;
            this._pointerDownEventTarget = null;
            let l = this._attachedOverlays.slice();
            for (let h = l.length - 1; h > -1; h--) {
              let p = l[h];
              if (
                p._outsidePointerEvents.observers.length < 1 ||
                !p.hasAttached()
              )
                continue;
              if (Od(p.overlayElement, s) || Od(p.overlayElement, c)) break;
              let _ = p._outsidePointerEvents;
              this._ngZone ? this._ngZone.run(() => _.next(a)) : _.next(a);
            }
          });
      }
      add(e) {
        if ((super.add(e), !this._isAttached)) {
          let i = this._document.body;
          this._ngZone
            ? this._ngZone.runOutsideAngular(() => this._addEventListeners(i))
            : this._addEventListeners(i),
            this._platform.IOS &&
              !this._cursorStyleIsSet &&
              ((this._cursorOriginalValue = i.style.cursor),
              (i.style.cursor = "pointer"),
              (this._cursorStyleIsSet = !0)),
            (this._isAttached = !0);
        }
      }
      detach() {
        if (this._isAttached) {
          let e = this._document.body;
          e.removeEventListener("pointerdown", this._pointerDownListener, !0),
            e.removeEventListener("click", this._clickListener, !0),
            e.removeEventListener("auxclick", this._clickListener, !0),
            e.removeEventListener("contextmenu", this._clickListener, !0),
            this._platform.IOS &&
              this._cursorStyleIsSet &&
              ((e.style.cursor = this._cursorOriginalValue),
              (this._cursorStyleIsSet = !1)),
            (this._isAttached = !1);
        }
      }
      _addEventListeners(e) {
        e.addEventListener("pointerdown", this._pointerDownListener, !0),
          e.addEventListener("click", this._clickListener, !0),
          e.addEventListener("auxclick", this._clickListener, !0),
          e.addEventListener("contextmenu", this._clickListener, !0);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(k), f(q), f(S, 8));
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
function Od(n, t) {
  let r = typeof ShadowRoot < "u" && ShadowRoot,
    e = t;
  for (; e; ) {
    if (e === n) return !0;
    e = r && e instanceof ShadowRoot ? e.host : e.parentNode;
  }
  return !1;
}
var qi = (() => {
    let t = class t {
      constructor(e, i) {
        (this._platform = i), (this._document = e);
      }
      ngOnDestroy() {
        this._containerElement?.remove();
      }
      getContainerElement() {
        return (
          this._containerElement || this._createContainer(),
          this._containerElement
        );
      }
      _createContainer() {
        let e = "cdk-overlay-container";
        if (this._platform.isBrowser || Nn()) {
          let o = this._document.querySelectorAll(
            `.${e}[platform="server"], .${e}[platform="test"]`,
          );
          for (let a = 0; a < o.length; a++) o[a].remove();
        }
        let i = this._document.createElement("div");
        i.classList.add(e),
          Nn()
            ? i.setAttribute("platform", "test")
            : this._platform.isBrowser || i.setAttribute("platform", "server"),
          this._document.body.appendChild(i),
          (this._containerElement = i);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(k), f(q));
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  ge = class {
    constructor(t, r, e, i, o, a, s, c, l, h = !1, p) {
      (this._portalOutlet = t),
        (this._host = r),
        (this._pane = e),
        (this._config = i),
        (this._ngZone = o),
        (this._keyboardDispatcher = a),
        (this._document = s),
        (this._location = c),
        (this._outsideClickDispatcher = l),
        (this._animationsDisabled = h),
        (this._injector = p),
        (this._backdropElement = null),
        (this._backdropClick = new w()),
        (this._attachments = new w()),
        (this._detachments = new w()),
        (this._locationChanges = Et.EMPTY),
        (this._backdropClickHandler = (_) => this._backdropClick.next(_)),
        (this._backdropTransitionendHandler = (_) => {
          this._disposeBackdrop(_.target);
        }),
        (this._keydownEvents = new w()),
        (this._outsidePointerEvents = new w()),
        (this._renders = new w()),
        i.scrollStrategy &&
          ((this._scrollStrategy = i.scrollStrategy),
          this._scrollStrategy.attach(this)),
        (this._positionStrategy = i.positionStrategy),
        (this._afterRenderRef = Gt(() =>
          kc(
            () => {
              this._renders.next();
            },
            { injector: this._injector },
          ),
        ));
    }
    get overlayElement() {
      return this._pane;
    }
    get backdropElement() {
      return this._backdropElement;
    }
    get hostElement() {
      return this._host;
    }
    attach(t) {
      !this._host.parentElement &&
        this._previousHostParent &&
        this._previousHostParent.appendChild(this._host);
      let r = this._portalOutlet.attach(t);
      return (
        this._positionStrategy && this._positionStrategy.attach(this),
        this._updateStackingOrder(),
        this._updateElementSize(),
        this._updateElementDirection(),
        this._scrollStrategy && this._scrollStrategy.enable(),
        this._afterNextRenderRef?.destroy(),
        (this._afterNextRenderRef = Dt(
          () => {
            this.hasAttached() && this.updatePosition();
          },
          { injector: this._injector },
        )),
        this._togglePointerEvents(!0),
        this._config.hasBackdrop && this._attachBackdrop(),
        this._config.panelClass &&
          this._toggleClasses(this._pane, this._config.panelClass, !0),
        this._attachments.next(),
        this._keyboardDispatcher.add(this),
        this._config.disposeOnNavigation &&
          (this._locationChanges = this._location.subscribe(() =>
            this.dispose(),
          )),
        this._outsideClickDispatcher.add(this),
        typeof r?.onDestroy == "function" &&
          r.onDestroy(() => {
            this.hasAttached() &&
              this._ngZone.runOutsideAngular(() =>
                Promise.resolve().then(() => this.detach()),
              );
          }),
        r
      );
    }
    detach() {
      if (!this.hasAttached()) return;
      this.detachBackdrop(),
        this._togglePointerEvents(!1),
        this._positionStrategy &&
          this._positionStrategy.detach &&
          this._positionStrategy.detach(),
        this._scrollStrategy && this._scrollStrategy.disable();
      let t = this._portalOutlet.detach();
      return (
        this._detachments.next(),
        this._keyboardDispatcher.remove(this),
        this._detachContentWhenEmpty(),
        this._locationChanges.unsubscribe(),
        this._outsideClickDispatcher.remove(this),
        t
      );
    }
    dispose() {
      let t = this.hasAttached();
      this._positionStrategy && this._positionStrategy.dispose(),
        this._disposeScrollStrategy(),
        this._disposeBackdrop(this._backdropElement),
        this._locationChanges.unsubscribe(),
        this._keyboardDispatcher.remove(this),
        this._portalOutlet.dispose(),
        this._attachments.complete(),
        this._backdropClick.complete(),
        this._keydownEvents.complete(),
        this._outsidePointerEvents.complete(),
        this._outsideClickDispatcher.remove(this),
        this._host?.remove(),
        this._afterNextRenderRef?.destroy(),
        (this._previousHostParent = this._pane = this._host = null),
        t && this._detachments.next(),
        this._detachments.complete(),
        this._afterRenderRef.destroy(),
        this._renders.complete();
    }
    hasAttached() {
      return this._portalOutlet.hasAttached();
    }
    backdropClick() {
      return this._backdropClick;
    }
    attachments() {
      return this._attachments;
    }
    detachments() {
      return this._detachments;
    }
    keydownEvents() {
      return this._keydownEvents;
    }
    outsidePointerEvents() {
      return this._outsidePointerEvents;
    }
    getConfig() {
      return this._config;
    }
    updatePosition() {
      this._positionStrategy && this._positionStrategy.apply();
    }
    updatePositionStrategy(t) {
      t !== this._positionStrategy &&
        (this._positionStrategy && this._positionStrategy.dispose(),
        (this._positionStrategy = t),
        this.hasAttached() && (t.attach(this), this.updatePosition()));
    }
    updateSize(t) {
      (this._config = b(b({}, this._config), t)), this._updateElementSize();
    }
    setDirection(t) {
      (this._config = X(b({}, this._config), { direction: t })),
        this._updateElementDirection();
    }
    addPanelClass(t) {
      this._pane && this._toggleClasses(this._pane, t, !0);
    }
    removePanelClass(t) {
      this._pane && this._toggleClasses(this._pane, t, !1);
    }
    getDirection() {
      let t = this._config.direction;
      return t ? (typeof t == "string" ? t : t.value) : "ltr";
    }
    updateScrollStrategy(t) {
      t !== this._scrollStrategy &&
        (this._disposeScrollStrategy(),
        (this._scrollStrategy = t),
        this.hasAttached() && (t.attach(this), t.enable()));
    }
    _updateElementDirection() {
      this._host.setAttribute("dir", this.getDirection());
    }
    _updateElementSize() {
      if (!this._pane) return;
      let t = this._pane.style;
      (t.width = bt(this._config.width)),
        (t.height = bt(this._config.height)),
        (t.minWidth = bt(this._config.minWidth)),
        (t.minHeight = bt(this._config.minHeight)),
        (t.maxWidth = bt(this._config.maxWidth)),
        (t.maxHeight = bt(this._config.maxHeight));
    }
    _togglePointerEvents(t) {
      this._pane.style.pointerEvents = t ? "" : "none";
    }
    _attachBackdrop() {
      let t = "cdk-overlay-backdrop-showing";
      (this._backdropElement = this._document.createElement("div")),
        this._backdropElement.classList.add("cdk-overlay-backdrop"),
        this._animationsDisabled &&
          this._backdropElement.classList.add(
            "cdk-overlay-backdrop-noop-animation",
          ),
        this._config.backdropClass &&
          this._toggleClasses(
            this._backdropElement,
            this._config.backdropClass,
            !0,
          ),
        this._host.parentElement.insertBefore(
          this._backdropElement,
          this._host,
        ),
        this._backdropElement.addEventListener(
          "click",
          this._backdropClickHandler,
        ),
        !this._animationsDisabled && typeof requestAnimationFrame < "u"
          ? this._ngZone.runOutsideAngular(() => {
              requestAnimationFrame(() => {
                this._backdropElement && this._backdropElement.classList.add(t);
              });
            })
          : this._backdropElement.classList.add(t);
    }
    _updateStackingOrder() {
      this._host.nextSibling && this._host.parentNode.appendChild(this._host);
    }
    detachBackdrop() {
      let t = this._backdropElement;
      if (t) {
        if (this._animationsDisabled) {
          this._disposeBackdrop(t);
          return;
        }
        t.classList.remove("cdk-overlay-backdrop-showing"),
          this._ngZone.runOutsideAngular(() => {
            t.addEventListener(
              "transitionend",
              this._backdropTransitionendHandler,
            );
          }),
          (t.style.pointerEvents = "none"),
          (this._backdropTimeout = this._ngZone.runOutsideAngular(() =>
            setTimeout(() => {
              this._disposeBackdrop(t);
            }, 500),
          ));
      }
    }
    _toggleClasses(t, r, e) {
      let i = Oi(r || []).filter((o) => !!o);
      i.length && (e ? t.classList.add(...i) : t.classList.remove(...i));
    }
    _detachContentWhenEmpty() {
      this._ngZone.runOutsideAngular(() => {
        let t = this._renders
          .pipe(z(At(this._attachments, this._detachments)))
          .subscribe(() => {
            (!this._pane || !this._host || this._pane.children.length === 0) &&
              (this._pane &&
                this._config.panelClass &&
                this._toggleClasses(this._pane, this._config.panelClass, !1),
              this._host &&
                this._host.parentElement &&
                ((this._previousHostParent = this._host.parentElement),
                this._host.remove()),
              t.unsubscribe());
          });
      });
    }
    _disposeScrollStrategy() {
      let t = this._scrollStrategy;
      t && (t.disable(), t.detach && t.detach());
    }
    _disposeBackdrop(t) {
      t &&
        (t.removeEventListener("click", this._backdropClickHandler),
        t.removeEventListener(
          "transitionend",
          this._backdropTransitionendHandler,
        ),
        t.remove(),
        this._backdropElement === t && (this._backdropElement = null)),
        this._backdropTimeout &&
          (clearTimeout(this._backdropTimeout),
          (this._backdropTimeout = void 0));
    }
  },
  Fd = "cdk-overlay-connected-position-bounding-box",
  qf = /([A-Za-z%]+)$/,
  ws = class {
    get positions() {
      return this._preferredPositions;
    }
    constructor(t, r, e, i, o) {
      (this._viewportRuler = r),
        (this._document = e),
        (this._platform = i),
        (this._overlayContainer = o),
        (this._lastBoundingBoxSize = { width: 0, height: 0 }),
        (this._isPushed = !1),
        (this._canPush = !0),
        (this._growAfterOpen = !1),
        (this._hasFlexibleDimensions = !0),
        (this._positionLocked = !1),
        (this._viewportMargin = 0),
        (this._scrollables = []),
        (this._preferredPositions = []),
        (this._positionChanges = new w()),
        (this._resizeSubscription = Et.EMPTY),
        (this._offsetX = 0),
        (this._offsetY = 0),
        (this._appliedPanelClasses = []),
        (this.positionChanges = this._positionChanges),
        this.setOrigin(t);
    }
    attach(t) {
      this._overlayRef && this._overlayRef,
        this._validatePositions(),
        t.hostElement.classList.add(Fd),
        (this._overlayRef = t),
        (this._boundingBox = t.hostElement),
        (this._pane = t.overlayElement),
        (this._isDisposed = !1),
        (this._isInitialRender = !0),
        (this._lastPosition = null),
        this._resizeSubscription.unsubscribe(),
        (this._resizeSubscription = this._viewportRuler
          .change()
          .subscribe(() => {
            (this._isInitialRender = !0), this.apply();
          }));
    }
    apply() {
      if (this._isDisposed || !this._platform.isBrowser) return;
      if (
        !this._isInitialRender &&
        this._positionLocked &&
        this._lastPosition
      ) {
        this.reapplyLastPosition();
        return;
      }
      this._clearPanelClasses(),
        this._resetOverlayElementStyles(),
        this._resetBoundingBoxStyles(),
        (this._viewportRect = this._getNarrowedViewportRect()),
        (this._originRect = this._getOriginRect()),
        (this._overlayRect = this._pane.getBoundingClientRect()),
        (this._containerRect = this._overlayContainer
          .getContainerElement()
          .getBoundingClientRect());
      let t = this._originRect,
        r = this._overlayRect,
        e = this._viewportRect,
        i = this._containerRect,
        o = [],
        a;
      for (let s of this._preferredPositions) {
        let c = this._getOriginPoint(t, i, s),
          l = this._getOverlayPoint(c, r, s),
          h = this._getOverlayFit(l, r, e, s);
        if (h.isCompletelyWithinViewport) {
          (this._isPushed = !1), this._applyPosition(s, c);
          return;
        }
        if (this._canFitWithFlexibleDimensions(h, l, e)) {
          o.push({
            position: s,
            origin: c,
            overlayRect: r,
            boundingBoxRect: this._calculateBoundingBoxRect(c, s),
          });
          continue;
        }
        (!a || a.overlayFit.visibleArea < h.visibleArea) &&
          (a = {
            overlayFit: h,
            overlayPoint: l,
            originPoint: c,
            position: s,
            overlayRect: r,
          });
      }
      if (o.length) {
        let s = null,
          c = -1;
        for (let l of o) {
          let h =
            l.boundingBoxRect.width *
            l.boundingBoxRect.height *
            (l.position.weight || 1);
          h > c && ((c = h), (s = l));
        }
        (this._isPushed = !1), this._applyPosition(s.position, s.origin);
        return;
      }
      if (this._canPush) {
        (this._isPushed = !0), this._applyPosition(a.position, a.originPoint);
        return;
      }
      this._applyPosition(a.position, a.originPoint);
    }
    detach() {
      this._clearPanelClasses(),
        (this._lastPosition = null),
        (this._previousPushAmount = null),
        this._resizeSubscription.unsubscribe();
    }
    dispose() {
      this._isDisposed ||
        (this._boundingBox &&
          ai(this._boundingBox.style, {
            top: "",
            left: "",
            right: "",
            bottom: "",
            height: "",
            width: "",
            alignItems: "",
            justifyContent: "",
          }),
        this._pane && this._resetOverlayElementStyles(),
        this._overlayRef && this._overlayRef.hostElement.classList.remove(Fd),
        this.detach(),
        this._positionChanges.complete(),
        (this._overlayRef = this._boundingBox = null),
        (this._isDisposed = !0));
    }
    reapplyLastPosition() {
      if (this._isDisposed || !this._platform.isBrowser) return;
      let t = this._lastPosition;
      if (t) {
        (this._originRect = this._getOriginRect()),
          (this._overlayRect = this._pane.getBoundingClientRect()),
          (this._viewportRect = this._getNarrowedViewportRect()),
          (this._containerRect = this._overlayContainer
            .getContainerElement()
            .getBoundingClientRect());
        let r = this._getOriginPoint(this._originRect, this._containerRect, t);
        this._applyPosition(t, r);
      } else this.apply();
    }
    withScrollableContainers(t) {
      return (this._scrollables = t), this;
    }
    withPositions(t) {
      return (
        (this._preferredPositions = t),
        t.indexOf(this._lastPosition) === -1 && (this._lastPosition = null),
        this._validatePositions(),
        this
      );
    }
    withViewportMargin(t) {
      return (this._viewportMargin = t), this;
    }
    withFlexibleDimensions(t = !0) {
      return (this._hasFlexibleDimensions = t), this;
    }
    withGrowAfterOpen(t = !0) {
      return (this._growAfterOpen = t), this;
    }
    withPush(t = !0) {
      return (this._canPush = t), this;
    }
    withLockedPosition(t = !0) {
      return (this._positionLocked = t), this;
    }
    setOrigin(t) {
      return (this._origin = t), this;
    }
    withDefaultOffsetX(t) {
      return (this._offsetX = t), this;
    }
    withDefaultOffsetY(t) {
      return (this._offsetY = t), this;
    }
    withTransformOriginOn(t) {
      return (this._transformOriginSelector = t), this;
    }
    _getOriginPoint(t, r, e) {
      let i;
      if (e.originX == "center") i = t.left + t.width / 2;
      else {
        let a = this._isRtl() ? t.right : t.left,
          s = this._isRtl() ? t.left : t.right;
        i = e.originX == "start" ? a : s;
      }
      r.left < 0 && (i -= r.left);
      let o;
      return (
        e.originY == "center"
          ? (o = t.top + t.height / 2)
          : (o = e.originY == "top" ? t.top : t.bottom),
        r.top < 0 && (o -= r.top),
        { x: i, y: o }
      );
    }
    _getOverlayPoint(t, r, e) {
      let i;
      e.overlayX == "center"
        ? (i = -r.width / 2)
        : e.overlayX === "start"
          ? (i = this._isRtl() ? -r.width : 0)
          : (i = this._isRtl() ? 0 : -r.width);
      let o;
      return (
        e.overlayY == "center"
          ? (o = -r.height / 2)
          : (o = e.overlayY == "top" ? 0 : -r.height),
        { x: t.x + i, y: t.y + o }
      );
    }
    _getOverlayFit(t, r, e, i) {
      let o = Nd(r),
        { x: a, y: s } = t,
        c = this._getOffset(i, "x"),
        l = this._getOffset(i, "y");
      c && (a += c), l && (s += l);
      let h = 0 - a,
        p = a + o.width - e.width,
        _ = 0 - s,
        A = s + o.height - e.height,
        W = this._subtractOverflows(o.width, h, p),
        rt = this._subtractOverflows(o.height, _, A),
        _t = W * rt;
      return {
        visibleArea: _t,
        isCompletelyWithinViewport: o.width * o.height === _t,
        fitsInViewportVertically: rt === o.height,
        fitsInViewportHorizontally: W == o.width,
      };
    }
    _canFitWithFlexibleDimensions(t, r, e) {
      if (this._hasFlexibleDimensions) {
        let i = e.bottom - r.y,
          o = e.right - r.x,
          a = Pd(this._overlayRef.getConfig().minHeight),
          s = Pd(this._overlayRef.getConfig().minWidth),
          c = t.fitsInViewportVertically || (a != null && a <= i),
          l = t.fitsInViewportHorizontally || (s != null && s <= o);
        return c && l;
      }
      return !1;
    }
    _pushOverlayOnScreen(t, r, e) {
      if (this._previousPushAmount && this._positionLocked)
        return {
          x: t.x + this._previousPushAmount.x,
          y: t.y + this._previousPushAmount.y,
        };
      let i = Nd(r),
        o = this._viewportRect,
        a = Math.max(t.x + i.width - o.width, 0),
        s = Math.max(t.y + i.height - o.height, 0),
        c = Math.max(o.top - e.top - t.y, 0),
        l = Math.max(o.left - e.left - t.x, 0),
        h = 0,
        p = 0;
      return (
        i.width <= o.width
          ? (h = l || -a)
          : (h = t.x < this._viewportMargin ? o.left - e.left - t.x : 0),
        i.height <= o.height
          ? (p = c || -s)
          : (p = t.y < this._viewportMargin ? o.top - e.top - t.y : 0),
        (this._previousPushAmount = { x: h, y: p }),
        { x: t.x + h, y: t.y + p }
      );
    }
    _applyPosition(t, r) {
      if (
        (this._setTransformOrigin(t),
        this._setOverlayElementStyles(r, t),
        this._setBoundingBoxStyles(r, t),
        t.panelClass && this._addPanelClasses(t.panelClass),
        this._positionChanges.observers.length)
      ) {
        let e = this._getScrollVisibility();
        if (
          t !== this._lastPosition ||
          !this._lastScrollVisibility ||
          !Qf(this._lastScrollVisibility, e)
        ) {
          let i = new ys(t, e);
          this._positionChanges.next(i);
        }
        this._lastScrollVisibility = e;
      }
      (this._lastPosition = t), (this._isInitialRender = !1);
    }
    _setTransformOrigin(t) {
      if (!this._transformOriginSelector) return;
      let r = this._boundingBox.querySelectorAll(this._transformOriginSelector),
        e,
        i = t.overlayY;
      t.overlayX === "center"
        ? (e = "center")
        : this._isRtl()
          ? (e = t.overlayX === "start" ? "right" : "left")
          : (e = t.overlayX === "start" ? "left" : "right");
      for (let o = 0; o < r.length; o++)
        r[o].style.transformOrigin = `${e} ${i}`;
    }
    _calculateBoundingBoxRect(t, r) {
      let e = this._viewportRect,
        i = this._isRtl(),
        o,
        a,
        s;
      if (r.overlayY === "top")
        (a = t.y), (o = e.height - a + this._viewportMargin);
      else if (r.overlayY === "bottom")
        (s = e.height - t.y + this._viewportMargin * 2),
          (o = e.height - s + this._viewportMargin);
      else {
        let A = Math.min(e.bottom - t.y + e.top, t.y),
          W = this._lastBoundingBoxSize.height;
        (o = A * 2),
          (a = t.y - A),
          o > W &&
            !this._isInitialRender &&
            !this._growAfterOpen &&
            (a = t.y - W / 2);
      }
      let c = (r.overlayX === "start" && !i) || (r.overlayX === "end" && i),
        l = (r.overlayX === "end" && !i) || (r.overlayX === "start" && i),
        h,
        p,
        _;
      if (l)
        (_ = e.width - t.x + this._viewportMargin * 2),
          (h = t.x - this._viewportMargin);
      else if (c) (p = t.x), (h = e.right - t.x);
      else {
        let A = Math.min(e.right - t.x + e.left, t.x),
          W = this._lastBoundingBoxSize.width;
        (h = A * 2),
          (p = t.x - A),
          h > W &&
            !this._isInitialRender &&
            !this._growAfterOpen &&
            (p = t.x - W / 2);
      }
      return { top: a, left: p, bottom: s, right: _, width: h, height: o };
    }
    _setBoundingBoxStyles(t, r) {
      let e = this._calculateBoundingBoxRect(t, r);
      !this._isInitialRender &&
        !this._growAfterOpen &&
        ((e.height = Math.min(e.height, this._lastBoundingBoxSize.height)),
        (e.width = Math.min(e.width, this._lastBoundingBoxSize.width)));
      let i = {};
      if (this._hasExactPosition())
        (i.top = i.left = "0"),
          (i.bottom = i.right = i.maxHeight = i.maxWidth = ""),
          (i.width = i.height = "100%");
      else {
        let o = this._overlayRef.getConfig().maxHeight,
          a = this._overlayRef.getConfig().maxWidth;
        (i.height = bt(e.height)),
          (i.top = bt(e.top)),
          (i.bottom = bt(e.bottom)),
          (i.width = bt(e.width)),
          (i.left = bt(e.left)),
          (i.right = bt(e.right)),
          r.overlayX === "center"
            ? (i.alignItems = "center")
            : (i.alignItems = r.overlayX === "end" ? "flex-end" : "flex-start"),
          r.overlayY === "center"
            ? (i.justifyContent = "center")
            : (i.justifyContent =
                r.overlayY === "bottom" ? "flex-end" : "flex-start"),
          o && (i.maxHeight = bt(o)),
          a && (i.maxWidth = bt(a));
      }
      (this._lastBoundingBoxSize = e), ai(this._boundingBox.style, i);
    }
    _resetBoundingBoxStyles() {
      ai(this._boundingBox.style, {
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        height: "",
        width: "",
        alignItems: "",
        justifyContent: "",
      });
    }
    _resetOverlayElementStyles() {
      ai(this._pane.style, {
        top: "",
        left: "",
        bottom: "",
        right: "",
        position: "",
        transform: "",
      });
    }
    _setOverlayElementStyles(t, r) {
      let e = {},
        i = this._hasExactPosition(),
        o = this._hasFlexibleDimensions,
        a = this._overlayRef.getConfig();
      if (i) {
        let h = this._viewportRuler.getViewportScrollPosition();
        ai(e, this._getExactOverlayY(r, t, h)),
          ai(e, this._getExactOverlayX(r, t, h));
      } else e.position = "static";
      let s = "",
        c = this._getOffset(r, "x"),
        l = this._getOffset(r, "y");
      c && (s += `translateX(${c}px) `),
        l && (s += `translateY(${l}px)`),
        (e.transform = s.trim()),
        a.maxHeight &&
          (i ? (e.maxHeight = bt(a.maxHeight)) : o && (e.maxHeight = "")),
        a.maxWidth &&
          (i ? (e.maxWidth = bt(a.maxWidth)) : o && (e.maxWidth = "")),
        ai(this._pane.style, e);
    }
    _getExactOverlayY(t, r, e) {
      let i = { top: "", bottom: "" },
        o = this._getOverlayPoint(r, this._overlayRect, t);
      if (
        (this._isPushed &&
          (o = this._pushOverlayOnScreen(o, this._overlayRect, e)),
        t.overlayY === "bottom")
      ) {
        let a = this._document.documentElement.clientHeight;
        i.bottom = `${a - (o.y + this._overlayRect.height)}px`;
      } else i.top = bt(o.y);
      return i;
    }
    _getExactOverlayX(t, r, e) {
      let i = { left: "", right: "" },
        o = this._getOverlayPoint(r, this._overlayRect, t);
      this._isPushed &&
        (o = this._pushOverlayOnScreen(o, this._overlayRect, e));
      let a;
      if (
        (this._isRtl()
          ? (a = t.overlayX === "end" ? "left" : "right")
          : (a = t.overlayX === "end" ? "right" : "left"),
        a === "right")
      ) {
        let s = this._document.documentElement.clientWidth;
        i.right = `${s - (o.x + this._overlayRect.width)}px`;
      } else i.left = bt(o.x);
      return i;
    }
    _getScrollVisibility() {
      let t = this._getOriginRect(),
        r = this._pane.getBoundingClientRect(),
        e = this._scrollables.map((i) =>
          i.getElementRef().nativeElement.getBoundingClientRect(),
        );
      return {
        isOriginClipped: Md(t, e),
        isOriginOutsideView: vs(t, e),
        isOverlayClipped: Md(r, e),
        isOverlayOutsideView: vs(r, e),
      };
    }
    _subtractOverflows(t, ...r) {
      return r.reduce((e, i) => e - Math.max(i, 0), t);
    }
    _getNarrowedViewportRect() {
      let t = this._document.documentElement.clientWidth,
        r = this._document.documentElement.clientHeight,
        e = this._viewportRuler.getViewportScrollPosition();
      return {
        top: e.top + this._viewportMargin,
        left: e.left + this._viewportMargin,
        right: e.left + t - this._viewportMargin,
        bottom: e.top + r - this._viewportMargin,
        width: t - 2 * this._viewportMargin,
        height: r - 2 * this._viewportMargin,
      };
    }
    _isRtl() {
      return this._overlayRef.getDirection() === "rtl";
    }
    _hasExactPosition() {
      return !this._hasFlexibleDimensions || this._isPushed;
    }
    _getOffset(t, r) {
      return r === "x"
        ? t.offsetX == null
          ? this._offsetX
          : t.offsetX
        : t.offsetY == null
          ? this._offsetY
          : t.offsetY;
    }
    _validatePositions() {}
    _addPanelClasses(t) {
      this._pane &&
        Oi(t).forEach((r) => {
          r !== "" &&
            this._appliedPanelClasses.indexOf(r) === -1 &&
            (this._appliedPanelClasses.push(r), this._pane.classList.add(r));
        });
    }
    _clearPanelClasses() {
      this._pane &&
        (this._appliedPanelClasses.forEach((t) => {
          this._pane.classList.remove(t);
        }),
        (this._appliedPanelClasses = []));
    }
    _getOriginRect() {
      let t = this._origin;
      if (t instanceof E) return t.nativeElement.getBoundingClientRect();
      if (t instanceof Element) return t.getBoundingClientRect();
      let r = t.width || 0,
        e = t.height || 0;
      return {
        top: t.y,
        bottom: t.y + e,
        left: t.x,
        right: t.x + r,
        height: e,
        width: r,
      };
    }
  };
function ai(n, t) {
  for (let r in t) t.hasOwnProperty(r) && (n[r] = t[r]);
  return n;
}
function Pd(n) {
  if (typeof n != "number" && n != null) {
    let [t, r] = n.split(qf);
    return !r || r === "px" ? parseFloat(t) : null;
  }
  return n || null;
}
function Nd(n) {
  return {
    top: Math.floor(n.top),
    right: Math.floor(n.right),
    bottom: Math.floor(n.bottom),
    left: Math.floor(n.left),
    width: Math.floor(n.width),
    height: Math.floor(n.height),
  };
}
function Qf(n, t) {
  return n === t
    ? !0
    : n.isOriginClipped === t.isOriginClipped &&
        n.isOriginOutsideView === t.isOriginOutsideView &&
        n.isOverlayClipped === t.isOverlayClipped &&
        n.isOverlayOutsideView === t.isOverlayOutsideView;
}
var Ld = "cdk-global-overlay-wrapper",
  xs = class {
    constructor() {
      (this._cssPosition = "static"),
        (this._topOffset = ""),
        (this._bottomOffset = ""),
        (this._alignItems = ""),
        (this._xPosition = ""),
        (this._xOffset = ""),
        (this._width = ""),
        (this._height = ""),
        (this._isDisposed = !1);
    }
    attach(t) {
      let r = t.getConfig();
      (this._overlayRef = t),
        this._width && !r.width && t.updateSize({ width: this._width }),
        this._height && !r.height && t.updateSize({ height: this._height }),
        t.hostElement.classList.add(Ld),
        (this._isDisposed = !1);
    }
    top(t = "") {
      return (
        (this._bottomOffset = ""),
        (this._topOffset = t),
        (this._alignItems = "flex-start"),
        this
      );
    }
    left(t = "") {
      return (this._xOffset = t), (this._xPosition = "left"), this;
    }
    bottom(t = "") {
      return (
        (this._topOffset = ""),
        (this._bottomOffset = t),
        (this._alignItems = "flex-end"),
        this
      );
    }
    right(t = "") {
      return (this._xOffset = t), (this._xPosition = "right"), this;
    }
    start(t = "") {
      return (this._xOffset = t), (this._xPosition = "start"), this;
    }
    end(t = "") {
      return (this._xOffset = t), (this._xPosition = "end"), this;
    }
    width(t = "") {
      return (
        this._overlayRef
          ? this._overlayRef.updateSize({ width: t })
          : (this._width = t),
        this
      );
    }
    height(t = "") {
      return (
        this._overlayRef
          ? this._overlayRef.updateSize({ height: t })
          : (this._height = t),
        this
      );
    }
    centerHorizontally(t = "") {
      return this.left(t), (this._xPosition = "center"), this;
    }
    centerVertically(t = "") {
      return this.top(t), (this._alignItems = "center"), this;
    }
    apply() {
      if (!this._overlayRef || !this._overlayRef.hasAttached()) return;
      let t = this._overlayRef.overlayElement.style,
        r = this._overlayRef.hostElement.style,
        e = this._overlayRef.getConfig(),
        { width: i, height: o, maxWidth: a, maxHeight: s } = e,
        c =
          (i === "100%" || i === "100vw") &&
          (!a || a === "100%" || a === "100vw"),
        l =
          (o === "100%" || o === "100vh") &&
          (!s || s === "100%" || s === "100vh"),
        h = this._xPosition,
        p = this._xOffset,
        _ = this._overlayRef.getConfig().direction === "rtl",
        A = "",
        W = "",
        rt = "";
      c
        ? (rt = "flex-start")
        : h === "center"
          ? ((rt = "center"), _ ? (W = p) : (A = p))
          : _
            ? h === "left" || h === "end"
              ? ((rt = "flex-end"), (A = p))
              : (h === "right" || h === "start") &&
                ((rt = "flex-start"), (W = p))
            : h === "left" || h === "start"
              ? ((rt = "flex-start"), (A = p))
              : (h === "right" || h === "end") && ((rt = "flex-end"), (W = p)),
        (t.position = this._cssPosition),
        (t.marginLeft = c ? "0" : A),
        (t.marginTop = l ? "0" : this._topOffset),
        (t.marginBottom = this._bottomOffset),
        (t.marginRight = c ? "0" : W),
        (r.justifyContent = rt),
        (r.alignItems = l ? "flex-start" : this._alignItems);
    }
    dispose() {
      if (this._isDisposed || !this._overlayRef) return;
      let t = this._overlayRef.overlayElement.style,
        r = this._overlayRef.hostElement,
        e = r.style;
      r.classList.remove(Ld),
        (e.justifyContent =
          e.alignItems =
          t.marginTop =
          t.marginBottom =
          t.marginLeft =
          t.marginRight =
          t.position =
            ""),
        (this._overlayRef = null),
        (this._isDisposed = !0);
    }
  },
  Yf = (() => {
    let t = class t {
      constructor(e, i, o, a) {
        (this._viewportRuler = e),
          (this._document = i),
          (this._platform = o),
          (this._overlayContainer = a);
      }
      global() {
        return new xs();
      }
      flexibleConnectedTo(e) {
        return new ws(
          e,
          this._viewportRuler,
          this._document,
          this._platform,
          this._overlayContainer,
        );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(Fe), f(k), f(q), f(qi));
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  Zf = 0,
  Pe = (() => {
    let t = class t {
      constructor(e, i, o, a, s, c, l, h, p, _, A, W) {
        (this.scrollStrategies = e),
          (this._overlayContainer = i),
          (this._componentFactoryResolver = o),
          (this._positionBuilder = a),
          (this._keyboardDispatcher = s),
          (this._injector = c),
          (this._ngZone = l),
          (this._document = h),
          (this._directionality = p),
          (this._location = _),
          (this._outsideClickDispatcher = A),
          (this._animationsModuleType = W);
      }
      create(e) {
        let i = this._createHostElement(),
          o = this._createPaneElement(i),
          a = this._createPortalOutlet(o),
          s = new zn(e);
        return (
          (s.direction = s.direction || this._directionality.value),
          new ge(
            a,
            i,
            o,
            s,
            this._ngZone,
            this._keyboardDispatcher,
            this._document,
            this._location,
            this._outsideClickDispatcher,
            this._animationsModuleType === "NoopAnimations",
            this._injector.get(Ie),
          )
        );
      }
      position() {
        return this._positionBuilder;
      }
      _createPaneElement(e) {
        let i = this._document.createElement("div");
        return (
          (i.id = `cdk-overlay-${Zf++}`),
          i.classList.add("cdk-overlay-pane"),
          e.appendChild(i),
          i
        );
      }
      _createHostElement() {
        let e = this._document.createElement("div");
        return this._overlayContainer.getContainerElement().appendChild(e), e;
      }
      _createPortalOutlet(e) {
        return (
          this._appRef || (this._appRef = this._injector.get(an)),
          new oo(
            e,
            this._componentFactoryResolver,
            this._appRef,
            this._injector,
            this._document,
          )
        );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(
        f($f),
        f(qi),
        f(bi),
        f(Yf),
        f(Wf),
        f(at),
        f(S),
        f(k),
        f(wt),
        f(se),
        f(Gf),
        f(mt, 8),
      );
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
function Xf(n, t) {}
var si = class {
  constructor() {
    (this.role = "dialog"),
      (this.panelClass = ""),
      (this.hasBackdrop = !0),
      (this.backdropClass = ""),
      (this.disableClose = !1),
      (this.width = ""),
      (this.height = ""),
      (this.data = null),
      (this.ariaDescribedBy = null),
      (this.ariaLabelledBy = null),
      (this.ariaLabel = null),
      (this.ariaModal = !0),
      (this.autoFocus = "first-tabbable"),
      (this.restoreFocus = !0),
      (this.closeOnNavigation = !0),
      (this.closeOnDestroy = !0),
      (this.closeOnOverlayDetachments = !0);
  }
};
var Is = (() => {
    let t = class t extends Gi {
      constructor(e, i, o, a, s, c, l, h) {
        super(),
          (this._elementRef = e),
          (this._focusTrapFactory = i),
          (this._config = a),
          (this._interactivityChecker = s),
          (this._ngZone = c),
          (this._overlayRef = l),
          (this._focusMonitor = h),
          (this._platform = v(q)),
          (this._focusTrap = null),
          (this._elementFocusedBeforeDialogWasOpened = null),
          (this._closeInteractionType = null),
          (this._ariaLabelledByQueue = []),
          (this._changeDetectorRef = v(ot)),
          (this._injector = v(at)),
          (this._isDestroyed = !1),
          (this.attachDomPortal = (p) => {
            this._portalOutlet.hasAttached();
            let _ = this._portalOutlet.attachDomPortal(p);
            return this._contentAttached(), _;
          }),
          (this._document = o),
          this._config.ariaLabelledBy &&
            this._ariaLabelledByQueue.push(this._config.ariaLabelledBy);
      }
      _addAriaLabelledBy(e) {
        this._ariaLabelledByQueue.push(e),
          this._changeDetectorRef.markForCheck();
      }
      _removeAriaLabelledBy(e) {
        let i = this._ariaLabelledByQueue.indexOf(e);
        i > -1 &&
          (this._ariaLabelledByQueue.splice(i, 1),
          this._changeDetectorRef.markForCheck());
      }
      _contentAttached() {
        this._initializeFocusTrap(),
          this._handleBackdropClicks(),
          this._captureInitialFocus();
      }
      _captureInitialFocus() {
        this._trapFocus();
      }
      ngOnDestroy() {
        (this._isDestroyed = !0), this._restoreFocus();
      }
      attachComponentPortal(e) {
        this._portalOutlet.hasAttached();
        let i = this._portalOutlet.attachComponentPortal(e);
        return this._contentAttached(), i;
      }
      attachTemplatePortal(e) {
        this._portalOutlet.hasAttached();
        let i = this._portalOutlet.attachTemplatePortal(e);
        return this._contentAttached(), i;
      }
      _recaptureFocus() {
        this._containsFocus() || this._trapFocus();
      }
      _forceFocus(e, i) {
        this._interactivityChecker.isFocusable(e) ||
          ((e.tabIndex = -1),
          this._ngZone.runOutsideAngular(() => {
            let o = () => {
              e.removeEventListener("blur", o),
                e.removeEventListener("mousedown", o),
                e.removeAttribute("tabindex");
            };
            e.addEventListener("blur", o), e.addEventListener("mousedown", o);
          })),
          e.focus(i);
      }
      _focusByCssSelector(e, i) {
        let o = this._elementRef.nativeElement.querySelector(e);
        o && this._forceFocus(o, i);
      }
      _trapFocus() {
        this._isDestroyed ||
          Dt(
            () => {
              let e = this._elementRef.nativeElement;
              switch (this._config.autoFocus) {
                case !1:
                case "dialog":
                  this._containsFocus() || e.focus();
                  break;
                case !0:
                case "first-tabbable":
                  this._focusTrap?.focusInitialElement() ||
                    this._focusDialogContainer();
                  break;
                case "first-heading":
                  this._focusByCssSelector(
                    'h1, h2, h3, h4, h5, h6, [role="heading"]',
                  );
                  break;
                default:
                  this._focusByCssSelector(this._config.autoFocus);
                  break;
              }
            },
            { injector: this._injector },
          );
      }
      _restoreFocus() {
        let e = this._config.restoreFocus,
          i = null;
        if (
          (typeof e == "string"
            ? (i = this._document.querySelector(e))
            : typeof e == "boolean"
              ? (i = e ? this._elementFocusedBeforeDialogWasOpened : null)
              : e && (i = e),
          this._config.restoreFocus && i && typeof i.focus == "function")
        ) {
          let o = Pn(),
            a = this._elementRef.nativeElement;
          (!o || o === this._document.body || o === a || a.contains(o)) &&
            (this._focusMonitor
              ? (this._focusMonitor.focusVia(i, this._closeInteractionType),
                (this._closeInteractionType = null))
              : i.focus());
        }
        this._focusTrap && this._focusTrap.destroy();
      }
      _focusDialogContainer() {
        this._elementRef.nativeElement.focus &&
          this._elementRef.nativeElement.focus();
      }
      _containsFocus() {
        let e = this._elementRef.nativeElement,
          i = Pn();
        return e === i || e.contains(i);
      }
      _initializeFocusTrap() {
        this._platform.isBrowser &&
          ((this._focusTrap = this._focusTrapFactory.create(
            this._elementRef.nativeElement,
          )),
          this._document && (this._elementFocusedBeforeDialogWasOpened = Pn()));
      }
      _handleBackdropClicks() {
        this._overlayRef.backdropClick().subscribe(() => {
          this._config.disableClose && this._recaptureFocus();
        });
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(
        d(E),
        d(Ni),
        d(k, 8),
        d(si),
        d(oi),
        d(S),
        d(ge),
        d(Ht),
      );
    }),
      (t.ɵcmp = I({
        type: t,
        selectors: [["cdk-dialog-container"]],
        viewQuery: function (i, o) {
          if ((i & 1 && pt(fe, 7), i & 2)) {
            let a;
            P((a = N())) && (o._portalOutlet = a.first);
          }
        },
        hostAttrs: ["tabindex", "-1", 1, "cdk-dialog-container"],
        hostVars: 6,
        hostBindings: function (i, o) {
          i & 2 &&
            G("id", o._config.id || null)("role", o._config.role)(
              "aria-modal",
              o._config.ariaModal,
            )(
              "aria-labelledby",
              o._config.ariaLabel ? null : o._ariaLabelledByQueue[0],
            )("aria-label", o._config.ariaLabel)(
              "aria-describedby",
              o._config.ariaDescribedBy || null,
            );
        },
        standalone: !0,
        features: [it, U],
        decls: 1,
        vars: 0,
        consts: [["cdkPortalOutlet", ""]],
        template: function (i, o) {
          i & 1 && K(0, Xf, 0, 0, "ng-template", 0);
        },
        dependencies: [fe],
        styles: [
          ".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}",
        ],
        encapsulation: 2,
      }));
    let n = t;
    return n;
  })(),
  Un = class {
    constructor(t, r) {
      (this.overlayRef = t),
        (this.config = r),
        (this.closed = new w()),
        (this.disableClose = r.disableClose),
        (this.backdropClick = t.backdropClick()),
        (this.keydownEvents = t.keydownEvents()),
        (this.outsidePointerEvents = t.outsidePointerEvents()),
        (this.id = r.id),
        this.keydownEvents.subscribe((e) => {
          e.keyCode === 27 &&
            !this.disableClose &&
            !zt(e) &&
            (e.preventDefault(),
            this.close(void 0, { focusOrigin: "keyboard" }));
        }),
        this.backdropClick.subscribe(() => {
          this.disableClose || this.close(void 0, { focusOrigin: "mouse" });
        }),
        (this._detachSubscription = t.detachments().subscribe(() => {
          r.closeOnOverlayDetachments !== !1 && this.close();
        }));
    }
    close(t, r) {
      if (this.containerInstance) {
        let e = this.closed;
        (this.containerInstance._closeInteractionType =
          r?.focusOrigin || "program"),
          this._detachSubscription.unsubscribe(),
          this.overlayRef.dispose(),
          e.next(t),
          e.complete(),
          (this.componentInstance = this.containerInstance = null);
      }
    }
    updatePosition() {
      return this.overlayRef.updatePosition(), this;
    }
    updateSize(t = "", r = "") {
      return this.overlayRef.updateSize({ width: t, height: r }), this;
    }
    addPanelClass(t) {
      return this.overlayRef.addPanelClass(t), this;
    }
    removePanelClass(t) {
      return this.overlayRef.removePanelClass(t), this;
    }
  },
  Jf = new C("DialogScrollStrategy", {
    providedIn: "root",
    factory: () => {
      let n = v(Pe);
      return () => n.scrollStrategies.block();
    },
  }),
  tg = new C("DialogData"),
  eg = new C("DefaultDialogConfig");
var ig = 0,
  zd = (() => {
    let t = class t {
      get openDialogs() {
        return this._parentDialog
          ? this._parentDialog.openDialogs
          : this._openDialogsAtThisLevel;
      }
      get afterOpened() {
        return this._parentDialog
          ? this._parentDialog.afterOpened
          : this._afterOpenedAtThisLevel;
      }
      constructor(e, i, o, a, s, c) {
        (this._overlay = e),
          (this._injector = i),
          (this._defaultOptions = o),
          (this._parentDialog = a),
          (this._overlayContainer = s),
          (this._openDialogsAtThisLevel = []),
          (this._afterAllClosedAtThisLevel = new w()),
          (this._afterOpenedAtThisLevel = new w()),
          (this._ariaHiddenElements = new Map()),
          (this.afterAllClosed = ze(() =>
            this.openDialogs.length
              ? this._getAfterAllClosed()
              : this._getAfterAllClosed().pipe(vt(void 0)),
          )),
          (this._scrollStrategy = c);
      }
      open(e, i) {
        let o = this._defaultOptions || new si();
        (i = b(b({}, o), i)),
          (i.id = i.id || `cdk-dialog-${ig++}`),
          i.id && this.getDialogById(i.id);
        let a = this._getOverlayConfig(i),
          s = this._overlay.create(a),
          c = new Un(s, i),
          l = this._attachContainer(s, c, i);
        return (
          (c.containerInstance = l),
          this._attachDialogContent(e, c, l, i),
          this.openDialogs.length ||
            this._hideNonDialogContentFromAssistiveTechnology(),
          this.openDialogs.push(c),
          c.closed.subscribe(() => this._removeOpenDialog(c, !0)),
          this.afterOpened.next(c),
          c
        );
      }
      closeAll() {
        Cs(this.openDialogs, (e) => e.close());
      }
      getDialogById(e) {
        return this.openDialogs.find((i) => i.id === e);
      }
      ngOnDestroy() {
        Cs(this._openDialogsAtThisLevel, (e) => {
          e.config.closeOnDestroy === !1 && this._removeOpenDialog(e, !1);
        }),
          Cs(this._openDialogsAtThisLevel, (e) => e.close()),
          this._afterAllClosedAtThisLevel.complete(),
          this._afterOpenedAtThisLevel.complete(),
          (this._openDialogsAtThisLevel = []);
      }
      _getOverlayConfig(e) {
        let i = new zn({
          positionStrategy:
            e.positionStrategy ||
            this._overlay
              .position()
              .global()
              .centerHorizontally()
              .centerVertically(),
          scrollStrategy: e.scrollStrategy || this._scrollStrategy(),
          panelClass: e.panelClass,
          hasBackdrop: e.hasBackdrop,
          direction: e.direction,
          minWidth: e.minWidth,
          minHeight: e.minHeight,
          maxWidth: e.maxWidth,
          maxHeight: e.maxHeight,
          width: e.width,
          height: e.height,
          disposeOnNavigation: e.closeOnNavigation,
        });
        return e.backdropClass && (i.backdropClass = e.backdropClass), i;
      }
      _attachContainer(e, i, o) {
        let a = o.injector || o.viewContainerRef?.injector,
          s = [
            { provide: si, useValue: o },
            { provide: Un, useValue: i },
            { provide: ge, useValue: e },
          ],
          c;
        o.container
          ? typeof o.container == "function"
            ? (c = o.container)
            : ((c = o.container.type), s.push(...o.container.providers(o)))
          : (c = Is);
        let l = new Wi(
          c,
          o.viewContainerRef,
          at.create({ parent: a || this._injector, providers: s }),
          o.componentFactoryResolver,
        );
        return e.attach(l).instance;
      }
      _attachDialogContent(e, i, o, a) {
        if (e instanceof Lt) {
          let s = this._createInjector(a, i, o, void 0),
            c = { $implicit: a.data, dialogRef: i };
          a.templateContext &&
            (c = b(
              b({}, c),
              typeof a.templateContext == "function"
                ? a.templateContext()
                : a.templateContext,
            )),
            o.attachTemplatePortal(new pe(e, null, c, s));
        } else {
          let s = this._createInjector(a, i, o, this._injector),
            c = o.attachComponentPortal(
              new Wi(e, a.viewContainerRef, s, a.componentFactoryResolver),
            );
          (i.componentRef = c), (i.componentInstance = c.instance);
        }
      }
      _createInjector(e, i, o, a) {
        let s = e.injector || e.viewContainerRef?.injector,
          c = [
            { provide: tg, useValue: e.data },
            { provide: Un, useValue: i },
          ];
        return (
          e.providers &&
            (typeof e.providers == "function"
              ? c.push(...e.providers(i, e, o))
              : c.push(...e.providers)),
          e.direction &&
            (!s || !s.get(wt, null, { optional: !0 })) &&
            c.push({
              provide: wt,
              useValue: { value: e.direction, change: x() },
            }),
          at.create({ parent: s || a, providers: c })
        );
      }
      _removeOpenDialog(e, i) {
        let o = this.openDialogs.indexOf(e);
        o > -1 &&
          (this.openDialogs.splice(o, 1),
          this.openDialogs.length ||
            (this._ariaHiddenElements.forEach((a, s) => {
              a
                ? s.setAttribute("aria-hidden", a)
                : s.removeAttribute("aria-hidden");
            }),
            this._ariaHiddenElements.clear(),
            i && this._getAfterAllClosed().next()));
      }
      _hideNonDialogContentFromAssistiveTechnology() {
        let e = this._overlayContainer.getContainerElement();
        if (e.parentElement) {
          let i = e.parentElement.children;
          for (let o = i.length - 1; o > -1; o--) {
            let a = i[o];
            a !== e &&
              a.nodeName !== "SCRIPT" &&
              a.nodeName !== "STYLE" &&
              !a.hasAttribute("aria-live") &&
              (this._ariaHiddenElements.set(a, a.getAttribute("aria-hidden")),
              a.setAttribute("aria-hidden", "true"));
          }
        }
      }
      _getAfterAllClosed() {
        let e = this._parentDialog;
        return e ? e._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(Pe), f(at), f(eg, 8), f(t, 12), f(qi), f(Jf));
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
function Cs(n, t) {
  let r = n.length;
  for (; r--; ) t(n[r]);
}
function ng(n, t) {}
var $n = class {
    constructor() {
      (this.role = "dialog"),
        (this.panelClass = ""),
        (this.hasBackdrop = !0),
        (this.backdropClass = ""),
        (this.disableClose = !1),
        (this.width = ""),
        (this.height = ""),
        (this.data = null),
        (this.ariaDescribedBy = null),
        (this.ariaLabelledBy = null),
        (this.ariaLabel = null),
        (this.ariaModal = !0),
        (this.autoFocus = "first-tabbable"),
        (this.restoreFocus = !0),
        (this.delayFocusTrap = !0),
        (this.closeOnNavigation = !0);
    }
  },
  Es = "mdc-dialog--open",
  Ud = "mdc-dialog--opening",
  Hd = "mdc-dialog--closing",
  rg = 150,
  og = 75,
  ag = (() => {
    let t = class t extends Is {
      constructor(e, i, o, a, s, c, l, h, p) {
        super(e, i, o, a, s, c, l, p),
          (this._animationMode = h),
          (this._animationStateChanged = new O()),
          (this._animationsEnabled = this._animationMode !== "NoopAnimations"),
          (this._actionSectionCount = 0),
          (this._hostElement = this._elementRef.nativeElement),
          (this._enterAnimationDuration = this._animationsEnabled
            ? (Wd(this._config.enterAnimationDuration) ?? rg)
            : 0),
          (this._exitAnimationDuration = this._animationsEnabled
            ? (Wd(this._config.exitAnimationDuration) ?? og)
            : 0),
          (this._animationTimer = null),
          (this._finishDialogOpen = () => {
            this._clearAnimationClasses(),
              this._openAnimationDone(this._enterAnimationDuration);
          }),
          (this._finishDialogClose = () => {
            this._clearAnimationClasses(),
              this._animationStateChanged.emit({
                state: "closed",
                totalTime: this._exitAnimationDuration,
              });
          });
      }
      _contentAttached() {
        super._contentAttached(), this._startOpenAnimation();
      }
      _startOpenAnimation() {
        this._animationStateChanged.emit({
          state: "opening",
          totalTime: this._enterAnimationDuration,
        }),
          this._animationsEnabled
            ? (this._hostElement.style.setProperty(
                $d,
                `${this._enterAnimationDuration}ms`,
              ),
              this._requestAnimationFrame(() =>
                this._hostElement.classList.add(Ud, Es),
              ),
              this._waitForAnimationToComplete(
                this._enterAnimationDuration,
                this._finishDialogOpen,
              ))
            : (this._hostElement.classList.add(Es),
              Promise.resolve().then(() => this._finishDialogOpen()));
      }
      _startExitAnimation() {
        this._animationStateChanged.emit({
          state: "closing",
          totalTime: this._exitAnimationDuration,
        }),
          this._hostElement.classList.remove(Es),
          this._animationsEnabled
            ? (this._hostElement.style.setProperty(
                $d,
                `${this._exitAnimationDuration}ms`,
              ),
              this._requestAnimationFrame(() =>
                this._hostElement.classList.add(Hd),
              ),
              this._waitForAnimationToComplete(
                this._exitAnimationDuration,
                this._finishDialogClose,
              ))
            : Promise.resolve().then(() => this._finishDialogClose());
      }
      _updateActionSectionCount(e) {
        (this._actionSectionCount += e), this._changeDetectorRef.markForCheck();
      }
      _clearAnimationClasses() {
        this._hostElement.classList.remove(Ud, Hd);
      }
      _waitForAnimationToComplete(e, i) {
        this._animationTimer !== null && clearTimeout(this._animationTimer),
          (this._animationTimer = setTimeout(i, e));
      }
      _requestAnimationFrame(e) {
        this._ngZone.runOutsideAngular(() => {
          typeof requestAnimationFrame == "function"
            ? requestAnimationFrame(e)
            : e();
        });
      }
      _captureInitialFocus() {
        this._config.delayFocusTrap || this._trapFocus();
      }
      _openAnimationDone(e) {
        this._config.delayFocusTrap && this._trapFocus(),
          this._animationStateChanged.next({ state: "opened", totalTime: e });
      }
      ngOnDestroy() {
        super.ngOnDestroy(),
          this._animationTimer !== null && clearTimeout(this._animationTimer);
      }
      attachComponentPortal(e) {
        let i = super.attachComponentPortal(e);
        return (
          i.location.nativeElement.classList.add(
            "mat-mdc-dialog-component-host",
          ),
          i
        );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(
        d(E),
        d(Ni),
        d(k, 8),
        d($n),
        d(oi),
        d(S),
        d(ge),
        d(mt, 8),
        d(Ht),
      );
    }),
      (t.ɵcmp = I({
        type: t,
        selectors: [["mat-dialog-container"]],
        hostAttrs: [
          "tabindex",
          "-1",
          1,
          "mat-mdc-dialog-container",
          "mdc-dialog",
        ],
        hostVars: 10,
        hostBindings: function (i, o) {
          i & 2 &&
            (Ae("id", o._config.id),
            G("aria-modal", o._config.ariaModal)("role", o._config.role)(
              "aria-labelledby",
              o._config.ariaLabel ? null : o._ariaLabelledByQueue[0],
            )("aria-label", o._config.ariaLabel)(
              "aria-describedby",
              o._config.ariaDescribedBy || null,
            ),
            V("_mat-animation-noopable", !o._animationsEnabled)(
              "mat-mdc-dialog-container-with-actions",
              o._actionSectionCount > 0,
            ));
        },
        standalone: !0,
        features: [it, U],
        decls: 3,
        vars: 0,
        consts: [
          [1, "mat-mdc-dialog-inner-container", "mdc-dialog__container"],
          [1, "mat-mdc-dialog-surface", "mdc-dialog__surface"],
          ["cdkPortalOutlet", ""],
        ],
        template: function (i, o) {
          i & 1 &&
            (u(0, "div", 0)(1, "div", 1),
            K(2, ng, 0, 0, "ng-template", 2),
            m()());
        },
        dependencies: [fe],
        styles: [
          '.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12));border-radius:var(--mdc-dialog-container-shape, var(--mat-app-corner-extra-large, 4px));background-color:var(--mdc-dialog-container-color, var(--mat-app-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mdc-dialog-subhead-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mdc-dialog-subhead-font, var(--mat-app-headline-small-font, inherit));line-height:var(--mdc-dialog-subhead-line-height, var(--mat-app-headline-small-line-height, 1.5rem));font-size:var(--mdc-dialog-subhead-size, var(--mat-app-headline-small-size, 1rem));font-weight:var(--mdc-dialog-subhead-weight, var(--mat-app-headline-small-weight, 400));letter-spacing:var(--mdc-dialog-subhead-tracking, var(--mat-app-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mdc-dialog-supporting-text-color, var(--mat-app-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mdc-dialog-supporting-text-font, var(--mat-app-body-medium-font, inherit));line-height:var(--mdc-dialog-supporting-text-line-height, var(--mat-app-body-medium-line-height, 1.5rem));font-size:var(--mdc-dialog-supporting-text-size, var(--mat-app-body-medium-size, 1rem));font-weight:var(--mdc-dialog-supporting-text-weight, var(--mat-app-body-medium-weight, 400));letter-spacing:var(--mdc-dialog-supporting-text-tracking, var(--mat-app-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.cdk-high-contrast-active .mat-mdc-dialog-actions{border-top-color:CanvasText}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}',
        ],
        encapsulation: 2,
      }));
    let n = t;
    return n;
  })(),
  $d = "--mat-dialog-transition-duration";
function Wd(n) {
  return n == null
    ? null
    : typeof n == "number"
      ? n
      : n.endsWith("ms")
        ? Ut(n.substring(0, n.length - 2))
        : n.endsWith("s")
          ? Ut(n.substring(0, n.length - 1)) * 1e3
          : n === "0"
            ? 0
            : null;
}
var so = (function (n) {
    return (
      (n[(n.OPEN = 0)] = "OPEN"),
      (n[(n.CLOSING = 1)] = "CLOSING"),
      (n[(n.CLOSED = 2)] = "CLOSED"),
      n
    );
  })(so || {}),
  Qi = class {
    constructor(t, r, e) {
      (this._ref = t),
        (this._containerInstance = e),
        (this._afterOpened = new w()),
        (this._beforeClosed = new w()),
        (this._state = so.OPEN),
        (this.disableClose = r.disableClose),
        (this.id = t.id),
        t.addPanelClass("mat-mdc-dialog-panel"),
        e._animationStateChanged
          .pipe(
            Z((i) => i.state === "opened"),
            Ct(1),
          )
          .subscribe(() => {
            this._afterOpened.next(), this._afterOpened.complete();
          }),
        e._animationStateChanged
          .pipe(
            Z((i) => i.state === "closed"),
            Ct(1),
          )
          .subscribe(() => {
            clearTimeout(this._closeFallbackTimeout), this._finishDialogClose();
          }),
        t.overlayRef.detachments().subscribe(() => {
          this._beforeClosed.next(this._result),
            this._beforeClosed.complete(),
            this._finishDialogClose();
        }),
        At(
          this.backdropClick(),
          this.keydownEvents().pipe(
            Z((i) => i.keyCode === 27 && !this.disableClose && !zt(i)),
          ),
        ).subscribe((i) => {
          this.disableClose ||
            (i.preventDefault(),
            sg(this, i.type === "keydown" ? "keyboard" : "mouse"));
        });
    }
    close(t) {
      (this._result = t),
        this._containerInstance._animationStateChanged
          .pipe(
            Z((r) => r.state === "closing"),
            Ct(1),
          )
          .subscribe((r) => {
            this._beforeClosed.next(t),
              this._beforeClosed.complete(),
              this._ref.overlayRef.detachBackdrop(),
              (this._closeFallbackTimeout = setTimeout(
                () => this._finishDialogClose(),
                r.totalTime + 100,
              ));
          }),
        (this._state = so.CLOSING),
        this._containerInstance._startExitAnimation();
    }
    afterOpened() {
      return this._afterOpened;
    }
    afterClosed() {
      return this._ref.closed;
    }
    beforeClosed() {
      return this._beforeClosed;
    }
    backdropClick() {
      return this._ref.backdropClick;
    }
    keydownEvents() {
      return this._ref.keydownEvents;
    }
    updatePosition(t) {
      let r = this._ref.config.positionStrategy;
      return (
        t && (t.left || t.right)
          ? t.left
            ? r.left(t.left)
            : r.right(t.right)
          : r.centerHorizontally(),
        t && (t.top || t.bottom)
          ? t.top
            ? r.top(t.top)
            : r.bottom(t.bottom)
          : r.centerVertically(),
        this._ref.updatePosition(),
        this
      );
    }
    updateSize(t = "", r = "") {
      return this._ref.updateSize(t, r), this;
    }
    addPanelClass(t) {
      return this._ref.addPanelClass(t), this;
    }
    removePanelClass(t) {
      return this._ref.removePanelClass(t), this;
    }
    getState() {
      return this._state;
    }
    _finishDialogClose() {
      (this._state = so.CLOSED),
        this._ref.close(this._result, {
          focusOrigin: this._closeInteractionType,
        }),
        (this.componentInstance = null);
    }
  };
function sg(n, t, r) {
  return (n._closeInteractionType = t), n.close(r);
}
var Ds = new C("MatMdcDialogData"),
  cg = new C("mat-mdc-dialog-default-options"),
  lg = new C("mat-mdc-dialog-scroll-strategy", {
    providedIn: "root",
    factory: () => {
      let n = v(Pe);
      return () => n.scrollStrategies.block();
    },
  });
var dg = 0,
  Ss = (() => {
    let t = class t {
      get openDialogs() {
        return this._parentDialog
          ? this._parentDialog.openDialogs
          : this._openDialogsAtThisLevel;
      }
      get afterOpened() {
        return this._parentDialog
          ? this._parentDialog.afterOpened
          : this._afterOpenedAtThisLevel;
      }
      _getAfterAllClosed() {
        let e = this._parentDialog;
        return e ? e._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
      }
      constructor(e, i, o, a, s, c, l, h) {
        (this._overlay = e),
          (this._defaultOptions = a),
          (this._scrollStrategy = s),
          (this._parentDialog = c),
          (this._openDialogsAtThisLevel = []),
          (this._afterAllClosedAtThisLevel = new w()),
          (this._afterOpenedAtThisLevel = new w()),
          (this.dialogConfigClass = $n),
          (this.afterAllClosed = ze(() =>
            this.openDialogs.length
              ? this._getAfterAllClosed()
              : this._getAfterAllClosed().pipe(vt(void 0)),
          )),
          (this._dialog = i.get(zd)),
          (this._dialogRefConstructor = Qi),
          (this._dialogContainerType = ag),
          (this._dialogDataToken = Ds);
      }
      open(e, i) {
        let o;
        (i = b(b({}, this._defaultOptions || new $n()), i)),
          (i.id = i.id || `mat-mdc-dialog-${dg++}`),
          (i.scrollStrategy = i.scrollStrategy || this._scrollStrategy());
        let a = this._dialog.open(
          e,
          X(b({}, i), {
            positionStrategy: this._overlay
              .position()
              .global()
              .centerHorizontally()
              .centerVertically(),
            disableClose: !0,
            closeOnDestroy: !1,
            closeOnOverlayDetachments: !1,
            container: {
              type: this._dialogContainerType,
              providers: () => [
                { provide: this.dialogConfigClass, useValue: i },
                { provide: si, useValue: i },
              ],
            },
            templateContext: () => ({ dialogRef: o }),
            providers: (s, c, l) => (
              (o = new this._dialogRefConstructor(s, i, l)),
              o.updatePosition(i?.position),
              [
                { provide: this._dialogContainerType, useValue: l },
                { provide: this._dialogDataToken, useValue: c.data },
                { provide: this._dialogRefConstructor, useValue: o },
              ]
            ),
          }),
        );
        return (
          (o.componentRef = a.componentRef),
          (o.componentInstance = a.componentInstance),
          this.openDialogs.push(o),
          this.afterOpened.next(o),
          o.afterClosed().subscribe(() => {
            let s = this.openDialogs.indexOf(o);
            s > -1 &&
              (this.openDialogs.splice(s, 1),
              this.openDialogs.length || this._getAfterAllClosed().next());
          }),
          o
        );
      }
      closeAll() {
        this._closeDialogs(this.openDialogs);
      }
      getDialogById(e) {
        return this.openDialogs.find((i) => i.id === e);
      }
      ngOnDestroy() {
        this._closeDialogs(this._openDialogsAtThisLevel),
          this._afterAllClosedAtThisLevel.complete(),
          this._afterOpenedAtThisLevel.complete();
      }
      _closeDialogs(e) {
        let i = e.length;
        for (; i--; ) e[i].close();
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(
        f(Pe),
        f(at),
        f(se, 8),
        f(cg, 8),
        f(lg),
        f(t, 12),
        f(qi),
        f(mt, 8),
      );
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  hg = 0;
var Gd = (() => {
    let t = class t {
      constructor(e, i, o) {
        (this._dialogRef = e), (this._elementRef = i), (this._dialog = o);
      }
      ngOnInit() {
        this._dialogRef ||
          (this._dialogRef = ug(this._elementRef, this._dialog.openDialogs)),
          this._dialogRef &&
            Promise.resolve().then(() => {
              this._onAdd();
            });
      }
      ngOnDestroy() {
        this._dialogRef?._containerInstance &&
          Promise.resolve().then(() => {
            this._onRemove();
          });
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(Qi, 8), d(E), d(Ss));
    }),
      (t.ɵdir = M({ type: t, standalone: !0 }));
    let n = t;
    return n;
  })(),
  qd = (() => {
    let t = class t extends Gd {
      constructor() {
        super(...arguments), (this.id = `mat-mdc-dialog-title-${hg++}`);
      }
      _onAdd() {
        this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id);
      }
      _onRemove() {
        this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id);
      }
    };
    (t.ɵfac = (() => {
      let e;
      return function (o) {
        return (e || (e = te(t)))(o || t);
      };
    })()),
      (t.ɵdir = M({
        type: t,
        selectors: [
          ["", "mat-dialog-title", ""],
          ["", "matDialogTitle", ""],
        ],
        hostAttrs: [1, "mat-mdc-dialog-title", "mdc-dialog__title"],
        hostVars: 1,
        hostBindings: function (i, o) {
          i & 2 && Ae("id", o.id);
        },
        inputs: { id: "id" },
        exportAs: ["matDialogTitle"],
        standalone: !0,
        features: [it],
      }));
    let n = t;
    return n;
  })();
var Qd = (() => {
  let t = class t extends Gd {
    _onAdd() {
      this._dialogRef._containerInstance?._updateActionSectionCount?.(1);
    }
    _onRemove() {
      this._dialogRef._containerInstance?._updateActionSectionCount?.(-1);
    }
  };
  (t.ɵfac = (() => {
    let e;
    return function (o) {
      return (e || (e = te(t)))(o || t);
    };
  })()),
    (t.ɵdir = M({
      type: t,
      selectors: [
        ["", "mat-dialog-actions", ""],
        ["mat-dialog-actions"],
        ["", "matDialogActions", ""],
      ],
      hostAttrs: [1, "mat-mdc-dialog-actions", "mdc-dialog__actions"],
      hostVars: 6,
      hostBindings: function (i, o) {
        i & 2 &&
          V("mat-mdc-dialog-actions-align-start", o.align === "start")(
            "mat-mdc-dialog-actions-align-center",
            o.align === "center",
          )("mat-mdc-dialog-actions-align-end", o.align === "end");
      },
      inputs: { align: "align" },
      standalone: !0,
      features: [it],
    }));
  let n = t;
  return n;
})();
function ug(n, t) {
  let r = n.nativeElement.parentElement;
  for (; r && !r.classList.contains("mat-mdc-dialog-container"); )
    r = r.parentElement;
  return r ? t.find((e) => e.id === r.id) : null;
}
var Yd = ["*"];
var pg =
    ".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size, var(--mat-app-body-large))}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-app-body-medium))}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-app-body-large))}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-app-body-medium))}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}",
  ks = class {
    constructor() {
      (this.columnIndex = 0), (this.rowIndex = 0);
    }
    get rowCount() {
      return this.rowIndex + 1;
    }
    get rowspan() {
      let t = Math.max(...this.tracker);
      return t > 1 ? this.rowCount + t - 1 : this.rowCount;
    }
    update(t, r) {
      (this.columnIndex = 0),
        (this.rowIndex = 0),
        (this.tracker = new Array(t)),
        this.tracker.fill(0, 0, this.tracker.length),
        (this.positions = r.map((e) => this._trackTile(e)));
    }
    _trackTile(t) {
      let r = this._findMatchingGap(t.colspan);
      return (
        this._markTilePosition(r, t),
        (this.columnIndex = r + t.colspan),
        new As(this.rowIndex, r)
      );
    }
    _findMatchingGap(t) {
      t > this.tracker.length;
      let r = -1,
        e = -1;
      do {
        if (this.columnIndex + t > this.tracker.length) {
          this._nextRow(),
            (r = this.tracker.indexOf(0, this.columnIndex)),
            (e = this._findGapEndIndex(r));
          continue;
        }
        if (((r = this.tracker.indexOf(0, this.columnIndex)), r == -1)) {
          this._nextRow(),
            (r = this.tracker.indexOf(0, this.columnIndex)),
            (e = this._findGapEndIndex(r));
          continue;
        }
        (e = this._findGapEndIndex(r)), (this.columnIndex = r + 1);
      } while (e - r < t || e == 0);
      return Math.max(r, 0);
    }
    _nextRow() {
      (this.columnIndex = 0), this.rowIndex++;
      for (let t = 0; t < this.tracker.length; t++)
        this.tracker[t] = Math.max(0, this.tracker[t] - 1);
    }
    _findGapEndIndex(t) {
      for (let r = t + 1; r < this.tracker.length; r++)
        if (this.tracker[r] != 0) return r;
      return this.tracker.length;
    }
    _markTilePosition(t, r) {
      for (let e = 0; e < r.colspan; e++) this.tracker[t + e] = r.rowspan;
    }
  },
  As = class {
    constructor(t, r) {
      (this.row = t), (this.col = r);
    }
  },
  Zd = new C("MAT_GRID_LIST"),
  Os = (() => {
    let t = class t {
      constructor(e, i) {
        (this._element = e),
          (this._gridList = i),
          (this._rowspan = 1),
          (this._colspan = 1);
      }
      get rowspan() {
        return this._rowspan;
      }
      set rowspan(e) {
        this._rowspan = Math.round(Ut(e));
      }
      get colspan() {
        return this._colspan;
      }
      set colspan(e) {
        this._colspan = Math.round(Ut(e));
      }
      _setStyle(e, i) {
        this._element.nativeElement.style[e] = i;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(E), d(Zd, 8));
    }),
      (t.ɵcmp = I({
        type: t,
        selectors: [["mat-grid-tile"]],
        hostAttrs: [1, "mat-grid-tile"],
        hostVars: 2,
        hostBindings: function (i, o) {
          i & 2 && G("rowspan", o.rowspan)("colspan", o.colspan);
        },
        inputs: { rowspan: "rowspan", colspan: "colspan" },
        exportAs: ["matGridTile"],
        standalone: !0,
        features: [U],
        ngContentSelectors: Yd,
        decls: 2,
        vars: 0,
        consts: [[1, "mat-grid-tile-content"]],
        template: function (i, o) {
          i & 1 && (J(), u(0, "div", 0), F(1), m());
        },
        styles: [
          ".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size, var(--mat-app-body-large))}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-app-body-medium))}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-app-body-large))}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-app-body-medium))}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })();
var fg = /^-?\d+((\.\d+)?[A-Za-z%$]?)+$/,
  Wn = class {
    constructor() {
      (this._rows = 0), (this._rowspan = 0);
    }
    init(t, r, e, i) {
      (this._gutterSize = Kd(t)),
        (this._rows = r.rowCount),
        (this._rowspan = r.rowspan),
        (this._cols = e),
        (this._direction = i);
    }
    getBaseTileSize(t, r) {
      return `(${t}% - (${this._gutterSize} * ${r}))`;
    }
    getTilePosition(t, r) {
      return r === 0 ? "0" : ci(`(${t} + ${this._gutterSize}) * ${r}`);
    }
    getTileSize(t, r) {
      return `(${t} * ${r}) + (${r - 1} * ${this._gutterSize})`;
    }
    setStyle(t, r, e) {
      let i = 100 / this._cols,
        o = (this._cols - 1) / this._cols;
      this.setColStyles(t, e, i, o), this.setRowStyles(t, r, i, o);
    }
    setColStyles(t, r, e, i) {
      let o = this.getBaseTileSize(e, i),
        a = this._direction === "rtl" ? "right" : "left";
      t._setStyle(a, this.getTilePosition(o, r)),
        t._setStyle("width", ci(this.getTileSize(o, t.colspan)));
    }
    getGutterSpan() {
      return `${this._gutterSize} * (${this._rowspan} - 1)`;
    }
    getTileSpan(t) {
      return `${this._rowspan} * ${this.getTileSize(t, 1)}`;
    }
    getComputedHeight() {
      return null;
    }
  },
  Ts = class extends Wn {
    constructor(t) {
      super(), (this.fixedRowHeight = t);
    }
    init(t, r, e, i) {
      super.init(t, r, e, i),
        (this.fixedRowHeight = Kd(this.fixedRowHeight)),
        fg.test(this.fixedRowHeight);
    }
    setRowStyles(t, r) {
      t._setStyle("top", this.getTilePosition(this.fixedRowHeight, r)),
        t._setStyle(
          "height",
          ci(this.getTileSize(this.fixedRowHeight, t.rowspan)),
        );
    }
    getComputedHeight() {
      return [
        "height",
        ci(
          `${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`,
        ),
      ];
    }
    reset(t) {
      t._setListStyle(["height", null]),
        t._tiles &&
          t._tiles.forEach((r) => {
            r._setStyle("top", null), r._setStyle("height", null);
          });
    }
  },
  Rs = class extends Wn {
    constructor(t) {
      super(), this._parseRatio(t);
    }
    setRowStyles(t, r, e, i) {
      let o = e / this.rowHeightRatio;
      (this.baseTileHeight = this.getBaseTileSize(o, i)),
        t._setStyle("marginTop", this.getTilePosition(this.baseTileHeight, r)),
        t._setStyle(
          "paddingTop",
          ci(this.getTileSize(this.baseTileHeight, t.rowspan)),
        );
    }
    getComputedHeight() {
      return [
        "paddingBottom",
        ci(
          `${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`,
        ),
      ];
    }
    reset(t) {
      t._setListStyle(["paddingBottom", null]),
        t._tiles.forEach((r) => {
          r._setStyle("marginTop", null), r._setStyle("paddingTop", null);
        });
    }
    _parseRatio(t) {
      let r = t.split(":");
      r.length, (this.rowHeightRatio = parseFloat(r[0]) / parseFloat(r[1]));
    }
  },
  Ms = class extends Wn {
    setRowStyles(t, r) {
      let e = 100 / this._rowspan,
        i = (this._rows - 1) / this._rows,
        o = this.getBaseTileSize(e, i);
      t._setStyle("top", this.getTilePosition(o, r)),
        t._setStyle("height", ci(this.getTileSize(o, t.rowspan)));
    }
    reset(t) {
      t._tiles &&
        t._tiles.forEach((r) => {
          r._setStyle("top", null), r._setStyle("height", null);
        });
    }
  };
function ci(n) {
  return `calc(${n})`;
}
function Kd(n) {
  return n.match(/([A-Za-z%]+)$/) ? n : `${n}px`;
}
var gg = "fit",
  Xd = (() => {
    let t = class t {
      constructor(e, i) {
        (this._element = e), (this._dir = i), (this._gutter = "1px");
      }
      get cols() {
        return this._cols;
      }
      set cols(e) {
        this._cols = Math.max(1, Math.round(Ut(e)));
      }
      get gutterSize() {
        return this._gutter;
      }
      set gutterSize(e) {
        this._gutter = `${e ?? ""}`;
      }
      get rowHeight() {
        return this._rowHeight;
      }
      set rowHeight(e) {
        let i = `${e ?? ""}`;
        i !== this._rowHeight &&
          ((this._rowHeight = i), this._setTileStyler(this._rowHeight));
      }
      ngOnInit() {
        this._checkCols(), this._checkRowHeight();
      }
      ngAfterContentChecked() {
        this._layoutTiles();
      }
      _checkCols() {
        this.cols;
      }
      _checkRowHeight() {
        this._rowHeight || this._setTileStyler("1:1");
      }
      _setTileStyler(e) {
        this._tileStyler && this._tileStyler.reset(this),
          e === gg
            ? (this._tileStyler = new Ms())
            : e && e.indexOf(":") > -1
              ? (this._tileStyler = new Rs(e))
              : (this._tileStyler = new Ts(e));
      }
      _layoutTiles() {
        this._tileCoordinator || (this._tileCoordinator = new ks());
        let e = this._tileCoordinator,
          i = this._tiles.filter((a) => !a._gridList || a._gridList === this),
          o = this._dir ? this._dir.value : "ltr";
        this._tileCoordinator.update(this.cols, i),
          this._tileStyler.init(this.gutterSize, e, this.cols, o),
          i.forEach((a, s) => {
            let c = e.positions[s];
            this._tileStyler.setStyle(a, c.row, c.col);
          }),
          this._setListStyle(this._tileStyler.getComputedHeight());
      }
      _setListStyle(e) {
        e && (this._element.nativeElement.style[e[0]] = e[1]);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(E), d(wt, 8));
    }),
      (t.ɵcmp = I({
        type: t,
        selectors: [["mat-grid-list"]],
        contentQueries: function (i, o, a) {
          if ((i & 1 && ct(a, Os, 5), i & 2)) {
            let s;
            P((s = N())) && (o._tiles = s);
          }
        },
        hostAttrs: [1, "mat-grid-list"],
        hostVars: 1,
        hostBindings: function (i, o) {
          i & 2 && G("cols", o.cols);
        },
        inputs: {
          cols: "cols",
          gutterSize: "gutterSize",
          rowHeight: "rowHeight",
        },
        exportAs: ["matGridList"],
        standalone: !0,
        features: [gt([{ provide: Zd, useExisting: t }]), U],
        ngContentSelectors: Yd,
        decls: 2,
        vars: 0,
        template: function (i, o) {
          i & 1 && (J(), u(0, "div"), F(1), m());
        },
        styles: [pg],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })(),
  Jd = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵmod = j({ type: t })),
      (t.ɵinj = L({ imports: [hs, lt, hs, lt] }));
    let n = t;
    return n;
  })();
var Fs = class {
    constructor(t) {
      (this._box = t),
        (this._destroyed = new w()),
        (this._resizeSubject = new w()),
        (this._elementObservables = new Map()),
        typeof ResizeObserver < "u" &&
          (this._resizeObserver = new ResizeObserver((r) =>
            this._resizeSubject.next(r),
          ));
    }
    observe(t) {
      return (
        this._elementObservables.has(t) ||
          this._elementObservables.set(
            t,
            new Nt((r) => {
              let e = this._resizeSubject.subscribe(r);
              return (
                this._resizeObserver?.observe(t, { box: this._box }),
                () => {
                  this._resizeObserver?.unobserve(t),
                    e.unsubscribe(),
                    this._elementObservables.delete(t);
                }
              );
            }).pipe(
              Z((r) => r.some((e) => e.target === t)),
              zo({ bufferSize: 1, refCount: !0 }),
              z(this._destroyed),
            ),
          ),
        this._elementObservables.get(t)
      );
    }
    destroy() {
      this._destroyed.next(),
        this._destroyed.complete(),
        this._resizeSubject.complete(),
        this._elementObservables.clear();
    }
  },
  th = (() => {
    let t = class t {
      constructor() {
        (this._observers = new Map()),
          (this._ngZone = v(S)),
          typeof ResizeObserver < "u";
      }
      ngOnDestroy() {
        for (let [, e] of this._observers) e.destroy();
        this._observers.clear(), typeof ResizeObserver < "u";
      }
      observe(e, i) {
        let o = i?.box || "content-box";
        return (
          this._observers.has(o) || this._observers.set(o, new Fs(o)),
          this._observers.get(o).observe(e)
        );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
var Vs = ["*"];
function vg(n, t) {
  n & 1 && F(0);
}
var _g = ["tabListContainer"],
  yg = ["tabList"],
  wg = ["tabListInner"],
  xg = ["nextPaginator"],
  Cg = ["previousPaginator"],
  Ig = (n) => ({ animationDuration: n }),
  Eg = (n, t) => ({ value: n, params: t });
function Dg(n, t) {}
var Sg = ["tabBodyWrapper"],
  kg = ["tabHeader"];
function Ag(n, t) {}
function Tg(n, t) {
  if ((n & 1 && K(0, Ag, 0, 0, "ng-template", 12), n & 2)) {
    let r = nt().$implicit;
    Q("cdkPortalOutlet", r.templateLabel);
  }
}
function Rg(n, t) {
  if ((n & 1 && g(0), n & 2)) {
    let r = nt().$implicit;
    St(r.textLabel);
  }
}
function Mg(n, t) {
  if (n & 1) {
    let r = jt();
    u(0, "div", 7, 2),
      Y("click", function () {
        let i = ht(r),
          o = i.$implicit,
          a = i.$index,
          s = nt(),
          c = Qe(1);
        return ut(s._handleClick(o, c, a));
      })("cdkFocusChange", function (i) {
        let o = ht(r).$index,
          a = nt();
        return ut(a._tabFocusChanged(i, o));
      }),
      T(2, "span", 8)(3, "div", 9),
      u(4, "span", 10)(5, "span", 11),
      K(6, Tg, 1, 1, null, 12)(7, Rg, 1, 1),
      m()()();
  }
  if (n & 2) {
    let r = t.$implicit,
      e = t.$index,
      i = Qe(1),
      o = nt();
    Tt(r.labelClass),
      V("mdc-tab--active", o.selectedIndex === e),
      Q("id", o._getTabLabelId(e))("disabled", r.disabled)(
        "fitInkBarToContent",
        o.fitInkBarToContent,
      ),
      G("tabIndex", o._getTabIndex(e))("aria-posinset", e + 1)(
        "aria-setsize",
        o._tabs.length,
      )("aria-controls", o._getTabContentId(e))(
        "aria-selected",
        o.selectedIndex === e,
      )("aria-label", r.ariaLabel || null)(
        "aria-labelledby",
        !r.ariaLabel && r.ariaLabelledby ? r.ariaLabelledby : null,
      ),
      D(3),
      Q("matRippleTrigger", i)(
        "matRippleDisabled",
        r.disabled || o.disableRipple,
      ),
      D(3),
      ft(r.templateLabel ? 6 : 7);
  }
}
function Og(n, t) {
  n & 1 && F(0);
}
function Fg(n, t) {
  if (n & 1) {
    let r = jt();
    u(0, "mat-tab-body", 13),
      Y("_onCentered", function () {
        ht(r);
        let i = nt();
        return ut(i._removeTabBodyWrapperHeight());
      })("_onCentering", function (i) {
        ht(r);
        let o = nt();
        return ut(o._setTabBodyWrapperHeight(i));
      }),
      m();
  }
  if (n & 2) {
    let r = t.$implicit,
      e = t.$index,
      i = nt();
    Tt(r.bodyClass),
      V("mat-mdc-tab-body-active", i.selectedIndex === e),
      Q("id", i._getTabContentId(e))("content", r.content)(
        "position",
        r.position,
      )("origin", r.origin)("animationDuration", i.animationDuration)(
        "preserveContent",
        i.preserveContent,
      ),
      G(
        "tabindex",
        i.contentTabIndex != null && i.selectedIndex === e
          ? i.contentTabIndex
          : null,
      )("aria-labelledby", i._getTabLabelId(e))(
        "aria-hidden",
        i.selectedIndex !== e,
      );
  }
}
var Pg = new C("MatTabContent"),
  Ng = (() => {
    let t = class t {
      constructor(e) {
        this.template = e;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(Lt));
    }),
      (t.ɵdir = M({
        type: t,
        selectors: [["", "matTabContent", ""]],
        standalone: !0,
        features: [gt([{ provide: Pg, useExisting: t }])],
      }));
    let n = t;
    return n;
  })(),
  Lg = new C("MatTabLabel"),
  nh = new C("MAT_TAB"),
  jg = (() => {
    let t = class t extends Td {
      constructor(e, i, o) {
        super(e, i), (this._closestTab = o);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(Lt), d(Wt), d(nh, 8));
    }),
      (t.ɵdir = M({
        type: t,
        selectors: [
          ["", "mat-tab-label", ""],
          ["", "matTabLabel", ""],
        ],
        standalone: !0,
        features: [gt([{ provide: Lg, useExisting: t }]), it],
      }));
    let n = t;
    return n;
  })(),
  rh = new C("MAT_TAB_GROUP"),
  Gn = (() => {
    let t = class t {
      get templateLabel() {
        return this._templateLabel;
      }
      set templateLabel(e) {
        this._setTemplateLabelInput(e);
      }
      get content() {
        return this._contentPortal;
      }
      constructor(e, i) {
        (this._viewContainerRef = e),
          (this._closestTabGroup = i),
          (this.disabled = !1),
          (this._explicitContent = void 0),
          (this.textLabel = ""),
          (this._contentPortal = null),
          (this._stateChanges = new w()),
          (this.position = null),
          (this.origin = null),
          (this.isActive = !1);
      }
      ngOnChanges(e) {
        (e.hasOwnProperty("textLabel") || e.hasOwnProperty("disabled")) &&
          this._stateChanges.next();
      }
      ngOnDestroy() {
        this._stateChanges.complete();
      }
      ngOnInit() {
        this._contentPortal = new pe(
          this._explicitContent || this._implicitContent,
          this._viewContainerRef,
        );
      }
      _setTemplateLabelInput(e) {
        e && e._closestTab === this && (this._templateLabel = e);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(Wt), d(rh, 8));
    }),
      (t.ɵcmp = I({
        type: t,
        selectors: [["mat-tab"]],
        contentQueries: function (i, o, a) {
          if ((i & 1 && (ct(a, jg, 5), ct(a, Ng, 7, Lt)), i & 2)) {
            let s;
            P((s = N())) && (o.templateLabel = s.first),
              P((s = N())) && (o._explicitContent = s.first);
          }
        },
        viewQuery: function (i, o) {
          if ((i & 1 && pt(Lt, 7), i & 2)) {
            let a;
            P((a = N())) && (o._implicitContent = a.first);
          }
        },
        hostAttrs: ["hidden", ""],
        inputs: {
          disabled: [2, "disabled", "disabled", H],
          textLabel: [0, "label", "textLabel"],
          ariaLabel: [0, "aria-label", "ariaLabel"],
          ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
          labelClass: "labelClass",
          bodyClass: "bodyClass",
        },
        exportAs: ["matTab"],
        standalone: !0,
        features: [gt([{ provide: nh, useExisting: t }]), st, Mt, U],
        ngContentSelectors: Vs,
        decls: 1,
        vars: 0,
        template: function (i, o) {
          i & 1 && (J(), K(0, vg, 1, 0, "ng-template"));
        },
        encapsulation: 2,
      }));
    let n = t;
    return n;
  })(),
  Ps = "mdc-tab-indicator--active",
  eh = "mdc-tab-indicator--no-transition",
  Ns = class {
    constructor(t) {
      this._items = t;
    }
    hide() {
      this._items.forEach((t) => t.deactivateInkBar());
    }
    alignToElement(t) {
      let r = this._items.find((i) => i.elementRef.nativeElement === t),
        e = this._currentItem;
      if (r !== e && (e?.deactivateInkBar(), r)) {
        let i = e?.elementRef.nativeElement.getBoundingClientRect?.();
        r.activateInkBar(i), (this._currentItem = r);
      }
    }
  },
  Vg = (() => {
    let t = class t {
      constructor() {
        (this._elementRef = v(E)), (this._fitToContent = !1);
      }
      get fitInkBarToContent() {
        return this._fitToContent;
      }
      set fitInkBarToContent(e) {
        this._fitToContent !== e &&
          ((this._fitToContent = e),
          this._inkBarElement && this._appendInkBarElement());
      }
      activateInkBar(e) {
        let i = this._elementRef.nativeElement;
        if (!e || !i.getBoundingClientRect || !this._inkBarContentElement) {
          i.classList.add(Ps);
          return;
        }
        let o = i.getBoundingClientRect(),
          a = e.width / o.width,
          s = e.left - o.left;
        i.classList.add(eh),
          this._inkBarContentElement.style.setProperty(
            "transform",
            `translateX(${s}px) scaleX(${a})`,
          ),
          i.getBoundingClientRect(),
          i.classList.remove(eh),
          i.classList.add(Ps),
          this._inkBarContentElement.style.setProperty("transform", "");
      }
      deactivateInkBar() {
        this._elementRef.nativeElement.classList.remove(Ps);
      }
      ngOnInit() {
        this._createInkBarElement();
      }
      ngOnDestroy() {
        this._inkBarElement?.remove(),
          (this._inkBarElement = this._inkBarContentElement = null);
      }
      _createInkBarElement() {
        let e = this._elementRef.nativeElement.ownerDocument || document,
          i = (this._inkBarElement = e.createElement("span")),
          o = (this._inkBarContentElement = e.createElement("span"));
        (i.className = "mdc-tab-indicator"),
          (o.className =
            "mdc-tab-indicator__content mdc-tab-indicator__content--underline"),
          i.appendChild(this._inkBarContentElement),
          this._appendInkBarElement();
      }
      _appendInkBarElement() {
        this._inkBarElement;
        let e = this._fitToContent
          ? this._elementRef.nativeElement.querySelector(".mdc-tab__content")
          : this._elementRef.nativeElement;
        e.appendChild(this._inkBarElement);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵdir = M({
        type: t,
        inputs: {
          fitInkBarToContent: [
            2,
            "fitInkBarToContent",
            "fitInkBarToContent",
            H,
          ],
        },
        features: [st],
      }));
    let n = t;
    return n;
  })();
var oh = (() => {
    let t = class t extends Vg {
      constructor(e) {
        super(), (this.elementRef = e), (this.disabled = !1);
      }
      focus() {
        this.elementRef.nativeElement.focus();
      }
      getOffsetLeft() {
        return this.elementRef.nativeElement.offsetLeft;
      }
      getOffsetWidth() {
        return this.elementRef.nativeElement.offsetWidth;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(E));
    }),
      (t.ɵdir = M({
        type: t,
        selectors: [["", "matTabLabelWrapper", ""]],
        hostVars: 3,
        hostBindings: function (i, o) {
          i & 2 &&
            (G("aria-disabled", !!o.disabled),
            V("mat-mdc-tab-disabled", o.disabled));
        },
        inputs: { disabled: [2, "disabled", "disabled", H] },
        standalone: !0,
        features: [st, it],
      }));
    let n = t;
    return n;
  })(),
  ih = Oe({ passive: !0 }),
  Bg = 650,
  zg = 100,
  Ug = (() => {
    let t = class t {
      get selectedIndex() {
        return this._selectedIndex;
      }
      set selectedIndex(e) {
        let i = isNaN(e) ? 0 : e;
        this._selectedIndex != i &&
          ((this._selectedIndexChanged = !0),
          (this._selectedIndex = i),
          this._keyManager && this._keyManager.updateActiveItem(i));
      }
      constructor(e, i, o, a, s, c, l) {
        (this._elementRef = e),
          (this._changeDetectorRef = i),
          (this._viewportRuler = o),
          (this._dir = a),
          (this._ngZone = s),
          (this._platform = c),
          (this._animationMode = l),
          (this._scrollDistance = 0),
          (this._selectedIndexChanged = !1),
          (this._destroyed = new w()),
          (this._showPaginationControls = !1),
          (this._disableScrollAfter = !0),
          (this._disableScrollBefore = !0),
          (this._stopScrolling = new w()),
          (this.disablePagination = !1),
          (this._selectedIndex = 0),
          (this.selectFocusedIndex = new O()),
          (this.indexFocused = new O()),
          (this._sharedResizeObserver = v(th)),
          (this._injector = v(at)),
          s.runOutsideAngular(() => {
            ne(e.nativeElement, "mouseleave")
              .pipe(z(this._destroyed))
              .subscribe(() => {
                this._stopInterval();
              });
          });
      }
      ngAfterViewInit() {
        ne(this._previousPaginator.nativeElement, "touchstart", ih)
          .pipe(z(this._destroyed))
          .subscribe(() => {
            this._handlePaginatorPress("before");
          }),
          ne(this._nextPaginator.nativeElement, "touchstart", ih)
            .pipe(z(this._destroyed))
            .subscribe(() => {
              this._handlePaginatorPress("after");
            });
      }
      ngAfterContentInit() {
        let e = this._dir ? this._dir.change : x("ltr"),
          i = this._sharedResizeObserver
            .observe(this._elementRef.nativeElement)
            .pipe(Xt(32), z(this._destroyed)),
          o = this._viewportRuler.change(150).pipe(z(this._destroyed)),
          a = () => {
            this.updatePagination(), this._alignInkBarToSelectedTab();
          };
        (this._keyManager = new Pi(this._items)
          .withHorizontalOrientation(this._getLayoutDirection())
          .withHomeAndEnd()
          .withWrap()
          .skipPredicate(() => !1)),
          this._keyManager.updateActiveItem(this._selectedIndex),
          Dt(a, { injector: this._injector }),
          At(e, o, i, this._items.changes, this._itemsResized())
            .pipe(z(this._destroyed))
            .subscribe(() => {
              this._ngZone.run(() => {
                Promise.resolve().then(() => {
                  (this._scrollDistance = Math.max(
                    0,
                    Math.min(
                      this._getMaxScrollDistance(),
                      this._scrollDistance,
                    ),
                  )),
                    a();
                });
              }),
                this._keyManager.withHorizontalOrientation(
                  this._getLayoutDirection(),
                );
            }),
          this._keyManager.change.subscribe((s) => {
            this.indexFocused.emit(s), this._setTabFocus(s);
          });
      }
      _itemsResized() {
        return typeof ResizeObserver != "function"
          ? Kt
          : this._items.changes.pipe(
              vt(this._items),
              It(
                (e) =>
                  new Nt((i) =>
                    this._ngZone.runOutsideAngular(() => {
                      let o = new ResizeObserver((a) => i.next(a));
                      return (
                        e.forEach((a) => o.observe(a.elementRef.nativeElement)),
                        () => {
                          o.disconnect();
                        }
                      );
                    }),
                  ),
              ),
              ui(1),
              Z((e) =>
                e.some(
                  (i) => i.contentRect.width > 0 && i.contentRect.height > 0,
                ),
              ),
            );
      }
      ngAfterContentChecked() {
        this._tabLabelCount != this._items.length &&
          (this.updatePagination(),
          (this._tabLabelCount = this._items.length),
          this._changeDetectorRef.markForCheck()),
          this._selectedIndexChanged &&
            (this._scrollToLabel(this._selectedIndex),
            this._checkScrollingControls(),
            this._alignInkBarToSelectedTab(),
            (this._selectedIndexChanged = !1),
            this._changeDetectorRef.markForCheck()),
          this._scrollDistanceChanged &&
            (this._updateTabScrollPosition(),
            (this._scrollDistanceChanged = !1),
            this._changeDetectorRef.markForCheck());
      }
      ngOnDestroy() {
        this._keyManager?.destroy(),
          this._destroyed.next(),
          this._destroyed.complete(),
          this._stopScrolling.complete();
      }
      _handleKeydown(e) {
        if (!zt(e))
          switch (e.keyCode) {
            case 13:
            case 32:
              if (this.focusIndex !== this.selectedIndex) {
                let i = this._items.get(this.focusIndex);
                i &&
                  !i.disabled &&
                  (this.selectFocusedIndex.emit(this.focusIndex),
                  this._itemSelected(e));
              }
              break;
            default:
              this._keyManager.onKeydown(e);
          }
      }
      _onContentChanges() {
        let e = this._elementRef.nativeElement.textContent;
        e !== this._currentTextContent &&
          ((this._currentTextContent = e || ""),
          this._ngZone.run(() => {
            this.updatePagination(),
              this._alignInkBarToSelectedTab(),
              this._changeDetectorRef.markForCheck();
          }));
      }
      updatePagination() {
        this._checkPaginationEnabled(),
          this._checkScrollingControls(),
          this._updateTabScrollPosition();
      }
      get focusIndex() {
        return this._keyManager ? this._keyManager.activeItemIndex : 0;
      }
      set focusIndex(e) {
        !this._isValidIndex(e) ||
          this.focusIndex === e ||
          !this._keyManager ||
          this._keyManager.setActiveItem(e);
      }
      _isValidIndex(e) {
        return this._items ? !!this._items.toArray()[e] : !0;
      }
      _setTabFocus(e) {
        if (
          (this._showPaginationControls && this._scrollToLabel(e),
          this._items && this._items.length)
        ) {
          this._items.toArray()[e].focus();
          let i = this._tabListContainer.nativeElement;
          this._getLayoutDirection() == "ltr"
            ? (i.scrollLeft = 0)
            : (i.scrollLeft = i.scrollWidth - i.offsetWidth);
        }
      }
      _getLayoutDirection() {
        return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
      }
      _updateTabScrollPosition() {
        if (this.disablePagination) return;
        let e = this.scrollDistance,
          i = this._getLayoutDirection() === "ltr" ? -e : e;
        (this._tabList.nativeElement.style.transform = `translateX(${Math.round(i)}px)`),
          (this._platform.TRIDENT || this._platform.EDGE) &&
            (this._tabListContainer.nativeElement.scrollLeft = 0);
      }
      get scrollDistance() {
        return this._scrollDistance;
      }
      set scrollDistance(e) {
        this._scrollTo(e);
      }
      _scrollHeader(e) {
        let i = this._tabListContainer.nativeElement.offsetWidth,
          o = ((e == "before" ? -1 : 1) * i) / 3;
        return this._scrollTo(this._scrollDistance + o);
      }
      _handlePaginatorClick(e) {
        this._stopInterval(), this._scrollHeader(e);
      }
      _scrollToLabel(e) {
        if (this.disablePagination) return;
        let i = this._items ? this._items.toArray()[e] : null;
        if (!i) return;
        let o = this._tabListContainer.nativeElement.offsetWidth,
          { offsetLeft: a, offsetWidth: s } = i.elementRef.nativeElement,
          c,
          l;
        this._getLayoutDirection() == "ltr"
          ? ((c = a), (l = c + s))
          : ((l = this._tabListInner.nativeElement.offsetWidth - a),
            (c = l - s));
        let h = this.scrollDistance,
          p = this.scrollDistance + o;
        c < h
          ? (this.scrollDistance -= h - c)
          : l > p && (this.scrollDistance += Math.min(l - p, c - h));
      }
      _checkPaginationEnabled() {
        if (this.disablePagination) this._showPaginationControls = !1;
        else {
          let e = this._tabListInner.nativeElement.scrollWidth,
            i = this._elementRef.nativeElement.offsetWidth,
            o = e - i >= 5;
          o || (this.scrollDistance = 0),
            o !== this._showPaginationControls &&
              ((this._showPaginationControls = o),
              this._changeDetectorRef.markForCheck());
        }
      }
      _checkScrollingControls() {
        this.disablePagination
          ? (this._disableScrollAfter = this._disableScrollBefore = !0)
          : ((this._disableScrollBefore = this.scrollDistance == 0),
            (this._disableScrollAfter =
              this.scrollDistance == this._getMaxScrollDistance()),
            this._changeDetectorRef.markForCheck());
      }
      _getMaxScrollDistance() {
        let e = this._tabListInner.nativeElement.scrollWidth,
          i = this._tabListContainer.nativeElement.offsetWidth;
        return e - i || 0;
      }
      _alignInkBarToSelectedTab() {
        let e =
            this._items && this._items.length
              ? this._items.toArray()[this.selectedIndex]
              : null,
          i = e ? e.elementRef.nativeElement : null;
        i ? this._inkBar.alignToElement(i) : this._inkBar.hide();
      }
      _stopInterval() {
        this._stopScrolling.next();
      }
      _handlePaginatorPress(e, i) {
        (i && i.button != null && i.button !== 0) ||
          (this._stopInterval(),
          oc(Bg, zg)
            .pipe(z(At(this._stopScrolling, this._destroyed)))
            .subscribe(() => {
              let { maxScrollDistance: o, distance: a } = this._scrollHeader(e);
              (a === 0 || a >= o) && this._stopInterval();
            }));
      }
      _scrollTo(e) {
        if (this.disablePagination)
          return { maxScrollDistance: 0, distance: 0 };
        let i = this._getMaxScrollDistance();
        return (
          (this._scrollDistance = Math.max(0, Math.min(i, e))),
          (this._scrollDistanceChanged = !0),
          this._checkScrollingControls(),
          { maxScrollDistance: i, distance: this._scrollDistance }
        );
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(E), d(ot), d(Fe), d(wt, 8), d(S), d(q), d(mt, 8));
    }),
      (t.ɵdir = M({
        type: t,
        inputs: {
          disablePagination: [2, "disablePagination", "disablePagination", H],
          selectedIndex: [2, "selectedIndex", "selectedIndex", ae],
        },
        outputs: {
          selectFocusedIndex: "selectFocusedIndex",
          indexFocused: "indexFocused",
        },
        features: [st],
      }));
    let n = t;
    return n;
  })(),
  Hg = (() => {
    let t = class t extends Ug {
      constructor(e, i, o, a, s, c, l) {
        super(e, i, o, a, s, c, l), (this.disableRipple = !1);
      }
      ngAfterContentInit() {
        (this._inkBar = new Ns(this._items)), super.ngAfterContentInit();
      }
      _itemSelected(e) {
        e.preventDefault();
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(E), d(ot), d(Fe), d(wt, 8), d(S), d(q), d(mt, 8));
    }),
      (t.ɵcmp = I({
        type: t,
        selectors: [["mat-tab-header"]],
        contentQueries: function (i, o, a) {
          if ((i & 1 && ct(a, oh, 4), i & 2)) {
            let s;
            P((s = N())) && (o._items = s);
          }
        },
        viewQuery: function (i, o) {
          if (
            (i & 1 && (pt(_g, 7), pt(yg, 7), pt(wg, 7), pt(xg, 5), pt(Cg, 5)),
            i & 2)
          ) {
            let a;
            P((a = N())) && (o._tabListContainer = a.first),
              P((a = N())) && (o._tabList = a.first),
              P((a = N())) && (o._tabListInner = a.first),
              P((a = N())) && (o._nextPaginator = a.first),
              P((a = N())) && (o._previousPaginator = a.first);
          }
        },
        hostAttrs: [1, "mat-mdc-tab-header"],
        hostVars: 4,
        hostBindings: function (i, o) {
          i & 2 &&
            V(
              "mat-mdc-tab-header-pagination-controls-enabled",
              o._showPaginationControls,
            )("mat-mdc-tab-header-rtl", o._getLayoutDirection() == "rtl");
        },
        inputs: {
          ariaLabel: [0, "aria-label", "ariaLabel"],
          ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
          disableRipple: [2, "disableRipple", "disableRipple", H],
        },
        standalone: !0,
        features: [st, it, U],
        ngContentSelectors: Vs,
        decls: 13,
        vars: 10,
        consts: [
          ["previousPaginator", ""],
          ["tabListContainer", ""],
          ["tabList", ""],
          ["tabListInner", ""],
          ["nextPaginator", ""],
          [
            "mat-ripple",
            "",
            1,
            "mat-mdc-tab-header-pagination",
            "mat-mdc-tab-header-pagination-before",
            3,
            "click",
            "mousedown",
            "touchend",
            "matRippleDisabled",
          ],
          [1, "mat-mdc-tab-header-pagination-chevron"],
          [1, "mat-mdc-tab-label-container", 3, "keydown"],
          ["role", "tablist", 1, "mat-mdc-tab-list", 3, "cdkObserveContent"],
          [1, "mat-mdc-tab-labels"],
          [
            "mat-ripple",
            "",
            1,
            "mat-mdc-tab-header-pagination",
            "mat-mdc-tab-header-pagination-after",
            3,
            "mousedown",
            "click",
            "touchend",
            "matRippleDisabled",
          ],
        ],
        template: function (i, o) {
          if (i & 1) {
            let a = jt();
            J(),
              u(0, "div", 5, 0),
              Y("click", function () {
                return ht(a), ut(o._handlePaginatorClick("before"));
              })("mousedown", function (c) {
                return ht(a), ut(o._handlePaginatorPress("before", c));
              })("touchend", function () {
                return ht(a), ut(o._stopInterval());
              }),
              T(2, "div", 6),
              m(),
              u(3, "div", 7, 1),
              Y("keydown", function (c) {
                return ht(a), ut(o._handleKeydown(c));
              }),
              u(5, "div", 8, 2),
              Y("cdkObserveContent", function () {
                return ht(a), ut(o._onContentChanges());
              }),
              u(7, "div", 9, 3),
              F(9),
              m()()(),
              u(10, "div", 10, 4),
              Y("mousedown", function (c) {
                return ht(a), ut(o._handlePaginatorPress("after", c));
              })("click", function () {
                return ht(a), ut(o._handlePaginatorClick("after"));
              })("touchend", function () {
                return ht(a), ut(o._stopInterval());
              }),
              T(12, "div", 6),
              m();
          }
          i & 2 &&
            (V(
              "mat-mdc-tab-header-pagination-disabled",
              o._disableScrollBefore,
            ),
            Q("matRippleDisabled", o._disableScrollBefore || o.disableRipple),
            D(3),
            V("_mat-animation-noopable", o._animationMode === "NoopAnimations"),
            D(2),
            G("aria-label", o.ariaLabel || null)(
              "aria-labelledby",
              o.ariaLabelledby || null,
            ),
            D(5),
            V("mat-mdc-tab-header-pagination-disabled", o._disableScrollAfter),
            Q("matRippleDisabled", o._disableScrollAfter || o.disableRipple));
        },
        dependencies: [Xr, ld],
        styles: [
          ".mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-header-pagination-icon-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-header-divider-height);border-bottom-color:var(--mat-tab-header-divider-color, var(--mat-app-surface-variant))}.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container{border-bottom:none;border-top-style:solid;border-top-width:var(--mat-tab-header-divider-height);border-top-color:var(--mat-tab-header-divider-color, var(--mat-app-surface-variant))}.mat-mdc-tab-labels{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-labels,.mat-mdc-tab-labels.cdk-drop-list{min-height:var(--mdc-secondary-navigation-tab-container-height)}.mat-mdc-tab::before{margin:5px}.cdk-high-contrast-active .mat-mdc-tab[aria-disabled=true]{color:GrayText}",
        ],
        encapsulation: 2,
      }));
    let n = t;
    return n;
  })(),
  $g = new C("MAT_TABS_CONFIG"),
  Wg = {
    translateTab: br("translateTab", [
      Ze(
        "center, void, left-origin-center, right-origin-center",
        ce({ transform: "none", visibility: "visible" }),
      ),
      Ze(
        "left",
        ce({
          transform: "translate3d(-100%, 0, 0)",
          minHeight: "1px",
          visibility: "hidden",
        }),
      ),
      Ze(
        "right",
        ce({
          transform: "translate3d(100%, 0, 0)",
          minHeight: "1px",
          visibility: "hidden",
        }),
      ),
      Ke(
        "* => left, * => right, left => center, right => center",
        Ye("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)"),
      ),
      Ke("void => left-origin-center", [
        ce({ transform: "translate3d(-100%, 0, 0)", visibility: "hidden" }),
        Ye("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)"),
      ]),
      Ke("void => right-origin-center", [
        ce({ transform: "translate3d(100%, 0, 0)", visibility: "hidden" }),
        Ye("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)"),
      ]),
    ]),
  },
  Gg = (() => {
    let t = class t extends fe {
      constructor(e, i, o, a) {
        super(e, i, a),
          (this._host = o),
          (this._centeringSub = Et.EMPTY),
          (this._leavingSub = Et.EMPTY);
      }
      ngOnInit() {
        super.ngOnInit(),
          (this._centeringSub = this._host._beforeCentering
            .pipe(vt(this._host._isCenterPosition(this._host._position)))
            .subscribe((e) => {
              this._host._content &&
                e &&
                !this.hasAttached() &&
                this.attach(this._host._content);
            })),
          (this._leavingSub = this._host._afterLeavingCenter.subscribe(() => {
            this._host.preserveContent || this.detach();
          }));
      }
      ngOnDestroy() {
        super.ngOnDestroy(),
          this._centeringSub.unsubscribe(),
          this._leavingSub.unsubscribe();
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(bi), d(Wt), d(Ce(() => ah)), d(k));
    }),
      (t.ɵdir = M({
        type: t,
        selectors: [["", "matTabBodyHost", ""]],
        standalone: !0,
        features: [it],
      }));
    let n = t;
    return n;
  })(),
  ah = (() => {
    let t = class t {
      set position(e) {
        (this._positionIndex = e), this._computePositionAnimationState();
      }
      constructor(e, i, o) {
        (this._elementRef = e),
          (this._dir = i),
          (this._dirChangeSubscription = Et.EMPTY),
          (this._translateTabComplete = new w()),
          (this._onCentering = new O()),
          (this._beforeCentering = new O()),
          (this._afterLeavingCenter = new O()),
          (this._onCentered = new O(!0)),
          (this.animationDuration = "500ms"),
          (this.preserveContent = !1),
          i &&
            (this._dirChangeSubscription = i.change.subscribe((a) => {
              this._computePositionAnimationState(a), o.markForCheck();
            })),
          this._translateTabComplete
            .pipe(
              Ue(
                (a, s) =>
                  a.fromState === s.fromState && a.toState === s.toState,
              ),
            )
            .subscribe((a) => {
              this._isCenterPosition(a.toState) &&
                this._isCenterPosition(this._position) &&
                this._onCentered.emit(),
                this._isCenterPosition(a.fromState) &&
                  !this._isCenterPosition(this._position) &&
                  this._afterLeavingCenter.emit();
            });
      }
      ngOnInit() {
        this._position == "center" &&
          this.origin != null &&
          (this._position = this._computePositionFromOrigin(this.origin));
      }
      ngOnDestroy() {
        this._dirChangeSubscription.unsubscribe(),
          this._translateTabComplete.complete();
      }
      _onTranslateTabStarted(e) {
        let i = this._isCenterPosition(e.toState);
        this._beforeCentering.emit(i),
          i &&
            this._onCentering.emit(this._elementRef.nativeElement.clientHeight);
      }
      _getLayoutDirection() {
        return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
      }
      _isCenterPosition(e) {
        return (
          e == "center" ||
          e == "left-origin-center" ||
          e == "right-origin-center"
        );
      }
      _computePositionAnimationState(e = this._getLayoutDirection()) {
        this._positionIndex < 0
          ? (this._position = e == "ltr" ? "left" : "right")
          : this._positionIndex > 0
            ? (this._position = e == "ltr" ? "right" : "left")
            : (this._position = "center");
      }
      _computePositionFromOrigin(e) {
        let i = this._getLayoutDirection();
        return (i == "ltr" && e <= 0) || (i == "rtl" && e > 0)
          ? "left-origin-center"
          : "right-origin-center";
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(E), d(wt, 8), d(ot));
    }),
      (t.ɵcmp = I({
        type: t,
        selectors: [["mat-tab-body"]],
        viewQuery: function (i, o) {
          if ((i & 1 && pt(fe, 5), i & 2)) {
            let a;
            P((a = N())) && (o._portalHost = a.first);
          }
        },
        hostAttrs: [1, "mat-mdc-tab-body"],
        inputs: {
          _content: [0, "content", "_content"],
          origin: "origin",
          animationDuration: "animationDuration",
          preserveContent: "preserveContent",
          position: "position",
        },
        outputs: {
          _onCentering: "_onCentering",
          _beforeCentering: "_beforeCentering",
          _afterLeavingCenter: "_afterLeavingCenter",
          _onCentered: "_onCentered",
        },
        standalone: !0,
        features: [U],
        decls: 3,
        vars: 6,
        consts: [
          ["content", ""],
          ["cdkScrollable", "", 1, "mat-mdc-tab-body-content"],
          ["matTabBodyHost", ""],
        ],
        template: function (i, o) {
          if (i & 1) {
            let a = jt();
            u(0, "div", 1, 0),
              Y("@translateTab.start", function (c) {
                return ht(a), ut(o._onTranslateTabStarted(c));
              })("@translateTab.done", function (c) {
                return ht(a), ut(o._translateTabComplete.next(c));
              }),
              K(2, Dg, 0, 0, "ng-template", 2),
              m();
          }
          i & 2 &&
            Q(
              "@translateTab",
              Fc(3, Eg, o._position, Oc(1, Ig, o.animationDuration)),
            );
        },
        dependencies: [Gg, $i],
        styles: [
          '.mat-mdc-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-mdc-tab-body.mat-mdc-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active{overflow-y:hidden}.mat-mdc-tab-body-content{height:100%;overflow:auto}.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content{overflow:hidden}.mat-mdc-tab-body-content[style*="visibility: hidden"]{display:none}',
        ],
        encapsulation: 2,
        data: { animation: [Wg.translateTab] },
      }));
    let n = t;
    return n;
  })(),
  qg = 0,
  Qg = !0,
  lo = (() => {
    let t = class t {
      get fitInkBarToContent() {
        return this._fitInkBarToContent;
      }
      set fitInkBarToContent(e) {
        (this._fitInkBarToContent = e), this._changeDetectorRef.markForCheck();
      }
      get selectedIndex() {
        return this._selectedIndex;
      }
      set selectedIndex(e) {
        this._indexToSelect = isNaN(e) ? null : e;
      }
      get animationDuration() {
        return this._animationDuration;
      }
      set animationDuration(e) {
        let i = e + "";
        this._animationDuration = /^\d+$/.test(i) ? e + "ms" : i;
      }
      get contentTabIndex() {
        return this._contentTabIndex;
      }
      set contentTabIndex(e) {
        this._contentTabIndex = isNaN(e) ? null : e;
      }
      get backgroundColor() {
        return this._backgroundColor;
      }
      set backgroundColor(e) {
        if (!Qg)
          throw new Error(
            "mat-tab-group background color must be set through the Sass theming API",
          );
        let i = this._elementRef.nativeElement.classList;
        i.remove(
          "mat-tabs-with-background",
          `mat-background-${this.backgroundColor}`,
        ),
          e && i.add("mat-tabs-with-background", `mat-background-${e}`),
          (this._backgroundColor = e);
      }
      constructor(e, i, o, a) {
        (this._elementRef = e),
          (this._changeDetectorRef = i),
          (this._animationMode = a),
          (this._tabs = new re()),
          (this._indexToSelect = 0),
          (this._lastFocusedTabIndex = null),
          (this._tabBodyWrapperHeight = 0),
          (this._tabsSubscription = Et.EMPTY),
          (this._tabLabelSubscription = Et.EMPTY),
          (this._fitInkBarToContent = !1),
          (this.stretchTabs = !0),
          (this.dynamicHeight = !1),
          (this._selectedIndex = null),
          (this.headerPosition = "above"),
          (this.disablePagination = !1),
          (this.disableRipple = !1),
          (this.preserveContent = !1),
          (this.selectedIndexChange = new O()),
          (this.focusChange = new O()),
          (this.animationDone = new O()),
          (this.selectedTabChange = new O(!0)),
          (this._isServer = !v(q).isBrowser),
          (this._groupId = qg++),
          (this.animationDuration =
            o && o.animationDuration ? o.animationDuration : "500ms"),
          (this.disablePagination =
            o && o.disablePagination != null ? o.disablePagination : !1),
          (this.dynamicHeight =
            o && o.dynamicHeight != null ? o.dynamicHeight : !1),
          o?.contentTabIndex != null &&
            (this.contentTabIndex = o.contentTabIndex),
          (this.preserveContent = !!o?.preserveContent),
          (this.fitInkBarToContent =
            o && o.fitInkBarToContent != null ? o.fitInkBarToContent : !1),
          (this.stretchTabs = o && o.stretchTabs != null ? o.stretchTabs : !0);
      }
      ngAfterContentChecked() {
        let e = (this._indexToSelect = this._clampTabIndex(
          this._indexToSelect,
        ));
        if (this._selectedIndex != e) {
          let i = this._selectedIndex == null;
          if (!i) {
            this.selectedTabChange.emit(this._createChangeEvent(e));
            let o = this._tabBodyWrapper.nativeElement;
            o.style.minHeight = o.clientHeight + "px";
          }
          Promise.resolve().then(() => {
            this._tabs.forEach((o, a) => (o.isActive = a === e)),
              i ||
                (this.selectedIndexChange.emit(e),
                (this._tabBodyWrapper.nativeElement.style.minHeight = ""));
          });
        }
        this._tabs.forEach((i, o) => {
          (i.position = o - e),
            this._selectedIndex != null &&
              i.position == 0 &&
              !i.origin &&
              (i.origin = e - this._selectedIndex);
        }),
          this._selectedIndex !== e &&
            ((this._selectedIndex = e),
            (this._lastFocusedTabIndex = null),
            this._changeDetectorRef.markForCheck());
      }
      ngAfterContentInit() {
        this._subscribeToAllTabChanges(),
          this._subscribeToTabLabels(),
          (this._tabsSubscription = this._tabs.changes.subscribe(() => {
            let e = this._clampTabIndex(this._indexToSelect);
            if (e === this._selectedIndex) {
              let i = this._tabs.toArray(),
                o;
              for (let a = 0; a < i.length; a++)
                if (i[a].isActive) {
                  (this._indexToSelect = this._selectedIndex = a),
                    (this._lastFocusedTabIndex = null),
                    (o = i[a]);
                  break;
                }
              !o &&
                i[e] &&
                Promise.resolve().then(() => {
                  (i[e].isActive = !0),
                    this.selectedTabChange.emit(this._createChangeEvent(e));
                });
            }
            this._changeDetectorRef.markForCheck();
          }));
      }
      _subscribeToAllTabChanges() {
        this._allTabs.changes.pipe(vt(this._allTabs)).subscribe((e) => {
          this._tabs.reset(
            e.filter((i) => i._closestTabGroup === this || !i._closestTabGroup),
          ),
            this._tabs.notifyOnChanges();
        });
      }
      ngOnDestroy() {
        this._tabs.destroy(),
          this._tabsSubscription.unsubscribe(),
          this._tabLabelSubscription.unsubscribe();
      }
      realignInkBar() {
        this._tabHeader && this._tabHeader._alignInkBarToSelectedTab();
      }
      updatePagination() {
        this._tabHeader && this._tabHeader.updatePagination();
      }
      focusTab(e) {
        let i = this._tabHeader;
        i && (i.focusIndex = e);
      }
      _focusChanged(e) {
        (this._lastFocusedTabIndex = e),
          this.focusChange.emit(this._createChangeEvent(e));
      }
      _createChangeEvent(e) {
        let i = new Ls();
        return (
          (i.index = e),
          this._tabs && this._tabs.length && (i.tab = this._tabs.toArray()[e]),
          i
        );
      }
      _subscribeToTabLabels() {
        this._tabLabelSubscription && this._tabLabelSubscription.unsubscribe(),
          (this._tabLabelSubscription = At(
            ...this._tabs.map((e) => e._stateChanges),
          ).subscribe(() => this._changeDetectorRef.markForCheck()));
      }
      _clampTabIndex(e) {
        return Math.min(this._tabs.length - 1, Math.max(e || 0, 0));
      }
      _getTabLabelId(e) {
        return `mat-tab-label-${this._groupId}-${e}`;
      }
      _getTabContentId(e) {
        return `mat-tab-content-${this._groupId}-${e}`;
      }
      _setTabBodyWrapperHeight(e) {
        if (!this.dynamicHeight || !this._tabBodyWrapperHeight) return;
        let i = this._tabBodyWrapper.nativeElement;
        (i.style.height = this._tabBodyWrapperHeight + "px"),
          this._tabBodyWrapper.nativeElement.offsetHeight &&
            (i.style.height = e + "px");
      }
      _removeTabBodyWrapperHeight() {
        let e = this._tabBodyWrapper.nativeElement;
        (this._tabBodyWrapperHeight = e.clientHeight),
          (e.style.height = ""),
          this.animationDone.emit();
      }
      _handleClick(e, i, o) {
        (i.focusIndex = o), e.disabled || (this.selectedIndex = o);
      }
      _getTabIndex(e) {
        let i = this._lastFocusedTabIndex ?? this.selectedIndex;
        return e === i ? 0 : -1;
      }
      _tabFocusChanged(e, i) {
        e && e !== "mouse" && e !== "touch" && (this._tabHeader.focusIndex = i);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(E), d(ot), d($g, 8), d(mt, 8));
    }),
      (t.ɵcmp = I({
        type: t,
        selectors: [["mat-tab-group"]],
        contentQueries: function (i, o, a) {
          if ((i & 1 && ct(a, Gn, 5), i & 2)) {
            let s;
            P((s = N())) && (o._allTabs = s);
          }
        },
        viewQuery: function (i, o) {
          if ((i & 1 && (pt(Sg, 5), pt(kg, 5)), i & 2)) {
            let a;
            P((a = N())) && (o._tabBodyWrapper = a.first),
              P((a = N())) && (o._tabHeader = a.first);
          }
        },
        hostAttrs: [1, "mat-mdc-tab-group"],
        hostVars: 10,
        hostBindings: function (i, o) {
          i & 2 &&
            (Tt("mat-" + (o.color || "primary")),
            on("--mat-tab-animation-duration", o.animationDuration),
            V("mat-mdc-tab-group-dynamic-height", o.dynamicHeight)(
              "mat-mdc-tab-group-inverted-header",
              o.headerPosition === "below",
            )("mat-mdc-tab-group-stretch-tabs", o.stretchTabs));
        },
        inputs: {
          color: "color",
          fitInkBarToContent: [
            2,
            "fitInkBarToContent",
            "fitInkBarToContent",
            H,
          ],
          stretchTabs: [2, "mat-stretch-tabs", "stretchTabs", H],
          dynamicHeight: [2, "dynamicHeight", "dynamicHeight", H],
          selectedIndex: [2, "selectedIndex", "selectedIndex", ae],
          headerPosition: "headerPosition",
          animationDuration: "animationDuration",
          contentTabIndex: [2, "contentTabIndex", "contentTabIndex", ae],
          disablePagination: [2, "disablePagination", "disablePagination", H],
          disableRipple: [2, "disableRipple", "disableRipple", H],
          preserveContent: [2, "preserveContent", "preserveContent", H],
          backgroundColor: "backgroundColor",
          ariaLabel: [0, "aria-label", "ariaLabel"],
          ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
        },
        outputs: {
          selectedIndexChange: "selectedIndexChange",
          focusChange: "focusChange",
          animationDone: "animationDone",
          selectedTabChange: "selectedTabChange",
        },
        exportAs: ["matTabGroup"],
        standalone: !0,
        features: [gt([{ provide: rh, useExisting: t }]), st, U],
        ngContentSelectors: Vs,
        decls: 9,
        vars: 8,
        consts: [
          ["tabHeader", ""],
          ["tabBodyWrapper", ""],
          ["tabNode", ""],
          [
            3,
            "indexFocused",
            "selectFocusedIndex",
            "selectedIndex",
            "disableRipple",
            "disablePagination",
            "aria-label",
            "aria-labelledby",
          ],
          [
            "role",
            "tab",
            "matTabLabelWrapper",
            "",
            "cdkMonitorElementFocus",
            "",
            1,
            "mdc-tab",
            "mat-mdc-tab",
            "mat-mdc-focus-indicator",
            3,
            "id",
            "mdc-tab--active",
            "class",
            "disabled",
            "fitInkBarToContent",
          ],
          [1, "mat-mdc-tab-body-wrapper"],
          [
            "role",
            "tabpanel",
            3,
            "id",
            "mat-mdc-tab-body-active",
            "class",
            "content",
            "position",
            "origin",
            "animationDuration",
            "preserveContent",
          ],
          [
            "role",
            "tab",
            "matTabLabelWrapper",
            "",
            "cdkMonitorElementFocus",
            "",
            1,
            "mdc-tab",
            "mat-mdc-tab",
            "mat-mdc-focus-indicator",
            3,
            "click",
            "cdkFocusChange",
            "id",
            "disabled",
            "fitInkBarToContent",
          ],
          [1, "mdc-tab__ripple"],
          [
            "mat-ripple",
            "",
            1,
            "mat-mdc-tab-ripple",
            3,
            "matRippleTrigger",
            "matRippleDisabled",
          ],
          [1, "mdc-tab__content"],
          [1, "mdc-tab__text-label"],
          [3, "cdkPortalOutlet"],
          [
            "role",
            "tabpanel",
            3,
            "_onCentered",
            "_onCentering",
            "id",
            "content",
            "position",
            "origin",
            "animationDuration",
            "preserveContent",
          ],
        ],
        template: function (i, o) {
          if (i & 1) {
            let a = jt();
            J(),
              u(0, "mat-tab-header", 3, 0),
              Y("indexFocused", function (c) {
                return ht(a), ut(o._focusChanged(c));
              })("selectFocusedIndex", function (c) {
                return ht(a), ut((o.selectedIndex = c));
              }),
              Se(2, Mg, 8, 17, "div", 4, De),
              m(),
              K(4, Og, 1, 0),
              u(5, "div", 5, 1),
              Se(7, Fg, 1, 13, "mat-tab-body", 6, De),
              m();
          }
          i & 2 &&
            (Q("selectedIndex", o.selectedIndex || 0)(
              "disableRipple",
              o.disableRipple,
            )("disablePagination", o.disablePagination)(
              "aria-label",
              o.ariaLabel,
            )("aria-labelledby", o.ariaLabelledby),
            D(2),
            ke(o._tabs),
            D(2),
            ft(o._isServer ? 4 : -1),
            D(),
            V("_mat-animation-noopable", o._animationMode === "NoopAnimations"),
            D(2),
            ke(o._tabs));
        },
        dependencies: [Hg, oh, vd, Xr, fe, ah],
        styles: [
          '.mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mdc-secondary-navigation-tab-container-height);font-family:var(--mat-tab-header-label-text-font, var(--mat-app-title-small-font));font-size:var(--mat-tab-header-label-text-size, var(--mat-app-title-small-size));letter-spacing:var(--mat-tab-header-label-text-tracking, var(--mat-app-title-small-tracking));line-height:var(--mat-tab-header-label-text-line-height, var(--mat-app-title-small-line-height));font-weight:var(--mat-tab-header-label-text-weight, var(--mat-app-title-small-weight))}.mat-mdc-tab.mdc-tab{flex-grow:0}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-color:var(--mdc-tab-indicator-active-indicator-color, var(--mat-app-primary));border-top-width:var(--mdc-tab-indicator-active-indicator-height);border-radius:var(--mdc-tab-indicator-active-indicator-shape)}.mat-mdc-tab:hover .mdc-tab__text-label{color:var(--mat-tab-header-inactive-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab:focus .mdc-tab__text-label{color:var(--mat-tab-header-inactive-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-header-active-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-header-active-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-header-active-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-hover-indicator-color, var(--mat-app-primary))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-header-active-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-focus-indicator-color, var(--mat-app-primary))}.mat-mdc-tab.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-header-disabled-ripple-color)}.mat-mdc-tab .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-inactive-label-text-color, var(--mat-app-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs>.mat-mdc-tab-header .mat-mdc-tab{flex-grow:1}.mat-mdc-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-header-with-background-background-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-focus-indicator::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-focus-indicator::before{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab__ripple::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header{flex-direction:column-reverse}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline{align-self:flex-start}.mat-mdc-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}',
        ],
        encapsulation: 2,
      }));
    let n = t;
    return n;
  })(),
  Ls = class {};
var sh = ["mat-button", ""],
  ch = [
    [
      ["", 8, "material-icons", 3, "iconPositionEnd", ""],
      ["mat-icon", 3, "iconPositionEnd", ""],
      ["", "matButtonIcon", "", 3, "iconPositionEnd", ""],
    ],
    "*",
    [
      ["", "iconPositionEnd", "", 8, "material-icons"],
      ["mat-icon", "iconPositionEnd", ""],
      ["", "matButtonIcon", "", "iconPositionEnd", ""],
    ],
  ],
  lh = [
    ".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])",
    "*",
    ".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]",
  ],
  Zg =
    '.mat-mdc-button-base{text-decoration:none}.mdc-button{-webkit-user-select:none;user-select:none;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0);padding:0 8px}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__label{position:relative}.mat-mdc-button{padding:0 var(--mat-text-button-horizontal-padding, 8px);height:var(--mdc-text-button-container-height);font-family:var(--mdc-text-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-text-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-text-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-text-button-label-text-transform);font-weight:var(--mdc-text-button-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-button:has(.material-icons,mat-icon,[matButtonIcon]){padding:0 var(--mat-text-button-with-icon-horizontal-padding, 8px)}.mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}[dir=rtl] .mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}.mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}.mat-mdc-button .mat-ripple-element{background-color:var(--mat-text-button-ripple-color)}.mat-mdc-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-state-layer-color, var(--mat-app-primary))}.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-text-button-touch-target-display)}.mat-mdc-button,.mat-mdc-button .mdc-button__ripple{border-radius:var(--mdc-text-button-container-shape, var(--mat-app-corner-full))}.mat-mdc-button:not(:disabled){color:var(--mdc-text-button-label-text-color, var(--mat-app-primary))}.mat-mdc-button[disabled],.mat-mdc-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-unelevated-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 var(--mat-filled-button-horizontal-padding, 16px);height:var(--mdc-filled-button-container-height);font-family:var(--mdc-filled-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-filled-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-filled-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-filled-button-label-text-transform);font-weight:var(--mdc-filled-button-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}.mat-mdc-unelevated-button .mat-ripple-element{background-color:var(--mat-filled-button-ripple-color)}.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-state-layer-color, var(--mat-app-on-primary))}.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-unelevated-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-unelevated-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-unelevated-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-unelevated-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-filled-button-touch-target-display)}.mat-mdc-unelevated-button:not(:disabled){color:var(--mdc-filled-button-label-text-color, var(--mat-app-on-primary));background-color:var(--mdc-filled-button-container-color, var(--mat-app-primary))}.mat-mdc-unelevated-button,.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mdc-filled-button-container-shape, var(--mat-app-corner-full))}.mat-mdc-unelevated-button[disabled],.mat-mdc-unelevated-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-filled-button-disabled-label-text-color);background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-raised-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 var(--mat-protected-button-horizontal-padding, 16px);box-shadow:var(--mdc-protected-button-container-elevation-shadow, var(--mat-app-level1));height:var(--mdc-protected-button-container-height);font-family:var(--mdc-protected-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-protected-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-protected-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-protected-button-label-text-transform);font-weight:var(--mdc-protected-button-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}.mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}.mat-mdc-raised-button .mat-ripple-element{background-color:var(--mat-protected-button-ripple-color)}.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-state-layer-color, var(--mat-app-primary))}.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-raised-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-raised-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-raised-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-raised-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-protected-button-touch-target-display)}.mat-mdc-raised-button:not(:disabled){color:var(--mdc-protected-button-label-text-color, var(--mat-app-primary));background-color:var(--mdc-protected-button-container-color, var(--mat-app-surface))}.mat-mdc-raised-button,.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mdc-protected-button-container-shape, var(--mat-app-corner-full))}.mat-mdc-raised-button:hover{box-shadow:var(--mdc-protected-button-hover-container-elevation-shadow, var(--mat-app-level2))}.mat-mdc-raised-button:focus{box-shadow:var(--mdc-protected-button-focus-container-elevation-shadow, var(--mat-app-level1))}.mat-mdc-raised-button:active,.mat-mdc-raised-button:focus:active{box-shadow:var(--mdc-protected-button-pressed-container-elevation-shadow, var(--mat-app-level1))}.mat-mdc-raised-button[disabled],.mat-mdc-raised-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-protected-button-disabled-label-text-color);background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button[disabled].mat-mdc-button-disabled,.mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled{box-shadow:var(--mdc-protected-button-disabled-container-elevation-shadow, var(--mat-app-level0))}.mat-mdc-raised-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 var(--mat-outlined-button-horizontal-padding, 15px);height:var(--mdc-outlined-button-container-height);font-family:var(--mdc-outlined-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-outlined-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-outlined-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-outlined-button-label-text-transform);font-weight:var(--mdc-outlined-button-label-text-weight, var(--mat-app-label-large-weight));border-radius:var(--mdc-outlined-button-container-shape, var(--mat-app-corner-full));border-width:var(--mdc-outlined-button-outline-width)}.mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-outlined-button-ripple-color)}.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-state-layer-color, var(--mat-app-primary))}.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-outlined-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-outlined-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-outlined-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-outlined-button-touch-target-display)}.mat-mdc-outlined-button:not(:disabled){color:var(--mdc-outlined-button-label-text-color, var(--mat-app-primary));border-color:var(--mdc-outlined-button-outline-color, var(--mat-app-outline))}.mat-mdc-outlined-button[disabled],.mat-mdc-outlined-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-outlined-button-disabled-label-text-color);border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button .mdc-button__ripple{border-width:var(--mdc-outlined-button-outline-width);border-style:solid;border-color:rgba(0,0,0,0)}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-button .mdc-button__label,.mat-mdc-button .mat-icon,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-unelevated-button .mat-icon,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-raised-button .mat-icon,.mat-mdc-outlined-button .mdc-button__label,.mat-mdc-outlined-button .mat-icon{z-index:1;position:relative}.mat-mdc-button .mat-mdc-focus-indicator,.mat-mdc-unelevated-button .mat-mdc-focus-indicator,.mat-mdc-raised-button .mat-mdc-focus-indicator,.mat-mdc-outlined-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-unelevated-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-raised-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-outlined-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon{display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px}.mat-mdc-unelevated-button .mat-mdc-focus-indicator::before,.mat-mdc-raised-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-outlined-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 3px)*-1)}',
  dh =
    ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}";
var Kg = ["mat-icon-button", ""],
  Xg = ["*"],
  Jg =
    '.mat-mdc-icon-button{-webkit-user-select:none;user-select:none;display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:rgba(0,0,0,0);fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;z-index:0;overflow:visible;border-radius:50%;flex-shrink:0;text-align:center;width:var(--mdc-icon-button-state-layer-size, 48px);height:var(--mdc-icon-button-state-layer-size, 48px);padding:calc(calc(var(--mdc-icon-button-state-layer-size, 48px) - var(--mdc-icon-button-icon-size, 24px)) / 2);font-size:var(--mdc-icon-button-icon-size);color:var(--mdc-icon-button-icon-color, var(--mat-app-on-surface-variant));-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-icon-button[disabled],.mat-mdc-icon-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-icon-button-disabled-icon-color)}.mat-mdc-icon-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-icon-button img,.mat-mdc-icon-button svg{width:var(--mdc-icon-button-icon-size);height:var(--mdc-icon-button-icon-size);vertical-align:baseline}.mat-mdc-icon-button .mat-mdc-button-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-icon-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-icon-button .mdc-button__label,.mat-mdc-icon-button .mat-icon{z-index:1;position:relative}.mat-mdc-icon-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-icon-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-icon-button .mat-ripple-element{background-color:var(--mat-icon-button-ripple-color)}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-icon-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-icon-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-icon-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-icon-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-icon-button-touch-target-display)}.mat-mdc-icon-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple{border-radius:50%}.mat-mdc-icon-button[hidden]{display:none}.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}',
  tb = new C("MAT_BUTTON_CONFIG");
var eb = [
    { attribute: "mat-button", mdcClasses: ["mdc-button", "mat-mdc-button"] },
    {
      attribute: "mat-flat-button",
      mdcClasses: [
        "mdc-button",
        "mdc-button--unelevated",
        "mat-mdc-unelevated-button",
      ],
    },
    {
      attribute: "mat-raised-button",
      mdcClasses: ["mdc-button", "mdc-button--raised", "mat-mdc-raised-button"],
    },
    {
      attribute: "mat-stroked-button",
      mdcClasses: [
        "mdc-button",
        "mdc-button--outlined",
        "mat-mdc-outlined-button",
      ],
    },
    {
      attribute: "mat-fab",
      mdcClasses: ["mdc-fab", "mat-mdc-fab-base", "mat-mdc-fab"],
    },
    {
      attribute: "mat-mini-fab",
      mdcClasses: [
        "mdc-fab",
        "mat-mdc-fab-base",
        "mdc-fab--mini",
        "mat-mdc-mini-fab",
      ],
    },
    {
      attribute: "mat-icon-button",
      mdcClasses: ["mdc-icon-button", "mat-mdc-icon-button"],
    },
  ],
  hh = (() => {
    let t = class t {
      get ripple() {
        return this._rippleLoader?.getRipple(this._elementRef.nativeElement);
      }
      set ripple(e) {
        this._rippleLoader?.attachRipple(this._elementRef.nativeElement, e);
      }
      get disableRipple() {
        return this._disableRipple;
      }
      set disableRipple(e) {
        (this._disableRipple = e), this._updateRippleDisabled();
      }
      get disabled() {
        return this._disabled;
      }
      set disabled(e) {
        (this._disabled = e), this._updateRippleDisabled();
      }
      constructor(e, i, o, a) {
        (this._elementRef = e),
          (this._platform = i),
          (this._ngZone = o),
          (this._animationMode = a),
          (this._focusMonitor = v(Ht)),
          (this._rippleLoader = v(Jr)),
          (this._isFab = !1),
          (this._disableRipple = !1),
          (this._disabled = !1);
        let s = v(tb, { optional: !0 }),
          c = e.nativeElement,
          l = c.classList;
        (this.disabledInteractive = s?.disabledInteractive ?? !1),
          (this.color = s?.color ?? null),
          this._rippleLoader?.configureRipple(c, {
            className: "mat-mdc-button-ripple",
          });
        for (let { attribute: h, mdcClasses: p } of eb)
          c.hasAttribute(h) && l.add(...p);
      }
      ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef, !0);
      }
      ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef),
          this._rippleLoader?.destroyRipple(this._elementRef.nativeElement);
      }
      focus(e = "program", i) {
        e
          ? this._focusMonitor.focusVia(this._elementRef.nativeElement, e, i)
          : this._elementRef.nativeElement.focus(i);
      }
      _getAriaDisabled() {
        return this.ariaDisabled != null
          ? this.ariaDisabled
          : this.disabled && this.disabledInteractive
            ? !0
            : null;
      }
      _getDisabledAttribute() {
        return this.disabledInteractive || !this.disabled ? null : !0;
      }
      _updateRippleDisabled() {
        this._rippleLoader?.setDisabled(
          this._elementRef.nativeElement,
          this.disableRipple || this.disabled,
        );
      }
    };
    (t.ɵfac = function (i) {
      Ge();
    }),
      (t.ɵdir = M({
        type: t,
        inputs: {
          color: "color",
          disableRipple: [2, "disableRipple", "disableRipple", H],
          disabled: [2, "disabled", "disabled", H],
          ariaDisabled: [2, "aria-disabled", "ariaDisabled", H],
          disabledInteractive: [
            2,
            "disabledInteractive",
            "disabledInteractive",
            H,
          ],
        },
        features: [st],
      }));
    let n = t;
    return n;
  })();
var uh = (() => {
    let t = class t extends hh {
      constructor(e, i, o, a) {
        super(e, i, o, a),
          (this._haltDisabledEvents = (s) => {
            this.disabled && (s.preventDefault(), s.stopImmediatePropagation());
          });
      }
      ngOnInit() {
        this._ngZone.runOutsideAngular(() => {
          this._elementRef.nativeElement.addEventListener(
            "click",
            this._haltDisabledEvents,
          );
        });
      }
      ngOnDestroy() {
        super.ngOnDestroy(),
          this._elementRef.nativeElement.removeEventListener(
            "click",
            this._haltDisabledEvents,
          );
      }
      _getAriaDisabled() {
        return this.ariaDisabled == null ? this.disabled : this.ariaDisabled;
      }
    };
    (t.ɵfac = function (i) {
      Ge();
    }),
      (t.ɵdir = M({
        type: t,
        inputs: {
          tabIndex: [
            2,
            "tabIndex",
            "tabIndex",
            (e) => (e == null ? void 0 : ae(e)),
          ],
        },
        features: [st, it],
      }));
    let n = t;
    return n;
  })(),
  ho = (() => {
    let t = class t extends hh {
      constructor(e, i, o, a) {
        super(e, i, o, a);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(E), d(q), d(S), d(mt, 8));
    }),
      (t.ɵcmp = I({
        type: t,
        selectors: [
          ["button", "mat-button", ""],
          ["button", "mat-raised-button", ""],
          ["button", "mat-flat-button", ""],
          ["button", "mat-stroked-button", ""],
        ],
        hostVars: 14,
        hostBindings: function (i, o) {
          i & 2 &&
            (G("disabled", o._getDisabledAttribute())(
              "aria-disabled",
              o._getAriaDisabled(),
            ),
            Tt(o.color ? "mat-" + o.color : ""),
            V("mat-mdc-button-disabled", o.disabled)(
              "mat-mdc-button-disabled-interactive",
              o.disabledInteractive,
            )("_mat-animation-noopable", o._animationMode === "NoopAnimations")(
              "mat-unthemed",
              !o.color,
            )("mat-mdc-button-base", !0));
        },
        exportAs: ["matButton"],
        standalone: !0,
        features: [it, U],
        attrs: sh,
        ngContentSelectors: lh,
        decls: 7,
        vars: 4,
        consts: [
          [1, "mat-mdc-button-persistent-ripple"],
          [1, "mdc-button__label"],
          [1, "mat-mdc-focus-indicator"],
          [1, "mat-mdc-button-touch-target"],
        ],
        template: function (i, o) {
          i & 1 &&
            (J(ch),
            T(0, "span", 0),
            F(1),
            u(2, "span", 1),
            F(3, 1),
            m(),
            F(4, 2),
            T(5, "span", 2)(6, "span", 3)),
            i & 2 &&
              V("mdc-button__ripple", !o._isFab)("mdc-fab__ripple", o._isFab);
        },
        styles: [
          '.mat-mdc-button-base{text-decoration:none}.mdc-button{-webkit-user-select:none;user-select:none;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0);padding:0 8px}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__label{position:relative}.mat-mdc-button{padding:0 var(--mat-text-button-horizontal-padding, 8px);height:var(--mdc-text-button-container-height);font-family:var(--mdc-text-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-text-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-text-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-text-button-label-text-transform);font-weight:var(--mdc-text-button-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-button:has(.material-icons,mat-icon,[matButtonIcon]){padding:0 var(--mat-text-button-with-icon-horizontal-padding, 8px)}.mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}[dir=rtl] .mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}.mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}.mat-mdc-button .mat-ripple-element{background-color:var(--mat-text-button-ripple-color)}.mat-mdc-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-state-layer-color, var(--mat-app-primary))}.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-text-button-touch-target-display)}.mat-mdc-button,.mat-mdc-button .mdc-button__ripple{border-radius:var(--mdc-text-button-container-shape, var(--mat-app-corner-full))}.mat-mdc-button:not(:disabled){color:var(--mdc-text-button-label-text-color, var(--mat-app-primary))}.mat-mdc-button[disabled],.mat-mdc-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-unelevated-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 var(--mat-filled-button-horizontal-padding, 16px);height:var(--mdc-filled-button-container-height);font-family:var(--mdc-filled-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-filled-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-filled-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-filled-button-label-text-transform);font-weight:var(--mdc-filled-button-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}.mat-mdc-unelevated-button .mat-ripple-element{background-color:var(--mat-filled-button-ripple-color)}.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-state-layer-color, var(--mat-app-on-primary))}.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-unelevated-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-unelevated-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-unelevated-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-unelevated-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-filled-button-touch-target-display)}.mat-mdc-unelevated-button:not(:disabled){color:var(--mdc-filled-button-label-text-color, var(--mat-app-on-primary));background-color:var(--mdc-filled-button-container-color, var(--mat-app-primary))}.mat-mdc-unelevated-button,.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mdc-filled-button-container-shape, var(--mat-app-corner-full))}.mat-mdc-unelevated-button[disabled],.mat-mdc-unelevated-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-filled-button-disabled-label-text-color);background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-raised-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 var(--mat-protected-button-horizontal-padding, 16px);box-shadow:var(--mdc-protected-button-container-elevation-shadow, var(--mat-app-level1));height:var(--mdc-protected-button-container-height);font-family:var(--mdc-protected-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-protected-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-protected-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-protected-button-label-text-transform);font-weight:var(--mdc-protected-button-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}.mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}.mat-mdc-raised-button .mat-ripple-element{background-color:var(--mat-protected-button-ripple-color)}.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-state-layer-color, var(--mat-app-primary))}.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-raised-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-raised-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-raised-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-raised-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-protected-button-touch-target-display)}.mat-mdc-raised-button:not(:disabled){color:var(--mdc-protected-button-label-text-color, var(--mat-app-primary));background-color:var(--mdc-protected-button-container-color, var(--mat-app-surface))}.mat-mdc-raised-button,.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mdc-protected-button-container-shape, var(--mat-app-corner-full))}.mat-mdc-raised-button:hover{box-shadow:var(--mdc-protected-button-hover-container-elevation-shadow, var(--mat-app-level2))}.mat-mdc-raised-button:focus{box-shadow:var(--mdc-protected-button-focus-container-elevation-shadow, var(--mat-app-level1))}.mat-mdc-raised-button:active,.mat-mdc-raised-button:focus:active{box-shadow:var(--mdc-protected-button-pressed-container-elevation-shadow, var(--mat-app-level1))}.mat-mdc-raised-button[disabled],.mat-mdc-raised-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-protected-button-disabled-label-text-color);background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button[disabled].mat-mdc-button-disabled,.mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled{box-shadow:var(--mdc-protected-button-disabled-container-elevation-shadow, var(--mat-app-level0))}.mat-mdc-raised-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 var(--mat-outlined-button-horizontal-padding, 15px);height:var(--mdc-outlined-button-container-height);font-family:var(--mdc-outlined-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-outlined-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-outlined-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-outlined-button-label-text-transform);font-weight:var(--mdc-outlined-button-label-text-weight, var(--mat-app-label-large-weight));border-radius:var(--mdc-outlined-button-container-shape, var(--mat-app-corner-full));border-width:var(--mdc-outlined-button-outline-width)}.mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-outlined-button-ripple-color)}.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-state-layer-color, var(--mat-app-primary))}.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-outlined-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-outlined-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-outlined-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-outlined-button-touch-target-display)}.mat-mdc-outlined-button:not(:disabled){color:var(--mdc-outlined-button-label-text-color, var(--mat-app-primary));border-color:var(--mdc-outlined-button-outline-color, var(--mat-app-outline))}.mat-mdc-outlined-button[disabled],.mat-mdc-outlined-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-outlined-button-disabled-label-text-color);border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button .mdc-button__ripple{border-width:var(--mdc-outlined-button-outline-width);border-style:solid;border-color:rgba(0,0,0,0)}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-button .mdc-button__label,.mat-mdc-button .mat-icon,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-unelevated-button .mat-icon,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-raised-button .mat-icon,.mat-mdc-outlined-button .mdc-button__label,.mat-mdc-outlined-button .mat-icon{z-index:1;position:relative}.mat-mdc-button .mat-mdc-focus-indicator,.mat-mdc-unelevated-button .mat-mdc-focus-indicator,.mat-mdc-raised-button .mat-mdc-focus-indicator,.mat-mdc-outlined-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-unelevated-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-raised-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-outlined-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon{display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px}.mat-mdc-unelevated-button .mat-mdc-focus-indicator::before,.mat-mdc-raised-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-outlined-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 3px)*-1)}',
          ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })(),
  uo = (() => {
    let t = class t extends uh {
      constructor(e, i, o, a) {
        super(e, i, o, a);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(E), d(q), d(S), d(mt, 8));
    }),
      (t.ɵcmp = I({
        type: t,
        selectors: [
          ["a", "mat-button", ""],
          ["a", "mat-raised-button", ""],
          ["a", "mat-flat-button", ""],
          ["a", "mat-stroked-button", ""],
        ],
        hostVars: 15,
        hostBindings: function (i, o) {
          i & 2 &&
            (G("disabled", o._getDisabledAttribute())(
              "tabindex",
              o.disabled && !o.disabledInteractive ? -1 : o.tabIndex,
            )("aria-disabled", o._getDisabledAttribute()),
            Tt(o.color ? "mat-" + o.color : ""),
            V("mat-mdc-button-disabled", o.disabled)(
              "mat-mdc-button-disabled-interactive",
              o.disabledInteractive,
            )("_mat-animation-noopable", o._animationMode === "NoopAnimations")(
              "mat-unthemed",
              !o.color,
            )("mat-mdc-button-base", !0));
        },
        exportAs: ["matButton", "matAnchor"],
        standalone: !0,
        features: [it, U],
        attrs: sh,
        ngContentSelectors: lh,
        decls: 7,
        vars: 4,
        consts: [
          [1, "mat-mdc-button-persistent-ripple"],
          [1, "mdc-button__label"],
          [1, "mat-mdc-focus-indicator"],
          [1, "mat-mdc-button-touch-target"],
        ],
        template: function (i, o) {
          i & 1 &&
            (J(ch),
            T(0, "span", 0),
            F(1),
            u(2, "span", 1),
            F(3, 1),
            m(),
            F(4, 2),
            T(5, "span", 2)(6, "span", 3)),
            i & 2 &&
              V("mdc-button__ripple", !o._isFab)("mdc-fab__ripple", o._isFab);
        },
        styles: [Zg, dh],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })();
var mh = (() => {
    let t = class t extends uh {
      constructor(e, i, o, a) {
        super(e, i, o, a);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(E), d(q), d(S), d(mt, 8));
    }),
      (t.ɵcmp = I({
        type: t,
        selectors: [["a", "mat-icon-button", ""]],
        hostVars: 15,
        hostBindings: function (i, o) {
          i & 2 &&
            (G("disabled", o._getDisabledAttribute())(
              "tabindex",
              o.disabled && !o.disabledInteractive ? -1 : o.tabIndex,
            )("aria-disabled", o._getDisabledAttribute()),
            Tt(o.color ? "mat-" + o.color : ""),
            V("mat-mdc-button-disabled", o.disabled)(
              "mat-mdc-button-disabled-interactive",
              o.disabledInteractive,
            )("_mat-animation-noopable", o._animationMode === "NoopAnimations")(
              "mat-unthemed",
              !o.color,
            )("mat-mdc-button-base", !0));
        },
        exportAs: ["matButton", "matAnchor"],
        standalone: !0,
        features: [it, U],
        attrs: Kg,
        ngContentSelectors: Xg,
        decls: 4,
        vars: 0,
        consts: [
          [1, "mat-mdc-button-persistent-ripple", "mdc-icon-button__ripple"],
          [1, "mat-mdc-focus-indicator"],
          [1, "mat-mdc-button-touch-target"],
        ],
        template: function (i, o) {
          i & 1 && (J(), T(0, "span", 0), F(1), T(2, "span", 1)(3, "span", 2));
        },
        styles: [Jg, dh],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })(),
  ph = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵmod = j({ type: t })),
      (t.ɵinj = L({ imports: [lt, us, lt] }));
    let n = t;
    return n;
  })();
function ib(n, t) {
  if (n & 1) {
    let r = jt();
    u(0, "mat-grid-tile")(1, "div", 9),
      Y("click", function () {
        let i = ht(r).$implicit,
          o = nt();
        return ut(o.openDialog(i.imagePath, i.title, i.downloadPath));
      }),
      T(2, "img", 10),
      m()();
  }
  if (n & 2) {
    let r = t.$implicit;
    D(2), qe("src", r.imagePath, oe);
  }
}
function nb(n, t) {
  if (n & 1) {
    let r = jt();
    u(0, "mat-grid-tile")(1, "div", 9),
      Y("click", function () {
        let i = ht(r).$implicit,
          o = nt();
        return ut(o.openDialog(i.imagePath, i.title, i.downloadPath));
      }),
      T(2, "img", 10),
      m()();
  }
  if (n & 2) {
    let r = t.$implicit;
    D(2), qe("src", r.imagePath, oe);
  }
}
var mo = class n {
    constructor(t) {
      this._sanitizer = t;
      this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(
        "https://www.youtube.com/embed/uGNTjFFQe0Q",
      );
    }
    dialog = v(Ss);
    safeUrl;
    artPreviews2D = [
      {
        imagePath: "images/2d-arts/20190510_213117.jpg",
        title: "Reindeer Chocolate Container",
      },
      { imagePath: "images/2d-arts/20191011_031313.jpg", title: "Dad" },
      { imagePath: "images/2d-arts/20191011_031604.jpg", title: "Mom" },
      {
        imagePath: "images/2d-arts/20210714_022552.jpg",
        title: "Angry Sprite",
      },
      {
        imagePath: "images/2d-arts/20230108_140402.jpg",
        title: "Fox on the Ceiling",
      },
      { imagePath: "images/2d-arts/balance-2.png" },
      { imagePath: "images/2d-arts/complete-design.png" },
      {
        imagePath: "images/2d-arts/penup_1706318368879502.jpg",
        title: "Shirt Biter",
      },
      {
        imagePath: "images/2d-arts/penup_1706318415146002.jpg",
        title: "Ninja Lead",
      },
    ];
    artPreviews3D = [
      {
        imagePath: "images/3d-arts/scooter.png",
        downloadPath:
          "https://drive.google.com/file/d/1o2LlOj4GUUE7DuFeem90_OkkUrpfMFBt/view?usp=sharing",
        title: "A Pink Scooter",
      },
      {
        imagePath: "images/3d-arts/ninja-lead.png",
        downloadPath:
          "https://drive.google.com/file/d/1LtFjYHlNEpXZfkPJgxYq1rFx2RN0GJWh/view?usp=sharing",
        title: "Ninja Lead - Who Rides the Scooter!",
      },
      {
        imagePath: "images/3d-arts/pagoda.png",
        downloadPath:
          "https://drive.google.com/file/d/1q6ysS2Gwie9guYgZFU4-dPXsT_-q06lE/view?usp=sharing",
        title: "A Pagoda",
      },
      {
        imagePath: "images/3d-arts/carriage.png",
        downloadPath:
          "https://drive.google.com/file/d/1YTdC36d23OsAIWAkJ193vso5rnlXHPvN/view?usp=sharing",
        title: "A Carriage",
      },
    ];
    openDialog(t, r, e) {
      this.dialog
        .open(zs, { data: { imagePath: t, title: r, downloadPath: e } })
        .afterClosed()
        .subscribe((o) => {
          console.log("dialog closed");
        });
    }
    static ɵfac = function (r) {
      return new (r || n)(d(mn));
    };
    static ɵcmp = I({
      type: n,
      selectors: [["app-artwork"]],
      decls: 25,
      vars: 1,
      consts: [
        ["label", "2D Arts"],
        ["cols", "3"],
        ["label", "3D Arts"],
        ["cols", "2"],
        ["label", "Videos"],
        [1, "video-title"],
        [2, "text-align", "center"],
        ["frameborder", "0", "allowfullscreen", "", 1, "video", 3, "src"],
        [1, "video-description"],
        [1, "image-card", 3, "click"],
        ["mat-card-image", "", 2, "width", "100%", 3, "src"],
      ],
      template: function (r, e) {
        r & 1 &&
          (u(0, "mat-tab-group")(1, "mat-tab", 0)(2, "mat-card")(
            3,
            "mat-grid-list",
            1,
          ),
          Se(4, ib, 3, 1, "mat-grid-tile", null, De),
          m()()(),
          u(6, "mat-tab", 2)(7, "mat-card")(8, "mat-grid-list", 3),
          Se(9, nb, 3, 1, "mat-grid-tile", null, De),
          m()()(),
          u(11, "mat-tab", 4)(12, "mat-card")(13, "mat-card-header", 5)(
            14,
            "mat-card-title",
          ),
          g(15, " T Day "),
          m()(),
          T(16, "mat-divider"),
          u(17, "mat-card-content", 6)(18, "div"),
          T(19, "iframe", 7),
          m(),
          u(20, "div", 8)(21, "p"),
          g(
            22,
            "A fun project my team and I created for the Machinima class at the University of Utah.",
          ),
          m(),
          u(23, "p"),
          g(
            24,
            "This short 3D animated film offers a playful yet intense portrayal of a baby turtle\u2019s hatching experience on Ascension Island. While the story is exaggerated and packed with action, it captures the very real dangers turtles face from the moment they emerge. Through a fun and fictional lens, we highlight the challenges these creatures must overcome to reach the ocean and survive.",
          ),
          m()()()()()()),
          r & 2 &&
            (D(4),
            ke(e.artPreviews2D),
            D(5),
            ke(e.artPreviews3D),
            D(10),
            Q("src", e.safeUrl, xc));
      },
      dependencies: [Vi, zi, Ui, to, Bi, Xd, Os, Hi, Gn, lo],
      styles: [
        ".image-card[_ngcontent-%COMP%]:hover{width:85%;height:85%;transition:.5s;box-shadow:0 3px 5px -1px #0003,0 5px 8px #00000024,0 1px 14px #0000001f}.image-card[_ngcontent-%COMP%]{width:80%;height:80%;overflow:hidden;border-radius:3%;border:1px solid palevioletred;box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f;transition:.5s}.video[_ngcontent-%COMP%]{margin:auto;margin-top:3rem;width:45rem;height:30rem}.video-title[_ngcontent-%COMP%]{margin:auto;font-size:3rem;margin-bottom:1rem}.video-card[_ngcontent-%COMP%]{height:fit-content;overflow:auto}.video-description[_ngcontent-%COMP%]{text-align:left;margin:2rem}@media only screen and (max-width: 600px){.video[_ngcontent-%COMP%]{width:25rem;height:16rem}}",
      ],
    });
  },
  zs = class n {
    dialogRef = v(Qi);
    data = v(Ds);
    imagePath = this.data.imagePath;
    title = this.data.title;
    downloadPath = this.data.downloadPath;
    downloadName = Date.now();
    onInit() {
      if (this.downloadPath) this.downloadName = `${this.downloadName}.fbx`;
      else {
        let t = this.imagePath.substring(this.imagePath.indexOf(".") + 1);
        this.downloadName = `${this.downloadName}.${t}`;
      }
    }
    static ɵfac = function (r) {
      return new (r || n)();
    };
    static ɵcmp = I({
      type: n,
      selectors: [["pop-up-image"]],
      decls: 6,
      vars: 4,
      consts: [
        [
          "mat-dialog-title",
          "",
          2,
          "display",
          "flex",
          "justify-content",
          "center",
          "align-items",
          "center",
        ],
        [2, "height", "60vh", 3, "src"],
        [2, "justify-content", "center"],
        ["mat-raised-button", "", "target", "_blank", 3, "href", "download"],
      ],
      template: function (r, e) {
        r & 1 &&
          (u(0, "h2", 0),
          g(1),
          m(),
          T(2, "img", 1),
          u(3, "mat-dialog-actions", 2)(4, "a", 3),
          g(5, "Download"),
          m()()),
          r & 2 &&
            (D(),
            Go(
              " ",
              e.title || "My drawing",
              `
`,
            ),
            D(),
            Q("src", e.imagePath, oe),
            D(2),
            Q(
              "href",
              e.downloadPath || e.imagePath,
              oe,
            )("download", e.downloadName));
      },
      dependencies: [uo, qd, Qd],
      encapsulation: 2,
    });
  };
var po = class n {
  static ɵfac = function (r) {
    return new (r || n)();
  };
  static ɵcmp = I({
    type: n,
    selectors: [["app-others"]],
    decls: 2,
    vars: 0,
    template: function (r, e) {
      r & 1 && (u(0, "p"), g(1, "others works!"), m());
    },
  });
};
function Ne(n) {
  return (
    n == null || ((typeof n == "string" || Array.isArray(n)) && n.length === 0)
  );
}
function wh(n) {
  return n != null && typeof n.length == "number";
}
var xh = new C(""),
  Ch = new C(""),
  rb =
    /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  go = class {
    static min(t) {
      return ob(t);
    }
    static max(t) {
      return ab(t);
    }
    static required(t) {
      return sb(t);
    }
    static requiredTrue(t) {
      return cb(t);
    }
    static email(t) {
      return lb(t);
    }
    static minLength(t) {
      return db(t);
    }
    static maxLength(t) {
      return hb(t);
    }
    static pattern(t) {
      return ub(t);
    }
    static nullValidator(t) {
      return Ih(t);
    }
    static compose(t) {
      return Th(t);
    }
    static composeAsync(t) {
      return Rh(t);
    }
  };
function ob(n) {
  return (t) => {
    if (Ne(t.value) || Ne(n)) return null;
    let r = parseFloat(t.value);
    return !isNaN(r) && r < n ? { min: { min: n, actual: t.value } } : null;
  };
}
function ab(n) {
  return (t) => {
    if (Ne(t.value) || Ne(n)) return null;
    let r = parseFloat(t.value);
    return !isNaN(r) && r > n ? { max: { max: n, actual: t.value } } : null;
  };
}
function sb(n) {
  return Ne(n.value) ? { required: !0 } : null;
}
function cb(n) {
  return n.value === !0 ? null : { required: !0 };
}
function lb(n) {
  return Ne(n.value) || rb.test(n.value) ? null : { email: !0 };
}
function db(n) {
  return (t) =>
    Ne(t.value) || !wh(t.value)
      ? null
      : t.value.length < n
        ? { minlength: { requiredLength: n, actualLength: t.value.length } }
        : null;
}
function hb(n) {
  return (t) =>
    wh(t.value) && t.value.length > n
      ? { maxlength: { requiredLength: n, actualLength: t.value.length } }
      : null;
}
function ub(n) {
  if (!n) return Ih;
  let t, r;
  return (
    typeof n == "string"
      ? ((r = ""),
        n.charAt(0) !== "^" && (r += "^"),
        (r += n),
        n.charAt(n.length - 1) !== "$" && (r += "$"),
        (t = new RegExp(r)))
      : ((r = n.toString()), (t = n)),
    (e) => {
      if (Ne(e.value)) return null;
      let i = e.value;
      return t.test(i)
        ? null
        : { pattern: { requiredPattern: r, actualValue: i } };
    }
  );
}
function Ih(n) {
  return null;
}
function Eh(n) {
  return n != null;
}
function Dh(n) {
  return mr(n) ? xt(n) : n;
}
function Sh(n) {
  let t = {};
  return (
    n.forEach((r) => {
      t = r != null ? b(b({}, t), r) : t;
    }),
    Object.keys(t).length === 0 ? null : t
  );
}
function kh(n, t) {
  return t.map((r) => r(n));
}
function mb(n) {
  return !n.validate;
}
function Ah(n) {
  return n.map((t) => (mb(t) ? t : (r) => t.validate(r)));
}
function Th(n) {
  if (!n) return null;
  let t = n.filter(Eh);
  return t.length == 0
    ? null
    : function (r) {
        return Sh(kh(r, t));
      };
}
function Gs(n) {
  return n != null ? Th(Ah(n)) : null;
}
function Rh(n) {
  if (!n) return null;
  let t = n.filter(Eh);
  return t.length == 0
    ? null
    : function (r) {
        let e = kh(r, t).map(Dh);
        return rr(e).pipe(R(Sh));
      };
}
function qs(n) {
  return n != null ? Rh(Ah(n)) : null;
}
function fh(n, t) {
  return n === null ? [t] : Array.isArray(n) ? [...n, t] : [n, t];
}
function Mh(n) {
  return n._rawValidators;
}
function Oh(n) {
  return n._rawAsyncValidators;
}
function Us(n) {
  return n ? (Array.isArray(n) ? n : [n]) : [];
}
function bo(n, t) {
  return Array.isArray(n) ? n.includes(t) : n === t;
}
function gh(n, t) {
  let r = Us(t);
  return (
    Us(n).forEach((i) => {
      bo(r, i) || r.push(i);
    }),
    r
  );
}
function bh(n, t) {
  return Us(t).filter((r) => !bo(n, r));
}
var vo = class {
    constructor() {
      (this._rawValidators = []),
        (this._rawAsyncValidators = []),
        (this._onDestroyCallbacks = []);
    }
    get value() {
      return this.control ? this.control.value : null;
    }
    get valid() {
      return this.control ? this.control.valid : null;
    }
    get invalid() {
      return this.control ? this.control.invalid : null;
    }
    get pending() {
      return this.control ? this.control.pending : null;
    }
    get disabled() {
      return this.control ? this.control.disabled : null;
    }
    get enabled() {
      return this.control ? this.control.enabled : null;
    }
    get errors() {
      return this.control ? this.control.errors : null;
    }
    get pristine() {
      return this.control ? this.control.pristine : null;
    }
    get dirty() {
      return this.control ? this.control.dirty : null;
    }
    get touched() {
      return this.control ? this.control.touched : null;
    }
    get status() {
      return this.control ? this.control.status : null;
    }
    get untouched() {
      return this.control ? this.control.untouched : null;
    }
    get statusChanges() {
      return this.control ? this.control.statusChanges : null;
    }
    get valueChanges() {
      return this.control ? this.control.valueChanges : null;
    }
    get path() {
      return null;
    }
    _setValidators(t) {
      (this._rawValidators = t || []),
        (this._composedValidatorFn = Gs(this._rawValidators));
    }
    _setAsyncValidators(t) {
      (this._rawAsyncValidators = t || []),
        (this._composedAsyncValidatorFn = qs(this._rawAsyncValidators));
    }
    get validator() {
      return this._composedValidatorFn || null;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn || null;
    }
    _registerOnDestroy(t) {
      this._onDestroyCallbacks.push(t);
    }
    _invokeOnDestroyCallbacks() {
      this._onDestroyCallbacks.forEach((t) => t()),
        (this._onDestroyCallbacks = []);
    }
    reset(t = void 0) {
      this.control && this.control.reset(t);
    }
    hasError(t, r) {
      return this.control ? this.control.hasError(t, r) : !1;
    }
    getError(t, r) {
      return this.control ? this.control.getError(t, r) : null;
    }
  },
  Ki = class extends vo {
    get formDirective() {
      return null;
    }
    get path() {
      return null;
    }
  },
  _o = class extends vo {
    constructor() {
      super(...arguments),
        (this._parent = null),
        (this.name = null),
        (this.valueAccessor = null);
    }
  };
var pb = {
    "[class.ng-untouched]": "isUntouched",
    "[class.ng-touched]": "isTouched",
    "[class.ng-pristine]": "isPristine",
    "[class.ng-dirty]": "isDirty",
    "[class.ng-valid]": "isValid",
    "[class.ng-invalid]": "isInvalid",
    "[class.ng-pending]": "isPending",
  },
  Fw = X(b({}, pb), { "[class.ng-submitted]": "isSubmitted" });
var qn = "VALID",
  fo = "INVALID",
  Yi = "PENDING",
  Qn = "DISABLED",
  Le = class {},
  yo = class extends Le {
    constructor(t, r) {
      super(), (this.value = t), (this.source = r);
    }
  },
  Zn = class extends Le {
    constructor(t, r) {
      super(), (this.pristine = t), (this.source = r);
    }
  },
  Kn = class extends Le {
    constructor(t, r) {
      super(), (this.touched = t), (this.source = r);
    }
  },
  Zi = class extends Le {
    constructor(t, r) {
      super(), (this.status = t), (this.source = r);
    }
  },
  Hs = class extends Le {
    constructor(t) {
      super(), (this.source = t);
    }
  },
  $s = class extends Le {
    constructor(t) {
      super(), (this.source = t);
    }
  };
function Fh(n) {
  return (Eo(n) ? n.validators : n) || null;
}
function fb(n) {
  return Array.isArray(n) ? Gs(n) : n || null;
}
function Ph(n, t) {
  return (Eo(t) ? t.asyncValidators : n) || null;
}
function gb(n) {
  return Array.isArray(n) ? qs(n) : n || null;
}
function Eo(n) {
  return n != null && !Array.isArray(n) && typeof n == "object";
}
function bb(n, t, r) {
  let e = n.controls;
  if (!(t ? Object.keys(e) : e).length) throw new et(1e3, "");
  if (!e[r]) throw new et(1001, "");
}
function vb(n, t, r) {
  n._forEachChild((e, i) => {
    if (r[i] === void 0) throw new et(1002, "");
  });
}
var wo = class {
    constructor(t, r) {
      (this._pendingDirty = !1),
        (this._hasOwnPendingAsyncValidator = null),
        (this._pendingTouched = !1),
        (this._onCollectionChange = () => {}),
        (this._parent = null),
        (this._status = _i(() => this.statusReactive())),
        (this.statusReactive = vi(void 0)),
        (this._pristine = _i(() => this.pristineReactive())),
        (this.pristineReactive = vi(!0)),
        (this._touched = _i(() => this.touchedReactive())),
        (this.touchedReactive = vi(!1)),
        (this._events = new w()),
        (this.events = this._events.asObservable()),
        (this._onDisabledChange = []),
        this._assignValidators(t),
        this._assignAsyncValidators(r);
    }
    get validator() {
      return this._composedValidatorFn;
    }
    set validator(t) {
      this._rawValidators = this._composedValidatorFn = t;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn;
    }
    set asyncValidator(t) {
      this._rawAsyncValidators = this._composedAsyncValidatorFn = t;
    }
    get parent() {
      return this._parent;
    }
    get status() {
      return Gt(this.statusReactive);
    }
    set status(t) {
      Gt(() => this.statusReactive.set(t));
    }
    get valid() {
      return this.status === qn;
    }
    get invalid() {
      return this.status === fo;
    }
    get pending() {
      return this.status == Yi;
    }
    get disabled() {
      return this.status === Qn;
    }
    get enabled() {
      return this.status !== Qn;
    }
    get pristine() {
      return Gt(this.pristineReactive);
    }
    set pristine(t) {
      Gt(() => this.pristineReactive.set(t));
    }
    get dirty() {
      return !this.pristine;
    }
    get touched() {
      return Gt(this.touchedReactive);
    }
    set touched(t) {
      Gt(() => this.touchedReactive.set(t));
    }
    get untouched() {
      return !this.touched;
    }
    get updateOn() {
      return this._updateOn
        ? this._updateOn
        : this.parent
          ? this.parent.updateOn
          : "change";
    }
    setValidators(t) {
      this._assignValidators(t);
    }
    setAsyncValidators(t) {
      this._assignAsyncValidators(t);
    }
    addValidators(t) {
      this.setValidators(gh(t, this._rawValidators));
    }
    addAsyncValidators(t) {
      this.setAsyncValidators(gh(t, this._rawAsyncValidators));
    }
    removeValidators(t) {
      this.setValidators(bh(t, this._rawValidators));
    }
    removeAsyncValidators(t) {
      this.setAsyncValidators(bh(t, this._rawAsyncValidators));
    }
    hasValidator(t) {
      return bo(this._rawValidators, t);
    }
    hasAsyncValidator(t) {
      return bo(this._rawAsyncValidators, t);
    }
    clearValidators() {
      this.validator = null;
    }
    clearAsyncValidators() {
      this.asyncValidator = null;
    }
    markAsTouched(t = {}) {
      let r = this.touched === !1;
      this.touched = !0;
      let e = t.sourceControl ?? this;
      this._parent &&
        !t.onlySelf &&
        this._parent.markAsTouched(X(b({}, t), { sourceControl: e })),
        r && t.emitEvent !== !1 && this._events.next(new Kn(!0, e));
    }
    markAllAsTouched(t = {}) {
      this.markAsTouched({
        onlySelf: !0,
        emitEvent: t.emitEvent,
        sourceControl: this,
      }),
        this._forEachChild((r) => r.markAllAsTouched(t));
    }
    markAsUntouched(t = {}) {
      let r = this.touched === !0;
      (this.touched = !1), (this._pendingTouched = !1);
      let e = t.sourceControl ?? this;
      this._forEachChild((i) => {
        i.markAsUntouched({
          onlySelf: !0,
          emitEvent: t.emitEvent,
          sourceControl: e,
        });
      }),
        this._parent && !t.onlySelf && this._parent._updateTouched(t, e),
        r && t.emitEvent !== !1 && this._events.next(new Kn(!1, e));
    }
    markAsDirty(t = {}) {
      let r = this.pristine === !0;
      this.pristine = !1;
      let e = t.sourceControl ?? this;
      this._parent &&
        !t.onlySelf &&
        this._parent.markAsDirty(X(b({}, t), { sourceControl: e })),
        r && t.emitEvent !== !1 && this._events.next(new Zn(!1, e));
    }
    markAsPristine(t = {}) {
      let r = this.pristine === !1;
      (this.pristine = !0), (this._pendingDirty = !1);
      let e = t.sourceControl ?? this;
      this._forEachChild((i) => {
        i.markAsPristine({ onlySelf: !0, emitEvent: t.emitEvent });
      }),
        this._parent && !t.onlySelf && this._parent._updatePristine(t, e),
        r && t.emitEvent !== !1 && this._events.next(new Zn(!0, e));
    }
    markAsPending(t = {}) {
      this.status = Yi;
      let r = t.sourceControl ?? this;
      t.emitEvent !== !1 &&
        (this._events.next(new Zi(this.status, r)),
        this.statusChanges.emit(this.status)),
        this._parent &&
          !t.onlySelf &&
          this._parent.markAsPending(X(b({}, t), { sourceControl: r }));
    }
    disable(t = {}) {
      let r = this._parentMarkedDirty(t.onlySelf);
      (this.status = Qn),
        (this.errors = null),
        this._forEachChild((i) => {
          i.disable(X(b({}, t), { onlySelf: !0 }));
        }),
        this._updateValue();
      let e = t.sourceControl ?? this;
      t.emitEvent !== !1 &&
        (this._events.next(new yo(this.value, e)),
        this._events.next(new Zi(this.status, e)),
        this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._updateAncestors(X(b({}, t), { skipPristineCheck: r }), this),
        this._onDisabledChange.forEach((i) => i(!0));
    }
    enable(t = {}) {
      let r = this._parentMarkedDirty(t.onlySelf);
      (this.status = qn),
        this._forEachChild((e) => {
          e.enable(X(b({}, t), { onlySelf: !0 }));
        }),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent }),
        this._updateAncestors(X(b({}, t), { skipPristineCheck: r }), this),
        this._onDisabledChange.forEach((e) => e(!1));
    }
    _updateAncestors(t, r) {
      this._parent &&
        !t.onlySelf &&
        (this._parent.updateValueAndValidity(t),
        t.skipPristineCheck || this._parent._updatePristine({}, r),
        this._parent._updateTouched({}, r));
    }
    setParent(t) {
      this._parent = t;
    }
    getRawValue() {
      return this.value;
    }
    updateValueAndValidity(t = {}) {
      if ((this._setInitialStatus(), this._updateValue(), this.enabled)) {
        let e = this._cancelExistingSubscription();
        (this.errors = this._runValidator()),
          (this.status = this._calculateStatus()),
          (this.status === qn || this.status === Yi) &&
            this._runAsyncValidator(e, t.emitEvent);
      }
      let r = t.sourceControl ?? this;
      t.emitEvent !== !1 &&
        (this._events.next(new yo(this.value, r)),
        this._events.next(new Zi(this.status, r)),
        this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._parent &&
          !t.onlySelf &&
          this._parent.updateValueAndValidity(
            X(b({}, t), { sourceControl: r }),
          );
    }
    _updateTreeValidity(t = { emitEvent: !0 }) {
      this._forEachChild((r) => r._updateTreeValidity(t)),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent });
    }
    _setInitialStatus() {
      this.status = this._allControlsDisabled() ? Qn : qn;
    }
    _runValidator() {
      return this.validator ? this.validator(this) : null;
    }
    _runAsyncValidator(t, r) {
      if (this.asyncValidator) {
        (this.status = Yi),
          (this._hasOwnPendingAsyncValidator = { emitEvent: r !== !1 });
        let e = Dh(this.asyncValidator(this));
        this._asyncValidationSubscription = e.subscribe((i) => {
          (this._hasOwnPendingAsyncValidator = null),
            this.setErrors(i, { emitEvent: r, shouldHaveEmitted: t });
        });
      }
    }
    _cancelExistingSubscription() {
      if (this._asyncValidationSubscription) {
        this._asyncValidationSubscription.unsubscribe();
        let t = this._hasOwnPendingAsyncValidator?.emitEvent ?? !1;
        return (this._hasOwnPendingAsyncValidator = null), t;
      }
      return !1;
    }
    setErrors(t, r = {}) {
      (this.errors = t),
        this._updateControlsErrors(
          r.emitEvent !== !1,
          this,
          r.shouldHaveEmitted,
        );
    }
    get(t) {
      let r = t;
      return r == null ||
        (Array.isArray(r) || (r = r.split(".")), r.length === 0)
        ? null
        : r.reduce((e, i) => e && e._find(i), this);
    }
    getError(t, r) {
      let e = r ? this.get(r) : this;
      return e && e.errors ? e.errors[t] : null;
    }
    hasError(t, r) {
      return !!this.getError(t, r);
    }
    get root() {
      let t = this;
      for (; t._parent; ) t = t._parent;
      return t;
    }
    _updateControlsErrors(t, r, e) {
      (this.status = this._calculateStatus()),
        t && this.statusChanges.emit(this.status),
        (t || e) && this._events.next(new Zi(this.status, r)),
        this._parent && this._parent._updateControlsErrors(t, r, e);
    }
    _initObservables() {
      (this.valueChanges = new O()), (this.statusChanges = new O());
    }
    _calculateStatus() {
      return this._allControlsDisabled()
        ? Qn
        : this.errors
          ? fo
          : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(Yi)
            ? Yi
            : this._anyControlsHaveStatus(fo)
              ? fo
              : qn;
    }
    _anyControlsHaveStatus(t) {
      return this._anyControls((r) => r.status === t);
    }
    _anyControlsDirty() {
      return this._anyControls((t) => t.dirty);
    }
    _anyControlsTouched() {
      return this._anyControls((t) => t.touched);
    }
    _updatePristine(t, r) {
      let e = !this._anyControlsDirty(),
        i = this.pristine !== e;
      (this.pristine = e),
        this._parent && !t.onlySelf && this._parent._updatePristine(t, r),
        i && this._events.next(new Zn(this.pristine, r));
    }
    _updateTouched(t = {}, r) {
      (this.touched = this._anyControlsTouched()),
        this._events.next(new Kn(this.touched, r)),
        this._parent && !t.onlySelf && this._parent._updateTouched(t, r);
    }
    _registerOnCollectionChange(t) {
      this._onCollectionChange = t;
    }
    _setUpdateStrategy(t) {
      Eo(t) && t.updateOn != null && (this._updateOn = t.updateOn);
    }
    _parentMarkedDirty(t) {
      let r = this._parent && this._parent.dirty;
      return !t && !!r && !this._parent._anyControlsDirty();
    }
    _find(t) {
      return null;
    }
    _assignValidators(t) {
      (this._rawValidators = Array.isArray(t) ? t.slice() : t),
        (this._composedValidatorFn = fb(this._rawValidators));
    }
    _assignAsyncValidators(t) {
      (this._rawAsyncValidators = Array.isArray(t) ? t.slice() : t),
        (this._composedAsyncValidatorFn = gb(this._rawAsyncValidators));
    }
  },
  xo = class extends wo {
    constructor(t, r, e) {
      super(Fh(r), Ph(e, r)),
        (this.controls = t),
        this._initObservables(),
        this._setUpdateStrategy(r),
        this._setUpControls(),
        this.updateValueAndValidity({
          onlySelf: !0,
          emitEvent: !!this.asyncValidator,
        });
    }
    registerControl(t, r) {
      return this.controls[t]
        ? this.controls[t]
        : ((this.controls[t] = r),
          r.setParent(this),
          r._registerOnCollectionChange(this._onCollectionChange),
          r);
    }
    addControl(t, r, e = {}) {
      this.registerControl(t, r),
        this.updateValueAndValidity({ emitEvent: e.emitEvent }),
        this._onCollectionChange();
    }
    removeControl(t, r = {}) {
      this.controls[t] &&
        this.controls[t]._registerOnCollectionChange(() => {}),
        delete this.controls[t],
        this.updateValueAndValidity({ emitEvent: r.emitEvent }),
        this._onCollectionChange();
    }
    setControl(t, r, e = {}) {
      this.controls[t] &&
        this.controls[t]._registerOnCollectionChange(() => {}),
        delete this.controls[t],
        r && this.registerControl(t, r),
        this.updateValueAndValidity({ emitEvent: e.emitEvent }),
        this._onCollectionChange();
    }
    contains(t) {
      return this.controls.hasOwnProperty(t) && this.controls[t].enabled;
    }
    setValue(t, r = {}) {
      vb(this, !0, t),
        Object.keys(t).forEach((e) => {
          bb(this, !0, e),
            this.controls[e].setValue(t[e], {
              onlySelf: !0,
              emitEvent: r.emitEvent,
            });
        }),
        this.updateValueAndValidity(r);
    }
    patchValue(t, r = {}) {
      t != null &&
        (Object.keys(t).forEach((e) => {
          let i = this.controls[e];
          i && i.patchValue(t[e], { onlySelf: !0, emitEvent: r.emitEvent });
        }),
        this.updateValueAndValidity(r));
    }
    reset(t = {}, r = {}) {
      this._forEachChild((e, i) => {
        e.reset(t ? t[i] : null, { onlySelf: !0, emitEvent: r.emitEvent });
      }),
        this._updatePristine(r, this),
        this._updateTouched(r, this),
        this.updateValueAndValidity(r);
    }
    getRawValue() {
      return this._reduceChildren(
        {},
        (t, r, e) => ((t[e] = r.getRawValue()), t),
      );
    }
    _syncPendingControls() {
      let t = this._reduceChildren(!1, (r, e) =>
        e._syncPendingControls() ? !0 : r,
      );
      return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
    }
    _forEachChild(t) {
      Object.keys(this.controls).forEach((r) => {
        let e = this.controls[r];
        e && t(e, r);
      });
    }
    _setUpControls() {
      this._forEachChild((t) => {
        t.setParent(this),
          t._registerOnCollectionChange(this._onCollectionChange);
      });
    }
    _updateValue() {
      this.value = this._reduceValue();
    }
    _anyControls(t) {
      for (let [r, e] of Object.entries(this.controls))
        if (this.contains(r) && t(e)) return !0;
      return !1;
    }
    _reduceValue() {
      let t = {};
      return this._reduceChildren(
        t,
        (r, e, i) => ((e.enabled || this.disabled) && (r[i] = e.value), r),
      );
    }
    _reduceChildren(t, r) {
      let e = t;
      return (
        this._forEachChild((i, o) => {
          e = r(e, i, o);
        }),
        e
      );
    }
    _allControlsDisabled() {
      for (let t of Object.keys(this.controls))
        if (this.controls[t].enabled) return !1;
      return Object.keys(this.controls).length > 0 || this.disabled;
    }
    _find(t) {
      return this.controls.hasOwnProperty(t) ? this.controls[t] : null;
    }
  };
var Nh = new C("CallSetDisabledState", {
    providedIn: "root",
    factory: () => Lh,
  }),
  Lh = "always";
function Ws(n, t, r = Lh) {
  Qs(n, t),
    t.valueAccessor.writeValue(n.value),
    (n.disabled || r === "always") &&
      t.valueAccessor.setDisabledState?.(n.disabled),
    yb(n, t),
    xb(n, t),
    wb(n, t),
    _b(n, t);
}
function vh(n, t, r = !0) {
  let e = () => {};
  t.valueAccessor &&
    (t.valueAccessor.registerOnChange(e), t.valueAccessor.registerOnTouched(e)),
    Io(n, t),
    n &&
      (t._invokeOnDestroyCallbacks(), n._registerOnCollectionChange(() => {}));
}
function Co(n, t) {
  n.forEach((r) => {
    r.registerOnValidatorChange && r.registerOnValidatorChange(t);
  });
}
function _b(n, t) {
  if (t.valueAccessor.setDisabledState) {
    let r = (e) => {
      t.valueAccessor.setDisabledState(e);
    };
    n.registerOnDisabledChange(r),
      t._registerOnDestroy(() => {
        n._unregisterOnDisabledChange(r);
      });
  }
}
function Qs(n, t) {
  let r = Mh(n);
  t.validator !== null
    ? n.setValidators(fh(r, t.validator))
    : typeof r == "function" && n.setValidators([r]);
  let e = Oh(n);
  t.asyncValidator !== null
    ? n.setAsyncValidators(fh(e, t.asyncValidator))
    : typeof e == "function" && n.setAsyncValidators([e]);
  let i = () => n.updateValueAndValidity();
  Co(t._rawValidators, i), Co(t._rawAsyncValidators, i);
}
function Io(n, t) {
  let r = !1;
  if (n !== null) {
    if (t.validator !== null) {
      let i = Mh(n);
      if (Array.isArray(i) && i.length > 0) {
        let o = i.filter((a) => a !== t.validator);
        o.length !== i.length && ((r = !0), n.setValidators(o));
      }
    }
    if (t.asyncValidator !== null) {
      let i = Oh(n);
      if (Array.isArray(i) && i.length > 0) {
        let o = i.filter((a) => a !== t.asyncValidator);
        o.length !== i.length && ((r = !0), n.setAsyncValidators(o));
      }
    }
  }
  let e = () => {};
  return Co(t._rawValidators, e), Co(t._rawAsyncValidators, e), r;
}
function yb(n, t) {
  t.valueAccessor.registerOnChange((r) => {
    (n._pendingValue = r),
      (n._pendingChange = !0),
      (n._pendingDirty = !0),
      n.updateOn === "change" && jh(n, t);
  });
}
function wb(n, t) {
  t.valueAccessor.registerOnTouched(() => {
    (n._pendingTouched = !0),
      n.updateOn === "blur" && n._pendingChange && jh(n, t),
      n.updateOn !== "submit" && n.markAsTouched();
  });
}
function jh(n, t) {
  n._pendingDirty && n.markAsDirty(),
    n.setValue(n._pendingValue, { emitModelToViewChange: !1 }),
    t.viewToModelUpdate(n._pendingValue),
    (n._pendingChange = !1);
}
function xb(n, t) {
  let r = (e, i) => {
    t.valueAccessor.writeValue(e), i && t.viewToModelUpdate(e);
  };
  n.registerOnChange(r),
    t._registerOnDestroy(() => {
      n._unregisterOnChange(r);
    });
}
function Vh(n, t) {
  n == null, Qs(n, t);
}
function Cb(n, t) {
  return Io(n, t);
}
function Bh(n, t) {
  n._syncPendingControls(),
    t.forEach((r) => {
      let e = r.control;
      e.updateOn === "submit" &&
        e._pendingChange &&
        (r.viewToModelUpdate(e._pendingValue), (e._pendingChange = !1));
    });
}
function Ib(n, t) {
  let r = n.indexOf(t);
  r > -1 && n.splice(r, 1);
}
var Eb = { provide: Ki, useExisting: Ce(() => Ys) },
  Yn = Promise.resolve(),
  Ys = (() => {
    let t = class t extends Ki {
      get submitted() {
        return Gt(this.submittedReactive);
      }
      constructor(e, i, o) {
        super(),
          (this.callSetDisabledState = o),
          (this._submitted = _i(() => this.submittedReactive())),
          (this.submittedReactive = vi(!1)),
          (this._directives = new Set()),
          (this.ngSubmit = new O()),
          (this.form = new xo({}, Gs(e), qs(i)));
      }
      ngAfterViewInit() {
        this._setUpdateStrategy();
      }
      get formDirective() {
        return this;
      }
      get control() {
        return this.form;
      }
      get path() {
        return [];
      }
      get controls() {
        return this.form.controls;
      }
      addControl(e) {
        Yn.then(() => {
          let i = this._findContainer(e.path);
          (e.control = i.registerControl(e.name, e.control)),
            Ws(e.control, e, this.callSetDisabledState),
            e.control.updateValueAndValidity({ emitEvent: !1 }),
            this._directives.add(e);
        });
      }
      getControl(e) {
        return this.form.get(e.path);
      }
      removeControl(e) {
        Yn.then(() => {
          let i = this._findContainer(e.path);
          i && i.removeControl(e.name), this._directives.delete(e);
        });
      }
      addFormGroup(e) {
        Yn.then(() => {
          let i = this._findContainer(e.path),
            o = new xo({});
          Vh(o, e),
            i.registerControl(e.name, o),
            o.updateValueAndValidity({ emitEvent: !1 });
        });
      }
      removeFormGroup(e) {
        Yn.then(() => {
          let i = this._findContainer(e.path);
          i && i.removeControl(e.name);
        });
      }
      getFormGroup(e) {
        return this.form.get(e.path);
      }
      updateModel(e, i) {
        Yn.then(() => {
          this.form.get(e.path).setValue(i);
        });
      }
      setValue(e) {
        this.control.setValue(e);
      }
      onSubmit(e) {
        return (
          this.submittedReactive.set(!0),
          Bh(this.form, this._directives),
          this.ngSubmit.emit(e),
          e?.target?.method === "dialog"
        );
      }
      onReset() {
        this.resetForm();
      }
      resetForm(e = void 0) {
        this.form.reset(e), this.submittedReactive.set(!1);
      }
      _setUpdateStrategy() {
        this.options &&
          this.options.updateOn != null &&
          (this.form._updateOn = this.options.updateOn);
      }
      _findContainer(e) {
        return e.pop(), e.length ? this.form.get(e) : this.form;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(xh, 10), d(Ch, 10), d(Nh, 8));
    }),
      (t.ɵdir = M({
        type: t,
        selectors: [
          ["form", 3, "ngNoForm", "", 3, "formGroup", ""],
          ["ng-form"],
          ["", "ngForm", ""],
        ],
        hostBindings: function (i, o) {
          i & 1 &&
            Y("submit", function (s) {
              return o.onSubmit(s);
            })("reset", function () {
              return o.onReset();
            });
        },
        inputs: { options: [0, "ngFormOptions", "options"] },
        outputs: { ngSubmit: "ngSubmit" },
        exportAs: ["ngForm"],
        features: [gt([Eb]), it],
      }));
    let n = t;
    return n;
  })();
function _h(n, t) {
  let r = n.indexOf(t);
  r > -1 && n.splice(r, 1);
}
function yh(n) {
  return (
    typeof n == "object" &&
    n !== null &&
    Object.keys(n).length === 2 &&
    "value" in n &&
    "disabled" in n
  );
}
var Db = class extends wo {
  constructor(t = null, r, e) {
    super(Fh(r), Ph(e, r)),
      (this.defaultValue = null),
      (this._onChange = []),
      (this._pendingChange = !1),
      this._applyFormState(t),
      this._setUpdateStrategy(r),
      this._initObservables(),
      this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: !!this.asyncValidator,
      }),
      Eo(r) &&
        (r.nonNullable || r.initialValueIsDefault) &&
        (yh(t) ? (this.defaultValue = t.value) : (this.defaultValue = t));
  }
  setValue(t, r = {}) {
    (this.value = this._pendingValue = t),
      this._onChange.length &&
        r.emitModelToViewChange !== !1 &&
        this._onChange.forEach((e) =>
          e(this.value, r.emitViewToModelChange !== !1),
        ),
      this.updateValueAndValidity(r);
  }
  patchValue(t, r = {}) {
    this.setValue(t, r);
  }
  reset(t = this.defaultValue, r = {}) {
    this._applyFormState(t),
      this.markAsPristine(r),
      this.markAsUntouched(r),
      this.setValue(this.value, r),
      (this._pendingChange = !1);
  }
  _updateValue() {}
  _anyControls(t) {
    return !1;
  }
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(t) {
    this._onChange.push(t);
  }
  _unregisterOnChange(t) {
    _h(this._onChange, t);
  }
  registerOnDisabledChange(t) {
    this._onDisabledChange.push(t);
  }
  _unregisterOnDisabledChange(t) {
    _h(this._onDisabledChange, t);
  }
  _forEachChild(t) {}
  _syncPendingControls() {
    return this.updateOn === "submit" &&
      (this._pendingDirty && this.markAsDirty(),
      this._pendingTouched && this.markAsTouched(),
      this._pendingChange)
      ? (this.setValue(this._pendingValue, {
          onlySelf: !0,
          emitModelToViewChange: !1,
        }),
        !0)
      : !1;
  }
  _applyFormState(t) {
    yh(t)
      ? ((this.value = this._pendingValue = t.value),
        t.disabled
          ? this.disable({ onlySelf: !0, emitEvent: !1 })
          : this.enable({ onlySelf: !0, emitEvent: !1 }))
      : (this.value = this._pendingValue = t);
  }
};
var Sb = (n) => n instanceof Db;
var kb = { provide: Ki, useExisting: Ce(() => Zs) },
  Zs = (() => {
    let t = class t extends Ki {
      get submitted() {
        return Gt(this._submittedReactive);
      }
      set submitted(e) {
        this._submittedReactive.set(e);
      }
      constructor(e, i, o) {
        super(),
          (this.callSetDisabledState = o),
          (this._submitted = _i(() => this._submittedReactive())),
          (this._submittedReactive = vi(!1)),
          (this._onCollectionChange = () => this._updateDomValue()),
          (this.directives = []),
          (this.form = null),
          (this.ngSubmit = new O()),
          this._setValidators(e),
          this._setAsyncValidators(i);
      }
      ngOnChanges(e) {
        this._checkFormPresent(),
          e.hasOwnProperty("form") &&
            (this._updateValidators(),
            this._updateDomValue(),
            this._updateRegistrations(),
            (this._oldForm = this.form));
      }
      ngOnDestroy() {
        this.form &&
          (Io(this.form, this),
          this.form._onCollectionChange === this._onCollectionChange &&
            this.form._registerOnCollectionChange(() => {}));
      }
      get formDirective() {
        return this;
      }
      get control() {
        return this.form;
      }
      get path() {
        return [];
      }
      addControl(e) {
        let i = this.form.get(e.path);
        return (
          Ws(i, e, this.callSetDisabledState),
          i.updateValueAndValidity({ emitEvent: !1 }),
          this.directives.push(e),
          i
        );
      }
      getControl(e) {
        return this.form.get(e.path);
      }
      removeControl(e) {
        vh(e.control || null, e, !1), Ib(this.directives, e);
      }
      addFormGroup(e) {
        this._setUpFormContainer(e);
      }
      removeFormGroup(e) {
        this._cleanUpFormContainer(e);
      }
      getFormGroup(e) {
        return this.form.get(e.path);
      }
      addFormArray(e) {
        this._setUpFormContainer(e);
      }
      removeFormArray(e) {
        this._cleanUpFormContainer(e);
      }
      getFormArray(e) {
        return this.form.get(e.path);
      }
      updateModel(e, i) {
        this.form.get(e.path).setValue(i);
      }
      onSubmit(e) {
        return (
          this._submittedReactive.set(!0),
          Bh(this.form, this.directives),
          this.ngSubmit.emit(e),
          this.form._events.next(new Hs(this.control)),
          e?.target?.method === "dialog"
        );
      }
      onReset() {
        this.resetForm();
      }
      resetForm(e = void 0) {
        this.form.reset(e),
          this._submittedReactive.set(!1),
          this.form._events.next(new $s(this.form));
      }
      _updateDomValue() {
        this.directives.forEach((e) => {
          let i = e.control,
            o = this.form.get(e.path);
          i !== o &&
            (vh(i || null, e),
            Sb(o) && (Ws(o, e, this.callSetDisabledState), (e.control = o)));
        }),
          this.form._updateTreeValidity({ emitEvent: !1 });
      }
      _setUpFormContainer(e) {
        let i = this.form.get(e.path);
        Vh(i, e), i.updateValueAndValidity({ emitEvent: !1 });
      }
      _cleanUpFormContainer(e) {
        if (this.form) {
          let i = this.form.get(e.path);
          i && Cb(i, e) && i.updateValueAndValidity({ emitEvent: !1 });
        }
      }
      _updateRegistrations() {
        this.form._registerOnCollectionChange(this._onCollectionChange),
          this._oldForm && this._oldForm._registerOnCollectionChange(() => {});
      }
      _updateValidators() {
        Qs(this.form, this), this._oldForm && Io(this._oldForm, this);
      }
      _checkFormPresent() {
        this.form;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(xh, 10), d(Ch, 10), d(Nh, 8));
    }),
      (t.ɵdir = M({
        type: t,
        selectors: [["", "formGroup", ""]],
        hostBindings: function (i, o) {
          i & 1 &&
            Y("submit", function (s) {
              return o.onSubmit(s);
            })("reset", function () {
              return o.onReset();
            });
        },
        inputs: { form: [0, "formGroup", "form"] },
        outputs: { ngSubmit: "ngSubmit" },
        exportAs: ["ngForm"],
        features: [gt([kb]), it, Mt],
      }));
    let n = t;
    return n;
  })();
var zh = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵdir = M({ type: t }));
  let n = t;
  return n;
})();
var Mb = [
    "*",
    [["mat-chip-avatar"], ["", "matChipAvatar", ""]],
    [
      ["mat-chip-trailing-icon"],
      ["", "matChipRemove", ""],
      ["", "matChipTrailingIcon", ""],
    ],
  ],
  Ob = [
    "*",
    "mat-chip-avatar, [matChipAvatar]",
    "mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]",
  ];
function Fb(n, t) {
  n & 1 && (u(0, "span", 3), F(1, 1), m());
}
function Pb(n, t) {
  n & 1 && (u(0, "span", 6), F(1, 2), m());
}
var Nb =
    '.mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{flex-basis:100%;overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}.mdc-evolution-chip__action--primary{font:inherit;letter-spacing:inherit;white-space:inherit;overflow-x:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before{border-width:var(--mdc-chip-outline-width);border-radius:var(--mdc-chip-container-shape-radius);box-sizing:border-box;content:"";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1;border-style:solid}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before{border-color:var(--mdc-chip-outline-color, var(--mat-app-outline))}.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before{border-color:var(--mdc-chip-focus-outline-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before{border-color:var(--mdc-chip-disabled-outline-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before{border-width:var(--mdc-chip-flat-selected-outline-width)}.mat-mdc-basic-chip .mdc-evolution-chip__action--primary{font:inherit}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip__action--trailing{position:relative;overflow:visible}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--trailing{color:var(--mdc-chip-with-trailing-icon-trailing-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--trailing{color:var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-app-on-surface))}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip__text-label{-webkit-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__text-label{font-family:var(--mdc-chip-label-text-font, var(--mat-app-label-large-font));line-height:var(--mdc-chip-label-text-line-height, var(--mat-app-label-large-line-height));font-size:var(--mdc-chip-label-text-size, var(--mat-app-label-large-size));font-weight:var(--mdc-chip-label-text-weight, var(--mat-app-label-large-weight));letter-spacing:var(--mdc-chip-label-text-tracking, var(--mat-app-label-large-tracking))}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mdc-chip-label-text-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mdc-chip-selected-label-text-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label{color:var(--mdc-chip-disabled-label-text-color)}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mat-mdc-standard-chip .mdc-evolution-chip__graphic{width:var(--mdc-chip-with-avatar-avatar-size);height:var(--mdc-chip-with-avatar-avatar-size);font-size:var(--mdc-chip-with-avatar-avatar-size)}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%;height:20px;width:20px}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark{color:var(--mdc-chip-with-icon-selected-icon-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark{color:var(--mdc-chip-with-icon-disabled-icon-color, var(--mat-app-on-surface))}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%, -50%);opacity:1}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}.cdk-high-contrast-active .mdc-evolution-chip__checkmark-path{stroke:CanvasText !important}.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing{height:18px;width:18px;font-size:18px}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove{opacity:calc(var(--mat-chip-trailing-action-opacity)*var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity))}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus{opacity:calc(var(--mat-chip-trailing-action-focus-opacity)*var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity))}.mat-mdc-standard-chip{border-radius:var(--mdc-chip-container-shape-radius);height:var(--mdc-chip-container-height)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled){background-color:var(--mdc-chip-elevated-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{background-color:var(--mdc-chip-elevated-disabled-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled){background-color:var(--mdc-chip-elevated-selected-container-color, var(--mat-app-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled{background-color:var(--mdc-chip-flat-disabled-selected-container-color)}.cdk-high-contrast-active .mat-mdc-standard-chip{outline:solid 1px}.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary{border-radius:var(--mdc-chip-with-avatar-avatar-shape-radius);width:var(--mdc-chip-with-icon-icon-size);height:var(--mdc-chip-with-icon-icon-size);font-size:var(--mdc-chip-with-icon-icon-size)}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary{color:var(--mdc-chip-with-icon-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary{color:var(--mdc-chip-with-icon-disabled-icon-color, var(--mat-app-on-surface))}.mat-mdc-chip-highlighted{--mdc-chip-with-icon-icon-color:var(--mdc-chip-with-icon-selected-icon-color, var(--mat-app-on-secondary-container));--mdc-chip-elevated-container-color:var(--mdc-chip-elevated-selected-container-color, var(--mat-app-secondary-container));--mdc-chip-label-text-color:var(--mdc-chip-selected-label-text-color, var(--mat-app-on-secondary-container));--mdc-chip-outline-width:var(--mdc-chip-flat-selected-outline-width)}.mat-mdc-chip-focus-overlay{background:var(--mdc-chip-focus-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-focus-state-layer-color, var(--mat-app-on-secondary-container))}.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-hover-state-layer-color, var(--mat-app-on-surface-variant));opacity:var(--mdc-chip-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover,.mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-hover-state-layer-color, var(--mat-app-on-secondary-container));opacity:var(--mdc-chip-selected-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-focus-state-layer-color, var(--mat-app-on-surface-variant));opacity:var(--mdc-chip-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-focus-state-layer-color, var(--mat-app-on-secondary-container));opacity:var(--mdc-chip-selected-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar{opacity:var(--mdc-chip-with-avatar-disabled-avatar-opacity)}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{opacity:var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity)}.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{opacity:var(--mdc-chip-with-icon-disabled-icon-opacity)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{opacity:var(--mat-chip-disabled-container-opacity)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-trailing-icon-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-app-on-surface))}.mat-mdc-chip-remove{opacity:var(--mat-chip-trailing-action-opacity)}.mat-mdc-chip-remove:focus{opacity:var(--mat-chip-trailing-action-focus-opacity)}.mat-mdc-chip-remove::after{background:var(--mat-chip-trailing-action-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-chip-remove:hover::after{opacity:var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-chip-remove:focus::after{opacity:var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-chip-selected .mat-mdc-chip-remove::after,.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after{background:var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-standard-chip .mdc-evolution-chip__cell--primary,.mat-mdc-standard-chip .mdc-evolution-chip__action--primary,.mat-mdc-standard-chip .mat-mdc-chip-action-label{overflow:visible}.mat-mdc-standard-chip .mat-mdc-chip-graphic,.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon{box-sizing:content-box}.mat-mdc-standard-chip._mat-animation-noopable,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path{transition-duration:1ms;animation-duration:1ms}.mat-mdc-chip-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;opacity:0;border-radius:inherit;transition:opacity 150ms linear}._mat-animation-noopable .mat-mdc-chip-focus-overlay{transition:none}.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay{display:none}.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-chip-avatar{text-align:center;line-height:1;color:var(--mdc-chip-with-icon-icon-color, currentColor)}.mat-mdc-chip{position:relative;z-index:0}.mat-mdc-chip-action-label{text-align:left;z-index:1}[dir=rtl] .mat-mdc-chip-action-label{text-align:right}.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label{position:relative}.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.mat-mdc-chip-action-label .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-chip-remove::before{margin:calc(var(--mat-mdc-focus-indicator-border-width, 3px)*-1);left:8px;right:8px}.mat-mdc-chip-remove::after{content:"";display:block;opacity:0;position:absolute;top:-2px;bottom:-2px;left:6px;right:6px;border-radius:50%}.mat-mdc-chip-remove .mat-icon{width:18px;height:18px;font-size:18px;box-sizing:content-box}.mat-chip-edit-input{cursor:text;display:inline-block;color:inherit;outline:0}.cdk-high-contrast-active .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple){outline-width:3px}.mat-mdc-chip-action:focus .mat-mdc-focus-indicator::before{content:""}',
  Lb = [
    [["mat-chip-avatar"], ["", "matChipAvatar", ""]],
    [["", "matChipEditInput", ""]],
    "*",
    [
      ["mat-chip-trailing-icon"],
      ["", "matChipRemove", ""],
      ["", "matChipTrailingIcon", ""],
    ],
  ],
  jb = [
    "mat-chip-avatar, [matChipAvatar]",
    "[matChipEditInput]",
    "*",
    "mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]",
  ];
function Vb(n, t) {
  n & 1 && T(0, "span", 0);
}
function Bb(n, t) {
  n & 1 && (u(0, "span", 2), F(1), m());
}
function zb(n, t) {
  n & 1 && F(0, 1);
}
function Ub(n, t) {
  n & 1 && T(0, "span", 7);
}
function Hb(n, t) {
  if ((n & 1 && K(0, zb, 1, 0)(1, Ub, 1, 0, "span", 7), n & 2)) {
    let r = nt();
    ft(r.contentEditInput ? 0 : 1);
  }
}
function $b(n, t) {
  n & 1 && F(0, 2);
}
function Wb(n, t) {
  n & 1 && (u(0, "span", 5), F(1, 3), m());
}
var Wh = ["*"],
  Gb =
    ".mat-mdc-chip-set{display:flex}.mat-mdc-chip-set:focus{outline:none}.mat-mdc-chip-set .mdc-evolution-chip-set__chips{min-width:100%;margin-left:-8px;margin-right:0}.mat-mdc-chip-set .mdc-evolution-chip{margin:4px 0 4px 8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips{margin-left:0;margin-right:-8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip{margin-left:0;margin-right:8px}.mdc-evolution-chip-set__chips{display:flex;flex-flow:wrap;min-width:0}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic{flex-grow:0}.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary{flex-basis:100%;justify-content:start}input.mat-mdc-chip-input{flex:1 0 150px;margin-left:8px}[dir=rtl] input.mat-mdc-chip-input{margin-left:0;margin-right:8px}";
var Uh = new C("MatChipAvatar"),
  Hh = new C("MatChipTrailingIcon"),
  $h = new C("MatChipRemove"),
  tc = new C("MatChip"),
  Xs = (() => {
    let t = class t {
      get disabled() {
        return this._disabled || this._parentChip.disabled;
      }
      set disabled(e) {
        this._disabled = e;
      }
      _getDisabledAttribute() {
        return this.disabled && !this._allowFocusWhenDisabled ? "" : null;
      }
      _getTabindex() {
        return (this.disabled && !this._allowFocusWhenDisabled) ||
          !this.isInteractive
          ? null
          : this.tabIndex.toString();
      }
      constructor(e, i) {
        (this._elementRef = e),
          (this._parentChip = i),
          (this.isInteractive = !0),
          (this._isPrimary = !0),
          (this._disabled = !1),
          (this.tabIndex = -1),
          (this._allowFocusWhenDisabled = !1),
          e.nativeElement.nodeName === "BUTTON" &&
            e.nativeElement.setAttribute("type", "button");
      }
      focus() {
        this._elementRef.nativeElement.focus();
      }
      _handleClick(e) {
        !this.disabled &&
          this.isInteractive &&
          this._isPrimary &&
          (e.preventDefault(),
          this._parentChip._handlePrimaryActionInteraction());
      }
      _handleKeydown(e) {
        (e.keyCode === 13 || e.keyCode === 32) &&
          !this.disabled &&
          this.isInteractive &&
          this._isPrimary &&
          !this._parentChip._isEditing &&
          (e.preventDefault(),
          this._parentChip._handlePrimaryActionInteraction());
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(E), d(tc));
    }),
      (t.ɵdir = M({
        type: t,
        selectors: [["", "matChipAction", ""]],
        hostAttrs: [1, "mdc-evolution-chip__action", "mat-mdc-chip-action"],
        hostVars: 9,
        hostBindings: function (i, o) {
          i & 1 &&
            Y("click", function (s) {
              return o._handleClick(s);
            })("keydown", function (s) {
              return o._handleKeydown(s);
            }),
            i & 2 &&
              (G("tabindex", o._getTabindex())(
                "disabled",
                o._getDisabledAttribute(),
              )("aria-disabled", o.disabled),
              V("mdc-evolution-chip__action--primary", o._isPrimary)(
                "mdc-evolution-chip__action--presentational",
                !o.isInteractive,
              )("mdc-evolution-chip__action--trailing", !o._isPrimary));
        },
        inputs: {
          isInteractive: "isInteractive",
          disabled: [2, "disabled", "disabled", H],
          tabIndex: [
            2,
            "tabIndex",
            "tabIndex",
            (e) => (e == null ? -1 : ae(e)),
          ],
          _allowFocusWhenDisabled: "_allowFocusWhenDisabled",
        },
        standalone: !0,
        features: [st],
      }));
    let n = t;
    return n;
  })();
var qb = 0,
  li = (() => {
    let t = class t {
      _hasFocus() {
        return this._hasFocusInternal;
      }
      get value() {
        return this._value !== void 0
          ? this._value
          : this._textElement.textContent.trim();
      }
      set value(e) {
        this._value = e;
      }
      get ripple() {
        return this._rippleLoader?.getRipple(this._elementRef.nativeElement);
      }
      set ripple(e) {
        this._rippleLoader?.attachRipple(this._elementRef.nativeElement, e);
      }
      constructor(e, i, o, a, s, c, l) {
        (this._changeDetectorRef = e),
          (this._elementRef = i),
          (this._ngZone = o),
          (this._focusMonitor = a),
          (this._globalRippleOptions = l),
          (this._onFocus = new w()),
          (this._onBlur = new w()),
          (this.role = null),
          (this._hasFocusInternal = !1),
          (this.id = `mat-mdc-chip-${qb++}`),
          (this.ariaLabel = null),
          (this.ariaDescription = null),
          (this._ariaDescriptionId = `${this.id}-aria-description`),
          (this.removable = !0),
          (this.highlighted = !1),
          (this.disableRipple = !1),
          (this.disabled = !1),
          (this.removed = new O()),
          (this.destroyed = new O()),
          (this.basicChipAttrName = "mat-basic-chip"),
          (this._rippleLoader = v(Jr)),
          (this._injector = v(at)),
          (this._document = s),
          (this._animationsDisabled = c === "NoopAnimations"),
          this._monitorFocus(),
          this._rippleLoader?.configureRipple(this._elementRef.nativeElement, {
            className: "mat-mdc-chip-ripple",
            disabled: this._isRippleDisabled(),
          });
      }
      ngOnInit() {
        let e = this._elementRef.nativeElement;
        this._isBasicChip =
          e.hasAttribute(this.basicChipAttrName) ||
          e.tagName.toLowerCase() === this.basicChipAttrName;
      }
      ngAfterViewInit() {
        (this._textElement = this._elementRef.nativeElement.querySelector(
          ".mat-mdc-chip-action-label",
        )),
          this._pendingFocus && ((this._pendingFocus = !1), this.focus());
      }
      ngAfterContentInit() {
        this._actionChanges = At(
          this._allLeadingIcons.changes,
          this._allTrailingIcons.changes,
          this._allRemoveIcons.changes,
        ).subscribe(() => this._changeDetectorRef.markForCheck());
      }
      ngDoCheck() {
        this._rippleLoader.setDisabled(
          this._elementRef.nativeElement,
          this._isRippleDisabled(),
        );
      }
      ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef),
          this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),
          this._actionChanges?.unsubscribe(),
          this.destroyed.emit({ chip: this }),
          this.destroyed.complete();
      }
      remove() {
        this.removable && this.removed.emit({ chip: this });
      }
      _isRippleDisabled() {
        return (
          this.disabled ||
          this.disableRipple ||
          this._animationsDisabled ||
          this._isBasicChip ||
          !!this._globalRippleOptions?.disabled
        );
      }
      _hasTrailingIcon() {
        return !!(this.trailingIcon || this.removeIcon);
      }
      _handleKeydown(e) {
        ((e.keyCode === 8 && !e.repeat) || e.keyCode === 46) &&
          (e.preventDefault(), this.remove());
      }
      focus() {
        this.disabled ||
          (this.primaryAction
            ? this.primaryAction.focus()
            : (this._pendingFocus = !0));
      }
      _getSourceAction(e) {
        return this._getActions().find((i) => {
          let o = i._elementRef.nativeElement;
          return o === e || o.contains(e);
        });
      }
      _getActions() {
        let e = [];
        return (
          this.primaryAction && e.push(this.primaryAction),
          this.removeIcon && e.push(this.removeIcon),
          this.trailingIcon && e.push(this.trailingIcon),
          e
        );
      }
      _handlePrimaryActionInteraction() {}
      _monitorFocus() {
        this._focusMonitor.monitor(this._elementRef, !0).subscribe((e) => {
          let i = e !== null;
          i !== this._hasFocusInternal &&
            ((this._hasFocusInternal = i),
            i
              ? this._onFocus.next({ chip: this })
              : Dt(
                  () =>
                    this._ngZone.run(() => this._onBlur.next({ chip: this })),
                  { injector: this._injector },
                ));
        });
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(ot), d(E), d(S), d(Ht), d(k), d(mt, 8), d(ji, 8));
    }),
      (t.ɵcmp = I({
        type: t,
        selectors: [
          ["mat-basic-chip"],
          ["", "mat-basic-chip", ""],
          ["mat-chip"],
          ["", "mat-chip", ""],
        ],
        contentQueries: function (i, o, a) {
          if (
            (i & 1 &&
              (ct(a, Uh, 5),
              ct(a, Hh, 5),
              ct(a, $h, 5),
              ct(a, Uh, 5),
              ct(a, Hh, 5),
              ct(a, $h, 5)),
            i & 2)
          ) {
            let s;
            P((s = N())) && (o.leadingIcon = s.first),
              P((s = N())) && (o.trailingIcon = s.first),
              P((s = N())) && (o.removeIcon = s.first),
              P((s = N())) && (o._allLeadingIcons = s),
              P((s = N())) && (o._allTrailingIcons = s),
              P((s = N())) && (o._allRemoveIcons = s);
          }
        },
        viewQuery: function (i, o) {
          if ((i & 1 && pt(Xs, 5), i & 2)) {
            let a;
            P((a = N())) && (o.primaryAction = a.first);
          }
        },
        hostAttrs: [1, "mat-mdc-chip"],
        hostVars: 31,
        hostBindings: function (i, o) {
          i & 1 &&
            Y("keydown", function (s) {
              return o._handleKeydown(s);
            }),
            i & 2 &&
              (Ae("id", o.id),
              G("role", o.role)("aria-label", o.ariaLabel),
              Tt("mat-" + (o.color || "primary")),
              V("mdc-evolution-chip", !o._isBasicChip)(
                "mdc-evolution-chip--disabled",
                o.disabled,
              )(
                "mdc-evolution-chip--with-trailing-action",
                o._hasTrailingIcon(),
              )("mdc-evolution-chip--with-primary-graphic", o.leadingIcon)(
                "mdc-evolution-chip--with-primary-icon",
                o.leadingIcon,
              )("mdc-evolution-chip--with-avatar", o.leadingIcon)(
                "mat-mdc-chip-with-avatar",
                o.leadingIcon,
              )("mat-mdc-chip-highlighted", o.highlighted)(
                "mat-mdc-chip-disabled",
                o.disabled,
              )("mat-mdc-basic-chip", o._isBasicChip)(
                "mat-mdc-standard-chip",
                !o._isBasicChip,
              )("mat-mdc-chip-with-trailing-icon", o._hasTrailingIcon())(
                "_mat-animation-noopable",
                o._animationsDisabled,
              ));
        },
        inputs: {
          role: "role",
          id: "id",
          ariaLabel: [0, "aria-label", "ariaLabel"],
          ariaDescription: [0, "aria-description", "ariaDescription"],
          value: "value",
          color: "color",
          removable: [2, "removable", "removable", H],
          highlighted: [2, "highlighted", "highlighted", H],
          disableRipple: [2, "disableRipple", "disableRipple", H],
          disabled: [2, "disabled", "disabled", H],
        },
        outputs: { removed: "removed", destroyed: "destroyed" },
        exportAs: ["matChip"],
        standalone: !0,
        features: [gt([{ provide: tc, useExisting: t }]), st, U],
        ngContentSelectors: Ob,
        decls: 8,
        vars: 3,
        consts: [
          [1, "mat-mdc-chip-focus-overlay"],
          [1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--primary"],
          ["matChipAction", "", 3, "isInteractive"],
          [1, "mdc-evolution-chip__graphic", "mat-mdc-chip-graphic"],
          [1, "mdc-evolution-chip__text-label", "mat-mdc-chip-action-label"],
          [
            1,
            "mat-mdc-chip-primary-focus-indicator",
            "mat-mdc-focus-indicator",
          ],
          [1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--trailing"],
        ],
        template: function (i, o) {
          i & 1 &&
            (J(Mb),
            T(0, "span", 0),
            u(1, "span", 1)(2, "span", 2),
            K(3, Fb, 2, 0, "span", 3),
            u(4, "span", 4),
            F(5),
            T(6, "span", 5),
            m()()(),
            K(7, Pb, 2, 0, "span", 6)),
            i & 2 &&
              (D(2),
              Q("isInteractive", !1),
              D(),
              ft(o.leadingIcon ? 3 : -1),
              D(4),
              ft(o._hasTrailingIcon() ? 7 : -1));
        },
        dependencies: [Xs],
        styles: [
          '.mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{flex-basis:100%;overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}.mdc-evolution-chip__action--primary{font:inherit;letter-spacing:inherit;white-space:inherit;overflow-x:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before{border-width:var(--mdc-chip-outline-width);border-radius:var(--mdc-chip-container-shape-radius);box-sizing:border-box;content:"";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1;border-style:solid}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before{border-color:var(--mdc-chip-outline-color, var(--mat-app-outline))}.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before{border-color:var(--mdc-chip-focus-outline-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before{border-color:var(--mdc-chip-disabled-outline-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before{border-width:var(--mdc-chip-flat-selected-outline-width)}.mat-mdc-basic-chip .mdc-evolution-chip__action--primary{font:inherit}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip__action--trailing{position:relative;overflow:visible}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--trailing{color:var(--mdc-chip-with-trailing-icon-trailing-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--trailing{color:var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-app-on-surface))}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip__text-label{-webkit-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__text-label{font-family:var(--mdc-chip-label-text-font, var(--mat-app-label-large-font));line-height:var(--mdc-chip-label-text-line-height, var(--mat-app-label-large-line-height));font-size:var(--mdc-chip-label-text-size, var(--mat-app-label-large-size));font-weight:var(--mdc-chip-label-text-weight, var(--mat-app-label-large-weight));letter-spacing:var(--mdc-chip-label-text-tracking, var(--mat-app-label-large-tracking))}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mdc-chip-label-text-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mdc-chip-selected-label-text-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label{color:var(--mdc-chip-disabled-label-text-color)}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mat-mdc-standard-chip .mdc-evolution-chip__graphic{width:var(--mdc-chip-with-avatar-avatar-size);height:var(--mdc-chip-with-avatar-avatar-size);font-size:var(--mdc-chip-with-avatar-avatar-size)}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%;height:20px;width:20px}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark{color:var(--mdc-chip-with-icon-selected-icon-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark{color:var(--mdc-chip-with-icon-disabled-icon-color, var(--mat-app-on-surface))}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%, -50%);opacity:1}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}.cdk-high-contrast-active .mdc-evolution-chip__checkmark-path{stroke:CanvasText !important}.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing{height:18px;width:18px;font-size:18px}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove{opacity:calc(var(--mat-chip-trailing-action-opacity)*var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity))}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus{opacity:calc(var(--mat-chip-trailing-action-focus-opacity)*var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity))}.mat-mdc-standard-chip{border-radius:var(--mdc-chip-container-shape-radius);height:var(--mdc-chip-container-height)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled){background-color:var(--mdc-chip-elevated-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{background-color:var(--mdc-chip-elevated-disabled-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled){background-color:var(--mdc-chip-elevated-selected-container-color, var(--mat-app-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled{background-color:var(--mdc-chip-flat-disabled-selected-container-color)}.cdk-high-contrast-active .mat-mdc-standard-chip{outline:solid 1px}.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary{border-radius:var(--mdc-chip-with-avatar-avatar-shape-radius);width:var(--mdc-chip-with-icon-icon-size);height:var(--mdc-chip-with-icon-icon-size);font-size:var(--mdc-chip-with-icon-icon-size)}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary{color:var(--mdc-chip-with-icon-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary{color:var(--mdc-chip-with-icon-disabled-icon-color, var(--mat-app-on-surface))}.mat-mdc-chip-highlighted{--mdc-chip-with-icon-icon-color:var(--mdc-chip-with-icon-selected-icon-color, var(--mat-app-on-secondary-container));--mdc-chip-elevated-container-color:var(--mdc-chip-elevated-selected-container-color, var(--mat-app-secondary-container));--mdc-chip-label-text-color:var(--mdc-chip-selected-label-text-color, var(--mat-app-on-secondary-container));--mdc-chip-outline-width:var(--mdc-chip-flat-selected-outline-width)}.mat-mdc-chip-focus-overlay{background:var(--mdc-chip-focus-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-focus-state-layer-color, var(--mat-app-on-secondary-container))}.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-hover-state-layer-color, var(--mat-app-on-surface-variant));opacity:var(--mdc-chip-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover,.mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-hover-state-layer-color, var(--mat-app-on-secondary-container));opacity:var(--mdc-chip-selected-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-focus-state-layer-color, var(--mat-app-on-surface-variant));opacity:var(--mdc-chip-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-focus-state-layer-color, var(--mat-app-on-secondary-container));opacity:var(--mdc-chip-selected-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar{opacity:var(--mdc-chip-with-avatar-disabled-avatar-opacity)}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{opacity:var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity)}.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{opacity:var(--mdc-chip-with-icon-disabled-icon-opacity)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{opacity:var(--mat-chip-disabled-container-opacity)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-trailing-icon-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-app-on-surface))}.mat-mdc-chip-remove{opacity:var(--mat-chip-trailing-action-opacity)}.mat-mdc-chip-remove:focus{opacity:var(--mat-chip-trailing-action-focus-opacity)}.mat-mdc-chip-remove::after{background:var(--mat-chip-trailing-action-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-chip-remove:hover::after{opacity:var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-chip-remove:focus::after{opacity:var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-chip-selected .mat-mdc-chip-remove::after,.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after{background:var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-standard-chip .mdc-evolution-chip__cell--primary,.mat-mdc-standard-chip .mdc-evolution-chip__action--primary,.mat-mdc-standard-chip .mat-mdc-chip-action-label{overflow:visible}.mat-mdc-standard-chip .mat-mdc-chip-graphic,.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon{box-sizing:content-box}.mat-mdc-standard-chip._mat-animation-noopable,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path{transition-duration:1ms;animation-duration:1ms}.mat-mdc-chip-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;opacity:0;border-radius:inherit;transition:opacity 150ms linear}._mat-animation-noopable .mat-mdc-chip-focus-overlay{transition:none}.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay{display:none}.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-chip-avatar{text-align:center;line-height:1;color:var(--mdc-chip-with-icon-icon-color, currentColor)}.mat-mdc-chip{position:relative;z-index:0}.mat-mdc-chip-action-label{text-align:left;z-index:1}[dir=rtl] .mat-mdc-chip-action-label{text-align:right}.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label{position:relative}.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.mat-mdc-chip-action-label .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-chip-remove::before{margin:calc(var(--mat-mdc-focus-indicator-border-width, 3px)*-1);left:8px;right:8px}.mat-mdc-chip-remove::after{content:"";display:block;opacity:0;position:absolute;top:-2px;bottom:-2px;left:6px;right:6px;border-radius:50%}.mat-mdc-chip-remove .mat-icon{width:18px;height:18px;font-size:18px;box-sizing:content-box}.mat-chip-edit-input{cursor:text;display:inline-block;color:inherit;outline:0}.cdk-high-contrast-active .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple){outline-width:3px}.mat-mdc-chip-action:focus .mat-mdc-focus-indicator::before{content:""}',
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })();
var Ks = (() => {
    let t = class t {
      constructor(e, i) {
        (this._elementRef = e), (this._document = i);
      }
      initialize(e) {
        this.getNativeElement().focus(), this.setValue(e);
      }
      getNativeElement() {
        return this._elementRef.nativeElement;
      }
      setValue(e) {
        (this.getNativeElement().textContent = e),
          this._moveCursorToEndOfInput();
      }
      getValue() {
        return this.getNativeElement().textContent || "";
      }
      _moveCursorToEndOfInput() {
        let e = this._document.createRange();
        e.selectNodeContents(this.getNativeElement()), e.collapse(!1);
        let i = window.getSelection();
        i.removeAllRanges(), i.addRange(e);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(E), d(k));
    }),
      (t.ɵdir = M({
        type: t,
        selectors: [["span", "matChipEditInput", ""]],
        hostAttrs: [
          "role",
          "textbox",
          "tabindex",
          "-1",
          "contenteditable",
          "true",
          1,
          "mat-chip-edit-input",
        ],
        standalone: !0,
      }));
    let n = t;
    return n;
  })(),
  ec = (() => {
    let t = class t extends li {
      constructor(e, i, o, a, s, c, l, h) {
        super(e, i, o, a, s, c, l),
          (this.basicChipAttrName = "mat-basic-chip-row"),
          (this._editStartPending = !1),
          (this.editable = !1),
          (this.edited = new O()),
          (this._isEditing = !1),
          (this.role = "row"),
          this._onBlur.pipe(z(this.destroyed)).subscribe(() => {
            this._isEditing && !this._editStartPending && this._onEditFinish();
          });
      }
      _hasTrailingIcon() {
        return !this._isEditing && super._hasTrailingIcon();
      }
      _handleFocus() {
        !this._isEditing && !this.disabled && this.focus();
      }
      _handleKeydown(e) {
        e.keyCode === 13 && !this.disabled
          ? this._isEditing
            ? (e.preventDefault(), this._onEditFinish())
            : this.editable && this._startEditing(e)
          : this._isEditing
            ? e.stopPropagation()
            : super._handleKeydown(e);
      }
      _handleDoubleclick(e) {
        !this.disabled && this.editable && this._startEditing(e);
      }
      _startEditing(e) {
        if (
          !this.primaryAction ||
          (this.removeIcon &&
            this._getSourceAction(e.target) === this.removeIcon)
        )
          return;
        let i = this.value;
        (this._isEditing = this._editStartPending = !0),
          Dt(
            () => {
              this._getEditInput().initialize(i), (this._editStartPending = !1);
            },
            { injector: this._injector },
          );
      }
      _onEditFinish() {
        (this._isEditing = this._editStartPending = !1),
          this.edited.emit({
            chip: this,
            value: this._getEditInput().getValue(),
          }),
          (this._document.activeElement ===
            this._getEditInput().getNativeElement() ||
            this._document.activeElement === this._document.body) &&
            this.primaryAction.focus();
      }
      _isRippleDisabled() {
        return super._isRippleDisabled() || this._isEditing;
      }
      _getEditInput() {
        return this.contentEditInput || this.defaultEditInput;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(
        d(ot),
        d(E),
        d(S),
        d(Ht),
        d(k),
        d(mt, 8),
        d(ji, 8),
        Ee("tabindex"),
      );
    }),
      (t.ɵcmp = I({
        type: t,
        selectors: [
          ["mat-chip-row"],
          ["", "mat-chip-row", ""],
          ["mat-basic-chip-row"],
          ["", "mat-basic-chip-row", ""],
        ],
        contentQueries: function (i, o, a) {
          if ((i & 1 && ct(a, Ks, 5), i & 2)) {
            let s;
            P((s = N())) && (o.contentEditInput = s.first);
          }
        },
        viewQuery: function (i, o) {
          if ((i & 1 && pt(Ks, 5), i & 2)) {
            let a;
            P((a = N())) && (o.defaultEditInput = a.first);
          }
        },
        hostAttrs: [
          1,
          "mat-mdc-chip",
          "mat-mdc-chip-row",
          "mdc-evolution-chip",
        ],
        hostVars: 27,
        hostBindings: function (i, o) {
          i & 1 &&
            Y("focus", function (s) {
              return o._handleFocus(s);
            })("dblclick", function (s) {
              return o._handleDoubleclick(s);
            }),
            i & 2 &&
              (Ae("id", o.id),
              G("tabindex", o.disabled ? null : -1)("aria-label", null)(
                "aria-description",
                null,
              )("role", o.role),
              V("mat-mdc-chip-with-avatar", o.leadingIcon)(
                "mat-mdc-chip-disabled",
                o.disabled,
              )("mat-mdc-chip-editing", o._isEditing)(
                "mat-mdc-chip-editable",
                o.editable,
              )("mdc-evolution-chip--disabled", o.disabled)(
                "mdc-evolution-chip--with-trailing-action",
                o._hasTrailingIcon(),
              )("mdc-evolution-chip--with-primary-graphic", o.leadingIcon)(
                "mdc-evolution-chip--with-primary-icon",
                o.leadingIcon,
              )("mdc-evolution-chip--with-avatar", o.leadingIcon)(
                "mat-mdc-chip-highlighted",
                o.highlighted,
              )("mat-mdc-chip-with-trailing-icon", o._hasTrailingIcon()));
        },
        inputs: { editable: "editable" },
        outputs: { edited: "edited" },
        standalone: !0,
        features: [
          gt([
            { provide: li, useExisting: t },
            { provide: tc, useExisting: t },
          ]),
          it,
          U,
        ],
        ngContentSelectors: jb,
        decls: 10,
        vars: 9,
        consts: [
          [1, "mat-mdc-chip-focus-overlay"],
          [
            "role",
            "gridcell",
            "matChipAction",
            "",
            1,
            "mdc-evolution-chip__cell",
            "mdc-evolution-chip__cell--primary",
            3,
            "disabled",
          ],
          [1, "mdc-evolution-chip__graphic", "mat-mdc-chip-graphic"],
          [1, "mdc-evolution-chip__text-label", "mat-mdc-chip-action-label"],
          [
            "aria-hidden",
            "true",
            1,
            "mat-mdc-chip-primary-focus-indicator",
            "mat-mdc-focus-indicator",
          ],
          [
            "role",
            "gridcell",
            1,
            "mdc-evolution-chip__cell",
            "mdc-evolution-chip__cell--trailing",
          ],
          [1, "cdk-visually-hidden", 3, "id"],
          ["matChipEditInput", ""],
        ],
        template: function (i, o) {
          i & 1 &&
            (J(Lb),
            K(0, Vb, 1, 0, "span", 0),
            u(1, "span", 1),
            K(2, Bb, 2, 0, "span", 2),
            u(3, "span", 3),
            K(4, Hb, 2, 1)(5, $b, 1, 0),
            T(6, "span", 4),
            m()(),
            K(7, Wb, 2, 0, "span", 5),
            u(8, "span", 6),
            g(9),
            m()),
            i & 2 &&
              (ft(o._isEditing ? -1 : 0),
              D(),
              Q("disabled", o.disabled),
              G("aria-label", o.ariaLabel)(
                "aria-describedby",
                o._ariaDescriptionId,
              ),
              D(),
              ft(o.leadingIcon ? 2 : -1),
              D(2),
              ft(o._isEditing ? 4 : 5),
              D(3),
              ft(o._hasTrailingIcon() ? 7 : -1),
              D(),
              Q("id", o._ariaDescriptionId),
              D(),
              St(o.ariaDescription));
        },
        dependencies: [Xs, Ks],
        styles: [Nb],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })(),
  Xn = (() => {
    let t = class t {
      get chipFocusChanges() {
        return this._getChipStream((e) => e._onFocus);
      }
      get chipDestroyedChanges() {
        return this._getChipStream((e) => e.destroyed);
      }
      get chipRemovedChanges() {
        return this._getChipStream((e) => e.removed);
      }
      get disabled() {
        return this._disabled;
      }
      set disabled(e) {
        (this._disabled = e), this._syncChipsState();
      }
      get empty() {
        return !this._chips || this._chips.length === 0;
      }
      get role() {
        return this._explicitRole
          ? this._explicitRole
          : this.empty
            ? null
            : this._defaultRole;
      }
      set role(e) {
        this._explicitRole = e;
      }
      get focused() {
        return this._hasFocusedChip();
      }
      constructor(e, i, o) {
        (this._elementRef = e),
          (this._changeDetectorRef = i),
          (this._dir = o),
          (this._lastDestroyedFocusedChipIndex = null),
          (this._destroyed = new w()),
          (this._defaultRole = "presentation"),
          (this._disabled = !1),
          (this.tabIndex = 0),
          (this._explicitRole = null),
          (this._chipActions = new re());
      }
      ngAfterViewInit() {
        this._setUpFocusManagement(),
          this._trackChipSetChanges(),
          this._trackDestroyedFocusedChip();
      }
      ngOnDestroy() {
        this._keyManager?.destroy(),
          this._chipActions.destroy(),
          this._destroyed.next(),
          this._destroyed.complete();
      }
      _hasFocusedChip() {
        return this._chips && this._chips.some((e) => e._hasFocus());
      }
      _syncChipsState() {
        this._chips &&
          this._chips.forEach((e) => {
            (e.disabled = this._disabled), e._changeDetectorRef.markForCheck();
          });
      }
      focus() {}
      _handleKeydown(e) {
        this._originatesFromChip(e) && this._keyManager.onKeydown(e);
      }
      _isValidIndex(e) {
        return e >= 0 && e < this._chips.length;
      }
      _allowFocusEscape() {
        if (this.tabIndex !== -1) {
          let e = this.tabIndex;
          (this.tabIndex = -1),
            this._changeDetectorRef.markForCheck(),
            setTimeout(() => {
              (this.tabIndex = e), this._changeDetectorRef.markForCheck();
            });
        }
      }
      _getChipStream(e) {
        return this._chips.changes.pipe(
          vt(null),
          It(() => At(...this._chips.map(e))),
        );
      }
      _originatesFromChip(e) {
        let i = e.target;
        for (; i && i !== this._elementRef.nativeElement; ) {
          if (i.classList.contains("mat-mdc-chip")) return !0;
          i = i.parentElement;
        }
        return !1;
      }
      _setUpFocusManagement() {
        this._chips.changes.pipe(vt(this._chips)).subscribe((e) => {
          let i = [];
          e.forEach((o) => o._getActions().forEach((a) => i.push(a))),
            this._chipActions.reset(i),
            this._chipActions.notifyOnChanges();
        }),
          (this._keyManager = new Pi(this._chipActions)
            .withVerticalOrientation()
            .withHorizontalOrientation(this._dir ? this._dir.value : "ltr")
            .withHomeAndEnd()
            .skipPredicate((e) => this._skipPredicate(e))),
          this.chipFocusChanges
            .pipe(z(this._destroyed))
            .subscribe(({ chip: e }) => {
              let i = e._getSourceAction(document.activeElement);
              i && this._keyManager.updateActiveItem(i);
            }),
          this._dir?.change
            .pipe(z(this._destroyed))
            .subscribe((e) => this._keyManager.withHorizontalOrientation(e));
      }
      _skipPredicate(e) {
        return !e.isInteractive || e.disabled;
      }
      _trackChipSetChanges() {
        this._chips.changes.pipe(vt(null), z(this._destroyed)).subscribe(() => {
          this.disabled && Promise.resolve().then(() => this._syncChipsState()),
            this._redirectDestroyedChipFocus();
        });
      }
      _trackDestroyedFocusedChip() {
        this.chipDestroyedChanges.pipe(z(this._destroyed)).subscribe((e) => {
          let o = this._chips.toArray().indexOf(e.chip);
          this._isValidIndex(o) &&
            e.chip._hasFocus() &&
            (this._lastDestroyedFocusedChipIndex = o);
        });
      }
      _redirectDestroyedChipFocus() {
        if (this._lastDestroyedFocusedChipIndex != null) {
          if (this._chips.length) {
            let e = Math.min(
                this._lastDestroyedFocusedChipIndex,
                this._chips.length - 1,
              ),
              i = this._chips.toArray()[e];
            i.disabled
              ? this._chips.length === 1
                ? this.focus()
                : this._keyManager.setPreviousItemActive()
              : i.focus();
          } else this.focus();
          this._lastDestroyedFocusedChipIndex = null;
        }
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(E), d(ot), d(wt, 8));
    }),
      (t.ɵcmp = I({
        type: t,
        selectors: [["mat-chip-set"]],
        contentQueries: function (i, o, a) {
          if ((i & 1 && ct(a, li, 5), i & 2)) {
            let s;
            P((s = N())) && (o._chips = s);
          }
        },
        hostAttrs: [1, "mat-mdc-chip-set", "mdc-evolution-chip-set"],
        hostVars: 1,
        hostBindings: function (i, o) {
          i & 1 &&
            Y("keydown", function (s) {
              return o._handleKeydown(s);
            }),
            i & 2 && G("role", o.role);
        },
        inputs: {
          disabled: [2, "disabled", "disabled", H],
          role: "role",
          tabIndex: [2, "tabIndex", "tabIndex", (e) => (e == null ? 0 : ae(e))],
        },
        standalone: !0,
        features: [st, U],
        ngContentSelectors: Wh,
        decls: 2,
        vars: 0,
        consts: [["role", "presentation", 1, "mdc-evolution-chip-set__chips"]],
        template: function (i, o) {
          i & 1 && (J(), u(0, "div", 0), F(1), m());
        },
        styles: [
          ".mat-mdc-chip-set{display:flex}.mat-mdc-chip-set:focus{outline:none}.mat-mdc-chip-set .mdc-evolution-chip-set__chips{min-width:100%;margin-left:-8px;margin-right:0}.mat-mdc-chip-set .mdc-evolution-chip{margin:4px 0 4px 8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips{margin-left:0;margin-right:-8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip{margin-left:0;margin-right:8px}.mdc-evolution-chip-set__chips{display:flex;flex-flow:wrap;min-width:0}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic{flex-grow:0}.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary{flex-basis:100%;justify-content:start}input.mat-mdc-chip-input{flex:1 0 150px;margin-left:8px}[dir=rtl] input.mat-mdc-chip-input{margin-left:0;margin-right:8px}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })();
var Js = class {
    constructor(t, r) {
      (this.source = t), (this.value = r);
    }
  },
  Gh = (() => {
    let t = class t extends Xn {
      get disabled() {
        return this.ngControl ? !!this.ngControl.disabled : this._disabled;
      }
      set disabled(e) {
        (this._disabled = e), this._syncChipsState();
      }
      get id() {
        return this._chipInput.id;
      }
      get empty() {
        return (
          (!this._chipInput || this._chipInput.empty) &&
          (!this._chips || this._chips.length === 0)
        );
      }
      get placeholder() {
        return this._chipInput
          ? this._chipInput.placeholder
          : this._placeholder;
      }
      set placeholder(e) {
        (this._placeholder = e), this.stateChanges.next();
      }
      get focused() {
        return this._chipInput.focused || this._hasFocusedChip();
      }
      get required() {
        return (
          this._required ??
          this.ngControl?.control?.hasValidator(go.required) ??
          !1
        );
      }
      set required(e) {
        (this._required = e), this.stateChanges.next();
      }
      get shouldLabelFloat() {
        return !this.empty || this.focused;
      }
      get value() {
        return this._value;
      }
      set value(e) {
        this._value = e;
      }
      get errorStateMatcher() {
        return this._errorStateTracker.matcher;
      }
      set errorStateMatcher(e) {
        this._errorStateTracker.matcher = e;
      }
      get chipBlurChanges() {
        return this._getChipStream((e) => e._onBlur);
      }
      get errorState() {
        return this._errorStateTracker.errorState;
      }
      set errorState(e) {
        this._errorStateTracker.errorState = e;
      }
      constructor(e, i, o, a, s, c, l) {
        super(e, i, o),
          (this.ngControl = l),
          (this.controlType = "mat-chip-grid"),
          (this._defaultRole = "grid"),
          (this._ariaDescribedbyIds = []),
          (this._onTouched = () => {}),
          (this._onChange = () => {}),
          (this._value = []),
          (this.change = new O()),
          (this.valueChange = new O()),
          (this._chips = void 0),
          (this.stateChanges = new w()),
          this.ngControl && (this.ngControl.valueAccessor = this),
          (this._errorStateTracker = new Kr(c, l, s, a, this.stateChanges));
      }
      ngAfterContentInit() {
        this.chipBlurChanges.pipe(z(this._destroyed)).subscribe(() => {
          this._blur(), this.stateChanges.next();
        }),
          At(this.chipFocusChanges, this._chips.changes)
            .pipe(z(this._destroyed))
            .subscribe(() => this.stateChanges.next());
      }
      ngAfterViewInit() {
        super.ngAfterViewInit(), this._chipInput;
      }
      ngDoCheck() {
        this.ngControl && this.updateErrorState();
      }
      ngOnDestroy() {
        super.ngOnDestroy(), this.stateChanges.complete();
      }
      registerInput(e) {
        (this._chipInput = e),
          this._chipInput.setDescribedByIds(this._ariaDescribedbyIds);
      }
      onContainerClick(e) {
        !this.disabled && !this._originatesFromChip(e) && this.focus();
      }
      focus() {
        this.disabled ||
          this._chipInput.focused ||
          (!this._chips.length || this._chips.first.disabled
            ? Promise.resolve().then(() => this._chipInput.focus())
            : this._chips.length &&
              this._keyManager.activeItemIndex !== 0 &&
              this._keyManager.setFirstItemActive(),
          this.stateChanges.next());
      }
      setDescribedByIds(e) {
        (this._ariaDescribedbyIds = e), this._chipInput?.setDescribedByIds(e);
      }
      writeValue(e) {
        this._value = e;
      }
      registerOnChange(e) {
        this._onChange = e;
      }
      registerOnTouched(e) {
        this._onTouched = e;
      }
      setDisabledState(e) {
        (this.disabled = e), this.stateChanges.next();
      }
      updateErrorState() {
        this._errorStateTracker.updateErrorState();
      }
      _blur() {
        this.disabled ||
          setTimeout(() => {
            this.focused || (this._propagateChanges(), this._markAsTouched());
          });
      }
      _allowFocusEscape() {
        this._chipInput.focused || super._allowFocusEscape();
      }
      _handleKeydown(e) {
        let i = e.keyCode,
          o = this._keyManager.activeItem;
        if (i === 9)
          this._chipInput.focused &&
          zt(e, "shiftKey") &&
          this._chips.length &&
          !this._chips.last.disabled
            ? (e.preventDefault(),
              o ? this._keyManager.setActiveItem(o) : this._focusLastChip())
            : super._allowFocusEscape();
        else if (!this._chipInput.focused)
          if ((i === 38 || i === 40) && o) {
            let a = this._chipActions.filter(
                (l) => l._isPrimary === o._isPrimary && !this._skipPredicate(l),
              ),
              s = a.indexOf(o),
              c = e.keyCode === 38 ? -1 : 1;
            e.preventDefault(),
              s > -1 &&
                this._isValidIndex(s + c) &&
                this._keyManager.setActiveItem(a[s + c]);
          } else super._handleKeydown(e);
        this.stateChanges.next();
      }
      _focusLastChip() {
        this._chips.length && this._chips.last.focus();
      }
      _propagateChanges() {
        let e = this._chips.length
          ? this._chips.toArray().map((i) => i.value)
          : [];
        (this._value = e),
          this.change.emit(new Js(this, e)),
          this.valueChange.emit(e),
          this._onChange(e),
          this._changeDetectorRef.markForCheck();
      }
      _markAsTouched() {
        this._onTouched(),
          this._changeDetectorRef.markForCheck(),
          this.stateChanges.next();
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(
        d(E),
        d(ot),
        d(wt, 8),
        d(Ys, 8),
        d(Zs, 8),
        d(ds),
        d(_o, 10),
      );
    }),
      (t.ɵcmp = I({
        type: t,
        selectors: [["mat-chip-grid"]],
        contentQueries: function (i, o, a) {
          if ((i & 1 && ct(a, ec, 5), i & 2)) {
            let s;
            P((s = N())) && (o._chips = s);
          }
        },
        hostAttrs: [
          1,
          "mat-mdc-chip-set",
          "mat-mdc-chip-grid",
          "mdc-evolution-chip-set",
        ],
        hostVars: 10,
        hostBindings: function (i, o) {
          i & 1 &&
            Y("focus", function () {
              return o.focus();
            })("blur", function () {
              return o._blur();
            }),
            i & 2 &&
              (G("role", o.role)(
                "tabindex",
                o.disabled || (o._chips && o._chips.length === 0)
                  ? -1
                  : o.tabIndex,
              )("aria-disabled", o.disabled.toString())(
                "aria-invalid",
                o.errorState,
              ),
              V("mat-mdc-chip-list-disabled", o.disabled)(
                "mat-mdc-chip-list-invalid",
                o.errorState,
              )("mat-mdc-chip-list-required", o.required));
        },
        inputs: {
          disabled: [2, "disabled", "disabled", H],
          placeholder: "placeholder",
          required: [2, "required", "required", H],
          value: "value",
          errorStateMatcher: "errorStateMatcher",
        },
        outputs: { change: "change", valueChange: "valueChange" },
        standalone: !0,
        features: [gt([{ provide: zh, useExisting: t }]), st, it, U],
        ngContentSelectors: Wh,
        decls: 2,
        vars: 0,
        consts: [["role", "presentation", 1, "mdc-evolution-chip-set__chips"]],
        template: function (i, o) {
          i & 1 && (J(), u(0, "div", 0), F(1), m());
        },
        styles: [Gb],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })();
function Yb(n, t) {
  if ((n & 1 && T(0, "span", 27), n & 2)) {
    let r = t.$implicit,
      e = nt(2);
    Ac(r.style), Q("hidden", e.isSmallScreen)("innerHTML", r.text + " ", wc);
  }
}
function Zb(n, t) {
  if (
    (n & 1 &&
      (u(0, "mat-chip", 25),
      K(1, Yb, 1, 4, "span", 26),
      u(2, "span"),
      g(3),
      m()()),
    n & 2)
  ) {
    let r = t.$implicit;
    D(), Q("ngForOf", r.textElements), D(2), St(r.icon);
  }
}
var Do = class n {
  isSmallScreen = !1;
  isExtraSmallScreen = !1;
  introductionChipData = [
    {
      textElements: [{ text: "Full-time software engineer" }],
      icon: "\u{1F469}\u200D\u{1F4BB}",
    },
    { textElements: [{ text: "Part-time game developer" }], icon: "\u{1F3AE}" },
    {
      textElements: [{ text: "Occasional creative artist" }],
      icon: "\u{1F3A8}",
    },
    {
      textElements: [{ text: "Recreational language learner" }],
      icon: "\u{1F4DA}",
    },
    {
      textElements: [{ text: "Aspirational machine learning researcher" }],
      icon: "\u{1F916}",
    },
    {
      textElements: [
        { text: "Absolutely" },
        { text: "NOT", style: "color: palevioletred; font-weight: 700;" },
        { text: "a pink lover" },
      ],
      icon: "\u{1F624}",
    },
  ];
  onResize() {
    (this.isSmallScreen = window.innerWidth <= 540),
      (this.isExtraSmallScreen = window.innerWidth <= 360),
      console.log("x-small", this.isExtraSmallScreen);
  }
  ngOnInit() {
    this.onResize();
  }
  static ɵfac = function (r) {
    return new (r || n)();
  };
  static ɵcmp = I({
    type: n,
    selectors: [["app-introduction"]],
    hostBindings: function (r, e) {
      r & 1 &&
        Y(
          "resize",
          function (o) {
            return e.onResize(o);
          },
          !1,
          gi,
        );
    },
    decls: 173,
    vars: 5,
    consts: [
      [1, "container", 2, "max-width", "70rem"],
      [1, "header"],
      [1, "title-text"],
      [1, "title-greeting"],
      [2, "font-weight", "400"],
      [
        1,
        "my-name",
        2,
        "font-style",
        "oblique",
        "margin-left",
        "2rem",
        "margin-top",
        "1rem",
      ],
      [3, "inset"],
      [1, "title-hook"],
      [1, "hook-tags"],
      ["style", "margin: 0.2rem", 4, "ngFor", "ngForOf"],
      [1, "hook-quote", 3, "hidden"],
      [2, "font-style", "oblique", "font-weight", "bold"],
      [2, "font-weight", "bold", "font-style", "oblique"],
      [1, "title-image", 3, "hidden"],
      [
        2,
        "position",
        "absolute",
        "color",
        "black",
        "text-shadow",
        `-2px -2px 0 white,
            2px 2px 0 wheat`,
        "padding-bottom",
        "1rem",
        "font-family",
        "Arial, Helvetica, sans-serif",
      ],
      ["width", "95%", "src", "images/Hue-ao-dai-old-sticker-style.png"],
      [2, "margin", "0.5rem", "font-size", "small"],
      [2, "font-weight", "bold"],
      [1, "card"],
      [2, "margin-top", "0"],
      [1, "education-container"],
      [1, "skills"],
      [
        "mat-stroked-button",
        "",
        2,
        "margin-right",
        "0.5rem",
        "margin-bottom",
        "0.5rem",
        "cursor",
        "default",
      ],
      [2, "margin-bottom", "2.5rem"],
      [1, "experience-header"],
      [2, "margin", "0.2rem"],
      [3, "hidden", "innerHTML", "style", 4, "ngFor", "ngForOf"],
      [3, "hidden", "innerHTML"],
    ],
    template: function (r, e) {
      r & 1 &&
        (u(0, "mat-card", 0)(1, "mat-card-header", 1)(2, "mat-card-title", 2)(
          3,
          "div",
          3,
        )(4, "div", 4),
        g(5, "Hello, I'm"),
        m(),
        u(6, "h2", 5),
        g(7, " Xuyen Nguyen. "),
        m(),
        T(8, "mat-divider", 6),
        m(),
        u(9, "div", 7)(10, "div", 8),
        K(11, Zb, 4, 2, "mat-chip", 9),
        m(),
        u(12, "div", 10)(13, "p"),
        g(14, ' "'),
        u(15, "span", 11),
        g(16, "Motivation"),
        m(),
        g(17, " is essentially "),
        u(18, "span", 12),
        g(19, "momentum"),
        m(),
        g(20, ". Start taking action "),
        u(21, "span"),
        g(22, "now"),
        m(),
        g(23, ', and motivation will follow, driving you forward." '),
        m()()()(),
        u(24, "div", 13)(25, "div", 14)(26, "h1"),
        g(27, "Hue, Vietnam"),
        m(),
        u(28, "h3"),
        g(29, "July, 2023"),
        m()(),
        T(30, "img", 15),
        m()(),
        u(31, "div", 10)(32, "p"),
        g(33, ' "'),
        u(34, "span", 11),
        g(35, "Motivation"),
        m(),
        g(36, " is essentially "),
        u(37, "span", 12),
        g(38, "momentum"),
        m(),
        g(39, ". Start taking action "),
        u(40, "span"),
        g(41, "now"),
        m(),
        g(42, ', and motivation will follow, driving you forward." '),
        m()(),
        u(43, "mat-card-content")(44, "div", 16)(45, "span", 17),
        g(46, "ABOUT ME"),
        m()(),
        u(47, "mat-card", 18)(48, "mat-card-content")(49, "p", 19),
        g(
          50,
          " I am a self-learner at heart. I have taught myself various new skills from speaking Japanese to building websites to knitting. As much as I value formal education, I believe that the ability to teach myself is a powerful asset in its own right. ",
        ),
        m(),
        u(51, "p"),
        g(
          52,
          " This belief guided me throughout my years studying computer science, inspiring me to build many educational tools such as ASL Alphabet Learning, Chinese Typing Practice, Class Schedule Builder, etc. One of my proudest moments was when my Capstone team won 3rd place for the most outstanding project with our Signable app\u2014an application designed to teach the ASL alphabet. After this achievement, I felt very hopeful about the potential of AI and Machine Learning (AI/ML) in revolutionizing learning and skills acquistion. Therefore, I plan to go back to school for a Master's Degree in AI/ML to deepen my expertise in these fields. ",
        ),
        m(),
        u(53, "p"),
        g(
          54,
          " Outside of work and study, I enjoy drawing and 3D modeling. I also love outdoor activities like hiking, rollerblading, and swimming. While I'm not a heavy gamer, I thoroughly enjoy playing games with friends. Some of my favorite titles are The Sims 4, Monster Hunter Rise, Animal Crossing: New Horizons, and Don't Starve Together. ",
        ),
        m()()(),
        u(55, "div", 16)(56, "span", 17),
        g(57, "EDUCATION"),
        m()(),
        u(58, "mat-card", 18)(59, "mat-card-content", 20)(60, "div")(61, "div"),
        g(62, "University of Utah"),
        m(),
        u(63, "div"),
        g(64, "Bachelor of Science in Computer Science"),
        m()(),
        u(65, "div")(66, "div"),
        g(67, "Salt Lake City, Utah"),
        m(),
        u(68, "div"),
        g(69, "May 2024"),
        m()()()(),
        u(70, "div", 16)(71, "span", 17),
        g(72, "TECHNICAL SKILLS"),
        m()(),
        u(73, "mat-card", 18)(74, "mat-card-content")(75, "div", 21)(
          76,
          "button",
          22,
        ),
        g(77, " Web Development "),
        m(),
        u(78, "button", 22),
        g(79, " Machine Learning "),
        m(),
        u(80, "button", 22),
        g(81, " Artifitial Intelligence "),
        m(),
        u(82, "button", 22),
        g(83, " Computer Graphics "),
        m()(),
        u(84, "mat-chip-set", 21)(85, "mat-chip"),
        g(86, "Angular"),
        m(),
        u(87, "mat-chip"),
        g(88, "React"),
        m(),
        u(89, "mat-chip"),
        g(90, "Next"),
        m(),
        u(91, "mat-chip"),
        g(92, "Django"),
        m(),
        u(93, "mat-chip"),
        g(94, "ASP.NET"),
        m(),
        u(95, "mat-chip"),
        g(96, "Spring Boot"),
        m(),
        u(97, "mat-chip"),
        g(98, "REST API"),
        m(),
        u(99, "mat-chip"),
        g(100, "JavaScript"),
        m(),
        u(101, "mat-chip"),
        g(102, "TypeScript"),
        m(),
        u(103, "mat-chip"),
        g(104, "HTML"),
        m(),
        u(105, "mat-chip"),
        g(106, "CSS"),
        m(),
        u(107, "mat-chip"),
        g(108, "Python"),
        m(),
        u(109, "mat-chip"),
        g(110, "C#"),
        m(),
        u(111, "mat-chip"),
        g(112, "C/C++"),
        m(),
        u(113, "mat-chip"),
        g(114, "Java"),
        m(),
        u(115, "mat-chip"),
        g(116, "SQL"),
        m(),
        u(117, "mat-chip"),
        g(118, "Git"),
        m(),
        u(119, "mat-chip"),
        g(120, "TensorFlow"),
        m()(),
        u(121, "mat-chip-set", 21)(122, "mat-chip"),
        g(123, "Unity"),
        m(),
        u(124, "mat-chip"),
        g(125, "Unreal Engine"),
        m(),
        u(126, "mat-chip"),
        g(127, "Maya"),
        m(),
        u(128, "mat-chip"),
        g(129, "Blender"),
        m(),
        u(130, "mat-chip"),
        g(131, "Photoshop"),
        m()()()(),
        u(132, "div", 16)(133, "span", 17),
        g(134, "EXPERIENCE"),
        m()(),
        u(135, "mat-card", 18)(136, "mat-card-content")(137, "div", 23)(
          138,
          "div",
          24,
        )(139, "div")(140, "div", 17),
        g(141, "Software Engineer"),
        m(),
        u(142, "div"),
        g(143, "BlueSkyTech"),
        m()(),
        u(144, "div")(145, "div"),
        g(146, "March 2024 - present"),
        m(),
        u(147, "div"),
        g(148, "(Remote)"),
        m()()(),
        u(149, "ul")(150, "li"),
        g(
          151,
          " Incorporate frontend stacks including NextJS, Redux Toolkit, TypeScript, and Material UI to build responsive websites that are compatible with multiple devices and web browsers. ",
        ),
        m(),
        u(152, "li"),
        g(
          153,
          " Implement API calls for streamlined frontend-backend communication ",
        ),
        m()()(),
        u(154, "div")(155, "div", 24)(156, "div")(157, "div", 17),
        g(158, "Full-Stack Developer"),
        m(),
        u(159, "div"),
        g(160, "University of Utah - Umail"),
        m()(),
        u(161, "div")(162, "div"),
        g(163, "November 2021 - June 2024"),
        m(),
        u(164, "div"),
        g(165, "Salt Lake City, Utah"),
        m()()(),
        u(166, "ul")(167, "li"),
        g(
          168,
          " Automated 100+ tasks with PowerShell scripts that interact with database systems such as SQL Server ",
        ),
        m(),
        u(169, "li"),
        g(
          170,
          " Worked in a team and individually to troubleshoot problems in migrating 100000+ user mailboxes and groups within Microsoft Exchange servers. ",
        ),
        m(),
        u(171, "li"),
        g(
          172,
          " Maintained and updated the internal website using tools like Angular, .Net, Bootstrap, and Graph API. ",
        ),
        m()()()()()()()),
        r & 2 &&
          (D(8),
          Q("inset", !0),
          D(3),
          Q("ngForOf", e.introductionChipData),
          D(),
          Q("hidden", e.isSmallScreen),
          D(12),
          Q("hidden", e.isExtraSmallScreen),
          D(7),
          Q("hidden", !e.isSmallScreen));
    },
    dependencies: [Yc, ho, Vi, zi, Ui, Bi, Hi, li, Xn],
    styles: [
      "mat-card[_ngcontent-%COMP%]{height:100%;width:100%;margin:auto;overflow:hidden}.header[_ngcontent-%COMP%]{justify-content:space-around;margin-bottom:3rem}.skills[_ngcontent-%COMP%]{margin-bottom:1rem}.title-image[_ngcontent-%COMP%]{max-width:25rem;min-width:18rem;height:auto;display:flex;justify-content:center;align-items:end;position:relative;margin:auto 0}.title-text[_ngcontent-%COMP%]{width:98%;height:100%;display:flex;flex-direction:column;max-width:25rem}.title-greeting[_ngcontent-%COMP%]{margin:2rem 2rem 2rem 1rem}.title-hook[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;height:100%}.hook-tags[_ngcontent-%COMP%]{width:100%;text-align:right;align-self:flex-end}.hook-quote[_ngcontent-%COMP%]{text-align:center;font-weight:lighter;font-size:1.2rem;width:100%}.experience-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between}@media only screen and (max-width: 540px){.header[_ngcontent-%COMP%]{margin-bottom:0}.title-greeting[_ngcontent-%COMP%]{width:15rem;margin-right:0;font-size:small}.hook-tags[_ngcontent-%COMP%]{width:13rem}.hook-quote[_ngcontent-%COMP%]{width:95%;margin-top:2rem;margin-bottom:2rem}}.card[_ngcontent-%COMP%]{margin-bottom:2rem}.education-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}@media only screen and (max-width: 475px){.title-greeting[_ngcontent-%COMP%]{width:10rem;margin-right:0;font-size:small}.title-image[_ngcontent-%COMP%]{min-width:12rem;font-size:xx-small}.title-image[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding-bottom:0!important}.education-container[_ngcontent-%COMP%], .experience-header[_ngcontent-%COMP%]{flex-direction:column}.title-text[_ngcontent-%COMP%]{width:12rem}}@media only screen and (max-width: 360px){.header[_ngcontent-%COMP%]{flex-direction:column-reverse;align-items:center}.title-text[_ngcontent-%COMP%]{width:20rem}.title-image[_ngcontent-%COMP%]{font-size:medium}.title-greeting[_ngcontent-%COMP%]{width:100%;font-size:medium}}",
    ],
  });
};
var Kb = [
    { path: "web-app", component: ro },
    { path: "artwork", component: mo },
    { path: "others", component: po },
    { path: "", pathMatch: "full", component: Do },
    { path: "**", redirectTo: "introduction" },
  ],
  So = class n {
    static ɵfac = function (r) {
      return new (r || n)();
    };
    static ɵmod = j({ type: n });
    static ɵinj = L({ imports: [qa.forRoot(Kb), qa] });
  };
var qh = ["*"],
  Xb = ["content"],
  Jb = [[["mat-drawer"]], [["mat-drawer-content"]], "*"],
  tv = ["mat-drawer", "mat-drawer-content", "*"];
function ev(n, t) {
  if (n & 1) {
    let r = jt();
    u(0, "div", 1),
      Y("click", function () {
        ht(r);
        let i = nt();
        return ut(i._onBackdropClicked());
      }),
      m();
  }
  if (n & 2) {
    let r = nt();
    V("mat-drawer-shown", r._isShowingBackdrop());
  }
}
function iv(n, t) {
  n & 1 && (u(0, "mat-drawer-content"), F(1, 2), m());
}
var nv = {
  transformDrawer: br("transform", [
    Ze("open, open-instant", ce({ transform: "none", visibility: "visible" })),
    Ze("void", ce({ "box-shadow": "none", visibility: "hidden" })),
    Ke("void => open-instant", Ye("0ms")),
    Ke(
      "void <=> open, open-instant => void",
      Ye("400ms cubic-bezier(0.25, 0.8, 0.25, 1)"),
    ),
  ]),
};
var rv = new C("MAT_DRAWER_DEFAULT_AUTOSIZE", {
    providedIn: "root",
    factory: ov,
  }),
  Qh = new C("MAT_DRAWER_CONTAINER");
function ov() {
  return !1;
}
var di = (() => {
    let t = class t extends $i {
      constructor(e, i, o, a, s) {
        super(o, a, s), (this._changeDetectorRef = e), (this._container = i);
      }
      ngAfterContentInit() {
        this._container._contentMarginChanges.subscribe(() => {
          this._changeDetectorRef.markForCheck();
        });
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(ot), d(Ce(() => tr)), d(E), d(Vn), d(S));
    }),
      (t.ɵcmp = I({
        type: t,
        selectors: [["mat-drawer-content"]],
        hostAttrs: [1, "mat-drawer-content"],
        hostVars: 4,
        hostBindings: function (i, o) {
          i & 2 &&
            on("margin-left", o._container._contentMargins.left, "px")(
              "margin-right",
              o._container._contentMargins.right,
              "px",
            );
        },
        standalone: !0,
        features: [gt([{ provide: $i, useExisting: t }]), it, U],
        ngContentSelectors: qh,
        decls: 1,
        vars: 0,
        template: function (i, o) {
          i & 1 && (J(), F(0));
        },
        encapsulation: 2,
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })(),
  Jn = (() => {
    let t = class t {
      get position() {
        return this._position;
      }
      set position(e) {
        (e = e === "end" ? "end" : "start"),
          e !== this._position &&
            (this._isAttached && this._updatePositionInParent(e),
            (this._position = e),
            this.onPositionChanged.emit());
      }
      get mode() {
        return this._mode;
      }
      set mode(e) {
        (this._mode = e),
          this._updateFocusTrapState(),
          this._modeChanged.next();
      }
      get disableClose() {
        return this._disableClose;
      }
      set disableClose(e) {
        this._disableClose = ie(e);
      }
      get autoFocus() {
        let e = this._autoFocus;
        return e ?? (this.mode === "side" ? "dialog" : "first-tabbable");
      }
      set autoFocus(e) {
        (e === "true" || e === "false" || e == null) && (e = ie(e)),
          (this._autoFocus = e);
      }
      get opened() {
        return this._opened;
      }
      set opened(e) {
        this.toggle(ie(e));
      }
      constructor(e, i, o, a, s, c, l, h) {
        (this._elementRef = e),
          (this._focusTrapFactory = i),
          (this._focusMonitor = o),
          (this._platform = a),
          (this._ngZone = s),
          (this._interactivityChecker = c),
          (this._doc = l),
          (this._container = h),
          (this._focusTrap = null),
          (this._elementFocusedBeforeDrawerWasOpened = null),
          (this._enableAnimations = !1),
          (this._position = "start"),
          (this._mode = "over"),
          (this._disableClose = !1),
          (this._opened = !1),
          (this._animationStarted = new w()),
          (this._animationEnd = new w()),
          (this._animationState = "void"),
          (this.openedChange = new O(!0)),
          (this._openedStream = this.openedChange.pipe(
            Z((p) => p),
            R(() => {}),
          )),
          (this.openedStart = this._animationStarted.pipe(
            Z(
              (p) =>
                p.fromState !== p.toState && p.toState.indexOf("open") === 0,
            ),
            Ji(void 0),
          )),
          (this._closedStream = this.openedChange.pipe(
            Z((p) => !p),
            R(() => {}),
          )),
          (this.closedStart = this._animationStarted.pipe(
            Z((p) => p.fromState !== p.toState && p.toState === "void"),
            Ji(void 0),
          )),
          (this._destroyed = new w()),
          (this.onPositionChanged = new O()),
          (this._modeChanged = new w()),
          (this._injector = v(at)),
          (this._changeDetectorRef = v(ot)),
          this.openedChange.pipe(z(this._destroyed)).subscribe((p) => {
            p
              ? (this._doc &&
                  (this._elementFocusedBeforeDrawerWasOpened =
                    this._doc.activeElement),
                this._takeFocus())
              : this._isFocusWithinDrawer() &&
                this._restoreFocus(this._openedVia || "program");
          }),
          this._ngZone.runOutsideAngular(() => {
            ne(this._elementRef.nativeElement, "keydown")
              .pipe(
                Z((p) => p.keyCode === 27 && !this.disableClose && !zt(p)),
                z(this._destroyed),
              )
              .subscribe((p) =>
                this._ngZone.run(() => {
                  this.close(), p.stopPropagation(), p.preventDefault();
                }),
              );
          }),
          this._animationEnd
            .pipe(
              Ue(
                (p, _) =>
                  p.fromState === _.fromState && p.toState === _.toState,
              ),
            )
            .subscribe((p) => {
              let { fromState: _, toState: A } = p;
              ((A.indexOf("open") === 0 && _ === "void") ||
                (A === "void" && _.indexOf("open") === 0)) &&
                this.openedChange.emit(this._opened);
            });
      }
      _forceFocus(e, i) {
        this._interactivityChecker.isFocusable(e) ||
          ((e.tabIndex = -1),
          this._ngZone.runOutsideAngular(() => {
            let o = () => {
              e.removeEventListener("blur", o),
                e.removeEventListener("mousedown", o),
                e.removeAttribute("tabindex");
            };
            e.addEventListener("blur", o), e.addEventListener("mousedown", o);
          })),
          e.focus(i);
      }
      _focusByCssSelector(e, i) {
        let o = this._elementRef.nativeElement.querySelector(e);
        o && this._forceFocus(o, i);
      }
      _takeFocus() {
        if (!this._focusTrap) return;
        let e = this._elementRef.nativeElement;
        switch (this.autoFocus) {
          case !1:
          case "dialog":
            return;
          case !0:
          case "first-tabbable":
            Dt(
              () => {
                !this._focusTrap.focusInitialElement() &&
                  typeof e.focus == "function" &&
                  e.focus();
              },
              { injector: this._injector },
            );
            break;
          case "first-heading":
            this._focusByCssSelector(
              'h1, h2, h3, h4, h5, h6, [role="heading"]',
            );
            break;
          default:
            this._focusByCssSelector(this.autoFocus);
            break;
        }
      }
      _restoreFocus(e) {
        this.autoFocus !== "dialog" &&
          (this._elementFocusedBeforeDrawerWasOpened
            ? this._focusMonitor.focusVia(
                this._elementFocusedBeforeDrawerWasOpened,
                e,
              )
            : this._elementRef.nativeElement.blur(),
          (this._elementFocusedBeforeDrawerWasOpened = null));
      }
      _isFocusWithinDrawer() {
        let e = this._doc.activeElement;
        return !!e && this._elementRef.nativeElement.contains(e);
      }
      ngAfterViewInit() {
        (this._isAttached = !0),
          this._position === "end" && this._updatePositionInParent("end"),
          this._platform.isBrowser &&
            ((this._focusTrap = this._focusTrapFactory.create(
              this._elementRef.nativeElement,
            )),
            this._updateFocusTrapState());
      }
      ngAfterContentChecked() {
        this._platform.isBrowser && (this._enableAnimations = !0);
      }
      ngOnDestroy() {
        this._focusTrap?.destroy(),
          this._anchor?.remove(),
          (this._anchor = null),
          this._animationStarted.complete(),
          this._animationEnd.complete(),
          this._modeChanged.complete(),
          this._destroyed.next(),
          this._destroyed.complete();
      }
      open(e) {
        return this.toggle(!0, e);
      }
      close() {
        return this.toggle(!1);
      }
      _closeViaBackdropClick() {
        return this._setOpen(!1, !0, "mouse");
      }
      toggle(e = !this.opened, i) {
        e && i && (this._openedVia = i);
        let o = this._setOpen(
          e,
          !e && this._isFocusWithinDrawer(),
          this._openedVia || "program",
        );
        return e || (this._openedVia = null), o;
      }
      _setOpen(e, i, o) {
        return (
          (this._opened = e),
          e
            ? (this._animationState = this._enableAnimations
                ? "open"
                : "open-instant")
            : ((this._animationState = "void"), i && this._restoreFocus(o)),
          this._changeDetectorRef.markForCheck(),
          this._updateFocusTrapState(),
          new Promise((a) => {
            this.openedChange
              .pipe(Ct(1))
              .subscribe((s) => a(s ? "open" : "close"));
          })
        );
      }
      _getWidth() {
        return (
          (this._elementRef.nativeElement &&
            this._elementRef.nativeElement.offsetWidth) ||
          0
        );
      }
      _updateFocusTrapState() {
        this._focusTrap &&
          (this._focusTrap.enabled =
            !!this._container?.hasBackdrop && this.opened);
      }
      _updatePositionInParent(e) {
        if (!this._platform.isBrowser) return;
        let i = this._elementRef.nativeElement,
          o = i.parentNode;
        e === "end"
          ? (this._anchor ||
              ((this._anchor = this._doc.createComment("mat-drawer-anchor")),
              o.insertBefore(this._anchor, i)),
            o.appendChild(i))
          : this._anchor &&
            this._anchor.parentNode.insertBefore(i, this._anchor);
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(
        d(E),
        d(Ni),
        d(Ht),
        d(q),
        d(S),
        d(oi),
        d(k, 8),
        d(Qh, 8),
      );
    }),
      (t.ɵcmp = I({
        type: t,
        selectors: [["mat-drawer"]],
        viewQuery: function (i, o) {
          if ((i & 1 && pt(Xb, 5), i & 2)) {
            let a;
            P((a = N())) && (o._content = a.first);
          }
        },
        hostAttrs: ["tabIndex", "-1", 1, "mat-drawer"],
        hostVars: 12,
        hostBindings: function (i, o) {
          i & 1 &&
            Mc("@transform.start", function (s) {
              return o._animationStarted.next(s);
            })("@transform.done", function (s) {
              return o._animationEnd.next(s);
            }),
            i & 2 &&
              (Rc("@transform", o._animationState),
              G("align", null),
              V("mat-drawer-end", o.position === "end")(
                "mat-drawer-over",
                o.mode === "over",
              )("mat-drawer-push", o.mode === "push")(
                "mat-drawer-side",
                o.mode === "side",
              )("mat-drawer-opened", o.opened));
        },
        inputs: {
          position: "position",
          mode: "mode",
          disableClose: "disableClose",
          autoFocus: "autoFocus",
          opened: "opened",
        },
        outputs: {
          openedChange: "openedChange",
          _openedStream: "opened",
          openedStart: "openedStart",
          _closedStream: "closed",
          closedStart: "closedStart",
          onPositionChanged: "positionChanged",
        },
        exportAs: ["matDrawer"],
        standalone: !0,
        features: [U],
        ngContentSelectors: qh,
        decls: 3,
        vars: 0,
        consts: [
          ["content", ""],
          ["cdkScrollable", "", 1, "mat-drawer-inner-container"],
        ],
        template: function (i, o) {
          i & 1 && (J(), u(0, "div", 1, 0), F(2), m());
        },
        dependencies: [$i],
        encapsulation: 2,
        data: { animation: [nv.transformDrawer] },
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })(),
  tr = (() => {
    let t = class t {
      get start() {
        return this._start;
      }
      get end() {
        return this._end;
      }
      get autosize() {
        return this._autosize;
      }
      set autosize(e) {
        this._autosize = ie(e);
      }
      get hasBackdrop() {
        return (
          this._drawerHasBackdrop(this._start) ||
          this._drawerHasBackdrop(this._end)
        );
      }
      set hasBackdrop(e) {
        this._backdropOverride = e == null ? null : ie(e);
      }
      get scrollable() {
        return this._userContent || this._content;
      }
      constructor(e, i, o, a, s, c = !1, l) {
        (this._dir = e),
          (this._element = i),
          (this._ngZone = o),
          (this._changeDetectorRef = a),
          (this._animationMode = l),
          (this._drawers = new re()),
          (this.backdropClick = new O()),
          (this._destroyed = new w()),
          (this._doCheckSubject = new w()),
          (this._contentMargins = { left: null, right: null }),
          (this._contentMarginChanges = new w()),
          (this._injector = v(at)),
          e &&
            e.change.pipe(z(this._destroyed)).subscribe(() => {
              this._validateDrawers(), this.updateContentMargins();
            }),
          s
            .change()
            .pipe(z(this._destroyed))
            .subscribe(() => this.updateContentMargins()),
          (this._autosize = c);
      }
      ngAfterContentInit() {
        this._allDrawers.changes
          .pipe(vt(this._allDrawers), z(this._destroyed))
          .subscribe((e) => {
            this._drawers.reset(
              e.filter((i) => !i._container || i._container === this),
            ),
              this._drawers.notifyOnChanges();
          }),
          this._drawers.changes.pipe(vt(null)).subscribe(() => {
            this._validateDrawers(),
              this._drawers.forEach((e) => {
                this._watchDrawerToggle(e),
                  this._watchDrawerPosition(e),
                  this._watchDrawerMode(e);
              }),
              (!this._drawers.length ||
                this._isDrawerOpen(this._start) ||
                this._isDrawerOpen(this._end)) &&
                this.updateContentMargins(),
              this._changeDetectorRef.markForCheck();
          }),
          this._ngZone.runOutsideAngular(() => {
            this._doCheckSubject
              .pipe(Xt(10), z(this._destroyed))
              .subscribe(() => this.updateContentMargins());
          });
      }
      ngOnDestroy() {
        this._contentMarginChanges.complete(),
          this._doCheckSubject.complete(),
          this._drawers.destroy(),
          this._destroyed.next(),
          this._destroyed.complete();
      }
      open() {
        this._drawers.forEach((e) => e.open());
      }
      close() {
        this._drawers.forEach((e) => e.close());
      }
      updateContentMargins() {
        let e = 0,
          i = 0;
        if (this._left && this._left.opened) {
          if (this._left.mode == "side") e += this._left._getWidth();
          else if (this._left.mode == "push") {
            let o = this._left._getWidth();
            (e += o), (i -= o);
          }
        }
        if (this._right && this._right.opened) {
          if (this._right.mode == "side") i += this._right._getWidth();
          else if (this._right.mode == "push") {
            let o = this._right._getWidth();
            (i += o), (e -= o);
          }
        }
        (e = e || null),
          (i = i || null),
          (e !== this._contentMargins.left ||
            i !== this._contentMargins.right) &&
            ((this._contentMargins = { left: e, right: i }),
            this._ngZone.run(() =>
              this._contentMarginChanges.next(this._contentMargins),
            ));
      }
      ngDoCheck() {
        this._autosize &&
          this._isPushed() &&
          this._ngZone.runOutsideAngular(() => this._doCheckSubject.next());
      }
      _watchDrawerToggle(e) {
        e._animationStarted
          .pipe(
            Z((i) => i.fromState !== i.toState),
            z(this._drawers.changes),
          )
          .subscribe((i) => {
            i.toState !== "open-instant" &&
              this._animationMode !== "NoopAnimations" &&
              this._element.nativeElement.classList.add(
                "mat-drawer-transition",
              ),
              this.updateContentMargins(),
              this._changeDetectorRef.markForCheck();
          }),
          e.mode !== "side" &&
            e.openedChange
              .pipe(z(this._drawers.changes))
              .subscribe(() => this._setContainerClass(e.opened));
      }
      _watchDrawerPosition(e) {
        e &&
          e.onPositionChanged.pipe(z(this._drawers.changes)).subscribe(() => {
            Dt(
              () => {
                this._validateDrawers();
              },
              { injector: this._injector, phase: Sc.Read },
            );
          });
      }
      _watchDrawerMode(e) {
        e &&
          e._modeChanged
            .pipe(z(At(this._drawers.changes, this._destroyed)))
            .subscribe(() => {
              this.updateContentMargins(),
                this._changeDetectorRef.markForCheck();
            });
      }
      _setContainerClass(e) {
        let i = this._element.nativeElement.classList,
          o = "mat-drawer-container-has-open";
        e ? i.add(o) : i.remove(o);
      }
      _validateDrawers() {
        (this._start = this._end = null),
          this._drawers.forEach((e) => {
            e.position == "end"
              ? (this._end != null, (this._end = e))
              : (this._start != null, (this._start = e));
          }),
          (this._right = this._left = null),
          this._dir && this._dir.value === "rtl"
            ? ((this._left = this._end), (this._right = this._start))
            : ((this._left = this._start), (this._right = this._end));
      }
      _isPushed() {
        return (
          (this._isDrawerOpen(this._start) && this._start.mode != "over") ||
          (this._isDrawerOpen(this._end) && this._end.mode != "over")
        );
      }
      _onBackdropClicked() {
        this.backdropClick.emit(), this._closeModalDrawersViaBackdrop();
      }
      _closeModalDrawersViaBackdrop() {
        [this._start, this._end]
          .filter((e) => e && !e.disableClose && this._drawerHasBackdrop(e))
          .forEach((e) => e._closeViaBackdropClick());
      }
      _isShowingBackdrop() {
        return (
          (this._isDrawerOpen(this._start) &&
            this._drawerHasBackdrop(this._start)) ||
          (this._isDrawerOpen(this._end) && this._drawerHasBackdrop(this._end))
        );
      }
      _isDrawerOpen(e) {
        return e != null && e.opened;
      }
      _drawerHasBackdrop(e) {
        return this._backdropOverride == null
          ? !!e && e.mode !== "side"
          : this._backdropOverride;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(wt, 8), d(E), d(S), d(ot), d(Fe), d(rv), d(mt, 8));
    }),
      (t.ɵcmp = I({
        type: t,
        selectors: [["mat-drawer-container"]],
        contentQueries: function (i, o, a) {
          if ((i & 1 && (ct(a, di, 5), ct(a, Jn, 5)), i & 2)) {
            let s;
            P((s = N())) && (o._content = s.first),
              P((s = N())) && (o._allDrawers = s);
          }
        },
        viewQuery: function (i, o) {
          if ((i & 1 && pt(di, 5), i & 2)) {
            let a;
            P((a = N())) && (o._userContent = a.first);
          }
        },
        hostAttrs: [1, "mat-drawer-container"],
        hostVars: 2,
        hostBindings: function (i, o) {
          i & 2 &&
            V("mat-drawer-container-explicit-backdrop", o._backdropOverride);
        },
        inputs: { autosize: "autosize", hasBackdrop: "hasBackdrop" },
        outputs: { backdropClick: "backdropClick" },
        exportAs: ["matDrawerContainer"],
        standalone: !0,
        features: [gt([{ provide: Qh, useExisting: t }]), U],
        ngContentSelectors: tv,
        decls: 4,
        vars: 2,
        consts: [
          [1, "mat-drawer-backdrop", 3, "mat-drawer-shown"],
          [1, "mat-drawer-backdrop", 3, "click"],
        ],
        template: function (i, o) {
          i & 1 &&
            (J(Jb),
            K(0, ev, 1, 2, "div", 0),
            F(1),
            F(2, 1),
            K(3, iv, 2, 0, "mat-drawer-content")),
            i & 2 &&
              (ft(o.hasBackdrop ? 0 : -1), D(3), ft(o._content ? -1 : 3));
        },
        dependencies: [di],
        styles: [
          '.mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-app-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-app-background));box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color)}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-app-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow);background-color:var(--mat-sidenav-container-background-color, var(--mat-app-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));width:var(--mat-sidenav-container-width);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer[style*="visibility: hidden"]{display:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}',
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })();
var sv = ["*"],
  ko;
function cv() {
  if (ko === void 0 && ((ko = null), typeof window < "u")) {
    let n = window;
    n.trustedTypes !== void 0 &&
      (ko = n.trustedTypes.createPolicy("angular#components", {
        createHTML: (t) => t,
      }));
  }
  return ko;
}
function er(n) {
  return cv()?.createHTML(n) || n;
}
function Yh(n) {
  return Error(`Unable to find icon with the name "${n}"`);
}
function lv() {
  return Error(
    "Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.",
  );
}
function Zh(n) {
  return Error(
    `The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`,
  );
}
function Kh(n) {
  return Error(
    `The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`,
  );
}
var be = class {
    constructor(t, r, e) {
      (this.url = t), (this.svgText = r), (this.options = e);
    }
  },
  dv = (() => {
    let t = class t {
      constructor(e, i, o, a) {
        (this._httpClient = e),
          (this._sanitizer = i),
          (this._errorHandler = a),
          (this._svgIconConfigs = new Map()),
          (this._iconSetConfigs = new Map()),
          (this._cachedIconsByUrl = new Map()),
          (this._inProgressUrlFetches = new Map()),
          (this._fontCssClassesByAlias = new Map()),
          (this._resolvers = []),
          (this._defaultFontSetClass = ["material-icons", "mat-ligature-font"]),
          (this._document = o);
      }
      addSvgIcon(e, i, o) {
        return this.addSvgIconInNamespace("", e, i, o);
      }
      addSvgIconLiteral(e, i, o) {
        return this.addSvgIconLiteralInNamespace("", e, i, o);
      }
      addSvgIconInNamespace(e, i, o, a) {
        return this._addSvgIconConfig(e, i, new be(o, null, a));
      }
      addSvgIconResolver(e) {
        return this._resolvers.push(e), this;
      }
      addSvgIconLiteralInNamespace(e, i, o, a) {
        let s = this._sanitizer.sanitize(Ot.HTML, o);
        if (!s) throw Kh(o);
        let c = er(s);
        return this._addSvgIconConfig(e, i, new be("", c, a));
      }
      addSvgIconSet(e, i) {
        return this.addSvgIconSetInNamespace("", e, i);
      }
      addSvgIconSetLiteral(e, i) {
        return this.addSvgIconSetLiteralInNamespace("", e, i);
      }
      addSvgIconSetInNamespace(e, i, o) {
        return this._addSvgIconSetConfig(e, new be(i, null, o));
      }
      addSvgIconSetLiteralInNamespace(e, i, o) {
        let a = this._sanitizer.sanitize(Ot.HTML, i);
        if (!a) throw Kh(i);
        let s = er(a);
        return this._addSvgIconSetConfig(e, new be("", s, o));
      }
      registerFontClassAlias(e, i = e) {
        return this._fontCssClassesByAlias.set(e, i), this;
      }
      classNameForFontAlias(e) {
        return this._fontCssClassesByAlias.get(e) || e;
      }
      setDefaultFontSetClass(...e) {
        return (this._defaultFontSetClass = e), this;
      }
      getDefaultFontSetClass() {
        return this._defaultFontSetClass;
      }
      getSvgIconFromUrl(e) {
        let i = this._sanitizer.sanitize(Ot.RESOURCE_URL, e);
        if (!i) throw Zh(e);
        let o = this._cachedIconsByUrl.get(i);
        return o
          ? x(Ao(o))
          : this._loadSvgIconFromConfig(new be(e, null)).pipe(
              dt((a) => this._cachedIconsByUrl.set(i, a)),
              R((a) => Ao(a)),
            );
      }
      getNamedSvgIcon(e, i = "") {
        let o = Xh(i, e),
          a = this._svgIconConfigs.get(o);
        if (a) return this._getSvgFromConfig(a);
        if (((a = this._getIconConfigFromResolvers(i, e)), a))
          return this._svgIconConfigs.set(o, a), this._getSvgFromConfig(a);
        let s = this._iconSetConfigs.get(i);
        return s ? this._getSvgFromIconSetConfigs(e, s) : Be(Yh(o));
      }
      ngOnDestroy() {
        (this._resolvers = []),
          this._svgIconConfigs.clear(),
          this._iconSetConfigs.clear(),
          this._cachedIconsByUrl.clear();
      }
      _getSvgFromConfig(e) {
        return e.svgText
          ? x(Ao(this._svgElementFromConfig(e)))
          : this._loadSvgIconFromConfig(e).pipe(R((i) => Ao(i)));
      }
      _getSvgFromIconSetConfigs(e, i) {
        let o = this._extractIconWithNameFromAnySet(e, i);
        if (o) return x(o);
        let a = i
          .filter((s) => !s.svgText)
          .map((s) =>
            this._loadSvgIconSetFromConfig(s).pipe(
              _e((c) => {
                let h = `Loading icon set URL: ${this._sanitizer.sanitize(Ot.RESOURCE_URL, s.url)} failed: ${c.message}`;
                return this._errorHandler.handleError(new Error(h)), x(null);
              }),
            ),
          );
        return rr(a).pipe(
          R(() => {
            let s = this._extractIconWithNameFromAnySet(e, i);
            if (!s) throw Yh(e);
            return s;
          }),
        );
      }
      _extractIconWithNameFromAnySet(e, i) {
        for (let o = i.length - 1; o >= 0; o--) {
          let a = i[o];
          if (a.svgText && a.svgText.toString().indexOf(e) > -1) {
            let s = this._svgElementFromConfig(a),
              c = this._extractSvgIconFromSet(s, e, a.options);
            if (c) return c;
          }
        }
        return null;
      }
      _loadSvgIconFromConfig(e) {
        return this._fetchIcon(e).pipe(
          dt((i) => (e.svgText = i)),
          R(() => this._svgElementFromConfig(e)),
        );
      }
      _loadSvgIconSetFromConfig(e) {
        return e.svgText
          ? x(null)
          : this._fetchIcon(e).pipe(dt((i) => (e.svgText = i)));
      }
      _extractSvgIconFromSet(e, i, o) {
        let a = e.querySelector(`[id="${i}"]`);
        if (!a) return null;
        let s = a.cloneNode(!0);
        if ((s.removeAttribute("id"), s.nodeName.toLowerCase() === "svg"))
          return this._setSvgAttributes(s, o);
        if (s.nodeName.toLowerCase() === "symbol")
          return this._setSvgAttributes(this._toSvgElement(s), o);
        let c = this._svgElementFromString(er("<svg></svg>"));
        return c.appendChild(s), this._setSvgAttributes(c, o);
      }
      _svgElementFromString(e) {
        let i = this._document.createElement("DIV");
        i.innerHTML = e;
        let o = i.querySelector("svg");
        if (!o) throw Error("<svg> tag not found");
        return o;
      }
      _toSvgElement(e) {
        let i = this._svgElementFromString(er("<svg></svg>")),
          o = e.attributes;
        for (let a = 0; a < o.length; a++) {
          let { name: s, value: c } = o[a];
          s !== "id" && i.setAttribute(s, c);
        }
        for (let a = 0; a < e.childNodes.length; a++)
          e.childNodes[a].nodeType === this._document.ELEMENT_NODE &&
            i.appendChild(e.childNodes[a].cloneNode(!0));
        return i;
      }
      _setSvgAttributes(e, i) {
        return (
          e.setAttribute("fit", ""),
          e.setAttribute("height", "100%"),
          e.setAttribute("width", "100%"),
          e.setAttribute("preserveAspectRatio", "xMidYMid meet"),
          e.setAttribute("focusable", "false"),
          i && i.viewBox && e.setAttribute("viewBox", i.viewBox),
          e
        );
      }
      _fetchIcon(e) {
        let { url: i, options: o } = e,
          a = o?.withCredentials ?? !1;
        if (!this._httpClient) throw lv();
        if (i == null) throw Error(`Cannot fetch icon from URL "${i}".`);
        let s = this._sanitizer.sanitize(Ot.RESOURCE_URL, i);
        if (!s) throw Zh(i);
        let c = this._inProgressUrlFetches.get(s);
        if (c) return c;
        let l = this._httpClient
          .get(s, { responseType: "text", withCredentials: a })
          .pipe(
            R((h) => er(h)),
            He(() => this._inProgressUrlFetches.delete(s)),
            cc(),
          );
        return this._inProgressUrlFetches.set(s, l), l;
      }
      _addSvgIconConfig(e, i, o) {
        return this._svgIconConfigs.set(Xh(e, i), o), this;
      }
      _addSvgIconSetConfig(e, i) {
        let o = this._iconSetConfigs.get(e);
        return o ? o.push(i) : this._iconSetConfigs.set(e, [i]), this;
      }
      _svgElementFromConfig(e) {
        if (!e.svgElement) {
          let i = this._svgElementFromString(e.svgText);
          this._setSvgAttributes(i, e.options), (e.svgElement = i);
        }
        return e.svgElement;
      }
      _getIconConfigFromResolvers(e, i) {
        for (let o = 0; o < this._resolvers.length; o++) {
          let a = this._resolvers[o](i, e);
          if (a)
            return hv(a) ? new be(a.url, null, a.options) : new be(a, null);
        }
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(f(al, 8), f(mn), f(k, 8), f($e));
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
function Ao(n) {
  return n.cloneNode(!0);
}
function Xh(n, t) {
  return n + ":" + t;
}
function hv(n) {
  return !!(n.url && n.options);
}
var uv = new C("MAT_ICON_DEFAULT_OPTIONS"),
  mv = new C("mat-icon-location", { providedIn: "root", factory: pv });
function pv() {
  let n = v(k),
    t = n ? n.location : null;
  return { getPathname: () => (t ? t.pathname + t.search : "") };
}
var Jh = [
    "clip-path",
    "color-profile",
    "src",
    "cursor",
    "fill",
    "filter",
    "marker",
    "marker-start",
    "marker-mid",
    "marker-end",
    "mask",
    "stroke",
  ],
  fv = Jh.map((n) => `[${n}]`).join(", "),
  gv = /^url\(['"]?#(.*?)['"]?\)$/,
  tu = (() => {
    let t = class t {
      get color() {
        return this._color || this._defaultColor;
      }
      set color(e) {
        this._color = e;
      }
      get svgIcon() {
        return this._svgIcon;
      }
      set svgIcon(e) {
        e !== this._svgIcon &&
          (e
            ? this._updateSvgIcon(e)
            : this._svgIcon && this._clearSvgElement(),
          (this._svgIcon = e));
      }
      get fontSet() {
        return this._fontSet;
      }
      set fontSet(e) {
        let i = this._cleanupFontValue(e);
        i !== this._fontSet &&
          ((this._fontSet = i), this._updateFontIconClasses());
      }
      get fontIcon() {
        return this._fontIcon;
      }
      set fontIcon(e) {
        let i = this._cleanupFontValue(e);
        i !== this._fontIcon &&
          ((this._fontIcon = i), this._updateFontIconClasses());
      }
      constructor(e, i, o, a, s, c) {
        (this._elementRef = e),
          (this._iconRegistry = i),
          (this._location = a),
          (this._errorHandler = s),
          (this.inline = !1),
          (this._previousFontSetClass = []),
          (this._currentIconFetch = Et.EMPTY),
          c &&
            (c.color && (this.color = this._defaultColor = c.color),
            c.fontSet && (this.fontSet = c.fontSet)),
          o || e.nativeElement.setAttribute("aria-hidden", "true");
      }
      _splitIconName(e) {
        if (!e) return ["", ""];
        let i = e.split(":");
        switch (i.length) {
          case 1:
            return ["", i[0]];
          case 2:
            return i;
          default:
            throw Error(`Invalid icon name: "${e}"`);
        }
      }
      ngOnInit() {
        this._updateFontIconClasses();
      }
      ngAfterViewChecked() {
        let e = this._elementsWithExternalReferences;
        if (e && e.size) {
          let i = this._location.getPathname();
          i !== this._previousPath &&
            ((this._previousPath = i), this._prependPathToReferences(i));
        }
      }
      ngOnDestroy() {
        this._currentIconFetch.unsubscribe(),
          this._elementsWithExternalReferences &&
            this._elementsWithExternalReferences.clear();
      }
      _usingFontIcon() {
        return !this.svgIcon;
      }
      _setSvgElement(e) {
        this._clearSvgElement();
        let i = this._location.getPathname();
        (this._previousPath = i),
          this._cacheChildrenWithExternalReferences(e),
          this._prependPathToReferences(i),
          this._elementRef.nativeElement.appendChild(e);
      }
      _clearSvgElement() {
        let e = this._elementRef.nativeElement,
          i = e.childNodes.length;
        for (
          this._elementsWithExternalReferences &&
          this._elementsWithExternalReferences.clear();
          i--;

        ) {
          let o = e.childNodes[i];
          (o.nodeType !== 1 || o.nodeName.toLowerCase() === "svg") &&
            o.remove();
        }
      }
      _updateFontIconClasses() {
        if (!this._usingFontIcon()) return;
        let e = this._elementRef.nativeElement,
          i = (
            this.fontSet
              ? this._iconRegistry
                  .classNameForFontAlias(this.fontSet)
                  .split(/ +/)
              : this._iconRegistry.getDefaultFontSetClass()
          ).filter((o) => o.length > 0);
        this._previousFontSetClass.forEach((o) => e.classList.remove(o)),
          i.forEach((o) => e.classList.add(o)),
          (this._previousFontSetClass = i),
          this.fontIcon !== this._previousFontIconClass &&
            !i.includes("mat-ligature-font") &&
            (this._previousFontIconClass &&
              e.classList.remove(this._previousFontIconClass),
            this.fontIcon && e.classList.add(this.fontIcon),
            (this._previousFontIconClass = this.fontIcon));
      }
      _cleanupFontValue(e) {
        return typeof e == "string" ? e.trim().split(" ")[0] : e;
      }
      _prependPathToReferences(e) {
        let i = this._elementsWithExternalReferences;
        i &&
          i.forEach((o, a) => {
            o.forEach((s) => {
              a.setAttribute(s.name, `url('${e}#${s.value}')`);
            });
          });
      }
      _cacheChildrenWithExternalReferences(e) {
        let i = e.querySelectorAll(fv),
          o = (this._elementsWithExternalReferences =
            this._elementsWithExternalReferences || new Map());
        for (let a = 0; a < i.length; a++)
          Jh.forEach((s) => {
            let c = i[a],
              l = c.getAttribute(s),
              h = l ? l.match(gv) : null;
            if (h) {
              let p = o.get(c);
              p || ((p = []), o.set(c, p)), p.push({ name: s, value: h[1] });
            }
          });
      }
      _updateSvgIcon(e) {
        if (
          ((this._svgNamespace = null),
          (this._svgName = null),
          this._currentIconFetch.unsubscribe(),
          e)
        ) {
          let [i, o] = this._splitIconName(e);
          i && (this._svgNamespace = i),
            o && (this._svgName = o),
            (this._currentIconFetch = this._iconRegistry
              .getNamedSvgIcon(o, i)
              .pipe(Ct(1))
              .subscribe(
                (a) => this._setSvgElement(a),
                (a) => {
                  let s = `Error retrieving icon ${i}:${o}! ${a.message}`;
                  this._errorHandler.handleError(new Error(s));
                },
              ));
        }
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(
        d(E),
        d(dv),
        Ee("aria-hidden"),
        d(mv),
        d($e),
        d(uv, 8),
      );
    }),
      (t.ɵcmp = I({
        type: t,
        selectors: [["mat-icon"]],
        hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
        hostVars: 10,
        hostBindings: function (i, o) {
          i & 2 &&
            (G("data-mat-icon-type", o._usingFontIcon() ? "font" : "svg")(
              "data-mat-icon-name",
              o._svgName || o.fontIcon,
            )("data-mat-icon-namespace", o._svgNamespace || o.fontSet)(
              "fontIcon",
              o._usingFontIcon() ? o.fontIcon : null,
            ),
            Tt(o.color ? "mat-" + o.color : ""),
            V("mat-icon-inline", o.inline)(
              "mat-icon-no-color",
              o.color !== "primary" &&
                o.color !== "accent" &&
                o.color !== "warn",
            ));
        },
        inputs: {
          color: "color",
          inline: [2, "inline", "inline", H],
          svgIcon: "svgIcon",
          fontSet: "fontSet",
          fontIcon: "fontIcon",
        },
        exportAs: ["matIcon"],
        standalone: !0,
        features: [st, U],
        ngContentSelectors: sv,
        decls: 1,
        vars: 0,
        template: function (i, o) {
          i & 1 && (J(), F(0));
        },
        styles: [
          "mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })(),
  eu = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵmod = j({ type: t })),
      (t.ɵinj = L({ imports: [lt, lt] }));
    let n = t;
    return n;
  })();
var vv = ["*", [["mat-toolbar-row"]]],
  _v = ["*", "mat-toolbar-row"],
  yv = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵdir = M({
        type: t,
        selectors: [["mat-toolbar-row"]],
        hostAttrs: [1, "mat-toolbar-row"],
        exportAs: ["matToolbarRow"],
        standalone: !0,
      }));
    let n = t;
    return n;
  })(),
  iu = (() => {
    let t = class t {
      constructor(e, i, o) {
        (this._elementRef = e), (this._platform = i), (this._document = o);
      }
      ngAfterViewInit() {
        this._platform.isBrowser &&
          (this._checkToolbarMixedModes(),
          this._toolbarRows.changes.subscribe(() =>
            this._checkToolbarMixedModes(),
          ));
      }
      _checkToolbarMixedModes() {
        this._toolbarRows.length;
      }
    };
    (t.ɵfac = function (i) {
      return new (i || t)(d(E), d(q), d(k));
    }),
      (t.ɵcmp = I({
        type: t,
        selectors: [["mat-toolbar"]],
        contentQueries: function (i, o, a) {
          if ((i & 1 && ct(a, yv, 5), i & 2)) {
            let s;
            P((s = N())) && (o._toolbarRows = s);
          }
        },
        hostAttrs: [1, "mat-toolbar"],
        hostVars: 6,
        hostBindings: function (i, o) {
          i & 2 &&
            (Tt(o.color ? "mat-" + o.color : ""),
            V("mat-toolbar-multiple-rows", o._toolbarRows.length > 0)(
              "mat-toolbar-single-row",
              o._toolbarRows.length === 0,
            ));
        },
        inputs: { color: "color" },
        exportAs: ["matToolbar"],
        standalone: !0,
        features: [U],
        ngContentSelectors: _v,
        decls: 2,
        vars: 0,
        template: function (i, o) {
          i & 1 && (J(vv), F(0), F(1, 1));
        },
        styles: [
          ".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-app-surface));color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-app-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-app-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-app-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-app-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-app-title-large-tracking));margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface));--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let n = t;
    return n;
  })();
var nu = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵmod = j({ type: t })),
    (t.ɵinj = L({ imports: [lt, lt] }));
  let n = t;
  return n;
})();
var To = class n {
    static ɵfac = function (r) {
      return new (r || n)();
    };
    static ɵcmp = I({
      type: n,
      selectors: [["svg-icon"]],
      decls: 3,
      vars: 0,
      consts: [
        [
          "version",
          "1.0",
          "xmlns",
          "http://www.w3.org/2000/svg",
          "width",
          "100%",
          "height",
          "100%",
          "viewBox",
          "0 0 447.000000 447.000000",
          "preserveAspectRatio",
          "xMidYMid meet",
        ],
        [
          "transform",
          "translate(0.000000,447.000000) scale(0.100000,-0.100000)",
          "fill",
          "currentColor",
          "stroke",
          "currentColor",
          "stroke-width",
          "50",
        ],
        [
          "d",
          `M1835 4149 c-201 -25 -539 -202 -796 -418 -275 -230 -570 -633 -697
-953 -59 -148 -83 -248 -89 -369 -7 -125 6 -191 48 -248 79 -109 224 -97 395
32 127 97 384 391 530 608 67 100 76 131 43 152 -27 17 -44 3 -114 -99 -80
-114 -233 -307 -329 -414 -194 -216 -367 -310 -441 -240 -33 31 -45 78 -45
180 0 315 261 793 639 1170 197 196 405 339 639 440 418 180 560 28 416 -447
-19 -62 -80 -233 -135 -380 -56 -148 -154 -428 -219 -623 -80 -241 -145 -416
-203 -546 -173 -390 -377 -981 -377 -1094 0 -57 39 -80 72 -42 31 34 183 439
377 1002 126 365 155 430 189 430 13 0 103 32 200 71 192 77 250 92 559 143
344 57 473 69 688 63 224 -6 331 -28 467 -98 114 -58 236 -181 295 -294 140
-269 134 -572 -14 -830 -155 -270 -362 -448 -748 -645 -361 -185 -582 -237
-949 -227 -198 5 -286 22 -388 73 -165 82 -257 239 -246 416 9 134 95 266 240
368 89 63 153 84 229 77 73 -6 79 -10 79 -53 0 -50 22 -95 64 -132 97 -85 190
-45 314 134 12 18 13 18 7 -1 -4 -11 -9 -25 -11 -31 -3 -6 5 -22 16 -37 17
-22 30 -27 63 -27 43 0 107 25 155 58 25 18 130 49 136 41 1 -2 7 -16 13 -30
7 -15 28 -40 49 -55 51 -39 127 -39 240 -1 44 15 88 25 96 22 9 -3 55 1 103
10 48 9 89 15 91 12 4 -4 -47 -35 -301 -183 -27 -16 -144 -76 -259 -134 -115
-58 -214 -113 -220 -123 -15 -23 3 -51 37 -55 15 -2 90 27 199 79 285 134 358
165 481 204 124 39 148 57 127 94 -5 11 -14 21 -20 23 -5 1 11 19 37 38 61 45
76 82 45 113 -21 20 -32 22 -137 23 -63 0 -117 3 -121 7 -13 13 -47 7 -113
-19 -80 -33 -157 -54 -193 -54 -29 0 -68 31 -68 53 1 6 27 29 60 49 70 44 100
93 100 165 0 54 -5 65 -37 82 -52 27 -140 -52 -180 -162 -26 -71 -41 -78 -35
-18 3 39 0 57 -17 84 -43 70 -163 96 -229 49 l-33 -24 8 44 c14 80 9 310 -7
343 -19 37 -60 45 -88 17 -35 -35 -46 -113 -46 -347 l-1 -220 -29 -50 c-44
-76 -101 -127 -139 -123 -35 4 -67 40 -70 83 -2 26 3 30 46 46 72 26 97 46
119 96 49 112 -36 185 -135 116 -22 -15 -53 -51 -70 -81 -25 -45 -33 -53 -51
-47 -185 63 -467 -101 -584 -340 -41 -84 -55 -153 -50 -243 12 -192 122 -350
303 -437 127 -61 207 -77 418 -83 375 -10 611 45 971 227 304 154 484 281 629
446 145 163 231 316 279 493 31 113 31 323 0 446 -24 97 -82 228 -133 303
-137 200 -347 317 -633 353 -176 23 -545 1 -791 -45 -16 -4 51 34 150 83 319
159 542 326 707 531 134 167 174 321 114 439 -28 56 -67 90 -142 124 -42 20
-65 23 -169 23 -134 -1 -191 -13 -337 -75 -110 -47 -209 -103 -320 -183 -259
-186 -441 -385 -640 -705 -37 -59 -72 -114 -77 -122 -15 -22 48 161 149 430
114 304 156 438 176 552 54 310 -72 479 -331 447z m1492 -444 c167 -50 181
-200 39 -399 -93 -130 -305 -313 -491 -426 -208 -126 -697 -336 -928 -399 -82
-23 -151 -41 -153 -41 -12 0 184 337 277 477 186 277 428 504 704 662 211 121
414 167 552 126z m-540 -2156 c20 -17 16 -50 -12 -91 -21 -31 -33 -38 -82 -48
-32 -6 -68 -14 -80 -17 -20 -4 -18 1 18 71 22 42 50 83 62 91 23 17 69 14 94
-6z m-482 -39 c-10 -11 -20 -18 -23 -15 -3 3 3 14 13 25 10 11 20 18 23 15 3
-3 -3 -14 -13 -25z`,
        ],
      ],
      template: function (r, e) {
        r & 1 && (mi(), u(0, "svg", 0)(1, "g", 1), T(2, "path", 2), m()());
      },
    });
  },
  Ro = class n {
    static ɵfac = function (r) {
      return new (r || n)();
    };
    static ɵcmp = I({
      type: n,
      selectors: [["svg-github-icon"]],
      decls: 2,
      vars: 0,
      consts: [
        [
          "viewBox",
          "0 0 97.707 97.707",
          "xmlns",
          "http://www.w3.org/2000/svg",
          2,
          "width",
          "100%",
          "height",
          "100%",
        ],
        [
          "fill-rule",
          "evenodd",
          "clip-rule",
          "evenodd",
          "d",
          "M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z",
          "fill",
          "currentColor",
          "stroke",
          "currentColor",
        ],
      ],
      template: function (r, e) {
        r & 1 && (mi(), u(0, "svg", 0), T(1, "path", 1), m());
      },
    });
  };
var Mo = class n {
  svgIconTemplate;
  text;
  static ɵfac = function (r) {
    return new (r || n)();
  };
  static ɵcmp = I({
    type: n,
    selectors: [["app-icon-button"]],
    inputs: { svgIconTemplate: "svgIconTemplate", text: "text" },
    decls: 6,
    vars: 2,
    consts: [
      ["iconContainer", ""],
      [1, "icon-button"],
      [1, "icon"],
      [3, "ngTemplateOutlet"],
    ],
    template: function (r, e) {
      r & 1 &&
        (u(0, "div", 1)(1, "div", 2, 0),
        Tc(3, 3),
        m(),
        u(4, "div"),
        g(5),
        m()()),
        r & 2 &&
          (D(3), Q("ngTemplateOutlet", e.svgIconTemplate), D(2), St(e.text));
    },
    dependencies: [Zc],
    styles: [
      ".icon[_ngcontent-%COMP%]{width:24px;height:24px;padding-right:5px}.icon-button[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:row}",
    ],
  });
};
function Iv(n, t) {
  n & 1 && T(0, "svg-github-icon");
}
function Ev(n, t) {
  n & 1 && T(0, "svg-icon");
}
function Dv(n, t) {
  if (
    (n & 1 &&
      (u(0, "a", 5),
      g(1, "Web App"),
      m(),
      u(2, "a", 6),
      g(3, "Artwork"),
      m(),
      u(4, "a", 7),
      T(5, "app-icon-button", 8),
      m()),
    n & 2)
  ) {
    nt();
    let r = Qe(1);
    D(5), Q("svgIconTemplate", r);
  }
}
function Sv(n, t) {
  n & 1 &&
    (u(0, "a", 9)(1, "mat-icon"),
    g(2, "web"),
    m()(),
    u(3, "a", 10)(4, "mat-icon"),
    g(5, "brush"),
    m()(),
    u(6, "a", 11),
    T(7, "svg-github-icon"),
    m());
}
var Oo = class n {
  isExtraSmallScreen = !1;
  onResize() {
    this.isExtraSmallScreen = window.innerWidth < 400;
  }
  static ɵfac = function (r) {
    return new (r || n)();
  };
  static ɵcmp = I({
    type: n,
    selectors: [["app-top-nav"]],
    hostBindings: function (r, e) {
      r & 1 &&
        Y(
          "resize",
          function (o) {
            return e.onResize(o);
          },
          !1,
          gi,
        );
    },
    decls: 10,
    vars: 2,
    consts: [
      ["github", ""],
      ["main", ""],
      ["color", "primary", 1, "top-nav"],
      ["routerLink", "/", "mat-button", ""],
      ["text", "Xuyen Nguyen", 3, "svgIconTemplate"],
      ["mat-button", "", "routerLink", "web-app", "routerLinkActive", "active"],
      ["mat-button", "", "routerLink", "artwork", "routerLinkActive", "active"],
      [
        "mat-button",
        "",
        "href",
        "https://github.com/xuyennguyen2733",
        "target",
        "_blank",
      ],
      ["text", "GitHub", 3, "svgIconTemplate"],
      [
        "mat-icon-button",
        "",
        "aria-label",
        "My Web Apps",
        "routerLink",
        "web-app",
        "routerLinkActive",
        "active",
      ],
      [
        "mat-icon-button",
        "",
        "aria-label",
        "My artwork",
        "routerLink",
        "artwork",
        "routerLinkActive",
        "active",
      ],
      [
        "mat-icon-button",
        "",
        "aria-label",
        "My GitHub",
        "href",
        "https://github.com/xuyennguyen2733",
        "target",
        "_blank",
      ],
    ],
    template: function (r, e) {
      if (
        (r & 1 &&
          (K(0, Iv, 1, 0, "ng-template", null, 0, lr)(
            2,
            Ev,
            1,
            0,
            "ng-template",
            null,
            1,
            lr,
          ),
          u(4, "mat-toolbar", 2)(5, "button", 3),
          T(6, "app-icon-button", 4),
          m(),
          u(7, "nav"),
          K(8, Dv, 6, 1)(9, Sv, 8, 0),
          m()()),
        r & 2)
      ) {
        let i = Qe(3);
        D(6), Q("svgIconTemplate", i), D(2), ft(e.isExtraSmallScreen ? 9 : 8);
      }
    },
    dependencies: [Br, nd, tu, uo, ho, mh, iu, To, Ro, Mo],
    styles: [
      ".top-nav[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;height:3.5rem;position:sticky!important}nav[_ngcontent-%COMP%]{display:flex}",
    ],
  });
};
var Fo = class n {
  title = "PortfolioWebsite";
  static ɵfac = function (r) {
    return new (r || n)();
  };
  static ɵcmp = I({
    type: n,
    selectors: [["app-root"]],
    decls: 10,
    vars: 0,
    consts: [
      ["drawer", ""],
      [1, "drawer-container"],
      ["mode", "side", 1, "side-nav-drawer"],
      [1, "main-content"],
    ],
    template: function (r, e) {
      r & 1 &&
        (T(0, "app-top-nav"),
        u(1, "main")(2, "mat-drawer-container", 1)(3, "mat-drawer", 2, 0)(
          5,
          "p",
        ),
        g(6, "Auto-resizing sidenav"),
        m()(),
        u(7, "mat-drawer-content")(8, "div", 3),
        T(9, "router-outlet"),
        m()()()());
    },
    dependencies: [za, tr, Jn, di, Oo],
    styles: [
      ".main-content[_ngcontent-%COMP%]{padding:2rem;height:fit-content;overflow:auto}.drawer-container[_ngcontent-%COMP%]{width:100%}.side-nav-drawer[_ngcontent-%COMP%]{width:20vw;max-width:15rem;height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:row;overflow:auto;height:calc(100vh - 3.5rem)}",
    ],
  });
};
var Av = "@",
  Tv = (() => {
    let t = class t {
      constructor(e, i, o, a, s) {
        (this.doc = e),
          (this.delegate = i),
          (this.zone = o),
          (this.animationType = a),
          (this.moduleImpl = s),
          (this._rendererFactoryPromise = null),
          (this.scheduler = v(Ic, { optional: !0 })),
          (this.loadingSchedulerFn = v(Rv, { optional: !0 }));
      }
      ngOnDestroy() {
        this._engine?.flush();
      }
      loadImpl() {
        let e = () =>
            this.moduleImpl ?? import("./chunk-HYBX5BEZ.js").then((o) => o),
          i;
        return (
          this.loadingSchedulerFn
            ? (i = this.loadingSchedulerFn(e))
            : (i = e()),
          i
            .catch((o) => {
              throw new et(5300, !1);
            })
            .then(({ ɵcreateEngine: o, ɵAnimationRendererFactory: a }) => {
              this._engine = o(this.animationType, this.doc);
              let s = new a(this.delegate, this._engine, this.zone);
              return (this.delegate = s), s;
            })
        );
      }
      createRenderer(e, i) {
        let o = this.delegate.createRenderer(e, i);
        if (o.ɵtype === 0) return o;
        typeof o.throwOnSyntheticProps == "boolean" &&
          (o.throwOnSyntheticProps = !1);
        let a = new ic(o);
        return (
          i?.data?.animation &&
            !this._rendererFactoryPromise &&
            (this._rendererFactoryPromise = this.loadImpl()),
          this._rendererFactoryPromise
            ?.then((s) => {
              let c = s.createRenderer(e, i);
              a.use(c), this.scheduler?.notify(10);
            })
            .catch((s) => {
              a.use(o);
            }),
          a
        );
      }
      begin() {
        this.delegate.begin?.();
      }
      end() {
        this.delegate.end?.();
      }
      whenRenderingDone() {
        return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
      }
    };
    (t.ɵfac = function (i) {
      Ge();
    }),
      (t.ɵprov = y({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })(),
  ic = class {
    constructor(t) {
      (this.delegate = t), (this.replay = []), (this.ɵtype = 1);
    }
    use(t) {
      if (((this.delegate = t), this.replay !== null)) {
        for (let r of this.replay) r(t);
        this.replay = null;
      }
    }
    get data() {
      return this.delegate.data;
    }
    destroy() {
      (this.replay = null), this.delegate.destroy();
    }
    createElement(t, r) {
      return this.delegate.createElement(t, r);
    }
    createComment(t) {
      return this.delegate.createComment(t);
    }
    createText(t) {
      return this.delegate.createText(t);
    }
    get destroyNode() {
      return this.delegate.destroyNode;
    }
    appendChild(t, r) {
      this.delegate.appendChild(t, r);
    }
    insertBefore(t, r, e, i) {
      this.delegate.insertBefore(t, r, e, i);
    }
    removeChild(t, r, e) {
      this.delegate.removeChild(t, r, e);
    }
    selectRootElement(t, r) {
      return this.delegate.selectRootElement(t, r);
    }
    parentNode(t) {
      return this.delegate.parentNode(t);
    }
    nextSibling(t) {
      return this.delegate.nextSibling(t);
    }
    setAttribute(t, r, e, i) {
      this.delegate.setAttribute(t, r, e, i);
    }
    removeAttribute(t, r, e) {
      this.delegate.removeAttribute(t, r, e);
    }
    addClass(t, r) {
      this.delegate.addClass(t, r);
    }
    removeClass(t, r) {
      this.delegate.removeClass(t, r);
    }
    setStyle(t, r, e, i) {
      this.delegate.setStyle(t, r, e, i);
    }
    removeStyle(t, r, e) {
      this.delegate.removeStyle(t, r, e);
    }
    setProperty(t, r, e) {
      this.shouldReplay(r) && this.replay.push((i) => i.setProperty(t, r, e)),
        this.delegate.setProperty(t, r, e);
    }
    setValue(t, r) {
      this.delegate.setValue(t, r);
    }
    listen(t, r, e) {
      return (
        this.shouldReplay(r) && this.replay.push((i) => i.listen(t, r, e)),
        this.delegate.listen(t, r, e)
      );
    }
    shouldReplay(t) {
      return this.replay !== null && t.startsWith(Av);
    }
  },
  Rv = new C("");
function ru(n = "animations") {
  return (
    Ec("NgAsyncAnimations"),
    ar([
      {
        provide: sr,
        useFactory: (t, r, e) => new Tv(t, r, e, n),
        deps: [k, yr, S],
      },
      {
        provide: mt,
        useValue: n === "noop" ? "NoopAnimations" : "BrowserAnimations",
      },
    ])
  );
}
var Po = class n {
  static ɵfac = function (r) {
    return new (r || n)();
  };
  static ɵmod = j({ type: n, bootstrap: [Fo] });
  static ɵinj = L({
    providers: [ru()],
    imports: [
      pl,
      So,
      eu,
      ph,
      nu,
      kd,
      Jd,
      Ad,
      tr,
      Jn,
      di,
      li,
      Xn,
      Gh,
      ec,
      Gn,
      lo,
    ],
  });
};
ml()
  .bootstrapModule(Po, { ngZoneEventCoalescing: !0 })
  .catch((n) => console.error(n));
