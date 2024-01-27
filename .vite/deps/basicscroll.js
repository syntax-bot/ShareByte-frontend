import {
  __commonJS,
  __require
} from "./chunk-GFT2G5UO.js";

// node_modules/basicscroll/dist/basicScroll.min.js
var require_basicScroll_min = __commonJS({
  "node_modules/basicscroll/dist/basicScroll.min.js"(exports, module) {
    !function(t) {
      if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = t();
      else if ("function" == typeof define && define.amd)
        define([], t);
      else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).basicScroll = t();
      }
    }(function() {
      return function t(n, o, e) {
        function r(i2, c) {
          if (!o[i2]) {
            if (!n[i2]) {
              var f = "function" == typeof __require && __require;
              if (!c && f)
                return f(i2, true);
              if (u)
                return u(i2, true);
              var a = new Error("Cannot find module '" + i2 + "'");
              throw a.code = "MODULE_NOT_FOUND", a;
            }
            var s = o[i2] = { exports: {} };
            n[i2][0].call(s.exports, function(t2) {
              return r(n[i2][1][t2] || t2);
            }, s, s.exports, t, n, o, e);
          }
          return o[i2].exports;
        }
        for (var u = "function" == typeof __require && __require, i = 0; i < e.length; i++)
          r(e[i]);
        return r;
      }({ 1: [function(t, n, o) {
        n.exports = function(t2) {
          var n2 = 2.5949095;
          return (t2 *= 2) < 1 ? t2 * t2 * ((n2 + 1) * t2 - n2) * 0.5 : 0.5 * ((t2 -= 2) * t2 * ((n2 + 1) * t2 + n2) + 2);
        };
      }, {}], 2: [function(t, n, o) {
        n.exports = function(t2) {
          var n2 = 1.70158;
          return t2 * t2 * ((n2 + 1) * t2 - n2);
        };
      }, {}], 3: [function(t, n, o) {
        n.exports = function(t2) {
          var n2 = 1.70158;
          return --t2 * t2 * ((n2 + 1) * t2 + n2) + 1;
        };
      }, {}], 4: [function(t, n, o) {
        var e = t("./bounce-out");
        n.exports = function(t2) {
          return t2 < 0.5 ? 0.5 * (1 - e(1 - 2 * t2)) : 0.5 * e(2 * t2 - 1) + 0.5;
        };
      }, { "./bounce-out": 6 }], 5: [function(t, n, o) {
        var e = t("./bounce-out");
        n.exports = function(t2) {
          return 1 - e(1 - t2);
        };
      }, { "./bounce-out": 6 }], 6: [function(t, n, o) {
        n.exports = function(t2) {
          var n2 = t2 * t2;
          return t2 < 4 / 11 ? 7.5625 * n2 : t2 < 8 / 11 ? 9.075 * n2 - 9.9 * t2 + 3.4 : t2 < 0.9 ? 4356 / 361 * n2 - 35442 / 1805 * t2 + 16061 / 1805 : 10.8 * t2 * t2 - 20.52 * t2 + 10.72;
        };
      }, {}], 7: [function(t, n, o) {
        n.exports = function(t2) {
          return (t2 *= 2) < 1 ? -0.5 * (Math.sqrt(1 - t2 * t2) - 1) : 0.5 * (Math.sqrt(1 - (t2 -= 2) * t2) + 1);
        };
      }, {}], 8: [function(t, n, o) {
        n.exports = function(t2) {
          return 1 - Math.sqrt(1 - t2 * t2);
        };
      }, {}], 9: [function(t, n, o) {
        n.exports = function(t2) {
          return Math.sqrt(1 - --t2 * t2);
        };
      }, {}], 10: [function(t, n, o) {
        n.exports = function(t2) {
          return t2 < 0.5 ? 4 * t2 * t2 * t2 : 0.5 * Math.pow(2 * t2 - 2, 3) + 1;
        };
      }, {}], 11: [function(t, n, o) {
        n.exports = function(t2) {
          return t2 * t2 * t2;
        };
      }, {}], 12: [function(t, n, o) {
        n.exports = function(t2) {
          var n2 = t2 - 1;
          return n2 * n2 * n2 + 1;
        };
      }, {}], 13: [function(t, n, o) {
        n.exports = function(t2) {
          return t2 < 0.5 ? 0.5 * Math.sin(13 * Math.PI / 2 * 2 * t2) * Math.pow(2, 10 * (2 * t2 - 1)) : 0.5 * Math.sin(-13 * Math.PI / 2 * (2 * t2 - 1 + 1)) * Math.pow(2, -10 * (2 * t2 - 1)) + 1;
        };
      }, {}], 14: [function(t, n, o) {
        n.exports = function(t2) {
          return Math.sin(13 * t2 * Math.PI / 2) * Math.pow(2, 10 * (t2 - 1));
        };
      }, {}], 15: [function(t, n, o) {
        n.exports = function(t2) {
          return Math.sin(-13 * (t2 + 1) * Math.PI / 2) * Math.pow(2, -10 * t2) + 1;
        };
      }, {}], 16: [function(t, n, o) {
        n.exports = function(t2) {
          return 0 === t2 || 1 === t2 ? t2 : t2 < 0.5 ? 0.5 * Math.pow(2, 20 * t2 - 10) : -0.5 * Math.pow(2, 10 - 20 * t2) + 1;
        };
      }, {}], 17: [function(t, n, o) {
        n.exports = function(t2) {
          return 0 === t2 ? t2 : Math.pow(2, 10 * (t2 - 1));
        };
      }, {}], 18: [function(t, n, o) {
        n.exports = function(t2) {
          return 1 === t2 ? t2 : 1 - Math.pow(2, -10 * t2);
        };
      }, {}], 19: [function(t, n, o) {
        n.exports = { backInOut: t("./back-in-out"), backIn: t("./back-in"), backOut: t("./back-out"), bounceInOut: t("./bounce-in-out"), bounceIn: t("./bounce-in"), bounceOut: t("./bounce-out"), circInOut: t("./circ-in-out"), circIn: t("./circ-in"), circOut: t("./circ-out"), cubicInOut: t("./cubic-in-out"), cubicIn: t("./cubic-in"), cubicOut: t("./cubic-out"), elasticInOut: t("./elastic-in-out"), elasticIn: t("./elastic-in"), elasticOut: t("./elastic-out"), expoInOut: t("./expo-in-out"), expoIn: t("./expo-in"), expoOut: t("./expo-out"), linear: t("./linear"), quadInOut: t("./quad-in-out"), quadIn: t("./quad-in"), quadOut: t("./quad-out"), quartInOut: t("./quart-in-out"), quartIn: t("./quart-in"), quartOut: t("./quart-out"), quintInOut: t("./quint-in-out"), quintIn: t("./quint-in"), quintOut: t("./quint-out"), sineInOut: t("./sine-in-out"), sineIn: t("./sine-in"), sineOut: t("./sine-out") };
      }, { "./back-in": 2, "./back-in-out": 1, "./back-out": 3, "./bounce-in": 5, "./bounce-in-out": 4, "./bounce-out": 6, "./circ-in": 8, "./circ-in-out": 7, "./circ-out": 9, "./cubic-in": 11, "./cubic-in-out": 10, "./cubic-out": 12, "./elastic-in": 14, "./elastic-in-out": 13, "./elastic-out": 15, "./expo-in": 17, "./expo-in-out": 16, "./expo-out": 18, "./linear": 20, "./quad-in": 22, "./quad-in-out": 21, "./quad-out": 23, "./quart-in": 25, "./quart-in-out": 24, "./quart-out": 26, "./quint-in": 28, "./quint-in-out": 27, "./quint-out": 29, "./sine-in": 31, "./sine-in-out": 30, "./sine-out": 32 }], 20: [function(t, n, o) {
        n.exports = function(t2) {
          return t2;
        };
      }, {}], 21: [function(t, n, o) {
        n.exports = function(t2) {
          return (t2 /= 0.5) < 1 ? 0.5 * t2 * t2 : -0.5 * (--t2 * (t2 - 2) - 1);
        };
      }, {}], 22: [function(t, n, o) {
        n.exports = function(t2) {
          return t2 * t2;
        };
      }, {}], 23: [function(t, n, o) {
        n.exports = function(t2) {
          return -t2 * (t2 - 2);
        };
      }, {}], 24: [function(t, n, o) {
        n.exports = function(t2) {
          return t2 < 0.5 ? 8 * Math.pow(t2, 4) : -8 * Math.pow(t2 - 1, 4) + 1;
        };
      }, {}], 25: [function(t, n, o) {
        n.exports = function(t2) {
          return Math.pow(t2, 4);
        };
      }, {}], 26: [function(t, n, o) {
        n.exports = function(t2) {
          return Math.pow(t2 - 1, 3) * (1 - t2) + 1;
        };
      }, {}], 27: [function(t, n, o) {
        n.exports = function(t2) {
          return (t2 *= 2) < 1 ? 0.5 * t2 * t2 * t2 * t2 * t2 : 0.5 * ((t2 -= 2) * t2 * t2 * t2 * t2 + 2);
        };
      }, {}], 28: [function(t, n, o) {
        n.exports = function(t2) {
          return t2 * t2 * t2 * t2 * t2;
        };
      }, {}], 29: [function(t, n, o) {
        n.exports = function(t2) {
          return --t2 * t2 * t2 * t2 * t2 + 1;
        };
      }, {}], 30: [function(t, n, o) {
        n.exports = function(t2) {
          return -0.5 * (Math.cos(Math.PI * t2) - 1);
        };
      }, {}], 31: [function(t, n, o) {
        n.exports = function(t2) {
          var n2 = Math.cos(t2 * Math.PI * 0.5);
          return Math.abs(n2) < 1e-14 ? 1 : 1 - n2;
        };
      }, {}], 32: [function(t, n, o) {
        n.exports = function(t2) {
          return Math.sin(t2 * Math.PI / 2);
        };
      }, {}], 33: [function(t, n, o) {
        n.exports = function(t2, n2) {
          n2 || (n2 = [0, ""]), t2 = String(t2);
          var o2 = parseFloat(t2, 10);
          return n2[0] = o2, n2[1] = t2.match(/[\d.\-\+]*\s*(.*)/)[1] || "", n2;
        };
      }, {}], 34: [function(t, n, o) {
        "use strict";
        Object.defineProperty(o, "__esModule", { value: true }), o.create = void 0;
        var e = u(t("parse-unit")), r = u(t("eases"));
        function u(t2) {
          return t2 && t2.__esModule ? t2 : { default: t2 };
        }
        function i(t2) {
          return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          })(t2);
        }
        var c, f, a, s = [], p = "undefined" != typeof window, l = function() {
          return (document.scrollingElement || document.documentElement).scrollTop;
        }, d = function() {
          return window.innerHeight || window.outerHeight;
        }, m = function(t2) {
          return false === isNaN((0, e.default)(t2)[0]);
        }, b = function(t2) {
          var n2 = (0, e.default)(t2);
          return { value: n2[0], unit: n2[1] };
        }, h = function(t2) {
          return null !== String(t2).match(/^[a-z]+-[a-z]+$/);
        }, w = function(t2, n2) {
          return true === t2 ? n2.elem : t2 instanceof HTMLElement == true ? n2.direct : n2.global;
        }, y = function(t2, n2) {
          var o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l(), e2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d(), r2 = n2.getBoundingClientRect(), u2 = t2.match(/^[a-z]+/)[0], i2 = t2.match(/[a-z]+$/)[0], c2 = 0;
          return "top" === i2 && (c2 -= 0), "middle" === i2 && (c2 -= e2 / 2), "bottom" === i2 && (c2 -= e2), "top" === u2 && (c2 += r2.top + o2), "middle" === u2 && (c2 += r2.top + o2 + r2.height / 2), "bottom" === u2 && (c2 += r2.top + o2 + r2.height), "".concat(c2, "px");
        }, v = function(t2) {
          var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l(), o2 = t2.getData(), e2 = o2.to.value - o2.from.value, r2 = n2 - o2.from.value, u2 = r2 / (e2 / 100), i2 = Math.min(Math.max(u2, 0), 100), c2 = w(o2.direct, { global: document.documentElement, elem: o2.elem, direct: o2.direct }), f2 = Object.keys(o2.props).reduce(function(t3, n3) {
            var e3 = o2.props[n3], r3 = e3.from.unit || e3.to.unit, u3 = e3.from.value - e3.to.value, c3 = e3.timing(i2 / 100), f3 = e3.from.value - u3 * c3, a3 = Math.round(1e4 * f3) / 1e4;
            return t3[n3] = a3 + r3, t3;
          }, {}), a2 = u2 >= 0 && u2 <= 100, s2 = u2 < 0 || u2 > 100;
          return true === a2 && o2.inside(t2, u2, f2), true === s2 && o2.outside(t2, u2, f2), { elem: c2, props: f2 };
        }, x = function(t2, n2) {
          Object.keys(n2).forEach(function(o2) {
            return function(t3, n3) {
              t3.style.setProperty(n3.key, n3.value);
            }(t2, { key: o2, value: n2[o2] });
          });
        };
        o.create = function(t2) {
          var n2 = null, o2 = false, e2 = { isActive: function() {
            return o2;
          }, getData: function() {
            return n2;
          }, calculate: function() {
            n2 = function() {
              var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              if (null == (t3 = Object.assign({}, t3)).inside && (t3.inside = function() {
              }), null == t3.outside && (t3.outside = function() {
              }), null == t3.direct && (t3.direct = false), null == t3.track && (t3.track = true), null == t3.props && (t3.props = {}), null == t3.from)
                throw new Error("Missing property `from`");
              if (null == t3.to)
                throw new Error("Missing property `to`");
              if ("function" != typeof t3.inside)
                throw new Error("Property `inside` must be undefined or a function");
              if ("function" != typeof t3.outside)
                throw new Error("Property `outside` must be undefined or a function");
              if ("boolean" != typeof t3.direct && t3.direct instanceof HTMLElement == 0)
                throw new Error("Property `direct` must be undefined, a boolean or a DOM element/node");
              if (true === t3.direct && null == t3.elem)
                throw new Error("Property `elem` is required when `direct` is true");
              if ("boolean" != typeof t3.track)
                throw new Error("Property `track` must be undefined or a boolean");
              if ("object" !== i(t3.props))
                throw new Error("Property `props` must be undefined or an object");
              if (null == t3.elem) {
                if (false === m(t3.from))
                  throw new Error("Property `from` must be a absolute value when no `elem` has been provided");
                if (false === m(t3.to))
                  throw new Error("Property `to` must be a absolute value when no `elem` has been provided");
              } else
                true === h(t3.from) && (t3.from = y(t3.from, t3.elem)), true === h(t3.to) && (t3.to = y(t3.to, t3.elem));
              return t3.from = b(t3.from), t3.to = b(t3.to), t3.props = Object.keys(t3.props).reduce(function(n3, o3) {
                var e3 = Object.assign({}, t3.props[o3]);
                if (false === m(e3.from))
                  throw new Error("Property `from` of prop must be a absolute value");
                if (false === m(e3.to))
                  throw new Error("Property `from` of prop must be a absolute value");
                if (e3.from = b(e3.from), e3.to = b(e3.to), null == e3.timing && (e3.timing = r.default.linear), "string" != typeof e3.timing && "function" != typeof e3.timing)
                  throw new Error("Property `timing` of prop must be undefined, a string or a function");
                if ("string" == typeof e3.timing && null == r.default[e3.timing])
                  throw new Error("Unknown timing for property `timing` of prop");
                return "string" == typeof e3.timing && (e3.timing = r.default[e3.timing]), n3[o3] = e3, n3;
              }, {}), t3;
            }(t2);
          }, update: function() {
            var t3 = v(e2), n3 = t3.elem, o3 = t3.props;
            return x(n3, o3), o3;
          }, start: function() {
            o2 = true;
          }, stop: function() {
            o2 = false;
          }, destroy: function() {
            s[u2] = void 0;
          } }, u2 = s.push(e2) - 1;
          return e2.calculate(), e2;
        }, true === p ? (!function t2(n2, o2) {
          var e2 = function() {
            requestAnimationFrame(function() {
              return t2(n2, o2);
            });
          }, r2 = function(t3) {
            return t3.filter(function(t4) {
              return null != t4 && t4.isActive();
            });
          }(s);
          if (0 === r2.length)
            return e2();
          var u2 = l();
          if (o2 === u2)
            return e2();
          o2 = u2, r2.map(function(t3) {
            return v(t3, u2);
          }).forEach(function(t3) {
            var n3 = t3.elem, o3 = t3.props;
            return x(n3, o3);
          }), e2();
        }(), window.addEventListener("resize", (c = function() {
          (function(t2) {
            return t2.filter(function(t3) {
              return null != t3 && t3.getData().track;
            });
          })(s).forEach(function(t2) {
            t2.calculate(), t2.update();
          });
        }, f = 50, a = null, function() {
          for (var t2 = arguments.length, n2 = new Array(t2), o2 = 0; o2 < t2; o2++)
            n2[o2] = arguments[o2];
          clearTimeout(a), a = setTimeout(function() {
            return c.apply(void 0, n2);
          }, f);
        }))) : console.warn("basicScroll is not executing because you are using it in an environment without a `window` object");
      }, { eases: 19, "parse-unit": 33 }] }, {}, [34])(34);
    });
  }
});
export default require_basicScroll_min();
//# sourceMappingURL=basicscroll.js.map
