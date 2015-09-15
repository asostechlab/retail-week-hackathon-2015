import Squire = require('squire');
import {TestApp} from "../../../../AsosCodingStyle.Web/Scripts/components/testApp/testApp";

describe('TestApp specs', () => {

    var instance:TestApp;
    
    beforeEach(done => {

        var injector = new Squire();
        injector
            .require(['components/testApp/testApp'], function (Module) {
                instance = new Module.viewModel();
                done();
            });
    });

    describe('TestApp', () => {
        it('It should be an instance', () => {
            expect(instance).toBeTruthy();
        });
    });
});