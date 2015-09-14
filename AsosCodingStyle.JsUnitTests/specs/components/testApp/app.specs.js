define(["require", "exports", 'squire'], function (require, exports, Squire) {
    describe('TestApp specs', function () {
        var instance;
        beforeEach(function (done) {
            var injector = new Squire();
            injector
                .require(['testApp/testApp'], function (Module) {
                instance = new Module.viewModel();
                done();
            });
        });
        describe('TestApp', function () {
            it('It should be an instance', function () {
                expect(instance).toBeTruthy();
            });
        });
    });
});
//# sourceMappingURL=app.specs.js.map