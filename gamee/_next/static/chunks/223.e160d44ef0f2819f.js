(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [223], {
        75780: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CoinbaseWalletSDK = void 0;
            let n = r(93615),
                i = r(82490),
                s = r(75384),
                o = r(53755),
                a = r(49852),
                l = r(69534),
                c = r(56568),
                u = r(93713),
                h = r(41533),
                d = r(28051),
                f = r(4937);
            class p {
                makeWeb3Provider() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        r = this.walletExtension;
                    if (r) return this.isCipherProvider(r) || r.setProviderInfo(e, t), !1 === this._reloadOnDisconnect && "function" == typeof r.disableReloadOnDisconnect && r.disableReloadOnDisconnect(), r;
                    let n = this.coinbaseBrowser;
                    if (n) return n;
                    let i = this._relay;
                    if (!i || !this._relayEventManager || !this._storage) throw Error("Relay not initialized, should never happen");
                    return e || i.setConnectDisabled(!0), new a.CoinbaseWalletProvider({
                        relayProvider: () => Promise.resolve(i),
                        relayEventManager: this._relayEventManager,
                        storage: this._storage,
                        jsonRpcUrl: e,
                        chainId: t,
                        qrUrl: this.getQrUrl(),
                        diagnosticLogger: this._diagnosticLogger,
                        overrideIsMetaMask: this._overrideIsMetaMask,
                        overrideIsCoinbaseWallet: this._overrideIsCoinbaseWallet,
                        overrideIsCoinbaseBrowser: this._overrideIsCoinbaseBrowser
                    })
                }
                setAppInfo(e, t) {
                    var r;
                    this._appName = e || "DApp", this._appLogoUrl = t || (0, s.getFavicon)();
                    let n = this.walletExtension;
                    n ? this.isCipherProvider(n) || n.setAppInfo(this._appName, this._appLogoUrl) : null === (r = this._relay) || void 0 === r || r.setAppInfo(this._appName, this._appLogoUrl)
                }
                disconnect() {
                    var e;
                    let t = this === null || void 0 === this ? void 0 : this.walletExtension;
                    t ? t.close() : null === (e = this._relay) || void 0 === e || e.resetAndReload()
                }
                getQrUrl() {
                    var e, t;
                    return null !== (t = null === (e = this._relay) || void 0 === e ? void 0 : e.getQRCodeUrl()) && void 0 !== t ? t : null
                }
                getCoinbaseWalletLogo(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 240;
                    return (0, n.walletLogo)(e, t)
                }
                get walletExtension() {
                    var e;
                    return null !== (e = window.coinbaseWalletExtension) && void 0 !== e ? e : window.walletLinkExtension
                }
                get coinbaseBrowser() {
                    var e, t;
                    try {
                        let r = null !== (e = window.ethereum) && void 0 !== e ? e : null === (t = window.top) || void 0 === t ? void 0 : t.ethereum;
                        if (!r) return;
                        if ("isCoinbaseBrowser" in r && r.isCoinbaseBrowser) return r;
                        return
                    } catch (e) {
                        return
                    }
                }
                isCipherProvider(e) {
                    return "boolean" == typeof e.isCipher && e.isCipher
                }
                constructor(e) {
                    var t, r, n;
                    this._appName = "", this._appLogoUrl = null, this._relay = null, this._relayEventManager = null;
                    let a = e.linkAPIUrl || i.LINK_API_URL;
                    void 0 === e.overrideIsMetaMask ? this._overrideIsMetaMask = !1 : this._overrideIsMetaMask = e.overrideIsMetaMask, this._overrideIsCoinbaseWallet = null === (t = e.overrideIsCoinbaseWallet) || void 0 === t || t, this._overrideIsCoinbaseBrowser = null !== (r = e.overrideIsCoinbaseBrowser) && void 0 !== r && r, this._diagnosticLogger = e.diagnosticLogger, this._reloadOnDisconnect = null === (n = e.reloadOnDisconnect) || void 0 === n || n;
                    let g = new URL(a),
                        m = "".concat(g.protocol, "//").concat(g.host);
                    if (this._storage = new o.ScopedLocalStorage("-walletlink:".concat(m)), this._storage.setItem("version", p.VERSION), this.walletExtension || this.coinbaseBrowser) return;
                    this._relayEventManager = new u.RelayEventManager;
                    let y = (0, s.isMobileWeb)(),
                        v = e.uiConstructor || (e => y ? new c.MobileRelayUI(e) : new h.WalletLinkRelayUI(e)),
                        b = {
                            linkAPIUrl: a,
                            version: f.LIB_VERSION,
                            darkMode: !!e.darkMode,
                            uiConstructor: v,
                            storage: this._storage,
                            relayEventManager: this._relayEventManager,
                            diagnosticLogger: this._diagnosticLogger,
                            reloadOnDisconnect: this._reloadOnDisconnect,
                            enableMobileWalletLink: e.enableMobileWalletLink
                        };
                    if (this._relay = y ? new l.MobileRelay(b) : new d.WalletLinkRelay(b), this.setAppInfo(e.appName, e.appLogoUrl), e.headlessMode) return;
                    this._relay.attachUI()
                }
            }
            t.CoinbaseWalletSDK = p, p.VERSION = f.LIB_VERSION
        },
        93615: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.walletLogo = void 0, t.walletLogo = (e, t) => {
                let r;
                switch (e) {
                    case "standard":
                    default:
                        return r = t, "data:image/svg+xml,%3Csvg width='".concat(t, "' height='").concat(r, "' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E ");
                    case "circle":
                        return r = t, "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='".concat(t, "' height='").concat(r, "' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E");
                    case "text":
                        return r = (.1 * t).toFixed(2), "data:image/svg+xml,%3Csvg width='".concat(t, "' height='").concat(r, "' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E");
                    case "textWithLogo":
                        return r = (.25 * t).toFixed(2), "data:image/svg+xml,%3Csvg width='".concat(t, "' height='").concat(r, "' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E");
                    case "textLight":
                        return r = (.1 * t).toFixed(2), "data:image/svg+xml,%3Csvg width='".concat(t, "' height='").concat(r, "' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E");
                    case "textWithLogoLight":
                        return r = (.25 * t).toFixed(2), "data:image/svg+xml,%3Csvg width='".concat(t, "' height='").concat(r, "' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E")
                }
            }
        },
        82490: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LINK_API_URL = void 0, t.LINK_API_URL = "https://www.walletlink.org"
        },
        86794: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.errorValues = t.standardErrorCodes = void 0, t.standardErrorCodes = {
                rpc: {
                    invalidInput: -32e3,
                    resourceNotFound: -32001,
                    resourceUnavailable: -32002,
                    transactionRejected: -32003,
                    methodNotSupported: -32004,
                    limitExceeded: -32005,
                    parse: -32700,
                    invalidRequest: -32600,
                    methodNotFound: -32601,
                    invalidParams: -32602,
                    internal: -32603
                },
                provider: {
                    userRejectedRequest: 4001,
                    unauthorized: 4100,
                    unsupportedMethod: 4200,
                    disconnected: 4900,
                    chainDisconnected: 4901,
                    unsupportedChain: 4902
                }
            }, t.errorValues = {
                "-32700": {
                    standard: "JSON RPC 2.0",
                    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
                },
                "-32600": {
                    standard: "JSON RPC 2.0",
                    message: "The JSON sent is not a valid Request object."
                },
                "-32601": {
                    standard: "JSON RPC 2.0",
                    message: "The method does not exist / is not available."
                },
                "-32602": {
                    standard: "JSON RPC 2.0",
                    message: "Invalid method parameter(s)."
                },
                "-32603": {
                    standard: "JSON RPC 2.0",
                    message: "Internal JSON-RPC error."
                },
                "-32000": {
                    standard: "EIP-1474",
                    message: "Invalid input."
                },
                "-32001": {
                    standard: "EIP-1474",
                    message: "Resource not found."
                },
                "-32002": {
                    standard: "EIP-1474",
                    message: "Resource unavailable."
                },
                "-32003": {
                    standard: "EIP-1474",
                    message: "Transaction rejected."
                },
                "-32004": {
                    standard: "EIP-1474",
                    message: "Method not supported."
                },
                "-32005": {
                    standard: "EIP-1474",
                    message: "Request limit exceeded."
                },
                4001: {
                    standard: "EIP-1193",
                    message: "User rejected the request."
                },
                4100: {
                    standard: "EIP-1193",
                    message: "The requested account and/or method has not been authorized by the user."
                },
                4200: {
                    standard: "EIP-1193",
                    message: "The requested method is not supported by this Ethereum provider."
                },
                4900: {
                    standard: "EIP-1193",
                    message: "The provider is disconnected from all chains."
                },
                4901: {
                    standard: "EIP-1193",
                    message: "The provider is disconnected from the specified chain."
                },
                4902: {
                    standard: "EIP-3085",
                    message: "Unrecognized chain ID."
                }
            }
        },
        45290: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.standardErrors = void 0;
            let n = r(86794),
                i = r(9225);

            function s(e, t) {
                let [r, n] = a(t);
                return new l(e, r || (0, i.getMessageFromCode)(e), n)
            }

            function o(e, t) {
                let [r, n] = a(t);
                return new c(e, r || (0, i.getMessageFromCode)(e), n)
            }

            function a(e) {
                if (e) {
                    if ("string" == typeof e) return [e];
                    if ("object" == typeof e && !Array.isArray(e)) {
                        let {
                            message: t,
                            data: r
                        } = e;
                        if (t && "string" != typeof t) throw Error("Must specify string message.");
                        return [t || void 0, r]
                    }
                }
                return []
            }
            t.standardErrors = {
                rpc: {
                    parse: e => s(n.standardErrorCodes.rpc.parse, e),
                    invalidRequest: e => s(n.standardErrorCodes.rpc.invalidRequest, e),
                    invalidParams: e => s(n.standardErrorCodes.rpc.invalidParams, e),
                    methodNotFound: e => s(n.standardErrorCodes.rpc.methodNotFound, e),
                    internal: e => s(n.standardErrorCodes.rpc.internal, e),
                    server: e => {
                        if (!e || "object" != typeof e || Array.isArray(e)) throw Error("Ethereum RPC Server errors must provide single object argument.");
                        let {
                            code: t
                        } = e;
                        if (!Number.isInteger(t) || t > -32005 || t < -32099) throw Error('"code" must be an integer such that: -32099 <= code <= -32005');
                        return s(t, e)
                    },
                    invalidInput: e => s(n.standardErrorCodes.rpc.invalidInput, e),
                    resourceNotFound: e => s(n.standardErrorCodes.rpc.resourceNotFound, e),
                    resourceUnavailable: e => s(n.standardErrorCodes.rpc.resourceUnavailable, e),
                    transactionRejected: e => s(n.standardErrorCodes.rpc.transactionRejected, e),
                    methodNotSupported: e => s(n.standardErrorCodes.rpc.methodNotSupported, e),
                    limitExceeded: e => s(n.standardErrorCodes.rpc.limitExceeded, e)
                },
                provider: {
                    userRejectedRequest: e => o(n.standardErrorCodes.provider.userRejectedRequest, e),
                    unauthorized: e => o(n.standardErrorCodes.provider.unauthorized, e),
                    unsupportedMethod: e => o(n.standardErrorCodes.provider.unsupportedMethod, e),
                    disconnected: e => o(n.standardErrorCodes.provider.disconnected, e),
                    chainDisconnected: e => o(n.standardErrorCodes.provider.chainDisconnected, e),
                    unsupportedChain: e => o(n.standardErrorCodes.provider.unsupportedChain, e),
                    custom: e => {
                        if (!e || "object" != typeof e || Array.isArray(e)) throw Error("Ethereum Provider custom errors must provide single object argument.");
                        let {
                            code: t,
                            message: r,
                            data: n
                        } = e;
                        if (!r || "string" != typeof r) throw Error('"message" must be a nonempty string');
                        return new c(t, r, n)
                    }
                }
            };
            class l extends Error {
                constructor(e, t, r) {
                    if (!Number.isInteger(e)) throw Error('"code" must be an integer.');
                    if (!t || "string" != typeof t) throw Error('"message" must be a nonempty string.');
                    super(t), this.code = e, void 0 !== r && (this.data = r)
                }
            }
            class c extends l {
                constructor(e, t, r) {
                    if (!(Number.isInteger(e) && e >= 1e3 && e <= 4999)) throw Error('"code" must be an integer such that: 1000 <= code <= 4999');
                    super(e, t, r)
                }
            }
        },
        86804: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.standardErrors = t.standardErrorCodes = t.serializeError = t.getMessageFromCode = t.getErrorCode = void 0;
            let n = r(86794);
            Object.defineProperty(t, "standardErrorCodes", {
                enumerable: !0,
                get: function() {
                    return n.standardErrorCodes
                }
            });
            let i = r(45290);
            Object.defineProperty(t, "standardErrors", {
                enumerable: !0,
                get: function() {
                    return i.standardErrors
                }
            });
            let s = r(14209);
            Object.defineProperty(t, "serializeError", {
                enumerable: !0,
                get: function() {
                    return s.serializeError
                }
            });
            let o = r(9225);
            Object.defineProperty(t, "getErrorCode", {
                enumerable: !0,
                get: function() {
                    return o.getErrorCode
                }
            }), Object.defineProperty(t, "getMessageFromCode", {
                enumerable: !0,
                get: function() {
                    return o.getMessageFromCode
                }
            })
        },
        14209: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.serializeError = void 0;
            let n = r(12460),
                i = r(4937),
                s = r(86794),
                o = r(9225);
            t.serializeError = function(e, t) {
                let r = (0, o.serialize)("string" == typeof e ? {
                        message: e,
                        code: s.standardErrorCodes.rpc.internal
                    } : (0, n.isErrorResponse)(e) ? Object.assign(Object.assign({}, e), {
                        message: e.errorMessage,
                        code: e.errorCode,
                        data: {
                            method: e.method
                        }
                    }) : e, {
                        shouldIncludeStack: !0
                    }),
                    a = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
                a.searchParams.set("version", i.LIB_VERSION), a.searchParams.set("code", r.code.toString());
                let l = function(e, t) {
                    let r = null == e ? void 0 : e.method;
                    if (r) return r;
                    if (void 0 === t);
                    else if ("string" == typeof t) return t;
                    else if (!Array.isArray(t)) return t.method;
                    else if (t.length > 0) return t[0].method
                }(r.data, t);
                return l && a.searchParams.set("method", l), a.searchParams.set("message", r.message), Object.assign(Object.assign({}, r), {
                    docUrl: a.href
                })
            }
        },
        9225: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.serialize = t.getErrorCode = t.isValidCode = t.getMessageFromCode = t.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
            let n = r(86794),
                i = "Unspecified error message.";

            function s(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
                if (e && Number.isInteger(e)) {
                    let r = e.toString();
                    if (l(n.errorValues, r)) return n.errorValues[r].message;
                    if (e >= -32099 && e <= -32e3) return t.JSON_RPC_SERVER_ERROR_MESSAGE
                }
                return r
            }

            function o(e) {
                if (!Number.isInteger(e)) return !1;
                let t = e.toString();
                return !!(n.errorValues[t] || e >= -32099 && e <= -32e3)
            }

            function a(e) {
                return e && "object" == typeof e && !Array.isArray(e) ? Object.assign({}, e) : e
            }

            function l(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function c(e, t) {
                return "object" == typeof e && null !== e && t in e && "string" == typeof e[t]
            }
            t.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.", t.getMessageFromCode = s, t.isValidCode = o, t.getErrorCode = function(e) {
                var t;
                return "number" == typeof e ? e : "object" == typeof e && null !== e && ("number" == typeof e.code || "number" == typeof e.errorCode) ? null !== (t = e.code) && void 0 !== t ? t : e.errorCode : void 0
            }, t.serialize = function(e) {
                let {
                    shouldIncludeStack: t = !1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = {};
                return e && "object" == typeof e && !Array.isArray(e) && l(e, "code") && o(e.code) ? (r.code = e.code, e.message && "string" == typeof e.message ? (r.message = e.message, l(e, "data") && (r.data = e.data)) : (r.message = s(r.code), r.data = {
                    originalError: a(e)
                })) : (r.code = n.standardErrorCodes.rpc.internal, r.message = c(e, "message") ? e.message : i, r.data = {
                    originalError: a(e)
                }), t && (r.stack = c(e, "stack") ? e.stack : void 0), r
            }
        },
        7900: function(e, t) {
            "use strict";
            var r, n;

            function i() {
                return e => e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ProviderType = t.RegExpString = t.IntNumber = t.BigIntString = t.AddressString = t.HexString = t.OpaqueType = void 0, t.OpaqueType = i, t.HexString = i(), t.AddressString = i(), t.BigIntString = i(), t.IntNumber = function(e) {
                return Math.floor(e)
            }, t.RegExpString = i(), (n = r || (t.ProviderType = r = {})).CoinbaseWallet = "CoinbaseWallet", n.MetaMask = "MetaMask", n.Unselected = ""
        },
        75384: function(e, t, r) {
            "use strict";
            var n, i = r(23663).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isMobileWeb = t.getLocation = t.isInIFrame = t.createQrUrl = t.getFavicon = t.range = t.isBigNumber = t.ensureParsedJSONObject = t.ensureBN = t.ensureRegExpString = t.ensureIntNumber = t.ensureBuffer = t.ensureAddressString = t.ensureEvenLengthHexString = t.ensureHexString = t.isHexString = t.prepend0x = t.strip0x = t.has0xPrefix = t.hexStringFromIntNumber = t.intNumberFromHexString = t.bigIntStringFromBN = t.hexStringFromBuffer = t.hexStringToUint8Array = t.uint8ArrayToHex = t.randomBytesHex = void 0;
            let s = (n = r(34108)) && n.__esModule ? n : {
                    default: n
                },
                o = r(86804),
                a = r(7900),
                l = /^[0-9]*$/,
                c = /^[a-f0-9]*$/;

            function u(e) {
                return [...e].map(e => e.toString(16).padStart(2, "0")).join("")
            }

            function h(e) {
                return e.startsWith("0x") || e.startsWith("0X")
            }

            function d(e) {
                return h(e) ? e.slice(2) : e
            }

            function f(e) {
                return h(e) ? "0x".concat(e.slice(2)) : "0x".concat(e)
            }

            function p(e) {
                if ("string" != typeof e) return !1;
                let t = d(e).toLowerCase();
                return c.test(t)
            }

            function g(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if ("string" == typeof e) {
                    let r = d(e).toLowerCase();
                    if (c.test(r)) return (0, a.HexString)(t ? "0x".concat(r) : r)
                }
                throw o.standardErrors.rpc.invalidParams('"'.concat(String(e), '" is not a hexadecimal string'))
            }

            function m(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = g(e, !1);
                return r.length % 2 == 1 && (r = (0, a.HexString)("0".concat(r))), t ? (0, a.HexString)("0x".concat(r)) : r
            }

            function y(e) {
                if ("number" == typeof e && Number.isInteger(e)) return (0, a.IntNumber)(e);
                if ("string" == typeof e) {
                    if (l.test(e)) return (0, a.IntNumber)(Number(e));
                    if (p(e)) return (0, a.IntNumber)(new s.default(m(e, !1), 16).toNumber())
                }
                throw o.standardErrors.rpc.invalidParams("Not an integer: ".concat(String(e)))
            }

            function v(e) {
                if (null == e || "function" != typeof e.constructor) return !1;
                let {
                    constructor: t
                } = e;
                return "function" == typeof t.config && "number" == typeof t.EUCLID
            }

            function b() {
                try {
                    return null !== window.frameElement
                } catch (e) {
                    return !1
                }
            }
            t.randomBytesHex = function(e) {
                return u(crypto.getRandomValues(new Uint8Array(e)))
            }, t.uint8ArrayToHex = u, t.hexStringToUint8Array = function(e) {
                return new Uint8Array(e.match(/.{1,2}/g).map(e => parseInt(e, 16)))
            }, t.hexStringFromBuffer = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = e.toString("hex");
                return (0, a.HexString)(t ? "0x".concat(r) : r)
            }, t.bigIntStringFromBN = function(e) {
                return (0, a.BigIntString)(e.toString(10))
            }, t.intNumberFromHexString = function(e) {
                return (0, a.IntNumber)(new s.default(m(e, !1), 16).toNumber())
            }, t.hexStringFromIntNumber = function(e) {
                return (0, a.HexString)("0x".concat(new s.default(e).toString(16)))
            }, t.has0xPrefix = h, t.strip0x = d, t.prepend0x = f, t.isHexString = p, t.ensureHexString = g, t.ensureEvenLengthHexString = m, t.ensureAddressString = function(e) {
                if ("string" == typeof e) {
                    let t = d(e).toLowerCase();
                    if (p(t) && 40 === t.length) return (0, a.AddressString)(f(t))
                }
                throw o.standardErrors.rpc.invalidParams("Invalid Ethereum address: ".concat(String(e)))
            }, t.ensureBuffer = function(e) {
                if (i.isBuffer(e)) return e;
                if ("string" == typeof e) {
                    if (p(e)) {
                        let t = m(e, !1);
                        return i.from(t, "hex")
                    }
                    return i.from(e, "utf8")
                }
                throw o.standardErrors.rpc.invalidParams("Not binary data: ".concat(String(e)))
            }, t.ensureIntNumber = y, t.ensureRegExpString = function(e) {
                if (e instanceof RegExp) return (0, a.RegExpString)(e.toString());
                throw o.standardErrors.rpc.invalidParams("Not a RegExp: ".concat(String(e)))
            }, t.ensureBN = function(e) {
                if (null !== e && (s.default.isBN(e) || v(e))) return new s.default(e.toString(10), 10);
                if ("number" == typeof e) return new s.default(y(e));
                if ("string" == typeof e) {
                    if (l.test(e)) return new s.default(e, 10);
                    if (p(e)) return new s.default(m(e, !1), 16)
                }
                throw o.standardErrors.rpc.invalidParams("Not an integer: ".concat(String(e)))
            }, t.ensureParsedJSONObject = function(e) {
                if ("string" == typeof e) return JSON.parse(e);
                if ("object" == typeof e) return e;
                throw o.standardErrors.rpc.invalidParams("Not a JSON string or an object: ".concat(String(e)))
            }, t.isBigNumber = v, t.range = function(e, t) {
                return Array.from({
                    length: t - e
                }, (t, r) => e + r)
            }, t.getFavicon = function() {
                let e = document.querySelector('link[sizes="192x192"]') || document.querySelector('link[sizes="180x180"]') || document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]'),
                    {
                        protocol: t,
                        host: r
                    } = document.location,
                    n = e ? e.getAttribute("href") : null;
                return !n || n.startsWith("javascript:") || n.startsWith("vbscript:") ? null : n.startsWith("http://") || n.startsWith("https://") || n.startsWith("data:") ? n : n.startsWith("//") ? t + n : "".concat(t, "//").concat(r).concat(n)
            }, t.createQrUrl = function(e, t, r, n, i, s) {
                let o = new URLSearchParams({
                    [n ? "parent-id" : "id"]: e,
                    secret: t,
                    server: r,
                    v: i,
                    chainId: s.toString()
                }).toString();
                return "".concat(r, "/#/link?").concat(o)
            }, t.isInIFrame = b, t.getLocation = function() {
                try {
                    if (b() && window.top) return window.top.location;
                    return window.location
                } catch (e) {
                    return window.location
                }
            }, t.isMobileWeb = function() {
                var e;
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(null === (e = null == window ? void 0 : window.navigator) || void 0 === e ? void 0 : e.userAgent)
            }
        },
        20223: function(e, t, r) {
            "use strict";
            let n = r(75780),
                i = r(49852);
            r(75780), r(49852), t.default = n.CoinbaseWalletSDK, window.CoinbaseWalletSDK = n.CoinbaseWalletSDK, window.CoinbaseWalletProvider = i.CoinbaseWalletProvider, window.WalletLink = n.CoinbaseWalletSDK, window.WalletLinkProvider = i.CoinbaseWalletProvider
        },
        44506: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Cipher = void 0;
            let n = r(75384);
            class i {
                async encrypt(e) {
                    let t = this.secret;
                    if (64 !== t.length) throw Error("secret must be 256 bits");
                    let r = crypto.getRandomValues(new Uint8Array(12)),
                        i = await crypto.subtle.importKey("raw", (0, n.hexStringToUint8Array)(t), {
                            name: "aes-gcm"
                        }, !1, ["encrypt", "decrypt"]),
                        s = new TextEncoder,
                        o = await window.crypto.subtle.encrypt({
                            name: "AES-GCM",
                            iv: r
                        }, i, s.encode(e)),
                        a = o.slice(o.byteLength - 16),
                        l = o.slice(0, o.byteLength - 16),
                        c = new Uint8Array(a),
                        u = new Uint8Array(l),
                        h = new Uint8Array([...r, ...c, ...u]);
                    return (0, n.uint8ArrayToHex)(h)
                }
                async decrypt(e) {
                    let t = this.secret;
                    if (64 !== t.length) throw Error("secret must be 256 bits");
                    return new Promise((r, i) => {
                        !async function() {
                            let s = await crypto.subtle.importKey("raw", (0, n.hexStringToUint8Array)(t), {
                                    name: "aes-gcm"
                                }, !1, ["encrypt", "decrypt"]),
                                o = (0, n.hexStringToUint8Array)(e),
                                a = o.slice(0, 12),
                                l = o.slice(12, 28),
                                c = o.slice(28),
                                u = new Uint8Array([...c, ...l]),
                                h = {
                                    name: "AES-GCM",
                                    iv: new Uint8Array(a)
                                };
                            try {
                                let e = await window.crypto.subtle.decrypt(h, s, u),
                                    t = new TextDecoder;
                                r(t.decode(e))
                            } catch (e) {
                                i(e)
                            }
                        }()
                    })
                }
                constructor(e) {
                    this.secret = e
                }
            }
            t.Cipher = i
        },
        53755: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ScopedLocalStorage = void 0;
            class r {
                setItem(e, t) {
                    localStorage.setItem(this.scopedKey(e), t)
                }
                getItem(e) {
                    return localStorage.getItem(this.scopedKey(e))
                }
                removeItem(e) {
                    localStorage.removeItem(this.scopedKey(e))
                }
                clear() {
                    let e = this.scopedKey(""),
                        t = [];
                    for (let r = 0; r < localStorage.length; r++) {
                        let n = localStorage.key(r);
                        "string" == typeof n && n.startsWith(e) && t.push(n)
                    }
                    t.forEach(e => localStorage.removeItem(e))
                }
                scopedKey(e) {
                    return "".concat(this.scope, ":").concat(e)
                }
                constructor(e) {
                    this.scope = e
                }
            }
            t.ScopedLocalStorage = r
        },
        41277: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}'
        },
        21089: function(e, t, r) {
            "use strict";
            var n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.injectCssReset = void 0;
            let i = (n = r(41277)) && n.__esModule ? n : {
                default: n
            };
            t.injectCssReset = function() {
                let e = document.createElement("style");
                e.type = "text/css", e.appendChild(document.createTextNode(i.default)), document.documentElement.appendChild(e)
            }
        },
        49852: function(e, t, r) {
            "use strict";
            var n = r(23663).Buffer,
                i = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CoinbaseWalletProvider = void 0;
            let s = i(r(34108)),
                o = r(32614),
                a = r(86804),
                l = r(75384),
                c = r(69534),
                u = r(29708),
                h = r(97332),
                d = r(12460),
                f = i(r(50092)),
                p = r(81207),
                g = r(44886),
                m = r(65702),
                y = "DefaultChainId",
                v = "DefaultJsonRpcUrl";
            class b extends o.EventEmitter {
                get selectedAddress() {
                    return this._addresses[0] || void 0
                }
                get networkVersion() {
                    return this.getChainId().toString(10)
                }
                get chainId() {
                    return (0, l.prepend0x)(this.getChainId().toString(16))
                }
                get isWalletLink() {
                    return !0
                }
                get isMetaMask() {
                    return this._overrideIsMetaMask
                }
                get host() {
                    return this.jsonRpcUrl
                }
                get connected() {
                    return !0
                }
                isConnected() {
                    return !0
                }
                get jsonRpcUrl() {
                    var e;
                    return null !== (e = this._storage.getItem(v)) && void 0 !== e ? e : this._jsonRpcUrlFromOpts
                }
                set jsonRpcUrl(e) {
                    this._storage.setItem(v, e)
                }
                disableReloadOnDisconnect() {
                    this.reloadOnDisconnect = !1
                }
                setProviderInfo(e, t) {
                    this.isCoinbaseBrowser || (this._chainIdFromOpts = t, this._jsonRpcUrlFromOpts = e), this.updateProviderInfo(this.jsonRpcUrl, this.getChainId())
                }
                updateProviderInfo(e, t) {
                    this.jsonRpcUrl = e;
                    let r = this.getChainId();
                    this._storage.setItem(y, t.toString(10)), (0, l.ensureIntNumber)(t) === r && this.hasMadeFirstChainChangedEmission || (this.emit("chainChanged", this.getChainId()), this.hasMadeFirstChainChangedEmission = !0)
                }
                async watchAsset(e, t, r, n, i, s) {
                    let o = await this.initializeRelay(),
                        a = await o.watchAsset(e, t, r, n, i, null == s ? void 0 : s.toString()).promise;
                    return !(0, d.isErrorResponse)(a) && !!a.result
                }
                async addEthereumChain(e, t, r, n, i, s) {
                    var o, a;
                    if ((0, l.ensureIntNumber)(e) === this.getChainId()) return !1;
                    let c = await this.initializeRelay(),
                        u = c.inlineAddEthereumChain(e.toString());
                    this._isAuthorized() || u || await c.requestEthereumAccounts().promise;
                    let h = await c.addEthereumChain(e.toString(), t, i, r, n, s).promise;
                    return !(0, d.isErrorResponse)(h) && ((null === (o = h.result) || void 0 === o ? void 0 : o.isApproved) === !0 && this.updateProviderInfo(t[0], e), (null === (a = h.result) || void 0 === a ? void 0 : a.isApproved) === !0)
                }
                async switchEthereumChain(e) {
                    let t = await this.initializeRelay(),
                        r = await t.switchEthereumChain(e.toString(10), this.selectedAddress || void 0).promise;
                    if ((0, d.isErrorResponse)(r)) {
                        if (!r.errorCode) return;
                        if (r.errorCode === a.standardErrorCodes.provider.unsupportedChain) throw a.standardErrors.provider.unsupportedChain();
                        throw a.standardErrors.provider.custom({
                            message: r.errorMessage,
                            code: r.errorCode
                        })
                    }
                    let n = r.result;
                    n.isApproved && n.rpcUrl.length > 0 && this.updateProviderInfo(n.rpcUrl, e)
                }
                setAppInfo(e, t) {
                    this.initializeRelay().then(r => r.setAppInfo(e, t))
                }
                async enable() {
                    var e;
                    return (null === (e = this.diagnostic) || void 0 === e || e.log(p.EVENTS.ETH_ACCOUNTS_STATE, {
                        method: "provider::enable",
                        addresses_length: this._addresses.length,
                        sessionIdHash: this._relay ? h.Session.hash(this._relay.session.id) : void 0
                    }), this._isAuthorized()) ? [...this._addresses] : await this.send("eth_requestAccounts")
                }
                async close() {
                    (await this.initializeRelay()).resetAndReload()
                }
                send(e, t) {
                    try {
                        let r = this._send(e, t);
                        if (r instanceof Promise) return r.catch(t => {
                            throw (0, a.serializeError)(t, e)
                        })
                    } catch (t) {
                        throw (0, a.serializeError)(t, e)
                    }
                }
                _send(e, t) {
                    if ("string" == typeof e) {
                        let r = Array.isArray(t) ? t : void 0 !== t ? [t] : [];
                        return this._sendRequestAsync({
                            jsonrpc: "2.0",
                            id: 0,
                            method: e,
                            params: r
                        }).then(e => e.result)
                    }
                    return "function" == typeof t ? this._sendAsync(e, t) : Array.isArray(e) ? e.map(e => this._sendRequest(e)) : this._sendRequest(e)
                }
                async sendAsync(e, t) {
                    try {
                        return this._sendAsync(e, t).catch(t => {
                            throw (0, a.serializeError)(t, e)
                        })
                    } catch (t) {
                        return Promise.reject((0, a.serializeError)(t, e))
                    }
                }
                async _sendAsync(e, t) {
                    if ("function" != typeof t) throw Error("callback is required");
                    if (Array.isArray(e)) {
                        this._sendMultipleRequestsAsync(e).then(e => t(null, e)).catch(e => t(e, null));
                        return
                    }
                    return this._sendRequestAsync(e).then(e => t(null, e)).catch(e => t(e, null))
                }
                async request(e) {
                    try {
                        return this._request(e).catch(t => {
                            throw (0, a.serializeError)(t, e.method)
                        })
                    } catch (t) {
                        return Promise.reject((0, a.serializeError)(t, e.method))
                    }
                }
                async _request(e) {
                    if (!e || "object" != typeof e || Array.isArray(e)) throw a.standardErrors.rpc.invalidRequest({
                        message: "Expected a single, non-array, object argument.",
                        data: e
                    });
                    let {
                        method: t,
                        params: r
                    } = e;
                    if ("string" != typeof t || 0 === t.length) throw a.standardErrors.rpc.invalidRequest({
                        message: "'args.method' must be a non-empty string.",
                        data: e
                    });
                    if (void 0 !== r && !Array.isArray(r) && ("object" != typeof r || null === r)) throw a.standardErrors.rpc.invalidRequest({
                        message: "'args.params' must be an object or array if provided.",
                        data: e
                    });
                    let n = void 0 === r ? [] : r,
                        i = this._relayEventManager.makeRequestId();
                    return (await this._sendRequestAsync({
                        method: t,
                        params: n,
                        jsonrpc: "2.0",
                        id: i
                    })).result
                }
                async scanQRCode(e) {
                    let t = await this.initializeRelay(),
                        r = await t.scanQRCode((0, l.ensureRegExpString)(e)).promise;
                    if ((0, d.isErrorResponse)(r)) throw (0, a.serializeError)(r.errorMessage, "scanQRCode");
                    if ("string" != typeof r.result) throw (0, a.serializeError)("result was not a string", "scanQRCode");
                    return r.result
                }
                async genericRequest(e, t) {
                    let r = await this.initializeRelay(),
                        n = await r.genericRequest(e, t).promise;
                    if ((0, d.isErrorResponse)(n)) throw (0, a.serializeError)(n.errorMessage, "generic");
                    if ("string" != typeof n.result) throw (0, a.serializeError)("result was not a string", "generic");
                    return n.result
                }
                async connectAndSignIn(e) {
                    var t;
                    let r;
                    null === (t = this.diagnostic) || void 0 === t || t.log(p.EVENTS.ETH_ACCOUNTS_STATE, {
                        method: "provider::connectAndSignIn",
                        sessionIdHash: this._relay ? h.Session.hash(this._relay.session.id) : void 0
                    });
                    try {
                        let t = await this.initializeRelay();
                        if (!(t instanceof c.MobileRelay)) throw Error("connectAndSignIn is only supported on mobile");
                        if (r = await t.connectAndSignIn(e).promise, (0, d.isErrorResponse)(r)) throw Error(r.errorMessage)
                    } catch (e) {
                        if ("string" == typeof e.message && e.message.match(/(denied|rejected)/i)) throw a.standardErrors.provider.userRejectedRequest("User denied account authorization");
                        throw e
                    }
                    if (!r.result) throw Error("accounts received is empty");
                    let {
                        accounts: n
                    } = r.result;
                    return this._setAddresses(n), this.isCoinbaseBrowser || await this.switchEthereumChain(this.getChainId()), r.result
                }
                async selectProvider(e) {
                    let t = await this.initializeRelay(),
                        r = await t.selectProvider(e).promise;
                    if ((0, d.isErrorResponse)(r)) throw (0, a.serializeError)(r.errorMessage, "selectProvider");
                    if ("string" != typeof r.result) throw (0, a.serializeError)("result was not a string", "selectProvider");
                    return r.result
                }
                supportsSubscriptions() {
                    return !1
                }
                subscribe() {
                    throw Error("Subscriptions are not supported")
                }
                unsubscribe() {
                    throw Error("Subscriptions are not supported")
                }
                disconnect() {
                    return !0
                }
                _sendRequest(e) {
                    let t = {
                            jsonrpc: "2.0",
                            id: e.id
                        },
                        {
                            method: r
                        } = e;
                    if (t.result = this._handleSynchronousMethods(e), void 0 === t.result) throw Error("Coinbase Wallet does not support calling ".concat(r, " synchronously without ") + "a callback. Please provide a callback parameter to call ".concat(r, " ") + "asynchronously.");
                    return t
                }
                _setAddresses(e, t) {
                    if (!Array.isArray(e)) throw Error("addresses is not an array");
                    let r = e.map(e => (0, l.ensureAddressString)(e));
                    JSON.stringify(r) !== JSON.stringify(this._addresses) && (this._addresses = r, this.emit("accountsChanged", this._addresses), this._storage.setItem(u.LOCAL_STORAGE_ADDRESSES_KEY, r.join(" ")))
                }
                _sendRequestAsync(e) {
                    return new Promise((t, r) => {
                        try {
                            let n = this._handleSynchronousMethods(e);
                            if (void 0 !== n) return t({
                                jsonrpc: "2.0",
                                id: e.id,
                                result: n
                            });
                            let i = this._handleAsynchronousFilterMethods(e);
                            if (void 0 !== i) {
                                i.then(r => t(Object.assign(Object.assign({}, r), {
                                    id: e.id
                                }))).catch(e => r(e));
                                return
                            }
                            let s = this._handleSubscriptionMethods(e);
                            if (void 0 !== s) {
                                s.then(r => t({
                                    jsonrpc: "2.0",
                                    id: e.id,
                                    result: r.result
                                })).catch(e => r(e));
                                return
                            }
                        } catch (e) {
                            return r(e)
                        }
                        this._handleAsynchronousMethods(e).then(r => r && t(Object.assign(Object.assign({}, r), {
                            id: e.id
                        }))).catch(e => r(e))
                    })
                }
                _sendMultipleRequestsAsync(e) {
                    return Promise.all(e.map(e => this._sendRequestAsync(e)))
                }
                _handleSynchronousMethods(e) {
                    let {
                        method: t
                    } = e, r = e.params || [];
                    switch (t) {
                        case "eth_accounts":
                            return this._eth_accounts();
                        case "eth_coinbase":
                            return this._eth_coinbase();
                        case "eth_uninstallFilter":
                            return this._eth_uninstallFilter(r);
                        case "net_version":
                            return this._net_version();
                        case "eth_chainId":
                            return this._eth_chainId();
                        default:
                            return
                    }
                }
                async _handleAsynchronousMethods(e) {
                    let {
                        method: t
                    } = e, r = e.params || [];
                    switch (t) {
                        case "eth_requestAccounts":
                            return this._eth_requestAccounts();
                        case "eth_sign":
                            return this._eth_sign(r);
                        case "eth_ecRecover":
                            return this._eth_ecRecover(r);
                        case "personal_sign":
                            return this._personal_sign(r);
                        case "personal_ecRecover":
                            return this._personal_ecRecover(r);
                        case "eth_signTransaction":
                            return this._eth_signTransaction(r);
                        case "eth_sendRawTransaction":
                            return this._eth_sendRawTransaction(r);
                        case "eth_sendTransaction":
                            return this._eth_sendTransaction(r);
                        case "eth_signTypedData_v1":
                            return this._eth_signTypedData_v1(r);
                        case "eth_signTypedData_v2":
                            return this._throwUnsupportedMethodError();
                        case "eth_signTypedData_v3":
                            return this._eth_signTypedData_v3(r);
                        case "eth_signTypedData_v4":
                        case "eth_signTypedData":
                            return this._eth_signTypedData_v4(r);
                        case "cbWallet_arbitrary":
                            return this._cbwallet_arbitrary(r);
                        case "wallet_addEthereumChain":
                            return this._wallet_addEthereumChain(r);
                        case "wallet_switchEthereumChain":
                            return this._wallet_switchEthereumChain(r);
                        case "wallet_watchAsset":
                            return this._wallet_watchAsset(r)
                    }
                    return (await this.initializeRelay()).makeEthereumJSONRPCRequest(e, this.jsonRpcUrl).catch(t => {
                        var r;
                        throw (t.code === a.standardErrorCodes.rpc.methodNotFound || t.code === a.standardErrorCodes.rpc.methodNotSupported) && (null === (r = this.diagnostic) || void 0 === r || r.log(p.EVENTS.METHOD_NOT_IMPLEMENTED, {
                            method: e.method,
                            sessionIdHash: this._relay ? h.Session.hash(this._relay.session.id) : void 0
                        })), t
                    })
                }
                _handleAsynchronousFilterMethods(e) {
                    let {
                        method: t
                    } = e, r = e.params || [];
                    switch (t) {
                        case "eth_newFilter":
                            return this._eth_newFilter(r);
                        case "eth_newBlockFilter":
                            return this._eth_newBlockFilter();
                        case "eth_newPendingTransactionFilter":
                            return this._eth_newPendingTransactionFilter();
                        case "eth_getFilterChanges":
                            return this._eth_getFilterChanges(r);
                        case "eth_getFilterLogs":
                            return this._eth_getFilterLogs(r)
                    }
                }
                _handleSubscriptionMethods(e) {
                    switch (e.method) {
                        case "eth_subscribe":
                        case "eth_unsubscribe":
                            return this._subscriptionManager.handleRequest(e)
                    }
                }
                _isKnownAddress(e) {
                    try {
                        let t = (0, l.ensureAddressString)(e);
                        return this._addresses.map(e => (0, l.ensureAddressString)(e)).includes(t)
                    } catch (e) {}
                    return !1
                }
                _ensureKnownAddress(e) {
                    var t;
                    if (!this._isKnownAddress(e)) throw null === (t = this.diagnostic) || void 0 === t || t.log(p.EVENTS.UNKNOWN_ADDRESS_ENCOUNTERED), Error("Unknown Ethereum address")
                }
                _prepareTransactionParams(e) {
                    let t = e.from ? (0, l.ensureAddressString)(e.from) : this.selectedAddress;
                    if (!t) throw Error("Ethereum address is unavailable");
                    this._ensureKnownAddress(t);
                    let r = e.to ? (0, l.ensureAddressString)(e.to) : null,
                        i = null != e.value ? (0, l.ensureBN)(e.value) : new s.default(0),
                        o = e.data ? (0, l.ensureBuffer)(e.data) : n.alloc(0),
                        a = null != e.nonce ? (0, l.ensureIntNumber)(e.nonce) : null,
                        c = null != e.gasPrice ? (0, l.ensureBN)(e.gasPrice) : null,
                        u = null != e.maxFeePerGas ? (0, l.ensureBN)(e.maxFeePerGas) : null;
                    return {
                        fromAddress: t,
                        toAddress: r,
                        weiValue: i,
                        data: o,
                        nonce: a,
                        gasPriceInWei: c,
                        maxFeePerGas: u,
                        maxPriorityFeePerGas: null != e.maxPriorityFeePerGas ? (0, l.ensureBN)(e.maxPriorityFeePerGas) : null,
                        gasLimit: null != e.gas ? (0, l.ensureBN)(e.gas) : null,
                        chainId: e.chainId ? (0, l.ensureIntNumber)(e.chainId) : this.getChainId()
                    }
                }
                _isAuthorized() {
                    return this._addresses.length > 0
                }
                _requireAuthorization() {
                    if (!this._isAuthorized()) throw a.standardErrors.provider.unauthorized({})
                }
                _throwUnsupportedMethodError() {
                    throw a.standardErrors.provider.unsupportedMethod({})
                }
                async _signEthereumMessage(e, t, r, n) {
                    this._ensureKnownAddress(t);
                    try {
                        let i = await this.initializeRelay(),
                            s = await i.signEthereumMessage(e, t, r, n).promise;
                        if ((0, d.isErrorResponse)(s)) throw Error(s.errorMessage);
                        return {
                            jsonrpc: "2.0",
                            id: 0,
                            result: s.result
                        }
                    } catch (e) {
                        if ("string" == typeof e.message && e.message.match(/(denied|rejected)/i)) throw a.standardErrors.provider.userRejectedRequest("User denied message signature");
                        throw e
                    }
                }
                async _ethereumAddressFromSignedMessage(e, t, r) {
                    let n = await this.initializeRelay(),
                        i = await n.ethereumAddressFromSignedMessage(e, t, r).promise;
                    if ((0, d.isErrorResponse)(i)) throw Error(i.errorMessage);
                    return {
                        jsonrpc: "2.0",
                        id: 0,
                        result: i.result
                    }
                }
                _eth_accounts() {
                    return [...this._addresses]
                }
                _eth_coinbase() {
                    return this.selectedAddress || null
                }
                _net_version() {
                    return this.getChainId().toString(10)
                }
                _eth_chainId() {
                    return (0, l.hexStringFromIntNumber)(this.getChainId())
                }
                getChainId() {
                    let e = this._storage.getItem(y);
                    if (!e) return (0, l.ensureIntNumber)(this._chainIdFromOpts);
                    let t = parseInt(e, 10);
                    return (0, l.ensureIntNumber)(t)
                }
                async _eth_requestAccounts() {
                    var e;
                    let t;
                    if (null === (e = this.diagnostic) || void 0 === e || e.log(p.EVENTS.ETH_ACCOUNTS_STATE, {
                            method: "provider::_eth_requestAccounts",
                            addresses_length: this._addresses.length,
                            sessionIdHash: this._relay ? h.Session.hash(this._relay.session.id) : void 0
                        }), this._isAuthorized()) return Promise.resolve({
                        jsonrpc: "2.0",
                        id: 0,
                        result: this._addresses
                    });
                    try {
                        let e = await this.initializeRelay();
                        if (t = await e.requestEthereumAccounts().promise, (0, d.isErrorResponse)(t)) throw Error(t.errorMessage)
                    } catch (e) {
                        if ("string" == typeof e.message && e.message.match(/(denied|rejected)/i)) throw a.standardErrors.provider.userRejectedRequest("User denied account authorization");
                        throw e
                    }
                    if (!t.result) throw Error("accounts received is empty");
                    return this._setAddresses(t.result), this.isCoinbaseBrowser || await this.switchEthereumChain(this.getChainId()), {
                        jsonrpc: "2.0",
                        id: 0,
                        result: this._addresses
                    }
                }
                _eth_sign(e) {
                    this._requireAuthorization();
                    let t = (0, l.ensureAddressString)(e[0]),
                        r = (0, l.ensureBuffer)(e[1]);
                    return this._signEthereumMessage(r, t, !1)
                }
                _eth_ecRecover(e) {
                    let t = (0, l.ensureBuffer)(e[0]),
                        r = (0, l.ensureBuffer)(e[1]);
                    return this._ethereumAddressFromSignedMessage(t, r, !1)
                }
                _personal_sign(e) {
                    this._requireAuthorization();
                    let t = (0, l.ensureBuffer)(e[0]),
                        r = (0, l.ensureAddressString)(e[1]);
                    return this._signEthereumMessage(t, r, !0)
                }
                _personal_ecRecover(e) {
                    let t = (0, l.ensureBuffer)(e[0]),
                        r = (0, l.ensureBuffer)(e[1]);
                    return this._ethereumAddressFromSignedMessage(t, r, !0)
                }
                async _eth_signTransaction(e) {
                    this._requireAuthorization();
                    let t = this._prepareTransactionParams(e[0] || {});
                    try {
                        let e = await this.initializeRelay(),
                            r = await e.signEthereumTransaction(t).promise;
                        if ((0, d.isErrorResponse)(r)) throw Error(r.errorMessage);
                        return {
                            jsonrpc: "2.0",
                            id: 0,
                            result: r.result
                        }
                    } catch (e) {
                        if ("string" == typeof e.message && e.message.match(/(denied|rejected)/i)) throw a.standardErrors.provider.userRejectedRequest("User denied transaction signature");
                        throw e
                    }
                }
                async _eth_sendRawTransaction(e) {
                    let t = (0, l.ensureBuffer)(e[0]),
                        r = await this.initializeRelay(),
                        n = await r.submitEthereumTransaction(t, this.getChainId()).promise;
                    if ((0, d.isErrorResponse)(n)) throw Error(n.errorMessage);
                    return {
                        jsonrpc: "2.0",
                        id: 0,
                        result: n.result
                    }
                }
                async _eth_sendTransaction(e) {
                    this._requireAuthorization();
                    let t = this._prepareTransactionParams(e[0] || {});
                    try {
                        let e = await this.initializeRelay(),
                            r = await e.signAndSubmitEthereumTransaction(t).promise;
                        if ((0, d.isErrorResponse)(r)) throw Error(r.errorMessage);
                        return {
                            jsonrpc: "2.0",
                            id: 0,
                            result: r.result
                        }
                    } catch (e) {
                        if ("string" == typeof e.message && e.message.match(/(denied|rejected)/i)) throw a.standardErrors.provider.userRejectedRequest("User denied transaction signature");
                        throw e
                    }
                }
                async _eth_signTypedData_v1(e) {
                    this._requireAuthorization();
                    let t = (0, l.ensureParsedJSONObject)(e[0]),
                        r = (0, l.ensureAddressString)(e[1]);
                    this._ensureKnownAddress(r);
                    let n = f.default.hashForSignTypedDataLegacy({
                            data: t
                        }),
                        i = JSON.stringify(t, null, 2);
                    return this._signEthereumMessage(n, r, !1, i)
                }
                async _eth_signTypedData_v3(e) {
                    this._requireAuthorization();
                    let t = (0, l.ensureAddressString)(e[0]),
                        r = (0, l.ensureParsedJSONObject)(e[1]);
                    this._ensureKnownAddress(t);
                    let n = f.default.hashForSignTypedData_v3({
                            data: r
                        }),
                        i = JSON.stringify(r, null, 2);
                    return this._signEthereumMessage(n, t, !1, i)
                }
                async _eth_signTypedData_v4(e) {
                    this._requireAuthorization();
                    let t = (0, l.ensureAddressString)(e[0]),
                        r = (0, l.ensureParsedJSONObject)(e[1]);
                    this._ensureKnownAddress(t);
                    let n = f.default.hashForSignTypedData_v4({
                            data: r
                        }),
                        i = JSON.stringify(r, null, 2);
                    return this._signEthereumMessage(n, t, !1, i)
                }
                async _cbwallet_arbitrary(e) {
                    let t = e[0],
                        r = e[1];
                    if ("string" != typeof r) throw Error("parameter must be a string");
                    if ("object" != typeof t || null === t) throw Error("parameter must be an object");
                    return {
                        jsonrpc: "2.0",
                        id: 0,
                        result: await this.genericRequest(t, r)
                    }
                }
                async _wallet_addEthereumChain(e) {
                    var t, r, n, i;
                    let s = e[0];
                    if ((null === (t = s.rpcUrls) || void 0 === t ? void 0 : t.length) === 0) return {
                        jsonrpc: "2.0",
                        id: 0,
                        error: {
                            code: 2,
                            message: "please pass in at least 1 rpcUrl"
                        }
                    };
                    if (!s.chainName || "" === s.chainName.trim()) throw a.standardErrors.rpc.invalidParams("chainName is a required field");
                    if (!s.nativeCurrency) throw a.standardErrors.rpc.invalidParams("nativeCurrency is a required field");
                    let o = parseInt(s.chainId, 16);
                    return await this.addEthereumChain(o, null !== (r = s.rpcUrls) && void 0 !== r ? r : [], null !== (n = s.blockExplorerUrls) && void 0 !== n ? n : [], s.chainName, null !== (i = s.iconUrls) && void 0 !== i ? i : [], s.nativeCurrency) ? {
                        jsonrpc: "2.0",
                        id: 0,
                        result: null
                    } : {
                        jsonrpc: "2.0",
                        id: 0,
                        error: {
                            code: 2,
                            message: "unable to add ethereum chain"
                        }
                    }
                }
                async _wallet_switchEthereumChain(e) {
                    let t = e[0];
                    return await this.switchEthereumChain(parseInt(t.chainId, 16)), {
                        jsonrpc: "2.0",
                        id: 0,
                        result: null
                    }
                }
                async _wallet_watchAsset(e) {
                    let t = Array.isArray(e) ? e[0] : e;
                    if (!t.type) throw a.standardErrors.rpc.invalidParams("Type is required");
                    if ((null == t ? void 0 : t.type) !== "ERC20") throw a.standardErrors.rpc.invalidParams("Asset of type '".concat(t.type, "' is not supported"));
                    if (!(null == t ? void 0 : t.options)) throw a.standardErrors.rpc.invalidParams("Options are required");
                    if (!(null == t ? void 0 : t.options.address)) throw a.standardErrors.rpc.invalidParams("Address is required");
                    let r = this.getChainId(),
                        {
                            address: n,
                            symbol: i,
                            image: s,
                            decimals: o
                        } = t.options;
                    return {
                        jsonrpc: "2.0",
                        id: 0,
                        result: await this.watchAsset(t.type, n, i, o, s, r)
                    }
                }
                _eth_uninstallFilter(e) {
                    let t = (0, l.ensureHexString)(e[0]);
                    return this._filterPolyfill.uninstallFilter(t)
                }
                async _eth_newFilter(e) {
                    let t = e[0];
                    return {
                        jsonrpc: "2.0",
                        id: 0,
                        result: await this._filterPolyfill.newFilter(t)
                    }
                }
                async _eth_newBlockFilter() {
                    return {
                        jsonrpc: "2.0",
                        id: 0,
                        result: await this._filterPolyfill.newBlockFilter()
                    }
                }
                async _eth_newPendingTransactionFilter() {
                    return {
                        jsonrpc: "2.0",
                        id: 0,
                        result: await this._filterPolyfill.newPendingTransactionFilter()
                    }
                }
                _eth_getFilterChanges(e) {
                    let t = (0, l.ensureHexString)(e[0]);
                    return this._filterPolyfill.getFilterChanges(t)
                }
                _eth_getFilterLogs(e) {
                    let t = (0, l.ensureHexString)(e[0]);
                    return this._filterPolyfill.getFilterLogs(t)
                }
                initializeRelay() {
                    return this._relay ? Promise.resolve(this._relay) : this._relayProvider().then(e => (e.setAccountsCallback((e, t) => this._setAddresses(e, t)), e.setChainCallback((e, t) => {
                        this.updateProviderInfo(t, parseInt(e, 10))
                    }), e.setDappDefaultChainCallback(this._chainIdFromOpts), this._relay = e, e))
                }
                constructor(e) {
                    var t, r;
                    super(), this._filterPolyfill = new g.FilterPolyfill(this), this._subscriptionManager = new m.SubscriptionManager(this), this._relay = null, this._addresses = [], this.hasMadeFirstChainChangedEmission = !1, this.setProviderInfo = this.setProviderInfo.bind(this), this.updateProviderInfo = this.updateProviderInfo.bind(this), this.getChainId = this.getChainId.bind(this), this.setAppInfo = this.setAppInfo.bind(this), this.enable = this.enable.bind(this), this.close = this.close.bind(this), this.send = this.send.bind(this), this.sendAsync = this.sendAsync.bind(this), this.request = this.request.bind(this), this._setAddresses = this._setAddresses.bind(this), this.scanQRCode = this.scanQRCode.bind(this), this.genericRequest = this.genericRequest.bind(this), this._chainIdFromOpts = e.chainId, this._jsonRpcUrlFromOpts = e.jsonRpcUrl, this._overrideIsMetaMask = e.overrideIsMetaMask, this._relayProvider = e.relayProvider, this._storage = e.storage, this._relayEventManager = e.relayEventManager, this.diagnostic = e.diagnosticLogger, this.reloadOnDisconnect = !0, this.isCoinbaseWallet = null === (t = e.overrideIsCoinbaseWallet) || void 0 === t || t, this.isCoinbaseBrowser = null !== (r = e.overrideIsCoinbaseBrowser) && void 0 !== r && r, this.qrUrl = e.qrUrl;
                    let n = this.getChainId(),
                        i = (0, l.prepend0x)(n.toString(16));
                    this.emit("connect", {
                        chainIdStr: i
                    });
                    let s = this._storage.getItem(u.LOCAL_STORAGE_ADDRESSES_KEY);
                    if (s) {
                        let e = s.split(" ");
                        "" !== e[0] && (this._addresses = e.map(e => (0, l.ensureAddressString)(e)), this.emit("accountsChanged", e))
                    }
                    this._subscriptionManager.events.on("notification", e => {
                        this.emit("message", {
                            type: e.method,
                            data: e.params
                        })
                    }), this._isAuthorized() && this.initializeRelay(), window.addEventListener("message", e => {
                        var t;
                        if (e.origin === location.origin && e.source === window && "walletLinkMessage" === e.data.type && "dappChainSwitched" === e.data.data.action) {
                            let r = e.data.data.chainId,
                                n = null !== (t = e.data.data.jsonRpcUrl) && void 0 !== t ? t : this.jsonRpcUrl;
                            this.updateProviderInfo(n, Number(r))
                        }
                    })
                }
            }
            t.CoinbaseWalletProvider = b
        },
        81207: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.EVENTS = void 0, t.EVENTS = {
                STARTED_CONNECTING: "walletlink_sdk.started.connecting",
                CONNECTED_STATE_CHANGE: "walletlink_sdk.connected",
                DISCONNECTED: "walletlink_sdk.disconnected",
                METADATA_DESTROYED: "walletlink_sdk_metadata_destroyed",
                LINKED: "walletlink_sdk.linked",
                FAILURE: "walletlink_sdk.generic_failure",
                SESSION_CONFIG_RECEIVED: "walletlink_sdk.session_config_event_received",
                ETH_ACCOUNTS_STATE: "walletlink_sdk.eth_accounts_state",
                SESSION_STATE_CHANGE: "walletlink_sdk.session_state_change",
                UNLINKED_ERROR_STATE: "walletlink_sdk.unlinked_error_state",
                SKIPPED_CLEARING_SESSION: "walletlink_sdk.skipped_clearing_session",
                GENERAL_ERROR: "walletlink_sdk.general_error",
                WEB3_REQUEST: "walletlink_sdk.web3.request",
                WEB3_REQUEST_PUBLISHED: "walletlink_sdk.web3.request_published",
                WEB3_RESPONSE: "walletlink_sdk.web3.response",
                METHOD_NOT_IMPLEMENTED: "walletlink_sdk.method_not_implemented",
                UNKNOWN_ADDRESS_ENCOUNTERED: "walletlink_sdk.unknown_address_encountered"
            }
        },
        44886: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.filterFromParam = t.FilterPolyfill = void 0;
            let n = r(7900),
                i = r(75384),
                s = {
                    jsonrpc: "2.0",
                    id: 0
                };
            class o {
                async newFilter(e) {
                    let t = a(e),
                        r = this.makeFilterId(),
                        n = await this.setInitialCursorPosition(r, t.fromBlock);
                    return console.info("Installing new log filter(".concat(r, "):"), t, "initial cursor position:", n), this.logFilters.set(r, t), this.setFilterTimeout(r), (0, i.hexStringFromIntNumber)(r)
                }
                async newBlockFilter() {
                    let e = this.makeFilterId(),
                        t = await this.setInitialCursorPosition(e, "latest");
                    return console.info("Installing new block filter (".concat(e, ") with initial cursor position:"), t), this.blockFilters.add(e), this.setFilterTimeout(e), (0, i.hexStringFromIntNumber)(e)
                }
                async newPendingTransactionFilter() {
                    let e = this.makeFilterId(),
                        t = await this.setInitialCursorPosition(e, "latest");
                    return console.info("Installing new block filter (".concat(e, ") with initial cursor position:"), t), this.pendingTransactionFilters.add(e), this.setFilterTimeout(e), (0, i.hexStringFromIntNumber)(e)
                }
                uninstallFilter(e) {
                    let t = (0, i.intNumberFromHexString)(e);
                    return console.info("Uninstalling filter (".concat(t, ")")), this.deleteFilter(t), !0
                }
                getFilterChanges(e) {
                    let t = (0, i.intNumberFromHexString)(e);
                    return (this.timeouts.has(t) && this.setFilterTimeout(t), this.logFilters.has(t)) ? this.getLogFilterChanges(t) : this.blockFilters.has(t) ? this.getBlockFilterChanges(t) : this.pendingTransactionFilters.has(t) ? this.getPendingTransactionFilterChanges(t) : Promise.resolve(h())
                }
                async getFilterLogs(e) {
                    let t = (0, i.intNumberFromHexString)(e),
                        r = this.logFilters.get(t);
                    return r ? this.sendAsyncPromise(Object.assign(Object.assign({}, s), {
                        method: "eth_getLogs",
                        params: [l(r)]
                    })) : h()
                }
                makeFilterId() {
                    return (0, n.IntNumber)(++this.nextFilterId)
                }
                sendAsyncPromise(e) {
                    return new Promise((t, r) => {
                        this.provider.sendAsync(e, (e, n) => e ? r(e) : Array.isArray(n) || null == n ? r(Error("unexpected response received: ".concat(JSON.stringify(n)))) : void t(n))
                    })
                }
                deleteFilter(e) {
                    console.info("Deleting filter (".concat(e, ")")), this.logFilters.delete(e), this.blockFilters.delete(e), this.pendingTransactionFilters.delete(e), this.cursors.delete(e), this.timeouts.delete(e)
                }
                async getLogFilterChanges(e) {
                    let t = this.logFilters.get(e),
                        r = this.cursors.get(e);
                    if (!r || !t) return h();
                    let o = await this.getCurrentBlockHeight(),
                        a = "latest" === t.toBlock ? o : t.toBlock;
                    if (r > o || r > Number(t.toBlock)) return d();
                    console.info("Fetching logs from ".concat(r, " to ").concat(a, " for filter ").concat(e));
                    let c = await this.sendAsyncPromise(Object.assign(Object.assign({}, s), {
                        method: "eth_getLogs",
                        params: [l(Object.assign(Object.assign({}, t), {
                            fromBlock: r,
                            toBlock: a
                        }))]
                    }));
                    if (Array.isArray(c.result)) {
                        let t = Math.max(...c.result.map(e => (0, i.intNumberFromHexString)(e.blockNumber || "0x0")));
                        if (t && t > r) {
                            let i = (0, n.IntNumber)(t + 1);
                            console.info("Moving cursor position for filter (".concat(e, ") from ").concat(r, " to ").concat(i)), this.cursors.set(e, i)
                        }
                    }
                    return c
                }
                async getBlockFilterChanges(e) {
                    let t = this.cursors.get(e);
                    if (!t) return h();
                    let r = await this.getCurrentBlockHeight();
                    if (t > r) return d();
                    console.info("Fetching blocks from ".concat(t, " to ").concat(r, " for filter (").concat(e, ")"));
                    let o = (await Promise.all((0, i.range)(t, r + 1).map(e => this.getBlockHashByNumber((0, n.IntNumber)(e))))).filter(e => !!e),
                        a = (0, n.IntNumber)(t + o.length);
                    return console.info("Moving cursor position for filter (".concat(e, ") from ").concat(t, " to ").concat(a)), this.cursors.set(e, a), Object.assign(Object.assign({}, s), {
                        result: o
                    })
                }
                async getPendingTransactionFilterChanges(e) {
                    return Promise.resolve(d())
                }
                async setInitialCursorPosition(e, t) {
                    let r = await this.getCurrentBlockHeight(),
                        n = "number" == typeof t && t > r ? t : r;
                    return this.cursors.set(e, n), n
                }
                setFilterTimeout(e) {
                    let t = this.timeouts.get(e);
                    t && window.clearTimeout(t);
                    let r = window.setTimeout(() => {
                        console.info("Filter (".concat(e, ") timed out")), this.deleteFilter(e)
                    }, 3e5);
                    this.timeouts.set(e, r)
                }
                async getCurrentBlockHeight() {
                    let e = new Date;
                    if (e.getTime() - this.lastFetchTimestamp.getTime() > this.REQUEST_THROTTLE_INTERVAL) {
                        this.lastFetchTimestamp = e;
                        let t = await this._getCurrentBlockHeight();
                        this.currentBlockHeight = t, this.resolvers.forEach(e => e(t)), this.resolvers = []
                    }
                    return this.currentBlockHeight ? this.currentBlockHeight : new Promise(e => this.resolvers.push(e))
                }
                async _getCurrentBlockHeight() {
                    let {
                        result: e
                    } = await this.sendAsyncPromise(Object.assign(Object.assign({}, s), {
                        method: "eth_blockNumber",
                        params: []
                    }));
                    return (0, i.intNumberFromHexString)((0, i.ensureHexString)(e))
                }
                async getBlockHashByNumber(e) {
                    let t = await this.sendAsyncPromise(Object.assign(Object.assign({}, s), {
                        method: "eth_getBlockByNumber",
                        params: [(0, i.hexStringFromIntNumber)(e), !1]
                    }));
                    return t.result && "string" == typeof t.result.hash ? (0, i.ensureHexString)(t.result.hash) : null
                }
                constructor(e) {
                    this.logFilters = new Map, this.blockFilters = new Set, this.pendingTransactionFilters = new Set, this.cursors = new Map, this.timeouts = new Map, this.nextFilterId = (0, n.IntNumber)(1), this.REQUEST_THROTTLE_INTERVAL = 1e3, this.lastFetchTimestamp = new Date(0), this.resolvers = [], this.provider = e
                }
            }

            function a(e) {
                return {
                    fromBlock: c(e.fromBlock),
                    toBlock: c(e.toBlock),
                    addresses: void 0 === e.address ? null : Array.isArray(e.address) ? e.address : [e.address],
                    topics: e.topics || []
                }
            }

            function l(e) {
                let t = {
                    fromBlock: u(e.fromBlock),
                    toBlock: u(e.toBlock),
                    topics: e.topics
                };
                return null !== e.addresses && (t.address = e.addresses), t
            }

            function c(e) {
                if (void 0 === e || "latest" === e || "pending" === e) return "latest";
                if ("earliest" === e) return (0, n.IntNumber)(0);
                if ((0, i.isHexString)(e)) return (0, i.intNumberFromHexString)(e);
                throw Error("Invalid block option: ".concat(String(e)))
            }

            function u(e) {
                return "latest" === e ? e : (0, i.hexStringFromIntNumber)(e)
            }

            function h() {
                return Object.assign(Object.assign({}, s), {
                    error: {
                        code: -32e3,
                        message: "filter not found"
                    }
                })
            }

            function d() {
                return Object.assign(Object.assign({}, s), {
                    result: []
                })
            }
            t.FilterPolyfill = o, t.filterFromParam = a
        },
        65702: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SubscriptionManager = void 0;
            let n = r(41735),
                i = r(21498),
                s = () => {};
            class o {
                async handleRequest(e) {
                    let t = {};
                    return await this.subscriptionMiddleware(e, t, s, s), t
                }
                destroy() {
                    this.subscriptionMiddleware.destroy()
                }
                constructor(e) {
                    let {
                        events: t,
                        middleware: r
                    } = i({
                        blockTracker: new n.PollingBlockTracker({
                            provider: e,
                            pollingInterval: 15e3,
                            setSkipCacheFlag: !0
                        }),
                        provider: e
                    });
                    this.events = t, this.subscriptionMiddleware = r
                }
            }
            t.SubscriptionManager = o
        },
        29708: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RelayAbstract = t.APP_VERSION_KEY = t.LOCAL_STORAGE_ADDRESSES_KEY = t.WALLET_USER_NAME_KEY = void 0;
            let n = r(86804);
            t.WALLET_USER_NAME_KEY = "walletUsername", t.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses", t.APP_VERSION_KEY = "AppVersion";
            class i {
                async makeEthereumJSONRPCRequest(e, t) {
                    if (!t) throw Error("Error: No jsonRpcUrl provided");
                    return window.fetch(t, {
                        method: "POST",
                        body: JSON.stringify(e),
                        mode: "cors",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then(e => e.json()).then(t => {
                        if (!t) throw n.standardErrors.rpc.parse({});
                        let {
                            error: r
                        } = t;
                        if (r) throw (0, n.serializeError)(r, e.method);
                        return t
                    })
                }
            }
            t.RelayAbstract = i
        },
        93713: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RelayEventManager = void 0;
            let n = r(75384);
            class i {
                makeRequestId() {
                    this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
                    let e = this._nextRequestId,
                        t = (0, n.prepend0x)(e.toString(16));
                    return this.callbacks.get(t) && this.callbacks.delete(t), e
                }
                constructor() {
                    this._nextRequestId = 0, this.callbacks = new Map
                }
            }
            t.RelayEventManager = i
        },
        97332: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Session = void 0;
            let n = r(90414),
                i = r(75384),
                s = "session:id",
                o = "session:secret",
                a = "session:linked";
            class l {
                static load(e) {
                    let t = e.getItem(s),
                        r = e.getItem(a),
                        n = e.getItem(o);
                    return t && n ? new l(e, t, n, "1" === r) : null
                }
                static hash(e) {
                    return new n.sha256().update(e).digest("hex")
                }
                get id() {
                    return this._id
                }
                get secret() {
                    return this._secret
                }
                get key() {
                    return this._key
                }
                get linked() {
                    return this._linked
                }
                set linked(e) {
                    this._linked = e, this.persistLinked()
                }
                save() {
                    return this._storage.setItem(s, this._id), this._storage.setItem(o, this._secret), this.persistLinked(), this
                }
                persistLinked() {
                    this._storage.setItem(a, this._linked ? "1" : "0")
                }
                constructor(e, t, r, s) {
                    this._storage = e, this._id = t || (0, i.randomBytesHex)(16), this._secret = r || (0, i.randomBytesHex)(32), this._key = new n.sha256().update("".concat(this._id, ", ").concat(this._secret, " WalletLink")).digest("hex"), this._linked = !!s
                }
            }
            t.Session = l
        },
        69534: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MobileRelay = void 0;
            let n = r(75384),
                i = r(28051),
                s = r(56568);
            class o extends i.WalletLinkRelay {
                requestEthereumAccounts() {
                    return this._enableMobileWalletLink ? super.requestEthereumAccounts() : {
                        promise: new Promise(() => {
                            let e = (0, n.getLocation)();
                            e.href = "https://go.cb-w.com/dapp?cb_url=".concat(encodeURIComponent(e.href))
                        }),
                        cancel: () => {}
                    }
                }
                publishWeb3RequestEvent(e, t) {
                    if (super.publishWeb3RequestEvent(e, t), !(this._enableMobileWalletLink && this.ui instanceof s.MobileRelayUI)) return;
                    let r = !1;
                    switch (t.method) {
                        case "requestEthereumAccounts":
                        case "connectAndSignIn":
                            r = !0, this.ui.openCoinbaseWalletDeeplink(this.getQRCodeUrl());
                            break;
                        case "switchEthereumChain":
                            return;
                        default:
                            r = !0, this.ui.openCoinbaseWalletDeeplink()
                    }
                    r && window.addEventListener("blur", () => {
                        window.addEventListener("focus", () => {
                            this.connection.checkUnseenEvents()
                        }, {
                            once: !0
                        })
                    }, {
                        once: !0
                    })
                }
                handleWeb3ResponseMessage(e) {
                    super.handleWeb3ResponseMessage(e), this._enableMobileWalletLink && this.ui instanceof s.MobileRelayUI && this.ui.closeOpenedWindow()
                }
                connectAndSignIn(e) {
                    if (!this._enableMobileWalletLink) throw Error("connectAndSignIn is supported only when enableMobileWalletLink is on");
                    return this.sendRequest({
                        method: "connectAndSignIn",
                        params: {
                            appName: this.appName,
                            appLogoUrl: this.appLogoUrl,
                            domain: window.location.hostname,
                            aud: window.location.href,
                            version: "1",
                            type: "eip4361",
                            nonce: e.nonce,
                            iat: new Date().toISOString(),
                            chainId: "eip155:".concat(this.dappDefaultChain),
                            statement: e.statement,
                            resources: e.resources
                        }
                    })
                }
                constructor(e) {
                    var t;
                    super(e), this._enableMobileWalletLink = null !== (t = e.enableMobileWalletLink) && void 0 !== t && t
                }
            }
            t.MobileRelay = o
        },
        56568: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.MobileRelayUI = void 0;
            let n = r(2702);
            class i {
                attach() {
                    if (this.attached) throw Error("Coinbase Wallet SDK UI is already attached");
                    this.redirectDialog.attach(), this.attached = !0
                }
                setConnected(e) {}
                closeOpenedWindow() {
                    var e;
                    null === (e = this.openedWindow) || void 0 === e || e.close(), this.openedWindow = null
                }
                redirectToCoinbaseWallet(e) {
                    let t = new URL("https://go.cb-w.com/walletlink");
                    t.searchParams.append("redirect_url", window.location.href), e && t.searchParams.append("wl_url", e), this.openedWindow = window.open(t.href, "cbw-opener"), this.openedWindow && setTimeout(() => this.closeOpenedWindow(), 5e3)
                }
                openCoinbaseWalletDeeplink(e) {
                    this.redirectDialog.present({
                        title: "Redirecting to Coinbase Wallet...",
                        buttonText: "Open",
                        darkMode: this.darkMode,
                        onButtonClick: () => {
                            this.redirectToCoinbaseWallet(e)
                        }
                    }), setTimeout(() => {
                        this.redirectToCoinbaseWallet(e)
                    }, 99)
                }
                showConnecting(e) {
                    return () => {
                        this.closeOpenedWindow(), this.redirectDialog.clear()
                    }
                }
                hideRequestEthereumAccounts() {
                    this.closeOpenedWindow(), this.redirectDialog.clear()
                }
                requestEthereumAccounts() {}
                addEthereumChain() {}
                watchAsset() {}
                selectProvider() {}
                switchEthereumChain() {}
                signEthereumMessage() {}
                signEthereumTransaction() {}
                submitEthereumTransaction() {}
                ethereumAddressFromSignedMessage() {}
                reloadUI() {}
                setStandalone() {}
                setConnectDisabled() {}
                inlineAccountsResponse() {
                    return !1
                }
                inlineAddEthereumChain() {
                    return !1
                }
                inlineWatchAsset() {
                    return !1
                }
                inlineSwitchEthereumChain() {
                    return !1
                }
                isStandalone() {
                    return !1
                }
                constructor(e) {
                    this.attached = !1, this.darkMode = !1, this.openedWindow = null, this.redirectDialog = new n.RedirectDialog, this.darkMode = e.darkMode
                }
            }
            t.MobileRelayUI = i
        },
        28051: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WalletLinkRelay = void 0;
            let n = r(86804),
                i = r(7900),
                s = r(75384),
                o = r(81207),
                a = r(29708),
                l = r(97332),
                c = r(58394),
                u = r(12460),
                h = r(41533);
            class d extends a.RelayAbstract {
                subscribe() {
                    let e = l.Session.load(this.storage) || new l.Session(this.storage).save(),
                        {
                            linkAPIUrl: t,
                            diagnostic: r
                        } = this,
                        n = new c.WalletLinkConnection({
                            session: e,
                            linkAPIUrl: t,
                            diagnostic: r,
                            listener: this
                        }),
                        {
                            version: i,
                            darkMode: s
                        } = this.options,
                        o = this.options.uiConstructor({
                            linkAPIUrl: t,
                            version: i,
                            darkMode: s,
                            session: e
                        });
                    return n.connect(), {
                        session: e,
                        ui: o,
                        connection: n
                    }
                }
                attachUI() {
                    this.ui.attach()
                }
                resetAndReload() {
                    Promise.race([this.connection.setSessionMetadata("__destroyed", "1"), new Promise(e => setTimeout(() => e(null), 1e3))]).then(() => {
                        var e, t;
                        let r = this.ui.isStandalone();
                        null === (e = this.diagnostic) || void 0 === e || e.log(o.EVENTS.SESSION_STATE_CHANGE, {
                            method: "relay::resetAndReload",
                            sessionMetadataChange: "__destroyed, 1",
                            sessionIdHash: this.getSessionIdHash()
                        }), this.connection.destroy();
                        let n = l.Session.load(this.storage);
                        if ((null == n ? void 0 : n.id) === this._session.id ? this.storage.clear() : n && (null === (t = this.diagnostic) || void 0 === t || t.log(o.EVENTS.SKIPPED_CLEARING_SESSION, {
                                sessionIdHash: this.getSessionIdHash(),
                                storedSessionIdHash: l.Session.hash(n.id)
                            })), this._reloadOnDisconnect) {
                            this.ui.reloadUI();
                            return
                        }
                        this.accountsCallback && this.accountsCallback([], !0);
                        let {
                            session: i,
                            ui: s,
                            connection: a
                        } = this.subscribe();
                        this._session = i, this.connection = a, this.ui = s, r && this.ui.setStandalone && this.ui.setStandalone(!0), this.attachUI()
                    }).catch(e => {
                        var t;
                        null === (t = this.diagnostic) || void 0 === t || t.log(o.EVENTS.FAILURE, {
                            method: "relay::resetAndReload",
                            message: "failed to reset and reload with ".concat(e),
                            sessionIdHash: this.getSessionIdHash()
                        })
                    })
                }
                setAppInfo(e, t) {
                    this.appName = e, this.appLogoUrl = t
                }
                getStorageItem(e) {
                    return this.storage.getItem(e)
                }
                get session() {
                    return this._session
                }
                setStorageItem(e, t) {
                    this.storage.setItem(e, t)
                }
                signEthereumMessage(e, t, r, n) {
                    return this.sendRequest({
                        method: "signEthereumMessage",
                        params: {
                            message: (0, s.hexStringFromBuffer)(e, !0),
                            address: t,
                            addPrefix: r,
                            typedDataJson: n || null
                        }
                    })
                }
                ethereumAddressFromSignedMessage(e, t, r) {
                    return this.sendRequest({
                        method: "ethereumAddressFromSignedMessage",
                        params: {
                            message: (0, s.hexStringFromBuffer)(e, !0),
                            signature: (0, s.hexStringFromBuffer)(t, !0),
                            addPrefix: r
                        }
                    })
                }
                signEthereumTransaction(e) {
                    return this.sendRequest({
                        method: "signEthereumTransaction",
                        params: {
                            fromAddress: e.fromAddress,
                            toAddress: e.toAddress,
                            weiValue: (0, s.bigIntStringFromBN)(e.weiValue),
                            data: (0, s.hexStringFromBuffer)(e.data, !0),
                            nonce: e.nonce,
                            gasPriceInWei: e.gasPriceInWei ? (0, s.bigIntStringFromBN)(e.gasPriceInWei) : null,
                            maxFeePerGas: e.gasPriceInWei ? (0, s.bigIntStringFromBN)(e.gasPriceInWei) : null,
                            maxPriorityFeePerGas: e.gasPriceInWei ? (0, s.bigIntStringFromBN)(e.gasPriceInWei) : null,
                            gasLimit: e.gasLimit ? (0, s.bigIntStringFromBN)(e.gasLimit) : null,
                            chainId: e.chainId,
                            shouldSubmit: !1
                        }
                    })
                }
                signAndSubmitEthereumTransaction(e) {
                    return this.sendRequest({
                        method: "signEthereumTransaction",
                        params: {
                            fromAddress: e.fromAddress,
                            toAddress: e.toAddress,
                            weiValue: (0, s.bigIntStringFromBN)(e.weiValue),
                            data: (0, s.hexStringFromBuffer)(e.data, !0),
                            nonce: e.nonce,
                            gasPriceInWei: e.gasPriceInWei ? (0, s.bigIntStringFromBN)(e.gasPriceInWei) : null,
                            maxFeePerGas: e.maxFeePerGas ? (0, s.bigIntStringFromBN)(e.maxFeePerGas) : null,
                            maxPriorityFeePerGas: e.maxPriorityFeePerGas ? (0, s.bigIntStringFromBN)(e.maxPriorityFeePerGas) : null,
                            gasLimit: e.gasLimit ? (0, s.bigIntStringFromBN)(e.gasLimit) : null,
                            chainId: e.chainId,
                            shouldSubmit: !0
                        }
                    })
                }
                submitEthereumTransaction(e, t) {
                    return this.sendRequest({
                        method: "submitEthereumTransaction",
                        params: {
                            signedTransaction: (0, s.hexStringFromBuffer)(e, !0),
                            chainId: t
                        }
                    })
                }
                scanQRCode(e) {
                    return this.sendRequest({
                        method: "scanQRCode",
                        params: {
                            regExp: e
                        }
                    })
                }
                getQRCodeUrl() {
                    return (0, s.createQrUrl)(this._session.id, this._session.secret, this.linkAPIUrl, !1, this.options.version, this.dappDefaultChain)
                }
                genericRequest(e, t) {
                    return this.sendRequest({
                        method: "generic",
                        params: {
                            action: t,
                            data: e
                        }
                    })
                }
                sendGenericMessage(e) {
                    return this.sendRequest(e)
                }
                sendRequest(e) {
                    let t = null,
                        r = (0, s.randomBytesHex)(8),
                        n = n => {
                            this.publishWeb3RequestCanceledEvent(r), this.handleErrorResponse(r, e.method, n), null == t || t()
                        };
                    return {
                        promise: new Promise((i, s) => {
                            this.ui.isStandalone() || (t = this.ui.showConnecting({
                                isUnlinkedErrorState: this.isUnlinkedErrorState,
                                onCancel: n,
                                onResetConnection: this.resetAndReload
                            })), this.relayEventManager.callbacks.set(r, e => {
                                if (null == t || t(), (0, u.isErrorResponse)(e)) return s(Error(e.errorMessage));
                                i(e)
                            }), this.ui.isStandalone() ? this.sendRequestStandalone(r, e) : this.publishWeb3RequestEvent(r, e)
                        }),
                        cancel: n
                    }
                }
                setConnectDisabled(e) {
                    this.ui.setConnectDisabled(e)
                }
                setAccountsCallback(e) {
                    this.accountsCallback = e
                }
                setChainCallback(e) {
                    this.chainCallback = e
                }
                setDappDefaultChainCallback(e) {
                    this.dappDefaultChain = e, this.ui instanceof h.WalletLinkRelayUI && this.ui.setChainId(e)
                }
                publishWeb3RequestEvent(e, t) {
                    var r;
                    let n = {
                            type: "WEB3_REQUEST",
                            id: e,
                            request: t
                        },
                        i = l.Session.load(this.storage);
                    null === (r = this.diagnostic) || void 0 === r || r.log(o.EVENTS.WEB3_REQUEST, {
                        eventId: n.id,
                        method: "relay::".concat(t.method),
                        sessionIdHash: this.getSessionIdHash(),
                        storedSessionIdHash: i ? l.Session.hash(i.id) : "",
                        isSessionMismatched: ((null == i ? void 0 : i.id) !== this._session.id).toString()
                    }), this.publishEvent("Web3Request", n, !0).then(e => {
                        var r;
                        null === (r = this.diagnostic) || void 0 === r || r.log(o.EVENTS.WEB3_REQUEST_PUBLISHED, {
                            eventId: n.id,
                            method: "relay::".concat(t.method),
                            sessionIdHash: this.getSessionIdHash(),
                            storedSessionIdHash: i ? l.Session.hash(i.id) : "",
                            isSessionMismatched: ((null == i ? void 0 : i.id) !== this._session.id).toString()
                        })
                    }).catch(e => {
                        this.handleWeb3ResponseMessage({
                            type: "WEB3_RESPONSE",
                            id: n.id,
                            response: {
                                method: t.method,
                                errorMessage: e.message
                            }
                        })
                    })
                }
                publishWeb3RequestCanceledEvent(e) {
                    this.publishEvent("Web3RequestCanceled", {
                        type: "WEB3_REQUEST_CANCELED",
                        id: e
                    }, !1).then()
                }
                publishEvent(e, t, r) {
                    return this.connection.publishEvent(e, t, r)
                }
                handleWeb3ResponseMessage(e) {
                    var t;
                    let {
                        response: r
                    } = e;
                    if (null === (t = this.diagnostic) || void 0 === t || t.log(o.EVENTS.WEB3_RESPONSE, {
                            eventId: e.id,
                            method: "relay::".concat(r.method),
                            sessionIdHash: this.getSessionIdHash()
                        }), "requestEthereumAccounts" === r.method) {
                        d.accountRequestCallbackIds.forEach(t => this.invokeCallback(Object.assign(Object.assign({}, e), {
                            id: t
                        }))), d.accountRequestCallbackIds.clear();
                        return
                    }
                    this.invokeCallback(e)
                }
                handleErrorResponse(e, t, r, i) {
                    var s;
                    let o = null !== (s = null == r ? void 0 : r.message) && void 0 !== s ? s : (0, n.getMessageFromCode)(i);
                    this.handleWeb3ResponseMessage({
                        type: "WEB3_RESPONSE",
                        id: e,
                        response: {
                            method: t,
                            errorMessage: o,
                            errorCode: i
                        }
                    })
                }
                invokeCallback(e) {
                    let t = this.relayEventManager.callbacks.get(e.id);
                    t && (t(e.response), this.relayEventManager.callbacks.delete(e.id))
                }
                requestEthereumAccounts() {
                    let e = {
                            method: "requestEthereumAccounts",
                            params: {
                                appName: this.appName,
                                appLogoUrl: this.appLogoUrl || null
                            }
                        },
                        t = (0, s.randomBytesHex)(8),
                        r = r => {
                            this.publishWeb3RequestCanceledEvent(t), this.handleErrorResponse(t, e.method, r)
                        };
                    return {
                        promise: new Promise((i, s) => {
                            if (this.relayEventManager.callbacks.set(t, e => {
                                    if (this.ui.hideRequestEthereumAccounts(), (0, u.isErrorResponse)(e)) return s(Error(e.errorMessage));
                                    i(e)
                                }), this.ui.inlineAccountsResponse()) this.ui.requestEthereumAccounts({
                                onCancel: r,
                                onAccounts: e => {
                                    this.handleWeb3ResponseMessage({
                                        type: "WEB3_RESPONSE",
                                        id: t,
                                        response: {
                                            method: "requestEthereumAccounts",
                                            result: e
                                        }
                                    })
                                }
                            });
                            else {
                                let e = n.standardErrors.provider.userRejectedRequest("User denied account authorization");
                                this.ui.requestEthereumAccounts({
                                    onCancel: () => r(e)
                                })
                            }
                            d.accountRequestCallbackIds.add(t), this.ui.inlineAccountsResponse() || this.ui.isStandalone() || this.publishWeb3RequestEvent(t, e)
                        }),
                        cancel: r
                    }
                }
                selectProvider(e) {
                    let t = (0, s.randomBytesHex)(8);
                    return {
                        cancel: e => {
                            this.publishWeb3RequestCanceledEvent(t), this.handleErrorResponse(t, "selectProvider", e)
                        },
                        promise: new Promise((r, n) => {
                            this.relayEventManager.callbacks.set(t, e => {
                                if ((0, u.isErrorResponse)(e)) return n(Error(e.errorMessage));
                                r(e)
                            }), this.ui.selectProvider && this.ui.selectProvider({
                                onApprove: e => {
                                    this.handleWeb3ResponseMessage({
                                        type: "WEB3_RESPONSE",
                                        id: t,
                                        response: {
                                            method: "selectProvider",
                                            result: e
                                        }
                                    })
                                },
                                onCancel: e => {
                                    this.handleWeb3ResponseMessage({
                                        type: "WEB3_RESPONSE",
                                        id: t,
                                        response: {
                                            method: "selectProvider",
                                            result: i.ProviderType.Unselected
                                        }
                                    })
                                },
                                providerOptions: e
                            })
                        })
                    }
                }
                watchAsset(e, t, r, n, i, o) {
                    let a = {
                            method: "watchAsset",
                            params: {
                                type: e,
                                options: {
                                    address: t,
                                    symbol: r,
                                    decimals: n,
                                    image: i
                                },
                                chainId: o
                            }
                        },
                        l = null,
                        c = (0, s.randomBytesHex)(8),
                        h = e => {
                            this.publishWeb3RequestCanceledEvent(c), this.handleErrorResponse(c, a.method, e), null == l || l()
                        };
                    return this.ui.inlineWatchAsset() || (l = this.ui.showConnecting({
                        isUnlinkedErrorState: this.isUnlinkedErrorState,
                        onCancel: h,
                        onResetConnection: this.resetAndReload
                    })), {
                        cancel: h,
                        promise: new Promise((s, h) => {
                            this.relayEventManager.callbacks.set(c, e => {
                                if (null == l || l(), (0, u.isErrorResponse)(e)) return h(Error(e.errorMessage));
                                s(e)
                            }), this.ui.inlineWatchAsset() && this.ui.watchAsset({
                                onApprove: () => {
                                    this.handleWeb3ResponseMessage({
                                        type: "WEB3_RESPONSE",
                                        id: c,
                                        response: {
                                            method: "watchAsset",
                                            result: !0
                                        }
                                    })
                                },
                                onCancel: e => {
                                    this.handleWeb3ResponseMessage({
                                        type: "WEB3_RESPONSE",
                                        id: c,
                                        response: {
                                            method: "watchAsset",
                                            result: !1
                                        }
                                    })
                                },
                                type: e,
                                address: t,
                                symbol: r,
                                decimals: n,
                                image: i,
                                chainId: o
                            }), this.ui.inlineWatchAsset() || this.ui.isStandalone() || this.publishWeb3RequestEvent(c, a)
                        })
                    }
                }
                addEthereumChain(e, t, r, n, i, o) {
                    let a = {
                            method: "addEthereumChain",
                            params: {
                                chainId: e,
                                rpcUrls: t,
                                blockExplorerUrls: n,
                                chainName: i,
                                iconUrls: r,
                                nativeCurrency: o
                            }
                        },
                        l = null,
                        c = (0, s.randomBytesHex)(8),
                        h = e => {
                            this.publishWeb3RequestCanceledEvent(c), this.handleErrorResponse(c, a.method, e), null == l || l()
                        };
                    return this.ui.inlineAddEthereumChain(e) || (l = this.ui.showConnecting({
                        isUnlinkedErrorState: this.isUnlinkedErrorState,
                        onCancel: h,
                        onResetConnection: this.resetAndReload
                    })), {
                        promise: new Promise((t, r) => {
                            this.relayEventManager.callbacks.set(c, e => {
                                if (null == l || l(), (0, u.isErrorResponse)(e)) return r(Error(e.errorMessage));
                                t(e)
                            }), this.ui.inlineAddEthereumChain(e) && this.ui.addEthereumChain({
                                onCancel: e => {
                                    this.handleWeb3ResponseMessage({
                                        type: "WEB3_RESPONSE",
                                        id: c,
                                        response: {
                                            method: "addEthereumChain",
                                            result: {
                                                isApproved: !1,
                                                rpcUrl: ""
                                            }
                                        }
                                    })
                                },
                                onApprove: e => {
                                    this.handleWeb3ResponseMessage({
                                        type: "WEB3_RESPONSE",
                                        id: c,
                                        response: {
                                            method: "addEthereumChain",
                                            result: {
                                                isApproved: !0,
                                                rpcUrl: e
                                            }
                                        }
                                    })
                                },
                                chainId: a.params.chainId,
                                rpcUrls: a.params.rpcUrls,
                                blockExplorerUrls: a.params.blockExplorerUrls,
                                chainName: a.params.chainName,
                                iconUrls: a.params.iconUrls,
                                nativeCurrency: a.params.nativeCurrency
                            }), this.ui.inlineAddEthereumChain(e) || this.ui.isStandalone() || this.publishWeb3RequestEvent(c, a)
                        }),
                        cancel: h
                    }
                }
                switchEthereumChain(e, t) {
                    let r = {
                            method: "switchEthereumChain",
                            params: Object.assign({
                                chainId: e
                            }, {
                                address: t
                            })
                        },
                        i = (0, s.randomBytesHex)(8);
                    return {
                        promise: new Promise((t, s) => {
                            this.relayEventManager.callbacks.set(i, e => (0, u.isErrorResponse)(e) && e.errorCode ? s(n.standardErrors.provider.custom({
                                code: e.errorCode,
                                message: "Unrecognized chain ID. Try adding the chain using addEthereumChain first."
                            })) : (0, u.isErrorResponse)(e) ? s(Error(e.errorMessage)) : void t(e)), this.ui.switchEthereumChain({
                                onCancel: t => {
                                    var r;
                                    if (t) {
                                        let s = null !== (r = (0, n.getErrorCode)(t)) && void 0 !== r ? r : n.standardErrorCodes.provider.unsupportedChain;
                                        this.handleErrorResponse(i, "switchEthereumChain", t instanceof Error ? t : n.standardErrors.provider.unsupportedChain(e), s)
                                    } else this.handleWeb3ResponseMessage({
                                        type: "WEB3_RESPONSE",
                                        id: i,
                                        response: {
                                            method: "switchEthereumChain",
                                            result: {
                                                isApproved: !1,
                                                rpcUrl: ""
                                            }
                                        }
                                    })
                                },
                                onApprove: e => {
                                    this.handleWeb3ResponseMessage({
                                        type: "WEB3_RESPONSE",
                                        id: i,
                                        response: {
                                            method: "switchEthereumChain",
                                            result: {
                                                isApproved: !0,
                                                rpcUrl: e
                                            }
                                        }
                                    })
                                },
                                chainId: r.params.chainId,
                                address: r.params.address
                            }), this.ui.inlineSwitchEthereumChain() || this.ui.isStandalone() || this.publishWeb3RequestEvent(i, r)
                        }),
                        cancel: e => {
                            this.publishWeb3RequestCanceledEvent(i), this.handleErrorResponse(i, r.method, e)
                        }
                    }
                }
                inlineAddEthereumChain(e) {
                    return this.ui.inlineAddEthereumChain(e)
                }
                getSessionIdHash() {
                    return l.Session.hash(this._session.id)
                }
                sendRequestStandalone(e, t) {
                    let r = r => {
                            this.handleErrorResponse(e, t.method, r)
                        },
                        n = t => {
                            this.handleWeb3ResponseMessage({
                                type: "WEB3_RESPONSE",
                                id: e,
                                response: t
                            })
                        };
                    switch (t.method) {
                        case "signEthereumMessage":
                            this.ui.signEthereumMessage({
                                request: t,
                                onSuccess: n,
                                onCancel: r
                            });
                            break;
                        case "signEthereumTransaction":
                            this.ui.signEthereumTransaction({
                                request: t,
                                onSuccess: n,
                                onCancel: r
                            });
                            break;
                        case "submitEthereumTransaction":
                            this.ui.submitEthereumTransaction({
                                request: t,
                                onSuccess: n,
                                onCancel: r
                            });
                            break;
                        case "ethereumAddressFromSignedMessage":
                            this.ui.ethereumAddressFromSignedMessage({
                                request: t,
                                onSuccess: n
                            });
                            break;
                        default:
                            r()
                    }
                }
                constructor(e) {
                    var t;
                    super(), this.accountsCallback = null, this.chainCallbackParams = {
                        chainId: "",
                        jsonRpcUrl: ""
                    }, this.chainCallback = null, this.dappDefaultChain = 1, this.appName = "", this.appLogoUrl = null, this.linkedUpdated = e => {
                        var t;
                        this.isLinked = e;
                        let r = this.storage.getItem(a.LOCAL_STORAGE_ADDRESSES_KEY);
                        if (e && (this.session.linked = e), this.isUnlinkedErrorState = !1, r) {
                            let n = r.split(" "),
                                i = "true" === this.storage.getItem("IsStandaloneSigning");
                            if ("" !== n[0] && !e && this.session.linked && !i) {
                                this.isUnlinkedErrorState = !0;
                                let e = this.getSessionIdHash();
                                null === (t = this.diagnostic) || void 0 === t || t.log(o.EVENTS.UNLINKED_ERROR_STATE, {
                                    sessionIdHash: e
                                })
                            }
                        }
                    }, this.metadataUpdated = (e, t) => {
                        this.storage.setItem(e, t)
                    }, this.chainUpdated = (e, t) => {
                        (this.chainCallbackParams.chainId !== e || this.chainCallbackParams.jsonRpcUrl !== t) && (this.chainCallbackParams = {
                            chainId: e,
                            jsonRpcUrl: t
                        }, this.chainCallback && this.chainCallback(e, t))
                    }, this.accountUpdated = e => {
                        this.accountsCallback && this.accountsCallback([e]), d.accountRequestCallbackIds.size > 0 && (Array.from(d.accountRequestCallbackIds.values()).forEach(t => {
                            this.invokeCallback(Object.assign(Object.assign({}, {
                                type: "WEB3_RESPONSE",
                                id: t,
                                response: {
                                    method: "requestEthereumAccounts",
                                    result: [e]
                                }
                            }), {
                                id: t
                            }))
                        }), d.accountRequestCallbackIds.clear())
                    }, this.connectedUpdated = e => {
                        this.ui.setConnected(e)
                    }, this.resetAndReload = this.resetAndReload.bind(this), this.linkAPIUrl = e.linkAPIUrl, this.storage = e.storage, this.options = e;
                    let {
                        session: r,
                        ui: n,
                        connection: i
                    } = this.subscribe();
                    this._session = r, this.connection = i, this.relayEventManager = e.relayEventManager, this.diagnostic = e.diagnosticLogger, this._reloadOnDisconnect = null === (t = e.reloadOnDisconnect) || void 0 === t || t, this.ui = n
                }
            }
            t.WalletLinkRelay = d, d.accountRequestCallbackIds = new Set
        },
        58394: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WalletLinkConnection = void 0;
            let n = r(7900),
                i = r(44506),
                s = r(81207),
                o = r(29708),
                a = r(97332),
                l = r(82008),
                c = r(82522);
            class u {
                connect() {
                    var e;
                    if (this.destroyed) throw Error("instance is destroyed");
                    null === (e = this.diagnostic) || void 0 === e || e.log(s.EVENTS.STARTED_CONNECTING, {
                        sessionIdHash: a.Session.hash(this.session.id)
                    }), this.ws.connect()
                }
                destroy() {
                    var e;
                    this.destroyed = !0, this.ws.disconnect(), null === (e = this.diagnostic) || void 0 === e || e.log(s.EVENTS.DISCONNECTED, {
                        sessionIdHash: a.Session.hash(this.session.id)
                    }), this.listener = void 0
                }
                get isDestroyed() {
                    return this.destroyed
                }
                get connected() {
                    return this._connected
                }
                set connected(e) {
                    var t, r;
                    this._connected = e, e && (null === (t = this.onceConnected) || void 0 === t || t.call(this)), null === (r = this.listener) || void 0 === r || r.connectedUpdated(e)
                }
                setOnceConnected(e) {
                    return new Promise(t => {
                        this.connected ? e().then(t) : this.onceConnected = () => {
                            e().then(t), this.onceConnected = void 0
                        }
                    })
                }
                get linked() {
                    return this._linked
                }
                set linked(e) {
                    var t, r;
                    this._linked = e, e && (null === (t = this.onceLinked) || void 0 === t || t.call(this)), null === (r = this.listener) || void 0 === r || r.linkedUpdated(e)
                }
                setOnceLinked(e) {
                    return new Promise(t => {
                        this.linked ? e().then(t) : this.onceLinked = () => {
                            e().then(t), this.onceLinked = void 0
                        }
                    })
                }
                async handleIncomingEvent(e) {
                    var t, r;
                    if ("Event" === e.type && "Web3Response" === e.event) try {
                        let r = await this.cipher.decrypt(e.data),
                            n = JSON.parse(r);
                        if ("WEB3_RESPONSE" !== n.type) return;
                        null === (t = this.listener) || void 0 === t || t.handleWeb3ResponseMessage(n)
                    } catch (e) {
                        null === (r = this.diagnostic) || void 0 === r || r.log(s.EVENTS.GENERAL_ERROR, {
                            message: "Had error decrypting",
                            value: "incomingEvent"
                        })
                    }
                }
                async checkUnseenEvents() {
                    if (!this.connected) {
                        this.shouldFetchUnseenEventsOnConnect = !0;
                        return
                    }
                    await new Promise(e => setTimeout(e, 250));
                    try {
                        await this.fetchUnseenEventsAPI()
                    } catch (e) {
                        console.error("Unable to check for unseen events", e)
                    }
                }
                async fetchUnseenEventsAPI() {
                    this.shouldFetchUnseenEventsOnConnect = !1, (await this.http.fetchUnseenEvents()).forEach(e => this.handleIncomingEvent(e))
                }
                async setSessionMetadata(e, t) {
                    let r = {
                        type: "SetSessionConfig",
                        id: (0, n.IntNumber)(this.nextReqId++),
                        sessionId: this.session.id,
                        metadata: {
                            [e]: t
                        }
                    };
                    return this.setOnceConnected(async () => {
                        let e = await this.makeRequest(r);
                        if ("Fail" === e.type) throw Error(e.error || "failed to set session metadata")
                    })
                }
                async publishEvent(e, t) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = await this.cipher.encrypt(JSON.stringify(Object.assign(Object.assign({}, t), {
                            origin: location.origin,
                            relaySource: window.coinbaseWalletExtension ? "injected_sdk" : "sdk"
                        }))),
                        s = {
                            type: "PublishEvent",
                            id: (0, n.IntNumber)(this.nextReqId++),
                            sessionId: this.session.id,
                            event: e,
                            data: i,
                            callWebhook: r
                        };
                    return this.setOnceLinked(async () => {
                        let e = await this.makeRequest(s);
                        if ("Fail" === e.type) throw Error(e.error || "failed to publish event");
                        return e.eventId
                    })
                }
                sendData(e) {
                    this.ws.sendData(JSON.stringify(e))
                }
                updateLastHeartbeat() {
                    this.lastHeartbeatResponse = Date.now()
                }
                heartbeat() {
                    if (Date.now() - this.lastHeartbeatResponse > 2e4) {
                        this.ws.disconnect();
                        return
                    }
                    try {
                        this.ws.sendData("h")
                    } catch (e) {}
                }
                async makeRequest(e) {
                    let t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6e4,
                        n = e.id;
                    return this.sendData(e), Promise.race([new Promise((e, i) => {
                        t = window.setTimeout(() => {
                            i(Error("request ".concat(n, " timed out")))
                        }, r)
                    }), new Promise(e => {
                        this.requestResolutions.set(n, r => {
                            clearTimeout(t), e(r), this.requestResolutions.delete(n)
                        })
                    })])
                }
                async authenticate() {
                    let e = {
                            type: "HostSession",
                            id: (0, n.IntNumber)(this.nextReqId++),
                            sessionId: this.session.id,
                            sessionKey: this.session.key
                        },
                        t = await this.makeRequest(e);
                    if ("Fail" === t.type) throw Error(t.error || "failed to authentcate")
                }
                sendIsLinked() {
                    let e = {
                        type: "IsLinked",
                        id: (0, n.IntNumber)(this.nextReqId++),
                        sessionId: this.session.id
                    };
                    this.sendData(e)
                }
                sendGetSessionConfig() {
                    let e = {
                        type: "GetSessionConfig",
                        id: (0, n.IntNumber)(this.nextReqId++),
                        sessionId: this.session.id
                    };
                    this.sendData(e)
                }
                constructor({
                    session: e,
                    linkAPIUrl: t,
                    listener: r,
                    diagnostic: u,
                    WebSocketClass: h = WebSocket
                }) {
                    this.destroyed = !1, this.lastHeartbeatResponse = 0, this.nextReqId = (0, n.IntNumber)(1), this._connected = !1, this._linked = !1, this.shouldFetchUnseenEventsOnConnect = !1, this.requestResolutions = new Map, this.handleSessionMetadataUpdated = e => {
                        e && new Map([
                            ["__destroyed", this.handleDestroyed],
                            ["EthereumAddress", this.handleAccountUpdated],
                            ["WalletUsername", this.handleWalletUsernameUpdated],
                            ["AppVersion", this.handleAppVersionUpdated],
                            ["ChainId", t => e.JsonRpcUrl && this.handleChainUpdated(t, e.JsonRpcUrl)]
                        ]).forEach((t, r) => {
                            let n = e[r];
                            void 0 !== n && t(n)
                        })
                    }, this.handleDestroyed = e => {
                        var t, r;
                        "1" === e && (null === (t = this.listener) || void 0 === t || t.resetAndReload(), null === (r = this.diagnostic) || void 0 === r || r.log(s.EVENTS.METADATA_DESTROYED, {
                            alreadyDestroyed: this.isDestroyed,
                            sessionIdHash: a.Session.hash(this.session.id)
                        }))
                    }, this.handleAccountUpdated = async e => {
                        var t, r;
                        try {
                            let r = await this.cipher.decrypt(e);
                            null === (t = this.listener) || void 0 === t || t.accountUpdated(r)
                        } catch (e) {
                            null === (r = this.diagnostic) || void 0 === r || r.log(s.EVENTS.GENERAL_ERROR, {
                                message: "Had error decrypting",
                                value: "selectedAddress"
                            })
                        }
                    }, this.handleMetadataUpdated = async (e, t) => {
                        var r, n;
                        try {
                            let n = await this.cipher.decrypt(t);
                            null === (r = this.listener) || void 0 === r || r.metadataUpdated(e, n)
                        } catch (t) {
                            null === (n = this.diagnostic) || void 0 === n || n.log(s.EVENTS.GENERAL_ERROR, {
                                message: "Had error decrypting",
                                value: e
                            })
                        }
                    }, this.handleWalletUsernameUpdated = async e => {
                        this.handleMetadataUpdated(o.WALLET_USER_NAME_KEY, e)
                    }, this.handleAppVersionUpdated = async e => {
                        this.handleMetadataUpdated(o.APP_VERSION_KEY, e)
                    }, this.handleChainUpdated = async (e, t) => {
                        var r, n;
                        try {
                            let n = await this.cipher.decrypt(e),
                                i = await this.cipher.decrypt(t);
                            null === (r = this.listener) || void 0 === r || r.chainUpdated(n, i)
                        } catch (e) {
                            null === (n = this.diagnostic) || void 0 === n || n.log(s.EVENTS.GENERAL_ERROR, {
                                message: "Had error decrypting",
                                value: "chainId|jsonRpcUrl"
                            })
                        }
                    }, this.session = e, this.cipher = new i.Cipher(e.secret), this.diagnostic = u, this.listener = r;
                    let d = new c.WalletLinkWebSocket("".concat(t, "/rpc"), h);
                    d.setConnectionStateListener(async t => {
                        var r;
                        null === (r = this.diagnostic) || void 0 === r || r.log(s.EVENTS.CONNECTED_STATE_CHANGE, {
                            state: t,
                            sessionIdHash: a.Session.hash(e.id)
                        });
                        let n = !1;
                        switch (t) {
                            case c.ConnectionState.DISCONNECTED:
                                if (!this.destroyed) {
                                    let e = async () => {
                                        await new Promise(e => setTimeout(e, 5e3)), this.destroyed || d.connect().catch(() => {
                                            e()
                                        })
                                    };
                                    e()
                                }
                                break;
                            case c.ConnectionState.CONNECTED:
                                try {
                                    await this.authenticate(), this.sendIsLinked(), this.sendGetSessionConfig(), n = !0
                                } catch (e) {}
                                this.updateLastHeartbeat(), setInterval(() => {
                                    this.heartbeat()
                                }, 1e4), this.shouldFetchUnseenEventsOnConnect && this.fetchUnseenEventsAPI();
                            case c.ConnectionState.CONNECTING:
                        }
                        this.connected !== n && (this.connected = n)
                    }), d.setIncomingDataListener(t => {
                        var r, n, i;
                        switch (t.type) {
                            case "Heartbeat":
                                this.updateLastHeartbeat();
                                return;
                            case "IsLinkedOK":
                            case "Linked":
                                {
                                    let n = "IsLinkedOK" === t.type ? t.linked : void 0;null === (r = this.diagnostic) || void 0 === r || r.log(s.EVENTS.LINKED, {
                                        sessionIdHash: a.Session.hash(e.id),
                                        linked: n,
                                        type: t.type,
                                        onlineGuests: t.onlineGuests
                                    }),
                                    this.linked = n || t.onlineGuests > 0;
                                    break
                                }
                            case "GetSessionConfigOK":
                            case "SessionConfigUpdated":
                                null === (n = this.diagnostic) || void 0 === n || n.log(s.EVENTS.SESSION_CONFIG_RECEIVED, {
                                    sessionIdHash: a.Session.hash(e.id),
                                    metadata_keys: t && t.metadata ? Object.keys(t.metadata) : void 0
                                }), this.handleSessionMetadataUpdated(t.metadata);
                                break;
                            case "Event":
                                this.handleIncomingEvent(t)
                        }
                        void 0 !== t.id && (null === (i = this.requestResolutions.get(t.id)) || void 0 === i || i(t))
                    }), this.ws = d, this.http = new l.WalletLinkHTTP(t, e.id, e.key)
                }
            }
            t.WalletLinkConnection = u
        },
        82008: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WalletLinkHTTP = void 0;
            class r {
                async markUnseenEventsAsSeen(e) {
                    return Promise.all(e.map(e => fetch("".concat(this.linkAPIUrl, "/events/").concat(e.eventId, "/seen"), {
                        method: "POST",
                        headers: {
                            Authorization: this.auth
                        }
                    }))).catch(e => console.error("Unabled to mark event as failed:", e))
                }
                async fetchUnseenEvents() {
                    var e;
                    let t = await fetch("".concat(this.linkAPIUrl, "/events?unseen=true"), {
                        headers: {
                            Authorization: this.auth
                        }
                    });
                    if (t.ok) {
                        let {
                            events: r,
                            error: n
                        } = await t.json();
                        if (n) throw Error("Check unseen events failed: ".concat(n));
                        let i = null !== (e = null == r ? void 0 : r.filter(e => "Web3Response" === e.event).map(e => ({
                            type: "Event",
                            sessionId: this.sessionId,
                            eventId: e.id,
                            event: e.event,
                            data: e.data
                        }))) && void 0 !== e ? e : [];
                        return this.markUnseenEventsAsSeen(i), i
                    }
                    throw Error("Check unseen events failed: ".concat(t.status))
                }
                constructor(e, t, r) {
                    this.linkAPIUrl = e, this.sessionId = t;
                    let n = "".concat(t, ":").concat(r);
                    this.auth = "Basic ".concat(btoa(n))
                }
            }
            t.WalletLinkHTTP = r
        },
        82522: function(e, t) {
            "use strict";
            var r, n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WalletLinkWebSocket = t.ConnectionState = void 0, (n = r || (t.ConnectionState = r = {}))[n.DISCONNECTED = 0] = "DISCONNECTED", n[n.CONNECTING = 1] = "CONNECTING", n[n.CONNECTED = 2] = "CONNECTED";
            class i {
                setConnectionStateListener(e) {
                    this.connectionStateListener = e
                }
                setIncomingDataListener(e) {
                    this.incomingDataListener = e
                }
                async connect() {
                    if (this.webSocket) throw Error("webSocket object is not null");
                    return new Promise((e, t) => {
                        var n;
                        let i;
                        try {
                            this.webSocket = i = new this.WebSocketClass(this.url)
                        } catch (e) {
                            t(e);
                            return
                        }
                        null === (n = this.connectionStateListener) || void 0 === n || n.call(this, r.CONNECTING), i.onclose = e => {
                            var n;
                            this.clearWebSocket(), t(Error("websocket error ".concat(e.code, ": ").concat(e.reason))), null === (n = this.connectionStateListener) || void 0 === n || n.call(this, r.DISCONNECTED)
                        }, i.onopen = t => {
                            var n;
                            e(), null === (n = this.connectionStateListener) || void 0 === n || n.call(this, r.CONNECTED), this.pendingData.length > 0 && ([...this.pendingData].forEach(e => this.sendData(e)), this.pendingData = [])
                        }, i.onmessage = e => {
                            var t, r;
                            if ("h" === e.data) null === (t = this.incomingDataListener) || void 0 === t || t.call(this, {
                                type: "Heartbeat"
                            });
                            else try {
                                let t = JSON.parse(e.data);
                                null === (r = this.incomingDataListener) || void 0 === r || r.call(this, t)
                            } catch (e) {}
                        }
                    })
                }
                disconnect() {
                    var e;
                    let {
                        webSocket: t
                    } = this;
                    if (t) {
                        this.clearWebSocket(), null === (e = this.connectionStateListener) || void 0 === e || e.call(this, r.DISCONNECTED), this.connectionStateListener = void 0, this.incomingDataListener = void 0;
                        try {
                            t.close()
                        } catch (e) {}
                    }
                }
                sendData(e) {
                    let {
                        webSocket: t
                    } = this;
                    if (!t) {
                        this.pendingData.push(e), this.connect();
                        return
                    }
                    t.send(e)
                }
                clearWebSocket() {
                    let {
                        webSocket: e
                    } = this;
                    e && (this.webSocket = null, e.onclose = null, e.onerror = null, e.onmessage = null, e.onopen = null)
                }
                constructor(e, t = WebSocket) {
                    this.WebSocketClass = t, this.webSocket = null, this.pendingData = [], this.url = e.replace(/^http/, "ws")
                }
            }
            t.WalletLinkWebSocket = i
        },
        12460: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isErrorResponse = void 0, t.isErrorResponse = function(e) {
                return void 0 !== e.errorMessage
            }
        },
        41533: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WalletLinkRelayUI = void 0;
            let n = r(21089),
                i = r(93104),
                s = r(55816);
            class o {
                attach() {
                    if (this.attached) throw Error("Coinbase Wallet SDK UI is already attached");
                    let e = document.documentElement,
                        t = document.createElement("div");
                    t.className = "-cbwsdk-css-reset", e.appendChild(t), this.linkFlow.attach(t), this.snackbar.attach(t), this.attached = !0, (0, n.injectCssReset)()
                }
                setConnected(e) {
                    this.linkFlow.setConnected(e)
                }
                setChainId(e) {
                    this.linkFlow.setChainId(e)
                }
                setConnectDisabled(e) {
                    this.linkFlow.setConnectDisabled(e)
                }
                addEthereumChain() {}
                watchAsset() {}
                switchEthereumChain() {}
                requestEthereumAccounts(e) {
                    this.linkFlow.open({
                        onCancel: e.onCancel
                    })
                }
                hideRequestEthereumAccounts() {
                    this.linkFlow.close()
                }
                signEthereumMessage() {}
                signEthereumTransaction() {}
                submitEthereumTransaction() {}
                ethereumAddressFromSignedMessage() {}
                showConnecting(e) {
                    let t;
                    return t = e.isUnlinkedErrorState ? {
                        autoExpand: !0,
                        message: "Connection lost",
                        menuItems: [{
                            isRed: !1,
                            info: "Reset connection",
                            svgWidth: "10",
                            svgHeight: "11",
                            path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                            defaultFillRule: "evenodd",
                            defaultClipRule: "evenodd",
                            onClick: e.onResetConnection
                        }]
                    } : {
                        message: "Confirm on phone",
                        menuItems: [{
                            isRed: !0,
                            info: "Cancel transaction",
                            svgWidth: "11",
                            svgHeight: "11",
                            path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                            defaultFillRule: "inherit",
                            defaultClipRule: "inherit",
                            onClick: e.onCancel
                        }, {
                            isRed: !1,
                            info: "Reset connection",
                            svgWidth: "10",
                            svgHeight: "11",
                            path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                            defaultFillRule: "evenodd",
                            defaultClipRule: "evenodd",
                            onClick: e.onResetConnection
                        }]
                    }, this.snackbar.presentItem(t)
                }
                reloadUI() {
                    document.location.reload()
                }
                inlineAccountsResponse() {
                    return !1
                }
                inlineAddEthereumChain() {
                    return !1
                }
                inlineWatchAsset() {
                    return !1
                }
                inlineSwitchEthereumChain() {
                    return !1
                }
                setStandalone(e) {
                    this.standalone = e
                }
                isStandalone() {
                    var e;
                    return null !== (e = this.standalone) && void 0 !== e && e
                }
                constructor(e) {
                    this.standalone = null, this.attached = !1, this.snackbar = new s.Snackbar({
                        darkMode: e.darkMode
                    }), this.linkFlow = new i.LinkFlow({
                        darkMode: e.darkMode,
                        version: e.version,
                        sessionId: e.session.id,
                        sessionSecret: e.session.secret,
                        linkAPIUrl: e.linkAPIUrl,
                        isParentConnection: !1
                    })
                }
            }
            t.WalletLinkRelayUI = o
        },
        95627: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = ".-cbwsdk-css-reset .-cbwsdk-connect-content{height:430px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-connect-content.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-header{display:flex;align-items:center;justify-content:space-between;margin:0 0 30px}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading{font-style:normal;font-weight:500;font-size:28px;line-height:36px;margin:0}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-layout{display:flex;flex-direction:row}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-left{margin-right:30px;display:flex;flex-direction:column;justify-content:space-between}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-right{flex:25%;margin-right:34px}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-wrapper{width:220px;height:220px;border-radius:12px;display:flex;justify-content:center;align-items:center;background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light{background-color:rgba(255,255,255,.95)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light>p{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark{background-color:rgba(10,11,13,.9)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark>p{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting>p{font-size:12px;font-weight:bold;margin-top:16px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app{border-radius:8px;font-size:14px;line-height:20px;padding:12px;width:339px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.light{background:#eef0f3;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.dark{background:#1e2025;color:#8a919e}.-cbwsdk-css-reset .-cbwsdk-cancel-button{-webkit-appearance:none;border:none;background:none;cursor:pointer;padding:0;margin:0}.-cbwsdk-css-reset .-cbwsdk-cancel-button-x{position:relative;display:block;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-wallet-steps{padding:0 0 0 16px;margin:0;width:100%;list-style:decimal}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item{list-style-type:decimal;display:list-item;font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:20px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item-wrapper{display:flex;align-items:center}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-pad-left{margin-left:6px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon{display:flex;border-radius:50%;height:24px;width:24px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.light{background:#0052ff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.dark{background:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item{align-items:center;display:flex;flex-direction:row;padding:16px 24px;gap:12px;cursor:pointer;border-radius:100px;font-weight:600}.-cbwsdk-css-reset .-cbwsdk-connect-item.light{background:#f5f8ff;color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark{background:#001033;color:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item-copy-wrapper{margin:0 4px 0 8px}.-cbwsdk-css-reset .-cbwsdk-connect-item-title{margin:0 0 0;font-size:16px;line-height:24px;font-weight:500}.-cbwsdk-css-reset .-cbwsdk-connect-item-description{font-weight:400;font-size:14px;line-height:20px;margin:0}"
        },
        12764: function(e, t, r) {
            "use strict";
            var n = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CoinbaseWalletSteps = t.ConnectContent = void 0;
            let i = n(r(34734)),
                s = r(85350),
                o = r(75384),
                a = r(4937),
                l = r(58750),
                c = r(6585),
                u = r(70983),
                h = r(54964),
                d = r(88058),
                f = n(r(95627)),
                p = {
                    title: "Coinbase Wallet app",
                    description: "Connect with your self-custody wallet",
                    steps: y
                },
                g = e => "light" === e ? "#FFFFFF" : "#0A0B0D";

            function m(e) {
                let {
                    title: t,
                    description: r,
                    theme: n
                } = e;
                return (0, s.h)("div", {
                    className: (0, i.default)("-cbwsdk-connect-item", n)
                }, (0, s.h)("div", null, (0, s.h)(c.CoinbaseWalletRound, null)), (0, s.h)("div", {
                    className: "-cbwsdk-connect-item-copy-wrapper"
                }, (0, s.h)("h3", {
                    className: "-cbwsdk-connect-item-title"
                }, t), (0, s.h)("p", {
                    className: "-cbwsdk-connect-item-description"
                }, r)))
            }

            function y(e) {
                let {
                    theme: t
                } = e;
                return (0, s.h)("ol", {
                    className: "-cbwsdk-wallet-steps"
                }, (0, s.h)("li", {
                    className: (0, i.default)("-cbwsdk-wallet-steps-item", t)
                }, (0, s.h)("div", {
                    className: "-cbwsdk-wallet-steps-item-wrapper"
                }, "Open Coinbase Wallet app")), (0, s.h)("li", {
                    className: (0, i.default)("-cbwsdk-wallet-steps-item", t)
                }, (0, s.h)("div", {
                    className: "-cbwsdk-wallet-steps-item-wrapper"
                }, (0, s.h)("span", null, "Tap ", (0, s.h)("strong", null, "Scan"), " "), (0, s.h)("span", {
                    className: (0, i.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", t)
                }, (0, s.h)(u.QRCodeIcon, {
                    fill: g(t)
                })))))
            }
            t.ConnectContent = function(e) {
                let {
                    theme: t
                } = e, r = (0, o.createQrUrl)(e.sessionId, e.sessionSecret, e.linkAPIUrl, e.isParentConnection, e.version, e.chainId), n = p.steps;
                return (0, s.h)("div", {
                    "data-testid": "connect-content",
                    className: (0, i.default)("-cbwsdk-connect-content", t)
                }, (0, s.h)("style", null, f.default), (0, s.h)("div", {
                    className: "-cbwsdk-connect-content-header"
                }, (0, s.h)("h2", {
                    className: (0, i.default)("-cbwsdk-connect-content-heading", t)
                }, "Scan to connect with our mobile app"), e.onCancel && (0, s.h)("button", {
                    type: "button",
                    className: "-cbwsdk-cancel-button",
                    onClick: e.onCancel
                }, (0, s.h)(l.CloseIcon, {
                    fill: "light" === t ? "#0A0B0D" : "#FFFFFF"
                }))), (0, s.h)("div", {
                    className: "-cbwsdk-connect-content-layout"
                }, (0, s.h)("div", {
                    className: "-cbwsdk-connect-content-column-left"
                }, (0, s.h)(m, {
                    title: p.title,
                    description: p.description,
                    theme: t
                })), (0, s.h)("div", {
                    className: "-cbwsdk-connect-content-column-right"
                }, (0, s.h)("div", {
                    className: "-cbwsdk-connect-content-qr-wrapper"
                }, (0, s.h)(h.QRCode, {
                    content: r,
                    width: 200,
                    height: 200,
                    fgColor: "#000",
                    bgColor: "transparent"
                }), (0, s.h)("input", {
                    type: "hidden",
                    name: "cbw-cbwsdk-version",
                    value: a.LIB_VERSION
                }), (0, s.h)("input", {
                    type: "hidden",
                    value: r
                })), (0, s.h)(n, {
                    theme: t
                }), !e.isConnected && (0, s.h)("div", {
                    "data-testid": "connecting-spinner",
                    className: (0, i.default)("-cbwsdk-connect-content-qr-connecting", t)
                }, (0, s.h)(d.Spinner, {
                    size: 36,
                    color: "dark" === t ? "#FFF" : "#000"
                }), (0, s.h)("p", null, "Connecting...")))))
            }, t.CoinbaseWalletSteps = y
        },
        40285: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = ".-cbwsdk-css-reset .-cbwsdk-connect-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.light{background-color:rgba(0,0,0,.5)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.dark{background-color:rgba(50,53,61,.4)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box{display:flex;position:relative;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container{display:block}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container-hidden{display:none}"
        },
        61166: function(e, t, r) {
            "use strict";
            var n = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ConnectDialog = void 0;
            let i = n(r(34734)),
                s = r(85350),
                o = r(95889),
                a = r(12764),
                l = r(53805),
                c = n(r(40285));
            t.ConnectDialog = e => {
                let {
                    isOpen: t,
                    darkMode: r
                } = e, [n, u] = (0, o.useState)(!t), [h, d] = (0, o.useState)(!t);
                (0, o.useEffect)(() => {
                    let e = [window.setTimeout(() => {
                        d(!t)
                    }, 10)];
                    return t ? u(!1) : e.push(window.setTimeout(() => {
                        u(!0)
                    }, 360)), () => {
                        e.forEach(window.clearTimeout)
                    }
                }, [t]);
                let f = r ? "dark" : "light";
                return (0, s.h)("div", {
                    class: (0, i.default)("-cbwsdk-connect-dialog-container", n && "-cbwsdk-connect-dialog-container-hidden")
                }, (0, s.h)("style", null, c.default), (0, s.h)("div", {
                    class: (0, i.default)("-cbwsdk-connect-dialog-backdrop", f, h && "-cbwsdk-connect-dialog-backdrop-hidden")
                }), (0, s.h)("div", {
                    class: "-cbwsdk-connect-dialog"
                }, (0, s.h)("div", {
                    class: (0, i.default)("-cbwsdk-connect-dialog-box", h && "-cbwsdk-connect-dialog-box-hidden")
                }, e.connectDisabled ? null : (0, s.h)(a.ConnectContent, {
                    theme: f,
                    version: e.version,
                    sessionId: e.sessionId,
                    sessionSecret: e.sessionSecret,
                    linkAPIUrl: e.linkAPIUrl,
                    isConnected: e.isConnected,
                    isParentConnection: e.isParentConnection,
                    chainId: e.chainId,
                    onCancel: e.onCancel
                }), (0, s.h)(l.TryExtensionContent, {
                    theme: f
                }))))
            }
        },
        93104: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LinkFlow = void 0;
            let n = r(85350),
                i = r(61166);
            class s {
                attach(e) {
                    this.root = document.createElement("div"), this.root.className = "-cbwsdk-link-flow-root", e.appendChild(this.root), this.render()
                }
                setConnected(e) {
                    this.connected !== e && (this.connected = e, this.render())
                }
                setChainId(e) {
                    this.chainId !== e && (this.chainId = e, this.render())
                }
                detach() {
                    var e;
                    this.root && ((0, n.render)(null, this.root), null === (e = this.root.parentElement) || void 0 === e || e.removeChild(this.root))
                }
                setConnectDisabled(e) {
                    this.connectDisabled = e
                }
                open(e) {
                    this.isOpen = !0, this.onCancel = e.onCancel, this.render()
                }
                close() {
                    this.isOpen = !1, this.onCancel = null, this.render()
                }
                render() {
                    this.root && (0, n.render)((0, n.h)(i.ConnectDialog, {
                        darkMode: this.darkMode,
                        version: this.version,
                        sessionId: this.sessionId,
                        sessionSecret: this.sessionSecret,
                        linkAPIUrl: this.linkAPIUrl,
                        isOpen: this.isOpen,
                        isConnected: this.connected,
                        isParentConnection: this.isParentConnection,
                        chainId: this.chainId,
                        onCancel: this.onCancel,
                        connectDisabled: this.connectDisabled
                    }), this.root)
                }
                constructor(e) {
                    this.connected = !1, this.chainId = 1, this.isOpen = !1, this.onCancel = null, this.root = null, this.connectDisabled = !1, this.darkMode = e.darkMode, this.version = e.version, this.sessionId = e.sessionId, this.sessionSecret = e.sessionSecret, this.linkAPIUrl = e.linkAPIUrl, this.isParentConnection = e.isParentConnection
                }
            }
            t.LinkFlow = s
        },
        54964: function(e, t, r) {
            "use strict";
            var n, i = r(23663).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.QRCode = void 0;
            let s = r(85350),
                o = r(95889),
                a = (n = r(10088)) && n.__esModule ? n : {
                    default: n
                };
            t.QRCode = e => {
                let [t, r] = (0, o.useState)("");
                return (0, o.useEffect)(() => {
                    var t, n;
                    let s = new a.default({
                            content: e.content,
                            background: e.bgColor || "#ffffff",
                            color: e.fgColor || "#000000",
                            container: "svg",
                            ecl: "M",
                            width: null !== (t = e.width) && void 0 !== t ? t : 256,
                            height: null !== (n = e.height) && void 0 !== n ? n : 256,
                            padding: 0,
                            image: e.image
                        }),
                        o = i.from(s.svg(), "utf8").toString("base64");
                    r("data:image/svg+xml;base64,".concat(o))
                }, [e.bgColor, e.content, e.fgColor, e.height, e.image, e.width]), t ? (0, s.h)("img", {
                    src: t,
                    alt: "QR Code"
                }) : null
            }
        },
        9287: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}"
        },
        2702: function(e, t, r) {
            "use strict";
            var n = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RedirectDialog = void 0;
            let i = n(r(34734)),
                s = r(85350),
                o = r(21089),
                a = r(58145),
                l = n(r(9287));
            class c {
                attach() {
                    let e = document.documentElement;
                    this.root = document.createElement("div"), this.root.className = "-cbwsdk-css-reset", e.appendChild(this.root), (0, o.injectCssReset)()
                }
                present(e) {
                    this.render(e)
                }
                clear() {
                    this.render(null)
                }
                render(e) {
                    this.root && ((0, s.render)(null, this.root), e && (0, s.render)((0, s.h)(u, Object.assign({}, e, {
                        onDismiss: () => {
                            this.clear()
                        }
                    })), this.root))
                }
                constructor() {
                    this.root = null
                }
            }
            t.RedirectDialog = c;
            let u = e => {
                let {
                    title: t,
                    buttonText: r,
                    darkMode: n,
                    onButtonClick: o,
                    onDismiss: c
                } = e;
                return (0, s.h)(a.SnackbarContainer, {
                    darkMode: n
                }, (0, s.h)("div", {
                    class: "-cbwsdk-redirect-dialog"
                }, (0, s.h)("style", null, l.default), (0, s.h)("div", {
                    class: "-cbwsdk-redirect-dialog-backdrop",
                    onClick: c
                }), (0, s.h)("div", {
                    class: (0, i.default)("-cbwsdk-redirect-dialog-box", n ? "dark" : "light")
                }, (0, s.h)("p", null, t), (0, s.h)("button", {
                    onClick: o
                }, r))))
            }
        },
        88027: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}"
        },
        55816: function(e, t, r) {
            "use strict";
            var n = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SnackbarInstance = t.SnackbarContainer = t.Snackbar = void 0;
            let i = n(r(34734)),
                s = r(85350),
                o = r(95889),
                a = n(r(88027));
            class l {
                attach(e) {
                    this.root = document.createElement("div"), this.root.className = "-cbwsdk-snackbar-root", e.appendChild(this.root), this.render()
                }
                presentItem(e) {
                    let t = this.nextItemKey++;
                    return this.items.set(t, e), this.render(), () => {
                        this.items.delete(t), this.render()
                    }
                }
                clear() {
                    this.items.clear(), this.render()
                }
                render() {
                    this.root && (0, s.render)((0, s.h)("div", null, (0, s.h)(t.SnackbarContainer, {
                        darkMode: this.darkMode
                    }, Array.from(this.items.entries()).map(e => {
                        let [r, n] = e;
                        return (0, s.h)(t.SnackbarInstance, Object.assign({}, n, {
                            key: r
                        }))
                    }))), this.root)
                }
                constructor(e) {
                    this.items = new Map, this.nextItemKey = 0, this.root = null, this.darkMode = e.darkMode
                }
            }
            t.Snackbar = l, t.SnackbarContainer = e => (0, s.h)("div", {
                class: (0, i.default)("-cbwsdk-snackbar-container")
            }, (0, s.h)("style", null, a.default), (0, s.h)("div", {
                class: "-cbwsdk-snackbar"
            }, e.children)), t.SnackbarInstance = e => {
                let {
                    autoExpand: t,
                    message: r,
                    menuItems: n
                } = e, [a, l] = (0, o.useState)(!0), [c, u] = (0, o.useState)(null != t && t);
                return (0, o.useEffect)(() => {
                    let e = [window.setTimeout(() => {
                        l(!1)
                    }, 1), window.setTimeout(() => {
                        u(!0)
                    }, 1e4)];
                    return () => {
                        e.forEach(window.clearTimeout)
                    }
                }), (0, s.h)("div", {
                    class: (0, i.default)("-cbwsdk-snackbar-instance", a && "-cbwsdk-snackbar-instance-hidden", c && "-cbwsdk-snackbar-instance-expanded")
                }, (0, s.h)("div", {
                    class: "-cbwsdk-snackbar-instance-header",
                    onClick: () => {
                        u(!c)
                    }
                }, (0, s.h)("img", {
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
                    class: "-cbwsdk-snackbar-instance-header-cblogo"
                }), " ", (0, s.h)("div", {
                    class: "-cbwsdk-snackbar-instance-header-message"
                }, r), (0, s.h)("div", {
                    class: "-gear-container"
                }, !c && (0, s.h)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, s.h)("circle", {
                    cx: "12",
                    cy: "12",
                    r: "12",
                    fill: "#F5F7F8"
                })), (0, s.h)("img", {
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",
                    class: "-gear-icon",
                    title: "Expand"
                }))), n && n.length > 0 && (0, s.h)("div", {
                    class: "-cbwsdk-snackbar-instance-menu"
                }, n.map((e, t) => (0, s.h)("div", {
                    class: (0, i.default)("-cbwsdk-snackbar-instance-menu-item", e.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"),
                    onClick: e.onClick,
                    key: t
                }, (0, s.h)("svg", {
                    width: e.svgWidth,
                    height: e.svgHeight,
                    viewBox: "0 0 10 11",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, s.h)("path", {
                    "fill-rule": e.defaultFillRule,
                    "clip-rule": e.defaultClipRule,
                    d: e.path,
                    fill: "#AAAAAA"
                })), (0, s.h)("span", {
                    class: (0, i.default)("-cbwsdk-snackbar-instance-menu-item-info", e.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red")
                }, e.info)))))
            }
        },
        58145: function(e, t, r) {
            "use strict";
            var n = Object.create ? function(e, t, r, n) {
                void 0 === n && (n = r);
                var i = Object.getOwnPropertyDescriptor(t, r);
                (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
                    enumerable: !0,
                    get: function() {
                        return t[r]
                    }
                }), Object.defineProperty(e, n, i)
            } : function(e, t, r, n) {
                void 0 === n && (n = r), e[n] = t[r]
            };
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
                }(r(55816), t)
        },
        99510: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = ".-cbwsdk-css-reset .-cbwsdk-spinner{display:inline-block}.-cbwsdk-css-reset .-cbwsdk-spinner svg{display:inline-block;animation:2s linear infinite -cbwsdk-spinner-svg}.-cbwsdk-css-reset .-cbwsdk-spinner svg circle{animation:1.9s ease-in-out infinite both -cbwsdk-spinner-circle;display:block;fill:rgba(0,0,0,0);stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -cbwsdk-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -cbwsdk-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}"
        },
        88058: function(e, t, r) {
            "use strict";
            var n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Spinner = void 0;
            let i = r(85350),
                s = (n = r(99510)) && n.__esModule ? n : {
                    default: n
                };
            t.Spinner = e => {
                var t;
                let r = null !== (t = e.size) && void 0 !== t ? t : 64,
                    n = e.color || "#000";
                return (0, i.h)("div", {
                    class: "-cbwsdk-spinner"
                }, (0, i.h)("style", null, s.default), (0, i.h)("svg", {
                    viewBox: "0 0 100 100",
                    xmlns: "http://www.w3.org/2000/svg",
                    style: {
                        width: r,
                        height: r
                    }
                }, (0, i.h)("circle", {
                    style: {
                        cx: 50,
                        cy: 50,
                        r: 45,
                        stroke: n
                    }
                })))
            }
        },
        98402: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = ".-cbwsdk-css-reset .-cbwsdk-try-extension{display:flex;margin-top:12px;height:202px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-try-extension.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-column-half{flex:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading{font-style:normal;font-weight:500;font-size:25px;line-height:32px;margin:0;max-width:204px}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta{appearance:none;border:none;background:none;color:#0052ff;cursor:pointer;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.light{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.dark{color:#588af5}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-wrapper{display:flex;align-items:center;margin-top:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-icon{display:block;margin-left:4px;height:14px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0;padding:0;list-style:none;height:100%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item{display:flex;align-items:center;flex-flow:nowrap;margin-top:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item:first-of-type{margin-top:0}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon-wrapper{display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon{display:flex;height:32px;width:32px;border-radius:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.light{background:#eef0f3}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.dark{background:#1e2025}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy{display:block;font-weight:400;font-size:14px;line-height:20px;padding-left:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.light{color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.dark{color:#8a919e}"
        },
        53805: function(e, t, r) {
            "use strict";
            var n = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TryExtensionContent = void 0;
            let i = n(r(34734)),
                s = r(85350),
                o = r(95889),
                a = r(67307),
                l = r(21503),
                c = r(70828),
                u = n(r(98402));
            t.TryExtensionContent = function(e) {
                let {
                    theme: t
                } = e, [r, n] = (0, o.useState)(!1), h = (0, o.useCallback)(() => {
                    window.open("https://api.wallet.coinbase.com/rpc/v2/desktop/chrome", "_blank")
                }, []), d = (0, o.useCallback)(() => {
                    r ? window.location.reload() : (h(), n(!0))
                }, [h, r]);
                return (0, s.h)("div", {
                    class: (0, i.default)("-cbwsdk-try-extension", t)
                }, (0, s.h)("style", null, u.default), (0, s.h)("div", {
                    class: "-cbwsdk-try-extension-column-half"
                }, (0, s.h)("h3", {
                    class: (0, i.default)("-cbwsdk-try-extension-heading", t)
                }, "Or try the Coinbase Wallet browser extension"), (0, s.h)("div", {
                    class: "-cbwsdk-try-extension-cta-wrapper"
                }, (0, s.h)("button", {
                    class: (0, i.default)("-cbwsdk-try-extension-cta", t),
                    onClick: d
                }, r ? "Refresh" : "Install"), (0, s.h)("div", null, !r && (0, s.h)(a.ArrowLeftIcon, {
                    class: "-cbwsdk-try-extension-cta-icon",
                    fill: "light" === t ? "#0052FF" : "#588AF5"
                })))), (0, s.h)("div", {
                    class: "-cbwsdk-try-extension-column-half"
                }, (0, s.h)("ul", {
                    class: "-cbwsdk-try-extension-list"
                }, (0, s.h)("li", {
                    class: "-cbwsdk-try-extension-list-item"
                }, (0, s.h)("div", {
                    class: "-cbwsdk-try-extension-list-item-icon-wrapper"
                }, (0, s.h)("span", {
                    class: (0, i.default)("-cbwsdk-try-extension-list-item-icon", t)
                }, (0, s.h)(l.LaptopIcon, {
                    fill: "light" === t ? "#0A0B0D" : "#FFFFFF"
                }))), (0, s.h)("div", {
                    class: (0, i.default)("-cbwsdk-try-extension-list-item-copy", t)
                }, "Connect with dapps with just one click on your desktop browser")), (0, s.h)("li", {
                    class: "-cbwsdk-try-extension-list-item"
                }, (0, s.h)("div", {
                    class: "-cbwsdk-try-extension-list-item-icon-wrapper"
                }, (0, s.h)("span", {
                    class: (0, i.default)("-cbwsdk-try-extension-list-item-icon", t)
                }, (0, s.h)(c.SafeIcon, {
                    fill: "light" === t ? "#0A0B0D" : "#FFFFFF"
                }))), (0, s.h)("div", {
                    class: (0, i.default)("-cbwsdk-try-extension-list-item-copy", t)
                }, "Add an additional layer of security by using a supported Ledger hardware wallet")))))
            }
        },
        67307: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ArrowLeftIcon = void 0;
            let n = r(85350);
            t.ArrowLeftIcon = function(e) {
                return (0, n.h)("svg", Object.assign({
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), (0, n.h)("path", {
                    d: "M8.60675 0.155884L7.37816 1.28209L12.7723 7.16662H0V8.83328H12.6548L6.82149 14.6666L8 15.8451L15.8201 8.02501L8.60675 0.155884Z"
                }))
            }
        },
        58750: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CloseIcon = void 0;
            let n = r(85350);
            t.CloseIcon = function(e) {
                return (0, n.h)("svg", Object.assign({
                    width: "40",
                    height: "40",
                    viewBox: "0 0 40 40",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), (0, n.h)("path", {
                    d: "M13.7677 13L12.3535 14.4142L18.3535 20.4142L12.3535 26.4142L13.7677 27.8284L19.7677 21.8284L25.7677 27.8284L27.1819 26.4142L21.1819 20.4142L27.1819 14.4142L25.7677 13L19.7677 19L13.7677 13Z"
                }))
            }
        },
        6585: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CoinbaseWalletRound = void 0;
            let n = r(85350);
            t.CoinbaseWalletRound = function(e) {
                return (0, n.h)("svg", Object.assign({
                    width: "28",
                    height: "28",
                    viewBox: "0 0 28 28",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), (0, n.h)("circle", {
                    cx: "14",
                    cy: "14",
                    r: "14",
                    fill: "#0052FF"
                }), (0, n.h)("path", {
                    d: "M23.8521 14.0003C23.8521 19.455 19.455 23.8521 14.0003 23.8521C8.54559 23.8521 4.14844 19.455 4.14844 14.0003C4.14844 8.54559 8.54559 4.14844 14.0003 4.14844C19.455 4.14844 23.8521 8.54559 23.8521 14.0003Z",
                    fill: "white"
                }), (0, n.h)("path", {
                    d: "M11.1855 12.5042C11.1855 12.0477 11.1855 11.7942 11.2835 11.642C11.3814 11.4899 11.4793 11.3377 11.6261 11.287C11.8219 11.1855 12.0178 11.1855 12.5073 11.1855H15.4934C15.983 11.1855 16.1788 11.1855 16.3746 11.287C16.5215 11.3884 16.6683 11.4899 16.7173 11.642C16.8152 11.8449 16.8152 12.0477 16.8152 12.5042V15.4965C16.8152 15.953 16.8152 16.2066 16.7173 16.3587C16.6194 16.5109 16.5215 16.663 16.3746 16.7137C16.1788 16.8152 15.983 16.8152 15.4934 16.8152H12.5073C12.0178 16.8152 11.8219 16.8152 11.6261 16.7137C11.4793 16.6123 11.3324 16.5109 11.2835 16.3587C11.1855 16.1558 11.1855 15.953 11.1855 15.4965V12.5042Z",
                    fill: "#0052FF"
                }))
            }
        },
        21503: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LaptopIcon = void 0;
            let n = r(85350);
            t.LaptopIcon = function(e) {
                return (0, n.h)("svg", Object.assign({
                    width: "14",
                    height: "14",
                    viewBox: "0 0 14 14",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), (0, n.h)("path", {
                    d: "M1.8001 2.2002H12.2001V9.40019H1.8001V2.2002ZM3.4001 3.8002V7.80019H10.6001V3.8002H3.4001Z"
                }), (0, n.h)("path", {
                    d: "M13.4001 10.2002H0.600098C0.600098 11.0838 1.31644 11.8002 2.2001 11.8002H11.8001C12.6838 11.8002 13.4001 11.0838 13.4001 10.2002Z"
                }))
            }
        },
        70983: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.QRCodeIcon = void 0;
            let n = r(85350);
            t.QRCodeIcon = function(e) {
                return (0, n.h)("svg", Object.assign({
                    width: "18",
                    height: "18",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), (0, n.h)("path", {
                    d: "M3 3V8.99939L5 8.99996V5H9V3H3Z"
                }), (0, n.h)("path", {
                    d: "M15 21L21 21V15.0006L19 15V19L15 19V21Z"
                }), (0, n.h)("path", {
                    d: "M21 9H19V5H15.0006L15 3H21V9Z"
                }), (0, n.h)("path", {
                    d: "M3 15V21H8.99939L8.99996 19H5L5 15H3Z"
                }))
            }
        },
        70828: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SafeIcon = void 0;
            let n = r(85350);
            t.SafeIcon = function(e) {
                return (0, n.h)("svg", Object.assign({
                    width: "14",
                    height: "14",
                    viewBox: "0 0 14 14",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), (0, n.h)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M0.600098 0.600098V11.8001H13.4001V0.600098H0.600098ZM7.0001 9.2001C5.3441 9.2001 4.0001 7.8561 4.0001 6.2001C4.0001 4.5441 5.3441 3.2001 7.0001 3.2001C8.6561 3.2001 10.0001 4.5441 10.0001 6.2001C10.0001 7.8561 8.6561 9.2001 7.0001 9.2001ZM0.600098 12.6001H3.8001V13.4001H0.600098V12.6001ZM10.2001 12.6001H13.4001V13.4001H10.2001V12.6001ZM8.8001 6.2001C8.8001 7.19421 7.99421 8.0001 7.0001 8.0001C6.00598 8.0001 5.2001 7.19421 5.2001 6.2001C5.2001 5.20598 6.00598 4.4001 7.0001 4.4001C7.99421 4.4001 8.8001 5.20598 8.8001 6.2001Z"
                }))
            }
        },
        35272: function(e, t, r) {
            "use strict";
            var n = r(23663).Buffer;
            let i = r(74921),
                s = r(34108);

            function o(e) {
                if (e.startsWith("int[")) return "int256" + e.slice(3);
                if ("int" === e) return "int256";
                if (e.startsWith("uint[")) return "uint256" + e.slice(4);
                if ("uint" === e) return "uint256";
                if (e.startsWith("fixed[")) return "fixed128x128" + e.slice(5);
                if ("fixed" === e) return "fixed128x128";
                if (e.startsWith("ufixed[")) return "ufixed128x128" + e.slice(6);
                else if ("ufixed" === e) return "ufixed128x128";
                return e
            }

            function a(e) {
                return parseInt(/^\D+(\d+)$/.exec(e)[1], 10)
            }

            function l(e) {
                var t = /^\D+(\d+)x(\d+)$/.exec(e);
                return [parseInt(t[1], 10), parseInt(t[2], 10)]
            }

            function c(e) {
                var t = e.match(/(.*)\[(.*?)\]$/);
                return t ? "" === t[2] ? "dynamic" : parseInt(t[2], 10) : null
            }

            function u(e) {
                var t = typeof e;
                if ("string" === t) return i.isHexString(e) ? new s(i.stripHexPrefix(e), 16) : new s(e, 10);
                if ("number" === t) return new s(e);
                if (e.toArray) return e;
                throw Error("Argument is not a number")
            }

            function h(e, t) {
                if ("address" === e) return h("uint160", u(t));
                if ("bool" === e) return h("uint8", t ? 1 : 0);
                if ("string" === e) return h("bytes", new n(t, "utf8"));
                if ((p = e).lastIndexOf("]") === p.length - 1) {
                    if (void 0 === t.length) throw Error("Not an array?");
                    if ("dynamic" !== (r = c(e)) && 0 !== r && t.length > r) throw Error("Elements exceed array size: " + r);
                    for (f in d = [], e = e.slice(0, e.lastIndexOf("[")), "string" == typeof t && (t = JSON.parse(t)), t) d.push(h(e, t[f]));
                    if ("dynamic" === r) {
                        var r, o, d, f, p, g = h("uint256", t.length);
                        d.unshift(g)
                    }
                    return n.concat(d)
                }
                if ("bytes" === e) return t = new n(t), d = n.concat([h("uint256", t.length), t]), t.length % 32 != 0 && (d = n.concat([d, i.zeros(32 - t.length % 32)])), d;
                if (e.startsWith("bytes")) {
                    if ((r = a(e)) < 1 || r > 32) throw Error("Invalid bytes<N> width: " + r);
                    return i.setLengthRight(t, 32)
                } else if (e.startsWith("uint")) {
                    if ((r = a(e)) % 8 || r < 8 || r > 256) throw Error("Invalid uint<N> width: " + r);
                    if ((o = u(t)).bitLength() > r) throw Error("Supplied uint exceeds width: " + r + " vs " + o.bitLength());
                    if (o < 0) throw Error("Supplied uint is negative");
                    return o.toArrayLike(n, "be", 32)
                } else if (e.startsWith("int")) {
                    if ((r = a(e)) % 8 || r < 8 || r > 256) throw Error("Invalid int<N> width: " + r);
                    if ((o = u(t)).bitLength() > r) throw Error("Supplied int exceeds width: " + r + " vs " + o.bitLength());
                    return o.toTwos(256).toArrayLike(n, "be", 32)
                } else if (e.startsWith("ufixed")) {
                    if (r = l(e), (o = u(t)) < 0) throw Error("Supplied ufixed is negative");
                    return h("uint256", o.mul(new s(2).pow(new s(r[1]))))
                } else if (e.startsWith("fixed")) return r = l(e), h("int256", u(t).mul(new s(2).pow(new s(r[1]))));
                throw Error("Unsupported or invalid type: " + e)
            }

            function d(e, t) {
                if (e.length !== t.length) throw Error("Number of types are not matching the values");
                for (var r, s, l = [], c = 0; c < e.length; c++) {
                    var h = o(e[c]),
                        d = t[c];
                    if ("bytes" === h) l.push(d);
                    else if ("string" === h) l.push(new n(d, "utf8"));
                    else if ("bool" === h) l.push(new n(d ? "01" : "00", "hex"));
                    else if ("address" === h) l.push(i.setLength(d, 20));
                    else if (h.startsWith("bytes")) {
                        if ((r = a(h)) < 1 || r > 32) throw Error("Invalid bytes<N> width: " + r);
                        l.push(i.setLengthRight(d, r))
                    } else if (h.startsWith("uint")) {
                        if ((r = a(h)) % 8 || r < 8 || r > 256) throw Error("Invalid uint<N> width: " + r);
                        if ((s = u(d)).bitLength() > r) throw Error("Supplied uint exceeds width: " + r + " vs " + s.bitLength());
                        l.push(s.toArrayLike(n, "be", r / 8))
                    } else if (h.startsWith("int")) {
                        if ((r = a(h)) % 8 || r < 8 || r > 256) throw Error("Invalid int<N> width: " + r);
                        if ((s = u(d)).bitLength() > r) throw Error("Supplied int exceeds width: " + r + " vs " + s.bitLength());
                        l.push(s.toTwos(r).toArrayLike(n, "be", r / 8))
                    } else throw Error("Unsupported or invalid type: " + h)
                }
                return n.concat(l)
            }
            e.exports = {
                rawEncode: function(e, t) {
                    var r = [],
                        i = [],
                        s = 32 * e.length;
                    for (var a in e) {
                        var l = o(e[a]),
                            u = h(l, t[a]);
                        "string" === l || "bytes" === l || "dynamic" === c(l) ? (r.push(h("uint256", s)), i.push(u), s += u.length) : r.push(u)
                    }
                    return n.concat(r.concat(i))
                },
                solidityPack: d,
                soliditySHA3: function(e, t) {
                    return i.keccak(d(e, t))
                }
            }
        },
        50092: function(e, t, r) {
            "use strict";
            var n = r(23663).Buffer;
            let i = r(74921),
                s = r(35272),
                o = {
                    type: "object",
                    properties: {
                        types: {
                            type: "object",
                            additionalProperties: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        name: {
                                            type: "string"
                                        },
                                        type: {
                                            type: "string"
                                        }
                                    },
                                    required: ["name", "type"]
                                }
                            }
                        },
                        primaryType: {
                            type: "string"
                        },
                        domain: {
                            type: "object"
                        },
                        message: {
                            type: "object"
                        }
                    },
                    required: ["types", "primaryType", "domain", "message"]
                },
                a = {
                    encodeData(e, t, r) {
                        let o = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                            a = ["bytes32"],
                            l = [this.hashType(e, r)];
                        if (o) {
                            let c = (e, t, a) => {
                                if (void 0 !== r[t]) return ["bytes32", null == a ? "0x0000000000000000000000000000000000000000000000000000000000000000" : i.keccak(this.encodeData(t, a, r, o))];
                                if (void 0 === a) throw Error("missing value for field ".concat(e, " of type ").concat(t));
                                if ("bytes" === t) return ["bytes32", i.keccak(a)];
                                if ("string" === t) return "string" == typeof a && (a = n.from(a, "utf8")), ["bytes32", i.keccak(a)];
                                if (t.lastIndexOf("]") === t.length - 1) {
                                    let r = t.slice(0, t.lastIndexOf("[")),
                                        n = a.map(t => c(e, r, t));
                                    return ["bytes32", i.keccak(s.rawEncode(n.map(e => {
                                        let [t] = e;
                                        return t
                                    }), n.map(e => {
                                        let [, t] = e;
                                        return t
                                    })))]
                                }
                                return [t, a]
                            };
                            for (let n of r[e]) {
                                let [e, r] = c(n.name, n.type, t[n.name]);
                                a.push(e), l.push(r)
                            }
                        } else
                            for (let s of r[e]) {
                                let e = t[s.name];
                                if (void 0 !== e) {
                                    if ("bytes" === s.type) a.push("bytes32"), e = i.keccak(e), l.push(e);
                                    else if ("string" === s.type) a.push("bytes32"), "string" == typeof e && (e = n.from(e, "utf8")), e = i.keccak(e), l.push(e);
                                    else if (void 0 !== r[s.type]) a.push("bytes32"), e = i.keccak(this.encodeData(s.type, e, r, o)), l.push(e);
                                    else if (s.type.lastIndexOf("]") === s.type.length - 1) throw Error("Arrays currently unimplemented in encodeData");
                                    else a.push(s.type), l.push(e)
                                }
                            }
                        return s.rawEncode(a, l)
                    },
                    encodeType(e, t) {
                        let r = "",
                            n = this.findTypeDependencies(e, t).filter(t => t !== e);
                        for (let i of n = [e].concat(n.sort())) {
                            if (!t[i]) throw Error("No type definition specified: " + i);
                            r += i + "(" + t[i].map(e => {
                                let {
                                    name: t,
                                    type: r
                                } = e;
                                return r + " " + t
                            }).join(",") + ")"
                        }
                        return r
                    },
                    findTypeDependencies(e, t) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        if (e = e.match(/^\w*/)[0], r.includes(e) || void 0 === t[e]) return r;
                        for (let n of (r.push(e), t[e]))
                            for (let e of this.findTypeDependencies(n.type, t, r)) r.includes(e) || r.push(e);
                        return r
                    },
                    hashStruct(e, t, r) {
                        let n = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                        return i.keccak(this.encodeData(e, t, r, n))
                    },
                    hashType(e, t) {
                        return i.keccak(this.encodeType(e, t))
                    },
                    sanitizeData(e) {
                        let t = {};
                        for (let r in o.properties) e[r] && (t[r] = e[r]);
                        return t.types && (t.types = Object.assign({
                            EIP712Domain: []
                        }, t.types)), t
                    },
                    hash(e) {
                        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            r = this.sanitizeData(e),
                            s = [n.from("1901", "hex")];
                        return s.push(this.hashStruct("EIP712Domain", r.domain, r.types, t)), "EIP712Domain" !== r.primaryType && s.push(this.hashStruct(r.primaryType, r.message, r.types, t)), i.keccak(n.concat(s))
                    }
                };
            e.exports = {
                TYPED_MESSAGE_SCHEMA: o,
                TypedDataUtils: a,
                hashForSignTypedDataLegacy: function(e) {
                    return function(e) {
                        let t = Error("Expect argument to be non-empty array");
                        if ("object" != typeof e || !e.length) throw t;
                        let r = e.map(function(e) {
                                return "bytes" === e.type ? i.toBuffer(e.value) : e.value
                            }),
                            n = e.map(function(e) {
                                return e.type
                            }),
                            o = e.map(function(e) {
                                if (!e.name) throw t;
                                return e.type + " " + e.name
                            });
                        return s.soliditySHA3(["bytes32", "bytes32"], [s.soliditySHA3(Array(e.length).fill("string"), o), s.soliditySHA3(n, r)])
                    }(e.data)
                },
                hashForSignTypedData_v3: function(e) {
                    return a.hash(e.data, !1)
                },
                hashForSignTypedData_v4: function(e) {
                    return a.hash(e.data)
                }
            }
        },
        74921: function(e, t, r) {
            "use strict";
            var n = r(23663).Buffer;
            let i = r(65502),
                s = r(34108);

            function o(e) {
                return n.allocUnsafe(e).fill(0)
            }

            function a(e, t, r) {
                let n = o(t);
                return (e = l(e), r) ? e.length < t ? (e.copy(n), n) : e.slice(0, t) : e.length < t ? (e.copy(n, t - e.length), n) : e.slice(-t)
            }

            function l(e) {
                if (!n.isBuffer(e)) {
                    if (Array.isArray(e)) e = n.from(e);
                    else if ("string" == typeof e) {
                        var t;
                        e = c(e) ? n.from((t = u(e)).length % 2 ? "0" + t : t, "hex") : n.from(e)
                    } else if ("number" == typeof e) e = intToBuffer(e);
                    else if (null == e) e = n.allocUnsafe(0);
                    else if (s.isBN(e)) e = e.toArrayLike(n);
                    else if (e.toArray) e = n.from(e.toArray());
                    else throw Error("invalid type")
                }
                return e
            }

            function c(e) {
                return "string" == typeof e && e.match(/^0x[0-9A-Fa-f]*$/)
            }

            function u(e) {
                return "string" == typeof e && e.startsWith("0x") ? e.slice(2) : e
            }
            e.exports = {
                zeros: o,
                setLength: a,
                setLengthRight: function(e, t) {
                    return a(e, t, !0)
                },
                isHexString: c,
                stripHexPrefix: u,
                toBuffer: l,
                bufferToHex: function(e) {
                    return "0x" + (e = l(e)).toString("hex")
                },
                keccak: function(e, t) {
                    return e = l(e), t || (t = 256), i("keccak" + t).update(e).digest()
                }
            }
        },
        10088: function(e) {
            "use strict";

            function t(e) {
                this.mode = n.MODE_8BIT_BYTE, this.data = e, this.parsedData = [];
                for (var t = 0, r = this.data.length; t < r; t++) {
                    var i = [],
                        s = this.data.charCodeAt(t);
                    s > 65536 ? (i[0] = 240 | (1835008 & s) >>> 18, i[1] = 128 | (258048 & s) >>> 12, i[2] = 128 | (4032 & s) >>> 6, i[3] = 128 | 63 & s) : s > 2048 ? (i[0] = 224 | (61440 & s) >>> 12, i[1] = 128 | (4032 & s) >>> 6, i[2] = 128 | 63 & s) : s > 128 ? (i[0] = 192 | (1984 & s) >>> 6, i[1] = 128 | 63 & s) : i[0] = s, this.parsedData.push(i)
                }
                this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
            }

            function r(e, t) {
                this.typeNumber = e, this.errorCorrectLevel = t, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
            }
            t.prototype = {
                getLength: function(e) {
                    return this.parsedData.length
                },
                write: function(e) {
                    for (var t = 0, r = this.parsedData.length; t < r; t++) e.put(this.parsedData[t], 8)
                }
            }, r.prototype = {
                addData: function(e) {
                    var r = new t(e);
                    this.dataList.push(r), this.dataCache = null
                },
                isDark: function(e, t) {
                    if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t) throw Error(e + "," + t);
                    return this.modules[e][t]
                },
                getModuleCount: function() {
                    return this.moduleCount
                },
                make: function() {
                    this.makeImpl(!1, this.getBestMaskPattern())
                },
                makeImpl: function(e, t) {
                    this.moduleCount = 4 * this.typeNumber + 17, this.modules = Array(this.moduleCount);
                    for (var n = 0; n < this.moduleCount; n++) {
                        this.modules[n] = Array(this.moduleCount);
                        for (var i = 0; i < this.moduleCount; i++) this.modules[n][i] = null
                    }
                    this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(e, t), this.typeNumber >= 7 && this.setupTypeNumber(e), null == this.dataCache && (this.dataCache = r.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, t)
                },
                setupPositionProbePattern: function(e, t) {
                    for (var r = -1; r <= 7; r++)
                        if (!(e + r <= -1) && !(this.moduleCount <= e + r))
                            for (var n = -1; n <= 7; n++) t + n <= -1 || this.moduleCount <= t + n || (0 <= r && r <= 6 && (0 == n || 6 == n) || 0 <= n && n <= 6 && (0 == r || 6 == r) || 2 <= r && r <= 4 && 2 <= n && n <= 4 ? this.modules[e + r][t + n] = !0 : this.modules[e + r][t + n] = !1)
                },
                getBestMaskPattern: function() {
                    for (var e = 0, t = 0, r = 0; r < 8; r++) {
                        this.makeImpl(!0, r);
                        var n = o.getLostPoint(this);
                        (0 == r || e > n) && (e = n, t = r)
                    }
                    return t
                },
                createMovieClip: function(e, t, r) {
                    var n = e.createEmptyMovieClip(t, r);
                    this.make();
                    for (var i = 0; i < this.modules.length; i++)
                        for (var s = 1 * i, o = 0; o < this.modules[i].length; o++) {
                            var a = 1 * o;
                            this.modules[i][o] && (n.beginFill(0, 100), n.moveTo(a, s), n.lineTo(a + 1, s), n.lineTo(a + 1, s + 1), n.lineTo(a, s + 1), n.endFill())
                        }
                    return n
                },
                setupTimingPattern: function() {
                    for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[e][6] && (this.modules[e][6] = e % 2 == 0);
                    for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0)
                },
                setupPositionAdjustPattern: function() {
                    for (var e = o.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++)
                        for (var r = 0; r < e.length; r++) {
                            var n = e[t],
                                i = e[r];
                            if (null == this.modules[n][i])
                                for (var s = -2; s <= 2; s++)
                                    for (var a = -2; a <= 2; a++) - 2 == s || 2 == s || -2 == a || 2 == a || 0 == s && 0 == a ? this.modules[n + s][i + a] = !0 : this.modules[n + s][i + a] = !1
                        }
                },
                setupTypeNumber: function(e) {
                    for (var t = o.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
                        var n = !e && (t >> r & 1) == 1;
                        this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = n
                    }
                    for (var r = 0; r < 18; r++) {
                        var n = !e && (t >> r & 1) == 1;
                        this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = n
                    }
                },
                setupTypeInfo: function(e, t) {
                    for (var r = this.errorCorrectLevel << 3 | t, n = o.getBCHTypeInfo(r), i = 0; i < 15; i++) {
                        var s = !e && (n >> i & 1) == 1;
                        i < 6 ? this.modules[i][8] = s : i < 8 ? this.modules[i + 1][8] = s : this.modules[this.moduleCount - 15 + i][8] = s
                    }
                    for (var i = 0; i < 15; i++) {
                        var s = !e && (n >> i & 1) == 1;
                        i < 8 ? this.modules[8][this.moduleCount - i - 1] = s : i < 9 ? this.modules[8][15 - i - 1 + 1] = s : this.modules[8][15 - i - 1] = s
                    }
                    this.modules[this.moduleCount - 8][8] = !e
                },
                mapData: function(e, t) {
                    for (var r = -1, n = this.moduleCount - 1, i = 7, s = 0, a = this.moduleCount - 1; a > 0; a -= 2)
                        for (6 == a && a--;;) {
                            for (var l = 0; l < 2; l++)
                                if (null == this.modules[n][a - l]) {
                                    var c = !1;
                                    s < e.length && (c = (e[s] >>> i & 1) == 1), o.getMask(t, n, a - l) && (c = !c), this.modules[n][a - l] = c, -1 == --i && (s++, i = 7)
                                }
                            if ((n += r) < 0 || this.moduleCount <= n) {
                                n -= r, r = -r;
                                break
                            }
                        }
                }
            }, r.PAD0 = 236, r.PAD1 = 17, r.createData = function(e, t, n) {
                for (var i = u.getRSBlocks(e, t), s = new h, a = 0; a < n.length; a++) {
                    var l = n[a];
                    s.put(l.mode, 4), s.put(l.getLength(), o.getLengthInBits(l.mode, e)), l.write(s)
                }
                for (var c = 0, a = 0; a < i.length; a++) c += i[a].dataCount;
                if (s.getLengthInBits() > 8 * c) throw Error("code length overflow. (" + s.getLengthInBits() + ">" + 8 * c + ")");
                for (s.getLengthInBits() + 4 <= 8 * c && s.put(0, 4); s.getLengthInBits() % 8 != 0;) s.putBit(!1);
                for (; !(s.getLengthInBits() >= 8 * c) && (s.put(r.PAD0, 8), !(s.getLengthInBits() >= 8 * c));) s.put(r.PAD1, 8);
                return r.createBytes(s, i)
            }, r.createBytes = function(e, t) {
                for (var r = 0, n = 0, i = 0, s = Array(t.length), a = Array(t.length), l = 0; l < t.length; l++) {
                    var u = t[l].dataCount,
                        h = t[l].totalCount - u;
                    n = Math.max(n, u), i = Math.max(i, h), s[l] = Array(u);
                    for (var d = 0; d < s[l].length; d++) s[l][d] = 255 & e.buffer[d + r];
                    r += u;
                    var f = o.getErrorCorrectPolynomial(h),
                        p = new c(s[l], f.getLength() - 1).mod(f);
                    a[l] = Array(f.getLength() - 1);
                    for (var d = 0; d < a[l].length; d++) {
                        var g = d + p.getLength() - a[l].length;
                        a[l][d] = g >= 0 ? p.get(g) : 0
                    }
                }
                for (var m = 0, d = 0; d < t.length; d++) m += t[d].totalCount;
                for (var y = Array(m), v = 0, d = 0; d < n; d++)
                    for (var l = 0; l < t.length; l++) d < s[l].length && (y[v++] = s[l][d]);
                for (var d = 0; d < i; d++)
                    for (var l = 0; l < t.length; l++) d < a[l].length && (y[v++] = a[l][d]);
                return y
            };
            for (var n = {
                    MODE_NUMBER: 1,
                    MODE_ALPHA_NUM: 2,
                    MODE_8BIT_BYTE: 4,
                    MODE_KANJI: 8
                }, i = {
                    L: 1,
                    M: 0,
                    Q: 3,
                    H: 2
                }, s = {
                    PATTERN000: 0,
                    PATTERN001: 1,
                    PATTERN010: 2,
                    PATTERN011: 3,
                    PATTERN100: 4,
                    PATTERN101: 5,
                    PATTERN110: 6,
                    PATTERN111: 7
                }, o = {
                    PATTERN_POSITION_TABLE: [
                        [],
                        [6, 18],
                        [6, 22],
                        [6, 26],
                        [6, 30],
                        [6, 34],
                        [6, 22, 38],
                        [6, 24, 42],
                        [6, 26, 46],
                        [6, 28, 50],
                        [6, 30, 54],
                        [6, 32, 58],
                        [6, 34, 62],
                        [6, 26, 46, 66],
                        [6, 26, 48, 70],
                        [6, 26, 50, 74],
                        [6, 30, 54, 78],
                        [6, 30, 56, 82],
                        [6, 30, 58, 86],
                        [6, 34, 62, 90],
                        [6, 28, 50, 72, 94],
                        [6, 26, 50, 74, 98],
                        [6, 30, 54, 78, 102],
                        [6, 28, 54, 80, 106],
                        [6, 32, 58, 84, 110],
                        [6, 30, 58, 86, 114],
                        [6, 34, 62, 90, 118],
                        [6, 26, 50, 74, 98, 122],
                        [6, 30, 54, 78, 102, 126],
                        [6, 26, 52, 78, 104, 130],
                        [6, 30, 56, 82, 108, 134],
                        [6, 34, 60, 86, 112, 138],
                        [6, 30, 58, 86, 114, 142],
                        [6, 34, 62, 90, 118, 146],
                        [6, 30, 54, 78, 102, 126, 150],
                        [6, 24, 50, 76, 102, 128, 154],
                        [6, 28, 54, 80, 106, 132, 158],
                        [6, 32, 58, 84, 110, 136, 162],
                        [6, 26, 54, 82, 110, 138, 166],
                        [6, 30, 58, 86, 114, 142, 170]
                    ],
                    G15: 1335,
                    G18: 7973,
                    G15_MASK: 21522,
                    getBCHTypeInfo: function(e) {
                        for (var t = e << 10; o.getBCHDigit(t) - o.getBCHDigit(o.G15) >= 0;) t ^= o.G15 << o.getBCHDigit(t) - o.getBCHDigit(o.G15);
                        return (e << 10 | t) ^ o.G15_MASK
                    },
                    getBCHTypeNumber: function(e) {
                        for (var t = e << 12; o.getBCHDigit(t) - o.getBCHDigit(o.G18) >= 0;) t ^= o.G18 << o.getBCHDigit(t) - o.getBCHDigit(o.G18);
                        return e << 12 | t
                    },
                    getBCHDigit: function(e) {
                        for (var t = 0; 0 != e;) t++, e >>>= 1;
                        return t
                    },
                    getPatternPosition: function(e) {
                        return o.PATTERN_POSITION_TABLE[e - 1]
                    },
                    getMask: function(e, t, r) {
                        switch (e) {
                            case s.PATTERN000:
                                return (t + r) % 2 == 0;
                            case s.PATTERN001:
                                return t % 2 == 0;
                            case s.PATTERN010:
                                return r % 3 == 0;
                            case s.PATTERN011:
                                return (t + r) % 3 == 0;
                            case s.PATTERN100:
                                return (Math.floor(t / 2) + Math.floor(r / 3)) % 2 == 0;
                            case s.PATTERN101:
                                return t * r % 2 + t * r % 3 == 0;
                            case s.PATTERN110:
                                return (t * r % 2 + t * r % 3) % 2 == 0;
                            case s.PATTERN111:
                                return (t * r % 3 + (t + r) % 2) % 2 == 0;
                            default:
                                throw Error("bad maskPattern:" + e)
                        }
                    },
                    getErrorCorrectPolynomial: function(e) {
                        for (var t = new c([1], 0), r = 0; r < e; r++) t = t.multiply(new c([1, a.gexp(r)], 0));
                        return t
                    },
                    getLengthInBits: function(e, t) {
                        if (1 <= t && t < 10) switch (e) {
                            case n.MODE_NUMBER:
                                return 10;
                            case n.MODE_ALPHA_NUM:
                                return 9;
                            case n.MODE_8BIT_BYTE:
                            case n.MODE_KANJI:
                                return 8;
                            default:
                                throw Error("mode:" + e)
                        } else if (t < 27) switch (e) {
                            case n.MODE_NUMBER:
                                return 12;
                            case n.MODE_ALPHA_NUM:
                                return 11;
                            case n.MODE_8BIT_BYTE:
                                return 16;
                            case n.MODE_KANJI:
                                return 10;
                            default:
                                throw Error("mode:" + e)
                        } else if (t < 41) switch (e) {
                            case n.MODE_NUMBER:
                                return 14;
                            case n.MODE_ALPHA_NUM:
                                return 13;
                            case n.MODE_8BIT_BYTE:
                                return 16;
                            case n.MODE_KANJI:
                                return 12;
                            default:
                                throw Error("mode:" + e)
                        } else throw Error("type:" + t)
                    },
                    getLostPoint: function(e) {
                        for (var t = e.getModuleCount(), r = 0, n = 0; n < t; n++)
                            for (var i = 0; i < t; i++) {
                                for (var s = 0, o = e.isDark(n, i), a = -1; a <= 1; a++)
                                    if (!(n + a < 0) && !(t <= n + a))
                                        for (var l = -1; l <= 1; l++) !(i + l < 0) && !(t <= i + l) && (0 != a || 0 != l) && o == e.isDark(n + a, i + l) && s++;
                                s > 5 && (r += 3 + s - 5)
                            }
                        for (var n = 0; n < t - 1; n++)
                            for (var i = 0; i < t - 1; i++) {
                                var c = 0;
                                e.isDark(n, i) && c++, e.isDark(n + 1, i) && c++, e.isDark(n, i + 1) && c++, e.isDark(n + 1, i + 1) && c++, (0 == c || 4 == c) && (r += 3)
                            }
                        for (var n = 0; n < t; n++)
                            for (var i = 0; i < t - 6; i++) e.isDark(n, i) && !e.isDark(n, i + 1) && e.isDark(n, i + 2) && e.isDark(n, i + 3) && e.isDark(n, i + 4) && !e.isDark(n, i + 5) && e.isDark(n, i + 6) && (r += 40);
                        for (var i = 0; i < t; i++)
                            for (var n = 0; n < t - 6; n++) e.isDark(n, i) && !e.isDark(n + 1, i) && e.isDark(n + 2, i) && e.isDark(n + 3, i) && e.isDark(n + 4, i) && !e.isDark(n + 5, i) && e.isDark(n + 6, i) && (r += 40);
                        for (var u = 0, i = 0; i < t; i++)
                            for (var n = 0; n < t; n++) e.isDark(n, i) && u++;
                        return r + Math.abs(100 * u / t / t - 50) / 5 * 10
                    }
                }, a = {
                    glog: function(e) {
                        if (e < 1) throw Error("glog(" + e + ")");
                        return a.LOG_TABLE[e]
                    },
                    gexp: function(e) {
                        for (; e < 0;) e += 255;
                        for (; e >= 256;) e -= 255;
                        return a.EXP_TABLE[e]
                    },
                    EXP_TABLE: Array(256),
                    LOG_TABLE: Array(256)
                }, l = 0; l < 8; l++) a.EXP_TABLE[l] = 1 << l;
            for (var l = 8; l < 256; l++) a.EXP_TABLE[l] = a.EXP_TABLE[l - 4] ^ a.EXP_TABLE[l - 5] ^ a.EXP_TABLE[l - 6] ^ a.EXP_TABLE[l - 8];
            for (var l = 0; l < 255; l++) a.LOG_TABLE[a.EXP_TABLE[l]] = l;

            function c(e, t) {
                if (void 0 == e.length) throw Error(e.length + "/" + t);
                for (var r = 0; r < e.length && 0 == e[r];) r++;
                this.num = Array(e.length - r + t);
                for (var n = 0; n < e.length - r; n++) this.num[n] = e[n + r]
            }

            function u(e, t) {
                this.totalCount = e, this.dataCount = t
            }

            function h() {
                this.buffer = [], this.length = 0
            }
            c.prototype = {
                get: function(e) {
                    return this.num[e]
                },
                getLength: function() {
                    return this.num.length
                },
                multiply: function(e) {
                    for (var t = Array(this.getLength() + e.getLength() - 1), r = 0; r < this.getLength(); r++)
                        for (var n = 0; n < e.getLength(); n++) t[r + n] ^= a.gexp(a.glog(this.get(r)) + a.glog(e.get(n)));
                    return new c(t, 0)
                },
                mod: function(e) {
                    if (this.getLength() - e.getLength() < 0) return this;
                    for (var t = a.glog(this.get(0)) - a.glog(e.get(0)), r = Array(this.getLength()), n = 0; n < this.getLength(); n++) r[n] = this.get(n);
                    for (var n = 0; n < e.getLength(); n++) r[n] ^= a.gexp(a.glog(e.get(n)) + t);
                    return new c(r, 0).mod(e)
                }
            }, u.RS_BLOCK_TABLE = [
                [1, 26, 19],
                [1, 26, 16],
                [1, 26, 13],
                [1, 26, 9],
                [1, 44, 34],
                [1, 44, 28],
                [1, 44, 22],
                [1, 44, 16],
                [1, 70, 55],
                [1, 70, 44],
                [2, 35, 17],
                [2, 35, 13],
                [1, 100, 80],
                [2, 50, 32],
                [2, 50, 24],
                [4, 25, 9],
                [1, 134, 108],
                [2, 67, 43],
                [2, 33, 15, 2, 34, 16],
                [2, 33, 11, 2, 34, 12],
                [2, 86, 68],
                [4, 43, 27],
                [4, 43, 19],
                [4, 43, 15],
                [2, 98, 78],
                [4, 49, 31],
                [2, 32, 14, 4, 33, 15],
                [4, 39, 13, 1, 40, 14],
                [2, 121, 97],
                [2, 60, 38, 2, 61, 39],
                [4, 40, 18, 2, 41, 19],
                [4, 40, 14, 2, 41, 15],
                [2, 146, 116],
                [3, 58, 36, 2, 59, 37],
                [4, 36, 16, 4, 37, 17],
                [4, 36, 12, 4, 37, 13],
                [2, 86, 68, 2, 87, 69],
                [4, 69, 43, 1, 70, 44],
                [6, 43, 19, 2, 44, 20],
                [6, 43, 15, 2, 44, 16],
                [4, 101, 81],
                [1, 80, 50, 4, 81, 51],
                [4, 50, 22, 4, 51, 23],
                [3, 36, 12, 8, 37, 13],
                [2, 116, 92, 2, 117, 93],
                [6, 58, 36, 2, 59, 37],
                [4, 46, 20, 6, 47, 21],
                [7, 42, 14, 4, 43, 15],
                [4, 133, 107],
                [8, 59, 37, 1, 60, 38],
                [8, 44, 20, 4, 45, 21],
                [12, 33, 11, 4, 34, 12],
                [3, 145, 115, 1, 146, 116],
                [4, 64, 40, 5, 65, 41],
                [11, 36, 16, 5, 37, 17],
                [11, 36, 12, 5, 37, 13],
                [5, 109, 87, 1, 110, 88],
                [5, 65, 41, 5, 66, 42],
                [5, 54, 24, 7, 55, 25],
                [11, 36, 12],
                [5, 122, 98, 1, 123, 99],
                [7, 73, 45, 3, 74, 46],
                [15, 43, 19, 2, 44, 20],
                [3, 45, 15, 13, 46, 16],
                [1, 135, 107, 5, 136, 108],
                [10, 74, 46, 1, 75, 47],
                [1, 50, 22, 15, 51, 23],
                [2, 42, 14, 17, 43, 15],
                [5, 150, 120, 1, 151, 121],
                [9, 69, 43, 4, 70, 44],
                [17, 50, 22, 1, 51, 23],
                [2, 42, 14, 19, 43, 15],
                [3, 141, 113, 4, 142, 114],
                [3, 70, 44, 11, 71, 45],
                [17, 47, 21, 4, 48, 22],
                [9, 39, 13, 16, 40, 14],
                [3, 135, 107, 5, 136, 108],
                [3, 67, 41, 13, 68, 42],
                [15, 54, 24, 5, 55, 25],
                [15, 43, 15, 10, 44, 16],
                [4, 144, 116, 4, 145, 117],
                [17, 68, 42],
                [17, 50, 22, 6, 51, 23],
                [19, 46, 16, 6, 47, 17],
                [2, 139, 111, 7, 140, 112],
                [17, 74, 46],
                [7, 54, 24, 16, 55, 25],
                [34, 37, 13],
                [4, 151, 121, 5, 152, 122],
                [4, 75, 47, 14, 76, 48],
                [11, 54, 24, 14, 55, 25],
                [16, 45, 15, 14, 46, 16],
                [6, 147, 117, 4, 148, 118],
                [6, 73, 45, 14, 74, 46],
                [11, 54, 24, 16, 55, 25],
                [30, 46, 16, 2, 47, 17],
                [8, 132, 106, 4, 133, 107],
                [8, 75, 47, 13, 76, 48],
                [7, 54, 24, 22, 55, 25],
                [22, 45, 15, 13, 46, 16],
                [10, 142, 114, 2, 143, 115],
                [19, 74, 46, 4, 75, 47],
                [28, 50, 22, 6, 51, 23],
                [33, 46, 16, 4, 47, 17],
                [8, 152, 122, 4, 153, 123],
                [22, 73, 45, 3, 74, 46],
                [8, 53, 23, 26, 54, 24],
                [12, 45, 15, 28, 46, 16],
                [3, 147, 117, 10, 148, 118],
                [3, 73, 45, 23, 74, 46],
                [4, 54, 24, 31, 55, 25],
                [11, 45, 15, 31, 46, 16],
                [7, 146, 116, 7, 147, 117],
                [21, 73, 45, 7, 74, 46],
                [1, 53, 23, 37, 54, 24],
                [19, 45, 15, 26, 46, 16],
                [5, 145, 115, 10, 146, 116],
                [19, 75, 47, 10, 76, 48],
                [15, 54, 24, 25, 55, 25],
                [23, 45, 15, 25, 46, 16],
                [13, 145, 115, 3, 146, 116],
                [2, 74, 46, 29, 75, 47],
                [42, 54, 24, 1, 55, 25],
                [23, 45, 15, 28, 46, 16],
                [17, 145, 115],
                [10, 74, 46, 23, 75, 47],
                [10, 54, 24, 35, 55, 25],
                [19, 45, 15, 35, 46, 16],
                [17, 145, 115, 1, 146, 116],
                [14, 74, 46, 21, 75, 47],
                [29, 54, 24, 19, 55, 25],
                [11, 45, 15, 46, 46, 16],
                [13, 145, 115, 6, 146, 116],
                [14, 74, 46, 23, 75, 47],
                [44, 54, 24, 7, 55, 25],
                [59, 46, 16, 1, 47, 17],
                [12, 151, 121, 7, 152, 122],
                [12, 75, 47, 26, 76, 48],
                [39, 54, 24, 14, 55, 25],
                [22, 45, 15, 41, 46, 16],
                [6, 151, 121, 14, 152, 122],
                [6, 75, 47, 34, 76, 48],
                [46, 54, 24, 10, 55, 25],
                [2, 45, 15, 64, 46, 16],
                [17, 152, 122, 4, 153, 123],
                [29, 74, 46, 14, 75, 47],
                [49, 54, 24, 10, 55, 25],
                [24, 45, 15, 46, 46, 16],
                [4, 152, 122, 18, 153, 123],
                [13, 74, 46, 32, 75, 47],
                [48, 54, 24, 14, 55, 25],
                [42, 45, 15, 32, 46, 16],
                [20, 147, 117, 4, 148, 118],
                [40, 75, 47, 7, 76, 48],
                [43, 54, 24, 22, 55, 25],
                [10, 45, 15, 67, 46, 16],
                [19, 148, 118, 6, 149, 119],
                [18, 75, 47, 31, 76, 48],
                [34, 54, 24, 34, 55, 25],
                [20, 45, 15, 61, 46, 16]
            ], u.getRSBlocks = function(e, t) {
                var r = u.getRsBlockTable(e, t);
                if (void 0 == r) throw Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
                for (var n = r.length / 3, i = [], s = 0; s < n; s++)
                    for (var o = r[3 * s + 0], a = r[3 * s + 1], l = r[3 * s + 2], c = 0; c < o; c++) i.push(new u(a, l));
                return i
            }, u.getRsBlockTable = function(e, t) {
                switch (t) {
                    case i.L:
                        return u.RS_BLOCK_TABLE[(e - 1) * 4 + 0];
                    case i.M:
                        return u.RS_BLOCK_TABLE[(e - 1) * 4 + 1];
                    case i.Q:
                        return u.RS_BLOCK_TABLE[(e - 1) * 4 + 2];
                    case i.H:
                        return u.RS_BLOCK_TABLE[(e - 1) * 4 + 3];
                    default:
                        return
                }
            }, h.prototype = {
                get: function(e) {
                    return (this.buffer[Math.floor(e / 8)] >>> 7 - e % 8 & 1) == 1
                },
                put: function(e, t) {
                    for (var r = 0; r < t; r++) this.putBit((e >>> t - r - 1 & 1) == 1)
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(e) {
                    var t = Math.floor(this.length / 8);
                    this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
                }
            };
            var d = [
                [17, 14, 11, 7],
                [32, 26, 20, 14],
                [53, 42, 32, 24],
                [78, 62, 46, 34],
                [106, 84, 60, 44],
                [134, 106, 74, 58],
                [154, 122, 86, 64],
                [192, 152, 108, 84],
                [230, 180, 130, 98],
                [271, 213, 151, 119],
                [321, 251, 177, 137],
                [367, 287, 203, 155],
                [425, 331, 241, 177],
                [458, 362, 258, 194],
                [520, 412, 292, 220],
                [586, 450, 322, 250],
                [644, 504, 364, 280],
                [718, 560, 394, 310],
                [792, 624, 442, 338],
                [858, 666, 482, 382],
                [929, 711, 509, 403],
                [1003, 779, 565, 439],
                [1091, 857, 611, 461],
                [1171, 911, 661, 511],
                [1273, 997, 715, 535],
                [1367, 1059, 751, 593],
                [1465, 1125, 805, 625],
                [1528, 1190, 868, 658],
                [1628, 1264, 908, 698],
                [1732, 1370, 982, 742],
                [1840, 1452, 1030, 790],
                [1952, 1538, 1112, 842],
                [2068, 1628, 1168, 898],
                [2188, 1722, 1228, 958],
                [2303, 1809, 1283, 983],
                [2431, 1911, 1351, 1051],
                [2563, 1989, 1423, 1093],
                [2699, 2099, 1499, 1139],
                [2809, 2213, 1579, 1219],
                [2953, 2331, 1663, 1273]
            ];

            function f(e) {
                if (this.options = {
                        padding: 4,
                        width: 256,
                        height: 256,
                        typeNumber: 4,
                        color: "#000000",
                        background: "#ffffff",
                        ecl: "M",
                        image: {
                            svg: "",
                            width: 0,
                            height: 0
                        }
                    }, "string" == typeof e && (e = {
                        content: e
                    }), e)
                    for (var t in e) this.options[t] = e[t];
                if ("string" != typeof this.options.content) throw Error("Expected 'content' as string!");
                if (0 === this.options.content.length) throw Error("Expected 'content' to be non-empty!");
                if (!(this.options.padding >= 0)) throw Error("Expected 'padding' value to be non-negative!");
                if (!(this.options.width > 0) || !(this.options.height > 0)) throw Error("Expected 'width' or 'height' value to be higher than zero!");
                var n = this.options.content,
                    s = function(e, t) {
                        for (var r, n = (r = encodeURI(e).toString().replace(/\%[0-9a-fA-F]{2}/g, "a")).length + (r.length != e ? 3 : 0), i = 1, s = 0, o = 0, a = d.length; o <= a; o++) {
                            var l = d[o];
                            if (!l) throw Error("Content too long: expected " + s + " but got " + n);
                            switch (t) {
                                case "L":
                                    s = l[0];
                                    break;
                                case "M":
                                    s = l[1];
                                    break;
                                case "Q":
                                    s = l[2];
                                    break;
                                case "H":
                                    s = l[3];
                                    break;
                                default:
                                    throw Error("Unknwon error correction level: " + t)
                            }
                            if (n <= s) break;
                            i++
                        }
                        if (i > d.length) throw Error("Content too long");
                        return i
                    }(n, this.options.ecl),
                    o = function(e) {
                        switch (e) {
                            case "L":
                                return i.L;
                            case "M":
                                return i.M;
                            case "Q":
                                return i.Q;
                            case "H":
                                return i.H;
                            default:
                                throw Error("Unknwon error correction level: " + e)
                        }
                    }(this.options.ecl);
                this.qrcode = new r(s, o), this.qrcode.addData(n), this.qrcode.make()
            }
            f.prototype.svg = function(e) {
                var t = this.options || {},
                    r = this.qrcode.modules;
                void 0 === e && (e = {
                    container: t.container || "svg"
                });
                for (var n = void 0 === t.pretty || !!t.pretty, i = n ? "  " : "", s = n ? "\r\n" : "", o = t.width, a = t.height, l = r.length, c = o / (l + 2 * t.padding), u = a / (l + 2 * t.padding), h = void 0 !== t.join && !!t.join, d = void 0 !== t.swap && !!t.swap, f = void 0 === t.xmlDeclaration || !!t.xmlDeclaration, p = void 0 !== t.predefined && !!t.predefined, g = p ? i + '<defs><path id="qrmodule" d="M0 0 h' + u + " v" + c + ' H0 z" style="fill:' + t.color + ';shape-rendering:crispEdges;" /></defs>' + s : "", m = i + '<rect x="0" y="0" width="' + o + '" height="' + a + '" style="fill:' + t.background + ';shape-rendering:crispEdges;"/>' + s, y = "", v = "", b = 0; b < l; b++)
                    for (var _ = 0; _ < l; _++)
                        if (r[_][b]) {
                            var w = _ * c + t.padding * c,
                                E = b * u + t.padding * u;
                            if (d) {
                                var k = w;
                                w = E, E = k
                            }
                            if (h) {
                                var S = c + w,
                                    M = u + E;
                                w = Number.isInteger(w) ? Number(w) : w.toFixed(2), E = Number.isInteger(E) ? Number(E) : E.toFixed(2), S = Number.isInteger(S) ? Number(S) : S.toFixed(2), v += "M" + w + "," + E + " V" + (M = Number.isInteger(M) ? Number(M) : M.toFixed(2)) + " H" + S + " V" + E + " H" + w + " Z "
                            } else p ? y += i + '<use x="' + w.toString() + '" y="' + E.toString() + '" href="#qrmodule" />' + s : y += i + '<rect x="' + w.toString() + '" y="' + E.toString() + '" width="' + c + '" height="' + u + '" style="fill:' + t.color + ';shape-rendering:crispEdges;"/>' + s
                        }
                h && (y = i + '<path x="0" y="0" style="fill:' + t.color + ';shape-rendering:crispEdges;" d="' + v + '" />');
                let R = "";
                if (void 0 !== this.options.image && this.options.image.svg) {
                    let e = o * this.options.image.width / 100,
                        t = a * this.options.image.height / 100,
                        r = o / 2 - e / 2;
                    R += '<svg x="'.concat(r, '" y="').concat(a / 2 - t / 2, '" width="').concat(e, '" height="').concat(t, '" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">') + (this.options.image.svg + s) + "</svg>"
                }
                var C = "";
                switch (e.container) {
                    case "svg":
                        f && (C += '<?xml version="1.0" standalone="yes"?>' + s), C += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + o + '" height="' + a + '">' + s + (g + m + y) + R + "</svg>";
                        break;
                    case "svg-viewbox":
                        f && (C += '<?xml version="1.0" standalone="yes"?>' + s), C += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' + o + " " + a + '">' + s + (g + m + y) + R + "</svg>";
                        break;
                    case "g":
                        C += '<g width="' + o + '" height="' + a + '">' + s + (g + m + y) + R + "</g>";
                        break;
                    default:
                        C += (g + m + y + R).replace(/^\s+/, "")
                }
                return C
            }, e.exports = f
        },
        4937: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LIB_VERSION = void 0, t.LIB_VERSION = "3.9.1"
        },
        16661: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let n = r(70094);

            function i(e, t, r) {
                try {
                    Reflect.apply(e, t, r)
                } catch (e) {
                    setTimeout(() => {
                        throw e
                    })
                }
            }
            class s extends n.EventEmitter {
                emit(e) {
                    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                    let s = "error" === e,
                        o = this._events;
                    if (void 0 !== o) s = s && void 0 === o.error;
                    else if (!s) return !1;
                    if (s) {
                        let e;
                        if (r.length > 0 && ([e] = r), e instanceof Error) throw e;
                        let t = Error("Unhandled error.".concat(e ? " (".concat(e.message, ")") : ""));
                        throw t.context = e, t
                    }
                    let a = o[e];
                    if (void 0 === a) return !1;
                    if ("function" == typeof a) i(a, this, r);
                    else {
                        let e = a.length,
                            t = function(e) {
                                let t = e.length,
                                    r = Array(t);
                                for (let n = 0; n < t; n += 1) r[n] = e[n];
                                return r
                            }(a);
                        for (let n = 0; n < e; n += 1) i(t[n], this, r)
                    }
                    return !0
                }
            }
            t.default = s
        },
        265: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.assertExhaustive = t.assertStruct = t.assert = t.AssertionError = void 0;
            let n = r(1544);

            function i(e, t) {
                var r, n;
                return "string" == typeof(null === (n = null === (r = null == e ? void 0 : e.prototype) || void 0 === r ? void 0 : r.constructor) || void 0 === n ? void 0 : n.name) ? new e({
                    message: t
                }) : e({
                    message: t
                })
            }
            class s extends Error {
                constructor(e) {
                    super(e.message), this.code = "ERR_ASSERTION"
                }
            }
            t.AssertionError = s, t.assert = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Assertion failed.",
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s;
                if (!e) {
                    if (t instanceof Error) throw t;
                    throw i(r, t)
                }
            }, t.assertStruct = function(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Assertion failed",
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s;
                try {
                    (0, n.assert)(e, t)
                } catch (e) {
                    throw i(o, "".concat(r, ": ").concat(function(e) {
                        let t = "object" == typeof e && null !== e && "message" in e ? e.message : String(e);
                        return t.endsWith(".") ? t.slice(0, -1) : t
                    }(e), "."))
                }
            }, t.assertExhaustive = function(e) {
                throw Error("Invalid branch reached. Should be detected during compilation.")
            }
        },
        633: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let n = r(56093);

            function i() {
                let e = n._(["[A-Za-z0-9+/]"], ["[A-Za-z0-9+\\/]"]);
                return i = function() {
                    return e
                }, e
            }

            function s() {
                let e = n._(["[-_A-Za-z0-9]"]);
                return s = function() {
                    return e
                }, e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.base64 = void 0;
            let o = r(1544),
                a = r(265);
            t.base64 = function(e) {
                var t, r;
                let n, l, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    u = null !== (t = c.paddingRequired) && void 0 !== t && t,
                    h = null !== (r = c.characterSet) && void 0 !== r ? r : "base64";
                return "base64" === h ? n = String.raw(i()) : ((0, a.assert)("base64url" === h), n = String.raw(s())), l = u ? RegExp("^(?:".concat(n, "{4})*(?:").concat(n, "{3}=|").concat(n, "{2}==)?$"), "u") : RegExp("^(?:".concat(n, "{4})*(?:").concat(n, "{2,3}|").concat(n, "{3}=|").concat(n, "{2}==)?$"), "u"), (0, o.pattern)(e, l)
            }
        },
        48066: function(e, t, r) {
            "use strict";
            var n = r(23663).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createDataView = t.concatBytes = t.valueToBytes = t.stringToBytes = t.numberToBytes = t.signedBigIntToBytes = t.bigIntToBytes = t.hexToBytes = t.bytesToString = t.bytesToNumber = t.bytesToSignedBigInt = t.bytesToBigInt = t.bytesToHex = t.assertIsBytes = t.isBytes = void 0;
            let i = r(265),
                s = r(6820),
                o = function() {
                    let e = [];
                    return () => {
                        if (0 === e.length)
                            for (let t = 0; t < 256; t++) e.push(t.toString(16).padStart(2, "0"));
                        return e
                    }
                }();

            function a(e) {
                return e instanceof Uint8Array
            }

            function l(e) {
                (0, i.assert)(a(e), "Value must be a Uint8Array.")
            }

            function c(e) {
                if (l(e), 0 === e.length) return "0x";
                let t = o(),
                    r = Array(e.length);
                for (let n = 0; n < e.length; n++) r[n] = t[e[n]];
                return (0, s.add0x)(r.join(""))
            }

            function u(e) {
                return l(e), BigInt(c(e))
            }

            function h(e) {
                var t;
                if ((null === (t = null == e ? void 0 : e.toLowerCase) || void 0 === t ? void 0 : t.call(e)) === "0x") return new Uint8Array;
                (0, s.assertIsHexString)(e);
                let r = (0, s.remove0x)(e).toLowerCase(),
                    n = r.length % 2 == 0 ? r : "0".concat(r),
                    i = new Uint8Array(n.length / 2);
                for (let e = 0; e < i.length; e++) {
                    let t = n.charCodeAt(2 * e),
                        r = n.charCodeAt(2 * e + 1),
                        s = t - (t < 58 ? 48 : 87),
                        o = r - (r < 58 ? 48 : 87);
                    i[e] = 16 * s + o
                }
                return i
            }

            function d(e) {
                return (0, i.assert)("bigint" == typeof e, "Value must be a bigint."), (0, i.assert)(e >= BigInt(0), "Value must be a non-negative bigint."), h(e.toString(16))
            }

            function f(e) {
                return (0, i.assert)("number" == typeof e, "Value must be a number."), (0, i.assert)(e >= 0, "Value must be a non-negative number."), (0, i.assert)(Number.isSafeInteger(e), "Value is not a safe integer. Use `bigIntToBytes` instead."), h(e.toString(16))
            }

            function p(e) {
                return (0, i.assert)("string" == typeof e, "Value must be a string."), new TextEncoder().encode(e)
            }

            function g(e) {
                if ("bigint" == typeof e) return d(e);
                if ("number" == typeof e) return f(e);
                if ("string" == typeof e) return e.startsWith("0x") ? h(e) : p(e);
                if (a(e)) return e;
                throw TypeError('Unsupported value type: "'.concat(typeof e, '".'))
            }
            t.isBytes = a, t.assertIsBytes = l, t.bytesToHex = c, t.bytesToBigInt = u, t.bytesToSignedBigInt = function(e) {
                l(e);
                let t = BigInt(0);
                for (let r of e) t = (t << BigInt(8)) + BigInt(r);
                return BigInt.asIntN(8 * e.length, t)
            }, t.bytesToNumber = function(e) {
                l(e);
                let t = u(e);
                return (0, i.assert)(t <= BigInt(Number.MAX_SAFE_INTEGER), "Number is not a safe integer. Use `bytesToBigInt` instead."), Number(t)
            }, t.bytesToString = function(e) {
                return l(e), new TextDecoder().decode(e)
            }, t.hexToBytes = h, t.bigIntToBytes = d, t.signedBigIntToBytes = function(e, t) {
                (0, i.assert)("bigint" == typeof e, "Value must be a bigint."), (0, i.assert)("number" == typeof t, "Byte length must be a number."), (0, i.assert)(t > 0, "Byte length must be greater than 0."), (0, i.assert)(function(e, t) {
                    (0, i.assert)(t > 0);
                    let r = e >> BigInt(31);
                    return !((~e & r) + (e & ~r) >> BigInt(8 * t + -1))
                }(e, t), "Byte length is too small to represent the given value.");
                let r = e,
                    n = new Uint8Array(t);
                for (let e = 0; e < n.length; e++) n[e] = Number(BigInt.asUintN(8, r)), r >>= BigInt(8);
                return n.reverse()
            }, t.numberToBytes = f, t.stringToBytes = p, t.valueToBytes = g, t.concatBytes = function(e) {
                let t = Array(e.length),
                    r = 0;
                for (let n = 0; n < e.length; n++) {
                    let i = g(e[n]);
                    t[n] = i, r += i.length
                }
                let n = new Uint8Array(r);
                for (let e = 0, r = 0; e < t.length; e++) n.set(t[e], r), r += t[e].length;
                return n
            }, t.createDataView = function(e) {
                if (void 0 !== n && e instanceof n) {
                    let t = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
                    return new DataView(t)
                }
                return new DataView(e.buffer, e.byteOffset, e.byteLength)
            }
        },
        31094: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ChecksumStruct = void 0;
            let n = r(1544),
                i = r(633);
            t.ChecksumStruct = (0, n.size)((0, i.base64)((0, n.string)(), {
                paddingRequired: !0
            }), 44, 44)
        },
        10802: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createHex = t.createBytes = t.createBigInt = t.createNumber = void 0;
            let n = r(1544),
                i = r(265),
                s = r(48066),
                o = r(6820),
                a = (0, n.union)([(0, n.number)(), (0, n.bigint)(), (0, n.string)(), o.StrictHexStruct]),
                l = (0, n.coerce)((0, n.number)(), a, Number),
                c = (0, n.coerce)((0, n.bigint)(), a, BigInt);
            (0, n.union)([o.StrictHexStruct, (0, n.instance)(Uint8Array)]);
            let u = (0, n.coerce)((0, n.instance)(Uint8Array), (0, n.union)([o.StrictHexStruct]), s.hexToBytes),
                h = (0, n.coerce)(o.StrictHexStruct, (0, n.instance)(Uint8Array), s.bytesToHex);
            t.createNumber = function(e) {
                try {
                    let t = (0, n.create)(e, l);
                    return (0, i.assert)(Number.isFinite(t), 'Expected a number-like value, got "'.concat(e, '".')), t
                } catch (t) {
                    if (t instanceof n.StructError) throw Error('Expected a number-like value, got "'.concat(e, '".'));
                    throw t
                }
            }, t.createBigInt = function(e) {
                try {
                    return (0, n.create)(e, c)
                } catch (e) {
                    if (e instanceof n.StructError) throw Error('Expected a number-like value, got "'.concat(String(e.value), '".'));
                    throw e
                }
            }, t.createBytes = function(e) {
                if ("string" == typeof e && "0x" === e.toLowerCase()) return new Uint8Array;
                try {
                    return (0, n.create)(e, u)
                } catch (e) {
                    if (e instanceof n.StructError) throw Error('Expected a bytes-like value, got "'.concat(String(e.value), '".'));
                    throw e
                }
            }, t.createHex = function(e) {
                if (e instanceof Uint8Array && 0 === e.length || "string" == typeof e && "0x" === e.toLowerCase()) return "0x";
                try {
                    return (0, n.create)(e, h)
                } catch (e) {
                    if (e instanceof n.StructError) throw Error('Expected a bytes-like value, got "'.concat(String(e.value), '".'));
                    throw e
                }
            }
        },
        5420: function(e, t) {
            "use strict";
            var r, n, i = function(e, t, r, n, i) {
                    if ("m" === n) throw TypeError("Private method is not writable");
                    if ("a" === n && !i) throw TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r), r
                },
                s = function(e, t, r, n) {
                    if ("a" === r && !n) throw TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FrozenSet = t.FrozenMap = void 0;
            class o {
                get size() {
                    return s(this, r, "f").size
                }[(r = new WeakMap, Symbol.iterator)]() {
                    return s(this, r, "f")[Symbol.iterator]()
                }
                entries() {
                    return s(this, r, "f").entries()
                }
                forEach(e, t) {
                    return s(this, r, "f").forEach((r, n, i) => e.call(t, r, n, this))
                }
                get(e) {
                    return s(this, r, "f").get(e)
                }
                has(e) {
                    return s(this, r, "f").has(e)
                }
                keys() {
                    return s(this, r, "f").keys()
                }
                values() {
                    return s(this, r, "f").values()
                }
                toString() {
                    return "FrozenMap(".concat(this.size, ") {").concat(this.size > 0 ? " ".concat([...this.entries()].map(e => {
                        let [t, r] = e;
                        return "".concat(String(t), " => ").concat(String(r))
                    }).join(", "), " ") : "", "}")
                }
                constructor(e) {
                    r.set(this, void 0), i(this, r, new Map(e), "f"), Object.freeze(this)
                }
            }
            t.FrozenMap = o;
            class a {
                get size() {
                    return s(this, n, "f").size
                }[(n = new WeakMap, Symbol.iterator)]() {
                    return s(this, n, "f")[Symbol.iterator]()
                }
                entries() {
                    return s(this, n, "f").entries()
                }
                forEach(e, t) {
                    return s(this, n, "f").forEach((r, n, i) => e.call(t, r, n, this))
                }
                has(e) {
                    return s(this, n, "f").has(e)
                }
                keys() {
                    return s(this, n, "f").keys()
                }
                values() {
                    return s(this, n, "f").values()
                }
                toString() {
                    return "FrozenSet(".concat(this.size, ") {").concat(this.size > 0 ? " ".concat([...this.values()].map(e => String(e)).join(", "), " ") : "", "}")
                }
                constructor(e) {
                    n.set(this, void 0), i(this, n, new Set(e), "f"), Object.freeze(this)
                }
            }
            t.FrozenSet = a, Object.freeze(o), Object.freeze(o.prototype), Object.freeze(a), Object.freeze(a.prototype)
        },
        93923: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        6820: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.remove0x = t.add0x = t.assertIsStrictHexString = t.assertIsHexString = t.isStrictHexString = t.isHexString = t.StrictHexStruct = t.HexStruct = void 0;
            let n = r(1544),
                i = r(265);

            function s(e) {
                return (0, n.is)(e, t.HexStruct)
            }

            function o(e) {
                return (0, n.is)(e, t.StrictHexStruct)
            }
            t.HexStruct = (0, n.pattern)((0, n.string)(), /^(?:0x)?[0-9a-f]+$/iu), t.StrictHexStruct = (0, n.pattern)((0, n.string)(), /^0x[0-9a-f]+$/iu), t.isHexString = s, t.isStrictHexString = o, t.assertIsHexString = function(e) {
                (0, i.assert)(s(e), "Value must be a hexadecimal string.")
            }, t.assertIsStrictHexString = function(e) {
                (0, i.assert)(o(e), 'Value must be a hexadecimal string, starting with "0x".')
            }, t.add0x = function(e) {
                return e.startsWith("0x") ? e : e.startsWith("0X") ? "0x".concat(e.substring(2)) : "0x".concat(e)
            }, t.remove0x = function(e) {
                return e.startsWith("0x") || e.startsWith("0X") ? e.substring(2) : e
            }
        },
        98678: function(e, t, r) {
            "use strict";
            var n = Object.create ? function(e, t, r, n) {
                    void 0 === n && (n = r);
                    var i = Object.getOwnPropertyDescriptor(t, r);
                    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    }), Object.defineProperty(e, n, i)
                } : function(e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                },
                i = function(e, t) {
                    for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), i(r(265), t), i(r(633), t), i(r(48066), t), i(r(31094), t), i(r(10802), t), i(r(5420), t), i(r(93923), t), i(r(6820), t), i(r(43639), t), i(r(96014), t), i(r(23054), t), i(r(51872), t), i(r(6940), t), i(r(44445), t), i(r(89191), t), i(r(5419), t), i(r(55954), t)
        },
        43639: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getJsonRpcIdValidator = t.assertIsJsonRpcError = t.isJsonRpcError = t.assertIsJsonRpcFailure = t.isJsonRpcFailure = t.assertIsJsonRpcSuccess = t.isJsonRpcSuccess = t.assertIsJsonRpcResponse = t.isJsonRpcResponse = t.assertIsPendingJsonRpcResponse = t.isPendingJsonRpcResponse = t.JsonRpcResponseStruct = t.JsonRpcFailureStruct = t.JsonRpcSuccessStruct = t.PendingJsonRpcResponseStruct = t.assertIsJsonRpcRequest = t.isJsonRpcRequest = t.assertIsJsonRpcNotification = t.isJsonRpcNotification = t.JsonRpcNotificationStruct = t.JsonRpcRequestStruct = t.JsonRpcParamsStruct = t.JsonRpcErrorStruct = t.JsonRpcIdStruct = t.JsonRpcVersionStruct = t.jsonrpc2 = t.getJsonSize = t.isValidJson = t.JsonStruct = t.UnsafeJsonStruct = void 0;
            let n = r(1544),
                i = r(265);
            t.UnsafeJsonStruct = (0, n.union)([(0, n.literal)(null), (0, n.boolean)(), (0, n.define)("finite number", e => (0, n.is)(e, (0, n.number)()) && Number.isFinite(e)), (0, n.string)(), (0, n.array)((0, n.lazy)(() => t.UnsafeJsonStruct)), (0, n.record)((0, n.string)(), (0, n.lazy)(() => t.UnsafeJsonStruct))]), t.JsonStruct = (0, n.define)("Json", (e, r) => {
                function n(e, t) {
                    let n = [...t.validator(e, r)];
                    return !(n.length > 0) || n
                }
                try {
                    let r = n(e, t.UnsafeJsonStruct);
                    if (!0 !== r) return r;
                    return n(JSON.parse(JSON.stringify(e)), t.UnsafeJsonStruct)
                } catch (e) {
                    if (e instanceof RangeError) return "Circular reference detected";
                    return !1
                }
            }), t.isValidJson = function(e) {
                return (0, n.is)(e, t.JsonStruct)
            }, t.getJsonSize = function(e) {
                (0, i.assertStruct)(e, t.JsonStruct, "Invalid JSON value");
                let r = JSON.stringify(e);
                return new TextEncoder().encode(r).byteLength
            }, t.jsonrpc2 = "2.0", t.JsonRpcVersionStruct = (0, n.literal)(t.jsonrpc2), t.JsonRpcIdStruct = (0, n.nullable)((0, n.union)([(0, n.number)(), (0, n.string)()])), t.JsonRpcErrorStruct = (0, n.object)({
                code: (0, n.integer)(),
                message: (0, n.string)(),
                data: (0, n.optional)(t.JsonStruct),
                stack: (0, n.optional)((0, n.string)())
            }), t.JsonRpcParamsStruct = (0, n.optional)((0, n.union)([(0, n.record)((0, n.string)(), t.JsonStruct), (0, n.array)(t.JsonStruct)])), t.JsonRpcRequestStruct = (0, n.object)({
                id: t.JsonRpcIdStruct,
                jsonrpc: t.JsonRpcVersionStruct,
                method: (0, n.string)(),
                params: t.JsonRpcParamsStruct
            }), t.JsonRpcNotificationStruct = (0, n.omit)(t.JsonRpcRequestStruct, ["id"]), t.isJsonRpcNotification = function(e) {
                return (0, n.is)(e, t.JsonRpcNotificationStruct)
            }, t.assertIsJsonRpcNotification = function(e, r) {
                (0, i.assertStruct)(e, t.JsonRpcNotificationStruct, "Invalid JSON-RPC notification", r)
            }, t.isJsonRpcRequest = function(e) {
                return (0, n.is)(e, t.JsonRpcRequestStruct)
            }, t.assertIsJsonRpcRequest = function(e, r) {
                (0, i.assertStruct)(e, t.JsonRpcRequestStruct, "Invalid JSON-RPC request", r)
            }, t.PendingJsonRpcResponseStruct = (0, n.object)({
                id: t.JsonRpcIdStruct,
                jsonrpc: t.JsonRpcVersionStruct,
                result: (0, n.optional)((0, n.unknown)()),
                error: (0, n.optional)(t.JsonRpcErrorStruct)
            }), t.JsonRpcSuccessStruct = (0, n.object)({
                id: t.JsonRpcIdStruct,
                jsonrpc: t.JsonRpcVersionStruct,
                result: t.JsonStruct
            }), t.JsonRpcFailureStruct = (0, n.object)({
                id: t.JsonRpcIdStruct,
                jsonrpc: t.JsonRpcVersionStruct,
                error: t.JsonRpcErrorStruct
            }), t.JsonRpcResponseStruct = (0, n.union)([t.JsonRpcSuccessStruct, t.JsonRpcFailureStruct]), t.isPendingJsonRpcResponse = function(e) {
                return (0, n.is)(e, t.PendingJsonRpcResponseStruct)
            }, t.assertIsPendingJsonRpcResponse = function(e, r) {
                (0, i.assertStruct)(e, t.PendingJsonRpcResponseStruct, "Invalid pending JSON-RPC response", r)
            }, t.isJsonRpcResponse = function(e) {
                return (0, n.is)(e, t.JsonRpcResponseStruct)
            }, t.assertIsJsonRpcResponse = function(e, r) {
                (0, i.assertStruct)(e, t.JsonRpcResponseStruct, "Invalid JSON-RPC response", r)
            }, t.isJsonRpcSuccess = function(e) {
                return (0, n.is)(e, t.JsonRpcSuccessStruct)
            }, t.assertIsJsonRpcSuccess = function(e, r) {
                (0, i.assertStruct)(e, t.JsonRpcSuccessStruct, "Invalid JSON-RPC success response", r)
            }, t.isJsonRpcFailure = function(e) {
                return (0, n.is)(e, t.JsonRpcFailureStruct)
            }, t.assertIsJsonRpcFailure = function(e, r) {
                (0, i.assertStruct)(e, t.JsonRpcFailureStruct, "Invalid JSON-RPC failure response", r)
            }, t.isJsonRpcError = function(e) {
                return (0, n.is)(e, t.JsonRpcErrorStruct)
            }, t.assertIsJsonRpcError = function(e, r) {
                (0, i.assertStruct)(e, t.JsonRpcErrorStruct, "Invalid JSON-RPC error", r)
            }, t.getJsonRpcIdValidator = function(e) {
                let {
                    permitEmptyString: t,
                    permitFractions: r,
                    permitNull: n
                } = Object.assign({
                    permitEmptyString: !0,
                    permitFractions: !1,
                    permitNull: !0
                }, e);
                return e => !!("number" == typeof e && (r || Number.isInteger(e)) || "string" == typeof e && (t || e.length > 0) || n && null === e)
            }
        },
        96014: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        23054: function(e, t, r) {
            "use strict";
            var n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createModuleLogger = t.createProjectLogger = void 0;
            let i = (0, ((n = r(11087)) && n.__esModule ? n : {
                default: n
            }).default)("metamask");
            t.createProjectLogger = function(e) {
                return i.extend(e)
            }, t.createModuleLogger = function(e, t) {
                return e.extend(t)
            }
        },
        51872: function(e, t) {
            "use strict";
            var r;

            function n(e) {
                return 127 >= e.charCodeAt(0)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.calculateNumberSize = t.calculateStringSize = t.isASCII = t.isPlainObject = t.ESCAPE_CHARACTERS_REGEXP = t.JsonSize = t.hasProperty = t.isObject = t.isNullOrUndefined = t.isNonEmptyArray = void 0, t.isNonEmptyArray = function(e) {
                return Array.isArray(e) && e.length > 0
            }, t.isNullOrUndefined = function(e) {
                return null == e
            }, t.isObject = function(e) {
                return !!e && "object" == typeof e && !Array.isArray(e)
            }, t.hasProperty = (e, t) => Object.hasOwnProperty.call(e, t), (r = t.JsonSize || (t.JsonSize = {}))[r.Null = 4] = "Null", r[r.Comma = 1] = "Comma", r[r.Wrapper = 1] = "Wrapper", r[r.True = 4] = "True", r[r.False = 5] = "False", r[r.Quote = 1] = "Quote", r[r.Colon = 1] = "Colon", r[r.Date = 24] = "Date", t.ESCAPE_CHARACTERS_REGEXP = /"|\\|\n|\r|\t/gu, t.isPlainObject = function(e) {
                if ("object" != typeof e || null === e) return !1;
                try {
                    let t = e;
                    for (; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
                    return Object.getPrototypeOf(e) === t
                } catch (e) {
                    return !1
                }
            }, t.isASCII = n, t.calculateStringSize = function(e) {
                var r;
                return e.split("").reduce((e, t) => n(t) ? e + 1 : e + 2, 0) + (null !== (r = e.match(t.ESCAPE_CHARACTERS_REGEXP)) && void 0 !== r ? r : []).length
            }, t.calculateNumberSize = function(e) {
                return e.toString().length
            }
        },
        6940: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hexToBigInt = t.hexToNumber = t.bigIntToHex = t.numberToHex = void 0;
            let n = r(265),
                i = r(6820);
            t.numberToHex = e => ((0, n.assert)("number" == typeof e, "Value must be a number."), (0, n.assert)(e >= 0, "Value must be a non-negative number."), (0, n.assert)(Number.isSafeInteger(e), "Value is not a safe integer. Use `bigIntToHex` instead."), (0, i.add0x)(e.toString(16))), t.bigIntToHex = e => ((0, n.assert)("bigint" == typeof e, "Value must be a bigint."), (0, n.assert)(e >= 0, "Value must be a non-negative bigint."), (0, i.add0x)(e.toString(16))), t.hexToNumber = e => {
                (0, i.assertIsHexString)(e);
                let t = parseInt(e, 16);
                return (0, n.assert)(Number.isSafeInteger(t), "Value is not a safe integer. Use `hexToBigInt` instead."), t
            }, t.hexToBigInt = e => ((0, i.assertIsHexString)(e), BigInt((0, i.add0x)(e)))
        },
        44445: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        89191: function(e, t) {
            "use strict";
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.timeSince = t.inMilliseconds = t.Duration = void 0, (r = t.Duration || (t.Duration = {}))[r.Millisecond = 1] = "Millisecond", r[r.Second = 1e3] = "Second", r[r.Minute = 6e4] = "Minute", r[r.Hour = 36e5] = "Hour", r[r.Day = 864e5] = "Day", r[r.Week = 6048e5] = "Week", r[r.Year = 31536e6] = "Year";
            let n = e => Number.isInteger(e) && e >= 0,
                i = (e, t) => {
                    if (!n(e)) throw Error('"'.concat(t, '" must be a non-negative integer. Received: "').concat(e, '".'))
                };
            t.inMilliseconds = function(e, t) {
                return i(e, "count"), e * t
            }, t.timeSince = function(e) {
                return i(e, "timestamp"), Date.now() - e
            }
        },
        5419: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        55954: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.satisfiesVersionRange = t.gtRange = t.gtVersion = t.assertIsSemVerRange = t.assertIsSemVerVersion = t.isValidSemVerRange = t.isValidSemVerVersion = t.VersionRangeStruct = t.VersionStruct = void 0;
            let n = r(73608),
                i = r(1544),
                s = r(265);
            t.VersionStruct = (0, i.refine)((0, i.string)(), "Version", e => null !== (0, n.valid)(e) || 'Expected SemVer version, got "'.concat(e, '"')), t.VersionRangeStruct = (0, i.refine)((0, i.string)(), "Version range", e => null !== (0, n.validRange)(e) || 'Expected SemVer range, got "'.concat(e, '"')), t.isValidSemVerVersion = function(e) {
                return (0, i.is)(e, t.VersionStruct)
            }, t.isValidSemVerRange = function(e) {
                return (0, i.is)(e, t.VersionRangeStruct)
            }, t.assertIsSemVerVersion = function(e) {
                (0, s.assertStruct)(e, t.VersionStruct)
            }, t.assertIsSemVerRange = function(e) {
                (0, s.assertStruct)(e, t.VersionRangeStruct)
            }, t.gtVersion = function(e, t) {
                return (0, n.gt)(e, t)
            }, t.gtRange = function(e, t) {
                return (0, n.gtr)(e, t)
            }, t.satisfiesVersionRange = function(e, t) {
                return (0, n.satisfies)(e, t, {
                    includePrerelease: !0
                })
            }
        },
        97450: function(e, t, r) {
            "use strict";
            let n = r(47604),
                i = Symbol("max"),
                s = Symbol("length"),
                o = Symbol("lengthCalculator"),
                a = Symbol("allowStale"),
                l = Symbol("maxAge"),
                c = Symbol("dispose"),
                u = Symbol("noDisposeOnSet"),
                h = Symbol("lruList"),
                d = Symbol("cache"),
                f = Symbol("updateAgeOnGet"),
                p = () => 1;
            class g {
                set max(e) {
                    if ("number" != typeof e || e < 0) throw TypeError("max must be a non-negative number");
                    this[i] = e || 1 / 0, v(this)
                }
                get max() {
                    return this[i]
                }
                set allowStale(e) {
                    this[a] = !!e
                }
                get allowStale() {
                    return this[a]
                }
                set maxAge(e) {
                    if ("number" != typeof e) throw TypeError("maxAge must be a non-negative number");
                    this[l] = e, v(this)
                }
                get maxAge() {
                    return this[l]
                }
                set lengthCalculator(e) {
                    "function" != typeof e && (e = p), e !== this[o] && (this[o] = e, this[s] = 0, this[h].forEach(e => {
                        e.length = this[o](e.value, e.key), this[s] += e.length
                    })), v(this)
                }
                get lengthCalculator() {
                    return this[o]
                }
                get length() {
                    return this[s]
                }
                get itemCount() {
                    return this[h].length
                }
                rforEach(e, t) {
                    t = t || this;
                    for (let r = this[h].tail; null !== r;) {
                        let n = r.prev;
                        w(this, e, r, t), r = n
                    }
                }
                forEach(e, t) {
                    t = t || this;
                    for (let r = this[h].head; null !== r;) {
                        let n = r.next;
                        w(this, e, r, t), r = n
                    }
                }
                keys() {
                    return this[h].toArray().map(e => e.key)
                }
                values() {
                    return this[h].toArray().map(e => e.value)
                }
                reset() {
                    this[c] && this[h] && this[h].length && this[h].forEach(e => this[c](e.key, e.value)), this[d] = new Map, this[h] = new n, this[s] = 0
                }
                dump() {
                    return this[h].map(e => !y(this, e) && {
                        k: e.key,
                        v: e.value,
                        e: e.now + (e.maxAge || 0)
                    }).toArray().filter(e => e)
                }
                dumpLru() {
                    return this[h]
                }
                set(e, t, r) {
                    if ((r = r || this[l]) && "number" != typeof r) throw TypeError("maxAge must be a number");
                    let n = r ? Date.now() : 0,
                        a = this[o](t, e);
                    if (this[d].has(e)) {
                        if (a > this[i]) return b(this, this[d].get(e)), !1;
                        let o = this[d].get(e).value;
                        return this[c] && !this[u] && this[c](e, o.value), o.now = n, o.maxAge = r, o.value = t, this[s] += a - o.length, o.length = a, this.get(e), v(this), !0
                    }
                    let f = new _(e, t, a, n, r);
                    return f.length > this[i] ? (this[c] && this[c](e, t), !1) : (this[s] += f.length, this[h].unshift(f), this[d].set(e, this[h].head), v(this), !0)
                }
                has(e) {
                    return !!this[d].has(e) && !y(this, this[d].get(e).value)
                }
                get(e) {
                    return m(this, e, !0)
                }
                peek(e) {
                    return m(this, e, !1)
                }
                pop() {
                    let e = this[h].tail;
                    return e ? (b(this, e), e.value) : null
                }
                del(e) {
                    b(this, this[d].get(e))
                }
                load(e) {
                    this.reset();
                    let t = Date.now();
                    for (let r = e.length - 1; r >= 0; r--) {
                        let n = e[r],
                            i = n.e || 0;
                        if (0 === i) this.set(n.k, n.v);
                        else {
                            let e = i - t;
                            e > 0 && this.set(n.k, n.v, e)
                        }
                    }
                }
                prune() {
                    this[d].forEach((e, t) => m(this, t, !1))
                }
                constructor(e) {
                    if ("number" == typeof e && (e = {
                            max: e
                        }), e || (e = {}), e.max && ("number" != typeof e.max || e.max < 0)) throw TypeError("max must be a non-negative number");
                    this[i] = e.max || 1 / 0;
                    let t = e.length || p;
                    if (this[o] = "function" != typeof t ? p : t, this[a] = e.stale || !1, e.maxAge && "number" != typeof e.maxAge) throw TypeError("maxAge must be a number");
                    this[l] = e.maxAge || 0, this[c] = e.dispose, this[u] = e.noDisposeOnSet || !1, this[f] = e.updateAgeOnGet || !1, this.reset()
                }
            }
            let m = (e, t, r) => {
                    let n = e[d].get(t);
                    if (n) {
                        let t = n.value;
                        if (y(e, t)) {
                            if (b(e, n), !e[a]) return
                        } else r && (e[f] && (n.value.now = Date.now()), e[h].unshiftNode(n));
                        return t.value
                    }
                },
                y = (e, t) => {
                    if (!t || !t.maxAge && !e[l]) return !1;
                    let r = Date.now() - t.now;
                    return t.maxAge ? r > t.maxAge : e[l] && r > e[l]
                },
                v = e => {
                    if (e[s] > e[i])
                        for (let t = e[h].tail; e[s] > e[i] && null !== t;) {
                            let r = t.prev;
                            b(e, t), t = r
                        }
                },
                b = (e, t) => {
                    if (t) {
                        let r = t.value;
                        e[c] && e[c](r.key, r.value), e[s] -= r.length, e[d].delete(r.key), e[h].removeNode(t)
                    }
                };
            class _ {
                constructor(e, t, r, n, i) {
                    this.key = e, this.value = t, this.length = r, this.now = n, this.maxAge = i || 0
                }
            }
            let w = (e, t, r, n) => {
                let i = r.value;
                y(e, i) && (b(e, r), e[a] || (i = void 0)), i && t.call(n, i.value, i.key, e)
            };
            e.exports = g
        },
        84498: function(e, t, r) {
            "use strict";
            let n = Symbol("SemVer ANY");
            class i {
                static get ANY() {
                    return n
                }
                parse(e) {
                    let t = this.options.loose ? o[a.COMPARATORLOOSE] : o[a.COMPARATOR],
                        r = e.match(t);
                    if (!r) throw TypeError("Invalid comparator: ".concat(e));
                    this.operator = void 0 !== r[1] ? r[1] : "", "=" === this.operator && (this.operator = ""), r[2] ? this.semver = new u(r[2], this.options.loose) : this.semver = n
                }
                toString() {
                    return this.value
                }
                test(e) {
                    if (c("Comparator.test", e, this.options.loose), this.semver === n || e === n) return !0;
                    if ("string" == typeof e) try {
                        e = new u(e, this.options)
                    } catch (e) {
                        return !1
                    }
                    return l(e, this.operator, this.semver, this.options)
                }
                intersects(e, t) {
                    if (!(e instanceof i)) throw TypeError("a Comparator is required");
                    return "" === this.operator ? "" === this.value || new h(e.value, t).test(this.value) : "" === e.operator ? "" === e.value || new h(this.value, t).test(e.semver) : !((t = s(t)).includePrerelease && ("<0.0.0-0" === this.value || "<0.0.0-0" === e.value) || !t.includePrerelease && (this.value.startsWith("<0.0.0") || e.value.startsWith("<0.0.0"))) && !!(this.operator.startsWith(">") && e.operator.startsWith(">") || this.operator.startsWith("<") && e.operator.startsWith("<") || this.semver.version === e.semver.version && this.operator.includes("=") && e.operator.includes("=") || l(this.semver, "<", e.semver, t) && this.operator.startsWith(">") && e.operator.startsWith("<") || l(this.semver, ">", e.semver, t) && this.operator.startsWith("<") && e.operator.startsWith(">"))
                }
                constructor(e, t) {
                    if (t = s(t), e instanceof i) {
                        if (!!t.loose === e.loose) return e;
                        e = e.value
                    }
                    c("comparator", e = e.trim().split(/\s+/).join(" "), t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === n ? this.value = "" : this.value = this.operator + this.semver.version, c("comp", this)
                }
            }
            e.exports = i;
            let s = r(65726),
                {
                    safeRe: o,
                    t: a
                } = r(97927),
                l = r(9047),
                c = r(43069),
                u = r(48905),
                h = r(17485)
        },
        17485: function(e, t, r) {
            "use strict";
            class n {
                format() {
                    return this.range = this.set.map(e => e.join(" ").trim()).join("||").trim(), this.range
                }
                toString() {
                    return this.range
                }
                parseRange(e) {
                    let t = ((this.options.includePrerelease && p) | (this.options.loose && g)) + ":" + e,
                        r = i.get(t);
                    if (r) return r;
                    let n = this.options.loose,
                        s = n ? c[u.HYPHENRANGELOOSE] : c[u.HYPHENRANGE];
                    a("hyphen replace", e = e.replace(s, I(this.options.includePrerelease))), a("comparator trim", e = e.replace(c[u.COMPARATORTRIM], h)), a("tilde trim", e = e.replace(c[u.TILDETRIM], d)), a("caret trim", e = e.replace(c[u.CARETTRIM], f));
                    let l = e.split(" ").map(e => b(e, this.options)).join(" ").split(/\s+/).map(e => x(e, this.options));
                    n && (l = l.filter(e => (a("loose invalid filter", e, this.options), !!e.match(c[u.COMPARATORLOOSE])))), a("range list", l);
                    let y = new Map;
                    for (let e of l.map(e => new o(e, this.options))) {
                        if (m(e)) return [e];
                        y.set(e.value, e)
                    }
                    y.size > 1 && y.has("") && y.delete("");
                    let v = [...y.values()];
                    return i.set(t, v), v
                }
                intersects(e, t) {
                    if (!(e instanceof n)) throw TypeError("a Range is required");
                    return this.set.some(r => v(r, t) && e.set.some(e => v(e, t) && r.every(r => e.every(e => r.intersects(e, t)))))
                }
                test(e) {
                    if (!e) return !1;
                    if ("string" == typeof e) try {
                        e = new l(e, this.options)
                    } catch (e) {
                        return !1
                    }
                    for (let t = 0; t < this.set.length; t++)
                        if (A(this.set[t], e, this.options)) return !0;
                    return !1
                }
                constructor(e, t) {
                    if (t = s(t), e instanceof n) {
                        if (!!t.loose === e.loose && !!t.includePrerelease === e.includePrerelease) return e;
                        return new n(e.raw, t)
                    }
                    if (e instanceof o) return this.raw = e.value, this.set = [
                        [e]
                    ], this.format(), this;
                    if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this.raw = e.trim().split(/\s+/).join(" "), this.set = this.raw.split("||").map(e => this.parseRange(e.trim())).filter(e => e.length), !this.set.length) throw TypeError("Invalid SemVer Range: ".concat(this.raw));
                    if (this.set.length > 1) {
                        let e = this.set[0];
                        if (this.set = this.set.filter(e => !m(e[0])), 0 === this.set.length) this.set = [e];
                        else if (this.set.length > 1) {
                            for (let e of this.set)
                                if (1 === e.length && y(e[0])) {
                                    this.set = [e];
                                    break
                                }
                        }
                    }
                    this.format()
                }
            }
            e.exports = n;
            let i = new(r(97450))({
                    max: 1e3
                }),
                s = r(65726),
                o = r(84498),
                a = r(43069),
                l = r(48905),
                {
                    safeRe: c,
                    t: u,
                    comparatorTrimReplace: h,
                    tildeTrimReplace: d,
                    caretTrimReplace: f
                } = r(97927),
                {
                    FLAG_INCLUDE_PRERELEASE: p,
                    FLAG_LOOSE: g
                } = r(71375),
                m = e => "<0.0.0-0" === e.value,
                y = e => "" === e.value,
                v = (e, t) => {
                    let r = !0,
                        n = e.slice(),
                        i = n.pop();
                    for (; r && n.length;) r = n.every(e => i.intersects(e, t)), i = n.pop();
                    return r
                },
                b = (e, t) => (a("comp", e, t), a("caret", e = k(e, t)), a("tildes", e = w(e, t)), a("xrange", e = M(e, t)), a("stars", e = C(e, t)), e),
                _ = e => !e || "x" === e.toLowerCase() || "*" === e,
                w = (e, t) => e.trim().split(/\s+/).map(e => E(e, t)).join(" "),
                E = (e, t) => {
                    let r = t.loose ? c[u.TILDELOOSE] : c[u.TILDE];
                    return e.replace(r, (t, r, n, i, s) => {
                        let o;
                        return a("tilde", e, t, r, n, i, s), _(r) ? o = "" : _(n) ? o = ">=".concat(r, ".0.0 <").concat(+r + 1, ".0.0-0") : _(i) ? o = ">=".concat(r, ".").concat(n, ".0 <").concat(r, ".").concat(+n + 1, ".0-0") : s ? (a("replaceTilde pr", s), o = ">=".concat(r, ".").concat(n, ".").concat(i, "-").concat(s, " <").concat(r, ".").concat(+n + 1, ".0-0")) : o = ">=".concat(r, ".").concat(n, ".").concat(i, " <").concat(r, ".").concat(+n + 1, ".0-0"), a("tilde return", o), o
                    })
                },
                k = (e, t) => e.trim().split(/\s+/).map(e => S(e, t)).join(" "),
                S = (e, t) => {
                    a("caret", e, t);
                    let r = t.loose ? c[u.CARETLOOSE] : c[u.CARET],
                        n = t.includePrerelease ? "-0" : "";
                    return e.replace(r, (t, r, i, s, o) => {
                        let l;
                        return a("caret", e, t, r, i, s, o), _(r) ? l = "" : _(i) ? l = ">=".concat(r, ".0.0").concat(n, " <").concat(+r + 1, ".0.0-0") : _(s) ? l = "0" === r ? ">=".concat(r, ".").concat(i, ".0").concat(n, " <").concat(r, ".").concat(+i + 1, ".0-0") : ">=".concat(r, ".").concat(i, ".0").concat(n, " <").concat(+r + 1, ".0.0-0") : o ? (a("replaceCaret pr", o), l = "0" === r ? "0" === i ? ">=".concat(r, ".").concat(i, ".").concat(s, "-").concat(o, " <").concat(r, ".").concat(i, ".").concat(+s + 1, "-0") : ">=".concat(r, ".").concat(i, ".").concat(s, "-").concat(o, " <").concat(r, ".").concat(+i + 1, ".0-0") : ">=".concat(r, ".").concat(i, ".").concat(s, "-").concat(o, " <").concat(+r + 1, ".0.0-0")) : (a("no pr"), l = "0" === r ? "0" === i ? ">=".concat(r, ".").concat(i, ".").concat(s).concat(n, " <").concat(r, ".").concat(i, ".").concat(+s + 1, "-0") : ">=".concat(r, ".").concat(i, ".").concat(s).concat(n, " <").concat(r, ".").concat(+i + 1, ".0-0") : ">=".concat(r, ".").concat(i, ".").concat(s, " <").concat(+r + 1, ".0.0-0")), a("caret return", l), l
                    })
                },
                M = (e, t) => (a("replaceXRanges", e, t), e.split(/\s+/).map(e => R(e, t)).join(" ")),
                R = (e, t) => {
                    e = e.trim();
                    let r = t.loose ? c[u.XRANGELOOSE] : c[u.XRANGE];
                    return e.replace(r, (r, n, i, s, o, l) => {
                        a("xRange", e, r, n, i, s, o, l);
                        let c = _(i),
                            u = c || _(s),
                            h = u || _(o);
                        return "=" === n && h && (n = ""), l = t.includePrerelease ? "-0" : "", c ? r = ">" === n || "<" === n ? "<0.0.0-0" : "*" : n && h ? (u && (s = 0), o = 0, ">" === n ? (n = ">=", u ? (i = +i + 1, s = 0) : s = +s + 1, o = 0) : "<=" === n && (n = "<", u ? i = +i + 1 : s = +s + 1), "<" === n && (l = "-0"), r = "".concat(n + i, ".").concat(s, ".").concat(o).concat(l)) : u ? r = ">=".concat(i, ".0.0").concat(l, " <").concat(+i + 1, ".0.0-0") : h && (r = ">=".concat(i, ".").concat(s, ".0").concat(l, " <").concat(i, ".").concat(+s + 1, ".0-0")), a("xRange return", r), r
                    })
                },
                C = (e, t) => (a("replaceStars", e, t), e.trim().replace(c[u.STAR], "")),
                x = (e, t) => (a("replaceGTE0", e, t), e.trim().replace(c[t.includePrerelease ? u.GTE0PRE : u.GTE0], "")),
                I = e => (t, r, n, i, s, o, a, l, c, u, h, d, f) => (r = _(n) ? "" : _(i) ? ">=".concat(n, ".0.0").concat(e ? "-0" : "") : _(s) ? ">=".concat(n, ".").concat(i, ".0").concat(e ? "-0" : "") : o ? ">=".concat(r) : ">=".concat(r).concat(e ? "-0" : ""), l = _(c) ? "" : _(u) ? "<".concat(+c + 1, ".0.0-0") : _(h) ? "<".concat(c, ".").concat(+u + 1, ".0-0") : d ? "<=".concat(c, ".").concat(u, ".").concat(h, "-").concat(d) : e ? "<".concat(c, ".").concat(u, ".").concat(+h + 1, "-0") : "<=".concat(l), "".concat(r, " ").concat(l).trim()),
                A = (e, t, r) => {
                    for (let r = 0; r < e.length; r++)
                        if (!e[r].test(t)) return !1;
                    if (t.prerelease.length && !r.includePrerelease) {
                        for (let r = 0; r < e.length; r++)
                            if (a(e[r].semver), e[r].semver !== o.ANY && e[r].semver.prerelease.length > 0) {
                                let n = e[r].semver;
                                if (n.major === t.major && n.minor === t.minor && n.patch === t.patch) return !0
                            }
                        return !1
                    }
                    return !0
                }
        },
        48905: function(e, t, r) {
            "use strict";
            let n = r(43069),
                {
                    MAX_LENGTH: i,
                    MAX_SAFE_INTEGER: s
                } = r(71375),
                {
                    safeRe: o,
                    t: a
                } = r(97927),
                l = r(65726),
                {
                    compareIdentifiers: c
                } = r(58907);
            class u {
                format() {
                    return this.version = "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch), this.prerelease.length && (this.version += "-".concat(this.prerelease.join("."))), this.version
                }
                toString() {
                    return this.version
                }
                compare(e) {
                    if (n("SemVer.compare", this.version, this.options, e), !(e instanceof u)) {
                        if ("string" == typeof e && e === this.version) return 0;
                        e = new u(e, this.options)
                    }
                    return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e)
                }
                compareMain(e) {
                    return e instanceof u || (e = new u(e, this.options)), c(this.major, e.major) || c(this.minor, e.minor) || c(this.patch, e.patch)
                }
                comparePre(e) {
                    if (e instanceof u || (e = new u(e, this.options)), this.prerelease.length && !e.prerelease.length) return -1;
                    if (!this.prerelease.length && e.prerelease.length) return 1;
                    if (!this.prerelease.length && !e.prerelease.length) return 0;
                    let t = 0;
                    do {
                        let r = this.prerelease[t],
                            i = e.prerelease[t];
                        if (n("prerelease compare", t, r, i), void 0 === r && void 0 === i) return 0;
                        if (void 0 === i) return 1;
                        if (void 0 === r) return -1;
                        if (r === i) continue;
                        else return c(r, i)
                    } while (++t)
                }
                compareBuild(e) {
                    e instanceof u || (e = new u(e, this.options));
                    let t = 0;
                    do {
                        let r = this.build[t],
                            i = e.build[t];
                        if (n("prerelease compare", t, r, i), void 0 === r && void 0 === i) return 0;
                        if (void 0 === i) return 1;
                        if (void 0 === r) return -1;
                        if (r === i) continue;
                        else return c(r, i)
                    } while (++t)
                }
                inc(e, t, r) {
                    switch (e) {
                        case "premajor":
                            this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t, r);
                            break;
                        case "preminor":
                            this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t, r);
                            break;
                        case "prepatch":
                            this.prerelease.length = 0, this.inc("patch", t, r), this.inc("pre", t, r);
                            break;
                        case "prerelease":
                            0 === this.prerelease.length && this.inc("patch", t, r), this.inc("pre", t, r);
                            break;
                        case "major":
                            (0 !== this.minor || 0 !== this.patch || 0 === this.prerelease.length) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                            break;
                        case "minor":
                            (0 !== this.patch || 0 === this.prerelease.length) && this.minor++, this.patch = 0, this.prerelease = [];
                            break;
                        case "patch":
                            0 === this.prerelease.length && this.patch++, this.prerelease = [];
                            break;
                        case "pre":
                            {
                                let e = Number(r) ? 1 : 0;
                                if (!t && !1 === r) throw Error("invalid increment argument: identifier is empty");
                                if (0 === this.prerelease.length) this.prerelease = [e];
                                else {
                                    let n = this.prerelease.length;
                                    for (; --n >= 0;) "number" == typeof this.prerelease[n] && (this.prerelease[n]++, n = -2);
                                    if (-1 === n) {
                                        if (t === this.prerelease.join(".") && !1 === r) throw Error("invalid increment argument: identifier already exists");
                                        this.prerelease.push(e)
                                    }
                                }
                                if (t) {
                                    let n = [t, e];
                                    !1 === r && (n = [t]), 0 === c(this.prerelease[0], t) ? isNaN(this.prerelease[1]) && (this.prerelease = n) : this.prerelease = n
                                }
                                break
                            }
                        default:
                            throw Error("invalid increment argument: ".concat(e))
                    }
                    return this.raw = this.format(), this.build.length && (this.raw += "+".concat(this.build.join("."))), this
                }
                constructor(e, t) {
                    if (t = l(t), e instanceof u) {
                        if (!!t.loose === e.loose && !!t.includePrerelease === e.includePrerelease) return e;
                        e = e.version
                    } else if ("string" != typeof e) throw TypeError('Invalid version. Must be a string. Got type "'.concat(typeof e, '".'));
                    if (e.length > i) throw TypeError("version is longer than ".concat(i, " characters"));
                    n("SemVer", e, t), this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease;
                    let r = e.trim().match(t.loose ? o[a.LOOSE] : o[a.FULL]);
                    if (!r) throw TypeError("Invalid Version: ".concat(e));
                    if (this.raw = e, this.major = +r[1], this.minor = +r[2], this.patch = +r[3], this.major > s || this.major < 0) throw TypeError("Invalid major version");
                    if (this.minor > s || this.minor < 0) throw TypeError("Invalid minor version");
                    if (this.patch > s || this.patch < 0) throw TypeError("Invalid patch version");
                    r[4] ? this.prerelease = r[4].split(".").map(e => {
                        if (/^[0-9]+$/.test(e)) {
                            let t = +e;
                            if (t >= 0 && t < s) return t
                        }
                        return e
                    }) : this.prerelease = [], this.build = r[5] ? r[5].split(".") : [], this.format()
                }
            }
            e.exports = u
        },
        22734: function(e, t, r) {
            "use strict";
            let n = r(58755);
            e.exports = (e, t) => {
                let r = n(e.trim().replace(/^[=v]+/, ""), t);
                return r ? r.version : null
            }
        },
        9047: function(e, t, r) {
            "use strict";
            let n = r(65185),
                i = r(87196),
                s = r(19452),
                o = r(97698),
                a = r(10878),
                l = r(15010);
            e.exports = (e, t, r, c) => {
                switch (t) {
                    case "===":
                        return "object" == typeof e && (e = e.version), "object" == typeof r && (r = r.version), e === r;
                    case "!==":
                        return "object" == typeof e && (e = e.version), "object" == typeof r && (r = r.version), e !== r;
                    case "":
                    case "=":
                    case "==":
                        return n(e, r, c);
                    case "!=":
                        return i(e, r, c);
                    case ">":
                        return s(e, r, c);
                    case ">=":
                        return o(e, r, c);
                    case "<":
                        return a(e, r, c);
                    case "<=":
                        return l(e, r, c);
                    default:
                        throw TypeError("Invalid operator: ".concat(t))
                }
            }
        },
        70806: function(e, t, r) {
            "use strict";
            let n = r(48905),
                i = r(58755),
                {
                    safeRe: s,
                    t: o
                } = r(97927);
            e.exports = (e, t) => {
                if (e instanceof n) return e;
                if ("number" == typeof e && (e = String(e)), "string" != typeof e) return null;
                let r = null;
                if ((t = t || {}).rtl) {
                    let n;
                    let i = t.includePrerelease ? s[o.COERCERTLFULL] : s[o.COERCERTL];
                    for (;
                        (n = i.exec(e)) && (!r || r.index + r[0].length !== e.length);) r && n.index + n[0].length === r.index + r[0].length || (r = n), i.lastIndex = n.index + n[1].length + n[2].length;
                    i.lastIndex = -1
                } else r = e.match(t.includePrerelease ? s[o.COERCEFULL] : s[o.COERCE]);
                if (null === r) return null;
                let a = r[2],
                    l = r[3] || "0",
                    c = r[4] || "0",
                    u = t.includePrerelease && r[5] ? "-".concat(r[5]) : "",
                    h = t.includePrerelease && r[6] ? "+".concat(r[6]) : "";
                return i("".concat(a, ".").concat(l, ".").concat(c).concat(u).concat(h), t)
            }
        },
        42186: function(e, t, r) {
            "use strict";
            let n = r(48905);
            e.exports = (e, t, r) => {
                let i = new n(e, r),
                    s = new n(t, r);
                return i.compare(s) || i.compareBuild(s)
            }
        },
        46817: function(e, t, r) {
            "use strict";
            let n = r(12878);
            e.exports = (e, t) => n(e, t, !0)
        },
        12878: function(e, t, r) {
            "use strict";
            let n = r(48905);
            e.exports = (e, t, r) => new n(e, r).compare(new n(t, r))
        },
        13837: function(e, t, r) {
            "use strict";
            let n = r(58755);
            e.exports = (e, t) => {
                let r = n(e, null, !0),
                    i = n(t, null, !0),
                    s = r.compare(i);
                if (0 === s) return null;
                let o = s > 0,
                    a = o ? r : i,
                    l = o ? i : r,
                    c = !!a.prerelease.length;
                if (l.prerelease.length && !c) return l.patch || l.minor ? a.patch ? "patch" : a.minor ? "minor" : "major" : "major";
                let u = c ? "pre" : "";
                return r.major !== i.major ? u + "major" : r.minor !== i.minor ? u + "minor" : r.patch !== i.patch ? u + "patch" : "prerelease"
            }
        },
        65185: function(e, t, r) {
            "use strict";
            let n = r(12878);
            e.exports = (e, t, r) => 0 === n(e, t, r)
        },
        19452: function(e, t, r) {
            "use strict";
            let n = r(12878);
            e.exports = (e, t, r) => n(e, t, r) > 0
        },
        97698: function(e, t, r) {
            "use strict";
            let n = r(12878);
            e.exports = (e, t, r) => n(e, t, r) >= 0
        },
        26511: function(e, t, r) {
            "use strict";
            let n = r(48905);
            e.exports = (e, t, r, i, s) => {
                "string" == typeof r && (s = i, i = r, r = void 0);
                try {
                    return new n(e instanceof n ? e.version : e, r).inc(t, i, s).version
                } catch (e) {
                    return null
                }
            }
        },
        10878: function(e, t, r) {
            "use strict";
            let n = r(12878);
            e.exports = (e, t, r) => 0 > n(e, t, r)
        },
        15010: function(e, t, r) {
            "use strict";
            let n = r(12878);
            e.exports = (e, t, r) => 0 >= n(e, t, r)
        },
        58905: function(e, t, r) {
            "use strict";
            let n = r(48905);
            e.exports = (e, t) => new n(e, t).major
        },
        33235: function(e, t, r) {
            "use strict";
            let n = r(48905);
            e.exports = (e, t) => new n(e, t).minor
        },
        87196: function(e, t, r) {
            "use strict";
            let n = r(12878);
            e.exports = (e, t, r) => 0 !== n(e, t, r)
        },
        58755: function(e, t, r) {
            "use strict";
            let n = r(48905);
            e.exports = function(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (e instanceof n) return e;
                try {
                    return new n(e, t)
                } catch (e) {
                    if (!r) return null;
                    throw e
                }
            }
        },
        56166: function(e, t, r) {
            "use strict";
            let n = r(48905);
            e.exports = (e, t) => new n(e, t).patch
        },
        90223: function(e, t, r) {
            "use strict";
            let n = r(58755);
            e.exports = (e, t) => {
                let r = n(e, t);
                return r && r.prerelease.length ? r.prerelease : null
            }
        },
        19276: function(e, t, r) {
            "use strict";
            let n = r(12878);
            e.exports = (e, t, r) => n(t, e, r)
        },
        26538: function(e, t, r) {
            "use strict";
            let n = r(42186);
            e.exports = (e, t) => e.sort((e, r) => n(r, e, t))
        },
        32856: function(e, t, r) {
            "use strict";
            let n = r(17485);
            e.exports = (e, t, r) => {
                try {
                    t = new n(t, r)
                } catch (e) {
                    return !1
                }
                return t.test(e)
            }
        },
        52301: function(e, t, r) {
            "use strict";
            let n = r(42186);
            e.exports = (e, t) => e.sort((e, r) => n(e, r, t))
        },
        75781: function(e, t, r) {
            "use strict";
            let n = r(58755);
            e.exports = (e, t) => {
                let r = n(e, t);
                return r ? r.version : null
            }
        },
        73608: function(e, t, r) {
            "use strict";
            let n = r(97927),
                i = r(71375),
                s = r(48905),
                o = r(58907),
                a = r(58755),
                l = r(75781),
                c = r(22734),
                u = r(26511),
                h = r(13837),
                d = r(58905),
                f = r(33235),
                p = r(56166),
                g = r(90223),
                m = r(12878),
                y = r(19276),
                v = r(46817),
                b = r(42186),
                _ = r(52301),
                w = r(26538),
                E = r(19452),
                k = r(10878),
                S = r(65185),
                M = r(87196),
                R = r(97698),
                C = r(15010),
                x = r(9047),
                I = r(70806),
                A = r(84498),
                N = r(17485),
                L = r(32856),
                O = r(72381),
                T = r(97221),
                P = r(87824),
                j = r(26310),
                B = r(43581),
                D = r(82663),
                F = r(91001),
                U = r(65904),
                H = r(8760),
                q = r(29579),
                W = r(77732);
            e.exports = {
                parse: a,
                valid: l,
                clean: c,
                inc: u,
                diff: h,
                major: d,
                minor: f,
                patch: p,
                prerelease: g,
                compare: m,
                rcompare: y,
                compareLoose: v,
                compareBuild: b,
                sort: _,
                rsort: w,
                gt: E,
                lt: k,
                eq: S,
                neq: M,
                gte: R,
                lte: C,
                cmp: x,
                coerce: I,
                Comparator: A,
                Range: N,
                satisfies: L,
                toComparators: O,
                maxSatisfying: T,
                minSatisfying: P,
                minVersion: j,
                validRange: B,
                outside: D,
                gtr: F,
                ltr: U,
                intersects: H,
                simplifyRange: q,
                subset: W,
                SemVer: s,
                re: n.re,
                src: n.src,
                tokens: n.t,
                SEMVER_SPEC_VERSION: i.SEMVER_SPEC_VERSION,
                RELEASE_TYPES: i.RELEASE_TYPES,
                compareIdentifiers: o.compareIdentifiers,
                rcompareIdentifiers: o.rcompareIdentifiers
            }
        },
        71375: function(e) {
            "use strict";
            let t = Number.MAX_SAFE_INTEGER || 9007199254740991;
            e.exports = {
                MAX_LENGTH: 256,
                MAX_SAFE_COMPONENT_LENGTH: 16,
                MAX_SAFE_BUILD_LENGTH: 250,
                MAX_SAFE_INTEGER: t,
                RELEASE_TYPES: ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"],
                SEMVER_SPEC_VERSION: "2.0.0",
                FLAG_INCLUDE_PRERELEASE: 1,
                FLAG_LOOSE: 2
            }
        },
        43069: function(e, t, r) {
            "use strict";
            var n = r(32215);
            let i = "object" == typeof n && n.env && n.env.NODE_DEBUG && /\bsemver\b/i.test(n.env.NODE_DEBUG) ? function() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return console.error("SEMVER", ...t)
            } : () => {};
            e.exports = i
        },
        58907: function(e) {
            "use strict";
            let t = /^[0-9]+$/,
                r = (e, r) => {
                    let n = t.test(e),
                        i = t.test(r);
                    return n && i && (e = +e, r = +r), e === r ? 0 : n && !i ? -1 : i && !n ? 1 : e < r ? -1 : 1
                };
            e.exports = {
                compareIdentifiers: r,
                rcompareIdentifiers: (e, t) => r(t, e)
            }
        },
        65726: function(e) {
            "use strict";
            let t = Object.freeze({
                    loose: !0
                }),
                r = Object.freeze({});
            e.exports = e => e ? "object" != typeof e ? t : e : r
        },
        97927: function(e, t, r) {
            "use strict";
            let {
                MAX_SAFE_COMPONENT_LENGTH: n,
                MAX_SAFE_BUILD_LENGTH: i,
                MAX_LENGTH: s
            } = r(71375), o = r(43069), a = (t = e.exports = {}).re = [], l = t.safeRe = [], c = t.src = [], u = t.t = {}, h = 0, d = "[a-zA-Z0-9-]", f = [
                ["\\s", 1],
                ["\\d", s],
                [d, i]
            ], p = e => {
                for (let [t, r] of f) e = e.split("".concat(t, "*")).join("".concat(t, "{0,").concat(r, "}")).split("".concat(t, "+")).join("".concat(t, "{1,").concat(r, "}"));
                return e
            }, g = (e, t, r) => {
                let n = p(t),
                    i = h++;
                o(e, i, t), u[e] = i, c[i] = t, a[i] = new RegExp(t, r ? "g" : void 0), l[i] = new RegExp(n, r ? "g" : void 0)
            };
            g("NUMERICIDENTIFIER", "0|[1-9]\\d*"), g("NUMERICIDENTIFIERLOOSE", "\\d+"), g("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-]".concat(d, "*")), g("MAINVERSION", "(".concat(c[u.NUMERICIDENTIFIER], ")\\.") + "(".concat(c[u.NUMERICIDENTIFIER], ")\\.") + "(".concat(c[u.NUMERICIDENTIFIER], ")")), g("MAINVERSIONLOOSE", "(".concat(c[u.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(c[u.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(c[u.NUMERICIDENTIFIERLOOSE], ")")), g("PRERELEASEIDENTIFIER", "(?:".concat(c[u.NUMERICIDENTIFIER], "|").concat(c[u.NONNUMERICIDENTIFIER], ")")), g("PRERELEASEIDENTIFIERLOOSE", "(?:".concat(c[u.NUMERICIDENTIFIERLOOSE], "|").concat(c[u.NONNUMERICIDENTIFIER], ")")), g("PRERELEASE", "(?:-(".concat(c[u.PRERELEASEIDENTIFIER], "(?:\\.").concat(c[u.PRERELEASEIDENTIFIER], ")*))")), g("PRERELEASELOOSE", "(?:-?(".concat(c[u.PRERELEASEIDENTIFIERLOOSE], "(?:\\.").concat(c[u.PRERELEASEIDENTIFIERLOOSE], ")*))")), g("BUILDIDENTIFIER", "".concat(d, "+")), g("BUILD", "(?:\\+(".concat(c[u.BUILDIDENTIFIER], "(?:\\.").concat(c[u.BUILDIDENTIFIER], ")*))")), g("FULLPLAIN", "v?".concat(c[u.MAINVERSION]).concat(c[u.PRERELEASE], "?").concat(c[u.BUILD], "?")), g("FULL", "^".concat(c[u.FULLPLAIN], "$")), g("LOOSEPLAIN", "[v=\\s]*".concat(c[u.MAINVERSIONLOOSE]).concat(c[u.PRERELEASELOOSE], "?").concat(c[u.BUILD], "?")), g("LOOSE", "^".concat(c[u.LOOSEPLAIN], "$")), g("GTLT", "((?:<|>)?=?)"), g("XRANGEIDENTIFIERLOOSE", "".concat(c[u.NUMERICIDENTIFIERLOOSE], "|x|X|\\*")), g("XRANGEIDENTIFIER", "".concat(c[u.NUMERICIDENTIFIER], "|x|X|\\*")), g("XRANGEPLAIN", "[v=\\s]*(".concat(c[u.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(c[u.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(c[u.XRANGEIDENTIFIER], ")") + "(?:".concat(c[u.PRERELEASE], ")?").concat(c[u.BUILD], "?") + ")?)?"), g("XRANGEPLAINLOOSE", "[v=\\s]*(".concat(c[u.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(c[u.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(c[u.XRANGEIDENTIFIERLOOSE], ")") + "(?:".concat(c[u.PRERELEASELOOSE], ")?").concat(c[u.BUILD], "?") + ")?)?"), g("XRANGE", "^".concat(c[u.GTLT], "\\s*").concat(c[u.XRANGEPLAIN], "$")), g("XRANGELOOSE", "^".concat(c[u.GTLT], "\\s*").concat(c[u.XRANGEPLAINLOOSE], "$")), g("COERCEPLAIN", "".concat("(^|[^\\d])(\\d{1,").concat(n, "})") + "(?:\\.(\\d{1,".concat(n, "}))?") + "(?:\\.(\\d{1,".concat(n, "}))?")), g("COERCE", "".concat(c[u.COERCEPLAIN], "(?:$|[^\\d])")), g("COERCEFULL", c[u.COERCEPLAIN] + "(?:".concat(c[u.PRERELEASE], ")?") + "(?:".concat(c[u.BUILD], ")?") + "(?:$|[^\\d])"), g("COERCERTL", c[u.COERCE], !0), g("COERCERTLFULL", c[u.COERCEFULL], !0), g("LONETILDE", "(?:~>?)"), g("TILDETRIM", "(\\s*)".concat(c[u.LONETILDE], "\\s+"), !0), t.tildeTrimReplace = "$1~", g("TILDE", "^".concat(c[u.LONETILDE]).concat(c[u.XRANGEPLAIN], "$")), g("TILDELOOSE", "^".concat(c[u.LONETILDE]).concat(c[u.XRANGEPLAINLOOSE], "$")), g("LONECARET", "(?:\\^)"), g("CARETTRIM", "(\\s*)".concat(c[u.LONECARET], "\\s+"), !0), t.caretTrimReplace = "$1^", g("CARET", "^".concat(c[u.LONECARET]).concat(c[u.XRANGEPLAIN], "$")), g("CARETLOOSE", "^".concat(c[u.LONECARET]).concat(c[u.XRANGEPLAINLOOSE], "$")), g("COMPARATORLOOSE", "^".concat(c[u.GTLT], "\\s*(").concat(c[u.LOOSEPLAIN], ")$|^$")), g("COMPARATOR", "^".concat(c[u.GTLT], "\\s*(").concat(c[u.FULLPLAIN], ")$|^$")), g("COMPARATORTRIM", "(\\s*)".concat(c[u.GTLT], "\\s*(").concat(c[u.LOOSEPLAIN], "|").concat(c[u.XRANGEPLAIN], ")"), !0), t.comparatorTrimReplace = "$1$2$3", g("HYPHENRANGE", "^\\s*(".concat(c[u.XRANGEPLAIN], ")") + "\\s+-\\s+" + "(".concat(c[u.XRANGEPLAIN], ")") + "\\s*$"), g("HYPHENRANGELOOSE", "^\\s*(".concat(c[u.XRANGEPLAINLOOSE], ")") + "\\s+-\\s+" + "(".concat(c[u.XRANGEPLAINLOOSE], ")") + "\\s*$"), g("STAR", "(<|>)?=?\\s*\\*"), g("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), g("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$")
        },
        91001: function(e, t, r) {
            "use strict";
            let n = r(82663);
            e.exports = (e, t, r) => n(e, t, ">", r)
        },
        8760: function(e, t, r) {
            "use strict";
            let n = r(17485);
            e.exports = (e, t, r) => (e = new n(e, r), t = new n(t, r), e.intersects(t, r))
        },
        65904: function(e, t, r) {
            "use strict";
            let n = r(82663);
            e.exports = (e, t, r) => n(e, t, "<", r)
        },
        97221: function(e, t, r) {
            "use strict";
            let n = r(48905),
                i = r(17485);
            e.exports = (e, t, r) => {
                let s = null,
                    o = null,
                    a = null;
                try {
                    a = new i(t, r)
                } catch (e) {
                    return null
                }
                return e.forEach(e => {
                    a.test(e) && (!s || -1 === o.compare(e)) && (o = new n(s = e, r))
                }), s
            }
        },
        87824: function(e, t, r) {
            "use strict";
            let n = r(48905),
                i = r(17485);
            e.exports = (e, t, r) => {
                let s = null,
                    o = null,
                    a = null;
                try {
                    a = new i(t, r)
                } catch (e) {
                    return null
                }
                return e.forEach(e => {
                    a.test(e) && (!s || 1 === o.compare(e)) && (o = new n(s = e, r))
                }), s
            }
        },
        26310: function(e, t, r) {
            "use strict";
            let n = r(48905),
                i = r(17485),
                s = r(19452);
            e.exports = (e, t) => {
                e = new i(e, t);
                let r = new n("0.0.0");
                if (e.test(r) || (r = new n("0.0.0-0"), e.test(r))) return r;
                r = null;
                for (let t = 0; t < e.set.length; ++t) {
                    let i = e.set[t],
                        o = null;
                    i.forEach(e => {
                        let t = new n(e.semver.version);
                        switch (e.operator) {
                            case ">":
                                0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), t.raw = t.format();
                            case "":
                            case ">=":
                                (!o || s(t, o)) && (o = t);
                                break;
                            case "<":
                            case "<=":
                                break;
                            default:
                                throw Error("Unexpected operation: ".concat(e.operator))
                        }
                    }), o && (!r || s(r, o)) && (r = o)
                }
                return r && e.test(r) ? r : null
            }
        },
        82663: function(e, t, r) {
            "use strict";
            let n = r(48905),
                i = r(84498),
                {
                    ANY: s
                } = i,
                o = r(17485),
                a = r(32856),
                l = r(19452),
                c = r(10878),
                u = r(15010),
                h = r(97698);
            e.exports = (e, t, r, d) => {
                let f, p, g, m, y;
                switch (e = new n(e, d), t = new o(t, d), r) {
                    case ">":
                        f = l, p = u, g = c, m = ">", y = ">=";
                        break;
                    case "<":
                        f = c, p = h, g = l, m = "<", y = "<=";
                        break;
                    default:
                        throw TypeError('Must provide a hilo val of "<" or ">"')
                }
                if (a(e, t, d)) return !1;
                for (let r = 0; r < t.set.length; ++r) {
                    let n = t.set[r],
                        o = null,
                        a = null;
                    if (n.forEach(e => {
                            e.semver === s && (e = new i(">=0.0.0")), o = o || e, a = a || e, f(e.semver, o.semver, d) ? o = e : g(e.semver, a.semver, d) && (a = e)
                        }), o.operator === m || o.operator === y || (!a.operator || a.operator === m) && p(e, a.semver) || a.operator === y && g(e, a.semver)) return !1
                }
                return !0
            }
        },
        29579: function(e, t, r) {
            "use strict";
            let n = r(32856),
                i = r(12878);
            e.exports = (e, t, r) => {
                let s = [],
                    o = null,
                    a = null,
                    l = e.sort((e, t) => i(e, t, r));
                for (let e of l) n(e, t, r) ? (a = e, o || (o = e)) : (a && s.push([o, a]), a = null, o = null);
                o && s.push([o, null]);
                let c = [];
                for (let [e, t] of s) e === t ? c.push(e) : t || e !== l[0] ? t ? e === l[0] ? c.push("<=".concat(t)) : c.push("".concat(e, " - ").concat(t)) : c.push(">=".concat(e)) : c.push("*");
                let u = c.join(" || "),
                    h = "string" == typeof t.raw ? t.raw : String(t);
                return u.length < h.length ? u : t
            }
        },
        77732: function(e, t, r) {
            "use strict";
            let n = r(17485),
                i = r(84498),
                {
                    ANY: s
                } = i,
                o = r(32856),
                a = r(12878),
                l = [new i(">=0.0.0-0")],
                c = [new i(">=0.0.0")],
                u = (e, t, r) => {
                    let n, i, u, f, p, g, m;
                    if (e === t) return !0;
                    if (1 === e.length && e[0].semver === s) {
                        if (1 === t.length && t[0].semver === s) return !0;
                        e = r.includePrerelease ? l : c
                    }
                    if (1 === t.length && t[0].semver === s) {
                        if (r.includePrerelease) return !0;
                        t = c
                    }
                    let y = new Set;
                    for (let t of e) ">" === t.operator || ">=" === t.operator ? n = h(n, t, r) : "<" === t.operator || "<=" === t.operator ? i = d(i, t, r) : y.add(t.semver);
                    if (y.size > 1 || n && i && ((u = a(n.semver, i.semver, r)) > 0 || 0 === u && (">=" !== n.operator || "<=" !== i.operator))) return null;
                    for (let e of y) {
                        if (n && !o(e, String(n), r) || i && !o(e, String(i), r)) return null;
                        for (let n of t)
                            if (!o(e, String(n), r)) return !1;
                        return !0
                    }
                    let v = !!i && !r.includePrerelease && !!i.semver.prerelease.length && i.semver,
                        b = !!n && !r.includePrerelease && !!n.semver.prerelease.length && n.semver;
                    for (let e of (v && 1 === v.prerelease.length && "<" === i.operator && 0 === v.prerelease[0] && (v = !1), t)) {
                        if (m = m || ">" === e.operator || ">=" === e.operator, g = g || "<" === e.operator || "<=" === e.operator, n) {
                            if (b && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === b.major && e.semver.minor === b.minor && e.semver.patch === b.patch && (b = !1), ">" === e.operator || ">=" === e.operator) {
                                if ((f = h(n, e, r)) === e && f !== n) return !1
                            } else if (">=" === n.operator && !o(n.semver, String(e), r)) return !1
                        }
                        if (i) {
                            if (v && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === v.major && e.semver.minor === v.minor && e.semver.patch === v.patch && (v = !1), "<" === e.operator || "<=" === e.operator) {
                                if ((p = d(i, e, r)) === e && p !== i) return !1
                            } else if ("<=" === i.operator && !o(i.semver, String(e), r)) return !1
                        }
                        if (!e.operator && (i || n) && 0 !== u) return !1
                    }
                    return (!n || !g || !!i || 0 === u) && (!i || !m || !!n || 0 === u) && !b && !v
                },
                h = (e, t, r) => {
                    if (!e) return t;
                    let n = a(e.semver, t.semver, r);
                    return n > 0 ? e : n < 0 ? t : ">" === t.operator && ">=" === e.operator ? t : e
                },
                d = (e, t, r) => {
                    if (!e) return t;
                    let n = a(e.semver, t.semver, r);
                    return n < 0 ? e : n > 0 ? t : "<" === t.operator && "<=" === e.operator ? t : e
                };
            e.exports = function(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (e === t) return !0;
                e = new n(e, r), t = new n(t, r);
                let i = !1;
                e: for (let n of e.set) {
                    for (let e of t.set) {
                        let t = u(n, e, r);
                        if (i = i || null !== t, t) continue e
                    }
                    if (i) return !1
                }
                return !0
            }
        },
        72381: function(e, t, r) {
            "use strict";
            let n = r(17485);
            e.exports = (e, t) => new n(e, t).set.map(e => e.map(e => e.value).join(" ").trim().split(" "))
        },
        43581: function(e, t, r) {
            "use strict";
            let n = r(17485);
            e.exports = (e, t) => {
                try {
                    return new n(e, t).range || "*"
                } catch (e) {
                    return null
                }
            }
        },
        49017: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(69227),
                i = r(46088),
                s = function() {
                    function e() {
                        this._semaphore = new i.default(1)
                    }
                    return e.prototype.acquire = function() {
                        return n.__awaiter(this, void 0, void 0, function() {
                            return n.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, this._semaphore.acquire()];
                                    case 1:
                                        return [2, e.sent()[1]]
                                }
                            })
                        })
                    }, e.prototype.runExclusive = function(e) {
                        return this._semaphore.runExclusive(function() {
                            return e()
                        })
                    }, e.prototype.isLocked = function() {
                        return this._semaphore.isLocked()
                    }, e.prototype.release = function() {
                        this._semaphore.release()
                    }, e
                }();
            t.default = s
        },
        46088: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(69227),
                i = function() {
                    function e(e) {
                        if (this._maxConcurrency = e, this._queue = [], e <= 0) throw Error("semaphore must be initialized to a positive value");
                        this._value = e
                    }
                    return e.prototype.acquire = function() {
                        var e = this,
                            t = this.isLocked(),
                            r = new Promise(function(t) {
                                return e._queue.push(t)
                            });
                        return t || this._dispatch(), r
                    }, e.prototype.runExclusive = function(e) {
                        return n.__awaiter(this, void 0, void 0, function() {
                            var t, r, i;
                            return n.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.acquire()];
                                    case 1:
                                        r = (t = n.sent())[0], i = t[1], n.label = 2;
                                    case 2:
                                        return n.trys.push([2, , 4, 5]), [4, e(r)];
                                    case 3:
                                        return [2, n.sent()];
                                    case 4:
                                        return i(), [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.isLocked = function() {
                        return this._value <= 0
                    }, e.prototype.release = function() {
                        if (this._maxConcurrency > 1) throw Error("this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead");
                        if (this._currentReleaser) {
                            var e = this._currentReleaser;
                            this._currentReleaser = void 0, e()
                        }
                    }, e.prototype._dispatch = function() {
                        var e = this,
                            t = this._queue.shift();
                        if (t) {
                            var r = !1;
                            this._currentReleaser = function() {
                                r || (r = !0, e._value++, e._dispatch())
                            }, t([this._value--, this._currentReleaser])
                        }
                    }, e
                }();
            t.default = i
        },
        70305: function(e, t, r) {
            "use strict";
            t.WU = void 0;
            var n = r(49017);
            Object.defineProperty(t, "WU", {
                enumerable: !0,
                get: function() {
                    return n.default
                }
            }), r(46088), r(43913)
        },
        43913: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.withTimeout = void 0;
            var n = r(69227);
            t.withTimeout = function(e, t, r) {
                var i = this;
                return void 0 === r && (r = Error("timeout")), {
                    acquire: function() {
                        return new Promise(function(s, o) {
                            return n.__awaiter(i, void 0, void 0, function() {
                                var i, a;
                                return n.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return i = !1, setTimeout(function() {
                                                i = !0, o(r)
                                            }, t), [4, e.acquire()];
                                        case 1:
                                            return a = n.sent(), i ? (Array.isArray(a) ? a[1] : a)() : s(a), [2]
                                    }
                                })
                            })
                        })
                    },
                    runExclusive: function(e) {
                        return n.__awaiter(this, void 0, void 0, function() {
                            var t, r;
                            return n.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        t = function() {}, n.label = 1;
                                    case 1:
                                        return n.trys.push([1, , 7, 8]), [4, this.acquire()];
                                    case 2:
                                        if (!Array.isArray(r = n.sent())) return [3, 4];
                                        return t = r[1], [4, e(r[0])];
                                    case 3:
                                    case 5:
                                        return [2, n.sent()];
                                    case 4:
                                        return t = r, [4, e()];
                                    case 6:
                                        return [3, 8];
                                    case 7:
                                        return t(), [7];
                                    case 8:
                                        return [2]
                                }
                            })
                        })
                    },
                    release: function() {
                        e.release()
                    },
                    isLocked: function() {
                        return e.isLocked()
                    }
                }
            }
        },
        34108: function(e, t, r) {
            ! function(e, t) {
                "use strict";

                function n(e, t) {
                    if (!e) throw Error(t || "Assertion failed")
                }

                function i(e, t) {
                    e.super_ = t;
                    var r = function() {};
                    r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                }

                function s(e, t, r) {
                    if (s.isBN(e)) return e;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== e && (("le" === t || "be" === t) && (r = t, t = 10), this._init(e || 0, t || 10, r || "be"))
                }
                "object" == typeof e ? e.exports = s : t.BN = s, s.BN = s, s.wordSize = 26;
                try {
                    h = void 0 !== window.Buffer ? window.Buffer : r(46601).Buffer
                } catch (e) {}

                function o(e, t) {
                    var r = e.charCodeAt(t);
                    return r >= 48 && r <= 57 ? r - 48 : r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : void n(!1, "Invalid character in " + e)
                }

                function a(e, t, r) {
                    var n = o(e, r);
                    return r - 1 >= t && (n |= o(e, r - 1) << 4), n
                }

                function l(e, t, r, i) {
                    for (var s = 0, o = 0, a = Math.min(e.length, r), l = t; l < a; l++) {
                        var c = e.charCodeAt(l) - 48;
                        s *= i, o = c >= 49 ? c - 49 + 10 : c >= 17 ? c - 17 + 10 : c, n(c >= 0 && o < i, "Invalid character"), s += o
                    }
                    return s
                }

                function c(e, t) {
                    e.words = t.words, e.length = t.length, e.negative = t.negative, e.red = t.red
                }
                if (s.isBN = function(e) {
                        return e instanceof s || null !== e && "object" == typeof e && e.constructor.wordSize === s.wordSize && Array.isArray(e.words)
                    }, s.max = function(e, t) {
                        return e.cmp(t) > 0 ? e : t
                    }, s.min = function(e, t) {
                        return 0 > e.cmp(t) ? e : t
                    }, s.prototype._init = function(e, t, r) {
                        if ("number" == typeof e) return this._initNumber(e, t, r);
                        if ("object" == typeof e) return this._initArray(e, t, r);
                        "hex" === t && (t = 16), n(t === (0 | t) && t >= 2 && t <= 36);
                        var i = 0;
                        "-" === (e = e.toString().replace(/\s+/g, ""))[0] && (i++, this.negative = 1), i < e.length && (16 === t ? this._parseHex(e, i, r) : (this._parseBase(e, t, i), "le" === r && this._initArray(this.toArray(), t, r)))
                    }, s.prototype._initNumber = function(e, t, r) {
                        e < 0 && (this.negative = 1, e = -e), e < 67108864 ? (this.words = [67108863 & e], this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863], this.length = 2) : (n(e < 9007199254740992), this.words = [67108863 & e, e / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), t, r)
                    }, s.prototype._initArray = function(e, t, r) {
                        if (n("number" == typeof e.length), e.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(e.length / 3), this.words = Array(this.length);
                        for (var i, s, o = 0; o < this.length; o++) this.words[o] = 0;
                        var a = 0;
                        if ("be" === r)
                            for (o = e.length - 1, i = 0; o >= 0; o -= 3) s = e[o] | e[o - 1] << 8 | e[o - 2] << 16, this.words[i] |= s << a & 67108863, this.words[i + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, i++);
                        else if ("le" === r)
                            for (o = 0, i = 0; o < e.length; o += 3) s = e[o] | e[o + 1] << 8 | e[o + 2] << 16, this.words[i] |= s << a & 67108863, this.words[i + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, i++);
                        return this._strip()
                    }, s.prototype._parseHex = function(e, t, r) {
                        this.length = Math.ceil((e.length - t) / 6), this.words = Array(this.length);
                        for (var n, i = 0; i < this.length; i++) this.words[i] = 0;
                        var s = 0,
                            o = 0;
                        if ("be" === r)
                            for (i = e.length - 1; i >= t; i -= 2) n = a(e, t, i) << s, this.words[o] |= 67108863 & n, s >= 18 ? (s -= 18, o += 1, this.words[o] |= n >>> 26) : s += 8;
                        else
                            for (i = (e.length - t) % 2 == 0 ? t + 1 : t; i < e.length; i += 2) n = a(e, t, i) << s, this.words[o] |= 67108863 & n, s >= 18 ? (s -= 18, o += 1, this.words[o] |= n >>> 26) : s += 8;
                        this._strip()
                    }, s.prototype._parseBase = function(e, t, r) {
                        this.words = [0], this.length = 1;
                        for (var n = 0, i = 1; i <= 67108863; i *= t) n++;
                        n--, i = i / t | 0;
                        for (var s = e.length - r, o = s % n, a = Math.min(s, s - o) + r, c = 0, u = r; u < a; u += n) c = l(e, u, u + n, t), this.imuln(i), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
                        if (0 !== o) {
                            var h = 1;
                            for (c = l(e, u, e.length, t), u = 0; u < o; u++) h *= t;
                            this.imuln(h), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c)
                        }
                        this._strip()
                    }, s.prototype.copy = function(e) {
                        e.words = Array(this.length);
                        for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
                        e.length = this.length, e.negative = this.negative, e.red = this.red
                    }, s.prototype._move = function(e) {
                        c(e, this)
                    }, s.prototype.clone = function() {
                        var e = new s(null);
                        return this.copy(e), e
                    }, s.prototype._expand = function(e) {
                        for (; this.length < e;) this.words[this.length++] = 0;
                        return this
                    }, s.prototype._strip = function() {
                        for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                        return this._normSign()
                    }, s.prototype._normSign = function() {
                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                    }, "undefined" != typeof Symbol && "function" == typeof Symbol.for) try {
                    s.prototype[Symbol.for("nodejs.util.inspect.custom")] = u
                } catch (e) {
                    s.prototype.inspect = u
                } else s.prototype.inspect = u;

                function u() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                }
                var h, d = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    f = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    p = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                function g(e, t, r) {
                    r.negative = t.negative ^ e.negative;
                    var n = e.length + t.length | 0;
                    r.length = n, n = n - 1 | 0;
                    var i = 0 | e.words[0],
                        s = 0 | t.words[0],
                        o = i * s,
                        a = 67108863 & o,
                        l = o / 67108864 | 0;
                    r.words[0] = a;
                    for (var c = 1; c < n; c++) {
                        for (var u = l >>> 26, h = 67108863 & l, d = Math.min(c, t.length - 1), f = Math.max(0, c - e.length + 1); f <= d; f++) {
                            var p = c - f | 0;
                            u += (o = (i = 0 | e.words[p]) * (s = 0 | t.words[f]) + h) / 67108864 | 0, h = 67108863 & o
                        }
                        r.words[c] = 0 | h, l = 0 | u
                    }
                    return 0 !== l ? r.words[c] = 0 | l : r.length--, r._strip()
                }
                s.prototype.toString = function(e, t) {
                    if (t = 0 | t || 1, 16 === (e = e || 10) || "hex" === e) {
                        r = "";
                        for (var r, i = 0, s = 0, o = 0; o < this.length; o++) {
                            var a = this.words[o],
                                l = ((a << i | s) & 16777215).toString(16);
                            s = a >>> 24 - i & 16777215, (i += 2) >= 26 && (i -= 26, o--), r = 0 !== s || o !== this.length - 1 ? d[6 - l.length] + l + r : l + r
                        }
                        for (0 !== s && (r = s.toString(16) + r); r.length % t != 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    if (e === (0 | e) && e >= 2 && e <= 36) {
                        var c = f[e],
                            u = p[e];
                        r = "";
                        var h = this.clone();
                        for (h.negative = 0; !h.isZero();) {
                            var g = h.modrn(u).toString(e);
                            r = (h = h.idivn(u)).isZero() ? g + r : d[c - g.length] + g + r
                        }
                        for (this.isZero() && (r = "0" + r); r.length % t != 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    n(!1, "Base should be between 2 and 36")
                }, s.prototype.toNumber = function() {
                    var e = this.words[0];
                    return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -e : e
                }, s.prototype.toJSON = function() {
                    return this.toString(16, 2)
                }, h && (s.prototype.toBuffer = function(e, t) {
                    return this.toArrayLike(h, e, t)
                }), s.prototype.toArray = function(e, t) {
                    return this.toArrayLike(Array, e, t)
                }, s.prototype.toArrayLike = function(e, t, r) {
                    this._strip();
                    var i = this.byteLength(),
                        s = r || Math.max(1, i);
                    n(i <= s, "byte array longer than desired length"), n(s > 0, "Requested array length <= 0");
                    var o = e.allocUnsafe ? e.allocUnsafe(s) : new e(s);
                    return this["_toArrayLike" + ("le" === t ? "LE" : "BE")](o, i), o
                }, s.prototype._toArrayLikeLE = function(e, t) {
                    for (var r = 0, n = 0, i = 0, s = 0; i < this.length; i++) {
                        var o = this.words[i] << s | n;
                        e[r++] = 255 & o, r < e.length && (e[r++] = o >> 8 & 255), r < e.length && (e[r++] = o >> 16 & 255), 6 === s ? (r < e.length && (e[r++] = o >> 24 & 255), n = 0, s = 0) : (n = o >>> 24, s += 2)
                    }
                    if (r < e.length)
                        for (e[r++] = n; r < e.length;) e[r++] = 0
                }, s.prototype._toArrayLikeBE = function(e, t) {
                    for (var r = e.length - 1, n = 0, i = 0, s = 0; i < this.length; i++) {
                        var o = this.words[i] << s | n;
                        e[r--] = 255 & o, r >= 0 && (e[r--] = o >> 8 & 255), r >= 0 && (e[r--] = o >> 16 & 255), 6 === s ? (r >= 0 && (e[r--] = o >> 24 & 255), n = 0, s = 0) : (n = o >>> 24, s += 2)
                    }
                    if (r >= 0)
                        for (e[r--] = n; r >= 0;) e[r--] = 0
                }, Math.clz32 ? s.prototype._countBits = function(e) {
                    return 32 - Math.clz32(e)
                } : s.prototype._countBits = function(e) {
                    var t = e,
                        r = 0;
                    return t >= 4096 && (r += 13, t >>>= 13), t >= 64 && (r += 7, t >>>= 7), t >= 8 && (r += 4, t >>>= 4), t >= 2 && (r += 2, t >>>= 2), r + t
                }, s.prototype._zeroBits = function(e) {
                    if (0 === e) return 26;
                    var t = e,
                        r = 0;
                    return (8191 & t) == 0 && (r += 13, t >>>= 13), (127 & t) == 0 && (r += 7, t >>>= 7), (15 & t) == 0 && (r += 4, t >>>= 4), (3 & t) == 0 && (r += 2, t >>>= 2), (1 & t) == 0 && r++, r
                }, s.prototype.bitLength = function() {
                    var e = this.words[this.length - 1],
                        t = this._countBits(e);
                    return (this.length - 1) * 26 + t
                }, s.prototype.zeroBits = function() {
                    if (this.isZero()) return 0;
                    for (var e = 0, t = 0; t < this.length; t++) {
                        var r = this._zeroBits(this.words[t]);
                        if (e += r, 26 !== r) break
                    }
                    return e
                }, s.prototype.byteLength = function() {
                    return Math.ceil(this.bitLength() / 8)
                }, s.prototype.toTwos = function(e) {
                    return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone()
                }, s.prototype.fromTwos = function(e) {
                    return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone()
                }, s.prototype.isNeg = function() {
                    return 0 !== this.negative
                }, s.prototype.neg = function() {
                    return this.clone().ineg()
                }, s.prototype.ineg = function() {
                    return this.isZero() || (this.negative ^= 1), this
                }, s.prototype.iuor = function(e) {
                    for (; this.length < e.length;) this.words[this.length++] = 0;
                    for (var t = 0; t < e.length; t++) this.words[t] = this.words[t] | e.words[t];
                    return this._strip()
                }, s.prototype.ior = function(e) {
                    return n((this.negative | e.negative) == 0), this.iuor(e)
                }, s.prototype.or = function(e) {
                    return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this)
                }, s.prototype.uor = function(e) {
                    return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this)
                }, s.prototype.iuand = function(e) {
                    var t;
                    t = this.length > e.length ? e : this;
                    for (var r = 0; r < t.length; r++) this.words[r] = this.words[r] & e.words[r];
                    return this.length = t.length, this._strip()
                }, s.prototype.iand = function(e) {
                    return n((this.negative | e.negative) == 0), this.iuand(e)
                }, s.prototype.and = function(e) {
                    return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this)
                }, s.prototype.uand = function(e) {
                    return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this)
                }, s.prototype.iuxor = function(e) {
                    this.length > e.length ? (t = this, r = e) : (t = e, r = this);
                    for (var t, r, n = 0; n < r.length; n++) this.words[n] = t.words[n] ^ r.words[n];
                    if (this !== t)
                        for (; n < t.length; n++) this.words[n] = t.words[n];
                    return this.length = t.length, this._strip()
                }, s.prototype.ixor = function(e) {
                    return n((this.negative | e.negative) == 0), this.iuxor(e)
                }, s.prototype.xor = function(e) {
                    return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this)
                }, s.prototype.uxor = function(e) {
                    return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this)
                }, s.prototype.inotn = function(e) {
                    n("number" == typeof e && e >= 0);
                    var t = 0 | Math.ceil(e / 26),
                        r = e % 26;
                    this._expand(t), r > 0 && t--;
                    for (var i = 0; i < t; i++) this.words[i] = 67108863 & ~this.words[i];
                    return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this._strip()
                }, s.prototype.notn = function(e) {
                    return this.clone().inotn(e)
                }, s.prototype.setn = function(e, t) {
                    n("number" == typeof e && e >= 0);
                    var r = e / 26 | 0,
                        i = e % 26;
                    return this._expand(r + 1), t ? this.words[r] = this.words[r] | 1 << i : this.words[r] = this.words[r] & ~(1 << i), this._strip()
                }, s.prototype.iadd = function(e) {
                    if (0 !== this.negative && 0 === e.negative) return this.negative = 0, t = this.isub(e), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== e.negative) return e.negative = 0, t = this.isub(e), e.negative = 1, t._normSign();
                    this.length > e.length ? (r = this, n = e) : (r = e, n = this);
                    for (var t, r, n, i = 0, s = 0; s < n.length; s++) t = (0 | r.words[s]) + (0 | n.words[s]) + i, this.words[s] = 67108863 & t, i = t >>> 26;
                    for (; 0 !== i && s < r.length; s++) t = (0 | r.words[s]) + i, this.words[s] = 67108863 & t, i = t >>> 26;
                    if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++;
                    else if (r !== this)
                        for (; s < r.length; s++) this.words[s] = r.words[s];
                    return this
                }, s.prototype.add = function(e) {
                    var t;
                    return 0 !== e.negative && 0 === this.negative ? (e.negative = 0, t = this.sub(e), e.negative ^= 1, t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0, t = e.sub(this), this.negative = 1, t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this)
                }, s.prototype.isub = function(e) {
                    if (0 !== e.negative) {
                        e.negative = 0;
                        var t, r, n = this.iadd(e);
                        return e.negative = 1, n._normSign()
                    }
                    if (0 !== this.negative) return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign();
                    var i = this.cmp(e);
                    if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    i > 0 ? (t = this, r = e) : (t = e, r = this);
                    for (var s = 0, o = 0; o < r.length; o++) s = (n = (0 | t.words[o]) - (0 | r.words[o]) + s) >> 26, this.words[o] = 67108863 & n;
                    for (; 0 !== s && o < t.length; o++) s = (n = (0 | t.words[o]) + s) >> 26, this.words[o] = 67108863 & n;
                    if (0 === s && o < t.length && t !== this)
                        for (; o < t.length; o++) this.words[o] = t.words[o];
                    return this.length = Math.max(this.length, o), t !== this && (this.negative = 1), this._strip()
                }, s.prototype.sub = function(e) {
                    return this.clone().isub(e)
                };
                var m = function(e, t, r) {
                    var n, i, s, o = e.words,
                        a = t.words,
                        l = r.words,
                        c = 0,
                        u = 0 | o[0],
                        h = 8191 & u,
                        d = u >>> 13,
                        f = 0 | o[1],
                        p = 8191 & f,
                        g = f >>> 13,
                        m = 0 | o[2],
                        y = 8191 & m,
                        v = m >>> 13,
                        b = 0 | o[3],
                        _ = 8191 & b,
                        w = b >>> 13,
                        E = 0 | o[4],
                        k = 8191 & E,
                        S = E >>> 13,
                        M = 0 | o[5],
                        R = 8191 & M,
                        C = M >>> 13,
                        x = 0 | o[6],
                        I = 8191 & x,
                        A = x >>> 13,
                        N = 0 | o[7],
                        L = 8191 & N,
                        O = N >>> 13,
                        T = 0 | o[8],
                        P = 8191 & T,
                        j = T >>> 13,
                        B = 0 | o[9],
                        D = 8191 & B,
                        F = B >>> 13,
                        U = 0 | a[0],
                        H = 8191 & U,
                        q = U >>> 13,
                        W = 0 | a[1],
                        z = 8191 & W,
                        V = W >>> 13,
                        J = 0 | a[2],
                        G = 8191 & J,
                        Z = J >>> 13,
                        Q = 0 | a[3],
                        Y = 8191 & Q,
                        K = Q >>> 13,
                        X = 0 | a[4],
                        $ = 8191 & X,
                        ee = X >>> 13,
                        et = 0 | a[5],
                        er = 8191 & et,
                        en = et >>> 13,
                        ei = 0 | a[6],
                        es = 8191 & ei,
                        eo = ei >>> 13,
                        ea = 0 | a[7],
                        el = 8191 & ea,
                        ec = ea >>> 13,
                        eu = 0 | a[8],
                        eh = 8191 & eu,
                        ed = eu >>> 13,
                        ef = 0 | a[9],
                        ep = 8191 & ef,
                        eg = ef >>> 13;
                    r.negative = e.negative ^ t.negative, r.length = 19;
                    var em = (c + (n = Math.imul(h, H)) | 0) + ((8191 & (i = (i = Math.imul(h, q)) + Math.imul(d, H) | 0)) << 13) | 0;
                    c = ((s = Math.imul(d, q)) + (i >>> 13) | 0) + (em >>> 26) | 0, em &= 67108863, n = Math.imul(p, H), i = (i = Math.imul(p, q)) + Math.imul(g, H) | 0, s = Math.imul(g, q);
                    var ey = (c + (n = n + Math.imul(h, z) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, V) | 0) + Math.imul(d, z) | 0)) << 13) | 0;
                    c = ((s = s + Math.imul(d, V) | 0) + (i >>> 13) | 0) + (ey >>> 26) | 0, ey &= 67108863, n = Math.imul(y, H), i = (i = Math.imul(y, q)) + Math.imul(v, H) | 0, s = Math.imul(v, q), n = n + Math.imul(p, z) | 0, i = (i = i + Math.imul(p, V) | 0) + Math.imul(g, z) | 0, s = s + Math.imul(g, V) | 0;
                    var ev = (c + (n = n + Math.imul(h, G) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, Z) | 0) + Math.imul(d, G) | 0)) << 13) | 0;
                    c = ((s = s + Math.imul(d, Z) | 0) + (i >>> 13) | 0) + (ev >>> 26) | 0, ev &= 67108863, n = Math.imul(_, H), i = (i = Math.imul(_, q)) + Math.imul(w, H) | 0, s = Math.imul(w, q), n = n + Math.imul(y, z) | 0, i = (i = i + Math.imul(y, V) | 0) + Math.imul(v, z) | 0, s = s + Math.imul(v, V) | 0, n = n + Math.imul(p, G) | 0, i = (i = i + Math.imul(p, Z) | 0) + Math.imul(g, G) | 0, s = s + Math.imul(g, Z) | 0;
                    var eb = (c + (n = n + Math.imul(h, Y) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, K) | 0) + Math.imul(d, Y) | 0)) << 13) | 0;
                    c = ((s = s + Math.imul(d, K) | 0) + (i >>> 13) | 0) + (eb >>> 26) | 0, eb &= 67108863, n = Math.imul(k, H), i = (i = Math.imul(k, q)) + Math.imul(S, H) | 0, s = Math.imul(S, q), n = n + Math.imul(_, z) | 0, i = (i = i + Math.imul(_, V) | 0) + Math.imul(w, z) | 0, s = s + Math.imul(w, V) | 0, n = n + Math.imul(y, G) | 0, i = (i = i + Math.imul(y, Z) | 0) + Math.imul(v, G) | 0, s = s + Math.imul(v, Z) | 0, n = n + Math.imul(p, Y) | 0, i = (i = i + Math.imul(p, K) | 0) + Math.imul(g, Y) | 0, s = s + Math.imul(g, K) | 0;
                    var e_ = (c + (n = n + Math.imul(h, $) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ee) | 0) + Math.imul(d, $) | 0)) << 13) | 0;
                    c = ((s = s + Math.imul(d, ee) | 0) + (i >>> 13) | 0) + (e_ >>> 26) | 0, e_ &= 67108863, n = Math.imul(R, H), i = (i = Math.imul(R, q)) + Math.imul(C, H) | 0, s = Math.imul(C, q), n = n + Math.imul(k, z) | 0, i = (i = i + Math.imul(k, V) | 0) + Math.imul(S, z) | 0, s = s + Math.imul(S, V) | 0, n = n + Math.imul(_, G) | 0, i = (i = i + Math.imul(_, Z) | 0) + Math.imul(w, G) | 0, s = s + Math.imul(w, Z) | 0, n = n + Math.imul(y, Y) | 0, i = (i = i + Math.imul(y, K) | 0) + Math.imul(v, Y) | 0, s = s + Math.imul(v, K) | 0, n = n + Math.imul(p, $) | 0, i = (i = i + Math.imul(p, ee) | 0) + Math.imul(g, $) | 0, s = s + Math.imul(g, ee) | 0;
                    var ew = (c + (n = n + Math.imul(h, er) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, en) | 0) + Math.imul(d, er) | 0)) << 13) | 0;
                    c = ((s = s + Math.imul(d, en) | 0) + (i >>> 13) | 0) + (ew >>> 26) | 0, ew &= 67108863, n = Math.imul(I, H), i = (i = Math.imul(I, q)) + Math.imul(A, H) | 0, s = Math.imul(A, q), n = n + Math.imul(R, z) | 0, i = (i = i + Math.imul(R, V) | 0) + Math.imul(C, z) | 0, s = s + Math.imul(C, V) | 0, n = n + Math.imul(k, G) | 0, i = (i = i + Math.imul(k, Z) | 0) + Math.imul(S, G) | 0, s = s + Math.imul(S, Z) | 0, n = n + Math.imul(_, Y) | 0, i = (i = i + Math.imul(_, K) | 0) + Math.imul(w, Y) | 0, s = s + Math.imul(w, K) | 0, n = n + Math.imul(y, $) | 0, i = (i = i + Math.imul(y, ee) | 0) + Math.imul(v, $) | 0, s = s + Math.imul(v, ee) | 0, n = n + Math.imul(p, er) | 0, i = (i = i + Math.imul(p, en) | 0) + Math.imul(g, er) | 0, s = s + Math.imul(g, en) | 0;
                    var eE = (c + (n = n + Math.imul(h, es) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, eo) | 0) + Math.imul(d, es) | 0)) << 13) | 0;
                    c = ((s = s + Math.imul(d, eo) | 0) + (i >>> 13) | 0) + (eE >>> 26) | 0, eE &= 67108863, n = Math.imul(L, H), i = (i = Math.imul(L, q)) + Math.imul(O, H) | 0, s = Math.imul(O, q), n = n + Math.imul(I, z) | 0, i = (i = i + Math.imul(I, V) | 0) + Math.imul(A, z) | 0, s = s + Math.imul(A, V) | 0, n = n + Math.imul(R, G) | 0, i = (i = i + Math.imul(R, Z) | 0) + Math.imul(C, G) | 0, s = s + Math.imul(C, Z) | 0, n = n + Math.imul(k, Y) | 0, i = (i = i + Math.imul(k, K) | 0) + Math.imul(S, Y) | 0, s = s + Math.imul(S, K) | 0, n = n + Math.imul(_, $) | 0, i = (i = i + Math.imul(_, ee) | 0) + Math.imul(w, $) | 0, s = s + Math.imul(w, ee) | 0, n = n + Math.imul(y, er) | 0, i = (i = i + Math.imul(y, en) | 0) + Math.imul(v, er) | 0, s = s + Math.imul(v, en) | 0, n = n + Math.imul(p, es) | 0, i = (i = i + Math.imul(p, eo) | 0) + Math.imul(g, es) | 0, s = s + Math.imul(g, eo) | 0;
                    var ek = (c + (n = n + Math.imul(h, el) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ec) | 0) + Math.imul(d, el) | 0)) << 13) | 0;
                    c = ((s = s + Math.imul(d, ec) | 0) + (i >>> 13) | 0) + (ek >>> 26) | 0, ek &= 67108863, n = Math.imul(P, H), i = (i = Math.imul(P, q)) + Math.imul(j, H) | 0, s = Math.imul(j, q), n = n + Math.imul(L, z) | 0, i = (i = i + Math.imul(L, V) | 0) + Math.imul(O, z) | 0, s = s + Math.imul(O, V) | 0, n = n + Math.imul(I, G) | 0, i = (i = i + Math.imul(I, Z) | 0) + Math.imul(A, G) | 0, s = s + Math.imul(A, Z) | 0, n = n + Math.imul(R, Y) | 0, i = (i = i + Math.imul(R, K) | 0) + Math.imul(C, Y) | 0, s = s + Math.imul(C, K) | 0, n = n + Math.imul(k, $) | 0, i = (i = i + Math.imul(k, ee) | 0) + Math.imul(S, $) | 0, s = s + Math.imul(S, ee) | 0, n = n + Math.imul(_, er) | 0, i = (i = i + Math.imul(_, en) | 0) + Math.imul(w, er) | 0, s = s + Math.imul(w, en) | 0, n = n + Math.imul(y, es) | 0, i = (i = i + Math.imul(y, eo) | 0) + Math.imul(v, es) | 0, s = s + Math.imul(v, eo) | 0, n = n + Math.imul(p, el) | 0, i = (i = i + Math.imul(p, ec) | 0) + Math.imul(g, el) | 0, s = s + Math.imul(g, ec) | 0;
                    var eS = (c + (n = n + Math.imul(h, eh) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ed) | 0) + Math.imul(d, eh) | 0)) << 13) | 0;
                    c = ((s = s + Math.imul(d, ed) | 0) + (i >>> 13) | 0) + (eS >>> 26) | 0, eS &= 67108863, n = Math.imul(D, H), i = (i = Math.imul(D, q)) + Math.imul(F, H) | 0, s = Math.imul(F, q), n = n + Math.imul(P, z) | 0, i = (i = i + Math.imul(P, V) | 0) + Math.imul(j, z) | 0, s = s + Math.imul(j, V) | 0, n = n + Math.imul(L, G) | 0, i = (i = i + Math.imul(L, Z) | 0) + Math.imul(O, G) | 0, s = s + Math.imul(O, Z) | 0, n = n + Math.imul(I, Y) | 0, i = (i = i + Math.imul(I, K) | 0) + Math.imul(A, Y) | 0, s = s + Math.imul(A, K) | 0, n = n + Math.imul(R, $) | 0, i = (i = i + Math.imul(R, ee) | 0) + Math.imul(C, $) | 0, s = s + Math.imul(C, ee) | 0, n = n + Math.imul(k, er) | 0, i = (i = i + Math.imul(k, en) | 0) + Math.imul(S, er) | 0, s = s + Math.imul(S, en) | 0, n = n + Math.imul(_, es) | 0, i = (i = i + Math.imul(_, eo) | 0) + Math.imul(w, es) | 0, s = s + Math.imul(w, eo) | 0, n = n + Math.imul(y, el) | 0, i = (i = i + Math.imul(y, ec) | 0) + Math.imul(v, el) | 0, s = s + Math.imul(v, ec) | 0, n = n + Math.imul(p, eh) | 0, i = (i = i + Math.imul(p, ed) | 0) + Math.imul(g, eh) | 0, s = s + Math.imul(g, ed) | 0;
                    var eM = (c + (n = n + Math.imul(h, ep) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, eg) | 0) + Math.imul(d, ep) | 0)) << 13) | 0;
                    c = ((s = s + Math.imul(d, eg) | 0) + (i >>> 13) | 0) + (eM >>> 26) | 0, eM &= 67108863, n = Math.imul(D, z), i = (i = Math.imul(D, V)) + Math.imul(F, z) | 0, s = Math.imul(F, V), n = n + Math.imul(P, G) | 0, i = (i = i + Math.imul(P, Z) | 0) + Math.imul(j, G) | 0, s = s + Math.imul(j, Z) | 0, n = n + Math.imul(L, Y) | 0, i = (i = i + Math.imul(L, K) | 0) + Math.imul(O, Y) | 0, s = s + Math.imul(O, K) | 0, n = n + Math.imul(I, $) | 0, i = (i = i + Math.imul(I, ee) | 0) + Math.imul(A, $) | 0, s = s + Math.imul(A, ee) | 0, n = n + Math.imul(R, er) | 0, i = (i = i + Math.imul(R, en) | 0) + Math.imul(C, er) | 0, s = s + Math.imul(C, en) | 0, n = n + Math.imul(k, es) | 0, i = (i = i + Math.imul(k, eo) | 0) + Math.imul(S, es) | 0, s = s + Math.imul(S, eo) | 0, n = n + Math.imul(_, el) | 0, i = (i = i + Math.imul(_, ec) | 0) + Math.imul(w, el) | 0, s = s + Math.imul(w, ec) | 0, n = n + Math.imul(y, eh) | 0, i = (i = i + Math.imul(y, ed) | 0) + Math.imul(v, eh) | 0, s = s + Math.imul(v, ed) | 0;
                    var eR = (c + (n = n + Math.imul(p, ep) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, eg) | 0) + Math.imul(g, ep) | 0)) << 13) | 0;
                    c = ((s = s + Math.imul(g, eg) | 0) + (i >>> 13) | 0) + (eR >>> 26) | 0, eR &= 67108863, n = Math.imul(D, G), i = (i = Math.imul(D, Z)) + Math.imul(F, G) | 0, s = Math.imul(F, Z), n = n + Math.imul(P, Y) | 0, i = (i = i + Math.imul(P, K) | 0) + Math.imul(j, Y) | 0, s = s + Math.imul(j, K) | 0, n = n + Math.imul(L, $) | 0, i = (i = i + Math.imul(L, ee) | 0) + Math.imul(O, $) | 0, s = s + Math.imul(O, ee) | 0, n = n + Math.imul(I, er) | 0, i = (i = i + Math.imul(I, en) | 0) + Math.imul(A, er) | 0, s = s + Math.imul(A, en) | 0, n = n + Math.imul(R, es) | 0, i = (i = i + Math.imul(R, eo) | 0) + Math.imul(C, es) | 0, s = s + Math.imul(C, eo) | 0, n = n + Math.imul(k, el) | 0, i = (i = i + Math.imul(k, ec) | 0) + Math.imul(S, el) | 0, s = s + Math.imul(S, ec) | 0, n = n + Math.imul(_, eh) | 0, i = (i = i + Math.imul(_, ed) | 0) + Math.imul(w, eh) | 0, s = s + Math.imul(w, ed) | 0;
                    var eC = (c + (n = n + Math.imul(y, ep) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(y, eg) | 0) + Math.imul(v, ep) | 0)) << 13) | 0;
                    c = ((s = s + Math.imul(v, eg) | 0) + (i >>> 13) | 0) + (eC >>> 26) | 0, eC &= 67108863, n = Math.imul(D, Y), i = (i = Math.imul(D, K)) + Math.imul(F, Y) | 0, s = Math.imul(F, K), n = n + Math.imul(P, $) | 0, i = (i = i + Math.imul(P, ee) | 0) + Math.imul(j, $) | 0, s = s + Math.imul(j, ee) | 0, n = n + Math.imul(L, er) | 0, i = (i = i + Math.imul(L, en) | 0) + Math.imul(O, er) | 0, s = s + Math.imul(O, en) | 0, n = n + Math.imul(I, es) | 0, i = (i = i + Math.imul(I, eo) | 0) + Math.imul(A, es) | 0, s = s + Math.imul(A, eo) | 0, n = n + Math.imul(R, el) | 0, i = (i = i + Math.imul(R, ec) | 0) + Math.imul(C, el) | 0, s = s + Math.imul(C, ec) | 0, n = n + Math.imul(k, eh) | 0, i = (i = i + Math.imul(k, ed) | 0) + Math.imul(S, eh) | 0, s = s + Math.imul(S, ed) | 0;
                    var ex = (c + (n = n + Math.imul(_, ep) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(_, eg) | 0) + Math.imul(w, ep) | 0)) << 13) | 0;
                    c = ((s = s + Math.imul(w, eg) | 0) + (i >>> 13) | 0) + (ex >>> 26) | 0, ex &= 67108863, n = Math.imul(D, $), i = (i = Math.imul(D, ee)) + Math.imul(F, $) | 0, s = Math.imul(F, ee), n = n + Math.imul(P, er) | 0, i = (i = i + Math.imul(P, en) | 0) + Math.imul(j, er) | 0, s = s + Math.imul(j, en) | 0, n = n + Math.imul(L, es) | 0, i = (i = i + Math.imul(L, eo) | 0) + Math.imul(O, es) | 0, s = s + Math.imul(O, eo) | 0, n = n + Math.imul(I, el) | 0, i = (i = i + Math.imul(I, ec) | 0) + Math.imul(A, el) | 0, s = s + Math.imul(A, ec) | 0, n = n + Math.imul(R, eh) | 0, i = (i = i + Math.imul(R, ed) | 0) + Math.imul(C, eh) | 0, s = s + Math.imul(C, ed) | 0;
                    var eI = (c + (n = n + Math.imul(k, ep) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(k, eg) | 0) + Math.imul(S, ep) | 0)) << 13) | 0;
                    c = ((s = s + Math.imul(S, eg) | 0) + (i >>> 13) | 0) + (eI >>> 26) | 0, eI &= 67108863, n = Math.imul(D, er), i = (i = Math.imul(D, en)) + Math.imul(F, er) | 0, s = Math.imul(F, en), n = n + Math.imul(P, es) | 0, i = (i = i + Math.imul(P, eo) | 0) + Math.imul(j, es) | 0, s = s + Math.imul(j, eo) | 0, n = n + Math.imul(L, el) | 0, i = (i = i + Math.imul(L, ec) | 0) + Math.imul(O, el) | 0, s = s + Math.imul(O, ec) | 0, n = n + Math.imul(I, eh) | 0, i = (i = i + Math.imul(I, ed) | 0) + Math.imul(A, eh) | 0, s = s + Math.imul(A, ed) | 0;
                    var eA = (c + (n = n + Math.imul(R, ep) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(R, eg) | 0) + Math.imul(C, ep) | 0)) << 13) | 0;
                    c = ((s = s + Math.imul(C, eg) | 0) + (i >>> 13) | 0) + (eA >>> 26) | 0, eA &= 67108863, n = Math.imul(D, es), i = (i = Math.imul(D, eo)) + Math.imul(F, es) | 0, s = Math.imul(F, eo), n = n + Math.imul(P, el) | 0, i = (i = i + Math.imul(P, ec) | 0) + Math.imul(j, el) | 0, s = s + Math.imul(j, ec) | 0, n = n + Math.imul(L, eh) | 0, i = (i = i + Math.imul(L, ed) | 0) + Math.imul(O, eh) | 0, s = s + Math.imul(O, ed) | 0;
                    var eN = (c + (n = n + Math.imul(I, ep) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(I, eg) | 0) + Math.imul(A, ep) | 0)) << 13) | 0;
                    c = ((s = s + Math.imul(A, eg) | 0) + (i >>> 13) | 0) + (eN >>> 26) | 0, eN &= 67108863, n = Math.imul(D, el), i = (i = Math.imul(D, ec)) + Math.imul(F, el) | 0, s = Math.imul(F, ec), n = n + Math.imul(P, eh) | 0, i = (i = i + Math.imul(P, ed) | 0) + Math.imul(j, eh) | 0, s = s + Math.imul(j, ed) | 0;
                    var eL = (c + (n = n + Math.imul(L, ep) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(L, eg) | 0) + Math.imul(O, ep) | 0)) << 13) | 0;
                    c = ((s = s + Math.imul(O, eg) | 0) + (i >>> 13) | 0) + (eL >>> 26) | 0, eL &= 67108863, n = Math.imul(D, eh), i = (i = Math.imul(D, ed)) + Math.imul(F, eh) | 0, s = Math.imul(F, ed);
                    var eO = (c + (n = n + Math.imul(P, ep) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(P, eg) | 0) + Math.imul(j, ep) | 0)) << 13) | 0;
                    c = ((s = s + Math.imul(j, eg) | 0) + (i >>> 13) | 0) + (eO >>> 26) | 0, eO &= 67108863;
                    var eT = (c + (n = Math.imul(D, ep)) | 0) + ((8191 & (i = (i = Math.imul(D, eg)) + Math.imul(F, ep) | 0)) << 13) | 0;
                    return c = ((s = Math.imul(F, eg)) + (i >>> 13) | 0) + (eT >>> 26) | 0, eT &= 67108863, l[0] = em, l[1] = ey, l[2] = ev, l[3] = eb, l[4] = e_, l[5] = ew, l[6] = eE, l[7] = ek, l[8] = eS, l[9] = eM, l[10] = eR, l[11] = eC, l[12] = ex, l[13] = eI, l[14] = eA, l[15] = eN, l[16] = eL, l[17] = eO, l[18] = eT, 0 !== c && (l[19] = c, r.length++), r
                };

                function y(e, t, r) {
                    r.negative = t.negative ^ e.negative, r.length = e.length + t.length;
                    for (var n = 0, i = 0, s = 0; s < r.length - 1; s++) {
                        var o = i;
                        i = 0;
                        for (var a = 67108863 & n, l = Math.min(s, t.length - 1), c = Math.max(0, s - e.length + 1); c <= l; c++) {
                            var u = s - c,
                                h = (0 | e.words[u]) * (0 | t.words[c]),
                                d = 67108863 & h;
                            o = o + (h / 67108864 | 0) | 0, a = 67108863 & (d = d + a | 0), i += (o = o + (d >>> 26) | 0) >>> 26, o &= 67108863
                        }
                        r.words[s] = a, n = o, o = i
                    }
                    return 0 !== n ? r.words[s] = n : r.length--, r._strip()
                }

                function v(e, t) {
                    this.x = e, this.y = t
                }
                Math.imul || (m = g), s.prototype.mulTo = function(e, t) {
                    var r, n = this.length + e.length;
                    return 10 === this.length && 10 === e.length ? m(this, e, t) : n < 63 ? g(this, e, t) : y(this, e, t)
                }, v.prototype.makeRBT = function(e) {
                    for (var t = Array(e), r = s.prototype._countBits(e) - 1, n = 0; n < e; n++) t[n] = this.revBin(n, r, e);
                    return t
                }, v.prototype.revBin = function(e, t, r) {
                    if (0 === e || e === r - 1) return e;
                    for (var n = 0, i = 0; i < t; i++) n |= (1 & e) << t - i - 1, e >>= 1;
                    return n
                }, v.prototype.permute = function(e, t, r, n, i, s) {
                    for (var o = 0; o < s; o++) n[o] = t[e[o]], i[o] = r[e[o]]
                }, v.prototype.transform = function(e, t, r, n, i, s) {
                    this.permute(s, e, t, r, n, i);
                    for (var o = 1; o < i; o <<= 1)
                        for (var a = o << 1, l = Math.cos(2 * Math.PI / a), c = Math.sin(2 * Math.PI / a), u = 0; u < i; u += a)
                            for (var h = l, d = c, f = 0; f < o; f++) {
                                var p = r[u + f],
                                    g = n[u + f],
                                    m = r[u + f + o],
                                    y = n[u + f + o],
                                    v = h * m - d * y;
                                y = h * y + d * m, m = v, r[u + f] = p + m, n[u + f] = g + y, r[u + f + o] = p - m, n[u + f + o] = g - y, f !== a && (v = l * h - c * d, d = l * d + c * h, h = v)
                            }
                }, v.prototype.guessLen13b = function(e, t) {
                    var r = 1 | Math.max(t, e),
                        n = 1 & r,
                        i = 0;
                    for (r = r / 2 | 0; r; r >>>= 1) i++;
                    return 1 << i + 1 + n
                }, v.prototype.conjugate = function(e, t, r) {
                    if (!(r <= 1))
                        for (var n = 0; n < r / 2; n++) {
                            var i = e[n];
                            e[n] = e[r - n - 1], e[r - n - 1] = i, i = t[n], t[n] = -t[r - n - 1], t[r - n - 1] = -i
                        }
                }, v.prototype.normalize13b = function(e, t) {
                    for (var r = 0, n = 0; n < t / 2; n++) {
                        var i = 8192 * Math.round(e[2 * n + 1] / t) + Math.round(e[2 * n] / t) + r;
                        e[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0
                    }
                    return e
                }, v.prototype.convert13b = function(e, t, r, i) {
                    for (var s = 0, o = 0; o < t; o++) s += 0 | e[o], r[2 * o] = 8191 & s, s >>>= 13, r[2 * o + 1] = 8191 & s, s >>>= 13;
                    for (o = 2 * t; o < i; ++o) r[o] = 0;
                    n(0 === s), n((-8192 & s) == 0)
                }, v.prototype.stub = function(e) {
                    for (var t = Array(e), r = 0; r < e; r++) t[r] = 0;
                    return t
                }, v.prototype.mulp = function(e, t, r) {
                    var n = 2 * this.guessLen13b(e.length, t.length),
                        i = this.makeRBT(n),
                        s = this.stub(n),
                        o = Array(n),
                        a = Array(n),
                        l = Array(n),
                        c = Array(n),
                        u = Array(n),
                        h = Array(n),
                        d = r.words;
                    d.length = n, this.convert13b(e.words, e.length, o, n), this.convert13b(t.words, t.length, c, n), this.transform(o, s, a, l, n, i), this.transform(c, s, u, h, n, i);
                    for (var f = 0; f < n; f++) {
                        var p = a[f] * u[f] - l[f] * h[f];
                        l[f] = a[f] * h[f] + l[f] * u[f], a[f] = p
                    }
                    return this.conjugate(a, l, n), this.transform(a, l, d, s, n, i), this.conjugate(d, s, n), this.normalize13b(d, n), r.negative = e.negative ^ t.negative, r.length = e.length + t.length, r._strip()
                }, s.prototype.mul = function(e) {
                    var t = new s(null);
                    return t.words = Array(this.length + e.length), this.mulTo(e, t)
                }, s.prototype.mulf = function(e) {
                    var t = new s(null);
                    return t.words = Array(this.length + e.length), y(this, e, t)
                }, s.prototype.imul = function(e) {
                    return this.clone().mulTo(e, this)
                }, s.prototype.imuln = function(e) {
                    var t = e < 0;
                    t && (e = -e), n("number" == typeof e), n(e < 67108864);
                    for (var r = 0, i = 0; i < this.length; i++) {
                        var s = (0 | this.words[i]) * e,
                            o = (67108863 & s) + (67108863 & r);
                        r >>= 26, r += (s / 67108864 | 0) + (o >>> 26), this.words[i] = 67108863 & o
                    }
                    return 0 !== r && (this.words[i] = r, this.length++), t ? this.ineg() : this
                }, s.prototype.muln = function(e) {
                    return this.clone().imuln(e)
                }, s.prototype.sqr = function() {
                    return this.mul(this)
                }, s.prototype.isqr = function() {
                    return this.imul(this.clone())
                }, s.prototype.pow = function(e) {
                    var t = function(e) {
                        for (var t = Array(e.bitLength()), r = 0; r < t.length; r++) {
                            var n = r / 26 | 0,
                                i = r % 26;
                            t[r] = e.words[n] >>> i & 1
                        }
                        return t
                    }(e);
                    if (0 === t.length) return new s(1);
                    for (var r = this, n = 0; n < t.length && 0 === t[n]; n++, r = r.sqr());
                    if (++n < t.length)
                        for (var i = r.sqr(); n < t.length; n++, i = i.sqr()) 0 !== t[n] && (r = r.mul(i));
                    return r
                }, s.prototype.iushln = function(e) {
                    n("number" == typeof e && e >= 0);
                    var t, r = e % 26,
                        i = (e - r) / 26,
                        s = 67108863 >>> 26 - r << 26 - r;
                    if (0 !== r) {
                        var o = 0;
                        for (t = 0; t < this.length; t++) {
                            var a = this.words[t] & s,
                                l = (0 | this.words[t]) - a << r;
                            this.words[t] = l | o, o = a >>> 26 - r
                        }
                        o && (this.words[t] = o, this.length++)
                    }
                    if (0 !== i) {
                        for (t = this.length - 1; t >= 0; t--) this.words[t + i] = this.words[t];
                        for (t = 0; t < i; t++) this.words[t] = 0;
                        this.length += i
                    }
                    return this._strip()
                }, s.prototype.ishln = function(e) {
                    return n(0 === this.negative), this.iushln(e)
                }, s.prototype.iushrn = function(e, t, r) {
                    n("number" == typeof e && e >= 0), i = t ? (t - t % 26) / 26 : 0;
                    var i, s = e % 26,
                        o = Math.min((e - s) / 26, this.length),
                        a = 67108863 ^ 67108863 >>> s << s;
                    if (i -= o, i = Math.max(0, i), r) {
                        for (var l = 0; l < o; l++) r.words[l] = this.words[l];
                        r.length = o
                    }
                    if (0 === o);
                    else if (this.length > o)
                        for (this.length -= o, l = 0; l < this.length; l++) this.words[l] = this.words[l + o];
                    else this.words[0] = 0, this.length = 1;
                    var c = 0;
                    for (l = this.length - 1; l >= 0 && (0 !== c || l >= i); l--) {
                        var u = 0 | this.words[l];
                        this.words[l] = c << 26 - s | u >>> s, c = u & a
                    }
                    return r && 0 !== c && (r.words[r.length++] = c), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                }, s.prototype.ishrn = function(e, t, r) {
                    return n(0 === this.negative), this.iushrn(e, t, r)
                }, s.prototype.shln = function(e) {
                    return this.clone().ishln(e)
                }, s.prototype.ushln = function(e) {
                    return this.clone().iushln(e)
                }, s.prototype.shrn = function(e) {
                    return this.clone().ishrn(e)
                }, s.prototype.ushrn = function(e) {
                    return this.clone().iushrn(e)
                }, s.prototype.testn = function(e) {
                    n("number" == typeof e && e >= 0);
                    var t = e % 26,
                        r = (e - t) / 26;
                    return !(this.length <= r) && !!(this.words[r] & 1 << t)
                }, s.prototype.imaskn = function(e) {
                    n("number" == typeof e && e >= 0);
                    var t = e % 26,
                        r = (e - t) / 26;
                    return (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) ? this : (0 !== t && r++, this.length = Math.min(r, this.length), 0 !== t && (this.words[this.length - 1] &= 67108863 ^ 67108863 >>> t << t), this._strip())
                }, s.prototype.maskn = function(e) {
                    return this.clone().imaskn(e)
                }, s.prototype.iaddn = function(e) {
                    return (n("number" == typeof e), n(e < 67108864), e < 0) ? this.isubn(-e) : 0 !== this.negative ? (1 === this.length && (0 | this.words[0]) <= e ? (this.words[0] = e - (0 | this.words[0]), this.negative = 0) : (this.negative = 0, this.isubn(e), this.negative = 1), this) : this._iaddn(e)
                }, s.prototype._iaddn = function(e) {
                    this.words[0] += e;
                    for (var t = 0; t < this.length && this.words[t] >= 67108864; t++) this.words[t] -= 67108864, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
                    return this.length = Math.max(this.length, t + 1), this
                }, s.prototype.isubn = function(e) {
                    if (n("number" == typeof e), n(e < 67108864), e < 0) return this.iaddn(-e);
                    if (0 !== this.negative) return this.negative = 0, this.iaddn(e), this.negative = 1, this;
                    if (this.words[0] -= e, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                    else
                        for (var t = 0; t < this.length && this.words[t] < 0; t++) this.words[t] += 67108864, this.words[t + 1] -= 1;
                    return this._strip()
                }, s.prototype.addn = function(e) {
                    return this.clone().iaddn(e)
                }, s.prototype.subn = function(e) {
                    return this.clone().isubn(e)
                }, s.prototype.iabs = function() {
                    return this.negative = 0, this
                }, s.prototype.abs = function() {
                    return this.clone().iabs()
                }, s.prototype._ishlnsubmul = function(e, t, r) {
                    var i, s, o = e.length + r;
                    this._expand(o);
                    var a = 0;
                    for (i = 0; i < e.length; i++) {
                        s = (0 | this.words[i + r]) + a;
                        var l = (0 | e.words[i]) * t;
                        s -= 67108863 & l, a = (s >> 26) - (l / 67108864 | 0), this.words[i + r] = 67108863 & s
                    }
                    for (; i < this.length - r; i++) a = (s = (0 | this.words[i + r]) + a) >> 26, this.words[i + r] = 67108863 & s;
                    if (0 === a) return this._strip();
                    for (n(-1 === a), a = 0, i = 0; i < this.length; i++) a = (s = -(0 | this.words[i]) + a) >> 26, this.words[i] = 67108863 & s;
                    return this.negative = 1, this._strip()
                }, s.prototype._wordDiv = function(e, t) {
                    var r, n = this.length - e.length,
                        i = this.clone(),
                        o = e,
                        a = 0 | o.words[o.length - 1];
                    0 != (n = 26 - this._countBits(a)) && (o = o.ushln(n), i.iushln(n), a = 0 | o.words[o.length - 1]);
                    var l = i.length - o.length;
                    if ("mod" !== t) {
                        (r = new s(null)).length = l + 1, r.words = Array(r.length);
                        for (var c = 0; c < r.length; c++) r.words[c] = 0
                    }
                    var u = i.clone()._ishlnsubmul(o, 1, l);
                    0 === u.negative && (i = u, r && (r.words[l] = 1));
                    for (var h = l - 1; h >= 0; h--) {
                        var d = (0 | i.words[o.length + h]) * 67108864 + (0 | i.words[o.length + h - 1]);
                        for (d = Math.min(d / a | 0, 67108863), i._ishlnsubmul(o, d, h); 0 !== i.negative;) d--, i.negative = 0, i._ishlnsubmul(o, 1, h), i.isZero() || (i.negative ^= 1);
                        r && (r.words[h] = d)
                    }
                    return r && r._strip(), i._strip(), "div" !== t && 0 !== n && i.iushrn(n), {
                        div: r || null,
                        mod: i
                    }
                }, s.prototype.divmod = function(e, t, r) {
                    var i, o, a;
                    return (n(!e.isZero()), this.isZero()) ? {
                        div: new s(0),
                        mod: new s(0)
                    } : 0 !== this.negative && 0 === e.negative ? (a = this.neg().divmod(e, t), "mod" !== t && (i = a.div.neg()), "div" !== t && (o = a.mod.neg(), r && 0 !== o.negative && o.iadd(e)), {
                        div: i,
                        mod: o
                    }) : 0 === this.negative && 0 !== e.negative ? (a = this.divmod(e.neg(), t), "mod" !== t && (i = a.div.neg()), {
                        div: i,
                        mod: a.mod
                    }) : (this.negative & e.negative) != 0 ? (a = this.neg().divmod(e.neg(), t), "div" !== t && (o = a.mod.neg(), r && 0 !== o.negative && o.isub(e)), {
                        div: a.div,
                        mod: o
                    }) : e.length > this.length || 0 > this.cmp(e) ? {
                        div: new s(0),
                        mod: this
                    } : 1 === e.length ? "div" === t ? {
                        div: this.divn(e.words[0]),
                        mod: null
                    } : "mod" === t ? {
                        div: null,
                        mod: new s(this.modrn(e.words[0]))
                    } : {
                        div: this.divn(e.words[0]),
                        mod: new s(this.modrn(e.words[0]))
                    } : this._wordDiv(e, t)
                }, s.prototype.div = function(e) {
                    return this.divmod(e, "div", !1).div
                }, s.prototype.mod = function(e) {
                    return this.divmod(e, "mod", !1).mod
                }, s.prototype.umod = function(e) {
                    return this.divmod(e, "mod", !0).mod
                }, s.prototype.divRound = function(e) {
                    var t = this.divmod(e);
                    if (t.mod.isZero()) return t.div;
                    var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                        n = e.ushrn(1),
                        i = e.andln(1),
                        s = r.cmp(n);
                    return s < 0 || 1 === i && 0 === s ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1)
                }, s.prototype.modrn = function(e) {
                    var t = e < 0;
                    t && (e = -e), n(e <= 67108863);
                    for (var r = 67108864 % e, i = 0, s = this.length - 1; s >= 0; s--) i = (r * i + (0 | this.words[s])) % e;
                    return t ? -i : i
                }, s.prototype.modn = function(e) {
                    return this.modrn(e)
                }, s.prototype.idivn = function(e) {
                    var t = e < 0;
                    t && (e = -e), n(e <= 67108863);
                    for (var r = 0, i = this.length - 1; i >= 0; i--) {
                        var s = (0 | this.words[i]) + 67108864 * r;
                        this.words[i] = s / e | 0, r = s % e
                    }
                    return this._strip(), t ? this.ineg() : this
                }, s.prototype.divn = function(e) {
                    return this.clone().idivn(e)
                }, s.prototype.egcd = function(e) {
                    n(0 === e.negative), n(!e.isZero());
                    var t = this,
                        r = e.clone();
                    t = 0 !== t.negative ? t.umod(e) : t.clone();
                    for (var i = new s(1), o = new s(0), a = new s(0), l = new s(1), c = 0; t.isEven() && r.isEven();) t.iushrn(1), r.iushrn(1), ++c;
                    for (var u = r.clone(), h = t.clone(); !t.isZero();) {
                        for (var d = 0, f = 1;
                            (t.words[0] & f) == 0 && d < 26; ++d, f <<= 1);
                        if (d > 0)
                            for (t.iushrn(d); d-- > 0;)(i.isOdd() || o.isOdd()) && (i.iadd(u), o.isub(h)), i.iushrn(1), o.iushrn(1);
                        for (var p = 0, g = 1;
                            (r.words[0] & g) == 0 && p < 26; ++p, g <<= 1);
                        if (p > 0)
                            for (r.iushrn(p); p-- > 0;)(a.isOdd() || l.isOdd()) && (a.iadd(u), l.isub(h)), a.iushrn(1), l.iushrn(1);
                        t.cmp(r) >= 0 ? (t.isub(r), i.isub(a), o.isub(l)) : (r.isub(t), a.isub(i), l.isub(o))
                    }
                    return {
                        a: a,
                        b: l,
                        gcd: r.iushln(c)
                    }
                }, s.prototype._invmp = function(e) {
                    n(0 === e.negative), n(!e.isZero());
                    var t, r = this,
                        i = e.clone();
                    r = 0 !== r.negative ? r.umod(e) : r.clone();
                    for (var o = new s(1), a = new s(0), l = i.clone(); r.cmpn(1) > 0 && i.cmpn(1) > 0;) {
                        for (var c = 0, u = 1;
                            (r.words[0] & u) == 0 && c < 26; ++c, u <<= 1);
                        if (c > 0)
                            for (r.iushrn(c); c-- > 0;) o.isOdd() && o.iadd(l), o.iushrn(1);
                        for (var h = 0, d = 1;
                            (i.words[0] & d) == 0 && h < 26; ++h, d <<= 1);
                        if (h > 0)
                            for (i.iushrn(h); h-- > 0;) a.isOdd() && a.iadd(l), a.iushrn(1);
                        r.cmp(i) >= 0 ? (r.isub(i), o.isub(a)) : (i.isub(r), a.isub(o))
                    }
                    return 0 > (t = 0 === r.cmpn(1) ? o : a).cmpn(0) && t.iadd(e), t
                }, s.prototype.gcd = function(e) {
                    if (this.isZero()) return e.abs();
                    if (e.isZero()) return this.abs();
                    var t = this.clone(),
                        r = e.clone();
                    t.negative = 0, r.negative = 0;
                    for (var n = 0; t.isEven() && r.isEven(); n++) t.iushrn(1), r.iushrn(1);
                    for (;;) {
                        for (; t.isEven();) t.iushrn(1);
                        for (; r.isEven();) r.iushrn(1);
                        var i = t.cmp(r);
                        if (i < 0) {
                            var s = t;
                            t = r, r = s
                        } else if (0 === i || 0 === r.cmpn(1)) break;
                        t.isub(r)
                    }
                    return r.iushln(n)
                }, s.prototype.invm = function(e) {
                    return this.egcd(e).a.umod(e)
                }, s.prototype.isEven = function() {
                    return (1 & this.words[0]) == 0
                }, s.prototype.isOdd = function() {
                    return (1 & this.words[0]) == 1
                }, s.prototype.andln = function(e) {
                    return this.words[0] & e
                }, s.prototype.bincn = function(e) {
                    n("number" == typeof e);
                    var t = e % 26,
                        r = (e - t) / 26,
                        i = 1 << t;
                    if (this.length <= r) return this._expand(r + 1), this.words[r] |= i, this;
                    for (var s = i, o = r; 0 !== s && o < this.length; o++) {
                        var a = 0 | this.words[o];
                        a += s, s = a >>> 26, a &= 67108863, this.words[o] = a
                    }
                    return 0 !== s && (this.words[o] = s, this.length++), this
                }, s.prototype.isZero = function() {
                    return 1 === this.length && 0 === this.words[0]
                }, s.prototype.cmpn = function(e) {
                    var t, r = e < 0;
                    if (0 !== this.negative && !r) return -1;
                    if (0 === this.negative && r) return 1;
                    if (this._strip(), this.length > 1) t = 1;
                    else {
                        r && (e = -e), n(e <= 67108863, "Number is too big");
                        var i = 0 | this.words[0];
                        t = i === e ? 0 : i < e ? -1 : 1
                    }
                    return 0 !== this.negative ? 0 | -t : t
                }, s.prototype.cmp = function(e) {
                    if (0 !== this.negative && 0 === e.negative) return -1;
                    if (0 === this.negative && 0 !== e.negative) return 1;
                    var t = this.ucmp(e);
                    return 0 !== this.negative ? 0 | -t : t
                }, s.prototype.ucmp = function(e) {
                    if (this.length > e.length) return 1;
                    if (this.length < e.length) return -1;
                    for (var t = 0, r = this.length - 1; r >= 0; r--) {
                        var n = 0 | this.words[r],
                            i = 0 | e.words[r];
                        if (n !== i) {
                            n < i ? t = -1 : n > i && (t = 1);
                            break
                        }
                    }
                    return t
                }, s.prototype.gtn = function(e) {
                    return 1 === this.cmpn(e)
                }, s.prototype.gt = function(e) {
                    return 1 === this.cmp(e)
                }, s.prototype.gten = function(e) {
                    return this.cmpn(e) >= 0
                }, s.prototype.gte = function(e) {
                    return this.cmp(e) >= 0
                }, s.prototype.ltn = function(e) {
                    return -1 === this.cmpn(e)
                }, s.prototype.lt = function(e) {
                    return -1 === this.cmp(e)
                }, s.prototype.lten = function(e) {
                    return 0 >= this.cmpn(e)
                }, s.prototype.lte = function(e) {
                    return 0 >= this.cmp(e)
                }, s.prototype.eqn = function(e) {
                    return 0 === this.cmpn(e)
                }, s.prototype.eq = function(e) {
                    return 0 === this.cmp(e)
                }, s.red = function(e) {
                    return new M(e)
                }, s.prototype.toRed = function(e) {
                    return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), e.convertTo(this)._forceRed(e)
                }, s.prototype.fromRed = function() {
                    return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, s.prototype._forceRed = function(e) {
                    return this.red = e, this
                }, s.prototype.forceRed = function(e) {
                    return n(!this.red, "Already a number in reduction context"), this._forceRed(e)
                }, s.prototype.redAdd = function(e) {
                    return n(this.red, "redAdd works only with red numbers"), this.red.add(this, e)
                }, s.prototype.redIAdd = function(e) {
                    return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e)
                }, s.prototype.redSub = function(e) {
                    return n(this.red, "redSub works only with red numbers"), this.red.sub(this, e)
                }, s.prototype.redISub = function(e) {
                    return n(this.red, "redISub works only with red numbers"), this.red.isub(this, e)
                }, s.prototype.redShl = function(e) {
                    return n(this.red, "redShl works only with red numbers"), this.red.shl(this, e)
                }, s.prototype.redMul = function(e) {
                    return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e)
                }, s.prototype.redIMul = function(e) {
                    return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e)
                }, s.prototype.redSqr = function() {
                    return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                }, s.prototype.redISqr = function() {
                    return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                }, s.prototype.redSqrt = function() {
                    return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                }, s.prototype.redInvm = function() {
                    return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                }, s.prototype.redNeg = function() {
                    return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                }, s.prototype.redPow = function(e) {
                    return n(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e)
                };
                var b = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };

                function _(e, t) {
                    this.name = e, this.p = new s(t, 16), this.n = this.p.bitLength(), this.k = new s(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                }

                function w() {
                    _.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }

                function E() {
                    _.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }

                function k() {
                    _.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }

                function S() {
                    _.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }

                function M(e) {
                    if ("string" == typeof e) {
                        var t = s._prime(e);
                        this.m = t.p, this.prime = t
                    } else n(e.gtn(1), "modulus must be greater than 1"), this.m = e, this.prime = null
                }

                function R(e) {
                    M.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new s(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }
                _.prototype._tmp = function() {
                    var e = new s(null);
                    return e.words = Array(Math.ceil(this.n / 13)), e
                }, _.prototype.ireduce = function(e) {
                    var t, r = e;
                    do this.split(r, this.tmp), t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength(); while (t > this.n);
                    var n = t < this.n ? -1 : r.ucmp(this.p);
                    return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
                }, _.prototype.split = function(e, t) {
                    e.iushrn(this.n, 0, t)
                }, _.prototype.imulK = function(e) {
                    return e.imul(this.k)
                }, i(w, _), w.prototype.split = function(e, t) {
                    for (var r = Math.min(e.length, 9), n = 0; n < r; n++) t.words[n] = e.words[n];
                    if (t.length = r, e.length <= 9) {
                        e.words[0] = 0, e.length = 1;
                        return
                    }
                    var i = e.words[9];
                    for (n = 10, t.words[t.length++] = 4194303 & i; n < e.length; n++) {
                        var s = 0 | e.words[n];
                        e.words[n - 10] = (4194303 & s) << 4 | i >>> 22, i = s
                    }
                    i >>>= 22, e.words[n - 10] = i, 0 === i && e.length > 10 ? e.length -= 10 : e.length -= 9
                }, w.prototype.imulK = function(e) {
                    e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2;
                    for (var t = 0, r = 0; r < e.length; r++) {
                        var n = 0 | e.words[r];
                        t += 977 * n, e.words[r] = 67108863 & t, t = 64 * n + (t / 67108864 | 0)
                    }
                    return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e
                }, i(E, _), i(k, _), i(S, _), S.prototype.imulK = function(e) {
                    for (var t = 0, r = 0; r < e.length; r++) {
                        var n = (0 | e.words[r]) * 19 + t,
                            i = 67108863 & n;
                        n >>>= 26, e.words[r] = i, t = n
                    }
                    return 0 !== t && (e.words[e.length++] = t), e
                }, s._prime = function(e) {
                    var t;
                    if (b[e]) return b[e];
                    if ("k256" === e) t = new w;
                    else if ("p224" === e) t = new E;
                    else if ("p192" === e) t = new k;
                    else if ("p25519" === e) t = new S;
                    else throw Error("Unknown prime " + e);
                    return b[e] = t, t
                }, M.prototype._verify1 = function(e) {
                    n(0 === e.negative, "red works only with positives"), n(e.red, "red works only with red numbers")
                }, M.prototype._verify2 = function(e, t) {
                    n((e.negative | t.negative) == 0, "red works only with positives"), n(e.red && e.red === t.red, "red works only with red numbers")
                }, M.prototype.imod = function(e) {
                    return this.prime ? this.prime.ireduce(e)._forceRed(this) : (c(e, e.umod(this.m)._forceRed(this)), e)
                }, M.prototype.neg = function(e) {
                    return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this)
                }, M.prototype.add = function(e, t) {
                    this._verify2(e, t);
                    var r = e.add(t);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                }, M.prototype.iadd = function(e, t) {
                    this._verify2(e, t);
                    var r = e.iadd(t);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r
                }, M.prototype.sub = function(e, t) {
                    this._verify2(e, t);
                    var r = e.sub(t);
                    return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this)
                }, M.prototype.isub = function(e, t) {
                    this._verify2(e, t);
                    var r = e.isub(t);
                    return 0 > r.cmpn(0) && r.iadd(this.m), r
                }, M.prototype.shl = function(e, t) {
                    return this._verify1(e), this.imod(e.ushln(t))
                }, M.prototype.imul = function(e, t) {
                    return this._verify2(e, t), this.imod(e.imul(t))
                }, M.prototype.mul = function(e, t) {
                    return this._verify2(e, t), this.imod(e.mul(t))
                }, M.prototype.isqr = function(e) {
                    return this.imul(e, e.clone())
                }, M.prototype.sqr = function(e) {
                    return this.mul(e, e)
                }, M.prototype.sqrt = function(e) {
                    if (e.isZero()) return e.clone();
                    var t = this.m.andln(3);
                    if (n(t % 2 == 1), 3 === t) {
                        var r = this.m.add(new s(1)).iushrn(2);
                        return this.pow(e, r)
                    }
                    for (var i = this.m.subn(1), o = 0; !i.isZero() && 0 === i.andln(1);) o++, i.iushrn(1);
                    n(!i.isZero());
                    var a = new s(1).toRed(this),
                        l = a.redNeg(),
                        c = this.m.subn(1).iushrn(1),
                        u = this.m.bitLength();
                    for (u = new s(2 * u * u).toRed(this); 0 !== this.pow(u, c).cmp(l);) u.redIAdd(l);
                    for (var h = this.pow(u, i), d = this.pow(e, i.addn(1).iushrn(1)), f = this.pow(e, i), p = o; 0 !== f.cmp(a);) {
                        for (var g = f, m = 0; 0 !== g.cmp(a); m++) g = g.redSqr();
                        n(m < p);
                        var y = this.pow(h, new s(1).iushln(p - m - 1));
                        d = d.redMul(y), h = y.redSqr(), f = f.redMul(h), p = m
                    }
                    return d
                }, M.prototype.invm = function(e) {
                    var t = e._invmp(this.m);
                    return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t)
                }, M.prototype.pow = function(e, t) {
                    if (t.isZero()) return new s(1).toRed(this);
                    if (0 === t.cmpn(1)) return e.clone();
                    var r = Array(16);
                    r[0] = new s(1).toRed(this), r[1] = e;
                    for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], e);
                    var i = r[0],
                        o = 0,
                        a = 0,
                        l = t.bitLength() % 26;
                    for (0 === l && (l = 26), n = t.length - 1; n >= 0; n--) {
                        for (var c = t.words[n], u = l - 1; u >= 0; u--) {
                            var h = c >> u & 1;
                            if (i !== r[0] && (i = this.sqr(i)), 0 === h && 0 === o) {
                                a = 0;
                                continue
                            }
                            o <<= 1, o |= h, (4 == ++a || 0 === n && 0 === u) && (i = this.mul(i, r[o]), a = 0, o = 0)
                        }
                        l = 26
                    }
                    return i
                }, M.prototype.convertTo = function(e) {
                    var t = e.umod(this.m);
                    return t === e ? t.clone() : t
                }, M.prototype.convertFrom = function(e) {
                    var t = e.clone();
                    return t.red = null, t
                }, s.mont = function(e) {
                    return new R(e)
                }, i(R, M), R.prototype.convertTo = function(e) {
                    return this.imod(e.ushln(this.shift))
                }, R.prototype.convertFrom = function(e) {
                    var t = this.imod(e.mul(this.rinv));
                    return t.red = null, t
                }, R.prototype.imul = function(e, t) {
                    if (e.isZero() || t.isZero()) return e.words[0] = 0, e.length = 1, e;
                    var r = e.imul(t),
                        n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift),
                        s = i;
                    return i.cmp(this.m) >= 0 ? s = i.isub(this.m) : 0 > i.cmpn(0) && (s = i.iadd(this.m)), s._forceRed(this)
                }, R.prototype.mul = function(e, t) {
                    if (e.isZero() || t.isZero()) return new s(0)._forceRed(this);
                    var r = e.mul(t),
                        n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift),
                        o = i;
                    return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : 0 > i.cmpn(0) && (o = i.iadd(this.m)), o._forceRed(this)
                }, R.prototype.invm = function(e) {
                    return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }(e = r.nmd(e), this)
        },
        34734: function(e, t, r) {
            "use strict";

            function n() {
                for (var e, t, r = 0, n = ""; r < arguments.length;)(e = arguments[r++]) && (t = function e(t) {
                    var r, n, i = "";
                    if ("string" == typeof t || "number" == typeof t) i += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t))
                            for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (i && (i += " "), i += n);
                        else
                            for (r in t) t[r] && (i && (i += " "), i += r)
                    }
                    return i
                }(e)) && (n && (n += " "), n += t);
                return n
            }
            r.r(t), r.d(t, {
                clsx: function() {
                    return n
                }
            }), t.default = n
        },
        42865: function(e) {
            "use strict";

            function t(e, t, r, n) {
                return Math.round(e / r) + " " + n + (t >= 1.5 * r ? "s" : "")
            }
            e.exports = function(e, r) {
                r = r || {};
                var n, i, s = typeof e;
                if ("string" === s && e.length > 0) return function(e) {
                    if (!((e = String(e)).length > 100)) {
                        var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                        if (t) {
                            var r = parseFloat(t[1]);
                            switch ((t[2] || "ms").toLowerCase()) {
                                case "years":
                                case "year":
                                case "yrs":
                                case "yr":
                                case "y":
                                    return 315576e5 * r;
                                case "weeks":
                                case "week":
                                case "w":
                                    return 6048e5 * r;
                                case "days":
                                case "day":
                                case "d":
                                    return 864e5 * r;
                                case "hours":
                                case "hour":
                                case "hrs":
                                case "hr":
                                case "h":
                                    return 36e5 * r;
                                case "minutes":
                                case "minute":
                                case "mins":
                                case "min":
                                case "m":
                                    return 6e4 * r;
                                case "seconds":
                                case "second":
                                case "secs":
                                case "sec":
                                case "s":
                                    return 1e3 * r;
                                case "milliseconds":
                                case "millisecond":
                                case "msecs":
                                case "msec":
                                case "ms":
                                    return r;
                                default:
                                    return
                            }
                        }
                    }
                }(e);
                if ("number" === s && isFinite(e)) return r.long ? (n = Math.abs(e)) >= 864e5 ? t(e, n, 864e5, "day") : n >= 36e5 ? t(e, n, 36e5, "hour") : n >= 6e4 ? t(e, n, 6e4, "minute") : n >= 1e3 ? t(e, n, 1e3, "second") : e + " ms" : (i = Math.abs(e)) >= 864e5 ? Math.round(e / 864e5) + "d" : i >= 36e5 ? Math.round(e / 36e5) + "h" : i >= 6e4 ? Math.round(e / 6e4) + "m" : i >= 1e3 ? Math.round(e / 1e3) + "s" : e + "ms";
                throw Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
            }
        },
        11087: function(e, t, r) {
            "use strict";
            let n;
            var i = r(32215);
            t.formatArgs = function(t) {
                if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
                let r = "color: " + this.color;
                t.splice(1, 0, r, "color: inherit");
                let n = 0,
                    i = 0;
                t[0].replace(/%[a-zA-Z%]/g, e => {
                    "%%" !== e && (n++, "%c" === e && (i = n))
                }), t.splice(i, 0, r)
            }, t.save = function(e) {
                try {
                    e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
                } catch (e) {}
            }, t.load = function() {
                let e;
                try {
                    e = t.storage.getItem("debug")
                } catch (e) {}
                return !e && void 0 !== i && "env" in i && (e = i.env.DEBUG), e
            }, t.useColors = function() {
                return !!window.process && ("renderer" === window.process.type || !!window.process.__nwjs) || !("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
            }, t.storage = function() {
                try {
                    return localStorage
                } catch (e) {}
            }(), t.destroy = (n = !1, () => {
                n || (n = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
            }), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.log = console.debug || console.log || (() => {}), e.exports = r(48436)(t);
            let {
                formatters: s
            } = e.exports;
            s.j = function(e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return "[UnexpectedJSONParseError]: " + e.message
                }
            }
        },
        48436: function(e, t, r) {
            "use strict";
            e.exports = function(e) {
                function t(e) {
                    let r, i, s;
                    let o = null;

                    function a() {
                        for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                        if (!a.enabled) return;
                        let s = Number(new Date),
                            o = s - (r || s);
                        a.diff = o, a.prev = r, a.curr = s, r = s, n[0] = t.coerce(n[0]), "string" != typeof n[0] && n.unshift("%O");
                        let l = 0;
                        n[0] = n[0].replace(/%([a-zA-Z%])/g, (e, r) => {
                            if ("%%" === e) return "%";
                            l++;
                            let i = t.formatters[r];
                            if ("function" == typeof i) {
                                let t = n[l];
                                e = i.call(a, t), n.splice(l, 1), l--
                            }
                            return e
                        }), t.formatArgs.call(a, n), (a.log || t.log).apply(a, n)
                    }
                    return a.namespace = e, a.useColors = t.useColors(), a.color = t.selectColor(e), a.extend = n, a.destroy = t.destroy, Object.defineProperty(a, "enabled", {
                        enumerable: !0,
                        configurable: !1,
                        get: () => null !== o ? o : (i !== t.namespaces && (i = t.namespaces, s = t.enabled(e)), s),
                        set: e => {
                            o = e
                        }
                    }), "function" == typeof t.init && t.init(a), a
                }

                function n(e, r) {
                    let n = t(this.namespace + (void 0 === r ? ":" : r) + e);
                    return n.log = this.log, n
                }

                function i(e) {
                    return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
                }
                return t.debug = t, t.default = t, t.coerce = function(e) {
                    return e instanceof Error ? e.stack || e.message : e
                }, t.disable = function() {
                    let e = [...t.names.map(i), ...t.skips.map(i).map(e => "-" + e)].join(",");
                    return t.enable(""), e
                }, t.enable = function(e) {
                    let r;
                    t.save(e), t.namespaces = e, t.names = [], t.skips = [];
                    let n = ("string" == typeof e ? e : "").split(/[\s,]+/),
                        i = n.length;
                    for (r = 0; r < i; r++) n[r] && ("-" === (e = n[r].replace(/\*/g, ".*?"))[0] ? t.skips.push(RegExp("^" + e.slice(1) + "$")) : t.names.push(RegExp("^" + e + "$")))
                }, t.enabled = function(e) {
                    let r, n;
                    if ("*" === e[e.length - 1]) return !0;
                    for (r = 0, n = t.skips.length; r < n; r++)
                        if (t.skips[r].test(e)) return !1;
                    for (r = 0, n = t.names.length; r < n; r++)
                        if (t.names[r].test(e)) return !0;
                    return !1
                }, t.humanize = r(42865), t.destroy = function() {
                    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
                }, Object.keys(e).forEach(r => {
                    t[r] = e[r]
                }), t.names = [], t.skips = [], t.formatters = {}, t.selectColor = function(e) {
                    let r = 0;
                    for (let t = 0; t < e.length; t++) r = (r << 5) - r + e.charCodeAt(t) | 0;
                    return t.colors[Math.abs(r) % t.colors.length]
                }, t.enable(t.load()), t
            }
        },
        85698: function(e, t, r) {
            "use strict";
            var n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BaseBlockTracker = void 0;
            let i = (n = r(16661)) && n.__esModule ? n : {
                    default: n
                },
                s = (e, t) => e + t,
                o = ["sync", "latest"];
            class a extends i.default {
                async destroy() {
                    this._cancelBlockResetTimeout(), await this._maybeEnd(), super.removeAllListeners()
                }
                isRunning() {
                    return this._isRunning
                }
                getCurrentBlock() {
                    return this._currentBlock
                }
                async getLatestBlock() {
                    return this._currentBlock ? this._currentBlock : await new Promise(e => this.once("latest", e))
                }
                removeAllListeners(e) {
                    return e ? super.removeAllListeners(e) : super.removeAllListeners(), this._setupInternalEvents(), this._onRemoveListener(), this
                }
                _setupInternalEvents() {
                    this.removeListener("newListener", this._onNewListener), this.removeListener("removeListener", this._onRemoveListener), this.on("newListener", this._onNewListener), this.on("removeListener", this._onRemoveListener)
                }
                _onNewListener(e) {
                    o.includes(e) && this._maybeStart()
                }
                _onRemoveListener() {
                    this._getBlockTrackerEventCount() > 0 || this._maybeEnd()
                }
                async _maybeStart() {
                    this._isRunning || (this._isRunning = !0, this._cancelBlockResetTimeout(), await this._start(), this.emit("_started"))
                }
                async _maybeEnd() {
                    this._isRunning && (this._isRunning = !1, this._setupBlockResetTimeout(), await this._end(), this.emit("_ended"))
                }
                _getBlockTrackerEventCount() {
                    return o.map(e => this.listenerCount(e)).reduce(s)
                }
                _shouldUseNewBlock(e) {
                    let t = this._currentBlock;
                    if (!t) return !0;
                    let r = l(e),
                        n = l(t);
                    return this._usePastBlocks && r < n || r > n
                }
                _newPotentialLatest(e) {
                    this._shouldUseNewBlock(e) && this._setCurrentBlock(e)
                }
                _setCurrentBlock(e) {
                    let t = this._currentBlock;
                    this._currentBlock = e, this.emit("latest", e), this.emit("sync", {
                        oldBlock: t,
                        newBlock: e
                    })
                }
                _setupBlockResetTimeout() {
                    this._cancelBlockResetTimeout(), this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this._blockResetDuration), this._blockResetTimeout.unref && this._blockResetTimeout.unref()
                }
                _cancelBlockResetTimeout() {
                    this._blockResetTimeout && clearTimeout(this._blockResetTimeout)
                }
                _resetCurrentBlock() {
                    this._currentBlock = null
                }
                constructor(e) {
                    super(), this._blockResetDuration = e.blockResetDuration || 2e4, this._usePastBlocks = e.usePastBlocks || !1, this._currentBlock = null, this._isRunning = !1, this._onNewListener = this._onNewListener.bind(this), this._onRemoveListener = this._onRemoveListener.bind(this), this._resetCurrentBlock = this._resetCurrentBlock.bind(this), this._setupInternalEvents()
                }
            }

            function l(e) {
                return Number.parseInt(e, 16)
            }
            t.BaseBlockTracker = a
        },
        3374: function(e, t, r) {
            "use strict";
            var n = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PollingBlockTracker = void 0;
            let i = n(r(63393)),
                s = n(r(98572)),
                o = r(85698),
                a = r(16349),
                l = (0, a.createModuleLogger)(a.projectLogger, "polling-block-tracker"),
                c = (0, i.default)();
            class u extends o.BaseBlockTracker {
                async checkForLatestBlock() {
                    return await this._updateLatestBlock(), await this.getLatestBlock()
                }
                async _start() {
                    this._synchronize()
                }
                async _end() {}
                async _synchronize() {
                    for (var e; this._isRunning;) try {
                        await this._updateLatestBlock();
                        let e = h(this._pollingInterval, !this._keepEventLoopActive);
                        this.emit("_waitingForNextIteration"), await e
                    } catch (n) {
                        let t = Error("PollingBlockTracker - encountered an error while attempting to update latest block:\n".concat(null !== (e = n.stack) && void 0 !== e ? e : n));
                        try {
                            this.emit("error", t)
                        } catch (e) {
                            console.error(t)
                        }
                        let r = h(this._retryTimeout, !this._keepEventLoopActive);
                        this.emit("_waitingForNextIteration"), await r
                    }
                }
                async _updateLatestBlock() {
                    let e = await this._fetchLatestBlock();
                    this._newPotentialLatest(e)
                }
                async _fetchLatestBlock() {
                    let e = {
                        jsonrpc: "2.0",
                        id: c(),
                        method: "eth_blockNumber",
                        params: []
                    };
                    this._setSkipCacheFlag && (e.skipCache = !0), l("Making request", e);
                    let t = await (0, s.default)(t => this._provider.sendAsync(e, t))();
                    if (l("Got response", t), t.error) throw Error("PollingBlockTracker - encountered error fetching block:\n".concat(t.error.message));
                    return t.result
                }
                constructor(e = {}) {
                    var t;
                    if (!e.provider) throw Error("PollingBlockTracker - no provider specified.");
                    super(Object.assign(Object.assign({}, e), {
                        blockResetDuration: null !== (t = e.blockResetDuration) && void 0 !== t ? t : e.pollingInterval
                    })), this._provider = e.provider, this._pollingInterval = e.pollingInterval || 2e4, this._retryTimeout = e.retryTimeout || this._pollingInterval / 10, this._keepEventLoopActive = void 0 === e.keepEventLoopActive || e.keepEventLoopActive, this._setSkipCacheFlag = e.setSkipCacheFlag || !1
                }
            }

            function h(e, t) {
                return new Promise(r => {
                    let n = setTimeout(r, e);
                    n.unref && t && n.unref()
                })
            }
            t.PollingBlockTracker = u
        },
        87416: function(e, t, r) {
            "use strict";
            var n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SubscribeBlockTracker = void 0;
            let i = (n = r(63393)) && n.__esModule ? n : {
                    default: n
                },
                s = r(85698),
                o = (0, i.default)();
            class a extends s.BaseBlockTracker {
                async checkForLatestBlock() {
                    return await this.getLatestBlock()
                }
                async _start() {
                    if (void 0 === this._subscriptionId || null === this._subscriptionId) try {
                        let e = await this._call("eth_blockNumber");
                        this._subscriptionId = await this._call("eth_subscribe", "newHeads"), this._provider.on("data", this._handleSubData.bind(this)), this._newPotentialLatest(e)
                    } catch (e) {
                        this.emit("error", e)
                    }
                }
                async _end() {
                    if (null !== this._subscriptionId && void 0 !== this._subscriptionId) try {
                        await this._call("eth_unsubscribe", this._subscriptionId), this._subscriptionId = null
                    } catch (e) {
                        this.emit("error", e)
                    }
                }
                _call(e) {
                    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                    return new Promise((t, n) => {
                        this._provider.sendAsync({
                            id: o(),
                            method: e,
                            params: r,
                            jsonrpc: "2.0"
                        }, (e, r) => {
                            e ? n(e) : t(r.result)
                        })
                    })
                }
                _handleSubData(e, t) {
                    var r;
                    "eth_subscription" === t.method && (null === (r = t.params) || void 0 === r ? void 0 : r.subscription) === this._subscriptionId && this._newPotentialLatest(t.params.result.number)
                }
                constructor(e = {}) {
                    if (!e.provider) throw Error("SubscribeBlockTracker - no provider specified.");
                    super(e), this._provider = e.provider, this._subscriptionId = null
                }
            }
            t.SubscribeBlockTracker = a
        },
        41735: function(e, t, r) {
            "use strict";
            var n = Object.create ? function(e, t, r, n) {
                    void 0 === n && (n = r), Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    })
                } : function(e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                },
                i = function(e, t) {
                    for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), i(r(3374), t), i(r(87416), t)
        },
        16349: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createModuleLogger = t.projectLogger = void 0;
            let n = r(98678);
            Object.defineProperty(t, "createModuleLogger", {
                enumerable: !0,
                get: function() {
                    return n.createModuleLogger
                }
            }), t.projectLogger = (0, n.createProjectLogger)("eth-block-tracker")
        },
        4820: function(e, t, r) {
            "use strict";
            let n = r(69845);
            class i extends n {
                async update() {
                    throw Error("BaseFilterWithHistory - no update method specified")
                }
                addResults(e) {
                    this.allResults = this.allResults.concat(e), super.addResults(e)
                }
                addInitialResults(e) {
                    this.allResults = this.allResults.concat(e), super.addInitialResults(e)
                }
                getAllResults() {
                    return this.allResults
                }
                constructor() {
                    super(), this.allResults = []
                }
            }
            e.exports = i
        },
        69845: function(e, t, r) {
            "use strict";
            let n = r(16661).default;
            class i extends n {
                async initialize() {}
                async update() {
                    throw Error("BaseFilter - no update method specified")
                }
                addResults(e) {
                    this.updates = this.updates.concat(e), e.forEach(e => this.emit("update", e))
                }
                addInitialResults(e) {}
                getChangesAndClear() {
                    let e = this.updates;
                    return this.updates = [], e
                }
                constructor() {
                    super(), this.updates = []
                }
            }
            e.exports = i
        },
        15593: function(e, t, r) {
            "use strict";
            let n = r(69845),
                i = r(83236),
                {
                    incrementHexInt: s
                } = r(30337);
            class o extends n {
                async update(e) {
                    let {
                        oldBlock: t,
                        newBlock: r
                    } = e, n = s(t), o = (await i({
                        provider: this.provider,
                        fromBlock: n,
                        toBlock: r
                    })).map(e => e.hash);
                    this.addResults(o)
                }
                constructor({
                    provider: e,
                    params: t
                }) {
                    super(), this.type = "block", this.provider = e
                }
            }
            e.exports = o
        },
        83236: function(e) {
            "use strict";
            async function t(e) {
                let {
                    provider: t,
                    fromBlock: s,
                    toBlock: o
                } = e;
                s || (s = o);
                let a = r(s),
                    l = Array(r(o) - a + 1).fill().map((e, t) => a + t).map(n);
                return (await Promise.all(l.map(e => i(t, "eth_getBlockByNumber", [e, !1])))).filter(e => null !== e)
            }

            function r(e) {
                return null == e ? e : Number.parseInt(e, 16)
            }

            function n(e) {
                return null == e ? e : "0x" + e.toString(16)
            }
            async function i(e, t, r) {
                for (let n = 0; n < 3; n++) try {
                    return await
                    function(e, t) {
                        return new Promise((r, n) => {
                            e.sendAsync(t, (e, t) => {
                                e ? n(e) : t.error ? n(t.error) : t.result ? r(t.result) : n(Error("Result was empty"))
                            })
                        })
                    }(e, {
                        id: 1,
                        jsonrpc: "2.0",
                        method: t,
                        params: r
                    })
                } catch (e) {
                    console.error("provider.sendAsync failed: ".concat(e.stack || e.message || e))
                }
                return null
            }
            e.exports = t
        },
        30337: function(e) {
            "use strict";

            function t(e) {
                return e.sort((e, t) => "latest" === e || "earliest" === t ? 1 : "latest" === t || "earliest" === e ? -1 : r(e) - r(t))
            }

            function r(e) {
                return null == e ? e : Number.parseInt(e, 16)
            }

            function n(e) {
                if (null == e) return e;
                let t = e.toString(16);
                return t.length % 2 && (t = "0" + t), "0x" + t
            }

            function i() {
                return Math.floor(16 * Math.random()).toString(16)
            }
            e.exports = {
                minBlockRef: function() {
                    for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                    return t(r)[0]
                },
                maxBlockRef: function() {
                    for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                    let i = t(r);
                    return i[i.length - 1]
                },
                sortBlockRefs: t,
                bnToHex: function(e) {
                    return "0x" + e.toString(16)
                },
                blockRefIsNumber: function(e) {
                    return e && !["earliest", "latest", "pending"].includes(e)
                },
                hexToInt: r,
                incrementHexInt: function(e) {
                    return null == e ? e : n(r(e) + 1)
                },
                intToHex: n,
                unsafeRandomBytes: function(e) {
                    let t = "0x";
                    for (let r = 0; r < e; r++) t += i() + i();
                    return t
                }
            }
        },
        5515: function(e, t, r) {
            "use strict";
            let n = r(70305).WU,
                {
                    createAsyncMiddleware: i,
                    createScaffoldMiddleware: s
                } = r(95146),
                o = r(86589),
                a = r(15593),
                l = r(33586),
                {
                    intToHex: c,
                    hexToInt: u
                } = r(30337);

            function h(e) {
                return d(async function() {
                    for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                    return c((await e(...r)).id)
                })
            }

            function d(e) {
                return i(async (t, r) => {
                    let n = await e.apply(null, t.params);
                    r.result = n
                })
            }

            function f(e, t) {
                let r = [];
                for (let t in e) r.push(e[t]);
                return r
            }
            e.exports = function(e) {
                let {
                    blockTracker: t,
                    provider: r
                } = e, i = 0, p = {}, g = new n, m = function(e) {
                    let {
                        mutex: t
                    } = e;
                    return e => async (r, n, i, s) => {
                        (await t.acquire())(), e(r, n, i, s)
                    }
                }({
                    mutex: g
                }), y = s({
                    eth_newFilter: m(h(b)),
                    eth_newBlockFilter: m(h(_)),
                    eth_newPendingTransactionFilter: m(h(w)),
                    eth_uninstallFilter: m(d(S)),
                    eth_getFilterChanges: m(d(E)),
                    eth_getFilterLogs: m(d(k))
                }), v = async e => {
                    let {
                        oldBlock: t,
                        newBlock: r
                    } = e;
                    if (0 === p.length) return;
                    let n = await g.acquire();
                    try {
                        await Promise.all(f(p).map(async e => {
                            try {
                                await e.update({
                                    oldBlock: t,
                                    newBlock: r
                                })
                            } catch (e) {
                                console.error(e)
                            }
                        }))
                    } catch (e) {
                        console.error(e)
                    }
                    n()
                };
                return y.newLogFilter = b, y.newBlockFilter = _, y.newPendingTransactionFilter = w, y.uninstallFilter = S, y.getFilterChanges = E, y.getFilterLogs = k, y.destroy = () => {
                    C()
                }, y;
                async function b(e) {
                    let t = new o({
                        provider: r,
                        params: e
                    });
                    return await M(t), t
                }
                async function _() {
                    let e = new a({
                        provider: r
                    });
                    return await M(e), e
                }
                async function w() {
                    let e = new l({
                        provider: r
                    });
                    return await M(e), e
                }
                async function E(e) {
                    let t = u(e),
                        r = p[t];
                    if (!r) throw Error('No filter for index "'.concat(t, '"'));
                    return r.getChangesAndClear()
                }
                async function k(e) {
                    let t = u(e),
                        r = p[t];
                    if (!r) throw Error('No filter for index "'.concat(t, '"'));
                    let n = [];
                    return "log" === r.type && (n = r.getAllResults()), n
                }
                async function S(e) {
                    let t = u(e),
                        r = !!p[t];
                    return r && await R(t), r
                }
                async function M(e) {
                    let r = f(p).length,
                        n = await t.getLatestBlock();
                    return await e.initialize({
                        currentBlock: n
                    }), p[++i] = e, e.id = i, e.idHex = c(i), x({
                        prevFilterCount: r,
                        newFilterCount: f(p).length
                    }), i
                }
                async function R(e) {
                    let t = f(p).length;
                    delete p[e], x({
                        prevFilterCount: t,
                        newFilterCount: f(p).length
                    })
                }
                async function C() {
                    let e = f(p).length;
                    p = {}, x({
                        prevFilterCount: e,
                        newFilterCount: 0
                    })
                }

                function x(e) {
                    let {
                        prevFilterCount: r,
                        newFilterCount: n
                    } = e;
                    if (0 === r && n > 0) {
                        t.on("sync", v);
                        return
                    }
                    if (r > 0 && 0 === n) {
                        t.removeListener("sync", v);
                        return
                    }
                }
            }
        },
        86589: function(e, t, r) {
            "use strict";
            let n = r(76508),
                i = r(85005),
                s = r(4820),
                {
                    bnToHex: o,
                    hexToInt: a,
                    incrementHexInt: l,
                    minBlockRef: c,
                    blockRefIsNumber: u
                } = r(30337);
            class h extends s {
                async initialize(e) {
                    let {
                        currentBlock: t
                    } = e, r = this.params.fromBlock;
                    ["latest", "pending"].includes(r) && (r = t), "earliest" === r && (r = "0x0"), this.params.fromBlock = r;
                    let n = c(this.params.toBlock, t),
                        i = Object.assign({}, this.params, {
                            toBlock: n
                        }),
                        s = await this._fetchLogs(i);
                    this.addInitialResults(s)
                }
                async update(e) {
                    let t, {
                        oldBlock: r,
                        newBlock: n
                    } = e;
                    t = r ? l(r) : n;
                    let i = Object.assign({}, this.params, {
                            fromBlock: t,
                            toBlock: n
                        }),
                        s = (await this._fetchLogs(i)).filter(e => this.matchLog(e));
                    this.addResults(s)
                }
                async _fetchLogs(e) {
                    return await i(t => this.ethQuery.getLogs(e, t))()
                }
                matchLog(e) {
                    if (a(this.params.fromBlock) >= a(e.blockNumber) || u(this.params.toBlock) && a(this.params.toBlock) <= a(e.blockNumber)) return !1;
                    let t = e.address && e.address.toLowerCase();
                    return (!this.params.address || !t || !!this.params.address.includes(t)) && this.params.topics.every((t, r) => {
                        let n = e.topics[r];
                        if (!n) return !1;
                        n = n.toLowerCase();
                        let i = Array.isArray(t) ? t : [t];
                        return !!i.includes(null) || (i = i.map(e => e.toLowerCase())).includes(n)
                    })
                }
                constructor({
                    provider: e,
                    params: t
                }) {
                    super(), this.type = "log", this.ethQuery = new n(e), this.params = Object.assign({
                        fromBlock: "latest",
                        toBlock: "latest",
                        address: void 0,
                        topics: []
                    }, t), this.params.address && (Array.isArray(this.params.address) || (this.params.address = [this.params.address]), this.params.address = this.params.address.map(e => e.toLowerCase()))
                }
            }
            e.exports = h
        },
        85005: function(e) {
            "use strict";
            let t = (e, t, r, n) => function() {
                    for (var i = arguments.length, s = Array(i), o = 0; o < i; o++) s[o] = arguments[o];
                    return new t.promiseModule((i, o) => {
                        t.multiArgs ? s.push(function() {
                            for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                            t.errorFirst ? r[0] ? o(r) : (r.shift(), i(r)) : i(r)
                        }) : t.errorFirst ? s.push((e, t) => {
                            e ? o(e) : i(t)
                        }) : s.push(i), Reflect.apply(e, this === r ? n : this, s)
                    })
                },
                r = new WeakMap;
            e.exports = (e, n) => {
                n = {
                    exclude: [/.+(?:Sync|Stream)$/],
                    errorFirst: !0,
                    promiseModule: Promise,
                    ...n
                };
                let i = typeof e;
                if (!(null !== e && ("object" === i || "function" === i))) throw TypeError("Expected `input` to be a `Function` or `Object`, got `".concat(null === e ? "null" : i, "`"));
                let s = (e, t) => {
                        let i = r.get(e);
                        if (i || (i = {}, r.set(e, i)), t in i) return i[t];
                        let s = e => "string" == typeof e || "symbol" == typeof t ? t === e : e.test(t),
                            o = Reflect.getOwnPropertyDescriptor(e, t),
                            a = void 0 === o || o.writable || o.configurable,
                            l = (n.include ? n.include.some(s) : !n.exclude.some(s)) && a;
                        return i[t] = l, l
                    },
                    o = new WeakMap,
                    a = new Proxy(e, {
                        apply(e, r, i) {
                            let s = o.get(e);
                            if (s) return Reflect.apply(s, r, i);
                            let l = n.excludeMain ? e : t(e, n, a, e);
                            return o.set(e, l), Reflect.apply(l, r, i)
                        },
                        get(e, r) {
                            let i = e[r];
                            if (!s(e, r) || i === Function.prototype[r]) return i;
                            let l = o.get(i);
                            if (l) return l;
                            if ("function" == typeof i) {
                                let r = t(i, n, a, e);
                                return o.set(i, r), r
                            }
                            return i
                        }
                    });
                return a
            }
        },
        21498: function(e, t, r) {
            "use strict";
            let n = r(16661).default,
                {
                    createAsyncMiddleware: i,
                    createScaffoldMiddleware: s
                } = r(95146),
                o = r(5515),
                {
                    unsafeRandomBytes: a,
                    incrementHexInt: l
                } = r(30337),
                c = r(83236);

            function u(e) {
                return null == e ? null : {
                    hash: e.hash,
                    parentHash: e.parentHash,
                    sha3Uncles: e.sha3Uncles,
                    miner: e.miner,
                    stateRoot: e.stateRoot,
                    transactionsRoot: e.transactionsRoot,
                    receiptsRoot: e.receiptsRoot,
                    logsBloom: e.logsBloom,
                    difficulty: e.difficulty,
                    number: e.number,
                    gasLimit: e.gasLimit,
                    gasUsed: e.gasUsed,
                    nonce: e.nonce,
                    mixHash: e.mixHash,
                    timestamp: e.timestamp,
                    extraData: e.extraData
                }
            }
            e.exports = function(e) {
                let {
                    blockTracker: t,
                    provider: r
                } = e, h = {}, d = o({
                    blockTracker: t,
                    provider: r
                }), f = !1, p = new n, g = s({
                    eth_subscribe: i(m),
                    eth_unsubscribe: i(y)
                });
                return g.destroy = function() {
                    for (let e in p.removeAllListeners(), h) h[e].destroy(), delete h[e];
                    f = !0
                }, {
                    events: p,
                    middleware: g
                };
                async function m(e, n) {
                    let i;
                    if (f) throw Error("SubscriptionManager - attempting to use after destroying");
                    let s = e.params[0],
                        o = a(16);
                    switch (s) {
                        case "newHeads":
                            i = function(e) {
                                let {
                                    subId: n
                                } = e, i = {
                                    type: s,
                                    destroy: async () => {
                                        t.removeListener("sync", i.update)
                                    },
                                    update: async e => {
                                        let {
                                            oldBlock: t,
                                            newBlock: i
                                        } = e, s = l(t);
                                        (await c({
                                            provider: r,
                                            fromBlock: s,
                                            toBlock: i
                                        })).map(u).filter(e => null !== e).forEach(e => {
                                            v(n, e)
                                        })
                                    }
                                };
                                return t.on("sync", i.update), i
                            }({
                                subId: o
                            });
                            break;
                        case "logs":
                            let p = e.params[1];
                            i = function(e) {
                                let {
                                    subId: t,
                                    filter: r
                                } = e;
                                return r.on("update", e => v(t, e)), {
                                    type: s,
                                    destroy: async () => await d.uninstallFilter(r.idHex)
                                }
                            }({
                                subId: o,
                                filter: await d.newLogFilter(p)
                            });
                            break;
                        default:
                            throw Error('SubscriptionManager - unsupported subscription type "'.concat(s, '"'))
                    }
                    h[o] = i, n.result = o
                }
                async function y(e, t) {
                    if (f) throw Error("SubscriptionManager - attempting to use after destroying");
                    let r = e.params[0],
                        n = h[r];
                    if (!n) {
                        t.result = !1;
                        return
                    }
                    delete h[r], await n.destroy(), t.result = !0
                }

                function v(e, t) {
                    p.emit("notification", {
                        jsonrpc: "2.0",
                        method: "eth_subscription",
                        params: {
                            subscription: e,
                            result: t
                        }
                    })
                }
            }
        },
        33586: function(e, t, r) {
            "use strict";
            let n = r(69845),
                i = r(83236),
                {
                    incrementHexInt: s
                } = r(30337);
            class o extends n {
                async update(e) {
                    let {
                        oldBlock: t
                    } = e, r = s(t), n = await i({
                        provider: this.provider,
                        fromBlock: r,
                        toBlock: t
                    }), o = [];
                    for (let e of n) o.push(...e.transactions);
                    this.addResults(o)
                }
                constructor({
                    provider: e
                }) {
                    super(), this.type = "tx", this.provider = e
                }
            }
            e.exports = o
        },
        76508: function(e, t, r) {
            "use strict";
            let n = r(47935),
                i = r(63393)();

            function s(e) {
                this.currentProvider = e
            }

            function o(e) {
                return function() {
                    var t = [].slice.call(arguments),
                        r = t.pop();
                    this.sendAsync({
                        method: e,
                        params: t
                    }, r)
                }
            }

            function a(e, t) {
                return function() {
                    var r = [].slice.call(arguments),
                        n = r.pop();
                    r.length < e && r.push("latest"), this.sendAsync({
                        method: t,
                        params: r
                    }, n)
                }
            }
            e.exports = s, s.prototype.getBalance = a(2, "eth_getBalance"), s.prototype.getCode = a(2, "eth_getCode"), s.prototype.getTransactionCount = a(2, "eth_getTransactionCount"), s.prototype.getStorageAt = a(3, "eth_getStorageAt"), s.prototype.call = a(2, "eth_call"), s.prototype.protocolVersion = o("eth_protocolVersion"), s.prototype.syncing = o("eth_syncing"), s.prototype.coinbase = o("eth_coinbase"), s.prototype.mining = o("eth_mining"), s.prototype.hashrate = o("eth_hashrate"), s.prototype.gasPrice = o("eth_gasPrice"), s.prototype.accounts = o("eth_accounts"), s.prototype.blockNumber = o("eth_blockNumber"), s.prototype.getBlockTransactionCountByHash = o("eth_getBlockTransactionCountByHash"), s.prototype.getBlockTransactionCountByNumber = o("eth_getBlockTransactionCountByNumber"), s.prototype.getUncleCountByBlockHash = o("eth_getUncleCountByBlockHash"), s.prototype.getUncleCountByBlockNumber = o("eth_getUncleCountByBlockNumber"), s.prototype.sign = o("eth_sign"), s.prototype.sendTransaction = o("eth_sendTransaction"), s.prototype.sendRawTransaction = o("eth_sendRawTransaction"), s.prototype.estimateGas = o("eth_estimateGas"), s.prototype.getBlockByHash = o("eth_getBlockByHash"), s.prototype.getBlockByNumber = o("eth_getBlockByNumber"), s.prototype.getTransactionByHash = o("eth_getTransactionByHash"), s.prototype.getTransactionByBlockHashAndIndex = o("eth_getTransactionByBlockHashAndIndex"), s.prototype.getTransactionByBlockNumberAndIndex = o("eth_getTransactionByBlockNumberAndIndex"), s.prototype.getTransactionReceipt = o("eth_getTransactionReceipt"), s.prototype.getUncleByBlockHashAndIndex = o("eth_getUncleByBlockHashAndIndex"), s.prototype.getUncleByBlockNumberAndIndex = o("eth_getUncleByBlockNumberAndIndex"), s.prototype.getCompilers = o("eth_getCompilers"), s.prototype.compileLLL = o("eth_compileLLL"), s.prototype.compileSolidity = o("eth_compileSolidity"), s.prototype.compileSerpent = o("eth_compileSerpent"), s.prototype.newFilter = o("eth_newFilter"), s.prototype.newBlockFilter = o("eth_newBlockFilter"), s.prototype.newPendingTransactionFilter = o("eth_newPendingTransactionFilter"), s.prototype.uninstallFilter = o("eth_uninstallFilter"), s.prototype.getFilterChanges = o("eth_getFilterChanges"), s.prototype.getFilterLogs = o("eth_getFilterLogs"), s.prototype.getLogs = o("eth_getLogs"), s.prototype.getWork = o("eth_getWork"), s.prototype.submitWork = o("eth_submitWork"), s.prototype.submitHashrate = o("eth_submitHashrate"), s.prototype.sendAsync = function(e, t) {
                this.currentProvider.sendAsync(n({
                    id: i(),
                    jsonrpc: "2.0",
                    params: []
                }, e), function(e, r) {
                    if (!e && r.error && (e = Error("EthQuery - RPC Error - " + r.error.message)), e) return t(e);
                    t(null, r.result)
                })
            }
        },
        24980: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.EthereumProviderError = t.EthereumRpcError = void 0;
            let n = r(57353);
            class i extends Error {
                serialize() {
                    let e = {
                        code: this.code,
                        message: this.message
                    };
                    return void 0 !== this.data && (e.data = this.data), this.stack && (e.stack = this.stack), e
                }
                toString() {
                    return n.default(this.serialize(), o, 2)
                }
                constructor(e, t, r) {
                    if (!Number.isInteger(e)) throw Error('"code" must be an integer.');
                    if (!t || "string" != typeof t) throw Error('"message" must be a nonempty string.');
                    super(t), this.code = e, void 0 !== r && (this.data = r)
                }
            }
            t.EthereumRpcError = i;
            class s extends i {
                constructor(e, t, r) {
                    if (!(Number.isInteger(e) && e >= 1e3 && e <= 4999)) throw Error('"code" must be an integer such that: 1000 <= code <= 4999');
                    super(e, t, r)
                }
            }

            function o(e, t) {
                if ("[Circular]" !== t) return t
            }
            t.EthereumProviderError = s
        },
        83938: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.errorValues = t.errorCodes = void 0, t.errorCodes = {
                rpc: {
                    invalidInput: -32e3,
                    resourceNotFound: -32001,
                    resourceUnavailable: -32002,
                    transactionRejected: -32003,
                    methodNotSupported: -32004,
                    limitExceeded: -32005,
                    parse: -32700,
                    invalidRequest: -32600,
                    methodNotFound: -32601,
                    invalidParams: -32602,
                    internal: -32603
                },
                provider: {
                    userRejectedRequest: 4001,
                    unauthorized: 4100,
                    unsupportedMethod: 4200,
                    disconnected: 4900,
                    chainDisconnected: 4901
                }
            }, t.errorValues = {
                "-32700": {
                    standard: "JSON RPC 2.0",
                    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
                },
                "-32600": {
                    standard: "JSON RPC 2.0",
                    message: "The JSON sent is not a valid Request object."
                },
                "-32601": {
                    standard: "JSON RPC 2.0",
                    message: "The method does not exist / is not available."
                },
                "-32602": {
                    standard: "JSON RPC 2.0",
                    message: "Invalid method parameter(s)."
                },
                "-32603": {
                    standard: "JSON RPC 2.0",
                    message: "Internal JSON-RPC error."
                },
                "-32000": {
                    standard: "EIP-1474",
                    message: "Invalid input."
                },
                "-32001": {
                    standard: "EIP-1474",
                    message: "Resource not found."
                },
                "-32002": {
                    standard: "EIP-1474",
                    message: "Resource unavailable."
                },
                "-32003": {
                    standard: "EIP-1474",
                    message: "Transaction rejected."
                },
                "-32004": {
                    standard: "EIP-1474",
                    message: "Method not supported."
                },
                "-32005": {
                    standard: "EIP-1474",
                    message: "Request limit exceeded."
                },
                4001: {
                    standard: "EIP-1193",
                    message: "User rejected the request."
                },
                4100: {
                    standard: "EIP-1193",
                    message: "The requested account and/or method has not been authorized by the user."
                },
                4200: {
                    standard: "EIP-1193",
                    message: "The requested method is not supported by this Ethereum provider."
                },
                4900: {
                    standard: "EIP-1193",
                    message: "The provider is disconnected from all chains."
                },
                4901: {
                    standard: "EIP-1193",
                    message: "The provider is disconnected from the specified chain."
                }
            }
        },
        92948: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ethErrors = void 0;
            let n = r(24980),
                i = r(57842),
                s = r(83938);

            function o(e, t) {
                let [r, s] = l(t);
                return new n.EthereumRpcError(e, r || i.getMessageFromCode(e), s)
            }

            function a(e, t) {
                let [r, s] = l(t);
                return new n.EthereumProviderError(e, r || i.getMessageFromCode(e), s)
            }

            function l(e) {
                if (e) {
                    if ("string" == typeof e) return [e];
                    if ("object" == typeof e && !Array.isArray(e)) {
                        let {
                            message: t,
                            data: r
                        } = e;
                        if (t && "string" != typeof t) throw Error("Must specify string message.");
                        return [t || void 0, r]
                    }
                }
                return []
            }
            t.ethErrors = {
                rpc: {
                    parse: e => o(s.errorCodes.rpc.parse, e),
                    invalidRequest: e => o(s.errorCodes.rpc.invalidRequest, e),
                    invalidParams: e => o(s.errorCodes.rpc.invalidParams, e),
                    methodNotFound: e => o(s.errorCodes.rpc.methodNotFound, e),
                    internal: e => o(s.errorCodes.rpc.internal, e),
                    server: e => {
                        if (!e || "object" != typeof e || Array.isArray(e)) throw Error("Ethereum RPC Server errors must provide single object argument.");
                        let {
                            code: t
                        } = e;
                        if (!Number.isInteger(t) || t > -32005 || t < -32099) throw Error('"code" must be an integer such that: -32099 <= code <= -32005');
                        return o(t, e)
                    },
                    invalidInput: e => o(s.errorCodes.rpc.invalidInput, e),
                    resourceNotFound: e => o(s.errorCodes.rpc.resourceNotFound, e),
                    resourceUnavailable: e => o(s.errorCodes.rpc.resourceUnavailable, e),
                    transactionRejected: e => o(s.errorCodes.rpc.transactionRejected, e),
                    methodNotSupported: e => o(s.errorCodes.rpc.methodNotSupported, e),
                    limitExceeded: e => o(s.errorCodes.rpc.limitExceeded, e)
                },
                provider: {
                    userRejectedRequest: e => a(s.errorCodes.provider.userRejectedRequest, e),
                    unauthorized: e => a(s.errorCodes.provider.unauthorized, e),
                    unsupportedMethod: e => a(s.errorCodes.provider.unsupportedMethod, e),
                    disconnected: e => a(s.errorCodes.provider.disconnected, e),
                    chainDisconnected: e => a(s.errorCodes.provider.chainDisconnected, e),
                    custom: e => {
                        if (!e || "object" != typeof e || Array.isArray(e)) throw Error("Ethereum Provider custom errors must provide single object argument.");
                        let {
                            code: t,
                            message: r,
                            data: i
                        } = e;
                        if (!r || "string" != typeof r) throw Error('"message" must be a nonempty string');
                        return new n.EthereumProviderError(t, r, i)
                    }
                }
            }
        },
        8825: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getMessageFromCode = t.serializeError = t.EthereumProviderError = t.EthereumRpcError = t.ethErrors = t.errorCodes = void 0;
            let n = r(24980);
            Object.defineProperty(t, "EthereumRpcError", {
                enumerable: !0,
                get: function() {
                    return n.EthereumRpcError
                }
            }), Object.defineProperty(t, "EthereumProviderError", {
                enumerable: !0,
                get: function() {
                    return n.EthereumProviderError
                }
            });
            let i = r(57842);
            Object.defineProperty(t, "serializeError", {
                enumerable: !0,
                get: function() {
                    return i.serializeError
                }
            }), Object.defineProperty(t, "getMessageFromCode", {
                enumerable: !0,
                get: function() {
                    return i.getMessageFromCode
                }
            });
            let s = r(92948);
            Object.defineProperty(t, "ethErrors", {
                enumerable: !0,
                get: function() {
                    return s.ethErrors
                }
            });
            let o = r(83938);
            Object.defineProperty(t, "errorCodes", {
                enumerable: !0,
                get: function() {
                    return o.errorCodes
                }
            })
        },
        57842: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.serializeError = t.isValidCode = t.getMessageFromCode = t.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
            let n = r(83938),
                i = r(24980),
                s = n.errorCodes.rpc.internal,
                o = {
                    code: s,
                    message: a(s)
                };

            function a(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Unspecified error message. This is a bug, please report it.";
                if (Number.isInteger(e)) {
                    let r = e.toString();
                    if (u(n.errorValues, r)) return n.errorValues[r].message;
                    if (e >= -32099 && e <= -32e3) return t.JSON_RPC_SERVER_ERROR_MESSAGE
                }
                return r
            }

            function l(e) {
                if (!Number.isInteger(e)) return !1;
                let t = e.toString();
                return !!(n.errorValues[t] || e >= -32099 && e <= -32e3)
            }

            function c(e) {
                return e && "object" == typeof e && !Array.isArray(e) ? Object.assign({}, e) : e
            }

            function u(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            t.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.", t.getMessageFromCode = a, t.isValidCode = l, t.serializeError = function(e) {
                let {
                    fallbackError: t = o,
                    shouldIncludeStack: r = !1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!t || !Number.isInteger(t.code) || "string" != typeof t.message) throw Error("Must provide fallback error with integer number code and string message.");
                if (e instanceof i.EthereumRpcError) return e.serialize();
                let n = {};
                if (e && "object" == typeof e && !Array.isArray(e) && u(e, "code") && l(e.code)) n.code = e.code, e.message && "string" == typeof e.message ? (n.message = e.message, u(e, "data") && (n.data = e.data)) : (n.message = a(n.code), n.data = {
                    originalError: c(e)
                });
                else {
                    n.code = t.code;
                    let r = null == e ? void 0 : e.message;
                    n.message = r && "string" == typeof r ? r : t.message, n.data = {
                        originalError: c(e)
                    }
                }
                let s = null == e ? void 0 : e.stack;
                return r && e && s && "string" == typeof s && (n.stack = s), n
            }
        },
        57353: function(e) {
            "use strict";
            e.exports = o, o.default = o, o.stable = c, o.stableStringify = c;
            var t = "[...]",
                r = "[Circular]",
                n = [],
                i = [];

            function s() {
                return {
                    depthLimit: Number.MAX_SAFE_INTEGER,
                    edgesLimit: Number.MAX_SAFE_INTEGER
                }
            }

            function o(e, o, l, c) {
                void 0 === c && (c = s()),
                    function e(n, i, s, o, l, c, u) {
                        if (c += 1, "object" == typeof n && null !== n) {
                            for (h = 0; h < o.length; h++)
                                if (o[h] === n) {
                                    a(r, n, i, l);
                                    return
                                }
                            if (void 0 !== u.depthLimit && c > u.depthLimit || void 0 !== u.edgesLimit && s + 1 > u.edgesLimit) {
                                a(t, n, i, l);
                                return
                            }
                            if (o.push(n), Array.isArray(n))
                                for (h = 0; h < n.length; h++) e(n[h], h, h, o, n, c, u);
                            else {
                                var h, d = Object.keys(n);
                                for (h = 0; h < d.length; h++) {
                                    var f = d[h];
                                    e(n[f], f, h, o, n, c, u)
                                }
                            }
                            o.pop()
                        }
                    }(e, "", 0, [], void 0, 0, c);
                try {
                    h = 0 === i.length ? JSON.stringify(e, o, l) : JSON.stringify(e, u(o), l)
                } catch (e) {
                    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
                } finally {
                    for (; 0 !== n.length;) {
                        var h, d = n.pop();
                        4 === d.length ? Object.defineProperty(d[0], d[1], d[3]) : d[0][d[1]] = d[2]
                    }
                }
                return h
            }

            function a(e, t, r, s) {
                var o = Object.getOwnPropertyDescriptor(s, r);
                void 0 !== o.get ? o.configurable ? (Object.defineProperty(s, r, {
                    value: e
                }), n.push([s, r, t, o])) : i.push([t, r, e]) : (s[r] = e, n.push([s, r, t]))
            }

            function l(e, t) {
                return e < t ? -1 : e > t ? 1 : 0
            }

            function c(e, o, c, h) {
                void 0 === h && (h = s());
                var d, f = function e(i, s, o, c, u, h, d) {
                    if (h += 1, "object" == typeof i && null !== i) {
                        for (f = 0; f < c.length; f++)
                            if (c[f] === i) {
                                a(r, i, s, u);
                                return
                            }
                        try {
                            if ("function" == typeof i.toJSON) return
                        } catch (e) {
                            return
                        }
                        if (void 0 !== d.depthLimit && h > d.depthLimit || void 0 !== d.edgesLimit && o + 1 > d.edgesLimit) {
                            a(t, i, s, u);
                            return
                        }
                        if (c.push(i), Array.isArray(i))
                            for (f = 0; f < i.length; f++) e(i[f], f, f, c, i, h, d);
                        else {
                            var f, p = {},
                                g = Object.keys(i).sort(l);
                            for (f = 0; f < g.length; f++) {
                                var m = g[f];
                                e(i[m], m, f, c, i, h, d), p[m] = i[m]
                            }
                            if (void 0 === u) return p;
                            n.push([u, s, i]), u[s] = p
                        }
                        c.pop()
                    }
                }(e, "", 0, [], void 0, 0, h) || e;
                try {
                    d = 0 === i.length ? JSON.stringify(f, o, c) : JSON.stringify(f, u(o), c)
                } catch (e) {
                    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
                } finally {
                    for (; 0 !== n.length;) {
                        var p = n.pop();
                        4 === p.length ? Object.defineProperty(p[0], p[1], p[3]) : p[0][p[1]] = p[2]
                    }
                }
                return d
            }

            function u(e) {
                return e = void 0 !== e ? e : function(e, t) {
                        return t
                    },
                    function(t, r) {
                        if (i.length > 0)
                            for (var n = 0; n < i.length; n++) {
                                var s = i[n];
                                if (s[1] === t && s[0] === r) {
                                    r = s[2], i.splice(n, 1);
                                    break
                                }
                            }
                        return e.call(this, t, r)
                    }
            }
        },
        39541: function(e) {
            "use strict";
            "function" == typeof Object.create ? e.exports = function(e, t) {
                t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }))
            } : e.exports = function(e, t) {
                if (t) {
                    e.super_ = t;
                    var r = function() {};
                    r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                }
            }
        },
        83247: function(e, t, r) {
            "use strict";
            var n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.JsonRpcEngine = void 0;
            let i = (n = r(91242)) && n.__esModule ? n : {
                    default: n
                },
                s = r(8825);
            class o extends i.default {
                push(e) {
                    this._middleware.push(e)
                }
                handle(e, t) {
                    if (t && "function" != typeof t) throw Error('"callback" must be a function if provided.');
                    return Array.isArray(e) ? t ? this._handleBatch(e, t) : this._handleBatch(e) : t ? this._handle(e, t) : this._promiseHandle(e)
                }
                asMiddleware() {
                    return async (e, t, r, n) => {
                        try {
                            let [i, s, a] = await o._runAllMiddleware(e, t, this._middleware);
                            if (s) return await o._runReturnHandlers(a), n(i);
                            return r(async e => {
                                try {
                                    await o._runReturnHandlers(a)
                                } catch (t) {
                                    return e(t)
                                }
                                return e()
                            })
                        } catch (e) {
                            return n(e)
                        }
                    }
                }
                async _handleBatch(e, t) {
                    try {
                        let r = await Promise.all(e.map(this._promiseHandle.bind(this)));
                        if (t) return t(null, r);
                        return r
                    } catch (e) {
                        if (t) return t(e);
                        throw e
                    }
                }
                _promiseHandle(e) {
                    return new Promise(t => {
                        this._handle(e, (e, r) => {
                            t(r)
                        })
                    })
                }
                async _handle(e, t) {
                    if (!e || Array.isArray(e) || "object" != typeof e) {
                        let r = new s.EthereumRpcError(s.errorCodes.rpc.invalidRequest, "Requests must be plain objects. Received: ".concat(typeof e), {
                            request: e
                        });
                        return t(r, {
                            id: void 0,
                            jsonrpc: "2.0",
                            error: r
                        })
                    }
                    if ("string" != typeof e.method) {
                        let r = new s.EthereumRpcError(s.errorCodes.rpc.invalidRequest, "Must specify a string method. Received: ".concat(typeof e.method), {
                            request: e
                        });
                        return t(r, {
                            id: e.id,
                            jsonrpc: "2.0",
                            error: r
                        })
                    }
                    let r = Object.assign({}, e),
                        n = {
                            id: r.id,
                            jsonrpc: r.jsonrpc
                        },
                        i = null;
                    try {
                        await this._processRequest(r, n)
                    } catch (e) {
                        i = e
                    }
                    return i && (delete n.result, n.error || (n.error = s.serializeError(i))), t(i, n)
                }
                async _processRequest(e, t) {
                    let [r, n, i] = await o._runAllMiddleware(e, t, this._middleware);
                    if (o._checkForCompletion(e, t, n), await o._runReturnHandlers(i), r) throw r
                }
                static async _runAllMiddleware(e, t, r) {
                    let n = [],
                        i = null,
                        s = !1;
                    for (let a of r)
                        if ([i, s] = await o._runMiddleware(e, t, a, n), s) break;
                    return [i, s, n.reverse()]
                }
                static _runMiddleware(e, t, r, n) {
                    return new Promise(i => {
                        let o = e => {
                            let r = e || t.error;
                            r && (t.error = s.serializeError(r)), i([r, !0])
                        };
                        try {
                            r(e, t, r => {
                                t.error ? o(t.error) : (r && ("function" != typeof r && o(new s.EthereumRpcError(s.errorCodes.rpc.internal, 'JsonRpcEngine: "next" return handlers must be functions. ' + 'Received "'.concat(typeof r, '" for request:\n').concat(a(e)), {
                                    request: e
                                })), n.push(r)), i([null, !1]))
                            }, o)
                        } catch (e) {
                            o(e)
                        }
                    })
                }
                static async _runReturnHandlers(e) {
                    for (let t of e) await new Promise((e, r) => {
                        t(t => t ? r(t) : e())
                    })
                }
                static _checkForCompletion(e, t, r) {
                    if (!("result" in t) && !("error" in t)) throw new s.EthereumRpcError(s.errorCodes.rpc.internal, "JsonRpcEngine: Response has no error or result for request:\n".concat(a(e)), {
                        request: e
                    });
                    if (!r) throw new s.EthereumRpcError(s.errorCodes.rpc.internal, "JsonRpcEngine: Nothing ended request:\n".concat(a(e)), {
                        request: e
                    })
                }
                constructor() {
                    super(), this._middleware = []
                }
            }

            function a(e) {
                return JSON.stringify(e, null, 2)
            }
            t.JsonRpcEngine = o
        },
        32130: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createAsyncMiddleware = void 0, t.createAsyncMiddleware = function(e) {
                return async (t, r, n, i) => {
                    let s;
                    let o = new Promise(e => {
                            s = e
                        }),
                        a = null,
                        l = !1,
                        c = async () => {
                            l = !0, n(e => {
                                a = e, s()
                            }), await o
                        };
                    try {
                        await e(t, r, c), l ? (await o, a(null)) : i(null)
                    } catch (e) {
                        a ? a(e) : i(e)
                    }
                }
            }
        },
        81493: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createScaffoldMiddleware = void 0, t.createScaffoldMiddleware = function(e) {
                return (t, r, n, i) => {
                    let s = e[t.method];
                    return void 0 === s ? n() : "function" == typeof s ? s(t, r, n, i) : (r.result = s, i())
                }
            }
        },
        51892: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getUniqueId = void 0;
            let r = Math.floor(4294967295 * Math.random());
            t.getUniqueId = function() {
                return r = (r + 1) % 4294967295
            }
        },
        80182: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createIdRemapMiddleware = void 0;
            let n = r(51892);
            t.createIdRemapMiddleware = function() {
                return (e, t, r, i) => {
                    let s = e.id,
                        o = n.getUniqueId();
                    e.id = o, t.id = o, r(r => {
                        e.id = s, t.id = s, r()
                    })
                }
            }
        },
        95146: function(e, t, r) {
            "use strict";
            var n = Object.create ? function(e, t, r, n) {
                    void 0 === n && (n = r), Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    })
                } : function(e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                },
                i = function(e, t) {
                    for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), i(r(80182), t), i(r(32130), t), i(r(81493), t), i(r(51892), t), i(r(83247), t), i(r(7778), t)
        },
        7778: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.mergeMiddleware = void 0;
            let n = r(83247);
            t.mergeMiddleware = function(e) {
                let t = new n.JsonRpcEngine;
                return e.forEach(e => t.push(e)), t.asMiddleware()
            }
        },
        91242: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let n = r(70094);

            function i(e, t, r) {
                try {
                    Reflect.apply(e, t, r)
                } catch (e) {
                    setTimeout(() => {
                        throw e
                    })
                }
            }
            class s extends n.EventEmitter {
                emit(e) {
                    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                    let s = "error" === e,
                        o = this._events;
                    if (void 0 !== o) s = s && void 0 === o.error;
                    else if (!s) return !1;
                    if (s) {
                        let e;
                        if (r.length > 0 && ([e] = r), e instanceof Error) throw e;
                        let t = Error("Unhandled error.".concat(e ? " (".concat(e.message, ")") : ""));
                        throw t.context = e, t
                    }
                    let a = o[e];
                    if (void 0 === a) return !1;
                    if ("function" == typeof a) i(a, this, r);
                    else {
                        let e = a.length,
                            t = function(e) {
                                let t = e.length,
                                    r = Array(t);
                                for (let n = 0; n < t; n += 1) r[n] = e[n];
                                return r
                            }(a);
                        for (let n = 0; n < e; n += 1) i(t[n], this, r)
                    }
                    return !0
                }
            }
            t.default = s
        },
        63393: function(e) {
            "use strict";
            e.exports = function(e) {
                var t = (e = e || {}).max || Number.MAX_SAFE_INTEGER,
                    r = void 0 !== e.start ? e.start : Math.floor(Math.random() * t);
                return function() {
                    return r %= t, r++
                }
            }
        },
        65502: function(e, t, r) {
            "use strict";
            e.exports = r(58865)(r(19743))
        },
        58865: function(e, t, r) {
            "use strict";
            let n = r(80201),
                i = r(74784);
            e.exports = function(e) {
                let t = n(e),
                    r = i(e);
                return function(e, n) {
                    switch ("string" == typeof e ? e.toLowerCase() : e) {
                        case "keccak224":
                            return new t(1152, 448, null, 224, n);
                        case "keccak256":
                            return new t(1088, 512, null, 256, n);
                        case "keccak384":
                            return new t(832, 768, null, 384, n);
                        case "keccak512":
                            return new t(576, 1024, null, 512, n);
                        case "sha3-224":
                            return new t(1152, 448, 6, 224, n);
                        case "sha3-256":
                            return new t(1088, 512, 6, 256, n);
                        case "sha3-384":
                            return new t(832, 768, 6, 384, n);
                        case "sha3-512":
                            return new t(576, 1024, 6, 512, n);
                        case "shake128":
                            return new r(1344, 256, 31, n);
                        case "shake256":
                            return new r(1088, 512, 31, n);
                        default:
                            throw Error("Invald algorithm: " + e)
                    }
                }
            }
        },
        80201: function(e, t, r) {
            "use strict";
            var n = r(23663).Buffer;
            let {
                Transform: i
            } = r(33632);
            e.exports = e => {
                class t extends i {
                    _transform(e, t, r) {
                        let n = null;
                        try {
                            this.update(e, t)
                        } catch (e) {
                            n = e
                        }
                        r(n)
                    }
                    _flush(e) {
                        let t = null;
                        try {
                            this.push(this.digest())
                        } catch (e) {
                            t = e
                        }
                        e(t)
                    }
                    update(e, t) {
                        if (!n.isBuffer(e) && "string" != typeof e) throw TypeError("Data must be a string or a buffer");
                        if (this._finalized) throw Error("Digest already called");
                        return n.isBuffer(e) || (e = n.from(e, t)), this._state.absorb(e), this
                    }
                    digest(e) {
                        if (this._finalized) throw Error("Digest already called");
                        this._finalized = !0, this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix);
                        let t = this._state.squeeze(this._hashBitLength / 8);
                        return void 0 !== e && (t = t.toString(e)), this._resetState(), t
                    }
                    _resetState() {
                        return this._state.initialize(this._rate, this._capacity), this
                    }
                    _clone() {
                        let e = new t(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options);
                        return this._state.copy(e._state), e._finalized = this._finalized, e
                    }
                    constructor(t, r, n, i, s) {
                        super(s), this._rate = t, this._capacity = r, this._delimitedSuffix = n, this._hashBitLength = i, this._options = s, this._state = new e, this._state.initialize(t, r), this._finalized = !1
                    }
                }
                return t
            }
        },
        74784: function(e, t, r) {
            "use strict";
            var n = r(23663).Buffer;
            let {
                Transform: i
            } = r(33632);
            e.exports = e => {
                class t extends i {
                    _transform(e, t, r) {
                        let n = null;
                        try {
                            this.update(e, t)
                        } catch (e) {
                            n = e
                        }
                        r(n)
                    }
                    _flush() {}
                    _read(e) {
                        this.push(this.squeeze(e))
                    }
                    update(e, t) {
                        if (!n.isBuffer(e) && "string" != typeof e) throw TypeError("Data must be a string or a buffer");
                        if (this._finalized) throw Error("Squeeze already called");
                        return n.isBuffer(e) || (e = n.from(e, t)), this._state.absorb(e), this
                    }
                    squeeze(e, t) {
                        this._finalized || (this._finalized = !0, this._state.absorbLastFewBits(this._delimitedSuffix));
                        let r = this._state.squeeze(e);
                        return void 0 !== t && (r = r.toString(t)), r
                    }
                    _resetState() {
                        return this._state.initialize(this._rate, this._capacity), this
                    }
                    _clone() {
                        let e = new t(this._rate, this._capacity, this._delimitedSuffix, this._options);
                        return this._state.copy(e._state), e._finalized = this._finalized, e
                    }
                    constructor(t, r, n, i) {
                        super(i), this._rate = t, this._capacity = r, this._delimitedSuffix = n, this._options = i, this._state = new e, this._state.initialize(t, r), this._finalized = !1
                    }
                }
                return t
            }
        },
        51890: function(e, t) {
            let r = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
            t.p1600 = function(e) {
                for (let t = 0; t < 24; ++t) {
                    let n = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40],
                        i = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41],
                        s = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42],
                        o = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43],
                        a = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44],
                        l = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45],
                        c = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46],
                        u = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47],
                        h = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48],
                        d = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49],
                        f = h ^ (s << 1 | o >>> 31),
                        p = d ^ (o << 1 | s >>> 31),
                        g = e[0] ^ f,
                        m = e[1] ^ p,
                        y = e[10] ^ f,
                        v = e[11] ^ p,
                        b = e[20] ^ f,
                        _ = e[21] ^ p,
                        w = e[30] ^ f,
                        E = e[31] ^ p,
                        k = e[40] ^ f,
                        S = e[41] ^ p;
                    f = n ^ (a << 1 | l >>> 31), p = i ^ (l << 1 | a >>> 31);
                    let M = e[2] ^ f,
                        R = e[3] ^ p,
                        C = e[12] ^ f,
                        x = e[13] ^ p,
                        I = e[22] ^ f,
                        A = e[23] ^ p,
                        N = e[32] ^ f,
                        L = e[33] ^ p,
                        O = e[42] ^ f,
                        T = e[43] ^ p;
                    f = s ^ (c << 1 | u >>> 31), p = o ^ (u << 1 | c >>> 31);
                    let P = e[4] ^ f,
                        j = e[5] ^ p,
                        B = e[14] ^ f,
                        D = e[15] ^ p,
                        F = e[24] ^ f,
                        U = e[25] ^ p,
                        H = e[34] ^ f,
                        q = e[35] ^ p,
                        W = e[44] ^ f,
                        z = e[45] ^ p;
                    f = a ^ (h << 1 | d >>> 31), p = l ^ (d << 1 | h >>> 31);
                    let V = e[6] ^ f,
                        J = e[7] ^ p,
                        G = e[16] ^ f,
                        Z = e[17] ^ p,
                        Q = e[26] ^ f,
                        Y = e[27] ^ p,
                        K = e[36] ^ f,
                        X = e[37] ^ p,
                        $ = e[46] ^ f,
                        ee = e[47] ^ p;
                    f = c ^ (n << 1 | i >>> 31), p = u ^ (i << 1 | n >>> 31);
                    let et = e[8] ^ f,
                        er = e[9] ^ p,
                        en = e[18] ^ f,
                        ei = e[19] ^ p,
                        es = e[28] ^ f,
                        eo = e[29] ^ p,
                        ea = e[38] ^ f,
                        el = e[39] ^ p,
                        ec = e[48] ^ f,
                        eu = e[49] ^ p,
                        eh = v << 4 | y >>> 28,
                        ed = y << 4 | v >>> 28,
                        ef = b << 3 | _ >>> 29,
                        ep = _ << 3 | b >>> 29,
                        eg = E << 9 | w >>> 23,
                        em = w << 9 | E >>> 23,
                        ey = k << 18 | S >>> 14,
                        ev = S << 18 | k >>> 14,
                        eb = M << 1 | R >>> 31,
                        e_ = R << 1 | M >>> 31,
                        ew = x << 12 | C >>> 20,
                        eE = C << 12 | x >>> 20,
                        ek = I << 10 | A >>> 22,
                        eS = A << 10 | I >>> 22,
                        eM = L << 13 | N >>> 19,
                        eR = N << 13 | L >>> 19,
                        eC = O << 2 | T >>> 30,
                        ex = T << 2 | O >>> 30,
                        eI = j << 30 | P >>> 2,
                        eA = P << 30 | j >>> 2,
                        eN = B << 6 | D >>> 26,
                        eL = D << 6 | B >>> 26,
                        eO = U << 11 | F >>> 21,
                        eT = F << 11 | U >>> 21,
                        eP = H << 15 | q >>> 17,
                        ej = q << 15 | H >>> 17,
                        eB = z << 29 | W >>> 3,
                        eD = W << 29 | z >>> 3,
                        eF = V << 28 | J >>> 4,
                        eU = J << 28 | V >>> 4,
                        eH = Z << 23 | G >>> 9,
                        eq = G << 23 | Z >>> 9,
                        eW = Q << 25 | Y >>> 7,
                        ez = Y << 25 | Q >>> 7,
                        eV = K << 21 | X >>> 11,
                        eJ = X << 21 | K >>> 11,
                        eG = ee << 24 | $ >>> 8,
                        eZ = $ << 24 | ee >>> 8,
                        eQ = et << 27 | er >>> 5,
                        eY = er << 27 | et >>> 5,
                        eK = en << 20 | ei >>> 12,
                        eX = ei << 20 | en >>> 12,
                        e$ = eo << 7 | es >>> 25,
                        e0 = es << 7 | eo >>> 25,
                        e1 = ea << 8 | el >>> 24,
                        e2 = el << 8 | ea >>> 24,
                        e3 = ec << 14 | eu >>> 18,
                        e4 = eu << 14 | ec >>> 18;
                    e[0] = g ^ ~ew & eO, e[1] = m ^ ~eE & eT, e[10] = eF ^ ~eK & ef, e[11] = eU ^ ~eX & ep, e[20] = eb ^ ~eN & eW, e[21] = e_ ^ ~eL & ez, e[30] = eQ ^ ~eh & ek, e[31] = eY ^ ~ed & eS, e[40] = eI ^ ~eH & e$, e[41] = eA ^ ~eq & e0, e[2] = ew ^ ~eO & eV, e[3] = eE ^ ~eT & eJ, e[12] = eK ^ ~ef & eM, e[13] = eX ^ ~ep & eR, e[22] = eN ^ ~eW & e1, e[23] = eL ^ ~ez & e2, e[32] = eh ^ ~ek & eP, e[33] = ed ^ ~eS & ej, e[42] = eH ^ ~e$ & eg, e[43] = eq ^ ~e0 & em, e[4] = eO ^ ~eV & e3, e[5] = eT ^ ~eJ & e4, e[14] = ef ^ ~eM & eB, e[15] = ep ^ ~eR & eD, e[24] = eW ^ ~e1 & ey, e[25] = ez ^ ~e2 & ev, e[34] = ek ^ ~eP & eG, e[35] = eS ^ ~ej & eZ, e[44] = e$ ^ ~eg & eC, e[45] = e0 ^ ~em & ex, e[6] = eV ^ ~e3 & g, e[7] = eJ ^ ~e4 & m, e[16] = eM ^ ~eB & eF, e[17] = eR ^ ~eD & eU, e[26] = e1 ^ ~ey & eb, e[27] = e2 ^ ~ev & e_, e[36] = eP ^ ~eG & eQ, e[37] = ej ^ ~eZ & eY, e[46] = eg ^ ~eC & eI, e[47] = em ^ ~ex & eA, e[8] = e3 ^ ~g & ew, e[9] = e4 ^ ~m & eE, e[18] = eB ^ ~eF & eK, e[19] = eD ^ ~eU & eX, e[28] = ey ^ ~eb & eN, e[29] = ev ^ ~e_ & eL, e[38] = eG ^ ~eQ & eh, e[39] = eZ ^ ~eY & ed, e[48] = eC ^ ~eI & eH, e[49] = ex ^ ~eA & eq, e[0] ^= r[2 * t], e[1] ^= r[2 * t + 1]
                }
            }
        },
        19743: function(e, t, r) {
            "use strict";
            var n = r(23663).Buffer;
            let i = r(51890);

            function s() {
                this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.blockSize = null, this.count = 0, this.squeezing = !1
            }
            s.prototype.initialize = function(e, t) {
                for (let e = 0; e < 50; ++e) this.state[e] = 0;
                this.blockSize = e / 8, this.count = 0, this.squeezing = !1
            }, s.prototype.absorb = function(e) {
                for (let t = 0; t < e.length; ++t) this.state[~~(this.count / 4)] ^= e[t] << this.count % 4 * 8, this.count += 1, this.count === this.blockSize && (i.p1600(this.state), this.count = 0)
            }, s.prototype.absorbLastFewBits = function(e) {
                this.state[~~(this.count / 4)] ^= e << this.count % 4 * 8, (128 & e) != 0 && this.count === this.blockSize - 1 && i.p1600(this.state), this.state[~~((this.blockSize - 1) / 4)] ^= 128 << (this.blockSize - 1) % 4 * 8, i.p1600(this.state), this.count = 0, this.squeezing = !0
            }, s.prototype.squeeze = function(e) {
                this.squeezing || this.absorbLastFewBits(1);
                let t = n.alloc(e);
                for (let r = 0; r < e; ++r) t[r] = this.state[~~(this.count / 4)] >>> this.count % 4 * 8 & 255, this.count += 1, this.count === this.blockSize && (i.p1600(this.state), this.count = 0);
                return t
            }, s.prototype.copy = function(e) {
                for (let t = 0; t < 50; ++t) e.state[t] = this.state[t];
                e.blockSize = this.blockSize, e.count = this.count, e.squeezing = this.squeezing
            }, e.exports = s
        },
        73947: function(e) {
            "use strict";
            var t = {};

            function r(e, r, n) {
                n || (n = Error);
                var i = function(e) {
                    function t(t, n, i) {
                        return e.call(this, "string" == typeof r ? r : r(t, n, i)) || this
                    }
                    return t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e, t
                }(n);
                i.prototype.name = n.name, i.prototype.code = e, t[e] = i
            }

            function n(e, t) {
                if (!Array.isArray(e)) return "of ".concat(t, " ").concat(String(e));
                var r = e.length;
                return (e = e.map(function(e) {
                    return String(e)
                }), r > 2) ? "one of ".concat(t, " ").concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1] : 2 === r ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0])
            }
            r("ERR_INVALID_OPT_VALUE", function(e, t) {
                return 'The value "' + t + '" is invalid for option "' + e + '"'
            }, TypeError), r("ERR_INVALID_ARG_TYPE", function(e, t, r) {
                if ("string" == typeof t && (i = "not ", t.substr(!s || s < 0 ? 0 : +s, i.length) === i) ? (c = "must not be", t = t.replace(/^not /, "")) : c = "must be", o = " argument", (void 0 === a || a > e.length) && (a = e.length), e.substring(a - o.length, a) === o) u = "The ".concat(e, " ").concat(c, " ").concat(n(t, "type"));
                else {
                    var i, s, o, a, l, c, u, h = ("number" != typeof l && (l = 0), l + 1 > e.length || -1 === e.indexOf(".", l)) ? "argument" : "property";
                    u = 'The "'.concat(e, '" ').concat(h, " ").concat(c, " ").concat(n(t, "type"))
                }
                return u + ". Received type ".concat(typeof r)
            }, TypeError), r("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), r("ERR_METHOD_NOT_IMPLEMENTED", function(e) {
                return "The " + e + " method is not implemented"
            }), r("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), r("ERR_STREAM_DESTROYED", function(e) {
                return "Cannot call " + e + " after a stream was destroyed"
            }), r("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), r("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), r("ERR_STREAM_WRITE_AFTER_END", "write after end"), r("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), r("ERR_UNKNOWN_ENCODING", function(e) {
                return "Unknown encoding: " + e
            }, TypeError), r("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), e.exports.q = t
        },
        32674: function(e, t, r) {
            "use strict";
            var n = r(32215),
                i = Object.keys || function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t
                };
            e.exports = u;
            var s = r(25101),
                o = r(88049);
            r(39541)(u, s);
            for (var a = i(o.prototype), l = 0; l < a.length; l++) {
                var c = a[l];
                u.prototype[c] || (u.prototype[c] = o.prototype[c])
            }

            function u(e) {
                if (!(this instanceof u)) return new u(e);
                s.call(this, e), o.call(this, e), this.allowHalfOpen = !0, e && (!1 === e.readable && (this.readable = !1), !1 === e.writable && (this.writable = !1), !1 === e.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", h)))
            }

            function h() {
                this._writableState.ended || n.nextTick(d, this)
            }

            function d(e) {
                e.end()
            }
            Object.defineProperty(u.prototype, "writableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._writableState.highWaterMark
                }
            }), Object.defineProperty(u.prototype, "writableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._writableState && this._writableState.getBuffer()
                }
            }), Object.defineProperty(u.prototype, "writableLength", {
                enumerable: !1,
                get: function() {
                    return this._writableState.length
                }
            }), Object.defineProperty(u.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed
                },
                set: function(e) {
                    void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
                }
            })
        },
        97118: function(e, t, r) {
            "use strict";
            e.exports = i;
            var n = r(90493);

            function i(e) {
                if (!(this instanceof i)) return new i(e);
                n.call(this, e)
            }
            r(39541)(i, n), i.prototype._transform = function(e, t, r) {
                r(null, e)
            }
        },
        25101: function(e, t, r) {
            "use strict";
            var n, i, s, o, a, l = r(32215);
            e.exports = M, M.ReadableState = S, r(70094).EventEmitter;
            var c = function(e, t) {
                    return e.listeners(t).length
                },
                u = r(17396),
                h = r(23663).Buffer,
                d = (void 0 !== r.g ? r.g : window).Uint8Array || function() {},
                f = r(46586);
            i = f && f.debuglog ? f.debuglog("stream") : function() {};
            var p = r(92996),
                g = r(33626),
                m = r(6880).getHighWaterMark,
                y = r(73947).q,
                v = y.ERR_INVALID_ARG_TYPE,
                b = y.ERR_STREAM_PUSH_AFTER_EOF,
                _ = y.ERR_METHOD_NOT_IMPLEMENTED,
                w = y.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
            r(39541)(M, u);
            var E = g.errorOrDestroy,
                k = ["error", "close", "destroy", "pause", "resume"];

            function S(e, t, i) {
                n = n || r(32674), e = e || {}, "boolean" != typeof i && (i = t instanceof n), this.objectMode = !!e.objectMode, i && (this.objectMode = this.objectMode || !!e.readableObjectMode), this.highWaterMark = m(this, e, "readableHighWaterMark", i), this.buffer = new p, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (s || (s = r(55144).s), this.decoder = new s(e.encoding), this.encoding = e.encoding)
            }

            function M(e) {
                if (n = n || r(32674), !(this instanceof M)) return new M(e);
                var t = this instanceof n;
                this._readableState = new S(e, this, t), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), u.call(this)
            }

            function R(e, t, r, n, s) {
                i("readableAddChunk", t);
                var o, a, l, c, u, f = e._readableState;
                if (null === t) f.reading = !1,
                    function(e, t) {
                        if (i("onEofChunk"), !t.ended) {
                            if (t.decoder) {
                                var r = t.decoder.end();
                                r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length)
                            }
                            t.ended = !0, t.sync ? I(e) : (t.needReadable = !1, t.emittedReadable || (t.emittedReadable = !0, A(e)))
                        }
                    }(e, f);
                else {
                    if (s || (o = f, a = t, h.isBuffer(a) || a instanceof d || "string" == typeof a || void 0 === a || o.objectMode || (l = new v("chunk", ["string", "Buffer", "Uint8Array"], a)), u = l), u) E(e, u);
                    else if (f.objectMode || t && t.length > 0) {
                        if ("string" == typeof t || f.objectMode || Object.getPrototypeOf(t) === h.prototype || (c = t, t = h.from(c)), n) f.endEmitted ? E(e, new w) : C(e, f, t, !0);
                        else if (f.ended) E(e, new b);
                        else {
                            if (f.destroyed) return !1;
                            f.reading = !1, f.decoder && !r ? (t = f.decoder.write(t), f.objectMode || 0 !== t.length ? C(e, f, t, !1) : N(e, f)) : C(e, f, t, !1)
                        }
                    } else n || (f.reading = !1, N(e, f))
                }
                return !f.ended && (f.length < f.highWaterMark || 0 === f.length)
            }

            function C(e, t, r, n) {
                t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0, e.emit("data", r)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && I(e)), N(e, t)
            }

            function x(e, t) {
                if (e <= 0 || 0 === t.length && t.ended) return 0;
                if (t.objectMode) return 1;
                if (e != e) return t.flowing && t.length ? t.buffer.head.data.length : t.length;
                if (e > t.highWaterMark) {
                    var r;
                    t.highWaterMark = ((r = e) >= 1073741824 ? r = 1073741824 : (r--, r |= r >>> 1, r |= r >>> 2, r |= r >>> 4, r |= r >>> 8, r |= r >>> 16, r++), r)
                }
                return e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0)
            }

            function I(e) {
                var t = e._readableState;
                i("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, t.emittedReadable || (i("emitReadable", t.flowing), t.emittedReadable = !0, l.nextTick(A, e))
            }

            function A(e) {
                var t = e._readableState;
                i("emitReadable_", t.destroyed, t.length, t.ended), !t.destroyed && (t.length || t.ended) && (e.emit("readable"), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, j(e)
            }

            function N(e, t) {
                t.readingMore || (t.readingMore = !0, l.nextTick(L, e, t))
            }

            function L(e, t) {
                for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length);) {
                    var r = t.length;
                    if (i("maybeReadMore read 0"), e.read(0), r === t.length) break
                }
                t.readingMore = !1
            }

            function O(e) {
                var t = e._readableState;
                t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume()
            }

            function T(e) {
                i("readable nexttick read 0"), e.read(0)
            }

            function P(e, t) {
                i("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), j(e), t.flowing && !t.reading && e.read(0)
            }

            function j(e) {
                var t = e._readableState;
                for (i("flow", t.flowing); t.flowing && null !== e.read(););
            }

            function B(e, t) {
                var r;
                return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : r = t.buffer.consume(e, t.decoder), r)
            }

            function D(e) {
                var t = e._readableState;
                i("endReadable", t.endEmitted), t.endEmitted || (t.ended = !0, l.nextTick(F, t, e))
            }

            function F(e, t) {
                if (i("endReadableNT", e.endEmitted, e.length), !e.endEmitted && 0 === e.length && (e.endEmitted = !0, t.readable = !1, t.emit("end"), e.autoDestroy)) {
                    var r = t._writableState;
                    (!r || r.autoDestroy && r.finished) && t.destroy()
                }
            }

            function U(e, t) {
                for (var r = 0, n = e.length; r < n; r++)
                    if (e[r] === t) return r;
                return -1
            }
            Object.defineProperty(M.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return void 0 !== this._readableState && this._readableState.destroyed
                },
                set: function(e) {
                    this._readableState && (this._readableState.destroyed = e)
                }
            }), M.prototype.destroy = g.destroy, M.prototype._undestroy = g.undestroy, M.prototype._destroy = function(e, t) {
                t(e)
            }, M.prototype.push = function(e, t) {
                var r, n = this._readableState;
                return n.objectMode ? r = !0 : "string" == typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = h.from(e, t), t = ""), r = !0), R(this, e, t, !1, r)
            }, M.prototype.unshift = function(e) {
                return R(this, e, null, !0, !1)
            }, M.prototype.isPaused = function() {
                return !1 === this._readableState.flowing
            }, M.prototype.setEncoding = function(e) {
                s || (s = r(55144).s);
                var t = new s(e);
                this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;
                for (var n = this._readableState.buffer.head, i = ""; null !== n;) i += t.write(n.data), n = n.next;
                return this._readableState.buffer.clear(), "" !== i && this._readableState.buffer.push(i), this._readableState.length = i.length, this
            }, M.prototype.read = function(e) {
                i("read", e), e = parseInt(e, 10);
                var t, r = this._readableState,
                    n = e;
                if (0 !== e && (r.emittedReadable = !1), 0 === e && r.needReadable && ((0 !== r.highWaterMark ? r.length >= r.highWaterMark : r.length > 0) || r.ended)) return i("read: emitReadable", r.length, r.ended), 0 === r.length && r.ended ? D(this) : I(this), null;
                if (0 === (e = x(e, r)) && r.ended) return 0 === r.length && D(this), null;
                var s = r.needReadable;
                return i("need readable", s), (0 === r.length || r.length - e < r.highWaterMark) && i("length less than watermark", s = !0), r.ended || r.reading ? i("reading or ended", s = !1) : s && (i("do read"), r.reading = !0, r.sync = !0, 0 === r.length && (r.needReadable = !0), this._read(r.highWaterMark), r.sync = !1, r.reading || (e = x(n, r))), null === (t = e > 0 ? B(e, r) : null) ? (r.needReadable = r.length <= r.highWaterMark, e = 0) : (r.length -= e, r.awaitDrain = 0), 0 === r.length && (r.ended || (r.needReadable = !0), n !== e && r.ended && D(this)), null !== t && this.emit("data", t), t
            }, M.prototype._read = function(e) {
                E(this, new _("_read()"))
            }, M.prototype.pipe = function(e, t) {
                var r = this,
                    n = this._readableState;
                switch (n.pipesCount) {
                    case 0:
                        n.pipes = e;
                        break;
                    case 1:
                        n.pipes = [n.pipes, e];
                        break;
                    default:
                        n.pipes.push(e)
                }
                n.pipesCount += 1, i("pipe count=%d opts=%j", n.pipesCount, t);
                var s = t && !1 === t.end || e === l.stdout || e === l.stderr ? g : o;

                function o() {
                    i("onend"), e.end()
                }
                n.endEmitted ? l.nextTick(s) : r.once("end", s), e.on("unpipe", function t(s, l) {
                    i("onunpipe"), s === r && l && !1 === l.hasUnpiped && (l.hasUnpiped = !0, i("cleanup"), e.removeListener("close", f), e.removeListener("finish", p), e.removeListener("drain", a), e.removeListener("error", d), e.removeListener("unpipe", t), r.removeListener("end", o), r.removeListener("end", g), r.removeListener("data", h), u = !0, n.awaitDrain && (!e._writableState || e._writableState.needDrain) && a())
                });
                var a = function() {
                    var e = r._readableState;
                    i("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && c(r, "data") && (e.flowing = !0, j(r))
                };
                e.on("drain", a);
                var u = !1;

                function h(t) {
                    i("ondata");
                    var s = e.write(t);
                    i("dest.write", s), !1 === s && ((1 === n.pipesCount && n.pipes === e || n.pipesCount > 1 && -1 !== U(n.pipes, e)) && !u && (i("false write response, pause", n.awaitDrain), n.awaitDrain++), r.pause())
                }

                function d(t) {
                    i("onerror", t), g(), e.removeListener("error", d), 0 === c(e, "error") && E(e, t)
                }

                function f() {
                    e.removeListener("finish", p), g()
                }

                function p() {
                    i("onfinish"), e.removeListener("close", f), g()
                }

                function g() {
                    i("unpipe"), r.unpipe(e)
                }
                return r.on("data", h),
                    function(e, t, r) {
                        if ("function" == typeof e.prependListener) return e.prependListener(t, r);
                        e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)
                    }(e, "error", d), e.once("close", f), e.once("finish", p), e.emit("pipe", r), n.flowing || (i("pipe resume"), r.resume()), e
            }, M.prototype.unpipe = function(e) {
                var t = this._readableState,
                    r = {
                        hasUnpiped: !1
                    };
                if (0 === t.pipesCount) return this;
                if (1 === t.pipesCount) return e && e !== t.pipes || (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, r)), this;
                if (!e) {
                    var n = t.pipes,
                        i = t.pipesCount;
                    t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                    for (var s = 0; s < i; s++) n[s].emit("unpipe", this, {
                        hasUnpiped: !1
                    });
                    return this
                }
                var o = U(t.pipes, e);
                return -1 === o || (t.pipes.splice(o, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r)), this
            }, M.prototype.on = function(e, t) {
                var r = u.prototype.on.call(this, e, t),
                    n = this._readableState;
                return "data" === e ? (n.readableListening = this.listenerCount("readable") > 0, !1 !== n.flowing && this.resume()) : "readable" !== e || n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0, n.flowing = !1, n.emittedReadable = !1, i("on readable", n.length, n.reading), n.length ? I(this) : n.reading || l.nextTick(T, this)), r
            }, M.prototype.addListener = M.prototype.on, M.prototype.removeListener = function(e, t) {
                var r = u.prototype.removeListener.call(this, e, t);
                return "readable" === e && l.nextTick(O, this), r
            }, M.prototype.removeAllListeners = function(e) {
                var t = u.prototype.removeAllListeners.apply(this, arguments);
                return ("readable" === e || void 0 === e) && l.nextTick(O, this), t
            }, M.prototype.resume = function() {
                var e = this._readableState;
                return e.flowing || (i("resume"), e.flowing = !e.readableListening, e.resumeScheduled || (e.resumeScheduled = !0, l.nextTick(P, this, e))), e.paused = !1, this
            }, M.prototype.pause = function() {
                return i("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (i("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
            }, M.prototype.wrap = function(e) {
                var t = this,
                    r = this._readableState,
                    n = !1;
                for (var s in e.on("end", function() {
                        if (i("wrapped end"), r.decoder && !r.ended) {
                            var e = r.decoder.end();
                            e && e.length && t.push(e)
                        }
                        t.push(null)
                    }), e.on("data", function(s) {
                        i("wrapped data"), r.decoder && (s = r.decoder.write(s)), (!r.objectMode || null != s) && (r.objectMode || s && s.length) && (t.push(s) || (n = !0, e.pause()))
                    }), e) void 0 === this[s] && "function" == typeof e[s] && (this[s] = function(t) {
                    return function() {
                        return e[t].apply(e, arguments)
                    }
                }(s));
                for (var o = 0; o < k.length; o++) e.on(k[o], this.emit.bind(this, k[o]));
                return this._read = function(t) {
                    i("wrapped _read", t), n && (n = !1, e.resume())
                }, this
            }, "function" == typeof Symbol && (M.prototype[Symbol.asyncIterator] = function() {
                return void 0 === o && (o = r(1243)), o(this)
            }), Object.defineProperty(M.prototype, "readableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._readableState.highWaterMark
                }
            }), Object.defineProperty(M.prototype, "readableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._readableState && this._readableState.buffer
                }
            }), Object.defineProperty(M.prototype, "readableFlowing", {
                enumerable: !1,
                get: function() {
                    return this._readableState.flowing
                },
                set: function(e) {
                    this._readableState && (this._readableState.flowing = e)
                }
            }), M._fromList = B, Object.defineProperty(M.prototype, "readableLength", {
                enumerable: !1,
                get: function() {
                    return this._readableState.length
                }
            }), "function" == typeof Symbol && (M.from = function(e, t) {
                return void 0 === a && (a = r(49484)), a(M, e, t)
            })
        },
        90493: function(e, t, r) {
            "use strict";
            e.exports = u;
            var n = r(73947).q,
                i = n.ERR_METHOD_NOT_IMPLEMENTED,
                s = n.ERR_MULTIPLE_CALLBACK,
                o = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
                a = n.ERR_TRANSFORM_WITH_LENGTH_0,
                l = r(32674);

            function c(e, t) {
                var r = this._transformState;
                r.transforming = !1;
                var n = r.writecb;
                if (null === n) return this.emit("error", new s);
                r.writechunk = null, r.writecb = null, null != t && this.push(t), n(e);
                var i = this._readableState;
                i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
            }

            function u(e) {
                if (!(this instanceof u)) return new u(e);
                l.call(this, e), this._transformState = {
                    afterTransform: c.bind(this),
                    needTransform: !1,
                    transforming: !1,
                    writecb: null,
                    writechunk: null,
                    writeencoding: null
                }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", h)
            }

            function h() {
                var e = this;
                "function" != typeof this._flush || this._readableState.destroyed ? d(this, null, null) : this._flush(function(t, r) {
                    d(e, t, r)
                })
            }

            function d(e, t, r) {
                if (t) return e.emit("error", t);
                if (null != r && e.push(r), e._writableState.length) throw new a;
                if (e._transformState.transforming) throw new o;
                return e.push(null)
            }
            r(39541)(u, l), u.prototype.push = function(e, t) {
                return this._transformState.needTransform = !1, l.prototype.push.call(this, e, t)
            }, u.prototype._transform = function(e, t, r) {
                r(new i("_transform()"))
            }, u.prototype._write = function(e, t, r) {
                var n = this._transformState;
                if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
                    var i = this._readableState;
                    (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
                }
            }, u.prototype._read = function(e) {
                var t = this._transformState;
                null === t.writechunk || t.transforming ? t.needTransform = !0 : (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform))
            }, u.prototype._destroy = function(e, t) {
                l.prototype._destroy.call(this, e, function(e) {
                    t(e)
                })
            }
        },
        88049: function(e, t, r) {
            "use strict";
            var n, i, s = r(32215);

            function o(e) {
                var t = this;
                this.next = null, this.entry = null, this.finish = function() {
                    (function(e, t, r) {
                        var n = e.entry;
                        for (e.entry = null; n;) {
                            var i = n.callback;
                            t.pendingcb--, i(void 0), n = n.next
                        }
                        t.corkedRequestsFree.next = e
                    })(t, e)
                }
            }
            e.exports = M, M.WritableState = S;
            var a = {
                    deprecate: r(88445)
                },
                l = r(17396),
                c = r(23663).Buffer,
                u = (void 0 !== r.g ? r.g : window).Uint8Array || function() {},
                h = r(33626),
                d = r(6880).getHighWaterMark,
                f = r(73947).q,
                p = f.ERR_INVALID_ARG_TYPE,
                g = f.ERR_METHOD_NOT_IMPLEMENTED,
                m = f.ERR_MULTIPLE_CALLBACK,
                y = f.ERR_STREAM_CANNOT_PIPE,
                v = f.ERR_STREAM_DESTROYED,
                b = f.ERR_STREAM_NULL_VALUES,
                _ = f.ERR_STREAM_WRITE_AFTER_END,
                w = f.ERR_UNKNOWN_ENCODING,
                E = h.errorOrDestroy;

            function k() {}

            function S(e, t, i) {
                n = n || r(32674), e = e || {}, "boolean" != typeof i && (i = t instanceof n), this.objectMode = !!e.objectMode, i && (this.objectMode = this.objectMode || !!e.writableObjectMode), this.highWaterMark = d(this, e, "writableHighWaterMark", i), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
                var a = !1 === e.decodeStrings;
                this.decodeStrings = !a, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
                    (function(e, t) {
                        var r = e._writableState,
                            n = r.sync,
                            i = r.writecb;
                        if ("function" != typeof i) throw new m;
                        if (r.writing = !1, r.writecb = null, r.length -= r.writelen, r.writelen = 0, t) --r.pendingcb, n ? (s.nextTick(i, t), s.nextTick(N, e, r), e._writableState.errorEmitted = !0, E(e, t)) : (i(t), e._writableState.errorEmitted = !0, E(e, t), N(e, r));
                        else {
                            var o = I(r) || e.destroyed;
                            o || r.corked || r.bufferProcessing || !r.bufferedRequest || x(e, r), n ? s.nextTick(C, e, r, o, i) : C(e, r, o, i)
                        }
                    })(t, e)
                }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new o(this)
            }

            function M(e) {
                var t = this instanceof(n = n || r(32674));
                if (!t && !i.call(M, this)) return new M(e);
                this._writableState = new S(e, this, t), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final)), l.call(this)
            }

            function R(e, t, r, n, i, s, o) {
                t.writelen = n, t.writecb = o, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new v("write")) : r ? e._writev(i, t.onwrite) : e._write(i, s, t.onwrite), t.sync = !1
            }

            function C(e, t, r, n) {
                r || 0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain")), t.pendingcb--, n(), N(e, t)
            }

            function x(e, t) {
                t.bufferProcessing = !0;
                var r = t.bufferedRequest;
                if (e._writev && r && r.next) {
                    var n = Array(t.bufferedRequestCount),
                        i = t.corkedRequestsFree;
                    i.entry = r;
                    for (var s = 0, a = !0; r;) n[s] = r, r.isBuf || (a = !1), r = r.next, s += 1;
                    n.allBuffers = a, R(e, t, !0, t.length, n, "", i.finish), t.pendingcb++, t.lastBufferedRequest = null, i.next ? (t.corkedRequestsFree = i.next, i.next = null) : t.corkedRequestsFree = new o(t), t.bufferedRequestCount = 0
                } else {
                    for (; r;) {
                        var l = r.chunk,
                            c = r.encoding,
                            u = r.callback,
                            h = t.objectMode ? 1 : l.length;
                        if (R(e, t, !1, h, l, c, u), r = r.next, t.bufferedRequestCount--, t.writing) break
                    }
                    null === r && (t.lastBufferedRequest = null)
                }
                t.bufferedRequest = r, t.bufferProcessing = !1
            }

            function I(e) {
                return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
            }

            function A(e, t) {
                e._final(function(r) {
                    t.pendingcb--, r && E(e, r), t.prefinished = !0, e.emit("prefinish"), N(e, t)
                })
            }

            function N(e, t) {
                var r = I(t);
                if (r && (t.prefinished || t.finalCalled || ("function" != typeof e._final || t.destroyed ? (t.prefinished = !0, e.emit("prefinish")) : (t.pendingcb++, t.finalCalled = !0, s.nextTick(A, e, t))), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"), t.autoDestroy))) {
                    var n = e._readableState;
                    (!n || n.autoDestroy && n.endEmitted) && e.destroy()
                }
                return r
            }
            r(39541)(M, l), S.prototype.getBuffer = function() {
                    for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
                    return t
                },
                function() {
                    try {
                        Object.defineProperty(S.prototype, "buffer", {
                            get: a.deprecate(function() {
                                return this.getBuffer()
                            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                        })
                    } catch (e) {}
                }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (i = Function.prototype[Symbol.hasInstance], Object.defineProperty(M, Symbol.hasInstance, {
                    value: function(e) {
                        return !!i.call(this, e) || this === M && e && e._writableState instanceof S
                    }
                })) : i = function(e) {
                    return e instanceof this
                }, M.prototype.pipe = function() {
                    E(this, new y)
                }, M.prototype.write = function(e, t, r) {
                    var n, i, o, a, l, h, d, f = this._writableState,
                        g = !1,
                        m = !f.objectMode && (n = e, c.isBuffer(n) || n instanceof u);
                    return m && !c.isBuffer(e) && (i = e, e = c.from(i)), ("function" == typeof t && (r = t, t = null), m ? t = "buffer" : t || (t = f.defaultEncoding), "function" != typeof r && (r = k), f.ending) ? (o = r, E(this, a = new _), s.nextTick(o, a)) : (m || (l = e, h = r, null === l ? d = new b : "string" == typeof l || f.objectMode || (d = new p("chunk", ["string", "Buffer"], l)), !d || (E(this, d), s.nextTick(h, d), 0))) && (f.pendingcb++, g = function(e, t, r, n, i, s) {
                        if (!r) {
                            var o, a, l = (o = n, a = i, t.objectMode || !1 === t.decodeStrings || "string" != typeof o || (o = c.from(o, a)), o);
                            n !== l && (r = !0, i = "buffer", n = l)
                        }
                        var u = t.objectMode ? 1 : n.length;
                        t.length += u;
                        var h = t.length < t.highWaterMark;
                        if (h || (t.needDrain = !0), t.writing || t.corked) {
                            var d = t.lastBufferedRequest;
                            t.lastBufferedRequest = {
                                chunk: n,
                                encoding: i,
                                isBuf: r,
                                callback: s,
                                next: null
                            }, d ? d.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
                        } else R(e, t, !1, u, n, i, s);
                        return h
                    }(this, f, m, e, t, r)), g
                }, M.prototype.cork = function() {
                    this._writableState.corked++
                }, M.prototype.uncork = function() {
                    var e = this._writableState;
                    !e.corked || (e.corked--, e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || x(this, e))
                }, M.prototype.setDefaultEncoding = function(e) {
                    if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new w(e);
                    return this._writableState.defaultEncoding = e, this
                }, Object.defineProperty(M.prototype, "writableBuffer", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState && this._writableState.getBuffer()
                    }
                }), Object.defineProperty(M.prototype, "writableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.highWaterMark
                    }
                }), M.prototype._write = function(e, t, r) {
                    r(new g("_write()"))
                }, M.prototype._writev = null, M.prototype.end = function(e, t, r) {
                    var n, i = this._writableState;
                    return "function" == typeof e ? (r = e, e = null, t = null) : "function" == typeof t && (r = t, t = null), null != e && this.write(e, t), i.corked && (i.corked = 1, this.uncork()), i.ending || (n = r, i.ending = !0, N(this, i), n && (i.finished ? s.nextTick(n) : this.once("finish", n)), i.ended = !0, this.writable = !1), this
                }, Object.defineProperty(M.prototype, "writableLength", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.length
                    }
                }), Object.defineProperty(M.prototype, "destroyed", {
                    enumerable: !1,
                    get: function() {
                        return void 0 !== this._writableState && this._writableState.destroyed
                    },
                    set: function(e) {
                        this._writableState && (this._writableState.destroyed = e)
                    }
                }), M.prototype.destroy = h.destroy, M.prototype._undestroy = h.undestroy, M.prototype._destroy = function(e, t) {
                    t(e)
                }
        },
        1243: function(e, t, r) {
            "use strict";
            var n, i = r(32215);

            function s(e, t, r) {
                var n;
                return (t = "symbol" == typeof(n = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(t, "string")) ? n : String(n)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var o = r(95835),
                a = Symbol("lastResolve"),
                l = Symbol("lastReject"),
                c = Symbol("error"),
                u = Symbol("ended"),
                h = Symbol("lastPromise"),
                d = Symbol("handlePromise"),
                f = Symbol("stream");

            function p(e, t) {
                return {
                    value: e,
                    done: t
                }
            }

            function g(e) {
                var t = e[a];
                if (null !== t) {
                    var r = e[f].read();
                    null !== r && (e[h] = null, e[a] = null, e[l] = null, t(p(r, !1)))
                }
            }

            function m(e) {
                i.nextTick(g, e)
            }
            var y = Object.getPrototypeOf(function() {}),
                v = Object.setPrototypeOf((s(n = {
                    get stream() {
                        return this[f]
                    },
                    next: function() {
                        var e, t, r = this,
                            n = this[c];
                        if (null !== n) return Promise.reject(n);
                        if (this[u]) return Promise.resolve(p(void 0, !0));
                        if (this[f].destroyed) return new Promise(function(e, t) {
                            i.nextTick(function() {
                                r[c] ? t(r[c]) : e(p(void 0, !0))
                            })
                        });
                        var s = this[h];
                        if (s) t = new Promise((e = this, function(t, r) {
                            s.then(function() {
                                if (e[u]) {
                                    t(p(void 0, !0));
                                    return
                                }
                                e[d](t, r)
                            }, r)
                        }));
                        else {
                            var o = this[f].read();
                            if (null !== o) return Promise.resolve(p(o, !1));
                            t = new Promise(this[d])
                        }
                        return this[h] = t, t
                    }
                }, Symbol.asyncIterator, function() {
                    return this
                }), s(n, "return", function() {
                    var e = this;
                    return new Promise(function(t, r) {
                        e[f].destroy(null, function(e) {
                            if (e) {
                                r(e);
                                return
                            }
                            t(p(void 0, !0))
                        })
                    })
                }), n), y);
            e.exports = function(e) {
                var t, r = Object.create(v, (s(t = {}, f, {
                    value: e,
                    writable: !0
                }), s(t, a, {
                    value: null,
                    writable: !0
                }), s(t, l, {
                    value: null,
                    writable: !0
                }), s(t, c, {
                    value: null,
                    writable: !0
                }), s(t, u, {
                    value: e._readableState.endEmitted,
                    writable: !0
                }), s(t, d, {
                    value: function(e, t) {
                        var n = r[f].read();
                        n ? (r[h] = null, r[a] = null, r[l] = null, e(p(n, !1))) : (r[a] = e, r[l] = t)
                    },
                    writable: !0
                }), t));
                return r[h] = null, o(e, function(e) {
                    if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                        var t = r[l];
                        null !== t && (r[h] = null, r[a] = null, r[l] = null, t(e)), r[c] = e;
                        return
                    }
                    var n = r[a];
                    null !== n && (r[h] = null, r[a] = null, r[l] = null, n(p(void 0, !0))), r[u] = !0
                }), e.on("readable", m.bind(null, r)), r
            }
        },
        92996: function(e, t, r) {
            "use strict";

            function n(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? n(Object(r), !0).forEach(function(t) {
                        var n, i;
                        n = t, i = r[t], (n = o(n)) in e ? Object.defineProperty(e, n, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function s(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, o(n.key), n)
                }
            }

            function o(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }
            var a = r(23663).Buffer,
                l = r(29120).inspect,
                c = l && l.custom || "inspect";
            e.exports = function() {
                var e, t;

                function r() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                    }(this, r), this.head = null, this.tail = null, this.length = 0
                }
                return e = [{
                    key: "push",
                    value: function(e) {
                        var t = {
                            data: e,
                            next: null
                        };
                        this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
                    }
                }, {
                    key: "unshift",
                    value: function(e) {
                        var t = {
                            data: e,
                            next: this.head
                        };
                        0 === this.length && (this.tail = t), this.head = t, ++this.length
                    }
                }, {
                    key: "shift",
                    value: function() {
                        if (0 !== this.length) {
                            var e = this.head.data;
                            return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
                        }
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.head = this.tail = null, this.length = 0
                    }
                }, {
                    key: "join",
                    value: function(e) {
                        if (0 === this.length) return "";
                        for (var t = this.head, r = "" + t.data; t = t.next;) r += e + t.data;
                        return r
                    }
                }, {
                    key: "concat",
                    value: function(e) {
                        if (0 === this.length) return a.alloc(0);
                        for (var t, r, n = a.allocUnsafe(e >>> 0), i = this.head, s = 0; i;) t = i.data, r = s, a.prototype.copy.call(t, n, r), s += i.data.length, i = i.next;
                        return n
                    }
                }, {
                    key: "consume",
                    value: function(e, t) {
                        var r;
                        return e < this.head.data.length ? (r = this.head.data.slice(0, e), this.head.data = this.head.data.slice(e)) : r = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e), r
                    }
                }, {
                    key: "first",
                    value: function() {
                        return this.head.data
                    }
                }, {
                    key: "_getString",
                    value: function(e) {
                        var t = this.head,
                            r = 1,
                            n = t.data;
                        for (e -= n.length; t = t.next;) {
                            var i = t.data,
                                s = e > i.length ? i.length : e;
                            if (s === i.length ? n += i : n += i.slice(0, e), 0 == (e -= s)) {
                                s === i.length ? (++r, t.next ? this.head = t.next : this.head = this.tail = null) : (this.head = t, t.data = i.slice(s));
                                break
                            }++r
                        }
                        return this.length -= r, n
                    }
                }, {
                    key: "_getBuffer",
                    value: function(e) {
                        var t = a.allocUnsafe(e),
                            r = this.head,
                            n = 1;
                        for (r.data.copy(t), e -= r.data.length; r = r.next;) {
                            var i = r.data,
                                s = e > i.length ? i.length : e;
                            if (i.copy(t, t.length - e, 0, s), 0 == (e -= s)) {
                                s === i.length ? (++n, r.next ? this.head = r.next : this.head = this.tail = null) : (this.head = r, r.data = i.slice(s));
                                break
                            }++n
                        }
                        return this.length -= n, t
                    }
                }, {
                    key: c,
                    value: function(e, t) {
                        return l(this, i(i({}, t), {}, {
                            depth: 0,
                            customInspect: !1
                        }))
                    }
                }], s(r.prototype, e), t && s(r, t), Object.defineProperty(r, "prototype", {
                    writable: !1
                }), r
            }()
        },
        33626: function(e, t, r) {
            "use strict";
            var n = r(32215);

            function i(e, t) {
                o(e, t), s(e)
            }

            function s(e) {
                (!e._writableState || e._writableState.emitClose) && (!e._readableState || e._readableState.emitClose) && e.emit("close")
            }

            function o(e, t) {
                e.emit("error", t)
            }
            e.exports = {
                destroy: function(e, t) {
                    var r = this,
                        a = this._readableState && this._readableState.destroyed,
                        l = this._writableState && this._writableState.destroyed;
                    return a || l ? t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, n.nextTick(o, this, e)) : n.nextTick(o, this, e)) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function(e) {
                        !t && e ? r._writableState ? r._writableState.errorEmitted ? n.nextTick(s, r) : (r._writableState.errorEmitted = !0, n.nextTick(i, r, e)) : n.nextTick(i, r, e) : t ? (n.nextTick(s, r), t(e)) : n.nextTick(s, r)
                    })), this
                },
                undestroy: function() {
                    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
                },
                errorOrDestroy: function(e, t) {
                    var r = e._readableState,
                        n = e._writableState;
                    r && r.autoDestroy || n && n.autoDestroy ? e.destroy(t) : e.emit("error", t)
                }
            }
        },
        95835: function(e, t, r) {
            "use strict";
            var n = r(73947).q.ERR_STREAM_PREMATURE_CLOSE;

            function i() {}
            e.exports = function e(t, r, s) {
                if ("function" == typeof r) return e(t, null, r);
                r || (r = {}), o = s || i, a = !1, s = function() {
                    if (!a) {
                        a = !0;
                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        o.apply(this, t)
                    }
                };
                var o, a, l = r.readable || !1 !== r.readable && t.readable,
                    c = r.writable || !1 !== r.writable && t.writable,
                    u = function() {
                        t.writable || d()
                    },
                    h = t._writableState && t._writableState.finished,
                    d = function() {
                        c = !1, h = !0, l || s.call(t)
                    },
                    f = t._readableState && t._readableState.endEmitted,
                    p = function() {
                        l = !1, f = !0, c || s.call(t)
                    },
                    g = function(e) {
                        s.call(t, e)
                    },
                    m = function() {
                        var e;
                        return l && !f ? (t._readableState && t._readableState.ended || (e = new n), s.call(t, e)) : c && !h ? (t._writableState && t._writableState.ended || (e = new n), s.call(t, e)) : void 0
                    },
                    y = function() {
                        t.req.on("finish", d)
                    };
                return t.setHeader && "function" == typeof t.abort ? (t.on("complete", d), t.on("abort", m), t.req ? y() : t.on("request", y)) : c && !t._writableState && (t.on("end", u), t.on("close", u)), t.on("end", p), t.on("finish", d), !1 !== r.error && t.on("error", g), t.on("close", m),
                    function() {
                        t.removeListener("complete", d), t.removeListener("abort", m), t.removeListener("request", y), t.req && t.req.removeListener("finish", d), t.removeListener("end", u), t.removeListener("close", u), t.removeListener("finish", d), t.removeListener("end", p), t.removeListener("error", g), t.removeListener("close", m)
                    }
            }
        },
        49484: function(e) {
            "use strict";
            e.exports = function() {
                throw Error("Readable.from is not available in the browser")
            }
        },
        90652: function(e, t, r) {
            "use strict";
            var n, i = r(73947).q,
                s = i.ERR_MISSING_ARGS,
                o = i.ERR_STREAM_DESTROYED;

            function a(e) {
                if (e) throw e
            }

            function l(e) {
                e()
            }

            function c(e, t) {
                return e.pipe(t)
            }
            e.exports = function() {
                for (var e, t, i = arguments.length, u = Array(i), h = 0; h < i; h++) u[h] = arguments[h];
                var d = (e = u).length && "function" == typeof e[e.length - 1] ? e.pop() : a;
                if (Array.isArray(u[0]) && (u = u[0]), u.length < 2) throw new s("streams");
                var f = u.map(function(e, i) {
                    var s, a, c, h, p, g = i < u.length - 1;
                    return a = s = function(e) {
                            t || (t = e), e && f.forEach(l), g || (f.forEach(l), d(t))
                        }, c = !1, s = function() {
                            c || (c = !0, a.apply(void 0, arguments))
                        }, h = !1, e.on("close", function() {
                            h = !0
                        }), void 0 === n && (n = r(95835)), n(e, {
                            readable: g,
                            writable: i > 0
                        }, function(e) {
                            if (e) return s(e);
                            h = !0, s()
                        }), p = !1,
                        function(t) {
                            if (!h && !p) {
                                if (p = !0, e.setHeader && "function" == typeof e.abort) return e.abort();
                                if ("function" == typeof e.destroy) return e.destroy();
                                s(t || new o("pipe"))
                            }
                        }
                });
                return u.reduce(c)
            }
        },
        6880: function(e, t, r) {
            "use strict";
            var n = r(73947).q.ERR_INVALID_OPT_VALUE;
            e.exports = {
                getHighWaterMark: function(e, t, r, i) {
                    var s = null != t.highWaterMark ? t.highWaterMark : i ? t[r] : null;
                    if (null != s) {
                        if (!(isFinite(s) && Math.floor(s) === s) || s < 0) throw new n(i ? r : "highWaterMark", s);
                        return Math.floor(s)
                    }
                    return e.objectMode ? 16 : 16384
                }
            }
        },
        17396: function(e, t, r) {
            "use strict";
            e.exports = r(70094).EventEmitter
        },
        33632: function(e, t, r) {
            "use strict";
            (t = e.exports = r(25101)).Stream = t, t.Readable = t, t.Writable = r(88049), t.Duplex = r(32674), t.Transform = r(90493), t.PassThrough = r(97118), t.finished = r(95835), t.pipeline = r(90652)
        },
        98572: function(e) {
            "use strict";
            let t = (e, t) => function() {
                let r = t.promiseModule,
                    n = Array(arguments.length);
                for (let e = 0; e < arguments.length; e++) n[e] = arguments[e];
                return new r((r, i) => {
                    t.errorFirst ? n.push(function(e, n) {
                        if (t.multiArgs) {
                            let t = Array(arguments.length - 1);
                            for (let e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
                            e ? (t.unshift(e), i(t)) : r(t)
                        } else e ? i(e) : r(n)
                    }) : n.push(function(e) {
                        if (t.multiArgs) {
                            let e = Array(arguments.length - 1);
                            for (let t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            r(e)
                        } else r(e)
                    }), e.apply(this, n)
                })
            };
            e.exports = (e, r) => {
                let n;
                r = Object.assign({
                    exclude: [/.+(Sync|Stream)$/],
                    errorFirst: !0,
                    promiseModule: Promise
                }, r);
                let i = e => {
                    let t = t => "string" == typeof t ? e === t : t.test(e);
                    return r.include ? r.include.some(t) : !r.exclude.some(t)
                };
                for (let s in n = "function" == typeof e ? function() {
                        return r.excludeMain ? e.apply(this, arguments) : t(e, r).apply(this, arguments)
                    } : Object.create(Object.getPrototypeOf(e)), e) {
                    let o = e[s];
                    n[s] = "function" == typeof o && i(s) ? t(o, r) : o
                }
                return n
            }
        },
        85350: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Component: function() {
                    return E
                },
                Fragment: function() {
                    return w
                },
                cloneElement: function() {
                    return D
                },
                createContext: function() {
                    return F
                },
                createElement: function() {
                    return v
                },
                createRef: function() {
                    return _
                },
                h: function() {
                    return v
                },
                hydrate: function() {
                    return B
                },
                isValidElement: function() {
                    return o
                },
                options: function() {
                    return i
                },
                render: function() {
                    return j
                },
                toChildArray: function() {
                    return function e(t, r) {
                        return r = r || [], null == t || "boolean" == typeof t || (g(t) ? t.some(function(t) {
                            e(t, r)
                        }) : r.push(t)), r
                    }
                }
            });
            var n, i, s, o, a, l, c, u, h, d = {},
                f = [],
                p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
                g = Array.isArray;

            function m(e, t) {
                for (var r in t) e[r] = t[r];
                return e
            }

            function y(e) {
                var t = e.parentNode;
                t && t.removeChild(e)
            }

            function v(e, t, r) {
                var i, s, o, a = {};
                for (o in t) "key" == o ? i = t[o] : "ref" == o ? s = t[o] : a[o] = t[o];
                if (arguments.length > 2 && (a.children = arguments.length > 3 ? n.call(arguments, 2) : r), "function" == typeof e && null != e.defaultProps)
                    for (o in e.defaultProps) void 0 === a[o] && (a[o] = e.defaultProps[o]);
                return b(e, a, i, s, null)
            }

            function b(e, t, r, n, o) {
                var a = {
                    type: e,
                    props: t,
                    key: r,
                    ref: n,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    constructor: void 0,
                    __v: null == o ? ++s : o,
                    __i: -1,
                    __u: 0
                };
                return null == o && null != i.vnode && i.vnode(a), a
            }

            function _() {
                return {
                    current: null
                }
            }

            function w(e) {
                return e.children
            }

            function E(e, t) {
                this.props = e, this.context = t
            }

            function k(e, t) {
                if (null == t) return e.__ ? k(e.__, e.__i + 1) : null;
                for (var r; t < e.__k.length; t++)
                    if (null != (r = e.__k[t]) && null != r.__e) return r.__e;
                return "function" == typeof e.type ? k(e) : null
            }

            function S(e) {
                (!e.__d && (e.__d = !0) && a.push(e) && !M.__r++ || l !== i.debounceRendering) && ((l = i.debounceRendering) || c)(M)
            }

            function M() {
                var e, t, r, n = [],
                    s = [];
                for (a.sort(u); e = a.shift();) e.__d && (r = a.length, t = function(e, t, r) {
                    var n, s = e.__v,
                        o = s.__e,
                        a = e.__P;
                    if (a) return (n = m({}, s)).__v = s.__v + 1, i.vnode && i.vnode(n), N(a, n, s, e.__n, void 0 !== a.ownerSVGElement, 32 & s.__u ? [o] : null, t, null == o ? k(s) : o, !!(32 & s.__u), r), n.__v = s.__v, n.__.__k[n.__i] = n, n.__d = void 0, n.__e != o && function e(t) {
                        var r, n;
                        if (null != (t = t.__) && null != t.__c) {
                            for (t.__e = t.__c.base = null, r = 0; r < t.__k.length; r++)
                                if (null != (n = t.__k[r]) && null != n.__e) {
                                    t.__e = t.__c.base = n.__e;
                                    break
                                }
                            return e(t)
                        }
                    }(n), n
                }(e, n, s) || t, 0 === r || a.length > r ? (L(n, t, s), s.length = n.length = 0, t = void 0, a.sort(u)) : t && i.__c && i.__c(t, f));
                t && L(n, t, s), M.__r = 0
            }

            function R(e, t, r, n, i, s, o, a, l, c, u) {
                var h, p, m, y, v, _ = n && n.__k || f,
                    E = t.length;
                for (r.__d = l, function(e, t, r) {
                        var n, i, s, o, a, l = t.length,
                            c = r.length,
                            u = c,
                            h = 0;
                        for (e.__k = [], n = 0; n < l; n++) o = n + h, null != (i = e.__k[n] = null == (i = t[n]) || "boolean" == typeof i || "function" == typeof i ? null : "string" == typeof i || "number" == typeof i || "bigint" == typeof i || i.constructor == String ? b(null, i, null, null, null) : g(i) ? b(w, {
                            children: i
                        }, null, null, null) : void 0 === i.constructor && i.__b > 0 ? b(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) ? (i.__ = e, i.__b = e.__b + 1, a = function(e, t, r, n) {
                            var i = e.key,
                                s = e.type,
                                o = r - 1,
                                a = r + 1,
                                l = t[r];
                            if (null === l || l && i == l.key && s === l.type && 0 == (131072 & l.__u)) return r;
                            if (n > (null != l && 0 == (131072 & l.__u) ? 1 : 0))
                                for (; o >= 0 || a < t.length;) {
                                    if (o >= 0) {
                                        if ((l = t[o]) && 0 == (131072 & l.__u) && i == l.key && s === l.type) return o;
                                        o--
                                    }
                                    if (a < t.length) {
                                        if ((l = t[a]) && 0 == (131072 & l.__u) && i == l.key && s === l.type) return a;
                                        a++
                                    }
                                }
                            return -1
                        }(i, r, o, u), i.__i = a, s = null, -1 !== a && (u--, (s = r[a]) && (s.__u |= 131072)), null == s || null === s.__v ? (-1 == a && h--, "function" != typeof i.type && (i.__u |= 65536)) : a !== o && (a === o + 1 ? h++ : a > o ? u > l - o ? h += a - o : h-- : a < o ? a == o - 1 && (h = a - o) : h = 0, a !== n + h && (i.__u |= 65536))) : (s = r[o]) && null == s.key && s.__e && 0 == (131072 & s.__u) && (s.__e == e.__d && (e.__d = k(s)), T(s, s, !1), r[o] = null, u--);
                        if (u)
                            for (n = 0; n < c; n++) null != (s = r[n]) && 0 == (131072 & s.__u) && (s.__e == e.__d && (e.__d = k(s)), T(s, s))
                    }(r, t, _), l = r.__d, h = 0; h < E; h++) null != (m = r.__k[h]) && "boolean" != typeof m && "function" != typeof m && (p = -1 === m.__i ? d : _[m.__i] || d, m.__i = h, N(e, m, p, i, s, o, a, l, c, u), y = m.__e, m.ref && p.ref != m.ref && (p.ref && O(p.ref, null, m), u.push(m.ref, m.__c || y, m)), null == v && null != y && (v = y), 65536 & m.__u || p.__k === m.__k ? l = function e(t, r, n) {
                    var i, s;
                    if ("function" == typeof t.type) {
                        for (i = t.__k, s = 0; i && s < i.length; s++) i[s] && (i[s].__ = t, r = e(i[s], r, n));
                        return r
                    }
                    t.__e != r && (n.insertBefore(t.__e, r || null), r = t.__e);
                    do r = r && r.nextSibling; while (null != r && 8 === r.nodeType);
                    return r
                }(m, l, e) : "function" == typeof m.type && void 0 !== m.__d ? l = m.__d : y && (l = y.nextSibling), m.__d = void 0, m.__u &= -196609);
                r.__d = l, r.__e = v
            }

            function C(e, t, r) {
                "-" === t[0] ? e.setProperty(t, null == r ? "" : r) : e[t] = null == r ? "" : "number" != typeof r || p.test(t) ? r : r + "px"
            }

            function x(e, t, r, n, i) {
                var s;
                t: if ("style" === t) {
                    if ("string" == typeof r) e.style.cssText = r;
                    else {
                        if ("string" == typeof n && (e.style.cssText = n = ""), n)
                            for (t in n) r && t in r || C(e.style, t, "");
                        if (r)
                            for (t in r) n && r[t] === n[t] || C(e.style, t, r[t])
                    }
                } else
                if ("o" === t[0] && "n" === t[1]) s = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + s] = r, r ? n ? r.u = n.u : (r.u = Date.now(), e.addEventListener(t, s ? A : I, s)) : e.removeEventListener(t, s ? A : I, s);
                else {
                    if (i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                    else if ("width" !== t && "height" !== t && "href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && "rowSpan" !== t && "colSpan" !== t && "role" !== t && t in e) try {
                        e[t] = null == r ? "" : r;
                        break t
                    } catch (e) {}
                    "function" == typeof r || (null == r || !1 === r && "-" !== t[4] ? e.removeAttribute(t) : e.setAttribute(t, r))
                }
            }

            function I(e) {
                if (this.l) {
                    var t = this.l[e.type + !1];
                    if (e.t) {
                        if (e.t <= t.u) return
                    } else e.t = Date.now();
                    return t(i.event ? i.event(e) : e)
                }
            }

            function A(e) {
                if (this.l) return this.l[e.type + !0](i.event ? i.event(e) : e)
            }

            function N(e, t, r, s, o, a, l, c, u, h) {
                var f, p, v, b, _, S, M, C, I, A, N, L, O, T, j, B = t.type;
                if (void 0 !== t.constructor) return null;
                128 & r.__u && (u = !!(32 & r.__u), a = [c = t.__e = r.__e]), (f = i.__b) && f(t);
                t: if ("function" == typeof B) try {
                    if (C = t.props, I = (f = B.contextType) && s[f.__c], A = f ? I ? I.props.value : f.__ : s, r.__c ? M = (p = t.__c = r.__c).__ = p.__E : ("prototype" in B && B.prototype.render ? t.__c = p = new B(C, A) : (t.__c = p = new E(C, A), p.constructor = B, p.render = P), I && I.sub(p), p.props = C, p.state || (p.state = {}), p.context = A, p.__n = s, v = p.__d = !0, p.__h = [], p._sb = []), null == p.__s && (p.__s = p.state), null != B.getDerivedStateFromProps && (p.__s == p.state && (p.__s = m({}, p.__s)), m(p.__s, B.getDerivedStateFromProps(C, p.__s))), b = p.props, _ = p.state, p.__v = t, v) null == B.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), null != p.componentDidMount && p.__h.push(p.componentDidMount);
                    else {
                        if (null == B.getDerivedStateFromProps && C !== b && null != p.componentWillReceiveProps && p.componentWillReceiveProps(C, A), !p.__e && (null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(C, p.__s, A) || t.__v === r.__v)) {
                            for (t.__v !== r.__v && (p.props = C, p.state = p.__s, p.__d = !1), t.__e = r.__e, t.__k = r.__k, t.__k.forEach(function(e) {
                                    e && (e.__ = t)
                                }), N = 0; N < p._sb.length; N++) p.__h.push(p._sb[N]);
                            p._sb = [], p.__h.length && l.push(p);
                            break t
                        }
                        null != p.componentWillUpdate && p.componentWillUpdate(C, p.__s, A), null != p.componentDidUpdate && p.__h.push(function() {
                            p.componentDidUpdate(b, _, S)
                        })
                    }
                    if (p.context = A, p.props = C, p.__P = e, p.__e = !1, L = i.__r, O = 0, "prototype" in B && B.prototype.render) {
                        for (p.state = p.__s, p.__d = !1, L && L(t), f = p.render(p.props, p.state, p.context), T = 0; T < p._sb.length; T++) p.__h.push(p._sb[T]);
                        p._sb = []
                    } else
                        do p.__d = !1, L && L(t), f = p.render(p.props, p.state, p.context), p.state = p.__s; while (p.__d && ++O < 25);
                    p.state = p.__s, null != p.getChildContext && (s = m(m({}, s), p.getChildContext())), v || null == p.getSnapshotBeforeUpdate || (S = p.getSnapshotBeforeUpdate(b, _)), R(e, g(j = null != f && f.type === w && null == f.key ? f.props.children : f) ? j : [j], t, r, s, o, a, l, c, u, h), p.base = t.__e, t.__u &= -161, p.__h.length && l.push(p), M && (p.__E = p.__ = null)
                } catch (e) {
                    t.__v = null, u || null != a ? (t.__e = c, t.__u |= u ? 160 : 32, a[a.indexOf(c)] = null) : (t.__e = r.__e, t.__k = r.__k), i.__e(e, t, r)
                } else null == a && t.__v === r.__v ? (t.__k = r.__k, t.__e = r.__e) : t.__e = function(e, t, r, i, s, o, a, l, c) {
                    var u, h, f, p, m, v, b, _ = r.props,
                        w = t.props,
                        E = t.type;
                    if ("svg" === E && (s = !0), null != o) {
                        for (u = 0; u < o.length; u++)
                            if ((m = o[u]) && "setAttribute" in m == !!E && (E ? m.localName === E : 3 === m.nodeType)) {
                                e = m, o[u] = null;
                                break
                            }
                    }
                    if (null == e) {
                        if (null === E) return document.createTextNode(w);
                        e = s ? document.createElementNS("http://www.w3.org/2000/svg", E) : document.createElement(E, w.is && w), o = null, l = !1
                    }
                    if (null === E) _ === w || l && e.data === w || (e.data = w);
                    else {
                        if (o = o && n.call(e.childNodes), _ = r.props || d, !l && null != o)
                            for (_ = {}, u = 0; u < e.attributes.length; u++) _[(m = e.attributes[u]).name] = m.value;
                        for (u in _) m = _[u], "children" == u || ("dangerouslySetInnerHTML" == u ? f = m : "key" === u || u in w || x(e, u, null, m, s));
                        for (u in w) m = w[u], "children" == u ? p = m : "dangerouslySetInnerHTML" == u ? h = m : "value" == u ? v = m : "checked" == u ? b = m : "key" === u || l && "function" != typeof m || _[u] === m || x(e, u, m, _[u], s);
                        if (h) l || f && (h.__html === f.__html || h.__html === e.innerHTML) || (e.innerHTML = h.__html), t.__k = [];
                        else if (f && (e.innerHTML = ""), R(e, g(p) ? p : [p], t, r, i, s && "foreignObject" !== E, o, a, o ? o[0] : r.__k && k(r, 0), l, c), null != o)
                            for (u = o.length; u--;) null != o[u] && y(o[u]);
                        l || (u = "value", void 0 === v || v === e[u] && ("progress" !== E || v) && ("option" !== E || v === _[u]) || x(e, u, v, _[u], !1), u = "checked", void 0 !== b && b !== e[u] && x(e, u, b, _[u], !1))
                    }
                    return e
                }(r.__e, t, r, s, o, a, l, u, h);
                (f = i.diffed) && f(t)
            }

            function L(e, t, r) {
                for (var n = 0; n < r.length; n++) O(r[n], r[++n], r[++n]);
                i.__c && i.__c(t, e), e.some(function(t) {
                    try {
                        e = t.__h, t.__h = [], e.some(function(e) {
                            e.call(t)
                        })
                    } catch (e) {
                        i.__e(e, t.__v)
                    }
                })
            }

            function O(e, t, r) {
                try {
                    "function" == typeof e ? e(t) : e.current = t
                } catch (e) {
                    i.__e(e, r)
                }
            }

            function T(e, t, r) {
                var n, s;
                if (i.unmount && i.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || O(n, null, t)), null != (n = e.__c)) {
                    if (n.componentWillUnmount) try {
                        n.componentWillUnmount()
                    } catch (e) {
                        i.__e(e, t)
                    }
                    n.base = n.__P = null, e.__c = void 0
                }
                if (n = e.__k)
                    for (s = 0; s < n.length; s++) n[s] && T(n[s], t, r || "function" != typeof e.type);
                r || null == e.__e || y(e.__e), e.__ = e.__e = e.__d = void 0
            }

            function P(e, t, r) {
                return this.constructor(e, r)
            }

            function j(e, t, r) {
                var s, o, a, l;
                i.__ && i.__(e, t), o = (s = "function" == typeof r) ? null : r && r.__k || t.__k, a = [], l = [], N(t, e = (!s && r || t).__k = v(w, null, [e]), o || d, d, void 0 !== t.ownerSVGElement, !s && r ? [r] : o ? null : t.firstChild ? n.call(t.childNodes) : null, a, !s && r ? r : o ? o.__e : t.firstChild, s, l), e.__d = void 0, L(a, e, l)
            }

            function B(e, t) {
                j(e, t, B)
            }

            function D(e, t, r) {
                var i, s, o, a, l = m({}, e.props);
                for (o in e.type && e.type.defaultProps && (a = e.type.defaultProps), t) "key" == o ? i = t[o] : "ref" == o ? s = t[o] : l[o] = void 0 === t[o] && void 0 !== a ? a[o] : t[o];
                return arguments.length > 2 && (l.children = arguments.length > 3 ? n.call(arguments, 2) : r), b(e.type, l, i || e.key, s || e.ref, null)
            }

            function F(e, t) {
                var r = {
                    __c: t = "__cC" + h++,
                    __: e,
                    Consumer: function(e, t) {
                        return e.children(t)
                    },
                    Provider: function(e) {
                        var r, n;
                        return this.getChildContext || (r = [], (n = {})[t] = this, this.getChildContext = function() {
                            return n
                        }, this.shouldComponentUpdate = function(e) {
                            this.props.value !== e.value && r.some(function(e) {
                                e.__e = !0, S(e)
                            })
                        }, this.sub = function(e) {
                            r.push(e);
                            var t = e.componentWillUnmount;
                            e.componentWillUnmount = function() {
                                r.splice(r.indexOf(e), 1), t && t.call(e)
                            }
                        }), e.children
                    }
                };
                return r.Provider.__ = r.Consumer.contextType = r
            }
            n = f.slice, i = {
                __e: function(e, t, r, n) {
                    for (var i, s, o; t = t.__;)
                        if ((i = t.__c) && !i.__) try {
                            if ((s = i.constructor) && null != s.getDerivedStateFromError && (i.setState(s.getDerivedStateFromError(e)), o = i.__d), null != i.componentDidCatch && (i.componentDidCatch(e, n || {}), o = i.__d), o) return i.__E = i
                        } catch (t) {
                            e = t
                        }
                    throw e
                }
            }, s = 0, o = function(e) {
                return null != e && null == e.constructor
            }, E.prototype.setState = function(e, t) {
                var r;
                r = null != this.__s && this.__s !== this.state ? this.__s : this.__s = m({}, this.state), "function" == typeof e && (e = e(m({}, r), this.props)), e && m(r, e), null != e && this.__v && (t && this._sb.push(t), S(this))
            }, E.prototype.forceUpdate = function(e) {
                this.__v && (this.__e = !0, e && this.__h.push(e), S(this))
            }, E.prototype.render = w, a = [], c = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, u = function(e, t) {
                return e.__v.__b - t.__v.__b
            }, M.__r = 0, h = 0
        },
        95889: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useCallback: function() {
                    return R
                },
                useContext: function() {
                    return C
                },
                useDebugValue: function() {
                    return x
                },
                useEffect: function() {
                    return w
                },
                useErrorBoundary: function() {
                    return I
                },
                useId: function() {
                    return A
                },
                useImperativeHandle: function() {
                    return S
                },
                useLayoutEffect: function() {
                    return E
                },
                useMemo: function() {
                    return M
                },
                useReducer: function() {
                    return _
                },
                useRef: function() {
                    return k
                },
                useState: function() {
                    return b
                }
            });
            var n, i, s, o, a = r(85350),
                l = 0,
                c = [],
                u = [],
                h = a.options,
                d = h.__b,
                f = h.__r,
                p = h.diffed,
                g = h.__c,
                m = h.unmount,
                y = h.__;

            function v(e, t) {
                h.__h && h.__h(i, e, l || t), l = 0;
                var r = i.__H || (i.__H = {
                    __: [],
                    __h: []
                });
                return e >= r.__.length && r.__.push({
                    __V: u
                }), r.__[e]
            }

            function b(e) {
                return l = 1, _(j, e)
            }

            function _(e, t, r) {
                var s = v(n++, 2);
                if (s.t = e, !s.__c && (s.__ = [r ? r(t) : j(void 0, t), function(e) {
                        var t = s.__N ? s.__N[0] : s.__[0],
                            r = s.t(t, e);
                        t !== r && (s.__N = [r, s.__[1]], s.__c.setState({}))
                    }], s.__c = i, !i.u)) {
                    var o = function(e, t, r) {
                        if (!s.__c.__H) return !0;
                        var n = s.__c.__H.__.filter(function(e) {
                            return !!e.__c
                        });
                        if (n.every(function(e) {
                                return !e.__N
                            })) return !a || a.call(this, e, t, r);
                        var i = !1;
                        return n.forEach(function(e) {
                            if (e.__N) {
                                var t = e.__[0];
                                e.__ = e.__N, e.__N = void 0, t !== e.__[0] && (i = !0)
                            }
                        }), !(!i && s.__c.props === e) && (!a || a.call(this, e, t, r))
                    };
                    i.u = !0;
                    var a = i.shouldComponentUpdate,
                        l = i.componentWillUpdate;
                    i.componentWillUpdate = function(e, t, r) {
                        if (this.__e) {
                            var n = a;
                            a = void 0, o(e, t, r), a = n
                        }
                        l && l.call(this, e, t, r)
                    }, i.shouldComponentUpdate = o
                }
                return s.__N || s.__
            }

            function w(e, t) {
                var r = v(n++, 3);
                !h.__s && P(r.__H, t) && (r.__ = e, r.i = t, i.__H.__h.push(r))
            }

            function E(e, t) {
                var r = v(n++, 4);
                !h.__s && P(r.__H, t) && (r.__ = e, r.i = t, i.__h.push(r))
            }

            function k(e) {
                return l = 5, M(function() {
                    return {
                        current: e
                    }
                }, [])
            }

            function S(e, t, r) {
                l = 6, E(function() {
                    return "function" == typeof e ? (e(t()), function() {
                        return e(null)
                    }) : e ? (e.current = t(), function() {
                        return e.current = null
                    }) : void 0
                }, null == r ? r : r.concat(e))
            }

            function M(e, t) {
                var r = v(n++, 7);
                return P(r.__H, t) ? (r.__V = e(), r.i = t, r.__h = e, r.__V) : r.__
            }

            function R(e, t) {
                return l = 8, M(function() {
                    return e
                }, t)
            }

            function C(e) {
                var t = i.context[e.__c],
                    r = v(n++, 9);
                return r.c = e, t ? (null == r.__ && (r.__ = !0, t.sub(i)), t.props.value) : e.__
            }

            function x(e, t) {
                h.useDebugValue && h.useDebugValue(t ? t(e) : e)
            }

            function I(e) {
                var t = v(n++, 10),
                    r = b();
                return t.__ = e, i.componentDidCatch || (i.componentDidCatch = function(e, n) {
                    t.__ && t.__(e, n), r[1](e)
                }), [r[0], function() {
                    r[1](void 0)
                }]
            }

            function A() {
                var e = v(n++, 11);
                if (!e.__) {
                    for (var t = i.__v; null !== t && !t.__m && null !== t.__;) t = t.__;
                    var r = t.__m || (t.__m = [0, 0]);
                    e.__ = "P" + r[0] + "-" + r[1]++
                }
                return e.__
            }

            function N() {
                for (var e; e = c.shift();)
                    if (e.__P && e.__H) try {
                        e.__H.__h.forEach(O), e.__H.__h.forEach(T), e.__H.__h = []
                    } catch (t) {
                        e.__H.__h = [], h.__e(t, e.__v)
                    }
            }
            h.__b = function(e) {
                i = null, d && d(e)
            }, h.__ = function(e, t) {
                e && t.__k && t.__k.__m && (e.__m = t.__k.__m), y && y(e, t)
            }, h.__r = function(e) {
                f && f(e), n = 0;
                var t = (i = e.__c).__H;
                t && (s === i ? (t.__h = [], i.__h = [], t.__.forEach(function(e) {
                    e.__N && (e.__ = e.__N), e.__V = u, e.__N = e.i = void 0
                })) : (t.__h.forEach(O), t.__h.forEach(T), t.__h = [], n = 0)), s = i
            }, h.diffed = function(e) {
                p && p(e);
                var t = e.__c;
                t && t.__H && (t.__H.__h.length && (1 !== c.push(t) && o === h.requestAnimationFrame || ((o = h.requestAnimationFrame) || function(e) {
                    var t, r = function() {
                            clearTimeout(n), L && cancelAnimationFrame(t), setTimeout(e)
                        },
                        n = setTimeout(r, 100);
                    L && (t = requestAnimationFrame(r))
                })(N)), t.__H.__.forEach(function(e) {
                    e.i && (e.__H = e.i), e.__V !== u && (e.__ = e.__V), e.i = void 0, e.__V = u
                })), s = i = null
            }, h.__c = function(e, t) {
                t.some(function(e) {
                    try {
                        e.__h.forEach(O), e.__h = e.__h.filter(function(e) {
                            return !e.__ || T(e)
                        })
                    } catch (r) {
                        t.some(function(e) {
                            e.__h && (e.__h = [])
                        }), t = [], h.__e(r, e.__v)
                    }
                }), g && g(e, t)
            }, h.unmount = function(e) {
                m && m(e);
                var t, r = e.__c;
                r && r.__H && (r.__H.__.forEach(function(e) {
                    try {
                        O(e)
                    } catch (e) {
                        t = e
                    }
                }), r.__H = void 0, t && h.__e(t, r.__v))
            };
            var L = "function" == typeof requestAnimationFrame;

            function O(e) {
                var t = i,
                    r = e.__c;
                "function" == typeof r && (e.__c = void 0, r()), i = t
            }

            function T(e) {
                var t = i;
                e.__c = e.__(), i = t
            }

            function P(e, t) {
                return !e || e.length !== t.length || t.some(function(t, r) {
                    return t !== e[r]
                })
            }

            function j(e, t) {
                return "function" == typeof t ? t(e) : t
            }
        },
        17338: function(e, t, r) {
            "use strict";
            var n = r(78309).Buffer;

            function i(e, t) {
                this._block = n.alloc(e), this._finalSize = t, this._blockSize = e, this._len = 0
            }
            i.prototype.update = function(e, t) {
                "string" == typeof e && (t = t || "utf8", e = n.from(e, t));
                for (var r = this._block, i = this._blockSize, s = e.length, o = this._len, a = 0; a < s;) {
                    for (var l = o % i, c = Math.min(s - a, i - l), u = 0; u < c; u++) r[l + u] = e[a + u];
                    o += c, a += c, o % i == 0 && this._update(r)
                }
                return this._len += s, this
            }, i.prototype.digest = function(e) {
                var t = this._len % this._blockSize;
                this._block[t] = 128, this._block.fill(0, t + 1), t >= this._finalSize && (this._update(this._block), this._block.fill(0));
                var r = 8 * this._len;
                if (r <= 4294967295) this._block.writeUInt32BE(r, this._blockSize - 4);
                else {
                    var n = (4294967295 & r) >>> 0;
                    this._block.writeUInt32BE((r - n) / 4294967296, this._blockSize - 8), this._block.writeUInt32BE(n, this._blockSize - 4)
                }
                this._update(this._block);
                var i = this._hash();
                return e ? i.toString(e) : i
            }, i.prototype._update = function() {
                throw Error("_update must be implemented by subclass")
            }, e.exports = i
        },
        90414: function(e, t, r) {
            "use strict";
            var n = e.exports = function(e) {
                var t = n[e = e.toLowerCase()];
                if (!t) throw Error(e + " is not supported (we accept pull requests)");
                return new t
            };
            n.sha = r(15071), n.sha1 = r(32815), n.sha224 = r(86872), n.sha256 = r(448), n.sha384 = r(47531), n.sha512 = r(79181)
        },
        78309: function(e, t, r) {
            "use strict"; /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
            var n = r(23663),
                i = n.Buffer;

            function s(e, t) {
                for (var r in e) t[r] = e[r]
            }

            function o(e, t, r) {
                return i(e, t, r)
            }
            i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? e.exports = n : (s(n, t), t.Buffer = o), o.prototype = Object.create(i.prototype), s(i, o), o.from = function(e, t, r) {
                if ("number" == typeof e) throw TypeError("Argument must not be a number");
                return i(e, t, r)
            }, o.alloc = function(e, t, r) {
                if ("number" != typeof e) throw TypeError("Argument must be a number");
                var n = i(e);
                return void 0 !== t ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0), n
            }, o.allocUnsafe = function(e) {
                if ("number" != typeof e) throw TypeError("Argument must be a number");
                return i(e)
            }, o.allocUnsafeSlow = function(e) {
                if ("number" != typeof e) throw TypeError("Argument must be a number");
                return n.SlowBuffer(e)
            }
        },
        15071: function(e, t, r) {
            "use strict";
            var n = r(39541),
                i = r(17338),
                s = r(78309).Buffer,
                o = [1518500249, 1859775393, -1894007588, -899497514],
                a = Array(80);

            function l() {
                this.init(), this._w = a, i.call(this, 64, 56)
            }
            n(l, i), l.prototype.init = function() {
                return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
            }, l.prototype._update = function(e) {
                for (var t = this._w, r = 0 | this._a, n = 0 | this._b, i = 0 | this._c, s = 0 | this._d, a = 0 | this._e, l = 0; l < 16; ++l) t[l] = e.readInt32BE(4 * l);
                for (; l < 80; ++l) t[l] = t[l - 3] ^ t[l - 8] ^ t[l - 14] ^ t[l - 16];
                for (var c = 0; c < 80; ++c) {
                    var u, h, d, f, p, g = ~~(c / 20),
                        m = ((u = r) << 5 | u >>> 27) + (h = n, d = i, f = s, 0 === g ? h & d | ~h & f : 2 === g ? h & d | h & f | d & f : h ^ d ^ f) + a + t[c] + o[g] | 0;
                    a = s, s = i, i = (p = n) << 30 | p >>> 2, n = r, r = m
                }
                this._a = r + this._a | 0, this._b = n + this._b | 0, this._c = i + this._c | 0, this._d = s + this._d | 0, this._e = a + this._e | 0
            }, l.prototype._hash = function() {
                var e = s.allocUnsafe(20);
                return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e
            }, e.exports = l
        },
        32815: function(e, t, r) {
            "use strict";
            var n = r(39541),
                i = r(17338),
                s = r(78309).Buffer,
                o = [1518500249, 1859775393, -1894007588, -899497514],
                a = Array(80);

            function l() {
                this.init(), this._w = a, i.call(this, 64, 56)
            }
            n(l, i), l.prototype.init = function() {
                return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
            }, l.prototype._update = function(e) {
                for (var t = this._w, r = 0 | this._a, n = 0 | this._b, i = 0 | this._c, s = 0 | this._d, a = 0 | this._e, l = 0; l < 16; ++l) t[l] = e.readInt32BE(4 * l);
                for (; l < 80; ++l) t[l] = (u = t[l - 3] ^ t[l - 8] ^ t[l - 14] ^ t[l - 16]) << 1 | u >>> 31;
                for (var c = 0; c < 80; ++c) {
                    var u, h, d, f, p, g, m = ~~(c / 20),
                        y = ((h = r) << 5 | h >>> 27) + (d = n, f = i, p = s, 0 === m ? d & f | ~d & p : 2 === m ? d & f | d & p | f & p : d ^ f ^ p) + a + t[c] + o[m] | 0;
                    a = s, s = i, i = (g = n) << 30 | g >>> 2, n = r, r = y
                }
                this._a = r + this._a | 0, this._b = n + this._b | 0, this._c = i + this._c | 0, this._d = s + this._d | 0, this._e = a + this._e | 0
            }, l.prototype._hash = function() {
                var e = s.allocUnsafe(20);
                return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e
            }, e.exports = l
        },
        86872: function(e, t, r) {
            "use strict";
            var n = r(39541),
                i = r(448),
                s = r(17338),
                o = r(78309).Buffer,
                a = Array(64);

            function l() {
                this.init(), this._w = a, s.call(this, 64, 56)
            }
            n(l, i), l.prototype.init = function() {
                return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this
            }, l.prototype._hash = function() {
                var e = o.allocUnsafe(28);
                return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e
            }, e.exports = l
        },
        448: function(e, t, r) {
            "use strict";
            var n = r(39541),
                i = r(17338),
                s = r(78309).Buffer,
                o = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                a = Array(64);

            function l() {
                this.init(), this._w = a, i.call(this, 64, 56)
            }
            n(l, i), l.prototype.init = function() {
                return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this
            }, l.prototype._update = function(e) {
                for (var t = this._w, r = 0 | this._a, n = 0 | this._b, i = 0 | this._c, s = 0 | this._d, a = 0 | this._e, l = 0 | this._f, c = 0 | this._g, u = 0 | this._h, h = 0; h < 16; ++h) t[h] = e.readInt32BE(4 * h);
                for (; h < 64; ++h) t[h] = (((f = t[h - 2]) >>> 17 | f << 15) ^ (f >>> 19 | f << 13) ^ f >>> 10) + t[h - 7] + (((p = t[h - 15]) >>> 7 | p << 25) ^ (p >>> 18 | p << 14) ^ p >>> 3) + t[h - 16] | 0;
                for (var d = 0; d < 64; ++d) {
                    var f, p, g, m, y, v, b, _, w, E = u + (((g = a) >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7)) + (m = a, y = l, (v = c) ^ m & (y ^ v)) + o[d] + t[d] | 0,
                        k = (((b = r) >>> 2 | b << 30) ^ (b >>> 13 | b << 19) ^ (b >>> 22 | b << 10)) + ((_ = r) & (w = n) | i & (_ | w)) | 0;
                    u = c, c = l, l = a, a = s + E | 0, s = i, i = n, n = r, r = E + k | 0
                }
                this._a = r + this._a | 0, this._b = n + this._b | 0, this._c = i + this._c | 0, this._d = s + this._d | 0, this._e = a + this._e | 0, this._f = l + this._f | 0, this._g = c + this._g | 0, this._h = u + this._h | 0
            }, l.prototype._hash = function() {
                var e = s.allocUnsafe(32);
                return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e.writeInt32BE(this._h, 28), e
            }, e.exports = l
        },
        47531: function(e, t, r) {
            "use strict";
            var n = r(39541),
                i = r(79181),
                s = r(17338),
                o = r(78309).Buffer,
                a = Array(160);

            function l() {
                this.init(), this._w = a, s.call(this, 128, 112)
            }
            n(l, i), l.prototype.init = function() {
                return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this
            }, l.prototype._hash = function() {
                var e = o.allocUnsafe(48);

                function t(t, r, n) {
                    e.writeInt32BE(t, n), e.writeInt32BE(r, n + 4)
                }
                return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), e
            }, e.exports = l
        },
        79181: function(e, t, r) {
            "use strict";
            var n = r(39541),
                i = r(17338),
                s = r(78309).Buffer,
                o = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
                a = Array(160);

            function l() {
                this.init(), this._w = a, i.call(this, 128, 112)
            }

            function c(e, t) {
                return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25)
            }

            function u(e, t) {
                return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23)
            }

            function h(e, t) {
                return e >>> 0 < t >>> 0 ? 1 : 0
            }
            n(l, i), l.prototype.init = function() {
                return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this
            }, l.prototype._update = function(e) {
                for (var t = this._w, r = 0 | this._ah, n = 0 | this._bh, i = 0 | this._ch, s = 0 | this._dh, a = 0 | this._eh, l = 0 | this._fh, d = 0 | this._gh, f = 0 | this._hh, p = 0 | this._al, g = 0 | this._bl, m = 0 | this._cl, y = 0 | this._dl, v = 0 | this._el, b = 0 | this._fl, _ = 0 | this._gl, w = 0 | this._hl, E = 0; E < 32; E += 2) t[E] = e.readInt32BE(4 * E), t[E + 1] = e.readInt32BE(4 * E + 4);
                for (; E < 160; E += 2) {
                    var k, S, M, R, C, x, I, A, N = t[E - 30],
                        L = t[E - 30 + 1],
                        O = ((k = N) >>> 1 | (S = L) << 31) ^ (k >>> 8 | S << 24) ^ k >>> 7,
                        T = ((M = L) >>> 1 | (R = N) << 31) ^ (M >>> 8 | R << 24) ^ (M >>> 7 | R << 25);
                    N = t[E - 4], L = t[E - 4 + 1];
                    var P = ((C = N) >>> 19 | (x = L) << 13) ^ (x >>> 29 | C << 3) ^ C >>> 6,
                        j = ((I = L) >>> 19 | (A = N) << 13) ^ (A >>> 29 | I << 3) ^ (I >>> 6 | A << 26),
                        B = t[E - 14],
                        D = t[E - 14 + 1],
                        F = t[E - 32],
                        U = t[E - 32 + 1],
                        H = T + D | 0,
                        q = O + B + h(H, T) | 0;
                    q = (q = q + P + h(H = H + j | 0, j) | 0) + F + h(H = H + U | 0, U) | 0, t[E] = q, t[E + 1] = H
                }
                for (var W = 0; W < 160; W += 2) {
                    q = t[W], H = t[W + 1];
                    var z, V, J, G, Z, Q, Y, K, X, $, ee = (z = r) & (V = n) | i & (z | V),
                        et = (J = p) & (G = g) | m & (J | G),
                        er = c(r, p),
                        en = c(p, r),
                        ei = u(a, v),
                        es = u(v, a),
                        eo = o[W],
                        ea = o[W + 1],
                        el = (Z = a, Q = l, (Y = d) ^ Z & (Q ^ Y)),
                        ec = (K = v, X = b, ($ = _) ^ K & (X ^ $)),
                        eu = w + es | 0,
                        eh = f + ei + h(eu, w) | 0;
                    eh = (eh = (eh = eh + el + h(eu = eu + ec | 0, ec) | 0) + eo + h(eu = eu + ea | 0, ea) | 0) + q + h(eu = eu + H | 0, H) | 0;
                    var ed = en + et | 0,
                        ef = er + ee + h(ed, en) | 0;
                    f = d, w = _, d = l, _ = b, l = a, b = v, a = s + eh + h(v = y + eu | 0, y) | 0, s = i, y = m, i = n, m = g, n = r, g = p, r = eh + ef + h(p = eu + ed | 0, eu) | 0
                }
                this._al = this._al + p | 0, this._bl = this._bl + g | 0, this._cl = this._cl + m | 0, this._dl = this._dl + y | 0, this._el = this._el + v | 0, this._fl = this._fl + b | 0, this._gl = this._gl + _ | 0, this._hl = this._hl + w | 0, this._ah = this._ah + r + h(this._al, p) | 0, this._bh = this._bh + n + h(this._bl, g) | 0, this._ch = this._ch + i + h(this._cl, m) | 0, this._dh = this._dh + s + h(this._dl, y) | 0, this._eh = this._eh + a + h(this._el, v) | 0, this._fh = this._fh + l + h(this._fl, b) | 0, this._gh = this._gh + d + h(this._gl, _) | 0, this._hh = this._hh + f + h(this._hl, w) | 0
            }, l.prototype._hash = function() {
                var e = s.allocUnsafe(64);

                function t(t, r, n) {
                    e.writeInt32BE(t, n), e.writeInt32BE(r, n + 4)
                }
                return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), t(this._gh, this._gl, 48), t(this._hh, this._hl, 56), e
            }, e.exports = l
        },
        55144: function(e, t, r) {
            "use strict";
            var n = r(11950).Buffer,
                i = n.isEncoding || function(e) {
                    switch ((e = "" + e) && e.toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                        case "raw":
                            return !0;
                        default:
                            return !1
                    }
                };

            function s(e) {
                var t;
                switch (this.encoding = function(e) {
                    var t = function(e) {
                        var t;
                        if (!e) return "utf8";
                        for (;;) switch (e) {
                            case "utf8":
                            case "utf-8":
                                return "utf8";
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return "utf16le";
                            case "latin1":
                            case "binary":
                                return "latin1";
                            case "base64":
                            case "ascii":
                            case "hex":
                                return e;
                            default:
                                if (t) return;
                                e = ("" + e).toLowerCase(), t = !0
                        }
                    }(e);
                    if ("string" != typeof t && (n.isEncoding === i || !i(e))) throw Error("Unknown encoding: " + e);
                    return t || e
                }(e), this.encoding) {
                    case "utf16le":
                        this.text = l, this.end = c, t = 4;
                        break;
                    case "utf8":
                        this.fillLast = a, t = 4;
                        break;
                    case "base64":
                        this.text = u, this.end = h, t = 3;
                        break;
                    default:
                        this.write = d, this.end = f;
                        return
                }
                this.lastNeed = 0, this.lastTotal = 0, this.lastChar = n.allocUnsafe(t)
            }

            function o(e) {
                return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
            }

            function a(e) {
                var t = this.lastTotal - this.lastNeed,
                    r = function(e, t, r) {
                        if ((192 & t[0]) != 128) return e.lastNeed = 0, "�";
                        if (e.lastNeed > 1 && t.length > 1) {
                            if ((192 & t[1]) != 128) return e.lastNeed = 1, "�";
                            if (e.lastNeed > 2 && t.length > 2 && (192 & t[2]) != 128) return e.lastNeed = 2, "�"
                        }
                    }(this, e, 0);
                return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : void(e.copy(this.lastChar, t, 0, e.length), this.lastNeed -= e.length)
            }

            function l(e, t) {
                if ((e.length - t) % 2 == 0) {
                    var r = e.toString("utf16le", t);
                    if (r) {
                        var n = r.charCodeAt(r.length - 1);
                        if (n >= 55296 && n <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], r.slice(0, -1)
                    }
                    return r
                }
                return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1)
            }

            function c(e) {
                var t = e && e.length ? this.write(e) : "";
                if (this.lastNeed) {
                    var r = this.lastTotal - this.lastNeed;
                    return t + this.lastChar.toString("utf16le", 0, r)
                }
                return t
            }

            function u(e, t) {
                var r = (e.length - t) % 3;
                return 0 === r ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, 1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r))
            }

            function h(e) {
                var t = e && e.length ? this.write(e) : "";
                return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
            }

            function d(e) {
                return e.toString(this.encoding)
            }

            function f(e) {
                return e && e.length ? this.write(e) : ""
            }
            t.s = s, s.prototype.write = function(e) {
                var t, r;
                if (0 === e.length) return "";
                if (this.lastNeed) {
                    if (void 0 === (t = this.fillLast(e))) return "";
                    r = this.lastNeed, this.lastNeed = 0
                } else r = 0;
                return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || ""
            }, s.prototype.end = function(e) {
                var t = e && e.length ? this.write(e) : "";
                return this.lastNeed ? t + "�" : t
            }, s.prototype.text = function(e, t) {
                var r = function(e, t, r) {
                    var n = t.length - 1;
                    if (n < r) return 0;
                    var i = o(t[n]);
                    return i >= 0 ? (i > 0 && (e.lastNeed = i - 1), i) : --n < r || -2 === i ? 0 : (i = o(t[n])) >= 0 ? (i > 0 && (e.lastNeed = i - 2), i) : --n < r || -2 === i ? 0 : (i = o(t[n])) >= 0 ? (i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3), i) : 0
                }(this, e, t);
                if (!this.lastNeed) return e.toString("utf8", t);
                this.lastTotal = r;
                var n = e.length - (r - this.lastNeed);
                return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n)
            }, s.prototype.fillLast = function(e) {
                if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
                e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length
            }
        },
        11950: function(e, t, r) {
            "use strict"; /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
            var n = r(23663),
                i = n.Buffer;

            function s(e, t) {
                for (var r in e) t[r] = e[r]
            }

            function o(e, t, r) {
                return i(e, t, r)
            }
            i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? e.exports = n : (s(n, t), t.Buffer = o), o.prototype = Object.create(i.prototype), s(i, o), o.from = function(e, t, r) {
                if ("number" == typeof e) throw TypeError("Argument must not be a number");
                return i(e, t, r)
            }, o.alloc = function(e, t, r) {
                if ("number" != typeof e) throw TypeError("Argument must be a number");
                var n = i(e);
                return void 0 !== t ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0), n
            }, o.allocUnsafe = function(e) {
                if ("number" != typeof e) throw TypeError("Argument must be a number");
                return i(e)
            }, o.allocUnsafeSlow = function(e) {
                if ("number" != typeof e) throw TypeError("Argument must be a number");
                return n.SlowBuffer(e)
            }
        },
        88445: function(e, t, r) {
            "use strict";

            function n(e) {
                try {
                    if (!r.g.localStorage) return !1
                } catch (e) {
                    return !1
                }
                var t = r.g.localStorage[e];
                return null != t && "true" === String(t).toLowerCase()
            }
            e.exports = function(e, t) {
                if (n("noDeprecation")) return e;
                var r = !1;
                return function() {
                    if (!r) {
                        if (n("throwDeprecation")) throw Error(t);
                        n("traceDeprecation") ? console.trace(t) : console.warn(t), r = !0
                    }
                    return e.apply(this, arguments)
                }
            }
        },
        47935: function(e) {
            "use strict";
            e.exports = function() {
                for (var e = {}, r = 0; r < arguments.length; r++) {
                    var n = arguments[r];
                    for (var i in n) t.call(n, i) && (e[i] = n[i])
                }
                return e
            };
            var t = Object.prototype.hasOwnProperty
        },
        55918: function(e) {
            "use strict";
            e.exports = function(e) {
                e.prototype[Symbol.iterator] = function*() {
                    for (let e = this.head; e; e = e.next) yield e.value
                }
            }
        },
        47604: function(e, t, r) {
            "use strict";

            function n(e) {
                var t = this;
                if (t instanceof n || (t = new n), t.tail = null, t.head = null, t.length = 0, e && "function" == typeof e.forEach) e.forEach(function(e) {
                    t.push(e)
                });
                else if (arguments.length > 0)
                    for (var r = 0, i = arguments.length; r < i; r++) t.push(arguments[r]);
                return t
            }

            function i(e, t, r, n) {
                if (!(this instanceof i)) return new i(e, t, r, n);
                this.list = n, this.value = e, t ? (t.next = this, this.prev = t) : this.prev = null, r ? (r.prev = this, this.next = r) : this.next = null
            }
            e.exports = n, n.Node = i, n.create = n, n.prototype.removeNode = function(e) {
                if (e.list !== this) throw Error("removing node which does not belong to this list");
                var t = e.next,
                    r = e.prev;
                return t && (t.prev = r), r && (r.next = t), e === this.head && (this.head = t), e === this.tail && (this.tail = r), e.list.length--, e.next = null, e.prev = null, e.list = null, t
            }, n.prototype.unshiftNode = function(e) {
                if (e !== this.head) {
                    e.list && e.list.removeNode(e);
                    var t = this.head;
                    e.list = this, e.next = t, t && (t.prev = e), this.head = e, this.tail || (this.tail = e), this.length++
                }
            }, n.prototype.pushNode = function(e) {
                if (e !== this.tail) {
                    e.list && e.list.removeNode(e);
                    var t = this.tail;
                    e.list = this, e.prev = t, t && (t.next = e), this.tail = e, this.head || (this.head = e), this.length++
                }
            }, n.prototype.push = function() {
                for (var e, t = 0, r = arguments.length; t < r; t++) e = arguments[t], this.tail = new i(e, this.tail, null, this), this.head || (this.head = this.tail), this.length++;
                return this.length
            }, n.prototype.unshift = function() {
                for (var e, t = 0, r = arguments.length; t < r; t++) e = arguments[t], this.head = new i(e, null, this.head, this), this.tail || (this.tail = this.head), this.length++;
                return this.length
            }, n.prototype.pop = function() {
                if (this.tail) {
                    var e = this.tail.value;
                    return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, e
                }
            }, n.prototype.shift = function() {
                if (this.head) {
                    var e = this.head.value;
                    return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, e
                }
            }, n.prototype.forEach = function(e, t) {
                t = t || this;
                for (var r = this.head, n = 0; null !== r; n++) e.call(t, r.value, n, this), r = r.next
            }, n.prototype.forEachReverse = function(e, t) {
                t = t || this;
                for (var r = this.tail, n = this.length - 1; null !== r; n--) e.call(t, r.value, n, this), r = r.prev
            }, n.prototype.get = function(e) {
                for (var t = 0, r = this.head; null !== r && t < e; t++) r = r.next;
                if (t === e && null !== r) return r.value
            }, n.prototype.getReverse = function(e) {
                for (var t = 0, r = this.tail; null !== r && t < e; t++) r = r.prev;
                if (t === e && null !== r) return r.value
            }, n.prototype.map = function(e, t) {
                t = t || this;
                for (var r = new n, i = this.head; null !== i;) r.push(e.call(t, i.value, this)), i = i.next;
                return r
            }, n.prototype.mapReverse = function(e, t) {
                t = t || this;
                for (var r = new n, i = this.tail; null !== i;) r.push(e.call(t, i.value, this)), i = i.prev;
                return r
            }, n.prototype.reduce = function(e, t) {
                var r, n = this.head;
                if (arguments.length > 1) r = t;
                else if (this.head) n = this.head.next, r = this.head.value;
                else throw TypeError("Reduce of empty list with no initial value");
                for (var i = 0; null !== n; i++) r = e(r, n.value, i), n = n.next;
                return r
            }, n.prototype.reduceReverse = function(e, t) {
                var r, n = this.tail;
                if (arguments.length > 1) r = t;
                else if (this.tail) n = this.tail.prev, r = this.tail.value;
                else throw TypeError("Reduce of empty list with no initial value");
                for (var i = this.length - 1; null !== n; i--) r = e(r, n.value, i), n = n.prev;
                return r
            }, n.prototype.toArray = function() {
                for (var e = Array(this.length), t = 0, r = this.head; null !== r; t++) e[t] = r.value, r = r.next;
                return e
            }, n.prototype.toArrayReverse = function() {
                for (var e = Array(this.length), t = 0, r = this.tail; null !== r; t++) e[t] = r.value, r = r.prev;
                return e
            }, n.prototype.slice = function(e, t) {
                (t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
                var r = new n;
                if (t < e || t < 0) return r;
                e < 0 && (e = 0), t > this.length && (t = this.length);
                for (var i = 0, s = this.head; null !== s && i < e; i++) s = s.next;
                for (; null !== s && i < t; i++, s = s.next) r.push(s.value);
                return r
            }, n.prototype.sliceReverse = function(e, t) {
                (t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
                var r = new n;
                if (t < e || t < 0) return r;
                e < 0 && (e = 0), t > this.length && (t = this.length);
                for (var i = this.length, s = this.tail; null !== s && i > t; i--) s = s.prev;
                for (; null !== s && i > e; i--, s = s.prev) r.push(s.value);
                return r
            }, n.prototype.splice = function(e, t) {
                for (var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++) n[s - 2] = arguments[s];
                e > this.length && (e = this.length - 1), e < 0 && (e = this.length + e);
                for (var o = 0, a = this.head; null !== a && o < e; o++) a = a.next;
                for (var l = [], o = 0; a && o < t; o++) l.push(a.value), a = this.removeNode(a);
                null === a && (a = this.tail), a !== this.head && a !== this.tail && (a = a.prev);
                for (var o = 0; o < n.length; o++) a = function(e, t, r) {
                    var n = t === e.head ? new i(r, null, t, e) : new i(r, t, t.next, e);
                    return null === n.next && (e.tail = n), null === n.prev && (e.head = n), e.length++, n
                }(this, a, n[o]);
                return l
            }, n.prototype.reverse = function() {
                for (var e = this.head, t = this.tail, r = e; null !== r; r = r.prev) {
                    var n = r.prev;
                    r.prev = r.next, r.next = n
                }
                return this.head = t, this.tail = e, this
            };
            try {
                r(55918)(n)
            } catch (e) {}
        },
        56093: function(e, t, r) {
            "use strict";

            function n(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            r.r(t), r.d(t, {
                _: function() {
                    return n
                },
                _tagged_template_literal: function() {
                    return n
                }
            })
        },
        69227: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __addDisposableResource: function() {
                    return T
                },
                __assign: function() {
                    return s
                },
                __asyncDelegator: function() {
                    return M
                },
                __asyncGenerator: function() {
                    return S
                },
                __asyncValues: function() {
                    return R
                },
                __await: function() {
                    return k
                },
                __awaiter: function() {
                    return p
                },
                __classPrivateFieldGet: function() {
                    return N
                },
                __classPrivateFieldIn: function() {
                    return O
                },
                __classPrivateFieldSet: function() {
                    return L
                },
                __createBinding: function() {
                    return m
                },
                __decorate: function() {
                    return a
                },
                __disposeResources: function() {
                    return j
                },
                __esDecorate: function() {
                    return c
                },
                __exportStar: function() {
                    return y
                },
                __extends: function() {
                    return i
                },
                __generator: function() {
                    return g
                },
                __importDefault: function() {
                    return A
                },
                __importStar: function() {
                    return I
                },
                __makeTemplateObject: function() {
                    return C
                },
                __metadata: function() {
                    return f
                },
                __param: function() {
                    return l
                },
                __propKey: function() {
                    return h
                },
                __read: function() {
                    return b
                },
                __rest: function() {
                    return o
                },
                __runInitializers: function() {
                    return u
                },
                __setFunctionName: function() {
                    return d
                },
                __spread: function() {
                    return _
                },
                __spreadArray: function() {
                    return E
                },
                __spreadArrays: function() {
                    return w
                },
                __values: function() {
                    return v
                }
            });
            var n = function(e, t) {
                return (n = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                })(e, t)
            };

            function i(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function r() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var s = function() {
                return (s = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };

            function o(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) 0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
                return r
            }

            function a(e, t, r, n) {
                var i, s = arguments.length,
                    o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o
            }

            function l(e, t) {
                return function(r, n) {
                    t(r, n, e)
                }
            }

            function c(e, t, r, n, i, s) {
                function o(e) {
                    if (void 0 !== e && "function" != typeof e) throw TypeError("Function expected");
                    return e
                }
                for (var a, l = n.kind, c = "getter" === l ? "get" : "setter" === l ? "set" : "value", u = !t && e ? n.static ? e : e.prototype : null, h = t || (u ? Object.getOwnPropertyDescriptor(u, n.name) : {}), d = !1, f = r.length - 1; f >= 0; f--) {
                    var p = {};
                    for (var g in n) p[g] = "access" === g ? {} : n[g];
                    for (var g in n.access) p.access[g] = n.access[g];
                    p.addInitializer = function(e) {
                        if (d) throw TypeError("Cannot add initializers after decoration has completed");
                        s.push(o(e || null))
                    };
                    var m = (0, r[f])("accessor" === l ? {
                        get: h.get,
                        set: h.set
                    } : h[c], p);
                    if ("accessor" === l) {
                        if (void 0 === m) continue;
                        if (null === m || "object" != typeof m) throw TypeError("Object expected");
                        (a = o(m.get)) && (h.get = a), (a = o(m.set)) && (h.set = a), (a = o(m.init)) && i.unshift(a)
                    } else(a = o(m)) && ("field" === l ? i.unshift(a) : h[c] = a)
                }
                u && Object.defineProperty(u, n.name, h), d = !0
            }

            function u(e, t, r) {
                for (var n = arguments.length > 2, i = 0; i < t.length; i++) r = n ? t[i].call(e, r) : t[i].call(e);
                return n ? r : void 0
            }

            function h(e) {
                return "symbol" == typeof e ? e : "".concat(e)
            }

            function d(e, t, r) {
                return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
                    configurable: !0,
                    value: r ? "".concat(r, " ", t) : t
                })
            }

            function f(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function p(e, t, r, n) {
                return new(r || (r = Promise))(function(i, s) {
                    function o(e) {
                        try {
                            l(n.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(e) {
                        try {
                            l(n.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(o, a)
                    }
                    l((n = n.apply(e, t || [])).next())
                })
            }

            function g(e, t) {
                var r, n, i, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(a) {
                    return function(l) {
                        return function(a) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; s && (s = 0, a[0] && (o = 0)), o;) try {
                                if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                                switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, n = a[1], a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1], i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2], o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                a = t.call(e, o)
                            } catch (e) {
                                a = [6, e], n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, l])
                    }
                }
            }
            var m = Object.create ? function(e, t, r, n) {
                void 0 === n && (n = r);
                var i = Object.getOwnPropertyDescriptor(t, r);
                (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
                    enumerable: !0,
                    get: function() {
                        return t[r]
                    }
                }), Object.defineProperty(e, n, i)
            } : function(e, t, r, n) {
                void 0 === n && (n = r), e[n] = t[r]
            };

            function y(e, t) {
                for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || m(t, e, r)
            }

            function v(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    n = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function b(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var n, i, s = r.call(e),
                    o = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(n = s.next()).done;) o.push(n.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        n && !n.done && (r = s.return) && r.call(s)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return o
            }

            function _() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(b(arguments[t]));
                return e
            }

            function w() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                for (var n = Array(e), i = 0, t = 0; t < r; t++)
                    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, i++) n[i] = s[o];
                return n
            }

            function E(e, t, r) {
                if (r || 2 == arguments.length)
                    for (var n, i = 0, s = t.length; i < s; i++) !n && i in t || (n || (n = Array.prototype.slice.call(t, 0, i)), n[i] = t[i]);
                return e.concat(n || Array.prototype.slice.call(t))
            }

            function k(e) {
                return this instanceof k ? (this.v = e, this) : new k(e)
            }

            function S(e, t, r) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var n, i = r.apply(e, t || []),
                    s = [];
                return n = {}, o("next"), o("throw"), o("return"), n[Symbol.asyncIterator] = function() {
                    return this
                }, n;

                function o(e) {
                    i[e] && (n[e] = function(t) {
                        return new Promise(function(r, n) {
                            s.push([e, t, r, n]) > 1 || a(e, t)
                        })
                    })
                }

                function a(e, t) {
                    try {
                        var r;
                        (r = i[e](t)).value instanceof k ? Promise.resolve(r.value.v).then(l, c) : u(s[0][2], r)
                    } catch (e) {
                        u(s[0][3], e)
                    }
                }

                function l(e) {
                    a("next", e)
                }

                function c(e) {
                    a("throw", e)
                }

                function u(e, t) {
                    e(t), s.shift(), s.length && a(s[0][0], s[0][1])
                }
            }

            function M(e) {
                var t, r;
                return t = {}, n("next"), n("throw", function(e) {
                    throw e
                }), n("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function n(n, i) {
                    t[n] = e[n] ? function(t) {
                        return (r = !r) ? {
                            value: k(e[n](t)),
                            done: !1
                        } : i ? i(t) : t
                    } : i
                }
            }

            function R(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = v(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function n(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise(function(n, i) {
                            ! function(e, t, r, n) {
                                Promise.resolve(n).then(function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }, t)
                            }(n, i, (t = e[r](t)).done, t.value)
                        })
                    }
                }
            }

            function C(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }
            var x = Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            };

            function I(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && m(t, e, r);
                return x(t, e), t
            }

            function A(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function N(e, t, r, n) {
                if ("a" === r && !n) throw TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
            }

            function L(e, t, r, n, i) {
                if ("m" === n) throw TypeError("Private method is not writable");
                if ("a" === n && !i) throw TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r), r
            }

            function O(e, t) {
                if (null === t || "object" != typeof t && "function" != typeof t) throw TypeError("Cannot use 'in' operator on non-object");
                return "function" == typeof e ? t === e : e.has(t)
            }

            function T(e, t, r) {
                if (null != t) {
                    var n;
                    if ("object" != typeof t && "function" != typeof t) throw TypeError("Object expected.");
                    if (r) {
                        if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
                        n = t[Symbol.asyncDispose]
                    }
                    if (void 0 === n) {
                        if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
                        n = t[Symbol.dispose]
                    }
                    if ("function" != typeof n) throw TypeError("Object not disposable.");
                    e.stack.push({
                        value: t,
                        dispose: n,
                        async: r
                    })
                } else r && e.stack.push({
                    async: !0
                });
                return t
            }
            var P = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
                var n = Error(r);
                return n.name = "SuppressedError", n.error = e, n.suppressed = t, n
            };

            function j(e) {
                function t(t) {
                    e.error = e.hasError ? new P(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
                }
                return function r() {
                    for (; e.stack.length;) {
                        var n = e.stack.pop();
                        try {
                            var i = n.dispose && n.dispose.call(n.value);
                            if (n.async) return Promise.resolve(i).then(r, function(e) {
                                return t(e), r()
                            })
                        } catch (e) {
                            t(e)
                        }
                    }
                    if (e.hasError) throw e.error
                }()
            }
            t.default = {
                __extends: i,
                __assign: s,
                __rest: o,
                __decorate: a,
                __param: l,
                __metadata: f,
                __awaiter: p,
                __generator: g,
                __createBinding: m,
                __exportStar: y,
                __values: v,
                __read: b,
                __spread: _,
                __spreadArrays: w,
                __spreadArray: E,
                __await: k,
                __asyncGenerator: S,
                __asyncDelegator: M,
                __asyncValues: R,
                __makeTemplateObject: C,
                __importStar: I,
                __importDefault: A,
                __classPrivateFieldGet: N,
                __classPrivateFieldSet: L,
                __classPrivateFieldIn: O,
                __addDisposableResource: T,
                __disposeResources: j
            }
        },
        1544: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Struct: function() {
                    return c
                },
                StructError: function() {
                    return n
                },
                any: function() {
                    return S
                },
                array: function() {
                    return M
                },
                assert: function() {
                    return u
                },
                assign: function() {
                    return g
                },
                bigint: function() {
                    return R
                },
                boolean: function() {
                    return C
                },
                coerce: function() {
                    return Q
                },
                create: function() {
                    return h
                },
                date: function() {
                    return x
                },
                defaulted: function() {
                    return Y
                },
                define: function() {
                    return m
                },
                deprecated: function() {
                    return y
                },
                dynamic: function() {
                    return v
                },
                empty: function() {
                    return X
                },
                enums: function() {
                    return I
                },
                func: function() {
                    return A
                },
                instance: function() {
                    return N
                },
                integer: function() {
                    return L
                },
                intersection: function() {
                    return O
                },
                is: function() {
                    return f
                },
                lazy: function() {
                    return b
                },
                literal: function() {
                    return T
                },
                map: function() {
                    return P
                },
                mask: function() {
                    return d
                },
                max: function() {
                    return ee
                },
                min: function() {
                    return et
                },
                never: function() {
                    return j
                },
                nonempty: function() {
                    return er
                },
                nullable: function() {
                    return B
                },
                number: function() {
                    return D
                },
                object: function() {
                    return F
                },
                omit: function() {
                    return _
                },
                optional: function() {
                    return U
                },
                partial: function() {
                    return w
                },
                pattern: function() {
                    return en
                },
                pick: function() {
                    return E
                },
                record: function() {
                    return H
                },
                refine: function() {
                    return es
                },
                regexp: function() {
                    return q
                },
                set: function() {
                    return W
                },
                size: function() {
                    return ei
                },
                string: function() {
                    return z
                },
                struct: function() {
                    return k
                },
                trimmed: function() {
                    return K
                },
                tuple: function() {
                    return V
                },
                type: function() {
                    return J
                },
                union: function() {
                    return G
                },
                unknown: function() {
                    return Z
                },
                validate: function() {
                    return p
                }
            });
            class n extends TypeError {
                constructor(e, t) {
                    let r;
                    let {
                        message: n,
                        explanation: i,
                        ...s
                    } = e, {
                        path: o
                    } = e, a = 0 === o.length ? n : "At path: ".concat(o.join("."), " -- ").concat(n);
                    super(null != i ? i : a), null != i && (this.cause = a), Object.assign(this, s), this.name = this.constructor.name, this.failures = () => null != r ? r : r = [e, ...t()]
                }
            }

            function i(e) {
                return "object" == typeof e && null != e
            }

            function s(e) {
                if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
                let t = Object.getPrototypeOf(e);
                return null === t || t === Object.prototype
            }

            function o(e) {
                return "symbol" == typeof e ? e.toString() : "string" == typeof e ? JSON.stringify(e) : "".concat(e)
            }

            function* a(e, t, r, n) {
                var s;
                for (let a of (i(s = e) && "function" == typeof s[Symbol.iterator] || (e = [e]), e)) {
                    let e = function(e, t, r, n) {
                        if (!0 === e) return;
                        !1 === e ? e = {} : "string" == typeof e && (e = {
                            message: e
                        });
                        let {
                            path: i,
                            branch: s
                        } = t, {
                            type: a
                        } = r, {
                            refinement: l,
                            message: c = "Expected a value of type `".concat(a, "`").concat(l ? " with refinement `".concat(l, "`") : "", ", but received: `").concat(o(n), "`")
                        } = e;
                        return {
                            value: n,
                            type: a,
                            refinement: l,
                            key: i[i.length - 1],
                            path: i,
                            branch: s,
                            ...e,
                            message: c
                        }
                    }(a, t, r, n);
                    e && (yield e)
                }
            }

            function* l(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        path: n = [],
                        branch: s = [e],
                        coerce: o = !1,
                        mask: a = !1
                    } = r,
                    c = {
                        path: n,
                        branch: s
                    };
                if (o && (e = t.coercer(e, c), a && "type" !== t.type && i(t.schema) && i(e) && !Array.isArray(e)))
                    for (let r in e) void 0 === t.schema[r] && delete e[r];
                let u = "valid";
                for (let n of t.validator(e, c)) n.explanation = r.message, u = "not_valid", yield [n, void 0];
                for (let [h, d, f] of t.entries(e, c))
                    for (let t of l(d, f, {
                            path: void 0 === h ? n : [...n, h],
                            branch: void 0 === h ? s : [...s, d],
                            coerce: o,
                            mask: a,
                            message: r.message
                        })) t[0] ? (u = null != t[0].refinement ? "not_refined" : "not_valid", yield [t[0], void 0]) : o && (d = t[1], void 0 === h ? e = d : e instanceof Map ? e.set(h, d) : e instanceof Set ? e.add(d) : i(e) && (void 0 !== d || h in e) && (e[h] = d));
                if ("not_valid" !== u)
                    for (let n of t.refiner(e, c)) n.explanation = r.message, u = "not_refined", yield [n, void 0];
                "valid" === u && (yield [void 0, e])
            }
            class c {
                assert(e, t) {
                    return u(e, this, t)
                }
                create(e, t) {
                    return h(e, this, t)
                }
                is(e) {
                    return f(e, this)
                }
                mask(e, t) {
                    return d(e, this, t)
                }
                validate(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return p(e, this, t)
                }
                constructor(e) {
                    let {
                        type: t,
                        schema: r,
                        validator: n,
                        refiner: i,
                        coercer: s = e => e,
                        entries: o = function*() {}
                    } = e;
                    this.type = t, this.schema = r, this.entries = o, this.coercer = s, n ? this.validator = (e, t) => a(n(e, t), t, this, e) : this.validator = () => [], i ? this.refiner = (e, t) => a(i(e, t), t, this, e) : this.refiner = () => []
                }
            }

            function u(e, t, r) {
                let n = p(e, t, {
                    message: r
                });
                if (n[0]) throw n[0]
            }

            function h(e, t, r) {
                let n = p(e, t, {
                    coerce: !0,
                    message: r
                });
                if (!n[0]) return n[1];
                throw n[0]
            }

            function d(e, t, r) {
                let n = p(e, t, {
                    coerce: !0,
                    mask: !0,
                    message: r
                });
                if (!n[0]) return n[1];
                throw n[0]
            }

            function f(e, t) {
                return !p(e, t)[0]
            }

            function p(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = l(e, t, r),
                    s = function(e) {
                        let {
                            done: t,
                            value: r
                        } = e.next();
                        return t ? void 0 : r
                    }(i);
                return s[0] ? [new n(s[0], function*() {
                    for (let e of i) e[0] && (yield e[0])
                }), void 0] : [void 0, s[1]]
            }

            function g() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                let n = "type" === t[0].type,
                    i = Object.assign({}, ...t.map(e => e.schema));
                return n ? J(i) : F(i)
            }

            function m(e, t) {
                return new c({
                    type: e,
                    schema: null,
                    validator: t
                })
            }

            function y(e, t) {
                return new c({ ...e,
                    refiner: (t, r) => void 0 === t || e.refiner(t, r),
                    validator: (r, n) => void 0 === r || (t(r, n), e.validator(r, n))
                })
            }

            function v(e) {
                return new c({
                    type: "dynamic",
                    schema: null,
                    * entries(t, r) {
                        let n = e(t, r);
                        yield* n.entries(t, r)
                    },
                    validator: (t, r) => e(t, r).validator(t, r),
                    coercer: (t, r) => e(t, r).coercer(t, r),
                    refiner: (t, r) => e(t, r).refiner(t, r)
                })
            }

            function b(e) {
                let t;
                return new c({
                    type: "lazy",
                    schema: null,
                    * entries(r, n) {
                        null != t || (t = e()), yield* t.entries(r, n)
                    },
                    validator: (r, n) => (null != t || (t = e()), t.validator(r, n)),
                    coercer: (r, n) => (null != t || (t = e()), t.coercer(r, n)),
                    refiner: (r, n) => (null != t || (t = e()), t.refiner(r, n))
                })
            }

            function _(e, t) {
                let {
                    schema: r
                } = e, n = { ...r
                };
                for (let e of t) delete n[e];
                return "type" === e.type ? J(n) : F(n)
            }

            function w(e) {
                let t = e instanceof c ? { ...e.schema
                } : { ...e
                };
                for (let e in t) t[e] = U(t[e]);
                return F(t)
            }

            function E(e, t) {
                let {
                    schema: r
                } = e, n = {};
                for (let e of t) n[e] = r[e];
                return F(n)
            }

            function k(e, t) {
                return console.warn("superstruct@0.11 - The `struct` helper has been renamed to `define`."), m(e, t)
            }

            function S() {
                return m("any", () => !0)
            }

            function M(e) {
                return new c({
                    type: "array",
                    schema: e,
                    * entries(t) {
                        if (e && Array.isArray(t))
                            for (let [r, n] of t.entries()) yield [r, n, e]
                    },
                    coercer: e => Array.isArray(e) ? e.slice() : e,
                    validator: e => Array.isArray(e) || "Expected an array value, but received: ".concat(o(e))
                })
            }

            function R() {
                return m("bigint", e => "bigint" == typeof e)
            }

            function C() {
                return m("boolean", e => "boolean" == typeof e)
            }

            function x() {
                return m("date", e => e instanceof Date && !isNaN(e.getTime()) || "Expected a valid `Date` object, but received: ".concat(o(e)))
            }

            function I(e) {
                let t = {},
                    r = e.map(e => o(e)).join();
                for (let r of e) t[r] = r;
                return new c({
                    type: "enums",
                    schema: t,
                    validator: t => e.includes(t) || "Expected one of `".concat(r, "`, but received: ").concat(o(t))
                })
            }

            function A() {
                return m("func", e => "function" == typeof e || "Expected a function, but received: ".concat(o(e)))
            }

            function N(e) {
                return m("instance", t => t instanceof e || "Expected a `".concat(e.name, "` instance, but received: ").concat(o(t)))
            }

            function L() {
                return m("integer", e => "number" == typeof e && !isNaN(e) && Number.isInteger(e) || "Expected an integer, but received: ".concat(o(e)))
            }

            function O(e) {
                return new c({
                    type: "intersection",
                    schema: null,
                    * entries(t, r) {
                        for (let n of e) yield* n.entries(t, r)
                    },
                    * validator(t, r) {
                        for (let n of e) yield* n.validator(t, r)
                    },
                    * refiner(t, r) {
                        for (let n of e) yield* n.refiner(t, r)
                    }
                })
            }

            function T(e) {
                let t = o(e),
                    r = typeof e;
                return new c({
                    type: "literal",
                    schema: "string" === r || "number" === r || "boolean" === r ? e : null,
                    validator: r => r === e || "Expected the literal `".concat(t, "`, but received: ").concat(o(r))
                })
            }

            function P(e, t) {
                return new c({
                    type: "map",
                    schema: null,
                    * entries(r) {
                        if (e && t && r instanceof Map)
                            for (let [n, i] of r.entries()) yield [n, n, e], yield [n, i, t]
                    },
                    coercer: e => e instanceof Map ? new Map(e) : e,
                    validator: e => e instanceof Map || "Expected a `Map` object, but received: ".concat(o(e))
                })
            }

            function j() {
                return m("never", () => !1)
            }

            function B(e) {
                return new c({ ...e,
                    validator: (t, r) => null === t || e.validator(t, r),
                    refiner: (t, r) => null === t || e.refiner(t, r)
                })
            }

            function D() {
                return m("number", e => "number" == typeof e && !isNaN(e) || "Expected a number, but received: ".concat(o(e)))
            }

            function F(e) {
                let t = e ? Object.keys(e) : [],
                    r = j();
                return new c({
                    type: "object",
                    schema: e || null,
                    * entries(n) {
                        if (e && i(n)) {
                            let i = new Set(Object.keys(n));
                            for (let r of t) i.delete(r), yield [r, n[r], e[r]];
                            for (let e of i) yield [e, n[e], r]
                        }
                    },
                    validator: e => i(e) || "Expected an object, but received: ".concat(o(e)),
                    coercer: e => i(e) ? { ...e
                    } : e
                })
            }

            function U(e) {
                return new c({ ...e,
                    validator: (t, r) => void 0 === t || e.validator(t, r),
                    refiner: (t, r) => void 0 === t || e.refiner(t, r)
                })
            }

            function H(e, t) {
                return new c({
                    type: "record",
                    schema: null,
                    * entries(r) {
                        if (i(r))
                            for (let n in r) {
                                let i = r[n];
                                yield [n, n, e], yield [n, i, t]
                            }
                    },
                    validator: e => i(e) || "Expected an object, but received: ".concat(o(e))
                })
            }

            function q() {
                return m("regexp", e => e instanceof RegExp)
            }

            function W(e) {
                return new c({
                    type: "set",
                    schema: null,
                    * entries(t) {
                        if (e && t instanceof Set)
                            for (let r of t) yield [r, r, e]
                    },
                    coercer: e => e instanceof Set ? new Set(e) : e,
                    validator: e => e instanceof Set || "Expected a `Set` object, but received: ".concat(o(e))
                })
            }

            function z() {
                return m("string", e => "string" == typeof e || "Expected a string, but received: ".concat(o(e)))
            }

            function V(e) {
                let t = j();
                return new c({
                    type: "tuple",
                    schema: null,
                    * entries(r) {
                        if (Array.isArray(r)) {
                            let n = Math.max(e.length, r.length);
                            for (let i = 0; i < n; i++) yield [i, r[i], e[i] || t]
                        }
                    },
                    validator: e => Array.isArray(e) || "Expected an array, but received: ".concat(o(e))
                })
            }

            function J(e) {
                let t = Object.keys(e);
                return new c({
                    type: "type",
                    schema: e,
                    * entries(r) {
                        if (i(r))
                            for (let n of t) yield [n, r[n], e[n]]
                    },
                    validator: e => i(e) || "Expected an object, but received: ".concat(o(e)),
                    coercer: e => i(e) ? { ...e
                    } : e
                })
            }

            function G(e) {
                let t = e.map(e => e.type).join(" | ");
                return new c({
                    type: "union",
                    schema: null,
                    coercer(t) {
                        for (let r of e) {
                            let [e, n] = r.validate(t, {
                                coerce: !0
                            });
                            if (!e) return n
                        }
                        return t
                    },
                    validator(r, n) {
                        let i = [];
                        for (let t of e) {
                            let [...e] = l(r, t, n), [s] = e;
                            if (!s[0]) return [];
                            for (let [t] of e) t && i.push(t)
                        }
                        return ["Expected the value to satisfy a union of `".concat(t, "`, but received: ").concat(o(r)), ...i]
                    }
                })
            }

            function Z() {
                return m("unknown", () => !0)
            }

            function Q(e, t, r) {
                return new c({ ...e,
                    coercer: (n, i) => f(n, t) ? e.coercer(r(n, i), i) : e.coercer(n, i)
                })
            }

            function Y(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return Q(e, Z(), e => {
                    let n = "function" == typeof t ? t() : t;
                    if (void 0 === e) return n;
                    if (!r.strict && s(e) && s(n)) {
                        let t = { ...e
                            },
                            r = !1;
                        for (let e in n) void 0 === t[e] && (t[e] = n[e], r = !0);
                        if (r) return t
                    }
                    return e
                })
            }

            function K(e) {
                return Q(e, z(), e => e.trim())
            }

            function X(e) {
                return es(e, "empty", t => {
                    let r = $(t);
                    return 0 === r || "Expected an empty ".concat(e.type, " but received one with a size of `").concat(r, "`")
                })
            }

            function $(e) {
                return e instanceof Map || e instanceof Set ? e.size : e.length
            }

            function ee(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        exclusive: n
                    } = r;
                return es(e, "max", r => n ? r < t : r <= t || "Expected a ".concat(e.type, " less than ").concat(n ? "" : "or equal to ").concat(t, " but received `").concat(r, "`"))
            }

            function et(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        exclusive: n
                    } = r;
                return es(e, "min", r => n ? r > t : r >= t || "Expected a ".concat(e.type, " greater than ").concat(n ? "" : "or equal to ").concat(t, " but received `").concat(r, "`"))
            }

            function er(e) {
                return es(e, "nonempty", t => $(t) > 0 || "Expected a nonempty ".concat(e.type, " but received an empty one"))
            }

            function en(e, t) {
                return es(e, "pattern", r => t.test(r) || "Expected a ".concat(e.type, " matching `/").concat(t.source, '/` but received "').concat(r, '"'))
            }

            function ei(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
                    n = "Expected a ".concat(e.type),
                    i = t === r ? "of `".concat(t, "`") : "between `".concat(t, "` and `").concat(r, "`");
                return es(e, "size", e => {
                    if ("number" == typeof e || e instanceof Date) return t <= e && e <= r || "".concat(n, " ").concat(i, " but received `").concat(e, "`");
                    if (e instanceof Map || e instanceof Set) {
                        let {
                            size: s
                        } = e;
                        return t <= s && s <= r || "".concat(n, " with a size ").concat(i, " but received one with a size of `").concat(s, "`")
                    } {
                        let {
                            length: s
                        } = e;
                        return t <= s && s <= r || "".concat(n, " with a length ").concat(i, " but received one with a length of `").concat(s, "`")
                    }
                })
            }

            function es(e, t, r) {
                return new c({ ...e,
                    * refiner(n, i) {
                        for (let s of (yield* e.refiner(n, i), a(r(n, i), i, e, n))) yield { ...s,
                            refinement: t
                        }
                    }
                })
            }
        }
    }
]);