var libpath = process.env['EXAMPLE_COV'] ? '../lib-cov' : '../lib';
var Collection = require(libpath + '/collection');

describe('Collection', function () {

  describe('when empty', function () {

    var collection;

    before(function () {
      collection = new Collection();
    });

    it('should contain no elements', function () {
      collection.count().should.equal(0);
    });

  });

  describe('with one element', function () {

    var collection;
    var element = '123';

    before(function () {
      collection = new Collection();
      collection.add(element);
    });

    it('should contain one element', function () {
      collection.count().should.equal(1);
    });

    describe('when removing the only element', function () {

      before(function () {
        collection.remove(element);
      });

      it('should contain no elements', function () {
        collection.count().should.equal(0);
      });

    });

  });

});
