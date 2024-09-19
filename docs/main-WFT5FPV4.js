import {
  $ as v,
  $a as Gt,
  $b as es,
  A as vr,
  Aa as Jt,
  Ab as Rr,
  B as ve,
  Ba as mt,
  Bb as Ba,
  C as be,
  Ca as ei,
  Cb as Tr,
  D as _e,
  Da as Ta,
  Db as rn,
  E as br,
  Ea as Fa,
  Eb as Ua,
  F as xt,
  Fa as ii,
  Fb as J,
  G as Ke,
  Ga as Y,
  Gb as Ha,
  H as Ye,
  Ha as h,
  Hb as $a,
  I as qi,
  Ia as te,
  Ib as Ga,
  J as Ht,
  Ja as Oa,
  Jb as K,
  K as _r,
  Ka as Yi,
  Kb as oi,
  L as Ia,
  La as Xi,
  Lb as Ie,
  M as Ea,
  Ma as Er,
  Mb as Ot,
  N as Qi,
  Na,
  Nb as Wa,
  O as _t,
  Oa as Dr,
  Ob as qa,
  P as lt,
  Pa as Ce,
  Pb as on,
  Q as z,
  Qa as pt,
  Qb as Qa,
  R as it,
  Ra as ut,
  Rb as Za,
  S as $,
  Sa as Pa,
  Sb as R,
  T as $t,
  Ta as Sr,
  Tb as Ka,
  U as ye,
  Ua as ft,
  Ub as ai,
  V as w,
  Va as La,
  Vb as Ya,
  W as T,
  Wa as Mt,
  Wb as Xa,
  X as Da,
  Xa as W,
  Xb as si,
  Y as x,
  Ya as kt,
  Yb as Ja,
  Z as yr,
  Za as Ar,
  Zb as an,
  _ as b,
  _a as H,
  _b as ts,
  a as g,
  aa as wr,
  ab as gt,
  ac as Fr,
  b as U,
  ba as Sa,
  bb as l,
  bc as is,
  ca as Xe,
  cb as u,
  cc as ns,
  d as Ge,
  da as C,
  db as I,
  e as wa,
  ea as F,
  eb as Mr,
  f as We,
  fa as P,
  fb as ni,
  fc as rs,
  g as pr,
  ga as Zi,
  gb as ja,
  gc as Or,
  h as fr,
  ha as Aa,
  hb as rt,
  i as A,
  ia as Je,
  ib as Va,
  ic as Nr,
  j as dt,
  ja as At,
  jb as ee,
  jc as Pr,
  k as Ut,
  ka as Ft,
  kb as q,
  kc as Lr,
  l as st,
  la as xr,
  lb as D,
  m as y,
  ma as Cr,
  mb as X,
  n as qe,
  na as Ir,
  nb as It,
  o as Gi,
  oa as we,
  ob as L,
  p as xa,
  pa as xe,
  pb as j,
  q as M,
  qa as Ct,
  qb as p,
  r as fe,
  ra as Ma,
  rb as ri,
  s as ht,
  sa as G,
  sb as ct,
  t as Qe,
  ta as S,
  tb as V,
  u as Wi,
  ua as Ki,
  ub as Ji,
  v as gr,
  va as k,
  vb as za,
  w as Ca,
  wa as Xt,
  wb as tn,
  x as Ze,
  xa as ka,
  xb as en,
  y as ge,
  ya as ti,
  yb as kr,
  z as et,
  za as Ra,
  zb as nn,
} from "./chunk-DTPBVGR4.js";
var zr = class extends Za {
    constructor() {
      super(...arguments), (this.supportsDOMEvents = !0);
    }
  },
  Br = class i extends zr {
    static makeCurrent() {
      Qa(new i());
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
      let r = kd();
      return r == null ? null : Rd(r);
    }
    resetBaseElement() {
      ci = null;
    }
    getUserAgent() {
      return window.navigator.userAgent;
    }
    getCookie(t) {
      return Ja(document.cookie, t);
    }
  },
  ci = null;
function kd() {
  return (
    (ci = ci || document.querySelector("base")),
    ci ? ci.getAttribute("href") : null
  );
}
function Rd(i) {
  return new URL(i, document.baseURI).pathname;
}
var Ur = class {
    addToWindow(t) {
      ($t.getAngularTestability = (e, n = !0) => {
        let o = t.findTestabilityInTree(e, n);
        if (o == null) throw new $(5103, !1);
        return o;
      }),
        ($t.getAllAngularTestabilities = () => t.getAllTestabilities()),
        ($t.getAllAngularRootElements = () => t.getAllRootElements());
      let r = (e) => {
        let n = $t.getAllAngularTestabilities(),
          o = n.length,
          a = function () {
            o--, o == 0 && e();
          };
        n.forEach((s) => {
          s.whenStable(a);
        });
      };
      $t.frameworkStabilizers || ($t.frameworkStabilizers = []),
        $t.frameworkStabilizers.push(r);
    }
    findTestabilityInTree(t, r, e) {
      if (r == null) return null;
      let n = t.getTestability(r);
      return (
        n ??
        (e
          ? on().isShadowRoot(r)
            ? this.findTestabilityInTree(t, r.host, !0)
            : this.findTestabilityInTree(t, r.parentElement, !0)
          : null)
      );
    }
  },
  Td = (() => {
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
  sn = new x(""),
  ss = (() => {
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
          throw new $(5101, !1);
        return this._eventNameToPlugin.set(e, n), n;
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(b(sn), b(S));
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
  jr = "ng-app-id",
  cs = (() => {
    let t = class t {
      constructor(e, n, o, a = {}) {
        (this.doc = e),
          (this.appId = n),
          (this.nonce = o),
          (this.platformId = a),
          (this.styleRef = new Map()),
          (this.hostNodes = new Set()),
          (this.styleNodesInDOM = this.collectServerRenderedStyles()),
          (this.platformIsServer = Fr(a)),
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
        let e = this.doc.head?.querySelectorAll(`style[${jr}="${this.appId}"]`);
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
        if (a?.parentNode === e) return o.delete(n), a.removeAttribute(jr), a;
        {
          let s = this.doc.createElement("style");
          return (
            this.nonce && s.setAttribute("nonce", this.nonce),
            (s.textContent = n),
            this.platformIsServer && s.setAttribute(jr, this.appId),
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
      return new (n || t)(b(R), b(ti), b(ei, 8), b(Jt));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac }));
    let i = t;
    return i;
  })(),
  Vr = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
    math: "http://www.w3.org/1998/Math/MathML",
  },
  Gr = /%COMP%/g,
  ds = "%COMP%",
  Fd = `_nghost-${ds}`,
  Od = `_ngcontent-${ds}`,
  Nd = !0,
  Pd = new x("", { providedIn: "root", factory: () => Nd });
function Ld(i) {
  return Od.replace(Gr, i);
}
function jd(i) {
  return Fd.replace(Gr, i);
}
function ls(i, t) {
  return t.map((r) => r.replace(Gr, i));
}
var cn = (() => {
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
          (this.platformIsServer = Fr(d)),
          (this.defaultRenderer = new li(e, s, c, this.platformIsServer));
      }
      createRenderer(e, n) {
        if (!e || !n) return this.defaultRenderer;
        this.platformIsServer &&
          n.encapsulation === Xe.ShadowDom &&
          (n = U(g({}, n), { encapsulation: Xe.Emulated }));
        let o = this.getOrCreateRenderer(e, n);
        return (
          o instanceof dn
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
            case Xe.Emulated:
              a = new dn(c, m, n, this.appId, f, s, d, _);
              break;
            case Xe.ShadowDom:
              return new Hr(c, m, e, n, s, d, this.nonce, _);
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
      return new (n || t)(b(ss), b(cs), b(ti), b(Pd), b(R), b(Jt), b(S), b(ei));
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
        ? this.doc.createElementNS(Vr[r] || r, t)
        : this.doc.createElement(t);
    }
    createComment(t) {
      return this.doc.createComment(t);
    }
    createText(t) {
      return this.doc.createTextNode(t);
    }
    appendChild(t, r) {
      (os(t) ? t.content : t).appendChild(r);
    }
    insertBefore(t, r, e) {
      t && (os(t) ? t.content : t).insertBefore(r, e);
    }
    removeChild(t, r) {
      r.remove();
    }
    selectRootElement(t, r) {
      let e = typeof t == "string" ? this.doc.querySelector(t) : t;
      if (!e) throw new $(-5104, !1);
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
        let o = Vr[n];
        o ? t.setAttributeNS(o, r, e) : t.setAttribute(r, e);
      } else t.setAttribute(r, e);
    }
    removeAttribute(t, r, e) {
      if (e) {
        let n = Vr[e];
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
      n & (ii.DashCase | ii.Important)
        ? t.style.setProperty(r, e, n & ii.Important ? "important" : "")
        : (t.style[r] = e);
    }
    removeStyle(t, r, e) {
      e & ii.DashCase ? t.style.removeProperty(r) : (t.style[r] = "");
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
        ((t = on().getGlobalEventTarget(this.doc, t)), !t)
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
function os(i) {
  return i.tagName === "TEMPLATE" && i.content !== void 0;
}
var Hr = class extends li {
    constructor(t, r, e, n, o, a, s, d) {
      super(t, o, a, d),
        (this.sharedStylesHost = r),
        (this.hostEl = e),
        (this.shadowRoot = e.attachShadow({ mode: "open" })),
        this.sharedStylesHost.addHost(this.shadowRoot);
      let c = ls(n.id, n.styles);
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
        (this.styles = d ? ls(d, e.styles) : e.styles);
    }
    applyStyles() {
      this.sharedStylesHost.addStyles(this.styles);
    }
    destroy() {
      this.removeStylesOnCompDestroy &&
        this.sharedStylesHost.removeStyles(this.styles);
    }
  },
  dn = class extends ui {
    constructor(t, r, e, n, o, a, s, d) {
      let c = n + "-" + e.id;
      super(t, r, e, o, a, s, d, c),
        (this.contentAttr = Ld(c)),
        (this.hostAttr = jd(c));
    }
    applyToHost(t) {
      this.applyStyles(), this.setAttribute(t, this.hostAttr, "");
    }
    createElement(t, r) {
      let e = super.createElement(t, r);
      return super.setAttribute(e, this.contentAttr, ""), e;
    }
  },
  Vd = (() => {
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
  zd = (() => {
    let t = class t extends di {
      constructor(e) {
        super(e), (this.delegate = v(Ga, { optional: !0 }));
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
  as = ["alt", "control", "meta", "shift"],
  Bd = {
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
  Ud = {
    alt: (i) => i.altKey,
    control: (i) => i.ctrlKey,
    meta: (i) => i.metaKey,
    shift: (i) => i.shiftKey,
  },
  Hd = (() => {
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
          .runOutsideAngular(() => on().onAndCancel(e, a.domEventName, s));
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
          as.forEach((m) => {
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
        let o = Bd[e.key] || e.key,
          a = "";
        return (
          n.indexOf("code.") > -1 && ((o = e.code), (a = "code.")),
          o == null || !o
            ? !1
            : ((o = o.toLowerCase()),
              o === " " ? (o = "space") : o === "." && (o = "dot"),
              as.forEach((s) => {
                if (s !== o) {
                  let d = Ud[s];
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
function $d() {
  Br.makeCurrent();
}
function Gd() {
  return new Ki();
}
function Wd() {
  return ka(document), document;
}
var qd = [
    { provide: Jt, useValue: ts },
    { provide: Ra, useValue: $d, multi: !0 },
    { provide: R, useFactory: Wd, deps: [] },
  ],
  us = Ua(Ha, "browser", qd),
  Qd = new x(""),
  Zd = [
    { provide: tn, useClass: Ur, deps: [] },
    { provide: za, useClass: en, deps: [S, kr, tn] },
    { provide: en, useClass: en, deps: [S, kr, tn] },
  ],
  Kd = [
    { provide: Aa, useValue: "root" },
    { provide: Ki, useFactory: Gd, deps: [] },
    { provide: sn, useClass: Vd, multi: !0, deps: [R, S, Jt] },
    { provide: sn, useClass: Hd, multi: !0, deps: [R] },
    { provide: sn, useClass: zd, multi: !0 },
    cn,
    cs,
    ss,
    { provide: Yi, useExisting: cn },
    { provide: ns, useClass: Td, deps: [] },
    [],
  ],
  hs = (() => {
    let t = class t {
      constructor(e) {}
      static withServerTransition(e) {
        return { ngModule: t, providers: [{ provide: ti, useValue: e.appId }] };
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(b(Qd, 12));
    }),
      (t.ɵmod = F({ type: t })),
      (t.ɵinj = T({ providers: [...Kd, ...Zd], imports: [an, $a] }));
    let i = t;
    return i;
  })();
var ms = (() => {
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
  Kr = class {
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
function ke(i) {
  return new Kr(i);
}
function Yd(i, t, r) {
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
function Xd(i, t) {
  if (i.length !== t.length) return !1;
  for (let r = 0; r < i.length; ++r) if (!Rt(i[r], t[r])) return !1;
  return !0;
}
function Rt(i, t) {
  let r = i ? Yr(i) : void 0,
    e = t ? Yr(t) : void 0;
  if (!r || !e || r.length != e.length) return !1;
  let n;
  for (let o = 0; o < r.length; o++)
    if (((n = r[o]), !Es(i[n], t[n]))) return !1;
  return !0;
}
function Yr(i) {
  return [...Object.keys(i), ...Object.getOwnPropertySymbols(i)];
}
function Es(i, t) {
  if (Array.isArray(i) && Array.isArray(t)) {
    if (i.length !== t.length) return !1;
    let r = [...i].sort(),
      e = [...t].sort();
    return r.every((n, o) => e[o] === n);
  } else return i === t;
}
function Ds(i) {
  return i.length > 0 ? i[i.length - 1] : null;
}
function qt(i) {
  return Gi(i) ? i : nn(i) ? st(Promise.resolve(i)) : y(i);
}
var Jd = { exact: As, subset: Ms },
  Ss = { exact: tl, subset: el, ignored: () => !0 };
function fs(i, t, r) {
  return (
    Jd[r.paths](i.root, t.root, r.matrixParams) &&
    Ss[r.queryParams](i.queryParams, t.queryParams) &&
    !(r.fragment === "exact" && i.fragment !== t.fragment)
  );
}
function tl(i, t) {
  return Rt(i, t);
}
function As(i, t, r) {
  if (
    !ne(i.segments, t.segments) ||
    !hn(i.segments, t.segments, r) ||
    i.numberOfChildren !== t.numberOfChildren
  )
    return !1;
  for (let e in t.children)
    if (!i.children[e] || !As(i.children[e], t.children[e], r)) return !1;
  return !0;
}
function el(i, t) {
  return (
    Object.keys(t).length <= Object.keys(i).length &&
    Object.keys(t).every((r) => Es(i[r], t[r]))
  );
}
function Ms(i, t, r) {
  return ks(i, t, t.segments, r);
}
function ks(i, t, r, e) {
  if (i.segments.length > r.length) {
    let n = i.segments.slice(0, r.length);
    return !(!ne(n, r) || t.hasChildren() || !hn(n, r, e));
  } else if (i.segments.length === r.length) {
    if (!ne(i.segments, r) || !hn(i.segments, r, e)) return !1;
    for (let n in t.children)
      if (!i.children[n] || !Ms(i.children[n], t.children[n], e)) return !1;
    return !0;
  } else {
    let n = r.slice(0, i.segments.length),
      o = r.slice(i.segments.length);
    return !ne(i.segments, n) || !hn(i.segments, n, e) || !i.children[E]
      ? !1
      : ks(i.children[E], t, o, e);
  }
}
function hn(i, t, r) {
  return t.every((e, n) => Ss[r](i[n].parameters, e.parameters));
}
var Pt = class {
    constructor(t = new N([], {}), r = {}, e = null) {
      (this.root = t), (this.queryParams = r), (this.fragment = e);
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= ke(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      return rl.serialize(this);
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
      return mn(this);
    }
  },
  ie = class {
    constructor(t, r) {
      (this.path = t), (this.parameters = r);
    }
    get parameterMap() {
      return (this._parameterMap ??= ke(this.parameters)), this._parameterMap;
    }
    toString() {
      return Ts(this);
    }
  };
function il(i, t) {
  return ne(i, t) && i.every((r, e) => Rt(r.parameters, t[e].parameters));
}
function ne(i, t) {
  return i.length !== t.length ? !1 : i.every((r, e) => r.path === t[e].path);
}
function nl(i, t) {
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
var Di = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵprov = w({ token: t, factory: () => new Re(), providedIn: "root" }));
    let i = t;
    return i;
  })(),
  Re = class {
    parse(t) {
      let r = new Jr(t);
      return new Pt(
        r.parseRootSegment(),
        r.parseQueryParams(),
        r.parseFragment(),
      );
    }
    serialize(t) {
      let r = `/${hi(t.root, !0)}`,
        e = sl(t.queryParams),
        n = typeof t.fragment == "string" ? `#${ol(t.fragment)}` : "";
      return `${r}${e}${n}`;
    }
  },
  rl = new Re();
function mn(i) {
  return i.segments.map((t) => Ts(t)).join("/");
}
function hi(i, t) {
  if (!i.hasChildren()) return mn(i);
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
    let r = nl(i, (e, n) =>
      n === E ? [hi(i.children[E], !1)] : [`${n}:${hi(e, !1)}`],
    );
    return Object.keys(i.children).length === 1 && i.children[E] != null
      ? `${mn(i)}/${r[0]}`
      : `${mn(i)}/(${r.join("//")})`;
  }
}
function Rs(i) {
  return encodeURIComponent(i)
    .replace(/%40/g, "@")
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",");
}
function ln(i) {
  return Rs(i).replace(/%3B/gi, ";");
}
function ol(i) {
  return encodeURI(i);
}
function Xr(i) {
  return Rs(i)
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/%26/gi, "&");
}
function pn(i) {
  return decodeURIComponent(i);
}
function gs(i) {
  return pn(i.replace(/\+/g, "%20"));
}
function Ts(i) {
  return `${Xr(i.path)}${al(i.parameters)}`;
}
function al(i) {
  return Object.entries(i)
    .map(([t, r]) => `;${Xr(t)}=${Xr(r)}`)
    .join("");
}
function sl(i) {
  let t = Object.entries(i)
    .map(([r, e]) =>
      Array.isArray(e)
        ? e.map((n) => `${ln(r)}=${ln(n)}`).join("&")
        : `${ln(r)}=${ln(e)}`,
    )
    .filter((r) => r);
  return t.length ? `?${t.join("&")}` : "";
}
var cl = /^[^\/()?;#]+/;
function Wr(i) {
  let t = i.match(cl);
  return t ? t[0] : "";
}
var dl = /^[^\/()?;=#]+/;
function ll(i) {
  let t = i.match(dl);
  return t ? t[0] : "";
}
var ul = /^[^=?&#]+/;
function hl(i) {
  let t = i.match(ul);
  return t ? t[0] : "";
}
var ml = /^[^&#]+/;
function pl(i) {
  let t = i.match(ml);
  return t ? t[0] : "";
}
var Jr = class {
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
    let t = Wr(this.remaining);
    if (t === "" && this.peekStartsWith(";")) throw new $(4009, !1);
    return this.capture(t), new ie(pn(t), this.parseMatrixParams());
  }
  parseMatrixParams() {
    let t = {};
    for (; this.consumeOptional(";"); ) this.parseParam(t);
    return t;
  }
  parseParam(t) {
    let r = ll(this.remaining);
    if (!r) return;
    this.capture(r);
    let e = "";
    if (this.consumeOptional("=")) {
      let n = Wr(this.remaining);
      n && ((e = n), this.capture(e));
    }
    t[pn(r)] = pn(e);
  }
  parseQueryParam(t) {
    let r = hl(this.remaining);
    if (!r) return;
    this.capture(r);
    let e = "";
    if (this.consumeOptional("=")) {
      let a = pl(this.remaining);
      a && ((e = a), this.capture(e));
    }
    let n = gs(r),
      o = gs(e);
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
      let e = Wr(this.remaining),
        n = this.remaining[e.length];
      if (n !== "/" && n !== ")" && n !== ";") throw new $(4010, !1);
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
    if (!this.consumeOptional(t)) throw new $(4011, !1);
  }
};
function Fs(i) {
  return i.segments.length > 0 ? new N([], { [E]: i }) : i;
}
function Os(i) {
  let t = {};
  for (let [e, n] of Object.entries(i.children)) {
    let o = Os(n);
    if (e === E && o.segments.length === 0 && o.hasChildren())
      for (let [a, s] of Object.entries(o.children)) t[a] = s;
    else (o.segments.length > 0 || o.hasChildren()) && (t[e] = o);
  }
  let r = new N(i.segments, t);
  return fl(r);
}
function fl(i) {
  if (i.numberOfChildren === 1 && i.children[E]) {
    let t = i.children[E];
    return new N(i.segments.concat(t.segments), t.children);
  }
  return i;
}
function re(i) {
  return i instanceof Pt;
}
function gl(i, t, r = null, e = null) {
  let n = Ns(i);
  return Ps(n, t, r, e);
}
function Ns(i) {
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
    n = Fs(e);
  return t ?? n;
}
function Ps(i, t, r, e) {
  let n = i;
  for (; n.parent; ) n = n.parent;
  if (t.length === 0) return qr(n, n, n, r, e);
  let o = vl(t);
  if (o.toRoot()) return qr(n, n, new N([], {}), r, e);
  let a = bl(o, n, i),
    s = a.processChildren
      ? fi(a.segmentGroup, a.index, o.commands)
      : js(a.segmentGroup, a.index, o.commands);
  return qr(n, a.segmentGroup, s, r, e);
}
function fn(i) {
  return typeof i == "object" && i != null && !i.outlets && !i.segmentPath;
}
function bi(i) {
  return typeof i == "object" && i != null && i.outlets;
}
function qr(i, t, r, e, n) {
  let o = {};
  e &&
    Object.entries(e).forEach(([d, c]) => {
      o[d] = Array.isArray(c) ? c.map((m) => `${m}`) : `${c}`;
    });
  let a;
  i === t ? (a = r) : (a = Ls(i, t, r));
  let s = Fs(Os(a));
  return new Pt(s, o, n);
}
function Ls(i, t, r) {
  let e = {};
  return (
    Object.entries(i.children).forEach(([n, o]) => {
      o === t ? (e[n] = r) : (e[n] = Ls(o, t, r));
    }),
    new N(i.segments, e)
  );
}
var gn = class {
  constructor(t, r, e) {
    if (
      ((this.isAbsolute = t),
      (this.numberOfDoubleDots = r),
      (this.commands = e),
      t && e.length > 0 && fn(e[0]))
    )
      throw new $(4003, !1);
    let n = e.find(bi);
    if (n && n !== Ds(e)) throw new $(4004, !1);
  }
  toRoot() {
    return (
      this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"
    );
  }
};
function vl(i) {
  if (typeof i[0] == "string" && i.length === 1 && i[0] === "/")
    return new gn(!0, 0, i);
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
  return new gn(r, t, e);
}
var Se = class {
  constructor(t, r, e) {
    (this.segmentGroup = t), (this.processChildren = r), (this.index = e);
  }
};
function bl(i, t, r) {
  if (i.isAbsolute) return new Se(t, !0, 0);
  if (!r) return new Se(t, !1, NaN);
  if (r.parent === null) return new Se(r, !0, 0);
  let e = fn(i.commands[0]) ? 0 : 1,
    n = r.segments.length - 1 + e;
  return _l(r, n, i.numberOfDoubleDots);
}
function _l(i, t, r) {
  let e = i,
    n = t,
    o = r;
  for (; o > n; ) {
    if (((o -= n), (e = e.parent), !e)) throw new $(4005, !1);
    n = e.segments.length;
  }
  return new Se(e, !1, n - o);
}
function yl(i) {
  return bi(i[0]) ? i[0].outlets : { [E]: i };
}
function js(i, t, r) {
  if (((i ??= new N([], {})), i.segments.length === 0 && i.hasChildren()))
    return fi(i, t, r);
  let e = wl(i, t, r),
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
        ? to(i, t, r)
        : e.match
          ? fi(i, 0, n)
          : to(i, t, r);
}
function fi(i, t, r) {
  if (r.length === 0) return new N(i.segments, {});
  {
    let e = yl(r),
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
          a !== null && (n[o] = js(i.children[o], t, a));
      }),
      Object.entries(i.children).forEach(([o, a]) => {
        e[o] === void 0 && (n[o] = a);
      }),
      new N(i.segments, n)
    );
  }
}
function wl(i, t, r) {
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
      if (!bs(d, c, a)) return o;
      e += 2;
    } else {
      if (!bs(d, {}, a)) return o;
      e++;
    }
    n++;
  }
  return { match: !0, pathIndex: n, commandIndex: e };
}
function to(i, t, r) {
  let e = i.segments.slice(0, t),
    n = 0;
  for (; n < r.length; ) {
    let o = r[n];
    if (bi(o)) {
      let d = xl(o.outlets);
      return new N(e, d);
    }
    if (n === 0 && fn(r[0])) {
      let d = i.segments[t];
      e.push(new ie(d.path, vs(r[0]))), n++;
      continue;
    }
    let a = bi(o) ? o.outlets[E] : `${o}`,
      s = n < r.length - 1 ? r[n + 1] : null;
    a && s && fn(s)
      ? (e.push(new ie(a, vs(s))), (n += 2))
      : (e.push(new ie(a, {})), n++);
  }
  return new N(e, {});
}
function xl(i) {
  let t = {};
  return (
    Object.entries(i).forEach(([r, e]) => {
      typeof e == "string" && (e = [e]),
        e !== null && (t[r] = to(new N([], {}), 0, e));
    }),
    t
  );
}
function vs(i) {
  let t = {};
  return Object.entries(i).forEach(([r, e]) => (t[r] = `${e}`)), t;
}
function bs(i, t, r) {
  return i == r.path && Rt(t, r.parameters);
}
var gi = "imperative",
  nt = (function (i) {
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
  })(nt || {}),
  yt = class {
    constructor(t, r) {
      (this.id = t), (this.url = r);
    }
  },
  Te = class extends yt {
    constructor(t, r, e = "imperative", n = null) {
      super(t, r),
        (this.type = nt.NavigationStart),
        (this.navigationTrigger = e),
        (this.restoredState = n);
    }
    toString() {
      return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
    }
  },
  Dt = class extends yt {
    constructor(t, r, e) {
      super(t, r), (this.urlAfterRedirects = e), (this.type = nt.NavigationEnd);
    }
    toString() {
      return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
    }
  },
  bt = (function (i) {
    return (
      (i[(i.Redirect = 0)] = "Redirect"),
      (i[(i.SupersededByNewNavigation = 1)] = "SupersededByNewNavigation"),
      (i[(i.NoDataFromResolver = 2)] = "NoDataFromResolver"),
      (i[(i.GuardRejected = 3)] = "GuardRejected"),
      i
    );
  })(bt || {}),
  vn = (function (i) {
    return (
      (i[(i.IgnoredSameUrlNavigation = 0)] = "IgnoredSameUrlNavigation"),
      (i[(i.IgnoredByUrlHandlingStrategy = 1)] =
        "IgnoredByUrlHandlingStrategy"),
      i
    );
  })(vn || {}),
  Nt = class extends yt {
    constructor(t, r, e, n) {
      super(t, r),
        (this.reason = e),
        (this.code = n),
        (this.type = nt.NavigationCancel);
    }
    toString() {
      return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
    }
  },
  Wt = class extends yt {
    constructor(t, r, e, n) {
      super(t, r),
        (this.reason = e),
        (this.code = n),
        (this.type = nt.NavigationSkipped);
    }
  },
  _i = class extends yt {
    constructor(t, r, e, n) {
      super(t, r),
        (this.error = e),
        (this.target = n),
        (this.type = nt.NavigationError);
    }
    toString() {
      return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
    }
  },
  bn = class extends yt {
    constructor(t, r, e, n) {
      super(t, r),
        (this.urlAfterRedirects = e),
        (this.state = n),
        (this.type = nt.RoutesRecognized);
    }
    toString() {
      return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  eo = class extends yt {
    constructor(t, r, e, n) {
      super(t, r),
        (this.urlAfterRedirects = e),
        (this.state = n),
        (this.type = nt.GuardsCheckStart);
    }
    toString() {
      return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  io = class extends yt {
    constructor(t, r, e, n, o) {
      super(t, r),
        (this.urlAfterRedirects = e),
        (this.state = n),
        (this.shouldActivate = o),
        (this.type = nt.GuardsCheckEnd);
    }
    toString() {
      return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
    }
  },
  no = class extends yt {
    constructor(t, r, e, n) {
      super(t, r),
        (this.urlAfterRedirects = e),
        (this.state = n),
        (this.type = nt.ResolveStart);
    }
    toString() {
      return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  ro = class extends yt {
    constructor(t, r, e, n) {
      super(t, r),
        (this.urlAfterRedirects = e),
        (this.state = n),
        (this.type = nt.ResolveEnd);
    }
    toString() {
      return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  oo = class {
    constructor(t) {
      (this.route = t), (this.type = nt.RouteConfigLoadStart);
    }
    toString() {
      return `RouteConfigLoadStart(path: ${this.route.path})`;
    }
  },
  ao = class {
    constructor(t) {
      (this.route = t), (this.type = nt.RouteConfigLoadEnd);
    }
    toString() {
      return `RouteConfigLoadEnd(path: ${this.route.path})`;
    }
  },
  so = class {
    constructor(t) {
      (this.snapshot = t), (this.type = nt.ChildActivationStart);
    }
    toString() {
      return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  co = class {
    constructor(t) {
      (this.snapshot = t), (this.type = nt.ChildActivationEnd);
    }
    toString() {
      return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  lo = class {
    constructor(t) {
      (this.snapshot = t), (this.type = nt.ActivationStart);
    }
    toString() {
      return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  uo = class {
    constructor(t) {
      (this.snapshot = t), (this.type = nt.ActivationEnd);
    }
    toString() {
      return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""}')`;
    }
  },
  _n = class {
    constructor(t, r, e) {
      (this.routerEvent = t),
        (this.position = r),
        (this.anchor = e),
        (this.type = nt.Scroll);
    }
    toString() {
      let t = this.position ? `${this.position[0]}, ${this.position[1]}` : null;
      return `Scroll(anchor: '${this.anchor}', position: '${t}')`;
    }
  },
  yi = class {},
  Fe = class {
    constructor(t, r) {
      (this.url = t), (this.navigationBehaviorOptions = r);
    }
  };
function Cl(i, t) {
  return (
    i.providers &&
      !i._injector &&
      (i._injector = Sr(i.providers, t, `Route: ${i.path}`)),
    i._injector ?? t
  );
}
function Et(i) {
  return i.outlet || E;
}
function Il(i, t) {
  let r = i.filter((e) => Et(e) === t);
  return r.push(...i.filter((e) => Et(e) !== t)), r;
}
function Si(i) {
  if (!i) return null;
  if (i.routeConfig?._injector) return i.routeConfig._injector;
  for (let t = i.parent; t; t = t.parent) {
    let r = t.routeConfig;
    if (r?._loadedInjector) return r._loadedInjector;
    if (r?._injector) return r._injector;
  }
  return null;
}
var ho = class {
    get injector() {
      return Si(this.route?.snapshot) ?? this.rootInjector;
    }
    set injector(t) {}
    constructor(t) {
      (this.rootInjector = t),
        (this.outlet = null),
        (this.route = null),
        (this.children = new Ai(this.rootInjector)),
        (this.attachRef = null);
    }
  },
  Ai = (() => {
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
          n || ((n = new ho(this.rootInjector)), this.contexts.set(e, n)), n
        );
      }
      getContext(e) {
        return this.contexts.get(e) || null;
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(b(Je));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })(),
  yn = class {
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
      let r = mo(t, this._root);
      return r ? r.children.map((e) => e.value) : [];
    }
    firstChild(t) {
      let r = mo(t, this._root);
      return r && r.children.length > 0 ? r.children[0].value : null;
    }
    siblings(t) {
      let r = po(t, this._root);
      return r.length < 2
        ? []
        : r[r.length - 2].children.map((n) => n.value).filter((n) => n !== t);
    }
    pathFromRoot(t) {
      return po(t, this._root).map((r) => r.value);
    }
  };
function mo(i, t) {
  if (i === t.value) return t;
  for (let r of t.children) {
    let e = mo(i, r);
    if (e) return e;
  }
  return null;
}
function po(i, t) {
  if (i === t.value) return [t];
  for (let r of t.children) {
    let e = po(i, r);
    if (e.length) return e.unshift(t), e;
  }
  return [];
}
var vt = class {
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
var wn = class extends yn {
  constructor(t, r) {
    super(t), (this.snapshot = r), Co(this, t);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function Vs(i) {
  let t = El(i),
    r = new dt([new ie("", {})]),
    e = new dt({}),
    n = new dt({}),
    o = new dt({}),
    a = new dt(""),
    s = new oe(r, e, o, a, n, E, i, t.root);
  return (s.snapshot = t.root), new wn(new vt(s, []), t);
}
function El(i) {
  let t = {},
    r = {},
    e = {},
    n = "",
    o = new Ae([], t, e, n, r, E, i, null, {});
  return new Cn("", new vt(o, []));
}
var oe = class {
  constructor(t, r, e, n, o, a, s, d) {
    (this.urlSubject = t),
      (this.paramsSubject = r),
      (this.queryParamsSubject = e),
      (this.fragmentSubject = n),
      (this.dataSubject = o),
      (this.outlet = a),
      (this.component = s),
      (this._futureSnapshot = d),
      (this.title = this.dataSubject?.pipe(M((c) => c[Ei])) ?? y(void 0)),
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
      (this._paramMap ??= this.params.pipe(M((t) => ke(t)))), this._paramMap
    );
  }
  get queryParamMap() {
    return (
      (this._queryParamMap ??= this.queryParams.pipe(M((t) => ke(t)))),
      this._queryParamMap
    );
  }
  toString() {
    return this.snapshot
      ? this.snapshot.toString()
      : `Future(${this._futureSnapshot})`;
  }
};
function xn(i, t, r = "emptyOnly") {
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
    n && Bs(n) && (e.resolve[Ei] = n.title),
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
      return (this._paramMap ??= ke(this.params)), this._paramMap;
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= ke(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      let t = this.url.map((e) => e.toString()).join("/"),
        r = this.routeConfig ? this.routeConfig.path : "";
      return `Route(url:'${t}', path:'${r}')`;
    }
  },
  Cn = class extends yn {
    constructor(t, r) {
      super(r), (this.url = t), Co(this, r);
    }
    toString() {
      return zs(this._root);
    }
  };
function Co(i, t) {
  (t.value._routerState = i), t.children.forEach((r) => Co(i, r));
}
function zs(i) {
  let t = i.children.length > 0 ? ` { ${i.children.map(zs).join(", ")} } ` : "";
  return `${i.value}${t}`;
}
function Qr(i) {
  if (i.snapshot) {
    let t = i.snapshot,
      r = i._futureSnapshot;
    (i.snapshot = r),
      Rt(t.queryParams, r.queryParams) ||
        i.queryParamsSubject.next(r.queryParams),
      t.fragment !== r.fragment && i.fragmentSubject.next(r.fragment),
      Rt(t.params, r.params) || i.paramsSubject.next(r.params),
      Xd(t.url, r.url) || i.urlSubject.next(r.url),
      Rt(t.data, r.data) || i.dataSubject.next(r.data);
  } else
    (i.snapshot = i._futureSnapshot),
      i.dataSubject.next(i._futureSnapshot.data);
}
function fo(i, t) {
  let r = Rt(i.params, t.params) && il(i.url, t.url),
    e = !i.parent != !t.parent;
  return r && !e && (!i.parent || fo(i.parent, t.parent));
}
function Bs(i) {
  return typeof i.title == "string" || i.title === null;
}
var Io = (() => {
    let t = class t {
      constructor() {
        (this.activated = null),
          (this._activatedRoute = null),
          (this.name = E),
          (this.activateEvents = new G()),
          (this.deactivateEvents = new G()),
          (this.attachEvents = new G()),
          (this.detachEvents = new G()),
          (this.parentContexts = v(Ai)),
          (this.location = v(Er)),
          (this.changeDetector = v(J)),
          (this.inputBinder = v(Mn, { optional: !0 })),
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
        if (!this.activated) throw new $(4012, !1);
        return this.activated.instance;
      }
      get activatedRoute() {
        if (!this.activated) throw new $(4012, !1);
        return this._activatedRoute;
      }
      get activatedRouteData() {
        return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
      }
      detach() {
        if (!this.activated) throw new $(4012, !1);
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
        if (this.isActivated) throw new $(4013, !1);
        this._activatedRoute = e;
        let o = this.location,
          s = e.snapshot.component,
          d = this.parentContexts.getOrCreateContext(this.name).children,
          c = new go(e, d, o.injector);
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
  go = class i {
    __ngOutletInjector(t) {
      return new i(this.route, this.childContexts, t);
    }
    constructor(t, r, e) {
      (this.route = t), (this.childContexts = r), (this.parent = e);
    }
    get(t, r) {
      return t === oe
        ? this.route
        : t === Ai
          ? this.childContexts
          : this.parent.get(t, r);
    }
  },
  Mn = new x(""),
  _s = (() => {
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
          o = fe([n.queryParams, n.params, n.data])
            .pipe(
              lt(
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
              let s = qa(n.component);
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
function Dl(i, t, r) {
  let e = wi(i, t._root, r ? r._root : void 0);
  return new wn(e, t);
}
function wi(i, t, r) {
  if (r && i.shouldReuseRoute(t.value, r.value.snapshot)) {
    let e = r.value;
    e._futureSnapshot = t.value;
    let n = Sl(i, t, r);
    return new vt(e, n);
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
    let e = Al(t.value),
      n = t.children.map((o) => wi(i, o));
    return new vt(e, n);
  }
}
function Sl(i, t, r) {
  return t.children.map((e) => {
    for (let n of r.children)
      if (i.shouldReuseRoute(e.value, n.value.snapshot)) return wi(i, e, n);
    return wi(i, e);
  });
}
function Al(i) {
  return new oe(
    new dt(i.url),
    new dt(i.params),
    new dt(i.queryParams),
    new dt(i.fragment),
    new dt(i.data),
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
  Us = "ngNavigationCancelingError";
function In(i, t) {
  let { redirectTo: r, navigationBehaviorOptions: e } = re(t)
      ? { redirectTo: t, navigationBehaviorOptions: void 0 }
      : t,
    n = Hs(!1, bt.Redirect);
  return (n.url = r), (n.navigationBehaviorOptions = e), n;
}
function Hs(i, t) {
  let r = new Error(`NavigationCancelingError: ${i || ""}`);
  return (r[Us] = !0), (r.cancellationCode = t), r;
}
function Ml(i) {
  return $s(i) && re(i.url);
}
function $s(i) {
  return !!i && i[Us];
}
var kl = (i, t, r, e) =>
    M(
      (n) => (
        new vo(t, n.targetRouterState, n.currentRouterState, r, e).activate(i),
        n
      ),
    ),
  vo = class {
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
        Qr(this.futureState.root),
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
          this.forwardEvent(new uo(o.value.snapshot));
      }),
        t.children.length && this.forwardEvent(new co(t.value.snapshot));
    }
    activateRoutes(t, r, e) {
      let n = t.value,
        o = r ? r.value : null;
      if ((Qr(n), n === o))
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
            Qr(s.route.value),
            this.activateChildRoutes(t, null, a.children);
        } else
          (a.attachRef = null),
            (a.route = n),
            a.outlet && a.outlet.activateWith(n, a.injector),
            this.activateChildRoutes(t, null, a.children);
      } else this.activateChildRoutes(t, null, e);
    }
  },
  En = class {
    constructor(t) {
      (this.path = t), (this.route = this.path[this.path.length - 1]);
    }
  },
  Me = class {
    constructor(t, r) {
      (this.component = t), (this.route = r);
    }
  };
function Rl(i, t, r) {
  let e = i._root,
    n = t ? t._root : null;
  return mi(e, n, r, [e.value]);
}
function Tl(i) {
  let t = i.routeConfig ? i.routeConfig.canActivateChild : null;
  return !t || t.length === 0 ? null : { node: i, guards: t };
}
function Ne(i, t) {
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
      Fl(a, o[a.value.outlet], r, e.concat([a.value]), n),
        delete o[a.value.outlet];
    }),
    Object.entries(o).forEach(([a, s]) => vi(s, r.getContext(a), n)),
    n
  );
}
function Fl(
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
    let d = Ol(a, o, o.routeConfig.runGuardsAndResolvers);
    d
      ? n.canActivateChecks.push(new En(e))
      : ((o.data = a.data), (o._resolvedData = a._resolvedData)),
      o.component ? mi(i, t, s ? s.children : null, e, n) : mi(i, t, r, e, n),
      d &&
        s &&
        s.outlet &&
        s.outlet.isActivated &&
        n.canDeactivateChecks.push(new Me(s.outlet.component, a));
  } else
    a && vi(t, s, n),
      n.canActivateChecks.push(new En(e)),
      o.component
        ? mi(i, null, s ? s.children : null, e, n)
        : mi(i, null, r, e, n);
  return n;
}
function Ol(i, t, r) {
  if (typeof r == "function") return r(i, t);
  switch (r) {
    case "pathParamsChange":
      return !ne(i.url, t.url);
    case "pathParamsOrQueryParamsChange":
      return !ne(i.url, t.url) || !Rt(i.queryParams, t.queryParams);
    case "always":
      return !0;
    case "paramsOrQueryParamsChange":
      return !fo(i, t) || !Rt(i.queryParams, t.queryParams);
    case "paramsChange":
    default:
      return !fo(i, t);
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
        ? r.canDeactivateChecks.push(new Me(t.outlet.component, n))
        : r.canDeactivateChecks.push(new Me(null, n))
      : r.canDeactivateChecks.push(new Me(null, n));
}
function Mi(i) {
  return typeof i == "function";
}
function Nl(i) {
  return typeof i == "boolean";
}
function Pl(i) {
  return i && Mi(i.canLoad);
}
function Ll(i) {
  return i && Mi(i.canActivate);
}
function jl(i) {
  return i && Mi(i.canActivateChild);
}
function Vl(i) {
  return i && Mi(i.canDeactivate);
}
function zl(i) {
  return i && Mi(i.canMatch);
}
function Gs(i) {
  return i instanceof xa || i?.name === "EmptyError";
}
var un = Symbol("INITIAL_VALUE");
function Oe() {
  return lt((i) =>
    fe(i.map((t) => t.pipe(xt(1), _t(un)))).pipe(
      M((t) => {
        for (let r of t)
          if (r !== !0) {
            if (r === un) return un;
            if (r === !1 || Bl(r)) return r;
          }
        return !0;
      }),
      et((t) => t !== un),
      xt(1),
    ),
  );
}
function Bl(i) {
  return re(i) || i instanceof xi;
}
function Ul(i, t) {
  return ht((r) => {
    let {
      targetSnapshot: e,
      currentSnapshot: n,
      guards: { canActivateChecks: o, canDeactivateChecks: a },
    } = r;
    return a.length === 0 && o.length === 0
      ? y(U(g({}, r), { guardsResult: !0 }))
      : Hl(a, e, n, i).pipe(
          ht((s) => (s && Nl(s) ? $l(e, o, i, t) : y(s))),
          M((s) => U(g({}, r), { guardsResult: s })),
        );
  });
}
function Hl(i, t, r, e) {
  return st(i).pipe(
    ht((n) => Zl(n.component, n.route, r, t, e)),
    Ht((n) => n !== !0, !0),
  );
}
function $l(i, t, r, e) {
  return st(t).pipe(
    be((n) =>
      Wi(
        Wl(n.route.parent, e),
        Gl(n.route, e),
        Ql(i, n.path, r),
        ql(i, n.route, r),
      ),
    ),
    Ht((n) => n !== !0, !0),
  );
}
function Gl(i, t) {
  return i !== null && t && t(new lo(i)), y(!0);
}
function Wl(i, t) {
  return i !== null && t && t(new so(i)), y(!0);
}
function ql(i, t, r) {
  let e = t.routeConfig ? t.routeConfig.canActivate : null;
  if (!e || e.length === 0) return y(!0);
  let n = e.map((o) =>
    gr(() => {
      let a = Si(t) ?? r,
        s = Ne(o, a),
        d = Ll(s) ? s.canActivate(t, i) : At(a, () => s(t, i));
      return qt(d).pipe(Ht());
    }),
  );
  return y(n).pipe(Oe());
}
function Ql(i, t, r) {
  let e = t[t.length - 1],
    o = t
      .slice(0, t.length - 1)
      .reverse()
      .map((a) => Tl(a))
      .filter((a) => a !== null)
      .map((a) =>
        gr(() => {
          let s = a.guards.map((d) => {
            let c = Si(a.node) ?? r,
              m = Ne(d, c),
              f = jl(m) ? m.canActivateChild(e, i) : At(c, () => m(e, i));
            return qt(f).pipe(Ht());
          });
          return y(s).pipe(Oe());
        }),
      );
  return y(o).pipe(Oe());
}
function Zl(i, t, r, e, n) {
  let o = t && t.routeConfig ? t.routeConfig.canDeactivate : null;
  if (!o || o.length === 0) return y(!0);
  let a = o.map((s) => {
    let d = Si(t) ?? n,
      c = Ne(s, d),
      m = Vl(c) ? c.canDeactivate(i, t, r, e) : At(d, () => c(i, t, r, e));
    return qt(m).pipe(Ht());
  });
  return y(a).pipe(Oe());
}
function Kl(i, t, r, e) {
  let n = t.canLoad;
  if (n === void 0 || n.length === 0) return y(!0);
  let o = n.map((a) => {
    let s = Ne(a, i),
      d = Pl(s) ? s.canLoad(t, r) : At(i, () => s(t, r));
    return qt(d);
  });
  return y(o).pipe(Oe(), Ws(e));
}
function Ws(i) {
  return wa(
    it((t) => {
      if (typeof t != "boolean") throw In(i, t);
    }),
    M((t) => t === !0),
  );
}
function Yl(i, t, r, e) {
  let n = t.canMatch;
  if (!n || n.length === 0) return y(!0);
  let o = n.map((a) => {
    let s = Ne(a, i),
      d = zl(s) ? s.canMatch(t, r) : At(i, () => s(t, r));
    return qt(d);
  });
  return y(o).pipe(Oe(), Ws(e));
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
function Ee(i) {
  return qe(new Ci(i));
}
function Xl(i) {
  return qe(new $(4e3, !1));
}
function Jl(i) {
  return qe(Hs(!1, bt.GuardRejected));
}
var bo = class {
    constructor(t, r) {
      (this.urlSerializer = t), (this.urlTree = r);
    }
    lineralizeSegments(t, r) {
      let e = [],
        n = r.root;
      for (;;) {
        if (((e = e.concat(n.segments)), n.numberOfChildren === 0)) return y(e);
        if (n.numberOfChildren > 1 || !n.children[E])
          return Xl(`${t.redirectTo}`);
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
        if (at instanceof Pt) throw new Ii(at);
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
      return new Pt(
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
      if (!n) throw new $(4001, !1);
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
  _o = {
    matched: !1,
    consumedSegments: [],
    remainingSegments: [],
    parameters: {},
    positionalParamSegments: {},
  };
function tu(i, t, r, e, n) {
  let o = qs(i, t, r);
  return o.matched
    ? ((e = Cl(t, e)),
      Yl(e, t, r, n).pipe(M((a) => (a === !0 ? o : g({}, _o)))))
    : y(o);
}
function qs(i, t, r) {
  if (t.path === "**") return eu(r);
  if (t.path === "")
    return t.pathMatch === "full" && (i.hasChildren() || r.length > 0)
      ? g({}, _o)
      : {
          matched: !0,
          consumedSegments: [],
          remainingSegments: r,
          parameters: {},
          positionalParamSegments: {},
        };
  let n = (t.matcher || Yd)(r, i, t);
  if (!n) return g({}, _o);
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
function eu(i) {
  return {
    matched: !0,
    parameters: i.length > 0 ? Ds(i).parameters : {},
    consumedSegments: i,
    remainingSegments: [],
    positionalParamSegments: {},
  };
}
function ys(i, t, r, e) {
  return r.length > 0 && ru(i, r, e)
    ? {
        segmentGroup: new N(t, nu(e, new N(r, i.children))),
        slicedSegments: [],
      }
    : r.length === 0 && ou(i, r, e)
      ? {
          segmentGroup: new N(i.segments, iu(i, r, e, i.children)),
          slicedSegments: r,
        }
      : { segmentGroup: new N(i.segments, i.children), slicedSegments: r };
}
function iu(i, t, r, e) {
  let n = {};
  for (let o of r)
    if (kn(i, t, o) && !e[Et(o)]) {
      let a = new N([], {});
      n[Et(o)] = a;
    }
  return g(g({}, e), n);
}
function nu(i, t) {
  let r = {};
  r[E] = t;
  for (let e of i)
    if (e.path === "" && Et(e) !== E) {
      let n = new N([], {});
      r[Et(e)] = n;
    }
  return r;
}
function ru(i, t, r) {
  return r.some((e) => kn(i, t, e) && Et(e) !== E);
}
function ou(i, t, r) {
  return r.some((e) => kn(i, t, e));
}
function kn(i, t, r) {
  return (i.hasChildren() || t.length > 0) && r.pathMatch === "full"
    ? !1
    : r.path === "";
}
function au(i, t, r) {
  return t.length === 0 && !i.children[r];
}
var yo = class {};
function su(i, t, r, e, n, o, a = "emptyOnly") {
  return new wo(i, t, r, e, n, a, o).recognize();
}
var cu = 31,
  wo = class {
    constructor(t, r, e, n, o, a, s) {
      (this.injector = t),
        (this.configLoader = r),
        (this.rootComponentType = e),
        (this.config = n),
        (this.urlTree = o),
        (this.paramsInheritanceStrategy = a),
        (this.urlSerializer = s),
        (this.applyRedirects = new bo(this.urlSerializer, this.urlTree)),
        (this.absoluteRedirectCount = 0),
        (this.allowRedirects = !0);
    }
    noMatchError(t) {
      return new $(4002, `'${t.segmentGroup}'`);
    }
    recognize() {
      let t = ys(this.urlTree.root, [], [], this.config).segmentGroup;
      return this.match(t).pipe(
        M(({ children: r, rootSnapshot: e }) => {
          let n = new vt(e, r),
            o = new Cn("", n),
            a = gl(e, [], this.urlTree.queryParams, this.urlTree.fragment);
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
        M((e) => ({ children: e, rootSnapshot: r })),
        ve((e) => {
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
            M((a) => (a instanceof vt ? [a] : [])),
          );
    }
    processChildren(t, r, e, n) {
      let o = [];
      for (let a of Object.keys(e.children))
        a === "primary" ? o.unshift(a) : o.push(a);
      return st(o).pipe(
        be((a) => {
          let s = e.children[a],
            d = Il(r, a);
          return this.processSegmentGroup(t, d, s, a, n);
        }),
        Ea((a, s) => (a.push(...s), a)),
        br(null),
        Ia(),
        ht((a) => {
          if (a === null) return Ee(e);
          let s = Qs(a);
          return du(s), y(s);
        }),
      );
    }
    processSegment(t, r, e, n, o, a, s) {
      return st(r).pipe(
        be((d) =>
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
            ve((c) => {
              if (c instanceof Ci) return y(null);
              throw c;
            }),
          ),
        ),
        Ht((d) => !!d),
        ve((d) => {
          if (Gs(d)) return au(e, n, o) ? y(new yo()) : Ee(e);
          throw d;
        }),
      );
    }
    processSegmentAgainstRoute(t, r, e, n, o, a, s, d) {
      return Et(e) !== a && (a === E || !kn(n, o, e))
        ? Ee(n)
        : e.redirectTo === void 0
          ? this.matchSegmentAgainstRoute(t, n, e, o, a, d)
          : this.allowRedirects && s
            ? this.expandSegmentAgainstRouteUsingRedirect(t, n, r, e, o, a, d)
            : Ee(n);
    }
    expandSegmentAgainstRouteUsingRedirect(t, r, e, n, o, a, s) {
      let {
        matched: d,
        parameters: c,
        consumedSegments: m,
        positionalParamSegments: f,
        remainingSegments: _,
      } = qs(r, n, o);
      if (!d) return Ee(r);
      typeof n.redirectTo == "string" &&
        n.redirectTo[0] === "/" &&
        (this.absoluteRedirectCount++,
        this.absoluteRedirectCount > cu && (this.allowRedirects = !1));
      let O = new Ae(
          o,
          c,
          Object.freeze(g({}, this.urlTree.queryParams)),
          this.urlTree.fragment,
          ws(n),
          Et(n),
          n.component ?? n._loadedComponent ?? null,
          n,
          xs(n),
        ),
        tt = xn(O, s, this.paramsInheritanceStrategy);
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
        .pipe(ht((at) => this.processSegment(t, e, r, at.concat(_), a, !1, s)));
    }
    matchSegmentAgainstRoute(t, r, e, n, o, a) {
      let s = tu(r, e, n, t, this.urlSerializer);
      return (
        e.path === "**" && (r.children = {}),
        s.pipe(
          lt((d) =>
            d.matched
              ? ((t = e._injector ?? t),
                this.getChildConfig(t, e, n).pipe(
                  lt(({ routes: c }) => {
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
                        ws(e),
                        Et(e),
                        e.component ?? e._loadedComponent ?? null,
                        e,
                        xs(e),
                      ),
                      ot = xn(tt, a, this.paramsInheritanceStrategy);
                    (tt.params = Object.freeze(ot.params)),
                      (tt.data = Object.freeze(ot.data));
                    let { segmentGroup: at, slicedSegments: Bt } = ys(
                      r,
                      _,
                      O,
                      c,
                    );
                    if (Bt.length === 0 && at.hasChildren())
                      return this.processChildren(m, c, at, tt).pipe(
                        M((Yt) => new vt(tt, Yt)),
                      );
                    if (c.length === 0 && Bt.length === 0)
                      return y(new vt(tt, []));
                    let Kt = Et(e) === o;
                    return this.processSegment(
                      m,
                      c,
                      at,
                      Bt,
                      Kt ? E : o,
                      !0,
                      tt,
                    ).pipe(M((Yt) => new vt(tt, Yt instanceof vt ? [Yt] : [])));
                  }),
                ))
              : Ee(r),
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
            : Kl(t, r, e, this.urlSerializer).pipe(
                ht((n) =>
                  n
                    ? this.configLoader.loadChildren(t, r).pipe(
                        it((o) => {
                          (r._loadedRoutes = o.routes),
                            (r._loadedInjector = o.injector);
                        }),
                      )
                    : Jl(r),
                ),
              )
          : y({ routes: [], injector: t });
    }
  };
function du(i) {
  i.sort((t, r) =>
    t.value.outlet === E
      ? -1
      : r.value.outlet === E
        ? 1
        : t.value.outlet.localeCompare(r.value.outlet),
  );
}
function lu(i) {
  let t = i.value.routeConfig;
  return t && t.path === "";
}
function Qs(i) {
  let t = [],
    r = new Set();
  for (let e of i) {
    if (!lu(e)) {
      t.push(e);
      continue;
    }
    let n = t.find((o) => e.value.routeConfig === o.value.routeConfig);
    n !== void 0 ? (n.children.push(...e.children), r.add(n)) : t.push(e);
  }
  for (let e of r) {
    let n = Qs(e.children);
    t.push(new vt(e.value, n));
  }
  return t.filter((e) => !r.has(e));
}
function ws(i) {
  return i.data || {};
}
function xs(i) {
  return i.resolve || {};
}
function uu(i, t, r, e, n, o) {
  return ht((a) =>
    su(i, t, r, e, a.extractedUrl, n, o).pipe(
      M(({ state: s, tree: d }) =>
        U(g({}, a), { targetSnapshot: s, urlAfterRedirects: d }),
      ),
    ),
  );
}
function hu(i, t) {
  return ht((r) => {
    let {
      targetSnapshot: e,
      guards: { canActivateChecks: n },
    } = r;
    if (!n.length) return y(r);
    let o = new Set(n.map((d) => d.route)),
      a = new Set();
    for (let d of o) if (!a.has(d)) for (let c of Zs(d)) a.add(c);
    let s = 0;
    return st(a).pipe(
      be((d) =>
        o.has(d)
          ? mu(d, e, i, t)
          : ((d.data = xn(d, d.parent, i).resolve), y(void 0)),
      ),
      it(() => s++),
      _r(1),
      ht((d) => (s === a.size ? y(r) : Ut)),
    );
  });
}
function Zs(i) {
  let t = i.children.map((r) => Zs(r)).flat();
  return [i, ...t];
}
function mu(i, t, r, e) {
  let n = i.routeConfig,
    o = i._resolve;
  return (
    n?.title !== void 0 && !Bs(n) && (o[Ei] = n.title),
    pu(o, i, t, e).pipe(
      M(
        (a) => (
          (i._resolvedData = a), (i.data = xn(i, i.parent, r).resolve), null
        ),
      ),
    )
  );
}
function pu(i, t, r, e) {
  let n = Yr(i);
  if (n.length === 0) return y({});
  let o = {};
  return st(n).pipe(
    ht((a) =>
      fu(i[a], t, r, e).pipe(
        Ht(),
        it((s) => {
          if (s instanceof xi) throw In(new Re(), s);
          o[a] = s;
        }),
      ),
    ),
    _r(1),
    Ke(o),
    ve((a) => (Gs(a) ? Ut : qe(a))),
  );
}
function fu(i, t, r, e) {
  let n = Si(t) ?? e,
    o = Ne(i, n),
    a = o.resolve ? o.resolve(t, r) : At(n, () => o(t, r));
  return qt(a);
}
function Zr(i) {
  return lt((t) => {
    let r = i(t);
    return r ? st(r).pipe(M(() => t)) : y(t);
  });
}
var Ks = (() => {
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
      (t.ɵprov = w({ token: t, factory: () => v(gu), providedIn: "root" }));
    let i = t;
    return i;
  })(),
  gu = (() => {
    let t = class t extends Ks {
      constructor(e) {
        super(), (this.title = e);
      }
      updateTitle(e) {
        let n = this.buildTitle(e);
        n !== void 0 && this.title.setTitle(n);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(b(ms));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })(),
  ki = new x("", { providedIn: "root", factory: () => ({}) }),
  vu = (() => {
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
        dependencies: [Io],
        encapsulation: 2,
      }));
    let i = t;
    return i;
  })();
function Eo(i) {
  let t = i.children && i.children.map(Eo),
    r = t ? U(g({}, i), { children: t }) : g({}, i);
  return (
    !r.component &&
      !r.loadComponent &&
      (t || r.loadChildren) &&
      r.outlet &&
      r.outlet !== E &&
      (r.component = vu),
    r
  );
}
var Dn = new x(""),
  Do = (() => {
    let t = class t {
      constructor() {
        (this.componentLoaders = new WeakMap()),
          (this.childrenLoaders = new WeakMap()),
          (this.compiler = v(rn));
      }
      loadComponent(e) {
        if (this.componentLoaders.get(e)) return this.componentLoaders.get(e);
        if (e._loadedComponent) return y(e._loadedComponent);
        this.onLoadStartListener && this.onLoadStartListener(e);
        let n = qt(e.loadComponent()).pipe(
            M(Ys),
            it((a) => {
              this.onLoadEndListener && this.onLoadEndListener(e),
                (e._loadedComponent = a);
            }),
            qi(() => {
              this.componentLoaders.delete(e);
            }),
          ),
          o = new fr(n, () => new A()).pipe(pr());
        return this.componentLoaders.set(e, o), o;
      }
      loadChildren(e, n) {
        if (this.childrenLoaders.get(n)) return this.childrenLoaders.get(n);
        if (n._loadedRoutes)
          return y({ routes: n._loadedRoutes, injector: n._loadedInjector });
        this.onLoadStartListener && this.onLoadStartListener(n);
        let a = bu(n, this.compiler, e, this.onLoadEndListener).pipe(
            qi(() => {
              this.childrenLoaders.delete(n);
            }),
          ),
          s = new fr(a, () => new A()).pipe(pr());
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
function bu(i, t, r, e) {
  return qt(i.loadChildren()).pipe(
    M(Ys),
    ht((n) =>
      n instanceof Pa || Array.isArray(n) ? y(n) : st(t.compileModuleAsync(n)),
    ),
    M((n) => {
      e && e(i);
      let o,
        a,
        s = !1;
      return (
        Array.isArray(n)
          ? ((a = n), (s = !0))
          : ((o = n.create(r).injector),
            (a = o.get(Dn, [], { optional: !0, self: !0 }).flat())),
        { routes: a.map(Eo), injector: o }
      );
    }),
  );
}
function _u(i) {
  return i && typeof i == "object" && "default" in i;
}
function Ys(i) {
  return _u(i) ? i.default : i;
}
var So = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵprov = w({ token: t, factory: () => v(yu), providedIn: "root" }));
    let i = t;
    return i;
  })(),
  yu = (() => {
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
  Xs = new x(""),
  Js = new x("");
function wu(i, t, r) {
  let e = i.get(Js),
    n = i.get(R);
  return i.get(S).runOutsideAngular(() => {
    if (!n.startViewTransition || e.skipNextTransition)
      return (e.skipNextTransition = !1), new Promise((c) => setTimeout(c));
    let o,
      a = new Promise((c) => {
        o = c;
      }),
      s = n.startViewTransition(() => (o(), xu(i))),
      { onViewTransitionCreated: d } = e;
    return d && At(i, () => d({ transition: s, from: t, to: r })), a;
  });
}
function xu(i) {
  return new Promise((t) => {
    Mt({ read: () => setTimeout(t) }, { injector: i });
  });
}
var Cu = new x(""),
  Ao = (() => {
    let t = class t {
      get hasRequestedNavigation() {
        return this.navigationId !== 0;
      }
      constructor() {
        (this.currentNavigation = null),
          (this.currentTransition = null),
          (this.lastSuccessfulNavigation = null),
          (this.events = new A()),
          (this.transitionAbortSubject = new A()),
          (this.configLoader = v(Do)),
          (this.environmentInjector = v(Je)),
          (this.urlSerializer = v(Di)),
          (this.rootContexts = v(Ai)),
          (this.location = v(si)),
          (this.inputBindingEnabled = v(Mn, { optional: !0 }) !== null),
          (this.titleStrategy = v(Ks)),
          (this.options = v(ki, { optional: !0 }) || {}),
          (this.paramsInheritanceStrategy =
            this.options.paramsInheritanceStrategy || "emptyOnly"),
          (this.urlHandlingStrategy = v(So)),
          (this.createViewTransition = v(Xs, { optional: !0 })),
          (this.navigationErrorHandler = v(Cu, { optional: !0 })),
          (this.navigationId = 0),
          (this.afterPreactivation = () => y(void 0)),
          (this.rootComponentType = null);
        let e = (o) => this.events.next(new oo(o)),
          n = (o) => this.events.next(new ao(o));
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
          (this.transitions = new dt({
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
            et((a) => a.id !== 0),
            M((a) =>
              U(g({}, a), {
                extractedUrl: this.urlHandlingStrategy.extract(a.rawUrl),
              }),
            ),
            lt((a) => {
              let s = !1,
                d = !1;
              return y(a).pipe(
                lt((c) => {
                  if (this.navigationId > a.id)
                    return (
                      this.cancelNavigationTransition(
                        a,
                        "",
                        bt.SupersededByNewNavigation,
                      ),
                      Ut
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
                        new Wt(
                          c.id,
                          this.urlSerializer.serialize(c.rawUrl),
                          _,
                          vn.IgnoredSameUrlNavigation,
                        ),
                      ),
                      c.resolve(!1),
                      Ut
                    );
                  }
                  if (this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))
                    return y(c).pipe(
                      lt((_) => {
                        let O = this.transitions?.getValue();
                        return (
                          this.events.next(
                            new Te(
                              _.id,
                              this.urlSerializer.serialize(_.extractedUrl),
                              _.source,
                              _.restoredState,
                            ),
                          ),
                          O !== this.transitions?.getValue()
                            ? Ut
                            : Promise.resolve(_)
                        );
                      }),
                      uu(
                        this.environmentInjector,
                        this.configLoader,
                        this.rootComponentType,
                        e.config,
                        this.urlSerializer,
                        this.paramsInheritanceStrategy,
                      ),
                      it((_) => {
                        (a.targetSnapshot = _.targetSnapshot),
                          (a.urlAfterRedirects = _.urlAfterRedirects),
                          (this.currentNavigation = U(
                            g({}, this.currentNavigation),
                            { finalUrl: _.urlAfterRedirects },
                          ));
                        let O = new bn(
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
                      Bt = new Te(_, this.urlSerializer.serialize(O), tt, ot);
                    this.events.next(Bt);
                    let Kt = Vs(this.rootComponentType).snapshot;
                    return (
                      (this.currentTransition = a =
                        U(g({}, c), {
                          targetSnapshot: Kt,
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
                        new Wt(
                          c.id,
                          this.urlSerializer.serialize(c.extractedUrl),
                          _,
                          vn.IgnoredByUrlHandlingStrategy,
                        ),
                      ),
                      c.resolve(!1),
                      Ut
                    );
                  }
                }),
                it((c) => {
                  let m = new eo(
                    c.id,
                    this.urlSerializer.serialize(c.extractedUrl),
                    this.urlSerializer.serialize(c.urlAfterRedirects),
                    c.targetSnapshot,
                  );
                  this.events.next(m);
                }),
                M(
                  (c) => (
                    (this.currentTransition = a =
                      U(g({}, c), {
                        guards: Rl(
                          c.targetSnapshot,
                          c.currentSnapshot,
                          this.rootContexts,
                        ),
                      })),
                    a
                  ),
                ),
                Ul(this.environmentInjector, (c) => this.events.next(c)),
                it((c) => {
                  if (
                    ((a.guardsResult = c.guardsResult),
                    c.guardsResult && typeof c.guardsResult != "boolean")
                  )
                    throw In(this.urlSerializer, c.guardsResult);
                  let m = new io(
                    c.id,
                    this.urlSerializer.serialize(c.extractedUrl),
                    this.urlSerializer.serialize(c.urlAfterRedirects),
                    c.targetSnapshot,
                    !!c.guardsResult,
                  );
                  this.events.next(m);
                }),
                et((c) =>
                  c.guardsResult
                    ? !0
                    : (this.cancelNavigationTransition(c, "", bt.GuardRejected),
                      !1),
                ),
                Zr((c) => {
                  if (c.guards.canActivateChecks.length)
                    return y(c).pipe(
                      it((m) => {
                        let f = new no(
                          m.id,
                          this.urlSerializer.serialize(m.extractedUrl),
                          this.urlSerializer.serialize(m.urlAfterRedirects),
                          m.targetSnapshot,
                        );
                        this.events.next(f);
                      }),
                      lt((m) => {
                        let f = !1;
                        return y(m).pipe(
                          hu(
                            this.paramsInheritanceStrategy,
                            this.environmentInjector,
                          ),
                          it({
                            next: () => (f = !0),
                            complete: () => {
                              f ||
                                this.cancelNavigationTransition(
                                  m,
                                  "",
                                  bt.NoDataFromResolver,
                                );
                            },
                          }),
                        );
                      }),
                      it((m) => {
                        let f = new ro(
                          m.id,
                          this.urlSerializer.serialize(m.extractedUrl),
                          this.urlSerializer.serialize(m.urlAfterRedirects),
                          m.targetSnapshot,
                        );
                        this.events.next(f);
                      }),
                    );
                }),
                Zr((c) => {
                  let m = (f) => {
                    let _ = [];
                    f.routeConfig?.loadComponent &&
                      !f.routeConfig._loadedComponent &&
                      _.push(
                        this.configLoader.loadComponent(f.routeConfig).pipe(
                          it((O) => {
                            f.component = O;
                          }),
                          M(() => {}),
                        ),
                      );
                    for (let O of f.children) _.push(...m(O));
                    return _;
                  };
                  return fe(m(c.targetSnapshot.root)).pipe(br(null), xt(1));
                }),
                Zr(() => this.afterPreactivation()),
                lt(() => {
                  let { currentSnapshot: c, targetSnapshot: m } = a,
                    f = this.createViewTransition?.(
                      this.environmentInjector,
                      c.root,
                      m.root,
                    );
                  return f ? st(f).pipe(M(() => a)) : y(a);
                }),
                M((c) => {
                  let m = Dl(
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
                it(() => {
                  this.events.next(new yi());
                }),
                kl(
                  this.rootContexts,
                  e.routeReuseStrategy,
                  (c) => this.events.next(c),
                  this.inputBindingEnabled,
                ),
                xt(1),
                it({
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
                    it((c) => {
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
                      bt.SupersededByNewNavigation,
                    ),
                    this.currentTransition?.id === a.id &&
                      ((this.currentNavigation = null),
                      (this.currentTransition = null));
                }),
                ve((c) => {
                  if (((d = !0), $s(c)))
                    this.events.next(
                      new Nt(
                        a.id,
                        this.urlSerializer.serialize(a.extractedUrl),
                        c.message,
                        c.cancellationCode,
                      ),
                    ),
                      Ml(c)
                        ? this.events.next(
                            new Fe(c.url, c.navigationBehaviorOptions),
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
                        let { message: _, cancellationCode: O } = In(
                          this.urlSerializer,
                          f,
                        );
                        this.events.next(
                          new Nt(
                            a.id,
                            this.urlSerializer.serialize(a.extractedUrl),
                            _,
                            O,
                          ),
                        ),
                          this.events.next(
                            new Fe(f.redirectTo, f.navigationBehaviorOptions),
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
                  return Ut;
                }),
              );
            }),
          )
        );
      }
      cancelNavigationTransition(e, n, o) {
        let a = new Nt(
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
function Iu(i) {
  return i !== gi;
}
var Eu = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵprov = w({ token: t, factory: () => v(Du), providedIn: "root" }));
    let i = t;
    return i;
  })(),
  xo = class {
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
  Du = (() => {
    let t = class t extends xo {};
    (t.ɵfac = (() => {
      let e;
      return function (o) {
        return (e || (e = we(t)))(o || t);
      };
    })()),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })(),
  tc = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵprov = w({ token: t, factory: () => v(Su), providedIn: "root" }));
    let i = t;
    return i;
  })(),
  Su = (() => {
    let t = class t extends tc {
      constructor() {
        super(...arguments),
          (this.location = v(si)),
          (this.urlSerializer = v(Di)),
          (this.options = v(ki, { optional: !0 }) || {}),
          (this.canceledNavigationResolution =
            this.options.canceledNavigationResolution || "replace"),
          (this.urlHandlingStrategy = v(So)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.currentUrlTree = new Pt()),
          (this.rawUrlTree = this.currentUrlTree),
          (this.currentPageId = 0),
          (this.lastSuccessfulId = -1),
          (this.routerState = Vs(null)),
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
        if (e instanceof Te) this.stateMemento = this.createStateMemento();
        else if (e instanceof Wt) this.rawUrlTree = n.initialUrl;
        else if (e instanceof bn) {
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
            : e instanceof Nt &&
                (e.code === bt.GuardRejected ||
                  e.code === bt.NoDataFromResolver)
              ? this.restoreHistory(n)
              : e instanceof _i
                ? this.restoreHistory(n, !0)
                : e instanceof Dt &&
                  ((this.lastSuccessfulId = e.id),
                  (this.currentPageId = this.browserPageId));
      }
      setBrowserUrl(e, n) {
        let o = e instanceof Pt ? this.urlSerializer.serialize(e) : e;
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
        return (e || (e = we(t)))(o || t);
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
function ec(i, t) {
  i.events
    .pipe(
      et(
        (r) =>
          r instanceof Dt ||
          r instanceof Nt ||
          r instanceof _i ||
          r instanceof Wt,
      ),
      M((r) =>
        r instanceof Dt || r instanceof Wt
          ? pi.COMPLETE
          : (
                r instanceof Nt
                  ? r.code === bt.Redirect ||
                    r.code === bt.SupersededByNewNavigation
                  : !1
              )
            ? pi.REDIRECTING
            : pi.FAILED,
      ),
      et((r) => r !== pi.REDIRECTING),
      xt(1),
    )
    .subscribe(() => {
      t();
    });
}
function Au(i) {
  throw i;
}
var Mu = {
    paths: "exact",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "exact",
  },
  ku = {
    paths: "subset",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "subset",
  },
  Lt = (() => {
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
          (this.console = v(Ji)),
          (this.stateManager = v(tc)),
          (this.options = v(ki, { optional: !0 }) || {}),
          (this.pendingTasks = v(Ma)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.navigationTransitions = v(Ao)),
          (this.urlSerializer = v(Di)),
          (this.location = v(si)),
          (this.urlHandlingStrategy = v(So)),
          (this._events = new A()),
          (this.errorHandler = this.options.errorHandler || Au),
          (this.navigated = !1),
          (this.routeReuseStrategy = v(Eu)),
          (this.onSameUrlNavigation =
            this.options.onSameUrlNavigation || "ignore"),
          (this.config = v(Dn, { optional: !0 })?.flat() ?? []),
          (this.componentInputBindingEnabled = !!v(Mn, { optional: !0 })),
          (this.eventsSubscription = new Ge()),
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
                n instanceof Nt &&
                  n.code !== bt.Redirect &&
                  n.code !== bt.SupersededByNewNavigation)
              )
                this.navigated = !0;
              else if (n instanceof Dt) this.navigated = !0;
              else if (n instanceof Fe) {
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
                        Iu(o.source),
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
            Tu(n) && this._events.next(n);
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
        (this.config = e.map(Eo)), (this.navigated = !1);
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
          _ = Ns(O);
        } catch {
          (typeof e[0] != "string" || e[0][0] !== "/") && (e = []),
            (_ = this.currentUrlTree.root);
        }
        return Ps(_, e, f, m ?? null);
      }
      navigateByUrl(e, n = { skipLocationChange: !1 }) {
        let o = re(e) ? e : this.parseUrl(e),
          a = this.urlHandlingStrategy.merge(o, this.rawUrlTree);
        return this.scheduleNavigation(a, gi, null, n);
      }
      navigate(e, n = { skipLocationChange: !1 }) {
        return Ru(e), this.navigateByUrl(this.createUrlTree(e, n), n);
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
          (n === !0 ? (o = g({}, Mu)) : n === !1 ? (o = g({}, ku)) : (o = n),
          re(e))
        )
          return fs(this.currentUrlTree, e, o);
        let a = this.parseUrl(e);
        return fs(this.currentUrlTree, a, o);
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
          ec(this, () => {
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
function Ru(i) {
  for (let t = 0; t < i.length; t++) if (i[t] == null) throw new $(4008, !1);
}
function Tu(i) {
  return !(i instanceof yi) && !(i instanceof Fe);
}
var Sn = (() => {
    let t = class t {
      constructor(e, n, o, a, s, d) {
        (this.router = e),
          (this.route = n),
          (this.tabIndexAttribute = o),
          (this.renderer = a),
          (this.el = s),
          (this.locationStrategy = d),
          (this.href = null),
          (this.onChanges = new A()),
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
          : (re(e)
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
            : Ta(
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
          : re(this.routerLinkInput)
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
      return new (n || t)(h(Lt), h(oe), xe("tabindex"), h(Xi), h(k), h(ai));
    }),
      (t.ɵdir = P({
        type: t,
        selectors: [["", "routerLink", ""]],
        hostVars: 1,
        hostBindings: function (n, o) {
          n & 1 &&
            rt("click", function (s) {
              return o.onClick(
                s.button,
                s.ctrlKey,
                s.shiftKey,
                s.altKey,
                s.metaKey,
              );
            }),
            n & 2 && W("target", o.target);
        },
        inputs: {
          target: "target",
          queryParams: "queryParams",
          fragment: "fragment",
          queryParamsHandling: "queryParamsHandling",
          state: "state",
          info: "info",
          relativeTo: "relativeTo",
          preserveFragment: [2, "preserveFragment", "preserveFragment", K],
          skipLocationChange: [
            2,
            "skipLocationChange",
            "skipLocationChange",
            K,
          ],
          replaceUrl: [2, "replaceUrl", "replaceUrl", K],
          routerLink: "routerLink",
        },
        standalone: !0,
        features: [ut, Ft],
      }));
    let i = t;
    return i;
  })(),
  ic = (() => {
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
          (this.isActiveChange = new G()),
          (this.routerEventsSubscription = e.events.subscribe((d) => {
            d instanceof Dt && this.update();
          }));
      }
      ngAfterContentInit() {
        y(this.links.changes, y(null))
          .pipe(Qe())
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
          .pipe(Qe())
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
        let n = Fu(this.routerLinkActiveOptions)
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
      return new (n || t)(h(Lt), h(k), h(Xi), h(J), h(Sn, 8));
    }),
      (t.ɵdir = P({
        type: t,
        selectors: [["", "routerLinkActive", ""]],
        contentQueries: function (n, o, a) {
          if ((n & 1 && X(a, Sn, 5), n & 2)) {
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
function Fu(i) {
  return !!i.paths;
}
var An = class {};
var Ou = (() => {
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
            et((e) => e instanceof Dt),
            be(() => this.preload()),
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
            (a._injector = Sr(a.providers, e, `Route: ${a.path}`));
          let s = a._injector ?? e,
            d = a._loadedInjector ?? s;
          ((a.loadChildren && !a._loadedRoutes && a.canLoad === void 0) ||
            (a.loadComponent && !a._loadedComponent)) &&
            o.push(this.preloadConfig(s, a)),
            (a.children || a._loadedRoutes) &&
              o.push(this.processRoutes(d, a.children ?? a._loadedRoutes));
        }
        return st(o).pipe(Qe());
      }
      preloadConfig(e, n) {
        return this.preloadingStrategy.preload(n, () => {
          let o;
          n.loadChildren && n.canLoad === void 0
            ? (o = this.loader.loadChildren(e, n))
            : (o = y(null));
          let a = o.pipe(
            ht((s) =>
              s === null
                ? y(void 0)
                : ((n._loadedRoutes = s.routes),
                  (n._loadedInjector = s.injector),
                  this.processRoutes(s.injector ?? e, s.routes)),
            ),
          );
          if (n.loadComponent && !n._loadedComponent) {
            let s = this.loader.loadComponent(n);
            return st([a, s]).pipe(Qe());
          } else return a;
        });
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(b(Lt), b(rn), b(Je), b(An), b(Do));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })(),
  nc = new x(""),
  Nu = (() => {
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
          e instanceof Te
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
              : e instanceof Wt &&
                e.code === vn.IgnoredSameUrlNavigation &&
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
          e instanceof _n &&
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
                new _n(
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
      te();
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac }));
    let i = t;
    return i;
  })();
function Pu(i) {
  return i.routerState.root;
}
function Ri(i, t) {
  return { ɵkind: i, ɵproviders: t };
}
function Lu() {
  let i = v(Ct);
  return (t) => {
    let r = i.get(Tr);
    if (t !== r.components[0]) return;
    let e = i.get(Lt),
      n = i.get(rc);
    i.get(Mo) === 1 && e.initialNavigation(),
      i.get(oc, null, yr.Optional)?.setUpPreloading(),
      i.get(nc, null, yr.Optional)?.init(),
      e.resetRootComponentType(r.componentTypes[0]),
      n.closed || (n.next(), n.complete(), n.unsubscribe());
  };
}
var rc = new x("", { factory: () => new A() }),
  Mo = new x("", { providedIn: "root", factory: () => 1 });
function ju() {
  return Ri(2, [
    { provide: Mo, useValue: 0 },
    {
      provide: Rr,
      multi: !0,
      deps: [Ct],
      useFactory: (t) => {
        let r = t.get(Ka, Promise.resolve());
        return () =>
          r.then(
            () =>
              new Promise((e) => {
                let n = t.get(Lt),
                  o = t.get(rc);
                ec(n, () => {
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
function Vu() {
  return Ri(3, [
    {
      provide: Rr,
      multi: !0,
      useFactory: () => {
        let t = v(Lt);
        return () => {
          t.setUpLocationChangeListener();
        };
      },
    },
    { provide: Mo, useValue: 2 },
  ]);
}
var oc = new x("");
function zu(i) {
  return Ri(0, [
    { provide: oc, useExisting: Ou },
    { provide: An, useExisting: i },
  ]);
}
function Bu() {
  return Ri(8, [_s, { provide: Mn, useExisting: _s }]);
}
function Uu(i) {
  let t = [
    { provide: Xs, useValue: wu },
    {
      provide: Js,
      useValue: g({ skipNextTransition: !!i?.skipInitialTransition }, i),
    },
  ];
  return Ri(9, t);
}
var Cs = new x("ROUTER_FORROOT_GUARD"),
  Hu = [
    si,
    { provide: Di, useClass: Re },
    Lt,
    Ai,
    { provide: oe, useFactory: Pu, deps: [Lt] },
    Do,
    [],
  ],
  ko = (() => {
    let t = class t {
      constructor(e) {}
      static forRoot(e, n) {
        return {
          ngModule: t,
          providers: [
            Hu,
            [],
            { provide: Dn, multi: !0, useValue: e },
            { provide: Cs, useFactory: qu, deps: [[Lt, new wr(), new Sa()]] },
            { provide: ki, useValue: n || {} },
            n?.useHash ? Gu() : Wu(),
            $u(),
            n?.preloadingStrategy ? zu(n.preloadingStrategy).ɵproviders : [],
            n?.initialNavigation ? Qu(n) : [],
            n?.bindToComponentInputs ? Bu().ɵproviders : [],
            n?.enableViewTransitions ? Uu().ɵproviders : [],
            Zu(),
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
      return new (n || t)(b(Cs, 8));
    }),
      (t.ɵmod = F({ type: t })),
      (t.ɵinj = T({}));
    let i = t;
    return i;
  })();
function $u() {
  return {
    provide: nc,
    useFactory: () => {
      let i = v(is),
        t = v(S),
        r = v(ki),
        e = v(Ao),
        n = v(Di);
      return (
        r.scrollOffset && i.setOffset(r.scrollOffset), new Nu(n, e, i, t, r)
      );
    },
  };
}
function Gu() {
  return { provide: ai, useClass: Xa };
}
function Wu() {
  return { provide: ai, useClass: Ya };
}
function qu(i) {
  return "guarded";
}
function Qu(i) {
  return [
    i.initialNavigation === "disabled" ? Vu().ɵproviders : [],
    i.initialNavigation === "enabledBlocking" ? ju().ɵproviders : [],
  ];
}
var Is = new x("");
function Zu() {
  return [
    { provide: Is, useFactory: Lu },
    { provide: Ba, multi: !0, useExisting: Is },
  ];
}
var To;
try {
  To = typeof Intl < "u" && Intl.v8BreakIterator;
} catch {
  To = !1;
}
var Q = (() => {
  let t = class t {
    constructor(e) {
      (this._platformId = e),
        (this.isBrowser = this._platformId
          ? es(this._platformId)
          : typeof document == "object" && !!document),
        (this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent)),
        (this.TRIDENT =
          this.isBrowser && /(msie|trident)/i.test(navigator.userAgent)),
        (this.BLINK =
          this.isBrowser &&
          !!(window.chrome || To) &&
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
    return new (n || t)(b(Jt));
  }),
    (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let i = t;
  return i;
})();
var Ti;
function Ku() {
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
function Pe(i) {
  return Ku() ? i : !!i.capture;
}
var St = (function (i) {
    return (
      (i[(i.NORMAL = 0)] = "NORMAL"),
      (i[(i.NEGATED = 1)] = "NEGATED"),
      (i[(i.INVERTED = 2)] = "INVERTED"),
      i
    );
  })(St || {}),
  Rn,
  ae;
function sc() {
  if (ae == null) {
    if (
      typeof document != "object" ||
      !document ||
      typeof Element != "function" ||
      !Element
    )
      return (ae = !1), ae;
    if ("scrollBehavior" in document.documentElement.style) ae = !0;
    else {
      let i = Element.prototype.scrollTo;
      i ? (ae = !/\{\s*\[native code\]\s*\}/.test(i.toString())) : (ae = !1);
    }
  }
  return ae;
}
function Le() {
  if (typeof document != "object" || !document) return St.NORMAL;
  if (Rn == null) {
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
      (Rn = St.NORMAL),
      i.scrollLeft === 0 &&
        ((i.scrollLeft = 1),
        (Rn = i.scrollLeft === 0 ? St.NEGATED : St.INVERTED)),
      i.remove();
  }
  return Rn;
}
var Ro;
function Yu() {
  if (Ro == null) {
    let i = typeof document < "u" ? document.head : null;
    Ro = !!(i && (i.createShadowRoot || i.attachShadow));
  }
  return Ro;
}
function cc(i) {
  if (Yu()) {
    let t = i.getRootNode ? i.getRootNode() : null;
    if (typeof ShadowRoot < "u" && ShadowRoot && t instanceof ShadowRoot)
      return t;
  }
  return null;
}
function jt(i) {
  return i.composedPath ? i.composedPath()[0] : i.target;
}
function dc() {
  return (
    (typeof __karma__ < "u" && !!__karma__) ||
    (typeof jasmine < "u" && !!jasmine) ||
    (typeof jest < "u" && !!jest) ||
    (typeof Mocha < "u" && !!Mocha)
  );
}
function je(i, ...t) {
  return t.length
    ? t.some((r) => i[r])
    : i.altKey || i.shiftKey || i.ctrlKey || i.metaKey;
}
function Tt(i) {
  return i != null && `${i}` != "false";
}
function ce(i, t = 0) {
  return Xu(i) ? Number(i) : arguments.length === 2 ? t : 0;
}
function Xu(i) {
  return !isNaN(parseFloat(i)) && !isNaN(Number(i));
}
function Fo(i) {
  return Array.isArray(i) ? i : [i];
}
function Vt(i) {
  return i instanceof k ? i.nativeElement : i;
}
var lc = new Set(),
  de,
  Ju = (() => {
    let t = class t {
      constructor(e, n) {
        (this._platform = e),
          (this._nonce = n),
          (this._matchMedia =
            this._platform.isBrowser && window.matchMedia
              ? window.matchMedia.bind(window)
              : eh);
      }
      matchMedia(e) {
        return (
          (this._platform.WEBKIT || this._platform.BLINK) && th(e, this._nonce),
          this._matchMedia(e)
        );
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(b(Q), b(ei, 8));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
function th(i, t) {
  if (!lc.has(i))
    try {
      de ||
        ((de = document.createElement("style")),
        t && de.setAttribute("nonce", t),
        de.setAttribute("type", "text/css"),
        document.head.appendChild(de)),
        de.sheet &&
          (de.sheet.insertRule(`@media ${i} {body{ }}`, 0), lc.add(i));
    } catch (r) {
      console.error(r);
    }
}
function eh(i) {
  return {
    matches: i === "all" || i === "",
    media: i,
    addListener: () => {},
    removeListener: () => {},
  };
}
var hc = (() => {
  let t = class t {
    constructor(e, n) {
      (this._mediaMatcher = e),
        (this._zone = n),
        (this._queries = new Map()),
        (this._destroySubject = new A());
    }
    ngOnDestroy() {
      this._destroySubject.next(), this._destroySubject.complete();
    }
    isMatched(e) {
      return uc(Fo(e)).some((o) => this._registerQuery(o).mql.matches);
    }
    observe(e) {
      let o = uc(Fo(e)).map((s) => this._registerQuery(s).observable),
        a = fe(o);
      return (
        (a = Wi(a.pipe(xt(1)), a.pipe(Qi(1), _e(0)))),
        a.pipe(
          M((s) => {
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
          observable: new We((s) => {
            let d = (c) => this._zone.run(() => s.next(c));
            return (
              n.addListener(d),
              () => {
                n.removeListener(d);
              }
            );
          }).pipe(
            _t(n),
            M(({ matches: s }) => ({ query: e, matches: s })),
            z(this._destroySubject),
          ),
          mql: n,
        };
      return this._queries.set(e, a), a;
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(b(Ju), b(S));
  }),
    (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let i = t;
  return i;
})();
function uc(i) {
  return i
    .map((t) => t.split(","))
    .reduce((t, r) => t.concat(r))
    .map((t) => t.trim());
}
var vh = 200,
  No = class {
    constructor(t, r) {
      (this._letterKeyStream = new A()),
        (this._items = []),
        (this._selectedItemIndex = -1),
        (this._pressedLetters = []),
        (this._selectedItem = new A()),
        (this.selectedItem = this._selectedItem);
      let e = typeof r?.debounceInterval == "number" ? r.debounceInterval : vh;
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
          it((r) => this._pressedLetters.push(r)),
          _e(t),
          et(() => this._pressedLetters.length > 0),
          M(() => this._pressedLetters.join("").toLocaleUpperCase()),
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
  Po = class {
    constructor(t, r) {
      (this._items = t),
        (this._activeItemIndex = -1),
        (this._activeItem = null),
        (this._wrap = !1),
        (this._typeaheadSubscription = Ge.EMPTY),
        (this._vertical = !0),
        (this._allowedModifierKeys = []),
        (this._homeAndEnd = !1),
        (this._pageUpAndDown = { enabled: !1, delta: 10 }),
        (this._skipPredicateFn = (e) => e.disabled),
        (this.tabOut = new A()),
        (this.change = new A()),
        t instanceof Xt
          ? (this._itemChangesSubscription = t.changes.subscribe((e) =>
              this._itemsChanged(e.toArray()),
            ))
          : Dr(t) &&
            (this._effectRef = Wa(() => this._itemsChanged(t()), {
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
        (this._typeahead = new No(r, {
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
          (n || je(t, "shiftKey")) && this._typeahead?.handleKey(t);
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
        : this._items instanceof Xt
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
var On = class extends Po {
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
var zo = (() => {
  let t = class t {
    constructor(e) {
      this._platform = e;
    }
    isDisabled(e) {
      return e.hasAttribute("disabled");
    }
    isVisible(e) {
      return _h(e) && getComputedStyle(e).visibility === "visible";
    }
    isTabbable(e) {
      if (!this._platform.isBrowser) return !1;
      let n = bh(Sh(e));
      if (n && (mc(n) === -1 || !this.isVisible(n))) return !1;
      let o = e.nodeName.toLowerCase(),
        a = mc(e);
      return e.hasAttribute("contenteditable")
        ? a !== -1
        : o === "iframe" ||
            o === "object" ||
            (this._platform.WEBKIT && this._platform.IOS && !Eh(e))
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
        Dh(e) &&
        !this.isDisabled(e) &&
        (n?.ignoreVisibility || this.isVisible(e))
      );
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(b(Q));
  }),
    (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let i = t;
  return i;
})();
function bh(i) {
  try {
    return i.frameElement;
  } catch {
    return null;
  }
}
function _h(i) {
  return !!(
    i.offsetWidth ||
    i.offsetHeight ||
    (typeof i.getClientRects == "function" && i.getClientRects().length)
  );
}
function yh(i) {
  let t = i.nodeName.toLowerCase();
  return t === "input" || t === "select" || t === "button" || t === "textarea";
}
function wh(i) {
  return Ch(i) && i.type == "hidden";
}
function xh(i) {
  return Ih(i) && i.hasAttribute("href");
}
function Ch(i) {
  return i.nodeName.toLowerCase() == "input";
}
function Ih(i) {
  return i.nodeName.toLowerCase() == "a";
}
function gc(i) {
  if (!i.hasAttribute("tabindex") || i.tabIndex === void 0) return !1;
  let t = i.getAttribute("tabindex");
  return !!(t && !isNaN(parseInt(t, 10)));
}
function mc(i) {
  if (!gc(i)) return null;
  let t = parseInt(i.getAttribute("tabindex") || "", 10);
  return isNaN(t) ? -1 : t;
}
function Eh(i) {
  let t = i.nodeName.toLowerCase(),
    r = t === "input" && i.type;
  return r === "text" || r === "password" || t === "select" || t === "textarea";
}
function Dh(i) {
  return wh(i)
    ? !1
    : yh(i) || xh(i) || i.hasAttribute("contenteditable") || gc(i);
}
function Sh(i) {
  return (i.ownerDocument && i.ownerDocument.defaultView) || window;
}
var Lo = class {
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
      this._injector ? Mt(t, { injector: this._injector }) : setTimeout(t);
    }
  },
  vc = (() => {
    let t = class t {
      constructor(e, n, o) {
        (this._checker = e),
          (this._ngZone = n),
          (this._injector = v(Ct)),
          (this._document = o);
      }
      create(e, n = !1) {
        return new Lo(
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
      return new (n || t)(b(zo), b(S), b(R));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
function Bo(i) {
  return i.buttons === 0 || i.detail === 0;
}
function Uo(i) {
  let t =
    (i.touches && i.touches[0]) || (i.changedTouches && i.changedTouches[0]);
  return (
    !!t &&
    t.identifier === -1 &&
    (t.radiusX == null || t.radiusX === 1) &&
    (t.radiusY == null || t.radiusY === 1)
  );
}
var Ah = new x("cdk-input-modality-detector-options"),
  Mh = { ignoreKeys: [18, 17, 224, 91, 16] },
  bc = 650,
  Ve = Pe({ passive: !0, capture: !0 }),
  kh = (() => {
    let t = class t {
      get mostRecentModality() {
        return this._modality.value;
      }
      constructor(e, n, o, a) {
        (this._platform = e),
          (this._mostRecentTarget = null),
          (this._modality = new dt(null)),
          (this._lastTouchMs = 0),
          (this._onKeydown = (s) => {
            this._options?.ignoreKeys?.some((d) => d === s.keyCode) ||
              (this._modality.next("keyboard"),
              (this._mostRecentTarget = jt(s)));
          }),
          (this._onMousedown = (s) => {
            Date.now() - this._lastTouchMs < bc ||
              (this._modality.next(Bo(s) ? "keyboard" : "mouse"),
              (this._mostRecentTarget = jt(s)));
          }),
          (this._onTouchstart = (s) => {
            if (Uo(s)) {
              this._modality.next("keyboard");
              return;
            }
            (this._lastTouchMs = Date.now()),
              this._modality.next("touch"),
              (this._mostRecentTarget = jt(s));
          }),
          (this._options = g(g({}, Mh), a)),
          (this.modalityDetected = this._modality.pipe(Qi(1))),
          (this.modalityChanged = this.modalityDetected.pipe(Ye())),
          e.isBrowser &&
            n.runOutsideAngular(() => {
              o.addEventListener("keydown", this._onKeydown, Ve),
                o.addEventListener("mousedown", this._onMousedown, Ve),
                o.addEventListener("touchstart", this._onTouchstart, Ve);
            });
      }
      ngOnDestroy() {
        this._modality.complete(),
          this._platform.isBrowser &&
            (document.removeEventListener("keydown", this._onKeydown, Ve),
            document.removeEventListener("mousedown", this._onMousedown, Ve),
            document.removeEventListener("touchstart", this._onTouchstart, Ve));
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(b(Q), b(S), b(R), b(Ah, 8));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
var Fn = (function (i) {
    return (
      (i[(i.IMMEDIATE = 0)] = "IMMEDIATE"),
      (i[(i.EVENTUAL = 1)] = "EVENTUAL"),
      i
    );
  })(Fn || {}),
  Rh = new x("cdk-focus-monitor-default-options"),
  Tn = Pe({ passive: !0, capture: !0 }),
  ue = (() => {
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
          (this._stopInputModalityDetector = new A()),
          (this._rootNodeFocusAndBlurListener = (d) => {
            let c = jt(d);
            for (let m = c; m; m = m.parentElement)
              d.type === "focus" ? this._onFocus(d, m) : this._onBlur(d, m);
          }),
          (this._document = a),
          (this._detectionMode = s?.detectionMode || Fn.IMMEDIATE);
      }
      monitor(e, n = !1) {
        let o = Vt(e);
        if (!this._platform.isBrowser || o.nodeType !== 1) return y();
        let a = cc(o) || this._getDocument(),
          s = this._elementInfo.get(o);
        if (s) return n && (s.checkChildren = !0), s.subject;
        let d = { checkChildren: n, subject: new A(), rootNode: a };
        return (
          this._elementInfo.set(o, d),
          this._registerGlobalListeners(d),
          d.subject
        );
      }
      stopMonitoring(e) {
        let n = Vt(e),
          o = this._elementInfo.get(n);
        o &&
          (o.subject.complete(),
          this._setClasses(n),
          this._elementInfo.delete(n),
          this._removeGlobalListeners(o));
      }
      focusVia(e, n, o) {
        let a = Vt(e),
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
          this._detectionMode === Fn.EVENTUAL ||
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
            this._detectionMode === Fn.IMMEDIATE)
          ) {
            clearTimeout(this._originTimeoutId);
            let o = this._originFromTouchInteraction ? bc : 1;
            this._originTimeoutId = setTimeout(() => (this._origin = null), o);
          }
        });
      }
      _onFocus(e, n) {
        let o = this._elementInfo.get(n),
          a = jt(e);
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
            n.addEventListener("focus", this._rootNodeFocusAndBlurListener, Tn),
              n.addEventListener(
                "blur",
                this._rootNodeFocusAndBlurListener,
                Tn,
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
                Tn,
              ),
              n.removeEventListener(
                "blur",
                this._rootNodeFocusAndBlurListener,
                Tn,
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
      return new (n || t)(b(S), b(Q), b(kh), b(R, 8), b(Rh, 8));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
var le = (function (i) {
    return (
      (i[(i.NONE = 0)] = "NONE"),
      (i[(i.BLACK_ON_WHITE = 1)] = "BLACK_ON_WHITE"),
      (i[(i.WHITE_ON_BLACK = 2)] = "WHITE_ON_BLACK"),
      i
    );
  })(le || {}),
  pc = "cdk-high-contrast-black-on-white",
  fc = "cdk-high-contrast-white-on-black",
  Oo = "cdk-high-contrast-active",
  _c = (() => {
    let t = class t {
      constructor(e, n) {
        (this._platform = e),
          (this._document = n),
          (this._breakpointSubscription = v(hc)
            .observe("(forced-colors: active)")
            .subscribe(() => {
              this._hasCheckedHighContrastMode &&
                ((this._hasCheckedHighContrastMode = !1),
                this._applyBodyHighContrastModeCssClasses());
            }));
      }
      getHighContrastMode() {
        if (!this._platform.isBrowser) return le.NONE;
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
            return le.WHITE_ON_BLACK;
          case "rgb(255,255,255)":
          case "rgb(255,250,239)":
            return le.BLACK_ON_WHITE;
        }
        return le.NONE;
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
          e.remove(Oo, pc, fc), (this._hasCheckedHighContrastMode = !0);
          let n = this.getHighContrastMode();
          n === le.BLACK_ON_WHITE
            ? e.add(Oo, pc)
            : n === le.WHITE_ON_BLACK && e.add(Oo, fc);
        }
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(b(Q), b(R));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
var Th = new x("cdk-dir-doc", { providedIn: "root", factory: Fh });
function Fh() {
  return v(R);
}
var Oh =
  /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function Nh(i) {
  let t = i?.toLowerCase() || "";
  return t === "auto" && typeof navigator < "u" && navigator?.language
    ? Oh.test(navigator.language)
      ? "rtl"
      : "ltr"
    : t === "rtl"
      ? "rtl"
      : "ltr";
}
var zt = (() => {
  let t = class t {
    constructor(e) {
      if (((this.value = "ltr"), (this.change = new G()), e)) {
        let n = e.body ? e.body.dir : null,
          o = e.documentElement ? e.documentElement.dir : null;
        this.value = Nh(n || o || "ltr");
      }
    }
    ngOnDestroy() {
      this.change.complete();
    }
  };
  (t.ɵfac = function (n) {
    return new (n || t)(b(Th, 8));
  }),
    (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let i = t;
  return i;
})();
var $o = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = F({ type: t })),
    (t.ɵinj = T({}));
  let i = t;
  return i;
})();
function Ph() {
  return !0;
}
var Lh = new x("mat-sanity-checks", { providedIn: "root", factory: Ph }),
  Z = (() => {
    let t = class t {
      constructor(e, n, o) {
        (this._sanityChecks = n),
          (this._document = o),
          (this._hasDoneGlobalChecks = !1),
          e._applyBodyHighContrastModeCssClasses(),
          this._hasDoneGlobalChecks || (this._hasDoneGlobalChecks = !0);
      }
      _checkIsEnabled(e) {
        return dc()
          ? !1
          : typeof this._sanityChecks == "boolean"
            ? this._sanityChecks
            : !!this._sanityChecks[e];
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(b(_c), b(Lh, 8), b(R));
    }),
      (t.ɵmod = F({ type: t })),
      (t.ɵinj = T({ imports: [$o, $o] }));
    let i = t;
    return i;
  })();
var jn = class {
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
var Ko = (() => {
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
var Yo = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵmod = F({ type: t })),
      (t.ɵinj = T({ imports: [Z, Z] }));
    let i = t;
    return i;
  })(),
  wt = (function (i) {
    return (
      (i[(i.FADING_IN = 0)] = "FADING_IN"),
      (i[(i.VISIBLE = 1)] = "VISIBLE"),
      (i[(i.FADING_OUT = 2)] = "FADING_OUT"),
      (i[(i.HIDDEN = 3)] = "HIDDEN"),
      i
    );
  })(wt || {}),
  qo = class {
    constructor(t, r, e, n = !1) {
      (this._renderer = t),
        (this.element = r),
        (this.config = e),
        (this._animationForciblyDisabledThroughCss = n),
        (this.state = wt.HIDDEN);
    }
    fadeOut() {
      this._renderer.fadeOutRipple(this);
    }
  },
  yc = Pe({ passive: !0, capture: !0 }),
  Qo = class {
    constructor() {
      (this._events = new Map()),
        (this._delegateEventHandler = (t) => {
          let r = jt(t);
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
            document.addEventListener(r, this._delegateEventHandler, yc);
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
          document.removeEventListener(t, this._delegateEventHandler, yc)));
    }
  },
  wc = { enterDuration: 225, exitDuration: 150 },
  jh = 800,
  xc = Pe({ passive: !0, capture: !0 }),
  Cc = ["mousedown", "touchstart"],
  Ic = ["mouseup", "mouseleave", "touchend", "touchcancel"],
  Fi = class Fi {
    constructor(t, r, e, n) {
      (this._target = t),
        (this._ngZone = r),
        (this._platform = n),
        (this._isPointerDown = !1),
        (this._activeRipples = new Map()),
        (this._pointerUpEventsRegistered = !1),
        n.isBrowser && (this._containerElement = Vt(e));
    }
    fadeInRipple(t, r, e = {}) {
      let n = (this._containerRect =
          this._containerRect ||
          this._containerElement.getBoundingClientRect()),
        o = g(g({}, wc), e.animation);
      e.centered && ((t = n.left + n.width / 2), (r = n.top + n.height / 2));
      let a = e.radius || Vh(t, r, n),
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
        ot = new qo(this, m, e, tt);
      (m.style.transform = "scale3d(1, 1, 1)"),
        (ot.state = wt.FADING_IN),
        e.persistent || (this._mostRecentTransientRipple = ot);
      let at = null;
      return (
        !tt &&
          (c || o.exitDuration) &&
          this._ngZone.runOutsideAngular(() => {
            let Bt = () => {
                at && (at.fallbackTimer = null),
                  clearTimeout(Yt),
                  this._finishRippleTransition(ot);
              },
              Kt = () => this._destroyRipple(ot),
              Yt = setTimeout(Kt, c + 100);
            m.addEventListener("transitionend", Bt),
              m.addEventListener("transitioncancel", Kt),
              (at = {
                onTransitionEnd: Bt,
                onTransitionCancel: Kt,
                fallbackTimer: Yt,
              });
          }),
        this._activeRipples.set(ot, at),
        (tt || !c) && this._finishRippleTransition(ot),
        ot
      );
    }
    fadeOutRipple(t) {
      if (t.state === wt.FADING_OUT || t.state === wt.HIDDEN) return;
      let r = t.element,
        e = g(g({}, wc), t.config.animation);
      (r.style.transitionDuration = `${e.exitDuration}ms`),
        (r.style.opacity = "0"),
        (t.state = wt.FADING_OUT),
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
      let r = Vt(t);
      !this._platform.isBrowser ||
        !r ||
        r === this._triggerElement ||
        (this._removeTriggerEvents(),
        (this._triggerElement = r),
        Cc.forEach((e) => {
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
            Ic.forEach((r) => {
              this._triggerElement.addEventListener(r, this, xc);
            });
          }),
          (this._pointerUpEventsRegistered = !0));
    }
    _finishRippleTransition(t) {
      t.state === wt.FADING_IN
        ? this._startFadeOutTransition(t)
        : t.state === wt.FADING_OUT && this._destroyRipple(t);
    }
    _startFadeOutTransition(t) {
      let r = t === this._mostRecentTransientRipple,
        { persistent: e } = t.config;
      (t.state = wt.VISIBLE), !e && (!r || !this._isPointerDown) && t.fadeOut();
    }
    _destroyRipple(t) {
      let r = this._activeRipples.get(t) ?? null;
      this._activeRipples.delete(t),
        this._activeRipples.size || (this._containerRect = null),
        t === this._mostRecentTransientRipple &&
          (this._mostRecentTransientRipple = null),
        (t.state = wt.HIDDEN),
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
      let r = Bo(t),
        e =
          this._lastTouchStartEvent &&
          Date.now() < this._lastTouchStartEvent + jh;
      !this._target.rippleDisabled &&
        !r &&
        !e &&
        ((this._isPointerDown = !0),
        this.fadeInRipple(t.clientX, t.clientY, this._target.rippleConfig));
    }
    _onTouchStart(t) {
      if (!this._target.rippleDisabled && !Uo(t)) {
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
            t.state === wt.VISIBLE ||
            (t.config.terminateOnPointerUp && t.state === wt.FADING_IN);
          !t.config.persistent && r && t.fadeOut();
        }));
    }
    _getActiveRipples() {
      return Array.from(this._activeRipples.keys());
    }
    _removeTriggerEvents() {
      let t = this._triggerElement;
      t &&
        (Cc.forEach((r) => Fi._eventManager.removeHandler(r, t, this)),
        this._pointerUpEventsRegistered &&
          (Ic.forEach((r) => t.removeEventListener(r, this, xc)),
          (this._pointerUpEventsRegistered = !1)));
    }
  };
Fi._eventManager = new Qo();
var Zo = Fi;
function Vh(i, t, r) {
  let e = Math.max(Math.abs(i - r.left), Math.abs(i - r.right)),
    n = Math.max(Math.abs(t - r.top), Math.abs(t - r.bottom));
  return Math.sqrt(e * e + n * n);
}
var Oi = new x("mat-ripple-global-options"),
  zh = (() => {
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
          (this._rippleRenderer = new Zo(this, n, e, o));
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
      return new (n || t)(h(k), h(S), h(Q), h(Oi, 8), h(mt, 8));
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
          n & 2 && H("mat-ripple-unbounded", o.unbounded);
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
  Xo = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵmod = F({ type: t })),
      (t.ɵinj = T({ imports: [Z, Z] }));
    let i = t;
    return i;
  })();
var Ec = { capture: !0 },
  Dc = ["focus", "mousedown", "mouseenter", "touchstart"],
  Go = "mat-ripple-loader-uninitialized",
  Wo = "mat-ripple-loader-class-name",
  Sc = "mat-ripple-loader-centered",
  Ln = "mat-ripple-loader-disabled",
  Vn = (() => {
    let t = class t {
      constructor() {
        (this._document = v(R, { optional: !0 })),
          (this._animationMode = v(mt, { optional: !0 })),
          (this._globalRippleOptions = v(Oi, { optional: !0 })),
          (this._platform = v(Q)),
          (this._ngZone = v(S)),
          (this._hosts = new Map()),
          (this._onInteraction = (e) => {
            let n = jt(e);
            if (n instanceof HTMLElement) {
              let o = n.closest(
                `[${Go}="${this._globalRippleOptions?.namespace ?? ""}"]`,
              );
              o && this._createRipple(o);
            }
          }),
          this._ngZone.runOutsideAngular(() => {
            for (let e of Dc)
              this._document?.addEventListener(e, this._onInteraction, Ec);
          });
      }
      ngOnDestroy() {
        let e = this._hosts.keys();
        for (let n of e) this.destroyRipple(n);
        for (let n of Dc)
          this._document?.removeEventListener(n, this._onInteraction, Ec);
      }
      configureRipple(e, n) {
        e.setAttribute(Go, this._globalRippleOptions?.namespace ?? ""),
          (n.className || !e.hasAttribute(Wo)) &&
            e.setAttribute(Wo, n.className || ""),
          n.centered && e.setAttribute(Sc, ""),
          n.disabled && e.setAttribute(Ln, "");
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
        n ? e.setAttribute(Ln, "") : e.removeAttribute(Ln);
      }
      _createRipple(e) {
        if (!this._document) return;
        let n = this._hosts.get(e);
        if (n) return n;
        e.querySelector(".mat-ripple")?.remove();
        let o = this._document.createElement("span");
        o.classList.add("mat-ripple", e.getAttribute(Wo)), e.append(o);
        let a = new zh(
          new k(o),
          this._ngZone,
          this._platform,
          this._globalRippleOptions ? this._globalRippleOptions : void 0,
          this._animationMode ? this._animationMode : void 0,
        );
        return (
          (a._isInitialized = !0),
          (a.trigger = e),
          (a.centered = e.hasAttribute(Sc)),
          (a.disabled = e.hasAttribute(Ln)),
          this.attachRipple(e, a),
          a
        );
      }
      attachRipple(e, n) {
        e.removeAttribute(Go), this._hosts.set(e, n);
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
var Uh = ["*"];
var Hh = [
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
  $h = [
    "[mat-card-avatar], [matCardAvatar]",
    `mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,
    "*",
  ],
  Gh = new x("MAT_CARD_CONFIG"),
  ze = (() => {
    let t = class t {
      constructor(e) {
        this.appearance = e?.appearance || "raised";
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(h(Gh, 8));
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [["mat-card"]],
        hostAttrs: [1, "mat-mdc-card", "mdc-card"],
        hostVars: 4,
        hostBindings: function (n, o) {
          n & 2 &&
            H("mat-mdc-card-outlined", o.appearance === "outlined")(
              "mdc-card--outlined",
              o.appearance === "outlined",
            );
        },
        inputs: { appearance: "appearance" },
        exportAs: ["matCard"],
        standalone: !0,
        features: [V],
        ngContentSelectors: Uh,
        decls: 1,
        vars: 0,
        template: function (n, o) {
          n & 1 && (q(), D(0));
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
  zn = (() => {
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
var Bn = (() => {
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
var Un = (() => {
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
      ngContentSelectors: $h,
      decls: 4,
      vars: 0,
      consts: [[1, "mat-mdc-card-header-text"]],
      template: function (n, o) {
        n & 1 && (q(Hh), D(0), l(1, "div", 0), D(2, 1), u(), D(3, 2));
      },
      encapsulation: 2,
      changeDetection: 0,
    }));
  let i = t;
  return i;
})();
var Hn = (() => {
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
var Ac = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = F({ type: t })),
    (t.ɵinj = T({ imports: [Z, an, Z] }));
  let i = t;
  return i;
})();
var Mc = ["*"];
var Wh =
    ".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size, var(--mat-app-body-large))}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-app-body-medium))}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-app-body-large))}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-app-body-medium))}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}",
  ta = class {
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
        new ea(this.rowIndex, r)
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
  ea = class {
    constructor(t, r) {
      (this.row = t), (this.col = r);
    }
  },
  kc = new x("MAT_GRID_LIST"),
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
        this._rowspan = Math.round(ce(e));
      }
      get colspan() {
        return this._colspan;
      }
      set colspan(e) {
        this._colspan = Math.round(ce(e));
      }
      _setStyle(e, n) {
        this._element.nativeElement.style[e] = n;
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(h(k), h(kc, 8));
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [["mat-grid-tile"]],
        hostAttrs: [1, "mat-grid-tile"],
        hostVars: 2,
        hostBindings: function (n, o) {
          n & 2 && W("rowspan", o.rowspan)("colspan", o.colspan);
        },
        inputs: { rowspan: "rowspan", colspan: "colspan" },
        exportAs: ["matGridTile"],
        standalone: !0,
        features: [V],
        ngContentSelectors: Mc,
        decls: 2,
        vars: 0,
        consts: [[1, "mat-grid-tile-content"]],
        template: function (n, o) {
          n & 1 && (q(), l(0, "div", 0), D(1), u());
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
var qh = /^-?\d+((\.\d+)?[A-Za-z%$]?)+$/,
  Ni = class {
    constructor() {
      (this._rows = 0), (this._rowspan = 0);
    }
    init(t, r, e, n) {
      (this._gutterSize = Rc(t)),
        (this._rows = r.rowCount),
        (this._rowspan = r.rowspan),
        (this._cols = e),
        (this._direction = n);
    }
    getBaseTileSize(t, r) {
      return `(${t}% - (${this._gutterSize} * ${r}))`;
    }
    getTilePosition(t, r) {
      return r === 0 ? "0" : he(`(${t} + ${this._gutterSize}) * ${r}`);
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
        t._setStyle("width", he(this.getTileSize(o, t.colspan)));
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
  ia = class extends Ni {
    constructor(t) {
      super(), (this.fixedRowHeight = t);
    }
    init(t, r, e, n) {
      super.init(t, r, e, n),
        (this.fixedRowHeight = Rc(this.fixedRowHeight)),
        qh.test(this.fixedRowHeight);
    }
    setRowStyles(t, r) {
      t._setStyle("top", this.getTilePosition(this.fixedRowHeight, r)),
        t._setStyle(
          "height",
          he(this.getTileSize(this.fixedRowHeight, t.rowspan)),
        );
    }
    getComputedHeight() {
      return [
        "height",
        he(
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
  na = class extends Ni {
    constructor(t) {
      super(), this._parseRatio(t);
    }
    setRowStyles(t, r, e, n) {
      let o = e / this.rowHeightRatio;
      (this.baseTileHeight = this.getBaseTileSize(o, n)),
        t._setStyle("marginTop", this.getTilePosition(this.baseTileHeight, r)),
        t._setStyle(
          "paddingTop",
          he(this.getTileSize(this.baseTileHeight, t.rowspan)),
        );
    }
    getComputedHeight() {
      return [
        "paddingBottom",
        he(
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
  ra = class extends Ni {
    setRowStyles(t, r) {
      let e = 100 / this._rowspan,
        n = (this._rows - 1) / this._rows,
        o = this.getBaseTileSize(e, n);
      t._setStyle("top", this.getTilePosition(o, r)),
        t._setStyle("height", he(this.getTileSize(o, t.rowspan)));
    }
    reset(t) {
      t._tiles &&
        t._tiles.forEach((r) => {
          r._setStyle("top", null), r._setStyle("height", null);
        });
    }
  };
function he(i) {
  return `calc(${i})`;
}
function Rc(i) {
  return i.match(/([A-Za-z%]+)$/) ? i : `${i}px`;
}
var Qh = "fit",
  $n = (() => {
    let t = class t {
      constructor(e, n) {
        (this._element = e), (this._dir = n), (this._gutter = "1px");
      }
      get cols() {
        return this._cols;
      }
      set cols(e) {
        this._cols = Math.max(1, Math.round(ce(e)));
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
          e === Qh
            ? (this._tileStyler = new ra())
            : e && e.indexOf(":") > -1
              ? (this._tileStyler = new na(e))
              : (this._tileStyler = new ia(e));
      }
      _layoutTiles() {
        this._tileCoordinator || (this._tileCoordinator = new ta());
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
      return new (n || t)(h(k), h(zt, 8));
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
          n & 2 && W("cols", o.cols);
        },
        inputs: {
          cols: "cols",
          gutterSize: "gutterSize",
          rowHeight: "rowHeight",
        },
        exportAs: ["matGridList"],
        standalone: !0,
        features: [ct([{ provide: kc, useExisting: t }]), V],
        ngContentSelectors: Mc,
        decls: 2,
        vars: 0,
        template: function (n, o) {
          n & 1 && (q(), l(0, "div"), D(1), u());
        },
        styles: [Wh],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })(),
  Tc = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵmod = F({ type: t })),
      (t.ɵinj = T({ imports: [Yo, Z, Yo, Z] }));
    let i = t;
    return i;
  })();
var Gn = (() => {
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
            (W("aria-orientation", o.vertical ? "vertical" : "horizontal"),
            H("mat-divider-vertical", o.vertical)(
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
  Oc = (() => {
    let t = class t {};
    (t.ɵfac = function (n) {
      return new (n || t)();
    }),
      (t.ɵmod = F({ type: t })),
      (t.ɵinj = T({ imports: [Z, Z] }));
    let i = t;
    return i;
  })();
var Zh = ["cardContentRef"],
  Wn = class i {
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
        if ((r & 1 && It(Zh, 5), r & 2)) {
          let n;
          L((n = j())) && (e.cardContentRef = n.first);
        }
      },
      hostBindings: function (r, e) {
        r & 1 &&
          rt(
            "resize",
            function (o) {
              return e.onResize(o);
            },
            !1,
            Fa,
          );
      },
      decls: 37,
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
          l(13, "mat-card-content", 6),
          I(14, "img", 7),
          u()()(),
          l(15, "mat-grid-tile", 8)(16, "mat-card", 4)(17, "mat-card-title")(
            18,
            "a",
            9,
          ),
          p(19, "Chinese Typing Practice"),
          u()(),
          l(20, "mat-card-content", 6),
          I(21, "img", 10),
          u()()(),
          l(22, "mat-grid-tile", 8)(23, "mat-card", 4)(24, "mat-card-header")(
            25,
            "mat-card-title",
          )(26, "a", 11),
          p(27, "Class Scheduler"),
          u()()(),
          l(28, "mat-card-content", 6),
          I(29, "img", 12),
          u()()(),
          l(30, "mat-grid-tile", 8)(31, "mat-card", 4)(32, "mat-card-title")(
            33,
            "a",
            9,
          ),
          p(34, "Signaway - Learn Sign Language"),
          u()(),
          l(35, "mat-card-content", 6),
          p(36, " Coming soon "),
          u()()()()()()),
          r & 2 && (Y(3), ri(e.title), Y(4), kt("rowHeight", e.rowHeight));
      },
      dependencies: [ze, Bn, Un, Hn, zn, $n, Pi, Gn],
      styles: [
        "mat-card[_ngcontent-%COMP%]{text-align:center}.container-card[_ngcontent-%COMP%]{height:85vh}.item-card[_ngcontent-%COMP%]{width:80%;height:80%;padding:5%}.project-card-content[_ngcontent-%COMP%]{overflow:hidden}mat-card-title[_ngcontent-%COMP%]{margin-bottom:1rem}",
      ],
    });
  };
var qn = class i {
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
    dependencies: [ze, Hn, $n, Pi],
    styles: [
      ".image-card[_ngcontent-%COMP%]:hover{width:85%;height:85%;transition:.5s;box-shadow:0 3px 5px -1px #0003,0 5px 8px #00000024,0 1px 14px #0000001f}.image-card[_ngcontent-%COMP%]{width:80%;height:80%;overflow:hidden;border-radius:3%;border:1px solid palevioletred;box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f;transition:.5s}",
    ],
  });
};
var Qn = class i {
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
var Pc = ["mat-button", ""],
  Lc = [
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
  jc = [
    ".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])",
    "*",
    ".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]",
  ],
  Kh =
    '.mat-mdc-button-base{text-decoration:none}.mdc-button{-webkit-user-select:none;user-select:none;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0);padding:0 8px}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__label{position:relative}.mat-mdc-button{padding:0 var(--mat-text-button-horizontal-padding, 8px);height:var(--mdc-text-button-container-height);font-family:var(--mdc-text-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-text-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-text-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-text-button-label-text-transform);font-weight:var(--mdc-text-button-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-button:has(.material-icons,mat-icon,[matButtonIcon]){padding:0 var(--mat-text-button-with-icon-horizontal-padding, 8px)}.mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}[dir=rtl] .mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}.mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}.mat-mdc-button .mat-ripple-element{background-color:var(--mat-text-button-ripple-color)}.mat-mdc-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-state-layer-color, var(--mat-app-primary))}.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-text-button-touch-target-display)}.mat-mdc-button,.mat-mdc-button .mdc-button__ripple{border-radius:var(--mdc-text-button-container-shape, var(--mat-app-corner-full))}.mat-mdc-button:not(:disabled){color:var(--mdc-text-button-label-text-color, var(--mat-app-primary))}.mat-mdc-button[disabled],.mat-mdc-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-unelevated-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 var(--mat-filled-button-horizontal-padding, 16px);height:var(--mdc-filled-button-container-height);font-family:var(--mdc-filled-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-filled-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-filled-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-filled-button-label-text-transform);font-weight:var(--mdc-filled-button-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}.mat-mdc-unelevated-button .mat-ripple-element{background-color:var(--mat-filled-button-ripple-color)}.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-state-layer-color, var(--mat-app-on-primary))}.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-unelevated-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-unelevated-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-unelevated-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-unelevated-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-filled-button-touch-target-display)}.mat-mdc-unelevated-button:not(:disabled){color:var(--mdc-filled-button-label-text-color, var(--mat-app-on-primary));background-color:var(--mdc-filled-button-container-color, var(--mat-app-primary))}.mat-mdc-unelevated-button,.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mdc-filled-button-container-shape, var(--mat-app-corner-full))}.mat-mdc-unelevated-button[disabled],.mat-mdc-unelevated-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-filled-button-disabled-label-text-color);background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-raised-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 var(--mat-protected-button-horizontal-padding, 16px);box-shadow:var(--mdc-protected-button-container-elevation-shadow, var(--mat-app-level1));height:var(--mdc-protected-button-container-height);font-family:var(--mdc-protected-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-protected-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-protected-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-protected-button-label-text-transform);font-weight:var(--mdc-protected-button-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}.mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}.mat-mdc-raised-button .mat-ripple-element{background-color:var(--mat-protected-button-ripple-color)}.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-state-layer-color, var(--mat-app-primary))}.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-raised-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-raised-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-raised-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-raised-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-protected-button-touch-target-display)}.mat-mdc-raised-button:not(:disabled){color:var(--mdc-protected-button-label-text-color, var(--mat-app-primary));background-color:var(--mdc-protected-button-container-color, var(--mat-app-surface))}.mat-mdc-raised-button,.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mdc-protected-button-container-shape, var(--mat-app-corner-full))}.mat-mdc-raised-button:hover{box-shadow:var(--mdc-protected-button-hover-container-elevation-shadow, var(--mat-app-level2))}.mat-mdc-raised-button:focus{box-shadow:var(--mdc-protected-button-focus-container-elevation-shadow, var(--mat-app-level1))}.mat-mdc-raised-button:active,.mat-mdc-raised-button:focus:active{box-shadow:var(--mdc-protected-button-pressed-container-elevation-shadow, var(--mat-app-level1))}.mat-mdc-raised-button[disabled],.mat-mdc-raised-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-protected-button-disabled-label-text-color);background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button[disabled].mat-mdc-button-disabled,.mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled{box-shadow:var(--mdc-protected-button-disabled-container-elevation-shadow, var(--mat-app-level0))}.mat-mdc-raised-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 var(--mat-outlined-button-horizontal-padding, 15px);height:var(--mdc-outlined-button-container-height);font-family:var(--mdc-outlined-button-label-text-font, var(--mat-app-label-large-font));font-size:var(--mdc-outlined-button-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mdc-outlined-button-label-text-tracking, var(--mat-app-label-large-tracking));text-transform:var(--mdc-outlined-button-label-text-transform);font-weight:var(--mdc-outlined-button-label-text-weight, var(--mat-app-label-large-weight));border-radius:var(--mdc-outlined-button-container-shape, var(--mat-app-corner-full));border-width:var(--mdc-outlined-button-outline-width)}.mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-outlined-button-ripple-color)}.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-state-layer-color, var(--mat-app-primary))}.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-disabled-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-outlined-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-outlined-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-outlined-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity))}.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-outlined-button-touch-target-display)}.mat-mdc-outlined-button:not(:disabled){color:var(--mdc-outlined-button-label-text-color, var(--mat-app-primary));border-color:var(--mdc-outlined-button-outline-color, var(--mat-app-outline))}.mat-mdc-outlined-button[disabled],.mat-mdc-outlined-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-outlined-button-disabled-label-text-color);border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button .mdc-button__ripple{border-width:var(--mdc-outlined-button-outline-width);border-style:solid;border-color:rgba(0,0,0,0)}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-button .mdc-button__label,.mat-mdc-button .mat-icon,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-unelevated-button .mat-icon,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-raised-button .mat-icon,.mat-mdc-outlined-button .mdc-button__label,.mat-mdc-outlined-button .mat-icon{z-index:1;position:relative}.mat-mdc-button .mat-mdc-focus-indicator,.mat-mdc-unelevated-button .mat-mdc-focus-indicator,.mat-mdc-raised-button .mat-mdc-focus-indicator,.mat-mdc-outlined-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-unelevated-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-raised-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-outlined-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon{display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px}.mat-mdc-unelevated-button .mat-mdc-focus-indicator::before,.mat-mdc-raised-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-outlined-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 3px)*-1)}',
  Yh =
    ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}";
var Xh = new x("MAT_BUTTON_CONFIG");
var Jh = [
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
  Vc = (() => {
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
          (this._focusMonitor = v(ue)),
          (this._rippleLoader = v(Vn)),
          (this._isFab = !1),
          (this._disableRipple = !1),
          (this._disabled = !1);
        let s = v(Xh, { optional: !0 }),
          d = e.nativeElement,
          c = d.classList;
        (this.disabledInteractive = s?.disabledInteractive ?? !1),
          (this.color = s?.color ?? null),
          this._rippleLoader?.configureRipple(d, {
            className: "mat-mdc-button-ripple",
          });
        for (let { attribute: m, mdcClasses: f } of Jh)
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
      te();
    }),
      (t.ɵdir = P({
        type: t,
        inputs: {
          color: "color",
          disableRipple: [2, "disableRipple", "disableRipple", K],
          disabled: [2, "disabled", "disabled", K],
          ariaDisabled: [2, "aria-disabled", "ariaDisabled", K],
          disabledInteractive: [
            2,
            "disabledInteractive",
            "disabledInteractive",
            K,
          ],
        },
        features: [ut],
      }));
    let i = t;
    return i;
  })();
var tm = (() => {
    let t = class t extends Vc {
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
      te();
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
        features: [ut, pt],
      }));
    let i = t;
    return i;
  })(),
  Zn = (() => {
    let t = class t extends Vc {
      constructor(e, n, o, a) {
        super(e, n, o, a);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(h(k), h(Q), h(S), h(mt, 8));
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
            (W("disabled", o._getDisabledAttribute())(
              "aria-disabled",
              o._getAriaDisabled(),
            ),
            Gt(o.color ? "mat-" + o.color : ""),
            H("mat-mdc-button-disabled", o.disabled)(
              "mat-mdc-button-disabled-interactive",
              o.disabledInteractive,
            )("_mat-animation-noopable", o._animationMode === "NoopAnimations")(
              "mat-unthemed",
              !o.color,
            )("mat-mdc-button-base", !0));
        },
        exportAs: ["matButton"],
        standalone: !0,
        features: [pt, V],
        attrs: Pc,
        ngContentSelectors: jc,
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
            (q(Lc),
            I(0, "span", 0),
            D(1),
            l(2, "span", 1),
            D(3, 1),
            u(),
            D(4, 2),
            I(5, "span", 2)(6, "span", 3)),
            n & 2 &&
              H("mdc-button__ripple", !o._isFab)("mdc-fab__ripple", o._isFab);
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
  zc = (() => {
    let t = class t extends tm {
      constructor(e, n, o, a) {
        super(e, n, o, a);
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(h(k), h(Q), h(S), h(mt, 8));
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
            (W("disabled", o._getDisabledAttribute())(
              "tabindex",
              o.disabled && !o.disabledInteractive ? -1 : o.tabIndex,
            )("aria-disabled", o._getDisabledAttribute()),
            Gt(o.color ? "mat-" + o.color : ""),
            H("mat-mdc-button-disabled", o.disabled)(
              "mat-mdc-button-disabled-interactive",
              o.disabledInteractive,
            )("_mat-animation-noopable", o._animationMode === "NoopAnimations")(
              "mat-unthemed",
              !o.color,
            )("mat-mdc-button-base", !0));
        },
        exportAs: ["matButton", "matAnchor"],
        standalone: !0,
        features: [pt, V],
        attrs: Pc,
        ngContentSelectors: jc,
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
            (q(Lc),
            I(0, "span", 0),
            D(1),
            l(2, "span", 1),
            D(3, 1),
            u(),
            D(4, 2),
            I(5, "span", 2)(6, "span", 3)),
            n & 2 &&
              H("mdc-button__ripple", !o._isFab)("mdc-fab__ripple", o._isFab);
        },
        styles: [Kh, Yh],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })();
var Bc = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = F({ type: t })),
    (t.ɵinj = T({ imports: [Z, Xo, Z] }));
  let i = t;
  return i;
})();
function Qt(i) {
  return (
    i == null || ((typeof i == "string" || Array.isArray(i)) && i.length === 0)
  );
}
function Zc(i) {
  return i != null && typeof i.length == "number";
}
var Kc = new x(""),
  Yc = new x(""),
  em =
    /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  Yn = class {
    static min(t) {
      return im(t);
    }
    static max(t) {
      return nm(t);
    }
    static required(t) {
      return rm(t);
    }
    static requiredTrue(t) {
      return om(t);
    }
    static email(t) {
      return am(t);
    }
    static minLength(t) {
      return sm(t);
    }
    static maxLength(t) {
      return cm(t);
    }
    static pattern(t) {
      return dm(t);
    }
    static nullValidator(t) {
      return Xc(t);
    }
    static compose(t) {
      return rd(t);
    }
    static composeAsync(t) {
      return od(t);
    }
  };
function im(i) {
  return (t) => {
    if (Qt(t.value) || Qt(i)) return null;
    let r = parseFloat(t.value);
    return !isNaN(r) && r < i ? { min: { min: i, actual: t.value } } : null;
  };
}
function nm(i) {
  return (t) => {
    if (Qt(t.value) || Qt(i)) return null;
    let r = parseFloat(t.value);
    return !isNaN(r) && r > i ? { max: { max: i, actual: t.value } } : null;
  };
}
function rm(i) {
  return Qt(i.value) ? { required: !0 } : null;
}
function om(i) {
  return i.value === !0 ? null : { required: !0 };
}
function am(i) {
  return Qt(i.value) || em.test(i.value) ? null : { email: !0 };
}
function sm(i) {
  return (t) =>
    Qt(t.value) || !Zc(t.value)
      ? null
      : t.value.length < i
        ? { minlength: { requiredLength: i, actualLength: t.value.length } }
        : null;
}
function cm(i) {
  return (t) =>
    Zc(t.value) && t.value.length > i
      ? { maxlength: { requiredLength: i, actualLength: t.value.length } }
      : null;
}
function dm(i) {
  if (!i) return Xc;
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
      if (Qt(e.value)) return null;
      let n = e.value;
      return t.test(n)
        ? null
        : { pattern: { requiredPattern: r, actualValue: n } };
    }
  );
}
function Xc(i) {
  return null;
}
function Jc(i) {
  return i != null;
}
function td(i) {
  return nn(i) ? st(i) : i;
}
function ed(i) {
  let t = {};
  return (
    i.forEach((r) => {
      t = r != null ? g(g({}, t), r) : t;
    }),
    Object.keys(t).length === 0 ? null : t
  );
}
function id(i, t) {
  return t.map((r) => r(i));
}
function lm(i) {
  return !i.validate;
}
function nd(i) {
  return i.map((t) => (lm(t) ? t : (r) => t.validate(r)));
}
function rd(i) {
  if (!i) return null;
  let t = i.filter(Jc);
  return t.length == 0
    ? null
    : function (r) {
        return ed(id(r, t));
      };
}
function da(i) {
  return i != null ? rd(nd(i)) : null;
}
function od(i) {
  if (!i) return null;
  let t = i.filter(Jc);
  return t.length == 0
    ? null
    : function (r) {
        let e = id(r, t).map(td);
        return Ca(e).pipe(M(ed));
      };
}
function la(i) {
  return i != null ? od(nd(i)) : null;
}
function Hc(i, t) {
  return i === null ? [t] : Array.isArray(i) ? [...i, t] : [i, t];
}
function ad(i) {
  return i._rawValidators;
}
function sd(i) {
  return i._rawAsyncValidators;
}
function oa(i) {
  return i ? (Array.isArray(i) ? i : [i]) : [];
}
function Xn(i, t) {
  return Array.isArray(i) ? i.includes(t) : i === t;
}
function $c(i, t) {
  let r = oa(t);
  return (
    oa(i).forEach((n) => {
      Xn(r, n) || r.push(n);
    }),
    r
  );
}
function Gc(i, t) {
  return oa(t).filter((r) => !Xn(i, r));
}
var Jn = class {
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
        (this._composedValidatorFn = da(this._rawValidators));
    }
    _setAsyncValidators(t) {
      (this._rawAsyncValidators = t || []),
        (this._composedAsyncValidatorFn = la(this._rawAsyncValidators));
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
  $e = class extends Jn {
    get formDirective() {
      return null;
    }
    get path() {
      return null;
    }
  },
  tr = class extends Jn {
    constructor() {
      super(...arguments),
        (this._parent = null),
        (this.name = null),
        (this.valueAccessor = null);
    }
  };
var um = {
    "[class.ng-untouched]": "isUntouched",
    "[class.ng-touched]": "isTouched",
    "[class.ng-pristine]": "isPristine",
    "[class.ng-dirty]": "isDirty",
    "[class.ng-valid]": "isValid",
    "[class.ng-invalid]": "isInvalid",
    "[class.ng-pending]": "isPending",
  },
  gv = U(g({}, um), { "[class.ng-submitted]": "isSubmitted" });
var Li = "VALID",
  Kn = "INVALID",
  Ue = "PENDING",
  ji = "DISABLED",
  Zt = class {},
  er = class extends Zt {
    constructor(t, r) {
      super(), (this.value = t), (this.source = r);
    }
  },
  zi = class extends Zt {
    constructor(t, r) {
      super(), (this.pristine = t), (this.source = r);
    }
  },
  Bi = class extends Zt {
    constructor(t, r) {
      super(), (this.touched = t), (this.source = r);
    }
  },
  He = class extends Zt {
    constructor(t, r) {
      super(), (this.status = t), (this.source = r);
    }
  },
  aa = class extends Zt {
    constructor(t) {
      super(), (this.source = t);
    }
  },
  sa = class extends Zt {
    constructor(t) {
      super(), (this.source = t);
    }
  };
function cd(i) {
  return (ar(i) ? i.validators : i) || null;
}
function hm(i) {
  return Array.isArray(i) ? da(i) : i || null;
}
function dd(i, t) {
  return (ar(t) ? t.asyncValidators : i) || null;
}
function mm(i) {
  return Array.isArray(i) ? la(i) : i || null;
}
function ar(i) {
  return i != null && !Array.isArray(i) && typeof i == "object";
}
function pm(i, t, r) {
  let e = i.controls;
  if (!(t ? Object.keys(e) : e).length) throw new $(1e3, "");
  if (!e[r]) throw new $(1001, "");
}
function fm(i, t, r) {
  i._forEachChild((e, n) => {
    if (r[n] === void 0) throw new $(1002, "");
  });
}
var ir = class {
    constructor(t, r) {
      (this._pendingDirty = !1),
        (this._hasOwnPendingAsyncValidator = null),
        (this._pendingTouched = !1),
        (this._onCollectionChange = () => {}),
        (this._parent = null),
        (this._status = Ie(() => this.statusReactive())),
        (this.statusReactive = Ce(void 0)),
        (this._pristine = Ie(() => this.pristineReactive())),
        (this.pristineReactive = Ce(!0)),
        (this._touched = Ie(() => this.touchedReactive())),
        (this.touchedReactive = Ce(!1)),
        (this._events = new A()),
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
      return Ot(this.statusReactive);
    }
    set status(t) {
      Ot(() => this.statusReactive.set(t));
    }
    get valid() {
      return this.status === Li;
    }
    get invalid() {
      return this.status === Kn;
    }
    get pending() {
      return this.status == Ue;
    }
    get disabled() {
      return this.status === ji;
    }
    get enabled() {
      return this.status !== ji;
    }
    get pristine() {
      return Ot(this.pristineReactive);
    }
    set pristine(t) {
      Ot(() => this.pristineReactive.set(t));
    }
    get dirty() {
      return !this.pristine;
    }
    get touched() {
      return Ot(this.touchedReactive);
    }
    set touched(t) {
      Ot(() => this.touchedReactive.set(t));
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
      this.setValidators($c(t, this._rawValidators));
    }
    addAsyncValidators(t) {
      this.setAsyncValidators($c(t, this._rawAsyncValidators));
    }
    removeValidators(t) {
      this.setValidators(Gc(t, this._rawValidators));
    }
    removeAsyncValidators(t) {
      this.setAsyncValidators(Gc(t, this._rawAsyncValidators));
    }
    hasValidator(t) {
      return Xn(this._rawValidators, t);
    }
    hasAsyncValidator(t) {
      return Xn(this._rawAsyncValidators, t);
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
      this.status = Ue;
      let r = t.sourceControl ?? this;
      t.emitEvent !== !1 &&
        (this._events.next(new He(this.status, r)),
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
        (this._events.next(new er(this.value, e)),
        this._events.next(new He(this.status, e)),
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
          (this.status === Li || this.status === Ue) &&
            this._runAsyncValidator(e, t.emitEvent);
      }
      let r = t.sourceControl ?? this;
      t.emitEvent !== !1 &&
        (this._events.next(new er(this.value, r)),
        this._events.next(new He(this.status, r)),
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
        (this.status = Ue),
          (this._hasOwnPendingAsyncValidator = { emitEvent: r !== !1 });
        let e = td(this.asyncValidator(this));
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
        (t || e) && this._events.next(new He(this.status, r)),
        this._parent && this._parent._updateControlsErrors(t, r, e);
    }
    _initObservables() {
      (this.valueChanges = new G()), (this.statusChanges = new G());
    }
    _calculateStatus() {
      return this._allControlsDisabled()
        ? ji
        : this.errors
          ? Kn
          : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(Ue)
            ? Ue
            : this._anyControlsHaveStatus(Kn)
              ? Kn
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
      ar(t) && t.updateOn != null && (this._updateOn = t.updateOn);
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
        (this._composedValidatorFn = hm(this._rawValidators));
    }
    _assignAsyncValidators(t) {
      (this._rawAsyncValidators = Array.isArray(t) ? t.slice() : t),
        (this._composedAsyncValidatorFn = mm(this._rawAsyncValidators));
    }
  },
  nr = class extends ir {
    constructor(t, r, e) {
      super(cd(r), dd(e, r)),
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
      fm(this, !0, t),
        Object.keys(t).forEach((e) => {
          pm(this, !0, e),
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
var ld = new x("CallSetDisabledState", {
    providedIn: "root",
    factory: () => ud,
  }),
  ud = "always";
function ca(i, t, r = ud) {
  ua(i, t),
    t.valueAccessor.writeValue(i.value),
    (i.disabled || r === "always") &&
      t.valueAccessor.setDisabledState?.(i.disabled),
    vm(i, t),
    _m(i, t),
    bm(i, t),
    gm(i, t);
}
function Wc(i, t, r = !0) {
  let e = () => {};
  t.valueAccessor &&
    (t.valueAccessor.registerOnChange(e), t.valueAccessor.registerOnTouched(e)),
    or(i, t),
    i &&
      (t._invokeOnDestroyCallbacks(), i._registerOnCollectionChange(() => {}));
}
function rr(i, t) {
  i.forEach((r) => {
    r.registerOnValidatorChange && r.registerOnValidatorChange(t);
  });
}
function gm(i, t) {
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
function ua(i, t) {
  let r = ad(i);
  t.validator !== null
    ? i.setValidators(Hc(r, t.validator))
    : typeof r == "function" && i.setValidators([r]);
  let e = sd(i);
  t.asyncValidator !== null
    ? i.setAsyncValidators(Hc(e, t.asyncValidator))
    : typeof e == "function" && i.setAsyncValidators([e]);
  let n = () => i.updateValueAndValidity();
  rr(t._rawValidators, n), rr(t._rawAsyncValidators, n);
}
function or(i, t) {
  let r = !1;
  if (i !== null) {
    if (t.validator !== null) {
      let n = ad(i);
      if (Array.isArray(n) && n.length > 0) {
        let o = n.filter((a) => a !== t.validator);
        o.length !== n.length && ((r = !0), i.setValidators(o));
      }
    }
    if (t.asyncValidator !== null) {
      let n = sd(i);
      if (Array.isArray(n) && n.length > 0) {
        let o = n.filter((a) => a !== t.asyncValidator);
        o.length !== n.length && ((r = !0), i.setAsyncValidators(o));
      }
    }
  }
  let e = () => {};
  return rr(t._rawValidators, e), rr(t._rawAsyncValidators, e), r;
}
function vm(i, t) {
  t.valueAccessor.registerOnChange((r) => {
    (i._pendingValue = r),
      (i._pendingChange = !0),
      (i._pendingDirty = !0),
      i.updateOn === "change" && hd(i, t);
  });
}
function bm(i, t) {
  t.valueAccessor.registerOnTouched(() => {
    (i._pendingTouched = !0),
      i.updateOn === "blur" && i._pendingChange && hd(i, t),
      i.updateOn !== "submit" && i.markAsTouched();
  });
}
function hd(i, t) {
  i._pendingDirty && i.markAsDirty(),
    i.setValue(i._pendingValue, { emitModelToViewChange: !1 }),
    t.viewToModelUpdate(i._pendingValue),
    (i._pendingChange = !1);
}
function _m(i, t) {
  let r = (e, n) => {
    t.valueAccessor.writeValue(e), n && t.viewToModelUpdate(e);
  };
  i.registerOnChange(r),
    t._registerOnDestroy(() => {
      i._unregisterOnChange(r);
    });
}
function md(i, t) {
  i == null, ua(i, t);
}
function ym(i, t) {
  return or(i, t);
}
function pd(i, t) {
  i._syncPendingControls(),
    t.forEach((r) => {
      let e = r.control;
      e.updateOn === "submit" &&
        e._pendingChange &&
        (r.viewToModelUpdate(e._pendingValue), (e._pendingChange = !1));
    });
}
function wm(i, t) {
  let r = i.indexOf(t);
  r > -1 && i.splice(r, 1);
}
var xm = { provide: $e, useExisting: ye(() => ha) },
  Vi = Promise.resolve(),
  ha = (() => {
    let t = class t extends $e {
      get submitted() {
        return Ot(this.submittedReactive);
      }
      constructor(e, n, o) {
        super(),
          (this.callSetDisabledState = o),
          (this._submitted = Ie(() => this.submittedReactive())),
          (this.submittedReactive = Ce(!1)),
          (this._directives = new Set()),
          (this.ngSubmit = new G()),
          (this.form = new nr({}, da(e), la(n)));
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
            ca(e.control, e, this.callSetDisabledState),
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
            o = new nr({});
          md(o, e),
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
          pd(this.form, this._directives),
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
      return new (n || t)(h(Kc, 10), h(Yc, 10), h(ld, 8));
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
            rt("submit", function (s) {
              return o.onSubmit(s);
            })("reset", function () {
              return o.onReset();
            });
        },
        inputs: { options: [0, "ngFormOptions", "options"] },
        outputs: { ngSubmit: "ngSubmit" },
        exportAs: ["ngForm"],
        features: [ct([xm]), pt],
      }));
    let i = t;
    return i;
  })();
function qc(i, t) {
  let r = i.indexOf(t);
  r > -1 && i.splice(r, 1);
}
function Qc(i) {
  return (
    typeof i == "object" &&
    i !== null &&
    Object.keys(i).length === 2 &&
    "value" in i &&
    "disabled" in i
  );
}
var Cm = class extends ir {
  constructor(t = null, r, e) {
    super(cd(r), dd(e, r)),
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
      ar(r) &&
        (r.nonNullable || r.initialValueIsDefault) &&
        (Qc(t) ? (this.defaultValue = t.value) : (this.defaultValue = t));
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
    qc(this._onChange, t);
  }
  registerOnDisabledChange(t) {
    this._onDisabledChange.push(t);
  }
  _unregisterOnDisabledChange(t) {
    qc(this._onDisabledChange, t);
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
    Qc(t)
      ? ((this.value = this._pendingValue = t.value),
        t.disabled
          ? this.disable({ onlySelf: !0, emitEvent: !1 })
          : this.enable({ onlySelf: !0, emitEvent: !1 }))
      : (this.value = this._pendingValue = t);
  }
};
var Im = (i) => i instanceof Cm;
var Em = { provide: $e, useExisting: ye(() => ma) },
  ma = (() => {
    let t = class t extends $e {
      get submitted() {
        return Ot(this._submittedReactive);
      }
      set submitted(e) {
        this._submittedReactive.set(e);
      }
      constructor(e, n, o) {
        super(),
          (this.callSetDisabledState = o),
          (this._submitted = Ie(() => this._submittedReactive())),
          (this._submittedReactive = Ce(!1)),
          (this._onCollectionChange = () => this._updateDomValue()),
          (this.directives = []),
          (this.form = null),
          (this.ngSubmit = new G()),
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
          (or(this.form, this),
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
          ca(n, e, this.callSetDisabledState),
          n.updateValueAndValidity({ emitEvent: !1 }),
          this.directives.push(e),
          n
        );
      }
      getControl(e) {
        return this.form.get(e.path);
      }
      removeControl(e) {
        Wc(e.control || null, e, !1), wm(this.directives, e);
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
          pd(this.form, this.directives),
          this.ngSubmit.emit(e),
          this.form._events.next(new aa(this.control)),
          e?.target?.method === "dialog"
        );
      }
      onReset() {
        this.resetForm();
      }
      resetForm(e = void 0) {
        this.form.reset(e),
          this._submittedReactive.set(!1),
          this.form._events.next(new sa(this.form));
      }
      _updateDomValue() {
        this.directives.forEach((e) => {
          let n = e.control,
            o = this.form.get(e.path);
          n !== o &&
            (Wc(n || null, e),
            Im(o) && (ca(o, e, this.callSetDisabledState), (e.control = o)));
        }),
          this.form._updateTreeValidity({ emitEvent: !1 });
      }
      _setUpFormContainer(e) {
        let n = this.form.get(e.path);
        md(n, e), n.updateValueAndValidity({ emitEvent: !1 });
      }
      _cleanUpFormContainer(e) {
        if (this.form) {
          let n = this.form.get(e.path);
          n && ym(n, e) && n.updateValueAndValidity({ emitEvent: !1 });
        }
      }
      _updateRegistrations() {
        this.form._registerOnCollectionChange(this._onCollectionChange),
          this._oldForm && this._oldForm._registerOnCollectionChange(() => {});
      }
      _updateValidators() {
        ua(this.form, this), this._oldForm && or(this._oldForm, this);
      }
      _checkFormPresent() {
        this.form;
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(h(Kc, 10), h(Yc, 10), h(ld, 8));
    }),
      (t.ɵdir = P({
        type: t,
        selectors: [["", "formGroup", ""]],
        hostBindings: function (n, o) {
          n & 1 &&
            rt("submit", function (s) {
              return o.onSubmit(s);
            })("reset", function () {
              return o.onReset();
            });
        },
        inputs: { form: [0, "formGroup", "form"] },
        outputs: { ngSubmit: "ngSubmit" },
        exportAs: ["ngForm"],
        features: [ct([Em]), pt, Ft],
      }));
    let i = t;
    return i;
  })();
var fd = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵdir = P({ type: t }));
  let i = t;
  return i;
})();
var km = [
    "*",
    [["mat-chip-avatar"], ["", "matChipAvatar", ""]],
    [
      ["mat-chip-trailing-icon"],
      ["", "matChipRemove", ""],
      ["", "matChipTrailingIcon", ""],
    ],
  ],
  Rm = [
    "*",
    "mat-chip-avatar, [matChipAvatar]",
    "mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]",
  ];
function Tm(i, t) {
  i & 1 && (l(0, "span", 3), D(1, 1), u());
}
function Fm(i, t) {
  i & 1 && (l(0, "span", 6), D(1, 2), u());
}
var Om =
    '.mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{flex-basis:100%;overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}.mdc-evolution-chip__action--primary{font:inherit;letter-spacing:inherit;white-space:inherit;overflow-x:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before{border-width:var(--mdc-chip-outline-width);border-radius:var(--mdc-chip-container-shape-radius);box-sizing:border-box;content:"";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1;border-style:solid}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before{border-color:var(--mdc-chip-outline-color, var(--mat-app-outline))}.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before{border-color:var(--mdc-chip-focus-outline-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before{border-color:var(--mdc-chip-disabled-outline-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before{border-width:var(--mdc-chip-flat-selected-outline-width)}.mat-mdc-basic-chip .mdc-evolution-chip__action--primary{font:inherit}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip__action--trailing{position:relative;overflow:visible}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--trailing{color:var(--mdc-chip-with-trailing-icon-trailing-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--trailing{color:var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-app-on-surface))}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip__text-label{-webkit-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__text-label{font-family:var(--mdc-chip-label-text-font, var(--mat-app-label-large-font));line-height:var(--mdc-chip-label-text-line-height, var(--mat-app-label-large-line-height));font-size:var(--mdc-chip-label-text-size, var(--mat-app-label-large-size));font-weight:var(--mdc-chip-label-text-weight, var(--mat-app-label-large-weight));letter-spacing:var(--mdc-chip-label-text-tracking, var(--mat-app-label-large-tracking))}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mdc-chip-label-text-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mdc-chip-selected-label-text-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label{color:var(--mdc-chip-disabled-label-text-color)}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mat-mdc-standard-chip .mdc-evolution-chip__graphic{width:var(--mdc-chip-with-avatar-avatar-size);height:var(--mdc-chip-with-avatar-avatar-size);font-size:var(--mdc-chip-with-avatar-avatar-size)}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%;height:20px;width:20px}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark{color:var(--mdc-chip-with-icon-selected-icon-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark{color:var(--mdc-chip-with-icon-disabled-icon-color, var(--mat-app-on-surface))}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%, -50%);opacity:1}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}.cdk-high-contrast-active .mdc-evolution-chip__checkmark-path{stroke:CanvasText !important}.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing{height:18px;width:18px;font-size:18px}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove{opacity:calc(var(--mat-chip-trailing-action-opacity)*var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity))}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus{opacity:calc(var(--mat-chip-trailing-action-focus-opacity)*var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity))}.mat-mdc-standard-chip{border-radius:var(--mdc-chip-container-shape-radius);height:var(--mdc-chip-container-height)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled){background-color:var(--mdc-chip-elevated-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{background-color:var(--mdc-chip-elevated-disabled-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled){background-color:var(--mdc-chip-elevated-selected-container-color, var(--mat-app-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled{background-color:var(--mdc-chip-flat-disabled-selected-container-color)}.cdk-high-contrast-active .mat-mdc-standard-chip{outline:solid 1px}.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary{border-radius:var(--mdc-chip-with-avatar-avatar-shape-radius);width:var(--mdc-chip-with-icon-icon-size);height:var(--mdc-chip-with-icon-icon-size);font-size:var(--mdc-chip-with-icon-icon-size)}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary{color:var(--mdc-chip-with-icon-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary{color:var(--mdc-chip-with-icon-disabled-icon-color, var(--mat-app-on-surface))}.mat-mdc-chip-highlighted{--mdc-chip-with-icon-icon-color:var(--mdc-chip-with-icon-selected-icon-color, var(--mat-app-on-secondary-container));--mdc-chip-elevated-container-color:var(--mdc-chip-elevated-selected-container-color, var(--mat-app-secondary-container));--mdc-chip-label-text-color:var(--mdc-chip-selected-label-text-color, var(--mat-app-on-secondary-container));--mdc-chip-outline-width:var(--mdc-chip-flat-selected-outline-width)}.mat-mdc-chip-focus-overlay{background:var(--mdc-chip-focus-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-focus-state-layer-color, var(--mat-app-on-secondary-container))}.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-hover-state-layer-color, var(--mat-app-on-surface-variant));opacity:var(--mdc-chip-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover,.mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-hover-state-layer-color, var(--mat-app-on-secondary-container));opacity:var(--mdc-chip-selected-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-focus-state-layer-color, var(--mat-app-on-surface-variant));opacity:var(--mdc-chip-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-focus-state-layer-color, var(--mat-app-on-secondary-container));opacity:var(--mdc-chip-selected-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar{opacity:var(--mdc-chip-with-avatar-disabled-avatar-opacity)}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{opacity:var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity)}.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{opacity:var(--mdc-chip-with-icon-disabled-icon-opacity)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{opacity:var(--mat-chip-disabled-container-opacity)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-trailing-icon-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-app-on-surface))}.mat-mdc-chip-remove{opacity:var(--mat-chip-trailing-action-opacity)}.mat-mdc-chip-remove:focus{opacity:var(--mat-chip-trailing-action-focus-opacity)}.mat-mdc-chip-remove::after{background:var(--mat-chip-trailing-action-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-chip-remove:hover::after{opacity:var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-chip-remove:focus::after{opacity:var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-chip-selected .mat-mdc-chip-remove::after,.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after{background:var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-standard-chip .mdc-evolution-chip__cell--primary,.mat-mdc-standard-chip .mdc-evolution-chip__action--primary,.mat-mdc-standard-chip .mat-mdc-chip-action-label{overflow:visible}.mat-mdc-standard-chip .mat-mdc-chip-graphic,.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon{box-sizing:content-box}.mat-mdc-standard-chip._mat-animation-noopable,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path{transition-duration:1ms;animation-duration:1ms}.mat-mdc-chip-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;opacity:0;border-radius:inherit;transition:opacity 150ms linear}._mat-animation-noopable .mat-mdc-chip-focus-overlay{transition:none}.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay{display:none}.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-chip-avatar{text-align:center;line-height:1;color:var(--mdc-chip-with-icon-icon-color, currentColor)}.mat-mdc-chip{position:relative;z-index:0}.mat-mdc-chip-action-label{text-align:left;z-index:1}[dir=rtl] .mat-mdc-chip-action-label{text-align:right}.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label{position:relative}.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.mat-mdc-chip-action-label .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-chip-remove::before{margin:calc(var(--mat-mdc-focus-indicator-border-width, 3px)*-1);left:8px;right:8px}.mat-mdc-chip-remove::after{content:"";display:block;opacity:0;position:absolute;top:-2px;bottom:-2px;left:6px;right:6px;border-radius:50%}.mat-mdc-chip-remove .mat-icon{width:18px;height:18px;font-size:18px;box-sizing:content-box}.mat-chip-edit-input{cursor:text;display:inline-block;color:inherit;outline:0}.cdk-high-contrast-active .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple){outline-width:3px}.mat-mdc-chip-action:focus .mat-mdc-focus-indicator::before{content:""}',
  Nm = [
    [["mat-chip-avatar"], ["", "matChipAvatar", ""]],
    [["", "matChipEditInput", ""]],
    "*",
    [
      ["mat-chip-trailing-icon"],
      ["", "matChipRemove", ""],
      ["", "matChipTrailingIcon", ""],
    ],
  ],
  Pm = [
    "mat-chip-avatar, [matChipAvatar]",
    "[matChipEditInput]",
    "*",
    "mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]",
  ];
function Lm(i, t) {
  i & 1 && I(0, "span", 0);
}
function jm(i, t) {
  i & 1 && (l(0, "span", 2), D(1), u());
}
function Vm(i, t) {
  i & 1 && D(0, 1);
}
function zm(i, t) {
  i & 1 && I(0, "span", 7);
}
function Bm(i, t) {
  if ((i & 1 && ft(0, Vm, 1, 0)(1, zm, 1, 0, "span", 7), i & 2)) {
    let r = ee();
    gt(r.contentEditInput ? 0 : 1);
  }
}
function Um(i, t) {
  i & 1 && D(0, 2);
}
function Hm(i, t) {
  i & 1 && (l(0, "span", 5), D(1, 3), u());
}
var yd = ["*"],
  $m =
    ".mat-mdc-chip-set{display:flex}.mat-mdc-chip-set:focus{outline:none}.mat-mdc-chip-set .mdc-evolution-chip-set__chips{min-width:100%;margin-left:-8px;margin-right:0}.mat-mdc-chip-set .mdc-evolution-chip{margin:4px 0 4px 8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips{margin-left:0;margin-right:-8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip{margin-left:0;margin-right:8px}.mdc-evolution-chip-set__chips{display:flex;flex-flow:wrap;min-width:0}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic{flex-grow:0}.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary{flex-basis:100%;justify-content:start}input.mat-mdc-chip-input{flex:1 0 150px;margin-left:8px}[dir=rtl] input.mat-mdc-chip-input{margin-left:0;margin-right:8px}";
var gd = new x("MatChipAvatar"),
  vd = new x("MatChipTrailingIcon"),
  bd = new x("MatChipRemove"),
  va = new x("MatChip"),
  fa = (() => {
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
      return new (n || t)(h(k), h(va));
    }),
      (t.ɵdir = P({
        type: t,
        selectors: [["", "matChipAction", ""]],
        hostAttrs: [1, "mdc-evolution-chip__action", "mat-mdc-chip-action"],
        hostVars: 9,
        hostBindings: function (n, o) {
          n & 1 &&
            rt("click", function (s) {
              return o._handleClick(s);
            })("keydown", function (s) {
              return o._handleKeydown(s);
            }),
            n & 2 &&
              (W("tabindex", o._getTabindex())(
                "disabled",
                o._getDisabledAttribute(),
              )("aria-disabled", o.disabled),
              H("mdc-evolution-chip__action--primary", o._isPrimary)(
                "mdc-evolution-chip__action--presentational",
                !o.isInteractive,
              )("mdc-evolution-chip__action--trailing", !o._isPrimary));
        },
        inputs: {
          isInteractive: "isInteractive",
          disabled: [2, "disabled", "disabled", K],
          tabIndex: [
            2,
            "tabIndex",
            "tabIndex",
            (e) => (e == null ? -1 : oi(e)),
          ],
          _allowFocusWhenDisabled: "_allowFocusWhenDisabled",
        },
        standalone: !0,
        features: [ut],
      }));
    let i = t;
    return i;
  })();
var Gm = 0,
  me = (() => {
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
          (this._onFocus = new A()),
          (this._onBlur = new A()),
          (this.role = null),
          (this._hasFocusInternal = !1),
          (this.id = `mat-mdc-chip-${Gm++}`),
          (this.ariaLabel = null),
          (this.ariaDescription = null),
          (this._ariaDescriptionId = `${this.id}-aria-description`),
          (this.removable = !0),
          (this.highlighted = !1),
          (this.disableRipple = !1),
          (this.disabled = !1),
          (this.removed = new G()),
          (this.destroyed = new G()),
          (this.basicChipAttrName = "mat-basic-chip"),
          (this._rippleLoader = v(Vn)),
          (this._injector = v(Ct)),
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
        this._actionChanges = ge(
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
              : Mt(
                  () =>
                    this._ngZone.run(() => this._onBlur.next({ chip: this })),
                  { injector: this._injector },
                ));
        });
      }
    };
    (t.ɵfac = function (n) {
      return new (n || t)(h(J), h(k), h(S), h(ue), h(R), h(mt, 8), h(Oi, 8));
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
              (X(a, gd, 5),
              X(a, vd, 5),
              X(a, bd, 5),
              X(a, gd, 5),
              X(a, vd, 5),
              X(a, bd, 5)),
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
          if ((n & 1 && It(fa, 5), n & 2)) {
            let a;
            L((a = j())) && (o.primaryAction = a.first);
          }
        },
        hostAttrs: [1, "mat-mdc-chip"],
        hostVars: 31,
        hostBindings: function (n, o) {
          n & 1 &&
            rt("keydown", function (s) {
              return o._handleKeydown(s);
            }),
            n & 2 &&
              (ni("id", o.id),
              W("role", o.role)("aria-label", o.ariaLabel),
              Gt("mat-" + (o.color || "primary")),
              H("mdc-evolution-chip", !o._isBasicChip)(
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
          removable: [2, "removable", "removable", K],
          highlighted: [2, "highlighted", "highlighted", K],
          disableRipple: [2, "disableRipple", "disableRipple", K],
          disabled: [2, "disabled", "disabled", K],
        },
        outputs: { removed: "removed", destroyed: "destroyed" },
        exportAs: ["matChip"],
        standalone: !0,
        features: [ct([{ provide: va, useExisting: t }]), ut, V],
        ngContentSelectors: Rm,
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
            (q(km),
            I(0, "span", 0),
            l(1, "span", 1)(2, "span", 2),
            ft(3, Tm, 2, 0, "span", 3),
            l(4, "span", 4),
            D(5),
            I(6, "span", 5),
            u()()(),
            ft(7, Fm, 2, 0, "span", 6)),
            n & 2 &&
              (Y(2),
              kt("isInteractive", !1),
              Y(),
              gt(o.leadingIcon ? 3 : -1),
              Y(4),
              gt(o._hasTrailingIcon() ? 7 : -1));
        },
        dependencies: [fa],
        styles: [
          '.mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{flex-basis:100%;overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}.mdc-evolution-chip__action--primary{font:inherit;letter-spacing:inherit;white-space:inherit;overflow-x:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before{border-width:var(--mdc-chip-outline-width);border-radius:var(--mdc-chip-container-shape-radius);box-sizing:border-box;content:"";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1;border-style:solid}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before{border-color:var(--mdc-chip-outline-color, var(--mat-app-outline))}.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before{border-color:var(--mdc-chip-focus-outline-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before{border-color:var(--mdc-chip-disabled-outline-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before{border-width:var(--mdc-chip-flat-selected-outline-width)}.mat-mdc-basic-chip .mdc-evolution-chip__action--primary{font:inherit}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip__action--trailing{position:relative;overflow:visible}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--trailing{color:var(--mdc-chip-with-trailing-icon-trailing-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--trailing{color:var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-app-on-surface))}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}.mdc-evolution-chip__text-label{-webkit-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__text-label{font-family:var(--mdc-chip-label-text-font, var(--mat-app-label-large-font));line-height:var(--mdc-chip-label-text-line-height, var(--mat-app-label-large-line-height));font-size:var(--mdc-chip-label-text-size, var(--mat-app-label-large-size));font-weight:var(--mdc-chip-label-text-weight, var(--mat-app-label-large-weight));letter-spacing:var(--mdc-chip-label-text-tracking, var(--mat-app-label-large-tracking))}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mdc-chip-label-text-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mdc-chip-selected-label-text-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label{color:var(--mdc-chip-disabled-label-text-color)}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mat-mdc-standard-chip .mdc-evolution-chip__graphic{width:var(--mdc-chip-with-avatar-avatar-size);height:var(--mdc-chip-with-avatar-avatar-size);font-size:var(--mdc-chip-with-avatar-avatar-size)}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%;height:20px;width:20px}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark{color:var(--mdc-chip-with-icon-selected-icon-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark{color:var(--mdc-chip-with-icon-disabled-icon-color, var(--mat-app-on-surface))}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%, -50%);opacity:1}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}.cdk-high-contrast-active .mdc-evolution-chip__checkmark-path{stroke:CanvasText !important}.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing{height:18px;width:18px;font-size:18px}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove{opacity:calc(var(--mat-chip-trailing-action-opacity)*var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity))}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus{opacity:calc(var(--mat-chip-trailing-action-focus-opacity)*var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity))}.mat-mdc-standard-chip{border-radius:var(--mdc-chip-container-shape-radius);height:var(--mdc-chip-container-height)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled){background-color:var(--mdc-chip-elevated-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{background-color:var(--mdc-chip-elevated-disabled-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled){background-color:var(--mdc-chip-elevated-selected-container-color, var(--mat-app-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled{background-color:var(--mdc-chip-flat-disabled-selected-container-color)}.cdk-high-contrast-active .mat-mdc-standard-chip{outline:solid 1px}.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary{border-radius:var(--mdc-chip-with-avatar-avatar-shape-radius);width:var(--mdc-chip-with-icon-icon-size);height:var(--mdc-chip-with-icon-icon-size);font-size:var(--mdc-chip-with-icon-icon-size)}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary{color:var(--mdc-chip-with-icon-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary{color:var(--mdc-chip-with-icon-disabled-icon-color, var(--mat-app-on-surface))}.mat-mdc-chip-highlighted{--mdc-chip-with-icon-icon-color:var(--mdc-chip-with-icon-selected-icon-color, var(--mat-app-on-secondary-container));--mdc-chip-elevated-container-color:var(--mdc-chip-elevated-selected-container-color, var(--mat-app-secondary-container));--mdc-chip-label-text-color:var(--mdc-chip-selected-label-text-color, var(--mat-app-on-secondary-container));--mdc-chip-outline-width:var(--mdc-chip-flat-selected-outline-width)}.mat-mdc-chip-focus-overlay{background:var(--mdc-chip-focus-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-focus-state-layer-color, var(--mat-app-on-secondary-container))}.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-hover-state-layer-color, var(--mat-app-on-surface-variant));opacity:var(--mdc-chip-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover,.mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-hover-state-layer-color, var(--mat-app-on-secondary-container));opacity:var(--mdc-chip-selected-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-focus-state-layer-color, var(--mat-app-on-surface-variant));opacity:var(--mdc-chip-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mdc-chip-selected-focus-state-layer-color, var(--mat-app-on-secondary-container));opacity:var(--mdc-chip-selected-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar{opacity:var(--mdc-chip-with-avatar-disabled-avatar-opacity)}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{opacity:var(--mdc-chip-with-trailing-icon-disabled-trailing-icon-opacity)}.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{opacity:var(--mdc-chip-with-icon-disabled-icon-opacity)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{opacity:var(--mat-chip-disabled-container-opacity)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-trailing-icon-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-app-on-surface))}.mat-mdc-chip-remove{opacity:var(--mat-chip-trailing-action-opacity)}.mat-mdc-chip-remove:focus{opacity:var(--mat-chip-trailing-action-focus-opacity)}.mat-mdc-chip-remove::after{background:var(--mat-chip-trailing-action-state-layer-color, var(--mat-app-on-surface-variant))}.mat-mdc-chip-remove:hover::after{opacity:var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-mdc-chip-remove:focus::after{opacity:var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mat-mdc-chip-selected .mat-mdc-chip-remove::after,.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after{background:var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-app-on-secondary-container))}.mat-mdc-standard-chip{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-standard-chip .mdc-evolution-chip__cell--primary,.mat-mdc-standard-chip .mdc-evolution-chip__action--primary,.mat-mdc-standard-chip .mat-mdc-chip-action-label{overflow:visible}.mat-mdc-standard-chip .mat-mdc-chip-graphic,.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon{box-sizing:content-box}.mat-mdc-standard-chip._mat-animation-noopable,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path{transition-duration:1ms;animation-duration:1ms}.mat-mdc-chip-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;opacity:0;border-radius:inherit;transition:opacity 150ms linear}._mat-animation-noopable .mat-mdc-chip-focus-overlay{transition:none}.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay{display:none}.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-chip-avatar{text-align:center;line-height:1;color:var(--mdc-chip-with-icon-icon-color, currentColor)}.mat-mdc-chip{position:relative;z-index:0}.mat-mdc-chip-action-label{text-align:left;z-index:1}[dir=rtl] .mat-mdc-chip-action-label{text-align:right}.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label{position:relative}.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.mat-mdc-chip-action-label .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-chip-remove::before{margin:calc(var(--mat-mdc-focus-indicator-border-width, 3px)*-1);left:8px;right:8px}.mat-mdc-chip-remove::after{content:"";display:block;opacity:0;position:absolute;top:-2px;bottom:-2px;left:6px;right:6px;border-radius:50%}.mat-mdc-chip-remove .mat-icon{width:18px;height:18px;font-size:18px;box-sizing:content-box}.mat-chip-edit-input{cursor:text;display:inline-block;color:inherit;outline:0}.cdk-high-contrast-active .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple){outline-width:3px}.mat-mdc-chip-action:focus .mat-mdc-focus-indicator::before{content:""}',
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })();
var pa = (() => {
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
  ba = (() => {
    let t = class t extends me {
      constructor(e, n, o, a, s, d, c, m) {
        super(e, n, o, a, s, d, c),
          (this.basicChipAttrName = "mat-basic-chip-row"),
          (this._editStartPending = !1),
          (this.editable = !1),
          (this.edited = new G()),
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
          Mt(
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
        h(S),
        h(ue),
        h(R),
        h(mt, 8),
        h(Oi, 8),
        xe("tabindex"),
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
          if ((n & 1 && X(a, pa, 5), n & 2)) {
            let s;
            L((s = j())) && (o.contentEditInput = s.first);
          }
        },
        viewQuery: function (n, o) {
          if ((n & 1 && It(pa, 5), n & 2)) {
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
            rt("focus", function (s) {
              return o._handleFocus(s);
            })("dblclick", function (s) {
              return o._handleDoubleclick(s);
            }),
            n & 2 &&
              (ni("id", o.id),
              W("tabindex", o.disabled ? null : -1)("aria-label", null)(
                "aria-description",
                null,
              )("role", o.role),
              H("mat-mdc-chip-with-avatar", o.leadingIcon)(
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
          ct([
            { provide: me, useExisting: t },
            { provide: va, useExisting: t },
          ]),
          pt,
          V,
        ],
        ngContentSelectors: Pm,
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
            (q(Nm),
            ft(0, Lm, 1, 0, "span", 0),
            l(1, "span", 1),
            ft(2, jm, 2, 0, "span", 2),
            l(3, "span", 3),
            ft(4, Bm, 2, 1)(5, Um, 1, 0),
            I(6, "span", 4),
            u()(),
            ft(7, Hm, 2, 0, "span", 5),
            l(8, "span", 6),
            p(9),
            u()),
            n & 2 &&
              (gt(o._isEditing ? -1 : 0),
              Y(),
              kt("disabled", o.disabled),
              W("aria-label", o.ariaLabel)(
                "aria-describedby",
                o._ariaDescriptionId,
              ),
              Y(),
              gt(o.leadingIcon ? 2 : -1),
              Y(2),
              gt(o._isEditing ? 4 : 5),
              Y(3),
              gt(o._hasTrailingIcon() ? 7 : -1),
              Y(),
              kt("id", o._ariaDescriptionId),
              Y(),
              ri(o.ariaDescription));
        },
        dependencies: [fa, pa],
        styles: [Om],
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
          (this._destroyed = new A()),
          (this._defaultRole = "presentation"),
          (this._disabled = !1),
          (this.tabIndex = 0),
          (this._explicitRole = null),
          (this._chipActions = new Xt());
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
          _t(null),
          lt(() => ge(...this._chips.map(e))),
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
        this._chips.changes.pipe(_t(this._chips)).subscribe((e) => {
          let n = [];
          e.forEach((o) => o._getActions().forEach((a) => n.push(a))),
            this._chipActions.reset(n),
            this._chipActions.notifyOnChanges();
        }),
          (this._keyManager = new On(this._chipActions)
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
        this._chips.changes.pipe(_t(null), z(this._destroyed)).subscribe(() => {
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
      return new (n || t)(h(k), h(J), h(zt, 8));
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [["mat-chip-set"]],
        contentQueries: function (n, o, a) {
          if ((n & 1 && X(a, me, 5), n & 2)) {
            let s;
            L((s = j())) && (o._chips = s);
          }
        },
        hostAttrs: [1, "mat-mdc-chip-set", "mdc-evolution-chip-set"],
        hostVars: 1,
        hostBindings: function (n, o) {
          n & 1 &&
            rt("keydown", function (s) {
              return o._handleKeydown(s);
            }),
            n & 2 && W("role", o.role);
        },
        inputs: {
          disabled: [2, "disabled", "disabled", K],
          role: "role",
          tabIndex: [2, "tabIndex", "tabIndex", (e) => (e == null ? 0 : oi(e))],
        },
        standalone: !0,
        features: [ut, V],
        ngContentSelectors: yd,
        decls: 2,
        vars: 0,
        consts: [["role", "presentation", 1, "mdc-evolution-chip-set__chips"]],
        template: function (n, o) {
          n & 1 && (q(), l(0, "div", 0), D(1), u());
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
var ga = class {
    constructor(t, r) {
      (this.source = t), (this.value = r);
    }
  },
  wd = (() => {
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
          this.ngControl?.control?.hasValidator(Yn.required) ??
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
          (this.change = new G()),
          (this.valueChange = new G()),
          (this._chips = void 0),
          (this.stateChanges = new A()),
          this.ngControl && (this.ngControl.valueAccessor = this),
          (this._errorStateTracker = new jn(d, c, s, a, this.stateChanges));
      }
      ngAfterContentInit() {
        this.chipBlurChanges.pipe(z(this._destroyed)).subscribe(() => {
          this._blur(), this.stateChanges.next();
        }),
          ge(this.chipFocusChanges, this._chips.changes)
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
          je(e, "shiftKey") &&
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
          this.change.emit(new ga(this, e)),
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
        h(zt, 8),
        h(ha, 8),
        h(ma, 8),
        h(Ko),
        h(tr, 10),
      );
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [["mat-chip-grid"]],
        contentQueries: function (n, o, a) {
          if ((n & 1 && X(a, ba, 5), n & 2)) {
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
            rt("focus", function () {
              return o.focus();
            })("blur", function () {
              return o._blur();
            }),
            n & 2 &&
              (W("role", o.role)(
                "tabindex",
                o.disabled || (o._chips && o._chips.length === 0)
                  ? -1
                  : o.tabIndex,
              )("aria-disabled", o.disabled.toString())(
                "aria-invalid",
                o.errorState,
              ),
              H("mat-mdc-chip-list-disabled", o.disabled)(
                "mat-mdc-chip-list-invalid",
                o.errorState,
              )("mat-mdc-chip-list-required", o.required));
        },
        inputs: {
          disabled: [2, "disabled", "disabled", K],
          placeholder: "placeholder",
          required: [2, "required", "required", K],
          value: "value",
          errorStateMatcher: "errorStateMatcher",
        },
        outputs: { change: "change", valueChange: "valueChange" },
        standalone: !0,
        features: [ct([{ provide: fd, useExisting: t }]), ut, pt, V],
        ngContentSelectors: yd,
        decls: 2,
        vars: 0,
        consts: [["role", "presentation", 1, "mdc-evolution-chip-set__chips"]],
        template: function (n, o) {
          n & 1 && (q(), l(0, "div", 0), D(1), u());
        },
        styles: [$m],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })();
var sr = class i {
  static ɵfac = function (r) {
    return new (r || i)();
  };
  static ɵcmp = C({
    type: i,
    selectors: [["app-introduction"]],
    decls: 175,
    vars: 1,
    consts: [
      [2, "max-width", "70rem"],
      [2, "justify-content", "space-around", "margin-bottom", "3rem"],
      [
        2,
        "width",
        "25rem",
        "height",
        "100%",
        "display",
        "flex",
        "flex-direction",
        "column",
      ],
      [2, "margin", "2rem", "margin-left", "1rem"],
      [2, "font-weight", "400"],
      [
        2,
        "color",
        "rosybrown",
        "font-style",
        "oblique",
        "margin",
        "2rem",
        "margin-top",
        "1rem",
      ],
      [3, "inset"],
      [
        2,
        "display",
        "flex",
        "flex-direction",
        "column",
        "justify-content",
        "space-between",
        "height",
        "100%",
      ],
      [
        2,
        "width",
        "100%",
        "margin-right",
        "2rem",
        "text-align",
        "right",
        "align-self",
        "flex-end",
      ],
      [2, "margin-bottom", "5px"],
      [2, "color", "palevioletred", "font-weight", "700", "align-self", "end"],
      [
        2,
        "text-align",
        "center",
        "font-weight",
        "lighter",
        "font-size",
        "medium",
      ],
      [2, "font-style", "oblique", "font-weight", "bold"],
      [2, "font-weight", "bold", "font-style", "oblique"],
      [
        2,
        "width",
        "25rem",
        "height",
        "auto",
        "display",
        "flex",
        "justify-content",
        "center",
        "align-items",
        "end",
        "position",
        "relative",
      ],
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
      ["width", "100%", "src", "images/Hue-ao-dai-old-sticker-style.png"],
      [2, "margin", "0.5rem", "font-size", "small"],
      [2, "font-weight", "bold"],
      [2, "background-color", "white", "margin-bottom", "2rem"],
      [2, "margin-top", "0"],
      [2, "display", "flex", "justify-content", "space-between"],
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
        p(7, "Xuyen Nguyen."),
        u(),
        I(8, "mat-divider", 6),
        u(),
        l(9, "div", 7)(10, "div", 8)(11, "mat-chip", 9),
        p(12, "Full-time software engineer \u{1F469}\u200D\u{1F4BB}"),
        u(),
        l(13, "mat-chip", 9),
        p(14, "Part-time game developer \u{1F3AE}"),
        u(),
        l(15, "mat-chip", 9),
        p(16, "Occasional creative artist \u{1F3A8}"),
        u(),
        l(17, "mat-chip", 9),
        p(18, "Recreational language learner \u{1F4DA}"),
        u(),
        l(19, "mat-chip", 9),
        p(20, "Aspirational machine learning researcher \u{1F916}"),
        u(),
        l(21, "mat-chip", 9),
        p(22, "Absolutely "),
        l(23, "span", 10),
        p(24, "NOT"),
        u(),
        p(25, " a pink lover \u{1F624}"),
        u()(),
        l(26, "div", 11)(27, "p"),
        p(28, ' "'),
        l(29, "span", 12),
        p(30, "Motivation"),
        u(),
        p(31, " is essentially "),
        l(32, "span", 13),
        p(33, "momentum"),
        u(),
        p(34, ". Start taking action "),
        l(35, "span"),
        p(36, "now"),
        u(),
        p(37, ', and motivation will follow, driving you forward." '),
        u()()()(),
        l(38, "div", 14)(39, "div", 15)(40, "h1"),
        p(41, "Hue, Vietnam"),
        u(),
        l(42, "h3"),
        p(43, "July, 2023"),
        u()(),
        I(44, "img", 16),
        u()(),
        l(45, "mat-card-content")(46, "div", 17)(47, "span", 18),
        p(48, "ABOUT ME"),
        u()(),
        l(49, "mat-card", 19)(50, "mat-card-content")(51, "p", 20),
        p(
          52,
          "I am a self-learner at heart. I have taught myself various new skills from speaking Japanese to building websites to knitting. As much as I value formal education, I believe that the ability to teach myself is a powerful asset in its own right.",
        ),
        u(),
        l(53, "p"),
        p(
          54,
          "This belief guided me throughout my years studying computer science, inspiring me to build many educational tools such as ASL Alphabet Learning, Chinese Typing Practice, Class Schedule Builder, etc. One of my proudest moments was when my Capstone team won 3rd place for the most outstanding project with our Signable app\u2014an application designed to teach the ASL alphabet. After this achievement, I felt very hopeful about the potential of AI and Machine Learning (AI/ML) in revolutionize learning and skills acquistion. Therefore, I plan to go back to school for a Master's Degree in AI/ML to deepen my expertise in these fields.",
        ),
        u(),
        l(55, "p"),
        p(
          56,
          "Outside of work and study, I enjoy drawing and 3D modeling. I also love outdoor activities like hiking, rollerblading, and swimming. While I\u2019m not a heavy gamer, I thoroughly enjoy playing games with friends. Some of my favorite titles are The Sims 4, Monster Hunter Rise, Animal Crossing: New Horizons, and Don't Starve Together.",
        ),
        u()()(),
        l(57, "div", 17)(58, "span", 18),
        p(59, "EDUCATION"),
        u()(),
        l(60, "mat-card", 19)(61, "mat-card-content", 21)(62, "div")(63, "div"),
        p(64, "University of Utah"),
        u(),
        l(65, "div"),
        p(66, "Degree: Bachelor of Science in Computer Science"),
        u()(),
        l(67, "div")(68, "div"),
        p(69, "Salt Lake City, Utah"),
        u(),
        l(70, "div"),
        p(71, "Graduated: May 2024"),
        u()()()(),
        l(72, "div", 17)(73, "span", 18),
        p(74, "TECHNICAL SKILLS"),
        u()(),
        l(75, "mat-card", 19)(76, "mat-card-content")(77, "div", 22)(
          78,
          "button",
          23,
        ),
        p(79, "Web Development"),
        u(),
        l(80, "button", 23),
        p(81, "Machine Learning"),
        u(),
        l(82, "button", 23),
        p(83, "Artifitial Intelligence"),
        u(),
        l(84, "button", 23),
        p(85, "Computer Graphics"),
        u()(),
        l(86, "mat-chip-set", 22)(87, "mat-chip"),
        p(88, "Angular"),
        u(),
        l(89, "mat-chip"),
        p(90, "React"),
        u(),
        l(91, "mat-chip"),
        p(92, "Next"),
        u(),
        l(93, "mat-chip"),
        p(94, "Django"),
        u(),
        l(95, "mat-chip"),
        p(96, "ASP.NET"),
        u(),
        l(97, "mat-chip"),
        p(98, "Spring Boot"),
        u(),
        l(99, "mat-chip"),
        p(100, "REST API"),
        u(),
        l(101, "mat-chip"),
        p(102, "JavaScript"),
        u(),
        l(103, "mat-chip"),
        p(104, "TypeScript"),
        u(),
        l(105, "mat-chip"),
        p(106, "HTML"),
        u(),
        l(107, "mat-chip"),
        p(108, "CSS"),
        u(),
        l(109, "mat-chip"),
        p(110, "Python"),
        u(),
        l(111, "mat-chip"),
        p(112, "C#"),
        u(),
        l(113, "mat-chip"),
        p(114, "C/C++"),
        u(),
        l(115, "mat-chip"),
        p(116, "Java"),
        u(),
        l(117, "mat-chip"),
        p(118, "SQL"),
        u(),
        l(119, "mat-chip"),
        p(120, "Git"),
        u(),
        l(121, "mat-chip"),
        p(122, "TensorFlow"),
        u()(),
        l(123, "mat-chip-set", 22)(124, "mat-chip"),
        p(125, "Unity"),
        u(),
        l(126, "mat-chip"),
        p(127, "Unreal Engine"),
        u(),
        l(128, "mat-chip"),
        p(129, "Maya"),
        u(),
        l(130, "mat-chip"),
        p(131, "Blender"),
        u(),
        l(132, "mat-chip"),
        p(133, "Photoshop"),
        u()()()(),
        l(134, "div", 17)(135, "span", 18),
        p(136, "EXPERIENCE"),
        u()(),
        l(137, "mat-card", 19)(138, "mat-card-content")(139, "div", 24)(
          140,
          "div",
          21,
        )(141, "div")(142, "div", 18),
        p(143, "Software Engineer"),
        u(),
        l(144, "div"),
        p(145, "BlueSkyTech"),
        u()(),
        l(146, "div")(147, "div"),
        p(148, "March 2024 - present"),
        u(),
        l(149, "div"),
        p(150, "(Remote)"),
        u()()(),
        l(151, "ul")(152, "li"),
        p(
          153,
          "Incorporate frontend stacks including NextJS, Redux Toolkit, TypeScript, and Material UI to build responsive websites that are compatible with multiple devices and web browsers.",
        ),
        u(),
        l(154, "li"),
        p(
          155,
          " Implement API calls for streamlined frontend-backend communication ",
        ),
        u()()(),
        l(156, "div")(157, "div", 21)(158, "div")(159, "div", 18),
        p(160, "Full-Stack Developer"),
        u(),
        l(161, "div"),
        p(162, "University of Utah - Umail"),
        u()(),
        l(163, "div")(164, "div"),
        p(165, "November 2021 - June 2024"),
        u(),
        l(166, "div"),
        p(167, "Salt Lake City, Utah"),
        u()()(),
        l(168, "ul")(169, "li"),
        p(
          170,
          "Automated 100+ tasks with PowerShell scripts that interact with database systems such as SQL Server",
        ),
        u(),
        l(171, "li"),
        p(
          172,
          " Worked in a team and individually to troubleshoot problems in migrating 100000+ user mailboxes and groups within Microsoft Exchange servers. ",
        ),
        u(),
        l(173, "li"),
        p(
          174,
          "Maintained and updated the internal website using tools like Angular, .Net, Bootstrap, and Graph API.",
        ),
        u()()()()()()()),
        r & 2 && (Y(8), kt("inset", !0));
    },
    dependencies: [Zn, ze, Bn, Un, zn, Gn, me, Ui],
    styles: [
      "mat-card[_ngcontent-%COMP%]{height:100%;width:100%;margin:auto}.skills[_ngcontent-%COMP%]{margin-bottom:1rem}",
    ],
  });
};
var qm = [
    { path: "introduction", component: sr },
    { path: "web-app", component: Wn },
    { path: "artwork", component: qn },
    { path: "others", component: Qn },
    { path: "", redirectTo: "introduction", pathMatch: "full" },
    { path: "**", redirectTo: "introduction" },
  ],
  cr = class i {
    static ɵfac = function (r) {
      return new (r || i)();
    };
    static ɵmod = F({ type: i });
    static ɵinj = T({ imports: [ko.forRoot(qm), ko] });
  };
var Qm = 20,
  _a = (() => {
    let t = class t {
      constructor(e, n, o) {
        (this._ngZone = e),
          (this._platform = n),
          (this._scrolled = new A()),
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
      scrolled(e = Qm) {
        return this._platform.isBrowser
          ? new We((n) => {
              this._globalSubscription || this._addGlobalListener();
              let o =
                e > 0
                  ? this._scrolled.pipe(vr(e)).subscribe(n)
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
        return this.scrolled(n).pipe(et((a) => !a || o.indexOf(a) > -1));
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
        let o = Vt(n),
          a = e.getElementRef().nativeElement;
        do if (o == a) return !0;
        while ((o = o.parentElement));
        return !1;
      }
      _addGlobalListener() {
        this._globalSubscription = this._ngZone.runOutsideAngular(() => {
          let e = this._getWindow();
          return Ze(e.document, "scroll").subscribe(() =>
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
      return new (n || t)(b(S), b(Q), b(R, 8));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })(),
  dr = (() => {
    let t = class t {
      constructor(e, n, o, a) {
        (this.elementRef = e),
          (this.scrollDispatcher = n),
          (this.ngZone = o),
          (this.dir = a),
          (this._destroyed = new A()),
          (this._elementScrolled = new We((s) =>
            this.ngZone.runOutsideAngular(() =>
              Ze(this.elementRef.nativeElement, "scroll")
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
          o && Le() != St.NORMAL
            ? (e.left != null &&
                (e.right = n.scrollWidth - n.clientWidth - e.left),
              Le() == St.INVERTED
                ? (e.left = e.right)
                : Le() == St.NEGATED && (e.left = e.right ? -e.right : e.right))
            : e.right != null &&
              (e.left = n.scrollWidth - n.clientWidth - e.right),
          this._applyScrollToOptions(e);
      }
      _applyScrollToOptions(e) {
        let n = this.elementRef.nativeElement;
        sc()
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
          s && Le() == St.INVERTED
            ? e == n
              ? a.scrollWidth - a.clientWidth - a.scrollLeft
              : a.scrollLeft
            : s && Le() == St.NEGATED
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
      return new (n || t)(h(k), h(_a), h(S), h(zt, 8));
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
  Zm = 20,
  xd = (() => {
    let t = class t {
      constructor(e, n, o) {
        (this._platform = e),
          (this._change = new A()),
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
      change(e = Zm) {
        return e > 0 ? this._change.pipe(vr(e)) : this._change;
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
      return new (n || t)(b(Q), b(S), b(R, 8));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let i = t;
    return i;
  })();
var Cd = ["*"],
  Xm = ["content"],
  Jm = [[["mat-drawer"]], [["mat-drawer-content"]], "*"],
  tp = ["mat-drawer", "mat-drawer-content", "*"];
function ep(i, t) {
  if (i & 1) {
    let r = Mr();
    l(0, "div", 1),
      rt("click", function () {
        xr(r);
        let n = ee();
        return Cr(n._onBackdropClicked());
      }),
      u();
  }
  if (i & 2) {
    let r = ee();
    H("mat-drawer-shown", r._isShowingBackdrop());
  }
}
function ip(i, t) {
  i & 1 && (l(0, "mat-drawer-content"), D(1, 2), u());
}
var np = {
  transformDrawer: rs("transform", [
    Pr("open, open-instant", Nr({ transform: "none", visibility: "visible" })),
    Pr("void", Nr({ "box-shadow": "none", visibility: "hidden" })),
    Lr("void => open-instant", Or("0ms")),
    Lr(
      "void <=> open, open-instant => void",
      Or("400ms cubic-bezier(0.25, 0.8, 0.25, 1)"),
    ),
  ]),
};
var rp = new x("MAT_DRAWER_DEFAULT_AUTOSIZE", {
    providedIn: "root",
    factory: op,
  }),
  Id = new x("MAT_DRAWER_CONTAINER");
function op() {
  return !1;
}
var pe = (() => {
    let t = class t extends dr {
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
      return new (n || t)(h(J), h(ye(() => $i)), h(k), h(_a), h(S));
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
        features: [ct([{ provide: dr, useExisting: t }]), pt, V],
        ngContentSelectors: Cd,
        decls: 1,
        vars: 0,
        template: function (n, o) {
          n & 1 && (q(), D(0));
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
          (this._animationStarted = new A()),
          (this._animationEnd = new A()),
          (this._animationState = "void"),
          (this.openedChange = new G(!0)),
          (this._openedStream = this.openedChange.pipe(
            et((f) => f),
            M(() => {}),
          )),
          (this.openedStart = this._animationStarted.pipe(
            et(
              (f) =>
                f.fromState !== f.toState && f.toState.indexOf("open") === 0,
            ),
            Ke(void 0),
          )),
          (this._closedStream = this.openedChange.pipe(
            et((f) => !f),
            M(() => {}),
          )),
          (this.closedStart = this._animationStarted.pipe(
            et((f) => f.fromState !== f.toState && f.toState === "void"),
            Ke(void 0),
          )),
          (this._destroyed = new A()),
          (this.onPositionChanged = new G()),
          (this._modeChanged = new A()),
          (this._injector = v(Ct)),
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
            Ze(this._elementRef.nativeElement, "keydown")
              .pipe(
                et((f) => f.keyCode === 27 && !this.disableClose && !je(f)),
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
              Ye(
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
            Mt(
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
              .pipe(xt(1))
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
        h(vc),
        h(ue),
        h(Q),
        h(S),
        h(zo),
        h(R, 8),
        h(Id, 8),
      );
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [["mat-drawer"]],
        viewQuery: function (n, o) {
          if ((n & 1 && It(Xm, 5), n & 2)) {
            let a;
            L((a = j())) && (o._content = a.first);
          }
        },
        hostAttrs: ["tabIndex", "-1", 1, "mat-drawer"],
        hostVars: 12,
        hostBindings: function (n, o) {
          n & 1 &&
            Va("@transform.start", function (s) {
              return o._animationStarted.next(s);
            })("@transform.done", function (s) {
              return o._animationEnd.next(s);
            }),
            n & 2 &&
              (ja("@transform", o._animationState),
              W("align", null),
              H("mat-drawer-end", o.position === "end")(
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
        ngContentSelectors: Cd,
        decls: 3,
        vars: 0,
        consts: [
          ["content", ""],
          ["cdkScrollable", "", 1, "mat-drawer-inner-container"],
        ],
        template: function (n, o) {
          n & 1 && (q(), l(0, "div", 1, 0), D(2), u());
        },
        dependencies: [dr],
        encapsulation: 2,
        data: { animation: [np.transformDrawer] },
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
          (this._drawers = new Xt()),
          (this.backdropClick = new G()),
          (this._destroyed = new A()),
          (this._doCheckSubject = new A()),
          (this._contentMargins = { left: null, right: null }),
          (this._contentMarginChanges = new A()),
          (this._injector = v(Ct)),
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
          .pipe(_t(this._allDrawers), z(this._destroyed))
          .subscribe((e) => {
            this._drawers.reset(
              e.filter((n) => !n._container || n._container === this),
            ),
              this._drawers.notifyOnChanges();
          }),
          this._drawers.changes.pipe(_t(null)).subscribe(() => {
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
              .pipe(_e(10), z(this._destroyed))
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
            et((n) => n.fromState !== n.toState),
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
            Mt(
              () => {
                this._validateDrawers();
              },
              { injector: this._injector, phase: La.Read },
            );
          });
      }
      _watchDrawerMode(e) {
        e &&
          e._modeChanged
            .pipe(z(ge(this._drawers.changes, this._destroyed)))
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
      return new (n || t)(h(zt, 8), h(k), h(S), h(J), h(xd), h(rp), h(mt, 8));
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [["mat-drawer-container"]],
        contentQueries: function (n, o, a) {
          if ((n & 1 && (X(a, pe, 5), X(a, Hi, 5)), n & 2)) {
            let s;
            L((s = j())) && (o._content = s.first),
              L((s = j())) && (o._allDrawers = s);
          }
        },
        viewQuery: function (n, o) {
          if ((n & 1 && It(pe, 5), n & 2)) {
            let a;
            L((a = j())) && (o._userContent = a.first);
          }
        },
        hostAttrs: [1, "mat-drawer-container"],
        hostVars: 2,
        hostBindings: function (n, o) {
          n & 2 &&
            H("mat-drawer-container-explicit-backdrop", o._backdropOverride);
        },
        inputs: { autosize: "autosize", hasBackdrop: "hasBackdrop" },
        outputs: { backdropClick: "backdropClick" },
        exportAs: ["matDrawerContainer"],
        standalone: !0,
        features: [ct([{ provide: Id, useExisting: t }]), V],
        ngContentSelectors: tp,
        decls: 4,
        vars: 2,
        consts: [
          [1, "mat-drawer-backdrop", 3, "mat-drawer-shown"],
          [1, "mat-drawer-backdrop", 3, "click"],
        ],
        template: function (n, o) {
          n & 1 &&
            (q(Jm),
            ft(0, ep, 1, 2, "div", 0),
            D(1),
            D(2, 1),
            ft(3, ip, 2, 0, "mat-drawer-content")),
            n & 2 &&
              (gt(o.hasBackdrop ? 0 : -1), Y(3), gt(o._content ? -1 : 3));
        },
        dependencies: [pe],
        styles: [
          '.mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-app-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-app-background));box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color)}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-app-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow);background-color:var(--mat-sidenav-container-background-color, var(--mat-app-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));width:var(--mat-sidenav-container-width);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer[style*="visibility: hidden"]{display:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}',
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let i = t;
    return i;
  })();
var sp = ["*", [["mat-toolbar-row"]]],
  cp = ["*", "mat-toolbar-row"],
  dp = (() => {
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
  Ed = (() => {
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
      return new (n || t)(h(k), h(Q), h(R));
    }),
      (t.ɵcmp = C({
        type: t,
        selectors: [["mat-toolbar"]],
        contentQueries: function (n, o, a) {
          if ((n & 1 && X(a, dp, 5), n & 2)) {
            let s;
            L((s = j())) && (o._toolbarRows = s);
          }
        },
        hostAttrs: [1, "mat-toolbar"],
        hostVars: 6,
        hostBindings: function (n, o) {
          n & 2 &&
            (Gt(o.color ? "mat-" + o.color : ""),
            H("mat-toolbar-multiple-rows", o._toolbarRows.length > 0)(
              "mat-toolbar-single-row",
              o._toolbarRows.length === 0,
            ));
        },
        inputs: { color: "color" },
        exportAs: ["matToolbar"],
        standalone: !0,
        features: [V],
        ngContentSelectors: cp,
        decls: 2,
        vars: 0,
        template: function (n, o) {
          n & 1 && (q(sp), D(0), D(1, 1));
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
var Dd = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = F({ type: t })),
    (t.ɵinj = T({ imports: [Z, Z] }));
  let i = t;
  return i;
})();
var lr = class i {
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
      r & 1 && (Ir(), l(0, "svg", 0)(1, "g", 1), I(2, "path", 2), u()());
    },
  });
};
var ur = class i {
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
    dependencies: [Sn, ic, zc, Zn, Ed, lr],
    styles: [
      ".top-nav[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;height:3.5rem;position:sticky!important}.icon-button[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:row}",
    ],
  });
};
var hr = class i {
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
    dependencies: [Io, $i, Hi, pe, ur],
    styles: [
      ".main-content[_ngcontent-%COMP%]{padding:2rem;height:fit-content;overflow:auto}.drawer-container[_ngcontent-%COMP%]{background-color:#fff;width:100%}.side-nav-drawer[_ngcontent-%COMP%]{width:20vw;max-width:15rem;height:100%}main[_ngcontent-%COMP%]{display:flex;flex-direction:row;overflow:auto;height:calc(100vh - 3.5rem)}",
    ],
  });
};
var mp = "@",
  pp = (() => {
    let t = class t {
      constructor(e, n, o, a, s) {
        (this.doc = e),
          (this.delegate = n),
          (this.zone = o),
          (this.animationType = a),
          (this.moduleImpl = s),
          (this._rendererFactoryPromise = null),
          (this.scheduler = v(Oa, { optional: !0 })),
          (this.loadingSchedulerFn = v(fp, { optional: !0 }));
      }
      ngOnDestroy() {
        this._engine?.flush();
      }
      loadImpl() {
        let e = () =>
            this.moduleImpl ?? import("./chunk-EQKIDFGA.js").then((o) => o),
          n;
        return (
          this.loadingSchedulerFn
            ? (n = this.loadingSchedulerFn(e))
            : (n = e()),
          n
            .catch((o) => {
              throw new $(5300, !1);
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
        let a = new ya(o);
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
      te();
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac }));
    let i = t;
    return i;
  })(),
  ya = class {
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
      return this.replay !== null && t.startsWith(mp);
    }
  },
  fp = new x("");
function Sd(i = "animations") {
  return (
    Na("NgAsyncAnimations"),
    Zi([
      {
        provide: Yi,
        useFactory: (t, r, e) => new pp(t, r, e, i),
        deps: [R, cn, S],
      },
      {
        provide: mt,
        useValue: i === "noop" ? "NoopAnimations" : "BrowserAnimations",
      },
    ])
  );
}
var Ad = (() => {
  let t = class t {};
  (t.ɵfac = function (n) {
    return new (n || t)();
  }),
    (t.ɵmod = F({ type: t })),
    (t.ɵinj = T({ imports: [Z, Z] }));
  let i = t;
  return i;
})();
var mr = class i {
  static ɵfac = function (r) {
    return new (r || i)();
  };
  static ɵmod = F({ type: i, bootstrap: [hr] });
  static ɵinj = T({
    providers: [Sd()],
    imports: [hs, cr, Ad, Bc, Dd, Ac, Tc, Oc, $i, Hi, pe, me, Ui, wd, ba],
  });
};
us()
  .bootstrapModule(mr, { ngZoneEventCoalescing: !0 })
  .catch((i) => console.error(i));
