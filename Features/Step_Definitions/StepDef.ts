import { Before, Given ,Then,When,Status, BeforeAll} from "@cucumber/cucumber";
import { browser, by, element } from "protractor";
import { Logincustomer } from "../../Pageobjects/loginpage";
import chai from 'chai'
import { couldStartTrivia } from "typescript";
var expect = chai.expect;
var {setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);
let objLogincustomer = new Logincustomer();
//let objAddCustomer = new Addcustomer();

Before({timeout: 60 * 1000}, function() {  
  // Does some slow browser/filesystem/network actions  
  browser.manage().window().maximize();  

});
Given('TC_L001 Navigate to the login page {string}',  async function (url) {
  browser.waitForAngularEnabled(false);
  browser.get(url);
  let pagetitle=await browser.getTitle();
  expect(pagetitle).to.equal("Oncourse CRM")
  browser.sleep(9000)
    });
When('TC_L002 Click on Sign-In without entering the username and password', async function  () {
  await browser.sleep(9000)
  objLogincustomer.signinButton.click();
  await browser.sleep(9000)
  let getemailtext =await objLogincustomer.emailisInvalid.getText();
  let getpasswordtext=await objLogincustomer.passwordRequired.getText();
  console.log("gettext"+getemailtext)
  expect(getemailtext).to.equals("*Please enter a email");
  console.log("gettext"+getpasswordtext)
  expect(getpasswordtext).to.equals("*Password required");
    });
When('TC_L003 Start to type your When step here Enter in-correct password {string} and {string}', async function (string, string2) {
  await objLogincustomer.enteryouremail.sendKeys(string);
  await objLogincustomer.enteryourpassword.sendKeys(string2);
  await browser.sleep(9000)
  objLogincustomer.signinButton.click();
  await browser.sleep(9000)
  let incorrectPassword=await objLogincustomer.incorrectPassword.getText();
  console.log("incorrectPassword"+incorrectPassword)
  expect(incorrectPassword).to.equals("Incorrect password.");
  objLogincustomer.enteryouremail.clear();
  await browser.sleep(9000)
  objLogincustomer.enteryourpassword.clear();

    });
When('TC_L004 Enter in-correct username {string} and {string}', async function (fname, pwd) { 
  await objLogincustomer.enteryouremail.sendKeys(fname);
  await objLogincustomer.enteryourpassword.sendKeys(pwd);
  await browser.sleep(9000)
  objLogincustomer.signinButton.click();
  await browser.sleep(9000)
  let incorrectusername=await objLogincustomer.incorrectusername.getText();
  console.log("incorrectusername"+incorrectusername);
  expect(incorrectusername).to.equals("Incorrect username.");
  objLogincustomer.enteryouremail.clear();
  await browser.sleep(9000)
  objLogincustomer.enteryourpassword.clear();

});
When('TC_L005 Enter in-correct username and capture error message {string}', async function (string) {
  await objLogincustomer.enteryouremail.sendKeys(string);
  await browser.sleep(9000)
  objLogincustomer.signinButton.click();
  await browser.sleep(9000)
 let eamilInvaliderror= await objLogincustomer.eamilInvaliderror.getText();
  console.log("eamilInvaliderror"+eamilInvaliderror);
expect(eamilInvaliderror).to.equals("*Email is invalid")
  objLogincustomer.enteryouremail.clear();
  await browser.sleep(9000)
  objLogincustomer.enteryourpassword.clear();  

})
When('TC_L006 Enter {int} digit password and capture the error {string}', async function (int, string) {
  await objLogincustomer.enteryourpassword.sendKeys(string);
  await browser.sleep(9000)
  objLogincustomer.signinButton.click();
  await browser.sleep(9000)
  let minimumCharacters= await objLogincustomer.minimumCharacters.getText();
  console.log("minimumCharacters"+minimumCharacters);
  expect(minimumCharacters).to.equals("*Minimum 6 characters");
});
When("Tc_L007 & Tc_L008 User should navigate to the forgot password screen by clicking on the Forgot Password link",async function(){
  await browser.sleep(9000)
  await objLogincustomer.forGotpassword.click();
  await browser.sleep(9000)
  let resetpassword =await objLogincustomer.resetpassword.getText();
  console.log("pageTitle"+resetpassword)
  expect(resetpassword).to.equals("Reset Password")

});
When("Tc_L009 To capture the error without entering the email",async function(){
  await browser.sleep(9000)
  await objLogincustomer.resetpassword.click()
  await browser.sleep(9000)
  let forgotpassworderror =await objLogincustomer.forGotpassworderror.getText();
  console.log(forgotpassworderror);
  expect(forgotpassworderror).to.equals("email cannot be empty 😅");
});
When('Tc_L010 User enters invalid email and click on forgot password {string}', async function (string) {
  await objLogincustomer.forgotEmails.sendKeys(string)
  await browser.sleep(9000)
  await objLogincustomer.resetpassword.click();
  await browser.sleep(9000);
  let afteremailerror = await objLogincustomer.afteremailerror.getText();
  console.log("afteremailerror"+afteremailerror);
  expect(afteremailerror).to.equals("Invalid email 🙆‍♂️")
});






  
  




