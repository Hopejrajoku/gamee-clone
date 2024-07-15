"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [53], {
        31723: function(e, t, n) {
            n.d(t, {
                L: function() {
                    return a
                }
            });
            var i = n(96130),
                r = n(37225);

            function a(e, t) {
                let {
                    chainId: n,
                    ...a
                } = t, o = e.getClient({
                    chainId: n
                });
                return (0, r.s)(o, i.L, "readContract")(a)
            }
        },
        73054: function(e, t, n) {
            function i(e) {
                return JSON.stringify(e, (e, t) => ! function(e) {
                    if (!r(e)) return !1;
                    let t = e.constructor;
                    if (void 0 === t) return !0;
                    let n = t.prototype;
                    return !!(r(n) && n.hasOwnProperty("isPrototypeOf"))
                }(t) ? "bigint" == typeof t ? t.toString() : t : Object.keys(t).sort().reduce((e, n) => (e[n] = t[n], e), {}))
            }

            function r(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function a(e) {
                let {
                    _defaulted: t,
                    behavior: n,
                    gcTime: i,
                    initialData: r,
                    initialDataUpdatedAt: a,
                    maxPages: o,
                    meta: s,
                    networkMode: c,
                    queryFn: u,
                    queryHash: l,
                    queryKey: d,
                    queryKeyHashFn: h,
                    retry: f,
                    retryDelay: p,
                    structuralSharing: b,
                    getPreviousPageParam: m,
                    getNextPageParam: v,
                    initialPageParam: g,
                    _optimisticResults: y,
                    enabled: w,
                    notifyOnChangeProps: P,
                    placeholderData: x,
                    refetchInterval: _,
                    refetchIntervalInBackground: O,
                    refetchOnMount: j,
                    refetchOnReconnect: C,
                    refetchOnWindowFocus: M,
                    retryOnMount: E,
                    select: k,
                    staleTime: R,
                    suspense: G,
                    throwOnError: T,
                    config: F,
                    connector: A,
                    query: S,
                    ...z
                } = e;
                return z
            }
            n.d(t, {
                O: function() {
                    return a
                },
                k: function() {
                    return i
                }
            })
        },
        37225: function(e, t, n) {
            n.d(t, {
                s: function() {
                    return i
                }
            });

            function i(e, t, n) {
                var i;
                let r = e[null !== (i = t.name) && void 0 !== i ? i : n];
                return "function" == typeof r ? r : n => t(e, n)
            }
        },
        8302: function(e, t, n) {
            n.d(t, {
                RE: function() {
                    return x
                }
            });
            var i = n(79561),
                r = n(10035),
                a = n(44898),
                o = n(80230),
                s = n(55774),
                c = n(47115),
                u = n(11758),
                l = n(94655),
                d = n(27470),
                h = n(3551),
                f = n(39361),
                p = n(73621),
                b = n(15578),
                m = n(26463),
                v = n(85069),
                g = n(67306),
                y = n(20662),
                w = n(5493),
                P = n(15337);
            async function x(e, t) {
                var r, u, d, h;
                let {
                    account: p = e.account,
                    batch: w = !!(null === (r = e.batch) || void 0 === r ? void 0 : r.multicall),
                    blockNumber: x,
                    blockTag: j = "latest",
                    accessList: C,
                    data: M,
                    gas: E,
                    gasPrice: k,
                    maxFeePerGas: R,
                    maxPriorityFeePerGas: G,
                    nonce: T,
                    to: F,
                    value: A,
                    stateOverride: S,
                    ...z
                } = t, B = p ? (0, i.T)(p) : void 0;
                try {
                    (0, P.F)(t);
                    let n = (x ? (0, b.eC)(x) : void 0) || j,
                        i = function(e) {
                            if (!e) return;
                            let t = {};
                            for (let {
                                    address: n,
                                    ...i
                                } of e) {
                                if (!(0, f.U)(n, {
                                        strict: !1
                                    })) throw new a.b({
                                    address: n
                                });
                                if (t[n]) throw new l.Nc({
                                    address: n
                                });
                                t[n] = function(e) {
                                    let {
                                        balance: t,
                                        nonce: n,
                                        state: i,
                                        stateDiff: r,
                                        code: a
                                    } = e, o = {};
                                    if (void 0 !== a && (o.code = a), void 0 !== t && (o.balance = (0, b.eC)(t, {
                                            size: 32
                                        })), void 0 !== n && (o.nonce = (0, b.eC)(n, {
                                            size: 8
                                        })), void 0 !== i && (o.state = O(i)), void 0 !== r) {
                                        if (o.state) throw new l.Z8;
                                        o.stateDiff = O(r)
                                    }
                                    return o
                                }(i)
                            }
                            return t
                        }(S),
                        r = null === (h = e.chain) || void 0 === h ? void 0 : null === (d = h.formatters) || void 0 === d ? void 0 : null === (u = d.transactionRequest) || void 0 === u ? void 0 : u.format,
                        o = (r || y.tG)({ ...(0, g.K)(z, {
                                format: r
                            }),
                            from: null == B ? void 0 : B.address,
                            accessList: C,
                            data: M,
                            gas: E,
                            gasPrice: k,
                            maxFeePerGas: R,
                            maxPriorityFeePerGas: G,
                            nonce: T,
                            to: F,
                            value: A
                        });
                    if (w && function(e) {
                            let {
                                request: t
                            } = e, {
                                data: n,
                                to: i,
                                ...r
                            } = t;
                            return !(!n || n.startsWith("0x82ad56cb")) && !!i && !(Object.values(r).filter(e => void 0 !== e).length > 0)
                        }({
                            request: o
                        }) && !i) try {
                        return await _(e, { ...o,
                            blockNumber: x,
                            blockTag: j
                        })
                    } catch (e) {
                        if (!(e instanceof s.pZ) && !(e instanceof s.mm)) throw e
                    }
                    let c = await e.request({
                        method: "eth_call",
                        params: i ? [o, n, i] : [o, n]
                    });
                    if ("0x" === c) return {
                        data: void 0
                    };
                    return {
                        data: c
                    }
                } catch (s) {
                    let i = function(e) {
                            if (!(e instanceof o.G)) return;
                            let t = e.walk();
                            return "object" == typeof t.data ? t.data.data : t.data
                        }(s),
                        {
                            offchainLookup: r,
                            offchainLookupSignature: a
                        } = await n.e(696).then(n.bind(n, 44696));
                    if ((null == i ? void 0 : i.slice(0, 10)) === a && F) return {
                        data: await r(e, {
                            data: i,
                            to: F
                        })
                    };
                    throw function(e, t) {
                        let {
                            docsPath: n,
                            ...i
                        } = t, r = (() => {
                            let t = (0, v.k)(e, i);
                            return t instanceof m.cj ? e : t
                        })();
                        return new c.cg(r, {
                            docsPath: n,
                            ...i
                        })
                    }(s, { ...t,
                        account: B,
                        chain: e.chain
                    })
                }
            }
            async function _(e, t) {
                var n;
                let {
                    batchSize: i = 1024,
                    wait: a = 0
                } = "object" == typeof(null === (n = e.batch) || void 0 === n ? void 0 : n.multicall) ? e.batch.multicall: {}, {
                    blockNumber: o,
                    blockTag: u = "latest",
                    data: l,
                    multicallAddress: f,
                    to: m
                } = t, v = f;
                if (!v) {
                    if (!e.chain) throw new s.pZ;
                    v = (0, p.L)({
                        blockNumber: o,
                        chain: e.chain,
                        contract: "multicall3"
                    })
                }
                let g = (o ? (0, b.eC)(o) : void 0) || u,
                    {
                        schedule: y
                    } = (0, w.S)({
                        id: "".concat(e.uid, ".").concat(g),
                        wait: a,
                        shouldSplitBatch: e => e.reduce((e, t) => {
                            let {
                                data: n
                            } = t;
                            return e + (n.length - 2)
                        }, 0) > 2 * i,
                        fn: async t => {
                            let n = t.map(e => ({
                                    allowFailure: !0,
                                    callData: e.data,
                                    target: e.to
                                })),
                                i = (0, h.R)({
                                    abi: r.F8,
                                    args: [n],
                                    functionName: "aggregate3"
                                }),
                                a = await e.request({
                                    method: "eth_call",
                                    params: [{
                                        data: i,
                                        to: v
                                    }, g]
                                });
                            return (0, d.k)({
                                abi: r.F8,
                                args: [n],
                                functionName: "aggregate3",
                                data: a || "0x"
                            })
                        }
                    }),
                    [{
                        returnData: P,
                        success: x
                    }] = await y({
                        data: l,
                        to: m
                    });
                if (!x) throw new c.VQ({
                    data: P
                });
                return "0x" === P ? {
                    data: void 0
                } : {
                    data: P
                }
            }

            function O(e) {
                if (e && 0 !== e.length) return e.reduce((e, t) => {
                    let {
                        slot: n,
                        value: i
                    } = t;
                    if (66 !== n.length) throw new u.W_({
                        size: n.length,
                        targetSize: 66,
                        type: "hex"
                    });
                    if (66 !== i.length) throw new u.W_({
                        size: i.length,
                        targetSize: 66,
                        type: "hex"
                    });
                    return e[n] = i, e
                }, {})
            }
        },
        96130: function(e, t, n) {
            n.d(t, {
                L: function() {
                    return c
                }
            });
            var i = n(27470),
                r = n(3551),
                a = n(95094),
                o = n(31935),
                s = n(8302);
            async function c(e, t) {
                let {
                    abi: n,
                    address: c,
                    args: u,
                    functionName: l,
                    ...d
                } = t, h = (0, r.R)({
                    abi: n,
                    args: u,
                    functionName: l
                });
                try {
                    let {
                        data: t
                    } = await (0, o.s)(e, s.RE, "call")({ ...d,
                        data: h,
                        to: c
                    });
                    return (0, i.k)({
                        abi: n,
                        args: u,
                        functionName: l,
                        data: t || "0x"
                    })
                } catch (e) {
                    throw (0, a.S)(e, {
                        abi: n,
                        address: c,
                        args: u,
                        docsPath: "/docs/contract/readContract",
                        functionName: l
                    })
                }
            }
        },
        10035: function(e, t, n) {
            n.d(t, {
                F8: function() {
                    return i
                }
            });
            let i = [{
                    inputs: [{
                        components: [{
                            name: "target",
                            type: "address"
                        }, {
                            name: "allowFailure",
                            type: "bool"
                        }, {
                            name: "callData",
                            type: "bytes"
                        }],
                        name: "calls",
                        type: "tuple[]"
                    }],
                    name: "aggregate3",
                    outputs: [{
                        components: [{
                            name: "success",
                            type: "bool"
                        }, {
                            name: "returnData",
                            type: "bytes"
                        }],
                        name: "returnData",
                        type: "tuple[]"
                    }],
                    stateMutability: "view",
                    type: "function"
                }],
                r = [{
                    inputs: [],
                    name: "ResolverNotFound",
                    type: "error"
                }, {
                    inputs: [],
                    name: "ResolverWildcardNotSupported",
                    type: "error"
                }, {
                    inputs: [],
                    name: "ResolverNotContract",
                    type: "error"
                }, {
                    inputs: [{
                        name: "returnData",
                        type: "bytes"
                    }],
                    name: "ResolverError",
                    type: "error"
                }, {
                    inputs: [{
                        components: [{
                            name: "status",
                            type: "uint16"
                        }, {
                            name: "message",
                            type: "string"
                        }],
                        name: "errors",
                        type: "tuple[]"
                    }],
                    name: "HttpError",
                    type: "error"
                }];
            [...r], [...r]
        },
        26390: function(e, t, n) {
            n.d(t, {
                $: function() {
                    return i
                },
                Up: function() {
                    return r
                },
                hZ: function() {
                    return a
                }
            });
            let i = {
                    1: "An `assert` condition failed.",
                    17: "Arithmetic operation resulted in underflow or overflow.",
                    18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
                    33: "Attempted to convert to an invalid type.",
                    34: "Attempted to access a storage byte array that is incorrectly encoded.",
                    49: "Performed `.pop()` on an empty array",
                    50: "Array index is out of bounds.",
                    65: "Allocated too much memory or created an array which is too large.",
                    81: "Attempted to call a zero-initialized variable of internal function type."
                },
                r = {
                    inputs: [{
                        name: "message",
                        type: "string"
                    }],
                    name: "Error",
                    type: "error"
                },
                a = {
                    inputs: [{
                        name: "reason",
                        type: "uint256"
                    }],
                    name: "Panic",
                    type: "error"
                }
        },
        4817: function(e, t, n) {
            n.d(t, {
                Bd: function() {
                    return a
                },
                Zn: function() {
                    return r
                },
                ez: function() {
                    return i
                }
            });
            let i = {
                    gwei: 9,
                    wei: 18
                },
                r = {
                    ether: -9,
                    wei: 9
                },
                a = {
                    ether: -18,
                    gwei: -9
                }
        },
        45581: function(e, t, n) {
            n.d(t, {
                CI: function() {
                    return m
                },
                M4: function() {
                    return u
                },
                MX: function() {
                    return f
                },
                S4: function() {
                    return p
                },
                dh: function() {
                    return b
                },
                fs: function() {
                    return l
                },
                gr: function() {
                    return c
                },
                hn: function() {
                    return v
                },
                wM: function() {
                    return g
                },
                wb: function() {
                    return s
                },
                xB: function() {
                    return o
                },
                xL: function() {
                    return h
                },
                yP: function() {
                    return d
                }
            });
            var i = n(67705),
                r = n(95305),
                a = n(80230);
            class o extends a.G {
                constructor({
                    data: e,
                    params: t,
                    size: n
                }) {
                    super(["Data size of ".concat(n, " bytes is too small for given parameters.")].join("\n"), {
                        metaMessages: ["Params: (".concat((0, i.h)(t, {
                            includeName: !0
                        }), ")"), "Data:   ".concat(e, " (").concat(n, " bytes)")]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiDecodingDataSizeTooSmallError"
                    }), Object.defineProperty(this, "data", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "params", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "size", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.data = e, this.params = t, this.size = n
                }
            }
            class s extends a.G {
                constructor() {
                    super('Cannot decode zero data ("0x") with ABI parameters.'), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiDecodingZeroDataError"
                    })
                }
            }
            class c extends a.G {
                constructor({
                    expectedLength: e,
                    givenLength: t,
                    type: n
                }) {
                    super(["ABI encoding array length mismatch for type ".concat(n, "."), "Expected length: ".concat(e), "Given length: ".concat(t)].join("\n")), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiEncodingArrayLengthMismatchError"
                    })
                }
            }
            class u extends a.G {
                constructor({
                    expectedSize: e,
                    value: t
                }) {
                    super('Size of bytes "'.concat(t, '" (bytes').concat((0, r.d)(t), ") does not match expected size (bytes").concat(e, ").")), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiEncodingBytesSizeMismatchError"
                    })
                }
            }
            class l extends a.G {
                constructor({
                    expectedLength: e,
                    givenLength: t
                }) {
                    super(["ABI encoding params/values length mismatch.", "Expected length (params): ".concat(e), "Given length (values): ".concat(t)].join("\n")), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiEncodingLengthMismatchError"
                    })
                }
            }
            class d extends a.G {
                constructor(e, {
                    docsPath: t
                }) {
                    super(['Encoded error signature "'.concat(e, '" not found on ABI.'), "Make sure you are using the correct ABI and that the error exists on it.", "You can look up the decoded signature here: https://openchain.xyz/signatures?query=".concat(e, ".")].join("\n"), {
                        docsPath: t
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiErrorSignatureNotFoundError"
                    }), Object.defineProperty(this, "signature", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.signature = e
                }
            }
            class h extends a.G {
                constructor(e, {
                    docsPath: t
                } = {}) {
                    super(["Function ".concat(e ? '"'.concat(e, '" ') : "", "not found on ABI."), "Make sure you are using the correct ABI and that the function exists on it."].join("\n"), {
                        docsPath: t
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiFunctionNotFoundError"
                    })
                }
            }
            class f extends a.G {
                constructor(e, {
                    docsPath: t
                }) {
                    super(['Function "'.concat(e, '" does not contain any `outputs` on ABI.'), "Cannot decode function result without knowing what the parameter types are.", "Make sure you are using the correct ABI and that the function exists on it."].join("\n"), {
                        docsPath: t
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiFunctionOutputsNotFoundError"
                    })
                }
            }
            class p extends a.G {
                constructor(e, t) {
                    super("Found ambiguous types in overloaded ABI items.", {
                        metaMessages: ["`".concat(e.type, "` in `").concat((0, i.t)(e.abiItem), "`, and"), "`".concat(t.type, "` in `").concat((0, i.t)(t.abiItem), "`"), "", "These types encode differently and cannot be distinguished at runtime.", "Remove one of the ambiguous items in the ABI."]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiItemAmbiguityError"
                    })
                }
            }
            class b extends a.G {
                constructor(e, {
                    docsPath: t
                }) {
                    super(['Type "'.concat(e, '" is not a valid encoding type.'), "Please provide a valid ABI type."].join("\n"), {
                        docsPath: t
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidAbiEncodingType"
                    })
                }
            }
            class m extends a.G {
                constructor(e, {
                    docsPath: t
                }) {
                    super(['Type "'.concat(e, '" is not a valid decoding type.'), "Please provide a valid ABI type."].join("\n"), {
                        docsPath: t
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidAbiDecodingType"
                    })
                }
            }
            class v extends a.G {
                constructor(e) {
                    super(['Value "'.concat(e, '" is not a valid array.')].join("\n")), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidArrayError"
                    })
                }
            }
            class g extends a.G {
                constructor(e) {
                    super(['"'.concat(e, '" is not a valid definition type.'), 'Valid types: "function", "event", "error"'].join("\n")), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidDefinitionTypeError"
                    })
                }
            }
        },
        55774: function(e, t, n) {
            n.d(t, {
                Bk: function() {
                    return o
                },
                Yl: function() {
                    return a
                },
                mm: function() {
                    return r
                },
                pZ: function() {
                    return s
                }
            });
            var i = n(80230);
            class r extends i.G {
                constructor({
                    blockNumber: e,
                    chain: t,
                    contract: n
                }) {
                    super('Chain "'.concat(t.name, '" does not support contract "').concat(n.name, '".'), {
                        metaMessages: ["This could be due to any of the following:", ...e && n.blockCreated && n.blockCreated > e ? ['- The contract "'.concat(n.name, '" was not deployed until block ').concat(n.blockCreated, " (current block ").concat(e, ").")] : ['- The chain does not have the contract "'.concat(n.name, '" configured.')]]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ChainDoesNotSupportContract"
                    })
                }
            }
            class a extends i.G {
                constructor({
                    chain: e,
                    currentChainId: t
                }) {
                    super("The current chain of the wallet (id: ".concat(t, ") does not match the target chain for the transaction (id: ").concat(e.id, " – ").concat(e.name, ")."), {
                        metaMessages: ["Current Chain ID:  ".concat(t), "Expected Chain ID: ".concat(e.id, " – ").concat(e.name)]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ChainMismatchError"
                    })
                }
            }
            class o extends i.G {
                constructor() {
                    super("No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ChainNotFoundError"
                    })
                }
            }
            class s extends i.G {
                constructor() {
                    super("No chain was provided to the Client."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ClientChainNotConfiguredError"
                    })
                }
            }
        },
        47115: function(e, t, n) {
            n.d(t, {
                cg: function() {
                    return v
                },
                uq: function() {
                    return g
                },
                Lu: function() {
                    return y
                },
                Dk: function() {
                    return w
                },
                VQ: function() {
                    return P
                }
            });
            var i = n(79561),
                r = n(26390),
                a = n(68890),
                o = n(67705),
                s = n(92791);

            function c(e) {
                let {
                    abiItem: t,
                    args: n,
                    includeFunctionName: i = !0,
                    includeName: r = !1
                } = e;
                if ("name" in t && "inputs" in t && t.inputs) return "".concat(i ? t.name : "", "(").concat(t.inputs.map((e, t) => "".concat(r && e.name ? "".concat(e.name, ": ") : "").concat("object" == typeof n[t] ? (0, s.P)(n[t]) : n[t])).join(", "), ")")
            }
            var u = n(92261),
                l = n(52926),
                d = n(98206),
                h = n(45581),
                f = n(80230),
                p = n(94655),
                b = n(10289),
                m = n(48036);
            class v extends f.G {
                constructor(e, {
                    account: t,
                    docsPath: n,
                    chain: r,
                    data: a,
                    gas: o,
                    gasPrice: s,
                    maxFeePerGas: c,
                    maxPriorityFeePerGas: u,
                    nonce: h,
                    to: f,
                    value: m,
                    stateOverride: v
                }) {
                    var g;
                    let y = t ? (0, i.T)(t) : void 0,
                        w = (0, b.xr)({
                            from: null == y ? void 0 : y.address,
                            to: f,
                            value: void 0 !== m && "".concat((0, l.d)(m), " ").concat((null == r ? void 0 : null === (g = r.nativeCurrency) || void 0 === g ? void 0 : g.symbol) || "ETH"),
                            data: a,
                            gas: o,
                            gasPrice: void 0 !== s && "".concat((0, d.o)(s), " gwei"),
                            maxFeePerGas: void 0 !== c && "".concat((0, d.o)(c), " gwei"),
                            maxPriorityFeePerGas: void 0 !== u && "".concat((0, d.o)(u), " gwei"),
                            nonce: h
                        });
                    v && (w += "\n".concat((0, p.Bj)(v))), super(e.shortMessage, {
                        cause: e,
                        docsPath: n,
                        metaMessages: [...e.metaMessages ? [...e.metaMessages, " "] : [], "Raw Call Arguments:", w].filter(Boolean)
                    }), Object.defineProperty(this, "cause", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "CallExecutionError"
                    }), this.cause = e
                }
            }
            class g extends f.G {
                constructor(e, {
                    abi: t,
                    args: n,
                    contractAddress: i,
                    docsPath: r,
                    functionName: a,
                    sender: s
                }) {
                    var l;
                    let d = (0, u.mE)({
                            abi: t,
                            args: n,
                            name: a
                        }),
                        h = d ? c({
                            abiItem: d,
                            args: n,
                            includeFunctionName: !1,
                            includeName: !1
                        }) : void 0;
                    super(e.shortMessage || 'An unknown error occurred while executing the contract function "'.concat(a, '".'), {
                        cause: e,
                        docsPath: r,
                        metaMessages: [...e.metaMessages ? [...e.metaMessages, " "] : [], "Contract Call:", (0, b.xr)({
                            address: i && (0, m.CR)(i),
                            function: d ? (0, o.t)(d, {
                                includeName: !0
                            }) : void 0,
                            args: h && "()" !== h && "".concat([...Array(null !== (l = null == a ? void 0 : a.length) && void 0 !== l ? l : 0).keys()].map(() => " ").join("")).concat(h),
                            sender: s
                        })].filter(Boolean)
                    }), Object.defineProperty(this, "abi", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "args", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "cause", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "contractAddress", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "formattedArgs", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "functionName", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "sender", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ContractFunctionExecutionError"
                    }), this.abi = t, this.args = n, this.cause = e, this.contractAddress = i, this.functionName = a, this.sender = s
                }
            }
            class y extends f.G {
                constructor({
                    abi: e,
                    data: t,
                    functionName: n,
                    message: i
                }) {
                    let s, u, l, d, f;
                    if (t && "0x" !== t) try {
                        let {
                            abiItem: n,
                            errorName: i,
                            args: s
                        } = f = (0, a.p)({
                            abi: e,
                            data: t
                        });
                        if ("Error" === i) l = s[0];
                        else if ("Panic" === i) {
                            let [e] = s;
                            l = r.$[e]
                        } else {
                            var p;
                            let e = n ? (0, o.t)(n, {
                                    includeName: !0
                                }) : void 0,
                                t = n && s ? c({
                                    abiItem: n,
                                    args: s,
                                    includeFunctionName: !1,
                                    includeName: !1
                                }) : void 0;
                            u = [e ? "Error: ".concat(e) : "", t && "()" !== t ? "       ".concat([...Array(null !== (p = null == i ? void 0 : i.length) && void 0 !== p ? p : 0).keys()].map(() => " ").join("")).concat(t) : ""]
                        }
                    } catch (e) {
                        s = e
                    } else i && (l = i);
                    s instanceof h.yP && (d = s.signature, u = ['Unable to decode signature "'.concat(d, '" as it was not found on the provided ABI.'), "Make sure you are using the correct ABI and that the error exists on it.", "You can look up the decoded signature here: https://openchain.xyz/signatures?query=".concat(d, ".")]), super(l && "execution reverted" !== l || d ? ['The contract function "'.concat(n, '" reverted with the following ').concat(d ? "signature" : "reason", ":"), l || d].join("\n") : 'The contract function "'.concat(n, '" reverted.'), {
                        cause: s,
                        metaMessages: u
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ContractFunctionRevertedError"
                    }), Object.defineProperty(this, "data", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "reason", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "signature", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.data = f, this.reason = l, this.signature = d
                }
            }
            class w extends f.G {
                constructor({
                    functionName: e
                }) {
                    super('The contract function "'.concat(e, '" returned no data ("0x").'), {
                        metaMessages: ["This could be due to any of the following:", '  - The contract does not have the function "'.concat(e, '",'), "  - The parameters passed to the contract function may be invalid, or", "  - The address is not a contract."]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ContractFunctionZeroDataError"
                    })
                }
            }
            class P extends f.G {
                constructor({
                    data: e,
                    message: t
                }) {
                    super(t || ""), Object.defineProperty(this, "code", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 3
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "RawContractError"
                    }), Object.defineProperty(this, "data", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.data = e
                }
            }
        },
        26463: function(e, t, n) {
            n.d(t, {
                C_: function() {
                    return d
                },
                G$: function() {
                    return s
                },
                Hh: function() {
                    return o
                },
                M_: function() {
                    return a
                },
                WF: function() {
                    return h
                },
                ZI: function() {
                    return c
                },
                cj: function() {
                    return m
                },
                cs: function() {
                    return b
                },
                dR: function() {
                    return f
                },
                pZ: function() {
                    return p
                },
                se: function() {
                    return l
                },
                vU: function() {
                    return u
                }
            });
            var i = n(98206),
                r = n(80230);
            class a extends r.G {
                constructor({
                    cause: e,
                    message: t
                } = {}) {
                    var n;
                    let i = null == t ? void 0 : null === (n = t.replace("execution reverted: ", "")) || void 0 === n ? void 0 : n.replace("execution reverted", "");
                    super("Execution reverted ".concat(i ? "with reason: ".concat(i) : "for an unknown reason", "."), {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ExecutionRevertedError"
                    })
                }
            }
            Object.defineProperty(a, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 3
            }), Object.defineProperty(a, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /execution reverted/
            });
            class o extends r.G {
                constructor({
                    cause: e,
                    maxFeePerGas: t
                } = {}) {
                    super("The fee cap (`maxFeePerGas`".concat(t ? " = ".concat((0, i.o)(t), " gwei") : "", ") cannot be higher than the maximum allowed value (2^256-1)."), {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "FeeCapTooHigh"
                    })
                }
            }
            Object.defineProperty(o, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
            });
            class s extends r.G {
                constructor({
                    cause: e,
                    maxFeePerGas: t
                } = {}) {
                    super("The fee cap (`maxFeePerGas`".concat(t ? " = ".concat((0, i.o)(t)) : "", " gwei) cannot be lower than the block base fee."), {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "FeeCapTooLow"
                    })
                }
            }
            Object.defineProperty(s, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
            });
            class c extends r.G {
                constructor({
                    cause: e,
                    nonce: t
                } = {}) {
                    super("Nonce provided for the transaction ".concat(t ? "(".concat(t, ") ") : "", "is higher than the next one expected."), {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "NonceTooHighError"
                    })
                }
            }
            Object.defineProperty(c, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /nonce too high/
            });
            class u extends r.G {
                constructor({
                    cause: e,
                    nonce: t
                } = {}) {
                    super(["Nonce provided for the transaction ".concat(t ? "(".concat(t, ") ") : "", "is lower than the current nonce of the account."), "Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join("\n"), {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "NonceTooLowError"
                    })
                }
            }
            Object.defineProperty(u, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /nonce too low|transaction already imported|already known/
            });
            class l extends r.G {
                constructor({
                    cause: e,
                    nonce: t
                } = {}) {
                    super("Nonce provided for the transaction ".concat(t ? "(".concat(t, ") ") : "", "exceeds the maximum allowed nonce."), {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "NonceMaxValueError"
                    })
                }
            }
            Object.defineProperty(l, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /nonce has max value/
            });
            class d extends r.G {
                constructor({
                    cause: e
                } = {}) {
                    super("The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.", {
                        cause: e,
                        metaMessages: ["This error could arise when the account does not have enough funds to:", " - pay for the total gas fee,", " - pay for the value to send.", " ", "The cost of the transaction is calculated as `gas * gas fee + value`, where:", " - `gas` is the amount of gas needed for transaction to execute,", " - `gas fee` is the gas fee,", " - `value` is the amount of ether to send to the recipient."]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InsufficientFundsError"
                    })
                }
            }
            Object.defineProperty(d, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /insufficient funds/
            });
            class h extends r.G {
                constructor({
                    cause: e,
                    gas: t
                } = {}) {
                    super("The amount of gas ".concat(t ? "(".concat(t, ") ") : "", "provided for the transaction exceeds the limit allowed for the block."), {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "IntrinsicGasTooHighError"
                    })
                }
            }
            Object.defineProperty(h, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /intrinsic gas too high|gas limit reached/
            });
            class f extends r.G {
                constructor({
                    cause: e,
                    gas: t
                } = {}) {
                    super("The amount of gas ".concat(t ? "(".concat(t, ") ") : "", "provided for the transaction is too low."), {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "IntrinsicGasTooLowError"
                    })
                }
            }
            Object.defineProperty(f, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /intrinsic gas too low/
            });
            class p extends r.G {
                constructor({
                    cause: e
                }) {
                    super("The transaction type is not supported for this chain.", {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "TransactionTypeNotSupportedError"
                    })
                }
            }
            Object.defineProperty(p, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /transaction type not valid/
            });
            class b extends r.G {
                constructor({
                    cause: e,
                    maxPriorityFeePerGas: t,
                    maxFeePerGas: n
                } = {}) {
                    super(["The provided tip (`maxPriorityFeePerGas`".concat(t ? " = ".concat((0, i.o)(t), " gwei") : "", ") cannot be higher than the fee cap (`maxFeePerGas`").concat(n ? " = ".concat((0, i.o)(n), " gwei") : "", ").")].join("\n"), {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "TipAboveFeeCapError"
                    })
                }
            }
            Object.defineProperty(b, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
            });
            class m extends r.G {
                constructor({
                    cause: e
                }) {
                    super("An error occurred while executing: ".concat(null == e ? void 0 : e.shortMessage), {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "UnknownNodeError"
                    })
                }
            }
        },
        94655: function(e, t, n) {
            n.d(t, {
                Bj: function() {
                    return s
                },
                Nc: function() {
                    return r
                },
                Z8: function() {
                    return a
                }
            });
            var i = n(80230);
            class r extends i.G {
                constructor({
                    address: e
                }) {
                    super('State for account "'.concat(e, '" is set multiple times.')), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AccountStateConflictError"
                    })
                }
            }
            class a extends i.G {
                constructor() {
                    super("state and stateDiff are set on the same account."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "StateAssignmentConflictError"
                    })
                }
            }

            function o(e) {
                return e.reduce((e, t) => {
                    let {
                        slot: n,
                        value: i
                    } = t;
                    return "".concat(e, "        ").concat(n, ": ").concat(i, "\n")
                }, "")
            }

            function s(e) {
                return e.reduce((e, t) => {
                    let {
                        address: n,
                        ...i
                    } = t, r = "".concat(e, "    ").concat(n, ":\n");
                    return i.nonce && (r += "      nonce: ".concat(i.nonce, "\n")), i.balance && (r += "      balance: ".concat(i.balance, "\n")), i.code && (r += "      code: ".concat(i.code, "\n")), i.state && (r += "      state:\n" + o(i.state)), i.stateDiff && (r += "      stateDiff:\n" + o(i.stateDiff)), r
                }, "  State Override:\n").slice(0, -1)
            }
        },
        10289: function(e, t, n) {
            n.d(t, {
                Bh: function() {
                    return l
                },
                Yb: function() {
                    return d
                },
                j3: function() {
                    return c
                },
                mc: function() {
                    return h
                },
                mk: function() {
                    return u
                },
                xY: function() {
                    return s
                },
                xr: function() {
                    return o
                }
            });
            var i = n(52926),
                r = n(98206),
                a = n(80230);

            function o(e) {
                let t = Object.entries(e).map(e => {
                        let [t, n] = e;
                        return void 0 === n || !1 === n ? null : [t, n]
                    }).filter(Boolean),
                    n = t.reduce((e, t) => {
                        let [n] = t;
                        return Math.max(e, n.length)
                    }, 0);
                return t.map(e => {
                    let [t, i] = e;
                    return "  ".concat("".concat(t, ":").padEnd(n + 1), "  ").concat(i)
                }).join("\n")
            }
            class s extends a.G {
                constructor() {
                    super("Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "FeeConflictError"
                    })
                }
            }
            class c extends a.G {
                constructor({
                    transaction: e
                }) {
                    super("Cannot infer a transaction type from provided transaction.", {
                        metaMessages: ["Provided Transaction:", "{", o(e), "}", "", "To infer the type, either provide:", "- a `type` to the Transaction, or", "- an EIP-1559 Transaction with `maxFeePerGas`, or", "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or", "- a Legacy Transaction with `gasPrice`"]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidSerializableTransactionError"
                    })
                }
            }
            class u extends a.G {
                constructor(e, {
                    account: t,
                    docsPath: n,
                    chain: a,
                    data: s,
                    gas: c,
                    gasPrice: u,
                    maxFeePerGas: l,
                    maxPriorityFeePerGas: d,
                    nonce: h,
                    to: f,
                    value: p
                }) {
                    var b;
                    super(e.shortMessage, {
                        cause: e,
                        docsPath: n,
                        metaMessages: [...e.metaMessages ? [...e.metaMessages, " "] : [], "Request Arguments:", o({
                            chain: a && "".concat(null == a ? void 0 : a.name, " (id: ").concat(null == a ? void 0 : a.id, ")"),
                            from: null == t ? void 0 : t.address,
                            to: f,
                            value: void 0 !== p && "".concat((0, i.d)(p), " ").concat((null == a ? void 0 : null === (b = a.nativeCurrency) || void 0 === b ? void 0 : b.symbol) || "ETH"),
                            data: s,
                            gas: c,
                            gasPrice: void 0 !== u && "".concat((0, r.o)(u), " gwei"),
                            maxFeePerGas: void 0 !== l && "".concat((0, r.o)(l), " gwei"),
                            maxPriorityFeePerGas: void 0 !== d && "".concat((0, r.o)(d), " gwei"),
                            nonce: h
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
                        value: "TransactionExecutionError"
                    }), this.cause = e
                }
            }
            class l extends a.G {
                constructor({
                    blockHash: e,
                    blockNumber: t,
                    blockTag: n,
                    hash: i,
                    index: r
                }) {
                    let a = "Transaction";
                    n && void 0 !== r && (a = 'Transaction at block time "'.concat(n, '" at index "').concat(r, '"')), e && void 0 !== r && (a = 'Transaction at block hash "'.concat(e, '" at index "').concat(r, '"')), t && void 0 !== r && (a = 'Transaction at block number "'.concat(t, '" at index "').concat(r, '"')), i && (a = 'Transaction with hash "'.concat(i, '"')), super("".concat(a, " could not be found.")), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "TransactionNotFoundError"
                    })
                }
            }
            class d extends a.G {
                constructor({
                    hash: e
                }) {
                    super('Transaction receipt with hash "'.concat(e, '" could not be found. The Transaction may not be processed on a block yet.')), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "TransactionReceiptNotFoundError"
                    })
                }
            }
            class h extends a.G {
                constructor({
                    hash: e
                }) {
                    super('Timed out while waiting for transaction with hash "'.concat(e, '" to be confirmed.')), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "WaitForTransactionReceiptTimeoutError"
                    })
                }
            }
        },
        31183: function(e, t, n) {
            n.d(t, {
                r: function() {
                    return y
                }
            });
            var i = n(45581),
                r = n(75036),
                a = n(80230);
            class o extends a.G {
                constructor({
                    offset: e
                }) {
                    super("Offset `".concat(e, "` cannot be negative.")), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "NegativeOffsetError"
                    })
                }
            }
            class s extends a.G {
                constructor({
                    length: e,
                    position: t
                }) {
                    super("Position `".concat(t, "` is out of bounds (`0 < position < ").concat(e, "`).")), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "PositionOutOfBoundsError"
                    })
                }
            }
            class c extends a.G {
                constructor({
                    count: e,
                    limit: t
                }) {
                    super("Recursive read limit of `".concat(t, "` exceeded (recursive read count: `").concat(e, "`).")), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "RecursiveReadLimitExceededError"
                    })
                }
            }
            let u = {
                bytes: new Uint8Array,
                dataView: new DataView(new ArrayBuffer(0)),
                position: 0,
                positionReadCount: new Map,
                recursiveReadCount: 0,
                recursiveReadLimit: 1 / 0,
                assertReadLimit() {
                    if (this.recursiveReadCount >= this.recursiveReadLimit) throw new c({
                        count: this.recursiveReadCount + 1,
                        limit: this.recursiveReadLimit
                    })
                },
                assertPosition(e) {
                    if (e < 0 || e > this.bytes.length - 1) throw new s({
                        length: this.bytes.length,
                        position: e
                    })
                },
                decrementPosition(e) {
                    if (e < 0) throw new o({
                        offset: e
                    });
                    let t = this.position - e;
                    this.assertPosition(t), this.position = t
                },
                getReadCount(e) {
                    return this.positionReadCount.get(e || this.position) || 0
                },
                incrementPosition(e) {
                    if (e < 0) throw new o({
                        offset: e
                    });
                    let t = this.position + e;
                    this.assertPosition(t), this.position = t
                },
                inspectByte(e) {
                    let t = null != e ? e : this.position;
                    return this.assertPosition(t), this.bytes[t]
                },
                inspectBytes(e, t) {
                    let n = null != t ? t : this.position;
                    return this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e)
                },
                inspectUint8(e) {
                    let t = null != e ? e : this.position;
                    return this.assertPosition(t), this.bytes[t]
                },
                inspectUint16(e) {
                    let t = null != e ? e : this.position;
                    return this.assertPosition(t + 1), this.dataView.getUint16(t)
                },
                inspectUint24(e) {
                    let t = null != e ? e : this.position;
                    return this.assertPosition(t + 2), (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
                },
                inspectUint32(e) {
                    let t = null != e ? e : this.position;
                    return this.assertPosition(t + 3), this.dataView.getUint32(t)
                },
                pushByte(e) {
                    this.assertPosition(this.position), this.bytes[this.position] = e, this.position++
                },
                pushBytes(e) {
                    this.assertPosition(this.position + e.length - 1), this.bytes.set(e, this.position), this.position += e.length
                },
                pushUint8(e) {
                    this.assertPosition(this.position), this.bytes[this.position] = e, this.position++
                },
                pushUint16(e) {
                    this.assertPosition(this.position + 1), this.dataView.setUint16(this.position, e), this.position += 2
                },
                pushUint24(e) {
                    this.assertPosition(this.position + 2), this.dataView.setUint16(this.position, e >> 8), this.dataView.setUint8(this.position + 2, 255 & e), this.position += 3
                },
                pushUint32(e) {
                    this.assertPosition(this.position + 3), this.dataView.setUint32(this.position, e), this.position += 4
                },
                readByte() {
                    this.assertReadLimit(), this._touch();
                    let e = this.inspectByte();
                    return this.position++, e
                },
                readBytes(e, t) {
                    this.assertReadLimit(), this._touch();
                    let n = this.inspectBytes(e);
                    return this.position += null != t ? t : e, n
                },
                readUint8() {
                    this.assertReadLimit(), this._touch();
                    let e = this.inspectUint8();
                    return this.position += 1, e
                },
                readUint16() {
                    this.assertReadLimit(), this._touch();
                    let e = this.inspectUint16();
                    return this.position += 2, e
                },
                readUint24() {
                    this.assertReadLimit(), this._touch();
                    let e = this.inspectUint24();
                    return this.position += 3, e
                },
                readUint32() {
                    this.assertReadLimit(), this._touch();
                    let e = this.inspectUint32();
                    return this.position += 4, e
                },
                setPosition(e) {
                    let t = this.position;
                    return this.assertPosition(e), this.position = e, () => this.position = t
                },
                _touch() {
                    if (this.recursiveReadLimit === 1 / 0) return;
                    let e = this.getReadCount();
                    this.positionReadCount.set(this.position, e + 1), e > 0 && this.recursiveReadCount++
                }
            };
            var l = n(95305),
                d = n(23090),
                h = n(71264),
                f = n(75851),
                p = n(55936),
                b = n(15578);

            function m(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                void 0 !== t.size && (0, p.Yf)(e, {
                    size: t.size
                });
                let n = (0, b.ci)(e, t);
                return (0, p.ly)(n, t)
            }
            var v = n(73596),
                g = n(8580);

            function y(e, t) {
                let n = "string" == typeof t ? (0, v.nr)(t) : t,
                    a = function(e) {
                        let {
                            recursiveReadLimit: t = 8192
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = Object.create(u);
                        return n.bytes = e, n.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength), n.positionReadCount = new Map, n.recursiveReadLimit = t, n
                    }(n);
                if (0 === (0, l.d)(n) && e.length > 0) throw new i.wb;
                if ((0, l.d)(t) && 32 > (0, l.d)(t)) throw new i.xB({
                    data: "string" == typeof t ? t : (0, b.ci)(t),
                    params: e,
                    size: (0, l.d)(t)
                });
                let o = 0,
                    s = [];
                for (let t = 0; t < e.length; ++t) {
                    let n = e[t];
                    a.setPosition(o);
                    let [c, u] = function e(t, n, a) {
                        let {
                            staticPosition: o
                        } = a, s = (0, g.S)(n.type);
                        if (s) {
                            let [i, r] = s;
                            return function(t, n, i) {
                                let {
                                    length: r,
                                    staticPosition: a
                                } = i;
                                if (!r) {
                                    let i = a + m(t.readBytes(32)),
                                        r = i + 32;
                                    t.setPosition(i);
                                    let o = m(t.readBytes(32)),
                                        s = w(n),
                                        c = 0,
                                        u = [];
                                    for (let i = 0; i < o; ++i) {
                                        t.setPosition(r + (s ? 32 * i : c));
                                        let [a, o] = e(t, n, {
                                            staticPosition: r
                                        });
                                        c += o, u.push(a)
                                    }
                                    return t.setPosition(a + 32), [u, 32]
                                }
                                if (w(n)) {
                                    let i = a + m(t.readBytes(32)),
                                        o = [];
                                    for (let a = 0; a < r; ++a) {
                                        t.setPosition(i + 32 * a);
                                        let [r] = e(t, n, {
                                            staticPosition: i
                                        });
                                        o.push(r)
                                    }
                                    return t.setPosition(a + 32), [o, 32]
                                }
                                let o = 0,
                                    s = [];
                                for (let i = 0; i < r; ++i) {
                                    let [i, r] = e(t, n, {
                                        staticPosition: a + o
                                    });
                                    o += r, s.push(i)
                                }
                                return [s, o]
                            }(t, { ...n,
                                type: r
                            }, {
                                length: i,
                                staticPosition: o
                            })
                        }
                        if ("tuple" === n.type) return function(t, n, i) {
                            let {
                                staticPosition: r
                            } = i, a = 0 === n.components.length || n.components.some(e => {
                                let {
                                    name: t
                                } = e;
                                return !t
                            }), o = a ? [] : {}, s = 0;
                            if (w(n)) {
                                let i = r + m(t.readBytes(32));
                                for (let r = 0; r < n.components.length; ++r) {
                                    let c = n.components[r];
                                    t.setPosition(i + s);
                                    let [u, l] = e(t, c, {
                                        staticPosition: i
                                    });
                                    s += l, o[a ? r : null == c ? void 0 : c.name] = u
                                }
                                return t.setPosition(r + 32), [o, 32]
                            }
                            for (let i = 0; i < n.components.length; ++i) {
                                let c = n.components[i],
                                    [u, l] = e(t, c, {
                                        staticPosition: r
                                    });
                                o[a ? i : null == c ? void 0 : c.name] = u, s += l
                            }
                            return [o, s]
                        }(t, n, {
                            staticPosition: o
                        });
                        if ("address" === n.type) return function(e) {
                            let t = e.readBytes(32);
                            return [(0, r.x)((0, b.ci)((0, d.T4)(t, -20))), 32]
                        }(t);
                        if ("bool" === n.type) return [function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = e;
                            if (void 0 !== t.size && ((0, p.Yf)(n, {
                                    size: t.size
                                }), n = (0, h.f)(n)), n.length > 1 || n[0] > 1) throw new f.yr(n);
                            return !!n[0]
                        }(t.readBytes(32), {
                            size: 32
                        }), 32];
                        if (n.type.startsWith("bytes")) return function(e, t, n) {
                            let {
                                staticPosition: i
                            } = n, [r, a] = t.type.split("bytes");
                            if (!a) {
                                let t = m(e.readBytes(32));
                                e.setPosition(i + t);
                                let n = m(e.readBytes(32));
                                if (0 === n) return e.setPosition(i + 32), ["0x", 32];
                                let r = e.readBytes(n);
                                return e.setPosition(i + 32), [(0, b.ci)(r), 32]
                            }
                            return [(0, b.ci)(e.readBytes(parseInt(a), 32)), 32]
                        }(t, n, {
                            staticPosition: o
                        });
                        if (n.type.startsWith("uint") || n.type.startsWith("int")) return function(e, t) {
                            let n = t.type.startsWith("int"),
                                i = parseInt(t.type.split("int")[1] || "256"),
                                r = e.readBytes(32);
                            return [i > 48 ? function(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                void 0 !== t.size && (0, p.Yf)(e, {
                                    size: t.size
                                });
                                let n = (0, b.ci)(e, t);
                                return (0, p.y_)(n, t)
                            }(r, {
                                signed: n
                            }) : m(r, {
                                signed: n
                            }), 32]
                        }(t, n);
                        if ("string" === n.type) return function(e, t) {
                            let {
                                staticPosition: n
                            } = t, i = m(e.readBytes(32));
                            e.setPosition(n + i);
                            let r = m(e.readBytes(32));
                            if (0 === r) return e.setPosition(n + 32), ["", 32];
                            let a = e.readBytes(r, 32),
                                o = function(e) {
                                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        n = e;
                                    return void 0 !== t.size && ((0, p.Yf)(n, {
                                        size: t.size
                                    }), n = (0, h.f)(n, {
                                        dir: "right"
                                    })), new TextDecoder().decode(n)
                                }((0, h.f)(a));
                            return e.setPosition(n + 32), [o, 32]
                        }(t, {
                            staticPosition: o
                        });
                        throw new i.CI(n.type, {
                            docsPath: "/docs/contract/decodeAbiParameters"
                        })
                    }(a, n, {
                        staticPosition: 0
                    });
                    o += u, s.push(c)
                }
                return s
            }

            function w(e) {
                var t;
                let {
                    type: n
                } = e;
                if ("string" === n || "bytes" === n || n.endsWith("[]")) return !0;
                if ("tuple" === n) return null === (t = e.components) || void 0 === t ? void 0 : t.some(w);
                let i = (0, g.S)(e.type);
                return !!(i && w({ ...e,
                    type: i[1]
                }))
            }
        },
        68890: function(e, t, n) {
            n.d(t, {
                p: function() {
                    return u
                }
            });
            var i = n(26390),
                r = n(45581),
                a = n(23090),
                o = n(9226),
                s = n(31183),
                c = n(67705);

            function u(e) {
                let {
                    abi: t,
                    data: n
                } = e, u = (0, a.tP)(n, 0, 4);
                if ("0x" === u) throw new r.wb;
                let l = [...t || [], i.Up, i.hZ].find(e => "error" === e.type && u === (0, o.C)((0, c.t)(e)));
                if (!l) throw new r.yP(u, {
                    docsPath: "/docs/contract/decodeErrorResult"
                });
                return {
                    abiItem: l,
                    args: "inputs" in l && l.inputs && l.inputs.length > 0 ? (0, s.r)(l.inputs, (0, a.tP)(n, 4)) : void 0,
                    errorName: l.name
                }
            }
        },
        27470: function(e, t, n) {
            n.d(t, {
                k: function() {
                    return s
                }
            });
            var i = n(45581),
                r = n(31183),
                a = n(92261);
            let o = "/docs/contract/decodeFunctionResult";

            function s(e) {
                let {
                    abi: t,
                    args: n,
                    functionName: s,
                    data: c
                } = e, u = t[0];
                if (s) {
                    let e = (0, a.mE)({
                        abi: t,
                        args: n,
                        name: s
                    });
                    if (!e) throw new i.xL(s, {
                        docsPath: o
                    });
                    u = e
                }
                if ("function" !== u.type) throw new i.xL(void 0, {
                    docsPath: o
                });
                if (!u.outputs) throw new i.MX(u.name, {
                    docsPath: o
                });
                let l = (0, r.r)(u.outputs, c);
                return l && l.length > 1 ? l : l && 1 === l.length ? l[0] : void 0
            }
        },
        8580: function(e, t, n) {
            n.d(t, {
                E: function() {
                    return d
                },
                S: function() {
                    return f
                }
            });
            var i = n(45581),
                r = n(44898),
                a = n(39361),
                o = n(3556),
                s = n(89507),
                c = n(95305),
                u = n(23090),
                l = n(15578);

            function d(e, t) {
                if (e.length !== t.length) throw new i.fs({
                    expectedLength: e.length,
                    givenLength: t.length
                });
                let n = h(function(e) {
                    let {
                        params: t,
                        values: n
                    } = e, d = [];
                    for (let e = 0; e < t.length; e++) d.push(function e(t) {
                        let {
                            param: n,
                            value: d
                        } = t, p = f(n.type);
                        if (p) {
                            let [t, r] = p;
                            return function(t, n) {
                                let {
                                    length: r,
                                    param: a
                                } = n, s = null === r;
                                if (!Array.isArray(t)) throw new i.hn(t);
                                if (!s && t.length !== r) throw new i.gr({
                                    expectedLength: r,
                                    givenLength: t.length,
                                    type: "".concat(a.type, "[").concat(r, "]")
                                });
                                let c = !1,
                                    u = [];
                                for (let n = 0; n < t.length; n++) {
                                    let i = e({
                                        param: a,
                                        value: t[n]
                                    });
                                    i.dynamic && (c = !0), u.push(i)
                                }
                                if (s || c) {
                                    let e = h(u);
                                    if (s) {
                                        let t = (0, l.eC)(u.length, {
                                            size: 32
                                        });
                                        return {
                                            dynamic: !0,
                                            encoded: u.length > 0 ? (0, o.zo)([t, e]) : t
                                        }
                                    }
                                    if (c) return {
                                        dynamic: !0,
                                        encoded: e
                                    }
                                }
                                return {
                                    dynamic: !1,
                                    encoded: (0, o.zo)(u.map(e => {
                                        let {
                                            encoded: t
                                        } = e;
                                        return t
                                    }))
                                }
                            }(d, {
                                length: t,
                                param: { ...n,
                                    type: r
                                }
                            })
                        }
                        if ("tuple" === n.type) return function(t, n) {
                            let {
                                param: i
                            } = n, r = !1, a = [];
                            for (let n = 0; n < i.components.length; n++) {
                                let o = i.components[n],
                                    s = Array.isArray(t) ? n : o.name,
                                    c = e({
                                        param: o,
                                        value: t[s]
                                    });
                                a.push(c), c.dynamic && (r = !0)
                            }
                            return {
                                dynamic: r,
                                encoded: r ? h(a) : (0, o.zo)(a.map(e => {
                                    let {
                                        encoded: t
                                    } = e;
                                    return t
                                }))
                            }
                        }(d, {
                            param: n
                        });
                        if ("address" === n.type) return function(e) {
                            if (!(0, a.U)(e)) throw new r.b({
                                address: e
                            });
                            return {
                                dynamic: !1,
                                encoded: (0, s.gc)(e.toLowerCase())
                            }
                        }(d);
                        if ("bool" === n.type) return {
                            dynamic: !1,
                            encoded: (0, s.gc)((0, l.C4)(d))
                        };
                        if (n.type.startsWith("uint") || n.type.startsWith("int")) return function(e, t) {
                            let {
                                signed: n
                            } = t;
                            return {
                                dynamic: !1,
                                encoded: (0, l.eC)(e, {
                                    size: 32,
                                    signed: n
                                })
                            }
                        }(d, {
                            signed: n.type.startsWith("int")
                        });
                        if (n.type.startsWith("bytes")) return function(e, t) {
                            let {
                                param: n
                            } = t, [, r] = n.type.split("bytes"), a = (0, c.d)(e);
                            if (!r) {
                                let t = e;
                                return a % 32 != 0 && (t = (0, s.gc)(t, {
                                    dir: "right",
                                    size: 32 * Math.ceil((e.length - 2) / 2 / 32)
                                })), {
                                    dynamic: !0,
                                    encoded: (0, o.zo)([(0, s.gc)((0, l.eC)(a, {
                                        size: 32
                                    })), t])
                                }
                            }
                            if (a !== parseInt(r)) throw new i.M4({
                                expectedSize: parseInt(r),
                                value: e
                            });
                            return {
                                dynamic: !1,
                                encoded: (0, s.gc)(e, {
                                    dir: "right"
                                })
                            }
                        }(d, {
                            param: n
                        });
                        if ("string" === n.type) return function(e) {
                            let t = (0, l.$G)(e),
                                n = Math.ceil((0, c.d)(t) / 32),
                                i = [];
                            for (let e = 0; e < n; e++) i.push((0, s.gc)((0, u.tP)(t, 32 * e, (e + 1) * 32), {
                                dir: "right"
                            }));
                            return {
                                dynamic: !0,
                                encoded: (0, o.zo)([(0, s.gc)((0, l.eC)((0, c.d)(t), {
                                    size: 32
                                })), ...i])
                            }
                        }(d);
                        throw new i.dh(n.type, {
                            docsPath: "/docs/contract/encodeAbiParameters"
                        })
                    }({
                        param: t[e],
                        value: n[e]
                    }));
                    return d
                }({
                    params: e,
                    values: t
                }));
                return 0 === n.length ? "0x" : n
            }

            function h(e) {
                let t = 0;
                for (let n = 0; n < e.length; n++) {
                    let {
                        dynamic: i,
                        encoded: r
                    } = e[n];
                    i ? t += 32 : t += (0, c.d)(r)
                }
                let n = [],
                    i = [],
                    r = 0;
                for (let a = 0; a < e.length; a++) {
                    let {
                        dynamic: o,
                        encoded: s
                    } = e[a];
                    o ? (n.push((0, l.eC)(t + r, {
                        size: 32
                    })), i.push(s), r += (0, c.d)(s)) : n.push(s)
                }
                return (0, o.zo)([...n, ...i])
            }

            function f(e) {
                let t = e.match(/^(.*)\[(\d+)?\]$/);
                return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0
            }
        },
        3551: function(e, t, n) {
            n.d(t, {
                R: function() {
                    return l
                }
            });
            var i = n(45581),
                r = n(3556),
                a = n(9226),
                o = n(8580),
                s = n(67705),
                c = n(92261);
            let u = "/docs/contract/encodeFunctionData";

            function l(e) {
                let {
                    abi: t,
                    args: n,
                    functionName: l
                } = e, d = t[0];
                if (l) {
                    let e = (0, c.mE)({
                        abi: t,
                        args: n,
                        name: l
                    });
                    if (!e) throw new i.xL(l, {
                        docsPath: u
                    });
                    d = e
                }
                if ("function" !== d.type) throw new i.xL(void 0, {
                    docsPath: u
                });
                let h = (0, s.t)(d),
                    f = (0, a.C)(h),
                    p = "inputs" in d && d.inputs ? (0, o.E)(d.inputs, null != n ? n : []) : void 0;
                return (0, r.SM)([f, null != p ? p : "0x"])
            }
        },
        67705: function(e, t, n) {
            n.d(t, {
                h: function() {
                    return a
                },
                t: function() {
                    return r
                }
            });
            var i = n(45581);

            function r(e) {
                let {
                    includeName: t = !1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if ("function" !== e.type && "event" !== e.type && "error" !== e.type) throw new i.wM(e.type);
                return "".concat(e.name, "(").concat(a(e.inputs, {
                    includeName: t
                }), ")")
            }

            function a(e) {
                let {
                    includeName: t = !1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return e ? e.map(e => (function(e, t) {
                    let {
                        includeName: n
                    } = t;
                    return e.type.startsWith("tuple") ? "(".concat(a(e.components, {
                        includeName: n
                    }), ")").concat(e.type.slice(5)) : e.type + (n && e.name ? " ".concat(e.name) : "")
                })(e, {
                    includeName: t
                })).join(t ? ", " : ",") : ""
            }
        },
        92261: function(e, t, n) {
            n.d(t, {
                mE: function() {
                    return c
                }
            });
            var i = n(45581),
                r = n(21230),
                a = n(39361);
            let o = n(84869).r;
            var s = n(9226);

            function c(e) {
                let t;
                let {
                    abi: n,
                    args: c = [],
                    name: u
                } = e, l = (0, r.v)(u, {
                    strict: !1
                }), d = n.filter(e => l ? "function" === e.type ? (0, s.C)(e) === u : "event" === e.type && o(e) === u : "name" in e && e.name === u);
                if (0 !== d.length) {
                    if (1 === d.length) return d[0];
                    for (let e of d)
                        if ("inputs" in e) {
                            if (!c || 0 === c.length) {
                                if (!e.inputs || 0 === e.inputs.length) return e;
                                continue
                            }
                            if (e.inputs && 0 !== e.inputs.length && e.inputs.length === c.length && c.every((t, n) => {
                                    let i = "inputs" in e && e.inputs[n];
                                    return !!i && function e(t, n) {
                                        let i = typeof t,
                                            r = n.type;
                                        switch (r) {
                                            case "address":
                                                return (0, a.U)(t, {
                                                    strict: !1
                                                });
                                            case "bool":
                                                return "boolean" === i;
                                            case "function":
                                            case "string":
                                                return "string" === i;
                                            default:
                                                if ("tuple" === r && "components" in n) return Object.values(n.components).every((n, i) => e(Object.values(t)[i], n));
                                                if (/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r)) return "number" === i || "bigint" === i;
                                                if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r)) return "string" === i || t instanceof Uint8Array;
                                                if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r)) return Array.isArray(t) && t.every(t => e(t, { ...n,
                                                    type: r.replace(/(\[[0-9]{0,}\])$/, "")
                                                }));
                                                return !1
                                        }
                                    }(t, i)
                                })) {
                                if (t && "inputs" in t && t.inputs) {
                                    let n = function e(t, n, i) {
                                        for (let r in t) {
                                            let o = t[r],
                                                s = n[r];
                                            if ("tuple" === o.type && "tuple" === s.type && "components" in o && "components" in s) return e(o.components, s.components, i[r]);
                                            let c = [o.type, s.type];
                                            if (c.includes("address") && c.includes("bytes20") || (c.includes("address") && c.includes("string") || c.includes("address") && c.includes("bytes")) && (0, a.U)(i[r], {
                                                    strict: !1
                                                })) return c
                                        }
                                    }(e.inputs, t.inputs, c);
                                    if (n) throw new i.S4({
                                        abiItem: e,
                                        type: n[0]
                                    }, {
                                        abiItem: t,
                                        type: n[1]
                                    })
                                }
                                t = e
                            }
                        }
                    return t || d[0]
                }
            }
        },
        73621: function(e, t, n) {
            n.d(t, {
                L: function() {
                    return r
                }
            });
            var i = n(55774);

            function r(e) {
                var t;
                let {
                    blockNumber: n,
                    chain: r,
                    contract: a
                } = e, o = null == r ? void 0 : null === (t = r.contracts) || void 0 === t ? void 0 : t[a];
                if (!o) throw new i.mm({
                    chain: r,
                    contract: {
                        name: a
                    }
                });
                if (n && o.blockCreated && o.blockCreated > n) throw new i.mm({
                    blockNumber: n,
                    chain: r,
                    contract: {
                        name: a,
                        blockCreated: o.blockCreated
                    }
                });
                return o.address
            }
        },
        3556: function(e, t, n) {
            function i(e) {
                return "string" == typeof e[0] ? r(e) : function(e) {
                    let t = 0;
                    for (let n of e) t += n.length;
                    let n = new Uint8Array(t),
                        i = 0;
                    for (let t of e) n.set(t, i), i += t.length;
                    return n
                }(e)
            }

            function r(e) {
                return "0x".concat(e.reduce((e, t) => e + t.replace("0x", ""), ""))
            }
            n.d(t, {
                SM: function() {
                    return r
                },
                zo: function() {
                    return i
                }
            })
        },
        23090: function(e, t, n) {
            n.d(t, {
                T4: function() {
                    return u
                },
                tP: function() {
                    return o
                }
            });
            var i = n(11758),
                r = n(21230),
                a = n(95305);

            function o(e, t, n) {
                let {
                    strict: i
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return (0, r.v)(e, {
                    strict: !1
                }) ? function(e, t, n) {
                    let {
                        strict: i
                    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    s(e, t);
                    let r = "0x".concat(e.replace("0x", "").slice((null != t ? t : 0) * 2, (null != n ? n : e.length) * 2));
                    return i && c(r, t, n), r
                }(e, t, n, {
                    strict: i
                }) : u(e, t, n, {
                    strict: i
                })
            }

            function s(e, t) {
                if ("number" == typeof t && t > 0 && t > (0, a.d)(e) - 1) throw new i.mV({
                    offset: t,
                    position: "start",
                    size: (0, a.d)(e)
                })
            }

            function c(e, t, n) {
                if ("number" == typeof t && "number" == typeof n && (0, a.d)(e) !== n - t) throw new i.mV({
                    offset: n,
                    position: "end",
                    size: (0, a.d)(e)
                })
            }

            function u(e, t, n) {
                let {
                    strict: i
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                s(e, t);
                let r = e.slice(t, n);
                return i && c(r, t, n), r
            }
        },
        95094: function(e, t, n) {
            n.d(t, {
                S: function() {
                    return s
                }
            });
            var i = n(45581),
                r = n(80230),
                a = n(47115),
                o = n(24473);

            function s(e, t) {
                let {
                    abi: n,
                    address: s,
                    args: c,
                    docsPath: u,
                    functionName: l,
                    sender: d
                } = t, {
                    code: h,
                    data: f,
                    message: p,
                    shortMessage: b
                } = e instanceof a.VQ ? e : e instanceof r.G ? e.walk(e => "data" in e) || e.walk() : {}, m = e instanceof i.wb ? new a.Dk({
                    functionName: l
                }) : [3, o.XS.code].includes(h) && (f || p || b) ? new a.Lu({
                    abi: n,
                    data: "object" == typeof f ? f.data : f,
                    functionName: l,
                    message: null != b ? b : p
                }) : e;
                return new a.uq(m, {
                    abi: n,
                    args: c,
                    contractAddress: s,
                    docsPath: u,
                    functionName: l,
                    sender: d
                })
            }
        },
        85069: function(e, t, n) {
            n.d(t, {
                k: function() {
                    return a
                }
            });
            var i = n(80230),
                r = n(26463);

            function a(e, t) {
                let n = (e.details || "").toLowerCase(),
                    a = e instanceof i.G ? e.walk(e => e.code === r.M_.code) : e;
                return a instanceof i.G ? new r.M_({
                    cause: e,
                    message: a.details
                }) : r.M_.nodeMessage.test(n) ? new r.M_({
                    cause: e,
                    message: e.details
                }) : r.Hh.nodeMessage.test(n) ? new r.Hh({
                    cause: e,
                    maxFeePerGas: null == t ? void 0 : t.maxFeePerGas
                }) : r.G$.nodeMessage.test(n) ? new r.G$({
                    cause: e,
                    maxFeePerGas: null == t ? void 0 : t.maxFeePerGas
                }) : r.ZI.nodeMessage.test(n) ? new r.ZI({
                    cause: e,
                    nonce: null == t ? void 0 : t.nonce
                }) : r.vU.nodeMessage.test(n) ? new r.vU({
                    cause: e,
                    nonce: null == t ? void 0 : t.nonce
                }) : r.se.nodeMessage.test(n) ? new r.se({
                    cause: e,
                    nonce: null == t ? void 0 : t.nonce
                }) : r.C_.nodeMessage.test(n) ? new r.C_({
                    cause: e
                }) : r.WF.nodeMessage.test(n) ? new r.WF({
                    cause: e,
                    gas: null == t ? void 0 : t.gas
                }) : r.dR.nodeMessage.test(n) ? new r.dR({
                    cause: e,
                    gas: null == t ? void 0 : t.gas
                }) : r.pZ.nodeMessage.test(n) ? new r.pZ({
                    cause: e
                }) : r.cs.nodeMessage.test(n) ? new r.cs({
                    cause: e,
                    maxFeePerGas: null == t ? void 0 : t.maxFeePerGas,
                    maxPriorityFeePerGas: null == t ? void 0 : t.maxPriorityFeePerGas
                }) : new r.cj({
                    cause: e
                })
            }
        },
        67306: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return i
                }
            });

            function i(e, t) {
                let {
                    format: n
                } = t;
                if (!n) return {};
                let i = {};
                return ! function t(n) {
                    for (let r of Object.keys(n)) r in e && (i[r] = e[r]), n[r] && "object" == typeof n[r] && !Array.isArray(n[r]) && t(n[r])
                }(n(e || {})), i
            }
        },
        20662: function(e, t, n) {
            n.d(t, {
                tG: function() {
                    return a
                }
            });
            var i = n(15578);
            let r = {
                legacy: "0x0",
                eip2930: "0x1",
                eip1559: "0x2",
                eip4844: "0x3"
            };

            function a(e) {
                return { ...e,
                    gas: void 0 !== e.gas ? (0, i.eC)(e.gas) : void 0,
                    gasPrice: void 0 !== e.gasPrice ? (0, i.eC)(e.gasPrice) : void 0,
                    maxFeePerGas: void 0 !== e.maxFeePerGas ? (0, i.eC)(e.maxFeePerGas) : void 0,
                    maxPriorityFeePerGas: void 0 !== e.maxPriorityFeePerGas ? (0, i.eC)(e.maxPriorityFeePerGas) : void 0,
                    nonce: void 0 !== e.nonce ? (0, i.eC)(e.nonce) : void 0,
                    type: void 0 !== e.type ? r[e.type] : void 0,
                    value: void 0 !== e.value ? (0, i.eC)(e.value) : void 0
                }
            }
        },
        31935: function(e, t, n) {
            n.d(t, {
                s: function() {
                    return i
                }
            });

            function i(e, t, n) {
                return i => {
                    var r, a;
                    return null !== (a = null === (r = e[t.name || n]) || void 0 === r ? void 0 : r.call(e, i)) && void 0 !== a ? a : t(e, i)
                }
            }
        },
        9226: function(e, t, n) {
            n.d(t, {
                C: function() {
                    return a
                }
            });
            var i = n(23090),
                r = n(84869);
            let a = e => (0, i.tP)((0, r.r)(e), 0, 4)
        },
        84869: function(e, t, n) {
            n.d(t, {
                r: function() {
                    return l
                }
            });
            var i = n(73596),
                r = n(95839);
            let a = e => (0, r.w)((0, i.O0)(e)),
                o = RegExp("^tuple(?<array>(\\[(\\d*)\\])*)$");

            function s(e) {
                let t = "",
                    n = e.length;
                for (let i = 0; i < n; i++) t += function e(t) {
                    let n = t.type;
                    if (o.test(t.type) && "components" in t) {
                        var i;
                        n = "(";
                        let r = t.components.length;
                        for (let i = 0; i < r; i++) n += e(t.components[i]), i < r - 1 && (n += ", ");
                        let a = function(e, t) {
                            let n = e.exec(t);
                            return null == n ? void 0 : n.groups
                        }(o, t.type);
                        return n += ")".concat(null !== (i = null == a ? void 0 : a.array) && void 0 !== i ? i : ""), e({ ...t,
                            type: n
                        })
                    }
                    return ("indexed" in t && t.indexed && (n = "".concat(n, " indexed")), t.name) ? "".concat(n, " ").concat(t.name) : n
                }(e[i]), i !== n - 1 && (t += ", ");
                return t
            }
            var c = n(80230);
            let u = e => {
                var t;
                return function(e) {
                    let t = !0,
                        n = "",
                        i = 0,
                        r = "",
                        a = !1;
                    for (let o = 0; o < e.length; o++) {
                        let s = e[o];
                        if (["(", ")", ","].includes(s) && (t = !0), "(" === s && i++, ")" === s && i--, t) {
                            if (0 === i) {
                                if (" " === s && ["event", "function", ""].includes(r)) r = "";
                                else if (r += s, ")" === s) {
                                    a = !0;
                                    break
                                }
                                continue
                            }
                            if (" " === s) {
                                "," !== e[o - 1] && "," !== n && ",(" !== n && (n = "", t = !1);
                                continue
                            }
                            r += s, n += s
                        }
                    }
                    if (!a) throw new c.G("Unable to normalize signature.");
                    return r
                }("string" == typeof e ? e : "function" === (t = e).type ? "function ".concat(t.name, "(").concat(s(t.inputs), ")").concat(t.stateMutability && "nonpayable" !== t.stateMutability ? " ".concat(t.stateMutability) : "").concat(t.outputs.length ? " returns (".concat(s(t.outputs), ")") : "") : "event" === t.type ? "event ".concat(t.name, "(").concat(s(t.inputs), ")") : "error" === t.type ? "error ".concat(t.name, "(").concat(s(t.inputs), ")") : "constructor" === t.type ? "constructor(".concat(s(t.inputs), ")").concat("payable" === t.stateMutability ? " payable" : "") : "fallback" === t.type ? "fallback()" : "receive() external payable")
            };

            function l(e) {
                return a(u(e))
            }
        },
        15337: function(e, t, n) {
            n.d(t, {
                F: function() {
                    return c
                }
            });
            var i = n(79561),
                r = n(44898),
                a = n(26463),
                o = n(10289),
                s = n(39361);

            function c(e) {
                let {
                    account: t,
                    gasPrice: n,
                    maxFeePerGas: c,
                    maxPriorityFeePerGas: u,
                    to: l
                } = e, d = t ? (0, i.T)(t) : void 0;
                if (d && !(0, s.U)(d.address)) throw new r.b({
                    address: d.address
                });
                if (l && !(0, s.U)(l)) throw new r.b({
                    address: l
                });
                if (void 0 !== n && (void 0 !== c || void 0 !== u)) throw new o.xY;
                if (c && c > 2 n ** 256 n - 1 n) throw new a.Hh({
                    maxFeePerGas: c
                });
                if (u && c && u > c) throw new a.cs({
                    maxFeePerGas: c,
                    maxPriorityFeePerGas: u
                })
            }
        },
        52926: function(e, t, n) {
            n.d(t, {
                d: function() {
                    return a
                }
            });
            var i = n(4817),
                r = n(60989);

            function a(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "wei";
                return (0, r.b)(e, i.ez[t])
            }
        },
        98206: function(e, t, n) {
            n.d(t, {
                o: function() {
                    return a
                }
            });
            var i = n(4817),
                r = n(60989);

            function a(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "wei";
                return (0, r.b)(e, i.Zn[t])
            }
        },
        60989: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return i
                }
            });

            function i(e, t) {
                let n = e.toString(),
                    i = n.startsWith("-");
                i && (n = n.slice(1));
                let [r, a] = [(n = n.padStart(t, "0")).slice(0, n.length - t), n.slice(n.length - t)];
                return a = a.replace(/(0+)$/, ""), "".concat(i ? "-" : "").concat(r || "0").concat(a ? ".".concat(a) : "")
            }
        },
        98053: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return G
                }
            });
            var i = n(47115),
                r = n(55936),
                a = n(71264),
                o = n(60989),
                s = n(15578);
            async function c(e, t) {
                let {
                    address: n,
                    blockNumber: i,
                    blockTag: r = "latest"
                } = t, a = i ? (0, s.eC)(i) : void 0;
                return BigInt(await e.request({
                    method: "eth_getBalance",
                    params: [n, a || r]
                }))
            }
            var u = n(37225),
                l = n(4817);

            function d(e) {
                return "number" == typeof e ? e : "wei" === e ? 0 : Math.abs(l.Bd[e])
            }
            var h = n(10035),
                f = n(45581),
                p = n(80230),
                b = n(27470),
                m = n(3551),
                v = n(73621),
                g = n(95094),
                y = n(31935),
                w = n(96130);
            async function P(e, t) {
                var n;
                let {
                    allowFailure: r = !0,
                    batchSize: a,
                    blockNumber: o,
                    blockTag: s,
                    multicallAddress: c,
                    stateOverride: u
                } = t, l = t.contracts, d = null != a ? a : "object" == typeof(null === (n = e.batch) || void 0 === n ? void 0 : n.multicall) && e.batch.multicall.batchSize || 1024, P = c;
                if (!P) {
                    if (!e.chain) throw Error("client chain not configured. multicallAddress is required.");
                    P = (0, v.L)({
                        blockNumber: o,
                        chain: e.chain,
                        contract: "multicall3"
                    })
                }
                let x = [
                        []
                    ],
                    _ = 0,
                    O = 0;
                for (let e = 0; e < l.length; e++) {
                    let {
                        abi: t,
                        address: n,
                        args: i,
                        functionName: a
                    } = l[e];
                    try {
                        let e = (0, m.R)({
                            abi: t,
                            args: i,
                            functionName: a
                        });
                        O += (e.length - 2) / 2, d > 0 && O > d && x[_].length > 0 && (_++, O = (e.length - 2) / 2, x[_] = []), x[_] = [...x[_], {
                            allowFailure: !0,
                            callData: e,
                            target: n
                        }]
                    } catch (o) {
                        let e = (0, g.S)(o, {
                            abi: t,
                            address: n,
                            args: i,
                            docsPath: "/docs/contract/multicall",
                            functionName: a
                        });
                        if (!r) throw e;
                        x[_] = [...x[_], {
                            allowFailure: !0,
                            callData: "0x",
                            target: n
                        }]
                    }
                }
                let j = await Promise.allSettled(x.map(t => (0, y.s)(e, w.L, "readContract")({
                        abi: h.F8,
                        address: P,
                        args: [t],
                        blockNumber: o,
                        blockTag: s,
                        functionName: "aggregate3",
                        stateOverride: u
                    }))),
                    C = [];
                for (let e = 0; e < j.length; e++) {
                    let t = j[e];
                    if ("rejected" === t.status) {
                        if (!r) throw t.reason;
                        for (let n = 0; n < x[e].length; n++) C.push({
                            status: "failure",
                            error: t.reason,
                            result: void 0
                        });
                        continue
                    }
                    let n = t.value;
                    for (let t = 0; t < n.length; t++) {
                        let {
                            returnData: a,
                            success: o
                        } = n[t], {
                            callData: s
                        } = x[e][t], {
                            abi: c,
                            address: u,
                            functionName: d,
                            args: h
                        } = l[C.length];
                        try {
                            if ("0x" === s) throw new f.wb;
                            if (!o) throw new i.VQ({
                                data: a
                            });
                            let e = (0, b.k)({
                                abi: c,
                                args: h,
                                data: a,
                                functionName: d
                            });
                            C.push(r ? {
                                result: e,
                                status: "success"
                            } : e)
                        } catch (t) {
                            let e = (0, g.S)(t, {
                                abi: c,
                                address: u,
                                args: h,
                                docsPath: "/docs/contract/multicall",
                                functionName: d
                            });
                            if (!r) throw e;
                            C.push({
                                error: e,
                                result: void 0,
                                status: "failure"
                            })
                        }
                    }
                }
                if (C.length !== l.length) throw new p.G("multicall results mismatch");
                return C
            }
            async function x(e, t) {
                let {
                    allowFailure: n = !0,
                    chainId: i,
                    contracts: r,
                    ...a
                } = t, o = e.getClient({
                    chainId: i
                });
                return (0, u.s)(o, P, "multicall")({
                    allowFailure: n,
                    contracts: r,
                    ...a
                })
            }
            var _ = n(31723);
            async function O(e, t) {
                let {
                    allowFailure: n = !0,
                    blockNumber: r,
                    blockTag: a,
                    ...o
                } = t, s = t.contracts;
                try {
                    let t = s.reduce((t, n, i) => {
                            var r;
                            let a = null !== (r = n.chainId) && void 0 !== r ? r : e.state.chainId;
                            return { ...t,
                                [a]: [...t[a] || [], {
                                    contract: n,
                                    index: i
                                }]
                            }
                        }, {}),
                        i = (await Promise.all(Object.entries(t).map(t => {
                            let [i, s] = t;
                            return x(e, { ...o,
                                allowFailure: n,
                                blockNumber: r,
                                blockTag: a,
                                chainId: parseInt(i),
                                contracts: s.map(e => {
                                    let {
                                        contract: t
                                    } = e;
                                    return t
                                })
                            })
                        }))).flat(),
                        c = Object.values(t).flatMap(e => e.map(e => {
                            let {
                                index: t
                            } = e;
                            return t
                        }));
                    return i.reduce((e, t, n) => (e && (e[c[n]] = t), e), [])
                } catch (o) {
                    if (o instanceof i.uq) throw o;
                    let t = () => s.map(t => (0, _.L)(e, { ...t,
                        blockNumber: r,
                        blockTag: a
                    }));
                    if (n) return (await Promise.allSettled(t())).map(e => "fulfilled" === e.status ? {
                        result: e.value,
                        status: "success"
                    } : {
                        error: e.reason,
                        result: void 0,
                        status: "failure"
                    });
                    return await Promise.all(t())
                }
            }
            async function j(e, t) {
                var n;
                let {
                    address: s,
                    blockNumber: l,
                    blockTag: h,
                    chainId: f,
                    token: p,
                    unit: b = "ether"
                } = t;
                if (p) try {
                    return C(e, {
                        balanceAddress: s,
                        chainId: f,
                        symbolType: "string",
                        tokenAddress: p
                    })
                } catch (t) {
                    if (t instanceof i.uq) {
                        let t = await C(e, {
                                balanceAddress: s,
                                chainId: f,
                                symbolType: "bytes32",
                                tokenAddress: p
                            }),
                            n = (0, r.rR)((0, a.f)(t.symbol, {
                                dir: "right"
                            }));
                        return { ...t,
                            symbol: n
                        }
                    }
                    throw t
                }
                let m = e.getClient({
                        chainId: f
                    }),
                    v = (0, u.s)(m, c, "getBalance"),
                    g = await v(l ? {
                        address: s,
                        blockNumber: l
                    } : {
                        address: s,
                        blockTag: h
                    }),
                    y = null !== (n = e.chains.find(e => e.id === f)) && void 0 !== n ? n : m.chain;
                return {
                    decimals: y.nativeCurrency.decimals,
                    formatted: (0, o.b)(g, d(b)),
                    symbol: y.nativeCurrency.symbol,
                    value: g
                }
            }
            async function C(e, t) {
                let {
                    balanceAddress: n,
                    chainId: i,
                    symbolType: r,
                    tokenAddress: a,
                    unit: s
                } = t, c = {
                    abi: [{
                        type: "function",
                        name: "balanceOf",
                        stateMutability: "view",
                        inputs: [{
                            type: "address"
                        }],
                        outputs: [{
                            type: "uint256"
                        }]
                    }, {
                        type: "function",
                        name: "decimals",
                        stateMutability: "view",
                        inputs: [],
                        outputs: [{
                            type: "uint8"
                        }]
                    }, {
                        type: "function",
                        name: "symbol",
                        stateMutability: "view",
                        inputs: [],
                        outputs: [{
                            type: r
                        }]
                    }],
                    address: a
                }, [u, l, h] = await O(e, {
                    allowFailure: !1,
                    contracts: [{ ...c,
                        functionName: "balanceOf",
                        args: [n],
                        chainId: i
                    }, { ...c,
                        functionName: "decimals",
                        chainId: i
                    }, { ...c,
                        functionName: "symbol",
                        chainId: i
                    }]
                }), f = (0, o.b)(null != u ? u : "0", d(null != s ? s : l));
                return {
                    decimals: l,
                    formatted: f,
                    symbol: h,
                    value: u
                }
            }
            var M = n(73054),
                E = n(40352),
                k = n(43089),
                R = n(42887);

            function G() {
                var e, t;
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        address: i,
                        query: r = {}
                    } = n,
                    a = (0, R.Z)(n),
                    o = (0, k.x)(),
                    s = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return {
                            async queryFn(t) {
                                let {
                                    queryKey: n
                                } = t, {
                                    address: i,
                                    scopeKey: r,
                                    ...a
                                } = n[1];
                                if (!i) throw Error("address is required");
                                let o = await j(e, { ...a,
                                    address: i
                                });
                                return null != o ? o : null
                            },
                            queryKey: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                return ["balance", (0, M.O)(e)]
                            }(t)
                        }
                    }(a, { ...n,
                        chainId: null !== (e = n.chainId) && void 0 !== e ? e : o
                    }),
                    c = !!(i && (null === (t = r.enabled) || void 0 === t || t));
                return (0, E.aM)({ ...r,
                    ...s,
                    enabled: c
                })
            }
        },
        43089: function(e, t, n) {
            function i(e) {
                return e.state.chainId
            }
            n.d(t, {
                x: function() {
                    return o
                }
            });
            var r = n(64090),
                a = n(42887);

            function o() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = (0, a.Z)(e);
                return (0, r.useSyncExternalStore)(e => (function(e, t) {
                    let {
                        onChange: n
                    } = t;
                    return e.subscribe(e => e.chainId, n)
                })(t, {
                    onChange: e
                }), () => i(t), () => i(t))
            }
        },
        40352: function(e, t, n) {
            let i;
            n.d(t, {
                if: function() {
                    return ef
                },
                aM: function() {
                    return eh
                }
            });
            var r, a, o, s, c, u, l, d, h, f, p, b, m, v, g, y, w, P, x, _, O, j, C, M = n(32731),
                E = n(48146),
                k = n(5577),
                R = n(94831),
                G = n(37920),
                T = n(46063),
                F = n(45139),
                A = n(79555),
                S = n(44614),
                z = n(90326),
                B = (r = new WeakMap, a = new WeakMap, o = new WeakMap, s = new WeakMap, c = new WeakMap, u = new WeakMap, l = new WeakMap, d = new WeakMap, h = new WeakMap, f = new WeakMap, p = new WeakMap, b = new WeakMap, m = new WeakMap, v = new WeakMap, g = new WeakSet, y = new WeakSet, w = new WeakSet, P = new WeakSet, x = new WeakSet, _ = new WeakSet, O = new WeakSet, j = new WeakSet, C = new WeakSet, class extends S.l {
                    bindMethods() {
                        this.refetch = this.refetch.bind(this)
                    }
                    onSubscribe() {
                        1 === this.listeners.size && ((0, M._)(this, a).addObserver(this), I((0, M._)(this, a), this.options) ? (0, R._)(this, g, W).call(this) : this.updateResult(), (0, R._)(this, x, Z).call(this))
                    }
                    onUnsubscribe() {
                        this.hasListeners() || this.destroy()
                    }
                    shouldFetchOnReconnect() {
                        return U((0, M._)(this, a), this.options, this.options.refetchOnReconnect)
                    }
                    shouldFetchOnWindowFocus() {
                        return U((0, M._)(this, a), this.options, this.options.refetchOnWindowFocus)
                    }
                    destroy() {
                        this.listeners = new Set, (0, R._)(this, _, Q).call(this), (0, R._)(this, O, $).call(this), (0, M._)(this, a).removeObserver(this)
                    }
                    setOptions(e, t) {
                        let n = this.options,
                            i = (0, M._)(this, a);
                        if (this.options = (0, M._)(this, r).defaultQueryOptions(e), void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled) throw Error("Expected enabled to be a boolean");
                        (0, R._)(this, j, H).call(this), (0, T.VS)(this.options, n) || (0, M._)(this, r).getQueryCache().notify({
                            type: "observerOptionsUpdated",
                            query: (0, M._)(this, a),
                            observer: this
                        });
                        let o = this.hasListeners();
                        o && L((0, M._)(this, a), i, this.options, n) && (0, R._)(this, g, W).call(this), this.updateResult(t), o && ((0, M._)(this, a) !== i || this.options.enabled !== n.enabled || this.options.staleTime !== n.staleTime) && (0, R._)(this, y, D).call(this);
                        let s = (0, R._)(this, w, V).call(this);
                        o && ((0, M._)(this, a) !== i || this.options.enabled !== n.enabled || s !== (0, M._)(this, m)) && (0, R._)(this, P, q).call(this, s)
                    }
                    getOptimisticResult(e) {
                        let t = (0, M._)(this, r).getQueryCache().build((0, M._)(this, r), e),
                            n = this.createResult(t, e);
                        return (0, T.VS)(this.getCurrentResult(), n) || ((0, k._)(this, s, n), (0, k._)(this, u, this.options), (0, k._)(this, c, (0, M._)(this, a).state)), n
                    }
                    getCurrentResult() {
                        return (0, M._)(this, s)
                    }
                    trackResult(e, t) {
                        let n = {};
                        return Object.keys(e).forEach(i => {
                            Object.defineProperty(n, i, {
                                configurable: !1,
                                enumerable: !0,
                                get: () => (this.trackProp(i), null == t || t(i), e[i])
                            })
                        }), n
                    }
                    trackProp(e) {
                        (0, M._)(this, v).add(e)
                    }
                    getCurrentQuery() {
                        return (0, M._)(this, a)
                    }
                    refetch() {
                        let { ...e
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return this.fetch({ ...e
                        })
                    }
                    fetchOptimistic(e) {
                        let t = (0, M._)(this, r).defaultQueryOptions(e),
                            n = (0, M._)(this, r).getQueryCache().build((0, M._)(this, r), t);
                        return n.isFetchingOptimistic = !0, n.fetch().then(() => this.createResult(n, t))
                    }
                    fetch(e) {
                        var t;
                        return (0, R._)(this, g, W).call(this, { ...e,
                            cancelRefetch: null === (t = e.cancelRefetch) || void 0 === t || t
                        }).then(() => (this.updateResult(), (0, M._)(this, s)))
                    }
                    createResult(e, t) {
                        let n;
                        let i = (0, M._)(this, a),
                            r = this.options,
                            p = (0, M._)(this, s),
                            b = (0, M._)(this, c),
                            m = (0, M._)(this, u),
                            v = e !== i ? e.state : (0, M._)(this, o),
                            {
                                state: g
                            } = e,
                            {
                                error: y,
                                errorUpdatedAt: w,
                                fetchStatus: P,
                                status: x
                            } = g,
                            _ = !1;
                        if (t._optimisticResults) {
                            let n = this.hasListeners(),
                                a = !n && I(e, t),
                                o = n && L(e, i, t, r);
                            (a || o) && (P = (0, z.Kw)(e.options.networkMode) ? "fetching" : "paused", void 0 === g.data && (x = "pending")), "isRestoring" === t._optimisticResults && (P = "idle")
                        }
                        if (t.select && void 0 !== g.data) {
                            if (p && g.data === (null == b ? void 0 : b.data) && t.select === (0, M._)(this, d)) n = (0, M._)(this, h);
                            else try {
                                (0, k._)(this, d, t.select), n = t.select(g.data), n = (0, T.oE)(null == p ? void 0 : p.data, n, t), (0, k._)(this, h, n), (0, k._)(this, l, null)
                            } catch (e) {
                                (0, k._)(this, l, e)
                            }
                        } else n = g.data;
                        if (void 0 !== t.placeholderData && void 0 === n && "pending" === x) {
                            let e;
                            if ((null == p ? void 0 : p.isPlaceholderData) && t.placeholderData === (null == m ? void 0 : m.placeholderData)) e = p.data;
                            else {
                                var O;
                                if (e = "function" == typeof t.placeholderData ? t.placeholderData(null === (O = (0, M._)(this, f)) || void 0 === O ? void 0 : O.state.data, (0, M._)(this, f)) : t.placeholderData, t.select && void 0 !== e) try {
                                    e = t.select(e), (0, k._)(this, l, null)
                                } catch (e) {
                                    (0, k._)(this, l, e)
                                }
                            }
                            void 0 !== e && (x = "success", n = (0, T.oE)(null == p ? void 0 : p.data, e, t), _ = !0)
                        }(0, M._)(this, l) && (y = (0, M._)(this, l), n = (0, M._)(this, h), w = Date.now(), x = "error");
                        let j = "fetching" === P,
                            C = "pending" === x,
                            E = "error" === x,
                            R = C && j,
                            G = void 0 !== g.data;
                        return {
                            status: x,
                            fetchStatus: P,
                            isPending: C,
                            isSuccess: "success" === x,
                            isError: E,
                            isInitialLoading: R,
                            isLoading: R,
                            data: n,
                            dataUpdatedAt: g.dataUpdatedAt,
                            error: y,
                            errorUpdatedAt: w,
                            failureCount: g.fetchFailureCount,
                            failureReason: g.fetchFailureReason,
                            errorUpdateCount: g.errorUpdateCount,
                            isFetched: g.dataUpdateCount > 0 || g.errorUpdateCount > 0,
                            isFetchedAfterMount: g.dataUpdateCount > v.dataUpdateCount || g.errorUpdateCount > v.errorUpdateCount,
                            isFetching: j,
                            isRefetching: j && !C,
                            isLoadingError: E && !G,
                            isPaused: "paused" === P,
                            isPlaceholderData: _,
                            isRefetchError: E && G,
                            isStale: N(e, t),
                            refetch: this.refetch
                        }
                    }
                    updateResult(e) {
                        let t = (0, M._)(this, s),
                            n = this.createResult((0, M._)(this, a), this.options);
                        if ((0, k._)(this, c, (0, M._)(this, a).state), (0, k._)(this, u, this.options), void 0 !== (0, M._)(this, c).data && (0, k._)(this, f, (0, M._)(this, a)), (0, T.VS)(n, t)) return;
                        (0, k._)(this, s, n);
                        let i = {};
                        (null == e ? void 0 : e.listeners) !== !1 && (() => {
                            if (!t) return !0;
                            let {
                                notifyOnChangeProps: e
                            } = this.options, n = "function" == typeof e ? e() : e;
                            if ("all" === n || !n && !(0, M._)(this, v).size) return !0;
                            let i = new Set(null != n ? n : (0, M._)(this, v));
                            return this.options.throwOnError && i.add("error"), Object.keys((0, M._)(this, s)).some(e => (0, M._)(this, s)[e] !== t[e] && i.has(e))
                        })() && (i.listeners = !0), (0, R._)(this, C, K).call(this, { ...i,
                            ...e
                        })
                    }
                    onQueryUpdate() {
                        this.updateResult(), this.hasListeners() && (0, R._)(this, x, Z).call(this)
                    }
                    constructor(e, t) {
                        super(), (0, G._)(this, g), (0, G._)(this, y), (0, G._)(this, w), (0, G._)(this, P), (0, G._)(this, x), (0, G._)(this, _), (0, G._)(this, O), (0, G._)(this, j), (0, G._)(this, C), (0, E._)(this, r, {
                            writable: !0,
                            value: void 0
                        }), (0, E._)(this, a, {
                            writable: !0,
                            value: void 0
                        }), (0, E._)(this, o, {
                            writable: !0,
                            value: void 0
                        }), (0, E._)(this, s, {
                            writable: !0,
                            value: void 0
                        }), (0, E._)(this, c, {
                            writable: !0,
                            value: void 0
                        }), (0, E._)(this, u, {
                            writable: !0,
                            value: void 0
                        }), (0, E._)(this, l, {
                            writable: !0,
                            value: void 0
                        }), (0, E._)(this, d, {
                            writable: !0,
                            value: void 0
                        }), (0, E._)(this, h, {
                            writable: !0,
                            value: void 0
                        }), (0, E._)(this, f, {
                            writable: !0,
                            value: void 0
                        }), (0, E._)(this, p, {
                            writable: !0,
                            value: void 0
                        }), (0, E._)(this, b, {
                            writable: !0,
                            value: void 0
                        }), (0, E._)(this, m, {
                            writable: !0,
                            value: void 0
                        }), (0, E._)(this, v, {
                            writable: !0,
                            value: void 0
                        }), (0, k._)(this, a, void 0), (0, k._)(this, o, void 0), (0, k._)(this, s, void 0), (0, k._)(this, v, new Set), this.options = t, (0, k._)(this, r, e), (0, k._)(this, l, null), this.bindMethods(), this.setOptions(t)
                    }
                });

            function I(e, t) {
                return !1 !== t.enabled && void 0 === e.state.data && !("error" === e.state.status && !1 === t.retryOnMount) || void 0 !== e.state.data && U(e, t, t.refetchOnMount)
            }

            function U(e, t, n) {
                if (!1 !== t.enabled) {
                    let i = "function" == typeof n ? n(e) : n;
                    return "always" === i || !1 !== i && N(e, t)
                }
                return !1
            }

            function L(e, t, n, i) {
                return !1 !== n.enabled && (e !== t || !1 === i.enabled) && (!n.suspense || "error" !== e.state.status) && N(e, n)
            }

            function N(e, t) {
                return e.isStaleByTime(t.staleTime)
            }

            function W(e) {
                (0, R._)(this, j, H).call(this);
                let t = (0, M._)(this, a).fetch(this.options, e);
                return (null == e ? void 0 : e.throwOnError) || (t = t.catch(T.ZT)), t
            }

            function D() {
                if ((0, R._)(this, _, Q).call(this), T.sk || (0, M._)(this, s).isStale || !(0, T.PN)(this.options.staleTime)) return;
                let e = (0, T.Kp)((0, M._)(this, s).dataUpdatedAt, this.options.staleTime);
                (0, k._)(this, p, setTimeout(() => {
                    (0, M._)(this, s).isStale || this.updateResult()
                }, e + 1))
            }

            function V() {
                var e;
                return null !== (e = "function" == typeof this.options.refetchInterval ? this.options.refetchInterval((0, M._)(this, a)) : this.options.refetchInterval) && void 0 !== e && e
            }

            function q(e) {
                (0, R._)(this, O, $).call(this), (0, k._)(this, m, e), !T.sk && !1 !== this.options.enabled && (0, T.PN)((0, M._)(this, m)) && 0 !== (0, M._)(this, m) && (0, k._)(this, b, setInterval(() => {
                    (this.options.refetchIntervalInBackground || A.j.isFocused()) && (0, R._)(this, g, W).call(this)
                }, (0, M._)(this, m)))
            }

            function Z() {
                (0, R._)(this, y, D).call(this), (0, R._)(this, P, q).call(this, (0, R._)(this, w, V).call(this))
            }

            function Q() {
                (0, M._)(this, p) && (clearTimeout((0, M._)(this, p)), (0, k._)(this, p, void 0))
            }

            function $() {
                (0, M._)(this, b) && (clearInterval((0, M._)(this, b)), (0, k._)(this, b, void 0))
            }

            function H() {
                let e = (0, M._)(this, r).getQueryCache().build((0, M._)(this, r), this.options);
                if (e === (0, M._)(this, a)) return;
                let t = (0, M._)(this, a);
                (0, k._)(this, a, e), (0, k._)(this, o, e.state), this.hasListeners() && (null == t || t.removeObserver(this), e.addObserver(this))
            }

            function K(e) {
                F.V.batch(() => {
                    e.listeners && this.listeners.forEach(e => {
                        e((0, M._)(this, s))
                    }), (0, M._)(this, r).getQueryCache().notify({
                        query: (0, M._)(this, a),
                        type: "observerResultsUpdated"
                    })
                })
            }
            var Y = n(64090);
            n(3827);
            var X = Y.createContext((i = !1, {
                    clearReset: () => {
                        i = !1
                    },
                    reset: () => {
                        i = !0
                    },
                    isReset: () => i
                })),
                J = () => Y.useContext(X),
                ee = n(47082),
                et = Y.createContext(!1),
                en = () => Y.useContext(et);
            et.Provider;
            var ei = n(20826),
                er = (e, t) => {
                    (e.suspense || e.throwOnError) && !t.isReset() && (e.retryOnMount = !1)
                },
                ea = e => {
                    Y.useEffect(() => {
                        e.clearReset()
                    }, [e])
                },
                eo = e => {
                    let {
                        result: t,
                        errorResetBoundary: n,
                        throwOnError: i,
                        query: r
                    } = e;
                    return t.isError && !n.isReset() && !t.isFetching && r && (0, ei.L)(i, [t.error, r])
                },
                es = e => {
                    e.suspense && "number" != typeof e.staleTime && (e.staleTime = 1e3)
                },
                ec = (e, t) => (null == e ? void 0 : e.suspense) && t.isPending,
                eu = (e, t, n) => t.fetchOptimistic(e).catch(() => {
                    n.clearReset()
                }),
                el = n(69022),
                ed = n(73054);

            function eh(e) {
                let t = function(e, t, n) {
                    let i = (0, ee.NL)(n),
                        r = en(),
                        a = J(),
                        o = i.defaultQueryOptions(e);
                    o._optimisticResults = r ? "isRestoring" : "optimistic", es(o), er(o, a), ea(a);
                    let [s] = Y.useState(() => new t(i, o)), c = s.getOptimisticResult(o);
                    if (Y.useSyncExternalStore(Y.useCallback(e => {
                            let t = r ? () => void 0 : s.subscribe(F.V.batchCalls(e));
                            return s.updateResult(), t
                        }, [s, r]), () => s.getCurrentResult(), () => s.getCurrentResult()), Y.useEffect(() => {
                            s.setOptions(o, {
                                listeners: !1
                            })
                        }, [o, s]), ec(o, c)) throw eu(o, s, a);
                    if (eo({
                            result: c,
                            errorResetBoundary: a,
                            throwOnError: o.throwOnError,
                            query: i.getQueryCache().get(o.queryHash)
                        })) throw c.error;
                    return o.notifyOnChangeProps ? c : s.trackResult(c)
                }({ ...e,
                    queryKeyHashFn: ed.k
                }, B, void 0);
                return t.queryKey = e.queryKey, t
            }

            function ef(e, t) {
                return (0, el.v)(e, t) ? e : (0, T.Q$)(e, t)
            }
        }
    }
]);