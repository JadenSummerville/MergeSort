import { MergeSort } from "../MergeSort";
import { NumberSorter } from "../SortingFunctions/NumberSorter";

const sorter: MergeSort<number> = new MergeSort(NumberSorter);
let array: number[] = [1,-5,2,5,6,3,4,-1];
var goal: number[] = sorter.sort(array);
for(var i: number = 0; i != array.length; i++){
    console.log(goal[i]);
}