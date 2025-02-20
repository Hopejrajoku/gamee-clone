"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [840], {
        22840: function(e, r, n) {
            var t = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
                i = Math.ceil,
                s = Math.floor,
                o = "[BigNumber Error] ",
                u = o + "Number primitive has more than 15 significant digits: ",
                f = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13];

            function l(e) {
                var r = 0 | e;
                return e > 0 || e === r ? r : r - 1
            }

            function c(e) {
                for (var r, n, t = 1, i = e.length, s = e[0] + ""; t < i;) {
                    for (n = 14 - (r = e[t++] + "").length; n--; r = "0" + r);
                    s += r
                }
                for (i = s.length; 48 === s.charCodeAt(--i););
                return s.slice(0, i + 1 || 1)
            }

            function a(e, r) {
                var n, t, i = e.c,
                    s = r.c,
                    o = e.s,
                    u = r.s,
                    f = e.e,
                    l = r.e;
                if (!o || !u) return null;
                if (n = i && !i[0], t = s && !s[0], n || t) return n ? t ? 0 : -u : o;
                if (o != u) return o;
                if (n = o < 0, t = f == l, !i || !s) return t ? 0 : !i ^ n ? 1 : -1;
                if (!t) return f > l ^ n ? 1 : -1;
                for (o = 0, u = (f = i.length) < (l = s.length) ? f : l; o < u; o++)
                    if (i[o] != s[o]) return i[o] > s[o] ^ n ? 1 : -1;
                return f == l ? 0 : f > l ^ n ? 1 : -1
            }

            function h(e, r, n, t) {
                if (e < r || e > n || e !== s(e)) throw Error(o + (t || "Argument") + ("number" == typeof e ? e < r || e > n ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
            }

            function g(e) {
                var r = e.c.length - 1;
                return l(e.e / 14) == r && e.c[r] % 2 != 0
            }

            function p(e, r) {
                return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (r < 0 ? "e" : "e+") + r
            }

            function w(e, r, n) {
                var t, i;
                if (r < 0) {
                    for (i = n + "."; ++r; i += n);
                    e = i + e
                } else if (t = e.length, ++r > t) {
                    for (i = n, r -= t; --r; i += n);
                    e += i
                } else r < t && (e = e.slice(0, r) + "." + e.slice(r));
                return e
            }
            var m = function e(r) {
                var n, m, d, v, N, O, b, y, E, A = k.prototype = {
                        constructor: k,
                        toString: null,
                        valueOf: null
                    },
                    S = new k(1),
                    _ = 20,
                    R = 4,
                    D = -7,
                    P = 21,
                    B = -1e7,
                    L = 1e7,
                    U = !1,
                    x = 1,
                    C = 0,
                    I = {
                        prefix: "",
                        groupSize: 3,
                        secondaryGroupSize: 0,
                        groupSeparator: ",",
                        decimalSeparator: ".",
                        fractionGroupSize: 0,
                        fractionGroupSeparator: "\xa0",
                        suffix: ""
                    },
                    T = "0123456789abcdefghijklmnopqrstuvwxyz",
                    M = !0;

                function k(e, r) {
                    var n, i, o, f, l, c, a, g, p = this;
                    if (!(p instanceof k)) return new k(e, r);
                    if (null == r) {
                        if (e && !0 === e._isBigNumber) {
                            p.s = e.s, !e.c || e.e > L ? p.c = p.e = null : e.e < B ? p.c = [p.e = 0] : (p.e = e.e, p.c = e.c.slice());
                            return
                        }
                        if ((c = "number" == typeof e) && 0 * e == 0) {
                            if (p.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                                for (f = 0, l = e; l >= 10; l /= 10, f++);
                                f > L ? p.c = p.e = null : (p.e = f, p.c = [e]);
                                return
                            }
                            g = String(e)
                        } else {
                            if (!t.test(g = String(e))) return E(p, g, c);
                            p.s = 45 == g.charCodeAt(0) ? (g = g.slice(1), -1) : 1
                        }(f = g.indexOf(".")) > -1 && (g = g.replace(".", "")), (l = g.search(/e/i)) > 0 ? (f < 0 && (f = l), f += +g.slice(l + 1), g = g.substring(0, l)) : f < 0 && (f = g.length)
                    } else {
                        if (h(r, 2, T.length, "Base"), 10 == r && M) return q(p = new k(e), _ + p.e + 1, R);
                        if (g = String(e), c = "number" == typeof e) {
                            if (0 * e != 0) return E(p, g, c, r);
                            if (p.s = 1 / e < 0 ? (g = g.slice(1), -1) : 1, k.DEBUG && g.replace(/^0\.0*|\./, "").length > 15) throw Error(u + e)
                        } else p.s = 45 === g.charCodeAt(0) ? (g = g.slice(1), -1) : 1;
                        for (n = T.slice(0, r), f = l = 0, a = g.length; l < a; l++)
                            if (0 > n.indexOf(i = g.charAt(l))) {
                                if ("." == i) {
                                    if (l > f) {
                                        f = a;
                                        continue
                                    }
                                } else if (!o && (g == g.toUpperCase() && (g = g.toLowerCase()) || g == g.toLowerCase() && (g = g.toUpperCase()))) {
                                    o = !0, l = -1, f = 0;
                                    continue
                                }
                                return E(p, String(e), c, r)
                            }
                        c = !1, (f = (g = y(g, r, 10, p.s)).indexOf(".")) > -1 ? g = g.replace(".", "") : f = g.length
                    }
                    for (l = 0; 48 === g.charCodeAt(l); l++);
                    for (a = g.length; 48 === g.charCodeAt(--a););
                    if (g = g.slice(l, ++a)) {
                        if (a -= l, c && k.DEBUG && a > 15 && (e > 9007199254740991 || e !== s(e))) throw Error(u + p.s * e);
                        if ((f = f - l - 1) > L) p.c = p.e = null;
                        else if (f < B) p.c = [p.e = 0];
                        else {
                            if (p.e = f, p.c = [], l = (f + 1) % 14, f < 0 && (l += 14), l < a) {
                                for (l && p.c.push(+g.slice(0, l)), a -= 14; l < a;) p.c.push(+g.slice(l, l += 14));
                                l = 14 - (g = g.slice(l)).length
                            } else l -= a;
                            for (; l--; g += "0");
                            p.c.push(+g)
                        }
                    } else p.c = [p.e = 0]
                }

                function G(e, r, n, t) {
                    var i, s, o, u, f;
                    if (null == n ? n = R : h(n, 0, 8), !e.c) return e.toString();
                    if (i = e.c[0], o = e.e, null == r) f = c(e.c), f = 1 == t || 2 == t && (o <= D || o >= P) ? p(f, o) : w(f, o, "0");
                    else if (s = (e = q(new k(e), r, n)).e, u = (f = c(e.c)).length, 1 == t || 2 == t && (r <= s || s <= D)) {
                        for (; u < r; f += "0", u++);
                        f = p(f, s)
                    } else if (r -= o, f = w(f, s, "0"), s + 1 > u) {
                        if (--r > 0)
                            for (f += "."; r--; f += "0");
                    } else if ((r += s - u) > 0)
                        for (s + 1 == u && (f += "."); r--; f += "0");
                    return e.s < 0 && i ? "-" + f : f
                }

                function F(e, r) {
                    for (var n, t, i = 1, s = new k(e[0]); i < e.length; i++)(t = new k(e[i])).s && (n = a(s, t)) !== r && (0 !== n || s.s !== r) || (s = t);
                    return s
                }

                function j(e, r, n) {
                    for (var t = 1, i = r.length; !r[--i]; r.pop());
                    for (i = r[0]; i >= 10; i /= 10, t++);
                    return (n = t + 14 * n - 1) > L ? e.c = e.e = null : n < B ? e.c = [e.e = 0] : (e.e = n, e.c = r), e
                }

                function q(e, r, n, t) {
                    var o, u, l, c, a, h, g, p = e.c;
                    if (p) {
                        e: {
                            for (o = 1, c = p[0]; c >= 10; c /= 10, o++);
                            if ((u = r - o) < 0) u += 14,
                            l = r,
                            g = s((a = p[h = 0]) / f[o - l - 1] % 10);
                            else if ((h = i((u + 1) / 14)) >= p.length) {
                                if (t) {
                                    for (; p.length <= h; p.push(0));
                                    a = g = 0, o = 1, u %= 14, l = u - 14 + 1
                                } else break e
                            } else {
                                for (o = 1, a = c = p[h]; c >= 10; c /= 10, o++);
                                u %= 14, g = (l = u - 14 + o) < 0 ? 0 : s(a / f[o - l - 1] % 10)
                            }
                            if (t = t || r < 0 || null != p[h + 1] || (l < 0 ? a : a % f[o - l - 1]), t = n < 4 ? (g || t) && (0 == n || n == (e.s < 0 ? 3 : 2)) : g > 5 || 5 == g && (4 == n || t || 6 == n && (u > 0 ? l > 0 ? a / f[o - l] : 0 : p[h - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), r < 1 || !p[0]) return p.length = 0, t ? (r -= e.e + 1, p[0] = f[(14 - r % 14) % 14], e.e = -r || 0) : p[0] = e.e = 0, e;
                            if (0 == u ? (p.length = h, c = 1, h--) : (p.length = h + 1, c = f[14 - u], p[h] = l > 0 ? s(a / f[o - l] % f[l]) * c : 0), t)
                                for (;;) {
                                    if (0 == h) {
                                        for (u = 1, l = p[0]; l >= 10; l /= 10, u++);
                                        for (l = p[0] += c, c = 1; l >= 10; l /= 10, c++);
                                        u != c && (e.e++, 1e14 == p[0] && (p[0] = 1));
                                        break
                                    }
                                    if (p[h] += c, 1e14 != p[h]) break;
                                    p[h--] = 0, c = 1
                                }
                            for (u = p.length; 0 === p[--u]; p.pop());
                        }
                        e.e > L ? e.c = e.e = null : e.e < B && (e.c = [e.e = 0])
                    }
                    return e
                }

                function $(e) {
                    var r, n = e.e;
                    return null === n ? e.toString() : (r = c(e.c), r = n <= D || n >= P ? p(r, n) : w(r, n, "0"), e.s < 0 ? "-" + r : r)
                }
                return k.clone = e, k.ROUND_UP = 0, k.ROUND_DOWN = 1, k.ROUND_CEIL = 2, k.ROUND_FLOOR = 3, k.ROUND_HALF_UP = 4, k.ROUND_HALF_DOWN = 5, k.ROUND_HALF_EVEN = 6, k.ROUND_HALF_CEIL = 7, k.ROUND_HALF_FLOOR = 8, k.EUCLID = 9, k.config = k.set = function(e) {
                    var r, n;
                    if (null != e) {
                        if ("object" == typeof e) {
                            if (e.hasOwnProperty(r = "DECIMAL_PLACES") && (h(n = e[r], 0, 1e9, r), _ = n), e.hasOwnProperty(r = "ROUNDING_MODE") && (h(n = e[r], 0, 8, r), R = n), e.hasOwnProperty(r = "EXPONENTIAL_AT") && ((n = e[r]) && n.pop ? (h(n[0], -1e9, 0, r), h(n[1], 0, 1e9, r), D = n[0], P = n[1]) : (h(n, -1e9, 1e9, r), D = -(P = n < 0 ? -n : n))), e.hasOwnProperty(r = "RANGE")) {
                                if ((n = e[r]) && n.pop) h(n[0], -1e9, -1, r), h(n[1], 1, 1e9, r), B = n[0], L = n[1];
                                else if (h(n, -1e9, 1e9, r), n) B = -(L = n < 0 ? -n : n);
                                else throw Error(o + r + " cannot be zero: " + n)
                            }
                            if (e.hasOwnProperty(r = "CRYPTO")) {
                                if (!!(n = e[r]) === n) {
                                    if (n) {
                                        if ("undefined" != typeof crypto && crypto && (crypto.getRandomValues || crypto.randomBytes)) U = n;
                                        else throw U = !n, Error(o + "crypto unavailable")
                                    } else U = n
                                } else throw Error(o + r + " not true or false: " + n)
                            }
                            if (e.hasOwnProperty(r = "MODULO_MODE") && (h(n = e[r], 0, 9, r), x = n), e.hasOwnProperty(r = "POW_PRECISION") && (h(n = e[r], 0, 1e9, r), C = n), e.hasOwnProperty(r = "FORMAT")) {
                                if ("object" == typeof(n = e[r])) I = n;
                                else throw Error(o + r + " not an object: " + n)
                            }
                            if (e.hasOwnProperty(r = "ALPHABET")) {
                                if ("string" != typeof(n = e[r]) || /^.?$|[+\-.\s]|(.).*\1/.test(n)) throw Error(o + r + " invalid: " + n);
                                M = "0123456789" == n.slice(0, 10), T = n
                            }
                        } else throw Error(o + "Object expected: " + e)
                    }
                    return {
                        DECIMAL_PLACES: _,
                        ROUNDING_MODE: R,
                        EXPONENTIAL_AT: [D, P],
                        RANGE: [B, L],
                        CRYPTO: U,
                        MODULO_MODE: x,
                        POW_PRECISION: C,
                        FORMAT: I,
                        ALPHABET: T
                    }
                }, k.isBigNumber = function(e) {
                    if (!e || !0 !== e._isBigNumber) return !1;
                    if (!k.DEBUG) return !0;
                    var r, n, t = e.c,
                        i = e.e,
                        u = e.s;
                    e: if ("[object Array]" == ({}).toString.call(t)) {
                        if ((1 === u || -1 === u) && i >= -1e9 && i <= 1e9 && i === s(i)) {
                            if (0 === t[0]) {
                                if (0 === i && 1 === t.length) return !0;
                                break e
                            }
                            if ((r = (i + 1) % 14) < 1 && (r += 14), String(t[0]).length == r) {
                                for (r = 0; r < t.length; r++)
                                    if ((n = t[r]) < 0 || n >= 1e14 || n !== s(n)) break e;
                                if (0 !== n) return !0
                            }
                        }
                    } else
                    if (null === t && null === i && (null === u || 1 === u || -1 === u)) return !0;
                    throw Error(o + "Invalid BigNumber: " + e)
                }, k.maximum = k.max = function() {
                    return F(arguments, -1)
                }, k.minimum = k.min = function() {
                    return F(arguments, 1)
                }, k.random = (n = 9007199254740992 * Math.random() & 2097151 ? function() {
                    return s(9007199254740992 * Math.random())
                } : function() {
                    return (1073741824 * Math.random() | 0) * 8388608 + (8388608 * Math.random() | 0)
                }, function(e) {
                    var r, t, u, l, c, a = 0,
                        g = [],
                        p = new k(S);
                    if (null == e ? e = _ : h(e, 0, 1e9), l = i(e / 14), U) {
                        if (crypto.getRandomValues) {
                            for (r = crypto.getRandomValues(new Uint32Array(l *= 2)); a < l;)(c = 131072 * r[a] + (r[a + 1] >>> 11)) >= 9e15 ? (t = crypto.getRandomValues(new Uint32Array(2)), r[a] = t[0], r[a + 1] = t[1]) : (g.push(c % 1e14), a += 2);
                            a = l / 2
                        } else if (crypto.randomBytes) {
                            for (r = crypto.randomBytes(l *= 7); a < l;)(c = (31 & r[a]) * 281474976710656 + 1099511627776 * r[a + 1] + 4294967296 * r[a + 2] + 16777216 * r[a + 3] + (r[a + 4] << 16) + (r[a + 5] << 8) + r[a + 6]) >= 9e15 ? crypto.randomBytes(7).copy(r, a) : (g.push(c % 1e14), a += 7);
                            a = l / 7
                        } else throw U = !1, Error(o + "crypto unavailable")
                    }
                    if (!U)
                        for (; a < l;)(c = n()) < 9e15 && (g[a++] = c % 1e14);
                    for (l = g[--a], e %= 14, l && e && (c = f[14 - e], g[a] = s(l / c) * c); 0 === g[a]; g.pop(), a--);
                    if (a < 0) g = [u = 0];
                    else {
                        for (u = -1; 0 === g[0]; g.splice(0, 1), u -= 14);
                        for (a = 1, c = g[0]; c >= 10; c /= 10, a++);
                        a < 14 && (u -= 14 - a)
                    }
                    return p.e = u, p.c = g, p
                }), k.sum = function() {
                    for (var e = 1, r = arguments, n = new k(r[0]); e < r.length;) n = n.plus(r[e++]);
                    return n
                }, y = function() {
                    var e = "0123456789";

                    function r(e, r, n, t) {
                        for (var i, s, o = [0], u = 0, f = e.length; u < f;) {
                            for (s = o.length; s--; o[s] *= r);
                            for (o[0] += t.indexOf(e.charAt(u++)), i = 0; i < o.length; i++) o[i] > n - 1 && (null == o[i + 1] && (o[i + 1] = 0), o[i + 1] += o[i] / n | 0, o[i] %= n)
                        }
                        return o.reverse()
                    }
                    return function(n, t, i, s, o) {
                        var u, f, l, a, h, g, p, m, d = n.indexOf("."),
                            v = _,
                            N = R;
                        for (d >= 0 && (a = C, C = 0, n = n.replace(".", ""), g = (m = new k(t)).pow(n.length - d), C = a, m.c = r(w(c(g.c), g.e, "0"), 10, i, e), m.e = m.c.length), l = a = (p = r(n, t, i, o ? (u = T, e) : (u = e, T))).length; 0 == p[--a]; p.pop());
                        if (!p[0]) return u.charAt(0);
                        if (d < 0 ? --l : (g.c = p, g.e = l, g.s = s, p = (g = b(g, m, v, N, i)).c, h = g.r, l = g.e), d = p[f = l + v + 1], a = i / 2, h = h || f < 0 || null != p[f + 1], h = N < 4 ? (null != d || h) && (0 == N || N == (g.s < 0 ? 3 : 2)) : d > a || d == a && (4 == N || h || 6 == N && 1 & p[f - 1] || N == (g.s < 0 ? 8 : 7)), f < 1 || !p[0]) n = h ? w(u.charAt(1), -v, u.charAt(0)) : u.charAt(0);
                        else {
                            if (p.length = f, h)
                                for (--i; ++p[--f] > i;) p[f] = 0, f || (++l, p = [1].concat(p));
                            for (a = p.length; !p[--a];);
                            for (d = 0, n = ""; d <= a; n += u.charAt(p[d++]));
                            n = w(n, l, u.charAt(0))
                        }
                        return n
                    }
                }(), b = function() {
                    function e(e, r, n) {
                        var t, i, s, o, u = 0,
                            f = e.length,
                            l = r % 1e7,
                            c = r / 1e7 | 0;
                        for (e = e.slice(); f--;) t = c * (s = e[f] % 1e7) + (o = e[f] / 1e7 | 0) * l, u = ((i = l * s + t % 1e7 * 1e7 + u) / n | 0) + (t / 1e7 | 0) + c * o, e[f] = i % n;
                        return u && (e = [u].concat(e)), e
                    }

                    function r(e, r, n, t) {
                        var i, s;
                        if (n != t) s = n > t ? 1 : -1;
                        else
                            for (i = s = 0; i < n; i++)
                                if (e[i] != r[i]) {
                                    s = e[i] > r[i] ? 1 : -1;
                                    break
                                } return s
                    }

                    function n(e, r, n, t) {
                        for (var i = 0; n--;) e[n] -= i, i = e[n] < r[n] ? 1 : 0, e[n] = i * t + e[n] - r[n];
                        for (; !e[0] && e.length > 1; e.splice(0, 1));
                    }
                    return function(t, i, o, u, f) {
                        var c, a, h, g, p, w, m, d, v, N, O, b, y, E, A, S, _, R = t.s == i.s ? 1 : -1,
                            D = t.c,
                            P = i.c;
                        if (!D || !D[0] || !P || !P[0]) return new k(t.s && i.s && (D ? !P || D[0] != P[0] : P) ? D && 0 == D[0] || !P ? 0 * R : R / 0 : NaN);
                        for (v = (d = new k(R)).c = [], R = o + (a = t.e - i.e) + 1, f || (f = 1e14, a = l(t.e / 14) - l(i.e / 14), R = R / 14 | 0), h = 0; P[h] == (D[h] || 0); h++);
                        if (P[h] > (D[h] || 0) && a--, R < 0) v.push(1), g = !0;
                        else {
                            for (E = D.length, S = P.length, h = 0, R += 2, (p = s(f / (P[0] + 1))) > 1 && (P = e(P, p, f), D = e(D, p, f), S = P.length, E = D.length), y = S, O = (N = D.slice(0, S)).length; O < S; N[O++] = 0);
                            _ = [0].concat(_ = P.slice()), A = P[0], P[1] >= f / 2 && A++;
                            do {
                                if (p = 0, (c = r(P, N, S, O)) < 0) {
                                    if (b = N[0], S != O && (b = b * f + (N[1] || 0)), (p = s(b / A)) > 1)
                                        for (p >= f && (p = f - 1), m = (w = e(P, p, f)).length, O = N.length; 1 == r(w, N, m, O);) p--, n(w, S < m ? _ : P, m, f), m = w.length, c = 1;
                                    else 0 == p && (c = p = 1), m = (w = P.slice()).length;
                                    if (m < O && (w = [0].concat(w)), n(N, w, O, f), O = N.length, -1 == c)
                                        for (; 1 > r(P, N, S, O);) p++, n(N, S < O ? _ : P, O, f), O = N.length
                                } else 0 === c && (p++, N = [0]);
                                v[h++] = p, N[0] ? N[O++] = D[y] || 0 : (N = [D[y]], O = 1)
                            } while ((y++ < E || null != N[0]) && R--);
                            g = null != N[0], v[0] || v.splice(0, 1)
                        }
                        if (1e14 == f) {
                            for (h = 1, R = v[0]; R >= 10; R /= 10, h++);
                            q(d, o + (d.e = h + 14 * a - 1) + 1, u, g)
                        } else d.e = a, d.r = +g;
                        return d
                    }
                }(), m = /^(-?)0([xbo])(?=\w[\w.]*$)/i, d = /^([^.]+)\.$/, v = /^\.([^.]+)$/, N = /^-?(Infinity|NaN)$/, O = /^\s*\+(?=[\w.])|^\s+|\s+$/g, E = function(e, r, n, t) {
                    var i, s = n ? r : r.replace(O, "");
                    if (N.test(s)) e.s = isNaN(s) ? null : s < 0 ? -1 : 1;
                    else {
                        if (!n && (s = s.replace(m, function(e, r, n) {
                                return i = "x" == (n = n.toLowerCase()) ? 16 : "b" == n ? 2 : 8, t && t != i ? e : r
                            }), t && (i = t, s = s.replace(d, "$1").replace(v, "0.$1")), r != s)) return new k(s, i);
                        if (k.DEBUG) throw Error(o + "Not a" + (t ? " base " + t : "") + " number: " + r);
                        e.s = null
                    }
                    e.c = e.e = null
                }, A.absoluteValue = A.abs = function() {
                    var e = new k(this);
                    return e.s < 0 && (e.s = 1), e
                }, A.comparedTo = function(e, r) {
                    return a(this, new k(e, r))
                }, A.decimalPlaces = A.dp = function(e, r) {
                    var n, t, i;
                    if (null != e) return h(e, 0, 1e9), null == r ? r = R : h(r, 0, 8), q(new k(this), e + this.e + 1, r);
                    if (!(n = this.c)) return null;
                    if (t = ((i = n.length - 1) - l(this.e / 14)) * 14, i = n[i])
                        for (; i % 10 == 0; i /= 10, t--);
                    return t < 0 && (t = 0), t
                }, A.dividedBy = A.div = function(e, r) {
                    return b(this, new k(e, r), _, R)
                }, A.dividedToIntegerBy = A.idiv = function(e, r) {
                    return b(this, new k(e, r), 0, 1)
                }, A.exponentiatedBy = A.pow = function(e, r) {
                    var n, t, u, f, l, c, a, h, p, w = this;
                    if ((e = new k(e)).c && !e.isInteger()) throw Error(o + "Exponent not an integer: " + $(e));
                    if (null != r && (r = new k(r)), c = e.e > 14, !w.c || !w.c[0] || 1 == w.c[0] && !w.e && 1 == w.c.length || !e.c || !e.c[0]) return p = new k(Math.pow(+$(w), c ? e.s * (2 - g(e)) : +$(e))), r ? p.mod(r) : p;
                    if (a = e.s < 0, r) {
                        if (r.c ? !r.c[0] : !r.s) return new k(NaN);
                        (t = !a && w.isInteger() && r.isInteger()) && (w = w.mod(r))
                    } else {
                        if (e.e > 9 && (w.e > 0 || w.e < -1 || (0 == w.e ? w.c[0] > 1 || c && w.c[1] >= 24e7 : w.c[0] < 8e13 || c && w.c[0] <= 9999975e7))) return f = w.s < 0 && g(e) ? -0 : 0, w.e > -1 && (f = 1 / f), new k(a ? 1 / f : f);
                        C && (f = i(C / 14 + 2))
                    }
                    for (c ? (n = new k(.5), a && (e.s = 1), h = g(e)) : h = (u = Math.abs(+$(e))) % 2, p = new k(S);;) {
                        if (h) {
                            if (!(p = p.times(w)).c) break;
                            f ? p.c.length > f && (p.c.length = f) : t && (p = p.mod(r))
                        }
                        if (u) {
                            if (0 === (u = s(u / 2))) break;
                            h = u % 2
                        } else if (q(e = e.times(n), e.e + 1, 1), e.e > 14) h = g(e);
                        else {
                            if (0 == (u = +$(e))) break;
                            h = u % 2
                        }
                        w = w.times(w), f ? w.c && w.c.length > f && (w.c.length = f) : t && (w = w.mod(r))
                    }
                    return t ? p : (a && (p = S.div(p)), r ? p.mod(r) : f ? q(p, C, R, l) : p)
                }, A.integerValue = function(e) {
                    var r = new k(this);
                    return null == e ? e = R : h(e, 0, 8), q(r, r.e + 1, e)
                }, A.isEqualTo = A.eq = function(e, r) {
                    return 0 === a(this, new k(e, r))
                }, A.isFinite = function() {
                    return !!this.c
                }, A.isGreaterThan = A.gt = function(e, r) {
                    return a(this, new k(e, r)) > 0
                }, A.isGreaterThanOrEqualTo = A.gte = function(e, r) {
                    return 1 === (r = a(this, new k(e, r))) || 0 === r
                }, A.isInteger = function() {
                    return !!this.c && l(this.e / 14) > this.c.length - 2
                }, A.isLessThan = A.lt = function(e, r) {
                    return 0 > a(this, new k(e, r))
                }, A.isLessThanOrEqualTo = A.lte = function(e, r) {
                    return -1 === (r = a(this, new k(e, r))) || 0 === r
                }, A.isNaN = function() {
                    return !this.s
                }, A.isNegative = function() {
                    return this.s < 0
                }, A.isPositive = function() {
                    return this.s > 0
                }, A.isZero = function() {
                    return !!this.c && 0 == this.c[0]
                }, A.minus = function(e, r) {
                    var n, t, i, s, o = this.s;
                    if (r = (e = new k(e, r)).s, !o || !r) return new k(NaN);
                    if (o != r) return e.s = -r, this.plus(e);
                    var u = this.e / 14,
                        f = e.e / 14,
                        c = this.c,
                        a = e.c;
                    if (!u || !f) {
                        if (!c || !a) return c ? (e.s = -r, e) : new k(a ? this : NaN);
                        if (!c[0] || !a[0]) return a[0] ? (e.s = -r, e) : new k(c[0] ? this : 3 == R ? -0 : 0)
                    }
                    if (u = l(u), f = l(f), c = c.slice(), o = u - f) {
                        for ((s = o < 0) ? (o = -o, i = c) : (f = u, i = a), i.reverse(), r = o; r--; i.push(0));
                        i.reverse()
                    } else
                        for (t = (s = (o = c.length) < (r = a.length)) ? o : r, o = r = 0; r < t; r++)
                            if (c[r] != a[r]) {
                                s = c[r] < a[r];
                                break
                            } if (s && (i = c, c = a, a = i, e.s = -e.s), (r = (t = a.length) - (n = c.length)) > 0)
                        for (; r--; c[n++] = 0);
                    for (r = 1e14 - 1; t > o;) {
                        if (c[--t] < a[t]) {
                            for (n = t; n && !c[--n]; c[n] = r);
                            --c[n], c[t] += 1e14
                        }
                        c[t] -= a[t]
                    }
                    for (; 0 == c[0]; c.splice(0, 1), --f);
                    return c[0] ? j(e, c, f) : (e.s = 3 == R ? -1 : 1, e.c = [e.e = 0], e)
                }, A.modulo = A.mod = function(e, r) {
                    var n, t;
                    return (e = new k(e, r), this.c && e.s && (!e.c || e.c[0])) ? e.c && (!this.c || this.c[0]) ? (9 == x ? (t = e.s, e.s = 1, n = b(this, e, 0, 3), e.s = t, n.s *= t) : n = b(this, e, 0, x), (e = this.minus(n.times(e))).c[0] || 1 != x || (e.s = this.s), e) : new k(this) : new k(NaN)
                }, A.multipliedBy = A.times = function(e, r) {
                    var n, t, i, s, o, u, f, c, a, h, g, p, w, m = this.c,
                        d = (e = new k(e, r)).c;
                    if (!m || !d || !m[0] || !d[0]) return this.s && e.s && (!m || m[0] || d) && (!d || d[0] || m) ? (e.s *= this.s, m && d ? (e.c = [0], e.e = 0) : e.c = e.e = null) : e.c = e.e = e.s = null, e;
                    for (t = l(this.e / 14) + l(e.e / 14), e.s *= this.s, (f = m.length) < (h = d.length) && (w = m, m = d, d = w, i = f, f = h, h = i), i = f + h, w = []; i--; w.push(0));
                    for (i = h; --i >= 0;) {
                        for (n = 0, g = d[i] % 1e7, p = d[i] / 1e7 | 0, s = i + (o = f); s > i;) u = p * (c = m[--o] % 1e7) + (a = m[o] / 1e7 | 0) * g, n = ((c = g * c + u % 1e7 * 1e7 + w[s] + n) / 1e14 | 0) + (u / 1e7 | 0) + p * a, w[s--] = c % 1e14;
                        w[s] = n
                    }
                    return n ? ++t : w.splice(0, 1), j(e, w, t)
                }, A.negated = function() {
                    var e = new k(this);
                    return e.s = -e.s || null, e
                }, A.plus = function(e, r) {
                    var n, t = this.s;
                    if (r = (e = new k(e, r)).s, !t || !r) return new k(NaN);
                    if (t != r) return e.s = -r, this.minus(e);
                    var i = this.e / 14,
                        s = e.e / 14,
                        o = this.c,
                        u = e.c;
                    if (!i || !s) {
                        if (!o || !u) return new k(t / 0);
                        if (!o[0] || !u[0]) return u[0] ? e : new k(o[0] ? this : 0 * t)
                    }
                    if (i = l(i), s = l(s), o = o.slice(), t = i - s) {
                        for (t > 0 ? (s = i, n = u) : (t = -t, n = o), n.reverse(); t--; n.push(0));
                        n.reverse()
                    }
                    for ((t = o.length) - (r = u.length) < 0 && (n = u, u = o, o = n, r = t), t = 0; r;) t = (o[--r] = o[r] + u[r] + t) / 1e14 | 0, o[r] = 1e14 === o[r] ? 0 : o[r] % 1e14;
                    return t && (o = [t].concat(o), ++s), j(e, o, s)
                }, A.precision = A.sd = function(e, r) {
                    var n, t, i;
                    if (null != e && !!e !== e) return h(e, 1, 1e9), null == r ? r = R : h(r, 0, 8), q(new k(this), e, r);
                    if (!(n = this.c)) return null;
                    if (t = 14 * (i = n.length - 1) + 1, i = n[i]) {
                        for (; i % 10 == 0; i /= 10, t--);
                        for (i = n[0]; i >= 10; i /= 10, t++);
                    }
                    return e && this.e + 1 > t && (t = this.e + 1), t
                }, A.shiftedBy = function(e) {
                    return h(e, -9007199254740991, 9007199254740991), this.times("1e" + e)
                }, A.squareRoot = A.sqrt = function() {
                    var e, r, n, t, i, s = this.c,
                        o = this.s,
                        u = this.e,
                        f = _ + 4,
                        a = new k("0.5");
                    if (1 !== o || !s || !s[0]) return new k(!o || o < 0 && (!s || s[0]) ? NaN : s ? this : 1 / 0);
                    if (0 == (o = Math.sqrt(+$(this))) || o == 1 / 0 ? (((r = c(s)).length + u) % 2 == 0 && (r += "0"), o = Math.sqrt(+r), u = l((u + 1) / 2) - (u < 0 || u % 2), n = new k(r = o == 1 / 0 ? "5e" + u : (r = o.toExponential()).slice(0, r.indexOf("e") + 1) + u)) : n = new k(o + ""), n.c[0]) {
                        for ((o = (u = n.e) + f) < 3 && (o = 0);;)
                            if (i = n, n = a.times(i.plus(b(this, i, f, 1))), c(i.c).slice(0, o) === (r = c(n.c)).slice(0, o)) {
                                if (n.e < u && --o, "9999" != (r = r.slice(o - 3, o + 1)) && (t || "4999" != r)) {
                                    +r && (+r.slice(1) || "5" != r.charAt(0)) || (q(n, n.e + _ + 2, 1), e = !n.times(n).eq(this));
                                    break
                                }
                                if (!t && (q(i, i.e + _ + 2, 0), i.times(i).eq(this))) {
                                    n = i;
                                    break
                                }
                                f += 4, o += 4, t = 1
                            }
                    }
                    return q(n, n.e + _ + 1, R, e)
                }, A.toExponential = function(e, r) {
                    return null != e && (h(e, 0, 1e9), e++), G(this, e, r, 1)
                }, A.toFixed = function(e, r) {
                    return null != e && (h(e, 0, 1e9), e = e + this.e + 1), G(this, e, r)
                }, A.toFormat = function(e, r, n) {
                    var t;
                    if (null == n) null != e && r && "object" == typeof r ? (n = r, r = null) : e && "object" == typeof e ? (n = e, e = r = null) : n = I;
                    else if ("object" != typeof n) throw Error(o + "Argument not an object: " + n);
                    if (t = this.toFixed(e, r), this.c) {
                        var i, s = t.split("."),
                            u = +n.groupSize,
                            f = +n.secondaryGroupSize,
                            l = n.groupSeparator || "",
                            c = s[0],
                            a = s[1],
                            h = this.s < 0,
                            g = h ? c.slice(1) : c,
                            p = g.length;
                        if (f && (i = u, u = f, f = i, p -= i), u > 0 && p > 0) {
                            for (i = p % u || u, c = g.substr(0, i); i < p; i += u) c += l + g.substr(i, u);
                            f > 0 && (c += l + g.slice(i)), h && (c = "-" + c)
                        }
                        t = a ? c + (n.decimalSeparator || "") + ((f = +n.fractionGroupSize) ? a.replace(RegExp("\\d{" + f + "}\\B", "g"), "$&" + (n.fractionGroupSeparator || "")) : a) : c
                    }
                    return (n.prefix || "") + t + (n.suffix || "")
                }, A.toFraction = function(e) {
                    var r, n, t, i, s, u, l, a, h, g, p, w, m = this.c;
                    if (null != e && (!(l = new k(e)).isInteger() && (l.c || 1 !== l.s) || l.lt(S))) throw Error(o + "Argument " + (l.isInteger() ? "out of range: " : "not an integer: ") + $(l));
                    if (!m) return new k(this);
                    for (r = new k(S), h = n = new k(S), t = a = new k(S), w = c(m), s = r.e = w.length - this.e - 1, r.c[0] = f[(u = s % 14) < 0 ? 14 + u : u], e = !e || l.comparedTo(r) > 0 ? s > 0 ? r : h : l, u = L, L = 1 / 0, l = new k(w), a.c[0] = 0; g = b(l, r, 0, 1), 1 != (i = n.plus(g.times(t))).comparedTo(e);) n = t, t = i, h = a.plus(g.times(i = h)), a = i, r = l.minus(g.times(i = r)), l = i;
                    return i = b(e.minus(n), t, 0, 1), a = a.plus(i.times(h)), n = n.plus(i.times(t)), a.s = h.s = this.s, s *= 2, p = 1 > b(h, t, s, R).minus(this).abs().comparedTo(b(a, n, s, R).minus(this).abs()) ? [h, t] : [a, n], L = u, p
                }, A.toNumber = function() {
                    return +$(this)
                }, A.toPrecision = function(e, r) {
                    return null != e && h(e, 1, 1e9), G(this, e, r, 2)
                }, A.toString = function(e) {
                    var r, n = this,
                        t = n.s,
                        i = n.e;
                    return null === i ? t ? (r = "Infinity", t < 0 && (r = "-" + r)) : r = "NaN" : (null == e ? r = i <= D || i >= P ? p(c(n.c), i) : w(c(n.c), i, "0") : 10 === e && M ? r = w(c((n = q(new k(n), _ + i + 1, R)).c), n.e, "0") : (h(e, 2, T.length, "Base"), r = y(w(c(n.c), i, "0"), 10, e, t, !0)), t < 0 && n.c[0] && (r = "-" + r)), r
                }, A.valueOf = A.toJSON = function() {
                    return $(this)
                }, A._isBigNumber = !0, A[Symbol.toStringTag] = "BigNumber", A[Symbol.for("nodejs.util.inspect.custom")] = A.valueOf, null != r && k.set(r), k
            }();
            r.Z = m
        }
    }
]);