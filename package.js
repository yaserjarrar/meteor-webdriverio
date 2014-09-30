Package.describe({
    name: "gliese:webdriverio",
    summary: "Wraps WebDriverIO npm package",
    version: "0.0.1",
    git: "https://github.com/yaserjarrar/meteor-webdriverio.git"
});

Npm.depends({
    'webdriverio': '2.2.3'
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@0.9.3');
    api.add_files('webdriverio.js', 'server');
    api.export('webdriverjs');
});

