"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("@cucumber/cucumber");
var protractor_1 = require("protractor");
cucumber_1.Given("I lunch url", function () {
    protractor_1.browser.get("http://way2automation.com/angularjs-protractor/banking/#/login").then(function () {
        protractor_1.browser.sleep(3000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlcERlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0ZlYXR1cmUvU3RlcF9EZWZpbml0aW9ucy9TdGVwRGVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQTJDO0FBQzNDLHlDQUFxQztBQUVyQyxnQkFBSyxDQUFDLGFBQWEsRUFBQztJQUNwQixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxnRUFBZ0UsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMvRSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN2QixDQUFDLENBQUMsQ0FBQTtBQUNGLENBQUMsQ0FBQyxDQUFBIn0=