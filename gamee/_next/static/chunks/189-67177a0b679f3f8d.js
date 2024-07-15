(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [189], {
        26016: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = n(3827),
                r = n(64090);
            t.default = function(e) {
                let {
                    html: t,
                    height: n = null,
                    width: a = null,
                    children: o,
                    dataNtpc: s = ""
                } = e;
                return (0, r.useEffect)(() => {
                    s && performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-".concat(s)
                        }
                    })
                }, [s]), (0, i.jsxs)(i.Fragment, {
                    children: [o, t ? (0, i.jsx)("div", {
                        style: {
                            height: null != n ? "".concat(n, "px") : "auto",
                            width: null != a ? "".concat(a, "px") : "auto"
                        },
                        "data-ntpc": s,
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    }) : null]
                })
            }
        },
        91845: function(e, t, n) {
            "use strict";
            var i;
            let r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendGAEvent = t.GoogleAnalytics = void 0;
            let a = n(3827),
                o = n(64090),
                s = (i = n(54983)) && i.__esModule ? i : {
                    default: i
                };
            t.GoogleAnalytics = function(e) {
                let {
                    gaId: t,
                    dataLayerName: n = "dataLayer"
                } = e;
                return void 0 === r && (r = n), (0, o.useEffect)(() => {
                    performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-ga"
                        }
                    })
                }, []), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(s.default, {
                        id: "_next-ga-init",
                        dangerouslySetInnerHTML: {
                            __html: "\n          window['".concat(n, "'] = window['").concat(n, "'] || [];\n          function gtag(){window['").concat(n, "'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t, "');")
                        }
                    }), (0, a.jsx)(s.default, {
                        id: "_next-ga",
                        src: "https://www.googletagmanager.com/gtag/js?id=".concat(t)
                    })]
                })
            }, t.sendGAEvent = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (void 0 === r) {
                    console.warn("@next/third-parties: GA has not been initialized");
                    return
                }
                window[r] ? window[r].push(...t) : console.warn("@next/third-parties: GA dataLayer ".concat(r, " does not exist"))
            }
        },
        37388: function(e, t, n) {
            "use strict";
            var i;
            let r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendGTMEvent = t.GoogleTagManager = void 0;
            let a = n(3827),
                o = n(64090),
                s = (i = n(54983)) && i.__esModule ? i : {
                    default: i
                };
            t.GoogleTagManager = function(e) {
                let {
                    gtmId: t,
                    dataLayerName: n = "dataLayer",
                    auth: i,
                    preview: c,
                    dataLayer: l
                } = e;
                void 0 === r && (r = n);
                let u = "dataLayer" !== n ? "$l=".concat(n) : "";
                return (0, o.useEffect)(() => {
                    performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-gtm"
                        }
                    })
                }, []), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(s.default, {
                        id: "_next-gtm-init",
                        dangerouslySetInnerHTML: {
                            __html: "\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(l ? "w[l].push(".concat(JSON.stringify(l), ")") : "", "\n      })(window,'").concat(n, "');")
                        }
                    }), (0, a.jsx)(s.default, {
                        id: "_next-gtm",
                        "data-ntpc": "GTM",
                        src: "https://www.googletagmanager.com/gtm.js?id=".concat(t).concat(u).concat(i ? "&gtm_auth=".concat(i) : "").concat(c ? "&gtm_preview=".concat(c, "&gtm_cookies_win=x") : "")
                    })]
                })
            }, t.sendGTMEvent = e => {
                if (void 0 === r) {
                    console.warn("@next/third-parties: GTM has not been initialized");
                    return
                }
                window[r] ? window[r].push(e) : console.warn("@next/third-parties: GTM dataLayer ".concat(r, " does not exist"))
            }
        },
        32614: function(e) {
            "use strict";
            var t = Object.prototype.hasOwnProperty,
                n = "~";

            function i() {}

            function r(e, t, n) {
                this.fn = e, this.context = t, this.once = n || !1
            }

            function a(e, t, i, a, o) {
                if ("function" != typeof i) throw TypeError("The listener must be a function");
                var s = new r(i, a || e, o),
                    c = n ? n + t : t;
                return e._events[c] ? e._events[c].fn ? e._events[c] = [e._events[c], s] : e._events[c].push(s) : (e._events[c] = s, e._eventsCount++), e
            }

            function o(e, t) {
                0 == --e._eventsCount ? e._events = new i : delete e._events[t]
            }

            function s() {
                this._events = new i, this._eventsCount = 0
            }
            Object.create && (i.prototype = Object.create(null), new i().__proto__ || (n = !1)), s.prototype.eventNames = function() {
                var e, i, r = [];
                if (0 === this._eventsCount) return r;
                for (i in e = this._events) t.call(e, i) && r.push(n ? i.slice(1) : i);
                return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r
            }, s.prototype.listeners = function(e) {
                var t = n ? n + e : e,
                    i = this._events[t];
                if (!i) return [];
                if (i.fn) return [i.fn];
                for (var r = 0, a = i.length, o = Array(a); r < a; r++) o[r] = i[r].fn;
                return o
            }, s.prototype.listenerCount = function(e) {
                var t = n ? n + e : e,
                    i = this._events[t];
                return i ? i.fn ? 1 : i.length : 0
            }, s.prototype.emit = function(e, t, i, r, a, o) {
                var s = n ? n + e : e;
                if (!this._events[s]) return !1;
                var c, l, u = this._events[s],
                    d = arguments.length;
                if (u.fn) {
                    switch (u.once && this.removeListener(e, u.fn, void 0, !0), d) {
                        case 1:
                            return u.fn.call(u.context), !0;
                        case 2:
                            return u.fn.call(u.context, t), !0;
                        case 3:
                            return u.fn.call(u.context, t, i), !0;
                        case 4:
                            return u.fn.call(u.context, t, i, r), !0;
                        case 5:
                            return u.fn.call(u.context, t, i, r, a), !0;
                        case 6:
                            return u.fn.call(u.context, t, i, r, a, o), !0
                    }
                    for (l = 1, c = Array(d - 1); l < d; l++) c[l - 1] = arguments[l];
                    u.fn.apply(u.context, c)
                } else {
                    var h, f = u.length;
                    for (l = 0; l < f; l++) switch (u[l].once && this.removeListener(e, u[l].fn, void 0, !0), d) {
                        case 1:
                            u[l].fn.call(u[l].context);
                            break;
                        case 2:
                            u[l].fn.call(u[l].context, t);
                            break;
                        case 3:
                            u[l].fn.call(u[l].context, t, i);
                            break;
                        case 4:
                            u[l].fn.call(u[l].context, t, i, r);
                            break;
                        default:
                            if (!c)
                                for (h = 1, c = Array(d - 1); h < d; h++) c[h - 1] = arguments[h];
                            u[l].fn.apply(u[l].context, c)
                    }
                }
                return !0
            }, s.prototype.on = function(e, t, n) {
                return a(this, e, t, n, !1)
            }, s.prototype.once = function(e, t, n) {
                return a(this, e, t, n, !0)
            }, s.prototype.removeListener = function(e, t, i, r) {
                var a = n ? n + e : e;
                if (!this._events[a]) return this;
                if (!t) return o(this, a), this;
                var s = this._events[a];
                if (s.fn) s.fn !== t || r && !s.once || i && s.context !== i || o(this, a);
                else {
                    for (var c = 0, l = [], u = s.length; c < u; c++)(s[c].fn !== t || r && !s[c].once || i && s[c].context !== i) && l.push(s[c]);
                    l.length ? this._events[a] = 1 === l.length ? l[0] : l : o(this, a)
                }
                return this
            }, s.prototype.removeAllListeners = function(e) {
                var t;
                return e ? (t = n ? n + e : e, this._events[t] && o(this, t)) : (this._events = new i, this._eventsCount = 0), this
            }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = n, s.EventEmitter = s, e.exports = s
        },
        47907: function(e, t, n) {
            "use strict";
            var i = n(15313);
            n.o(i, "usePathname") && n.d(t, {
                usePathname: function() {
                    return i.usePathname
                }
            }), n.o(i, "useServerInsertedHTML") && n.d(t, {
                useServerInsertedHTML: function() {
                    return i.useServerInsertedHTML
                }
            })
        },
        54983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r.a
                }
            });
            var i = n(85935),
                r = n.n(i),
                a = {};
            for (var o in i) "default" !== o && (a[o] = (function(e) {
                return i[e]
            }).bind(0, o));
            n.d(t, a)
        },
        13313: function(e, t) {
            "use strict";
            let n;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    DOMAttributeNames: function() {
                        return i
                    },
                    isEqualNode: function() {
                        return a
                    },
                    default: function() {
                        return o
                    }
                });
            let i = {
                acceptCharset: "accept-charset",
                className: "class",
                htmlFor: "for",
                httpEquiv: "http-equiv",
                noModule: "noModule"
            };

            function r(e) {
                let {
                    type: t,
                    props: n
                } = e, r = document.createElement(t);
                for (let e in n) {
                    if (!n.hasOwnProperty(e) || "children" === e || "dangerouslySetInnerHTML" === e || void 0 === n[e]) continue;
                    let a = i[e] || e.toLowerCase();
                    "script" === t && ("async" === a || "defer" === a || "noModule" === a) ? r[a] = !!n[e] : r.setAttribute(a, n[e])
                }
                let {
                    children: a,
                    dangerouslySetInnerHTML: o
                } = n;
                return o ? r.innerHTML = o.__html || "" : a && (r.textContent = "string" == typeof a ? a : Array.isArray(a) ? a.join("") : ""), r
            }

            function a(e, t) {
                if (e instanceof HTMLElement && t instanceof HTMLElement) {
                    let n = t.getAttribute("nonce");
                    if (n && !e.getAttribute("nonce")) {
                        let i = t.cloneNode(!0);
                        return i.setAttribute("nonce", ""), i.nonce = n, n === e.nonce && e.isEqualNode(i)
                    }
                }
                return e.isEqualNode(t)
            }

            function o() {
                return {
                    mountedInstances: new Set,
                    updateHead: e => {
                        let t = {};
                        e.forEach(e => {
                            if ("link" === e.type && e.props["data-optimized-fonts"]) {
                                if (document.querySelector('style[data-href="' + e.props["data-href"] + '"]')) return;
                                e.props.href = e.props["data-href"], e.props["data-href"] = void 0
                            }
                            let n = t[e.type] || [];
                            n.push(e), t[e.type] = n
                        });
                        let i = t.title ? t.title[0] : null,
                            r = "";
                        if (i) {
                            let {
                                children: e
                            } = i.props;
                            r = "string" == typeof e ? e : Array.isArray(e) ? e.join("") : ""
                        }
                        r !== document.title && (document.title = r), ["meta", "base", "link", "style", "script"].forEach(e => {
                            n(e, t[e] || [])
                        })
                    }
                }
            }
            n = (e, t) => {
                let n = document.getElementsByTagName("head")[0],
                    i = n.querySelector("meta[name=next-head-count]"),
                    o = Number(i.content),
                    s = [];
                for (let t = 0, n = i.previousElementSibling; t < o; t++, n = (null == n ? void 0 : n.previousElementSibling) || null) {
                    var c;
                    (null == n ? void 0 : null == (c = n.tagName) ? void 0 : c.toLowerCase()) === e && s.push(n)
                }
                let l = t.map(r).filter(e => {
                    for (let t = 0, n = s.length; t < n; t++)
                        if (a(s[t], e)) return s.splice(t, 1), !1;
                    return !0
                });
                s.forEach(e => {
                    var t;
                    return null == (t = e.parentNode) ? void 0 : t.removeChild(e)
                }), l.forEach(e => n.insertBefore(e, i)), i.content = (o - s.length + l.length).toString()
            }, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        85935: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    handleClientScriptLoad: function() {
                        return m
                    },
                    initScriptLoader: function() {
                        return y
                    },
                    default: function() {
                        return b
                    }
                });
            let i = n(86921),
                r = n(91884),
                a = n(3827),
                o = i._(n(89542)),
                s = r._(n(64090)),
                c = n(27484),
                l = n(13313),
                u = n(52185),
                d = new Map,
                h = new Set,
                f = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"],
                p = e => {
                    if (o.default.preinit) {
                        e.forEach(e => {
                            o.default.preinit(e, {
                                as: "style"
                            })
                        });
                        return
                    } {
                        let t = document.head;
                        e.forEach(e => {
                            let n = document.createElement("link");
                            n.type = "text/css", n.rel = "stylesheet", n.href = e, t.appendChild(n)
                        })
                    }
                },
                g = e => {
                    let {
                        src: t,
                        id: n,
                        onLoad: i = () => {},
                        onReady: r = null,
                        dangerouslySetInnerHTML: a,
                        children: o = "",
                        strategy: s = "afterInteractive",
                        onError: c,
                        stylesheets: u
                    } = e, g = n || t;
                    if (g && h.has(g)) return;
                    if (d.has(t)) {
                        h.add(g), d.get(t).then(i, c);
                        return
                    }
                    let m = () => {
                            r && r(), h.add(g)
                        },
                        y = document.createElement("script"),
                        w = new Promise((e, t) => {
                            y.addEventListener("load", function(t) {
                                e(), i && i.call(this, t), m()
                            }), y.addEventListener("error", function(e) {
                                t(e)
                            })
                        }).catch(function(e) {
                            c && c(e)
                        });
                    for (let [n, i] of (a ? (y.innerHTML = a.__html || "", m()) : o ? (y.textContent = "string" == typeof o ? o : Array.isArray(o) ? o.join("") : "", m()) : t && (y.src = t, d.set(t, w)), Object.entries(e))) {
                        if (void 0 === i || f.includes(n)) continue;
                        let e = l.DOMAttributeNames[n] || n.toLowerCase();
                        y.setAttribute(e, i)
                    }
                    "worker" === s && y.setAttribute("type", "text/partytown"), y.setAttribute("data-nscript", s), u && p(u), document.body.appendChild(y)
                };

            function m(e) {
                let {
                    strategy: t = "afterInteractive"
                } = e;
                "lazyOnload" === t ? window.addEventListener("load", () => {
                    (0, u.requestIdleCallback)(() => g(e))
                }) : g(e)
            }

            function y(e) {
                e.forEach(m), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
                    let t = e.id || e.getAttribute("src");
                    h.add(t)
                })
            }

            function w(e) {
                let {
                    id: t,
                    src: n = "",
                    onLoad: i = () => {},
                    onReady: r = null,
                    strategy: l = "afterInteractive",
                    onError: d,
                    stylesheets: f,
                    ...p
                } = e, {
                    updateScripts: m,
                    scripts: y,
                    getIsSsr: w,
                    appDir: b,
                    nonce: _
                } = (0, s.useContext)(c.HeadManagerContext), C = (0, s.useRef)(!1);
                (0, s.useEffect)(() => {
                    let e = t || n;
                    C.current || (r && e && h.has(e) && r(), C.current = !0)
                }, [r, t, n]);
                let E = (0, s.useRef)(!1);
                if ((0, s.useEffect)(() => {
                        !E.current && ("afterInteractive" === l ? g(e) : "lazyOnload" === l && ("complete" === document.readyState ? (0, u.requestIdleCallback)(() => g(e)) : window.addEventListener("load", () => {
                            (0, u.requestIdleCallback)(() => g(e))
                        })), E.current = !0)
                    }, [e, l]), ("beforeInteractive" === l || "worker" === l) && (m ? (y[l] = (y[l] || []).concat([{
                        id: t,
                        src: n,
                        onLoad: i,
                        onReady: r,
                        onError: d,
                        ...p
                    }]), m(y)) : w && w() ? h.add(t || n) : w && !w() && g(e)), b) {
                    if (f && f.forEach(e => {
                            o.default.preinit(e, {
                                as: "style"
                            })
                        }), "beforeInteractive" === l) return n ? (o.default.preload(n, p.integrity ? {
                        as: "script",
                        integrity: p.integrity
                    } : {
                        as: "script"
                    }), (0, a.jsx)("script", {
                        nonce: _,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([n, { ...p,
                                id: t
                            }]) + ")"
                        }
                    })) : (p.dangerouslySetInnerHTML && (p.children = p.dangerouslySetInnerHTML.__html, delete p.dangerouslySetInnerHTML), (0, a.jsx)("script", {
                        nonce: _,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, { ...p,
                                id: t
                            }]) + ")"
                        }
                    }));
                    "afterInteractive" === l && n && o.default.preload(n, p.integrity ? {
                        as: "script",
                        integrity: p.integrity
                    } : {
                        as: "script"
                    })
                }
                return null
            }
            Object.defineProperty(w, "__nextScript", {
                value: !0
            });
            let b = w;
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        73370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ErrorBoundary: function() {
                    return o
                },
                ErrorBoundaryContext: function() {
                    return r
                },
                useErrorBoundary: function() {
                    return s
                },
                withErrorBoundary: function() {
                    return c
                }
            });
            var i = n(64090);
            let r = (0, i.createContext)(null),
                a = {
                    didCatch: !1,
                    error: null
                };
            class o extends i.Component {
                static getDerivedStateFromError(e) {
                    return {
                        didCatch: !0,
                        error: e
                    }
                }
                resetErrorBoundary() {
                    let {
                        error: e
                    } = this.state;
                    if (null !== e) {
                        for (var t, n, i = arguments.length, r = Array(i), o = 0; o < i; o++) r[o] = arguments[o];
                        null === (t = (n = this.props).onReset) || void 0 === t || t.call(n, {
                            args: r,
                            reason: "imperative-api"
                        }), this.setState(a)
                    }
                }
                componentDidCatch(e, t) {
                    var n, i;
                    null === (n = (i = this.props).onError) || void 0 === n || n.call(i, e, t)
                }
                componentDidUpdate(e, t) {
                    let {
                        didCatch: n
                    } = this.state, {
                        resetKeys: i
                    } = this.props;
                    if (n && null !== t.error && function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                            return e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]))
                        }(e.resetKeys, i)) {
                        var r, o;
                        null === (r = (o = this.props).onReset) || void 0 === r || r.call(o, {
                            next: i,
                            prev: e.resetKeys,
                            reason: "keys"
                        }), this.setState(a)
                    }
                }
                render() {
                    let {
                        children: e,
                        fallbackRender: t,
                        FallbackComponent: n,
                        fallback: a
                    } = this.props, {
                        didCatch: o,
                        error: s
                    } = this.state, c = e;
                    if (o) {
                        let e = {
                            error: s,
                            resetErrorBoundary: this.resetErrorBoundary
                        };
                        if ("function" == typeof t) c = t(e);
                        else if (n) c = (0, i.createElement)(n, e);
                        else if (null === a || (0, i.isValidElement)(a)) c = a;
                        else throw s
                    }
                    return (0, i.createElement)(r.Provider, {
                        value: {
                            didCatch: o,
                            error: s,
                            resetErrorBoundary: this.resetErrorBoundary
                        }
                    }, c)
                }
                constructor(e) {
                    super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = a
                }
            }

            function s() {
                let e = (0, i.useContext)(r);
                ! function(e) {
                    if (null == e || "boolean" != typeof e.didCatch || "function" != typeof e.resetErrorBoundary) throw Error("ErrorBoundaryContext not found")
                }(e);
                let [t, n] = (0, i.useState)({
                    error: null,
                    hasError: !1
                }), a = (0, i.useMemo)(() => ({
                    resetBoundary: () => {
                        e.resetErrorBoundary(), n({
                            error: null,
                            hasError: !1
                        })
                    },
                    showBoundary: e => n({
                        error: e,
                        hasError: !0
                    })
                }), [e.resetErrorBoundary]);
                if (t.hasError) throw t.error;
                return a
            }

            function c(e, t) {
                let n = (0, i.forwardRef)((n, r) => (0, i.createElement)(o, t, (0, i.createElement)(e, { ...n,
                        ref: r
                    }))),
                    r = e.displayName || e.name || "Unknown";
                return n.displayName = "withErrorBoundary(".concat(r, ")"), n
            }
        },
        29766: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__Inter_aaf875', '__Inter_Fallback_aaf875'",
                    fontStyle: "normal"
                },
                className: "__className_aaf875",
                variable: "__variable_aaf875"
            }
        },
        8833: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__monument_4510d1', '__monument_Fallback_4510d1'"
                },
                className: "__className_4510d1",
                variable: "__variable_4510d1"
            }
        },
        68109: function(e, t, n) {
            "use strict";
            n.d(t, {
                S: function() {
                    return z
                }
            });
            var i, r, a, o, s, c, l, u, d, h, f, p, g, m, y, w, b, _, C, E, S, I, P = n(32731),
                M = n(48146),
                A = n(5577),
                x = n(67354);

            function O(e, t) {
                var n = (0, x.J)(e, t, "update");
                return function(e, t) {
                    if (t.set) {
                        if (!t.get) throw TypeError("attempted to read set only private field");
                        return "__destrWrapper" in t || (t.__destrWrapper = {
                            set value(v) {
                                t.set.call(e, v)
                            },
                            get value() {
                                return t.get.call(e)
                            }
                        }), t.__destrWrapper
                    }
                    if (!t.writable) throw TypeError("attempted to set read only private field");
                    return t
                }(e, n)
            }
            var q = n(46063),
                k = n(94831),
                j = n(37920),
                D = n(45139),
                T = n(90326),
                L = n(2041),
                F = (i = new WeakMap, r = new WeakMap, a = new WeakMap, o = new WeakMap, s = new WeakMap, c = new WeakMap, l = new WeakMap, u = new WeakMap, d = new WeakSet, h = new WeakSet, class extends L.F {
                    get meta() {
                        return this.options.meta
                    }
                    optionalRemove() {
                        (0, P._)(this, c).length || "idle" !== this.state.fetchStatus || (0, P._)(this, a).remove(this)
                    }
                    setData(e, t) {
                        let n = (0, q.oE)(this.state.data, e, this.options);
                        return (0, k._)(this, h, R).call(this, {
                            data: n,
                            type: "success",
                            dataUpdatedAt: null == t ? void 0 : t.updatedAt,
                            manual: null == t ? void 0 : t.manual
                        }), n
                    }
                    setState(e, t) {
                        (0, k._)(this, h, R).call(this, {
                            type: "setState",
                            state: e,
                            setStateOptions: t
                        })
                    }
                    cancel(e) {
                        var t;
                        let n = (0, P._)(this, o);
                        return null === (t = (0, P._)(this, s)) || void 0 === t || t.cancel(e), n ? n.then(q.ZT).catch(q.ZT) : Promise.resolve()
                    }
                    destroy() {
                        super.destroy(), this.cancel({
                            silent: !0
                        })
                    }
                    reset() {
                        this.destroy(), this.setState((0, P._)(this, i))
                    }
                    isActive() {
                        return (0, P._)(this, c).some(e => !1 !== e.options.enabled)
                    }
                    isDisabled() {
                        return this.getObserversCount() > 0 && !this.isActive()
                    }
                    isStale() {
                        return this.state.isInvalidated || void 0 === this.state.data || (0, P._)(this, c).some(e => e.getCurrentResult().isStale)
                    }
                    isStaleByTime() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        return this.state.isInvalidated || void 0 === this.state.data || !(0, q.Kp)(this.state.dataUpdatedAt, e)
                    }
                    onFocus() {
                        var e;
                        let t = (0, P._)(this, c).find(e => e.shouldFetchOnWindowFocus());
                        null == t || t.refetch({
                            cancelRefetch: !1
                        }), null === (e = (0, P._)(this, s)) || void 0 === e || e.continue()
                    }
                    onOnline() {
                        var e;
                        let t = (0, P._)(this, c).find(e => e.shouldFetchOnReconnect());
                        null == t || t.refetch({
                            cancelRefetch: !1
                        }), null === (e = (0, P._)(this, s)) || void 0 === e || e.continue()
                    }
                    addObserver(e) {
                        (0, P._)(this, c).includes(e) || ((0, P._)(this, c).push(e), this.clearGcTimeout(), (0, P._)(this, a).notify({
                            type: "observerAdded",
                            query: this,
                            observer: e
                        }))
                    }
                    removeObserver(e) {
                        (0, P._)(this, c).includes(e) && ((0, A._)(this, c, (0, P._)(this, c).filter(t => t !== e)), (0, P._)(this, c).length || ((0, P._)(this, s) && ((0, P._)(this, u) ? (0, P._)(this, s).cancel({
                            revert: !0
                        }) : (0, P._)(this, s).cancelRetry()), this.scheduleGc()), (0, P._)(this, a).notify({
                            type: "observerRemoved",
                            query: this,
                            observer: e
                        }))
                    }
                    getObserversCount() {
                        return (0, P._)(this, c).length
                    }
                    invalidate() {
                        this.state.isInvalidated || (0, k._)(this, h, R).call(this, {
                            type: "invalidate"
                        })
                    }
                    fetch(e, t) {
                        var n, i, l, f;
                        if ("idle" !== this.state.fetchStatus) {
                            if (void 0 !== this.state.data && (null == t ? void 0 : t.cancelRefetch)) this.cancel({
                                silent: !0
                            });
                            else if ((0, P._)(this, o)) return null === (l = (0, P._)(this, s)) || void 0 === l || l.continueRetry(), (0, P._)(this, o)
                        }
                        if (e && (0, k._)(this, d, N).call(this, e), !this.options.queryFn) {
                            let e = (0, P._)(this, c).find(e => e.options.queryFn);
                            e && (0, k._)(this, d, N).call(this, e.options)
                        }
                        let p = new AbortController,
                            g = {
                                queryKey: this.queryKey,
                                meta: this.meta
                            },
                            m = e => {
                                Object.defineProperty(e, "signal", {
                                    enumerable: !0,
                                    get: () => ((0, A._)(this, u, !0), p.signal)
                                })
                            };
                        m(g);
                        let y = {
                            fetchOptions: t,
                            options: this.options,
                            queryKey: this.queryKey,
                            state: this.state,
                            fetchFn: () => this.options.queryFn && this.options.queryFn !== q.CN ? ((0, A._)(this, u, !1), this.options.persister) ? this.options.persister(this.options.queryFn, g, this) : this.options.queryFn(g) : Promise.reject(Error("Missing queryFn: '".concat(this.options.queryHash, "'")))
                        };
                        m(y), null === (n = this.options.behavior) || void 0 === n || n.onFetch(y, this), (0, A._)(this, r, this.state), ("idle" === this.state.fetchStatus || this.state.fetchMeta !== (null === (i = y.fetchOptions) || void 0 === i ? void 0 : i.meta)) && (0, k._)(this, h, R).call(this, {
                            type: "fetch",
                            meta: null === (f = y.fetchOptions) || void 0 === f ? void 0 : f.meta
                        });
                        let w = e => {
                            if ((0, T.DV)(e) && e.silent || (0, k._)(this, h, R).call(this, {
                                    type: "error",
                                    error: e
                                }), !(0, T.DV)(e)) {
                                var t, n, i, r;
                                null === (t = (n = (0, P._)(this, a).config).onError) || void 0 === t || t.call(n, e, this), null === (i = (r = (0, P._)(this, a).config).onSettled) || void 0 === i || i.call(r, this.state.data, e, this)
                            }
                            this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                        };
                        return (0, A._)(this, s, (0, T.Mz)({
                            fn: y.fetchFn,
                            abort: p.abort.bind(p),
                            onSuccess: e => {
                                var t, n, i, r;
                                if (void 0 === e) {
                                    w(Error("".concat(this.queryHash, " data is undefined")));
                                    return
                                }
                                this.setData(e), null === (t = (n = (0, P._)(this, a).config).onSuccess) || void 0 === t || t.call(n, e, this), null === (i = (r = (0, P._)(this, a).config).onSettled) || void 0 === i || i.call(r, e, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                            },
                            onError: w,
                            onFail: (e, t) => {
                                (0, k._)(this, h, R).call(this, {
                                    type: "failed",
                                    failureCount: e,
                                    error: t
                                })
                            },
                            onPause: () => {
                                (0, k._)(this, h, R).call(this, {
                                    type: "pause"
                                })
                            },
                            onContinue: () => {
                                (0, k._)(this, h, R).call(this, {
                                    type: "continue"
                                })
                            },
                            retry: y.options.retry,
                            retryDelay: y.options.retryDelay,
                            networkMode: y.options.networkMode
                        })), (0, A._)(this, o, (0, P._)(this, s).promise), (0, P._)(this, o)
                    }
                    constructor(e) {
                        super(), (0, j._)(this, d), (0, j._)(this, h), (0, M._)(this, i, {
                            writable: !0,
                            value: void 0
                        }), (0, M._)(this, r, {
                            writable: !0,
                            value: void 0
                        }), (0, M._)(this, a, {
                            writable: !0,
                            value: void 0
                        }), (0, M._)(this, o, {
                            writable: !0,
                            value: void 0
                        }), (0, M._)(this, s, {
                            writable: !0,
                            value: void 0
                        }), (0, M._)(this, c, {
                            writable: !0,
                            value: void 0
                        }), (0, M._)(this, l, {
                            writable: !0,
                            value: void 0
                        }), (0, M._)(this, u, {
                            writable: !0,
                            value: void 0
                        }), (0, A._)(this, u, !1), (0, A._)(this, l, e.defaultOptions), (0, k._)(this, d, N).call(this, e.options), (0, A._)(this, c, []), (0, A._)(this, a, e.cache), this.queryKey = e.queryKey, this.queryHash = e.queryHash, (0, A._)(this, i, e.state || function(e) {
                            let t = "function" == typeof e.initialData ? e.initialData() : e.initialData,
                                n = void 0 !== t,
                                i = n ? "function" == typeof e.initialDataUpdatedAt ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
                            return {
                                data: t,
                                dataUpdateCount: 0,
                                dataUpdatedAt: n ? null != i ? i : Date.now() : 0,
                                error: null,
                                errorUpdateCount: 0,
                                errorUpdatedAt: 0,
                                fetchFailureCount: 0,
                                fetchFailureReason: null,
                                fetchMeta: null,
                                isInvalidated: !1,
                                status: n ? "success" : "pending",
                                fetchStatus: "idle"
                            }
                        }(this.options)), this.state = (0, P._)(this, i), this.scheduleGc()
                    }
                });

            function N(e) {
                this.options = { ...(0, P._)(this, l),
                    ...e
                }, this.updateGcTime(this.options.gcTime)
            }

            function R(e) {
                this.state = (t => {
                    var n, i;
                    switch (e.type) {
                        case "failed":
                            return { ...t,
                                fetchFailureCount: e.failureCount,
                                fetchFailureReason: e.error
                            };
                        case "pause":
                            return { ...t,
                                fetchStatus: "paused"
                            };
                        case "continue":
                            return { ...t,
                                fetchStatus: "fetching"
                            };
                        case "fetch":
                            return { ...t,
                                fetchFailureCount: 0,
                                fetchFailureReason: null,
                                fetchMeta: null !== (n = e.meta) && void 0 !== n ? n : null,
                                fetchStatus: (0, T.Kw)(this.options.networkMode) ? "fetching" : "paused",
                                ...void 0 === t.data && {
                                    error: null,
                                    status: "pending"
                                }
                            };
                        case "success":
                            return { ...t,
                                data: e.data,
                                dataUpdateCount: t.dataUpdateCount + 1,
                                dataUpdatedAt: null !== (i = e.dataUpdatedAt) && void 0 !== i ? i : Date.now(),
                                error: null,
                                isInvalidated: !1,
                                status: "success",
                                ...!e.manual && {
                                    fetchStatus: "idle",
                                    fetchFailureCount: 0,
                                    fetchFailureReason: null
                                }
                            };
                        case "error":
                            let a = e.error;
                            if ((0, T.DV)(a) && a.revert && (0, P._)(this, r)) return { ...(0, P._)(this, r),
                                fetchStatus: "idle"
                            };
                            return { ...t,
                                error: a,
                                errorUpdateCount: t.errorUpdateCount + 1,
                                errorUpdatedAt: Date.now(),
                                fetchFailureCount: t.fetchFailureCount + 1,
                                fetchFailureReason: a,
                                fetchStatus: "idle",
                                status: "error"
                            };
                        case "invalidate":
                            return { ...t,
                                isInvalidated: !0
                            };
                        case "setState":
                            return { ...t,
                                ...e.state
                            }
                    }
                })(this.state), D.V.batch(() => {
                    (0, P._)(this, c).forEach(e => {
                        e.onQueryUpdate()
                    }), (0, P._)(this, a).notify({
                        query: this,
                        type: "updated",
                        action: e
                    })
                })
            }
            var W = n(44614),
                U = (f = new WeakMap, class extends W.l {
                    build(e, t, n) {
                        var i;
                        let r = t.queryKey,
                            a = null !== (i = t.queryHash) && void 0 !== i ? i : (0, q.Rm)(r, t),
                            o = this.get(a);
                        return o || (o = new F({
                            cache: this,
                            queryKey: r,
                            queryHash: a,
                            options: e.defaultQueryOptions(t),
                            state: n,
                            defaultOptions: e.getQueryDefaults(r)
                        }), this.add(o)), o
                    }
                    add(e) {
                        (0, P._)(this, f).has(e.queryHash) || ((0, P._)(this, f).set(e.queryHash, e), this.notify({
                            type: "added",
                            query: e
                        }))
                    }
                    remove(e) {
                        let t = (0, P._)(this, f).get(e.queryHash);
                        t && (e.destroy(), t === e && (0, P._)(this, f).delete(e.queryHash), this.notify({
                            type: "removed",
                            query: e
                        }))
                    }
                    clear() {
                        D.V.batch(() => {
                            this.getAll().forEach(e => {
                                this.remove(e)
                            })
                        })
                    }
                    get(e) {
                        return (0, P._)(this, f).get(e)
                    }
                    getAll() {
                        return [...(0, P._)(this, f).values()]
                    }
                    find(e) {
                        let t = {
                            exact: !0,
                            ...e
                        };
                        return this.getAll().find(e => (0, q._x)(t, e))
                    }
                    findAll() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = this.getAll();
                        return Object.keys(e).length > 0 ? t.filter(t => (0, q._x)(e, t)) : t
                    }
                    notify(e) {
                        D.V.batch(() => {
                            this.listeners.forEach(t => {
                                t(e)
                            })
                        })
                    }
                    onFocus() {
                        D.V.batch(() => {
                            this.getAll().forEach(e => {
                                e.onFocus()
                            })
                        })
                    }
                    onOnline() {
                        D.V.batch(() => {
                            this.getAll().forEach(e => {
                                e.onOnline()
                            })
                        })
                    }
                    constructor(e = {}) {
                        super(), (0, M._)(this, f, {
                            writable: !0,
                            value: void 0
                        }), this.config = e, (0, A._)(this, f, new Map)
                    }
                }),
                K = n(1793),
                H = (p = new WeakMap, g = new WeakMap, m = new WeakMap, class extends W.l {
                    build(e, t, n) {
                        let i = new K.m({
                            mutationCache: this,
                            mutationId: ++O(this, g).value,
                            options: e.defaultMutationOptions(t),
                            state: n
                        });
                        return this.add(i), i
                    }
                    add(e) {
                        (0, P._)(this, p).push(e), this.notify({
                            type: "added",
                            mutation: e
                        })
                    }
                    remove(e) {
                        (0, A._)(this, p, (0, P._)(this, p).filter(t => t !== e)), this.notify({
                            type: "removed",
                            mutation: e
                        })
                    }
                    clear() {
                        D.V.batch(() => {
                            (0, P._)(this, p).forEach(e => {
                                this.remove(e)
                            })
                        })
                    }
                    getAll() {
                        return (0, P._)(this, p)
                    }
                    find(e) {
                        let t = {
                            exact: !0,
                            ...e
                        };
                        return (0, P._)(this, p).find(e => (0, q.X7)(t, e))
                    }
                    findAll() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return (0, P._)(this, p).filter(t => (0, q.X7)(e, t))
                    }
                    notify(e) {
                        D.V.batch(() => {
                            this.listeners.forEach(t => {
                                t(e)
                            })
                        })
                    }
                    resumePausedMutations() {
                        var e;
                        return (0, A._)(this, m, (null !== (e = (0, P._)(this, m)) && void 0 !== e ? e : Promise.resolve()).then(() => {
                            let e = (0, P._)(this, p).filter(e => e.state.isPaused);
                            return D.V.batch(() => e.reduce((e, t) => e.then(() => t.continue().catch(q.ZT)), Promise.resolve()))
                        }).then(() => {
                            (0, A._)(this, m, void 0)
                        })), (0, P._)(this, m)
                    }
                    constructor(e = {}) {
                        super(), (0, M._)(this, p, {
                            writable: !0,
                            value: void 0
                        }), (0, M._)(this, g, {
                            writable: !0,
                            value: void 0
                        }), (0, M._)(this, m, {
                            writable: !0,
                            value: void 0
                        }), this.config = e, (0, A._)(this, p, []), (0, A._)(this, g, 0)
                    }
                }),
                Q = n(79555),
                B = n(17211);

            function G(e, t) {
                let {
                    pages: n,
                    pageParams: i
                } = t, r = n.length - 1;
                return e.getNextPageParam(n[r], n, i[r], i)
            }
            var z = (y = new WeakMap, w = new WeakMap, b = new WeakMap, _ = new WeakMap, C = new WeakMap, E = new WeakMap, S = new WeakMap, I = new WeakMap, class {
                mount() {
                    O(this, E).value++, 1 === (0, P._)(this, E) && ((0, A._)(this, S, Q.j.subscribe(() => {
                        Q.j.isFocused() && (this.resumePausedMutations(), (0, P._)(this, y).onFocus())
                    })), (0, A._)(this, I, B.N.subscribe(e => {
                        e && (this.resumePausedMutations(), (0, P._)(this, y).onOnline())
                    })))
                }
                unmount() {
                    var e, t;
                    O(this, E).value--, 0 === (0, P._)(this, E) && (null === (e = (0, P._)(this, S)) || void 0 === e || e.call(this), (0, A._)(this, S, void 0), null === (t = (0, P._)(this, I)) || void 0 === t || t.call(this), (0, A._)(this, I, void 0))
                }
                isFetching(e) {
                    return (0, P._)(this, y).findAll({ ...e,
                        fetchStatus: "fetching"
                    }).length
                }
                isMutating(e) {
                    return (0, P._)(this, w).findAll({ ...e,
                        status: "pending"
                    }).length
                }
                getQueryData(e) {
                    var t;
                    let n = this.defaultQueryOptions({
                        queryKey: e
                    });
                    return null === (t = (0, P._)(this, y).get(n.queryHash)) || void 0 === t ? void 0 : t.state.data
                }
                ensureQueryData(e) {
                    let t = this.getQueryData(e.queryKey);
                    return void 0 !== t ? Promise.resolve(t) : this.fetchQuery(e)
                }
                getQueriesData(e) {
                    return this.getQueryCache().findAll(e).map(e => {
                        let {
                            queryKey: t,
                            state: n
                        } = e;
                        return [t, n.data]
                    })
                }
                setQueryData(e, t, n) {
                    let i = this.defaultQueryOptions({
                            queryKey: e
                        }),
                        r = (0, P._)(this, y).get(i.queryHash),
                        a = null == r ? void 0 : r.state.data,
                        o = (0, q.SE)(t, a);
                    if (void 0 !== o) return (0, P._)(this, y).build(this, i).setData(o, { ...n,
                        manual: !0
                    })
                }
                setQueriesData(e, t, n) {
                    return D.V.batch(() => this.getQueryCache().findAll(e).map(e => {
                        let {
                            queryKey: i
                        } = e;
                        return [i, this.setQueryData(i, t, n)]
                    }))
                }
                getQueryState(e) {
                    var t;
                    let n = this.defaultQueryOptions({
                        queryKey: e
                    });
                    return null === (t = (0, P._)(this, y).get(n.queryHash)) || void 0 === t ? void 0 : t.state
                }
                removeQueries(e) {
                    let t = (0, P._)(this, y);
                    D.V.batch(() => {
                        t.findAll(e).forEach(e => {
                            t.remove(e)
                        })
                    })
                }
                resetQueries(e, t) {
                    let n = (0, P._)(this, y),
                        i = {
                            type: "active",
                            ...e
                        };
                    return D.V.batch(() => (n.findAll(e).forEach(e => {
                        e.reset()
                    }), this.refetchQueries(i, t)))
                }
                cancelQueries() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = {
                            revert: !0,
                            ...t
                        };
                    return Promise.all(D.V.batch(() => (0, P._)(this, y).findAll(e).map(e => e.cancel(n)))).then(q.ZT).catch(q.ZT)
                }
                invalidateQueries() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return D.V.batch(() => {
                        var n, i;
                        if ((0, P._)(this, y).findAll(e).forEach(e => {
                                e.invalidate()
                            }), "none" === e.refetchType) return Promise.resolve();
                        let r = { ...e,
                            type: null !== (i = null !== (n = e.refetchType) && void 0 !== n ? n : e.type) && void 0 !== i ? i : "active"
                        };
                        return this.refetchQueries(r, t)
                    })
                }
                refetchQueries() {
                    var e;
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 ? arguments[1] : void 0,
                        i = { ...n,
                            cancelRefetch: null === (e = null == n ? void 0 : n.cancelRefetch) || void 0 === e || e
                        };
                    return Promise.all(D.V.batch(() => (0, P._)(this, y).findAll(t).filter(e => !e.isDisabled()).map(e => {
                        let t = e.fetch(void 0, i);
                        return i.throwOnError || (t = t.catch(q.ZT)), "paused" === e.state.fetchStatus ? Promise.resolve() : t
                    }))).then(q.ZT)
                }
                fetchQuery(e) {
                    let t = this.defaultQueryOptions(e);
                    void 0 === t.retry && (t.retry = !1);
                    let n = (0, P._)(this, y).build(this, t);
                    return n.isStaleByTime(t.staleTime) ? n.fetch(t) : Promise.resolve(n.state.data)
                }
                prefetchQuery(e) {
                    return this.fetchQuery(e).then(q.ZT).catch(q.ZT)
                }
                fetchInfiniteQuery(e) {
                    var t;
                    return e.behavior = (t = e.pages, {
                        onFetch: (e, n) => {
                            let i = async () => {
                                var n, i, r, a, o, s;
                                let c;
                                let l = e.options,
                                    u = null === (r = e.fetchOptions) || void 0 === r ? void 0 : null === (i = r.meta) || void 0 === i ? void 0 : null === (n = i.fetchMore) || void 0 === n ? void 0 : n.direction,
                                    d = (null === (a = e.state.data) || void 0 === a ? void 0 : a.pages) || [],
                                    h = (null === (o = e.state.data) || void 0 === o ? void 0 : o.pageParams) || [],
                                    f = !1,
                                    p = t => {
                                        Object.defineProperty(t, "signal", {
                                            enumerable: !0,
                                            get: () => (e.signal.aborted ? f = !0 : e.signal.addEventListener("abort", () => {
                                                f = !0
                                            }), e.signal)
                                        })
                                    },
                                    g = e.options.queryFn && e.options.queryFn !== q.CN ? e.options.queryFn : () => Promise.reject(Error("Missing queryFn: '".concat(e.options.queryHash, "'"))),
                                    m = async (t, n, i) => {
                                        if (f) return Promise.reject();
                                        if (null == n && t.pages.length) return Promise.resolve(t);
                                        let r = {
                                            queryKey: e.queryKey,
                                            pageParam: n,
                                            direction: i ? "backward" : "forward",
                                            meta: e.options.meta
                                        };
                                        p(r);
                                        let a = await g(r),
                                            {
                                                maxPages: o
                                            } = e.options,
                                            s = i ? q.Ht : q.VX;
                                        return {
                                            pages: s(t.pages, a, o),
                                            pageParams: s(t.pageParams, n, o)
                                        }
                                    };
                                if (u && d.length) {
                                    let e = "backward" === u,
                                        t = {
                                            pages: d,
                                            pageParams: h
                                        },
                                        n = (e ? function(e, t) {
                                            var n;
                                            let {
                                                pages: i,
                                                pageParams: r
                                            } = t;
                                            return null === (n = e.getPreviousPageParam) || void 0 === n ? void 0 : n.call(e, i[0], i, r[0], r)
                                        } : G)(l, t);
                                    c = await m(t, n, e)
                                } else {
                                    c = await m({
                                        pages: [],
                                        pageParams: []
                                    }, null !== (s = h[0]) && void 0 !== s ? s : l.initialPageParam);
                                    let e = null != t ? t : d.length;
                                    for (let t = 1; t < e; t++) {
                                        let e = G(l, c);
                                        c = await m(c, e)
                                    }
                                }
                                return c
                            };
                            e.options.persister ? e.fetchFn = () => {
                                var t, r;
                                return null === (t = (r = e.options).persister) || void 0 === t ? void 0 : t.call(r, i, {
                                    queryKey: e.queryKey,
                                    meta: e.options.meta,
                                    signal: e.signal
                                }, n)
                            } : e.fetchFn = i
                        }
                    }), this.fetchQuery(e)
                }
                prefetchInfiniteQuery(e) {
                    return this.fetchInfiniteQuery(e).then(q.ZT).catch(q.ZT)
                }
                resumePausedMutations() {
                    return B.N.isOnline() ? (0, P._)(this, w).resumePausedMutations() : Promise.resolve()
                }
                getQueryCache() {
                    return (0, P._)(this, y)
                }
                getMutationCache() {
                    return (0, P._)(this, w)
                }
                getDefaultOptions() {
                    return (0, P._)(this, b)
                }
                setDefaultOptions(e) {
                    (0, A._)(this, b, e)
                }
                setQueryDefaults(e, t) {
                    (0, P._)(this, _).set((0, q.Ym)(e), {
                        queryKey: e,
                        defaultOptions: t
                    })
                }
                getQueryDefaults(e) {
                    let t = [...(0, P._)(this, _).values()],
                        n = {};
                    return t.forEach(t => {
                        (0, q.to)(e, t.queryKey) && (n = { ...n,
                            ...t.defaultOptions
                        })
                    }), n
                }
                setMutationDefaults(e, t) {
                    (0, P._)(this, C).set((0, q.Ym)(e), {
                        mutationKey: e,
                        defaultOptions: t
                    })
                }
                getMutationDefaults(e) {
                    let t = [...(0, P._)(this, C).values()],
                        n = {};
                    return t.forEach(t => {
                        (0, q.to)(e, t.mutationKey) && (n = { ...n,
                            ...t.defaultOptions
                        })
                    }), n
                }
                defaultQueryOptions(e) {
                    if (e._defaulted) return e;
                    let t = { ...(0, P._)(this, b).queries,
                        ...this.getQueryDefaults(e.queryKey),
                        ...e,
                        _defaulted: !0
                    };
                    return t.queryHash || (t.queryHash = (0, q.Rm)(t.queryKey, t)), void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode), void 0 === t.throwOnError && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), !0 !== t.enabled && t.queryFn === q.CN && (t.enabled = !1), t
                }
                defaultMutationOptions(e) {
                    return (null == e ? void 0 : e._defaulted) ? e : { ...(0, P._)(this, b).mutations,
                        ...(null == e ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
                        ...e,
                        _defaulted: !0
                    }
                }
                clear() {
                    (0, P._)(this, y).clear(), (0, P._)(this, w).clear()
                }
                constructor(e = {}) {
                    (0, M._)(this, y, {
                        writable: !0,
                        value: void 0
                    }), (0, M._)(this, w, {
                        writable: !0,
                        value: void 0
                    }), (0, M._)(this, b, {
                        writable: !0,
                        value: void 0
                    }), (0, M._)(this, _, {
                        writable: !0,
                        value: void 0
                    }), (0, M._)(this, C, {
                        writable: !0,
                        value: void 0
                    }), (0, M._)(this, E, {
                        writable: !0,
                        value: void 0
                    }), (0, M._)(this, S, {
                        writable: !0,
                        value: void 0
                    }), (0, M._)(this, I, {
                        writable: !0,
                        value: void 0
                    }), (0, A._)(this, y, e.queryCache || new U), (0, A._)(this, w, e.mutationCache || new H), (0, A._)(this, b, e.defaultOptions || {}), (0, A._)(this, _, new Map), (0, A._)(this, C, new Map), (0, A._)(this, E, 0)
                }
            })
        },
        45355: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return l
                }
            });
            var i = n(18339),
                r = n(95953),
                a = n(2731),
                o = n(75036),
                s = n(24473),
                c = n(15578);

            function l(e) {
                let t, u;
                return (0, i.K)(i => ({
                    id: "coinbaseWalletSDK",
                    name: "Coinbase Wallet",
                    type: l.type,
                    async connect() {
                        let {
                            chainId: e
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        try {
                            let n = await this.getProvider(),
                                i = (await n.request({
                                    method: "eth_requestAccounts"
                                })).map(e => (0, o.K)(e));
                            n.on("accountsChanged", this.onAccountsChanged), n.on("chainChanged", this.onChainChanged), n.on("disconnect", this.onDisconnect.bind(this));
                            let r = await this.getChainId();
                            if (e && r !== e) {
                                var t;
                                let n = await this.switchChain({
                                    chainId: e
                                }).catch(e => {
                                    if (e.code === s.ab.code) throw e;
                                    return {
                                        id: r
                                    }
                                });
                                r = null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : r
                            }
                            return {
                                accounts: i,
                                chainId: r
                            }
                        } catch (e) {
                            if (/(user closed modal|accounts received is empty|user denied account)/i.test(e.message)) throw new s.ab(e);
                            throw e
                        }
                    },
                    async disconnect() {
                        let e = await this.getProvider();
                        e.removeListener("accountsChanged", this.onAccountsChanged), e.removeListener("chainChanged", this.onChainChanged), e.removeListener("disconnect", this.onDisconnect.bind(this)), e.disconnect(), e.close()
                    },
                    async getAccounts() {
                        let e = await this.getProvider();
                        return (await e.request({
                            method: "eth_accounts"
                        })).map(e => (0, o.K)(e))
                    },
                    async getChainId() {
                        let e = await this.getProvider(),
                            t = await e.request({
                                method: "eth_chainId"
                            });
                        return (0, r.J)(t)
                    },
                    async getProvider() {
                        if (!u) {
                            var r;
                            let {
                                default: a
                            } = await Promise.all([n.e(428), n.e(223), n.e(878)]).then(n.t.bind(n, 20223, 19)), o = null === (r = (t = new("function" != typeof a && "function" == typeof a.default ? a.default : a)({
                                reloadOnDisconnect: !1,
                                ...e
                            })).walletExtension) || void 0 === r ? void 0 : r.getChainId(), s = i.chains.find(t => e.chainId ? t.id === e.chainId : t.id === o) || i.chains[0], c = e.chainId || (null == s ? void 0 : s.id), l = e.jsonRpcUrl || (null == s ? void 0 : s.rpcUrls.default.http[0]);
                            u = t.makeWeb3Provider(l, c)
                        }
                        return u
                    },
                    async isAuthorized() {
                        try {
                            return !!(await this.getAccounts()).length
                        } catch (e) {
                            return !1
                        }
                    },
                    async switchChain(e) {
                        let {
                            chainId: t
                        } = e, n = i.chains.find(e => e.id === t);
                        if (!n) throw new s.x3(new a.X4);
                        let r = await this.getProvider(),
                            o = (0, c.eC)(n.id);
                        try {
                            return await r.request({
                                method: "wallet_switchEthereumChain",
                                params: [{
                                    chainId: o
                                }]
                            }), n
                        } catch (e) {
                            if (4902 === e.code) try {
                                var l, u, d;
                                return await r.request({
                                    method: "wallet_addEthereumChain",
                                    params: [{
                                        chainId: o,
                                        chainName: n.name,
                                        nativeCurrency: n.nativeCurrency,
                                        rpcUrls: [null !== (d = null === (l = n.rpcUrls.default) || void 0 === l ? void 0 : l.http[0]) && void 0 !== d ? d : ""],
                                        blockExplorerUrls: [null === (u = n.blockExplorers) || void 0 === u ? void 0 : u.default.url]
                                    }]
                                }), n
                            } catch (e) {
                                throw new s.ab(e)
                            }
                            throw new s.x3(e)
                        }
                    },
                    onAccountsChanged(e) {
                        0 === e.length ? i.emitter.emit("disconnect") : i.emitter.emit("change", {
                            accounts: e.map(e => (0, o.K)(e))
                        })
                    },
                    onChainChanged(e) {
                        let t = (0, r.J)(e);
                        i.emitter.emit("change", {
                            chainId: t
                        })
                    },
                    async onDisconnect(e) {
                        i.emitter.emit("disconnect");
                        let t = await this.getProvider();
                        t.removeListener("accountsChanged", this.onAccountsChanged), t.removeListener("chainChanged", this.onChainChanged), t.removeListener("disconnect", this.onDisconnect.bind(this))
                    }
                }))
            }
            l.type = "coinbaseWallet"
        },
        17568: function(e, t, n) {
            "use strict";
            n.d(t, {
                a: function() {
                    return u
                }
            });
            var i = n(18339),
                r = n(34497),
                a = n(2731),
                o = n(95953),
                s = n(75036),
                c = n(24473),
                l = n(15578);

            function u(e) {
                var t;
                let d, h;
                let f = null === (t = e.isNewChainsStale) || void 0 === t || t,
                    p = "eip155";
                return (0, i.K)(t => ({
                    id: "walletConnect",
                    name: "WalletConnect",
                    type: u.type,
                    async setup() {
                        let e = await this.getProvider().catch(() => null);
                        e && (e.on("connect", this.onConnect.bind(this)), e.on("session_delete", this.onSessionDelete.bind(this)))
                    },
                    async connect() {
                        let {
                            chainId: e,
                            ...n
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        try {
                            let c = await this.getProvider();
                            if (!c) throw new r.M;
                            c.on("display_uri", this.onDisplayUri);
                            let l = e;
                            if (!l) {
                                var i, a, o;
                                let e = null !== (o = await (null === (i = t.storage) || void 0 === i ? void 0 : i.getItem("state"))) && void 0 !== o ? o : {};
                                l = t.chains.some(t => t.id === e.chainId) ? e.chainId : null === (a = t.chains[0]) || void 0 === a ? void 0 : a.id
                            }
                            if (!l) throw Error("No chains found on connector.");
                            let u = await this.isChainsStale();
                            if (c.session && u && await c.disconnect(), !c.session || u) {
                                let e = t.chains.filter(e => e.id !== l).map(e => e.id);
                                await c.connect({
                                    optionalChains: [l, ...e],
                                    ..."pairingTopic" in n ? {
                                        pairingTopic: n.pairingTopic
                                    } : {}
                                }), this.setRequestedChainsIds(t.chains.map(e => e.id))
                            }
                            let d = (await c.enable()).map(e => (0, s.K)(e)),
                                h = await this.getChainId();
                            return c.removeListener("display_uri", this.onDisplayUri), c.removeListener("connect", this.onConnect.bind(this)), c.on("accountsChanged", this.onAccountsChanged.bind(this)), c.on("chainChanged", this.onChainChanged), c.on("disconnect", this.onDisconnect.bind(this)), c.on("session_delete", this.onSessionDelete.bind(this)), {
                                accounts: d,
                                chainId: h
                            }
                        } catch (e) {
                            if (/(user rejected|connection request reset)/i.test(null == e ? void 0 : e.message)) throw new c.ab(e);
                            throw e
                        }
                    },
                    async disconnect() {
                        let e = await this.getProvider();
                        try {
                            await (null == e ? void 0 : e.disconnect())
                        } catch (e) {
                            if (!/No matching key/i.test(e.message)) throw e
                        } finally {
                            null == e || e.removeListener("accountsChanged", this.onAccountsChanged.bind(this)), null == e || e.removeListener("chainChanged", this.onChainChanged), null == e || e.removeListener("disconnect", this.onDisconnect.bind(this)), null == e || e.removeListener("session_delete", this.onSessionDelete.bind(this)), null == e || e.on("connect", this.onConnect.bind(this)), this.setRequestedChainsIds([])
                        }
                    },
                    async getAccounts() {
                        return (await this.getProvider()).accounts.map(e => (0, s.K)(e))
                    },
                    async getProvider() {
                        var i;
                        let {
                            chainId: r
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        async function a() {
                            var i;
                            let r = t.chains.map(e => e.id);
                            if (!r.length) return;
                            let {
                                EthereumProvider: a
                            } = await Promise.all([n.e(663), n.e(428), n.e(923), n.e(883)]).then(n.bind(n, 11455));
                            return await a.init({ ...e,
                                disableProviderPing: !0,
                                optionalChains: r,
                                projectId: e.projectId,
                                rpcMap: Object.fromEntries(t.chains.map(e => [e.id, e.rpcUrls.default.http[0]])),
                                showQrModal: null === (i = e.showQrModal) || void 0 === i || i
                            })
                        }
                        return d || (h || (h = a()), null == (d = await h) || d.events.setMaxListeners(1 / 0)), r && await (null === (i = this.switchChain) || void 0 === i ? void 0 : i.call(this, {
                            chainId: r
                        })), d
                    },
                    async getChainId() {
                        return (await this.getProvider()).chainId
                    },
                    async isAuthorized() {
                        try {
                            let [e, t] = await Promise.all([this.getAccounts(), this.getProvider()]);
                            if (!e.length) return !1;
                            if (await this.isChainsStale() && t.session) return await t.disconnect().catch(() => {}), !1;
                            return !0
                        } catch (e) {
                            return !1
                        }
                    },
                    async switchChain(e) {
                        let {
                            chainId: n
                        } = e, i = t.chains.find(e => e.id === n);
                        if (!i) throw new c.x3(new a.X4);
                        try {
                            let e = await this.getProvider(),
                                t = this.getNamespaceChainsIds(),
                                a = this.getNamespaceMethods();
                            if (!t.includes(n) && a.includes("wallet_addEthereumChain")) {
                                var r;
                                await e.request({
                                    method: "wallet_addEthereumChain",
                                    params: [{
                                        chainId: (0, l.eC)(i.id),
                                        blockExplorerUrls: [null === (r = i.blockExplorers) || void 0 === r ? void 0 : r.default.url],
                                        chainName: i.name,
                                        nativeCurrency: i.nativeCurrency,
                                        rpcUrls: [...i.rpcUrls.default.http]
                                    }]
                                });
                                let t = await this.getRequestedChainsIds();
                                this.setRequestedChainsIds([...t, n])
                            }
                            return await e.request({
                                method: "wallet_switchEthereumChain",
                                params: [{
                                    chainId: (0, l.eC)(n)
                                }]
                            }), i
                        } catch (t) {
                            let e = "string" == typeof t ? t : null == t ? void 0 : t.message;
                            if (/user rejected request/i.test(e)) throw new c.ab(t);
                            throw new c.x3(t)
                        }
                    },
                    onAccountsChanged(e) {
                        0 === e.length ? this.onDisconnect() : t.emitter.emit("change", {
                            accounts: e.map(e => (0, s.K)(e))
                        })
                    },
                    onChainChanged(e) {
                        let n = (0, o.J)(e);
                        t.emitter.emit("change", {
                            chainId: n
                        })
                    },
                    async onConnect(e) {
                        let n = (0, o.J)(e.chainId),
                            i = await this.getAccounts();
                        t.emitter.emit("connect", {
                            accounts: i,
                            chainId: n
                        })
                    },
                    async onDisconnect(e) {
                        this.setRequestedChainsIds([]), t.emitter.emit("disconnect");
                        let n = await this.getProvider();
                        n.removeListener("accountsChanged", this.onAccountsChanged.bind(this)), n.removeListener("chainChanged", this.onChainChanged), n.removeListener("disconnect", this.onDisconnect.bind(this)), n.removeListener("session_delete", this.onSessionDelete.bind(this)), n.on("connect", this.onConnect.bind(this))
                    },
                    onDisplayUri(e) {
                        t.emitter.emit("message", {
                            type: "display_uri",
                            data: e
                        })
                    },
                    onSessionDelete() {
                        this.onDisconnect()
                    },
                    getNamespaceChainsIds() {
                        var e, t, n;
                        if (!d) return [];
                        let i = null === (n = d.session) || void 0 === n ? void 0 : null === (t = n.namespaces[p]) || void 0 === t ? void 0 : null === (e = t.chains) || void 0 === e ? void 0 : e.map(e => parseInt(e.split(":")[1] || ""));
                        return null != i ? i : []
                    },
                    getNamespaceMethods() {
                        var e, t;
                        if (!d) return [];
                        let n = null === (t = d.session) || void 0 === t ? void 0 : null === (e = t.namespaces[p]) || void 0 === e ? void 0 : e.methods;
                        return null != n ? n : []
                    },
                    async getRequestedChainsIds() {
                        var e, n;
                        return null !== (n = await (null === (e = t.storage) || void 0 === e ? void 0 : e.getItem(this.requestedChainsStorageKey))) && void 0 !== n ? n : []
                    },
                    async isChainsStale() {
                        if (this.getNamespaceMethods().includes("wallet_addEthereumChain") || !f) return !1;
                        let e = t.chains.map(e => e.id),
                            n = this.getNamespaceChainsIds();
                        if (n.length && !n.some(t => e.includes(t))) return !1;
                        let i = await this.getRequestedChainsIds();
                        return !e.every(e => i.includes(e))
                    },
                    async setRequestedChainsIds(e) {
                        var n;
                        await (null === (n = t.storage) || void 0 === n ? void 0 : n.setItem(this.requestedChainsStorageKey, e))
                    },
                    get requestedChainsStorageKey() {
                        return "".concat(this.id, ".requestedChains")
                    }
                }))
            }
            u.type = "walletConnect"
        },
        18339: function(e, t, n) {
            "use strict";

            function i(e) {
                return e
            }
            n.d(t, {
                K: function() {
                    return i
                }
            })
        },
        91863: function(e, t, n) {
            "use strict";
            n.d(t, {
                L: function() {
                    return f
                }
            });
            var i = n(75036),
                r = n(24473),
                a = n(42179),
                o = n(9416),
                s = n(15578),
                c = n(2731),
                l = n(34497),
                u = n(95953),
                d = n(18339);
            let h = {
                coinbaseWallet: {
                    id: "coinbaseWallet",
                    name: "Coinbase Wallet",
                    provider: e => (null == e ? void 0 : e.coinbaseWalletExtension) ? e.coinbaseWalletExtension : p(e, "isCoinbaseWallet")
                },
                metaMask: {
                    id: "metaMask",
                    name: "MetaMask",
                    provider: e => p(e, e => {
                        if (!e.isMetaMask || e.isBraveWallet && !e._events && !e._state) return !1;
                        for (let t of ["isApexWallet", "isAvalanche", "isBitKeep", "isBlockWallet", "isKuCoinWallet", "isMathWallet", "isOkxWallet", "isOKExWallet", "isOneInchIOSWallet", "isOneInchAndroidWallet", "isOpera", "isPortal", "isRabby", "isTokenPocket", "isTokenary", "isZerion"])
                            if (e[t]) return !1;
                        return !0
                    })
                },
                phantom: {
                    id: "phantom",
                    name: "Phantom",
                    provider(e) {
                        var t, n;
                        return (null == e ? void 0 : null === (t = e.phantom) || void 0 === t ? void 0 : t.ethereum) ? null === (n = e.phantom) || void 0 === n ? void 0 : n.ethereum : p(e, "isPhantom")
                    }
                }
            };

            function f() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        shimDisconnect: t = !0,
                        unstable_shimAsyncInject: n
                    } = e;

                function g() {
                    var t;
                    let n = e.target;
                    if ("function" == typeof n) {
                        let e = n();
                        if (e) return e
                    }
                    return "object" == typeof n ? n : "string" == typeof n ? { ...null !== (t = h[n]) && void 0 !== t ? t : {
                            id: n,
                            name: "".concat(n[0].toUpperCase()).concat(n.slice(1)),
                            provider: "is".concat(n[0].toUpperCase()).concat(n.slice(1))
                        }
                    } : {
                        id: "injected",
                        name: "Injected",
                        provider: e => null == e ? void 0 : e.ethereum
                    }
                }
                return (0, d.K)(d => ({
                    get icon() {
                        return g().icon
                    },
                    get id() {
                        return g().id
                    },
                    get name() {
                        return g().name
                    },
                    type: f.type,
                    async setup() {
                        let t = await this.getProvider();
                        t && e.target && t.on("connect", this.onConnect.bind(this))
                    },
                    async connect() {
                        var n, a, o, s, c, u, h;
                        let {
                            chainId: f,
                            isReconnecting: p
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, g = await this.getProvider();
                        if (!g) throw new l.M;
                        let m = null;
                        if (!p && (null == (m = await this.getAccounts().catch(() => null)) ? void 0 : m.length)) try {
                            let e = await g.request({
                                method: "wallet_requestPermissions",
                                params: [{
                                    eth_accounts: {}
                                }]
                            });
                            m = null === (s = e[0]) || void 0 === s ? void 0 : null === (o = s.caveats) || void 0 === o ? void 0 : null === (a = o[0]) || void 0 === a ? void 0 : null === (n = a.value) || void 0 === n ? void 0 : n.map(e => (0, i.K)(e))
                        } catch (e) {
                            if (e.code === r.ab.code) throw new r.ab(e);
                            if (e.code === r.pT.code) throw e
                        }
                        try {
                            (null == m ? void 0 : m.length) || (m = (await g.request({
                                method: "eth_requestAccounts"
                            })).map(e => (0, i.K)(e))), g.removeListener("connect", this.onConnect.bind(this)), g.on("accountsChanged", this.onAccountsChanged.bind(this)), g.on("chainChanged", this.onChainChanged), g.on("disconnect", this.onDisconnect.bind(this));
                            let n = await this.getChainId();
                            if (f && n !== f) {
                                let e = await this.switchChain({
                                    chainId: f
                                }).catch(e => {
                                    if (e.code === r.ab.code) throw e;
                                    return {
                                        id: n
                                    }
                                });
                                n = null !== (c = null == e ? void 0 : e.id) && void 0 !== c ? c : n
                            }
                            return t && (await (null === (u = d.storage) || void 0 === u ? void 0 : u.removeItem("".concat(this.id, ".disconnected"))), e.target || await (null === (h = d.storage) || void 0 === h ? void 0 : h.setItem("injected.connected", !0))), {
                                accounts: m,
                                chainId: n
                            }
                        } catch (e) {
                            if (e.code === r.ab.code) throw new r.ab(e);
                            if (e.code === r.pT.code) throw new r.pT(e);
                            throw e
                        }
                    },
                    async disconnect() {
                        let n = await this.getProvider();
                        if (!n) throw new l.M;
                        if (n.removeListener("accountsChanged", this.onAccountsChanged.bind(this)), n.removeListener("chainChanged", this.onChainChanged), n.removeListener("disconnect", this.onDisconnect.bind(this)), n.on("connect", this.onConnect.bind(this)), t) {
                            var i, r;
                            await (null === (i = d.storage) || void 0 === i ? void 0 : i.setItem("".concat(this.id, ".disconnected"), !0)), e.target || await (null === (r = d.storage) || void 0 === r ? void 0 : r.removeItem("injected.connected"))
                        }
                    },
                    async getAccounts() {
                        let e = await this.getProvider();
                        if (!e) throw new l.M;
                        return (await e.request({
                            method: "eth_accounts"
                        })).map(e => (0, i.K)(e))
                    },
                    async getChainId() {
                        let e = await this.getProvider();
                        if (!e) throw new l.M;
                        let t = await e.request({
                            method: "eth_chainId"
                        });
                        return (0, u.J)(t)
                    },
                    async getProvider() {
                        let e;
                        let t = g();
                        return (e = "function" == typeof t.provider ? t.provider(window) : "string" == typeof t.provider ? p(window, t.provider) : t.provider) && !e.removeListener && ("off" in e && "function" == typeof e.off ? e.removeListener = e.off : e.removeListener = () => {}), e
                    },
                    async isAuthorized() {
                        try {
                            var i, r;
                            if (t && await (null === (i = d.storage) || void 0 === i ? void 0 : i.getItem("".concat(this.id, ".disconnected"))) || !e.target && !await (null === (r = d.storage) || void 0 === r ? void 0 : r.getItem("injected.connected"))) return !1;
                            if (!await this.getProvider()) {
                                if (void 0 !== n && !1 !== n) {
                                    let e = async () => (window.removeEventListener("ethereum#initialized", e), !!await this.getProvider()),
                                        t = "number" == typeof n ? n : 1e3;
                                    if (await Promise.race([new Promise(t => window.addEventListener("ethereum#initialized", () => t(e()), {
                                            once: !0
                                        })), new Promise(n => setTimeout(() => n(e()), t))])) return !0
                                }
                                throw new l.M
                            }
                            return !!(await (0, a.J)(() => (0, o.F)(() => this.getAccounts(), {
                                timeout: 100
                            }))).length
                        } catch (e) {
                            return !1
                        }
                    },
                    async switchChain(e) {
                        let {
                            chainId: t
                        } = e, n = await this.getProvider();
                        if (!n) throw new l.M;
                        let i = d.chains.find(e => e.id === t);
                        if (!i) throw new r.x3(new c.X4);
                        try {
                            return await Promise.all([n.request({
                                method: "wallet_switchEthereumChain",
                                params: [{
                                    chainId: (0, s.eC)(t)
                                }]
                            }), new Promise(e => d.emitter.once("change", n => {
                                let {
                                    chainId: i
                                } = n;
                                i === t && e()
                            }))]), i
                        } catch (e) {
                            var a, o, u, h, f;
                            if (4902 === e.code || (null == e ? void 0 : null === (o = e.data) || void 0 === o ? void 0 : null === (a = o.originalError) || void 0 === a ? void 0 : a.code) === 4902) try {
                                let {
                                    default: e,
                                    ...a
                                } = null !== (h = i.blockExplorers) && void 0 !== h ? h : {}, o = [];
                                if (e && (o = [e.url, ...Object.values(a).map(e => e.url)]), await n.request({
                                        method: "wallet_addEthereumChain",
                                        params: [{
                                            chainId: (0, s.eC)(t),
                                            chainName: i.name,
                                            nativeCurrency: i.nativeCurrency,
                                            rpcUrls: [null !== (f = null === (u = i.rpcUrls.default) || void 0 === u ? void 0 : u.http[0]) && void 0 !== f ? f : ""],
                                            blockExplorerUrls: o
                                        }]
                                    }), await this.getChainId() !== t) throw new r.ab(Error("User rejected switch after adding network."));
                                return i
                            } catch (e) {
                                throw new r.ab(e)
                            }
                            if (e.code === r.ab.code) throw new r.ab(e);
                            throw new r.x3(e)
                        }
                    },
                    async onAccountsChanged(e) {
                        if (0 === e.length) this.onDisconnect();
                        else if (d.emitter.listenerCount("connect")) {
                            var n;
                            let e = (await this.getChainId()).toString();
                            this.onConnect({
                                chainId: e
                            }), t && await (null === (n = d.storage) || void 0 === n ? void 0 : n.removeItem("".concat(this.id, ".disconnected")))
                        } else d.emitter.emit("change", {
                            accounts: e.map(e => (0, i.K)(e))
                        })
                    },
                    onChainChanged(e) {
                        let t = (0, u.J)(e);
                        d.emitter.emit("change", {
                            chainId: t
                        })
                    },
                    async onConnect(e) {
                        let t = await this.getAccounts();
                        if (0 === t.length) return;
                        let n = (0, u.J)(e.chainId);
                        d.emitter.emit("connect", {
                            accounts: t,
                            chainId: n
                        });
                        let i = await this.getProvider();
                        i && (i.removeListener("connect", this.onConnect.bind(this)), i.on("accountsChanged", this.onAccountsChanged.bind(this)), i.on("chainChanged", this.onChainChanged), i.on("disconnect", this.onDisconnect.bind(this)))
                    },
                    async onDisconnect(e) {
                        let t = await this.getProvider();
                        e && 1013 === e.code && t && (await this.getAccounts()).length || (d.emitter.emit("disconnect"), t && (t.removeListener("accountsChanged", this.onAccountsChanged.bind(this)), t.removeListener("chainChanged", this.onChainChanged), t.removeListener("disconnect", this.onDisconnect.bind(this)), t.on("connect", this.onConnect.bind(this))))
                    }
                }))
            }

            function p(e, t) {
                function n(e) {
                    return "function" == typeof t ? t(e) : "string" != typeof t || e[t]
                }
                let i = e.ethereum;
                return (null == i ? void 0 : i.providers) ? i.providers.find(e => n(e)) : i && n(i) ? i : void 0
            }
            f.type = "injected"
        },
        25634: function(e, t, n) {
            "use strict";
            let i;
            n.d(t, {
                _: function() {
                    return P
                }
            });
            var r, a = n(82690);
            let o = e => (t, n, i) => {
                    let r = i.subscribe;
                    return i.subscribe = (e, t, n) => {
                        let a = e;
                        if (t) {
                            let r = (null == n ? void 0 : n.equalityFn) || Object.is,
                                o = e(i.getState());
                            a = n => {
                                let i = e(n);
                                if (!r(o, i)) {
                                    let e = o;
                                    t(o = i, e)
                                }
                            }, (null == n ? void 0 : n.fireImmediately) && t(o, o)
                        }
                        return r(a)
                    }, e(t, n, i)
                },
                s = e => t => {
                    try {
                        let n = e(t);
                        if (n instanceof Promise) return n;
                        return {
                            then: e => s(e)(n),
                            catch (e) {
                                return this
                            }
                        }
                    } catch (e) {
                        return {
                            then(e) {
                                return this
                            },
                            catch: t => s(t)(e)
                        }
                    }
                },
                c = (e, t) => (n, i, r) => {
                    let a, o, c = {
                            getStorage: () => localStorage,
                            serialize: JSON.stringify,
                            deserialize: JSON.parse,
                            partialize: e => e,
                            version: 0,
                            merge: (e, t) => ({ ...t,
                                ...e
                            }),
                            ...t
                        },
                        l = !1,
                        u = new Set,
                        d = new Set;
                    try {
                        a = c.getStorage()
                    } catch (e) {}
                    if (!a) return e(function() {
                        for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        console.warn("[zustand persist middleware] Unable to update item '".concat(c.name, "', the given storage is currently unavailable.")), n(...t)
                    }, i, r);
                    let h = s(c.serialize),
                        f = () => {
                            let e;
                            let t = h({
                                state: c.partialize({ ...i()
                                }),
                                version: c.version
                            }).then(e => a.setItem(c.name, e)).catch(t => {
                                e = t
                            });
                            if (e) throw e;
                            return t
                        },
                        p = r.setState;
                    r.setState = (e, t) => {
                        p(e, t), f()
                    };
                    let g = e(function() {
                            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                            n(...t), f()
                        }, i, r),
                        m = () => {
                            var e;
                            if (!a) return;
                            l = !1, u.forEach(e => e(i()));
                            let t = (null == (e = c.onRehydrateStorage) ? void 0 : e.call(c, i())) || void 0;
                            return s(a.getItem.bind(a))(c.name).then(e => {
                                if (e) return c.deserialize(e)
                            }).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === c.version) return e.state;
                                    if (c.migrate) return c.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return n(o = c.merge(e, null != (t = i()) ? t : g), !0), f()
                            }).then(() => {
                                null == t || t(o, void 0), l = !0, d.forEach(e => e(o))
                            }).catch(e => {
                                null == t || t(void 0, e)
                            })
                        };
                    return r.persist = {
                        setOptions: e => {
                            c = { ...c,
                                ...e
                            }, e.getStorage && (a = e.getStorage())
                        },
                        clearStorage: () => {
                            null == a || a.removeItem(c.name)
                        },
                        getOptions: () => c,
                        rehydrate: () => m(),
                        hasHydrated: () => l,
                        onHydrate: e => (u.add(e), () => {
                            u.delete(e)
                        }),
                        onFinishHydration: e => (d.add(e), () => {
                            d.delete(e)
                        })
                    }, m(), o || g
                },
                l = (e, t) => (n, i, r) => {
                    let a, o = {
                            storage: function(e, t) {
                                let n;
                                try {
                                    n = e()
                                } catch (e) {
                                    return
                                }
                                return {
                                    getItem: e => {
                                        var i;
                                        let r = e => null === e ? null : JSON.parse(e, null == t ? void 0 : t.reviver),
                                            a = null != (i = n.getItem(e)) ? i : null;
                                        return a instanceof Promise ? a.then(r) : r(a)
                                    },
                                    setItem: (e, i) => n.setItem(e, JSON.stringify(i, null == t ? void 0 : t.replacer)),
                                    removeItem: e => n.removeItem(e)
                                }
                            }(() => localStorage),
                            partialize: e => e,
                            version: 0,
                            merge: (e, t) => ({ ...t,
                                ...e
                            }),
                            ...t
                        },
                        c = !1,
                        l = new Set,
                        u = new Set,
                        d = o.storage;
                    if (!d) return e(function() {
                        for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        console.warn("[zustand persist middleware] Unable to update item '".concat(o.name, "', the given storage is currently unavailable.")), n(...t)
                    }, i, r);
                    let h = () => {
                            let e = o.partialize({ ...i()
                            });
                            return d.setItem(o.name, {
                                state: e,
                                version: o.version
                            })
                        },
                        f = r.setState;
                    r.setState = (e, t) => {
                        f(e, t), h()
                    };
                    let p = e(function() {
                            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                            n(...t), h()
                        }, i, r),
                        g = () => {
                            var e, t;
                            if (!d) return;
                            c = !1, l.forEach(e => {
                                var t;
                                return e(null != (t = i()) ? t : p)
                            });
                            let r = (null == (t = o.onRehydrateStorage) ? void 0 : t.call(o, null != (e = i()) ? e : p)) || void 0;
                            return s(d.getItem.bind(d))(o.name).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === o.version) return e.state;
                                    if (o.migrate) return o.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return n(a = o.merge(e, null != (t = i()) ? t : p), !0), h()
                            }).then(() => {
                                null == r || r(a, void 0), a = i(), c = !0, u.forEach(e => e(a))
                            }).catch(e => {
                                null == r || r(void 0, e)
                            })
                        };
                    return r.persist = {
                        setOptions: e => {
                            o = { ...o,
                                ...e
                            }, e.storage && (d = e.storage)
                        },
                        clearStorage: () => {
                            null == d || d.removeItem(o.name)
                        },
                        getOptions: () => o,
                        rehydrate: () => g(),
                        hasHydrated: () => c,
                        onHydrate: e => (l.add(e), () => {
                            l.delete(e)
                        }),
                        onFinishHydration: e => (u.add(e), () => {
                            u.delete(e)
                        })
                    }, o.skipHydration || g(), a || p
                },
                u = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? (console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."), c(e, t)) : l(e, t),
                d = e => {
                    let t;
                    let n = new Set,
                        i = (e, i) => {
                            let r = "function" == typeof e ? e(t) : e;
                            if (!Object.is(r, t)) {
                                let e = t;
                                t = (null != i ? i : "object" != typeof r) ? r : Object.assign({}, t, r), n.forEach(n => n(t, e))
                            }
                        },
                        r = () => t,
                        a = {
                            setState: i,
                            getState: r,
                            subscribe: e => (n.add(e), () => n.delete(e)),
                            destroy: () => {
                                console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), n.clear()
                            }
                        };
                    return t = e(i, r, a), a
                },
                h = e => e ? d(e) : d;
            var f = n(91863),
                p = n(32614),
                g = function(e, t, n, i) {
                    if ("a" === n && !i) throw TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e)
                };
            class m {
                on(e, t) {
                    g(this, r, "f").on(e, t)
                }
                once(e, t) {
                    g(this, r, "f").once(e, t)
                }
                off(e, t) {
                    g(this, r, "f").off(e, t)
                }
                emit(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                    let a = n[0];
                    g(this, r, "f").emit(e, {
                        uid: this.uid,
                        ...a
                    })
                }
                listenerCount(e) {
                    return g(this, r, "f").listenerCount(e)
                }
                constructor(e) {
                    Object.defineProperty(this, "uid", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    }), r.set(this, new p)
                }
            }

            function y(e, t) {
                return JSON.parse(e, (e, n) => {
                    var i;
                    let r = n;
                    return (null == r ? void 0 : r.__type) === "bigint" && (r = BigInt(r.value)), (null == r ? void 0 : r.__type) === "Map" && (r = new Map(r.value)), null !== (i = null == t ? void 0 : t(e, r)) && void 0 !== i ? i : r
                })
            }

            function w(e, t) {
                return e.slice(0, t).join(".") || "."
            }

            function b(e, t) {
                let {
                    length: n
                } = e;
                for (let i = 0; i < n; ++i)
                    if (e[i] === t) return i + 1;
                return 0
            }

            function _(e, t, n, i) {
                return JSON.stringify(e, function(e, t) {
                    let n = "function" == typeof e,
                        i = "function" == typeof t,
                        r = [],
                        a = [];
                    return function(o, s) {
                        if ("object" == typeof s) {
                            if (r.length) {
                                let e = b(r, this);
                                0 === e ? r[r.length] = this : (r.splice(e), a.splice(e)), a[a.length] = o;
                                let n = b(r, s);
                                if (0 !== n) return i ? t.call(this, o, s, w(a, n)) : "[ref=".concat(w(a, n), "]")
                            } else r[0] = s, a[0] = o
                        }
                        return n ? e.call(this, o, s) : s
                    }
                }((e, n) => {
                    var i;
                    let r = n;
                    return "bigint" == typeof r && (r = {
                        __type: "bigint",
                        value: n.toString()
                    }), r instanceof Map && (r = {
                        __type: "Map",
                        value: Array.from(n.entries())
                    }), null !== (i = null == t ? void 0 : t(e, r)) && void 0 !== i ? i : r
                }, i), null != n ? n : void 0)
            }
            r = new WeakMap;
            let C = {
                getItem: () => null,
                setItem: () => {},
                removeItem: () => {}
            };
            var E = n(2731);
            let S = 256;
            var I = n(33816);

            function P(e) {
                var t;
                let n;
                let {
                    multiInjectedProviderDiscovery: r = !0,
                    storage: s = function(e) {
                        let {
                            deserialize: t = y,
                            key: n = "wagmi",
                            serialize: i = _,
                            storage: r = C
                        } = e;

                        function a(e) {
                            return e instanceof Promise ? e.then(e => e).catch(() => null) : e
                        }
                        return { ...r,
                            key: n,
                            async getItem(e, i) {
                                var o;
                                let s = r.getItem("".concat(n, ".").concat(e)),
                                    c = await a(s);
                                return c ? null !== (o = t(c)) && void 0 !== o ? o : null : null != i ? i : null
                            },
                            async setItem(e, t) {
                                let o = "".concat(n, ".").concat(e);
                                null === t ? await a(r.removeItem(o)) : await a(r.setItem(o, i(t)))
                            },
                            async removeItem(e) {
                                await a(r.removeItem("".concat(n, ".").concat(e)))
                            }
                        }
                    }({
                        storage: window.localStorage ? window.localStorage : C
                    }),
                    syncConnectedChain: c = !0,
                    ssr: l,
                    ...d
                } = e, p = r ? function() {
                    let e = new Set,
                        t = [],
                        n = () => (function(e) {
                            let t = t => e(t.detail);
                            return window.addEventListener("eip6963:announceProvider", t), window.dispatchEvent(new CustomEvent("eip6963:requestProvider")), () => window.removeEventListener("eip6963:announceProvider", t)
                        })(n => {
                            t.some(e => {
                                let {
                                    info: t
                                } = e;
                                return t.uuid === n.info.uuid
                            }) || (t = [...t, n], e.forEach(e => e(t, {
                                added: [n]
                            })))
                        }),
                        i = n();
                    return {
                        _listeners: () => e,
                        clear() {
                            e.forEach(e => e([], {
                                removed: [...t]
                            })), t = []
                        },
                        destroy() {
                            this.clear(), e.clear(), i()
                        },
                        findProvider(e) {
                            let {
                                rdns: n
                            } = e;
                            return t.find(e => e.info.rdns === n)
                        },
                        getProviders: () => t,
                        reset() {
                            this.clear(), i(), i = n()
                        },
                        subscribe(n) {
                            let {
                                emitImmediately: i
                            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return e.add(n), i && n(t, {
                                added: t
                            }), () => e.delete(n)
                        }
                    }
                }() : void 0, g = h(() => d.chains), w = h(() => {
                    var e, t;
                    return [...null !== (e = d.connectors) && void 0 !== e ? e : [], ...l ? [] : null !== (t = null == p ? void 0 : p.getProviders().map(P)) && void 0 !== t ? t : []].map(b)
                });

                function b(e) {
                    var t;
                    let n = new m(function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 11;
                            if (!i || S + e > 512) {
                                i = "", S = 0;
                                for (let e = 0; e < 256; e++) i += (256 + 256 * Math.random() | 0).toString(16).substring(1)
                            }
                            return i.substring(S, S++ + e)
                        }()),
                        r = { ...e({
                                emitter: n,
                                chains: g.getState(),
                                storage: s
                            }),
                            emitter: n,
                            uid: n.uid
                        };
                    return n.on("connect", k), null === (t = r.setup) || void 0 === t || t.call(r), r
                }

                function P(e) {
                    let {
                        info: t
                    } = e, n = e.provider;
                    return (0, f.L)({
                        target: { ...t,
                            id: t.rdns,
                            provider: n
                        }
                    })
                }
                let M = new Map;

                function A() {
                    return {
                        chainId: g.getState()[0].id,
                        connections: new Map,
                        current: void 0,
                        status: "disconnected"
                    }
                }
                let x = "0.0.0-canary-";
                n = I.i.startsWith(x) ? parseInt(I.i.replace(x, "")) : parseInt(null !== (t = I.i.split(".")[0]) && void 0 !== t ? t : "0");
                let O = h(o(s ? u(A, {
                    migrate(e, t) {
                        if (t === n) return e;
                        let i = A(),
                            r = e && "object" == typeof e && "chainId" in e && "number" == typeof e.chainId ? e.chainId : i.chainId;
                        return { ...i,
                            chainId: r
                        }
                    },
                    name: "store",
                    partialize: e => ({
                        connections: {
                            __type: "Map",
                            value: Array.from(e.connections.entries()).map(e => {
                                let [t, n] = e, {
                                    id: i,
                                    name: r,
                                    type: a,
                                    uid: o
                                } = n.connector;
                                return [t, { ...n,
                                    connector: {
                                        id: i,
                                        name: r,
                                        type: a,
                                        uid: o
                                    }
                                }]
                            })
                        },
                        chainId: e.chainId,
                        current: e.current
                    }),
                    skipHydration: l,
                    storage: s,
                    version: n
                }) : A));

                function q(e) {
                    O.setState(t => {
                        var n, i;
                        let r = t.connections.get(e.uid);
                        return r ? { ...t,
                            connections: new Map(t.connections).set(e.uid, {
                                accounts: null !== (n = e.accounts) && void 0 !== n ? n : r.accounts,
                                chainId: null !== (i = e.chainId) && void 0 !== i ? i : r.chainId,
                                connector: r.connector
                            })
                        } : t
                    })
                }

                function k(e) {
                    "connecting" !== O.getState().status && "reconnecting" !== O.getState().status && O.setState(t => {
                        let n = w.getState().find(t => t.uid === e.uid);
                        return n ? { ...t,
                            connections: new Map(t.connections).set(e.uid, {
                                accounts: e.accounts,
                                chainId: e.chainId,
                                connector: n
                            }),
                            current: e.uid,
                            status: "connected"
                        } : t
                    })
                }
                return c && O.subscribe(e => {
                    var t;
                    let {
                        connections: n,
                        current: i
                    } = e;
                    return i ? null === (t = n.get(i)) || void 0 === t ? void 0 : t.chainId : void 0
                }, e => {
                    if (g.getState().some(t => t.id === e)) return O.setState(t => ({ ...t,
                        chainId: null != e ? e : t.chainId
                    }))
                }), null == p || p.subscribe(e => {
                    let t = new Map;
                    for (let e of w.getState()) t.set(e.id, !0);
                    let n = [];
                    for (let i of e) {
                        let e = b(P(i));
                        t.has(e.id) || n.push(e)
                    }
                    w.setState(e => [...e, ...n], !0)
                }), {
                    get chains() {
                        return g.getState()
                    },
                    get connectors() {
                        return w.getState()
                    },
                    storage: s,
                    getClient: function() {
                        var e, t;
                        let n, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = null !== (e = i.chainId) && void 0 !== e ? e : O.getState().chainId,
                            o = g.getState().find(e => e.id === r);
                        if (i.chainId && !o) throw new E.X4; {
                            let e = M.get(O.getState().chainId);
                            if (e && !o) return e;
                            if (!o) throw new E.X4
                        } {
                            let e = M.get(r);
                            if (e) return e
                        }
                        if (d.client) n = d.client({
                            chain: o
                        });
                        else {
                            let e = o.id,
                                i = g.getState().map(e => e.id),
                                r = {};
                            for (let [t, n] of Object.entries(d))
                                if ("chains" !== t && "client" !== t && "connectors" !== t && "transports" !== t) {
                                    if ("object" == typeof n) {
                                        if (e in n) r[t] = n[e];
                                        else {
                                            if (i.some(e => e in n)) continue;
                                            r[t] = n
                                        }
                                    } else r[t] = n
                                }
                            n = (0, a.e)({ ...r,
                                chain: o,
                                batch: null !== (t = r.batch) && void 0 !== t ? t : {
                                    multicall: !0
                                },
                                transport: t => d.transports[e]({ ...t,
                                    connectors: w
                                })
                            })
                        }
                        return M.set(r, n), n
                    },
                    get state() {
                        return O.getState()
                    },
                    setState(e) {
                        let t;
                        t = "function" == typeof e ? e(O.getState()) : e;
                        let n = A();
                        "object" != typeof t && (t = n), Object.keys(n).some(e => !(e in t)) && (t = n), O.setState(t, !0)
                    },
                    subscribe: (e, t, n) => O.subscribe(e, t, n ? { ...n,
                        fireImmediately: n.emitImmediately
                    } : void 0),
                    _internal: {
                        mipd: p,
                        store: O,
                        ssr: !!l,
                        syncConnectedChain: c,
                        transports: d.transports,
                        chains: {
                            setState(e) {
                                let t = "function" == typeof e ? e(g.getState()) : e;
                                if (0 !== t.length) return g.setState(t, !0)
                            },
                            subscribe: e => g.subscribe(e)
                        },
                        connectors: {
                            providerDetailToConnector: P,
                            setup: b,
                            setState: e => w.setState("function" == typeof e ? e(w.getState()) : e, !0),
                            subscribe: e => w.subscribe(e)
                        },
                        events: {
                            change: q,
                            connect: k,
                            disconnect: function e(t) {
                                O.setState(n => {
                                    let i = n.connections.get(t.uid);
                                    if (i && (i.connector.emitter.off("change", q), i.connector.emitter.off("disconnect", e), i.connector.emitter.on("connect", k)), n.connections.delete(t.uid), 0 === n.connections.size) return { ...n,
                                        connections: new Map,
                                        current: void 0,
                                        status: "disconnected"
                                    };
                                    let r = n.connections.values().next().value;
                                    return { ...n,
                                        connections: new Map(n.connections),
                                        current: r.connector.uid
                                    }
                                })
                            }
                        }
                    }
                }
            }
        },
        2731: function(e, t, n) {
            "use strict";
            n.d(t, {
                JK: function() {
                    return s
                },
                X4: function() {
                    return r
                },
                aH: function() {
                    return o
                },
                wi: function() {
                    return a
                }
            });
            var i = n(1257);
            class r extends i.G {
                constructor() {
                    super("Chain not configured."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ChainNotConfiguredError"
                    })
                }
            }
            class a extends i.G {
                constructor() {
                    super("Connector already connected."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ConnectorAlreadyConnectedError"
                    })
                }
            }
            class o extends i.G {
                constructor() {
                    super("Connector not connected."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ConnectorNotConnectedError"
                    })
                }
            }
            class s extends i.G {
                constructor({
                    address: e,
                    connector: t
                }) {
                    super('Account "'.concat(e, '" not found for connector "').concat(t.name, '".')), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ConnectorAccountNotFoundError"
                    })
                }
            }
        },
        34497: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return r
                }
            });
            var i = n(1257);
            class r extends i.G {
                constructor() {
                    super("Provider not found."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ProviderNotFoundError"
                    })
                }
            }
        },
        95953: function(e, t, n) {
            "use strict";

            function i(e) {
                if ("string" == typeof e) return Number.parseInt(e, "0x" === e.trim().substring(0, 2) ? 16 : 10);
                if ("bigint" == typeof e) return Number(e);
                if ("number" == typeof e) return e;
                throw Error('Cannot normalize chainId "'.concat(e, '" of type "').concat(typeof e, '"'))
            }
            n.d(t, {
                J: function() {
                    return i
                }
            })
        },
        21254: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return i
                }
            });
            let i = (0, n(55597).a)({
                id: 1,
                name: "Ethereum",
                nativeCurrency: {
                    name: "Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://cloudflare-eth.com"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Etherscan",
                        url: "https://etherscan.io",
                        apiUrl: "https://api.etherscan.io/api"
                    }
                },
                contracts: {
                    ensRegistry: {
                        address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
                    },
                    ensUniversalResolver: {
                        address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67",
                        blockCreated: 19258213
                    },
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 14353601
                    }
                }
            })
        },
        17364: function(e, t, n) {
            "use strict";
            n.d(t, {
                F: function() {
                    return i
                }
            });
            let i = (0, n(55597).a)({
                id: 11155111,
                name: "Sepolia",
                nativeCurrency: {
                    name: "Sepolia Ether",
                    symbol: "SEP",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://rpc.sepolia.org"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Etherscan",
                        url: "https://sepolia.etherscan.io",
                        apiUrl: "https://api-sepolia.etherscan.io/api"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 751532
                    },
                    ensRegistry: {
                        address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
                    },
                    ensUniversalResolver: {
                        address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",
                        blockCreated: 5317080
                    }
                },
                testnet: !0
            })
        },
        82690: function(e, t, n) {
            "use strict";
            let i;
            n.d(t, {
                e: function() {
                    return o
                }
            });
            var r = n(79561);
            let a = 256;

            function o(e) {
                var t;
                let {
                    batch: n,
                    cacheTime: o = null !== (t = e.pollingInterval) && void 0 !== t ? t : 4e3,
                    key: s = "base",
                    name: c = "Base Client",
                    pollingInterval: l = 4e3,
                    type: u = "base"
                } = e, d = e.chain, h = e.account ? (0, r.T)(e.account) : void 0, {
                    config: f,
                    request: p,
                    value: g
                } = e.transport({
                    chain: d,
                    pollingInterval: l
                }), m = {
                    account: h,
                    batch: n,
                    cacheTime: o,
                    chain: d,
                    key: s,
                    name: c,
                    pollingInterval: l,
                    request: p,
                    transport: { ...f,
                        ...g
                    },
                    type: u,
                    uid: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 11;
                        if (!i || a + e > 512) {
                            i = "", a = 0;
                            for (let e = 0; e < 256; e++) i += (256 + 256 * Math.random() | 0).toString(16).substring(1)
                        }
                        return i.substring(a, a++ + e)
                    }()
                };
                return Object.assign(m, {
                    extend: function e(t) {
                        return n => {
                            let i = n(t);
                            for (let e in m) delete i[e];
                            let r = { ...t,
                                ...i
                            };
                            return Object.assign(r, {
                                extend: e(r)
                            })
                        }
                    }(m)
                })
            }
        },
        27530: function(e, t, n) {
            "use strict";
            n.d(t, {
                q: function() {
                    return s
                }
            });
            var i = n(80230),
                r = n(37825),
                a = n(24473),
                o = n(42179);

            function s(e, t) {
                let {
                    key: n,
                    name: s,
                    request: c,
                    retryCount: l = 3,
                    retryDelay: u = 150,
                    timeout: d,
                    type: h
                } = e;
                return {
                    config: {
                        key: n,
                        name: s,
                        request: c,
                        retryCount: l,
                        retryDelay: u,
                        timeout: d,
                        type: h
                    },
                    request: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return async function(n) {
                            let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                {
                                    retryDelay: c = 150,
                                    retryCount: l = 3
                                } = { ...t,
                                    ...s
                                };
                            return (0, o.J)(async () => {
                                try {
                                    return await e(n)
                                } catch (e) {
                                    switch (e.code) {
                                        case a.s7.code:
                                            throw new a.s7(e);
                                        case a.B.code:
                                            throw new a.B(e);
                                        case a.LX.code:
                                            throw new a.LX(e);
                                        case a.nY.code:
                                            throw new a.nY(e);
                                        case a.XS.code:
                                            throw new a.XS(e);
                                        case a.yR.code:
                                            throw new a.yR(e);
                                        case a.Og.code:
                                            throw new a.Og(e);
                                        case a.pT.code:
                                            throw new a.pT(e);
                                        case a.KB.code:
                                            throw new a.KB(e);
                                        case a.gS.code:
                                            throw new a.gS(e);
                                        case a.Pv.code:
                                            throw new a.Pv(e);
                                        case a.GD.code:
                                            throw new a.GD(e);
                                        case a.ab.code:
                                            throw new a.ab(e);
                                        case a.PE.code:
                                            throw new a.PE(e);
                                        case a.Ts.code:
                                            throw new a.Ts(e);
                                        case a.u5.code:
                                            throw new a.u5(e);
                                        case a.I0.code:
                                            throw new a.I0(e);
                                        case a.x3.code:
                                            throw new a.x3(e);
                                        case 5e3:
                                            throw new a.ab(e);
                                        default:
                                            if (e instanceof i.G) throw e;
                                            throw new a.ir(e)
                                    }
                                }
                            }, {
                                delay: e => {
                                    let {
                                        count: t,
                                        error: n
                                    } = e;
                                    if (n && n instanceof r.Gg) {
                                        var i;
                                        let e = null == n ? void 0 : null === (i = n.headers) || void 0 === i ? void 0 : i.get("Retry-After");
                                        if (null == e ? void 0 : e.match(/\d/)) return 1e3 * parseInt(e)
                                    }
                                    return ~~(1 << t) * c
                                },
                                retryCount: l,
                                shouldRetry: e => {
                                    let {
                                        error: t
                                    } = e;
                                    return "code" in t && "number" == typeof t.code ? -1 === t.code || t.code === a.Pv.code || t.code === a.XS.code : !(t instanceof r.Gg) || !t.status || 403 === t.status || 408 === t.status || 413 === t.status || 429 === t.status || 500 === t.status || 502 === t.status || 503 === t.status || 504 === t.status
                                }
                            })
                        }
                    }(c, {
                        retryCount: l,
                        retryDelay: u
                    }),
                    value: t
                }
            }
        },
        945: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return d
                }
            });
            var i = n(37825),
                r = n(80230);
            class a extends r.G {
                constructor() {
                    super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", {
                        docsPath: "/docs/clients/intro"
                    })
                }
            }
            var o = n(5493),
                s = n(9416),
                c = n(92791);
            let l = {
                current: 0,
                take() {
                    return this.current++
                },
                reset() {
                    this.current = 0
                }
            };
            var u = n(27530);

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        batch: n,
                        fetchOptions: r,
                        key: d = "http",
                        name: h = "HTTP JSON-RPC",
                        retryDelay: f
                    } = t;
                return p => {
                    var g, m;
                    let {
                        chain: y,
                        retryCount: w,
                        timeout: b
                    } = p, {
                        batchSize: _ = 1e3,
                        wait: C = 0
                    } = "object" == typeof n ? n : {}, E = null !== (g = t.retryCount) && void 0 !== g ? g : w, S = null !== (m = null != b ? b : t.timeout) && void 0 !== m ? m : 1e4, I = e || (null == y ? void 0 : y.rpcUrls.default.http[0]);
                    if (!I) throw new a;
                    let P = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return {
                            async request(n) {
                                var r, a;
                                let {
                                    body: o,
                                    fetchOptions: u = {},
                                    timeout: d = null !== (r = t.timeout) && void 0 !== r ? r : 1e4
                                } = n, {
                                    headers: h,
                                    method: f,
                                    signal: p
                                } = { ...t.fetchOptions,
                                    ...u
                                };
                                try {
                                    let t;
                                    let n = await (0, s.F)(async t => {
                                        var n;
                                        let {
                                            signal: i
                                        } = t;
                                        return await fetch(e, { ...u,
                                            body: Array.isArray(o) ? (0, c.P)(o.map(e => {
                                                var t;
                                                return {
                                                    jsonrpc: "2.0",
                                                    id: null !== (t = e.id) && void 0 !== t ? t : l.take(),
                                                    ...e
                                                }
                                            })) : (0, c.P)({
                                                jsonrpc: "2.0",
                                                id: null !== (n = o.id) && void 0 !== n ? n : l.take(),
                                                ...o
                                            }),
                                            headers: { ...h,
                                                "Content-Type": "application/json"
                                            },
                                            method: f || "POST",
                                            signal: p || (d > 0 ? i : void 0)
                                        })
                                    }, {
                                        errorInstance: new i.W5({
                                            body: o,
                                            url: e
                                        }),
                                        timeout: d,
                                        signal: !0
                                    });
                                    if (t = (null === (a = n.headers.get("Content-Type")) || void 0 === a ? void 0 : a.startsWith("application/json")) ? await n.json() : await n.text(), !n.ok) throw new i.Gg({
                                        body: o,
                                        details: (0, c.P)(t.error) || n.statusText,
                                        headers: n.headers,
                                        status: n.status,
                                        url: e
                                    });
                                    return t
                                } catch (t) {
                                    if (t instanceof i.Gg || t instanceof i.W5) throw t;
                                    throw new i.Gg({
                                        body: o,
                                        details: t.message,
                                        url: e
                                    })
                                }
                            }
                        }
                    }(I, {
                        fetchOptions: r,
                        timeout: S
                    });
                    return (0, u.q)({
                        key: d,
                        name: h,
                        async request(t) {
                            let {
                                method: r,
                                params: a
                            } = t, s = {
                                method: r,
                                params: a
                            }, {
                                schedule: c
                            } = (0, o.S)({
                                id: "".concat(e),
                                wait: C,
                                shouldSplitBatch: e => e.length > _,
                                fn: e => P.request({
                                    body: e
                                }),
                                sort: (e, t) => e.id - t.id
                            }), l = async e => n ? c(e) : [await P.request({
                                body: e
                            })], [{
                                error: u,
                                result: d
                            }] = await l(s);
                            if (u) throw new i.bs({
                                body: s,
                                error: u,
                                url: I
                            });
                            return d
                        },
                        retryCount: E,
                        retryDelay: f,
                        timeout: S,
                        type: "http"
                    }, {
                        fetchOptions: r,
                        url: I
                    })
                }
            }
        },
        55597: function(e, t, n) {
            "use strict";

            function i(e) {
                return {
                    formatters: void 0,
                    fees: void 0,
                    serializers: void 0,
                    ...e
                }
            }
            n.d(t, {
                a: function() {
                    return i
                }
            })
        },
        42179: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return r
                }
            });
            var i = n(83440);

            function r(e) {
                let {
                    delay: t = 100,
                    retryCount: n = 2,
                    shouldRetry: r = () => !0
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return new Promise((a, o) => {
                    let s = async function() {
                        let {
                            count: c = 0
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, l = async e => {
                            let {
                                error: n
                            } = e, r = "function" == typeof t ? t({
                                count: c,
                                error: n
                            }) : t;
                            r && await (0, i.D)(r), s({
                                count: c + 1
                            })
                        };
                        try {
                            let t = await e();
                            a(t)
                        } catch (e) {
                            if (c < n && await r({
                                    count: c,
                                    error: e
                                })) return l({
                                error: e
                            });
                            o(e)
                        }
                    };
                    s()
                })
            }
        },
        9416: function(e, t, n) {
            "use strict";

            function i(e, t) {
                let {
                    errorInstance: n = Error("timed out"),
                    timeout: i,
                    signal: r
                } = t;
                return new Promise((t, a) => {
                    (async () => {
                        let o;
                        try {
                            let s = new AbortController;
                            i > 0 && (o = setTimeout(() => {
                                r ? s.abort() : a(n)
                            }, i)), t(await e({
                                signal: null == s ? void 0 : s.signal
                            }))
                        } catch (e) {
                            "AbortError" === e.name && a(n), a(e)
                        } finally {
                            clearTimeout(o)
                        }
                    })()
                })
            }
            n.d(t, {
                F: function() {
                    return i
                }
            })
        },
        83440: function(e, t, n) {
            "use strict";
            async function i(e) {
                return new Promise(t => setTimeout(t, e))
            }
            n.d(t, {
                D: function() {
                    return i
                }
            })
        },
        11169: function(e, t, n) {
            "use strict";
            n.d(t, {
                $: function() {
                    return d
                }
            });
            var i = n(20568),
                r = n(2731);
            async function a(e, t) {
                let n;
                if ((n = "function" == typeof t.connector ? e._internal.connectors.setup(t.connector) : t.connector).uid === e.state.current) throw new r.wi;
                try {
                    var i;
                    e.setState(e => ({ ...e,
                        status: "connecting"
                    })), n.emitter.emit("message", {
                        type: "connecting"
                    });
                    let r = await n.connect({
                            chainId: t.chainId
                        }),
                        a = r.accounts;
                    return n.emitter.off("connect", e._internal.events.connect), n.emitter.on("change", e._internal.events.change), n.emitter.on("disconnect", e._internal.events.disconnect), await (null === (i = e.storage) || void 0 === i ? void 0 : i.setItem("recentConnectorId", n.id)), e.setState(e => ({ ...e,
                        connections: new Map(e.connections).set(n.uid, {
                            accounts: a,
                            chainId: r.chainId,
                            connector: n
                        }),
                        current: n.uid,
                        status: "connected"
                    })), {
                        accounts: a,
                        chainId: r.chainId
                    }
                } catch (t) {
                    throw e.setState(e => ({ ...e,
                        status: e.current ? "connected" : "disconnected"
                    })), t
                }
            }
            var o = n(64090),
                s = n(42887),
                c = n(69022);
            let l = [];

            function u(e) {
                let t = e.connectors;
                return (0, c.v)(l, t) ? l : (l = t, t)
            }

            function d() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        mutation: t
                    } = e,
                    n = (0, s.Z)(e),
                    r = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = (0, s.Z)(e);
                        return (0, o.useSyncExternalStore)(e => (function(e, t) {
                            let {
                                onChange: n
                            } = t;
                            return e._internal.connectors.subscribe((e, t) => {
                                n(Object.values(e), t)
                            })
                        })(t, {
                            onChange: e
                        }), () => u(t), () => u(t))
                    }({
                        config: n
                    }),
                    {
                        mutate: c,
                        mutateAsync: l,
                        ...d
                    } = (0, i.D)({ ...t,
                        mutationFn: e => a(n, e),
                        mutationKey: ["connect"]
                    });
                return (0, o.useEffect)(() => n.subscribe(e => {
                    let {
                        status: t
                    } = e;
                    return t
                }, (e, t) => {
                    "connected" === t && "disconnected" === e && d.reset()
                }), [n, d]), { ...d,
                    connect: c,
                    connectAsync: l,
                    connectors: r
                }
            }
        }
    }
]);