const fs = require('fs');
const path = require('path');
const https = require('https');

const fileName = 'hyy.txt';
const repeatTime = 10 * 1000; // 重复执行的时间间隔（两分钟）
let count = 0; //访问了几次
let requestCount = 0;
// 文件路径
const filePath = path.join(__dirname, fileName);

// 获取当前时间的格式化字符串
function getCurrentTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// 读取文件内容并处理URLs
function processUrls() {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('读取文件时出错:', err);
      return;
    }

    // 去掉\r换行符
    const cleanedData = data.replace(/\r/g, '');

    // 将文件内容按行分割成字符串数组
    let stringArray = cleanedData.split('\n');
    stringArray = shuffleArray(stringArray);
    stringArray = shuffleArray(stringArray);
    stringArray = shuffleArray(stringArray);
    console.log('文件内容：', stringArray.length);

    // 递归函数来按顺序请求URL
    function requestUrls(index) {
      if (index >= stringArray.length) {
        // 所有请求完成后，等待两分钟再次执行
        requestCount++;
        console.log(`所有请求已完成，等待${repeatTime / 1000}秒再次执行...，第${requestCount}次`);
        setTimeout(processUrls, repeatTime);
        return;
      }

      const url = stringArray[index].trim();
      if (url === '') {
        // 如果是空行，直接处理下一个URL
        requestUrls(index + 1);
        return;
      }


      https.get(url, (res) => {
        // 数据块接收
        res.on('data', () => {
        });

        // 数据接收完成
        res.on('end', () => {
          count++;
          // console.log(`请求第 ${count} 次，时间: ${getCurrentTime()}`, url);
          console.log(`end 请求第 ${count} 次`, url);
          requestUrls(index + 1);
        });
      }).on('error', (err) => {
        console.error(`请求URL ${index + 1}: ${url} 时出错:`, err.message);
        requestUrls(index + 1);
      });
    }

    // 开始请求第一个URL
    requestUrls(0);
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // 交换元素
  }
  return array;
}

// 开始处理URLs
processUrls();
