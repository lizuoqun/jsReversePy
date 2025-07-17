const fs = require('fs').promises;
const path = require('path');
const https = require('https');

const fileName = 'lzq.txt';
const repeatTime = 10 * 1000; // 重复执行的时间间隔（10秒）
let count = 0; // 访问次数
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

// 打乱数组顺序
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // 交换元素
  }
  return array;
}

// 发送 HTTPS 请求
function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, (res) => {
      res.on('data', () => {
      });
      res.on('end', () => {
        resolve();
      });
    });

    req.on('error', (err) => {
      reject(err);
    });
  });
}

// 处理 URLs
async function processUrls() {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    // 去掉\r换行符
    const cleanedData = data.replace(/\r/g, '');
    // 将文件内容按行分割成字符串数组
    let stringArray = cleanedData.split('\n').map(url => url.trim()).filter(url => url);
    stringArray = shuffleArray(stringArray);
    console.log('文件内容：', stringArray.length);

    for (const url of stringArray) {
      try {
        await fetchUrl(url);
        await new Promise(resolve => setTimeout(resolve, 3000));
        count++;
        console.log(`请求第 ${count} 次，时间: ${getCurrentTime()}`, url);
      } catch (err) {
        console.error(`请求URL ${url} 时出错:`, err.message);
      }
    }

    requestCount++;
    console.log(`所有请求已完成，等待${repeatTime / 1000}秒再次执行...，第${requestCount}次`);
    setTimeout(processUrls, repeatTime);
  } catch (err) {
    console.error('读取文件时出错:', err);
    setTimeout(processUrls, repeatTime);
  }
}

// 开始处理URLs
processUrls();
