var request = require('request');
const fs = require('fs');
const xs = 'XYW_eyJzaWduU3ZuIjoiNTYiLCJzaWduVHlwZSI6IngyIiwiYXBwSWQiOiJ4aHMtcGMtd2ViIiwic2lnblZlcnNpb24iOiIxIiwicGF5bG9hZCI6ImUzODhhYjMyZWMzYTM0OWU0YTUwNGI0M2U4ODQ4MDc3NDMxOWE0NDc2OWJlNmE4ZDAzYmNjMTA4YTY3MTFmZjZlZTQyNDVhOWY5YmYzMmQzZTU4NDkxNTRjZTI0MGNkNzcwYTU4OWU1M2M1NzNiMjY2YWI2ZGM1MTRhYzE5Zjg1ZjAxMGE0OTA0NjI0NjAzNjQ2YTEwZWUyOGQ5MmZkMzkwZGE0MTQyZTEwZjQxMzBjMmE2ZTRjN2EzZmNhZmRlZDNlMjA1ZDJkNGZhYzhjM2FmOTUxZWFkMzdlZmQxMzRhZmJiZWRhOGQwMTQ3YTg3ZDUyMzg4NjY1M2MzMTdmYjMzZDkxOGVmOTJiZjMwYjhiYjIyYTc4NGZkODk1YmJhYTI3NzYxMmY2NTk2NTRkZjQ4ZTM1MWIyZjZkMjM1OWY5YzUzM2JiZDE4YzM1MmM2YjNlMWNjYmQ5OTAwNGFjOGMxMWJhMWI5ZmQ2NTJmYTIwZjg5ZjkwZDI3Njc1OTEwZjQ4NTdjNDNmZTUxZDAzOTQ5YmI4ODUzZTA5ZWM0NjZiIn0=';
const xsc = '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';

let header = {
  'X-t': 1735876423526,
  'X-s': xs
};

let localStorageB1 = 'I38rHdgsjopgIvesdVwgIC+oIELmBZ5e3VwXLgFTIxS3bqwErFeexd0ekncAzMFYnqthIhJedfMDKutRI3KsYorWHPtGrbV0P9WfIi/eWc6eYqtyQApPI37ekmR6QL+5Ii6sdneeSfqYHqwl2qt5B0DBIx+PGDi/sVtkIxdsxuwr4qtiIhuaIE3e3LV0I3VTIC7e0utl2ADmsLveDSKsSPw5IEvsiVtJOqw8BuwfPpdeTFWOIx4TIiu6ZPwrPut5IvlaLbgs3qtxIxes1VwHIkumIkIyejgsY/WTge7eSqte/D7sDcpipedeYrDtIC6eDVw2IENsSqtlnlSuNjVtIx5e1qt3bmAeVn8LIESzIEM+wn4iI3Yq8lEgIkLxoqwkICqV2d3ejIgs1uwRIvge0f5e00uPIE5sxbmDyuwuIiKeTf0sxm/e1Vt4LsJeWVwvIv4gce0efqwCpBKsSPwgIxQrIvkkoVwGzVw+ag4QPW/edngeTVwoIEosjBAsxLrvIE0s0L3s6fGdIhNs3uwvIEmWtuwpOqwCI3JeTVtFIk3siqwVIEosfVtUHqw8eVwlIvZuIxV28oHW2Zge3PthIhIyIi7eDuwablR8/U6sYa+3IiImquttmuwXIvvekqtktF/eTm7sTrzmIhJsxgKsiVtnLVwQIC0ejqwRIi/eVALmIvKeDneeSutlIxvs6Pwu2fWBIEcnICgsVM6s6eesSI3eDVtQIvzzIxcEaqwpI3+CIk3s6FD3GUOsjutaIEM2mPtuyYAsSS/e0qweeuwwICp7IiGZpqwryVtnIC3efM5s6VtJmuwcIirNaVwlIvYoofkrIhveS/7ed07siPw/quwtIhROICAsWqtMIhoeSSmdIvYirZl4ICSwIC7s3qtfoqwQJuwXICm6Ikve39gs3qtTscEvIxRLKutGeVtOI3rEI3RGIkF7IkJsTmeeicF3JqtmI3YkbVtwzPwuIkKeTohWIiVXnDgeDPtEbqtZbWp4cal9IEZiBVtgIhge1SHZIELw/PtfIhFt2utfbPtwIEDIIClMICk/zVtjIE4wIi/eVVtvLMcVIk8sI3geD75ekPwkICYkIEPAnjHdIvpf/Wq9IxgeWIAsDVtcIkoeTVweIkMmI3Ne0qtbIxi//VtdI35e3IhocPtEHPtrIvdeYPtaIkKeSmu5IiKe0z/exuwpKf0eWutP/bee6utNI3vsxl3e1uteICDYIibssqwJNpGOIvgsjPtqa7As6DuCcVwKICI+IE3eYDhLIv5ejutNIvDPIhOeWb8CIhEyIEl4PzZyI3esfLRXIkIIIv+9Iv0eW0QKPqtNzPt++ZKeSpNsfqtiICJsSY3skqtoLPweIvHcbPwWBqtg8VwV+PtSyqwj2nOeipos1AveVbds6utbIERcIh+iI38AI3vekgve60k1KVwwIiVabqwgNA3e3qtrI3Ne0geeWATNIC3sWuwmyYZTI3NsDPt9IvesVVwAtqtyI3AefdupwutNnnNeYMqhIi0eWuwQnuwV/7NeTqt3/qw2euwNIvFqIkEEBL/sdY3eVVtUICNsVuto/Pt++mde1pz6pgSd2WmfrPwGLVwJICL3ICEbI3F0NpAeTdlcIxreI3uLbuwtI3mWQqwgIE7sTMmvaVwAIx8rbqwpIvAeibbPIhrAIvOsSPwmcutopL7sjBvsDVtG+VtJI3SIOutnIiAsdfoed0oe1PtzIvTJIkos39VLIvvsxPt2IxbdIxoeduwnyYbnBPtjcVwrIvmWpVwwI3esfI0e0qwZIhAeVor2I3eeSpKejPwbIkcKICHGsB6eWL6efutfIEded7KsTVtMaPw8zVtJIiuwIx3eSutEIibGICz1JVtS2szeNp7eVoi4IvQr2PtXHqtpIhde0c==';

let I = function (e) {
  let s = 'Windows';
  if ('string' == typeof e) {
    for (var r = 0, i = -1; r < e.length; ++r)
      i = s[255 & i ^ e.charCodeAt(r)] ^ i >>> 8;
    return -1 ^ i ^ 0xedb88320;
  }
  for (var r = 0, i = -1; r < e.length; ++r)
    i = s[255 & i ^ e[r]] ^ i >>> 8;
  return -1 ^ i ^ 0xedb88320;
};

/**
 * X-s-Common的核心在这些参数的生成，把这个拿下来之后，就看少那些方法、变量就补那些
 * */
var c = header['X-t'] || ''
  , d = header['X-s'] || ''
  , p = header['X-Sign'] || ''
  , f = c && d || p
  , v = 19 // getSigCount(f) 这个等下看下是什么  getSigCount(f)应该是签名次数，大概率不影响加密
  , h = localStorageB1
  , g = '1'
  , m = {
  s0: 'Windows', // 平台类型
  s1: '',
  x0: g,
  x1: '4.0.1', // 对应的应该是版本号，不管
  x2: 'Windows' || 'PC',
  x3: 'xhs-pc-web',
  x4: '4.53.0',
  x5: '19126e999d2mp35sxp9ivxkd91c2oxf48wtojl2qs50000423282',
  x6: c,
  x7: d,
  x8: h,
  // x9: I("".concat(c).concat(d).concat(h)), 简化成下面这个
  x9: I(c + d + h),
  x10: v
};

function tripletToBase64(e) {
  return C[e >> 18 & 63] + C[e >> 12 & 63] + C[e >> 6 & 63] + C[63 & e];
}

let C = [
  'Z',
  'm',
  's',
  'e',
  'r',
  'b',
  'B',
  'o',
  'H',
  'Q',
  't',
  'N',
  'P',
  '+',
  'w',
  'O',
  'c',
  'z',
  'a',
  '/',
  'L',
  'p',
  'n',
  'g',
  'G',
  '8',
  'y',
  'J',
  'q',
  '4',
  '2',
  'K',
  'W',
  'Y',
  'j',
  '0',
  'D',
  'S',
  'f',
  'd',
  'i',
  'k',
  'x',
  '3',
  'V',
  'T',
  '1',
  '6',
  'I',
  'l',
  'U',
  'A',
  'F',
  'M',
  '9',
  '7',
  'h',
  'E',
  'C',
  'v',
  'u',
  'R',
  'X',
  '5'
];

function encodeChunk(e, r, i) {
  for (var a, s = [], u = r; u < i; u += 3)
    a = (e[u] << 16 & 0xff0000) + (e[u + 1] << 8 & 65280) + (255 & e[u + 2]),
      s.push(tripletToBase64(a));
  return s.join('');
}

function b64Encode(e) {
  for (var r, i = e.length, a = i % 3, s = [], u = 0, c = i - a; u < c; u += 16383)
    s.push(encodeChunk(e, u, u + 16383 > c ? c : u + 16383));
  return 1 === a ? (r = e[i - 1],
    s.push(C[r >> 2] + C[r << 4 & 63] + '==')) : 2 === a && (r = (e[i - 2] << 8) + e[i - 1],
    s.push(C[r >> 10] + C[r >> 4 & 63] + C[r << 2 & 63] + '=')),
    s.join('');
}

function encodeUtf8(e) {
  for (var r = encodeURIComponent(e), i = [], a = 0; a < r.length; a++) {
    var s = r.charAt(a);
    if ('%' === s) {
      var u = parseInt(r.charAt(a + 1) + r.charAt(a + 2), 16);
      i.push(u),
        a += 2;
    } else
      i.push(s.charCodeAt(0));
  }
  return i;
}

console.log(b64Encode(encodeUtf8(JSON.stringify(m))));

const getXs = () => {
  return {
    'X-s-common': b64Encode(encodeUtf8(JSON.stringify(m))),
    'X-s': headers['X-s']
  };
};


var headers = {
  'accept': 'application/json, text/plain, */*',
  'accept-language': 'zh-CN,zh;q=0.9',
  'content-type': 'application/json;charset=UTF-8',
  'cookie': 'a1=19126e999d2mp35sxp9ivxkd91c2oxf48wtojl2qs50000423282; webId=189fba07fe5eaa3649c1deef8c1acc7a; gid=yjyJKdj0YSYfyjyJKdjjjE1JfJ6Uq2MCUj3h9AMCTfjySl28JlCi4V8884JqJYJ8jijWjjWY; abRequestId=189fba07fe5eaa3649c1deef8c1acc7a; xsecappid=xhs-pc-web; web_session=0400698e4610515674684bae84344b245c8c4e; webBuild=4.53.0; unread={%22ub%22:%2267766b81000000000800eaf7%22%2C%22ue%22:%22677549de000000001300ddce%22%2C%22uc%22:16}; acw_tc=0a4ad72c17358746772217937e87bb46e16d5bfc66da4816ed88f7800e730b; websectiga=9730ffafd96f2d09dc024760e253af6ab1feb0002827740b95a255ddf6847fc8; sec_poison_id=b6ad83b5-7bf3-49e0-874b-4fe7c8b2ea70',
  'origin': 'https://www.xiaohongshu.com',
  'priority': 'u=1, i',
  'referer': 'https://www.xiaohongshu.com/',
  'sc-t': 'a6miBmVN50DvIAHcg9Cm3cTgZJp_hyXc34UuCj-aQmmw4t3K2LRTEVGvA_09YcPd0zuevThOpyP2kXGR0_CmGen7cG591Ldo3ONg1JCL9c8EZ4Hn19vm3cTgZ7pa5tzcgy2V1JCL9cvyJGbhXaYv9UmF2MwLXhstMFMinFQ_kZCKnFMzOmPOgaFzOFMEYJftwqMinFQ_ko1U451uWFSoszwY1l3L6bwM9vpc5iMKwFMV1KvF6aWaunoj-9nx8dS_FfYx8o-JqdlrnK8LGosOI9_z0m1l2H1iL3NZwZ4FzlCIngsdZZwbImckkRhooeCTFuYNIcsLqtDUBAgy5LqYBXKjGi-KEimidJGaXpyovL-9gqiryUMzZiftxeaO202UfyQCZpxjzMAuRXSzmKTqB-SL_yUeesGsUhuLDGo392YiDnbE-gcp1-S7Uf5AyvHplIPiHGThHJZFnnSzOCL27-QyZDzUeqrgzmyKtGo-ep7CnVl1TKN42gllZh53e1H4alyO_Ac-8YKumcQgwqNp1qmyRhzVZKrpVRSvZ675zAcwVbm4pgOp43dQzIEzUsp1ifWNhOOkUAxKamSpMCL2pCFmFnrkivEp0dSQ9pL68xotHflG-7J3BQFaafjkm1AEFuS7Djx4r5LoofvzN1_VNCMlFIeHy3zXtd9cH52E-AiJRVvkvs2fJCQZ0hzq84oknyVCO8q58gNMUfSz-1fXJsPZXh0IHvUsxZ5Cx8gx6sZCgpRoq0LAxlfeueF-g1odNuqCO8gx.',
  'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"Windows"',
  'sec-fetch-dest': 'empty',
  'sec-fetch-mode': 'cors',
  'sec-fetch-site': 'same-site',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  'x-b3-traceid': '3b009b9b064e15d0',
  'x-s': xs,
  // 'x-s-common': '2UQAPsHC+aIjqArjwjHjNsQhPsHCH0rjNsQhPaHCH0c1PshlHjIj2eHjwjQgynEDJ74AHjIj2ePjwjQhyoPTqBPT49pjHjIj2ecjwjHFN0LAN0ZjNsQh+aHCH0rEP/H98/DEwncUJgZA+g+hqeSk4dY38eDlGAQ62BGFwo4FJ9kVPdbA+/ZIPeZFP0PUweHjNsQh+jHCP/qA+/W7+/cl+eL9wsIj2eqjwjQGnp4K8gSt2fbg8oppPMkMank6yLELnnSPcFkCGp4D4p8HJo4yLFD9anEd2LSk49S8nrQ7LM4zyLRka0zYarMFGF4+4BcUpfSQyg4kGAQVJfQVnfl0JDEIG0HFyLRkagYQyg4kGF4B+nQownYycFD9ankm2LMC//++2f4E/nMnybkr8BTOpbpC/SzByrRo//+OpMQkngkzPSkLa/+OzMQTnfkiybDUzg4yJpQi/Dznypkgz/p8PSSE/nkpPrMTL/zypMS7/Lzp2DEgngkOzbp7nnkByFEr//Q+JLkk/LztyrMra/mwpr83//QayFEgng4+PSDlnnkz2rMLcfl8ySS7nD4QPSkopfS8prbEnfMayrEgzfk8PD8inSzBybkTL/z8pbrFnSzmPFMryAzypBPM/DznyDMgp/b8pFDMnfk3+bSgLfTOzMQxnnkpPLRL87k+yfzV/pz8+bDU//+OzrSh/gk82DEoa/z82D8xnp4BJrECng4ypBYk/D4+2pko//zyzM83/DziJLRrJBTyyf+Cnp484MSLcgkwprExnpzb2DMopgk+PSDl/dkBypkLyBYyJLLU/DzdPLEx/fY8pB47/Mz84FEo/fSwJp83/gknypkr//+yzrQT/dkpPDRrcfY8PDMC/Lzd+rRrpgY+prFl/Fz+2DMoLfk8pBlk/nk32DMCpgY+zBTh/gk02bkTa/Qw2SLAnDz02LMCa/Q8pBl3npzBypSLpg48prLU/SzdPDRrn/zwJL8x/p4pPrErz/zypbbEn/Qz4FRrcfk82DbC/nkyyrEg/gSwJpSh/nk++rExyBY8pFFInDzaJrEx/fT8prLl/dk++rMT/gk+yDFF/nkp2DRLLfl+prE3npznyDELa/mw2SQV/D4nJrS1PeFjNsQhwsHCHDDAwoQH8B4AyfRI8FS98g+Dpd4daLP3JFSb/BMsn0pSPM87nrldzSzQ2bPAGdb7zgQB8nph8emSy9E0cgk+zSS1qgzianYt8p+DLdYlqg4Dag8mqM4sG9Y7LozF89FF+DTp2dYQyemAPrlNq9kl49EE+Fzyag86q7YjLBkEndpmanYN8LzY+7+fySzLadbFLjTl4FbI8omwaL+MJLEQwrTCpd4/aL+d8nTM4rY7qg4raLpBqLSbN7+LapkkagYU/LS989pDqg4atA4ILoky/d+Dn/+S8dbFcLS3/fLApd4dqgbFqomM4oYN2f4APp4I8LSepS4QybrINMmFLLTn4FbQPMiUJ9MD8nSl498QcFbSpb8FqDSbtUTQznM1G98D8nkd2SSUJ9RA8db7/MkgJ9pD/rzrcfRdq9kyqrQQ2rTA8b8FGLS34fpfqg4aGDMPaL4f+rQQPA4SpopFLUR/a9Ll+FMcanYjqFSb//c3wLzpag8C2/zQwrRQynP7nSm7zDS9ypHFJURAzrlDqA8c4M8QcA4SL9c78/mSL0zQzg8APM4o/gzn4MpQynzAP7P6q7Yy/fpkpdzjGMpS8pSn4MQQ4fTo2fpm8n8M4F+IcDTALM87nDShJozQ2bk/J7p7/94n47mAJMzHLbqM8nG7/fp34g40aLp6qM+dJ9Ll/op+anSw8p4PPo+h8BWManStq7Yc4ASQybHEaSm7aSmM4b4Q40+SPp8FPLSk/dPlqgqManW6qMSl4b+oqg4EJgb7zrS9anTQc7mF/9k+LAz1+7+8LoznanSa2DSiP7+gLo4N8FSCqf+1/d+8pnMManSi/r4M4okU4gzVag898/+l4bpOqrTSyn+wq9SQ2fpQyrkA+fu9qMzM478O4g4la/+rOaHVHdWEH0iTweP9w/r7+/r9NsQhP/Zjw0LAKc==',
  'x-s-common': b64Encode(encodeUtf8(JSON.stringify(m))),
  // 'x-s-common': xsc,
  'x-t': '1735876423526',
  'x-xray-traceid': 'ca151e6511d8ea6c25b8665f6540727f'
};

var dataString = '{"cursor_score":"","num":43,"refresh_type":1,"note_index":35,"unread_begin_note_id":"","unread_end_note_id":"","unread_note_count":0,"category":"homefeed.gaming_v3","search_key":"","need_num":18,"image_formats":["jpg","webp","avif"],"need_filter_image":false}';

var options = {
  url: 'https://edith.xiaohongshu.com/api/sns/web/v1/homefeed',
  method: 'POST',
  headers: headers,
  body: dataString
};

function callback(error, response, body) {
  console.log(body);
  if (!error && response.statusCode == 200) {
    body = JSON.parse(body);
    console.log(body.code, '----', body.msg);
    // console.log(body.data);

    fs.writeFile('xhs.json', JSON.stringify(body.data), 'utf8', (err) => {
      if (err) {
        console.error('写入异常');
        return console.log(err);
      }
      console.log('写入成功');
    });
  }
}

request(options, callback);