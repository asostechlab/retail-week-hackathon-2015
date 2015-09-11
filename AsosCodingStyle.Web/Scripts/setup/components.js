define([
    'knockout',
    'text!./componentConfiguration.json'
],
    function (ko, componentConfigurationJson) {

        // Components should be registered by adding them to ./componentConfiguration.json.
        // This is so there is a single source of component configuration that can be shared by
        // optimisation config.

        var componentConfiguration = JSON.parse(componentConfigurationJson);
        for (var i = 0; i < componentConfiguration.length; i++) {
            var component = componentConfiguration[i];
            ko.components.register(component.componentName, component.config);
        }
    });