(function () {
  var e,
    t = {}.hasOwnProperty,
    n = function (e, n) {
      function r() {
        this.constructor = n;
      }
      for (var a in e) t.call(e, a) && (n[a] = e[a]);
      return (
        (r.prototype = e.prototype),
        (n.prototype = new r()),
        (n.__super__ = e.prototype),
        n
      );
    },
    r = this;
  (this.OpenPay = function () {
    function e() {}
    function t(e, t, n, r, a) {
      clearTimeout(t);
      var o = null;
      (n = n || "Unknown error"), (r = r || 0), (a = a || "{}");
      try {
        o = JSON.parse(a);
      } catch (e) {
        n = "Response error";
      }
      e({
        message: n,
        status: r,
        data: o,
        toString: function () {
          return this.message + " [status " + this.status + "]";
        },
      });
    }
    function n(e, n, r) {
      return void 0 !== n && /^[a-z0-9]+$/i.test(n)
        ? !(void 0 === r || !/^pk_[a-z0-9]+$/i.test(r)) ||
            (t(e, null, "Empty or invalid Openpay API Key"), !1)
        : (t(e, null, "Empty or invalid Openpay ID"), !1);
    }
    function r(n, r, a, o, i, u) {
      var s,
        c = null,
        d = null,
        p = "",
        l = {};
      if (
        ("function" != typeof o && (o = e.log),
        "function" != typeof i && (i = e.log),
        "undefined" != typeof JSON)
      ) {
        s = 4e4;
        var f = XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
        if (f) {
          function h() {
            if ((void 0 !== c.readyState && 4 == c.readyState) || !f)
              if ((clearTimeout(d), c.status < 200 || c.status >= 300))
                t(i, d, "Request error", c.status, c.responseText);
              else {
                var e;
                try {
                  e = JSON.parse(c.responseText);
                } catch (e) {
                  t(i, d, "Response error (JSON parse failed)", c.status, "{}");
                }
                o({ data: e, status: 200 });
              }
          }
          if (
            !(c = (function () {
              if (
                ((e = window),
                "function" == (n = typeof e[(t = "XMLHttpRequest")]) ||
                  ("object" == n && e[t]) ||
                  "unknown" == n)
              )
                return new XMLHttpRequest();
              var e, t, n;
            })())
          )
            return void t(i, d, "Browser error (CORS not supported)");
          (p = JSON.stringify(a)),
            (l = {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Basic " + r,
            }),
            (void 0 !== u && null !== u) || (u = "POST"),
            c.open(u, n, !0),
            "withCredentials" in c && (c.withCredentials = !0);
          for (var m in l)
            l.hasOwnProperty(m) &&
              l[m] &&
              "setRequestHeader" in c &&
              c.setRequestHeader(m, l[m]);
          "onreadystatechange" in c
            ? (c.onreadystatechange = h)
            : "onload" in c &&
              "onerror" in c &&
              ((c.onload = h), (c.onerror = t)),
            (d = setTimeout(function () {
              "onload" in c
                ? (c.onload = Function.prototype)
                : (c.onreadystatechange = Function.prototype),
                c.abort(),
                (c = null),
                t(i, d, "Timeout after 40000 milliseconds");
            }, s)),
            c.send(p);
        } else {
          if ("undefined" == typeof XDomainRequest)
            return void t(i, d, "Browser error (CORS not supported)");
          a.apiKey = r;
          var h,
            g = {
              callbackName: "getResultData",
              onSuccess: (h = function (e) {
                e.error
                  ? t(i, d, "Request error", e.httpStatus, JSON.stringify(e))
                  : o({ data: e.data, status: 200 });
              }),
              onError: t,
              timeout: s,
              url: n + "/jsonp",
              data: a,
            };
          $jsonp.send(g);
        }
      } else t(i, d, "Browser error (JSON library not found)");
    }
    function a(e) {
      return btoa(e + ":");
    }
    function o() {
      return e.sandboxMode
        ? e.sandboxHostname
        : e.developMode
        ? e.developHostname
        : e.hostname;
    }
    return (
      (e.version = 1),
      (e.sandboxMode = !1),
      (e.developMode = !1),
      (e.hostname = "https://api.openpay.mx/v1/"),
      (e.sandboxHostname = "https://sandbox-api.openpay.mx/v1/"),
      (e.developHostname = "https://dev-api.openpay.mx/v1/"),
      (e.Group = {}),
      (e.Update = {}),
      (e.setSandboxMode = function (t) {
        (e.sandboxMode = !!t), t && (e.developMode = !1);
      }),
      (e.getSandboxMode = function () {
        return e.sandboxMode;
      }),
      (e.setDevelopMode = function (t) {
        (e.developMode = !!t), t && (e.sandboxMode = !1);
      }),
      (e.getDevelopMode = function () {
        return e.developMode;
      }),
      (e.setId = function (t) {
        e.id = t;
      }),
      (e.getId = function () {
        return e.id;
      }),
      (e.setApiKey = function (t) {
        e.key = t;
      }),
      (e.getApiKey = function () {
        return e.key;
      }),
      (e.Group.setId = function (t) {
        e.Group.id = t;
      }),
      (e.Group.getId = function () {
        return e.Group.id;
      }),
      (e.Group.setApiKey = function (t) {
        e.Group.key = t;
      }),
      (e.Group.getApiKey = function () {
        return e.Group.key;
      }),
      (e.log = function (e) {
        "object" == typeof e && "toString" in e && (e = e.toString()),
          "undefined" != typeof console && "log" in console && console.log(e);
      }),
      (e.validate = function (e, t) {
        if (!e) throw t + " required";
        if ("object" != typeof e) throw t + " invalid";
      }),
      (e.formatData = function (e, t) {
        return e;
      }),
      (e.extractFormInfo = function (e) {
        var t,
          n,
          r,
          a,
          o = function (e, t) {
            var n,
              r,
              a = [],
              i = e.children;
            for (r = 0; r < i.length; r++)
              1 === (n = i[r]).nodeType && n.attributes[t]
                ? a.push(n)
                : n.children.length > 0 && (a = a.concat(o(n, t)));
            return a;
          },
          i = function (e, t) {
            for (var n = {}, r = 0; r < e.length; r++)
              (fieldName = e[r].attributes[t].value),
                (inputValue = e[r].value),
                void 0 !== n[fieldName]
                  ? (n[fieldName].push || (n[this.name] = [n[this.name]]),
                    n[fieldName].push(inputValue || ""))
                  : (n[fieldName] = inputValue || "");
            return n;
          };
        return (
          (a = e),
          (e =
            window.jQuery && a instanceof jQuery
              ? a[0]
              : a.nodeType && 1 === a.nodeType
              ? a
              : document.getElementById(a)),
          (t = i(o(e, "data-openpay-card"), "data-openpay-card")),
          void 0 !== (r = o(e, "data-openpay-card-address")) &&
            r.length &&
            r.length > 0 &&
            void 0 !== (n = i(r, "data-openpay-card-address")) &&
            (t.address = n),
          t
        );
      }),
      (e.send = function (t, i, u, s) {
        if (n(s, e.id, e.key)) {
          var c = a(e.key),
            d = o();
          return r((d = d + e.id + "/" + t), c, i, u, s);
        }
      }),
      (e.Group.send = function (t, i, u, s) {
        if (n(s, e.Group.id, e.Group.key)) {
          var c = a(e.Group.key),
            d = o();
          return r((d = d + "groups/" + e.Group.id + "/" + t), c, i, u, s);
        }
      }),
      (e.Update.send = function (t, i, u, s, c) {
        var d = "";
        if (t) {
          if (!n(s, e.Group.id, e.Group.key)) return;
          d = a(e.Group.key);
        } else {
          if (!n(s, e.id, e.key)) return;
          d = a(e.key);
        }
        return r(o() + c, d, i, u, s, "PUT");
      }),
      e
    );
  }.call(this)),
    (e = this.OpenPay),
    (this.OpenPay.card = function (t) {
      function r() {
        return r.__super__.constructor.apply(this, arguments);
      }
      return (
        n(t, r),
        (r.validateCardNumber = function (e) {
          return (
            (e = (e + "").replace(/\s+|-/g, "")),
            /^\d+$/.test(e) &&
              e.length >= 10 &&
              e.length <= 19 &&
              r.luhnCheck(e) &&
              r.validateCardNumberLength(e) &&
              r.validateAcceptCardNumber(e)
          );
        }),
        (r.validateCVC = function (t, n) {
          switch (arguments.length) {
            case 1:
              return (
                (t = e.utils.trim(t)),
                /^\d+$/.test(t) && t.length >= 3 && t.length <= 4
              );
            case 2:
              return "American Express" == r.cardType(n)
                ? ((t = e.utils.trim(t)), /^\d+$/.test(t) && 4 == t.length)
                : ((t = e.utils.trim(t)), /^\d+$/.test(t) && 3 == t.length);
            default:
              return !1;
          }
        }),
        (r.validateExpiry = function (t, n) {
          var r, a;
          return (
            2 === (n = e.utils.trim(n)).length && (n = "20" + n),
            (t = e.utils.trim(t)),
            !!/^\d+$/.test(t) &&
              !!/^\d+$/.test(n) &&
              parseInt(t, 10) <= 12 &&
              parseInt(t, 10) >= 1 &&
              ((a = new Date(n, t)),
              (r = new Date()),
              a.setMonth(a.getMonth() - 1),
              a.setMonth(a.getMonth() + 1, 1),
              a > r)
          );
        }),
        (r.validateCardNumberLength = function (e) {
          var t;
          if ((t = r.cardAbstract(e))) {
            for (var n = t.length.length; n--; )
              if (t.length[n] == e.length) return !0;
            return !1;
          }
          return e.length >= 10 && e.length <= 19;
        }),
        (r.validateAcceptCardNumber = function (e) {
          return !0;
        }),
        (r.luhnCheck = function (e) {
          for (
            var t = (e + "").split(""),
              n = 0,
              r = parseInt(t[e.length - 1]),
              a = t.length - 2,
              o = 1;
            a >= 0;
            a--, o++
          )
            (n = parseInt(t[a])),
              o % 2 != 0 && (n *= 2) > 9 && (n -= 9),
              (r += n);
          return r % 10 == 0;
        }),
        (r.cardType = function (e) {
          var t;
          return (t = r.cardAbstract(e)) ? t.name : "";
        }),
        (r.cardTypes = function () {
          return {
            visa_electron: {
              name: "Visa Electron",
              regx: /^(4026|417500|4508|4844|491(3|7))/,
              length: [16],
              accept: !0,
            },
            visa: { name: "Visa", regx: /^4/, length: [16], accept: !0 },
            mastercard: {
              name: "Mastercard",
              regx: /^5[1-5]/,
              length: [16],
              accept: !0,
            },
            amex: {
              name: "American Express",
              regx: /^3[47]/,
              length: [15],
              accept: !0,
            },
            diners_cb: {
              name: "Diners Club Carte Blanche",
              regx: /^30[0-5]/,
              length: [14],
              accept: !0,
            },
            diners_int: {
              name: "Diners Club International",
              regx: /^36/,
              length: [14],
              accept: !0,
            },
            jcb: {
              name: "JCB",
              regx: /^35(2[89]|[3-8][0-9])/,
              length: [16],
              accept: !0,
            },
            laser: {
              name: "Laser",
              regx: /^(6304|670[69]|6771)/,
              length: [16, 17, 18, 19],
              accept: !0,
            },
            maestro: {
              name: "Maestro",
              regx: /^(5018|5020|5038|6304|6759|676[1-3])/,
              length: [12, 13, 14, 15, 16, 17, 18, 19],
              accept: !0,
            },
            discover: {
              name: "Discover",
              regx: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,
              length: [16],
              accept: !0,
            },
          };
        }),
        (r.cardAbstract = function (e) {
          var t;
          t = r.cardTypes();
          for (var n in t)
            if (((_cardObj = t[n]), e.match(_cardObj.regx))) return _cardObj;
          return !1;
        }),
        (r.whitelistedAttrs = [
          "holder_name",
          "cvv2",
          "expiration_month",
          "expiration_year",
        ]),
        (r.extractFormAndUpdateCard = function (t, n, a, o, i) {
          var u = e.extractFormInfo(t);
          return r.update(u, n, a, o, i);
        }),
        (r.update = function (t, n, a, o, i) {
          var u = "/" + this.getId();
          return (
            void 0 !== o && null !== o && (u = u + "/customers/" + o),
            void 0 !== i && null !== i && (u = u + "/cards/" + i),
            e.formatData(t, r.whitelistedAttrs),
            e.Update.send(!1, t, n, a, u)
          );
        }),
        r
      );
    }.call(this, this.OpenPay)),
    (this.OpenPay.token = function (t) {
      function r() {
        return r.__super__.constructor.apply(this, arguments);
      }
      return (
        n(t, r),
        (r.whitelistedAttrs = [
          "card_number",
          "holder_name",
          "cvv2",
          "expiration_month",
          "expiration_year",
          "address",
        ]),
        (r.extractFormAndCreate = function (t, n, a, o) {
          var i = e.extractFormInfo(t);
          return r.create(i, n, a);
        }),
        (r.create = function (t, n, a) {
          return (
            e.validate(t, "tarjeta"),
            e.formatData(t, r.whitelistedAttrs),
            e.send("tokens", t, n, a)
          );
        }),
        r
      );
    }.call(this, this.OpenPay)),
    (this.OpenPay.Group.token = function (t) {
      function r() {
        return r.__super__.constructor.apply(this, arguments);
      }
      return (
        n(t, r),
        (r.whitelistedAttrs = [
          "card_number",
          "holder_name",
          "cvv2",
          "expiration_month",
          "expiration_year",
          "address",
        ]),
        (r.extractFormAndCreate = function (t, n, a, o) {
          var i = e.extractFormInfo(t);
          return r.create(i, n, a);
        }),
        (r.create = function (t, n, a) {
          return (
            e.validate(t, "tarjeta"),
            e.formatData(t, r.whitelistedAttrs),
            e.Group.send("tokens", t, n, a)
          );
        }),
        r
      );
    }.call(this, this.OpenPay)),
    (this.OpenPay.Group.card = function (t) {
      function r() {
        return r.__super__.constructor.apply(this, arguments);
      }
      return (
        n(t, r),
        (r.whitelistedAttrs = [
          "holder_name",
          "cvv2",
          "expiration_month",
          "expiration_year",
        ]),
        (r.extractFormAndUpdateCard = function (t, n, a, o, i) {
          var u = e.extractFormInfo(t);
          return r.update(u, n, a, o, i);
        }),
        (r.update = function (t, n, a, o, i) {
          var u = "groups/" + this.Group.id + "/customers/" + o + "/cards/" + i;
          return (
            t.merchant_id || (t.merchant_id = this.getId()),
            e.formatData(t, r.whitelistedAttrs),
            e.Update.send(!0, t, n, a, u)
          );
        }),
        r
      );
    }.call(this, this.OpenPay)),
    (this.OpenPay.utils = function (e) {
      function t() {}
      return (
        n(e, t),
        (t.trim = function (e) {
          return (e + "").replace(/^\s+|\s+$/g, "");
        }),
        (t.underscore = function (e) {
          return (e + "")
            .replace(/([A-Z])/g, function (e) {
              return "_" + e.toLowerCase();
            })
            .replace(/-/g, "_");
        }),
        (t.underscoreKeys = function (e) {
          var t, n;
          n = [];
          for (var r in e)
            (t = e[r]), delete e[r], n.push((e[this.underscore(r)] = t));
          return n;
        }),
        (t.isElement = function (e) {
          return (
            "object" == typeof e &&
            (("undefined" != typeof jQuery &&
              null !== jQuery &&
              e instanceof jQuery) ||
              1 === e.nodeType)
          );
        }),
        t
      );
    }.call(this, this.OpenPay)),
    "undefined" != typeof module &&
      null !== module &&
      (module.exports = this.OpenPay),
    "function" == typeof define &&
      define("openpay", [], function () {
        return r.OpenPay;
      });
}.call(this));
var base64 = {
  PADCHAR: "=",
  ALPHA: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  makeDOMException: function () {
    try {
      return new DOMException(DOMException.INVALID_CHARACTER_ERR);
    } catch (t) {
      var e = new Error("DOM Exception 5");
      return (
        (e.code = e.number = 5),
        (e.name = e.description = "INVALID_CHARACTER_ERR"),
        (e.toString = function () {
          return "Error: " + e.name + ": " + e.message;
        }),
        e
      );
    }
  },
  getbyte64: function (e, t) {
    var n = base64.ALPHA.indexOf(e.charAt(t));
    if (-1 === n) throw base64.makeDOMException();
    return n;
  },
  decode: function (e) {
    e = "" + e;
    var t,
      n,
      r,
      a = base64.getbyte64,
      o = e.length;
    if (0 === o) return e;
    if (o % 4 != 0) throw base64.makeDOMException();
    (t = 0),
      e.charAt(o - 1) === base64.PADCHAR &&
        ((t = 1), e.charAt(o - 2) === base64.PADCHAR && (t = 2), (o -= 4));
    var i = [];
    for (n = 0; n < o; n += 4)
      (r =
        (a(e, n) << 18) |
        (a(e, n + 1) << 12) |
        (a(e, n + 2) << 6) |
        a(e, n + 3)),
        i.push(String.fromCharCode(r >> 16, (r >> 8) & 255, 255 & r));
    switch (t) {
      case 1:
        (r = (a(e, n) << 18) | (a(e, n + 1) << 12) | (a(e, n + 2) << 6)),
          i.push(String.fromCharCode(r >> 16, (r >> 8) & 255));
        break;
      case 2:
        (r = (a(e, n) << 18) | (a(e, n + 1) << 12)),
          i.push(String.fromCharCode(r >> 16));
    }
    return i.join("");
  },
  getbyte: function (e, t) {
    var n = e.charCodeAt(t);
    if (n > 255) throw base64.makeDOMException();
    return n;
  },
  encode: function (e) {
    if (1 !== arguments.length) throw new SyntaxError("Not enough arguments");
    var t,
      n,
      r = base64.PADCHAR,
      a = base64.ALPHA,
      o = base64.getbyte,
      i = [],
      u = (e = "" + e).length - (e.length % 3);
    if (0 === e.length) return e;
    for (t = 0; t < u; t += 3)
      (n = (o(e, t) << 16) | (o(e, t + 1) << 8) | o(e, t + 2)),
        i.push(a.charAt(n >> 18)),
        i.push(a.charAt((n >> 12) & 63)),
        i.push(a.charAt((n >> 6) & 63)),
        i.push(a.charAt(63 & n));
    switch (e.length - u) {
      case 1:
        (n = o(e, t) << 16),
          i.push(a.charAt(n >> 18) + a.charAt((n >> 12) & 63) + r + r);
        break;
      case 2:
        (n = (o(e, t) << 16) | (o(e, t + 1) << 8)),
          i.push(
            a.charAt(n >> 18) +
              a.charAt((n >> 12) & 63) +
              a.charAt((n >> 6) & 63) +
              r
          );
    }
    return i.join("");
  },
};
window.btoa || (window.btoa = base64.encode),
  window.atob || (window.atob = base64.decode);
var $jsonp = (function () {
  var e = {
    send: function (e) {
      var t = new Date().getTime(),
        n = e.callbackName || "callback",
        r = e.onSuccess || function () {},
        a = e.onError || function () {},
        o = e.timeout || 4e3,
        i = e.url || "",
        u = e.data || {};
      dataIdName = "idData";
      var s = encodeURIComponent;
      (u.callback = "var " + dataIdName + "=" + ++t + ";" + n),
        (window[dataIdName] = void 0);
      var c = function (e, t, n) {
        var r, a;
        null == t && (t = []);
        for (r in e)
          (a = e[r]),
            n && (r = n + "." + r),
            "object" == typeof a
              ? c(a, t, r)
              : t.push(
                  ("" + r)
                    .replace(/[\-_\s]+(.)?/g, function (e, t) {
                      return t ? t.toUpperCase() : "";
                    })
                    .replace(/^([A-Z])/, function (e, t) {
                      return t ? t.toLowerCase() : "";
                    }) +
                    "=" +
                    s(a)
                );
        return t.join("&").replace(/%20/g, "+");
      };
      timeout_trigger = window.setTimeout(function () {
        (window[n] = function () {}), a("Timeout after " + o + " milliseconds");
      }, o);
      var d = document.createElement("script");
      (d.type = "text/javascript"), (d.async = !0), (d.src = i + "?" + c(u));
      var p = function () {
          var e;
          null != (e = d.parentNode) && e.removeChild(d);
        },
        l = function () {
          window.clearTimeout(timeout_trigger),
            p(),
            a(
              "There was an error, please verify your authentication data or conection."
            );
        };
      "onreadystatechange" in d
        ? (d.onreadystatechange = function () {
            "loaded" == d.readyState && void 0 === window[dataIdName] && l();
          })
        : "onerror" in d &&
          (d.onerror = function () {
            l();
          }),
        (window[n] = function (e) {
          window.clearTimeout(timeout_trigger), p(), r(e);
        }),
        document.getElementsByTagName("head")[0].appendChild(d);
    },
  };
  return e;
})();
"undefined" != typeof jQuery &&
  (function (e) {
    void 0 !== e &&
      ((e.fn.cardNumberInput = function () {
        return e(this).restrictedInput("card");
      }),
      (e.fn.numericInput = function () {
        return e(this).restrictedInput("numeric");
      }),
      (e.fn.restrictedInput = function (t) {
        var n = e(this),
          r = [
            {
              type: "amex",
              regex: /^3[47]/,
              format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
              length: 15,
            },
            { type: "other", format: /(\d{1,4})/g, length: 16 },
          ],
          a = function (e) {
            var t, n;
            for (e = (e + "").replace(/\D/g, ""), n = 0; n < r.length; n++)
              if ((t = r[n]).regex && t.regex.test(e)) return t;
          },
          o = function (e) {
            var t;
            return (
              !(!e.metaKey && !e.ctrlKey) ||
              0 === e.which ||
              (32 !== e.which &&
                (e.which < 33 ||
                  ((t = String.fromCharCode(e.which)), !!/[\d\s]/.test(t))))
            );
          },
          i = function (t) {
            var n,
              r,
              i = (
                e(t.currentTarget).val() + String.fromCharCode(t.which)
              ).replace(/\D/g, "");
            return (
              (r = o(t)),
              (n = a(i)) ? r && i.length <= n.length : r && i.length <= 16
            );
          },
          u = function (t) {
            var n,
              r = e(t.currentTarget),
              o = r.val(),
              i = String.fromCharCode(t.which),
              u = (o.replace(/\D/g, "") + i).length,
              s = 16,
              c = a(o + i);
            if (/^\d+$/.test(i) && (c && (s = c.length), !(u >= s)))
              return (n =
                c && "amex" === c.type
                  ? /^(\d{4}|\d{4}\s\d{6})$/
                  : /(?:^|\s)(\d{4})$/).test(o)
                ? (t.preventDefault(),
                  setTimeout(function () {
                    return r.val(o + " " + i);
                  }))
                : n.test(o + i)
                ? (t.preventDefault(),
                  setTimeout(function () {
                    return r.val(o + i + " ");
                  }))
                : void 0;
          };
        return (
          "card" === t
            ? n
                .on("keypress", i)
                .on("keypress", u)
                .on("keydown", function (t) {
                  var n = e(t.currentTarget),
                    r = n.val();
                  if (8 === t.which)
                    return /\d\s$/.test(r)
                      ? (t.preventDefault(),
                        setTimeout(function () {
                          return n.val(r.replace(/\d\s$/, ""));
                        }))
                      : /\s\d?$/.test(r)
                      ? (t.preventDefault(),
                        setTimeout(function () {
                          return n.val(r.replace(/\s\d?$/, ""));
                        }))
                      : void 0;
                })
                .on("paste", i)
                .on("paste", u)
                .on("change", u)
                .on("input", u)
            : "numeric" === t &&
              n.on("keypress", o).on("paste", o).on("change", o).on("input", o),
          this
        );
      }));
  })(jQuery);