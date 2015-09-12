import Squire = require('squire');
import {App2} from "../../../AsosCodingStyle.Web/Scripts/app2/app2";

describe('App specs', () => {

    var instance:App2;
    
    beforeEach(done => {

        var injector = new Squire();
        injector
            .require(['app2/app2'], function (Module) {
                instance = new Module.viewModel();
                done();
            });
    });

    describe('App2', () => {
        it('It should be an instance', () => {
            expect(instance.getNames()).toBeTruthy();
        });
    });
});