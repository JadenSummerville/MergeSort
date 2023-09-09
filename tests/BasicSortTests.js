"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MergeSort_1 = require("../MergeSort");
var NumberSorter_1 = require("../SortingFunctions/NumberSorter");
var sorter = new MergeSort_1.MergeSort(NumberSorter_1.NumberSorter);
var array = [1, -5, 2, 5, 6, 3, 4, -1];
var goal = sorter.sort(array);
for (var i = 0; i != array.length; i++) {
    console.log(goal[i]);
}
