"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    Capabilities: {
        browserName: "chrome"
    },
    specs: ['../Features/Test1.feature'],
    // specs: ['../Features/Test1.feature'],
    cucumberOpts: {
        require: 'Features/Step_Definitions/StepDef.js',
        format: 'json:cucumber_report.json',
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR1csUUFBQSxNQUFNLEdBQVk7SUFDNUIsYUFBYSxFQUFDLElBQUk7SUFDbEIsU0FBUyxFQUFDLFFBQVE7SUFDbEIsYUFBYSxFQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDOUQsWUFBWSxFQUFDO1FBQ1QsV0FBVyxFQUFDLFFBQVE7S0FDdkI7SUFDRCxLQUFLLEVBQUMsQ0FBQywyQkFBMkIsQ0FBQztJQUNuQyx3Q0FBd0M7SUFFeEMsWUFBWSxFQUFDO1FBRVQsT0FBTyxFQUFDLHNDQUFzQztRQUM5QyxNQUFNLEVBQUMsMkJBQTJCO0tBRXJDO0NBRUQsQ0FBQSJ9