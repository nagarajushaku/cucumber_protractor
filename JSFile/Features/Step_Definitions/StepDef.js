"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("@cucumber/cucumber");
var protractor_1 = require("protractor");
var loginpage_1 = require("../../Pageobjects/loginpage");
var chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
var setDefaultTimeout = require('@cucumber/cucumber').setDefaultTimeout;
setDefaultTimeout(60 * 1000);
var objLogincustomer = new loginpage_1.Logincustomer();
//let objAddCustomer = new Addcustomer();
cucumber_1.Before({ timeout: 60 * 1000 }, function () {
    // Does some slow browser/filesystem/network actions  
    protractor_1.browser.manage().window().maximize();
});
cucumber_1.Given('TC_L001 Navigate to the login page {string}', function (url) {
    return __awaiter(this, void 0, void 0, function () {
        var pagetitle;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    protractor_1.browser.waitForAngularEnabled(false);
                    protractor_1.browser.get(url);
                    return [4 /*yield*/, protractor_1.browser.getTitle()];
                case 1:
                    pagetitle = _a.sent();
                    expect(pagetitle).to.equal("Oncourse CRM");
                    protractor_1.browser.sleep(9000);
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('TC_L002 Click on Sign-In without entering the username and password', function () {
    return __awaiter(this, void 0, void 0, function () {
        var getemailtext, getpasswordtext;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.sleep(9000)];
                case 1:
                    _a.sent();
                    objLogincustomer.signinButton.click();
                    return [4 /*yield*/, protractor_1.browser.sleep(9000)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, objLogincustomer.emailisInvalid.getText()];
                case 3:
                    getemailtext = _a.sent();
                    return [4 /*yield*/, objLogincustomer.passwordRequired.getText()];
                case 4:
                    getpasswordtext = _a.sent();
                    console.log("gettext" + getemailtext);
                    expect(getemailtext).to.equals("*Please enter a email");
                    console.log("gettext" + getpasswordtext);
                    expect(getpasswordtext).to.equals("*Password required");
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('TC_L003 Start to type your When step here Enter in-correct password {string} and {string}', function (string, string2) {
    return __awaiter(this, void 0, void 0, function () {
        var incorrectPassword;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, objLogincustomer.enteryouremail.sendKeys(string)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, objLogincustomer.enteryourpassword.sendKeys(string2)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(9000)];
                case 3:
                    _a.sent();
                    objLogincustomer.signinButton.click();
                    return [4 /*yield*/, protractor_1.browser.sleep(9000)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, objLogincustomer.incorrectPassword.getText()];
                case 5:
                    incorrectPassword = _a.sent();
                    console.log("incorrectPassword" + incorrectPassword);
                    expect(incorrectPassword).to.equals("Incorrect password.");
                    objLogincustomer.enteryouremail.clear();
                    return [4 /*yield*/, protractor_1.browser.sleep(9000)];
                case 6:
                    _a.sent();
                    objLogincustomer.enteryourpassword.clear();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('TC_L004 Enter in-correct username {string} and {string}', function (fname, pwd) {
    return __awaiter(this, void 0, void 0, function () {
        var incorrectusername;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, objLogincustomer.enteryouremail.sendKeys(fname)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, objLogincustomer.enteryourpassword.sendKeys(pwd)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(9000)];
                case 3:
                    _a.sent();
                    objLogincustomer.signinButton.click();
                    return [4 /*yield*/, protractor_1.browser.sleep(9000)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, objLogincustomer.incorrectusername.getText()];
                case 5:
                    incorrectusername = _a.sent();
                    console.log("incorrectusername" + incorrectusername);
                    expect(incorrectusername).to.equals("Incorrect username.");
                    objLogincustomer.enteryouremail.clear();
                    return [4 /*yield*/, protractor_1.browser.sleep(9000)];
                case 6:
                    _a.sent();
                    objLogincustomer.enteryourpassword.clear();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('TC_L005 Enter in-correct username and capture error message {string}', function (string) {
    return __awaiter(this, void 0, void 0, function () {
        var eamilInvaliderror;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, objLogincustomer.enteryouremail.sendKeys(string)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(9000)];
                case 2:
                    _a.sent();
                    objLogincustomer.signinButton.click();
                    return [4 /*yield*/, protractor_1.browser.sleep(9000)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, objLogincustomer.eamilInvaliderror.getText()];
                case 4:
                    eamilInvaliderror = _a.sent();
                    console.log("eamilInvaliderror" + eamilInvaliderror);
                    expect(eamilInvaliderror).to.equals("*Email is invalid");
                    objLogincustomer.enteryouremail.clear();
                    return [4 /*yield*/, protractor_1.browser.sleep(9000)];
                case 5:
                    _a.sent();
                    objLogincustomer.enteryourpassword.clear();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('TC_L006 Enter {int} digit password and capture the error {string}', function (int, string) {
    return __awaiter(this, void 0, void 0, function () {
        var minimumCharacters;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, objLogincustomer.enteryourpassword.sendKeys(string)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(9000)];
                case 2:
                    _a.sent();
                    objLogincustomer.signinButton.click();
                    return [4 /*yield*/, protractor_1.browser.sleep(9000)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, objLogincustomer.minimumCharacters.getText()];
                case 4:
                    minimumCharacters = _a.sent();
                    console.log("minimumCharacters" + minimumCharacters);
                    expect(minimumCharacters).to.equals("*Minimum 6 characters");
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When("Tc_L007 & Tc_L008 User should navigate to the forgot password screen by clicking on the Forgot Password link", function () {
    return __awaiter(this, void 0, void 0, function () {
        var resetpassword;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.sleep(9000)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, objLogincustomer.forGotpassword.click()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(9000)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, objLogincustomer.resetpassword.getText()];
                case 4:
                    resetpassword = _a.sent();
                    console.log("pageTitle" + resetpassword);
                    expect(resetpassword).to.equals("Reset Password");
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When("Tc_L009 To capture the error without entering the email", function () {
    return __awaiter(this, void 0, void 0, function () {
        var forgotpassworderror;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.sleep(9000)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, objLogincustomer.resetpassword.click()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(9000)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, objLogincustomer.forGotpassworderror.getText()];
                case 4:
                    forgotpassworderror = _a.sent();
                    console.log(forgotpassworderror);
                    expect(forgotpassworderror).to.equals("email cannot be empty 😅");
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('Tc_L010 User enters invalid email and click on forgot password {string}', function (string) {
    return __awaiter(this, void 0, void 0, function () {
        var afteremailerror;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, objLogincustomer.forgotEmails.sendKeys(string)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(9000)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, objLogincustomer.resetpassword.click()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(9000)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, objLogincustomer.afteremailerror.getText()];
                case 5:
                    afteremailerror = _a.sent();
                    console.log("afteremailerror" + afteremailerror);
                    expect(afteremailerror).to.equals("Invalid email 🙆‍♂️");
                    return [4 /*yield*/, objLogincustomer.forgotEmails.clear()];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When("Tc_L011 User enters unregistered email and click on forgot password {string}", function (string) {
    return __awaiter(this, void 0, void 0, function () {
        var forgotEmaildoesnot;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, objLogincustomer.forgotEmails.sendKeys(string)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(9000)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, objLogincustomer.resetpassword.click()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(9000)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, objLogincustomer.forgotEmaildoesnot.getText()];
                case 5:
                    forgotEmaildoesnot = _a.sent();
                    console.log("forgotEmaildoesnot" + forgotEmaildoesnot);
                    expect(forgotEmaildoesnot).to.equals("Email does not exist, Please enter a registered one");
                    return [4 /*yield*/, objLogincustomer.forgotEmails.clear()];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('Tc_L012 User enters correctregistered email and click on forgot password {string}', function (string) {
    return __awaiter(this, void 0, void 0, function () {
        var forgotloginsuccess;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, objLogincustomer.forgotEmails.sendKeys(string)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(9000)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, objLogincustomer.resetpassword.click()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(9000)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, objLogincustomer.forgotloginsuccess.getText()];
                case 5:
                    forgotloginsuccess = _a.sent();
                    console.log("forgotloginsuccess" + forgotloginsuccess);
                    expect(forgotloginsuccess).to.equals(forgotloginsuccess);
                    return [4 /*yield*/, objLogincustomer.forgotEmails.clear()];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlcERlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0ZlYXR1cmVzL1N0ZXBfRGVmaW5pdGlvbnMvU3RlcERlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUErRTtBQUMvRSx5Q0FBa0Q7QUFDbEQseURBQTREO0FBQzVELDhDQUF1QjtBQUV2QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3BCLElBQUEsaUJBQWlCLEdBQUksT0FBTyxDQUFDLG9CQUFvQixDQUFDLGtCQUFqQyxDQUFrQztBQUN4RCxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDN0IsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLHlCQUFhLEVBQUUsQ0FBQztBQUMzQyx5Q0FBeUM7QUFFekMsaUJBQU0sQ0FBQyxFQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFDLEVBQUU7SUFDM0Isc0RBQXNEO0lBQ3RELG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7QUFFdkMsQ0FBQyxDQUFDLENBQUM7QUFDSCxnQkFBSyxDQUFDLDZDQUE2QyxFQUFHLFVBQWdCLEdBQUc7Ozs7OztvQkFDdkUsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ0gscUJBQU0sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsRUFBQTs7b0JBQWxDLFNBQVMsR0FBQyxTQUF3QjtvQkFDdEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUE7b0JBQzFDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBOzs7OztDQUNoQixDQUFDLENBQUM7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