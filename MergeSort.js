"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeSort = void 0;
var MergeSort = /** @class */ (function () {
    function MergeSort(valueFunction) {
        this.valueFunction = valueFunction;
    }
    MergeSort.prototype.sort = function (input) {
        //Copy array to avoid repexposure and copy values
        var array = new Array(input.length);
        var values = new Array(input.length);
        for (var i = 0; i != input.length; i++) {
            array[i] = input[i];
            values[i] = this.valueFunction(input[i]);
        }
        //MergeSort
        this.merge(array, values, 0, input.length);
        //Return
        return array;
    };
    MergeSort.prototype.merge = function (array, values, lo, hi) {
        //baseCase
        if (lo + 1 === hi) {
            return;
        }
        //divide step
        var mid = Math.round((hi - lo) / 2 + lo);
        this.merge(array, values, lo, mid);
        this.merge(array, values, mid, hi);
        //copy both arrays
        var array1 = [];
        var array1values = [];
        var array2 = [];
        var array2values = [];
        for (var i = lo; i != mid; i++) {
            array1.push(array[i]);
            array1values.push(values[i]);
        }
        for (var i = mid; i != hi; i++) {
            array2.push(array[i]);
            array2values.push(values[i]);
        }
        //merge into main array
        var array1tracker = 0;
        var array2tracker = 0;
        for (var i = lo; i != hi; i++) {
            if (array1values[array1tracker] > array2values[array2tracker] || !array1values[array1tracker]) {
                array[i] = array2[array2tracker];
                values[i] = array2values[array2tracker];
                array2tracker++;
            }
            else {
                array[i] = array1[array1tracker];
                values[i] = array1values[array1tracker];
                array1tracker++;
            }
        }
    };
    return MergeSort;
}());
exports.MergeSort = MergeSort;
