import { ElementFinder, element, by } from "protractor";

export class Logincustomer {
    signinButton: ElementFinder;
    emailisInvalid:ElementFinder;
    passwordRequired:ElementFinder;
    enteryouremail:ElementFinder;
    enteryourpassword:ElementFinder;
    incorrectPassword:ElementFinder;
    incorrectusername:ElementFinder;
    eamilInvaliderror:ElementFinder;
    minimumCharacters:ElementFinder;
    forGotpassword:ElementFinder;
    resetpassword:ElementFinder;
    forGotpassworderror:ElementFinder;
    forgotEmails:ElementFinder;
    afteremailerror:ElementFinder;
    forgotEmaildoesnot:ElementFinder;
    forgotloginsuccess:ElementFinder;
    constructor() {
        this.signinButton =element(by.css(".sign-btn"));
        this.emailisInvalid =element(by.xpath("//span[@class='errmsg ng-star-inserted']"));
        this.passwordRequired=element(by.xpath("//div[@class='errmsg ng-star-inserted']"));
        this.enteryouremail=element(by.id("email"));
        this.enteryourpassword=element(by.id("pwd"));
        this.incorrectPassword= element(by.id("err-msg"));
        this.incorrectusername=element(by.id("err-msg"));
        this.eamilInvaliderror=element(by.xpath("//span[@class='errmsg ng-star-inserted']"));
        this.minimumCharacters =element(by.xpath("//div[@class='errmsg ng-star-inserted']"));
        this.forGotpassword=element(by.css(".password"));
        this.resetpassword=element(by.css(".reset-btn"));
        this.forGotpassworderror=element(by.css(".mat-error"));
        this.forgotEmails= element(by.id("emails"));
        this.afteremailerror =element(by.css(".mat-error"));
        this.forgotEmaildoesnot =element(by.css(".mat-error"));
        this.forgotloginsuccess=element(by.xpath("//label[.='Success! Please Check into your mail-box']"))
   
    }
 
}