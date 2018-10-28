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

      test("Should write x name to be 'Kjartan'", async () => {
        jest.setTimeout(10000);
        const response =  await page.goto(url);
        await page.type('body > form > input[type="text"]:nth-child(2)', 'Kjartan');
        const text = await page.evaluate( () => Array.from( document.querySelectorAll( 'body > form > input[type="text"]:nth-child(2)' ), element => element.value ));
        expect(text[0]).toBe("Kjartan");
      });

      test("Should let x win", async () => {
        jest.setTimeout(10000);
        await page.goto(url);
        await page.click('#td1');
        await page.click('#td4');
        await page.click('#td2');
        await page.click('#td5');
        await page.click('#td3');
        await page.waitForFunction('document.getElementById("turn").innerHTML[1] != ","');
        let text = await page.$eval('#turn', (elem) => {
            return elem.innerHTML;
        });
        expect(text).toBe('X is the winner!');
      });


});
