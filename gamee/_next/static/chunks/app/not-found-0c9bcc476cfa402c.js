(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [160], {
        94500: function(e, t, n) {
            Promise.resolve().then(n.bind(n, 73512))
        },
        38390: function(e, t, n) {
            "use strict";
            var i = n(3827);
            n(64090);
            var o = n(8792),
                a = n(19539),
                r = n(98927);
            t.Z = e => {
                let {
                    href: t = "/",
                    copy: n = "Go to Homepage",
                    textProps: s,
                    replace: c = !1,
                    ...l
                } = e;
                return (0, i.jsx)(o.default, {
                    href: t,
                    passHref: !0,
                    legacyBehavior: !0,
                    replace: c,
                    children: (0, i.jsx)(r.zx, {
                        size: 56,
                        padding: 32,
                        background: a.Il.BLUE,
                        hover: a.Il.BLUE_HOVER,
                        ...l,
                        children: (0, i.jsx)(r.xv, {
                            asComponent: "span",
                            size: 14,
                            weight: 500,
                            color: a.Il.WHITE,
                            ...s,
                            children: n
                        })
                    })
                })
            }
        },
        73512: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var i = n(3827);
            n(64090);
            var o = n(20703),
                a = n(79480),
                r = n(19539),
                s = n(98927),
                c = n(38390),
                l = {
                    src: "/_next/static/media/telescope.9f98939e.png",
                    height: 640,
                    width: 640,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7ElEQVR42mMAgf+7e5kYGCDgfxqD5K3ZDd2LlpzOY0AGnyaqOB1Ysq5zatvye0/mtfxfvfjof4bmiyIMuyIYVC/P7L2+qWv6/3uzJvw/s/3M/6tlQVcXJCQXMsjeZmdwdy0VOVWTsa0ltjLrSorPpk8bl2548eS/yP///5Xhxh99+p8LRE/Nbepd17Fg2qtn/w0f3f60HK7g0c1PWgtmbtFOL5h5cur8k9dWrbspD5dcPO8QM4gOTZ5Q0Nu1rm7xvAM1/dMOVILEUrUcIL671pDifqyhcuK1vtqcu3P6Sy70NHY8md8bwsDAwAAAbsptqIohLPsAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 8
                };
            let p = (0, a.ZP)(s.W2).withConfig({
                    componentId: "sc-ff08efa8-0"
                })(["flex:1;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;margin:0 auto;"]),
                h = a.ZP.div.withConfig({
                    componentId: "sc-ff08efa8-1"
                })(["position:relative;aspect-ratio:1;height:clamp(128px,40vw,224px);", "{height:256px;}"], r.BC.min.DESKTOP()),
                f = (0, a.ZP)(s.xv).withConfig({
                    componentId: "sc-ff08efa8-2"
                })(["white-space:pre-wrap;line-height:125%;margin-top:32px;margin-bottom:8px;", "{font-size:48px;}", "{font-size:56px;margin-top:48px;margin-bottom:16px;}"], r.BC.min.TABLET(), r.BC.min.DESKTOP()),
                m = (0, a.ZP)(s.xv).withConfig({
                    componentId: "sc-ff08efa8-3"
                })(["max-width:320px;line-height:125%;margin-bottom:24px;> a{text-decoration:underline;}", "{margin-bottom:48px;}", "{max-width:unset;}", "{font-size:20px;}"], r.BC.min.MOBILE_XL(), r.BC.min.TABLET(), r.BC.min.DESKTOP());
            var g = () => (0, i.jsx)("main", {
                className: "no-theme",
                children: (0, i.jsxs)(p, {
                    children: [(0, i.jsx)(h, {
                        children: (0, i.jsx)(o.default, {
                            priority: !0,
                            src: l,
                            alt: "Telescope",
                            fill: !0,
                            quality: 100
                        })
                    }), (0, i.jsx)(f, {
                        asComponent: "h1",
                        size: 32,
                        height: "normal",
                        weight: 700,
                        align: "center",
                        color: r.Il.WHITE,
                        children: "Oops! The page\ncannot be found"
                    }), (0, i.jsx)(m, {
                        size: 16,
                        align: "center",
                        color: r.Il.WHITE_75,
                        children: "Nothing to see here except for another guy who wants to play!"
                    }), (0, i.jsx)(c.Z, {})]
                })
            })
        }
    },
    function(e) {
        e.O(0, [300, 792, 927, 971, 69, 744], function() {
            return e(e.s = 94500)
        }), _N_E = e.O()
    }
]);