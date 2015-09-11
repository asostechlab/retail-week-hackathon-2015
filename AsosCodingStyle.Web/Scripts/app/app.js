define([
    'knockout',
    'text!./app.html'
],
    function (ko, templateMarkup) {

        function App() {
        }

        return { viewModel: App, template: templateMarkup };
    });