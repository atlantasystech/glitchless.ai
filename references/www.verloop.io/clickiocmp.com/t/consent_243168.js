/* geo: NonEu */

(window.__lxG__ = window.__lxG__ || {}).geo = 'IN';
(window.__lxG__ = window.__lxG__ || {}).ray = '0';

/* src: 2026-10-02 11:16:20 BST */
/* gen: 2026-10-16 14:16:05 BST */
;
(function() {
    (function() {
        function O() {
            return {
                state: function() {
                    return null
                },
                I: function() {
                    return 2
                },
                Z: function() {
                    return 1
                }
            }
        }

        function Ha(a, c, b, h) {
            c || (c = function() {});
            h || (h = function() {});
            b = b || B;
            var n = da("script", b);
            n.setAttribute("type", "text/javascript");
            n.setAttribute("src", a);
            n.setAttribute("async", "async");
            z(n) && (Ia ? n.onreadystatechange = function() {
                "loaded" == this.readyState || "complete" == this.readyState ? L(c) : L(h)
            } : (n.onload = function(u) {
                    var g = this;
                    L(function() {
                        c.call(g, u);
                        g.parentNode && g.parentNode.removeChild(g)
                    })
                },
                n.onerror = function(u) {
                    var g = this;
                    L(function() {
                        h.call(g, u);
                        g.parentNode && g.parentNode.removeChild(g)
                    })
                }), xa(b).appendChild(n))
        }

        function S() {
            return d.__lxG__
        }

        function Ja() {
            var a = !1;
            if (null !== la) return la;
            if (d === d.top) a = d.location;
            else try {
                a = d.top.location.href ? d.top.location : !1
            } catch (c) {
                H(d.__lxG__.pageUrl) ? a = ma(d.__lxG__.pageUrl) : B.referrer ? a = ma(B.referrer) : a = d.location
            }
            return a ? la = {
                href: a.href,
                host: a.host,
                hostname: a.hostname,
                origin: a.origin,
                pathname: a.pathname,
                port: a.port,
                protocol: a.protocol,
                hash: a.hash,
                search: a.search
            } : !1
        }

        function ma(a) {
            var c = da("a");
            c.href = a;
            return c
        }

        function na(a) {
            if ((a || 0 === a) && "function" == typeof ea[a]) {
                var c = ea[a];
                delete ea[a];
                c()
            }
        }

        function L(a, c) {
            null === oa && (oa = z(d.MessageChannel));
            null === pa && (pa = z(d.MutationObserver));
            null === qa && (qa = "function" === typeof d.queueMicrotask);
            null === ra && (ra = "function" === typeof d.Promise && "function" === typeof d.Promise.resolve) && (ya = d.Promise.resolve());
            null === fa && (fa = "function" === typeof d.requestAnimationFrame);
            null === sa && (sa = "function" === typeof d.requestIdleCallback);
            c = z(c) ? c : {};
            var b = !1,
                h = !1,
                n = !1;
            fa || !0 !== c.L || (c.L = !1, c.C = !0);
            a = ea.push(a) - 1;
            var u = function(g) {
                return function(x) {
                    na(g, x)
                }
            }(a);
            sa && !0 === c.v ? d.requestIdleCallback(function() {
                u("requestIdleCallback")
            }) : !0 === c.L ? d.requestAnimationFrame(function() {
                u("requestAnimationFrame")
            }) : c.C ? setTimeout(function() {
                u("setTimeout")
            }, isNaN(c.C) ? 0 : 1 * c.C) : (!0 !== c.v && (qa ? (n = !0, d.queueMicrotask(function() {
                    u("queueMicrotask")
                })) : ra ? (h = !0, ya.then(function() {
                    u("promiseResolve")
                }).catch(function(g) {
                    throw g;
                })) : pa && (b = Ka(a))),
                b || h || n || (oa ? La(a) : fa ? d.requestAnimationFrame(function() {
                    u("requestAnimationFrame")
                }) : setTimeout(function() {
                    u("setTimeout")
                }, 0)))
        }

        function Ka(a) {
            var c = null;
            if (W.length)
                for (var b = 0, h = W.length; b < h; b++)
                    if (W.hasOwnProperty(b) && "" === W[b].data) {
                        c = W[b];
                        break
                    }
            if (!c)
                if (100 > W.length) c = {
                    data: "",
                    node: B.createTextNode("")
                }, W.push(c), (new MutationObserver(function() {
                    na(c.data, "MutationObserver");
                    c.data = ""
                })).observe(c.node, {
                    characterData: !0
                });
                else return !1;
            c.data = a;
            c.node.data = a;
            return !0
        }

        function La(a) {
            ha || (ha =
                new MessageChannel, ha.port2.onmessage = function(c) {
                    na(c.data, "MessageChannel")
                });
            ha.port1.postMessage(a)
        }

        function ia() {
            var a = null;
            ia = function() {
                if (null === a) {
                    a = !1;
                    try {
                        var c = Object.defineProperty({}, "passive", {
                            get: function() {
                                a = !0
                            }
                        });
                        d.addEventListener("testPassive", null, c);
                        d.removeEventListener("testPassive", null, c)
                    } catch (b) {}
                }
                return a
            };
            return ia()
        }

        function ja(a) {
            var c = {};
            ja = function(b) {
                if (!z(c[b])) {
                    b = b.split("+").join(" ");
                    for (var h = {}, n = ("?" === b[0] || "#" === b[0] ? b.substr(1) : b).split("&"), u = 0; u < n.length; u++) {
                        var g =
                            n[u].split("="),
                            x = g[0];
                        g = g[1] || "";
                        try {
                            x = decodeURIComponent(x)
                        } catch (I) {
                            x = unescape(x)
                        }
                        try {
                            g = decodeURIComponent(g)
                        } catch (I) {
                            g = unescape(g)
                        }
                        h[x] = g
                    }
                    c[b] = h
                }
                return c[b]
            };
            return ja(a)
        }

        function aa() {
            "undefined" !== typeof performance && performance.now && performance.timeOrigin && (aa = function() {
                return performance.timeOrigin + performance.now()
            });
            "undefined" !== typeof performance && performance.now && (aa = function() {
                var a;
                return ((null == (a = window.performance.timing) ? void 0 : a.navigationStart) || Date.now()) + performance.now()
            });
            aa = function() {
                return Date.now ? Date.now() : (new Date).getTime()
            };
            return aa()
        }

        function ka(a) {
            a = parseInt(a, 10);
            return isNaN(a) ? 0 : a
        }

        function xa(a) {
            a = a || B;
            var c = a.documentElement;
            var b = a || B;
            if (b = b.getElementsByTagName("head")[0]) return b;
            for (b = c.firstChild; b && "#text" == b.nodeName.toLowerCase();) b = b.nextSibling;
            if (b && "#text" != b.nodeName.toLowerCase()) return b;
            a = da("head", a);
            c.appendChild(a);
            return a
        }

        function z(a) {
            return "undefined" != typeof a
        }

        function H(a, c) {
            c = z(c) ? c : !1;
            return z(a) ? a : c
        }

        function za(a, c) {
            y(c,
                function(b) {
                    a[b] = c[b]
                });
            return a
        }

        function y(a, c) {
            for (var b in a)
                if (a.hasOwnProperty(b) && "length" !== b && !1 === c.call(a[b], b, a[b])) break
        }

        function Ma(a, c) {
            for (var b = 0; b < a.length && !1 !== c.call(a[b], b, a[b]); b++);
        }

        function Aa(a, c, b, h) {
            h = h || !1;
            if (a) {
                "[object NodeList]" == Object.prototype.toString.call(a) || M(a) || (a = [a]);
                var n = c.split(" ");
                y(a, function(u) {
                    a[u] && y(n, function(g) {
                        n[g] && (a[u].addEventListener ? a[u].addEventListener(n[g], b, h) : a[u].attachEvent && a[u].attachEvent("on" + n[g], b))
                    })
                })
            }
        }

        function Ba(a, c, b) {
            if (a) {
                "[object NodeList]" !=
                Object.prototype.toString.call(a) && (a = [a]);
                var h = c.split(" ");
                c = h.length;
                var n;
                for (n = 0; n < c; n++) y(a, function() {
                    this.detachEvent ? this.detachEvent("on" + h[n], b) : (this.removeEventListener(h[n], b, !0), this.removeEventListener(h[n], b))
                })
            }
        }

        function da(a, c) {
            c = c || B;
            return c.createElement(a)
        }

        function Ca(a, c, b) {
            b = b || B;
            c = c || Na;
            var h = da("script", b);
            h.type = "text/javascript";
            if (z(a.src) && a.src) h.src = a.src, h.className = a.className;
            else {
                var n = a.text || a.textContent || a.innerHTML || "";
                h.className = a.className;
                h.appendChild(b.createTextNode(n))
            }!0 ===
                c ? (a.parentNode.insertBefore(h, a.nextSibling), a.parentNode && a.parentNode.removeChild(a)) : c.appendChild(h)
        }
        var B = document,
            d = window,
            Da = B.body,
            Ea = B.documentElement,
            Na = xa(),
            T = ("" + (navigator.userAgent || navigator.vendor || d.opera)).toLowerCase();
        T.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/);
        var P = /opera/.test(T),
            Ia = /msie/.test(T) && !P;
        d.__lxG__ = d.__lxG__ || {};
        var X = X || aa();
        T = Object.create;
        "function" !== typeof T && (T = function(a) {
            function c() {}
            c.prototype = a;
            return new c
        });
        var M = Array.isArray || function(a) {
            return "[object Array]" ===
                Object.prototype.toString.call(a)
        };
        H(d.__lxG__.onscrl_ease, 30);
        var ha = !1,
            W = [],
            ea = [],
            ya = null,
            oa = null,
            pa = null,
            fa = null,
            sa = null,
            qa = null,
            ra = null,
            la = null,
            Fa;
        (function() {
            function a() {
                return z(B.body) && B.body ? (Da = B.body, y(c, function(u, g) {
                    "function" === typeof g && L(g)
                }), !0) : !1
            }
            var c = [];
            Fa = function(u) {
                z(B.body) && B.body ? L(u) : c.push(u)
            };
            if ("function" === typeof d.MutationObserver) {
                var b = new MutationObserver(function() {
                    a() && b.disconnect()
                });
                b.observe(B.documentElement, {
                    childList: !0,
                    subtree: !1,
                    attributes: !1,
                    characterData: !1
                })
            } else {
                var h =
                    function() {
                        a() || L(h, {
                            C: !0
                        })
                    },
                    n = function() {
                        a() && Ba(B, "DOMContentLoaded", n)
                    };
                Aa(B, "DOMContentLoaded", n, ia() ? {
                    passive: !0
                } : !1);
                h()
            }
        })();
        (function() {
            var a = [];
            if ("complete" !== B.readyState) {
                var c = null,
                    b = function() {
                        "complete" === B.readyState && (Ba(B, "readystatechange", b), c && (clearInterval(c), c = null), y(a, function(h, n) {
                            "function" === typeof n && L(n)
                        }))
                    };
                Aa(B, "readystatechange", b, ia() ? {
                    passive: !0
                } : !1);
                c = setInterval(b, 250)
            }
        })();
        var Oa = {},
            Pa = {
                subscribe: function() {},
                unsubscribe: function() {},
                Ba: function() {}
            };
        (function(a) {
            a =
                a || 10;
            if (10 < a) {
                for (var c = "", b = 10; 0 < a;) c += Math.round(Math.pow(36, b + 1) - Math.random() * Math.pow(36, b)).toString(36).slice(1), a -= b, a < b && (b = a);
                return c
            }
            return Math.round(Math.pow(36, a + 1) - Math.random() * Math.pow(36, a)).toString(36).slice(1)
        })(5);
        var Ga = {
            O: {
                s: [1],
                u: [6],
                o: [],
                h: "ad_storage",
                i: 0
            },
            ga: {
                s: [1, 8, 9],
                u: [2],
                o: [],
                h: "analytics_storage",
                i: 1,
                W: !0
            },
            la: {
                s: [1],
                u: [3],
                o: [],
                h: "functionality_storage",
                i: 2,
                W: !0
            },
            wa: {
                s: [1, 5, 6],
                u: [4],
                o: [],
                h: "personalization_storage",
                i: 3
            },
            za: {
                s: [1],
                u: [5],
                o: [],
                h: "security_storage",
                i: 4
            },
            da: {
                s: [1, 7],
                u: [6],
                o: [],
                h: "ad_user_data",
                i: 5
            },
            ca: {
                s: [3, 4],
                u: [6],
                o: [],
                h: "ad_personalization",
                i: 6
            }
        };
        var Qa = {
            O: {
                s: [1],
                u: [6],
                o: [],
                h: "ad_storage",
                i: 0
            }
        };
        T = function() {
            function a(g) {
                Fa(function() {
                    1 <= h && b();
                    var x = Da;
                    if (x && g) {
                        if (x && g) {
                            var I;
                            M(g) ? I = g : I = g.split(" ");
                            if (x.classList && x.classList.remove) x.classList.remove.apply(x.classList, I);
                            else
                                for (var U = 0; U < I.length; U++) x.className = x.className.replace(new RegExp("\\b" + I[U] + "\\b", "g"), "").replace(/\s+/g, " ").replace(/(^ | $)/g, "")
                        }
                        var N;
                        M(g) ? N = g : N = g.split(" ");
                        if (x.classList && x.classList.add) x.classList.add.apply(x.classList, N);
                        else {
                            for (I = 0; I < N.length; I++) x.className += " " + N[I];
                            x.className = x.className.trim()
                        }
                    }
                })
            }

            function c(g) {
                1 <= h && b();
                g && za(n, g);
                1 <= h && b();
                1 <= h && b();
                a("clickio-cmp-out-of-scope")
            }

            function b() {
                return "ResurfaceLink: "
            }
            var h = ka(null),
                n = {
                    ta: null,
                    lang: null
                },
                u = {
                    l: function(g) {
                        u.l = function() {};
                        return c(g)
                    }
                };
            return u
        }();
        P = /__lxG(\d+?)__/im.exec("__lxG243168__consent__")[1];
        d.__lxG__consent__ = d.__lxG__consent__ || {};
        if ((X = function(a, c, b) {
                b = b ? ma(b) :
                    Ja();
                var h = ja(b.search);
                z(h[a]) ? a = h[a] : (h = ja(b.hash), a = z(h[a]) ? h[a] : c || null);
                return a
            }("cl_consent_tool_version")) && !H(d.__lxG__consent__.consent_overload)) return d.__lxG__consent__.consent_overload = X, Ha("https://__CLIENT_JS_STATIC_DOMAIN__/t/consent_" + P + "_" + X + ".js"), !1;
        if (X && "V4" !== X || d.__lxG__consent__ && H(d.__lxG__consent__.ver)) return !1;
        d.__lxG__consent__.sid = P;
        d.__lxG__consent__.ver = "V4";
        var ta = "!0",
            Ra = "!1",
            Q = {
                ha: function() {
                    return !0
                },
                ua: function() {},
                H: function(a) {
                    a.apply(null, [null, !0])
                },
                oa: function() {},
                pa: function() {
                    return []
                },
                ra: function() {
                    return null
                },
                qa: function() {
                    return null
                },
                sa: function() {
                    return null
                },
                na: function() {
                    return null
                }
            },
            Sa = function() {
                function a(f) {
                    z(Object.defineProperty) ? Object.defineProperty(k[f].j, "push", {
                        configurable: !0,
                        enumerable: !1,
                        writable: !0,
                        value: function() {
                            var v = arguments;
                            v = Array.prototype.push.apply(this, v);
                            b(f);
                            return v
                        }
                    }) : ba || (ba = setTimeout(c, 25))
                }

                function c() {
                    y(k, function(f) {
                        b(f)
                    });
                    setTimeout(c, 25)
                }

                function b(f) {
                    k[f].g && !k[f].F && k[f].j.length > k[f].J + 1 && (k[f].F = !0, k[f].B ? h(f) : L(function() {
                        h(f)
                    }))
                }

                function h(f) {
                    Ma(k[f].j, function(v) {
                        if (v > k[f].J) {
                            k[f].J = v;
                            var D = k[f].j[v];
                            k[f].A && (D = function() {
                                k[f].A(k[f].j[v])
                            });
                            if (k[f].B) try {
                                if (D(), !I(f)) return !1
                            } catch (A) {} else L(D, {
                                v: k[f].v
                            })
                        }
                    });
                    k[f].F = !1
                }

                function n(f, v) {
                    if (z(k[f])) return k[f].K.push(v)
                }

                function u(f) {
                    z(k[f]) && y(k[f].K, function(v, D) {
                        V[D].G || g(D)
                    })
                }

                function g(f) {
                    if (!z(V[f]) || V[f].G) return !1;
                    f = V[f];
                    var v = !0;
                    y(f.M, function(D, A) {
                        if (!H(k[A].g)) return v = !1
                    });
                    v && (f.G = !0, k[f.M[0]].j.push(f.V))
                }

                function x(f) {
                    z(k[f]) && !k[f].g && (k[f].g = !0, b(f), u(f))
                }

                function I(f) {
                    return z(k[f]) ? k[f].g : !1
                }

                function U(f, v, D) {
                    var A = [].slice.call(v);
                    if (A.length) {
                        var e = [f],
                            p = V.push({
                                M: e,
                                V: D,
                                G: !1
                            }) - 1;
                        n(e, p);
                        y(A, function(l) {
                            l = A[l].X();
                            e.push(l);
                            n(l, p)
                        });
                        g(p)
                    } else k[f].j.push(D)
                }

                function N(f) {
                    f = f || {};
                    var v = {
                        m: [],
                        A: null,
                        g: !1,
                        B: !1,
                        v: !1
                    };
                    za(v, f);
                    var D = null;
                    if (H(v.m.enqueued)) {
                        y(k, function(e) {
                            if (k[e].j === v.m) return D = e, !1
                        });
                        if (D) return k[D].N;
                        D = v.m;
                        v.m = []
                    }
                    z(Object.defineProperty) ?
                        Object.defineProperty(v.m, "enqueued", {
                            enumerable: !1,
                            configurable: !1,
                            writable: !1,
                            value: "static"
                        }) : v.m.enqueued = !0;
                    var A = k.length;
                    k.push({
                        id: A,
                        j: v.m,
                        K: [],
                        J: -1,
                        g: !1,
                        B: v.B,
                        F: !1,
                        A: v.A,
                        v: v.v
                    });
                    a(A);
                    k[A].N = {
                        X: function() {
                            return A
                        },
                        start: function() {
                            x(A)
                        },
                        stop: function() {
                            z(k[A]) && k[A].g && (k[A].g = !1)
                        },
                        Aa: function() {
                            return I(A)
                        },
                        add: function(e) {
                            k[A].j.push(e)
                        },
                        ea: function() {
                            var e = [].slice.call(arguments),
                                p = e.pop();
                            U(A, e, p)
                        },
                        fa: function(e, p) {
                            U(A, e, p)
                        }
                    };
                    v.g ? x(A) : D && D.push(function() {
                        x(A)
                    });
                    return k[A].N
                }
                var k = [],
                    V = [],
                    ba = null;
                N({
                    B: !0
                });
                return N
            }();
        P = function() {
            function a(e) {
                y(e, function(p, l) {
                    l()
                })
            }

            function c(e) {
                var p = {
                    detail: {
                        state: e
                    }
                };
                y(ba, function(l, t) {
                    p = t(p)
                });
                if ("function" === typeof d.CustomEvent) return new CustomEvent("clickioConsentEvent", p);
                e = B.createEvent("CustomEvent");
                e.initCustomEvent("clickioConsentEvent", !0, !1, p.detail);
                return e
            }

            function b(e, p, l) {
                var t = !1;
                if (e && d.__lxG__consent__.policyUrlMap) {
                    for (var r = null, w = d.__lxG__consent__.policyUrlMap, m = d.location.hostname; - 1 !== m.indexOf(".");)
                        if (r = H(w[m])) {
                            "string" !==
                            typeof r && (H(r[p]) ? r = r[p] : H(r._default) ? r = r._default : (w = Object.keys(r)[0], r = r[w]));
                            r && (r = r.replace(/^\s+|\s+$/g, ""), /^[a-zA-Z][a-zA-Z0-9+\.\-]*:/.test(r) || 0 === r.indexOf("//") || (r = "https://" + r), t = !0);
                            break
                        } else m = m.substring(m.indexOf(".") + 1);
                    t && (b = function(q, E, F) {
                        return F.replace(e, r)
                    })
                }
                t || (b = function(q, E, F) {
                    return F
                });
                return b(e, p, l)
            }

            function h() {
                function e(C) {
                    return M(C) && C.length || !M(C) && null !== C
                }

                function p(C, G) {
                    return (l(C, G) || "").split(",").map(function(K) {
                        return "" !== K ? ka(K) : null
                    }).filter(function(K) {
                        return ~w.indexOf(G) ||
                            null === K ? null !== K : 0 < K
                    })
                }

                function l(C, G) {
                    G = ("clickio-cmp-" + G).replace(/-(.)/g, function(K, Y) {
                        return Y.toUpperCase()
                    });
                    return H(C.dataset[G], null)
                }
                var t = B.querySelectorAll('script[type="text/clickiocmp"]'),
                    r = [];
                y(t, function(C) {
                    t[C].getAttribute("src") && null !== t[C].getAttribute("async") ? r.push(t[C]) : t[C].getAttribute("src") || r.push(t[C])
                });
                var w = [];
                w.push("paywall-logged-in");
                w.push("paywall-subscribed");
                var m = !1;
                m = !0;
                var q = [],
                    E = [],
                    F = [],
                    J = [];
                F = "purpose-consent vendor-consent purpose-li vendor-li other-vendor-li special-feature-consent".split(" ");
                J = ["nontcf-purpose-consent", "custom-purpose-consent", "other-vendor-consent"];
                q = q.concat(F);
                q = q.concat(J);
                q.push("paywall-logged-in");
                q.push("paywall-subscribed");
                y(r, function(C, G) {
                    if (C = H(G.dataset["clickio-cmp-json"])) var K = JSON.parse(C);
                    else K = {}, y(q, function(Z) {
                        K[q[Z]] = ~E.indexOf(q[Z]) ? l(G, q[Z]) : p(G, q[Z])
                    });
                    var Y = !1;
                    y(K, function(Z, ua) {
                        if (e(ua)) return Y = !0, !1
                    });
                    var va = C = !0;
                    if (m) {
                        va = null === l(G, "usnat");
                        var wa = l(G, "gdpr");
                        null !== wa && (C = ka(wa) && null !== O().state() || !ka(wa) && null === O().state())
                    }
                    if (C &&
                        va && Y) {
                        var ca = !0;
                        (ca = !0, Q) && Q !== Q && (ca = !0);
                        ca && y([], function(Z, ua) {
                            if (e(K[ua])) return ca = !1
                        });
                        ca && Ca(G, !0)
                    } else C && va && Ca(G, !0)
                });
                if (!v)
                    if (d.MutationObserver) v = new MutationObserver(function(C) {
                        var G = !1;
                        y(C, function(K, Y) {
                            if (Y.addedNodes.length) return G = !0, !1
                        });
                        G && h(!0)
                    }), v.observe(Ea, {
                        childList: !0,
                        subtree: !0,
                        attributes: !1,
                        characterData: !1
                    });
                    else {
                        var R = function() {
                            v = setTimeout(R, 250);
                            h(!0)
                        };
                        R()
                    }
            }

            function n() {
                n = function() {};
                u();
                Sa({
                    m: S().consentQueue,
                    A: function(e) {
                        e(O().state(), O().I())
                    },
                    g: !0
                })
            }

            function u() {
                S().consentQueue =
                    S().consentQueue || [];
                return S().consentQueue
            }
            d.__lxG__consent__ = d.__lxG__consent__ || {};
            var g = d.__lxG__consent__,
                x = function() {
                    function e(m) {
                        var q = H(m[0]);
                        m = H(m[1]);
                        if (q && m) {
                            if ("object" === typeof m) {
                                var E = [];
                                y(m, function(J, R) {
                                    M(R) ? y(R, function(C, G) {
                                        E.push("" + J + ":" + G)
                                    }) : E.push("" + J + ":" + R)
                                });
                                m = E
                            }
                            m = M(m) && 0 < m.length ? "," + m.join(",") + "," : "";
                            var F = {};
                            w((F["clickio_cmp_" + q] = m, F))
                        }
                    }

                    function p() {
                        r("set", "developer_id.dNjAwZj", !0);
                        if (ta) {
                            var m = [];
                            y(Ga, function() {
                                m.push(1)
                            });
                            l(m)
                        }
                        w({
                            consent_scope_applies: !1
                        });
                        w({
                            event: "clickio_consent_update"
                        })
                    }

                    function l(m) {
                        var q = null;
                        var E = !1;
                        m && M(m) && (E = Object.values(Ga).sort(function(F, J) {
                            return F.i - J.i
                        }), q = null, y(E, function(F, J) {
                            H(m[J.i]) ? (F = J.h, q || (q = {}), q[F] = "granted") : (F = J.h, q || (q = {}), q[F] = "denied")
                        }), q ? (r("consent", "update", q), E = !0) : E = !1);
                        return E
                    }

                    function t() {
                        var m = null;
                        d.dataLayer && M(d.dataLayer) && (y(d.dataLayer, function(q, E) {
                            if ("consent" === H(E[0]) && "default" === H(E[1])) return m = !0, !1
                        }), null === m && (m = !1));
                        return m
                    }

                    function r(m) {
                        return d.gtag.apply(null, [].slice.call(arguments))
                    }

                    function w(m) {
                        return d.dataLayer.push.apply(d.dataLayer,
                            arguments)
                    }
                    d.dataLayer = d.dataLayer || [];
                    d.gtag = d.gtag || function(m) {
                        d.dataLayer.push(arguments)
                    };
                    return {
                        l: function() {
                            ta || (ta = t());
                            p();
                            Pa.subscribe(Oa.ba, e)
                        }
                    }
                }(),
                I = function() {
                    function e() {
                        var l = {};
                        y(Qa, function(t, r) {
                            l[r.h] = "granted"
                        });
                        p(l)
                    }

                    function p(l, t) {
                        d.uetq = d.uetq || [];
                        d.uetq.push("consent", t || "update", l)
                    }
                    return {
                        l: function() {
                            Ra && e()
                        }
                    }
                }(),
                U = function() {
                    function e() {
                        w().requestNonPersonalizedAds = 0
                    }

                    function p() {
                        E && (E = !1, z(d.__clickio__safecontent__) || (q.cmd.push(function() {
                            z(d.lxpbjsdfp) || d.disableGoogleLoadControl ||
                                q.pubads().refresh()
                        }), w().pauseAdRequests = 0))
                    }

                    function l() {
                        -1 === O().state() && q.setConfig({
                            disableInitialLoad: !0
                        })
                    }

                    function t() {
                        z(q.pubads) ? l() : q.cmd.unshift(function() {
                            l()
                        });
                        w().pauseAdRequests = 1
                    }

                    function r() {
                        E = !0;
                        d.disableGoogleLoadControl || t()
                    }

                    function w() {
                        d.adsbygoogle = d.adsbygoogle || [];
                        return d.adsbygoogle
                    }
                    var m = null;
                    d.googletag = d.googletag || {};
                    d.googletag.cmd = d.googletag.cmd || [];
                    d.disableGoogleLoadControl = d.disableGoogleLoadControl || !1;
                    var q = d.googletag,
                        E = !1;
                    return {
                        l: function(F, J) {
                            m = F;
                            m.D.getGoogleConsentMode =
                                function() {
                                    return O().I()
                                };
                            J.P(function(R) {
                                R.detail.google = O().I();
                                return R
                            });
                            J.S(r);
                            J.U(p);
                            J.T(e)
                        }
                    }
                }(),
                N = [],
                k = [],
                V = [],
                ba = [],
                f = [],
                v;
            g.getState = function() {
                return O().state()
            };
            g.getPurposeOneAllowed = function() {
                return O().Z()
            };
            var D = {
                    D: g,
                    xa: function(e, p, l) {
                        return b(e, p, l)
                    },
                    ia: !1,
                    ja: function() {
                        return !1
                    },
                    aa: function() {
                        var e = O().state();
                        Ea.dispatchEvent(c(e));
                        z(g.consentCallback) && L(function(p) {
                            return function() {
                                g.consentCallback(p)
                            }
                        }(e)); - 1 !== e && (h(), a(f))
                    },
                    Y: function() {
                        u()
                    },
                    $: n,
                    va: function() {
                        a(N)
                    },
                    ya: function() {
                        a(k)
                    },
                    ka: function() {
                        a(V)
                    }
                },
                A = {
                    S: function(e) {
                        N.push(e)
                    },
                    U: function(e) {
                        k.push(e)
                    },
                    T: function(e) {
                        V.push(e)
                    },
                    R: function(e) {
                        f.push(e)
                    },
                    P: function(e) {
                        ba.push(e)
                    }
                };
            D.ma = function() {
                return !0
            };
            z(S().getConsentType) || (S().getConsentType = function() {
                return "tcf"
            }, S().getConsentApplicable = function() {
                return !1
            }, S().onConsentStateUpdate = function(e) {
                function p() {
                    if (Q && Q !== Q) Q.H(function(l) {
                        Q.H(function(t) {
                            var r = {};
                            y(l, function(w, m) {
                                r[w] = m
                            });
                            y(t, function(w, m) {
                                "otherVendors" === w && z(r[w]) ? y(t[w], function(q) {
                                    var E = r[w][q] && M(r[w][q]) ?
                                        r[w][q] : null,
                                        F = t[w][q] && M(t[w][q]) ? t[w][q] : null;
                                    E && F || !E && F && (r[w][q] = t[w][q])
                                }) : r[w] = m
                            });
                            try {
                                e(r)
                            } catch (w) {
                                d.console && d.console.log("Error in onConsentStateUpdate callback:\n", w)
                            }
                        })
                    });
                    else try {
                        Q.H(e)
                    } catch (l) {
                        d.console && d.console.log("Error in onConsentStateUpdate callback:\n", l)
                    }
                    return !0
                }
                u().push(function() {
                    A.R(p);
                    L(p)
                })
            });
            z(d.__tcfapi) && d.__tcfapi("ping", 2, function(e) {
                e && "stub" === e.cmpStatus && (e = d.__tcfapi(), d.__tcfapi = function(p, l, t) {
                    if ("function" === typeof t) try {
                        t({
                            gdprApplies: !1,
                            cmpStatus: "loaded",
                            eventStatus: "tcloaded",
                            tcfPolicyVersion: 5,
                            cmpId: 0,
                            cmpVersion: 0
                        }, !0)
                    } catch (r) {}
                }, y(e, function(p, l) {
                    p = l[0];
                    l = l[2];
                    "addEventListener" !== p && "getTCData" !== p || d.__tcfapi(p, 2, l)
                }))
            });
            z(d.__gpp) && d.__gpp("ping", function(e, p) {
                p && e && "stub" === e.cmpStatus && (p = d.__gpp(), e.cmpStatus = "loaded", e.cmpDisplayStatus = "disabled", e.signalStatus = "ready", e.applicableSections = [-1], d.__gpp = function(l, t) {
                    if ("function" === typeof t) try {
                        "ping" === l ? t(e, !0) : "addEventListener" === l ? t({
                            eventName: "signalStatus",
                            listenerId: 1,
                            data: "ready",
                            pingData: e
                        }, !0) : t(null, !1)
                    } catch (r) {}
                }, y(p, function(l, t) {
                    l = t[0];
                    t = t[1];
                    "ping" !== l && "addEventListener" !== l || d.__gpp(l, t)
                }))
            });
            x.l(D, A);
            I.l(D, A);
            U.l(D, A);
            return D
        }();
        new(function() {
            "use strict";
            var e, t, s, r, n = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

            function i(e, t) {
                return e(t = {
                    exports: {}
                }, t.exports), t.exports
            }
            let o;
            i(function(e) {
                    var t = function(e) {
                        var t, s = Object.prototype,
                            r = s.hasOwnProperty,
                            n = Object.defineProperty || function(e, t, s) {
                                e[t] = s.value
                            },
                            i = "function" == typeof Symbol ? Symbol : {},
                            o = i.iterator || "@@iterator",
                            a = i.asyncIterator || "@@asyncIterator",
                            c = i.toStringTag || "@@toStringTag";

                        function u(e, t, s) {
                            return Object.defineProperty(e, t, {
                                value: s,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }), e[t]
                        }
                        try {
                            u({}, "")
                        } catch (e) {
                            u = function(e, t, s) {
                                return e[t] = s
                            }
                        }

                        function l(e, t, s, r) {
                            var i = t && t.prototype instanceof v ? t : v,
                                o = Object.create(i.prototype),
                                a = new V(r || []);
                            return n(o, "_invoke", {
                                value: A(e, s, a)
                            }), o
                        }

                        function p(e, t, s) {
                            try {
                                return {
                                    type: "normal",
                                    arg: e.call(t, s)
                                }
                            } catch (e) {
                                return {
                                    type: "throw",
                                    arg: e
                                }
                            }
                        }
                        e.wrap = l;
                        var d = "suspendedStart",
                            h = "suspendedYield",
                            f = "executing",
                            g = "completed",
                            m = {};

                        function v() {}

                        function y() {}

                        function b() {}
                        var E = {};
                        u(E, o, function() {
                            return this
                        });
                        var S = Object.getPrototypeOf,
                            I = S && S(S(P([])));
                        I && I !== s && r.call(I, o) && (E = I);
                        var C = b.prototype = v.prototype = Object.create(E);

                        function w(e) {
                            ["next", "throw", "return"].forEach(function(t) {
                                u(e, t, function(e) {
                                    return this._invoke(t, e)
                                })
                            })
                        }

                        function L(e, t) {
                            function s(n, i, o, a) {
                                var c = p(e[n], e, i);
                                if ("throw" !== c.type) {
                                    var u = c.arg,
                                        l = u.value;
                                    return l && "object" == typeof l && r.call(l, "__await") ? t.resolve(l.__await).then(function(e) {
                                        s("next", e, o, a)
                                    }, function(e) {
                                        s("throw", e, o, a)
                                    }) : t.resolve(l).then(function(e) {
                                        u.value = e, o(u)
                                    }, function(e) {
                                        return s("throw", e, o, a)
                                    })
                                }
                                a(c.arg)
                            }
                            var i;
                            n(this, "_invoke", {
                                value: function(e, r) {
                                    function n() {
                                        return new t(function(t, n) {
                                            s(e, r, t, n)
                                        })
                                    }
                                    return i = i ? i.then(n, n) : n()
                                }
                            })
                        }

                        function A(e, s, r) {
                            var n = d;
                            return function(i, o) {
                                if (n === f) throw new Error("Generator is already running");
                                if (n === g) {
                                    if ("throw" === i) throw o;
                                    return {
                                        value: t,
                                        done: !0
                                    }
                                }
                                for (r.method = i, r.arg = o;;) {
                                    var a = r.delegate;
                                    if (a) {
                                        var c = _(a, r);
                                        if (c) {
                                            if (c === m) continue;
                                            return c
                                        }
                                    }
                                    if ("next" === r.method) r.sent = r._sent = r.arg;
                                    else if ("throw" === r.method) {
                                        if (n === d) throw n = g, r.arg;
                                        r.dispatchException(r.arg)
                                    } else "return" === r.method && r.abrupt("return", r.arg);
                                    n = f;
                                    var u = p(e, s, r);
                                    if ("normal" === u.type) {
                                        if (n = r.done ? g : h, u.arg === m) continue;
                                        return {
                                            value: u.arg,
                                            done: r.done
                                        }
                                    }
                                    "throw" === u.type && (n = g, r.method = "throw", r.arg = u.arg)
                                }
                            }
                        }

                        function _(e, s) {
                            var r = s.method,
                                n = e.iterator[r];
                            if (n === t) return s.delegate = null, "throw" === r && e.iterator.return && (s.method = "return", s.arg = t, _(e, s), "throw" === s.method) || "return" !== r && (s.method = "throw", s.arg = new TypeError("The iterator does not provide a '" + r + "' method")), m;
                            var i = p(n, e.iterator, s.arg);
                            if ("throw" === i.type) return s.method = "throw", s.arg = i.arg, s.delegate = null, m;
                            var o = i.arg;
                            return o ? o.done ? (s[e.resultName] = o.value, s.next = e.nextLoc, "return" !== s.method && (s.method = "next", s.arg = t), s.delegate = null, m) : o : (s.method = "throw", s.arg = new TypeError("iterator result is not an object"), s.delegate = null, m)
                        }

                        function O(e) {
                            var t = {
                                tryLoc: e[0]
                            };
                            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                        }

                        function T(e) {
                            var t = e.completion || {};
                            t.type = "normal", delete t.arg, e.completion = t
                        }

                        function V(e) {
                            this.tryEntries = [{
                                tryLoc: "root"
                            }], e.forEach(O, this), this.reset(!0)
                        }

                        function P(e) {
                            if (null != e) {
                                var s = e[o];
                                if (s) return s.call(e);
                                if ("function" == typeof e.next) return e;
                                if (!isNaN(e.length)) {
                                    var n = -1,
                                        i = function s() {
                                            for (; ++n < e.length;)
                                                if (r.call(e, n)) return s.value = e[n], s.done = !1, s;
                                            return s.value = t, s.done = !0, s
                                        };
                                    return i.next = i
                                }
                            }
                            throw new TypeError(typeof e + " is not iterable")
                        }
                        return y.prototype = b, n(C, "constructor", {
                            value: b,
                            configurable: !0
                        }), n(b, "constructor", {
                            value: y,
                            configurable: !0
                        }), y.displayName = u(b, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                            var t = "function" == typeof e && e.constructor;
                            return !!t && (t === y || "GeneratorFunction" === (t.displayName || t.name))
                        }, e.mark = function(e) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : (e.__proto__ = b, u(e, c, "GeneratorFunction")), e.prototype = Object.create(C), e
                        }, e.awrap = function(e) {
                            return {
                                __await: e
                            }
                        }, w(L.prototype), u(L.prototype, a, function() {
                            return this
                        }), e.AsyncIterator = L, e.async = function(t, s, r, n, i) {
                            void 0 === i && (i = Promise);
                            var o = new L(l(t, s, r, n), i);
                            return e.isGeneratorFunction(s) ? o : o.next().then(function(e) {
                                return e.done ? e.value : o.next()
                            })
                        }, w(C), u(C, c, "Generator"), u(C, o, function() {
                            return this
                        }), u(C, "toString", function() {
                            return "[object Generator]"
                        }), e.keys = function(e) {
                            var t = Object(e),
                                s = [];
                            for (var r in t) s.push(r);
                            return s.reverse(),
                                function e() {
                                    for (; s.length;) {
                                        var r = s.pop();
                                        if (r in t) return e.value = r, e.done = !1, e
                                    }
                                    return e.done = !0, e
                                }
                        }, e.values = P, V.prototype = {
                            constructor: V,
                            reset: function(e) {
                                if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(T), !e)
                                    for (var s in this) "t" === s.charAt(0) && r.call(this, s) && !isNaN(+s.slice(1)) && (this[s] = t)
                            },
                            stop: function() {
                                this.done = !0;
                                var e = this.tryEntries[0].completion;
                                if ("throw" === e.type) throw e.arg;
                                return this.rval
                            },
                            dispatchException: function(e) {
                                if (this.done) throw e;
                                var s = this;

                                function n(r, n) {
                                    return a.type = "throw", a.arg = e, s.next = r, n && (s.method = "next", s.arg = t), !!n
                                }
                                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                    var o = this.tryEntries[i],
                                        a = o.completion;
                                    if ("root" === o.tryLoc) return n("end");
                                    if (o.tryLoc <= this.prev) {
                                        var c = r.call(o, "catchLoc"),
                                            u = r.call(o, "finallyLoc");
                                        if (c && u) {
                                            if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                            if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                        } else if (c) {
                                            if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                        } else {
                                            if (!u) throw new Error("try statement without catch or finally");
                                            if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                        }
                                    }
                                }
                            },
                            abrupt: function(e, t) {
                                for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                                    var n = this.tryEntries[s];
                                    if (n.tryLoc <= this.prev && r.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                        var i = n;
                                        break
                                    }
                                }
                                i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                                var o = i ? i.completion : {};
                                return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, m) : this.complete(o)
                            },
                            complete: function(e, t) {
                                if ("throw" === e.type) throw e.arg;
                                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), m
                            },
                            finish: function(e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var s = this.tryEntries[t];
                                    if (s.finallyLoc === e) return this.complete(s.completion, s.afterLoc), T(s), m
                                }
                            },
                            catch: function(e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var s = this.tryEntries[t];
                                    if (s.tryLoc === e) {
                                        var r = s.completion;
                                        if ("throw" === r.type) {
                                            var n = r.arg;
                                            T(s)
                                        }
                                        return n
                                    }
                                }
                                throw new Error("illegal catch attempt")
                            },
                            delegateYield: function(e, s, r) {
                                return this.delegate = {
                                    iterator: P(e),
                                    resultName: s,
                                    nextLoc: r
                                }, "next" === this.method && (this.arg = t), m
                            }
                        }, e
                    }(e.exports);
                    try {
                        regeneratorRuntime = t
                    } catch (e) {
                        "object" == typeof globalThis ? globalThis.regeneratorRuntime = t : Function("r", "regeneratorRuntime = r")(t)
                    }
                }),
                function(e) {
                    e.PING = "ping", e.GET_TC_DATA = "getTCData", e.GET_IN_APP_TC_DATA = "getInAppTCData", e.GET_VENDOR_LIST = "getVendorList", e.ADD_EVENT_LISTENER = "addEventListener", e.REMOVE_EVENT_LISTENER = "removeEventListener"
                }(e || (e = {})),
                function(e) {
                    e.STUB = "stub", e.LOADING = "loading", e.LOADED = "loaded", e.ERROR = "error"
                }(t || (t = {})),
                function(e) {
                    e.VISIBLE = "visible", e.HIDDEN = "hidden", e.DISABLED = "disabled"
                }(s || (s = {})),
                function(e) {
                    e.TC_LOADED = "tcloaded", e.CMP_UI_SHOWN = "cmpuishown", e.USER_ACTION_COMPLETE = "useractioncomplete"
                }(r || (r = {}));
            class a {
                eventQueue = new Map;
                queueNumber = 0;
                add(e) {
                    return this.eventQueue.set(this.queueNumber, e), this.queueNumber++
                }
                remove(e) {
                    return this.eventQueue.delete(e)
                }
                exec() {
                    this.eventQueue.forEach((e, t) => {
                        new o(e.callback, e.param, t, e.next)
                    })
                }
                clear() {
                    this.queueNumber = 0, this.eventQueue.clear()
                }
                get size() {
                    return this.eventQueue.size
                }
            }
            class c {
                static apiVersion = "2";
                static tcfPolicyVersion;
                static eventQueue = new a;
                static cmpStatus = t.LOADING;
                static disabled = !1;
                static displayStatus = s.HIDDEN;
                static cmpId;
                static cmpVersion;
                static eventStatus;
                static gdprApplies;
                static tcModel;
                static tcString;
                static reset() {
                    delete this.cmpId, delete this.cmpVersion, delete this.eventStatus, delete this.gdprApplies, delete this.tcModel, delete this.tcString, delete this.tcfPolicyVersion, this.cmpStatus = t.LOADING, this.disabled = !1, this.displayStatus = s.HIDDEN, this.eventQueue.clear()
                }
            }
            class u {
                cmpId = c.cmpId;
                cmpVersion = c.cmpVersion;
                gdprApplies = c.gdprApplies;
                tcfPolicyVersion = c.tcfPolicyVersion
            }
            class l extends u {
                cmpStatus = t.ERROR
            }
            class p extends u {
                tcString;
                listenerId;
                eventStatus;
                cmpStatus;
                isServiceSpecific;
                useNonStandardTexts;
                publisherCC;
                purposeOneTreatment;
                outOfBand;
                purpose;
                vendor;
                specialFeatureOptins;
                publisher;
                constructor(e, t) {
                    if (super(), this.eventStatus = c.eventStatus, this.cmpStatus = c.cmpStatus, this.listenerId = t, c.gdprApplies) {
                        const t = c.tcModel;
                        this.tcString = c.tcString, this.isServiceSpecific = t.isServiceSpecific, this.useNonStandardTexts = t.useNonStandardTexts, this.purposeOneTreatment = t.purposeOneTreatment, this.publisherCC = t.publisherCountryCode, !1 === this.isServiceSpecific && (this.outOfBand = {
                            allowedVendors: this.createVectorField(t.vendorsAllowed, e),
                            disclosedVendors: this.createVectorField(t.vendorsDisclosed, e)
                        }), this.purpose = {
                            consents: this.createVectorField(t.purposeConsents),
                            legitimateInterests: this.createVectorField(t.purposeLegitimateInterests)
                        }, this.vendor = {
                            consents: this.createVectorField(t.vendorConsents, e),
                            legitimateInterests: this.createVectorField(t.vendorLegitimateInterests, e),
                            disclosedVendors: this.createVectorField(t.vendorsDisclosed, e)
                        }, this.specialFeatureOptins = this.createVectorField(t.specialFeatureOptins), this.publisher = {
                            consents: this.createVectorField(t.publisherConsents),
                            legitimateInterests: this.createVectorField(t.publisherLegitimateInterests),
                            customPurpose: {
                                consents: this.createVectorField(t.publisherCustomConsents),
                                legitimateInterests: this.createVectorField(t.publisherCustomLegitimateInterests)
                            },
                            restrictions: this.createRestrictions(t.publisherRestrictions)
                        }
                    }
                }
                createRestrictions(e) {
                    const t = {};
                    if (e.numRestrictions > 0) {
                        const s = e.getMaxVendorId();
                        for (let r = 1; r <= s; r++) {
                            const s = r.toString();
                            e.getRestrictions(r).forEach(e => {
                                const r = e.purposeId.toString();
                                t[r] || (t[r] = {}), t[r][s] = e.restrictionType
                            })
                        }
                    }
                    return t
                }
                createVectorField(e, t) {
                    return t ? t.reduce((t, s) => (t[String(s)] = e.has(Number(s)), t), {}) : [...e].reduce((e, t) => (e[t[0].toString(10)] = t[1], e), {})
                }
            }
            class d extends p {
                constructor(e) {
                    super(e), delete this.outOfBand
                }
                createVectorField(e) {
                    return [...e].reduce((e, t) => e + (t[1] ? "1" : "0"), "")
                }
                createRestrictions(e) {
                    const t = {};
                    if (e.numRestrictions > 0) {
                        const s = e.getMaxVendorId();
                        e.getRestrictions().forEach(e => {
                            t[e.purposeId.toString()] = "_".repeat(s)
                        });
                        for (let r = 0; r < s; r++) {
                            const s = r + 1;
                            e.getRestrictions(s).forEach(e => {
                                const s = e.restrictionType.toString(),
                                    n = e.purposeId.toString(),
                                    i = t[n].substr(0, r),
                                    o = t[n].substr(r + 1);
                                t[n] = i + s + o
                            })
                        }
                    }
                    return t
                }
            }
            class h extends u {
                cmpLoaded = !0;
                cmpStatus = c.cmpStatus;
                displayStatus = c.displayStatus;
                apiVersion = String(c.apiVersion);
                gvlVersion;
                constructor() {
                    super(), c.tcModel && c.tcModel.vendorListVersion && (this.gvlVersion = +c.tcModel.vendorListVersion)
                }
            }
            class f {
                listenerId;
                callback;
                next;
                param;
                success = !0;
                constructor(e, t, s, r) {
                    Object.assign(this, {
                        callback: e,
                        listenerId: s,
                        param: t,
                        next: r
                    });
                    try {
                        this.respond()
                    } catch (e) {
                        this.invokeCallback(null)
                    }
                }
                invokeCallback(e) {
                    const t = null !== e;
                    "function" == typeof this.next ? this.callback(this.next, e, t) : this.callback(e, t)
                }
            }
            class g extends f {
                respond() {
                    this.invokeCallback(new h)
                }
            }
            class m extends f {
                respond() {
                    this.throwIfParamInvalid(), this.invokeCallback(new p(this.param, this.listenerId))
                }
                throwIfParamInvalid() {
                    if (!(void 0 === this.param || Array.isArray(this.param) && this.param.every(Number.isInteger))) throw new Error("Invalid Parameter")
                }
            }
            var v;
            o = m;
            class y extends m {
                respond() {
                    this.throwIfParamInvalid(), this.invokeCallback(new d(this.param))
                }
            }
            class b extends Error {
                constructor(e) {
                    super(e), this.name = "DecodingError"
                }
            }
            class E extends Error {
                constructor(e) {
                    super(e), this.name = "EncodingError"
                }
            }
            class S extends Error {
                constructor(e) {
                    super(e), this.name = "GVLError"
                }
            }
            class I extends Error {
                constructor(e, t, s = "") {
                    super(`invalid value ${t} passed for ${e} ${s}`), this.name = "TCModelError"
                }
            }
            class C {
                static DICT = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
                static REVERSE_DICT = new Map([
                    ["A", 0],
                    ["B", 1],
                    ["C", 2],
                    ["D", 3],
                    ["E", 4],
                    ["F", 5],
                    ["G", 6],
                    ["H", 7],
                    ["I", 8],
                    ["J", 9],
                    ["K", 10],
                    ["L", 11],
                    ["M", 12],
                    ["N", 13],
                    ["O", 14],
                    ["P", 15],
                    ["Q", 16],
                    ["R", 17],
                    ["S", 18],
                    ["T", 19],
                    ["U", 20],
                    ["V", 21],
                    ["W", 22],
                    ["X", 23],
                    ["Y", 24],
                    ["Z", 25],
                    ["a", 26],
                    ["b", 27],
                    ["c", 28],
                    ["d", 29],
                    ["e", 30],
                    ["f", 31],
                    ["g", 32],
                    ["h", 33],
                    ["i", 34],
                    ["j", 35],
                    ["k", 36],
                    ["l", 37],
                    ["m", 38],
                    ["n", 39],
                    ["o", 40],
                    ["p", 41],
                    ["q", 42],
                    ["r", 43],
                    ["s", 44],
                    ["t", 45],
                    ["u", 46],
                    ["v", 47],
                    ["w", 48],
                    ["x", 49],
                    ["y", 50],
                    ["z", 51],
                    ["0", 52],
                    ["1", 53],
                    ["2", 54],
                    ["3", 55],
                    ["4", 56],
                    ["5", 57],
                    ["6", 58],
                    ["7", 59],
                    ["8", 60],
                    ["9", 61],
                    ["-", 62],
                    ["_", 63]
                ]);
                static BASIS = 6;
                static LCM = 24;
                static encode(e) {
                    if (!/^[0-1]+$/.test(e)) throw new E("Invalid bitField");
                    const t = e.length % this.LCM;
                    e += t ? "0".repeat(this.LCM - t) : "";
                    let s = "";
                    for (let t = 0; t < e.length; t += this.BASIS) s += this.DICT[parseInt(e.substr(t, this.BASIS), 2)];
                    return s
                }
                static decode(e) {
                    if (!/^[A-Za-z0-9\-_]+$/.test(e)) throw new b("Invalidly encoded Base64URL string");
                    let t = "";
                    for (let s = 0; s < e.length; s++) {
                        const r = this.REVERSE_DICT.get(e[s]).toString(2);
                        t += "0".repeat(this.BASIS - r.length) + r
                    }
                    return t
                }
            }
            class w {
                static langSet = new Set(["AR", "BG", "BS", "CA", "CS", "CY", "DA", "DE", "EL", "EN", "ES", "ET", "EU", "FI", "FR", "GL", "HE", "HI", "HR", "HU", "ID", "IS", "IT", "JA", "KA", "KO", "LT", "LV", "MK", "MS", "MT", "NL", "NO", "PL", "PT-BR", "PT-PT", "RO", "RU", "SK", "SL", "SQ", "SR-LATN", "SR-CYRL", "SV", "SW", "TH", "TL", "TR", "UK", "VI", "ZH", "ZH-HANT"]);
                has(e) {
                    return w.langSet.has(e)
                }
                parseLanguage(e) {
                    const t = (e = e.toUpperCase()).split("-")[0];
                    if (e.length >= 2 && 2 == t.length) {
                        if (w.langSet.has(e)) return e;
                        if (w.langSet.has(t)) return t;
                        const s = t + "-" + t;
                        if (w.langSet.has(s)) return s;
                        for (const s of w.langSet)
                            if (-1 !== s.indexOf(e) || -1 !== s.indexOf(t)) return s
                    }
                    throw new Error(`unsupported language ${e}`)
                }
                forEach(e) {
                    w.langSet.forEach(e)
                }
                get size() {
                    return w.langSet.size
                }
            }
            class L {
                static cmpId = "cmpId";
                static cmpVersion = "cmpVersion";
                static consentLanguage = "consentLanguage";
                static consentScreen = "consentScreen";
                static created = "created";
                static supportOOB = "supportOOB";
                static isServiceSpecific = "isServiceSpecific";
                static lastUpdated = "lastUpdated";
                static numCustomPurposes = "numCustomPurposes";
                static policyVersion = "policyVersion";
                static publisherCountryCode = "publisherCountryCode";
                static publisherCustomConsents = "publisherCustomConsents";
                static publisherCustomLegitimateInterests = "publisherCustomLegitimateInterests";
                static publisherLegitimateInterests = "publisherLegitimateInterests";
                static publisherConsents = "publisherConsents";
                static publisherRestrictions = "publisherRestrictions";
                static purposeConsents = "purposeConsents";
                static purposeLegitimateInterests = "purposeLegitimateInterests";
                static purposeOneTreatment = "purposeOneTreatment";
                static specialFeatureOptins = "specialFeatureOptins";
                static useNonStandardTexts = "useNonStandardTexts";
                static vendorConsents = "vendorConsents";
                static vendorLegitimateInterests = "vendorLegitimateInterests";
                static vendorListVersion = "vendorListVersion";
                static vendorsAllowed = "vendorsAllowed";
                static vendorsDisclosed = "vendorsDisclosed";
                static version = "version"
            }
            class A {
                clone() {
                    const e = new this.constructor;
                    return Object.keys(this).forEach(t => {
                        const s = this.deepClone(this[t]);
                        void 0 !== s && (e[t] = s)
                    }), e
                }
                deepClone(e) {
                    const t = typeof e;
                    if ("number" === t || "string" === t || "boolean" === t) return e;
                    if (null !== e && "object" === t) {
                        if ("function" == typeof e.clone) return e.clone();
                        if (e instanceof Date) return new Date(e.getTime());
                        if (e instanceof Map) return new Map(e);
                        if (void 0 !== e[Symbol.iterator]) {
                            const t = [];
                            for (const s of e) t.push(this.deepClone(s));
                            return e instanceof Array ? t : new e.constructor(t)
                        } {
                            const t = {};
                            for (const s in e) e.hasOwnProperty(s) && (t[s] = this.deepClone(e[s]));
                            return t
                        }
                    }
                }
            }! function(e) {
                e[e.NOT_ALLOWED = 0] = "NOT_ALLOWED", e[e.REQUIRE_CONSENT = 1] = "REQUIRE_CONSENT", e[e.REQUIRE_LI = 2] = "REQUIRE_LI"
            }(v || (v = {}));
            class _ extends A {
                static hashSeparator = "-";
                purposeId_;
                restrictionType;
                constructor(e, t) {
                    super(), void 0 !== e && (this.purposeId = e), void 0 !== t && (this.restrictionType = t)
                }
                static unHash(e) {
                    const t = e.split(this.hashSeparator),
                        s = new _;
                    if (2 !== t.length) throw new I("hash", e);
                    return s.purposeId = parseInt(t[0], 10), s.restrictionType = parseInt(t[1], 10), s
                }
                get hash() {
                    if (!this.isValid()) throw new Error("cannot hash invalid PurposeRestriction");
                    return `${this.purposeId}${_.hashSeparator}${this.restrictionType}`
                }
                get purposeId() {
                    return this.purposeId_
                }
                set purposeId(e) {
                    this.purposeId_ = e
                }
                isValid() {
                    return Number.isInteger(this.purposeId) && this.purposeId > 0 && (this.restrictionType === v.NOT_ALLOWED || this.restrictionType === v.REQUIRE_CONSENT || this.restrictionType === v.REQUIRE_LI)
                }
                isSameAs(e) {
                    return this.purposeId === e.purposeId && this.restrictionType === e.restrictionType
                }
            }
            var O, T, V = function(e) {
                    return e && e.Math === Math && e
                },
                P = V("object" == typeof globalThis && globalThis) || V("object" == typeof window && window) || V("object" == typeof self && self) || V("object" == typeof n && n) || V("object" == typeof n && n) || function() {
                    return this
                }() || Function("return this")(),
                R = function(e) {
                    try {
                        return !!e()
                    } catch (e) {
                        return !0
                    }
                },
                N = !R(function() {
                    return 7 !== Object.defineProperty({}, 1, {
                        get: function() {
                            return 7
                        }
                    })[1]
                }),
                D = !R(function() {
                    var e = function() {}.bind();
                    return "function" != typeof e || e.hasOwnProperty("prototype")
                }),
                x = Function.prototype.call,
                U = D ? x.bind(x) : function() {
                    return x.apply(x, arguments)
                },
                F = {}.propertyIsEnumerable,
                k = Object.getOwnPropertyDescriptor,
                M = {
                    f: k && !F.call({
                        1: 2
                    }, 1) ? function(e) {
                        var t = k(this, e);
                        return !!t && t.enumerable
                    } : F
                },
                j = function(e, t) {
                    return {
                        enumerable: !(1 & e),
                        configurable: !(2 & e),
                        writable: !(4 & e),
                        value: t
                    }
                },
                G = Function.prototype,
                H = G.call,
                B = D && G.bind.bind(H, H),
                Q = D ? B : function(e) {
                    return function() {
                        return H.apply(e, arguments)
                    }
                },
                $ = Q({}.toString),
                W = Q("".slice),
                z = Object,
                K = Q("".split),
                Y = R(function() {
                    return !z("z").propertyIsEnumerable(0)
                }) ? function(e) {
                    return "String" === function(e) {
                        return W($(e), 8, -1)
                    }(e) ? K(e, "") : z(e)
                } : z,
                J = function(e) {
                    return null == e
                },
                q = TypeError,
                X = function(e) {
                    if (J(e)) throw new q("Can't call method on " + e);
                    return e
                },
                Z = function(e) {
                    return Y(X(e))
                },
                ee = "object" == typeof document && document.all,
                te = void 0 === ee && void 0 !== ee ? function(e) {
                    return "function" == typeof e || e === ee
                } : function(e) {
                    return "function" == typeof e
                },
                se = function(e) {
                    return "object" == typeof e ? null !== e : te(e)
                },
                re = function(e, t) {
                    return arguments.length < 2 ? (s = P[e], te(s) ? s : void 0) : P[e] && P[e][t];
                    var s
                },
                ne = Q({}.isPrototypeOf),
                ie = P.navigator,
                oe = ie && ie.userAgent,
                ae = oe ? String(oe) : "",
                ce = P.process,
                ue = P.Deno,
                le = ce && ce.versions || ue && ue.version,
                pe = le && le.v8;
            pe && (T = (O = pe.split("."))[0] > 0 && O[0] < 4 ? 1 : +(O[0] + O[1])), !T && ae && (!(O = ae.match(/Edge\/(\d+)/)) || O[1] >= 74) && (O = ae.match(/Chrome\/(\d+)/)) && (T = +O[1]);
            var de = T,
                he = P.String,
                fe = !!Object.getOwnPropertySymbols && !R(function() {
                    var e = Symbol("symbol detection");
                    return !he(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && de && de < 41
                }),
                ge = fe && !Symbol.sham && "symbol" == typeof Symbol.iterator,
                me = Object,
                ve = ge ? function(e) {
                    return "symbol" == typeof e
                } : function(e) {
                    var t = re("Symbol");
                    return te(t) && ne(t.prototype, me(e))
                },
                ye = String,
                be = TypeError,
                Ee = TypeError,
                Se = Object.defineProperty,
                Ie = function(e, t) {
                    try {
                        Se(P, e, {
                            value: t,
                            configurable: !0,
                            writable: !0
                        })
                    } catch (s) {
                        P[e] = t
                    }
                    return t
                },
                Ce = i(function(e) {
                    var t = "__core-js_shared__",
                        s = e.exports = P[t] || Ie(t, {});
                    (s.versions || (s.versions = [])).push({
                        version: "3.50.0",
                        mode: "global",
                        copyright: "© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",
                        license: "https://github.com/zloirock/core-js/blob/v3.50.0/LICENSE",
                        source: "https://github.com/zloirock/core-js"
                    })
                }),
                we = Object.create || Object,
                Le = function(e, t) {
                    return Ce[e] || (Ce[e] = t || we(null))
                },
                Ae = Object,
                _e = Q({}.hasOwnProperty),
                Oe = Object.hasOwn || function(e, t) {
                    return _e(Ae(X(e)), t)
                },
                Te = 0,
                Ve = Math.random(),
                Pe = Q(1.1.toString),
                Re = function(e) {
                    return "Symbol(" + (void 0 === e ? "" : e) + ")_" + Pe(++Te + Ve, 36)
                },
                Ne = P.Symbol,
                De = Le("wks"),
                xe = ge ? Ne.for || Ne : Ne && Ne.withoutSetter || Re,
                Ue = function(e) {
                    return Oe(De, e) || (De[e] = fe && Oe(Ne, e) ? Ne[e] : xe("Symbol." + e)), De[e]
                },
                Fe = TypeError,
                ke = Ue("toPrimitive"),
                Me = function(e, t) {
                    if (!se(e) || ve(e)) return e;
                    var s, r, n = (s = e[ke], J(s) ? void 0 : function(e) {
                        if (te(e)) return e;
                        throw new be(function(e) {
                            try {
                                return ye(e)
                            } catch (e) {
                                return "Object"
                            }
                        }(e) + " is not a function")
                    }(s));
                    if (n) {
                        if (void 0 === t && (t = "default"), r = U(n, e, t), !se(r) || ve(r)) return r;
                        throw new Fe("Can't convert object to primitive value")
                    }
                    return void 0 === t && (t = "number"),
                        function(e, t) {
                            var s, r;
                            if ("string" === t && te(s = e.toString) && !se(r = U(s, e))) return r;
                            if (te(s = e.valueOf) && !se(r = U(s, e))) return r;
                            if ("string" !== t && te(s = e.toString) && !se(r = U(s, e))) return r;
                            throw new Ee("Can't convert object to primitive value")
                        }(e, t)
                },
                je = function(e) {
                    var t = Me(e, "string");
                    return ve(t) ? t : t + ""
                },
                Ge = P.document,
                He = se(Ge) && se(Ge.createElement),
                Be = function(e) {
                    return He ? Ge.createElement(e) : {}
                },
                Qe = !N && !R(function() {
                    return 7 !== Object.defineProperty(Be("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                }),
                $e = Object.getOwnPropertyDescriptor,
                We = {
                    f: N ? $e : function(e, t) {
                        if (e = Z(e), t = je(t), Qe) try {
                            return $e(e, t)
                        } catch (e) {}
                        if (Oe(e, t)) return j(!U(M.f, e, t), e[t])
                    }
                },
                ze = N && R(function() {
                    return 42 !== Object.defineProperty(function() {}, "prototype", {
                        value: 42,
                        writable: !1
                    }).prototype
                }),
                Ke = String,
                Ye = TypeError,
                Je = function(e) {
                    if (se(e)) return e;
                    throw new Ye(Ke(e) + " is not an object")
                },
                qe = TypeError,
                Xe = Object.defineProperty,
                Ze = Object.getOwnPropertyDescriptor,
                et = "enumerable",
                tt = "configurable",
                st = "writable",
                rt = {
                    f: N ? ze ? function(e, t, s) {
                        if (Je(e), t = je(t), Je(s), "function" == typeof e && "prototype" === t && "value" in s && st in s && !s[st]) {
                            var r = Ze(e, t);
                            r && r[st] && (e[t] = s.value, s = {
                                configurable: tt in s ? s[tt] : r[tt],
                                enumerable: et in s ? s[et] : r[et],
                                writable: !1
                            })
                        }
                        return Xe(e, t, s)
                    } : Xe : function(e, t, s) {
                        if (Je(e), t = je(t), Je(s), Qe) try {
                            return Xe(e, t, s)
                        } catch (e) {}
                        if ("get" in s || "set" in s) throw new qe("Accessors not supported");
                        return "value" in s && (e[t] = s.value), e
                    }
                },
                nt = N ? function(e, t, s) {
                    return rt.f(e, t, j(1, s))
                } : function(e, t, s) {
                    return e[t] = s, e
                },
                it = Function.prototype,
                ot = N && Object.getOwnPropertyDescriptor,
                at = Oe(it, "name"),
                ct = {
                    EXISTS: at,
                    PROPER: at && "something" === function() {}.name,
                    CONFIGURABLE: at && (!N || N && ot(it, "name").configurable)
                },
                ut = Q(Function.toString);
            te(Ce.inspectSource) || (Ce.inspectSource = function(e) {
                return ut(e)
            });
            var lt, pt, dt, ht = Ce.inspectSource,
                ft = P.WeakMap,
                gt = te(ft) && /native code/.test(String(ft)),
                mt = Le("keys"),
                vt = function(e) {
                    return mt[e] || (mt[e] = Re(e))
                },
                yt = {},
                bt = "Object already initialized",
                Et = P.TypeError,
                St = P.WeakMap;
            if (gt || Ce.state) {
                var It = Ce.state || (Ce.state = new St);
                It.get = It.get, It.has = It.has, It.set = It.set, lt = function(e, t) {
                    if (It.has(e)) throw new Et(bt);
                    return t.facade = e, It.set(e, t), t
                }, pt = function(e) {
                    return It.get(e) || {}
                }, dt = function(e) {
                    return It.has(e)
                }
            } else {
                var Ct = vt("state");
                yt[Ct] = !0, lt = function(e, t) {
                    if (Oe(e, Ct)) throw new Et(bt);
                    return t.facade = e, nt(e, Ct, t), t
                }, pt = function(e) {
                    return Oe(e, Ct) ? e[Ct] : {}
                }, dt = function(e) {
                    return Oe(e, Ct)
                }
            }
            var wt, Lt = {
                    set: lt,
                    get: pt,
                    has: dt,
                    enforce: function(e) {
                        return dt(e) ? pt(e) : lt(e, {})
                    },
                    getterFor: function(e) {
                        return function(t) {
                            var s;
                            if (!se(t) || (s = pt(t)).type !== e) throw new Et("Incompatible receiver, " + e + " required");
                            return s
                        }
                    }
                },
                At = i(function(e) {
                    var t = ct.CONFIGURABLE,
                        s = Lt.enforce,
                        r = Lt.get,
                        n = String,
                        i = Object.defineProperty,
                        o = Q("".slice),
                        a = Q("".replace),
                        c = Q([].join),
                        u = N && !R(function() {
                            return 8 !== i(function() {}, "length", {
                                value: 8
                            }).length
                        }),
                        l = String(String).split("String"),
                        p = e.exports = function(e, r, p) {
                            "Symbol(" === o(n(r), 0, 7) && (r = "[" + a(n(r), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), p && p.getter && (r = "get " + r), p && p.setter && (r = "set " + r), (!Oe(e, "name") || t && e.name !== r) && (N ? i(e, "name", {
                                value: r,
                                configurable: !0
                            }) : e.name = r), u && p && Oe(p, "arity") && e.length !== p.arity && i(e, "length", {
                                value: p.arity
                            });
                            try {
                                p && Oe(p, "constructor") && p.constructor ? N && i(e, "prototype", {
                                    writable: !1
                                }) : e.prototype && (e.prototype = void 0)
                            } catch (e) {}
                            var d = s(e);
                            return Oe(d, "source") || (d.source = c(l, "string" == typeof r ? r : "")), e
                        };
                    Function.prototype.toString = p(function() {
                        return te(this) && r(this).source || ht(this)
                    }, "toString")
                }),
                _t = function(e, t, s, r) {
                    r || (r = {});
                    var n = r.enumerable,
                        i = void 0 !== r.name ? r.name : t;
                    if (te(s) && At(s, i, r), r.global) n ? e[t] = s : Ie(t, s);
                    else {
                        try {
                            r.unsafe ? e[t] && (n = !0) : delete e[t]
                        } catch (e) {}
                        n ? e[t] = s : rt.f(e, t, {
                            value: s,
                            enumerable: !1,
                            configurable: !r.nonConfigurable,
                            writable: !r.nonWritable
                        })
                    }
                    return e
                },
                Ot = Math.ceil,
                Tt = Math.floor,
                Vt = Math.trunc || function(e) {
                    var t = +e;
                    return (t > 0 ? Tt : Ot)(t)
                },
                Pt = function(e) {
                    var t = +e;
                    return t != t || 0 === t ? 0 : Vt(t)
                },
                Rt = Math.max,
                Nt = Math.min,
                Dt = Math.min,
                xt = function(e) {
                    return function(t, s, r) {
                        var n, i, o = Z(t),
                            a = (n = o.length, (i = Pt(n)) > 0 ? Dt(i, 9007199254740991) : 0);
                        if (0 === a) return !e && -1;
                        var c, u = function(e, t) {
                            var s = Pt(e);
                            return s < 0 ? Rt(s + t, 0) : Nt(s, t)
                        }(r, a);
                        if (e && s != s) {
                            for (; a > u;)
                                if ((c = o[u++]) != c) return !0
                        } else
                            for (; a > u; u++)
                                if ((e || u in o) && o[u] === s) return e || u || 0;
                        return !e && -1
                    }
                },
                Ut = {
                    includes: xt(!0),
                    indexOf: xt(!1)
                },
                Ft = Ut.indexOf,
                kt = Q([].push),
                Mt = function(e, t) {
                    var s, r = Z(e),
                        n = 0,
                        i = [];
                    for (s in r) !Oe(yt, s) && Oe(r, s) && kt(i, s);
                    for (; t.length > n;) Oe(r, s = t[n++]) && (~Ft(i, s) || kt(i, s));
                    return i
                },
                jt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
                Gt = jt.concat("length", "prototype"),
                Ht = {
                    f: Object.getOwnPropertyNames || function(e) {
                        return Mt(e, Gt)
                    }
                },
                Bt = {
                    f: Object.getOwnPropertySymbols
                },
                Qt = Q([].concat),
                $t = re("Reflect", "ownKeys") || function(e) {
                    var t = Ht.f(Je(e)),
                        s = Bt.f;
                    return s ? Qt(t, s(e)) : t
                },
                Wt = function(e, t, s) {
                    for (var r = $t(t), n = rt.f, i = We.f, o = 0; o < r.length; o++) {
                        var a = r[o];
                        Oe(e, a) || s && Oe(s, a) || n(e, a, i(t, a))
                    }
                },
                zt = /#|\.prototype\./,
                Kt = function(e, t) {
                    var s = Jt[Yt(e)];
                    return s === Xt || s !== qt && (te(t) ? R(t) : !!t)
                },
                Yt = Kt.normalize = function(e) {
                    return String(e).replace(zt, ".").toLowerCase()
                },
                Jt = Kt.data = {},
                qt = Kt.NATIVE = "N",
                Xt = Kt.POLYFILL = "P",
                Zt = Kt,
                es = We.f,
                ts = Object.keys || function(e) {
                    return Mt(e, jt)
                },
                ss = N && !ze ? Object.defineProperties : function(e, t) {
                    Je(e);
                    for (var s, r = Z(t), n = ts(t), i = n.length, o = 0; i > o;) rt.f(e, s = n[o++], r[s]);
                    return e
                },
                rs = {
                    f: ss
                },
                ns = re("document", "documentElement"),
                is = "prototype",
                os = "script",
                as = vt("IE_PROTO"),
                cs = function() {},
                us = function(e) {
                    return "<" + os + ">" + e + "</" + os + ">"
                },
                ls = function(e) {
                    e.write(us("")), e.close();
                    var t = e.parentWindow.Object;
                    return e = null, t
                },
                ps = function() {
                    try {
                        wt = new ActiveXObject("htmlfile")
                    } catch (e) {}
                    var e, t, s;
                    ps = "undefined" != typeof document ? document.domain && wt ? ls(wt) : (t = Be("iframe"), s = "java" + os + ":", t.style.display = "none", ns.appendChild(t), t.src = String(s), (e = t.contentWindow.document).open(), e.write(us("document.F=Object")), e.close(), e.F) : ls(wt);
                    for (var r = jt.length; r--;) delete ps[is][jt[r]];
                    return ps()
                };
            yt[as] = !0;
            var ds = Object.create || function(e, t) {
                    var s;
                    return null !== e ? (cs[is] = Je(e), s = new cs, cs[is] = null, s[as] = e) : s = ps(), void 0 === t ? s : rs.f(s, t)
                },
                hs = rt.f,
                fs = Ue("unscopables"),
                gs = Array.prototype;
            void 0 === gs[fs] && hs(gs, fs, {
                configurable: !0,
                value: ds(null)
            });
            var ms, vs, ys, bs = Ut.includes,
                Es = R(function() {
                    return !Array(1).includes()
                }),
                Ss = R(function() {
                    return [, 1].includes(void 0, 1)
                });
            ! function(e, t) {
                var s, r, n, i, o, a = e.target,
                    c = e.global,
                    u = e.stat;
                if (s = c ? P : u ? P[a] || Ie(a, {}) : P[a] && P[a].prototype)
                    for (r in t) {
                        if (i = t[r], n = e.dontCallGetSet ? (o = es(s, r)) && o.value : s[r], !Zt(c ? r : a + (u ? "." : "#") + r, e.forced) && void 0 !== n) {
                            if (typeof i == typeof n) continue;
                            Wt(i, n)
                        }(e.sham || n && n.sham) && nt(i, "sham", !0), _t(s, r, i, e)
                    }
            }({
                target: "Array",
                proto: !0,
                forced: Es || Ss
            }, {
                includes: function(e) {
                    return bs(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), gs[fs].includes = !0;
            class Is extends A {
                bitLength = 0;
                map = new Map;
                gvl_;
                has(e) {
                    return this.map.has(e)
                }
                isOkToHave(e, t, s) {
                    let r = !0;
                    if (this.gvl ? .vendors) {
                        const n = this.gvl.vendors[s];
                        if (n)
                            if (e === v.NOT_ALLOWED) r = n.legIntPurposes.includes(t) || n.purposes.includes(t);
                            else if (n.flexiblePurposes.length) switch (e) {
                            case v.REQUIRE_CONSENT:
                                r = n.flexiblePurposes.includes(t) && n.legIntPurposes.includes(t);
                                break;
                            case v.REQUIRE_LI:
                                r = n.flexiblePurposes.includes(t) && n.purposes.includes(t)
                        } else r = !1;
                        else r = !1
                    }
                    return r
                }
                add(e, t) {
                    if (this.isOkToHave(t.restrictionType, t.purposeId, e)) {
                        const s = t.hash;
                        this.has(s) || (this.map.set(s, new Set), this.bitLength = 0), this.map.get(s).add(e)
                    }
                }
                restrictPurposeToLegalBasis(e) {
                    const t = Array.from(this.gvl.vendorIds),
                        s = e.hash,
                        r = t[t.length - 1],
                        n = [...Array(r).keys()].map(e => e + 1);
                    if (this.has(s))
                        for (let e = 1; e <= r; e++) this.map.get(s).add(e);
                    else this.map.set(s, new Set(n)), this.bitLength = 0
                }
                getVendors(e) {
                    let t = [];
                    if (e) {
                        const s = e.hash;
                        this.has(s) && (t = Array.from(this.map.get(s)))
                    } else {
                        const e = new Set;
                        this.map.forEach(t => {
                            t.forEach(t => {
                                e.add(t)
                            })
                        }), t = Array.from(e)
                    }
                    return t.sort((e, t) => e - t)
                }
                getRestrictionType(e, t) {
                    let s;
                    return this.getRestrictions(e).forEach(e => {
                        e.purposeId === t && (void 0 === s || s > e.restrictionType) && (s = e.restrictionType)
                    }), s
                }
                vendorHasRestriction(e, t) {
                    let s = !1;
                    const r = this.getRestrictions(e);
                    for (let e = 0; e < r.length && !s; e++) s = t.isSameAs(r[e]);
                    return s
                }
                getMaxVendorId() {
                    let e = 0;
                    return this.map.forEach(t => {
                        e = Math.max(Array.from(t)[t.size - 1], e)
                    }), e
                }
                getRestrictions(e) {
                    const t = [];
                    return this.map.forEach((s, r) => {
                        e ? s.has(e) && t.push(_.unHash(r)) : t.push(_.unHash(r))
                    }), t
                }
                getPurposes() {
                    const e = new Set;
                    return this.map.forEach((t, s) => {
                        e.add(_.unHash(s).purposeId)
                    }), Array.from(e)
                }
                remove(e, t) {
                    const s = t.hash,
                        r = this.map.get(s);
                    r && (r.delete(e), 0 == r.size && (this.map.delete(s), this.bitLength = 0))
                }
                set gvl(e) {
                    this.gvl_ || (this.gvl_ = e, this.map.forEach((e, t) => {
                        const s = _.unHash(t);
                        Array.from(e).forEach(t => {
                            this.isOkToHave(s.restrictionType, s.purposeId, t) || e.delete(t)
                        })
                    }))
                }
                get gvl() {
                    return this.gvl_
                }
                isEmpty() {
                    return 0 === this.map.size
                }
                get numRestrictions() {
                    return this.map.size
                }
            }! function(e) {
                e.COOKIE = "cookie", e.WEB = "web", e.APP = "app"
            }(ms || (ms = {})),
            function(e) {
                e.CORE = "core", e.VENDORS_DISCLOSED = "vendorsDisclosed", e.VENDORS_ALLOWED = "vendorsAllowed", e.PUBLISHER_TC = "publisherTC"
            }(vs || (vs = {}));
            class Cs {
                static ID_TO_KEY = [vs.CORE, vs.VENDORS_DISCLOSED, vs.VENDORS_ALLOWED, vs.PUBLISHER_TC];
                static KEY_TO_ID = {
                    [vs.CORE]: 0,
                    [vs.VENDORS_DISCLOSED]: 1,
                    [vs.VENDORS_ALLOWED]: 2,
                    [vs.PUBLISHER_TC]: 3
                }
            }
            class ws extends A {
                bitLength = 0;
                maxId_ = 0;
                set_ = new Set;*[Symbol.iterator]() {
                    for (let e = 1; e <= this.maxId; e++) yield [e, this.has(e)]
                }
                values() {
                    return this.set_.values()
                }
                get maxId() {
                    return this.maxId_
                }
                has(e) {
                    return this.set_.has(e)
                }
                unset(e) {
                    Array.isArray(e) ? e.forEach(e => this.unset(e)) : "object" == typeof e ? this.unset(Object.keys(e).map(e => Number(e))) : (this.set_.delete(Number(e)), this.bitLength = 0, e === this.maxId && (this.maxId_ = 0, this.set_.forEach(e => {
                        this.maxId_ = Math.max(this.maxId, e)
                    })))
                }
                isIntMap(e) {
                    let t = "object" == typeof e;
                    return t = t && Object.keys(e).every(t => {
                        let s = Number.isInteger(parseInt(t, 10));
                        return s = s && this.isValidNumber(e[t].id), s = s && void 0 !== e[t].name, s
                    }), t
                }
                isValidNumber(e) {
                    return parseInt(e, 10) > 0
                }
                isSet(e) {
                    let t = !1;
                    return e instanceof Set && (t = Array.from(e).every(this.isValidNumber)), t
                }
                set(e) {
                    if (Array.isArray(e)) e.forEach(e => this.set(e));
                    else if (this.isSet(e)) this.set(Array.from(e));
                    else if (this.isIntMap(e)) this.set(Object.keys(e).map(e => Number(e)));
                    else {
                        if (!this.isValidNumber(e)) throw new I("set()", e, "must be positive integer array, positive integer, Set<number>, or IntMap");
                        this.set_.add(e), this.maxId_ = Math.max(this.maxId, e), this.bitLength = 0
                    }
                }
                empty() {
                    this.set_ = new Set, this.maxId_ = 0
                }
                forEach(e) {
                    for (let t = 1; t <= this.maxId; t++) e(this.has(t), t)
                }
                get size() {
                    return this.set_.size
                }
                setAll(e) {
                    this.set(e)
                }
                unsetAll(e) {
                    this.unset(e)
                }
            }
            class Ls {
                static[L.cmpId] = 12;
                static[L.cmpVersion] = 12;
                static[L.consentLanguage] = 12;
                static[L.consentScreen] = 6;
                static[L.created] = 36;
                static[L.isServiceSpecific] = 1;
                static[L.lastUpdated] = 36;
                static[L.policyVersion] = 6;
                static[L.publisherCountryCode] = 12;
                static[L.publisherLegitimateInterests] = 24;
                static[L.publisherConsents] = 24;
                static[L.purposeConsents] = 24;
                static[L.purposeLegitimateInterests] = 24;
                static[L.purposeOneTreatment] = 1;
                static[L.specialFeatureOptins] = 12;
                static[L.useNonStandardTexts] = 1;
                static[L.vendorListVersion] = 12;
                static[L.version] = 6;
                static anyBoolean = 1;
                static encodingType = 1;
                static maxId = 16;
                static numCustomPurposes = 6;
                static numEntries = 12;
                static numRestrictions = 12;
                static purposeId = 6;
                static restrictionType = 2;
                static segmentType = 3;
                static singleOrRange = 1;
                static vendorId = 16
            }
            class As {
                static encode(e) {
                    return String(Number(e))
                }
                static decode(e) {
                    return "1" === e
                }
            }
            class _s {
                static encode(e, t) {
                    let s;
                    if ("string" == typeof e && (e = parseInt(e, 10)), s = e.toString(2), s.length > t || e < 0) throw new E(`${e} too large to encode into ${t}`);
                    return s.length < t && (s = "0".repeat(t - s.length) + s), s
                }
                static decode(e, t) {
                    if (t !== e.length) throw new b("invalid bit length");
                    return parseInt(e, 2)
                }
            }
            class Os {
                static encode(e, t) {
                    return _s.encode(Math.round(e.getTime() / 100), t)
                }
                static decode(e, t) {
                    if (t !== e.length) throw new b("invalid bit length");
                    const s = new Date;
                    return s.setTime(100 * _s.decode(e, t)), s
                }
            }
            class Ts {
                static encode(e, t) {
                    let s = "";
                    for (let r = 1; r <= t; r++) s += As.encode(e.has(r));
                    return s
                }
                static decode(e, t) {
                    if (e.length !== t) throw new b("bitfield encoding length mismatch");
                    const s = new ws;
                    for (let r = 1; r <= t; r++) As.decode(e[r - 1]) && s.set(r);
                    return s.bitLength = e.length, s
                }
            }
            class Vs {
                static encode(e, t) {
                    const s = (e = e.toUpperCase()).charCodeAt(0) - 65,
                        r = e.charCodeAt(1) - 65;
                    if (s < 0 || s > 25 || r < 0 || r > 25) throw new E(`invalid language code: ${e}`);
                    if (t % 2 == 1) throw new E(`numBits must be even, ${t} is not valid`);
                    return t /= 2, _s.encode(s, t) + _s.encode(r, t)
                }
                static decode(e, t) {
                    let s;
                    if (t !== e.length || e.length % 2) throw new b("invalid bit length for language"); {
                        const t = 65,
                            r = e.length / 2,
                            n = _s.decode(e.slice(0, r), r) + t,
                            i = _s.decode(e.slice(r), r) + t;
                        s = String.fromCharCode(n) + String.fromCharCode(i)
                    }
                    return s
                }
            }
            class Ps {
                static encode(e) {
                    let t = _s.encode(e.numRestrictions, Ls.numRestrictions);
                    if (!e.isEmpty()) {
                        const s = (t, s) => {
                            for (let r = t + 1; r <= s; r++)
                                if (e.gvl.vendorIds.has(r)) return r;
                            return t
                        };
                        e.getRestrictions().forEach(r => {
                            t += _s.encode(r.purposeId, Ls.purposeId), t += _s.encode(r.restrictionType, Ls.restrictionType);
                            const n = e.getVendors(r),
                                i = n.length;
                            let o = 0,
                                a = 0,
                                c = "";
                            for (let e = 0; e < i; e++) {
                                const t = n[e];
                                if (0 === a && (o++, a = t), e === i - 1 || n[e + 1] > s(t, n[i - 1])) {
                                    const e = !(t === a);
                                    c += As.encode(e), c += _s.encode(a, Ls.vendorId), e && (c += _s.encode(t, Ls.vendorId)), a = 0
                                }
                            }
                            t += _s.encode(o, Ls.numEntries), t += c
                        })
                    }
                    return t
                }
                static decode(e) {
                    let t = 0;
                    const s = new Is,
                        r = _s.decode(e.substr(t, Ls.numRestrictions), Ls.numRestrictions);
                    t += Ls.numRestrictions;
                    for (let n = 0; n < r; n++) {
                        const r = _s.decode(e.substr(t, Ls.purposeId), Ls.purposeId);
                        t += Ls.purposeId;
                        const n = _s.decode(e.substr(t, Ls.restrictionType), Ls.restrictionType);
                        t += Ls.restrictionType;
                        const i = new _(r, n),
                            o = _s.decode(e.substr(t, Ls.numEntries), Ls.numEntries);
                        t += Ls.numEntries;
                        for (let r = 0; r < o; r++) {
                            const r = As.decode(e.substr(t, Ls.anyBoolean));
                            t += Ls.anyBoolean;
                            const n = _s.decode(e.substr(t, Ls.vendorId), Ls.vendorId);
                            if (t += Ls.vendorId, r) {
                                const r = _s.decode(e.substr(t, Ls.vendorId), Ls.vendorId);
                                if (t += Ls.vendorId, r < n) throw new b(`Invalid RangeEntry: endVendorId ${r} is less than ${n}`);
                                for (let e = n; e <= r; e++) s.add(e, i)
                            } else s.add(n, i)
                        }
                    }
                    return s.bitLength = t, s
                }
            }! function(e) {
                e[e.FIELD = 0] = "FIELD", e[e.RANGE = 1] = "RANGE"
            }(ys || (ys = {}));
            class Rs {
                static encode(e) {
                    const t = [];
                    let s, r = [],
                        n = _s.encode(e.maxId, Ls.maxId),
                        i = "";
                    const o = Ls.maxId + Ls.encodingType,
                        a = o + e.maxId,
                        c = 2 * Ls.vendorId + Ls.singleOrRange + Ls.numEntries;
                    let u = o + Ls.numEntries;
                    return e.forEach((n, o) => {
                        i += As.encode(n), s = e.maxId > c && u < a, s && n && (e.has(o + 1) ? 0 === r.length && (r.push(o), u += Ls.singleOrRange, u += Ls.vendorId) : (r.push(o), u += Ls.vendorId, t.push(r), r = []))
                    }), s ? (n += String(ys.RANGE), n += this.buildRangeEncoding(t)) : (n += String(ys.FIELD), n += i), n
                }
                static decode(e, t) {
                    let s, r = 0;
                    const n = _s.decode(e.substr(r, Ls.maxId), Ls.maxId);
                    r += Ls.maxId;
                    const i = _s.decode(e.charAt(r), Ls.encodingType);
                    if (r += Ls.encodingType, i === ys.RANGE) {
                        if (s = new ws, 1 === t) {
                            if ("1" === e.substr(r, 1)) throw new b("Unable to decode default consent=1");
                            r++
                        }
                        const n = _s.decode(e.substr(r, Ls.numEntries), Ls.numEntries);
                        r += Ls.numEntries;
                        for (let t = 0; t < n; t++) {
                            const t = As.decode(e.charAt(r));
                            r += Ls.singleOrRange;
                            const n = _s.decode(e.substr(r, Ls.vendorId), Ls.vendorId);
                            if (r += Ls.vendorId, t) {
                                const t = _s.decode(e.substr(r, Ls.vendorId), Ls.vendorId);
                                r += Ls.vendorId;
                                for (let e = n; e <= t; e++) s.set(e)
                            } else s.set(n)
                        }
                    } else {
                        const t = e.substr(r, n);
                        r += n, s = Ts.decode(t, n)
                    }
                    return s.bitLength = r, s
                }
                static buildRangeEncoding(e) {
                    const t = e.length;
                    let s = _s.encode(t, Ls.numEntries);
                    return e.forEach(e => {
                        const t = 1 === e.length;
                        s += As.encode(!t), s += _s.encode(e[0], Ls.vendorId), t || (s += _s.encode(e[1], Ls.vendorId))
                    }), s
                }
            }

            function Ns() {
                return {
                    [L.version]: _s,
                    [L.created]: Os,
                    [L.lastUpdated]: Os,
                    [L.cmpId]: _s,
                    [L.cmpVersion]: _s,
                    [L.consentScreen]: _s,
                    [L.consentLanguage]: Vs,
                    [L.vendorListVersion]: _s,
                    [L.policyVersion]: _s,
                    [L.isServiceSpecific]: As,
                    [L.useNonStandardTexts]: As,
                    [L.specialFeatureOptins]: Ts,
                    [L.purposeConsents]: Ts,
                    [L.purposeLegitimateInterests]: Ts,
                    [L.purposeOneTreatment]: As,
                    [L.publisherCountryCode]: Vs,
                    [L.vendorConsents]: Rs,
                    [L.vendorLegitimateInterests]: Rs,
                    [L.publisherRestrictions]: Ps,
                    segmentType: _s,
                    [L.vendorsDisclosed]: Rs,
                    [L.vendorsAllowed]: Rs,
                    [L.publisherConsents]: Ts,
                    [L.publisherLegitimateInterests]: Ts,
                    [L.numCustomPurposes]: _s,
                    [L.publisherCustomConsents]: Ts,
                    [L.publisherCustomLegitimateInterests]: Ts
                }
            }
            class Ds {
                1 = {
                    [vs.CORE]: [L.version, L.created, L.lastUpdated, L.cmpId, L.cmpVersion, L.consentScreen, L.consentLanguage, L.vendorListVersion, L.purposeConsents, L.vendorConsents]
                };
                2 = {
                    [vs.CORE]: [L.version, L.created, L.lastUpdated, L.cmpId, L.cmpVersion, L.consentScreen, L.consentLanguage, L.vendorListVersion, L.policyVersion, L.isServiceSpecific, L.useNonStandardTexts, L.specialFeatureOptins, L.purposeConsents, L.purposeLegitimateInterests, L.purposeOneTreatment, L.publisherCountryCode, L.vendorConsents, L.vendorLegitimateInterests, L.publisherRestrictions],
                    [vs.VENDORS_DISCLOSED]: [L.vendorsDisclosed],
                    [vs.PUBLISHER_TC]: [L.publisherConsents, L.publisherLegitimateInterests, L.numCustomPurposes, L.publisherCustomConsents, L.publisherCustomLegitimateInterests],
                    [vs.VENDORS_ALLOWED]: [L.vendorsAllowed]
                }
            }
            class xs {
                1 = [vs.CORE];
                2 = [vs.CORE];
                constructor(e, t) {
                    if (2 === e.version)
                        if (e.isServiceSpecific) this[2].push(vs.VENDORS_DISCLOSED), this[2].push(vs.PUBLISHER_TC);
                        else {
                            const s = !(!t || !t.isForVendors);
                            s && !0 !== e[L.supportOOB] || this[2].push(vs.VENDORS_DISCLOSED), s && (e[L.supportOOB] && e[L.vendorsAllowed].size > 0 && this[2].push(vs.VENDORS_ALLOWED), this[2].push(vs.PUBLISHER_TC))
                        }
                }
            }
            class Us {
                static fieldSequence = new Ds;
                static encode(e, t) {
                    let s;
                    try {
                        s = this.fieldSequence[String(e.version)][t]
                    } catch (s) {
                        throw new E(`Unable to encode version: ${e.version}, segment: ${t}`)
                    }
                    let r = "";
                    t !== vs.CORE && (r = _s.encode(Cs.KEY_TO_ID[t], Ls.segmentType));
                    const n = Ns();
                    return s.forEach(s => {
                        const i = e[s],
                            o = n[s];
                        let a = Ls[s];
                        void 0 === a && this.isPublisherCustom(s) && (a = Number(e[L.numCustomPurposes]));
                        try {
                            r += o.encode(i, a)
                        } catch (e) {
                            throw new E(`Error encoding ${t}->${s}: ${e.message}`)
                        }
                    }), C.encode(r)
                }
                static decode(e, t, s) {
                    const r = C.decode(e);
                    let n = 0;
                    s === vs.CORE && (t.version = _s.decode(r.substr(n, Ls[L.version]), Ls[L.version])), s !== vs.CORE && (n += Ls.segmentType);
                    const i = this.fieldSequence[String(t.version)][s],
                        o = Ns();
                    return i.forEach(e => {
                        const s = o[e];
                        let i = Ls[e];
                        if (void 0 === i && this.isPublisherCustom(e) && (i = Number(t[L.numCustomPurposes])), 0 !== i) {
                            const o = r.substr(n, i);
                            if (t[e] = s === Rs ? s.decode(o, t.version) : s.decode(o, i), Number.isInteger(i)) n += i;
                            else {
                                if (!Number.isInteger(t[e].bitLength)) throw new b(e);
                                n += t[e].bitLength
                            }
                        }
                    }), t
                }
                static isPublisherCustom(e) {
                    return 0 === e.indexOf("publisherCustom")
                }
            }
            class Fs {
                static processor = [e => e, (e, t) => {
                    e.publisherRestrictions.gvl = t, e.purposeLegitimateInterests.unset([1, 3, 4, 5, 6]);
                    const s = new Map;
                    return s.set("legIntPurposes", e.vendorLegitimateInterests), s.set("purposes", e.vendorConsents), s.forEach((s, r) => {
                        s.forEach((n, i) => {
                            if (n) {
                                const n = t.vendors[i];
                                if (!n || n.deletedDate) s.unset(i);
                                else if (0 === n[r].length)
                                    if (e.isServiceSpecific)
                                        if (0 === n.flexiblePurposes.length) s.unset(i);
                                        else {
                                            const t = e.publisherRestrictions.getRestrictions(i);
                                            let n = !1;
                                            for (let e = 0, s = t.length; e < s && !n; e++) n = t[e].restrictionType === v.REQUIRE_CONSENT && "purposes" === r || t[e].restrictionType === v.REQUIRE_LI && "legIntPurposes" === r;
                                            n || s.unset(i)
                                        }
                                else s.unset(i)
                            }
                        })
                    }), e
                }];
                static process(e, t) {
                    const s = e.gvl;
                    if (!s) throw new E("Unable to encode TCModel without a GVL");
                    if (!s.isReady) throw new E("Unable to encode TCModel tcModel.gvl.readyPromise is not resolved");
                    (e = e.clone()).consentLanguage = s.language.slice(0, 2).toUpperCase(), t ? .version > 0 && t ? .version <= this.processor.length ? e.version = t.version : e.version = this.processor.length;
                    const r = e.version - 1;
                    if (!this.processor[r]) throw new E(`Invalid version: ${e.version}`);
                    return this.processor[r](e, s)
                }
            }
            class ks {
                static absCall(e, t, s, r) {
                    return new Promise((n, i) => {
                        const o = new XMLHttpRequest;
                        o.withCredentials = s, o.addEventListener("load", () => {
                            if (o.readyState == XMLHttpRequest.DONE)
                                if (o.status >= 200 && o.status < 300) {
                                    let e = o.response;
                                    if ("string" == typeof e) try {
                                        e = JSON.parse(e)
                                    } catch (e) {}
                                    n(e)
                                } else i(new Error(`HTTP Status: ${o.status} response type: ${o.responseType}`))
                        }), o.addEventListener("error", () => {
                            i(new Error("error"))
                        }), o.addEventListener("abort", () => {
                            i(new Error("aborted"))
                        }), null === t ? o.open("GET", e, !0) : o.open("POST", e, !0), o.responseType = "json", o.timeout = r, o.ontimeout = () => {
                            i(new Error("Timeout " + r + "ms " + e))
                        }, o.send(t)
                    })
                }
                static post(e, t, s = !1, r = 0) {
                    return this.absCall(e, JSON.stringify(t), s, r)
                }
                static fetch(e, t = !1, s = 0) {
                    return this.absCall(e, null, t, s)
                }
            }
            class Ms extends A {
                static LANGUAGE_CACHE = new Map;
                static CACHE = new Map;
                static LATEST_CACHE_KEY = 0;
                static DEFAULT_LANGUAGE = "EN";
                static consentLanguages = new w;
                static baseUrl_;
                static set baseUrl(e) {
                    if (/^https?:\/\/vendorlist\.consensu\.org\//.test(e)) throw new S("Invalid baseUrl!  You may not pull directly from vendorlist.consensu.org and must provide your own cache");
                    e.length > 0 && "/" !== e[e.length - 1] && (e += "/"), this.baseUrl_ = e
                }
                static get baseUrl() {
                    return this.baseUrl_
                }
                static latestFilename = "vendor-list.json";
                static versionedFilename = "archives/vendor-list-v[VERSION].json";
                static languageFilename = "purposes-[LANG].json";
                readyPromise;
                gvlSpecificationVersion;
                vendorListVersion;
                tcfPolicyVersion;
                lastUpdated;
                purposes;
                specialPurposes;
                features;
                specialFeatures;
                isReady_ = !1;
                vendors_;
                vendorIds;
                fullVendorList;
                byPurposeVendorMap;
                bySpecialPurposeVendorMap;
                byFeatureVendorMap;
                bySpecialFeatureVendorMap;
                stacks;
                dataCategories;
                standardTexts;
                lang_;
                cacheLang_;
                isLatest = !1;
                constructor(e, t) {
                    super();
                    let s = Ms.baseUrl,
                        r = t ? .language;
                    if (r) try {
                        r = Ms.consentLanguages.parseLanguage(r)
                    } catch (e) {
                        throw new S("Error during parsing the language: " + e.message)
                    }
                    if (this.lang_ = r || Ms.DEFAULT_LANGUAGE, this.cacheLang_ = r || Ms.DEFAULT_LANGUAGE, this.isVendorList(e)) this.populate(e), this.readyPromise = Promise.resolve();
                    else {
                        if (!s) throw new S("must specify GVL.baseUrl before loading GVL json");
                        if (e > 0) {
                            const t = e;
                            Ms.CACHE.has(t) ? (this.populate(Ms.CACHE.get(t)), this.readyPromise = Promise.resolve()) : (s += Ms.versionedFilename.replace("[VERSION]", String(t)), this.readyPromise = this.fetchJson(s))
                        } else Ms.CACHE.has(Ms.LATEST_CACHE_KEY) ? (this.populate(Ms.CACHE.get(Ms.LATEST_CACHE_KEY)), this.readyPromise = Promise.resolve()) : (this.isLatest = !0, this.readyPromise = this.fetchJson(s + Ms.latestFilename))
                    }
                }
                static emptyLanguageCache(e) {
                    let t = !1;
                    return null == e && Ms.LANGUAGE_CACHE.size > 0 ? (Ms.LANGUAGE_CACHE = new Map, t = !0) : "string" == typeof e && this.consentLanguages.has(e.toUpperCase()) && (Ms.LANGUAGE_CACHE.delete(e.toUpperCase()), t = !0), t
                }
                static emptyCache(e) {
                    let t = !1;
                    return Number.isInteger(e) && e >= 0 ? (Ms.CACHE.delete(e), t = !0) : void 0 === e && (Ms.CACHE = new Map, t = !0), t
                }
                cacheLanguage() {
                    Ms.LANGUAGE_CACHE.has(this.cacheLang_) || Ms.LANGUAGE_CACHE.set(this.cacheLang_, {
                        purposes: this.purposes,
                        specialPurposes: this.specialPurposes,
                        features: this.features,
                        specialFeatures: this.specialFeatures,
                        stacks: this.stacks,
                        dataCategories: this.dataCategories,
                        standardTexts: this.standardTexts
                    })
                }
                async fetchJson(e) {
                    try {
                        this.populate(await ks.fetch(e, !1, 5e3))
                    } catch (e) {
                        throw new S(e.message)
                    }
                }
                getJson() {
                    return {
                        gvlSpecificationVersion: this.gvlSpecificationVersion,
                        vendorListVersion: this.vendorListVersion,
                        tcfPolicyVersion: this.tcfPolicyVersion,
                        lastUpdated: this.lastUpdated,
                        purposes: this.clonePurposes(),
                        specialPurposes: this.cloneSpecialPurposes(),
                        features: this.cloneFeatures(),
                        specialFeatures: this.cloneSpecialFeatures(),
                        ...this.standardTexts ? {
                            standardTexts: this.standardTexts
                        } : {},
                        stacks: this.cloneStacks(),
                        ...this.dataCategories ? {
                            dataCategories: this.cloneDataCategories()
                        } : {},
                        vendors: this.cloneVendors()
                    }
                }
                cloneSpecialFeatures() {
                    const e = {};
                    for (const t of Object.keys(this.specialFeatures)) e[t] = Ms.cloneFeature(this.specialFeatures[t]);
                    return e
                }
                cloneFeatures() {
                    const e = {};
                    for (const t of Object.keys(this.features)) e[t] = Ms.cloneFeature(this.features[t]);
                    return e
                }
                cloneStacks() {
                    const e = {};
                    for (const t of Object.keys(this.stacks)) e[t] = Ms.cloneStack(this.stacks[t]);
                    return e
                }
                cloneDataCategories() {
                    const e = {};
                    for (const t of Object.keys(this.dataCategories)) e[t] = Ms.cloneDataCategory(this.dataCategories[t]);
                    return e
                }
                cloneSpecialPurposes() {
                    const e = {};
                    for (const t of Object.keys(this.specialPurposes)) e[t] = Ms.clonePurpose(this.specialPurposes[t]);
                    return e
                }
                clonePurposes() {
                    const e = {};
                    for (const t of Object.keys(this.purposes)) e[t] = Ms.clonePurpose(this.purposes[t]);
                    return e
                }
                static clonePurpose(e) {
                    return {
                        id: e.id,
                        name: e.name,
                        description: e.description,
                        ...e.descriptionLegal ? {
                            descriptionLegal: e.descriptionLegal
                        } : {},
                        ...e.illustrations ? {
                            illustrations: Array.from(e.illustrations)
                        } : {}
                    }
                }
                static cloneFeature(e) {
                    return {
                        id: e.id,
                        name: e.name,
                        description: e.description,
                        ...e.descriptionLegal ? {
                            descriptionLegal: e.descriptionLegal
                        } : {},
                        ...e.illustrations ? {
                            illustrations: Array.from(e.illustrations)
                        } : {}
                    }
                }
                static cloneDataCategory(e) {
                    return {
                        id: e.id,
                        name: e.name,
                        description: e.description
                    }
                }
                static cloneStack(e) {
                    return {
                        id: e.id,
                        name: e.name,
                        description: e.description,
                        purposes: Array.from(e.purposes),
                        specialFeatures: Array.from(e.specialFeatures)
                    }
                }
                static cloneDataRetention(e) {
                    return { ..."number" == typeof e.stdRetention ? {
                            stdRetention: e.stdRetention
                        } : {},
                        purposes: { ...e.purposes
                        },
                        specialPurposes: { ...e.specialPurposes
                        }
                    }
                }
                static cloneVendorUrls(e) {
                    return e.map(e => ({
                        langId: e.langId,
                        privacy: e.privacy,
                        ...e.legIntClaim ? {
                            legIntClaim: e.legIntClaim
                        } : {}
                    }))
                }
                static cloneVendor(e) {
                    return {
                        id: e.id,
                        name: e.name,
                        purposes: Array.from(e.purposes),
                        legIntPurposes: Array.from(e.legIntPurposes),
                        flexiblePurposes: Array.from(e.flexiblePurposes),
                        specialPurposes: Array.from(e.specialPurposes),
                        features: Array.from(e.features),
                        specialFeatures: Array.from(e.specialFeatures),
                        ...e.overflow ? {
                            overflow: {
                                httpGetLimit: e.overflow.httpGetLimit
                            }
                        } : {},
                        ..."number" == typeof e.cookieMaxAgeSeconds || null === e.cookieMaxAgeSeconds ? {
                            cookieMaxAgeSeconds: e.cookieMaxAgeSeconds
                        } : {},
                        ...void 0 !== e.usesCookies ? {
                            usesCookies: e.usesCookies
                        } : {},
                        ...e.policyUrl ? {
                            policyUrl: e.policyUrl
                        } : {},
                        ...void 0 !== e.cookieRefresh ? {
                            cookieRefresh: e.cookieRefresh
                        } : {},
                        ...void 0 !== e.usesNonCookieAccess ? {
                            usesNonCookieAccess: e.usesNonCookieAccess
                        } : {},
                        ...e.dataRetention ? {
                            dataRetention: this.cloneDataRetention(e.dataRetention)
                        } : {},
                        ...e.urls ? {
                            urls: this.cloneVendorUrls(e.urls)
                        } : {},
                        ...e.dataDeclaration ? {
                            dataDeclaration: Array.from(e.dataDeclaration)
                        } : {},
                        ...e.deviceStorageDisclosureUrl ? {
                            deviceStorageDisclosureUrl: e.deviceStorageDisclosureUrl
                        } : {},
                        ...e.deletedDate ? {
                            deletedDate: e.deletedDate
                        } : {}
                    }
                }
                cloneVendors() {
                    const e = {};
                    for (const t of Object.keys(this.fullVendorList)) e[t] = Ms.cloneVendor(this.fullVendorList[t]);
                    return e
                }
                async changeLanguage(e) {
                    let t = e;
                    try {
                        t = Ms.consentLanguages.parseLanguage(e)
                    } catch (e) {
                        throw new S("Error during parsing the language: " + e.message)
                    }
                    const s = e.toUpperCase();
                    if ((t.toLowerCase() !== Ms.DEFAULT_LANGUAGE.toLowerCase() || Ms.LANGUAGE_CACHE.has(s)) && t !== this.lang_)
                        if (this.lang_ = t, Ms.LANGUAGE_CACHE.has(s)) {
                            const e = Ms.LANGUAGE_CACHE.get(s);
                            for (const t in e) e.hasOwnProperty(t) && (this[t] = e[t])
                        } else {
                            const e = Ms.baseUrl + Ms.languageFilename.replace("[LANG]", this.lang_.toLowerCase());
                            try {
                                await this.fetchJson(e), this.cacheLang_ = s, this.cacheLanguage()
                            } catch (e) {
                                throw new S("unable to load language: " + e.message)
                            }
                        }
                }
                get language() {
                    return this.lang_
                }
                isVendorList(e) {
                    return void 0 !== e && void 0 !== e.vendors
                }
                populate(e) {
                    this.purposes = e.purposes, this.specialPurposes = e.specialPurposes, this.features = e.features, this.specialFeatures = e.specialFeatures, this.standardTexts = e.standardTexts, this.stacks = e.stacks, this.dataCategories = e.dataCategories, this.isVendorList(e) && (this.gvlSpecificationVersion = e.gvlSpecificationVersion, this.tcfPolicyVersion = e.tcfPolicyVersion, this.vendorListVersion = e.vendorListVersion, this.lastUpdated = e.lastUpdated, "string" == typeof this.lastUpdated && (this.lastUpdated = new Date(this.lastUpdated)), this.vendors_ = e.vendors, this.fullVendorList = e.vendors, this.mapVendors(), this.isReady_ = !0, this.isLatest && Ms.CACHE.set(Ms.LATEST_CACHE_KEY, this.getJson()), Ms.CACHE.has(this.vendorListVersion) || Ms.CACHE.set(this.vendorListVersion, this.getJson())), this.cacheLanguage()
                }
                mapVendors(e) {
                    this.byPurposeVendorMap = {}, this.bySpecialPurposeVendorMap = {}, this.byFeatureVendorMap = {}, this.bySpecialFeatureVendorMap = {}, Object.keys(this.purposes).forEach(e => {
                        this.byPurposeVendorMap[e] = {
                            legInt: new Set,
                            consent: new Set,
                            flexible: new Set
                        }
                    }), Object.keys(this.specialPurposes).forEach(e => {
                        this.bySpecialPurposeVendorMap[e] = new Set
                    }), Object.keys(this.features).forEach(e => {
                        this.byFeatureVendorMap[e] = new Set
                    }), Object.keys(this.specialFeatures).forEach(e => {
                        this.bySpecialFeatureVendorMap[e] = new Set
                    }), Array.isArray(e) || (e = Object.keys(this.fullVendorList).map(e => +e)), this.vendorIds = new Set(e), this.vendors_ = e.reduce((e, t) => {
                        const s = this.vendors_[String(t)];
                        return s && void 0 === s.deletedDate && (s.purposes.forEach(e => {
                            this.byPurposeVendorMap[String(e)].consent.add(t)
                        }), s.specialPurposes.forEach(e => {
                            this.bySpecialPurposeVendorMap[String(e)].add(t)
                        }), s.legIntPurposes.forEach(e => {
                            this.byPurposeVendorMap[String(e)].legInt.add(t)
                        }), s.flexiblePurposes && s.flexiblePurposes.forEach(e => {
                            this.byPurposeVendorMap[String(e)].flexible.add(t)
                        }), s.features.forEach(e => {
                            this.byFeatureVendorMap[String(e)].add(t)
                        }), s.specialFeatures.forEach(e => {
                            this.bySpecialFeatureVendorMap[String(e)].add(t)
                        }), e[t] = s), e
                    }, {})
                }
                getFilteredVendors(e, t, s, r) {
                    const n = e.charAt(0).toUpperCase() + e.slice(1);
                    let i;
                    const o = {};
                    return i = "purpose" === e && s ? this["by" + n + "VendorMap"][String(t)][s] : this["by" + (r ? "Special" : "") + n + "VendorMap"][String(t)], i.forEach(e => {
                        o[String(e)] = this.vendors[String(e)]
                    }), o
                }
                getVendorsWithConsentPurpose(e) {
                    return this.getFilteredVendors("purpose", e, "consent")
                }
                getVendorsWithLegIntPurpose(e) {
                    return this.getFilteredVendors("purpose", e, "legInt")
                }
                getVendorsWithFlexiblePurpose(e) {
                    return this.getFilteredVendors("purpose", e, "flexible")
                }
                getVendorsWithSpecialPurpose(e) {
                    return this.getFilteredVendors("purpose", e, void 0, !0)
                }
                getVendorsWithFeature(e) {
                    return this.getFilteredVendors("feature", e)
                }
                getVendorsWithSpecialFeature(e) {
                    return this.getFilteredVendors("feature", e, void 0, !0)
                }
                get vendors() {
                    return this.vendors_
                }
                narrowVendorsTo(e) {
                    this.mapVendors(e)
                }
                get isReady() {
                    return this.isReady_
                }
                clone() {
                    const e = new Ms(this.getJson());
                    return this.lang_ !== Ms.DEFAULT_LANGUAGE && e.changeLanguage(this.lang_), e
                }
                static isInstanceOf(e) {
                    return "object" == typeof e && "function" == typeof e.narrowVendorsTo
                }
            }
            class js extends A {
                static consentLanguages = Ms.consentLanguages;
                isServiceSpecific_ = !0;
                supportOOB_ = !1;
                useNonStandardTexts_ = !1;
                purposeOneTreatment_ = !1;
                publisherCountryCode_ = "AA";
                version_ = 2;
                consentScreen_ = 0;
                policyVersion_ = 5;
                consentLanguage_ = "EN";
                cmpId_ = 0;
                cmpVersion_ = 0;
                vendorListVersion_ = 0;
                numCustomPurposes_ = 0;
                gvl_;
                created;
                lastUpdated;
                specialFeatureOptins = new ws;
                purposeConsents = new ws;
                purposeLegitimateInterests = new ws;
                publisherConsents = new ws;
                publisherLegitimateInterests = new ws;
                publisherCustomConsents = new ws;
                publisherCustomLegitimateInterests = new ws;
                customPurposes;
                vendorConsents = new ws;
                vendorLegitimateInterests = new ws;
                vendorsDisclosed = new ws;
                vendorsAllowed = new ws;
                publisherRestrictions = new Is;
                constructor(e) {
                    super(), e && (this.gvl = e), this.updated()
                }
                set gvl(e) {
                    Ms.isInstanceOf(e) || (e = new Ms(e)), this.gvl_ = e, this.publisherRestrictions.gvl = e
                }
                get gvl() {
                    return this.gvl_
                }
                set cmpId(e) {
                    if (e = Number(e), !(Number.isInteger(e) && e > 1)) throw new I("cmpId", e);
                    this.cmpId_ = e
                }
                get cmpId() {
                    return this.cmpId_
                }
                set cmpVersion(e) {
                    if (e = Number(e), !(Number.isInteger(e) && e > -1)) throw new I("cmpVersion", e);
                    this.cmpVersion_ = e
                }
                get cmpVersion() {
                    return this.cmpVersion_
                }
                set consentScreen(e) {
                    if (e = Number(e), !(Number.isInteger(e) && e > -1)) throw new I("consentScreen", e);
                    this.consentScreen_ = e
                }
                get consentScreen() {
                    return this.consentScreen_
                }
                set consentLanguage(e) {
                    this.consentLanguage_ = e
                }
                get consentLanguage() {
                    return this.consentLanguage_
                }
                set publisherCountryCode(e) {
                    if (!/^([A-z]){2}$/.test(e)) throw new I("publisherCountryCode", e);
                    this.publisherCountryCode_ = e.toUpperCase()
                }
                get publisherCountryCode() {
                    return this.publisherCountryCode_
                }
                set vendorListVersion(e) {
                    if ((e = 0 | Number(e)) < 0) throw new I("vendorListVersion", e);
                    this.vendorListVersion_ = e
                }
                get vendorListVersion() {
                    return this.gvl ? this.gvl.vendorListVersion : this.vendorListVersion_
                }
                set policyVersion(e) {
                    if (this.policyVersion_ = parseInt(e, 10), this.policyVersion_ < 0) throw new I("policyVersion", e)
                }
                get policyVersion() {
                    return this.gvl ? this.gvl.tcfPolicyVersion : this.policyVersion_
                }
                set version(e) {
                    this.version_ = parseInt(e, 10)
                }
                get version() {
                    return this.version_
                }
                set isServiceSpecific(e) {
                    this.isServiceSpecific_ = e
                }
                get isServiceSpecific() {
                    return this.isServiceSpecific_
                }
                set useNonStandardTexts(e) {
                    this.useNonStandardTexts_ = e
                }
                get useNonStandardTexts() {
                    return this.useNonStandardTexts_
                }
                set supportOOB(e) {
                    this.supportOOB_ = e
                }
                get supportOOB() {
                    return this.supportOOB_
                }
                set purposeOneTreatment(e) {
                    this.purposeOneTreatment_ = e
                }
                get purposeOneTreatment() {
                    return this.purposeOneTreatment_
                }
                setAllVendorConsents() {
                    this.vendorConsents.set(this.gvl.vendors)
                }
                unsetAllVendorConsents() {
                    this.vendorConsents.empty()
                }
                setAllVendorsDisclosed() {
                    this.vendorsDisclosed.set(this.gvl.vendors)
                }
                unsetAllVendorsDisclosed() {
                    this.vendorsDisclosed.empty()
                }
                setAllVendorsAllowed() {
                    this.vendorsAllowed.set(this.gvl.vendors)
                }
                unsetAllVendorsAllowed() {
                    this.vendorsAllowed.empty()
                }
                setAllVendorLegitimateInterests() {
                    this.vendorLegitimateInterests.set(this.gvl.vendors)
                }
                unsetAllVendorLegitimateInterests() {
                    this.vendorLegitimateInterests.empty()
                }
                setAllPurposeConsents() {
                    this.purposeConsents.set(this.gvl.purposes)
                }
                unsetAllPurposeConsents() {
                    this.purposeConsents.empty()
                }
                setAllPurposeLegitimateInterests() {
                    this.purposeLegitimateInterests.set(this.gvl.purposes)
                }
                unsetAllPurposeLegitimateInterests() {
                    this.purposeLegitimateInterests.empty()
                }
                setAllSpecialFeatureOptins() {
                    this.specialFeatureOptins.set(this.gvl.specialFeatures)
                }
                unsetAllSpecialFeatureOptins() {
                    this.specialFeatureOptins.empty()
                }
                setAll() {
                    this.setAllVendorConsents(), this.setAllPurposeLegitimateInterests(), this.setAllSpecialFeatureOptins(), this.setAllPurposeConsents(), this.setAllVendorLegitimateInterests()
                }
                unsetAll() {
                    this.unsetAllVendorConsents(), this.unsetAllPurposeLegitimateInterests(), this.unsetAllSpecialFeatureOptins(), this.unsetAllPurposeConsents(), this.unsetAllVendorLegitimateInterests()
                }
                get numCustomPurposes() {
                    let e = this.numCustomPurposes_;
                    if ("object" == typeof this.customPurposes) {
                        const t = Object.keys(this.customPurposes).sort((e, t) => Number(e) - Number(t));
                        e = parseInt(t.pop(), 10)
                    }
                    return e
                }
                set numCustomPurposes(e) {
                    if (this.numCustomPurposes_ = parseInt(e, 10), this.numCustomPurposes_ < 0) throw new I("numCustomPurposes", e)
                }
                updated() {
                    const e = new Date,
                        t = new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()));
                    this.created = t, this.lastUpdated = t
                }
            }
            class Gs {
                static encode(e, t) {
                    let s, r = "";
                    return e = Fs.process(e, t), s = Array.isArray(t ? .segments) ? t.segments : new xs(e, t)["" + e.version], s.forEach((t, n) => {
                        let i = "";
                        n < s.length - 1 && (i = "."), r += Us.encode(e, t) + i
                    }), r
                }
                static decode(e, t) {
                    const s = e.split("."),
                        r = s.length;
                    t || (t = new js);
                    for (let e = 0; e < r; e++) {
                        const r = s[e],
                            n = C.decode(r.charAt(0)).substr(0, Ls.segmentType),
                            i = Cs.ID_TO_KEY[_s.decode(n, Ls.segmentType).toString()];
                        Us.decode(r, t, i)
                    }
                    return t
                }
            }
            class Hs extends f {
                respond() {
                    const e = c.tcModel,
                        t = e.vendorListVersion;
                    let s;
                    void 0 === this.param && (this.param = t), s = this.param === t && e.gvl ? e.gvl : new Ms(this.param), s.readyPromise.then(() => {
                        this.invokeCallback(s.getJson())
                    })
                }
            }
            class Bs extends m {
                respond() {
                    this.listenerId = c.eventQueue.add({
                        callback: this.callback,
                        param: this.param,
                        next: this.next
                    }), super.respond()
                }
            }
            class Qs extends f {
                respond() {
                    this.invokeCallback(c.eventQueue.remove(this.param))
                }
            }
            class $s {
                static[e.PING] = g;
                static[e.GET_TC_DATA] = m;
                static[e.GET_IN_APP_TC_DATA] = y;
                static[e.GET_VENDOR_LIST] = Hs;
                static[e.ADD_EVENT_LISTENER] = Bs;
                static[e.REMOVE_EVENT_LISTENER] = Qs
            }
            class Ws {
                static set_ = new Set([0, 2, void 0, null]);
                static has(e) {
                    return "string" == typeof e && (e = Number(e)), this.set_.has(e)
                }
            }
            const zs = "__tcfapi";
            class Ks {
                callQueue;
                customCommands;
                constructor(t) {
                    if (t) {
                        let s = e.ADD_EVENT_LISTENER;
                        if (t ? .[s]) throw new Error(`Built-In Custom Commmand for ${s} not allowed: Use ${e.GET_TC_DATA} instead`);
                        if (s = e.REMOVE_EVENT_LISTENER, t ? .[s]) throw new Error(`Built-In Custom Commmand for ${s} not allowed`);
                        t ? .[e.GET_TC_DATA] && (t[e.ADD_EVENT_LISTENER] = t[e.GET_TC_DATA], t[e.REMOVE_EVENT_LISTENER] = t[e.GET_TC_DATA]), this.customCommands = t
                    }
                    try {
                        this.callQueue = window[zs]() || []
                    } catch (e) {
                        this.callQueue = []
                    } finally {
                        window[zs] = this.apiCall.bind(this), this.purgeQueuedCalls()
                    }
                }
                apiCall(t, s, r, ...n) {
                    if ("string" != typeof t && "function" == typeof r) r(null, !1);
                    else if (Ws.has(s)) {
                        if ("function" != typeof r) throw new Error("invalid callback function");
                        c.disabled ? r(new l, !1) : this.isCustomCommand(t) || this.isBuiltInCommand(t) ? this.isCustomCommand(t) && !this.isBuiltInCommand(t) ? this.customCommands[t](r, ...n) : t === e.PING ? this.isCustomCommand(t) ? new $s[t](this.customCommands[t], n[0], null, r) : new $s[t](r, n[0]) : void 0 === c.tcModel ? this.callQueue.push([t, s, r, ...n]) : this.isCustomCommand(t) && this.isBuiltInCommand(t) ? new $s[t](this.customCommands[t], n[0], null, r) : new $s[t](r, n[0]) : r(null, !1)
                    } else r(null, !1)
                }
                purgeQueuedCalls() {
                    const e = this.callQueue;
                    this.callQueue = [], e.forEach(e => {
                        window[zs](...e)
                    })
                }
                isCustomCommand(e) {
                    return this.customCommands && "function" == typeof this.customCommands[e]
                }
                isBuiltInCommand(e) {
                    return void 0 !== $s[e]
                }
            }
            class Ys {
                callResponder;
                isServiceSpecific;
                numUpdates = 0;
                constructor(e, t, s = !0, r) {
                    this.throwIfInvalidInt(e, "cmpId", 2), this.throwIfInvalidInt(t, "cmpVersion", 0), c.cmpId = e, c.cmpVersion = t, c.tcfPolicyVersion = 5, this.isServiceSpecific = !!s, this.callResponder = new Ks(r)
                }
                throwIfInvalidInt(e, t, s) {
                    if (!("number" == typeof e && Number.isInteger(e) && e >= s)) throw new Error(`Invalid ${t}: ${e}`)
                }
                update(e, n = !1) {
                    if (c.disabled) throw new Error("CmpApi Disabled");
                    c.cmpStatus = t.LOADED, n ? (c.displayStatus = s.VISIBLE, c.eventStatus = r.CMP_UI_SHOWN) : void 0 === c.tcModel ? (c.displayStatus = s.DISABLED, c.eventStatus = r.TC_LOADED) : (c.displayStatus = s.HIDDEN, c.eventStatus = r.USER_ACTION_COMPLETE), c.gdprApplies = null !== e, c.gdprApplies ? ("" === e ? (c.tcModel = new js, c.tcModel.cmpId = c.cmpId, c.tcModel.cmpVersion = c.cmpVersion) : c.tcModel = Gs.decode(e), c.tcModel.isServiceSpecific = this.isServiceSpecific, c.tcfPolicyVersion = Number(c.tcModel.policyVersion), c.tcString = e) : c.tcModel = null, 0 === this.numUpdates ? this.callResponder.purgeQueuedCalls() : c.eventQueue.exec(), this.numUpdates++
                }
                disable() {
                    c.disabled = !0, c.cmpStatus = t.ERROR
                }
            }
            let Js = {
                cmpId: 63,
                cmpVersion: 5,
                baseUrl: "https://cdn.clickiocdn.com/t/cmp/v3/",
                addtlConsent: "",
                backupBaseUrls: ["https://clickiocmp.com/t/cmp/v3/", "https://s.clickiocdn.com/t/cmp/v3/", "https://s.clickiocdn.com/t/cmp/v3/prev/"],
                getNextBaseUrl: function() {
                    return Js.backupBaseUrls.shift()
                },
                noMoreBaseUrls: function() {
                    return !Js.backupBaseUrls.length
                }
            };
            Ms.baseUrl = Js.baseUrl;
            let qs = null;
            return class {
                constructor() {
                    qs = new Ys(Js.cmpId, Js.cmpVersion, !0), qs.update(null, !1)
                }
            }
        })

        ;
        z(d.__tcfapi) && d.__tcfapi("setGdprApplies", 2, function() {}, !1);
        P.D.showConsent = function() {
            return null
        };
        P.D.consentToAll = function() {
            return null
        };
        P.Y();
        P.$();
        P.aa();
        T.l()
    })();
})();

;
(function() {
    if (window['clickioDiagnostic']) {
        return;
    }
    const loadLib = function(libName) {
        const libScript = document.createElement('script');
        libScript.async = true;
        libScript.type = 'text/javascript';
        libScript.src = 'https://clickiocmp.com/t/static/cmp/diagnostic-' + libName + '.js';
        document.head.appendChild(libScript);
    };
    loadLib('core');
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('clickio_cmp_diag')) {
        loadLib('ui');
    }
})();