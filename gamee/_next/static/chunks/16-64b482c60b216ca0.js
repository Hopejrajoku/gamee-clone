"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [16], {
        65115: function(e, t, n) {
            var r, o;
            n.d(t, {
                X: function() {
                    return r
                }
            }), (o = r || (r = {}))[o.SERVER_ERROR = 999] = "SERVER_ERROR", o[o.ENTITY_NOT_FOUND = 1e3] = "ENTITY_NOT_FOUND", o[o.ENTITY_EXPIRED = 1004] = "ENTITY_EXPIRED", o[o.USER_NOT_FOUND_USING_JWT_TOKEN = 1096] = "USER_NOT_FOUND_USING_JWT_TOKEN"
        },
        36558: function(e, t, n) {
            var r, o;
            n.d(t, {
                X: function() {
                    return r
                }
            }), (o = r || (r = {}))[o.GENERAL_ERROR = 999] = "GENERAL_ERROR", o[o.CODE_ENTITY_NOT_FOUND = -32001] = "CODE_ENTITY_NOT_FOUND", o[o.CODE_ENTITY_EXPIRED = -32005] = "CODE_ENTITY_EXPIRED"
        },
        78985: function(e, t, n) {
            n.d(t, {
                EU: function() {
                    return N
                },
                _Z: function() {
                    return p
                },
                kS: function() {
                    return O
                }
            });
            var r = n(41231),
                o = n(39152),
                c = n.n(o),
                a = n(28943),
                i = n(26265),
                u = n(65115),
                s = n(36558);
            let l = e => {
                try {
                    if (e instanceof Array) {
                        console.log("\n"), console.log("Batch request"), e.forEach((e, t) => console.log("".concat(e.result ? "\uD83D\uDFE2" : "\uD83D\uDD34", " #").concat(t, " - ").concat(e.id, " -"), e)), console.log("\n");
                        return
                    }
                    console.log("".concat(e.result ? "\uD83D\uDFE2" : "\uD83D\uDD34", " ").concat(e.id, " -"), e)
                } catch (t) {
                    console.error("API debug error", t, e)
                }
            };
            var E = n(75994);
            let f = e => {
                    let {
                        refreshToken: t
                    } = e;
                    return {
                        jsonrpc: "2.0",
                        id: "user.authentication.refreshToken",
                        method: "user.authentication.refreshToken",
                        params: {
                            refreshToken: t
                        }
                    }
                },
                d = e => {
                    let t = f(e);
                    return N.post(t, {
                        authDisabled: !0
                    })
                },
                _ = e => ({
                    jsonrpc: "2.0",
                    id: "user.authentication.refreshToken",
                    method: "user.authentication.refreshToken",
                    params: e
                }),
                h = e => {
                    let t = _(e);
                    return p.post(t, {
                        authDisabled: !0
                    })
                };
            class I {
                async request(e, t) {
                    let n = {
                        method: "POST",
                        headers: this.getHeaders(t),
                        body: JSON.stringify(e)
                    };
                    return c()(this.getUrl(), n).then(e => e.json()).then(e => (i.cG.isEnabled("api") && l(e), e))
                }
                async post(e, t) {
                    return this.request(e, t)
                }
                async postBatch(e, t) {
                    return this.request(e, t)
                }
            }
            class T extends I {
                getUrl() {
                    return i.ZO.getCookie("uuid") || i.ZO.setCookie("uuid", T.uuid), T.url
                }
                getHeaders() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        {
                            authDisabled: t
                        } = e,
                        n = i.ZO.getCookie("authentication");
                    return {
                        "client-language": "en",
                        ...!!n && !t && {
                            Authorization: "Bearer ".concat(n)
                        },
                        ...T.uuid && {
                            "x-install-uuid": T.uuid
                        }
                    }
                }
                async post(e, t) {
                    let n = await super.post(e, t);
                    if (n.error) {
                        let t = n.error.code;
                        return t === u.X.USER_NOT_FOUND_USING_JWT_TOKEN ? i.ZO.removeAuthCookies({
                            forceReload: !0
                        }) : t !== u.X.ENTITY_EXPIRED ? n : (await this.refreshToken(), super.post(e))
                    }
                    return n
                }
                async postBatch(e, t) {
                    let n = await super.postBatch(e, t);
                    return Array.isArray(n) && n[0].error ? n[0].error.code !== u.X.ENTITY_EXPIRED ? n : (await this.refreshToken(), super.postBatch(e)) : n
                }
                async refreshToken() {
                    let e = i.ZO.getCookie("refresh");
                    if (!e) return i.ZO.removeAuthCookies({
                        forceReload: !0
                    });
                    let t = (0, a.Z)(e);
                    if (!(0, E.eA)((null == t ? void 0 : t.exp) || 0)) return i.ZO.removeAuthCookies({
                        forceReload: !0
                    });
                    let n = await d({
                        refreshToken: e
                    });
                    if (n.error) return i.ZO.removeAuthCookies({
                        forceReload: !0
                    });
                    let {
                        authentication: r,
                        refresh: o
                    } = n.result.authenticationTokens;
                    i.ZO.setAuthCookies(r, o)
                }
            }
            T.url = "https://api.prod.arc8.io", T.uuid = i.ZO.getCookie("uuid") || (0, r.Z)();
            class g extends I {
                getUrl() {
                    return i.IA.getCookie("uuid") || i.IA.setCookie("uuid", g.uuid), g.url
                }
                getHeaders() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        {
                            authDisabled: t
                        } = e,
                        n = i.IA.getCookie("authentication");
                    return {
                        "client-language": "en",
                        ...!!n && !t && {
                            Authorization: "Bearer ".concat(n)
                        },
                        ...g.uuid && {
                            "x-install-uuid": g.uuid
                        }
                    }
                }
                async post(e, t) {
                    let n = await super.post(e, t);
                    return n.error ? n.error.code !== s.X.CODE_ENTITY_EXPIRED ? n : (await this.refreshToken(), super.post(e)) : n
                }
                async postBatch(e, t) {
                    let n = await super.postBatch(e, t);
                    return Array.isArray(n) && n[0].error ? n[0].error.code !== s.X.CODE_ENTITY_EXPIRED ? n : (await this.refreshToken(), super.postBatch(e)) : n
                }
                async refreshToken() {
                    let e = i.IA.getCookie("refresh");
                    if (!e) return i.IA.removeAuthCookies({
                        forceReload: !0
                    });
                    let t = (0, a.Z)(e);
                    if (!(0, E.eA)((null == t ? void 0 : t.exp) || 0)) return i.IA.removeAuthCookies({
                        forceReload: !0
                    });
                    let n = await h({
                        refreshToken: e
                    });
                    if (n.error) return i.IA.removeAuthCookies({
                        forceReload: !0
                    });
                    let {
                        authenticate: r,
                        refresh: o
                    } = n.result.tokens;
                    i.IA.setAuthCookies(r, o)
                }
            }
            g.url = "https://api.service.gameeapp.com", g.uuid = i.IA.getCookie("uuid") || (0, r.Z)();
            class A extends I {
                getUrl() {
                    return A.url
                }
                getHeaders() {
                    return {
                        "client-language": "en",
                        "content-type": "application/json"
                    }
                }
            }
            A.url = "https://api.prod.arc8.com/api";
            let p = new g,
                N = new T,
                O = new A
        },
        93620: function(e, t, n) {
            n.d(t, {
                au: function() {
                    return c
                },
                Rh: function() {
                    return s
                },
                D9: function() {
                    return l
                },
                bO: function() {
                    return E
                },
                OT: function() {
                    return f
                }
            });
            var r = n(64090),
                o = n(75994),
                c = (e, t) => {
                    let n = (0, r.useRef)(null),
                        c = (0, r.useRef)(t),
                        [a, i] = (0, r.useState)(null);
                    return (0, r.useEffect)(() => {
                        if (!e || !(0, o.eA)(e)) return i(0);
                        let t = () => {
                            let t = (0, o.ab)(e);
                            i(t), t <= 0 && n.current && (t < 0 && i(0), clearInterval(n.current))
                        };
                        return t(), n.current = setInterval(t, 1e3), () => {
                            n.current && clearInterval(n.current)
                        }
                    }, [e]), (0, r.useEffect)(() => {
                        c.current = t
                    }, [t]), (0, r.useEffect)(() => {
                        0 === a && c.current && c.current()
                    }, [a]), a
                },
                a = n(19943),
                i = n(86967),
                u = n(59120),
                s = e => {
                    var t, n;
                    let {
                        type: o,
                        onEnteredCallback: c,
                        onExitedCallback: s
                    } = e, l = (0, a.T)(), E = (0, a.C)(i.$U), f = (0, a.C)(i.Ul), d = E.findIndex(e => e.type === o), _ = E.length > 0 && d === E.length - 1, h = E.some(e => e.type === o), I = d >= 0 && null !== (n = null === (t = E[d]) || void 0 === t ? void 0 : t.data) && void 0 !== n ? n : null, [T, g] = (0, r.useState)(!0), A = (0, r.useCallback)(() => g(!1), []);
                    return (0, r.useEffect)(() => {
                        f && _ && A()
                    }, [f, _, A]), {
                        isVisible: h && T,
                        onEntered: () => {
                            "function" == typeof c && c()
                        },
                        onExited: () => {
                            g(!0), l((0, u.Wr)()), "function" == typeof s && s()
                        },
                        data: I,
                        handleHide: A
                    }
                },
                l = e => {
                    let t = (0, r.useRef)();
                    return (0, r.useEffect)(() => {
                        t.current = e
                    }, [e]), t.current
                },
                E = () => {
                    let [e, t] = (0, r.useState)(0), n = () => {
                        t(window.scrollY)
                    };
                    return (0, r.useEffect)(() => (window.addEventListener("scroll", n), () => {
                        window.removeEventListener("scroll", n)
                    }), []), e
                },
                f = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        [t, n] = (0, r.useState)(e);
                    return [t, (0, r.useCallback)(() => n(e => !e), [])]
                }
        },
        19943: function(e, t, n) {
            n.d(t, {
                C: function() {
                    return c
                },
                T: function() {
                    return o
                }
            });
            var r = n(30828);
            let o = r.I0,
                c = r.v9
        },
        96048: function(e, t, n) {
            n.d(t, {
                B6: function() {
                    return T
                },
                F_: function() {
                    return u
                },
                Ib: function() {
                    return h
                },
                Kz: function() {
                    return s
                },
                M6: function() {
                    return r
                },
                MH: function() {
                    return g
                },
                Os: function() {
                    return I
                },
                Ow: function() {
                    return i
                },
                Td: function() {
                    return a
                },
                Xz: function() {
                    return p
                },
                YG: function() {
                    return _
                },
                Yb: function() {
                    return E
                },
                ZJ: function() {
                    return l
                },
                b7: function() {
                    return A
                },
                dz: function() {
                    return d
                },
                e4: function() {
                    return N
                },
                ml: function() {
                    return c
                },
                s3: function() {
                    return o
                },
                tG: function() {
                    return f
                }
            });
            let r = "https://www.gamee.com",
                o = "https://www.animocabrands.com",
                c = "https://x.com/GAMEEToken",
                a = "https://discord.gg/gamee",
                i = "https://t.me/gameechannel",
                u = "https://gamee.medium.com",
                s = "https://coinmarketcap.com/currencies/gamee",
                l = "https://etherscan.io/token/0xd9016a907dc0ecfa3ca425ab20b6b785b42f2373",
                E = "https://coinbrain.com/coins/eth-0xd9016a907dc0ecfa3ca425ab20b6b785b42f2373",
                f = "https://wiki.gamee.com/",
                d = "https://wiki.gamee.com/cryptoeconomics/gamee-token-gmee-faqs",
                _ = "https://wiki.gamee.com/company/about",
                h = "https://www.cocuma.cz/company/gamee",
                I = "https://drive.google.com/drive/folders/12o6Ej6D4LD8ln0qIb9TQt-MDNvAHIzWx",
                T = "https://www.gamee.com/privacy",
                g = "https://www.gamee.com/terms",
                A = "https://www.gamee.com/nft-licence-agreement",
                p = "https://www.arc8.com/download",
                N = "https://gamee.medium.com/gamee-how-to-claim-polygon-gmee-on-ethereum-c52fffb0eace"
        },
        26265: function(e, t, n) {
            n.d(t, {
                ZO: function() {
                    return h
                },
                IA: function() {
                    return I
                },
                cG: function() {
                    return i
                },
                mM: function() {
                    return c
                }
            });
            var r = n(20393);
            class o {
                static getInstance() {
                    return o.instance || (o.instance = new o), o.instance
                }
                getIsAvailable() {
                    if (!this.storage) return !1;
                    try {
                        let e = "__localstorage_test__";
                        return this.storage.setItem(e, e), this.storage.removeItem(e), !0
                    } catch (e) {
                        return !1
                    }
                }
                getValue(e) {
                    if (this.isAvailable) return this.storage.getItem(e)
                }
                setValue(e, t) {
                    this.isAvailable && this.storage.setItem(e, t)
                }
                removeValue(e) {
                    this.isAvailable && this.storage.removeItem(e)
                }
                constructor() {
                    this.storage = r.yF ? null : window.localStorage, this.isAvailable = this.getIsAvailable()
                }
            }
            var c = o.getInstance();
            class a {
                static getInstance() {
                    return a.instance || (a.instance = new a), a.instance
                }
                getKey(e) {
                    return "".concat(a.keyPrefix).concat(e)
                }
                isEnabled(e) {
                    return "true" === c.getValue(this.getKey(e))
                }
                constructor() {}
            }
            a.keyPrefix = "DEBUG__";
            var i = a.getInstance(),
                u = n(5251);
            let s = e => {
                let t = {};
                for (let n in e) {
                    let r = e[n];
                    null != r && "" !== r && (t[n] = r)
                }
                return t
            };
            class l {
                static getInstance() {
                    return l.instance || (l.instance = new l), l.instance
                }
                checkURL() {
                    let {
                        referral_code: e,
                        utm_source: t,
                        utm_medium: n,
                        utm_campaign: r
                    } = u.Z.parse(window.location.search);
                    if (c.removeValue("utm-data"), "string" == typeof e) {
                        let t = "referral-code";
                        c.getValue(t) || c.setValue(t, e)
                    }
                    if (t || n || r) {
                        let e = s({
                            utm_source: t,
                            utm_medium: n,
                            utm_campaign: r
                        });
                        c.setValue("utm-data", JSON.stringify(e))
                    }
                }
                constructor() {}
            }
            l.getInstance();
            var E = n(98955);
            class f {
                setAuthCookies(e, t) {
                    this.getIdentifier();
                    try {
                        this.setCookie("authentication", e), this.setCookie("refresh", t)
                    } catch (e) {
                        console.error("Cannot set ".concat(this.getIdentifier(), " auth cookies: "), e)
                    }
                }
                removeAuthCookies(e) {
                    try {
                        this.removeCookie("authentication"), this.removeCookie("refresh"), (null == e ? void 0 : e.forceReload) && window.location.reload()
                    } catch (e) {
                        console.error("Cannot remove ".concat(this.getIdentifier(), " auth cookies: "), e)
                    }
                }
                setCookie(e, t) {
                    E.Z.set("".concat(this.getIdentifier(), "-").concat(e), t, f.options)
                }
                getCookie(e) {
                    return E.Z.get("".concat(this.getIdentifier(), "-").concat(e))
                }
                removeCookie(e) {
                    E.Z.remove("".concat(this.getIdentifier(), "-").concat(e))
                }
            }
            f.options = {
                expires: 365,
                secure: !0,
                sameSite: "strict",
                path: "/"
            };
            class d extends f {
                static getInstance() {
                    return d.instance || (d.instance = new d), d.instance
                }
                getIdentifier() {
                    return "arc8"
                }
                constructor() {
                    super()
                }
            }
            class _ extends f {
                static getInstance() {
                    return _.instance || (_.instance = new _), _.instance
                }
                getIdentifier() {
                    return "gamee"
                }
                constructor() {
                    super()
                }
            }
            let h = d.getInstance(),
                I = _.getInstance()
        },
        75994: function(e, t, n) {
            n.d(t, {
                W3: function() {
                    return d
                },
                ab: function() {
                    return h
                },
                eA: function() {
                    return _
                }
            });
            var r = n(89539),
                o = n.n(r),
                c = n(42366),
                a = n.n(c),
                i = n(91568),
                u = n.n(i),
                s = n(70060),
                l = n.n(s);
            o().extend(a()), o().extend(u()), o().extend(l());
            let E = e => {
                    let t;
                    return "number" == typeof e && (t = e.toString().length >= 13 ? e : 1e3 * e), "string" == typeof e && (t = e.length >= 20 ? e : e.toString().length >= 13 ? parseInt(e) : 1e3 * parseInt(e)), o()(t).format()
                },
                f = () => o()().format(),
                d = e => {
                    let t = f(),
                        n = E(e);
                    return o()(n).isSameOrBefore(t)
                },
                _ = e => {
                    let t = f(),
                        n = E(e);
                    return o()(n).isSameOrAfter(t)
                },
                h = e => {
                    let t = f(),
                        n = E(e);
                    return o()(n).diff(t, "seconds")
                }
        },
        22713: function(e, t, n) {
            n.d(t, {
                R1: function() {
                    return a
                },
                RP: function() {
                    return o
                },
                dp: function() {
                    return s
                },
                p6: function() {
                    return E
                },
                uf: function() {
                    return i
                }
            }), n(89539);
            var r = n(22840);
            n(75994);
            let o = 86400,
                c = ["", "k", "M", "B", "T"],
                a = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4;
                    return "".concat(e.slice(0, t), "...").concat(e.slice(e.length - n))
                },
                i = function(e) {
                    let {
                        decimalDigits: t = 0,
                        shiftBy: n = 0,
                        groupSize: r = 3,
                        groupSeparator: o = ",",
                        abbreviate: c = !1,
                        abbreviateStart: a = 1e5,
                        removeTrailingZeros: i = !1,
                        removeEmptyDecimals: s = !1,
                        prefix: l = "",
                        suffix: E = "",
                        decimalSeparator: f = "."
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if ("number" != typeof e) return null;
                    if (0 === t && 0 === n) {
                        if (c && e >= a) return u(e, a);
                        let t = Math.floor(e).toString().replace(RegExp("\\B(?=(\\d{".concat(r, "})+(?!\\d))"), "g"), o);
                        return "".concat(l).concat(t).concat(E)
                    }
                    let d = e / Math.pow(10, n);
                    if (c && d >= a) return u(d, a);
                    let [_, h] = d.toString().split(".");
                    if (_ = _.replace(RegExp("\\B(?=(\\d{".concat(r, "})+(?!\\d))"), "g"), o), !h) {
                        if (0 === t) return "".concat(l).concat(_).concat(E);
                        h = ""
                    }
                    return (h = h.length > t ? h.slice(0, t) : h.padEnd(t, "0"), i && (h = h.replace(/0+$/, "")), s && 0 === parseInt(h) && (h = ""), h) ? "".concat(l).concat(_).concat(f).concat(h).concat(E) : "".concat(l).concat(_).concat(E)
                },
                u = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
                    if (e < t) return e.toString();
                    let n = Math.floor(Math.log10(e) / 3),
                        r = e / Math.pow(1e3, n),
                        o = 0,
                        a = Number.isInteger(r);
                    return (n > 1 ? (o = 2, r = Math.floor(100 * r) / 100) : Math.floor(r) !== r && (o = 1, r = Math.floor(10 * r) / 10), a) ? r + c[n] : r.toFixed(o) + c[n]
                },
                s = function(e) {
                    let {
                        fractionDigits: t = 2,
                        shiftBy: n = 0,
                        roundingMode: o = r.Z.ROUND_DOWN,
                        abbreviate: c = !0,
                        abbreviateStart: a = 1e5
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                        prefix: i = "",
                        suffix: s = "",
                        decimalSeparator: l = ".",
                        groupSeparator: E = ",",
                        groupSize: f = 3
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, d = (0, r.Z)(e).shiftedBy(n).toNumber();
                    return c && d >= a ? u(d) : (0, r.Z)(d).decimalPlaces(t, o).toFormat({
                        prefix: i,
                        decimalSeparator: l,
                        groupSeparator: E,
                        groupSize: f,
                        suffix: s
                    })
                },
                l = e => e >= 10 ? e : ("0" + e).slice(-2),
                E = e => {
                    let t = e,
                        n = Math.floor(t / o),
                        r = Math.floor((t %= o) / 3600),
                        c = Math.floor((t %= 3600) / 60);
                    t %= 60;
                    let a = l(n),
                        i = l(r),
                        u = l(c),
                        s = l(t);
                    return n > 0 ? "".concat(a, "d ").concat(i, "h ").concat(u, "m") : r > 0 ? "".concat(i, "h ").concat(u, "m") : "".concat(u, "m ").concat(s, "s")
                }
        },
        16316: function(e, t, n) {
            n.d(t, {
                Jz: function() {
                    return c
                },
                qM: function() {
                    return o
                },
                vp: function() {
                    return a
                }
            });
            var r = n(44214);
            let o = (0, r.PH)("web3/connect"),
                c = (0, r.PH)("web3/switch"),
                a = (0, r.PH)("web3/disconnect")
        },
        71240: function(e, t, n) {
            n.d(t, {
                MG: function() {
                    return u
                },
                Te: function() {
                    return f
                },
                fV: function() {
                    return E
                },
                rC: function() {
                    return d
                },
                xk: function() {
                    return _
                }
            });
            var r, o, c, a, i, u, s = n(22840),
                l = n(20393);
            let E = (0, s.Z)(2).pow(256).minus(1).toString(10);
            (r = a || (a = {}))[r.ETHEREUM_MAINNET = 1] = "ETHEREUM_MAINNET", r[r.ETHEREUM_SEPOLIA = 11155111] = "ETHEREUM_SEPOLIA", (o = i || (i = {})).ETHEREUM_MAINNET = "ETHEREUM_MAINNET", o.ETHEREUM_SEPOLIA = "ETHEREUM_SEPOLIA", (c = u || (u = {})).GMEE = "GMEE", c.MIGRATION = "MIGRATION", c.STAKING = "STAKING";
            let f = {
                    1: "ETHEREUM_MAINNET",
                    11155111: "ETHEREUM_SEPOLIA"
                },
                d = l.BB ? 1 : 11155111;
            f[d];
            let _ = {
                ETHEREUM_MAINNET__GMEE: "0xd9016a907dc0ecfa3ca425ab20b6b785b42f2373",
                ETHEREUM_MAINNET__MIGRATION: "0xa33A5018AA2C4D6c37F9d97d2194323229191555",
                ETHEREUM_MAINNET__STAKING: "0x7CdbEc6c5A221c27C911c561aad939Ea19758cAd",
                ETHEREUM_SEPOLIA__GMEE: "0x330Af66b1fC7bd9Ec2352f88Fbb778f756854cb4",
                ETHEREUM_SEPOLIA__MIGRATION: "0xb004B5626417683AC029090C8894f6C9BdFdE30B",
                ETHEREUM_SEPOLIA__STAKING: "0x1BC3f08a35D22f690616Dcd1Ada77A37fbD50a57"
            }
        },
        19192: function(e, t, n) {
            var r, o, c, a;
            n.d(t, {
                V: function() {
                    return r
                }
            }), (c = r || (r = {}))[c.CONNECT_WALLET = 0] = "CONNECT_WALLET", c[c.POINTS_FULL_RANKINGS = 1] = "POINTS_FULL_RANKINGS", c[c.POINTS_PHASE_ONE_INFO = 2] = "POINTS_PHASE_ONE_INFO", c[c.POINTS_PHASE_TWO_INFO = 3] = "POINTS_PHASE_TWO_INFO", c[c.POINTS_PHASE_THREE_INFO = 4] = "POINTS_PHASE_THREE_INFO", c[c.POINTS_PHASE_FOUR_INFO = 5] = "POINTS_PHASE_FOUR_INFO", c[c.STAKE = 6] = "STAKE", c[c.UNSTAKE = 7] = "UNSTAKE", c[c.RESTAKE = 8] = "RESTAKE", (a = o || (o = {}))[a.SOMETHING_FAILED = 666] = "SOMETHING_FAILED", a[a.NETWORK_REQUEST = 999] = "NETWORK_REQUEST", a[a.NETWORK_REQUEST_BATCH = 998] = "NETWORK_REQUEST_BATCH", a[a.ARC8_API__USER_REFRESH_TOKEN = 8e3] = "ARC8_API__USER_REFRESH_TOKEN", a[a.ARC8_API__BLOCKCHAIN_GET_GMEE_CLAIM_INFORMATION = 8050] = "ARC8_API__BLOCKCHAIN_GET_GMEE_CLAIM_INFORMATION", a[a.GAMEE_API__USER_REFRESH_TOKEN = 9e3] = "GAMEE_API__USER_REFRESH_TOKEN", a[a.GAMEE_API__POINTS_GET_INFORMATION = 9050] = "GAMEE_API__POINTS_GET_INFORMATION", a[a.GAMEE_API__POINTS_GET_LEADERBOARD = 9051] = "GAMEE_API__POINTS_GET_LEADERBOARD"
        },
        86967: function(e, t, n) {
            n.d(t, {
                $U: function() {
                    return i
                },
                JM: function() {
                    return E
                },
                Ul: function() {
                    return u
                },
                VL: function() {
                    return a
                },
                X1: function() {
                    return s
                }
            });
            var r = n(64419),
                o = n(59120);
            let c = e => e[o.ZP.name],
                a = e => c(e).isAppMounted,
                i = e => c(e).dialogs,
                u = e => c(e).isDialogCleanup,
                s = (0, r.P1)(i, e => e.length);
            (0, r.P1)(i, (e, t) => t, (e, t) => e.some(e => e.type === t));
            let l = e => c(e).prices,
                E = (0, r.P1)(l, e => (null == e ? void 0 : e.gmee) || null);
            (0, r.P1)(l, e => (null == e ? void 0 : e.eth) || null)
        },
        59120: function(e, t, n) {
            n.d(t, {
                NF: function() {
                    return o
                },
                OJ: function() {
                    return c
                },
                Wr: function() {
                    return i
                },
                XF: function() {
                    return u
                },
                vC: function() {
                    return a
                }
            });
            let r = (0, n(44214).oM)({
                    name: "app",
                    initialState: {
                        isAppMounted: !1,
                        prices: null,
                        dialogs: [],
                        isDialogCleanup: !1
                    },
                    reducers: {
                        mounted(e) {
                            e.isAppMounted = !0
                        },
                        prices(e, t) {
                            e.prices = t.payload
                        },
                        showDialog(e, t) {
                            let {
                                type: n,
                                data: r = null
                            } = t.payload;
                            e.dialogs.push({
                                type: n,
                                data: r
                            })
                        },
                        hideDialog(e) {
                            e.dialogs.pop()
                        },
                        setDialogCleanupFlag(e, t) {
                            e.isDialogCleanup = t.payload.isEnabled
                        }
                    }
                }),
                {
                    mounted: o,
                    prices: c,
                    showDialog: a,
                    hideDialog: i,
                    setDialogCleanupFlag: u
                } = r.actions;
            t.ZP = r
        },
        3254: function(e, t, n) {
            n.d(t, {
                YN: function() {
                    return i
                },
                l4: function() {
                    return a
                },
                np: function() {
                    return c
                }
            });
            var r = n(30868);
            let o = e => e[r.ZP.name],
                c = e => o(e).lootPoints,
                a = e => o(e).lootRank,
                i = e => o(e).mocaId
        },
        30868: function(e, t, n) {
            n.d(t, {
                gz: function() {
                    return u
                },
                lI: function() {
                    return i
                }
            });
            var r = n(44214),
                o = n(16316);
            let c = {
                    lootPoints: null,
                    lootRank: null,
                    gmeeAthBalance: null,
                    mocaId: null
                },
                a = (0, r.oM)({
                    name: "user",
                    initialState: c,
                    reducers: {
                        setLootPoints(e, t) {
                            let {
                                lootPoints: n,
                                lootRank: r,
                                gmeeAthBalance: o
                            } = t.payload;
                            e.lootPoints = n, e.lootRank = r, e.gmeeAthBalance = o
                        },
                        setMocaId(e, t) {
                            e.mocaId = t.payload.mocaId
                        }
                    },
                    extraReducers(e) {
                        e.addCase(o.Jz, () => c), e.addCase(o.vp, () => c)
                    }
                }),
                {
                    setLootPoints: i,
                    setMocaId: u
                } = a.actions;
            t.ZP = a
        }
    }
]);