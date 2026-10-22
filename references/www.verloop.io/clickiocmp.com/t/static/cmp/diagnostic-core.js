// built: 06-05-2026 11:07:27 BST
! function() {
    let e = null;
    window.clickioDiagnostic = window.clickioDiagnostic || {};
    let o = window.clickioDiagnostic;
    (function() {}).bind();
    const n = "ga_before_consent",
        t = "ads_before_consent",
        i = new URLSearchParams(window.location.search),
        c = i.has("clickio_cmp_diag"),
        d = !i.has("clickio_force_diag");
    let r = [];

    function s(e) {
        return [...new Set((e || []).filter(Boolean))]
    }

    function a(e) {
        return e && "string" == typeof e ? s(e.match(/\b(?:GTM-[A-Z0-9-]+|G-[A-Z0-9-]+|AW-[A-Z0-9-]+)\b/g) || []) : []
    }

    function g(e, o, n = {}) {
        return function(e, o = {}) {
            return !(!e || !e.o || (!o.t || !e.i.includes(o.t)) && !(o.u && e.l.length > 0) && (!(o.p && e.m.length > 0) || o.t && !e.m.includes(o.t)))
        }(o, n) ? Object.assign({}, e, {
            G: !0,
            delivery: "gtg",
            _: n.t || null
        }) : e
    }

    function u(e, o) {
        if ("number" == typeof e && "number" == typeof o) return e - o;
        const n = e => {
                if ("string" == typeof e && e.includes("_gtm_")) {
                    const [o, n] = e.split("_gtm_");
                    return {
                        T: parseInt(o, 10),
                        message: parseInt(n, 10)
                    }
                }
                return {
                    T: "number" == typeof e ? e : parseInt(e, 10),
                    message: -1
                }
            },
            t = n(e),
            i = n(o);
        return t.T !== i.T ? t.T - i.T : t.message - i.message
    }

    function f(e, o, n = null, t = {}) {
        const i = !(!n || !n.G);
        return Object.assign({
            type: e,
            message: o,
            G: i,
            delivery: i ? "gtg" : null,
            _: n && n._ ? n._ : null
        }, t)
    }
    o.addResultsListener = function(e) {
        r.push(e)
    }, (c || Math.random() < .3) && function() {
        try {
            let i, c, l, p = !1,
                w = !1;
            const m = () => {
                    p || (p = !0, function() {
                        const i = function() {
                                const e = [],
                                    o = [],
                                    i = function() {
                                        const e = [],
                                            o = window.google_tags_first_party;
                                        Array.isArray(o) && o.forEach((o => {
                                            "string" == typeof o && e.push(...a(o))
                                        }));
                                        const n = document.getElementsByTagName("script");
                                        for (let o = 0; o < n.length; o++) {
                                            const t = n[o].textContent || "";
                                            t.includes("google_tags_first_party") && e.push(...a(t))
                                        }
                                        const t = [],
                                            i = window.google_tag_data && window.google_tag_data.tidr && window.google_tag_data.tidr.injectedFirstPartyContainers;
                                        i && "object" == typeof i && Object.keys(i).forEach((e => {
                                            i[e] && t.push(e)
                                        }));
                                        const c = function() {
                                                const e = [],
                                                    o = window.location.origin,
                                                    n = document.getElementsByTagName("script");
                                                for (let t = 0; t < n.length; t++) {
                                                    const i = n[t].src;
                                                    if (i) try {
                                                        const n = new URL(i, window.location.href);
                                                        n.origin === o && e.push(n.toString())
                                                    } catch (e) {}
                                                }
                                                if (window.performance && window.performance.getEntriesByType) {
                                                    const n = window.performance.getEntriesByType("resource");
                                                    for (let t = 0; t < n.length; t++) {
                                                        const i = n[t];
                                                        if (i && i.name) try {
                                                            const n = new URL(i.name, window.location.href);
                                                            n.origin !== o || i.initiatorType && "script" !== i.initiatorType || e.push(n.toString())
                                                        } catch (e) {}
                                                    }
                                                }
                                                return s(e)
                                            }(),
                                            d = function() {
                                                const e = [];
                                                if (!window.google_tag_manager) return e;
                                                for (const o in window.google_tag_manager) o && (o.startsWith("GTM-") || o.startsWith("G-") || o.startsWith("AW-")) && e.push(o);
                                                return s(e)
                                            }(),
                                            r = s([...e, ...t]),
                                            g = d.filter((e => r.includes(e))),
                                            u = r.filter((e => e.startsWith("GTM-"))),
                                            f = r.filter((e => !e.startsWith("GTM-"))),
                                            l = [];
                                        return e.length > 0 && l.push("google_tags_first_party queue found"), t.length > 0 && l.push("google_tag_data injected first-party containers found"), g.length > 0 && l.push("active Google tag IDs match GTG first-party IDs"), c.length > 0 && r.length > 0 && l.push("same-origin resources loaded alongside GTG identifiers"), {
                                            o: r.length > 0,
                                            delivery: r.length > 0 ? "gtg" : null,
                                            i: r,
                                            M: s(e),
                                            S: s(t),
                                            A: s(g),
                                            I: d,
                                            l: s(u),
                                            m: s(f),
                                            C: c,
                                            reasons: l,
                                            $: "https://docs.clickio.com/link/460"
                                        }
                                    }(),
                                    c = function(e) {
                                        const o = [];
                                        return window.dataLayer ? (window.dataLayer.forEach(((n, t) => {
                                            if ("gtm.js" === n.event) {
                                                if (o.push(g({
                                                        type: "gtm",
                                                        index: t,
                                                        description: "Google Tag Manager JS loaded"
                                                    }, e, {
                                                        u: !0
                                                    })), window.google_tag_manager)
                                                    for (const n in window.google_tag_manager) n.startsWith("GTM-") ? o.push(g({
                                                        type: "gtm",
                                                        index: t + "_container",
                                                        description: `GTM: Google Tag Manager initialization for ${n}`
                                                    }, e, {
                                                        t: n,
                                                        u: !0
                                                    })) : n.startsWith("G-") ? o.push(g({
                                                        type: "gtm",
                                                        index: t + "_container",
                                                        description: `GTM: Google Analytics initialization for ${n}`
                                                    }, e, {
                                                        t: n,
                                                        u: !0,
                                                        p: !0
                                                    })) : n.startsWith("AW-") && o.push(g({
                                                        type: "gtm",
                                                        index: t + "_container",
                                                        description: `GTM: Google Ads initialization for ${n}`
                                                    }, e, {
                                                        t: n,
                                                        u: !0,
                                                        p: !0
                                                    }));
                                                if (window.google_tag_manager && window.google_tag_manager.mb && window.google_tag_manager.mb.messages) try {
                                                    window.google_tag_manager.mb.messages.forEach(((n, i) => {
                                                        if (n.message) {
                                                            const c = n.message;
                                                            "consent" === c[0] && "default" === c[1] ? o.push(g({
                                                                type: "consent",
                                                                command: "default",
                                                                index: t + "_gtm_" + i,
                                                                description: "GTM: Consent Mode default command"
                                                            }, e, {
                                                                u: !0
                                                            })) : "consent" === c[0] && "update" === c[1] ? o.push(g({
                                                                type: "consent",
                                                                command: "update",
                                                                index: t + "_gtm_" + i,
                                                                description: "GTM: Consent Mode update command"
                                                            }, e, {
                                                                u: !0
                                                            })) : "config" === c[0] ? c[1] && c[1].startsWith("G-") ? o.push(g({
                                                                type: "ga",
                                                                index: t + "_gtm_" + i,
                                                                description: `GTM: GA configuration for ${c[1]}`
                                                            }, e, {
                                                                t: c[1],
                                                                u: !0,
                                                                p: !0
                                                            })) : c[1] && c[1].startsWith("AW-") ? o.push(g({
                                                                type: "ads",
                                                                index: t + "_gtm_" + i,
                                                                description: `GTM: Ads configuration for ${c[1]}`
                                                            }, e, {
                                                                t: c[1],
                                                                u: !0,
                                                                p: !0
                                                            })) : o.push(g({
                                                                type: "gtm",
                                                                index: t + "_gtm_" + i,
                                                                description: `GTM: Configuration for ${c[1]}`
                                                            }, e, {
                                                                u: !0
                                                            })) : "event" === c[0] && o.push(g({
                                                                type: "gtm",
                                                                index: t + "_gtm_" + i,
                                                                description: `GTM: Event "${c[1]}" triggered`
                                                            }, e, {
                                                                u: !0
                                                            }))
                                                        }
                                                    }))
                                                } catch (e) {}
                                            }
                                            "gtm.dom" === n.event && o.push(g({
                                                type: "gtag-trigger",
                                                index: t,
                                                description: "GTAG: DOM Ready"
                                            }, e, {
                                                u: !0
                                            })), "gtm.load" === n.event && o.push(g({
                                                type: "gtag-trigger",
                                                index: t,
                                                description: "GTAG: Window Loaded"
                                            }, e, {
                                                u: !0
                                            })), "js" === n[0] && n[1] instanceof Date && o.push(g({
                                                type: "gtag",
                                                index: t,
                                                description: "GTAG: Google Analytics JS initialization"
                                            }, e, {
                                                p: e && e.m.length > 0
                                            })), "config" === n[0] && "string" == typeof n[1] && (n[1].startsWith("G-") || n[1].startsWith("GA-")) && o.push(g({
                                                type: "ga",
                                                index: t,
                                                description: `GTAG: Google Analytics configuration for ${n[1]}`
                                            }, e, {
                                                t: n[1],
                                                p: !0
                                            })), "config" === n[0] && "string" == typeof n[1] && n[1].startsWith("AW-") && o.push(g({
                                                type: "ads",
                                                index: t,
                                                description: `GTAG: Google Ads configuration for ${n[1]}`
                                            }, e, {
                                                t: n[1],
                                                p: !0
                                            })), "consent" === n[0] && o.push(g({
                                                type: "consent",
                                                command: n[1],
                                                index: t,
                                                description: `GTAG: Consent Mode ${n[1]} command`
                                            }, e, {
                                                p: e && e.m.length > 0
                                            })), "clickio_consent_update" === n.event && o.push({
                                                type: "cmp",
                                                index: t,
                                                description: "CMP: Clickio Consent Update"
                                            })
                                        })), o.sort(((e, o) => u(e.index, o.index)))) : o
                                    }(i),
                                    d = function() {
                                        const e = ["ga.js", "analytics.js", "conversion.js"],
                                            o = "/collect?v=1",
                                            n = [],
                                            t = e => {
                                                e && !n.includes(e) && n.push(e)
                                            },
                                            i = document.getElementsByTagName("script");
                                        for (let n = 0; n < i.length; n++) {
                                            const c = i[n].src;
                                            c && (e.forEach((e => {
                                                c.includes(e) && t(e)
                                            })), c.includes(o) && t(o))
                                        }
                                        if (window.performance && window.performance.getEntriesByType) {
                                            const n = window.performance.getEntriesByType("resource");
                                            for (let i = 0; i < n.length; i++) {
                                                const c = n[i].name;
                                                c && (c.includes(o) && t(o), e.forEach((e => {
                                                    c.includes(e) && t(e)
                                                })))
                                            }
                                        }
                                        return {
                                            o: n.length > 0,
                                            matches: n
                                        }
                                    }();
                                if (d.o) {
                                    const e = d.matches.join(", ");
                                    o.push(f("legacy_tag_detected", e ? `Legacy tag detected: ${e}` : "Legacy tag detected", null, {
                                        h: d.matches
                                    }))
                                }
                                const r = c.find((e => "gtm" === e.type)),
                                    l = c.find((e => "ga" === e.type)),
                                    p = c.find((e => "ads" === e.type)),
                                    w = c.find((e => "consent" === e.type && "default" === e.command));
                                let m = !1,
                                    G = null;
                                if (window.google_tag_manager && window.google_tag_manager.mb && window.google_tag_manager.mb.messages) try {
                                    window.google_tag_manager.mb.messages.forEach(((e, o) => {
                                        if (e.message) {
                                            const o = e.message;
                                            "consent" === o[0] && "default" === o[1] && (m = !0)
                                        }
                                    }))
                                } catch (e) {}
                                m && (G = c.find((e => "consent" === e.type && "default" === e.command && e.description && e.description.includes("GTM:")))), (r && !w && !m || !r && !w) && o.push(f("missing_default_consent", "Consent Mode default configuration is missing", r || l || p)), r && w && !m && u(r.index, w.index) < 0 && o.push(f("gtm_before_consent", "GTM loaded before Consent Mode configuration", r));
                                const y = c.find((e => "consent" === e.type && "update" === e.command));
                                return y && w && u(y.index, w.index) < 0 && o.push(f("update_before_default", "Consent Mode update called before default configuration", y)), l && (w && u(l.index, w.index) < 0 || m && G && u(l.index, G.index) < 0 ? e.push(f(n, "Google Analytics loaded before Consent Mode configuration", l)) : w || m || !y ? w || m || y || e.push(f(n, "Google Analytics loaded before Consent Mode configuration", l)) : u(l.index, y.index) < 0 && e.push(f(n, "Google Analytics loaded before Consent Mode configuration", l))), p && (w && u(p.index, w.index) < 0 || m && G && u(p.index, G.index) < 0 ? e.push(f(t, "Google Ads loaded before Consent Mode configuration", p)) : w || m || !y ? w || m || y || e.push(f(t, "Google Ads loaded before Consent Mode configuration", p)) : u(p.index, y.index) < 0 && e.push(f(t, "Google Ads loaded before Consent Mode configuration", p))), {
                                    errors: e,
                                    warnings: o,
                                    events: c,
                                    gtgContext: i
                                }
                            }(),
                            c = o.results;
                        c && JSON.stringify(c.errors) === JSON.stringify(i.errors) && JSON.stringify(c.warnings) === JSON.stringify(i.warnings) && JSON.stringify(c.events) === JSON.stringify(i.events) && JSON.stringify(c.gtgContext) === JSON.stringify(i.gtgContext) || (o.results = i, o.isComplete = !0, r && r.forEach((e => e(i))), function(o, n) {
                            if (!window.google_tag_data) return;
                            const t = new URL(window.location.href);
                            t.searchParams.delete("clickio_cmp_diag"), t.searchParams.delete("clickio_force_diag");
                            const i = t.toString();
                            let c = `//up.clickiocdn.com/utr/diag/?sid=${e||"0"}&status=${o}&url=${encodeURIComponent(i)}`;
                            if (n && (n.errors.length > 0 || n.warnings.length > 0)) {
                                const e = [...n.errors.map((e => e.type)), ...n.warnings.map((e => e.type))].join(",");
                                c += `&errors=${encodeURIComponent(e)}`
                            }
                            n && n.gtgContext && n.gtgContext.o && (c += "&gtg=1"), (new Image).src = c
                        }(i.errors.length > 0 || i.warnings.length > 0 ? "error" : "ok", i))
                    }())
                },
                G = () => {
                    i && clearTimeout(i), i = setTimeout((() => {
                        p || w || (y.disconnect(), l && clearTimeout(l), m())
                    }), 1e3)
                },
                y = new MutationObserver(G),
                _ = function() {
                    l = setTimeout((() => {
                        p || (y.disconnect(), i && clearTimeout(i), m())
                    }), 1e4), y.observe(document.documentElement, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0
                    }), G()
                };
            if (d)
                if (window.__lxG__consent__) {
                    const o = o => {
                        e = window.__lxG__consent__.sid, -1 === o && d ? (w = !0, i && clearTimeout(i), c && clearTimeout(c), l && clearTimeout(l)) : 1 !== o || p ? null !== o && d || w || p || (c = setTimeout((() => {
                            p || _()
                        }), 5e3)) : (w = !1, _())
                    };
                    window.__lxG__consent__.getState && 1 === window.__lxG__consent__.getState() ? o(window.__lxG__consent__.getState()) : document.documentElement.addEventListener("clickioConsentEvent", (function(e) {
                        o(e.detail.state)
                    }), !1)
                } else window._tcfapi ? window.__tcfapi("addEventListener", 2, (function(e, o) {
                    o && _()
                })) : _();
            else _()
        } catch (e) {}
    }()
}();