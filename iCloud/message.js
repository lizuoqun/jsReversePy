let j7c = {};
const CryptoJS = require('crypto-js');
j7c.bh7a = function (k7d, cH8z, O7H) {
  if (!k7d || !k7d.length || !j7c.gO9F(cH8z))
    return this;
  if (!!k7d.forEach) {
    k7d.forEach(cH8z, O7H);
    return this;
  }
  for (var i = 0, l = k7d.length; i < l; i++)
    cH8z.call(O7H, k7d[i], i, k7d);
  return this;
};

j7c.gO9F = function (i7b) {
  return Hb6V(i7b, 'function');
};

var Hb6V = function (i7b, u7n) {
  try {
    u7n = u7n.toLowerCase();
    if (i7b === null)
      return u7n == 'null';
    if (i7b === undefined)
      return u7n == 'undefined';
    return bd7W.toString.call(i7b).toLowerCase() == '[object ' + u7n + ']';
  } catch (e) {
    return !1;
  }
};

var bsc2x = function (cya8S) {
  var m7f = [];
  j7c.bh7a(cya8S, function (cxZ8R) {
    m7f.push(RU7N.emj[cxZ8R]);
  });
  return m7f.join('');
};


let i7b = {
  'csrf_token': '0189ab0c79480b852de8e8433ff5d3c5'
};

let RU7N = {};

RU7N.md = [
  '色',
  '流感',
  '这边',
  '弱',
  '嘴唇',
  '亲',
  '开心',
  '呲牙',
  '憨笑',
  '猫',
  '皱眉',
  '幽灵',
  '蛋糕',
  '发怒',
  '大哭',
  '兔子',
  '星星',
  '钟情',
  '牵手',
  '公鸡',
  '爱意',
  '禁止',
  '狗',
  '亲亲',
  '叉',
  '礼物',
  '晕',
  '呆',
  '生病',
  '钻石',
  '拜',
  '怒',
  '示爱',
  '汗',
  '小鸡',
  '痛苦',
  '撇嘴',
  '惶恐',
  '口罩',
  '吐舌',
  '心碎',
  '生气',
  '可爱',
  '鬼脸',
  '跳舞',
  '男孩',
  '奸笑',
  '猪',
  '圈',
  '便便',
  '外星',
  '圣诞'
];

function a(a) {
  var d, e, b = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', c = '';
  for (d = 0; a > d; d += 1)
    e = Math.random() * b.length,
      e = Math.floor(e),
      c += b.charAt(e);
  return c;
}

function b(a, b) {
  var c = CryptoJS.enc.Utf8.parse(b)
    , d = CryptoJS.enc.Utf8.parse('0102030405060708')
    , e = CryptoJS.enc.Utf8.parse(a)
    , f = CryptoJS.AES.encrypt(e, c, {
    iv: d,
    mode: CryptoJS.mode.CBC
  });
  return f.toString();
}

function d(d, e, f, g) {
  var h = {}
    , i = a(16);
  return h.encText = b(d, g),
    h.encText = b(h.encText, i),
    h.encSecKey = c(i, e, f),
    h;
}

function c(a, b, c) {
  var d, e;
  return setMaxDigits(131),
    d = new RSAKeyPair(b, '', c),
    e = encryptedString(d, a);
}


function setMaxDigits(a) {
  maxDigits = a,
    ZERO_ARRAY = new Array(maxDigits);
  for (var b = 0; b < ZERO_ARRAY.length; b++)
    ZERO_ARRAY[b] = 0;
  bigZero = new BigInt,
    bigOne = new BigInt,
    bigOne.digits[0] = 1;
}

function BigInt(a) {
  this.digits = 'boolean' == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0),
    this.isNeg = !1;
}


function RSAKeyPair(a, b, c) {
  this.e = biFromHex(a),
    this.d = biFromHex(b),
    this.m = biFromHex(c),
    this.chunkSize = 2 * biHighIndex(this.m),
    this.radix = 16,
    this.barrett = new BarrettMu(this.m);
}

function biHighIndex(a) {
  for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b];)
    --b;
  return b;
}

function biFromHex(a) {
  var d, e, b = new BigInt, c = a.length;
  for (d = c,
         e = 0; d > 0; d -= 4,
         ++e)
    b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
  return b;
}

function BarrettMu(a) {
  this.modulus = biCopy(a),
    this.k = biHighIndex(this.modulus) + 1;
  var b = new BigInt;
  b.digits[2 * this.k] = 1,
    this.mu = biDivide(b, this.modulus),
    this.bkplus1 = new BigInt,
    this.bkplus1.digits[this.k + 1] = 1,
    this.modulo = BarrettMu_modulo,
    this.multiplyMod = BarrettMu_multiplyMod,
    this.powMod = BarrettMu_powMod;
}

function biCopy(a) {
  var b = new BigInt(!0);
  return b.digits = a.digits.slice(0),
    b.isNeg = a.isNeg,
    b;
}

function biDivide(a, b) {
  return biDivideModulo(a, b)[0];
}

let maxDigits, ZERO_ARRAY, bigZero, bigOne, dpl10, lr10, hexatrigesimalToChar, hexToChar, highBitMasks, lowBitMasks,
  biRadixBase = 2, biRadixBits = 16, bitsPerDigit = biRadixBits, biRadix = 65536, biHalfRadix = biRadix >>> 1,
  biRadixSquared = biRadix * biRadix, maxDigitVal = biRadix - 1, maxInteger = 9999999999999998;

highBitMasks = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535);

function biDivideModulo(a, b) {
  var f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = biNumBits(a), d = biNumBits(b), e = b.isNeg;
  if (d > c)
    return a.isNeg ? (f = biCopy(bigOne),
      f.isNeg = !b.isNeg,
      a.isNeg = !1,
      b.isNeg = !1,
      g = biSubtract(b, a),
      a.isNeg = !0,
      b.isNeg = e) : (f = new BigInt,
      g = biCopy(a)),
      new Array(f, g);
  for (f = new BigInt,
         g = a,
         h = Math.ceil(d / bitsPerDigit) - 1,
         i = 0; b.digits[h] < biHalfRadix;)
    b = biShiftLeft(b, 1),
      ++i,
      ++d,
      h = Math.ceil(d / bitsPerDigit) - 1;
  for (g = biShiftLeft(g, i),
         c += i,
         j = Math.ceil(c / bitsPerDigit) - 1,
         k = biMultiplyByRadixPower(b, j - h); -1 != biCompare(g, k);)
    ++f.digits[j - h],
      g = biSubtract(g, k);
  for (l = j; l > h; --l) {
    for (m = l >= g.digits.length ? 0 : g.digits[l],
           n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1],
           o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2],
           p = h >= b.digits.length ? 0 : b.digits[h],
           q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1],
           f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p),
           r = f.digits[l - h - 1] * (p * biRadix + q),
           s = m * biRadixSquared + (n * biRadix + o); r > s;)
      --f.digits[l - h - 1],
        r = f.digits[l - h - 1] * (p * biRadix | q),
        s = m * biRadix * biRadix + (n * biRadix + o);
    k = biMultiplyByRadixPower(b, l - h - 1),
      g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])),
    g.isNeg && (g = biAdd(g, k),
      --f.digits[l - h - 1]);
  }
  return g = biShiftRight(g, i),
    f.isNeg = a.isNeg != e,
  a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne),
    b = biShiftRight(b, i),
    g = biSubtract(b, g)),
  0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1),
    new Array(f, g);
}

function biNumBits(a) {
  var e, b = biHighIndex(a), c = a.digits[b], d = (b + 1) * bitsPerDigit;
  for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e)
    c <<= 1;
  return e;
}

function arrayCopy(a, b, c, d, e) {
  var g, h, f = Math.min(b + e, a.length);
  for (g = b,
         h = d; f > g; ++g,
         ++h)
    c[h] = a[g];
}

function biShiftLeft(a, b) {
  var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
  for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c),
         e = b % bitsPerDigit,
         f = bitsPerDigit - e,
         g = d.digits.length - 1,
         h = g - 1; g > 0; --g,
         --h)
    d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
  return d.digits[0] = d.digits[g] << e & maxDigitVal,
    d.isNeg = a.isNeg,
    d;
}

function biMultiplyByRadixPower(a, b) {
  var c = new BigInt;
  return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b),
    c;
}

function biCompare(a, b) {
  if (a.isNeg != b.isNeg)
    return 1 - 2 * Number(a.isNeg);
  for (var c = a.digits.length - 1; c >= 0; --c)
    if (a.digits[c] != b.digits[c])
      return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
  return 0;
}


function biSubtract(a, b) {
  // var c, d, e, f;
  // if (a.isNeg != b.isNeg)
  //   b.isNeg = !b.isNeg,
  //     c = biAdd(a, b),
  //     b.isNeg = !b.isNeg;
  // else {
  //   for (c = new BigInt,
  //          e = 0,
  //          f = 0; f < a.digits.length; ++f)
  //     d = a.digits[f] - b.digits[f] + e,
  //       c.digits[f] = 65535 & d,
  //     c.digits[f] < 0 && (c.digits[f] += biRadix),
  //       e = 0 - Number(0 > d);
  //   if (-1 == e) {
  //     for (e = 0,
  //            f = 0; f < a.digits.length; ++f)
  //       d = 0 - c.digits[f] + e,
  //         c.digits[f] = 65535 & d,
  //       c.digits[f] < 0 && (c.digits[f] += biRadix),
  //         e = 0 - Number(0 > d);
  //     c.isNeg = !a.isNeg;
  //   } else
  //     c.isNeg = a.isNeg;
  // }
  // return c;

  return {
    "digits": [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    18201,
    62941,
    40228,
    12795,
    42177,
    14700,
    55138,
    38001,
    58027,
    44427,
    8720,
    33896,
    32251,
    41665,
    7032,
    60464,
    56103,
    61259,
    41777,
    52648,
    55974,
    37905,
    18523,
    51578,
    33011,
    41904,
    13871,
    46345,
    36846,
    14023,
    55976,
    16982,
    60691,
    45564,
    32751,
    38573,
    816,
    40650,
    48650,
    45340,
    54803,
    48777,
    37585,
    42328,
    5493,
    30869,
    20101,
    54469,
    56042,
    18504,
    40612,
    30001,
    40969,
    60116,
    34835,
    3545,
    47234,
    55038,
    51865,
    53827,
    1947,
    55906,
    62985,
    8010,
    0,
    0,
    0
  ],
    "isNeg": false
  }
}

// window.asrsea(JSON.stringify(i7b), bsc2x(['流泪', '强']), bsc2x(RU7N.md), bsc2x(['爱心', '女孩', '惊恐', '大笑']));
const res = d(JSON.stringify(i7b), bsc2x(['流泪', '强']), bsc2x(RU7N.md), bsc2x(['爱心', '女孩', '惊恐', '大笑']));
console.log('res--------', res);
