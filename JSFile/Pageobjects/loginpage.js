"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logincustomer = void 0;
var protractor_1 = require("protractor");
var Logincustomer = /** @class */ (function () {
    function Logincustomer() {
        this.signinButton = protractor_1.element(protractor_1.by.css(".sign-btn"));
        this.emailisInvalid = protractor_1.element(protractor_1.by.xpath("//span[@class='errmsg ng-star-inserted']"));
        this.passwordRequired = protractor_1.element(protractor_1.by.xpath("//div[@class='errmsg ng-star-inserted']"));
        this.enteryouremail = protractor_1.element(protractor_1.by.id("email"));
        this.enteryourpassword = protractor_1.element(protractor_1.by.id("pwd"));
        this.incorrectPassword = protractor_1.element(protractor_1.by.id("err-msg"));
        this.incorrectusername = protractor_1.element(protractor_1.by.id("err-msg"));
        this.eamilInvaliderror = protractor_1.element(protractor_1.by.xpath("//span[@class='errmsg ng-star-inserted']"));
        this.minimumCharacters = protractor_1.element(protractor_1.by.xpath("//div[@class='errmsg ng-star-inserted']"));
        this.forGotpassword = protractor_1.element(protractor_1.by.css(".password"));
        this.resetpassword = protractor_1.element(protractor_1.by.css(".reset-btn"));
        this.forGotpassworderror = protractor_1.element(protractor_1.by.css(".mat-error"));
        this.forgotEmails = protractor_1.element(protractor_1.by.id("emails"));
        this.afteremailerror = protractor_1.element(protractor_1.by.css(".mat-error"));
        this.forgotEmaildoesnot = protractor_1.element(protractor_1.by.css(".mat-error"));
        this.forgotloginsuccess = protractor_1.element(protractor_1.by.xpath("//label[.='Success! Please Check into your mail-box']"));
    }
    return Logincustomer;
}());
exports.Logincustomer = Logincustomer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vUGFnZW9iamVjdHMvbG9naW5wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUF3RDtBQUV4RDtJQWlCSTtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGNBQWMsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxnQkFBZ0IsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxjQUFjLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGlCQUFpQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxpQkFBaUIsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsaUJBQWlCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGlCQUFpQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLGlCQUFpQixHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLGNBQWMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsYUFBYSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxtQkFBbUIsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsWUFBWSxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxlQUFlLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLGtCQUFrQixHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxrQkFBa0IsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsdURBQXVELENBQUMsQ0FBQyxDQUFBO0lBRXRHLENBQUM7SUFFTCxvQkFBQztBQUFELENBQUMsQUFyQ0QsSUFxQ0M7QUFyQ1ksc0NBQWEifQ==