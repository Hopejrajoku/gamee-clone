(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [185], {
        95957: function(e, t, n) {
            Promise.resolve().then(n.bind(n, 91845)), Promise.resolve().then(n.bind(n, 37388)), Promise.resolve().then(n.bind(n, 26016)), Promise.resolve().then(n.t.bind(n, 85935, 23)), Promise.resolve().then(n.t.bind(n, 29766, 23)), Promise.resolve().then(n.t.bind(n, 8833, 23)), Promise.resolve().then(n.bind(n, 73370)), Promise.resolve().then(n.bind(n, 90979)), Promise.resolve().then(n.bind(n, 17154)), Promise.resolve().then(n.bind(n, 17216)), Promise.resolve().then(n.bind(n, 73115)), Promise.resolve().then(n.bind(n, 72453)), Promise.resolve().then(n.bind(n, 75843))
        },
        93620: function(e, t, n) {
            "use strict";
            n.d(t, {
                au: function() {
                    return i
                },
                Rh: function() {
                    return c
                },
                D9: function() {
                    return u
                },
                bO: function() {
                    return d
                },
                OT: function() {
                    return f
                }
            });
            var r = n(64090),
                o = n(75994),
                i = (e, t) => {
                    let n = (0, r.useRef)(null),
                        i = (0, r.useRef)(t),
                        [l, s] = (0, r.useState)(null);
                    return (0, r.useEffect)(() => {
                        if (!e || !(0, o.eA)(e)) return s(0);
                        let t = () => {
                            let t = (0, o.ab)(e);
                            s(t), t <= 0 && n.current && (t < 0 && s(0), clearInterval(n.current))
                        };
                        return t(), n.current = setInterval(t, 1e3), () => {
                            n.current && clearInterval(n.current)
                        }
                    }, [e]), (0, r.useEffect)(() => {
                        i.current = t
                    }, [t]), (0, r.useEffect)(() => {
                        0 === l && i.current && i.current()
                    }, [l]), l
                },
                l = n(19943),
                s = n(86967),
                a = n(59120),
                c = e => {
                    var t, n;
                    let {
                        type: o,
                        onEnteredCallback: i,
                        onExitedCallback: c
                    } = e, u = (0, l.T)(), d = (0, l.C)(s.$U), f = (0, l.C)(s.Ul), p = d.findIndex(e => e.type === o), h = d.length > 0 && p === d.length - 1, m = d.some(e => e.type === o), g = p >= 0 && null !== (n = null === (t = d[p]) || void 0 === t ? void 0 : t.data) && void 0 !== n ? n : null, [x, E] = (0, r.useState)(!0), I = (0, r.useCallback)(() => E(!1), []);
                    return (0, r.useEffect)(() => {
                        f && h && I()
                    }, [f, h, I]), {
                        isVisible: m && x,
                        onEntered: () => {
                            "function" == typeof i && i()
                        },
                        onExited: () => {
                            E(!0), u((0, a.Wr)()), "function" == typeof c && c()
                        },
                        data: g,
                        handleHide: I
                    }
                },
                u = e => {
                    let t = (0, r.useRef)();
                    return (0, r.useEffect)(() => {
                        t.current = e
                    }, [e]), t.current
                },
                d = () => {
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
        90979: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var r = n(3827),
                o = n(64090),
                i = n(30828),
                l = n(33646),
                s = n(44214),
                a = n(59120),
                c = n(86782),
                u = n(94753),
                d = n(82460),
                f = n(30868);
            let p = {
                    [a.ZP.name]: a.ZP.reducer,
                    [c.ZP.name]: c.ZP.reducer,
                    [u.ZP.name]: u.ZP.reducer,
                    [d.ZP.name]: d.ZP.reducer,
                    [f.ZP.name]: f.ZP.reducer
                },
                h = (0, l.UY)(p),
                m = () => (0, s.xC)({
                    reducer: h,
                    devTools: !0
                });
            var g = e => {
                let {
                    children: t
                } = e, n = (0, o.useRef)();
                return n.current || (n.current = m(), n.current.dispatch((0, a.NF)())), (0, r.jsx)(i.zt, {
                    store: n.current,
                    children: t
                })
            }
        },
        19943: function(e, t, n) {
            "use strict";
            n.d(t, {
                C: function() {
                    return i
                },
                T: function() {
                    return o
                }
            });
            var r = n(30828);
            let o = r.I0,
                i = r.v9
        },
        17154: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var r = n(3827),
                o = n(64090),
                i = n(60604),
                l = n(68109),
                s = n(47082),
                a = n(20393),
                c = n(25634),
                u = n(945),
                d = n(21254),
                f = n(17364),
                p = n(91863),
                h = n(45355),
                m = n(17568);
            let g = {
                    connectors: [(0, p.L)(), (0, h.D)({
                        appName: "Gamee Points App"
                    }), (0, m.a)({
                        projectId: "9bfa78f4329c4c05d10b13d7f979ab4a"
                    }), (0, p.L)({
                        target: "braveWallet"
                    }), (0, p.L)({
                        target: "trust"
                    })],
                    ssr: !0,
                    multiInjectedProviderDiscovery: !1
                },
                x = (0, c._)({
                    chains: [d.R],
                    transports: {
                        [d.R.id]: (0, u.d)("https://eth-mainnet.alchemyapi.io/v2/".concat("zSJmFgq7u6bBDzKZWYgJn9Mz1mLaDahH"))
                    },
                    ...g
                }),
                E = (0, c._)({
                    chains: [f.F],
                    transports: {
                        [f.F.id]: (0, u.d)("https://eth-sepolia.g.alchemy.com/v2/".concat("PRZEr4UQqsR0oIKo3LN9iEgoo6NFAOYo"))
                    },
                    ...g
                });
            var I = e => {
                let {
                    children: t
                } = e, [n] = (0, o.useState)(() => new l.S);
                return (0, r.jsx)(i.F, {
                    config: a.BB ? x : E,
                    children: (0, r.jsx)(s.aH, {
                        client: n,
                        children: t
                    })
                })
            }
        },
        75994: function(e, t, n) {
            "use strict";
            n.d(t, {
                W3: function() {
                    return p
                },
                ab: function() {
                    return m
                },
                eA: function() {
                    return h
                }
            });
            var r = n(89539),
                o = n.n(r),
                i = n(42366),
                l = n.n(i),
                s = n(91568),
                a = n.n(s),
                c = n(70060),
                u = n.n(c);
            o().extend(l()), o().extend(a()), o().extend(u());
            let d = e => {
                    let t;
                    return "number" == typeof e && (t = e.toString().length >= 13 ? e : 1e3 * e), "string" == typeof e && (t = e.length >= 20 ? e : e.toString().length >= 13 ? parseInt(e) : 1e3 * parseInt(e)), o()(t).format()
                },
                f = () => o()().format(),
                p = e => {
                    let t = f(),
                        n = d(e);
                    return o()(n).isSameOrBefore(t)
                },
                h = e => {
                    let t = f(),
                        n = d(e);
                    return o()(n).isSameOrAfter(t)
                },
                m = e => {
                    let t = f(),
                        n = d(e);
                    return o()(n).diff(t, "seconds")
                }
        },
        16316: function(e, t, n) {
            "use strict";
            n.d(t, {
                Jz: function() {
                    return i
                },
                qM: function() {
                    return o
                },
                vp: function() {
                    return l
                }
            });
            var r = n(44214);
            let o = (0, r.PH)("web3/connect"),
                i = (0, r.PH)("web3/switch"),
                l = (0, r.PH)("web3/disconnect")
        },
        68515: function(e, t, n) {
            "use strict";
            n.d(t, {
                wT: function() {
                    return f
                },
                Ml: function() {
                    return T
                },
                u_: function() {
                    return v
                }
            });
            var r = n(3827),
                o = n(64090),
                i = n(79480),
                l = n(45362),
                s = n(19943),
                a = n(86967),
                c = n(19539);
            let u = i.ZP.div.withConfig({
                    componentId: "sc-ef76eae2-0"
                })(["z-index:", ";", ";", ";&::after{content:'';", ";background:", ";}"], e => {
                    let {
                        $index: t
                    } = e;
                    return 1010 + t
                }, c.tA.allFix(0), c.tA.flexCenter, c.tA.allAbs(0), c.Il.BLACK_56),
                d = i.ZP.div.withConfig({
                    componentId: "sc-ef76eae2-1"
                })(["", ";", ";"], c.tA.allAbs(0), c.tA.blur(5));
            var f = e => {
                    let {
                        children: t,
                        type: n,
                        isVisible: i,
                        timeout: c = 200,
                        cssPrefix: f = "dialog-",
                        mountOnEnter: p = !0,
                        unmountOnExit: h = !0,
                        withFilter: m = !0,
                        onEntering: g,
                        onEntered: x,
                        onExited: E,
                        ...I
                    } = e, v = (0, o.useRef)(null), b = (0, s.C)(a.$U), _ = (0, o.useMemo)(() => b.findIndex(e => e.type === n), [n, b]);
                    return (0, r.jsx)(l.Z, {
                        nodeRef: v,
                        in: i,
                        timeout: c,
                        classNames: f,
                        onEntering: () => {
                            "function" == typeof g && g()
                        },
                        onEntered: () => {
                            "function" == typeof x && x()
                        },
                        onExited: () => {
                            "function" == typeof E && E()
                        },
                        mountOnEnter: p,
                        unmountOnExit: h,
                        ...I,
                        children: (0, r.jsxs)(u, {
                            ref: v,
                            $index: _,
                            children: [m && (0, r.jsx)(d, {
                                className: "filter"
                            }), t]
                        })
                    })
                },
                p = n(98811),
                h = n(16480),
                m = n.n(h),
                g = n(98927);
            let x = i.ZP.div.withConfig({
                    componentId: "sc-61d495e4-0"
                })(["z-index:inherit;flex-grow:1;display:flex;position:relative;width:100%;min-width:280px;max-width:460px;max-height:min(960px,95vh);border-radius:32px;margin:0 20px;background:", ";box-shadow:0 4px 8px 0 rgba(0,0,0,0.16),0 12px 12px 0 rgba(0,0,0,0.14),0 24px 16px 0 rgba(0,0,0,0.08);"], c.Il.ELEVATION_1),
                E = (0, i.ZP)(g.zx).withConfig({
                    componentId: "sc-61d495e4-1"
                })(["z-index:3;position:absolute;top:16px;", ";", ";", ";"], c.tA.blur(10), e => {
                    let {
                        $slot: t
                    } = e;
                    return "left" === t && "left: 16px;"
                }, e => {
                    let {
                        $slot: t
                    } = e;
                    return "right" === t && "right: 16px;"
                }),
                I = i.ZP.div.withConfig({
                    componentId: "sc-61d495e4-2"
                })(["position:relative;overflow:auto;width:100%;border-radius:inherit;scrollbar-width:none;&::-webkit-scrollbar{display:none;}"]);
            var v = e => {
                let {
                    children: t,
                    header: n,
                    footer: o,
                    contentProps: i,
                    handleHide: l,
                    handleBack: s,
                    className: a,
                    ...u
                } = e;
                return (0, r.jsxs)(x, {
                    className: m()("modal", a),
                    ...u,
                    children: ["object" == typeof n && n, "function" == typeof s && (0, r.jsx)(E, {
                        size: 32,
                        background: c.Il.WHITE_12,
                        hover: c.Il.WHITE_24,
                        isIcon: !0,
                        onClick: s,
                        $slot: "left",
                        children: (0, r.jsx)(g.JO, {
                            type: "arrow-left",
                            size: 16,
                            color: c.Il.WHITE
                        })
                    }), "function" == typeof l && (0, r.jsx)(E, {
                        size: 32,
                        background: c.Il.WHITE_12,
                        hover: c.Il.WHITE_24,
                        isIcon: !0,
                        onClick: l,
                        $slot: "right",
                        children: (0, r.jsx)(g.JO, {
                            type: "close",
                            size: 16,
                            color: c.Il.WHITE
                        })
                    }), (0, r.jsx)(I, {
                        className: "modal-content",
                        ...i,
                        children: t
                    }), "object" == typeof o && o]
                })
            };
            let b = i.ZP.div.withConfig({
                    componentId: "sc-c369509-0"
                })(["z-index:inherit;position:relative;align-self:flex-end;width:100%;min-width:280px;height:calc(100% - 24px);background:", ";border-top-left-radius:24px;border-top-right-radius:24px;"], c.Il.ELEVATION_1),
                _ = (0, i.ZP)(g.zx).withConfig({
                    componentId: "sc-c369509-1"
                })(["z-index:3;position:absolute;top:16px;", ";", ";", ";"], c.tA.blur(10), e => {
                    let {
                        $slot: t
                    } = e;
                    return "left" === t && "left: 16px;"
                }, e => {
                    let {
                        $slot: t
                    } = e;
                    return "right" === t && "right: 16px;"
                }),
                P = i.ZP.div.withConfig({
                    componentId: "sc-c369509-2"
                })(["position:relative;height:100%;overflow:auto;border-radius:inherit;"]);
            var A = e => {
                    let {
                        children: t,
                        header: n,
                        footer: o,
                        contentProps: i,
                        handleHide: l,
                        handleBack: s,
                        className: a,
                        ...u
                    } = e;
                    return (0, r.jsxs)(b, {
                        id: "bottom-sheet",
                        className: m()("bottom-sheet", a),
                        ...u,
                        children: ["object" == typeof n && n, "function" == typeof s && (0, r.jsx)(_, {
                            size: 32,
                            background: c.Il.WHITE_12,
                            hover: c.Il.WHITE_24,
                            isIcon: !0,
                            onClick: s,
                            $slot: "left",
                            children: (0, r.jsx)(g.JO, {
                                type: "arrow-left",
                                size: 16,
                                color: c.Il.WHITE
                            })
                        }), "function" == typeof l && (0, r.jsx)(_, {
                            size: 32,
                            background: c.Il.WHITE_12,
                            hover: c.Il.WHITE_24,
                            isIcon: !0,
                            onClick: l,
                            $slot: "right",
                            children: (0, r.jsx)(g.JO, {
                                type: "close",
                                size: 16,
                                color: c.Il.WHITE
                            })
                        }), (0, r.jsx)(P, {
                            className: "bottom-sheet-content",
                            ...i,
                            children: t
                        }), "object" == typeof o && o]
                    })
                },
                T = e => {
                    let {
                        children: t,
                        breakpoint: n = 460,
                        ...o
                    } = e;
                    return (0, p.useMediaQuery)({
                        maxWidth: n - 1
                    }) ? (0, r.jsx)(A, { ...o,
                        children: t
                    }) : (0, r.jsx)(v, { ...o,
                        children: t
                    })
                }
        },
        17216: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            });
            var r = n(3827),
                o = n(64090),
                i = n(69311),
                l = n(93620),
                s = n(19943),
                a = n(86967),
                c = n(59120),
                u = n(79480),
                d = n(19192),
                f = n(98927),
                p = n(19539),
                h = n(68515),
                m = n(11169);
            let g = u.ZP.div.withConfig({
                    componentId: "sc-38bb28a1-0"
                })(["display:flex;flex-direction:column;gap:12px;width:100%;max-width:360px;"]),
                x = (0, u.ZP)(f.zx).withConfig({
                    componentId: "sc-38bb28a1-1"
                })(["display:flex;justify-content:space-between;padding:0 16px;"]),
                E = (0, u.ZP)(f.TR).withConfig({
                    componentId: "sc-38bb28a1-2"
                })(["display:flex;justify-content:center;width:40px;height:40px;"]);
            var I = e => {
                let {
                    handleHide: t
                } = e, {
                    connectors: n,
                    connect: o,
                    error: i
                } = (0, m.$)({
                    mutation: {
                        onSuccess: t
                    }
                }), l = (e, t, n) => "coinbaseWallet" === t ? (0, r.jsx)(E, {
                    type: "coinbase",
                    height: 40
                }) : "walletConnect" === t ? (0, r.jsx)(E, {
                    type: "wallet-connect",
                    height: 40,
                    color: p.Il.WHITE
                }) : "injected" === t && "Injected" === n ? (0, r.jsx)(E, {
                    type: "metamask",
                    height: 40
                }) : "injected" === t && "braveWallet" === e ? (0, r.jsx)(E, {
                    type: "brave",
                    height: 40
                }) : "injected" === t && "trust" === e ? (0, r.jsx)(E, {
                    type: "trust",
                    height: 40
                }) : null;
                return (0, r.jsxs)(g, {
                    children: [n.map(e => (0, r.jsxs)(x, {
                        size: 72,
                        background: p.Il.WHITE_12,
                        hover: p.Il.WHITE_24,
                        onClick: () => o({
                            connector: e
                        }),
                        children: [(0, r.jsx)(f.xv, {
                            size: 16,
                            weight: 500,
                            color: p.Il.WHITE,
                            children: "Injected" === e.name ? "MetaMask" : e.name
                        }), l(e.id, e.type, e.name)]
                    }, e.id)), i && (0, r.jsx)(f.xv, {
                        size: 12,
                        weight: 500,
                        align: "center",
                        color: p.Il.RED,
                        children: i.message
                    })]
                })
            };
            let v = (0, u.ZP)(h.Ml).withConfig({
                    componentId: "sc-b56ec8e4-0"
                })(["&.modal{max-width:420px;}&.bottom-sheet{height:calc(100% - 12px);}.modal-content,.bottom-sheet-content{display:flex;flex-direction:column;align-items:center;gap:40px;padding:60px 32px 40px;}"]),
                b = u.ZP.div.withConfig({
                    componentId: "sc-b56ec8e4-1"
                })(["display:flex;flex-direction:column;align-items:center;gap:8px;"]),
                _ = e => {
                    let {
                        handleHide: t
                    } = e;
                    return (0, r.jsxs)(v, {
                        handleHide: t,
                        breakpoint: 540,
                        children: [(0, r.jsxs)(b, {
                            children: [(0, r.jsx)(f.xv, {
                                family: "monument",
                                size: 24,
                                height: 40,
                                weight: 700,
                                align: "center",
                                color: p.Il.WHITE,
                                children: "Connect Wallet"
                            }), (0, r.jsx)(f.xv, {
                                size: 12,
                                height: 20,
                                align: "center",
                                color: p.Il.WHITE_75,
                                children: "Select one of these wallet providers to connect your Ethereum wallet to GAMEE."
                            })]
                        }), (0, r.jsx)(I, {
                            handleHide: t
                        }), (0, r.jsx)(f.xv, {
                            size: 10,
                            height: 12,
                            align: "center",
                            color: p.Il.WHITE_56,
                            children: "We do not own your private keys and cannot access your funds without your confirmation."
                        })]
                    })
                };
            var P = () => {
                    let {
                        isVisible: e,
                        onEntered: t,
                        onExited: n,
                        handleHide: o
                    } = (0, l.Rh)({
                        type: d.V.CONNECT_WALLET
                    });
                    return (0, r.jsx)(h.wT, {
                        type: d.V.CONNECT_WALLET,
                        isVisible: e,
                        onEntered: t,
                        onExited: n,
                        children: (0, r.jsx)(_, {
                            handleHide: o
                        })
                    })
                },
                A = () => {
                    let e = (0, s.T)(),
                        t = (0, s.C)(a.Ul),
                        n = (0, s.C)(a.X1),
                        i = (0, l.D9)(n);
                    return (0, o.useEffect)(() => {
                        t && 0 === n && e((0, c.XF)({
                            isEnabled: !1
                        }))
                    }, [t, n, e]), (0, o.useEffect)(() => {
                        let e = window.document.querySelector("body");
                        0 === i && 1 === n && (null == e || e.classList.add("body-lock")), 1 === i && 0 === n && (null == e || e.classList.remove("body-lock"))
                    }, [i, n]), (0, r.jsx)(o.Fragment, {
                        children: (0, r.jsx)(P, {})
                    })
                },
                T = n(16316),
                w = e => {
                    let {
                        children: t
                    } = e, n = (0, s.T)(), {
                        address: a
                    } = (0, i.m)(), c = (0, l.D9)(a);
                    return (0, o.useEffect)(() => {
                        a && !c && n((0, T.qM)()), !a && c && n((0, T.vp)()), a && c && a !== c && n((0, T.Jz)())
                    }, [a, c, n]), (0, r.jsxs)(o.Fragment, {
                        children: [t, (0, r.jsx)(A, {})]
                    })
                }
        },
        38390: function(e, t, n) {
            "use strict";
            var r = n(3827);
            n(64090);
            var o = n(8792),
                i = n(19539),
                l = n(98927);
            t.Z = e => {
                let {
                    href: t = "/",
                    copy: n = "Go to Homepage",
                    textProps: s,
                    replace: a = !1,
                    ...c
                } = e;
                return (0, r.jsx)(o.default, {
                    href: t,
                    passHref: !0,
                    legacyBehavior: !0,
                    replace: a,
                    children: (0, r.jsx)(l.zx, {
                        size: 56,
                        padding: 32,
                        background: i.Il.BLUE,
                        hover: i.Il.BLUE_HOVER,
                        ...c,
                        children: (0, r.jsx)(l.xv, {
                            asComponent: "span",
                            size: 14,
                            weight: 500,
                            color: i.Il.WHITE,
                            ...s,
                            children: n
                        })
                    })
                })
            }
        },
        73115: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var r = n(3827),
                o = n(64090),
                i = n(20703),
                l = n(79480),
                s = n(19539),
                a = n(98927),
                c = n(38390),
                u = {
                    src: "/_next/static/media/satellite.8729979d.png",
                    height: 640,
                    width: 640,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA30lEQVR42mNAgKdML+58ZIWw9zDlTP6lCGYePPBV9/jxn0kwZZ9e/C09cuJ/PkP0fx2wwLI1305OnP/9/8ZtP5d+efTK4d7Nb2+vnHv//87ll8VgBadP/zSevezH6QVrvv5/f+Punxvb9/9fM3fP7WsXv+gxIIPXl65ven7y/P/1k1b8X9+/ZDuSlC/j3d//2d8/eH/j4ppN/2e1Lv3cPvnF/2Wrvpy7e/OXAVzZ/ds/KzctP7nnyoI5OvOWfFnSOunj/81bv5xl+PLyGyNM0f///5lg7J27vhWdOPrJGgBnfn52hvQ1qwAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 8
                };
            let d = (0, l.ZP)(a.W2).withConfig({
                    componentId: "sc-b16a1e5e-0"
                })(["flex:1;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;margin:0 auto;"]),
                f = l.ZP.div.withConfig({
                    componentId: "sc-b16a1e5e-1"
                })(["position:relative;aspect-ratio:1;height:clamp(128px,40vw,224px);", "{height:256px;}"], s.BC.min.DESKTOP()),
                p = (0, l.ZP)(a.xv).withConfig({
                    componentId: "sc-b16a1e5e-2"
                })(["white-space:pre-wrap;line-height:125%;margin-top:24px;margin-bottom:8px;", "{font-size:48px;white-space:normal;}", "{font-size:64px;margin-top:48px;margin-bottom:16px;}"], s.BC.min.TABLET(), s.BC.min.DESKTOP()),
                h = (0, l.ZP)(a.xv).withConfig({
                    componentId: "sc-b16a1e5e-3"
                })(["max-width:300px;line-height:125%;margin-bottom:24px;> a{text-decoration:underline;}", "{max-width:560px;margin-bottom:48px;}", "{font-size:20px;}"], s.BC.min.TABLET(), s.BC.min.DESKTOP());
            var m = e => {
                let {
                    error: t
                } = e;
                return (0, o.useEffect)(() => {
                    console.log("---------------------"), console.log("Service unavailable error: ", t), console.log("---------------------")
                }, []), (0, r.jsx)("main", {
                    children: (0, r.jsxs)(d, {
                        children: [(0, r.jsx)(f, {
                            children: (0, r.jsx)(i.default, {
                                priority: !0,
                                src: u,
                                alt: "Satellite",
                                fill: !0,
                                quality: 100
                            })
                        }), (0, r.jsx)(p, {
                            asComponent: "h1",
                            size: 32,
                            weight: 700,
                            align: "center",
                            color: s.Il.WHITE,
                            children: "Houston,\nwe have a problem!"
                        }), (0, r.jsxs)(h, {
                            size: 16,
                            align: "center",
                            color: s.Il.WHITE_75,
                            children: ["Apologies for the inconvenience. Please wait until our servers are back online or contact ", (0, r.jsx)("a", {
                                href: "mailto:prizes@gamee.com?subject=".concat(encodeURIComponent("Prizes by GAMEE support")),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "support"
                            }), " for assistance.\nThank you."]
                        }), (0, r.jsx)(c.Z, {})]
                    })
                })
            }
        },
        19192: function(e, t, n) {
            "use strict";
            var r, o, i, l;
            n.d(t, {
                V: function() {
                    return r
                }
            }), (i = r || (r = {}))[i.CONNECT_WALLET = 0] = "CONNECT_WALLET", i[i.POINTS_FULL_RANKINGS = 1] = "POINTS_FULL_RANKINGS", i[i.POINTS_PHASE_ONE_INFO = 2] = "POINTS_PHASE_ONE_INFO", i[i.POINTS_PHASE_TWO_INFO = 3] = "POINTS_PHASE_TWO_INFO", i[i.POINTS_PHASE_THREE_INFO = 4] = "POINTS_PHASE_THREE_INFO", i[i.POINTS_PHASE_FOUR_INFO = 5] = "POINTS_PHASE_FOUR_INFO", i[i.STAKE = 6] = "STAKE", i[i.UNSTAKE = 7] = "UNSTAKE", i[i.RESTAKE = 8] = "RESTAKE", (l = o || (o = {}))[l.SOMETHING_FAILED = 666] = "SOMETHING_FAILED", l[l.NETWORK_REQUEST = 999] = "NETWORK_REQUEST", l[l.NETWORK_REQUEST_BATCH = 998] = "NETWORK_REQUEST_BATCH", l[l.ARC8_API__USER_REFRESH_TOKEN = 8e3] = "ARC8_API__USER_REFRESH_TOKEN", l[l.ARC8_API__BLOCKCHAIN_GET_GMEE_CLAIM_INFORMATION = 8050] = "ARC8_API__BLOCKCHAIN_GET_GMEE_CLAIM_INFORMATION", l[l.GAMEE_API__USER_REFRESH_TOKEN = 9e3] = "GAMEE_API__USER_REFRESH_TOKEN", l[l.GAMEE_API__POINTS_GET_INFORMATION = 9050] = "GAMEE_API__POINTS_GET_INFORMATION", l[l.GAMEE_API__POINTS_GET_LEADERBOARD = 9051] = "GAMEE_API__POINTS_GET_LEADERBOARD"
        },
        86967: function(e, t, n) {
            "use strict";
            n.d(t, {
                $U: function() {
                    return s
                },
                JM: function() {
                    return d
                },
                Ul: function() {
                    return a
                },
                VL: function() {
                    return l
                },
                X1: function() {
                    return c
                }
            });
            var r = n(64419),
                o = n(59120);
            let i = e => e[o.ZP.name],
                l = e => i(e).isAppMounted,
                s = e => i(e).dialogs,
                a = e => i(e).isDialogCleanup,
                c = (0, r.P1)(s, e => e.length);
            (0, r.P1)(s, (e, t) => t, (e, t) => e.some(e => e.type === t));
            let u = e => i(e).prices,
                d = (0, r.P1)(u, e => (null == e ? void 0 : e.gmee) || null);
            (0, r.P1)(u, e => (null == e ? void 0 : e.eth) || null)
        },
        59120: function(e, t, n) {
            "use strict";
            n.d(t, {
                NF: function() {
                    return o
                },
                OJ: function() {
                    return i
                },
                Wr: function() {
                    return s
                },
                XF: function() {
                    return a
                },
                vC: function() {
                    return l
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
                    prices: i,
                    showDialog: l,
                    hideDialog: s,
                    setDialogCleanupFlag: a
                } = r.actions;
            t.ZP = r
        },
        82460: function(e, t, n) {
            "use strict";
            n.d(t, {
                I0: function() {
                    return s
                },
                m7: function() {
                    return c
                },
                yL: function() {
                    return a
                }
            });
            var r = n(44214),
                o = n(16316);
            let i = {
                    isSuccess: null,
                    amountToClaim: null,
                    proof: null,
                    error: null
                },
                l = (0, r.oM)({
                    name: "migration",
                    initialState: i,
                    reducers: {
                        data(e, t) {
                            let {
                                amountToClaim: n,
                                proof: r
                            } = t.payload;
                            e.amountToClaim = n, e.proof = r
                        },
                        success(e, t) {
                            e.isSuccess = t.payload.isSuccess
                        },
                        error(e, t) {
                            e.error = t.payload.error
                        }
                    },
                    extraReducers(e) {
                        e.addCase(o.Jz, () => i), e.addCase(o.vp, () => i)
                    }
                }),
                {
                    data: s,
                    success: a,
                    error: c
                } = l.actions;
            t.ZP = l
        },
        94753: function(e, t, n) {
            "use strict";
            n.d(t, {
                fi: function() {
                    return a
                },
                oM: function() {
                    return c
                },
                pS: function() {
                    return u
                }
            });
            var r = n(44214),
                o = n(16316);
            let i = e => {
                    e.nftRankings && (e.nftRankings = e.nftRankings.map(e => ({ ...e,
                        ownedNumber: null
                    })))
                },
                l = (0, r.oM)({
                    name: "rankings",
                    initialState: {
                        status: "idle",
                        rankings: [],
                        requestCount: 0,
                        hasMore: !0,
                        nftRankings: null
                    },
                    reducers: {
                        setStatus(e, t) {
                            e.status = t.payload.status
                        },
                        setRankings: (e, t) => {
                            let {
                                rankings: n,
                                limit: r
                            } = t.payload;
                            e.rankings = n, e.requestCount = r, e.hasMore = n.length >= Number(.8 * r)
                        },
                        addRankings: (e, t) => {
                            let {
                                rankings: n,
                                limit: r
                            } = t.payload;
                            e.rankings = [...e.rankings, ...n], e.requestCount += r, e.hasMore = n.length >= Number(.8 * r)
                        },
                        setNftRankings: (e, t) => {
                            let {
                                nftRankings: n,
                                isForced: r = !1
                            } = t.payload;
                            (r || !e.nftRankings) && (e.nftRankings = n)
                        },
                        resetNftOwnedCount: e => {
                            e.nftRankings && (e.nftRankings = e.nftRankings.map(e => ({ ...e,
                                ownedNumber: null
                            })))
                        }
                    },
                    extraReducers(e) {
                        e.addCase(o.vp, e => i(e)), e.addCase(o.Jz, e => i(e))
                    }
                }),
                {
                    setStatus: s,
                    setRankings: a,
                    addRankings: c,
                    setNftRankings: u
                } = l.actions;
            t.ZP = l
        },
        86782: function(e, t, n) {
            "use strict";
            n.d(t, {
                hr: function() {
                    return c
                },
                jP: function() {
                    return a
                }
            });
            var r = n(44214),
                o = n(16316);
            let i = {
                    status: "idle",
                    unlockDate: null,
                    period: null,
                    hourlyRate: null,
                    amount: null
                },
                l = (0, r.oM)({
                    name: "staking",
                    initialState: i,
                    reducers: {
                        setStatus(e, t) {
                            e.status = t.payload.status
                        },
                        setStaking(e, t) {
                            let {
                                stakedAmountMicroToken: n,
                                period: r,
                                unlockDate: o,
                                hourlyRate: i
                            } = t.payload;
                            e.status = "loaded", e.amount = n / 1e6, e.period = r, e.unlockDate = o, e.hourlyRate = i
                        },
                        resetStaking: () => i
                    },
                    extraReducers(e) {
                        e.addCase(o.vp, () => i), e.addCase(o.Jz, () => ({ ...i,
                            status: "stale"
                        }))
                    }
                }),
                {
                    setStatus: s,
                    setStaking: a,
                    resetStaking: c
                } = l.actions;
            t.ZP = l
        },
        30868: function(e, t, n) {
            "use strict";
            n.d(t, {
                gz: function() {
                    return a
                },
                lI: function() {
                    return s
                }
            });
            var r = n(44214),
                o = n(16316);
            let i = {
                    lootPoints: null,
                    lootRank: null,
                    gmeeAthBalance: null,
                    mocaId: null
                },
                l = (0, r.oM)({
                    name: "user",
                    initialState: i,
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
                        e.addCase(o.Jz, () => i), e.addCase(o.vp, () => i)
                    }
                }),
                {
                    setLootPoints: s,
                    setMocaId: a
                } = l.actions;
            t.ZP = l
        },
        72453: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(79480),
                o = n(19539);
            let i = (0, r.iv)([":root{--safe-area-inset-top:env(safe-area-inset-top);--safe-area-inset-left:env(safe-area-inset-left);--safe-area-inset-right:env(safe-area-inset-right);--safe-area-inset-bottom:env(safe-area-inset-bottom);}*,*::before,*::after{box-sizing:border-box;padding:0;margin:0;}html{color:", ";background:", ";}body{cursor:default;font-family:var(--font-inter);max-width:100vw;min-height:100%;min-width:320px;overflow-x:hidden;overscroll-behavior:contain;}main{position:relative;display:flex;flex-direction:column;min-width:0;min-height:100vh;min-height:100svh;}a{outline:none;color:inherit;text-decoration:none;-webkit-tap-highlight-color:transparent;}body.body-lock{overflow:hidden;}.mono{font-family:monospace;}.wrap{overflow-wrap:anywhere;}#tc-widget-root,wcm-modal{position:relative;z-index:9999;}@media (prefers-color-scheme:dark){html{color-scheme:dark;}}", " ", ""], o.Il.WHITE, o.Il.DARK_BLUE, o.pB.global, o.pB.dialog(200)),
                l = (0, r.vJ)(["", ""], i);
            t.default = l
        },
        75843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n(3827),
                o = n(64090),
                i = n(47907),
                l = n(79480);

            function s(e) {
                let {
                    children: t
                } = e, [n] = (0, o.useState)(() => new l.qH);
                return (0, i.useServerInsertedHTML)(() => {
                    let e = n.getStyleElement();
                    return n.instance.clearTag(), (0, r.jsx)(r.Fragment, {
                        children: e
                    })
                }), (0, r.jsx)(r.Fragment, {
                    children: t
                })
            }
        }
    },
    function(e) {
        e.O(0, [300, 430, 792, 669, 331, 189, 927, 971, 69, 744], function() {
            return e(e.s = 95957)
        }), _N_E = e.O()
    }
]);