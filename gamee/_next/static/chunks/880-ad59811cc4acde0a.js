"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [880], {
        39152: function(e, t, r) {
            var n = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== r.g && r.g,
                o = function() {
                    function e() {
                        this.fetch = !1, this.DOMException = n.DOMException
                    }
                    return e.prototype = n, new e
                }();
            (function(e) {
                var t = void 0 !== o && o || "undefined" != typeof self && self || void 0 !== t && t,
                    r = {
                        searchParams: "URLSearchParams" in t,
                        iterable: "Symbol" in t && "iterator" in Symbol,
                        blob: "FileReader" in t && "Blob" in t && function() {
                            try {
                                return new Blob, !0
                            } catch (e) {
                                return !1
                            }
                        }(),
                        formData: "FormData" in t,
                        arrayBuffer: "ArrayBuffer" in t
                    };
                if (r.arrayBuffer) var n = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    i = ArrayBuffer.isView || function(e) {
                        return e && n.indexOf(Object.prototype.toString.call(e)) > -1
                    };

                function a(e) {
                    if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e) throw TypeError('Invalid character in header field name: "' + e + '"');
                    return e.toLowerCase()
                }

                function s(e) {
                    return "string" != typeof e && (e = String(e)), e
                }

                function c(e) {
                    var t = {
                        next: function() {
                            var t = e.shift();
                            return {
                                done: void 0 === t,
                                value: t
                            }
                        }
                    };
                    return r.iterable && (t[Symbol.iterator] = function() {
                        return t
                    }), t
                }

                function u(e) {
                    this.map = {}, e instanceof u ? e.forEach(function(e, t) {
                        this.append(t, e)
                    }, this) : Array.isArray(e) ? e.forEach(function(e) {
                        this.append(e[0], e[1])
                    }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
                        this.append(t, e[t])
                    }, this)
                }

                function f(e) {
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

                function p(e) {
                    var t = new FileReader,
                        r = l(t);
                    return t.readAsArrayBuffer(e), r
                }

                function d(e) {
                    if (e.slice) return e.slice(0);
                    var t = new Uint8Array(e.byteLength);
                    return t.set(new Uint8Array(e)), t.buffer
                }

                function h() {
                    return this.bodyUsed = !1, this._initBody = function(e) {
                        if (this.bodyUsed = this.bodyUsed, this._bodyInit = e, e) {
                            if ("string" == typeof e) this._bodyText = e;
                            else if (r.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                            else if (r.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                            else if (r.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                            else {
                                var t;
                                r.arrayBuffer && r.blob && (t = e) && DataView.prototype.isPrototypeOf(t) ? (this._bodyArrayBuffer = d(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : r.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || i(e)) ? this._bodyArrayBuffer = d(e) : this._bodyText = e = Object.prototype.toString.call(e)
                            }
                        } else this._bodyText = "";
                        !this.headers.get("content-type") && ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, r.blob && (this.blob = function() {
                        var e = f(this);
                        if (e) return e;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (!this._bodyFormData) return Promise.resolve(new Blob([this._bodyText]));
                        throw Error("could not read FormData body as blob")
                    }, this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? f(this) || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer)) : this.blob().then(p)
                    }), this.text = function() {
                        var e, t, r, n = f(this);
                        if (n) return n;
                        if (this._bodyBlob) return e = this._bodyBlob, r = l(t = new FileReader), t.readAsText(e), r;
                        if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                            for (var t = new Uint8Array(e), r = Array(t.length), n = 0; n < t.length; n++) r[n] = String.fromCharCode(t[n]);
                            return r.join("")
                        }(this._bodyArrayBuffer));
                        if (!this._bodyFormData) return Promise.resolve(this._bodyText);
                        throw Error("could not read FormData body as text")
                    }, r.formData && (this.formData = function() {
                        return this.text().then(m)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                u.prototype.append = function(e, t) {
                    e = a(e), t = s(t);
                    var r = this.map[e];
                    this.map[e] = r ? r + ", " + t : t
                }, u.prototype.delete = function(e) {
                    delete this.map[a(e)]
                }, u.prototype.get = function(e) {
                    return e = a(e), this.has(e) ? this.map[e] : null
                }, u.prototype.has = function(e) {
                    return this.map.hasOwnProperty(a(e))
                }, u.prototype.set = function(e, t) {
                    this.map[a(e)] = s(t)
                }, u.prototype.forEach = function(e, t) {
                    for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this)
                }, u.prototype.keys = function() {
                    var e = [];
                    return this.forEach(function(t, r) {
                        e.push(r)
                    }), c(e)
                }, u.prototype.values = function() {
                    var e = [];
                    return this.forEach(function(t) {
                        e.push(t)
                    }), c(e)
                }, u.prototype.entries = function() {
                    var e = [];
                    return this.forEach(function(t, r) {
                        e.push([r, t])
                    }), c(e)
                }, r.iterable && (u.prototype[Symbol.iterator] = u.prototype.entries);
                var y = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function b(e, t) {
                    if (!(this instanceof b)) throw TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                    var r, n, o = (t = t || {}).body;
                    if (e instanceof b) {
                        if (e.bodyUsed) throw TypeError("Already read");
                        this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new u(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, o || null == e._bodyInit || (o = e._bodyInit, e.bodyUsed = !0)
                    } else this.url = String(e);
                    if (this.credentials = t.credentials || this.credentials || "same-origin", (t.headers || !this.headers) && (this.headers = new u(t.headers)), this.method = (n = (r = t.method || this.method || "GET").toUpperCase(), y.indexOf(n) > -1 ? n : r), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o) throw TypeError("Body not allowed for GET or HEAD requests");
                    if (this._initBody(o), ("GET" === this.method || "HEAD" === this.method) && ("no-store" === t.cache || "no-cache" === t.cache)) {
                        var i = /([?&])_=[^&]*/;
                        i.test(this.url) ? this.url = this.url.replace(i, "$1_=" + new Date().getTime()) : this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + new Date().getTime()
                    }
                }

                function m(e) {
                    var t = new FormData;
                    return e.trim().split("&").forEach(function(e) {
                        if (e) {
                            var r = e.split("="),
                                n = r.shift().replace(/\+/g, " "),
                                o = r.join("=").replace(/\+/g, " ");
                            t.append(decodeURIComponent(n), decodeURIComponent(o))
                        }
                    }), t
                }

                function g(e, t) {
                    if (!(this instanceof g)) throw TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                    t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = void 0 === t.statusText ? "" : "" + t.statusText, this.headers = new u(t.headers), this.url = t.url || "", this._initBody(e)
                }
                b.prototype.clone = function() {
                    return new b(this, {
                        body: this._bodyInit
                    })
                }, h.call(b.prototype), h.call(g.prototype), g.prototype.clone = function() {
                    return new g(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new u(this.headers),
                        url: this.url
                    })
                }, g.error = function() {
                    var e = new g(null, {
                        status: 0,
                        statusText: ""
                    });
                    return e.type = "error", e
                };
                var v = [301, 302, 303, 307, 308];
                g.redirect = function(e, t) {
                    if (-1 === v.indexOf(t)) throw RangeError("Invalid status code");
                    return new g(null, {
                        status: t,
                        headers: {
                            location: e
                        }
                    })
                }, e.DOMException = t.DOMException;
                try {
                    new e.DOMException
                } catch (t) {
                    e.DOMException = function(e, t) {
                        this.message = e, this.name = t;
                        var r = Error(e);
                        this.stack = r.stack
                    }, e.DOMException.prototype = Object.create(Error.prototype), e.DOMException.prototype.constructor = e.DOMException
                }

                function w(n, o) {
                    return new Promise(function(i, a) {
                        var c = new b(n, o);
                        if (c.signal && c.signal.aborted) return a(new e.DOMException("Aborted", "AbortError"));
                        var f = new XMLHttpRequest;

                        function l() {
                            f.abort()
                        }
                        f.onload = function() {
                            var e, t, r = {
                                status: f.status,
                                statusText: f.statusText,
                                headers: (e = f.getAllResponseHeaders() || "", t = new u, e.replace(/\r?\n[\t ]+/g, " ").split("\r").map(function(e) {
                                    return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e
                                }).forEach(function(e) {
                                    var r = e.split(":"),
                                        n = r.shift().trim();
                                    if (n) {
                                        var o = r.join(":").trim();
                                        t.append(n, o)
                                    }
                                }), t)
                            };
                            r.url = "responseURL" in f ? f.responseURL : r.headers.get("X-Request-URL");
                            var n = "response" in f ? f.response : f.responseText;
                            setTimeout(function() {
                                i(new g(n, r))
                            }, 0)
                        }, f.onerror = function() {
                            setTimeout(function() {
                                a(TypeError("Network request failed"))
                            }, 0)
                        }, f.ontimeout = function() {
                            setTimeout(function() {
                                a(TypeError("Network request failed"))
                            }, 0)
                        }, f.onabort = function() {
                            setTimeout(function() {
                                a(new e.DOMException("Aborted", "AbortError"))
                            }, 0)
                        }, f.open(c.method, function(e) {
                            try {
                                return "" === e && t.location.href ? t.location.href : e
                            } catch (t) {
                                return e
                            }
                        }(c.url), !0), "include" === c.credentials ? f.withCredentials = !0 : "omit" === c.credentials && (f.withCredentials = !1), "responseType" in f && (r.blob ? f.responseType = "blob" : r.arrayBuffer && c.headers.get("Content-Type") && -1 !== c.headers.get("Content-Type").indexOf("application/octet-stream") && (f.responseType = "arraybuffer")), !o || "object" != typeof o.headers || o.headers instanceof u ? c.headers.forEach(function(e, t) {
                            f.setRequestHeader(t, e)
                        }) : Object.getOwnPropertyNames(o.headers).forEach(function(e) {
                            f.setRequestHeader(e, s(o.headers[e]))
                        }), c.signal && (c.signal.addEventListener("abort", l), f.onreadystatechange = function() {
                            4 === f.readyState && c.signal.removeEventListener("abort", l)
                        }), f.send(void 0 === c._bodyInit ? null : c._bodyInit)
                    })
                }
                w.polyfill = !0, t.fetch || (t.fetch = w, t.Headers = u, t.Request = b, t.Response = g), e.Headers = u, e.Request = b, e.Response = g, e.fetch = w
            })({}), o.fetch.ponyfill = !0, delete o.fetch.polyfill;
            var i = n.fetch ? n : o;
            (t = i.fetch).default = i.fetch, t.fetch = i.fetch, t.Headers = i.Headers, t.Request = i.Request, t.Response = i.Response, e.exports = t
        },
        28943: function(e, t, r) {
            function n(e) {
                this.message = e
            }
            n.prototype = Error(), n.prototype.name = "InvalidCharacterError";
            var o = window.atob && window.atob.bind(window) || function(e) {
                var t = String(e).replace(/=+$/, "");
                if (t.length % 4 == 1) throw new n("'atob' failed: The string to be decoded is not correctly encoded.");
                for (var r, o, i = 0, a = 0, s = ""; o = t.charAt(a++); ~o && (r = i % 4 ? 64 * r + o : o, i++ % 4) && (s += String.fromCharCode(255 & r >> (-2 * i & 6)))) o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);
                return s
            };

            function i(e) {
                this.message = e
            }
            i.prototype = Error(), i.prototype.name = "InvalidTokenError", t.Z = function(e, t) {
                if ("string" != typeof e) throw new i("Invalid token specified");
                var r = !0 === (t = t || {}).header ? 0 : 1;
                try {
                    return JSON.parse(function(e) {
                        var t, r = e.replace(/-/g, "+").replace(/_/g, "/");
                        switch (r.length % 4) {
                            case 0:
                                break;
                            case 2:
                                r += "==";
                                break;
                            case 3:
                                r += "=";
                                break;
                            default:
                                throw "Illegal base64url string!"
                        }
                        try {
                            return t = r, decodeURIComponent(o(t).replace(/(.)/g, function(e, t) {
                                var r = t.charCodeAt(0).toString(16).toUpperCase();
                                return r.length < 2 && (r = "0" + r), "%" + r
                            }))
                        } catch (e) {
                            return o(r)
                        }
                    }(e.split(".")[r]))
                } catch (e) {
                    throw new i("Invalid token specified: " + e.message)
                }
            }
        },
        41231: function(e, t, r) {
            let n;
            r.d(t, {
                Z: function() {
                    return s
                }
            });
            var o = {
                randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
            };
            let i = new Uint8Array(16),
                a = [];
            for (let e = 0; e < 256; ++e) a.push((e + 256).toString(16).slice(1));
            var s = function(e, t, r) {
                if (o.randomUUID && !t && !e) return o.randomUUID();
                let s = (e = e || {}).random || (e.rng || function() {
                    if (!n && !(n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto))) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                    return n(i)
                })();
                if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, t) {
                    r = r || 0;
                    for (let e = 0; e < 16; ++e) t[r + e] = s[e];
                    return t
                }
                return function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return a[e[t + 0]] + a[e[t + 1]] + a[e[t + 2]] + a[e[t + 3]] + "-" + a[e[t + 4]] + a[e[t + 5]] + "-" + a[e[t + 6]] + a[e[t + 7]] + "-" + a[e[t + 8]] + a[e[t + 9]] + "-" + a[e[t + 10]] + a[e[t + 11]] + a[e[t + 12]] + a[e[t + 13]] + a[e[t + 14]] + a[e[t + 15]]
                }(s)
            }
        },
        98955: function(e, t, r) { /*! js-cookie v3.0.5 | MIT */
            function n(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) e[n] = r[n]
                }
                return e
            }
            r.d(t, {
                Z: function() {
                    return o
                }
            });
            var o = function e(t, r) {
                function o(e, o, i) {
                    if ("undefined" != typeof document) {
                        "number" == typeof(i = n({}, r, i)).expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)), i.expires && (i.expires = i.expires.toUTCString()), e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                        var a = "";
                        for (var s in i) i[s] && (a += "; " + s, !0 !== i[s] && (a += "=" + i[s].split(";")[0]));
                        return document.cookie = e + "=" + t.write(o, e) + a
                    }
                }
                return Object.create({
                    set: o,
                    get: function(e) {
                        if ("undefined" != typeof document && (!arguments.length || e)) {
                            for (var r = document.cookie ? document.cookie.split("; ") : [], n = {}, o = 0; o < r.length; o++) {
                                var i = r[o].split("="),
                                    a = i.slice(1).join("=");
                                try {
                                    var s = decodeURIComponent(i[0]);
                                    if (n[s] = t.read(a, s), e === s) break
                                } catch (e) {}
                            }
                            return e ? n[e] : n
                        }
                    },
                    remove: function(e, t) {
                        o(e, "", n({}, t, {
                            expires: -1
                        }))
                    },
                    withAttributes: function(t) {
                        return e(this.converter, n({}, this.attributes, t))
                    },
                    withConverter: function(t) {
                        return e(n({}, this.converter, t), this.attributes)
                    }
                }, {
                    attributes: {
                        value: Object.freeze(r)
                    },
                    converter: {
                        value: Object.freeze(t)
                    }
                })
            }({
                read: function(e) {
                    return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
                },
                write: function(e) {
                    return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
                }
            }, {
                path: "/"
            })
        },
        5251: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return A
                }
            });
            var n = {};
            r.r(n), r.d(n, {
                exclude: function() {
                    return x
                },
                extract: function() {
                    return b
                },
                parse: function() {
                    return m
                },
                parseUrl: function() {
                    return v
                },
                pick: function() {
                    return E
                },
                stringify: function() {
                    return g
                },
                stringifyUrl: function() {
                    return w
                }
            });
            let o = "%[a-f0-9]{2}",
                i = RegExp("(" + o + ")|([^%]+?)", "gi"),
                a = RegExp("(" + o + ")+", "gi");

            function s(e, t) {
                if (!("string" == typeof e && "string" == typeof t)) throw TypeError("Expected the arguments to be of type `string`");
                if ("" === e || "" === t) return [];
                let r = e.indexOf(t);
                return -1 === r ? [] : [e.slice(0, r), e.slice(r + t.length)]
            }
            let c = e => null == e,
                u = e => encodeURIComponent(e).replace(/[!'()*]/g, e => "%".concat(e.charCodeAt(0).toString(16).toUpperCase())),
                f = Symbol("encodeFragmentIdentifier");

            function l(e) {
                if ("string" != typeof e || 1 !== e.length) throw TypeError("arrayFormatSeparator must be single character string")
            }

            function p(e, t) {
                return t.encode ? t.strict ? u(e) : encodeURIComponent(e) : e
            }

            function d(e, t) {
                return t.decode ? function(e) {
                    if ("string" != typeof e) throw TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
                    try {
                        return decodeURIComponent(e)
                    } catch (t) {
                        return function(e) {
                            let t = {
                                    "%FE%FF": "��",
                                    "%FF%FE": "��"
                                },
                                r = a.exec(e);
                            for (; r;) {
                                try {
                                    t[r[0]] = decodeURIComponent(r[0])
                                } catch (n) {
                                    let e = function(e) {
                                        try {
                                            return decodeURIComponent(e)
                                        } catch (r) {
                                            let t = e.match(i) || [];
                                            for (let r = 1; r < t.length; r++) t = (e = (function e(t, r) {
                                                try {
                                                    return [decodeURIComponent(t.join(""))]
                                                } catch (e) {}
                                                if (1 === t.length) return t;
                                                r = r || 1;
                                                let n = t.slice(0, r),
                                                    o = t.slice(r);
                                                return Array.prototype.concat.call([], e(n), e(o))
                                            })(t, r).join("")).match(i) || [];
                                            return e
                                        }
                                    }(r[0]);
                                    e !== r[0] && (t[r[0]] = e)
                                }
                                r = a.exec(e)
                            }
                            for (let r of (t["%C2"] = "�", Object.keys(t))) e = e.replace(RegExp(r, "g"), t[r]);
                            return e
                        }(e)
                    }
                }(e) : e
            }

            function h(e) {
                let t = e.indexOf("#");
                return -1 !== t && (e = e.slice(0, t)), e
            }

            function y(e, t) {
                return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : t.parseBooleans && null !== e && ("true" === e.toLowerCase() || "false" === e.toLowerCase()) && (e = "true" === e.toLowerCase()), e
            }

            function b(e) {
                let t = (e = h(e)).indexOf("?");
                return -1 === t ? "" : e.slice(t + 1)
            }

            function m(e, t) {
                l((t = {
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1,
                    ...t
                }).arrayFormatSeparator);
                let r = function(e) {
                        let t;
                        switch (e.arrayFormat) {
                            case "index":
                                return (e, r, n) => {
                                    if (t = /\[(\d*)]$/.exec(e), e = e.replace(/\[\d*]$/, ""), !t) {
                                        n[e] = r;
                                        return
                                    }
                                    void 0 === n[e] && (n[e] = {}), n[e][t[1]] = r
                                };
                            case "bracket":
                                return (e, r, n) => {
                                    if (t = /(\[])$/.exec(e), e = e.replace(/\[]$/, ""), !t) {
                                        n[e] = r;
                                        return
                                    }
                                    if (void 0 === n[e]) {
                                        n[e] = [r];
                                        return
                                    }
                                    n[e] = [...n[e], r]
                                };
                            case "colon-list-separator":
                                return (e, r, n) => {
                                    if (t = /(:list)$/.exec(e), e = e.replace(/:list$/, ""), !t) {
                                        n[e] = r;
                                        return
                                    }
                                    if (void 0 === n[e]) {
                                        n[e] = [r];
                                        return
                                    }
                                    n[e] = [...n[e], r]
                                };
                            case "comma":
                            case "separator":
                                return (t, r, n) => {
                                    let o = "string" == typeof r && r.includes(e.arrayFormatSeparator),
                                        i = "string" == typeof r && !o && d(r, e).includes(e.arrayFormatSeparator);
                                    r = i ? d(r, e) : r;
                                    let a = o || i ? r.split(e.arrayFormatSeparator).map(t => d(t, e)) : null === r ? r : d(r, e);
                                    n[t] = a
                                };
                            case "bracket-separator":
                                return (t, r, n) => {
                                    let o = /(\[])$/.test(t);
                                    if (t = t.replace(/\[]$/, ""), !o) {
                                        n[t] = r ? d(r, e) : r;
                                        return
                                    }
                                    let i = null === r ? [] : r.split(e.arrayFormatSeparator).map(t => d(t, e));
                                    if (void 0 === n[t]) {
                                        n[t] = i;
                                        return
                                    }
                                    n[t] = [...n[t], ...i]
                                };
                            default:
                                return (e, t, r) => {
                                    if (void 0 === r[e]) {
                                        r[e] = t;
                                        return
                                    }
                                    r[e] = [...[r[e]].flat(), t]
                                }
                        }
                    }(t),
                    n = Object.create(null);
                if ("string" != typeof e || !(e = e.trim().replace(/^[?#&]/, ""))) return n;
                for (let o of e.split("&")) {
                    if ("" === o) continue;
                    let e = t.decode ? o.replace(/\+/g, " ") : o,
                        [i, a] = s(e, "=");
                    void 0 === i && (i = e), a = void 0 === a ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? a : d(a, t), r(d(i, t), a, n)
                }
                for (let [e, r] of Object.entries(n))
                    if ("object" == typeof r && null !== r)
                        for (let [e, n] of Object.entries(r)) r[e] = y(n, t);
                    else n[e] = y(r, t);
                return !1 === t.sort ? n : (!0 === t.sort ? Object.keys(n).sort() : Object.keys(n).sort(t.sort)).reduce((e, t) => {
                    let r = n[t];
                    return r && "object" == typeof r && !Array.isArray(r) ? e[t] = function e(t) {
                        return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort((e, t) => Number(e) - Number(t)).map(e => t[e]) : t
                    }(r) : e[t] = r, e
                }, Object.create(null))
            }

            function g(e, t) {
                if (!e) return "";
                l((t = {
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    ...t
                }).arrayFormatSeparator);
                let r = r => t.skipNull && c(e[r]) || t.skipEmptyString && "" === e[r],
                    n = function(e) {
                        switch (e.arrayFormat) {
                            case "index":
                                return t => (r, n) => {
                                    let o = r.length;
                                    return void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [p(t, e), "[", o, "]"].join("")] : [...r, [p(t, e), "[", p(o, e), "]=", p(n, e)].join("")]
                                };
                            case "bracket":
                                return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [p(t, e), "[]"].join("")] : [...r, [p(t, e), "[]=", p(n, e)].join("")];
                            case "colon-list-separator":
                                return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [p(t, e), ":list="].join("")] : [...r, [p(t, e), ":list=", p(n, e)].join("")];
                            case "comma":
                            case "separator":
                            case "bracket-separator":
                                {
                                    let t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                                    return r => (n, o) => void 0 === o || e.skipNull && null === o || e.skipEmptyString && "" === o ? n : (o = null === o ? "" : o, 0 === n.length) ? [
                                        [p(r, e), t, p(o, e)].join("")
                                    ] : [
                                        [n, p(o, e)].join(e.arrayFormatSeparator)
                                    ]
                                }
                            default:
                                return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, p(t, e)] : [...r, [p(t, e), "=", p(n, e)].join("")]
                        }
                    }(t),
                    o = {};
                for (let [t, n] of Object.entries(e)) r(t) || (o[t] = n);
                let i = Object.keys(o);
                return !1 !== t.sort && i.sort(t.sort), i.map(r => {
                    let o = e[r];
                    return void 0 === o ? "" : null === o ? p(r, t) : Array.isArray(o) ? 0 === o.length && "bracket-separator" === t.arrayFormat ? p(r, t) + "[]" : o.reduce(n(r), []).join("&") : p(r, t) + "=" + p(o, t)
                }).filter(e => e.length > 0).join("&")
            }

            function v(e, t) {
                var r, n;
                t = {
                    decode: !0,
                    ...t
                };
                let [o, i] = s(e, "#");
                return void 0 === o && (o = e), {
                    url: null !== (n = null == o ? void 0 : null === (r = o.split("?")) || void 0 === r ? void 0 : r[0]) && void 0 !== n ? n : "",
                    query: m(b(e), t),
                    ...t && t.parseFragmentIdentifier && i ? {
                        fragmentIdentifier: d(i, t)
                    } : {}
                }
            }

            function w(e, t) {
                t = {
                    encode: !0,
                    strict: !0,
                    [f]: !0,
                    ...t
                };
                let r = h(e.url).split("?")[0] || "",
                    n = g({ ...m(b(e.url), {
                            sort: !1
                        }),
                        ...e.query
                    }, t);
                n && (n = "?".concat(n));
                let o = function(e) {
                    let t = "",
                        r = e.indexOf("#");
                    return -1 !== r && (t = e.slice(r)), t
                }(e.url);
                if (e.fragmentIdentifier) {
                    let n = new URL(r);
                    n.hash = e.fragmentIdentifier, o = t[f] ? n.hash : "#".concat(e.fragmentIdentifier)
                }
                return "".concat(r).concat(n).concat(o)
            }

            function E(e, t, r) {
                let {
                    url: n,
                    query: o,
                    fragmentIdentifier: i
                } = v(e, r = {
                    parseFragmentIdentifier: !0,
                    [f]: !1,
                    ...r
                });
                return w({
                    url: n,
                    query: function(e, t) {
                        let r = {};
                        if (Array.isArray(t))
                            for (let n of t) {
                                let t = Object.getOwnPropertyDescriptor(e, n);
                                (null == t ? void 0 : t.enumerable) && Object.defineProperty(r, n, t)
                            } else
                                for (let n of Reflect.ownKeys(e)) {
                                    let o = Object.getOwnPropertyDescriptor(e, n);
                                    if (o.enumerable) {
                                        let i = e[n];
                                        t(n, i, e) && Object.defineProperty(r, n, o)
                                    }
                                }
                        return r
                    }(o, t),
                    fragmentIdentifier: i
                }, r)
            }

            function x(e, t, r) {
                return E(e, Array.isArray(t) ? e => !t.includes(e) : (e, r) => !t(e, r), r)
            }
            var A = n
        }
    }
]);