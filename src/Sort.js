"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sort = /** @class */ (function () {
    function Sort() {
    }
    Sort.selection = function (array) {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            var minIndex = i;
            for (var j = i + 1; j < length; j++) {
                if (array[j] < array[minIndex])
                    minIndex = j;
            }
            var tmp = array[minIndex];
            array[minIndex] = array[i];
            array[i] = tmp;
        }
    };
    return Sort;
}());
exports.default = Sort;
