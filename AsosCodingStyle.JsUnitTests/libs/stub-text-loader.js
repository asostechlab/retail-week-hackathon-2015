// A stub text loader for unit testing knockout components

define([], function () {
    return {
        load: function (name, req, onLoad, config) {
            onLoad();
        }
    };
});
