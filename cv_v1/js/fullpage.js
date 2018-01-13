function FullPage(e) {
	"use strict";

	function t(e, t, n, s) {
		this.cx = 3 * e, this.bx = 3 * (n - e) - this.cx, this.ax = 1 - this.cx - this.bx, this.cy = 3 * t, this.by = 3 * (s - t) - this.cy, this.ay = 1 - this.cy - this.by
	}
	var n, s, a, r, i, o, c, u, l, f, m, d, v, p, h, g, x = document.getElementById(e.id),
		w = x.children,
		y = w.length,
		T = y,
		b = e.slideTime || 800,
		C = e.effect || {},
		D = 0,
		X = {},
		Y = {},
		E = {},
		k = [],
		L = [],
		M = [],
		N = [],
		O = " ",
		Z = null,
		A = !1,
		S = !1;
	if(w && 1 !== y) {
		for(e.mode && (S = -1 !== e.mode.indexOf("nav:"), N = e.mode.split(","), n = N.length), r = 0; y > r; r++) k.push(w[r].style), L.push(+w[r].getAttribute("data-step") || 0), M.push(0);
		if(X = {
				addEventListener: !!window.addEventListener,
				gravity: !!window.DeviceOrientationEvent,
				touch: "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
				version: function() {
					var e, t = navigator.userAgent,
						n = t.indexOf("Android");
					return i = -1 !== t.indexOf("QQBrowser") ? 200 : 0, -1 !== n && (e = t.substring(n + 7, n + 11).replace(" ", "")), e || 0
				}(),
				cssCore: function(e) {
					switch(!0) {
						case "" === e.webkitTransition:
							return "webkit";
						case "" === e.MozTransition:
							return "Moz";
						case "" === e.msTransition:
							return "ms";
						case "" === e.OTransition:
							return "O";
						default:
							return ""
					}
				}(document.createElement("Chriswang").style)
			}, t.prototype = {
				epsilon: .01,
				sampleCurveX: function(e) {
					return((this.ax * e + this.bx) * e + this.cx) * e
				},
				sampleCurveY: function(e) {
					return((this.ay * e + this.by) * e + this.cy) * e
				},
				sampleCurveDerivativeX: function(e) {
					return(3 * this.ax * e + 2 * this.bx) * e + this.cx
				},
				solveCurveX: function(e, t) {
					var n, s, a, r, i, o;
					for(a = e, o = 0; 8 > o; o++) {
						if(r = this.sampleCurveX(a) - e, Math.abs(r) < t) return a;
						if(i = this.sampleCurveDerivativeX(a), Math.abs(i) < t) break;
						a -= r / i
					}
					if(n = 0, s = 1, a = e, n > a) return n;
					if(a > s) return s;
					for(; s > n;) {
						if(r = this.sampleCurveX(a), Math.abs(r - e) < t) return a;
						e > r ? n = a : s = a, a = .5 * (s - n) + n
					}
					return a
				},
				solve: function(e, t) {
					return this.sampleCurveY(this.solveCurveX(e, t))
				}
			}, o = function() {
				Y = {
					X: document.documentElement.clientWidth || window.innerWidth,
					Y: document.documentElement.clientHeight || window.innerHeight
				}, x.style.height = Y.Y + "px"
			}, c = function(e, t, n, s) {
				E.A = e, E.B = t, E.C = n, E.D = s
			}, "string" == typeof e.easing) switch(e.easing) {
			case "ease":
				c(.25, .1, .25, 1);
				break;
			case "linear":
				c(0, 0, 1, 1);
				break;
			case "ease-in":
				c(.42, 0, 1, 1);
				break;
			case "ease-out":
				c(0, 0, .58, 1);
				break;
			case "ease-in-out":
				c(.42, 0, .58, 1)
		} else c(e.easing[0], e.easing[1], e.easing[2], e.easing[3]);
		if("" !== X.cssCore) {
			for(; T--;) k[T][X.cssCore + "TransitionTimingFunction"] = "cubic-bezier(" + E.A + "," + E.B + "," + E.C + "," + E.D + ")";
			u = function(e, t, n, s) {
				var a = e.style,
					r = "translate(" + t + "px," + n + "px) translateZ(0)",
					i = arguments[4];
				i.scale && (r += 0 === s ? " scale(" + i.scale[0] + ")" : " scale(" + i.scale[1] + ")"), i.rotate && (r += 0 === s ? " rotate(" + i.rotate[0] + "deg)" : " rotate(" + i.rotate[1] + "deg)"), a[X.cssCore + "TransformOrigin"] = "50% 50%", a[X.cssCore + "Transform"] = r
			}
		} else a = new t(E.A, E.B, E.C, E.D), u = function(e, n, s, r) {
			var i, o = e.currentStyle,
				c = e.style,
				u = parseInt(c.left || o.left, 10),
				l = parseInt(c.top || o.top, 10),
				f = n - u,
				m = s - l,
				d = +new Date,
				v = d + r,
				p = 0,
				h = C.opacity;
			clearInterval(Z), Z = setInterval(function() {
				var e; + new Date > v ? (e = h ? "left:" + n + "px;top:" + s + "px;filter:alpha(opacity=" + 100 * h[1] + ");" : "left:" + n + "px;top:" + s + "px;", clearInterval(Z)) : (i = v - new Date, p = i / r, p = a.solve(1 - p, t.prototype.epsilon), e = "left:" + (u + f * p) + "px;top:" + (l + m * p) + "px;", h && (e += "filter:alpha(opacity=" + ~~(100 * (h[1] * p - h[0] * (1 - p))) + ");")), c.cssText = e
			}, 13)
		};
		for(l = {
				transform: function(e, t, n) {
					var s = 0,
						a = "" !== X.cssCore || "none" !== e.translate && e.translate ? i : -50;
					switch(e.translate) {
						case "Y":
							s = n > t ? Y.Y : -Y.Y, u(w[n], 0, s, 0, e);
							break;
						case "X":
							s = n > t ? Y.X : -Y.X, u(w[n], s, 0, 0, e);
							break;
						case "XY":
							s = {
								X: n > t ? Y.X : -Y.X,
								Y: n > t ? Y.Y : -Y.Y
							}, u(w[n], s.X, s.Y, 0, e);
							break;
						default:
							u(w[n], 0, 0, 0, e)
					}
					setTimeout(function() {
						u(w[n], 0, 0, b, e)
					}, a + 50)
				},
				opacity: function(e, t, n) {
					var s = w[n].style;
					s.opacity = e[0], setTimeout(function() {
						s.opacity = e[1]
					}, 70)
				}
			}, m = X.addEventListener && X.touch ? navigator.userAgent.indexOf("Firefox") ? function(e, t) {
				e.addEventListener("click", t, !1)
			} : function(e, t) {
				e.addEventListener("touchstart", t, !1), arguments[2] && e.addEventListener("touchmove", function(e) {
					e.preventDefault()
				}, !1)
			} : function(e, t) {
				e.onclick = t
			}, d = function(e, t, n) {
				var s, a = e.className,
					r = [];
				if(-1 !== a.indexOf(t)) {
					for(r = a.split(O), s = r.length; s--;) r[s] === t && (n === O || "" === n ? r.splice(s, 1) : r[s] = n);
					r.length ? e.className = r.join(O) : (e.removeAttribute("class"), e.removeAttribute("className"))
				}
			}, S && (h = function(e, t) {
				var n = s[t].className;
				d(s[e], "active", O), s[t].className = "" === n ? "active" : n + " active"
			}), e.continuous && (v = function(e) {
				var t = y;
				if(arguments[1])
					if(e >= y)
						for(; t--;) M[t] = 0;
					else if(0 > e)
					for(; t--;) M[t] = L[t];
				return(y + e % y) % y
			}), f = function(e) {
				var t = M[D],
					n = t + e;
				return n >= 0 && n <= L[D] ? 0 === n ? (d(w[D], "step1", ""), M[D] = n, !1) : 1 === n && 0 === t ? (w[D].className += " step1", M[D] = n, !1) : (d(w[D], "step" + t, "step" + n), M[D] = n, !1) : !0
			}, p = function(t) {
				var n, s, a = i;
				if(!(e.beforeChange && "stop" === e.beforeChange(D, w[D]) || A || t === D)) {
					if(e.continuous) t = v(t, 1);
					else if(t >= y && M[D] >= L[D] || 0 > t && 0 === M[D]) return;
					if(A = !0, !arguments[1] && !f(t - D)) return setTimeout(function() {
						A = !1
					}, b);
					for(s in C) l[s](C[s], D, t);
					a += "" === X.cssCore ? 20 : 0, n = D, D = t, S && h(n, D), setTimeout(function() {
						w[t].className += " slide"
					}, a), setTimeout(function() {
						k[t][X.cssCore + "TransitionDuration"] = b + "ms"
					}, 20), setTimeout(function() {
						d(w[n], "current", ""), d(w[D], "slide", "current"), e.callback && e.callback(D, w[D]), A = !1
					}, b + i + 120)
				}
			}, o(), r = w[D].className, w[D].className = -1 !== r.indexOf("current") ? r : r + " current", X.addEventListener ? window.addEventListener("resize", o, !1) : window.onresize = o; n--;) ! function(t) {
			switch(!0) {
				case "wheel" === t:
					g = function(e) {
						var t;
						e = e || window.event, e.preventDefault ? e.preventDefault() : e.returnValue = !1, A || (t = -e.wheelDelta || e.detail, t = 0 > t ? -1 : 1, p(D + t))
					}, X.addEventListener && document.addEventListener("DOMMouseScroll", g, !1), window.onmousewheel = document.onmousewheel = g;
					break;
				case "touch" === t:
					if(!X.addEventListener) break;
					! function() {
						var t, n, s, a, r, i, o, c, u = C.transform.scale[0],
							l = C.transform.scale[1] - u,
							m = C.transform.rotate[0],
							p = C.transform.rotate[1] - m,
							g = C.opacity[0],
							T = C.opacity[1] - g,
							E = {},
							N = {},
							O = {},
							Z = !1,
							I = -1 === navigator.userAgent.indexOf("Windows Phone") ? !1 : !0;
						o = !X.touch && I ? window.navigator.msPointerEnabled ? {
							start: "MSPointerDown",
							move: "MSPointerMove",
							end: "MSPointerUp"
						} : {
							start: "pointerDown",
							move: "pointerMove",
							end: "pointerUp"
						} : {
							start: "touchstart",
							move: "touchmove",
							end: "touchend"
						}, o && (document.body.ontouchmove = function(e) {
							e.preventDefault ? e.preventDefault() : e.returnValue = !1
						}, "Y" === C.transform.translate ? (s = function() {
							var s = D - 1,
								a = D + 1;
							e.continuous && (s = v(s), a = v(a)), t = k[s], n = k[a], t && (t[X.cssCore + "TransitionDuration"] = "0ms", t[X.cssCore + "Transform"] = "translate(0,-" + Y.Y + "px) translateZ(0)", t[X.cssCore + "TransformOrigin"] = "50% 100%", w[s].className += " swipe"), n && (n[X.cssCore + "TransitionDuration"] = "0ms", n[X.cssCore + "Transform"] = "translate(0," + Y.Y + "px) translateZ(0)", n[X.cssCore + "TransformOrigin"] = "50% 0%", w[a].className += " swipe")
						}, i = function(e) {
							var s = Math.abs(e.y / Y.Y),
								a = " scale(" + ~~(100 * (u + l * s)) / 100 + ") rotate(" + ~~(m + p * s) + "deg)";
							t && e.y > 0 && (t.opacity = ~~(100 * (g + T * s)) / 100, t[X.cssCore + "Transform"] = "translate(0," + ~~(e.y - Y.Y) + "px) translateZ(0)" + a), n && e.y < 0 && (n.opacity = ~~(100 * (g + T * s)) / 100, n[X.cssCore + "Transform"] = "translate(0," + ~~(Y.Y + e.y) + "px) translateZ(0)" + a)
						}, a = function(t, n) {
							var s = b >> 1,
								a = D + n;
							e.continuous && (a = v(a)), d(w[a], "swipe", "slide"), t.opacity = 1, t[X.cssCore + "TransitionDuration"] = s + "ms", t[X.cssCore + "Transform"] = "translate(0," + n * Y.Y + "px) translateZ(0)", setTimeout(function() {
								d(w[a], "slide", ""), setTimeout(function() {
									A = !1
								}, 50)
							}, s)
						}, r = function(t, n) {
							var s, a, r = D + n,
								i = ~~(b / 1.5);
							return e.continuous ? (r = v(r), s = w[v(D - n)], a = !0) : s = w[D - n], s && d(s, "swipe", ""), !a && 0 > r || r > y - 1 ? void setTimeout(function() {
								A = !1
							}, 50) : (S && h(D, r), t.opacity = 1, d(w[r], "swipe", "slide"), t[X.cssCore + "TransitionDuration"] = i + "ms", t[X.cssCore + "Transform"] = "translate(0,0) translateZ(0)", void setTimeout(function() {
								d(w[D], "current", ""), d(w[r], "slide", "current"), D = r, e.callback && e.callback(D, w[D]), setTimeout(function() {
									A = !1
								}, 50)
							}, i))
						}) : (s = function() {
							var s = D - 1,
								a = D + 1;
							e.continuous && (s = v(s), a = v(a)), t = k[s], n = k[a], t && (t[X.cssCore + "TransitionDuration"] = "0ms", t[X.cssCore + "Transform"] = "translate(-" + Y.X + "px,0) translateZ(0)", t[X.cssCore + "TransformOrigin"] = "100% 50%", w[s].className += " swipe"), n && (n[X.cssCore + "TransitionDuration"] = "0ms", n[X.cssCore + "Transform"] = "translate(" + Y.X + "px,0) translateZ(0)", n[X.cssCore + "TransformOrigin"] = "0 50%", w[a].className += " swipe")
						}, i = function(e) {
							var s = Math.abs(e.x / Y.X),
								a = " scale(" + ~~(100 * (u + l * s)) / 100 + ") rotate(" + ~~(m + p * s) + "deg)";
							t && e.x > 0 && (t.opacity = ~~(100 * (g + T * s)) / 100, t[X.cssCore + "Transform"] = "translate(" + ~~(e.x - Y.X) + "px,0) translateZ(0)" + a), n && e.x < 0 && (n.opacity = ~~(100 * (g + T * s)) / 100, n[X.cssCore + "Transform"] = "translate(" + ~~(Y.X + e.x) + "px,0) translateZ(0)" + a)
						}, a = function(t, n) {
							var s = b >> 1,
								a = D + n;
							e.continuous && (a = v(a)), d(w[a], "swipe", "slide"), t.opacity = 1, t[X.cssCore + "TransitionDuration"] = s + "ms", t[X.cssCore + "Transform"] = "translate(" + n * Y.X + "px,0) translateZ(0)", setTimeout(function() {
								d(w[a], "slide", ""), setTimeout(function() {
									A = !1
								}, 50)
							}, s)
						}, r = function(t, n) {
							var s, a, r = D + n,
								i = ~~(b / 1.5);
							return e.continuous ? (r = v(r), s = w[v(D - n)], a = !0) : s = w[D - n], s && d(s, "swipe", ""), !a && 0 > r || r > y - 1 ? void setTimeout(function() {
								A = !1
							}, 50) : (S && h(D, r), d(w[r], "swipe", "slide"), t.opacity = 1, t[X.cssCore + "TransitionDuration"] = i + "ms", t[X.cssCore + "Transform"] = "translate(0,0) translateZ(0)", void setTimeout(function() {
								d(w[D], "current", ""), d(w[r], "slide", "current"), D = r, e.callback && e.callback(D, w[D]), setTimeout(function() {
									A = !1
								}, 50)
							}, i))
						}), E = {
							start: function(t) {
								var n = t.touches ? t.touches[0] : t;
								if(!A) {
									if(A = !0, N = {
											x: n.pageX,
											y: n.pageY,
											time: +new Date
										}, e.onSwipeStart && "stop" === e.onSwipeStart(D, w[D])) return A = !1;
									O = {}, Z = !1, s(), x.addEventListener(o.move, E.move, !1), x.addEventListener(o.end, E.end, !1)
								}
							},
							move: function(t) {
								var n, s = t.touches ? t.touches[0] : t;
								if(t.preventDefault(), !X.touch || !(event.touches.length > 1 || event.scale && 1 !== event.scale))
									if(O = {
											x: s.pageX - N.x,
											y: s.pageY - N.y
										}, Z) {
										if(n = "X" === e.effect.transform.translate ? O.x < 0 ? 1 : -1 : O.y < 0 ? 1 : -1, M[D] + n >= 0 && M[D] + n <= L[D]) return;
										c && i(O)
									} else c = Math.abs(O.x) > Math.abs(O.y) ? "X" : "Y", c = c === e.effect.transform.translate ? !0 : !1, Z = !0
							},
							end: function(s) {
								var i = s.changedTouches ? s.changedTouches[0] : s,
									u = +new Date - N.time,
									l = {},
									m = 0,
									d = !1;
								switch(O = {
									x: i.pageX - N.x,
									y: i.pageY - N.y
								}, l = {
									x: Math.abs(O.x),
									y: Math.abs(O.y)
								}, e.effect.transform.translate) {
									case "Y":
										d = 250 > +u && l.y > 30 || l.y > .3 * Y.Y, m = O.y > 0 ? -1 : 1;
										break;
									case "X":
										d = 250 > +u && l.x > 30 || l.x > .3 * Y.X, m = O.x > 0 ? -1 : 1;
										break;
									default:
										d = 350 > +u && l.y + l.x > 50 || l.y > .3 * Y.Y || l.x > .3 * Y.X, m = l.x > l.y ? O.x > 0 ? -1 : 1 : O.y > 0 ? -1 : 1
								}
								d && c && f(m) && (e.continuous !== !1 || (t || -1 !== m) && (n || 1 !== m)) ? e.beforeChange && "stop" === e.beforeChange(D, w[D]) ? (t && a(t, -1), n && a(n, 1)) : -1 === m ? r(t, -1) : r(n, 1) : (t && a(t, -1), n && a(n, 1)), x.removeEventListener(o.move, E.move, !1), x.removeEventListener(o.end, E.end, !1)
							}
						}, x.addEventListener(o.start, E.start, !1))
					}();
					break;
				case -1 !== t.indexOf("nav:"):
					! function() {
						var e, n, a, r = t.split(":")[1],
							i = document.getElementById(r);
						if(s = i.children, e = s.length, a = s[D].className, i && s) {
							for(; e--;) s[e].setAttribute("data-page", e); - 1 === a.indexOf("active") && (s[D].className = "" === a ? "active" : a + " active"), n = function(e) {
								var t;
								for(e = e || window.event, e = e.target || e.srcElement, t = e.tagName.toLowerCase();
									"li" !== t;) {
									if("ul" === t) return;
									e = e.parentNode, t = e.tagName.toLowerCase()
								}
								p(+e.getAttribute("data-page"), 1)
							}, m(i, n, 1)
						}
					}()
			}
		}(N[n]);
		return {
			thisPage: function() {
				return D
			},
			go: function(e) {
				p(e)
			},
			next: function() {
				p(D + 1)
			},
			prev: function() {
				p(D - 1)
			}
		}
	}
}