define([
        'squire'
    ],
    function(Squire) {

        describe('App specs', function() {

            var instance;

            beforeEach(function(done) {

                var injector = new Squire();
                injector
                    .require(['app/app'], function(Module) {
                        instance = new Module.viewModel();
                        done();
                    });
            });

            describe('App', function() {
                it('It should be an instance', function() {
                    expect(instance).toBeTruthy();
                });
            });
        });
    });