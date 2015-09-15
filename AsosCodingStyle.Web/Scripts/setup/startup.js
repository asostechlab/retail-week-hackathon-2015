define('startup', [
    'knockout',
    'libs/es6-promise',
    'setup/components'
],
    function (ko, es6Promise) {
        es6Promise.polyfill();
        ko.applyBindings({});
    }); 