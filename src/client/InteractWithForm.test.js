const puppeteer = require("puppeteer");

describe("lonelydancers.herokuapp.com", () => {
    let browser, page;
    let url = "https://lonelydancers.herokuapp.com";
    //let url = "localhost:8080";

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
      /*
      test("Should click on first table element", async () => {
        jest.setTimeout(30000);
        await page.goto(url, {waitUntil : ['load', 'domcontentloaded']});
        await page.click('#tr1 > td:nth-child(1)');
        const text = await page.evaluate( () => Array.from( document.querySelectorAll( '#tr1 > td:nth-child(1)' ), element => element.textContent ) );
        expect(text[0]).toBe("X");

      });*/

      test("Should click on last table element", async () => {
        jest.setTimeout(30000);
        const response =  await page.goto(url, {waitUntil : ['load', 'domcontentloaded']});
        await page.click('#tr3 > td:nth-child(3)');
        const text = await page.evaluate( () => Array.from( document.querySelectorAll( '#tr3 > td:nth-child(3)' ), element => element.textContent ) );
        expect(text[0]).toBe("X");

      });

      test("Should write x name to be 'Kjartan'", async () => {
        jest.setTimeout(30000);
        const response =  await page.goto(url, {waitUntil : ['load', 'domcontentloaded']});
        await page.type('body > form > input[type="text"]:nth-child(2)', 'Kjartan');
        const text = await page.evaluate( () => Array.from( document.querySelectorAll( 'body > form > input[type="text"]:nth-child(2)' ), element => element.value ) );
        expect(text[0]).toBe("Kjartan");
      });

      test("Should let x win", async () => {
        jest.setTimeout(30000);
        await page.goto(url, {waitUntil : ['load', 'domcontentloaded']});
        await page.click('#tr1 > td:nth-child(1)');
        await page.click('#tr2 > td:nth-child(1)');
        await page.click('#tr1 > td:nth-child(2)');
        await page.click('#tr2 > td:nth-child(2)');
        await page.click('#tr1 > td:nth-child(3)');
        console.log("This test");
        const text = await page.evaluate( () => Array.from( document.querySelectorAll( '#winnerAlert' ), element => element.textContent ) );
        console.log("Passes");
        expect(text[0]).toBe("x Won!");
      });


});
