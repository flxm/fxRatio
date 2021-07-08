// const ratio = require("./fxratio").fxratio
// const nice = require("./fxratio").nice

const { ratio, nice } = require('./fxratio');

// console.log(require("./fxratio"))


var assert = require('assert');
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
        assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

describe('Ratio', () => {
    describe('special cases', () => {
        it('should return 1:1 if 0.5', () => {
            assert.equal(ratio(0.5), "1:1")
        });

        it('should return 1:0 if 1', () => {
            assert.equal(ratio(1), "1:0")
        });

        it('should return 0:0 if zero', () => {
            assert.equal(ratio(0), "0:0")
        });
    });

    describe('aspect ratios', () => {

        it('should return 3:4', () => {
            assert.equal(ratio(3/7), "3:4")
        });

        it('should return 5:4', () => {
            assert.equal(ratio(5/9), "5:4")
        });

        it('should return 2:3', () => {
            assert.equal(ratio(2/5), "2:3")
        });

        it('should return 16:9', () => {
            assert.equal(ratio(16/25), "16:9")
        });
        it('should return 16:10', () => {
            assert.equal(ratio(16/26), "16:10")
        });
    });

    describe('different ratios', () => {
        it('should return 1:10', () => {
            assert.equal(ratio(1/11), "1:10")
        });
        it('should return 1:100', () => {
            assert.equal(ratio(1/100), "1:100")
        });
        it('should return 1000:1', () => {
            assert.equal(ratio(1000), "1000:1")
        });
    });
});

describe('Nice', () => {
    describe('variations', () => {
        it('should return 1:1', () => {
            assert.equal(nice(1, 1), "1:1")
            assert.equal(nice(11, 11), "1:1")
        });

        it('should return 1:2', () => {
            assert.equal(nice(1, 2), "1:2")
            assert.equal(nice(111, 223), "1:2")
        });

        it('should return 1:9', () => {
            assert.equal(nice(1, 9), "1:9")
            assert.equal(nice(1, 8.7), "1:9")
        });

        it('should return 16:9', () => {
            assert.equal(nice(16, 9), "16:9")
        });

        it('should return 1:10', () => {
            assert.equal(nice(1, 10), "1:10")
            assert.equal(nice(21, 202), "1:10")
            assert.equal(nice(210, 20), "10:1")
        });

        it('should return 1:1000', () => {
            assert.equal(nice(1, 1000), "1:1000")
            assert.equal(nice(1, 998), "1:1000")
            assert.equal(nice(1, 1010), "1:1000")
        });

        it('should return 2:3', () => {
            assert.equal(nice(2, 3), "2:3")
            assert.equal(nice(4, 6), "2:3")
            assert.equal(nice(41, 61), "2:3")
        });
    });
});
