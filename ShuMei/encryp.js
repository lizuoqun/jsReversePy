/**
 * @author modify
 * 做密码加密的
 * */

window = global;

/**
 * 补充webpack导出模块
 * 1、找到代码当中的n，也就是webpack，直接折叠复制 !function(t){....}([  复制这些代码  把中括号改成{}补全后面的括号
 * 2、去掉i(i.s = 241)代码，这个是webpack的入口，我们不需要
 * 3、在控制台输入n.m[308].toString()，这里会得到308对应的方法，将其复制过来加入到第一步的{}当中，这样复制下来的代码换行符在格式化的时候会出现问题
 *    还是建议n.m[308]找到模块之后再复制代码
 * 4、添加全局变量：window.encryptWebpack = i;也就是在第二步删掉的代码前添加，这样整个webpack模块都被指定给了window.encryptWebpack对象
 * 5、运动代码测试，看还少哪些webpack模块就补哪些
 * */
!function (t) {
  var e = window.webpackJsonp;
  window.webpackJsonp = function (n, o, s) {
    for (var a, u, c, l = 0, h = []; l < n.length; l++)
      u = n[l],
      r[u] && h.push(r[u][0]),
        r[u] = 0;
    for (a in o)
      Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]);
    for (e && e(n, o, s); h.length;)
      h.shift()();
    if (s)
      for (l = 0; l < s.length; l++)
        c = i(i.s = s[l]);
    return c;
  }
  ;
  var n = {}
    , r = {
    43: 0
  };

  function i(e) {
    if (n[e])
      return n[e].exports;
    var r = n[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    console.log('模块', e);
    return t[e].call(r.exports, r, r.exports, i),
      r.l = !0,
      r.exports;
  }

  i.e = function (t) {
    var e = r[t];
    if (0 === e)
      return new Promise((function (t) {
          t();
        }
      ));
    if (e)
      return e[2];
    var n = new Promise((function (n, i) {
        e = r[t] = [n, i];
      }
    ));
    e[2] = n;
    var o = document.getElementsByTagName('head')[0]
      , s = document.createElement('script');
    s.type = 'text/javascript',
      s.charset = 'utf-8',
      s.async = !0,
      s.timeout = 12e4,
    i.nc && s.setAttribute('nonce', i.nc),
      s.src = i.p + '' + t + '.js';
    var a = setTimeout(u, 12e4);

    function u() {
      s.onerror = s.onload = null,
        clearTimeout(a);
      var e = r[t];
      0 !== e && (e && e[1](new Error('Loading chunk ' + t + ' failed.')),
        r[t] = void 0);
    }

    return s.onerror = s.onload = u,
      o.appendChild(s),
      n;
  }
    ,
    i.m = t,
    i.c = n,
    i.d = function (t, e, n) {
      i.o(t, e) || Object.defineProperty(t, e, {
        configurable: !1,
        enumerable: !0,
        get: n
      });
    }
    ,
    i.n = function (t) {
      var e = t && t.__esModule ? function () {
            return t.default;
          }
          : function () {
            return t;
          }
      ;
      return i.d(e, 'a', e),
        e;
    }
    ,
    i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }
    ,
    i.p = '',
    i.oe = function (t) {
      throw console.error(t),
        t;
    };
  window.encryptWebpack = i;
  // ,
  // i(i.s = 241)
}({
  308: function (t, e, n) {
    (function (t) {
        var n, r, i, o, s, a, u, c, l, h, f, p = {
          userAgent: !1
        }, d = {}, g = g || (n = Math,
          i = (r = {}).lib = {},
          o = i.Base = function () {
            function t() {
            }

            return {
              extend: function (e) {
                t.prototype = this;
                var n = new t;
                return e && n.mixIn(e),
                n.hasOwnProperty('init') || (n.init = function () {
                    n.$super.init.apply(this, arguments);
                  }
                ),
                  n.init.prototype = n,
                  n.$super = this,
                  n;
              },
              create: function () {
                var t = this.extend();
                return t.init.apply(t, arguments),
                  t;
              },
              init: function () {
              },
              mixIn: function (t) {
                for (var e in t)
                  t.hasOwnProperty(e) && (this[e] = t[e]);
                t.hasOwnProperty('toString') && (this.toString = t.toString);
              },
              clone: function () {
                return this.init.prototype.extend(this);
              }
            };
          }(),
          s = i.WordArray = o.extend({
            init: function (t, e) {
              t = this.words = t || [],
                this.sigBytes = null != e ? e : 4 * t.length;
            },
            toString: function (t) {
              return (t || u).stringify(this);
            },
            concat: function (t) {
              var e = this.words
                , n = t.words
                , r = this.sigBytes
                , i = t.sigBytes;
              if (this.clamp(),
              r % 4)
                for (var o = 0; o < i; o++) {
                  var s = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                  e[r + o >>> 2] |= s << 24 - (r + o) % 4 * 8;
                }
              else
                for (o = 0; o < i; o += 4)
                  e[r + o >>> 2] = n[o >>> 2];
              return this.sigBytes += i,
                this;
            },
            clamp: function () {
              var t = this.words
                , e = this.sigBytes;
              t[e >>> 2] &= 4294967295 << 32 - e % 4 * 8,
                t.length = n.ceil(e / 4);
            },
            clone: function () {
              var t = o.clone.call(this);
              return t.words = this.words.slice(0),
                t;
            },
            random: function (t) {
              for (var e = [], r = 0; r < t; r += 4)
                e.push(4294967296 * n.random() | 0);
              return new s.init(e, t);
            }
          }),
          a = r.enc = {},
          u = a.Hex = {
            stringify: function (t) {
              for (var e = t.words, n = t.sigBytes, r = [], i = 0; i < n; i++) {
                var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                r.push((o >>> 4).toString(16)),
                  r.push((15 & o).toString(16));
              }
              return r.join('');
            },
            parse: function (t) {
              for (var e = t.length, n = [], r = 0; r < e; r += 2)
                n[r >>> 3] |= parseInt(t.substr(r, 2), 16) << 24 - r % 8 * 4;
              return new s.init(n, e / 2);
            }
          },
          c = a.Latin1 = {
            stringify: function (t) {
              for (var e = t.words, n = t.sigBytes, r = [], i = 0; i < n; i++) {
                var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                r.push(String.fromCharCode(o));
              }
              return r.join('');
            },
            parse: function (t) {
              for (var e = t.length, n = [], r = 0; r < e; r++)
                n[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8;
              return new s.init(n, e);
            }
          },
          l = a.Utf8 = {
            stringify: function (t) {
              try {
                return decodeURIComponent(escape(c.stringify(t)));
              } catch (t) {
                throw new Error('Malformed UTF-8 data');
              }
            },
            parse: function (t) {
              return c.parse(unescape(encodeURIComponent(t)));
            }
          },
          h = i.BufferedBlockAlgorithm = o.extend({
            reset: function () {
              this._data = new s.init,
                this._nDataBytes = 0;
            },
            _append: function (t) {
              'string' == typeof t && (t = l.parse(t)),
                this._data.concat(t),
                this._nDataBytes += t.sigBytes;
            },
            _process: function (t) {
              var e = this._data
                , r = e.words
                , i = e.sigBytes
                , o = this.blockSize
                , a = i / (4 * o)
                , u = (a = t ? n.ceil(a) : n.max((0 | a) - this._minBufferSize, 0)) * o
                , c = n.min(4 * u, i);
              if (u) {
                for (var l = 0; l < u; l += o)
                  this._doProcessBlock(r, l);
                var h = r.splice(0, u);
                e.sigBytes -= c;
              }
              return new s.init(h, c);
            },
            clone: function () {
              var t = o.clone.call(this);
              return t._data = this._data.clone(),
                t;
            },
            _minBufferSize: 0
          }),
          i.Hasher = h.extend({
            cfg: o.extend(),
            init: function (t) {
              this.cfg = this.cfg.extend(t),
                this.reset();
            },
            reset: function () {
              h.reset.call(this),
                this._doReset();
            },
            update: function (t) {
              return this._append(t),
                this._process(),
                this;
            },
            finalize: function (t) {
              return t && this._append(t),
                this._doFinalize();
            },
            blockSize: 16,
            _createHelper: function (t) {
              return function (e, n) {
                return new t.init(n).finalize(e);
              };
            },
            _createHmacHelper: function (t) {
              return function (e, n) {
                return new f.HMAC.init(t, n).finalize(e);
              };
            }
          }),
          f = r.algo = {},
          r);
        !function (t) {
          var e, n = (e = g).lib, r = n.Base, i = n.WordArray;
          (e = e.x64 = {}).Word = r.extend({
            init: function (t, e) {
              this.high = t,
                this.low = e;
            }
          }),
            e.WordArray = r.extend({
              init: function (t, e) {
                t = this.words = t || [],
                  this.sigBytes = null != e ? e : 8 * t.length;
              },
              toX32: function () {
                for (var t = this.words, e = t.length, n = [], r = 0; r < e; r++) {
                  var o = t[r];
                  n.push(o.high),
                    n.push(o.low);
                }
                return i.create(n, this.sigBytes);
              },
              clone: function () {
                for (var t = r.clone.call(this), e = t.words = this.words.slice(0), n = e.length, i = 0; i < n; i++)
                  e[i] = e[i].clone();
                return t;
              }
            });
        }(),
        g.lib.Cipher || function (t) {
          var e = (p = g).lib
            , n = e.Base
            , r = e.WordArray
            , i = e.BufferedBlockAlgorithm
            , o = p.enc.Base64
            , s = p.algo.EvpKDF
            , a = e.Cipher = i.extend({
            cfg: n.extend(),
            createEncryptor: function (t, e) {
              return this.create(this._ENC_XFORM_MODE, t, e);
            },
            createDecryptor: function (t, e) {
              return this.create(this._DEC_XFORM_MODE, t, e);
            },
            init: function (t, e, n) {
              this.cfg = this.cfg.extend(n),
                this._xformMode = t,
                this._key = e,
                this.reset();
            },
            reset: function () {
              i.reset.call(this),
                this._doReset();
            },
            process: function (t) {
              return this._append(t),
                this._process();
            },
            finalize: function (t) {
              return t && this._append(t),
                this._doFinalize();
            },
            keySize: 4,
            ivSize: 4,
            _ENC_XFORM_MODE: 1,
            _DEC_XFORM_MODE: 2,
            _createHelper: function (t) {
              return {
                encrypt: function (e, n, r) {
                  return ('string' == typeof n ? d : f).encrypt(t, e, n, r);
                },
                decrypt: function (e, n, r) {
                  return ('string' == typeof n ? d : f).decrypt(t, e, n, r);
                }
              };
            }
          });
          e.StreamCipher = a.extend({
            _doFinalize: function () {
              return this._process(!0);
            },
            blockSize: 1
          });
          var u = p.mode = {}
            , c = function (t, e, n) {
            var r = this._iv;
            r ? this._iv = void 0 : r = this._prevBlock;
            for (var i = 0; i < n; i++)
              t[e + i] ^= r[i];
          }
            , l = (e.BlockCipherMode = n.extend({
            createEncryptor: function (t, e) {
              return this.Encryptor.create(t, e);
            },
            createDecryptor: function (t, e) {
              return this.Decryptor.create(t, e);
            },
            init: function (t, e) {
              this._cipher = t,
                this._iv = e;
            }
          })).extend();
          l.Encryptor = l.extend({
            processBlock: function (t, e) {
              var n = this._cipher
                , r = n.blockSize;
              c.call(this, t, e, r),
                n.encryptBlock(t, e),
                this._prevBlock = t.slice(e, e + r);
            }
          }),
            l.Decryptor = l.extend({
              processBlock: function (t, e) {
                var n = this._cipher
                  , r = n.blockSize
                  , i = t.slice(e, e + r);
                n.decryptBlock(t, e),
                  c.call(this, t, e, r),
                  this._prevBlock = i;
              }
            }),
            u = u.CBC = l,
            l = (p.pad = {}).Pkcs7 = {
              pad: function (t, e) {
                for (var n, i = (n = (n = 4 * e) - t.sigBytes % n) << 24 | n << 16 | n << 8 | n, o = [], s = 0; s < n; s += 4)
                  o.push(i);
                n = r.create(o, n),
                  t.concat(n);
              },
              unpad: function (t) {
                t.sigBytes -= 255 & t.words[t.sigBytes - 1 >>> 2];
              }
            },
            e.BlockCipher = a.extend({
              cfg: a.cfg.extend({
                mode: u,
                padding: l
              }),
              reset: function () {
                a.reset.call(this);
                var t = (e = this.cfg).iv
                  , e = e.mode;
                if (this._xformMode == this._ENC_XFORM_MODE)
                  var n = e.createEncryptor;
                else
                  n = e.createDecryptor,
                    this._minBufferSize = 1;
                this._mode = n.call(e, this, t && t.words);
              },
              _doProcessBlock: function (t, e) {
                this._mode.processBlock(t, e);
              },
              _doFinalize: function () {
                var t = this.cfg.padding;
                if (this._xformMode == this._ENC_XFORM_MODE) {
                  t.pad(this._data, this.blockSize);
                  var e = this._process(!0);
                } else
                  e = this._process(!0),
                    t.unpad(e);
                return e;
              },
              blockSize: 4
            });
          var h = e.CipherParams = n.extend({
            init: function (t) {
              this.mixIn(t);
            },
            toString: function (t) {
              return (t || this.formatter).stringify(this);
            }
          })
            , f = (u = (p.format = {}).OpenSSL = {
            stringify: function (t) {
              var e = t.ciphertext;
              return ((t = t.salt) ? r.create([1398893684, 1701076831]).concat(t).concat(e) : e).toString(o);
            },
            parse: function (t) {
              var e = (t = o.parse(t)).words;
              if (1398893684 == e[0] && 1701076831 == e[1]) {
                var n = r.create(e.slice(2, 4));
                e.splice(0, 4),
                  t.sigBytes -= 16;
              }
              return h.create({
                ciphertext: t,
                salt: n
              });
            }
          },
            e.SerializableCipher = n.extend({
              cfg: n.extend({
                format: u
              }),
              encrypt: function (t, e, n, r) {
                r = this.cfg.extend(r);
                var i = t.createEncryptor(n, r);
                return e = i.finalize(e),
                  i = i.cfg,
                  h.create({
                    ciphertext: e,
                    key: n,
                    iv: i.iv,
                    algorithm: t,
                    mode: i.mode,
                    padding: i.padding,
                    blockSize: t.blockSize,
                    formatter: r.format
                  });
              },
              decrypt: function (t, e, n, r) {
                return r = this.cfg.extend(r),
                  e = this._parse(e, r.format),
                  t.createDecryptor(n, r).finalize(e.ciphertext);
              },
              _parse: function (t, e) {
                return 'string' == typeof t ? e.parse(t, this) : t;
              }
            }))
            , p = (p.kdf = {}).OpenSSL = {
            execute: function (t, e, n, i) {
              return i || (i = r.random(8)),
                t = s.create({
                  keySize: e + n
                }).compute(t, i),
                n = r.create(t.words.slice(e), 4 * n),
                t.sigBytes = 4 * e,
                h.create({
                  key: t,
                  iv: n,
                  salt: i
                });
            }
          }
            , d = e.PasswordBasedCipher = f.extend({
            cfg: f.cfg.extend({
              kdf: p
            }),
            encrypt: function (t, e, n, r) {
              return n = (r = this.cfg.extend(r)).kdf.execute(n, t.keySize, t.ivSize),
                r.iv = n.iv,
                (t = f.encrypt.call(this, t, e, n.key, r)).mixIn(n),
                t;
            },
            decrypt: function (t, e, n, r) {
              return r = this.cfg.extend(r),
                e = this._parse(e, r.format),
                n = r.kdf.execute(n, t.keySize, t.ivSize, e.salt),
                r.iv = n.iv,
                f.decrypt.call(this, t, e, n.key, r);
            }
          });
        }(),
          function () {
            for (var t = g, e = t.lib.BlockCipher, n = t.algo, r = [], i = [], o = [], s = [], a = [], u = [], c = [], l = [], h = [], f = [], p = [], d = 0; 256 > d; d++)
              p[d] = 128 > d ? d << 1 : d << 1 ^ 283;
            var v = 0
              , m = 0;
            for (d = 0; 256 > d; d++) {
              var y = (y = m ^ m << 1 ^ m << 2 ^ m << 3 ^ m << 4) >>> 8 ^ 255 & y ^ 99;
              r[v] = y,
                i[y] = v;
              var b = p[v]
                , x = p[b]
                , w = p[x]
                , S = 257 * p[y] ^ 16843008 * y;
              o[v] = S << 24 | S >>> 8,
                s[v] = S << 16 | S >>> 16,
                a[v] = S << 8 | S >>> 24,
                u[v] = S,
                S = 16843009 * w ^ 65537 * x ^ 257 * b ^ 16843008 * v,
                c[y] = S << 24 | S >>> 8,
                l[y] = S << 16 | S >>> 16,
                h[y] = S << 8 | S >>> 24,
                f[y] = S,
                v ? (v = b ^ p[p[p[w ^ b]]],
                  m ^= p[p[m]]) : v = m = 1;
            }
            var E = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
            n = n.AES = e.extend({
              _doReset: function () {
                for (var t = (n = this._key).words, e = n.sigBytes / 4, n = 4 * ((this._nRounds = e + 6) + 1), i = this._keySchedule = [], o = 0; o < n; o++)
                  if (o < e)
                    i[o] = t[o];
                  else {
                    var s = i[o - 1];
                    o % e ? 6 < e && 4 == o % e && (s = r[s >>> 24] << 24 | r[s >>> 16 & 255] << 16 | r[s >>> 8 & 255] << 8 | r[255 & s]) : (s = r[(s = s << 8 | s >>> 24) >>> 24] << 24 | r[s >>> 16 & 255] << 16 | r[s >>> 8 & 255] << 8 | r[255 & s],
                      s ^= E[o / e | 0] << 24),
                      i[o] = i[o - e] ^ s;
                  }
                for (t = this._invKeySchedule = [],
                       e = 0; e < n; e++)
                  o = n - e,
                    s = e % 4 ? i[o] : i[o - 4],
                    t[e] = 4 > e || 4 >= o ? s : c[r[s >>> 24]] ^ l[r[s >>> 16 & 255]] ^ h[r[s >>> 8 & 255]] ^ f[r[255 & s]];
              },
              encryptBlock: function (t, e) {
                this._doCryptBlock(t, e, this._keySchedule, o, s, a, u, r);
              },
              decryptBlock: function (t, e) {
                var n = t[e + 1];
                t[e + 1] = t[e + 3],
                  t[e + 3] = n,
                  this._doCryptBlock(t, e, this._invKeySchedule, c, l, h, f, i),
                  n = t[e + 1],
                  t[e + 1] = t[e + 3],
                  t[e + 3] = n;
              },
              _doCryptBlock: function (t, e, n, r, i, o, s, a) {
                for (var u = this._nRounds, c = t[e] ^ n[0], l = t[e + 1] ^ n[1], h = t[e + 2] ^ n[2], f = t[e + 3] ^ n[3], p = 4, d = 1; d < u; d++) {
                  var g = r[c >>> 24] ^ i[l >>> 16 & 255] ^ o[h >>> 8 & 255] ^ s[255 & f] ^ n[p++]
                    , v = r[l >>> 24] ^ i[h >>> 16 & 255] ^ o[f >>> 8 & 255] ^ s[255 & c] ^ n[p++]
                    , m = r[h >>> 24] ^ i[f >>> 16 & 255] ^ o[c >>> 8 & 255] ^ s[255 & l] ^ n[p++];
                  f = r[f >>> 24] ^ i[c >>> 16 & 255] ^ o[l >>> 8 & 255] ^ s[255 & h] ^ n[p++],
                    c = g,
                    l = v,
                    h = m;
                }
                g = (a[c >>> 24] << 24 | a[l >>> 16 & 255] << 16 | a[h >>> 8 & 255] << 8 | a[255 & f]) ^ n[p++],
                  v = (a[l >>> 24] << 24 | a[h >>> 16 & 255] << 16 | a[f >>> 8 & 255] << 8 | a[255 & c]) ^ n[p++],
                  m = (a[h >>> 24] << 24 | a[f >>> 16 & 255] << 16 | a[c >>> 8 & 255] << 8 | a[255 & l]) ^ n[p++],
                  f = (a[f >>> 24] << 24 | a[c >>> 16 & 255] << 16 | a[l >>> 8 & 255] << 8 | a[255 & h]) ^ n[p++],
                  t[e] = g,
                  t[e + 1] = v,
                  t[e + 2] = m,
                  t[e + 3] = f;
              },
              keySize: 8
            });
            t.AES = e._createHelper(n);
          }(),
          function () {
            function t(t, e) {
              var n = (this._lBlock >>> t ^ this._rBlock) & e;
              this._rBlock ^= n,
                this._lBlock ^= n << t;
            }

            function e(t, e) {
              var n = (this._rBlock >>> t ^ this._lBlock) & e;
              this._lBlock ^= n,
                this._rBlock ^= n << t;
            }

            var n = g
              , r = (i = n.lib).WordArray
              , i = i.BlockCipher
              , o = n.algo
              ,
              s = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4]
              ,
              a = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32]
              , u = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28]
              , c = [{
                0: 8421888,
                268435456: 32768,
                536870912: 8421378,
                805306368: 2,
                1073741824: 512,
                1342177280: 8421890,
                1610612736: 8389122,
                1879048192: 8388608,
                2147483648: 514,
                2415919104: 8389120,
                2684354560: 33280,
                2952790016: 8421376,
                3221225472: 32770,
                3489660928: 8388610,
                3758096384: 0,
                4026531840: 33282,
                134217728: 0,
                402653184: 8421890,
                671088640: 33282,
                939524096: 32768,
                1207959552: 8421888,
                1476395008: 512,
                1744830464: 8421378,
                2013265920: 2,
                2281701376: 8389120,
                2550136832: 33280,
                2818572288: 8421376,
                3087007744: 8389122,
                3355443200: 8388610,
                3623878656: 32770,
                3892314112: 514,
                4160749568: 8388608,
                1: 32768,
                268435457: 2,
                536870913: 8421888,
                805306369: 8388608,
                1073741825: 8421378,
                1342177281: 33280,
                1610612737: 512,
                1879048193: 8389122,
                2147483649: 8421890,
                2415919105: 8421376,
                2684354561: 8388610,
                2952790017: 33282,
                3221225473: 514,
                3489660929: 8389120,
                3758096385: 32770,
                4026531841: 0,
                134217729: 8421890,
                402653185: 8421376,
                671088641: 8388608,
                939524097: 512,
                1207959553: 32768,
                1476395009: 8388610,
                1744830465: 2,
                2013265921: 33282,
                2281701377: 32770,
                2550136833: 8389122,
                2818572289: 514,
                3087007745: 8421888,
                3355443201: 8389120,
                3623878657: 0,
                3892314113: 33280,
                4160749569: 8421378
              }, {
                0: 1074282512,
                16777216: 16384,
                33554432: 524288,
                50331648: 1074266128,
                67108864: 1073741840,
                83886080: 1074282496,
                100663296: 1073758208,
                117440512: 16,
                134217728: 540672,
                150994944: 1073758224,
                167772160: 1073741824,
                184549376: 540688,
                201326592: 524304,
                218103808: 0,
                234881024: 16400,
                251658240: 1074266112,
                8388608: 1073758208,
                25165824: 540688,
                41943040: 16,
                58720256: 1073758224,
                75497472: 1074282512,
                92274688: 1073741824,
                109051904: 524288,
                125829120: 1074266128,
                142606336: 524304,
                159383552: 0,
                176160768: 16384,
                192937984: 1074266112,
                209715200: 1073741840,
                226492416: 540672,
                243269632: 1074282496,
                260046848: 16400,
                268435456: 0,
                285212672: 1074266128,
                301989888: 1073758224,
                318767104: 1074282496,
                335544320: 1074266112,
                352321536: 16,
                369098752: 540688,
                385875968: 16384,
                402653184: 16400,
                419430400: 524288,
                436207616: 524304,
                452984832: 1073741840,
                469762048: 540672,
                486539264: 1073758208,
                503316480: 1073741824,
                520093696: 1074282512,
                276824064: 540688,
                293601280: 524288,
                310378496: 1074266112,
                327155712: 16384,
                343932928: 1073758208,
                360710144: 1074282512,
                377487360: 16,
                394264576: 1073741824,
                411041792: 1074282496,
                427819008: 1073741840,
                444596224: 1073758224,
                461373440: 524304,
                478150656: 0,
                494927872: 16400,
                511705088: 1074266128,
                528482304: 540672
              }, {
                0: 260,
                1048576: 0,
                2097152: 67109120,
                3145728: 65796,
                4194304: 65540,
                5242880: 67108868,
                6291456: 67174660,
                7340032: 67174400,
                8388608: 67108864,
                9437184: 67174656,
                10485760: 65792,
                11534336: 67174404,
                12582912: 67109124,
                13631488: 65536,
                14680064: 4,
                15728640: 256,
                524288: 67174656,
                1572864: 67174404,
                2621440: 0,
                3670016: 67109120,
                4718592: 67108868,
                5767168: 65536,
                6815744: 65540,
                7864320: 260,
                8912896: 4,
                9961472: 256,
                11010048: 67174400,
                12058624: 65796,
                13107200: 65792,
                14155776: 67109124,
                15204352: 67174660,
                16252928: 67108864,
                16777216: 67174656,
                17825792: 65540,
                18874368: 65536,
                19922944: 67109120,
                20971520: 256,
                22020096: 67174660,
                23068672: 67108868,
                24117248: 0,
                25165824: 67109124,
                26214400: 67108864,
                27262976: 4,
                28311552: 65792,
                29360128: 67174400,
                30408704: 260,
                31457280: 65796,
                32505856: 67174404,
                17301504: 67108864,
                18350080: 260,
                19398656: 67174656,
                20447232: 0,
                21495808: 65540,
                22544384: 67109120,
                23592960: 256,
                24641536: 67174404,
                25690112: 65536,
                26738688: 67174660,
                27787264: 65796,
                28835840: 67108868,
                29884416: 67109124,
                30932992: 67174400,
                31981568: 4,
                33030144: 65792
              }, {
                0: 2151682048,
                65536: 2147487808,
                131072: 4198464,
                196608: 2151677952,
                262144: 0,
                327680: 4198400,
                393216: 2147483712,
                458752: 4194368,
                524288: 2147483648,
                589824: 4194304,
                655360: 64,
                720896: 2147487744,
                786432: 2151678016,
                851968: 4160,
                917504: 4096,
                983040: 2151682112,
                32768: 2147487808,
                98304: 64,
                163840: 2151678016,
                229376: 2147487744,
                294912: 4198400,
                360448: 2151682112,
                425984: 0,
                491520: 2151677952,
                557056: 4096,
                622592: 2151682048,
                688128: 4194304,
                753664: 4160,
                819200: 2147483648,
                884736: 4194368,
                950272: 4198464,
                1015808: 2147483712,
                1048576: 4194368,
                1114112: 4198400,
                1179648: 2147483712,
                1245184: 0,
                1310720: 4160,
                1376256: 2151678016,
                1441792: 2151682048,
                1507328: 2147487808,
                1572864: 2151682112,
                1638400: 2147483648,
                1703936: 2151677952,
                1769472: 4198464,
                1835008: 2147487744,
                1900544: 4194304,
                1966080: 64,
                2031616: 4096,
                1081344: 2151677952,
                1146880: 2151682112,
                1212416: 0,
                1277952: 4198400,
                1343488: 4194368,
                1409024: 2147483648,
                1474560: 2147487808,
                1540096: 64,
                1605632: 2147483712,
                1671168: 4096,
                1736704: 2147487744,
                1802240: 2151678016,
                1867776: 4160,
                1933312: 2151682048,
                1998848: 4194304,
                2064384: 4198464
              }, {
                0: 128,
                4096: 17039360,
                8192: 262144,
                12288: 536870912,
                16384: 537133184,
                20480: 16777344,
                24576: 553648256,
                28672: 262272,
                32768: 16777216,
                36864: 537133056,
                40960: 536871040,
                45056: 553910400,
                49152: 553910272,
                53248: 0,
                57344: 17039488,
                61440: 553648128,
                2048: 17039488,
                6144: 553648256,
                10240: 128,
                14336: 17039360,
                18432: 262144,
                22528: 537133184,
                26624: 553910272,
                30720: 536870912,
                34816: 537133056,
                38912: 0,
                43008: 553910400,
                47104: 16777344,
                51200: 536871040,
                55296: 553648128,
                59392: 16777216,
                63488: 262272,
                65536: 262144,
                69632: 128,
                73728: 536870912,
                77824: 553648256,
                81920: 16777344,
                86016: 553910272,
                90112: 537133184,
                94208: 16777216,
                98304: 553910400,
                102400: 553648128,
                106496: 17039360,
                110592: 537133056,
                114688: 262272,
                118784: 536871040,
                122880: 0,
                126976: 17039488,
                67584: 553648256,
                71680: 16777216,
                75776: 17039360,
                79872: 537133184,
                83968: 536870912,
                88064: 17039488,
                92160: 128,
                96256: 553910272,
                100352: 262272,
                104448: 553910400,
                108544: 0,
                112640: 553648128,
                116736: 16777344,
                120832: 262144,
                124928: 537133056,
                129024: 536871040
              }, {
                0: 268435464,
                256: 8192,
                512: 270532608,
                768: 270540808,
                1024: 268443648,
                1280: 2097152,
                1536: 2097160,
                1792: 268435456,
                2048: 0,
                2304: 268443656,
                2560: 2105344,
                2816: 8,
                3072: 270532616,
                3328: 2105352,
                3584: 8200,
                3840: 270540800,
                128: 270532608,
                384: 270540808,
                640: 8,
                896: 2097152,
                1152: 2105352,
                1408: 268435464,
                1664: 268443648,
                1920: 8200,
                2176: 2097160,
                2432: 8192,
                2688: 268443656,
                2944: 270532616,
                3200: 0,
                3456: 270540800,
                3712: 2105344,
                3968: 268435456,
                4096: 268443648,
                4352: 270532616,
                4608: 270540808,
                4864: 8200,
                5120: 2097152,
                5376: 268435456,
                5632: 268435464,
                5888: 2105344,
                6144: 2105352,
                6400: 0,
                6656: 8,
                6912: 270532608,
                7168: 8192,
                7424: 268443656,
                7680: 270540800,
                7936: 2097160,
                4224: 8,
                4480: 2105344,
                4736: 2097152,
                4992: 268435464,
                5248: 268443648,
                5504: 8200,
                5760: 270540808,
                6016: 270532608,
                6272: 270540800,
                6528: 270532616,
                6784: 8192,
                7040: 2105352,
                7296: 2097160,
                7552: 0,
                7808: 268435456,
                8064: 268443656
              }, {
                0: 1048576,
                16: 33555457,
                32: 1024,
                48: 1049601,
                64: 34604033,
                80: 0,
                96: 1,
                112: 34603009,
                128: 33555456,
                144: 1048577,
                160: 33554433,
                176: 34604032,
                192: 34603008,
                208: 1025,
                224: 1049600,
                240: 33554432,
                8: 34603009,
                24: 0,
                40: 33555457,
                56: 34604032,
                72: 1048576,
                88: 33554433,
                104: 33554432,
                120: 1025,
                136: 1049601,
                152: 33555456,
                168: 34603008,
                184: 1048577,
                200: 1024,
                216: 34604033,
                232: 1,
                248: 1049600,
                256: 33554432,
                272: 1048576,
                288: 33555457,
                304: 34603009,
                320: 1048577,
                336: 33555456,
                352: 34604032,
                368: 1049601,
                384: 1025,
                400: 34604033,
                416: 1049600,
                432: 1,
                448: 0,
                464: 34603008,
                480: 33554433,
                496: 1024,
                264: 1049600,
                280: 33555457,
                296: 34603009,
                312: 1,
                328: 33554432,
                344: 1048576,
                360: 1025,
                376: 34604032,
                392: 33554433,
                408: 34603008,
                424: 0,
                440: 34604033,
                456: 1049601,
                472: 1024,
                488: 33555456,
                504: 1048577
              }, {
                0: 134219808,
                1: 131072,
                2: 134217728,
                3: 32,
                4: 131104,
                5: 134350880,
                6: 134350848,
                7: 2048,
                8: 134348800,
                9: 134219776,
                10: 133120,
                11: 134348832,
                12: 2080,
                13: 0,
                14: 134217760,
                15: 133152,
                2147483648: 2048,
                2147483649: 134350880,
                2147483650: 134219808,
                2147483651: 134217728,
                2147483652: 134348800,
                2147483653: 133120,
                2147483654: 133152,
                2147483655: 32,
                2147483656: 134217760,
                2147483657: 2080,
                2147483658: 131104,
                2147483659: 134350848,
                2147483660: 0,
                2147483661: 134348832,
                2147483662: 134219776,
                2147483663: 131072,
                16: 133152,
                17: 134350848,
                18: 32,
                19: 2048,
                20: 134219776,
                21: 134217760,
                22: 134348832,
                23: 131072,
                24: 0,
                25: 131104,
                26: 134348800,
                27: 134219808,
                28: 134350880,
                29: 133120,
                30: 2080,
                31: 134217728,
                2147483664: 131072,
                2147483665: 2048,
                2147483666: 134348832,
                2147483667: 133152,
                2147483668: 32,
                2147483669: 134348800,
                2147483670: 134217728,
                2147483671: 134219808,
                2147483672: 134350880,
                2147483673: 134217760,
                2147483674: 134219776,
                2147483675: 0,
                2147483676: 133120,
                2147483677: 2080,
                2147483678: 131104,
                2147483679: 134350848
              }]
              , l = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679]
              , h = o.DES = i.extend({
                _doReset: function () {
                  for (var t = this._key.words, e = [], n = 0; 56 > n; n++) {
                    var r = s[n] - 1;
                    e[n] = t[r >>> 5] >>> 31 - r % 32 & 1;
                  }
                  for (t = this._subKeys = [],
                         r = 0; 16 > r; r++) {
                    var i = t[r] = []
                      , o = u[r];
                    for (n = 0; 24 > n; n++)
                      i[n / 6 | 0] |= e[(a[n] - 1 + o) % 28] << 31 - n % 6,
                        i[4 + (n / 6 | 0)] |= e[28 + (a[n + 24] - 1 + o) % 28] << 31 - n % 6;
                    for (i[0] = i[0] << 1 | i[0] >>> 31,
                           n = 1; 7 > n; n++)
                      i[n] >>>= 4 * (n - 1) + 3;
                    i[7] = i[7] << 5 | i[7] >>> 27;
                  }
                  for (e = this._invSubKeys = [],
                         n = 0; 16 > n; n++)
                    e[n] = t[15 - n];
                },
                encryptBlock: function (t, e) {
                  this._doCryptBlock(t, e, this._subKeys);
                },
                decryptBlock: function (t, e) {
                  this._doCryptBlock(t, e, this._invSubKeys);
                },
                _doCryptBlock: function (n, r, i) {
                  this._lBlock = n[r],
                    this._rBlock = n[r + 1],
                    t.call(this, 4, 252645135),
                    t.call(this, 16, 65535),
                    e.call(this, 2, 858993459),
                    e.call(this, 8, 16711935),
                    t.call(this, 1, 1431655765);
                  for (var o = 0; 16 > o; o++) {
                    for (var s = i[o], a = this._lBlock, u = this._rBlock, h = 0, f = 0; 8 > f; f++)
                      h |= c[f][((u ^ s[f]) & l[f]) >>> 0];
                    this._lBlock = u,
                      this._rBlock = a ^ h;
                  }
                  i = this._lBlock,
                    this._lBlock = this._rBlock,
                    this._rBlock = i,
                    t.call(this, 1, 1431655765),
                    e.call(this, 8, 16711935),
                    e.call(this, 2, 858993459),
                    t.call(this, 16, 65535),
                    t.call(this, 4, 252645135),
                    n[r] = this._lBlock,
                    n[r + 1] = this._rBlock;
                },
                keySize: 2,
                ivSize: 2,
                blockSize: 2
              });
            n.DES = i._createHelper(h),
              o = o.TripleDES = i.extend({
                _doReset: function () {
                  var t = this._key.words;
                  this._des1 = h.createEncryptor(r.create(t.slice(0, 2))),
                    this._des2 = h.createEncryptor(r.create(t.slice(2, 4))),
                    this._des3 = h.createEncryptor(r.create(t.slice(4, 6)));
                },
                encryptBlock: function (t, e) {
                  this._des1.encryptBlock(t, e),
                    this._des2.decryptBlock(t, e),
                    this._des3.encryptBlock(t, e);
                },
                decryptBlock: function (t, e) {
                  this._des3.decryptBlock(t, e),
                    this._des2.encryptBlock(t, e),
                    this._des1.decryptBlock(t, e);
                },
                keySize: 6,
                ivSize: 2,
                blockSize: 2
              }),
              n.TripleDES = i._createHelper(o);
          }(),
          function () {
            var t = g
              , e = t.lib.WordArray;
            t.enc.Base64 = {
              stringify: function (t) {
                var e = t.words
                  , n = t.sigBytes
                  , r = this._map;
                t.clamp(),
                  t = [];
                for (var i = 0; i < n; i += 3)
                  for (var o = (e[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (e[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | e[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, s = 0; 4 > s && i + .75 * s < n; s++)
                    t.push(r.charAt(o >>> 6 * (3 - s) & 63));
                if (e = r.charAt(64))
                  for (; t.length % 4;)
                    t.push(e);
                return t.join('');
              },
              parse: function (t) {
                var n = t.length
                  , r = this._map;
                (i = r.charAt(64)) && (-1 != (i = t.indexOf(i)) && (n = i));
                for (var i = [], o = 0, s = 0; s < n; s++)
                  if (s % 4) {
                    var a = r.indexOf(t.charAt(s - 1)) << s % 4 * 2
                      , u = r.indexOf(t.charAt(s)) >>> 6 - s % 4 * 2;
                    i[o >>> 2] |= (a | u) << 24 - o % 4 * 8,
                      o++;
                  }
                return e.create(i, o);
              },
              _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
            };
          }(),
          function (t) {
            function e(t, e, n, r, i, o, s) {
              return ((t = t + (e & n | ~e & r) + i + s) << o | t >>> 32 - o) + e;
            }

            function n(t, e, n, r, i, o, s) {
              return ((t = t + (e & r | n & ~r) + i + s) << o | t >>> 32 - o) + e;
            }

            function r(t, e, n, r, i, o, s) {
              return ((t = t + (e ^ n ^ r) + i + s) << o | t >>> 32 - o) + e;
            }

            function i(t, e, n, r, i, o, s) {
              return ((t = t + (n ^ (e | ~r)) + i + s) << o | t >>> 32 - o) + e;
            }

            for (var o = g, s = (u = o.lib).WordArray, a = u.Hasher, u = o.algo, c = [], l = 0; 64 > l; l++)
              c[l] = 4294967296 * t.abs(t.sin(l + 1)) | 0;
            u = u.MD5 = a.extend({
              _doReset: function () {
                this._hash = new s.init([1732584193, 4023233417, 2562383102, 271733878]);
              },
              _doProcessBlock: function (t, o) {
                for (var s = 0; 16 > s; s++) {
                  var a = t[u = o + s];
                  t[u] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8);
                }
                s = this._hash.words;
                var u = t[o + 0]
                  , l = (a = t[o + 1],
                  t[o + 2])
                  , h = t[o + 3]
                  , f = t[o + 4]
                  , p = t[o + 5]
                  , d = t[o + 6]
                  , g = t[o + 7]
                  , v = t[o + 8]
                  , m = t[o + 9]
                  , y = t[o + 10]
                  , b = t[o + 11]
                  , x = t[o + 12]
                  , w = t[o + 13]
                  , S = t[o + 14]
                  , E = t[o + 15]
                  , A = e(A = s[0], F = s[1], P = s[2], C = s[3], u, 7, c[0])
                  , C = e(C, A, F, P, a, 12, c[1])
                  , P = e(P, C, A, F, l, 17, c[2])
                  , F = e(F, P, C, A, h, 22, c[3]);
                A = e(A, F, P, C, f, 7, c[4]),
                  C = e(C, A, F, P, p, 12, c[5]),
                  P = e(P, C, A, F, d, 17, c[6]),
                  F = e(F, P, C, A, g, 22, c[7]),
                  A = e(A, F, P, C, v, 7, c[8]),
                  C = e(C, A, F, P, m, 12, c[9]),
                  P = e(P, C, A, F, y, 17, c[10]),
                  F = e(F, P, C, A, b, 22, c[11]),
                  A = e(A, F, P, C, x, 7, c[12]),
                  C = e(C, A, F, P, w, 12, c[13]),
                  P = e(P, C, A, F, S, 17, c[14]),
                  A = n(A, F = e(F, P, C, A, E, 22, c[15]), P, C, a, 5, c[16]),
                  C = n(C, A, F, P, d, 9, c[17]),
                  P = n(P, C, A, F, b, 14, c[18]),
                  F = n(F, P, C, A, u, 20, c[19]),
                  A = n(A, F, P, C, p, 5, c[20]),
                  C = n(C, A, F, P, y, 9, c[21]),
                  P = n(P, C, A, F, E, 14, c[22]),
                  F = n(F, P, C, A, f, 20, c[23]),
                  A = n(A, F, P, C, m, 5, c[24]),
                  C = n(C, A, F, P, S, 9, c[25]),
                  P = n(P, C, A, F, h, 14, c[26]),
                  F = n(F, P, C, A, v, 20, c[27]),
                  A = n(A, F, P, C, w, 5, c[28]),
                  C = n(C, A, F, P, l, 9, c[29]),
                  P = n(P, C, A, F, g, 14, c[30]),
                  A = r(A, F = n(F, P, C, A, x, 20, c[31]), P, C, p, 4, c[32]),
                  C = r(C, A, F, P, v, 11, c[33]),
                  P = r(P, C, A, F, b, 16, c[34]),
                  F = r(F, P, C, A, S, 23, c[35]),
                  A = r(A, F, P, C, a, 4, c[36]),
                  C = r(C, A, F, P, f, 11, c[37]),
                  P = r(P, C, A, F, g, 16, c[38]),
                  F = r(F, P, C, A, y, 23, c[39]),
                  A = r(A, F, P, C, w, 4, c[40]),
                  C = r(C, A, F, P, u, 11, c[41]),
                  P = r(P, C, A, F, h, 16, c[42]),
                  F = r(F, P, C, A, d, 23, c[43]),
                  A = r(A, F, P, C, m, 4, c[44]),
                  C = r(C, A, F, P, x, 11, c[45]),
                  P = r(P, C, A, F, E, 16, c[46]),
                  A = i(A, F = r(F, P, C, A, l, 23, c[47]), P, C, u, 6, c[48]),
                  C = i(C, A, F, P, g, 10, c[49]),
                  P = i(P, C, A, F, S, 15, c[50]),
                  F = i(F, P, C, A, p, 21, c[51]),
                  A = i(A, F, P, C, x, 6, c[52]),
                  C = i(C, A, F, P, h, 10, c[53]),
                  P = i(P, C, A, F, y, 15, c[54]),
                  F = i(F, P, C, A, a, 21, c[55]),
                  A = i(A, F, P, C, v, 6, c[56]),
                  C = i(C, A, F, P, E, 10, c[57]),
                  P = i(P, C, A, F, d, 15, c[58]),
                  F = i(F, P, C, A, w, 21, c[59]),
                  A = i(A, F, P, C, f, 6, c[60]),
                  C = i(C, A, F, P, b, 10, c[61]),
                  P = i(P, C, A, F, l, 15, c[62]),
                  F = i(F, P, C, A, m, 21, c[63]);
                s[0] = s[0] + A | 0,
                  s[1] = s[1] + F | 0,
                  s[2] = s[2] + P | 0,
                  s[3] = s[3] + C | 0;
              },
              _doFinalize: function () {
                var e = this._data
                  , n = e.words
                  , r = 8 * this._nDataBytes
                  , i = 8 * e.sigBytes;
                n[i >>> 5] |= 128 << 24 - i % 32;
                var o = t.floor(r / 4294967296);
                for (n[15 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
                       n[14 + (i + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8),
                       e.sigBytes = 4 * (n.length + 1),
                       this._process(),
                       n = (e = this._hash).words,
                       r = 0; 4 > r; r++)
                  i = n[r],
                    n[r] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
                return e;
              },
              clone: function () {
                var t = a.clone.call(this);
                return t._hash = this._hash.clone(),
                  t;
              }
            }),
              o.MD5 = a._createHelper(u),
              o.HmacMD5 = a._createHmacHelper(u);
          }(Math),
          function () {
            var t = g
              , e = (i = t.lib).WordArray
              , n = i.Hasher
              , r = []
              , i = t.algo.SHA1 = n.extend({
              _doReset: function () {
                this._hash = new e.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
              },
              _doProcessBlock: function (t, e) {
                for (var n = this._hash.words, i = n[0], o = n[1], s = n[2], a = n[3], u = n[4], c = 0; 80 > c; c++) {
                  if (16 > c)
                    r[c] = 0 | t[e + c];
                  else {
                    var l = r[c - 3] ^ r[c - 8] ^ r[c - 14] ^ r[c - 16];
                    r[c] = l << 1 | l >>> 31;
                  }
                  l = (i << 5 | i >>> 27) + u + r[c],
                    l = 20 > c ? l + (1518500249 + (o & s | ~o & a)) : 40 > c ? l + (1859775393 + (o ^ s ^ a)) : 60 > c ? l + ((o & s | o & a | s & a) - 1894007588) : l + ((o ^ s ^ a) - 899497514),
                    u = a,
                    a = s,
                    s = o << 30 | o >>> 2,
                    o = i,
                    i = l;
                }
                n[0] = n[0] + i | 0,
                  n[1] = n[1] + o | 0,
                  n[2] = n[2] + s | 0,
                  n[3] = n[3] + a | 0,
                  n[4] = n[4] + u | 0;
              },
              _doFinalize: function () {
                var t = this._data
                  , e = t.words
                  , n = 8 * this._nDataBytes
                  , r = 8 * t.sigBytes;
                return e[r >>> 5] |= 128 << 24 - r % 32,
                  e[14 + (r + 64 >>> 9 << 4)] = Math.floor(n / 4294967296),
                  e[15 + (r + 64 >>> 9 << 4)] = n,
                  t.sigBytes = 4 * e.length,
                  this._process(),
                  this._hash;
              },
              clone: function () {
                var t = n.clone.call(this);
                return t._hash = this._hash.clone(),
                  t;
              }
            });
            t.SHA1 = n._createHelper(i),
              t.HmacSHA1 = n._createHmacHelper(i);
          }(),
          function (t) {
            for (var e = g, n = (i = e.lib).WordArray, r = i.Hasher, i = e.algo, o = [], s = [], a = function (t) {
              return 4294967296 * (t - (0 | t)) | 0;
            }, u = 2, c = 0; 64 > c;) {
              var l;
              t: {
                l = u;
                for (var h = t.sqrt(l), f = 2; f <= h; f++)
                  if (!(l % f)) {
                    l = !1;
                    break t;
                  }
                l = !0;
              }
              l && (8 > c && (o[c] = a(t.pow(u, .5))),
                s[c] = a(t.pow(u, 1 / 3)),
                c++),
                u++;
            }
            var p = [];
            i = i.SHA256 = r.extend({
              _doReset: function () {
                this._hash = new n.init(o.slice(0));
              },
              _doProcessBlock: function (t, e) {
                for (var n = this._hash.words, r = n[0], i = n[1], o = n[2], a = n[3], u = n[4], c = n[5], l = n[6], h = n[7], f = 0; 64 > f; f++) {
                  if (16 > f)
                    p[f] = 0 | t[e + f];
                  else {
                    var d = p[f - 15]
                      , g = p[f - 2];
                    p[f] = ((d << 25 | d >>> 7) ^ (d << 14 | d >>> 18) ^ d >>> 3) + p[f - 7] + ((g << 15 | g >>> 17) ^ (g << 13 | g >>> 19) ^ g >>> 10) + p[f - 16];
                  }
                  d = h + ((u << 26 | u >>> 6) ^ (u << 21 | u >>> 11) ^ (u << 7 | u >>> 25)) + (u & c ^ ~u & l) + s[f] + p[f],
                    g = ((r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22)) + (r & i ^ r & o ^ i & o),
                    h = l,
                    l = c,
                    c = u,
                    u = a + d | 0,
                    a = o,
                    o = i,
                    i = r,
                    r = d + g | 0;
                }
                n[0] = n[0] + r | 0,
                  n[1] = n[1] + i | 0,
                  n[2] = n[2] + o | 0,
                  n[3] = n[3] + a | 0,
                  n[4] = n[4] + u | 0,
                  n[5] = n[5] + c | 0,
                  n[6] = n[6] + l | 0,
                  n[7] = n[7] + h | 0;
              },
              _doFinalize: function () {
                var e = this._data
                  , n = e.words
                  , r = 8 * this._nDataBytes
                  , i = 8 * e.sigBytes;
                return n[i >>> 5] |= 128 << 24 - i % 32,
                  n[14 + (i + 64 >>> 9 << 4)] = t.floor(r / 4294967296),
                  n[15 + (i + 64 >>> 9 << 4)] = r,
                  e.sigBytes = 4 * n.length,
                  this._process(),
                  this._hash;
              },
              clone: function () {
                var t = r.clone.call(this);
                return t._hash = this._hash.clone(),
                  t;
              }
            });
            e.SHA256 = r._createHelper(i),
              e.HmacSHA256 = r._createHmacHelper(i);
          }(Math),
          function () {
            var t = g
              , e = t.lib.WordArray
              , n = (r = t.algo).SHA256
              , r = r.SHA224 = n.extend({
              _doReset: function () {
                this._hash = new e.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
              },
              _doFinalize: function () {
                var t = n._doFinalize.call(this);
                return t.sigBytes -= 4,
                  t;
              }
            });
            t.SHA224 = n._createHelper(r),
              t.HmacSHA224 = n._createHmacHelper(r);
          }(),
          function () {
            function t() {
              return r.create.apply(r, arguments);
            }

            for (var e = g, n = e.lib.Hasher, r = (o = e.x64).Word, i = o.WordArray, o = e.algo, s = [t(1116352408, 3609767458), t(1899447441, 602891725), t(3049323471, 3964484399), t(3921009573, 2173295548), t(961987163, 4081628472), t(1508970993, 3053834265), t(2453635748, 2937671579), t(2870763221, 3664609560), t(3624381080, 2734883394), t(310598401, 1164996542), t(607225278, 1323610764), t(1426881987, 3590304994), t(1925078388, 4068182383), t(2162078206, 991336113), t(2614888103, 633803317), t(3248222580, 3479774868), t(3835390401, 2666613458), t(4022224774, 944711139), t(264347078, 2341262773), t(604807628, 2007800933), t(770255983, 1495990901), t(1249150122, 1856431235), t(1555081692, 3175218132), t(1996064986, 2198950837), t(2554220882, 3999719339), t(2821834349, 766784016), t(2952996808, 2566594879), t(3210313671, 3203337956), t(3336571891, 1034457026), t(3584528711, 2466948901), t(113926993, 3758326383), t(338241895, 168717936), t(666307205, 1188179964), t(773529912, 1546045734), t(1294757372, 1522805485), t(1396182291, 2643833823), t(1695183700, 2343527390), t(1986661051, 1014477480), t(2177026350, 1206759142), t(2456956037, 344077627), t(2730485921, 1290863460), t(2820302411, 3158454273), t(3259730800, 3505952657), t(3345764771, 106217008), t(3516065817, 3606008344), t(3600352804, 1432725776), t(4094571909, 1467031594), t(275423344, 851169720), t(430227734, 3100823752), t(506948616, 1363258195), t(659060556, 3750685593), t(883997877, 3785050280), t(958139571, 3318307427), t(1322822218, 3812723403), t(1537002063, 2003034995), t(1747873779, 3602036899), t(1955562222, 1575990012), t(2024104815, 1125592928), t(2227730452, 2716904306), t(2361852424, 442776044), t(2428436474, 593698344), t(2756734187, 3733110249), t(3204031479, 2999351573), t(3329325298, 3815920427), t(3391569614, 3928383900), t(3515267271, 566280711), t(3940187606, 3454069534), t(4118630271, 4000239992), t(116418474, 1914138554), t(174292421, 2731055270), t(289380356, 3203993006), t(460393269, 320620315), t(685471733, 587496836), t(852142971, 1086792851), t(1017036298, 365543100), t(1126000580, 2618297676), t(1288033470, 3409855158), t(1501505948, 4234509866), t(1607167915, 987167468), t(1816402316, 1246189591)], a = [], u = 0; 80 > u; u++)
              a[u] = t();
            o = o.SHA512 = n.extend({
              _doReset: function () {
                this._hash = new i.init([new r.init(1779033703, 4089235720), new r.init(3144134277, 2227873595), new r.init(1013904242, 4271175723), new r.init(2773480762, 1595750129), new r.init(1359893119, 2917565137), new r.init(2600822924, 725511199), new r.init(528734635, 4215389547), new r.init(1541459225, 327033209)]);
              },
              _doProcessBlock: function (t, e) {
                for (var n = (h = this._hash.words)[0], r = h[1], i = h[2], o = h[3], u = h[4], c = h[5], l = h[6], h = h[7], f = n.high, p = n.low, d = r.high, g = r.low, v = i.high, m = i.low, y = o.high, b = o.low, x = u.high, w = u.low, S = c.high, E = c.low, A = l.high, C = l.low, P = h.high, F = h.low, k = f, T = p, _ = d, I = g, D = v, N = m, O = y, R = b, j = x, B = w, H = S, L = E, M = A, U = C, $ = P, V = F, q = 0; 80 > q; q++) {
                  var K = a[q];
                  if (16 > q)
                    var G = K.high = 0 | t[e + 2 * q]
                      , z = K.low = 0 | t[e + 2 * q + 1];
                  else {
                    G = ((z = (G = a[q - 15]).high) >>> 1 | (W = G.low) << 31) ^ (z >>> 8 | W << 24) ^ z >>> 7;
                    var W = (W >>> 1 | z << 31) ^ (W >>> 8 | z << 24) ^ (W >>> 7 | z << 25)
                      , Y = ((z = (Y = a[q - 2]).high) >>> 19 | (X = Y.low) << 13) ^ (z << 3 | X >>> 29) ^ z >>> 6
                      , X = (X >>> 19 | z << 13) ^ (X << 3 | z >>> 29) ^ (X >>> 6 | z << 26)
                      , J = (z = a[q - 7]).high
                      , Q = (Z = a[q - 16]).high
                      , Z = Z.low;
                    G = (G = (G = G + J + ((z = W + z.low) >>> 0 < W >>> 0 ? 1 : 0)) + Y + ((z = z + X) >>> 0 < X >>> 0 ? 1 : 0)) + Q + ((z = z + Z) >>> 0 < Z >>> 0 ? 1 : 0);
                    K.high = G,
                      K.low = z;
                  }
                  J = j & H ^ ~j & M,
                    Z = B & L ^ ~B & U,
                    K = k & _ ^ k & D ^ _ & D;
                  var tt = T & I ^ T & N ^ I & N
                    , et = (W = (k >>> 28 | T << 4) ^ (k << 30 | T >>> 2) ^ (k << 25 | T >>> 7),
                    Y = (T >>> 28 | k << 4) ^ (T << 30 | k >>> 2) ^ (T << 25 | k >>> 7),
                    (X = s[q]).high)
                    , nt = X.low;
                  Q = $ + ((j >>> 14 | B << 18) ^ (j >>> 18 | B << 14) ^ (j << 23 | B >>> 9)) + ((X = V + ((B >>> 14 | j << 18) ^ (B >>> 18 | j << 14) ^ (B << 23 | j >>> 9))) >>> 0 < V >>> 0 ? 1 : 0),
                    $ = M,
                    V = U,
                    M = H,
                    U = L,
                    H = j,
                    L = B,
                    j = O + (Q = (Q = (Q = Q + J + ((X = X + Z) >>> 0 < Z >>> 0 ? 1 : 0)) + et + ((X = X + nt) >>> 0 < nt >>> 0 ? 1 : 0)) + G + ((X = X + z) >>> 0 < z >>> 0 ? 1 : 0)) + ((B = R + X | 0) >>> 0 < R >>> 0 ? 1 : 0) | 0,
                    O = D,
                    R = N,
                    D = _,
                    N = I,
                    _ = k,
                    I = T,
                    k = Q + (K = W + K + ((z = Y + tt) >>> 0 < Y >>> 0 ? 1 : 0)) + ((T = X + z | 0) >>> 0 < X >>> 0 ? 1 : 0) | 0;
                }
                p = n.low = p + T,
                  n.high = f + k + (p >>> 0 < T >>> 0 ? 1 : 0),
                  g = r.low = g + I,
                  r.high = d + _ + (g >>> 0 < I >>> 0 ? 1 : 0),
                  m = i.low = m + N,
                  i.high = v + D + (m >>> 0 < N >>> 0 ? 1 : 0),
                  b = o.low = b + R,
                  o.high = y + O + (b >>> 0 < R >>> 0 ? 1 : 0),
                  w = u.low = w + B,
                  u.high = x + j + (w >>> 0 < B >>> 0 ? 1 : 0),
                  E = c.low = E + L,
                  c.high = S + H + (E >>> 0 < L >>> 0 ? 1 : 0),
                  C = l.low = C + U,
                  l.high = A + M + (C >>> 0 < U >>> 0 ? 1 : 0),
                  F = h.low = F + V,
                  h.high = P + $ + (F >>> 0 < V >>> 0 ? 1 : 0);
              },
              _doFinalize: function () {
                var t = this._data
                  , e = t.words
                  , n = 8 * this._nDataBytes
                  , r = 8 * t.sigBytes;
                return e[r >>> 5] |= 128 << 24 - r % 32,
                  e[30 + (r + 128 >>> 10 << 5)] = Math.floor(n / 4294967296),
                  e[31 + (r + 128 >>> 10 << 5)] = n,
                  t.sigBytes = 4 * e.length,
                  this._process(),
                  this._hash.toX32();
              },
              clone: function () {
                var t = n.clone.call(this);
                return t._hash = this._hash.clone(),
                  t;
              },
              blockSize: 32
            }),
              e.SHA512 = n._createHelper(o),
              e.HmacSHA512 = n._createHmacHelper(o);
          }(),
          function () {
            var t = g
              , e = (i = t.x64).Word
              , n = i.WordArray
              , r = (i = t.algo).SHA512
              , i = i.SHA384 = r.extend({
              _doReset: function () {
                this._hash = new n.init([new e.init(3418070365, 3238371032), new e.init(1654270250, 914150663), new e.init(2438529370, 812702999), new e.init(355462360, 4144912697), new e.init(1731405415, 4290775857), new e.init(2394180231, 1750603025), new e.init(3675008525, 1694076839), new e.init(1203062813, 3204075428)]);
              },
              _doFinalize: function () {
                var t = r._doFinalize.call(this);
                return t.sigBytes -= 16,
                  t;
              }
            });
            t.SHA384 = r._createHelper(i),
              t.HmacSHA384 = r._createHmacHelper(i);
          }(),
          function () {
            var t = g
              , e = (r = t.lib).WordArray
              , n = r.Hasher
              , r = t.algo
              ,
              i = e.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13])
              ,
              o = e.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11])
              ,
              s = e.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6])
              ,
              a = e.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11])
              , u = e.create([0, 1518500249, 1859775393, 2400959708, 2840853838])
              , c = e.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
            r = r.RIPEMD160 = n.extend({
              _doReset: function () {
                this._hash = e.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
              },
              _doProcessBlock: function (t, e) {
                for (var n = 0; 16 > n; n++) {
                  var r = t[x = e + n];
                  t[x] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
                }
                var l, h, f, p, d, g, v, m, y, b, x = this._hash.words, w = (r = u.words,
                  c.words), S = i.words, E = o.words, A = s.words, C = a.words;
                g = l = x[0],
                  v = h = x[1],
                  m = f = x[2],
                  y = p = x[3],
                  b = d = x[4];
                var P;
                for (n = 0; 80 > n; n += 1)
                  P = l + t[e + S[n]] | 0,
                    P = 16 > n ? P + ((h ^ f ^ p) + r[0]) : 32 > n ? P + ((h & f | ~h & p) + r[1]) : 48 > n ? P + (((h | ~f) ^ p) + r[2]) : 64 > n ? P + ((h & p | f & ~p) + r[3]) : P + ((h ^ (f | ~p)) + r[4]),
                    P = (P = (P |= 0) << A[n] | P >>> 32 - A[n]) + d | 0,
                    l = d,
                    d = p,
                    p = f << 10 | f >>> 22,
                    f = h,
                    h = P,
                    P = g + t[e + E[n]] | 0,
                    P = 16 > n ? P + ((v ^ (m | ~y)) + w[0]) : 32 > n ? P + ((v & y | m & ~y) + w[1]) : 48 > n ? P + (((v | ~m) ^ y) + w[2]) : 64 > n ? P + ((v & m | ~v & y) + w[3]) : P + ((v ^ m ^ y) + w[4]),
                    P = (P = (P |= 0) << C[n] | P >>> 32 - C[n]) + b | 0,
                    g = b,
                    b = y,
                    y = m << 10 | m >>> 22,
                    m = v,
                    v = P;
                P = x[1] + f + y | 0,
                  x[1] = x[2] + p + b | 0,
                  x[2] = x[3] + d + g | 0,
                  x[3] = x[4] + l + v | 0,
                  x[4] = x[0] + h + m | 0,
                  x[0] = P;
              },
              _doFinalize: function () {
                var t = this._data
                  , e = t.words
                  , n = 8 * this._nDataBytes
                  , r = 8 * t.sigBytes;
                for (e[r >>> 5] |= 128 << 24 - r % 32,
                       e[14 + (r + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8),
                       t.sigBytes = 4 * (e.length + 1),
                       this._process(),
                       e = (t = this._hash).words,
                       n = 0; 5 > n; n++)
                  r = e[n],
                    e[n] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
                return t;
              },
              clone: function () {
                var t = n.clone.call(this);
                return t._hash = this._hash.clone(),
                  t;
              }
            });
            t.RIPEMD160 = n._createHelper(r),
              t.HmacRIPEMD160 = n._createHmacHelper(r);
          }(Math),
          function () {
            var t = g
              , e = t.enc.Utf8;
            t.algo.HMAC = t.lib.Base.extend({
              init: function (t, n) {
                t = this._hasher = new t.init,
                'string' == typeof n && (n = e.parse(n));
                var r = t.blockSize
                  , i = 4 * r;
                n.sigBytes > i && (n = t.finalize(n)),
                  n.clamp();
                for (var o = this._oKey = n.clone(), s = this._iKey = n.clone(), a = o.words, u = s.words, c = 0; c < r; c++)
                  a[c] ^= 1549556828,
                    u[c] ^= 909522486;
                o.sigBytes = s.sigBytes = i,
                  this.reset();
              },
              reset: function () {
                var t = this._hasher;
                t.reset(),
                  t.update(this._iKey);
              },
              update: function (t) {
                return this._hasher.update(t),
                  this;
              },
              finalize: function (t) {
                var e = this._hasher;
                return t = e.finalize(t),
                  e.reset(),
                  e.finalize(this._oKey.clone().concat(t));
              }
            });
          }(),
          function () {
            var t, e = g, n = (t = e.lib).Base, r = t.WordArray, i = (t = e.algo).HMAC, o = t.PBKDF2 = n.extend({
              cfg: n.extend({
                keySize: 4,
                hasher: t.SHA1,
                iterations: 1
              }),
              init: function (t) {
                this.cfg = this.cfg.extend(t);
              },
              compute: function (t, e) {
                var n = this.cfg
                  , o = i.create(n.hasher, t)
                  , s = r.create()
                  , a = r.create([1])
                  , u = s.words
                  , c = a.words
                  , l = n.keySize;
                for (n = n.iterations; u.length < l;) {
                  var h = o.update(e).finalize(a);
                  o.reset();
                  for (var f = h.words, p = f.length, d = h, g = 1; g < n; g++) {
                    d = o.finalize(d),
                      o.reset();
                    for (var v = d.words, m = 0; m < p; m++)
                      f[m] ^= v[m];
                  }
                  s.concat(h),
                    c[0]++;
                }
                return s.sigBytes = 4 * l,
                  s;
              }
            });
            e.PBKDF2 = function (t, e, n) {
              return o.create(n).compute(t, e);
            };
          }();
        /*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
        var v, m = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

        function y(t) {
          var e, n, r = '';
          for (e = 0; e + 3 <= t.length; e += 3)
            n = parseInt(t.substring(e, e + 3), 16),
              r += m.charAt(n >> 6) + m.charAt(63 & n);
          for (e + 1 == t.length ? (n = parseInt(t.substring(e, e + 1), 16),
            r += m.charAt(n << 2)) : e + 2 == t.length && (n = parseInt(t.substring(e, e + 2), 16),
            r += m.charAt(n >> 2) + m.charAt((3 & n) << 4)),
                 '='; (3 & r.length) > 0;)
            r += '=';
          return r;
        }

        function b(t) {
          var e, n, r, i = '', o = 0;
          for (e = 0; e < t.length && "=" != t.charAt(e); ++e)
            (r = m.indexOf(t.charAt(e))) < 0 || (0 == o ? (i += P(r >> 2),
              n = 3 & r,
              o = 1) : 1 == o ? (i += P(n << 2 | r >> 4),
              n = 15 & r,
              o = 2) : 2 == o ? (i += P(n),
              i += P(r >> 2),
              n = 3 & r,
              o = 3) : (i += P(n << 2 | r >> 4),
              i += P(15 & r),
              o = 0));
          return 1 == o && (i += P(n << 2)),
            i;
        }

        function x(t) {
          var e, n = b(t), r = new Array;
          for (e = 0; 2 * e < n.length; ++e)
            r[e] = parseInt(n.substring(2 * e, 2 * e + 2), 16);
          return r;
        }

        function w(t, e, n) {
          null != t && ('number' == typeof t ? this.fromNumber(t, e, n) : null == e && 'string' != typeof t ? this.fromString(t, 256) : this.fromString(t, e));
        }

        function S() {
          return new w(null);
        }

        'Microsoft Internet Explorer' == p.appName ? (w.prototype.am = function (t, e, n, r, i, o) {
          for (var s = 32767 & e, a = e >> 15; --o >= 0;) {
            var u = 32767 & this[t]
              , c = this[t++] >> 15
              , l = a * u + c * s;
            i = ((u = s * u + ((32767 & l) << 15) + n[r] + (1073741823 & i)) >>> 30) + (l >>> 15) + a * c + (i >>> 30),
              n[r++] = 1073741823 & u;
          }
          return i;
        }
          ,
          v = 30) : 'Netscape' != p.appName ? (w.prototype.am = function (t, e, n, r, i, o) {
          for (; --o >= 0;) {
            var s = e * this[t++] + n[r] + i;
            i = Math.floor(s / 67108864),
              n[r++] = 67108863 & s;
          }
          return i;
        }
          ,
          v = 26) : (w.prototype.am = function (t, e, n, r, i, o) {
          for (var s = 16383 & e, a = e >> 14; --o >= 0;) {
            var u = 16383 & this[t]
              , c = this[t++] >> 14
              , l = a * u + c * s;
            i = ((u = s * u + ((16383 & l) << 14) + n[r] + i) >> 28) + (l >> 14) + a * c,
              n[r++] = 268435455 & u;
          }
          return i;
        }
          ,
          v = 28),
          w.prototype.DB = v,
          w.prototype.DM = (1 << v) - 1,
          w.prototype.DV = 1 << v;
        w.prototype.FV = Math.pow(2, 52),
          w.prototype.F1 = 52 - v,
          w.prototype.F2 = 2 * v - 52;
        var E, A, C = new Array;
        for (E = '0'.charCodeAt(0),
               A = 0; A <= 9; ++A)
          C[E++] = A;
        for (E = 'a'.charCodeAt(0),
               A = 10; A < 36; ++A)
          C[E++] = A;
        for (E = 'A'.charCodeAt(0),
               A = 10; A < 36; ++A)
          C[E++] = A;

        function P(t) {
          return '0123456789abcdefghijklmnopqrstuvwxyz'.charAt(t);
        }

        function F(t, e) {
          var n = C[t.charCodeAt(e)];
          return null == n ? -1 : n;
        }

        function k(t) {
          var e = S();
          return e.fromInt(t),
            e;
        }

        function T(t) {
          var e, n = 1;
          return 0 != (e = t >>> 16) && (t = e,
            n += 16),
          0 != (e = t >> 8) && (t = e,
            n += 8),
          0 != (e = t >> 4) && (t = e,
            n += 4),
          0 != (e = t >> 2) && (t = e,
            n += 2),
          0 != (e = t >> 1) && (t = e,
            n += 1),
            n;
        }

        function _(t) {
          this.m = t;
        }

        function I(t) {
          this.m = t,
            this.mp = t.invDigit(),
            this.mpl = 32767 & this.mp,
            this.mph = this.mp >> 15,
            this.um = (1 << t.DB - 15) - 1,
            this.mt2 = 2 * t.t;
        }

        function D(t, e) {
          return t & e;
        }

        function N(t, e) {
          return t | e;
        }

        function O(t, e) {
          return t ^ e;
        }

        function R(t, e) {
          return t & ~e;
        }

        function j(t) {
          if (0 == t)
            return -1;
          var e = 0;
          return 0 == (65535 & t) && (t >>= 16,
            e += 16),
          0 == (255 & t) && (t >>= 8,
            e += 8),
          0 == (15 & t) && (t >>= 4,
            e += 4),
          0 == (3 & t) && (t >>= 2,
            e += 2),
          0 == (1 & t) && ++e,
            e;
        }

        function B(t) {
          for (var e = 0; 0 != t;)
            t &= t - 1,
              ++e;
          return e;
        }

        function H() {
        }

        function L(t) {
          return t;
        }

        function M(t) {
          this.r2 = S(),
            this.q3 = S(),
            w.ONE.dlShiftTo(2 * t.t, this.r2),
            this.mu = this.r2.divide(t),
            this.m = t;
        }

        _.prototype.convert = function (t) {
          return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
        }
          ,
          _.prototype.revert = function (t) {
            return t;
          }
          ,
          _.prototype.reduce = function (t) {
            t.divRemTo(this.m, null, t);
          }
          ,
          _.prototype.mulTo = function (t, e, n) {
            t.multiplyTo(e, n),
              this.reduce(n);
          }
          ,
          _.prototype.sqrTo = function (t, e) {
            t.squareTo(e),
              this.reduce(e);
          }
          ,
          I.prototype.convert = function (t) {
            var e = S();
            return t.abs().dlShiftTo(this.m.t, e),
              e.divRemTo(this.m, null, e),
            t.s < 0 && e.compareTo(w.ZERO) > 0 && this.m.subTo(e, e),
              e;
          }
          ,
          I.prototype.revert = function (t) {
            var e = S();
            return t.copyTo(e),
              this.reduce(e),
              e;
          }
          ,
          I.prototype.reduce = function (t) {
            for (; t.t <= this.mt2;)
              t[t.t++] = 0;
            for (var e = 0; e < this.m.t; ++e) {
              var n = 32767 & t[e]
                , r = n * this.mpl + ((n * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
              for (t[n = e + this.m.t] += this.m.am(0, r, t, e, 0, this.m.t); t[n] >= t.DV;)
                t[n] -= t.DV,
                  t[++n]++;
            }
            t.clamp(),
              t.drShiftTo(this.m.t, t),
            t.compareTo(this.m) >= 0 && t.subTo(this.m, t);
          }
          ,
          I.prototype.mulTo = function (t, e, n) {
            t.multiplyTo(e, n),
              this.reduce(n);
          }
          ,
          I.prototype.sqrTo = function (t, e) {
            t.squareTo(e),
              this.reduce(e);
          }
          ,
          w.prototype.copyTo = function (t) {
            for (var e = this.t - 1; e >= 0; --e)
              t[e] = this[e];
            t.t = this.t,
              t.s = this.s;
          }
          ,
          w.prototype.fromInt = function (t) {
            this.t = 1,
              this.s = t < 0 ? -1 : 0,
              t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0;
          }
          ,
          w.prototype.fromString = function (t, e) {
            var n;
            if (16 == e)
              n = 4;
            else if (8 == e)
              n = 3;
            else if (256 == e)
              n = 8;
            else if (2 == e)
              n = 1;
            else if (32 == e)
              n = 5;
            else {
              if (4 != e)
                return void this.fromRadix(t, e);
              n = 2;
            }
            this.t = 0,
              this.s = 0;
            for (var r = t.length, i = !1, o = 0; --r >= 0;) {
              var s = 8 == n ? 255 & t[r] : F(t, r);
              s < 0 ? '-' == t.charAt(r) && (i = !0) : (i = !1,
                0 == o ? this[this.t++] = s : o + n > this.DB ? (this[this.t - 1] |= (s & (1 << this.DB - o) - 1) << o,
                  this[this.t++] = s >> this.DB - o) : this[this.t - 1] |= s << o,
              (o += n) >= this.DB && (o -= this.DB));
            }
            8 == n && 0 != (128 & t[0]) && (this.s = -1,
            o > 0 && (this[this.t - 1] |= (1 << this.DB - o) - 1 << o)),
              this.clamp(),
            i && w.ZERO.subTo(this, this);
          }
          ,
          w.prototype.clamp = function () {
            for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;)
              --this.t;
          }
          ,
          w.prototype.dlShiftTo = function (t, e) {
            var n;
            for (n = this.t - 1; n >= 0; --n)
              e[n + t] = this[n];
            for (n = t - 1; n >= 0; --n)
              e[n] = 0;
            e.t = this.t + t,
              e.s = this.s;
          }
          ,
          w.prototype.drShiftTo = function (t, e) {
            for (var n = t; n < this.t; ++n)
              e[n - t] = this[n];
            e.t = Math.max(this.t - t, 0),
              e.s = this.s;
          }
          ,
          w.prototype.lShiftTo = function (t, e) {
            var n, r = t % this.DB, i = this.DB - r, o = (1 << i) - 1, s = Math.floor(t / this.DB),
              a = this.s << r & this.DM;
            for (n = this.t - 1; n >= 0; --n)
              e[n + s + 1] = this[n] >> i | a,
                a = (this[n] & o) << r;
            for (n = s - 1; n >= 0; --n)
              e[n] = 0;
            e[s] = a,
              e.t = this.t + s + 1,
              e.s = this.s,
              e.clamp();
          }
          ,
          w.prototype.rShiftTo = function (t, e) {
            e.s = this.s;
            var n = Math.floor(t / this.DB);
            if (n >= this.t)
              e.t = 0;
            else {
              var r = t % this.DB
                , i = this.DB - r
                , o = (1 << r) - 1;
              e[0] = this[n] >> r;
              for (var s = n + 1; s < this.t; ++s)
                e[s - n - 1] |= (this[s] & o) << i,
                  e[s - n] = this[s] >> r;
              r > 0 && (e[this.t - n - 1] |= (this.s & o) << i),
                e.t = this.t - n,
                e.clamp();
            }
          }
          ,
          w.prototype.subTo = function (t, e) {
            for (var n = 0, r = 0, i = Math.min(t.t, this.t); n < i;)
              r += this[n] - t[n],
                e[n++] = r & this.DM,
                r >>= this.DB;
            if (t.t < this.t) {
              for (r -= t.s; n < this.t;)
                r += this[n],
                  e[n++] = r & this.DM,
                  r >>= this.DB;
              r += this.s;
            } else {
              for (r += this.s; n < t.t;)
                r -= t[n],
                  e[n++] = r & this.DM,
                  r >>= this.DB;
              r -= t.s;
            }
            e.s = r < 0 ? -1 : 0,
              r < -1 ? e[n++] = this.DV + r : r > 0 && (e[n++] = r),
              e.t = n,
              e.clamp();
          }
          ,
          w.prototype.multiplyTo = function (t, e) {
            var n = this.abs()
              , r = t.abs()
              , i = n.t;
            for (e.t = i + r.t; --i >= 0;)
              e[i] = 0;
            for (i = 0; i < r.t; ++i)
              e[i + n.t] = n.am(0, r[i], e, i, 0, n.t);
            e.s = 0,
              e.clamp(),
            this.s != t.s && w.ZERO.subTo(e, e);
          }
          ,
          w.prototype.squareTo = function (t) {
            for (var e = this.abs(), n = t.t = 2 * e.t; --n >= 0;)
              t[n] = 0;
            for (n = 0; n < e.t - 1; ++n) {
              var r = e.am(n, e[n], t, 2 * n, 0, 1);
              (t[n + e.t] += e.am(n + 1, 2 * e[n], t, 2 * n + 1, r, e.t - n - 1)) >= e.DV && (t[n + e.t] -= e.DV,
                t[n + e.t + 1] = 1);
            }
            t.t > 0 && (t[t.t - 1] += e.am(n, e[n], t, 2 * n, 0, 1)),
              t.s = 0,
              t.clamp();
          }
          ,
          w.prototype.divRemTo = function (t, e, n) {
            var r = t.abs();
            if (!(r.t <= 0)) {
              var i = this.abs();
              if (i.t < r.t)
                return null != e && e.fromInt(0),
                  void (null != n && this.copyTo(n));
              null == n && (n = S());
              var o = S()
                , s = this.s
                , a = t.s
                , u = this.DB - T(r[r.t - 1]);
              u > 0 ? (r.lShiftTo(u, o),
                i.lShiftTo(u, n)) : (r.copyTo(o),
                i.copyTo(n));
              var c = o.t
                , l = o[c - 1];
              if (0 != l) {
                var h = l * (1 << this.F1) + (c > 1 ? o[c - 2] >> this.F2 : 0)
                  , f = this.FV / h
                  , p = (1 << this.F1) / h
                  , d = 1 << this.F2
                  , g = n.t
                  , v = g - c
                  , m = null == e ? S() : e;
                for (o.dlShiftTo(v, m),
                     n.compareTo(m) >= 0 && (n[n.t++] = 1,
                       n.subTo(m, n)),
                       w.ONE.dlShiftTo(c, m),
                       m.subTo(o, o); o.t < c;)
                  o[o.t++] = 0;
                for (; --v >= 0;) {
                  var y = n[--g] == l ? this.DM : Math.floor(n[g] * f + (n[g - 1] + d) * p);
                  if ((n[g] += o.am(0, y, n, v, 0, c)) < y)
                    for (o.dlShiftTo(v, m),
                           n.subTo(m, n); n[g] < --y;)
                      n.subTo(m, n);
                }
                null != e && (n.drShiftTo(c, e),
                s != a && w.ZERO.subTo(e, e)),
                  n.t = c,
                  n.clamp(),
                u > 0 && n.rShiftTo(u, n),
                s < 0 && w.ZERO.subTo(n, n);
              }
            }
          }
          ,
          w.prototype.invDigit = function () {
            if (this.t < 1)
              return 0;
            var t = this[0];
            if (0 == (1 & t))
              return 0;
            var e = 3 & t;
            return (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) > 0 ? this.DV - e : -e;
          }
          ,
          w.prototype.isEven = function () {
            return 0 == (this.t > 0 ? 1 & this[0] : this.s);
          }
          ,
          w.prototype.exp = function (t, e) {
            if (t > 4294967295 || t < 1)
              return w.ONE;
            var n = S()
              , r = S()
              , i = e.convert(this)
              , o = T(t) - 1;
            for (i.copyTo(n); --o >= 0;)
              if (e.sqrTo(n, r),
              (t & 1 << o) > 0)
                e.mulTo(r, i, n);
              else {
                var s = n;
                n = r,
                  r = s;
              }
            return e.revert(n);
          }
          ,
          w.prototype.toString = function (t) {
            if (this.s < 0)
              return '-' + this.negate().toString(t);
            var e;
            if (16 == t)
              e = 4;
            else if (8 == t)
              e = 3;
            else if (2 == t)
              e = 1;
            else if (32 == t)
              e = 5;
            else {
              if (4 != t)
                return this.toRadix(t);
              e = 2;
            }
            var n, r = (1 << e) - 1, i = !1, o = '', s = this.t, a = this.DB - s * this.DB % e;
            if (s-- > 0)
              for (a < this.DB && (n = this[s] >> a) > 0 && (i = !0,
                o = P(n)); s >= 0;)
                a < e ? (n = (this[s] & (1 << a) - 1) << e - a,
                  n |= this[--s] >> (a += this.DB - e)) : (n = this[s] >> (a -= e) & r,
                a <= 0 && (a += this.DB,
                  --s)),
                n > 0 && (i = !0),
                i && (o += P(n));
            return i ? o : '0';
          }
          ,
          w.prototype.negate = function () {
            var t = S();
            return w.ZERO.subTo(this, t),
              t;
          }
          ,
          w.prototype.abs = function () {
            return this.s < 0 ? this.negate() : this;
          }
          ,
          w.prototype.compareTo = function (t) {
            var e = this.s - t.s;
            if (0 != e)
              return e;
            var n = this.t;
            if (0 != (e = n - t.t))
              return this.s < 0 ? -e : e;
            for (; --n >= 0;)
              if (0 != (e = this[n] - t[n]))
                return e;
            return 0;
          }
          ,
          w.prototype.bitLength = function () {
            return this.t <= 0 ? 0 : this.DB * (this.t - 1) + T(this[this.t - 1] ^ this.s & this.DM);
          }
          ,
          w.prototype.mod = function (t) {
            var e = S();
            return this.abs().divRemTo(t, null, e),
            this.s < 0 && e.compareTo(w.ZERO) > 0 && t.subTo(e, e),
              e;
          }
          ,
          w.prototype.modPowInt = function (t, e) {
            var n;
            return n = t < 256 || e.isEven() ? new _(e) : new I(e),
              this.exp(t, n);
          }
          ,
          w.ZERO = k(0),
          w.ONE = k(1),
          H.prototype.convert = L,
          H.prototype.revert = L,
          H.prototype.mulTo = function (t, e, n) {
            t.multiplyTo(e, n);
          }
          ,
          H.prototype.sqrTo = function (t, e) {
            t.squareTo(e);
          }
          ,
          M.prototype.convert = function (t) {
            if (t.s < 0 || t.t > 2 * this.m.t)
              return t.mod(this.m);
            if (t.compareTo(this.m) < 0)
              return t;
            var e = S();
            return t.copyTo(e),
              this.reduce(e),
              e;
          }
          ,
          M.prototype.revert = function (t) {
            return t;
          }
          ,
          M.prototype.reduce = function (t) {
            for (t.drShiftTo(this.m.t - 1, this.r2),
                 t.t > this.m.t + 1 && (t.t = this.m.t + 1,
                   t.clamp()),
                   this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
                   this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0;)
              t.dAddOffset(1, this.m.t + 1);
            for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0;)
              t.subTo(this.m, t);
          }
          ,
          M.prototype.mulTo = function (t, e, n) {
            t.multiplyTo(e, n),
              this.reduce(n);
          }
          ,
          M.prototype.sqrTo = function (t, e) {
            t.squareTo(e),
              this.reduce(e);
          }
        ;
        var U = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997]
          , $ = (1 << 26) / U[U.length - 1];

        /*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
        function V() {
          this.i = 0,
            this.j = 0,
            this.S = new Array;
        }

        w.prototype.chunkSize = function (t) {
          return Math.floor(Math.LN2 * this.DB / Math.log(t));
        }
          ,
          w.prototype.toRadix = function (t) {
            if (null == t && (t = 10),
            0 == this.signum() || t < 2 || t > 36)
              return '0';
            var e = this.chunkSize(t)
              , n = Math.pow(t, e)
              , r = k(n)
              , i = S()
              , o = S()
              , s = '';
            for (this.divRemTo(r, i, o); i.signum() > 0;)
              s = (n + o.intValue()).toString(t).substr(1) + s,
                i.divRemTo(r, i, o);
            return o.intValue().toString(t) + s;
          }
          ,
          w.prototype.fromRadix = function (t, e) {
            this.fromInt(0),
            null == e && (e = 10);
            for (var n = this.chunkSize(e), r = Math.pow(e, n), i = !1, o = 0, s = 0, a = 0; a < t.length; ++a) {
              var u = F(t, a);
              u < 0 ? '-' == t.charAt(a) && 0 == this.signum() && (i = !0) : (s = e * s + u,
              ++o >= n && (this.dMultiply(r),
                this.dAddOffset(s, 0),
                o = 0,
                s = 0));
            }
            o > 0 && (this.dMultiply(Math.pow(e, o)),
              this.dAddOffset(s, 0)),
            i && w.ZERO.subTo(this, this);
          }
          ,
          w.prototype.fromNumber = function (t, e, n) {
            if ('number' == typeof e)
              if (t < 2)
                this.fromInt(1);
              else
                for (this.fromNumber(t, n),
                     this.testBit(t - 1) || this.bitwiseTo(w.ONE.shiftLeft(t - 1), N, this),
                     this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e);)
                  this.dAddOffset(2, 0),
                  this.bitLength() > t && this.subTo(w.ONE.shiftLeft(t - 1), this);
            else {
              var r = new Array
                , i = 7 & t;
              r.length = 1 + (t >> 3),
                e.nextBytes(r),
                i > 0 ? r[0] &= (1 << i) - 1 : r[0] = 0,
                this.fromString(r, 256);
            }
          }
          ,
          w.prototype.bitwiseTo = function (t, e, n) {
            var r, i, o = Math.min(t.t, this.t);
            for (r = 0; r < o; ++r)
              n[r] = e(this[r], t[r]);
            if (t.t < this.t) {
              for (i = t.s & this.DM,
                     r = o; r < this.t; ++r)
                n[r] = e(this[r], i);
              n.t = this.t;
            } else {
              for (i = this.s & this.DM,
                     r = o; r < t.t; ++r)
                n[r] = e(i, t[r]);
              n.t = t.t;
            }
            n.s = e(this.s, t.s),
              n.clamp();
          }
          ,
          w.prototype.changeBit = function (t, e) {
            var n = w.ONE.shiftLeft(t);
            return this.bitwiseTo(n, e, n),
              n;
          }
          ,
          w.prototype.addTo = function (t, e) {
            for (var n = 0, r = 0, i = Math.min(t.t, this.t); n < i;)
              r += this[n] + t[n],
                e[n++] = r & this.DM,
                r >>= this.DB;
            if (t.t < this.t) {
              for (r += t.s; n < this.t;)
                r += this[n],
                  e[n++] = r & this.DM,
                  r >>= this.DB;
              r += this.s;
            } else {
              for (r += this.s; n < t.t;)
                r += t[n],
                  e[n++] = r & this.DM,
                  r >>= this.DB;
              r += t.s;
            }
            e.s = r < 0 ? -1 : 0,
              r > 0 ? e[n++] = r : r < -1 && (e[n++] = this.DV + r),
              e.t = n,
              e.clamp();
          }
          ,
          w.prototype.dMultiply = function (t) {
            this[this.t] = this.am(0, t - 1, this, 0, 0, this.t),
              ++this.t,
              this.clamp();
          }
          ,
          w.prototype.dAddOffset = function (t, e) {
            if (0 != t) {
              for (; this.t <= e;)
                this[this.t++] = 0;
              for (this[e] += t; this[e] >= this.DV;)
                this[e] -= this.DV,
                ++e >= this.t && (this[this.t++] = 0),
                  ++this[e];
            }
          }
          ,
          w.prototype.multiplyLowerTo = function (t, e, n) {
            var r, i = Math.min(this.t + t.t, e);
            for (n.s = 0,
                   n.t = i; i > 0;)
              n[--i] = 0;
            for (r = n.t - this.t; i < r; ++i)
              n[i + this.t] = this.am(0, t[i], n, i, 0, this.t);
            for (r = Math.min(t.t, e); i < r; ++i)
              this.am(0, t[i], n, i, 0, e - i);
            n.clamp();
          }
          ,
          w.prototype.multiplyUpperTo = function (t, e, n) {
            --e;
            var r = n.t = this.t + t.t - e;
            for (n.s = 0; --r >= 0;)
              n[r] = 0;
            for (r = Math.max(e - this.t, 0); r < t.t; ++r)
              n[this.t + r - e] = this.am(e - r, t[r], n, 0, 0, this.t + r - e);
            n.clamp(),
              n.drShiftTo(1, n);
          }
          ,
          w.prototype.modInt = function (t) {
            if (t <= 0)
              return 0;
            var e = this.DV % t
              , n = this.s < 0 ? t - 1 : 0;
            if (this.t > 0)
              if (0 == e)
                n = this[0] % t;
              else
                for (var r = this.t - 1; r >= 0; --r)
                  n = (e * n + this[r]) % t;
            return n;
          }
          ,
          w.prototype.millerRabin = function (t) {
            var e = this.subtract(w.ONE)
              , n = e.getLowestSetBit();
            if (n <= 0)
              return !1;
            var r = e.shiftRight(n);
            (t = t + 1 >> 1) > U.length && (t = U.length);
            for (var i = S(), o = 0; o < t; ++o) {
              i.fromInt(U[Math.floor(Math.random() * U.length)]);
              var s = i.modPow(r, this);
              if (0 != s.compareTo(w.ONE) && 0 != s.compareTo(e)) {
                for (var a = 1; a++ < n && 0 != s.compareTo(e);)
                  if (0 == (s = s.modPowInt(2, this)).compareTo(w.ONE))
                    return !1;
                if (0 != s.compareTo(e))
                  return !1;
              }
            }
            return !0;
          }
          ,
          w.prototype.clone = /*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
            function () {
              var t = S();
              return this.copyTo(t),
                t;
            }
          ,
          w.prototype.intValue = function () {
            if (this.s < 0) {
              if (1 == this.t)
                return this[0] - this.DV;
              if (0 == this.t)
                return -1;
            } else {
              if (1 == this.t)
                return this[0];
              if (0 == this.t)
                return 0;
            }
            return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
          }
          ,
          w.prototype.byteValue = function () {
            return 0 == this.t ? this.s : this[0] << 24 >> 24;
          }
          ,
          w.prototype.shortValue = function () {
            return 0 == this.t ? this.s : this[0] << 16 >> 16;
          }
          ,
          w.prototype.signum = function () {
            return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1;
          }
          ,
          w.prototype.toByteArray = function () {
            var t = this.t
              , e = new Array;
            e[0] = this.s;
            var n, r = this.DB - t * this.DB % 8, i = 0;
            if (t-- > 0)
              for (r < this.DB && (n = this[t] >> r) != (this.s & this.DM) >> r && (e[i++] = n | this.s << this.DB - r); t >= 0;)
                r < 8 ? (n = (this[t] & (1 << r) - 1) << 8 - r,
                  n |= this[--t] >> (r += this.DB - 8)) : (n = this[t] >> (r -= 8) & 255,
                r <= 0 && (r += this.DB,
                  --t)),
                0 != (128 & n) && (n |= -256),
                0 == i && (128 & this.s) != (128 & n) && ++i,
                (i > 0 || n != this.s) && (e[i++] = n);
            return e;
          }
          ,
          w.prototype.equals = function (t) {
            return 0 == this.compareTo(t);
          }
          ,
          w.prototype.min = function (t) {
            return this.compareTo(t) < 0 ? this : t;
          }
          ,
          w.prototype.max = function (t) {
            return this.compareTo(t) > 0 ? this : t;
          }
          ,
          w.prototype.and = function (t) {
            var e = S();
            return this.bitwiseTo(t, D, e),
              e;
          }
          ,
          w.prototype.or = function (t) {
            var e = S();
            return this.bitwiseTo(t, N, e),
              e;
          }
          ,
          w.prototype.xor = function (t) {
            var e = S();
            return this.bitwiseTo(t, O, e),
              e;
          }
          ,
          w.prototype.andNot = function (t) {
            var e = S();
            return this.bitwiseTo(t, R, e),
              e;
          }
          ,
          w.prototype.not = function () {
            for (var t = S(), e = 0; e < this.t; ++e)
              t[e] = this.DM & ~this[e];
            return t.t = this.t,
              t.s = ~this.s,
              t;
          }
          ,
          w.prototype.shiftLeft = function (t) {
            var e = S();
            return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e),
              e;
          }
          ,
          w.prototype.shiftRight = function (t) {
            var e = S();
            return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e),
              e;
          }
          ,
          w.prototype.getLowestSetBit = function () {
            for (var t = 0; t < this.t; ++t)
              if (0 != this[t])
                return t * this.DB + j(this[t]);
            return this.s < 0 ? this.t * this.DB : -1;
          }
          ,
          w.prototype.bitCount = function () {
            for (var t = 0, e = this.s & this.DM, n = 0; n < this.t; ++n)
              t += B(this[n] ^ e);
            return t;
          }
          ,
          w.prototype.testBit = function (t) {
            var e = Math.floor(t / this.DB);
            return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB);
          }
          ,
          w.prototype.setBit = function (t) {
            return this.changeBit(t, N);
          }
          ,
          w.prototype.clearBit = function (t) {
            return this.changeBit(t, R);
          }
          ,
          w.prototype.flipBit = function (t) {
            return this.changeBit(t, O);
          }
          ,
          w.prototype.add = function (t) {
            var e = S();
            return this.addTo(t, e),
              e;
          }
          ,
          w.prototype.subtract = function (t) {
            var e = S();
            return this.subTo(t, e),
              e;
          }
          ,
          w.prototype.multiply = function (t) {
            var e = S();
            return this.multiplyTo(t, e),
              e;
          }
          ,
          w.prototype.divide = function (t) {
            var e = S();
            return this.divRemTo(t, e, null),
              e;
          }
          ,
          w.prototype.remainder = function (t) {
            var e = S();
            return this.divRemTo(t, null, e),
              e;
          }
          ,
          w.prototype.divideAndRemainder = function (t) {
            var e = S()
              , n = S();
            return this.divRemTo(t, e, n),
              new Array(e, n);
          }
          ,
          w.prototype.modPow = function (t, e) {
            var n, r, i = t.bitLength(), o = k(1);
            if (i <= 0)
              return o;
            n = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6,
              r = i < 8 ? new _(e) : e.isEven() ? new M(e) : new I(e);
            var s = new Array
              , a = 3
              , u = n - 1
              , c = (1 << n) - 1;
            if (s[1] = r.convert(this),
            n > 1) {
              var l = S();
              for (r.sqrTo(s[1], l); a <= c;)
                s[a] = S(),
                  r.mulTo(l, s[a - 2], s[a]),
                  a += 2;
            }
            var h, f, p = t.t - 1, d = !0, g = S();
            for (i = T(t[p]) - 1; p >= 0;) {
              for (i >= u ? h = t[p] >> i - u & c : (h = (t[p] & (1 << i + 1) - 1) << u - i,
              p > 0 && (h |= t[p - 1] >> this.DB + i - u)),
                     a = n; 0 == (1 & h);)
                h >>= 1,
                  --a;
              if ((i -= a) < 0 && (i += this.DB,
                --p),
                d)
                s[h].copyTo(o),
                  d = !1;
              else {
                for (; a > 1;)
                  r.sqrTo(o, g),
                    r.sqrTo(g, o),
                    a -= 2;
                a > 0 ? r.sqrTo(o, g) : (f = o,
                  o = g,
                  g = f),
                  r.mulTo(g, s[h], o);
              }
              for (; p >= 0 && 0 == (t[p] & 1 << i);)
                r.sqrTo(o, g),
                  f = o,
                  o = g,
                  g = f,
                --i < 0 && (i = this.DB - 1,
                  --p);
            }
            return r.revert(o);
          }
          ,
          w.prototype.modInverse = function (t) {
            var e = t.isEven();
            if (this.isEven() && e || 0 == t.signum())
              return w.ZERO;
            for (var n = t.clone(), r = this.clone(), i = k(1), o = k(0), s = k(0), a = k(1); 0 != n.signum();) {
              for (; n.isEven();)
                n.rShiftTo(1, n),
                  e ? (i.isEven() && o.isEven() || (i.addTo(this, i),
                    o.subTo(t, o)),
                    i.rShiftTo(1, i)) : o.isEven() || o.subTo(t, o),
                  o.rShiftTo(1, o);
              for (; r.isEven();)
                r.rShiftTo(1, r),
                  e ? (s.isEven() && a.isEven() || (s.addTo(this, s),
                    a.subTo(t, a)),
                    s.rShiftTo(1, s)) : a.isEven() || a.subTo(t, a),
                  a.rShiftTo(1, a);
              n.compareTo(r) >= 0 ? (n.subTo(r, n),
              e && i.subTo(s, i),
                o.subTo(a, o)) : (r.subTo(n, r),
              e && s.subTo(i, s),
                a.subTo(o, a));
            }
            return 0 != r.compareTo(w.ONE) ? w.ZERO : a.compareTo(t) >= 0 ? a.subtract(t) : a.signum() < 0 ? (a.addTo(t, a),
              a.signum() < 0 ? a.add(t) : a) : a;
          }
          ,
          w.prototype.pow = function (t) {
            return this.exp(t, new H);
          }
          ,
          w.prototype.gcd = function (t) {
            var e = this.s < 0 ? this.negate() : this.clone()
              , n = t.s < 0 ? t.negate() : t.clone();
            if (e.compareTo(n) < 0) {
              var r = e;
              e = n,
                n = r;
            }
            var i = e.getLowestSetBit()
              , o = n.getLowestSetBit();
            if (o < 0)
              return e;
            for (i < o && (o = i),
                 o > 0 && (e.rShiftTo(o, e),
                   n.rShiftTo(o, n)); e.signum() > 0;)
              (i = e.getLowestSetBit()) > 0 && e.rShiftTo(i, e),
              (i = n.getLowestSetBit()) > 0 && n.rShiftTo(i, n),
                e.compareTo(n) >= 0 ? (e.subTo(n, e),
                  e.rShiftTo(1, e)) : (n.subTo(e, n),
                  n.rShiftTo(1, n));
            return o > 0 && n.lShiftTo(o, n),
              n;
          }
          ,
          w.prototype.isProbablePrime = function (t) {
            var e, n = this.abs();
            if (1 == n.t && n[0] <= U[U.length - 1]) {
              for (e = 0; e < U.length; ++e)
                if (n[0] == U[e])
                  return !0;
              return !1;
            }
            if (n.isEven())
              return !1;
            for (e = 1; e < U.length;) {
              for (var r = U[e], i = e + 1; i < U.length && r < $;)
                r *= U[i++];
              for (r = n.modInt(r); e < i;)
                if (r % U[e++] == 0)
                  return !1;
            }
            return n.millerRabin(t);
          }
          ,
          w.prototype.square = function () {
            var t = S();
            return this.squareTo(t),
              t;
          }
          ,
          V.prototype.init = function (t) {
            var e, n, r;
            for (e = 0; e < 256; ++e)
              this.S[e] = e;
            for (n = 0,
                   e = 0; e < 256; ++e)
              n = n + this.S[e] + t[e % t.length] & 255,
                r = this.S[e],
                this.S[e] = this.S[n],
                this.S[n] = r;
            this.i = 0,
              this.j = 0;
          }
          ,
          V.prototype.next = function () {
            var t;
            return this.i = this.i + 1 & 255,
              this.j = this.j + this.S[this.i] & 255,
              t = this.S[this.i],
              this.S[this.i] = this.S[this.j],
              this.S[this.j] = t,
              this.S[t + this.S[this.i] & 255];
          }
        ;
        var q, K, G;

        /*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
        function z() {
          !function (t) {
            K[G++] ^= 255 & t,
              K[G++] ^= t >> 8 & 255,
              K[G++] ^= t >> 16 & 255,
              K[G++] ^= t >> 24 & 255,
            G >= 256 && (G -= 256);
          }((new Date).getTime());
        }

        if (null == K) {
          var W;
          if (K = new Array,
            G = 0,
          void 0 !== d && (void 0 !== d.crypto || void 0 !== d.msCrypto)) {
            var Y = d.crypto || d.msCrypto;
            if (Y.getRandomValues) {
              var X = new Uint8Array(32);
              for (Y.getRandomValues(X),
                     W = 0; W < 32; ++W)
                K[G++] = X[W];
            } else if ('Netscape' == p.appName && p.appVersion < '5') {
              var J = d.crypto.random(32);
              for (W = 0; W < J.length; ++W)
                K[G++] = 255 & J.charCodeAt(W);
            }
          }
          for (; G < 256;)
            W = Math.floor(65536 * Math.random()),
              K[G++] = W >>> 8,
              K[G++] = 255 & W;
          G = 0,
            z();
        }

        function Q() {
          if (null == q) {
            for (z(),
                   (q = new V).init(K),
                   G = 0; G < K.length; ++G)
              K[G] = 0;
            G = 0;
          }
          return q.next();
        }

        function Z() {
        }

        /*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
        function tt(t, e) {
          return new w(t, e);
        }

        function et(t, e, n) {
          for (var r = '', i = 0; r.length < e;)
            r += n(String.fromCharCode.apply(String, t.concat([(4278190080 & i) >> 24, (16711680 & i) >> 16, (65280 & i) >> 8, 255 & i]))),
              i += 1;
          return r;
        }

        function nt() {
          this.n = null,
            this.e = 0,
            this.d = null,
            this.p = null,
            this.q = null,
            this.dmp1 = null,
            this.dmq1 = null,
            this.coeff = null;
        }

        function rt(t, e, n) {
          for (var r = '', i = 0; r.length < e;)
            r += n(t + String.fromCharCode.apply(String, [(4278190080 & i) >> 24, (16711680 & i) >> 16, (65280 & i) >> 8, 255 & i])),
              i += 1;
          return r;
        }

        /*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
        function it(t, e) {
          this.x = e,
            this.q = t;
        }

        function ot(t, e, n, r) {
          this.curve = t,
            this.x = e,
            this.y = n,
            this.z = null == r ? w.ONE : r,
            this.zinv = null;
        }

        function st(t, e, n) {
          this.q = t,
            this.a = this.fromBigInteger(e),
            this.b = this.fromBigInteger(n),
            this.infinity = new ot(this, null, null);
        }

        Z.prototype.nextBytes = function (t) {
          var e;
          for (e = 0; e < t.length; ++e)
            t[e] = Q();
        }
          ,
          nt.prototype.doPublic = function (t) {
            return t.modPowInt(this.e, this.n);
          }
          ,
          nt.prototype.setPublic = function (t, e) {
            if (this.isPublic = !0,
              this.isPrivate = !1,
            'string' != typeof t)
              this.n = t,
                this.e = e;
            else {
              if (!(null != t && null != e && t.length > 0 && e.length > 0))
                throw 'Invalid RSA public key';
              this.n = tt(t, 16),
                this.e = parseInt(e, 16);
            }
          }
          ,
          nt.prototype.encrypt = function (t) {
            var e = function (t, e) {
              if (e < t.length + 11)
                throw 'Message too long for RSA';
              for (var n = new Array, r = t.length - 1; r >= 0 && e > 0;) {
                var i = t.charCodeAt(r--);
                i < 128 ? n[--e] = i : i > 127 && i < 2048 ? (n[--e] = 63 & i | 128,
                  n[--e] = i >> 6 | 192) : (n[--e] = 63 & i | 128,
                  n[--e] = i >> 6 & 63 | 128,
                  n[--e] = i >> 12 | 224);
              }
              n[--e] = 0;
              for (var o = new Z, s = new Array; e > 2;) {
                for (s[0] = 0; 0 == s[0];)
                  o.nextBytes(s);
                n[--e] = s[0];
              }
              return n[--e] = 2,
                n[--e] = 0,
                new w(n);
            }(t, this.n.bitLength() + 7 >> 3);
            if (null == e)
              return null;
            var n = this.doPublic(e);
            if (null == n)
              return null;
            var r = n.toString(16);
            return 0 == (1 & r.length) ? r : '0' + r;
          }
          ,
          nt.prototype.encryptOAEP = function (t, e, n) {
            var r = this.n.bitLength() + 7 >> 3
              , i = function (t, e, n, r) {
              var i = ut.crypto.MessageDigest
                , o = ut.crypto.Util
                , s = null;
              if (n || (n = 'sha1'),
              'string' == typeof n && (s = i.getCanonicalAlgName(n),
                  r = i.getHashLength(s),
                  n = function (t) {
                    return Et(o.hashHex(At(t), s));
                  }
              ),
              t.length + 2 * r + 2 > e)
                throw 'Message too long for RSA';
              var a, u = '';
              for (a = 0; a < e - t.length - 2 * r - 2; a += 1)
                u += '\0';
              var c = n('') + u + '' + t
                , l = new Array(r);
              (new Z).nextBytes(l);
              var h = et(l, c.length, n)
                , f = [];
              for (a = 0; a < c.length; a += 1)
                f[a] = c.charCodeAt(a) ^ h.charCodeAt(a);
              var p = et(f, l.length, n)
                , d = [0];
              for (a = 0; a < l.length; a += 1)
                d[a + 1] = l[a] ^ p.charCodeAt(a);
              return new w(d.concat(f));
            }(t, r, e, n);
            if (null == i)
              return null;
            var o = this.doPublic(i);
            if (null == o)
              return null;
            for (var s = o.toString(16); s.length < 2 * r;)
              s = '0' + s;
            return s;
          }
          ,
          nt.prototype.type = 'RSA',
          nt.prototype.doPrivate = function (t) {
            if (null == this.p || null == this.q)
              return t.modPow(this.d, this.n);
            for (var e = t.mod(this.p).modPow(this.dmp1, this.p), n = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(n) < 0;)
              e = e.add(this.p);
            return e.subtract(n).multiply(this.coeff).mod(this.p).multiply(this.q).add(n);
          }
          ,
          nt.prototype.setPrivate = function (t, e, n) {
            if (this.isPrivate = !0,
            'string' != typeof t)
              this.n = t,
                this.e = e,
                this.d = n;
            else {
              if (!(null != t && null != e && t.length > 0 && e.length > 0))
                throw 'Invalid RSA private key';
              this.n = tt(t, 16),
                this.e = parseInt(e, 16),
                this.d = tt(n, 16);
            }
          }
          ,
          nt.prototype.setPrivateEx = function (t, e, n, r, i, o, s, a) {
            if (this.isPrivate = !0,
              this.isPublic = !1,
            null == t)
              throw 'RSASetPrivateEx N == null';
            if (null == e)
              throw 'RSASetPrivateEx E == null';
            if (0 == t.length)
              throw 'RSASetPrivateEx N.length == 0';
            if (0 == e.length)
              throw 'RSASetPrivateEx E.length == 0';
            if (!(null != t && null != e && t.length > 0 && e.length > 0))
              throw 'Invalid RSA private key in RSASetPrivateEx';
            this.n = tt(t, 16),
              this.e = parseInt(e, 16),
              this.d = tt(n, 16),
              this.p = tt(r, 16),
              this.q = tt(i, 16),
              this.dmp1 = tt(o, 16),
              this.dmq1 = tt(s, 16),
              this.coeff = tt(a, 16);
          }
          ,
          nt.prototype.generate = function (t, e) {
            var n = new Z
              , r = t >> 1;
            this.e = parseInt(e, 16);
            for (var i = new w(e, 16), o = t / 2 - 100, s = w.ONE.shiftLeft(o); ;) {
              for (; this.p = new w(t - r, 1, n),
                     0 != this.p.subtract(w.ONE).gcd(i).compareTo(w.ONE) || !this.p.isProbablePrime(10);)
                ;
              for (; this.q = new w(r, 1, n),
                     0 != this.q.subtract(w.ONE).gcd(i).compareTo(w.ONE) || !this.q.isProbablePrime(10);)
                ;
              if (this.p.compareTo(this.q) <= 0) {
                var a = this.p;
                this.p = this.q,
                  this.q = a;
              }
              var u = this.q.subtract(this.p).abs();
              if (!(u.bitLength() < o || u.compareTo(s) <= 0)) {
                var c = this.p.subtract(w.ONE)
                  , l = this.q.subtract(w.ONE)
                  , h = c.multiply(l);
                if (0 == h.gcd(i).compareTo(w.ONE) && (this.n = this.p.multiply(this.q),
                this.n.bitLength() == t)) {
                  this.d = i.modInverse(h),
                    this.dmp1 = this.d.mod(c),
                    this.dmq1 = this.d.mod(l),
                    this.coeff = this.q.modInverse(this.p);
                  break;
                }
              }
            }
            this.isPrivate = !0;
          }
          ,
          nt.prototype.decrypt = function (t) {
            if (t.length != Math.ceil(this.n.bitLength() / 4))
              throw new Error('wrong ctext length');
            var e = tt(t, 16)
              , n = this.doPrivate(e);
            return null == n ? null : /*! (c) Tom Wu, Kenji Urushima | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
              function (t, e) {
                for (var n = t.toByteArray(), r = 0; r < n.length && 0 == n[r];)
                  ++r;
                if (n.length - r != e - 1 || 2 != n[r])
                  return null;
                for (++r; 0 != n[r];)
                  if (++r >= n.length)
                    return null;
                for (var i = ''; ++r < n.length;) {
                  var o = 255 & n[r];
                  o < 128 ? i += String.fromCharCode(o) : o > 191 && o < 224 ? (i += String.fromCharCode((31 & o) << 6 | 63 & n[r + 1]),
                    ++r) : (i += String.fromCharCode((15 & o) << 12 | (63 & n[r + 1]) << 6 | 63 & n[r + 2]),
                    r += 2);
                }
                return i;
              }(n, this.n.bitLength() + 7 >> 3);
          }
          ,
          nt.prototype.decryptOAEP = function (t, e, n) {
            if (t.length != Math.ceil(this.n.bitLength() / 4))
              throw new Error('wrong ctext length');
            var r = tt(t, 16)
              , i = this.doPrivate(r);
            return null == i ? null : function (t, e, n, r) {
              var i = ut.crypto.MessageDigest
                , o = ut.crypto.Util
                , s = null;
              for (n || (n = 'sha1'),
                   'string' == typeof n && (s = i.getCanonicalAlgName(n),
                       r = i.getHashLength(s),
                       n = function (t) {
                         return Et(o.hashHex(At(t), s));
                       }
                   ),
                     t = t.toByteArray(),
                     a = 0; a < t.length; a += 1)
                t[a] &= 255;
              for (; t.length < e;)
                t.unshift(0);
              if ((t = String.fromCharCode.apply(String, t)).length < 2 * r + 2)
                throw 'Cipher too short';
              var a, u = t.substr(1, r), c = t.substr(r + 1), l = rt(c, r, n), h = [];
              for (a = 0; a < u.length; a += 1)
                h[a] = u.charCodeAt(a) ^ l.charCodeAt(a);
              var f = rt(String.fromCharCode.apply(String, h), t.length - r, n)
                , p = [];
              for (a = 0; a < c.length; a += 1)
                p[a] = c.charCodeAt(a) ^ f.charCodeAt(a);
              if ((p = String.fromCharCode.apply(String, p)).substr(0, r) !== n(''))
                throw 'Hash mismatch';
              var d = (p = p.substr(r)).indexOf('');
              if ((-1 != d ? p.substr(0, d).lastIndexOf('\0') : -1) + 1 != d)
                throw 'Malformed data';
              return p.substr(d + 1);
            }(i, this.n.bitLength() + 7 >> 3, e, n);
          }
          ,
          it.prototype.equals = function (t) {
            return t == this || this.q.equals(t.q) && this.x.equals(t.x);
          }
          ,
          it.prototype.toBigInteger = function () {
            return this.x;
          }
          ,
          it.prototype.negate = function () {
            return new it(this.q, this.x.negate().mod(this.q));
          }
          ,
          it.prototype.add = function (t) {
            return new it(this.q, this.x.add(t.toBigInteger()).mod(this.q));
          }
          ,
          it.prototype.subtract = function (t) {
            return new it(this.q, this.x.subtract(t.toBigInteger()).mod(this.q));
          }
          ,
          it.prototype.multiply = function (t) {
            return new it(this.q, this.x.multiply(t.toBigInteger()).mod(this.q));
          }
          ,
          it.prototype.square = function () {
            return new it(this.q, this.x.square().mod(this.q));
          }
          ,
          it.prototype.divide = function (t) {
            return new it(this.q, this.x.multiply(t.toBigInteger().modInverse(this.q)).mod(this.q));
          }
          ,
          it.prototype.sqrt = function () {
            return new it(this.q, this.x.sqrt().mod(this.q));
          }
          ,
          ot.prototype.getX = function () {
            return null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q)),
              this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q));
          }
          ,
          ot.prototype.getY = function () {
            return null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q)),
              this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q));
          }
          ,
          ot.prototype.equals = function (t) {
            return t == this || (this.isInfinity() ? t.isInfinity() : t.isInfinity() ? this.isInfinity() : !!t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(w.ZERO) && t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(w.ZERO));
          }
          ,
          ot.prototype.isInfinity = function () {
            return null == this.x && null == this.y || this.z.equals(w.ZERO) && !this.y.toBigInteger().equals(w.ZERO);
          }
          ,
          ot.prototype.negate = function () {
            return new ot(this.curve, this.x, this.y.negate(), this.z);
          }
          ,
          ot.prototype.add = function (t) {
            if (this.isInfinity())
              return t;
            if (t.isInfinity())
              return this;
            var e = t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q)
              , n = t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q);
            if (w.ZERO.equals(n))
              return w.ZERO.equals(e) ? this.twice() : this.curve.getInfinity();
            var r = new w('3')
              , i = this.x.toBigInteger()
              , o = this.y.toBigInteger()
              , s = (t.x.toBigInteger(),
                t.y.toBigInteger(),
                n.square())
              , a = s.multiply(n)
              , u = i.multiply(s)
              , c = e.square().multiply(this.z)
              , l = c.subtract(u.shiftLeft(1)).multiply(t.z).subtract(a).multiply(n).mod(this.curve.q)
              ,
              h = u.multiply(r).multiply(e).subtract(o.multiply(a)).subtract(c.multiply(e)).multiply(t.z).add(e.multiply(a)).mod(this.curve.q)
              , f = a.multiply(this.z).multiply(t.z).mod(this.curve.q);
            return new ot(this.curve, this.curve.fromBigInteger(l), this.curve.fromBigInteger(h), f);
          }
          ,
          ot.prototype.twice = function () {
            if (this.isInfinity())
              return this;
            if (0 == this.y.toBigInteger().signum())
              return this.curve.getInfinity();
            var t = new w('3')
              , e = this.x.toBigInteger()
              , n = this.y.toBigInteger()
              , r = n.multiply(this.z)
              , i = r.multiply(n).mod(this.curve.q)
              , o = this.curve.a.toBigInteger()
              , s = e.square().multiply(t);
            w.ZERO.equals(o) || (s = s.add(this.z.square().multiply(o)));
            var a = (s = s.mod(this.curve.q)).square().subtract(e.shiftLeft(3).multiply(i)).shiftLeft(1).multiply(r).mod(this.curve.q)
              ,
              u = s.multiply(t).multiply(e).subtract(i.shiftLeft(1)).shiftLeft(2).multiply(i).subtract(s.square().multiply(s)).mod(this.curve.q)
              , c = r.square().multiply(r).shiftLeft(3).mod(this.curve.q);
            return new ot(this.curve, this.curve.fromBigInteger(a), this.curve.fromBigInteger(u), c);
          }
          ,
          ot.prototype.multiply = function (t) {
            if (this.isInfinity())
              return this;
            if (0 == t.signum())
              return this.curve.getInfinity();
            var e, n = t, r = n.multiply(new w('3')), i = this.negate(), o = this, s = this.curve.q.subtract(t),
              a = s.multiply(new w('3')), u = new ot(this.curve, this.x, this.y), c = u.negate();
            for (e = r.bitLength() - 2; e > 0; --e) {
              o = o.twice();
              var l = r.testBit(e);
              l != n.testBit(e) && (o = o.add(l ? this : i));
            }
            for (e = a.bitLength() - 2; e > 0; --e) {
              u = u.twice();
              var h = a.testBit(e);
              h != s.testBit(e) && (u = u.add(h ? u : c));
            }
            return o;
          }
          ,
          ot.prototype.multiplyTwo = function (t, e, n) {
            var r;
            r = t.bitLength() > n.bitLength() ? t.bitLength() - 1 : n.bitLength() - 1;
            for (var i = this.curve.getInfinity(), o = this.add(e); r >= 0;)
              i = i.twice(),
                t.testBit(r) ? i = n.testBit(r) ? i.add(o) : i.add(this) : n.testBit(r) && (i = i.add(e)),
                --r;
            return i;
          }
          ,
          st.prototype.getQ = function () {
            return this.q;
          }
          ,
          st.prototype.getA = function () {
            return this.a;
          }
          ,
          st.prototype.getB = function () {
            return this.b;
          }
          ,
          st.prototype.equals = function (t) {
            return t == this || this.q.equals(t.q) && this.a.equals(t.a) && this.b.equals(t.b);
          }
          ,
          st.prototype.getInfinity = function () {
            return this.infinity;
          }
          ,
          st.prototype.fromBigInteger = function (t) {
            return new it(this.q, t);
          }
          ,
          st.prototype.decodePointHex = function (t) {
            switch (parseInt(t.substr(0, 2), 16)) {
              case 0:
                return this.infinity;
              case 2:
              case 3:
                var e = t.substr(0, 2)
                  , n = (t.substr(2),
                  this.fromBigInteger(new w(a, 16)))
                  , r = this.getA()
                  , i = this.getB()
                  , o = n.square().add(r).multiply(n).add(i).sqrt();
                return '03' == e && (o = o.negate()),
                  new ot(this, n, o);
              case 4:
              case 6:
              case 7:
                var s = (t.length - 2) / 2
                  , a = t.substr(2, s)
                  , u = t.substr(s + 2, s);
                return new ot(this, this.fromBigInteger(new w(a, 16)), this.fromBigInteger(new w(u, 16)));
              default:
                return null;
            }
          }
          ,
          /*! (c) Stefan Thomas | https://github.com/bitcoinjs/bitcoinjs-lib
 */
          it.prototype.getByteLength = function () {
            return Math.floor((this.toBigInteger().bitLength() + 7) / 8);
          }
          ,
          ot.prototype.getEncoded = function (t) {
            var e = function (t, e) {
              var n = t.toByteArrayUnsigned();
              if (e < n.length)
                n = n.slice(n.length - e);
              else
                for (; e > n.length;)
                  n.unshift(0);
              return n;
            }
              , n = this.getX().toBigInteger()
              , r = this.getY().toBigInteger()
              , i = e(n, 32);
            return t ? r.isEven() ? i.unshift(2) : i.unshift(3) : (i.unshift(4),
              i = i.concat(e(r, 32))),
              i;
          }
          ,
          ot.decodeFrom = function (t, e) {
            e[0];
            var n = e.length - 1
              , r = e.slice(1, 1 + n / 2)
              , i = e.slice(1 + n / 2, 1 + n);
            r.unshift(0),
              i.unshift(0);
            var o = new w(r)
              , s = new w(i);
            return new ot(t, t.fromBigInteger(o), t.fromBigInteger(s));
          }
          ,
          ot.decodeFromHex = function (t, e) {
            e.substr(0, 2);
            var n = e.length - 2
              , r = e.substr(2, n / 2)
              , i = e.substr(2 + n / 2, n / 2)
              , o = new w(r, 16)
              , s = new w(i, 16);
            return new ot(t, t.fromBigInteger(o), t.fromBigInteger(s));
          }
          ,
          ot.prototype.add2D = function (t) {
            if (this.isInfinity())
              return t;
            if (t.isInfinity())
              return this;
            if (this.x.equals(t.x))
              return this.y.equals(t.y) ? this.twice() : this.curve.getInfinity();
            var e = t.x.subtract(this.x)
              , n = t.y.subtract(this.y).divide(e)
              , r = n.square().subtract(this.x).subtract(t.x)
              , i = n.multiply(this.x.subtract(r)).subtract(this.y);
            return new ot(this.curve, r, i);
          }
          ,
          ot.prototype.twice2D = function () {
            if (this.isInfinity())
              return this;
            if (0 == this.y.toBigInteger().signum())
              return this.curve.getInfinity();
            var t = this.curve.fromBigInteger(w.valueOf(2))
              , e = this.curve.fromBigInteger(w.valueOf(3))
              , n = this.x.square().multiply(e).add(this.curve.a).divide(this.y.multiply(t))
              , r = n.square().subtract(this.x.multiply(t))
              , i = n.multiply(this.x.subtract(r)).subtract(this.y);
            return new ot(this.curve, r, i);
          }
          ,
          ot.prototype.multiply2D = function (t) {
            if (this.isInfinity())
              return this;
            if (0 == t.signum())
              return this.curve.getInfinity();
            var e, n = t, r = n.multiply(new w('3')), i = this.negate(), o = this;
            for (e = r.bitLength() - 2; e > 0; --e) {
              o = o.twice();
              var s = r.testBit(e);
              s != n.testBit(e) && (o = o.add2D(s ? this : i));
            }
            return o;
          }
          ,
          ot.prototype.isOnCurve = function () {
            var t = this.getX().toBigInteger()
              , e = this.getY().toBigInteger()
              , n = this.curve.getA().toBigInteger()
              , r = this.curve.getB().toBigInteger()
              , i = this.curve.getQ()
              , o = e.multiply(e).mod(i)
              , s = t.multiply(t).multiply(t).add(n.multiply(t)).add(r).mod(i);
            return o.equals(s);
          }
          ,
          ot.prototype.toString = function () {
            return '(' + this.getX().toBigInteger().toString() + ',' + this.getY().toBigInteger().toString() + ')';
          }
          ,
          ot.prototype.validate = function () {
            var t = this.curve.getQ();
            if (this.isInfinity())
              throw new Error('Point is at infinity.');
            var e = this.getX().toBigInteger()
              , n = this.getY().toBigInteger();
            if (e.compareTo(w.ONE) < 0 || e.compareTo(t.subtract(w.ONE)) > 0)
              throw new Error('x coordinate out of bounds');
            if (n.compareTo(w.ONE) < 0 || n.compareTo(t.subtract(w.ONE)) > 0)
              throw new Error('y coordinate out of bounds');
            if (!this.isOnCurve())
              throw new Error('Point is not on the curve.');
            if (this.multiply(t).isInfinity())
              throw new Error('Point is not a scalar multiple of G.');
            return !0;
          }
        ;
        /*! Mike Samuel (c) 2009 | code.google.com/p/json-sans-eval
 */
        var at = function () {
          var t = new RegExp('(?:false|true|null|[\\{\\}\\[\\]]|(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)|(?:"(?:[^\\0-\\x08\\x0a-\\x1f"\\\\]|\\\\(?:["/\\\\bfnrt]|u[0-9A-Fa-f]{4}))*"))', 'g')
            , e = new RegExp('\\\\(?:([^u])|u(.{4}))', 'g')
            , n = {
            '"': '"',
            '/': '/',
            '\\': '\\',
            b: '\b',
            f: '\f',
            n: '\n',
            r: '\r',
            t: '\t'
          };

          function r(t, e, r) {
            return e ? n[e] : String.fromCharCode(parseInt(r, 16));
          }

          var i = new String('')
            , o = Object.hasOwnProperty;
          return function (n, s) {
            var a, u, c = n.match(t), l = c[0], h = !1;
            '{' === l ? a = {} : '[' === l ? a = [] : (a = [],
              h = !0);
            for (var f = [a], p = 1 - h, d = c.length; p < d; ++p) {
              var g;
              switch ((l = c[p]).charCodeAt(0)) {
                default:
                  (g = f[0])[u || g.length] = +l,
                    u = void 0;
                  break;
                case 34:
                  if (-1 !== (l = l.substring(1, l.length - 1)).indexOf('\\') && (l = l.replace(e, r)),
                    g = f[0],
                    !u) {
                    if (!(g instanceof Array)) {
                      u = l || i;
                      break;
                    }
                    u = g.length;
                  }
                  g[u] = l,
                    u = void 0;
                  break;
                case 91:
                  g = f[0],
                    f.unshift(g[u || g.length] = []),
                    u = void 0;
                  break;
                case 93:
                  f.shift();
                  break;
                case 102:
                  (g = f[0])[u || g.length] = !1,
                    u = void 0;
                  break;
                case 110:
                  (g = f[0])[u || g.length] = null,
                    u = void 0;
                  break;
                case 116:
                  (g = f[0])[u || g.length] = !0,
                    u = void 0;
                  break;
                case 123:
                  g = f[0],
                    f.unshift(g[u || g.length] = {}),
                    u = void 0;
                  break;
                case 125:
                  f.shift();
              }
            }
            if (h) {
              if (1 !== f.length)
                throw new Error;
              a = a[0];
            } else if (f.length)
              throw new Error;
            if (s) {
              var v = function (t, e) {
                var n = t[e];
                if (n && 'object' == typeof n) {
                  var r = null;
                  for (var i in n)
                    if (o.call(n, i) && n !== t) {
                      var a = v(n, i);
                      void 0 !== a ? n[i] = a : (r || (r = []),
                        r.push(i));
                    }
                  if (r)
                    for (var u = r.length; --u >= 0;)
                      delete n[r[u]];
                }
                return s.call(t, e, n);
              };
              a = v({
                '': a
              }, '');
            }
            return a;
          };
        }();
        void 0 !== ut && ut || (ut = {}),
        void 0 !== ut.asn1 && ut.asn1 || (ut.asn1 = {}),
          ut.asn1.ASN1Util = new function () {
            this.integerToByteHex = function (t) {
              var e = t.toString(16);
              return e.length % 2 == 1 && (e = '0' + e),
                e;
            }
              ,
              this.bigIntToMinTwosComplementsHex = function (t) {
                return Yt(t);
              }
              ,
              this.getPEMStringFromHex = function (t, e) {
                return kt(t, e);
              }
              ,
              this.newObject = function (t) {
                var e = ut.asn1
                  , n = e.ASN1Object
                  , r = e.DERBoolean
                  , i = e.DERInteger
                  , o = e.DERBitString
                  , s = e.DEROctetString
                  , a = e.DERNull
                  , u = e.DERObjectIdentifier
                  , c = e.DEREnumerated
                  , l = e.DERUTF8String
                  , h = e.DERNumericString
                  , f = e.DERPrintableString
                  , p = e.DERTeletexString
                  , d = e.DERIA5String
                  , g = e.DERUTCTime
                  , v = e.DERGeneralizedTime
                  , m = e.DERVisibleString
                  , y = e.DERBMPString
                  , b = e.DERSequence
                  , x = e.DERSet
                  , w = e.DERTaggedObject
                  , S = e.ASN1Util.newObject;
                if (t instanceof e.ASN1Object)
                  return t;
                var E = Object.keys(t);
                if (1 != E.length)
                  throw new Error('key of param shall be only one.');
                var A = E[0];
                if (-1 == ':asn1:bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:visstr:bmpstr:seq:set:tag:'.indexOf(':' + A + ':'))
                  throw new Error('undefined key: ' + A);
                if ('bool' == A)
                  return new r(t[A]);
                if ('int' == A)
                  return new i(t[A]);
                if ('bitstr' == A)
                  return new o(t[A]);
                if ('octstr' == A)
                  return new s(t[A]);
                if ('null' == A)
                  return new a(t[A]);
                if ('oid' == A)
                  return new u(t[A]);
                if ('enum' == A)
                  return new c(t[A]);
                if ('utf8str' == A)
                  return new l(t[A]);
                if ('numstr' == A)
                  return new h(t[A]);
                if ('prnstr' == A)
                  return new f(t[A]);
                if ('telstr' == A)
                  return new p(t[A]);
                if ('ia5str' == A)
                  return new d(t[A]);
                if ('utctime' == A)
                  return new g(t[A]);
                if ('gentime' == A)
                  return new v(t[A]);
                if ('visstr' == A)
                  return new m(t[A]);
                if ('bmpstr' == A)
                  return new y(t[A]);
                if ('asn1' == A)
                  return new n(t[A]);
                if ('seq' == A) {
                  for (var C = t[A], P = [], F = 0; F < C.length; F++) {
                    var k = S(C[F]);
                    P.push(k);
                  }
                  return new b({
                    array: P
                  });
                }
                if ('set' == A) {
                  for (C = t[A],
                         P = [],
                         F = 0; F < C.length; F++) {
                    k = S(C[F]);
                    P.push(k);
                  }
                  return new x({
                    array: P
                  });
                }
                if ('tag' == A) {
                  var T = t[A];
                  if ('[object Array]' === Object.prototype.toString.call(T) && 3 == T.length) {
                    var _ = S(T[2]);
                    return new w({
                      tag: T[0],
                      explicit: T[1],
                      obj: _
                    });
                  }
                  return new w(T);
                }
              }
              ,
              this.jsonToASN1HEX = function (t) {
                return this.newObject(t).tohex();
              };
          }
          ,
          ut.asn1.ASN1Util.oidHexToInt = function (t) {
            for (var e = '', n = parseInt(t.substr(0, 2), 16), r = (e = Math.floor(n / 40) + '.' + n % 40,
              ''), i = 2; i < t.length; i += 2) {
              var o = ('00000000' + parseInt(t.substr(i, 2), 16).toString(2)).slice(-8);
              if (r += o.substr(1, 7),
              '0' == o.substr(0, 1))
                e = e + '.' + new w(r, 2).toString(10),
                  r = '';
            }
            return e;
          }
          ,
          ut.asn1.ASN1Util.oidIntToHex = function (t) {
            var e = function (t) {
              var e = t.toString(16);
              return 1 == e.length && (e = '0' + e),
                e;
            }
              , n = function (t) {
              var n = ''
                , r = new w(t, 10).toString(2)
                , i = 7 - r.length % 7;
              7 == i && (i = 0);
              for (var o = '', s = 0; s < i; s++)
                o += '0';
              r = o + r;
              for (s = 0; s < r.length - 1; s += 7) {
                var a = r.substr(s, 7);
                s != r.length - 7 && (a = '1' + a),
                  n += e(parseInt(a, 2));
              }
              return n;
            };
            if (!t.match(/^[0-9.]+$/))
              throw 'malformed oid string: ' + t;
            var r = ''
              , i = t.split('.')
              , o = 40 * parseInt(i[0]) + parseInt(i[1]);
            r += e(o),
              i.splice(0, 2);
            for (var s = 0; s < i.length; s++)
              r += n(i[s]);
            return r;
          }
          ,
          ut.asn1.ASN1Object = function (t) {
            this.params = null,
              this.getLengthHexFromValue = function () {
                if (void 0 === this.hV || null == this.hV)
                  throw new Error('this.hV is null or undefined');
                if (this.hV.length % 2 == 1)
                  throw new Error('value hex must be even length: n=' + ''.length + ',v=' + this.hV);
                var t = this.hV.length / 2
                  , e = t.toString(16);
                if (e.length % 2 == 1 && (e = '0' + e),
                t < 128)
                  return e;
                var n = e.length / 2;
                if (n > 15)
                  throw new Error('ASN.1 length too long to represent by 8x: n = ' + t.toString(16));
                return (128 + n).toString(16) + e;
              }
              ,
              this.tohex = function () {
                return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(),
                  this.hL = this.getLengthHexFromValue(),
                  this.hTLV = this.hT + this.hL + this.hV,
                  this.isModified = !1),
                  this.hTLV;
              }
              ,
              this.getEncodedHex = function () {
                return this.tohex();
              }
              ,
              this.getValueHex = function () {
                return this.tohex(),
                  this.hV;
              }
              ,
              this.getFreshValueHex = function () {
                return '';
              }
              ,
              this.setByParam = function (t) {
                this.params = t;
              }
              ,
            null != t && null != t.tlv && (this.hTLV = t.tlv,
              this.isModified = !1);
          }
          ,
          ut.asn1.DERAbstractString = function (t) {
            ut.asn1.DERAbstractString.superclass.constructor.call(this);
            this.getString = function () {
              return this.s;
            }
              ,
              this.setString = function (t) {
                this.hTLV = null,
                  this.isModified = !0,
                  this.s = t,
                  this.hV = xt(this.s).toLowerCase();
              }
              ,
              this.setStringHex = function (t) {
                this.hTLV = null,
                  this.isModified = !0,
                  this.s = null,
                  this.hV = t;
              }
              ,
              this.getFreshValueHex = function () {
                return this.hV;
              }
              ,
            void 0 !== t && ('string' == typeof t ? this.setString(t) : void 0 !== t.str ? this.setString(t.str) : void 0 !== t.hex && this.setStringHex(t.hex));
          }
          ,
          ne(ut.asn1.DERAbstractString, ut.asn1.ASN1Object),
          ut.asn1.DERAbstractTime = function (t) {
            ut.asn1.DERAbstractTime.superclass.constructor.call(this);
            this.localDateToUTC = function (t) {
              var e = t.getTime() + 6e4 * t.getTimezoneOffset();
              return new Date(e);
            }
              ,
              this.formatDate = function (t, e, n) {
                var r = this.zeroPadding
                  , i = this.localDateToUTC(t)
                  , o = String(i.getFullYear());
                'utc' == e && (o = o.substr(2, 2));
                var s = o + r(String(i.getMonth() + 1), 2) + r(String(i.getDate()), 2) + r(String(i.getHours()), 2) + r(String(i.getMinutes()), 2) + r(String(i.getSeconds()), 2);
                if (!0 === n) {
                  var a = i.getMilliseconds();
                  if (0 != a) {
                    var u = r(String(a), 3);
                    s = s + '.' + (u = u.replace(/[0]+$/, ''));
                  }
                }
                return s + 'Z';
              }
              ,
              this.zeroPadding = function (t, e) {
                return t.length >= e ? t : new Array(e - t.length + 1).join('0') + t;
              }
              ,
              this.setByParam = function (t) {
                this.hV = null,
                  this.hTLV = null,
                  this.params = t;
              }
              ,
              this.getString = function () {
              }
              ,
              this.setString = function (t) {
                this.hTLV = null,
                  this.isModified = !0,
                null == this.params && (this.params = {}),
                  this.params.str = t;
              }
              ,
              this.setByDate = function (t) {
                this.hTLV = null,
                  this.isModified = !0,
                null == this.params && (this.params = {}),
                  this.params.date = t;
              }
              ,
              this.setByDateValue = function (t, e, n, r, i, o) {
                var s = new Date(Date.UTC(t, e - 1, n, r, i, o, 0));
                this.setByDate(s);
              }
              ,
              this.getFreshValueHex = function () {
                return this.hV;
              };
          }
          ,
          ne(ut.asn1.DERAbstractTime, ut.asn1.ASN1Object),
          ut.asn1.DERAbstractStructured = function (t) {
            ut.asn1.DERAbstractString.superclass.constructor.call(this);
            this.setByASN1ObjectArray = function (t) {
              this.hTLV = null,
                this.isModified = !0,
                this.asn1Array = t;
            }
              ,
              this.appendASN1Object = function (t) {
                this.hTLV = null,
                  this.isModified = !0,
                  this.asn1Array.push(t);
              }
              ,
              this.asn1Array = new Array,
            void 0 !== t && void 0 !== t.array && (this.asn1Array = t.array);
          }
          ,
          ne(ut.asn1.DERAbstractStructured, ut.asn1.ASN1Object),
          ut.asn1.DERBoolean = function (t) {
            ut.asn1.DERBoolean.superclass.constructor.call(this),
              this.hT = '01',
              this.hTLV = 0 == t ? '010100' : '0101ff';
          }
          ,
          ne(ut.asn1.DERBoolean, ut.asn1.ASN1Object),
          ut.asn1.DERInteger = function (t) {
            ut.asn1.DERInteger.superclass.constructor.call(this),
              this.hT = '02',
              this.params = null;
            var e = Yt;
            this.setByBigInteger = function (t) {
              this.isModified = !0,
                this.params = {
                  bigint: t
                };
            }
              ,
              this.setByInteger = function (t) {
                this.isModified = !0,
                  this.params = t;
              }
              ,
              this.setValueHex = function (t) {
                this.isModified = !0,
                  this.params = {
                    hex: t
                  };
              }
              ,
              this.getFreshValueHex = function () {
                var t = this.params
                  , n = null;
                if (null == t)
                  throw new Error('value not set');
                if ('object' == typeof t && null != t.hex)
                  return this.hV = t.hex,
                    this.hV;
                if ('number' == typeof t)
                  n = new w(String(t), 10);
                else if (null != t.int)
                  n = new w(String(t.int), 10);
                else {
                  if (null == t.bigint)
                    throw new Error('wrong parameter');
                  n = t.bigint;
                }
                return this.hV = e(n),
                  this.hV;
              }
              ,
            null != t && (this.params = t);
          }
          ,
          ne(ut.asn1.DERInteger, ut.asn1.ASN1Object),
          ut.asn1.DERBitString = function (t) {
            if (void 0 !== t && void 0 !== t.obj) {
              var e = ut.asn1.ASN1Util.newObject(t.obj);
              t.hex = '00' + e.tohex();
            }
            ut.asn1.DERBitString.superclass.constructor.call(this),
              this.hT = '03',
              this.setHexValueIncludingUnusedBits = function (t) {
                this.hTLV = null,
                  this.isModified = !0,
                  this.hV = t;
              }
              ,
              this.setUnusedBitsAndHexValue = function (t, e) {
                if (t < 0 || 7 < t)
                  throw 'unused bits shall be from 0 to 7: u = ' + t;
                var n = '0' + t;
                this.hTLV = null,
                  this.isModified = !0,
                  this.hV = n + e;
              }
              ,
              this.setByBinaryString = function (t) {
                var e = 8 - (t = t.replace(/0+$/, '')).length % 8;
                8 == e && (e = 0),
                  t += '0000000'.substr(0, e);
                for (var n = '', r = 0; r < t.length - 1; r += 8) {
                  var i = t.substr(r, 8)
                    , o = parseInt(i, 2).toString(16);
                  1 == o.length && (o = '0' + o),
                    n += o;
                }
                this.hTLV = null,
                  this.isModified = !0,
                  this.hV = '0' + e + n;
              }
              ,
              this.setByBooleanArray = function (t) {
                for (var e = '', n = 0; n < t.length; n++)
                  1 == t[n] ? e += '1' : e += '0';
                this.setByBinaryString(e);
              }
              ,
              this.newFalseArray = function (t) {
                for (var e = new Array(t), n = 0; n < t; n++)
                  e[n] = !1;
                return e;
              }
              ,
              this.getFreshValueHex = function () {
                return this.hV;
              }
              ,
            void 0 !== t && ('string' == typeof t && t.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(t) : void 0 !== t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : void 0 !== t.bin ? this.setByBinaryString(t.bin) : void 0 !== t.array && this.setByBooleanArray(t.array));
          }
          ,
          ne(ut.asn1.DERBitString, ut.asn1.ASN1Object),
          ut.asn1.DEROctetString = function (t) {
            if (void 0 !== t && void 0 !== t.obj) {
              var e = ut.asn1.ASN1Util.newObject(t.obj);
              t.hex = e.tohex();
            }
            ut.asn1.DEROctetString.superclass.constructor.call(this, t),
              this.hT = '04';
          }
          ,
          ne(ut.asn1.DEROctetString, ut.asn1.DERAbstractString),
          ut.asn1.DERNull = function () {
            ut.asn1.DERNull.superclass.constructor.call(this),
              this.hT = '05',
              this.hTLV = '0500';
          }
          ,
          ne(ut.asn1.DERNull, ut.asn1.ASN1Object),
          ut.asn1.DERObjectIdentifier = function (t) {
            ut.asn1.DERObjectIdentifier.superclass.constructor.call(this),
              this.hT = '06',
              this.setValueHex = function (t) {
                this.hTLV = null,
                  this.isModified = !0,
                  this.s = null,
                  this.hV = t;
              }
              ,
              this.setValueOidString = function (t) {
                var e = Gt(t);
                if (null == e)
                  throw new Error('malformed oid string: ' + t);
                this.hTLV = null,
                  this.isModified = !0,
                  this.s = null,
                  this.hV = e;
              }
              ,
              this.setValueName = function (t) {
                var e = ut.asn1.x509.OID.name2oid(t);
                if ('' === e)
                  throw new Error('DERObjectIdentifier oidName undefined: ' + t);
                this.setValueOidString(e);
              }
              ,
              this.setValueNameOrOid = function (t) {
                t.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(t) : this.setValueName(t);
              }
              ,
              this.getFreshValueHex = function () {
                return this.hV;
              }
              ,
              this.setByParam = function (t) {
                'string' == typeof t ? this.setValueNameOrOid(t) : void 0 !== t.oid ? this.setValueNameOrOid(t.oid) : void 0 !== t.name ? this.setValueNameOrOid(t.name) : void 0 !== t.hex && this.setValueHex(t.hex);
              }
              ,
            void 0 !== t && this.setByParam(t);
          }
          ,
          ne(ut.asn1.DERObjectIdentifier, ut.asn1.ASN1Object),
          ut.asn1.DEREnumerated = function (t) {
            ut.asn1.DEREnumerated.superclass.constructor.call(this),
              this.hT = '0a',
              this.setByBigInteger = function (t) {
                this.hTLV = null,
                  this.isModified = !0,
                  this.hV = Yt(t);
              }
              ,
              this.setByInteger = function (t) {
                var e = new w(String(t), 10);
                this.setByBigInteger(e);
              }
              ,
              this.setValueHex = function (t) {
                this.hV = t;
              }
              ,
              this.getFreshValueHex = function () {
                return this.hV;
              }
              ,
            void 0 !== t && (void 0 !== t.int ? this.setByInteger(t.int) : 'number' == typeof t ? this.setByInteger(t) : void 0 !== t.hex && this.setValueHex(t.hex));
          }
          ,
          ne(ut.asn1.DEREnumerated, ut.asn1.ASN1Object),
          ut.asn1.DERUTF8String = function (t) {
            ut.asn1.DERUTF8String.superclass.constructor.call(this, t),
              this.hT = '0c';
          }
          ,
          ne(ut.asn1.DERUTF8String, ut.asn1.DERAbstractString),
          ut.asn1.DERNumericString = function (t) {
            ut.asn1.DERNumericString.superclass.constructor.call(this, t),
              this.hT = '12';
          }
          ,
          ne(ut.asn1.DERNumericString, ut.asn1.DERAbstractString),
          ut.asn1.DERPrintableString = function (t) {
            ut.asn1.DERPrintableString.superclass.constructor.call(this, t),
              this.hT = '13';
          }
          ,
          ne(ut.asn1.DERPrintableString, ut.asn1.DERAbstractString),
          ut.asn1.DERTeletexString = function (t) {
            ut.asn1.DERTeletexString.superclass.constructor.call(this, t),
              this.hT = '14';
          }
          ,
          ne(ut.asn1.DERTeletexString, ut.asn1.DERAbstractString),
          ut.asn1.DERIA5String = function (t) {
            ut.asn1.DERIA5String.superclass.constructor.call(this, t),
              this.hT = '16';
          }
          ,
          ne(ut.asn1.DERIA5String, ut.asn1.DERAbstractString),
          ut.asn1.DERVisibleString = function (t) {
            ut.asn1.DERIA5String.superclass.constructor.call(this, t),
              this.hT = '1a';
          }
          ,
          ne(ut.asn1.DERVisibleString, ut.asn1.DERAbstractString),
          ut.asn1.DERBMPString = function (t) {
            ut.asn1.DERBMPString.superclass.constructor.call(this, t),
              this.hT = '1e';
          }
          ,
          ne(ut.asn1.DERBMPString, ut.asn1.DERAbstractString),
          ut.asn1.DERUTCTime = function (t) {
            ut.asn1.DERUTCTime.superclass.constructor.call(this, t),
              this.hT = '17',
              this.params = void 0,
              this.getFreshValueHex = function () {
                var t = this.params;
                if (null == this.params && (t = {
                  date: new Date
                }),
                'string' == typeof t) {
                  if (!t.match(/^[0-9]{12}Z$/) && !t.match(/^[0-9]{12}\.[0-9]+Z$/))
                    throw new Error('malformed string for UTCTime: ' + t);
                  this.hV = gt(t);
                } else if (null != t.str)
                  this.hV = gt(t.str);
                else if (null == t.date && 1 == t.millis) {
                  var e = new Date;
                  this.hV = gt(this.formatDate(e, 'utc', !0));
                } else if (null != t.date && t.date instanceof Date) {
                  var n = !0 === t.millis;
                  this.hV = gt(this.formatDate(t.date, 'utc', n));
                } else
                  t instanceof Date && (this.hV = gt(this.formatDate(t, 'utc')));
                if (null == this.hV)
                  throw new Error('parameter not specified properly for UTCTime');
                return this.hV;
              }
              ,
            null != t && this.setByParam(t);
          }
          ,
          ne(ut.asn1.DERUTCTime, ut.asn1.DERAbstractTime),
          ut.asn1.DERGeneralizedTime = function (t) {
            ut.asn1.DERGeneralizedTime.superclass.constructor.call(this, t),
              this.hT = '18',
              this.params = t,
              this.getFreshValueHex = function () {
                var t = this.params;
                if (null == this.params && (t = {
                  date: new Date
                }),
                'string' == typeof t) {
                  if (!t.match(/^[0-9]{14}Z$/) && !t.match(/^[0-9]{14}\.[0-9]+Z$/))
                    throw new Error('malformed string for GeneralizedTime: ' + t);
                  this.hV = gt(t);
                } else if (null != t.str)
                  this.hV = gt(t.str);
                else if (null == t.date && 1 == t.millis) {
                  var e = new Date;
                  this.hV = gt(this.formatDate(e, 'gen', !0));
                } else if (null != t.date && t.date instanceof Date) {
                  var n = !0 === t.millis;
                  this.hV = gt(this.formatDate(t.date, 'gen', n));
                } else
                  t instanceof Date && (this.hV = gt(this.formatDate(t, 'gen')));
                if (null == this.hV)
                  throw new Error('parameter not specified properly for GeneralizedTime');
                return this.hV;
              }
              ,
            null != t && this.setByParam(t);
          }
          ,
          ne(ut.asn1.DERGeneralizedTime, ut.asn1.DERAbstractTime),
          ut.asn1.DERSequence = function (t) {
            ut.asn1.DERSequence.superclass.constructor.call(this, t),
              this.hT = '30',
              this.getFreshValueHex = function () {
                for (var t = '', e = 0; e < this.asn1Array.length; e++) {
                  t += this.asn1Array[e].tohex();
                }
                return this.hV = t,
                  this.hV;
              };
          }
          ,
          ne(ut.asn1.DERSequence, ut.asn1.DERAbstractStructured),
          ut.asn1.DERSet = function (t) {
            ut.asn1.DERSet.superclass.constructor.call(this, t),
              this.hT = '31',
              this.sortFlag = !0,
              this.getFreshValueHex = function () {
                for (var t = new Array, e = 0; e < this.asn1Array.length; e++) {
                  var n = this.asn1Array[e];
                  t.push(n.tohex());
                }
                return 1 == this.sortFlag && t.sort(),
                  this.hV = t.join(''),
                  this.hV;
              }
              ,
            void 0 !== t && void 0 !== t.sortflag && 0 == t.sortflag && (this.sortFlag = !1);
          }
          ,
          ne(ut.asn1.DERSet, ut.asn1.DERAbstractStructured),
          ut.asn1.DERTaggedObject = function (t) {
            ut.asn1.DERTaggedObject.superclass.constructor.call(this);
            var e = ut.asn1
              , n = ht
              , r = n.getV
              , i = (n.isASN1HEX,
              e.ASN1Util.newObject);
            this.hT = 'a0',
              this.hV = '',
              this.isExplicit = !0,
              this.asn1Object = null,
              this.params = {
                tag: 'a0',
                explicit: !0
              },
              this.setASN1Object = function (t, e, n) {
                this.params = {
                  tag: e,
                  explicit: t,
                  obj: n
                };
              }
              ,
              this.getFreshValueHex = function () {
                var t = this.params;
                if (null == t.explicit && (t.explicit = !0),
                null != t.tage && (t.tag = t.tage,
                  t.explicit = !0),
                null != t.tagi && (t.tag = t.tagi,
                  t.explicit = !1),
                null != t.str)
                  this.hV = xt(t.str);
                else if (null != t.hex)
                  this.hV = t.hex;
                else {
                  if (null == t.obj)
                    throw new Error('str, hex nor obj not specified');
                  var n;
                  t.obj instanceof e.ASN1Object ? n = t.obj.tohex() : 'object' == typeof t.obj && (n = i(t.obj).tohex()),
                    t.explicit ? this.hV = n : this.hV = r(n, 0);
                }
                return null == t.tag && (t.tag = 'a0'),
                  this.hT = t.tag,
                  this.hTLV = null,
                  this.isModified = !0,
                  this.hV;
              }
              ,
              this.setByParam = function (t) {
                this.params = t;
              }
              ,
            void 0 !== t && this.setByParam(t);
          }
          ,
          ne(ut.asn1.DERTaggedObject, ut.asn1.ASN1Object);
        var ut, ct, lt, ht = new function () {
          }
        ;

        function ft(t) {
          for (var e = new Array, n = 0; n < t.length; n++)
            e[n] = t.charCodeAt(n);
          return e;
        }

        function pt(t) {
          for (var e = '', n = 0; n < t.length; n++)
            e += String.fromCharCode(t[n]);
          return e;
        }

        function dt(t) {
          for (var e = '', n = 0; n < t.length; n++) {
            var r = t[n].toString(16);
            1 == r.length && (r = '0' + r),
              e += r;
          }
          return e;
        }

        function gt(t) {
          return dt(ft(t));
        }

        function vt(t) {
          return t = (t = (t = t.replace(/\=/g, '')).replace(/\+/g, '-')).replace(/\//g, '_');
        }

        function mt(t) {
          return t.length % 4 == 2 ? t += '==' : t.length % 4 == 3 && (t += '='),
            t = (t = t.replace(/-/g, '+')).replace(/_/g, '/');
        }

        function yt(t) {
          return t.length % 2 == 1 && (t = '0' + t),
            vt(y(t));
        }

        function bt(t) {
          return b(mt(t));
        }

        function xt(t) {
          return Nt($t(t)).toLowerCase();
        }

        function wt(t) {
          try {
            return decodeURIComponent(Ot(t));
          } catch (t) {
            return null;
          }
        }

        function St(t) {
          return wt(function (t) {
            for (var e = t.match(/.{1,2}/g), n = [], r = 0; r < e.length; r++) {
              var i = parseInt(e[r], 16);
              161 <= i && i <= 191 ? (n.push('c2'),
                n.push(e[r])) : 192 <= i && i <= 255 ? (n.push('c3'),
                n.push((i - 64).toString(16))) : n.push(e[r]);
            }
            return n.join('');
          }(t));
        }

        function Et(t) {
          for (var e = '', n = 0; n < t.length - 1; n += 2)
            e += String.fromCharCode(parseInt(t.substr(n, 2), 16));
          return e;
        }

        function At(t) {
          for (var e = '', n = 0; n < t.length; n++)
            e += ('0' + t.charCodeAt(n).toString(16)).slice(-2);
          return e;
        }

        function Ct(t) {
          return y(t);
        }

        function Pt(t, e) {
          return t = (t = t.replace(new RegExp('(.{' + e + '})', 'g'), '$1\r\n')).replace(/\s+$/, '');
        }

        function Ft(t) {
          return b(t.replace(/[^0-9A-Za-z\/+=]*/g, ''));
        }

        function kt(t, e) {
          return '-----BEGIN ' + e + '-----\r\n' + Pt(Ct(t), 64) + '\r\n-----END ' + e + '-----\r\n';
        }

        function Tt(t, e) {
          if (-1 == t.indexOf('-----BEGIN '))
            throw new Error('can\'t find PEM header');
          return Ft(t = void 0 !== e ? (t = t.replace(new RegExp('^[^]*-----BEGIN ' + e + '-----'), '')).replace(new RegExp('-----END ' + e + '-----[^]*$'), '') : (t = t.replace(/^[^]*-----BEGIN [^-]+-----/, '')).replace(/-----END [^-]+-----[^]*$/, ''));
        }

        function _t(t) {
          var e, n, r, i, o, s, a, u, c, l;
          if (l = (t = Dt(t)).match(/^(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(|\.\d+)Z$/))
            return e = parseInt(l[1]),
              n = parseInt(l[2]) - 1,
              r = parseInt(l[3]),
              i = parseInt(l[4]),
              o = parseInt(l[5]),
              s = parseInt(l[6]),
              a = 0,
            '' !== (u = l[7]) && (c = (u.substr(1) + '00').substr(0, 3),
              a = parseInt(c)),
              Date.UTC(e, n, r, i, o, s, a);
          throw new Error('unsupported zulu format: ' + t);
        }

        function It(t) {
          return Math.round(_t(t) / 1e3);
        }

        function Dt(t) {
          return t.match(/^[0-9]{12}Z$/) || t.match(/^[0-9]{12}[.][0-9]*Z$/) ? t.match(/^[0-4]/) ? '20' + t : '19' + t : t;
        }

        function Nt(t) {
          return t.replace(/%/g, '');
        }

        function Ot(t) {
          return t.replace(/(..)/g, '%$1');
        }

        function Rt(t) {
          var e = 'malformed IPv6 address';
          if (!t.match(/^[0-9A-Fa-f:]+$/))
            throw e;
          var n = (t = t.toLowerCase()).split(':').length - 1;
          if (n < 2)
            throw e;
          var r = ':'.repeat(7 - n + 2)
            , i = (t = t.replace('::', r)).split(':');
          if (8 != i.length)
            throw e;
          for (var o = 0; o < 8; o++)
            i[o] = ('0000' + i[o]).slice(-4);
          return i.join('');
        }

        function jt(t) {
          if (!t.match(/^[0-9A-Fa-f]{32}$/))
            throw new Error('malformed IPv6 address: ' + t);
          var e = (t = t.toLowerCase()).match(/.{1,4}/g)
            , n = (t = ':' + (e = (e = e.map((function (t) {
              return t.replace(/^0+/, '');
            }
          ))).map((function (t) {
              return '' == t ? '0' : t;
            }
          ))).join(':') + ':').match(/:(0:){2,}/g);
          if (null == n)
            return t.slice(1, -1);
          var r = n.sort().slice(-1)[0];
          return '::' != (t = t.replace(r.substr(0, r.length - 1), ':')).substr(0, 2) && (t = t.substr(1)),
          '::' != t.substr(-2, 2) && (t = t.substr(0, t.length - 1)),
            t;
        }

        function Bt(t) {
          var e = new Error('malformed hex value');
          if (!t.match(/^([0-9A-Fa-f][0-9A-Fa-f]){1,}$/))
            throw e;
          if (8 == t.length) {
            try {
              return parseInt(t.substr(0, 2), 16) + '.' + parseInt(t.substr(2, 2), 16) + '.' + parseInt(t.substr(4, 2), 16) + '.' + parseInt(t.substr(6, 2), 16);
            } catch (t) {
              throw e;
            }
          } else {
            if (16 != t.length) {
              if (32 == t.length)
                return jt(t);
              if (64 == t.length) {
                try {
                  return jt(t.substr(0, 32)) + '/' + Ht(t.substr(32));
                } catch (t) {
                  throw e;
                }
                return;
              }
              return t;
            }
            try {
              return Bt(t.substr(0, 8)) + '/' + Ht(t.substr(8));
            } catch (t) {
              throw e;
            }
          }
        }

        function Ht(t) {
          var e, n = new Error('malformed mask');
          try {
            e = new w(t, 16).toString(2);
          } catch (t) {
            throw n;
          }
          if (!e.match(/^1*0*$/))
            throw n;
          return e.replace(/0+$/, '').length;
        }

        function Lt(t) {
          var e = new Error('malformed IP address');
          if (!(t = t.toLowerCase(t)).match(/^[0-9a-f.:/]+$/))
            throw e;
          if (!t.match(/^[0-9.]+$/)) {
            var n;
            if (t.match(/^[0-9.]+\/[0-9]+$/))
              return Lt((n = t.split('/'))[0]) + Mt(parseInt(n[1]), 32);
            if (t.match(/^[0-9a-f:]+$/) && -1 !== t.indexOf(':'))
              return Rt(t);
            if (t.match(/^[0-9a-f:]+\/[0-9]+$/) && -1 !== t.indexOf(':'))
              return Rt((n = t.split('/'))[0]) + Mt(parseInt(n[1]), 128);
            throw e;
          }
          var r = t.split('.');
          if (4 !== r.length)
            throw e;
          var i = '';
          try {
            for (var o = 0; o < 4; o++) {
              i += ('0' + parseInt(r[o]).toString(16)).slice(-2);
            }
            return i;
          } catch (t) {
            throw e;
          }
        }

        function Mt(t, e) {
          return 32 == e && 0 == t ? '00000000' : 128 == e && 0 == t ? '00000000000000000000000000000000' : new w(Array(t + 1).join('1') + Array(e - t + 1).join('0'), 2).toString(16);
        }

        function Ut(t) {
          return t.match(/.{4}/g).map((function (t) {
              var e = parseInt(t.substr(0, 2), 16)
                , n = parseInt(t.substr(2), 16);
              if (0 == e & n < 128)
                return String.fromCharCode(n);
              if (e < 8) {
                var r = 128 | 63 & n;
                return wt((192 | (7 & e) << 3 | (192 & n) >> 6).toString(16) + r.toString(16));
              }
              r = 128 | (15 & e) << 2 | (192 & n) >> 6;
              var i = 128 | 63 & n;
              return wt((224 | (240 & e) >> 4).toString(16) + r.toString(16) + i.toString(16));
            }
          )).join('');
        }

        function $t(t) {
          for (var e = encodeURIComponent(t), n = '', r = 0; r < e.length; r++)
            '%' == e[r] ? (n += e.substr(r, 3),
              r += 2) : n = n + '%' + gt(e[r]);
          return n;
        }

        function Vt(t) {
          return !(t.length % 2 != 0 || !t.match(/^[0-9a-f]+$/) && !t.match(/^[0-9A-F]+$/));
        }

        function qt(t) {
          return !!t.match(/^[0-9A-Za-z-_.]+$/);
        }

        function Kt(t) {
          return t.length % 2 == 1 ? '0' + t : t.substr(0, 1) > '7' ? '00' + t : t;
        }

        ht.getLblen = function (t, e) {
          if ('8' != t.substr(e + 2, 1))
            return 1;
          var n = parseInt(t.substr(e + 3, 1));
          return 0 == n ? -1 : 0 < n && n < 10 ? n + 1 : -2;
        }
          ,
          ht.getL = function (t, e) {
            var n = ht.getLblen(t, e);
            return n < 1 ? '' : t.substr(e + 2, 2 * n);
          }
          ,
          ht.getVblen = function (t, e) {
            var n;
            return '' == (n = ht.getL(t, e)) ? -1 : ('8' === n.substr(0, 1) ? new w(n.substr(2), 16) : new w(n, 16)).intValue();
          }
          ,
          ht.getVidx = function (t, e) {
            var n = ht.getLblen(t, e);
            return n < 0 ? n : e + 2 * (n + 1);
          }
          ,
          ht.getV = function (t, e) {
            var n = ht.getVidx(t, e)
              , r = ht.getVblen(t, e);
            return t.substr(n, 2 * r);
          }
          ,
          ht.getTLV = function (t, e) {
            return t.substr(e, 2) + ht.getL(t, e) + ht.getV(t, e);
          }
          ,
          ht.getTLVblen = function (t, e) {
            return 2 + 2 * ht.getLblen(t, e) + 2 * ht.getVblen(t, e);
          }
          ,
          ht.getNextSiblingIdx = function (t, e) {
            return ht.getVidx(t, e) + 2 * ht.getVblen(t, e);
          }
          ,
          ht.getChildIdx = function (t, e) {
            var n, r, i, o = ht, s = [];
            n = o.getVidx(t, e),
              r = 2 * o.getVblen(t, e),
            '03' == t.substr(e, 2) && (n += 2,
              r -= 2),
              i = 0;
            for (var a = n; i <= r;) {
              var u = o.getTLVblen(t, a);
              if ((i += u) <= r && s.push(a),
                a += u,
              i >= r)
                break;
            }
            return s;
          }
          ,
          ht.getNthChildIdx = function (t, e, n) {
            return ht.getChildIdx(t, e)[n];
          }
          ,
          ht.getIdxbyList = function (t, e, n, r) {
            var i, o, s = ht;
            return 0 == n.length ? void 0 !== r && t.substr(e, 2) !== r ? -1 : e : (i = n.shift()) >= (o = s.getChildIdx(t, e)).length ? -1 : s.getIdxbyList(t, o[i], n, r);
          }
          ,
          ht.getIdxbyListEx = function (t, e, n, r) {
            var i, o, s = ht;
            if (0 == n.length)
              return void 0 !== r && t.substr(e, 2) !== r ? -1 : e;
            i = n.shift(),
              o = s.getChildIdx(t, e);
            for (var a = 0, u = 0; u < o.length; u++) {
              var c = t.substr(o[u], 2);
              if ('number' == typeof i && !s.isContextTag(c) && a == i || 'string' == typeof i && s.isContextTag(c, i))
                return s.getIdxbyListEx(t, o[u], n, r);
              s.isContextTag(c) || a++;
            }
            return -1;
          }
          ,
          ht.getTLVbyList = function (t, e, n, r) {
            var i = ht
              , o = i.getIdxbyList(t, e, n, r);
            return -1 == o || o >= t.length ? null : i.getTLV(t, o);
          }
          ,
          ht.getTLVbyListEx = function (t, e, n, r) {
            var i = ht
              , o = i.getIdxbyListEx(t, e, n, r);
            return -1 == o ? null : i.getTLV(t, o);
          }
          ,
          ht.getVbyList = function (t, e, n, r, i) {
            var o, s, a = ht;
            return -1 == (o = a.getIdxbyList(t, e, n, r)) || o >= t.length ? null : (s = a.getV(t, o),
            !0 === i && (s = s.substr(2)),
              s);
          }
          ,
          ht.getVbyListEx = function (t, e, n, r, i) {
            var o, s, a = ht;
            return -1 == (o = a.getIdxbyListEx(t, e, n, r)) ? null : (s = a.getV(t, o),
            '03' == t.substr(o, 2) && !1 !== i && (s = s.substr(2)),
              s);
          }
          ,
          ht.getInt = function (t, e, n) {
            null == n && (n = -1);
            try {
              var r = t.substr(e, 2);
              if ('02' != r && '03' != r)
                return n;
              var i = ht.getV(t, e);
              return '02' == r ? parseInt(i, 16) : Jt(i);
            } catch (t) {
              return n;
            }
          }
          ,
          ht.getOID = function (t, e, n) {
            null == n && (n = null);
            try {
              return '06' != t.substr(e, 2) ? n : zt(ht.getV(t, e));
            } catch (t) {
              return n;
            }
          }
          ,
          ht.getOIDName = function (t, e, n) {
            null == n && (n = null);
            try {
              var r = ht.getOID(t, e, n);
              if (r == n)
                return n;
              var i = ut.asn1.x509.OID.oid2name(r);
              return '' == i ? r : i;
            } catch (t) {
              return n;
            }
          }
          ,
          ht.getString = function (t, e, n) {
            null == n && (n = null);
            try {
              return Et(ht.getV(t, e));
            } catch (t) {
              return n;
            }
          }
          ,
          ht.hextooidstr = function (t) {
            var e = function (t, e) {
              return t.length >= e ? t : new Array(e - t.length + 1).join('0') + t;
            }
              , n = []
              , r = t.substr(0, 2)
              , i = parseInt(r, 16);
            n[0] = new String(Math.floor(i / 40)),
              n[1] = new String(i % 40);
            for (var o = t.substr(2), s = [], a = 0; a < o.length / 2; a++)
              s.push(parseInt(o.substr(2 * a, 2), 16));
            var u = []
              , c = '';
            for (a = 0; a < s.length; a++)
              128 & s[a] ? c += e((127 & s[a]).toString(2), 7) : (c += e((127 & s[a]).toString(2), 7),
                u.push(new String(parseInt(c, 2))),
                c = '');
            var l = n.join('.');
            return u.length > 0 && (l = l + '.' + u.join('.')),
              l;
          }
          ,
          ht.dump = function (t, e, n, r) {
            var i = ht
              , o = i.getV
              , s = i.dump
              , a = i.getChildIdx
              , u = t;
            t instanceof ut.asn1.ASN1Object && (u = t.tohex());
            var c = function (t, e) {
              return t.length <= 2 * e ? t : t.substr(0, e) + '..(total ' + t.length / 2 + 'bytes)..' + t.substr(t.length - e, e);
            };
            void 0 === e && (e = {
              ommit_long_octet: 32
            }),
            void 0 === n && (n = 0),
            void 0 === r && (r = '');
            var l, h = e.ommit_long_octet;
            if ('01' == (l = u.substr(n, 2)))
              return '00' == (f = o(u, n)) ? r + 'BOOLEAN FALSE\n' : r + 'BOOLEAN TRUE\n';
            if ('02' == l)
              return r + 'INTEGER ' + c(f = o(u, n), h) + '\n';
            if ('03' == l) {
              var f = o(u, n);
              if (i.isASN1HEX(f.substr(2))) {
                var p = r + 'BITSTRING, encapsulates\n';
                return p += s(f.substr(2), e, 0, r + '  ');
              }
              return r + 'BITSTRING ' + c(f, h) + '\n';
            }
            if ('04' == l) {
              f = o(u, n);
              if (i.isASN1HEX(f)) {
                p = r + 'OCTETSTRING, encapsulates\n';
                return p += s(f, e, 0, r + '  ');
              }
              return r + 'OCTETSTRING ' + c(f, h) + '\n';
            }
            if ('05' == l)
              return r + 'NULL\n';
            if ('06' == l) {
              var d = o(u, n)
                , g = ut.asn1.ASN1Util.oidHexToInt(d)
                , v = ut.asn1.x509.OID.oid2name(g)
                , m = g.replace(/\./g, ' ');
              return '' != v ? r + 'ObjectIdentifier ' + v + ' (' + m + ')\n' : r + 'ObjectIdentifier (' + m + ')\n';
            }
            if ('0a' == l)
              return r + 'ENUMERATED ' + parseInt(o(u, n)) + '\n';
            if ('0c' == l)
              return r + 'UTF8String \'' + wt(o(u, n)) + '\'\n';
            if ('13' == l)
              return r + 'PrintableString \'' + wt(o(u, n)) + '\'\n';
            if ('14' == l)
              return r + 'TeletexString \'' + wt(o(u, n)) + '\'\n';
            if ('16' == l)
              return r + 'IA5String \'' + wt(o(u, n)) + '\'\n';
            if ('17' == l)
              return r + 'UTCTime ' + wt(o(u, n)) + '\n';
            if ('18' == l)
              return r + 'GeneralizedTime ' + wt(o(u, n)) + '\n';
            if ('1a' == l)
              return r + 'VisualString \'' + wt(o(u, n)) + '\'\n';
            if ('1e' == l)
              return r + 'BMPString \'' + Ut(o(u, n)) + '\'\n';
            if ('30' == l) {
              if ('3000' == u.substr(n, 4))
                return r + 'SEQUENCE {}\n';
              p = r + 'SEQUENCE\n';
              var y = e;
              if ((2 == (w = a(u, n)).length || 3 == w.length) && '06' == u.substr(w[0], 2) && '04' == u.substr(w[w.length - 1], 2)) {
                v = i.oidname(o(u, w[0]));
                var b = JSON.parse(JSON.stringify(e));
                b.x509ExtName = v,
                  y = b;
              }
              for (var x = 0; x < w.length; x++)
                p += s(u, y, w[x], r + '  ');
              return p;
            }
            if ('31' == l) {
              p = r + 'SET\n';
              var w = a(u, n);
              for (x = 0; x < w.length; x++)
                p += s(u, e, w[x], r + '  ');
              return p;
            }
            if (0 != (128 & (l = parseInt(l, 16)))) {
              var S = 31 & l;
              if (0 != (32 & l)) {
                for (p = r + '[' + S + ']\n',
                       w = a(u, n),
                       x = 0; x < w.length; x++)
                  p += s(u, e, w[x], r + '  ');
                return p;
              }
              f = o(u, n);
              if (ht.isASN1HEX(f)) {
                var p = r + '[' + S + ']\n';
                return p += s(f, e, 0, r + '  ');
              }
              return ('68747470' == f.substr(0, 8) || 'subjectAltName' === e.x509ExtName && 2 == S) && (f = wt(f)),
                p = r + '[' + S + '] ' + f + '\n';
            }
            return r + 'UNKNOWN(' + l + ') ' + o(u, n) + '\n';
          }
          ,
          ht.parse = function (t) {
            var e = ht
              , n = e.parse
              , r = e.isASN1HEX
              , i = e.getV
              , o = e.getTLV
              , s = e.getChildIdx
              , a = ut.asn1
              , u = a.ASN1Util.oidHexToInt
              , c = a.x509.OID.oid2name
              , l = wt
              , h = Ut
              , f = St
              , p = {
              '0c': 'utf8str',
              12: 'numstr',
              13: 'prnstr',
              14: 'telstr',
              16: 'ia5str',
              17: 'utctime',
              18: 'gentime',
              '1a': 'visstr',
              '1e': 'bmpstr',
              30: 'seq',
              31: 'set'
            }
              , d = t.substr(0, 2)
              , g = {}
              , v = i(t, 0);
            if ('01' == d)
              return '0101ff' == t ? {
                bool: !0
              } : {
                bool: !1
              };
            if ('02' == d)
              return {
                int: {
                  hex: v
                }
              };
            if ('03' == d)
              try {
                if ('00' != v.substr(0, 2))
                  throw 'not encap';
                var m = v.substr(2);
                if (!r(m))
                  throw 'not encap';
                return {
                  bitstr: {
                    obj: n(m)
                  }
                };
              } catch (t) {
                var y = null;
                return v.length <= 10 && (y = Zt(v)),
                  null == y ? {
                    bitstr: {
                      hex: v
                    }
                  } : {
                    bitstr: {
                      bin: y
                    }
                  };
              }
            else if ('04' == d)
              try {
                if (!r(v))
                  throw 'not encap';
                return {
                  octstr: {
                    obj: n(v)
                  }
                };
              } catch (t) {
                return {
                  octstr: {
                    hex: v
                  }
                };
              }
            else {
              if ('05' == d)
                return {
                  null: ''
                };
              if ('06' == d) {
                var b = u(v)
                  , x = c(b);
                return '' == x ? {
                  oid: b
                } : {
                  oid: x
                };
              }
              if ('0a' == d)
                return v.length > 4 ? {
                  enum: {
                    hex: v
                  }
                } : {
                  enum: parseInt(v, 16)
                };
              if ('30' == d || '31' == d)
                return g[p[d]] = function (t) {
                  for (var e = [], r = s(t, 0), i = 0; i < r.length; i++) {
                    var a = r[i]
                      , u = o(t, a)
                      , c = n(u);
                    e.push(c);
                  }
                  return e;
                }(t),
                  g;
              if ('14' == d) {
                var w = f(v);
                return g[p[d]] = {
                  str: w
                },
                  g;
              }
              if ('1e' == d) {
                w = h(v);
                return g[p[d]] = {
                  str: w
                },
                  g;
              }
              if (-1 != ':0c:12:13:16:17:18:1a:'.indexOf(d)) {
                w = l(v);
                return g[p[d]] = {
                  str: w
                },
                  g;
              }
              if (d.match(/^8[0-9]$/))
                return null == (w = l(v)) | '' == w || null != w.match(/[\x00-\x1F\x7F-\x9F]/) || null != w.match(/[\u0000-\u001F\u0080–\u009F]/) ? {
                  tag: {
                    tag: d,
                    explicit: !1,
                    hex: v
                  }
                } : {
                  tag: {
                    tag: d,
                    explicit: !1,
                    str: w
                  }
                };
              if (!d.match(/^a[0-9]$/)) {
                var S = new ut.asn1.ASN1Object;
                return S.hV = v,
                  {
                    asn1: {
                      tlv: d + S.getLengthHexFromValue() + v
                    }
                  };
              }
              try {
                if (!r(v))
                  throw new Error('not encap');
                return {
                  tag: {
                    tag: d,
                    explicit: !0,
                    obj: n(v)
                  }
                };
              } catch (t) {
                return {
                  tag: {
                    tag: d,
                    explicit: !0,
                    hex: v
                  }
                };
              }
            }
          }
          ,
          ht.isContextTag = function (t, e) {
            var n, r;
            t = t.toLowerCase();
            try {
              n = parseInt(t, 16);
            } catch (t) {
              return -1;
            }
            if (void 0 === e)
              return 128 == (192 & n);
            try {
              return null != e.match(/^\[[0-9]+\]$/) && (!((r = parseInt(e.substr(1, e.length - 1), 10)) > 31) && (128 == (192 & n) && (31 & n) == r));
            } catch (t) {
              return !1;
            }
          }
          ,
          ht.isASN1HEX = function (t) {
            var e = ht;
            if (t.length % 2 == 1)
              return !1;
            var n = e.getVblen(t, 0)
              , r = t.substr(0, 2)
              , i = e.getL(t, 0);
            return t.length - r.length - i.length == 2 * n;
          }
          ,
          ht.checkStrictDER = function (t, e, n, r, i) {
            var o = ht;
            if (void 0 === n) {
              if ('string' != typeof t)
                throw new Error('not hex string');
              if (t = t.toLowerCase(),
                !ut.lang.String.isHex(t))
                throw new Error('not hex string');
              n = t.length,
                i = (r = t.length / 2) < 128 ? 1 : Math.ceil(r.toString(16)) + 1;
            }
            if (o.getL(t, e).length > 2 * i)
              throw new Error('L of TLV too long: idx=' + e);
            var s = o.getVblen(t, e);
            if (s > r)
              throw new Error('value of L too long than hex: idx=' + e);
            var a = o.getTLV(t, e)
              , u = a.length - 2 - o.getL(t, e).length;
            if (u !== 2 * s)
              throw new Error('V string length and L\'s value not the same:' + u + '/' + 2 * s);
            if (0 === e && t.length != a.length)
              throw new Error('total length and TLV length unmatch:' + t.length + '!=' + a.length);
            var c = t.substr(e, 2);
            if ('02' === c) {
              var l = o.getVidx(t, e);
              if ('00' == t.substr(l, 2) && t.charCodeAt(l + 2) < 56)
                throw new Error('not least zeros for DER INTEGER');
            }
            if (32 & parseInt(c, 16)) {
              for (var h = o.getVblen(t, e), f = 0, p = o.getChildIdx(t, e), d = 0; d < p.length; d++) {
                f += o.getTLV(t, p[d]).length,
                  o.checkStrictDER(t, p[d], n, r, i);
              }
              if (2 * h != f)
                throw new Error('sum of children\'s TLV length and L unmatch: ' + 2 * h + '!=' + f);
            }
          }
          ,
          ht.oidname = function (t) {
            var e = ut.asn1;
            ut.lang.String.isHex(t) && (t = e.ASN1Util.oidHexToInt(t));
            var n = e.x509.OID.oid2name(t);
            return '' === n && (n = t),
              n;
          }
          ,
        void 0 !== ut && ut || (ut = {}),
        void 0 !== ut.asn1 && ut.asn1 || (ut.asn1 = {}),
        void 0 !== ut.asn1.x509 && ut.asn1.x509 || (ut.asn1.x509 = {}),
          ut.asn1.x509.Certificate = function (t) {
            ut.asn1.x509.Certificate.superclass.constructor.call(this);
            var e = ut.asn1
              , n = e.DERBitString
              , r = e.DERSequence
              , i = e.x509
              , o = i.TBSCertificate
              , s = i.AlgorithmIdentifier;
            this.params = void 0,
              this.setByParam = function (t) {
                this.params = t;
              }
              ,
              this.sign = function () {
                var t = this.params
                  , e = t.sigalg;
                null != t.sigalg.name && (e = t.sigalg.name);
                var n = t.tbsobj.tohex()
                  , r = new ut.crypto.Signature({
                  alg: e
                });
                r.init(t.cakey),
                  r.updateHex(n),
                  t.sighex = r.sign();
              }
              ,
              this.getPEM = function () {
                return kt(this.tohex(), 'CERTIFICATE');
              }
              ,
              this.tohex = function () {
                var t = this.params;
                if (null != t.tbsobj && null != t.tbsobj || (t.tbsobj = new o(t)),
                null == t.sighex && null != t.cakey && this.sign(),
                null == t.sighex)
                  throw new Error('sighex or cakey parameter not defined');
                var e = [];
                return e.push(t.tbsobj),
                  e.push(new s({
                    name: t.sigalg
                  })),
                  e.push(new n({
                    hex: '00' + t.sighex
                  })),
                  new r({
                    array: e
                  }).tohex();
              }
              ,
              this.getEncodedHex = function () {
                return this.tohex();
              }
              ,
            null != t && (this.params = t);
          }
          ,
          ne(ut.asn1.x509.Certificate, ut.asn1.ASN1Object),
          ut.asn1.x509.TBSCertificate = function (t) {
            ut.asn1.x509.TBSCertificate.superclass.constructor.call(this);
            var e = ut.asn1
              , n = e.x509
              , r = e.DERTaggedObject
              , i = e.DERInteger
              , o = e.DERSequence
              , s = n.AlgorithmIdentifier
              , a = n.Time
              , u = n.X500Name
              , c = n.Extensions
              , l = n.SubjectPublicKeyInfo;
            this.params = null,
              this.setByParam = function (t) {
                this.params = t;
              }
              ,
              this.tohex = function () {
                var t = []
                  , e = this.params;
                if (null != e.version || 1 != e.version) {
                  var n = 2;
                  null != e.version && (n = e.version - 1);
                  var h = new r({
                    obj: new i({
                      int: n
                    })
                  });
                  t.push(h);
                }
                return t.push(new i(e.serial)),
                  t.push(new s({
                    name: e.sigalg
                  })),
                  t.push(new u(e.issuer)),
                  t.push(new o({
                    array: [new a(e.notbefore), new a(e.notafter)]
                  })),
                  t.push(new u(e.subject)),
                  t.push(new l(re.getKey(e.sbjpubkey))),
                void 0 !== e.ext && e.ext.length > 0 && t.push(new r({
                  tag: 'a3',
                  obj: new c(e.ext)
                })),
                  new ut.asn1.DERSequence({
                    array: t
                  }).tohex();
              }
              ,
              this.getEncodedHex = function () {
                return this.tohex();
              }
              ,
            void 0 !== t && this.setByParam(t);
          }
          ,
          ne(ut.asn1.x509.TBSCertificate, ut.asn1.ASN1Object),
          ut.asn1.x509.Extensions = function (t) {
            ut.asn1.x509.Extensions.superclass.constructor.call(this);
            var e = ut.asn1
              , n = e.DERSequence
              , r = e.x509;
            this.aParam = [],
              this.setByParam = function (t) {
                this.aParam = t;
              }
              ,
              this.tohex = function () {
                for (var t = [], e = 0; e < this.aParam.length; e++) {
                  var i = this.aParam[e]
                    , o = i.extname
                    , s = null;
                  if (null != i.extn)
                    s = new r.PrivateExtension(i);
                  else if ('subjectKeyIdentifier' == o)
                    s = new r.SubjectKeyIdentifier(i);
                  else if ('keyUsage' == o)
                    s = new r.KeyUsage(i);
                  else if ('subjectAltName' == o)
                    s = new r.SubjectAltName(i);
                  else if ('issuerAltName' == o)
                    s = new r.IssuerAltName(i);
                  else if ('basicConstraints' == o)
                    s = new r.BasicConstraints(i);
                  else if ('nameConstraints' == o)
                    s = new r.NameConstraints(i);
                  else if ('cRLDistributionPoints' == o)
                    s = new r.CRLDistributionPoints(i);
                  else if ('certificatePolicies' == o)
                    s = new r.CertificatePolicies(i);
                  else if ('policyMappings' == o)
                    s = new r.PolicyMappings(i);
                  else if ('policyConstraints' == o)
                    s = new r.PolicyConstraints(i);
                  else if ('inhibitAnyPolicy' == o)
                    s = new r.InhibitAnyPolicy(i);
                  else if ('authorityKeyIdentifier' == o)
                    s = new r.AuthorityKeyIdentifier(i);
                  else if ('extKeyUsage' == o)
                    s = new r.ExtKeyUsage(i);
                  else if ('authorityInfoAccess' == o)
                    s = new r.AuthorityInfoAccess(i);
                  else if ('cRLNumber' == o)
                    s = new r.CRLNumber(i);
                  else if ('cRLReason' == o)
                    s = new r.CRLReason(i);
                  else if ('ocspNonce' == o)
                    s = new r.OCSPNonce(i);
                  else if ('ocspNoCheck' == o)
                    s = new r.OCSPNoCheck(i);
                  else if ('adobeTimeStamp' == o)
                    s = new r.AdobeTimeStamp(i);
                  else {
                    if ('subjectDirectoryAttributes' != o)
                      throw new Error('extension not supported:' + JSON.stringify(i));
                    s = new r.SubjectDirectoryAttributes(i);
                  }
                  null != s && t.push(s);
                }
                return new n({
                  array: t
                }).tohex();
              }
              ,
              this.getEncodedHex = function () {
                return this.tohex();
              }
              ,
            null != t && this.setByParam(t);
          }
          ,
          ne(ut.asn1.x509.Extensions, ut.asn1.ASN1Object),
          ut.asn1.x509.Extension = function (t) {
            ut.asn1.x509.Extension.superclass.constructor.call(this);
            var e = ut.asn1
              , n = e.DERObjectIdentifier
              , r = e.DEROctetString
              , i = (e.DERBitString,
              e.DERBoolean)
              , o = e.DERSequence;
            this.tohex = function () {
              var t = new n({
                oid: this.oid
              })
                , e = new r({
                hex: this.getExtnValueHex()
              })
                , s = new Array;
              return s.push(t),
              this.critical && s.push(new i),
                s.push(e),
                new o({
                  array: s
                }).tohex();
            }
              ,
              this.getEncodedHex = function () {
                return this.tohex();
              }
              ,
              this.critical = !1,
            void 0 !== t && void 0 !== t.critical && (this.critical = t.critical);
          }
          ,
          ne(ut.asn1.x509.Extension, ut.asn1.ASN1Object),
          ut.asn1.x509.KeyUsage = function (t) {
            ut.asn1.x509.KeyUsage.superclass.constructor.call(this, t);
            var e = Error
              , n = {
              digitalSignature: 0,
              nonRepudiation: 1,
              keyEncipherment: 2,
              dataEncipherment: 3,
              keyAgreement: 4,
              keyCertSign: 5,
              cRLSign: 6,
              encipherOnly: 7,
              decipherOnly: 8
            };
            this.getExtnValueHex = function () {
              var t = this.getBinValue();
              return this.asn1ExtnValue = new ut.asn1.DERBitString({
                bin: t
              }),
                this.asn1ExtnValue.tohex();
            }
              ,
              this.getBinValue = function () {
                var t = this.params;
                if ('object' != typeof t || 'object' != typeof t.names && 'string' != typeof t.bin)
                  throw new e('parameter not yet set');
                if (null != t.names)
                  return te(t.names, n);
                if (null != t.bin)
                  return t.bin;
                throw new e('parameter not set properly');
              }
              ,
              this.oid = '2.5.29.15',
            void 0 !== t && (this.params = t);
          }
          ,
          ne(ut.asn1.x509.KeyUsage, ut.asn1.x509.Extension),
          ut.asn1.x509.BasicConstraints = function (t) {
            ut.asn1.x509.BasicConstraints.superclass.constructor.call(this, t);
            var e = ut.asn1
              , n = e.DERBoolean
              , r = e.DERInteger
              , i = e.DERSequence;
            this.getExtnValueHex = function () {
              var t = new Array;
              this.cA && t.push(new n),
              this.pathLen > -1 && t.push(new r({
                int: this.pathLen
              }));
              var e = new i({
                array: t
              });
              return this.asn1ExtnValue = e,
                this.asn1ExtnValue.tohex();
            }
              ,
              this.oid = '2.5.29.19',
              this.cA = !1,
              this.pathLen = -1,
            void 0 !== t && (void 0 !== t.cA && (this.cA = t.cA),
            void 0 !== t.pathLen && (this.pathLen = t.pathLen));
          }
          ,
          ne(ut.asn1.x509.BasicConstraints, ut.asn1.x509.Extension),
          ut.asn1.x509.CRLDistributionPoints = function (t) {
            ut.asn1.x509.CRLDistributionPoints.superclass.constructor.call(this, t);
            var e = ut.asn1
              , n = e.x509;
            this.getExtnValueHex = function () {
              return this.asn1ExtnValue.tohex();
            }
              ,
              this.setByDPArray = function (t) {
                for (var r = [], i = 0; i < t.length; i++)
                  if (t[i] instanceof ut.asn1.ASN1Object)
                    r.push(t[i]);
                  else {
                    var o = new n.DistributionPoint(t[i]);
                    r.push(o);
                  }
                this.asn1ExtnValue = new e.DERSequence({
                  array: r
                });
              }
              ,
              this.setByOneURI = function (t) {
                var e = new n.DistributionPoint({
                  fulluri: t
                });
                this.setByDPArray([e]);
              }
              ,
              this.oid = '2.5.29.31',
            void 0 !== t && (void 0 !== t.array ? this.setByDPArray(t.array) : void 0 !== t.uri && this.setByOneURI(t.uri));
          }
          ,
          ne(ut.asn1.x509.CRLDistributionPoints, ut.asn1.x509.Extension),
          ut.asn1.x509.DistributionPoint = function (t) {
            ut.asn1.x509.DistributionPoint.superclass.constructor.call(this);
            var e = ut.asn1
              , n = e.x509.DistributionPointName;
            this.tohex = function () {
              var t = new e.DERSequence;
              if (null != this.asn1DP) {
                var n = new e.DERTaggedObject({
                  explicit: !0,
                  tag: 'a0',
                  obj: this.asn1DP
                });
                t.appendASN1Object(n);
              }
              return this.hTLV = t.tohex(),
                this.hTLV;
            }
              ,
              this.getEncodedHex = function () {
                return this.tohex();
              }
              ,
            void 0 !== t && (void 0 !== t.dpobj ? this.asn1DP = t.dpobj : void 0 !== t.dpname ? this.asn1DP = new n(t.dpname) : void 0 !== t.fulluri && (this.asn1DP = new n({
              full: [{
                uri: t.fulluri
              }]
            })));
          }
          ,
          ne(ut.asn1.x509.DistributionPoint, ut.asn1.ASN1Object),
          ut.asn1.x509.DistributionPointName = function (t) {
            ut.asn1.x509.DistributionPointName.superclass.constructor.call(this);
            var e = ut.asn1
              , n = e.DERTaggedObject;
            if (this.tohex = function () {
              if ('full' != this.type)
                throw new Error('currently type shall be \'full\': ' + this.type);
              return this.asn1Obj = new n({
                explicit: !1,
                tag: this.tag,
                obj: this.asn1V
              }),
                this.hTLV = this.asn1Obj.tohex(),
                this.hTLV;
            }
              ,
              this.getEncodedHex = function () {
                return this.tohex();
              }
              ,
            void 0 !== t)
              if (e.x509.GeneralNames.prototype.isPrototypeOf(t))
                this.type = 'full',
                  this.tag = 'a0',
                  this.asn1V = t;
              else {
                if (void 0 === t.full)
                  throw new Error('This class supports GeneralNames only as argument');
                this.type = 'full',
                  this.tag = 'a0',
                  this.asn1V = new e.x509.GeneralNames(t.full);
              }
          }
          ,
          ne(ut.asn1.x509.DistributionPointName, ut.asn1.ASN1Object),
          ut.asn1.x509.CertificatePolicies = function (t) {
            ut.asn1.x509.CertificatePolicies.superclass.constructor.call(this, t);
            var e = ut.asn1
              , n = e.x509
              , r = e.DERSequence
              , i = n.PolicyInformation;
            this.params = null,
              this.getExtnValueHex = function () {
                for (var t = [], e = 0; e < this.params.array.length; e++)
                  t.push(new i(this.params.array[e]));
                var n = new r({
                  array: t
                });
                return this.asn1ExtnValue = n,
                  this.asn1ExtnValue.tohex();
              }
              ,
              this.oid = '2.5.29.32',
            void 0 !== t && (this.params = t);
          }
          ,
          ne(ut.asn1.x509.CertificatePolicies, ut.asn1.x509.Extension),
          ut.asn1.x509.PolicyInformation = function (t) {
            ut.asn1.x509.PolicyInformation.superclass.constructor.call(this, t);
            var e = ut.asn1
              , n = e.DERSequence
              , r = e.DERObjectIdentifier
              , i = e.x509.PolicyQualifierInfo;
            this.params = null,
              this.tohex = function () {
                if (void 0 === this.params.policyoid && void 0 === this.params.array)
                  throw new Error('parameter oid and array missing');
                var t = [new r(this.params.policyoid)];
                if (void 0 !== this.params.array) {
                  for (var e = [], o = 0; o < this.params.array.length; o++)
                    e.push(new i(this.params.array[o]));
                  e.length > 0 && t.push(new n({
                    array: e
                  }));
                }
                return new n({
                  array: t
                }).tohex();
              }
              ,
              this.getEncodedHex = function () {
                return this.tohex();
              }
              ,
            void 0 !== t && (this.params = t);
          }
          ,
          ne(ut.asn1.x509.PolicyInformation, ut.asn1.ASN1Object),
          ut.asn1.x509.PolicyQualifierInfo = function (t) {
            ut.asn1.x509.PolicyQualifierInfo.superclass.constructor.call(this, t);
            var e = ut.asn1
              , n = e.DERSequence
              , r = e.DERIA5String
              , i = e.DERObjectIdentifier
              , o = e.x509.UserNotice;
            this.params = null,
              this.tohex = function () {
                return void 0 !== this.params.cps ? new n({
                  array: [new i({
                    oid: '1.3.6.1.5.5.7.2.1'
                  }), new r({
                    str: this.params.cps
                  })]
                }).tohex() : null != this.params.unotice ? new n({
                  array: [new i({
                    oid: '1.3.6.1.5.5.7.2.2'
                  }), new o(this.params.unotice)]
                }).tohex() : void 0;
              }
              ,
              this.getEncodedHex = function () {
                return this.tohex();
              }
              ,
            void 0 !== t && (this.params = t);
          }
          ,
          ne(ut.asn1.x509.PolicyQualifierInfo, ut.asn1.ASN1Object),
          ut.asn1.x509.UserNotice = function (t) {
            ut.asn1.x509.UserNotice.superclass.constructor.call(this, t);
            var e = ut.asn1.DERSequence
              , n = (ut.asn1.DERInteger,
              ut.asn1.x509.DisplayText)
              , r = ut.asn1.x509.NoticeReference;
            this.params = null,
              this.tohex = function () {
                var t = [];
                return void 0 !== this.params.noticeref && t.push(new r(this.params.noticeref)),
                void 0 !== this.params.exptext && t.push(new n(this.params.exptext)),
                  new e({
                    array: t
                  }).tohex();
              }
              ,
              this.getEncodedHex = function () {
                return this.tohex();
              }
              ,
            void 0 !== t && (this.params = t);
          }
          ,
          ne(ut.asn1.x509.UserNotice, ut.asn1.ASN1Object),
          ut.asn1.x509.NoticeReference = function (t) {
            ut.asn1.x509.NoticeReference.superclass.constructor.call(this, t);
            var e = ut.asn1.DERSequence
              , n = ut.asn1.DERInteger
              , r = ut.asn1.x509.DisplayText;
            this.params = null,
              this.tohex = function () {
                var t = [];
                if (void 0 !== this.params.org && t.push(new r(this.params.org)),
                void 0 !== this.params.noticenum) {
                  for (var i = [], o = this.params.noticenum, s = 0; s < o.length; s++)
                    i.push(new n(o[s]));
                  t.push(new e({
                    array: i
                  }));
                }
                if (0 == t.length)
                  throw new Error('parameter is empty');
                return new e({
                  array: t
                }).tohex();
              }
              ,
              this.getEncodedHex = function () {
                return this.tohex();
              }
              ,
            void 0 !== t && (this.params = t);
          }
          ,
          ne(ut.asn1.x509.NoticeReference, ut.asn1.ASN1Object),
          ut.asn1.x509.DisplayText = function (t) {
            ut.asn1.x509.DisplayText.superclass.constructor.call(this, t),
              this.hT = '0c',
            void 0 !== t && ('ia5' === t.type ? this.hT = '16' : 'vis' === t.type ? this.hT = '1a' : 'bmp' === t.type && (this.hT = '1e'));
          }
          ,
          ne(ut.asn1.x509.DisplayText, ut.asn1.DERAbstractString),
          ut.asn1.x509.PolicyMappings = function (t) {
            ut.asn1.x509.PolicyMappings.superclass.constructor.call(this, t);
            var e = ut.asn1
              , n = (e.x509,
              e.ASN1Util.newObject);
            this.params = null,
              this.getExtnValueHex = function () {
                for (var t = this.params, e = [], r = 0; r < t.array.length; r++) {
                  var i = t.array[r];
                  e.push({
                    seq: [{
                      oid: i[0]
                    }, {
                      oid: i[1]
                    }]
                  });
                }
                return this.asn1ExtnValue = n({
                  seq: e
                }),
                  this.asn1ExtnValue.tohex();
              }
              ,
              this.oid = '2.5.29.33',
            void 0 !== t && (this.params = t);
          }
          ,
          ne(ut.asn1.x509.PolicyMappings, ut.asn1.x509.Extension),
          ut.asn1.x509.PolicyConstraints = function (t) {
            ut.asn1.x509.PolicyConstraints.superclass.constructor.call(this, t);
            var e = ut.asn1
              , n = (e.x509,
              e.ASN1Util.newObject);
            this.params = null,
              this.getExtnValueHex = function () {
                var t = this.params
                  , e = [];
                return null != t.reqexp && e.push({
                  tag: {
                    tagi: '80',
                    obj: {
                      int: t.reqexp
                    }
                  }
                }),
                null != t.inhibit && e.push({
                  tag: {
                    tagi: '81',
                    obj: {
                      int: t.inhibit
                    }
                  }
                }),
                  this.asn1ExtnValue = n({
                    seq: e
                  }),
                  this.asn1ExtnValue.tohex();
              }
              ,
              this.oid = '2.5.29.36',
            void 0 !== t && (this.params = t);
          }
          ,
          ne(ut.asn1.x509.PolicyConstraints, ut.asn1.x509.Extension),
          ut.asn1.x509.InhibitAnyPolicy = function (t) {
            ut.asn1.x509.InhibitAnyPolicy.superclass.constructor.call(this, t);
            var e = ut.asn1
              , n = (e.x509,
              e.ASN1Util.newObject);
            this.params = null,
              this.getExtnValueHex = function () {
                return this.asn1ExtnValue = n({
                  int: this.params.skip
                }),
                  this.asn1ExtnValue.tohex();
              }
              ,
              this.oid = '2.5.29.54',
            void 0 !== t && (this.params = t);
          }
          ,
          ne(ut.asn1.x509.InhibitAnyPolicy, ut.asn1.x509.Extension),
          ut.asn1.x509.NameConstraints = function (t) {
            ut.asn1.x509.NameConstraints.superclass.constructor.call(this, t);
            var e = ut.asn1
              , n = e.x509
              , r = e.ASN1Util.newObject
              , i = n.GeneralSubtree;
            this.params = null,
              this.getExtnValueHex = function () {
                var t = this.params
                  , e = [];
                if (null != t.permit && null != t.permit.length) {
                  for (var n = [], o = 0; o < t.permit.length; o++)
                    n.push(new i(t.permit[o]));
                  e.push({
                    tag: {
                      tagi: 'a0',
                      obj: {
                        seq: n
                      }
                    }
                  });
                }
                if (null != t.exclude && null != t.exclude.length) {
                  var s = [];
                  for (o = 0; o < t.exclude.length; o++)
                    s.push(new i(t.exclude[o]));
                  e.push({
                    tag: {
                      tagi: 'a1',
                      obj: {
                        seq: s
                      }
                    }
                  });
                }
                return this.asn1ExtnValue = r({
                  seq: e
                }),
                  this.asn1ExtnValue.tohex();
              }
              ,
              this.oid = '2.5.29.30',
            void 0 !== t && (this.params = t);
          }
          ,
          ne(ut.asn1.x509.NameConstraints, ut.asn1.x509.Extension),
          ut.asn1.x509.GeneralSubtree = function (t) {
            ut.asn1.x509.GeneralSubtree.superclass.constructor.call(this);
            var e = ut.asn1
              , n = e.x509.GeneralName
              , r = e.ASN1Util.newObject;
            this.params = null,
              this.setByParam = function (t) {
                this.params = t;
              }
              ,
              this.tohex = function () {
                var t = this.params
                  , e = [new n(t)];
                return null != t.min && e.push({
                  tag: {
                    tagi: '80',
                    obj: {
                      int: t.min
                    }
                  }
                }),
                null != t.max && e.push({
                  tag: {
                    tagi: '81',
                    obj: {
                      int: t.max
                    }
                  }
                }),
                  r({
                    seq: e
                  }).tohex();
              }
              ,
              this.getEncodedHex = function () {
                return this.tohex();
              }
              ,
            void 0 !== t && this.setByParam(t);
          }
          ,
          ne(ut.asn1.x509.GeneralSubtree, ut.asn1.ASN1Object),
          ut.asn1.x509.ExtKeyUsage = function (t) {
            ut.asn1.x509.ExtKeyUsage.superclass.constructor.call(this, t);
            var e = ut.asn1;
            this.setPurposeArray = function (t) {
              this.asn1ExtnValue = new e.DERSequence;
              for (var n = 0; n < t.length; n++) {
                var r = new e.DERObjectIdentifier(t[n]);
                this.asn1ExtnValue.appendASN1Object(r);
              }
            }
              ,
              this.getExtnValueHex = function () {
                return this.asn1ExtnValue.tohex();
              }
              ,
              this.oid = '2.5.29.37',
            void 0 !== t && void 0 !== t.array && this.setPurposeArray(t.array);
          }
          ,
          ne(ut.asn1.x509.ExtKeyUsage, ut.asn1.x509.Extension),
          ut.asn1.x509.AuthorityKeyIdentifier = function (t) {
            ut.asn1.x509.AuthorityKeyIdentifier.superclass.constructor.call(this, t);
            var e = ut
              , n = e.asn1
              , r = n.DERTaggedObject
              , i = n.x509.GeneralNames;
            e.crypto.Util.isKey;
            this.asn1KID = null,
              this.asn1CertIssuer = null,
              this.asn1CertSN = null,
              this.getExtnValueHex = function () {
                var t = new Array;
                this.asn1KID && t.push(new r({
                  explicit: !1,
                  tag: '80',
                  obj: this.asn1KID
                })),
                this.asn1CertIssuer && t.push(new r({
                  explicit: !1,
                  tag: 'a1',
                  obj: new i([{
                    dn: this.asn1CertIssuer
                  }])
                })),
                this.asn1CertSN && t.push(new r({
                  explicit: !1,
                  tag: '82',
                  obj: this.asn1CertSN
                }));
                var e = new n.DERSequence({
                  array: t
                });
                return this.asn1ExtnValue = e,
                  this.asn1ExtnValue.tohex();
              }
              ,
              this.setKIDByParam = function (t) {
                if (void 0 !== t.str || void 0 !== t.hex)
                  this.asn1KID = new ut.asn1.DEROctetString(t);
                else if ('object' == typeof t && ut.crypto.Util.isKey(t) || 'string' == typeof t && -1 != t.indexOf('BEGIN ')) {
                  var e = t;
                  'string' == typeof t && (e = re.getKey(t));
                  var n = re.getKeyID(e);
                  this.asn1KID = new ut.asn1.DEROctetString({
                    hex: n
                  });
                }
              }
              ,
              this.setCertIssuerByParam = function (t) {
                void 0 !== t.str || void 0 !== t.ldapstr || void 0 !== t.hex || void 0 !== t.certsubject || void 0 !== t.certissuer ? this.asn1CertIssuer = new ut.asn1.x509.X500Name(t) : 'string' == typeof t && -1 != t.indexOf('BEGIN ') && -1 != t.indexOf('CERTIFICATE') && (this.asn1CertIssuer = new ut.asn1.x509.X500Name({
                  certissuer: t
                }));
              }
              ,
              this.setCertSNByParam = function (t) {
                if (void 0 !== t.str || void 0 !== t.bigint || void 0 !== t.hex)
                  this.asn1CertSN = new ut.asn1.DERInteger(t);
                else if ('string' == typeof t && -1 != t.indexOf('BEGIN ') && t.indexOf('CERTIFICATE')) {
                  var e = new ae;
                  e.readCertPEM(t);
                  var n = e.getSerialNumberHex();
                  this.asn1CertSN = new ut.asn1.DERInteger({
                    hex: n
                  });
                }
              }
              ,
              this.oid = '2.5.29.35',
            void 0 !== t && (void 0 !== t.kid && this.setKIDByParam(t.kid),
            void 0 !== t.issuer && this.setCertIssuerByParam(t.issuer),
            void 0 !== t.sn && this.setCertSNByParam(t.sn),
            void 0 !== t.issuersn && 'string' == typeof t.issuersn && -1 != t.issuersn.indexOf('BEGIN ') && t.issuersn.indexOf('CERTIFICATE') && (this.setCertSNByParam(t.issuersn),
              this.setCertIssuerByParam(t.issuersn)));
          }
          ,
          ne(ut.asn1.x509.AuthorityKeyIdentifier, ut.asn1.x509.Extension),
          ut.asn1.x509.SubjectKeyIdentifier = function (t) {
            ut.asn1.x509.SubjectKeyIdentifier.superclass.constructor.call(this, t);
            var e = ut.asn1.DEROctetString;
            this.asn1KID = null,
              this.getExtnValueHex = function () {
                return this.asn1ExtnValue = this.asn1KID,
                  this.asn1ExtnValue.tohex();
              }
              ,
              this.setKIDByParam = function (t) {
                if (void 0 !== t.str || void 0 !== t.hex)
                  this.asn1KID = new e(t);
                else if ('object' == typeof t && ut.crypto.Util.isKey(t) || 'string' == typeof t && -1 != t.indexOf('BEGIN')) {
                  var n = t;
                  'string' == typeof t && (n = re.getKey(t));
                  var r = re.getKeyID(n);
                  this.asn1KID = new ut.asn1.DEROctetString({
                    hex: r
                  });
                }
              }
              ,
              this.oid = '2.5.29.14',
            void 0 !== t && void 0 !== t.kid && this.setKIDByParam(t.kid);
          }
          ,
          ne(ut.asn1.x509.SubjectKeyIdentifier, ut.asn1.x509.Extension),
          ut.asn1.x509.AuthorityInfoAccess = function (t) {
            ut.asn1.x509.AuthorityInfoAccess.superclass.constructor.call(this, t),
              this.setAccessDescriptionArray = function (t) {
                for (var e = new Array, n = ut.asn1, r = n.DERSequence, i = n.DERObjectIdentifier, o = n.x509.GeneralName, s = 0; s < t.length; s++) {
                  var a, u = t[s];
                  if (void 0 !== u.ocsp)
                    a = new r({
                      array: [new i({
                        oid: '1.3.6.1.5.5.7.48.1'
                      }), new o({
                        uri: u.ocsp
                      })]
                    });
                  else {
                    if (void 0 === u.caissuer)
                      throw new Error('unknown AccessMethod parameter: ' + JSON.stringify(u));
                    a = new r({
                      array: [new i({
                        oid: '1.3.6.1.5.5.7.48.2'
                      }), new o({
                        uri: u.caissuer
                      })]
                    });
                  }
                  e.push(a);
                }
                this.asn1ExtnValue = new r({
                  array: e
                });
              }
              ,
              this.getExtnValueHex = function () {
                return this.asn1ExtnValue.tohex();
              }
              ,
              this.oid = '1.3.6.1.5.5.7.1.1',
            void 0 !== t && void 0 !== t.array && this.setAccessDescriptionArray(t.array);
          }
          ,
          ne(ut.asn1.x509.AuthorityInfoAccess, ut.asn1.x509.Extension),
          ut.asn1.x509.SubjectAltName = function (t) {
            ut.asn1.x509.SubjectAltName.superclass.constructor.call(this, t),
              this.setNameArray = function (t) {
                this.asn1ExtnValue = new ut.asn1.x509.GeneralNames(t);
              }
              ,
              this.getExtnValueHex = function () {
                return this.asn1ExtnValue.tohex();
              }
              ,
              this.oid = '2.5.29.17',
            void 0 !== t && void 0 !== t.array && this.setNameArray(t.array);
          }
          ,
          ne(ut.asn1.x509.SubjectAltName, ut.asn1.x509.Extension),
          ut.asn1.x509.IssuerAltName = function (t) {
            ut.asn1.x509.IssuerAltName.superclass.constructor.call(this, t),
              this.setNameArray = function (t) {
                this.asn1ExtnValue = new ut.asn1.x509.GeneralNames(t);
              }
              ,
              this.getExtnValueHex = function () {
                return this.asn1ExtnValue.tohex();
              }
              ,
              this.oid = '2.5.29.18',
            void 0 !== t && void 0 !== t.array && this.setNameArray(t.array);
          }
          ,
          ne(ut.asn1.x509.IssuerAltName, ut.asn1.x509.Extension),
          ut.asn1.x509.SubjectDirectoryAttributes = function (t) {
            ut.asn1.x509.SubjectDirectoryAttributes.superclass.constructor.call(this, t);
            var e = ut.asn1
              , n = e.DERSequence
              , r = e.ASN1Util.newObject
              , i = e.x509.OID.name2oid;
            this.params = null,
              this.getExtnValueHex = function () {
                for (var t = [], e = 0; e < this.params.array.length; e++) {
                  var o = this.params.array[e];
                  if (null == o.attr || null == o.array) {
                    var s = {
                      seq: [{
                        oid: '1.2.3.4'
                      }, {
                        set: [{
                          utf8str: 'DE'
                        }]
                      }]
                    };
                    if ('dateOfBirth' == o.attr)
                      s.seq[0].oid = i(o.attr),
                        s.seq[1].set[0] = {
                          gentime: o.str
                        };
                    else if ('placeOfBirth' == o.attr)
                      s.seq[0].oid = i(o.attr),
                        s.seq[1].set[0] = {
                          utf8str: o.str
                        };
                    else if ('gender' == o.attr)
                      s.seq[0].oid = i(o.attr),
                        s.seq[1].set[0] = {
                          prnstr: o.str
                        };
                    else if ('countryOfCitizenship' == o.attr)
                      s.seq[0].oid = i(o.attr),
                        s.seq[1].set[0] = {
                          prnstr: o.str
                        };
                    else {
                      if ('countryOfResidence' != o.attr)
                        throw new Error('unsupported attribute: ' + o.attr);
                      s.seq[0].oid = i(o.attr),
                        s.seq[1].set[0] = {
                          prnstr: o.str
                        };
                    }
                    t.push(new r(s));
                  } else {
                    var a = {
                      seq: [{
                        oid: o.attr
                      }, {
                        set: o.array
                      }]
                    };
                    t.push(r(a));
                  }
                }
                var u = new n({
                  array: t
                });
                return this.asn1ExtnValue = u,
                  this.asn1ExtnValue.tohex();
              }
              ,
              this.oid = '2.5.29.9',
            void 0 !== t && (this.params = t);
          }
          ,
          ne(ut.asn1.x509.SubjectDirectoryAttributes, ut.asn1.x509.Extension),
          ut.asn1.x509.PrivateExtension = function (t) {
            ut.asn1.x509.PrivateExtension.superclass.constructor.call(this, t);
            var e = ut
              , n = e.lang.String.isHex
              , r = e.asn1
              , i = r.x509.OID.name2oid
              , o = r.ASN1Util.newObject;
            this.params = null,
              this.setByParam = function (t) {
                this.oid = i(t.extname),
                  this.params = t;
              }
              ,
              this.getExtnValueHex = function () {
                if (null == this.params.extname || null == this.params.extn)
                  throw new Error('extname or extnhex not specified');
                var t = this.params.extn;
                if ('string' == typeof t && n(t))
                  return t;
                if ('object' == typeof t)
                  try {
                    return o(t).tohex();
                  } catch (t) {
                  }
                throw new Error('unsupported extn value');
              }
              ,
            null != t && this.setByParam(t);
          }
          ,
          ne(ut.asn1.x509.PrivateExtension, ut.asn1.x509.Extension),
          ut.asn1.x509.CRL = function (t) {
            ut.asn1.x509.CRL.superclass.constructor.call(this);
            var e = ut.asn1
              , n = e.DERSequence
              , r = e.DERBitString
              , i = e.x509
              , o = i.AlgorithmIdentifier
              , s = i.TBSCertList;
            this.params = void 0,
              this.setByParam = function (t) {
                this.params = t;
              }
              ,
              this.sign = function () {
                var t = new s(this.params).tohex()
                  , e = new ut.crypto.Signature({
                  alg: this.params.sigalg
                });
                e.init(this.params.cakey),
                  e.updateHex(t);
                var n = e.sign();
                this.params.sighex = n;
              }
              ,
              this.getPEM = function () {
                return kt(this.tohex(), 'X509 CRL');
              }
              ,
              this.tohex = function () {
                var t = this.params;
                if (null == t.tbsobj && (t.tbsobj = new s(t)),
                null == t.sighex && null != t.cakey && this.sign(),
                null == t.sighex)
                  throw new Error('sighex or cakey parameter not defined');
                var e = [];
                return e.push(t.tbsobj),
                  e.push(new o({
                    name: t.sigalg
                  })),
                  e.push(new r({
                    hex: '00' + t.sighex
                  })),
                  new n({
                    array: e
                  }).tohex();
              }
              ,
              this.getEncodedHex = function () {
                return this.tohex();
              }
              ,
            null != t && (this.params = t);
          }
          ,
          ne(ut.asn1.x509.CRL, ut.asn1.ASN1Object),
          ut.asn1.x509.TBSCertList = function (t) {
            ut.asn1.x509.TBSCertList.superclass.constructor.call(this);
            var e = ut.asn1
              , n = e.DERInteger
              , r = e.DERSequence
              , i = e.DERTaggedObject
              , o = (e.DERObjectIdentifier,
              e.x509)
              , s = o.AlgorithmIdentifier
              , a = o.Time
              , u = o.Extensions
              , c = o.X500Name;
            this.params = null,
              this.setByParam = function (t) {
                this.params = t;
              }
              ,
              this.getRevCertSequence = function () {
                for (var t = [], e = this.params.revcert, i = 0; i < e.length; i++) {
                  var o = [new n(e[i].sn), new a(e[i].date)];
                  null != e[i].ext && o.push(new u(e[i].ext)),
                    t.push(new r({
                      array: o
                    }));
                }
                return new r({
                  array: t
                });
              }
              ,
              this.tohex = function () {
                var t = []
                  , e = this.params;
                if (null != e.version) {
                  var o = e.version - 1
                    , l = new n({
                    int: o
                  });
                  t.push(l);
                }
                if (t.push(new s({
                  name: e.sigalg
                })),
                  t.push(new c(e.issuer)),
                  t.push(new a(e.thisupdate)),
                null != e.nextupdate && t.push(new a(e.nextupdate)),
                null != e.revcert && t.push(this.getRevCertSequence()),
                null != e.ext) {
                  var h = new u(e.ext);
                  t.push(new i({
                    tag: 'a0',
                    explicit: !0,
                    obj: h
                  }));
                }
                return new r({
                  array: t
                }).tohex();
              }
              ,
              this.getEncodedHex = function () {
                return this.tohex();
              }
              ,
            void 0 !== t && this.setByParam(t);
          }
          ,
          ne(ut.asn1.x509.TBSCertList, ut.asn1.ASN1Object),
          ut.asn1.x509.CRLEntry = function (t) {
            ut.asn1.x509.CRLEntry.superclass.constructor.call(this);
            var e = ut.asn1;
            this.setCertSerial = function (t) {
              this.sn = new e.DERInteger(t);
            }
              ,
              this.setRevocationDate = function (t) {
                this.time = new e.x509.Time(t);
              }
              ,
              this.tohex = function () {
                var t = new e.DERSequence({
                  array: [this.sn, this.time]
                });
                return this.TLV = t.tohex(),
                  this.TLV;
              }
              ,
              this.getEncodedHex = function () {
                return this.tohex();
              }
              ,
            void 0 !== t && (void 0 !== t.time && this.setRevocationDate(t.time),
            void 0 !== t.sn && this.setCertSerial(t.sn));
          }
          ,
          ne(ut.asn1.x509.CRLEntry, ut.asn1.ASN1Object),
          ut.asn1.x509.CRLNumber = function (t) {
            ut.asn1.x509.CRLNumber.superclass.constructor.call(this, t),
              this.params = void 0,
              this.getExtnValueHex = function () {
                return this.asn1ExtnValue = new ut.asn1.DERInteger(this.params.num),
                  this.asn1ExtnValue.tohex();
              }
              ,
              this.oid = '2.5.29.20',
            null != t && (this.params = t);
          }
          ,
          ne(ut.asn1.x509.CRLNumber, ut.asn1.x509.Extension),
          ut.asn1.x509.CRLReason = function (t) {
            ut.asn1.x509.CRLReason.superclass.constructor.call(this, t),
              this.params = void 0,
              this.getExtnValueHex = function () {
                return this.asn1ExtnValue = new ut.asn1.DEREnumerated(this.params.code),
                  this.asn1ExtnValue.tohex();
              }
              ,
              this.oid = '2.5.29.21',
            null != t && (this.params = t);
          }
          ,
          ne(ut.asn1.x509.CRLReason, ut.asn1.x509.Extension),
          ut.asn1.x509.OCSPNonce = function (t) {
            ut.asn1.x509.OCSPNonce.superclass.constructor.call(this, t),
              this.params = void 0,
              this.getExtnValueHex = function () {
                return this.asn1ExtnValue = new ut.asn1.DEROctetString(this.params),
                  this.asn1ExtnValue.tohex();
              }
              ,
              this.oid = '1.3.6.1.5.5.7.48.1.2',
            null != t && (this.params = t);
          }
          ,
          ne(ut.asn1.x509.OCSPNonce, ut.asn1.x509.Extension),
          ut.asn1.x509.OCSPNoCheck = function (t) {
            ut.asn1.x509.OCSPNoCheck.superclass.constructor.call(this, t),
              this.params = void 0,
              this.getExtnValueHex = function () {
                return this.asn1ExtnValue = new ut.asn1.DERNull,
                  this.asn1ExtnValue.tohex();
              }
              ,
              this.oid = '1.3.6.1.5.5.7.48.1.5',
            null != t && (this.params = t);
          }
          ,
          ne(ut.asn1.x509.OCSPNoCheck, ut.asn1.x509.Extension),
          ut.asn1.x509.AdobeTimeStamp = function (t) {
            ut.asn1.x509.AdobeTimeStamp.superclass.constructor.call(this, t);
            var e = ut.asn1
              , n = e.DERInteger
              , r = e.DERBoolean
              , i = e.DERSequence
              , o = e.x509.GeneralName;
            this.params = null,
              this.getExtnValueHex = function () {
                var t = this.params
                  , e = [new n(1)];
                return e.push(new o({
                  uri: t.uri
                })),
                null != t.reqauth && e.push(new r(t.reqauth)),
                  this.asn1ExtnValue = new i({
                    array: e
                  }),
                  this.asn1ExtnValue.tohex();
              }
              ,
              this.oid = '1.2.840.113583.1.1.9.1',
            void 0 !== t && this.setByParam(t);
          }
        ,
        ne(ut.asn1.x509.AdobeTimeStamp, ut.asn1.x509.Extension),
        ut.asn1.x509.X500Name = function (t) {
          ut.asn1.x509.X500Name.superclass.constructor.call(this),
            this.asn1Array = [],
            this.paramArray = [],
            this.sRule = 'utf8';
          var e = ut.asn1
            , n = e.x509
            , r = n.RDN;
          this.setByString = function (t, e) {
            void 0 !== e && (this.sRule = e);
            var n = t.split('/');
            n.shift();
            for (var i = [], o = 0; o < n.length; o++)
              if (n[o].match(/^[^=]+=.+$/))
                i.push(n[o]);
              else {
                var s = i.length - 1;
                i[s] = i[s] + '/' + n[o];
              }
            for (o = 0; o < i.length; o++)
              this.asn1Array.push(new r({
                str: i[o],
                rule: this.sRule
              }));
          }
            ,
            this.setByLdapString = function (t, e) {
              void 0 !== e && (this.sRule = e);
              var r = n.X500Name.ldapToCompat(t);
              this.setByString(r, e);
            }
            ,
            this.setByObject = function (t, e) {
              for (var n in void 0 !== e && (this.sRule = e),
                t)
                if (t.hasOwnProperty(n)) {
                  var i = new r({
                    str: n + '=' + t[n],
                    rule: this.sRule
                  });
                  this.asn1Array ? this.asn1Array.push(i) : this.asn1Array = [i];
                }
            }
            ,
            this.setByParam = function (t) {
              var e;
              (void 0 !== t.rule && (this.sRule = t.rule),
              void 0 !== t.array) ? this.paramArray = t.array : void 0 !== t.str ? this.setByString(t.str) : void 0 !== t.ldapstr ? this.setByLdapString(t.ldapstr) : void 0 !== t.hex ? this.hTLV = t.hex : void 0 !== t.certissuer ? ((e = new ae).readCertPEM(t.certissuer),
                this.hTLV = e.getIssuerHex()) : void 0 !== t.certsubject ? ((e = new ae).readCertPEM(t.certsubject),
                this.hTLV = e.getSubjectHex()) : 'object' == typeof t && void 0 === t.certsubject && void 0 === t.certissuer && this.setByObject(t);
            }
            ,
            this.tohex = function () {
              if ('string' == typeof this.hTLV)
                return this.hTLV;
              if (0 == this.asn1Array.length && this.paramArray.length > 0)
                for (var t = 0; t < this.paramArray.length; t++) {
                  var n = {
                    array: this.paramArray[t]
                  };
                  'utf8' != this.sRule && (n.rule = this.sRule);
                  var i = new r(n);
                  this.asn1Array.push(i);
                }
              var o = new e.DERSequence({
                array: this.asn1Array
              });
              return this.hTLV = o.tohex(),
                this.hTLV;
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          void 0 !== t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.x509.X500Name, ut.asn1.ASN1Object),
        ut.asn1.x509.X500Name.compatToLDAP = function (t) {
          if ('/' !== t.substr(0, 1))
            throw 'malformed input';
          var e = (t = t.substr(1)).split('/');
          return e.reverse(),
            (e = e.map((function (t) {
                return t.replace(/,/, '\\,');
              }
            ))).join(',');
        }
        ,
        ut.asn1.x509.X500Name.onelineToLDAP = function (t) {
          return ut.asn1.x509.X500Name.compatToLDAP(t);
        }
        ,
        ut.asn1.x509.X500Name.ldapToCompat = function (t) {
          for (var e = t.split(','), n = !1, r = [], i = 0; e.length > 0; i++) {
            var o = e.shift();
            if (!0 === n) {
              var s = (r.pop() + ',' + o).replace(/\\,/g, ',');
              r.push(s),
                n = !1;
            } else
              r.push(o);
            '\\' === o.substr(-1, 1) && (n = !0);
          }
          return (r = r.map((function (t) {
              return t.replace('/', '\\/');
            }
          ))).reverse(),
          '/' + r.join('/');
        }
        ,
        ut.asn1.x509.X500Name.ldapToOneline = function (t) {
          return ut.asn1.x509.X500Name.ldapToCompat(t);
        }
        ,
        ut.asn1.x509.RDN = function (t) {
          ut.asn1.x509.RDN.superclass.constructor.call(this),
            this.asn1Array = [],
            this.paramArray = [],
            this.sRule = 'utf8';
          var e = ut.asn1.x509.AttributeTypeAndValue;
          this.setByParam = function (t) {
            void 0 !== t.rule && (this.sRule = t.rule),
            void 0 !== t.str && this.addByMultiValuedString(t.str),
            void 0 !== t.array && (this.paramArray = t.array);
          }
            ,
            this.addByString = function (t) {
              this.asn1Array.push(new ut.asn1.x509.AttributeTypeAndValue({
                str: t,
                rule: this.sRule
              }));
            }
            ,
            this.addByMultiValuedString = function (t) {
              for (var e = ut.asn1.x509.RDN.parseString(t), n = 0; n < e.length; n++)
                this.addByString(e[n]);
            }
            ,
            this.tohex = function () {
              if (0 == this.asn1Array.length && this.paramArray.length > 0)
                for (var t = 0; t < this.paramArray.length; t++) {
                  var n = this.paramArray[t];
                  void 0 !== n.rule && 'utf8' != this.sRule && (n.rule = this.sRule);
                  var r = new e(n);
                  this.asn1Array.push(r);
                }
              var i = new ut.asn1.DERSet({
                array: this.asn1Array
              });
              return this.TLV = i.tohex(),
                this.TLV;
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          void 0 !== t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.x509.RDN, ut.asn1.ASN1Object),
        ut.asn1.x509.RDN.parseString = function (t) {
          for (var e = t.split(/\+/), n = !1, r = [], i = 0; e.length > 0; i++) {
            var o = e.shift();
            if (!0 === n) {
              var s = (r.pop() + '+' + o).replace(/\\\+/g, '+');
              r.push(s),
                n = !1;
            } else
              r.push(o);
            '\\' === o.substr(-1, 1) && (n = !0);
          }
          var a = !1
            , u = [];
          for (i = 0; r.length > 0; i++) {
            o = r.shift();
            if (!0 === a) {
              var c = u.pop();
              if (o.match(/"$/)) {
                s = (c + '+' + o).replace(/^([^=]+)="(.*)"$/, '$1=$2');
                u.push(s),
                  a = !1;
              } else
                u.push(c + '+' + o);
            } else
              u.push(o);
            o.match(/^[^=]+="/) && (a = !0);
          }
          return u;
        }
        ,
        ut.asn1.x509.AttributeTypeAndValue = function (t) {
          ut.asn1.x509.AttributeTypeAndValue.superclass.constructor.call(this),
            this.sRule = 'utf8',
            this.sType = null,
            this.sValue = null,
            this.dsType = null;
          var e = ut
            , n = e.asn1
            , r = n.DERSequence
            , i = n.DERUTF8String
            , o = n.DERPrintableString
            , s = n.DERTeletexString
            , a = n.DERIA5String
            , u = n.DERVisibleString
            , c = n.DERBMPString
            , l = e.lang.String.isMail
            , h = e.lang.String.isPrintable;
          this.setByParam = function (t) {
            if (void 0 !== t.rule && (this.sRule = t.rule),
            void 0 !== t.ds && (this.dsType = t.ds),
            void 0 === t.value && void 0 !== t.str) {
              var e = t.str.match(/^([^=]+)=(.+)$/);
              if (!e)
                throw new Error('malformed attrTypeAndValueStr: ' + attrTypeAndValueStr);
              this.sType = e[1],
                this.sValue = e[2];
            } else
              this.sType = t.type,
                this.sValue = t.value;
          }
            ,
            this.setByString = function (t, e) {
              void 0 !== e && (this.sRule = e);
              var n = t.match(/^([^=]+)=(.+)$/);
              if (!n)
                throw new Error('malformed attrTypeAndValueStr: ' + attrTypeAndValueStr);
              this.setByAttrTypeAndValueStr(n[1], n[2]);
            }
            ,
            this._getDsType = function () {
              var t = this.sType
                , e = this.sValue
                , n = this.sRule;
              return 'prn' === n ? 'CN' == t && l(e) ? 'ia5' : h(e) ? 'prn' : 'utf8' : 'utf8' === n ? 'CN' == t && l(e) ? 'ia5' : 'C' == t ? 'prn' : 'utf8' : 'utf8';
            }
            ,
            this.setByAttrTypeAndValueStr = function (t, e, n) {
              void 0 !== n && (this.sRule = n),
                this.sType = t,
                this.sValue = e;
            }
            ,
            this.getValueObj = function (t, e) {
              if ('utf8' == t)
                return new i({
                  str: e
                });
              if ('prn' == t)
                return new o({
                  str: e
                });
              if ('tel' == t)
                return new s({
                  str: e
                });
              if ('ia5' == t)
                return new a({
                  str: e
                });
              if ('vis' == t)
                return new u({
                  str: e
                });
              if ('bmp' == t)
                return new c({
                  str: e
                });
              throw new Error('unsupported directory string type: type=' + t + ' value=' + e);
            }
            ,
            this.tohex = function () {
              null == this.dsType && (this.dsType = this._getDsType());
              var t = ut.asn1.x509.OID.atype2obj(this.sType)
                , e = this.getValueObj(this.dsType, this.sValue)
                , n = new r({
                array: [t, e]
              });
              return this.TLV = n.tohex(),
                this.TLV;
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          void 0 !== t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.x509.AttributeTypeAndValue, ut.asn1.ASN1Object),
        ut.asn1.x509.SubjectPublicKeyInfo = function (t) {
          ut.asn1.x509.SubjectPublicKeyInfo.superclass.constructor.call(this);
          var e = ut
            , n = e.asn1
            , r = n.DERInteger
            , i = n.DERBitString
            , o = n.DERObjectIdentifier
            , s = n.DERSequence
            , a = n.ASN1Util.newObject
            , u = n.x509.AlgorithmIdentifier
            , c = e.crypto;
          c.ECDSA,
            c.DSA;
          this.getASN1Object = function () {
            if (null == this.asn1AlgId || null == this.asn1SubjPKey)
              throw 'algId and/or subjPubKey not set';
            return new s({
              array: [this.asn1AlgId, this.asn1SubjPKey]
            });
          }
            ,
            this.tohex = function () {
              var t = this.getASN1Object();
              return this.hTLV = t.tohex(),
                this.hTLV;
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
            this.setPubKey = function (t) {
              try {
                if (t instanceof nt) {
                  var e = a({
                    seq: [{
                      int: {
                        bigint: t.n
                      }
                    }, {
                      int: {
                        int: t.e
                      }
                    }]
                  }).tohex();
                  this.asn1AlgId = new u({
                    name: 'rsaEncryption'
                  }),
                    this.asn1SubjPKey = new i({
                      hex: '00' + e
                    });
                }
              } catch (t) {
              }
              try {
                if (t instanceof ut.crypto.ECDSA) {
                  var n = new o({
                    name: t.curveName
                  });
                  this.asn1AlgId = new u({
                    name: 'ecPublicKey',
                    asn1params: n
                  }),
                    this.asn1SubjPKey = new i({
                      hex: '00' + t.pubKeyHex
                    });
                }
              } catch (t) {
              }
              try {
                if (t instanceof ut.crypto.DSA) {
                  n = new a({
                    seq: [{
                      int: {
                        bigint: t.p
                      }
                    }, {
                      int: {
                        bigint: t.q
                      }
                    }, {
                      int: {
                        bigint: t.g
                      }
                    }]
                  });
                  this.asn1AlgId = new u({
                    name: 'dsa',
                    asn1params: n
                  });
                  var s = new r({
                    bigint: t.y
                  });
                  this.asn1SubjPKey = new i({
                    hex: '00' + s.tohex()
                  });
                }
              } catch (t) {
              }
            }
            ,
          void 0 !== t && this.setPubKey(t);
        }
        ,
        ne(ut.asn1.x509.SubjectPublicKeyInfo, ut.asn1.ASN1Object),
        ut.asn1.x509.Time = function (t) {
          ut.asn1.x509.Time.superclass.constructor.call(this);
          var e = ut.asn1
            , n = e.DERUTCTime
            , r = e.DERGeneralizedTime;
          this.params = null,
            this.type = null,
            this.setTimeParams = function (t) {
              this.timeParams = t;
            }
            ,
            this.setByParam = function (t) {
              this.params = t;
            }
            ,
            this.getType = function (t) {
              return t.match(/^[0-9]{12}Z$/) ? 'utc' : t.match(/^[0-9]{14}Z$/) ? 'gen' : t.match(/^[0-9]{12}\.[0-9]+Z$/) ? 'utc' : t.match(/^[0-9]{14}\.[0-9]+Z$/) ? 'gen' : null;
            }
            ,
            this.tohex = function () {
              var t = this.params
                , e = null;
              if ('string' == typeof t && (t = {
                str: t
              }),
              null == t || !t.str || null != t.type && null != t.type || (t.type = this.getType(t.str)),
                null != t && t.str ? ('utc' == t.type && (e = new n(t.str)),
                'gen' == t.type && (e = new r(t.str))) : e = 'gen' == this.type ? new r : new n,
              null == e)
                throw new Error('wrong setting for Time');
              return this.TLV = e.tohex(),
                this.TLV;
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ut.asn1.x509.Time_bak = function (t) {
          ut.asn1.x509.Time_bak.superclass.constructor.call(this);
          var e = ut.asn1
            , n = e.DERUTCTime
            , r = e.DERGeneralizedTime;
          this.setTimeParams = function (t) {
            this.timeParams = t;
          }
            ,
            this.tohex = function () {
              var t = null;
              return t = null != this.timeParams ? 'utc' == this.type ? new n(this.timeParams) : new r(this.timeParams) : 'utc' == this.type ? new n : new r,
                this.TLV = t.tohex(),
                this.TLV;
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
            this.type = 'utc',
          void 0 !== t && (void 0 !== t.type ? this.type = t.type : void 0 !== t.str && (t.str.match(/^[0-9]{12}Z$/) && (this.type = 'utc'),
          t.str.match(/^[0-9]{14}Z$/) && (this.type = 'gen')),
            this.timeParams = t);
        }
        ,
        ne(ut.asn1.x509.Time, ut.asn1.ASN1Object),
        ut.asn1.x509.AlgorithmIdentifier = function (t) {
          ut.asn1.x509.AlgorithmIdentifier.superclass.constructor.call(this),
            this.nameAlg = null,
            this.asn1Alg = null,
            this.asn1Params = null,
            this.paramEmpty = !1;
          var e = ut.asn1
            , n = e.x509.AlgorithmIdentifier.PSSNAME2ASN1TLV;
          if (this.tohex = function () {
            if (null === this.nameAlg && null === this.asn1Alg)
              throw new Error('algorithm not specified');
            if (null !== this.nameAlg) {
              var t = null;
              for (var r in n)
                r === this.nameAlg && (t = n[r]);
              if (null !== t)
                return this.hTLV = t,
                  this.hTLV;
            }
            null !== this.nameAlg && null === this.asn1Alg && (this.asn1Alg = e.x509.OID.name2obj(this.nameAlg));
            var i = [this.asn1Alg];
            null !== this.asn1Params && i.push(this.asn1Params);
            var o = new e.DERSequence({
              array: i
            });
            return this.hTLV = o.tohex(),
              this.hTLV;
          }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          void 0 !== t && (void 0 !== t.name && (this.nameAlg = t.name),
          void 0 !== t.asn1params && (this.asn1Params = t.asn1params),
          void 0 !== t.paramempty && (this.paramEmpty = t.paramempty)),
          null === this.asn1Params && !1 === this.paramEmpty && null !== this.nameAlg) {
            void 0 !== this.nameAlg.name && (this.nameAlg = this.nameAlg.name);
            var r = this.nameAlg.toLowerCase();
            'withdsa' !== r.substr(-7, 7) && 'withecdsa' !== r.substr(-9, 9) && (this.asn1Params = new e.DERNull);
          }
        }
        ,
        ne(ut.asn1.x509.AlgorithmIdentifier, ut.asn1.ASN1Object),
        ut.asn1.x509.AlgorithmIdentifier.PSSNAME2ASN1TLV = {
          SHAwithRSAandMGF1: '300d06092a864886f70d01010a3000',
          SHA256withRSAandMGF1: '303d06092a864886f70d01010a3030a00d300b0609608648016503040201a11a301806092a864886f70d010108300b0609608648016503040201a203020120',
          SHA384withRSAandMGF1: '303d06092a864886f70d01010a3030a00d300b0609608648016503040202a11a301806092a864886f70d010108300b0609608648016503040202a203020130',
          SHA512withRSAandMGF1: '303d06092a864886f70d01010a3030a00d300b0609608648016503040203a11a301806092a864886f70d010108300b0609608648016503040203a203020140'
        },
        ut.asn1.x509.GeneralName = function (t) {
          ut.asn1.x509.GeneralName.superclass.constructor.call(this);
          var e = ut.asn1
            , n = e.x509
            , r = n.X500Name
            , i = n.OtherName
            , o = e.DERIA5String
            , s = (e.DERPrintableString,
            e.DEROctetString)
            , a = e.DERTaggedObject
            , u = e.ASN1Object
            , c = Error;
          this.params = null,
            this.setByParam = function (t) {
              this.params = t;
            }
            ,
            this.tohex = function () {
              var t, e, n = this.params, l = !1;
              if (void 0 !== n.other)
                t = 'a0',
                  e = new i(n.other);
              else if (void 0 !== n.rfc822)
                t = '81',
                  e = new o({
                    str: n.rfc822
                  });
              else if (void 0 !== n.dns)
                t = '82',
                  e = new o({
                    str: n.dns
                  });
              else if (void 0 !== n.dn)
                t = 'a4',
                  l = !0,
                  e = 'string' == typeof n.dn ? new r({
                    str: n.dn
                  }) : n.dn instanceof ut.asn1.x509.X500Name ? n.dn : new r(n.dn);
              else if (void 0 !== n.ldapdn)
                t = 'a4',
                  l = !0,
                  e = new r({
                    ldapstr: n.ldapdn
                  });
              else if (void 0 !== n.certissuer || void 0 !== n.certsubj) {
                var h, f;
                t = 'a4',
                  l = !0;
                var p = null;
                if (void 0 !== n.certsubj ? (h = !1,
                  f = n.certsubj) : (h = !0,
                  f = n.certissuer),
                  f.match(/^[0-9A-Fa-f]+$/),
                -1 != f.indexOf('-----BEGIN ') && (p = Tt(f)),
                null == p)
                  throw new Error('certsubj/certissuer not cert');
                var d, g = new ae;
                g.hex = p,
                  d = h ? g.getIssuerHex() : g.getSubjectHex(),
                  (e = new u).hTLV = d;
              } else if (void 0 !== n.uri)
                t = '86',
                  e = new o({
                    str: n.uri
                  });
              else {
                if (void 0 === n.ip)
                  throw new c('improper params');
                var v;
                t = '87';
                var m = n.ip;
                try {
                  if (m.match(/^[0-9a-f]+$/)) {
                    var y = m.length;
                    if (8 != y && 16 != y && 32 != y && 64 != y)
                      throw 'err';
                    v = m;
                  } else
                    v = Lt(m);
                } catch (t) {
                  throw new c('malformed IP address: ' + n.ip + ':' + t.message);
                }
                e = new s({
                  hex: v
                });
              }
              return new a({
                tag: t,
                explicit: l,
                obj: e
              }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          void 0 !== t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.x509.GeneralName, ut.asn1.ASN1Object),
        ut.asn1.x509.GeneralNames = function (t) {
          ut.asn1.x509.GeneralNames.superclass.constructor.call(this);
          var e = ut.asn1;
          this.setByParamArray = function (t) {
            for (var n = 0; n < t.length; n++) {
              var r = new e.x509.GeneralName(t[n]);
              this.asn1Array.push(r);
            }
          }
            ,
            this.tohex = function () {
              return new e.DERSequence({
                array: this.asn1Array
              }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
            this.asn1Array = new Array,
          void 0 !== t && this.setByParamArray(t);
        }
        ,
        ne(ut.asn1.x509.GeneralNames, ut.asn1.ASN1Object),
        ut.asn1.x509.OtherName = function (t) {
          ut.asn1.x509.OtherName.superclass.constructor.call(this);
          var e = ut.asn1
            , n = e.DERObjectIdentifier
            , r = e.DERSequence
            , i = e.ASN1Util.newObject;
          this.params = null,
            this.setByParam = function (t) {
              this.params = t;
            }
            ,
            this.tohex = function () {
              var t = this.params;
              if (null == t.oid || null == t.value)
                throw new Error('oid or value not specified');
              var e = new n({
                oid: t.oid
              })
                , o = i({
                tag: {
                  tag: 'a0',
                  explicit: !0,
                  obj: t.value
                }
              });
              return new r({
                array: [e, o]
              }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          void 0 !== t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.x509.OtherName, ut.asn1.ASN1Object),
        ut.asn1.x509.OID = new function () {
          var t = ut.asn1.DERObjectIdentifier;
          this.name2oidList = {
            'aes128-CBC': '2.16.840.1.101.3.4.1.2',
            'aes256-CBC': '2.16.840.1.101.3.4.1.42',
            sha1: '1.3.14.3.2.26',
            sha256: '2.16.840.1.101.3.4.2.1',
            sha384: '2.16.840.1.101.3.4.2.2',
            sha512: '2.16.840.1.101.3.4.2.3',
            sha224: '2.16.840.1.101.3.4.2.4',
            md5: '1.2.840.113549.2.5',
            md2: '1.3.14.7.2.2.1',
            ripemd160: '1.3.36.3.2.1',
            hmacWithSHA1: '1.2.840.113549.2.7',
            hmacWithSHA224: '1.2.840.113549.2.8',
            hmacWithSHA256: '1.2.840.113549.2.9',
            hmacWithSHA384: '1.2.840.113549.2.10',
            hmacWithSHA512: '1.2.840.113549.2.11',
            MD2withRSA: '1.2.840.113549.1.1.2',
            MD4withRSA: '1.2.840.113549.1.1.3',
            MD5withRSA: '1.2.840.113549.1.1.4',
            SHA1withRSA: '1.2.840.113549.1.1.5',
            'pkcs1-MGF': '1.2.840.113549.1.1.8',
            rsaPSS: '1.2.840.113549.1.1.10',
            SHA224withRSA: '1.2.840.113549.1.1.14',
            SHA256withRSA: '1.2.840.113549.1.1.11',
            SHA384withRSA: '1.2.840.113549.1.1.12',
            SHA512withRSA: '1.2.840.113549.1.1.13',
            SHA1withECDSA: '1.2.840.10045.4.1',
            SHA224withECDSA: '1.2.840.10045.4.3.1',
            SHA256withECDSA: '1.2.840.10045.4.3.2',
            SHA384withECDSA: '1.2.840.10045.4.3.3',
            SHA512withECDSA: '1.2.840.10045.4.3.4',
            dsa: '1.2.840.10040.4.1',
            SHA1withDSA: '1.2.840.10040.4.3',
            SHA224withDSA: '2.16.840.1.101.3.4.3.1',
            SHA256withDSA: '2.16.840.1.101.3.4.3.2',
            rsaEncryption: '1.2.840.113549.1.1.1',
            commonName: '2.5.4.3',
            countryName: '2.5.4.6',
            localityName: '2.5.4.7',
            stateOrProvinceName: '2.5.4.8',
            streetAddress: '2.5.4.9',
            organizationName: '2.5.4.10',
            organizationalUnitName: '2.5.4.11',
            domainComponent: '0.9.2342.19200300.100.1.25',
            userId: '0.9.2342.19200300.100.1.1',
            surname: '2.5.4.4',
            givenName: '2.5.4.42',
            title: '2.5.4.12',
            distinguishedName: '2.5.4.49',
            emailAddress: '1.2.840.113549.1.9.1',
            description: '2.5.4.13',
            businessCategory: '2.5.4.15',
            postalCode: '2.5.4.17',
            uniqueIdentifier: '2.5.4.45',
            organizationIdentifier: '2.5.4.97',
            jurisdictionOfIncorporationL: '1.3.6.1.4.1.311.60.2.1.1',
            jurisdictionOfIncorporationSP: '1.3.6.1.4.1.311.60.2.1.2',
            jurisdictionOfIncorporationC: '1.3.6.1.4.1.311.60.2.1.3',
            subjectDirectoryAttributes: '2.5.29.9',
            subjectKeyIdentifier: '2.5.29.14',
            keyUsage: '2.5.29.15',
            subjectAltName: '2.5.29.17',
            issuerAltName: '2.5.29.18',
            basicConstraints: '2.5.29.19',
            cRLNumber: '2.5.29.20',
            cRLReason: '2.5.29.21',
            nameConstraints: '2.5.29.30',
            cRLDistributionPoints: '2.5.29.31',
            certificatePolicies: '2.5.29.32',
            anyPolicy: '2.5.29.32.0',
            policyMappings: '2.5.29.33',
            authorityKeyIdentifier: '2.5.29.35',
            policyConstraints: '2.5.29.36',
            extKeyUsage: '2.5.29.37',
            inhibitAnyPolicy: '2.5.29.54',
            authorityInfoAccess: '1.3.6.1.5.5.7.1.1',
            ocsp: '1.3.6.1.5.5.7.48.1',
            ocspBasic: '1.3.6.1.5.5.7.48.1.1',
            ocspNonce: '1.3.6.1.5.5.7.48.1.2',
            ocspNoCheck: '1.3.6.1.5.5.7.48.1.5',
            caIssuers: '1.3.6.1.5.5.7.48.2',
            anyExtendedKeyUsage: '2.5.29.37.0',
            serverAuth: '1.3.6.1.5.5.7.3.1',
            clientAuth: '1.3.6.1.5.5.7.3.2',
            codeSigning: '1.3.6.1.5.5.7.3.3',
            emailProtection: '1.3.6.1.5.5.7.3.4',
            timeStamping: '1.3.6.1.5.5.7.3.8',
            ocspSigning: '1.3.6.1.5.5.7.3.9',
            smtpUTF8Mailbox: '1.3.6.1.5.5.7.8.9',
            dateOfBirth: '1.3.6.1.5.5.7.9.1',
            placeOfBirth: '1.3.6.1.5.5.7.9.2',
            gender: '1.3.6.1.5.5.7.9.3',
            countryOfCitizenship: '1.3.6.1.5.5.7.9.4',
            countryOfResidence: '1.3.6.1.5.5.7.9.5',
            ecPublicKey: '1.2.840.10045.2.1',
            'P-256': '1.2.840.10045.3.1.7',
            secp256r1: '1.2.840.10045.3.1.7',
            secp256k1: '1.3.132.0.10',
            secp384r1: '1.3.132.0.34',
            secp521r1: '1.3.132.0.35',
            pkcs5PBES2: '1.2.840.113549.1.5.13',
            pkcs5PBKDF2: '1.2.840.113549.1.5.12',
            'des-EDE3-CBC': '1.2.840.113549.3.7',
            data: '1.2.840.113549.1.7.1',
            'signed-data': '1.2.840.113549.1.7.2',
            'enveloped-data': '1.2.840.113549.1.7.3',
            'digested-data': '1.2.840.113549.1.7.5',
            'encrypted-data': '1.2.840.113549.1.7.6',
            'authenticated-data': '1.2.840.113549.1.9.16.1.2',
            tstinfo: '1.2.840.113549.1.9.16.1.4',
            signingCertificate: '1.2.840.113549.1.9.16.2.12',
            timeStampToken: '1.2.840.113549.1.9.16.2.14',
            signaturePolicyIdentifier: '1.2.840.113549.1.9.16.2.15',
            etsArchiveTimeStamp: '1.2.840.113549.1.9.16.2.27',
            signingCertificateV2: '1.2.840.113549.1.9.16.2.47',
            etsArchiveTimeStampV2: '1.2.840.113549.1.9.16.2.48',
            extensionRequest: '1.2.840.113549.1.9.14',
            contentType: '1.2.840.113549.1.9.3',
            messageDigest: '1.2.840.113549.1.9.4',
            signingTime: '1.2.840.113549.1.9.5',
            counterSignature: '1.2.840.113549.1.9.6',
            archiveTimeStampV3: '0.4.0.1733.2.4',
            pdfRevocationInfoArchival: '1.2.840.113583.1.1.8',
            adobeTimeStamp: '1.2.840.113583.1.1.9.1',
            smimeMailboxLegacy: '2.23.140.1.5.1.1',
            smimeMailboxMulti: '2.23.140.1.5.1.2',
            smimeMailboxStrict: '2.23.140.1.5.1.3',
            smimeOrganizationLegacy: '2.23.140.1.5.2.1',
            smimeOrganizationMulti: '2.23.140.1.5.2.2',
            smimeOrganizationStrict: '2.23.140.1.5.2.3',
            smimeSponsorLegacy: '2.23.140.1.5.3.1',
            smimeSponsorMulti: '2.23.140.1.5.3.2',
            smimeSponsorStrict: '2.23.140.1.5.3.3',
            smimeIndividualLegacy: '2.23.140.1.5.4.1',
            smimeIndividualMulti: '2.23.140.1.5.4.2',
            smimeIndividualStrict: '2.23.140.1.5.4.3'
          },
            this.atype2oidList = {
              CN: '2.5.4.3',
              L: '2.5.4.7',
              ST: '2.5.4.8',
              O: '2.5.4.10',
              OU: '2.5.4.11',
              C: '2.5.4.6',
              STREET: '2.5.4.9',
              DC: '0.9.2342.19200300.100.1.25',
              UID: '0.9.2342.19200300.100.1.1',
              SN: '2.5.4.4',
              T: '2.5.4.12',
              GN: '2.5.4.42',
              DN: '2.5.4.49',
              E: '1.2.840.113549.1.9.1',
              description: '2.5.4.13',
              businessCategory: '2.5.4.15',
              postalCode: '2.5.4.17',
              serialNumber: '2.5.4.5',
              uniqueIdentifier: '2.5.4.45',
              organizationIdentifier: '2.5.4.97',
              jurisdictionOfIncorporationL: '1.3.6.1.4.1.311.60.2.1.1',
              jurisdictionOfIncorporationSP: '1.3.6.1.4.1.311.60.2.1.2',
              jurisdictionOfIncorporationC: '1.3.6.1.4.1.311.60.2.1.3'
            },
            this.objCache = {},
            this.name2obj = function (e) {
              if (void 0 !== this.objCache[e])
                return this.objCache[e];
              if (void 0 === this.name2oidList[e])
                throw 'Name of ObjectIdentifier not defined: ' + e;
              var n = this.name2oidList[e]
                , r = new t({
                oid: n
              });
              return this.objCache[e] = r,
                r;
            }
            ,
            this.atype2obj = function (e) {
              if (void 0 !== this.objCache[e])
                return this.objCache[e];
              var n;
              if (e.match(/^\d+\.\d+\.[0-9.]+$/))
                n = e;
              else if (void 0 !== this.atype2oidList[e])
                n = this.atype2oidList[e];
              else {
                if (void 0 === this.name2oidList[e])
                  throw new Error('AttributeType name undefined: ' + e);
                n = this.name2oidList[e];
              }
              var r = new t({
                oid: n
              });
              return this.objCache[e] = r,
                r;
            }
            ,
            this.registerOIDs = function (t) {
              if (this.checkOIDs(t))
                for (var e in t)
                  this.name2oidList[e] = t[e];
            }
            ,
            this.checkOIDs = function (t) {
              try {
                var e = Object.keys(t);
                return 0 != e.length && (e.map((function (t, e, n) {
                    if (!this[t].match(/^[0-2]\.[0-9.]+$/))
                      throw new Error('value is not OID');
                  }
                ), t),
                  !0);
              } catch (t) {
                return !1;
              }
            };
        }
        ,
        ut.asn1.x509.OID.oid2name = function (t) {
          var e = ut.asn1.x509.OID.name2oidList;
          for (var n in e)
            if (e[n] == t)
              return n;
          return '';
        }
        ,
        ut.asn1.x509.OID.oid2atype = function (t) {
          var e = ut.asn1.x509.OID.atype2oidList;
          for (var n in e)
            if (e[n] == t)
              return n;
          return t;
        }
        ,
        ut.asn1.x509.OID.name2oid = function (t) {
          if (t.match(/^[0-9.]+$/))
            return t;
          var e = ut.asn1.x509.OID.name2oidList;
          return void 0 === e[t] ? '' : e[t];
        }
        ,
        ut.asn1.x509.X509Util = {},
        ut.asn1.x509.X509Util.newCertPEM = function (t) {
          var e = ut.asn1.x509;
          e.TBSCertificate;
          return new (0,
            e.Certificate)(t).getPEM();
        }
        ,
        void 0 !== ut && ut || (ut = {}),
        void 0 !== ut.asn1 && ut.asn1 || (ut.asn1 = {}),
        void 0 !== ut.asn1.cms && ut.asn1.cms || (ut.asn1.cms = {}),
        ut.asn1.cms.Attribute = function (t) {
          var e = Error
            , n = ut.asn1
            , r = n.DERSequence
            , i = n.DERSet
            , o = n.DERObjectIdentifier;
          this.params = null,
            this.typeOid = null,
            this.setByParam = function (t) {
              this.params = t;
            }
            ,
            this.getValueArray = function () {
              throw new e('not yet implemented abstract');
            }
            ,
            this.tohex = function () {
              var t = new o({
                oid: this.typeOid
              })
                , e = new i({
                array: this.getValueArray()
              });
              return new r({
                array: [t, e]
              }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            };
        }
        ,
        ne(ut.asn1.cms.Attribute, ut.asn1.ASN1Object),
        ut.asn1.cms.ContentType = function (t) {
          var e = ut.asn1;
          e.cms.ContentType.superclass.constructor.call(this),
            this.typeOid = '1.2.840.113549.1.9.3',
            this.getValueArray = function () {
              return [new e.DERObjectIdentifier(this.params.type)];
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.cms.ContentType, ut.asn1.cms.Attribute),
        ut.asn1.cms.MessageDigest = function (t) {
          var e = ut.asn1
            , n = e.DEROctetString;
          e.cms.MessageDigest.superclass.constructor.call(this),
            this.typeOid = '1.2.840.113549.1.9.4',
            this.getValueArray = function () {
              return [new n(this.params)];
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.cms.MessageDigest, ut.asn1.cms.Attribute),
        ut.asn1.cms.SigningTime = function (t) {
          var e = ut.asn1;
          e.cms.SigningTime.superclass.constructor.call(this),
            this.typeOid = '1.2.840.113549.1.9.5',
            this.getValueArray = function () {
              return [new e.x509.Time(this.params)];
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.cms.SigningTime, ut.asn1.cms.Attribute),
        ut.asn1.cms.SigningCertificate = function (t) {
          var e = Error
            , n = ut
            , r = n.asn1
            , i = r.DERSequence
            , o = r.cms
            , s = o.ESSCertID;
          n.crypto;
          o.SigningCertificate.superclass.constructor.call(this),
            this.typeOid = '1.2.840.113549.1.9.16.2.12',
            this.getValueArray = function () {
              if (null == this.params || null == this.params || null == this.params.array)
                throw new e('parameter \'array\' not specified');
              for (var n = this.params.array, r = [], o = 0; o < n.length; o++) {
                var a = n[o];
                0 != t.hasis || 'string' != typeof a || -1 == a.indexOf('-----BEGIN') && !ht.isASN1HEX(a) || (a = {
                  cert: a
                }),
                0 != a.hasis && 0 == t.hasis && (a.hasis = !1),
                  r.push(new s(a));
              }
              var u = new i({
                array: r
              });
              return [new i({
                array: [u]
              })];
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.cms.SigningCertificate, ut.asn1.cms.Attribute),
        ut.asn1.cms.ESSCertID = function (t) {
          ut.asn1.cms.ESSCertID.superclass.constructor.call(this);
          var e = Error
            , n = ut
            , r = n.asn1
            , i = r.DEROctetString
            , o = r.DERSequence
            , s = r.cms.IssuerSerial;
          this.params = null,
            this.getCertHash = function (t, r) {
              if (null != t.hash)
                return t.hash;
              if ('string' == typeof t && -1 == t.indexOf('-----BEGIN') && !ht.isASN1HEX(t))
                return t;
              var i, o, s;
              if ('string' == typeof t)
                i = t;
              else {
                if (null == t.cert)
                  throw new e('hash nor cert unspecified');
                i = t.cert;
              }
              if (o = -1 != i.indexOf('-----BEGIN') ? Tt(i) : i,
              'string' == typeof t && (-1 != t.indexOf('-----BEGIN') ? o = Tt(t) : ht.isASN1HEX(t) && (o = t)),
              null != t.alg)
                s = t.alg;
              else {
                if (null == r)
                  throw new e('hash alg unspecified');
                s = r;
              }
              return n.crypto.Util.hashHex(o, s);
            }
            ,
            this.tohex = function () {
              var t = this.params
                , e = this.getCertHash(t, 'sha1')
                , n = [];
              return n.push(new i({
                hex: e
              })),
              ('string' == typeof t && -1 != t.indexOf('-----BEGIN') || null != t.cert && 0 != t.hasis || null != t.issuer && null != t.serial) && n.push(new s(t)),
                new o({
                  array: n
                }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.cms.ESSCertID, ut.asn1.ASN1Object),
        ut.asn1.cms.SigningCertificateV2 = function (t) {
          var e = Error
            , n = ut
            , r = n.asn1
            , i = r.DERSequence
            , o = (r.x509,
            r.cms)
            , s = o.ESSCertIDv2;
          n.crypto;
          o.SigningCertificateV2.superclass.constructor.call(this),
            this.typeOid = '1.2.840.113549.1.9.16.2.47',
            this.getValueArray = function () {
              if (null == this.params || null == this.params || null == this.params.array)
                throw new e('parameter \'array\' not specified');
              for (var n = this.params.array, r = [], o = 0; o < n.length; o++) {
                var a = n[o];
                null == t.alg && 0 != t.hasis || 'string' != typeof a || -1 == a.indexOf('-----BEGIN') && !ht.isASN1HEX(a) || (a = {
                  cert: a
                }),
                null == a.alg && null != t.alg && (a.alg = t.alg),
                0 != a.hasis && 0 == t.hasis && (a.hasis = !1),
                  r.push(new s(a));
              }
              var u = new i({
                array: r
              });
              return [new i({
                array: [u]
              })];
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.cms.SigningCertificateV2, ut.asn1.cms.Attribute),
        ut.asn1.cms.ESSCertIDv2 = function (t) {
          ut.asn1.cms.ESSCertIDv2.superclass.constructor.call(this);
          Error;
          var e = ut.asn1
            , n = e.DEROctetString
            , r = e.DERSequence
            , i = e.cms.IssuerSerial
            , o = e.x509.AlgorithmIdentifier;
          this.params = null,
            this.tohex = function () {
              var t = this.params
                , e = this.getCertHash(t, 'sha256')
                , s = [];
              return null != t.alg && 'sha256' != t.alg && s.push(new o({
                name: t.alg
              })),
                s.push(new n({
                  hex: e
                })),
              ('string' == typeof t && -1 != t.indexOf('-----BEGIN') || null != t.cert && 0 != t.hasis || null != t.issuer && null != t.serial) && s.push(new i(t)),
                new r({
                  array: s
                }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.cms.ESSCertIDv2, ut.asn1.cms.ESSCertID),
        ut.asn1.cms.IssuerSerial = function (t) {
          var e = Error
            , n = ut.asn1
            , r = n.DERInteger
            , i = n.DERSequence
            , o = n.cms
            , s = n.x509.GeneralNames
            , a = ae;
          o.IssuerSerial.superclass.constructor.call(this),
            this.setByParam = function (t) {
              this.params = t;
            }
            ,
            this.tohex = function () {
              var t, n, o = this.params;
              if ('string' == typeof o && -1 != o.indexOf('-----BEGIN') || null != o.cert) {
                var u;
                u = null != o.cert ? o.cert : o;
                var c = new a;
                c.readCertPEM(u),
                  t = c.getIssuer(),
                  n = {
                    hex: c.getSerialNumberHex()
                  };
              } else {
                if (null == o.issuer || !o.serial)
                  throw new e('cert or issuer and serial parameter not specified');
                t = o.issuer,
                  n = o.serial;
              }
              var l = new s([{
                dn: t
              }])
                , h = new r(n);
              return new i({
                array: [l, h]
              }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.cms.IssuerSerial, ut.asn1.ASN1Object),
        ut.asn1.cms.SignerIdentifier = function (t) {
          var e = ut.asn1
            , n = (e.DERInteger,
            e.DERSequence,
            e.cms)
            , r = n.IssuerAndSerialNumber
            , i = n.SubjectKeyIdentifier;
          e.x509.X500Name,
            Error;
          n.SignerIdentifier.superclass.constructor.call(this),
            this.params = null,
            this.tohex = function () {
              var t = this.params;
              if ('isssn' == t.type)
                return new r(t).tohex();
              if ('skid' == t.type)
                return new i(t).tohex();
              throw new Error('wrong property for isssn or skid');
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.cms.SignerIdentifier, ut.asn1.ASN1Object),
        ut.asn1.cms.IssuerAndSerialNumber = function (t) {
          var e = ut.asn1
            , n = e.DERInteger
            , r = e.DERSequence
            , i = e.cms
            , o = e.x509.X500Name
            , s = ae
            , a = Error;
          i.IssuerAndSerialNumber.superclass.constructor.call(this),
            this.params = null,
            this.tohex = function () {
              var t, e, i = this.params;
              if ('string' == typeof i && -1 != i.indexOf('-----BEGIN') || null != i.cert) {
                var u;
                u = null != i.cert ? i.cert : i;
                var c = new s;
                c.readCertPEM(u),
                  t = c.getIssuer(),
                  e = {
                    hex: c.getSerialNumberHex()
                  };
              } else {
                if (null == i.issuer || !i.serial)
                  throw new a('cert or issuer and serial parameter not specified');
                t = i.issuer,
                  e = i.serial;
              }
              var l = new o(t)
                , h = new n(e);
              return new r({
                array: [l, h]
              }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
            this.setByParam = function (t) {
              this.params = t;
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.cms.IssuerAndSerialNumber, ut.asn1.ASN1Object),
        ut.asn1.cms.SubjectKeyIdentifier = function (t) {
          var e = ut.asn1
            , n = (e.DERInteger,
            e.DERSequence,
            e.ASN1Util.newObject)
            , r = e.cms
            , i = (r.IssuerAndSerialName,
            r.SubjectKeyIdentifier,
            e.x509.X500Name,
            ae)
            , o = Error;
          r.SubjectKeyIdentifier.superclass.constructor.call(this),
            this.tohex = function () {
              var t, e = this.params;
              if (null == e.cert && null == e.skid)
                throw new o('property cert nor skid undefined');
              null != e.cert ? t = new i(e.cert).getExtSubjectKeyIdentifier().kid.hex : null != e.skid && (t = e.skid);
              return n({
                tag: {
                  tage: 'a0',
                  obj: {
                    octstr: {
                      hex: t
                    }
                  }
                }
              }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.cms.SubjectKeyIdentifier, ut.asn1.ASN1Object),
        ut.asn1.cms.AttributeList = function (t) {
          var e = Error
            , n = ut.asn1
            , r = n.DERSet
            , i = n.cms;
          i.AttributeList.superclass.constructor.call(this),
            this.params = null,
            this.hTLV = null,
            this.setByParam = function (t) {
              this.params = t;
            }
            ,
            this.tohex = function () {
              var t = this.params;
              if (null != this.hTLV)
                return this.hTLV;
              var n = !0;
              null != t.sortflag && (n = t.sortflag);
              for (var o = t.array, s = [], a = 0; a < o.length; a++) {
                var u = o[a]
                  , c = u.attr;
                if ('contentType' == c)
                  s.push(new i.ContentType(u));
                else if ('messageDigest' == c)
                  s.push(new i.MessageDigest(u));
                else if ('signingTime' == c)
                  s.push(new i.SigningTime(u));
                else if ('signingCertificate' == c)
                  s.push(new i.SigningCertificate(u));
                else if ('signingCertificateV2' == c)
                  s.push(new i.SigningCertificateV2(u));
                else if ('signaturePolicyIdentifier' == c)
                  s.push(new ut.asn1.cades.SignaturePolicyIdentifier(u));
                else {
                  if ('signatureTimeStamp' != c && 'timeStampToken' != c)
                    throw new e('unknown attr: ' + c);
                  s.push(new ut.asn1.cades.SignatureTimeStamp(u));
                }
              }
              var l = new r({
                array: s,
                sortflag: n
              });
              return this.hTLV = l.tohex(),
                this.hTLV;
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.cms.AttributeList, ut.asn1.ASN1Object),
        ut.asn1.cms.SignerInfo = function (t) {
          var e = Error
            , n = ut
            , r = n.asn1
            , i = r.DERInteger
            , o = r.DEROctetString
            , s = r.DERSequence
            , a = r.DERTaggedObject
            , u = r.cms
            , c = u.SignerIdentifier
            , l = u.AttributeList
            , h = (u.ContentType,
            u.EncapsulatedContentInfo,
            u.MessageDigest,
            u.SignedData,
            r.x509.AlgorithmIdentifier)
            , f = n.crypto
            , p = re;
          u.SignerInfo.superclass.constructor.call(this),
            this.params = null,
            this.sign = function () {
              var t = this.params
                , e = t.sigalg
                , n = new l(t.sattrs).tohex()
                , r = p.getKey(t.signkey)
                , i = new f.Signature({
                alg: e
              });
              i.init(r),
                i.updateHex(n);
              var o = i.sign();
              t.sighex = o;
            }
            ,
            this.tohex = function () {
              var t = this.params
                , n = [];
              if (n.push(new i({
                int: t.version
              })),
                n.push(new c(t.id)),
                n.push(new h({
                  name: t.hashalg
                })),
              null != t.sattrs) {
                var r = new l(t.sattrs);
                try {
                  n.push(new a({
                    tag: 'a0',
                    explicit: !1,
                    obj: r
                  }));
                } catch (t) {
                  throw new e('si sattr error: ' + t);
                }
              }
              if (null != t.sigalgfield ? n.push(new h({
                name: t.sigalgfield
              })) : n.push(new h({
                name: t.sigalg
              })),
              null == t.sighex && null != t.signkey && this.sign(),
                n.push(new o({
                  hex: t.sighex
                })),
              null != t.uattrs) {
                r = new l(t.uattrs);
                try {
                  n.push(new a({
                    tag: 'a1',
                    explicit: !1,
                    obj: r
                  }));
                } catch (t) {
                  throw new e('si uattr error: ' + t);
                }
              }
              return new s({
                array: n
              }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.cms.SignerInfo, ut.asn1.ASN1Object),
        ut.asn1.cms.EncapsulatedContentInfo = function (t) {
          var e = ut.asn1
            , n = e.DERTaggedObject
            , r = e.DERSequence
            , i = e.DERObjectIdentifier
            , o = e.DEROctetString;
          e.cms.EncapsulatedContentInfo.superclass.constructor.call(this),
            this.params = null,
            this.tohex = function () {
              var t = this.params
                , e = [];
              if (e.push(new i(t.type)),
              null != t.content && (null != t.content.hex || null != t.content.str) && 1 != t.isDetached) {
                var s = new o(t.content)
                  , a = new n({
                  tag: 'a0',
                  explicit: !0,
                  obj: s
                });
                e.push(a);
              }
              return new r({
                array: e
              }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
            this.setByParam = function (t) {
              this.params = t;
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.cms.EncapsulatedContentInfo, ut.asn1.ASN1Object),
        ut.asn1.cms.ContentInfo = function (t) {
          var e = ut.asn1
            , n = e.DERTaggedObject
            , r = e.DERSequence
            , i = e.DERObjectIdentifier;
          e.x509.OID.name2obj;
          ut.asn1.cms.ContentInfo.superclass.constructor.call(this),
            this.params = null,
            this.tohex = function () {
              var t = this.params
                , e = [];
              e.push(new i(t.type));
              var o = new n({
                tag: 'a0',
                explicit: !0,
                obj: t.obj
              });
              return e.push(o),
                new r({
                  array: e
                }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
            this.setByParam = function (t) {
              this.params = t;
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.cms.ContentInfo, ut.asn1.ASN1Object),
        ut.asn1.cms.SignedData = function (t) {
          Error;
          var e = ut.asn1
            , n = (e.ASN1Object,
            e.DERInteger)
            , r = e.DERSet
            , i = e.DERSequence
            , o = (e.DERTaggedObject,
            e.cms)
            , s = o.EncapsulatedContentInfo
            , a = o.SignerInfo
            , u = o.ContentInfo
            , c = o.CertificateSet
            , l = o.RevocationInfoChoices
            , h = e.x509.AlgorithmIdentifier;
          ut.asn1.cms.SignedData.superclass.constructor.call(this),
            this.params = null,
            this.checkAndFixParam = function () {
              var t = this.params;
              this._setDigestAlgs(t),
                this._setContentTypeByEContent(t),
                this._setMessageDigestByEContent(t),
                this._setSignerInfoVersion(t),
                this._setSignedDataVersion(t);
            }
            ,
            this._setDigestAlgs = function (t) {
              for (var e = {}, n = t.sinfos, r = 0; r < n.length; r++) {
                e[n[r].hashalg] = 1;
              }
              t.hashalgs = Object.keys(e).sort();
            }
            ,
            this._setContentTypeByEContent = function (t) {
              for (var e = t.econtent.type, n = t.sinfos, r = 0; r < n.length; r++) {
                var i = n[r];
                this._getAttrParamByName(i, 'contentType').type = e;
              }
            }
            ,
            this._setMessageDigestByEContent = function (t) {
              var e = t.econtent
                , n = (t.econtent.type,
                e.content.hex);
              null == n && 'data' == e.type && null != e.content.str && (n = At(e.content.str));
              for (var r = t.sinfos, i = 0; i < r.length; i++) {
                var o = r[i]
                  , s = o.hashalg
                  , a = this._getAttrParamByName(o, 'messageDigest')
                  , u = ut.crypto.Util.hashHex(n, s);
                a.hex = u;
              }
            }
            ,
            this._getAttrParamByName = function (t, e) {
              for (var n = t.sattrs.array, r = 0; r < n.length; r++)
                if (n[r].attr == e)
                  return n[r];
            }
            ,
            this._setSignerInfoVersion = function (t) {
              for (var e = t.sinfos, n = 0; n < e.length; n++) {
                var r = e[n]
                  , i = 1;
                'skid' == r.id.type && (i = 3),
                  r.version = i;
              }
            }
            ,
            this._setSignedDataVersion = function (t) {
              var e = this._getSignedDataVersion(t);
              t.version = e;
            }
            ,
            this._getSignedDataVersion = function (t) {
              if (null != t.revinfos)
                for (var e = t.revinfos, n = 0; n < e.length; n++) {
                  if (null != e[n].ocsp)
                    return 5;
                }
              var r = t.sinfos;
              for (n = 0; n < r.length; n++) {
                if (3 == t.sinfos[n].version)
                  return 3;
              }
              return 'data' != t.econtent.type ? 3 : 1;
            }
            ,
            this.tohex = function () {
              var t = this.params;
              null != this.getEncodedHexPrepare && this.getEncodedHexPrepare(),
              1 != t.fixed && this.checkAndFixParam();
              var e = [];
              e.push(new n({
                int: t.version
              }));
              for (var o = [], u = 0; u < t.hashalgs.length; u++) {
                var f = t.hashalgs[u];
                o.push(new h({
                  name: f
                }));
              }
              e.push(new r({
                array: o
              })),
                e.push(new s(t.econtent)),
              null != t.certs && e.push(new c(t.certs)),
              null != t.revinfos && e.push(new l(t.revinfos));
              var p = [];
              for (u = 0; u < t.sinfos.length; u++) {
                var d = t.sinfos[u];
                p.push(new a(d));
              }
              return e.push(new r({
                array: p
              })),
                new i({
                  array: e
                }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
            this.getContentInfo = function () {
              return new u({
                type: 'signed-data',
                obj: this
              });
            }
            ,
            this.getContentInfoEncodedHex = function () {
              return this.getContentInfo().tohex();
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.cms.SignedData, ut.asn1.ASN1Object),
        ut.asn1.cms.CertificateSet = function (t) {
          ut.asn1.cms.CertificateSet.superclass.constructor.call(this);
          var e = Error
            , n = ut.asn1
            , r = n.DERTaggedObject
            , i = n.DERSet
            , o = n.ASN1Object;
          this.params = null,
            this.tohex = function () {
              var t, n = this.params, s = [];
              if (n instanceof Array)
                t = n;
              else {
                if (null == n.array)
                  throw new e('cert array not specified');
                t = n.array;
              }
              for (var a = 0; a < t.length; a++) {
                var u = Tt(t[a])
                  , c = new o;
                c.hTLV = u,
                  s.push(c);
              }
              var l = {
                array: s
              };
              0 == n.sortflag && (l.sortflag = !1);
              var h = new i(l);
              return new r({
                tag: 'a0',
                explicit: !1,
                obj: h
              }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.cms.CertificateSet, ut.asn1.ASN1Object),
        ut.asn1.cms.RevocationInfoChoices = function (t) {
          ut.asn1.cms.RevocationInfoChoices.superclass.constructor.call(this),
            this.params = null,
            this.tohex = function () {
              var t = this.params;
              if (!t instanceof Array)
                throw new Error('params is not array');
              for (var e = [], n = 0; n < t.length; n++)
                e.push(new ut.asn1.cms.RevocationInfoChoice(t[n]));
              return ut.asn1.ASN1Util.newObject({
                tag: {
                  tagi: 'a1',
                  obj: {
                    set: e
                  }
                }
              }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.cms.RevocationInfoChoices, ut.asn1.ASN1Object),
        ut.asn1.cms.RevocationInfoChoice = function (t) {
          ut.asn1.cms.RevocationInfoChoice.superclass.constructor.call(this),
            this.params = null,
            this.tohex = function () {
              var t = this.params;
              if (null != t.crl && 'string' == typeof t.crl) {
                var e = t.crl;
                return -1 != t.crl.indexOf('-----BEGIN') && (e = Tt(t.crl)),
                  e;
              }
              if (null != t.ocsp)
                return ut.asn1.ASN1Util.newObject({
                  tag: {
                    tagi: 'a1',
                    obj: new ut.asn1.cms.OtherRevocationFormat(t)
                  }
                }).tohex();
              throw new Error('property crl or ocsp undefined');
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.cms.RevocationInfoChoice, ut.asn1.ASN1Object),
        ut.asn1.cms.OtherRevocationFormat = function (t) {
          ut.asn1.cms.OtherRevocationFormat.superclass.constructor.call(this);
          var e = Error
            , n = ut
            , r = n.asn1.ASN1Util.newObject
            , i = n.lang.String.isHex;
          this.params = null,
            this.tohex = function () {
              var t = this.params;
              if (null == t.ocsp)
                throw new e('property ocsp not specified');
              if (!i(t.ocsp) || !ht.isASN1HEX(t.ocsp))
                throw new e('ocsp value not ASN.1 hex string');
              return r({
                seq: [{
                  oid: '1.3.6.1.5.5.7.16.2'
                }, {
                  asn1: {
                    tlv: t.ocsp
                  }
                }]
              }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.cms.OtherRevocationFormat, ut.asn1.ASN1Object),
        ut.asn1.cms.CMSUtil = new function () {
        }
        ,
        ut.asn1.cms.CMSUtil.newSignedData = function (t) {
          return new ut.asn1.cms.SignedData(t);
        }
        ,
        ut.asn1.cms.CMSUtil.verifySignedData = function (t) {
          var e = ut
            , n = e.asn1
            , r = n.cms
            , i = (r.SignerInfo,
            r.SignedData,
            r.SigningTime,
            r.SigningCertificate,
            r.SigningCertificateV2,
            n.cades.SignaturePolicyIdentifier,
            e.lang.String.isHex)
            , o = ht
            , s = o.getVbyList
            , a = o.getTLVbyList
            , u = o.getIdxbyList
            , c = o.getChildIdx
            , l = o.getTLV
            , h = o.oidname
            , f = e.crypto.Util.hashHex;
          void 0 === t.cms && i(t.cms);
          var p = t.cms
            , d = function (t, e) {
            var n = e.idx;
            e.signerid_issuer1 = a(t, n, [1, 0], '30'),
              e.signerid_serial1 = s(t, n, [1, 1], '02'),
              e.hashalg = h(s(t, n, [2, 0], '06'));
            var r = u(t, n, [3], 'a0');
            e.idxSignedAttrs = r,
              g(t, e, r);
            var i = c(t, n).length;
            if (i < 6)
              throw 'malformed SignerInfo';
            e.sigalg = h(s(t, n, [i - 2, 0], '06')),
              e.sigval = s(t, n, [i - 1], '04');
          }
            , g = function (t, e, n) {
            var r = c(t, n);
            e.signedAttrIdxList = r;
            for (var i = 0; i < r.length; i++) {
              var o, a = r[i], u = s(t, a, [0], '06');
              '2a864886f70d010905' === u ? (o = wt(s(t, a, [1, 0])),
                e.saSigningTime = o) : '2a864886f70d010904' === u && (o = s(t, a, [1, 0], '04'),
                e.saMessageDigest = o);
            }
          }
            , v = function (t, e, n, r) {
            n.verifyDetail = {};
            var i = n.verifyDetail
              , o = e.parse.econtent
              , s = n.hashalg
              , a = n.saMessageDigest;
            i.validMessageDigest = !1,
            f(o, s) === a && (i.validMessageDigest = !0),
              function (t, e, n, r) {
                var i, o = e.parse.certsIdx;
                if (void 0 === e.certs) {
                  i = [],
                    e.certkeys = [];
                  for (var s = c(t, o), a = 0; a < s.length; a++) {
                    var u = l(t, s[a])
                      , h = new ae;
                    h.readCertHex(u),
                      i[a] = h,
                      e.certkeys[a] = h.getPublicKey();
                  }
                  e.certs = i;
                } else
                  i = e.certs;
                e.cccc = i.length,
                  e.cccci = s.length;
                for (a = 0; a < i.length; a++) {
                  var f = h.getIssuerHex()
                    , p = h.getSerialNumberHex();
                  n.signerid_issuer1 === f && n.signerid_serial1 === p && (n.certkey_idx = a);
                }
              }(t, e, n),
              i.validSignatureValue = !1;
            var u = n.sigalg
              , h = '31' + l(t, n.idxSignedAttrs).substr(2);
            n.signedattrshex = h;
            var p = e.certs[n.certkey_idx].getPublicKey()
              , d = new ut.crypto.Signature({
              alg: u
            });
            d.init(p),
              d.updateHex(h);
            var g = d.verify(n.sigval);
            i.validSignatureValue_isValid = g,
            !0 === g && (i.validSignatureValue = !0),
              n.isValid = !1,
            i.validMessageDigest && i.validSignatureValue && (n.isValid = !0);
          }
            , m = {
            isValid: !1,
            parse: {}
          };
          return function (t, e) {
            if ('2a864886f70d010702' !== s(t, 0, [0], '06'))
              return e;
            e.cmsType = 'signedData',
              e.econtent = s(t, 0, [1, 0, 2, 1, 0]),
              function (t, e) {
                for (var n, r = 3; r < 6; r++)
                  if (void 0 !== (n = u(t, 0, [1, 0, r]))) {
                    var i = t.substr(n, 2);
                    'a0' === i && (e.certsIdx = n),
                    'a1' === i && (e.revinfosIdx = n),
                    '31' === i && (e.signerinfosIdx = n);
                  }
              }(t, e),
              e.signerInfos = [],
              function (t, e) {
                var n = e.signerinfosIdx;
                if (void 0 !== n) {
                  var r = c(t, n);
                  e.signerInfoIdxList = r;
                  for (var i = 0; i < r.length; i++) {
                    var o = {
                      idx: r[i]
                    };
                    d(t, o),
                      e.signerInfos.push(o);
                  }
                }
              }(t, e);
          }(p, m.parse),
            function (t, e) {
              for (var n = e.parse.signerInfos, r = n.length, i = !0, o = 0; o < r; o++) {
                var s = n[o];
                v(t, e, s, o),
                s.isValid || (i = !1);
              }
              e.isValid = i;
            }(p, m),
            m;
        }
        ,
        ut.asn1.cms.CMSParser = function () {
          var t = Error
            , e = ae
            , n = new e
            , r = ht
            , i = r.getV
            , o = r.getTLV
            , s = (r.getIdxbyList,
            r.getTLVbyList)
            , a = r.getTLVbyListEx
            , u = r.getVbyList
            , c = r.getVbyListEx
            , l = r.getChildIdx;
          this.getCMSSignedData = function (t) {
            var e = s(t, 0, [1, 0]);
            return this.getSignedData(e);
          }
            ,
            this.getSignedData = function (t) {
              var e = l(t, 0)
                , n = {}
                , r = i(t, e[0])
                , s = parseInt(r, 16);
              n.version = s;
              var u = o(t, e[1]);
              n.hashalgs = this.getHashAlgArray(u);
              var c = o(t, e[2]);
              n.econtent = this.getEContent(c);
              var h = a(t, 0, ['[0]']);
              null != h && (n.certs = this.getCertificateSet(h));
              a(t, 0, ['[1]']);
              var f = a(t, 0, [3]);
              return n.sinfos = this.getSignerInfos(f),
                n;
            }
            ,
            this.getHashAlgArray = function (t) {
              for (var n = l(t, 0), r = new e, i = [], s = 0; s < n.length; s++) {
                var a = o(t, n[s])
                  , u = r.getAlgorithmIdentifierName(a);
                i.push(u);
              }
              return i;
            }
            ,
            this.getEContent = function (t) {
              var e = {}
                , n = u(t, 0, [0])
                , r = u(t, 0, [1, 0]);
              return e.type = ut.asn1.x509.OID.oid2name(ht.hextooidstr(n)),
                e.content = {
                  hex: r
                },
                e;
            }
            ,
            this.getSignerInfos = function (t) {
              for (var e = [], n = l(t, 0), r = 0; r < n.length; r++) {
                var i = o(t, n[r])
                  , s = this.getSignerInfo(i);
                e.push(s);
              }
              return e;
            }
            ,
            this.getSignerInfo = function (t) {
              var e = {}
                , i = l(t, 0)
                , s = r.getInt(t, i[0], -1);
              -1 != s && (e.version = s);
              var u = o(t, i[1])
                , h = this.getIssuerAndSerialNumber(u);
              e.id = h;
              var f = o(t, i[2])
                , p = n.getAlgorithmIdentifierName(f);
              e.hashalg = p;
              var d = a(t, 0, ['[0]']);
              if (null != d) {
                var g = this.getAttributeList(d);
                e.sattrs = g;
              }
              var v = a(t, 0, [3])
                , m = n.getAlgorithmIdentifierName(v);
              e.sigalg = m;
              var y = c(t, 0, [4]);
              e.sighex = y;
              var b = a(t, 0, ['[1]']);
              if (null != b) {
                var x = this.getAttributeList(b);
                e.uattrs = x;
              }
              return e;
            }
            ,
            this.getSignerIdentifier = function (t) {
              if ('30' == t.substr(0, 2))
                return this.getIssuerAndSerialNumber(t);
              throw new Error('SKID of signerIdentifier not supported');
            }
            ,
            this.getIssuerAndSerialNumber = function (t) {
              var e = {
                type: 'isssn'
              }
                , r = l(t, 0)
                , s = o(t, r[0]);
              e.issuer = n.getX500Name(s);
              var a = i(t, r[1]);
              return e.serial = {
                hex: a
              },
                e;
            }
            ,
            this.getAttributeList = function (t) {
              for (var e = [], n = l(t, 0), r = 0; r < n.length; r++) {
                var i = o(t, n[r])
                  , s = this.getAttribute(i);
                e.push(s);
              }
              return {
                array: e
              };
            }
            ,
            this.getAttribute = function (t) {
              var e = {}
                , n = l(t, 0)
                , i = r.getOID(t, n[0])
                , s = ut.asn1.x509.OID.oid2name(i);
              e.attr = s;
              var a = o(t, n[1])
                , u = l(a, 0);
              if (1 == u.length)
                e.valhex = o(a, u[0]);
              else {
                for (var c = [], h = 0; h < u.length; h++)
                  c.push(o(a, u[h]));
                e.valhex = c;
              }
              return 'contentType' == s ? this.setContentType(e) : 'messageDigest' == s ? this.setMessageDigest(e) : 'signingTime' == s ? this.setSigningTime(e) : 'signingCertificate' == s ? this.setSigningCertificate(e) : 'signingCertificateV2' == s ? this.setSigningCertificateV2(e) : 'signaturePolicyIdentifier' == s && this.setSignaturePolicyIdentifier(e),
                e;
            }
            ,
            this.setContentType = function (t) {
              var e = r.getOIDName(t.valhex, 0, null);
              null != e && (t.type = e,
                delete t.valhex);
            }
            ,
            this.setSigningTime = function (t) {
              var e = wt(i(t.valhex, 0));
              t.str = e,
                delete t.valhex;
            }
            ,
            this.setMessageDigest = function (t) {
              var e = i(t.valhex, 0);
              t.hex = e,
                delete t.valhex;
            }
            ,
            this.setSigningCertificate = function (t) {
              var e = l(t.valhex, 0);
              if (e.length > 0) {
                for (var n = o(t.valhex, e[0]), r = l(n, 0), i = [], s = 0; s < r.length; s++) {
                  var a = o(n, r[s])
                    , u = this.getESSCertID(a);
                  i.push(u);
                }
                t.array = i;
              }
              if (e.length > 1) {
                var c = o(t.valhex, e[1]);
                t.polhex = c;
              }
              delete t.valhex;
            }
            ,
            this.setSignaturePolicyIdentifier = function (t) {
              var n = l(t.valhex, 0);
              if (n.length > 0) {
                var s = r.getOID(t.valhex, n[0]);
                t.oid = s;
              }
              if (n.length > 1) {
                var a = new e
                  , u = l(t.valhex, n[1])
                  , c = o(t.valhex, u[0])
                  , h = a.getAlgorithmIdentifierName(c);
                t.alg = h;
                var f = i(t.valhex, u[1]);
                t.hash = f;
              }
              delete t.valhex;
            }
            ,
            this.setSigningCertificateV2 = function (t) {
              var e = l(t.valhex, 0);
              if (e.length > 0) {
                for (var n = o(t.valhex, e[0]), r = l(n, 0), i = [], s = 0; s < r.length; s++) {
                  var a = o(n, r[s])
                    , u = this.getESSCertIDv2(a);
                  i.push(u);
                }
                t.array = i;
              }
              if (e.length > 1) {
                var c = o(t.valhex, e[1]);
                t.polhex = c;
              }
              delete t.valhex;
            }
            ,
            this.getESSCertID = function (t) {
              var e = {}
                , n = l(t, 0);
              if (n.length > 0) {
                var r = i(t, n[0]);
                e.hash = r;
              }
              if (n.length > 1) {
                var s = o(t, n[1])
                  , a = this.getIssuerSerial(s);
                null != a.serial && (e.serial = a.serial),
                null != a.issuer && (e.issuer = a.issuer);
              }
              return e;
            }
            ,
            this.getESSCertIDv2 = function (e) {
              var r = {}
                , s = l(e, 0);
              if (s.length < 1 || 3 < s.length)
                throw new t('wrong number of elements');
              var a = 0;
              if ('30' == e.substr(s[0], 2)) {
                var u = o(e, s[0]);
                r.alg = n.getAlgorithmIdentifierName(u),
                  a++;
              } else
                r.alg = 'sha256';
              var c = i(e, s[a]);
              if (r.hash = c,
              s.length > a + 1) {
                var h = o(e, s[a + 1])
                  , f = this.getIssuerSerial(h);
                r.issuer = f.issuer,
                  r.serial = f.serial;
              }
              return r;
            }
            ,
            this.getIssuerSerial = function (t) {
              var e = {}
                , r = l(t, 0)
                , s = o(t, r[0])
                , a = n.getGeneralNames(s)[0].dn;
              e.issuer = a;
              var u = i(t, r[1]);
              return e.serial = {
                hex: u
              },
                e;
            }
            ,
            this.getCertificateSet = function (t) {
              for (var e = l(t, 0), n = [], r = 0; r < e.length; r++) {
                var i = o(t, e[r]);
                if ('30' == i.substr(0, 2)) {
                  var s = kt(i, 'CERTIFICATE');
                  n.push(s);
                }
              }
              return {
                array: n,
                sortflag: !1
              };
            };
        }
        ,
        void 0 !== ut && ut || (ut = {}),
        void 0 !== ut.asn1 && ut.asn1 || (ut.asn1 = {}),
        void 0 !== ut.asn1.tsp && ut.asn1.tsp || (ut.asn1.tsp = {}),
        ut.asn1.tsp.TimeStampToken = function (t) {
          var e = ut.asn1.tsp;
          e.TimeStampToken.superclass.constructor.call(this),
            this.params = null,
            this.getEncodedHexPrepare = function () {
              var t = new e.TSTInfo(this.params.econtent.content);
              this.params.econtent.content.hex = t.tohex();
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.tsp.TimeStampToken, ut.asn1.cms.SignedData),
        ut.asn1.tsp.TSTInfo = function (t) {
          Error;
          var e = ut.asn1
            , n = e.DERSequence
            , r = e.DERInteger
            , i = e.DERBoolean
            , o = e.DERGeneralizedTime
            , s = e.DERObjectIdentifier
            , a = e.DERTaggedObject
            , u = e.tsp
            , c = u.MessageImprint
            , l = u.Accuracy
            , h = (e.x509.X500Name,
            e.x509.GeneralName);
          if (u.TSTInfo.superclass.constructor.call(this),
            this.dVersion = new r({
              int: 1
            }),
            this.dPolicy = null,
            this.dMessageImprint = null,
            this.dSerial = null,
            this.dGenTime = null,
            this.dAccuracy = null,
            this.dOrdering = null,
            this.dNonce = null,
            this.dTsa = null,
            this.tohex = function () {
              var t = [this.dVersion];
              if (null == this.dPolicy)
                throw new Error('policy shall be specified.');
              if (t.push(this.dPolicy),
              null == this.dMessageImprint)
                throw new Error('messageImprint shall be specified.');
              if (t.push(this.dMessageImprint),
              null == this.dSerial)
                throw new Error('serialNumber shall be specified.');
              if (t.push(this.dSerial),
              null == this.dGenTime)
                throw new Error('genTime shall be specified.');
              t.push(this.dGenTime),
              null != this.dAccuracy && t.push(this.dAccuracy),
              null != this.dOrdering && t.push(this.dOrdering),
              null != this.dNonce && t.push(this.dNonce),
              null != this.dTsa && t.push(this.dTsa);
              var e = new n({
                array: t
              });
              return this.hTLV = e.tohex(),
                this.hTLV;
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          void 0 !== t) {
            if ('string' == typeof t.policy) {
              if (!t.policy.match(/^[0-9.]+$/))
                throw 'policy shall be oid like 0.1.4.134';
              this.dPolicy = new s({
                oid: t.policy
              });
            }
            void 0 !== t.messageImprint && (this.dMessageImprint = new c(t.messageImprint)),
            void 0 !== t.serial && (this.dSerial = new r(t.serial)),
            void 0 !== t.genTime && (this.dGenTime = new o(t.genTime)),
            void 0 !== t.accuracy && (this.dAccuracy = new l(t.accuracy)),
            void 0 !== t.ordering && 1 == t.ordering && (this.dOrdering = new i),
            void 0 !== t.nonce && (this.dNonce = new r(t.nonce)),
            void 0 !== t.tsa && (this.dTsa = new a({
              tag: 'a0',
              explicit: !0,
              obj: new h({
                dn: t.tsa
              })
            }));
          }
        }
        ,
        ne(ut.asn1.tsp.TSTInfo, ut.asn1.ASN1Object),
        ut.asn1.tsp.Accuracy = function (t) {
          var e = ut.asn1
            , n = e.ASN1Util.newObject;
          e.tsp.Accuracy.superclass.constructor.call(this),
            this.params = null,
            this.tohex = function () {
              var t = this.params
                , e = [];
              return null != t.seconds && 'number' == typeof t.seconds && e.push({
                int: t.seconds
              }),
              null != t.millis && 'number' == typeof t.millis && e.push({
                tag: {
                  tagi: '80',
                  obj: {
                    int: t.millis
                  }
                }
              }),
              null != t.micros && 'number' == typeof t.micros && e.push({
                tag: {
                  tagi: '81',
                  obj: {
                    int: t.micros
                  }
                }
              }),
                n({
                  seq: e
                }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.tsp.Accuracy, ut.asn1.ASN1Object),
        ut.asn1.tsp.MessageImprint = function (t) {
          var e = ut.asn1
            , n = e.DERSequence
            , r = e.DEROctetString
            , i = e.x509.AlgorithmIdentifier;
          e.tsp.MessageImprint.superclass.constructor.call(this),
            this.params = null,
            this.tohex = function () {
              var t = this.params
                , e = new i({
                name: t.alg
              })
                , o = new r({
                hex: t.hash
              });
              return new n({
                array: [e, o]
              }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          void 0 !== t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.tsp.MessageImprint, ut.asn1.ASN1Object),
        ut.asn1.tsp.TimeStampReq = function (t) {
          var e = ut.asn1
            , n = e.DERSequence
            , r = e.DERInteger
            , i = e.DERBoolean
            , o = (e.ASN1Object,
            e.DERObjectIdentifier)
            , s = e.tsp
            , a = s.MessageImprint;
          s.TimeStampReq.superclass.constructor.call(this),
            this.params = null,
            this.tohex = function () {
              var t = this.params
                , e = [];
              return e.push(new r({
                int: 1
              })),
                t.messageImprint instanceof ut.asn1.ASN1Object ? e.push(t.messageImprint) : e.push(new a(t.messageImprint)),
              null != t.policy && e.push(new o(t.policy)),
              null != t.nonce && e.push(new r(t.nonce)),
              1 == t.certreq && e.push(new i),
                new n({
                  array: e
                }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.tsp.TimeStampReq, ut.asn1.ASN1Object),
        ut.asn1.tsp.TimeStampResp = function (t) {
          var e = ut.asn1
            , n = e.DERSequence
            , r = (e.ASN1Object,
            e.tsp)
            , i = r.PKIStatusInfo;
          r.TimeStampResp.superclass.constructor.call(this),
            this.params = null,
            this.tohex = function () {
              var t = this.params
                , o = [];
              if (null != t.econtent || null != t.tst)
                if (null != t.statusinfo ? o.push(new i(t.statusinfo)) : o.push(new i('granted')),
                null != t.econtent)
                  o.push(new r.TimeStampToken(t).getContentInfo());
                else {
                  if (!(t.tst instanceof e.ASN1Object))
                    throw new Error('improper member tst value');
                  o.push(t.tst);
                }
              else {
                if (null == t.statusinfo)
                  throw new Error('parameter for token nor statusinfo not specified');
                o.push(new i(t.statusinfo));
              }
              return new n({
                array: o
              }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.tsp.TimeStampResp, ut.asn1.ASN1Object),
        ut.asn1.tsp.PKIStatusInfo = function (t) {
          var e = Error
            , n = ut.asn1
            , r = n.DERSequence
            , i = n.tsp
            , o = i.PKIStatus
            , s = i.PKIFreeText
            , a = i.PKIFailureInfo;
          i.PKIStatusInfo.superclass.constructor.call(this),
            this.params = null,
            this.tohex = function () {
              var t = this.params
                , n = [];
              if ('string' == typeof t)
                n.push(new o(t));
              else {
                if (null == t.status)
                  throw new e('property \'status\' unspecified');
                n.push(new o(t.status)),
                null != t.statusstr && n.push(new s(t.statusstr)),
                null != t.failinfo && n.push(new a(t.failinfo));
              }
              return new r({
                array: n
              }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.tsp.PKIStatusInfo, ut.asn1.ASN1Object),
        ut.asn1.tsp.PKIStatus = function (t) {
          var e = Error
            , n = ut.asn1
            , r = n.DERInteger;
          n.tsp.PKIStatus.superclass.constructor.call(this);
          var i = {
            granted: 0,
            grantedWithMods: 1,
            rejection: 2,
            waiting: 3,
            revocationWarning: 4,
            revocationNotification: 5
          };
          this.params = null,
            this.tohex = function () {
              var t, n = this.params;
              if ('string' == typeof n)
                try {
                  t = i[n];
                } catch (t) {
                  throw new e('undefined name: ' + n);
                }
              else {
                if ('number' != typeof n)
                  throw new e('unsupported params');
                t = n;
              }
              return new r({
                int: t
              }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.tsp.PKIStatus, ut.asn1.ASN1Object),
        ut.asn1.tsp.PKIFreeText = function (t) {
          var e = Error
            , n = ut.asn1
            , r = n.DERSequence
            , i = n.DERUTF8String;
          n.tsp.PKIFreeText.superclass.constructor.call(this),
            this.params = null,
            this.tohex = function () {
              var t = this.params;
              if (!t instanceof Array)
                throw new e('wrong params: not array');
              for (var n = [], o = 0; o < t.length; o++)
                n.push(new i({
                  str: t[o]
                }));
              return new r({
                array: n
              }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.tsp.PKIFreeText, ut.asn1.ASN1Object),
        ut.asn1.tsp.PKIFailureInfo = function (t) {
          var e = Error
            , n = ut.asn1
            , r = n.DERBitString
            , i = n.tsp.PKIFailureInfo
            , o = {
            badAlg: 0,
            badRequest: 2,
            badDataFormat: 5,
            timeNotAvailable: 14,
            unacceptedPolicy: 15,
            unacceptedExtension: 16,
            addInfoNotAvailable: 17,
            systemFailure: 25
          };
          i.superclass.constructor.call(this),
            this.params = null,
            this.getBinValue = function () {
              var t = this.params
                , n = 0;
              if ('number' == typeof t && 0 <= t && t <= 25) {
                for (var r = (n |= 1 << t).toString(2), i = '', s = r.length - 1; s >= 0; s--)
                  i += r[s];
                return i;
              }
              if ('string' == typeof t && null != o[t])
                return te([t], o);
              if ('object' == typeof t && null != t.length)
                return te(t, o);
              throw new e('wrong params');
            }
            ,
            this.tohex = function () {
              this.params;
              var t = this.getBinValue();
              return new r({
                bin: t
              }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.tsp.PKIFailureInfo, ut.asn1.ASN1Object),
        ut.asn1.tsp.AbstractTSAAdapter = function (t) {
          this.getTSTHex = function (t, e) {
            throw 'not implemented yet';
          };
        }
        ,
        ut.asn1.tsp.SimpleTSAAdapter = function (t) {
          var e = ut
            , n = e.asn1.tsp
            , r = e.crypto.Util.hashHex;
          n.SimpleTSAAdapter.superclass.constructor.call(this),
            this.params = null,
            this.serial = 0,
            this.getTSTHex = function (t, e) {
              var i = r(t, e);
              this.params.econtent.content.messageImprint = {
                alg: e,
                hash: i
              },
                this.params.econtent.content.serial = {
                  int: this.serial++
                };
              var o = Math.floor(1e9 * Math.random());
              return this.params.econtent.content.nonce = {
                int: o
              },
                new n.TimeStampToken(this.params).getContentInfoEncodedHex();
            }
            ,
          void 0 !== t && (this.params = t);
        }
        ,
        ne(ut.asn1.tsp.SimpleTSAAdapter, ut.asn1.tsp.AbstractTSAAdapter),
        ut.asn1.tsp.FixedTSAAdapter = function (t) {
          var e = ut
            , n = e.asn1.tsp
            , r = e.crypto.Util.hashHex;
          n.FixedTSAAdapter.superclass.constructor.call(this),
            this.params = null,
            this.getTSTHex = function (t, e) {
              var i = r(t, e);
              return this.params.econtent.content.messageImprint = {
                alg: e,
                hash: i
              },
                new n.TimeStampToken(this.params).getContentInfoEncodedHex();
            }
            ,
          void 0 !== t && (this.params = t);
        }
        ,
        ne(ut.asn1.tsp.FixedTSAAdapter, ut.asn1.tsp.AbstractTSAAdapter),
        ut.asn1.tsp.TSPUtil = new function () {
        }
        ,
        ut.asn1.tsp.TSPUtil.newTimeStampToken = function (t) {
          return new ut.asn1.tsp.TimeStampToken(t);
        }
        ,
        ut.asn1.tsp.TSPUtil.parseTimeStampReq = function (t) {
          return (new ut.asn1.tsp.TSPParser).getTimeStampReq(t);
        }
        ,
        ut.asn1.tsp.TSPUtil.parseMessageImprint = function (t) {
          return (new ut.asn1.tsp.TSPParser).getMessageImprint(t);
        }
        ,
        ut.asn1.tsp.TSPParser = function () {
          Error;
          var t = new ae
            , e = ht
            , n = e.getV
            , r = e.getTLV
            , i = e.getIdxbyList
            , o = (e.getTLVbyListEx,
            e.getChildIdx)
            , s = ['granted', 'grantedWithMods', 'rejection', 'waiting', 'revocationWarning', 'revocationNotification']
            , a = {
            0: 'badAlg',
            2: 'badRequest',
            5: 'badDataFormat',
            14: 'timeNotAvailable',
            15: 'unacceptedPolicy',
            16: 'unacceptedExtension',
            17: 'addInfoNotAvailable',
            25: 'systemFailure'
          };
          this.getResponse = function (t) {
            var e = o(t, 0);
            if (1 == e.length)
              return this.getPKIStatusInfo(r(t, e[0]));
            if (e.length > 1) {
              var n = this.getPKIStatusInfo(r(t, e[0]))
                , i = r(t, e[1])
                , s = this.getToken(i);
              return s.statusinfo = n,
                s;
            }
          }
            ,
            this.getToken = function (t) {
              var e = (new ut.asn1.cms.CMSParser).getCMSSignedData(t);
              return this.setTSTInfo(e),
                e;
            }
            ,
            this.setTSTInfo = function (t) {
              var e = t.econtent;
              if ('tstinfo' == e.type) {
                var n = e.content.hex
                  , r = this.getTSTInfo(n);
                e.content = r;
              }
            }
            ,
            this.getTSTInfo = function (e) {
              var i = {}
                , s = o(e, 0)
                , a = n(e, s[1]);
              i.policy = zt(a);
              var u = r(e, s[2]);
              i.messageImprint = this.getMessageImprint(u);
              var c = n(e, s[3]);
              i.serial = {
                hex: c
              };
              var l = n(e, s[4]);
              i.genTime = {
                str: wt(l)
              };
              var h = 0;
              if (s.length > 5 && '30' == e.substr(s[5], 2)) {
                var f = r(e, s[5]);
                i.accuracy = this.getAccuracy(f),
                  h++;
              }
              s.length > 5 + h && '01' == e.substr(s[5 + h], 2) && ('ff' == n(e, s[5 + h]) && (i.ordering = !0),
                h++);
              if (s.length > 5 + h && '02' == e.substr(s[5 + h], 2)) {
                var p = n(e, s[5 + h]);
                i.nonce = {
                  hex: p
                },
                  h++;
              }
              if (s.length > 5 + h && 'a0' == e.substr(s[5 + h], 2)) {
                var d = r(e, s[5 + h]);
                d = '30' + d.substr(2),
                  pGeneralNames = t.getGeneralNames(d);
                var g = pGeneralNames[0].dn;
                i.tsa = g,
                  h++;
              }
              if (s.length > 5 + h && 'a1' == e.substr(s[5 + h], 2)) {
                var v = r(e, s[5 + h]);
                v = '30' + v.substr(2);
                var m = t.getExtParamArray(v);
                i.ext = m,
                  h++;
              }
              return i;
            }
            ,
            this.getAccuracy = function (t) {
              for (var e = {}, r = o(t, 0), i = 0; i < r.length; i++) {
                var s = t.substr(r[i], 2)
                  , a = n(t, r[i])
                  , u = parseInt(a, 16);
                '02' == s ? e.seconds = u : '80' == s ? e.millis = u : '81' == s && (e.micros = u);
              }
              return e;
            }
            ,
            this.getMessageImprint = function (t) {
              if ('30' != t.substr(0, 2))
                throw new Error('head of messageImprint hex shall be x30');
              var r = {}
                , s = (o(t, 0),
                i(t, 0, [0, 0]))
                , a = n(t, s)
                , u = e.hextooidstr(a)
                , c = ut.asn1.x509.OID.oid2name(u);
              if ('' == c)
                throw new Error('hashAlg name undefined: ' + u);
              var l = c
                , h = i(t, 0, [1]);
              return r.alg = l,
                r.hash = n(t, h),
                r;
            }
            ,
            this.getPKIStatusInfo = function (t) {
              var e = {}
                , i = o(t, 0)
                , a = 0;
              try {
                var u = n(t, i[0])
                  , c = parseInt(u, 16);
                e.status = s[c];
              } catch (t) {
              }
              if (i.length > 1 && '30' == t.substr(i[1], 2)) {
                var l = r(t, i[1]);
                e.statusstr = this.getPKIFreeText(l),
                  a++;
              }
              if (i.length > a && '03' == t.substr(i[1 + a], 2)) {
                var h = r(t, i[1 + a]);
                e.failinfo = this.getPKIFailureInfo(h);
              }
              return e;
            }
            ,
            this.getPKIFreeText = function (t) {
              for (var n = [], r = o(t, 0), i = 0; i < r.length; i++)
                n.push(e.getString(t, r[i]));
              return n;
            }
            ,
            this.getPKIFailureInfo = function (t) {
              var n = e.getInt(t, 0);
              return null != a[n] ? a[n] : n;
            }
            ,
            this.getTimeStampReq = function (t) {
              var i = {
                certreq: !1
              }
                , s = o(t, 0);
              if (s.length < 2)
                throw new Error('TimeStampReq must have at least 2 items');
              var a = r(t, s[1]);
              i.messageImprint = ut.asn1.tsp.TSPUtil.parseMessageImprint(a);
              for (var u = 2; u < s.length; u++) {
                var c = s[u]
                  , l = t.substr(c, 2);
                if ('06' == l) {
                  var h = n(t, c);
                  i.policy = e.hextooidstr(h);
                }
                '02' == l && (i.nonce = n(t, c)),
                '01' == l && (i.certreq = !0);
              }
              return i;
            };
        }
        ,
        void 0 !== ut && ut || (ut = {}),
        void 0 !== ut.asn1 && ut.asn1 || (ut.asn1 = {}),
        void 0 !== ut.asn1.cades && ut.asn1.cades || (ut.asn1.cades = {}),
        ut.asn1.cades.SignaturePolicyIdentifier = function (t) {
          var e = ut.asn1.cades
            , n = e.SignaturePolicyId;
          e.SignaturePolicyIdentifier.superclass.constructor.call(this),
            this.typeOid = '1.2.840.113549.1.9.16.2.15',
            this.params = null,
            this.getValueArray = function () {
              return [new n(this.params)];
            }
            ,
            this.setByParam = function (t) {
              this.params = t;
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.cades.SignaturePolicyIdentifier, ut.asn1.cms.Attribute),
        ut.asn1.cades.SignaturePolicyId = function (t) {
          var e = ut.asn1
            , n = e.DERSequence
            , r = e.DERObjectIdentifier
            , i = (e.x509.AlgorithmIdentifier,
            e.cades)
            , o = i.SignaturePolicyId
            , s = i.OtherHashAlgAndValue;
          o.superclass.constructor.call(this),
            this.params = null,
            this.tohex = function () {
              var t = this.params
                , e = [];
              return e.push(new r(t.oid)),
                e.push(new s(t)),
                new n({
                  array: e
                }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
            this.setByParam = function (t) {
              this.params = t;
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.cades.SignaturePolicyId, ut.asn1.ASN1Object),
        ut.asn1.cades.OtherHashAlgAndValue = function (t) {
          var e = Error
            , n = ut.asn1
            , r = n.DERSequence
            , i = n.DEROctetString
            , o = n.x509.AlgorithmIdentifier;
          n.cades.OtherHashAlgAndValue.superclass.constructor.call(this),
            this.params = null,
            this.tohex = function () {
              var t = this.params;
              if (null == t.alg)
                throw new e('property \'alg\' not specified');
              if (null == t.hash && null == t.cert)
                throw new e('property \'hash\' nor \'cert\' not specified');
              var n = null;
              if (null != t.hash)
                n = t.hash;
              else if (null != t.cert) {
                if ('string' != typeof t.cert)
                  throw new e('cert not string');
                var s = t.cert;
                -1 != t.cert.indexOf('-----BEGIN') && (s = Tt(t.cert)),
                  n = ut.crypto.Util.hashHex(s, t.alg);
              }
              var a = [];
              return a.push(new o({
                name: t.alg
              })),
                a.push(new i({
                  hex: n
                })),
                new r({
                  array: a
                }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.cades.OtherHashAlgAndValue, ut.asn1.ASN1Object),
        ut.asn1.cades.OtherHashValue = function (t) {
          ut.asn1.cades.OtherHashValue.superclass.constructor.call(this);
          var e = Error
            , n = ut
            , r = (n.lang.String.isHex,
            n.asn1.DEROctetString);
          n.crypto.Util.hashHex;
          this.params = null,
            this.tohex = function () {
              var t = this.params;
              if (null == t.hash && null == t.cert)
                throw new e('hash or cert not specified');
              var n = null;
              if (null != t.hash)
                n = t.hash;
              else if (null != t.cert) {
                if ('string' != typeof t.cert)
                  throw new e('cert not string');
                var i = t.cert;
                -1 != t.cert.indexOf('-----BEGIN') && (i = Tt(t.cert)),
                  n = ut.crypto.Util.hashHex(i, 'sha1');
              }
              return new r({
                hex: n
              }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.cades.OtherHashValue, ut.asn1.ASN1Object),
        ut.asn1.cades.SignatureTimeStamp = function (t) {
          var e = Error
            , n = ut
            , r = n.lang.String.isHex
            , i = n.asn1
            , o = i.ASN1Object;
          i.x509;
          i.cades.SignatureTimeStamp.superclass.constructor.call(this),
            this.typeOid = '1.2.840.113549.1.9.16.2.14',
            this.params = null,
            this.getValueArray = function () {
              var t = this.params;
              if (null != t.tst) {
                if (r(t.tst))
                  return (i = new o).hTLV = t.tst,
                    [i];
                if (t.tst instanceof o)
                  return [t.tst];
                throw new e('params.tst has wrong value');
              }
              if (null != t.res) {
                var n = t.res;
                if (n instanceof o && (n = n.tohex()),
                'string' != typeof n || !r(n))
                  throw new e('params.res has wrong value');
                var i;
                ht.getTLVbyList(n, 0, [1]);
                return (i = new o).hTLV = t.tst,
                  [i];
              }
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.cades.SignatureTimeStamp, ut.asn1.cms.Attribute),
        ut.asn1.cades.CompleteCertificateRefs = function (t) {
          var e = Error
            , n = ut
            , r = n.asn1
            , i = r.DERSequence
            , o = r.cades
            , s = o.OtherCertID
            , a = n.lang.String.isHex;
          o.CompleteCertificateRefs.superclass.constructor.call(this),
            this.typeOid = '1.2.840.113549.1.9.16.2.21',
            this.params = null,
            this.getValueArray = function () {
              for (var t = this.params, n = [], r = 0; r < t.array.length; r++) {
                var o = t.array[r];
                if ('string' == typeof o)
                  if (-1 != o.indexOf('-----BEGIN'))
                    o = {
                      cert: o
                    };
                  else {
                    if (!a(o))
                      throw new e('unsupported value: ' + o);
                    o = {
                      hash: o
                    };
                  }
                null != t.alg && null == o.alg && (o.alg = t.alg),
                null != t.hasis && null == o.hasis && (o.hasis = t.hasis);
                var u = new s(o);
                n.push(u);
              }
              return [new i({
                array: n
              })];
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.cades.CompleteCertificateRefs, ut.asn1.cms.Attribute),
        ut.asn1.cades.OtherCertID = function (t) {
          var e = ut.asn1
            , n = e.DERSequence
            , r = e.cms.IssuerSerial
            , i = e.cades
            , o = i.OtherHashValue
            , s = i.OtherHashAlgAndValue;
          i.OtherCertID.superclass.constructor.call(this),
            this.params = t,
            this.tohex = function () {
              var t = this.params;
              'string' == typeof t && (-1 != t.indexOf('-----BEGIN') ? t = {
                cert: t
              } : _isHex(t) && (t = {
                hash: t
              }));
              var e = []
                , i = null;
              if (i = null != t.alg ? new s(t) : new o(t),
                e.push(i),
              null != t.cert && 1 == t.hasis || null != t.issuer && null != t.serial) {
                var a = new r(t);
                e.push(a);
              }
              return new n({
                array: e
              }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.cades.OtherCertID, ut.asn1.ASN1Object),
        ut.asn1.cades.OtherHash = function (t) {
          Error;
          var e = ut
            , n = e.asn1
            , r = (n.cms,
            n.cades)
            , i = r.OtherHashAlgAndValue
            , o = r.OtherHashValue
            , s = (e.crypto.Util.hashHex,
            e.lang.String.isHex);
          r.OtherHash.superclass.constructor.call(this),
            this.params = null,
            this.tohex = function () {
              var t = this.params;
              'string' == typeof t && (-1 != t.indexOf('-----BEGIN') ? t = {
                cert: t
              } : s(t) && (t = {
                hash: t
              }));
              return (null != t.alg ? new i(t) : new o(t)).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.cades.OtherHash, ut.asn1.ASN1Object),
        ut.asn1.cades.CAdESUtil = new function () {
        }
        ,
        ut.asn1.cades.CAdESUtil.parseSignedDataForAddingUnsigned = function (t) {
          return (new ut.asn1.cms.CMSParser).getCMSSignedData(t);
        }
        ,
        ut.asn1.cades.CAdESUtil.parseSignerInfoForAddingUnsigned = function (t, e, n) {
          var r = ht
            , i = r.getChildIdx
            , o = r.getTLV
            , s = r.getV
            , a = ut.asn1
            , u = a.ASN1Object
            , c = a.cms
            , l = c.AttributeList
            , h = c.SignerInfo
            , f = {}
            , p = i(t, e);
          if (6 != p.length)
            throw 'not supported items for SignerInfo (!=6)';
          var d = p.shift();
          f.version = o(t, d);
          var g = p.shift();
          f.si = o(t, g);
          var v = p.shift();
          f.digalg = o(t, v);
          var m = p.shift();
          f.sattrs = o(t, m);
          var y = p.shift();
          f.sigalg = o(t, y);
          var b = p.shift();
          f.sig = o(t, b),
            f.sigval = s(t, b);
          var x = null;
          return f.obj = new h,
            (x = new u).hTLV = f.version,
            f.obj.dCMSVersion = x,
            (x = new u).hTLV = f.si,
            f.obj.dSignerIdentifier = x,
            (x = new u).hTLV = f.digalg,
            f.obj.dDigestAlgorithm = x,
            (x = new u).hTLV = f.sattrs,
            f.obj.dSignedAttrs = x,
            (x = new u).hTLV = f.sigalg,
            f.obj.dSigAlg = x,
            (x = new u).hTLV = f.sig,
            f.obj.dSig = x,
            f.obj.dUnsignedAttrs = new l,
            f;
        }
        ,
        void 0 !== ut.asn1.csr && ut.asn1.csr || (ut.asn1.csr = {}),
        ut.asn1.csr.CertificationRequest = function (t) {
          var e = ut.asn1
            , n = e.DERBitString
            , r = e.DERSequence
            , i = e.csr
            , o = (e.x509,
            i.CertificationRequestInfo);
          i.CertificationRequest.superclass.constructor.call(this),
            this.setByParam = function (t) {
              this.params = t;
            }
            ,
            this.sign = function () {
              var t = new o(this.params).tohex()
                , e = new ut.crypto.Signature({
                alg: this.params.sigalg
              });
              e.init(this.params.sbjprvkey),
                e.updateHex(t);
              var n = e.sign();
              this.params.sighex = n;
            }
            ,
            this.getPEM = function () {
              return kt(this.tohex(), 'CERTIFICATE REQUEST');
            }
            ,
            this.tohex = function () {
              var t = this.params
                , e = new ut.asn1.csr.CertificationRequestInfo(this.params)
                , i = new ut.asn1.x509.AlgorithmIdentifier({
                name: t.sigalg
              });
              if (null == t.sighex && null != t.sbjprvkey && this.sign(),
              null == t.sighex)
                throw new Error('sighex or sbjprvkey parameter not defined');
              var o = new n({
                hex: '00' + t.sighex
              });
              return new r({
                array: [e, i, o]
              }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          void 0 !== t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.csr.CertificationRequest, ut.asn1.ASN1Object),
        ut.asn1.csr.CertificationRequestInfo = function (t) {
          var e = ut.asn1
            , n = (e.DERBitString,
            e.DERSequence)
            , r = e.DERInteger
            , i = e.DERUTF8String
            , o = e.DERTaggedObject
            , s = e.ASN1Util.newObject
            , a = e.csr
            , u = e.x509
            , c = u.X500Name
            , l = u.Extensions
            , h = u.SubjectPublicKeyInfo;
          a.AttributeList;
          a.CertificationRequestInfo.superclass.constructor.call(this),
            this.params = null,
            this.setByParam = function (t) {
              null != t && (this.params = t);
            }
            ,
            this.tohex = function () {
              var t = this.params
                , e = [];
              if (e.push(new r({
                int: 0
              })),
                e.push(new c(t.subject)),
                e.push(new h(re.getKey(t.sbjpubkey))),
              null != t.attrs) {
                var a = function (t) {
                  for (var e = Error, n = ut.asn1.x509.Extensions, r = [], i = 0; i < t.length; i++) {
                    var o = t[i]
                      , s = o.attr;
                    if ('extensionRequest' == s) {
                      var a = {
                        seq: [{
                          oid: '1.2.840.113549.1.9.14'
                        }, {
                          set: [new n(o.ext)]
                        }]
                      };
                      r.push(a);
                    } else if ('unstructuredName' == s) {
                      a = {
                        seq: [{
                          oid: '1.2.840.113549.1.9.2'
                        }, {
                          set: o.names
                        }]
                      };
                      r.push(a);
                    } else {
                      if ('challengePassword' != s)
                        throw new e('unknown CSR attribute');
                      a = {
                        seq: [{
                          oid: '1.2.840.113549.1.9.7'
                        }, {
                          set: [{
                            utf8str: o.password
                          }]
                        }]
                      };
                      r.push(a);
                    }
                  }
                  return {
                    set: r
                  };
                }(t.attrs)
                  , u = s({
                  tag: {
                    tage: 'a0',
                    obj: a
                  }
                });
                e.push(u);
              } else if (null != t.extreq) {
                var f = new l(t.extreq);
                u = s({
                  tag: {
                    tage: 'a0',
                    obj: {
                      seq: [{
                        oid: '1.2.840.113549.1.9.14'
                      }, {
                        set: [f]
                      }]
                    }
                  }
                });
                e.push(u);
              } else
                e.push(new o({
                  tag: 'a0',
                  explicit: !1,
                  obj: new i({
                    str: ''
                  })
                }));
              return new n({
                array: e
              }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          null != t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.csr.CertificationRequestInfo, ut.asn1.ASN1Object),
        ut.asn1.csr.AttributeList = function (t) {
        }
        ,
        ne(ut.asn1.csr.AttributeList, ut.asn1.ASN1Object),
        ut.asn1.csr.CSRUtil = new function () {
        }
        ,
        ut.asn1.csr.CSRUtil.newCSRPEM = function (t) {
          return new ut.asn1.csr.CertificationRequest(t).getPEM();
        }
        ,
        ut.asn1.csr.CSRUtil.getParam = function (t, e) {
          var n = ht
            , r = n.getV
            , i = n.getIdxbyList
            , o = n.getTLVbyList
            , s = n.getTLVbyListEx
            , a = n.getVbyListEx
            , u = {};
          if (-1 == t.indexOf('-----BEGIN CERTIFICATE REQUEST'))
            throw new Error('argument is not PEM file');
          var c = Tt(t, 'CERTIFICATE REQUEST');
          e && (u.tbs = o(c, 0, [0]));
          try {
            var l = s(c, 0, [0, 1]);
            if ('3000' == l)
              u.subject = {};
            else {
              var h = new ae;
              u.subject = h.getX500Name(l);
            }
          } catch (t) {
          }
          var f = s(c, 0, [0, 2])
            , p = re.getKey(f, null, 'pkcs8pub');
          u.sbjpubkey = re.getPEM(p, 'PKCS8PUB');
          var d = function (t) {
            var e = i(t, 0, [0, 3, 0, 0], '06');
            return '2a864886f70d01090e' != r(t, e) ? null : o(t, 0, [0, 3, 0, 1, 0], '30');
          }(c);
          h = new ae;
          null != d && (u.extreq = h.getExtParamArray(d));
          try {
            var g = s(c, 0, [1], '30');
            h = new ae;
            u.sigalg = h.getAlgorithmIdentifierName(g);
          } catch (t) {
          }
          try {
            var v = a(c, 0, [2]);
            u.sighex = v;
          } catch (t) {
          }
          return u;
        }
        ,
        ut.asn1.csr.CSRUtil.verifySignature = function (t) {
          try {
            var e = null;
            if ('string' == typeof t && -1 != t.indexOf('-----BEGIN CERTIFICATE REQUEST') ? e = ut.asn1.csr.CSRUtil.getParam(t, !0) : 'object' == typeof t && null != t.sbjpubkey && null != t.sigalg && null != t.sighex && null != t.tbs && (e = t),
            null == e)
              return !1;
            var n = new ut.crypto.Signature({
              alg: e.sigalg
            });
            return n.init(e.sbjpubkey),
              n.updateHex(e.tbs),
              n.verify(e.sighex);
          } catch (t) {
            return alert(t),
              !1;
          }
        }
        ,
        void 0 !== ut && ut || (ut = {}),
        void 0 !== ut.asn1 && ut.asn1 || (ut.asn1 = {}),
        void 0 !== ut.asn1.ocsp && ut.asn1.ocsp || (ut.asn1.ocsp = {}),
        ut.asn1.ocsp.DEFAULT_HASH = 'sha1',
        ut.asn1.ocsp.OCSPResponse = function (t) {
          ut.asn1.ocsp.OCSPResponse.superclass.constructor.call(this);
          ut.asn1.DEREnumerated;
          var e = ut.asn1.ASN1Util.newObject
            , n = ut.asn1.ocsp.ResponseBytes
            ,
            r = ['successful', 'malformedRequest', 'internalError', 'tryLater', '_not_used_', 'sigRequired', 'unauthorized'];
          this.params = null,
            this._getStatusCode = function () {
              var t = this.params.resstatus;
              return 'number' == typeof t ? t : 'string' != typeof t ? -1 : r.indexOf(t);
            }
            ,
            this.setByParam = function (t) {
              this.params = t;
            }
            ,
            this.tohex = function () {
              var t = this.params
                , r = this._getStatusCode();
              if (-1 == r)
                throw new Error('responseStatus not supported: ' + t.resstatus);
              if (0 != r)
                return e({
                  seq: [{
                    enum: {
                      int: r
                    }
                  }]
                }).tohex();
              var i = new n(t);
              return e({
                seq: [{
                  enum: {
                    int: 0
                  }
                }, {
                  tag: {
                    tag: 'a0',
                    explicit: !0,
                    obj: i
                  }
                }]
              }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          void 0 !== t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.ocsp.OCSPResponse, ut.asn1.ASN1Object),
        ut.asn1.ocsp.ResponseBytes = function (t) {
          ut.asn1.ocsp.ResponseBytes.superclass.constructor.call(this);
          var e = ut.asn1
            , n = e.DERSequence
            , r = e.DERObjectIdentifier
            , i = e.DEROctetString
            , o = e.ocsp.BasicOCSPResponse;
          this.params = null,
            this.setByParam = function (t) {
              this.params = t;
            }
            ,
            this.tohex = function () {
              var t = this.params;
              if ('ocspBasic' != t.restype)
                throw new Error('not supported responseType: ' + t.restype);
              var e = new o(t)
                , s = [];
              return s.push(new r({
                name: 'ocspBasic'
              })),
                s.push(new i({
                  hex: e.tohex()
                })),
                new n({
                  array: s
                }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          void 0 !== t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.ocsp.ResponseBytes, ut.asn1.ASN1Object),
        ut.asn1.ocsp.BasicOCSPResponse = function (t) {
          ut.asn1.ocsp.BasicOCSPResponse.superclass.constructor.call(this);
          var e = Error
            , n = ut.asn1
            , r = n.ASN1Object
            , i = n.DERSequence
            , o = (n.DERGeneralizedTime,
            n.DERTaggedObject)
            , s = n.DERBitString
            , a = (n.x509.Extensions,
            n.x509.AlgorithmIdentifier)
            , u = n.ocsp;
          u.ResponderID;
          _SingleResponseList = u.SingleResponseList,
            _ResponseData = u.ResponseData,
            this.params = null,
            this.setByParam = function (t) {
              this.params = t;
            }
            ,
            this.sign = function () {
              var t = this.params
                , e = t.tbsresp.tohex()
                , n = new ut.crypto.Signature({
                alg: t.sigalg
              });
              n.init(t.reskey),
                n.updateHex(e),
                t.sighex = n.sign();
            }
            ,
            this.tohex = function () {
              var t = this.params;
              null == t.tbsresp && (t.tbsresp = new _ResponseData(t)),
              null == t.sighex && null != t.reskey && this.sign();
              var n = [];
              if (n.push(t.tbsresp),
                n.push(new a({
                  name: t.sigalg
                })),
                n.push(new s({
                  hex: '00' + t.sighex
                })),
              null != t.certs && null != t.certs.length) {
                for (var u = [], c = 0; c < t.certs.length; c++) {
                  var l = t.certs[c]
                    , h = null;
                  if (ht.isASN1HEX(l))
                    h = l;
                  else {
                    if (!l.match(/-----BEGIN/))
                      throw new e('certs[' + c + '] not hex or PEM');
                    h = Tt(l);
                  }
                  u.push(new r({
                    tlv: h
                  }));
                }
                var f = new i({
                  array: u
                });
                n.push(new o({
                  tag: 'a0',
                  explicit: !0,
                  obj: f
                }));
              }
              return new i({
                array: n
              }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          void 0 !== t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.ocsp.BasicOCSPResponse, ut.asn1.ASN1Object),
        ut.asn1.ocsp.ResponseData = function (t) {
          ut.asn1.ocsp.ResponseData.superclass.constructor.call(this);
          var e = Error
            , n = ut.asn1
            , r = n.DERSequence
            , i = n.DERGeneralizedTime
            , o = n.DERTaggedObject
            , s = n.x509.Extensions
            , a = n.ocsp
            , u = a.ResponderID;
          _SingleResponseList = a.SingleResponseList,
            this.params = null,
            this.tohex = function () {
              var t = this.params;
              null != t.respid && new e('respid not specified'),
              null != t.prodat && new e('prodat not specified'),
              null != t.array && new e('array not specified');
              var n = [];
              if (n.push(new u(t.respid)),
                n.push(new i(t.prodat)),
                n.push(new _SingleResponseList(t.array)),
              null != t.ext) {
                var a = new s(t.ext);
                n.push(new o({
                  tag: 'a1',
                  explicit: !0,
                  obj: a
                }));
              }
              return new r({
                array: n
              }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
            this.setByParam = function (t) {
              this.params = t;
            }
            ,
          void 0 !== t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.ocsp.ResponseData, ut.asn1.ASN1Object),
        ut.asn1.ocsp.ResponderID = function (t) {
          ut.asn1.ocsp.ResponderID.superclass.constructor.call(this);
          var e = ut
            , n = e.asn1
            , r = n.ASN1Util.newObject
            , i = n.x509.X500Name
            , o = e.lang.String.isHex
            , s = Error;
          this.params = null,
            this.tohex = function () {
              var t = this.params;
              if (null != t.key) {
                var e, n = null;
                if ('string' == typeof t.key) {
                  if (o(t.key) && (n = t.key),
                    t.key.match(/-----BEGIN CERTIFICATE/))
                    null != (e = new ae(t.key).getExtSubjectKeyIdentifier()) && (n = e.kid.hex);
                } else if (t.key instanceof ae)
                  null != (e = t.key.getExtSubjectKeyIdentifier()) && (n = e.kid.hex);
                if (null == n)
                  throw new s('wrong key member value');
                return r({
                  tag: {
                    tag: 'a2',
                    explicit: !0,
                    obj: {
                      octstr: {
                        hex: n
                      }
                    }
                  }
                }).tohex();
              }
              if (null != t.name) {
                var a = null;
                if ('string' == typeof t.name && t.name.match(/-----BEGIN CERTIFICATE/))
                  a = new ae(t.name).getSubject();
                else
                  t.name instanceof ae ? a = t.name.getSubject() : 'object' != typeof t.name || null == t.name.array && null == t.name.str || (a = t.name);
                if (null == a)
                  throw new s('wrong name member value');
                return r({
                  tag: {
                    tag: 'a1',
                    explicit: !0,
                    obj: new i(a)
                  }
                }).tohex();
              }
              throw new s('key or name not specified');
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
            this.setByParam = function (t) {
              this.params = t;
            }
            ,
          void 0 !== t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.ocsp.ResponderID, ut.asn1.ASN1Object),
        ut.asn1.ocsp.SingleResponseList = function (t) {
          ut.asn1.ocsp.SingleResponseList.superclass.constructor.call(this);
          var e = ut.asn1
            , n = e.DERSequence
            , r = e.ocsp.SingleResponse;
          this.params = null,
            this.tohex = function () {
              var t = this.params;
              if ('object' != typeof t || null == t.length)
                throw new Error('params not specified properly');
              for (var e = [], i = 0; i < t.length; i++)
                e.push(new r(t[i]));
              return new n({
                array: e
              }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
            this.setByParam = function (t) {
              this.params = t;
            }
            ,
          void 0 !== t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.ocsp.SingleResponseList, ut.asn1.ASN1Object),
        ut.asn1.ocsp.SingleResponse = function (t) {
          var e = Error
            , n = ut.asn1
            , r = n.DERSequence
            , i = n.DERGeneralizedTime
            , o = n.DERTaggedObject
            , s = n.ocsp
            , a = s.CertID
            , u = s.CertStatus
            , c = n.x509.Extensions;
          s.SingleResponse.superclass.constructor.call(this),
            this.params = null,
            this.tohex = function () {
              var t = this.params
                , n = [];
              if (null == t.certid)
                throw new e('certid unspecified');
              if (null == t.status)
                throw new e('status unspecified');
              if (null == t.thisupdate)
                throw new e('thisupdate unspecified');
              if (n.push(new a(t.certid)),
                n.push(new u(t.status)),
                n.push(new i(t.thisupdate)),
              null != t.nextupdate) {
                var s = new i(t.nextupdate);
                n.push(new o({
                  tag: 'a0',
                  explicit: !0,
                  obj: s
                }));
              }
              if (null != t.ext) {
                var l = new c(t.ext);
                n.push(new o({
                  tag: 'a1',
                  explicit: !0,
                  obj: l
                }));
              }
              return new r({
                array: n
              }).tohex();
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
            this.setByParam = function (t) {
              this.params = t;
            }
            ,
          void 0 !== t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.ocsp.SingleResponse, ut.asn1.ASN1Object),
        ut.asn1.ocsp.CertID = function (t) {
          var e = ut
            , n = e.asn1
            , r = n.DEROctetString
            , i = n.DERInteger
            , o = n.DERSequence
            , s = n.x509.AlgorithmIdentifier
            , a = n.ocsp
            , u = (a.DEFAULT_HASH,
            e.crypto.Util.hashHex)
            , c = ae
            , l = ht.getVbyList;
          a.CertID.superclass.constructor.call(this),
            this.DEFAULT_HASH = 'sha1',
            this.params = null,
            this.setByValue = function (t, e, n, r) {
              null == r && (r = this.DEFAULT_HASH),
                this.params = {
                  alg: r,
                  issname: t,
                  isskey: e,
                  sbjsn: n
                };
            }
            ,
            this.setByCert = function (t, e, n) {
              null == n && (n = this.DEFAULT_HASH),
                this.params = {
                  alg: n,
                  issuerCert: t,
                  subjectCert: e
                };
            }
            ,
            this.getParamByCerts = function (t, e, n) {
              null == n && (n = this.DEFAULT_HASH);
              var r = new c(t)
                , i = new c(e)
                , o = u(r.getSubjectHex(), n)
                , s = r.getPublicKeyHex();
              return {
                alg: n,
                issname: o,
                isskey: u(l(s, 0, [1], '03', !0), n),
                sbjsn: i.getSerialNumberHex()
              };
            }
            ,
            this.tohex = function () {
              if ('object' != typeof this.params)
                throw new Error('params not set');
              var t, e, n, a, u = this.params;
              if (a = null == u.alg ? this.DEFAULT_HASH : u.alg,
              null != u.issuerCert && null != u.subjectCert) {
                var c = this.getParamByCerts(u.issuerCert, u.subjectCert, a);
                t = c.issname,
                  e = c.isskey,
                  n = c.sbjsn;
              } else {
                if (null == u.issname || null == u.isskey || null == u.sbjsn)
                  throw new Error('required param members not defined');
                t = u.issname,
                  e = u.isskey,
                  n = u.sbjsn;
              }
              var l = new s({
                name: a
              })
                , h = new r({
                hex: t
              })
                , f = new r({
                hex: e
              })
                , p = new i({
                hex: n
              })
                , d = new o({
                array: [l, h, f, p]
              });
              return this.hTLV = d.tohex(),
                this.hTLV;
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          void 0 !== t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.ocsp.CertID, ut.asn1.ASN1Object),
        ut.asn1.ocsp.CertStatus = function (t) {
          ut.asn1.ocsp.CertStatus.superclass.constructor.call(this),
            this.params = null,
            this.tohex = function () {
              var t = this.params;
              if ('good' == t.status)
                return '8000';
              if ('unknown' == t.status)
                return '8200';
              if ('revoked' == t.status) {
                var e = [{
                  gentime: {
                    str: t.time
                  }
                }];
                null != t.reason && e.push({
                  tag: {
                    tag: 'a0',
                    explicit: !0,
                    obj: {
                      enum: {
                        int: t.reason
                      }
                    }
                  }
                });
                var n = {
                  tag: 'a1',
                  explicit: !1,
                  obj: {
                    seq: e
                  }
                };
                return ut.asn1.ASN1Util.newObject({
                  tag: n
                }).tohex();
              }
              throw new Error('bad status');
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
            this.setByParam = function (t) {
              this.params = t;
            }
            ,
          void 0 !== t && this.setByParam(t);
        }
        ,
        ne(ut.asn1.ocsp.CertStatus, ut.asn1.ASN1Object),
        ut.asn1.ocsp.Request = function (t) {
          var e = ut.asn1
            , n = e.DERSequence
            , r = e.ocsp;
          if (r.Request.superclass.constructor.call(this),
            this.dReqCert = null,
            this.dExt = null,
            this.tohex = function () {
              var t = [];
              if (null === this.dReqCert)
                throw 'reqCert not set';
              t.push(this.dReqCert);
              var e = new n({
                array: t
              });
              return this.hTLV = e.tohex(),
                this.hTLV;
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          void 0 !== t) {
            var i = new r.CertID(t);
            this.dReqCert = i;
          }
        }
        ,
        ne(ut.asn1.ocsp.Request, ut.asn1.ASN1Object),
        ut.asn1.ocsp.TBSRequest = function (t) {
          var e = ut.asn1
            , n = e.DERSequence
            , r = e.ocsp;
          r.TBSRequest.superclass.constructor.call(this),
            this.version = 0,
            this.dRequestorName = null,
            this.dRequestList = [],
            this.dRequestExt = null,
            this.setRequestListByParam = function (t) {
              for (var e = [], n = 0; n < t.length; n++) {
                var i = new r.Request(t[0]);
                e.push(i);
              }
              this.dRequestList = e;
            }
            ,
            this.tohex = function () {
              var t = [];
              if (0 !== this.version)
                throw 'not supported version: ' + this.version;
              if (null !== this.dRequestorName)
                throw 'requestorName not supported';
              var e = new n({
                array: this.dRequestList
              });
              if (t.push(e),
              null !== this.dRequestExt)
                throw 'requestExtensions not supported';
              var r = new n({
                array: t
              });
              return this.hTLV = r.tohex(),
                this.hTLV;
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          void 0 !== t && void 0 !== t.reqList && this.setRequestListByParam(t.reqList);
        }
        ,
        ne(ut.asn1.ocsp.TBSRequest, ut.asn1.ASN1Object),
        ut.asn1.ocsp.OCSPRequest = function (t) {
          var e = ut.asn1
            , n = e.DERSequence
            , r = e.ocsp;
          if (r.OCSPRequest.superclass.constructor.call(this),
            this.dTbsRequest = null,
            this.dOptionalSignature = null,
            this.tohex = function () {
              var t = [];
              if (null === this.dTbsRequest)
                throw 'tbsRequest not set';
              if (t.push(this.dTbsRequest),
              null !== this.dOptionalSignature)
                throw 'optionalSignature not supported';
              var e = new n({
                array: t
              });
              return this.hTLV = e.tohex(),
                this.hTLV;
            }
            ,
            this.getEncodedHex = function () {
              return this.tohex();
            }
            ,
          void 0 !== t && void 0 !== t.reqList) {
            var i = new r.TBSRequest(t);
            this.dTbsRequest = i;
          }
        }
        ,
        ne(ut.asn1.ocsp.OCSPRequest, ut.asn1.ASN1Object),
        ut.asn1.ocsp.OCSPUtil = {},
        ut.asn1.ocsp.OCSPUtil.getRequestHex = function (t, e, n) {
          var r = ut.asn1.ocsp;
          void 0 === n && (n = r.DEFAULT_HASH);
          var i = {
            alg: n,
            issuerCert: t,
            subjectCert: e
          };
          return new r.OCSPRequest({
            reqList: [i]
          }).tohex();
        }
        ,
        ut.asn1.ocsp.OCSPUtil.getOCSPResponseInfo = function (t) {
          var e = ht
            , n = e.getVbyList
            , r = e.getVbyListEx
            , i = e.getIdxbyList
            , o = (e.getIdxbyListEx,
            e.getV)
            , s = {};
          try {
            var a = r(t, 0, [0], '0a');
            s.responseStatus = parseInt(a, 16);
          } catch (t) {
          }
          if (0 !== s.responseStatus)
            return s;
          try {
            var u = i(t, 0, [1, 0, 1, 0, 0, 2, 0, 1]);
            '80' === t.substr(u, 2) ? s.certStatus = 'good' : 'a1' === t.substr(u, 2) ? (s.certStatus = 'revoked',
              s.revocationTime = wt(n(t, u, [0]))) : '82' === t.substr(u, 2) && (s.certStatus = 'unknown');
          } catch (t) {
          }
          try {
            var c = i(t, 0, [1, 0, 1, 0, 0, 2, 0, 2]);
            s.thisUpdate = wt(o(t, c));
          } catch (t) {
          }
          try {
            var l = i(t, 0, [1, 0, 1, 0, 0, 2, 0, 3]);
            'a0' === t.substr(l, 2) && (s.nextUpdate = wt(n(t, l, [0])));
          } catch (t) {
          }
          return s;
        }
        ,
        ut.asn1.ocsp.OCSPParser = function () {
          var t = Error
            , e = ae
            , n = new e
            , r = ht
            , i = r.getV
            , o = r.getTLV
            , s = r.getIdxbyList
            , a = r.getVbyList
            , u = r.getTLVbyList
            , c = r.getVbyListEx
            , l = r.getTLVbyListEx
            , h = r.getChildIdx;
          this.getOCSPRequest = function (e) {
            var n = h(e, 0);
            if (1 != n.length && 2 != n.length)
              throw new t('wrong number elements: ' + n.length);
            return this.getTBSRequest(o(e, n[0]));
          }
            ,
            this.getTBSRequest = function (t) {
              var e = {}
                , r = l(t, 0, [0], '30');
              e.array = this.getRequestList(r);
              var i = l(t, 0, ['[2]', 0], '30');
              return null != i && (e.ext = n.getExtParamArray(i)),
                e;
            }
            ,
            this.getRequestList = function (t) {
              for (var e = [], n = h(t, 0), r = 0; r < n.length; r++) {
                t = o(t, n[r]);
                e.push(this.getRequest(t));
              }
              return e;
            }
            ,
            this.getRequest = function (e) {
              var r = h(e, 0);
              if (1 != r.length && 2 != r.length)
                throw new t('wrong number elements: ' + r.length);
              var i = this.getCertID(o(e, r[0]));
              if (2 == r.length) {
                var a = s(e, 0, [1, 0]);
                i.ext = n.getExtParamArray(o(e, a));
              }
              return i;
            }
            ,
            this.getCertID = function (n) {
              var r = h(n, 0);
              if (4 != r.length)
                throw new t('wrong number elements: ' + r.length);
              var s = new e
                , a = {};
              return a.alg = s.getAlgorithmIdentifierName(o(n, r[0])),
                a.issname = i(n, r[1]),
                a.isskey = i(n, r[2]),
                a.sbjsn = i(n, r[3]),
                a;
            }
            ,
            this.getOCSPResponse = function (t) {
              var e, n = h(t, 0), r = i(t, n[0]), o = parseInt(r);
              if (1 == n.length)
                return {
                  resstatus: o
                };
              var s = u(t, 0, [1, 0]);
              return (e = this.getResponseBytes(s)).resstatus = o,
                e;
            }
            ,
            this.getResponseBytes = function (t) {
              var e, n = h(t, 0), r = u(t, 0, [1, 0]);
              e = this.getBasicOCSPResponse(r);
              var o = i(t, n[0]);
              return e.restype = ut.asn1.x509.OID.oid2name(zt(o)),
                e;
            }
            ,
            this.getBasicOCSPResponse = function (t) {
              var e, n = h(t, 0);
              e = this.getResponseData(o(t, n[0]));
              var r = new ae;
              e.alg = r.getAlgorithmIdentifierName(o(t, n[1]));
              var s = i(t, n[2]);
              e.sighex = s.substr(2);
              var a = c(t, 0, ['[0]']);
              if (null != a) {
                for (var u = h(a, 0), l = [], f = 0; f < u.length; f++) {
                  var p = o(a, u[f]);
                  l.push(p);
                }
                e.certs = l;
              }
              return e;
            }
            ,
            this.getResponseData = function (t) {
              var e = h(t, 0)
                , n = e.length
                , r = {}
                , s = 0;
              'a0' == t.substr(e[0], 2) && s++,
                r.respid = this.getResponderID(o(t, e[s++]));
              var a = i(t, e[s++]);
              if (r.prodat = wt(a),
                r.array = this.getSingleResponseList(o(t, e[s++])),
              'a1' == t.substr(e[n - 1], 2)) {
                var c = u(t, e[n - 1], [0])
                  , l = new ae;
                r.ext = l.getExtParamArray(c);
              }
              return r;
            }
            ,
            this.getResponderID = function (t) {
              var e = {};
              if ('a2' == t.substr(0, 2)) {
                var n = a(t, 0, [0]);
                e.key = n;
              }
              if ('a1' == t.substr(0, 2)) {
                var r = u(t, 0, [0])
                  , i = new ae;
                e.name = i.getX500Name(r);
              }
              return e;
            }
            ,
            this.getSingleResponseList = function (t) {
              for (var e = h(t, 0), n = [], r = 0; r < e.length; r++) {
                var i = this.getSingleResponse(o(t, e[r]));
                n.push(i);
              }
              return n;
            }
            ,
            this.getSingleResponse = function (t) {
              var e = h(t, 0)
                , n = {}
                , r = this.getCertID(o(t, e[0]));
              n.certid = r;
              var s = this.getCertStatus(o(t, e[1]));
              if (n.status = s,
              '18' == t.substr(e[2], 2)) {
                var c = i(t, e[2]);
                n.thisupdate = wt(c);
              }
              for (var l = 3; l < e.length; l++) {
                if ('a0' == t.substr(e[l], 2)) {
                  var f = a(t, e[l], [0], '18');
                  n.nextupdate = wt(f);
                }
                if ('a1' == t.substr(e[l], 2)) {
                  var p = new ae
                    , d = u(t, 0, [l, 0]);
                  n.ext = p.getExtParamArray(d);
                }
              }
              return n;
            }
            ,
            this.getCertStatus = function (t) {
              var e = {};
              if ('8000' == t)
                return {
                  status: 'good'
                };
              if ('8200' == t)
                return {
                  status: 'unknown'
                };
              if ('a1' == t.substr(0, 2)) {
                e.status = 'revoked';
                var n = wt(a(t, 0, [0]));
                e.time = n;
              }
              return e;
            };
        }
        ,
        void 0 !== ut && ut || (ut = {}),
        void 0 !== ut.lang && ut.lang || (ut.lang = {}),
        ut.lang.String = function () {
        }
        ,
        'function' == typeof t ? (ct = function (e) {
            return vt(t.from(e, 'utf8').toString('base64'));
          }
            ,
            lt = function (e) {
              return t.from(mt(e), 'base64').toString('utf8');
            }
        ) : (ct = function (t) {
            return yt(Nt($t(t)));
          }
            ,
            lt = function (t) {
              return decodeURIComponent(Ot(bt(t)));
            }
        ),
        ut.lang.String.isInteger = function (t) {
          return !!t.match(/^[0-9]+$/) || !!t.match(/^-[0-9]+$/);
        }
        ,
        ut.lang.String.isHex = function (t) {
          return Vt(t);
        }
        ,
        ut.lang.String.isBase64 = function (t) {
          return !(!(t = t.replace(/\s+/g, '')).match(/^[0-9A-Za-z+\/]+={0,3}$/) || t.length % 4 != 0);
        }
        ,
        ut.lang.String.isBase64URL = function (t) {
          return !t.match(/[+/=]/) && (t = mt(t),
            ut.lang.String.isBase64(t));
        }
        ,
        ut.lang.String.isIntegerArray = function (t) {
          return !!(t = t.replace(/\s+/g, '')).match(/^\[[0-9,]+\]$/);
        }
        ,
        ut.lang.String.isPrintable = function (t) {
          return null !== t.match(/^[0-9A-Za-z '()+,-./:=?]*$/);
        }
        ,
        ut.lang.String.isIA5 = function (t) {
          return null !== t.match(/^[\x20-\x21\x23-\x7f]*$/);
        }
        ,
        ut.lang.String.isMail = function (t) {
          return null !== t.match(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/);
        }
        ;

        function Gt(t) {
          var e = function (t) {
            var e = t.toString(16);
            return 1 == e.length && (e = '0' + e),
              e;
          }
            , n = function (t) {
            var n = ''
              , r = parseInt(t, 10).toString(2)
              , i = 7 - r.length % 7;
            7 == i && (i = 0);
            for (var o = '', s = 0; s < i; s++)
              o += '0';
            r = o + r;
            for (s = 0; s < r.length - 1; s += 7) {
              var a = r.substr(s, 7);
              s != r.length - 7 && (a = '1' + a),
                n += e(parseInt(a, 2));
            }
            return n;
          };
          try {
            if (!t.match(/^[0-9.]+$/))
              return null;
            var r = ''
              , i = t.split('.')
              , o = 40 * parseInt(i[0], 10) + parseInt(i[1], 10);
            r += e(o),
              i.splice(0, 2);
            for (var s = 0; s < i.length; s++)
              r += n(i[s]);
            return r;
          } catch (t) {
            return null;
          }
        }

        function zt(t) {
          if (!Vt(t))
            return null;
          try {
            var e = []
              , n = t.substr(0, 2)
              , r = parseInt(n, 16);
            e[0] = new String(Math.floor(r / 40)),
              e[1] = new String(r % 40);
            for (var i = t.substr(2), o = [], s = 0; s < i.length / 2; s++)
              o.push(parseInt(i.substr(2 * s, 2), 16));
            var a = []
              , u = '';
            for (s = 0; s < o.length; s++)
              128 & o[s] ? u += Xt((127 & o[s]).toString(2), 7) : (u += Xt((127 & o[s]).toString(2), 7),
                a.push(new String(parseInt(u, 2))),
                u = '');
            var c = e.join('.');
            return a.length > 0 && (c = c + '.' + a.join('.')),
              c;
          } catch (t) {
            return null;
          }
        }

        function Wt(t) {
          return Yt(new w(String(t), 10));
        }

        function Yt(t) {
          var e = t.toString(16);
          if ('-' != e.substr(0, 1))
            return e.length % 2 == 1 ? e = '0' + e : e.match(/^[0-7]/) || (e = '00' + e),
              e;
          var n = e.substr(1).length;
          n % 2 == 1 ? n += 1 : e.match(/^[0-7]/) || (n += 2);
          for (var r = '', i = 0; i < n; i++)
            r += 'f';
          return e = new w(r, 16).xor(t).add(w.ONE).toString(16).replace(/^-/, '');
        }

        var Xt = function (t, e, n) {
          return null == n && (n = '0'),
            t.length >= e ? t : new Array(e - t.length + 1).join(n) + t;
        };

        function Jt(t) {
          if (t.length % 2 != 0)
            return -1;
          if (null == (t = t.toLowerCase()).match(/^[0-9a-f]+$/))
            return -1;
          try {
            var e = t.substr(0, 2);
            if ('00' == e)
              return parseInt(t.substr(2), 16);
            var n = parseInt(e, 16);
            if (n > 7)
              return -1;
            var r = t.substr(2)
              , i = parseInt(r, 16).toString(2);
            '0' == i && (i = '00000000'),
              i = i.slice(0, 0 - n);
            var o = parseInt(i, 2);
            return NaN == o ? -1 : o;
          } catch (t) {
            return -1;
          }
        }

        function Qt(t) {
          if ('number' != typeof t)
            return null;
          if (t < 0)
            return null;
          var e = Number(t).toString(2)
            , n = 8 - e.length % 8;
          8 == n && (n = 0),
            e += Xt('', n, '0');
          var r = parseInt(e, 2).toString(16);
          return r.length % 2 == 1 && (r = '0' + r),
          '0' + n + r;
        }

        function Zt(t) {
          if ('string' != typeof t)
            return null;
          if (t.length % 2 != 0)
            return null;
          if (!t.match(/^[0-9a-f]+$/))
            return null;
          try {
            var e = parseInt(t.substr(0, 2), 16);
            if (e < 0 || 7 < e)
              return null;
            for (var n = t.substr(2), r = '', i = 0; i < n.length; i += 2) {
              var o = n.substr(i, 2)
                , s = parseInt(o, 16).toString(2);
              r += s = ('0000000' + s).slice(-8);
            }
            return r.substr(0, r.length - e);
          } catch (t) {
            return null;
          }
        }

        function te(t, e) {
          for (var n = 0, r = 0; r < t.length; r++)
            n |= 1 << e[t[r]];
          var i = n.toString(2)
            , o = '';
          for (r = i.length - 1; r >= 0; r--)
            o += i[r];
          return o;
        }

        function ee(t, e, n) {
          if ('object' == typeof t) {
            e = String(e).split('.');
            for (var r = 0; r < e.length && t; r++) {
              var i = e[r];
              i.match(/^[0-9]+$/) && (i = parseInt(i)),
                t = t[i];
            }
            return t || !1 === t ? t : n;
          }
        }

        function ne(t, e) {
          var n = function () {
          };
          n.prototype = e.prototype,
            t.prototype = new n,
            t.prototype.constructor = t,
            t.superclass = e.prototype,
          e.prototype.constructor == Object.prototype.constructor && (e.prototype.constructor = e);
        }

        void 0 !== ut && ut || (ut = {}),
        void 0 !== ut.crypto && ut.crypto || (ut.crypto = {}),
          ut.crypto.Util = new function () {
            this.DIGESTINFOHEAD = {
              sha1: '3021300906052b0e03021a05000414',
              sha224: '302d300d06096086480165030402040500041c',
              sha256: '3031300d060960864801650304020105000420',
              sha384: '3041300d060960864801650304020205000430',
              sha512: '3051300d060960864801650304020305000440',
              md2: '3020300c06082a864886f70d020205000410',
              md5: '3020300c06082a864886f70d020505000410',
              ripemd160: '3021300906052b2403020105000414'
            },
              this.DEFAULTPROVIDER = {
                md5: 'cryptojs',
                sha1: 'cryptojs',
                sha224: 'cryptojs',
                sha256: 'cryptojs',
                sha384: 'cryptojs',
                sha512: 'cryptojs',
                ripemd160: 'cryptojs',
                hmacmd5: 'cryptojs',
                hmacsha1: 'cryptojs',
                hmacsha224: 'cryptojs',
                hmacsha256: 'cryptojs',
                hmacsha384: 'cryptojs',
                hmacsha512: 'cryptojs',
                hmacripemd160: 'cryptojs',
                MD5withRSA: 'cryptojs/jsrsa',
                SHA1withRSA: 'cryptojs/jsrsa',
                SHA224withRSA: 'cryptojs/jsrsa',
                SHA256withRSA: 'cryptojs/jsrsa',
                SHA384withRSA: 'cryptojs/jsrsa',
                SHA512withRSA: 'cryptojs/jsrsa',
                RIPEMD160withRSA: 'cryptojs/jsrsa',
                MD5withECDSA: 'cryptojs/jsrsa',
                SHA1withECDSA: 'cryptojs/jsrsa',
                SHA224withECDSA: 'cryptojs/jsrsa',
                SHA256withECDSA: 'cryptojs/jsrsa',
                SHA384withECDSA: 'cryptojs/jsrsa',
                SHA512withECDSA: 'cryptojs/jsrsa',
                RIPEMD160withECDSA: 'cryptojs/jsrsa',
                SHA1withDSA: 'cryptojs/jsrsa',
                SHA224withDSA: 'cryptojs/jsrsa',
                SHA256withDSA: 'cryptojs/jsrsa',
                MD5withRSAandMGF1: 'cryptojs/jsrsa',
                SHAwithRSAandMGF1: 'cryptojs/jsrsa',
                SHA1withRSAandMGF1: 'cryptojs/jsrsa',
                SHA224withRSAandMGF1: 'cryptojs/jsrsa',
                SHA256withRSAandMGF1: 'cryptojs/jsrsa',
                SHA384withRSAandMGF1: 'cryptojs/jsrsa',
                SHA512withRSAandMGF1: 'cryptojs/jsrsa',
                RIPEMD160withRSAandMGF1: 'cryptojs/jsrsa'
              },
              this.CRYPTOJSMESSAGEDIGESTNAME = {
                md5: g.algo.MD5,
                sha1: g.algo.SHA1,
                sha224: g.algo.SHA224,
                sha256: g.algo.SHA256,
                sha384: g.algo.SHA384,
                sha512: g.algo.SHA512,
                ripemd160: g.algo.RIPEMD160
              },
              this.getDigestInfoHex = function (t, e) {
                if (void 0 === this.DIGESTINFOHEAD[e])
                  throw 'alg not supported in Util.DIGESTINFOHEAD: ' + e;
                return this.DIGESTINFOHEAD[e] + t;
              }
              ,
              this.getPaddedDigestInfoHex = function (t, e, n) {
                var r = this.getDigestInfoHex(t, e)
                  , i = n / 4;
                if (r.length + 22 > i)
                  throw 'key is too short for SigAlg: keylen=' + n + ',' + e;
                for (var o = '0001', s = '00' + r, a = '', u = i - o.length - s.length, c = 0; c < u; c += 2)
                  a += 'ff';
                return o + a + s;
              }
              ,
              this.hashString = function (t, e) {
                return new ut.crypto.MessageDigest({
                  alg: e
                }).digestString(t);
              }
              ,
              this.hashHex = function (t, e) {
                return new ut.crypto.MessageDigest({
                  alg: e
                }).digestHex(t);
              }
              ,
              this.sha1 = function (t) {
                return this.hashString(t, 'sha1');
              }
              ,
              this.sha256 = function (t) {
                return this.hashString(t, 'sha256');
              }
              ,
              this.sha256Hex = function (t) {
                return this.hashHex(t, 'sha256');
              }
              ,
              this.sha512 = function (t) {
                return this.hashString(t, 'sha512');
              }
              ,
              this.sha512Hex = function (t) {
                return this.hashHex(t, 'sha512');
              }
              ,
              this.isKey = function (t) {
                return t instanceof nt || t instanceof ut.crypto.DSA || t instanceof ut.crypto.ECDSA;
              };
          }
          ,
          ut.crypto.Util.md5 = function (t) {
            return new ut.crypto.MessageDigest({
              alg: 'md5',
              prov: 'cryptojs'
            }).digestString(t);
          }
          ,
          ut.crypto.Util.ripemd160 = function (t) {
            return new ut.crypto.MessageDigest({
              alg: 'ripemd160',
              prov: 'cryptojs'
            }).digestString(t);
          }
          ,
          ut.crypto.Util.SECURERANDOMGEN = new Z,
          ut.crypto.Util.getRandomHexOfNbytes = function (t) {
            var e = new Array(t);
            return ut.crypto.Util.SECURERANDOMGEN.nextBytes(e),
              dt(e);
          }
          ,
          ut.crypto.Util.getRandomBigIntegerOfNbytes = function (t) {
            return new w(ut.crypto.Util.getRandomHexOfNbytes(t), 16);
          }
          ,
          ut.crypto.Util.getRandomHexOfNbits = function (t) {
            var e = t % 8
              , n = new Array((t - e) / 8 + 1);
            return ut.crypto.Util.SECURERANDOMGEN.nextBytes(n),
              n[0] = (255 << e & 255 ^ 255) & n[0],
              dt(n);
          }
          ,
          ut.crypto.Util.getRandomBigIntegerOfNbits = function (t) {
            return new w(ut.crypto.Util.getRandomHexOfNbits(t), 16);
          }
          ,
          ut.crypto.Util.getRandomBigIntegerZeroToMax = function (t) {
            for (var e = t.bitLength(); ;) {
              var n = ut.crypto.Util.getRandomBigIntegerOfNbits(e);
              if (-1 != t.compareTo(n))
                return n;
            }
          }
          ,
          ut.crypto.Util.getRandomBigIntegerMinToMax = function (t, e) {
            var n = t.compareTo(e);
            if (1 == n)
              throw 'biMin is greater than biMax';
            if (0 == n)
              return t;
            var r = e.subtract(t);
            return ut.crypto.Util.getRandomBigIntegerZeroToMax(r).add(t);
          }
          ,
          ut.crypto.MessageDigest = function (t) {
            this.setAlgAndProvider = function (t, e) {
              if (null !== (t = ut.crypto.MessageDigest.getCanonicalAlgName(t)) && void 0 === e && (e = ut.crypto.Util.DEFAULTPROVIDER[t]),
              -1 != ':md5:sha1:sha224:sha256:sha384:sha512:ripemd160:'.indexOf(t) && 'cryptojs' == e) {
                try {
                  this.md = ut.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[t].create();
                } catch (e) {
                  throw 'setAlgAndProvider hash alg set fail alg=' + t + '/' + e;
                }
                this.updateString = function (t) {
                  this.md.update(t);
                }
                  ,
                  this.updateHex = function (t) {
                    var e = g.enc.Hex.parse(t);
                    this.md.update(e);
                  }
                  ,
                  this.digest = function () {
                    return this.md.finalize().toString(g.enc.Hex);
                  }
                  ,
                  this.digestString = function (t) {
                    return this.updateString(t),
                      this.digest();
                  }
                  ,
                  this.digestHex = function (t) {
                    return this.updateHex(t),
                      this.digest();
                  };
              }
              if (-1 != ':sha256:'.indexOf(t) && 'sjcl' == e) {
                try {
                  this.md = new sjcl.hash.sha256;
                } catch (e) {
                  throw 'setAlgAndProvider hash alg set fail alg=' + t + '/' + e;
                }
                this.updateString = function (t) {
                  this.md.update(t);
                }
                  ,
                  this.updateHex = function (t) {
                    var e = sjcl.codec.hex.toBits(t);
                    this.md.update(e);
                  }
                  ,
                  this.digest = function () {
                    var t = this.md.finalize();
                    return sjcl.codec.hex.fromBits(t);
                  }
                  ,
                  this.digestString = function (t) {
                    return this.updateString(t),
                      this.digest();
                  }
                  ,
                  this.digestHex = function (t) {
                    return this.updateHex(t),
                      this.digest();
                  };
              }
            }
              ,
              this.updateString = function (t) {
                throw 'updateString(str) not supported for this alg/prov: ' + this.algName + '/' + this.provName;
              }
              ,
              this.updateHex = function (t) {
                throw 'updateHex(hex) not supported for this alg/prov: ' + this.algName + '/' + this.provName;
              }
              ,
              this.digest = function () {
                throw 'digest() not supported for this alg/prov: ' + this.algName + '/' + this.provName;
              }
              ,
              this.digestString = function (t) {
                throw 'digestString(str) not supported for this alg/prov: ' + this.algName + '/' + this.provName;
              }
              ,
              this.digestHex = function (t) {
                throw 'digestHex(hex) not supported for this alg/prov: ' + this.algName + '/' + this.provName;
              }
              ,
            void 0 !== t && void 0 !== t.alg && (this.algName = t.alg,
            void 0 === t.prov && (this.provName = ut.crypto.Util.DEFAULTPROVIDER[this.algName]),
              this.setAlgAndProvider(this.algName, this.provName));
          }
          ,
          ut.crypto.MessageDigest.getCanonicalAlgName = function (t) {
            return 'string' == typeof t && (t = (t = t.toLowerCase()).replace(/-/, '')),
              t;
          }
          ,
          ut.crypto.MessageDigest.getHashLength = function (t) {
            var e = ut.crypto.MessageDigest
              , n = e.getCanonicalAlgName(t);
            if (void 0 === e.HASHLENGTH[n])
              throw 'not supported algorithm: ' + t;
            return e.HASHLENGTH[n];
          }
          ,
          ut.crypto.MessageDigest.HASHLENGTH = {
            md5: 16,
            sha1: 20,
            sha224: 28,
            sha256: 32,
            sha384: 48,
            sha512: 64,
            ripemd160: 20
          },
          ut.crypto.Mac = function (t) {
            this.setAlgAndProvider = function (t, e) {
              if (null == (t = t.toLowerCase()) && (t = 'hmacsha1'),
              'hmac' != (t = t.toLowerCase()).substr(0, 4))
                throw 'setAlgAndProvider unsupported HMAC alg: ' + t;
              void 0 === e && (e = ut.crypto.Util.DEFAULTPROVIDER[t]),
                this.algProv = t + '/' + e;
              var n = t.substr(4);
              if (-1 != ':md5:sha1:sha224:sha256:sha384:sha512:ripemd160:'.indexOf(n) && 'cryptojs' == e) {
                try {
                  var r = ut.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[n];
                  this.mac = g.algo.HMAC.create(r, this.pass);
                } catch (t) {
                  throw 'setAlgAndProvider hash alg set fail hashAlg=' + n + '/' + t;
                }
                this.updateString = function (t) {
                  this.mac.update(t);
                }
                  ,
                  this.updateHex = function (t) {
                    var e = g.enc.Hex.parse(t);
                    this.mac.update(e);
                  }
                  ,
                  this.doFinal = function () {
                    return this.mac.finalize().toString(g.enc.Hex);
                  }
                  ,
                  this.doFinalString = function (t) {
                    return this.updateString(t),
                      this.doFinal();
                  }
                  ,
                  this.doFinalHex = function (t) {
                    return this.updateHex(t),
                      this.doFinal();
                  };
              }
            }
              ,
              this.updateString = function (t) {
                throw 'updateString(str) not supported for this alg/prov: ' + this.algProv;
              }
              ,
              this.updateHex = function (t) {
                throw 'updateHex(hex) not supported for this alg/prov: ' + this.algProv;
              }
              ,
              this.doFinal = function () {
                throw 'digest() not supported for this alg/prov: ' + this.algProv;
              }
              ,
              this.doFinalString = function (t) {
                throw 'digestString(str) not supported for this alg/prov: ' + this.algProv;
              }
              ,
              this.doFinalHex = function (t) {
                throw 'digestHex(hex) not supported for this alg/prov: ' + this.algProv;
              }
              ,
              this.setPassword = function (t) {
                if ('string' == typeof t) {
                  var e = t;
                  return t.length % 2 != 1 && t.match(/^[0-9A-Fa-f]+$/) || (e = At(t)),
                    void (this.pass = g.enc.Hex.parse(e));
                }
                if ('object' != typeof t)
                  throw 'KJUR.crypto.Mac unsupported password type: ' + t;
                e = null;
                if (void 0 !== t.hex) {
                  if (t.hex.length % 2 != 0 || !t.hex.match(/^[0-9A-Fa-f]+$/))
                    throw 'Mac: wrong hex password: ' + t.hex;
                  e = t.hex;
                }
                if (void 0 !== t.utf8 && (e = xt(t.utf8)),
                void 0 !== t.rstr && (e = At(t.rstr)),
                void 0 !== t.b64 && (e = b(t.b64)),
                void 0 !== t.b64u && (e = bt(t.b64u)),
                null == e)
                  throw 'KJUR.crypto.Mac unsupported password type: ' + t;
                this.pass = g.enc.Hex.parse(e);
              }
              ,
            void 0 !== t && (void 0 !== t.pass && this.setPassword(t.pass),
            void 0 !== t.alg && (this.algName = t.alg,
            void 0 === t.prov && (this.provName = ut.crypto.Util.DEFAULTPROVIDER[this.algName]),
              this.setAlgAndProvider(this.algName, this.provName)));
          }
          ,
          ut.crypto.Signature = function (t) {
            var e = null;
            if (this._setAlgNames = function () {
              var t = this.algName.match(/^(.+)with(.+)$/);
              t && (this.mdAlgName = t[1].toLowerCase(),
                this.pubkeyAlgName = t[2].toLowerCase(),
              'rsaandmgf1' == this.pubkeyAlgName && 'sha' == this.mdAlgName && (this.mdAlgName = 'sha1'));
            }
              ,
              this._zeroPaddingOfSignature = function (t, e) {
                for (var n = '', r = e / 4 - t.length, i = 0; i < r; i++)
                  n += '0';
                return n + t;
              }
              ,
              this.setAlgAndProvider = function (t, e) {
                if (this._setAlgNames(),
                'cryptojs/jsrsa' != e)
                  throw new Error('provider not supported: ' + e);
                if (-1 != ':md5:sha1:sha224:sha256:sha384:sha512:ripemd160:'.indexOf(this.mdAlgName)) {
                  try {
                    this.md = new ut.crypto.MessageDigest({
                      alg: this.mdAlgName
                    });
                  } catch (t) {
                    throw new Error('setAlgAndProvider hash alg set fail alg=' + this.mdAlgName + '/' + t);
                  }
                  this.init = function (t, e) {
                    var n = null;
                    try {
                      n = void 0 === e ? re.getKey(t) : re.getKey(t, e);
                    } catch (t) {
                      throw 'init failed:' + t;
                    }
                    if (!0 === n.isPrivate)
                      this.prvKey = n,
                        this.state = 'SIGN';
                    else {
                      if (!0 !== n.isPublic)
                        throw 'init failed.:' + n;
                      this.pubKey = n,
                        this.state = 'VERIFY';
                    }
                  }
                    ,
                    this.updateString = function (t) {
                      this.md.updateString(t);
                    }
                    ,
                    this.updateHex = function (t) {
                      this.md.updateHex(t);
                    }
                    ,
                    this.sign = function () {
                      if (this.sHashHex = this.md.digest(),
                      void 0 === this.prvKey && void 0 !== this.ecprvhex && void 0 !== this.eccurvename && void 0 !== ut.crypto.ECDSA && (this.prvKey = new ut.crypto.ECDSA({
                        curve: this.eccurvename,
                        prv: this.ecprvhex
                      })),
                      this.prvKey instanceof nt && 'rsaandmgf1' === this.pubkeyAlgName)
                        this.hSign = this.prvKey.signWithMessageHashPSS(this.sHashHex, this.mdAlgName, this.pssSaltLen);
                      else if (this.prvKey instanceof nt && 'rsa' === this.pubkeyAlgName)
                        this.hSign = this.prvKey.signWithMessageHash(this.sHashHex, this.mdAlgName);
                      else if (this.prvKey instanceof ut.crypto.ECDSA)
                        this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);
                      else {
                        if (!(this.prvKey instanceof ut.crypto.DSA))
                          throw 'Signature: unsupported private key alg: ' + this.pubkeyAlgName;
                        this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);
                      }
                      return this.hSign;
                    }
                    ,
                    this.signString = function (t) {
                      return this.updateString(t),
                        this.sign();
                    }
                    ,
                    this.signHex = function (t) {
                      return this.updateHex(t),
                        this.sign();
                    }
                    ,
                    this.verify = function (t) {
                      if (this.sHashHex = this.md.digest(),
                      void 0 === this.pubKey && void 0 !== this.ecpubhex && void 0 !== this.eccurvename && void 0 !== ut.crypto.ECDSA && (this.pubKey = new ut.crypto.ECDSA({
                        curve: this.eccurvename,
                        pub: this.ecpubhex
                      })),
                      this.pubKey instanceof nt && 'rsaandmgf1' === this.pubkeyAlgName)
                        return this.pubKey.verifyWithMessageHashPSS(this.sHashHex, t, this.mdAlgName, this.pssSaltLen);
                      if (this.pubKey instanceof nt && 'rsa' === this.pubkeyAlgName)
                        return this.pubKey.verifyWithMessageHash(this.sHashHex, t);
                      if (void 0 !== ut.crypto.ECDSA && this.pubKey instanceof ut.crypto.ECDSA)
                        return this.pubKey.verifyWithMessageHash(this.sHashHex, t);
                      if (void 0 !== ut.crypto.DSA && this.pubKey instanceof ut.crypto.DSA)
                        return this.pubKey.verifyWithMessageHash(this.sHashHex, t);
                      throw 'Signature: unsupported public key alg: ' + this.pubkeyAlgName;
                    };
                }
              }
              ,
              this.init = function (t, e) {
                throw 'init(key, pass) not supported for this alg:prov=' + this.algProvName;
              }
              ,
              this.updateString = function (t) {
                throw 'updateString(str) not supported for this alg:prov=' + this.algProvName;
              }
              ,
              this.updateHex = function (t) {
                throw 'updateHex(hex) not supported for this alg:prov=' + this.algProvName;
              }
              ,
              this.sign = function () {
                throw 'sign() not supported for this alg:prov=' + this.algProvName;
              }
              ,
              this.signString = function (t) {
                throw 'digestString(str) not supported for this alg:prov=' + this.algProvName;
              }
              ,
              this.signHex = function (t) {
                throw 'digestHex(hex) not supported for this alg:prov=' + this.algProvName;
              }
              ,
              this.verify = function (t) {
                throw 'verify(hSigVal) not supported for this alg:prov=' + this.algProvName;
              }
              ,
              this.initParams = t,
            void 0 !== t && (void 0 !== t.alg && (this.algName = t.alg,
              void 0 === t.prov ? this.provName = ut.crypto.Util.DEFAULTPROVIDER[this.algName] : this.provName = t.prov,
              this.algProvName = this.algName + ':' + this.provName,
              this.setAlgAndProvider(this.algName, this.provName),
              this._setAlgNames()),
            void 0 !== t.psssaltlen && (this.pssSaltLen = t.psssaltlen),
            void 0 !== t.prvkeypem)) {
              if (void 0 !== t.prvkeypas)
                throw 'both prvkeypem and prvkeypas parameters not supported';
              try {
                e = re.getKey(t.prvkeypem);
                this.init(e);
              } catch (t) {
                throw 'fatal error to load pem private key: ' + t;
              }
            }
          }
          ,
          ut.crypto.Cipher = function (t) {
          }
          ,
          ut.crypto.Cipher.encrypt = function (t, e, n, r) {
            if (null != ee(r, 'enclag') && (n = r.encalg),
            'string' == typeof n && '-CBC' == n.substr(-4)) {
              var i = e
                , o = t;
              null != ee(r, 'key') && (i = r.key),
              null != ee(r, 'enc') && (hEnc = r.enc);
              var s, a = g.enc.Hex.parse(i), u = g.enc.Hex.parse(o), c = g.enc.Hex.parse(r.iv);
              if ('des-EDE3-CBC' == n)
                s = g.TripleDES.encrypt(u, a, {
                  iv: c
                });
              else {
                if ('aes128-CBC' != n && 'aes256-CBC' != n)
                  throw new Error('unsupported algorithm: ' + n);
                s = g.AES.encrypt(u, a, {
                  iv: c
                });
              }
              return s + '';
            }
            if (e instanceof nt && e.isPublic) {
              var l = ut.crypto.Cipher.getAlgByKeyAndName(e, n);
              if ('RSA' === l)
                return e.encrypt(t);
              if ('RSAOAEP' === l)
                return e.encryptOAEP(t, 'sha1');
              var h = l.match(/^RSAOAEP(\d+)$/);
              if (null !== h)
                return e.encryptOAEP(t, 'sha' + h[1]);
              throw 'Cipher.encrypt: unsupported algorithm for RSAKey: ' + n;
            }
            throw 'Cipher.encrypt: unsupported key or algorithm';
          }
          ,
          ut.crypto.Cipher.decrypt = function (t, e, n, r) {
            if (null != ee(r, 'enclag') && (n = r.encalg),
            'string' == typeof n && '-CBC' == n.substr(-4)) {
              var i = e
                , o = t;
              null != ee(r, 'key') && (i = r.key),
              null != ee(r, 'enc') && (o = r.enc);
              var s, a = g.enc.Hex.parse(i), u = g.enc.Hex.parse(o), c = g.enc.Hex.parse(r.iv);
              if ('des-EDE3-CBC' == n)
                s = g.TripleDES.decrypt({
                  ciphertext: u
                }, a, {
                  iv: c
                });
              else {
                if ('aes128-CBC' != n && 'aes256-CBC' != n)
                  throw new Error('unsupported algorithm: ' + n);
                s = g.AES.decrypt({
                  ciphertext: u
                }, a, {
                  iv: c
                });
              }
              return g.enc.Hex.stringify(s);
            }
            if (e instanceof nt && e.isPrivate) {
              var l = ut.crypto.Cipher.getAlgByKeyAndName(e, n);
              if ('RSA' === l)
                return e.decrypt(t);
              if ('RSAOAEP' === l)
                return e.decryptOAEP(t, 'sha1');
              var h = l.match(/^RSAOAEP(\d+)$/);
              if (null !== h)
                return e.decryptOAEP(t, 'sha' + h[1]);
              throw 'Cipher.decrypt: unsupported algorithm for RSAKey: ' + n;
            }
            throw 'Cipher.decrypt: unsupported key or algorithm';
          }
          ,
          ut.crypto.Cipher.getAlgByKeyAndName = function (t, e) {
            if (t instanceof nt) {
              if (-1 != ':RSA:RSAOAEP:RSAOAEP224:RSAOAEP256:RSAOAEP384:RSAOAEP512:'.indexOf(e))
                return e;
              if (null == e)
                return 'RSA';
              throw 'getAlgByKeyAndName: not supported algorithm name for RSAKey: ' + e;
            }
            throw 'getAlgByKeyAndName: not supported algorithm name: ' + e;
          }
          ,
          ut.crypto.OID = new function () {
            this.oidhex2name = {
              '2a864886f70d010101': 'rsaEncryption',
              '2a8648ce3d0201': 'ecPublicKey',
              '2a8648ce380401': 'dsa',
              '2a8648ce3d030107': 'secp256r1',
              '2b8104001f': 'secp192k1',
              '2b81040021': 'secp224r1',
              '2b8104000a': 'secp256k1',
              '2b81040022': 'secp384r1',
              '2b81040023': 'secp521r1',
              '2a8648ce380403': 'SHA1withDSA',
              '608648016503040301': 'SHA224withDSA',
              '608648016503040302': 'SHA256withDSA'
            };
          }
          ,
        void 0 !== ut && ut || (ut = {}),
        void 0 !== ut.crypto && ut.crypto || (ut.crypto = {}),
          ut.crypto.ECDSA = function (t) {
            var e = Error
              , n = w
              , r = ot
              , i = ut.crypto.ECDSA
              , o = ut.crypto.ECParameterDB
              , s = i.getName
              , a = ht
              , u = a.getVbyListEx
              , c = a.isASN1HEX
              , l = new Z;
            this.type = 'EC',
              this.isPrivate = !1,
              this.isPublic = !1,
              this.getBigRandom = function (t) {
                return new n(t.bitLength(), l).mod(t.subtract(n.ONE)).add(n.ONE);
              }
              ,
              this.setNamedCurve = function (t) {
                this.ecparams = o.getByName(t),
                  this.prvKeyHex = null,
                  this.pubKeyHex = null,
                  this.curveName = t;
              }
              ,
              this.setPrivateKeyHex = function (t) {
                this.isPrivate = !0,
                  this.prvKeyHex = t;
              }
              ,
              this.setPublicKeyHex = function (t) {
                this.isPublic = !0,
                  this.pubKeyHex = t;
              }
              ,
              this.getPublicKeyXYHex = function () {
                var t = this.pubKeyHex;
                if ('04' !== t.substr(0, 2))
                  throw 'this method supports uncompressed format(04) only';
                var e = this.ecparams.keycharlen;
                if (t.length !== 2 + 2 * e)
                  throw 'malformed public key hex length';
                var n = {};
                return n.x = t.substr(2, e),
                  n.y = t.substr(2 + e),
                  n;
              }
              ,
              this.getShortNISTPCurveName = function () {
                var t = this.curveName;
                return 'secp256r1' === t || 'NIST P-256' === t || 'P-256' === t || 'prime256v1' === t ? 'P-256' : 'secp384r1' === t || 'NIST P-384' === t || 'P-384' === t ? 'P-384' : 'secp521r1' === t || 'NIST P-521' === t || 'P-521' === t ? 'P-521' : null;
              }
              ,
              this.generateKeyPairHex = function () {
                var t = this.ecparams.n
                  , e = this.getBigRandom(t)
                  , n = this.ecparams.keycharlen
                  , r = ('0000000000' + e.toString(16)).slice(-n);
                return this.setPrivateKeyHex(r),
                  {
                    ecprvhex: r,
                    ecpubhex: this.generatePublicKeyHex()
                  };
              }
              ,
              this.generatePublicKeyHex = function () {
                var t = new n(this.prvKeyHex, 16)
                  , e = this.ecparams.G.multiply(t)
                  , r = e.getX().toBigInteger()
                  , i = e.getY().toBigInteger()
                  , o = this.ecparams.keycharlen
                  , s = '04' + ('0000000000' + r.toString(16)).slice(-o) + ('0000000000' + i.toString(16)).slice(-o);
                return this.setPublicKeyHex(s),
                  s;
              }
              ,
              this.signWithMessageHash = function (t) {
                return this.signHex(t, this.prvKeyHex);
              }
              ,
              this.signHex = function (t, e) {
                var r = new n(e, 16)
                  , o = this.ecparams.n
                  , s = new n(t.substring(0, this.ecparams.keycharlen), 16);
                do {
                  var a = this.getBigRandom(o)
                    , u = this.ecparams.G.multiply(a).getX().toBigInteger().mod(o);
                } while (u.compareTo(n.ZERO) <= 0);
                var c = a.modInverse(o).multiply(s.add(r.multiply(u))).mod(o);
                return i.biRSSigToASN1Sig(u, c);
              }
              ,
              this.sign = function (t, e) {
                var r = e
                  , i = this.ecparams.n
                  , o = n.fromByteArrayUnsigned(t);
                do {
                  var s = this.getBigRandom(i)
                    , a = this.ecparams.G.multiply(s).getX().toBigInteger().mod(i);
                } while (a.compareTo(w.ZERO) <= 0);
                var u = s.modInverse(i).multiply(o.add(r.multiply(a))).mod(i);
                return this.serializeSig(a, u);
              }
              ,
              this.verifyWithMessageHash = function (t, e) {
                return this.verifyHex(t, e, this.pubKeyHex);
              }
              ,
              this.verifyHex = function (t, e, o) {
                try {
                  var s, a, u = i.parseSigHex(e);
                  s = u.r,
                    a = u.s;
                  var c = r.decodeFromHex(this.ecparams.curve, o)
                    , l = new n(t.substring(0, this.ecparams.keycharlen), 16);
                  return this.verifyRaw(l, s, a, c);
                } catch (t) {
                  return !1;
                }
              }
              ,
              this.verify = function (t, e, i) {
                var o, s, a;
                if (Bitcoin.Util.isArray(e)) {
                  var u = this.parseSig(e);
                  o = u.r,
                    s = u.s;
                } else {
                  if ('object' != typeof e || !e.r || !e.s)
                    throw 'Invalid value for signature';
                  o = e.r,
                    s = e.s;
                }
                if (i instanceof ot)
                  a = i;
                else {
                  if (!Bitcoin.Util.isArray(i))
                    throw 'Invalid format for pubkey value, must be byte array or ECPointFp';
                  a = r.decodeFrom(this.ecparams.curve, i);
                }
                var c = n.fromByteArrayUnsigned(t);
                return this.verifyRaw(c, o, s, a);
              }
              ,
              this.verifyRaw = function (t, e, r, i) {
                var o = this.ecparams.n
                  , s = this.ecparams.G;
                if (e.compareTo(n.ONE) < 0 || e.compareTo(o) >= 0)
                  return !1;
                if (r.compareTo(n.ONE) < 0 || r.compareTo(o) >= 0)
                  return !1;
                var a = r.modInverse(o)
                  , u = t.multiply(a).mod(o)
                  , c = e.multiply(a).mod(o);
                return s.multiply(u).add(i.multiply(c)).getX().toBigInteger().mod(o).equals(e);
              }
              ,
              this.serializeSig = function (t, e) {
                var n = t.toByteArraySigned()
                  , r = e.toByteArraySigned()
                  , i = [];
                return i.push(2),
                  i.push(n.length),
                  (i = i.concat(n)).push(2),
                  i.push(r.length),
                  (i = i.concat(r)).unshift(i.length),
                  i.unshift(48),
                  i;
              }
              ,
              this.parseSig = function (t) {
                var e;
                if (48 != t[0])
                  throw new Error('Signature not a valid DERSequence');
                if (2 != t[e = 2])
                  throw new Error('First element in signature must be a DERInteger');
                var r = t.slice(e + 2, e + 2 + t[e + 1]);
                if (2 != t[e += 2 + t[e + 1]])
                  throw new Error('Second element in signature must be a DERInteger');
                var i = t.slice(e + 2, e + 2 + t[e + 1]);
                return e += 2 + t[e + 1],
                  {
                    r: n.fromByteArrayUnsigned(r),
                    s: n.fromByteArrayUnsigned(i)
                  };
              }
              ,
              this.parseSigCompact = function (t) {
                if (65 !== t.length)
                  throw 'Signature has the wrong length';
                var e = t[0] - 27;
                if (e < 0 || e > 7)
                  throw 'Invalid signature type';
                var r = this.ecparams.n;
                return {
                  r: n.fromByteArrayUnsigned(t.slice(1, 33)).mod(r),
                  s: n.fromByteArrayUnsigned(t.slice(33, 65)).mod(r),
                  i: e
                };
              }
              ,
              this.readPKCS5PrvKeyHex = function (t) {
                if (!1 === c(t))
                  throw new Error('not ASN.1 hex string');
                var e, n, r;
                try {
                  e = u(t, 0, ['[0]', 0], '06'),
                    n = u(t, 0, [1], '04');
                  try {
                    r = u(t, 0, ['[1]', 0], '03');
                  } catch (t) {
                  }
                } catch (t) {
                  throw new Error('malformed PKCS#1/5 plain ECC private key');
                }
                if (this.curveName = s(e),
                void 0 === this.curveName)
                  throw 'unsupported curve name';
                this.setNamedCurve(this.curveName),
                  this.setPublicKeyHex(r),
                  this.setPrivateKeyHex(n),
                  this.isPublic = !1;
              }
              ,
              this.readPKCS8PrvKeyHex = function (t) {
                if (!1 === c(t))
                  throw new e('not ASN.1 hex string');
                var n, r, i;
                try {
                  u(t, 0, [1, 0], '06'),
                    n = u(t, 0, [1, 1], '06'),
                    r = u(t, 0, [2, 0, 1], '04');
                  try {
                    i = u(t, 0, [2, 0, '[1]', 0], '03');
                  } catch (t) {
                  }
                } catch (t) {
                  throw new e('malformed PKCS#8 plain ECC private key');
                }
                if (this.curveName = s(n),
                void 0 === this.curveName)
                  throw new e('unsupported curve name');
                this.setNamedCurve(this.curveName),
                  this.setPublicKeyHex(i),
                  this.setPrivateKeyHex(r),
                  this.isPublic = !1;
              }
              ,
              this.readPKCS8PubKeyHex = function (t) {
                if (!1 === c(t))
                  throw new e('not ASN.1 hex string');
                var n, r;
                try {
                  u(t, 0, [0, 0], '06'),
                    n = u(t, 0, [0, 1], '06'),
                    r = u(t, 0, [1], '03');
                } catch (t) {
                  throw new e('malformed PKCS#8 ECC public key');
                }
                if (this.curveName = s(n),
                null === this.curveName)
                  throw new e('unsupported curve name');
                this.setNamedCurve(this.curveName),
                  this.setPublicKeyHex(r);
              }
              ,
              this.readCertPubKeyHex = function (t, n) {
                if (!1 === c(t))
                  throw new e('not ASN.1 hex string');
                var r, i;
                try {
                  r = u(t, 0, [0, 5, 0, 1], '06'),
                    i = u(t, 0, [0, 5, 1], '03');
                } catch (t) {
                  throw new e('malformed X.509 certificate ECC public key');
                }
                if (this.curveName = s(r),
                null === this.curveName)
                  throw new e('unsupported curve name');
                this.setNamedCurve(this.curveName),
                  this.setPublicKeyHex(i);
              }
              ,
            void 0 !== t && void 0 !== t.curve && (this.curveName = t.curve),
            void 0 === this.curveName && (this.curveName = 'secp256r1'),
              this.setNamedCurve(this.curveName),
            void 0 !== t && (void 0 !== t.prv && this.setPrivateKeyHex(t.prv),
            void 0 !== t.pub && this.setPublicKeyHex(t.pub));
          }
          ,
          ut.crypto.ECDSA.parseSigHex = function (t) {
            var e = ut.crypto.ECDSA.parseSigHexInHexRS(t);
            return {
              r: new w(e.r, 16),
              s: new w(e.s, 16)
            };
          }
          ,
          ut.crypto.ECDSA.parseSigHexInHexRS = function (t) {
            var e = ht
              , n = e.getChildIdx
              , r = e.getV;
            if (e.checkStrictDER(t, 0),
            '30' != t.substr(0, 2))
              throw new Error('signature is not a ASN.1 sequence');
            var i = n(t, 0);
            if (2 != i.length)
              throw new Error('signature shall have two elements');
            var o = i[0]
              , s = i[1];
            if ('02' != t.substr(o, 2))
              throw new Error('1st item not ASN.1 integer');
            if ('02' != t.substr(s, 2))
              throw new Error('2nd item not ASN.1 integer');
            return {
              r: r(t, o),
              s: r(t, s)
            };
          }
          ,
          ut.crypto.ECDSA.asn1SigToConcatSig = function (t) {
            var e = ut.crypto.ECDSA.parseSigHexInHexRS(t)
              , n = e.r
              , r = e.s;
            if (n.length >= 130 && n.length <= 134) {
              if (n.length % 2 != 0)
                throw Error('unknown ECDSA sig r length error');
              if (r.length % 2 != 0)
                throw Error('unknown ECDSA sig s length error');
              '00' == n.substr(0, 2) && (n = n.substr(2)),
              '00' == r.substr(0, 2) && (r = r.substr(2));
              var i = Math.max(n.length, r.length);
              return (n = ('000000' + n).slice(-i)) + (r = ('000000' + r).slice(-i));
            }
            if ('00' == n.substr(0, 2) && n.length % 32 == 2 && (n = n.substr(2)),
            '00' == r.substr(0, 2) && r.length % 32 == 2 && (r = r.substr(2)),
            n.length % 32 == 30 && (n = '00' + n),
            r.length % 32 == 30 && (r = '00' + r),
            n.length % 32 != 0)
              throw Error('unknown ECDSA sig r length error');
            if (r.length % 32 != 0)
              throw Error('unknown ECDSA sig s length error');
            return n + r;
          }
          ,
          ut.crypto.ECDSA.concatSigToASN1Sig = function (t) {
            if (t.length % 4 != 0)
              throw Error('unknown ECDSA concatinated r-s sig length error');
            var e = t.substr(0, t.length / 2)
              , n = t.substr(t.length / 2);
            return ut.crypto.ECDSA.hexRSSigToASN1Sig(e, n);
          }
          ,
          ut.crypto.ECDSA.hexRSSigToASN1Sig = function (t, e) {
            var n = new w(t, 16)
              , r = new w(e, 16);
            return ut.crypto.ECDSA.biRSSigToASN1Sig(n, r);
          }
          ,
          ut.crypto.ECDSA.biRSSigToASN1Sig = function (t, e) {
            var n = ut.asn1
              , r = new n.DERInteger({
              bigint: t
            })
              , i = new n.DERInteger({
              bigint: e
            });
            return new n.DERSequence({
              array: [r, i]
            }).tohex();
          }
          ,
          ut.crypto.ECDSA.getName = function (t) {
            return '2b8104001f' === t ? 'secp192k1' : '2a8648ce3d030107' === t ? 'secp256r1' : '2b8104000a' === t ? 'secp256k1' : '2b81040021' === t ? 'secp224r1' : '2b81040022' === t ? 'secp384r1' : '2b81040023' === t ? 'secp521r1' : -1 !== '|secp256r1|NIST P-256|P-256|prime256v1|'.indexOf(t) ? 'secp256r1' : -1 !== '|secp256k1|'.indexOf(t) ? 'secp256k1' : -1 !== '|secp224r1|NIST P-224|P-224|'.indexOf(t) ? 'secp224r1' : -1 !== '|secp384r1|NIST P-384|P-384|'.indexOf(t) ? 'secp384r1' : -1 !== '|secp521r1|NIST P-521|P-521|'.indexOf(t) ? 'secp521r1' : null;
          }
          ,
        void 0 !== ut && ut || (ut = {}),
        void 0 !== ut.crypto && ut.crypto || (ut.crypto = {}),
          ut.crypto.ECParameterDB = new function () {
            var t = {}
              , e = {};

            function n(t) {
              return new w(t, 16);
            }

            this.getByName = function (n) {
              var r = n;
              if (void 0 !== e[r] && (r = e[n]),
              void 0 !== t[r])
                return t[r];
              throw 'unregistered EC curve name: ' + r;
            }
              ,
              this.regist = function (r, i, o, s, a, u, c, l, h, f, p, d) {
                t[r] = {};
                var g = n(o)
                  , v = n(s)
                  , m = n(a)
                  , y = n(u)
                  , b = n(c)
                  , x = new st(g, v, m)
                  , w = x.decodePointHex('04' + l + h);
                t[r].name = r,
                  t[r].keylen = i,
                  t[r].keycharlen = 2 * Math.ceil(i / 8),
                  t[r].curve = x,
                  t[r].G = w,
                  t[r].n = y,
                  t[r].h = b,
                  t[r].oid = p,
                  t[r].info = d;
                for (var S = 0; S < f.length; S++)
                  e[f[S]] = r;
              };
          }
          ,
          ut.crypto.ECParameterDB.regist('secp128r1', 128, 'FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF', 'FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC', 'E87579C11079F43DD824993C2CEE5ED3', 'FFFFFFFE0000000075A30D1B9038A115', '1', '161FF7528B899B2D0C28607CA52C5B86', 'CF5AC8395BAFEB13C02DA292DDED7A83', [], '', 'secp128r1 : SECG curve over a 128 bit prime field'),
          ut.crypto.ECParameterDB.regist('secp160k1', 160, 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73', '0', '7', '0100000000000000000001B8FA16DFAB9ACA16B6B3', '1', '3B4C382CE37AA192A4019E763036F4F5DD4D7EBB', '938CF935318FDCED6BC28286531733C3F03C4FEE', [], '', 'secp160k1 : SECG curve over a 160 bit prime field'),
          ut.crypto.ECParameterDB.regist('secp160r1', 160, 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF', 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC', '1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45', '0100000000000000000001F4C8F927AED3CA752257', '1', '4A96B5688EF573284664698968C38BB913CBFC82', '23A628553168947D59DCC912042351377AC5FB32', [], '', 'secp160r1 : SECG curve over a 160 bit prime field'),
          ut.crypto.ECParameterDB.regist('secp192k1', 192, 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37', '0', '3', 'FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D', '1', 'DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D', '9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D', []),
          ut.crypto.ECParameterDB.regist('secp192r1', 192, 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF', 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC', '64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1', 'FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831', '1', '188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF1012', '07192B95FFC8DA78631011ED6B24CDD573F977A11E794811', []),
          ut.crypto.ECParameterDB.regist('secp224r1', 224, 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001', 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE', 'B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4', 'FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D', '1', 'B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21', 'BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34', []),
          ut.crypto.ECParameterDB.regist('secp256k1', 256, 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F', '0', '7', 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141', '1', '79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798', '483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8', []),
          ut.crypto.ECParameterDB.regist('secp256r1', 256, 'FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF', 'FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC', '5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B', 'FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551', '1', '6B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296', '4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5', ['NIST P-256', 'P-256', 'prime256v1']),
          ut.crypto.ECParameterDB.regist('secp384r1', 384, 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFF', 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFC', 'B3312FA7E23EE7E4988E056BE3F82D19181D9C6EFE8141120314088F5013875AC656398D8A2ED19D2A85C8EDD3EC2AEF', 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC7634D81F4372DDF581A0DB248B0A77AECEC196ACCC52973', '1', 'AA87CA22BE8B05378EB1C71EF320AD746E1D3B628BA79B9859F741E082542A385502F25DBF55296C3A545E3872760AB7', '3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f', ['NIST P-384', 'P-384']),
          ut.crypto.ECParameterDB.regist('secp521r1', 521, '1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF', '1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC', '051953EB9618E1C9A1F929A21A0B68540EEA2DA725B99B315F3B8B489918EF109E156193951EC7E937B1652C0BD3BB1BF073573DF883D2C34F1EF451FD46B503F00', '1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFA51868783BF2F966B7FCC0148F709A5D03BB5C9B8899C47AEBB6FB71E91386409', '1', '00C6858E06B70404E9CD9E3ECB662395B4429C648139053FB521F828AF606B4D3DBAA14B5E77EFE75928FE1DC127A2FFA8DE3348B3C1856A429BF97E7E31C2E5BD66', '011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650', ['NIST P-521', 'P-521']),
        void 0 !== ut && ut || (ut = {}),
        void 0 !== ut.crypto && ut.crypto || (ut.crypto = {}),
          ut.crypto.DSA = function () {
            var t = ht
              , e = (t.getVbyList,
              t.getVbyListEx)
              , n = t.isASN1HEX
              , r = w;
            this.p = null,
              this.q = null,
              this.g = null,
              this.y = null,
              this.x = null,
              this.type = 'DSA',
              this.isPrivate = !1,
              this.isPublic = !1,
              this.setPrivate = function (t, e, n, r, i) {
                this.isPrivate = !0,
                  this.p = t,
                  this.q = e,
                  this.g = n,
                  this.y = r,
                  this.x = i;
              }
              ,
              this.setPrivateHex = function (t, e, n, r, i) {
                var o, s, a, u, c;
                o = new w(t, 16),
                  s = new w(e, 16),
                  a = new w(n, 16),
                  u = 'string' == typeof r && r.length > 1 ? new w(r, 16) : null,
                  c = new w(i, 16),
                  this.setPrivate(o, s, a, u, c);
              }
              ,
              this.setPublic = function (t, e, n, r) {
                this.isPublic = !0,
                  this.p = t,
                  this.q = e,
                  this.g = n,
                  this.y = r,
                  this.x = null;
              }
              ,
              this.setPublicHex = function (t, e, n, r) {
                var i, o, s, a;
                i = new w(t, 16),
                  o = new w(e, 16),
                  s = new w(n, 16),
                  a = new w(r, 16),
                  this.setPublic(i, o, s, a);
              }
              ,
              this.signWithMessageHash = function (t) {
                var e = this.p
                  , n = this.q
                  , r = this.g
                  , i = (this.y,
                  this.x)
                  , o = ut.crypto.Util.getRandomBigIntegerMinToMax(w.ONE.add(w.ONE), n.subtract(w.ONE))
                  , s = new w(t.substr(0, n.bitLength() / 4), 16)
                  , a = r.modPow(o, e).mod(n)
                  , u = o.modInverse(n).multiply(s.add(i.multiply(a))).mod(n);
                return ut.asn1.ASN1Util.jsonToASN1HEX({
                  seq: [{
                    int: {
                      bigint: a
                    }
                  }, {
                    int: {
                      bigint: u
                    }
                  }]
                });
              }
              ,
              this.verifyWithMessageHash = function (t, e) {
                var n = this.p
                  , r = this.q
                  , i = this.g
                  , o = this.y
                  , s = this.parseASN1Signature(e)
                  , a = s[0]
                  , u = s[1]
                  , c = new w(t.substr(0, r.bitLength() / 4), 16);
                if (w.ZERO.compareTo(a) > 0 || a.compareTo(r) > 0)
                  throw 'invalid DSA signature';
                if (w.ZERO.compareTo(u) >= 0 || u.compareTo(r) > 0)
                  throw 'invalid DSA signature';
                var l = u.modInverse(r)
                  , h = c.multiply(l).mod(r)
                  , f = a.multiply(l).mod(r);
                return 0 == i.modPow(h, n).multiply(o.modPow(f, n)).mod(n).mod(r).compareTo(a);
              }
              ,
              this.parseASN1Signature = function (t) {
                try {
                  return [new r(e(t, 0, [0], '02'), 16), new r(e(t, 0, [1], '02'), 16)];
                } catch (t) {
                  throw new Error('malformed ASN.1 DSA signature');
                }
              }
              ,
              this.readPKCS5PrvKeyHex = function (t) {
                var r, i, o, s, a;
                if (!1 === n(t))
                  throw new Error('not ASN.1 hex string');
                try {
                  r = e(t, 0, [1], '02'),
                    i = e(t, 0, [2], '02'),
                    o = e(t, 0, [3], '02'),
                    s = e(t, 0, [4], '02'),
                    a = e(t, 0, [5], '02');
                } catch (t) {
                  throw new Error('malformed PKCS#1/5 plain DSA private key');
                }
                this.setPrivateHex(r, i, o, s, a);
              }
              ,
              this.readPKCS8PrvKeyHex = function (t) {
                var r, i, o, s;
                if (!1 === n(t))
                  throw new Error('not ASN.1 hex string');
                try {
                  r = e(t, 0, [1, 1, 0], '02'),
                    i = e(t, 0, [1, 1, 1], '02'),
                    o = e(t, 0, [1, 1, 2], '02'),
                    s = e(t, 0, [2, 0], '02');
                } catch (t) {
                  throw new Error('malformed PKCS#8 plain DSA private key');
                }
                this.setPrivateHex(r, i, o, null, s);
              }
              ,
              this.readPKCS8PubKeyHex = function (t) {
                var r, i, o, s;
                if (!1 === n(t))
                  throw new Error('not ASN.1 hex string');
                try {
                  r = e(t, 0, [0, 1, 0], '02'),
                    i = e(t, 0, [0, 1, 1], '02'),
                    o = e(t, 0, [0, 1, 2], '02'),
                    s = e(t, 0, [1, 0], '02');
                } catch (t) {
                  throw new Error('malformed PKCS#8 DSA public key');
                }
                this.setPublicHex(r, i, o, s);
              }
              ,
              this.readCertPubKeyHex = function (t, r) {
                var i, o, s, a;
                if (!1 === n(t))
                  throw new Error('not ASN.1 hex string');
                try {
                  i = e(t, 0, [0, 5, 0, 1, 0], '02'),
                    o = e(t, 0, [0, 5, 0, 1, 1], '02'),
                    s = e(t, 0, [0, 5, 0, 1, 2], '02'),
                    a = e(t, 0, [0, 5, 1, 0], '02');
                } catch (t) {
                  throw new Error('malformed X.509 certificate DSA public key');
                }
                this.setPublicHex(i, o, s, a);
              };
          }
        ;
        var re = function () {
          var t = function (t, n, r) {
            return e(g.AES, t, n, r);
          }
            , e = function (t, e, n, r) {
            var i = g.enc.Hex.parse(e)
              , o = g.enc.Hex.parse(n)
              , s = g.enc.Hex.parse(r)
              , a = {};
            a.key = o,
              a.iv = s,
              a.ciphertext = i;
            var u = t.decrypt(a, o, {
              iv: s
            });
            return g.enc.Hex.stringify(u);
          }
            , n = function (t, e, n) {
            return r(g.AES, t, e, n);
          }
            , r = function (t, e, n, r) {
            var i = g.enc.Hex.parse(e)
              , o = g.enc.Hex.parse(n)
              , s = g.enc.Hex.parse(r)
              , a = t.encrypt(i, o, {
              iv: s
            })
              , u = g.enc.Hex.parse(a.toString());
            return g.enc.Base64.stringify(u);
          }
            , i = {
            'AES-256-CBC': {
              proc: t,
              eproc: n,
              keylen: 32,
              ivlen: 16
            },
            'AES-192-CBC': {
              proc: t,
              eproc: n,
              keylen: 24,
              ivlen: 16
            },
            'AES-128-CBC': {
              proc: t,
              eproc: n,
              keylen: 16,
              ivlen: 16
            },
            'DES-EDE3-CBC': {
              proc: function (t, n, r) {
                return e(g.TripleDES, t, n, r);
              },
              eproc: function (t, e, n) {
                return r(g.TripleDES, t, e, n);
              },
              keylen: 24,
              ivlen: 8
            },
            'DES-CBC': {
              proc: function (t, n, r) {
                return e(g.DES, t, n, r);
              },
              eproc: function (t, e, n) {
                return r(g.DES, t, e, n);
              },
              keylen: 8,
              ivlen: 8
            }
          }
            , o = function (t) {
            var e = {}
              , n = t.match(new RegExp('DEK-Info: ([^,]+),([0-9A-Fa-f]+)', 'm'));
            n && (e.cipher = n[1],
              e.ivsalt = n[2]);
            var r = t.match(new RegExp('-----BEGIN ([A-Z]+) PRIVATE KEY-----'));
            r && (e.type = r[1]);
            var i = -1
              , o = 0;
            -1 != t.indexOf('\r\n\r\n') && (i = t.indexOf('\r\n\r\n'),
              o = 2),
            -1 != t.indexOf('\n\n') && (i = t.indexOf('\n\n'),
              o = 1);
            var s = t.indexOf('-----END');
            if (-1 != i && -1 != s) {
              var a = t.substring(i + 2 * o, s - o);
              a = a.replace(/\s+/g, ''),
                e.data = a;
            }
            return e;
          }
            , s = function (t, e, n) {
            for (var r = n.substring(0, 16), o = g.enc.Hex.parse(r), s = g.enc.Utf8.parse(e), a = i[t].keylen + i[t].ivlen, u = '', c = null; ;) {
              var l = g.algo.MD5.create();
              if (null != c && l.update(c),
                l.update(s),
                l.update(o),
                c = l.finalize(),
              (u += g.enc.Hex.stringify(c)).length >= 2 * a)
                break;
            }
            var h = {};
            return h.keyhex = u.substr(0, 2 * i[t].keylen),
              h.ivhex = u.substr(2 * i[t].keylen, 2 * i[t].ivlen),
              h;
          }
            , a = function (t, e, n, r) {
            var o = g.enc.Base64.parse(t)
              , s = g.enc.Hex.stringify(o);
            return (0,
              i[e].proc)(s, n, r);
          };
          return {
            version: '1.0.0',
            parsePKCS5PEM: function (t) {
              return o(t);
            },
            getKeyAndUnusedIvByPasscodeAndIvsalt: function (t, e, n) {
              return s(t, e, n);
            },
            decryptKeyB64: function (t, e, n, r) {
              return a(t, e, n, r);
            },
            getDecryptedKeyHex: function (t, e) {
              var n = o(t)
                , r = (n.type,
                n.cipher)
                , i = n.ivsalt
                , u = n.data
                , c = s(r, e, i).keyhex;
              return a(u, r, c, i);
            },
            getEncryptedPKCS5PEMFromPrvKeyHex: function (t, e, n, r, o) {
              var a = '';
              if (void 0 !== r && null != r || (r = 'AES-256-CBC'),
              void 0 === i[r])
                throw new Error('KEYUTIL unsupported algorithm: ' + r);
              void 0 !== o && null != o || (o = function (t) {
                var e = g.lib.WordArray.random(t);
                return g.enc.Hex.stringify(e);
              }(i[r].ivlen).toUpperCase());
              var u = function (t, e, n, r) {
                return (0,
                  i[e].eproc)(t, n, r);
              }(e, r, s(r, n, o).keyhex, o);
              a = '-----BEGIN ' + t + ' PRIVATE KEY-----\r\n';
              return a += 'Proc-Type: 4,ENCRYPTED\r\n',
                a += 'DEK-Info: ' + r + ',' + o + '\r\n',
                a += '\r\n',
                a += u.replace(/(.{64})/g, '$1\r\n'),
                a += '\r\n-----END ' + t + ' PRIVATE KEY-----\r\n';
            },
            getEncryptedPKCS8PEM: function (t, e, n) {
              return kt(this.getEncryptedPKCS8Hex(t, e, n), 'ENCRYPTED PRIVATE KEY');
            },
            getEncryptedPKCS8Hex: function (t, e, n) {
              var r;
              (r = null == n || null == n ? {} : JSON.parse(JSON.stringify(n))).plain = t,
                this.initPBES2Param(r),
                this.encryptPBES2Param(r, e);
              var i = this.generatePBES2ASN1Param(r);
              return ut.asn1.ASN1Util.newObject(i).tohex();
            },
            initPBES2Param: function (t) {
              var e;
              (null == ee(t, 'encalg') && (t.encalg = 'aes256-CBC'),
              null == ee(t, 'iter') && (t.iter = 2048),
              null == ee(t, 'prf') && (t.prf = 'hmacWithSHA256'),
              null == ee(t, 'salt') && (t.salt = g.enc.Hex.stringify(g.lib.WordArray.random(8))),
              null == ee(t, 'enciv')) && ('des-EDE3-CBC' == t.encalg && (e = 8),
              'aes128-CBC' == t.encalg && (e = 16),
              'aes256-CBC' == t.encalg && (e = 16),
                t.enciv = g.enc.Hex.stringify(g.lib.WordArray.random(e)));
            },
            encryptPBES2Param: function (t, e) {
              var n = re.getDKFromPBES2Param(t, e);
              try {
                var r = ut.crypto.Cipher.encrypt(t.plain, n, t.encalg, {
                  iv: t.enciv
                });
              } catch (e) {
                throw new Error('encrypt error: ' + t.plain + ' ' + n + ' ' + t.encalg + ' ' + t.enciv);
              }
              t.enc = r;
            },
            generatePBES2ASN1Param: function (t) {
              var e = {
                seq: [{
                  seq: [{
                    oid: 'pkcs5PBES2'
                  }, {
                    seq: [{
                      seq: [{
                        oid: 'pkcs5PBKDF2'
                      }, {
                        seq: [{
                          octstr: {
                            hex: t.salt
                          }
                        }, {
                          int: {
                            hex: Wt(t.iter)
                          }
                        }]
                      }]
                    }, {
                      seq: [{
                        oid: t.encalg
                      }, {
                        octstr: {
                          hex: t.enciv
                        }
                      }]
                    }]
                  }]
                }, {
                  octstr: {
                    hex: t.enc
                  }
                }]
              };
              return 'hmacWithSHA1' != t.prf && e.seq[0].seq[1].seq[0].seq[1].seq.push({
                seq: [{
                  oid: t.prf
                }, {
                  null: ''
                }]
              }),
                e;
            },
            parseHexOfEncryptedPKCS8: function (t) {
              var e = ht
                , n = e.getChildIdx
                , r = e.getV
                , i = {}
                , o = n(t, 0);
              if (2 != o.length)
                throw new Error('malformed format: SEQUENCE(0).items != 2: ' + o.length);
              i.ciphertext = r(t, o[1]);
              var s = n(t, o[0]);
              if (2 != s.length)
                throw new Error('malformed format: SEQUENCE(0.0).items != 2: ' + s.length);
              if ('2a864886f70d01050d' != r(t, s[0]))
                throw new Error('this only supports pkcs5PBES2');
              var a = n(t, s[1]);
              if (2 != s.length)
                throw new Error('malformed format: SEQUENCE(0.0.1).items != 2: ' + a.length);
              var u = n(t, a[1]);
              if (2 != u.length)
                throw new Error('malformed format: SEQUENCE(0.0.1.1).items != 2: ' + u.length);
              if ('2a864886f70d0307' != r(t, u[0]))
                throw 'this only supports TripleDES';
              i.encryptionSchemeAlg = 'TripleDES',
                i.encryptionSchemeIV = r(t, u[1]);
              var c = n(t, a[0]);
              if (2 != c.length)
                throw new Error('malformed format: SEQUENCE(0.0.1.0).items != 2: ' + c.length);
              if ('2a864886f70d01050c' != r(t, c[0]))
                throw new Error('this only supports pkcs5PBKDF2');
              var l = n(t, c[1]);
              if (l.length < 2)
                throw new Error('malformed format: SEQUENCE(0.0.1.0.1).items < 2: ' + l.length);
              i.pbkdf2Salt = r(t, l[0]);
              var h = r(t, l[1]);
              try {
                i.pbkdf2Iter = parseInt(h, 16);
              } catch (t) {
                throw new Error('malformed format pbkdf2Iter: ' + h);
              }
              return i;
            },
            getPBKDF2KeyHexFromParam: function (t, e) {
              var n = g.enc.Hex.parse(t.pbkdf2Salt)
                , r = t.pbkdf2Iter
                , i = g.PBKDF2(e, n, {
                keySize: 6,
                iterations: r
              });
              return g.enc.Hex.stringify(i);
            },
            _getPlainPKCS8HexFromEncryptedPKCS8PEM: function (t, e) {
              var n = Tt(t, 'ENCRYPTED PRIVATE KEY')
                , r = this.parseHexOfEncryptedPKCS8(n)
                , i = re.getPBKDF2KeyHexFromParam(r, e)
                , o = {};
              o.ciphertext = g.enc.Hex.parse(r.ciphertext);
              var s = g.enc.Hex.parse(i)
                , a = g.enc.Hex.parse(r.encryptionSchemeIV)
                , u = g.TripleDES.decrypt(o, s, {
                iv: a
              });
              return g.enc.Hex.stringify(u);
            },
            parsePBES2: function (t) {
              var e = ht.parse(t);
              if ('pkcs5PBES2' != ee(e, 'seq.0.seq.0.oid') || 'pkcs5PBKDF2' != ee(e, 'seq.0.seq.1.seq.0.seq.0.oid'))
                throw new Error('not pkcs5PBES2 and pkcs5PBKDF2 used');
              var n = ee(e, 'seq.0.seq.1.seq.0.seq.1.seq');
              if (null == n)
                throw new Error('PBKDF2 parameter not found');
              var r = ee(n, '0.octstr.hex')
                , i = ee(n, '1.int.hex')
                , o = ee(n, '2.seq.0.oid', 'hmacWithSHA1')
                , s = -1;
              try {
                s = parseInt(i, 16);
              } catch (t) {
                throw new Error('iter not proper value');
              }
              var a = ee(e, 'seq.0.seq.1.seq.1.seq.0.oid')
                , u = ee(e, 'seq.0.seq.1.seq.1.seq.1.octstr.hex')
                , c = ee(e, 'seq.1.octstr.hex');
              if (null == a || null == u || null == c)
                throw new Error('encalg, enciv or enc is undefined');
              return {
                salt: r,
                iter: s,
                prf: o,
                encalg: a,
                enciv: u,
                enc: c
              };
            },
            getDKFromPBES2Param: function (t, e) {
              var n = {
                hmacWithSHA1: g.algo.SHA1,
                hmacWithSHA224: g.algo.SHA224,
                hmacWithSHA256: g.algo.SHA256,
                hmacWithSHA384: g.algo.SHA384,
                hmacWithSHA512: g.algo.SHA512
              }[t.prf];
              if (null == n)
                throw new Error('unsupported prf');
              var r = {
                'des-EDE3-CBC': 6,
                'aes128-CBC': 4,
                'aes256-CBC': 8
              }[t.encalg];
              if (null == r)
                throw new Error('unsupported encalg');
              var i = g.enc.Hex.parse(t.salt)
                , o = t.iter;
              try {
                var s = g.PBKDF2(e, i, {
                  keySize: r,
                  iterations: o,
                  hasher: n
                });
                return g.enc.Hex.stringify(s);
              } catch (n) {
                throw new Error('PBKDF2 error: ' + n + ' ' + JSON.stringify(t) + ' ' + e);
              }
            },
            getPlainHexFromEncryptedPKCS8PEM: function (t, e) {
              if (-1 == t.indexOf('BEGIN ENCRYPTED PRIVATE KEY'))
                throw new Error('not Encrypted PKCS#8 PEM string');
              var n, r = Tt(t);
              try {
                n = re.parsePBES2(r);
              } catch (t) {
                throw new Error('malformed PBES2 format: ' + t.message);
              }
              var i = re.getDKFromPBES2Param(n, e);
              return ut.crypto.Cipher.decrypt(n.enc, i, n.encalg, {
                iv: n.enciv
              });
            },
            getKeyFromEncryptedPKCS8PEM: function (t, e) {
              var n = this.getPlainHexFromEncryptedPKCS8PEM(t, e);
              return this.getKeyFromPlainPrivatePKCS8Hex(n);
            },
            parsePlainPrivatePKCS8Hex: function (t) {
              var e = ht
                , n = e.getChildIdx
                , r = e.getV
                , i = {
                algparam: null
              };
              if ('30' != t.substr(0, 2))
                throw new Error('malformed plain PKCS8 private key(code:001)');
              var o = n(t, 0);
              if (o.length < 3)
                throw new Error('malformed plain PKCS8 private key(code:002)');
              if ('30' != t.substr(o[1], 2))
                throw new Error('malformed PKCS8 private key(code:003)');
              var s = n(t, o[1]);
              if (2 != s.length)
                throw new Error('malformed PKCS8 private key(code:004)');
              if ('06' != t.substr(s[0], 2))
                throw new Error('malformed PKCS8 private key(code:005)');
              if (i.algoid = r(t, s[0]),
              '06' == t.substr(s[1], 2) && (i.algparam = r(t, s[1])),
              '04' != t.substr(o[2], 2))
                throw new Error('malformed PKCS8 private key(code:006)');
              return i.keyidx = e.getVidx(t, o[2]),
                i;
            },
            getKeyFromPlainPrivatePKCS8PEM: function (t) {
              var e = Tt(t, 'PRIVATE KEY');
              return this.getKeyFromPlainPrivatePKCS8Hex(e);
            },
            getKeyFromPlainPrivatePKCS8Hex: function (t) {
              var e, n = this.parsePlainPrivatePKCS8Hex(t);
              if ('2a864886f70d010101' == n.algoid)
                e = new nt;
              else if ('2a8648ce380401' == n.algoid)
                e = new ut.crypto.DSA;
              else {
                if ('2a8648ce3d0201' != n.algoid)
                  throw new Error('unsupported private key algorithm');
                e = new ut.crypto.ECDSA;
              }
              return e.readPKCS8PrvKeyHex(t),
                e;
            },
            _getKeyFromPublicPKCS8Hex: function (t) {
              var e, n = ht.getVbyList(t, 0, [0, 0], '06');
              if ('2a864886f70d010101' === n)
                e = new nt;
              else if ('2a8648ce380401' === n)
                e = new ut.crypto.DSA;
              else {
                if ('2a8648ce3d0201' !== n)
                  throw new Error('unsupported PKCS#8 public key hex');
                e = new ut.crypto.ECDSA;
              }
              return e.readPKCS8PubKeyHex(t),
                e;
            },
            parsePublicRawRSAKeyHex: function (t) {
              var e = ht
                , n = e.getChildIdx
                , r = e.getV
                , i = {};
              if ('30' != t.substr(0, 2))
                throw new Error('malformed RSA key(code:001)');
              var o = n(t, 0);
              if (2 != o.length)
                throw new Error('malformed RSA key(code:002)');
              if ('02' != t.substr(o[0], 2))
                throw new Error('malformed RSA key(code:003)');
              if (i.n = r(t, o[0]),
              '02' != t.substr(o[1], 2))
                throw new Error('malformed RSA key(code:004)');
              return i.e = r(t, o[1]),
                i;
            },
            parsePublicPKCS8Hex: function (t) {
              var e = ht
                , n = e.getChildIdx
                , r = e.getV
                , i = {
                algparam: null
              }
                , o = n(t, 0);
              if (2 != o.length)
                throw new Error('outer DERSequence shall have 2 elements: ' + o.length);
              var s = o[0];
              if ('30' != t.substr(s, 2))
                throw new Error('malformed PKCS8 public key(code:001)');
              var a = n(t, s);
              if (2 != a.length)
                throw new Error('malformed PKCS8 public key(code:002)');
              if ('06' != t.substr(a[0], 2))
                throw new Error('malformed PKCS8 public key(code:003)');
              if (i.algoid = r(t, a[0]),
                '06' == t.substr(a[1], 2) ? i.algparam = r(t, a[1]) : '30' == t.substr(a[1], 2) && (i.algparam = {},
                  i.algparam.p = e.getVbyList(t, a[1], [0], '02'),
                  i.algparam.q = e.getVbyList(t, a[1], [1], '02'),
                  i.algparam.g = e.getVbyList(t, a[1], [2], '02')),
              '03' != t.substr(o[1], 2))
                throw new Error('malformed PKCS8 public key(code:004)');
              return i.key = r(t, o[1]).substr(2),
                i;
            }
          };
        }();
        re.getKey = function (t, e, n) {
          var r = (v = ht).getChildIdx
            , i = (v.getV,
            v.getVbyList)
            , o = ut.crypto
            , s = o.ECDSA
            , a = o.DSA
            , u = nt
            , c = Tt
            , l = re;
          if (void 0 !== u && t instanceof u)
            return t;
          if (void 0 !== s && t instanceof s)
            return t;
          if (void 0 !== a && t instanceof a)
            return t;
          if (void 0 !== t.curve && void 0 !== t.xy && void 0 === t.d)
            return new s({
              pub: t.xy,
              curve: t.curve
            });
          if (void 0 !== t.curve && void 0 !== t.d)
            return new s({
              prv: t.d,
              curve: t.curve
            });
          if (void 0 === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 === t.d)
            return (k = new u).setPublic(t.n, t.e),
              k;
          if (void 0 === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 !== t.d && void 0 !== t.p && void 0 !== t.q && void 0 !== t.dp && void 0 !== t.dq && void 0 !== t.co && void 0 === t.qi)
            return (k = new u).setPrivateEx(t.n, t.e, t.d, t.p, t.q, t.dp, t.dq, t.co),
              k;
          if (void 0 === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 !== t.d && void 0 === t.p)
            return (k = new u).setPrivate(t.n, t.e, t.d),
              k;
          if (void 0 !== t.p && void 0 !== t.q && void 0 !== t.g && void 0 !== t.y && void 0 === t.x)
            return (k = new a).setPublic(t.p, t.q, t.g, t.y),
              k;
          if (void 0 !== t.p && void 0 !== t.q && void 0 !== t.g && void 0 !== t.y && void 0 !== t.x)
            return (k = new a).setPrivate(t.p, t.q, t.g, t.y, t.x),
              k;
          if ('RSA' === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 === t.d)
            return (k = new u).setPublic(bt(t.n), bt(t.e)),
              k;
          if ('RSA' === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 !== t.d && void 0 !== t.p && void 0 !== t.q && void 0 !== t.dp && void 0 !== t.dq && void 0 !== t.qi)
            return (k = new u).setPrivateEx(bt(t.n), bt(t.e), bt(t.d), bt(t.p), bt(t.q), bt(t.dp), bt(t.dq), bt(t.qi)),
              k;
          if ('RSA' === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 !== t.d)
            return (k = new u).setPrivate(bt(t.n), bt(t.e), bt(t.d)),
              k;
          if ('EC' === t.kty && void 0 !== t.crv && void 0 !== t.x && void 0 !== t.y && void 0 === t.d) {
            var h = (F = new s({
              curve: t.crv
            })).ecparams.keycharlen
              , f = '04' + ('0000000000' + bt(t.x)).slice(-h) + ('0000000000' + bt(t.y)).slice(-h);
            return F.setPublicKeyHex(f),
              F;
          }
          if ('EC' === t.kty && void 0 !== t.crv && void 0 !== t.x && void 0 !== t.y && void 0 !== t.d) {
            h = (F = new s({
              curve: t.crv
            })).ecparams.keycharlen,
              f = '04' + ('0000000000' + bt(t.x)).slice(-h) + ('0000000000' + bt(t.y)).slice(-h);
            var p = ('0000000000' + bt(t.d)).slice(-h);
            return F.setPublicKeyHex(f),
              F.setPrivateKeyHex(p),
              F;
          }
          if ('pkcs5prv' === n) {
            var d, g = t, v = ht;
            if (9 === (d = r(g, 0)).length)
              (k = new u).readPKCS5PrvKeyHex(g);
            else if (6 === d.length)
              (k = new a).readPKCS5PrvKeyHex(g);
            else {
              if (!(d.length > 2 && '04' === g.substr(d[1], 2)))
                throw new Error('unsupported PKCS#1/5 hexadecimal key');
              (k = new s).readPKCS5PrvKeyHex(g);
            }
            return k;
          }
          if ('pkcs8prv' === n)
            return k = l.getKeyFromPlainPrivatePKCS8Hex(t);
          if ('pkcs8pub' === n)
            return l._getKeyFromPublicPKCS8Hex(t);
          if ('x509pub' === n)
            return ae.getPublicKeyFromCertHex(t);
          if (-1 != t.indexOf('-END CERTIFICATE-', 0) || -1 != t.indexOf('-END X509 CERTIFICATE-', 0) || -1 != t.indexOf('-END TRUSTED CERTIFICATE-', 0))
            return ae.getPublicKeyFromCertPEM(t);
          if (-1 != t.indexOf('-END PUBLIC KEY-')) {
            var m = Tt(t, 'PUBLIC KEY');
            return l._getKeyFromPublicPKCS8Hex(m);
          }
          if (-1 != t.indexOf('-END RSA PRIVATE KEY-') && -1 == t.indexOf('4,ENCRYPTED')) {
            var y = c(t, 'RSA PRIVATE KEY');
            return l.getKey(y, null, 'pkcs5prv');
          }
          if (-1 != t.indexOf('-END DSA PRIVATE KEY-') && -1 == t.indexOf('4,ENCRYPTED')) {
            var b = i(I = c(t, 'DSA PRIVATE KEY'), 0, [1], '02')
              , x = i(I, 0, [2], '02')
              , S = i(I, 0, [3], '02')
              , E = i(I, 0, [4], '02')
              , A = i(I, 0, [5], '02');
            return (k = new a).setPrivate(new w(b, 16), new w(x, 16), new w(S, 16), new w(E, 16), new w(A, 16)),
              k;
          }
          if (-1 != t.indexOf('-END EC PRIVATE KEY-') && -1 == t.indexOf('4,ENCRYPTED')) {
            y = c(t, 'EC PRIVATE KEY');
            return l.getKey(y, null, 'pkcs5prv');
          }
          if (-1 != t.indexOf('-END PRIVATE KEY-'))
            return l.getKeyFromPlainPrivatePKCS8PEM(t);
          if (-1 != t.indexOf('-END RSA PRIVATE KEY-') && -1 != t.indexOf('4,ENCRYPTED')) {
            var C = l.getDecryptedKeyHex(t, e)
              , P = new nt;
            return P.readPKCS5PrvKeyHex(C),
              P;
          }
          if (-1 != t.indexOf('-END EC PRIVATE KEY-') && -1 != t.indexOf('4,ENCRYPTED')) {
            var F, k = i(I = l.getDecryptedKeyHex(t, e), 0, [1], '04'), T = i(I, 0, [2, 0], '06'),
              _ = i(I, 0, [3, 0], '03').substr(2);
            if (void 0 === ut.crypto.OID.oidhex2name[T])
              throw new Error('undefined OID(hex) in KJUR.crypto.OID: ' + T);
            return (F = new s({
              curve: ut.crypto.OID.oidhex2name[T]
            })).setPublicKeyHex(_),
              F.setPrivateKeyHex(k),
              F.isPublic = !1,
              F;
          }
          if (-1 != t.indexOf('-END DSA PRIVATE KEY-') && -1 != t.indexOf('4,ENCRYPTED')) {
            var I;
            b = i(I = l.getDecryptedKeyHex(t, e), 0, [1], '02'),
              x = i(I, 0, [2], '02'),
              S = i(I, 0, [3], '02'),
              E = i(I, 0, [4], '02'),
              A = i(I, 0, [5], '02');
            return (k = new a).setPrivate(new w(b, 16), new w(x, 16), new w(S, 16), new w(E, 16), new w(A, 16)),
              k;
          }
          if (-1 != t.indexOf('-END ENCRYPTED PRIVATE KEY-'))
            return l.getKeyFromEncryptedPKCS8PEM(t, e);
          throw new Error('not supported argument');
        }
          ,
          re.generateKeypair = function (t, e) {
            if ('RSA' == t) {
              var n = e;
              (s = new nt).generate(n, '10001'),
                s.isPrivate = !0,
                s.isPublic = !0;
              var r = new nt
                , i = s.n.toString(16)
                , o = s.e.toString(16);
              return r.setPublic(i, o),
                r.isPrivate = !1,
                r.isPublic = !0,
                (a = {}).prvKeyObj = s,
                a.pubKeyObj = r,
                a;
            }
            if ('EC' == t) {
              var s, a, u = e, c = new ut.crypto.ECDSA({
                curve: u
              }).generateKeyPairHex();
              return (s = new ut.crypto.ECDSA({
                curve: u
              })).setPublicKeyHex(c.ecpubhex),
                s.setPrivateKeyHex(c.ecprvhex),
                s.isPrivate = !0,
                s.isPublic = !1,
                (r = new ut.crypto.ECDSA({
                  curve: u
                })).setPublicKeyHex(c.ecpubhex),
                r.isPrivate = !1,
                r.isPublic = !0,
                (a = {}).prvKeyObj = s,
                a.pubKeyObj = r,
                a;
            }
            throw new Error('unknown algorithm: ' + t);
          }
          ,
          re.getPEM = function (t, e, n, r, i, o) {
            var s = ut
              , a = s.asn1
              , u = a.DERObjectIdentifier
              , c = a.DERInteger
              , l = a.ASN1Util.newObject
              , h = a.x509.SubjectPublicKeyInfo
              , f = s.crypto
              , p = f.DSA
              , d = f.ECDSA
              , g = nt;

            function v(t) {
              return l({
                seq: [{
                  int: 0
                }, {
                  int: {
                    bigint: t.n
                  }
                }, {
                  int: t.e
                }, {
                  int: {
                    bigint: t.d
                  }
                }, {
                  int: {
                    bigint: t.p
                  }
                }, {
                  int: {
                    bigint: t.q
                  }
                }, {
                  int: {
                    bigint: t.dmp1
                  }
                }, {
                  int: {
                    bigint: t.dmq1
                  }
                }, {
                  int: {
                    bigint: t.coeff
                  }
                }]
              });
            }

            function m(t) {
              return l({
                seq: [{
                  int: 1
                }, {
                  octstr: {
                    hex: t.prvKeyHex
                  }
                }, {
                  tag: ['a0', !0, {
                    oid: {
                      name: t.curveName
                    }
                  }]
                }, {
                  tag: ['a1', !0, {
                    bitstr: {
                      hex: '00' + t.pubKeyHex
                    }
                  }]
                }]
              });
            }

            function y(t) {
              return l({
                seq: [{
                  int: 0
                }, {
                  int: {
                    bigint: t.p
                  }
                }, {
                  int: {
                    bigint: t.q
                  }
                }, {
                  int: {
                    bigint: t.g
                  }
                }, {
                  int: {
                    bigint: t.y
                  }
                }, {
                  int: {
                    bigint: t.x
                  }
                }]
              });
            }

            if ((void 0 !== g && t instanceof g || void 0 !== p && t instanceof p || void 0 !== d && t instanceof d) && 1 == t.isPublic && (void 0 === e || 'PKCS8PUB' == e))
              return kt(S = new h(t).tohex(), 'PUBLIC KEY');
            if ('PKCS1PRV' == e && void 0 !== g && t instanceof g && (void 0 === n || null == n) && 1 == t.isPrivate)
              return kt(S = v(t).tohex(), 'RSA PRIVATE KEY');
            if ('PKCS1PRV' == e && void 0 !== d && t instanceof d && (void 0 === n || null == n) && 1 == t.isPrivate) {
              var b = new u({
                name: t.curveName
              }).tohex()
                , x = m(t).tohex()
                , w = '';
              return w += kt(b, 'EC PARAMETERS'),
                w += kt(x, 'EC PRIVATE KEY');
            }
            if ('PKCS1PRV' == e && void 0 !== p && t instanceof p && (void 0 === n || null == n) && 1 == t.isPrivate)
              return kt(S = y(t).tohex(), 'DSA PRIVATE KEY');
            if ('PKCS5PRV' == e && void 0 !== g && t instanceof g && void 0 !== n && null != n && 1 == t.isPrivate) {
              var S = v(t).tohex();
              return void 0 === r && (r = 'DES-EDE3-CBC'),
                this.getEncryptedPKCS5PEMFromPrvKeyHex('RSA', S, n, r, o);
            }
            if ('PKCS5PRV' == e && void 0 !== d && t instanceof d && void 0 !== n && null != n && 1 == t.isPrivate) {
              S = m(t).tohex();
              return void 0 === r && (r = 'DES-EDE3-CBC'),
                this.getEncryptedPKCS5PEMFromPrvKeyHex('EC', S, n, r, o);
            }
            if ('PKCS5PRV' == e && void 0 !== p && t instanceof p && void 0 !== n && null != n && 1 == t.isPrivate) {
              S = y(t).tohex();
              return void 0 === r && (r = 'DES-EDE3-CBC'),
                this.getEncryptedPKCS5PEMFromPrvKeyHex('DSA', S, n, r, o);
            }
            var E = function (t, e) {
              if ('string' == typeof e)
                return re.getEncryptedPKCS8PEM(t, e);
              if ('object' == typeof e && null != ee(e, 'passcode')) {
                var n = JSON.parse(JSON.stringify(e))
                  , r = n.passcode;
                return delete n.passcode,
                  re.getEncryptedPKCS8PEM(t, r, n);
              }
            };
            if ('PKCS8PRV' == e && null != g && t instanceof g && 1 == t.isPrivate) {
              var A = v(t).tohex();
              S = l({
                seq: [{
                  int: 0
                }, {
                  seq: [{
                    oid: {
                      name: 'rsaEncryption'
                    }
                  }, {
                    null: !0
                  }]
                }, {
                  octstr: {
                    hex: A
                  }
                }]
              }).tohex();
              return void 0 === n || null == n ? kt(S, 'PRIVATE KEY') : E(S, n);
            }
            if ('PKCS8PRV' == e && void 0 !== d && t instanceof d && 1 == t.isPrivate) {
              var C = {
                seq: [{
                  int: 1
                }, {
                  octstr: {
                    hex: t.prvKeyHex
                  }
                }]
              };
              'string' == typeof t.pubKeyHex && C.seq.push({
                tag: ['a1', !0, {
                  bitstr: {
                    hex: '00' + t.pubKeyHex
                  }
                }]
              });
              A = new l(C).tohex(),
                S = l({
                  seq: [{
                    int: 0
                  }, {
                    seq: [{
                      oid: {
                        name: 'ecPublicKey'
                      }
                    }, {
                      oid: {
                        name: t.curveName
                      }
                    }]
                  }, {
                    octstr: {
                      hex: A
                    }
                  }]
                }).tohex();
              return void 0 === n || null == n ? kt(S, 'PRIVATE KEY') : E(S, n);
            }
            if ('PKCS8PRV' == e && void 0 !== p && t instanceof p && 1 == t.isPrivate) {
              A = new c({
                bigint: t.x
              }).tohex(),
                S = l({
                  seq: [{
                    int: 0
                  }, {
                    seq: [{
                      oid: {
                        name: 'dsa'
                      }
                    }, {
                      seq: [{
                        int: {
                          bigint: t.p
                        }
                      }, {
                        int: {
                          bigint: t.q
                        }
                      }, {
                        int: {
                          bigint: t.g
                        }
                      }]
                    }]
                  }, {
                    octstr: {
                      hex: A
                    }
                  }]
                }).tohex();
              return void 0 === n || null == n ? kt(S, 'PRIVATE KEY') : E(S, n);
            }
            throw new Error('unsupported object nor format');
          }
          ,
          re.getKeyFromCSRPEM = function (t) {
            var e = Tt(t, 'CERTIFICATE REQUEST');
            return re.getKeyFromCSRHex(e);
          }
          ,
          re.getKeyFromCSRHex = function (t) {
            var e = re.parseCSRHex(t);
            return re.getKey(e.p8pubkeyhex, null, 'pkcs8pub');
          }
          ,
          re.parseCSRHex = function (t) {
            var e = ht
              , n = e.getChildIdx
              , r = e.getTLV
              , i = {}
              , o = t;
            if ('30' != o.substr(0, 2))
              throw new Error('malformed CSR(code:001)');
            var s = n(o, 0);
            if (s.length < 1)
              throw new Error('malformed CSR(code:002)');
            if ('30' != o.substr(s[0], 2))
              throw new Error('malformed CSR(code:003)');
            var a = n(o, s[0]);
            if (a.length < 3)
              throw new Error('malformed CSR(code:004)');
            return i.p8pubkeyhex = r(o, a[2]),
              i;
          }
          ,
          re.getKeyID = function (t) {
            var e = re
              , n = ht;
            'string' == typeof t && -1 != t.indexOf('BEGIN ') && (t = e.getKey(t));
            var r = Tt(e.getPEM(t))
              , i = n.getIdxbyList(r, 0, [1])
              , o = n.getV(r, i).substring(2);
            return ut.crypto.Util.hashHex(o, 'sha1');
          }
          ,
          re.getJWK = function (t, e, n, r, i) {
            var o, s, a = {}, u = ut.crypto.Util.hashHex;
            if ('string' == typeof t)
              o = re.getKey(t),
              -1 != t.indexOf('CERTIFICATE') && (s = Tt(t));
            else {
              if ('object' != typeof t)
                throw new Error('unsupported keyinfo type');
              t instanceof ae ? (o = t.getPublicKey(),
                s = t.hex) : o = t;
            }
            if (o instanceof nt && o.isPrivate)
              a.kty = 'RSA',
                a.n = yt(o.n.toString(16)),
                a.e = yt(o.e.toString(16)),
                a.d = yt(o.d.toString(16)),
                a.p = yt(o.p.toString(16)),
                a.q = yt(o.q.toString(16)),
                a.dp = yt(o.dmp1.toString(16)),
                a.dq = yt(o.dmq1.toString(16)),
                a.qi = yt(o.coeff.toString(16));
            else if (o instanceof nt && o.isPublic)
              a.kty = 'RSA',
                a.n = yt(o.n.toString(16)),
                a.e = yt(o.e.toString(16));
            else if (o instanceof ut.crypto.ECDSA && o.isPrivate) {
              if ('P-256' !== (l = o.getShortNISTPCurveName()) && 'P-384' !== l && 'P-521' !== l)
                throw new Error('unsupported curve name for JWT: ' + l);
              var c = o.getPublicKeyXYHex();
              a.kty = 'EC',
                a.crv = l,
                a.x = yt(c.x),
                a.y = yt(c.y),
                a.d = yt(o.prvKeyHex);
            } else if (o instanceof ut.crypto.ECDSA && o.isPublic) {
              var l;
              if ('P-256' !== (l = o.getShortNISTPCurveName()) && 'P-384' !== l && 'P-521' !== l)
                throw new Error('unsupported curve name for JWT: ' + l);
              c = o.getPublicKeyXYHex();
              a.kty = 'EC',
                a.crv = l,
                a.x = yt(c.x),
                a.y = yt(c.y);
            }
            if (null == a.kty)
              throw new Error('unsupported keyinfo');
            return o.isPrivate || 1 == e || (a.kid = ut.jws.JWS.getJWKthumbprint(a)),
            null != s && 1 != n && (a.x5c = [y(s)]),
            null != s && 1 != r && (a.x5t = vt(y(u(s, 'sha1')))),
            null != s && 1 != i && (a['x5t#S256'] = vt(y(u(s, 'sha256')))),
              a;
          }
          ,
          re.getJWKFromKey = function (t) {
            return re.getJWK(t, !0, !0, !0, !0);
          }
          ,
          nt.getPosArrayOfChildrenFromHex = function (t) {
            return ht.getChildIdx(t, 0);
          }
          ,
          nt.getHexValueArrayOfChildrenFromHex = function (t) {
            var e, n = ht.getV, r = n(t, (e = nt.getPosArrayOfChildrenFromHex(t))[0]), i = n(t, e[1]), o = n(t, e[2]),
              s = n(t, e[3]), a = n(t, e[4]), u = n(t, e[5]), c = n(t, e[6]), l = n(t, e[7]), h = n(t, e[8]);
            return (e = new Array).push(r, i, o, s, a, u, c, l, h),
              e;
          }
          ,
          nt.prototype.readPrivateKeyFromPEMString = function (t) {
            var e = Tt(t)
              , n = nt.getHexValueArrayOfChildrenFromHex(e);
            this.setPrivateEx(n[1], n[2], n[3], n[4], n[5], n[6], n[7], n[8]);
          }
          ,
          nt.prototype.readPKCS5PrvKeyHex = function (t) {
            var e = nt.getHexValueArrayOfChildrenFromHex(t);
            this.setPrivateEx(e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]);
          }
          ,
          nt.prototype.readPKCS8PrvKeyHex = function (t) {
            var e, n, r, i, o, s, a, u, c = ht, l = c.getVbyListEx;
            if (!1 === c.isASN1HEX(t))
              throw new Error('not ASN.1 hex string');
            try {
              e = l(t, 0, [2, 0, 1], '02'),
                n = l(t, 0, [2, 0, 2], '02'),
                r = l(t, 0, [2, 0, 3], '02'),
                i = l(t, 0, [2, 0, 4], '02'),
                o = l(t, 0, [2, 0, 5], '02'),
                s = l(t, 0, [2, 0, 6], '02'),
                a = l(t, 0, [2, 0, 7], '02'),
                u = l(t, 0, [2, 0, 8], '02');
            } catch (t) {
              throw new Error('malformed PKCS#8 plain RSA private key');
            }
            this.setPrivateEx(e, n, r, i, o, s, a, u);
          }
          ,
          nt.prototype.readPKCS5PubKeyHex = function (t) {
            var e = ht
              , n = e.getV;
            if (!1 === e.isASN1HEX(t))
              throw new Error('keyHex is not ASN.1 hex string');
            var r = e.getChildIdx(t, 0);
            if (2 !== r.length || '02' !== t.substr(r[0], 2) || '02' !== t.substr(r[1], 2))
              throw new Error('wrong hex for PKCS#5 public key');
            var i = n(t, r[0])
              , o = n(t, r[1]);
            this.setPublic(i, o);
          }
          ,
          nt.prototype.readPKCS8PubKeyHex = function (t) {
            var e = ht;
            if (!1 === e.isASN1HEX(t))
              throw new Error('not ASN.1 hex string');
            if ('06092a864886f70d010101' !== e.getTLVbyListEx(t, 0, [0, 0]))
              throw new Error('not PKCS8 RSA public key');
            var n = e.getTLVbyListEx(t, 0, [1, 0]);
            this.readPKCS5PubKeyHex(n);
          }
          ,
          nt.prototype.readCertPubKeyHex = function (t, e) {
            var n, r;
            (n = new ae).readCertHex(t),
              r = n.getPublicKeyHex(),
              this.readPKCS8PubKeyHex(r);
          }
        ;
        new RegExp('[^0-9a-f]', 'gi');

        function ie(t, e) {
          for (var n = '', r = e / 4 - t.length, i = 0; i < r; i++)
            n += '0';
          return n + t;
        }

        function oe(t, e, n) {
          for (var r = '', i = 0; r.length < e;)
            r += Et(n(At(t + String.fromCharCode.apply(String, [(4278190080 & i) >> 24, (16711680 & i) >> 16, (65280 & i) >> 8, 255 & i])))),
              i += 1;
          return r;
        }

        function se(t) {
          for (var e in ut.crypto.Util.DIGESTINFOHEAD) {
            var n = ut.crypto.Util.DIGESTINFOHEAD[e]
              , r = n.length;
            if (t.substring(0, r) == n)
              return [e, t.substring(r)];
          }
          return [];
        }

        function ae(t) {
          var e, n = ht, r = n.getChildIdx, i = n.getV, o = (n.dump,
              n.parse), s = n.getTLV, a = n.getVbyList, u = n.getVbyListEx, c = n.getTLVbyList, l = n.getTLVbyListEx,
            h = n.getIdxbyList, f = n.getIdxbyListEx, p = n.getVidx, d = n.getInt, g = n.oidname, v = n.hextooidstr,
            m = Tt, y = Error;
          try {
            e = ut.asn1.x509.AlgorithmIdentifier.PSSNAME2ASN1TLV;
          } catch (t) {
          }
          this.HEX2STAG = {
            '0c': 'utf8',
            13: 'prn',
            16: 'ia5',
            '1a': 'vis',
            '1e': 'bmp'
          },
            this.hex = null,
            this.version = 0,
            this.foffset = 0,
            this.aExtInfo = null,
            this.getVersion = function () {
              if (null === this.hex || 0 !== this.version)
                return this.version;
              var t = c(this.hex, 0, [0, 0]);
              if ('a0' == t.substr(0, 2)) {
                var e = c(t, 0, [0])
                  , n = d(e, 0);
                if (n < 0 || 2 < n)
                  throw new Error('malformed version field');
                return this.version = n + 1,
                  this.version;
              }
              return this.version = 1,
                this.foffset = -1,
                1;
            }
            ,
            this.getSerialNumberHex = function () {
              return u(this.hex, 0, [0, 0], '02');
            }
            ,
            this.getSignatureAlgorithmField = function () {
              var t = l(this.hex, 0, [0, 1]);
              return this.getAlgorithmIdentifierName(t);
            }
            ,
            this.getAlgorithmIdentifierName = function (t) {
              for (var n in e)
                if (t === e[n])
                  return n;
              return g(u(t, 0, [0], '06'));
            }
            ,
            this.getIssuer = function (t, e) {
              return this.getX500Name(this.getIssuerHex(), t, e);
            }
            ,
            this.getIssuerHex = function () {
              return c(this.hex, 0, [0, 3 + this.foffset], '30');
            }
            ,
            this.getIssuerString = function () {
              return this.getIssuer().str;
            }
            ,
            this.getSubject = function (t, e) {
              return this.getX500Name(this.getSubjectHex(), t, e);
            }
            ,
            this.getSubjectHex = function () {
              return c(this.hex, 0, [0, 5 + this.foffset], '30');
            }
            ,
            this.getSubjectString = function () {
              return this.getSubject().str;
            }
            ,
            this.getNotBefore = function () {
              var t = a(this.hex, 0, [0, 4 + this.foffset, 0]);
              return t = t.replace(/(..)/g, '%$1'),
                t = decodeURIComponent(t);
            }
            ,
            this.getNotAfter = function () {
              var t = a(this.hex, 0, [0, 4 + this.foffset, 1]);
              return t = t.replace(/(..)/g, '%$1'),
                t = decodeURIComponent(t);
            }
            ,
            this.getPublicKeyHex = function () {
              return this.getSPKI();
            }
            ,
            this.getSPKI = function () {
              return c(this.hex, 0, [0, 6 + this.foffset], '30');
            }
            ,
            this.getSPKIValue = function () {
              var t = this.getSPKI();
              return null == t ? null : a(t, 0, [1], '03', !0);
            }
            ,
            this.getPublicKeyIdx = function () {
              return h(this.hex, 0, [0, 6 + this.foffset], '30');
            }
            ,
            this.getPublicKeyContentIdx = function () {
              var t = this.getPublicKeyIdx();
              return h(this.hex, t, [1, 0], '30');
            }
            ,
            this.getPublicKey = function () {
              return re.getKey(this.getPublicKeyHex(), null, 'pkcs8pub');
            }
            ,
            this.getSignatureAlgorithmName = function () {
              var t = c(this.hex, 0, [1], '30');
              return this.getAlgorithmIdentifierName(t);
            }
            ,
            this.getSignatureValueHex = function () {
              return a(this.hex, 0, [2], '03', !0);
            }
            ,
            this.verifySignature = function (t) {
              var e = this.getSignatureAlgorithmField()
                , n = this.getSignatureValueHex()
                , r = c(this.hex, 0, [0], '30')
                , i = new ut.crypto.Signature({
                alg: e
              });
              return i.init(t),
                i.updateHex(r),
                i.verify(n);
            }
            ,
            this.parseExt = function (t) {
              var e, o, s;
              if (void 0 === t) {
                if (s = this.hex,
                3 !== this.version)
                  return -1;
                e = h(s, 0, [0, 7, 0], '30'),
                  o = r(s, e);
              } else {
                s = Tt(t);
                var u = h(s, 0, [0, 3, 0, 0], '06');
                if ('2a864886f70d01090e' != i(s, u))
                  return void (this.aExtInfo = new Array);
                e = h(s, 0, [0, 3, 0, 1, 0], '30'),
                  o = r(s, e),
                  this.hex = s;
              }
              this.aExtInfo = new Array;
              for (var c = 0; c < o.length; c++) {
                var l = {
                  critical: !1
                }
                  , f = 0;
                3 === r(s, o[c]).length && (l.critical = !0,
                  f = 1),
                  l.oid = n.hextooidstr(a(s, o[c], [0], '06'));
                var d = h(s, o[c], [1 + f]);
                l.vidx = p(s, d),
                  this.aExtInfo.push(l);
              }
            }
            ,
            this.getExtInfo = function (t) {
              var e = this.aExtInfo
                , n = t;
              if (t.match(/^[0-9.]+$/) || (n = ut.asn1.x509.OID.name2oid(t)),
              '' !== n)
                for (var r = 0; r < e.length; r++)
                  if (e[r].oid === n)
                    return e[r];
            }
            ,
            this.getCriticalExtV = function (t, e, n) {
              if (null != e)
                return [e, n];
              var r = this.getExtInfo(t);
              return null == r ? [null, null] : [s(this.hex, r.vidx), r.critical];
            }
            ,
            this.getExtBasicConstraints = function (t, e) {
              if (void 0 === t && void 0 === e) {
                var n = this.getExtInfo('basicConstraints');
                if (void 0 === n)
                  return;
                t = s(this.hex, n.vidx),
                  e = n.critical;
              }
              var r = {
                extname: 'basicConstraints'
              };
              if (e && (r.critical = !0),
              '3000' === t)
                return r;
              if ('30030101ff' === t)
                return r.cA = !0,
                  r;
              if ('30060101ff02' === t.substr(0, 12)) {
                var o = i(t, 10)
                  , a = parseInt(o, 16);
                return r.cA = !0,
                  r.pathLen = a,
                  r;
              }
              throw new Error('hExtV parse error: ' + t);
            }
            ,
            this.getExtNameConstraints = function (t, e) {
              var n = this.getCriticalExtV('nameConstraints', t, e);
              if (t = n[0],
                e = n[1],
              null != t) {
                var i = {
                  extname: 'nameConstraints'
                };
                e && (i.critical = !0);
                for (var o = r(t, 0), a = 0; a < o.length; a++) {
                  for (var u = [], c = r(t, o[a]), l = 0; l < c.length; l++) {
                    var h = s(t, c[l])
                      , f = this.getGeneralSubtree(h);
                    u.push(f);
                  }
                  var p = t.substr(o[a], 2);
                  'a0' == p ? i.permit = u : 'a1' == p && (i.exclude = u);
                }
                return i;
              }
            }
            ,
            this.getGeneralSubtree = function (t) {
              var e = r(t, 0)
                , n = e.length;
              if (n < 1 || 2 < n)
                throw new Error('wrong num elements');
              for (var o = this.getGeneralName(s(t, e[0])), a = 1; a < n; a++) {
                var u = t.substr(e[a], 2)
                  , c = i(t, e[a])
                  , l = parseInt(c, 16);
                '80' == u && (o.min = l),
                '81' == u && (o.max = l);
              }
              return o;
            }
            ,
            this.getExtKeyUsage = function (t, e) {
              var n = this.getCriticalExtV('keyUsage', t, e);
              if (t = n[0],
                e = n[1],
              null != t) {
                var r = {
                  extname: 'keyUsage'
                };
                return e && (r.critical = !0),
                  r.names = this.getExtKeyUsageString(t).split(','),
                  r;
              }
            }
            ,
            this.getExtKeyUsageBin = function (t) {
              if (void 0 === t) {
                var e = this.getExtInfo('keyUsage');
                if (void 0 === e)
                  return '';
                t = s(this.hex, e.vidx);
              }
              if (8 != t.length && 10 != t.length)
                throw new Error('malformed key usage value: ' + t);
              var n = '000000000000000' + parseInt(t.substr(6), 16).toString(2);
              return 8 == t.length && (n = n.slice(-8)),
              10 == t.length && (n = n.slice(-16)),
              '' == (n = n.replace(/0+$/, '')) && (n = '0'),
                n;
            }
            ,
            this.getExtKeyUsageString = function (t) {
              for (var e = this.getExtKeyUsageBin(t), n = new Array, r = 0; r < e.length; r++)
                '1' == e.substr(r, 1) && n.push(ae.KEYUSAGE_NAME[r]);
              return n.join(',');
            }
            ,
            this.getExtSubjectKeyIdentifier = function (t, e) {
              if (void 0 === t && void 0 === e) {
                var n = this.getExtInfo('subjectKeyIdentifier');
                if (void 0 === n)
                  return;
                t = s(this.hex, n.vidx),
                  e = n.critical;
              }
              var r = {
                extname: 'subjectKeyIdentifier'
              };
              e && (r.critical = !0);
              var o = i(t, 0);
              return r.kid = {
                hex: o
              },
                r;
            }
            ,
            this.getExtAuthorityKeyIdentifier = function (t, e) {
              if (void 0 === t && void 0 === e) {
                var n = this.getExtInfo('authorityKeyIdentifier');
                if (void 0 === n)
                  return;
                t = s(this.hex, n.vidx),
                  e = n.critical;
              }
              var o = {
                extname: 'authorityKeyIdentifier'
              };
              e && (o.critical = !0);
              for (var a = r(t, 0), u = 0; u < a.length; u++) {
                var c = t.substr(a[u], 2);
                if ('80' === c && (o.kid = {
                  hex: i(t, a[u])
                }),
                'a1' === c) {
                  var l = s(t, a[u])
                    , h = this.getGeneralNames(l);
                  o.issuer = h[0].dn;
                }
                '82' === c && (o.sn = {
                  hex: i(t, a[u])
                });
              }
              return o;
            }
            ,
            this.getExtExtKeyUsage = function (t, e) {
              if (void 0 === t && void 0 === e) {
                var n = this.getExtInfo('extKeyUsage');
                if (void 0 === n)
                  return;
                t = s(this.hex, n.vidx),
                  e = n.critical;
              }
              var o = {
                extname: 'extKeyUsage',
                array: []
              };
              e && (o.critical = !0);
              for (var a = r(t, 0), u = 0; u < a.length; u++)
                o.array.push(g(i(t, a[u])));
              return o;
            }
            ,
            this.getExtExtKeyUsageName = function () {
              var t = this.getExtInfo('extKeyUsage');
              if (void 0 === t)
                return t;
              var e = new Array
                , n = s(this.hex, t.vidx);
              if ('' === n)
                return e;
              for (var o = r(n, 0), a = 0; a < o.length; a++)
                e.push(g(i(n, o[a])));
              return e;
            }
            ,
            this.getExtSubjectAltName = function (t, e) {
              if (void 0 === t && void 0 === e) {
                var n = this.getExtInfo('subjectAltName');
                if (void 0 === n)
                  return;
                t = s(this.hex, n.vidx),
                  e = n.critical;
              }
              var r = {
                extname: 'subjectAltName',
                array: []
              };
              return e && (r.critical = !0),
                r.array = this.getGeneralNames(t),
                r;
            }
            ,
            this.getExtIssuerAltName = function (t, e) {
              if (void 0 === t && void 0 === e) {
                var n = this.getExtInfo('issuerAltName');
                if (void 0 === n)
                  return;
                t = s(this.hex, n.vidx),
                  e = n.critical;
              }
              var r = {
                extname: 'issuerAltName',
                array: []
              };
              return e && (r.critical = !0),
                r.array = this.getGeneralNames(t),
                r;
            }
            ,
            this.getGeneralNames = function (t) {
              for (var e = r(t, 0), n = [], i = 0; i < e.length; i++) {
                var o = this.getGeneralName(s(t, e[i]));
                void 0 !== o && n.push(o);
              }
              return n;
            }
            ,
            this.getGeneralName = function (t) {
              var e = t.substr(0, 2)
                , n = i(t, 0)
                , r = Et(n);
              return '81' == e ? {
                rfc822: r
              } : '82' == e ? {
                dns: r
              } : '86' == e ? {
                uri: r
              } : '87' == e ? {
                ip: Bt(n)
              } : 'a4' == e ? {
                dn: this.getX500Name(n)
              } : 'a0' == e ? {
                other: this.getOtherName(t)
              } : void 0;
            }
            ,
            this.getExtSubjectAltName2 = function () {
              var t, e, n, o = this.getExtInfo('subjectAltName');
              if (void 0 === o)
                return o;
              for (var a = new Array, u = s(this.hex, o.vidx), c = r(u, 0), l = 0; l < c.length; l++)
                n = u.substr(c[l], 2),
                  t = i(u, c[l]),
                '81' === n && (e = wt(t),
                  a.push(['MAIL', e])),
                '82' === n && (e = wt(t),
                  a.push(['DNS', e])),
                '84' === n && (e = ae.hex2dn(t, 0),
                  a.push(['DN', e])),
                '86' === n && (e = wt(t),
                  a.push(['URI', e])),
                '87' === n && (e = Bt(t),
                  a.push(['IP', e]));
              return a;
            }
            ,
            this.getExtCRLDistributionPoints = function (t, e) {
              if (void 0 === t && void 0 === e) {
                var n = this.getExtInfo('cRLDistributionPoints');
                if (void 0 === n)
                  return;
                t = s(this.hex, n.vidx),
                  e = n.critical;
              }
              var i = {
                extname: 'cRLDistributionPoints',
                array: []
              };
              e && (i.critical = !0);
              for (var o = r(t, 0), a = 0; a < o.length; a++) {
                var u = s(t, o[a]);
                i.array.push(this.getDistributionPoint(u));
              }
              return i;
            }
            ,
            this.getDistributionPoint = function (t) {
              for (var e = {}, n = r(t, 0), i = 0; i < n.length; i++) {
                var o = t.substr(n[i], 2)
                  , a = s(t, n[i]);
                'a0' == o && (e.dpname = this.getDistributionPointName(a));
              }
              return e;
            }
            ,
            this.getDistributionPointName = function (t) {
              for (var e = {}, n = r(t, 0), i = 0; i < n.length; i++) {
                var o = t.substr(n[i], 2)
                  , a = s(t, n[i]);
                'a0' == o && (e.full = this.getGeneralNames(a));
              }
              return e;
            }
            ,
            this.getExtCRLDistributionPointsURI = function () {
              var t = this.getExtCRLDistributionPoints();
              if (null == t)
                return t;
              for (var e = t.array, n = [], r = 0; r < e.length; r++)
                try {
                  null != e[r].dpname.full[0].uri && n.push(e[r].dpname.full[0].uri);
                } catch (t) {
                }
              return n;
            }
            ,
            this.getExtAIAInfo = function () {
              var t = this.getExtInfo('authorityInfoAccess');
              if (void 0 === t)
                return t;
              for (var e = {
                ocsp: [],
                caissuer: []
              }, n = r(this.hex, t.vidx), i = 0; i < n.length; i++) {
                var o = a(this.hex, n[i], [0], '06')
                  , s = a(this.hex, n[i], [1], '86');
                '2b06010505073001' === o && e.ocsp.push(wt(s)),
                '2b06010505073002' === o && e.caissuer.push(wt(s));
              }
              return e;
            }
            ,
            this.getExtAuthorityInfoAccess = function (t, e) {
              if (void 0 === t && void 0 === e) {
                var n = this.getExtInfo('authorityInfoAccess');
                if (void 0 === n)
                  return;
                t = s(this.hex, n.vidx),
                  e = n.critical;
              }
              var i = {
                extname: 'authorityInfoAccess',
                array: []
              };
              e && (i.critical = !0);
              for (var o = r(t, 0), c = 0; c < o.length; c++) {
                var l = u(t, o[c], [0], '06')
                  , h = wt(a(t, o[c], [1], '86'));
                if ('2b06010505073001' == l)
                  i.array.push({
                    ocsp: h
                  });
                else {
                  if ('2b06010505073002' != l)
                    throw new Error('unknown method: ' + l);
                  i.array.push({
                    caissuer: h
                  });
                }
              }
              return i;
            }
            ,
            this.getExtCertificatePolicies = function (t, e) {
              if (void 0 === t && void 0 === e) {
                var n = this.getExtInfo('certificatePolicies');
                if (void 0 === n)
                  return;
                t = s(this.hex, n.vidx),
                  e = n.critical;
              }
              var i = {
                extname: 'certificatePolicies',
                array: []
              };
              e && (i.critical = !0);
              for (var o = r(t, 0), a = 0; a < o.length; a++) {
                var u = s(t, o[a])
                  , c = this.getPolicyInformation(u);
                i.array.push(c);
              }
              return i;
            }
            ,
            this.getPolicyInformation = function (t) {
              var e = {}
                , n = a(t, 0, [0], '06');
              e.policyoid = g(n);
              var i = f(t, 0, [1], '30');
              if (-1 != i) {
                e.array = [];
                for (var o = r(t, i), u = 0; u < o.length; u++) {
                  var c = s(t, o[u])
                    , l = this.getPolicyQualifierInfo(c);
                  e.array.push(l);
                }
              }
              return e;
            }
            ,
            this.getOtherName = function (t) {
              var e = {}
                , n = r(t, 0)
                , i = a(t, n[0], [], '06')
                , s = a(t, n[1], []);
              return e.oid = g(i),
                e.value = o(s),
                e;
            }
            ,
            this.getPolicyQualifierInfo = function (t) {
              var e = {}
                , n = a(t, 0, [0], '06');
              if ('2b06010505070201' === n) {
                var r = u(t, 0, [1], '16');
                e.cps = Et(r);
              } else if ('2b06010505070202' === n) {
                var i = c(t, 0, [1], '30');
                e.unotice = this.getUserNotice(i);
              }
              return e;
            }
            ,
            this.getUserNotice = function (t) {
              var e = null;
              try {
                return e = n.parse(t),
                  this._asn1ToUnotice(e);
              } catch (t) {
                return;
              }
            }
            ,
            this._asn1ToUnotice = function (t) {
              try {
                for (var e = {}, n = ee(t, 'seq'), r = 0; r < n.length; r++) {
                  var i = this._asn1ToNoticeRef(n[r]);
                  null != i && (e.noticeref = i);
                  var o = this.asn1ToDisplayText(n[r]);
                  null != o && (e.exptext = o);
                }
                return Object.keys(e).length > 0 ? e : void 0;
              } catch (t) {
                return;
              }
            }
            ,
            this._asn1ToNoticeRef = function (t) {
              try {
                for (var e = {}, n = ee(t, 'seq'), r = 0; r < n.length; r++) {
                  var i = this._asn1ToNoticeNum(n[r]);
                  null != i && (e.noticenum = i);
                  var o = this.asn1ToDisplayText(n[r]);
                  null != o && (e.org = o);
                }
                return Object.keys(e).length > 0 ? e : void 0;
              } catch (t) {
                return;
              }
            }
            ,
            this._asn1ToNoticeNum = function (t) {
              try {
                for (var e = ee(t, 'seq'), n = [], r = 0; r < e.length; r++) {
                  var i = e[r];
                  n.push(parseInt(ee(i, 'int.hex'), 16));
                }
                return n;
              } catch (t) {
                return;
              }
            }
            ,
            this.getDisplayText = function (t) {
              var e = {};
              return e.type = {
                '0c': 'utf8',
                16: 'ia5',
                '1a': 'vis',
                '1e': 'bmp'
              }[t.substr(0, 2)],
                e.str = Et(i(t, 0)),
                e;
            }
            ,
            this.asn1ToDisplayText = function (t) {
              return null != t.utf8str ? {
                type: 'utf8',
                str: t.utf8str.str
              } : null != t.ia5str ? {
                type: 'ia5',
                str: t.ia5str.str
              } : null != t.visstr ? {
                type: 'vis',
                str: t.visstr.str
              } : null != t.bmpstr ? {
                type: 'bmp',
                str: t.bmpstr.str
              } : null != t.prnstr ? {
                type: 'prn',
                str: t.prnstr.str
              } : void 0;
            }
            ,
            this.getExtPolicyMappings = function (t, e) {
              var n = this.getCriticalExtV('policyMappings', t, e);
              if (t = n[0],
                e = n[1],
              null != t) {
                var r = {
                  extname: 'policyMappings'
                };
                e && (r.critical = !0);
                try {
                  for (var i = o(t).seq, s = [], a = 0; a < i.length; a++) {
                    var u = i[a].seq;
                    s.push([u[0].oid, u[1].oid]);
                  }
                  r.array = s;
                } catch (t) {
                  throw new y('malformed policyMappings');
                }
                return r;
              }
            }
            ,
            this.getExtPolicyConstraints = function (t, e) {
              var n = this.getCriticalExtV('policyConstraints', t, e);
              if (t = n[0],
                e = n[1],
              null != t) {
                var r = {
                  extname: 'policyConstraints'
                };
                e && (r.critical = !0);
                var i = o(t);
                try {
                  for (var s = i.seq, a = 0; a < s.length; a++) {
                    var u = s[a].tag;
                    0 == u.explicit && ('80' == u.tag && (r.reqexp = parseInt(u.hex, 16)),
                    '81' == u.tag && (r.inhibit = parseInt(u.hex, 16)));
                  }
                } catch (t) {
                  return new y('malformed policyConstraints value');
                }
                return r;
              }
            }
            ,
            this.getExtInhibitAnyPolicy = function (t, e) {
              var n = this.getCriticalExtV('inhibitAnyPolicy', t, e);
              if (t = n[0],
                e = n[1],
              null != t) {
                var r = {
                  extname: 'inhibitAnyPolicy'
                };
                e && (r.critical = !0);
                var i = d(t, 0);
                return -1 == i ? new y('wrong value') : (r.skip = i,
                  r);
              }
            }
            ,
            this.getExtCRLNumber = function (t, e) {
              var n = {
                extname: 'cRLNumber'
              };
              if (e && (n.critical = !0),
              '02' == t.substr(0, 2))
                return n.num = {
                  hex: i(t, 0)
                },
                  n;
              throw new y('hExtV parse error: ' + t);
            }
            ,
            this.getExtCRLReason = function (t, e) {
              var n = {
                extname: 'cRLReason'
              };
              if (e && (n.critical = !0),
              '0a' == t.substr(0, 2))
                return n.code = parseInt(i(t, 0), 16),
                  n;
              throw new Error('hExtV parse error: ' + t);
            }
            ,
            this.getExtOcspNonce = function (t, e) {
              var n = {
                extname: 'ocspNonce'
              };
              e && (n.critical = !0);
              var r = i(t, 0);
              return n.hex = r,
                n;
            }
            ,
            this.getExtOcspNoCheck = function (t, e) {
              var n = {
                extname: 'ocspNoCheck'
              };
              return e && (n.critical = !0),
                n;
            }
            ,
            this.getExtAdobeTimeStamp = function (t, e) {
              if (void 0 === t && void 0 === e) {
                var n = this.getExtInfo('adobeTimeStamp');
                if (void 0 === n)
                  return;
                t = s(this.hex, n.vidx),
                  e = n.critical;
              }
              var i = {
                extname: 'adobeTimeStamp'
              };
              e && (i.critical = !0);
              var o = r(t, 0);
              if (o.length > 1) {
                var a = s(t, o[1])
                  , u = this.getGeneralName(a);
                null != u.uri && (i.uri = u.uri);
              }
              if (o.length > 2) {
                var c = s(t, o[2]);
                '0101ff' == c && (i.reqauth = !0),
                '010100' == c && (i.reqauth = !1);
              }
              return i;
            }
            ,
            this.getExtSubjectDirectoryAttributes = function (t, e) {
              if (void 0 === t && void 0 === e) {
                var n = this.getExtInfo('subjectDirectoryAttributes');
                if (void 0 === n)
                  return;
                t = s(this.hex, n.vidx),
                  e = n.critical;
              }
              var r = {
                extname: 'subjectDirectoryAttributes'
              };
              e && (r.critical = !0);
              try {
                for (var i = o(t), a = [], u = 0; u < i.seq.length; u++) {
                  var c = i.seq[u]
                    , l = ee(c, 'seq.0.oid')
                    , h = ee(c, 'seq.1.set');
                  if (null == l || null == h)
                    throw 'error';
                  a.push({
                    attr: l,
                    array: h
                  });
                }
                return r.array = a,
                  r;
              } catch (t) {
                throw new Error('malformed subjectDirectoryAttributes extension value');
              }
            }
          ;
          var b = function (t) {
            var e = {};
            try {
              var n = t.seq[0].oid
                , r = ut.asn1.x509.OID.name2oid(n);
              e.type = ut.asn1.x509.OID.oid2atype(r);
              var i = t.seq[1];
              if (null != i.utf8str)
                e.ds = 'utf8',
                  e.value = i.utf8str.str;
              else if (null != i.numstr)
                e.ds = 'num',
                  e.value = i.numstr.str;
              else if (null != i.telstr)
                e.ds = 'tel',
                  e.value = i.telstr.str;
              else if (null != i.prnstr)
                e.ds = 'prn',
                  e.value = i.prnstr.str;
              else if (null != i.ia5str)
                e.ds = 'ia5',
                  e.value = i.ia5str.str;
              else if (null != i.visstr)
                e.ds = 'vis',
                  e.value = i.visstr.str;
              else {
                if (null == i.bmpstr)
                  throw 'error';
                e.ds = 'bmp',
                  e.value = i.bmpstr.str;
              }
              return e;
            } catch (t) {
              throw new Erorr('improper ASN.1 parsed AttrTypeAndValue');
            }
          }
            , x = function (t) {
            try {
              return t.set.map((function (t) {
                  return b(t);
                }
              ));
            } catch (t) {
              throw new Error('improper ASN.1 parsed RDN: ' + t);
            }
          };
          this.getX500NameRule = function (t) {
            for (var e = null, n = [], r = 0; r < t.length; r++)
              for (var i = t[r], o = 0; o < i.length; o++)
                n.push(i[o]);
            for (r = 0; r < n.length; r++) {
              var s = n[r]
                , a = s.ds
                , u = s.value
                , c = s.type;
              if (':' + a,
              'prn' != a && 'utf8' != a && 'ia5' != a)
                return 'mixed';
              if ('ia5' == a) {
                if ('CN' != c)
                  return 'mixed';
                if (ut.lang.String.isMail(u))
                  continue;
                return 'mixed';
              }
              if ('C' == c) {
                if ('prn' == a)
                  continue;
                return 'mixed';
              }
              if (':' + a,
              null == e)
                e = a;
              else if (e !== a)
                return 'mixed';
            }
            return null == e ? 'prn' : e;
          }
            ,
            this.getAttrTypeAndValue = function (t) {
              var e = o(t);
              return b(e);
            }
            ,
            this.getRDN = function (t) {
              var e = o(t);
              return x(e);
            }
            ,
            this.getX500NameArray = function (t) {
              return function (t) {
                try {
                  return t.seq.map((function (t) {
                      return x(t);
                    }
                  ));
                } catch (t) {
                  throw new Error('improper ASN.1 parsed X500Name: ' + t);
                }
              }(o(t));
            }
            ,
            this.getX500Name = function (t, e, n) {
              var r = this.getX500NameArray(t)
                , i = {
                str: this.dnarraytostr(r)
              };
              return i.array = r,
              1 == n && (i.hex = t),
              1 == e && (i.canon = this.c14nRDNArray(r)),
                i;
            }
            ,
            this.readCertPEM = function (t) {
              this.readCertHex(m(t));
            }
            ,
            this.readCertHex = function (t) {
              this.hex = t,
                this.getVersion();
              try {
                h(this.hex, 0, [0, 7], 'a3'),
                  this.parseExt();
              } catch (t) {
              }
            }
            ,
            this.getParam = function (t) {
              var e = {};
              return null == t && (t = {}),
                e.version = this.getVersion(),
                e.serial = {
                  hex: this.getSerialNumberHex()
                },
                e.sigalg = this.getSignatureAlgorithmField(),
                e.issuer = this.getIssuer(t.dncanon, t.dnhex),
                e.notbefore = this.getNotBefore(),
                e.notafter = this.getNotAfter(),
                e.subject = this.getSubject(t.dncanon, t.dnhex),
                e.sbjpubkey = kt(this.getPublicKeyHex(), 'PUBLIC KEY'),
              null != this.aExtInfo && this.aExtInfo.length > 0 && (e.ext = this.getExtParamArray()),
                e.sighex = this.getSignatureValueHex(),
              1 == t.tbshex && (e.tbshex = c(this.hex, 0, [0])),
              1 == t.nodnarray && (delete e.issuer.array,
                delete e.subject.array),
                e;
            }
            ,
            this.getExtParamArray = function (t) {
              null == t && (-1 != f(this.hex, 0, [0, '[3]']) && (t = l(this.hex, 0, [0, '[3]', 0], '30')));
              for (var e = [], n = r(t, 0), i = 0; i < n.length; i++) {
                var o = s(t, n[i])
                  , a = this.getExtParam(o);
                null != a && e.push(a);
              }
              return e;
            }
            ,
            this.getExtParam = function (t) {
              var e = r(t, 0).length;
              if (2 != e && 3 != e)
                throw new Error('wrong number elements in Extension: ' + e + ' ' + t);
              var n = v(a(t, 0, [0], '06'))
                , i = !1;
              3 == e && '0101ff' == c(t, 0, [1]) && (i = !0);
              var s = c(t, 0, [e - 1, 0])
                , u = void 0;
              if ('2.5.29.14' == n ? u = this.getExtSubjectKeyIdentifier(s, i) : '2.5.29.15' == n ? u = this.getExtKeyUsage(s, i) : '2.5.29.17' == n ? u = this.getExtSubjectAltName(s, i) : '2.5.29.18' == n ? u = this.getExtIssuerAltName(s, i) : '2.5.29.19' == n ? u = this.getExtBasicConstraints(s, i) : '2.5.29.30' == n ? u = this.getExtNameConstraints(s, i) : '2.5.29.31' == n ? u = this.getExtCRLDistributionPoints(s, i) : '2.5.29.32' == n ? u = this.getExtCertificatePolicies(s, i) : '2.5.29.33' == n ? u = this.getExtPolicyMappings(s, i) : '2.5.29.35' == n ? u = this.getExtAuthorityKeyIdentifier(s, i) : '2.5.29.36' == n ? u = this.getExtPolicyConstraints(s, i) : '2.5.29.37' == n ? u = this.getExtExtKeyUsage(s, i) : '2.5.29.54' == n ? u = this.getExtInhibitAnyPolicy(s, i) : '1.3.6.1.5.5.7.1.1' == n ? u = this.getExtAuthorityInfoAccess(s, i) : '2.5.29.20' == n ? u = this.getExtCRLNumber(s, i) : '2.5.29.21' == n ? u = this.getExtCRLReason(s, i) : '2.5.29.9' == n ? u = this.getExtSubjectDirectoryAttributes(s, i) : '1.3.6.1.5.5.7.48.1.2' == n ? u = this.getExtOcspNonce(s, i) : '1.3.6.1.5.5.7.48.1.5' == n ? u = this.getExtOcspNoCheck(s, i) : '1.2.840.113583.1.1.9.1' == n ? u = this.getExtAdobeTimeStamp(s, i) : null != ae.EXT_PARSER[n] && (u = ae.EXT_PARSER[n](n, i, s)),
              null != u)
                return u;
              var l = {
                extname: n,
                extn: s
              };
              try {
                l.extn = o(s);
              } catch (t) {
              }
              return i && (l.critical = !0),
                l;
            }
            ,
            this.findExt = function (t, e) {
              for (var n = 0; n < t.length; n++)
                if (t[n].extname == e)
                  return t[n];
              return null;
            }
            ,
            this.updateExtCDPFullURI = function (t, e) {
              var n = this.findExt(t, 'cRLDistributionPoints');
              if (null != n && null != n.array)
                for (var r = n.array, i = 0; i < r.length; i++)
                  if (null != r[i].dpname && null != r[i].dpname.full)
                    for (var o = r[i].dpname.full, s = 0; s < o.length; s++) {
                      var a = o[i];
                      null != a.uri && (a.uri = e);
                    }
            }
            ,
            this.updateExtAIAOCSP = function (t, e) {
              var n = this.findExt(t, 'authorityInfoAccess');
              if (null != n && null != n.array)
                for (var r = n.array, i = 0; i < r.length; i++)
                  null != r[i].ocsp && (r[i].ocsp = e);
            }
            ,
            this.updateExtAIACAIssuer = function (t, e) {
              var n = this.findExt(t, 'authorityInfoAccess');
              if (null != n && null != n.array)
                for (var r = n.array, i = 0; i < r.length; i++)
                  null != r[i].caissuer && (r[i].caissuer = e);
            }
            ,
            this.dnarraytostr = function (t) {
              return '/' + t.map((function (t) {
                  return function (t) {
                    return t.map((function (t) {
                        return function (t) {
                          return t.type + '=' + t.value;
                        }(t).replace(/\+/, '\\+');
                      }
                    )).join('+');
                  }(t).replace(/\//, '\\/');
                }
              )).join('/');
            }
            ,
            this.setCanonicalizedDN = function (t) {
              var e;
              if (null != t.str && null == t.array) {
                var n = new ut.asn1.x509.X500Name({
                  str: t.str
                }).tohex();
                e = this.getX500NameArray(n);
              } else
                e = t.array;
              null == t.canon && (t.canon = this.c14nRDNArray(e));
            }
            ,
            this.c14nRDNArray = function (t) {
              for (var e = [], n = 0; n < t.length; n++) {
                for (var r = t[n], i = [], o = 0; o < r.length; o++) {
                  var s = r[o]
                    , a = s.value;
                  a = (a = (a = (a = a.replace(/^\s*/, '')).replace(/\s*$/, '')).replace(/\s+/g, ' ')).toLowerCase(),
                    i.push(s.type.toLowerCase() + '=' + a);
                }
                e.push(i.join('+'));
              }
              return '/' + e.join('/');
            }
            ,
            this.getInfo = function () {
              var t, e, n, r = function (t) {
                for (var e = '', n = '    ', r = '\n', i = t.array, o = 0; o < i.length; o++) {
                  var s = i[o];
                  if (null != s.dn && (e += n + 'dn: ' + s.dn.str + r),
                  null != s.ip && (e += n + 'ip: ' + s.ip + r),
                  null != s.rfc822 && (e += n + 'rfc822: ' + s.rfc822 + r),
                  null != s.dns && (e += n + 'dns: ' + s.dns + r),
                  null != s.uri && (e += n + 'uri: ' + s.uri + r),
                  null != s.other)
                    e += n + 'other: ' + s.other.oid + '=' + JSON.stringify(s.other.value).replace(/\"/g, '') + r;
                }
                return e = e.replace(/\n$/, '');
              }, i = function (t) {
                for (var e = '', n = t.array, r = 0; r < n.length; r++) {
                  var i = n[r];
                  if (e += '    policy oid: ' + i.policyoid + '\n',
                  void 0 !== i.array)
                    for (var o = 0; o < i.array.length; o++) {
                      var s = i.array[o];
                      void 0 !== s.cps && (e += '    cps: ' + s.cps + '\n');
                    }
                }
                return e;
              }, o = function (t) {
                for (var e = '', n = t.array, r = 0; r < n.length; r++) {
                  var i = n[r];
                  try {
                    void 0 !== i.dpname.full[0].uri && (e += '    ' + i.dpname.full[0].uri + '\n');
                  } catch (t) {
                  }
                  try {
                    void 0 !== i.dname.full[0].dn.hex && (e += '    ' + ae.hex2dn(i.dpname.full[0].dn.hex) + '\n');
                  } catch (t) {
                  }
                }
                return e;
              }, s = function (t) {
                for (var e = '', n = t.array, r = 0; r < n.length; r++) {
                  var i = n[r];
                  void 0 !== i.caissuer && (e += '    caissuer: ' + i.caissuer + '\n'),
                  void 0 !== i.ocsp && (e += '    ocsp: ' + i.ocsp + '\n');
                }
                return e;
              };
              if (t = 'Basic Fields\n',
                t += '  serial number: ' + this.getSerialNumberHex() + '\n',
                t += '  signature algorithm: ' + this.getSignatureAlgorithmField() + '\n',
                t += '  issuer: ' + this.getIssuerString() + '\n',
                t += '  notBefore: ' + this.getNotBefore() + '\n',
                t += '  notAfter: ' + this.getNotAfter() + '\n',
                t += '  subject: ' + this.getSubjectString() + '\n',
                t += '  subject public key info: \n',
                t += '    key algorithm: ' + (e = this.getPublicKey()).type + '\n',
              'RSA' === e.type && (t += '    n=' + Kt(e.n.toString(16)).substr(0, 16) + '...\n',
                t += '    e=' + Kt(e.e.toString(16)) + '\n'),
              null != (n = this.aExtInfo)) {
                t += 'X509v3 Extensions:\n';
                for (var a = 0; a < n.length; a++) {
                  var u = n[a]
                    , c = ut.asn1.x509.OID.oid2name(u.oid);
                  '' === c && (c = u.oid);
                  var l = '';
                  if (!0 === u.critical && (l = 'CRITICAL'),
                    t += '  ' + c + ' ' + l + ':\n',
                  'basicConstraints' === c) {
                    var h = this.getExtBasicConstraints();
                    void 0 === h.cA ? t += '    {}\n' : (t += '    cA=true',
                    void 0 !== h.pathLen && (t += ', pathLen=' + h.pathLen),
                      t += '\n');
                  } else {
                    var f;
                    if ('policyMappings' == c)
                      t += '    ' + this.getExtPolicyMappings().array.map((function (t) {
                          var e = t;
                          return e[0] + ':' + e[1];
                        }
                      )).join(', ') + '\n';
                    else if ('policyConstraints' == c)
                      t += '    ',
                      null != (f = this.getExtPolicyConstraints()).reqexp && (t += ' reqexp=' + f.reqexp),
                      null != f.inhibit && (t += ' inhibit=' + f.inhibit),
                        t += '\n';
                    else if ('inhibitAnyPolicy' == c)
                      t += '    skip=' + (f = this.getExtInhibitAnyPolicy()).skip + '\n';
                    else if ('keyUsage' == c)
                      t += '    ' + this.getExtKeyUsageString() + '\n';
                    else if ('subjectKeyIdentifier' == c)
                      t += '    ' + this.getExtSubjectKeyIdentifier().kid.hex + '\n';
                    else if ('authorityKeyIdentifier' == c) {
                      var p = this.getExtAuthorityKeyIdentifier();
                      void 0 !== p.kid && (t += '    kid=' + p.kid.hex + '\n');
                    } else {
                      if ('extKeyUsage' == c)
                        t += '    ' + this.getExtExtKeyUsage().array.join(', ') + '\n';
                      else if ('subjectAltName' == c)
                        t += r(this.getExtSubjectAltName()) + '\n';
                      else if ('cRLDistributionPoints' == c)
                        t += o(this.getExtCRLDistributionPoints());
                      else if ('authorityInfoAccess' == c)
                        t += s(this.getExtAuthorityInfoAccess());
                      else
                        'certificatePolicies' == c && (t += i(this.getExtCertificatePolicies()));
                    }
                  }
                }
              }
              return t += 'signature algorithm: ' + this.getSignatureAlgorithmName() + '\n',
                t += 'signature: ' + this.getSignatureValueHex().substr(0, 16) + '...\n';
            }
            ,
          'string' == typeof t && (-1 != t.indexOf('-----BEGIN') ? this.readCertPEM(t) : ut.lang.String.isHex(t) && this.readCertHex(t));
        }

        nt.prototype.sign = function (t, e) {
          var n = function (t) {
            return ut.crypto.Util.hashString(t, e);
          }(t);
          return this.signWithMessageHash(n, e);
        }
          ,
          nt.prototype.signWithMessageHash = function (t, e) {
            var n = tt(ut.crypto.Util.getPaddedDigestInfoHex(t, e, this.n.bitLength()), 16);
            return ie(this.doPrivate(n).toString(16), this.n.bitLength());
          }
          ,
          nt.prototype.signPSS = function (t, e, n) {
            var r, i = (r = At(t),
              ut.crypto.Util.hashHex(r, e));
            return void 0 === n && (n = -1),
              this.signWithMessageHashPSS(i, e, n);
          }
          ,
          nt.prototype.signWithMessageHashPSS = function (t, e, n) {
            var r, i = Et(t), o = i.length, s = this.n.bitLength() - 1, a = Math.ceil(s / 8), u = function (t) {
              return ut.crypto.Util.hashHex(t, e);
            };
            if (-1 === n || void 0 === n)
              n = o;
            else if (-2 === n)
              n = a - o - 2;
            else if (n < -2)
              throw new Error('invalid salt length');
            if (a < o + n + 2)
              throw new Error('data too long');
            var c = '';
            n > 0 && (c = new Array(n),
              (new Z).nextBytes(c),
              c = String.fromCharCode.apply(String, c));
            var l = Et(u(At('\0\0\0\0\0\0\0\0' + i + c)))
              , h = [];
            for (r = 0; r < a - n - o - 2; r += 1)
              h[r] = 0;
            var f = String.fromCharCode.apply(String, h) + '' + c
              , p = oe(l, f.length, u)
              , d = [];
            for (r = 0; r < f.length; r += 1)
              d[r] = f.charCodeAt(r) ^ p.charCodeAt(r);
            var g = 65280 >> 8 * a - s & 255;
            for (d[0] &= ~g,
                   r = 0; r < o; r++)
              d.push(l.charCodeAt(r));
            return d.push(188),
              ie(this.doPrivate(new w(d)).toString(16), this.n.bitLength());
          }
          ,
          nt.prototype.verify = function (t, e) {
            if (null == (e = e.toLowerCase()).match(/^[0-9a-f]+$/))
              return !1;
            var n = tt(e, 16)
              , r = this.n.bitLength();
            if (n.bitLength() > r)
              return !1;
            var i = this.doPublic(n).toString(16);
            if (i.length + 3 != r / 4)
              return !1;
            var o = se(i.replace(/^1f+00/, ''));
            if (0 == o.length)
              return !1;
            var s = o[0];
            return o[1] == function (t) {
              return ut.crypto.Util.hashString(t, s);
            }(t);
          }
          ,
          nt.prototype.verifyWithMessageHash = function (t, e) {
            if (e.length != Math.ceil(this.n.bitLength() / 4))
              return !1;
            var n = tt(e, 16);
            if (n.bitLength() > this.n.bitLength())
              return 0;
            var r = se(this.doPublic(n).toString(16).replace(/^1f+00/, ''));
            if (0 == r.length)
              return !1;
            r[0];
            return r[1] == t;
          }
          ,
          nt.prototype.verifyPSS = function (t, e, n, r) {
            var i, o = (i = At(t),
              ut.crypto.Util.hashHex(i, n));
            return void 0 === r && (r = -1),
              this.verifyWithMessageHashPSS(o, e, n, r);
          }
          ,
          nt.prototype.verifyWithMessageHashPSS = function (t, e, n, r) {
            if (e.length != Math.ceil(this.n.bitLength() / 4))
              return !1;
            var i, o = new w(e, 16), s = function (t) {
              return ut.crypto.Util.hashHex(t, n);
            }, a = Et(t), u = a.length, c = this.n.bitLength() - 1, l = Math.ceil(c / 8);
            if (-1 === r || void 0 === r)
              r = u;
            else if (-2 === r)
              r = l - u - 2;
            else if (r < -2)
              throw new Error('invalid salt length');
            if (l < u + r + 2)
              throw new Error('data too long');
            var h = this.doPublic(o).toByteArray();
            for (i = 0; i < h.length; i += 1)
              h[i] &= 255;
            for (; h.length < l;)
              h.unshift(0);
            if (188 !== h[l - 1])
              throw new Error('encoded message does not end in 0xbc');
            var f = (h = String.fromCharCode.apply(String, h)).substr(0, l - u - 1)
              , p = h.substr(f.length, u)
              , d = 65280 >> 8 * l - c & 255;
            if (0 != (f.charCodeAt(0) & d))
              throw new Error('bits beyond keysize not zero');
            var g = oe(p, f.length, s)
              , v = [];
            for (i = 0; i < f.length; i += 1)
              v[i] = f.charCodeAt(i) ^ g.charCodeAt(i);
            v[0] &= ~d;
            var m = l - u - r - 2;
            for (i = 0; i < m; i += 1)
              if (0 !== v[i])
                throw new Error('leftmost octets not zero');
            if (1 !== v[m])
              throw new Error('0x01 marker not found');
            return p === Et(s(At('\0\0\0\0\0\0\0\0' + a + String.fromCharCode.apply(String, v.slice(-r)))));
          }
          ,
          nt.SALT_LEN_HLEN = -1,
          nt.SALT_LEN_MAX = -2,
          nt.SALT_LEN_RECOVER = -2,
          ae.EXT_PARSER = {},
          ae.registExtParser = function (t, e) {
            ae.EXT_PARSER[t] = e;
          }
          ,
          ae.hex2dn = function (t, e) {
            void 0 === e && (e = 0);
            var n = new ae;
            ht.getTLV(t, e);
            return n.getX500Name(t).str;
          }
          ,
          ae.hex2rdn = function (t, e) {
            if (void 0 === e && (e = 0),
            '31' !== t.substr(e, 2))
              throw new Error('malformed RDN');
            for (var n = new Array, r = ht.getChildIdx(t, e), i = 0; i < r.length; i++)
              n.push(ae.hex2attrTypeValue(t, r[i]));
            return (n = n.map((function (t) {
                return t.replace('+', '\\+');
              }
            ))).join('+');
          }
          ,
          ae.hex2attrTypeValue = function (t, e) {
            var n = ht
              , r = n.getV;
            if (void 0 === e && (e = 0),
            '30' !== t.substr(e, 2))
              throw new Error('malformed attribute type and value');
            var i = n.getChildIdx(t, e);
            2 !== i.length || t.substr(i[0], 2);
            var o = r(t, i[0])
              , s = ut.asn1.ASN1Util.oidHexToInt(o);
            return ut.asn1.x509.OID.oid2atype(s) + '=' + Et(r(t, i[1]));
          }
          ,
          ae.getPublicKeyFromCertHex = function (t) {
            var e = new ae;
            return e.readCertHex(t),
              e.getPublicKey();
          }
          ,
          ae.getPublicKeyFromCertPEM = function (t) {
            var e = new ae;
            return e.readCertPEM(t),
              e.getPublicKey();
          }
          ,
          ae.getPublicKeyInfoPropOfCertPEM = function (t) {
            var e, n, r = ht.getVbyList, i = {};
            return i.algparam = null,
              (e = new ae).readCertPEM(t),
              n = e.getPublicKeyHex(),
              i.keyhex = r(n, 0, [1], '03').substr(2),
              i.algoid = r(n, 0, [0, 0], '06'),
            '2a8648ce3d0201' === i.algoid && (i.algparam = r(n, 0, [0, 1], '06')),
              i;
          }
          ,
          ae.KEYUSAGE_NAME = ['digitalSignature', 'nonRepudiation', 'keyEncipherment', 'dataEncipherment', 'keyAgreement', 'keyCertSign', 'cRLSign', 'encipherOnly', 'decipherOnly'];
        void 0 !== ut && ut || (ut = {}),
        void 0 !== ut.jws && ut.jws || (ut.jws = {}),
          ut.jws.JWS = function () {
            var t = ut.jws.JWS.isSafeJSONString;
            this.parseJWS = function (e, n) {
              if (void 0 === this.parsedJWS || !n && void 0 === this.parsedJWS.sigvalH) {
                var r = e.match(/^([^.]+)\.([^.]+)\.([^.]+)$/);
                if (null == r)
                  throw 'JWS signature is not a form of \'Head.Payload.SigValue\'.';
                var i = r[1]
                  , o = r[2]
                  , s = r[3]
                  , a = i + '.' + o;
                if (this.parsedJWS = {},
                  this.parsedJWS.headB64U = i,
                  this.parsedJWS.payloadB64U = o,
                  this.parsedJWS.sigvalB64U = s,
                  this.parsedJWS.si = a,
                  !n) {
                  var u = bt(s)
                    , c = tt(u, 16);
                  this.parsedJWS.sigvalH = u,
                    this.parsedJWS.sigvalBI = c;
                }
                var l = lt(i)
                  , h = lt(o);
                if (this.parsedJWS.headS = l,
                  this.parsedJWS.payloadS = h,
                  !t(l, this.parsedJWS, 'headP'))
                  throw 'malformed JSON string for JWS Head: ' + l;
              }
            };
          }
          ,
          ut.jws.JWS.sign = function (t, e, n, r, i) {
            var o, s, a, u = ut, c = u.jws.JWS, l = c.readSafeJSONString, h = c.isSafeJSONString, f = u.crypto,
              p = (f.ECDSA,
                f.Mac), d = f.Signature, g = JSON;
            if ('string' != typeof e && 'object' != typeof e)
              throw 'spHeader must be JSON string or object: ' + e;
            if ('object' == typeof e && (s = e,
              o = g.stringify(s)),
            'string' == typeof e) {
              if (!h(o = e))
                throw 'JWS Head is not safe JSON string: ' + o;
              s = l(o);
            }
            if (a = n,
            'object' == typeof n && (a = g.stringify(n)),
            '' != t && null != t || void 0 === s.alg || (t = s.alg),
            '' != t && null != t && void 0 === s.alg && (s.alg = t,
              o = g.stringify(s)),
            t !== s.alg)
              throw 'alg and sHeader.alg doesn\'t match: ' + t + '!=' + s.alg;
            var v = null;
            if (void 0 === c.jwsalg2sigalg[t])
              throw 'unsupported alg name: ' + t;
            v = c.jwsalg2sigalg[t];
            var m = ct(o) + '.' + ct(a)
              , y = '';
            if ('Hmac' == v.substr(0, 4)) {
              if (void 0 === r)
                throw 'mac key shall be specified for HS* alg';
              var b = new p({
                alg: v,
                prov: 'cryptojs',
                pass: r
              });
              b.updateString(m),
                y = b.doFinal();
            } else if (-1 != v.indexOf('withECDSA')) {
              (w = new d({
                alg: v
              })).init(r, i),
                w.updateString(m);
              var x = w.sign();
              y = ut.crypto.ECDSA.asn1SigToConcatSig(x);
            } else {
              var w;
              if ('none' != v)
                (w = new d({
                  alg: v
                })).init(r, i),
                  w.updateString(m),
                  y = w.sign();
            }
            return m + '.' + yt(y);
          }
          ,
          ut.jws.JWS.verify = function (t, e, n) {
            var r, i = ut, o = i.jws.JWS, s = o.readSafeJSONString, a = i.crypto, u = a.ECDSA, c = a.Mac,
              l = a.Signature;
            if (r = nt,
              !qt(t))
              return !1;
            var h = t.split('.');
            if (3 !== h.length)
              return !1;
            var f = h[0] + '.' + h[1]
              , p = bt(h[2])
              , d = s(lt(h[0]))
              , g = null
              , v = null;
            if (void 0 === d.alg)
              throw 'algorithm not specified in header';
            if ((v = (g = d.alg).substr(0, 2),
            null != n && '[object Array]' === Object.prototype.toString.call(n) && n.length > 0) && -1 == (':' + n.join(':') + ':').indexOf(':' + g + ':'))
              throw 'algorithm \'' + g + '\' not accepted in the list';
            if ('none' != g && null === e)
              throw 'key shall be specified to verify.';
            if ('string' == typeof e && -1 != e.indexOf('-----BEGIN ') && (e = re.getKey(e)),
              !('RS' != v && 'PS' != v || e instanceof r))
              throw 'key shall be a RSAKey obj for RS* and PS* algs';
            if ('ES' == v && !(e instanceof u))
              throw 'key shall be a ECDSA obj for ES* algs';
            var m = null;
            if (void 0 === o.jwsalg2sigalg[d.alg])
              throw 'unsupported alg name: ' + g;
            if ('none' == (m = o.jwsalg2sigalg[g]))
              throw 'not supported';
            if ('Hmac' == m.substr(0, 4)) {
              if (void 0 === e)
                throw 'hexadecimal key shall be specified for HMAC';
              var y = new c({
                alg: m,
                pass: e
              });
              return y.updateString(f),
              p == y.doFinal();
            }
            if (-1 != m.indexOf('withECDSA')) {
              var b, x = null;
              try {
                x = u.concatSigToASN1Sig(p);
              } catch (t) {
                return !1;
              }
              return (b = new l({
                alg: m
              })).init(e),
                b.updateString(f),
                b.verify(x);
            }
            return (b = new l({
              alg: m
            })).init(e),
              b.updateString(f),
              b.verify(p);
          }
          ,
          ut.jws.JWS.parse = function (t) {
            var e, n, r, i = t.split('.'), o = {};
            if (2 != i.length && 3 != i.length)
              throw 'malformed sJWS: wrong number of \'.\' splitted elements';
            return e = i[0],
              n = i[1],
            3 == i.length && (r = i[2]),
              o.headerObj = ut.jws.JWS.readSafeJSONString(lt(e)),
              o.payloadObj = ut.jws.JWS.readSafeJSONString(lt(n)),
              o.headerPP = JSON.stringify(o.headerObj, null, '  '),
              null == o.payloadObj ? o.payloadPP = lt(n) : o.payloadPP = JSON.stringify(o.payloadObj, null, '  '),
            void 0 !== r && (o.sigHex = bt(r)),
              o;
          }
          ,
          ut.jws.JWS.verifyJWT = function (t, e, n) {
            var r = ut.jws
              , i = r.JWS
              , o = i.readSafeJSONString
              , s = i.inArray
              , a = i.includedArray;
            if (!qt(t))
              return !1;
            var u = t.split('.');
            if (3 != u.length)
              return !1;
            var c = u[0]
              , l = u[1]
              , h = (bt(u[2]),
              o(lt(c)))
              , f = o(lt(l));
            if (void 0 === h.alg)
              return !1;
            if (void 0 === n.alg)
              throw 'acceptField.alg shall be specified';
            if (!s(h.alg, n.alg))
              return !1;
            if (void 0 !== f.iss && 'object' == typeof n.iss && !s(f.iss, n.iss))
              return !1;
            if (void 0 !== f.sub && 'object' == typeof n.sub && !s(f.sub, n.sub))
              return !1;
            if (void 0 !== f.aud && 'object' == typeof n.aud)
              if ('string' == typeof f.aud) {
                if (!s(f.aud, n.aud))
                  return !1;
              } else if ('object' == typeof f.aud && !a(f.aud, n.aud))
                return !1;
            var p = r.IntDate.getNow();
            return void 0 !== n.verifyAt && 'number' == typeof n.verifyAt && (p = n.verifyAt),
            void 0 !== n.gracePeriod && 'number' == typeof n.gracePeriod || (n.gracePeriod = 0),
            !(void 0 !== f.exp && 'number' == typeof f.exp && f.exp + n.gracePeriod < p) && (!(void 0 !== f.nbf && 'number' == typeof f.nbf && p < f.nbf - n.gracePeriod) && (!(void 0 !== f.iat && 'number' == typeof f.iat && p < f.iat - n.gracePeriod) && ((void 0 === f.jti || void 0 === n.jti || f.jti === n.jti) && !!i.verify(t, e, n.alg))));
          }
          ,
          ut.jws.JWS.includedArray = function (t, e) {
            var n = ut.jws.JWS.inArray;
            if (null === t)
              return !1;
            if ('object' != typeof t)
              return !1;
            if ('number' != typeof t.length)
              return !1;
            for (var r = 0; r < t.length; r++)
              if (!n(t[r], e))
                return !1;
            return !0;
          }
          ,
          ut.jws.JWS.inArray = function (t, e) {
            if (null === e)
              return !1;
            if ('object' != typeof e)
              return !1;
            if ('number' != typeof e.length)
              return !1;
            for (var n = 0; n < e.length; n++)
              if (e[n] == t)
                return !0;
            return !1;
          }
          ,
          ut.jws.JWS.jwsalg2sigalg = {
            HS256: 'HmacSHA256',
            HS384: 'HmacSHA384',
            HS512: 'HmacSHA512',
            RS256: 'SHA256withRSA',
            RS384: 'SHA384withRSA',
            RS512: 'SHA512withRSA',
            ES256: 'SHA256withECDSA',
            ES384: 'SHA384withECDSA',
            ES512: 'SHA512withECDSA',
            PS256: 'SHA256withRSAandMGF1',
            PS384: 'SHA384withRSAandMGF1',
            PS512: 'SHA512withRSAandMGF1',
            none: 'none'
          },
          ut.jws.JWS.isSafeJSONString = function (t, e, n) {
            var r = null;
            try {
              return 'object' != typeof (r = at(t)) || r.constructor === Array ? 0 : (e && (e[n] = r),
                1);
            } catch (t) {
              return 0;
            }
          }
          ,
          ut.jws.JWS.readSafeJSONString = function (t) {
            var e = null;
            try {
              return 'object' != typeof (e = at(t)) || e.constructor === Array ? null : e;
            } catch (t) {
              return null;
            }
          }
          ,
          ut.jws.JWS.getEncodedSignatureValueFromJWS = function (t) {
            var e = t.match(/^[^.]+\.[^.]+\.([^.]+)$/);
            if (null == e)
              throw 'JWS signature is not a form of \'Head.Payload.SigValue\'.';
            return e[1];
          }
          ,
          ut.jws.JWS.getJWKthumbprint = function (t) {
            if ('RSA' !== t.kty && 'EC' !== t.kty && 'oct' !== t.kty)
              throw 'unsupported algorithm for JWK Thumprint';
            var e = '{';
            if ('RSA' === t.kty) {
              if ('string' != typeof t.n || 'string' != typeof t.e)
                throw 'wrong n and e value for RSA key';
              e += '"e":"' + t.e + '",',
                e += '"kty":"' + t.kty + '",',
                e += '"n":"' + t.n + '"}';
            } else if ('EC' === t.kty) {
              if ('string' != typeof t.crv || 'string' != typeof t.x || 'string' != typeof t.y)
                throw 'wrong crv, x and y value for EC key';
              e += '"crv":"' + t.crv + '",',
                e += '"kty":"' + t.kty + '",',
                e += '"x":"' + t.x + '",',
                e += '"y":"' + t.y + '"}';
            } else if ('oct' === t.kty) {
              if ('string' != typeof t.k)
                throw 'wrong k value for oct(symmetric) key';
              e += '"kty":"' + t.kty + '",',
                e += '"k":"' + t.k + '"}';
            }
            var n = At(e);
            return yt(ut.crypto.Util.hashHex(n, 'sha256'));
          }
          ,
          ut.jws.IntDate = {},
          ut.jws.IntDate.get = function (t) {
            var e = ut.jws.IntDate
              , n = e.getNow
              , r = e.getZulu;
            if ('now' == t)
              return n();
            if ('now + 1hour' == t)
              return n() + 3600;
            if ('now + 1day' == t)
              return n() + 86400;
            if ('now + 1month' == t)
              return n() + 2592e3;
            if ('now + 1year' == t)
              return n() + 31536e3;
            if (t.match(/Z$/))
              return r(t);
            if (t.match(/^[0-9]+$/))
              return parseInt(t);
            throw 'unsupported format: ' + t;
          }
          ,
          ut.jws.IntDate.getZulu = function (t) {
            return It(t);
          }
          ,
          ut.jws.IntDate.getNow = function () {
            return ~~(new Date / 1e3);
          }
          ,
          ut.jws.IntDate.intDate2UTCString = function (t) {
            return new Date(1e3 * t).toUTCString();
          }
          ,
          ut.jws.IntDate.intDate2Zulu = function (t) {
            var e = new Date(1e3 * t);
            return ('0000' + e.getUTCFullYear()).slice(-4) + ('00' + (e.getUTCMonth() + 1)).slice(-2) + ('00' + e.getUTCDate()).slice(-2) + ('00' + e.getUTCHours()).slice(-2) + ('00' + e.getUTCMinutes()).slice(-2) + ('00' + e.getUTCSeconds()).slice(-2) + 'Z';
          }
          ,
        void 0 !== ut && ut || (ut = {}),
        void 0 !== ut.jws && ut.jws || (ut.jws = {}),
          ut.jws.JWSJS = function () {
            var t = ut.jws.JWS
              , e = t.readSafeJSONString;
            this.aHeader = [],
              this.sPayload = '',
              this.aSignature = [],
              this.init = function () {
                this.aHeader = [],
                  this.sPayload = void 0,
                  this.aSignature = [];
              }
              ,
              this.initWithJWS = function (t) {
                this.init();
                var e = t.split('.');
                if (3 != e.length)
                  throw 'malformed input JWS';
                this.aHeader.push(e[0]),
                  this.sPayload = e[1],
                  this.aSignature.push(e[2]);
              }
              ,
              this.addSignature = function (t, e, n, r) {
                if (void 0 === this.sPayload || null === this.sPayload)
                  throw 'there\'s no JSON-JS signature to add.';
                var i = this.aHeader.length;
                if (this.aHeader.length != this.aSignature.length)
                  throw 'aHeader.length != aSignature.length';
                try {
                  var o = ut.jws.JWS.sign(t, e, this.sPayload, n, r).split('.');
                  o[0],
                    o[2];
                  this.aHeader.push(o[0]),
                    this.aSignature.push(o[2]);
                } catch (t) {
                  throw this.aHeader.length > i && this.aHeader.pop(),
                  this.aSignature.length > i && this.aSignature.pop(),
                  'addSignature failed: ' + t;
                }
              }
              ,
              this.verifyAll = function (t) {
                if (this.aHeader.length !== t.length || this.aSignature.length !== t.length)
                  return !1;
                for (var e = 0; e < t.length; e++) {
                  var n = t[e];
                  if (2 !== n.length)
                    return !1;
                  if (!1 === this.verifyNth(e, n[0], n[1]))
                    return !1;
                }
                return !0;
              }
              ,
              this.verifyNth = function (e, n, r) {
                if (this.aHeader.length <= e || this.aSignature.length <= e)
                  return !1;
                var i = this.aHeader[e]
                  , o = this.aSignature[e]
                  , s = i + '.' + this.sPayload + '.' + o
                  , a = !1;
                try {
                  a = t.verify(s, n, r);
                } catch (t) {
                  return !1;
                }
                return a;
              }
              ,
              this.readJWSJS = function (t) {
                if ('string' == typeof t) {
                  var n = e(t);
                  if (null == n)
                    throw 'argument is not safe JSON object string';
                  this.aHeader = n.headers,
                    this.sPayload = n.payload,
                    this.aSignature = n.signatures;
                } else
                  try {
                    if (!(t.headers.length > 0))
                      throw 'malformed header';
                    if (this.aHeader = t.headers,
                    'string' != typeof t.payload)
                      throw 'malformed signatures';
                    if (this.sPayload = t.payload,
                      !(t.signatures.length > 0))
                      throw 'malformed signatures';
                    this.aSignature = t.signatures;
                  } catch (t) {
                    throw 'malformed JWS-JS JSON object: ' + t;
                  }
              }
              ,
              this.getJSON = function () {
                return {
                  headers: this.aHeader,
                  payload: this.sPayload,
                  signatures: this.aSignature
                };
              }
              ,
              this.isEmpty = function () {
                return 0 == this.aHeader.length ? 1 : 0;
              };
          }
          ,
          e.SecureRandom = Z,
          e.rng_seed_time = z,
          e.BigInteger = w,
          e.RSAKey = nt,
          e.ECDSA = ut.crypto.ECDSA,
          e.DSA = ut.crypto.DSA,
          e.Signature = ut.crypto.Signature,
          e.MessageDigest = ut.crypto.MessageDigest,
          e.Mac = ut.crypto.Mac,
          e.Cipher = ut.crypto.Cipher,
          e.KEYUTIL = re,
          e.ASN1HEX = ht,
          e.X509 = ae,
          e.X509CRL = function (t) {
            var e = ut.lang.String.isHex
              , n = ht
              , r = n.getV
              , i = n.getTLV
              , o = n.getVbyList
              , s = n.getTLVbyList
              , a = n.getTLVbyListEx
              , u = n.getIdxbyList
              , c = n.getIdxbyListEx
              , l = n.getChildIdx
              , h = new ae;
            this.hex = null,
              this.posSigAlg = null,
              this.posRevCert = null,
              this.parsed = null,
              this._setPos = function () {
                var t = u(this.hex, 0, [0, 0])
                  , e = this.hex.substr(t, 2);
                if ('02' == e)
                  this.posSigAlg = 1;
                else {
                  if ('30' != e)
                    throw new Error('malformed 1st item of TBSCertList: ' + e);
                  this.posSigAlg = 0;
                }
                var n, r = u(this.hex, 0, [0, this.posSigAlg + 3]), i = this.hex.substr(r, 2);
                if ('17' == i || '18' == i)
                  n = u(this.hex, 0, [0, this.posSigAlg + 4]),
                    this.posRevCert = null,
                  -1 != n && '30' == this.hex.substr(n, 2) && (this.posRevCert = this.posSigAlg + 4);
                else if ('30' == i)
                  this.posRevCert = this.posSigAlg + 3;
                else {
                  if ('a0' != i)
                    throw new Error('malformed nextUpdate or revCert tag: ' + i);
                  this.posRevCert = null;
                }
              }
              ,
              this.getVersion = function () {
                return 0 == this.posSigAlg ? null : parseInt(o(this.hex, 0, [0, 0], '02'), 16) + 1;
              }
              ,
              this.getSignatureAlgorithmField = function () {
                var t = s(this.hex, 0, [0, this.posSigAlg], '30');
                return h.getAlgorithmIdentifierName(t);
              }
              ,
              this.getIssuer = function () {
                return h.getX500Name(this.getIssuerHex());
              }
              ,
              this.getIssuerHex = function () {
                return s(this.hex, 0, [0, this.posSigAlg + 1], '30');
              }
              ,
              this.getThisUpdate = function () {
                var t = o(this.hex, 0, [0, this.posSigAlg + 2]);
                return result = Et(t);
              }
              ,
              this.getNextUpdate = function () {
                var t = u(this.hex, 0, [0, this.posSigAlg + 3])
                  , e = this.hex.substr(t, 2);
                return '17' != e && '18' != e ? null : Et(r(this.hex, t));
              }
              ,
              this.getRevCertArray = function () {
                if (null == this.posRevCert)
                  return null;
                for (var t = [], e = u(this.hex, 0, [0, this.posRevCert]), n = l(this.hex, e), r = 0; r < n.length; r++) {
                  var o = i(this.hex, n[r]);
                  t.push(this.getRevCert(o));
                }
                return t;
              }
              ,
              this.getRevCert = function (t) {
                var e = {}
                  , n = l(t, 0);
                return e.sn = {
                  hex: o(t, 0, [0], '02')
                },
                  e.date = Et(o(t, 0, [1])),
                3 == n.length && (e.ext = h.getExtParamArray(s(t, 0, [2]))),
                  e;
              }
              ,
              this.findRevCert = function (t) {
                var e = new ae(t).getSerialNumberHex();
                return this.findRevCertBySN(e);
              }
              ,
              this.findRevCertBySN = function (t) {
                if (null == this.parsed && this.getParam(),
                null == this.parsed.revcert)
                  return null;
                for (var e = this.parsed.revcert, n = 0; n < e.length; n++)
                  if (t == e[n].sn.hex)
                    return e[n];
                return null;
              }
              ,
              this.getSignatureValueHex = function () {
                return o(this.hex, 0, [2], '03', !0);
              }
              ,
              this.verifySignature = function (t) {
                var e = this.getSignatureAlgorithmField()
                  , n = this.getSignatureValueHex()
                  , r = s(this.hex, 0, [0], '30')
                  , i = new ut.crypto.Signature({
                  alg: e
                });
                return i.init(t),
                  i.updateHex(r),
                  i.verify(n);
              }
              ,
              this.getParam = function (t) {
                var e = {}
                  , n = this.getVersion();
                null != n && (e.version = n),
                  e.sigalg = this.getSignatureAlgorithmField(),
                  e.issuer = this.getIssuer(),
                  e.thisupdate = this.getThisUpdate();
                var r = this.getNextUpdate();
                null != r && (e.nextupdate = r);
                var i = this.getRevCertArray();
                if (null != i && (e.revcert = i),
                -1 != c(this.hex, 0, [0, '[0]'])) {
                  var o = a(this.hex, 0, [0, '[0]', 0]);
                  e.ext = h.getExtParamArray(o);
                }
                return e.sighex = this.getSignatureValueHex(),
                  this.parsed = e,
                'object' == typeof t && (1 == t.tbshex && (e.tbshex = s(this.hex, 0, [0])),
                1 == t.nodnarray && delete e.issuer.array),
                  e;
              }
              ,
            'string' == typeof t && (e(t) ? this.hex = t : t.match(/-----BEGIN X509 CRL/) && (this.hex = Tt(t)),
              this._setPos());
          }
          ,
          e.CryptoJS = g,
          e.b64tohex = b,
          e.b64toBA = x,
          e.ECFieldElementFp = it,
          e.ECPointFp = ot,
          e.ECCurveFp = st,
          e.stoBA = ft,
          e.BAtos = pt,
          e.BAtohex = dt,
          e.stohex = gt,
          e.stob64 = function (t) {
            return y(gt(t));
          }
          ,
          e.stob64u = function (t) {
            return vt(y(gt(t)));
          }
          ,
          e.b64utos = function (t) {
            return pt(x(mt(t)));
          }
          ,
          e.b64tob64u = vt,
          e.b64utob64 = mt,
          e.hex2b64 = y,
          e.hextob64u = yt,
          e.b64utohex = bt,
          e.utf8tob64u = ct,
          e.b64utoutf8 = lt,
          e.utf8tob64 = function (t) {
            return y(Nt($t(t)));
          }
          ,
          e.b64toutf8 = function (t) {
            return decodeURIComponent(Ot(b(t)));
          }
          ,
          e.utf8tohex = xt,
          e.hextoutf8 = wt,
          e.hextorstr = Et,
          e.rstrtohex = At,
          e.hextob64 = Ct,
          e.hextob64nl = function (t) {
            return Pt(Ct(t), 64);
          }
          ,
          e.b64nltohex = Ft,
          e.hextopem = kt,
          e.pemtohex = Tt,
          e.hextoArrayBuffer = function (t) {
            if (t.length % 2 != 0)
              throw 'input is not even length';
            if (null == t.match(/^[0-9A-Fa-f]+$/))
              throw 'input is not hexadecimal';
            for (var e = new ArrayBuffer(t.length / 2), n = new DataView(e), r = 0; r < t.length / 2; r++)
              n.setUint8(r, parseInt(t.substr(2 * r, 2), 16));
            return e;
          }
          ,
          e.ArrayBuffertohex = function (t) {
            for (var e = '', n = new DataView(t), r = 0; r < t.byteLength; r++)
              e += ('00' + n.getUint8(r).toString(16)).slice(-2);
            return e;
          }
          ,
          e.zulutomsec = _t,
          e.msectozulu = function (t) {
            var e = new Date(t)
              , n = ('0000' + e.getUTCFullYear()).slice(-4)
              , r = ('00' + (e.getUTCMonth() + 1)).slice(-2)
              , i = ('00' + e.getUTCDate()).slice(-2)
              , o = ('00' + e.getUTCHours()).slice(-2)
              , s = ('00' + e.getUTCMinutes()).slice(-2)
              , a = ('00' + e.getUTCSeconds()).slice(-2)
              , u = ('000' + e.getUTCMilliseconds()).slice(-3);
            return n + r + i + o + s + a + (u = '' != (u = u.replace(/0+$/, '')) ? '.' + u : u) + 'Z';
          }
          ,
          e.zulutosec = It,
          e.zulutodate = function (t) {
            return new Date(_t(t));
          }
          ,
          e.datetozulu = function (t, e, n) {
            var r, i = t.getUTCFullYear();
            if (e) {
              if (i < 1950 || 2049 < i)
                throw 'not proper year for UTCTime: ' + i;
              r = ('' + i).slice(-2);
            } else
              r = ('000' + i).slice(-4);
            if (r += ('0' + (t.getUTCMonth() + 1)).slice(-2),
              r += ('0' + t.getUTCDate()).slice(-2),
              r += ('0' + t.getUTCHours()).slice(-2),
              r += ('0' + t.getUTCMinutes()).slice(-2),
              r += ('0' + t.getUTCSeconds()).slice(-2),
              n) {
              var o = t.getUTCMilliseconds();
              0 !== o && (r += '.' + (o = (o = ('00' + o).slice(-3)).replace(/0+$/g, '')));
            }
            return r += 'Z';
          }
          ,
          e.uricmptohex = Nt,
          e.hextouricmp = Ot,
          e.ipv6tohex = Rt,
          e.hextoipv6 = jt,
          e.hextoip = Bt,
          e.iptohex = Lt,
          e.ucs2hextoutf8 = Ut,
          e.encodeURIComponentAll = $t,
          e.newline_toUnix = function (t) {
            return t = t.replace(/\r\n/gm, '\n');
          }
          ,
          e.newline_toDos = function (t) {
            return t = (t = t.replace(/\r\n/gm, '\n')).replace(/\n/gm, '\r\n');
          }
          ,
          e.hextoposhex = Kt,
          e.intarystrtohex = function (t) {
            t = (t = (t = t.replace(/^\s*\[\s*/, '')).replace(/\s*\]\s*$/, '')).replace(/\s*/g, '');
            try {
              return t.split(/,/).map((function (t, e, n) {
                  var r = parseInt(t);
                  if (r < 0 || 255 < r)
                    throw 'integer not in range 0-255';
                  return ('00' + r.toString(16)).slice(-2);
                }
              )).join('');
            } catch (t) {
              throw 'malformed integer array string: ' + t;
            }
          }
          ,
          e.strdiffidx = function (t, e) {
            var n = t.length;
            t.length > e.length && (n = e.length);
            for (var r = 0; r < n; r++)
              if (t.charCodeAt(r) != e.charCodeAt(r))
                return r;
            return t.length != e.length ? n : -1;
          }
          ,
          e.oidtohex = Gt,
          e.hextooid = zt,
          e.strpad = Xt,
          e.bitstrtoint = Jt,
          e.inttobitstr = Qt,
          e.bitstrtobinstr = Zt,
          e.binstrtobitstr = function (t) {
            if ('string' != typeof t)
              return null;
            if (null == t.match(/^[01]+$/))
              return null;
            try {
              return Qt(parseInt(t, 2));
            } catch (t) {
              return null;
            }
          }
          ,
          e.isBase64URLDot = qt,
          e.namearraytobinstr = te,
          e.extendClass = ne,
          e.foldnl = Pt,
          e.b64topem = function (t, e) {
            return '-----BEGIN ' + e + '-----\r\n' + Pt(t, 64) + '\r\n-----END ' + e + '-----\r\n';
          }
          ,
          e.pemtob64 = function (t) {
            return -1 == t.indexOf('-----BEGIN ') || -1 == t.indexOf('-----END ') ? null : (t = (t = (t = t.replace(/^[\s\S]*?-----BEGIN [^-]+-----/m, '')).replace(/-----END [\s\S]+$/m, '')).replace(/\s+/g, '')).match(/^[0-9a-zA-Z+/=]+$/) ? t : null;
          }
        ,
        e.timeogen = Dt,
        e.aryval = ee,
        e.inttohex = Wt,
        e.twoscompl = Yt,
        e.KJUR = ut,
        e.crypto = ut.crypto,
        e.asn1 = ut.asn1,
        e.jws = ut.jws,
        e.lang = ut.lang,
        e.VERSION = '10.9.0',
        e.VERSION_FULL = 'jsrsasign(all) 10.9.0 (2023-11-27) (c) 2010-2023 Kenji Urushima | kjur.github.io/jsrsasign/license';
      }
    ).call(e, n(309).Buffer);
  },
  309: function (t, e, n) {
    'use strict';
    (function (t) {
        /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
        var r = n(310)
          , i = n(311)
          , o = n(312);

        function s() {
          return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }

        function a(t, e) {
          if (s() < e)
            throw new RangeError('Invalid typed array length');
          return u.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = u.prototype : (null === t && (t = new u(e)),
            t.length = e),
            t;
        }

        function u(t, e, n) {
          if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u))
            return new u(t, e, n);
          if ('number' == typeof t) {
            if ('string' == typeof e)
              throw new Error('If encoding is specified then the first argument must be a string');
            return h(this, t);
          }
          return c(this, t, e, n);
        }

        function c(t, e, n, r) {
          if ('number' == typeof e)
            throw new TypeError('"value" argument must not be a number');
          return 'undefined' != typeof ArrayBuffer && e instanceof ArrayBuffer ? function (t, e, n, r) {
            if (e.byteLength,
            n < 0 || e.byteLength < n)
              throw new RangeError('\'offset\' is out of bounds');
            if (e.byteLength < n + (r || 0))
              throw new RangeError('\'length\' is out of bounds');
            e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r);
            u.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = u.prototype : t = f(t, e);
            return t;
          }(t, e, n, r) : 'string' == typeof e ? function (t, e, n) {
            'string' == typeof n && '' !== n || (n = 'utf8');
            if (!u.isEncoding(n))
              throw new TypeError('"encoding" must be a valid string encoding');
            var r = 0 | d(e, n)
              , i = (t = a(t, r)).write(e, n);
            i !== r && (t = t.slice(0, i));
            return t;
          }(t, e, n) : function (t, e) {
            if (u.isBuffer(e)) {
              var n = 0 | p(e.length);
              return 0 === (t = a(t, n)).length || e.copy(t, 0, 0, n),
                t;
            }
            if (e) {
              if ('undefined' != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || 'length' in e)
                return 'number' != typeof e.length || (r = e.length) != r ? a(t, 0) : f(t, e);
              if ('Buffer' === e.type && o(e.data))
                return f(t, e.data);
            }
            var r;
            throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
          }(t, e);
        }

        function l(t) {
          if ('number' != typeof t)
            throw new TypeError('"size" argument must be a number');
          if (t < 0)
            throw new RangeError('"size" argument must not be negative');
        }

        function h(t, e) {
          if (l(e),
            t = a(t, e < 0 ? 0 : 0 | p(e)),
            !u.TYPED_ARRAY_SUPPORT)
            for (var n = 0; n < e; ++n)
              t[n] = 0;
          return t;
        }

        function f(t, e) {
          var n = e.length < 0 ? 0 : 0 | p(e.length);
          t = a(t, n);
          for (var r = 0; r < n; r += 1)
            t[r] = 255 & e[r];
          return t;
        }

        function p(t) {
          if (t >= s())
            throw new RangeError('Attempt to allocate Buffer larger than maximum size: 0x' + s().toString(16) + ' bytes');
          return 0 | t;
        }

        function d(t, e) {
          if (u.isBuffer(t))
            return t.length;
          if ('undefined' != typeof ArrayBuffer && 'function' == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
            return t.byteLength;
          'string' != typeof t && (t = '' + t);
          var n = t.length;
          if (0 === n)
            return 0;
          for (var r = !1; ;)
            switch (e) {
              case 'ascii':
              case 'latin1':
              case 'binary':
                return n;
              case 'utf8':
              case 'utf-8':
              case void 0:
                return M(t).length;
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return 2 * n;
              case 'hex':
                return n >>> 1;
              case 'base64':
                return U(t).length;
              default:
                if (r)
                  return M(t).length;
                e = ('' + e).toLowerCase(),
                  r = !0;
            }
        }

        function g(t, e, n) {
          var r = !1;
          if ((void 0 === e || e < 0) && (e = 0),
          e > this.length)
            return '';
          if ((void 0 === n || n > this.length) && (n = this.length),
          n <= 0)
            return '';
          if ((n >>>= 0) <= (e >>>= 0))
            return '';
          for (t || (t = 'utf8'); ;)
            switch (t) {
              case 'hex':
                return T(this, e, n);
              case 'utf8':
              case 'utf-8':
                return P(this, e, n);
              case 'ascii':
                return F(this, e, n);
              case 'latin1':
              case 'binary':
                return k(this, e, n);
              case 'base64':
                return C(this, e, n);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return _(this, e, n);
              default:
                if (r)
                  throw new TypeError('Unknown encoding: ' + t);
                t = (t + '').toLowerCase(),
                  r = !0;
            }
        }

        function v(t, e, n) {
          var r = t[e];
          t[e] = t[n],
            t[n] = r;
        }

        function m(t, e, n, r, i) {
          if (0 === t.length)
            return -1;
          if ('string' == typeof n ? (r = n,
            n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648),
            n = +n,
          isNaN(n) && (n = i ? 0 : t.length - 1),
          n < 0 && (n = t.length + n),
          n >= t.length) {
            if (i)
              return -1;
            n = t.length - 1;
          } else if (n < 0) {
            if (!i)
              return -1;
            n = 0;
          }
          if ('string' == typeof e && (e = u.from(e, r)),
            u.isBuffer(e))
            return 0 === e.length ? -1 : y(t, e, n, r, i);
          if ('number' == typeof e)
            return e &= 255,
              u.TYPED_ARRAY_SUPPORT && 'function' == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : y(t, [e], n, r, i);
          throw new TypeError('val must be string, number or Buffer');
        }

        function y(t, e, n, r, i) {
          var o, s = 1, a = t.length, u = e.length;
          if (void 0 !== r && ('ucs2' === (r = String(r).toLowerCase()) || 'ucs-2' === r || 'utf16le' === r || 'utf-16le' === r)) {
            if (t.length < 2 || e.length < 2)
              return -1;
            s = 2,
              a /= 2,
              u /= 2,
              n /= 2;
          }

          function c(t, e) {
            return 1 === s ? t[e] : t.readUInt16BE(e * s);
          }

          if (i) {
            var l = -1;
            for (o = n; o < a; o++)
              if (c(t, o) === c(e, -1 === l ? 0 : o - l)) {
                if (-1 === l && (l = o),
                o - l + 1 === u)
                  return l * s;
              } else
                -1 !== l && (o -= o - l),
                  l = -1;
          } else
            for (n + u > a && (n = a - u),
                   o = n; o >= 0; o--) {
              for (var h = !0, f = 0; f < u; f++)
                if (c(t, o + f) !== c(e, f)) {
                  h = !1;
                  break;
                }
              if (h)
                return o;
            }
          return -1;
        }

        function b(t, e, n, r) {
          n = Number(n) || 0;
          var i = t.length - n;
          r ? (r = Number(r)) > i && (r = i) : r = i;
          var o = e.length;
          if (o % 2 != 0)
            throw new TypeError('Invalid hex string');
          r > o / 2 && (r = o / 2);
          for (var s = 0; s < r; ++s) {
            var a = parseInt(e.substr(2 * s, 2), 16);
            if (isNaN(a))
              return s;
            t[n + s] = a;
          }
          return s;
        }

        function x(t, e, n, r) {
          return $(M(e, t.length - n), t, n, r);
        }

        function w(t, e, n, r) {
          return $(function (t) {
            for (var e = [], n = 0; n < t.length; ++n)
              e.push(255 & t.charCodeAt(n));
            return e;
          }(e), t, n, r);
        }

        function S(t, e, n, r) {
          return w(t, e, n, r);
        }

        function E(t, e, n, r) {
          return $(U(e), t, n, r);
        }

        function A(t, e, n, r) {
          return $(function (t, e) {
            for (var n, r, i, o = [], s = 0; s < t.length && !((e -= 2) < 0); ++s)
              n = t.charCodeAt(s),
                r = n >> 8,
                i = n % 256,
                o.push(i),
                o.push(r);
            return o;
          }(e, t.length - n), t, n, r);
        }

        function C(t, e, n) {
          return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n));
        }

        function P(t, e, n) {
          n = Math.min(t.length, n);
          for (var r = [], i = e; i < n;) {
            var o, s, a, u, c = t[i], l = null, h = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
            if (i + h <= n)
              switch (h) {
                case 1:
                  c < 128 && (l = c);
                  break;
                case 2:
                  128 == (192 & (o = t[i + 1])) && (u = (31 & c) << 6 | 63 & o) > 127 && (l = u);
                  break;
                case 3:
                  o = t[i + 1],
                    s = t[i + 2],
                  128 == (192 & o) && 128 == (192 & s) && (u = (15 & c) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (l = u);
                  break;
                case 4:
                  o = t[i + 1],
                    s = t[i + 2],
                    a = t[i + 3],
                  128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (l = u);
              }
            null === l ? (l = 65533,
              h = 1) : l > 65535 && (l -= 65536,
              r.push(l >>> 10 & 1023 | 55296),
              l = 56320 | 1023 & l),
              r.push(l),
              i += h;
          }
          return function (t) {
            var e = t.length;
            if (e <= 4096)
              return String.fromCharCode.apply(String, t);
            var n = ''
              , r = 0;
            for (; r < e;)
              n += String.fromCharCode.apply(String, t.slice(r, r += 4096));
            return n;
          }(r);
        }

        e.Buffer = u,
          e.SlowBuffer = function (t) {
            +t != t && (t = 0);
            return u.alloc(+t);
          }
          ,
          e.INSPECT_MAX_BYTES = 50,
          u.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () {
            try {
              var t = new Uint8Array(1);
              return t.__proto__ = {
                __proto__: Uint8Array.prototype,
                foo: function () {
                  return 42;
                }
              },
              42 === t.foo() && 'function' == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
            } catch (t) {
              return !1;
            }
          }(),
          e.kMaxLength = s(),
          u.poolSize = 8192,
          u._augment = function (t) {
            return t.__proto__ = u.prototype,
              t;
          }
          ,
          u.from = function (t, e, n) {
            return c(null, t, e, n);
          }
          ,
        u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype,
          u.__proto__ = Uint8Array,
        'undefined' != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
          value: null,
          configurable: !0
        })),
          u.alloc = function (t, e, n) {
            return function (t, e, n, r) {
              return l(e),
                e <= 0 ? a(t, e) : void 0 !== n ? 'string' == typeof r ? a(t, e).fill(n, r) : a(t, e).fill(n) : a(t, e);
            }(null, t, e, n);
          }
          ,
          u.allocUnsafe = function (t) {
            return h(null, t);
          }
          ,
          u.allocUnsafeSlow = function (t) {
            return h(null, t);
          }
          ,
          u.isBuffer = function (t) {
            return !(null == t || !t._isBuffer);
          }
          ,
          u.compare = function (t, e) {
            if (!u.isBuffer(t) || !u.isBuffer(e))
              throw new TypeError('Arguments must be Buffers');
            if (t === e)
              return 0;
            for (var n = t.length, r = e.length, i = 0, o = Math.min(n, r); i < o; ++i)
              if (t[i] !== e[i]) {
                n = t[i],
                  r = e[i];
                break;
              }
            return n < r ? -1 : r < n ? 1 : 0;
          }
          ,
          u.isEncoding = function (t) {
            switch (String(t).toLowerCase()) {
              case 'hex':
              case 'utf8':
              case 'utf-8':
              case 'ascii':
              case 'latin1':
              case 'binary':
              case 'base64':
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return !0;
              default:
                return !1;
            }
          }
          ,
          u.concat = function (t, e) {
            if (!o(t))
              throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === t.length)
              return u.alloc(0);
            var n;
            if (void 0 === e)
              for (e = 0,
                     n = 0; n < t.length; ++n)
                e += t[n].length;
            var r = u.allocUnsafe(e)
              , i = 0;
            for (n = 0; n < t.length; ++n) {
              var s = t[n];
              if (!u.isBuffer(s))
                throw new TypeError('"list" argument must be an Array of Buffers');
              s.copy(r, i),
                i += s.length;
            }
            return r;
          }
          ,
          u.byteLength = d,
          u.prototype._isBuffer = !0,
          u.prototype.swap16 = function () {
            var t = this.length;
            if (t % 2 != 0)
              throw new RangeError('Buffer size must be a multiple of 16-bits');
            for (var e = 0; e < t; e += 2)
              v(this, e, e + 1);
            return this;
          }
          ,
          u.prototype.swap32 = function () {
            var t = this.length;
            if (t % 4 != 0)
              throw new RangeError('Buffer size must be a multiple of 32-bits');
            for (var e = 0; e < t; e += 4)
              v(this, e, e + 3),
                v(this, e + 1, e + 2);
            return this;
          }
          ,
          u.prototype.swap64 = function () {
            var t = this.length;
            if (t % 8 != 0)
              throw new RangeError('Buffer size must be a multiple of 64-bits');
            for (var e = 0; e < t; e += 8)
              v(this, e, e + 7),
                v(this, e + 1, e + 6),
                v(this, e + 2, e + 5),
                v(this, e + 3, e + 4);
            return this;
          }
          ,
          u.prototype.toString = function () {
            var t = 0 | this.length;
            return 0 === t ? '' : 0 === arguments.length ? P(this, 0, t) : g.apply(this, arguments);
          }
          ,
          u.prototype.equals = function (t) {
            if (!u.isBuffer(t))
              throw new TypeError('Argument must be a Buffer');
            return this === t || 0 === u.compare(this, t);
          }
          ,
          u.prototype.inspect = function () {
            var t = ''
              , n = e.INSPECT_MAX_BYTES;
            return this.length > 0 && (t = this.toString('hex', 0, n).match(/.{2}/g).join(' '),
            this.length > n && (t += ' ... ')),
            '<Buffer ' + t + '>';
          }
          ,
          u.prototype.compare = function (t, e, n, r, i) {
            if (!u.isBuffer(t))
              throw new TypeError('Argument must be a Buffer');
            if (void 0 === e && (e = 0),
            void 0 === n && (n = t ? t.length : 0),
            void 0 === r && (r = 0),
            void 0 === i && (i = this.length),
            e < 0 || n > t.length || r < 0 || i > this.length)
              throw new RangeError('out of range index');
            if (r >= i && e >= n)
              return 0;
            if (r >= i)
              return -1;
            if (e >= n)
              return 1;
            if (this === t)
              return 0;
            for (var o = (i >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (e >>>= 0), a = Math.min(o, s), c = this.slice(r, i), l = t.slice(e, n), h = 0; h < a; ++h)
              if (c[h] !== l[h]) {
                o = c[h],
                  s = l[h];
                break;
              }
            return o < s ? -1 : s < o ? 1 : 0;
          }
          ,
          u.prototype.includes = function (t, e, n) {
            return -1 !== this.indexOf(t, e, n);
          }
          ,
          u.prototype.indexOf = function (t, e, n) {
            return m(this, t, e, n, !0);
          }
          ,
          u.prototype.lastIndexOf = function (t, e, n) {
            return m(this, t, e, n, !1);
          }
          ,
          u.prototype.write = function (t, e, n, r) {
            if (void 0 === e)
              r = 'utf8',
                n = this.length,
                e = 0;
            else if (void 0 === n && 'string' == typeof e)
              r = e,
                n = this.length,
                e = 0;
            else {
              if (!isFinite(e))
                throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
              e |= 0,
                isFinite(n) ? (n |= 0,
                void 0 === r && (r = 'utf8')) : (r = n,
                  n = void 0);
            }
            var i = this.length - e;
            if ((void 0 === n || n > i) && (n = i),
            t.length > 0 && (n < 0 || e < 0) || e > this.length)
              throw new RangeError('Attempt to write outside buffer bounds');
            r || (r = 'utf8');
            for (var o = !1; ;)
              switch (r) {
                case 'hex':
                  return b(this, t, e, n);
                case 'utf8':
                case 'utf-8':
                  return x(this, t, e, n);
                case 'ascii':
                  return w(this, t, e, n);
                case 'latin1':
                case 'binary':
                  return S(this, t, e, n);
                case 'base64':
                  return E(this, t, e, n);
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return A(this, t, e, n);
                default:
                  if (o)
                    throw new TypeError('Unknown encoding: ' + r);
                  r = ('' + r).toLowerCase(),
                    o = !0;
              }
          }
          ,
          u.prototype.toJSON = function () {
            return {
              type: 'Buffer',
              data: Array.prototype.slice.call(this._arr || this, 0)
            };
          }
        ;

        function F(t, e, n) {
          var r = '';
          n = Math.min(t.length, n);
          for (var i = e; i < n; ++i)
            r += String.fromCharCode(127 & t[i]);
          return r;
        }

        function k(t, e, n) {
          var r = '';
          n = Math.min(t.length, n);
          for (var i = e; i < n; ++i)
            r += String.fromCharCode(t[i]);
          return r;
        }

        function T(t, e, n) {
          var r = t.length;
          (!e || e < 0) && (e = 0),
          (!n || n < 0 || n > r) && (n = r);
          for (var i = '', o = e; o < n; ++o)
            i += L(t[o]);
          return i;
        }

        function _(t, e, n) {
          for (var r = t.slice(e, n), i = '', o = 0; o < r.length; o += 2)
            i += String.fromCharCode(r[o] + 256 * r[o + 1]);
          return i;
        }

        function I(t, e, n) {
          if (t % 1 != 0 || t < 0)
            throw new RangeError('offset is not uint');
          if (t + e > n)
            throw new RangeError('Trying to access beyond buffer length');
        }

        function D(t, e, n, r, i, o) {
          if (!u.isBuffer(t))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (e > i || e < o)
            throw new RangeError('"value" argument is out of bounds');
          if (n + r > t.length)
            throw new RangeError('Index out of range');
        }

        function N(t, e, n, r) {
          e < 0 && (e = 65535 + e + 1);
          for (var i = 0, o = Math.min(t.length - n, 2); i < o; ++i)
            t[n + i] = (e & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i);
        }

        function O(t, e, n, r) {
          e < 0 && (e = 4294967295 + e + 1);
          for (var i = 0, o = Math.min(t.length - n, 4); i < o; ++i)
            t[n + i] = e >>> 8 * (r ? i : 3 - i) & 255;
        }

        function R(t, e, n, r, i, o) {
          if (n + r > t.length)
            throw new RangeError('Index out of range');
          if (n < 0)
            throw new RangeError('Index out of range');
        }

        function j(t, e, n, r, o) {
          return o || R(t, 0, n, 4),
            i.write(t, e, n, r, 23, 4),
          n + 4;
        }

        function B(t, e, n, r, o) {
          return o || R(t, 0, n, 8),
            i.write(t, e, n, r, 52, 8),
          n + 8;
        }

        u.prototype.slice = function (t, e) {
          var n, r = this.length;
          if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
          e < t && (e = t),
            u.TYPED_ARRAY_SUPPORT)
            (n = this.subarray(t, e)).__proto__ = u.prototype;
          else {
            var i = e - t;
            n = new u(i, void 0);
            for (var o = 0; o < i; ++o)
              n[o] = this[o + t];
          }
          return n;
        }
          ,
          u.prototype.readUIntLE = function (t, e, n) {
            t |= 0,
              e |= 0,
            n || I(t, e, this.length);
            for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);)
              r += this[t + o] * i;
            return r;
          }
          ,
          u.prototype.readUIntBE = function (t, e, n) {
            t |= 0,
              e |= 0,
            n || I(t, e, this.length);
            for (var r = this[t + --e], i = 1; e > 0 && (i *= 256);)
              r += this[t + --e] * i;
            return r;
          }
          ,
          u.prototype.readUInt8 = function (t, e) {
            return e || I(t, 1, this.length),
              this[t];
          }
          ,
          u.prototype.readUInt16LE = function (t, e) {
            return e || I(t, 2, this.length),
            this[t] | this[t + 1] << 8;
          }
          ,
          u.prototype.readUInt16BE = function (t, e) {
            return e || I(t, 2, this.length),
            this[t] << 8 | this[t + 1];
          }
          ,
          u.prototype.readUInt32LE = function (t, e) {
            return e || I(t, 4, this.length),
            (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
          }
          ,
          u.prototype.readUInt32BE = function (t, e) {
            return e || I(t, 4, this.length),
            16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
          }
          ,
          u.prototype.readIntLE = function (t, e, n) {
            t |= 0,
              e |= 0,
            n || I(t, e, this.length);
            for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);)
              r += this[t + o] * i;
            return r >= (i *= 128) && (r -= Math.pow(2, 8 * e)),
              r;
          }
          ,
          u.prototype.readIntBE = function (t, e, n) {
            t |= 0,
              e |= 0,
            n || I(t, e, this.length);
            for (var r = e, i = 1, o = this[t + --r]; r > 0 && (i *= 256);)
              o += this[t + --r] * i;
            return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)),
              o;
          }
          ,
          u.prototype.readInt8 = function (t, e) {
            return e || I(t, 1, this.length),
              128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
          }
          ,
          u.prototype.readInt16LE = function (t, e) {
            e || I(t, 2, this.length);
            var n = this[t] | this[t + 1] << 8;
            return 32768 & n ? 4294901760 | n : n;
          }
          ,
          u.prototype.readInt16BE = function (t, e) {
            e || I(t, 2, this.length);
            var n = this[t + 1] | this[t] << 8;
            return 32768 & n ? 4294901760 | n : n;
          }
          ,
          u.prototype.readInt32LE = function (t, e) {
            return e || I(t, 4, this.length),
            this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
          }
          ,
          u.prototype.readInt32BE = function (t, e) {
            return e || I(t, 4, this.length),
            this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
          }
          ,
          u.prototype.readFloatLE = function (t, e) {
            return e || I(t, 4, this.length),
              i.read(this, t, !0, 23, 4);
          }
          ,
          u.prototype.readFloatBE = function (t, e) {
            return e || I(t, 4, this.length),
              i.read(this, t, !1, 23, 4);
          }
          ,
          u.prototype.readDoubleLE = function (t, e) {
            return e || I(t, 8, this.length),
              i.read(this, t, !0, 52, 8);
          }
          ,
          u.prototype.readDoubleBE = function (t, e) {
            return e || I(t, 8, this.length),
              i.read(this, t, !1, 52, 8);
          }
          ,
          u.prototype.writeUIntLE = function (t, e, n, r) {
            (t = +t,
              e |= 0,
              n |= 0,
              r) || D(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var i = 1
              , o = 0;
            for (this[e] = 255 & t; ++o < n && (i *= 256);)
              this[e + o] = t / i & 255;
            return e + n;
          }
          ,
          u.prototype.writeUIntBE = function (t, e, n, r) {
            (t = +t,
              e |= 0,
              n |= 0,
              r) || D(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var i = n - 1
              , o = 1;
            for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);)
              this[e + i] = t / o & 255;
            return e + n;
          }
          ,
          u.prototype.writeUInt8 = function (t, e, n) {
            return t = +t,
              e |= 0,
            n || D(this, t, e, 1, 255, 0),
            u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              this[e] = 255 & t,
            e + 1;
          }
          ,
          u.prototype.writeUInt16LE = function (t, e, n) {
            return t = +t,
              e |= 0,
            n || D(this, t, e, 2, 65535, 0),
              u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
                this[e + 1] = t >>> 8) : N(this, t, e, !0),
            e + 2;
          }
          ,
          u.prototype.writeUInt16BE = function (t, e, n) {
            return t = +t,
              e |= 0,
            n || D(this, t, e, 2, 65535, 0),
              u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8,
                this[e + 1] = 255 & t) : N(this, t, e, !1),
            e + 2;
          }
          ,
          u.prototype.writeUInt32LE = function (t, e, n) {
            return t = +t,
              e |= 0,
            n || D(this, t, e, 4, 4294967295, 0),
              u.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24,
                this[e + 2] = t >>> 16,
                this[e + 1] = t >>> 8,
                this[e] = 255 & t) : O(this, t, e, !0),
            e + 4;
          }
          ,
          u.prototype.writeUInt32BE = function (t, e, n) {
            return t = +t,
              e |= 0,
            n || D(this, t, e, 4, 4294967295, 0),
              u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24,
                this[e + 1] = t >>> 16,
                this[e + 2] = t >>> 8,
                this[e + 3] = 255 & t) : O(this, t, e, !1),
            e + 4;
          }
          ,
          u.prototype.writeIntLE = function (t, e, n, r) {
            if (t = +t,
              e |= 0,
              !r) {
              var i = Math.pow(2, 8 * n - 1);
              D(this, t, e, n, i - 1, -i);
            }
            var o = 0
              , s = 1
              , a = 0;
            for (this[e] = 255 & t; ++o < n && (s *= 256);)
              t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1),
                this[e + o] = (t / s >> 0) - a & 255;
            return e + n;
          }
          ,
          u.prototype.writeIntBE = function (t, e, n, r) {
            if (t = +t,
              e |= 0,
              !r) {
              var i = Math.pow(2, 8 * n - 1);
              D(this, t, e, n, i - 1, -i);
            }
            var o = n - 1
              , s = 1
              , a = 0;
            for (this[e + o] = 255 & t; --o >= 0 && (s *= 256);)
              t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1),
                this[e + o] = (t / s >> 0) - a & 255;
            return e + n;
          }
          ,
          u.prototype.writeInt8 = function (t, e, n) {
            return t = +t,
              e |= 0,
            n || D(this, t, e, 1, 127, -128),
            u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
            t < 0 && (t = 255 + t + 1),
              this[e] = 255 & t,
            e + 1;
          }
          ,
          u.prototype.writeInt16LE = function (t, e, n) {
            return t = +t,
              e |= 0,
            n || D(this, t, e, 2, 32767, -32768),
              u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
                this[e + 1] = t >>> 8) : N(this, t, e, !0),
            e + 2;
          }
          ,
          u.prototype.writeInt16BE = function (t, e, n) {
            return t = +t,
              e |= 0,
            n || D(this, t, e, 2, 32767, -32768),
              u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8,
                this[e + 1] = 255 & t) : N(this, t, e, !1),
            e + 2;
          }
          ,
          u.prototype.writeInt32LE = function (t, e, n) {
            return t = +t,
              e |= 0,
            n || D(this, t, e, 4, 2147483647, -2147483648),
              u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
                this[e + 1] = t >>> 8,
                this[e + 2] = t >>> 16,
                this[e + 3] = t >>> 24) : O(this, t, e, !0),
            e + 4;
          }
          ,
          u.prototype.writeInt32BE = function (t, e, n) {
            return t = +t,
              e |= 0,
            n || D(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
              u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24,
                this[e + 1] = t >>> 16,
                this[e + 2] = t >>> 8,
                this[e + 3] = 255 & t) : O(this, t, e, !1),
            e + 4;
          }
          ,
          u.prototype.writeFloatLE = function (t, e, n) {
            return j(this, t, e, !0, n);
          }
          ,
          u.prototype.writeFloatBE = function (t, e, n) {
            return j(this, t, e, !1, n);
          }
          ,
          u.prototype.writeDoubleLE = function (t, e, n) {
            return B(this, t, e, !0, n);
          }
          ,
          u.prototype.writeDoubleBE = function (t, e, n) {
            return B(this, t, e, !1, n);
          }
          ,
          u.prototype.copy = function (t, e, n, r) {
            if (n || (n = 0),
            r || 0 === r || (r = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            r > 0 && r < n && (r = n),
            r === n)
              return 0;
            if (0 === t.length || 0 === this.length)
              return 0;
            if (e < 0)
              throw new RangeError('targetStart out of bounds');
            if (n < 0 || n >= this.length)
              throw new RangeError('sourceStart out of bounds');
            if (r < 0)
              throw new RangeError('sourceEnd out of bounds');
            r > this.length && (r = this.length),
            t.length - e < r - n && (r = t.length - e + n);
            var i, o = r - n;
            if (this === t && n < e && e < r)
              for (i = o - 1; i >= 0; --i)
                t[i + e] = this[i + n];
            else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT)
              for (i = 0; i < o; ++i)
                t[i + e] = this[i + n];
            else
              Uint8Array.prototype.set.call(t, this.subarray(n, n + o), e);
            return o;
          }
          ,
          u.prototype.fill = function (t, e, n, r) {
            if ('string' == typeof t) {
              if ('string' == typeof e ? (r = e,
                e = 0,
                n = this.length) : 'string' == typeof n && (r = n,
                n = this.length),
              1 === t.length) {
                var i = t.charCodeAt(0);
                i < 256 && (t = i);
              }
              if (void 0 !== r && 'string' != typeof r)
                throw new TypeError('encoding must be a string');
              if ('string' == typeof r && !u.isEncoding(r))
                throw new TypeError('Unknown encoding: ' + r);
            } else
              'number' == typeof t && (t &= 255);
            if (e < 0 || this.length < e || this.length < n)
              throw new RangeError('Out of range index');
            if (n <= e)
              return this;
            var o;
            if (e >>>= 0,
              n = void 0 === n ? this.length : n >>> 0,
            t || (t = 0),
            'number' == typeof t)
              for (o = e; o < n; ++o)
                this[o] = t;
            else {
              var s = u.isBuffer(t) ? t : M(new u(t, r).toString())
                , a = s.length;
              for (o = 0; o < n - e; ++o)
                this[o + e] = s[o % a];
            }
            return this;
          }
        ;
        var H = /[^+\/0-9A-Za-z-_]/g;

        function L(t) {
          return t < 16 ? '0' + t.toString(16) : t.toString(16);
        }

        function M(t, e) {
          var n;
          e = e || 1 / 0;
          for (var r = t.length, i = null, o = [], s = 0; s < r; ++s) {
            if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
              if (!i) {
                if (n > 56319) {
                  (e -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                if (s + 1 === r) {
                  (e -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                i = n;
                continue;
              }
              if (n < 56320) {
                (e -= 3) > -1 && o.push(239, 191, 189),
                  i = n;
                continue;
              }
              n = 65536 + (i - 55296 << 10 | n - 56320);
            } else
              i && (e -= 3) > -1 && o.push(239, 191, 189);
            if (i = null,
            n < 128) {
              if ((e -= 1) < 0)
                break;
              o.push(n);
            } else if (n < 2048) {
              if ((e -= 2) < 0)
                break;
              o.push(n >> 6 | 192, 63 & n | 128);
            } else if (n < 65536) {
              if ((e -= 3) < 0)
                break;
              o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
            } else {
              if (!(n < 1114112))
                throw new Error('Invalid code point');
              if ((e -= 4) < 0)
                break;
              o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
            }
          }
          return o;
        }

        function U(t) {
          return r.toByteArray(function (t) {
            if ((t = function (t) {
              return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, '');
            }(t).replace(H, '')).length < 2)
              return '';
            for (; t.length % 4 != 0;)
              t += '=';
            return t;
          }(t));
        }

        function $(t, e, n, r) {
          for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i)
            e[i + n] = t[i];
          return i;
        }
      }
    ).call(e, n(211));
  },
  211: function (t, e) {
    var n;
    n = function () {
      return this;
    }();
    try {
      n = n || Function('return this')() || (0,
        eval)('this');
    } catch (t) {
      'object' == typeof window && (n = window);
    }
    t.exports = n;
  },
  310: function (t, e, n) {
    'use strict';
    e.byteLength = function (t) {
      var e = c(t)
        , n = e[0]
        , r = e[1];
      return 3 * (n + r) / 4 - r;
    }
      ,
      e.toByteArray = function (t) {
        var e, n, r = c(t), s = r[0], a = r[1], u = new o(function (t, e, n) {
          return 3 * (e + n) / 4 - n;
        }(0, s, a)), l = 0, h = a > 0 ? s - 4 : s;
        for (n = 0; n < h; n += 4)
          e = i[t.charCodeAt(n)] << 18 | i[t.charCodeAt(n + 1)] << 12 | i[t.charCodeAt(n + 2)] << 6 | i[t.charCodeAt(n + 3)],
            u[l++] = e >> 16 & 255,
            u[l++] = e >> 8 & 255,
            u[l++] = 255 & e;
        2 === a && (e = i[t.charCodeAt(n)] << 2 | i[t.charCodeAt(n + 1)] >> 4,
          u[l++] = 255 & e);
        1 === a && (e = i[t.charCodeAt(n)] << 10 | i[t.charCodeAt(n + 1)] << 4 | i[t.charCodeAt(n + 2)] >> 2,
          u[l++] = e >> 8 & 255,
          u[l++] = 255 & e);
        return u;
      }
      ,
      e.fromByteArray = function (t) {
        for (var e, n = t.length, i = n % 3, o = [], s = 0, a = n - i; s < a; s += 16383)
          o.push(l(t, s, s + 16383 > a ? a : s + 16383));
        1 === i ? (e = t[n - 1],
          o.push(r[e >> 2] + r[e << 4 & 63] + '==')) : 2 === i && (e = (t[n - 2] << 8) + t[n - 1],
          o.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + '='));
        return o.join('');
      }
    ;
    for (var r = [], i = [], o = 'undefined' != typeof Uint8Array ? Uint8Array : Array, s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', a = 0, u = s.length; a < u; ++a)
      r[a] = s[a],
        i[s.charCodeAt(a)] = a;

    function c(t) {
      var e = t.length;
      if (e % 4 > 0)
        throw new Error('Invalid string. Length must be a multiple of 4');
      var n = t.indexOf('=');
      return -1 === n && (n = e),
        [n, n === e ? 0 : 4 - n % 4];
    }

    function l(t, e, n) {
      for (var i, o, s = [], a = e; a < n; a += 3)
        i = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]),
          s.push(r[(o = i) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[63 & o]);
      return s.join('');
    }

    i['-'.charCodeAt(0)] = 62,
      i['_'.charCodeAt(0)] = 63;
  },
  311: function (t, e) {
    /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
    e.read = function (t, e, n, r, i) {
      var o, s, a = 8 * i - r - 1, u = (1 << a) - 1, c = u >> 1, l = -7, h = n ? i - 1 : 0, f = n ? -1 : 1,
        p = t[e + h];
      for (h += f,
             o = p & (1 << -l) - 1,
             p >>= -l,
             l += a; l > 0; o = 256 * o + t[e + h],
             h += f,
             l -= 8)
        ;
      for (s = o & (1 << -l) - 1,
             o >>= -l,
             l += r; l > 0; s = 256 * s + t[e + h],
             h += f,
             l -= 8)
        ;
      if (0 === o)
        o = 1 - c;
      else {
        if (o === u)
          return s ? NaN : 1 / 0 * (p ? -1 : 1);
        s += Math.pow(2, r),
          o -= c;
      }
      return (p ? -1 : 1) * s * Math.pow(2, o - r);
    }
      ,
      e.write = function (t, e, n, r, i, o) {
        var s, a, u, c = 8 * o - i - 1, l = (1 << c) - 1, h = l >> 1,
          f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = r ? 0 : o - 1, d = r ? 1 : -1,
          g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
        for (e = Math.abs(e),
               isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0,
                 s = l) : (s = Math.floor(Math.log(e) / Math.LN2),
               e * (u = Math.pow(2, -s)) < 1 && (s--,
                 u *= 2),
               (e += s + h >= 1 ? f / u : f * Math.pow(2, 1 - h)) * u >= 2 && (s++,
                 u /= 2),
                 s + h >= l ? (a = 0,
                   s = l) : s + h >= 1 ? (a = (e * u - 1) * Math.pow(2, i),
                   s += h) : (a = e * Math.pow(2, h - 1) * Math.pow(2, i),
                   s = 0)); i >= 8; t[n + p] = 255 & a,
               p += d,
               a /= 256,
               i -= 8)
          ;
        for (s = s << i | a,
               c += i; c > 0; t[n + p] = 255 & s,
               p += d,
               s /= 256,
               c -= 8)
          ;
        t[n + p - d] |= 128 * g;
      };
  },
  312: function (t, e) {
    var n = {}.toString;
    t.exports = Array.isArray || function (t) {
      return '[object Array]' == n.call(t);
    };
  }
});

var r = window.encryptWebpack(308);

/**
 * 无法判断他是那种加密算法来的
 */
var i = r.KEYUTIL.getKey('-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAo5TPthIDEpYCXozI3c+2\nj3AFmXHI/3ozT5GfKSp1/XRd64Uo1J9cheAetxHD8YdBa/BDwU5x7lhYtqYRQgdh\nTG/84rSi+d855p6ygGRLSX9FVSnEga+g1+K6wJwEv5b0IhMHyY9mUbUyPKLMEAyx\ndshth7QNEn4XphfmnS5OdltmqUhhTAjYVQt7KHVpx/GiyhKIMKFOy/dx3FHbT1wb\nTFdu25/DSSSqTJVsBe2M2xydb4bHW44pqb2lxClUS/FBfbR0LnIgRNTb2NSVfyQ2\nhQMcZ3zqcrmYmKF8otPqASLbLQUyMbc+B3v0T8ak0mtV0ozEMAdl5B/SD5t/wh26\n3wIDAQAB\n-----END PUBLIC KEY-----')
  , o = r.KJUR.crypto.Cipher.encrypt('123456', i)
  , s = (0, r.hextob64)(o);

// s就是加密之后的密码
console.log(s);