const { assert } = require("chai");
const { Builder, By, Key, Browser } = require("selenium-webdriver");
// const assert = require("assert");
const chaiShould = require("chai").should();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// describe block
describe("Test Login Page", function () {
  let driver;
  beforeEach( async ()=>{
    // Launch the browser
    driver = await new Builder().forBrowser(Browser.CHROME).build();
  })
  afterEach(async() => {
    driver.quit()
  })

  // it block
  // it("Test email form validation", async function () {

  //   // Navigate to application
  //   await driver.get("http://localhost:3000");
  //   await driver.findElement(By.id("email")).sendKeys("amansoft.developer@gmail.com", Key.RETURN);
  //   var emailTextVerification = await driver.findElement({ id: "email" }).getAttribute("value");
  //   emailTextVerification.should.equal("amansoft.developer@gmail.com");   

  //   // with xpath also
  //   // var emailTextVerification = await driver.findElement({xpath: '//*[@id="email"]'}).getAttribute("value");

  //   // Comapre values via assert
  //   // assert.strictEqual(emailTextVerification, "amansoft.developer@gmail.com")
  // });

   // it block
  //  it("Test pass form validation", async function () {
  //   await driver.get("http://localhost:3000");
  //   await driver.findElement(By.id("pass")).sendKeys("Amandeep", Key.RETURN);
  //   var passTextVerification = await driver.findElement({ id: "pass" }).getAttribute("value");
  //   passTextVerification.should.equal("Amandeep");
  // });

  it("if login button clicked without password", async function () {
    await driver.get("http://localhost:3000");
    await driver.findElement(By.id("email")).sendKeys("amansoft.developer@gmail.com", Key.RETURN);
    await driver.findElement(By.className("btn")).click();
    var alertInstance = await driver.switchTo().alert();
    const alertGetText = await alertInstance.getText()
    alertGetText.should.equal("Invalid Email and Password");
    await alertInstance.accept();
  });

  it("if login button clicked without email", async function () {
    await driver.get("http://localhost:3000");
    await driver.findElement(By.id("pass")).sendKeys("amansoft", Key.RETURN);
    await driver.findElement(By.className("btn")).click();
    var alertInstance = await driver.switchTo().alert();
    const alertGetText = await alertInstance.getText()
    alertGetText.should.equal("Invalid Email and Password");
    await alertInstance.accept();
  });

  it("if login button clicked and email/password both entered", async function () {
    await driver.get("http://localhost:3000");
    await driver.findElement(By.id("email")).sendKeys("amansoft.developer@gmail.com", Key.RETURN);
    await driver.findElement(By.id("pass")).sendKeys("amansoft", Key.RETURN);
    await driver.findElement(By.className("btn")).click();    
    const newUrl = await driver.getCurrentUrl();
    const chechDashboard = newUrl.includes("/dashboard");
    assert.strictEqual(true, chechDashboard);
  });




});

/**
 * 1. launch the browser
 * 2. Navidate to our application
 * 3. add a todo
 * 4. close the broser
 *
 */
