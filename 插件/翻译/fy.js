/* Copyright 2010 Microsoft Corporation */
window['_mstConfig'] = {
  appId: 'YH0iBv06F8kj2fl3lCD_e8u-j_hxx4nxCohDNzzb__7lQwCakmfCEUnrL--pDQNqUc-7svzy1fWV5ei1orFtpgfZ9flsKi8xsHTFHiiH_F0A1PeYVX3QrxvksjSUy9GKI',
  rootURL: 'http\x3a\x2f\x2fwww.microsofttranslator.com\x2f',
  baseURL: 'http\x3a\x2f\x2fwww.microsofttranslator.com\x2fajax\x2fv3\x2fWidgetV3.ashx\x3fsiteData\x3dueOIGRSKkd965FeEGM5JtQ\x2a\x2a',
  serviceURL: 'https\x3a\x2f\x2fapi.microsofttranslator.com\x2fv2\x2fajax.svc',
  imagePath: 'http\x3a\x2f\x2fwww.microsofttranslator.com\x2fstatic\x2f25824067\x2fimg\x2f',
  debug: false,
  locale: 'zh-chs',
  country: '',
  category: '',
  ref: 'WidgetV3CTF',
  service: 'WC3',
  maxChars: 1000000000,
  noAuto: ["facebook.", "youtube."],
  escapeNonAscii: false,
  requestGroup: '',
  preTrans: false,
  OnErrorHandler: '',
  WidgetSiteDomain: ''
};
window._mstConfig['SignIn'] =
  '<a href="https://login.live.com/login.srf?wa=wsignin1.0&amp;rpsnv=13&amp;ct=1553420974&amp;rver=6.7.6636.0&amp;wp=LBI&amp;wreply=http:%2F%2Fwww.microsofttranslator.com%2Fajax%2Fv2%2Fauth.aspx%3Fpru%3Dhttps%253a%252f%252fwww.cnblogs.com%252f&amp;lc=2052&amp;id=268160">登录</a>';
if (!this.Microsoft) this.Microsoft = {};
if (!this.Microsoft.Translator) this.Microsoft.Translator = {};
if (Microsoft.Translator.Reset) Microsoft.Translator.Reset();
Microsoft.Translator = new function() {
  var H = "8px",
    S = "pointer",
    ib = "2147483647",
    hb = "absolute",
    Pb = "none",
    gb = "direction",
    Ob = "&onerror=",
    Yb = "LanguageMenu",
    Q = "hidden",
    Nb = "&amp;__mstto=",
    Mb = "?__mstto=",
    Lb = "ShareTextbox",
    Kb = "ShareHelpText",
    Jb = "ShareHelpLink",
    Ib = "mailto:?charset=utf-8&subject=",
    Hb = "EmailLink",
    Gb = "EmailBody",
    P = "{1}",
    Fb = "EmailSubject",
    db = "OriginalLanguageSpan",
    Eb = "WidgetLauncher",
    l = 50,
    Db = ".bing.com/",
    Cb = "http://www",
    Bb = "https://ssl",
    Ab = "widget/metrics.js",
    zb = "translator",
    yb = ",translator",
    xb = "this.select()",
    wb = "Microsoft.Translator.OnMouseOutFloater()",
    vb = "onmouseout",
    ub = "stylesheet",
    O = "href",
    tb = "FloaterProgressBar",
    sb = "FloaterEmbed",
    rb = "FloaterSharePanel",
    qb = "WidgetFloaterCollapsed",
    cb = "WidgetFloaterPanels",
    pb = "WidgetFloater",
    ob = "onmouseover",
    nb = "Microsoft.Translator.OnMouseOverFloater()",
    B = "none",
    ec = "__mstto=",
    dc = "dragging",
    N = "lang",
    Z = "font",
    y = "img",
    G = "center",
    M = "false",
    F = "left",
    U = "right",
    u = 100,
    Y = "visible",
    x = 255,
    A = "div",
    mb = "position",
    q = 400,
    n = "px",
    i = "Original",
    Xb = "ta",
    cc = "sv",
    s = "es",
    Wb = "sr-latn",
    Vb = "sr-cyrl",
    fb = "ru",
    T = "pt",
    J = "no",
    bc = "ms",
    Ub = "sw",
    ac = "it",
    eb = "de",
    g = "fr",
    bb = "nl",
    Zb = "zh-cht",
    Tb = "zh-chs",
    lb = "ca",
    m = "ar",
    w = "rtl",
    d = "ltr",
    r = "&",
    X = "TRNS_ERROR_MSG",
    E = "none",
    R = "iframe",
    W = "string",
    f = 16,
    p = true,
    I = "number",
    L = "function",
    V = "undefined",
    ab = "text",
    D = "head",
    kb = "text/javascript",
    e = -1,
    v = "/",
    K = "_mstConfig",
    b = "en",
    o = false,
    Sb = "/static/img/",
    a = "",
    j = null,
    k = this;
  k.AddTranslation = function(i, b, a, j, m, h, c, e, k, l, d, f, g) {
    return new z("AddTranslation", {
      appId: i,
      originalText: b,
      translatedText: a,
      from: j,
      to: m,
      rating: h,
      contentType: c,
      category: e,
      user: k,
      uri: l
    }, d, f, g)
  };
  k.BreakSentences = function(e, f, b, a, c, d) {
    return new z("BreakSentences", {
      appId: e,
      text: f,
      language: b
    }, a, c, d)
  };
  k.Detect = function(d, e, a, b, c) {
    return new z("Detect", {
      appId: d,
      text: e
    }, a, b, c)
  };
  k.DetectArray = function(d, e, a, b, c) {
    return new z("DetectArray", {
      appId: d,
      texts: e
    }, a, b, c)
  };
  k.GetAppIdToken = function(g, c, a, b, d, e, f) {
    return new z("GetAppIdToken", {
      appId: g,
      minRatingRead: c,
      maxRatingWrite: a,
      expireSeconds: b
    }, d, e, f)
  };
  k.GetLanguageNames = function(f, e, a, b, c, d) {
    return new z("GetLanguageNames", {
      appId: f,
      locale: e,
      languageCodes: a
    }, b, c, d)
  };
  k.GetLanguagesForSpeak = function(d, a, b, c) {
    return new z("GetLanguagesForSpeak", {
      appId: d
    }, a, b, c)
  };
  k.GetLanguagesForTranslate = function(d, a, b, c) {
    return new z("GetLanguagesForTranslate", {
      appId: d
    }, a, b, c)
  };
  k.GetTranslations = function(f, h, g, i, a, d, b, c, e) {
    return new z("GetTranslations", {
      appId: f,
      text: h,
      from: g,
      to: i,
      maxTranslations: a,
      options: d
    }, b, c, e)
  };
  k.Translate = function(f, h, g, i, a, c, b, d, e) {
    return new z("Translate", {
      appId: f,
      text: h,
      from: g,
      to: i,
      contentType: a,
      category: c
    }, b, d, e)
  };
  k.AddTranslationArray = function(f, a, g, h, d, b, c, e) {
    return new z("AddTranslationArray", {
      appId: f,
      translations: a,
      from: g,
      to: h,
      options: d
    }, b, c, e)
  };
  k.GetTranslationsArray = function(f, g, h, i, a, d, b, c, e) {
    return new z("GetTranslationsArray", {
      appId: f,
      texts: g,
      from: h,
      to: i,
      maxTranslations: a,
      options: d
    }, b, c, e)
  };
  k.Speak = function(g, h, b, f, d, a, c, e) {
    return new z("Speak", {
      appId: g,
      text: h,
      language: b,
      format: f,
      options: d
    }, a, c, e)
  };
  k.TranslateArray = function(e, f, g, h, c, a, b, d) {
    return new z("TranslateArray", {
      appId: e,
      texts: f,
      from: g,
      to: h,
      options: c
    }, a, b, d)
  };
  k.TranslateArray2 = function(e, f, g, h, c, a, b, d) {
    return new z("TranslateArray2", {
      appId: e,
      texts: f,
      from: g,
      to: h,
      options: c
    }, a, b, d)
  };
  var c = {
    serviceClient: j,
    appId: a,
    lpURL: "http://www.bing.com/translator",
    rootURL: "http://www.microsofttranslator.com/",
    baseURL: "http://www.microsofttranslator.com/Ajax/V2/Toolkit.ashx",
    serviceURL: "http://api.microsofttranslator.com/V2/Ajax.svc",
    imagePath: Sb,
    debug: o,
    locale: b,
    country: a,
    category: a,
    ref: a,
    service: a,
    maxChars: 1e9,
    noAuto: [],
    escapeNonAscii: o,
    requestGroup: a,
    preTrans: o
  };
  c.serviceClient = k;
  if (window[K]) {
    for (var hc in c)
      if (!window[K][hc]) window[K][hc] = c[hc];
    c = window[K]
  } else window[K] = c;
  var Rb = c.serviceClient.LoadScript = new function() {
      function b(f, k) {
        var c = this,
          b = f.toString().match(/^([^:]*:\/\/[^\/]*)(\/[^\?\#]*)([\?][^#]*)*/);
        if (b) {
          c.auth = b[1] || a;
          c.path = b[2] || a;
          c.query = b[3] || a
        } else {
          b = k.toString().match(/^([^:]*:\/\/[^\/]*)(\/[^\?\#]*)([\?][^#]*)*/);
          var h = b[1] || a,
            i = b[2] || a,
            d = f.substr(0, 1) == v ? [] : i.split(v);
          b = f.match(/^([^?]*)([\?][^#]*)*$/);
          var e = (b[1] || a).split(v),
            j = b[2] || a;
          if (d.length > 0 && e.length > 0 && e[0] != ".") d.pop();
          while (e.length > 0) {
            var g = e.shift();
            switch (g) {
              case ".":
                break;
              case "..":
                if (d.length) d.pop();
                break;
              default:
                d.push(g)
            }
          }
          c.auth = h;
          c.path = d.join(v);
          c.query = j
        }
        c.toString = function() {
          return this.auth + this.path + this.query
        };
        return c
      }
      return function(f, i, a) {
        f = (new b(f, i ? i : new b(c.baseURL))).toString();
        a = a ? a : document;
        var g = encodeURIComponent(f).replace(/%\w\w/g, " ").length;
        if (navigator.userAgent.indexOf("MSIE") > e && g > 2048 || g > 8192) return j;
        var d = a.createElement("script");
        d.type = kb;
        d.charset = "utf-8";
        d.src = f;
        var h = a.getElementsByTagName(D)[0];
        if (h) h.appendChild(d);
        else a.documentElement.insertBefore(d, a.documentElement.firstChild);
        return d
      }
    },
    nc = new function() {
      var b = {
          1: "Array",
          2: "Boolean",
          3: "Date",
          4: "Function",
          5: "Number",
          6: "Object",
          7: "RegExp",
          8: "String"
        },
        c = {
          1: "element",
          2: "attribute",
          3: ab,
          4: "cdata",
          5: "entityReference",
          6: "entity",
          7: "instruction",
          8: "comment",
          9: "document",
          10: "documentType",
          11: "documentFragment",
          12: "notation"
        },
        a = {};
      for (var d in b) a[window[b[d]]] = b[d].toLowerCase();
      return function(b) {
        if (b === undefined) return V;
        else if (b === j) return "null";
        else if (typeof b.constructor === L && a[b.constructor]) return a[b.constructor];
        else if (typeof b.nodeType === I && c[b.nodeType]) return c[b.nodeType];
        return typeof b
      }
    },
    gc = new function() {
      var b = j;
      if (navigator.userAgent.toLowerCase().indexOf("msie 6.") > e || navigator.userAgent.toLowerCase().indexOf(
          "webkit") > e && (document.charset || document.characterSet || a).toLowerCase().indexOf("utf") == e) c.escapeNonAscii =
        p;
      var d = "\\u0000",
        q = '"#%&+:;=?@\\',
        l = ["\\x00-\\x1F", "\\x7F-\\xA0"],
        k = ["\\u02B0-\\u038F", "\\u2000-\\u20FF", "\\u3000-\\u303F"],
        i = {
          '"': '\\"',
          "\\": "\\\\"
        },
        g;

      function s() {
        g = new RegExp("[\\s" + q.replace(/./g, function(b) {
          var a = b.charCodeAt(0).toString(f);
          return d.substr(0, d.length - a.length) + a
        }) + l.join(a) + (c.escapeNonAscii ? "\\x7B-\\uFFFF" : k.join(a)) + "]", "g");
        g.compile(g.source, "g")
      }

      function r(a) {
        if (i[a]) return i[a];
        if (a.match(/[\s\xA0]/)) return "+";
        var b = a.charCodeAt(0),
          e = b.toString(f),
          g = encodeURIComponent(a),
          h = d.substr(0, d.length - e.length) + e;
        if (g.length < h.length && b > 34 || c.escapeNonAscii && b > 122) return g;
        else return h
      }

      function h(a) {
        return a.toString().replace(g, r)
      }

      function n(a) {
        return '"' + h(a) + '"'
      }

      function o(e) {
        var c = [];
        for (var a = 0; a < e.length; ++a) {
          var d = gc(e[a]);
          if (d !== b) c.push(d)
        }
        return "[" + c.join(",") + "]"
      }

      function m(d) {
        var c = [];
        for (var a in d) {
          var e = gc(d[a]);
          if (e !== b) c.push('"' + a + '":' + e)
        }
        return "{" + c.join(",") + "}"
      }
      return function(a) {
        s();
        switch (nc(a)) {
          case V:
            return b;
          case "null":
            return b;
          case "boolean":
            return h(a.toString());
          case I:
            return h(a.toString());
          case W:
            return n(a);
          case "array":
            return o(a);
          default:
            return m(a)
        }
      }
    },
    z = new function() {
      var h, g = 0,
        d = window,
        f = (document.charset || document.characterSet || a).toLowerCase();
      if (f.indexOf("utf") == e && f.indexOf("unicode") == e) try {
        c.escapeNonAscii = p;
        var b = document.createElement(R);
        b.id = "MstReqFrm";
        b.style.display = E;
        b.translate = o;
        document.documentElement.insertBefore(b, document.documentElement.firstChild);
        b.contentWindow.document.open("text/html", "replace");
        b.contentWindow.document.write(
          '<html><head><meta charset="utf-8"><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head><body></body></html>'
        );
        b.contentWindow.document.close();
        d = b.contentWindow
      } catch (h) {
        if (c.debug);
      }
      return function(x, l, i, q, s) {
        var h = L,
          e = ++g,
          n, f, k = o,
          v = o,
          u = a,
          z = d["_mstc" + e] = function(a) {
            setTimeout(function() {
              if (v) {
                m(u);
                return
              }
              if (k) return;
              setTimeout(w, 0);
              if (i && typeof i === h) i(a)
            }, 0)
          },
          m = d["_mste" + e] = function(a) {
            setTimeout(function() {
              var c = K;
              if (k) return;
              setTimeout(w, 0);
              if (q && typeof q === h) q(a);
              var b = window[c].OnErrorHandler,
                d = window[c].WidgetSiteDomain;
              if (b)
                if (window == window.top) {
                  if (window[b] && typeof window[b] == h) window[b](a)
                } else if (window.parent) window.parent.postMessage(X + a.toString(), d)
            }, 0)
          };

        function w() {
          try {
            delete d["_mstc" + e]
          } catch (a) {}
          try {
            delete d["_mste" + e]
          } catch (a) {}
          try {
            if (f) f.parentNode.removeChild(f)
          } catch (a) {}
          try {
            if (n) clearTimeout(n)
          } catch (a) {}
          k = p
        }
        this.abort = function(b) {
          v = p;
          u = "The request has been aborted" + (b ? ": " + b : a)
        };
        var b = [];
        for (var t in l)
          if (l[t] != j) b.push(t + "=" + gc(l[t]));
        b.push("oncomplete=_mstc" + e);
        b.push("onerror=_mste" + e);
        b.push("loc=" + encodeURIComponent(c.locale));
        b.push("ctr=" + encodeURIComponent(c.country));
        if (c.ref) b.push("ref=" + encodeURIComponent(c.ref));
        b.push("rgp=" + encodeURIComponent(c.requestGroup));
        var y = "./" + x + "?" + b.join(r);
        f = Rb(y, c.serviceURL, d.document);
        if (f) {
          if (typeof s === I && s > 0) n = setTimeout(function() {
            m("The request has timed out")
          }, s)
        } else {
          if (c.debug);
          m("The script could not be loaded")
        }
        return this
      }
    },
    lc = {
      af: "Afrikaans",
      ar: "العربية",
      bn: "বাংলা",
      "bs-Latn": "Bosanski (latinica)",
      bg: "Български",
      ca: "Català",
      "zh-CHS": "简体中文",
      "zh-CHT": "繁體中文",
      yue: "Cantonese (Traditional)",
      hr: "Hrvatski",
      cs: "Čeština",
      da: "Dansk",
      nl: "Nederlands",
      en: "English",
      et: "Eesti",
      fj: "Fijian",
      fil: "Filipino",
      fi: "Suomi",
      fr: "Français",
      de: "Deutsch",
      el: "Ελληνικά",
      ht: "Haitian Creole",
      he: "עברית",
      hi: "हिंदी",
      mww: "Hmong Daw",
      hu: "Magyar",
      is: "Íslenska",
      id: "Indonesia",
      it: "Italiano",
      ja: "日本語",
      sw: "Kiswahili",
      tlh: "Klingon",
      ko: "한국어",
      lv: "Latviešu",
      lt: "Lietuvių",
      mg: "Malagasy",
      ms: "Melayu",
      mt: "Il-Malti",
      yua: "Yucatec Maya",
      no: "Norsk",
      otq: "Querétaro Otomi",
      fa: "Persian",
      pl: "Polski",
      pt: "Português",
      ro: "Română",
      ru: "Русский",
      sm: "Samoan",
      "sr-Cyrl": "Srpski (ćirilica)",
      "sr-Latn": "Srpski (latinica)",
      sk: "Slovenčina",
      sl: "Slovenščina",
      es: "Español",
      sv: "Svenska",
      ty: "Tahitian",
      ta: "தமிழ்",
      te: "తెలుగు",
      th: "ไทย",
      to: "Lea fakatonga",
      tr: "Türkçe",
      uk: "Українська",
      ur: "اردو",
      vi: "Tiếng Việt",
      cy: "Welsh"
    },
    fc = {
      af: d,
      ar: w,
      bn: d,
      "bs-latn": d,
      bg: d,
      ca: d,
      "zh-chs": d,
      "zh-cht": d,
      yue: d,
      hr: d,
      cs: d,
      da: d,
      nl: d,
      en: d,
      et: d,
      fj: d,
      fil: d,
      fi: d,
      fr: d,
      de: d,
      el: d,
      ht: d,
      he: w,
      hi: d,
      mww: d,
      hu: d,
      is: d,
      id: d,
      it: d,
      ja: d,
      sw: d,
      tlh: d,
      "tlh-qaak": d,
      ko: d,
      lv: d,
      lt: d,
      mg: d,
      ms: d,
      mt: d,
      yua: d,
      no: d,
      otq: d,
      fa: w,
      pl: d,
      pt: d,
      ro: d,
      ru: d,
      sm: d,
      "sr-cyrl": d,
      "sr-latn": d,
      sk: d,
      sl: d,
      es: d,
      sv: d,
      ty: d,
      ta: d,
      te: d,
      th: d,
      to: d,
      tr: d,
      uk: d,
      ur: w,
      vi: d,
      cy: d
    },
    jb = {
      "af-na": "af",
      af: "af",
      "af-za": "af",
      "ar-001": m,
      ar: m,
      "ar-ae": m,
      "ar-bh": m,
      "ar-dj": m,
      "ar-dz": m,
      "ar-eg": m,
      "ar-er": m,
      "ar-il": m,
      "ar-iq": m,
      "ar-jo": m,
      "ar-km": m,
      "ar-kw": m,
      "ar-lb": m,
      "ar-ly": m,
      "ar-ma": m,
      "ar-mr": m,
      "ar-om": m,
      "ar-ps": m,
      "ar-qa": m,
      "ar-sa": m,
      "ar-sd": m,
      "ar-so": m,
      "ar-ss": m,
      "ar-sy": m,
      "ar-td": m,
      "ar-tn": m,
      "ar-ye": m,
      "bn-bd": "bn",
      bn: "bn",
      "bn-in": "bn",
      "bs-latn-ba": "bs-latn",
      "bs-latn": "bs-latn",
      "bg-bg": "bg",
      bg: "bg",
      "ca-ad": lb,
      ca: lb,
      "ca-es": lb,
      "ca-es-valencia": lb,
      "ca-fr": lb,
      "ca-it": lb,
      "zh-cn": Tb,
      "zh-chs": Tb,
      "zh-hans-hk": Tb,
      "zh-hans-mo": Tb,
      "zh-sg": Tb,
      "zh-hk": Zb,
      "zh-cht": Zb,
      "zh-mo": Zb,
      "zh-tw": Zb,
      "hr-ba": "hr",
      hr: "hr",
      "hr-hr": "hr",
      "cs-cz": "cs",
      cs: "cs",
      "da-dk": "da",
      da: "da",
      "da-gl": "da",
      "nl-aw": bb,
      nl: bb,
      "nl-be": bb,
      "nl-bq": bb,
      "nl-cw": bb,
      "nl-nl": bb,
      "nl-sr": bb,
      "nl-sx": bb,
      "en-001": b,
      en: b,
      "en-029": b,
      "en-150": b,
      "en-ag": b,
      "en-ai": b,
      "en-as": b,
      "en-at": b,
      "en-au": b,
      "en-bb": b,
      "en-be": b,
      "en-bi": b,
      "en-bm": b,
      "en-bs": b,
      "en-bw": b,
      "en-bz": b,
      "en-ca": b,
      "en-cc": b,
      "en-ch": b,
      "en-ck": b,
      "en-cm": b,
      "en-cx": b,
      "en-cy": b,
      "en-de": b,
      "en-dk": b,
      "en-dm": b,
      "en-er": b,
      "en-fi": b,
      "en-fj": b,
      "en-fk": b,
      "en-fm": b,
      "en-gb": b,
      "en-gd": b,
      "en-gg": b,
      "en-gh": b,
      "en-gi": b,
      "en-gm": b,
      "en-gu": b,
      "en-gy": b,
      "en-hk": b,
      "en-id": b,
      "en-ie": b,
      "en-il": b,
      "en-im": b,
      "en-in": b,
      "en-io": b,
      "en-je": b,
      "en-jm": b,
      "en-ke": b,
      "en-ki": b,
      "en-kn": b,
      "en-ky": b,
      "en-lc": b,
      "en-lr": b,
      "en-ls": b,
      "en-mg": b,
      "en-mh": b,
      "en-mo": b,
      "en-mp": b,
      "en-ms": b,
      "en-mt": b,
      "en-mu": b,
      "en-mw": b,
      "en-my": b,
      "en-na": b,
      "en-nf": b,
      "en-ng": b,
      "en-nl": b,
      "en-nr": b,
      "en-nu": b,
      "en-nz": b,
      "en-pg": b,
      "en-ph": b,
      "en-pk": b,
      "en-pn": b,
      "en-pr": b,
      "en-pw": b,
      "en-rw": b,
      "en-sb": b,
      "en-sc": b,
      "en-sd": b,
      "en-se": b,
      "en-sg": b,
      "en-sh": b,
      "en-si": b,
      "en-sl": b,
      "en-ss": b,
      "en-sx": b,
      "en-sz": b,
      "en-tc": b,
      "en-tk": b,
      "en-to": b,
      "en-tt": b,
      "en-tv": b,
      "en-tz": b,
      "en-ug": b,
      "en-um": b,
      "en-us": b,
      "en-vc": b,
      "en-vg": b,
      "en-vi": b,
      "en-vu": b,
      "en-ws": b,
      "en-za": b,
      "en-zm": b,
      "en-zw": b,
      "et-ee": "et",
      et: "et",
      "fil-ph": "fil",
      fil: "fil",
      "fi-fi": "fi",
      fi: "fi",
      "fr-029": g,
      fr: g,
      "fr-be": g,
      "fr-bf": g,
      "fr-bi": g,
      "fr-bj": g,
      "fr-bl": g,
      "fr-ca": g,
      "fr-cd": g,
      "fr-cf": g,
      "fr-cg": g,
      "fr-ch": g,
      "fr-ci": g,
      "fr-cm": g,
      "fr-dj": g,
      "fr-dz": g,
      "fr-fr": g,
      "fr-ga": g,
      "fr-gf": g,
      "fr-gn": g,
      "fr-gp": g,
      "fr-gq": g,
      "fr-ht": g,
      "fr-km": g,
      "fr-lu": g,
      "fr-ma": g,
      "fr-mc": g,
      "fr-mf": g,
      "fr-mg": g,
      "fr-ml": g,
      "fr-mq": g,
      "fr-mr": g,
      "fr-mu": g,
      "fr-nc": g,
      "fr-ne": g,
      "fr-pf": g,
      "fr-pm": g,
      "fr-re": g,
      "fr-rw": g,
      "fr-sc": g,
      "fr-sn": g,
      "fr-sy": g,
      "fr-td": g,
      "fr-tg": g,
      "fr-tn": g,
      "fr-vu": g,
      "fr-wf": g,
      "fr-yt": g,
      "de-at": eb,
      de: eb,
      "de-be": eb,
      "de-ch": eb,
      "de-de": eb,
      "de-li": eb,
      "de-lu": eb,
      "el-cy": "el",
      el: "el",
      "el-gr": "el",
      "he-il": "he",
      he: "he",
      "hi-in": "hi",
      hi: "hi",
      "hu-hu": "hu",
      hu: "hu",
      "is-is": "is",
      is: "is",
      "id-id": "id",
      id: "id",
      "it-ch": ac,
      it: ac,
      "it-it": ac,
      "it-sm": ac,
      "ja-jp": "ja",
      ja: "ja",
      "sw-cd": Ub,
      sw: Ub,
      "sw-ke": Ub,
      "sw-tz": Ub,
      "sw-ug": Ub,
      "ko-kp": "ko",
      ko: "ko",
      "ko-kr": "ko",
      "lv-lv": "lv",
      lv: "lv",
      "lt-lt": "lt",
      lt: "lt",
      "mg-mg": "mg",
      mg: "mg",
      "ms-bn": bc,
      ms: bc,
      "ms-my": bc,
      "ms-sg": bc,
      "mt-mt": "mt",
      mt: "mt",
      "nb-no": J,
      nb: J,
      no: J,
      "nb-sj": J,
      "nn-no": J,
      nn: J,
      "fa-ir": "fa",
      fa: "fa",
      "pl-pl": "pl",
      pl: "pl",
      "pt-ao": T,
      pt: T,
      "pt-br": T,
      "pt-cv": T,
      "pt-gw": T,
      "pt-mo": T,
      "pt-mz": T,
      "pt-pt": T,
      "pt-st": T,
      "pt-tl": T,
      "ro-md": "ro",
      ro: "ro",
      "ro-ro": "ro",
      "ru-by": fb,
      ru: fb,
      "ru-kg": fb,
      "ru-kz": fb,
      "ru-md": fb,
      "ru-ru": fb,
      "ru-ua": fb,
      "sr-cyrl-ba": Vb,
      "sr-cyrl": Vb,
      "sr-cyrl-me": Vb,
      "sr-cyrl-rs": Vb,
      "sr-cyrl-xk": Vb,
      "sr-latn-ba": Wb,
      "sr-latn": Wb,
      "sr-latn-me": Wb,
      "sr-latn-rs": Wb,
      "sr-latn-xk": Wb,
      "sk-sk": "sk",
      sk: "sk",
      "sl-si": "sl",
      sl: "sl",
      "es-419": s,
      es: s,
      "es-ar": s,
      "es-bo": s,
      "es-cl": s,
      "es-co": s,
      "es-cr": s,
      "es-cu": s,
      "es-do": s,
      "es-ec": s,
      "es-es": s,
      "es-gq": s,
      "es-gt": s,
      "es-hn": s,
      "es-mx": s,
      "es-ni": s,
      "es-pa": s,
      "es-pe": s,
      "es-ph": s,
      "es-pr": s,
      "es-py": s,
      "es-sv": s,
      "es-us": s,
      "es-uy": s,
      "es-ve": s,
      "sv-ax": cc,
      sv: cc,
      "sv-fi": cc,
      "sv-se": cc,
      "ta-in": Xb,
      ta: Xb,
      "ta-lk": Xb,
      "ta-my": Xb,
      "ta-sg": Xb,
      "te-in": "te",
      te: "te",
      "th-th": "th",
      th: "th",
      "to-to": "to",
      to: "to",
      "tr-cy": "tr",
      tr: "tr",
      "tr-tr": "tr",
      "uk-ua": "uk",
      uk: "uk",
      "ur-in": "ur",
      ur: "ur",
      "ur-pk": "ur",
      "vi-vn": "vi",
      vi: "vi",
      "cy-gb": "cy",
      cy: "cy"
    },
    ic = {
      af: i,
      ar: "الأصلي",
      bn: i,
      "bs-latn": i,
      bg: "Първоначален текст",
      ca: i,
      "zh-chs": "原文",
      "zh-cht": "原始語言",
      yue: i,
      hr: i,
      cs: "Původní",
      da: "Oprindelig",
      nl: "Origineel",
      en: i,
      et: "Lähtetekst",
      fj: i,
      fil: i,
      fi: "Alkuperäinen",
      fr: "Langue source",
      de: i,
      el: "Πρωτότυπο",
      ht: i,
      he: "מקור",
      hi: "मूल",
      mww: i,
      hu: "Eredeti",
      is: i,
      id: "Asli",
      it: "Originale",
      ja: "翻訳元",
      sw: i,
      tlh: i,
      "tlh-qaak": i,
      ko: "원문 언어",
      lv: "Oriģināls",
      lt: "Originalas",
      mg: i,
      ms: i,
      mt: i,
      yua: i,
      no: i,
      otq: i,
      fa: i,
      pl: "Oryginał",
      pt: i,
      ro: i,
      ru: "Исходный текст",
      sm: i,
      "sr-cyrl": i,
      "sr-latn": i,
      sk: "Pôvodný text",
      sl: "Izvirnik",
      es: i,
      sv: i,
      ty: i,
      ta: i,
      te: i,
      th: "ต้นฉบับ",
      to: i,
      tr: i,
      uk: "Оригінал",
      ur: i,
      vi: "Bản gốc",
      cy: i
    };
  window["localizedLangs"] = lc;
  window["languageDirs"] = fc;
  window["languageMappings"] = jb;
  window["localizedOriginal"] = ic;
  var h = new function() {
    var t = "100%",
      k = "0px",
      i = n,
      m = o,
      g = "0",
      b = this,
      z = [66, 77, 0, 0, 0, 0, 0, 0, 0, 0, 54, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 24, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ],
      l = [],
      u = [{
        a: "A",
        l: 26
      }, {
        a: "a",
        l: 26
      }, {
        a: g,
        l: 10
      }, {
        a: "+",
        l: 1
      }, {
        a: v,
        l: 1
      }];
    for (var s = 0; s < u.length; ++s)
      for (var w = 0; w < u[s].l; ++w) l.push(String.fromCharCode(u[s].a.charCodeAt(0) + w));
    b.addEvent = function(a, c, d, e) {
      var b = function() {
        return d(a, e)
      };
      if (a.addEventListener) a.addEventListener(c, b, m);
      else if (a.attachEvent) a.attachEvent("on" + c, b);
      return b
    };
    b.removeEvent = function(a, c, b) {
      if (a.removeEventListener) a.removeEventListener(c, b, m);
      else if (a.detachEvent) a.detachEvent("on" + c, b)
    };
    var d = b.getStyleValue = function(c, b) {
        if (c.style[b]) return c.style[b];
        if (c.currentStyle) return !c.currentStyle[b] ? a : c.currentStyle[b];
        if (document.defaultView && document.defaultView.getComputedStyle) {
          b = b.replace(/([A-Z])/g, "-$1").toLowerCase();
          var d = document.defaultView.getComputedStyle(c, a);
          return d && d.getPropertyValue(b)
        }
        return a
      },
      M = b.fixIEQuirks = function(a) {
        if (a.tagName.toLowerCase() === "select") return;
        var f = d(a, "width");
        if (f && f.indexOf(i) > e) a.style.width = parseInt(f) + parseInt(g + d(a, "borderLeftWidth")) + parseInt(g +
          d(a, "borderRightWidth")) + parseInt(g + d(a, "paddingLeft")) + parseInt(g + d(a, "paddingRight")) + i;
        var c = d(a, "height");
        if (c && c.indexOf(i) > e) a.style.height = parseInt(c) + parseInt(g + d(a, "borderTopWidth")) + parseInt(g +
          d(a, "borderBottomWidth")) + parseInt(g + d(a, "paddingTop")) + parseInt(g + d(a, "paddingBottom")) + i;
        for (var b = 0; b < a.childNodes.length; ++b)
          if (a.childNodes[b].nodeType === 1) M(a.childNodes[b])
      };
    b.absXPos = function(a) {
      if (a.getBoundingClientRect) return a.getBoundingClientRect().left + (Math.max(a.ownerDocument.documentElement
        .scrollLeft, a.ownerDocument.body.scrollLeft) - Math.max(a.ownerDocument.documentElement.clientLeft,
        a.ownerDocument.documentElement.offsetLeft));
      else return B(a) + C(a)
    };

    function B(a) {
      return a.offsetLeft + (a.offsetParent && a.offsetParent.nodeType == 1 ? B(a.offsetParent) : 0)
    }

    function C(a) {
      return (a.parentNode && a.parentNode.nodeType == 1 ? C(a.parentNode) : 0) + (a.nodeName.toLowerCase() !=
        "html" && a.nodeName.toLowerCase() != "body" && a.scrollLeft ? -a.scrollLeft : 0)
    }
    b.absYPos = function(a) {
      if (a.getBoundingClientRect) return a.getBoundingClientRect().top + (Math.max(a.ownerDocument.documentElement
        .scrollTop, a.ownerDocument.body.scrollTop) - Math.max(a.ownerDocument.documentElement.clientTop, a
        .ownerDocument.documentElement.offsetTop));
      else return D(a) + F(a)
    };

    function D(a) {
      return a.offsetTop + (a.offsetParent && a.offsetParent.nodeType == 1 ? D(a.offsetParent) : 0)
    }

    function F(a) {
      return (a.parentNode && a.parentNode.nodeType == 1 ? F(a.parentNode) : 0) + (a.nodeName.toLowerCase() !=
        "html" && a.nodeName.toLowerCase() != "body" && a.scrollTop ? -a.scrollTop : 0)
    }
    b.getVisibleWidth = function(b) {
      var a = q;
      if (window.innerWidth && window.innerWidth > a) a = window.innerWidth;
      else if (b.documentElement.clientWidth && b.documentElement.clientWidth > a) a = b.documentElement.clientWidth;
      else if (b.body.clientWidth && b.body.clientWidth > a) a = b.body.clientWidth;
      return a
    };
    b.getVisibleHeight = function(a) {
      return L(a) ? a.body.clientHeight : a.documentElement.clientHeight
    };
    b.getStringByteCount = function(a) {
      return c.escapeNonAscii ? encodeURIComponent(a).length : encodeURIComponent(a).replace(/%\w\w/g, " ").length
    };
    var J = b.getBlockParent = function(a) {
        var b = a._display = a._display || h.getStyleValue(a, "display"),
          c = a._position = a._position || h.getStyleValue(a, mb);
        return b && b.toLowerCase() == "inline" && c.toLowerCase() == "static" && a.parentNode && a.parentNode.nodeType ==
          1 ? J(a.parentNode) : a
      },
      L = b.isQuirksMode = function(a) {
        if (a.compatMode && a.compatMode.indexOf("CSS") != e) return m;
        else return p
      },
      G = b.isInternetExplorer11OrHigher = function() {
        var a = m;
        if (navigator.appName == "Netscape") {
          var c = navigator.userAgent,
            b = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})");
          if (b.exec(c) != j) {
            rv = parseFloat(RegExp.$1);
            if (rv >= 11) a = p
          }
        }
        return a
      },
      O = b.isInternetExplorerAnyVersion = function() {
        var a = y(),
          b = G();
        return a || b
      },
      y = b.isInternetExplorer = function() {
        return window.navigator.userAgent.toUpperCase().indexOf("MSIE") > e
      };
    b.setGradient = function(a, b, c, d) {
      if (!d) d = a.offsetHeight;
      if (a._mstGradCol1 != b.toString() || a._mstGradCol2 != c.toString()) {
        if (a._mstGradElem && a._mstGradElem.parentNode == a) a.removeChild(a._mstGradElem);
        if (b.toString() == c.toString()) a.style.backgroundColor = "#" + b.toString();
        else if (y() && (!document.documentMode || document.documentMode < 8)) I(a, b, c, d);
        else {
          a.style.backgroundRepeat = "repeat-x";
          a.style.backgroundImage = "url('data:image/x-ms-bmp;base64," + K(H(b, c, d)) + "')"
        }
        a._mstGradCol1 = b.toString();
        a._mstGradCol2 = c.toString()
      }
    };

    function I(a, b, c, f) {
      var e = ",endColorStr=#FF",
        d = "progid:DXImageTransform.Microsoft.Gradient(startColorStr=#FF";
      a._mstGradElem = document.createElement(A);
      a._mstGradElem.style.fontSize = k;
      a._mstGradElem.style.width = t;
      a._mstGradElem.style.height = f + i;
      a._mstGradElem.style.marginBottom = "-" + a._mstGradElem.style.height;
      a.insertBefore(a._mstGradElem, a.firstChild);
      a._mstGradElem.appendChild(document.createElement(A));
      a._mstGradElem.appendChild(document.createElement(A));
      a._mstGradElem.firstChild.style.width = a._mstGradElem.lastChild.style.width = t;
      a._mstGradElem.firstChild.style.height = a._mstGradElem.lastChild.style.height = f / 2 + i;
      a._mstGradElem.firstChild.style.fontSize = a._mstGradElem.lastChild.style.fontSize = k;
      a._mstGradElem.firstChild.style.filter = d + c + e + c.interpolate(b, .5) + ")";
      a._mstGradElem.lastChild.style.filter = d + b + e + b.interpolate(c, .5) + ")"
    }

    function H(f, g, c) {
      var e = 1 * c,
        a = [];
      for (var b = 0; b < z.length; ++b) a.push(z[b]);
      r(a, 2, 54 + e * 4);
      r(a, 18, 1);
      r(a, 22, c);
      r(a, 34, e * 4);
      for (var b = 0; b < c; ++b) {
        var d = b < c / 2 ? f.interpolate(g, .5 - b / c) : f.interpolate(g, b / c);
        a.push(d.b);
        a.push(d.g);
        a.push(d.r);
        a.push(x)
      }
      return a
    }

    function r(a, b, c) {
      a.splice(b, 1, c & x);
      a.splice(b + 1, 1, c >>> 8 & x);
      a.splice(b + 2, 1, c >>> f & x);
      a.splice(b + 3, 1, c >>> 24 & x)
    }
    b.applyProtectiveCss = function(a) {
      var d = "content-box",
        c = "normal",
        b = E;
      a.style.backgroundAttachment = "scroll";
      a.style.backgroundColor = "Transparent";
      a.style.backgroundImage = b;
      a.style.color = "White";
      a.style.fontStyle = c;
      a.style.fontVariant = c;
      a.style.fontWeight = c;
      a.style.letterSpacing = c;
      a.style.lineHeight = c;
      a.style.margin = k;
      a.style.outline = b;
      a.style.overflow = Y;
      a.style.padding = k;
      a.style.verticalAlign = "baseline";
      a.style.wordSpacing = c;
      a.style.fontFamily =
        '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif';
      try {
        a.style.fontSize = "inherit"
      } catch (e) {
        a.style.fontSize = t
      }
      a.style.textTransform = b;
      a.style.textDecoration = b;
      a.style.border = k;
      a.style.boxSizing = d;
      a.style.MozBoxSizing = d;
      a.style.float = b;
      a.style.maxWidth = b
    };

    function K(c) {
      var e = 1048576,
        d = [];
      while (c.length) {
        var b = [];
        b.push(c.shift());
        d.push(l[b[0] >> 2 & 63]);
        b.push(c.length > 0 ? c.shift() : e);
        b.push(c.length > 0 ? c.shift() : e);
        d.push(l[(b[0] << 4 | b[1] >>> 4) & 63]);
        d.push(b[1] == e ? "=" : l[(b[1] << 2 | b[2] >>> 6) & 63]);
        d.push(b[2] == e ? "=" : l[b[2] & 63])
      }
      return d.join(a)
    }
    var N = b.clone = function(a) {
      var c = {};
      for (var b in a)
        if (typeof a[b] === "object" && a !== j) c[b] = this.clone(a);
        else c[b] = a[b];
      return c
    };
    b.compress = function(i) {
      var d = {},
        g = 0,
        h = 0,
        b = a,
        c, e, f = [];
      while (c = i.charAt(h++)) {
        d[c] = c.charCodeAt(0);
        e = b + c;
        if (d[e]) b = e;
        else {
          d[e] = --g;
          f.push(d[b]);
          b = c
        }
      }
      if (b) f.push(d[b]);
      return f
    };
    b.decompress = function(f) {
      var d = {},
        e = 0,
        g = 0,
        c = String.fromCharCode(f[g++]),
        a, b, h = c;
      while (a = f[g++]) {
        if (a > 0) d[a] = String.fromCharCode(a);
        if (d[a]) b = d[a];
        else if (a + 1 == e) b = c + c.charAt(0);
        else throw "Invalid input data";
        h += b;
        d[--e] = c + b.charAt(0);
        c = b
      }
      return h
    };
    return b
  };

  function C(e, d, c) {
    var a = this;
    a.r = e;
    a.g = d;
    a.b = c;
    for (var b in a) a[b] = a[b] > x ? x : a[b] < 0 ? 0 : a[b];
    a.toString = function() {
      var c = "0" + this.r.toString(f),
        b = "0" + this.g.toString(f),
        a = "0" + this.b.toString(f);
      return (c.substr(c.length - 2) + b.substr(b.length - 2) + a.substr(a.length - 2)).toUpperCase()
    };
    a.interpolate = function(b, c) {
      var a = this;
      if (a.toString() == b.toString()) return new C(a.r, a.g, a.b);
      return new C(Math.round(a.r + c * (b.r - a.r)), Math.round(a.g + c * (b.g - a.g)), Math.round(a.b + c * (b.b -
        a.b)))
    };
    return a
  }
  C.parse = function(a) {
    var b = a.match(/rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)/i);
    if (b) return new C(parseInt(b[1], 10), parseInt(b[2], 10), parseInt(b[3], 10));
    a = a.split(" ")[0];
    if (a.substr(0, 1) == "#") {
      if (a.length == 4) return new C(f * parseInt(a.substr(1, 1), f), f * parseInt(a.substr(2, 1), f), f *
        parseInt(a.substr(3, 1), f));
      else if (a.length == 7) return new C(parseInt(a.substr(1, 2), f), parseInt(a.substr(3, 2), f), parseInt(a.substr(
        5, 2), f))
    } else if (C.nameTable[a.toLowerCase()]) return C.parse(C.nameTable[a.toLowerCase()]);
    else throw "Color format not suported: " + a;
  };
  C.nameTable = {
    Black: "#000000",
    Navy: "#000080",
    DarkBlue: "#00008B",
    MediumBlue: "#0000CD",
    Blue: "#0000FF",
    DarkGreen: "#006400",
    Green: "#008000",
    Teal: "#008080",
    DarkCyan: "#008B8B",
    DeepSkyBlue: "#00BFFF",
    DarkTurquoise: "#00CED1",
    MediumSpringGreen: "#00FA9A",
    Lime: "#00FF00",
    SpringGreen: "#00FF7F",
    Aqua: "#00FFFF",
    Cyan: "#00FFFF",
    MidnightBlue: "#191970",
    DodgerBlue: "#1E90FF",
    LightSeaGreen: "#20B2AA",
    ForestGreen: "#228B22",
    SeaGreen: "#2E8B57",
    DarkSlateGray: "#2F4F4F",
    LimeGreen: "#32CD32",
    MediumSeaGreen: "#3CB371",
    Turquoise: "#40E0D0",
    RoyalBlue: "#4169E1",
    SteelBlue: "#4682B4",
    DarkSlateBlue: "#483D8B",
    MediumTurquoise: "#48D1CC",
    "Indigo ": "#4B0082",
    DarkOliveGreen: "#556B2F",
    CadetBlue: "#5F9EA0",
    CornflowerBlue: "#6495ED",
    MediumAquaMarine: "#66CDAA",
    DimGray: "#696969",
    SlateBlue: "#6A5ACD",
    OliveDrab: "#6B8E23",
    SlateGray: "#708090",
    LightSlateGray: "#778899",
    MediumSlateBlue: "#7B68EE",
    LawnGreen: "#7CFC00",
    Chartreuse: "#7FFF00",
    Aquamarine: "#7FFFD4",
    Maroon: "#800000",
    Purple: "#800080",
    Olive: "#808000",
    Gray: "#808080",
    SkyBlue: "#87CEEB",
    LightSkyBlue: "#87CEFA",
    BlueViolet: "#8A2BE2",
    DarkRed: "#8B0000",
    DarkMagenta: "#8B008B",
    SaddleBrown: "#8B4513",
    DarkSeaGreen: "#8FBC8F",
    LightGreen: "#90EE90",
    MediumPurple: "#9370D8",
    DarkViolet: "#9400D3",
    PaleGreen: "#98FB98",
    DarkOrchid: "#9932CC",
    YellowGreen: "#9ACD32",
    Sienna: "#A0522D",
    Brown: "#A52A2A",
    DarkGray: "#A9A9A9",
    LightBlue: "#ADD8E6",
    GreenYellow: "#ADFF2F",
    PaleTurquoise: "#AFEEEE",
    LightSteelBlue: "#B0C4DE",
    PowderBlue: "#B0E0E6",
    FireBrick: "#B22222",
    DarkGoldenRod: "#B8860B",
    MediumOrchid: "#BA55D3",
    RosyBrown: "#BC8F8F",
    DarkKhaki: "#BDB76B",
    Silver: "#C0C0C0",
    MediumVioletRed: "#C71585",
    "IndianRed ": "#CD5C5C",
    Peru: "#CD853F",
    Chocolate: "#D2691E",
    Tan: "#D2B48C",
    LightGrey: "#D3D3D3",
    PaleVioletRed: "#D87093",
    Thistle: "#D8BFD8",
    Orchid: "#DA70D6",
    GoldenRod: "#DAA520",
    Crimson: "#DC143C",
    Gainsboro: "#DCDCDC",
    Plum: "#DDA0DD",
    BurlyWood: "#DEB887",
    LightCyan: "#E0FFFF",
    Lavender: "#E6E6FA",
    DarkSalmon: "#E9967A",
    Violet: "#EE82EE",
    PaleGoldenRod: "#EEE8AA",
    LightCoral: "#F08080",
    Khaki: "#F0E68C",
    AliceBlue: "#F0F8FF",
    HoneyDew: "#F0FFF0",
    Azure: "#F0FFFF",
    SandyBrown: "#F4A460",
    Wheat: "#F5DEB3",
    Beige: "#F5F5DC",
    WhiteSmoke: "#F5F5F5",
    MintCream: "#F5FFFA",
    GhostWhite: "#F8F8FF",
    Salmon: "#FA8072",
    AntiqueWhite: "#FAEBD7",
    Linen: "#FAF0E6",
    LightGoldenRodYellow: "#FAFAD2",
    OldLace: "#FDF5E6",
    Red: "#FF0000",
    Fuchsia: "#FF00FF",
    Magenta: "#FF00FF",
    DeepPink: "#FF1493",
    OrangeRed: "#FF4500",
    Tomato: "#FF6347",
    HotPink: "#FF69B4",
    Coral: "#FF7F50",
    Darkorange: "#FF8C00",
    LightSalmon: "#FFA07A",
    Orange: "#FFA500",
    LightPink: "#FFB6C1",
    Pink: "#FFC0CB",
    Gold: "#FFD700",
    PeachPuff: "#FFDAB9",
    NavajoWhite: "#FFDEAD",
    Moccasin: "#FFE4B5",
    Bisque: "#FFE4C4",
    MistyRose: "#FFE4E1",
    BlanchedAlmond: "#FFEBCD",
    PapayaWhip: "#FFEFD5",
    LavenderBlush: "#FFF0F5",
    SeaShell: "#FFF5EE",
    Cornsilk: "#FFF8DC",
    LemonChiffon: "#FFFACD",
    FloralWhite: "#FFFAF0",
    Snow: "#FFFAFA",
    Yellow: "#FFFF00",
    LightYellow: "#FFFFE0",
    Ivory: "#FFFFF0",
    White: "#FFFFFF"
  };
  new function() {
    var a = {};
    for (var b in C.nameTable) a[b.toLowerCase()] = C.nameTable[b];
    C.nameTable = a
  };

  function mc(Fb, nb, qb, ob, db, Gc, Cc, P, J, Lc) {
    var hc = "Element too deep",
      K = "b",
      Gb = "LP",
      sb = I,
      v = a,
      g = j,
      Yb = "scroll",
      Xb = D,
      gb = " ",
      s = o,
      i = p,
      x = this,
      k = x,
      L = qb,
      O = ob,
      l = nb,
      Tb = db,
      vc = Gc,
      kb = Cc,
      Mb = [],
      H, bb, pc = J ? i : s,
      hb = i,
      Ec;
    window.Microsoft.Translator.APIRequests = 0;
    window.Microsoft.Translator.APIResponses = 0;
    window.Microsoft.Translator.translationCallsTime = [];
    window.Microsoft.Translator.totalTranslationTime = 0;
    var yb, Hb = !Lc && !J,
      C = 0,
      E = 9,
      X = 0,
      ec = 15,
      dc = u;
    if (navigator.userAgent && (navigator.userAgent.indexOf("Chrome") > e || navigator.userAgent.indexOf("Mobile") >
        e)) {
      ec /= 3;
      E /= 2;
      dc /= 3;
      X = 200
    }
    kb = kb * E;
    var Lb = [],
      Nb = [],
      t = {};
    t.size = 0;
    var vb = [],
      S;
    c.requestGroup = Math.floor(Math.random() * 1e9).toString(f);
    c.from = qb;
    c.to = ob;
    if (nb.nodeType != 1) throw new Error("Invalid input type");
    if (qb == ob) {
      Kb(1);
      if (db) db(nb);
      return x
    }
    if (!l.innerHTML || !l.innerText && !l.textContent) {
      if (db) db(nb);
      return x
    }
    var lb, cb, fb = 1400,
      sc = 1600,
      rc = (l.innerText || l.textContent).replace(/\s+/g, gb),
      Bb = 0,
      Ob = 0,
      ub = l.innerHTML.length,
      lc = 0,
      b = [l],
      W = [0],
      n = [{
        o: ub,
        p: 0
      }],
      Qb = [],
      Q = [],
      nc = [],
      A = [],
      ib = [],
      Db = s,
      eb = s,
      qc = s,
      Eb = s;
    x.text = rc;
    x.textLength = rc.length;
    x.showTooltips = i;
    x.showHighlight = i;
    x.sourceFrame = P ? i : s;
    x.detectedLanguage;
    x.transItems = [];
    var z = [],
      zb, Cb = 0,
      pb = 0;
    if (hb && l.ownerDocument && l.ownerDocument.documentElement && l == l.ownerDocument.documentElement) {
      var wc = l.ownerDocument.getElementsByTagName(Xb)[0];
      if (wc) {
        ub -= wc.innerHTML.length;
        n[0].o = ub
      }
    }
    if (window.translatorOnBegin || document.translatorOnBegin) try {
      (window.translatorOnBegin || document.translatorOnBegin)()
    } catch (Ec) {}

    function Wb() {
      qc = i;
      if (Eb) {
        Eb = s;
        if (t.size < E)
          if (J && P) B();
          else setTimeout(function() {
            B()
          }, X)
      }
    }
    h.addEvent(l.ownerDocument.defaultView || l.ownerDocument.parentWindow, Yb, Wb);
    var Fc = x.cancel = function() {
      if (Microsoft.TranslatorOverride && Microsoft.TranslatorOverride.hideTooltip) Microsoft.TranslatorOverride.hideTooltip();
      if (!l) return;
      Db = i;
      if (lb) lb.abort("canceled by user.");
      Pb(l);
      l = g
    };
    try {
      if (!toolbar || !toolbar.addExitEvent || !toolbar.setProgress || !toolbar.setLanguagePair) toolbar = g
    } catch (Ic) {
      toolbar = g
    }
    var Oc = x.exit = function() {
      Fc();
      if (toolbar) toolbar.hide()
    };

    function oc(a) {
      a = Math.max(a, 0);
      a = Math.min(a, u);
      for (var b = 0; b < Mb.length; ++b) Mb[b](a)
    }
    x.addProgressEvent = function(a) {
      Mb.push(a)
    };
    if (!k.sourceFrame)
      if (toolbar && toolbar.setProgress) k.addProgressEvent(toolbar.setProgress);
    x.setParallel = function(a) {
      H = a
    };
    if (toolbar) {
      toolbar.addExitEvent(x.exit);
      toolbar.setProgress(0);
      toolbar.setLanguagePair(L, O)
    }
    var m = {
        Inherit: 0,
        On: 1,
        Off: 2,
        Skip: 3
      },
      cc = {
        google: {
          value: {
            notranslate: m.Off
          },
          content: {
            notranslate: m.Off
          }
        },
        microsoft: {
          value: {
            notranslate: m.Off
          },
          content: {
            notranslate: m.Off
          }
        }
      },
      ac = {
        translate: {
          "true": m.On,
          yes: m.On,
          "false": m.Off,
          no: m.Off,
          skip: m.Skip
        }
      },
      bc = {
        notranslate: m.Off,
        skiptranslate: m.Skip
      };
    if (Kc(l) == m.Off) {
      if (db) db(nb);
      return
    }
    b.top = W.top = n.top = function() {
      return this[this.length - 1]
    };
    var Zb = {
        head: 1,
        script: 1,
        style: 1,
        code: 1,
        samp: 1,
        "var": 1,
        kbd: 1,
        pre: 1,
        input: 1,
        object: 1,
        address: 1,
        textarea: 1,
        noscript: 1
      },
      rb = {
        hr: 1,
        option: 1,
        title: 1,
        br: 1,
        frame: 1,
        iframe: 1
      };
    for (var Dc in Zb) rb[Dc] = 1;
    delete rb["code"];
    delete rb["samp"];
    delete rb["var"];

    function xb(b) {
      var a;
      if (fc[b] == w) a = {
        direction: w,
        textAlign: U
      };
      else a = {
        direction: d,
        textAlign: F
      };
      return a
    }
    if (!P && !J) bb = xb(ob);

    function zc() {
      var c = [];
      for (var a = b.length - 2; a >= 0; --a)
        if (b[a].id) {
          c.unshift(b[a].id.toString());
          break
        } else c.unshift((b[a].nodeName && b[a].nodeName.toLowerCase ? b[a].nodeName.toLowerCase() : v) + "-" + W[a].toString());
      return c.join("_")
    }

    function B() {
      var a = "len";
      if (c.maxChars && c.maxChars < lc && !qc && !k.sourceFrame) {
        if (!Eb) {
          xc();
          Eb = i
        }
        return
      }
      var f = [],
        e = s,
        j = g;
      if (hb && n.length) {
        var p = 0;
        for (var m = 0; m < n.length; ++m) p += parseInt(n[m].p);
        oc(Math.min(99.999 * (p - Ob) / (ub - Ob), 99.999))
      }
      while (b.length > 0 && (Bb < fb || f.length)) {
        if (b.length && tc(b.top()) && ab(b.top())) {
          b.push(b.top().contentWindow.document.documentElement);
          W.push(0);
          n.push({
            o: 0,
            p: 0
          });
          e = i;
          h.addEvent(b.top().ownerDocument.defaultView || b.top().ownerDocument.parentWindow, Yb, Wb);
          if (hb) {
            var d = typeof b.top().length == sb ? b.top().length : b.top().getAttribute(a) || (b.top().innerHTML && b
              .top().innerHTML.length ? b.top().innerHTML.length : 0);
            try {
              if (!b.top().length && !b.top().getAttribute(a)) b.top().setAttribute(a, d)
            } catch (o) {}
            n[n.length - 1].o = d;
            ub += d
          }
        } else if (b.length && b.top().firstChild && b.top().firstChild.parentNode == b.top() && !jb(b.top()) && ab(b
            .top())) {
          b.push(b.top().firstChild);
          W.push(0);
          n.push({
            o: 0,
            p: 0
          });
          e = i;
          if (hb) {
            var d = typeof b.top().length == sb ? b.top().length : b.top().getAttribute(a) || (b.top().innerHTML && b
              .top().innerHTML.length ? b.top().innerHTML.length : 0);
            try {
              if (!b.top().length && !b.top().getAttribute(a)) b.top().setAttribute(a, d)
            } catch (o) {}
            n[n.length - 1].o = d
          }
        } else {
          while (b.length && (!b.top().nextSibling && !b.top().nextElementSibling)) {
            b.pop();
            W.pop();
            n.pop();
            e = i
          }
          if (b.length > 1) {
            if (hb && b.top().nodeName.toLowerCase() != Xb) n[n.length - 2].p += parseInt(n[n.length - 1].o);
            b.push(b.pop().nextSibling);
            n[n.length - 1] = {
              o: 0,
              p: 0
            };
            if (!jb(b.top())) e = i;
            if (hb) {
              var d = typeof b.top().length == sb ? b.top().length : b.top().getAttribute(a) || (b.top().innerHTML &&
                b.top().innerHTML.length ? b.top().innerHTML.length : 0);
              try {
                if (!b.top().length && !b.top().getAttribute(a)) b.top().setAttribute(a, d)
              } catch (o) {}
              n[n.length - 1].o = d
            }
          } else {
            b.pop();
            W.pop();
            n.pop();
            e = i
          }
        }
        if (e || b.length > 0 && !jb(b.top())) {
          if (f.length) try {
            yc(f, j)
          } catch (q) {
            if (c.debug);
          }
          e = s;
          j = g
        }
        if (b.length) {
          if (b.top().clientHeight < b.top().scrollHeight) h.addEvent(b.top(), Yb, Wb);
          if (jb(b.top())) {
            if (!j) j = zc();
            ++W[W.length - 1];
            f.push(b.top())
          }
          if (b.top().nodeName.toLowerCase() != Xb && !ab(b.top())) Ob += parseInt(n.top().o);
          Sb(b.top())
        }
      }
      if (Bb > 0 || vb.length > 0) Ac();
      else {
        if (t.size > 0 || vb.length > 0) return;
        oc(u);
        Kb(1);
        if (Tb) Tb(l);
        Tb = g;
        if (Microsoft.TranslatorOverride && Microsoft.TranslatorOverride.showHighlight) Microsoft.TranslatorOverride.showHighlight(
          k, L, O);
        if (window.translatorOnComplete || document.translatorOnComplete) try {
          (window.translatorOnComplete || document.translatorOnComplete)()
        } catch (q) {
          if (c.debug);
        }
        xc()
      }
    }

    function Sb(a) {
      var f = "adjustalign";
      try {
        if (!a.getAttribute) return;
        a.adjustAlign = a.getAttribute(f) && !(a.getAttribute(f).toLowerCase() == M);
        if (a.adjustAlign == g) a.adjustAlign = a.parentNode.adjustAlign;
        if (a.adjustAlign == undefined || a.adjustAlign == g) a.adjustAlign = i;
        if (bb && a && a.style && ab(a) && !k.sourceFrame && c.service != Gb && a.adjustAlign)
          for (var b in bb) try {
            var d = h.getStyleValue(a, b);
            if (d != bb[b]) {
              if (b == "textAlign" && (d && d.toLowerCase().indexOf(G) != e || a.tagName && a.tagName.toLowerCase() ==
                  G)) continue;
              if (Hb) {
                if (!a._mstStyle) a._mstStyle = {};
                if (a.style[b]) a._mstStyle[b] = a.style[b];
                else a._mstStyle[b] = d
              }
              a.style[b] = bb[b]
            }
          } catch (j) {
            console.error(j)
          }
      } catch (l) {
        console.error(l)
      }
    }

    function Kb(e) {
      var b = "_mssrc";
      if (!S)
        if (l.getElementsByTagName) S = l.getElementsByTagName(y);
        else if (l.documentElement.getElementsByTagName) S = l.documentElement.getElementsByTagName(y);
      else if (l.ownerDocument.documentElement.getElementsByTagName) S = l.ownerDocument.documentElement.getElementsByTagName(
        y);
      var a;
      if (S && S.length > 0) var d = 0;
      for (var c = 0; c < S.length && d < Math.max(1, S.length * e); c++) {
        a = S[c];
        if (a.getAttribute(b)) {
          a.src = a.getAttribute(b);
          a.removeAttribute(b);
          d++
        }
      }
    }

    function xc() {
      if (!H || !k.sourceFrame) {
        var b = [];
        b.push("svc=" + encodeURIComponent(c.service));
        b.push("loc=" + encodeURIComponent(c.locale));
        b.push("ref=" + encodeURIComponent(c.ref));
        b.push("from=" + encodeURIComponent(L ? L : v));
        b.push("to=" + encodeURIComponent(O ? O : v));
        b.push("dtc=" + encodeURIComponent(k.detectedLanguage ? k.detectedLanguage : v));
        var d = ib.join(" | "),
          f = h.getStringByteCount(d);
        if (f > 128) d = d.substr(0, Math.round(d.length * 128 / f)) + "...";
        b.push("text=" + gc(d ? d : v));
        var o = z.length,
          n = 0,
          j = 0,
          g = 0,
          m = 0,
          i = 0,
          e = 0,
          l = 0;
        for (var a = 0; a < z.length && a < 64; ++a) {
          b.push(a.toString() + "=" + [z[a].r, z[a].c, z[a].s, z[a].e, z[a].l].join("_"));
          if (z[a].r === "E") n++;
          if (z[a].l > e) e = z[a].l;
          g += z[a].c;
          j += z[a].s;
          m += z[a].e;
          i += z[a].l
        }
        l = e;
        if (window.mscc === undefined || window.mscc.hasConsent()) {
          if (typeof telemetry !== V && telemetry) telemetry.trackMetric([{
            metric: "translation.calls",
            value: o
          }, {
            metric: "translation.errors",
            value: n
          }, {
            metric: "translation.characters",
            value: g
          }, {
            metric: "translation.sentences",
            value: j
          }, {
            metric: "tranlation.elements",
            value: m
          }, {
            metric: "translation.latencies",
            value: i
          }, {
            metric: "translation.time",
            value: l
          }, {
            metric: "translation.to",
            value: O
          }, {
            metric: "translation.from",
            value: L
          }]);
          Rb("/sync.ashx?" + b.join(r))
        }
        ib = [];
        z = []
      }
    }

    function ab(a) {
      if (a.nodeType == 3) return i;
      if (a.nodeType != 1) return s;
      if (!a.hasChildNodes() && !tc(a)) return s;
      var b;
      try {
        b = ic(a)
      } catch (d) {
        if (c.debug);
      }
      if (b == m.Off || b == m.Skip) return s;
      if (Zb[a.nodeName.toLowerCase()]) return s;
      if (!a.innerHTML || !Ib(a.innerHTML)) return s;
      return i
    }

    function jb(a) {
      if (a.nodeType == 3) return i;
      else if (a.nodeType != 1 || a._mstChunk || h.getStyleValue(a, "display").toLowerCase() != "inline" || h.getStyleValue(
          a, mb).toLowerCase() != "static" || rb[a.nodeName.toLowerCase()]) return s;
      for (var b = 0; b < a.childNodes.length; ++b)
        if (!jb(a.childNodes[b])) return s;
      return i
    }

    function tc(a) {
      try {
        if (a.contentWindow && a.contentWindow.document && a.contentWindow.document.documentElement) return i
      } catch (b) {
        if (c.debug);
      }
      return s
    }

    function ic(b) {
      var a = m.Inherit;
      if (!b.getAttribute) return a;
      for (var h in ac) {
        var e = tb(b, h);
        if (e != g) {
          var j = ac[h],
            f = j[e.toString().toLowerCase()];
          a = f || a;
          if (a == m.Off || a == m.Skip) return a
        }
      }
      var d = tb(b, "class") || tb(b, "className");
      if (d != g) {
        var i = d.toString().split(gb);
        for (var c = 0; c < i.length; c++) {
          var k = i[c],
            f = bc[k.toLowerCase()];
          a = f || a;
          if (a == m.Off) return a
        }
      }
      return a
    }

    function tb(b, a) {
      try {
        return b.getAttribute(a) || b[a]
      } catch (d) {
        if (c.debug);
        return g
      }
    }

    function Kc(n) {
      var b = m.Inherit,
        k = n.ownerDocument.getElementsByTagName("meta");
      for (var d = 0; d < k.length; d++) {
        var l = k[d],
          c = tb(l, "name");
        if (c != g)
          if (cc[c.toString().toLowerCase()] != g) {
            var f = cc[c.toString().toLowerCase()];
            for (var h in f) {
              var a = tb(l, h);
              if (a != g) {
                a = a.toString().toLowerCase();
                var i = f[h][a];
                if (i != g) {
                  b = i || b;
                  if (b == m.Off) return b
                }
                if (a.match(/^notranslateclasses\s/i)) {
                  var j = a.split(/\s+/);
                  for (var e = 1; e < j.length; e++) bc[j[e]] = m.Off
                }
              }
            }
          }
      }
      return b
    }

    function yc(d, e) {
      Bc(d);
      var a = Vb(d);
      if (a && ab(a)) {
        a._mstHash = Hc(e);
        while (k[a._mstHash]) ++a._mstHash;
        k[a._mstHash] = a;
        if (pc && !k.sourceFrame)
          if (pc && H && H[a._mstHash]) {
            var b = T(H[a._mstHash], K),
              f = T(a, K);
            if (b.split(/<b\d+/g).length != f.split(/<b\d+/g).length) {
              if (c.debug);
              return
            }
          } else {
            if (c.debug);
            return
          }
        else var b = T(a, K);
        if (Ib(b)) {
          Bb += h.getStringByteCount(b);
          Qb.push(a);
          Q.push(b)
        }
      }
    }

    function Vb(a) {
      var b = g;
      if (a.length > 0)
        if (a.length == 1 && a[0].nodeType == 1) b = a.pop();
        else if (a[0].parentNode && a.length == a[0].parentNode.childNodes.length) {
        b = a.pop().parentNode;
        while (a.length > 0) a.pop()
      } else {
        b = a[0].ownerDocument.createElement(Z);
        b._mstChunk = i;
        if (a[0].parentNode) a[0].parentNode.insertBefore(b, a[0]);
        while (a.length > 0) b.appendChild(a.shift())
      }
      return b
    }

    function Bc(a) {
      var c = i;
      while (c) {
        c = s;
        if (a.length == 1 && !ab(a[0])) return;
        if (a.length == 1 && a[0].nodeType == 1 && a[0].childNodes.length > 0) {
          var e = a.pop();
          for (var d = 0; d < e.childNodes.length; d++) a.push(e.childNodes[d]);
          c = i
        }
        if (a.length > 0)
          if (!Ub(a[0])) {
            var b = a.shift();
            if (b.nodeType == 3 && !b.nodeValue) b.parentNode.removeChild(b);
            c = i
          } else if (!Ub(a[a.length - 1])) {
          var b = a.pop();
          if (b.nodeType == 3 && !b.nodeValue) b.parentNode.removeChild(b);
          c = i
        }
      }
      if (a.length == 1 && !Ub(a[0])) a.pop()
    }

    function Ib(a) {
      return !!(a.match(/[a-zA-Z0-9\xC0-\uFFFF]/) || J && a.replace(/[\r\n\s]/g, v).length > 0)
    }

    function Ub(a) {
      if (!jb(a)) return i;
      var b = v;
      switch (a.nodeType) {
        case 1:
          b = a.innerText || a.textContent || v;
          break;
        case 3:
          b = a.nodeValue || v
      }
      if (b.match(/^[\s\xA0]*$/)) return s;
      if (Ib(b)) return i;
      return s
    }

    function T(a, i, e) {
      e = e ? e : 1;
      if (e > 9) throw new Error(hc);
      var d = [],
        f = 0,
        l = 0;
      for (var b = 0; b < a.childNodes.length; ++b) switch (a.childNodes[b].nodeType) {
        case 1:
          var j = i + e.toString() + f.toString();
          try {
            var g = ic(a.childNodes[b])
          } catch (k) {
            if (c.debug);
          }
          if (g == m.Skip && a.childNodes[b].previousSibling && a.childNodes[b].previousSibling.nodeType == 1) a.childNodes[
            b].previousSibling._mstSkipNext = f;
          else if (g == m.Skip && a.childNodes[b].nextSibling && a.childNodes[b].nextSibling.nodeType == 1) a.childNodes[
            b].nextSibling._mstSkipPrev = f;
          else {
            d.push("<");
            d.push(j);
            d.push(">");
            if (g != m.Skip) d.push(T(a.childNodes[b], i, e + 1));
            d.push("</");
            d.push(j);
            d.push(">")
          }++f;
          break;
        case 3:
          if (a.childNodes[b].nodeValue) {
            var h = a.childNodes[b].nodeValue.replace(/[\s\xA0]+/g, gb);
            if (h != a.childNodes[b].nodeValue) a.replaceChild(a.ownerDocument.createTextNode(h), a.childNodes[b]);
            d.push(Nc(h))
          }
      }
      return d.join(v)
    }

    function Y(a, f, j, b, c, h) {
      if (!h) h = 1;
      if (h > 9) throw new Error(hc);
      var k = [];
      for (var i = 0; i < a.childNodes.length; ++i) {
        if (a.childNodes[i].parentNode != a) a.appendChild(a.childNodes[i--]);
        if (a.childNodes[i].nodeType == 1) k.push(a.childNodes[i])
      }
      var e = 0,
        d = 0;
      f.replace(new RegExp("<" + j + h + "(\\d+)>(.*)<\\/" + j + h + "\\1>", "gi"), function(m, q, o, l) {
        while (b && b[0] <= l - e) {
          var n = a.ownerDocument.createTextNode(Ab(f.substr(e, b[0])));
          c[c.length - 1].push(n);
          c.push([]);
          a.insertBefore(n, d < a.childNodes.length ? a.childNodes[d] : g);
          ++d;
          e += b[0];
          b.shift()
        }
        if (e < l) {
          var n = a.ownerDocument.createTextNode(Ab(f.substr(e, l - e)));
          if (b) {
            c[c.length - 1].push(n);
            b[0] -= l - e
          }
          a.insertBefore(n, d < a.childNodes.length ? a.childNodes[d] : g);
          ++d;
          e = l
        }
        var i = k[parseInt(q)];
        if (i != a.childNodes[d]) a.insertBefore(i, a.childNodes[d]);
        ++d;
        if (typeof i._mstSkipPrev == sb) {
          var s = k[i._mstSkipPrev];
          a.insertBefore(s, i);
          ++d;
          if (b) c[c.length - 1].push(s);
          i._mstSkipPrev = v
        }
        if (ab(i))
          if (b)
            if (b[0] < m.length) {
              c.push([]);
              b[0] -= 4 + q.length;
              Y(i, o, j, b, c, h + 1);
              b[0] -= 5 + q.length
            } else {
              c[c.length - 1].push(i);
              Y(i, o, j, g, g, h + 1);
              b[0] -= m.length
            }
        else Y(i, o, j, g, g, h + 1);
        else if (b) {
          if (b[0] < m.length) c.push([i], []);
          else c[c.length - 1].push(i);
          for (var p = m.length; p > b[0]; b.shift()) p -= b[0];
          b[0] -= p
        }
        if (typeof i._mstSkipNext == sb) {
          var r = k[i._mstSkipNext];
          a.insertBefore(r, i.nextSibling);
          ++d;
          if (b) c[c.length - 1].push(r);
          i._mstSkipNext = v
        }
        e += m.length
      });
      while (b && b[0] <= f.length - e) {
        var l = a.ownerDocument.createTextNode(Ab(f.substr(e, b[0])));
        c[c.length - 1].push(l);
        c.push([]);
        a.insertBefore(l, d < a.childNodes.length ? a.childNodes[d] : g);
        ++d;
        e += b[0];
        b.shift()
      }
      if (e < f.length) {
        var l = a.ownerDocument.createTextNode(Ab(f.substr(e, f.length - e)));
        a.insertBefore(l, d < a.childNodes.length ? a.childNodes[d] : g);
        ++d;
        if (b) {
          c[c.length - 1].push(l);
          b[0] -= f.length - e
        }
      }
      while (d < a.childNodes.length) a.removeChild(a.childNodes[d]);
      if (c && c[c.length - 1].length) c.push([])
    }

    function Nc(a) {
      if (c.service == Gb && Default.Globals.PhraseAlignment) return a.replace(/[\s\xA0]/g, gb);
      else return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/[\s\xA0]/g, gb)
    }

    function Ab(a) {
      if (c.service == Gb && Default.Globals.PhraseAlignment) return a;
      else return a.replace(/<\w+>/g, v).replace(/<\/\w+>/g, v).replace(/&gt;/gi, ">").replace(/&lt;/gi, "<").replace(
        /&amp;/gi, r)
    }

    function Hc(a) {
      a = a.replace(/[\s\xA0]/g, v);
      var c = 0;
      for (var b = 0; b < a.length; ++b) c += a.charCodeAt(b) * 13 * (b + 7);
      return c
    }

    function Ac() {
      var j = [],
        b = [],
        a = 0,
        f = h.getStringByteCount(Q[0]);
      if (vb.length > 0 && !eb) {
        eb = i;
        var l = vb.shift();
        A = l.txt;
        a = l.length;
        nc = l.dom;
        var e = A[0],
          d = Math.floor(e.length * fb / a);
        A = [e.substr(0, d), e];
        while (h.getStringByteCount(A[0]) > fb && d > q) {
          d = Math.floor(d / 2);
          A = [e.substr(0, d), e]
        }
        cb = {
          aTxt: [],
          aSrcSnt: [],
          aTgtSnt: []
        };
        zb = new Date;
        Cb = A[0].length;
        pb = 1;
        lb = c.serviceClient.TranslateArray(Fb, [A[0]], L, O, c.category ? {
          Category: c.category
        } : g, mc, wb, kb);
        window.Microsoft.Translator.translationCallsTime[window.Microsoft.Translator.APIRequests] = (new Date).getTime();
        if (window.Microsoft.Translator.APIRequests == 0) yb = new Date;
        window.Microsoft.Translator.APIRequests++;
        return
      }
      do {
        if (Q.length == 0) break;
        if (ib.length && ib[0].length < 32 && Q[0].length > 32) ib = [];
        ib.push(Q[0].replace(/<[^>]*>/g, gb).replace(/[\s\xA0]+/g, gb));
        Bb -= f;
        a += f;
        lc += Q[0].length;
        j.push(Qb.shift());
        b.push(Q.shift());
        f = Q.length > 0 ? h.getStringByteCount(Q[0]) : 0
      } while (Qb.length > 0 && a < fb && a + f + (b.length + 1) * h.getStringByteCount('"",') <= sc);
      if (a > sc && (!H || !k.sourceFrame)) {
        vb.push({
          dom: j,
          txt: b,
          length: a
        });
        B()
      } else if (a > 0 && (!H || !k.sourceFrame)) {
        zb = new Date;
        Cb = a;
        pb = b.length;
        Lb[C] = function(a) {
          return function(b) {
            Mc(b, a)
          }
        }(C);
        Nb[C] = function(a) {
          return function(b) {
            wb(b, a)
          }
        }(C);
        t[C] = {
          Dom: j,
          Txt: b
        };
        t.size++;
        if (c.service == Gb) lb = c.serviceClient.TranslateArray2(Fb, b, L, O, c.category ? {
          Category: c.category
        } : g, Lb[C], Nb[C], kb);
        else lb = c.serviceClient.TranslateArray(Fb, b, L, O, c.category ? {
          Category: c.category
        } : g, Lb[C], Nb[C], kb);
        window.Microsoft.Translator.translationCallsTime[C] = (new Date).getTime();
        C++;
        if (window.Microsoft.Translator.APIRequests == 0) yb = new Date;
        window.Microsoft.Translator.APIRequests++;
        Jc();
        if (t.size < E)
          if (J && P) B();
          else setTimeout(function() {
            B()
          }, X)
      } else if (t.size < E)
        if (J && P) B();
        else setTimeout(function() {
          B()
        }, X)
    }

    function mc(a) {
      if (Db) return;
      if (!eb) return;
      eb = s;
      window.Microsoft.Translator.APIResponses++;
      k.detectedLanguage = a && a[0] && a[0].From ? a[0].From.toLowerCase() : k.detectedLanguage;
      var o = a[0].TranslatedText,
        f = a[0].OriginalTextSentenceLengths,
        j = a[0].TranslatedTextSentenceLengths,
        m = 0,
        n = 0;
      if (!(o && f && j)) {
        eb = i;
        wb(a[0].Error);
        return
      }
      Jb(a);
      for (var d = 0; d < (A.length > 1 ? Math.max(f.length - 2, 1) : f.length); ++d) {
        cb.aTxt.push(o.substr(n, j[d]));
        cb.aSrcSnt.push(f[d]);
        cb.aTgtSnt.push(j[d]);
        m += f[d];
        n += j[d]
      }
      if (A.length > 1)
        if (f.length < 1) B();
        else {
          var b = A[1].substr(m),
            p = h.getStringByteCount(b),
            e = Math.floor(b.length * fb / p);
          A = e > fb ? [b.substr(0, e), b] : [b];
          while (h.getStringByteCount(A[0]) > fb && e > q) {
            e = Math.floor(e / 2);
            A = [b.substr(0, e), b]
          }
          if (eb) return;
          eb = i;
          zb = new Date;
          Cb = A[0].length;
          pb = 1;
          lb = c.serviceClient.TranslateArray(Fb, [A[0]], L, O, g, mc, wb, kb)
        }
      else {
        var l = nc.shift(),
          u = qb || k.detectedLanguage;
        if (!P && !J) {
          bb = xb(ob);
          Sb(l)
        }
        try {
          jc(l, T(l, K), cb.aTxt.join(v), cb.aSrcSnt, cb.aTgtSnt)
        } catch (r) {
          if (c.debug);
        }
        if (t.size < E)
          if (J && P) B();
          else setTimeout(function() {
            B()
          }, X)
      }
    }

    function Mc(b, a) {
      if (Db) return;
      window.Microsoft.Translator.translationCallsTime[a] = (new Date).getTime() - window.Microsoft.Translator.translationCallsTime[
        a];
      var i = (new Date).getTime() - yb.getTime();
      yb = new Date;
      window.Microsoft.Translator.totalTranslationTime += i;
      window.Microsoft.Translator.APIResponses++;
      if (t[a] && b.length != t[a].Dom.length) {
        wb("Inconsistent Data", a);
        return
      }
      Jb(b);
      k.detectedLanguage = b && b[0] && b[0].From ? b[0].From.toLowerCase() : k.detectedLanguage;
      var j = qb || k.detectedLanguage;
      if (!P && !J) {
        bb = xb(ob);
        Sb(t[a].Dom)
      }
      var e = v;
      for (var f = t[a].Dom.shift(), g = t[a].Txt.shift(), d = b.shift(); f && d; f = t[a].Dom.shift(), (g = t[a].Txt
          .shift(), d = b.shift())) {
        if (d.Alignment) {
          if (e.length != 0) e += "|";
          e += d.Alignment
        }
        try {
          jc(f, g, d.TranslatedText, d.OriginalTextSentenceLengths, d.TranslatedTextSentenceLengths)
        } catch (h) {
          if (c.debug);
        }
      }
      if (e.length != 0) nb.setAttribute("mstAlign", e);
      delete t[a];
      t.size--;
      if (t.size < E)
        if (J && P) B();
        else setTimeout(function() {
          B()
        }, X)
    }

    function Jc() {
      if (C > dc) {
        E = 1;
        X = 500
      } else if (E > 2 && C % ec == 0) {
        E = E - parseInt(E / 3);
        X += 10;
        Kb(.1)
      }
    }

    function wb(b, a) {
      if (a) {
        delete t[a];
        t.size--
      }
      if (Db) return;
      if (c.debug);
      window.Microsoft.Translator.APIResponses++;
      Jb(g);
      if (vc) vc(b);
      if (t.size < E) B()
    }

    function Jb(a) {
      var e = new Date,
        b = e.getTime() - zb.getTime();
      if (b > 13000) b = 13000;
      var c = 0;
      if (a)
        for (var d = 0; d < a.length; ++d) c += a[d].OriginalTextSentenceLengths.length;
      else c = pb;
      z.push({
        r: a ? "S" : "E",
        c: Cb,
        s: c,
        e: pb,
        l: b
      })
    }
    var jc = x.translateElement = function(a, n, m, j, l) {
      a._mstSrcHtml = a.innerHTML;
      if (a.nodeName.toLowerCase() == "option") {
        Y(a, m, K, g, g);
        return
      }
      var d, h = a._mstHash;
      if (k.sourceFrame) d = a.cloneNode(i);
      else {
        d = a;
        a = d.cloneNode(i)
      }
      var o = j ? j.slice(0) : [],
        p = l ? l.slice(0) : [],
        e = [
          []
        ],
        f = [
          []
        ];
      try {
        Y(a, n, K, o, e);
        Y(d, m, K, p, f)
      } catch (q) {
        if (c.debug);
      }
      if (e.length > 2 && f.length > 2) {
        a._mstSrcHtml = a.innerHTML;
        for (var b = 0; b < e.length && b < f.length; ++b) uc(Vb(e[b]), Vb(f[b]), h * (b + 1))
      } else uc(a, d, h);
      if (H && H[h] && !k.sourceFrame) H.translateElement(H[h], n, m, j, l)
    };

    function uc(a, b, d) {
      if (!(a && b)) return;
      var f = a.textContent || a.innerText || v,
        g = b.textContent || b.innerText || v;
      if (!f.match(/[a-zA-Z0-9\xC0-\uFFFF]/) && !g.match(/[a-zA-Z0-9\xC0-\uFFFF]/)) return;
      a._mstHash = b._mstHash = d;
      if (Hb) b._mstSrcHtml = a.innerHTML;
      try {
        a.setAttribute(N, L);
        b.setAttribute(N, O)
      } catch (e) {
        if (c.debug);
      }
      a._mstNormalize = function() {
        return T(a, K)
      };
      b._mstNormalize = function() {
        return T(b, K)
      };
      b._mstDenormalize = function(d) {
        var b = a.cloneNode(i);
        b._mstNormalize = function() {
          return T(b, K)
        };
        try {
          Y(b, d, K)
        } catch (e) {
          if (c.debug);
        }
        return b
      };
      try {
        if (k.sourceFrame) {
          k[d] = a;
          new kc(a, b, h.getBlockParent(a), xb(O), k, H)
        } else {
          k[d] = b;
          new kc(b, a, h.getBlockParent(b), xb(L || k.detectedLanguage), k, H)
        }
      } catch (j) {}
      k.transItems.push({
        src: a,
        tgt: b
      })
    }

    function Pb(a) {
      if (!Hb) throw new Error(
        "Untranslate feature was turned off, please consider modifying the parameter in the constructor!");
      if (a.nodeName.toLowerCase() == "frame" || a.nodeName.toLowerCase() == R) try {
        Pb(a.contentWindow.document.documentElement)
      } catch (b) {
        if (c.debug);
      } else {
        if (a._mstStyle)
          for (var e in a._mstStyle) try {
            a.style[e] = a._mstStyle[e]
          } catch (b) {
            if (c.debug);
          }
        a._mstStyle = g;
        if (a._mstSrcHtml) {
          a.innerHTML = a._mstSrcHtml;
          if (a._mstTooltip) a._mstTooltip.detach()
        } else
          for (var d = 0; d < a.childNodes.length; ++d) try {
            Pb(a.childNodes[d])
          } catch (b) {
            if (c.debug);
          }
      }
    }
    if (J && P) {
      B();
      if (toolbar) toolbar.show()
    } else {
      setTimeout(B, 0);
      if (toolbar) setTimeout(toolbar.show, 10)
    }
    return x
  }
  var jc = function() {
      function a(a, b) {
        this.Name = a, this.Code = b
      }
      return a
    }(),
    pc = function() {
      function a(a, b, c) {
        this.SignIn = a, (this.SignOut = b, this.Help = c)
      }
      return a
    }(),
    t;
  (function(d) {
    var fb = dc,
      K = ec,
      m = "value",
      s = j,
      v = "{0}",
      q = E,
      k = B;

    function jb(k, d, b) {
      var j = nb,
        i = ob;
      d === void 0 && (d = "true"), (b === void 0 && (b = a), (y = Util.GetElement(pb), (f = Util.GetElement(cb), (
        F = Util.GetElement(qb), (N = Util.GetElement(rb), (R = Util.GetElement(sb), (G = Util.GetElement(
          tb), (J = b == a, h = b))))))));
      var e = document.createElement("link");
      e.setAttribute(O, window._mstConfig.floaterStylePath), e.setAttribute("rel", ub);
      var l = document.getElementsByTagName(D)[0];
      l.insertBefore(e, l.firstChild), (f.onmousedown = gb, (y.setAttribute(i, j), (y.setAttribute(vb, wb), (F.setAttribute(
        i, j), (L = k, Microsoft.Translator.Widget.GetLanguagesForTranslate(k, T, U))))));
      var m = f.getElementsByTagName("input");
      for (var g = 0; g < m.length; g++) {
        var n = m[g];
        n.getAttribute("type").toLowerCase() == ab && n.setAttribute("onclick", xb)
      }
      d.toLowerCase() == M && (W = !1), (Z = !0, (window._bwmid ? (window._bwmid += yb) : (window._bwmid = zb), (Rb(
        Ab, (document.location.protocol == "https:" ? Bb : Cb) + Db), !V && W && (c.serviceClient.Community
        .forceLoad(), V = !0))))
    }

    function eb() {
      f.style.display = k
    }

    function C(d) {
      if (!Z) {
        setTimeout(function() {
          C(d)
        }, l);
        return
      }
      var c;
      if (!bb)
        if (c = document.getElementById(Eb)) {
          var b = c.getBoundingClientRect();
          window.Util.IsElementInViewport(c) ? b.left == 0 && b.top == 0 ? setTimeout(function() {
            b = c.getBoundingClientRect(), w(b.left, b.top)
          }, 200) : w(b.left, b.top) : w(l, l)
        } else c || w(l, l);
      bb = !0, (t(), (eb(), (y.style.display = k, g = d)));
      var e = setInterval(function() {
        if (window.LanguageMenu) {
          window.LanguageMenu.onChanged = ac;
          try {
            try {
              window.LanguageMenu.setValue(g)
            } catch (b) {
              console.error(b)
            }
            i = Util.GetElement(db), h == a ? (i.parentNode.style.display = q) : (i.parentNode.style.display =
              k, J ? (i.innerHTML = window._mstConfig.autoDetected.replace(v, o[h])) : (i.innerHTML = o[h]))
          } catch (b) {
            console.warn(b)
          }
          clearInterval(e)
        }
      }, 1);
      A = !0, (p && clearTimeout(p), z || (x = !0, S()))
    }

    function kb() {
      f.style.display = q
    }

    function t() {
      y.style.display = q, (N.style.display = q, (F.style.display = q, (R.style.display = q, (A = !1, clearTimeout(
        p)))))
    }

    function w(a, b) {
      f.style.top = b + n, f.style.left = a + n
    }

    function lb() {
      X(), (x = !0, S())
    }

    function mb(e) {
      e >= 0 && e < u && (x = !1, (clearTimeout(p), (X(), Zb())));
      var d = s;
      try {
        d = Microsoft.Translator.Widget.GetAutoDetectedLanguage()
      } catch (j) {}
      if (d && window.LanguageMenu && window.LanguageMenu.getValue) {
        h = d, (i.parentNode.style.display = k, J ? (i.innerHTML = window._mstConfig.autoDetected.replace(v, o[h])) :
          (i.innerHTML = o[h]));
        var l = o[d],
          f = o[window.LanguageMenu.getValue()],
          g = location.href.substr(0, location.href.length - (location.hash || a).length),
          n = document.location.search.length == 0 ? "?" : r,
          b = Util.GetElement(Fb).getAttribute(m);
        b = b.replace(v, f), b = b.replace(P, l);
        var c = Util.GetElement(Gb).getAttribute(m);
        c = c.replace(v, encodeURIComponent(g + n + K + window.LanguageMenu.getValue())), (c = c.replace(P,
          encodeURIComponent(g)), (Util.GetElement(Hb).setAttribute(O, Ib + b + "&body=" + c), (Util.GetElement(
          Jb).setAttribute("title", Util.GetElement(Kb).getAttribute(m).replace(v, f)), window.Util.SetCookie(
          "mstto", window.LanguageMenu.getValue(), !1))))
      }
    }

    function Ob(a) {
      console.log(a)
    }

    function Pb() {
      Microsoft.Translator.Widget.RestoreOriginal(), kb()
    }

    function Qb() {
      t(), C(g)
    }

    function Sb() {
      t(), C(g)
    }

    function Tb() {
      clearTimeout(p), (z = !0, C(g))
    }

    function Ub() {
      z = !1, A && S()
    }

    function S() {
      x && !z && A && (p = setTimeout(function() {
        Xb()
      }, 7e3))
    }

    function Vb() {
      var c = Lb;
      t(), eb();
      var b = location.href.substr(0, location.href.length - (location.hash || a).length);
      location.search.length == 0 ? Util.GetElement(c).setAttribute(m, b + Mb + g) : location.search.indexOf(
        "__mstto") != e ? b.match(/__mstto=(.+)([&]+)/i) ? Util.GetElement(c).setAttribute(m, b.replace(
        /__mstto=(.+)([&&]+)/i, K + g + r)) : b.match(/__mstto=(.+)/i) && Util.GetElement(c).setAttribute(m, b.replace(
        /__mstto=(.+)/i, K + g)) : Util.GetElement(c).setAttribute(m, b + Nb + g), N.style.display = k
    }

    function Wb() {
      t(), R.style.display = k
    }

    function Xb() {
      x && !z && A && (t(), F.style.display = k)
    }

    function T(b) {
      for (var a = 0; a < b.length; a++) o[b[a].Code] = b[a].Name
    }

    function U() {
      L != b && (L = b, Microsoft.Translator.Widget.GetLanguagesForTranslate(b, T, U))
    }

    function X() {
      G.style.visibility = Q
    }

    function Zb() {
      G.style.visibility = Y
    }

    function ac() {
      g.toLowerCase() != window[Yb].getValue().toLowerCase() && (clearTimeout(p), (Microsoft.Translator.Widget.Translate(
        h, window.LanguageMenu.getValue()), (g = window.LanguageMenu.getValue(), window.LanguageMenu.elemHeader
        .focus())))
    }

    function gb(a) {
      return a = a || event, (H = a.clientX, (I = a.clientY, (document.onmousemove = hb, (document.onmouseup = ib,
        (document.body.focus(), (document.onselectstart = function() {
          return !1
        }, (f.ondragstart = function() {
          return !1
        }, (Util.addClass(f, fb), !1))))))))
    }

    function hb(a) {
      a = a || event;
      var b = Util.getPosition(f),
        c = a.clientX - H,
        d = a.clientY - I;
      return w(parseInt(b.left) + c, parseInt(b.top) + d), (H = a.clientX, (I = a.clientY, !1))
    }

    function ib(a) {
      return a = a || event, (document.onmousemove = s, (document.onselectstart = s, (f.ondragstart = s, (Util.removeClass(
        f, fb), !1))))
    }
    var o = {},
      L, g, h = s,
      p = s,
      x = !1,
      y, f, F, N, R, G, i, H, I, V = !1,
      W = !0,
      z = !1,
      A = !0,
      Z = !1,
      bb = !1,
      J;
    d.Initialize = jb, (d.Show = C, (d.TranslationComplete = lb, (d.TranslationProgress = mb, (d.TranslationError =
      Ob, (d.OnClose = Pb, (d.OnShareBackClick = Qb, (d.OnEmbedBackClick = Sb, (d.OnMouseOverFloater = Tb,
        (d.OnMouseOutFloater = Ub, (d.ShowSharePanel = Vb, d.ShowEmbed = Wb))))))))))
  })(t || (t = {})), (k.FloaterInitialize = function(a, b, c) {
    t.Initialize(a, b, c)
  }, (k.FloaterShowSharePanel = function() {
    t.ShowSharePanel()
  }, (k.FloaterShowEmbed = function() {
    t.ShowEmbed()
  }, (k.FloaterOnClose = function() {
    return t.OnClose(), !1
  }, (k.FloaterOnShareBackClick = function() {
    t.OnShareBackClick()
  }, (k.FloaterOnEmbedBackClick = function() {
    t.OnEmbedBackClick()
  }, (k.OnMouseOverFloater = function() {
    return t.OnMouseOverFloater(), !1
  }, k.OnMouseOutFloater = function() {
    return t.OnMouseOutFloater(), !1
  })))))));
  var Qb = document.getElementById(cb);
  Qb != j && Qb.parentNode.removeChild(Qb);
  var oc = function() {
    var h = "object",
      g = I,
      i = "onComplete",
      c = L,
      f = W,
      d = j;

    function b() {
      var b = this;
      b.languageNames = [], (b.langLocalized = d, (b.appId = window._mstConfig.appId, (b.unTranslateDelegate = d, (
        b.Links = new pc(window._mstConfig.SignIn ? window._mstConfig.SignIn : a, window._mstConfig.SignOut ?
          window._mstConfig.SignOut : a, "http://go.microsoft.com/?linkid=9722454"), (b.UserName = window._mstConfig
          .UserName ? window._mstConfig.UserName : a, b.languageCodes = [])))));
      for (var c in window.localizedLangs) b.languageCodes[b.languageCodes.length] = c
    }
    return b.prototype.Translate = function(a, b, c, d, e, f, g) {
      this.TranslateElement(a, b, document.documentElement, c, d, e, f, g, !0)
    }, (b.prototype.TranslateElement = function(p, j, h, m, e, n, o, k, b) {
      var a = this;
      h === void 0 && (h = document.documentElement), (b === void 0 && (b = !0), (a.validate(p, "from", !1, f),
        a.validate(j, "to", !0, f)));
      if (!a.isElement(h) && !a.isNode(h)) throw new Error("Invalid DomElement");
      a.validate(m, "onProgress", !1, c), (a.validate(e, "onError", !1, c), (a.validate(n, i, !1, c), (a.validate(
        o, "onRestoreOriginal", !1, c), (a.validate(k, "timeOut", !1, g, !0), a.validate(b,
        "showFloater", !1, "boolean")))));
      var l = !1;
      a.lastToLanguage = j, (a.domTranslator != d && a.domTranslator.cancel && a.domTranslator.cancel(), b && t
        .Show(j));
      var s = function() {
          q(u), l = !0;
          try {
            b && t.TranslationComplete()
          } catch (a) {
            console.error(a)
          }
          try {
            n && n()
          } catch (a) {
            console.error(a)
          }
        },
        v = function(c) {
          try {
            b && t.TranslationError(c)
          } catch (a) {
            console.error(a)
          }
          try {
            e && e(c)
          } catch (a) {
            console.error(a)
          }
        },
        q = function(c) {
          if (l) return;
          c == u && (l = !0);
          try {
            b && t.TranslationProgress(c)
          } catch (a) {
            console.error(a)
          }
          try {
            m && m(c)
          } catch (a) {
            console.error(a)
          }
        };
      a.domTranslator = new mc(a.appId, h, p, j, s, e, k, !1, !1), (a.domTranslator.addProgressEvent && a.domTranslator
        .addProgressEvent(q), o && (a.unTranslateDelegate = o));
      if (e && k) {
        var r = a.domTranslator;
        setTimeout(function() {
          l || (e("Timout expired before translation could be finished"), r.cancel && r.cancel())
        }, k)
      }
    }, (b.prototype.validate = function(a, c, e, b, f) {
      var d = " should be of type ";
      if (e) {
        if (!a) throw new Error(c + " is required");
        if (typeof a != b) throw new Error(c + d + b);
      } else if (a && typeof a != b) throw new Error(c + d + b);
      if (b == g && f && a && a < 0) throw new Error(c + " should be a positive number");
    }, (b.prototype.isNode = function(a) {
      return typeof Node == h ? a instanceof Node : a && typeof a == h && typeof a.nodeType == g && typeof a
        .nodeName == f
    }, (b.prototype.isElement = function(a) {
      return typeof HTMLElement == h ? a instanceof HTMLElement : a && typeof a == h && a !== d && a.nodeType ===
        1 && typeof a.nodeName == f
    }, (b.prototype.RestoreOriginal = function() {
      var a = this;
      if (!a.domTranslator) throw new Error("Can not RestoreOriginal before making a translation");
      a.domTranslator.cancel && a.domTranslator.cancel();
      if (a.unTranslateDelegate) try {
        a.unTranslateDelegate(a.lastToLanguage)
      } catch (b) {
        console.error(b)
      }
    }, (b.prototype.GetLanguagesForTranslate = function(b, e, h, j) {
      var a = this;
      a.validate(b, "locale", !0, f), (a.validate(e, i, !0, c), (a.validate(h, "onError", !1, c), a.validate(
        j, "timeOut", !1, g, !0)));
      if (a.languageNames[b] != d) {
        try {
          e(a.languageNames[b])
        } catch (k) {
          console.error(k)
        }
        return
      }
      Microsoft.Translator.GetLanguageNames(a.appId, b, a.languageCodes, function(a) {
        Microsoft.Translator.Widget.GetLanguageNamesCallBack(a, b, e, h)
      }, h, j)
    }, (b.prototype.GetLanguageNamesCallBack = function(b, d, g, e) {
      if (!b || !b[0]) {
        e && e("Invalid locale " + d);
        return
      }
      var c = [];
      for (var a = 0; a < b.length; a++) c[a] = new jc(b[a], this.languageCodes[a]);
      this.languageNames[d] = c;
      try {
        g(c)
      } catch (f) {
        console.error(f)
      }
    }, (b.prototype.GetLanguagesForTranslateLocalized = function() {
      var a = this;
      if (!a.langLocalized) {
        a.langLocalized = [];
        for (var b in window.localizedLangs) a.langLocalized[a.langLocalized.length] = new jc(
          window.localizedLangs[b], b)
      }
      return a.langLocalized
    }, (b.prototype.GetAutoDetectedLanguage = function() {
      if (!this.domTranslator || !this.domTranslator.detectedLanguage) throw new Error(
        "Can not return auto detected language before making a translation with 'from' parameter set to null "
      );
      return this.domTranslator.detectedLanguage
    }, (b.prototype.SetUpdatedAccessToken = function(c) {
      var i = window._mstConfig.baseURL.split(v),
        b = i[2].split(":")[0];
      b = b.substring(4, b.length), c = encodeURIComponent(c);
      var d = document.getElementsByTagName(R);
      if (d && d.length > 0)
        for (var g = 0; g < d.length; g++) {
          var j = d[g],
            h = j.getAttribute("src");
          if (h && (h.toLowerCase().indexOf("roledashboard.aspx") != e || h.toLowerCase().indexOf(
              "bulkdashboard.aspx") != e)) {
            var k = "https://" + i[2],
              k = k.replace("www.", "ssl.");
            j.contentWindow.postMessage("TRNS_TOKEN_UPDATE" + c, k)
          }
        }
      var f = document.createElement("script");
      f.type = kb, f.charset = "UTF-8";
      var m = window._mstConfig.onErrorHandlerName ? Ob + window._mstConfig.onErrorHandlerName :
        a;
      f.src = (location && location.href && location.href.indexOf("https") == 0 ?
          "https://ssl." + b : "http://www." + b) +
        "/ajax/v3/WidgetV3.ashx?action=refreshToken&trnsaccesstoken=" + c + m;
      var l = document.getElementsByTagName(D)[0] || document.documentElement;
      l.insertBefore(f, l.firstChild)
    }, (b.prototype.UpdateAppID = function(a, b) {
      this.appId = a, (window._mstConfig.appId = this.appId, Microsoft.Translator.Widget.UpdateDashboardLink(
        encodeURIComponent(b)))
    }, (b.prototype.UpdateDashboardLink = function(a) {
      Microsoft.Translator.Community.updateWidgetInfo(a)
    }, b))))))))))))
  }();
  k.Widget = new oc;
  var kc = new function() {
      var e = o,
        g = e,
        k = 600,
        l = 430,
       /* r = "#0F0F5F",
        m = "#F0F0A0", */
        s;
      return function(s, L, t, P, z, v) {
        var X = "touchstart",
          W = "pointerup",
          V = "mouseout",
          T = "mouseover",
          I = E,
          D = p,
          u = this;
        if (s._mstTooltip) try {
          s._mstTooltip.detach()
        } catch (cb) {}
        s._mstTooltip = L._mstTooltip = u;
        if (!t) t = s;
        var x = e,
          K = e,
          O = s.style.color,
          M = s.style.backgroundColor,
          o = s.ownerDocument,
          N = e,
          Q = u.hover = function(d) {
            if (g) return;
            if (z.showHighlight) {
              var b = s.style.color;
              try {
                b = "#" + C.parse(s.style.color).toString()
              } catch (c) {}
              if (b != r) O = s.style.color;
              var a = s.style.backgroundColor;
              try {
                a = "#" + C.parse(s.style.backgroundColor).toString()
              } catch (c) {}
              if (a != m) M = s.style.backgroundColor;
              s.style.color = r;
              s.style.backgroundColor = m
            }
            if (z.showTooltips && d) {
              x = D;
              setTimeout(Z, k)
            }
            if (d && v && v[s._mstHash] && v[s._mstHash]._mstTooltip) v[s._mstHash]._mstTooltip.hover()
          },
          bb = u.unhover = function(a) {
            if (g || N) {
              N = e;
              return
            }
            if (z.showHighlight) {
              s.style.color = O;
              s.style.backgroundColor = M
            }
            if (z.showTooltips && a) {
              x = e;
              setTimeout(Y, k)
            }
            if (a && v && v[s._mstHash] && v[s._mstHash]._mstTooltip) v[s._mstHash]._mstTooltip.unhover()
          };

        function Z() {
          if (g) return;
          if (x) kb()
        }
        var kb = u.show = function() {
          var cb = gb,
            W = b,
            N = "none 0px",
            bb = Pb,
            ab = U,
            M = "normal",
            eb = "0px 0px 0px 0px",
            E = A,
            C = w;
          if (K) return;
          else K = D;
          if (!o._mstTooltip) {
            var lb = c.baseURL.substr(0, 8) + c.baseURL.substr(8).replace(/\/.*$/, Sb),
              X = e;
            if (jb[c.locale] && fc[jb[c.locale]] && fc[jb[c.locale]] == C) X = D;
            o._mstTooltip = o.createElement(E);
            o._mstTooltip.translate = e;
            o._mstTooltip.setAttribute("translate", J);
            o._mstTooltip.style.display = I;
            o._mstTooltip.style.position = hb;
            o._mstTooltip.style.zIndex = ib;
            o._mstTooltip.style.margin = eb;
            o._mstTooltip.style.border = "2px solid #D2D2D2";
            o._mstTooltip.style.padding = eb;
            o._mstTooltip.style.color = "#000000";
            o._mstTooltip.style.backgroundColor = "#E6E6E6";
            o._mstTooltip.style.fontFamily = "Arial, Helvetica, Sans-Serif";
            o._mstTooltip.style.fontStyle = M;
            o._mstTooltip.style.fontVariant = M;
            o._mstTooltip.style.fontWeight = M;
            o._mstTooltip.style.fontSize = "12px";
            o._mstTooltip.style.lineHeight = M;
            if (!X) {
              o._mstTooltip.style.direction = d;
              o._mstTooltip.style.textAlign = F
            } else {
              o._mstTooltip.style.direction = C;
              o._mstTooltip.style.textAlign = ab
            }
            var p = o.createElement(E);
            if (!X) p.style.styleFloat = p.style.cssFloat = ab;
            else p.style.styleFloat = p.style.cssFloat = F;
            var j = o.createElement("a");
            j.href = c.lpURL;
            j.target = "_blank";
            j.style.display = bb;
            j.style.padding = "4px";
            j.style.border = N;
            j.style.cursor = S;
            j.style.textDecoration = I;
            j.style.textAlign = G;
            var u = o.createElement(y);
            u.src = c.imagePath + "binglogo_ctf.png";
            u.style.width = "36px";
            u.style.height = "14px";
            u.style.border = N;
            j.appendChild(u);
            p.appendChild(j);
            o._mstTooltip.cl = o.createElement("a");
            o._mstTooltip.cl.style.padding = "4px 4px 4px 4px";
            o._mstTooltip.cl.style.border = N;
            o._mstTooltip.cl.style.textAlign = G;
            o._mstTooltip.cl.style.textDecoration = I;
            o._mstTooltip.cl.style.verticalAlign = "top";
            o._mstTooltip.cl.style.display = bb;
            o._mstTooltip.cl.style.cursor = S;
            var v = o.createElement(y);
            v.src = c.imagePath + "tooltip_close.gif";
            v.style.border = N;
            v.style.width = H;
            v.style.height = H;
            o._mstTooltip.cl.appendChild(v);
            p.appendChild(o._mstTooltip.cl);
            o._mstTooltip.appendChild(p);
            var k = o.createElement(E);
            k.style.margin = "4px 4px 8px 4px";
            k.style.fontWeight = "bold";
            k.style.fontFamily = "Segoe UI";
            k.style.fontSize = "9px";
            k.style.letterSpacing = "0px";
            k.style.textTransform = "uppercase";
            k.style.color = "#4D4D4D";
            if (!z.sourceFrame) {
              var r = i;
              try {
                r = ic[jb[c.locale || W] || W] || r
              } catch (V) {}
              r += ":"
            } else {
              var r = "Translation";
              try {
                r = localizedTranslation[jb[c.locale || W] || W] || r
              } catch (V) {}
            }
            k.appendChild(o.createTextNode(r));
            o._mstTooltip.appendChild(k);
            o._mstTooltip.cp = o.createElement(E);
            o._mstTooltip.appendChild(o._mstTooltip.cp);
            o._mstTooltip.cb = o.createElement("span");
            o._mstTooltip.cb.style.display = bb;
            o._mstTooltip.cb.style.margin = "0px 4px 4px 4px";
            o._mstTooltip.cb.style.fontFamily = "Arial";
            o._mstTooltip.cb.style.fontSize = "12px";
            o._mstTooltip.cb.style.color = "black";
            o._mstTooltip.cp.appendChild(o._mstTooltip.cb);
            o.body.appendChild(o._mstTooltip)
          }
          o._mstTooltip.cl.onclick = R;
          o._mstTooltip.style.width = a;
          o._mstTooltip.cb.style.whiteSpace = "nowrap";
          o._mstTooltip.cb.innerHTML = a;
          o._mstTooltip.cb.appendChild(o.createTextNode(L.innerText || L.textContent));
          o._mstTooltip.style.display = B;
          for (var db in P) try {
            o._mstTooltip.cp.style[db] = P[db]
          } catch (V) {
            if (c.debug);
          }
          o._mstTooltip.onmouseover = function() {
            x = D;
            Q();
            Z()
          };
          o._mstTooltip.onmouseout = function() {
            x = e;
            setTimeout(Y, q)
          };
          var O = Math.max(h.getVisibleWidth(o), q),
            T = window.pageXOffset || o.documentElement.scrollLeft || o.body.scrollLeft,
            kb = Math.max(o.documentElement.scrollWidth, o.body.scrollWidth);
          if (Microsoft.TranslatorOverride && Microsoft.TranslatorOverride.showTooltip) try {
            Microsoft.TranslatorOverride.showTooltip(L, s, o._mstTooltip);
            l = 430
          } catch (V) {}
          var m = o._mstTooltip.cb.offsetWidth + 12;
          if (m > t.offsetWidth) m = t.offsetWidth;
          if (m > O - f) m = O - f;
          if (m < l) m = l;
          o._mstTooltip.style.width = m.toString() + n;
          o._mstTooltip.cb.style.whiteSpace = a;
          var g, fb = h.getStyleValue(s, cb) == C || h.getStyleValue(s, "text-align") == ab;
          if (fb) g = h.absXPos(s) + s.offsetWidth - o._mstTooltip.offsetWidth;
          else g = h.absXPos(s);
          if (g + o._mstTooltip.offsetWidth > h.absXPos(t) + t.offsetWidth) g = h.absXPos(t) + t.offsetWidth - o._mstTooltip
            .offsetWidth;
          if (g < h.absXPos(t) && h.absXPos(t) + m < kb) g = h.absXPos(t);
          if (h.getStyleValue(s, cb) != C) {
            if (g + o._mstTooltip.offsetWidth > O + T - 8) g = O + T - 8 - o._mstTooltip.offsetWidth;
            if (g < T + 8) g = T + 8
          }
          o._mstTooltip.style.left = g + n;
          o._mstTooltip.style.top = Math.max(h.absYPos(s) - (o._mstTooltip.offsetHeight + 8), 8) + n
        };

        function Y() {
          if (g) return;
          if (!x) R()
        }
        var R = u.hide = function() {
            ab(e);
            if (!K) return;
            else K = e;
            if (z.showHighlight) {
              s.style.color = O;
              s.style.backgroundColor = M
            }
            if (o._mstTooltip) o._mstTooltip.style.display = I
          },
          ab = u.setLock = function(a) {
            g = a
          },
          lb = u.tap = function(a) {
            if (window.WidgetLastHoveredItem != j) window.WidgetLastHoveredItem._mstTooltip.unhover(window.WidgetLastHoveredItem);
            N = D;
            if (o._mstTooltip) setTimeout(function() {
              o._mstTooltip.style.display = B
            }, k + 10);
            window.WidgetLastHoveredItem = a
          },
          mb = u.detach = function() {
            h.removeEvent(s, T, eb);
            h.removeEvent(s, V, fb);
            h.removeEvent(s, s, window.navigator.msPointerEnabled ? W : X, db)
          },
          eb = h.addEvent(s, T, Q),
          fb = h.addEvent(s, V, bb),
          db = h.addEvent(s, window.navigator.msPointerEnabled ? W : X, lb)
      }
    },
    qc = new function(K) {
      var lb = 1600,
        O = y,
        C = "span",
        t = A,
        bb = n,
        tb = j,
        i = E,
        u = B,
        D = Pb,
        Ib = "MSTCTransPanel",
        P = p,
        d = o,
        z = this,
        mc = 0,
        Ab, Hb, Bb, wb, Fb, g, yb, Y, db, zb, Xb, x, rb, fb, eb, cb, ab, Wb, V, Jb, ec, pb, Mb, ac, bc, Tb, dc, Ub,
        ic, lc, Gb, fc, b, I, kb, Zb, xb, ub, nb, m, jc, jb = d,
        Cb = P,
        gc = 1e6,
        k, l = 0,
        Db, G, T;
      window._mstCmCb = function() {
        c.appId = document.getElementById("MSTCAppIdToken").innerHTML;
        kb = parseInt(document.getElementById("MSTCMaxRating").innerHTML);
        Zb = document.getElementById("MSTCImagePath").innerHTML;
        xb = document.getElementById("MSTCAuthLang").innerHTML.toLowerCase();
        ub = document.getElementById("MSTCDashboardUrl").href;
        yb = document.getElementById("MSTCContent");
        Y = document.getElementById("MSTCExpandLink");
        db = document.getElementById("MSTCRootPanel");
        zb = document.getElementById("MSTCLoading");
        Xb = document.getElementById("MSTCSubmitting");
        x = document.getElementById(Ib);
        rb = document.getElementById("MSTCPrevNextPanel");
        fb = document.getElementById("MSTCPrevLink");
        eb = document.getElementById("MSTCNextLink");
        cb = document.getElementById("MSTCPrevCount");
        ab = document.getElementById("MSTCNextCount");
        Wb = document.getElementById("MSTCFooterPanel");
        V = document.getElementById("MSTCDashboardLink");
        bc = document.getElementById("MSTCApprove");
        Tb = document.getElementById("MSTCApproveTooltip");
        dc = document.getElementById("MSTCReject");
        Ub = document.getElementById("MSTCRejectTooltip");
        Jb = document.getElementById("MSTCTransPanelError");
        ec = document.getElementById("MSTCTransPanelErrorMsg");
        pb = document.getElementById("MSTCOKImgBtn");
        Mb = document.getElementById("MSTCHelpImgBtn");
        if (pb) pb.onclick = mb;
        if (h.isInternetExplorer() && h.isQuirksMode(document)) h.fixIEQuirks(g);
        fb.onclick = function() {
          sb(-3);
          return d
        };
        eb.onclick = function() {
          sb(3);
          return d
        };
        if (V)
          if (Cb) {
            V.onclick = Eb;
            var a = document.getElementById("MSTTDashboardLink");
            if (a) {
              a.parentNode.style.display = D;
              a.onclick = Eb;
              a.href = "javascript: " + a.title
            }
          } else V.style.visibility = Q;
        if (!window.Microsoft) window.Microsoft = {};
        window.Microsoft.TranslatorOverride = {
          showTooltip: Yb,
          hideTooltip: vb
        };
        if (kb >= 5) window.Microsoft.TranslatorOverride.showHighlight = Vb
      };
      var Yb = z.showTooltip = function(a, b, c) {
          if (!g || g.ownerDocument != c.ownerDocument) return;
          m = a._mstTooltip;
          Hb = a.getAttribute(N);
          Bb = b.getAttribute(N);
          wb = a;
          Fb = b;
          jb = d;
          Y.onclick = Lb;
          g.style.display = u;
          db.style.display = i;
          x.style.display = i;
          mb();
          c.appendChild(g)
        },
        Lb = z.showTranslations = function() {
          Y.onclick = Kb;
          db.style.display = u;
          zb.style.display = u;
          x.style.display = i;
          mb();
          rb.style.display = i;
          c.serviceClient.GetTranslations(c.appId, wb._mstNormalize(), Hb, Bb, 24, c.category ? {
            Category: c.category
          } : tb, Nb, Qb, 7e3);
          return d
        },
        kc = z.updateWidgetInfo = function(a) {
          I = a;
          nb = P
        };

      function Nb(b) {
        zb.style.display = i;
        x.innerHTML = a;
        x.style.display = u;
        if (b.Translations.length > 4) rb.style.display = u;
        var v = kb >= 5 && kb >= Math.abs(b.Translations[0].Rating) && (!xb || xb == Bb.toLowerCase()),
          o = b.Translations.length > 0 && b.Translations[0].Rating >= 5,
          w = !b.NoEdit && b.Translations.length == 1,
          s = b.Reject,
          h, p = b.Translations.length;
        for (h = 0; h < p; h++)
          if (b.Translations[h].Rating == 5) break;
        if (h != p) {
          var q = b.Translations[h].TranslatedText;
          for (var f = 0; f < b.Translations.length; f++) {
            if (f == h) continue;
            if (q == b.Translations[f].TranslatedText) {
              if (f < h) h--;
              b.Translations.splice(f, 1);
              f--
            }
          }
        }
        var j = e,
          n = e;
        for (var f = 0; f < b.Translations.length; ++f) {
          if (j == e && b.Translations[f].Rating < 5) j = f;
          if (j != e && b.Translations[f].Rating > -5) n = f
        }
        if (j >= 0 && n > j)
          for (var f = j; f < n; ++f)
            for (var m = f + 1; m <= n; ++m)
              if (b.Translations[f].Count < b.Translations[m].Count) {
                var y = b.Translations[f];
                b.Translations[f] = b.Translations[m];
                b.Translations[m] = y
              } k = [];
        while (b.Translations.length > 0) {
          var r = b.Translations.shift();
          try {
            k.push(new Sb(r, x, v, o, w, s))
          } catch (t) {
            if (c.debug);
            continue
          }
          if (o) o = d
        }
        if (b.Hover && k.length && k[0].hover) k[0].hover();
        l = 0;
        sb();
        if (document._mstTooltip && (document._mstTooltip.style.display == i || g.style.display == i)) vb();
        return k.slice(0)
      }

      function mb() {
        Jb.style.display = i
      }

      function Qb() {
        if (c.debug);
        Kb()
      }

      function Kb() {
        jb = d;
        m.setLock(d);
        Y.onclick = Lb;
        g.style.display = u;
        db.style.display = i;
        x.style.display = i;
        mb();
        return d
      }

      function sb(c) {
        if (jb) return d;
        if (!c) l = 0;
        else l += c;
        if (l < 0) l = 0;
        else if (l >= k.length) l -= 3;
        m.setLock(P);
        for (var b = 0; b < k.length; ++b)
          if (b >= l && b < l + 3) k[b].panel.style.display = u;
          else k[b].panel.style.display = i;
        var f = l,
          e = Math.max(k.length - (l + 3), 0);
        cb.innerHTML = "(" + f.toString() + ")";
        ab.innerHTML = "(" + e.toString() + ")";
        if (f > 0) {
          fb.style.color = "#59F";
          cb.style.display = a
        } else {
          fb.style.color = "#999";
          cb.style.display = i
        }
        if (e > 0) {
          eb.style.color = "#59F";
          ab.style.display = a
        } else {
          eb.style.color = "#999";
          ab.style.display = i
        }
        setTimeout(function() {
          m.setLock(d)
        }, 500)
      }

      function Sb(a, y, A, z) {
        var s = "4px 1px 0px 3px",
          r = "4px 3px 0px 1px",
          q = gb,
          e = this.panel = document.createElement(t);
        e.className = Ib;
        y.appendChild(e);
        a.OriginalText = wb._mstNormalize();
        var u = Fb._mstDenormalize(a.TranslatedText),
          l = document.createElement(t);
        l.className = "MSTCTransBox";
        if (z) l.style.color = "#006622";
        l.appendChild(document.createTextNode(u.innerText || u.textContent));
        e.appendChild(l);
        var b = document.createElement(t);
        b.className = "MSTCStatsTab";
        e.insertBefore(b, e.firstChild);
        var k = document.createElement(t);
        k.className = "MSTCVoteCount";
        b.appendChild(k);
        if (a.Rating > 5) {
          var i = document.createElement(C),
            v = document.createElement(O);
          v.src = c.imagePath + "ctfbadge.gif";
          i.appendChild(v);
          k.appendChild(i);
          if (a.Rating >= 10) i.style.backgroundColor = "#F2C341";
          else if (a.Rating >= 8) i.style.backgroundColor = "#B2B2B2";
          else if (a.Rating >= 6) i.style.backgroundColor = "#8C7853"
        } else if (a.Rating == 5) {
          var x = document.createElement(C),
            d = document.createElement(O);
          d.src = c.imagePath + "ctfmt.gif";
          d.style.margin = "2px 2px 0px 3px";
          x.appendChild(d);
          k.appendChild(x)
        } else if (a.Count) {
          var p = document.createElement(C),
            g = document.createElement(Z);
          g.style.display = D;
          g.appendChild(document.createTextNode(a.Count));
          p.appendChild(g);
          var d = document.createElement(O);
          d.src = c.imagePath + "ctfvotes.gif";
          p.appendChild(d);
          k.appendChild(p);
          if (h.getStyleValue(yb, q) == w) {
            g.style.margin = r;
            d.style.margin = "7px 1px 0px 3px"
          } else {
            g.style.margin = s;
            d.style.margin = "3px 3px 0px 1px"
          }
        } else b.parentNode.removeChild(b);
        if (a.Flags) {
          var j = document.createElement(t);
          j.className = "MSTCFlagCount";
          j.style.marginTop = "2px";
          b.appendChild(j);
          var n = document.createElement(C);
          n.style.width = n.style.minWidth = "1px";
          n.style.height = "21px";
          j.appendChild(n);
          var o = document.createElement(C),
            f = document.createElement(Z);
          f.style.display = D;
          f.appendChild(document.createTextNode(a.Flags));
          o.appendChild(f);
          var m = document.createElement(O);
          m.src = c.imagePath + "ctfflags.gif";
          o.appendChild(m);
          j.appendChild(o);
          if (h.getStyleValue(yb, q) == w) {
            f.style.margin = r;
            m.style.margin = "7px 1px 0px 2px"
          } else {
            f.style.margin = s;
            m.style.margin = "7px 2px 0px 1px"
          }
        }
        b.style.marginTop = (e.offsetHeight - b.offsetHeight) / 2 + bb
      }
      var vb = z.hideTooltip = function() {
          jb = d;
          g.style.display = i;
          if (m) m.hide();
          if (b && b.parentNode == document.body) try {
            document.body.removeChild(b)
          } catch (a) {}
        },
        Eb = z.showDashboard = function() {
          var j = hb;
          vb();
          if (m) m.setLock(P);
          if (!ub) return;
          b = document.createElement(t);
          b.style.position = j;
          b.style.zIndex = ib;
          b.style.width = "97%";
          b.style.margin = "44px 8px";
          b.style.borderRight = b.style.borderBottom = "solid 1px black";
          b.style.backgroundColor = "white";
          var i = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || q;
          if (i < q) i = q;
          i -= 60;
          var g = document.createElement(R);
          g.style.width = "100%";
          g.style.height = i.toString() + bb;
          g.src = 'javascript:document.write("Loading...")';
          b.appendChild(g);
          var a = document.createElement("a");
          try {
            h.applyProtectiveCss(a)
          } catch (k) {
            if (c.debug);
          }
          a.style.display = D;
          a.style.position = j;
          a.style.styleFloat = U;
          a.style.top = "4px";
          a.style.cursor = S;
          a.title = "Close dashboard";
          var f = document.createElement(C);
          f.style.display = D;
          f.style.width = "28px";
          f.style.height = "28px";
          f.style.marginRight = "16px";
          a.appendChild(f);
          var e = document.createElement(O);
          try {
            h.applyProtectiveCss(e)
          } catch (k) {
            if (c.debug);
          }
          e.src = c.imagePath + "ctfdashboardclose.gif";
          e.style.display = D;
          e.style.marginTop = H;
          e.style.marginLeft = H;
          e.style.border = "0px";
          f.appendChild(e);
          a.onclick = function() {
            if (m) m.setLock(d);
            document.body.removeChild(b)
          };
          b.appendChild(a);
          b.style.height = i.toString() + bb;
          b.style.overflow = Q;
          b.style.textAlign = F;
          window.scrollTo(0, 0);
          document.body.insertBefore(b, document.body.firstChild);
          setTimeout(function() {
            a.style.right = "4px";
            if (!h.isInternetExplorer()) a.style.left = (b.offsetWidth - a.offsetWidth).toString() + bb;
            var d = encodeURIComponent(location.href);
            if (d.lenght > lb) d = d.substr(0, lb);
            var e = ub + "?" + ob() + "&url=" + d + "&from=" + encodeURIComponent(c.from) + "&to=" +
              encodeURIComponent(c.to) + "&category=" + encodeURIComponent(c.category) + "&usr=" +
              encodeURIComponent(cc());
            g.src = e
          }, 0);
          return d
        };

      function ob() {
        var b = a;
        if (!nb) b += "siteData=" + I;
        else b += "trnsaccesstoken=" + I;
        if (G) b += Ob + G;
        return b
      }
      var s = 0;

      function Vb(a, b, c) {
        if (!a.transItems || !a.transItems.length) return;
        s = 0;
        qb(a, b, c)
      }

      function qb(a, f, g) {
        if (s >= a.transItems.length) return;
        var b = [],
          e = 0;
        for (var d = s; d < a.transItems.length && e < lb && d - s < 10; ++d) {
          var i = a.transItems[d].src._mstNormalize();
          e += h.getStringByteCount(i);
          b.push(i)
        }
        if (e >= lb) b.pop();
        c.serviceClient.GetTranslationsArray(c.appId, b, f, g, 3, c.category ? {
          Category: c.category
        } : tb, function(d) {
          for (var c = 0; c < d.length; ++c)
            if (d[c].Translations.length > 1)
              if (d[c].Translations[0].Rating > 5) a.transItems[s + c].tgt.style.backgroundColor = "#E6E6E6";
              else if (d[c].Translations[1].Count < 0) a.transItems[s + c].tgt.style.backgroundColor = "#E5917F";
          else a.transItems[s + c].tgt.style.backgroundColor = "#B9E4FC";
          s += b.length;
          qb(a, f, g)
        }, function() {
          s += b.length > 1 ? b.length : 1;
          qb(a, f, g)
        }, 7e3)
      }
      var hc = z.forceLoad = function() {
        if (T) T()
      };

      function cc() {
        var a = Gb.innerText || Gb.textContent;
        if (!a) {
          var b = document.cookie.match(/mstcid=([^;]+)/i);
          if (b) a = b[1];
          else {
            a = Math.floor(Math.random() * 1e9).toString(f);
            document.cookie = "mstcid=" + a + "; expires=Sun, 01-Jan-2040 01:01:01 GMT; path=" + ((location.host.indexOf(
              "bing") > e && location.pathname.indexOf("/translator")) > e ? location.pathname : v)
          }
        }
        return a
      }
      new function() {
        var b, e;
        b = K.match(/siteData=([^&]*)/i);
        if (b) {
          I = b[1];
          nb = d
        } else {
          b = K.match(/trnsaccesstoken=([^&]*)/i);
          if (b) {
            I = b[1];
            nb = P
          }
        }
        b = K.match(/onerror=([^&]+)/i);
        if (b) G = b[1];
        Ab = c.locale;
        b = K.match(/loc=([^&]+)/);
        if (b) Ab = b[1];
        b = K.match(/ctfLanguages=([^&]*)/);
        if (b) e = b[1];
        b = K.match(/showDashboard=([^&]*)/);
        if (b && (b[1].toLowerCase() == M || b[1].toLowerCase() == J)) Cb = d;
        if (e) {
          Db = {};
          var j = e.split(",");
          for (var f = 0; f < j.length; ++f) Db[j[f].toLowerCase()] = 1
        }
        if (I) T = function() {
          var b = "MicrosoftTranslatorCommunity";
          if (!T) return;
          T = tb;
          g = document.getElementById(b);
          if (g) g.parentNode.removeChild(g);
          g = document.createElement(t);
          g.id = b;
          g.style.display = i;
          document.body.insertBefore(g, document.body.firstChild);
          var d = a;
          if (h.isInternetExplorer() && h.isQuirksMode(document)) d = "&inrt=1";
          ac = Rb("/ajax/v3/community.aspx?fmt=js&loc=" + Ab + d + r + ob(), c.rootURL)
        };
        if (c.tokRef) {
          window._mstRefTok = function(a) {
            c.appId = a
          };
          setInterval(function() {
            if (_eTokenScript) _eTokenScript.parentNode.removeChild(_eTokenScript);
            _eTokenScript = Rb("/ajax/v3/community.aspx?reftok=1&" + ob(), c.rootURL)
          }, c.tokRef * 1e3)
        }

        function k(a) {
          var b = X;
          if (typeof a.data == W && a.data.indexOf(b) == 0) {
            var c = a.data.substring(b.length);
            if (window[G] && typeof window[G] == L) window[G](c)
          }
        }
        if (window.addEventListener) addEventListener("message", k, d);
        else attachEvent("onmessage", k)
      };
      c.serviceClient.Community = z
    }(c.baseURL),
    t;
  (function(h) {
    var fb = dc,
      eb = ec,
      t = "value",
      A = "{0}",
      x = E,
      Z = "style",
      f = Yb,
      s = B,
      bb = K,
      k = p,
      d = o,
      y = j,
      v = {},
      R, i, q = y,
      w = y,
      F = d,
      H, g, L, V, U, T, m, W, X, Ob = d,
      lb = k,
      C = d,
      G = k,
      kb = d,
      mb = d,
      S;

    function Ub(p, h, b) {
      var e = "_bwmid",
        l = nb,
        j = ob;
      if (h === void 0) h = "true";
      if (b === void 0) b = a;
      H = Util.GetElement(pb);
      g = Util.GetElement(cb);
      L = Util.GetElement(qb);
      V = Util.GetElement(rb);
      U = Util.GetElement(sb);
      T = Util.GetElement(tb);
      S = b == a;
      q = b;
      var f = document.createElement("link");
      f.setAttribute(O, window[bb].floaterStylePath);
      f.setAttribute("rel", ub);
      var m = document.getElementsByTagName(D)[0];
      m.insertBefore(f, m.firstChild);
      g.onmousedown = Tb;
      H.setAttribute(j, l);
      H.setAttribute(vb, wb);
      L.setAttribute(j, l);
      R = p;
      Microsoft.Translator.Widget.GetLanguagesForTranslate(p, hb, gb);
      var n = g.getElementsByTagName("input");
      for (var i = 0; i < n.length; i++) {
        var o = n[i];
        if (o.getAttribute("type").toLowerCase() == ab) o.setAttribute("onclick", xb)
      }
      if (h.toLowerCase() == M) lb = d;
      kb = k;
      if (window[e]) window[e] += yb;
      else window[e] = zb;
      Rb(Ab, (document.location.protocol == "https:" ? Bb : Cb) + Db);
      if (!Ob && lb) {
        c.serviceClient.Community.forceLoad();
        Ob = k
      }
    }
    h.Initialize = Ub;

    function jb() {
      g.style.display = s
    }

    function J(d) {
      if (!kb) {
        setTimeout(function() {
          J(d)
        }, l);
        return
      }
      var c;
      if (!mb)
        if (c = document.getElementById(Eb)) {
          var b = c.getBoundingClientRect();
          if (window["Util"].IsElementInViewport(c))
            if (b.left == 0 && b.top == 0) setTimeout(function() {
              b = c.getBoundingClientRect();
              I(b.left, b.top)
            }, 200);
            else I(b.left, b.top);
          else I(l, l)
        } else if (!c) I(l, l);
      mb = k;
      z();
      jb();
      H.style.display = s;
      i = d;
      var e = setInterval(function() {
        if (window[f]) {
          window[f].onChanged = Sb;
          try {
            try {
              window[f].setValue(i)
            } catch (b) {
              console.error(b)
            }
            m = Util.GetElement(db);
            if (q == a) m.parentNode[Z].display = x;
            else {
              m.parentNode[Z].display = s;
              if (S) m.innerHTML = window[bb].autoDetected.replace(A, v[q]);
              else m.innerHTML = v[q]
            }
          } catch (b) {
            console.warn(b)
          }
          clearInterval(e)
        }
      }, 1);
      G = k;
      if (w) clearTimeout(w);
      if (!C) {
        F = k;
        N()
      }
    }
    h.Show = J;

    function kc() {
      g.style.display = x
    }

    function z() {
      H.style.display = x;
      V.style.display = x;
      L.style.display = x;
      U.style.display = x;
      G = d;
      clearTimeout(w)
    }

    function I(a, b) {
      g.style.top = b + n;
      g.style.left = a + n
    }

    function bc() {
      ib();
      F = k;
      N()
    }
    h.TranslationComplete = bc;

    function cc(g) {
      if (g >= 0 && g < u) {
        F = d;
        clearTimeout(w);
        ib();
        Pb()
      }
      var e = y;
      try {
        e = Microsoft.Translator.Widget.GetAutoDetectedLanguage()
      } catch (l) {}
      if (e && window[f] && window[f].getValue) {
        q = e;
        m.parentNode[Z].display = s;
        if (S) m.innerHTML = window[bb].autoDetected.replace(A, v[q]);
        else m.innerHTML = v[q];
        var k = v[e],
          h = v[window[f].getValue()],
          i = location.href.substr(0, location.href.length - (location.hash || a).length),
          j = document.location.search.length == 0 ? "?" : r,
          b = Util.GetElement(Fb).getAttribute(t);
        b = b.replace(A, h);
        b = b.replace(P, k);
        var c = Util.GetElement(Gb).getAttribute(t);
        c = c.replace(A, encodeURIComponent(i + j + eb + window[f].getValue()));
        c = c.replace(P, encodeURIComponent(i));
        Util.GetElement(Hb).setAttribute(O, Ib + b + "&body=" + c);
        Util.GetElement(Jb).setAttribute("title", Util.GetElement(Kb).getAttribute(t).replace(A, h));
        window["Util"].SetCookie("mstto", window[f].getValue(), d)
      }
    }
    h.TranslationProgress = cc;

    function jc(a) {
      console.log(a)
    }
    h.TranslationError = jc;

    function Xb() {
      Microsoft.Translator.Widget.RestoreOriginal();
      kc()
    }
    h.OnClose = Xb;

    function ic() {
      z();
      J(i)
    }
    h.OnShareBackClick = ic;

    function hc() {
      z();
      J(i)
    }
    h.OnEmbedBackClick = hc;

    function fc() {
      clearTimeout(w);
      C = k;
      J(i)
    }
    h.OnMouseOverFloater = fc;

    function gc() {
      C = d;
      if (G) N()
    }
    h.OnMouseOutFloater = gc;

    function N() {
      if (F && !C && G) w = setTimeout(function() {
        ac()
      }, 7e3)
    }

    function Qb() {
      var c = Lb;
      z();
      jb();
      var b = location.href.substr(0, location.href.length - (location.hash || a).length);
      if (location.search.length == 0) Util.GetElement(c).setAttribute(t, b + Mb + i);
      else if (location.search.indexOf("__mstto") != e) {
        if (b.match(/__mstto=(.+)([&]+)/i)) Util.GetElement(c).setAttribute(t, b.replace(/__mstto=(.+)([&&]+)/i, eb +
          i + r));
        else if (b.match(/__mstto=(.+)/i)) Util.GetElement(c).setAttribute(t, b.replace(/__mstto=(.+)/i, eb + i))
      } else Util.GetElement(c).setAttribute(t, b + Nb + i);
      V.style.display = s
    }
    h.ShowSharePanel = Qb;

    function Wb() {
      z();
      U.style.display = s
    }
    h.ShowEmbed = Wb;

    function ac() {
      if (F && !C && G) {
        z();
        L.style.display = s
      }
    }

    function hb(b) {
      for (var a = 0; a < b.length; a++) v[b[a].Code] = b[a].Name
    }

    function gb() {
      if (R != b) {
        R = b;
        Microsoft.Translator.Widget.GetLanguagesForTranslate(b, hb, gb)
      }
    }

    function ib() {
      T.style.visibility = Q
    }

    function Pb() {
      T.style.visibility = Y
    }

    function Sb() {
      if (i.toLowerCase() != window[f].getValue().toLowerCase()) {
        clearTimeout(w);
        Microsoft.Translator.Widget.Translate(q, window[f].getValue());
        i = window[f].getValue();
        window[f].elemHeader.focus()
      }
    }

    function Tb(a) {
      a = a || event;
      W = a.clientX;
      X = a.clientY;
      document.onmousemove = Zb;
      document.onmouseup = Vb;
      document.body.focus();
      document.onselectstart = function() {
        return d
      };
      g.ondragstart = function() {
        return d
      };
      Util.addClass(g, fb);
      return d
    }

    function Zb(a) {
      a = a || event;
      var b = Util.getPosition(g),
        c = a.clientX - W,
        e = a.clientY - X;
      I(parseInt(b.left) + c, parseInt(b.top) + e);
      W = a.clientX;
      X = a.clientY;
      return d
    }

    function Vb(a) {
      a = a || event;
      document.onmousemove = y;
      document.onselectstart = y;
      g.ondragstart = y;
      Util.removeClass(g, fb);
      return d
    }
  })(t || (t = {}));
  k.FloaterInitialize = function(b, a, c) {
    t.Initialize(b, a, c)
  };
  k.FloaterShowSharePanel = function() {
    t.ShowSharePanel()
  };
  k.FloaterShowEmbed = function() {
    t.ShowEmbed()
  };
  k.FloaterOnClose = function() {
    t.OnClose();
    return o
  };
  k.FloaterOnShareBackClick = function() {
    t.OnShareBackClick()
  };
  k.FloaterOnEmbedBackClick = function() {
    t.OnEmbedBackClick()
  };
  k.OnMouseOverFloater = function() {
    t.OnMouseOverFloater();
    return o
  };
  k.OnMouseOutFloater = function() {
    t.OnMouseOutFloater();
    return o
  };
  var Qb = document.getElementById(cb);
  if (Qb != j) Qb.parentNode.removeChild(Qb)
};

function CUtil() {
  var f = "character",
    e = true,
    d = false,
    b = null,
    c = -1,
    a = this,
    g = navigator.userAgent.toLowerCase();
  a.MSIE = g.indexOf("msie") != c && g.indexOf("opera") == c;
  a.MSIE6 = a.MSIE && g.indexOf("msie 6.") != c;
  a.MSIE7 = a.MSIE && g.indexOf("msie 7.") != c;
  a.FIREFOX = g.indexOf("firefox") != c;
  a.SAFARI = g.indexOf("applewebkit") != c;
  a.BvError = {
    Unknown: 0,
    ConnectionError: 1,
    ConnectionRefused: 2,
    TranslationDisallowed: 3,
    SameLanguage: 4,
    ContentInDestLang: 5,
    NotFound: 6,
    Forbidden: 7,
    NameUnresolved: 8,
    Timeout: 9,
    URLBlocked: 10,
    HashMissing: 11,
    HashMismatch: 12,
    TimeParsingFailure: 13,
    HashExpired: 14
  };
  a.GetPath = function() {
    var a = "/";
    if (location.pathname) {
      a = location.pathname.match(/\/\w*/i);
      if (a) a = a[0]
    }
    return a
  };
  a.AddFavorites = function() {
    var a = document.title,
      b = window.location.href;
    if (this.FIREFOX) window.sidebar.addPanel(a, b, "");
    else window.external.AddFavorite(b, a)
  };
  a.SetCookie = function(c, b, d, a) {
    if (window.mscc === undefined || window.mscc.hasConsent()) {
      if (!a) a = "/";
      document.cookie = c + "=" + b + (d ? "; expires=Sun, 01-Jan-2040 01:01:01 GMT" : "") + "; path=" + a
    }
  };
  a.DeleteCookie = function(b, a) {
    if (!a) a = "/";
    document.cookie = b + "=;Thu, 01 Jan 1970 00:00:01 GMT; path=" + a
  };
  a.GetCookie = function(d) {
    var c = "document.cookie.match(/",
      a = eval(c + d + "s*=([^;]*)(;|$)/);");
    if (a != b) return a[1];
    else {
      a = eval(c + d + "s*([^;]*)(;|$)/);");
      if (a != b) return a[1];
      else return b
    }
  };
  a.AddEvent = function(a, b, c) {
    if (a.addEventListener) a.addEventListener(b, c, d);
    else if (a.attachEvent) a.attachEvent("on" + b, c)
  };
  a.RemoveEvent = function(a, b, c) {
    if (a.removeEventListener) a.removeEventListener(b, c, d);
    else if (a.detachEvent) a.detachEvent("on" + b, c)
  };
  a.AbsXPos = function(a) {
    return a.offsetLeft + (a.offsetParent != b ? this.AbsXPos(a.offsetParent) : 0)
  };
  a.AbsYPos = function(a) {
    return a.offsetTop + (a.offsetParent != b ? this.AbsYPos(a.offsetParent) : 0)
  };
  a.SetDDLByVal = function(c, b) {
    for (var a = 0; a < b.options.length; a++)
      if (b.options[a].value == c) {
        b.options[a].selected = e;
        return
      }
  };
  a.GetElement = function(a) {
    if (arguments.length <= 0) return b;
    if (document.getElementById) return document.getElementById(a);
    else if (document.all) return document.all(a);
    else if (document.layers) return window.document.layers[a];
    else return b
  };
  a.GetStyleObject = function(a) {
    if (document.getElementById && document.getElementById(a)) return document.getElementById(a).style;
    else if (document.all && document.all(a)) return document.all(a).style;
    else if (document.layers && document.layers[a]) return document.layers[a];
    else return d
  };
  a.GetStyleValue = function(e, c) {
    var a = document.getElementById(e) || document.body,
      d;
    if (a.currentStyle) d = a.currentStyle[c] || a.currentStyle.getAttribute(c.replace("-"));
    else if (window.getComputedStyle) d = document.defaultView.getComputedStyle(a, b).getPropertyValue(c);
    return d
  };
  a.GetComputedStyle = function(e, c) {
    var a = document.getElementById(e) || document.body,
      d;
    if (window.getComputedStyle) d = document.defaultView.getComputedStyle(a, b).getPropertyValue(c);
    else if (a.currentStyle) d = a.currentStyle[c] || a.currentStyle.getAttribute(c.replace("-"));
    return d
  };
  a.GetScrollBounds = function(a) {
    if (a == b) return {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    var e, f, d, c;
    if (a.documentElement != b && a.documentElement.scrollTop != b && a.documentElement.scrollTop >= a.body.scrollTop) {
      e = a.documentElement.scrollLeft;
      f = a.documentElement.scrollTop;
      d = a.documentElement.scrollWidth;
      c = a.documentElement.scrollHeight
    } else {
      e = a.body.scrollLeft;
      f = a.body.scrollTop;
      d = a.body.scrollWidth;
      c = a.body.scrollHeight
    }
    return {
      x: e,
      y: f,
      width: d,
      height: c
    }
  };
  a.getLanguageDirStyle = function(b) {
    var a;
    if (Microsoft.Translator.languageDirs[b] == "rtl") a = {
      direction: "rtl",
      textAlign: "right"
    };
    else a = {
      direction: "ltr",
      textAlign: "left"
    };
    return a
  };
  a.setScrollValue = function(a, b, e, f, c) {
    var d = a.ownerDocument.defaultView ? a.ownerDocument.defaultView : a.ownerDocument.parentWindow;
    if (d.scrollBy) d.scrollBy(e, f);
    else {
      a["scroll" + c] = b;
      a.ownerDocument.body["scroll" + c] = b
    }
  };
  a.GetUrlParameter = function(e, a) {
    a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var d = "[\\?&]" + a + "=([^&#]*)",
      f = new RegExp(d, "i"),
      c = f.exec(e);
    if (c == b) return b;
    else return c[1]
  };
  a.GetDocumentUrl = function(d) {
    var e = "/bv.aspx",
      b = "a=",
      a = "";
    if (d.location.hash.length > 1) a = d.location.hash.substring(1);
    else if (d.location.search.indexOf(b) > 0) a = decodeURIComponent(d.location.search.substring(d.location.search.indexOf(
      b) + 2));
    while (a && a.toLowerCase().indexOf(e) >= 0 && a.toLowerCase().indexOf(b) >= 0) a = decodeURIComponent(a.substring(
      a.toLowerCase().indexOf(b) + 2));
    if (a.length > 0) {
      a = a.replace(/^\s*/, "").replace(/\s*$/, "");
      if (a.indexOf("?") == c) a = a.replace("&", "?")
    }
    if (a && a.indexOf("://") == c) a = "http://" + a;
    if (a && a.toLowerCase().indexOf(e) >= 0) a = "";
    return a
  };
  a.SendPostRequest = function(f, c, e) {
    var a = document.createElement("form");
    a.action = f;
    a.method = "post";
    a.target = e;
    for (var d in c)
      if (c.hasOwnProperty(d)) {
        var b = document.createElement("input");
        b.name = d;
        b.value = c[d];
        b.type = "hidden";
        a.appendChild(b)
      } document.body.appendChild(a);
    a.submit();
    document.body.removeChild(a)
  };
  a.Log = function(b, a) {
    if (window.mscc === undefined || window.mscc.hasConsent()) Microsoft.Translator.LoadScript("/sync.ashx?svc=" + b +
      "&" + a.join("&"))
  };
  a.GetCaretPosition = function(a) {
    var g = 0;
    if (a.selectionStart || a.selectionStart == "0") g = a.selectionStart;
    else if (document.selection) {
      var i = document.selection.createRange(),
        j = 0,
        k = 0;
      if (i && i.parentElement() == a) {
        var e = a.value.length,
          l = a.value.replace(/\r\n/g, "\n"),
          b = a.createTextRange();
        b.moveToBookmark(i.getBookmark());
        var h = a.createTextRange();
        h.collapse(d);
        if (b.compareEndPoints("StartToEnd", h) > c) j = k = e;
        else {
          j = -b.moveStart(f, -e);
          if (b.compareEndPoints("EndToEnd", h) > c) k = e;
          else k = -b.moveEnd(f, -e)
        }
      }
      g = j
    }
    return g
  };
  a.SetSelectionRange = function(a, c, d) {
    if (a.setSelectionRange) {
      a.focus();
      a.setSelectionRange(c, d)
    } else if (a.createTextRange) {
      var b = a.createTextRange();
      b.collapse(e);
      b.moveEnd(f, d);
      b.moveStart(f, c);
      b.select()
    }
  };
  a.SetCaretToPosition = function(b, a) {
    this.SetSelectionRange(b, a, a)
  };
  a.addClass = function(d, c) {
    var b = d.className.split(" ");
    for (var a = 0; a < b.length; a++)
      if (c == b[a]) return;
    d.className += " " + c
  };
  a.removeClass = function(c, d) {
    var b = c.className.split(" ");
    c.className = "";
    for (var a = 0; a < b.length; a++)
      if (d != b[a]) {
        c.className += b[a];
        if (a == b.length - 1) c.className += " "
      }
  };
  a.IsBrowserIE = function() {
    var a = window.navigator.userAgent.toUpperCase();
    if (a.indexOf("MSIE") > 0) return e;
    if (!!a.match(/TRIDENT\/7\./)) return e;
    return d
  };
  a.IsBrowserEdge = function() {
    return window.navigator.userAgent.toUpperCase().indexOf("EDGE") > c
  };
  a.IsDeviceIOS = function() {
    return /IPAD|IPHONE|IPOD/.test(navigator.userAgent.toUpperCase()) && !window.MSStream
  };
  a.getPosition = function(a) {
    var b = 0,
      c = 0;
    while (a && !isNaN(a.offsetLeft) && !isNaN(a.offsetTop)) {
      b += a.offsetLeft - a.scrollLeft;
      c += a.offsetTop - a.scrollTop;
      a = a.offsetParent
    }
    return {
      top: c,
      left: b
    }
  };
  a.IsElementInViewport = function(b) {
    var a = b.getBoundingClientRect();
    return a.top >= 0 && a.left >= 0 && a.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      a.right <= (window.innerWidth || document.documentElement.clientWidth)
  };
  return a
}
var Util = new CUtil;
var MtPopUpList = function() {
  var a = this;
  a.onChanged = null;
  a.shiftKeyDown = false;
  a.MRUL = [];
  a.MAX_MRUL = 2
};
MtPopUpList.prototype = {
  keysBuffer: "",
  Init: function(d, c, i, g, h) {
    var a = this;
    a.Items = [];
    a.Keys = [];
    a.KeyMap = " " + c.join(" ") + " ";
    a.keysBuffer = "";
    var f = 0;
    for (var b = 0; b < c.length; b++) {
      a.Items[c[b]] = i[b];
      if (c[b] != "-") {
        a.Keys[f] = c[b];
        f++
      }
    }
    a.onChanged = g;
    document.onclick = a.HideCurrentPopup;
    a.elemHeader = Util.GetElement("__" + d + "_header");
    a.elemSvID = Util.GetElement(d + "_svid");
    a.elemTextId = Util.GetElement(d + "_textid");
    a.elemPopup = document.getElementById(h);
    a.cropText();
    if (a.elemPopup != null) {
      a.elemPopup.onkeydown = (new a.doKeyDown(a, a.HideCurrentPopup)).execute;
      a.elemPopup.onkeyup = (new a.doKeyUp(a)).execute;
      a.elemPopup.onkeypress = (new a.doKeyPress(a)).execute
    }
    a.name = d;
    a.mrul_cookie = d + "_lpmru";
    var e = Util.GetCookie(a.mrul_cookie);
    if (e != null && e != "undefined") a.MRUL = e.split(",");
    else a.MRUL = []
  },
  getLinks: function() {
    return this.elemPopup.getElementsByTagName("a")
  },
  getActiveLink: function() {
    var a = this.getLinks(),
      c = this.elemSvID.value;
    if (c != null)
      for (var b = 0; b < a.length; b++)
        if (a[b].href.match("#" + c + "$") != null) return a[b];
    return a[0]
  },
  getByLetter: function(i, h, e) {
    var d = this,
      g = String.fromCharCode(h).toUpperCase(),
      f = d.getActiveLink(),
      a = [],
      b;
    for (b = 0; b < e.length; b++) a[b] = e[b];
    a.sort(function(c, d) {
      var a = c.innerText || c.textContent,
        b = d.innerText || d.textContent;
      if (a < b) return -1;
      if (a > b) return 1;
      return 0
    });
    var c = 0;
    for (; c < a.length; c++)
      if (f == a[c]) {
        c++;
        break
      } for (; c < a.length; c++)
      if (d.getFirstChar(a[c]) == g) return d.getHref(a[c]);
    for (b = 0; b < a.length; b++)
      if (d.getFirstChar(a[b]) == g && f != a[b]) return d.getHref(a[b]);
    return null
  },
  getFirstChar: function(b) {
    var a = b.innerText || b.textContent;
    if (a != undefined && a != null && a.length > 0) return a.substr(0, 1).toUpperCase();
    else return ""
  },
  getNextKey: function(e, d) {
    var b = this,
      a = 0;
    for (var c = 0; c < b.Keys.length; c++)
      if (b.Keys[c] == e) {
        a = c;
        break
      } a = a + d;
    if (a > b.Keys.length) a = 0;
    else if (a < 0) a = b.Keys.length - 1;
    return b.Keys[a]
  },
  getNextSibling: function(g, f) {
    var e = this.getActiveLink(),
      c = e.parentNode;
    while (c.tagName.toLowerCase() != "tr" && c.parentNode != null) c = c.parentNode;
    var b = c.getElementsByTagName("a"),
      a = 0;
    for (var d = 0; d < b.length; d++)
      if (e.href == b[d].href) {
        a = d;
        break
      } a = a + f;
    if (a < 0) a = 0;
    else if (a >= b.length) a = b.length - 1;
    return this.getHref(b[a])
  },
  doKeyUp: function(a) {
    this.execute = function(b) {
      if (!b) b = window.event;
      if (b.keyCode == 16) {
        a.shiftKeyDown = false;
        if (b.preventDefault) b.preventDefault();
        else b.returnValue = false;
        b.cancelBubble = true;
        return true
      } else return false
    }
  },
  doKeyPress: function(a) {
    this.execute = function(b) {
      if (!b) b = window.event;
      a.keysBuffer += String.fromCharCode(b.charCode || b.keyCode).toLowerCase();
      clearTimeout(a.keyTimeOut);
      a.keyTimeOut = setTimeout(function() {
        a.keysBuffer = ""
      }, 1e3)
    }
  },
  doKeyDown: function(a, b) {
    this.execute = function(e) {
      var c = false,
        d = null;
      if (!e) e = window.event;
      var g = a.getLinks(),
        f = a.elemSvID.value,
        j = c;
      switch (e.keyCode) {
        case 16:
          a.shiftKeyDown = true;
          return c;
        case 9:
          if (a.shiftKeyDown) d = a.getNextKey(f, -1);
          else d = a.getNextKey(f, 1);
          break;
        case 40:
          d = a.getNextKey(f, 1);
          break;
        case 38:
          d = a.getNextKey(f, -1);
          break;
        case 39:
          d = a.getNextSibling(f, 1);
          break;
        case 37:
          d = a.getNextSibling(f, -1);
          break;
        case 13:
        case 27:
          b();
          return c;
        default:
          j = true
      }
      if (!j) {
        var i = g[0];
        for (var h = 0; h < g.length; h++)
          if (g[h].href.indexOf("#" + d) != -1) {
            i = g[h];
            break
          } try {
          i.focus();
          i.onclick()
        } catch (k) {}
        return c
      } else {
        window.evt = e;
        setTimeout(function() {
          if (!e) e = window.evt;
          var c = a.getLinks(),
            d;
          for (var b = 0; b < c.length; b++) {
            var f = c[b].outerText || c[b].text;
            if (f.toLowerCase().indexOf(a.keysBuffer) == 0 && f != (a.getActiveLink().outerText || a.getActiveLink()
                .text)) {
              d = c[b];
              break
            }
          }
          try {
            if (d) {
              d.focus();
              d.onclick()
            }
          } catch (g) {}
        }, 30)
      }
      return true
    }
  },
  Hide: function() {
    this.HideCurrentPopup()
  },
  Show: function(c, b) {
    var d = true,
      a = this;
    if (b) {
      if (b.keyCode == 27) {
        a.Hide(c, b);
        return d
      }
      if (b.keyCode && b.keyCode != 40) return false;
      if (window.curDisplayedPopup == c) {
        a.HideCurrentPopup();
        return d
      }
      a.HideCurrentPopup();
      b.cancelBubble = d;
      if (a.ChangeObjectDisplay(c, "block")) {
        window.curDisplayedDDHeader = a.elemHeader;
        window.curDisplayedPopup = c;
        a.getActiveLink().focus();
        Util.addClass(a.elemHeader, "DDSActive");
        return d
      }
    }
    return false
  },
  cropText: function() {
    var c = "overflow",
      a = this,
      f = "...",
      b = a.elemHeader.innerHTML;
    a.elemHeader.title = b;
    a.elemHeader.innerHTML += "____";
    a.elemHeader.style[c] = "hidden";
    var g = a.elemHeader.clientWidth,
      h = a.elemHeader.scrollWidth,
      d = g * 1 / h * 1;
    if (d < 1) {
      var e = Math.ceil(d * b.length);
      if (e < b.length) b = String(b).substring(0, e - f.length) + f
    }
    a.elemHeader.style[c] = "visible";
    a.elemHeader.innerHTML = b
  },
  getHref: function(a) {
    return a.href.substr(a.href.indexOf("#") + 1)
  },
  setValue: function(b, f) {
    var a = this;
    if (b) {
      var c = (new RegExp(" (" + b + ") ", "i")).exec(a.KeyMap);
      if (c && c[1]) b = c[1]
    }
    if (a.Items[b] == null) throw new Error("Value is not in the current list.");
    a.elemSvID.value = b;
    a.elemHeader.value = a.Items[b];
    if (f != "true") a.addMRUL(b);
    var e = document.getElementById(a.name);
    if (e.tagName == "SELECT")
      for (var d = 0; d < e.options.length; d++) {
        var g = e.options[d];
        if (g.value == b) {
          g.selected = "selected";
          break
        }
      }
    a.setText(a.Items[b], f)
  },
  getValue: function() {
    return this.elemSvID.value
  },
  setText: function(c, d) {
    var a = this,
      b = document.getElementById(a.name);
    if (b.tagName.toLowerCase() == "select")
      if (b.value == "") b.options[0].text = c;
      else if (b.options[0].value == "") b.options[0].text = a.Items[""];
    a.elemTextId.value = c;
    a.elemHeader.innerHTML = c;
    a.cropText();
    if (d != "true") a.onChanged(c, a.Items[c])
  },
  getText: function() {
    return this.elemTextId.value
  },
  onclick: function(a) {
    this.setValue(a);
    return false
  },
  ondragstart: function(a) {
    if (!a) a = window.event;
    if (a.preventDefault) a.preventDefault()
  },
  OnSelectedValueChanged: function() {
    return this.onChanged
  },
  HideCurrentPopup: function() {
    if (window.curDisplayedPopup) {
      Util.GetElement(window.curDisplayedPopup).style.display = "none";
      Util.removeClass(window.curDisplayedDDHeader, "DDSActive");
      window.curDisplayedPopup = false;
      window.curDisplayedDDHeader = null
    }
    this.shiftKeyDown = false
  },
  ChangeObjectDisplay: function(c, b) {
    var a = Util.GetStyleObject(c);
    if (a && a.display) {
      a.display = b;
      return true
    } else return false
  },
  addMRUL: function(d) {
    var a = this;
    if (!d) return;
    if (a.MRUL[0] == d) return;
    var c = 0,
      b;
    for (b = 1; b < a.MRUL.length; b++)
      if (a.MRUL[b] == d) {
        c = b;
        break
      } if (c == 0) a.MRUL.unshift(d);
    else {
      var e = c > 0 ? a.MRUL[c] : d;
      for (b = c; b > 0; b--) a.MRUL[b] = a.MRUL[b - 1];
      a.MRUL[0] = e
    }
    while (a.MRUL.length > a.MAX_MRUL) a.MRUL.pop();
    Util.SetCookie(a.mrul_cookie, a.MRUL, true, Util.GetPath())
  }
};
window['_mstConfig'].floaterStylePath =
  'http://www.microsofttranslator.com/static/25824067/css/WidgetV3.css?v=25824067';
window['_mstConfig'].translateWithBing = '通过 {0} 翻译';
window['_mstConfig'].withBing = '通过 {0}';
window['_mstConfig'].autoDetected = '{0}（已自动检测）';

function loadAllScripts(fn) {
  var intervalID = setInterval(function() {
    if (document.readyState != 'complete') return;
    clearInterval(intervalID);
    fn();
  }, 10);
}

function onloadCallback() {
  var head = document.getElementsByTagName('head')[0];
  try {
    var body = document.getElementsByTagName('body')[0];
    var numChildren = body.children.length;
    var numScripts = body.getElementsByTagName('script').length;

    function appendHTMLToBody(html) {
      var temp = document.createElement('div');
      temp.innerHTML = html;
      for (var i = 0; i < temp.children.length; i++) {
        body.appendChild(temp.children[i]);
      }
    }
    appendHTMLToBody(decodeURIComponent('%3ctitle%3e%20%3c%2ftitle%3e'));
    appendHTMLToBody(decodeURIComponent(
      '%20%3cdiv%20id%3d%22WidgetFloaterPanels%22%20translate%3d%22no%22%20style%3d%22display%3a%20none%3btext-align%3a%20left%3bdirection%3a%20ltr%22%20class%3d%22LTRStyle%22%20%3e%20%3cdiv%20id%3d%22WidgetFloater%22%20style%3d%22display%3a%20none%22%20%3e%20%3cdiv%20id%3d%22WidgetLogoPanel%22%3e%20%3cspan%20id%3d%22WidgetTranslateWithSpan%22%20style%3d%22text-align%3aleft%3b%22%3e%e5%bf%85%e5%ba%94%e5%9c%a8%e7%ba%bf%e7%bf%bb%e8%af%91%3c%2fspan%3e%20%3cspan%20id%3d%22WidgetCloseButton%22%20title%3d%22%e9%80%80%e5%87%ba%e7%bf%bb%e8%af%91%22%20onclick%3d%22Microsoft.Translator.FloaterOnClose()%22%3e%3cimg%20src%3d%22http%3a%2f%2fwww.microsofttranslator.com%2fstatic%2f25824067%2fimg%2fclose_x.png%22%20id%3d%22WidgetCloseImage%22%20class%3d%22WidgetCloseImage%22%20%2f%3e%3c%2fspan%3e%3c%2fdiv%3e%20%3cdiv%20id%3d%22LanguageMenuPanel%22%3e%20%3cdiv%20class%3d%22DDStyle_outer%22%3e%3cinput%20name%3d%22LanguageMenu_svid%22%20type%3d%22text%22%20id%3d%22LanguageMenu_svid%22%20style%3d%22display%3anone%3b%22%20autocomplete%3d%22on%22%20value%3d%22zh-CHS%22%20%2f%3e%20%3cinput%20name%3d%22LanguageMenu_textid%22%20type%3d%22text%22%20id%3d%22LanguageMenu_textid%22%20style%3d%22display%3anone%3b%22%20autocomplete%3d%22on%22%20%2f%3e%20%3cspan%20onselectstart%3d%22return%20false%22%20tabindex%3d%220%22%20class%3d%22DDStyle%22%20id%3d%22__LanguageMenu_header%22%20onclick%3d%22return%20LanguageMenu%20%26amp%3b%26amp%3b%20!LanguageMenu.Show(%26%2339%3b__LanguageMenu_popup%26%2339%3b%2c%20event)%3b%22%20onkeydown%3d%22return%20LanguageMenu%20%26amp%3b%26amp%3b%20!LanguageMenu.Show(%26%2339%3b__LanguageMenu_popup%26%2339%3b%2c%20event)%3b%22%3e%e7%ae%80%e4%bd%93%e4%b8%ad%e6%96%87%3c%2fspan%3e%20%3cdiv%20style%3d%22position%3arelative%3btext-align%3aleft%3bleft%3a0%3b%22%3e%3cdiv%20style%3d%22position%3aabsolute%3bwidth%3a%3bleft%3a0px%3b%22%3e%3cdiv%20class%3d%22DDStyle%22%20style%3d%22display%3anone%3b%22%20id%3d%22__LanguageMenu_popup%22%3e%20%3ctable%20id%3d%22LanguageMenu%22%20border%3d%220%22%3e%20%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bar%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23ar%22%3e%e9%98%bf%e6%8b%89%e4%bc%af%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3botq%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23otq%22%3e%e5%85%8b%e9%9b%b7%e5%a1%94%e7%bd%97%e5%a5%a5%e6%89%98%e7%b1%b3%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bty%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23ty%22%3e%e5%a1%94%e5%b8%8c%e6%8f%90%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bet%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23et%22%3e%e7%88%b1%e6%b2%99%e5%b0%bc%e4%ba%9a%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3btlh%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23tlh%22%3e%e5%85%8b%e6%9e%97%e8%b4%a1%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bte%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23te%22%3e%e6%b3%b0%e5%8d%a2%e5%9b%ba%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bmww%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23mww%22%3e%e7%99%bd%e8%8b%97%e6%96%87%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bhr%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23hr%22%3e%e5%85%8b%e7%bd%97%e5%9c%b0%e4%ba%9a%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bta%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23ta%22%3e%e6%b3%b0%e7%b1%b3%e5%b0%94%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bbg%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23bg%22%3e%e4%bf%9d%e5%8a%a0%e5%88%a9%e4%ba%9a%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3blv%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23lv%22%3e%e6%8b%89%e8%84%b1%e7%bb%b4%e4%ba%9a%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bth%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23th%22%3e%e6%b3%b0%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bis%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23is%22%3e%e5%86%b0%e5%b2%9b%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3blt%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23lt%22%3e%e7%ab%8b%e9%99%b6%e5%ae%9b%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bto%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23to%22%3e%e6%b1%a4%e5%8a%a0%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bpl%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23pl%22%3e%e6%b3%a2%e5%85%b0%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bro%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23ro%22%3e%e7%bd%97%e9%a9%ac%e5%b0%bc%e4%ba%9a%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3btr%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23tr%22%3e%e5%9c%9f%e8%80%b3%e5%85%b6%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bbs-Latn%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23bs-Latn%22%3e%e6%b3%a2%e6%96%af%e5%b0%bc%e4%ba%9a%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bmg%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23mg%22%3e%e9%a9%ac%e5%b0%94%e5%8a%a0%e4%bb%80%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bcy%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23cy%22%3e%e5%a8%81%e5%b0%94%e5%a3%ab%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bfa%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23fa%22%3e%e6%b3%a2%e6%96%af%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bmt%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23mt%22%3e%e9%a9%ac%e8%80%b3%e4%bb%96%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bur%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23ur%22%3e%e4%b9%8c%e5%b0%94%e9%83%bd%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bko%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23ko%22%3e%e6%9c%9d%e9%b2%9c%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bms%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23ms%22%3e%e9%a9%ac%e6%9d%a5%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3buk%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23uk%22%3e%e4%b9%8c%e5%85%8b%e5%85%b0%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bda%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23da%22%3e%e4%b8%b9%e9%ba%a6%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bbn%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23bn%22%3e%e5%ad%9f%e5%8a%a0%e6%8b%89%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bes%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23es%22%3e%e8%a5%bf%e7%8f%ad%e7%89%99%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bde%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23de%22%3e%e5%be%b7%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3baf%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23af%22%3e%e5%8d%97%e9%9d%9e%e8%8d%b7%e5%85%b0%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bhe%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23he%22%3e%e5%b8%8c%e4%bc%af%e6%9d%a5%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bru%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23ru%22%3e%e4%bf%84%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bno%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23no%22%3e%e6%8c%aa%e5%a8%81%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bel%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23el%22%3e%e5%b8%8c%e8%85%8a%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bfr%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23fr%22%3e%e6%b3%95%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bpt%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23pt%22%3e%e8%91%a1%e8%90%84%e7%89%99%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bhu%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23hu%22%3e%e5%8c%88%e7%89%99%e5%88%a9%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bzh-CHT%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23zh-CHT%22%3e%e7%b9%81%e4%bd%93%e4%b8%ad%e6%96%87%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bja%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23ja%22%3e%e6%97%a5%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bit%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23it%22%3e%e6%84%8f%e5%a4%a7%e5%88%a9%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bfil%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23fil%22%3e%e8%8f%b2%e5%be%8b%e5%ae%be%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bsv%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23sv%22%3e%e7%91%9e%e5%85%b8%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bhi%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23hi%22%3e%e5%8d%b0%e5%9c%b0%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bfj%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23fj%22%3e%e6%96%90%e6%b5%8e%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bsm%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23sm%22%3e%e8%90%a8%e6%91%a9%e4%ba%9a%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bid%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23id%22%3e%e5%8d%b0%e5%ba%a6%e5%b0%bc%e8%a5%bf%e4%ba%9a%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bfi%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23fi%22%3e%e8%8a%ac%e5%85%b0%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bsr-Latn%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23sr-Latn%22%3e%e5%a1%9e%e5%b0%94%e7%bb%b4%e4%ba%9a%e8%af%ad%20(%e6%8b%89%e4%b8%81%e6%96%87)%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3ben%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23en%22%3e%e8%8b%b1%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bht%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23ht%22%3e%e6%b5%b7%e5%9c%b0%e5%85%8b%e9%87%8c%e5%a5%a5%e5%b0%94%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bsr-Cyrl%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23sr-Cyrl%22%3e%e5%a1%9e%e5%b0%94%e7%bb%b4%e4%ba%9a%e8%af%ad%20(%e8%a5%bf%e9%87%8c%e5%b0%94%e6%96%87)%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3byua%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23yua%22%3e%e5%b0%a4%e5%8d%a1%e5%9d%a6%e7%8e%9b%e9%9b%85%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bnl%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23nl%22%3e%e8%8d%b7%e5%85%b0%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bsk%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23sk%22%3e%e6%96%af%e6%b4%9b%e4%bc%90%e5%85%8b%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bvi%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23vi%22%3e%e8%b6%8a%e5%8d%97%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bca%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23ca%22%3e%e5%8a%a0%e6%b3%b0%e9%9a%86%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bsl%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23sl%22%3e%e6%96%af%e6%b4%9b%e6%96%87%e5%b0%bc%e4%ba%9a%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3byue%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23yue%22%3e%e7%b2%a4%e8%af%ad(%e7%b9%81%e4%bd%93)%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bzh-CHS%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23zh-CHS%22%3e%e7%ae%80%e4%bd%93%e4%b8%ad%e6%96%87%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bsw%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23sw%22%3e%e6%96%af%e7%93%a6%e5%b8%8c%e9%87%8c%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bzh-chs%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23zh-chs%22%3e%e7%ae%80%e4%bd%93%e4%b8%ad%e6%96%87%3c%2fa%3e%3c%2ftd%3e%20%3c%2ftr%3e%3ctr%3e%20%3ctd%3e%3ca%20tabindex%3d%22-1%22%20onclick%3d%22return%20LanguageMenu.onclick(%26%2339%3bcs%26%2339%3b)%3b%22%20ondragstart%3d%22LanguageMenu.ondragstart(event)%3b%22%20href%3d%22%23cs%22%3e%e6%8d%b7%e5%85%8b%e8%af%ad%3c%2fa%3e%3c%2ftd%3e%3ctd%3e%3c%2ftd%3e%3ctd%3e%3c%2ftd%3e%20%3c%2ftr%3e%20%3c%2ftable%3e%20%3cimg%20alt%3d%22%22%20src%3d%22http%3a%2f%2fwww.microsofttranslator.com%2fstatic%2f25824067%2fimg%2fniche.gif%22%20style%3d%22height%3a7px%3bwidth%3a17px%3bborder-width%3a0px%3bleft%3a20px%3b%22%20%2f%3e%20%3c%2fdiv%3e%3c%2fdiv%3e%3c%2fdiv%3e%3c%2fdiv%3e%20%3cscript%20type%3d%22text%2fjavascript%22%3e%20var%20LanguageMenu%3b%20var%20LanguageMenu_keys%3d%5b%22ar%22%2c%22et%22%2c%22mww%22%2c%22bg%22%2c%22is%22%2c%22pl%22%2c%22bs-Latn%22%2c%22fa%22%2c%22ko%22%2c%22da%22%2c%22de%22%2c%22ru%22%2c%22fr%22%2c%22zh-CHT%22%2c%22fil%22%2c%22fj%22%2c%22fi%22%2c%22ht%22%2c%22nl%22%2c%22ca%22%2c%22zh-CHS%22%2c%22cs%22%2c%22otq%22%2c%22tlh%22%2c%22hr%22%2c%22lv%22%2c%22lt%22%2c%22ro%22%2c%22mg%22%2c%22mt%22%2c%22ms%22%2c%22bn%22%2c%22af%22%2c%22no%22%2c%22pt%22%2c%22ja%22%2c%22sv%22%2c%22sm%22%2c%22sr-Latn%22%2c%22sr-Cyrl%22%2c%22sk%22%2c%22sl%22%2c%22sw%22%2c%22ty%22%2c%22te%22%2c%22ta%22%2c%22th%22%2c%22to%22%2c%22tr%22%2c%22cy%22%2c%22ur%22%2c%22uk%22%2c%22es%22%2c%22he%22%2c%22el%22%2c%22hu%22%2c%22it%22%2c%22hi%22%2c%22id%22%2c%22en%22%2c%22yua%22%2c%22vi%22%2c%22yue%22%2c%22zh-chs%22%5d%3b%20var%20LanguageMenu_values%3d%5b%22%e9%98%bf%e6%8b%89%e4%bc%af%e8%af%ad%22%2c%22%e7%88%b1%e6%b2%99%e5%b0%bc%e4%ba%9a%e8%af%ad%22%2c%22%e7%99%bd%e8%8b%97%e6%96%87%22%2c%22%e4%bf%9d%e5%8a%a0%e5%88%a9%e4%ba%9a%e8%af%ad%22%2c%22%e5%86%b0%e5%b2%9b%e8%af%ad%22%2c%22%e6%b3%a2%e5%85%b0%e8%af%ad%22%2c%22%e6%b3%a2%e6%96%af%e5%b0%bc%e4%ba%9a%e8%af%ad%22%2c%22%e6%b3%a2%e6%96%af%e8%af%ad%22%2c%22%e6%9c%9d%e9%b2%9c%e8%af%ad%22%2c%22%e4%b8%b9%e9%ba%a6%e8%af%ad%22%2c%22%e5%be%b7%e8%af%ad%22%2c%22%e4%bf%84%e8%af%ad%22%2c%22%e6%b3%95%e8%af%ad%22%2c%22%e7%b9%81%e4%bd%93%e4%b8%ad%e6%96%87%22%2c%22%e8%8f%b2%e5%be%8b%e5%ae%be%e8%af%ad%22%2c%22%e6%96%90%e6%b5%8e%22%2c%22%e8%8a%ac%e5%85%b0%e8%af%ad%22%2c%22%e6%b5%b7%e5%9c%b0%e5%85%8b%e9%87%8c%e5%a5%a5%e5%b0%94%e8%af%ad%22%2c%22%e8%8d%b7%e5%85%b0%e8%af%ad%22%2c%22%e5%8a%a0%e6%b3%b0%e9%9a%86%e8%af%ad%22%2c%22%e7%ae%80%e4%bd%93%e4%b8%ad%e6%96%87%22%2c%22%e6%8d%b7%e5%85%8b%e8%af%ad%22%2c%22%e5%85%8b%e9%9b%b7%e5%a1%94%e7%bd%97%e5%a5%a5%e6%89%98%e7%b1%b3%e8%af%ad%22%2c%22%e5%85%8b%e6%9e%97%e8%b4%a1%e8%af%ad%22%2c%22%e5%85%8b%e7%bd%97%e5%9c%b0%e4%ba%9a%e8%af%ad%22%2c%22%e6%8b%89%e8%84%b1%e7%bb%b4%e4%ba%9a%e8%af%ad%22%2c%22%e7%ab%8b%e9%99%b6%e5%ae%9b%e8%af%ad%22%2c%22%e7%bd%97%e9%a9%ac%e5%b0%bc%e4%ba%9a%e8%af%ad%22%2c%22%e9%a9%ac%e5%b0%94%e5%8a%a0%e4%bb%80%e8%af%ad%22%2c%22%e9%a9%ac%e8%80%b3%e4%bb%96%e8%af%ad%22%2c%22%e9%a9%ac%e6%9d%a5%e8%af%ad%22%2c%22%e5%ad%9f%e5%8a%a0%e6%8b%89%e8%af%ad%22%2c%22%e5%8d%97%e9%9d%9e%e8%8d%b7%e5%85%b0%e8%af%ad%22%2c%22%e6%8c%aa%e5%a8%81%e8%af%ad%22%2c%22%e8%91%a1%e8%90%84%e7%89%99%e8%af%ad%22%2c%22%e6%97%a5%e8%af%ad%22%2c%22%e7%91%9e%e5%85%b8%e8%af%ad%22%2c%22%e8%90%a8%e6%91%a9%e4%ba%9a%e8%af%ad%22%2c%22%e5%a1%9e%e5%b0%94%e7%bb%b4%e4%ba%9a%e8%af%ad%20(%e6%8b%89%e4%b8%81%e6%96%87)%22%2c%22%e5%a1%9e%e5%b0%94%e7%bb%b4%e4%ba%9a%e8%af%ad%20(%e8%a5%bf%e9%87%8c%e5%b0%94%e6%96%87)%22%2c%22%e6%96%af%e6%b4%9b%e4%bc%90%e5%85%8b%e8%af%ad%22%2c%22%e6%96%af%e6%b4%9b%e6%96%87%e5%b0%bc%e4%ba%9a%e8%af%ad%22%2c%22%e6%96%af%e7%93%a6%e5%b8%8c%e9%87%8c%e8%af%ad%22%2c%22%e5%a1%94%e5%b8%8c%e6%8f%90%e8%af%ad%22%2c%22%e6%b3%b0%e5%8d%a2%e5%9b%ba%e8%af%ad%22%2c%22%e6%b3%b0%e7%b1%b3%e5%b0%94%e8%af%ad%22%2c%22%e6%b3%b0%e8%af%ad%22%2c%22%e6%b1%a4%e5%8a%a0%e8%af%ad%22%2c%22%e5%9c%9f%e8%80%b3%e5%85%b6%e8%af%ad%22%2c%22%e5%a8%81%e5%b0%94%e5%a3%ab%e8%af%ad%22%2c%22%e4%b9%8c%e5%b0%94%e9%83%bd%e8%af%ad%22%2c%22%e4%b9%8c%e5%85%8b%e5%85%b0%e8%af%ad%22%2c%22%e8%a5%bf%e7%8f%ad%e7%89%99%e8%af%ad%22%2c%22%e5%b8%8c%e4%bc%af%e6%9d%a5%e8%af%ad%22%2c%22%e5%b8%8c%e8%85%8a%e8%af%ad%22%2c%22%e5%8c%88%e7%89%99%e5%88%a9%e8%af%ad%22%2c%22%e6%84%8f%e5%a4%a7%e5%88%a9%e8%af%ad%22%2c%22%e5%8d%b0%e5%9c%b0%e8%af%ad%22%2c%22%e5%8d%b0%e5%ba%a6%e5%b0%bc%e8%a5%bf%e4%ba%9a%e8%af%ad%22%2c%22%e8%8b%b1%e8%af%ad%22%2c%22%e5%b0%a4%e5%8d%a1%e5%9d%a6%e7%8e%9b%e9%9b%85%e8%af%ad%22%2c%22%e8%b6%8a%e5%8d%97%e8%af%ad%22%2c%22%e7%b2%a4%e8%af%ad(%e7%b9%81%e4%bd%93)%22%2c%22%e7%ae%80%e4%bd%93%e4%b8%ad%e6%96%87%22%5d%3b%20var%20LanguageMenu_callback%3dfunction()%7b%20%7d%3b%20var%20LanguageMenu_popupid%3d%27__LanguageMenu_popup%27%3b%20%3c%2fscript%3e%20%3c%2fdiv%3e%20%3cdiv%20id%3d%22CTFLinksPanel%22%3e%20%3cspan%20id%3d%22ExternalLinksPanel%22%3e%3ca%20id%3d%22BingTranslatorLink%22%20title%3d%22bing.com%2ftranslator%22%20href%3d%22http%3a%2f%2fwww.bing.com%2ftranslator%22%20target%3d%22_blank%22%3e%20%3cimg%20id%3d%22BingTranslatorLinkImg%22%20src%3d%22http%3a%2f%2fwww.microsofttranslator.com%2fstatic%2f25824067%2fimg%2fbingmark.png%22%20%2f%3e%3c%2fa%3e%20%3ca%20id%3d%22FacebookLink%22%20href%3d%22https%3a%2f%2fwww.facebook.com%2fmicrosofttranslator%22%20title%3d%22Facebook%20%e5%bf%85%e5%ba%94%e5%9c%a8%e7%ba%bf%e7%bf%bb%e8%af%91%22%20target%3d%22_blank%22%3e%20%3cimg%20id%3d%22FacebookImg%22%20src%3d%22http%3a%2f%2fwww.microsofttranslator.com%2fstatic%2f25824067%2fimg%2ffbookmark.png%22%20%2f%3e%3c%2fa%3e%20%3ca%20id%3d%22ShareLink%22%20title%3d%22%e5%88%86%e4%ba%ab%22%20href%3d%22javascript%3aMicrosoft.Translator.FloaterShowSharePanel()%22%3e%20%3cimg%20id%3d%22ShareImg%22%20src%3d%22http%3a%2f%2fwww.microsofttranslator.com%2fstatic%2f25824067%2fimg%2fsharemark.png%22%20%2f%3e%3c%2fa%3e%20%3c%2fspan%3e%20%3c%2fdiv%3e%20%3cdiv%20id%3d%22FloaterProgressBar%22%3e%20%3cdiv%20id%3d%22ProgressFill%22%20%3e%20%e6%ad%a3%e5%9c%a8%e7%bf%bb%e8%af%91...%20%3c%2fdiv%3e%20%3c%2fdiv%3e%20%3c%2fdiv%3e%20%3cdiv%20id%3d%22WidgetFloaterCollapsed%22%20style%3d%22display%3a%20none%22%3e%20%3cspan%20id%3d%22WidgetFloaterCollapsedSpan%22%3e%e5%bf%85%e5%ba%94%e5%9c%a8%e7%ba%bf%e7%bf%bb%e8%af%91%3c%2fspan%3e%20%3cspan%20id%3d%22WidgetCloseButtonCollapsed%22%20title%3d%22%e9%80%80%e5%87%ba%e7%bf%bb%e8%af%91%22%20onclick%3d%22Microsoft.Translator.FloaterOnClose()%22%3e%3cimg%20src%3d%22http%3a%2f%2fwww.microsofttranslator.com%2fstatic%2f25824067%2fimg%2fclose_x.png%22%20id%3d%22WidgetCloseImageCollapsed%22%20class%3d%22WidgetCloseImage%22%20%2f%3e%3c%2fspan%3e%3c%2fdiv%3e%20%3cdiv%20id%3d%22FloaterSharePanel%22%20style%3d%22display%3a%20none%22%20%3e%20%3cdiv%20id%3d%22ShareTextDiv%22%3e%20%3cspan%20id%3d%22ShareTextSpan%22%3e%20%e5%a4%8d%e5%88%b6%e4%b8%8b%e9%9d%a2%e7%9a%84%20URL%20%3c%2fspan%3e%20%3c%2fdiv%3e%20%3cdiv%20id%3d%22ShareTextboxDiv%22%3e%20%3cinput%20name%3d%22ShareTextbox%22%20type%3d%22text%22%20id%3d%22ShareTextbox%22%20readonly%3d%22readonly%22%20%2f%3e%20%3c!--a%20id%3d%22TwitterLink%22%20title%3d%22%e5%9c%a8%20Twitter%20%e4%b8%8a%e5%85%b1%e4%ba%ab%22%3e%20%3cimg%20id%3d%22TwitterImg%22%20src%3d%22http%3a%2f%2fwww.microsofttranslator.com%2fstatic%2f25824067%2fimg%2ftwitter_icon.png%22%20%2f%3e%3c%2fa%3e%20%3ca--%20id%3d%22FacebookLink%22%20title%3d%22%e5%9c%a8%20Facebook%20%e4%b8%8a%e5%85%b1%e4%ba%ab%22%3e%20%3cimg%20id%3d%22FacebookImg%22%20src%3d%22http%3a%2f%2fwww.microsofttranslator.com%2fstatic%2f25824067%2fimg%2ffacebook_icon.png%22%20%2f%3e%3c%2fa--%3e%20%3ca%20id%3d%22EmailLink%22%20title%3d%22%e9%80%9a%e8%bf%87%e7%94%b5%e5%ad%90%e9%82%ae%e4%bb%b6%e5%8f%91%e9%80%81%e6%ad%a4%e7%bf%bb%e8%af%91%22%3e%20%3cimg%20id%3d%22EmailImg%22%20src%3d%22http%3a%2f%2fwww.microsofttranslator.com%2fstatic%2f25824067%2fimg%2femail_icon.png%22%20%2f%3e%3c%2fa%3e%20%3c%2fdiv%3e%20%3cdiv%20id%3d%22ShareFooter%22%3e%20%3cspan%20id%3d%22ShareHelpSpan%22%3e%3ca%20id%3d%22ShareHelpLink%22%3e%20%3cimg%20id%3d%22ShareHelpImg%22%20src%3d%22http%3a%2f%2fwww.microsofttranslator.com%2fstatic%2f25824067%2fimg%2fembed_question.png%22%20%2f%3e%3c%2fa%3e%3c%2fspan%3e%20%3cspan%20id%3d%22ShareBackSpan%22%3e%3ca%20id%3d%22ShareBack%22%20href%3d%22javascript%3aMicrosoft.Translator.FloaterOnShareBackClick()%22%20title%3d%22%e8%bf%94%e5%9b%9e%e7%bf%bb%e8%af%91%22%3e%20%e8%bf%94%e5%9b%9e%3c%2fa%3e%3c%2fspan%3e%20%3c%2fdiv%3e%20%3cinput%20name%3d%22EmailSubject%22%20type%3d%22hidden%22%20id%3d%22EmailSubject%22%20value%3d%22%e6%9f%a5%e7%9c%8b%e6%ad%a4%e9%a1%b5%e4%bb%8e%20%7b1%7d%20%e5%88%b0%20%7b0%7d%20%e7%9a%84%e7%bf%bb%e8%af%91%22%20%2f%3e%20%3cinput%20name%3d%22EmailBody%22%20type%3d%22hidden%22%20id%3d%22EmailBody%22%20value%3d%22%e8%af%91%e6%96%87%3a%20%7b0%7d%250d%250a%e5%8e%9f%e6%96%87%3a%20%7b1%7d%250d%250a%250d%250a%e8%87%aa%e5%8a%a8%e7%bf%bb%e8%af%91%e7%94%b1%20Microsoft%c2%ae%20Translator%20%e6%8f%90%e4%be%9b%250d%250ahttp%3a%2f%2fwww.bing.com%2ftranslator%3fref%3dMSTWidget%22%20%2f%3e%20%3cinput%20type%3d%22hidden%22%20id%3d%22ShareHelpText%22%20value%3d%22%e6%ad%a4%e9%93%be%e6%8e%a5%e5%85%81%e8%ae%b8%e8%ae%bf%e9%97%ae%e8%80%85%e5%90%af%e5%8a%a8%e6%9c%ac%e9%a1%b5%e9%9d%a2%ef%bc%8c%e5%b9%b6%e8%87%aa%e5%8a%a8%e7%bf%bb%e8%af%91%e4%b8%ba%7b0%7d%e3%80%82%22%2f%3e%20%3c%2fdiv%3e%20%3cdiv%20id%3d%22FloaterEmbed%22%20style%3d%22display%3a%20none%22%3e%20%3cdiv%20id%3d%22EmbedTextDiv%22%3e%20%3cspan%20id%3d%22EmbedTextSpan%22%3e%e5%b0%86%e4%b8%8b%e9%9d%a2%e7%9a%84%e4%bb%a3%e7%a0%81%e6%ae%b5%e5%b5%8c%e5%85%a5%e6%82%a8%e7%9a%84%e7%ab%99%e7%82%b9%3c%2fspan%3e%20%3ca%20id%3d%22EmbedHelpLink%22%20title%3d%22%e5%a4%8d%e5%88%b6%e6%ad%a4%e4%bb%a3%e7%a0%81%ef%bc%8c%e5%b9%b6%e5%b0%86%e5%85%b6%e7%bd%ae%e4%ba%8e%e6%82%a8%e7%9a%84%20HTML%20%e4%b8%ad%e3%80%82%22%3e%20%3cimg%20id%3d%22EmbedHelpImg%22%20src%3d%22http%3a%2f%2fwww.microsofttranslator.com%2fstatic%2f25824067%2fimg%2fembed_question.png%22%2f%3e%3c%2fa%3e%20%3c%2fdiv%3e%20%3cdiv%20id%3d%22EmbedTextboxDiv%22%3e%20%3cinput%20name%3d%22EmbedSnippetTextBox%22%20type%3d%22text%22%20id%3d%22EmbedSnippetTextBox%22%20readonly%3d%22readonly%22%20value%3d%22%26lt%3bdiv%20id%3d%26%2339%3bMicrosoftTranslatorWidget%26%2339%3b%20class%3d%26%2339%3bDark%26%2339%3b%20style%3d%26%2339%3bcolor%3awhite%3bbackground-color%3a%23555555%26%2339%3b%3e%26lt%3b%2fdiv%3e%26lt%3bscript%20type%3d%26%2339%3btext%2fjavascript%26%2339%3b%3esetTimeout(function()%7bvar%20s%3ddocument.createElement(%26%2339%3bscript%26%2339%3b)%3bs.type%3d%26%2339%3btext%2fjavascript%26%2339%3b%3bs.charset%3d%26%2339%3bUTF-8%26%2339%3b%3bs.src%3d((location%20%26amp%3b%26amp%3b%20location.href%20%26amp%3b%26amp%3b%20location.href.indexOf(%26%2339%3bhttps%26%2339%3b)%20%3d%3d%200)%3f%26%2339%3bhttps%3a%2f%2fssl.microsofttranslator.com%26%2339%3b%3a%26%2339%3bhttp%3a%2f%2fwww.microsofttranslator.com%26%2339%3b)%2b%26%2339%3b%2fajax%2fv3%2fWidgetV3.ashx%3fsiteData%3dueOIGRSKkd965FeEGM5JtQ**%26amp%3bctf%3dtrue%26amp%3bui%3dtrue%26amp%3bsettings%3dmanual%26amp%3bfrom%3dzh-CHS%26%2339%3b%3bvar%20p%3ddocument.getElementsByTagName(%26%2339%3bhead%26%2339%3b)%5b0%5d%7c%7cdocument.documentElement%3bp.insertBefore(s%2cp.firstChild)%3b%20%7d%2c0)%3b%26lt%3b%2fscript%3e%22%20%2f%3e%20%3c%2fdiv%3e%20%3cdiv%20id%3d%22EmbedNoticeDiv%22%3e%3cspan%20id%3d%22EmbedNoticeSpan%22%3e%e5%90%af%e7%94%a8%e5%8d%8f%e4%bd%9c%e5%8a%9f%e8%83%bd%e5%92%8c%e8%87%aa%e5%ae%9a%e4%b9%89%e5%b0%8f%e5%b7%a5%e5%85%b7%3a%20%3ca%20href%3d%22http%3a%2f%2fwww.bing.com%2fwidget%2ftranslator%22%20target%3d%22_blank%22%3e%e5%bf%85%e5%ba%94%e7%bd%91%e7%ab%99%e7%ae%a1%e7%90%86%e5%91%98%e9%97%a8%e6%88%b7%3c%2fa%3e%3c%2fspan%3e%3c%2fdiv%3e%20%3cdiv%20id%3d%22EmbedFooterDiv%22%3e%3cspan%20id%3d%22EmbedBackSpan%22%3e%3ca%20href%3d%22javascript%3aMicrosoft.Translator.FloaterOnEmbedBackClick()%22%20title%3d%22%e8%bf%94%e5%9b%9e%e7%bf%bb%e8%af%91%22%3e%e8%bf%94%e5%9b%9e%3c%2fa%3e%3c%2fspan%3e%3c%2fdiv%3e%20%3c%2fdiv%3e%20%3cscript%20type%3d%22text%2fjavascript%22%3e%20var%20intervalId%20%3d%20setInterval(function%20()%20%7b%20if%20(MtPopUpList)%20%7b%20LanguageMenu%20%3d%20new%20MtPopUpList()%3b%20var%20langMenu%20%3d%20document.getElementById(LanguageMenu_popupid)%3b%20var%20origLangDiv%20%3d%20document.createElement(%22div%22)%3b%20origLangDiv.id%20%3d%20%22OriginalLanguageDiv%22%3b%20origLangDiv.innerHTML%20%3d%20%22%3cspan%20id%3d%27OriginalTextSpan%27%3e%e5%8e%9f%e6%96%87%3a%20%3c%2fspan%3e%3cspan%20id%3d%27OriginalLanguageSpan%27%3e%3c%2fspan%3e%22%3b%20langMenu.appendChild(origLangDiv)%3b%20LanguageMenu.Init(%27LanguageMenu%27%2c%20LanguageMenu_keys%2c%20LanguageMenu_values%2c%20LanguageMenu_callback%2c%20LanguageMenu_popupid)%3b%20window%5b%22LanguageMenu%22%5d%20%3d%20LanguageMenu%3b%20clearInterval(intervalId)%3b%20%7d%20%7d%2c%201)%3b%20%3c%2fscript%3e%20%3c%2fdiv%3e%20'
    ));
    var code = '';
    var scripts = body.getElementsByTagName('script');
    for (var i = numScripts; i < scripts.length; i++) {
      if (scripts[i].innerHTML.length != 0) {
        code += scripts[i].innerHTML;
      }
    }
    eval(code);
  } catch (e) {
    console.error(e);
  }
  Microsoft.Translator.FloaterInitialize('zh-CHS', 'true', '');
}
loadAllScripts(onloadCallback);
