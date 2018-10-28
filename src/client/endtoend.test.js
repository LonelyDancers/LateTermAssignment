const puppeteer = require("puppeteer");

describe("lonelydancerstage.herokuapp.com", () => {
    let browser, page;
    let url = "https://lonelydancerstage.herokuapp.com";

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
<<<<<<< HEAD
        //test to make sure the last cell is clickable
        jest.setTimeout(30000);
        const response =  await page.goto(url, {waitUntil : ['load', 'domcontentloaded']});
        await page.click('#tr3 > td:nth-child(3)');
        await page.waitForFunction('document.getElementsByClassName("tdelement9").innerHTML != ""');
        const text = await page.evaluate( () => Array.from( document.querySelectorAll( '#tr3 > td:nth-child(3)' ), element => element.textContent ) );
        expect(text[0]).toBe("X");

      });

      test("Should write x name to be 'Kjartan'", async () => {
        //check if name input boxes work
        jest.setTimeout(30000);
        const response =  await page.goto(url, {waitUntil : ['load', 'domcontentloaded']});
=======
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
>>>>>>> df3ce0d4477f4dd2a5ab550d7ded06b96d40c1e5
        await page.type('body > form > input[type="text"]:nth-child(2)', 'Kjartan');
        const text = await page.evaluate( () => Array.from( document.querySelectorAll( 'body > form > input[type="text"]:nth-child(2)' ), element => element.value ));
        expect(text[0]).toBe("Kjartan");
      });

      test("Should let x win", async () => {
<<<<<<< HEAD
        //check that the game can be won
        jest.setTimeout(30000);
        await page.goto(url, {waitUntil : ['load', 'domcontentloaded']});
        await page.click('#tr1 > td:nth-child(1)');
        await page.click('#tr2 > td:nth-child(1)');
        await page.click('#tr1 > td:nth-child(2)');
        await page.click('#tr2 > td:nth-child(2)');
        await page.click('#tr1 > td:nth-child(3)');
        const text = await page.evaluate( () => Array.from( document.querySelectorAll( '#winnerAlert' ), element => element.textContent ) );
        await page.waitForFunction('document.getElementsByClassName("winnerAlert").innerHTML != ""');
        expect(text[0]).toBe("x Won!");
=======
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
>>>>>>> df3ce0d4477f4dd2a5ab550d7ded06b96d40c1e5
      });


});
