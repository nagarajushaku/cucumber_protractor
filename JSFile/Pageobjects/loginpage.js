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
    }
    return Logincustomer;
}());
exports.Logincustomer = Logincustomer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vUGFnZW9iamVjdHMvbG9naW5wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUF3RDtBQUV4RDtJQWVJO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsY0FBYyxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLGdCQUFnQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLGNBQWMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsaUJBQWlCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLGlCQUFpQixHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxpQkFBaUIsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsaUJBQWlCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsaUJBQWlCLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsY0FBYyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxhQUFhLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLG1CQUFtQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBO1FBQ3RELElBQUksQ0FBQyxZQUFZLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGVBQWUsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTtJQUN2RCxDQUFDO0lBRUwsb0JBQUM7QUFBRCxDQUFDLEFBaENELElBZ0NDO0FBaENZLHNDQUFhIn0=