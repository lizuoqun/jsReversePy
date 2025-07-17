const puppeteer = require('puppeteer');

(async () => {
  // 启动浏览器（无头模式）
  const browser = await puppeteer.launch();

  // 打开新页面
  const page = await browser.newPage();

  // 目标URL
  const targetUrl = 'https://example.com'; // 替换为你想要访问的目标URL

  // 访问目标URL
  await page.goto(targetUrl);

  // 可以在这里执行其他操作，比如截图、点击按钮等

  // 关闭浏览器
  await browser.close();
})();
