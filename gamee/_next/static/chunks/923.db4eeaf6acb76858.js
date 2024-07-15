(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [923], {
        70170: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(56974);

            function s(e, t, r) {
                return void 0 === t && (t = new Uint8Array(2)), void 0 === r && (r = 0), t[r + 0] = e >>> 8, t[r + 1] = e >>> 0, t
            }

            function n(e, t, r) {
                return void 0 === t && (t = new Uint8Array(2)), void 0 === r && (r = 0), t[r + 0] = e >>> 0, t[r + 1] = e >>> 8, t
            }

            function o(e, t) {
                return void 0 === t && (t = 0), e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]
            }

            function a(e, t) {
                return void 0 === t && (t = 0), (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0
            }

            function c(e, t) {
                return void 0 === t && (t = 0), e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]
            }

            function u(e, t) {
                return void 0 === t && (t = 0), (e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]) >>> 0
            }

            function l(e, t, r) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), t[r + 0] = e >>> 24, t[r + 1] = e >>> 16, t[r + 2] = e >>> 8, t[r + 3] = e >>> 0, t
            }

            function h(e, t, r) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), t[r + 0] = e >>> 0, t[r + 1] = e >>> 8, t[r + 2] = e >>> 16, t[r + 3] = e >>> 24, t
            }

            function d(e, t, r) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), l(e / 4294967296 >>> 0, t, r), l(e >>> 0, t, r + 4), t
            }

            function p(e, t, r) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), h(e >>> 0, t, r), h(e / 4294967296 >>> 0, t, r + 4), t
            }
            t.readInt16BE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 0] << 8 | e[t + 1]) << 16 >> 16
            }, t.readUint16BE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 0] << 8 | e[t + 1]) >>> 0
            }, t.readInt16LE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 1] << 8 | e[t]) << 16 >> 16
            }, t.readUint16LE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 1] << 8 | e[t]) >>> 0
            }, t.writeUint16BE = s, t.writeInt16BE = s, t.writeUint16LE = n, t.writeInt16LE = n, t.readInt32BE = o, t.readUint32BE = a, t.readInt32LE = c, t.readUint32LE = u, t.writeUint32BE = l, t.writeInt32BE = l, t.writeUint32LE = h, t.writeInt32LE = h, t.readInt64BE = function(e, t) {
                void 0 === t && (t = 0);
                var r = o(e, t),
                    i = o(e, t + 4);
                return 4294967296 * r + i - (i >> 31) * 4294967296
            }, t.readUint64BE = function(e, t) {
                return void 0 === t && (t = 0), 4294967296 * a(e, t) + a(e, t + 4)
            }, t.readInt64LE = function(e, t) {
                void 0 === t && (t = 0);
                var r = c(e, t);
                return 4294967296 * c(e, t + 4) + r - (r >> 31) * 4294967296
            }, t.readUint64LE = function(e, t) {
                void 0 === t && (t = 0);
                var r = u(e, t);
                return 4294967296 * u(e, t + 4) + r
            }, t.writeUint64BE = d, t.writeInt64BE = d, t.writeUint64LE = p, t.writeInt64LE = p, t.readUintBE = function(e, t, r) {
                if (void 0 === r && (r = 0), e % 8 != 0) throw Error("readUintBE supports only bitLengths divisible by 8");
                if (e / 8 > t.length - r) throw Error("readUintBE: array is too short for the given bitLength");
                for (var i = 0, s = 1, n = e / 8 + r - 1; n >= r; n--) i += t[n] * s, s *= 256;
                return i
            }, t.readUintLE = function(e, t, r) {
                if (void 0 === r && (r = 0), e % 8 != 0) throw Error("readUintLE supports only bitLengths divisible by 8");
                if (e / 8 > t.length - r) throw Error("readUintLE: array is too short for the given bitLength");
                for (var i = 0, s = 1, n = r; n < r + e / 8; n++) i += t[n] * s, s *= 256;
                return i
            }, t.writeUintBE = function(e, t, r, s) {
                if (void 0 === r && (r = new Uint8Array(e / 8)), void 0 === s && (s = 0), e % 8 != 0) throw Error("writeUintBE supports only bitLengths divisible by 8");
                if (!i.isSafeInteger(t)) throw Error("writeUintBE value must be an integer");
                for (var n = 1, o = e / 8 + s - 1; o >= s; o--) r[o] = t / n & 255, n *= 256;
                return r
            }, t.writeUintLE = function(e, t, r, s) {
                if (void 0 === r && (r = new Uint8Array(e / 8)), void 0 === s && (s = 0), e % 8 != 0) throw Error("writeUintLE supports only bitLengths divisible by 8");
                if (!i.isSafeInteger(t)) throw Error("writeUintLE value must be an integer");
                for (var n = 1, o = s; o < s + e / 8; o++) r[o] = t / n & 255, n *= 256;
                return r
            }, t.readFloat32BE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t)
            }, t.readFloat32LE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t, !0)
            }, t.readFloat64BE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t)
            }, t.readFloat64LE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t, !0)
            }, t.writeFloat32BE = function(e, t, r) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(r, e), t
            }, t.writeFloat32LE = function(e, t, r) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(r, e, !0), t
            }, t.writeFloat64BE = function(e, t, r) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(r, e), t
            }, t.writeFloat64LE = function(e, t, r) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(r, e, !0), t
            }
        },
        70359: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(70170),
                s = r(30071);

            function n(e, t, r, n, o) {
                if (void 0 === o && (o = 0), 32 !== e.length) throw Error("ChaCha: key size must be 32 bytes");
                if (n.length < r.length) throw Error("ChaCha: destination is shorter than source");
                if (0 === o) {
                    if (8 !== t.length && 12 !== t.length) throw Error("ChaCha nonce must be 8 or 12 bytes");
                    c = (a = new Uint8Array(16)).length - t.length, a.set(t, c)
                } else {
                    if (16 !== t.length) throw Error("ChaCha nonce with counter must be 16 bytes");
                    a = t, c = o
                }
                for (var a, c, u = new Uint8Array(64), l = 0; l < r.length; l += 64) {
                    ! function(e, t, r) {
                        for (var s = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], n = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], o = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], a = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], c = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], u = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], l = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], h = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], d = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], p = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], f = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], g = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], y = 1634760805, m = 857760878, b = 2036477234, v = 1797285236, D = s, w = n, E = o, _ = a, I = c, S = u, O = l, C = h, R = d, P = p, A = f, N = g, x = 0; x < 20; x += 2) R ^= y = y + D | 0, D ^= I = I + (R = R >>> 16 | R << 16) | 0, D = D >>> 20 | D << 12, P ^= m = m + w | 0, w ^= S = S + (P = P >>> 16 | P << 16) | 0, w = w >>> 20 | w << 12, A ^= b = b + E | 0, E ^= O = O + (A = A >>> 16 | A << 16) | 0, E = E >>> 20 | E << 12, N ^= v = v + _ | 0, _ ^= C = C + (N = N >>> 16 | N << 16) | 0, _ = _ >>> 20 | _ << 12, A ^= b = b + E | 0, E ^= O = O + (A = A >>> 24 | A << 8) | 0, E = E >>> 25 | E << 7, N ^= v = v + _ | 0, _ ^= C = C + (N = N >>> 24 | N << 8) | 0, _ = _ >>> 25 | _ << 7, P ^= m = m + w | 0, w ^= S = S + (P = P >>> 24 | P << 8) | 0, w = w >>> 25 | w << 7, R ^= y = y + D | 0, D ^= I = I + (R = R >>> 24 | R << 8) | 0, D = D >>> 25 | D << 7, N ^= y = y + w | 0, w ^= O = O + (N = N >>> 16 | N << 16) | 0, w = w >>> 20 | w << 12, R ^= m = m + E | 0, E ^= C = C + (R = R >>> 16 | R << 16) | 0, E = E >>> 20 | E << 12, P ^= b = b + _ | 0, _ ^= I = I + (P = P >>> 16 | P << 16) | 0, _ = _ >>> 20 | _ << 12, A ^= v = v + D | 0, D ^= S = S + (A = A >>> 16 | A << 16) | 0, D = D >>> 20 | D << 12, P ^= b = b + _ | 0, _ ^= I = I + (P = P >>> 24 | P << 8) | 0, _ = _ >>> 25 | _ << 7, A ^= v = v + D | 0, D ^= S = S + (A = A >>> 24 | A << 8) | 0, D = D >>> 25 | D << 7, R ^= m = m + E | 0, E ^= C = C + (R = R >>> 24 | R << 8) | 0, E = E >>> 25 | E << 7, N ^= y = y + w | 0, w ^= O = O + (N = N >>> 24 | N << 8) | 0, w = w >>> 25 | w << 7;
                        i.writeUint32LE(y + 1634760805 | 0, e, 0), i.writeUint32LE(m + 857760878 | 0, e, 4), i.writeUint32LE(b + 2036477234 | 0, e, 8), i.writeUint32LE(v + 1797285236 | 0, e, 12), i.writeUint32LE(D + s | 0, e, 16), i.writeUint32LE(w + n | 0, e, 20), i.writeUint32LE(E + o | 0, e, 24), i.writeUint32LE(_ + a | 0, e, 28), i.writeUint32LE(I + c | 0, e, 32), i.writeUint32LE(S + u | 0, e, 36), i.writeUint32LE(O + l | 0, e, 40), i.writeUint32LE(C + h | 0, e, 44), i.writeUint32LE(R + d | 0, e, 48), i.writeUint32LE(P + p | 0, e, 52), i.writeUint32LE(A + f | 0, e, 56), i.writeUint32LE(N + g | 0, e, 60)
                    }(u, a, e);
                    for (var h = l; h < l + 64 && h < r.length; h++) n[h] = r[h] ^ u[h - l];
                    ! function(e, t, r) {
                        for (var i = 1; r--;) i = i + (255 & e[t]) | 0, e[t] = 255 & i, i >>>= 8, t++;
                        if (i > 0) throw Error("ChaCha: counter overflow")
                    }(a, 0, c)
                }
                return s.wipe(u), 0 === o && s.wipe(a), n
            }
            t.streamXOR = n, t.stream = function(e, t, r, i) {
                return void 0 === i && (i = 0), s.wipe(r), n(e, t, r, r, i)
            }
        },
        41880: function(e, t, r) {
            "use strict";
            var i = r(70359),
                s = r(74546),
                n = r(30071),
                o = r(70170),
                a = r(74945);
            t.Cv = 32, t.WH = 12, t.pg = 16;
            var c = new Uint8Array(16),
                u = function() {
                    function e(e) {
                        if (this.nonceLength = t.WH, this.tagLength = t.pg, e.length !== t.Cv) throw Error("ChaCha20Poly1305 needs 32-byte key");
                        this._key = new Uint8Array(e)
                    }
                    return e.prototype.seal = function(e, t, r, s) {
                        if (e.length > 16) throw Error("ChaCha20Poly1305: incorrect nonce length");
                        var o, a = new Uint8Array(16);
                        a.set(e, a.length - e.length);
                        var c = new Uint8Array(32);
                        i.stream(this._key, a, c, 4);
                        var u = t.length + this.tagLength;
                        if (s) {
                            if (s.length !== u) throw Error("ChaCha20Poly1305: incorrect destination length");
                            o = s
                        } else o = new Uint8Array(u);
                        return i.streamXOR(this._key, a, t, o, 4), this._authenticate(o.subarray(o.length - this.tagLength, o.length), c, o.subarray(0, o.length - this.tagLength), r), n.wipe(a), o
                    }, e.prototype.open = function(e, t, r, s) {
                        if (e.length > 16) throw Error("ChaCha20Poly1305: incorrect nonce length");
                        if (t.length < this.tagLength) return null;
                        var o, c = new Uint8Array(16);
                        c.set(e, c.length - e.length);
                        var u = new Uint8Array(32);
                        i.stream(this._key, c, u, 4);
                        var l = new Uint8Array(this.tagLength);
                        if (this._authenticate(l, u, t.subarray(0, t.length - this.tagLength), r), !a.equal(l, t.subarray(t.length - this.tagLength, t.length))) return null;
                        var h = t.length - this.tagLength;
                        if (s) {
                            if (s.length !== h) throw Error("ChaCha20Poly1305: incorrect destination length");
                            o = s
                        } else o = new Uint8Array(h);
                        return i.streamXOR(this._key, c, t.subarray(0, t.length - this.tagLength), o, 4), n.wipe(c), o
                    }, e.prototype.clean = function() {
                        return n.wipe(this._key), this
                    }, e.prototype._authenticate = function(e, t, r, i) {
                        var a = new s.Poly1305(t);
                        i && (a.update(i), i.length % 16 > 0 && a.update(c.subarray(i.length % 16))), a.update(r), r.length % 16 > 0 && a.update(c.subarray(r.length % 16));
                        var u = new Uint8Array(8);
                        i && o.writeUint64LE(i.length, u), a.update(u), o.writeUint64LE(r.length, u), a.update(u);
                        for (var l = a.digest(), h = 0; h < l.length; h++) e[h] = l[h];
                        a.clean(), n.wipe(l), n.wipe(u)
                    }, e
                }();
            t.OK = u
        },
        74945: function(e, t) {
            "use strict";

            function r(e, t) {
                if (e.length !== t.length) return 0;
                for (var r = 0, i = 0; i < e.length; i++) r |= e[i] ^ t[i];
                return 1 & r - 1 >>> 8
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.select = function(e, t, r) {
                return ~(e - 1) & t | e - 1 & r
            }, t.lessOrEqual = function(e, t) {
                return (0 | e) - (0 | t) - 1 >>> 31 & 1
            }, t.compare = r, t.equal = function(e, t) {
                return 0 !== e.length && 0 !== t.length && 0 !== r(e, t)
            }
        },
        75388: function(e, t, r) {
            "use strict";
            t.Xx = t._w = t.aP = t.KS = t.jQ = void 0, r(96526);
            let i = r(16547);

            function s(e) {
                let t = new Float64Array(16);
                if (e)
                    for (let r = 0; r < e.length; r++) t[r] = e[r];
                return t
            }
            r(30071), t.jQ = 64, t.KS = 64, t.aP = 32, new Uint8Array(32)[0] = 9;
            let n = s(),
                o = s([1]),
                a = (s([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), s([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222])),
                c = s([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                u = s([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]);

            function l(e, t) {
                for (let r = 0; r < 16; r++) e[r] = 0 | t[r]
            }

            function h(e) {
                let t = 1;
                for (let r = 0; r < 16; r++) {
                    let i = e[r] + t + 65535;
                    t = Math.floor(i / 65536), e[r] = i - 65536 * t
                }
                e[0] += t - 1 + 37 * (t - 1)
            }

            function d(e, t, r) {
                let i = ~(r - 1);
                for (let r = 0; r < 16; r++) {
                    let s = i & (e[r] ^ t[r]);
                    e[r] ^= s, t[r] ^= s
                }
            }

            function p(e, t) {
                let r = s(),
                    i = s();
                for (let e = 0; e < 16; e++) i[e] = t[e];
                h(i), h(i), h(i);
                for (let e = 0; e < 2; e++) {
                    r[0] = i[0] - 65517;
                    for (let e = 1; e < 15; e++) r[e] = i[e] - 65535 - (r[e - 1] >> 16 & 1), r[e - 1] &= 65535;
                    r[15] = i[15] - 32767 - (r[14] >> 16 & 1);
                    let e = r[15] >> 16 & 1;
                    r[14] &= 65535, d(i, r, 1 - e)
                }
                for (let t = 0; t < 16; t++) e[2 * t] = 255 & i[t], e[2 * t + 1] = i[t] >> 8
            }
            s([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

            function f(e, t, r) {
                for (let i = 0; i < 16; i++) e[i] = t[i] + r[i]
            }

            function g(e, t, r) {
                for (let i = 0; i < 16; i++) e[i] = t[i] - r[i]
            }

            function y(e, t, r) {
                let i, s, n = 0,
                    o = 0,
                    a = 0,
                    c = 0,
                    u = 0,
                    l = 0,
                    h = 0,
                    d = 0,
                    p = 0,
                    f = 0,
                    g = 0,
                    y = 0,
                    m = 0,
                    b = 0,
                    v = 0,
                    D = 0,
                    w = 0,
                    E = 0,
                    _ = 0,
                    I = 0,
                    S = 0,
                    O = 0,
                    C = 0,
                    R = 0,
                    P = 0,
                    A = 0,
                    N = 0,
                    x = 0,
                    T = 0,
                    U = 0,
                    L = 0,
                    M = r[0],
                    j = r[1],
                    k = r[2],
                    q = r[3],
                    F = r[4],
                    z = r[5],
                    B = r[6],
                    V = r[7],
                    K = r[8],
                    H = r[9],
                    J = r[10],
                    W = r[11],
                    G = r[12],
                    Z = r[13],
                    Y = r[14],
                    Q = r[15];
                n += (i = t[0]) * M, o += i * j, a += i * k, c += i * q, u += i * F, l += i * z, h += i * B, d += i * V, p += i * K, f += i * H, g += i * J, y += i * W, m += i * G, b += i * Z, v += i * Y, D += i * Q, o += (i = t[1]) * M, a += i * j, c += i * k, u += i * q, l += i * F, h += i * z, d += i * B, p += i * V, f += i * K, g += i * H, y += i * J, m += i * W, b += i * G, v += i * Z, D += i * Y, w += i * Q, a += (i = t[2]) * M, c += i * j, u += i * k, l += i * q, h += i * F, d += i * z, p += i * B, f += i * V, g += i * K, y += i * H, m += i * J, b += i * W, v += i * G, D += i * Z, w += i * Y, E += i * Q, c += (i = t[3]) * M, u += i * j, l += i * k, h += i * q, d += i * F, p += i * z, f += i * B, g += i * V, y += i * K, m += i * H, b += i * J, v += i * W, D += i * G, w += i * Z, E += i * Y, _ += i * Q, u += (i = t[4]) * M, l += i * j, h += i * k, d += i * q, p += i * F, f += i * z, g += i * B, y += i * V, m += i * K, b += i * H, v += i * J, D += i * W, w += i * G, E += i * Z, _ += i * Y, I += i * Q, l += (i = t[5]) * M, h += i * j, d += i * k, p += i * q, f += i * F, g += i * z, y += i * B, m += i * V, b += i * K, v += i * H, D += i * J, w += i * W, E += i * G, _ += i * Z, I += i * Y, S += i * Q, h += (i = t[6]) * M, d += i * j, p += i * k, f += i * q, g += i * F, y += i * z, m += i * B, b += i * V, v += i * K, D += i * H, w += i * J, E += i * W, _ += i * G, I += i * Z, S += i * Y, O += i * Q, d += (i = t[7]) * M, p += i * j, f += i * k, g += i * q, y += i * F, m += i * z, b += i * B, v += i * V, D += i * K, w += i * H, E += i * J, _ += i * W, I += i * G, S += i * Z, O += i * Y, C += i * Q, p += (i = t[8]) * M, f += i * j, g += i * k, y += i * q, m += i * F, b += i * z, v += i * B, D += i * V, w += i * K, E += i * H, _ += i * J, I += i * W, S += i * G, O += i * Z, C += i * Y, R += i * Q, f += (i = t[9]) * M, g += i * j, y += i * k, m += i * q, b += i * F, v += i * z, D += i * B, w += i * V, E += i * K, _ += i * H, I += i * J, S += i * W, O += i * G, C += i * Z, R += i * Y, P += i * Q, g += (i = t[10]) * M, y += i * j, m += i * k, b += i * q, v += i * F, D += i * z, w += i * B, E += i * V, _ += i * K, I += i * H, S += i * J, O += i * W, C += i * G, R += i * Z, P += i * Y, A += i * Q, y += (i = t[11]) * M, m += i * j, b += i * k, v += i * q, D += i * F, w += i * z, E += i * B, _ += i * V, I += i * K, S += i * H, O += i * J, C += i * W, R += i * G, P += i * Z, A += i * Y, N += i * Q, m += (i = t[12]) * M, b += i * j, v += i * k, D += i * q, w += i * F, E += i * z, _ += i * B, I += i * V, S += i * K, O += i * H, C += i * J, R += i * W, P += i * G, A += i * Z, N += i * Y, x += i * Q, b += (i = t[13]) * M, v += i * j, D += i * k, w += i * q, E += i * F, _ += i * z, I += i * B, S += i * V, O += i * K, C += i * H, R += i * J, P += i * W, A += i * G, N += i * Z, x += i * Y, T += i * Q, v += (i = t[14]) * M, D += i * j, w += i * k, E += i * q, _ += i * F, I += i * z, S += i * B, O += i * V, C += i * K, R += i * H, P += i * J, A += i * W, N += i * G, x += i * Z, T += i * Y, U += i * Q, D += (i = t[15]) * M, w += i * j, E += i * k, _ += i * q, I += i * F, S += i * z, O += i * B, C += i * V, R += i * K, P += i * H, A += i * J, N += i * W, x += i * G, T += i * Z, U += i * Y, L += i * Q, n += 38 * w, o += 38 * E, a += 38 * _, c += 38 * I, u += 38 * S, l += 38 * O, h += 38 * C, d += 38 * R, p += 38 * P, f += 38 * A, g += 38 * N, y += 38 * x, m += 38 * T, b += 38 * U, v += 38 * L, s = Math.floor((i = n + (s = 1) + 65535) / 65536), n = i - 65536 * s, s = Math.floor((i = o + s + 65535) / 65536), o = i - 65536 * s, s = Math.floor((i = a + s + 65535) / 65536), a = i - 65536 * s, s = Math.floor((i = c + s + 65535) / 65536), c = i - 65536 * s, s = Math.floor((i = u + s + 65535) / 65536), u = i - 65536 * s, s = Math.floor((i = l + s + 65535) / 65536), l = i - 65536 * s, s = Math.floor((i = h + s + 65535) / 65536), h = i - 65536 * s, s = Math.floor((i = d + s + 65535) / 65536), d = i - 65536 * s, s = Math.floor((i = p + s + 65535) / 65536), p = i - 65536 * s, s = Math.floor((i = f + s + 65535) / 65536), f = i - 65536 * s, s = Math.floor((i = g + s + 65535) / 65536), g = i - 65536 * s, s = Math.floor((i = y + s + 65535) / 65536), y = i - 65536 * s, s = Math.floor((i = m + s + 65535) / 65536), m = i - 65536 * s, s = Math.floor((i = b + s + 65535) / 65536), b = i - 65536 * s, s = Math.floor((i = v + s + 65535) / 65536), v = i - 65536 * s, s = Math.floor((i = D + s + 65535) / 65536), D = i - 65536 * s, n += s - 1 + 37 * (s - 1), s = Math.floor((i = n + (s = 1) + 65535) / 65536), n = i - 65536 * s, s = Math.floor((i = o + s + 65535) / 65536), o = i - 65536 * s, s = Math.floor((i = a + s + 65535) / 65536), a = i - 65536 * s, s = Math.floor((i = c + s + 65535) / 65536), c = i - 65536 * s, s = Math.floor((i = u + s + 65535) / 65536), u = i - 65536 * s, s = Math.floor((i = l + s + 65535) / 65536), l = i - 65536 * s, s = Math.floor((i = h + s + 65535) / 65536), h = i - 65536 * s, s = Math.floor((i = d + s + 65535) / 65536), d = i - 65536 * s, s = Math.floor((i = p + s + 65535) / 65536), p = i - 65536 * s, s = Math.floor((i = f + s + 65535) / 65536), f = i - 65536 * s, s = Math.floor((i = g + s + 65535) / 65536), g = i - 65536 * s, s = Math.floor((i = y + s + 65535) / 65536), y = i - 65536 * s, s = Math.floor((i = m + s + 65535) / 65536), m = i - 65536 * s, s = Math.floor((i = b + s + 65535) / 65536), b = i - 65536 * s, s = Math.floor((i = v + s + 65535) / 65536), v = i - 65536 * s, s = Math.floor((i = D + s + 65535) / 65536), D = i - 65536 * s, n += s - 1 + 37 * (s - 1), e[0] = n, e[1] = o, e[2] = a, e[3] = c, e[4] = u, e[5] = l, e[6] = h, e[7] = d, e[8] = p, e[9] = f, e[10] = g, e[11] = y, e[12] = m, e[13] = b, e[14] = v, e[15] = D
            }

            function m(e, t) {
                let r = s(),
                    i = s(),
                    n = s(),
                    o = s(),
                    c = s(),
                    u = s(),
                    l = s(),
                    h = s(),
                    d = s();
                g(r, e[1], e[0]), g(d, t[1], t[0]), y(r, r, d), f(i, e[0], e[1]), f(d, t[0], t[1]), y(i, i, d), y(n, e[3], t[3]), y(n, n, a), y(o, e[2], t[2]), f(o, o, o), g(c, i, r), g(u, o, n), f(l, o, n), f(h, i, r), y(e[0], c, u), y(e[1], h, l), y(e[2], l, u), y(e[3], c, h)
            }

            function b(e, t, r) {
                for (let i = 0; i < 4; i++) d(e[i], t[i], r)
            }

            function v(e, t) {
                let r = s(),
                    i = s(),
                    n = s();
                (function(e, t) {
                    let r;
                    let i = s();
                    for (r = 0; r < 16; r++) i[r] = t[r];
                    for (r = 253; r >= 0; r--) y(i, i, i), 2 !== r && 4 !== r && y(i, i, t);
                    for (r = 0; r < 16; r++) e[r] = i[r]
                })(n, t[2]), y(r, t[0], n), y(i, t[1], n), p(e, i), e[31] ^= function(e) {
                    let t = new Uint8Array(32);
                    return p(t, e), 1 & t[0]
                }(r) << 7
            }

            function D(e, t) {
                let r = [s(), s(), s(), s()];
                l(r[0], c), l(r[1], u), l(r[2], o), y(r[3], c, u),
                    function(e, t, r) {
                        l(e[0], n), l(e[1], o), l(e[2], o), l(e[3], n);
                        for (let i = 255; i >= 0; --i) {
                            let s = r[i / 8 | 0] >> (7 & i) & 1;
                            b(e, t, s), m(t, e), m(e, e), b(e, t, s)
                        }
                    }(e, r, t)
            }
            t._w = function(e) {
                if (e.length !== t.aP) throw Error("ed25519: seed must be ".concat(t.aP, " bytes"));
                let r = (0, i.hash)(e);
                r[0] &= 248, r[31] &= 127, r[31] |= 64;
                let n = new Uint8Array(32),
                    o = [s(), s(), s(), s()];
                D(o, r), v(n, o);
                let a = new Uint8Array(64);
                return a.set(e), a.set(n, 32), {
                    publicKey: n,
                    secretKey: a
                }
            };
            let w = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

            function E(e, t) {
                let r, i, s, n;
                for (i = 63; i >= 32; --i) {
                    for (r = 0, s = i - 32, n = i - 12; s < n; ++s) t[s] += r - 16 * t[i] * w[s - (i - 32)], r = Math.floor((t[s] + 128) / 256), t[s] -= 256 * r;
                    t[s] += r, t[i] = 0
                }
                for (s = 0, r = 0; s < 32; s++) t[s] += r - (t[31] >> 4) * w[s], r = t[s] >> 8, t[s] &= 255;
                for (s = 0; s < 32; s++) t[s] -= r * w[s];
                for (i = 0; i < 32; i++) t[i + 1] += t[i] >> 8, e[i] = 255 & t[i]
            }

            function _(e) {
                let t = new Float64Array(64);
                for (let r = 0; r < 64; r++) t[r] = e[r];
                for (let t = 0; t < 64; t++) e[t] = 0;
                E(e, t)
            }
            t.Xx = function(e, t) {
                let r = new Float64Array(64),
                    n = [s(), s(), s(), s()],
                    o = (0, i.hash)(e.subarray(0, 32));
                o[0] &= 248, o[31] &= 127, o[31] |= 64;
                let a = new Uint8Array(64);
                a.set(o.subarray(32), 32);
                let c = new i.SHA512;
                c.update(a.subarray(32)), c.update(t);
                let u = c.digest();
                c.clean(), _(u), D(n, u), v(a, n), c.reset(), c.update(a.subarray(0, 32)), c.update(e.subarray(32)), c.update(t);
                let l = c.digest();
                _(l);
                for (let e = 0; e < 32; e++) r[e] = u[e];
                for (let e = 0; e < 32; e++)
                    for (let t = 0; t < 32; t++) r[e + t] += l[e] * o[t];
                return E(a.subarray(32), r), a
            }
        },
        28302: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isSerializableHash = function(e) {
                return void 0 !== e.saveState && void 0 !== e.restoreState && void 0 !== e.cleanSavedState
            }
        },
        43057: function(e, t, r) {
            "use strict";
            var i = r(47163),
                s = r(30071),
                n = function() {
                    function e(e, t, r, s) {
                        void 0 === r && (r = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = s;
                        var n = i.hmac(this._hash, r, t);
                        this._hmac = new i.HMAC(e, n), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length
                    }
                    return e.prototype._fillBuffer = function() {
                        this._counter[0]++;
                        var e = this._counter[0];
                        if (0 === e) throw Error("hkdf: cannot expand more");
                        this._hmac.reset(), e > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0
                    }, e.prototype.expand = function(e) {
                        for (var t = new Uint8Array(e), r = 0; r < t.length; r++) this._bufpos === this._buffer.length && this._fillBuffer(), t[r] = this._buffer[this._bufpos++];
                        return t
                    }, e.prototype.clean = function() {
                        this._hmac.clean(), s.wipe(this._buffer), s.wipe(this._counter), this._bufpos = 0
                    }, e
                }();
            t.t = n
        },
        47163: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(28302),
                s = r(74945),
                n = r(30071),
                o = function() {
                    function e(e, t) {
                        this._finished = !1, this._inner = new e, this._outer = new e, this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
                        var r = new Uint8Array(this.blockSize);
                        t.length > this.blockSize ? this._inner.update(t).finish(r).clean() : r.set(t);
                        for (var s = 0; s < r.length; s++) r[s] ^= 54;
                        this._inner.update(r);
                        for (var s = 0; s < r.length; s++) r[s] ^= 106;
                        this._outer.update(r), i.isSerializableHash(this._inner) && i.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), n.wipe(r)
                    }
                    return e.prototype.reset = function() {
                        if (!i.isSerializableHash(this._inner) || !i.isSerializableHash(this._outer)) throw Error("hmac: can't reset() because hash doesn't implement restoreState()");
                        return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
                    }, e.prototype.clean = function() {
                        i.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), i.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean()
                    }, e.prototype.update = function(e) {
                        return this._inner.update(e), this
                    }, e.prototype.finish = function(e) {
                        return this._finished ? this._outer.finish(e) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0), this
                    }, e.prototype.digest = function() {
                        var e = new Uint8Array(this.digestLength);
                        return this.finish(e), e
                    }, e.prototype.saveState = function() {
                        if (!i.isSerializableHash(this._inner)) throw Error("hmac: can't saveState() because hash doesn't implement it");
                        return this._inner.saveState()
                    }, e.prototype.restoreState = function(e) {
                        if (!i.isSerializableHash(this._inner) || !i.isSerializableHash(this._outer)) throw Error("hmac: can't restoreState() because hash doesn't implement it");
                        return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
                    }, e.prototype.cleanSavedState = function(e) {
                        if (!i.isSerializableHash(this._inner)) throw Error("hmac: can't cleanSavedState() because hash doesn't implement it");
                        this._inner.cleanSavedState(e)
                    }, e
                }();
            t.HMAC = o, t.hmac = function(e, t, r) {
                var i = new o(e, t);
                i.update(r);
                var s = i.digest();
                return i.clean(), s
            }, t.equal = s.equal
        },
        56974: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.mul = Math.imul || function(e, t) {
                var r = 65535 & e,
                    i = 65535 & t;
                return r * i + ((e >>> 16 & 65535) * i + r * (t >>> 16 & 65535) << 16 >>> 0) | 0
            }, t.add = function(e, t) {
                return e + t | 0
            }, t.sub = function(e, t) {
                return e - t | 0
            }, t.rotl = function(e, t) {
                return e << t | e >>> 32 - t
            }, t.rotr = function(e, t) {
                return e << 32 - t | e >>> t
            }, t.isInteger = Number.isInteger || function(e) {
                return "number" == typeof e && isFinite(e) && Math.floor(e) === e
            }, t.MAX_SAFE_INTEGER = 9007199254740991, t.isSafeInteger = function(e) {
                return t.isInteger(e) && e >= -t.MAX_SAFE_INTEGER && e <= t.MAX_SAFE_INTEGER
            }
        },
        74546: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(74945),
                s = r(30071);
            t.DIGEST_LENGTH = 16;
            var n = function() {
                function e(e) {
                    this.digestLength = t.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
                    var r = e[0] | e[1] << 8;
                    this._r[0] = 8191 & r;
                    var i = e[2] | e[3] << 8;
                    this._r[1] = (r >>> 13 | i << 3) & 8191;
                    var s = e[4] | e[5] << 8;
                    this._r[2] = (i >>> 10 | s << 6) & 7939;
                    var n = e[6] | e[7] << 8;
                    this._r[3] = (s >>> 7 | n << 9) & 8191;
                    var o = e[8] | e[9] << 8;
                    this._r[4] = (n >>> 4 | o << 12) & 255, this._r[5] = o >>> 1 & 8190;
                    var a = e[10] | e[11] << 8;
                    this._r[6] = (o >>> 14 | a << 2) & 8191;
                    var c = e[12] | e[13] << 8;
                    this._r[7] = (a >>> 11 | c << 5) & 8065;
                    var u = e[14] | e[15] << 8;
                    this._r[8] = (c >>> 8 | u << 8) & 8191, this._r[9] = u >>> 5 & 127, this._pad[0] = e[16] | e[17] << 8, this._pad[1] = e[18] | e[19] << 8, this._pad[2] = e[20] | e[21] << 8, this._pad[3] = e[22] | e[23] << 8, this._pad[4] = e[24] | e[25] << 8, this._pad[5] = e[26] | e[27] << 8, this._pad[6] = e[28] | e[29] << 8, this._pad[7] = e[30] | e[31] << 8
                }
                return e.prototype._blocks = function(e, t, r) {
                    for (var i = this._fin ? 0 : 2048, s = this._h[0], n = this._h[1], o = this._h[2], a = this._h[3], c = this._h[4], u = this._h[5], l = this._h[6], h = this._h[7], d = this._h[8], p = this._h[9], f = this._r[0], g = this._r[1], y = this._r[2], m = this._r[3], b = this._r[4], v = this._r[5], D = this._r[6], w = this._r[7], E = this._r[8], _ = this._r[9]; r >= 16;) {
                        var I, S = e[t + 0] | e[t + 1] << 8;
                        s += 8191 & S;
                        var O = e[t + 2] | e[t + 3] << 8;
                        n += (S >>> 13 | O << 3) & 8191;
                        var C = e[t + 4] | e[t + 5] << 8;
                        o += (O >>> 10 | C << 6) & 8191;
                        var R = e[t + 6] | e[t + 7] << 8;
                        a += (C >>> 7 | R << 9) & 8191;
                        var P = e[t + 8] | e[t + 9] << 8;
                        c += (R >>> 4 | P << 12) & 8191, u += P >>> 1 & 8191;
                        var A = e[t + 10] | e[t + 11] << 8;
                        l += (P >>> 14 | A << 2) & 8191;
                        var N = e[t + 12] | e[t + 13] << 8;
                        h += (A >>> 11 | N << 5) & 8191;
                        var x = e[t + 14] | e[t + 15] << 8;
                        d += (N >>> 8 | x << 8) & 8191, p += x >>> 5 | i;
                        var T = 0;
                        T = (I = 0 + s * f + 5 * _ * n + 5 * E * o + 5 * w * a + 5 * D * c) >>> 13, I &= 8191, I += 5 * v * u + 5 * b * l + 5 * m * h + 5 * y * d + 5 * g * p, T += I >>> 13, I &= 8191;
                        var U = T;
                        U += s * g + n * f + 5 * _ * o + 5 * E * a + 5 * w * c, T = U >>> 13, U &= 8191, U += 5 * D * u + 5 * v * l + 5 * b * h + 5 * m * d + 5 * y * p, T += U >>> 13, U &= 8191;
                        var L = T;
                        L += s * y + n * g + o * f + 5 * _ * a + 5 * E * c, T = L >>> 13, L &= 8191, L += 5 * w * u + 5 * D * l + 5 * v * h + 5 * b * d + 5 * m * p, T += L >>> 13, L &= 8191;
                        var M = T;
                        M += s * m + n * y + o * g + a * f + 5 * _ * c, T = M >>> 13, M &= 8191, M += 5 * E * u + 5 * w * l + 5 * D * h + 5 * v * d + 5 * b * p, T += M >>> 13, M &= 8191;
                        var j = T;
                        j += s * b + n * m + o * y + a * g + c * f, T = j >>> 13, j &= 8191, j += 5 * _ * u + 5 * E * l + 5 * w * h + 5 * D * d + 5 * v * p, T += j >>> 13, j &= 8191;
                        var k = T;
                        k += s * v + n * b + o * m + a * y + c * g, T = k >>> 13, k &= 8191, k += u * f + 5 * _ * l + 5 * E * h + 5 * w * d + 5 * D * p, T += k >>> 13, k &= 8191;
                        var q = T;
                        q += s * D + n * v + o * b + a * m + c * y, T = q >>> 13, q &= 8191, q += u * g + l * f + 5 * _ * h + 5 * E * d + 5 * w * p, T += q >>> 13, q &= 8191;
                        var F = T;
                        F += s * w + n * D + o * v + a * b + c * m, T = F >>> 13, F &= 8191, F += u * y + l * g + h * f + 5 * _ * d + 5 * E * p, T += F >>> 13, F &= 8191;
                        var z = T;
                        z += s * E + n * w + o * D + a * v + c * b, T = z >>> 13, z &= 8191, z += u * m + l * y + h * g + d * f + 5 * _ * p, T += z >>> 13, z &= 8191;
                        var B = T;
                        B += s * _ + n * E + o * w + a * D + c * v, T = B >>> 13, B &= 8191, B += u * b + l * m + h * y + d * g + p * f, T += B >>> 13, B &= 8191, I = 8191 & (T = (T = (T << 2) + T | 0) + I | 0), T >>>= 13, U += T, s = I, n = U, o = L, a = M, c = j, u = k, l = q, h = F, d = z, p = B, t += 16, r -= 16
                    }
                    this._h[0] = s, this._h[1] = n, this._h[2] = o, this._h[3] = a, this._h[4] = c, this._h[5] = u, this._h[6] = l, this._h[7] = h, this._h[8] = d, this._h[9] = p
                }, e.prototype.finish = function(e, t) {
                    void 0 === t && (t = 0);
                    var r, i, s, n, o = new Uint16Array(10);
                    if (this._leftover) {
                        for (n = this._leftover, this._buffer[n++] = 1; n < 16; n++) this._buffer[n] = 0;
                        this._fin = 1, this._blocks(this._buffer, 0, 16)
                    }
                    for (r = this._h[1] >>> 13, this._h[1] &= 8191, n = 2; n < 10; n++) this._h[n] += r, r = this._h[n] >>> 13, this._h[n] &= 8191;
                    for (this._h[0] += 5 * r, r = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += r, r = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += r, o[0] = this._h[0] + 5, r = o[0] >>> 13, o[0] &= 8191, n = 1; n < 10; n++) o[n] = this._h[n] + r, r = o[n] >>> 13, o[n] &= 8191;
                    for (o[9] -= 8192, i = (1 ^ r) - 1, n = 0; n < 10; n++) o[n] &= i;
                    for (n = 0, i = ~i; n < 10; n++) this._h[n] = this._h[n] & i | o[n];
                    for (n = 1, this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, s = this._h[0] + this._pad[0], this._h[0] = 65535 & s; n < 8; n++) s = (this._h[n] + this._pad[n] | 0) + (s >>> 16) | 0, this._h[n] = 65535 & s;
                    return e[t + 0] = this._h[0] >>> 0, e[t + 1] = this._h[0] >>> 8, e[t + 2] = this._h[1] >>> 0, e[t + 3] = this._h[1] >>> 8, e[t + 4] = this._h[2] >>> 0, e[t + 5] = this._h[2] >>> 8, e[t + 6] = this._h[3] >>> 0, e[t + 7] = this._h[3] >>> 8, e[t + 8] = this._h[4] >>> 0, e[t + 9] = this._h[4] >>> 8, e[t + 10] = this._h[5] >>> 0, e[t + 11] = this._h[5] >>> 8, e[t + 12] = this._h[6] >>> 0, e[t + 13] = this._h[6] >>> 8, e[t + 14] = this._h[7] >>> 0, e[t + 15] = this._h[7] >>> 8, this._finished = !0, this
                }, e.prototype.update = function(e) {
                    var t, r = 0,
                        i = e.length;
                    if (this._leftover) {
                        (t = 16 - this._leftover) > i && (t = i);
                        for (var s = 0; s < t; s++) this._buffer[this._leftover + s] = e[r + s];
                        if (i -= t, r += t, this._leftover += t, this._leftover < 16) return this;
                        this._blocks(this._buffer, 0, 16), this._leftover = 0
                    }
                    if (i >= 16 && (t = i - i % 16, this._blocks(e, r, t), r += t, i -= t), i) {
                        for (var s = 0; s < i; s++) this._buffer[this._leftover + s] = e[r + s];
                        this._leftover += i
                    }
                    return this
                }, e.prototype.digest = function() {
                    if (this._finished) throw Error("Poly1305 was finished");
                    var e = new Uint8Array(16);
                    return this.finish(e), e
                }, e.prototype.clean = function() {
                    return s.wipe(this._buffer), s.wipe(this._r), s.wipe(this._h), s.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this
                }, e
            }();
            t.Poly1305 = n, t.oneTimeAuth = function(e, t) {
                var r = new n(e);
                r.update(t);
                var i = r.digest();
                return r.clean(), i
            }, t.equal = function(e, r) {
                return e.length === t.DIGEST_LENGTH && r.length === t.DIGEST_LENGTH && i.equal(e, r)
            }
        },
        96526: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
            let i = r(17393),
                s = r(70170),
                n = r(30071);

            function o(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.defaultRandomSource;
                return r.randomBytes(e)
            }
            t.defaultRandomSource = new i.SystemRandomSource, t.randomBytes = o, t.randomUint32 = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.defaultRandomSource,
                    r = o(4, e),
                    i = (0, s.readUint32LE)(r);
                return (0, n.wipe)(r), i
            };
            let a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            function c(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.defaultRandomSource;
                if (r.length < 2) throw Error("randomString charset is too short");
                if (r.length > 256) throw Error("randomString charset is too long");
                let s = "",
                    c = r.length,
                    u = 256 - 256 % c;
                for (; e > 0;) {
                    let t = o(Math.ceil(256 * e / u), i);
                    for (let i = 0; i < t.length && e > 0; i++) {
                        let n = t[i];
                        n < u && (s += r.charAt(n % c), e--)
                    }(0, n.wipe)(t)
                }
                return s
            }
            t.randomString = c, t.randomStringForEntropy = function(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.defaultRandomSource;
                return c(Math.ceil(e / (Math.log(r.length) / Math.LN2)), r, i)
            }
        },
        7435: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BrowserRandomSource = void 0;
            class r {
                randomBytes(e) {
                    if (!this.isAvailable || !this._crypto) throw Error("Browser random byte generator is not available.");
                    let t = new Uint8Array(e);
                    for (let e = 0; e < t.length; e += 65536) this._crypto.getRandomValues(t.subarray(e, e + Math.min(t.length - e, 65536)));
                    return t
                }
                constructor() {
                    this.isAvailable = !1, this.isInstantiated = !1;
                    let e = "undefined" != typeof self ? self.crypto || self.msCrypto : null;
                    e && void 0 !== e.getRandomValues && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0)
                }
            }
            t.BrowserRandomSource = r
        },
        51410: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NodeRandomSource = void 0;
            let i = r(30071);
            class s {
                randomBytes(e) {
                    if (!this.isAvailable || !this._crypto) throw Error("Node.js random byte generator is not available.");
                    let t = this._crypto.randomBytes(e);
                    if (t.length !== e) throw Error("NodeRandomSource: got fewer bytes than requested");
                    let r = new Uint8Array(e);
                    for (let e = 0; e < r.length; e++) r[e] = t[e];
                    return (0, i.wipe)(t), r
                }
                constructor() {
                    this.isAvailable = !1, this.isInstantiated = !1; {
                        let e = r(35883);
                        e && e.randomBytes && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0)
                    }
                }
            }
            t.NodeRandomSource = s
        },
        17393: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SystemRandomSource = void 0;
            let i = r(7435),
                s = r(51410);
            class n {
                randomBytes(e) {
                    if (!this.isAvailable) throw Error("System random byte generator is not available.");
                    return this._source.randomBytes(e)
                }
                constructor() {
                    if (this.isAvailable = !1, this.name = "", this._source = new i.BrowserRandomSource, this._source.isAvailable) {
                        this.isAvailable = !0, this.name = "Browser";
                        return
                    }
                    if (this._source = new s.NodeRandomSource, this._source.isAvailable) {
                        this.isAvailable = !0, this.name = "Node";
                        return
                    }
                }
            }
            t.SystemRandomSource = n
        },
        95162: function(e, t, r) {
            "use strict";
            var i = r(70170),
                s = r(30071);
            t.k = 32, t.cn = 64;
            var n = function() {
                function e() {
                    this.digestLength = t.k, this.blockSize = t.cn, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return e.prototype._initState = function() {
                    this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225
                }, e.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, e.prototype.clean = function() {
                    s.wipe(this._buffer), s.wipe(this._temp), this.reset()
                }, e.prototype.update = function(e, t) {
                    if (void 0 === t && (t = e.length), this._finished) throw Error("SHA256: can't update because hash was finished.");
                    var r = 0;
                    if (this._bytesHashed += t, this._bufferLength > 0) {
                        for (; this._bufferLength < this.blockSize && t > 0;) this._buffer[this._bufferLength++] = e[r++], t--;
                        this._bufferLength === this.blockSize && (a(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (t >= this.blockSize && (r = a(this._temp, this._state, e, r, t), t %= this.blockSize); t > 0;) this._buffer[this._bufferLength++] = e[r++], t--;
                    return this
                }, e.prototype.finish = function(e) {
                    if (!this._finished) {
                        var t = this._bytesHashed,
                            r = this._bufferLength,
                            s = t % 64 < 56 ? 64 : 128;
                        this._buffer[r] = 128;
                        for (var n = r + 1; n < s - 8; n++) this._buffer[n] = 0;
                        i.writeUint32BE(t / 536870912 | 0, this._buffer, s - 8), i.writeUint32BE(t << 3, this._buffer, s - 4), a(this._temp, this._state, this._buffer, 0, s), this._finished = !0
                    }
                    for (var n = 0; n < this.digestLength / 4; n++) i.writeUint32BE(this._state[n], e, 4 * n);
                    return this
                }, e.prototype.digest = function() {
                    var e = new Uint8Array(this.digestLength);
                    return this.finish(e), e
                }, e.prototype.saveState = function() {
                    if (this._finished) throw Error("SHA256: cannot save finished state");
                    return {
                        state: new Int32Array(this._state),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, e.prototype.restoreState = function(e) {
                    return this._state.set(e.state), this._bufferLength = e.bufferLength, e.buffer && this._buffer.set(e.buffer), this._bytesHashed = e.bytesHashed, this._finished = !1, this
                }, e.prototype.cleanSavedState = function(e) {
                    s.wipe(e.state), e.buffer && s.wipe(e.buffer), e.bufferLength = 0, e.bytesHashed = 0
                }, e
            }();
            t.mE = n;
            var o = new Int32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);

            function a(e, t, r, s, n) {
                for (; n >= 64;) {
                    for (var a = t[0], c = t[1], u = t[2], l = t[3], h = t[4], d = t[5], p = t[6], f = t[7], g = 0; g < 16; g++) {
                        var y = s + 4 * g;
                        e[g] = i.readUint32BE(r, y)
                    }
                    for (var g = 16; g < 64; g++) {
                        var m = e[g - 2],
                            b = (m >>> 17 | m << 15) ^ (m >>> 19 | m << 13) ^ m >>> 10,
                            v = ((m = e[g - 15]) >>> 7 | m << 25) ^ (m >>> 18 | m << 14) ^ m >>> 3;
                        e[g] = (b + e[g - 7] | 0) + (v + e[g - 16] | 0)
                    }
                    for (var g = 0; g < 64; g++) {
                        var b = (((h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7)) + (h & d ^ ~h & p) | 0) + (f + (o[g] + e[g] | 0) | 0) | 0,
                            v = ((a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10)) + (a & c ^ a & u ^ c & u) | 0;
                        f = p, p = d, d = h, h = l + b | 0, l = u, u = c, c = a, a = b + v | 0
                    }
                    t[0] += a, t[1] += c, t[2] += u, t[3] += l, t[4] += h, t[5] += d, t[6] += p, t[7] += f, s += 64, n -= 64
                }
                return s
            }
            t.vp = function(e) {
                var t = new n;
                t.update(e);
                var r = t.digest();
                return t.clean(), r
            }
        },
        16547: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(70170),
                s = r(30071);
            t.DIGEST_LENGTH = 64, t.BLOCK_SIZE = 128;
            var n = function() {
                function e() {
                    this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return e.prototype._initState = function() {
                    this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209
                }, e.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, e.prototype.clean = function() {
                    s.wipe(this._buffer), s.wipe(this._tempHi), s.wipe(this._tempLo), this.reset()
                }, e.prototype.update = function(e, r) {
                    if (void 0 === r && (r = e.length), this._finished) throw Error("SHA512: can't update because hash was finished.");
                    var i = 0;
                    if (this._bytesHashed += r, this._bufferLength > 0) {
                        for (; this._bufferLength < t.BLOCK_SIZE && r > 0;) this._buffer[this._bufferLength++] = e[i++], r--;
                        this._bufferLength === this.blockSize && (a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (r >= this.blockSize && (i = a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, e, i, r), r %= this.blockSize); r > 0;) this._buffer[this._bufferLength++] = e[i++], r--;
                    return this
                }, e.prototype.finish = function(e) {
                    if (!this._finished) {
                        var t = this._bytesHashed,
                            r = this._bufferLength,
                            s = t % 128 < 112 ? 128 : 256;
                        this._buffer[r] = 128;
                        for (var n = r + 1; n < s - 8; n++) this._buffer[n] = 0;
                        i.writeUint32BE(t / 536870912 | 0, this._buffer, s - 8), i.writeUint32BE(t << 3, this._buffer, s - 4), a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, s), this._finished = !0
                    }
                    for (var n = 0; n < this.digestLength / 8; n++) i.writeUint32BE(this._stateHi[n], e, 8 * n), i.writeUint32BE(this._stateLo[n], e, 8 * n + 4);
                    return this
                }, e.prototype.digest = function() {
                    var e = new Uint8Array(this.digestLength);
                    return this.finish(e), e
                }, e.prototype.saveState = function() {
                    if (this._finished) throw Error("SHA256: cannot save finished state");
                    return {
                        stateHi: new Int32Array(this._stateHi),
                        stateLo: new Int32Array(this._stateLo),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, e.prototype.restoreState = function(e) {
                    return this._stateHi.set(e.stateHi), this._stateLo.set(e.stateLo), this._bufferLength = e.bufferLength, e.buffer && this._buffer.set(e.buffer), this._bytesHashed = e.bytesHashed, this._finished = !1, this
                }, e.prototype.cleanSavedState = function(e) {
                    s.wipe(e.stateHi), s.wipe(e.stateLo), e.buffer && s.wipe(e.buffer), e.bufferLength = 0, e.bytesHashed = 0
                }, e
            }();
            t.SHA512 = n;
            var o = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);

            function a(e, t, r, s, n, a, c) {
                for (var u, l, h, d, p, f, g, y, m = r[0], b = r[1], v = r[2], D = r[3], w = r[4], E = r[5], _ = r[6], I = r[7], S = s[0], O = s[1], C = s[2], R = s[3], P = s[4], A = s[5], N = s[6], x = s[7]; c >= 128;) {
                    for (var T = 0; T < 16; T++) {
                        var U = 8 * T + a;
                        e[T] = i.readUint32BE(n, U), t[T] = i.readUint32BE(n, U + 4)
                    }
                    for (var T = 0; T < 80; T++) {
                        var L = m,
                            M = b,
                            j = v,
                            k = D,
                            q = w,
                            F = E,
                            z = _,
                            B = I,
                            V = S,
                            K = O,
                            H = C,
                            J = R,
                            W = P,
                            G = A,
                            Z = N,
                            Y = x;
                        if (u = I, p = 65535 & (l = x), f = l >>> 16, g = 65535 & u, y = u >>> 16, u = (w >>> 14 | P << 18) ^ (w >>> 18 | P << 14) ^ (P >>> 9 | w << 23), p += 65535 & (l = (P >>> 14 | w << 18) ^ (P >>> 18 | w << 14) ^ (w >>> 9 | P << 23)), f += l >>> 16, g += 65535 & u, y += u >>> 16, u = w & E ^ ~w & _, p += 65535 & (l = P & A ^ ~P & N), f += l >>> 16, g += 65535 & u, y += u >>> 16, u = o[2 * T], p += 65535 & (l = o[2 * T + 1]), f += l >>> 16, g += 65535 & u, y += u >>> 16, u = e[T % 16], p += 65535 & (l = t[T % 16]), f += l >>> 16, g += 65535 & u, y += u >>> 16, f += p >>> 16, g += f >>> 16, y += g >>> 16, h = 65535 & g | y << 16, d = 65535 & p | f << 16, u = h, p = 65535 & (l = d), f = l >>> 16, g = 65535 & u, y = u >>> 16, u = (m >>> 28 | S << 4) ^ (S >>> 2 | m << 30) ^ (S >>> 7 | m << 25), p += 65535 & (l = (S >>> 28 | m << 4) ^ (m >>> 2 | S << 30) ^ (m >>> 7 | S << 25)), f += l >>> 16, g += 65535 & u, y += u >>> 16, u = m & b ^ m & v ^ b & v, p += 65535 & (l = S & O ^ S & C ^ O & C), f += l >>> 16, g += 65535 & u, y += u >>> 16, f += p >>> 16, g += f >>> 16, y += g >>> 16, B = 65535 & g | y << 16, Y = 65535 & p | f << 16, u = k, p = 65535 & (l = J), f = l >>> 16, g = 65535 & u, y = u >>> 16, u = h, p += 65535 & (l = d), f += l >>> 16, g += 65535 & u, y += u >>> 16, f += p >>> 16, g += f >>> 16, y += g >>> 16, k = 65535 & g | y << 16, J = 65535 & p | f << 16, b = L, v = M, D = j, w = k, E = q, _ = F, I = z, m = B, O = V, C = K, R = H, P = J, A = W, N = G, x = Z, S = Y, T % 16 == 15)
                            for (var U = 0; U < 16; U++) u = e[U], p = 65535 & (l = t[U]), f = l >>> 16, g = 65535 & u, y = u >>> 16, u = e[(U + 9) % 16], p += 65535 & (l = t[(U + 9) % 16]), f += l >>> 16, g += 65535 & u, y += u >>> 16, u = ((h = e[(U + 1) % 16]) >>> 1 | (d = t[(U + 1) % 16]) << 31) ^ (h >>> 8 | d << 24) ^ h >>> 7, p += 65535 & (l = (d >>> 1 | h << 31) ^ (d >>> 8 | h << 24) ^ (d >>> 7 | h << 25)), f += l >>> 16, g += 65535 & u, y += u >>> 16, u = ((h = e[(U + 14) % 16]) >>> 19 | (d = t[(U + 14) % 16]) << 13) ^ (d >>> 29 | h << 3) ^ h >>> 6, p += 65535 & (l = (d >>> 19 | h << 13) ^ (h >>> 29 | d << 3) ^ (d >>> 6 | h << 26)), f += l >>> 16, g += 65535 & u, y += u >>> 16, f += p >>> 16, g += f >>> 16, y += g >>> 16, e[U] = 65535 & g | y << 16, t[U] = 65535 & p | f << 16
                    }
                    u = m, p = 65535 & (l = S), f = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[0], p += 65535 & (l = s[0]), f += l >>> 16, g += 65535 & u, y += u >>> 16, f += p >>> 16, g += f >>> 16, y += g >>> 16, r[0] = m = 65535 & g | y << 16, s[0] = S = 65535 & p | f << 16, u = b, p = 65535 & (l = O), f = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[1], p += 65535 & (l = s[1]), f += l >>> 16, g += 65535 & u, y += u >>> 16, f += p >>> 16, g += f >>> 16, y += g >>> 16, r[1] = b = 65535 & g | y << 16, s[1] = O = 65535 & p | f << 16, u = v, p = 65535 & (l = C), f = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[2], p += 65535 & (l = s[2]), f += l >>> 16, g += 65535 & u, y += u >>> 16, f += p >>> 16, g += f >>> 16, y += g >>> 16, r[2] = v = 65535 & g | y << 16, s[2] = C = 65535 & p | f << 16, u = D, p = 65535 & (l = R), f = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[3], p += 65535 & (l = s[3]), f += l >>> 16, g += 65535 & u, y += u >>> 16, f += p >>> 16, g += f >>> 16, y += g >>> 16, r[3] = D = 65535 & g | y << 16, s[3] = R = 65535 & p | f << 16, u = w, p = 65535 & (l = P), f = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[4], p += 65535 & (l = s[4]), f += l >>> 16, g += 65535 & u, y += u >>> 16, f += p >>> 16, g += f >>> 16, y += g >>> 16, r[4] = w = 65535 & g | y << 16, s[4] = P = 65535 & p | f << 16, u = E, p = 65535 & (l = A), f = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[5], p += 65535 & (l = s[5]), f += l >>> 16, g += 65535 & u, y += u >>> 16, f += p >>> 16, g += f >>> 16, y += g >>> 16, r[5] = E = 65535 & g | y << 16, s[5] = A = 65535 & p | f << 16, u = _, p = 65535 & (l = N), f = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[6], p += 65535 & (l = s[6]), f += l >>> 16, g += 65535 & u, y += u >>> 16, f += p >>> 16, g += f >>> 16, y += g >>> 16, r[6] = _ = 65535 & g | y << 16, s[6] = N = 65535 & p | f << 16, u = I, p = 65535 & (l = x), f = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[7], p += 65535 & (l = s[7]), f += l >>> 16, g += 65535 & u, y += u >>> 16, f += p >>> 16, g += f >>> 16, y += g >>> 16, r[7] = I = 65535 & g | y << 16, s[7] = x = 65535 & p | f << 16, a += 128, c -= 128
                }
                return a
            }
            t.hash = function(e) {
                var t = new n;
                t.update(e);
                var r = t.digest();
                return t.clean(), r
            }
        },
        30071: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.wipe = function(e) {
                for (var t = 0; t < e.length; t++) e[t] = 0;
                return e
            }
        },
        11145: function(e, t, r) {
            "use strict";
            t.gi = t.Au = t.KS = t.kz = void 0;
            let i = r(96526),
                s = r(30071);

            function n(e) {
                let t = new Float64Array(16);
                if (e)
                    for (let r = 0; r < e.length; r++) t[r] = e[r];
                return t
            }
            t.kz = 32, t.KS = 32;
            let o = new Uint8Array(32);
            o[0] = 9;
            let a = n([56129, 1]);

            function c(e) {
                let t = 1;
                for (let r = 0; r < 16; r++) {
                    let i = e[r] + t + 65535;
                    t = Math.floor(i / 65536), e[r] = i - 65536 * t
                }
                e[0] += t - 1 + 37 * (t - 1)
            }

            function u(e, t, r) {
                let i = ~(r - 1);
                for (let r = 0; r < 16; r++) {
                    let s = i & (e[r] ^ t[r]);
                    e[r] ^= s, t[r] ^= s
                }
            }

            function l(e, t, r) {
                for (let i = 0; i < 16; i++) e[i] = t[i] + r[i]
            }

            function h(e, t, r) {
                for (let i = 0; i < 16; i++) e[i] = t[i] - r[i]
            }

            function d(e, t, r) {
                let i, s, n = 0,
                    o = 0,
                    a = 0,
                    c = 0,
                    u = 0,
                    l = 0,
                    h = 0,
                    d = 0,
                    p = 0,
                    f = 0,
                    g = 0,
                    y = 0,
                    m = 0,
                    b = 0,
                    v = 0,
                    D = 0,
                    w = 0,
                    E = 0,
                    _ = 0,
                    I = 0,
                    S = 0,
                    O = 0,
                    C = 0,
                    R = 0,
                    P = 0,
                    A = 0,
                    N = 0,
                    x = 0,
                    T = 0,
                    U = 0,
                    L = 0,
                    M = r[0],
                    j = r[1],
                    k = r[2],
                    q = r[3],
                    F = r[4],
                    z = r[5],
                    B = r[6],
                    V = r[7],
                    K = r[8],
                    H = r[9],
                    J = r[10],
                    W = r[11],
                    G = r[12],
                    Z = r[13],
                    Y = r[14],
                    Q = r[15];
                n += (i = t[0]) * M, o += i * j, a += i * k, c += i * q, u += i * F, l += i * z, h += i * B, d += i * V, p += i * K, f += i * H, g += i * J, y += i * W, m += i * G, b += i * Z, v += i * Y, D += i * Q, o += (i = t[1]) * M, a += i * j, c += i * k, u += i * q, l += i * F, h += i * z, d += i * B, p += i * V, f += i * K, g += i * H, y += i * J, m += i * W, b += i * G, v += i * Z, D += i * Y, w += i * Q, a += (i = t[2]) * M, c += i * j, u += i * k, l += i * q, h += i * F, d += i * z, p += i * B, f += i * V, g += i * K, y += i * H, m += i * J, b += i * W, v += i * G, D += i * Z, w += i * Y, E += i * Q, c += (i = t[3]) * M, u += i * j, l += i * k, h += i * q, d += i * F, p += i * z, f += i * B, g += i * V, y += i * K, m += i * H, b += i * J, v += i * W, D += i * G, w += i * Z, E += i * Y, _ += i * Q, u += (i = t[4]) * M, l += i * j, h += i * k, d += i * q, p += i * F, f += i * z, g += i * B, y += i * V, m += i * K, b += i * H, v += i * J, D += i * W, w += i * G, E += i * Z, _ += i * Y, I += i * Q, l += (i = t[5]) * M, h += i * j, d += i * k, p += i * q, f += i * F, g += i * z, y += i * B, m += i * V, b += i * K, v += i * H, D += i * J, w += i * W, E += i * G, _ += i * Z, I += i * Y, S += i * Q, h += (i = t[6]) * M, d += i * j, p += i * k, f += i * q, g += i * F, y += i * z, m += i * B, b += i * V, v += i * K, D += i * H, w += i * J, E += i * W, _ += i * G, I += i * Z, S += i * Y, O += i * Q, d += (i = t[7]) * M, p += i * j, f += i * k, g += i * q, y += i * F, m += i * z, b += i * B, v += i * V, D += i * K, w += i * H, E += i * J, _ += i * W, I += i * G, S += i * Z, O += i * Y, C += i * Q, p += (i = t[8]) * M, f += i * j, g += i * k, y += i * q, m += i * F, b += i * z, v += i * B, D += i * V, w += i * K, E += i * H, _ += i * J, I += i * W, S += i * G, O += i * Z, C += i * Y, R += i * Q, f += (i = t[9]) * M, g += i * j, y += i * k, m += i * q, b += i * F, v += i * z, D += i * B, w += i * V, E += i * K, _ += i * H, I += i * J, S += i * W, O += i * G, C += i * Z, R += i * Y, P += i * Q, g += (i = t[10]) * M, y += i * j, m += i * k, b += i * q, v += i * F, D += i * z, w += i * B, E += i * V, _ += i * K, I += i * H, S += i * J, O += i * W, C += i * G, R += i * Z, P += i * Y, A += i * Q, y += (i = t[11]) * M, m += i * j, b += i * k, v += i * q, D += i * F, w += i * z, E += i * B, _ += i * V, I += i * K, S += i * H, O += i * J, C += i * W, R += i * G, P += i * Z, A += i * Y, N += i * Q, m += (i = t[12]) * M, b += i * j, v += i * k, D += i * q, w += i * F, E += i * z, _ += i * B, I += i * V, S += i * K, O += i * H, C += i * J, R += i * W, P += i * G, A += i * Z, N += i * Y, x += i * Q, b += (i = t[13]) * M, v += i * j, D += i * k, w += i * q, E += i * F, _ += i * z, I += i * B, S += i * V, O += i * K, C += i * H, R += i * J, P += i * W, A += i * G, N += i * Z, x += i * Y, T += i * Q, v += (i = t[14]) * M, D += i * j, w += i * k, E += i * q, _ += i * F, I += i * z, S += i * B, O += i * V, C += i * K, R += i * H, P += i * J, A += i * W, N += i * G, x += i * Z, T += i * Y, U += i * Q, D += (i = t[15]) * M, w += i * j, E += i * k, _ += i * q, I += i * F, S += i * z, O += i * B, C += i * V, R += i * K, P += i * H, A += i * J, N += i * W, x += i * G, T += i * Z, U += i * Y, L += i * Q, n += 38 * w, o += 38 * E, a += 38 * _, c += 38 * I, u += 38 * S, l += 38 * O, h += 38 * C, d += 38 * R, p += 38 * P, f += 38 * A, g += 38 * N, y += 38 * x, m += 38 * T, b += 38 * U, v += 38 * L, s = Math.floor((i = n + (s = 1) + 65535) / 65536), n = i - 65536 * s, s = Math.floor((i = o + s + 65535) / 65536), o = i - 65536 * s, s = Math.floor((i = a + s + 65535) / 65536), a = i - 65536 * s, s = Math.floor((i = c + s + 65535) / 65536), c = i - 65536 * s, s = Math.floor((i = u + s + 65535) / 65536), u = i - 65536 * s, s = Math.floor((i = l + s + 65535) / 65536), l = i - 65536 * s, s = Math.floor((i = h + s + 65535) / 65536), h = i - 65536 * s, s = Math.floor((i = d + s + 65535) / 65536), d = i - 65536 * s, s = Math.floor((i = p + s + 65535) / 65536), p = i - 65536 * s, s = Math.floor((i = f + s + 65535) / 65536), f = i - 65536 * s, s = Math.floor((i = g + s + 65535) / 65536), g = i - 65536 * s, s = Math.floor((i = y + s + 65535) / 65536), y = i - 65536 * s, s = Math.floor((i = m + s + 65535) / 65536), m = i - 65536 * s, s = Math.floor((i = b + s + 65535) / 65536), b = i - 65536 * s, s = Math.floor((i = v + s + 65535) / 65536), v = i - 65536 * s, s = Math.floor((i = D + s + 65535) / 65536), D = i - 65536 * s, n += s - 1 + 37 * (s - 1), s = Math.floor((i = n + (s = 1) + 65535) / 65536), n = i - 65536 * s, s = Math.floor((i = o + s + 65535) / 65536), o = i - 65536 * s, s = Math.floor((i = a + s + 65535) / 65536), a = i - 65536 * s, s = Math.floor((i = c + s + 65535) / 65536), c = i - 65536 * s, s = Math.floor((i = u + s + 65535) / 65536), u = i - 65536 * s, s = Math.floor((i = l + s + 65535) / 65536), l = i - 65536 * s, s = Math.floor((i = h + s + 65535) / 65536), h = i - 65536 * s, s = Math.floor((i = d + s + 65535) / 65536), d = i - 65536 * s, s = Math.floor((i = p + s + 65535) / 65536), p = i - 65536 * s, s = Math.floor((i = f + s + 65535) / 65536), f = i - 65536 * s, s = Math.floor((i = g + s + 65535) / 65536), g = i - 65536 * s, s = Math.floor((i = y + s + 65535) / 65536), y = i - 65536 * s, s = Math.floor((i = m + s + 65535) / 65536), m = i - 65536 * s, s = Math.floor((i = b + s + 65535) / 65536), b = i - 65536 * s, s = Math.floor((i = v + s + 65535) / 65536), v = i - 65536 * s, s = Math.floor((i = D + s + 65535) / 65536), D = i - 65536 * s, n += s - 1 + 37 * (s - 1), e[0] = n, e[1] = o, e[2] = a, e[3] = c, e[4] = u, e[5] = l, e[6] = h, e[7] = d, e[8] = p, e[9] = f, e[10] = g, e[11] = y, e[12] = m, e[13] = b, e[14] = v, e[15] = D
            }

            function p(e, t) {
                let r = new Uint8Array(32),
                    i = new Float64Array(80),
                    s = n(),
                    o = n(),
                    p = n(),
                    f = n(),
                    g = n(),
                    y = n();
                for (let t = 0; t < 31; t++) r[t] = e[t];
                r[31] = 127 & e[31] | 64, r[0] &= 248,
                    function(e, t) {
                        for (let r = 0; r < 16; r++) e[r] = t[2 * r] + (t[2 * r + 1] << 8);
                        e[15] &= 32767
                    }(i, t);
                for (let e = 0; e < 16; e++) o[e] = i[e];
                s[0] = f[0] = 1;
                for (let e = 254; e >= 0; --e) {
                    let t = r[e >>> 3] >>> (7 & e) & 1;
                    u(s, o, t), u(p, f, t), l(g, s, p), h(s, s, p), l(p, o, f), h(o, o, f), d(f, g, g), d(y, s, s), d(s, p, s), d(p, o, g), l(g, s, p), h(s, s, p), d(o, s, s), h(p, f, y), d(s, p, a), l(s, s, f), d(p, p, s), d(s, f, y), d(f, o, i), d(o, g, g), u(s, o, t), u(p, f, t)
                }
                for (let e = 0; e < 16; e++) i[e + 16] = s[e], i[e + 32] = p[e], i[e + 48] = o[e], i[e + 64] = f[e];
                let m = i.subarray(32),
                    b = i.subarray(16);
                ! function(e, t) {
                    let r = n();
                    for (let e = 0; e < 16; e++) r[e] = t[e];
                    for (let e = 253; e >= 0; e--) d(r, r, r), 2 !== e && 4 !== e && d(r, r, t);
                    for (let t = 0; t < 16; t++) e[t] = r[t]
                }(m, m), d(b, b, m);
                let v = new Uint8Array(32);
                return ! function(e, t) {
                    let r = n(),
                        i = n();
                    for (let e = 0; e < 16; e++) i[e] = t[e];
                    c(i), c(i), c(i);
                    for (let e = 0; e < 2; e++) {
                        r[0] = i[0] - 65517;
                        for (let e = 1; e < 15; e++) r[e] = i[e] - 65535 - (r[e - 1] >> 16 & 1), r[e - 1] &= 65535;
                        r[15] = i[15] - 32767 - (r[14] >> 16 & 1);
                        let e = r[15] >> 16 & 1;
                        r[14] &= 65535, u(i, r, 1 - e)
                    }
                    for (let t = 0; t < 16; t++) e[2 * t] = 255 & i[t], e[2 * t + 1] = i[t] >> 8
                }(v, b), v
            }
            t.Au = function(e) {
                let r = (0, i.randomBytes)(32, e),
                    n = function(e) {
                        if (e.length !== t.KS) throw Error("x25519: seed must be ".concat(t.KS, " bytes"));
                        let r = new Uint8Array(e);
                        return {
                            publicKey: p(r, o),
                            secretKey: r
                        }
                    }(r);
                return (0, s.wipe)(r), n
            }, t.gi = function(e, r) {
                let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (e.length !== t.kz) throw Error("X25519: incorrect secret key length");
                if (r.length !== t.kz) throw Error("X25519: incorrect public key length");
                let s = p(e, r);
                if (i) {
                    let e = 0;
                    for (let t = 0; t < s.length; t++) e |= s[t];
                    if (0 === e) throw Error("X25519: invalid shared key")
                }
                return s
            }
        },
        34327: function(e, t, r) {
            "use strict";

            function i() {
                return (null === r.g || void 0 === r.g ? void 0 : r.g.crypto) || (null === r.g || void 0 === r.g ? void 0 : r.g.msCrypto) || {}
            }

            function s() {
                let e = i();
                return e.subtle || e.webkitSubtle
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isBrowserCryptoAvailable = t.getSubtleCrypto = t.getBrowerCrypto = void 0, t.getBrowerCrypto = i, t.getSubtleCrypto = s, t.isBrowserCryptoAvailable = function() {
                return !!i() && !!s()
            }
        },
        62120: function(e, t, r) {
            "use strict";
            var i = r(32215);

            function s() {
                return "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product
            }

            function n() {
                return void 0 !== i && void 0 !== i.versions && void 0 !== i.versions.node
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isBrowser = t.isNode = t.isReactNative = void 0, t.isReactNative = s, t.isNode = n, t.isBrowser = function() {
                return !s() && !n()
            }
        },
        34437: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(73660);
            i.__exportStar(r(34327), t), i.__exportStar(r(62120), t)
        },
        11455: function(e, t, r) {
            "use strict";
            r.d(t, {
                EthereumProvider: function() {
                    return _
                }
            });
            var i = r(70094),
                s = r(86006),
                n = r(77805);
            let o = "".concat("wc", "@2:").concat("ethereum_provider", ":"),
                a = ["eth_sendTransaction", "personal_sign"],
                c = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
                u = ["chainChanged", "accountsChanged"],
                l = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
            var h = Object.defineProperty,
                d = Object.defineProperties,
                p = Object.getOwnPropertyDescriptors,
                f = Object.getOwnPropertySymbols,
                g = Object.prototype.hasOwnProperty,
                y = Object.prototype.propertyIsEnumerable,
                m = (e, t, r) => t in e ? h(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                b = (e, t) => {
                    for (var r in t || (t = {})) g.call(t, r) && m(e, r, t[r]);
                    if (f)
                        for (var r of f(t)) y.call(t, r) && m(e, r, t[r]);
                    return e
                },
                v = (e, t) => d(e, p(t));

            function D(e) {
                return Number(e[0].split(":")[1])
            }

            function w(e) {
                return "0x".concat(e.toString(16))
            }
            class E {
                static async init(e) {
                    let t = new E;
                    return await t.initialize(e), t
                }
                async request(e, t) {
                    return await this.signer.request(e, this.formatChainId(this.chainId), t)
                }
                sendAsync(e, t, r) {
                    this.signer.sendAsync(e, t, this.formatChainId(this.chainId), r)
                }
                get connected() {
                    return !!this.signer.client && this.signer.client.core.relayer.connected
                }
                get connecting() {
                    return !!this.signer.client && this.signer.client.core.relayer.connecting
                }
                async enable() {
                    return this.session || await this.connect(), await this.request({
                        method: "eth_requestAccounts"
                    })
                }
                async connect(e) {
                    if (!this.signer.client) throw Error("Provider not initialized. Call init() first");
                    this.loadConnectOpts(e);
                    let {
                        required: t,
                        optional: r
                    } = function(e) {
                        let {
                            chains: t,
                            optionalChains: r,
                            methods: i,
                            optionalMethods: n,
                            events: o,
                            optionalEvents: h,
                            rpcMap: d
                        } = e;
                        if (!(0, s.qt)(t)) throw Error("Invalid chains");
                        let p = {
                                chains: t,
                                methods: i || a,
                                events: o || u,
                                rpcMap: b({}, t.length ? {
                                    [D(t)]: d[D(t)]
                                } : {})
                            },
                            f = null == o ? void 0 : o.filter(e => !u.includes(e)),
                            g = null == i ? void 0 : i.filter(e => !a.includes(e));
                        if (!r && !h && !n && !(null != f && f.length) && !(null != g && g.length)) return {
                            required: t.length ? p : void 0
                        };
                        let y = (null == f ? void 0 : f.length) && (null == g ? void 0 : g.length) || !r,
                            m = {
                                chains: [...new Set(y ? p.chains.concat(r || []) : r)],
                                methods: [...new Set(p.methods.concat(null != n && n.length ? n : c))],
                                events: [...new Set(p.events.concat(null != h && h.length ? h : l))],
                                rpcMap: d
                            };
                        return {
                            required: t.length ? p : void 0,
                            optional: r.length ? m : void 0
                        }
                    }(this.rpc);
                    try {
                        let i = await new Promise(async (i, s) => {
                            var n;
                            this.rpc.showQrModal && (null == (n = this.modal) || n.subscribeModal(e => {
                                e.open || this.signer.session || (this.signer.abortPairingAttempt(), s(Error("Connection request reset. Please try again.")))
                            })), await this.signer.connect(v(b({
                                namespaces: b({}, t && {
                                    [this.namespace]: t
                                })
                            }, r && {
                                optionalNamespaces: {
                                    [this.namespace]: r
                                }
                            }), {
                                pairingTopic: null == e ? void 0 : e.pairingTopic
                            })).then(e => {
                                i(e)
                            }).catch(e => {
                                s(Error(e.message))
                            })
                        });
                        if (!i) return;
                        let n = (0, s.gu)(i.namespaces, [this.namespace]);
                        this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n), this.setAccounts(n), this.events.emit("connect", {
                            chainId: w(this.chainId)
                        })
                    } catch (e) {
                        throw this.signer.logger.error(e), e
                    } finally {
                        this.modal && this.modal.closeModal()
                    }
                }
                async disconnect() {
                    this.session && await this.signer.disconnect(), this.reset()
                }
                get isWalletConnect() {
                    return !0
                }
                get session() {
                    return this.signer.session
                }
                registerEventListeners() {
                    this.signer.on("session_event", e => {
                        let {
                            params: t
                        } = e, {
                            event: r
                        } = t;
                        "accountsChanged" === r.name ? (this.accounts = this.parseAccounts(r.data), this.events.emit("accountsChanged", this.accounts)) : "chainChanged" === r.name ? this.setChainId(this.formatChainId(r.data)) : this.events.emit(r.name, r.data), this.events.emit("session_event", e)
                    }), this.signer.on("chainChanged", e => {
                        let t = parseInt(e);
                        this.chainId = t, this.events.emit("chainChanged", w(this.chainId)), this.persist()
                    }), this.signer.on("session_update", e => {
                        this.events.emit("session_update", e)
                    }), this.signer.on("session_delete", e => {
                        this.reset(), this.events.emit("session_delete", e), this.events.emit("disconnect", v(b({}, (0, s.D6)("USER_DISCONNECTED")), {
                            data: e.topic,
                            name: "USER_DISCONNECTED"
                        }))
                    }), this.signer.on("display_uri", e => {
                        var t, r;
                        this.rpc.showQrModal && (null == (t = this.modal) || t.closeModal(), null == (r = this.modal) || r.openModal({
                            uri: e
                        })), this.events.emit("display_uri", e)
                    })
                }
                switchEthereumChain(e) {
                    this.request({
                        method: "wallet_switchEthereumChain",
                        params: [{
                            chainId: e.toString(16)
                        }]
                    })
                }
                isCompatibleChainId(e) {
                    return "string" == typeof e && e.startsWith("".concat(this.namespace, ":"))
                }
                formatChainId(e) {
                    return "".concat(this.namespace, ":").concat(e)
                }
                parseChainId(e) {
                    return Number(e.split(":")[1])
                }
                setChainIds(e) {
                    let t = e.filter(e => this.isCompatibleChainId(e)).map(e => this.parseChainId(e));
                    t.length && (this.chainId = t[0], this.events.emit("chainChanged", w(this.chainId)), this.persist())
                }
                setChainId(e) {
                    if (this.isCompatibleChainId(e)) {
                        let t = this.parseChainId(e);
                        this.chainId = t, this.switchEthereumChain(t)
                    }
                }
                parseAccountId(e) {
                    let [t, r, i] = e.split(":");
                    return {
                        chainId: "".concat(t, ":").concat(r),
                        address: i
                    }
                }
                setAccounts(e) {
                    this.accounts = e.filter(e => this.parseChainId(this.parseAccountId(e).chainId) === this.chainId).map(e => this.parseAccountId(e).address), this.events.emit("accountsChanged", this.accounts)
                }
                getRpcConfig(e) {
                    var t, r;
                    let i = null != (t = null == e ? void 0 : e.chains) ? t : [],
                        s = null != (r = null == e ? void 0 : e.optionalChains) ? r : [],
                        n = i.concat(s);
                    if (!n.length) throw Error("No chains specified in either `chains` or `optionalChains`");
                    let o = i.length ? (null == e ? void 0 : e.methods) || a : [],
                        c = i.length ? (null == e ? void 0 : e.events) || u : [],
                        l = (null == e ? void 0 : e.optionalMethods) || [],
                        h = (null == e ? void 0 : e.optionalEvents) || [],
                        d = (null == e ? void 0 : e.rpcMap) || this.buildRpcMap(n, e.projectId),
                        p = (null == e ? void 0 : e.qrModalOptions) || void 0;
                    return {
                        chains: null == i ? void 0 : i.map(e => this.formatChainId(e)),
                        optionalChains: s.map(e => this.formatChainId(e)),
                        methods: o,
                        events: c,
                        optionalMethods: l,
                        optionalEvents: h,
                        rpcMap: d,
                        showQrModal: !!(null != e && e.showQrModal),
                        qrModalOptions: p,
                        projectId: e.projectId,
                        metadata: e.metadata
                    }
                }
                buildRpcMap(e, t) {
                    let r = {};
                    return e.forEach(e => {
                        r[e] = this.getRpcUrl(e, t)
                    }), r
                }
                async initialize(e) {
                    if (this.rpc = this.getRpcConfig(e), this.chainId = this.rpc.chains.length ? D(this.rpc.chains) : D(this.rpc.optionalChains), this.signer = await n.k.init({
                            projectId: this.rpc.projectId,
                            metadata: this.rpc.metadata,
                            disableProviderPing: e.disableProviderPing,
                            relayUrl: e.relayUrl,
                            storageOptions: e.storageOptions
                        }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
                        let e;
                        try {
                            let {
                                WalletConnectModal: t
                            } = await r.e(174).then(r.bind(r, 11174));
                            e = t
                        } catch (e) {
                            throw Error("To use QR modal, please install @walletconnect/modal package")
                        }
                        if (e) try {
                            this.modal = new e(b({
                                projectId: this.rpc.projectId
                            }, this.rpc.qrModalOptions))
                        } catch (e) {
                            throw this.signer.logger.error(e), Error("Could not generate WalletConnectModal Instance")
                        }
                    }
                }
                loadConnectOpts(e) {
                    if (!e) return;
                    let {
                        chains: t,
                        optionalChains: r,
                        rpcMap: i
                    } = e;
                    t && (0, s.qt)(t) && (this.rpc.chains = t.map(e => this.formatChainId(e)), t.forEach(e => {
                        this.rpc.rpcMap[e] = (null == i ? void 0 : i[e]) || this.getRpcUrl(e)
                    })), r && (0, s.qt)(r) && (this.rpc.optionalChains = [], this.rpc.optionalChains = null == r ? void 0 : r.map(e => this.formatChainId(e)), r.forEach(e => {
                        this.rpc.rpcMap[e] = (null == i ? void 0 : i[e]) || this.getRpcUrl(e)
                    }))
                }
                getRpcUrl(e, t) {
                    var r;
                    return (null == (r = this.rpc.rpcMap) ? void 0 : r[e]) || "".concat("https://rpc.walletconnect.com/v1/", "?chainId=eip155:").concat(e, "&projectId=").concat(t || this.rpc.projectId)
                }
                async loadPersistedSession() {
                    if (!this.session) return;
                    let e = await this.signer.client.core.storage.getItem("".concat(this.STORAGE_KEY, "/chainId")),
                        t = this.session.namespaces["".concat(this.namespace, ":").concat(e)] ? this.session.namespaces["".concat(this.namespace, ":").concat(e)] : this.session.namespaces[this.namespace];
                    this.setChainIds(e ? [this.formatChainId(e)] : null == t ? void 0 : t.accounts), this.setAccounts(null == t ? void 0 : t.accounts)
                }
                reset() {
                    this.chainId = 1, this.accounts = []
                }
                persist() {
                    this.session && this.signer.client.core.storage.setItem("".concat(this.STORAGE_KEY, "/chainId"), this.chainId)
                }
                parseAccounts(e) {
                    return "string" == typeof e || e instanceof String ? [this.parseAccount(e)] : e.map(e => this.parseAccount(e))
                }
                constructor() {
                    this.events = new i.EventEmitter, this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = o, this.on = (e, t) => (this.events.on(e, t), this), this.once = (e, t) => (this.events.once(e, t), this), this.removeListener = (e, t) => (this.events.removeListener(e, t), this), this.off = (e, t) => (this.events.off(e, t), this), this.parseAccount = e => this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e, this.signer = {}, this.rpc = {}
                }
            }
            let _ = E
        },
        58017: function(e, t, r) {
            "use strict";
            r.d(t, {
                q: function() {
                    return i
                }
            });
            class i {}
        },
        84844: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                IEvents: function() {
                    return i.q
                }
            });
            var i = r(58017)
        },
        61087: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HEARTBEAT_EVENTS = t.HEARTBEAT_INTERVAL = void 0;
            let i = r(95781);
            t.HEARTBEAT_INTERVAL = i.FIVE_SECONDS, t.HEARTBEAT_EVENTS = {
                pulse: "heartbeat_pulse"
            }
        },
        28859: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), r(73660).__exportStar(r(61087), t)
        },
        11046: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HeartBeat = void 0;
            let i = r(73660),
                s = r(70094),
                n = r(95781),
                o = r(72802),
                a = r(28859);
            class c extends o.IHeartBeat {
                static init(e) {
                    return i.__awaiter(this, void 0, void 0, function*() {
                        let t = new c(e);
                        return yield t.init(), t
                    })
                }
                init() {
                    return i.__awaiter(this, void 0, void 0, function*() {
                        yield this.initialize()
                    })
                }
                stop() {
                    clearInterval(this.intervalRef)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                initialize() {
                    return i.__awaiter(this, void 0, void 0, function*() {
                        this.intervalRef = setInterval(() => this.pulse(), n.toMiliseconds(this.interval))
                    })
                }
                pulse() {
                    this.events.emit(a.HEARTBEAT_EVENTS.pulse)
                }
                constructor(e) {
                    super(e), this.events = new s.EventEmitter, this.interval = a.HEARTBEAT_INTERVAL, this.interval = (null == e ? void 0 : e.interval) || a.HEARTBEAT_INTERVAL
                }
            }
            t.HeartBeat = c
        },
        17357: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(73660);
            i.__exportStar(r(11046), t), i.__exportStar(r(72802), t), i.__exportStar(r(28859), t)
        },
        20871: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IHeartBeat = void 0;
            let i = r(84844);
            class s extends i.IEvents {
                constructor(e) {
                    super()
                }
            }
            t.IHeartBeat = s
        },
        72802: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), r(73660).__exportStar(r(20871), t)
        },
        48348: function(e, t, r) {
            "use strict";
            r.d(t, {
                k: function() {
                    return u
                },
                Z: function() {
                    return l
                }
            });
            var i = r(70094),
                s = r(73760),
                n = r.n(s),
                o = r(94495),
                a = r(67901);
            let c = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST"
            };
            class u {
                get connected() {
                    return this.isAvailable
                }
                get connecting() {
                    return this.registering
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async open() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url;
                    await this.register(e)
                }
                async close() {
                    if (!this.isAvailable) throw Error("Connection already closed");
                    this.onClose()
                }
                async send(e, t) {
                    this.isAvailable || await this.register();
                    try {
                        let t = (0, o.u)(e),
                            r = await n()(this.url, Object.assign(Object.assign({}, c), {
                                body: t
                            })),
                            i = await r.json();
                        this.onPayload({
                            data: i
                        })
                    } catch (t) {
                        this.onError(e.id, t)
                    }
                }
                async register() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url;
                    if (!(0, a.isHttpUrl)(e)) throw Error("Provided URL is not compatible with HTTP connection: ".concat(e));
                    if (this.registering) {
                        let e = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise((e, t) => {
                            this.events.once("register_error", e => {
                                this.resetMaxListeners(), t(e)
                            }), this.events.once("open", () => {
                                if (this.resetMaxListeners(), void 0 === this.isAvailable) return t(Error("HTTP connection is missing or invalid"));
                                e()
                            })
                        })
                    }
                    this.url = e, this.registering = !0;
                    try {
                        if (!this.disableProviderPing) {
                            let t = (0, o.u)({
                                id: 1,
                                jsonrpc: "2.0",
                                method: "test",
                                params: []
                            });
                            await n()(e, Object.assign(Object.assign({}, c), {
                                body: t
                            }))
                        }
                        this.onOpen()
                    } catch (t) {
                        let e = this.parseError(t);
                        throw this.events.emit("register_error", e), this.onClose(), e
                    }
                }
                onOpen() {
                    this.isAvailable = !0, this.registering = !1, this.events.emit("open")
                }
                onClose() {
                    this.isAvailable = !1, this.registering = !1, this.events.emit("close")
                }
                onPayload(e) {
                    if (void 0 === e.data) return;
                    let t = "string" == typeof e.data ? (0, o.D)(e.data) : e.data;
                    this.events.emit("payload", t)
                }
                onError(e, t) {
                    let r = this.parseError(t),
                        i = r.message || r.toString(),
                        s = (0, a.formatJsonRpcError)(e, i);
                    this.events.emit("payload", s)
                }
                parseError(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.url;
                    return (0, a.parseConnectionError)(e, t, "HTTP")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
                constructor(e, t = !1) {
                    if (this.url = e, this.disableProviderPing = t, this.events = new i.EventEmitter, this.isAvailable = !1, this.registering = !1, !(0, a.isHttpUrl)(e)) throw Error("Provided URL is not compatible with HTTP connection: ".concat(e));
                    this.url = e, this.disableProviderPing = t
                }
            }
            var l = u
        },
        73760: function(e, t) {
            "use strict";
            var r = "undefined" != typeof self ? self : void 0,
                i = function() {
                    function e() {
                        this.fetch = !1, this.DOMException = r.DOMException
                    }
                    return e.prototype = r, new e
                }();
            (function(e) {
                var t = {
                    searchParams: "URLSearchParams" in i,
                    iterable: "Symbol" in i && "iterator" in Symbol,
                    blob: "FileReader" in i && "Blob" in i && function() {
                        try {
                            return new Blob, !0
                        } catch (e) {
                            return !1
                        }
                    }(),
                    formData: "FormData" in i,
                    arrayBuffer: "ArrayBuffer" in i
                };
                if (t.arrayBuffer) var r = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    s = ArrayBuffer.isView || function(e) {
                        return e && r.indexOf(Object.prototype.toString.call(e)) > -1
                    };

                function n(e) {
                    if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw TypeError("Invalid character in header field name");
                    return e.toLowerCase()
                }

                function o(e) {
                    return "string" != typeof e && (e = String(e)), e
                }

                function a(e) {
                    var r = {
                        next: function() {
                            var t = e.shift();
                            return {
                                done: void 0 === t,
                                value: t
                            }
                        }
                    };
                    return t.iterable && (r[Symbol.iterator] = function() {
                        return r
                    }), r
                }

                function c(e) {
                    this.map = {}, e instanceof c ? e.forEach(function(e, t) {
                        this.append(t, e)
                    }, this) : Array.isArray(e) ? e.forEach(function(e) {
                        this.append(e[0], e[1])
                    }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
                        this.append(t, e[t])
                    }, this)
                }

                function u(e) {
                    if (e.bodyUsed) return Promise.reject(TypeError("Already read"));
                    e.bodyUsed = !0
                }

                function l(e) {
                    return new Promise(function(t, r) {
                        e.onload = function() {
                            t(e.result)
                        }, e.onerror = function() {
                            r(e.error)
                        }
                    })
                }

                function h(e) {
                    var t = new FileReader,
                        r = l(t);
                    return t.readAsArrayBuffer(e), r
                }

                function d(e) {
                    if (e.slice) return e.slice(0);
                    var t = new Uint8Array(e.byteLength);
                    return t.set(new Uint8Array(e)), t.buffer
                }

                function p() {
                    return this.bodyUsed = !1, this._initBody = function(e) {
                        if (this._bodyInit = e, e) {
                            if ("string" == typeof e) this._bodyText = e;
                            else if (t.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                            else if (t.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                            else if (t.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                            else {
                                var r;
                                t.arrayBuffer && t.blob && (r = e) && DataView.prototype.isPrototypeOf(r) ? (this._bodyArrayBuffer = d(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : t.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || s(e)) ? this._bodyArrayBuffer = d(e) : this._bodyText = e = Object.prototype.toString.call(e)
                            }
                        } else this._bodyText = "";
                        !this.headers.get("content-type") && ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : t.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, t.blob && (this.blob = function() {
                        var e = u(this);
                        if (e) return e;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (!this._bodyFormData) return Promise.resolve(new Blob([this._bodyText]));
                        throw Error("could not read FormData body as blob")
                    }, this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? u(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(h)
                    }), this.text = function() {
                        var e, t, r, i = u(this);
                        if (i) return i;
                        if (this._bodyBlob) return e = this._bodyBlob, r = l(t = new FileReader), t.readAsText(e), r;
                        if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                            for (var t = new Uint8Array(e), r = Array(t.length), i = 0; i < t.length; i++) r[i] = String.fromCharCode(t[i]);
                            return r.join("")
                        }(this._bodyArrayBuffer));
                        if (!this._bodyFormData) return Promise.resolve(this._bodyText);
                        throw Error("could not read FormData body as text")
                    }, t.formData && (this.formData = function() {
                        return this.text().then(y)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                c.prototype.append = function(e, t) {
                    e = n(e), t = o(t);
                    var r = this.map[e];
                    this.map[e] = r ? r + ", " + t : t
                }, c.prototype.delete = function(e) {
                    delete this.map[n(e)]
                }, c.prototype.get = function(e) {
                    return e = n(e), this.has(e) ? this.map[e] : null
                }, c.prototype.has = function(e) {
                    return this.map.hasOwnProperty(n(e))
                }, c.prototype.set = function(e, t) {
                    this.map[n(e)] = o(t)
                }, c.prototype.forEach = function(e, t) {
                    for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this)
                }, c.prototype.keys = function() {
                    var e = [];
                    return this.forEach(function(t, r) {
                        e.push(r)
                    }), a(e)
                }, c.prototype.values = function() {
                    var e = [];
                    return this.forEach(function(t) {
                        e.push(t)
                    }), a(e)
                }, c.prototype.entries = function() {
                    var e = [];
                    return this.forEach(function(t, r) {
                        e.push([r, t])
                    }), a(e)
                }, t.iterable && (c.prototype[Symbol.iterator] = c.prototype.entries);
                var f = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function g(e, t) {
                    var r, i, s = (t = t || {}).body;
                    if (e instanceof g) {
                        if (e.bodyUsed) throw TypeError("Already read");
                        this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new c(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, s || null == e._bodyInit || (s = e._bodyInit, e.bodyUsed = !0)
                    } else this.url = String(e);
                    if (this.credentials = t.credentials || this.credentials || "same-origin", (t.headers || !this.headers) && (this.headers = new c(t.headers)), this.method = (i = (r = t.method || this.method || "GET").toUpperCase(), f.indexOf(i) > -1 ? i : r), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && s) throw TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(s)
                }

                function y(e) {
                    var t = new FormData;
                    return e.trim().split("&").forEach(function(e) {
                        if (e) {
                            var r = e.split("="),
                                i = r.shift().replace(/\+/g, " "),
                                s = r.join("=").replace(/\+/g, " ");
                            t.append(decodeURIComponent(i), decodeURIComponent(s))
                        }
                    }), t
                }

                function m(e, t) {
                    t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new c(t.headers), this.url = t.url || "", this._initBody(e)
                }
                g.prototype.clone = function() {
                    return new g(this, {
                        body: this._bodyInit
                    })
                }, p.call(g.prototype), p.call(m.prototype), m.prototype.clone = function() {
                    return new m(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new c(this.headers),
                        url: this.url
                    })
                }, m.error = function() {
                    var e = new m(null, {
                        status: 0,
                        statusText: ""
                    });
                    return e.type = "error", e
                };
                var b = [301, 302, 303, 307, 308];
                m.redirect = function(e, t) {
                    if (-1 === b.indexOf(t)) throw RangeError("Invalid status code");
                    return new m(null, {
                        status: t,
                        headers: {
                            location: e
                        }
                    })
                }, e.DOMException = i.DOMException;
                try {
                    new e.DOMException
                } catch (t) {
                    e.DOMException = function(e, t) {
                        this.message = e, this.name = t;
                        var r = Error(e);
                        this.stack = r.stack
                    }, e.DOMException.prototype = Object.create(Error.prototype), e.DOMException.prototype.constructor = e.DOMException
                }

                function v(r, i) {
                    return new Promise(function(s, n) {
                        var o = new g(r, i);
                        if (o.signal && o.signal.aborted) return n(new e.DOMException("Aborted", "AbortError"));
                        var a = new XMLHttpRequest;

                        function u() {
                            a.abort()
                        }
                        a.onload = function() {
                            var e, t, r = {
                                status: a.status,
                                statusText: a.statusText,
                                headers: (e = a.getAllResponseHeaders() || "", t = new c, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(e) {
                                    var r = e.split(":"),
                                        i = r.shift().trim();
                                    if (i) {
                                        var s = r.join(":").trim();
                                        t.append(i, s)
                                    }
                                }), t)
                            };
                            r.url = "responseURL" in a ? a.responseURL : r.headers.get("X-Request-URL"), s(new m("response" in a ? a.response : a.responseText, r))
                        }, a.onerror = function() {
                            n(TypeError("Network request failed"))
                        }, a.ontimeout = function() {
                            n(TypeError("Network request failed"))
                        }, a.onabort = function() {
                            n(new e.DOMException("Aborted", "AbortError"))
                        }, a.open(o.method, o.url, !0), "include" === o.credentials ? a.withCredentials = !0 : "omit" === o.credentials && (a.withCredentials = !1), "responseType" in a && t.blob && (a.responseType = "blob"), o.headers.forEach(function(e, t) {
                            a.setRequestHeader(t, e)
                        }), o.signal && (o.signal.addEventListener("abort", u), a.onreadystatechange = function() {
                            4 === a.readyState && o.signal.removeEventListener("abort", u)
                        }), a.send(void 0 === o._bodyInit ? null : o._bodyInit)
                    })
                }
                v.polyfill = !0, i.fetch || (i.fetch = v, i.Headers = c, i.Request = g, i.Response = m), e.Headers = c, e.Request = g, e.Response = m, e.fetch = v, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            })({}), i.fetch.ponyfill = !0, delete i.fetch.polyfill, (t = i.fetch).default = i.fetch, t.fetch = i.fetch, t.Headers = i.Headers, t.Request = i.Request, t.Response = i.Response, e.exports = t
        },
        75779: function(e, t, r) {
            "use strict";
            r.d(t, {
                r: function() {
                    return n
                }
            });
            var i = r(70094),
                s = r(67901);
            class n extends s.IJsonRpcProvider {
                async connect() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.connection;
                    await this.open(e)
                }
                async disconnect() {
                    await this.close()
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async request(e, t) {
                    return this.requestStrict((0, s.formatJsonRpcRequest)(e.method, e.params || [], e.id || (0, s.getBigIntRpcId)().toString()), t)
                }
                async requestStrict(e, t) {
                    return new Promise(async (r, i) => {
                        if (!this.connection.connected) try {
                            await this.open()
                        } catch (e) {
                            i(e)
                        }
                        this.events.on("".concat(e.id), e => {
                            (0, s.isJsonRpcError)(e) ? i(e.error): r(e.result)
                        });
                        try {
                            await this.connection.send(e, t)
                        } catch (e) {
                            i(e)
                        }
                    })
                }
                setConnection() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.connection;
                    return e
                }
                onPayload(e) {
                    this.events.emit("payload", e), (0, s.isJsonRpcResponse)(e) ? this.events.emit("".concat(e.id), e) : this.events.emit("message", {
                        type: e.method,
                        data: e.params
                    })
                }
                onClose(e) {
                    e && 3e3 === e.code && this.events.emit("error", Error("WebSocket connection closed abnormally with code: ".concat(e.code, " ").concat(e.reason ? "(".concat(e.reason, ")") : ""))), this.events.emit("disconnect")
                }
                async open() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.connection;
                    this.connection === e && this.connection.connected || (this.connection.connected && this.close(), "string" == typeof e && (await this.connection.open(e), e = this.connection), this.connection = this.setConnection(e), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"))
                }
                async close() {
                    await this.connection.close()
                }
                registerEventListeners() {
                    this.hasRegisteredEventListeners || (this.connection.on("payload", e => this.onPayload(e)), this.connection.on("close", e => this.onClose(e)), this.connection.on("error", e => this.events.emit("error", e)), this.connection.on("register_error", e => this.onClose()), this.hasRegisteredEventListeners = !0)
                }
                constructor(e) {
                    super(e), this.events = new i.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners()
                }
            }
        },
        28747: function(e, t, r) {
            "use strict";
            r.d(t, {
                CA: function() {
                    return s
                },
                JV: function() {
                    return a
                },
                O4: function() {
                    return i
                },
                dQ: function() {
                    return n
                },
                xK: function() {
                    return o
                }
            });
            let i = "INTERNAL_ERROR",
                s = "SERVER_ERROR",
                n = [-32700, -32600, -32601, -32602, -32603],
                o = {
                    PARSE_ERROR: {
                        code: -32700,
                        message: "Parse error"
                    },
                    INVALID_REQUEST: {
                        code: -32600,
                        message: "Invalid Request"
                    },
                    METHOD_NOT_FOUND: {
                        code: -32601,
                        message: "Method not found"
                    },
                    INVALID_PARAMS: {
                        code: -32602,
                        message: "Invalid params"
                    },
                    [i]: {
                        code: -32603,
                        message: "Internal error"
                    },
                    [s]: {
                        code: -32e3,
                        message: "Server error"
                    }
                },
                a = s
        },
        40045: function(e, t, r) {
            "use strict";
            var i = r(34437);
            r.o(i, "IJsonRpcProvider") && r.d(t, {
                IJsonRpcProvider: function() {
                    return i.IJsonRpcProvider
                }
            }), r.o(i, "formatJsonRpcError") && r.d(t, {
                formatJsonRpcError: function() {
                    return i.formatJsonRpcError
                }
            }), r.o(i, "formatJsonRpcRequest") && r.d(t, {
                formatJsonRpcRequest: function() {
                    return i.formatJsonRpcRequest
                }
            }), r.o(i, "formatJsonRpcResult") && r.d(t, {
                formatJsonRpcResult: function() {
                    return i.formatJsonRpcResult
                }
            }), r.o(i, "getBigIntRpcId") && r.d(t, {
                getBigIntRpcId: function() {
                    return i.getBigIntRpcId
                }
            }), r.o(i, "isHttpUrl") && r.d(t, {
                isHttpUrl: function() {
                    return i.isHttpUrl
                }
            }), r.o(i, "isJsonRpcError") && r.d(t, {
                isJsonRpcError: function() {
                    return i.isJsonRpcError
                }
            }), r.o(i, "isJsonRpcRequest") && r.d(t, {
                isJsonRpcRequest: function() {
                    return i.isJsonRpcRequest
                }
            }), r.o(i, "isJsonRpcResponse") && r.d(t, {
                isJsonRpcResponse: function() {
                    return i.isJsonRpcResponse
                }
            }), r.o(i, "isJsonRpcResult") && r.d(t, {
                isJsonRpcResult: function() {
                    return i.isJsonRpcResult
                }
            }), r.o(i, "isLocalhostUrl") && r.d(t, {
                isLocalhostUrl: function() {
                    return i.isLocalhostUrl
                }
            }), r.o(i, "isReactNative") && r.d(t, {
                isReactNative: function() {
                    return i.isReactNative
                }
            }), r.o(i, "isWsUrl") && r.d(t, {
                isWsUrl: function() {
                    return i.isWsUrl
                }
            }), r.o(i, "payloadId") && r.d(t, {
                payloadId: function() {
                    return i.payloadId
                }
            })
        },
        73843: function(e, t, r) {
            "use strict";
            r.d(t, {
                CX: function() {
                    return a
                },
                L2: function() {
                    return o
                },
                by: function() {
                    return n
                },
                i5: function() {
                    return s
                }
            });
            var i = r(28747);

            function s(e) {
                return i.dQ.includes(e)
            }

            function n(e) {
                return Object.keys(i.xK).includes(e) ? i.xK[e] : i.xK[i.JV]
            }

            function o(e) {
                return Object.values(i.xK).find(t => t.code === e) || i.xK[i.JV]
            }

            function a(e, t, r) {
                return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? Error("Unavailable ".concat(r, " RPC url at ").concat(t)) : e
            }
        },
        41639: function(e, t, r) {
            "use strict";
            r.d(t, {
                CS: function() {
                    return o
                },
                RI: function() {
                    return u
                },
                o0: function() {
                    return n
                },
                sT: function() {
                    return a
                },
                tm: function() {
                    return c
                }
            });
            var i = r(73843),
                s = r(28747);

            function n() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
                return Date.now() * Math.pow(10, e) + Math.floor(Math.random() * Math.pow(10, e))
            }

            function o() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6;
                return BigInt(n(e))
            }

            function a(e, t, r) {
                return {
                    id: r || n(),
                    jsonrpc: "2.0",
                    method: e,
                    params: t
                }
            }

            function c(e, t) {
                return {
                    id: e,
                    jsonrpc: "2.0",
                    result: t
                }
            }

            function u(e, t, r) {
                var n;
                return {
                    id: e,
                    jsonrpc: "2.0",
                    error: void 0 === (n = t) ? (0, i.by)(s.O4) : ("string" == typeof n && (n = Object.assign(Object.assign({}, (0, i.by)(s.CA)), {
                        message: n
                    })), void 0 !== r && (n.data = r), (0, i.i5)(n.code) && (n = (0, i.L2)(n.code)), n)
                }
            }
        },
        67901: function(e, t, r) {
            "use strict";
            r.d(t, {
                IJsonRpcProvider: function() {
                    return o.x0
                },
                formatJsonRpcError: function() {
                    return n.RI
                },
                formatJsonRpcRequest: function() {
                    return n.sT
                },
                formatJsonRpcResult: function() {
                    return n.tm
                },
                getBigIntRpcId: function() {
                    return n.CS
                },
                isHttpUrl: function() {
                    return a.jK
                },
                isJsonRpcError: function() {
                    return c.jg
                },
                isJsonRpcRequest: function() {
                    return c.DW
                },
                isJsonRpcResponse: function() {
                    return c.u
                },
                isJsonRpcResult: function() {
                    return c.k4
                },
                isLocalhostUrl: function() {
                    return a.JF
                },
                isWsUrl: function() {
                    return a.UZ
                },
                parseConnectionError: function() {
                    return i.CX
                },
                payloadId: function() {
                    return n.o0
                }
            }), r(28747);
            var i = r(73843),
                s = r(40045);
            r.o(s, "IJsonRpcProvider") && r.d(t, {
                IJsonRpcProvider: function() {
                    return s.IJsonRpcProvider
                }
            }), r.o(s, "formatJsonRpcError") && r.d(t, {
                formatJsonRpcError: function() {
                    return s.formatJsonRpcError
                }
            }), r.o(s, "formatJsonRpcRequest") && r.d(t, {
                formatJsonRpcRequest: function() {
                    return s.formatJsonRpcRequest
                }
            }), r.o(s, "formatJsonRpcResult") && r.d(t, {
                formatJsonRpcResult: function() {
                    return s.formatJsonRpcResult
                }
            }), r.o(s, "getBigIntRpcId") && r.d(t, {
                getBigIntRpcId: function() {
                    return s.getBigIntRpcId
                }
            }), r.o(s, "isHttpUrl") && r.d(t, {
                isHttpUrl: function() {
                    return s.isHttpUrl
                }
            }), r.o(s, "isJsonRpcError") && r.d(t, {
                isJsonRpcError: function() {
                    return s.isJsonRpcError
                }
            }), r.o(s, "isJsonRpcRequest") && r.d(t, {
                isJsonRpcRequest: function() {
                    return s.isJsonRpcRequest
                }
            }), r.o(s, "isJsonRpcResponse") && r.d(t, {
                isJsonRpcResponse: function() {
                    return s.isJsonRpcResponse
                }
            }), r.o(s, "isJsonRpcResult") && r.d(t, {
                isJsonRpcResult: function() {
                    return s.isJsonRpcResult
                }
            }), r.o(s, "isLocalhostUrl") && r.d(t, {
                isLocalhostUrl: function() {
                    return s.isLocalhostUrl
                }
            }), r.o(s, "isReactNative") && r.d(t, {
                isReactNative: function() {
                    return s.isReactNative
                }
            }), r.o(s, "isWsUrl") && r.d(t, {
                isWsUrl: function() {
                    return s.isWsUrl
                }
            }), r.o(s, "payloadId") && r.d(t, {
                payloadId: function() {
                    return s.payloadId
                }
            });
            var n = r(41639),
                o = r(64030),
                a = r(79131),
                c = r(91987)
        },
        64030: function(e, t, r) {
            "use strict";
            r.d(t, {
                x0: function() {
                    return n
                }
            });
            class i {}
            class s extends i {
                constructor() {
                    super()
                }
            }
            class n extends s {
                constructor(e) {
                    super()
                }
            }
        },
        79131: function(e, t, r) {
            "use strict";

            function i(e, t) {
                let r = function(e) {
                    let t = e.match(RegExp(/^\w+:/, "gi"));
                    if (t && t.length) return t[0]
                }(e);
                return void 0 !== r && new RegExp(t).test(r)
            }

            function s(e) {
                return i(e, "^https?:")
            }

            function n(e) {
                return i(e, "^wss?:")
            }

            function o(e) {
                return RegExp("wss?://localhost(:d{2,5})?").test(e)
            }
            r.d(t, {
                JF: function() {
                    return o
                },
                UZ: function() {
                    return n
                },
                jK: function() {
                    return s
                }
            })
        },
        91987: function(e, t, r) {
            "use strict";

            function i(e) {
                return "object" == typeof e && "id" in e && "jsonrpc" in e && "2.0" === e.jsonrpc
            }

            function s(e) {
                return i(e) && "method" in e
            }

            function n(e) {
                return i(e) && (o(e) || a(e))
            }

            function o(e) {
                return "result" in e
            }

            function a(e) {
                return "error" in e
            }
            r.d(t, {
                DW: function() {
                    return s
                },
                jg: function() {
                    return a
                },
                k4: function() {
                    return o
                },
                u: function() {
                    return n
                }
            })
        },
        5727: function(e) {
            "use strict";
            e.exports = function() {
                throw Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
            }
        },
        44270: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PINO_CUSTOM_CONTEXT_KEY = t.PINO_LOGGER_DEFAULTS = void 0, t.PINO_LOGGER_DEFAULTS = {
                level: "info"
            }, t.PINO_CUSTOM_CONTEXT_KEY = "custom_context"
        },
        13751: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.pino = void 0;
            let i = r(73660),
                s = i.__importDefault(r(92437));
            Object.defineProperty(t, "pino", {
                enumerable: !0,
                get: function() {
                    return s.default
                }
            }), i.__exportStar(r(44270), t), i.__exportStar(r(9306), t)
        },
        9306: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.generateChildLogger = t.formatChildLoggerContext = t.getLoggerContext = t.setBrowserLoggerContext = t.getBrowserLoggerContext = t.getDefaultLoggerOptions = void 0;
            let i = r(44270);

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.PINO_CUSTOM_CONTEXT_KEY;
                return e[t] || ""
            }

            function n(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.PINO_CUSTOM_CONTEXT_KEY;
                return e[r] = t, e
            }

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.PINO_CUSTOM_CONTEXT_KEY;
                return void 0 === e.bindings ? s(e, t) : e.bindings().context || ""
            }

            function a(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.PINO_CUSTOM_CONTEXT_KEY,
                    s = o(e, r);
                return s.trim() ? "".concat(s, "/").concat(t) : t
            }
            t.getDefaultLoggerOptions = function(e) {
                return Object.assign(Object.assign({}, e), {
                    level: (null == e ? void 0 : e.level) || i.PINO_LOGGER_DEFAULTS.level
                })
            }, t.getBrowserLoggerContext = s, t.setBrowserLoggerContext = n, t.getLoggerContext = o, t.formatChildLoggerContext = a, t.generateChildLogger = function(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.PINO_CUSTOM_CONTEXT_KEY,
                    s = a(e, t, r);
                return n(e.child({
                    context: s
                }), s, r)
            }
        },
        59606: function() {},
        57398: function() {},
        94495: function(e, t, r) {
            "use strict";
            r.d(t, {
                D: function() {
                    return n
                },
                u: function() {
                    return o
                }
            });
            let i = e => JSON.stringify(e, (e, t) => "bigint" == typeof t ? t.toString() + "n" : t),
                s = e => JSON.parse(e.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, '$1"$2n"$3'), (e, t) => "string" == typeof t && t.match(/^\d+n$/) ? BigInt(t.substring(0, t.length - 1)) : t);

            function n(e) {
                if ("string" != typeof e) throw Error("Cannot safe json parse value of type ".concat(typeof e));
                try {
                    return s(e)
                } catch (t) {
                    return e
                }
            }

            function o(e) {
                return "string" == typeof e ? e : i(e) || ""
            }
        },
        70947: function(e, t, r) {
            "use strict";
            let i;
            r.d(t, {
                lO: function() {
                    return ru
                },
                ZP: function() {
                    return rR
                }
            });
            var s = r(70094),
                n = r.n(s);
            let o = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
                a = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
                c = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

            function u(e, t) {
                if ("__proto__" === e || "constructor" === e && t && "object" == typeof t && "prototype" in t) {
                    console.warn('[destr] Dropping "'.concat(e, '" key to prevent prototype pollution.'));
                    return
                }
                return t
            }

            function l(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if ("string" != typeof e) return e;
                let r = e.trim();
                if ('"' === e[0] && e.endsWith('"') && !e.includes("\\")) return r.slice(1, -1);
                if (r.length <= 9) {
                    let e = r.toLowerCase();
                    if ("true" === e) return !0;
                    if ("false" === e) return !1;
                    if ("undefined" === e) return;
                    if ("null" === e) return null;
                    if ("nan" === e) return Number.NaN;
                    if ("infinity" === e) return Number.POSITIVE_INFINITY;
                    if ("-infinity" === e) return Number.NEGATIVE_INFINITY
                }
                if (!c.test(e)) {
                    if (t.strict) throw SyntaxError("[destr] Invalid JSON");
                    return e
                }
                try {
                    if (o.test(e) || a.test(e)) {
                        if (t.strict) throw Error("[destr] Possible prototype pollution");
                        return JSON.parse(e, u)
                    }
                    return JSON.parse(e)
                } catch (r) {
                    if (t.strict) throw r;
                    return e
                }
            }
            var h = r(23663).Buffer;

            function d(e) {
                for (var t, r = arguments.length, i = Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) i[s - 1] = arguments[s];
                try {
                    return (t = e(...i)) && "function" == typeof t.then ? t : Promise.resolve(t)
                } catch (e) {
                    return Promise.reject(e)
                }
            }

            function p(e) {
                if (function(e) {
                        let t = typeof e;
                        return null === e || "object" !== t && "function" !== t
                    }(e)) return String(e);
                if (function(e) {
                        let t = Object.getPrototypeOf(e);
                        return !t || t.isPrototypeOf(Object)
                    }(e) || Array.isArray(e)) return JSON.stringify(e);
                if ("function" == typeof e.toJSON) return p(e.toJSON());
                throw Error("[unstorage] Cannot stringify value!")
            }
            let f = "base64:";

            function g(e) {
                return e ? e.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : ""
            }

            function y(e) {
                return (e = g(e)) ? e + ":" : ""
            }
            let m = () => {
                let e = new Map;
                return {
                    name: "memory",
                    options: {},
                    hasItem: t => e.has(t),
                    getItem(t) {
                        var r;
                        return null !== (r = e.get(t)) && void 0 !== r ? r : null
                    },
                    getItemRaw(t) {
                        var r;
                        return null !== (r = e.get(t)) && void 0 !== r ? r : null
                    },
                    setItem(t, r) {
                        e.set(t, r)
                    },
                    setItemRaw(t, r) {
                        e.set(t, r)
                    },
                    removeItem(t) {
                        e.delete(t)
                    },
                    getKeys: () => Array.from(e.keys()),
                    clear() {
                        e.clear()
                    },
                    dispose() {
                        e.clear()
                    }
                }
            };

            function b(e, t, r) {
                return e.watch ? e.watch((e, i) => t(e, r + i)) : () => {}
            }
            async function v(e) {
                "function" == typeof e.dispose && await d(e.dispose)
            }

            function D(e) {
                return new Promise((t, r) => {
                    e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => r(e.error)
                })
            }

            function w(e, t) {
                let r = indexedDB.open(e);
                r.onupgradeneeded = () => r.result.createObjectStore(t);
                let i = D(r);
                return (e, r) => i.then(i => r(i.transaction(t, e).objectStore(t)))
            }

            function E() {
                return i || (i = w("keyval-store", "keyval")), i
            }

            function _(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E();
                return t("readonly", t => D(t.get(e)))
            }
            var I = r(94495),
                S = function() {
                    let e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = t.base && t.base.length > 0 ? "".concat(t.base, ":") : "",
                        i = e => r + e;
                    return t.dbName && t.storeName && (e = w(t.dbName, t.storeName)), {
                        name: "idb-keyval",
                        options: t,
                        hasItem: async t => !(typeof await _(i(t), e) > "u"),
                        async getItem(t) {
                            var r;
                            return null !== (r = await _(i(t), e)) && void 0 !== r ? r : null
                        },
                        setItem: (t, r) => (function(e, t) {
                            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E();
                            return r("readwrite", r => (r.put(t, e), D(r.transaction)))
                        })(i(t), r, e),
                        removeItem: t => (function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E();
                            return t("readwrite", t => (t.delete(e), D(t.transaction)))
                        })(i(t), e),
                        getKeys: () => (function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E();
                            return e("readonly", e => {
                                var t;
                                if (e.getAllKeys) return D(e.getAllKeys());
                                let r = [];
                                return (t = e => r.push(e.key), e.openCursor().onsuccess = function() {
                                    this.result && (t(this.result), this.result.continue())
                                }, D(e.transaction)).then(() => r)
                            })
                        })(e),
                        clear: () => (function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E();
                            return e("readwrite", e => (e.clear(), D(e.transaction)))
                        })(e)
                    }
                };
            class O {
                async getKeys() {
                    return this.indexedDb.getKeys()
                }
                async getEntries() {
                    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(e => [e.key, e.value])
                }
                async getItem(e) {
                    let t = await this.indexedDb.getItem(e);
                    if (null !== t) return t
                }
                async setItem(e, t) {
                    await this.indexedDb.setItem(e, (0, I.u)(t))
                }
                async removeItem(e) {
                    await this.indexedDb.removeItem(e)
                }
                constructor() {
                    this.indexedDb = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = {
                                mounts: {
                                    "": e.driver || m()
                                },
                                mountpoints: [""],
                                watching: !1,
                                watchListeners: [],
                                unwatch: {}
                            },
                            r = e => {
                                for (let r of t.mountpoints)
                                    if (e.startsWith(r)) return {
                                        base: r,
                                        relativeKey: e.slice(r.length),
                                        driver: t.mounts[r]
                                    };
                                return {
                                    base: "",
                                    relativeKey: e,
                                    driver: t.mounts[""]
                                }
                            },
                            i = (e, r) => t.mountpoints.filter(t => t.startsWith(e) || r && e.startsWith(t)).map(r => ({
                                relativeBase: e.length > r.length ? e.slice(r.length) : void 0,
                                mountpoint: r,
                                driver: t.mounts[r]
                            })),
                            s = (e, r) => {
                                if (t.watching)
                                    for (let i of (r = g(r), t.watchListeners)) i(e, r)
                            },
                            n = async () => {
                                if (!t.watching)
                                    for (let e in t.watching = !0, t.mounts) t.unwatch[e] = await b(t.mounts[e], s, e)
                            },
                            o = async () => {
                                if (t.watching) {
                                    for (let e in t.unwatch) await t.unwatch[e]();
                                    t.unwatch = {}, t.watching = !1
                                }
                            },
                            a = (e, t, i) => {
                                let s = new Map,
                                    n = e => {
                                        let t = s.get(e.base);
                                        return t || (t = {
                                            driver: e.driver,
                                            base: e.base,
                                            items: []
                                        }, s.set(e.base, t)), t
                                    };
                                for (let i of e) {
                                    let e = "string" == typeof i,
                                        s = g(e ? i : i.key),
                                        o = e ? void 0 : i.value,
                                        a = e || !i.options ? t : { ...t,
                                            ...i.options
                                        },
                                        c = r(s);
                                    n(c).items.push({
                                        key: s,
                                        value: o,
                                        relativeKey: c.relativeKey,
                                        options: a
                                    })
                                }
                                return Promise.all([...s.values()].map(e => i(e))).then(e => e.flat())
                            },
                            c = {
                                hasItem(e) {
                                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        {
                                            relativeKey: i,
                                            driver: s
                                        } = r(e = g(e));
                                    return d(s.hasItem, i, t)
                                },
                                getItem(e) {
                                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        {
                                            relativeKey: i,
                                            driver: s
                                        } = r(e = g(e));
                                    return d(s.getItem, i, t).then(e => l(e))
                                },
                                getItems: (e, t) => a(e, t, e => e.driver.getItems ? d(e.driver.getItems, e.items.map(e => ({
                                    key: e.relativeKey,
                                    options: e.options
                                })), t).then(t => t.map(t => ({
                                    key: function() {
                                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                        return g(t.join(":"))
                                    }(e.base, t.key),
                                    value: l(t.value)
                                }))) : Promise.all(e.items.map(t => d(e.driver.getItem, t.relativeKey, t.options).then(e => ({
                                    key: t.key,
                                    value: l(e)
                                }))))),
                                getItemRaw(e) {
                                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        {
                                            relativeKey: i,
                                            driver: s
                                        } = r(e = g(e));
                                    return s.getItemRaw ? d(s.getItemRaw, i, t) : d(s.getItem, i, t).then(e => "string" == typeof e && e.startsWith(f) ? h.from(e.slice(f.length), "base64") : e)
                                },
                                async setItem(e, t) {
                                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                    if (void 0 === t) return c.removeItem(e);
                                    let {
                                        relativeKey: n,
                                        driver: o
                                    } = r(e = g(e));
                                    o.setItem && (await d(o.setItem, n, p(t), i), o.watch || s("update", e))
                                },
                                async setItems(e, t) {
                                    await a(e, t, async e => {
                                        e.driver.setItems && await d(e.driver.setItems, e.items.map(e => ({
                                            key: e.relativeKey,
                                            value: p(e.value),
                                            options: e.options
                                        })), t), e.driver.setItem && await Promise.all(e.items.map(t => d(e.driver.setItem, t.relativeKey, p(t.value), t.options)))
                                    })
                                },
                                async setItemRaw(e, t) {
                                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                    if (void 0 === t) return c.removeItem(e, i);
                                    let {
                                        relativeKey: n,
                                        driver: o
                                    } = r(e = g(e));
                                    if (o.setItemRaw) await d(o.setItemRaw, n, t, i);
                                    else {
                                        if (!o.setItem) return;
                                        await d(o.setItem, n, "string" == typeof t ? t : f + h.from(t).toString("base64"), i)
                                    }
                                    o.watch || s("update", e)
                                },
                                async removeItem(e) {
                                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    "boolean" == typeof t && (t = {
                                        removeMeta: t
                                    });
                                    let {
                                        relativeKey: i,
                                        driver: n
                                    } = r(e = g(e));
                                    n.removeItem && (await d(n.removeItem, i, t), (t.removeMeta || t.removeMata) && await d(n.removeItem, i + "$", t), n.watch || s("remove", e))
                                },
                                async getMeta(e) {
                                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    "boolean" == typeof t && (t = {
                                        nativeOnly: t
                                    });
                                    let {
                                        relativeKey: i,
                                        driver: s
                                    } = r(e = g(e)), n = Object.create(null);
                                    if (s.getMeta && Object.assign(n, await d(s.getMeta, i, t)), !t.nativeOnly) {
                                        let e = await d(s.getItem, i + "$", t).then(e => l(e));
                                        e && "object" == typeof e && ("string" == typeof e.atime && (e.atime = new Date(e.atime)), "string" == typeof e.mtime && (e.mtime = new Date(e.mtime)), Object.assign(n, e))
                                    }
                                    return n
                                },
                                setMeta(e, t) {
                                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                    return this.setItem(e + "$", t, r)
                                },
                                removeMeta(e) {
                                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    return this.removeItem(e + "$", t)
                                },
                                async getKeys(e) {
                                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        r = i(e = y(e), !0),
                                        s = [],
                                        n = [];
                                    for (let e of r) {
                                        let r = (await d(e.driver.getKeys, e.relativeBase, t)).map(t => e.mountpoint + g(t)).filter(e => !s.some(t => e.startsWith(t)));
                                        n.push(...r), s = [e.mountpoint, ...s.filter(t => !t.startsWith(e.mountpoint))]
                                    }
                                    return e ? n.filter(t => t.startsWith(e) && !t.endsWith("$")) : n.filter(e => !e.endsWith("$"))
                                },
                                async clear(e) {
                                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    e = y(e), await Promise.all(i(e, !1).map(async e => e.driver.clear ? d(e.driver.clear, e.relativeBase, t) : e.driver.removeItem ? Promise.all((await e.driver.getKeys(e.relativeBase || "", t)).map(r => e.driver.removeItem(r, t))) : void 0))
                                },
                                async dispose() {
                                    await Promise.all(Object.values(t.mounts).map(e => v(e)))
                                },
                                watch: async e => (await n(), t.watchListeners.push(e), async () => {
                                    t.watchListeners = t.watchListeners.filter(t => t !== e), 0 === t.watchListeners.length && await o()
                                }),
                                async unwatch() {
                                    t.watchListeners = [], await o()
                                },
                                mount(e, r) {
                                    if ((e = y(e)) && t.mounts[e]) throw Error("already mounted at ".concat(e));
                                    return e && (t.mountpoints.push(e), t.mountpoints.sort((e, t) => t.length - e.length)), t.mounts[e] = r, t.watching && Promise.resolve(b(r, s, e)).then(r => {
                                        t.unwatch[e] = r
                                    }).catch(console.error), c
                                },
                                async unmount(e) {
                                    let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                                    (e = y(e)) && t.mounts[e] && (t.watching && e in t.unwatch && (t.unwatch[e](), delete t.unwatch[e]), r && await v(t.mounts[e]), t.mountpoints = t.mountpoints.filter(t => t !== e), delete t.mounts[e])
                                },
                                getMount() {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                        t = r(e = g(e) + ":");
                                    return {
                                        driver: t.driver,
                                        base: t.base
                                    }
                                },
                                getMounts() {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    return i(e = g(e), t.parents).map(e => ({
                                        driver: e.driver,
                                        base: e.mountpoint
                                    }))
                                }
                            };
                        return c
                    }({
                        driver: S({
                            dbName: "WALLET_CONNECT_V2_INDEXED_DB",
                            storeName: "keyvaluestorage"
                        })
                    })
                }
            }
            var C = "u" > typeof globalThis ? globalThis : window,
                R = {
                    exports: {}
                };

            function P(e) {
                var t;
                return [e[0], (0, I.D)(null != (t = e[1]) ? t : "")]
            }! function() {
                function e() {}
                e.prototype.getItem = function(e) {
                    return this.hasOwnProperty(e) ? String(this[e]) : null
                }, e.prototype.setItem = function(e, t) {
                    this[e] = String(t)
                }, e.prototype.removeItem = function(e) {
                    delete this[e]
                }, e.prototype.clear = function() {
                    let e = this;
                    Object.keys(e).forEach(function(t) {
                        e[t] = void 0, delete e[t]
                    })
                }, e.prototype.key = function(e) {
                    return e = e || 0, Object.keys(this)[e]
                }, e.prototype.__defineGetter__("length", function() {
                    return Object.keys(this).length
                }), "u" > typeof C && C.localStorage ? R.exports = C.localStorage : window.localStorage ? R.exports = window.localStorage : R.exports = new e
            }();
            class A {
                async getKeys() {
                    return Object.keys(this.localStorage)
                }
                async getEntries() {
                    return Object.entries(this.localStorage).map(P)
                }
                async getItem(e) {
                    let t = this.localStorage.getItem(e);
                    if (null !== t) return (0, I.D)(t)
                }
                async setItem(e, t) {
                    this.localStorage.setItem(e, (0, I.u)(t))
                }
                async removeItem(e) {
                    this.localStorage.removeItem(e)
                }
                constructor() {
                    this.localStorage = R.exports
                }
            }
            let N = async (e, t, r) => {
                    let i = "wc_storage_version",
                        s = await t.getItem(i);
                    if (s && s >= 1) {
                        r(t);
                        return
                    }
                    let n = await e.getKeys();
                    if (!n.length) {
                        r(t);
                        return
                    }
                    let o = [];
                    for (; n.length;) {
                        let r = n.shift();
                        if (!r) continue;
                        let i = r.toLowerCase();
                        if (i.includes("wc@") || i.includes("walletconnect") || i.includes("wc_") || i.includes("wallet_connect")) {
                            let i = await e.getItem(r);
                            await t.setItem(r, i), o.push(r)
                        }
                    }
                    await t.setItem(i, 1), r(t), x(e, o)
                },
                x = async (e, t) => {
                    t.length && t.forEach(async t => {
                        await e.removeItem(t)
                    })
                };
            class T {
                async getKeys() {
                    return await this.initialize(), this.storage.getKeys()
                }
                async getEntries() {
                    return await this.initialize(), this.storage.getEntries()
                }
                async getItem(e) {
                    return await this.initialize(), this.storage.getItem(e)
                }
                async setItem(e, t) {
                    return await this.initialize(), this.storage.setItem(e, t)
                }
                async removeItem(e) {
                    return await this.initialize(), this.storage.removeItem(e)
                }
                async initialize() {
                    this.initialized || await new Promise(e => {
                        let t = setInterval(() => {
                            this.initialized && (clearInterval(t), e())
                        }, 20)
                    })
                }
                constructor() {
                    this.initialized = !1, this.setInitialized = e => {
                        this.storage = e, this.initialized = !0
                    };
                    let e = new A;
                    this.storage = e;
                    try {
                        let t = new O;
                        N(e, t, this.setInitialized)
                    } catch (e) {
                        this.initialized = !0
                    }
                }
            }
            var U = r(17357),
                L = r(13751),
                M = r(58017);
            class j extends M.q {
                constructor(e) {
                    super(), this.opts = e, this.protocol = "wc", this.version = 2
                }
            }
            class k extends M.q {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t, this.records = new Map
                }
            }
            class q {
                constructor(e, t) {
                    this.logger = e, this.core = t
                }
            }
            class F extends M.q {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class z extends M.q {
                constructor(e) {
                    super()
                }
            }
            class B {
                constructor(e, t, r, i) {
                    this.core = e, this.logger = t, this.name = r
                }
            }
            class V extends M.q {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class K extends M.q {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t
                }
            }
            class H {
                constructor(e, t) {
                    this.projectId = e, this.logger = t
                }
            }
            class J {
                constructor(e, t) {
                    this.projectId = e, this.logger = t
                }
            }
            class W {
                constructor(e) {
                    this.opts = e, this.protocol = "wc", this.version = 2
                }
            }
            class G {
                constructor(e) {
                    this.client = e
                }
            }
            var Z = r(75388),
                Y = r(96526),
                Q = r(95781);
            let X = "base64url",
                $ = "base58btc";
            var ee = r(78155),
                et = r(4163),
                er = r(70502);

            function ei(e) {
                return (0, et.B)((0, er.m)((0, I.u)(e), "utf8"), X)
            }

            function es(e) {
                let t = (0, er.m)("K36", $);
                return ["did", "key", "z" + (0, et.B)((0, ee.z)([t, e]), $)].join(":")
            }

            function en() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Y.randomBytes)(32);
                return Z._w(e)
            }
            async function eo(e, t, r, i) {
                var s, n, o;
                let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (0, Q.fromMiliseconds)(Date.now()),
                    c = {
                        alg: "EdDSA",
                        typ: "JWT"
                    },
                    u = {
                        iss: es(i.publicKey),
                        sub: e,
                        aud: t,
                        iat: a,
                        exp: a + r
                    },
                    l = (s = {
                        header: c,
                        payload: u
                    }, (0, er.m)([ei(s.header), ei(s.payload)].join("."), "utf8"));
                return [ei((n = {
                    header: c,
                    payload: u,
                    signature: Z.Xx(i.secretKey, l)
                }).header), ei(n.payload), (o = n.signature, (0, et.B)(o, X))].join(".")
            }
            r(57398);
            var ea = r(86006),
                ec = r(32943),
                eu = r(75779),
                el = r(67901);
            let eh = () => "u" > typeof WebSocket || "u" > typeof r.g && "u" > typeof r.g.WebSocket || "u" > typeof window.WebSocket || "u" > typeof self && "u" > typeof self.WebSocket,
                ed = e => e.split("?")[0],
                ep = "u" > typeof WebSocket ? WebSocket : "u" > typeof r.g && "u" > typeof r.g.WebSocket ? r.g.WebSocket : "u" > typeof window.WebSocket ? window.WebSocket : "u" > typeof self && "u" > typeof self.WebSocket ? self.WebSocket : r(5727);
            class ef {
                get connected() {
                    return "u" > typeof this.socket
                }
                get connecting() {
                    return this.registering
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async open() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url;
                    await this.register(e)
                }
                async close() {
                    return new Promise((e, t) => {
                        if (typeof this.socket > "u") {
                            t(Error("Connection already closed"));
                            return
                        }
                        this.socket.onclose = t => {
                            this.onClose(t), e()
                        }, this.socket.close()
                    })
                }
                async send(e) {
                    typeof this.socket > "u" && (this.socket = await this.register());
                    try {
                        this.socket.send((0, I.u)(e))
                    } catch (t) {
                        this.onError(e.id, t)
                    }
                }
                register() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url;
                    if (!(0, el.isWsUrl)(e)) throw Error("Provided URL is not compatible with WebSocket connection: ".concat(e));
                    if (this.registering) {
                        let e = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise((e, t) => {
                            this.events.once("register_error", e => {
                                this.resetMaxListeners(), t(e)
                            }), this.events.once("open", () => {
                                if (this.resetMaxListeners(), typeof this.socket > "u") return t(Error("WebSocket connection is missing or invalid"));
                                e(this.socket)
                            })
                        })
                    }
                    return this.url = e, this.registering = !0, new Promise((t, r) => {
                        let i = new URLSearchParams(e).get("origin"),
                            s = (0, el.isReactNative)() ? {
                                headers: {
                                    origin: i
                                }
                            } : {
                                rejectUnauthorized: !(0, el.isLocalhostUrl)(e)
                            },
                            n = new ep(e, [], s);
                        eh() ? n.onerror = e => {
                            r(this.emitError(e.error))
                        } : n.on("error", e => {
                            r(this.emitError(e))
                        }), n.onopen = () => {
                            this.onOpen(n), t(n)
                        }
                    })
                }
                onOpen(e) {
                    e.onmessage = e => this.onPayload(e), e.onclose = e => this.onClose(e), this.socket = e, this.registering = !1, this.events.emit("open")
                }
                onClose(e) {
                    this.socket = void 0, this.registering = !1, this.events.emit("close", e)
                }
                onPayload(e) {
                    if (typeof e.data > "u") return;
                    let t = "string" == typeof e.data ? (0, I.D)(e.data) : e.data;
                    this.events.emit("payload", t)
                }
                onError(e, t) {
                    let r = this.parseError(t),
                        i = r.message || r.toString(),
                        s = (0, el.formatJsonRpcError)(e, i);
                    this.events.emit("payload", s)
                }
                parseError(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.url;
                    return (0, el.parseConnectionError)(e, ed(t), "WS")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
                emitError(e) {
                    let t = this.parseError(Error((null == e ? void 0 : e.message) || "WebSocket connection failed for host: ".concat(ed(this.url))));
                    return this.events.emit("register_error", t), t
                }
                constructor(e) {
                    if (this.url = e, this.events = new s.EventEmitter, this.registering = !1, !(0, el.isWsUrl)(e)) throw Error("Provided URL is not compatible with WebSocket connection: ".concat(e));
                    this.url = e
                }
            }
            var eg = r(92899),
                ey = r.n(eg),
                em = r(38861),
                eb = r.n(em),
                ev = r(32215),
                eD = function(e, t) {
                    if (e.length >= 255) throw TypeError("Alphabet too long");
                    for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
                    for (var s = 0; s < e.length; s++) {
                        var n = e.charAt(s),
                            o = n.charCodeAt(0);
                        if (255 !== r[o]) throw TypeError(n + " is ambiguous");
                        r[o] = s
                    }
                    var a = e.length,
                        c = e.charAt(0),
                        u = Math.log(a) / Math.log(256),
                        l = Math.log(256) / Math.log(a);

                    function h(e) {
                        if ("string" != typeof e) throw TypeError("Expected String");
                        if (0 === e.length) return new Uint8Array;
                        var t = 0;
                        if (" " !== e[0]) {
                            for (var i = 0, s = 0; e[t] === c;) i++, t++;
                            for (var n = (e.length - t) * u + 1 >>> 0, o = new Uint8Array(n); e[t];) {
                                var l = r[e.charCodeAt(t)];
                                if (255 === l) return;
                                for (var h = 0, d = n - 1;
                                    (0 !== l || h < s) && -1 !== d; d--, h++) l += a * o[d] >>> 0, o[d] = l % 256 >>> 0, l = l / 256 >>> 0;
                                if (0 !== l) throw Error("Non-zero carry");
                                s = h, t++
                            }
                            if (" " !== e[t]) {
                                for (var p = n - s; p !== n && 0 === o[p];) p++;
                                for (var f = new Uint8Array(i + (n - p)), g = i; p !== n;) f[g++] = o[p++];
                                return f
                            }
                        }
                    }
                    return {
                        encode: function(t) {
                            if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
                            if (0 === t.length) return "";
                            for (var r = 0, i = 0, s = 0, n = t.length; s !== n && 0 === t[s];) s++, r++;
                            for (var o = (n - s) * l + 1 >>> 0, u = new Uint8Array(o); s !== n;) {
                                for (var h = t[s], d = 0, p = o - 1;
                                    (0 !== h || d < i) && -1 !== p; p--, d++) h += 256 * u[p] >>> 0, u[p] = h % a >>> 0, h = h / a >>> 0;
                                if (0 !== h) throw Error("Non-zero carry");
                                i = d, s++
                            }
                            for (var f = o - i; f !== o && 0 === u[f];) f++;
                            for (var g = c.repeat(r); f < o; ++f) g += e.charAt(u[f]);
                            return g
                        },
                        decodeUnsafe: h,
                        decode: function(e) {
                            var r = h(e);
                            if (r) return r;
                            throw Error("Non-".concat(t, " character"))
                        }
                    }
                };
            let ew = e => {
                    if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
                    if (e instanceof ArrayBuffer) return new Uint8Array(e);
                    if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
                    throw Error("Unknown type, must be binary type")
                },
                eE = e => new TextEncoder().encode(e),
                e_ = e => new TextDecoder().decode(e);
            class eI {
                encode(e) {
                    if (e instanceof Uint8Array) return "".concat(this.prefix).concat(this.baseEncode(e));
                    throw Error("Unknown type, must be binary type")
                }
                constructor(e, t, r) {
                    this.name = e, this.prefix = t, this.baseEncode = r
                }
            }
            class eS {
                decode(e) {
                    if ("string" == typeof e) {
                        if (e.codePointAt(0) !== this.prefixCodePoint) throw Error("Unable to decode multibase string ".concat(JSON.stringify(e), ", ").concat(this.name, " decoder only supports inputs prefixed with ").concat(this.prefix));
                        return this.baseDecode(e.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(e) {
                    return eC(this, e)
                }
                constructor(e, t, r) {
                    if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw Error("Invalid prefix character");
                    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = r
                }
            }
            class eO {
                or(e) {
                    return eC(this, e)
                }
                decode(e) {
                    let t = e[0],
                        r = this.decoders[t];
                    if (r) return r.decode(e);
                    throw RangeError("Unable to decode multibase string ".concat(JSON.stringify(e), ", only inputs prefixed with ").concat(Object.keys(this.decoders), " are supported"))
                }
                constructor(e) {
                    this.decoders = e
                }
            }
            let eC = (e, t) => new eO({ ...e.decoders || {
                    [e.prefix]: e
                },
                ...t.decoders || {
                    [t.prefix]: t
                }
            });
            class eR {
                encode(e) {
                    return this.encoder.encode(e)
                }
                decode(e) {
                    return this.decoder.decode(e)
                }
                constructor(e, t, r, i) {
                    this.name = e, this.prefix = t, this.baseEncode = r, this.baseDecode = i, this.encoder = new eI(e, t, r), this.decoder = new eS(e, t, i)
                }
            }
            let eP = e => {
                    let {
                        name: t,
                        prefix: r,
                        encode: i,
                        decode: s
                    } = e;
                    return new eR(t, r, i, s)
                },
                eA = e => {
                    let {
                        prefix: t,
                        name: r,
                        alphabet: i
                    } = e, {
                        encode: s,
                        decode: n
                    } = eD(i, r);
                    return eP({
                        prefix: t,
                        name: r,
                        encode: s,
                        decode: e => ew(n(e))
                    })
                },
                eN = (e, t, r, i) => {
                    let s = {};
                    for (let e = 0; e < t.length; ++e) s[t[e]] = e;
                    let n = e.length;
                    for (;
                        "=" === e[n - 1];) --n;
                    let o = new Uint8Array(n * r / 8 | 0),
                        a = 0,
                        c = 0,
                        u = 0;
                    for (let t = 0; t < n; ++t) {
                        let n = s[e[t]];
                        if (void 0 === n) throw SyntaxError("Non-".concat(i, " character"));
                        c = c << r | n, (a += r) >= 8 && (a -= 8, o[u++] = 255 & c >> a)
                    }
                    if (a >= r || 255 & c << 8 - a) throw SyntaxError("Unexpected end of data");
                    return o
                },
                ex = (e, t, r) => {
                    let i = "=" === t[t.length - 1],
                        s = (1 << r) - 1,
                        n = "",
                        o = 0,
                        a = 0;
                    for (let i = 0; i < e.length; ++i)
                        for (a = a << 8 | e[i], o += 8; o > r;) o -= r, n += t[s & a >> o];
                    if (o && (n += t[s & a << r - o]), i)
                        for (; n.length * r & 7;) n += "=";
                    return n
                },
                eT = e => {
                    let {
                        name: t,
                        prefix: r,
                        bitsPerChar: i,
                        alphabet: s
                    } = e;
                    return eP({
                        prefix: r,
                        name: t,
                        encode: e => ex(e, s, i),
                        decode: e => eN(e, s, i, t)
                    })
                };
            var eU = Object.freeze({
                    __proto__: null,
                    identity: eP({
                        prefix: "\x00",
                        name: "identity",
                        encode: e => e_(e),
                        decode: e => eE(e)
                    })
                }),
                eL = Object.freeze({
                    __proto__: null,
                    base2: eT({
                        prefix: "0",
                        name: "base2",
                        alphabet: "01",
                        bitsPerChar: 1
                    })
                }),
                eM = Object.freeze({
                    __proto__: null,
                    base8: eT({
                        prefix: "7",
                        name: "base8",
                        alphabet: "01234567",
                        bitsPerChar: 3
                    })
                }),
                ej = Object.freeze({
                    __proto__: null,
                    base10: eA({
                        prefix: "9",
                        name: "base10",
                        alphabet: "0123456789"
                    })
                }),
                ek = Object.freeze({
                    __proto__: null,
                    base16: eT({
                        prefix: "f",
                        name: "base16",
                        alphabet: "0123456789abcdef",
                        bitsPerChar: 4
                    }),
                    base16upper: eT({
                        prefix: "F",
                        name: "base16upper",
                        alphabet: "0123456789ABCDEF",
                        bitsPerChar: 4
                    })
                });
            let eq = eT({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                eF = eT({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                ez = eT({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                eB = eT({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                eV = eT({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                eK = eT({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                });
            var eH = Object.freeze({
                    __proto__: null,
                    base32: eq,
                    base32upper: eF,
                    base32pad: ez,
                    base32padupper: eB,
                    base32hex: eV,
                    base32hexupper: eK,
                    base32hexpad: eT({
                        prefix: "t",
                        name: "base32hexpad",
                        alphabet: "0123456789abcdefghijklmnopqrstuv=",
                        bitsPerChar: 5
                    }),
                    base32hexpadupper: eT({
                        prefix: "T",
                        name: "base32hexpadupper",
                        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                        bitsPerChar: 5
                    }),
                    base32z: eT({
                        prefix: "h",
                        name: "base32z",
                        alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                        bitsPerChar: 5
                    })
                }),
                eJ = Object.freeze({
                    __proto__: null,
                    base36: eA({
                        prefix: "k",
                        name: "base36",
                        alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                    }),
                    base36upper: eA({
                        prefix: "K",
                        name: "base36upper",
                        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                    })
                }),
                eW = Object.freeze({
                    __proto__: null,
                    base58btc: eA({
                        name: "base58btc",
                        prefix: "z",
                        alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                    }),
                    base58flickr: eA({
                        name: "base58flickr",
                        prefix: "Z",
                        alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                    })
                });
            let eG = eT({
                prefix: "m",
                name: "base64",
                alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                bitsPerChar: 6
            });
            var eZ = Object.freeze({
                __proto__: null,
                base64: eG,
                base64pad: eT({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                base64url: eT({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                base64urlpad: eT({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                })
            });
            let eY = Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),
                eQ = eY.reduce((e, t, r) => (e[r] = t, e), []),
                eX = eY.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []);
            var e$ = Object.freeze({
                    __proto__: null,
                    base256emoji: eP({
                        prefix: "\uD83D\uDE80",
                        name: "base256emoji",
                        encode: function(e) {
                            return e.reduce((e, t) => e += eQ[t], "")
                        },
                        decode: function(e) {
                            let t = [];
                            for (let r of e) {
                                let e = eX[r.codePointAt(0)];
                                if (void 0 === e) throw Error("Non-base256emoji character: ".concat(r));
                                t.push(e)
                            }
                            return new Uint8Array(t)
                        }
                    })
                }),
                e0 = {
                    encode: function e(t, r, i) {
                        r = r || [], i = i || 0;
                        for (var s = i; t >= 2147483648;) r[i++] = 255 & t | 128, t /= 128;
                        for (; - 128 & t;) r[i++] = 255 & t | 128, t >>>= 7;
                        return r[i] = 0 | t, e.bytes = i - s + 1, r
                    },
                    decode: function e(t, r) {
                        var i, s = 0,
                            r = r || 0,
                            n = 0,
                            o = r,
                            a = t.length;
                        do {
                            if (o >= a) throw e.bytes = 0, RangeError("Could not decode varint");
                            i = t[o++], s += n < 28 ? (127 & i) << n : (127 & i) * Math.pow(2, n), n += 7
                        } while (i >= 128);
                        return e.bytes = o - r, s
                    },
                    encodingLength: function(e) {
                        return e < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : e < 34359738368 ? 5 : e < 4398046511104 ? 6 : e < 562949953421312 ? 7 : e < 72057594037927940 ? 8 : e < 0x7fffffffffffffff ? 9 : 10
                    }
                };
            let e1 = function(e, t) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    return e0.encode(e, t, r), t
                },
                e3 = e => e0.encodingLength(e),
                e5 = (e, t) => {
                    let r = t.byteLength,
                        i = e3(e),
                        s = i + e3(r),
                        n = new Uint8Array(s + r);
                    return e1(e, n, 0), e1(r, n, i), n.set(t, s), new e6(e, r, t, n)
                };
            class e6 {
                constructor(e, t, r, i) {
                    this.code = e, this.size = t, this.digest = r, this.bytes = i
                }
            }
            let e8 = e => {
                let {
                    name: t,
                    code: r,
                    encode: i
                } = e;
                return new e2(t, r, i)
            };
            class e2 {
                digest(e) {
                    if (e instanceof Uint8Array) {
                        let t = this.encode(e);
                        return t instanceof Uint8Array ? e5(this.code, t) : t.then(e => e5(this.code, e))
                    }
                    throw Error("Unknown type, must be binary type")
                }
                constructor(e, t, r) {
                    this.name = e, this.code = t, this.encode = r
                }
            }
            let e4 = e => async t => new Uint8Array(await crypto.subtle.digest(e, t));
            var e7 = Object.freeze({
                    __proto__: null,
                    sha256: e8({
                        name: "sha2-256",
                        code: 18,
                        encode: e4("SHA-256")
                    }),
                    sha512: e8({
                        name: "sha2-512",
                        code: 19,
                        encode: e4("SHA-512")
                    })
                }),
                e9 = Object.freeze({
                    __proto__: null,
                    identity: {
                        code: 0,
                        name: "identity",
                        encode: ew,
                        digest: e => e5(0, ew(e))
                    }
                });
            new TextEncoder, new TextDecoder;
            let te = { ...eU,
                ...eL,
                ...eM,
                ...ej,
                ...ek,
                ...eH,
                ...eJ,
                ...eW,
                ...eZ,
                ...e$
            };

            function tt(e) {
                return null != globalThis.Buffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e
            }

            function tr(e, t, r, i) {
                return {
                    name: e,
                    prefix: t,
                    encoder: {
                        name: e,
                        prefix: t,
                        encode: r
                    },
                    decoder: {
                        decode: i
                    }
                }
            }({ ...e7,
                ...e9
            });
            let ti = tr("utf8", "u", e => "u" + new TextDecoder("utf8").decode(e), e => new TextEncoder().encode(e.substring(1))),
                ts = tr("ascii", "a", e => {
                    let t = "a";
                    for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
                    return t
                }, e => {
                    let t = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? tt(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e)
                    }((e = e.substring(1)).length);
                    for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
                    return t
                }),
                tn = {
                    utf8: ti,
                    "utf-8": ti,
                    hex: te.base16,
                    latin1: ts,
                    ascii: ts,
                    binary: ts,
                    ...te
                },
                to = "core",
                ta = "".concat("wc", "@2:").concat(to, ":"),
                tc = {
                    logger: "error"
                },
                tu = {
                    database: ":memory:"
                },
                tl = "client_ed25519_seed",
                th = Q.ONE_DAY,
                td = Q.SIX_HOURS,
                tp = "wss://relay.walletconnect.com",
                tf = "wss://relay.walletconnect.org",
                tg = {
                    message: "relayer_message",
                    message_ack: "relayer_message_ack",
                    connect: "relayer_connect",
                    disconnect: "relayer_disconnect",
                    error: "relayer_error",
                    connection_stalled: "relayer_connection_stalled",
                    publish: "relayer_publish"
                },
                ty = {
                    payload: "payload",
                    connect: "connect",
                    disconnect: "disconnect",
                    error: "error"
                },
                tm = Q.ONE_SECOND,
                tb = {
                    created: "subscription_created",
                    deleted: "subscription_deleted",
                    sync: "subscription_sync",
                    resubscribed: "subscription_resubscribed"
                },
                tv = 1e3 * Q.FIVE_SECONDS,
                tD = {
                    wc_pairingDelete: {
                        req: {
                            ttl: Q.ONE_DAY,
                            prompt: !1,
                            tag: 1e3
                        },
                        res: {
                            ttl: Q.ONE_DAY,
                            prompt: !1,
                            tag: 1001
                        }
                    },
                    wc_pairingPing: {
                        req: {
                            ttl: Q.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1002
                        },
                        res: {
                            ttl: Q.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1003
                        }
                    },
                    unregistered_method: {
                        req: {
                            ttl: Q.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        },
                        res: {
                            ttl: Q.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        }
                    }
                },
                tw = {
                    create: "pairing_create",
                    expire: "pairing_expire",
                    delete: "pairing_delete",
                    ping: "pairing_ping"
                },
                tE = {
                    created: "history_created",
                    updated: "history_updated",
                    deleted: "history_deleted",
                    sync: "history_sync"
                },
                t_ = {
                    created: "expirer_created",
                    deleted: "expirer_deleted",
                    expired: "expirer_expired",
                    sync: "expirer_sync"
                },
                tI = "verify-api",
                tS = "https://verify.walletconnect.com",
                tO = "https://verify.walletconnect.org",
                tC = [tS, tO];
            class tR {
                get context() {
                    return (0, L.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                async setKeyChain(e) {
                    await this.core.storage.setItem(this.storageKey, (0, ea.KC)(e))
                }
                async getKeyChain() {
                    let e = await this.core.storage.getItem(this.storageKey);
                    return "u" > typeof e ? (0, ea.IP)(e) : void 0
                }
                async persist() {
                    await this.setKeyChain(this.keychain)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, ea.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                constructor(e, t) {
                    this.core = e, this.logger = t, this.keychain = new Map, this.name = "keychain", this.version = "0.3", this.initialized = !1, this.storagePrefix = ta, this.init = async () => {
                        if (!this.initialized) {
                            let e = await this.getKeyChain();
                            "u" > typeof e && (this.keychain = e), this.initialized = !0
                        }
                    }, this.has = e => (this.isInitialized(), this.keychain.has(e)), this.set = async (e, t) => {
                        this.isInitialized(), this.keychain.set(e, t), await this.persist()
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.keychain.get(e);
                        if (typeof t > "u") {
                            let {
                                message: t
                            } = (0, ea.Z7)("NO_MATCHING_KEY", "".concat(this.name, ": ").concat(e));
                            throw Error(t)
                        }
                        return t
                    }, this.del = async e => {
                        this.isInitialized(), this.keychain.delete(e), await this.persist()
                    }, this.core = e, this.logger = (0, L.generateChildLogger)(t, this.name)
                }
            }
            class tP {
                get context() {
                    return (0, L.getLoggerContext)(this.logger)
                }
                async setPrivateKey(e, t) {
                    return await this.keychain.set(e, t), e
                }
                getPrivateKey(e) {
                    return this.keychain.get(e)
                }
                async getClientSeed() {
                    let e = "";
                    try {
                        e = this.keychain.get(tl)
                    } catch (t) {
                        e = (0, ea.jd)(), await this.keychain.set(tl, e)
                    }
                    return function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "utf8",
                            r = tn[t];
                        if (!r) throw Error('Unsupported encoding "'.concat(t, '"'));
                        return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? tt(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode("".concat(r.prefix).concat(e))
                    }(e, "base16")
                }
                getSymKey(e) {
                    return this.keychain.get(e)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, ea.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                constructor(e, t, r) {
                    this.core = e, this.logger = t, this.name = "crypto", this.initialized = !1, this.init = async () => {
                        this.initialized || (await this.keychain.init(), this.initialized = !0)
                    }, this.hasKeys = e => (this.isInitialized(), this.keychain.has(e)), this.getClientId = async () => (this.isInitialized(), es(en(await this.getClientSeed()).publicKey)), this.generateKeyPair = () => {
                        this.isInitialized();
                        let e = (0, ea.Au)();
                        return this.setPrivateKey(e.publicKey, e.privateKey)
                    }, this.signJWT = async e => {
                        this.isInitialized();
                        let t = en(await this.getClientSeed()),
                            r = (0, ea.jd)();
                        return await eo(r, e, th, t)
                    }, this.generateSharedKey = (e, t, r) => {
                        this.isInitialized();
                        let i = this.getPrivateKey(e),
                            s = (0, ea.m$)(i, t);
                        return this.setSymKey(s, r)
                    }, this.setSymKey = async (e, t) => {
                        this.isInitialized();
                        let r = t || (0, ea.Ym)(e);
                        return await this.keychain.set(r, e), r
                    }, this.deleteKeyPair = async e => {
                        this.isInitialized(), await this.keychain.del(e)
                    }, this.deleteSymKey = async e => {
                        this.isInitialized(), await this.keychain.del(e)
                    }, this.encode = async (e, t, r) => {
                        this.isInitialized();
                        let i = (0, ea.EN)(r),
                            s = (0, I.u)(t);
                        if ((0, ea.Q8)(i)) {
                            let t = i.senderPublicKey,
                                r = i.receiverPublicKey;
                            e = await this.generateSharedKey(t, r)
                        }
                        let n = this.getSymKey(e),
                            {
                                type: o,
                                senderPublicKey: a
                            } = i;
                        return (0, ea.HI)({
                            type: o,
                            symKey: n,
                            message: s,
                            senderPublicKey: a
                        })
                    }, this.decode = async (e, t, r) => {
                        this.isInitialized();
                        let i = (0, ea.Ll)(t, r);
                        if ((0, ea.Q8)(i)) {
                            let t = i.receiverPublicKey,
                                r = i.senderPublicKey;
                            e = await this.generateSharedKey(t, r)
                        }
                        try {
                            let r = this.getSymKey(e),
                                i = (0, ea.pe)({
                                    symKey: r,
                                    encoded: t
                                });
                            return (0, I.D)(i)
                        } catch (t) {
                            this.logger.error("Failed to decode message from topic: '".concat(e, "', clientId: '").concat(await this.getClientId(), "'")), this.logger.error(t)
                        }
                    }, this.getPayloadType = e => {
                        let t = (0, ea.vB)(e);
                        return (0, ea.WG)(t.type)
                    }, this.getPayloadSenderPublicKey = e => {
                        let t = (0, ea.vB)(e);
                        return t.senderPublicKey ? (0, ec.BB)(t.senderPublicKey, ea.AW) : void 0
                    }, this.core = e, this.logger = (0, L.generateChildLogger)(t, this.name), this.keychain = r || new tR(this.core, this.logger)
                }
            }
            class tA extends q {
                get context() {
                    return (0, L.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                async setRelayerMessages(e) {
                    await this.core.storage.setItem(this.storageKey, (0, ea.KC)(e))
                }
                async getRelayerMessages() {
                    let e = await this.core.storage.getItem(this.storageKey);
                    return "u" > typeof e ? (0, ea.IP)(e) : void 0
                }
                async persist() {
                    await this.setRelayerMessages(this.messages)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, ea.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                constructor(e, t) {
                    super(e, t), this.logger = e, this.core = t, this.messages = new Map, this.name = "messages", this.version = "0.3", this.initialized = !1, this.storagePrefix = ta, this.init = async () => {
                        if (!this.initialized) {
                            this.logger.trace("Initialized");
                            try {
                                let e = await this.getRelayerMessages();
                                "u" > typeof e && (this.messages = e), this.logger.debug("Successfully Restored records for ".concat(this.name)), this.logger.trace({
                                    type: "method",
                                    method: "restore",
                                    size: this.messages.size
                                })
                            } catch (e) {
                                this.logger.debug("Failed to Restore records for ".concat(this.name)), this.logger.error(e)
                            } finally {
                                this.initialized = !0
                            }
                        }
                    }, this.set = async (e, t) => {
                        this.isInitialized();
                        let r = (0, ea.rj)(t),
                            i = this.messages.get(e);
                        return typeof i > "u" && (i = {}), "u" > typeof i[r] || (i[r] = t, this.messages.set(e, i), await this.persist()), r
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.messages.get(e);
                        return typeof t > "u" && (t = {}), t
                    }, this.has = (e, t) => (this.isInitialized(), "u" > typeof this.get(e)[(0, ea.rj)(t)]), this.del = async e => {
                        this.isInitialized(), this.messages.delete(e), await this.persist()
                    }, this.logger = (0, L.generateChildLogger)(e, this.name), this.core = t
                }
            }
            class tN extends F {
                get context() {
                    return (0, L.getLoggerContext)(this.logger)
                }
                rpcPublish(e, t, r, i, s, n, o) {
                    var a, c, u, l;
                    let h = {
                        method: (0, ea.cO)(i.protocol).publish,
                        params: {
                            topic: e,
                            message: t,
                            ttl: r,
                            prompt: s,
                            tag: n
                        },
                        id: o
                    };
                    return (0, ea.o8)(null == (a = h.params) ? void 0 : a.prompt) && (null == (c = h.params) || delete c.prompt), (0, ea.o8)(null == (u = h.params) ? void 0 : u.tag) && (null == (l = h.params) || delete l.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "message",
                        direction: "outgoing",
                        request: h
                    }), this.relayer.request(h)
                }
                removeRequestFromQueue(e) {
                    this.queue.delete(e)
                }
                checkQueue() {
                    this.queue.forEach(async e => {
                        let {
                            topic: t,
                            message: r,
                            opts: i
                        } = e;
                        await this.publish(t, r, i)
                    })
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(U.HEARTBEAT_EVENTS.pulse, () => {
                        if (this.needsTransportRestart) {
                            this.needsTransportRestart = !1, this.relayer.events.emit(tg.connection_stalled);
                            return
                        }
                        this.checkQueue()
                    }), this.relayer.on(tg.message_ack, e => {
                        this.removeRequestFromQueue(e.id.toString())
                    })
                }
                constructor(e, t) {
                    super(e, t), this.relayer = e, this.logger = t, this.events = new s.EventEmitter, this.name = "publisher", this.queue = new Map, this.publishTimeout = (0, Q.toMiliseconds)(2 * Q.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (e, t, r) => {
                        var i;
                        this.logger.debug("Publishing Payload"), this.logger.trace({
                            type: "method",
                            method: "publish",
                            params: {
                                topic: e,
                                message: t,
                                opts: r
                            }
                        });
                        try {
                            let s = (null == r ? void 0 : r.ttl) || td,
                                n = (0, ea._H)(r),
                                o = (null == r ? void 0 : r.prompt) || !1,
                                a = (null == r ? void 0 : r.tag) || 0,
                                c = (null == r ? void 0 : r.id) || (0, el.getBigIntRpcId)().toString(),
                                u = {
                                    topic: e,
                                    message: t,
                                    opts: {
                                        ttl: s,
                                        relay: n,
                                        prompt: o,
                                        tag: a,
                                        id: c
                                    }
                                },
                                l = setTimeout(() => this.queue.set(c, u), this.publishTimeout);
                            try {
                                await await (0, ea.hF)(this.rpcPublish(e, t, s, n, o, a, c), this.publishTimeout, "Failed to publish payload, please try again. id:".concat(c, " tag:").concat(a)), this.removeRequestFromQueue(c), this.relayer.events.emit(tg.publish, u)
                            } catch (e) {
                                if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, null != (i = null == r ? void 0 : r.internal) && i.throwOnFailedPublish) throw this.removeRequestFromQueue(c), e;
                                return
                            } finally {
                                clearTimeout(l)
                            }
                            this.logger.debug("Successfully Published Payload"), this.logger.trace({
                                type: "method",
                                method: "publish",
                                params: {
                                    topic: e,
                                    message: t,
                                    opts: r
                                }
                            })
                        } catch (e) {
                            throw this.logger.debug("Failed to Publish Payload"), this.logger.error(e), e
                        }
                    }, this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.relayer = e, this.logger = (0, L.generateChildLogger)(t, this.name), this.registerEventListeners()
                }
            }
            class tx {
                get topics() {
                    return Array.from(this.map.keys())
                }
                constructor() {
                    this.map = new Map, this.set = (e, t) => {
                        let r = this.get(e);
                        this.exists(e, t) || this.map.set(e, [...r, t])
                    }, this.get = e => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
                        if (typeof t > "u") {
                            this.map.delete(e);
                            return
                        }
                        if (!this.map.has(e)) return;
                        let r = this.get(e);
                        if (!this.exists(e, t)) return;
                        let i = r.filter(e => e !== t);
                        if (!i.length) {
                            this.map.delete(e);
                            return
                        }
                        this.map.set(e, i)
                    }, this.clear = () => {
                        this.map.clear()
                    }
                }
            }
            var tT = Object.defineProperty,
                tU = Object.defineProperties,
                tL = Object.getOwnPropertyDescriptors,
                tM = Object.getOwnPropertySymbols,
                tj = Object.prototype.hasOwnProperty,
                tk = Object.prototype.propertyIsEnumerable,
                tq = (e, t, r) => t in e ? tT(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                tF = (e, t) => {
                    for (var r in t || (t = {})) tj.call(t, r) && tq(e, r, t[r]);
                    if (tM)
                        for (var r of tM(t)) tk.call(t, r) && tq(e, r, t[r]);
                    return e
                },
                tz = (e, t) => tU(e, tL(t));
            class tB extends V {
                get context() {
                    return (0, L.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.subscriptions.size
                }
                get ids() {
                    return Array.from(this.subscriptions.keys())
                }
                get values() {
                    return Array.from(this.subscriptions.values())
                }
                get topics() {
                    return this.topicMap.topics
                }
                hasSubscription(e, t) {
                    let r = !1;
                    try {
                        r = this.getSubscription(e).topic === t
                    } catch (e) {}
                    return r
                }
                onEnable() {
                    this.cached = [], this.initialized = !0
                }
                onDisable() {
                    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
                }
                async unsubscribeByTopic(e, t) {
                    let r = this.topicMap.get(e);
                    await Promise.all(r.map(async r => await this.unsubscribeById(e, r, t)))
                }
                async unsubscribeById(e, t, r) {
                    this.logger.debug("Unsubscribing Topic"), this.logger.trace({
                        type: "method",
                        method: "unsubscribe",
                        params: {
                            topic: e,
                            id: t,
                            opts: r
                        }
                    });
                    try {
                        let i = (0, ea._H)(r);
                        await this.rpcUnsubscribe(e, t, i);
                        let s = (0, ea.D6)("USER_DISCONNECTED", "".concat(this.name, ", ").concat(e));
                        await this.onUnsubscribe(e, t, s), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                            type: "method",
                            method: "unsubscribe",
                            params: {
                                topic: e,
                                id: t,
                                opts: r
                            }
                        })
                    } catch (e) {
                        throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(e), e
                    }
                }
                async rpcSubscribe(e, t) {
                    let r = {
                        method: (0, ea.cO)(t.protocol).subscribe,
                        params: {
                            topic: e
                        }
                    };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: r
                    });
                    try {
                        await await (0, ea.hF)(this.relayer.request(r), this.subscribeTimeout)
                    } catch (e) {
                        this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(tg.connection_stalled)
                    }
                    return (0, ea.rj)(e + this.clientId)
                }
                async rpcBatchSubscribe(e) {
                    if (!e.length) return;
                    let t = e[0].relay,
                        r = {
                            method: (0, ea.cO)(t.protocol).batchSubscribe,
                            params: {
                                topics: e.map(e => e.topic)
                            }
                        };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: r
                    });
                    try {
                        return await await (0, ea.hF)(this.relayer.request(r), this.subscribeTimeout)
                    } catch (e) {
                        this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(tg.connection_stalled)
                    }
                }
                rpcUnsubscribe(e, t, r) {
                    let i = {
                        method: (0, ea.cO)(r.protocol).unsubscribe,
                        params: {
                            topic: e,
                            id: t
                        }
                    };
                    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: i
                    }), this.relayer.request(i)
                }
                onSubscribe(e, t) {
                    this.setSubscription(e, tz(tF({}, t), {
                        id: e
                    })), this.pending.delete(t.topic)
                }
                onBatchSubscribe(e) {
                    e.length && e.forEach(e => {
                        this.setSubscription(e.id, tF({}, e)), this.pending.delete(e.topic)
                    })
                }
                async onUnsubscribe(e, t, r) {
                    this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, r), await this.relayer.messages.del(e)
                }
                async setRelayerSubscriptions(e) {
                    await this.relayer.core.storage.setItem(this.storageKey, e)
                }
                async getRelayerSubscriptions() {
                    return await this.relayer.core.storage.getItem(this.storageKey)
                }
                setSubscription(e, t) {
                    this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({
                        type: "method",
                        method: "setSubscription",
                        id: e,
                        subscription: t
                    }), this.addSubscription(e, t))
                }
                addSubscription(e, t) {
                    this.subscriptions.set(e, tF({}, t)), this.topicMap.set(t.topic, e), this.events.emit(tb.created, t)
                }
                getSubscription(e) {
                    this.logger.debug("Getting subscription"), this.logger.trace({
                        type: "method",
                        method: "getSubscription",
                        id: e
                    });
                    let t = this.subscriptions.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = (0, ea.Z7)("NO_MATCHING_KEY", "".concat(this.name, ": ").concat(e));
                        throw Error(t)
                    }
                    return t
                }
                deleteSubscription(e, t) {
                    this.logger.debug("Deleting subscription"), this.logger.trace({
                        type: "method",
                        method: "deleteSubscription",
                        id: e,
                        reason: t
                    });
                    let r = this.getSubscription(e);
                    this.subscriptions.delete(e), this.topicMap.delete(r.topic, e), this.events.emit(tb.deleted, tz(tF({}, r), {
                        reason: t
                    }))
                }
                async persist() {
                    await this.setRelayerSubscriptions(this.values), this.events.emit(tb.sync)
                }
                async reset() {
                    if (this.cached.length) {
                        let e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
                        for (let t = 0; t < e; t++) {
                            let e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                            await this.batchSubscribe(e)
                        }
                    }
                    this.events.emit(tb.resubscribed)
                }
                async restore() {
                    try {
                        let e = await this.getRelayerSubscriptions();
                        if (typeof e > "u" || !e.length) return;
                        if (this.subscriptions.size) {
                            let {
                                message: e
                            } = (0, ea.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), this.logger.error("".concat(this.name, ": ").concat(JSON.stringify(this.values))), Error(e)
                        }
                        this.cached = e, this.logger.debug("Successfully Restored subscriptions for ".concat(this.name)), this.logger.trace({
                            type: "method",
                            method: "restore",
                            subscriptions: this.values
                        })
                    } catch (e) {
                        this.logger.debug("Failed to Restore subscriptions for ".concat(this.name)), this.logger.error(e)
                    }
                }
                async batchSubscribe(e) {
                    if (!e.length) return;
                    let t = await this.rpcBatchSubscribe(e);
                    (0, ea.qt)(t) && this.onBatchSubscribe(t.map((t, r) => tz(tF({}, e[r]), {
                        id: t
                    })))
                }
                async onConnect() {
                    this.restartInProgress || (await this.restart(), this.onEnable())
                }
                onDisconnect() {
                    this.onDisable()
                }
                async checkPending() {
                    if (!this.initialized || this.relayer.transportExplicitlyClosed) return;
                    let e = [];
                    this.pending.forEach(t => {
                        e.push(t)
                    }), await this.batchSubscribe(e)
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(U.HEARTBEAT_EVENTS.pulse, async () => {
                        await this.checkPending()
                    }), this.relayer.on(tg.connect, async () => {
                        await this.onConnect()
                    }), this.relayer.on(tg.disconnect, () => {
                        this.onDisconnect()
                    }), this.events.on(tb.created, async e => {
                        let t = tb.created;
                        this.logger.info("Emitting ".concat(t)), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), await this.persist()
                    }), this.events.on(tb.deleted, async e => {
                        let t = tb.deleted;
                        this.logger.info("Emitting ".concat(t)), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), await this.persist()
                    })
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, ea.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                async restartToComplete() {
                    this.restartInProgress && await new Promise(e => {
                        let t = setInterval(() => {
                            this.restartInProgress || (clearInterval(t), e())
                        }, this.pollingInterval)
                    })
                }
                constructor(e, t) {
                    super(e, t), this.relayer = e, this.logger = t, this.subscriptions = new Map, this.topicMap = new tx, this.events = new s.EventEmitter, this.name = "subscription", this.version = "0.3", this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = ta, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId())
                    }, this.subscribe = async (e, t) => {
                        await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                            type: "method",
                            method: "subscribe",
                            params: {
                                topic: e,
                                opts: t
                            }
                        });
                        try {
                            let r = (0, ea._H)(t),
                                i = {
                                    topic: e,
                                    relay: r
                                };
                            this.pending.set(e, i);
                            let s = await this.rpcSubscribe(e, r);
                            return this.onSubscribe(s, i), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                                type: "method",
                                method: "subscribe",
                                params: {
                                    topic: e,
                                    opts: t
                                }
                            }), s
                        } catch (e) {
                            throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(e), e
                        }
                    }, this.unsubscribe = async (e, t) => {
                        await this.restartToComplete(), this.isInitialized(), "u" > typeof(null == t ? void 0 : t.id) ? await this.unsubscribeById(e, t.id, t) : await this.unsubscribeByTopic(e, t)
                    }, this.isSubscribed = async e => {
                        if (this.topics.includes(e)) return !0;
                        let t = "".concat(this.pendingSubscriptionWatchLabel, "_").concat(e);
                        return await new Promise((r, i) => {
                            let s = new Q.Watch;
                            s.start(t);
                            let n = setInterval(() => {
                                !this.pending.has(e) && this.topics.includes(e) && (clearInterval(n), s.stop(t), r(!0)), s.elapsed(t) >= tv && (clearInterval(n), s.stop(t), i(Error("Subscription resolution timeout")))
                            }, this.pollingInterval)
                        }).catch(() => !1)
                    }, this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.restart = async () => {
                        this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1
                    }, this.relayer = e, this.logger = (0, L.generateChildLogger)(t, this.name), this.clientId = ""
                }
            }
            var tV = Object.defineProperty,
                tK = Object.getOwnPropertySymbols,
                tH = Object.prototype.hasOwnProperty,
                tJ = Object.prototype.propertyIsEnumerable,
                tW = (e, t, r) => t in e ? tV(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                tG = (e, t) => {
                    for (var r in t || (t = {})) tH.call(t, r) && tW(e, r, t[r]);
                    if (tK)
                        for (var r of tK(t)) tJ.call(t, r) && tW(e, r, t[r]);
                    return e
                };
            class tZ extends z {
                async init() {
                    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
                    try {
                        await this.transportOpen()
                    } catch (e) {
                        this.logger.warn("Connection via ".concat(this.relayUrl, " failed, attempting to connect via failover domain ").concat(tf, "...")), await this.restartTransport(tf)
                    }
                    this.initialized = !0, setTimeout(async () => {
                        0 === this.subscriber.topics.length && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1)
                    }, 1e4)
                }
                get context() {
                    return (0, L.getLoggerContext)(this.logger)
                }
                get connected() {
                    return this.provider.connection.connected
                }
                get connecting() {
                    return this.provider.connection.connecting
                }
                async publish(e, t, r) {
                    this.isInitialized(), await this.publisher.publish(e, t, r), await this.recordMessageEvent({
                        topic: e,
                        message: t,
                        publishedAt: Date.now()
                    })
                }
                async subscribe(e, t) {
                    var r;
                    let i;
                    this.isInitialized();
                    let s = (null == (r = this.subscriber.topicMap.get(e)) ? void 0 : r[0]) || "";
                    if (s) return s;
                    let n = t => {
                        t.topic === e && (this.subscriber.off(tb.created, n), i())
                    };
                    return await Promise.all([new Promise(e => {
                        i = e, this.subscriber.on(tb.created, n)
                    }), new Promise(async r => {
                        s = await this.subscriber.subscribe(e, t), r()
                    })]), s
                }
                async unsubscribe(e, t) {
                    this.isInitialized(), await this.subscriber.unsubscribe(e, t)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async transportClose() {
                    this.requestsInFlight.size > 0 && (this.logger.debug("Waiting for all in-flight requests to finish before closing transport..."), this.requestsInFlight.forEach(async e => {
                        await e.promise
                    })), this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await (0, ea.hF)(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect()
                }
                async transportOpen(e) {
                    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
                        e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
                        try {
                            await Promise.all([new Promise(e => {
                                if (!this.initialized) return e();
                                this.subscriber.once(tb.resubscribed, () => {
                                    e()
                                })
                            }), new Promise(async (e, t) => {
                                try {
                                    await (0, ea.hF)(this.provider.connect(), 1e4, "Socket stalled when trying to connect to ".concat(this.relayUrl))
                                } catch (e) {
                                    t(e);
                                    return
                                }
                                e()
                            })])
                        } catch (e) {
                            if (this.logger.error(e), !this.isConnectionStalled(e.message)) throw e;
                            this.provider.events.emit(ty.disconnect)
                        } finally {
                            this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1
                        }
                    }
                }
                async restartTransport(e) {
                    await this.confirmOnlineStateOrThrow(), this.connectionAttemptInProgress || (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen())
                }
                async confirmOnlineStateOrThrow() {
                    if (!await (0, ea.Gg)()) throw Error("No internet connection detected. Please restart your network and try again.")
                }
                isConnectionStalled(e) {
                    return this.staleConnectionErrors.some(t => e.includes(t))
                }
                async createProvider() {
                    this.provider.connection && this.unregisterProviderListeners();
                    let e = await this.core.crypto.signJWT(this.relayUrl);
                    this.provider = new eu.r(new ef((0, ea.$0)({
                        sdkVersion: "2.11.1",
                        protocol: this.protocol,
                        version: this.version,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId,
                        auth: e,
                        useOnCloseEvent: !0,
                        bundleId: this.bundleId
                    }))), this.registerProviderListeners()
                }
                async recordMessageEvent(e) {
                    let {
                        topic: t,
                        message: r
                    } = e;
                    await this.messages.set(t, r)
                }
                async shouldIgnoreMessageEvent(e) {
                    let {
                        topic: t,
                        message: r
                    } = e;
                    if (!r || 0 === r.length) return this.logger.debug("Ignoring invalid/empty message: ".concat(r)), !0;
                    if (!await this.subscriber.isSubscribed(t)) return this.logger.debug("Ignoring message for non-subscribed topic ".concat(t)), !0;
                    let i = this.messages.has(t, r);
                    return i && this.logger.debug("Ignoring duplicate message: ".concat(r)), i
                }
                async onProviderPayload(e) {
                    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
                            type: "payload",
                            direction: "incoming",
                            payload: e
                        }), (0, el.isJsonRpcRequest)(e)) {
                        if (!e.method.endsWith("_subscription")) return;
                        let t = e.params,
                            {
                                topic: r,
                                message: i,
                                publishedAt: s
                            } = t.data,
                            n = {
                                topic: r,
                                message: i,
                                publishedAt: s
                            };
                        this.logger.debug("Emitting Relayer Payload"), this.logger.trace(tG({
                            type: "event",
                            event: t.id
                        }, n)), this.events.emit(t.id, n), await this.acknowledgePayload(e), await this.onMessageEvent(n)
                    } else(0, el.isJsonRpcResponse)(e) && this.events.emit(tg.message_ack, e)
                }
                async onMessageEvent(e) {
                    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(tg.message, e), await this.recordMessageEvent(e))
                }
                async acknowledgePayload(e) {
                    let t = (0, el.formatJsonRpcResult)(e.id, !0);
                    await this.provider.connection.send(t)
                }
                unregisterProviderListeners() {
                    this.provider.off(ty.payload, this.onPayloadHandler), this.provider.off(ty.connect, this.onConnectHandler), this.provider.off(ty.disconnect, this.onDisconnectHandler), this.provider.off(ty.error, this.onProviderErrorHandler)
                }
                async registerEventListeners() {
                    this.events.on(tg.connection_stalled, () => {
                        this.restartTransport().catch(e => this.logger.error(e))
                    });
                    let e = await (0, ea.Gg)();
                    (0, ea.uw)(async t => {
                        this.initialized && e !== t && (e = t, t ? await this.restartTransport().catch(e => this.logger.error(e)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch(e => this.logger.error(e))))
                    })
                }
                onProviderDisconnect() {
                    this.events.emit(tg.disconnect), this.attemptToReconnect()
                }
                attemptToReconnect() {
                    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
                        await this.restartTransport().catch(e => this.logger.error(e))
                    }, (0, Q.toMiliseconds)(tm)))
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, ea.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                async toEstablishConnection() {
                    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
                        if (this.connectionAttemptInProgress) return await new Promise(e => {
                            let t = setInterval(() => {
                                this.connected && (clearInterval(t), e())
                            }, this.connectionStatusPollingInterval)
                        });
                        await this.restartTransport()
                    }
                }
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.events = new s.EventEmitter, this.name = "relayer", this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.requestsInFlight = new Map, this.request = async e => {
                        this.logger.debug("Publishing Request Payload");
                        let t = e.id,
                            r = this.provider.request(e);
                        this.requestsInFlight.set(t, {
                            promise: r,
                            request: e
                        });
                        try {
                            return await this.toEstablishConnection(), await r
                        } catch (e) {
                            throw this.logger.debug("Failed to Publish Request"), this.logger.error(e), e
                        } finally {
                            this.requestsInFlight.delete(t)
                        }
                    }, this.onPayloadHandler = e => {
                        this.onProviderPayload(e)
                    }, this.onConnectHandler = () => {
                        this.events.emit(tg.connect)
                    }, this.onDisconnectHandler = () => {
                        this.onProviderDisconnect()
                    }, this.onProviderErrorHandler = e => {
                        this.logger.error(e), this.events.emit(tg.error, e), this.logger.info("Fatal socket error received, closing transport"), this.transportClose()
                    }, this.registerProviderListeners = () => {
                        this.provider.on(ty.payload, this.onPayloadHandler), this.provider.on(ty.connect, this.onConnectHandler), this.provider.on(ty.disconnect, this.onDisconnectHandler), this.provider.on(ty.error, this.onProviderErrorHandler)
                    }, this.core = e.core, this.logger = "u" > typeof e.logger && "string" != typeof e.logger ? (0, L.generateChildLogger)(e.logger, this.name) : (0, L.pino)((0, L.getDefaultLoggerOptions)({
                        level: e.logger || "error"
                    })), this.messages = new tA(this.logger, e.core), this.subscriber = new tB(this, this.logger), this.publisher = new tN(this, this.logger), this.relayUrl = (null == e ? void 0 : e.relayUrl) || tp, this.projectId = e.projectId, this.bundleId = (0, ea.X_)(), this.provider = {}
                }
            }
            var tY = Object.defineProperty,
                tQ = Object.getOwnPropertySymbols,
                tX = Object.prototype.hasOwnProperty,
                t$ = Object.prototype.propertyIsEnumerable,
                t0 = (e, t, r) => t in e ? tY(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                t1 = (e, t) => {
                    for (var r in t || (t = {})) tX.call(t, r) && t0(e, r, t[r]);
                    if (tQ)
                        for (var r of tQ(t)) t$.call(t, r) && t0(e, r, t[r]);
                    return e
                };
            class t3 extends B {
                get context() {
                    return (0, L.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.map.size
                }
                get keys() {
                    return Array.from(this.map.keys())
                }
                get values() {
                    return Array.from(this.map.values())
                }
                async setDataStore(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getDataStore() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getData(e) {
                    let t = this.map.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = (0, ea.Z7)("NO_MATCHING_KEY", "".concat(this.name, ": ").concat(e));
                        throw this.logger.error(t), Error(t)
                    }
                    return t
                }
                async persist() {
                    await this.setDataStore(this.values)
                }
                async restore() {
                    try {
                        let e = await this.getDataStore();
                        if (typeof e > "u" || !e.length) return;
                        if (this.map.size) {
                            let {
                                message: e
                            } = (0, ea.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), Error(e)
                        }
                        this.cached = e, this.logger.debug("Successfully Restored value for ".concat(this.name)), this.logger.trace({
                            type: "method",
                            method: "restore",
                            value: this.values
                        })
                    } catch (e) {
                        this.logger.debug("Failed to Restore value for ".concat(this.name)), this.logger.error(e)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, ea.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                constructor(e, t, r, i = ta, s) {
                    super(e, t, r, i), this.core = e, this.logger = t, this.name = r, this.map = new Map, this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = ta, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => {
                            this.getKey && null !== e && !(0, ea.o8)(e) ? this.map.set(this.getKey(e), e) : (0, ea.xW)(e) ? this.map.set(e.id, e) : (0, ea.h1)(e) && this.map.set(e.topic, e)
                        }), this.cached = [], this.initialized = !0)
                    }, this.set = async (e, t) => {
                        this.isInitialized(), this.map.has(e) ? await this.update(e, t) : (this.logger.debug("Setting value"), this.logger.trace({
                            type: "method",
                            method: "set",
                            key: e,
                            value: t
                        }), this.map.set(e, t), await this.persist())
                    }, this.get = e => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                        type: "method",
                        method: "get",
                        key: e
                    }), this.getData(e)), this.getAll = e => (this.isInitialized(), e ? this.values.filter(t => Object.keys(e).every(r => ey()(t[r], e[r]))) : this.values), this.update = async (e, t) => {
                        this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                            type: "method",
                            method: "update",
                            key: e,
                            update: t
                        });
                        let r = t1(t1({}, this.getData(e)), t);
                        this.map.set(e, r), await this.persist()
                    }, this.delete = async (e, t) => {
                        this.isInitialized(), this.map.has(e) && (this.logger.debug("Deleting value"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            key: e,
                            reason: t
                        }), this.map.delete(e), await this.persist())
                    }, this.logger = (0, L.generateChildLogger)(t, this.name), this.storagePrefix = i, this.getKey = s
                }
            }
            class t5 {
                get context() {
                    return (0, L.getLoggerContext)(this.logger)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, ea.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                registerRelayerEvents() {
                    this.core.relayer.on(tg.message, async e => {
                        let {
                            topic: t,
                            message: r
                        } = e;
                        if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))) return;
                        let i = await this.core.crypto.decode(t, r);
                        try {
                            (0, el.isJsonRpcRequest)(i) ? (this.core.history.set(t, i), this.onRelayEventRequest({
                                topic: t,
                                payload: i
                            })) : (0, el.isJsonRpcResponse)(i) && (await this.core.history.resolve(i), await this.onRelayEventResponse({
                                topic: t,
                                payload: i
                            }), this.core.history.delete(t, i.id))
                        } catch (e) {
                            this.logger.error(e)
                        }
                    })
                }
                registerExpirerEvents() {
                    this.core.expirer.on(t_.expired, async e => {
                        let {
                            topic: t
                        } = (0, ea.iP)(e.target);
                        t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit(tw.expire, {
                            topic: t
                        }))
                    })
                }
                constructor(e, t) {
                    this.core = e, this.logger = t, this.name = "pairing", this.version = "0.3", this.events = new(n()), this.initialized = !1, this.storagePrefix = ta, this.ignoredPayloadTypes = [ea.rV], this.registeredMethods = [], this.init = async () => {
                        this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"))
                    }, this.register = e => {
                        let {
                            methods: t
                        } = e;
                        this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...t])]
                    }, this.create = async () => {
                        this.isInitialized();
                        let e = (0, ea.jd)(),
                            t = await this.core.crypto.setSymKey(e),
                            r = (0, ea.gn)(Q.FIVE_MINUTES),
                            i = {
                                protocol: "irn"
                            },
                            s = (0, ea.Bv)({
                                protocol: this.core.protocol,
                                version: this.core.version,
                                topic: t,
                                symKey: e,
                                relay: i,
                                expiryTimestamp: r
                            });
                        return await this.pairings.set(t, {
                            topic: t,
                            expiry: r,
                            relay: i,
                            active: !1
                        }), await this.core.relayer.subscribe(t), this.core.expirer.set(t, r), {
                            topic: t,
                            uri: s
                        }
                    }, this.pair = async e => {
                        this.isInitialized(), this.isValidPair(e);
                        let {
                            topic: t,
                            symKey: r,
                            relay: i,
                            expiryTimestamp: s
                        } = (0, ea.he)(e.uri);
                        if (this.pairings.keys.includes(t) && this.pairings.get(t).active) throw Error("Pairing already exists: ".concat(t, ". Please try again with a new connection URI."));
                        let n = s || (0, ea.gn)(Q.FIVE_MINUTES),
                            o = {
                                topic: t,
                                relay: i,
                                expiry: n,
                                active: !1
                            };
                        return await this.pairings.set(t, o), this.core.expirer.set(t, n), e.activatePairing && await this.activate({
                            topic: t
                        }), this.events.emit(tw.create, o), this.core.crypto.keychain.has(t) || (await this.core.crypto.setSymKey(r, t), await this.core.relayer.subscribe(t, {
                            relay: i
                        })), o
                    }, this.activate = async e => {
                        let {
                            topic: t
                        } = e;
                        this.isInitialized();
                        let r = (0, ea.gn)(Q.THIRTY_DAYS);
                        await this.pairings.update(t, {
                            active: !0,
                            expiry: r
                        }), this.core.expirer.set(t, r)
                    }, this.ping = async e => {
                        this.isInitialized(), await this.isValidPing(e);
                        let {
                            topic: t
                        } = e;
                        if (this.pairings.keys.includes(t)) {
                            let e = await this.sendRequest(t, "wc_pairingPing", {}),
                                {
                                    done: r,
                                    resolve: i,
                                    reject: s
                                } = (0, ea.H1)();
                            this.events.once((0, ea.E0)("pairing_ping", e), e => {
                                let {
                                    error: t
                                } = e;
                                t ? s(t) : i()
                            }), await r()
                        }
                    }, this.updateExpiry = async e => {
                        let {
                            topic: t,
                            expiry: r
                        } = e;
                        this.isInitialized(), await this.pairings.update(t, {
                            expiry: r
                        })
                    }, this.updateMetadata = async e => {
                        let {
                            topic: t,
                            metadata: r
                        } = e;
                        this.isInitialized(), await this.pairings.update(t, {
                            peerMetadata: r
                        })
                    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async e => {
                        this.isInitialized(), await this.isValidDisconnect(e);
                        let {
                            topic: t
                        } = e;
                        this.pairings.keys.includes(t) && (await this.sendRequest(t, "wc_pairingDelete", (0, ea.D6)("USER_DISCONNECTED")), await this.deletePairing(t))
                    }, this.sendRequest = async (e, t, r) => {
                        let i = (0, el.formatJsonRpcRequest)(t, r),
                            s = await this.core.crypto.encode(e, i),
                            n = tD[t].req;
                        return this.core.history.set(e, i), this.core.relayer.publish(e, s, n), i.id
                    }, this.sendResult = async (e, t, r) => {
                        let i = (0, el.formatJsonRpcResult)(e, r),
                            s = await this.core.crypto.encode(t, i),
                            n = tD[(await this.core.history.get(t, e)).request.method].res;
                        await this.core.relayer.publish(t, s, n), await this.core.history.resolve(i)
                    }, this.sendError = async (e, t, r) => {
                        let i = (0, el.formatJsonRpcError)(e, r),
                            s = await this.core.crypto.encode(t, i),
                            n = await this.core.history.get(t, e),
                            o = tD[n.request.method] ? tD[n.request.method].res : tD.unregistered_method.res;
                        await this.core.relayer.publish(t, s, o), await this.core.history.resolve(i)
                    }, this.deletePairing = async (e, t) => {
                        await this.core.relayer.unsubscribe(e), await Promise.all([this.pairings.delete(e, (0, ea.D6)("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(e), t ? Promise.resolve() : this.core.expirer.del(e)])
                    }, this.cleanup = async () => {
                        let e = this.pairings.getAll().filter(e => (0, ea.Bw)(e.expiry));
                        await Promise.all(e.map(e => this.deletePairing(e.topic)))
                    }, this.onRelayEventRequest = e => {
                        let {
                            topic: t,
                            payload: r
                        } = e;
                        switch (r.method) {
                            case "wc_pairingPing":
                                return this.onPairingPingRequest(t, r);
                            case "wc_pairingDelete":
                                return this.onPairingDeleteRequest(t, r);
                            default:
                                return this.onUnknownRpcMethodRequest(t, r)
                        }
                    }, this.onRelayEventResponse = async e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, i = (await this.core.history.get(t, r.id)).request.method;
                        return "wc_pairingPing" === i ? this.onPairingPingResponse(t, r) : this.onUnknownRpcMethodResponse(i)
                    }, this.onPairingPingRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidPing({
                                topic: e
                            }), await this.sendResult(r, e, !0), this.events.emit(tw.ping, {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.logger.error(t)
                        }
                    }, this.onPairingPingResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        setTimeout(() => {
                            (0, el.isJsonRpcResult)(t) ? this.events.emit((0, ea.E0)("pairing_ping", r), {}): (0, el.isJsonRpcError)(t) && this.events.emit((0, ea.E0)("pairing_ping", r), {
                                error: t.error
                            })
                        }, 500)
                    }, this.onPairingDeleteRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidDisconnect({
                                topic: e
                            }), await this.deletePairing(e), this.events.emit(tw.delete, {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.logger.error(t)
                        }
                    }, this.onUnknownRpcMethodRequest = async (e, t) => {
                        let {
                            id: r,
                            method: i
                        } = t;
                        try {
                            if (this.registeredMethods.includes(i)) return;
                            let t = (0, ea.D6)("WC_METHOD_UNSUPPORTED", i);
                            await this.sendError(r, e, t), this.logger.error(t)
                        } catch (t) {
                            await this.sendError(r, e, t), this.logger.error(t)
                        }
                    }, this.onUnknownRpcMethodResponse = e => {
                        this.registeredMethods.includes(e) || this.logger.error((0, ea.D6)("WC_METHOD_UNSUPPORTED", e))
                    }, this.isValidPair = e => {
                        var t;
                        if (!(0, ea.EJ)(e)) {
                            let {
                                message: t
                            } = (0, ea.Z7)("MISSING_OR_INVALID", "pair() params: ".concat(e));
                            throw Error(t)
                        }
                        if (!(0, ea.jv)(e.uri)) {
                            let {
                                message: t
                            } = (0, ea.Z7)("MISSING_OR_INVALID", "pair() uri: ".concat(e.uri));
                            throw Error(t)
                        }
                        let r = (0, ea.he)(e.uri);
                        if (!(null != (t = null == r ? void 0 : r.relay) && t.protocol)) {
                            let {
                                message: e
                            } = (0, ea.Z7)("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                            throw Error(e)
                        }
                        if (!(null != r && r.symKey)) {
                            let {
                                message: e
                            } = (0, ea.Z7)("MISSING_OR_INVALID", "pair() uri#symKey");
                            throw Error(e)
                        }
                        if (null != r && r.expiryTimestamp && (0, Q.toMiliseconds)(null == r ? void 0 : r.expiryTimestamp) < Date.now()) {
                            let {
                                message: e
                            } = (0, ea.Z7)("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
                            throw Error(e)
                        }
                    }, this.isValidPing = async e => {
                        if (!(0, ea.EJ)(e)) {
                            let {
                                message: t
                            } = (0, ea.Z7)("MISSING_OR_INVALID", "ping() params: ".concat(e));
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidPairingTopic(t)
                    }, this.isValidDisconnect = async e => {
                        if (!(0, ea.EJ)(e)) {
                            let {
                                message: t
                            } = (0, ea.Z7)("MISSING_OR_INVALID", "disconnect() params: ".concat(e));
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidPairingTopic(t)
                    }, this.isValidPairingTopic = async e => {
                        if (!(0, ea.M_)(e, !1)) {
                            let {
                                message: t
                            } = (0, ea.Z7)("MISSING_OR_INVALID", "pairing topic should be a string: ".concat(e));
                            throw Error(t)
                        }
                        if (!this.pairings.keys.includes(e)) {
                            let {
                                message: t
                            } = (0, ea.Z7)("NO_MATCHING_KEY", "pairing topic doesn't exist: ".concat(e));
                            throw Error(t)
                        }
                        if ((0, ea.Bw)(this.pairings.get(e).expiry)) {
                            await this.deletePairing(e);
                            let {
                                message: t
                            } = (0, ea.Z7)("EXPIRED", "pairing topic: ".concat(e));
                            throw Error(t)
                        }
                    }, this.core = e, this.logger = (0, L.generateChildLogger)(t, this.name), this.pairings = new t3(this.core, this.logger, this.name, this.storagePrefix)
                }
            }
            class t6 extends k {
                get context() {
                    return (0, L.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get size() {
                    return this.records.size
                }
                get keys() {
                    return Array.from(this.records.keys())
                }
                get values() {
                    return Array.from(this.records.values())
                }
                get pending() {
                    let e = [];
                    return this.values.forEach(t => {
                        if ("u" > typeof t.response) return;
                        let r = {
                            topic: t.topic,
                            request: (0, el.formatJsonRpcRequest)(t.request.method, t.request.params, t.id),
                            chainId: t.chainId
                        };
                        return e.push(r)
                    }), e
                }
                async setJsonRpcRecords(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getJsonRpcRecords() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getRecord(e) {
                    this.isInitialized();
                    let t = this.records.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = (0, ea.Z7)("NO_MATCHING_KEY", "".concat(this.name, ": ").concat(e));
                        throw Error(t)
                    }
                    return t
                }
                async persist() {
                    await this.setJsonRpcRecords(this.values), this.events.emit(tE.sync)
                }
                async restore() {
                    try {
                        let e = await this.getJsonRpcRecords();
                        if (typeof e > "u" || !e.length) return;
                        if (this.records.size) {
                            let {
                                message: e
                            } = (0, ea.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), Error(e)
                        }
                        this.cached = e, this.logger.debug("Successfully Restored records for ".concat(this.name)), this.logger.trace({
                            type: "method",
                            method: "restore",
                            records: this.values
                        })
                    } catch (e) {
                        this.logger.debug("Failed to Restore records for ".concat(this.name)), this.logger.error(e)
                    }
                }
                registerEventListeners() {
                    this.events.on(tE.created, e => {
                        let t = tE.created;
                        this.logger.info("Emitting ".concat(t)), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.events.on(tE.updated, e => {
                        let t = tE.updated;
                        this.logger.info("Emitting ".concat(t)), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.events.on(tE.deleted, e => {
                        let t = tE.deleted;
                        this.logger.info("Emitting ".concat(t)), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.core.heartbeat.on(U.HEARTBEAT_EVENTS.pulse, () => {
                        this.cleanup()
                    })
                }
                cleanup() {
                    try {
                        this.records.forEach(e => {
                            (0, Q.toMiliseconds)(e.expiry || 0) - Date.now() <= 0 && (this.logger.info("Deleting expired history log: ".concat(e.id)), this.delete(e.topic, e.id))
                        })
                    } catch (e) {
                        this.logger.warn(e)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, ea.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                constructor(e, t) {
                    super(e, t), this.core = e, this.logger = t, this.records = new Map, this.events = new s.EventEmitter, this.name = "history", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = ta, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => this.records.set(e.id, e)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.set = (e, t, r) => {
                        if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                                type: "method",
                                method: "set",
                                topic: e,
                                request: t,
                                chainId: r
                            }), this.records.has(t.id)) return;
                        let i = {
                            id: t.id,
                            topic: e,
                            request: {
                                method: t.method,
                                params: t.params || null
                            },
                            chainId: r,
                            expiry: (0, ea.gn)(Q.THIRTY_DAYS)
                        };
                        this.records.set(i.id, i), this.events.emit(tE.created, i)
                    }, this.resolve = async e => {
                        if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                                type: "method",
                                method: "update",
                                response: e
                            }), !this.records.has(e.id)) return;
                        let t = await this.getRecord(e.id);
                        typeof t.response > "u" && (t.response = (0, el.isJsonRpcError)(e) ? {
                            error: e.error
                        } : {
                            result: e.result
                        }, this.records.set(t.id, t), this.events.emit(tE.updated, t))
                    }, this.get = async (e, t) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
                        type: "method",
                        method: "get",
                        topic: e,
                        id: t
                    }), await this.getRecord(t)), this.delete = (e, t) => {
                        this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            id: t
                        }), this.values.forEach(r => {
                            r.topic !== e || "u" > typeof t && r.id !== t || (this.records.delete(r.id), this.events.emit(tE.deleted, r))
                        })
                    }, this.exists = async (e, t) => (this.isInitialized(), !!this.records.has(t) && (await this.getRecord(t)).topic === e), this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.logger = (0, L.generateChildLogger)(t, this.name)
                }
            }
            class t8 extends K {
                get context() {
                    return (0, L.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.expirations.size
                }
                get keys() {
                    return Array.from(this.expirations.keys())
                }
                get values() {
                    return Array.from(this.expirations.values())
                }
                formatTarget(e) {
                    if ("string" == typeof e) return (0, ea.Z4)(e);
                    if ("number" == typeof e) return (0, ea.Gq)(e);
                    let {
                        message: t
                    } = (0, ea.Z7)("UNKNOWN_TYPE", "Target type: ".concat(typeof e));
                    throw Error(t)
                }
                async setExpirations(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getExpirations() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                async persist() {
                    await this.setExpirations(this.values), this.events.emit(t_.sync)
                }
                async restore() {
                    try {
                        let e = await this.getExpirations();
                        if (typeof e > "u" || !e.length) return;
                        if (this.expirations.size) {
                            let {
                                message: e
                            } = (0, ea.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), Error(e)
                        }
                        this.cached = e, this.logger.debug("Successfully Restored expirations for ".concat(this.name)), this.logger.trace({
                            type: "method",
                            method: "restore",
                            expirations: this.values
                        })
                    } catch (e) {
                        this.logger.debug("Failed to Restore expirations for ".concat(this.name)), this.logger.error(e)
                    }
                }
                getExpiration(e) {
                    let t = this.expirations.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = (0, ea.Z7)("NO_MATCHING_KEY", "".concat(this.name, ": ").concat(e));
                        throw this.logger.error(t), Error(t)
                    }
                    return t
                }
                checkExpiry(e, t) {
                    let {
                        expiry: r
                    } = t;
                    (0, Q.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, t)
                }
                expire(e, t) {
                    this.expirations.delete(e), this.events.emit(t_.expired, {
                        target: e,
                        expiration: t
                    })
                }
                checkExpirations() {
                    this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e))
                }
                registerEventListeners() {
                    this.core.heartbeat.on(U.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(t_.created, e => {
                        let t = t_.created;
                        this.logger.info("Emitting ".concat(t)), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    }), this.events.on(t_.expired, e => {
                        let t = t_.expired;
                        this.logger.info("Emitting ".concat(t)), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    }), this.events.on(t_.deleted, e => {
                        let t = t_.deleted;
                        this.logger.info("Emitting ".concat(t)), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    })
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, ea.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                constructor(e, t) {
                    super(e, t), this.core = e, this.logger = t, this.expirations = new Map, this.events = new s.EventEmitter, this.name = "expirer", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = ta, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => this.expirations.set(e.target, e)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.has = e => {
                        try {
                            let t = this.formatTarget(e);
                            return "u" > typeof this.getExpiration(t)
                        } catch (e) {
                            return !1
                        }
                    }, this.set = (e, t) => {
                        this.isInitialized();
                        let r = this.formatTarget(e),
                            i = {
                                target: r,
                                expiry: t
                            };
                        this.expirations.set(r, i), this.checkExpiry(r, i), this.events.emit(t_.created, {
                            target: r,
                            expiration: i
                        })
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.formatTarget(e);
                        return this.getExpiration(t)
                    }, this.del = e => {
                        if (this.isInitialized(), this.has(e)) {
                            let t = this.formatTarget(e),
                                r = this.getExpiration(t);
                            this.expirations.delete(t), this.events.emit(t_.deleted, {
                                target: t,
                                expiration: r
                            })
                        }
                    }, this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.logger = (0, L.generateChildLogger)(t, this.name)
                }
            }
            class t2 extends H {
                get context() {
                    return (0, L.getLoggerContext)(this.logger)
                }
                startAbortTimer(e) {
                    return this.abortController = new AbortController, setTimeout(() => this.abortController.abort(), (0, Q.toMiliseconds)(e))
                }
                constructor(e, t) {
                    super(e, t), this.projectId = e, this.logger = t, this.name = tI, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async e => {
                        if (this.verifyDisabled || (0, ea.b$)() || !(0, ea.jU)()) return;
                        let t = this.getVerifyUrl(null == e ? void 0 : e.verifyUrl);
                        this.verifyUrl !== t && this.removeIframe(), this.verifyUrl = t;
                        try {
                            await this.createIframe()
                        } catch (e) {
                            this.logger.info("Verify iframe failed to load: ".concat(this.verifyUrl)), this.logger.info(e)
                        }
                        if (!this.initialized) {
                            this.removeIframe(), this.verifyUrl = tO;
                            try {
                                await this.createIframe()
                            } catch (e) {
                                this.logger.info("Verify iframe failed to load: ".concat(this.verifyUrl)), this.logger.info(e), this.verifyDisabled = !0
                            }
                        }
                    }, this.register = async e => {
                        this.initialized ? this.sendPost(e.attestationId) : (this.addToQueue(e.attestationId), await this.init())
                    }, this.resolve = async e => {
                        let t;
                        if (this.isDevEnv) return "";
                        let r = this.getVerifyUrl(null == e ? void 0 : e.verifyUrl);
                        try {
                            t = await this.fetchAttestation(e.attestationId, r)
                        } catch (i) {
                            this.logger.info("failed to resolve attestation: ".concat(e.attestationId, " from url: ").concat(r)), this.logger.info(i), t = await this.fetchAttestation(e.attestationId, tO)
                        }
                        return t
                    }, this.fetchAttestation = async (e, t) => {
                        this.logger.info("resolving attestation: ".concat(e, " from url: ").concat(t));
                        let r = this.startAbortTimer(2 * Q.ONE_SECOND),
                            i = await fetch("".concat(t, "/attestation/").concat(e), {
                                signal: this.abortController.signal
                            });
                        return clearTimeout(r), 200 === i.status ? await i.json() : void 0
                    }, this.addToQueue = e => {
                        this.queue.push(e)
                    }, this.processQueue = () => {
                        0 !== this.queue.length && (this.queue.forEach(e => this.sendPost(e)), this.queue = [])
                    }, this.sendPost = e => {
                        var t;
                        try {
                            if (!this.iframe) return;
                            null == (t = this.iframe.contentWindow) || t.postMessage(e, "*"), this.logger.info("postMessage sent: ".concat(e, " ").concat(this.verifyUrl))
                        } catch (e) {}
                    }, this.createIframe = async () => {
                        let e;
                        let t = r => {
                            "verify_ready" === r.data && (this.initialized = !0, this.processQueue(), window.removeEventListener("message", t), e())
                        };
                        await Promise.race([new Promise(r => {
                            if (document.getElementById(tI)) return r();
                            window.addEventListener("message", t);
                            let i = document.createElement("iframe");
                            i.id = tI, i.src = "".concat(this.verifyUrl, "/").concat(this.projectId), i.style.display = "none", document.body.append(i), this.iframe = i, e = r
                        }), new Promise((e, r) => setTimeout(() => {
                            window.removeEventListener("message", t), r("verify iframe load timeout")
                        }, (0, Q.toMiliseconds)(Q.FIVE_SECONDS)))])
                    }, this.removeIframe = () => {
                        this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1)
                    }, this.getVerifyUrl = e => {
                        let t = e || tS;
                        return tC.includes(t) || (this.logger.info("verify url: ".concat(t, ", not included in trusted list, assigning default: ").concat(tS)), t = tS), t
                    }, this.logger = (0, L.generateChildLogger)(t, this.name), this.verifyUrl = tS, this.abortController = new AbortController, this.isDevEnv = (0, ea.UG)() && ev.env.IS_VITEST
                }
            }
            class t4 extends J {
                constructor(e, t) {
                    super(e, t), this.projectId = e, this.logger = t, this.context = "echo", this.registerDeviceToken = async e => {
                        let {
                            clientId: t,
                            token: r,
                            notificationType: i,
                            enableEncrypted: s = !1
                        } = e, n = "".concat("https://echo.walletconnect.com", "/").concat(this.projectId, "/clients");
                        await eb()(n, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                client_id: t,
                                type: i,
                                token: r,
                                always_raw: s
                            })
                        })
                    }, this.logger = (0, L.generateChildLogger)(t, this.context)
                }
            }
            var t7 = Object.defineProperty,
                t9 = Object.getOwnPropertySymbols,
                re = Object.prototype.hasOwnProperty,
                rt = Object.prototype.propertyIsEnumerable,
                rr = (e, t, r) => t in e ? t7(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                ri = (e, t) => {
                    for (var r in t || (t = {})) re.call(t, r) && rr(e, r, t[r]);
                    if (t9)
                        for (var r of t9(t)) rt.call(t, r) && rr(e, r, t[r]);
                    return e
                };
            class rs extends j {
                static async init(e) {
                    let t = new rs(e);
                    await t.initialize();
                    let r = await t.crypto.getClientId();
                    return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", r), t
                }
                get context() {
                    return (0, L.getLoggerContext)(this.logger)
                }
                async start() {
                    this.initialized || await this.initialize()
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success")
                    } catch (e) {
                        throw this.logger.warn("Core Initialization Failure at epoch ".concat(Date.now()), e), this.logger.error(e.message), e
                    }
                }
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.name = to, this.events = new s.EventEmitter, this.initialized = !1, this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), this.projectId = null == e ? void 0 : e.projectId, this.relayUrl = (null == e ? void 0 : e.relayUrl) || tp, this.customStoragePrefix = null != e && e.customStoragePrefix ? ":".concat(e.customStoragePrefix) : "";
                    let t = "u" > typeof(null == e ? void 0 : e.logger) && "string" != typeof(null == e ? void 0 : e.logger) ? e.logger : (0, L.pino)((0, L.getDefaultLoggerOptions)({
                        level: (null == e ? void 0 : e.logger) || tc.logger
                    }));
                    this.logger = (0, L.generateChildLogger)(t, this.name), this.heartbeat = new U.HeartBeat, this.crypto = new tP(this, this.logger, null == e ? void 0 : e.keychain), this.history = new t6(this, this.logger), this.expirer = new t8(this, this.logger), this.storage = null != e && e.storage ? e.storage : new T(ri(ri({}, tu), null == e ? void 0 : e.storageOptions)), this.relayer = new tZ({
                        core: this,
                        logger: this.logger,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId
                    }), this.pairing = new t5(this, this.logger), this.verify = new t2(this.projectId || "", this.logger), this.echoClient = new t4(this.projectId || "", this.logger)
                }
            }
            let rn = "client",
                ro = "".concat("wc", "@").concat(2, ":").concat(rn, ":"),
                ra = {
                    name: rn,
                    logger: "error"
                },
                rc = "WALLETCONNECT_DEEPLINK_CHOICE",
                ru = "Proposal expired",
                rl = Q.SEVEN_DAYS,
                rh = {
                    wc_sessionPropose: {
                        req: {
                            ttl: Q.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1100
                        },
                        res: {
                            ttl: Q.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1101
                        }
                    },
                    wc_sessionSettle: {
                        req: {
                            ttl: Q.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1102
                        },
                        res: {
                            ttl: Q.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1103
                        }
                    },
                    wc_sessionUpdate: {
                        req: {
                            ttl: Q.ONE_DAY,
                            prompt: !1,
                            tag: 1104
                        },
                        res: {
                            ttl: Q.ONE_DAY,
                            prompt: !1,
                            tag: 1105
                        }
                    },
                    wc_sessionExtend: {
                        req: {
                            ttl: Q.ONE_DAY,
                            prompt: !1,
                            tag: 1106
                        },
                        res: {
                            ttl: Q.ONE_DAY,
                            prompt: !1,
                            tag: 1107
                        }
                    },
                    wc_sessionRequest: {
                        req: {
                            ttl: Q.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1108
                        },
                        res: {
                            ttl: Q.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1109
                        }
                    },
                    wc_sessionEvent: {
                        req: {
                            ttl: Q.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1110
                        },
                        res: {
                            ttl: Q.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1111
                        }
                    },
                    wc_sessionDelete: {
                        req: {
                            ttl: Q.ONE_DAY,
                            prompt: !1,
                            tag: 1112
                        },
                        res: {
                            ttl: Q.ONE_DAY,
                            prompt: !1,
                            tag: 1113
                        }
                    },
                    wc_sessionPing: {
                        req: {
                            ttl: Q.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1114
                        },
                        res: {
                            ttl: Q.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1115
                        }
                    }
                },
                rd = {
                    min: Q.FIVE_MINUTES,
                    max: Q.SEVEN_DAYS
                },
                rp = {
                    idle: "IDLE",
                    active: "ACTIVE"
                },
                rf = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
            var rg = Object.defineProperty,
                ry = Object.defineProperties,
                rm = Object.getOwnPropertyDescriptors,
                rb = Object.getOwnPropertySymbols,
                rv = Object.prototype.hasOwnProperty,
                rD = Object.prototype.propertyIsEnumerable,
                rw = (e, t, r) => t in e ? rg(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                rE = (e, t) => {
                    for (var r in t || (t = {})) rv.call(t, r) && rw(e, r, t[r]);
                    if (rb)
                        for (var r of rb(t)) rD.call(t, r) && rw(e, r, t[r]);
                    return e
                },
                r_ = (e, t) => ry(e, rm(t));
            class rI extends G {
                async isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, ea.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                    await this.client.core.relayer.confirmOnlineStateOrThrow()
                }
                registerRelayerEvents() {
                    this.client.core.relayer.on(tg.message, async e => {
                        let {
                            topic: t,
                            message: r
                        } = e;
                        if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(r))) return;
                        let i = await this.client.core.crypto.decode(t, r);
                        try {
                            (0, el.isJsonRpcRequest)(i) ? (this.client.core.history.set(t, i), this.onRelayEventRequest({
                                topic: t,
                                payload: i
                            })) : (0, el.isJsonRpcResponse)(i) ? (await this.client.core.history.resolve(i), await this.onRelayEventResponse({
                                topic: t,
                                payload: i
                            }), this.client.core.history.delete(t, i.id)) : this.onRelayEventUnknownPayload({
                                topic: t,
                                payload: i
                            })
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    })
                }
                registerExpirerEvents() {
                    this.client.core.expirer.on(t_.expired, async e => {
                        let {
                            topic: t,
                            id: r
                        } = (0, ea.iP)(e.target);
                        if (r && this.client.pendingRequest.keys.includes(r)) return await this.deletePendingSessionRequest(r, (0, ea.Z7)("EXPIRED"), !0);
                        t ? this.client.session.keys.includes(t) && (await this.deleteSession({
                            topic: t,
                            expirerHasDeleted: !0
                        }), this.client.events.emit("session_expire", {
                            topic: t
                        })) : r && (await this.deleteProposal(r, !0), this.client.events.emit("proposal_expire", {
                            id: r
                        }))
                    })
                }
                registerPairingEvents() {
                    this.client.core.pairing.events.on(tw.create, e => this.onPairingCreated(e))
                }
                isValidPairingTopic(e) {
                    if (!(0, ea.M_)(e, !1)) {
                        let {
                            message: t
                        } = (0, ea.Z7)("MISSING_OR_INVALID", "pairing topic should be a string: ".concat(e));
                        throw Error(t)
                    }
                    if (!this.client.core.pairing.pairings.keys.includes(e)) {
                        let {
                            message: t
                        } = (0, ea.Z7)("NO_MATCHING_KEY", "pairing topic doesn't exist: ".concat(e));
                        throw Error(t)
                    }
                    if ((0, ea.Bw)(this.client.core.pairing.pairings.get(e).expiry)) {
                        let {
                            message: t
                        } = (0, ea.Z7)("EXPIRED", "pairing topic: ".concat(e));
                        throw Error(t)
                    }
                }
                async isValidSessionTopic(e) {
                    if (!(0, ea.M_)(e, !1)) {
                        let {
                            message: t
                        } = (0, ea.Z7)("MISSING_OR_INVALID", "session topic should be a string: ".concat(e));
                        throw Error(t)
                    }
                    if (!this.client.session.keys.includes(e)) {
                        let {
                            message: t
                        } = (0, ea.Z7)("NO_MATCHING_KEY", "session topic doesn't exist: ".concat(e));
                        throw Error(t)
                    }
                    if ((0, ea.Bw)(this.client.session.get(e).expiry)) {
                        await this.deleteSession({
                            topic: e
                        });
                        let {
                            message: t
                        } = (0, ea.Z7)("EXPIRED", "session topic: ".concat(e));
                        throw Error(t)
                    }
                    if (!this.client.core.crypto.keychain.has(e)) {
                        let {
                            message: t
                        } = (0, ea.Z7)("MISSING_OR_INVALID", "session topic does not exist in keychain: ".concat(e));
                        throw await this.deleteSession({
                            topic: e
                        }), Error(t)
                    }
                }
                async isValidSessionOrPairingTopic(e) {
                    if (this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
                    else if (this.client.core.pairing.pairings.keys.includes(e)) this.isValidPairingTopic(e);
                    else if ((0, ea.M_)(e, !1)) {
                        let {
                            message: t
                        } = (0, ea.Z7)("NO_MATCHING_KEY", "session or pairing topic doesn't exist: ".concat(e));
                        throw Error(t)
                    } else {
                        let {
                            message: t
                        } = (0, ea.Z7)("MISSING_OR_INVALID", "session or pairing topic should be a string: ".concat(e));
                        throw Error(t)
                    }
                }
                async isValidProposalId(e) {
                    if (!(0, ea.Q0)(e)) {
                        let {
                            message: t
                        } = (0, ea.Z7)("MISSING_OR_INVALID", "proposal id should be a number: ".concat(e));
                        throw Error(t)
                    }
                    if (!this.client.proposal.keys.includes(e)) {
                        let {
                            message: t
                        } = (0, ea.Z7)("NO_MATCHING_KEY", "proposal id doesn't exist: ".concat(e));
                        throw Error(t)
                    }
                    if ((0, ea.Bw)(this.client.proposal.get(e).expiryTimestamp)) {
                        await this.deleteProposal(e);
                        let {
                            message: t
                        } = (0, ea.Z7)("EXPIRED", "proposal id: ".concat(e));
                        throw Error(t)
                    }
                }
                constructor(e) {
                    var t;
                    super(e), t = this, this.name = "engine", this.events = new(n()), this.initialized = !1, this.ignoredPayloadTypes = [ea.rV], this.requestQueue = {
                        state: rp.idle,
                        queue: []
                    }, this.sessionRequestQueue = {
                        state: rp.idle,
                        queue: []
                    }, this.requestQueueDelay = Q.ONE_SECOND, this.init = async () => {
                        this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({
                            methods: Object.keys(rh)
                        }), this.initialized = !0, setTimeout(() => {
                            this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue()
                        }, (0, Q.toMiliseconds)(this.requestQueueDelay)))
                    }, this.connect = async e => {
                        await this.isInitialized();
                        let t = r_(rE({}, e), {
                            requiredNamespaces: e.requiredNamespaces || {},
                            optionalNamespaces: e.optionalNamespaces || {}
                        });
                        await this.isValidConnect(t);
                        let {
                            pairingTopic: r,
                            requiredNamespaces: i,
                            optionalNamespaces: s,
                            sessionProperties: n,
                            relays: o
                        } = t, a = r, c, u = !1;
                        if (a && (u = this.client.core.pairing.pairings.get(a).active), !a || !u) {
                            let {
                                topic: e,
                                uri: t
                            } = await this.client.core.pairing.create();
                            a = e, c = t
                        }
                        let l = await this.client.core.crypto.generateKeyPair(),
                            h = rh.wc_sessionPropose.req.ttl || Q.FIVE_MINUTES,
                            d = (0, ea.gn)(h),
                            p = rE({
                                requiredNamespaces: i,
                                optionalNamespaces: s,
                                relays: null != o ? o : [{
                                    protocol: "irn"
                                }],
                                proposer: {
                                    publicKey: l,
                                    metadata: this.client.metadata
                                },
                                expiryTimestamp: d
                            }, n && {
                                sessionProperties: n
                            }),
                            {
                                reject: f,
                                resolve: g,
                                done: y
                            } = (0, ea.H1)(h, ru);
                        if (this.events.once((0, ea.E0)("session_connect"), async e => {
                                let {
                                    error: t,
                                    session: r
                                } = e;
                                if (t) f(t);
                                else if (r) {
                                    r.self.publicKey = l;
                                    let e = r_(rE({}, r), {
                                        requiredNamespaces: p.requiredNamespaces,
                                        optionalNamespaces: p.optionalNamespaces
                                    });
                                    await this.client.session.set(r.topic, e), await this.setExpiry(r.topic, r.expiry), a && await this.client.core.pairing.updateMetadata({
                                        topic: a,
                                        metadata: r.peer.metadata
                                    }), g(e)
                                }
                            }), !a) {
                            let {
                                message: e
                            } = (0, ea.Z7)("NO_MATCHING_KEY", "connect() pairing topic: ".concat(a));
                            throw Error(e)
                        }
                        let m = await this.sendRequest({
                            topic: a,
                            method: "wc_sessionPropose",
                            params: p,
                            throwOnFailedPublish: !0
                        });
                        return await this.setProposal(m, rE({
                            id: m
                        }, p)), {
                            uri: c,
                            approval: y
                        }
                    }, this.pair = async e => (await this.isInitialized(), await this.client.core.pairing.pair(e)), this.approve = async e => {
                        await this.isInitialized(), await this.isValidApprove(e);
                        let {
                            id: t,
                            relayProtocol: r,
                            namespaces: i,
                            sessionProperties: s
                        } = e, {
                            pairingTopic: n,
                            proposer: o,
                            requiredNamespaces: a,
                            optionalNamespaces: c
                        } = this.client.proposal.get(t);
                        n = n || "";
                        let u = await this.client.core.crypto.generateKeyPair(),
                            l = o.publicKey,
                            h = await this.client.core.crypto.generateSharedKey(u, l);
                        n && t && (await this.client.core.pairing.updateMetadata({
                            topic: n,
                            metadata: o.metadata
                        }), await this.sendResult({
                            id: t,
                            topic: n,
                            result: {
                                relay: {
                                    protocol: null != r ? r : "irn"
                                },
                                responderPublicKey: u
                            }
                        }), await this.client.proposal.delete(t, (0, ea.D6)("USER_DISCONNECTED")), await this.client.core.pairing.activate({
                            topic: n
                        }));
                        let d = rE({
                            relay: {
                                protocol: null != r ? r : "irn"
                            },
                            namespaces: i,
                            pairingTopic: n,
                            controller: {
                                publicKey: u,
                                metadata: this.client.metadata
                            },
                            expiry: (0, ea.gn)(rl)
                        }, s && {
                            sessionProperties: s
                        });
                        await this.client.core.relayer.subscribe(h);
                        let p = r_(rE({}, d), {
                            topic: h,
                            requiredNamespaces: a,
                            optionalNamespaces: c,
                            pairingTopic: n,
                            acknowledged: !1,
                            self: d.controller,
                            peer: {
                                publicKey: o.publicKey,
                                metadata: o.metadata
                            },
                            controller: u
                        });
                        await this.client.session.set(h, p);
                        try {
                            await this.sendRequest({
                                topic: h,
                                method: "wc_sessionSettle",
                                params: d,
                                throwOnFailedPublish: !0
                            })
                        } catch (e) {
                            throw this.client.logger.error(e), this.client.session.delete(h, (0, ea.D6)("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(h), e
                        }
                        return await this.setExpiry(h, (0, ea.gn)(rl)), {
                            topic: h,
                            acknowledged: () => new Promise(e => setTimeout(() => e(this.client.session.get(h)), 500))
                        }
                    }, this.reject = async e => {
                        await this.isInitialized(), await this.isValidReject(e);
                        let {
                            id: t,
                            reason: r
                        } = e, {
                            pairingTopic: i
                        } = this.client.proposal.get(t);
                        i && (await this.sendError(t, i, r), await this.client.proposal.delete(t, (0, ea.D6)("USER_DISCONNECTED")))
                    }, this.update = async e => {
                        await this.isInitialized(), await this.isValidUpdate(e);
                        let {
                            topic: t,
                            namespaces: r
                        } = e, i = await this.sendRequest({
                            topic: t,
                            method: "wc_sessionUpdate",
                            params: {
                                namespaces: r
                            }
                        }), {
                            done: s,
                            resolve: n,
                            reject: o
                        } = (0, ea.H1)();
                        return this.events.once((0, ea.E0)("session_update", i), e => {
                            let {
                                error: t
                            } = e;
                            t ? o(t) : n()
                        }), await this.client.session.update(t, {
                            namespaces: r
                        }), {
                            acknowledged: s
                        }
                    }, this.extend = async e => {
                        await this.isInitialized(), await this.isValidExtend(e);
                        let {
                            topic: t
                        } = e, r = await this.sendRequest({
                            topic: t,
                            method: "wc_sessionExtend",
                            params: {}
                        }), {
                            done: i,
                            resolve: s,
                            reject: n
                        } = (0, ea.H1)();
                        return this.events.once((0, ea.E0)("session_extend", r), e => {
                            let {
                                error: t
                            } = e;
                            t ? n(t) : s()
                        }), await this.setExpiry(t, (0, ea.gn)(rl)), {
                            acknowledged: i
                        }
                    }, this.request = async e => {
                        await this.isInitialized(), await this.isValidRequest(e);
                        let {
                            chainId: t,
                            request: r,
                            topic: i,
                            expiry: s = rh.wc_sessionRequest.req.ttl
                        } = e, n = (0, el.payloadId)(), {
                            done: o,
                            resolve: a,
                            reject: c
                        } = (0, ea.H1)(s, "Request expired. Please try again.");
                        return this.events.once((0, ea.E0)("session_request", n), e => {
                            let {
                                error: t,
                                result: r
                            } = e;
                            t ? c(t) : a(r)
                        }), await Promise.all([new Promise(async e => {
                            await this.sendRequest({
                                clientRpcId: n,
                                topic: i,
                                method: "wc_sessionRequest",
                                params: {
                                    request: r_(rE({}, r), {
                                        expiryTimestamp: (0, ea.gn)(s)
                                    }),
                                    chainId: t
                                },
                                expiry: s,
                                throwOnFailedPublish: !0
                            }).catch(e => c(e)), this.client.events.emit("session_request_sent", {
                                topic: i,
                                request: r,
                                chainId: t,
                                id: n
                            }), e()
                        }), new Promise(async e => {
                            let t = await (0, ea.bW)(this.client.core.storage, rc);
                            (0, ea.Hh)({
                                id: n,
                                topic: i,
                                wcDeepLink: t
                            }), e()
                        }), o()]).then(e => e[2])
                    }, this.respond = async e => {
                        await this.isInitialized(), await this.isValidRespond(e);
                        let {
                            topic: t,
                            response: r
                        } = e, {
                            id: i
                        } = r;
                        (0, el.isJsonRpcResult)(r) ? await this.sendResult({
                            id: i,
                            topic: t,
                            result: r.result,
                            throwOnFailedPublish: !0
                        }): (0, el.isJsonRpcError)(r) && await this.sendError(i, t, r.error), this.cleanupAfterResponse(e)
                    }, this.ping = async e => {
                        await this.isInitialized(), await this.isValidPing(e);
                        let {
                            topic: t
                        } = e;
                        if (this.client.session.keys.includes(t)) {
                            let e = await this.sendRequest({
                                    topic: t,
                                    method: "wc_sessionPing",
                                    params: {}
                                }),
                                {
                                    done: r,
                                    resolve: i,
                                    reject: s
                                } = (0, ea.H1)();
                            this.events.once((0, ea.E0)("session_ping", e), e => {
                                let {
                                    error: t
                                } = e;
                                t ? s(t) : i()
                            }), await r()
                        } else this.client.core.pairing.pairings.keys.includes(t) && await this.client.core.pairing.ping({
                            topic: t
                        })
                    }, this.emit = async e => {
                        await this.isInitialized(), await this.isValidEmit(e);
                        let {
                            topic: t,
                            event: r,
                            chainId: i
                        } = e;
                        await this.sendRequest({
                            topic: t,
                            method: "wc_sessionEvent",
                            params: {
                                event: r,
                                chainId: i
                            }
                        })
                    }, this.disconnect = async e => {
                        await this.isInitialized(), await this.isValidDisconnect(e);
                        let {
                            topic: t
                        } = e;
                        if (this.client.session.keys.includes(t)) await this.sendRequest({
                            topic: t,
                            method: "wc_sessionDelete",
                            params: (0, ea.D6)("USER_DISCONNECTED"),
                            throwOnFailedPublish: !0
                        }), await this.deleteSession({
                            topic: t,
                            emitEvent: !1
                        });
                        else if (this.client.core.pairing.pairings.keys.includes(t)) await this.client.core.pairing.disconnect({
                            topic: t
                        });
                        else {
                            let {
                                message: e
                            } = (0, ea.Z7)("MISMATCHED_TOPIC", "Session or pairing topic not found: ".concat(t));
                            throw Error(e)
                        }
                    }, this.find = e => (this.isInitialized(), this.client.session.getAll().filter(t => (0, ea.Ih)(t, e))), this.getPendingSessionRequests = () => this.client.pendingRequest.getAll(), this.cleanupDuplicatePairings = async e => {
                        if (e.pairingTopic) try {
                            let t = this.client.core.pairing.pairings.get(e.pairingTopic),
                                r = this.client.core.pairing.pairings.getAll().filter(r => {
                                    var i, s;
                                    return (null == (i = r.peerMetadata) ? void 0 : i.url) && (null == (s = r.peerMetadata) ? void 0 : s.url) === e.peer.metadata.url && r.topic && r.topic !== t.topic
                                });
                            if (0 === r.length) return;
                            this.client.logger.info("Cleaning up ".concat(r.length, " duplicate pairing(s)")), await Promise.all(r.map(e => this.client.core.pairing.disconnect({
                                topic: e.topic
                            }))), this.client.logger.info("Duplicate pairings clean up finished")
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    }, this.deleteSession = async e => {
                        let {
                            topic: t,
                            expirerHasDeleted: r = !1,
                            emitEvent: i = !0,
                            id: s = 0
                        } = e, {
                            self: n
                        } = this.client.session.get(t);
                        await this.client.core.relayer.unsubscribe(t), await this.client.session.delete(t, (0, ea.D6)("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(n.publicKey) && await this.client.core.crypto.deleteKeyPair(n.publicKey), this.client.core.crypto.keychain.has(t) && await this.client.core.crypto.deleteSymKey(t), r || this.client.core.expirer.del(t), this.client.core.storage.removeItem(rc).catch(e => this.client.logger.warn(e)), this.getPendingSessionRequests().forEach(e => {
                            e.topic === t && this.deletePendingSessionRequest(e.id, (0, ea.D6)("USER_DISCONNECTED"))
                        }), i && this.client.events.emit("session_delete", {
                            id: s,
                            topic: t
                        })
                    }, this.deleteProposal = async (e, t) => {
                        await Promise.all([this.client.proposal.delete(e, (0, ea.D6)("USER_DISCONNECTED")), t ? Promise.resolve() : this.client.core.expirer.del(e)])
                    }, this.deletePendingSessionRequest = async function(e, r) {
                        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        await Promise.all([t.client.pendingRequest.delete(e, r), i ? Promise.resolve() : t.client.core.expirer.del(e)]), t.sessionRequestQueue.queue = t.sessionRequestQueue.queue.filter(t => t.id !== e), i && (t.sessionRequestQueue.state = rp.idle, t.client.events.emit("session_request_expire", {
                            id: e
                        }))
                    }, this.setExpiry = async (e, t) => {
                        this.client.session.keys.includes(e) && await this.client.session.update(e, {
                            expiry: t
                        }), this.client.core.expirer.set(e, t)
                    }, this.setProposal = async (e, t) => {
                        await this.client.proposal.set(e, t), this.client.core.expirer.set(e, (0, ea.gn)(rh.wc_sessionPropose.req.ttl))
                    }, this.setPendingSessionRequest = async e => {
                        let {
                            id: t,
                            topic: r,
                            params: i,
                            verifyContext: s
                        } = e, n = i.request.expiryTimestamp || (0, ea.gn)(rh.wc_sessionRequest.req.ttl);
                        await this.client.pendingRequest.set(t, {
                            id: t,
                            topic: r,
                            params: i,
                            verifyContext: s
                        }), n && this.client.core.expirer.set(t, n)
                    }, this.sendRequest = async e => {
                        let {
                            topic: t,
                            method: r,
                            params: i,
                            expiry: s,
                            relayRpcId: n,
                            clientRpcId: o,
                            throwOnFailedPublish: a
                        } = e, c = (0, el.formatJsonRpcRequest)(r, i, o);
                        if ((0, ea.jU)() && rf.includes(r)) {
                            let e = (0, ea.rj)(JSON.stringify(c));
                            this.client.core.verify.register({
                                attestationId: e
                            })
                        }
                        let u = await this.client.core.crypto.encode(t, c),
                            l = rh[r].req;
                        return s && (l.ttl = s), n && (l.id = n), this.client.core.history.set(t, c), a ? (l.internal = r_(rE({}, l.internal), {
                            throwOnFailedPublish: !0
                        }), await this.client.core.relayer.publish(t, u, l)) : this.client.core.relayer.publish(t, u, l).catch(e => this.client.logger.error(e)), c.id
                    }, this.sendResult = async e => {
                        let {
                            id: t,
                            topic: r,
                            result: i,
                            throwOnFailedPublish: s
                        } = e, n = (0, el.formatJsonRpcResult)(t, i), o = await this.client.core.crypto.encode(r, n), a = rh[(await this.client.core.history.get(r, t)).request.method].res;
                        s ? (a.internal = r_(rE({}, a.internal), {
                            throwOnFailedPublish: !0
                        }), await this.client.core.relayer.publish(r, o, a)) : this.client.core.relayer.publish(r, o, a).catch(e => this.client.logger.error(e)), await this.client.core.history.resolve(n)
                    }, this.sendError = async (e, t, r) => {
                        let i = (0, el.formatJsonRpcError)(e, r),
                            s = await this.client.core.crypto.encode(t, i),
                            n = rh[(await this.client.core.history.get(t, e)).request.method].res;
                        this.client.core.relayer.publish(t, s, n), await this.client.core.history.resolve(i)
                    }, this.cleanup = async () => {
                        let e = [],
                            t = [];
                        this.client.session.getAll().forEach(t => {
                            let r = !1;
                            (0, ea.Bw)(t.expiry) && (r = !0), this.client.core.crypto.keychain.has(t.topic) || (r = !0), r && e.push(t.topic)
                        }), this.client.proposal.getAll().forEach(e => {
                            (0, ea.Bw)(e.expiryTimestamp) && t.push(e.id)
                        }), await Promise.all([...e.map(e => this.deleteSession({
                            topic: e
                        })), ...t.map(e => this.deleteProposal(e))])
                    }, this.onRelayEventRequest = async e => {
                        this.requestQueue.queue.push(e), await this.processRequestsQueue()
                    }, this.processRequestsQueue = async () => {
                        if (this.requestQueue.state === rp.active) {
                            this.client.logger.info("Request queue already active, skipping...");
                            return
                        }
                        for (this.client.logger.info("Request queue starting with ".concat(this.requestQueue.queue.length, " requests")); this.requestQueue.queue.length > 0;) {
                            this.requestQueue.state = rp.active;
                            let e = this.requestQueue.queue.shift();
                            if (e) try {
                                this.processRequest(e), await new Promise(e => setTimeout(e, 300))
                            } catch (e) {
                                this.client.logger.warn(e)
                            }
                        }
                        this.requestQueue.state = rp.idle
                    }, this.processRequest = e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, i = r.method;
                        switch (i) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeRequest(t, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleRequest(t, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateRequest(t, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendRequest(t, r);
                            case "wc_sessionPing":
                                return this.onSessionPingRequest(t, r);
                            case "wc_sessionDelete":
                                return this.onSessionDeleteRequest(t, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequest(t, r);
                            case "wc_sessionEvent":
                                return this.onSessionEventRequest(t, r);
                            default:
                                return this.client.logger.info("Unsupported request method ".concat(i))
                        }
                    }, this.onRelayEventResponse = async e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, i = (await this.client.core.history.get(t, r.id)).request.method;
                        switch (i) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeResponse(t, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleResponse(t, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateResponse(t, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendResponse(t, r);
                            case "wc_sessionPing":
                                return this.onSessionPingResponse(t, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequestResponse(t, r);
                            default:
                                return this.client.logger.info("Unsupported response method ".concat(i))
                        }
                    }, this.onRelayEventUnknownPayload = e => {
                        let {
                            topic: t
                        } = e, {
                            message: r
                        } = (0, ea.Z7)("MISSING_OR_INVALID", "Decoded payload on topic ".concat(t, " is not identifiable as a JSON-RPC request or a response."));
                        throw Error(r)
                    }, this.onSessionProposeRequest = async (e, t) => {
                        let {
                            params: r,
                            id: i
                        } = t;
                        try {
                            this.isValidConnect(rE({}, t.params));
                            let s = r.expiryTimestamp || (0, ea.gn)(rh.wc_sessionPropose.req.ttl),
                                n = rE({
                                    id: i,
                                    pairingTopic: e,
                                    expiryTimestamp: s
                                }, r);
                            await this.setProposal(i, n);
                            let o = (0, ea.rj)(JSON.stringify(t)),
                                a = await this.getVerifyContext(o, n.proposer.metadata);
                            this.client.events.emit("session_proposal", {
                                id: i,
                                params: n,
                                verifyContext: a
                            })
                        } catch (t) {
                            await this.sendError(i, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionProposeResponse = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        if ((0, el.isJsonRpcResult)(t)) {
                            let {
                                result: i
                            } = t;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                result: i
                            });
                            let s = this.client.proposal.get(r);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                proposal: s
                            });
                            let n = s.proposer.publicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                selfPublicKey: n
                            });
                            let o = i.responderPublicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                peerPublicKey: o
                            });
                            let a = await this.client.core.crypto.generateSharedKey(n, o);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                sessionTopic: a
                            });
                            let c = await this.client.core.relayer.subscribe(a);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                subscriptionId: c
                            }), await this.client.core.pairing.activate({
                                topic: e
                            })
                        } else(0, el.isJsonRpcError)(t) && (await this.client.proposal.delete(r, (0, ea.D6)("USER_DISCONNECTED")), this.events.emit((0, ea.E0)("session_connect"), {
                            error: t.error
                        }))
                    }, this.onSessionSettleRequest = async (e, t) => {
                        let {
                            id: r,
                            params: i
                        } = t;
                        try {
                            this.isValidSessionSettleRequest(i);
                            let {
                                relay: r,
                                controller: s,
                                expiry: n,
                                namespaces: o,
                                sessionProperties: a,
                                pairingTopic: c
                            } = t.params, u = rE({
                                topic: e,
                                relay: r,
                                expiry: n,
                                namespaces: o,
                                acknowledged: !0,
                                pairingTopic: c,
                                requiredNamespaces: {},
                                optionalNamespaces: {},
                                controller: s.publicKey,
                                self: {
                                    publicKey: "",
                                    metadata: this.client.metadata
                                },
                                peer: {
                                    publicKey: s.publicKey,
                                    metadata: s.metadata
                                }
                            }, a && {
                                sessionProperties: a
                            });
                            await this.sendResult({
                                id: t.id,
                                topic: e,
                                result: !0
                            }), this.events.emit((0, ea.E0)("session_connect"), {
                                session: u
                            }), this.cleanupDuplicatePairings(u)
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionSettleResponse = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        (0, el.isJsonRpcResult)(t) ? (await this.client.session.update(e, {
                            acknowledged: !0
                        }), this.events.emit((0, ea.E0)("session_approve", r), {})) : (0, el.isJsonRpcError)(t) && (await this.client.session.delete(e, (0, ea.D6)("USER_DISCONNECTED")), this.events.emit((0, ea.E0)("session_approve", r), {
                            error: t.error
                        }))
                    }, this.onSessionUpdateRequest = async (e, t) => {
                        let {
                            params: r,
                            id: i
                        } = t;
                        try {
                            let t = "".concat(e, "_session_update"),
                                s = ea.O6.get(t);
                            if (s && this.isRequestOutOfSync(s, i)) {
                                this.client.logger.info("Discarding out of sync request - ".concat(i));
                                return
                            }
                            this.isValidUpdate(rE({
                                topic: e
                            }, r)), await this.client.session.update(e, {
                                namespaces: r.namespaces
                            }), await this.sendResult({
                                id: i,
                                topic: e,
                                result: !0
                            }), this.client.events.emit("session_update", {
                                id: i,
                                topic: e,
                                params: r
                            }), ea.O6.set(t, i)
                        } catch (t) {
                            await this.sendError(i, e, t), this.client.logger.error(t)
                        }
                    }, this.isRequestOutOfSync = (e, t) => parseInt(t.toString().slice(0, -3)) <= parseInt(e.toString().slice(0, -3)), this.onSessionUpdateResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        (0, el.isJsonRpcResult)(t) ? this.events.emit((0, ea.E0)("session_update", r), {}): (0, el.isJsonRpcError)(t) && this.events.emit((0, ea.E0)("session_update", r), {
                            error: t.error
                        })
                    }, this.onSessionExtendRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidExtend({
                                topic: e
                            }), await this.setExpiry(e, (0, ea.gn)(rl)), await this.sendResult({
                                id: r,
                                topic: e,
                                result: !0
                            }), this.client.events.emit("session_extend", {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionExtendResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        (0, el.isJsonRpcResult)(t) ? this.events.emit((0, ea.E0)("session_extend", r), {}): (0, el.isJsonRpcError)(t) && this.events.emit((0, ea.E0)("session_extend", r), {
                            error: t.error
                        })
                    }, this.onSessionPingRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidPing({
                                topic: e
                            }), await this.sendResult({
                                id: r,
                                topic: e,
                                result: !0
                            }), this.client.events.emit("session_ping", {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionPingResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        setTimeout(() => {
                            (0, el.isJsonRpcResult)(t) ? this.events.emit((0, ea.E0)("session_ping", r), {}): (0, el.isJsonRpcError)(t) && this.events.emit((0, ea.E0)("session_ping", r), {
                                error: t.error
                            })
                        }, 500)
                    }, this.onSessionDeleteRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidDisconnect({
                                topic: e,
                                reason: t.params
                            }), await Promise.all([new Promise(t => {
                                this.client.core.relayer.once(tg.publish, async () => {
                                    t(await this.deleteSession({
                                        topic: e,
                                        id: r
                                    }))
                                })
                            }), this.sendResult({
                                id: r,
                                topic: e,
                                result: !0
                            }), this.cleanupPendingSentRequestsForTopic({
                                topic: e,
                                error: (0, ea.D6)("USER_DISCONNECTED")
                            })])
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    }, this.onSessionRequest = async (e, t) => {
                        let {
                            id: r,
                            params: i
                        } = t;
                        try {
                            this.isValidRequest(rE({
                                topic: e
                            }, i));
                            let t = (0, ea.rj)(JSON.stringify((0, el.formatJsonRpcRequest)("wc_sessionRequest", i, r))),
                                s = this.client.session.get(e),
                                n = await this.getVerifyContext(t, s.peer.metadata),
                                o = {
                                    id: r,
                                    topic: e,
                                    params: i,
                                    verifyContext: n
                                };
                            await this.setPendingSessionRequest(o), this.addSessionRequestToSessionRequestQueue(o), this.processSessionRequestQueue()
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionRequestResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        (0, el.isJsonRpcResult)(t) ? this.events.emit((0, ea.E0)("session_request", r), {
                            result: t.result
                        }): (0, el.isJsonRpcError)(t) && this.events.emit((0, ea.E0)("session_request", r), {
                            error: t.error
                        })
                    }, this.onSessionEventRequest = async (e, t) => {
                        let {
                            id: r,
                            params: i
                        } = t;
                        try {
                            let t = "".concat(e, "_session_event_").concat(i.event.name),
                                s = ea.O6.get(t);
                            if (s && this.isRequestOutOfSync(s, r)) {
                                this.client.logger.info("Discarding out of sync request - ".concat(r));
                                return
                            }
                            this.isValidEmit(rE({
                                topic: e
                            }, i)), this.client.events.emit("session_event", {
                                id: r,
                                topic: e,
                                params: i
                            }), ea.O6.set(t, r)
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.addSessionRequestToSessionRequestQueue = e => {
                        this.sessionRequestQueue.queue.push(e)
                    }, this.cleanupAfterResponse = e => {
                        this.deletePendingSessionRequest(e.response.id, {
                            message: "fulfilled",
                            code: 0
                        }), setTimeout(() => {
                            this.sessionRequestQueue.state = rp.idle, this.processSessionRequestQueue()
                        }, (0, Q.toMiliseconds)(this.requestQueueDelay))
                    }, this.cleanupPendingSentRequestsForTopic = e => {
                        let {
                            topic: t,
                            error: r
                        } = e, i = this.client.core.history.pending;
                        i.length > 0 && i.filter(e => e.topic === t && "wc_sessionRequest" === e.request.method).forEach(e => {
                            this.events.emit((0, ea.E0)("session_request", e.request.id), {
                                error: r
                            })
                        })
                    }, this.processSessionRequestQueue = () => {
                        if (this.sessionRequestQueue.state === rp.active) {
                            this.client.logger.info("session request queue is already active.");
                            return
                        }
                        let e = this.sessionRequestQueue.queue[0];
                        if (!e) {
                            this.client.logger.info("session request queue is empty.");
                            return
                        }
                        try {
                            this.sessionRequestQueue.state = rp.active, this.client.events.emit("session_request", e)
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    }, this.onPairingCreated = e => {
                        if (e.active) return;
                        let t = this.client.proposal.getAll().find(t => t.pairingTopic === e.topic);
                        t && this.onSessionProposeRequest(e.topic, (0, el.formatJsonRpcRequest)("wc_sessionPropose", {
                            requiredNamespaces: t.requiredNamespaces,
                            optionalNamespaces: t.optionalNamespaces,
                            relays: t.relays,
                            proposer: t.proposer,
                            sessionProperties: t.sessionProperties
                        }, t.id))
                    }, this.isValidConnect = async e => {
                        if (!(0, ea.EJ)(e)) {
                            let {
                                message: t
                            } = (0, ea.Z7)("MISSING_OR_INVALID", "connect() params: ".concat(JSON.stringify(e)));
                            throw Error(t)
                        }
                        let {
                            pairingTopic: t,
                            requiredNamespaces: r,
                            optionalNamespaces: i,
                            sessionProperties: s,
                            relays: n
                        } = e;
                        if ((0, ea.o8)(t) || await this.isValidPairingTopic(t), !(0, ea.PM)(n, !0)) {
                            let {
                                message: e
                            } = (0, ea.Z7)("MISSING_OR_INVALID", "connect() relays: ".concat(n));
                            throw Error(e)
                        }(0, ea.o8)(r) || 0 === (0, ea.L5)(r) || this.validateNamespaces(r, "requiredNamespaces"), (0, ea.o8)(i) || 0 === (0, ea.L5)(i) || this.validateNamespaces(i, "optionalNamespaces"), (0, ea.o8)(s) || this.validateSessionProps(s, "sessionProperties")
                    }, this.validateNamespaces = (e, t) => {
                        let r = (0, ea.n)(e, "connect()", t);
                        if (r) throw Error(r.message)
                    }, this.isValidApprove = async e => {
                        if (!(0, ea.EJ)(e)) throw Error((0, ea.Z7)("MISSING_OR_INVALID", "approve() params: ".concat(e)).message);
                        let {
                            id: t,
                            namespaces: r,
                            relayProtocol: i,
                            sessionProperties: s
                        } = e;
                        await this.isValidProposalId(t);
                        let n = this.client.proposal.get(t),
                            o = (0, ea.in)(r, "approve()");
                        if (o) throw Error(o.message);
                        let a = (0, ea.rF)(n.requiredNamespaces, r, "approve()");
                        if (a) throw Error(a.message);
                        if (!(0, ea.M_)(i, !0)) {
                            let {
                                message: e
                            } = (0, ea.Z7)("MISSING_OR_INVALID", "approve() relayProtocol: ".concat(i));
                            throw Error(e)
                        }(0, ea.o8)(s) || this.validateSessionProps(s, "sessionProperties")
                    }, this.isValidReject = async e => {
                        if (!(0, ea.EJ)(e)) {
                            let {
                                message: t
                            } = (0, ea.Z7)("MISSING_OR_INVALID", "reject() params: ".concat(e));
                            throw Error(t)
                        }
                        let {
                            id: t,
                            reason: r
                        } = e;
                        if (await this.isValidProposalId(t), !(0, ea.$t)(r)) {
                            let {
                                message: e
                            } = (0, ea.Z7)("MISSING_OR_INVALID", "reject() reason: ".concat(JSON.stringify(r)));
                            throw Error(e)
                        }
                    }, this.isValidSessionSettleRequest = e => {
                        if (!(0, ea.EJ)(e)) {
                            let {
                                message: t
                            } = (0, ea.Z7)("MISSING_OR_INVALID", "onSessionSettleRequest() params: ".concat(e));
                            throw Error(t)
                        }
                        let {
                            relay: t,
                            controller: r,
                            namespaces: i,
                            expiry: s
                        } = e;
                        if (!(0, ea.Z2)(t)) {
                            let {
                                message: e
                            } = (0, ea.Z7)("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                            throw Error(e)
                        }
                        let n = (0, ea.Dd)(r, "onSessionSettleRequest()");
                        if (n) throw Error(n.message);
                        let o = (0, ea.in)(i, "onSessionSettleRequest()");
                        if (o) throw Error(o.message);
                        if ((0, ea.Bw)(s)) {
                            let {
                                message: e
                            } = (0, ea.Z7)("EXPIRED", "onSessionSettleRequest()");
                            throw Error(e)
                        }
                    }, this.isValidUpdate = async e => {
                        if (!(0, ea.EJ)(e)) {
                            let {
                                message: t
                            } = (0, ea.Z7)("MISSING_OR_INVALID", "update() params: ".concat(e));
                            throw Error(t)
                        }
                        let {
                            topic: t,
                            namespaces: r
                        } = e;
                        await this.isValidSessionTopic(t);
                        let i = this.client.session.get(t),
                            s = (0, ea.in)(r, "update()");
                        if (s) throw Error(s.message);
                        let n = (0, ea.rF)(i.requiredNamespaces, r, "update()");
                        if (n) throw Error(n.message)
                    }, this.isValidExtend = async e => {
                        if (!(0, ea.EJ)(e)) {
                            let {
                                message: t
                            } = (0, ea.Z7)("MISSING_OR_INVALID", "extend() params: ".concat(e));
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidSessionTopic(t)
                    }, this.isValidRequest = async e => {
                        if (!(0, ea.EJ)(e)) {
                            let {
                                message: t
                            } = (0, ea.Z7)("MISSING_OR_INVALID", "request() params: ".concat(e));
                            throw Error(t)
                        }
                        let {
                            topic: t,
                            request: r,
                            chainId: i,
                            expiry: s
                        } = e;
                        await this.isValidSessionTopic(t);
                        let {
                            namespaces: n
                        } = this.client.session.get(t);
                        if (!(0, ea.p8)(n, i)) {
                            let {
                                message: e
                            } = (0, ea.Z7)("MISSING_OR_INVALID", "request() chainId: ".concat(i));
                            throw Error(e)
                        }
                        if (!(0, ea.hH)(r)) {
                            let {
                                message: e
                            } = (0, ea.Z7)("MISSING_OR_INVALID", "request() ".concat(JSON.stringify(r)));
                            throw Error(e)
                        }
                        if (!(0, ea.al)(n, i, r.method)) {
                            let {
                                message: e
                            } = (0, ea.Z7)("MISSING_OR_INVALID", "request() method: ".concat(r.method));
                            throw Error(e)
                        }
                        if (s && !(0, ea.ON)(s, rd)) {
                            let {
                                message: e
                            } = (0, ea.Z7)("MISSING_OR_INVALID", "request() expiry: ".concat(s, ". Expiry must be a number (in seconds) between ").concat(rd.min, " and ").concat(rd.max));
                            throw Error(e)
                        }
                    }, this.isValidRespond = async e => {
                        var t;
                        if (!(0, ea.EJ)(e)) {
                            let {
                                message: t
                            } = (0, ea.Z7)("MISSING_OR_INVALID", "respond() params: ".concat(e));
                            throw Error(t)
                        }
                        let {
                            topic: r,
                            response: i
                        } = e;
                        try {
                            await this.isValidSessionTopic(r)
                        } catch (r) {
                            throw null != (t = null == e ? void 0 : e.response) && t.id && this.cleanupAfterResponse(e), r
                        }
                        if (!(0, ea.JT)(i)) {
                            let {
                                message: e
                            } = (0, ea.Z7)("MISSING_OR_INVALID", "respond() response: ".concat(JSON.stringify(i)));
                            throw Error(e)
                        }
                    }, this.isValidPing = async e => {
                        if (!(0, ea.EJ)(e)) {
                            let {
                                message: t
                            } = (0, ea.Z7)("MISSING_OR_INVALID", "ping() params: ".concat(e));
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidSessionOrPairingTopic(t)
                    }, this.isValidEmit = async e => {
                        if (!(0, ea.EJ)(e)) {
                            let {
                                message: t
                            } = (0, ea.Z7)("MISSING_OR_INVALID", "emit() params: ".concat(e));
                            throw Error(t)
                        }
                        let {
                            topic: t,
                            event: r,
                            chainId: i
                        } = e;
                        await this.isValidSessionTopic(t);
                        let {
                            namespaces: s
                        } = this.client.session.get(t);
                        if (!(0, ea.p8)(s, i)) {
                            let {
                                message: e
                            } = (0, ea.Z7)("MISSING_OR_INVALID", "emit() chainId: ".concat(i));
                            throw Error(e)
                        }
                        if (!(0, ea.nf)(r)) {
                            let {
                                message: e
                            } = (0, ea.Z7)("MISSING_OR_INVALID", "emit() event: ".concat(JSON.stringify(r)));
                            throw Error(e)
                        }
                        if (!(0, ea.sI)(s, i, r.name)) {
                            let {
                                message: e
                            } = (0, ea.Z7)("MISSING_OR_INVALID", "emit() event: ".concat(JSON.stringify(r)));
                            throw Error(e)
                        }
                    }, this.isValidDisconnect = async e => {
                        if (!(0, ea.EJ)(e)) {
                            let {
                                message: t
                            } = (0, ea.Z7)("MISSING_OR_INVALID", "disconnect() params: ".concat(e));
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidSessionOrPairingTopic(t)
                    }, this.getVerifyContext = async (e, t) => {
                        let r = {
                            verified: {
                                verifyUrl: t.verifyUrl || tS,
                                validation: "UNKNOWN",
                                origin: t.url || ""
                            }
                        };
                        try {
                            let i = await this.client.core.verify.resolve({
                                attestationId: e,
                                verifyUrl: t.verifyUrl
                            });
                            i && (r.verified.origin = i.origin, r.verified.isScam = i.isScam, r.verified.validation = i.origin === new URL(t.url).origin ? "VALID" : "INVALID")
                        } catch (e) {
                            this.client.logger.info(e)
                        }
                        return this.client.logger.info("Verify context: ".concat(JSON.stringify(r))), r
                    }, this.validateSessionProps = (e, t) => {
                        Object.values(e).forEach(e => {
                            if (!(0, ea.M_)(e, !1)) {
                                let {
                                    message: r
                                } = (0, ea.Z7)("MISSING_OR_INVALID", "".concat(t, " must be in Record<string, string> format. Received: ").concat(JSON.stringify(e)));
                                throw Error(r)
                            }
                        })
                    }
                }
            }
            class rS extends t3 {
                constructor(e, t) {
                    super(e, t, "proposal", ro), this.core = e, this.logger = t
                }
            }
            class rO extends t3 {
                constructor(e, t) {
                    super(e, t, "session", ro), this.core = e, this.logger = t
                }
            }
            class rC extends t3 {
                constructor(e, t) {
                    super(e, t, "request", ro, e => e.id), this.core = e, this.logger = t
                }
            }
            class rR extends W {
                static async init(e) {
                    let t = new rR(e);
                    return await t.initialize(), t
                }
                get context() {
                    return (0, L.getLoggerContext)(this.logger)
                }
                get pairing() {
                    return this.core.pairing.pairings
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({
                            verifyUrl: this.metadata.verifyUrl
                        }), this.logger.info("SignClient Initialization Success")
                    } catch (e) {
                        throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e
                    }
                }
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.name = ra.name, this.events = new s.EventEmitter, this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), this.removeAllListeners = e => this.events.removeAllListeners(e), this.connect = async e => {
                        try {
                            return await this.engine.connect(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.pair = async e => {
                        try {
                            return await this.engine.pair(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.approve = async e => {
                        try {
                            return await this.engine.approve(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.reject = async e => {
                        try {
                            return await this.engine.reject(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.update = async e => {
                        try {
                            return await this.engine.update(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.extend = async e => {
                        try {
                            return await this.engine.extend(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.request = async e => {
                        try {
                            return await this.engine.request(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.respond = async e => {
                        try {
                            return await this.engine.respond(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.ping = async e => {
                        try {
                            return await this.engine.ping(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.emit = async e => {
                        try {
                            return await this.engine.emit(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.disconnect = async e => {
                        try {
                            return await this.engine.disconnect(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.find = e => {
                        try {
                            return this.engine.find(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.getPendingSessionRequests = () => {
                        try {
                            return this.engine.getPendingSessionRequests()
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.name = (null == e ? void 0 : e.name) || ra.name, this.metadata = (null == e ? void 0 : e.metadata) || (0, ea.D)();
                    let t = "u" > typeof(null == e ? void 0 : e.logger) && "string" != typeof(null == e ? void 0 : e.logger) ? e.logger : (0, L.pino)((0, L.getDefaultLoggerOptions)({
                        level: (null == e ? void 0 : e.logger) || ra.logger
                    }));
                    this.core = (null == e ? void 0 : e.core) || new rs(e), this.logger = (0, L.generateChildLogger)(t, this.name), this.session = new rO(this.core, this.logger), this.proposal = new rS(this.core, this.logger), this.pendingRequest = new rC(this.core, this.logger), this.engine = new rI(this)
                }
            }
        },
        84804: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(73660);
            i.__exportStar(r(48887), t), i.__exportStar(r(92295), t)
        },
        48887: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ONE_THOUSAND = t.ONE_HUNDRED = void 0, t.ONE_HUNDRED = 100, t.ONE_THOUSAND = 1e3
        },
        92295: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = 5 * t.ONE_MINUTE, t.TEN_MINUTES = 10 * t.ONE_MINUTE, t.THIRTY_MINUTES = 30 * t.ONE_MINUTE, t.SIXTY_MINUTES = 60 * t.ONE_MINUTE, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = 3 * t.ONE_HOUR, t.SIX_HOURS = 6 * t.ONE_HOUR, t.TWELVE_HOURS = 12 * t.ONE_HOUR, t.TWENTY_FOUR_HOURS = 24 * t.ONE_HOUR, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = 3 * t.ONE_DAY, t.FIVE_DAYS = 5 * t.ONE_DAY, t.SEVEN_DAYS = 7 * t.ONE_DAY, t.THIRTY_DAYS = 30 * t.ONE_DAY, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = 2 * t.ONE_WEEK, t.THREE_WEEKS = 3 * t.ONE_WEEK, t.FOUR_WEEKS = 4 * t.ONE_WEEK, t.ONE_YEAR = 365 * t.ONE_DAY
        },
        95781: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(73660);
            i.__exportStar(r(96547), t), i.__exportStar(r(344), t), i.__exportStar(r(11751), t), i.__exportStar(r(84804), t)
        },
        11751: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), r(73660).__exportStar(r(2119), t)
        },
        2119: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IWatch = void 0;
            class r {}
            t.IWatch = r
        },
        56285: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.fromMiliseconds = t.toMiliseconds = void 0;
            let i = r(84804);
            t.toMiliseconds = function(e) {
                return e * i.ONE_THOUSAND
            }, t.fromMiliseconds = function(e) {
                return Math.floor(e / i.ONE_THOUSAND)
            }
        },
        8457: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.delay = void 0, t.delay = function(e) {
                return new Promise(t => {
                    setTimeout(() => {
                        t(!0)
                    }, e)
                })
            }
        },
        96547: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(73660);
            i.__exportStar(r(8457), t), i.__exportStar(r(56285), t)
        },
        344: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Watch = void 0;
            class r {
                start(e) {
                    if (this.timestamps.has(e)) throw Error("Watch already started for label: ".concat(e));
                    this.timestamps.set(e, {
                        started: Date.now()
                    })
                }
                stop(e) {
                    let t = this.get(e);
                    if (void 0 !== t.elapsed) throw Error("Watch already stopped for label: ".concat(e));
                    let r = Date.now() - t.started;
                    this.timestamps.set(e, {
                        started: t.started,
                        elapsed: r
                    })
                }
                get(e) {
                    let t = this.timestamps.get(e);
                    if (void 0 === t) throw Error("No timestamp found for label: ".concat(e));
                    return t
                }
                elapsed(e) {
                    let t = this.get(e);
                    return t.elapsed || Date.now() - t.started
                }
                constructor() {
                    this.timestamps = new Map
                }
            }
            t.Watch = r, t.default = r
        },
        86006: function(e, t, r) {
            "use strict";
            r.d(t, {
                AW: function() {
                    return A
                },
                O6: function() {
                    return tl
                },
                rV: function() {
                    return T
                },
                gn: function() {
                    return eg
                },
                H1: function() {
                    return eu
                },
                hF: function() {
                    return el
                },
                WG: function() {
                    return q
                },
                pe: function() {
                    return z
                },
                m$: function() {
                    return M
                },
                vB: function() {
                    return B
                },
                HI: function() {
                    return F
                },
                E0: function() {
                    return em
                },
                Gq: function() {
                    return ep
                },
                $0: function() {
                    return en
                },
                Z4: function() {
                    return ed
                },
                Bv: function() {
                    return eT
                },
                Au: function() {
                    return U
                },
                jd: function() {
                    return L
                },
                gu: function() {
                    return C
                },
                D: function() {
                    return es
                },
                X_: function() {
                    return ei
                },
                bW: function() {
                    return eD
                },
                Z7: function() {
                    return eq
                },
                cO: function() {
                    return eE
                },
                _H: function() {
                    return ew
                },
                D6: function() {
                    return eF
                },
                Hh: function() {
                    return ev
                },
                Ym: function() {
                    return j
                },
                rj: function() {
                    return k
                },
                jU: function() {
                    return et
                },
                gp: function() {
                    return eL
                },
                rF: function() {
                    return ti
                },
                Bw: function() {
                    return ey
                },
                UG: function() {
                    return $
                },
                Gg: function() {
                    return to
                },
                xW: function() {
                    return eZ
                },
                b$: function() {
                    return ee
                },
                Ih: function() {
                    return eJ
                },
                h1: function() {
                    return eY
                },
                Q8: function() {
                    return H
                },
                o8: function() {
                    return eV
                },
                qt: function() {
                    return ez
                },
                Dd: function() {
                    return eQ
                },
                $t: function() {
                    return e2
                },
                nf: function() {
                    return e9
                },
                Q0: function() {
                    return e6
                },
                in: function() {
                    return e1
                },
                p8: function() {
                    return te
                },
                sI: function() {
                    return tr
                },
                al: function() {
                    return tt
                },
                L5: function() {
                    return eB
                },
                EJ: function() {
                    return e8
                },
                Z2: function() {
                    return e3
                },
                PM: function() {
                    return e5
                },
                hH: function() {
                    return e4
                },
                ON: function() {
                    return tn
                },
                n: function() {
                    return e0
                },
                JT: function() {
                    return e7
                },
                M_: function() {
                    return eK
                },
                jv: function() {
                    return eG
                },
                KC: function() {
                    return ea
                },
                eG: function() {
                    return eb
                },
                IP: function() {
                    return ec
                },
                DQ: function() {
                    return O
                },
                iP: function() {
                    return ef
                },
                M: function() {
                    return eM
                },
                he: function() {
                    return ex
                },
                uw: function() {
                    return tc
                },
                Ll: function() {
                    return V
                },
                EN: function() {
                    return K
                }
            });
            var i = r(41880),
                s = r(43057),
                n = r(96526),
                o = r(95162),
                a = r(11145),
                c = r(32943),
                u = r(32215),
                l = function(e, t, r) {
                    if (r || 2 == arguments.length)
                        for (var i, s = 0, n = t.length; s < n; s++) !i && s in t || (i || (i = Array.prototype.slice.call(t, 0, s)), i[s] = t[s]);
                    return e.concat(i || Array.prototype.slice.call(t))
                },
                h = function(e, t, r) {
                    this.name = e, this.version = t, this.os = r, this.type = "browser"
                },
                d = function(e) {
                    this.version = e, this.type = "node", this.name = "node", this.os = u.platform
                },
                p = function(e, t, r, i) {
                    this.name = e, this.version = t, this.os = r, this.bot = i, this.type = "bot-device"
                },
                f = function() {
                    this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
                },
                g = function() {
                    this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
                },
                y = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
                m = [
                    ["aol", /AOLShield\/([0-9\._]+)/],
                    ["edge", /Edge\/([0-9\._]+)/],
                    ["edge-ios", /EdgiOS\/([0-9\._]+)/],
                    ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
                    ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
                    ["samsung", /SamsungBrowser\/([0-9\.]+)/],
                    ["silk", /\bSilk\/([0-9._-]+)\b/],
                    ["miui", /MiuiBrowser\/([0-9\.]+)$/],
                    ["beaker", /BeakerBrowser\/([0-9\.]+)/],
                    ["edge-chromium", /EdgA?\/([0-9\.]+)/],
                    ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
                    ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
                    ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
                    ["fxios", /FxiOS\/([0-9\.]+)/],
                    ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
                    ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
                    ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
                    ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
                    ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
                    ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
                    ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
                    ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
                    ["ie", /MSIE\s(7\.0)/],
                    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
                    ["android", /Android\s([0-9\.]+)/],
                    ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
                    ["safari", /Version\/([0-9\._]+).*Safari/],
                    ["facebook", /FB[AS]V\/([0-9\.]+)/],
                    ["instagram", /Instagram\s([0-9\.]+)/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
                    ["curl", /^curl\/([0-9\.]+)$/],
                    ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]
                ],
                b = [
                    ["iOS", /iP(hone|od|ad)/],
                    ["Android OS", /Android/],
                    ["BlackBerry OS", /BlackBerry|BB10/],
                    ["Windows Mobile", /IEMobile/],
                    ["Amazon OS", /Kindle/],
                    ["Windows 3.11", /Win16/],
                    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
                    ["Windows 98", /(Windows 98)|(Win98)/],
                    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
                    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
                    ["Windows Server 2003", /(Windows NT 5.2)/],
                    ["Windows Vista", /(Windows NT 6.0)/],
                    ["Windows 7", /(Windows NT 6.1)/],
                    ["Windows 8", /(Windows NT 6.2)/],
                    ["Windows 8.1", /(Windows NT 6.3)/],
                    ["Windows 10", /(Windows NT 10.0)/],
                    ["Windows ME", /Windows ME/],
                    ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
                    ["Open BSD", /OpenBSD/],
                    ["Sun OS", /SunOS/],
                    ["Chrome OS", /CrOS/],
                    ["Linux", /(Linux)|(X11)/],
                    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
                    ["QNX", /QNX/],
                    ["BeOS", /BeOS/],
                    ["OS/2", /OS\/2/]
                ];

            function v(e) {
                var t = "" !== e && m.reduce(function(t, r) {
                    var i = r[0],
                        s = r[1];
                    if (t) return t;
                    var n = s.exec(e);
                    return !!n && [i, n]
                }, !1);
                if (!t) return null;
                var r = t[0],
                    i = t[1];
                if ("searchbot" === r) return new f;
                var s = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
                s ? s.length < 3 && (s = l(l([], s, !0), function(e) {
                    for (var t = [], r = 0; r < e; r++) t.push("0");
                    return t
                }(3 - s.length), !0)) : s = [];
                var n = s.join("."),
                    o = function(e) {
                        for (var t = 0, r = b.length; t < r; t++) {
                            var i = b[t],
                                s = i[0];
                            if (i[1].exec(e)) return s
                        }
                        return null
                    }(e),
                    a = y.exec(e);
                return a && a[1] ? new p(r, n, o, a[1]) : new h(r, n, o)
            }
            var D = r(95781),
                w = r(74613),
                E = r(47064),
                _ = r(20523);
            r(59606);
            let I = {
                waku: {
                    publish: "waku_publish",
                    batchPublish: "waku_batchPublish",
                    subscribe: "waku_subscribe",
                    batchSubscribe: "waku_batchSubscribe",
                    subscription: "waku_subscription",
                    unsubscribe: "waku_unsubscribe",
                    batchUnsubscribe: "waku_batchUnsubscribe"
                },
                irn: {
                    publish: "irn_publish",
                    batchPublish: "irn_batchPublish",
                    subscribe: "irn_subscribe",
                    batchSubscribe: "irn_batchSubscribe",
                    subscription: "irn_subscription",
                    unsubscribe: "irn_unsubscribe",
                    batchUnsubscribe: "irn_batchUnsubscribe"
                },
                iridium: {
                    publish: "iridium_publish",
                    batchPublish: "iridium_batchPublish",
                    subscribe: "iridium_subscribe",
                    batchSubscribe: "iridium_batchSubscribe",
                    subscription: "iridium_subscription",
                    unsubscribe: "iridium_unsubscribe",
                    batchUnsubscribe: "iridium_batchUnsubscribe"
                }
            };
            var S = r(32215);

            function O(e) {
                let [t, r] = e.split(":");
                return {
                    namespace: t,
                    reference: r
                }
            }

            function C(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    r = [];
                return Object.keys(e).forEach(i => {
                    if (t.length && !t.includes(i)) return;
                    let s = e[i];
                    r.push(...s.accounts)
                }), r
            }

            function R(e, t) {
                return e.includes(":") ? [e] : t.chains || []
            }
            let P = "base10",
                A = "base16",
                N = "base64pad",
                x = "utf8",
                T = 1;

            function U() {
                let e = a.Au();
                return {
                    privateKey: (0, c.BB)(e.secretKey, A),
                    publicKey: (0, c.BB)(e.publicKey, A)
                }
            }

            function L() {
                let e = (0, n.randomBytes)(32);
                return (0, c.BB)(e, A)
            }

            function M(e, t) {
                let r = a.gi((0, c.mL)(e, A), (0, c.mL)(t, A), !0),
                    i = new s.t(o.mE, r).expand(32);
                return (0, c.BB)(i, A)
            }

            function j(e) {
                let t = (0, o.vp)((0, c.mL)(e, A));
                return (0, c.BB)(t, A)
            }

            function k(e) {
                let t = (0, o.vp)((0, c.mL)(e, x));
                return (0, c.BB)(t, A)
            }

            function q(e) {
                return Number((0, c.BB)(e, P))
            }

            function F(e) {
                var t;
                let r = (t = "u" > typeof e.type ? e.type : 0, (0, c.mL)("".concat(t), P));
                if (q(r) === T && typeof e.senderPublicKey > "u") throw Error("Missing sender public key for type 1 envelope");
                let s = "u" > typeof e.senderPublicKey ? (0, c.mL)(e.senderPublicKey, A) : void 0,
                    o = "u" > typeof e.iv ? (0, c.mL)(e.iv, A) : (0, n.randomBytes)(12);
                return function(e) {
                    if (q(e.type) === T) {
                        if (typeof e.senderPublicKey > "u") throw Error("Missing sender public key for type 1 envelope");
                        return (0, c.BB)((0, c.zo)([e.type, e.senderPublicKey, e.iv, e.sealed]), N)
                    }
                    return (0, c.BB)((0, c.zo)([e.type, e.iv, e.sealed]), N)
                }({
                    type: r,
                    sealed: new i.OK((0, c.mL)(e.symKey, A)).seal(o, (0, c.mL)(e.message, x)),
                    iv: o,
                    senderPublicKey: s
                })
            }

            function z(e) {
                let t = new i.OK((0, c.mL)(e.symKey, A)),
                    {
                        sealed: r,
                        iv: s
                    } = B(e.encoded),
                    n = t.open(s, r);
                if (null === n) throw Error("Failed to decrypt");
                return (0, c.BB)(n, x)
            }

            function B(e) {
                let t = (0, c.mL)(e, N),
                    r = t.slice(0, 1);
                if (q(r) === T) {
                    let e = t.slice(1, 33),
                        i = t.slice(33, 45);
                    return {
                        type: r,
                        sealed: t.slice(45),
                        iv: i,
                        senderPublicKey: e
                    }
                }
                let i = t.slice(1, 13);
                return {
                    type: r,
                    sealed: t.slice(13),
                    iv: i
                }
            }

            function V(e, t) {
                let r = B(e);
                return K({
                    type: q(r.type),
                    senderPublicKey: "u" > typeof r.senderPublicKey ? (0, c.BB)(r.senderPublicKey, A) : void 0,
                    receiverPublicKey: null == t ? void 0 : t.receiverPublicKey
                })
            }

            function K(e) {
                let t = (null == e ? void 0 : e.type) || 0;
                if (t === T) {
                    if (typeof(null == e ? void 0 : e.senderPublicKey) > "u") throw Error("missing sender public key");
                    if (typeof(null == e ? void 0 : e.receiverPublicKey) > "u") throw Error("missing receiver public key")
                }
                return {
                    type: t,
                    senderPublicKey: null == e ? void 0 : e.senderPublicKey,
                    receiverPublicKey: null == e ? void 0 : e.receiverPublicKey
                }
            }

            function H(e) {
                return e.type === T && "string" == typeof e.senderPublicKey && "string" == typeof e.receiverPublicKey
            }
            var J = Object.defineProperty,
                W = Object.getOwnPropertySymbols,
                G = Object.prototype.hasOwnProperty,
                Z = Object.prototype.propertyIsEnumerable,
                Y = (e, t, r) => t in e ? J(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                Q = (e, t) => {
                    for (var r in t || (t = {})) G.call(t, r) && Y(e, r, t[r]);
                    if (W)
                        for (var r of W(t)) Z.call(t, r) && Y(e, r, t[r]);
                    return e
                };
            let X = {
                reactNative: "react-native",
                node: "node",
                browser: "browser",
                unknown: "unknown"
            };

            function $() {
                return "u" > typeof S && "u" > typeof S.versions && "u" > typeof S.versions.node
            }

            function ee() {
                return !(0, w.getDocument)() && !!(0, w.getNavigator)() && "ReactNative" === navigator.product
            }

            function et() {
                return !$() && !!(0, w.getNavigator)() && !!(0, w.getDocument)()
            }

            function er() {
                return ee() ? X.reactNative : $() ? X.node : et() ? X.browser : X.unknown
            }

            function ei() {
                var e;
                try {
                    return ee() && "u" > typeof r.g && "u" > typeof(null == r.g ? void 0 : r.g.Application) ? null == (e = r.g.Application) ? void 0 : e.applicationId : void 0
                } catch (e) {
                    return
                }
            }

            function es() {
                return (0, E.D)() || {
                    name: "",
                    description: "",
                    url: "",
                    icons: [""]
                }
            }

            function en(e) {
                var t;
                let i, {
                        protocol: s,
                        version: n,
                        relayUrl: o,
                        sdkVersion: a,
                        auth: c,
                        projectId: l,
                        useOnCloseEvent: h,
                        bundleId: p
                    } = e,
                    f = o.split("?"),
                    y = function(e, t, i) {
                        let s = function() {
                                var e;
                                if (er() === X.reactNative && "u" > typeof r.g && "u" > typeof(null == r.g ? void 0 : r.g.Platform)) {
                                    let {
                                        OS: e,
                                        Version: t
                                    } = r.g.Platform;
                                    return [e, t].join("-")
                                }
                                let t = e ? v(e) : "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product ? new g : "undefined" != typeof navigator ? v(navigator.userAgent) : void 0 !== u && u.version ? new d(u.version.slice(1)) : null;
                                if (null === t) return "unknown";
                                let i = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
                                return "browser" === t.type ? [i, t.name, t.version].join("-") : [i, t.version].join("-")
                            }(),
                            n = function() {
                                var e;
                                let t = er();
                                return t === X.browser ? [t, (null == (e = (0, w.getLocation)()) ? void 0 : e.host) || "unknown"].join(":") : t
                            }();
                        return [
                            [e, t].join("-"), ["js", i].join("-"), s, n
                        ].join("/")
                    }(s, n, a),
                    m = (t = f[1] || "", i = Q(Q({}, i = _.parse(t)), {
                        auth: c,
                        ua: y,
                        projectId: l,
                        useOnCloseEvent: h || void 0,
                        origin: p || void 0
                    }), t = _.stringify(i));
                return f[0] + "?" + m
            }

            function eo(e, t) {
                return e.filter(e => t.includes(e)).length === e.length
            }

            function ea(e) {
                return Object.fromEntries(e.entries())
            }

            function ec(e) {
                return new Map(Object.entries(e))
            }

            function eu() {
                let e, t, r, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D.FIVE_MINUTES,
                    s = arguments.length > 1 ? arguments[1] : void 0,
                    n = (0, D.toMiliseconds)(i || D.FIVE_MINUTES);
                return {
                    resolve: t => {
                        r && e && (clearTimeout(r), e(t))
                    },
                    reject: e => {
                        r && t && (clearTimeout(r), t(e))
                    },
                    done: () => new Promise((i, o) => {
                        r = setTimeout(() => {
                            o(Error(s))
                        }, n), e = i, t = o
                    })
                }
            }

            function el(e, t, r) {
                return new Promise(async (i, s) => {
                    let n = setTimeout(() => s(Error(r)), t);
                    try {
                        let t = await e;
                        i(t)
                    } catch (e) {
                        s(e)
                    }
                    clearTimeout(n)
                })
            }

            function eh(e, t) {
                if ("string" == typeof t && t.startsWith("".concat(e, ":"))) return t;
                if ("topic" === e.toLowerCase()) {
                    if ("string" != typeof t) throw Error('Value must be "string" for expirer target type: topic');
                    return "topic:".concat(t)
                }
                if ("id" === e.toLowerCase()) {
                    if ("number" != typeof t) throw Error('Value must be "number" for expirer target type: id');
                    return "id:".concat(t)
                }
                throw Error("Unknown expirer target type: ".concat(e))
            }

            function ed(e) {
                return eh("topic", e)
            }

            function ep(e) {
                return eh("id", e)
            }

            function ef(e) {
                let [t, r] = e.split(":"), i = {
                    id: void 0,
                    topic: void 0
                };
                if ("topic" === t && "string" == typeof r) i.topic = r;
                else if ("id" === t && Number.isInteger(Number(r))) i.id = Number(r);
                else throw Error("Invalid target, expected id:number or topic:string, got ".concat(t, ":").concat(r));
                return i
            }

            function eg(e, t) {
                return (0, D.fromMiliseconds)((t || Date.now()) + (0, D.toMiliseconds)(e))
            }

            function ey(e) {
                return Date.now() >= (0, D.toMiliseconds)(e)
            }

            function em(e, t) {
                return "".concat(e).concat(t ? ":".concat(t) : "")
            }

            function eb() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return [...new Set([...e, ...t])]
            }
            async function ev(e) {
                let {
                    id: t,
                    topic: i,
                    wcDeepLink: s
                } = e;
                try {
                    if (!s) return;
                    let e = "string" == typeof s ? JSON.parse(s) : s,
                        n = null == e ? void 0 : e.href;
                    if ("string" != typeof n) return;
                    n.endsWith("/") && (n = n.slice(0, -1));
                    let o = "".concat(n, "/wc?requestId=").concat(t, "&sessionTopic=").concat(i),
                        a = er();
                    a === X.browser ? o.startsWith("https://") ? window.open(o, "_blank", "noreferrer noopener") : window.open(o, "_self", "noreferrer noopener") : a === X.reactNative && "u" > typeof(null == r.g ? void 0 : r.g.Linking) && await r.g.Linking.openURL(o)
                } catch (e) {
                    console.error(e)
                }
            }
            async function eD(e, t) {
                try {
                    return await e.getItem(t) || (et() ? localStorage.getItem(t) : void 0)
                } catch (e) {
                    console.error(e)
                }
            }

            function ew(e) {
                return (null == e ? void 0 : e.relay) || {
                    protocol: "irn"
                }
            }

            function eE(e) {
                let t = I[e];
                if (typeof t > "u") throw Error("Relay Protocol not supported: ".concat(e));
                return t
            }
            var e_ = Object.defineProperty,
                eI = Object.defineProperties,
                eS = Object.getOwnPropertyDescriptors,
                eO = Object.getOwnPropertySymbols,
                eC = Object.prototype.hasOwnProperty,
                eR = Object.prototype.propertyIsEnumerable,
                eP = (e, t, r) => t in e ? e_(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                eA = (e, t) => {
                    for (var r in t || (t = {})) eC.call(t, r) && eP(e, r, t[r]);
                    if (eO)
                        for (var r of eO(t)) eR.call(t, r) && eP(e, r, t[r]);
                    return e
                },
                eN = (e, t) => eI(e, eS(t));

            function ex(e) {
                var t;
                let r = (e = (e = e.includes("wc://") ? e.replace("wc://", "") : e).includes("wc:") ? e.replace("wc:", "") : e).indexOf(":"),
                    i = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
                    s = e.substring(0, r),
                    n = e.substring(r + 1, i).split("@"),
                    o = "u" > typeof i ? e.substring(i) : "",
                    a = _.parse(o);
                return {
                    protocol: s,
                    topic: (t = n[0]).startsWith("//") ? t.substring(2) : t,
                    version: parseInt(n[1], 10),
                    symKey: a.symKey,
                    relay: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-",
                            r = {},
                            i = "relay" + t;
                        return Object.keys(e).forEach(t => {
                            if (t.startsWith(i)) {
                                let s = t.replace(i, ""),
                                    n = e[t];
                                r[s] = n
                            }
                        }), r
                    }(a),
                    expiryTimestamp: a.expiryTimestamp ? parseInt(a.expiryTimestamp, 10) : void 0
                }
            }

            function eT(e) {
                return "".concat(e.protocol, ":").concat(e.topic, "@").concat(e.version, "?") + _.stringify(eN(eA({
                    symKey: e.symKey
                }, function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-",
                        r = {};
                    return Object.keys(e).forEach(i => {
                        e[i] && (r["relay" + t + i] = e[i])
                    }), r
                }(e.relay)), {
                    expiryTimestamp: e.expiryTimestamp
                }))
            }

            function eU(e) {
                let t = [];
                return e.forEach(e => {
                    let [r, i] = e.split(":");
                    t.push("".concat(r, ":").concat(i))
                }), t
            }

            function eL(e) {
                return e.includes(":")
            }

            function eM(e) {
                return eL(e) ? e.split(":")[0] : e
            }
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            let ej = {
                    INVALID_METHOD: {
                        message: "Invalid method.",
                        code: 1001
                    },
                    INVALID_EVENT: {
                        message: "Invalid event.",
                        code: 1002
                    },
                    INVALID_UPDATE_REQUEST: {
                        message: "Invalid update request.",
                        code: 1003
                    },
                    INVALID_EXTEND_REQUEST: {
                        message: "Invalid extend request.",
                        code: 1004
                    },
                    INVALID_SESSION_SETTLE_REQUEST: {
                        message: "Invalid session settle request.",
                        code: 1005
                    },
                    UNAUTHORIZED_METHOD: {
                        message: "Unauthorized method.",
                        code: 3001
                    },
                    UNAUTHORIZED_EVENT: {
                        message: "Unauthorized event.",
                        code: 3002
                    },
                    UNAUTHORIZED_UPDATE_REQUEST: {
                        message: "Unauthorized update request.",
                        code: 3003
                    },
                    UNAUTHORIZED_EXTEND_REQUEST: {
                        message: "Unauthorized extend request.",
                        code: 3004
                    },
                    USER_REJECTED: {
                        message: "User rejected.",
                        code: 5e3
                    },
                    USER_REJECTED_CHAINS: {
                        message: "User rejected chains.",
                        code: 5001
                    },
                    USER_REJECTED_METHODS: {
                        message: "User rejected methods.",
                        code: 5002
                    },
                    USER_REJECTED_EVENTS: {
                        message: "User rejected events.",
                        code: 5003
                    },
                    UNSUPPORTED_CHAINS: {
                        message: "Unsupported chains.",
                        code: 5100
                    },
                    UNSUPPORTED_METHODS: {
                        message: "Unsupported methods.",
                        code: 5101
                    },
                    UNSUPPORTED_EVENTS: {
                        message: "Unsupported events.",
                        code: 5102
                    },
                    UNSUPPORTED_ACCOUNTS: {
                        message: "Unsupported accounts.",
                        code: 5103
                    },
                    UNSUPPORTED_NAMESPACE_KEY: {
                        message: "Unsupported namespace key.",
                        code: 5104
                    },
                    USER_DISCONNECTED: {
                        message: "User disconnected.",
                        code: 6e3
                    },
                    SESSION_SETTLEMENT_FAILED: {
                        message: "Session settlement failed.",
                        code: 7e3
                    },
                    WC_METHOD_UNSUPPORTED: {
                        message: "Unsupported wc_ method.",
                        code: 10001
                    }
                },
                ek = {
                    NOT_INITIALIZED: {
                        message: "Not initialized.",
                        code: 1
                    },
                    NO_MATCHING_KEY: {
                        message: "No matching key.",
                        code: 2
                    },
                    RESTORE_WILL_OVERRIDE: {
                        message: "Restore will override.",
                        code: 3
                    },
                    RESUBSCRIBED: {
                        message: "Resubscribed.",
                        code: 4
                    },
                    MISSING_OR_INVALID: {
                        message: "Missing or invalid.",
                        code: 5
                    },
                    EXPIRED: {
                        message: "Expired.",
                        code: 6
                    },
                    UNKNOWN_TYPE: {
                        message: "Unknown type.",
                        code: 7
                    },
                    MISMATCHED_TOPIC: {
                        message: "Mismatched topic.",
                        code: 8
                    },
                    NON_CONFORMING_NAMESPACES: {
                        message: "Non conforming namespaces.",
                        code: 9
                    }
                };

            function eq(e, t) {
                let {
                    message: r,
                    code: i
                } = ek[e];
                return {
                    message: t ? "".concat(r, " ").concat(t) : r,
                    code: i
                }
            }

            function eF(e, t) {
                let {
                    message: r,
                    code: i
                } = ej[e];
                return {
                    message: t ? "".concat(r, " ").concat(t) : r,
                    code: i
                }
            }

            function ez(e, t) {
                return !!Array.isArray(e) && (!("u" > typeof t) || !e.length || e.every(t))
            }

            function eB(e) {
                return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
            }

            function eV(e) {
                return typeof e > "u"
            }

            function eK(e, t) {
                return !!(t && eV(e)) || "string" == typeof e && !!e.trim().length
            }

            function eH(e, t) {
                return !!(t && eV(e)) || "number" == typeof e && !isNaN(e)
            }

            function eJ(e, t) {
                let {
                    requiredNamespaces: r
                } = t, i = Object.keys(e.namespaces), s = Object.keys(r), n = !0;
                return !!eo(s, i) && (i.forEach(t => {
                    let {
                        accounts: i,
                        methods: s,
                        events: o
                    } = e.namespaces[t], a = eU(i), c = r[t];
                    eo(R(t, c), a) && eo(c.methods, s) && eo(c.events, o) || (n = !1)
                }), n)
            }

            function eW(e) {
                return !!(eK(e, !1) && e.includes(":")) && 2 === e.split(":").length
            }

            function eG(e) {
                if (eK(e, !1)) try {
                    return "u" > typeof new URL(e)
                } catch (e) {}
                return !1
            }

            function eZ(e) {
                var t;
                return null == (t = null == e ? void 0 : e.proposer) ? void 0 : t.publicKey
            }

            function eY(e) {
                return null == e ? void 0 : e.topic
            }

            function eQ(e, t) {
                let r = null;
                return eK(null == e ? void 0 : e.publicKey, !1) || (r = eq("MISSING_OR_INVALID", "".concat(t, " controller public key should be a string"))), r
            }

            function eX(e) {
                let t = !0;
                return ez(e) ? e.length && (t = e.every(e => eK(e, !1))) : t = !1, t
            }

            function e$(e, t) {
                let r = null;
                return Object.values(e).forEach(e => {
                    var i;
                    let s;
                    if (r) return;
                    let n = (i = "".concat(t, ", namespace"), s = null, eX(null == e ? void 0 : e.methods) ? eX(null == e ? void 0 : e.events) || (s = eF("UNSUPPORTED_EVENTS", "".concat(i, ", events should be an array of strings or empty array for no events"))) : s = eF("UNSUPPORTED_METHODS", "".concat(i, ", methods should be an array of strings or empty array for no methods")), s);
                    n && (r = n)
                }), r
            }

            function e0(e, t, r) {
                let i = null;
                if (e && eB(e)) {
                    let s;
                    let n = e$(e, t);
                    n && (i = n);
                    let o = (s = null, Object.entries(e).forEach(e => {
                        var i, n;
                        let o, [a, c] = e;
                        if (s) return;
                        let u = (i = R(a, c), n = "".concat(t, " ").concat(r), o = null, ez(i) && i.length ? i.forEach(e => {
                            o || eW(e) || (o = eF("UNSUPPORTED_CHAINS", "".concat(n, ", chain ").concat(e, ' should be a string and conform to "namespace:chainId" format')))
                        }) : eW(a) || (o = eF("UNSUPPORTED_CHAINS", "".concat(n, ', chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }'))), o);
                        u && (s = u)
                    }), s);
                    o && (i = o)
                } else i = eq("MISSING_OR_INVALID", "".concat(t, ", ").concat(r, " should be an object with data"));
                return i
            }

            function e1(e, t) {
                let r = null;
                if (e && eB(e)) {
                    let i;
                    let s = e$(e, t);
                    s && (r = s);
                    let n = (i = null, Object.values(e).forEach(e => {
                        var r, s;
                        let n;
                        if (i) return;
                        let o = (r = null == e ? void 0 : e.accounts, s = "".concat(t, " namespace"), n = null, ez(r) ? r.forEach(e => {
                            n || function(e) {
                                if (eK(e, !1) && e.includes(":")) {
                                    let t = e.split(":");
                                    if (3 === t.length) {
                                        let e = t[0] + ":" + t[1];
                                        return !!t[2] && eW(e)
                                    }
                                }
                                return !1
                            }(e) || (n = eF("UNSUPPORTED_ACCOUNTS", "".concat(s, ", account ").concat(e, ' should be a string and conform to "namespace:chainId:address" format')))
                        }) : n = eF("UNSUPPORTED_ACCOUNTS", "".concat(s, ', accounts should be an array of strings conforming to "namespace:chainId:address" format')), n);
                        o && (i = o)
                    }), i);
                    n && (r = n)
                } else r = eq("MISSING_OR_INVALID", "".concat(t, ", namespaces should be an object with data"));
                return r
            }

            function e3(e) {
                return eK(e.protocol, !0)
            }

            function e5(e, t) {
                let r = !1;
                return t && !e ? r = !0 : e && ez(e) && e.length && e.forEach(e => {
                    r = e3(e)
                }), r
            }

            function e6(e) {
                return "number" == typeof e
            }

            function e8(e) {
                return "u" > typeof e
            }

            function e2(e) {
                return !(!e || "object" != typeof e || !e.code || !eH(e.code, !1) || !e.message || !eK(e.message, !1))
            }

            function e4(e) {
                return !(eV(e) || !eK(e.method, !1))
            }

            function e7(e) {
                return !(eV(e) || eV(e.result) && eV(e.error) || !eH(e.id, !1) || !eK(e.jsonrpc, !1))
            }

            function e9(e) {
                return !(eV(e) || !eK(e.name, !1))
            }

            function te(e, t) {
                return !(!eW(t) || !(function(e) {
                    let t = [];
                    return Object.values(e).forEach(e => {
                        t.push(...eU(e.accounts))
                    }), t
                })(e).includes(t))
            }

            function tt(e, t, r) {
                return !!eK(r, !1) && (function(e, t) {
                    let r = [];
                    return Object.values(e).forEach(e => {
                        eU(e.accounts).includes(t) && r.push(...e.methods)
                    }), r
                })(e, t).includes(r)
            }

            function tr(e, t, r) {
                return !!eK(r, !1) && (function(e, t) {
                    let r = [];
                    return Object.values(e).forEach(e => {
                        eU(e.accounts).includes(t) && r.push(...e.events)
                    }), r
                })(e, t).includes(r)
            }

            function ti(e, t, r) {
                let i = null,
                    s = function(e) {
                        let t = {};
                        return Object.keys(e).forEach(r => {
                            var i;
                            r.includes(":") ? t[r] = e[r] : null == (i = e[r].chains) || i.forEach(i => {
                                t[i] = {
                                    methods: e[r].methods,
                                    events: e[r].events
                                }
                            })
                        }), t
                    }(e),
                    n = function(e) {
                        let t = {};
                        return Object.keys(e).forEach(r => {
                            if (r.includes(":")) t[r] = e[r];
                            else {
                                let i = eU(e[r].accounts);
                                null == i || i.forEach(i => {
                                    t[i] = {
                                        accounts: e[r].accounts.filter(e => e.includes("".concat(i, ":"))),
                                        methods: e[r].methods,
                                        events: e[r].events
                                    }
                                })
                            }
                        }), t
                    }(t),
                    o = Object.keys(s),
                    a = Object.keys(n),
                    c = ts(Object.keys(e)),
                    u = ts(Object.keys(t)),
                    l = c.filter(e => !u.includes(e));
                return l.length && (i = eq("NON_CONFORMING_NAMESPACES", "".concat(r, " namespaces keys don't satisfy requiredNamespaces.\n      Required: ").concat(l.toString(), "\n      Received: ").concat(Object.keys(t).toString()))), eo(o, a) || (i = eq("NON_CONFORMING_NAMESPACES", "".concat(r, " namespaces chains don't satisfy required namespaces.\n      Required: ").concat(o.toString(), "\n      Approved: ").concat(a.toString()))), Object.keys(t).forEach(e => {
                    if (!e.includes(":") || i) return;
                    let s = eU(t[e].accounts);
                    s.includes(e) || (i = eq("NON_CONFORMING_NAMESPACES", "".concat(r, " namespaces accounts don't satisfy namespace accounts for ").concat(e, "\n        Required: ").concat(e, "\n        Approved: ").concat(s.toString())))
                }), o.forEach(e => {
                    i || (eo(s[e].methods, n[e].methods) ? eo(s[e].events, n[e].events) || (i = eq("NON_CONFORMING_NAMESPACES", "".concat(r, " namespaces events don't satisfy namespace events for ").concat(e))) : i = eq("NON_CONFORMING_NAMESPACES", "".concat(r, " namespaces methods don't satisfy namespace methods for ").concat(e)))
                }), i
            }

            function ts(e) {
                return [...new Set(e.map(e => e.includes(":") ? e.split(":")[0] : e))]
            }

            function tn(e, t) {
                return eH(e, !1) && e <= t.max && e >= t.min
            }

            function to() {
                let e = er();
                return new Promise(t => {
                    switch (e) {
                        case X.browser:
                            var r;
                            t(et() && (null === (r = navigator) || void 0 === r ? void 0 : r.onLine));
                            break;
                        case X.reactNative:
                            t(ta());
                            break;
                        case X.node:
                        default:
                            t(!0)
                    }
                })
            }
            async function ta() {
                if (ee() && "u" > typeof r.g && null != r.g && r.g.NetInfo) {
                    let e = await (null == r.g ? void 0 : r.g.NetInfo.fetch());
                    return null == e ? void 0 : e.isConnected
                }
                return !0
            }

            function tc(e) {
                var t;
                switch (er()) {
                    case X.browser:
                        !ee() && et() && (window.addEventListener("online", () => e(!0)), window.addEventListener("offline", () => e(!1)));
                        break;
                    case X.reactNative:
                        ee() && "u" > typeof r.g && null != r.g && r.g.NetInfo && (null === (t = r.g) || void 0 === t || t.NetInfo.addEventListener(t => e(null == t ? void 0 : t.isConnected)));
                    case X.node:
                }
            }
            let tu = {};
            class tl {
                static get(e) {
                    return tu[e]
                }
                static set(e, t) {
                    tu[e] = t
                }
                static delete(e) {
                    delete tu[e]
                }
            }
        },
        91244: function(e) {
            "use strict";
            var t = "%[a-f0-9]{2}",
                r = RegExp("(" + t + ")|([^%]+?)", "gi"),
                i = RegExp("(" + t + ")+", "gi");
            e.exports = function(e) {
                if ("string" != typeof e) throw TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
                try {
                    return e = e.replace(/\+/g, " "), decodeURIComponent(e)
                } catch (t) {
                    return function(e) {
                        for (var t = {
                                "%FE%FF": "��",
                                "%FF%FE": "��"
                            }, s = i.exec(e); s;) {
                            try {
                                t[s[0]] = decodeURIComponent(s[0])
                            } catch (e) {
                                var n = function(e) {
                                    try {
                                        return decodeURIComponent(e)
                                    } catch (s) {
                                        for (var t = e.match(r) || [], i = 1; i < t.length; i++) t = (e = (function e(t, r) {
                                            try {
                                                return [decodeURIComponent(t.join(""))]
                                            } catch (e) {}
                                            if (1 === t.length) return t;
                                            r = r || 1;
                                            var i = t.slice(0, r),
                                                s = t.slice(r);
                                            return Array.prototype.concat.call([], e(i), e(s))
                                        })(t, i).join("")).match(r) || [];
                                        return e
                                    }
                                }(s[0]);
                                n !== s[0] && (t[s[0]] = n)
                            }
                            s = i.exec(e)
                        }
                        t["%C2"] = "�";
                        for (var o = Object.keys(t), a = 0; a < o.length; a++) {
                            var c = o[a];
                            e = e.replace(RegExp(c, "g"), t[c])
                        }
                        return e
                    }(e)
                }
            }
        },
        38046: function(e) {
            "use strict";
            e.exports = function(e, t) {
                for (var r = {}, i = Object.keys(e), s = Array.isArray(t), n = 0; n < i.length; n++) {
                    var o = i[n],
                        a = e[o];
                    (s ? -1 !== t.indexOf(o) : t(o, a, e)) && (r[o] = a)
                }
                return r
            }
        },
        20523: function(e, t, r) {
            "use strict";
            let i = r(85936),
                s = r(91244),
                n = r(42708),
                o = r(38046),
                a = e => null == e,
                c = Symbol("encodeFragmentIdentifier");

            function u(e) {
                if ("string" != typeof e || 1 !== e.length) throw TypeError("arrayFormatSeparator must be single character string")
            }

            function l(e, t) {
                return t.encode ? t.strict ? i(e) : encodeURIComponent(e) : e
            }

            function h(e, t) {
                return t.decode ? s(e) : e
            }

            function d(e) {
                let t = e.indexOf("#");
                return -1 !== t && (e = e.slice(0, t)), e
            }

            function p(e) {
                let t = (e = d(e)).indexOf("?");
                return -1 === t ? "" : e.slice(t + 1)
            }

            function f(e, t) {
                return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : t.parseBooleans && null !== e && ("true" === e.toLowerCase() || "false" === e.toLowerCase()) && (e = "true" === e.toLowerCase()), e
            }

            function g(e, t) {
                u((t = Object.assign({
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1
                }, t)).arrayFormatSeparator);
                let r = function(e) {
                        let t;
                        switch (e.arrayFormat) {
                            case "index":
                                return (e, r, i) => {
                                    if (t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), !t) {
                                        i[e] = r;
                                        return
                                    }
                                    void 0 === i[e] && (i[e] = {}), i[e][t[1]] = r
                                };
                            case "bracket":
                                return (e, r, i) => {
                                    if (t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), !t) {
                                        i[e] = r;
                                        return
                                    }
                                    if (void 0 === i[e]) {
                                        i[e] = [r];
                                        return
                                    }
                                    i[e] = [].concat(i[e], r)
                                };
                            case "colon-list-separator":
                                return (e, r, i) => {
                                    if (t = /(:list)$/.exec(e), e = e.replace(/:list$/, ""), !t) {
                                        i[e] = r;
                                        return
                                    }
                                    if (void 0 === i[e]) {
                                        i[e] = [r];
                                        return
                                    }
                                    i[e] = [].concat(i[e], r)
                                };
                            case "comma":
                            case "separator":
                                return (t, r, i) => {
                                    let s = "string" == typeof r && r.includes(e.arrayFormatSeparator),
                                        n = "string" == typeof r && !s && h(r, e).includes(e.arrayFormatSeparator);
                                    r = n ? h(r, e) : r;
                                    let o = s || n ? r.split(e.arrayFormatSeparator).map(t => h(t, e)) : null === r ? r : h(r, e);
                                    i[t] = o
                                };
                            case "bracket-separator":
                                return (t, r, i) => {
                                    let s = /(\[\])$/.test(t);
                                    if (t = t.replace(/\[\]$/, ""), !s) {
                                        i[t] = r ? h(r, e) : r;
                                        return
                                    }
                                    let n = null === r ? [] : r.split(e.arrayFormatSeparator).map(t => h(t, e));
                                    if (void 0 === i[t]) {
                                        i[t] = n;
                                        return
                                    }
                                    i[t] = [].concat(i[t], n)
                                };
                            default:
                                return (e, t, r) => {
                                    if (void 0 === r[e]) {
                                        r[e] = t;
                                        return
                                    }
                                    r[e] = [].concat(r[e], t)
                                }
                        }
                    }(t),
                    i = Object.create(null);
                if ("string" != typeof e || !(e = e.trim().replace(/^[?#&]/, ""))) return i;
                for (let s of e.split("&")) {
                    if ("" === s) continue;
                    let [e, o] = n(t.decode ? s.replace(/\+/g, " ") : s, "=");
                    o = void 0 === o ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? o : h(o, t), r(h(e, t), o, i)
                }
                for (let e of Object.keys(i)) {
                    let r = i[e];
                    if ("object" == typeof r && null !== r)
                        for (let e of Object.keys(r)) r[e] = f(r[e], t);
                    else i[e] = f(r, t)
                }
                return !1 === t.sort ? i : (!0 === t.sort ? Object.keys(i).sort() : Object.keys(i).sort(t.sort)).reduce((e, t) => {
                    let r = i[t];
                    return r && "object" == typeof r && !Array.isArray(r) ? e[t] = function e(t) {
                        return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort((e, t) => Number(e) - Number(t)).map(e => t[e]) : t
                    }(r) : e[t] = r, e
                }, Object.create(null))
            }
            t.extract = p, t.parse = g, t.stringify = (e, t) => {
                if (!e) return "";
                u((t = Object.assign({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ","
                }, t)).arrayFormatSeparator);
                let r = r => t.skipNull && a(e[r]) || t.skipEmptyString && "" === e[r],
                    i = function(e) {
                        switch (e.arrayFormat) {
                            case "index":
                                return t => (r, i) => {
                                    let s = r.length;
                                    return void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, [l(t, e), "[", s, "]"].join("")] : [...r, [l(t, e), "[", l(s, e), "]=", l(i, e)].join("")]
                                };
                            case "bracket":
                                return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, [l(t, e), "[]"].join("")] : [...r, [l(t, e), "[]=", l(i, e)].join("")];
                            case "colon-list-separator":
                                return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, [l(t, e), ":list="].join("")] : [...r, [l(t, e), ":list=", l(i, e)].join("")];
                            case "comma":
                            case "separator":
                            case "bracket-separator":
                                {
                                    let t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                                    return r => (i, s) => void 0 === s || e.skipNull && null === s || e.skipEmptyString && "" === s ? i : (s = null === s ? "" : s, 0 === i.length) ? [
                                        [l(r, e), t, l(s, e)].join("")
                                    ] : [
                                        [i, l(s, e)].join(e.arrayFormatSeparator)
                                    ]
                                }
                            default:
                                return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, l(t, e)] : [...r, [l(t, e), "=", l(i, e)].join("")]
                        }
                    }(t),
                    s = {};
                for (let t of Object.keys(e)) r(t) || (s[t] = e[t]);
                let n = Object.keys(s);
                return !1 !== t.sort && n.sort(t.sort), n.map(r => {
                    let s = e[r];
                    return void 0 === s ? "" : null === s ? l(r, t) : Array.isArray(s) ? 0 === s.length && "bracket-separator" === t.arrayFormat ? l(r, t) + "[]" : s.reduce(i(r), []).join("&") : l(r, t) + "=" + l(s, t)
                }).filter(e => e.length > 0).join("&")
            }, t.parseUrl = (e, t) => {
                t = Object.assign({
                    decode: !0
                }, t);
                let [r, i] = n(e, "#");
                return Object.assign({
                    url: r.split("?")[0] || "",
                    query: g(p(e), t)
                }, t && t.parseFragmentIdentifier && i ? {
                    fragmentIdentifier: h(i, t)
                } : {})
            }, t.stringifyUrl = (e, r) => {
                r = Object.assign({
                    encode: !0,
                    strict: !0,
                    [c]: !0
                }, r);
                let i = d(e.url).split("?")[0] || "",
                    s = t.extract(e.url),
                    n = Object.assign(t.parse(s, {
                        sort: !1
                    }), e.query),
                    o = t.stringify(n, r);
                o && (o = "?".concat(o));
                let a = function(e) {
                    let t = "",
                        r = e.indexOf("#");
                    return -1 !== r && (t = e.slice(r)), t
                }(e.url);
                return e.fragmentIdentifier && (a = "#".concat(r[c] ? l(e.fragmentIdentifier, r) : e.fragmentIdentifier)), "".concat(i).concat(o).concat(a)
            }, t.pick = (e, r, i) => {
                i = Object.assign({
                    parseFragmentIdentifier: !0,
                    [c]: !1
                }, i);
                let {
                    url: s,
                    query: n,
                    fragmentIdentifier: a
                } = t.parseUrl(e, i);
                return t.stringifyUrl({
                    url: s,
                    query: o(n, r),
                    fragmentIdentifier: a
                }, i)
            }, t.exclude = (e, r, i) => {
                let s = Array.isArray(r) ? e => !r.includes(e) : (e, t) => !r(e, t);
                return t.pick(e, s, i)
            }
        },
        42708: function(e) {
            "use strict";
            e.exports = (e, t) => {
                if (!("string" == typeof e && "string" == typeof t)) throw TypeError("Expected the arguments to be of type `string`");
                if ("" === t) return [e];
                let r = e.indexOf(t);
                return -1 === r ? [e] : [e.slice(0, r), e.slice(r + t.length)]
            }
        },
        74613: function(e, t) {
            "use strict";

            function r(e) {
                let t;
                return void 0 !== window[e] && (t = window[e]), t
            }

            function i(e) {
                let t = r(e);
                if (!t) throw Error("".concat(e, " is not defined in Window"));
                return t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getLocalStorage = t.getLocalStorageOrThrow = t.getCrypto = t.getCryptoOrThrow = t.getLocation = t.getLocationOrThrow = t.getNavigator = t.getNavigatorOrThrow = t.getDocument = t.getDocumentOrThrow = t.getFromWindowOrThrow = t.getFromWindow = void 0, t.getFromWindow = r, t.getFromWindowOrThrow = i, t.getDocumentOrThrow = function() {
                return i("document")
            }, t.getDocument = function() {
                return r("document")
            }, t.getNavigatorOrThrow = function() {
                return i("navigator")
            }, t.getNavigator = function() {
                return r("navigator")
            }, t.getLocationOrThrow = function() {
                return i("location")
            }, t.getLocation = function() {
                return r("location")
            }, t.getCryptoOrThrow = function() {
                return i("crypto")
            }, t.getCrypto = function() {
                return r("crypto")
            }, t.getLocalStorageOrThrow = function() {
                return i("localStorage")
            }, t.getLocalStorage = function() {
                return r("localStorage")
            }
        },
        47064: function(e, t, r) {
            "use strict";
            t.D = void 0;
            let i = r(74613);
            t.D = function() {
                let e, t, r;
                try {
                    e = i.getDocumentOrThrow(), t = i.getLocationOrThrow()
                } catch (e) {
                    return null
                }

                function s() {
                    for (var t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                    let s = e.getElementsByTagName("meta");
                    for (let e = 0; e < s.length; e++) {
                        let t = s[e],
                            i = ["itemprop", "property", "name"].map(e => t.getAttribute(e)).filter(e => !!e && r.includes(e));
                        if (i.length && i) {
                            let e = t.getAttribute("content");
                            if (e) return e
                        }
                    }
                    return ""
                }
                let n = ((r = s("name", "og:site_name", "og:title", "twitter:title")) || (r = e.title), r),
                    o = s("description", "og:description", "twitter:description", "keywords");
                return {
                    description: o,
                    url: t.origin,
                    icons: function() {
                        let r = e.getElementsByTagName("link"),
                            i = [];
                        for (let e = 0; e < r.length; e++) {
                            let s = r[e],
                                n = s.getAttribute("rel");
                            if (n && n.toLowerCase().indexOf("icon") > -1) {
                                let e = s.getAttribute("href");
                                if (e) {
                                    if (-1 === e.toLowerCase().indexOf("https:") && -1 === e.toLowerCase().indexOf("http:") && 0 !== e.indexOf("//")) {
                                        let r = t.protocol + "//" + t.host;
                                        if (0 === e.indexOf("/")) r += e;
                                        else {
                                            let i = t.pathname.split("/");
                                            i.pop(), r += i.join("/") + "/" + e
                                        }
                                        i.push(r)
                                    } else if (0 === e.indexOf("//")) {
                                        let r = t.protocol + e;
                                        i.push(r)
                                    } else i.push(e)
                                }
                            }
                        }
                        return i
                    }(),
                    name: n
                }
            }
        },
        92899: function(e, t, r) {
            "use strict";
            e = r.nmd(e);
            var i, s, n, o = "__lodash_hash_undefined__",
                a = "[object Arguments]",
                c = "[object Array]",
                u = "[object Boolean]",
                l = "[object Date]",
                h = "[object Error]",
                d = "[object Function]",
                p = "[object Map]",
                f = "[object Number]",
                g = "[object Object]",
                y = "[object Promise]",
                m = "[object RegExp]",
                b = "[object Set]",
                v = "[object String]",
                D = "[object WeakMap]",
                w = "[object ArrayBuffer]",
                E = "[object DataView]",
                _ = /^\[object .+?Constructor\]$/,
                I = /^(?:0|[1-9]\d*)$/,
                S = {};
            S["[object Float32Array]"] = S["[object Float64Array]"] = S["[object Int8Array]"] = S["[object Int16Array]"] = S["[object Int32Array]"] = S["[object Uint8Array]"] = S["[object Uint8ClampedArray]"] = S["[object Uint16Array]"] = S["[object Uint32Array]"] = !0, S[a] = S[c] = S[w] = S[u] = S[E] = S[l] = S[h] = S[d] = S[p] = S[f] = S[g] = S[m] = S[b] = S[v] = S[D] = !1;
            var O = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
                C = "object" == typeof self && self && self.Object === Object && self,
                R = O || C || Function("return this")(),
                P = t && !t.nodeType && t,
                A = P && e && !e.nodeType && e,
                N = A && A.exports === P,
                x = N && O.process,
                T = function() {
                    try {
                        return x && x.binding && x.binding("util")
                    } catch (e) {}
                }(),
                U = T && T.isTypedArray;

            function L(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach(function(e, i) {
                    r[++t] = [i, e]
                }), r
            }

            function M(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach(function(e) {
                    r[++t] = e
                }), r
            }
            var j = Array.prototype,
                k = Function.prototype,
                q = Object.prototype,
                F = R["__core-js_shared__"],
                z = k.toString,
                B = q.hasOwnProperty,
                V = (i = /[^.]+$/.exec(F && F.keys && F.keys.IE_PROTO || "")) ? "Symbol(src)_1." + i : "",
                K = q.toString,
                H = RegExp("^" + z.call(B).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                J = N ? R.Buffer : void 0,
                W = R.Symbol,
                G = R.Uint8Array,
                Z = q.propertyIsEnumerable,
                Y = j.splice,
                Q = W ? W.toStringTag : void 0,
                X = Object.getOwnPropertySymbols,
                $ = J ? J.isBuffer : void 0,
                ee = (s = Object.keys, n = Object, function(e) {
                    return s(n(e))
                }),
                et = eS(R, "DataView"),
                er = eS(R, "Map"),
                ei = eS(R, "Promise"),
                es = eS(R, "Set"),
                en = eS(R, "WeakMap"),
                eo = eS(Object, "create"),
                ea = eR(et),
                ec = eR(er),
                eu = eR(ei),
                el = eR(es),
                eh = eR(en),
                ed = W ? W.prototype : void 0,
                ep = ed ? ed.valueOf : void 0;

            function ef(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function eg(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function ey(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function em(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.__data__ = new ey; ++t < r;) this.add(e[t])
            }

            function eb(e) {
                var t = this.__data__ = new eg(e);
                this.size = t.size
            }

            function ev(e, t) {
                for (var r = e.length; r--;)
                    if (eP(e[r][0], t)) return r;
                return -1
            }

            function eD(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Q && Q in Object(e) ? function(e) {
                    var t = B.call(e, Q),
                        r = e[Q];
                    try {
                        e[Q] = void 0;
                        var i = !0
                    } catch (e) {}
                    var s = K.call(e);
                    return i && (t ? e[Q] = r : delete e[Q]), s
                }(e) : K.call(e)
            }

            function ew(e) {
                return eM(e) && eD(e) == a
            }

            function eE(e, t, r, i, s, n) {
                var o = 1 & r,
                    a = e.length,
                    c = t.length;
                if (a != c && !(o && c > a)) return !1;
                var u = n.get(e);
                if (u && n.get(t)) return u == t;
                var l = -1,
                    h = !0,
                    d = 2 & r ? new em : void 0;
                for (n.set(e, t), n.set(t, e); ++l < a;) {
                    var p = e[l],
                        f = t[l];
                    if (i) var g = o ? i(f, p, l, t, e, n) : i(p, f, l, e, t, n);
                    if (void 0 !== g) {
                        if (g) continue;
                        h = !1;
                        break
                    }
                    if (d) {
                        if (! function(e, t) {
                                for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                                    if (t(e[r], r, e)) return !0;
                                return !1
                            }(t, function(e, t) {
                                if (!d.has(t) && (p === e || s(p, e, r, i, n))) return d.push(t)
                            })) {
                            h = !1;
                            break
                        }
                    } else if (!(p === f || s(p, f, r, i, n))) {
                        h = !1;
                        break
                    }
                }
                return n.delete(e), n.delete(t), h
            }

            function e_(e) {
                var t;
                return t = function(e) {
                    return null != e && eU(e.length) && !eT(e) ? function(e, t) {
                        var r, i = eN(e),
                            s = !i && eA(e),
                            n = !i && !s && ex(e),
                            o = !i && !s && !n && ej(e),
                            a = i || s || n || o,
                            c = a ? function(e, t) {
                                for (var r = -1, i = Array(e); ++r < e;) i[r] = t(r);
                                return i
                            }(e.length, String) : [],
                            u = c.length;
                        for (var l in e) B.call(e, l) && !(a && ("length" == l || n && ("offset" == l || "parent" == l) || o && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || (r = null == (r = u) ? 9007199254740991 : r) && ("number" == typeof l || I.test(l)) && l > -1 && l % 1 == 0 && l < r)) && c.push(l);
                        return c
                    }(e) : function(e) {
                        if (t = e && e.constructor, e !== ("function" == typeof t && t.prototype || q)) return ee(e);
                        var t, r = [];
                        for (var i in Object(e)) B.call(e, i) && "constructor" != i && r.push(i);
                        return r
                    }(e)
                }(e), eN(e) ? t : function(e, t) {
                    for (var r = -1, i = t.length, s = e.length; ++r < i;) e[s + r] = t[r];
                    return e
                }(t, eO(e))
            }

            function eI(e, t) {
                var r, i = e.__data__;
                return ("string" == (r = typeof t) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t) ? i["string" == typeof t ? "string" : "hash"] : i.map
            }

            function eS(e, t) {
                var r = null == e ? void 0 : e[t];
                return !(!eL(r) || V && V in r) && (eT(r) ? H : _).test(eR(r)) ? r : void 0
            }
            ef.prototype.clear = function() {
                this.__data__ = eo ? eo(null) : {}, this.size = 0
            }, ef.prototype.delete = function(e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0, t
            }, ef.prototype.get = function(e) {
                var t = this.__data__;
                if (eo) {
                    var r = t[e];
                    return r === o ? void 0 : r
                }
                return B.call(t, e) ? t[e] : void 0
            }, ef.prototype.has = function(e) {
                var t = this.__data__;
                return eo ? void 0 !== t[e] : B.call(t, e)
            }, ef.prototype.set = function(e, t) {
                var r = this.__data__;
                return this.size += this.has(e) ? 0 : 1, r[e] = eo && void 0 === t ? o : t, this
            }, eg.prototype.clear = function() {
                this.__data__ = [], this.size = 0
            }, eg.prototype.delete = function(e) {
                var t = this.__data__,
                    r = ev(t, e);
                return !(r < 0) && (r == t.length - 1 ? t.pop() : Y.call(t, r, 1), --this.size, !0)
            }, eg.prototype.get = function(e) {
                var t = this.__data__,
                    r = ev(t, e);
                return r < 0 ? void 0 : t[r][1]
            }, eg.prototype.has = function(e) {
                return ev(this.__data__, e) > -1
            }, eg.prototype.set = function(e, t) {
                var r = this.__data__,
                    i = ev(r, e);
                return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this
            }, ey.prototype.clear = function() {
                this.size = 0, this.__data__ = {
                    hash: new ef,
                    map: new(er || eg),
                    string: new ef
                }
            }, ey.prototype.delete = function(e) {
                var t = eI(this, e).delete(e);
                return this.size -= t ? 1 : 0, t
            }, ey.prototype.get = function(e) {
                return eI(this, e).get(e)
            }, ey.prototype.has = function(e) {
                return eI(this, e).has(e)
            }, ey.prototype.set = function(e, t) {
                var r = eI(this, e),
                    i = r.size;
                return r.set(e, t), this.size += r.size == i ? 0 : 1, this
            }, em.prototype.add = em.prototype.push = function(e) {
                return this.__data__.set(e, o), this
            }, em.prototype.has = function(e) {
                return this.__data__.has(e)
            }, eb.prototype.clear = function() {
                this.__data__ = new eg, this.size = 0
            }, eb.prototype.delete = function(e) {
                var t = this.__data__,
                    r = t.delete(e);
                return this.size = t.size, r
            }, eb.prototype.get = function(e) {
                return this.__data__.get(e)
            }, eb.prototype.has = function(e) {
                return this.__data__.has(e)
            }, eb.prototype.set = function(e, t) {
                var r = this.__data__;
                if (r instanceof eg) {
                    var i = r.__data__;
                    if (!er || i.length < 199) return i.push([e, t]), this.size = ++r.size, this;
                    r = this.__data__ = new ey(i)
                }
                return r.set(e, t), this.size = r.size, this
            };
            var eO = X ? function(e) {
                    return null == e ? [] : function(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length, s = 0, n = []; ++r < i;) {
                            var o = e[r];
                            t(o, r, e) && (n[s++] = o)
                        }
                        return n
                    }(X(e = Object(e)), function(t) {
                        return Z.call(e, t)
                    })
                } : function() {
                    return []
                },
                eC = eD;

            function eR(e) {
                if (null != e) {
                    try {
                        return z.call(e)
                    } catch (e) {}
                    try {
                        return e + ""
                    } catch (e) {}
                }
                return ""
            }

            function eP(e, t) {
                return e === t || e != e && t != t
            }(et && eC(new et(new ArrayBuffer(1))) != E || er && eC(new er) != p || ei && eC(ei.resolve()) != y || es && eC(new es) != b || en && eC(new en) != D) && (eC = function(e) {
                var t = eD(e),
                    r = t == g ? e.constructor : void 0,
                    i = r ? eR(r) : "";
                if (i) switch (i) {
                    case ea:
                        return E;
                    case ec:
                        return p;
                    case eu:
                        return y;
                    case el:
                        return b;
                    case eh:
                        return D
                }
                return t
            });
            var eA = ew(function() {
                    return arguments
                }()) ? ew : function(e) {
                    return eM(e) && B.call(e, "callee") && !Z.call(e, "callee")
                },
                eN = Array.isArray,
                ex = $ || function() {
                    return !1
                };

            function eT(e) {
                if (!eL(e)) return !1;
                var t = eD(e);
                return t == d || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            }

            function eU(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
            }

            function eL(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }

            function eM(e) {
                return null != e && "object" == typeof e
            }
            var ej = U ? function(e) {
                return U(e)
            } : function(e) {
                return eM(e) && eU(e.length) && !!S[eD(e)]
            };
            e.exports = function(e, t) {
                return function e(t, r, i, s, n) {
                    return t === r || (null != t && null != r && (eM(t) || eM(r)) ? function(e, t, r, i, s, n) {
                        var o = eN(e),
                            d = eN(t),
                            y = o ? c : eC(e),
                            D = d ? c : eC(t);
                        y = y == a ? g : y, D = D == a ? g : D;
                        var _ = y == g,
                            I = D == g,
                            S = y == D;
                        if (S && ex(e)) {
                            if (!ex(t)) return !1;
                            o = !0, _ = !1
                        }
                        if (S && !_) return n || (n = new eb), o || ej(e) ? eE(e, t, r, i, s, n) : function(e, t, r, i, s, n, o) {
                            switch (r) {
                                case E:
                                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                                    e = e.buffer, t = t.buffer;
                                case w:
                                    if (e.byteLength != t.byteLength || !n(new G(e), new G(t))) break;
                                    return !0;
                                case u:
                                case l:
                                case f:
                                    return eP(+e, +t);
                                case h:
                                    return e.name == t.name && e.message == t.message;
                                case m:
                                case v:
                                    return e == t + "";
                                case p:
                                    var a = L;
                                case b:
                                    var c = 1 & i;
                                    if (a || (a = M), e.size != t.size && !c) break;
                                    var d = o.get(e);
                                    if (d) return d == t;
                                    i |= 2, o.set(e, t);
                                    var g = eE(a(e), a(t), i, s, n, o);
                                    return o.delete(e), g;
                                case "[object Symbol]":
                                    if (ep) return ep.call(e) == ep.call(t)
                            }
                            return !1
                        }(e, t, y, r, i, s, n);
                        if (!(1 & r)) {
                            var O = _ && B.call(e, "__wrapped__"),
                                C = I && B.call(t, "__wrapped__");
                            if (O || C) {
                                var R = O ? e.value() : e,
                                    P = C ? t.value() : t;
                                return n || (n = new eb), s(R, P, r, i, n)
                            }
                        }
                        return !!S && (n || (n = new eb), function(e, t, r, i, s, n) {
                            var o = 1 & r,
                                a = e_(e),
                                c = a.length;
                            if (c != e_(t).length && !o) return !1;
                            for (var u = c; u--;) {
                                var l = a[u];
                                if (!(o ? l in t : B.call(t, l))) return !1
                            }
                            var h = n.get(e);
                            if (h && n.get(t)) return h == t;
                            var d = !0;
                            n.set(e, t), n.set(t, e);
                            for (var p = o; ++u < c;) {
                                var f = e[l = a[u]],
                                    g = t[l];
                                if (i) var y = o ? i(g, f, l, t, e, n) : i(f, g, l, e, t, n);
                                if (!(void 0 === y ? f === g || s(f, g, r, i, n) : y)) {
                                    d = !1;
                                    break
                                }
                                p || (p = "constructor" == l)
                            }
                            if (d && !p) {
                                var m = e.constructor,
                                    b = t.constructor;
                                m != b && "constructor" in e && "constructor" in t && !("function" == typeof m && m instanceof m && "function" == typeof b && b instanceof b) && (d = !1)
                            }
                            return n.delete(e), n.delete(t), d
                        }(e, t, r, i, s, n))
                    }(t, r, i, s, e, n) : t != t && r != r)
                }(e, t)
            }
        },
        38861: function(e) {
            "use strict";
            let t = self.fetch.bind(self);
            e.exports = t, e.exports.default = e.exports
        },
        74650: function(e) {
            "use strict";

            function t(e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return '"[Circular]"'
                }
            }
            e.exports = function(e, r, i) {
                var s = i && i.stringify || t;
                if ("object" == typeof e && null !== e) {
                    var n = r.length + 1;
                    if (1 === n) return e;
                    var o = Array(n);
                    o[0] = s(e);
                    for (var a = 1; a < n; a++) o[a] = s(r[a]);
                    return o.join(" ")
                }
                if ("string" != typeof e) return e;
                var c = r.length;
                if (0 === c) return e;
                for (var u = "", l = 0, h = -1, d = e && e.length || 0, p = 0; p < d;) {
                    if (37 === e.charCodeAt(p) && p + 1 < d) {
                        switch (h = h > -1 ? h : 0, e.charCodeAt(p + 1)) {
                            case 100:
                            case 102:
                                if (l >= c || null == r[l]) break;
                                h < p && (u += e.slice(h, p)), u += Number(r[l]), h = p + 2, p++;
                                break;
                            case 105:
                                if (l >= c || null == r[l]) break;
                                h < p && (u += e.slice(h, p)), u += Math.floor(Number(r[l])), h = p + 2, p++;
                                break;
                            case 79:
                            case 111:
                            case 106:
                                if (l >= c || void 0 === r[l]) break;
                                h < p && (u += e.slice(h, p));
                                var f = typeof r[l];
                                if ("string" === f) {
                                    u += "'" + r[l] + "'", h = p + 2, p++;
                                    break
                                }
                                if ("function" === f) {
                                    u += r[l].name || "<anonymous>", h = p + 2, p++;
                                    break
                                }
                                u += s(r[l]), h = p + 2, p++;
                                break;
                            case 115:
                                if (l >= c) break;
                                h < p && (u += e.slice(h, p)), u += String(r[l]), h = p + 2, p++;
                                break;
                            case 37:
                                h < p && (u += e.slice(h, p)), u += "%", h = p + 2, p++, l--
                        }++l
                    }++p
                }
                return -1 === h ? e : (h < d && (u += e.slice(h)), u)
            }
        },
        85936: function(e) {
            "use strict";
            e.exports = e => encodeURIComponent(e).replace(/[!'()*]/g, e => "%".concat(e.charCodeAt(0).toString(16).toUpperCase()))
        },
        73660: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __assign: function() {
                    return n
                },
                __asyncDelegator: function() {
                    return D
                },
                __asyncGenerator: function() {
                    return v
                },
                __asyncValues: function() {
                    return w
                },
                __await: function() {
                    return b
                },
                __awaiter: function() {
                    return l
                },
                __classPrivateFieldGet: function() {
                    return S
                },
                __classPrivateFieldSet: function() {
                    return O
                },
                __createBinding: function() {
                    return d
                },
                __decorate: function() {
                    return a
                },
                __exportStar: function() {
                    return p
                },
                __extends: function() {
                    return s
                },
                __generator: function() {
                    return h
                },
                __importDefault: function() {
                    return I
                },
                __importStar: function() {
                    return _
                },
                __makeTemplateObject: function() {
                    return E
                },
                __metadata: function() {
                    return u
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return g
                },
                __rest: function() {
                    return o
                },
                __spread: function() {
                    return y
                },
                __spreadArrays: function() {
                    return m
                },
                __values: function() {
                    return f
                }
            });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.

            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.

            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            var i = function(e, t) {
                return (i = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(e, t)
            };

            function s(e, t) {
                function r() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var n = function() {
                return (n = Object.assign || function(e) {
                    for (var t, r = 1, i = arguments.length; r < i; r++)
                        for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                    return e
                }).apply(this, arguments)
            };

            function o(e, t) {
                var r = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var s = 0, i = Object.getOwnPropertySymbols(e); s < i.length; s++) 0 > t.indexOf(i[s]) && Object.prototype.propertyIsEnumerable.call(e, i[s]) && (r[i[s]] = e[i[s]]);
                return r
            }

            function a(e, t, r, i) {
                var s, n = arguments.length,
                    o = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(s = e[a]) && (o = (n < 3 ? s(o) : n > 3 ? s(t, r, o) : s(t, r)) || o);
                return n > 3 && o && Object.defineProperty(t, r, o), o
            }

            function c(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            }

            function u(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function l(e, t, r, i) {
                return new(r || (r = Promise))(function(s, n) {
                    function o(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? s(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(o, a)
                    }
                    c((i = i.apply(e, t || [])).next())
                })
            }

            function h(e, t) {
                var r, i, s, n, o = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0]) throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return n = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
                    return this
                }), n;

                function a(n) {
                    return function(a) {
                        return function(n) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, i && (s = 2 & n[0] ? i.return : n[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, n[1])).done) return s;
                                switch (i = 0, s && (n = [2 & n[0], s.value]), n[0]) {
                                    case 0:
                                    case 1:
                                        s = n;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: n[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, i = n[1], n = [0];
                                        continue;
                                    case 7:
                                        n = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = (s = o.trys).length > 0 && s[s.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === n[0] && (!s || n[1] > s[0] && n[1] < s[3])) {
                                            o.label = n[1];
                                            break
                                        }
                                        if (6 === n[0] && o.label < s[1]) {
                                            o.label = s[1], s = n;
                                            break
                                        }
                                        if (s && o.label < s[2]) {
                                            o.label = s[2], o.ops.push(n);
                                            break
                                        }
                                        s[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                n = t.call(e, o)
                            } catch (e) {
                                n = [6, e], i = 0
                            } finally {
                                r = s = 0
                            }
                            if (5 & n[0]) throw n[1];
                            return {
                                value: n[0] ? n[1] : void 0,
                                done: !0
                            }
                        }([n, a])
                    }
                }
            }

            function d(e, t, r, i) {
                void 0 === i && (i = r), e[i] = t[r]
            }

            function p(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
            }

            function f(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    i = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && i >= e.length && (e = void 0), {
                            value: e && e[i++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function g(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var i, s, n = r.call(e),
                    o = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(i = n.next()).done;) o.push(i.value)
                } catch (e) {
                    s = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (r = n.return) && r.call(n)
                    } finally {
                        if (s) throw s.error
                    }
                }
                return o
            }

            function y() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                return e
            }

            function m() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                for (var i = Array(e), s = 0, t = 0; t < r; t++)
                    for (var n = arguments[t], o = 0, a = n.length; o < a; o++, s++) i[s] = n[o];
                return i
            }

            function b(e) {
                return this instanceof b ? (this.v = e, this) : new b(e)
            }

            function v(e, t, r) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var i, s = r.apply(e, t || []),
                    n = [];
                return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
                    return this
                }, i;

                function o(e) {
                    s[e] && (i[e] = function(t) {
                        return new Promise(function(r, i) {
                            n.push([e, t, r, i]) > 1 || a(e, t)
                        })
                    })
                }

                function a(e, t) {
                    try {
                        var r;
                        (r = s[e](t)).value instanceof b ? Promise.resolve(r.value.v).then(c, u) : l(n[0][2], r)
                    } catch (e) {
                        l(n[0][3], e)
                    }
                }

                function c(e) {
                    a("next", e)
                }

                function u(e) {
                    a("throw", e)
                }

                function l(e, t) {
                    e(t), n.shift(), n.length && a(n[0][0], n[0][1])
                }
            }

            function D(e) {
                var t, r;
                return t = {}, i("next"), i("throw", function(e) {
                    throw e
                }), i("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function i(i, s) {
                    t[i] = e[i] ? function(t) {
                        return (r = !r) ? {
                            value: b(e[i](t)),
                            done: "return" === i
                        } : s ? s(t) : t
                    } : s
                }
            }

            function w(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = f(e), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function i(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise(function(i, s) {
                            ! function(e, t, r, i) {
                                Promise.resolve(i).then(function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }, t)
                            }(i, s, (t = e[r](t)).done, t.value)
                        })
                    }
                }
            }

            function E(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function _(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function I(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function S(e, t) {
                if (!t.has(e)) throw TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function O(e, t, r) {
                if (!t.has(e)) throw TypeError("attempted to set private field on non-instance");
                return t.set(e, r), r
            }
        },
        92437: function(e, t, r) {
            "use strict";
            let i = r(74650);
            e.exports = n;
            let s = function() {
                function e(e) {
                    return void 0 !== e && e
                }
                try {
                    if ("undefined" != typeof globalThis) return globalThis;
                    return Object.defineProperty(Object.prototype, "globalThis", {
                        get: function() {
                            return delete Object.prototype.globalThis, this.globalThis = this
                        },
                        configurable: !0
                    }), globalThis
                } catch (t) {
                    return e(self) || e(window) || e(this) || {}
                }
            }().console || {};

            function n(e) {
                var t, r;
                (e = e || {}).browser = e.browser || {};
                let i = e.browser.transmit;
                if (i && "function" != typeof i.send) throw Error("pino: transmit option must have a send function");
                let l = e.browser.write || s;
                e.browser.write && (e.browser.asObject = !0);
                let h = e.serializers || {},
                    g = Array.isArray(t = e.browser.serialize) ? t.filter(function(e) {
                        return "!stdSerializers.err" !== e
                    }) : !0 === t && Object.keys(h),
                    y = e.browser.serialize;
                Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf("!stdSerializers.err") > -1 && (y = !1), "function" == typeof l && (l.error = l.fatal = l.warn = l.info = l.debug = l.trace = l), !1 === e.enabled && (e.level = "silent");
                let m = e.level || "info",
                    b = Object.create(l);
                b.log || (b.log = d), Object.defineProperty(b, "levelVal", {
                    get: function() {
                        return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
                    }
                }), Object.defineProperty(b, "level", {
                    get: function() {
                        return this._level
                    },
                    set: function(e) {
                        if ("silent" !== e && !this.levels.values[e]) throw Error("unknown level " + e);
                        this._level = e, o(v, b, "error", "log"), o(v, b, "fatal", "error"), o(v, b, "warn", "error"), o(v, b, "info", "log"), o(v, b, "debug", "log"), o(v, b, "trace", "log")
                    }
                });
                let v = {
                    transmit: i,
                    serialize: g,
                    asObject: e.browser.asObject,
                    levels: ["error", "fatal", "warn", "info", "debug", "trace"],
                    timestamp: "function" == typeof(r = e).timestamp ? r.timestamp : !1 === r.timestamp ? p : f
                };
                return b.levels = n.levels, b.level = m, b.setMaxListeners = b.getMaxListeners = b.emit = b.addListener = b.on = b.prependListener = b.once = b.prependOnceListener = b.removeListener = b.removeAllListeners = b.listeners = b.listenerCount = b.eventNames = b.write = b.flush = d, b.serializers = h, b._serialize = g, b._stdErrSerialize = y, b.child = function(t, r) {
                    if (!t) throw Error("missing bindings for child Pino");
                    r = r || {}, g && t.serializers && (r.serializers = t.serializers);
                    let s = r.serializers;
                    if (g && s) {
                        var n = Object.assign({}, h, s),
                            o = !0 === e.browser.serialize ? Object.keys(n) : g;
                        delete t.serializers, a([t], o, n, this._stdErrSerialize)
                    }

                    function l(e) {
                        this._childLevel = (0 | e._childLevel) + 1, this.error = c(e, t, "error"), this.fatal = c(e, t, "fatal"), this.warn = c(e, t, "warn"), this.info = c(e, t, "info"), this.debug = c(e, t, "debug"), this.trace = c(e, t, "trace"), n && (this.serializers = n, this._serialize = o), i && (this._logEvent = u([].concat(e._logEvent.bindings, t)))
                    }
                    return l.prototype = this, new l(this)
                }, i && (b._logEvent = u()), b
            }

            function o(e, t, r, o) {
                let c = Object.getPrototypeOf(t);
                t[r] = t.levelVal > t.levels.values[r] ? d : c[r] ? c[r] : s[r] || s[o] || d,
                    function(e, t, r) {
                        if (e.transmit || t[r] !== d) {
                            var o;
                            t[r] = (o = t[r], function() {
                                let c = e.timestamp(),
                                    l = Array(arguments.length),
                                    h = Object.getPrototypeOf && Object.getPrototypeOf(this) === s ? s : this;
                                for (var d = 0; d < l.length; d++) l[d] = arguments[d];
                                if (e.serialize && !e.asObject && a(l, this._serialize, this.serializers, this._stdErrSerialize), e.asObject ? o.call(h, function(e, t, r, s) {
                                        e._serialize && a(r, e._serialize, e.serializers, e._stdErrSerialize);
                                        let o = r.slice(),
                                            c = o[0],
                                            u = {};
                                        s && (u.time = s), u.level = n.levels.values[t];
                                        let l = (0 | e._childLevel) + 1;
                                        if (l < 1 && (l = 1), null !== c && "object" == typeof c) {
                                            for (; l-- && "object" == typeof o[0];) Object.assign(u, o.shift());
                                            c = o.length ? i(o.shift(), o) : void 0
                                        } else "string" == typeof c && (c = i(o.shift(), o));
                                        return void 0 !== c && (u.msg = c), u
                                    }(this, r, l, c)) : o.apply(h, l), e.transmit) {
                                    let i = e.transmit.level || t.level,
                                        s = n.levels.values[i],
                                        o = n.levels.values[r];
                                    if (o < s) return;
                                    (function(e, t, r) {
                                        let i = t.send,
                                            s = t.ts,
                                            n = t.methodLevel,
                                            o = t.methodValue,
                                            c = t.val,
                                            l = e._logEvent.bindings;
                                        a(r, e._serialize || Object.keys(e.serializers), e.serializers, void 0 === e._stdErrSerialize || e._stdErrSerialize), e._logEvent.ts = s, e._logEvent.messages = r.filter(function(e) {
                                            return -1 === l.indexOf(e)
                                        }), e._logEvent.level.label = n, e._logEvent.level.value = o, i(n, e._logEvent, c), e._logEvent = u(l)
                                    })(this, {
                                        ts: c,
                                        methodLevel: r,
                                        methodValue: o,
                                        transmitLevel: i,
                                        transmitValue: n.levels.values[e.transmit.level || t.level],
                                        send: e.transmit.send,
                                        val: t.levelVal
                                    }, l)
                                }
                            })
                        }
                    }(e, t, r)
            }

            function a(e, t, r, i) {
                for (let s in e)
                    if (i && e[s] instanceof Error) e[s] = n.stdSerializers.err(e[s]);
                    else if ("object" == typeof e[s] && !Array.isArray(e[s]))
                    for (let i in e[s]) t && t.indexOf(i) > -1 && i in r && (e[s][i] = r[i](e[s][i]))
            }

            function c(e, t, r) {
                return function() {
                    let i = Array(1 + arguments.length);
                    i[0] = t;
                    for (var s = 1; s < i.length; s++) i[s] = arguments[s - 1];
                    return e[r].apply(this, i)
                }
            }

            function u(e) {
                return {
                    ts: 0,
                    messages: [],
                    bindings: e || [],
                    level: {
                        label: "",
                        value: 0
                    }
                }
            }

            function l() {
                return {}
            }

            function h(e) {
                return e
            }

            function d() {}

            function p() {
                return !1
            }

            function f() {
                return Date.now()
            }
            n.levels = {
                values: {
                    fatal: 60,
                    error: 50,
                    warn: 40,
                    info: 30,
                    debug: 20,
                    trace: 10
                },
                labels: {
                    10: "trace",
                    20: "debug",
                    30: "info",
                    40: "warn",
                    50: "error",
                    60: "fatal"
                }
            }, n.stdSerializers = {
                mapHttpRequest: l,
                mapHttpResponse: l,
                wrapRequestSerializer: h,
                wrapResponseSerializer: h,
                wrapErrorSerializer: h,
                req: l,
                res: l,
                err: function(e) {
                    let t = {
                        type: e.constructor.name,
                        msg: e.message,
                        stack: e.stack
                    };
                    for (let r in e) void 0 === t[r] && (t[r] = e[r]);
                    return t
                }
            }, n.stdTimeFunctions = Object.assign({}, {
                nullTime: p,
                epochTime: f,
                unixTime: function() {
                    return Math.round(Date.now() / 1e3)
                },
                isoTime: function() {
                    return new Date(Date.now()).toISOString()
                }
            })
        },
        8960: function(e, t, r) {
            "use strict";
            r.d(t, {
                E: function() {
                    return s
                }
            });
            var i = r(83438);

            function s() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? (0, i.P)(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e)
            }
        },
        78155: function(e, t, r) {
            "use strict";
            r.d(t, {
                z: function() {
                    return n
                }
            });
            var i = r(8960),
                s = r(83438);

            function n(e, t) {
                t || (t = e.reduce((e, t) => e + t.length, 0));
                let r = (0, i.E)(t),
                    n = 0;
                for (let t of e) r.set(t, n), n += t.length;
                return (0, s.P)(r)
            }
        },
        70502: function(e, t, r) {
            "use strict";
            r.d(t, {
                m: function() {
                    return n
                }
            });
            var i = r(28368),
                s = r(83438);

            function n(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "utf8",
                    r = i.Z[t];
                if (!r) throw Error('Unsupported encoding "'.concat(t, '"'));
                return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? (0, s.P)(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode("".concat(r.prefix).concat(e))
            }
        },
        32943: function(e, t, r) {
            "use strict";
            r.d(t, {
                BB: function() {
                    return n.B
                },
                mL: function() {
                    return s.m
                },
                zo: function() {
                    return i.z
                }
            });
            var i = r(78155),
                s = r(70502),
                n = r(4163)
        },
        4163: function(e, t, r) {
            "use strict";
            r.d(t, {
                B: function() {
                    return s
                }
            });
            var i = r(28368);

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "utf8",
                    r = i.Z[t];
                if (!r) throw Error('Unsupported encoding "'.concat(t, '"'));
                return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8") : r.encoder.encode(e).substring(1)
            }
        },
        83438: function(e, t, r) {
            "use strict";

            function i(e) {
                return null != globalThis.Buffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e
            }
            r.d(t, {
                P: function() {
                    return i
                }
            })
        },
        28368: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return eJ
                }
            });
            var i = {};
            r.r(i), r.d(i, {
                identity: function() {
                    return x
                }
            });
            var s = {};
            r.r(s), r.d(s, {
                base2: function() {
                    return T
                }
            });
            var n = {};
            r.r(n), r.d(n, {
                base8: function() {
                    return U
                }
            });
            var o = {};
            r.r(o), r.d(o, {
                base10: function() {
                    return L
                }
            });
            var a = {};
            r.r(a), r.d(a, {
                base16: function() {
                    return M
                },
                base16upper: function() {
                    return j
                }
            });
            var c = {};
            r.r(c), r.d(c, {
                base32: function() {
                    return k
                },
                base32hex: function() {
                    return B
                },
                base32hexpad: function() {
                    return K
                },
                base32hexpadupper: function() {
                    return H
                },
                base32hexupper: function() {
                    return V
                },
                base32pad: function() {
                    return F
                },
                base32padupper: function() {
                    return z
                },
                base32upper: function() {
                    return q
                },
                base32z: function() {
                    return J
                }
            });
            var u = {};
            r.r(u), r.d(u, {
                base36: function() {
                    return W
                },
                base36upper: function() {
                    return G
                }
            });
            var l = {};
            r.r(l), r.d(l, {
                base58btc: function() {
                    return Z
                },
                base58flickr: function() {
                    return Y
                }
            });
            var h = {};
            r.r(h), r.d(h, {
                base64: function() {
                    return Q
                },
                base64pad: function() {
                    return X
                },
                base64url: function() {
                    return $
                },
                base64urlpad: function() {
                    return ee
                }
            });
            var d = {};
            r.r(d), r.d(d, {
                base256emoji: function() {
                    return es
                }
            });
            var p = {};
            r.r(p), r.d(p, {
                sha256: function() {
                    return ey
                },
                sha512: function() {
                    return em
                }
            });
            var f = {};
            r.r(f), r.d(f, {
                identity: function() {
                    return eb
                }
            });
            var g = {};
            r.r(g), r.d(g, {
                code: function() {
                    return eD
                },
                decode: function() {
                    return eE
                },
                encode: function() {
                    return ew
                },
                name: function() {
                    return ev
                }
            });
            var y = {};
            r.r(y), r.d(y, {
                code: function() {
                    return eO
                },
                decode: function() {
                    return eR
                },
                encode: function() {
                    return eC
                },
                name: function() {
                    return eS
                }
            });
            var m = function(e, t) {
                if (e.length >= 255) throw TypeError("Alphabet too long");
                for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
                for (var s = 0; s < e.length; s++) {
                    var n = e.charAt(s),
                        o = n.charCodeAt(0);
                    if (255 !== r[o]) throw TypeError(n + " is ambiguous");
                    r[o] = s
                }
                var a = e.length,
                    c = e.charAt(0),
                    u = Math.log(a) / Math.log(256),
                    l = Math.log(256) / Math.log(a);

                function h(e) {
                    if ("string" != typeof e) throw TypeError("Expected String");
                    if (0 === e.length) return new Uint8Array;
                    var t = 0;
                    if (" " !== e[0]) {
                        for (var i = 0, s = 0; e[t] === c;) i++, t++;
                        for (var n = (e.length - t) * u + 1 >>> 0, o = new Uint8Array(n); e[t];) {
                            var l = r[e.charCodeAt(t)];
                            if (255 === l) return;
                            for (var h = 0, d = n - 1;
                                (0 !== l || h < s) && -1 !== d; d--, h++) l += a * o[d] >>> 0, o[d] = l % 256 >>> 0, l = l / 256 >>> 0;
                            if (0 !== l) throw Error("Non-zero carry");
                            s = h, t++
                        }
                        if (" " !== e[t]) {
                            for (var p = n - s; p !== n && 0 === o[p];) p++;
                            for (var f = new Uint8Array(i + (n - p)), g = i; p !== n;) f[g++] = o[p++];
                            return f
                        }
                    }
                }
                return {
                    encode: function(t) {
                        if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
                        if (0 === t.length) return "";
                        for (var r = 0, i = 0, s = 0, n = t.length; s !== n && 0 === t[s];) s++, r++;
                        for (var o = (n - s) * l + 1 >>> 0, u = new Uint8Array(o); s !== n;) {
                            for (var h = t[s], d = 0, p = o - 1;
                                (0 !== h || d < i) && -1 !== p; p--, d++) h += 256 * u[p] >>> 0, u[p] = h % a >>> 0, h = h / a >>> 0;
                            if (0 !== h) throw Error("Non-zero carry");
                            i = d, s++
                        }
                        for (var f = o - i; f !== o && 0 === u[f];) f++;
                        for (var g = c.repeat(r); f < o; ++f) g += e.charAt(u[f]);
                        return g
                    },
                    decodeUnsafe: h,
                    decode: function(e) {
                        var r = h(e);
                        if (r) return r;
                        throw Error("Non-".concat(t, " character"))
                    }
                }
            };
            new Uint8Array(0);
            let b = (e, t) => {
                    if (e === t) return !0;
                    if (e.byteLength !== t.byteLength) return !1;
                    for (let r = 0; r < e.byteLength; r++)
                        if (e[r] !== t[r]) return !1;
                    return !0
                },
                v = e => {
                    if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
                    if (e instanceof ArrayBuffer) return new Uint8Array(e);
                    if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
                    throw Error("Unknown type, must be binary type")
                },
                D = e => new TextEncoder().encode(e),
                w = e => new TextDecoder().decode(e);
            class E {
                encode(e) {
                    if (e instanceof Uint8Array) return "".concat(this.prefix).concat(this.baseEncode(e));
                    throw Error("Unknown type, must be binary type")
                }
                constructor(e, t, r) {
                    this.name = e, this.prefix = t, this.baseEncode = r
                }
            }
            class _ {
                decode(e) {
                    if ("string" == typeof e) {
                        if (e.codePointAt(0) !== this.prefixCodePoint) throw Error("Unable to decode multibase string ".concat(JSON.stringify(e), ", ").concat(this.name, " decoder only supports inputs prefixed with ").concat(this.prefix));
                        return this.baseDecode(e.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(e) {
                    return S(this, e)
                }
                constructor(e, t, r) {
                    if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw Error("Invalid prefix character");
                    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = r
                }
            }
            class I {
                or(e) {
                    return S(this, e)
                }
                decode(e) {
                    let t = e[0],
                        r = this.decoders[t];
                    if (r) return r.decode(e);
                    throw RangeError("Unable to decode multibase string ".concat(JSON.stringify(e), ", only inputs prefixed with ").concat(Object.keys(this.decoders), " are supported"))
                }
                constructor(e) {
                    this.decoders = e
                }
            }
            let S = (e, t) => new I({ ...e.decoders || {
                    [e.prefix]: e
                },
                ...t.decoders || {
                    [t.prefix]: t
                }
            });
            class O {
                encode(e) {
                    return this.encoder.encode(e)
                }
                decode(e) {
                    return this.decoder.decode(e)
                }
                constructor(e, t, r, i) {
                    this.name = e, this.prefix = t, this.baseEncode = r, this.baseDecode = i, this.encoder = new E(e, t, r), this.decoder = new _(e, t, i)
                }
            }
            let C = e => {
                    let {
                        name: t,
                        prefix: r,
                        encode: i,
                        decode: s
                    } = e;
                    return new O(t, r, i, s)
                },
                R = e => {
                    let {
                        prefix: t,
                        name: r,
                        alphabet: i
                    } = e, {
                        encode: s,
                        decode: n
                    } = m(i, r);
                    return C({
                        prefix: t,
                        name: r,
                        encode: s,
                        decode: e => v(n(e))
                    })
                },
                P = (e, t, r, i) => {
                    let s = {};
                    for (let e = 0; e < t.length; ++e) s[t[e]] = e;
                    let n = e.length;
                    for (;
                        "=" === e[n - 1];) --n;
                    let o = new Uint8Array(n * r / 8 | 0),
                        a = 0,
                        c = 0,
                        u = 0;
                    for (let t = 0; t < n; ++t) {
                        let n = s[e[t]];
                        if (void 0 === n) throw SyntaxError("Non-".concat(i, " character"));
                        c = c << r | n, (a += r) >= 8 && (a -= 8, o[u++] = 255 & c >> a)
                    }
                    if (a >= r || 255 & c << 8 - a) throw SyntaxError("Unexpected end of data");
                    return o
                },
                A = (e, t, r) => {
                    let i = "=" === t[t.length - 1],
                        s = (1 << r) - 1,
                        n = "",
                        o = 0,
                        a = 0;
                    for (let i = 0; i < e.length; ++i)
                        for (a = a << 8 | e[i], o += 8; o > r;) o -= r, n += t[s & a >> o];
                    if (o && (n += t[s & a << r - o]), i)
                        for (; n.length * r & 7;) n += "=";
                    return n
                },
                N = e => {
                    let {
                        name: t,
                        prefix: r,
                        bitsPerChar: i,
                        alphabet: s
                    } = e;
                    return C({
                        prefix: r,
                        name: t,
                        encode: e => A(e, s, i),
                        decode: e => P(e, s, i, t)
                    })
                },
                x = C({
                    prefix: "\x00",
                    name: "identity",
                    encode: e => w(e),
                    decode: e => D(e)
                }),
                T = N({
                    prefix: "0",
                    name: "base2",
                    alphabet: "01",
                    bitsPerChar: 1
                }),
                U = N({
                    prefix: "7",
                    name: "base8",
                    alphabet: "01234567",
                    bitsPerChar: 3
                }),
                L = R({
                    prefix: "9",
                    name: "base10",
                    alphabet: "0123456789"
                }),
                M = N({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                j = N({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                }),
                k = N({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                q = N({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                F = N({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                z = N({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                B = N({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                V = N({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                K = N({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                H = N({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                J = N({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                }),
                W = R({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                G = R({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                }),
                Z = R({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                Y = R({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                }),
                Q = N({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                X = N({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                $ = N({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                ee = N({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                }),
                et = Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),
                er = et.reduce((e, t, r) => (e[r] = t, e), []),
                ei = et.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []),
                es = C({
                    prefix: "\uD83D\uDE80",
                    name: "base256emoji",
                    encode: function(e) {
                        return e.reduce((e, t) => e += er[t], "")
                    },
                    decode: function(e) {
                        let t = [];
                        for (let r of e) {
                            let e = ei[r.codePointAt(0)];
                            if (void 0 === e) throw Error("Non-base256emoji character: ".concat(r));
                            t.push(e)
                        }
                        return new Uint8Array(t)
                    }
                });
            var en = {
                encode: function e(t, r, i) {
                    r = r || [];
                    for (var s = i = i || 0; t >= 2147483648;) r[i++] = 255 & t | 128, t /= 128;
                    for (; - 128 & t;) r[i++] = 255 & t | 128, t >>>= 7;
                    return r[i] = 0 | t, e.bytes = i - s + 1, r
                },
                decode: function e(t, r) {
                    var i, s = 0,
                        r = r || 0,
                        n = 0,
                        o = r,
                        a = t.length;
                    do {
                        if (o >= a) throw e.bytes = 0, RangeError("Could not decode varint");
                        i = t[o++], s += n < 28 ? (127 & i) << n : (127 & i) * Math.pow(2, n), n += 7
                    } while (i >= 128);
                    return e.bytes = o - r, s
                },
                encodingLength: function(e) {
                    return e < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : e < 34359738368 ? 5 : e < 4398046511104 ? 6 : e < 562949953421312 ? 7 : e < 72057594037927940 ? 8 : e < 0x7fffffffffffffff ? 9 : 10
                }
            };
            let eo = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return [en.decode(e, t), en.decode.bytes]
                },
                ea = function(e, t) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    return en.encode(e, t, r), t
                },
                ec = e => en.encodingLength(e),
                eu = (e, t) => {
                    let r = t.byteLength,
                        i = ec(e),
                        s = i + ec(r),
                        n = new Uint8Array(s + r);
                    return ea(e, n, 0), ea(r, n, i), n.set(t, s), new ed(e, r, t, n)
                },
                el = e => {
                    let t = v(e),
                        [r, i] = eo(t),
                        [s, n] = eo(t.subarray(i)),
                        o = t.subarray(i + n);
                    if (o.byteLength !== s) throw Error("Incorrect length");
                    return new ed(r, s, o, t)
                },
                eh = (e, t) => e === t || e.code === t.code && e.size === t.size && b(e.bytes, t.bytes);
            class ed {
                constructor(e, t, r, i) {
                    this.code = e, this.size = t, this.digest = r, this.bytes = i
                }
            }
            let ep = e => {
                let {
                    name: t,
                    code: r,
                    encode: i
                } = e;
                return new ef(t, r, i)
            };
            class ef {
                digest(e) {
                    if (e instanceof Uint8Array) {
                        let t = this.encode(e);
                        return t instanceof Uint8Array ? eu(this.code, t) : t.then(e => eu(this.code, e))
                    }
                    throw Error("Unknown type, must be binary type")
                }
                constructor(e, t, r) {
                    this.name = e, this.code = t, this.encode = r
                }
            }
            let eg = e => async t => new Uint8Array(await crypto.subtle.digest(e, t)),
                ey = ep({
                    name: "sha2-256",
                    code: 18,
                    encode: eg("SHA-256")
                }),
                em = ep({
                    name: "sha2-512",
                    code: 19,
                    encode: eg("SHA-512")
                }),
                eb = {
                    code: 0,
                    name: "identity",
                    encode: v,
                    digest: e => eu(0, v(e))
                },
                ev = "raw",
                eD = 85,
                ew = e => v(e),
                eE = e => v(e),
                e_ = new TextEncoder,
                eI = new TextDecoder,
                eS = "json",
                eO = 512,
                eC = e => e_.encode(JSON.stringify(e)),
                eR = e => JSON.parse(eI.decode(e));
            class eP {
                toV0() {
                    if (0 === this.version) return this; {
                        let {
                            code: e,
                            multihash: t
                        } = this;
                        if (e !== eT) throw Error("Cannot convert a non dag-pb CID to CIDv0");
                        if (t.code !== eU) throw Error("Cannot convert non sha2-256 multihash CID to CIDv0");
                        return eP.createV0(t)
                    }
                }
                toV1() {
                    switch (this.version) {
                        case 0:
                            {
                                let {
                                    code: e,
                                    digest: t
                                } = this.multihash,
                                r = eu(e, t);
                                return eP.createV1(this.code, r)
                            }
                        case 1:
                            return this;
                        default:
                            throw Error("Can not convert CID version ".concat(this.version, " to version 0. This is a bug please report"))
                    }
                }
                equals(e) {
                    return e && this.code === e.code && this.version === e.version && eh(this.multihash, e.multihash)
                }
                toString(e) {
                    let {
                        bytes: t,
                        version: r,
                        _baseCache: i
                    } = this;
                    return 0 === r ? eN(t, i, e || Z.encoder) : ex(t, i, e || k.encoder)
                }
                toJSON() {
                    return {
                        code: this.code,
                        version: this.version,
                        hash: this.multihash.bytes
                    }
                }
                get[Symbol.toStringTag]() {
                    return "CID"
                }[Symbol.for("nodejs.util.inspect.custom")]() {
                    return "CID(" + this.toString() + ")"
                }
                static isCID(e) {
                    return eq(/^0\.0/, eF), !!(e && (e[eM] || e.asCID === e))
                }
                get toBaseEncodedString() {
                    throw Error("Deprecated, use .toString()")
                }
                get codec() {
                    throw Error('"codec" property is deprecated, use integer "code" property instead')
                }
                get buffer() {
                    throw Error("Deprecated .buffer property, use .bytes to get Uint8Array instead")
                }
                get multibaseName() {
                    throw Error('"multibaseName" property is deprecated')
                }
                get prefix() {
                    throw Error('"prefix" property is deprecated')
                }
                static asCID(e) {
                    if (e instanceof eP) return e;
                    if (null != e && e.asCID === e) {
                        let {
                            version: t,
                            code: r,
                            multihash: i,
                            bytes: s
                        } = e;
                        return new eP(t, r, i, s || eL(t, r, i.bytes))
                    }
                    if (null == e || !0 !== e[eM]) return null; {
                        let {
                            version: t,
                            multihash: r,
                            code: i
                        } = e, s = el(r);
                        return eP.create(t, i, s)
                    }
                }
                static create(e, t, r) {
                    if ("number" != typeof t) throw Error("String codecs are no longer supported");
                    switch (e) {
                        case 0:
                            if (t === eT) return new eP(e, t, r, r.bytes);
                            throw Error("Version 0 CID must use dag-pb (code: ".concat(eT, ") block encoding"));
                        case 1:
                            {
                                let i = eL(e, t, r.bytes);
                                return new eP(e, t, r, i)
                            }
                        default:
                            throw Error("Invalid version")
                    }
                }
                static createV0(e) {
                    return eP.create(0, eT, e)
                }
                static createV1(e, t) {
                    return eP.create(1, e, t)
                }
                static decode(e) {
                    let [t, r] = eP.decodeFirst(e);
                    if (r.length) throw Error("Incorrect length");
                    return t
                }
                static decodeFirst(e) {
                    let t = eP.inspectBytes(e),
                        r = t.size - t.multihashSize,
                        i = v(e.subarray(r, r + t.multihashSize));
                    if (i.byteLength !== t.multihashSize) throw Error("Incorrect length");
                    let s = i.subarray(t.multihashSize - t.digestSize),
                        n = new ed(t.multihashCode, t.digestSize, s, i);
                    return [0 === t.version ? eP.createV0(n) : eP.createV1(t.codec, n), e.subarray(t.size)]
                }
                static inspectBytes(e) {
                    let t = 0,
                        r = () => {
                            let [r, i] = eo(e.subarray(t));
                            return t += i, r
                        },
                        i = r(),
                        s = eT;
                    if (18 === i ? (i = 0, t = 0) : 1 === i && (s = r()), 0 !== i && 1 !== i) throw RangeError("Invalid CID version ".concat(i));
                    let n = t,
                        o = r(),
                        a = r(),
                        c = t + a;
                    return {
                        version: i,
                        codec: s,
                        multihashCode: o,
                        digestSize: a,
                        multihashSize: c - n,
                        size: c
                    }
                }
                static parse(e, t) {
                    let [r, i] = eA(e, t), s = eP.decode(i);
                    return s._baseCache.set(r, e), s
                }
                constructor(e, t, r, i) {
                    this.code = t, this.version = e, this.multihash = r, this.bytes = i, this.byteOffset = i.byteOffset, this.byteLength = i.byteLength, this.asCID = this, this._baseCache = new Map, Object.defineProperties(this, {
                        byteOffset: ek,
                        byteLength: ek,
                        code: ej,
                        version: ej,
                        multihash: ej,
                        bytes: ej,
                        _baseCache: ek,
                        asCID: ek
                    })
                }
            }
            let eA = (e, t) => {
                    switch (e[0]) {
                        case "Q":
                            return [Z.prefix, (t || Z).decode("".concat(Z.prefix).concat(e))];
                        case Z.prefix:
                            return [Z.prefix, (t || Z).decode(e)];
                        case k.prefix:
                            return [k.prefix, (t || k).decode(e)];
                        default:
                            if (null == t) throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
                            return [e[0], t.decode(e)]
                    }
                },
                eN = (e, t, r) => {
                    let {
                        prefix: i
                    } = r;
                    if (i !== Z.prefix) throw Error("Cannot string encode V0 in ".concat(r.name, " encoding"));
                    let s = t.get(i);
                    if (null != s) return s; {
                        let s = r.encode(e).slice(1);
                        return t.set(i, s), s
                    }
                },
                ex = (e, t, r) => {
                    let {
                        prefix: i
                    } = r, s = t.get(i);
                    if (null != s) return s; {
                        let s = r.encode(e);
                        return t.set(i, s), s
                    }
                },
                eT = 112,
                eU = 18,
                eL = (e, t, r) => {
                    let i = ec(e),
                        s = i + ec(t),
                        n = new Uint8Array(s + r.byteLength);
                    return ea(e, n, 0), ea(t, n, i), n.set(r, s), n
                },
                eM = Symbol.for("@ipld/js-cid/CID"),
                ej = {
                    writable: !1,
                    configurable: !1,
                    enumerable: !0
                },
                ek = {
                    writable: !1,
                    enumerable: !1,
                    configurable: !1
                },
                eq = (e, t) => {
                    if (e.test("0.0.0-dev")) console.warn(t);
                    else throw Error(t)
                },
                eF = "CID.isCID(v) is deprecated and will be removed in the next major release.\nFollowing code pattern:\n\nif (CID.isCID(value)) {\n  doSomethingWithCID(value)\n}\n\nIs replaced with:\n\nconst cid = CID.asCID(value)\nif (cid) {\n  // Make sure to use cid instead of value\n  doSomethingWithCID(cid)\n}\n",
                ez = { ...i,
                    ...s,
                    ...n,
                    ...o,
                    ...a,
                    ...c,
                    ...u,
                    ...l,
                    ...h,
                    ...d
                };
            ({ ...p,
                ...f
            });
            var eB = r(8960);

            function eV(e, t, r, i) {
                return {
                    name: e,
                    prefix: t,
                    encoder: {
                        name: e,
                        prefix: t,
                        encode: r
                    },
                    decoder: {
                        decode: i
                    }
                }
            }
            let eK = eV("utf8", "u", e => "u" + new TextDecoder("utf8").decode(e), e => new TextEncoder().encode(e.substring(1))),
                eH = eV("ascii", "a", e => {
                    let t = "a";
                    for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
                    return t
                }, e => {
                    e = e.substring(1);
                    let t = (0, eB.E)(e.length);
                    for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
                    return t
                });
            var eJ = {
                utf8: eK,
                "utf-8": eK,
                hex: ez.base16,
                latin1: eH,
                ascii: eH,
                binary: eH,
                ...ez
            }
        }
    }
]);