const puppeteer = require("puppeteer");

describe("lonelydancerstage.herokuapp.com", () => {
    let browser, page;
    let url = "https://lonelydancerstage.herokuapp.com";
    // let url = "localhost:8080";

    beforeEach(async () => {
        browser = await puppeteer.launch({
          headless: true,
          slowMo: 0,
          args: ['--no-sandbox', '--disable-setuid-sandbox']});
        page = await browser.newPage();
      });

      afterEach(() => {
        browser.close();
      });

      test("Should click on last table element", async () => {
        jest.setTimeout(10000);
        await page.goto(url);
        await page.click('#td9');
        await page.waitForFunction('document.getElementById("td9").innerHTML == "X"');
        let text = await page.$eval('#td9', (elem) => {
            return elem.innerHTML;
        });
        expect(text).toBe('X');
      });

      test("Should let x win", async () => {
        jest.setTimeout(10000);
        await page.goto(url);
        await page.click('#td1');
        await page.click('#td4');
        await page.click('#td2');
        await page.click('#td5');
        await page.click('#td3');
        await page.waitForFunction('document.getElementById("turn").innerHTML[1] == " "');
        let text = await page.$eval('#turn', (elem) => {
            return elem.innerHTML;
        });
        expect(text).toBe('X is the winner!');
      });

      test("Should be a draw", async () => {
        jest.setTimeout(10000);
        await page.goto(url);
        await page.click('#td1');
        await page.click('#td4');
        await page.click('#td2');
        await page.click('#td5');
        await page.click('#td6');
        await page.click('#td3');
        await page.click('#td7');
        await page.click('#td8');
        await page.click('#td9');
        await page.waitForFunction('document.getElementById("turn").innerHTML == "It\'s a draw!"');
        let text = await page.$eval('#turn', (elem) => {
            return elem.innerHTML;
        });
        expect(text).toBe('It\'s a draw!');
      });

});
