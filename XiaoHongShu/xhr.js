var request = require('request');

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
  'x-s': 'XYW_eyJzaWduU3ZuIjoiNTYiLCJzaWduVHlwZSI6IngyIiwiYXBwSWQiOiJ4aHMtcGMtd2ViIiwic2lnblZlcnNpb24iOiIxIiwicGF5bG9hZCI6IjAyMzM3MzgyMmVhZDdkOTUzNTFhOGM3OWRiYzQ2ZTI3OGRmZjhhY2EwZmRhNDViZWE5Y2YyMjU0MmQ4ZWYwMDUzNWYzODUwYjFkNDM2MmJiMDJhMDI0NTFkM2RkNWYwM2Y1YjQxMTBlYjYwZGI2ZGViYTAyZmRhNWFjY2FhZTFhZmQ4YTQ4ZTA3MDk4ZTc5NDVjMWU1YWI5Zjk4YWRkOGRjYjU1OTgzMjdlMTY4Y2M3ODIxMzYzNGI4YzFjYWFlNzYwZThiNGMyZGM4ZGVkNDhmODlkZjczYWYwYTAzNTNjYTEzMGUzM2Y1NzFiZThhZmE2NDg1NjNhYTgwOTYwNGNiNmVkMzViZDM3ZDBmNzU2ODBhY2MzMDg4ODUxMTM1ODMzMGRjYTliMjkzMzUxMDkxMzcxZmI2NzU3ZDcyMzI2YTlkYTFiYTUwYTE2NTg2ODY4NmFjMWU0NDE4ZTQyY2QwODBjYzAzMjZhNWMyNmYxMjM4NjhhYWM0ZDRlNjNkYTE1NzM4MmMzMjM4MjUzOTRlMTNkYTVjNTI0NzRlNGVlIn0=',
  // 'x-s-common': '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',
  'x-t': '1735875414568',
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
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
}

request(options, callback);