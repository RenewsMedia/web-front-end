define(function(require) {
    var Page = require('app/Page');

    describe('app/App tests', function() {
        var module;

        beforeAll(function() {
            module = new Page();
        });

        describe('- onLinkClick method...', function() {
            var e;

            beforeEach(function() {
                e = {
                    ctrlKey: false,
                    which: 1,
                    currentTarget: {
                        href: 'testHref'
                    },
                    preventDefault: jasmine.createSpy('preventDefault')
                };
                spyOn(module, 'trigger');
                spyOn(RegExp.prototype, 'test').and.returnValue(false);
            });

            it('Should perform preventDefault of event.', function() {
                module.onLinkClick(e);

                expect(e.preventDefault).toHaveBeenCalled();
            });

            it('Should trigger specified event.', function() {
                module.onLinkClick(e);

                expect(module.trigger).toHaveBeenCalledWith('click:link', e.currentTarget.href);
            });

            it('Should do nothing if it is ctrlKey.', function () {
                e.ctrlKey = true;

                module.onLinkClick(e);

                expect(e.preventDefault).not.toHaveBeenCalled();
            });

            it('Should do nothing if which is not 1.', function () {
                e.which = 2;

                module.onLinkClick(e);

                expect(e.preventDefault).not.toHaveBeenCalled();
            });

            it('Should do nothing if href of currentTarget passed the test.', function () {
                RegExp.prototype.test.and.returnValue(true);

                module.onLinkClick(e);

                expect(e.preventDefault).not.toHaveBeenCalled();
            });
        });
    });
});