"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [342], {
        83914: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return x
                }
            });
            var o = n(3827),
                i = n(64090),
                r = n(20703),
                a = n(79480),
                s = n(71240);
            let c = {
                    1: "etherscan.io",
                    11155111: "sepolia.etherscan.io"
                },
                l = (e, t) => {
                    let n = "https://".concat(c[s.rC]);
                    return "address" === e ? "".concat(n, "/address/").concat(t) : "transaction" === e ? "".concat(n, "/tx/").concat(t) : "token" === e ? "".concat(n, "/token/").concat(t) : "block" === e ? "".concat(n, "/block/").concat(t) : ""
                };
            var h = n(22713),
                d = n(19539),
                u = n(98927);
            let g = (0, a.ZP)(u.hs).withConfig({
                    componentId: "sc-a4b4882d-0"
                })(["> span{transition:opacity 100ms ease;opacity:0;}"]),
                p = (0, a.ZP)(u.hs).withConfig({
                    componentId: "sc-a4b4882d-1"
                })(["padding:8px;", " @media (hover:hover) and (pointer:fine){&:hover{", "{cursor:pointer;> p{text-decoration:underline;}> span{opacity:1;}}}}"], e => {
                    let {
                        $isUser: t
                    } = e;
                    if (t) return (0, a.iv)(["border-radius:99px;background:", ";"], d.Il.WHITE_05)
                }, g),
                f = a.ZP.div.withConfig({
                    componentId: "sc-a4b4882d-2"
                })(["position:relative;width:40px;height:40px;border-radius:99px;", ""], e => {
                    let {
                        $rank: t
                    } = e;
                    if (!(t > 3)) return (0, a.iv)(["&::after{z-index:0;content:' ';", ";border-radius:99px;", ";", ";", ";}"], d.tA.allAbs(-2), 1 === t && "background: linear-gradient(160deg, #FFCA0E 8%, #FFEA9F 20%, #FF8C21 40%, #FFDB1B 60%, #FF9315 75%, #FFCA0E 100%);", 2 === t && "background: linear-gradient(160deg, #CFCFCF 8%, #FFFFFF 20%, #B1B1B1 40%, #E7E7E7 60%, #8F8F8F 75%, #FFFFFF 100%);", 3 === t && "background: linear-gradient(160deg, #AA6640 8%, #FFAE74 20%, #924C36 40%, #FFA564 60%, #BE6634 75%, #DA8446 100%);")
                }),
                m = (0, a.ZP)(r.default).withConfig({
                    componentId: "sc-a4b4882d-3"
                })(["z-index:2;border-radius:99px;", ""], e => {
                    let {
                        $rank: t
                    } = e;
                    return t <= 3 && "background: ".concat(d.Il.BLACK, "; padding: 3px;")
                });
            var x = (0, i.forwardRef)((e, t) => {
                let {
                    rank: n,
                    walletAddress: i,
                    points: r,
                    isUser: a,
                    ...s
                } = e;
                return (0, o.jsxs)(p, {
                    ref: t,
                    alignItems: "center",
                    gap: 16,
                    $isUser: a,
                    ...s,
                    children: [(0, o.jsx)(f, {
                        $rank: n,
                        children: (0, o.jsx)(m, {
                            src: "/assets/fallback-avatar.jpg",
                            alt: "",
                            fill: !0,
                            quality: 100,
                            $rank: n
                        })
                    }), (0, o.jsx)(u.xv, {
                        size: 14,
                        height: 20,
                        weight: 400,
                        align: "left",
                        color: d.Il.WHITE,
                        children: "".concat(n, ".")
                    }), (0, o.jsx)("a", {
                        href: l("address", i),
                        target: "_blank",
                        children: (0, o.jsxs)(g, {
                            alignItems: "center",
                            gap: 4,
                            children: [(0, o.jsx)(u.xv, {
                                size: 14,
                                height: 20,
                                weight: a ? 700 : 400,
                                align: "left",
                                color: d.Il.WHITE,
                                children: a ? "You" : (0, h.R1)(i)
                            }), (0, o.jsx)(u.JO, {
                                type: "social-etherscan",
                                size: 16,
                                color: d.Il.WHITE
                            })]
                        })
                    }), (0, o.jsxs)(u.hs, {
                        alignItems: "center",
                        gap: 4,
                        style: {
                            marginLeft: "auto"
                        },
                        children: [(0, o.jsx)(u.xv, {
                            size: 14,
                            height: 20,
                            weight: 700,
                            align: "right",
                            color: d.Il.WHITE,
                            children: (0, h.uf)(r)
                        }), (0, o.jsx)(u.Z, {
                            type: "wat-point",
                            size: 24
                        })]
                    })]
                })
            })
        },
        2187: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return k
                }
            });
            var o = n(3827),
                i = n(64090),
                r = n(79480),
                a = n(69311),
                s = n(19943),
                c = n(5905),
                l = n(3254),
                h = n(19539),
                d = n(98927),
                u = n(83914);
            let g = r.ZP.div.withConfig({
                    componentId: "sc-d06ee9d3-0"
                })(["display:block;background:", ";", ""], h.Il.WHITE_12, h.tA.blur(10)),
                p = (0, r.ZP)(d.hs).withConfig({
                    componentId: "sc-d06ee9d3-1"
                })(["padding:8px;"]),
                f = (0, r.ZP)(g).withConfig({
                    componentId: "sc-d06ee9d3-2"
                })(["flex-shrink:0;width:40px;height:40px;border-radius:99px;"]),
                m = (0, r.ZP)(g).withConfig({
                    componentId: "sc-d06ee9d3-3"
                })(["border-radius:99px;width:100%;max-width:", ";height:", ";"], e => {
                    let {
                        $width: t
                    } = e;
                    return "".concat(t, "px;")
                }, e => {
                    let {
                        $height: t
                    } = e;
                    return "".concat(t, "px;")
                });
            var x = () => (0, o.jsxs)(p, {
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                isFullWidth: !0,
                children: [(0, o.jsx)(f, {}), (0, o.jsx)(m, {
                    $height: 20,
                    $width: 20
                }), (0, o.jsx)(m, {
                    $height: 20,
                    $width: 112
                }), (0, o.jsx)(m, {
                    $height: 20,
                    $width: 56,
                    style: {
                        marginLeft: "auto"
                    }
                })]
            });
            let w = (0, r.ZP)(d.hs).withConfig({
                componentId: "sc-f9367504-0"
            })(["width:100%;max-width:380px;"]);
            var k = e => {
                let {
                    count: t
                } = e, {
                    address: n
                } = (0, a.m)(), r = (0, s.C)(c.Sj), g = (0, s.C)(l.np), p = (0, s.C)(l.l4), f = (0, i.useMemo)(() => r.slice(0, t), [r, t]);
                return (0, o.jsxs)(w, {
                    flexDirection: "column",
                    children: [0 === f.length ? Array(t).fill("").map((e, t) => (0, o.jsx)(x, {}, "ranking-skeleton-".concat(t))) : f.map((e, t) => (0, o.jsx)(u.Z, {
                        isUser: !!n && e.walletAddress.toLowerCase() === n.toLowerCase(),
                        ...e
                    }, "ranking-".concat(t))), !!n && "number" == typeof p && p > 10 && (0, o.jsxs)(i.Fragment, {
                        children: [11 !== p && (0, o.jsx)(d.hs, {
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 2,
                            style: {
                                marginBottom: 16
                            },
                            children: [, , , ].fill("").map((e, t) => (0, o.jsx)(d.xv, {
                                asComponent: "span",
                                size: 16,
                                height: 4,
                                weight: 700,
                                color: h.Il.WHITE_75,
                                children: "."
                            }, "spacer-".concat(t)))
                        }), (0, o.jsx)(u.Z, {
                            isUser: !0,
                            rank: p,
                            walletAddress: n,
                            points: g || 0
                        })]
                    })]
                })
            }
        },
        52447: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return f
                }
            });
            var o, i, r = n(3827);
            n(64090);
            var a = n(79480),
                s = n(19539),
                c = n(98927),
                l = n(52846);

            function h() {
                return (h = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }
            let d = a.ZP.section.withConfig({
                    componentId: "sc-4afb3086-0"
                })(["position:relative;display:flex;flex-direction:column;align-items:center;width:100%;"]),
                u = (0, a.ZP)(c.W2).withConfig({
                    componentId: "sc-4afb3086-1"
                })(["display:flex;flex-direction:column;align-items:center;gap:48px;"]),
                g = (0, a.ZP)(c.xv).withConfig({
                    componentId: "sc-4afb3086-2"
                })(["", "{font-size:28px;}"], s.BC.min.MOBILE_L()),
                p = (0, a.ZP)(function(e) {
                    return l.createElement("svg", h({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 96 82"
                    }, e), o || (o = l.createElement("path", {
                        stroke: "#FF73D4",
                        strokeLinecap: "round",
                        strokeWidth: 4,
                        d: "M27.124 27.107C22.623 36.546 12.651 57.4 7.735 67.892a484 484 0 0 0-4.112 8.96c-.437.983-1.857 3.41-.82 3.123.766-.212 2.203-1.033 2.685-1.3 4.13-2.295 8.117-4.868 12.055-7.476C33.013 60.95 47.537 49.605 61.04 36.886c.05-.047 2.138-2.165 2.106-1.653-.035.556-.51 2.046-.58 2.275-1.084 3.6-2.305 7.158-3.448 10.74-1.654 5.187-3.904 10.814-4.183 16.323-.147 2.908 5.19-2.242 5.582-2.558 5.953-4.78 11.588-9.998 17.058-15.32 2.244-2.182 2.367-2.366 4.38-4.408.513-.52 1.87-2.035 1.753-1.315-.317 1.955-1.26 3.917-1.78 5.837-.045.165-.722 1.794-.015 1.47a11.5 11.5 0 0 0 3.095-2.092c.335-.32 1.145-1.684.961-.452-.306 2.059-.69 4.11-1.046 6.161-.111.646-.533 1.7-.056 2.177M38.938 6.176c1.804 6.471 3.513 12.986 5.49 19.409.062.202.172.538.425.27.469-.496.681-1.39 1.005-1.972 1.023-1.832 2.302-3.51 3.538-5.2 2.988-4.089 5.655-8.475 8.68-12.507"
                    })), i || (i = l.createElement("path", {
                        stroke: "#FF73D4",
                        strokeLinecap: "round",
                        strokeWidth: 4,
                        d: "M44.853 5.132c4.898 9.026 4.033 7.414 8.39 15.504.606 1.127 1.202 2.26 1.817 3.383.122.224.35 1.485.773 1.063.339-.339.426-.806.58-1.237.771-2.16 2.262-3.97 3.576-5.82 1.578-2.22 2.846-4.537 4.157-6.92.391-.712.889-1.307.889-2.146M71.994 5.132c-1.862 5.134-3.431 10.576-5.645 15.581-.05.115-.213.077.078.077M71.647 4.436c2.895 5 5.79 10 8.718 14.982.621 1.057.46.724.677 1.372M67.123 15.919h11.83M84.173 4.436c1.197 5.559 3.48 11.626 3.48 17.398M76.866 3.74A551 551 0 0 0 93.568 2"
                    })))
                }).withConfig({
                    componentId: "sc-4afb3086-3"
                })(["z-index:1;position:absolute;top:12px;left:12px;height:64px;aspect-ratio:96/82;", "{left:8px;top:-12px;height:88px;}"], s.BC.min.MOBILE_L());
            var f = () => (0, r.jsx)(d, {
                children: (0, r.jsxs)(u, {
                    children: [(0, r.jsxs)(c.hs, {
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 8,
                        children: [(0, r.jsx)(c.xv, {
                            size: 14,
                            height: 20,
                            weight: 700,
                            spacing: 1.4,
                            align: "center",
                            color: s.Il.WHITE,
                            isUppercase: !0,
                            children: "FAQ"
                        }), (0, r.jsx)(g, {
                            asComponent: "h1",
                            family: "monument",
                            size: 22,
                            height: "normal",
                            align: "center",
                            wrap: "nowrap",
                            color: s.Il.WHITE,
                            children: "What is important?"
                        }), (0, r.jsx)(p, {})]
                    }), (0, r.jsxs)(c.hs, {
                        flexDirection: "column",
                        isFullWidth: !0,
                        children: [(0, r.jsx)(c.D, {
                            title: "What is the Wat Protocol?",
                            children: (0, r.jsxs)(c.xv, {
                                size: 14,
                                height: 20,
                                weight: 400,
                                color: s.Il.WHITE_75,
                                children: ["The Wat Protocol, previously known as the Phoenix Protocol, is GAMEE's rewards initiative for GMEE token holders on Ethereum, and for our players across the GAMEE ecosystem. There will be five episodes in total, and each episode offers new and interesting ways to collect ", (0, r.jsx)(c.xv, {
                                    asComponent: "b",
                                    size: "inherit",
                                    weight: 700,
                                    color: s.Il.WHITE,
                                    children: "WatPoints"
                                }), "."]
                            })
                        }), (0, r.jsx)(c.D, {
                            title: "What are WatPoints?",
                            children: (0, r.jsx)(c.xv, {
                                size: 14,
                                height: 20,
                                weight: 400,
                                color: s.Il.WHITE_75,
                                children: "WatPoints, previously known as Loot, is the name given to the points that you collect in the Wat Protocol. The purpose of WatPoints will be revealed in a later episode!"
                            })
                        }), (0, r.jsx)(c.D, {
                            title: "Can I connect my Wat Protocol WatPoints balance with my WatPoints balance elsewhere?",
                            children: (0, r.jsx)(c.xv, {
                                size: 14,
                                height: 20,
                                weight: 400,
                                color: s.Il.WHITE_75,
                                children: "No. Your WatPoints balance elsewhere (eg. Telegram or Arc8) and here on the Wat Protocol website are currently separate balances."
                            })
                        }), (0, r.jsx)(c.D, {
                            title: "Where can I find out more about the Wat Protocol?",
                            children: (0, r.jsxs)(c.xv, {
                                size: 14,
                                height: 20,
                                weight: 400,
                                color: s.Il.WHITE_75,
                                children: ["You can take a look at this ", (0, r.jsx)("a", {
                                    href: "https://gamee.medium.com/the-phoenix-protocol-an-exciting-new-quest-for-gmee-token-holders-4ac9fe4d9928",
                                    target: "_blank",
                                    children: "article"
                                }), " for more information, or visit our ", " ", (0, r.jsx)("a", {
                                    href: "https://wiki.gamee.com/cryptoeconomics/phoenix-protocol-and-loot",
                                    target: "_blank",
                                    children: "Wat Protocol FAQ page"
                                }), ", which is regularly updated."]
                            })
                        }), (0, r.jsx)(c.D, {
                            title: "Can I claim my WatPoints from Telegram/Arc8 on the Wat Protocol website?",
                            children: (0, r.jsx)(c.xv, {
                                size: 14,
                                height: 20,
                                weight: 400,
                                color: s.Il.WHITE_75,
                                children: "No – the WatPoints you collect elsewhere, such as on Telegram or in Arc8, are currently stored there. However, before the end of the Wat Protocol, it will be possible to merge your balances, and your entire WatPoints balance from across the GAMEE ecosystem will be counted."
                            })
                        }), (0, r.jsx)(c.D, {
                            title: "What is Episode 3: Hard Staking?",
                            children: (0, r.jsx)(c.xv, {
                                size: 14,
                                height: 20,
                                weight: 400,
                                color: s.Il.WHITE_75,
                                children: "Episode 3 of the Wat Protocol is a hard-staking initiative on Ethereum: this means that the GMEE you commit to stake is locked for the period of time that you choose. You can choose to stake for 30 days or 60 days, with the latter option resulting in more WatPoints."
                            })
                        }), (0, r.jsx)(c.D, {
                            title: "How much GMEE can I stake?",
                            children: (0, r.jsx)(c.xv, {
                                size: 14,
                                height: 20,
                                weight: 400,
                                color: s.Il.WHITE_75,
                                children: "The minimum staking amount is 1000 GMEE. There is no upper limit on how much GMEE you can stake. However, the more GMEE you stake (and the longer you do it), the more WatPoints you will earn."
                            })
                        }), (0, r.jsx)(c.D, {
                            title: "Is my GMEE safe while hard staking?",
                            children: (0, r.jsxs)(c.xv, {
                                size: 14,
                                height: 20,
                                weight: 400,
                                color: s.Il.WHITE_75,
                                children: ["Yes. Your GMEE is locked into a contract for the duration of time you choose (30 or 60 days). It will be returned to you afterwards. However, note that you cannot access or trade your staked GMEE during this period; if you withdraw your stake, there is a ", (0, r.jsx)(c.xv, {
                                    asComponent: "b",
                                    size: "inherit",
                                    weight: 700,
                                    color: s.Il.WHITE,
                                    children: "5% tax"
                                }), " on the amount staked."]
                            })
                        }), (0, r.jsx)(c.D, {
                            title: "Can I change the amount of GMEE I have staked?",
                            hideBorder: !0,
                            children: (0, r.jsxs)(c.xv, {
                                size: 14,
                                height: 20,
                                weight: 400,
                                color: s.Il.WHITE_75,
                                children: ["You cannot remove GMEE from the contract after you have staked without incurring a ", (0, r.jsx)(c.xv, {
                                    asComponent: "b",
                                    size: "inherit",
                                    weight: 700,
                                    color: s.Il.WHITE,
                                    children: "5% tax"
                                }), ", but you can stake more GMEE. You must stake for the same amount of time (30 or 60 days) and the staking period will be reset back to day one for all the GMEE you now have in the contract."]
                            })
                        })]
                    })]
                })
            })
        },
        1782: function(e, t, n) {
            n.d(t, {
                Y: function() {
                    return o
                },
                r: function() {
                    return i
                }
            });
            let o = 50,
                i = 25
        },
        5905: function(e, t, n) {
            n.d(t, {
                MZ: function() {
                    return u
                },
                Qx: function() {
                    return s
                },
                Sj: function() {
                    return h
                },
                Sv: function() {
                    return l
                },
                Uc: function() {
                    return d
                },
                lo: function() {
                    return c
                }
            });
            var o = n(64419),
                i = n(1782),
                r = n(94753);
            let a = e => e[r.ZP.name],
                s = e => a(e).rankings,
                c = e => a(e).requestCount,
                l = e => a(e).hasMore,
                h = (0, o.P1)(s, e => e.slice(0, i.r)),
                d = e => a(e).nftRankings,
                u = (0, o.P1)(d, e => e ? e.reduce((e, t) => Number(t.ownedNumber) > 0 ? e + t.tier.pointsHourly * Number(t.ownedNumber) : e, 0) : 0);
            (0, o.P1)(d, e => e ? e.reduce((e, t) => 0 === Number(t.ownedNumber) ? e + t.tier.pointsHourly : e, 0) : 0)
        },
        94753: function(e, t, n) {
            n.d(t, {
                fi: function() {
                    return c
                },
                oM: function() {
                    return l
                },
                pS: function() {
                    return h
                }
            });
            var o = n(44214),
                i = n(16316);
            let r = e => {
                    e.nftRankings && (e.nftRankings = e.nftRankings.map(e => ({ ...e,
                        ownedNumber: null
                    })))
                },
                a = (0, o.oM)({
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
                                limit: o
                            } = t.payload;
                            e.rankings = n, e.requestCount = o, e.hasMore = n.length >= Number(.8 * o)
                        },
                        addRankings: (e, t) => {
                            let {
                                rankings: n,
                                limit: o
                            } = t.payload;
                            e.rankings = [...e.rankings, ...n], e.requestCount += o, e.hasMore = n.length >= Number(.8 * o)
                        },
                        setNftRankings: (e, t) => {
                            let {
                                nftRankings: n,
                                isForced: o = !1
                            } = t.payload;
                            (o || !e.nftRankings) && (e.nftRankings = n)
                        },
                        resetNftOwnedCount: e => {
                            e.nftRankings && (e.nftRankings = e.nftRankings.map(e => ({ ...e,
                                ownedNumber: null
                            })))
                        }
                    },
                    extraReducers(e) {
                        e.addCase(i.vp, e => r(e)), e.addCase(i.Jz, e => r(e))
                    }
                }),
                {
                    setStatus: s,
                    setRankings: c,
                    addRankings: l,
                    setNftRankings: h
                } = a.actions;
            t.ZP = a
        }
    }
]);