"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [174], {
        60206: function(e, t, s) {
            s.d(t, {
                ConfigCtrl: function() {
                    return O
                },
                zv: function() {
                    return b
                },
                uA: function() {
                    return y
                },
                ExplorerCtrl: function() {
                    return K
                },
                jb: function() {
                    return B
                },
                OptionsCtrl: function() {
                    return I
                },
                AV: function() {
                    return m
                },
                ThemeCtrl: function() {
                    return Z
                },
                ToastCtrl: function() {
                    return ee
                }
            }), Symbol();
            let n = Symbol(),
                o = Object.getPrototypeOf,
                l = new WeakMap,
                r = e => e && (l.has(e) ? l.get(e) : o(e) === Object.prototype || o(e) === Array.prototype),
                a = e => r(e) && e[n] || null,
                i = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    l.set(e, t)
                },
                c = e => "object" == typeof e && null !== e,
                d = new WeakMap,
                u = new WeakSet,
                [p] = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.is,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (e, t) => new Proxy(e, t),
                        s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e => c(e) && !u.has(e) && (Array.isArray(e) || !(Symbol.iterator in e)) && !(e instanceof WeakMap) && !(e instanceof WeakSet) && !(e instanceof Error) && !(e instanceof Number) && !(e instanceof Date) && !(e instanceof String) && !(e instanceof RegExp) && !(e instanceof ArrayBuffer),
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e => {
                            switch (e.status) {
                                case "fulfilled":
                                    return e.value;
                                case "rejected":
                                    throw e.reason;
                                default:
                                    throw e
                            }
                        },
                        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new WeakMap,
                        l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : function(e, t) {
                            let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n,
                                r = o.get(e);
                            if ((null == r ? void 0 : r[0]) === t) return r[1];
                            let a = Array.isArray(e) ? [] : Object.create(Object.getPrototypeOf(e));
                            return i(a, !0), o.set(e, [t, a]), Reflect.ownKeys(e).forEach(t => {
                                if (Object.getOwnPropertyDescriptor(a, t)) return;
                                let n = Reflect.get(e, t),
                                    o = {
                                        value: n,
                                        enumerable: !0,
                                        configurable: !0
                                    };
                                if (u.has(n)) i(n, !1);
                                else if (n instanceof Promise) delete o.value, o.get = () => s(n);
                                else if (d.has(n)) {
                                    let [e, t] = d.get(n);
                                    o.value = l(e, t(), s)
                                }
                                Object.defineProperty(a, t, o)
                            }), Object.preventExtensions(a)
                        },
                        r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new WeakMap,
                        p = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : [1, 1],
                        h = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : n => {
                            if (!c(n)) throw Error("object required");
                            let o = r.get(n);
                            if (o) return o;
                            let i = p[0],
                                g = new Set,
                                f = function(e) {
                                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ++p[0];
                                    i !== t && (i = t, g.forEach(s => s(e, t)))
                                },
                                m = p[1],
                                b = e => (t, s) => {
                                    let n = [...t];
                                    n[1] = [e, ...n[1]], f(n, s)
                                },
                                v = new Map,
                                y = (e, t) => {
                                    if (v.has(e)) throw Error("prop listener already exists");
                                    if (g.size) {
                                        let s = t[3](b(e));
                                        v.set(e, [t, s])
                                    } else v.set(e, [t])
                                },
                                w = e => {
                                    var t;
                                    let s = v.get(e);
                                    s && (v.delete(e), null == (t = s[1]) || t.call(s))
                                },
                                I = Array.isArray(n) ? [] : Object.create(Object.getPrototypeOf(n)),
                                C = t(I, {
                                    deleteProperty(e, t) {
                                        let s = Reflect.get(e, t);
                                        w(t);
                                        let n = Reflect.deleteProperty(e, t);
                                        return n && f(["delete", [t], s]), n
                                    },
                                    set(t, n, o, l) {
                                        let i = Reflect.has(t, n),
                                            p = Reflect.get(t, n, l);
                                        if (i && (e(p, o) || r.has(o) && e(p, r.get(o)))) return !0;
                                        w(n), c(o) && (o = a(o) || o);
                                        let g = o;
                                        if (o instanceof Promise) o.then(e => {
                                            o.status = "fulfilled", o.value = e, f(["resolve", [n], e])
                                        }).catch(e => {
                                            o.status = "rejected", o.reason = e, f(["reject", [n], e])
                                        });
                                        else {
                                            !d.has(o) && s(o) && (g = h(o));
                                            let e = !u.has(g) && d.get(g);
                                            e && y(n, e)
                                        }
                                        return Reflect.set(t, n, g, l), f(["set", [n], o, p]), !0
                                    }
                                });
                            r.set(n, C);
                            let O = [I, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ++p[1];
                                return m === e || g.size || (m = e, v.forEach(t => {
                                    let [s] = t, n = s[1](e);
                                    n > i && (i = n)
                                })), i
                            }, l, e => (g.add(e), 1 === g.size && v.forEach((e, t) => {
                                let [s, n] = e;
                                if (n) throw Error("remove already exists");
                                let o = s[3](b(t));
                                v.set(t, [s, o])
                            }), () => {
                                g.delete(e), 0 === g.size && v.forEach((e, t) => {
                                    let [s, n] = e;
                                    n && (n(), v.set(t, [s]))
                                })
                            })];
                            return d.set(C, O), Reflect.ownKeys(n).forEach(e => {
                                let t = Object.getOwnPropertyDescriptor(n, e);
                                "value" in t && (C[e] = n[e], delete t.value, delete t.writable), Object.defineProperty(I, e, t)
                            }), C
                        };
                    return [h, d, u, e, t, s, n, o, l, r, p]
                }();

            function h() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return p(e)
            }

            function g(e, t, s) {
                let n;
                let o = d.get(e);
                o || console.warn("Please use proxy object");
                let l = [],
                    r = o[3],
                    a = !1,
                    i = r(e => {
                        if (l.push(e), s) {
                            t(l.splice(0));
                            return
                        }
                        n || (n = Promise.resolve().then(() => {
                            n = void 0, a && t(l.splice(0))
                        }))
                    });
                return a = !0, () => {
                    a = !1, i()
                }
            }
            let f = h({
                    history: ["ConnectWallet"],
                    view: "ConnectWallet",
                    data: void 0
                }),
                m = {
                    state: f,
                    subscribe: e => g(f, () => e(f)),
                    push(e, t) {
                        e !== f.view && (f.view = e, t && (f.data = t), f.history.push(e))
                    },
                    reset(e) {
                        f.view = e, f.history = [e]
                    },
                    replace(e) {
                        f.history.length > 1 && (f.history[f.history.length - 1] = e, f.view = e)
                    },
                    goBack() {
                        if (f.history.length > 1) {
                            f.history.pop();
                            let [e] = f.history.slice(-1);
                            f.view = e
                        }
                    },
                    setData(e) {
                        f.data = e
                    }
                },
                b = {
                    WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
                    WCM_VERSION: "WCM_VERSION",
                    RECOMMENDED_WALLET_AMOUNT: 9,
                    isMobile: () => !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),
                    isAndroid: () => b.isMobile() && navigator.userAgent.toLowerCase().includes("android"),
                    isIos() {
                        let e = navigator.userAgent.toLowerCase();
                        return b.isMobile() && (e.includes("iphone") || e.includes("ipad"))
                    },
                    isHttpUrl: e => e.startsWith("http://") || e.startsWith("https://"),
                    isArray: e => Array.isArray(e) && e.length > 0,
                    formatNativeUrl(e, t, s) {
                        if (b.isHttpUrl(e)) return this.formatUniversalUrl(e, t, s);
                        let n = e;
                        n.includes("://") || (n = e.replaceAll("/", "").replaceAll(":", ""), n = "".concat(n, "://")), n.endsWith("/") || (n = "".concat(n, "/")), this.setWalletConnectDeepLink(n, s);
                        let o = encodeURIComponent(t);
                        return "".concat(n, "wc?uri=").concat(o)
                    },
                    formatUniversalUrl(e, t, s) {
                        if (!b.isHttpUrl(e)) return this.formatNativeUrl(e, t, s);
                        let n = e;
                        n.endsWith("/") || (n = "".concat(n, "/")), this.setWalletConnectDeepLink(n, s);
                        let o = encodeURIComponent(t);
                        return "".concat(n, "wc?uri=").concat(o)
                    },
                    wait: async e => new Promise(t => {
                        setTimeout(t, e)
                    }),
                    openHref(e, t) {
                        window.open(e, t, "noreferrer noopener")
                    },
                    setWalletConnectDeepLink(e, t) {
                        try {
                            localStorage.setItem(b.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
                                href: e,
                                name: t
                            }))
                        } catch (e) {
                            console.info("Unable to set WalletConnect deep link")
                        }
                    },
                    setWalletConnectAndroidDeepLink(e) {
                        try {
                            let [t] = e.split("?");
                            localStorage.setItem(b.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
                                href: t,
                                name: "Android"
                            }))
                        } catch (e) {
                            console.info("Unable to set WalletConnect android deep link")
                        }
                    },
                    removeWalletConnectDeepLink() {
                        try {
                            localStorage.removeItem(b.WALLETCONNECT_DEEPLINK_CHOICE)
                        } catch (e) {
                            console.info("Unable to remove WalletConnect deep link")
                        }
                    },
                    setModalVersionInStorage() {
                        try {
                            "u" > typeof localStorage && localStorage.setItem(b.WCM_VERSION, "2.6.2")
                        } catch (e) {
                            console.info("Unable to set Web3Modal version in storage")
                        }
                    },
                    getWalletRouterData() {
                        var e;
                        let t = null == (e = m.state.data) ? void 0 : e.Wallet;
                        if (!t) throw Error('Missing "Wallet" view data');
                        return t
                    }
                },
                v = h({
                    enabled: "u" > typeof location && (location.hostname.includes("localhost") || location.protocol.includes("https")),
                    userSessionId: "",
                    events: [],
                    connectedWalletId: void 0
                }),
                y = {
                    state: v,
                    subscribe: e => g(v.events, () => e(function(e, t) {
                        let s = d.get(e);
                        s || console.warn("Please use proxy object");
                        let [n, o, l] = s;
                        return l(n, o(), void 0)
                    }(v.events[v.events.length - 1]))),
                    initialize() {
                        v.enabled && "u" > typeof(null == crypto ? void 0 : crypto.randomUUID) && (v.userSessionId = crypto.randomUUID())
                    },
                    setConnectedWalletId(e) {
                        v.connectedWalletId = e
                    },
                    click(e) {
                        if (v.enabled) {
                            let t = {
                                type: "CLICK",
                                name: e.name,
                                userSessionId: v.userSessionId,
                                timestamp: Date.now(),
                                data: e
                            };
                            v.events.push(t)
                        }
                    },
                    track(e) {
                        if (v.enabled) {
                            let t = {
                                type: "TRACK",
                                name: e.name,
                                userSessionId: v.userSessionId,
                                timestamp: Date.now(),
                                data: e
                            };
                            v.events.push(t)
                        }
                    },
                    view(e) {
                        if (v.enabled) {
                            let t = {
                                type: "VIEW",
                                name: e.name,
                                userSessionId: v.userSessionId,
                                timestamp: Date.now(),
                                data: e
                            };
                            v.events.push(t)
                        }
                    }
                },
                w = h({
                    chains: void 0,
                    walletConnectUri: void 0,
                    isAuth: !1,
                    isCustomDesktop: !1,
                    isCustomMobile: !1,
                    isDataLoaded: !1,
                    isUiLoaded: !1
                }),
                I = {
                    state: w,
                    subscribe: e => g(w, () => e(w)),
                    setChains(e) {
                        w.chains = e
                    },
                    setWalletConnectUri(e) {
                        w.walletConnectUri = e
                    },
                    setIsCustomDesktop(e) {
                        w.isCustomDesktop = e
                    },
                    setIsCustomMobile(e) {
                        w.isCustomMobile = e
                    },
                    setIsDataLoaded(e) {
                        w.isDataLoaded = e
                    },
                    setIsUiLoaded(e) {
                        w.isUiLoaded = e
                    },
                    setIsAuth(e) {
                        w.isAuth = e
                    }
                },
                C = h({
                    projectId: "",
                    mobileWallets: void 0,
                    desktopWallets: void 0,
                    walletImages: void 0,
                    chains: void 0,
                    enableAuthMode: !1,
                    enableExplorer: !0,
                    explorerExcludedWalletIds: void 0,
                    explorerRecommendedWalletIds: void 0,
                    termsOfServiceUrl: void 0,
                    privacyPolicyUrl: void 0
                }),
                O = {
                    state: C,
                    subscribe: e => g(C, () => e(C)),
                    setConfig(e) {
                        var t, s;
                        y.initialize(), I.setChains(e.chains), I.setIsAuth(!!e.enableAuthMode), I.setIsCustomMobile(!!(null == (t = e.mobileWallets) ? void 0 : t.length)), I.setIsCustomDesktop(!!(null == (s = e.desktopWallets) ? void 0 : s.length)), b.setModalVersionInStorage(), Object.assign(C, e)
                    }
                };
            var W = Object.defineProperty,
                E = Object.getOwnPropertySymbols,
                j = Object.prototype.hasOwnProperty,
                L = Object.prototype.propertyIsEnumerable,
                A = (e, t, s) => t in e ? W(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: s
                }) : e[t] = s,
                k = (e, t) => {
                    for (var s in t || (t = {})) j.call(t, s) && A(e, s, t[s]);
                    if (E)
                        for (var s of E(t)) L.call(t, s) && A(e, s, t[s]);
                    return e
                };
            let M = "https://explorer-api.walletconnect.com",
                U = "js-2.6.2";
            async function D(e, t) {
                let s = k({
                        sdkType: "wcm",
                        sdkVersion: U
                    }, t),
                    n = new URL(e, M);
                return n.searchParams.append("projectId", O.state.projectId), Object.entries(s).forEach(e => {
                    let [t, s] = e;
                    s && n.searchParams.append(t, String(s))
                }), (await fetch(n)).json()
            }
            let P = {
                getDesktopListings: async e => D("/w3m/v1/getDesktopListings", e),
                getMobileListings: async e => D("/w3m/v1/getMobileListings", e),
                getInjectedListings: async e => D("/w3m/v1/getInjectedListings", e),
                getAllListings: async e => D("/w3m/v1/getAllListings", e),
                getWalletImageUrl: e => "".concat(M, "/w3m/v1/getWalletImage/").concat(e, "?projectId=").concat(O.state.projectId, "&sdkType=").concat("wcm", "&sdkVersion=").concat(U),
                getAssetImageUrl: e => "".concat(M, "/w3m/v1/getAssetImage/").concat(e, "?projectId=").concat(O.state.projectId, "&sdkType=").concat("wcm", "&sdkVersion=").concat(U)
            };
            var S = Object.defineProperty,
                N = Object.getOwnPropertySymbols,
                T = Object.prototype.hasOwnProperty,
                x = Object.prototype.propertyIsEnumerable,
                R = (e, t, s) => t in e ? S(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: s
                }) : e[t] = s,
                _ = (e, t) => {
                    for (var s in t || (t = {})) T.call(t, s) && R(e, s, t[s]);
                    if (N)
                        for (var s of N(t)) x.call(t, s) && R(e, s, t[s]);
                    return e
                };
            let V = b.isMobile(),
                H = h({
                    wallets: {
                        listings: [],
                        total: 0,
                        page: 1
                    },
                    search: {
                        listings: [],
                        total: 0,
                        page: 1
                    },
                    recomendedWallets: []
                }),
                K = {
                    state: H,
                    async getRecomendedWallets() {
                        let {
                            explorerRecommendedWalletIds: e,
                            explorerExcludedWalletIds: t
                        } = O.state;
                        if ("NONE" === e || "ALL" === t && !e) return H.recomendedWallets;
                        if (b.isArray(e)) {
                            let t = {
                                    recommendedIds: e.join(",")
                                },
                                {
                                    listings: s
                                } = await P.getAllListings(t),
                                n = Object.values(s);
                            n.sort((t, s) => e.indexOf(t.id) - e.indexOf(s.id)), H.recomendedWallets = n
                        } else {
                            let {
                                chains: e,
                                isAuth: s
                            } = I.state, n = null == e ? void 0 : e.join(","), o = b.isArray(t), l = {
                                page: 1,
                                sdks: s ? "auth_v1" : void 0,
                                entries: b.RECOMMENDED_WALLET_AMOUNT,
                                chains: n,
                                version: 2,
                                excludedIds: o ? t.join(",") : void 0
                            }, {
                                listings: r
                            } = V ? await P.getMobileListings(l) : await P.getDesktopListings(l);
                            H.recomendedWallets = Object.values(r)
                        }
                        return H.recomendedWallets
                    },
                    async getWallets(e) {
                        let t = _({}, e),
                            {
                                explorerRecommendedWalletIds: s,
                                explorerExcludedWalletIds: n
                            } = O.state,
                            {
                                recomendedWallets: o
                            } = H;
                        if ("ALL" === n) return H.wallets;
                        o.length ? t.excludedIds = o.map(e => e.id).join(",") : b.isArray(s) && (t.excludedIds = s.join(",")), b.isArray(n) && (t.excludedIds = [t.excludedIds, n].filter(Boolean).join(",")), I.state.isAuth && (t.sdks = "auth_v1");
                        let {
                            page: l,
                            search: r
                        } = e, {
                            listings: a,
                            total: i
                        } = V ? await P.getMobileListings(t) : await P.getDesktopListings(t), c = Object.values(a), d = r ? "search" : "wallets";
                        return H[d] = {
                            listings: [...H[d].listings, ...c],
                            total: i,
                            page: null != l ? l : 1
                        }, {
                            listings: c,
                            total: i
                        }
                    },
                    getWalletImageUrl: e => P.getWalletImageUrl(e),
                    getAssetImageUrl: e => P.getAssetImageUrl(e),
                    resetSearch() {
                        H.search = {
                            listings: [],
                            total: 0,
                            page: 1
                        }
                    }
                },
                z = h({
                    open: !1
                }),
                B = {
                    state: z,
                    subscribe: e => g(z, () => e(z)),
                    open: async e => new Promise(t => {
                        let {
                            isUiLoaded: s,
                            isDataLoaded: n
                        } = I.state;
                        if (b.removeWalletConnectDeepLink(), I.setWalletConnectUri(null == e ? void 0 : e.uri), I.setChains(null == e ? void 0 : e.chains), m.reset("ConnectWallet"), s && n) z.open = !0, t();
                        else {
                            let e = setInterval(() => {
                                let s = I.state;
                                s.isUiLoaded && s.isDataLoaded && (clearInterval(e), z.open = !0, t())
                            }, 200)
                        }
                    }),
                    close() {
                        z.open = !1
                    }
                };
            var J = Object.defineProperty,
                q = Object.getOwnPropertySymbols,
                F = Object.prototype.hasOwnProperty,
                G = Object.prototype.propertyIsEnumerable,
                Q = (e, t, s) => t in e ? J(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: s
                }) : e[t] = s,
                X = (e, t) => {
                    for (var s in t || (t = {})) F.call(t, s) && Q(e, s, t[s]);
                    if (q)
                        for (var s of q(t)) G.call(t, s) && Q(e, s, t[s]);
                    return e
                };
            let Y = h({
                    themeMode: "u" > typeof matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                }),
                Z = {
                    state: Y,
                    subscribe: e => g(Y, () => e(Y)),
                    setThemeConfig(e) {
                        let {
                            themeMode: t,
                            themeVariables: s
                        } = e;
                        t && (Y.themeMode = t), s && (Y.themeVariables = X({}, s))
                    }
                },
                $ = h({
                    open: !1,
                    message: "",
                    variant: "success"
                }),
                ee = {
                    state: $,
                    subscribe: e => g($, () => e($)),
                    openToast(e, t) {
                        $.open = !0, $.message = e, $.variant = t
                    },
                    closeToast() {
                        $.open = !1
                    }
                }
        },
        11174: function(e, t, s) {
            s.d(t, {
                WalletConnectModal: function() {
                    return o
                }
            });
            var n = s(60206);
            class o {
                async initUi() {
                    {
                        await s.e(467).then(s.bind(s, 96467));
                        let e = document.createElement("wcm-modal");
                        document.body.insertAdjacentElement("beforeend", e), n.OptionsCtrl.setIsUiLoaded(!0)
                    }
                }
                constructor(e) {
                    this.openModal = n.jb.open, this.closeModal = n.jb.close, this.subscribeModal = n.jb.subscribe, this.setTheme = n.ThemeCtrl.setThemeConfig, n.ThemeCtrl.setThemeConfig(e), n.ConfigCtrl.setConfig(e), this.initUi()
                }
            }
        }
    }
]);