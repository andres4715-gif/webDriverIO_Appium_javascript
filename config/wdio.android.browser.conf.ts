import config from './wdio.shared.local.appium.conf';

// ============
// Specs
// ============
config.specs = ['./tests/specs/**/browser*.spec.ts'];

// ============
// Run a specific test case, to do this you would need to comment previous specs
// ============
// config.specs = ['./tests/specs/**/browser.dynamic.spec.ts'];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        browserName: 'chrome',
        maxInstances: 1,
        // For W3C the appium capabilities need to have an extension prefix
        // http://appium.io/docs/en/writing-running-appium/caps/
        // This is `appium:` for all Appium Capabilities which can be found here
        'appium:deviceName': 'Pixel 4',
        'appium:platformVersion': '11.0',
        'appium:orientation': 'PORTRAIT',
        'appium:newCommandTimeout': 240,
    },
];

exports.config = config;
