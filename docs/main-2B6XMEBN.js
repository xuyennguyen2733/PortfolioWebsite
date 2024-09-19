import {
  $ as v,
  $a as $,
  $b as is,
  A as br,
  Aa as te,
  Ab as Rr,
  B as be,
  Ba as ft,
  Bb as rn,
  C as _e,
  Ca as ii,
  Cb as Tr,
  D as ye,
  Da as Fa,
  Db as Ha,
  E as _r,
  Ea as Oa,
  Eb as Fr,
  F as Ct,
  Fa as Yi,
  Fb as on,
  G as Ye,
  Ga as ni,
  Gb as $a,
  H as Xe,
  Ha as H,
  Hb as J,
  I as qi,
  Ia as h,
  Ib as Ga,
  J as $t,
  Ja as ee,
  Jb as Wa,
  K as yr,
  Ka as Na,
  Kb as qa,
  L as Ea,
  La as Xi,
  Lb as Y,
  M as Sa,
  Ma as Ji,
  Mb as oi,
  N as Qi,
  Na as Sr,
  Nb as Ee,
  O as yt,
  Oa as Pa,
  Ob as Nt,
  P as ht,
  Pa as Dr,
  Pb as Qa,
  Q as z,
  Qa as Ie,
  Qb as Za,
  R as nt,
  Ra as gt,
  Rb as an,
  S as G,
  Sa as mt,
  Sb as Ka,
  T as Gt,
  Ta as La,
  Tb as Ya,
  U as we,
  Ua as Mr,
  Ub as R,
  V as w,
  Va as ct,
  Vb as Xa,
  W as T,
  Wa as ja,
  Wb as ai,
  X as Da,
  Xa as kt,
  Xb as Ja,
  Y as x,
  Ya as q,
  Yb as ts,
  Z as wr,
  Za as dt,
  Zb as si,
  _ as b,
  _a as Ar,
  _b as es,
  a as g,
  aa as xr,
  ab as Va,
  ac as sn,
  b as U,
  ba as Ma,
  bb as Wt,
  bc as ns,
  ca as Je,
  cb as vt,
  cc as rs,
  d as We,
  da as C,
  db as l,
  dc as Or,
  e as xa,
  ea as F,
  eb as u,
  ec as os,
  f as qe,
  fa as P,
  fb as I,
  fc as as,
  g as fr,
  ga as Zi,
  gb as kr,
  h as gr,
  ha as Aa,
  hb as ri,
  i as M,
  ia as ti,
  ib as za,
  ic as ss,
  j as ut,
  ja as At,
  jb as et,
  jc as Nr,
  k as Ht,
  ka as Ft,
  kb as Ba,
  l as st,
  la as Cr,
  lb as Ot,
  lc as Pr,
  m as y,
  ma as Ir,
  mb as Q,
  mc as Lr,
  n as Qe,
  na as Er,
  nb as S,
  nc as jr,
  o as Gi,
  oa as xe,
  ob as X,
  p as Ca,
  pa as Ce,
  pb as Et,
  q as A,
  qa as It,
  qb as L,
  r as ge,
  ra as ka,
  rb as j,
  s as pt,
  sa as W,
  sb as p,
  t as Ze,
  ta as D,
  tb as ie,
  u as Wi,
  ua as Ki,
  ub as lt,
  v as vr,
  va as k,
  vb as V,
  w as Ia,
  wa as Jt,
  wb as tn,
  x as Ke,
  xa as Ra,
  xb as Ua,
  y as ve,
  ya as ei,
  yb as en,
  z as it,
  za as Ta,
  zb as nn,
} from "./chunk-DHJRT65O.js";
var Br = class extends Ya {
    constructor() {
      super(...arguments), (this.supportsDOMEvents = !0);
    }
  },
  Ur = class i extends Br {
    static makeCurrent() {
      Ka(new i());
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
      let r = Fd();
      return r == null ? null : Od(r);
    }
    resetBaseElement() {
      ci = null;
    }
    getUserAgent() {
      return window.navigator.userAgent;
    }
    getCookie(t) {
      return es(document.cookie, t);
    }
  },
  ci = null;
function Fd() {
  return (
    (ci = ci || document.querySelector("base")),
    ci ? ci.getAttribute("href") : null
  );
}
function Od(i) {
  return new URL(i, document.baseURI).pathname;
}
var Hr = class {
    addToWindow(t) {
      (Gt.getAngularTestability = (e, n = !0) => {
        let o = t.findTestabilityInTree(e, n);
        if (o == null) throw new G(5103, !1);
        return o;
      }),
        (Gt.getAllAngularTestabilities = () => t.getAllTestabilities()),
        (Gt.getAllAngularRootElements = () => t.getAllRootElements());
      let r = (e) => {
        let n = Gt.getAllAngularTestabilities(),
          o = n.length,
          a = function () {
            o--, o == 0 && e();
          };
        n.forEach((s) => {
          s.whenStable(a);
        });
      };
      Gt.frameworkStabilizers || (Gt.frameworkStabilizers = []),
        Gt.frameworkStabilizers.push(r);
    }
    findTestabilityInTree(t, r, e) {
      if (r == null) return null;
      let n = t.getTestability(r);
      return (
        n ??
        (e
          ? an().isShadowRoot(r)
            ? this.findTestabilityInTree(t, r.host, !0)
            : this.findTestabilityInTree(t, r.parentElement, !0)
          : null)
      );
    }
  },
  Nd = (() => {
    let t = class t {
      build() {
        return new XMLHttpRequest();
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac }));
    let i = t;
    return i;
  })(),
  cn = new x(""),
  ls = (() => {
    let t = class t {
      constructor(e, n) {
        (this._zone = n),
          (this._eventNameToPlugin = new Map()),
          e.forEach((o) => {
            o.manager = this;
          }),
          (this._plugins = e.slice().reverse());
      }
      addEventListener(e, n, o) {
        return this._findPluginFor(n).addEventListener(e, n, o);
      }
      getZone() {
        return this._zone;
      }
      _findPluginFor(e) {
        let n = this._eventNameToPlugin.get(e);
        if (n) return n;
        if (((n = this._plugins.find((a) => a.supports(e))), !n))
          throw new G(5101, !1);
        return this._eventNameToPlugin.set(e, n), n;
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(b(cn), b(D));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac }));
    let i = t;
    return i;
  })(),
  di = class {
    constructor(t) {
      this._doc = t;
    }
  },
  Vr = "ng-app-id",
  us = (() => {
    let t = class t {
      constructor(e, n, o, a = {}) {
        (this.doc = e),
          (this.appId = n),
          (this.nonce = o),
          (this.platformId = a),
          (this.styleRef = new Map()),
          (this.hostNodes = new Set()),
          (this.styleNodesInDOM = this.collectServerRenderedStyles()),
          (this.platformIsServer = Or(a)),
          this.resetHostNodes();
      }
      addStyles(e) {
        for (let n of e)
          this.changeUsageCount(n, 1) === 1 && this.onStyleAdded(n);
      }
      removeStyles(e) {
        for (let n of e)
          this.changeUsageCount(n, -1) <= 0 && this.onStyleRemoved(n);
      }
      ngOnDestroy() {
        let e = this.styleNodesInDOM;
        e && (e.forEach((n) => n.remove()), e.clear());
        for (let n of this.getAllStyles()) this.onStyleRemoved(n);
        this.resetHostNodes();
      }
      addHost(e) {
        this.hostNodes.add(e);
        for (let n of this.getAllStyles()) this.addStyleToHost(e, n);
      }
      removeHost(e) {
        this.hostNodes.delete(e);
      }
      getAllStyles() {
        return this.styleRef.keys();
      }
      onStyleAdded(e) {
        for (let n of this.hostNodes) this.addStyleToHost(n, e);
      }
      onStyleRemoved(e) {
        let n = this.styleRef;
        n.get(e)?.elements?.forEach((o) => o.remove()), n.delete(e);
      }
      collectServerRenderedStyles() {
        let e = this.doc.head?.querySelectorAll(`style[${Vr}="${this.appId}"]`);
        if (e?.length) {
          let n = new Map();
          return (
            e.forEach((o) => {
              o.textContent != null && n.set(o.textContent, o);
            }),
            n
          );
        }
        return null;
      }
      changeUsageCount(e, n) {
        let o = this.styleRef;
        if (o.has(e)) {
          let a = o.get(e);
          return (a.usage += n), a.usage;
        }
        return o.set(e, { usage: n, elements: [] }), n;
      }
      getStyleElement(e, n) {
        let o = this.styleNodesInDOM,
          a = o?.get(n);
        if (a?.parentNode === e) return o.delete(n), a.removeAttribute(Vr), a;
        {
          let s = this.doc.createElement("style");
          return (
            this.nonce && s.setAttribute("nonce", this.nonce),
            (s.textContent = n),
            this.platformIsServer && s.setAttribute(Vr, this.appId),
            e.appendChild(s),
            s
          );
        }
      }
      addStyleToHost(e, n) {
        let o = this.getStyleElement(e, n),
          a = this.styleRef,
          s = a.get(n)?.elements;
        s ? s.push(o) : a.set(n, { elements: [o], usage: 1 });
      }
      resetHostNodes() {
        let e = this.hostNodes;
        e.clear(), e.add(this.doc.head);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(b(R), b(ei), b(ii, 8), b(te));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac }));
    let i = t;
    return i;
  })(),
  zr = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
    math: "http://www.w3.org/1998/Math/MathML",
  },
  Wr = /%COMP%/g,
  hs = "%COMP%",
  Pd = `_nghost-${hs}`,
  Ld = `_ngcontent-${hs}`,
  jd = !0,
  Vd = new x("", { providedIn: "root", factory: () => jd });
function zd(i) {
  return Ld.replace(Wr, i);
}
function Bd(i) {
  return Pd.replace(Wr, i);
}
function ms(i, t) {
  return t.map((r) => r.replace(Wr, i));
}
var dn = (() => {
    let t = class t {
      constructor(e, n, o, a, s, d, c, m = null) {
        (this.eventManager = e),
          (this.sharedStylesHost = n),
          (this.appId = o),
          (this.removeStylesOnCompDestroy = a),
          (this.doc = s),
          (this.platformId = d),
          (this.ngZone = c),
          (this.nonce = m),
          (this.rendererByCompId = new Map()),
          (this.platformIsServer = Or(d)),
          (this.defaultRenderer = new li(e, s, c, this.platformIsServer));
      }
      createRenderer(e, n) {
        if (!e || !n) return this.defaultRenderer;
        this.platformIsServer &&
          n.encapsulation === Je.ShadowDom &&
          (n = U(g({}, n), { encapsulation: Je.Emulated }));
        let o = this.getOrCreateRenderer(e, n);
        return (
          o instanceof ln
            ? o.applyToHost(e)
            : o instanceof ui && o.applyStyles(),
          o
        );
      }
      getOrCreateRenderer(e, n) {
        let o = this.rendererByCompId,
          a = o.get(n.id);
        if (!a) {
          let s = this.doc,
            d = this.ngZone,
            c = this.eventManager,
            m = this.sharedStylesHost,
            f = this.removeStylesOnCompDestroy,
            _ = this.platformIsServer;
          switch (n.encapsulation) {
            case Je.Emulated:
              a = new ln(c, m, n, this.appId, f, s, d, _);
              break;
            case Je.ShadowDom:
              return new $r(c, m, e, n, s, d, this.nonce, _);
            default:
              a = new ui(c, m, n, f, s, d, _);
              break;
          }
          o.set(n.id, a);
        }
        return a;
      }
      ngOnDestroy() {
        this.rendererByCompId.clear();
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(b(ls), b(us), b(ei), b(Vd), b(R), b(te), b(D), b(ii));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac }));
    let i = t;
    return i;
  })(),
  li = class {
    constructor(t, r, e, n) {
      (this.eventManager = t),
        (this.doc = r),
        (this.ngZone = e),
        (this.platformIsServer = n),
        (this.data = Object.create(null)),
        (this.throwOnSyntheticProps = !0),
        (this.destroyNode = null);
    }
    destroy() {}
    createElement(t, r) {
      return r
        ? this.doc.createElementNS(zr[r] || r, t)
        : this.doc.createElement(t);
    }
    createComment(t) {
      return this.doc.createComment(t);
    }
    createText(t) {
      return this.doc.createTextNode(t);
    }
    appendChild(t, r) {
      (cs(t) ? t.content : t).appendChild(r);
    }
    insertBefore(t, r, e) {
      t && (cs(t) ? t.content : t).insertBefore(r, e);
    }
    removeChild(t, r) {
      r.remove();
    }
    selectRootElement(t, r) {
      let e = typeof t == "string" ? this.doc.querySelector(t) : t;
      if (!e) throw new G(-5104, !1);
      return r || (e.textContent = ""), e;
    }
    parentNode(t) {
      return t.parentNode;
    }
    nextSibling(t) {
      return t.nextSibling;
    }
    setAttribute(t, r, e, n) {
      if (n) {
        r = n + ":" + r;
        let o = zr[n];
        o ? t.setAttributeNS(o, r, e) : t.setAttribute(r, e);
      } else t.setAttribute(r, e);
    }
    removeAttribute(t, r, e) {
      if (e) {
        let n = zr[e];
        n ? t.removeAttributeNS(n, r) : t.removeAttribute(`${e}:${r}`);
      } else t.removeAttribute(r);
    }
    addClass(t, r) {
      t.classList.add(r);
    }
    removeClass(t, r) {
      t.classList.remove(r);
    }
    setStyle(t, r, e, n) {
      n & (ni.DashCase | ni.Important)
        ? t.style.setProperty(r, e, n & ni.Important ? "important" : "")
        : (t.style[r] = e);
    }
    removeStyle(t, r, e) {
      e & ni.DashCase ? t.style.removeProperty(r) : (t.style[r] = "");
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
        ((t = an().getGlobalEventTarget(this.doc, t)), !t)
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
function cs(i) {
  return i.tagName === "TEMPLATE" && i.content !== void 0;
}
var $r = class extends li {
    constructor(t, r, e, n, o, a, s, d) {
      super(t, o, a, d),
        (this.sharedStylesHost = r),
        (this.hostEl = e),
        (this.shadowRoot = e.attachShadow({ mode: "open" })),
        this.sharedStylesHost.addHost(this.shadowRoot);
      let c = ms(n.id, n.styles);
      for (let m of c) {
        let f = document.createElement("style");
        s && f.setAttribute("nonce", s),
          (f.textContent = m),
          this.shadowRoot.appendChild(f);
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
  ui = class extends li {
    constructor(t, r, e, n, o, a, s, d) {
      super(t, o, a, s),
        (this.sharedStylesHost = r),
        (this.removeStylesOnCompDestroy = n),
        (this.styles = d ? ms(d, e.styles) : e.styles);
    }
    applyStyles() {
      this.sharedStylesHost.addStyles(this.styles);
    }
    destroy() {
      this.removeStylesOnCompDestroy &&
        this.sharedStylesHost.removeStyles(this.styles);
    }
  },
  ln = class extends ui {
    constructor(t, r, e, n, o, a, s, d) {
      let c = n + "-" + e.id;
      super(t, r, e, o, a, s, d, c),
        (this.contentAttr = zd(c)),
        (this.hostAttr = Bd(c));
    }
    applyToHost(t) {
      this.applyStyles(), this.setAttribute(t, this.hostAttr, "");
    }
    createElement(t, r) {
      let e = super.createElement(t, r);
      return super.setAttribute(e, this.contentAttr, ""), e;
    }
  },
  Ud = (() => {
    let t = class t extends di {
      constructor(e) {
        super(e);
      }
      supports(e) {
        return !0;
      }
      addEventListener(e, n, o) {
        return (
          e.addEventListener(n, o, !1), () => this.removeEventListener(e, n, o)
        );
      }
      removeEventListener(e, n, o) {
        return e.removeEventListener(n, o);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(b(R));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac }));
    let i = t;
    return i;
  })(),
  Hd = (() => {
    let t = class t extends di {
      constructor(e) {
        super(e), (this.delegate = v(qa, { optional: !0 }));
      }
      supports(e) {
        return this.delegate ? this.delegate.supports(e) : !1;
      }
      addEventListener(e, n, o) {
        return this.delegate.addEventListener(e, n, o);
      }
      removeEventListener(e, n, o) {
        return this.delegate.removeEventListener(e, n, o);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(b(R));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac }));
    let i = t;
    return i;
  })(),
  ds = ["alt", "control", "meta", "shift"],
  $d = {
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
  Gd = {
    alt: (i) => i.altKey,
    control: (i) => i.ctrlKey,
    meta: (i) => i.metaKey,
    shift: (i) => i.shiftKey,
  },
  Wd = (() => {
    let t = class t extends di {
      constructor(e) {
        super(e);
      }
      supports(e) {
        return t.parseEventName(e) != null;
      }
      addEventListener(e, n, o) {
        let a = t.parseEventName(n),
          s = t.eventCallback(a.fullKey, o, this.manager.getZone());
        return this.manager
          .getZone()
          .runOutsideAngular(() => an().onAndCancel(e, a.domEventName, s));
      }
      static parseEventName(e) {
        let n = e.toLowerCase().split("."),
          o = n.shift();
        if (n.length === 0 || !(o === "keydown" || o === "keyup")) return null;
        let a = t._normalizeKey(n.pop()),
          s = "",
          d = n.indexOf("code");
        if (
          (d > -1 && (n.splice(d, 1), (s = "code.")),
          ds.forEach((m) => {
            let f = n.indexOf(m);
            f > -1 && (n.splice(f, 1), (s += m + "."));
          }),
          (s += a),
          n.length != 0 || a.length === 0)
        )
          return null;
        let c = {};
        return (c.domEventName = o), (c.fullKey = s), c;
      }
      static matchEventFullKeyCode(e, n) {
        let o = $d[e.key] || e.key,
          a = "";
        return (
          n.indexOf("code.") > -1 && ((o = e.code), (a = "code.")),
          o == null || !o
            ? !1
            : ((o = o.toLowerCase()),
              o === " " ? (o = "space") : o === "." && (o = "dot"),
              ds.forEach((s) => {
                if (s !== o) {
                  let d = Gd[s];
                  d(e) && (a += s + ".");
                }
              }),
              (a += o),
              a === n)
        );
      }
      static eventCallback(e, n, o) {
        return (a) => {
          t.matchEventFullKeyCode(a, e) && o.runGuarded(() => n(a));
        };
      }
      static _normalizeKey(e) {
        return e === "esc" ? "escape" : e;
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(b(R));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac }));
    let i = t;
    return i;
  })();
function qd() {
  Ur.makeCurrent();
}
function Qd() {
  return new Ki();
}
function Zd() {
  return Ra(document), document;
}
var Kd = [
    { provide: te, useValue: ns },
    { provide: Ta, useValue: qd, multi: !0 },
    { provide: R, useFactory: Zd, deps: [] },
  ],
  ps = $a(Ga, "browser", Kd),
  Yd = new x(""),
  Xd = [
    { provide: en, useClass: Hr, deps: [] },
    { provide: Ua, useClass: nn, deps: [D, Rr, en] },
    { provide: nn, useClass: nn, deps: [D, Rr, en] },
  ],
  Jd = [
    { provide: Aa, useValue: "root" },
    { provide: Ki, useFactory: Qd, deps: [] },
    { provide: cn, useClass: Ud, multi: !0, deps: [R, D, te] },
    { provide: cn, useClass: Wd, multi: !0, deps: [R] },
    { provide: cn, useClass: Hd, multi: !0 },
    dn,
    us,
    ls,
    { provide: Xi, useExisting: dn },
    { provide: as, useClass: Nd, deps: [] },
    [],
  ],
  fs = (() => {
    let t = class t {
      constructor(e) {}
      static withServerTransition(e) {
        return { ngModule: t, providers: [{ provide: ei, useValue: e.appId }] };
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(b(Yd, 12));
    }),
      (t.ɵmod = F({ type: t })),
      (t.ɵinj = T({ providers: [...Jd, ...Xd], imports: [sn, Wa] }));
    let i = t;
    return i;
  })();
var gs = (() => {
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
  (t.ɵfac = function (n) {
    return new (n || t)(b(R));
  }),
    (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let i = t;
  return i;
})();
var E = "primary",
  Ei = Symbol("RouteTitle"),
  Yr = class {
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
function Re(i) {
  return new Yr(i);
}
function el(i, t, r) {
  let e = r.path.split("/");
  if (
    e.length > i.length ||
    (r.pathMatch === "full" && (t.hasChildren() || e.length < i.length))
  )
    return null;
  let n = {};
  for (let o = 0; o < e.length; o++) {
    let a = e[o],
      s = i[o];
    if (a[0] === ":") n[a.substring(1)] = s;
    else if (a !== s.path) return null;
  }
  return { consumed: i.slice(0, e.length), posParams: n };
}
function il(i, t) {
  if (i.length !== t.length) return !1;
  for (let r = 0; r < i.length; ++r) if (!Rt(i[r], t[r])) return !1;
  return !0;
}
function Rt(i, t) {
  let r = i ? Xr(i) : void 0,
    e = t ? Xr(t) : void 0;
  if (!r || !e || r.length != e.length) return !1;
  let n;
  for (let o = 0; o < r.length; o++)
    if (((n = r[o]), !Ms(i[n], t[n]))) return !1;
  return !0;
}
function Xr(i) {
  return [...Object.keys(i), ...Object.getOwnPropertySymbols(i)];
}
function Ms(i, t) {
  if (Array.isArray(i) && Array.isArray(t)) {
    if (i.length !== t.length) return !1;
    let r = [...i].sort(),
      e = [...t].sort();
    return r.every((n, o) => e[o] === n);
  } else return i === t;
}
function As(i) {
  return i.length > 0 ? i[i.length - 1] : null;
}
function Qt(i) {
  return Gi(i) ? i : rn(i) ? st(Promise.resolve(i)) : y(i);
}
var nl = { exact: Rs, subset: Ts },
  ks = { exact: rl, subset: ol, ignored: () => !0 };
function bs(i, t, r) {
  return (
    nl[r.paths](i.root, t.root, r.matrixParams) &&
    ks[r.queryParams](i.queryParams, t.queryParams) &&
    !(r.fragment === "exact" && i.fragment !== t.fragment)
  );
}
function rl(i, t) {
  return Rt(i, t);
}
function Rs(i, t, r) {
  if (
    !re(i.segments, t.segments) ||
    !mn(i.segments, t.segments, r) ||
    i.numberOfChildren !== t.numberOfChildren
  )
    return !1;
  for (let e in t.children)
    if (!i.children[e] || !Rs(i.children[e], t.children[e], r)) return !1;
  return !0;
}
function ol(i, t) {
  return (
    Object.keys(t).length <= Object.keys(i).length &&
    Object.keys(t).every((r) => Ms(i[r], t[r]))
  );
}
function Ts(i, t, r) {
  return Fs(i, t, t.segments, r);
}
function Fs(i, t, r, e) {
  if (i.segments.length > r.length) {
    let n = i.segments.slice(0, r.length);
    return !(!re(n, r) || t.hasChildren() || !mn(n, r, e));
  } else if (i.segments.length === r.length) {
    if (!re(i.segments, r) || !mn(i.segments, r, e)) return !1;
    for (let n in t.children)
      if (!i.children[n] || !Ts(i.children[n], t.children[n], e)) return !1;
    return !0;
  } else {
    let n = r.slice(0, i.segments.length),
      o = r.slice(i.segments.length);
    return !re(i.segments, n) || !mn(i.segments, n, e) || !i.children[E]
      ? !1
      : Fs(i.children[E], t, o, e);
  }
}
function mn(i, t, r) {
  return t.every((e, n) => ks[r](i[n].parameters, e.parameters));
}
var Lt = class {
    constructor(t = new N([], {}), r = {}, e = null) {
      (this.root = t), (this.queryParams = r), (this.fragment = e);
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= Re(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      return cl.serialize(this);
    }
  },
  N = class {
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
      return pn(this);
    }
  },
  ne = class {
    constructor(t, r) {
      (this.path = t), (this.parameters = r);
    }
    get parameterMap() {
      return (this._parameterMap ??= Re(this.parameters)), this._parameterMap;
    }
    toString() {
      return Ns(this);
    }
  };
function al(i, t) {
  return re(i, t) && i.every((r, e) => Rt(r.parameters, t[e].parameters));
}
function re(i, t) {
  return i.length !== t.length ? !1 : i.every((r, e) => r.path === t[e].path);
}
function sl(i, t) {
  let r = [];
  return (
    Object.entries(i.children).forEach(([e, n]) => {
      e === E && (r = r.concat(t(n, e)));
    }),
    Object.entries(i.children).forEach(([e, n]) => {
      e !== E && (r = r.concat(t(n, e)));
    }),
    r
  );
}
var Si = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵprov = w({ token: t, factory: () => new Te(), providedIn: "root" }));
    let i = t;
    return i;
  })(),
  Te = class {
    parse(t) {
      let r = new to(t);
      return new Lt(
        r.parseRootSegment(),
        r.parseQueryParams(),
        r.parseFragment(),
      );
    }
    serialize(t) {
      let r = `/${hi(t.root, !0)}`,
        e = ul(t.queryParams),
        n = typeof t.fragment == "string" ? `#${dl(t.fragment)}` : "";
      return `${r}${e}${n}`;
    }
  },
  cl = new Te();
function pn(i) {
  return i.segments.map((t) => Ns(t)).join("/");
}
function hi(i, t) {
  if (!i.hasChildren()) return pn(i);
  if (t) {
    let r = i.children[E] ? hi(i.children[E], !1) : "",
      e = [];
    return (
      Object.entries(i.children).forEach(([n, o]) => {
        n !== E && e.push(`${n}:${hi(o, !1)}`);
      }),
      e.length > 0 ? `${r}(${e.join("//")})` : r
    );
  } else {
    let r = sl(i, (e, n) =>
      n === E ? [hi(i.children[E], !1)] : [`${n}:${hi(e, !1)}`],
    );
    return Object.keys(i.children).length === 1 && i.children[E] != null
      ? `${pn(i)}/${r[0]}`
      : `${pn(i)}/(${r.join("//")})`;
  }
}
function Os(i) {
  return encodeURIComponent(i)
    .replace(/%40/g, "@")
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",");
}
function un(i) {
  return Os(i).replace(/%3B/gi, ";");
}
function dl(i) {
  return encodeURI(i);
}
function Jr(i) {
  return Os(i)
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/%26/gi, "&");
}
function fn(i) {
  return decodeURIComponent(i);
}
function _s(i) {
  return fn(i.replace(/\+/g, "%20"));
}
function Ns(i) {
  return `${Jr(i.path)}${ll(i.parameters)}`;
}
function ll(i) {
  return Object.entries(i)
    .map(([t, r]) => `;${Jr(t)}=${Jr(r)}`)
    .join("");
}
function ul(i) {
  let t = Object.entries(i)
    .map(([r, e]) =>
      Array.isArray(e)
        ? e.map((n) => `${un(r)}=${un(n)}`).join("&")
        : `${un(r)}=${un(e)}`,
    )
    .filter((r) => r);
  return t.length ? `?${t.join("&")}` : "";
}
var hl = /^[^\/()?;#]+/;
function qr(i) {
  let t = i.match(hl);
  return t ? t[0] : "";
}
var ml = /^[^\/()?;=#]+/;
function pl(i) {
  let t = i.match(ml);
  return t ? t[0] : "";
}
var fl = /^[^=?&#]+/;
function gl(i) {
  let t = i.match(fl);
  return t ? t[0] : "";
}
var vl = /^[^&#]+/;
function bl(i) {
  let t = i.match(vl);
  return t ? t[0] : "";
}
var to = class {
  constructor(t) {
    (this.url = t), (this.remaining = t);
  }
  parseRootSegment() {
    return (
      this.consumeOptional("/"),
      this.remaining === "" ||
      this.peekStartsWith("?") ||
      this.peekStartsWith("#")
        ? new N([], {})
        : new N([], this.parseChildren())
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
      (t.length > 0 || Object.keys(r).length > 0) && (e[E] = new N(t, r)),
      e
    );
  }
  parseSegment() {
    let t = qr(this.remaining);
    if (t === "" && this.peekStartsWith(";")) throw new G(4009, !1);
    return this.capture(t), new ne(fn(t), this.parseMatrixParams());
  }
  parseMatrixParams() {
    let t = {};
    for (; this.consumeOptional(";"); ) this.parseParam(t);
    return t;
  }
  parseParam(t) {
    let r = pl(this.remaining);
    if (!r) return;
    this.capture(r);
    let e = "";
    if (this.consumeOptional("=")) {
      let n = qr(this.remaining);
      n && ((e = n), this.capture(e));
    }
    t[fn(r)] = fn(e);
  }
  parseQueryParam(t) {
    let r = gl(this.remaining);
    if (!r) return;
    this.capture(r);
    let e = "";
    if (this.consumeOptional("=")) {
      let a = bl(this.remaining);
      a && ((e = a), this.capture(e));
    }
    let n = _s(r),
      o = _s(e);
    if (t.hasOwnProperty(n)) {
      let a = t[n];
      Array.isArray(a) || ((a = [a]), (t[n] = a)), a.push(o);
    } else t[n] = o;
  }
  parseParens(t) {
    let r = {};
    for (
      this.capture("(");
      !this.consumeOptional(")") && this.remaining.length > 0;

    ) {
      let e = qr(this.remaining),
        n = this.remaining[e.length];
      if (n !== "/" && n !== ")" && n !== ";") throw new G(4010, !1);
      let o;
      e.indexOf(":") > -1
        ? ((o = e.slice(0, e.indexOf(":"))), this.capture(o), this.capture(":"))
        : t && (o = E);
      let a = this.parseChildren();
      (r[o] = Object.keys(a).length === 1 ? a[E] : new N([], a)),
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
    if (!this.consumeOptional(t)) throw new G(4011, !1);
  }
};
function Ps(i) {
  return i.segments.length > 0 ? new N([], { [E]: i }) : i;
}
function Ls(i) {
  let t = {};
  for (let [e, n] of Object.entries(i.children)) {
    let o = Ls(n);
    if (e === E && o.segments.length === 0 && o.hasChildren())
      for (let [a, s] of Object.entries(o.children)) t[a] = s;
    else (o.segments.length > 0 || o.hasChildren()) && (t[e] = o);
  }
  let r = new N(i.segments, t);
  return _l(r);
}
function _l(i) {
  if (i.numberOfChildren === 1 && i.children[E]) {
    let t = i.children[E];
    return new N(i.segments.concat(t.segments), t.children);
  }
  return i;
}
function oe(i) {
  return i instanceof Lt;
}
function yl(i, t, r = null, e = null) {
  let n = js(i);
  return Vs(n, t, r, e);
}
function js(i) {
  let t;
  function r(o) {
    let a = {};
    for (let d of o.children) {
      let c = r(d);
      a[d.outlet] = c;
    }
    let s = new N(o.url, a);
    return o === i && (t = s), s;
  }
  let e = r(i.root),
    n = Ps(e);
  return t ?? n;
}
function Vs(i, t, r, e) {
  let n = i;
  for (; n.parent; ) n = n.parent;
  if (t.length === 0) return Qr(n, n, n, r, e);
  let o = wl(t);
  if (o.toRoot()) return Qr(n, n, new N([], {}), r, e);
  let a = xl(o, n, i),
    s = a.processChildren
      ? fi(a.segmentGroup, a.index, o.commands)
      : Bs(a.segmentGroup, a.index, o.commands);
  return Qr(n, a.segmentGroup, s, r, e);
}
function gn(i) {
  return typeof i == "object" && i != null && !i.outlets && !i.segmentPath;
}
function bi(i) {
  return typeof i == "object" && i != null && i.outlets;
}
function Qr(i, t, r, e, n) {
  let o = {};
  e &&
    Object.entries(e).forEach(([d, c]) => {
      o[d] = Array.isArray(c) ? c.map((m) => `${m}`) : `${c}`;
    });
  let a;
  i === t ? (a = r) : (a = zs(i, t, r));
  let s = Ps(Ls(a));
  return new Lt(s, o, n);
}
function zs(i, t, r) {
  let e = {};
  return (
    Object.entries(i.children).forEach(([n, o]) => {
      o === t ? (e[n] = r) : (e[n] = zs(o, t, r));
    }),
    new N(i.segments, e)
  );
}
var vn = class {
  constructor(t, r, e) {
    if (
      ((this.isAbsolute = t),
      (this.numberOfDoubleDots = r),
      (this.commands = e),
      t && e.length > 0 && gn(e[0]))
    )
      throw new G(4003, !1);
    let n = e.find(bi);
    if (n && n !== As(e)) throw new G(4004, !1);
  }
  toRoot() {
    return (
      this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"
    );
  }
};
function wl(i) {
  if (typeof i[0] == "string" && i.length === 1 && i[0] === "/")
    return new vn(!0, 0, i);
  let t = 0,
    r = !1,
    e = i.reduce((n, o, a) => {
      if (typeof o == "object" && o != null) {
        if (o.outlets) {
          let s = {};
          return (
            Object.entries(o.outlets).forEach(([d, c]) => {
              s[d] = typeof c == "string" ? c.split("/") : c;
            }),
            [...n, { outlets: s }]
          );
        }
        if (o.segmentPath) return [...n, o.segmentPath];
      }
      return typeof o != "string"
        ? [...n, o]
        : a === 0
          ? (o.split("/").forEach((s, d) => {
              (d == 0 && s === ".") ||
                (d == 0 && s === ""
                  ? (r = !0)
                  : s === ".."
                    ? t++
                    : s != "" && n.push(s));
            }),
            n)
          : [...n, o];
    }, []);
  return new vn(r, t, e);
}
var Me = class {
  constructor(t, r, e) {
    (this.segmentGroup = t), (this.processChildren = r), (this.index = e);
  }
};
function xl(i, t, r) {
  if (i.isAbsolute) return new Me(t, !0, 0);
  if (!r) return new Me(t, !1, NaN);
  if (r.parent === null) return new Me(r, !0, 0);
  let e = gn(i.commands[0]) ? 0 : 1,
    n = r.segments.length - 1 + e;
  return Cl(r, n, i.numberOfDoubleDots);
}
function Cl(i, t, r) {
  let e = i,
    n = t,
    o = r;
  for (; o > n; ) {
    if (((o -= n), (e = e.parent), !e)) throw new G(4005, !1);
    n = e.segments.length;
  }
  return new Me(e, !1, n - o);
}
function Il(i) {
  return bi(i[0]) ? i[0].outlets : { [E]: i };
}
function Bs(i, t, r) {
  if (((i ??= new N([], {})), i.segments.length === 0 && i.hasChildren()))
    return fi(i, t, r);
  let e = El(i, t, r),
    n = r.slice(e.commandIndex);
  if (e.match && e.pathIndex < i.segments.length) {
    let o = new N(i.segments.slice(0, e.pathIndex), {});
    return (
      (o.children[E] = new N(i.segments.slice(e.pathIndex), i.children)),
      fi(o, 0, n)
    );
  } else
    return e.match && n.length === 0
      ? new N(i.segments, {})
      : e.match && !i.hasChildren()
        ? eo(i, t, r)
        : e.match
          ? fi(i, 0, n)
          : eo(i, t, r);
}
function fi(i, t, r) {
  if (r.length === 0) return new N(i.segments, {});
  {
    let e = Il(r),
      n = {};
    if (
      Object.keys(e).some((o) => o !== E) &&
      i.children[E] &&
      i.numberOfChildren === 1 &&
      i.children[E].segments.length === 0
    ) {
      let o = fi(i.children[E], t, r);
      return new N(i.segments, o.children);
    }
    return (
      Object.entries(e).forEach(([o, a]) => {
        typeof a == "string" && (a = [a]),
          a !== null && (n[o] = Bs(i.children[o], t, a));
      }),
      Object.entries(i.children).forEach(([o, a]) => {
        e[o] === void 0 && (n[o] = a);
      }),
      new N(i.segments, n)
    );
  }
}
function El(i, t, r) {
  let e = 0,
    n = t,
    o = { match: !1, pathIndex: 0, commandIndex: 0 };
  for (; n < i.segments.length; ) {
    if (e >= r.length) return o;
    let a = i.segments[n],
      s = r[e];
    if (bi(s)) break;
    let d = `${s}`,
      c = e < r.length - 1 ? r[e + 1] : null;
    if (n > 0 && d === void 0) break;
    if (d && c && typeof c == "object" && c.outlets === void 0) {
      if (!ws(d, c, a)) return o;
      e += 2;
    } else {
      if (!ws(d, {}, a)) return o;
      e++;
    }
    n++;
  }
  return { match: !0, pathIndex: n, commandIndex: e };
}
function eo(i, t, r) {
  let e = i.segments.slice(0, t),
    n = 0;
  for (; n < r.length; ) {
    let o = r[n];
    if (bi(o)) {
      let d = Sl(o.outlets);
      return new N(e, d);
    }
    if (n === 0 && gn(r[0])) {
      let d = i.segments[t];
      e.push(new ne(d.path, ys(r[0]))), n++;
      continue;
    }
    let a = bi(o) ? o.outlets[E] : `${o}`,
      s = n < r.length - 1 ? r[n + 1] : null;
    a && s && gn(s)
      ? (e.push(new ne(a, ys(s))), (n += 2))
      : (e.push(new ne(a, {})), n++);
  }
  return new N(e, {});
}
function Sl(i) {
  let t = {};
  return (
    Object.entries(i).forEach(([r, e]) => {
      typeof e == "string" && (e = [e]),
        e !== null && (t[r] = eo(new N([], {}), 0, e));
    }),
    t
  );
}
function ys(i) {
  let t = {};
  return Object.entries(i).forEach(([r, e]) => (t[r] = `${e}`)), t;
}
function ws(i, t, r) {
  return i == r.path && Rt(t, r.parameters);
}
var gi = "imperative",
  rt = (function (i) {
    return (
      (i[(i.NavigationStart = 0)] = "NavigationStart"),
      (i[(i.NavigationEnd = 1)] = "NavigationEnd"),
      (i[(i.NavigationCancel = 2)] = "NavigationCancel"),
      (i[(i.NavigationError = 3)] = "NavigationError"),
      (i[(i.RoutesRecognized = 4)] = "RoutesRecognized"),
      (i[(i.ResolveStart = 5)] = "ResolveStart"),
      (i[(i.ResolveEnd = 6)] = "ResolveEnd"),
      (i[(i.GuardsCheckStart = 7)] = "GuardsCheckStart"),
      (i[(i.GuardsCheckEnd = 8)] = "GuardsCheckEnd"),
      (i[(i.RouteConfigLoadStart = 9)] = "RouteConfigLoadStart"),
      (i[(i.RouteConfigLoadEnd = 10)] = "RouteConfigLoadEnd"),
      (i[(i.ChildActivationStart = 11)] = "ChildActivationStart"),
      (i[(i.ChildActivationEnd = 12)] = "ChildActivationEnd"),
      (i[(i.ActivationStart = 13)] = "ActivationStart"),
      (i[(i.ActivationEnd = 14)] = "ActivationEnd"),
      (i[(i.Scroll = 15)] = "Scroll"),
      (i[(i.NavigationSkipped = 16)] = "NavigationSkipped"),
      i
    );
  })(rt || {}),
  wt = class {
    constructor(t, r) {
      (this.id = t), (this.url = r);
    }
  },
  Fe = class extends wt {
    constructor(t, r, e = "imperative", n = null) {
      super(t, r),
        (this.type = rt.NavigationStart),
        (this.navigationTrigger = e),
        (this.restoredState = n);
    }
    toString() {
      return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
    }
  },
  Dt = class extends wt {
    constructor(t, r, e) {
      super(t, r), (this.urlAfterRedirects = e), (this.type = rt.NavigationEnd);
    }
    toString() {
      return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
    }
  },
  _t = (function (i) {
    return (
      (i[(i.Redirect = 0)] = "Redirect"),
      (i[(i.SupersededByNewNavigation = 1)] = "SupersededByNewNavigation"),
      (i[(i.NoDataFromResolver = 2)] = "NoDataFromResolver"),
      (i[(i.GuardRejected = 3)] = "GuardRejected"),
      i
    );
  })(_t || {}),
  bn = (function (i) {
    return (
      (i[(i.IgnoredSameUrlNavigation = 0)] = "IgnoredSameUrlNavigation"),
      (i[(i.IgnoredByUrlHandlingStrategy = 1)] =
        "IgnoredByUrlHandlingStrategy"),
      i
    );
  })(bn || {}),
  Pt = class extends wt {
    constructor(t, r, e, n) {
      super(t, r),
        (this.reason = e),
        (this.code = n),
        (this.type = rt.NavigationCancel);
    }
    toString() {
      return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
    }
  },
  qt = class extends wt {
    constructor(t, r, e, n) {
      super(t, r),
        (this.reason = e),
        (this.code = n),
        (this.type = rt.NavigationSkipped);
    }
  },
  _i = class extends wt {
    constructor(t, r, e, n) {
      super(t, r),
        (this.error = e),
        (this.target = n),
        (this.type = rt.NavigationError);
    }
    toString() {
      return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
    }
  },
  _n = class extends wt {
    constructor(t, r, e, n) {
      super(t, r),
        (this.urlAfterRedirects = e),
        (this.state = n),
        (this.type = rt.RoutesRecognized);
    }
    toString() {
      return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  io = class extends wt {
    constructor(t, r, e, n) {
      super(t, r),
        (this.urlAfterRedirects = e),
        (this.state = n),
        (this.type = rt.GuardsCheckStart);
    }
    toString() {
      return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  no = class extends wt {
    constructor(t, r, e, n, o) {
      super(t, r),
        (this.urlAfterRedirects = e),
        (this.state = n),
        (this.shouldActivate = o),
        (this.type = rt.GuardsCheckEnd);
    }
    toString() {
      return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
    }
  },
  ro = class extends wt {
    constructor(t, r, e, n) {
      super(t, r),
        (this.urlAfterRedirects = e),
        (this.state = n),
        (this.type = rt.ResolveStart);
    }
    toString() {
      return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  oo = class extends wt {
    constructor(t, r, e, n) {
      super(t, r),
        (this.urlAfterRedirects = e),
        (this.state = n),
        (this.type = rt.ResolveEnd);
    }
    toString() {
      return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  ao = class {
    constructor(t) {
      (this.route = t), (this.type = rt.RouteConfigLoadStart);
    }
    toString() {
      return `RouteConfigLoadStart(path: ${this.route.path})`;
    }
  },
  so = class {
    constructor(t) {
      (this.route = t), (this.type = rt.RouteConfigLoadEnd);
    }
    toString() {
      return `RouteConfigLoadEnd(path: ${this.route.path})`;
    }
  },
  co = class {
    constructor(t) {
      (this.snapshot = t), (this.type = rt.ChildActivationStart);
    }
    toString() {
      return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  lo = class {
    constructor(t) {
      (this.snapshot = t), (this.type = rt.ChildActivationEnd);
    }
    toString() {
      return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  uo = class {
    constructor(t) {
      (this.snapshot = t), (this.type = rt.ActivationStart);
    }
    toString() {
      return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  ho = class {
    constructor(t) {
      (this.snapshot = t), (this.type = rt.ActivationEnd);
    }
    toString() {
      return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  yn = class {
    constructor(t, r, e) {
      (this.routerEvent = t),
        (this.position = r),
        (this.anchor = e),
        (this.type = rt.Scroll);
    }
    toString() {
      let t = this.position ? `${this.position[0]}, ${this.position[1]}` : null;
      return `Scroll(anchor: '${this.anchor}', position: '${t}')`;
    }
  },
  yi = class {},
  Oe = class {
    constructor(t, r) {
      (this.url = t), (this.navigationBehaviorOptions = r);
    }
  };
function Dl(i, t) {
  return (
    i.providers &&
      !i._injector &&
      (i._injector = Mr(i.providers, t, `Route: ${i.path}`)),
    i._injector ?? t
  );
}
function St(i) {
  return i.outlet || E;
}
function Ml(i, t) {
  let r = i.filter((e) => St(e) === t);
  return r.push(...i.filter((e) => St(e) !== t)), r;
}
function Di(i) {
  if (!i) return null;
  if (i.routeConfig?._injector) return i.routeConfig._injector;
  for (let t = i.parent; t; t = t.parent) {
    let r = t.routeConfig;
    if (r?._loadedInjector) return r._loadedInjector;
    if (r?._injector) return r._injector;
  }
  return null;
}
var mo = class {
    get injector() {
      return Di(this.route?.snapshot) ?? this.rootInjector;
    }
    set injector(t) {}
    constructor(t) {
      (this.rootInjector = t),
        (this.outlet = null),
        (this.route = null),
        (this.children = new Mi(this.rootInjector)),
        (this.attachRef = null);
    }
  },
  Mi = (() => {
    let t = class t {
      constructor(e) {
        (this.rootInjector = e), (this.contexts = new Map());
      }
      onChildOutletCreated(e, n) {
        let o = this.getOrCreateContext(e);
        (o.outlet = n), this.contexts.set(e, o);
      }
      onChildOutletDestroyed(e) {
        let n = this.getContext(e);
        n && ((n.outlet = null), (n.attachRef = null));
      }
      onOutletDeactivated() {
        let e = this.contexts;
        return (this.contexts = new Map()), e;
      }
      onOutletReAttached(e) {
        this.contexts = e;
      }
      getOrCreateContext(e) {
        let n = this.getContext(e);
        return (
          n || ((n = new mo(this.rootInjector)), this.contexts.set(e, n)), n
        );
      }
      getContext(e) {
        return this.contexts.get(e) || null;
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(b(ti));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })(),
  wn = class {
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
      let r = po(t, this._root);
      return r ? r.children.map((e) => e.value) : [];
    }
    firstChild(t) {
      let r = po(t, this._root);
      return r && r.children.length > 0 ? r.children[0].value : null;
    }
    siblings(t) {
      let r = fo(t, this._root);
      return r.length < 2
        ? []
        : r[r.length - 2].children.map((n) => n.value).filter((n) => n !== t);
    }
    pathFromRoot(t) {
      return fo(t, this._root).map((r) => r.value);
    }
  };
function po(i, t) {
  if (i === t.value) return t;
  for (let r of t.children) {
    let e = po(i, r);
    if (e) return e;
  }
  return null;
}
function fo(i, t) {
  if (i === t.value) return [t];
  for (let r of t.children) {
    let e = fo(i, r);
    if (e.length) return e.unshift(t), e;
  }
  return [];
}
var bt = class {
  constructor(t, r) {
    (this.value = t), (this.children = r);
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function De(i) {
  let t = {};
  return i && i.children.forEach((r) => (t[r.value.outlet] = r)), t;
}
var xn = class extends wn {
  constructor(t, r) {
    super(t), (this.snapshot = r), Io(this, t);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function Us(i) {
  let t = Al(i),
    r = new ut([new ne("", {})]),
    e = new ut({}),
    n = new ut({}),
    o = new ut({}),
    a = new ut(""),
    s = new ae(r, e, o, a, n, E, i, t.root);
  return (s.snapshot = t.root), new xn(new bt(s, []), t);
}
function Al(i) {
  let t = {},
    r = {},
    e = {},
    n = "",
    o = new Ae([], t, e, n, r, E, i, null, {});
  return new In("", new bt(o, []));
}
var ae = class {
  constructor(t, r, e, n, o, a, s, d) {
    (this.urlSubject = t),
      (this.paramsSubject = r),
      (this.queryParamsSubject = e),
      (this.fragmentSubject = n),
      (this.dataSubject = o),
      (this.outlet = a),
      (this.component = s),
      (this._futureSnapshot = d),
      (this.title = this.dataSubject?.pipe(A((c) => c[Ei])) ?? y(void 0)),
      (this.url = t),
      (this.params = r),
      (this.queryParams = e),
      (this.fragment = n),
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
      (this._paramMap ??= this.params.pipe(A((t) => Re(t)))), this._paramMap
    );
  }
  get queryParamMap() {
    return (
      (this._queryParamMap ??= this.queryParams.pipe(A((t) => Re(t)))),
      this._queryParamMap
    );
  }
  toString() {
    return this.snapshot
      ? this.snapshot.toString()
      : `Future(${this._futureSnapshot})`;
  }
};
function Cn(i, t, r = "emptyOnly") {
  let e,
    { routeConfig: n } = i;
  return (
    t !== null &&
    (r === "always" ||
      n?.path === "" ||
      (!t.component && !t.routeConfig?.loadComponent))
      ? (e = {
          params: g(g({}, t.params), i.params),
          data: g(g({}, t.data), i.data),
          resolve: g(g(g(g({}, i.data), t.data), n?.data), i._resolvedData),
        })
      : (e = {
          params: g({}, i.params),
          data: g({}, i.data),
          resolve: g(g({}, i.data), i._resolvedData ?? {}),
        }),
    n && $s(n) && (e.resolve[Ei] = n.title),
    e
  );
}
var Ae = class {
    get title() {
      return this.data?.[Ei];
    }
    constructor(t, r, e, n, o, a, s, d, c) {
      (this.url = t),
        (this.params = r),
        (this.queryParams = e),
        (this.fragment = n),
        (this.data = o),
        (this.outlet = a),
        (this.component = s),
        (this.routeConfig = d),
        (this._resolve = c);
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
      return (this._paramMap ??= Re(this.params)), this._paramMap;
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= Re(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      let t = this.url.map((e) => e.toString()).join("/"),
        r = this.routeConfig ? this.routeConfig.path : "";
      return `Route(url:'${t}', path:'${r}')`;
    }
  },
  In = class extends wn {
    constructor(t, r) {
      super(r), (this.url = t), Io(this, r);
    }
    toString() {
      return Hs(this._root);
    }
  };
function Io(i, t) {
  (t.value._routerState = i), t.children.forEach((r) => Io(i, r));
}
function Hs(i) {
  let t = i.children.length > 0 ? ` { ${i.children.map(Hs).join(", ")} } ` : "";
  return `${i.value}${t}`;
}
function Zr(i) {
  if (i.snapshot) {
    let t = i.snapshot,
      r = i._futureSnapshot;
    (i.snapshot = r),
      Rt(t.queryParams, r.queryParams) ||
        i.queryParamsSubject.next(r.queryParams),
      t.fragment !== r.fragment && i.fragmentSubject.next(r.fragment),
      Rt(t.params, r.params) || i.paramsSubject.next(r.params),
      il(t.url, r.url) || i.urlSubject.next(r.url),
      Rt(t.data, r.data) || i.dataSubject.next(r.data);
  } else
    (i.snapshot = i._futureSnapshot),
      i.dataSubject.next(i._futureSnapshot.data);
}
function go(i, t) {
  let r = Rt(i.params, t.params) && al(i.url, t.url),
    e = !i.parent != !t.parent;
  return r && !e && (!i.parent || go(i.parent, t.parent));
}
function $s(i) {
  return typeof i.title == "string" || i.title === null;
}
var Eo = (() => {
    let t = class t {
      constructor() {
        (this.activated = null),
          (this._activatedRoute = null),
          (this.name = E),
          (this.activateEvents = new W()),
          (this.deactivateEvents = new W()),
          (this.attachEvents = new W()),
          (this.detachEvents = new W()),
          (this.parentContexts = v(Mi)),
          (this.location = v(Sr)),
          (this.changeDetector = v(J)),
          (this.inputBinder = v(kn, { optional: !0 })),
          (this.supportsBindingToComponentInputs = !0);
      }
      get activatedComponentRef() {
        return this.activated;
      }
      ngOnChanges(e) {
        if (e.name) {
          let { firstChange: n, previousValue: o } = e.name;
          if (n) return;
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
        if (!this.activated) throw new G(4012, !1);
        return this.activated.instance;
      }
      get activatedRoute() {
        if (!this.activated) throw new G(4012, !1);
        return this._activatedRoute;
      }
      get activatedRouteData() {
        return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
      }
      detach() {
        if (!this.activated) throw new G(4012, !1);
        this.location.detach();
        let e = this.activated;
        return (
          (this.activated = null),
          (this._activatedRoute = null),
          this.detachEvents.emit(e.instance),
          e
        );
      }
      attach(e, n) {
        (this.activated = e),
          (this._activatedRoute = n),
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
      activateWith(e, n) {
        if (this.isActivated) throw new G(4013, !1);
        this._activatedRoute = e;
        let o = this.location,
          s = e.snapshot.component,
          d = this.parentContexts.getOrCreateContext(this.name).children,
          c = new vo(e, d, o.injector);
        (this.activated = o.createComponent(s, {
          index: o.length,
          injector: c,
          environmentInjector: n,
        })),
          this.changeDetector.markForCheck(),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.activateEvents.emit(this.activated.instance);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵdir = P({
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
        features: [Ft],
      }));
    let i = t;
    return i;
  })(),
  vo = class i {
    __ngOutletInjector(t) {
      return new i(this.route, this.childContexts, t);
    }
    constructor(t, r, e) {
      (this.route = t), (this.childContexts = r), (this.parent = e);
    }
    get(t, r) {
      return t === ae
        ? this.route
        : t === Mi
          ? this.childContexts
          : this.parent.get(t, r);
    }
  },
  kn = new x(""),
  xs = (() => {
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
        let { activatedRoute: n } = e,
          o = ge([n.queryParams, n.params, n.data])
            .pipe(
              ht(
                ([a, s, d], c) => (
                  (d = g(g(g({}, a), s), d)),
                  c === 0 ? y(d) : Promise.resolve(d)
                ),
              ),
            )
            .subscribe((a) => {
              if (
                !e.isActivated ||
                !e.activatedComponentRef ||
                e.activatedRoute !== n ||
                n.component === null
              ) {
                this.unsubscribeFromRouteData(e);
                return;
              }
              let s = Za(n.component);
              if (!s) {
                this.unsubscribeFromRouteData(e);
                return;
              }
              for (let { templateName: d } of s.inputs)
                e.activatedComponentRef.setInput(d, a[d]);
            });
        this.outletDataSubscriptions.set(e, o);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac }));
    let i = t;
    return i;
  })();
function kl(i, t, r) {
  let e = wi(i, t._root, r ? r._root : void 0);
  return new xn(e, t);
}
function wi(i, t, r) {
  if (r && i.shouldReuseRoute(t.value, r.value.snapshot)) {
    let e = r.value;
    e._futureSnapshot = t.value;
    let n = Rl(i, t, r);
    return new bt(e, n);
  } else {
    if (i.shouldAttach(t.value)) {
      let o = i.retrieve(t.value);
      if (o !== null) {
        let a = o.route;
        return (
          (a.value._futureSnapshot = t.value),
          (a.children = t.children.map((s) => wi(i, s))),
          a
        );
      }
    }
    let e = Tl(t.value),
      n = t.children.map((o) => wi(i, o));
    return new bt(e, n);
  }
}
function Rl(i, t, r) {
  return t.children.map((e) => {
    for (let n of r.children)
      if (i.shouldReuseRoute(e.value, n.value.snapshot)) return wi(i, e, n);
    return wi(i, e);
  });
}
function Tl(i) {
  return new ae(
    new ut(i.url),
    new ut(i.params),
    new ut(i.queryParams),
    new ut(i.fragment),
    new ut(i.data),
    i.outlet,
    i.component,
    i,
  );
}
var xi = class {
    constructor(t, r) {
      (this.redirectTo = t), (this.navigationBehaviorOptions = r);
    }
  },
  Gs = "ngNavigationCancelingError";
function En(i, t) {
  let { redirectTo: r, navigationBehaviorOptions: e } = oe(t)
      ? { redirectTo: t, navigationBehaviorOptions: void 0 }
      : t,
    n = Ws(!1, _t.Redirect);
  return (n.url = r), (n.navigationBehaviorOptions = e), n;
}
function Ws(i, t) {
  let r = new Error(`NavigationCancelingError: ${i || ""}`);
  return (r[Gs] = !0), (r.cancellationCode = t), r;
}
function Fl(i) {
  return qs(i) && oe(i.url);
}
function qs(i) {
  return !!i && i[Gs];
}
var Ol = (i, t, r, e) =>
    A(
      (n) => (
        new bo(t, n.targetRouterState, n.currentRouterState, r, e).activate(i),
        n
      ),
    ),
  bo = class {
    constructor(t, r, e, n, o) {
      (this.routeReuseStrategy = t),
        (this.futureState = r),
        (this.currState = e),
        (this.forwardEvent = n),
        (this.inputBindingEnabled = o);
    }
    activate(t) {
      let r = this.futureState._root,
        e = this.currState ? this.currState._root : null;
      this.deactivateChildRoutes(r, e, t),
        Zr(this.futureState.root),
        this.activateChildRoutes(r, e, t);
    }
    deactivateChildRoutes(t, r, e) {
      let n = De(r);
      t.children.forEach((o) => {
        let a = o.value.outlet;
        this.deactivateRoutes(o, n[a], e), delete n[a];
      }),
        Object.values(n).forEach((o) => {
          this.deactivateRouteAndItsChildren(o, e);
        });
    }
    deactivateRoutes(t, r, e) {
      let n = t.value,
        o = r ? r.value : null;
      if (n === o)
        if (n.component) {
          let a = e.getContext(n.outlet);
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
        n = e && t.value.component ? e.children : r,
        o = De(t);
      for (let a of Object.values(o)) this.deactivateRouteAndItsChildren(a, n);
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
        n = e && t.value.component ? e.children : r,
        o = De(t);
      for (let a of Object.values(o)) this.deactivateRouteAndItsChildren(a, n);
      e &&
        (e.outlet && (e.outlet.deactivate(), e.children.onOutletDeactivated()),
        (e.attachRef = null),
        (e.route = null));
    }
    activateChildRoutes(t, r, e) {
      let n = De(r);
      t.children.forEach((o) => {
        this.activateRoutes(o, n[o.value.outlet], e),
          this.forwardEvent(new ho(o.value.snapshot));
      }),
        t.children.length && this.forwardEvent(new lo(t.value.snapshot));
    }
    activateRoutes(t, r, e) {
      let n = t.value,
        o = r ? r.value : null;
      if ((Zr(n), n === o))
        if (n.component) {
          let a = e.getOrCreateContext(n.outlet);
          this.activateChildRoutes(t, r, a.children);
        } else this.activateChildRoutes(t, r, e);
      else if (n.component) {
        let a = e.getOrCreateContext(n.outlet);
        if (this.routeReuseStrategy.shouldAttach(n.snapshot)) {
          let s = this.routeReuseStrategy.retrieve(n.snapshot);
          this.routeReuseStrategy.store(n.snapshot, null),
            a.children.onOutletReAttached(s.contexts),
            (a.attachRef = s.componentRef),
            (a.route = s.route.value),
            a.outlet && a.outlet.attach(s.componentRef, s.route.value),
            Zr(s.route.value),
            this.activateChildRoutes(t, null, a.children);
        } else
          (a.attachRef = null),
            (a.route = n),
            a.outlet && a.outlet.activateWith(n, a.injector),
            this.activateChildRoutes(t, null, a.children);
      } else this.activateChildRoutes(t, null, e);
    }
  },
  Sn = class {
    constructor(t) {
      (this.path = t), (this.route = this.path[this.path.length - 1]);
    }
  },
  ke = class {
    constructor(t, r) {
      (this.component = t), (this.route = r);
    }
  };
function Nl(i, t, r) {
  let e = i._root,
    n = t ? t._root : null;
  return mi(e, n, r, [e.value]);
}
function Pl(i) {
  let t = i.routeConfig ? i.routeConfig.canActivateChild : null;
  return !t || t.length === 0 ? null : { node: i, guards: t };
}
function Pe(i, t) {
  let r = Symbol(),
    e = t.get(i, r);
  return e === r ? (typeof i == "function" && !Da(i) ? i : t.get(i)) : e;
}
function mi(
  i,
  t,
  r,
  e,
  n = { canDeactivateChecks: [], canActivateChecks: [] },
) {
  let o = De(t);
  return (
    i.children.forEach((a) => {
      Ll(a, o[a.value.outlet], r, e.concat([a.value]), n),
        delete o[a.value.outlet];
    }),
    Object.entries(o).forEach(([a, s]) => vi(s, r.getContext(a), n)),
    n
  );
}
function Ll(
  i,
  t,
  r,
  e,
  n = { canDeactivateChecks: [], canActivateChecks: [] },
) {
  let o = i.value,
    a = t ? t.value : null,
    s = r ? r.getContext(i.value.outlet) : null;
  if (a && o.routeConfig === a.routeConfig) {
    let d = jl(a, o, o.routeConfig.runGuardsAndResolvers);
    d
      ? n.canActivateChecks.push(new Sn(e))
      : ((o.data = a.data), (o._resolvedData = a._resolvedData)),
      o.component ? mi(i, t, s ? s.children : null, e, n) : mi(i, t, r, e, n),
      d &&
        s &&
        s.outlet &&
        s.outlet.isActivated &&
        n.canDeactivateChecks.push(new ke(s.outlet.component, a));
  } else
    a && vi(t, s, n),
      n.canActivateChecks.push(new Sn(e)),
      o.component
        ? mi(i, null, s ? s.children : null, e, n)
        : mi(i, null, r, e, n);
  return n;
}
function jl(i, t, r) {
  if (typeof r == "function") return r(i, t);
  switch (r) {
    case "pathParamsChange":
      return !re(i.url, t.url);
    case "pathParamsOrQueryParamsChange":
      return !re(i.url, t.url) || !Rt(i.queryParams, t.queryParams);
    case "always":
      return !0;
    case "paramsOrQueryParamsChange":
      return !go(i, t) || !Rt(i.queryParams, t.queryParams);
    case "paramsChange":
    default:
      return !go(i, t);
  }
}
function vi(i, t, r) {
  let e = De(i),
    n = i.value;
  Object.entries(e).forEach(([o, a]) => {
    n.component
      ? t
        ? vi(a, t.children.getContext(o), r)
        : vi(a, null, r)
      : vi(a, t, r);
  }),
    n.component
      ? t && t.outlet && t.outlet.isActivated
        ? r.canDeactivateChecks.push(new ke(t.outlet.component, n))
        : r.canDeactivateChecks.push(new ke(null, n))
      : r.canDeactivateChecks.push(new ke(null, n));
}
function Ai(i) {
  return typeof i == "function";
}
function Vl(i) {
  return typeof i == "boolean";
}
function zl(i) {
  return i && Ai(i.canLoad);
}
function Bl(i) {
  return i && Ai(i.canActivate);
}
function Ul(i) {
  return i && Ai(i.canActivateChild);
}
function Hl(i) {
  return i && Ai(i.canDeactivate);
}
function $l(i) {
  return i && Ai(i.canMatch);
}
function Qs(i) {
  return i instanceof Ca || i?.name === "EmptyError";
}
var hn = Symbol("INITIAL_VALUE");
function Ne() {
  return ht((i) =>
    ge(i.map((t) => t.pipe(Ct(1), yt(hn)))).pipe(
      A((t) => {
        for (let r of t)
          if (r !== !0) {
            if (r === hn) return hn;
            if (r === !1 || Gl(r)) return r;
          }
        return !0;
      }),
      it((t) => t !== hn),
      Ct(1),
    ),
  );
}
function Gl(i) {
  return oe(i) || i instanceof xi;
}
function Wl(i, t) {
  return pt((r) => {
    let {
      targetSnapshot: e,
      currentSnapshot: n,
      guards: { canActivateChecks: o, canDeactivateChecks: a },
    } = r;
    return a.length === 0 && o.length === 0
      ? y(U(g({}, r), { guardsResult: !0 }))
      : ql(a, e, n, i).pipe(
          pt((s) => (s && Vl(s) ? Ql(e, o, i, t) : y(s))),
          A((s) => U(g({}, r), { guardsResult: s })),
        );
  });
}
function ql(i, t, r, e) {
  return st(i).pipe(
    pt((n) => Jl(n.component, n.route, r, t, e)),
    $t((n) => n !== !0, !0),
  );
}
function Ql(i, t, r, e) {
  return st(t).pipe(
    _e((n) =>
      Wi(
        Kl(n.route.parent, e),
        Zl(n.route, e),
        Xl(i, n.path, r),
        Yl(i, n.route, r),
      ),
    ),
    $t((n) => n !== !0, !0),
  );
}
function Zl(i, t) {
  return i !== null && t && t(new uo(i)), y(!0);
}
function Kl(i, t) {
  return i !== null && t && t(new co(i)), y(!0);
}
function Yl(i, t, r) {
  let e = t.routeConfig ? t.routeConfig.canActivate : null;
  if (!e || e.length === 0) return y(!0);
  let n = e.map((o) =>
    vr(() => {
      let a = Di(t) ?? r,
        s = Pe(o, a),
        d = Bl(s) ? s.canActivate(t, i) : At(a, () => s(t, i));
      return Qt(d).pipe($t());
    }),
  );
  return y(n).pipe(Ne());
}
function Xl(i, t, r) {
  let e = t[t.length - 1],
    o = t
      .slice(0, t.length - 1)
      .reverse()
      .map((a) => Pl(a))
      .filter((a) => a !== null)
      .map((a) =>
        vr(() => {
          let s = a.guards.map((d) => {
            let c = Di(a.node) ?? r,
              m = Pe(d, c),
              f = Ul(m) ? m.canActivateChild(e, i) : At(c, () => m(e, i));
            return Qt(f).pipe($t());
          });
          return y(s).pipe(Ne());
        }),
      );
  return y(o).pipe(Ne());
}
function Jl(i, t, r, e, n) {
  let o = t && t.routeConfig ? t.routeConfig.canDeactivate : null;
  if (!o || o.length === 0) return y(!0);
  let a = o.map((s) => {
    let d = Di(t) ?? n,
      c = Pe(s, d),
      m = Hl(c) ? c.canDeactivate(i, t, r, e) : At(d, () => c(i, t, r, e));
    return Qt(m).pipe($t());
  });
  return y(a).pipe(Ne());
}
function tu(i, t, r, e) {
  let n = t.canLoad;
  if (n === void 0 || n.length === 0) return y(!0);
  let o = n.map((a) => {
    let s = Pe(a, i),
      d = zl(s) ? s.canLoad(t, r) : At(i, () => s(t, r));
    return Qt(d);
  });
  return y(o).pipe(Ne(), Zs(e));
}
function Zs(i) {
  return xa(
    nt((t) => {
      if (typeof t != "boolean") throw En(i, t);
    }),
    A((t) => t === !0),
  );
}
function eu(i, t, r, e) {
  let n = t.canMatch;
  if (!n || n.length === 0) return y(!0);
  let o = n.map((a) => {
    let s = Pe(a, i),
      d = $l(s) ? s.canMatch(t, r) : At(i, () => s(t, r));
    return Qt(d);
  });
  return y(o).pipe(Ne(), Zs(e));
}
var Ci = class {
    constructor(t) {
      this.segmentGroup = t || null;
    }
  },
  Ii = class extends Error {
    constructor(t) {
      super(), (this.urlTree = t);
    }
  };
function Se(i) {
  return Qe(new Ci(i));
}
function iu(i) {
  return Qe(new G(4e3, !1));
}
function nu(i) {
  return Qe(Ws(!1, _t.GuardRejected));
}
var _o = class {
    constructor(t, r) {
      (this.urlSerializer = t), (this.urlTree = r);
    }
    lineralizeSegments(t, r) {
      let e = [],
        n = r.root;
      for (;;) {
        if (((e = e.concat(n.segments)), n.numberOfChildren === 0)) return y(e);
        if (n.numberOfChildren > 1 || !n.children[E])
          return iu(`${t.redirectTo}`);
        n = n.children[E];
      }
    }
    applyRedirectCommands(t, r, e, n, o) {
      if (typeof r != "string") {
        let s = r,
          {
            queryParams: d,
            fragment: c,
            routeConfig: m,
            url: f,
            outlet: _,
            params: O,
            data: tt,
            title: ot,
          } = n,
          at = At(o, () =>
            s({
              params: O,
              data: tt,
              queryParams: d,
              fragment: c,
              routeConfig: m,
              url: f,
              outlet: _,
              title: ot,
            }),
          );
        if (at instanceof Lt) throw new Ii(at);
        r = at;
      }
      let a = this.applyRedirectCreateUrlTree(
        r,
        this.urlSerializer.parse(r),
        t,
        e,
      );
      if (r[0] === "/") throw new Ii(a);
      return a;
    }
    applyRedirectCreateUrlTree(t, r, e, n) {
      let o = this.createSegmentGroup(t, r.root, e, n);
      return new Lt(
        o,
        this.createQueryParams(r.queryParams, this.urlTree.queryParams),
        r.fragment,
      );
    }
    createQueryParams(t, r) {
      let e = {};
      return (
        Object.entries(t).forEach(([n, o]) => {
          if (typeof o == "string" && o[0] === ":") {
            let s = o.substring(1);
            e[n] = r[s];
          } else e[n] = o;
        }),
        e
      );
    }
    createSegmentGroup(t, r, e, n) {
      let o = this.createSegments(t, r.segments, e, n),
        a = {};
      return (
        Object.entries(r.children).forEach(([s, d]) => {
          a[s] = this.createSegmentGroup(t, d, e, n);
        }),
        new N(o, a)
      );
    }
    createSegments(t, r, e, n) {
      return r.map((o) =>
        o.path[0] === ":"
          ? this.findPosParam(t, o, n)
          : this.findOrReturn(o, e),
      );
    }
    findPosParam(t, r, e) {
      let n = e[r.path.substring(1)];
      if (!n) throw new G(4001, !1);
      return n;
    }
    findOrReturn(t, r) {
      let e = 0;
      for (let n of r) {
        if (n.path === t.path) return r.splice(e), n;
        e++;
      }
      return t;
    }
  },
  yo = {
    matched: !1,
    consumedSegments: [],
    remainingSegments: [],
    parameters: {},
    positionalParamSegments: {},
  };
function ru(i, t, r, e, n) {
  let o = Ks(i, t, r);
  return o.matched
    ? ((e = Dl(t, e)),
      eu(e, t, r, n).pipe(A((a) => (a === !0 ? o : g({}, yo)))))
    : y(o);
}
function Ks(i, t, r) {
  if (t.path === "**") return ou(r);
  if (t.path === "")
    return t.pathMatch === "full" && (i.hasChildren() || r.length > 0)
      ? g({}, yo)
      : {
          matched: !0,
          consumedSegments: [],
          remainingSegments: r,
          parameters: {},
          positionalParamSegments: {},
        };
  let n = (t.matcher || el)(r, i, t);
  if (!n) return g({}, yo);
  let o = {};
  Object.entries(n.posParams ?? {}).forEach(([s, d]) => {
    o[s] = d.path;
  });
  let a =
    n.consumed.length > 0
      ? g(g({}, o), n.consumed[n.consumed.length - 1].parameters)
      : o;
  return {
    matched: !0,
    consumedSegments: n.consumed,
    remainingSegments: r.slice(n.consumed.length),
    parameters: a,
    positionalParamSegments: n.posParams ?? {},
  };
}
function ou(i) {
  return {
    matched: !0,
    parameters: i.length > 0 ? As(i).parameters : {},
    consumedSegments: i,
    remainingSegments: [],
    positionalParamSegments: {},
  };
}
function Cs(i, t, r, e) {
  return r.length > 0 && cu(i, r, e)
    ? {
        segmentGroup: new N(t, su(e, new N(r, i.children))),
        slicedSegments: [],
      }
    : r.length === 0 && du(i, r, e)
      ? {
          segmentGroup: new N(i.segments, au(i, r, e, i.children)),
          slicedSegments: r,
        }
      : { segmentGroup: new N(i.segments, i.children), slicedSegments: r };
}
function au(i, t, r, e) {
  let n = {};
  for (let o of r)
    if (Rn(i, t, o) && !e[St(o)]) {
      let a = new N([], {});
      n[St(o)] = a;
    }
  return g(g({}, e), n);
}
function su(i, t) {
  let r = {};
  r[E] = t;
  for (let e of i)
    if (e.path === "" && St(e) !== E) {
      let n = new N([], {});
      r[St(e)] = n;
    }
  return r;
}
function cu(i, t, r) {
  return r.some((e) => Rn(i, t, e) && St(e) !== E);
}
function du(i, t, r) {
  return r.some((e) => Rn(i, t, e));
}
function Rn(i, t, r) {
  return (i.hasChildren() || t.length > 0) && r.pathMatch === "full"
    ? !1
    : r.path === "";
}
function lu(i, t, r) {
  return t.length === 0 && !i.children[r];
}
var wo = class {};
function uu(i, t, r, e, n, o, a = "emptyOnly") {
  return new xo(i, t, r, e, n, a, o).recognize();
}
var hu = 31,
  xo = class {
    constructor(t, r, e, n, o, a, s) {
      (this.injector = t),
        (this.configLoader = r),
        (this.rootComponentType = e),
        (this.config = n),
        (this.urlTree = o),
        (this.paramsInheritanceStrategy = a),
        (this.urlSerializer = s),
        (this.applyRedirects = new _o(this.urlSerializer, this.urlTree)),
        (this.absoluteRedirectCount = 0),
        (this.allowRedirects = !0);
    }
    noMatchError(t) {
      return new G(4002, `'${t.segmentGroup}'`);
    }
    recognize() {
      let t = Cs(this.urlTree.root, [], [], this.config).segmentGroup;
      return this.match(t).pipe(
        A(({ children: r, rootSnapshot: e }) => {
          let n = new bt(e, r),
            o = new In("", n),
            a = yl(e, [], this.urlTree.queryParams, this.urlTree.fragment);
          return (
            (a.queryParams = this.urlTree.queryParams),
            (o.url = this.urlSerializer.serialize(a)),
            { state: o, tree: a }
          );
        }),
      );
    }
    match(t) {
      let r = new Ae(
        [],
        Object.freeze({}),
        Object.freeze(g({}, this.urlTree.queryParams)),
        this.urlTree.fragment,
        Object.freeze({}),
        E,
        this.rootComponentType,
        null,
        {},
      );
      return this.processSegmentGroup(this.injector, this.config, t, E, r).pipe(
        A((e) => ({ children: e, rootSnapshot: r })),
        be((e) => {
          if (e instanceof Ii)
            return (this.urlTree = e.urlTree), this.match(e.urlTree.root);
          throw e instanceof Ci ? this.noMatchError(e) : e;
        }),
      );
    }
    processSegmentGroup(t, r, e, n, o) {
      return e.segments.length === 0 && e.hasChildren()
        ? this.processChildren(t, r, e, o)
        : this.processSegment(t, r, e, e.segments, n, !0, o).pipe(
            A((a) => (a instanceof bt ? [a] : [])),
          );
    }
    processChildren(t, r, e, n) {
      let o = [];
      for (let a of Object.keys(e.children))
        a === "primary" ? o.unshift(a) : o.push(a);
      return st(o).pipe(
        _e((a) => {
          let s = e.children[a],
            d = Ml(r, a);
          return this.processSegmentGroup(t, d, s, a, n);
        }),
        Sa((a, s) => (a.push(...s), a)),
        _r(null),
        Ea(),
        pt((a) => {
          if (a === null) return Se(e);
          let s = Ys(a);
          return mu(s), y(s);
        }),
      );
    }
    processSegment(t, r, e, n, o, a, s) {
      return st(r).pipe(
        _e((d) =>
          this.processSegmentAgainstRoute(
            d._injector ?? t,
            r,
            d,
            e,
            n,
            o,
            a,
            s,
          ).pipe(
            be((c) => {
              if (c instanceof Ci) return y(null);
              throw c;
            }),
          ),
        ),
        $t((d) => !!d),
        be((d) => {
          if (Qs(d)) return lu(e, n, o) ? y(new wo()) : Se(e);
          throw d;
        }),
      );
    }
    processSegmentAgainstRoute(t, r, e, n, o, a, s, d) {
      return St(e) !== a && (a === E || !Rn(n, o, e))
        ? Se(n)
        : e.redirectTo === void 0
          ? this.matchSegmentAgainstRoute(t, n, e, o, a, d)
          : this.allowRedirects && s
            ? this.expandSegmentAgainstRouteUsingRedirect(t, n, r, e, o, a, d)
            : Se(n);
    }
    expandSegmentAgainstRouteUsingRedirect(t, r, e, n, o, a, s) {
      let {
        matched: d,
        parameters: c,
        consumedSegments: m,
        positionalParamSegments: f,
        remainingSegments: _,
      } = Ks(r, n, o);
      if (!d) return Se(r);
      typeof n.redirectTo == "string" &&
        n.redirectTo[0] === "/" &&
        (this.absoluteRedirectCount++,
        this.absoluteRedirectCount > hu && (this.allowRedirects = !1));
      let O = new Ae(
          o,
          c,
          Object.freeze(g({}, this.urlTree.queryParams)),
          this.urlTree.fragment,
          Is(n),
          St(n),
          n.component ?? n._loadedComponent ?? null,
          n,
          Es(n),
        ),
        tt = Cn(O, s, this.paramsInheritanceStrategy);
      (O.params = Object.freeze(tt.params)), (O.data = Object.freeze(tt.data));
      let ot = this.applyRedirects.applyRedirectCommands(
        m,
        n.redirectTo,
        f,
        O,
        t,
      );
      return this.applyRedirects
        .lineralizeSegments(n, ot)
        .pipe(pt((at) => this.processSegment(t, e, r, at.concat(_), a, !1, s)));
    }
    matchSegmentAgainstRoute(t, r, e, n, o, a) {
      let s = ru(r, e, n, t, this.urlSerializer);
      return (
        e.path === "**" && (r.children = {}),
        s.pipe(
          ht((d) =>
            d.matched
              ? ((t = e._injector ?? t),
                this.getChildConfig(t, e, n).pipe(
                  ht(({ routes: c }) => {
                    let m = e._loadedInjector ?? t,
                      {
                        parameters: f,
                        consumedSegments: _,
                        remainingSegments: O,
                      } = d,
                      tt = new Ae(
                        _,
                        f,
                        Object.freeze(g({}, this.urlTree.queryParams)),
                        this.urlTree.fragment,
                        Is(e),
                        St(e),
                        e.component ?? e._loadedComponent ?? null,
                        e,
                        Es(e),
                      ),
                      ot = Cn(tt, a, this.paramsInheritanceStrategy);
                    (tt.params = Object.freeze(ot.params)),
                      (tt.data = Object.freeze(ot.data));
                    let { segmentGroup: at, slicedSegments: Ut } = Cs(
                      r,
                      _,
                      O,
                      c,
                    );
                    if (Ut.length === 0 && at.hasChildren())
                      return this.processChildren(m, c, at, tt).pipe(
                        A((Xt) => new bt(tt, Xt)),
                      );
                    if (c.length === 0 && Ut.length === 0)
                      return y(new bt(tt, []));
                    let Yt = St(e) === o;
                    return this.processSegment(
                      m,
                      c,
                      at,
                      Ut,
                      Yt ? E : o,
                      !0,
                      tt,
                    ).pipe(A((Xt) => new bt(tt, Xt instanceof bt ? [Xt] : [])));
                  }),
                ))
              : Se(r),
          ),
        )
      );
    }
    getChildConfig(t, r, e) {
      return r.children
        ? y({ routes: r.children, injector: t })
        : r.loadChildren
          ? r._loadedRoutes !== void 0
            ? y({ routes: r._loadedRoutes, injector: r._loadedInjector })
            : tu(t, r, e, this.urlSerializer).pipe(
                pt((n) =>
                  n
                    ? this.configLoader.loadChildren(t, r).pipe(
                        nt((o) => {
                          (r._loadedRoutes = o.routes),
                            (r._loadedInjector = o.injector);
                        }),
                      )
                    : nu(r),
                ),
              )
          : y({ routes: [], injector: t });
    }
  };
function mu(i) {
  i.sort((t, r) =>
    t.value.outlet === E
      ? -1
      : r.value.outlet === E
        ? 1
        : t.value.outlet.localeCompare(r.value.outlet),
  );
}
function pu(i) {
  let t = i.value.routeConfig;
  return t && t.path === "";
}
function Ys(i) {
  let t = [],
    r = new Set();
  for (let e of i) {
    if (!pu(e)) {
      t.push(e);
      continue;
    }
    let n = t.find((o) => e.value.routeConfig === o.value.routeConfig);
    n !== void 0 ? (n.children.push(...e.children), r.add(n)) : t.push(e);
  }
  for (let e of r) {
    let n = Ys(e.children);
    t.push(new bt(e.value, n));
  }
  return t.filter((e) => !r.has(e));
}
function Is(i) {
  return i.data || {};
}
function Es(i) {
  return i.resolve || {};
}
function fu(i, t, r, e, n, o) {
  return pt((a) =>
    uu(i, t, r, e, a.extractedUrl, n, o).pipe(
      A(({ state: s, tree: d }) =>
        U(g({}, a), { targetSnapshot: s, urlAfterRedirects: d }),
      ),
    ),
  );
}
function gu(i, t) {
  return pt((r) => {
    let {
      targetSnapshot: e,
      guards: { canActivateChecks: n },
    } = r;
    if (!n.length) return y(r);
    let o = new Set(n.map((d) => d.route)),
      a = new Set();
    for (let d of o) if (!a.has(d)) for (let c of Xs(d)) a.add(c);
    let s = 0;
    return st(a).pipe(
      _e((d) =>
        o.has(d)
          ? vu(d, e, i, t)
          : ((d.data = Cn(d, d.parent, i).resolve), y(void 0)),
      ),
      nt(() => s++),
      yr(1),
      pt((d) => (s === a.size ? y(r) : Ht)),
    );
  });
}
function Xs(i) {
  let t = i.children.map((r) => Xs(r)).flat();
  return [i, ...t];
}
function vu(i, t, r, e) {
  let n = i.routeConfig,
    o = i._resolve;
  return (
    n?.title !== void 0 && !$s(n) && (o[Ei] = n.title),
    bu(o, i, t, e).pipe(
      A(
        (a) => (
          (i._resolvedData = a), (i.data = Cn(i, i.parent, r).resolve), null
        ),
      ),
    )
  );
}
function bu(i, t, r, e) {
  let n = Xr(i);
  if (n.length === 0) return y({});
  let o = {};
  return st(n).pipe(
    pt((a) =>
      _u(i[a], t, r, e).pipe(
        $t(),
        nt((s) => {
          if (s instanceof xi) throw En(new Te(), s);
          o[a] = s;
        }),
      ),
    ),
    yr(1),
    Ye(o),
    be((a) => (Qs(a) ? Ht : Qe(a))),
  );
}
function _u(i, t, r, e) {
  let n = Di(t) ?? e,
    o = Pe(i, n),
    a = o.resolve ? o.resolve(t, r) : At(n, () => o(t, r));
  return Qt(a);
}
function Kr(i) {
  return ht((t) => {
    let r = i(t);
    return r ? st(r).pipe(A(() => t)) : y(t);
  });
}
var Js = (() => {
    let t = class t {
      buildTitle(e) {
        let n,
          o = e.root;
        for (; o !== void 0; )
          (n = this.getResolvedTitleForRoute(o) ?? n),
            (o = o.children.find((a) => a.outlet === E));
        return n;
      }
      getResolvedTitleForRoute(e) {
        return e.data[Ei];
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵprov = w({ token: t, factory: () => v(yu), providedIn: "root" }));
    let i = t;
    return i;
  })(),
  yu = (() => {
    let t = class t extends Js {
      constructor(e) {
        super(), (this.title = e);
      }
      updateTitle(e) {
        let n = this.buildTitle(e);
        n !== void 0 && this.title.setTitle(n);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(b(gs));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })(),
  ki = new x("", { providedIn: "root", factory: () => ({}) }),
  wu = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [["ng-component"]],
        standalone: !0,
        features: [V],
        decls: 1,
        vars: 0,
        template: function (n, o) {
          n & 1 && I(0, "router-outlet");
        },
        dependencies: [Eo],
        encapsulation: 2,
      }));
    let i = t;
    return i;
  })();
function So(i) {
  let t = i.children && i.children.map(So),
    r = t ? U(g({}, i), { children: t }) : g({}, i);
  return (
    !r.component &&
      !r.loadComponent &&
      (t || r.loadChildren) &&
      r.outlet &&
      r.outlet !== E &&
      (r.component = wu),
    r
  );
}
var Dn = new x(""),
  Do = (() => {
    let t = class t {
      constructor() {
        (this.componentLoaders = new WeakMap()),
          (this.childrenLoaders = new WeakMap()),
          (this.compiler = v(on));
      }
      loadComponent(e) {
        if (this.componentLoaders.get(e)) return this.componentLoaders.get(e);
        if (e._loadedComponent) return y(e._loadedComponent);
        this.onLoadStartListener && this.onLoadStartListener(e);
        let n = Qt(e.loadComponent()).pipe(
            A(tc),
            nt((a) => {
              this.onLoadEndListener && this.onLoadEndListener(e),
                (e._loadedComponent = a);
            }),
            qi(() => {
              this.componentLoaders.delete(e);
            }),
          ),
          o = new gr(n, () => new M()).pipe(fr());
        return this.componentLoaders.set(e, o), o;
      }
      loadChildren(e, n) {
        if (this.childrenLoaders.get(n)) return this.childrenLoaders.get(n);
        if (n._loadedRoutes)
          return y({ routes: n._loadedRoutes, injector: n._loadedInjector });
        this.onLoadStartListener && this.onLoadStartListener(n);
        let a = xu(n, this.compiler, e, this.onLoadEndListener).pipe(
            qi(() => {
              this.childrenLoaders.delete(n);
            }),
          ),
          s = new gr(a, () => new M()).pipe(fr());
        return this.childrenLoaders.set(n, s), s;
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
function xu(i, t, r, e) {
  return Qt(i.loadChildren()).pipe(
    A(tc),
    pt((n) =>
      n instanceof La || Array.isArray(n) ? y(n) : st(t.compileModuleAsync(n)),
    ),
    A((n) => {
      e && e(i);
      let o,
        a,
        s = !1;
      return (
        Array.isArray(n)
          ? ((a = n), (s = !0))
          : ((o = n.create(r).injector),
            (a = o.get(Dn, [], { optional: !0, self: !0 }).flat())),
        { routes: a.map(So), injector: o }
      );
    }),
  );
}
function Cu(i) {
  return i && typeof i == "object" && "default" in i;
}
function tc(i) {
  return Cu(i) ? i.default : i;
}
var Mo = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵprov = w({ token: t, factory: () => v(Iu), providedIn: "root" }));
    let i = t;
    return i;
  })(),
  Iu = (() => {
    let t = class t {
      shouldProcessUrl(e) {
        return !0;
      }
      extract(e) {
        return e;
      }
      merge(e, n) {
        return e;
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })(),
  ec = new x(""),
  ic = new x("");
function Eu(i, t, r) {
  let e = i.get(ic),
    n = i.get(R);
  return i.get(D).runOutsideAngular(() => {
    if (!n.startViewTransition || e.skipNextTransition)
      return (e.skipNextTransition = !1), new Promise((c) => setTimeout(c));
    let o,
      a = new Promise((c) => {
        o = c;
      }),
      s = n.startViewTransition(() => (o(), Su(i))),
      { onViewTransitionCreated: d } = e;
    return d && At(i, () => d({ transition: s, from: t, to: r })), a;
  });
}
function Su(i) {
  return new Promise((t) => {
    kt({ read: () => setTimeout(t) }, { injector: i });
  });
}
var Du = new x(""),
  Ao = (() => {
    let t = class t {
      get hasRequestedNavigation() {
        return this.navigationId !== 0;
      }
      constructor() {
        (this.currentNavigation = null),
          (this.currentTransition = null),
          (this.lastSuccessfulNavigation = null),
          (this.events = new M()),
          (this.transitionAbortSubject = new M()),
          (this.configLoader = v(Do)),
          (this.environmentInjector = v(ti)),
          (this.urlSerializer = v(Si)),
          (this.rootContexts = v(Mi)),
          (this.location = v(si)),
          (this.inputBindingEnabled = v(kn, { optional: !0 }) !== null),
          (this.titleStrategy = v(Js)),
          (this.options = v(ki, { optional: !0 }) || {}),
          (this.paramsInheritanceStrategy =
            this.options.paramsInheritanceStrategy || "emptyOnly"),
          (this.urlHandlingStrategy = v(Mo)),
          (this.createViewTransition = v(ec, { optional: !0 })),
          (this.navigationErrorHandler = v(Du, { optional: !0 })),
          (this.navigationId = 0),
          (this.afterPreactivation = () => y(void 0)),
          (this.rootComponentType = null);
        let e = (o) => this.events.next(new ao(o)),
          n = (o) => this.events.next(new so(o));
        (this.configLoader.onLoadEndListener = n),
          (this.configLoader.onLoadStartListener = e);
      }
      complete() {
        this.transitions?.complete();
      }
      handleNavigationRequest(e) {
        let n = ++this.navigationId;
        this.transitions?.next(
          U(g(g({}, this.transitions.value), e), { id: n }),
        );
      }
      setupNavigations(e, n, o) {
        return (
          (this.transitions = new ut({
            id: 0,
            currentUrlTree: n,
            currentRawUrl: n,
            extractedUrl: this.urlHandlingStrategy.extract(n),
            urlAfterRedirects: this.urlHandlingStrategy.extract(n),
            rawUrl: n,
            extras: {},
            resolve: () => {},
            reject: () => {},
            promise: Promise.resolve(!0),
            source: gi,
            restoredState: null,
            currentSnapshot: o.snapshot,
            targetSnapshot: null,
            currentRouterState: o,
            targetRouterState: null,
            guards: { canActivateChecks: [], canDeactivateChecks: [] },
            guardsResult: null,
          })),
          this.transitions.pipe(
            it((a) => a.id !== 0),
            A((a) =>
              U(g({}, a), {
                extractedUrl: this.urlHandlingStrategy.extract(a.rawUrl),
              }),
            ),
            ht((a) => {
              let s = !1,
                d = !1;
              return y(a).pipe(
                ht((c) => {
                  if (this.navigationId > a.id)
                    return (
                      this.cancelNavigationTransition(
                        a,
                        "",
                        _t.SupersededByNewNavigation,
                      ),
                      Ht
                    );
                  (this.currentTransition = a),
                    (this.currentNavigation = {
                      id: c.id,
                      initialUrl: c.rawUrl,
                      extractedUrl: c.extractedUrl,
                      targetBrowserUrl:
                        typeof c.extras.browserUrl == "string"
                          ? this.urlSerializer.parse(c.extras.browserUrl)
                          : c.extras.browserUrl,
                      trigger: c.source,
                      extras: c.extras,
                      previousNavigation: this.lastSuccessfulNavigation
                        ? U(g({}, this.lastSuccessfulNavigation), {
                            previousNavigation: null,
                          })
                        : null,
                    });
                  let m =
                      !e.navigated ||
                      this.isUpdatingInternalState() ||
                      this.isUpdatedBrowserUrl(),
                    f = c.extras.onSameUrlNavigation ?? e.onSameUrlNavigation;
                  if (!m && f !== "reload") {
                    let _ = "";
                    return (
                      this.events.next(
                        new qt(
                          c.id,
                          this.urlSerializer.serialize(c.rawUrl),
                          _,
                          bn.IgnoredSameUrlNavigation,
                        ),
                      ),
                      c.resolve(!1),
                      Ht
                    );
                  }
                  if (this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))
                    return y(c).pipe(
                      ht((_) => {
                        let O = this.transitions?.getValue();
                        return (
                          this.events.next(
                            new Fe(
                              _.id,
                              this.urlSerializer.serialize(_.extractedUrl),
                              _.source,
                              _.restoredState,
                            ),
                          ),
                          O !== this.transitions?.getValue()
                            ? Ht
                            : Promise.resolve(_)
                        );
                      }),
                      fu(
                        this.environmentInjector,
                        this.configLoader,
                        this.rootComponentType,
                        e.config,
                        this.urlSerializer,
                        this.paramsInheritanceStrategy,
                      ),
                      nt((_) => {
                        (a.targetSnapshot = _.targetSnapshot),
                          (a.urlAfterRedirects = _.urlAfterRedirects),
                          (this.currentNavigation = U(
                            g({}, this.currentNavigation),
                            { finalUrl: _.urlAfterRedirects },
                          ));
                        let O = new _n(
                          _.id,
                          this.urlSerializer.serialize(_.extractedUrl),
                          this.urlSerializer.serialize(_.urlAfterRedirects),
                          _.targetSnapshot,
                        );
                        this.events.next(O);
                      }),
                    );
                  if (
                    m &&
                    this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)
                  ) {
                    let {
                        id: _,
                        extractedUrl: O,
                        source: tt,
                        restoredState: ot,
                        extras: at,
                      } = c,
                      Ut = new Fe(_, this.urlSerializer.serialize(O), tt, ot);
                    this.events.next(Ut);
                    let Yt = Us(this.rootComponentType).snapshot;
                    return (
                      (this.currentTransition = a =
                        U(g({}, c), {
                          targetSnapshot: Yt,
                          urlAfterRedirects: O,
                          extras: U(g({}, at), {
                            skipLocationChange: !1,
                            replaceUrl: !1,
                          }),
                        })),
                      (this.currentNavigation.finalUrl = O),
                      y(a)
                    );
                  } else {
                    let _ = "";
                    return (
                      this.events.next(
                        new qt(
                          c.id,
                          this.urlSerializer.serialize(c.extractedUrl),
                          _,
                          bn.IgnoredByUrlHandlingStrategy,
                        ),
                      ),
                      c.resolve(!1),
                      Ht
                    );
                  }
                }),
                nt((c) => {
                  let m = new io(
                    c.id,
                    this.urlSerializer.serialize(c.extractedUrl),
                    this.urlSerializer.serialize(c.urlAfterRedirects),
                    c.targetSnapshot,
                  );
                  this.events.next(m);
                }),
                A(
                  (c) => (
                    (this.currentTransition = a =
                      U(g({}, c), {
                        guards: Nl(
                          c.targetSnapshot,
                          c.currentSnapshot,
                          this.rootContexts,
                        ),
                      })),
                    a
                  ),
                ),
                Wl(this.environmentInjector, (c) => this.events.next(c)),
                nt((c) => {
                  if (
                    ((a.guardsResult = c.guardsResult),
                    c.guardsResult && typeof c.guardsResult != "boolean")
                  )
                    throw En(this.urlSerializer, c.guardsResult);
                  let m = new no(
                    c.id,
                    this.urlSerializer.serialize(c.extractedUrl),
                    this.urlSerializer.serialize(c.urlAfterRedirects),
                    c.targetSnapshot,
                    !!c.guardsResult,
                  );
                  this.events.next(m);
                }),
                it((c) =>
                  c.guardsResult
                    ? !0
                    : (this.cancelNavigationTransition(c, "", _t.GuardRejected),
                      !1),
                ),
                Kr((c) => {
                  if (c.guards.canActivateChecks.length)
                    return y(c).pipe(
                      nt((m) => {
                        let f = new ro(
                          m.id,
                          this.urlSerializer.serialize(m.extractedUrl),
                          this.urlSerializer.serialize(m.urlAfterRedirects),
                          m.targetSnapshot,
                        );
                        this.events.next(f);
                      }),
                      ht((m) => {
                        let f = !1;
                        return y(m).pipe(
                          gu(
                            this.paramsInheritanceStrategy,
                            this.environmentInjector,
                          ),
                          nt({
                            next: () => (f = !0),
                            complete: () => {
                              f ||
                                this.cancelNavigationTransition(
                                  m,
                                  "",
                                  _t.NoDataFromResolver,
                                );
                            },
                          }),
                        );
                      }),
                      nt((m) => {
                        let f = new oo(
                          m.id,
                          this.urlSerializer.serialize(m.extractedUrl),
                          this.urlSerializer.serialize(m.urlAfterRedirects),
                          m.targetSnapshot,
                        );
                        this.events.next(f);
                      }),
                    );
                }),
                Kr((c) => {
                  let m = (f) => {
                    let _ = [];
                    f.routeConfig?.loadComponent &&
                      !f.routeConfig._loadedComponent &&
                      _.push(
                        this.configLoader.loadComponent(f.routeConfig).pipe(
                          nt((O) => {
                            f.component = O;
                          }),
                          A(() => {}),
                        ),
                      );
                    for (let O of f.children) _.push(...m(O));
                    return _;
                  };
                  return ge(m(c.targetSnapshot.root)).pipe(_r(null), Ct(1));
                }),
                Kr(() => this.afterPreactivation()),
                ht(() => {
                  let { currentSnapshot: c, targetSnapshot: m } = a,
                    f = this.createViewTransition?.(
                      this.environmentInjector,
                      c.root,
                      m.root,
                    );
                  return f ? st(f).pipe(A(() => a)) : y(a);
                }),
                A((c) => {
                  let m = kl(
                    e.routeReuseStrategy,
                    c.targetSnapshot,
                    c.currentRouterState,
                  );
                  return (
                    (this.currentTransition = a =
                      U(g({}, c), { targetRouterState: m })),
                    (this.currentNavigation.targetRouterState = m),
                    a
                  );
                }),
                nt(() => {
                  this.events.next(new yi());
                }),
                Ol(
                  this.rootContexts,
                  e.routeReuseStrategy,
                  (c) => this.events.next(c),
                  this.inputBindingEnabled,
                ),
                Ct(1),
                nt({
                  next: (c) => {
                    (s = !0),
                      (this.lastSuccessfulNavigation = this.currentNavigation),
                      this.events.next(
                        new Dt(
                          c.id,
                          this.urlSerializer.serialize(c.extractedUrl),
                          this.urlSerializer.serialize(c.urlAfterRedirects),
                        ),
                      ),
                      this.titleStrategy?.updateTitle(
                        c.targetRouterState.snapshot,
                      ),
                      c.resolve(!0);
                  },
                  complete: () => {
                    s = !0;
                  },
                }),
                z(
                  this.transitionAbortSubject.pipe(
                    nt((c) => {
                      throw c;
                    }),
                  ),
                ),
                qi(() => {
                  !s &&
                    !d &&
                    this.cancelNavigationTransition(
                      a,
                      "",
                      _t.SupersededByNewNavigation,
                    ),
                    this.currentTransition?.id === a.id &&
                      ((this.currentNavigation = null),
                      (this.currentTransition = null));
                }),
                be((c) => {
                  if (((d = !0), qs(c)))
                    this.events.next(
                      new Pt(
                        a.id,
                        this.urlSerializer.serialize(a.extractedUrl),
                        c.message,
                        c.cancellationCode,
                      ),
                    ),
                      Fl(c)
                        ? this.events.next(
                            new Oe(c.url, c.navigationBehaviorOptions),
                          )
                        : a.resolve(!1);
                  else {
                    let m = new _i(
                      a.id,
                      this.urlSerializer.serialize(a.extractedUrl),
                      c,
                      a.targetSnapshot ?? void 0,
                    );
                    try {
                      let f = At(this.environmentInjector, () =>
                        this.navigationErrorHandler?.(m),
                      );
                      if (f instanceof xi) {
                        let { message: _, cancellationCode: O } = En(
                          this.urlSerializer,
                          f,
                        );
                        this.events.next(
                          new Pt(
                            a.id,
                            this.urlSerializer.serialize(a.extractedUrl),
                            _,
                            O,
                          ),
                        ),
                          this.events.next(
                            new Oe(f.redirectTo, f.navigationBehaviorOptions),
                          );
                      } else {
                        this.events.next(m);
                        let _ = e.errorHandler(c);
                        a.resolve(!!_);
                      }
                    } catch (f) {
                      this.options.resolveNavigationPromiseOnError
                        ? a.resolve(!1)
                        : a.reject(f);
                    }
                  }
                  return Ht;
                }),
              );
            }),
          )
        );
      }
      cancelNavigationTransition(e, n, o) {
        let a = new Pt(
          e.id,
          this.urlSerializer.serialize(e.extractedUrl),
          n,
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
          n =
            this.currentNavigation?.targetBrowserUrl ??
            this.currentNavigation?.extractedUrl;
        return (
          e.toString() !== n?.toString() &&
          !this.currentNavigation?.extras.skipLocationChange
        );
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
function Mu(i) {
  return i !== gi;
}
var Au = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵprov = w({ token: t, factory: () => v(ku), providedIn: "root" }));
    let i = t;
    return i;
  })(),
  Co = class {
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
  ku = (() => {
    let t = class t extends Co {};
    (t.ɵfac = (() => {
      let e;
      return function (o) {
        return (e || (e = xe(t)))(o || t);
      };
    })()),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })(),
  nc = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵprov = w({ token: t, factory: () => v(Ru), providedIn: "root" }));
    let i = t;
    return i;
  })(),
  Ru = (() => {
    let t = class t extends nc {
      constructor() {
        super(...arguments),
          (this.location = v(si)),
          (this.urlSerializer = v(Si)),
          (this.options = v(ki, { optional: !0 }) || {}),
          (this.canceledNavigationResolution =
            this.options.canceledNavigationResolution || "replace"),
          (this.urlHandlingStrategy = v(Mo)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.currentUrlTree = new Lt()),
          (this.rawUrlTree = this.currentUrlTree),
          (this.currentPageId = 0),
          (this.lastSuccessfulId = -1),
          (this.routerState = Us(null)),
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
        return this.location.subscribe((n) => {
          n.type === "popstate" && e(n.url, n.state);
        });
      }
      handleRouterEvent(e, n) {
        if (e instanceof Fe) this.stateMemento = this.createStateMemento();
        else if (e instanceof qt) this.rawUrlTree = n.initialUrl;
        else if (e instanceof _n) {
          if (
            this.urlUpdateStrategy === "eager" &&
            !n.extras.skipLocationChange
          ) {
            let o = this.urlHandlingStrategy.merge(n.finalUrl, n.initialUrl);
            this.setBrowserUrl(n.targetBrowserUrl ?? o, n);
          }
        } else
          e instanceof yi
            ? ((this.currentUrlTree = n.finalUrl),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                n.finalUrl,
                n.initialUrl,
              )),
              (this.routerState = n.targetRouterState),
              this.urlUpdateStrategy === "deferred" &&
                !n.extras.skipLocationChange &&
                this.setBrowserUrl(n.targetBrowserUrl ?? this.rawUrlTree, n))
            : e instanceof Pt &&
                (e.code === _t.GuardRejected ||
                  e.code === _t.NoDataFromResolver)
              ? this.restoreHistory(n)
              : e instanceof _i
                ? this.restoreHistory(n, !0)
                : e instanceof Dt &&
                  ((this.lastSuccessfulId = e.id),
                  (this.currentPageId = this.browserPageId));
      }
      setBrowserUrl(e, n) {
        let o = e instanceof Lt ? this.urlSerializer.serialize(e) : e;
        if (this.location.isCurrentPathEqualTo(o) || n.extras.replaceUrl) {
          let a = this.browserPageId,
            s = g(g({}, n.extras.state), this.generateNgRouterState(n.id, a));
          this.location.replaceState(o, "", s);
        } else {
          let a = g(
            g({}, n.extras.state),
            this.generateNgRouterState(n.id, this.browserPageId + 1),
          );
          this.location.go(o, "", a);
        }
      }
      restoreHistory(e, n = !1) {
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
            (n && this.resetState(e), this.resetUrlToCurrentUrlTree());
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
      generateNgRouterState(e, n) {
        return this.canceledNavigationResolution === "computed"
          ? { navigationId: e, ɵrouterPageId: n }
          : { navigationId: e };
      }
    };
    (t.ɵfac = (() => {
      let e;
      return function (o) {
        return (e || (e = xe(t)))(o || t);
      };
    })()),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })(),
  pi = (function (i) {
    return (
      (i[(i.COMPLETE = 0)] = "COMPLETE"),
      (i[(i.FAILED = 1)] = "FAILED"),
      (i[(i.REDIRECTING = 2)] = "REDIRECTING"),
      i
    );
  })(pi || {});
function rc(i, t) {
  i.events
    .pipe(
      it(
        (r) =>
          r instanceof Dt ||
          r instanceof Pt ||
          r instanceof _i ||
          r instanceof qt,
      ),
      A((r) =>
        r instanceof Dt || r instanceof qt
          ? pi.COMPLETE
          : (
                r instanceof Pt
                  ? r.code === _t.Redirect ||
                    r.code === _t.SupersededByNewNavigation
                  : !1
              )
            ? pi.REDIRECTING
            : pi.FAILED,
      ),
      it((r) => r !== pi.REDIRECTING),
      Ct(1),
    )
    .subscribe(() => {
      t();
    });
}
function Tu(i) {
  throw i;
}
var Fu = {
    paths: "exact",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "exact",
  },
  Ou = {
    paths: "subset",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "subset",
  },
  jt = (() => {
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
          (this.console = v(tn)),
          (this.stateManager = v(nc)),
          (this.options = v(ki, { optional: !0 }) || {}),
          (this.pendingTasks = v(ka)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.navigationTransitions = v(Ao)),
          (this.urlSerializer = v(Si)),
          (this.location = v(si)),
          (this.urlHandlingStrategy = v(Mo)),
          (this._events = new M()),
          (this.errorHandler = this.options.errorHandler || Tu),
          (this.navigated = !1),
          (this.routeReuseStrategy = v(Au)),
          (this.onSameUrlNavigation =
            this.options.onSameUrlNavigation || "ignore"),
          (this.config = v(Dn, { optional: !0 })?.flat() ?? []),
          (this.componentInputBindingEnabled = !!v(kn, { optional: !0 })),
          (this.eventsSubscription = new We()),
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
        let e = this.navigationTransitions.events.subscribe((n) => {
          try {
            let o = this.navigationTransitions.currentTransition,
              a = this.navigationTransitions.currentNavigation;
            if (o !== null && a !== null) {
              if (
                (this.stateManager.handleRouterEvent(n, a),
                n instanceof Pt &&
                  n.code !== _t.Redirect &&
                  n.code !== _t.SupersededByNewNavigation)
              )
                this.navigated = !0;
              else if (n instanceof Dt) this.navigated = !0;
              else if (n instanceof Oe) {
                let s = n.navigationBehaviorOptions,
                  d = this.urlHandlingStrategy.merge(n.url, o.currentRawUrl),
                  c = g(
                    {
                      browserUrl: o.extras.browserUrl,
                      info: o.extras.info,
                      skipLocationChange: o.extras.skipLocationChange,
                      replaceUrl:
                        o.extras.replaceUrl ||
                        this.urlUpdateStrategy === "eager" ||
                        Mu(o.source),
                    },
                    s,
                  );
                this.scheduleNavigation(d, gi, null, c, {
                  resolve: o.resolve,
                  reject: o.reject,
                  promise: o.promise,
                });
              }
            }
            Pu(n) && this._events.next(n);
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
              gi,
              this.stateManager.restoredState(),
            );
      }
      setUpLocationChangeListener() {
        this.nonRouterCurrentEntryChangeSubscription ??=
          this.stateManager.registerNonRouterCurrentEntryChangeListener(
            (e, n) => {
              setTimeout(() => {
                this.navigateToSyncWithBrowser(e, "popstate", n);
              }, 0);
            },
          );
      }
      navigateToSyncWithBrowser(e, n, o) {
        let a = { replaceUrl: !0 },
          s = o?.navigationId ? o : null;
        if (o) {
          let c = g({}, o);
          delete c.navigationId,
            delete c.ɵrouterPageId,
            Object.keys(c).length !== 0 && (a.state = c);
        }
        let d = this.parseUrl(e);
        this.scheduleNavigation(d, n, s, a);
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
        (this.config = e.map(So)), (this.navigated = !1);
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
      createUrlTree(e, n = {}) {
        let {
            relativeTo: o,
            queryParams: a,
            fragment: s,
            queryParamsHandling: d,
            preserveFragment: c,
          } = n,
          m = c ? this.currentUrlTree.fragment : s,
          f = null;
        switch (d ?? this.options.defaultQueryParamsHandling) {
          case "merge":
            f = g(g({}, this.currentUrlTree.queryParams), a);
            break;
          case "preserve":
            f = this.currentUrlTree.queryParams;
            break;
          default:
            f = a || null;
        }
        f !== null && (f = this.removeEmptyProps(f));
        let _;
        try {
          let O = o ? o.snapshot : this.routerState.snapshot.root;
          _ = js(O);
        } catch {
          (typeof e[0] != "string" || e[0][0] !== "/") && (e = []),
            (_ = this.currentUrlTree.root);
        }
        return Vs(_, e, f, m ?? null);
      }
      navigateByUrl(e, n = { skipLocationChange: !1 }) {
        let o = oe(e) ? e : this.parseUrl(e),
          a = this.urlHandlingStrategy.merge(o, this.rawUrlTree);
        return this.scheduleNavigation(a, gi, null, n);
      }
      navigate(e, n = { skipLocationChange: !1 }) {
        return Nu(e), this.navigateByUrl(this.createUrlTree(e, n), n);
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
      isActive(e, n) {
        let o;
        if (
          (n === !0 ? (o = g({}, Fu)) : n === !1 ? (o = g({}, Ou)) : (o = n),
          oe(e))
        )
          return bs(this.currentUrlTree, e, o);
        let a = this.parseUrl(e);
        return bs(this.currentUrlTree, a, o);
      }
      removeEmptyProps(e) {
        return Object.entries(e).reduce(
          (n, [o, a]) => (a != null && (n[o] = a), n),
          {},
        );
      }
      scheduleNavigation(e, n, o, a, s) {
        if (this.disposed) return Promise.resolve(!1);
        let d, c, m;
        s
          ? ((d = s.resolve), (c = s.reject), (m = s.promise))
          : (m = new Promise((_, O) => {
              (d = _), (c = O);
            }));
        let f = this.pendingTasks.add();
        return (
          rc(this, () => {
            queueMicrotask(() => this.pendingTasks.remove(f));
          }),
          this.navigationTransitions.handleNavigationRequest({
            source: n,
            restoredState: o,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.currentUrlTree,
            rawUrl: e,
            extras: a,
            resolve: d,
            reject: c,
            promise: m,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState,
          }),
          m.catch((_) => Promise.reject(_))
        );
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
function Nu(i) {
  for (let t = 0; t < i.length; t++) if (i[t] == null) throw new G(4008, !1);
}
function Pu(i) {
  return !(i instanceof yi) && !(i instanceof Oe);
}
var Mn = (() => {
    let t = class t {
      constructor(e, n, o, a, s, d) {
        (this.router = e),
          (this.route = n),
          (this.tabIndexAttribute = o),
          (this.renderer = a),
          (this.el = s),
          (this.locationStrategy = d),
          (this.href = null),
          (this.onChanges = new M()),
          (this.preserveFragment = !1),
          (this.skipLocationChange = !1),
          (this.replaceUrl = !1),
          (this.routerLinkInput = null);
        let c = s.nativeElement.tagName?.toLowerCase();
        (this.isAnchorElement = c === "a" || c === "area"),
          this.isAnchorElement
            ? (this.subscription = e.events.subscribe((m) => {
                m instanceof Dt && this.updateHref();
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
          : (oe(e)
              ? (this.routerLinkInput = e)
              : (this.routerLinkInput = Array.isArray(e) ? e : [e]),
            this.setTabIndexIfNotOnNativeEl("0"));
      }
      onClick(e, n, o, a, s) {
        let d = this.urlTree;
        if (
          d === null ||
          (this.isAnchorElement &&
            (e !== 0 ||
              n ||
              o ||
              a ||
              s ||
              (typeof this.target == "string" && this.target != "_self")))
        )
          return !0;
        let c = {
          skipLocationChange: this.skipLocationChange,
          replaceUrl: this.replaceUrl,
          state: this.state,
          info: this.info,
        };
        return this.router.navigateByUrl(d, c), !this.isAnchorElement;
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
        let n =
          this.href === null
            ? null
            : Oa(
                this.href,
                this.el.nativeElement.tagName.toLowerCase(),
                "href",
              );
        this.applyAttributeValue("href", n);
      }
      applyAttributeValue(e, n) {
        let o = this.renderer,
          a = this.el.nativeElement;
        n !== null ? o.setAttribute(a, e, n) : o.removeAttribute(a, e);
      }
      get urlTree() {
        return this.routerLinkInput === null
          ? null
          : oe(this.routerLinkInput)
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
    (t.ɵfac = function (n) {
      return new (n || t)(h(jt), h(ae), Ce("tabindex"), h(Ji), h(k), h(ai));
    }),
      (t.ɵdir = P({
        type: t,
        selectors: [["", "routerLink", ""]],
        hostVars: 1,
        hostBindings: function (n, o) {
          n & 1 &&
            et("click", function (s) {
              return o.onClick(
                s.button,
                s.ctrlKey,
                s.shiftKey,
                s.altKey,
                s.metaKey,
              );
            }),
            n & 2 && q("target", o.target);
        },
        inputs: {
          target: "target",
          queryParams: "queryParams",
          fragment: "fragment",
          queryParamsHandling: "queryParamsHandling",
          state: "state",
          info: "info",
          relativeTo: "relativeTo",
          preserveFragment: [2, "preserveFragment", "preserveFragment", Y],
          skipLocationChange: [
            2,
            "skipLocationChange",
            "skipLocationChange",
            Y,
          ],
          replaceUrl: [2, "replaceUrl", "replaceUrl", Y],
          routerLink: "routerLink",
        },
        standalone: !0,
        features: [mt, Ft],
      }));
    let i = t;
    return i;
  })(),
  oc = (() => {
    let t = class t {
      get isActive() {
        return this._isActive;
      }
      constructor(e, n, o, a, s) {
        (this.router = e),
          (this.element = n),
          (this.renderer = o),
          (this.cdr = a),
          (this.link = s),
          (this.classes = []),
          (this._isActive = !1),
          (this.routerLinkActiveOptions = { exact: !1 }),
          (this.isActiveChange = new W()),
          (this.routerEventsSubscription = e.events.subscribe((d) => {
            d instanceof Dt && this.update();
          }));
      }
      ngAfterContentInit() {
        y(this.links.changes, y(null))
          .pipe(Ze())
          .subscribe((e) => {
            this.update(), this.subscribeToEachLinkOnChanges();
          });
      }
      subscribeToEachLinkOnChanges() {
        this.linkInputChangesSubscription?.unsubscribe();
        let e = [...this.links.toArray(), this.link]
          .filter((n) => !!n)
          .map((n) => n.onChanges);
        this.linkInputChangesSubscription = st(e)
          .pipe(Ze())
          .subscribe((n) => {
            this._isActive !== this.isLinkActive(this.router)(n) &&
              this.update();
          });
      }
      set routerLinkActive(e) {
        let n = Array.isArray(e) ? e : e.split(" ");
        this.classes = n.filter((o) => !!o);
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
            this.classes.forEach((n) => {
              e
                ? this.renderer.addClass(this.element.nativeElement, n)
                : this.renderer.removeClass(this.element.nativeElement, n);
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
        let n = Lu(this.routerLinkActiveOptions)
          ? this.routerLinkActiveOptions
          : this.routerLinkActiveOptions.exact || !1;
        return (o) => {
          let a = o.urlTree;
          return a ? e.isActive(a, n) : !1;
        };
      }
      hasActiveLinks() {
        let e = this.isLinkActive(this.router);
        return (this.link && e(this.link)) || this.links.some(e);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(h(jt), h(k), h(Ji), h(J), h(Mn, 8));
    }),
      (t.ɵdir = P({
        type: t,
        selectors: [["", "routerLinkActive", ""]],
        contentQueries: function (n, o, a) {
          if ((n & 1 && X(a, Mn, 5), n & 2)) {
            let s;
            L((s = j())) && (o.links = s);
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
        features: [Ft],
      }));
    let i = t;
    return i;
  })();
function Lu(i) {
  return !!i.paths;
}
var An = class {};
var ju = (() => {
    let t = class t {
      constructor(e, n, o, a, s) {
        (this.router = e),
          (this.injector = o),
          (this.preloadingStrategy = a),
          (this.loader = s);
      }
      setUpPreloading() {
        this.subscription = this.router.events
          .pipe(
            it((e) => e instanceof Dt),
            _e(() => this.preload()),
          )
          .subscribe(() => {});
      }
      preload() {
        return this.processRoutes(this.injector, this.router.config);
      }
      ngOnDestroy() {
        this.subscription && this.subscription.unsubscribe();
      }
      processRoutes(e, n) {
        let o = [];
        for (let a of n) {
          a.providers &&
            !a._injector &&
            (a._injector = Mr(a.providers, e, `Route: ${a.path}`));
          let s = a._injector ?? e,
            d = a._loadedInjector ?? s;
          ((a.loadChildren && !a._loadedRoutes && a.canLoad === void 0) ||
            (a.loadComponent && !a._loadedComponent)) &&
            o.push(this.preloadConfig(s, a)),
            (a.children || a._loadedRoutes) &&
              o.push(this.processRoutes(d, a.children ?? a._loadedRoutes));
        }
        return st(o).pipe(Ze());
      }
      preloadConfig(e, n) {
        return this.preloadingStrategy.preload(n, () => {
          let o;
          n.loadChildren && n.canLoad === void 0
            ? (o = this.loader.loadChildren(e, n))
            : (o = y(null));
          let a = o.pipe(
            pt((s) =>
              s === null
                ? y(void 0)
                : ((n._loadedRoutes = s.routes),
                  (n._loadedInjector = s.injector),
                  this.processRoutes(s.injector ?? e, s.routes)),
            ),
          );
          if (n.loadComponent && !n._loadedComponent) {
            let s = this.loader.loadComponent(n);
            return st([a, s]).pipe(Ze());
          } else return a;
        });
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(b(jt), b(on), b(ti), b(An), b(Do));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })(),
  ac = new x(""),
  Vu = (() => {
    let t = class t {
      constructor(e, n, o, a, s = {}) {
        (this.urlSerializer = e),
          (this.transitions = n),
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
          e instanceof Fe
            ? ((this.store[this.lastId] =
                this.viewportScroller.getScrollPosition()),
              (this.lastSource = e.navigationTrigger),
              (this.restoredId = e.restoredState
                ? e.restoredState.navigationId
                : 0))
            : e instanceof Dt
              ? ((this.lastId = e.id),
                this.scheduleScrollEvent(
                  e,
                  this.urlSerializer.parse(e.urlAfterRedirects).fragment,
                ))
              : e instanceof qt &&
                e.code === bn.IgnoredSameUrlNavigation &&
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
          e instanceof yn &&
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
      scheduleScrollEvent(e, n) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => {
            this.zone.run(() => {
              this.transitions.events.next(
                new yn(
                  e,
                  this.lastSource === "popstate"
                    ? this.store[this.restoredId]
                    : null,
                  n,
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
    (t.ɵfac = function (n) {
      ee();
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac }));
    let i = t;
    return i;
  })();
function zu(i) {
  return i.routerState.root;
}
function Ri(i, t) {
  return { ɵkind: i, ɵproviders: t };
}
function Bu() {
  let i = v(It);
  return (t) => {
    let r = i.get(Fr);
    if (t !== r.components[0]) return;
    let e = i.get(jt),
      n = i.get(sc);
    i.get(ko) === 1 && e.initialNavigation(),
      i.get(cc, null, wr.Optional)?.setUpPreloading(),
      i.get(ac, null, wr.Optional)?.init(),
      e.resetRootComponentType(r.componentTypes[0]),
      n.closed || (n.next(), n.complete(), n.unsubscribe());
  };
}
var sc = new x("", { factory: () => new M() }),
  ko = new x("", { providedIn: "root", factory: () => 1 });
function Uu() {
  return Ri(2, [
    { provide: ko, useValue: 0 },
    {
      provide: Tr,
      multi: !0,
      deps: [It],
      useFactory: (t) => {
        let r = t.get(Xa, Promise.resolve());
        return () =>
          r.then(
            () =>
              new Promise((e) => {
                let n = t.get(jt),
                  o = t.get(sc);
                rc(n, () => {
                  e(!0);
                }),
                  (t.get(Ao).afterPreactivation = () => (
                    e(!0), o.closed ? y(void 0) : o
                  )),
                  n.initialNavigation();
              }),
          );
      },
    },
  ]);
}
function Hu() {
  return Ri(3, [
    {
      provide: Tr,
      multi: !0,
      useFactory: () => {
        let t = v(jt);
        return () => {
          t.setUpLocationChangeListener();
        };
      },
    },
    { provide: ko, useValue: 2 },
  ]);
}
var cc = new x("");
function $u(i) {
  return Ri(0, [
    { provide: cc, useExisting: ju },
    { provide: An, useExisting: i },
  ]);
}
function Gu() {
  return Ri(8, [xs, { provide: kn, useExisting: xs }]);
}
function Wu(i) {
  let t = [
    { provide: ec, useValue: Eu },
    {
      provide: ic,
      useValue: g({ skipNextTransition: !!i?.skipInitialTransition }, i),
    },
  ];
  return Ri(9, t);
}
var Ss = new x("ROUTER_FORROOT_GUARD"),
  qu = [
    si,
    { provide: Si, useClass: Te },
    jt,
    Mi,
    { provide: ae, useFactory: zu, deps: [jt] },
    Do,
    [],
  ],
  Ro = (() => {
    let t = class t {
      constructor(e) {}
      static forRoot(e, n) {
        return {
          ngModule: t,
          providers: [
            qu,
            [],
            { provide: Dn, multi: !0, useValue: e },
            { provide: Ss, useFactory: Yu, deps: [[jt, new xr(), new Ma()]] },
            { provide: ki, useValue: n || {} },
            n?.useHash ? Zu() : Ku(),
            Qu(),
            n?.preloadingStrategy ? $u(n.preloadingStrategy).ɵproviders : [],
            n?.initialNavigation ? Xu(n) : [],
            n?.bindToComponentInputs ? Gu().ɵproviders : [],
            n?.enableViewTransitions ? Wu().ɵproviders : [],
            Ju(),
          ],
        };
      }
      static forChild(e) {
        return {
          ngModule: t,
          providers: [{ provide: Dn, multi: !0, useValue: e }],
        };
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(b(Ss, 8));
    }),
      (t.ɵmod = F({ type: t })),
      (t.ɵinj = T({}));
    let i = t;
    return i;
  })();
function Qu() {
  return {
    provide: ac,
    useFactory: () => {
      let i = v(os),
        t = v(D),
        r = v(ki),
        e = v(Ao),
        n = v(Si);
      return (
        r.scrollOffset && i.setOffset(r.scrollOffset), new Vu(n, e, i, t, r)
      );
    },
  };
}
function Zu() {
  return { provide: ai, useClass: ts };
}
function Ku() {
  return { provide: ai, useClass: Ja };
}
function Yu(i) {
  return "guarded";
}
function Xu(i) {
  return [
    i.initialNavigation === "disabled" ? Hu().ɵproviders : [],
    i.initialNavigation === "enabledBlocking" ? Uu().ɵproviders : [],
  ];
}
var Ds = new x("");
function Ju() {
  return [
    { provide: Ds, useFactory: Bu },
    { provide: Ha, multi: !0, useExisting: Ds },
  ];
}
var Fo;
try {
  Fo = typeof Intl < "u" && Intl.v8BreakIterator;
} catch {
  Fo = !1;
}
var Z = (() => {
  let t = class t {
    constructor(e) {
      (this._platformId = e),
        (this.isBrowser = this._platformId
          ? rs(this._platformId)
          : typeof document == "object" && !!document),
        (this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent)),
        (this.TRIDENT =
          this.isBrowser && /(msie|trident)/i.test(navigator.userAgent)),
        (this.BLINK =
          this.isBrowser &&
          !!(window.chrome || Fo) &&
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
  (t.ɵfac = function (n) {
    return new (n || t)(b(te));
  }),
    (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let i = t;
  return i;
})();
var Ti;
function th() {
  if (Ti == null && typeof window < "u")
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", { get: () => (Ti = !0) }),
      );
    } finally {
      Ti = Ti || !1;
    }
  return Ti;
}
function Le(i) {
  return th() ? i : !!i.capture;
}
var Mt = (function (i) {
    return (
      (i[(i.NORMAL = 0)] = "NORMAL"),
      (i[(i.NEGATED = 1)] = "NEGATED"),
      (i[(i.INVERTED = 2)] = "INVERTED"),
      i
    );
  })(Mt || {}),
  Tn,
  se;
function lc() {
  if (se == null) {
    if (
      typeof document != "object" ||
      !document ||
      typeof Element != "function" ||
      !Element
    )
      return (se = !1), se;
    if ("scrollBehavior" in document.documentElement.style) se = !0;
    else {
      let i = Element.prototype.scrollTo;
      i ? (se = !/\{\s*\[native code\]\s*\}/.test(i.toString())) : (se = !1);
    }
  }
  return se;
}
function je() {
  if (typeof document != "object" || !document) return Mt.NORMAL;
  if (Tn == null) {
    let i = document.createElement("div"),
      t = i.style;
    (i.dir = "rtl"),
      (t.width = "1px"),
      (t.overflow = "auto"),
      (t.visibility = "hidden"),
      (t.pointerEvents = "none"),
      (t.position = "absolute");
    let r = document.createElement("div"),
      e = r.style;
    (e.width = "2px"),
      (e.height = "1px"),
      i.appendChild(r),
      document.body.appendChild(i),
      (Tn = Mt.NORMAL),
      i.scrollLeft === 0 &&
        ((i.scrollLeft = 1),
        (Tn = i.scrollLeft === 0 ? Mt.NEGATED : Mt.INVERTED)),
      i.remove();
  }
  return Tn;
}
var To;
function eh() {
  if (To == null) {
    let i = typeof document < "u" ? document.head : null;
    To = !!(i && (i.createShadowRoot || i.attachShadow));
  }
  return To;
}
function uc(i) {
  if (eh()) {
    let t = i.getRootNode ? i.getRootNode() : null;
    if (typeof ShadowRoot < "u" && ShadowRoot && t instanceof ShadowRoot)
      return t;
  }
  return null;
}
function Vt(i) {
  return i.composedPath ? i.composedPath()[0] : i.target;
}
function hc() {
  return (
    (typeof __karma__ < "u" && !!__karma__) ||
    (typeof jasmine < "u" && !!jasmine) ||
    (typeof jest < "u" && !!jest) ||
    (typeof Mocha < "u" && !!Mocha)
  );
}
function Ve(i, ...t) {
  return t.length
    ? t.some((r) => i[r])
    : i.altKey || i.shiftKey || i.ctrlKey || i.metaKey;
}
function Tt(i) {
  return i != null && `${i}` != "false";
}
function de(i, t = 0) {
  return ih(i) ? Number(i) : arguments.length === 2 ? t : 0;
}
function ih(i) {
  return !isNaN(parseFloat(i)) && !isNaN(Number(i));
}
function Oo(i) {
  return Array.isArray(i) ? i : [i];
}
function zt(i) {
  return i instanceof k ? i.nativeElement : i;
}
var mc = new Set(),
  le,
  nh = (() => {
    let t = class t {
      constructor(e, n) {
        (this._platform = e),
          (this._nonce = n),
          (this._matchMedia =
            this._platform.isBrowser && window.matchMedia
              ? window.matchMedia.bind(window)
              : oh);
      }
      matchMedia(e) {
        return (
          (this._platform.WEBKIT || this._platform.BLINK) && rh(e, this._nonce),
          this._matchMedia(e)
        );
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(b(Z), b(ii, 8));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
function rh(i, t) {
  if (!mc.has(i))
    try {
      le ||
        ((le = document.createElement("style")),
        t && le.setAttribute("nonce", t),
        le.setAttribute("type", "text/css"),
        document.head.appendChild(le)),
        le.sheet &&
          (le.sheet.insertRule(`@media ${i} {body{ }}`, 0), mc.add(i));
    } catch (r) {
      console.error(r);
    }
}
function oh(i) {
  return {
    matches: i === "all" || i === "",
    media: i,
    addListener: () => {},
    removeListener: () => {},
  };
}
var fc = (() => {
  let t = class t {
    constructor(e, n) {
      (this._mediaMatcher = e),
        (this._zone = n),
        (this._queries = new Map()),
        (this._destroySubject = new M());
    }
    ngOnDestroy() {
      this._destroySubject.next(), this._destroySubject.complete();
    }
    isMatched(e) {
      return pc(Oo(e)).some((o) => this._registerQuery(o).mql.matches);
    }
    observe(e) {
      let o = pc(Oo(e)).map((s) => this._registerQuery(s).observable),
        a = ge(o);
      return (
        (a = Wi(a.pipe(Ct(1)), a.pipe(Qi(1), ye(0)))),
        a.pipe(
          A((s) => {
            let d = { matches: !1, breakpoints: {} };
            return (
              s.forEach(({ matches: c, query: m }) => {
                (d.matches = d.matches || c), (d.breakpoints[m] = c);
              }),
              d
            );
          }),
        )
      );
    }
    _registerQuery(e) {
      if (this._queries.has(e)) return this._queries.get(e);
      let n = this._mediaMatcher.matchMedia(e),
        a = {
          observable: new qe((s) => {
            let d = (c) => this._zone.run(() => s.next(c));
            return (
              n.addListener(d),
              () => {
                n.removeListener(d);
              }
            );
          }).pipe(
            yt(n),
            A(({ matches: s }) => ({ query: e, matches: s })),
            z(this._destroySubject),
          ),
          mql: n,
        };
      return this._queries.set(e, a), a;
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(b(nh), b(D));
  }),
    (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let i = t;
  return i;
})();
function pc(i) {
  return i
    .map((t) => t.split(","))
    .reduce((t, r) => t.concat(r))
    .map((t) => t.trim());
}
var wh = 200,
  Po = class {
    constructor(t, r) {
      (this._letterKeyStream = new M()),
        (this._items = []),
        (this._selectedItemIndex = -1),
        (this._pressedLetters = []),
        (this._selectedItem = new M()),
        (this.selectedItem = this._selectedItem);
      let e = typeof r?.debounceInterval == "number" ? r.debounceInterval : wh;
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
          nt((r) => this._pressedLetters.push(r)),
          ye(t),
          it(() => this._pressedLetters.length > 0),
          A(() => this._pressedLetters.join("").toLocaleUpperCase()),
        )
        .subscribe((r) => {
          for (let e = 1; e < this._items.length + 1; e++) {
            let n = (this._selectedItemIndex + e) % this._items.length,
              o = this._items[n];
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
  Lo = class {
    constructor(t, r) {
      (this._items = t),
        (this._activeItemIndex = -1),
        (this._activeItem = null),
        (this._wrap = !1),
        (this._typeaheadSubscription = We.EMPTY),
        (this._vertical = !0),
        (this._allowedModifierKeys = []),
        (this._homeAndEnd = !1),
        (this._pageUpAndDown = { enabled: !1, delta: 10 }),
        (this._skipPredicateFn = (e) => e.disabled),
        (this.tabOut = new M()),
        (this.change = new M()),
        t instanceof Jt
          ? (this._itemChangesSubscription = t.changes.subscribe((e) =>
              this._itemsChanged(e.toArray()),
            ))
          : Dr(t) &&
            (this._effectRef = Qa(() => this._itemsChanged(t()), {
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
        (this._typeahead = new Po(r, {
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
        n = ["altKey", "ctrlKey", "metaKey", "shiftKey"].every(
          (o) => !t[o] || this._allowedModifierKeys.indexOf(o) > -1,
        );
      switch (r) {
        case 9:
          this.tabOut.next();
          return;
        case 40:
          if (this._vertical && n) {
            this.setNextItemActive();
            break;
          } else return;
        case 38:
          if (this._vertical && n) {
            this.setPreviousItemActive();
            break;
          } else return;
        case 39:
          if (this._horizontal && n) {
            this._horizontal === "rtl"
              ? this.setPreviousItemActive()
              : this.setNextItemActive();
            break;
          } else return;
        case 37:
          if (this._horizontal && n) {
            this._horizontal === "rtl"
              ? this.setNextItemActive()
              : this.setPreviousItemActive();
            break;
          } else return;
        case 36:
          if (this._homeAndEnd && n) {
            this.setFirstItemActive();
            break;
          } else return;
        case 35:
          if (this._homeAndEnd && n) {
            this.setLastItemActive();
            break;
          } else return;
        case 33:
          if (this._pageUpAndDown.enabled && n) {
            let o = this._activeItemIndex - this._pageUpAndDown.delta;
            this._setActiveItemByIndex(o > 0 ? o : 0, 1);
            break;
          } else return;
        case 34:
          if (this._pageUpAndDown.enabled && n) {
            let o = this._activeItemIndex + this._pageUpAndDown.delta,
              a = this._getItemsArray().length;
            this._setActiveItemByIndex(o < a ? o : a - 1, -1);
            break;
          } else return;
        default:
          (n || Ve(t, "shiftKey")) && this._typeahead?.handleKey(t);
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
        n = r[e];
      (this._activeItem = n ?? null),
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
        let n = (this._activeItemIndex + t * e + r.length) % r.length,
          o = r[n];
        if (!this._skipPredicateFn(o)) {
          this.setActiveItem(n);
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
      return Dr(this._items)
        ? this._items()
        : this._items instanceof Jt
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
var Nn = class extends Lo {
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
var Bo = (() => {
  let t = class t {
    constructor(e) {
      this._platform = e;
    }
    isDisabled(e) {
      return e.hasAttribute("disabled");
    }
    isVisible(e) {
      return Ch(e) && getComputedStyle(e).visibility === "visible";
    }
    isTabbable(e) {
      if (!this._platform.isBrowser) return !1;
      let n = xh(Rh(e));
      if (n && (gc(n) === -1 || !this.isVisible(n))) return !1;
      let o = e.nodeName.toLowerCase(),
        a = gc(e);
      return e.hasAttribute("contenteditable")
        ? a !== -1
        : o === "iframe" ||
            o === "object" ||
            (this._platform.WEBKIT && this._platform.IOS && !Ah(e))
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
    isFocusable(e, n) {
      return (
        kh(e) &&
        !this.isDisabled(e) &&
        (n?.ignoreVisibility || this.isVisible(e))
      );
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(b(Z));
  }),
    (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let i = t;
  return i;
})();
function xh(i) {
  try {
    return i.frameElement;
  } catch {
    return null;
  }
}
function Ch(i) {
  return !!(
    i.offsetWidth ||
    i.offsetHeight ||
    (typeof i.getClientRects == "function" && i.getClientRects().length)
  );
}
function Ih(i) {
  let t = i.nodeName.toLowerCase();
  return t === "input" || t === "select" || t === "button" || t === "textarea";
}
function Eh(i) {
  return Dh(i) && i.type == "hidden";
}
function Sh(i) {
  return Mh(i) && i.hasAttribute("href");
}
function Dh(i) {
  return i.nodeName.toLowerCase() == "input";
}
function Mh(i) {
  return i.nodeName.toLowerCase() == "a";
}
function _c(i) {
  if (!i.hasAttribute("tabindex") || i.tabIndex === void 0) return !1;
  let t = i.getAttribute("tabindex");
  return !!(t && !isNaN(parseInt(t, 10)));
}
function gc(i) {
  if (!_c(i)) return null;
  let t = parseInt(i.getAttribute("tabindex") || "", 10);
  return isNaN(t) ? -1 : t;
}
function Ah(i) {
  let t = i.nodeName.toLowerCase(),
    r = t === "input" && i.type;
  return r === "text" || r === "password" || t === "select" || t === "textarea";
}
function kh(i) {
  return Eh(i)
    ? !1
    : Ih(i) || Sh(i) || i.hasAttribute("contenteditable") || _c(i);
}
function Rh(i) {
  return (i.ownerDocument && i.ownerDocument.defaultView) || window;
}
var jo = class {
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
    constructor(t, r, e, n, o = !1, a) {
      (this._element = t),
        (this._checker = r),
        (this._ngZone = e),
        (this._document = n),
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
        let n =
          r[e].nodeType === this._document.ELEMENT_NODE
            ? this._getFirstTabbableElement(r[e])
            : null;
        if (n) return n;
      }
      return null;
    }
    _getLastTabbableElement(t) {
      if (this._checker.isFocusable(t) && this._checker.isTabbable(t)) return t;
      let r = t.children;
      for (let e = r.length - 1; e >= 0; e--) {
        let n =
          r[e].nodeType === this._document.ELEMENT_NODE
            ? this._getLastTabbableElement(r[e])
            : null;
        if (n) return n;
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
      this._injector ? kt(t, { injector: this._injector }) : setTimeout(t);
    }
  },
  yc = (() => {
    let t = class t {
      constructor(e, n, o) {
        (this._checker = e),
          (this._ngZone = n),
          (this._injector = v(It)),
          (this._document = o);
      }
      create(e, n = !1) {
        return new jo(
          e,
          this._checker,
          this._ngZone,
          this._document,
          n,
          this._injector,
        );
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(b(Bo), b(D), b(R));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
function Uo(i) {
  return i.buttons === 0 || i.detail === 0;
}
function Ho(i) {
  let t =
    (i.touches && i.touches[0]) || (i.changedTouches && i.changedTouches[0]);
  return (
    !!t &&
    t.identifier === -1 &&
    (t.radiusX == null || t.radiusX === 1) &&
    (t.radiusY == null || t.radiusY === 1)
  );
}
var Th = new x("cdk-input-modality-detector-options"),
  Fh = { ignoreKeys: [18, 17, 224, 91, 16] },
  wc = 650,
  ze = Le({ passive: !0, capture: !0 }),
  Oh = (() => {
    let t = class t {
      get mostRecentModality() {
        return this._modality.value;
      }
      constructor(e, n, o, a) {
        (this._platform = e),
          (this._mostRecentTarget = null),
          (this._modality = new ut(null)),
          (this._lastTouchMs = 0),
          (this._onKeydown = (s) => {
            this._options?.ignoreKeys?.some((d) => d === s.keyCode) ||
              (this._modality.next("keyboard"),
              (this._mostRecentTarget = Vt(s)));
          }),
          (this._onMousedown = (s) => {
            Date.now() - this._lastTouchMs < wc ||
              (this._modality.next(Uo(s) ? "keyboard" : "mouse"),
              (this._mostRecentTarget = Vt(s)));
          }),
          (this._onTouchstart = (s) => {
            if (Ho(s)) {
              this._modality.next("keyboard");
              return;
            }
            (this._lastTouchMs = Date.now()),
              this._modality.next("touch"),
              (this._mostRecentTarget = Vt(s));
          }),
          (this._options = g(g({}, Fh), a)),
          (this.modalityDetected = this._modality.pipe(Qi(1))),
          (this.modalityChanged = this.modalityDetected.pipe(Xe())),
          e.isBrowser &&
            n.runOutsideAngular(() => {
              o.addEventListener("keydown", this._onKeydown, ze),
                o.addEventListener("mousedown", this._onMousedown, ze),
                o.addEventListener("touchstart", this._onTouchstart, ze);
            });
      }
      ngOnDestroy() {
        this._modality.complete(),
          this._platform.isBrowser &&
            (document.removeEventListener("keydown", this._onKeydown, ze),
            document.removeEventListener("mousedown", this._onMousedown, ze),
            document.removeEventListener("touchstart", this._onTouchstart, ze));
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(b(Z), b(D), b(R), b(Th, 8));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
var On = (function (i) {
    return (
      (i[(i.IMMEDIATE = 0)] = "IMMEDIATE"),
      (i[(i.EVENTUAL = 1)] = "EVENTUAL"),
      i
    );
  })(On || {}),
  Nh = new x("cdk-focus-monitor-default-options"),
  Fn = Le({ passive: !0, capture: !0 }),
  he = (() => {
    let t = class t {
      constructor(e, n, o, a, s) {
        (this._ngZone = e),
          (this._platform = n),
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
          (this._stopInputModalityDetector = new M()),
          (this._rootNodeFocusAndBlurListener = (d) => {
            let c = Vt(d);
            for (let m = c; m; m = m.parentElement)
              d.type === "focus" ? this._onFocus(d, m) : this._onBlur(d, m);
          }),
          (this._document = a),
          (this._detectionMode = s?.detectionMode || On.IMMEDIATE);
      }
      monitor(e, n = !1) {
        let o = zt(e);
        if (!this._platform.isBrowser || o.nodeType !== 1) return y();
        let a = uc(o) || this._getDocument(),
          s = this._elementInfo.get(o);
        if (s) return n && (s.checkChildren = !0), s.subject;
        let d = { checkChildren: n, subject: new M(), rootNode: a };
        return (
          this._elementInfo.set(o, d),
          this._registerGlobalListeners(d),
          d.subject
        );
      }
      stopMonitoring(e) {
        let n = zt(e),
          o = this._elementInfo.get(n);
        o &&
          (o.subject.complete(),
          this._setClasses(n),
          this._elementInfo.delete(n),
          this._removeGlobalListeners(o));
      }
      focusVia(e, n, o) {
        let a = zt(e),
          s = this._getDocument().activeElement;
        a === s
          ? this._getClosestElementsInfo(a).forEach(([d, c]) =>
              this._originChanged(d, n, c),
            )
          : (this._setOrigin(n), typeof a.focus == "function" && a.focus(o));
      }
      ngOnDestroy() {
        this._elementInfo.forEach((e, n) => this.stopMonitoring(n));
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
          this._detectionMode === On.EVENTUAL ||
          !!e?.contains(this._inputModalityDetector._mostRecentTarget)
        );
      }
      _setClasses(e, n) {
        e.classList.toggle("cdk-focused", !!n),
          e.classList.toggle("cdk-touch-focused", n === "touch"),
          e.classList.toggle("cdk-keyboard-focused", n === "keyboard"),
          e.classList.toggle("cdk-mouse-focused", n === "mouse"),
          e.classList.toggle("cdk-program-focused", n === "program");
      }
      _setOrigin(e, n = !1) {
        this._ngZone.runOutsideAngular(() => {
          if (
            ((this._origin = e),
            (this._originFromTouchInteraction = e === "touch" && n),
            this._detectionMode === On.IMMEDIATE)
          ) {
            clearTimeout(this._originTimeoutId);
            let o = this._originFromTouchInteraction ? wc : 1;
            this._originTimeoutId = setTimeout(() => (this._origin = null), o);
          }
        });
      }
      _onFocus(e, n) {
        let o = this._elementInfo.get(n),
          a = Vt(e);
        !o ||
          (!o.checkChildren && n !== a) ||
          this._originChanged(n, this._getFocusOrigin(a), o);
      }
      _onBlur(e, n) {
        let o = this._elementInfo.get(n);
        !o ||
          (o.checkChildren &&
            e.relatedTarget instanceof Node &&
            n.contains(e.relatedTarget)) ||
          (this._setClasses(n), this._emitOrigin(o, null));
      }
      _emitOrigin(e, n) {
        e.subject.observers.length && this._ngZone.run(() => e.subject.next(n));
      }
      _registerGlobalListeners(e) {
        if (!this._platform.isBrowser) return;
        let n = e.rootNode,
          o = this._rootNodeFocusListenerCount.get(n) || 0;
        o ||
          this._ngZone.runOutsideAngular(() => {
            n.addEventListener("focus", this._rootNodeFocusAndBlurListener, Fn),
              n.addEventListener(
                "blur",
                this._rootNodeFocusAndBlurListener,
                Fn,
              );
          }),
          this._rootNodeFocusListenerCount.set(n, o + 1),
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
        let n = e.rootNode;
        if (this._rootNodeFocusListenerCount.has(n)) {
          let o = this._rootNodeFocusListenerCount.get(n);
          o > 1
            ? this._rootNodeFocusListenerCount.set(n, o - 1)
            : (n.removeEventListener(
                "focus",
                this._rootNodeFocusAndBlurListener,
                Fn,
              ),
              n.removeEventListener(
                "blur",
                this._rootNodeFocusAndBlurListener,
                Fn,
              ),
              this._rootNodeFocusListenerCount.delete(n));
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
      _originChanged(e, n, o) {
        this._setClasses(e, n),
          this._emitOrigin(o, n),
          (this._lastFocusOrigin = n);
      }
      _getClosestElementsInfo(e) {
        let n = [];
        return (
          this._elementInfo.forEach((o, a) => {
            (a === e || (o.checkChildren && a.contains(e))) && n.push([a, o]);
          }),
          n
        );
      }
      _isLastInteractionFromInputLabel(e) {
        let { _mostRecentTarget: n, mostRecentModality: o } =
          this._inputModalityDetector;
        if (
          o !== "mouse" ||
          !n ||
          n === e ||
          (e.nodeName !== "INPUT" && e.nodeName !== "TEXTAREA") ||
          e.disabled
        )
          return !1;
        let a = e.labels;
        if (a) {
          for (let s = 0; s < a.length; s++) if (a[s].contains(n)) return !0;
        }
        return !1;
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(b(D), b(Z), b(Oh), b(R, 8), b(Nh, 8));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
var ue = (function (i) {
    return (
      (i[(i.NONE = 0)] = "NONE"),
      (i[(i.BLACK_ON_WHITE = 1)] = "BLACK_ON_WHITE"),
      (i[(i.WHITE_ON_BLACK = 2)] = "WHITE_ON_BLACK"),
      i
    );
  })(ue || {}),
  vc = "cdk-high-contrast-black-on-white",
  bc = "cdk-high-contrast-white-on-black",
  No = "cdk-high-contrast-active",
  xc = (() => {
    let t = class t {
      constructor(e, n) {
        (this._platform = e),
          (this._document = n),
          (this._breakpointSubscription = v(fc)
            .observe("(forced-colors: active)")
            .subscribe(() => {
              this._hasCheckedHighContrastMode &&
                ((this._hasCheckedHighContrastMode = !1),
                this._applyBodyHighContrastModeCssClasses());
            }));
      }
      getHighContrastMode() {
        if (!this._platform.isBrowser) return ue.NONE;
        let e = this._document.createElement("div");
        (e.style.backgroundColor = "rgb(1,2,3)"),
          (e.style.position = "absolute"),
          this._document.body.appendChild(e);
        let n = this._document.defaultView || window,
          o = n && n.getComputedStyle ? n.getComputedStyle(e) : null,
          a = ((o && o.backgroundColor) || "").replace(/ /g, "");
        switch ((e.remove(), a)) {
          case "rgb(0,0,0)":
          case "rgb(45,50,54)":
          case "rgb(32,32,32)":
            return ue.WHITE_ON_BLACK;
          case "rgb(255,255,255)":
          case "rgb(255,250,239)":
            return ue.BLACK_ON_WHITE;
        }
        return ue.NONE;
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
          e.remove(No, vc, bc), (this._hasCheckedHighContrastMode = !0);
          let n = this.getHighContrastMode();
          n === ue.BLACK_ON_WHITE
            ? e.add(No, vc)
            : n === ue.WHITE_ON_BLACK && e.add(No, bc);
        }
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(b(Z), b(R));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
var Ph = new x("cdk-dir-doc", { providedIn: "root", factory: Lh });
function Lh() {
  return v(R);
}
var jh =
  /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function Vh(i) {
  let t = i?.toLowerCase() || "";
  return t === "auto" && typeof navigator < "u" && navigator?.language
    ? jh.test(navigator.language)
      ? "rtl"
      : "ltr"
    : t === "rtl"
      ? "rtl"
      : "ltr";
}
var Bt = (() => {
  let t = class t {
    constructor(e) {
      if (((this.value = "ltr"), (this.change = new W()), e)) {
        let n = e.body ? e.body.dir : null,
          o = e.documentElement ? e.documentElement.dir : null;
        this.value = Vh(n || o || "ltr");
      }
    }
    ngOnDestroy() {
      this.change.complete();
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(b(Ph, 8));
  }),
    (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let i = t;
  return i;
})();
var Go = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = F({ type: t })),
    (t.ɵinj = T({}));
  let i = t;
  return i;
})();
function zh() {
  return !0;
}
var Bh = new x("mat-sanity-checks", { providedIn: "root", factory: zh }),
  K = (() => {
    let t = class t {
      constructor(e, n, o) {
        (this._sanityChecks = n),
          (this._document = o),
          (this._hasDoneGlobalChecks = !1),
          e._applyBodyHighContrastModeCssClasses(),
          this._hasDoneGlobalChecks || (this._hasDoneGlobalChecks = !0);
      }
      _checkIsEnabled(e) {
        return hc()
          ? !1
          : typeof this._sanityChecks == "boolean"
            ? this._sanityChecks
            : !!this._sanityChecks[e];
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(b(xc), b(Bh, 8), b(R));
    }),
      (t.ɵmod = F({ type: t })),
      (t.ɵinj = T({ imports: [Go, Go] }));
    let i = t;
    return i;
  })();
var Vn = class {
  constructor(t, r, e, n, o) {
    (this._defaultMatcher = t),
      (this.ngControl = r),
      (this._parentFormGroup = e),
      (this._parentForm = n),
      (this._stateChanges = o),
      (this.errorState = !1);
  }
  updateErrorState() {
    let t = this.errorState,
      r = this._parentFormGroup || this._parentForm,
      e = this.matcher || this._defaultMatcher,
      n = this.ngControl ? this.ngControl.control : null,
      o = e?.isErrorState(n, r) ?? !1;
    o !== t && ((this.errorState = o), this._stateChanges.next());
  }
};
var Yo = (() => {
  let t = class t {
    isErrorState(e, n) {
      return !!(e && e.invalid && (e.touched || (n && n.submitted)));
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let i = t;
  return i;
})();
var Xo = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵmod = F({ type: t })),
      (t.ɵinj = T({ imports: [K, K] }));
    let i = t;
    return i;
  })(),
  xt = (function (i) {
    return (
      (i[(i.FADING_IN = 0)] = "FADING_IN"),
      (i[(i.VISIBLE = 1)] = "VISIBLE"),
      (i[(i.FADING_OUT = 2)] = "FADING_OUT"),
      (i[(i.HIDDEN = 3)] = "HIDDEN"),
      i
    );
  })(xt || {}),
  Qo = class {
    constructor(t, r, e, n = !1) {
      (this._renderer = t),
        (this.element = r),
        (this.config = e),
        (this._animationForciblyDisabledThroughCss = n),
        (this.state = xt.HIDDEN);
    }
    fadeOut() {
      this._renderer.fadeOutRipple(this);
    }
  },
  Cc = Le({ passive: !0, capture: !0 }),
  Zo = class {
    constructor() {
      (this._events = new Map()),
        (this._delegateEventHandler = (t) => {
          let r = Vt(t);
          r &&
            this._events.get(t.type)?.forEach((e, n) => {
              (n === r || n.contains(r)) && e.forEach((o) => o.handleEvent(t));
            });
        });
    }
    addHandler(t, r, e, n) {
      let o = this._events.get(r);
      if (o) {
        let a = o.get(e);
        a ? a.add(n) : o.set(e, new Set([n]));
      } else
        this._events.set(r, new Map([[e, new Set([n])]])),
          t.runOutsideAngular(() => {
            document.addEventListener(r, this._delegateEventHandler, Cc);
          });
    }
    removeHandler(t, r, e) {
      let n = this._events.get(t);
      if (!n) return;
      let o = n.get(r);
      o &&
        (o.delete(e),
        o.size === 0 && n.delete(r),
        n.size === 0 &&
          (this._events.delete(t),
          document.removeEventListener(t, this._delegateEventHandler, Cc)));
    }
  },
  Ic = { enterDuration: 225, exitDuration: 150 },
  Uh = 800,
  Ec = Le({ passive: !0, capture: !0 }),
  Sc = ["mousedown", "touchstart"],
  Dc = ["mouseup", "mouseleave", "touchend", "touchcancel"],
  Fi = class Fi {
    constructor(t, r, e, n) {
      (this._target = t),
        (this._ngZone = r),
        (this._platform = n),
        (this._isPointerDown = !1),
        (this._activeRipples = new Map()),
        (this._pointerUpEventsRegistered = !1),
        n.isBrowser && (this._containerElement = zt(e));
    }
    fadeInRipple(t, r, e = {}) {
      let n = (this._containerRect =
          this._containerRect ||
          this._containerElement.getBoundingClientRect()),
        o = g(g({}, Ic), e.animation);
      e.centered && ((t = n.left + n.width / 2), (r = n.top + n.height / 2));
      let a = e.radius || Hh(t, r, n),
        s = t - n.left,
        d = r - n.top,
        c = o.enterDuration,
        m = document.createElement("div");
      m.classList.add("mat-ripple-element"),
        (m.style.left = `${s - a}px`),
        (m.style.top = `${d - a}px`),
        (m.style.height = `${a * 2}px`),
        (m.style.width = `${a * 2}px`),
        e.color != null && (m.style.backgroundColor = e.color),
        (m.style.transitionDuration = `${c}ms`),
        this._containerElement.appendChild(m);
      let f = window.getComputedStyle(m),
        _ = f.transitionProperty,
        O = f.transitionDuration,
        tt =
          _ === "none" ||
          O === "0s" ||
          O === "0s, 0s" ||
          (n.width === 0 && n.height === 0),
        ot = new Qo(this, m, e, tt);
      (m.style.transform = "scale3d(1, 1, 1)"),
        (ot.state = xt.FADING_IN),
        e.persistent || (this._mostRecentTransientRipple = ot);
      let at = null;
      return (
        !tt &&
          (c || o.exitDuration) &&
          this._ngZone.runOutsideAngular(() => {
            let Ut = () => {
                at && (at.fallbackTimer = null),
                  clearTimeout(Xt),
                  this._finishRippleTransition(ot);
              },
              Yt = () => this._destroyRipple(ot),
              Xt = setTimeout(Yt, c + 100);
            m.addEventListener("transitionend", Ut),
              m.addEventListener("transitioncancel", Yt),
              (at = {
                onTransitionEnd: Ut,
                onTransitionCancel: Yt,
                fallbackTimer: Xt,
              });
          }),
        this._activeRipples.set(ot, at),
        (tt || !c) && this._finishRippleTransition(ot),
        ot
      );
    }
    fadeOutRipple(t) {
      if (t.state === xt.FADING_OUT || t.state === xt.HIDDEN) return;
      let r = t.element,
        e = g(g({}, Ic), t.config.animation);
      (r.style.transitionDuration = `${e.exitDuration}ms`),
        (r.style.opacity = "0"),
        (t.state = xt.FADING_OUT),
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
      let r = zt(t);
      !this._platform.isBrowser ||
        !r ||
        r === this._triggerElement ||
        (this._removeTriggerEvents(),
        (this._triggerElement = r),
        Sc.forEach((e) => {
          Fi._eventManager.addHandler(this._ngZone, e, r, this);
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
            Dc.forEach((r) => {
              this._triggerElement.addEventListener(r, this, Ec);
            });
          }),
          (this._pointerUpEventsRegistered = !0));
    }
    _finishRippleTransition(t) {
      t.state === xt.FADING_IN
        ? this._startFadeOutTransition(t)
        : t.state === xt.FADING_OUT && this._destroyRipple(t);
    }
    _startFadeOutTransition(t) {
      let r = t === this._mostRecentTransientRipple,
        { persistent: e } = t.config;
      (t.state = xt.VISIBLE), !e && (!r || !this._isPointerDown) && t.fadeOut();
    }
    _destroyRipple(t) {
      let r = this._activeRipples.get(t) ?? null;
      this._activeRipples.delete(t),
        this._activeRipples.size || (this._containerRect = null),
        t === this._mostRecentTransientRipple &&
          (this._mostRecentTransientRipple = null),
        (t.state = xt.HIDDEN),
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
      let r = Uo(t),
        e =
          this._lastTouchStartEvent &&
          Date.now() < this._lastTouchStartEvent + Uh;
      !this._target.rippleDisabled &&
        !r &&
        !e &&
        ((this._isPointerDown = !0),
        this.fadeInRipple(t.clientX, t.clientY, this._target.rippleConfig));
    }
    _onTouchStart(t) {
      if (!this._target.rippleDisabled && !Ho(t)) {
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
            t.state === xt.VISIBLE ||
            (t.config.terminateOnPointerUp && t.state === xt.FADING_IN);
          !t.config.persistent && r && t.fadeOut();
        }));
    }
    _getActiveRipples() {
      return Array.from(this._activeRipples.keys());
    }
    _removeTriggerEvents() {
      let t = this._triggerElement;
      t &&
        (Sc.forEach((r) => Fi._eventManager.removeHandler(r, t, this)),
        this._pointerUpEventsRegistered &&
          (Dc.forEach((r) => t.removeEventListener(r, this, Ec)),
          (this._pointerUpEventsRegistered = !1)));
    }
  };
Fi._eventManager = new Zo();
var Ko = Fi;
function Hh(i, t, r) {
  let e = Math.max(Math.abs(i - r.left), Math.abs(i - r.right)),
    n = Math.max(Math.abs(t - r.top), Math.abs(t - r.bottom));
  return Math.sqrt(e * e + n * n);
}
var Oi = new x("mat-ripple-global-options"),
  $h = (() => {
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
      constructor(e, n, o, a, s) {
        (this._elementRef = e),
          (this._animationMode = s),
          (this.radius = 0),
          (this._disabled = !1),
          (this._isInitialized = !1),
          (this._globalOptions = a || {}),
          (this._rippleRenderer = new Ko(this, n, e, o));
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
          animation: g(
            g(
              g({}, this._globalOptions.animation),
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
      launch(e, n = 0, o) {
        return typeof e == "number"
          ? this._rippleRenderer.fadeInRipple(
              e,
              n,
              g(g({}, this.rippleConfig), o),
            )
          : this._rippleRenderer.fadeInRipple(
              0,
              0,
              g(g({}, this.rippleConfig), e),
            );
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(h(k), h(D), h(Z), h(Oi, 8), h(ft, 8));
    }),
      (t.ɵdir = P({
        type: t,
        selectors: [
          ["", "mat-ripple", ""],
          ["", "matRipple", ""],
        ],
        hostAttrs: [1, "mat-ripple"],
        hostVars: 2,
        hostBindings: function (n, o) {
          n & 2 && $("mat-ripple-unbounded", o.unbounded);
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
    let i = t;
    return i;
  })(),
  Jo = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵmod = F({ type: t })),
      (t.ɵinj = T({ imports: [K, K] }));
    let i = t;
    return i;
  })();
var Mc = { capture: !0 },
  Ac = ["focus", "mousedown", "mouseenter", "touchstart"],
  Wo = "mat-ripple-loader-uninitialized",
  qo = "mat-ripple-loader-class-name",
  kc = "mat-ripple-loader-centered",
  jn = "mat-ripple-loader-disabled",
  zn = (() => {
    let t = class t {
      constructor() {
        (this._document = v(R, { optional: !0 })),
          (this._animationMode = v(ft, { optional: !0 })),
          (this._globalRippleOptions = v(Oi, { optional: !0 })),
          (this._platform = v(Z)),
          (this._ngZone = v(D)),
          (this._hosts = new Map()),
          (this._onInteraction = (e) => {
            let n = Vt(e);
            if (n instanceof HTMLElement) {
              let o = n.closest(
                `[${Wo}="${this._globalRippleOptions?.namespace ?? ""}"]`,
              );
              o && this._createRipple(o);
            }
          }),
          this._ngZone.runOutsideAngular(() => {
            for (let e of Ac)
              this._document?.addEventListener(e, this._onInteraction, Mc);
          });
      }
      ngOnDestroy() {
        let e = this._hosts.keys();
        for (let n of e) this.destroyRipple(n);
        for (let n of Ac)
          this._document?.removeEventListener(n, this._onInteraction, Mc);
      }
      configureRipple(e, n) {
        e.setAttribute(Wo, this._globalRippleOptions?.namespace ?? ""),
          (n.className || !e.hasAttribute(qo)) &&
            e.setAttribute(qo, n.className || ""),
          n.centered && e.setAttribute(kc, ""),
          n.disabled && e.setAttribute(jn, "");
      }
      getRipple(e) {
        return this._hosts.get(e) || this._createRipple(e);
      }
      setDisabled(e, n) {
        let o = this._hosts.get(e);
        if (o) {
          o.disabled = n;
          return;
        }
        n ? e.setAttribute(jn, "") : e.removeAttribute(jn);
      }
      _createRipple(e) {
        if (!this._document) return;
        let n = this._hosts.get(e);
        if (n) return n;
        e.querySelector(".mat-ripple")?.remove();
        let o = this._document.createElement("span");
        o.classList.add("mat-ripple", e.getAttribute(qo)), e.append(o);
        let a = new $h(
          new k(o),
          this._ngZone,
          this._platform,
          this._globalRippleOptions ? this._globalRippleOptions : void 0,
          this._animationMode ? this._animationMode : void 0,
        );
        return (
          (a._isInitialized = !0),
          (a.trigger = e),
          (a.centered = e.hasAttribute(kc)),
          (a.disabled = e.hasAttribute(jn)),
          this.attachRipple(e, a),
          a
        );
      }
      attachRipple(e, n) {
        e.removeAttribute(Wo), this._hosts.set(e, n);
      }
      destroyRipple(e) {
        let n = this._hosts.get(e);
        n && (n.ngOnDestroy(), this._hosts.delete(e));
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
var Wh = ["*"];
var qh = [
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
  Qh = [
    "[mat-card-avatar], [matCardAvatar]",
    `mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,
    "*",
  ],
  Zh = new x("MAT_CARD_CONFIG"),
  Be = (() => {
    let t = class t {
      constructor(e) {
        this.appearance = e?.appearance || "raised";
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(h(Zh, 8));
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [["mat-card"]],
        hostAttrs: [1, "mat-mdc-card", "mdc-card"],
        hostVars: 4,
        hostBindings: function (n, o) {
          n & 2 &&
            $("mat-mdc-card-outlined", o.appearance === "outlined")(
              "mdc-card--outlined",
              o.appearance === "outlined",
            );
        },
        inputs: { appearance: "appearance" },
        exportAs: ["matCard"],
        standalone: !0,
        features: [V],
        ngContentSelectors: Wh,
        decls: 1,
        vars: 0,
        template: function (n, o) {
          n & 1 && (Q(), S(0));
        },
        styles: [
          '.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mdc-elevated-card-container-color, var(--mat-app-surface));border-color:var(--mdc-elevated-card-container-color, var(--mat-app-surface));border-radius:var(--mdc-elevated-card-container-shape, var(--mat-app-corner-medium));box-shadow:var(--mdc-elevated-card-container-elevation, var(--mat-app-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mdc-elevated-card-container-shape, var(--mat-app-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mdc-outlined-card-container-color, var(--mat-app-surface));border-radius:var(--mdc-outlined-card-container-shape, var(--mat-app-corner-medium));border-width:var(--mdc-outlined-card-outline-width);border-color:var(--mdc-outlined-card-outline-color, var(--mat-app-outline-variant));box-shadow:var(--mdc-outlined-card-container-elevation, var(--mat-app-level0))}.mat-mdc-card-outlined::after{border:none}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-app-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-app-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-app-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-app-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-app-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-app-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-app-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-app-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-app-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-app-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-app-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}',
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })(),
  Bn = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵdir = P({
        type: t,
        selectors: [
          ["mat-card-title"],
          ["", "mat-card-title", ""],
          ["", "matCardTitle", ""],
        ],
        hostAttrs: [1, "mat-mdc-card-title"],
        standalone: !0,
      }));
    let i = t;
    return i;
  })();
var Un = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵdir = P({
      type: t,
      selectors: [["mat-card-content"]],
      hostAttrs: [1, "mat-mdc-card-content"],
      standalone: !0,
    }));
  let i = t;
  return i;
})();
var Hn = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵcmp = C({
      type: t,
      selectors: [["mat-card-header"]],
      hostAttrs: [1, "mat-mdc-card-header"],
      standalone: !0,
      features: [V],
      ngContentSelectors: Qh,
      decls: 4,
      vars: 0,
      consts: [[1, "mat-mdc-card-header-text"]],
      template: function (n, o) {
        n & 1 && (Q(qh), S(0), l(1, "div", 0), S(2, 1), u(), S(3, 2));
      },
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
var $n = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵdir = P({
      type: t,
      selectors: [
        ["", "mat-card-image", ""],
        ["", "matCardImage", ""],
      ],
      hostAttrs: [1, "mat-mdc-card-image", "mdc-card__media"],
      standalone: !0,
    }));
  let i = t;
  return i;
})();
var Rc = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = F({ type: t })),
    (t.ɵinj = T({ imports: [K, sn, K] }));
  let i = t;
  return i;
})();
var Tc = ["*"];
var Kh =
    ".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size, var(--mat-app-body-large))}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-app-body-medium))}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-app-body-large))}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-app-body-medium))}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}",
  ea = class {
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
        new ia(this.rowIndex, r)
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
  ia = class {
    constructor(t, r) {
      (this.row = t), (this.col = r);
    }
  },
  Fc = new x("MAT_GRID_LIST"),
  Pi = (() => {
    let t = class t {
      constructor(e, n) {
        (this._element = e),
          (this._gridList = n),
          (this._rowspan = 1),
          (this._colspan = 1);
      }
      get rowspan() {
        return this._rowspan;
      }
      set rowspan(e) {
        this._rowspan = Math.round(de(e));
      }
      get colspan() {
        return this._colspan;
      }
      set colspan(e) {
        this._colspan = Math.round(de(e));
      }
      _setStyle(e, n) {
        this._element.nativeElement.style[e] = n;
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(h(k), h(Fc, 8));
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [["mat-grid-tile"]],
        hostAttrs: [1, "mat-grid-tile"],
        hostVars: 2,
        hostBindings: function (n, o) {
          n & 2 && q("rowspan", o.rowspan)("colspan", o.colspan);
        },
        inputs: { rowspan: "rowspan", colspan: "colspan" },
        exportAs: ["matGridTile"],
        standalone: !0,
        features: [V],
        ngContentSelectors: Tc,
        decls: 2,
        vars: 0,
        consts: [[1, "mat-grid-tile-content"]],
        template: function (n, o) {
          n & 1 && (Q(), l(0, "div", 0), S(1), u());
        },
        styles: [
          ".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size, var(--mat-app-body-large))}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-app-body-medium))}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-app-body-large))}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-app-body-medium))}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })();
var Yh = /^-?\d+((\.\d+)?[A-Za-z%$]?)+$/,
  Ni = class {
    constructor() {
      (this._rows = 0), (this._rowspan = 0);
    }
    init(t, r, e, n) {
      (this._gutterSize = Oc(t)),
        (this._rows = r.rowCount),
        (this._rowspan = r.rowspan),
        (this._cols = e),
        (this._direction = n);
    }
    getBaseTileSize(t, r) {
      return `(${t}% - (${this._gutterSize} * ${r}))`;
    }
    getTilePosition(t, r) {
      return r === 0 ? "0" : me(`(${t} + ${this._gutterSize}) * ${r}`);
    }
    getTileSize(t, r) {
      return `(${t} * ${r}) + (${r - 1} * ${this._gutterSize})`;
    }
    setStyle(t, r, e) {
      let n = 100 / this._cols,
        o = (this._cols - 1) / this._cols;
      this.setColStyles(t, e, n, o), this.setRowStyles(t, r, n, o);
    }
    setColStyles(t, r, e, n) {
      let o = this.getBaseTileSize(e, n),
        a = this._direction === "rtl" ? "right" : "left";
      t._setStyle(a, this.getTilePosition(o, r)),
        t._setStyle("width", me(this.getTileSize(o, t.colspan)));
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
  na = class extends Ni {
    constructor(t) {
      super(), (this.fixedRowHeight = t);
    }
    init(t, r, e, n) {
      super.init(t, r, e, n),
        (this.fixedRowHeight = Oc(this.fixedRowHeight)),
        Yh.test(this.fixedRowHeight);
    }
    setRowStyles(t, r) {
      t._setStyle("top", this.getTilePosition(this.fixedRowHeight, r)),
        t._setStyle(
          "height",
          me(this.getTileSize(this.fixedRowHeight, t.rowspan)),
        );
    }
    getComputedHeight() {
      return [
        "height",
        me(
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
  ra = class extends Ni {
    constructor(t) {
      super(), this._parseRatio(t);
    }
    setRowStyles(t, r, e, n) {
      let o = e / this.rowHeightRatio;
      (this.baseTileHeight = this.getBaseTileSize(o, n)),
        t._setStyle("marginTop", this.getTilePosition(this.baseTileHeight, r)),
        t._setStyle(
          "paddingTop",
          me(this.getTileSize(this.baseTileHeight, t.rowspan)),
        );
    }
    getComputedHeight() {
      return [
        "paddingBottom",
        me(
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
  oa = class extends Ni {
    setRowStyles(t, r) {
      let e = 100 / this._rowspan,
        n = (this._rows - 1) / this._rows,
        o = this.getBaseTileSize(e, n);
      t._setStyle("top", this.getTilePosition(o, r)),
        t._setStyle("height", me(this.getTileSize(o, t.rowspan)));
    }
    reset(t) {
      t._tiles &&
        t._tiles.forEach((r) => {
          r._setStyle("top", null), r._setStyle("height", null);
        });
    }
  };
function me(i) {
  return `calc(${i})`;
}
function Oc(i) {
  return i.match(/([A-Za-z%]+)$/) ? i : `${i}px`;
}
var Xh = "fit",
  Gn = (() => {
    let t = class t {
      constructor(e, n) {
        (this._element = e), (this._dir = n), (this._gutter = "1px");
      }
      get cols() {
        return this._cols;
      }
      set cols(e) {
        this._cols = Math.max(1, Math.round(de(e)));
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
        let n = `${e ?? ""}`;
        n !== this._rowHeight &&
          ((this._rowHeight = n), this._setTileStyler(this._rowHeight));
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
          e === Xh
            ? (this._tileStyler = new oa())
            : e && e.indexOf(":") > -1
              ? (this._tileStyler = new ra(e))
              : (this._tileStyler = new na(e));
      }
      _layoutTiles() {
        this._tileCoordinator || (this._tileCoordinator = new ea());
        let e = this._tileCoordinator,
          n = this._tiles.filter((a) => !a._gridList || a._gridList === this),
          o = this._dir ? this._dir.value : "ltr";
        this._tileCoordinator.update(this.cols, n),
          this._tileStyler.init(this.gutterSize, e, this.cols, o),
          n.forEach((a, s) => {
            let d = e.positions[s];
            this._tileStyler.setStyle(a, d.row, d.col);
          }),
          this._setListStyle(this._tileStyler.getComputedHeight());
      }
      _setListStyle(e) {
        e && (this._element.nativeElement.style[e[0]] = e[1]);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(h(k), h(Bt, 8));
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [["mat-grid-list"]],
        contentQueries: function (n, o, a) {
          if ((n & 1 && X(a, Pi, 5), n & 2)) {
            let s;
            L((s = j())) && (o._tiles = s);
          }
        },
        hostAttrs: [1, "mat-grid-list"],
        hostVars: 1,
        hostBindings: function (n, o) {
          n & 2 && q("cols", o.cols);
        },
        inputs: {
          cols: "cols",
          gutterSize: "gutterSize",
          rowHeight: "rowHeight",
        },
        exportAs: ["matGridList"],
        standalone: !0,
        features: [lt([{ provide: Fc, useExisting: t }]), V],
        ngContentSelectors: Tc,
        decls: 2,
        vars: 0,
        template: function (n, o) {
          n & 1 && (Q(), l(0, "div"), S(1), u());
        },
        styles: [Kh],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })(),
  Nc = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵmod = F({ type: t })),
      (t.ɵinj = T({ imports: [Xo, K, Xo, K] }));
    let i = t;
    return i;
  })();
var Wn = (() => {
    let t = class t {
      constructor() {
        (this._vertical = !1), (this._inset = !1);
      }
      get vertical() {
        return this._vertical;
      }
      set vertical(e) {
        this._vertical = Tt(e);
      }
      get inset() {
        return this._inset;
      }
      set inset(e) {
        this._inset = Tt(e);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [["mat-divider"]],
        hostAttrs: ["role", "separator", 1, "mat-divider"],
        hostVars: 7,
        hostBindings: function (n, o) {
          n & 2 &&
            (q("aria-orientation", o.vertical ? "vertical" : "horizontal"),
            $("mat-divider-vertical", o.vertical)(
              "mat-divider-horizontal",
              !o.vertical,
            )("mat-divider-inset", o.inset));
        },
        inputs: { vertical: "vertical", inset: "inset" },
        standalone: !0,
        features: [V],
        decls: 0,
        vars: 0,
        template: function (n, o) {},
        styles: [
          ".mat-divider{display:block;margin:0;border-top-style:solid;border-top-color:var(--mat-divider-color, var(--mat-app-outline));border-top-width:var(--mat-divider-width)}.mat-divider.mat-divider-vertical{border-top:0;border-right-style:solid;border-right-color:var(--mat-divider-color, var(--mat-app-outline));border-right-width:var(--mat-divider-width)}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })(),
  Lc = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵmod = F({ type: t })),
      (t.ɵinj = T({ imports: [K, K] }));
    let i = t;
    return i;
  })();
var Jh = ["cardContentRef"],
  qn = class i {
    constructor(t, r) {
      this.elRef = t;
      this.cdr = r;
    }
    cardContentRef;
    resizeObserver;
    title = "Web App";
    rowHeight = "3:1";
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
        n = t.offsetHeight - r.offsetHeight;
      (this.rowHeight = (e / n).toFixed(2) + ":1"), this.cdr.detectChanges();
    }
    ngOnDestroy() {
      this.resizeObserver && this.resizeObserver.disconnect();
    }
    static ɵfac = function (r) {
      return new (r || i)(h(k), h(J));
    };
    static ɵcmp = C({
      type: i,
      selectors: [["app-web-app"]],
      viewQuery: function (r, e) {
        if ((r & 1 && Et(Jh, 5), r & 2)) {
          let n;
          L((n = j())) && (e.cardContentRef = n.first);
        }
      },
      hostBindings: function (r, e) {
        r & 1 &&
          et(
            "resize",
            function (o) {
              return e.onResize(o);
            },
            !1,
            Yi,
          );
      },
      decls: 38,
      vars: 2,
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
        ["cols", "2", 3, "rowHeight"],
        ["appearance", "outlined", 1, "item-card"],
        [
          "href",
          "https://xuyennguyen2733.github.io/asl-recognition/",
          "target",
          "_blank",
        ],
        [1, "project-card-content"],
        [1, "image-card"],
        [
          "src",
          "images\\web-preview\\asl-alphabet-recognition.png",
          "mat-card-image",
          "",
          "width",
          "100%",
        ],
        [1, "grid-tile"],
        [
          "href",
          "https://xuyennguyen2733.github.io/TypingPractice/",
          "target",
          "_blank",
        ],
        [
          "src",
          "images\\web-preview\\typing-practice-preview.png",
          "mat-card-image",
          "",
          "width",
          "100%",
        ],
        [
          "href",
          "https://xuyennguyen2733.github.io/ClassSchedule/",
          "target",
          "_blank",
        ],
        [
          "src",
          "images\\web-preview\\class-scheduler.png",
          "mat-card-image",
          "",
          "width",
          "100%",
        ],
      ],
      template: function (r, e) {
        r & 1 &&
          (l(0, "mat-card", 1)(1, "mat-card-header")(2, "mat-card-title"),
          p(3),
          u()(),
          I(4, "mat-divider"),
          l(5, "mat-card-content", 2, 0)(7, "mat-grid-list", 3)(
            8,
            "mat-grid-tile",
          )(
            9,
            "mat-card",
            4,
          )(10, "mat-card-title")(11, "a", 5),
          p(12, "ASL Alphabet Recognition"),
          u()(),
          l(13, "mat-card-content", 6)(14, "div", 7),
          I(15, "img", 8),
          u()()()(),
          l(16, "mat-grid-tile", 9)(17, "mat-card", 4)(18, "mat-card-title")(
            19,
            "a",
            10,
          ),
          p(20, "Chinese Typing Practice"),
          u()(),
          l(21, "mat-card-content", 6),
          I(22, "img", 11),
          u()()(),
          l(23, "mat-grid-tile", 9)(24, "mat-card", 4)(25, "mat-card-header")(
            26,
            "mat-card-title",
          )(27, "a", 12),
          p(28, "Class Scheduler"),
          u()()(),
          l(29, "mat-card-content", 6),
          I(30, "img", 13),
          u()()(),
          l(31, "mat-grid-tile", 9)(32, "mat-card", 4)(33, "mat-card-title")(
            34,
            "a",
            10,
          ),
          p(35, "Signaway - Learn Sign Language"),
          u()(),
          l(36, "mat-card-content", 6),
          p(37, " Coming soon "),
          u()()()()()()),
          r & 2 && (H(3), ie(e.title), H(4), dt("rowHeight", e.rowHeight));
      },
      dependencies: [Be, Un, Hn, $n, Bn, Gn, Pi, Wn],
      styles: [
        "mat-card[_ngcontent-%COMP%]{text-align:center}.container-card[_ngcontent-%COMP%]{height:85vh}.item-card[_ngcontent-%COMP%]{width:80%;height:80%;padding:5%}.project-card-content[_ngcontent-%COMP%]{overflow:hidden}mat-card-title[_ngcontent-%COMP%]{margin-bottom:1rem}",
      ],
    });
  };
var Qn = class i {
  static ɵfac = function (r) {
    return new (r || i)();
  };
  static ɵcmp = C({
    type: i,
    selectors: [["app-artwork"]],
    decls: 29,
    vars: 0,
    consts: [
      ["cols", "3"],
      [1, "image-card"],
      [
        "mat-card-image",
        "",
        "src",
        "images\\2d-arts\\20190510_213117.jpg",
        2,
        "width",
        "100%",
      ],
      [
        "mat-card-image",
        "",
        "src",
        "images\\2d-arts\\20191011_031313.jpg",
        2,
        "width",
        "100%",
      ],
      [
        "mat-card-image",
        "",
        "src",
        "images\\2d-arts\\20191011_031604.jpg",
        2,
        "width",
        "100%",
      ],
      [
        "mat-card-image",
        "",
        "src",
        "images\\2d-arts\\20210714_022552.jpg",
        2,
        "width",
        "100%",
      ],
      [
        "mat-card-image",
        "",
        "src",
        "images\\2d-arts\\20230108_140402.jpg",
        2,
        "width",
        "100%",
      ],
      [
        "mat-card-image",
        "",
        "src",
        "images\\2d-arts\\penup_1690585091435712.jpg",
        2,
        "width",
        "100%",
      ],
      [
        "mat-card-image",
        "",
        "src",
        "images\\2d-arts\\penup_1706318368879502.jpg",
        2,
        "width",
        "100%",
      ],
      [
        "mat-card-image",
        "",
        "src",
        "images\\2d-arts\\penup_1706318415146002.jpg",
        2,
        "width",
        "100%",
      ],
      [
        "mat-card-image",
        "",
        "src",
        "images\\2d-arts\\UpRightAngel.png",
        2,
        "width",
        "100%",
      ],
    ],
    template: function (r, e) {
      r & 1 &&
        (l(0, "mat-card")(1, "mat-grid-list", 0)(2, "mat-grid-tile")(
          3,
          "div",
          1,
        ),
        I(4, "img", 2),
        u()(),
        l(5, "mat-grid-tile")(6, "div", 1),
        I(7, "img", 3),
        u()(),
        l(8, "mat-grid-tile")(9, "div", 1),
        I(10, "img", 4),
        u()(),
        l(11, "mat-grid-tile")(12, "div", 1),
        I(13, "img", 5),
        u()(),
        l(14, "mat-grid-tile")(15, "div", 1),
        I(16, "img", 6),
        u()(),
        l(17, "mat-grid-tile")(18, "div", 1),
        I(19, "img", 7),
        u()(),
        l(20, "mat-grid-tile")(21, "div", 1),
        I(22, "img", 8),
        u()(),
        l(23, "mat-grid-tile")(24, "div", 1),
        I(25, "img", 9),
        u()(),
        l(26, "mat-grid-tile")(27, "div", 1),
        I(28, "img", 10),
        u()()()());
    },
    dependencies: [Be, $n, Gn, Pi],
    styles: [
      ".image-card[_ngcontent-%COMP%]:hover{width:85%;height:85%;transition:.5s;box-shadow:0 3px 5px -1px #0003,0 5px 8px #00000024,0 1px 14px #0000001f}.image-card[_ngcontent-%COMP%]{width:80%;height:80%;overflow:hidden;border-radius:3%;border:1px solid palevioletred;box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f;transition:.5s}",
    ],
  });
};
var Zn = class i {
  static ɵfac = function (r) {
    return new (r || i)();
  };
  static ɵcmp = C({
    type: i,
    selectors: [["app-others"]],
    decls: 2,
    vars: 0,
    template: function (r, e) {
      r & 1 && (l(0, "p"), p(1, "others works!"), u());
    },
  });
};
var Vc = ["mat-button", ""],
  zc = [
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
  Bc = [
    ".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])",
    "*",
    ".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]",
  ],
  tm =
    '.mat-mdc-button-base{text-decoration:none}.mdc-button{-webkit-user-select:none;user-select:none;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0);padding:0 8px}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__label{position:relative}.mat-mdc-button{padding:0 var(--mat-text-button-horizontal-padding, 8px);height:var(--mdc-text-button-container-height);font-family:var(--mdc-text-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-text-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-text-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-text-button-label-text-transform);font-weight:var(--mdc-text-button-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-button:has(.material-icons,mat-icon,[matButtonIcon]){padding:0 var(--mat-text-button-with-icon-horizontal-padding, 8px)}.mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}[dir=rtl] .mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}.mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}.mat-mdc-button .mat-ripple-element{background-color:var(--mat-text-button-ripple-color)}.mat-mdc-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-state-layer-color, var(--mat-app-primary))}.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-text-button-touch-target-display)}.mat-mdc-button,.mat-mdc-button .mdc-button__ripple{border-radius:var(--mdc-text-button-container-shape, var(--mat-app-corner-full))}.mat-mdc-button:not(:disabled){color:var(--mdc-text-button-label-text-color, var(--mat-app-primary))}.mat-mdc-button[disabled],.mat-mdc-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-unelevated-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 var(--mat-filled-button-horizontal-padding, 16px);height:var(--mdc-filled-button-container-height);font-family:var(--mdc-filled-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-filled-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-filled-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-filled-button-label-text-transform);font-weight:var(--mdc-filled-button-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}.mat-mdc-unelevated-button .mat-ripple-element{background-color:var(--mat-filled-button-ripple-color)}.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-state-layer-color, var(--mat-app-on-primary))}.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-unelevated-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-unelevated-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-unelevated-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-unelevated-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-filled-button-touch-target-display)}.mat-mdc-unelevated-button:not(:disabled){color:var(--mdc-filled-button-label-text-color, var(--mat-app-on-primary));background-color:var(--mdc-filled-button-container-color, var(--mat-app-primary))}.mat-mdc-unelevated-button,.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mdc-filled-button-container-shape, var(--mat-app-corner-full))}.mat-mdc-unelevated-button[disabled],.mat-mdc-unelevated-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-filled-button-disabled-label-text-color);background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-raised-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 var(--mat-protected-button-horizontal-padding, 16px);box-shadow:var(--mdc-protected-button-container-elevation-shadow, var(--mat-app-level1));height:var(--mdc-protected-button-container-height);font-family:var(--mdc-protected-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-protected-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-protected-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-protected-button-label-text-transform);font-weight:var(--mdc-protected-button-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}.mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}.mat-mdc-raised-button .mat-ripple-element{background-color:var(--mat-protected-button-ripple-color)}.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-state-layer-color, var(--mat-app-primary))}.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-raised-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-raised-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-raised-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-raised-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-protected-button-touch-target-display)}.mat-mdc-raised-button:not(:disabled){color:var(--mdc-protected-button-label-text-color, var(--mat-app-primary));background-color:var(--mdc-protected-button-container-color, var(--mat-app-surface))}.mat-mdc-raised-button,.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mdc-protected-button-container-shape, var(--mat-app-corner-full))}.mat-mdc-raised-button:hover{box-shadow:var(--mdc-protected-button-hover-container-elevation-shadow, var(--mat-app-level2))}.mat-mdc-raised-button:focus{box-shadow:var(--mdc-protected-button-focus-container-elevation-shadow, var(--mat-app-level1))}.mat-mdc-raised-button:active,.mat-mdc-raised-button:focus:active{box-shadow:var(--mdc-protected-button-pressed-container-elevation-shadow, var(--mat-app-level1))}.mat-mdc-raised-button[disabled],.mat-mdc-raised-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-protected-button-disabled-label-text-color);background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button[disabled].mat-mdc-button-disabled,.mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled{box-shadow:var(--mdc-protected-button-disabled-container-elevation-shadow, var(--mat-app-level0))}.mat-mdc-raised-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 var(--mat-outlined-button-horizontal-padding, 15px);height:var(--mdc-outlined-button-container-height);font-family:var(--mdc-outlined-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-outlined-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-outlined-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-outlined-button-label-text-transform);font-weight:var(--mdc-outlined-button-label-text-weight, var(--mat-app-label-large-weight));border-radius:var(--mdc-outlined-button-container-shape, var(--mat-app-corner-full));border-width:var(--mdc-outlined-button-outline-width)}.mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-outlined-button-ripple-color)}.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-state-layer-color, var(--mat-app-primary))}.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-outlined-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-outlined-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-outlined-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-outlined-button-touch-target-display)}.mat-mdc-outlined-button:not(:disabled){color:var(--mdc-outlined-button-label-text-color, var(--mat-app-primary));border-color:var(--mdc-outlined-button-outline-color, var(--mat-app-outline))}.mat-mdc-outlined-button[disabled],.mat-mdc-outlined-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-outlined-button-disabled-label-text-color);border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button .mdc-button__ripple{border-width:var(--mdc-outlined-button-outline-width);border-style:solid;border-color:rgba(0,0,0,0)}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-button .mdc-button__label,.mat-mdc-button .mat-icon,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-unelevated-button .mat-icon,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-raised-button .mat-icon,.mat-mdc-outlined-button .mdc-button__label,.mat-mdc-outlined-button .mat-icon{z-index:1;position:relative}.mat-mdc-button .mat-mdc-focus-indicator,.mat-mdc-unelevated-button .mat-mdc-focus-indicator,.mat-mdc-raised-button .mat-mdc-focus-indicator,.mat-mdc-outlined-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-unelevated-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-raised-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-outlined-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon{display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px}.mat-mdc-unelevated-button .mat-mdc-focus-indicator::before,.mat-mdc-raised-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-outlined-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 3px)*-1)}',
  em =
    ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}";
var im = new x("MAT_BUTTON_CONFIG");
var nm = [
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
  Uc = (() => {
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
      constructor(e, n, o, a) {
        (this._elementRef = e),
          (this._platform = n),
          (this._ngZone = o),
          (this._animationMode = a),
          (this._focusMonitor = v(he)),
          (this._rippleLoader = v(zn)),
          (this._isFab = !1),
          (this._disableRipple = !1),
          (this._disabled = !1);
        let s = v(im, { optional: !0 }),
          d = e.nativeElement,
          c = d.classList;
        (this.disabledInteractive = s?.disabledInteractive ?? !1),
          (this.color = s?.color ?? null),
          this._rippleLoader?.configureRipple(d, {
            className: "mat-mdc-button-ripple",
          });
        for (let { attribute: m, mdcClasses: f } of nm)
          d.hasAttribute(m) && c.add(...f);
      }
      ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef, !0);
      }
      ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef),
          this._rippleLoader?.destroyRipple(this._elementRef.nativeElement);
      }
      focus(e = "program", n) {
        e
          ? this._focusMonitor.focusVia(this._elementRef.nativeElement, e, n)
          : this._elementRef.nativeElement.focus(n);
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
    (t.ɵfac = function (n) {
      ee();
    }),
      (t.ɵdir = P({
        type: t,
        inputs: {
          color: "color",
          disableRipple: [2, "disableRipple", "disableRipple", Y],
          disabled: [2, "disabled", "disabled", Y],
          ariaDisabled: [2, "aria-disabled", "ariaDisabled", Y],
          disabledInteractive: [
            2,
            "disabledInteractive",
            "disabledInteractive",
            Y,
          ],
        },
        features: [mt],
      }));
    let i = t;
    return i;
  })();
var rm = (() => {
    let t = class t extends Uc {
      constructor(e, n, o, a) {
        super(e, n, o, a),
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
    (t.ɵfac = function (n) {
      ee();
    }),
      (t.ɵdir = P({
        type: t,
        inputs: {
          tabIndex: [
            2,
            "tabIndex",
            "tabIndex",
            (e) => (e == null ? void 0 : oi(e)),
          ],
        },
        features: [mt, gt],
      }));
    let i = t;
    return i;
  })(),
  Kn = (() => {
    let t = class t extends Uc {
      constructor(e, n, o, a) {
        super(e, n, o, a);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(h(k), h(Z), h(D), h(ft, 8));
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [
          ["button", "mat-button", ""],
          ["button", "mat-raised-button", ""],
          ["button", "mat-flat-button", ""],
          ["button", "mat-stroked-button", ""],
        ],
        hostVars: 14,
        hostBindings: function (n, o) {
          n & 2 &&
            (q("disabled", o._getDisabledAttribute())(
              "aria-disabled",
              o._getAriaDisabled(),
            ),
            Wt(o.color ? "mat-" + o.color : ""),
            $("mat-mdc-button-disabled", o.disabled)(
              "mat-mdc-button-disabled-interactive",
              o.disabledInteractive,
            )("_mat-animation-noopable", o._animationMode === "NoopAnimations")(
              "mat-unthemed",
              !o.color,
            )("mat-mdc-button-base", !0));
        },
        exportAs: ["matButton"],
        standalone: !0,
        features: [gt, V],
        attrs: Vc,
        ngContentSelectors: Bc,
        decls: 7,
        vars: 4,
        consts: [
          [1, "mat-mdc-button-persistent-ripple"],
          [1, "mdc-button__label"],
          [1, "mat-mdc-focus-indicator"],
          [1, "mat-mdc-button-touch-target"],
        ],
        template: function (n, o) {
          n & 1 &&
            (Q(zc),
            I(0, "span", 0),
            S(1),
            l(2, "span", 1),
            S(3, 1),
            u(),
            S(4, 2),
            I(5, "span", 2)(6, "span", 3)),
            n & 2 &&
              $("mdc-button__ripple", !o._isFab)("mdc-fab__ripple", o._isFab);
        },
        styles: [
          '.mat-mdc-button-base{text-decoration:none}.mdc-button{-webkit-user-select:none;user-select:none;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0);padding:0 8px}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__label{position:relative}.mat-mdc-button{padding:0 var(--mat-text-button-horizontal-padding, 8px);height:var(--mdc-text-button-container-height);font-family:var(--mdc-text-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-text-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-text-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-text-button-label-text-transform);font-weight:var(--mdc-text-button-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-button:has(.material-icons,mat-icon,[matButtonIcon]){padding:0 var(--mat-text-button-with-icon-horizontal-padding, 8px)}.mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}[dir=rtl] .mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}.mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}.mat-mdc-button .mat-ripple-element{background-color:var(--mat-text-button-ripple-color)}.mat-mdc-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-state-layer-color, var(--mat-app-primary))}.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-text-button-touch-target-display)}.mat-mdc-button,.mat-mdc-button .mdc-button__ripple{border-radius:var(--mdc-text-button-container-shape, var(--mat-app-corner-full))}.mat-mdc-button:not(:disabled){color:var(--mdc-text-button-label-text-color, var(--mat-app-primary))}.mat-mdc-button[disabled],.mat-mdc-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-unelevated-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 var(--mat-filled-button-horizontal-padding, 16px);height:var(--mdc-filled-button-container-height);font-family:var(--mdc-filled-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-filled-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-filled-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-filled-button-label-text-transform);font-weight:var(--mdc-filled-button-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}.mat-mdc-unelevated-button .mat-ripple-element{background-color:var(--mat-filled-button-ripple-color)}.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-state-layer-color, var(--mat-app-on-primary))}.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-unelevated-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-unelevated-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-unelevated-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-unelevated-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-filled-button-touch-target-display)}.mat-mdc-unelevated-button:not(:disabled){color:var(--mdc-filled-button-label-text-color, var(--mat-app-on-primary));background-color:var(--mdc-filled-button-container-color, var(--mat-app-primary))}.mat-mdc-unelevated-button,.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mdc-filled-button-container-shape, var(--mat-app-corner-full))}.mat-mdc-unelevated-button[disabled],.mat-mdc-unelevated-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-filled-button-disabled-label-text-color);background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-raised-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 var(--mat-protected-button-horizontal-padding, 16px);box-shadow:var(--mdc-protected-button-container-elevation-shadow, var(--mat-app-level1));height:var(--mdc-protected-button-container-height);font-family:var(--mdc-protected-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-protected-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-protected-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-protected-button-label-text-transform);font-weight:var(--mdc-protected-button-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}.mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}.mat-mdc-raised-button .mat-ripple-element{background-color:var(--mat-protected-button-ripple-color)}.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-state-layer-color, var(--mat-app-primary))}.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-raised-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-raised-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-raised-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-raised-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-protected-button-touch-target-display)}.mat-mdc-raised-button:not(:disabled){color:var(--mdc-protected-button-label-text-color, var(--mat-app-primary));background-color:var(--mdc-protected-button-container-color, var(--mat-app-surface))}.mat-mdc-raised-button,.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mdc-protected-button-container-shape, var(--mat-app-corner-full))}.mat-mdc-raised-button:hover{box-shadow:var(--mdc-protected-button-hover-container-elevation-shadow, var(--mat-app-level2))}.mat-mdc-raised-button:focus{box-shadow:var(--mdc-protected-button-focus-container-elevation-shadow, var(--mat-app-level1))}.mat-mdc-raised-button:active,.mat-mdc-raised-button:focus:active{box-shadow:var(--mdc-protected-button-pressed-container-elevation-shadow, var(--mat-app-level1))}.mat-mdc-raised-button[disabled],.mat-mdc-raised-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-protected-button-disabled-label-text-color);background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button[disabled].mat-mdc-button-disabled,.mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled{box-shadow:var(--mdc-protected-button-disabled-container-elevation-shadow, var(--mat-app-level0))}.mat-mdc-raised-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 var(--mat-outlined-button-horizontal-padding, 15px);height:var(--mdc-outlined-button-container-height);font-family:var(--mdc-outlined-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-outlined-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-outlined-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-outlined-button-label-text-transform);font-weight:var(--mdc-outlined-button-label-text-weight, var(--mat-app-label-large-weight));border-radius:var(--mdc-outlined-button-container-shape, var(--mat-app-corner-full));border-width:var(--mdc-outlined-button-outline-width)}.mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-outlined-button-ripple-color)}.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-state-layer-color, var(--mat-app-primary))}.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-outlined-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-outlined-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-outlined-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-outlined-button-touch-target-display)}.mat-mdc-outlined-button:not(:disabled){color:var(--mdc-outlined-button-label-text-color, var(--mat-app-primary));border-color:var(--mdc-outlined-button-outline-color, var(--mat-app-outline))}.mat-mdc-outlined-button[disabled],.mat-mdc-outlined-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-outlined-button-disabled-label-text-color);border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button .mdc-button__ripple{border-width:var(--mdc-outlined-button-outline-width);border-style:solid;border-color:rgba(0,0,0,0)}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-button .mdc-button__label,.mat-mdc-button .mat-icon,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-unelevated-button .mat-icon,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-raised-button .mat-icon,.mat-mdc-outlined-button .mdc-button__label,.mat-mdc-outlined-button .mat-icon{z-index:1;position:relative}.mat-mdc-button .mat-mdc-focus-indicator,.mat-mdc-unelevated-button .mat-mdc-focus-indicator,.mat-mdc-raised-button .mat-mdc-focus-indicator,.mat-mdc-outlined-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-unelevated-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-raised-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-outlined-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon{display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px}.mat-mdc-unelevated-button .mat-mdc-focus-indicator::before,.mat-mdc-raised-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-outlined-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 3px)*-1)}',
          ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })(),
  Hc = (() => {
    let t = class t extends rm {
      constructor(e, n, o, a) {
        super(e, n, o, a);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(h(k), h(Z), h(D), h(ft, 8));
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [
          ["a", "mat-button", ""],
          ["a", "mat-raised-button", ""],
          ["a", "mat-flat-button", ""],
          ["a", "mat-stroked-button", ""],
        ],
        hostVars: 15,
        hostBindings: function (n, o) {
          n & 2 &&
            (q("disabled", o._getDisabledAttribute())(
              "tabindex",
              o.disabled && !o.disabledInteractive ? -1 : o.tabIndex,
            )("aria-disabled", o._getDisabledAttribute()),
            Wt(o.color ? "mat-" + o.color : ""),
            $("mat-mdc-button-disabled", o.disabled)(
              "mat-mdc-button-disabled-interactive",
              o.disabledInteractive,
            )("_mat-animation-noopable", o._animationMode === "NoopAnimations")(
              "mat-unthemed",
              !o.color,
            )("mat-mdc-button-base", !0));
        },
        exportAs: ["matButton", "matAnchor"],
        standalone: !0,
        features: [gt, V],
        attrs: Vc,
        ngContentSelectors: Bc,
        decls: 7,
        vars: 4,
        consts: [
          [1, "mat-mdc-button-persistent-ripple"],
          [1, "mdc-button__label"],
          [1, "mat-mdc-focus-indicator"],
          [1, "mat-mdc-button-touch-target"],
        ],
        template: function (n, o) {
          n & 1 &&
            (Q(zc),
            I(0, "span", 0),
            S(1),
            l(2, "span", 1),
            S(3, 1),
            u(),
            S(4, 2),
            I(5, "span", 2)(6, "span", 3)),
            n & 2 &&
              $("mdc-button__ripple", !o._isFab)("mdc-fab__ripple", o._isFab);
        },
        styles: [tm, em],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })();
var $c = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = F({ type: t })),
    (t.ɵinj = T({ imports: [K, Jo, K] }));
  let i = t;
  return i;
})();
function Zt(i) {
  return (
    i == null || ((typeof i == "string" || Array.isArray(i)) && i.length === 0)
  );
}
function Xc(i) {
  return i != null && typeof i.length == "number";
}
var Jc = new x(""),
  td = new x(""),
  om =
    /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  Xn = class {
    static min(t) {
      return am(t);
    }
    static max(t) {
      return sm(t);
    }
    static required(t) {
      return cm(t);
    }
    static requiredTrue(t) {
      return dm(t);
    }
    static email(t) {
      return lm(t);
    }
    static minLength(t) {
      return um(t);
    }
    static maxLength(t) {
      return hm(t);
    }
    static pattern(t) {
      return mm(t);
    }
    static nullValidator(t) {
      return ed(t);
    }
    static compose(t) {
      return sd(t);
    }
    static composeAsync(t) {
      return cd(t);
    }
  };
function am(i) {
  return (t) => {
    if (Zt(t.value) || Zt(i)) return null;
    let r = parseFloat(t.value);
    return !isNaN(r) && r < i ? { min: { min: i, actual: t.value } } : null;
  };
}
function sm(i) {
  return (t) => {
    if (Zt(t.value) || Zt(i)) return null;
    let r = parseFloat(t.value);
    return !isNaN(r) && r > i ? { max: { max: i, actual: t.value } } : null;
  };
}
function cm(i) {
  return Zt(i.value) ? { required: !0 } : null;
}
function dm(i) {
  return i.value === !0 ? null : { required: !0 };
}
function lm(i) {
  return Zt(i.value) || om.test(i.value) ? null : { email: !0 };
}
function um(i) {
  return (t) =>
    Zt(t.value) || !Xc(t.value)
      ? null
      : t.value.length < i
        ? { minlength: { requiredLength: i, actualLength: t.value.length } }
        : null;
}
function hm(i) {
  return (t) =>
    Xc(t.value) && t.value.length > i
      ? { maxlength: { requiredLength: i, actualLength: t.value.length } }
      : null;
}
function mm(i) {
  if (!i) return ed;
  let t, r;
  return (
    typeof i == "string"
      ? ((r = ""),
        i.charAt(0) !== "^" && (r += "^"),
        (r += i),
        i.charAt(i.length - 1) !== "$" && (r += "$"),
        (t = new RegExp(r)))
      : ((r = i.toString()), (t = i)),
    (e) => {
      if (Zt(e.value)) return null;
      let n = e.value;
      return t.test(n)
        ? null
        : { pattern: { requiredPattern: r, actualValue: n } };
    }
  );
}
function ed(i) {
  return null;
}
function id(i) {
  return i != null;
}
function nd(i) {
  return rn(i) ? st(i) : i;
}
function rd(i) {
  let t = {};
  return (
    i.forEach((r) => {
      t = r != null ? g(g({}, t), r) : t;
    }),
    Object.keys(t).length === 0 ? null : t
  );
}
function od(i, t) {
  return t.map((r) => r(i));
}
function pm(i) {
  return !i.validate;
}
function ad(i) {
  return i.map((t) => (pm(t) ? t : (r) => t.validate(r)));
}
function sd(i) {
  if (!i) return null;
  let t = i.filter(id);
  return t.length == 0
    ? null
    : function (r) {
        return rd(od(r, t));
      };
}
function la(i) {
  return i != null ? sd(ad(i)) : null;
}
function cd(i) {
  if (!i) return null;
  let t = i.filter(id);
  return t.length == 0
    ? null
    : function (r) {
        let e = od(r, t).map(nd);
        return Ia(e).pipe(A(rd));
      };
}
function ua(i) {
  return i != null ? cd(ad(i)) : null;
}
function Wc(i, t) {
  return i === null ? [t] : Array.isArray(i) ? [...i, t] : [i, t];
}
function dd(i) {
  return i._rawValidators;
}
function ld(i) {
  return i._rawAsyncValidators;
}
function aa(i) {
  return i ? (Array.isArray(i) ? i : [i]) : [];
}
function Jn(i, t) {
  return Array.isArray(i) ? i.includes(t) : i === t;
}
function qc(i, t) {
  let r = aa(t);
  return (
    aa(i).forEach((n) => {
      Jn(r, n) || r.push(n);
    }),
    r
  );
}
function Qc(i, t) {
  return aa(t).filter((r) => !Jn(i, r));
}
var tr = class {
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
        (this._composedValidatorFn = la(this._rawValidators));
    }
    _setAsyncValidators(t) {
      (this._rawAsyncValidators = t || []),
        (this._composedAsyncValidatorFn = ua(this._rawAsyncValidators));
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
  Ge = class extends tr {
    get formDirective() {
      return null;
    }
    get path() {
      return null;
    }
  },
  er = class extends tr {
    constructor() {
      super(...arguments),
        (this._parent = null),
        (this.name = null),
        (this.valueAccessor = null);
    }
  };
var fm = {
    "[class.ng-untouched]": "isUntouched",
    "[class.ng-touched]": "isTouched",
    "[class.ng-pristine]": "isPristine",
    "[class.ng-dirty]": "isDirty",
    "[class.ng-valid]": "isValid",
    "[class.ng-invalid]": "isInvalid",
    "[class.ng-pending]": "isPending",
  },
  wv = U(g({}, fm), { "[class.ng-submitted]": "isSubmitted" });
var Li = "VALID",
  Yn = "INVALID",
  He = "PENDING",
  ji = "DISABLED",
  Kt = class {},
  ir = class extends Kt {
    constructor(t, r) {
      super(), (this.value = t), (this.source = r);
    }
  },
  zi = class extends Kt {
    constructor(t, r) {
      super(), (this.pristine = t), (this.source = r);
    }
  },
  Bi = class extends Kt {
    constructor(t, r) {
      super(), (this.touched = t), (this.source = r);
    }
  },
  $e = class extends Kt {
    constructor(t, r) {
      super(), (this.status = t), (this.source = r);
    }
  },
  sa = class extends Kt {
    constructor(t) {
      super(), (this.source = t);
    }
  },
  ca = class extends Kt {
    constructor(t) {
      super(), (this.source = t);
    }
  };
function ud(i) {
  return (sr(i) ? i.validators : i) || null;
}
function gm(i) {
  return Array.isArray(i) ? la(i) : i || null;
}
function hd(i, t) {
  return (sr(t) ? t.asyncValidators : i) || null;
}
function vm(i) {
  return Array.isArray(i) ? ua(i) : i || null;
}
function sr(i) {
  return i != null && !Array.isArray(i) && typeof i == "object";
}
function bm(i, t, r) {
  let e = i.controls;
  if (!(t ? Object.keys(e) : e).length) throw new G(1e3, "");
  if (!e[r]) throw new G(1001, "");
}
function _m(i, t, r) {
  i._forEachChild((e, n) => {
    if (r[n] === void 0) throw new G(1002, "");
  });
}
var nr = class {
    constructor(t, r) {
      (this._pendingDirty = !1),
        (this._hasOwnPendingAsyncValidator = null),
        (this._pendingTouched = !1),
        (this._onCollectionChange = () => {}),
        (this._parent = null),
        (this._status = Ee(() => this.statusReactive())),
        (this.statusReactive = Ie(void 0)),
        (this._pristine = Ee(() => this.pristineReactive())),
        (this.pristineReactive = Ie(!0)),
        (this._touched = Ee(() => this.touchedReactive())),
        (this.touchedReactive = Ie(!1)),
        (this._events = new M()),
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
      return Nt(this.statusReactive);
    }
    set status(t) {
      Nt(() => this.statusReactive.set(t));
    }
    get valid() {
      return this.status === Li;
    }
    get invalid() {
      return this.status === Yn;
    }
    get pending() {
      return this.status == He;
    }
    get disabled() {
      return this.status === ji;
    }
    get enabled() {
      return this.status !== ji;
    }
    get pristine() {
      return Nt(this.pristineReactive);
    }
    set pristine(t) {
      Nt(() => this.pristineReactive.set(t));
    }
    get dirty() {
      return !this.pristine;
    }
    get touched() {
      return Nt(this.touchedReactive);
    }
    set touched(t) {
      Nt(() => this.touchedReactive.set(t));
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
      this.setValidators(qc(t, this._rawValidators));
    }
    addAsyncValidators(t) {
      this.setAsyncValidators(qc(t, this._rawAsyncValidators));
    }
    removeValidators(t) {
      this.setValidators(Qc(t, this._rawValidators));
    }
    removeAsyncValidators(t) {
      this.setAsyncValidators(Qc(t, this._rawAsyncValidators));
    }
    hasValidator(t) {
      return Jn(this._rawValidators, t);
    }
    hasAsyncValidator(t) {
      return Jn(this._rawAsyncValidators, t);
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
        this._parent.markAsTouched(U(g({}, t), { sourceControl: e })),
        r && t.emitEvent !== !1 && this._events.next(new Bi(!0, e));
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
      this._forEachChild((n) => {
        n.markAsUntouched({
          onlySelf: !0,
          emitEvent: t.emitEvent,
          sourceControl: e,
        });
      }),
        this._parent && !t.onlySelf && this._parent._updateTouched(t, e),
        r && t.emitEvent !== !1 && this._events.next(new Bi(!1, e));
    }
    markAsDirty(t = {}) {
      let r = this.pristine === !0;
      this.pristine = !1;
      let e = t.sourceControl ?? this;
      this._parent &&
        !t.onlySelf &&
        this._parent.markAsDirty(U(g({}, t), { sourceControl: e })),
        r && t.emitEvent !== !1 && this._events.next(new zi(!1, e));
    }
    markAsPristine(t = {}) {
      let r = this.pristine === !1;
      (this.pristine = !0), (this._pendingDirty = !1);
      let e = t.sourceControl ?? this;
      this._forEachChild((n) => {
        n.markAsPristine({ onlySelf: !0, emitEvent: t.emitEvent });
      }),
        this._parent && !t.onlySelf && this._parent._updatePristine(t, e),
        r && t.emitEvent !== !1 && this._events.next(new zi(!0, e));
    }
    markAsPending(t = {}) {
      this.status = He;
      let r = t.sourceControl ?? this;
      t.emitEvent !== !1 &&
        (this._events.next(new $e(this.status, r)),
        this.statusChanges.emit(this.status)),
        this._parent &&
          !t.onlySelf &&
          this._parent.markAsPending(U(g({}, t), { sourceControl: r }));
    }
    disable(t = {}) {
      let r = this._parentMarkedDirty(t.onlySelf);
      (this.status = ji),
        (this.errors = null),
        this._forEachChild((n) => {
          n.disable(U(g({}, t), { onlySelf: !0 }));
        }),
        this._updateValue();
      let e = t.sourceControl ?? this;
      t.emitEvent !== !1 &&
        (this._events.next(new ir(this.value, e)),
        this._events.next(new $e(this.status, e)),
        this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._updateAncestors(U(g({}, t), { skipPristineCheck: r }), this),
        this._onDisabledChange.forEach((n) => n(!0));
    }
    enable(t = {}) {
      let r = this._parentMarkedDirty(t.onlySelf);
      (this.status = Li),
        this._forEachChild((e) => {
          e.enable(U(g({}, t), { onlySelf: !0 }));
        }),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent }),
        this._updateAncestors(U(g({}, t), { skipPristineCheck: r }), this),
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
          (this.status === Li || this.status === He) &&
            this._runAsyncValidator(e, t.emitEvent);
      }
      let r = t.sourceControl ?? this;
      t.emitEvent !== !1 &&
        (this._events.next(new ir(this.value, r)),
        this._events.next(new $e(this.status, r)),
        this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._parent &&
          !t.onlySelf &&
          this._parent.updateValueAndValidity(
            U(g({}, t), { sourceControl: r }),
          );
    }
    _updateTreeValidity(t = { emitEvent: !0 }) {
      this._forEachChild((r) => r._updateTreeValidity(t)),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent });
    }
    _setInitialStatus() {
      this.status = this._allControlsDisabled() ? ji : Li;
    }
    _runValidator() {
      return this.validator ? this.validator(this) : null;
    }
    _runAsyncValidator(t, r) {
      if (this.asyncValidator) {
        (this.status = He),
          (this._hasOwnPendingAsyncValidator = { emitEvent: r !== !1 });
        let e = nd(this.asyncValidator(this));
        this._asyncValidationSubscription = e.subscribe((n) => {
          (this._hasOwnPendingAsyncValidator = null),
            this.setErrors(n, { emitEvent: r, shouldHaveEmitted: t });
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
        : r.reduce((e, n) => e && e._find(n), this);
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
        (t || e) && this._events.next(new $e(this.status, r)),
        this._parent && this._parent._updateControlsErrors(t, r, e);
    }
    _initObservables() {
      (this.valueChanges = new W()), (this.statusChanges = new W());
    }
    _calculateStatus() {
      return this._allControlsDisabled()
        ? ji
        : this.errors
          ? Yn
          : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(He)
            ? He
            : this._anyControlsHaveStatus(Yn)
              ? Yn
              : Li;
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
        n = this.pristine !== e;
      (this.pristine = e),
        this._parent && !t.onlySelf && this._parent._updatePristine(t, r),
        n && this._events.next(new zi(this.pristine, r));
    }
    _updateTouched(t = {}, r) {
      (this.touched = this._anyControlsTouched()),
        this._events.next(new Bi(this.touched, r)),
        this._parent && !t.onlySelf && this._parent._updateTouched(t, r);
    }
    _registerOnCollectionChange(t) {
      this._onCollectionChange = t;
    }
    _setUpdateStrategy(t) {
      sr(t) && t.updateOn != null && (this._updateOn = t.updateOn);
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
        (this._composedValidatorFn = gm(this._rawValidators));
    }
    _assignAsyncValidators(t) {
      (this._rawAsyncValidators = Array.isArray(t) ? t.slice() : t),
        (this._composedAsyncValidatorFn = vm(this._rawAsyncValidators));
    }
  },
  rr = class extends nr {
    constructor(t, r, e) {
      super(ud(r), hd(e, r)),
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
      _m(this, !0, t),
        Object.keys(t).forEach((e) => {
          bm(this, !0, e),
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
          let n = this.controls[e];
          n && n.patchValue(t[e], { onlySelf: !0, emitEvent: r.emitEvent });
        }),
        this.updateValueAndValidity(r));
    }
    reset(t = {}, r = {}) {
      this._forEachChild((e, n) => {
        e.reset(t ? t[n] : null, { onlySelf: !0, emitEvent: r.emitEvent });
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
        (r, e, n) => ((e.enabled || this.disabled) && (r[n] = e.value), r),
      );
    }
    _reduceChildren(t, r) {
      let e = t;
      return (
        this._forEachChild((n, o) => {
          e = r(e, n, o);
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
var md = new x("CallSetDisabledState", {
    providedIn: "root",
    factory: () => pd,
  }),
  pd = "always";
function da(i, t, r = pd) {
  ha(i, t),
    t.valueAccessor.writeValue(i.value),
    (i.disabled || r === "always") &&
      t.valueAccessor.setDisabledState?.(i.disabled),
    wm(i, t),
    Cm(i, t),
    xm(i, t),
    ym(i, t);
}
function Zc(i, t, r = !0) {
  let e = () => {};
  t.valueAccessor &&
    (t.valueAccessor.registerOnChange(e), t.valueAccessor.registerOnTouched(e)),
    ar(i, t),
    i &&
      (t._invokeOnDestroyCallbacks(), i._registerOnCollectionChange(() => {}));
}
function or(i, t) {
  i.forEach((r) => {
    r.registerOnValidatorChange && r.registerOnValidatorChange(t);
  });
}
function ym(i, t) {
  if (t.valueAccessor.setDisabledState) {
    let r = (e) => {
      t.valueAccessor.setDisabledState(e);
    };
    i.registerOnDisabledChange(r),
      t._registerOnDestroy(() => {
        i._unregisterOnDisabledChange(r);
      });
  }
}
function ha(i, t) {
  let r = dd(i);
  t.validator !== null
    ? i.setValidators(Wc(r, t.validator))
    : typeof r == "function" && i.setValidators([r]);
  let e = ld(i);
  t.asyncValidator !== null
    ? i.setAsyncValidators(Wc(e, t.asyncValidator))
    : typeof e == "function" && i.setAsyncValidators([e]);
  let n = () => i.updateValueAndValidity();
  or(t._rawValidators, n), or(t._rawAsyncValidators, n);
}
function ar(i, t) {
  let r = !1;
  if (i !== null) {
    if (t.validator !== null) {
      let n = dd(i);
      if (Array.isArray(n) && n.length > 0) {
        let o = n.filter((a) => a !== t.validator);
        o.length !== n.length && ((r = !0), i.setValidators(o));
      }
    }
    if (t.asyncValidator !== null) {
      let n = ld(i);
      if (Array.isArray(n) && n.length > 0) {
        let o = n.filter((a) => a !== t.asyncValidator);
        o.length !== n.length && ((r = !0), i.setAsyncValidators(o));
      }
    }
  }
  let e = () => {};
  return or(t._rawValidators, e), or(t._rawAsyncValidators, e), r;
}
function wm(i, t) {
  t.valueAccessor.registerOnChange((r) => {
    (i._pendingValue = r),
      (i._pendingChange = !0),
      (i._pendingDirty = !0),
      i.updateOn === "change" && fd(i, t);
  });
}
function xm(i, t) {
  t.valueAccessor.registerOnTouched(() => {
    (i._pendingTouched = !0),
      i.updateOn === "blur" && i._pendingChange && fd(i, t),
      i.updateOn !== "submit" && i.markAsTouched();
  });
}
function fd(i, t) {
  i._pendingDirty && i.markAsDirty(),
    i.setValue(i._pendingValue, { emitModelToViewChange: !1 }),
    t.viewToModelUpdate(i._pendingValue),
    (i._pendingChange = !1);
}
function Cm(i, t) {
  let r = (e, n) => {
    t.valueAccessor.writeValue(e), n && t.viewToModelUpdate(e);
  };
  i.registerOnChange(r),
    t._registerOnDestroy(() => {
      i._unregisterOnChange(r);
    });
}
function gd(i, t) {
  i == null, ha(i, t);
}
function Im(i, t) {
  return ar(i, t);
}
function vd(i, t) {
  i._syncPendingControls(),
    t.forEach((r) => {
      let e = r.control;
      e.updateOn === "submit" &&
        e._pendingChange &&
        (r.viewToModelUpdate(e._pendingValue), (e._pendingChange = !1));
    });
}
function Em(i, t) {
  let r = i.indexOf(t);
  r > -1 && i.splice(r, 1);
}
var Sm = { provide: Ge, useExisting: we(() => ma) },
  Vi = Promise.resolve(),
  ma = (() => {
    let t = class t extends Ge {
      get submitted() {
        return Nt(this.submittedReactive);
      }
      constructor(e, n, o) {
        super(),
          (this.callSetDisabledState = o),
          (this._submitted = Ee(() => this.submittedReactive())),
          (this.submittedReactive = Ie(!1)),
          (this._directives = new Set()),
          (this.ngSubmit = new W()),
          (this.form = new rr({}, la(e), ua(n)));
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
        Vi.then(() => {
          let n = this._findContainer(e.path);
          (e.control = n.registerControl(e.name, e.control)),
            da(e.control, e, this.callSetDisabledState),
            e.control.updateValueAndValidity({ emitEvent: !1 }),
            this._directives.add(e);
        });
      }
      getControl(e) {
        return this.form.get(e.path);
      }
      removeControl(e) {
        Vi.then(() => {
          let n = this._findContainer(e.path);
          n && n.removeControl(e.name), this._directives.delete(e);
        });
      }
      addFormGroup(e) {
        Vi.then(() => {
          let n = this._findContainer(e.path),
            o = new rr({});
          gd(o, e),
            n.registerControl(e.name, o),
            o.updateValueAndValidity({ emitEvent: !1 });
        });
      }
      removeFormGroup(e) {
        Vi.then(() => {
          let n = this._findContainer(e.path);
          n && n.removeControl(e.name);
        });
      }
      getFormGroup(e) {
        return this.form.get(e.path);
      }
      updateModel(e, n) {
        Vi.then(() => {
          this.form.get(e.path).setValue(n);
        });
      }
      setValue(e) {
        this.control.setValue(e);
      }
      onSubmit(e) {
        return (
          this.submittedReactive.set(!0),
          vd(this.form, this._directives),
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
    (t.ɵfac = function (n) {
      return new (n || t)(h(Jc, 10), h(td, 10), h(md, 8));
    }),
      (t.ɵdir = P({
        type: t,
        selectors: [
          ["form", 3, "ngNoForm", "", 3, "formGroup", ""],
          ["ng-form"],
          ["", "ngForm", ""],
        ],
        hostBindings: function (n, o) {
          n & 1 &&
            et("submit", function (s) {
              return o.onSubmit(s);
            })("reset", function () {
              return o.onReset();
            });
        },
        inputs: { options: [0, "ngFormOptions", "options"] },
        outputs: { ngSubmit: "ngSubmit" },
        exportAs: ["ngForm"],
        features: [lt([Sm]), gt],
      }));
    let i = t;
    return i;
  })();
function Kc(i, t) {
  let r = i.indexOf(t);
  r > -1 && i.splice(r, 1);
}
function Yc(i) {
  return (
    typeof i == "object" &&
    i !== null &&
    Object.keys(i).length === 2 &&
    "value" in i &&
    "disabled" in i
  );
}
var Dm = class extends nr {
  constructor(t = null, r, e) {
    super(ud(r), hd(e, r)),
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
      sr(r) &&
        (r.nonNullable || r.initialValueIsDefault) &&
        (Yc(t) ? (this.defaultValue = t.value) : (this.defaultValue = t));
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
    Kc(this._onChange, t);
  }
  registerOnDisabledChange(t) {
    this._onDisabledChange.push(t);
  }
  _unregisterOnDisabledChange(t) {
    Kc(this._onDisabledChange, t);
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
    Yc(t)
      ? ((this.value = this._pendingValue = t.value),
        t.disabled
          ? this.disable({ onlySelf: !0, emitEvent: !1 })
          : this.enable({ onlySelf: !0, emitEvent: !1 }))
      : (this.value = this._pendingValue = t);
  }
};
var Mm = (i) => i instanceof Dm;
var Am = { provide: Ge, useExisting: we(() => pa) },
  pa = (() => {
    let t = class t extends Ge {
      get submitted() {
        return Nt(this._submittedReactive);
      }
      set submitted(e) {
        this._submittedReactive.set(e);
      }
      constructor(e, n, o) {
        super(),
          (this.callSetDisabledState = o),
          (this._submitted = Ee(() => this._submittedReactive())),
          (this._submittedReactive = Ie(!1)),
          (this._onCollectionChange = () => this._updateDomValue()),
          (this.directives = []),
          (this.form = null),
          (this.ngSubmit = new W()),
          this._setValidators(e),
          this._setAsyncValidators(n);
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
          (ar(this.form, this),
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
        let n = this.form.get(e.path);
        return (
          da(n, e, this.callSetDisabledState),
          n.updateValueAndValidity({ emitEvent: !1 }),
          this.directives.push(e),
          n
        );
      }
      getControl(e) {
        return this.form.get(e.path);
      }
      removeControl(e) {
        Zc(e.control || null, e, !1), Em(this.directives, e);
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
      updateModel(e, n) {
        this.form.get(e.path).setValue(n);
      }
      onSubmit(e) {
        return (
          this._submittedReactive.set(!0),
          vd(this.form, this.directives),
          this.ngSubmit.emit(e),
          this.form._events.next(new sa(this.control)),
          e?.target?.method === "dialog"
        );
      }
      onReset() {
        this.resetForm();
      }
      resetForm(e = void 0) {
        this.form.reset(e),
          this._submittedReactive.set(!1),
          this.form._events.next(new ca(this.form));
      }
      _updateDomValue() {
        this.directives.forEach((e) => {
          let n = e.control,
            o = this.form.get(e.path);
          n !== o &&
            (Zc(n || null, e),
            Mm(o) && (da(o, e, this.callSetDisabledState), (e.control = o)));
        }),
          this.form._updateTreeValidity({ emitEvent: !1 });
      }
      _setUpFormContainer(e) {
        let n = this.form.get(e.path);
        gd(n, e), n.updateValueAndValidity({ emitEvent: !1 });
      }
      _cleanUpFormContainer(e) {
        if (this.form) {
          let n = this.form.get(e.path);
          n && Im(n, e) && n.updateValueAndValidity({ emitEvent: !1 });
        }
      }
      _updateRegistrations() {
        this.form._registerOnCollectionChange(this._onCollectionChange),
          this._oldForm && this._oldForm._registerOnCollectionChange(() => {});
      }
      _updateValidators() {
        ha(this.form, this), this._oldForm && ar(this._oldForm, this);
      }
      _checkFormPresent() {
        this.form;
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(h(Jc, 10), h(td, 10), h(md, 8));
    }),
      (t.ɵdir = P({
        type: t,
        selectors: [["", "formGroup", ""]],
        hostBindings: function (n, o) {
          n & 1 &&
            et("submit", function (s) {
              return o.onSubmit(s);
            })("reset", function () {
              return o.onReset();
            });
        },
        inputs: { form: [0, "formGroup", "form"] },
        outputs: { ngSubmit: "ngSubmit" },
        exportAs: ["ngForm"],
        features: [lt([Am]), gt, Ft],
      }));
    let i = t;
    return i;
  })();
var bd = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵdir = P({ type: t }));
  let i = t;
  return i;
})();
var Om = [
    "*",
    [["mat-chip-avatar"], ["", "matChipAvatar", ""]],
    [
      ["mat-chip-trailing-icon"],
      ["", "matChipRemove", ""],
      ["", "matChipTrailingIcon", ""],
    ],
  ],
  Nm = [
    "*",
    "mat-chip-avatar, [matChipAvatar]",
    "mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]",
  ];
function Pm(i, t) {
  i & 1 && (l(0, "span", 3), S(1, 1), u());
}
function Lm(i, t) {
  i & 1 && (l(0, "span", 6), S(1, 2), u());
}
var jm =
    '.mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{flex-basis:100%;overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}.mdc-evolution-chip__action--primary{font:inherit;letter-spacing:inherit;white-space:inherit;overflow-x:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before{border-width:var(--mdc-chip-outline-width);border-radius:var(--mdc-chip-container-shape-radius);box-sizing:border-box;content:"";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1;border-style:solid}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before{border-color:var(--mdc-chip-outline-color, var(--mat-app-outline))}.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before{border-color:var(--mdc-chip-focus-outline-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before{border-color:var(--mdc-chip-disabled-outline-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before{border-width:var(--mdc-chip-flat-selected-outline-width)}.mat-mdc-basic-chip .mdc-evolution-chip__action--primary{font:inherit}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip__action--trailing{position:relative;overflow:visible}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--trailing{color:var(--mdc-chip-with-trailing-icon-trailing-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--trailing{color:var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-app-on-surface))}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip__text-label{-webkit-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__text-label{font-family:var(--mdc-chip-label-text-font, var(--mat-app-label-large-font));line-height:var(--mdc-chip-label-text-line-height, var(--mat-app-label-large-line-height));font-size:var(--mdc-chip-label-text-size, var(--mat-app-label-large-size));font-weight:var(--mdc-chip-label-text-weight, var(--mat-app-label-large-weight));letter-spacing:var(--mdc-chip-label-text-tracking, var(--mat-app-label-large-tracking))}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mdc-chip-label-text-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mdc-chip-selected-label-text-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label{color:var(--mdc-chip-disabled-label-text-color)}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mat-mdc-standard-chip .mdc-evolution-chip__graphic{width:var(--mdc-chip-with-avatar-avatar-size);height:var(--mdc-chip-with-avatar-avatar-size);font-size:var(--mdc-chip-with-avatar-avatar-size)}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%;height:20px;width:20px}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark{color:var(--mdc-chip-with-icon-selected-icon-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark{color:var(--mdc-chip-with-icon-disabled-icon-color, var(--mat-app-on-surface))}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%, -50%);opacity:1}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}.cdk-high-contrast-active .mdc-evolution-chip__checkmark-path{stroke:CanvasText !important}.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing{height:18px;width:18px;font-size:18px}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove{opacity:calc(var(--mat-chip-trailing-action-opacity)*var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity))}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus{opacity:calc(var(--mat-chip-trailing-action-focus-opacity)*var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity))}.mat-mdc-standard-chip{border-radius:var(--mdc-chip-container-shape-radius);height:var(--mdc-chip-container-height)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled){background-color:var(--mdc-chip-elevated-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{background-color:var(--mdc-chip-elevated-disabled-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled){background-color:var(--mdc-chip-elevated-selected-container-color, var(--mat-app-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled{background-color:var(--mdc-chip-flat-disabled-selected-container-color)}.cdk-high-contrast-active .mat-mdc-standard-chip{outline:solid 1px}.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary{border-radius:var(--mdc-chip-with-avatar-avatar-shape-radius);width:var(--mdc-chip-with-icon-icon-size);height:var(--mdc-chip-with-icon-icon-size);font-size:var(--mdc-chip-with-icon-icon-size)}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary{color:var(--mdc-chip-with-icon-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary{color:var(--mdc-chip-with-icon-disabled-icon-color, var(--mat-app-on-surface))}.mat-mdc-chip-highlighted{--mdc-chip-with-icon-icon-color:var(--mdc-chip-with-icon-selected-icon-color, var(--mat-app-on-secondary-container));--mdc-chip-elevated-container-color:var(--mdc-chip-elevated-selected-container-color, var(--mat-app-secondary-container));--mdc-chip-label-text-color:var(--mdc-chip-selected-label-text-color, var(--mat-app-on-secondary-container));--mdc-chip-outline-width:var(--mdc-chip-flat-selected-outline-width)}.mat-mdc-chip-focus-overlay{background:var(--mdc-chip-focus-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-focus-state-layer-color, var(--mat-app-on-secondary-container))}.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-hover-state-layer-color, var(--mat-app-on-surface-variant));opacity:var(--mdc-chip-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover,.mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-hover-state-layer-color, var(--mat-app-on-secondary-container));opacity:var(--mdc-chip-selected-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-focus-state-layer-color, var(--mat-app-on-surface-variant));opacity:var(--mdc-chip-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-focus-state-layer-color, var(--mat-app-on-secondary-container));opacity:var(--mdc-chip-selected-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar{opacity:var(--mdc-chip-with-avatar-disabled-avatar-opacity)}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{opacity:var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity)}.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{opacity:var(--mdc-chip-with-icon-disabled-icon-opacity)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{opacity:var(--mat-chip-disabled-container-opacity)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-trailing-icon-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-app-on-surface))}.mat-mdc-chip-remove{opacity:var(--mat-chip-trailing-action-opacity)}.mat-mdc-chip-remove:focus{opacity:var(--mat-chip-trailing-action-focus-opacity)}.mat-mdc-chip-remove::after{background:var(--mat-chip-trailing-action-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-chip-remove:hover::after{opacity:var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-chip-remove:focus::after{opacity:var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-chip-selected .mat-mdc-chip-remove::after,.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after{background:var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-standard-chip .mdc-evolution-chip__cell--primary,.mat-mdc-standard-chip .mdc-evolution-chip__action--primary,.mat-mdc-standard-chip .mat-mdc-chip-action-label{overflow:visible}.mat-mdc-standard-chip .mat-mdc-chip-graphic,.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon{box-sizing:content-box}.mat-mdc-standard-chip._mat-animation-noopable,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path{transition-duration:1ms;animation-duration:1ms}.mat-mdc-chip-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;opacity:0;border-radius:inherit;transition:opacity 150ms linear}._mat-animation-noopable .mat-mdc-chip-focus-overlay{transition:none}.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay{display:none}.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-chip-avatar{text-align:center;line-height:1;color:var(--mdc-chip-with-icon-icon-color, currentColor)}.mat-mdc-chip{position:relative;z-index:0}.mat-mdc-chip-action-label{text-align:left;z-index:1}[dir=rtl] .mat-mdc-chip-action-label{text-align:right}.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label{position:relative}.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.mat-mdc-chip-action-label .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-chip-remove::before{margin:calc(var(--mat-mdc-focus-indicator-border-width, 3px)*-1);left:8px;right:8px}.mat-mdc-chip-remove::after{content:"";display:block;opacity:0;position:absolute;top:-2px;bottom:-2px;left:6px;right:6px;border-radius:50%}.mat-mdc-chip-remove .mat-icon{width:18px;height:18px;font-size:18px;box-sizing:content-box}.mat-chip-edit-input{cursor:text;display:inline-block;color:inherit;outline:0}.cdk-high-contrast-active .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple){outline-width:3px}.mat-mdc-chip-action:focus .mat-mdc-focus-indicator::before{content:""}',
  Vm = [
    [["mat-chip-avatar"], ["", "matChipAvatar", ""]],
    [["", "matChipEditInput", ""]],
    "*",
    [
      ["mat-chip-trailing-icon"],
      ["", "matChipRemove", ""],
      ["", "matChipTrailingIcon", ""],
    ],
  ],
  zm = [
    "mat-chip-avatar, [matChipAvatar]",
    "[matChipEditInput]",
    "*",
    "mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]",
  ];
function Bm(i, t) {
  i & 1 && I(0, "span", 0);
}
function Um(i, t) {
  i & 1 && (l(0, "span", 2), S(1), u());
}
function Hm(i, t) {
  i & 1 && S(0, 1);
}
function $m(i, t) {
  i & 1 && I(0, "span", 7);
}
function Gm(i, t) {
  if ((i & 1 && ct(0, Hm, 1, 0)(1, $m, 1, 0, "span", 7), i & 2)) {
    let r = Ot();
    vt(r.contentEditInput ? 0 : 1);
  }
}
function Wm(i, t) {
  i & 1 && S(0, 2);
}
function qm(i, t) {
  i & 1 && (l(0, "span", 5), S(1, 3), u());
}
var Cd = ["*"],
  Qm =
    ".mat-mdc-chip-set{display:flex}.mat-mdc-chip-set:focus{outline:none}.mat-mdc-chip-set .mdc-evolution-chip-set__chips{min-width:100%;margin-left:-8px;margin-right:0}.mat-mdc-chip-set .mdc-evolution-chip{margin:4px 0 4px 8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips{margin-left:0;margin-right:-8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip{margin-left:0;margin-right:8px}.mdc-evolution-chip-set__chips{display:flex;flex-flow:wrap;min-width:0}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic{flex-grow:0}.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary{flex-basis:100%;justify-content:start}input.mat-mdc-chip-input{flex:1 0 150px;margin-left:8px}[dir=rtl] input.mat-mdc-chip-input{margin-left:0;margin-right:8px}";
var _d = new x("MatChipAvatar"),
  yd = new x("MatChipTrailingIcon"),
  wd = new x("MatChipRemove"),
  ba = new x("MatChip"),
  ga = (() => {
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
      constructor(e, n) {
        (this._elementRef = e),
          (this._parentChip = n),
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
    (t.ɵfac = function (n) {
      return new (n || t)(h(k), h(ba));
    }),
      (t.ɵdir = P({
        type: t,
        selectors: [["", "matChipAction", ""]],
        hostAttrs: [1, "mdc-evolution-chip__action", "mat-mdc-chip-action"],
        hostVars: 9,
        hostBindings: function (n, o) {
          n & 1 &&
            et("click", function (s) {
              return o._handleClick(s);
            })("keydown", function (s) {
              return o._handleKeydown(s);
            }),
            n & 2 &&
              (q("tabindex", o._getTabindex())(
                "disabled",
                o._getDisabledAttribute(),
              )("aria-disabled", o.disabled),
              $("mdc-evolution-chip__action--primary", o._isPrimary)(
                "mdc-evolution-chip__action--presentational",
                !o.isInteractive,
              )("mdc-evolution-chip__action--trailing", !o._isPrimary));
        },
        inputs: {
          isInteractive: "isInteractive",
          disabled: [2, "disabled", "disabled", Y],
          tabIndex: [
            2,
            "tabIndex",
            "tabIndex",
            (e) => (e == null ? -1 : oi(e)),
          ],
          _allowFocusWhenDisabled: "_allowFocusWhenDisabled",
        },
        standalone: !0,
        features: [mt],
      }));
    let i = t;
    return i;
  })();
var Zm = 0,
  pe = (() => {
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
      constructor(e, n, o, a, s, d, c) {
        (this._changeDetectorRef = e),
          (this._elementRef = n),
          (this._ngZone = o),
          (this._focusMonitor = a),
          (this._globalRippleOptions = c),
          (this._onFocus = new M()),
          (this._onBlur = new M()),
          (this.role = null),
          (this._hasFocusInternal = !1),
          (this.id = `mat-mdc-chip-${Zm++}`),
          (this.ariaLabel = null),
          (this.ariaDescription = null),
          (this._ariaDescriptionId = `${this.id}-aria-description`),
          (this.removable = !0),
          (this.highlighted = !1),
          (this.disableRipple = !1),
          (this.disabled = !1),
          (this.removed = new W()),
          (this.destroyed = new W()),
          (this.basicChipAttrName = "mat-basic-chip"),
          (this._rippleLoader = v(zn)),
          (this._injector = v(It)),
          (this._document = s),
          (this._animationsDisabled = d === "NoopAnimations"),
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
        this._actionChanges = ve(
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
        return this._getActions().find((n) => {
          let o = n._elementRef.nativeElement;
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
          let n = e !== null;
          n !== this._hasFocusInternal &&
            ((this._hasFocusInternal = n),
            n
              ? this._onFocus.next({ chip: this })
              : kt(
                  () =>
                    this._ngZone.run(() => this._onBlur.next({ chip: this })),
                  { injector: this._injector },
                ));
        });
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(h(J), h(k), h(D), h(he), h(R), h(ft, 8), h(Oi, 8));
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [
          ["mat-basic-chip"],
          ["", "mat-basic-chip", ""],
          ["mat-chip"],
          ["", "mat-chip", ""],
        ],
        contentQueries: function (n, o, a) {
          if (
            (n & 1 &&
              (X(a, _d, 5),
              X(a, yd, 5),
              X(a, wd, 5),
              X(a, _d, 5),
              X(a, yd, 5),
              X(a, wd, 5)),
            n & 2)
          ) {
            let s;
            L((s = j())) && (o.leadingIcon = s.first),
              L((s = j())) && (o.trailingIcon = s.first),
              L((s = j())) && (o.removeIcon = s.first),
              L((s = j())) && (o._allLeadingIcons = s),
              L((s = j())) && (o._allTrailingIcons = s),
              L((s = j())) && (o._allRemoveIcons = s);
          }
        },
        viewQuery: function (n, o) {
          if ((n & 1 && Et(ga, 5), n & 2)) {
            let a;
            L((a = j())) && (o.primaryAction = a.first);
          }
        },
        hostAttrs: [1, "mat-mdc-chip"],
        hostVars: 31,
        hostBindings: function (n, o) {
          n & 1 &&
            et("keydown", function (s) {
              return o._handleKeydown(s);
            }),
            n & 2 &&
              (ri("id", o.id),
              q("role", o.role)("aria-label", o.ariaLabel),
              Wt("mat-" + (o.color || "primary")),
              $("mdc-evolution-chip", !o._isBasicChip)(
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
          removable: [2, "removable", "removable", Y],
          highlighted: [2, "highlighted", "highlighted", Y],
          disableRipple: [2, "disableRipple", "disableRipple", Y],
          disabled: [2, "disabled", "disabled", Y],
        },
        outputs: { removed: "removed", destroyed: "destroyed" },
        exportAs: ["matChip"],
        standalone: !0,
        features: [lt([{ provide: ba, useExisting: t }]), mt, V],
        ngContentSelectors: Nm,
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
        template: function (n, o) {
          n & 1 &&
            (Q(Om),
            I(0, "span", 0),
            l(1, "span", 1)(2, "span", 2),
            ct(3, Pm, 2, 0, "span", 3),
            l(4, "span", 4),
            S(5),
            I(6, "span", 5),
            u()()(),
            ct(7, Lm, 2, 0, "span", 6)),
            n & 2 &&
              (H(2),
              dt("isInteractive", !1),
              H(),
              vt(o.leadingIcon ? 3 : -1),
              H(4),
              vt(o._hasTrailingIcon() ? 7 : -1));
        },
        dependencies: [ga],
        styles: [
          '.mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{flex-basis:100%;overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}.mdc-evolution-chip__action--primary{font:inherit;letter-spacing:inherit;white-space:inherit;overflow-x:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before{border-width:var(--mdc-chip-outline-width);border-radius:var(--mdc-chip-container-shape-radius);box-sizing:border-box;content:"";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1;border-style:solid}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before{border-color:var(--mdc-chip-outline-color, var(--mat-app-outline))}.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before{border-color:var(--mdc-chip-focus-outline-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before{border-color:var(--mdc-chip-disabled-outline-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before{border-width:var(--mdc-chip-flat-selected-outline-width)}.mat-mdc-basic-chip .mdc-evolution-chip__action--primary{font:inherit}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip__action--trailing{position:relative;overflow:visible}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--trailing{color:var(--mdc-chip-with-trailing-icon-trailing-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--trailing{color:var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-app-on-surface))}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip__text-label{-webkit-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__text-label{font-family:var(--mdc-chip-label-text-font, var(--mat-app-label-large-font));line-height:var(--mdc-chip-label-text-line-height, var(--mat-app-label-large-line-height));font-size:var(--mdc-chip-label-text-size, var(--mat-app-label-large-size));font-weight:var(--mdc-chip-label-text-weight, var(--mat-app-label-large-weight));letter-spacing:var(--mdc-chip-label-text-tracking, var(--mat-app-label-large-tracking))}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mdc-chip-label-text-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mdc-chip-selected-label-text-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label{color:var(--mdc-chip-disabled-label-text-color)}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mat-mdc-standard-chip .mdc-evolution-chip__graphic{width:var(--mdc-chip-with-avatar-avatar-size);height:var(--mdc-chip-with-avatar-avatar-size);font-size:var(--mdc-chip-with-avatar-avatar-size)}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%;height:20px;width:20px}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark{color:var(--mdc-chip-with-icon-selected-icon-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark{color:var(--mdc-chip-with-icon-disabled-icon-color, var(--mat-app-on-surface))}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%, -50%);opacity:1}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}.cdk-high-contrast-active .mdc-evolution-chip__checkmark-path{stroke:CanvasText !important}.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing{height:18px;width:18px;font-size:18px}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove{opacity:calc(var(--mat-chip-trailing-action-opacity)*var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity))}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus{opacity:calc(var(--mat-chip-trailing-action-focus-opacity)*var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity))}.mat-mdc-standard-chip{border-radius:var(--mdc-chip-container-shape-radius);height:var(--mdc-chip-container-height)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled){background-color:var(--mdc-chip-elevated-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{background-color:var(--mdc-chip-elevated-disabled-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled){background-color:var(--mdc-chip-elevated-selected-container-color, var(--mat-app-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled{background-color:var(--mdc-chip-flat-disabled-selected-container-color)}.cdk-high-contrast-active .mat-mdc-standard-chip{outline:solid 1px}.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary{border-radius:var(--mdc-chip-with-avatar-avatar-shape-radius);width:var(--mdc-chip-with-icon-icon-size);height:var(--mdc-chip-with-icon-icon-size);font-size:var(--mdc-chip-with-icon-icon-size)}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary{color:var(--mdc-chip-with-icon-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary{color:var(--mdc-chip-with-icon-disabled-icon-color, var(--mat-app-on-surface))}.mat-mdc-chip-highlighted{--mdc-chip-with-icon-icon-color:var(--mdc-chip-with-icon-selected-icon-color, var(--mat-app-on-secondary-container));--mdc-chip-elevated-container-color:var(--mdc-chip-elevated-selected-container-color, var(--mat-app-secondary-container));--mdc-chip-label-text-color:var(--mdc-chip-selected-label-text-color, var(--mat-app-on-secondary-container));--mdc-chip-outline-width:var(--mdc-chip-flat-selected-outline-width)}.mat-mdc-chip-focus-overlay{background:var(--mdc-chip-focus-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-focus-state-layer-color, var(--mat-app-on-secondary-container))}.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-hover-state-layer-color, var(--mat-app-on-surface-variant));opacity:var(--mdc-chip-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover,.mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-hover-state-layer-color, var(--mat-app-on-secondary-container));opacity:var(--mdc-chip-selected-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-focus-state-layer-color, var(--mat-app-on-surface-variant));opacity:var(--mdc-chip-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-focus-state-layer-color, var(--mat-app-on-secondary-container));opacity:var(--mdc-chip-selected-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar{opacity:var(--mdc-chip-with-avatar-disabled-avatar-opacity)}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{opacity:var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity)}.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{opacity:var(--mdc-chip-with-icon-disabled-icon-opacity)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{opacity:var(--mat-chip-disabled-container-opacity)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-trailing-icon-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-app-on-surface))}.mat-mdc-chip-remove{opacity:var(--mat-chip-trailing-action-opacity)}.mat-mdc-chip-remove:focus{opacity:var(--mat-chip-trailing-action-focus-opacity)}.mat-mdc-chip-remove::after{background:var(--mat-chip-trailing-action-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-chip-remove:hover::after{opacity:var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-chip-remove:focus::after{opacity:var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-chip-selected .mat-mdc-chip-remove::after,.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after{background:var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-standard-chip .mdc-evolution-chip__cell--primary,.mat-mdc-standard-chip .mdc-evolution-chip__action--primary,.mat-mdc-standard-chip .mat-mdc-chip-action-label{overflow:visible}.mat-mdc-standard-chip .mat-mdc-chip-graphic,.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon{box-sizing:content-box}.mat-mdc-standard-chip._mat-animation-noopable,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path{transition-duration:1ms;animation-duration:1ms}.mat-mdc-chip-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;opacity:0;border-radius:inherit;transition:opacity 150ms linear}._mat-animation-noopable .mat-mdc-chip-focus-overlay{transition:none}.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay{display:none}.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-chip-avatar{text-align:center;line-height:1;color:var(--mdc-chip-with-icon-icon-color, currentColor)}.mat-mdc-chip{position:relative;z-index:0}.mat-mdc-chip-action-label{text-align:left;z-index:1}[dir=rtl] .mat-mdc-chip-action-label{text-align:right}.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label{position:relative}.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.mat-mdc-chip-action-label .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-chip-remove::before{margin:calc(var(--mat-mdc-focus-indicator-border-width, 3px)*-1);left:8px;right:8px}.mat-mdc-chip-remove::after{content:"";display:block;opacity:0;position:absolute;top:-2px;bottom:-2px;left:6px;right:6px;border-radius:50%}.mat-mdc-chip-remove .mat-icon{width:18px;height:18px;font-size:18px;box-sizing:content-box}.mat-chip-edit-input{cursor:text;display:inline-block;color:inherit;outline:0}.cdk-high-contrast-active .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple){outline-width:3px}.mat-mdc-chip-action:focus .mat-mdc-focus-indicator::before{content:""}',
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })();
var fa = (() => {
    let t = class t {
      constructor(e, n) {
        (this._elementRef = e), (this._document = n);
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
        let n = window.getSelection();
        n.removeAllRanges(), n.addRange(e);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(h(k), h(R));
    }),
      (t.ɵdir = P({
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
    let i = t;
    return i;
  })(),
  _a = (() => {
    let t = class t extends pe {
      constructor(e, n, o, a, s, d, c, m) {
        super(e, n, o, a, s, d, c),
          (this.basicChipAttrName = "mat-basic-chip-row"),
          (this._editStartPending = !1),
          (this.editable = !1),
          (this.edited = new W()),
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
        let n = this.value;
        (this._isEditing = this._editStartPending = !0),
          kt(
            () => {
              this._getEditInput().initialize(n), (this._editStartPending = !1);
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
    (t.ɵfac = function (n) {
      return new (n || t)(
        h(J),
        h(k),
        h(D),
        h(he),
        h(R),
        h(ft, 8),
        h(Oi, 8),
        Ce("tabindex"),
      );
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [
          ["mat-chip-row"],
          ["", "mat-chip-row", ""],
          ["mat-basic-chip-row"],
          ["", "mat-basic-chip-row", ""],
        ],
        contentQueries: function (n, o, a) {
          if ((n & 1 && X(a, fa, 5), n & 2)) {
            let s;
            L((s = j())) && (o.contentEditInput = s.first);
          }
        },
        viewQuery: function (n, o) {
          if ((n & 1 && Et(fa, 5), n & 2)) {
            let a;
            L((a = j())) && (o.defaultEditInput = a.first);
          }
        },
        hostAttrs: [
          1,
          "mat-mdc-chip",
          "mat-mdc-chip-row",
          "mdc-evolution-chip",
        ],
        hostVars: 27,
        hostBindings: function (n, o) {
          n & 1 &&
            et("focus", function (s) {
              return o._handleFocus(s);
            })("dblclick", function (s) {
              return o._handleDoubleclick(s);
            }),
            n & 2 &&
              (ri("id", o.id),
              q("tabindex", o.disabled ? null : -1)("aria-label", null)(
                "aria-description",
                null,
              )("role", o.role),
              $("mat-mdc-chip-with-avatar", o.leadingIcon)(
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
          lt([
            { provide: pe, useExisting: t },
            { provide: ba, useExisting: t },
          ]),
          gt,
          V,
        ],
        ngContentSelectors: zm,
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
        template: function (n, o) {
          n & 1 &&
            (Q(Vm),
            ct(0, Bm, 1, 0, "span", 0),
            l(1, "span", 1),
            ct(2, Um, 2, 0, "span", 2),
            l(3, "span", 3),
            ct(4, Gm, 2, 1)(5, Wm, 1, 0),
            I(6, "span", 4),
            u()(),
            ct(7, qm, 2, 0, "span", 5),
            l(8, "span", 6),
            p(9),
            u()),
            n & 2 &&
              (vt(o._isEditing ? -1 : 0),
              H(),
              dt("disabled", o.disabled),
              q("aria-label", o.ariaLabel)(
                "aria-describedby",
                o._ariaDescriptionId,
              ),
              H(),
              vt(o.leadingIcon ? 2 : -1),
              H(2),
              vt(o._isEditing ? 4 : 5),
              H(3),
              vt(o._hasTrailingIcon() ? 7 : -1),
              H(),
              dt("id", o._ariaDescriptionId),
              H(),
              ie(o.ariaDescription));
        },
        dependencies: [ga, fa],
        styles: [jm],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })(),
  Ui = (() => {
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
      constructor(e, n, o) {
        (this._elementRef = e),
          (this._changeDetectorRef = n),
          (this._dir = o),
          (this._lastDestroyedFocusedChipIndex = null),
          (this._destroyed = new M()),
          (this._defaultRole = "presentation"),
          (this._disabled = !1),
          (this.tabIndex = 0),
          (this._explicitRole = null),
          (this._chipActions = new Jt());
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
          yt(null),
          ht(() => ve(...this._chips.map(e))),
        );
      }
      _originatesFromChip(e) {
        let n = e.target;
        for (; n && n !== this._elementRef.nativeElement; ) {
          if (n.classList.contains("mat-mdc-chip")) return !0;
          n = n.parentElement;
        }
        return !1;
      }
      _setUpFocusManagement() {
        this._chips.changes.pipe(yt(this._chips)).subscribe((e) => {
          let n = [];
          e.forEach((o) => o._getActions().forEach((a) => n.push(a))),
            this._chipActions.reset(n),
            this._chipActions.notifyOnChanges();
        }),
          (this._keyManager = new Nn(this._chipActions)
            .withVerticalOrientation()
            .withHorizontalOrientation(this._dir ? this._dir.value : "ltr")
            .withHomeAndEnd()
            .skipPredicate((e) => this._skipPredicate(e))),
          this.chipFocusChanges
            .pipe(z(this._destroyed))
            .subscribe(({ chip: e }) => {
              let n = e._getSourceAction(document.activeElement);
              n && this._keyManager.updateActiveItem(n);
            }),
          this._dir?.change
            .pipe(z(this._destroyed))
            .subscribe((e) => this._keyManager.withHorizontalOrientation(e));
      }
      _skipPredicate(e) {
        return !e.isInteractive || e.disabled;
      }
      _trackChipSetChanges() {
        this._chips.changes.pipe(yt(null), z(this._destroyed)).subscribe(() => {
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
              n = this._chips.toArray()[e];
            n.disabled
              ? this._chips.length === 1
                ? this.focus()
                : this._keyManager.setPreviousItemActive()
              : n.focus();
          } else this.focus();
          this._lastDestroyedFocusedChipIndex = null;
        }
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(h(k), h(J), h(Bt, 8));
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [["mat-chip-set"]],
        contentQueries: function (n, o, a) {
          if ((n & 1 && X(a, pe, 5), n & 2)) {
            let s;
            L((s = j())) && (o._chips = s);
          }
        },
        hostAttrs: [1, "mat-mdc-chip-set", "mdc-evolution-chip-set"],
        hostVars: 1,
        hostBindings: function (n, o) {
          n & 1 &&
            et("keydown", function (s) {
              return o._handleKeydown(s);
            }),
            n & 2 && q("role", o.role);
        },
        inputs: {
          disabled: [2, "disabled", "disabled", Y],
          role: "role",
          tabIndex: [2, "tabIndex", "tabIndex", (e) => (e == null ? 0 : oi(e))],
        },
        standalone: !0,
        features: [mt, V],
        ngContentSelectors: Cd,
        decls: 2,
        vars: 0,
        consts: [["role", "presentation", 1, "mdc-evolution-chip-set__chips"]],
        template: function (n, o) {
          n & 1 && (Q(), l(0, "div", 0), S(1), u());
        },
        styles: [
          ".mat-mdc-chip-set{display:flex}.mat-mdc-chip-set:focus{outline:none}.mat-mdc-chip-set .mdc-evolution-chip-set__chips{min-width:100%;margin-left:-8px;margin-right:0}.mat-mdc-chip-set .mdc-evolution-chip{margin:4px 0 4px 8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips{margin-left:0;margin-right:-8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip{margin-left:0;margin-right:8px}.mdc-evolution-chip-set__chips{display:flex;flex-flow:wrap;min-width:0}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic{flex-grow:0}.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary{flex-basis:100%;justify-content:start}input.mat-mdc-chip-input{flex:1 0 150px;margin-left:8px}[dir=rtl] input.mat-mdc-chip-input{margin-left:0;margin-right:8px}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })();
var va = class {
    constructor(t, r) {
      (this.source = t), (this.value = r);
    }
  },
  Id = (() => {
    let t = class t extends Ui {
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
          this.ngControl?.control?.hasValidator(Xn.required) ??
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
      constructor(e, n, o, a, s, d, c) {
        super(e, n, o),
          (this.ngControl = c),
          (this.controlType = "mat-chip-grid"),
          (this._defaultRole = "grid"),
          (this._ariaDescribedbyIds = []),
          (this._onTouched = () => {}),
          (this._onChange = () => {}),
          (this._value = []),
          (this.change = new W()),
          (this.valueChange = new W()),
          (this._chips = void 0),
          (this.stateChanges = new M()),
          this.ngControl && (this.ngControl.valueAccessor = this),
          (this._errorStateTracker = new Vn(d, c, s, a, this.stateChanges));
      }
      ngAfterContentInit() {
        this.chipBlurChanges.pipe(z(this._destroyed)).subscribe(() => {
          this._blur(), this.stateChanges.next();
        }),
          ve(this.chipFocusChanges, this._chips.changes)
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
        let n = e.keyCode,
          o = this._keyManager.activeItem;
        if (n === 9)
          this._chipInput.focused &&
          Ve(e, "shiftKey") &&
          this._chips.length &&
          !this._chips.last.disabled
            ? (e.preventDefault(),
              o ? this._keyManager.setActiveItem(o) : this._focusLastChip())
            : super._allowFocusEscape();
        else if (!this._chipInput.focused)
          if ((n === 38 || n === 40) && o) {
            let a = this._chipActions.filter(
                (c) => c._isPrimary === o._isPrimary && !this._skipPredicate(c),
              ),
              s = a.indexOf(o),
              d = e.keyCode === 38 ? -1 : 1;
            e.preventDefault(),
              s > -1 &&
                this._isValidIndex(s + d) &&
                this._keyManager.setActiveItem(a[s + d]);
          } else super._handleKeydown(e);
        this.stateChanges.next();
      }
      _focusLastChip() {
        this._chips.length && this._chips.last.focus();
      }
      _propagateChanges() {
        let e = this._chips.length
          ? this._chips.toArray().map((n) => n.value)
          : [];
        (this._value = e),
          this.change.emit(new va(this, e)),
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
    (t.ɵfac = function (n) {
      return new (n || t)(
        h(k),
        h(J),
        h(Bt, 8),
        h(ma, 8),
        h(pa, 8),
        h(Yo),
        h(er, 10),
      );
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [["mat-chip-grid"]],
        contentQueries: function (n, o, a) {
          if ((n & 1 && X(a, _a, 5), n & 2)) {
            let s;
            L((s = j())) && (o._chips = s);
          }
        },
        hostAttrs: [
          1,
          "mat-mdc-chip-set",
          "mat-mdc-chip-grid",
          "mdc-evolution-chip-set",
        ],
        hostVars: 10,
        hostBindings: function (n, o) {
          n & 1 &&
            et("focus", function () {
              return o.focus();
            })("blur", function () {
              return o._blur();
            }),
            n & 2 &&
              (q("role", o.role)(
                "tabindex",
                o.disabled || (o._chips && o._chips.length === 0)
                  ? -1
                  : o.tabIndex,
              )("aria-disabled", o.disabled.toString())(
                "aria-invalid",
                o.errorState,
              ),
              $("mat-mdc-chip-list-disabled", o.disabled)(
                "mat-mdc-chip-list-invalid",
                o.errorState,
              )("mat-mdc-chip-list-required", o.required));
        },
        inputs: {
          disabled: [2, "disabled", "disabled", Y],
          placeholder: "placeholder",
          required: [2, "required", "required", Y],
          value: "value",
          errorStateMatcher: "errorStateMatcher",
        },
        outputs: { change: "change", valueChange: "valueChange" },
        standalone: !0,
        features: [lt([{ provide: bd, useExisting: t }]), mt, gt, V],
        ngContentSelectors: Cd,
        decls: 2,
        vars: 0,
        consts: [["role", "presentation", 1, "mdc-evolution-chip-set__chips"]],
        template: function (n, o) {
          n & 1 && (Q(), l(0, "div", 0), S(1), u());
        },
        styles: [Qm],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })();
function Ym(i, t) {
  if ((i & 1 && I(0, "span", 27), i & 2)) {
    let r = t.$implicit,
      e = Ot(2);
    Va(r.style), dt("hidden", e.isSmallScreen)("innerHTML", r.text + " ", Fa);
  }
}
function Xm(i, t) {
  if (
    (i & 1 &&
      (l(0, "mat-chip", 25),
      ct(1, Ym, 1, 4, "span", 26),
      l(2, "span"),
      p(3),
      u()()),
    i & 2)
  ) {
    let r = t.$implicit;
    H(), dt("ngForOf", r.textElements), H(2), ie(r.icon);
  }
}
var cr = class i {
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
    return new (r || i)();
  };
  static ɵcmp = C({
    type: i,
    selectors: [["app-introduction"]],
    hostBindings: function (r, e) {
      r & 1 &&
        et(
          "resize",
          function (o) {
            return e.onResize(o);
          },
          !1,
          Yi,
        );
    },
    decls: 173,
    vars: 5,
    consts: [
      [2, "max-width", "70rem"],
      [1, "header"],
      [1, "title-text"],
      [1, "title-greeting"],
      [2, "font-weight", "400"],
      [
        2,
        "color",
        "rosybrown",
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
      [2, "background-color", "white", "margin-bottom", "2rem"],
      [2, "margin-top", "0"],
      [
        1,
        "education-container",
        2,
        "display",
        "flex",
        "justify-content",
        "space-between",
      ],
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
        (l(0, "mat-card", 0)(1, "mat-card-header", 1)(2, "mat-card-title", 2)(
          3,
          "div",
          3,
        )(4, "div", 4),
        p(5, "Hello, I'm"),
        u(),
        l(6, "h2", 5),
        p(7, " Xuyen Nguyen. "),
        u(),
        I(8, "mat-divider", 6),
        u(),
        l(9, "div", 7)(10, "div", 8),
        ct(11, Xm, 4, 2, "mat-chip", 9),
        u(),
        l(12, "div", 10)(13, "p"),
        p(14, ' "'),
        l(15, "span", 11),
        p(16, "Motivation"),
        u(),
        p(17, " is essentially "),
        l(18, "span", 12),
        p(19, "momentum"),
        u(),
        p(20, ". Start taking action "),
        l(21, "span"),
        p(22, "now"),
        u(),
        p(23, ', and motivation will follow, driving you forward." '),
        u()()()(),
        l(24, "div", 13)(25, "div", 14)(26, "h1"),
        p(27, "Hue, Vietnam"),
        u(),
        l(28, "h3"),
        p(29, "July, 2023"),
        u()(),
        I(30, "img", 15),
        u()(),
        l(31, "div", 10)(32, "p"),
        p(33, ' "'),
        l(34, "span", 11),
        p(35, "Motivation"),
        u(),
        p(36, " is essentially "),
        l(37, "span", 12),
        p(38, "momentum"),
        u(),
        p(39, ". Start taking action "),
        l(40, "span"),
        p(41, "now"),
        u(),
        p(42, ', and motivation will follow, driving you forward." '),
        u()(),
        l(43, "mat-card-content")(44, "div", 16)(45, "span", 17),
        p(46, "ABOUT ME"),
        u()(),
        l(47, "mat-card", 18)(48, "mat-card-content")(49, "p", 19),
        p(
          50,
          " I am a self-learner at heart. I have taught myself various new skills from speaking Japanese to building websites to knitting. As much as I value formal education, I believe that the ability to teach myself is a powerful asset in its own right. ",
        ),
        u(),
        l(51, "p"),
        p(
          52,
          " This belief guided me throughout my years studying computer science, inspiring me to build many educational tools such as ASL Alphabet Learning, Chinese Typing Practice, Class Schedule Builder, etc. One of my proudest moments was when my Capstone team won 3rd place for the most outstanding project with our Signable app\u2014an application designed to teach the ASL alphabet. After this achievement, I felt very hopeful about the potential of AI and Machine Learning (AI/ML) in revolutionize learning and skills acquistion. Therefore, I plan to go back to school for a Master's Degree in AI/ML to deepen my expertise in these fields. ",
        ),
        u(),
        l(53, "p"),
        p(
          54,
          " Outside of work and study, I enjoy drawing and 3D modeling. I also love outdoor activities like hiking, rollerblading, and swimming. While I\u2019m not a heavy gamer, I thoroughly enjoy playing games with friends. Some of my favorite titles are The Sims 4, Monster Hunter Rise, Animal Crossing: New Horizons, and Don't Starve Together. ",
        ),
        u()()(),
        l(55, "div", 16)(56, "span", 17),
        p(57, "EDUCATION"),
        u()(),
        l(58, "mat-card", 18)(59, "mat-card-content", 20)(60, "div")(61, "div"),
        p(62, "University of Utah"),
        u(),
        l(63, "div"),
        p(64, "Bachelor of Science in Computer Science"),
        u()(),
        l(65, "div")(66, "div"),
        p(67, "Salt Lake City, Utah"),
        u(),
        l(68, "div"),
        p(69, "May 2024"),
        u()()()(),
        l(70, "div", 16)(71, "span", 17),
        p(72, "TECHNICAL SKILLS"),
        u()(),
        l(73, "mat-card", 18)(74, "mat-card-content")(75, "div", 21)(
          76,
          "button",
          22,
        ),
        p(77, " Web Development "),
        u(),
        l(78, "button", 22),
        p(79, " Machine Learning "),
        u(),
        l(80, "button", 22),
        p(81, " Artifitial Intelligence "),
        u(),
        l(82, "button", 22),
        p(83, " Computer Graphics "),
        u()(),
        l(84, "mat-chip-set", 21)(85, "mat-chip"),
        p(86, "Angular"),
        u(),
        l(87, "mat-chip"),
        p(88, "React"),
        u(),
        l(89, "mat-chip"),
        p(90, "Next"),
        u(),
        l(91, "mat-chip"),
        p(92, "Django"),
        u(),
        l(93, "mat-chip"),
        p(94, "ASP.NET"),
        u(),
        l(95, "mat-chip"),
        p(96, "Spring Boot"),
        u(),
        l(97, "mat-chip"),
        p(98, "REST API"),
        u(),
        l(99, "mat-chip"),
        p(100, "JavaScript"),
        u(),
        l(101, "mat-chip"),
        p(102, "TypeScript"),
        u(),
        l(103, "mat-chip"),
        p(104, "HTML"),
        u(),
        l(105, "mat-chip"),
        p(106, "CSS"),
        u(),
        l(107, "mat-chip"),
        p(108, "Python"),
        u(),
        l(109, "mat-chip"),
        p(110, "C#"),
        u(),
        l(111, "mat-chip"),
        p(112, "C/C++"),
        u(),
        l(113, "mat-chip"),
        p(114, "Java"),
        u(),
        l(115, "mat-chip"),
        p(116, "SQL"),
        u(),
        l(117, "mat-chip"),
        p(118, "Git"),
        u(),
        l(119, "mat-chip"),
        p(120, "TensorFlow"),
        u()(),
        l(121, "mat-chip-set", 21)(122, "mat-chip"),
        p(123, "Unity"),
        u(),
        l(124, "mat-chip"),
        p(125, "Unreal Engine"),
        u(),
        l(126, "mat-chip"),
        p(127, "Maya"),
        u(),
        l(128, "mat-chip"),
        p(129, "Blender"),
        u(),
        l(130, "mat-chip"),
        p(131, "Photoshop"),
        u()()()(),
        l(132, "div", 16)(133, "span", 17),
        p(134, "EXPERIENCE"),
        u()(),
        l(135, "mat-card", 18)(136, "mat-card-content")(137, "div", 23)(
          138,
          "div",
          24,
        )(139, "div")(140, "div", 17),
        p(141, "Software Engineer"),
        u(),
        l(142, "div"),
        p(143, "BlueSkyTech"),
        u()(),
        l(144, "div")(145, "div"),
        p(146, "March 2024 - present"),
        u(),
        l(147, "div"),
        p(148, "(Remote)"),
        u()()(),
        l(149, "ul")(150, "li"),
        p(
          151,
          " Incorporate frontend stacks including NextJS, Redux Toolkit, TypeScript, and Material UI to build responsive websites that are compatible with multiple devices and web browsers. ",
        ),
        u(),
        l(152, "li"),
        p(
          153,
          " Implement API calls for streamlined frontend-backend communication ",
        ),
        u()()(),
        l(154, "div")(155, "div", 24)(156, "div")(157, "div", 17),
        p(158, "Full-Stack Developer"),
        u(),
        l(159, "div"),
        p(160, "University of Utah - Umail"),
        u()(),
        l(161, "div")(162, "div"),
        p(163, "November 2021 - June 2024"),
        u(),
        l(164, "div"),
        p(165, "Salt Lake City, Utah"),
        u()()(),
        l(166, "ul")(167, "li"),
        p(
          168,
          " Automated 100+ tasks with PowerShell scripts that interact with database systems such as SQL Server ",
        ),
        u(),
        l(169, "li"),
        p(
          170,
          " Worked in a team and individually to troubleshoot problems in migrating 100000+ user mailboxes and groups within Microsoft Exchange servers. ",
        ),
        u(),
        l(171, "li"),
        p(
          172,
          " Maintained and updated the internal website using tools like Angular, .Net, Bootstrap, and Graph API. ",
        ),
        u()()()()()()()),
        r & 2 &&
          (H(8),
          dt("inset", !0),
          H(3),
          dt("ngForOf", e.introductionChipData),
          H(),
          dt("hidden", e.isSmallScreen),
          H(12),
          dt("hidden", e.isExtraSmallScreen),
          H(7),
          dt("hidden", !e.isSmallScreen));
    },
    dependencies: [is, Kn, Be, Un, Hn, Bn, Wn, pe, Ui],
    styles: [
      "mat-card[_ngcontent-%COMP%]{height:100%;width:100%;margin:auto}.header[_ngcontent-%COMP%]{justify-content:space-around;margin-bottom:3rem}.skills[_ngcontent-%COMP%]{margin-bottom:1rem}.title-image[_ngcontent-%COMP%]{max-width:25rem;min-width:18rem;height:auto;display:flex;justify-content:center;align-items:end;position:relative;margin:auto 0}.title-text[_ngcontent-%COMP%]{width:98%;height:100%;display:flex;flex-direction:column;max-width:25rem}.title-greeting[_ngcontent-%COMP%]{margin:2rem 2rem 2rem 1rem}.title-hook[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;height:100%}.hook-tags[_ngcontent-%COMP%]{width:100%;text-align:right;align-self:flex-end}.hook-quote[_ngcontent-%COMP%]{text-align:center;font-weight:lighter;font-size:1.2rem;width:100%}.experience-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between}@media only screen and (max-width: 540px){.header[_ngcontent-%COMP%]{margin-bottom:0}.title-greeting[_ngcontent-%COMP%]{width:15rem;margin-right:0;font-size:small}.hook-tags[_ngcontent-%COMP%]{width:13rem}.hook-quote[_ngcontent-%COMP%]{width:95%;margin-top:2rem;margin-bottom:2rem}}@media only screen and (max-width: 475px){.title-greeting[_ngcontent-%COMP%]{width:10rem;margin-right:0;font-size:small}.title-image[_ngcontent-%COMP%]{min-width:12rem;font-size:xx-small}.title-image[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding-bottom:0!important}.education-container[_ngcontent-%COMP%], .experience-header[_ngcontent-%COMP%]{flex-direction:column}.title-text[_ngcontent-%COMP%]{width:12rem}}@media only screen and (max-width: 360px){.header[_ngcontent-%COMP%]{flex-direction:column-reverse;align-items:center}.title-text[_ngcontent-%COMP%]{width:20rem}.title-image[_ngcontent-%COMP%]{font-size:medium}.title-greeting[_ngcontent-%COMP%]{width:100%;font-size:medium}}",
    ],
  });
};
var Jm = [
    { path: "introduction", component: cr },
    { path: "web-app", component: qn },
    { path: "artwork", component: Qn },
    { path: "others", component: Zn },
    { path: "", redirectTo: "introduction", pathMatch: "full" },
    { path: "**", redirectTo: "introduction" },
  ],
  dr = class i {
    static ɵfac = function (r) {
      return new (r || i)();
    };
    static ɵmod = F({ type: i });
    static ɵinj = T({ imports: [Ro.forRoot(Jm), Ro] });
  };
var tp = 20,
  ya = (() => {
    let t = class t {
      constructor(e, n, o) {
        (this._ngZone = e),
          (this._platform = n),
          (this._scrolled = new M()),
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
        let n = this.scrollContainers.get(e);
        n && (n.unsubscribe(), this.scrollContainers.delete(e));
      }
      scrolled(e = tp) {
        return this._platform.isBrowser
          ? new qe((n) => {
              this._globalSubscription || this._addGlobalListener();
              let o =
                e > 0
                  ? this._scrolled.pipe(br(e)).subscribe(n)
                  : this._scrolled.subscribe(n);
              return (
                this._scrolledCount++,
                () => {
                  o.unsubscribe(),
                    this._scrolledCount--,
                    this._scrolledCount || this._removeGlobalListener();
                }
              );
            })
          : y();
      }
      ngOnDestroy() {
        this._removeGlobalListener(),
          this.scrollContainers.forEach((e, n) => this.deregister(n)),
          this._scrolled.complete();
      }
      ancestorScrolled(e, n) {
        let o = this.getAncestorScrollContainers(e);
        return this.scrolled(n).pipe(it((a) => !a || o.indexOf(a) > -1));
      }
      getAncestorScrollContainers(e) {
        let n = [];
        return (
          this.scrollContainers.forEach((o, a) => {
            this._scrollableContainsElement(a, e) && n.push(a);
          }),
          n
        );
      }
      _getWindow() {
        return this._document.defaultView || window;
      }
      _scrollableContainsElement(e, n) {
        let o = zt(n),
          a = e.getElementRef().nativeElement;
        do if (o == a) return !0;
        while ((o = o.parentElement));
        return !1;
      }
      _addGlobalListener() {
        this._globalSubscription = this._ngZone.runOutsideAngular(() => {
          let e = this._getWindow();
          return Ke(e.document, "scroll").subscribe(() =>
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
    (t.ɵfac = function (n) {
      return new (n || t)(b(D), b(Z), b(R, 8));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })(),
  lr = (() => {
    let t = class t {
      constructor(e, n, o, a) {
        (this.elementRef = e),
          (this.scrollDispatcher = n),
          (this.ngZone = o),
          (this.dir = a),
          (this._destroyed = new M()),
          (this._elementScrolled = new qe((s) =>
            this.ngZone.runOutsideAngular(() =>
              Ke(this.elementRef.nativeElement, "scroll")
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
        let n = this.elementRef.nativeElement,
          o = this.dir && this.dir.value == "rtl";
        e.left == null && (e.left = o ? e.end : e.start),
          e.right == null && (e.right = o ? e.start : e.end),
          e.bottom != null &&
            (e.top = n.scrollHeight - n.clientHeight - e.bottom),
          o && je() != Mt.NORMAL
            ? (e.left != null &&
                (e.right = n.scrollWidth - n.clientWidth - e.left),
              je() == Mt.INVERTED
                ? (e.left = e.right)
                : je() == Mt.NEGATED && (e.left = e.right ? -e.right : e.right))
            : e.right != null &&
              (e.left = n.scrollWidth - n.clientWidth - e.right),
          this._applyScrollToOptions(e);
      }
      _applyScrollToOptions(e) {
        let n = this.elementRef.nativeElement;
        lc()
          ? n.scrollTo(e)
          : (e.top != null && (n.scrollTop = e.top),
            e.left != null && (n.scrollLeft = e.left));
      }
      measureScrollOffset(e) {
        let n = "left",
          o = "right",
          a = this.elementRef.nativeElement;
        if (e == "top") return a.scrollTop;
        if (e == "bottom") return a.scrollHeight - a.clientHeight - a.scrollTop;
        let s = this.dir && this.dir.value == "rtl";
        return (
          e == "start" ? (e = s ? o : n) : e == "end" && (e = s ? n : o),
          s && je() == Mt.INVERTED
            ? e == n
              ? a.scrollWidth - a.clientWidth - a.scrollLeft
              : a.scrollLeft
            : s && je() == Mt.NEGATED
              ? e == n
                ? a.scrollLeft + a.scrollWidth - a.clientWidth
                : -a.scrollLeft
              : e == n
                ? a.scrollLeft
                : a.scrollWidth - a.clientWidth - a.scrollLeft
        );
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(h(k), h(ya), h(D), h(Bt, 8));
    }),
      (t.ɵdir = P({
        type: t,
        selectors: [
          ["", "cdk-scrollable", ""],
          ["", "cdkScrollable", ""],
        ],
        standalone: !0,
      }));
    let i = t;
    return i;
  })(),
  ep = 20,
  Ed = (() => {
    let t = class t {
      constructor(e, n, o) {
        (this._platform = e),
          (this._change = new M()),
          (this._changeListener = (a) => {
            this._change.next(a);
          }),
          (this._document = o),
          n.runOutsideAngular(() => {
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
          { width: n, height: o } = this.getViewportSize();
        return {
          top: e.top,
          left: e.left,
          bottom: e.top + o,
          right: e.left + n,
          height: o,
          width: n,
        };
      }
      getViewportScrollPosition() {
        if (!this._platform.isBrowser) return { top: 0, left: 0 };
        let e = this._document,
          n = this._getWindow(),
          o = e.documentElement,
          a = o.getBoundingClientRect(),
          s = -a.top || e.body.scrollTop || n.scrollY || o.scrollTop || 0,
          d = -a.left || e.body.scrollLeft || n.scrollX || o.scrollLeft || 0;
        return { top: s, left: d };
      }
      change(e = ep) {
        return e > 0 ? this._change.pipe(br(e)) : this._change;
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
    (t.ɵfac = function (n) {
      return new (n || t)(b(Z), b(D), b(R, 8));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
var Sd = ["*"],
  rp = ["content"],
  op = [[["mat-drawer"]], [["mat-drawer-content"]], "*"],
  ap = ["mat-drawer", "mat-drawer-content", "*"];
function sp(i, t) {
  if (i & 1) {
    let r = kr();
    l(0, "div", 1),
      et("click", function () {
        Cr(r);
        let n = Ot();
        return Ir(n._onBackdropClicked());
      }),
      u();
  }
  if (i & 2) {
    let r = Ot();
    $("mat-drawer-shown", r._isShowingBackdrop());
  }
}
function cp(i, t) {
  i & 1 && (l(0, "mat-drawer-content"), S(1, 2), u());
}
var dp = {
  transformDrawer: ss("transform", [
    Lr("open, open-instant", Pr({ transform: "none", visibility: "visible" })),
    Lr("void", Pr({ "box-shadow": "none", visibility: "hidden" })),
    jr("void => open-instant", Nr("0ms")),
    jr(
      "void <=> open, open-instant => void",
      Nr("400ms cubic-bezier(0.25, 0.8, 0.25, 1)"),
    ),
  ]),
};
var lp = new x("MAT_DRAWER_DEFAULT_AUTOSIZE", {
    providedIn: "root",
    factory: up,
  }),
  Dd = new x("MAT_DRAWER_CONTAINER");
function up() {
  return !1;
}
var fe = (() => {
    let t = class t extends lr {
      constructor(e, n, o, a, s) {
        super(o, a, s), (this._changeDetectorRef = e), (this._container = n);
      }
      ngAfterContentInit() {
        this._container._contentMarginChanges.subscribe(() => {
          this._changeDetectorRef.markForCheck();
        });
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(h(J), h(we(() => $i)), h(k), h(ya), h(D));
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [["mat-drawer-content"]],
        hostAttrs: [1, "mat-drawer-content"],
        hostVars: 4,
        hostBindings: function (n, o) {
          n & 2 &&
            Ar("margin-left", o._container._contentMargins.left, "px")(
              "margin-right",
              o._container._contentMargins.right,
              "px",
            );
        },
        standalone: !0,
        features: [lt([{ provide: lr, useExisting: t }]), gt, V],
        ngContentSelectors: Sd,
        decls: 1,
        vars: 0,
        template: function (n, o) {
          n & 1 && (Q(), S(0));
        },
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })(),
  Hi = (() => {
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
        this._disableClose = Tt(e);
      }
      get autoFocus() {
        let e = this._autoFocus;
        return e ?? (this.mode === "side" ? "dialog" : "first-tabbable");
      }
      set autoFocus(e) {
        (e === "true" || e === "false" || e == null) && (e = Tt(e)),
          (this._autoFocus = e);
      }
      get opened() {
        return this._opened;
      }
      set opened(e) {
        this.toggle(Tt(e));
      }
      constructor(e, n, o, a, s, d, c, m) {
        (this._elementRef = e),
          (this._focusTrapFactory = n),
          (this._focusMonitor = o),
          (this._platform = a),
          (this._ngZone = s),
          (this._interactivityChecker = d),
          (this._doc = c),
          (this._container = m),
          (this._focusTrap = null),
          (this._elementFocusedBeforeDrawerWasOpened = null),
          (this._enableAnimations = !1),
          (this._position = "start"),
          (this._mode = "over"),
          (this._disableClose = !1),
          (this._opened = !1),
          (this._animationStarted = new M()),
          (this._animationEnd = new M()),
          (this._animationState = "void"),
          (this.openedChange = new W(!0)),
          (this._openedStream = this.openedChange.pipe(
            it((f) => f),
            A(() => {}),
          )),
          (this.openedStart = this._animationStarted.pipe(
            it(
              (f) =>
                f.fromState !== f.toState && f.toState.indexOf("open") === 0,
            ),
            Ye(void 0),
          )),
          (this._closedStream = this.openedChange.pipe(
            it((f) => !f),
            A(() => {}),
          )),
          (this.closedStart = this._animationStarted.pipe(
            it((f) => f.fromState !== f.toState && f.toState === "void"),
            Ye(void 0),
          )),
          (this._destroyed = new M()),
          (this.onPositionChanged = new W()),
          (this._modeChanged = new M()),
          (this._injector = v(It)),
          (this._changeDetectorRef = v(J)),
          this.openedChange.pipe(z(this._destroyed)).subscribe((f) => {
            f
              ? (this._doc &&
                  (this._elementFocusedBeforeDrawerWasOpened =
                    this._doc.activeElement),
                this._takeFocus())
              : this._isFocusWithinDrawer() &&
                this._restoreFocus(this._openedVia || "program");
          }),
          this._ngZone.runOutsideAngular(() => {
            Ke(this._elementRef.nativeElement, "keydown")
              .pipe(
                it((f) => f.keyCode === 27 && !this.disableClose && !Ve(f)),
                z(this._destroyed),
              )
              .subscribe((f) =>
                this._ngZone.run(() => {
                  this.close(), f.stopPropagation(), f.preventDefault();
                }),
              );
          }),
          this._animationEnd
            .pipe(
              Xe(
                (f, _) =>
                  f.fromState === _.fromState && f.toState === _.toState,
              ),
            )
            .subscribe((f) => {
              let { fromState: _, toState: O } = f;
              ((O.indexOf("open") === 0 && _ === "void") ||
                (O === "void" && _.indexOf("open") === 0)) &&
                this.openedChange.emit(this._opened);
            });
      }
      _forceFocus(e, n) {
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
          e.focus(n);
      }
      _focusByCssSelector(e, n) {
        let o = this._elementRef.nativeElement.querySelector(e);
        o && this._forceFocus(o, n);
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
            kt(
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
      toggle(e = !this.opened, n) {
        e && n && (this._openedVia = n);
        let o = this._setOpen(
          e,
          !e && this._isFocusWithinDrawer(),
          this._openedVia || "program",
        );
        return e || (this._openedVia = null), o;
      }
      _setOpen(e, n, o) {
        return (
          (this._opened = e),
          e
            ? (this._animationState = this._enableAnimations
                ? "open"
                : "open-instant")
            : ((this._animationState = "void"), n && this._restoreFocus(o)),
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
        let n = this._elementRef.nativeElement,
          o = n.parentNode;
        e === "end"
          ? (this._anchor ||
              ((this._anchor = this._doc.createComment("mat-drawer-anchor")),
              o.insertBefore(this._anchor, n)),
            o.appendChild(n))
          : this._anchor &&
            this._anchor.parentNode.insertBefore(n, this._anchor);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(
        h(k),
        h(yc),
        h(he),
        h(Z),
        h(D),
        h(Bo),
        h(R, 8),
        h(Dd, 8),
      );
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [["mat-drawer"]],
        viewQuery: function (n, o) {
          if ((n & 1 && Et(rp, 5), n & 2)) {
            let a;
            L((a = j())) && (o._content = a.first);
          }
        },
        hostAttrs: ["tabIndex", "-1", 1, "mat-drawer"],
        hostVars: 12,
        hostBindings: function (n, o) {
          n & 1 &&
            Ba("@transform.start", function (s) {
              return o._animationStarted.next(s);
            })("@transform.done", function (s) {
              return o._animationEnd.next(s);
            }),
            n & 2 &&
              (za("@transform", o._animationState),
              q("align", null),
              $("mat-drawer-end", o.position === "end")(
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
        features: [V],
        ngContentSelectors: Sd,
        decls: 3,
        vars: 0,
        consts: [
          ["content", ""],
          ["cdkScrollable", "", 1, "mat-drawer-inner-container"],
        ],
        template: function (n, o) {
          n & 1 && (Q(), l(0, "div", 1, 0), S(2), u());
        },
        dependencies: [lr],
        encapsulation: 2,
        data: { animation: [dp.transformDrawer] },
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })(),
  $i = (() => {
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
        this._autosize = Tt(e);
      }
      get hasBackdrop() {
        return (
          this._drawerHasBackdrop(this._start) ||
          this._drawerHasBackdrop(this._end)
        );
      }
      set hasBackdrop(e) {
        this._backdropOverride = e == null ? null : Tt(e);
      }
      get scrollable() {
        return this._userContent || this._content;
      }
      constructor(e, n, o, a, s, d = !1, c) {
        (this._dir = e),
          (this._element = n),
          (this._ngZone = o),
          (this._changeDetectorRef = a),
          (this._animationMode = c),
          (this._drawers = new Jt()),
          (this.backdropClick = new W()),
          (this._destroyed = new M()),
          (this._doCheckSubject = new M()),
          (this._contentMargins = { left: null, right: null }),
          (this._contentMarginChanges = new M()),
          (this._injector = v(It)),
          e &&
            e.change.pipe(z(this._destroyed)).subscribe(() => {
              this._validateDrawers(), this.updateContentMargins();
            }),
          s
            .change()
            .pipe(z(this._destroyed))
            .subscribe(() => this.updateContentMargins()),
          (this._autosize = d);
      }
      ngAfterContentInit() {
        this._allDrawers.changes
          .pipe(yt(this._allDrawers), z(this._destroyed))
          .subscribe((e) => {
            this._drawers.reset(
              e.filter((n) => !n._container || n._container === this),
            ),
              this._drawers.notifyOnChanges();
          }),
          this._drawers.changes.pipe(yt(null)).subscribe(() => {
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
              .pipe(ye(10), z(this._destroyed))
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
          n = 0;
        if (this._left && this._left.opened) {
          if (this._left.mode == "side") e += this._left._getWidth();
          else if (this._left.mode == "push") {
            let o = this._left._getWidth();
            (e += o), (n -= o);
          }
        }
        if (this._right && this._right.opened) {
          if (this._right.mode == "side") n += this._right._getWidth();
          else if (this._right.mode == "push") {
            let o = this._right._getWidth();
            (n += o), (e -= o);
          }
        }
        (e = e || null),
          (n = n || null),
          (e !== this._contentMargins.left ||
            n !== this._contentMargins.right) &&
            ((this._contentMargins = { left: e, right: n }),
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
            it((n) => n.fromState !== n.toState),
            z(this._drawers.changes),
          )
          .subscribe((n) => {
            n.toState !== "open-instant" &&
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
            kt(
              () => {
                this._validateDrawers();
              },
              { injector: this._injector, phase: ja.Read },
            );
          });
      }
      _watchDrawerMode(e) {
        e &&
          e._modeChanged
            .pipe(z(ve(this._drawers.changes, this._destroyed)))
            .subscribe(() => {
              this.updateContentMargins(),
                this._changeDetectorRef.markForCheck();
            });
      }
      _setContainerClass(e) {
        let n = this._element.nativeElement.classList,
          o = "mat-drawer-container-has-open";
        e ? n.add(o) : n.remove(o);
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
    (t.ɵfac = function (n) {
      return new (n || t)(h(Bt, 8), h(k), h(D), h(J), h(Ed), h(lp), h(ft, 8));
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [["mat-drawer-container"]],
        contentQueries: function (n, o, a) {
          if ((n & 1 && (X(a, fe, 5), X(a, Hi, 5)), n & 2)) {
            let s;
            L((s = j())) && (o._content = s.first),
              L((s = j())) && (o._allDrawers = s);
          }
        },
        viewQuery: function (n, o) {
          if ((n & 1 && Et(fe, 5), n & 2)) {
            let a;
            L((a = j())) && (o._userContent = a.first);
          }
        },
        hostAttrs: [1, "mat-drawer-container"],
        hostVars: 2,
        hostBindings: function (n, o) {
          n & 2 &&
            $("mat-drawer-container-explicit-backdrop", o._backdropOverride);
        },
        inputs: { autosize: "autosize", hasBackdrop: "hasBackdrop" },
        outputs: { backdropClick: "backdropClick" },
        exportAs: ["matDrawerContainer"],
        standalone: !0,
        features: [lt([{ provide: Dd, useExisting: t }]), V],
        ngContentSelectors: ap,
        decls: 4,
        vars: 2,
        consts: [
          [1, "mat-drawer-backdrop", 3, "mat-drawer-shown"],
          [1, "mat-drawer-backdrop", 3, "click"],
        ],
        template: function (n, o) {
          n & 1 &&
            (Q(op),
            ct(0, sp, 1, 2, "div", 0),
            S(1),
            S(2, 1),
            ct(3, cp, 2, 0, "mat-drawer-content")),
            n & 2 &&
              (vt(o.hasBackdrop ? 0 : -1), H(3), vt(o._content ? -1 : 3));
        },
        dependencies: [fe],
        styles: [
          '.mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-app-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-app-background));box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color)}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-app-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow);background-color:var(--mat-sidenav-container-background-color, var(--mat-app-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));width:var(--mat-sidenav-container-width);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer[style*="visibility: hidden"]{display:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}',
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })();
var mp = ["*", [["mat-toolbar-row"]]],
  pp = ["*", "mat-toolbar-row"],
  fp = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵdir = P({
        type: t,
        selectors: [["mat-toolbar-row"]],
        hostAttrs: [1, "mat-toolbar-row"],
        exportAs: ["matToolbarRow"],
        standalone: !0,
      }));
    let i = t;
    return i;
  })(),
  Md = (() => {
    let t = class t {
      constructor(e, n, o) {
        (this._elementRef = e), (this._platform = n), (this._document = o);
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
    (t.ɵfac = function (n) {
      return new (n || t)(h(k), h(Z), h(R));
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [["mat-toolbar"]],
        contentQueries: function (n, o, a) {
          if ((n & 1 && X(a, fp, 5), n & 2)) {
            let s;
            L((s = j())) && (o._toolbarRows = s);
          }
        },
        hostAttrs: [1, "mat-toolbar"],
        hostVars: 6,
        hostBindings: function (n, o) {
          n & 2 &&
            (Wt(o.color ? "mat-" + o.color : ""),
            $("mat-toolbar-multiple-rows", o._toolbarRows.length > 0)(
              "mat-toolbar-single-row",
              o._toolbarRows.length === 0,
            ));
        },
        inputs: { color: "color" },
        exportAs: ["matToolbar"],
        standalone: !0,
        features: [V],
        ngContentSelectors: pp,
        decls: 2,
        vars: 0,
        template: function (n, o) {
          n & 1 && (Q(mp), S(0), S(1, 1));
        },
        styles: [
          ".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-app-surface));color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-app-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-app-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-app-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-app-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-app-title-large-tracking));margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface));--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })();
var Ad = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = F({ type: t })),
    (t.ɵinj = T({ imports: [K, K] }));
  let i = t;
  return i;
})();
var ur = class i {
  static ɵfac = function (r) {
    return new (r || i)();
  };
  static ɵcmp = C({
    type: i,
    selectors: [["app-svg-icon"]],
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
      r & 1 && (Er(), l(0, "svg", 0)(1, "g", 1), I(2, "path", 2), u()());
    },
  });
};
var hr = class i {
  static ɵfac = function (r) {
    return new (r || i)();
  };
  static ɵcmp = C({
    type: i,
    selectors: [["app-top-nav"]],
    decls: 14,
    vars: 0,
    consts: [
      ["color", "primary", 1, "top-nav"],
      ["routerLink", "introduction", "mat-button", ""],
      [1, "icon-button"],
      [1, "icon", 2, "width", "24px", "height", "24px", "padding-right", "5px"],
      [1, "icon"],
      ["mat-button", "", "routerLink", "web-app", "routerLinkActive", "active"],
      ["mat-button", "", "routerLink", "artwork", "routerLinkActive", "active"],
      ["mat-button", "", "routerLink", "others", "routerLinkActive", "active"],
    ],
    template: function (r, e) {
      r & 1 &&
        (l(0, "mat-toolbar", 0)(1, "button", 1)(2, "div", 2)(3, "div", 3),
        I(4, "app-svg-icon"),
        u(),
        l(5, "div", 4),
        p(6, "Xuyen Nguyen"),
        u()()(),
        l(7, "nav")(8, "a", 5),
        p(9, "Web App"),
        u(),
        l(10, "a", 6),
        p(11, "Artwork"),
        u(),
        l(12, "a", 7),
        p(13, "Other"),
        u()()());
    },
    dependencies: [Mn, oc, Hc, Kn, Md, ur],
    styles: [
      ".top-nav[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;height:3.5rem;position:sticky!important}.icon-button[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:row}",
    ],
  });
};
var mr = class i {
  title = "PortfolioWebsite";
  static ɵfac = function (r) {
    return new (r || i)();
  };
  static ɵcmp = C({
    type: i,
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
        (I(0, "app-top-nav"),
        l(1, "main")(2, "mat-drawer-container", 1)(3, "mat-drawer", 2, 0)(
          5,
          "p",
        ),
        p(6, "Auto-resizing sidenav"),
        u()(),
        l(7, "mat-drawer-content")(8, "div", 3),
        I(9, "router-outlet"),
        u()()()());
    },
    dependencies: [Eo, $i, Hi, fe, hr],
    styles: [
      ".main-content[_ngcontent-%COMP%]{padding:2rem;height:fit-content;overflow:auto}.drawer-container[_ngcontent-%COMP%]{background-color:#fff;width:100%}.side-nav-drawer[_ngcontent-%COMP%]{width:20vw;max-width:15rem;height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:row;overflow:auto;height:calc(100vh - 3.5rem)}",
    ],
  });
};
var _p = "@",
  yp = (() => {
    let t = class t {
      constructor(e, n, o, a, s) {
        (this.doc = e),
          (this.delegate = n),
          (this.zone = o),
          (this.animationType = a),
          (this.moduleImpl = s),
          (this._rendererFactoryPromise = null),
          (this.scheduler = v(Na, { optional: !0 })),
          (this.loadingSchedulerFn = v(wp, { optional: !0 }));
      }
      ngOnDestroy() {
        this._engine?.flush();
      }
      loadImpl() {
        let e = () =>
            this.moduleImpl ?? import("./chunk-7TCUBQKU.js").then((o) => o),
          n;
        return (
          this.loadingSchedulerFn
            ? (n = this.loadingSchedulerFn(e))
            : (n = e()),
          n
            .catch((o) => {
              throw new G(5300, !1);
            })
            .then(({ ɵcreateEngine: o, ɵAnimationRendererFactory: a }) => {
              this._engine = o(this.animationType, this.doc);
              let s = new a(this.delegate, this._engine, this.zone);
              return (this.delegate = s), s;
            })
        );
      }
      createRenderer(e, n) {
        let o = this.delegate.createRenderer(e, n);
        if (o.ɵtype === 0) return o;
        typeof o.throwOnSyntheticProps == "boolean" &&
          (o.throwOnSyntheticProps = !1);
        let a = new wa(o);
        return (
          n?.data?.animation &&
            !this._rendererFactoryPromise &&
            (this._rendererFactoryPromise = this.loadImpl()),
          this._rendererFactoryPromise
            ?.then((s) => {
              let d = s.createRenderer(e, n);
              a.use(d), this.scheduler?.notify(10);
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
    (t.ɵfac = function (n) {
      ee();
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac }));
    let i = t;
    return i;
  })(),
  wa = class {
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
    insertBefore(t, r, e, n) {
      this.delegate.insertBefore(t, r, e, n);
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
    setAttribute(t, r, e, n) {
      this.delegate.setAttribute(t, r, e, n);
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
    setStyle(t, r, e, n) {
      this.delegate.setStyle(t, r, e, n);
    }
    removeStyle(t, r, e) {
      this.delegate.removeStyle(t, r, e);
    }
    setProperty(t, r, e) {
      this.shouldReplay(r) && this.replay.push((n) => n.setProperty(t, r, e)),
        this.delegate.setProperty(t, r, e);
    }
    setValue(t, r) {
      this.delegate.setValue(t, r);
    }
    listen(t, r, e) {
      return (
        this.shouldReplay(r) && this.replay.push((n) => n.listen(t, r, e)),
        this.delegate.listen(t, r, e)
      );
    }
    shouldReplay(t) {
      return this.replay !== null && t.startsWith(_p);
    }
  },
  wp = new x("");
function kd(i = "animations") {
  return (
    Pa("NgAsyncAnimations"),
    Zi([
      {
        provide: Xi,
        useFactory: (t, r, e) => new yp(t, r, e, i),
        deps: [R, dn, D],
      },
      {
        provide: ft,
        useValue: i === "noop" ? "NoopAnimations" : "BrowserAnimations",
      },
    ])
  );
}
var Rd = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = F({ type: t })),
    (t.ɵinj = T({ imports: [K, K] }));
  let i = t;
  return i;
})();
var pr = class i {
  static ɵfac = function (r) {
    return new (r || i)();
  };
  static ɵmod = F({ type: i, bootstrap: [mr] });
  static ɵinj = T({
    providers: [kd()],
    imports: [fs, dr, Rd, $c, Ad, Rc, Nc, Lc, $i, Hi, fe, pe, Ui, Id, _a],
  });
};
ps()
  .bootstrapModule(pr, { ngZoneEventCoalescing: !0 })
  .catch((i) => console.error(i));
