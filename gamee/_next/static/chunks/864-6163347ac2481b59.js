"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [864], {
        2731: function(e, t, n) {
            n.d(t, {
                JK: function() {
                    return c
                },
                X4: function() {
                    return r
                },
                aH: function() {
                    return i
                },
                wi: function() {
                    return o
                }
            });
            var a = n(1257);
            class r extends a.G {
                constructor() {
                    super("Chain not configured."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ChainNotConfiguredError"
                    })
                }
            }
            class o extends a.G {
                constructor() {
                    super("Connector already connected."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ConnectorAlreadyConnectedError"
                    })
                }
            }
            class i extends a.G {
                constructor() {
                    super("Connector not connected."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ConnectorNotConnectedError"
                    })
                }
            }
            class c extends a.G {
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
        21565: function(e, t, n) {
            n.d(t, {
                Q: function() {
                    return i
                }
            });
            var a = n(30410),
                r = n(15578),
                o = n(56547);
            async function i(e) {
                var t, n, i;
                let {
                    blockHash: c,
                    blockNumber: l,
                    blockTag: s,
                    includeTransactions: u
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, d = null != u && u, f = void 0 !== l ? (0, r.eC)(l) : void 0, v = null;
                if (!(v = c ? await e.request({
                        method: "eth_getBlockByHash",
                        params: [c, d]
                    }) : await e.request({
                        method: "eth_getBlockByNumber",
                        params: [f || (null != s ? s : "latest"), d]
                    }))) throw new a.f({
                    blockHash: c,
                    blockNumber: l
                });
                return ((null === (i = e.chain) || void 0 === i ? void 0 : null === (n = i.formatters) || void 0 === n ? void 0 : null === (t = n.block) || void 0 === t ? void 0 : t.format) || function(e) {
                    var t;
                    let n = null === (t = e.transactions) || void 0 === t ? void 0 : t.map(e => "string" == typeof e ? e : (0, o.Tr)(e));
                    return { ...e,
                        baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
                        blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
                        difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
                        excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
                        gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
                        gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
                        hash: e.hash ? e.hash : null,
                        logsBloom: e.logsBloom ? e.logsBloom : null,
                        nonce: e.nonce ? e.nonce : null,
                        number: e.number ? BigInt(e.number) : null,
                        size: e.size ? BigInt(e.size) : void 0,
                        timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
                        transactions: n,
                        totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null
                    }
                })(v)
            }
        },
        82690: function(e, t, n) {
            let a;
            n.d(t, {
                e: function() {
                    return i
                }
            });
            var r = n(79561);
            let o = 256;

            function i(e) {
                var t;
                let {
                    batch: n,
                    cacheTime: i = null !== (t = e.pollingInterval) && void 0 !== t ? t : 4e3,
                    key: c = "base",
                    name: l = "Base Client",
                    pollingInterval: s = 4e3,
                    type: u = "base"
                } = e, d = e.chain, f = e.account ? (0, r.T)(e.account) : void 0, {
                    config: v,
                    request: h,
                    value: m
                } = e.transport({
                    chain: d,
                    pollingInterval: s
                }), b = {
                    account: f,
                    batch: n,
                    cacheTime: i,
                    chain: d,
                    key: c,
                    name: l,
                    pollingInterval: s,
                    request: h,
                    transport: { ...v,
                        ...m
                    },
                    type: u,
                    uid: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 11;
                        if (!a || o + e > 512) {
                            a = "", o = 0;
                            for (let e = 0; e < 256; e++) a += (256 + 256 * Math.random() | 0).toString(16).substring(1)
                        }
                        return a.substring(o, o++ + e)
                    }()
                };
                return Object.assign(b, {
                    extend: function e(t) {
                        return n => {
                            let a = n(t);
                            for (let e in b) delete a[e];
                            let r = { ...t,
                                ...a
                            };
                            return Object.assign(r, {
                                extend: e(r)
                            })
                        }
                    }(b)
                })
            }
        },
        27530: function(e, t, n) {
            n.d(t, {
                q: function() {
                    return c
                }
            });
            var a = n(80230),
                r = n(37825),
                o = n(24473),
                i = n(42179);

            function c(e, t) {
                let {
                    key: n,
                    name: c,
                    request: l,
                    retryCount: s = 3,
                    retryDelay: u = 150,
                    timeout: d,
                    type: f
                } = e;
                return {
                    config: {
                        key: n,
                        name: c,
                        request: l,
                        retryCount: s,
                        retryDelay: u,
                        timeout: d,
                        type: f
                    },
                    request: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return async function(n) {
                            let c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                {
                                    retryDelay: l = 150,
                                    retryCount: s = 3
                                } = { ...t,
                                    ...c
                                };
                            return (0, i.J)(async () => {
                                try {
                                    return await e(n)
                                } catch (e) {
                                    switch (e.code) {
                                        case o.s7.code:
                                            throw new o.s7(e);
                                        case o.B.code:
                                            throw new o.B(e);
                                        case o.LX.code:
                                            throw new o.LX(e);
                                        case o.nY.code:
                                            throw new o.nY(e);
                                        case o.XS.code:
                                            throw new o.XS(e);
                                        case o.yR.code:
                                            throw new o.yR(e);
                                        case o.Og.code:
                                            throw new o.Og(e);
                                        case o.pT.code:
                                            throw new o.pT(e);
                                        case o.KB.code:
                                            throw new o.KB(e);
                                        case o.gS.code:
                                            throw new o.gS(e);
                                        case o.Pv.code:
                                            throw new o.Pv(e);
                                        case o.GD.code:
                                            throw new o.GD(e);
                                        case o.ab.code:
                                            throw new o.ab(e);
                                        case o.PE.code:
                                            throw new o.PE(e);
                                        case o.Ts.code:
                                            throw new o.Ts(e);
                                        case o.u5.code:
                                            throw new o.u5(e);
                                        case o.I0.code:
                                            throw new o.I0(e);
                                        case o.x3.code:
                                            throw new o.x3(e);
                                        case 5e3:
                                            throw new o.ab(e);
                                        default:
                                            if (e instanceof a.G) throw e;
                                            throw new o.ir(e)
                                    }
                                }
                            }, {
                                delay: e => {
                                    let {
                                        count: t,
                                        error: n
                                    } = e;
                                    if (n && n instanceof r.Gg) {
                                        var a;
                                        let e = null == n ? void 0 : null === (a = n.headers) || void 0 === a ? void 0 : a.get("Retry-After");
                                        if (null == e ? void 0 : e.match(/\d/)) return 1e3 * parseInt(e)
                                    }
                                    return ~~(1 << t) * l
                                },
                                retryCount: s,
                                shouldRetry: e => {
                                    let {
                                        error: t
                                    } = e;
                                    return "code" in t && "number" == typeof t.code ? -1 === t.code || t.code === o.Pv.code || t.code === o.XS.code : !(t instanceof r.Gg) || !t.status || 403 === t.status || 408 === t.status || 413 === t.status || 429 === t.status || 500 === t.status || 502 === t.status || 503 === t.status || 504 === t.status
                                }
                            })
                        }
                    }(l, {
                        retryCount: s,
                        retryDelay: u
                    }),
                    value: t
                }
            }
        },
        30410: function(e, t, n) {
            n.d(t, {
                f: function() {
                    return r
                }
            });
            var a = n(80230);
            class r extends a.G {
                constructor({
                    blockHash: e,
                    blockNumber: t
                }) {
                    let n = "Block";
                    e && (n = 'Block at hash "'.concat(e, '"')), t && (n = 'Block at number "'.concat(t, '"')), super("".concat(n, " could not be found.")), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "BlockNotFoundError"
                    })
                }
            }
        },
        56547: function(e, t, n) {
            n.d(t, {
                Tr: function() {
                    return o
                },
                c8: function() {
                    return r
                }
            });
            var a = n(55936);
            let r = {
                "0x0": "legacy",
                "0x1": "eip2930",
                "0x2": "eip1559",
                "0x3": "eip4844"
            };

            function o(e) {
                let t = { ...e,
                    blockHash: e.blockHash ? e.blockHash : null,
                    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
                    chainId: e.chainId ? (0, a.ly)(e.chainId) : void 0,
                    gas: e.gas ? BigInt(e.gas) : void 0,
                    gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
                    maxFeePerBlobGas: e.maxFeePerBlobGas ? BigInt(e.maxFeePerBlobGas) : void 0,
                    maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
                    maxPriorityFeePerGas: e.maxPriorityFeePerGas ? BigInt(e.maxPriorityFeePerGas) : void 0,
                    nonce: e.nonce ? (0, a.ly)(e.nonce) : void 0,
                    to: e.to ? e.to : null,
                    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
                    type: e.type ? r[e.type] : void 0,
                    typeHex: e.type ? e.type : void 0,
                    value: e.value ? BigInt(e.value) : void 0,
                    v: e.v ? BigInt(e.v) : void 0
                };
                return t.yParity = (() => {
                    if (e.yParity) return Number(e.yParity);
                    if ("bigint" == typeof t.v) {
                        if (0 n === t.v || 27 n === t.v) return 0;
                        if (1 n === t.v || 28 n === t.v) return 1;
                        if (t.v >= 35 n) return t.v % 2 n === 0 n ? 1 : 0
                    }
                })(), "legacy" === t.type && (delete t.accessList, delete t.maxFeePerBlobGas, delete t.maxFeePerGas, delete t.maxPriorityFeePerGas, delete t.yParity), "eip2930" === t.type && (delete t.maxFeePerBlobGas, delete t.maxFeePerGas, delete t.maxPriorityFeePerGas), "eip1559" === t.type && delete t.maxFeePerBlobGas, t
            }
        },
        42179: function(e, t, n) {
            n.d(t, {
                J: function() {
                    return r
                }
            });
            var a = n(83440);

            function r(e) {
                let {
                    delay: t = 100,
                    retryCount: n = 2,
                    shouldRetry: r = () => !0
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return new Promise((o, i) => {
                    let c = async function() {
                        let {
                            count: l = 0
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, s = async e => {
                            let {
                                error: n
                            } = e, r = "function" == typeof t ? t({
                                count: l,
                                error: n
                            }) : t;
                            r && await (0, a.D)(r), c({
                                count: l + 1
                            })
                        };
                        try {
                            let t = await e();
                            o(t)
                        } catch (e) {
                            if (l < n && await r({
                                    count: l,
                                    error: e
                                })) return s({
                                error: e
                            });
                            i(e)
                        }
                    };
                    c()
                })
            }
        },
        83440: function(e, t, n) {
            n.d(t, {
                D: function() {
                    return a
                }
            });
            async function a(e) {
                return new Promise(t => setTimeout(t, e))
            }
        },
        69908: function(e, t, n) {
            n.d(t, {
                u: function() {
                    return l
                }
            });
            var a = n(31723),
                r = n(73054),
                o = n(40352),
                i = n(43089),
                c = n(42887);

            function l() {
                var e, t, n;
                let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        abi: s,
                        address: u,
                        functionName: d,
                        query: f = {}
                    } = l,
                    v = (0, c.Z)(l),
                    h = (0, i.x)(),
                    m = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return {
                            async queryFn(n) {
                                let {
                                    queryKey: r
                                } = n, o = t.abi;
                                if (!o) throw Error("abi is required");
                                let {
                                    address: i,
                                    functionName: c,
                                    scopeKey: l,
                                    ...s
                                } = r[1];
                                if (!i) throw Error("address is required");
                                if (!c) throw Error("functionName is required");
                                let u = s.args;
                                return (0, a.L)(e, {
                                    abi: o,
                                    address: i,
                                    functionName: c,
                                    args: u,
                                    ...s
                                })
                            },
                            queryKey: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    {
                                        abi: t,
                                        ...n
                                    } = e;
                                return ["readContract", (0, r.O)(n)]
                            }(t)
                        }
                    }(v, { ...l,
                        chainId: null !== (e = l.chainId) && void 0 !== e ? e : h
                    }),
                    b = !!(u && s && d && (null === (t = f.enabled) || void 0 === t || t));
                return (0, o.aM)({ ...f,
                    ...m,
                    enabled: b,
                    structuralSharing: null !== (n = f.structuralSharing) && void 0 !== n ? n : o.if
                })
            }
        },
        70823: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return _
                }
            });
            var a = n(55936),
                r = n(30410),
                o = n(10289),
                i = n(31935);
            let c = new Map,
                l = new Map,
                s = 0;

            function u(e, t, n) {
                let a = ++s,
                    r = () => c.get(e) || [],
                    o = () => {
                        let t = r();
                        c.set(e, t.filter(e => e.id !== a))
                    },
                    i = () => {
                        let t = l.get(e);
                        1 === r().length && t && t(), o()
                    },
                    u = r();
                if (c.set(e, [...u, {
                        id: a,
                        fns: t
                    }]), u && u.length > 0) return i;
                let d = {};
                for (let e in t) d[e] = function() {
                    for (var t, n, a = arguments.length, o = Array(a), i = 0; i < a; i++) o[i] = arguments[i];
                    let c = r();
                    if (0 !== c.length)
                        for (let a of c) null === (t = (n = a.fns)[e]) || void 0 === t || t.call(n, ...o)
                };
                let f = n(d);
                return "function" == typeof f && l.set(e, f), i
            }
            var d = n(42179),
                f = n(92791),
                v = n(21565),
                h = n(15578),
                m = n(56547);
            async function b(e, t) {
                var n, a, r;
                let {
                    blockHash: i,
                    blockNumber: c,
                    blockTag: l,
                    hash: s,
                    index: u
                } = t, d = l || "latest", f = void 0 !== c ? (0, h.eC)(c) : void 0, v = null;
                if (s ? v = await e.request({
                        method: "eth_getTransactionByHash",
                        params: [s]
                    }) : i ? v = await e.request({
                        method: "eth_getTransactionByBlockHashAndIndex",
                        params: [i, (0, h.eC)(u)]
                    }) : (f || d) && (v = await e.request({
                        method: "eth_getTransactionByBlockNumberAndIndex",
                        params: [f || d, (0, h.eC)(u)]
                    })), !v) throw new o.Bh({
                    blockHash: i,
                    blockNumber: c,
                    blockTag: d,
                    hash: s,
                    index: u
                });
                return ((null === (r = e.chain) || void 0 === r ? void 0 : null === (a = r.formatters) || void 0 === a ? void 0 : null === (n = a.transaction) || void 0 === n ? void 0 : n.format) || m.Tr)(v)
            }
            let g = {
                "0x0": "reverted",
                "0x1": "success"
            };
            async function y(e, t) {
                var n, r, i;
                let {
                    hash: c
                } = t, l = await e.request({
                    method: "eth_getTransactionReceipt",
                    params: [c]
                });
                if (!l) throw new o.Yb({
                    hash: c
                });
                return ((null === (i = e.chain) || void 0 === i ? void 0 : null === (r = i.formatters) || void 0 === r ? void 0 : null === (n = r.transactionReceipt) || void 0 === n ? void 0 : n.format) || function(e) {
                    let t = { ...e,
                        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
                        contractAddress: e.contractAddress ? e.contractAddress : null,
                        cumulativeGasUsed: e.cumulativeGasUsed ? BigInt(e.cumulativeGasUsed) : null,
                        effectiveGasPrice: e.effectiveGasPrice ? BigInt(e.effectiveGasPrice) : null,
                        gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
                        logs: e.logs ? e.logs.map(e => (function(e) {
                            let {
                                args: t,
                                eventName: n
                            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return { ...e,
                                blockHash: e.blockHash ? e.blockHash : null,
                                blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
                                logIndex: e.logIndex ? Number(e.logIndex) : null,
                                transactionHash: e.transactionHash ? e.transactionHash : null,
                                transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
                                ...n ? {
                                    args: t,
                                    eventName: n
                                } : {}
                            }
                        })(e)) : null,
                        to: e.to ? e.to : null,
                        transactionIndex: e.transactionIndex ? (0, a.ly)(e.transactionIndex) : null,
                        status: e.status ? g[e.status] : null,
                        type: e.type ? m.c8[e.type] || e.type : null
                    };
                    return e.blobGasPrice && (t.blobGasPrice = BigInt(e.blobGasPrice)), e.blobGasUsed && (t.blobGasUsed = BigInt(e.blobGasUsed)), t
                })(l)
            }
            var w = n(83440);
            let p = new Map,
                P = new Map;
            async function G(e, t) {
                let {
                    cacheKey: n,
                    cacheTime: a = 1 / 0
                } = t, r = function(e) {
                    let t = (e, t) => ({
                            clear: () => t.delete(e),
                            get: () => t.get(e),
                            set: n => t.set(e, n)
                        }),
                        n = t(e, p),
                        a = t(e, P);
                    return {
                        clear: () => {
                            n.clear(), a.clear()
                        },
                        promise: n,
                        response: a
                    }
                }(n), o = r.response.get();
                if (o && a > 0 && new Date().getTime() - o.created.getTime() < a) return o.data;
                let i = r.promise.get();
                i || (i = e(), r.promise.set(i));
                try {
                    let e = await i;
                    return r.response.set({
                        created: new Date,
                        data: e
                    }), e
                } finally {
                    r.promise.clear()
                }
            }
            let x = e => "blockNumber.".concat(e);
            async function B(e) {
                let {
                    cacheTime: t = e.cacheTime
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return BigInt(await G(() => e.request({
                    method: "eth_blockNumber"
                }), {
                    cacheKey: x(e.uid),
                    cacheTime: t
                }))
            }

            function F(e, t) {
                let n, r, o, {
                    emitOnBegin: c = !1,
                    emitMissed: l = !1,
                    onBlockNumber: s,
                    onError: d,
                    poll: v,
                    pollingInterval: h = e.pollingInterval
                } = t;
                return (void 0 !== v ? v : "webSocket" !== e.transport.type) ? u((0, f.P)(["watchBlockNumber", e.uid, c, l, h]), {
                    onBlockNumber: s,
                    onError: d
                }, t => (function(e, t) {
                    let {
                        emitOnBegin: n,
                        initialWaitTime: a,
                        interval: r
                    } = t, o = !0, i = () => o = !1;
                    return (async () => {
                        var t;
                        let c;
                        n && (c = await e({
                            unpoll: i
                        }));
                        let l = null !== (t = await (null == a ? void 0 : a(c))) && void 0 !== t ? t : r;
                        await (0, w.D)(l);
                        let s = async () => {
                            o && (await e({
                                unpoll: i
                            }), await (0, w.D)(r), s())
                        };
                        s()
                    })(), i
                })(async () => {
                    try {
                        let n = await (0, i.s)(e, B, "getBlockNumber")({
                            cacheTime: 0
                        });
                        if (o) {
                            if (n === o) return;
                            if (n - o > 1 && l)
                                for (let e = o + 1 n; e < n; e++) t.onBlockNumber(e, o), o = e
                        }(!o || n > o) && (t.onBlockNumber(n, o), o = n)
                    } catch (e) {
                        var n;
                        null === (n = t.onError) || void 0 === n || n.call(t, e)
                    }
                }, {
                    emitOnBegin: c,
                    interval: h
                })) : (n = !0, r = () => n = !1, (async () => {
                    try {
                        let {
                            unsubscribe: t
                        } = await e.transport.subscribe({
                            params: ["newHeads"],
                            onData(e) {
                                var t;
                                if (!n) return;
                                let r = (0, a.y_)(null === (t = e.result) || void 0 === t ? void 0 : t.number);
                                s(r, o), o = r
                            },
                            onError(e) {
                                null == d || d(e)
                            }
                        });
                        r = t, n || r()
                    } catch (e) {
                        null == d || d(e)
                    }
                })(), r)
            }
            async function I(e, t) {
                let n, a, c, {
                        confirmations: l = 1,
                        hash: s,
                        onReplaced: h,
                        pollingInterval: m = e.pollingInterval,
                        retryCount: g = 6,
                        retryDelay: w = e => {
                            let {
                                count: t
                            } = e;
                            return 200 * ~~(1 << t)
                        },
                        timeout: p
                    } = t,
                    P = (0, f.P)(["waitForTransactionReceipt", e.uid, s]),
                    G = !1;
                return new Promise((t, f) => {
                    p && setTimeout(() => f(new o.mc({
                        hash: s
                    })), p);
                    let x = u(P, {
                        onReplaced: h,
                        resolve: t,
                        reject: f
                    }, t => {
                        let u = (0, i.s)(e, F, "watchBlockNumber")({
                            emitMissed: !0,
                            emitOnBegin: !0,
                            poll: !0,
                            pollingInterval: m,
                            async onBlockNumber(f) {
                                if (G) return;
                                let h = f,
                                    m = e => {
                                        u(), e(), x()
                                    };
                                try {
                                    if (c) {
                                        if (l > 1 && (!c.blockNumber || h - c.blockNumber + 1 n < l)) return;
                                        m(() => t.resolve(c));
                                        return
                                    }
                                    if (n || (G = !0, await (0, d.J)(async () => {
                                            (n = await (0, i.s)(e, b, "getTransaction")({
                                                hash: s
                                            })).blockNumber && (h = n.blockNumber)
                                        }, {
                                            delay: w,
                                            retryCount: g
                                        }), G = !1), c = await (0, i.s)(e, y, "getTransactionReceipt")({
                                            hash: s
                                        }), l > 1 && (!c.blockNumber || h - c.blockNumber + 1 n < l)) return;
                                    m(() => t.resolve(c))
                                } catch (s) {
                                    if (s instanceof o.Bh || s instanceof o.Yb) {
                                        if (!n) {
                                            G = !1;
                                            return
                                        }
                                        try {
                                            a = n, G = !0;
                                            let o = await (0, d.J)(() => (0, i.s)(e, v.Q, "getBlock")({
                                                blockNumber: h,
                                                includeTransactions: !0
                                            }), {
                                                delay: w,
                                                retryCount: g,
                                                shouldRetry: e => {
                                                    let {
                                                        error: t
                                                    } = e;
                                                    return t instanceof r.f
                                                }
                                            });
                                            G = !1;
                                            let s = o.transactions.find(e => {
                                                let {
                                                    from: t,
                                                    nonce: n
                                                } = e;
                                                return t === a.from && n === a.nonce
                                            });
                                            if (!s || (c = await (0, i.s)(e, y, "getTransactionReceipt")({
                                                    hash: s.hash
                                                }), l > 1 && (!c.blockNumber || h - c.blockNumber + 1 n < l))) return;
                                            let u = "replaced";
                                            s.to === a.to && s.value === a.value ? u = "repriced" : s.from === s.to && 0 n === s.value && (u = "cancelled"), m(() => {
                                                var e;
                                                null === (e = t.onReplaced) || void 0 === e || e.call(t, {
                                                    reason: u,
                                                    replacedTransaction: a,
                                                    transaction: s,
                                                    transactionReceipt: c
                                                }), t.resolve(c)
                                            })
                                        } catch (e) {
                                            m(() => t.reject(e))
                                        }
                                    } else m(() => t.reject(s))
                                }
                            }
                        })
                    })
                })
            }
            var k = n(8302),
                C = n(37225);
            async function T(e, t) {
                let {
                    chainId: n,
                    timeout: r = 0,
                    ...o
                } = t, i = e.getClient({
                    chainId: n
                }), c = (0, C.s)(i, I, "waitForTransactionReceipt"), l = await c({ ...o,
                    timeout: r
                });
                if ("reverted" === l.status) {
                    let e = (0, C.s)(i, b, "getTransaction"),
                        t = await e({
                            hash: l.transactionHash
                        }),
                        n = (0, C.s)(i, k.RE, "call"),
                        r = await n({ ...t,
                            gasPrice: "eip1559" !== t.type ? t.gasPrice : void 0,
                            maxFeePerGas: "eip1559" === t.type ? t.maxFeePerGas : void 0,
                            maxPriorityFeePerGas: "eip1559" === t.type ? t.maxPriorityFeePerGas : void 0
                        });
                    throw Error((0, a.rR)("0x".concat(r.substring(138))))
                }
                return { ...l,
                    chainId: i.chain.id
                }
            }
            var N = n(73054),
                q = n(40352),
                E = n(43089),
                R = n(42887);

            function _() {
                var e, t;
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        hash: a,
                        query: r = {}
                    } = n,
                    o = (0, R.Z)(n),
                    i = (0, E.x)(),
                    c = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return {
                            async queryFn(n) {
                                let {
                                    queryKey: a
                                } = n, {
                                    hash: r,
                                    ...o
                                } = a[1];
                                if (!r) throw Error("hash is required");
                                return T(e, { ...o,
                                    onReplaced: t.onReplaced,
                                    hash: r
                                })
                            },
                            queryKey: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    {
                                        onReplaced: t,
                                        ...n
                                    } = e;
                                return ["waitForTransactionReceipt", (0, N.O)(n)]
                            }(t)
                        }
                    }(o, { ...n,
                        chainId: null !== (e = n.chainId) && void 0 !== e ? e : i
                    }),
                    l = !!(a && (null === (t = r.enabled) || void 0 === t || t));
                return (0, q.aM)({ ...r,
                    ...c,
                    enabled: l
                })
            }
        },
        7792: function(e, t, n) {
            n.d(t, {
                S: function() {
                    return X
                }
            });
            var a = n(20568),
                r = n(3551),
                o = n(31935),
                i = n(79561),
                c = n(80230);
            class l extends c.G {
                constructor({
                    docsPath: e
                } = {}) {
                    super("Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.", {
                        docsPath: e,
                        docsSlug: "account"
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AccountNotFoundError"
                    })
                }
            }
            var s = n(55774),
                u = n(26463),
                d = n(10289),
                f = n(85069),
                v = n(67306),
                h = n(20662),
                m = n(15337),
                b = n(55936);
            async function g(e) {
                let t = await e.request({
                    method: "eth_chainId"
                });
                return (0, b.ly)(t)
            }
            var y = n(98206);
            class w extends c.G {
                constructor() {
                    super("`baseFeeMultiplier` must be greater than 1."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "BaseFeeScalarError"
                    })
                }
            }
            class p extends c.G {
                constructor() {
                    super("Chain does not support EIP-1559 fees."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "Eip1559FeesNotSupportedError"
                    })
                }
            }
            class P extends c.G {
                constructor({
                    maxPriorityFeePerGas: e
                }) {
                    super("`maxFeePerGas` cannot be less than the `maxPriorityFeePerGas` (".concat((0, y.o)(e), " gwei).")), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "MaxFeePerGasTooLowError"
                    })
                }
            }
            var G = n(21565);
            async function x(e) {
                return BigInt(await e.request({
                    method: "eth_gasPrice"
                }))
            }
            async function B(e, t) {
                var n, a, r;
                let {
                    block: i,
                    chain: c = e.chain,
                    request: l
                } = t || {};
                if ("function" == typeof(null == c ? void 0 : null === (n = c.fees) || void 0 === n ? void 0 : n.defaultPriorityFee)) {
                    let t = i || await (0, o.s)(e, G.Q, "getBlock")({});
                    return c.fees.defaultPriorityFee({
                        block: t,
                        client: e,
                        request: l
                    })
                }
                if (void 0 !== (null == c ? void 0 : null === (a = c.fees) || void 0 === a ? void 0 : a.defaultPriorityFee)) return null == c ? void 0 : null === (r = c.fees) || void 0 === r ? void 0 : r.defaultPriorityFee;
                try {
                    let t = await e.request({
                        method: "eth_maxPriorityFeePerGas"
                    });
                    return (0, b.y_)(t)
                } catch (r) {
                    let [t, n] = await Promise.all([i ? Promise.resolve(i) : (0, o.s)(e, G.Q, "getBlock")({}), (0, o.s)(e, x, "getGasPrice")({})]);
                    if ("bigint" != typeof t.baseFeePerGas) throw new p;
                    let a = n - t.baseFeePerGas;
                    if (a < 0 n) return 0 n;
                    return a
                }
            }
            async function F(e, t) {
                var n, a, r, i, c;
                let {
                    block: l,
                    chain: s = e.chain,
                    request: u,
                    type: d = "eip1559"
                } = t || {}, f = await (async () => {
                    var t, n, a;
                    return "function" == typeof(null == s ? void 0 : null === (t = s.fees) || void 0 === t ? void 0 : t.baseFeeMultiplier) ? s.fees.baseFeeMultiplier({
                        block: l,
                        client: e,
                        request: u
                    }) : null !== (a = null == s ? void 0 : null === (n = s.fees) || void 0 === n ? void 0 : n.baseFeeMultiplier) && void 0 !== a ? a : 1.2
                })();
                if (f < 1) throw new w;
                let v = 10 ** (null !== (r = null === (n = f.toString().split(".")[1]) || void 0 === n ? void 0 : n.length) && void 0 !== r ? r : 0),
                    h = e => e * BigInt(Math.ceil(f * v)) / BigInt(v),
                    m = l || await (0, o.s)(e, G.Q, "getBlock")({});
                if ("function" == typeof(null == s ? void 0 : null === (a = s.fees) || void 0 === a ? void 0 : a.estimateFeesPerGas)) return s.fees.estimateFeesPerGas({
                    block: l,
                    client: e,
                    multiply: h,
                    request: u,
                    type: d
                });
                if ("eip1559" === d) {
                    if ("bigint" != typeof m.baseFeePerGas) throw new p;
                    let t = "bigint" == typeof(null == u ? void 0 : u.maxPriorityFeePerGas) ? u.maxPriorityFeePerGas : await B(e, {
                            block: m,
                            chain: s,
                            request: u
                        }),
                        n = h(m.baseFeePerGas);
                    return {
                        maxFeePerGas: null !== (i = null == u ? void 0 : u.maxFeePerGas) && void 0 !== i ? i : n + t,
                        maxPriorityFeePerGas: t
                    }
                }
                return {
                    gasPrice: null !== (c = null == u ? void 0 : u.gasPrice) && void 0 !== c ? c : h(await (0, o.s)(e, x, "getGasPrice")({}))
                }
            }
            var I = n(15578),
                k = n(52926);
            class C extends c.G {
                constructor(e, {
                    account: t,
                    docsPath: n,
                    chain: a,
                    data: r,
                    gas: o,
                    gasPrice: i,
                    maxFeePerGas: c,
                    maxPriorityFeePerGas: l,
                    nonce: s,
                    to: u,
                    value: f
                }) {
                    var v;
                    super(e.shortMessage, {
                        cause: e,
                        docsPath: n,
                        metaMessages: [...e.metaMessages ? [...e.metaMessages, " "] : [], "Estimate Gas Arguments:", (0, d.xr)({
                            from: null == t ? void 0 : t.address,
                            to: u,
                            value: void 0 !== f && "".concat((0, k.d)(f), " ").concat((null == a ? void 0 : null === (v = a.nativeCurrency) || void 0 === v ? void 0 : v.symbol) || "ETH"),
                            data: r,
                            gas: o,
                            gasPrice: void 0 !== i && "".concat((0, y.o)(i), " gwei"),
                            maxFeePerGas: void 0 !== c && "".concat((0, y.o)(c), " gwei"),
                            maxPriorityFeePerGas: void 0 !== l && "".concat((0, y.o)(l), " gwei"),
                            nonce: s
                        })].filter(Boolean)
                    }), Object.defineProperty(this, "cause", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "EstimateGasExecutionError"
                    }), this.cause = e
                }
            }
            async function T(e, t) {
                var n, a, r, o;
                let c = null !== (n = t.account) && void 0 !== n ? n : e.account,
                    l = c ? (0, i.T)(c) : void 0;
                try {
                    let {
                        accessList: n,
                        blockNumber: i,
                        blockTag: c,
                        data: s,
                        gas: u,
                        gasPrice: d,
                        maxFeePerGas: f,
                        maxPriorityFeePerGas: b,
                        nonce: g,
                        to: y,
                        value: w,
                        ...p
                    } = (null == l ? void 0 : l.type) === "local" ? await q(e, t): t, P = (i ? (0, I.eC)(i) : void 0) || c;
                    (0, m.F)(t);
                    let G = null === (o = e.chain) || void 0 === o ? void 0 : null === (r = o.formatters) || void 0 === r ? void 0 : null === (a = r.transactionRequest) || void 0 === a ? void 0 : a.format,
                        x = (G || h.tG)({ ...(0, v.K)(p, {
                                format: G
                            }),
                            from: null == l ? void 0 : l.address,
                            accessList: n,
                            data: s,
                            gas: u,
                            gasPrice: d,
                            maxFeePerGas: f,
                            maxPriorityFeePerGas: b,
                            nonce: g,
                            to: y,
                            value: w
                        }),
                        B = await e.request({
                            method: "eth_estimateGas",
                            params: P ? [x, P] : [x]
                        });
                    return BigInt(B)
                } catch (n) {
                    throw function(e, t) {
                        let {
                            docsPath: n,
                            ...a
                        } = t;
                        return new C((() => {
                            let t = (0, f.k)(e, a);
                            return t instanceof u.cj ? e : t
                        })(), {
                            docsPath: n,
                            ...a
                        })
                    }(n, { ...t,
                        account: l,
                        chain: e.chain
                    })
                }
            }
            async function N(e, t) {
                let {
                    address: n,
                    blockTag: a = "latest",
                    blockNumber: r
                } = t, o = await e.request({
                    method: "eth_getTransactionCount",
                    params: [n, r ? (0, I.eC)(r) : a]
                });
                return (0, b.ly)(o)
            }
            async function q(e, t) {
                let {
                    account: n = e.account,
                    chain: a,
                    gas: r,
                    nonce: c,
                    parameters: l = ["fees", "gas", "nonce", "type"],
                    type: s
                } = t, u = n ? (0, i.T)(n) : void 0, f = await (0, o.s)(e, G.Q, "getBlock")({
                    blockTag: "latest"
                }), v = { ...t,
                    ...u ? {
                        from: null == u ? void 0 : u.address
                    } : {}
                };
                if (l.includes("nonce") && void 0 === c && u && (v.nonce = await (0, o.s)(e, N, "getTransactionCount")({
                        address: u.address,
                        blockTag: "pending"
                    })), (l.includes("fees") || l.includes("type")) && void 0 === s) try {
                    v.type = function(e) {
                        if (e.type) return e.type;
                        if (void 0 !== e.maxFeePerGas || void 0 !== e.maxPriorityFeePerGas) return "eip1559";
                        if (void 0 !== e.gasPrice) return void 0 !== e.accessList ? "eip2930" : "legacy";
                        throw new d.j3({
                            transaction: e
                        })
                    }(v)
                } catch (e) {
                    v.type = "bigint" == typeof f.baseFeePerGas ? "eip1559" : "legacy"
                }
                if (l.includes("fees")) {
                    if ("eip1559" === v.type) {
                        let {
                            maxFeePerGas: n,
                            maxPriorityFeePerGas: r
                        } = await F(e, {
                            block: f,
                            chain: a,
                            request: v
                        });
                        if (void 0 === t.maxPriorityFeePerGas && t.maxFeePerGas && t.maxFeePerGas < r) throw new P({
                            maxPriorityFeePerGas: r
                        });
                        v.maxPriorityFeePerGas = r, v.maxFeePerGas = n
                    } else {
                        if (void 0 !== t.maxFeePerGas || void 0 !== t.maxPriorityFeePerGas) throw new p;
                        let {
                            gasPrice: n
                        } = await F(e, {
                            block: f,
                            chain: a,
                            request: v,
                            type: "legacy"
                        });
                        v.gasPrice = n
                    }
                }
                return l.includes("gas") && void 0 === r && (v.gas = await (0, o.s)(e, T, "estimateGas")({ ...v,
                    account: u ? {
                        address: u.address,
                        type: "json-rpc"
                    } : void 0
                })), (0, m.F)(v), delete v.parameters, v
            }
            async function E(e, t) {
                let {
                    serializedTransaction: n
                } = t;
                return e.request({
                    method: "eth_sendRawTransaction",
                    params: [n]
                }, {
                    retryCount: 0
                })
            }
            async function R(e, t) {
                let {
                    account: n = e.account,
                    chain: a = e.chain,
                    accessList: r,
                    data: c,
                    gas: b,
                    gasPrice: y,
                    maxFeePerGas: w,
                    maxPriorityFeePerGas: p,
                    nonce: P,
                    to: G,
                    value: x,
                    ...B
                } = t;
                if (!n) throw new l({
                    docsPath: "/docs/actions/wallet/sendTransaction"
                });
                let F = (0, i.T)(n);
                try {
                    var I, k, C, T;
                    let n;
                    if ((0, m.F)(t), null !== a && (n = await (0, o.s)(e, g, "getChainId")({}), function(e) {
                            let {
                                chain: t,
                                currentChainId: n
                            } = e;
                            if (!t) throw new s.Bk;
                            if (n !== t.id) throw new s.Yl({
                                chain: t,
                                currentChainId: n
                            })
                        }({
                            currentChainId: n,
                            chain: a
                        })), "local" === F.type) {
                        let t = await (0, o.s)(e, q, "prepareTransactionRequest")({
                            account: F,
                            accessList: r,
                            chain: a,
                            data: c,
                            gas: b,
                            gasPrice: y,
                            maxFeePerGas: w,
                            maxPriorityFeePerGas: p,
                            nonce: P,
                            to: G,
                            value: x,
                            ...B
                        });
                        n || (n = await (0, o.s)(e, g, "getChainId")({}));
                        let i = null == a ? void 0 : null === (T = a.serializers) || void 0 === T ? void 0 : T.transaction,
                            l = await F.signTransaction({ ...t,
                                chainId: n
                            }, {
                                serializer: i
                            });
                        return await (0, o.s)(e, E, "sendRawTransaction")({
                            serializedTransaction: l
                        })
                    }
                    let i = null === (C = e.chain) || void 0 === C ? void 0 : null === (k = C.formatters) || void 0 === k ? void 0 : null === (I = k.transactionRequest) || void 0 === I ? void 0 : I.format,
                        l = (i || h.tG)({ ...(0, v.K)(B, {
                                format: i
                            }),
                            accessList: r,
                            data: c,
                            from: F.address,
                            gas: b,
                            gasPrice: y,
                            maxFeePerGas: w,
                            maxPriorityFeePerGas: p,
                            nonce: P,
                            to: G,
                            value: x
                        });
                    return await e.request({
                        method: "eth_sendTransaction",
                        params: [l]
                    }, {
                        retryCount: 0
                    })
                } catch (e) {
                    throw function(e, t) {
                        let {
                            docsPath: n,
                            ...a
                        } = t, r = (() => {
                            let t = (0, f.k)(e, a);
                            return t instanceof u.cj ? e : t
                        })();
                        return new d.mk(r, {
                            docsPath: n,
                            ...a
                        })
                    }(e, { ...t,
                        account: F,
                        chain: t.chain || void 0
                    })
                }
            }
            async function _(e, t) {
                let {
                    abi: n,
                    address: a,
                    args: i,
                    dataSuffix: c,
                    functionName: l,
                    ...s
                } = t, u = (0, r.R)({
                    abi: n,
                    args: i,
                    functionName: l
                });
                return (0, o.s)(e, R, "sendTransaction")({
                    data: "".concat(u).concat(c ? c.replace("0x", "") : ""),
                    to: a,
                    ...s
                })
            }
            var j = n(37225),
                A = n(82690),
                H = n(27530),
                M = n(2731);
            async function O(e) {
                var t, n;
                let a, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (r.connector) {
                    let {
                        connector: e
                    } = r, [t, n] = await Promise.all([e.getAccounts(), e.getChainId()]);
                    a = {
                        accounts: t,
                        chainId: n,
                        connector: e
                    }
                } else a = e.state.connections.get(e.state.current);
                if (!a) throw new M.aH;
                let o = null !== (t = r.chainId) && void 0 !== t ? t : a.chainId,
                    c = a.connector;
                if (c.getClient) return c.getClient({
                    chainId: o
                });
                let l = (0, i.T)(null !== (n = r.account) && void 0 !== n ? n : a.accounts[0]),
                    s = e.chains.find(e => e.id === o),
                    u = await a.connector.getProvider({
                        chainId: o
                    });
                if (r.account && !a.accounts.includes(l.address)) throw new M.JK({
                    address: l.address,
                    connector: c
                });
                return (0, A.e)({
                    account: l,
                    chain: s,
                    name: "Connector Client",
                    transport: e => (function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                key: n = "custom",
                                name: a = "Custom Provider",
                                retryDelay: r
                            } = t;
                        return o => {
                            var i;
                            let {
                                retryCount: c
                            } = o;
                            return (0, H.q)({
                                key: n,
                                name: a,
                                request: e.request.bind(e),
                                retryCount: null !== (i = t.retryCount) && void 0 !== i ? i : c,
                                retryDelay: r,
                                type: "custom"
                            })
                        }
                    })(u)({ ...e,
                        retryCount: 0
                    })
                })
            }
            var S = n(27470),
                U = n(95094),
                D = n(8302);
            async function K(e, t) {
                let {
                    abi: n,
                    address: a,
                    args: c,
                    dataSuffix: l,
                    functionName: s,
                    ...u
                } = t, d = u.account ? (0, i.T)(u.account) : e.account, f = (0, r.R)({
                    abi: n,
                    args: c,
                    functionName: s
                });
                try {
                    let {
                        data: r
                    } = await (0, o.s)(e, D.RE, "call")({
                        batch: !1,
                        data: "".concat(f).concat(l ? l.replace("0x", "") : ""),
                        to: a,
                        ...u,
                        account: d
                    }), i = (0, S.k)({
                        abi: n,
                        args: c,
                        functionName: s,
                        data: r || "0x"
                    }), v = n.filter(e => "name" in e && e.name === t.functionName);
                    return {
                        result: i,
                        request: {
                            abi: v,
                            address: a,
                            args: c,
                            dataSuffix: l,
                            functionName: s,
                            ...u,
                            account: d
                        }
                    }
                } catch (e) {
                    throw (0, U.S)(e, {
                        abi: n,
                        address: a,
                        args: c,
                        docsPath: "/docs/contract/simulateContract",
                        functionName: s,
                        sender: null == d ? void 0 : d.address
                    })
                }
            }
            async function L(e, t) {
                let n;
                let {
                    abi: a,
                    chainId: r,
                    connector: o,
                    ...i
                } = t;
                n = t.account ? t.account : (await O(e, {
                    chainId: r,
                    connector: o
                })).account;
                let c = e.getClient({
                        chainId: r
                    }),
                    l = (0, j.s)(c, K, "simulateContract"),
                    {
                        result: s,
                        request: u
                    } = await l({ ...i,
                        abi: a,
                        account: n
                    });
                return {
                    chainId: c.chain.id,
                    result: s,
                    request: {
                        __mode: "prepared",
                        ...u,
                        chainId: r
                    }
                }
            }
            async function J(e, t) {
                let n, a;
                let {
                    account: r,
                    chainId: o,
                    connector: i,
                    __mode: c,
                    ...l
                } = t;
                if (n = "object" == typeof r && "local" === r.type ? e.getClient({
                        chainId: o
                    }) : await O(e, {
                        account: r,
                        chainId: o,
                        connector: i
                    }), "prepared" === c) a = l;
                else {
                    let {
                        request: t
                    } = await L(e, { ...l,
                        account: r
                    });
                    a = t
                }
                let s = (0, j.s)(n, _, "writeContract");
                return await s({ ...a,
                    ...r ? {
                        account: r
                    } : {},
                    chain: o ? {
                        id: o
                    } : null
                })
            }
            var Q = n(42887);

            function X() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        mutation: n
                    } = t,
                    r = (e = (0, Q.Z)(t), {
                        mutationFn: t => J(e, t),
                        mutationKey: ["writeContract"]
                    }),
                    {
                        mutate: o,
                        mutateAsync: i,
                        ...c
                    } = (0, a.D)({ ...n,
                        ...r
                    });
                return { ...c,
                    writeContract: o,
                    writeContractAsync: i
                }
            }
        }
    }
]);