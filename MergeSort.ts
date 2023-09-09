import { isInteger } from '../PriorityQueue/Tools/isInteger';

export class MergeSort<T>{
    private valueFunction: Function;
    constructor(valueFunction: Function){
        this.valueFunction = valueFunction;
    }
    public sort(input: T[]): T[]{
        //Copy array to avoid repexposure and copy values
        let array: T[] = new Array(input.length);
        let values: number[] = new Array(input.length);
        for(var i: number = 0; i != input.length; i++){
            array[i] = input[i];
            values[i] = this.valueFunction(input[i]);
        }
        //MergeSort
        this.merge(array, values, 0, input.length);
        //Return
        return array;
    }
    private merge(array: T[], values: number[], lo: number, hi: number): void{
        //baseCase
        if(lo + 1 === hi){
            return;
        }
        //divide step
        var mid = Math.round((hi - lo)/2 + lo);
        this.merge(array, values, lo, mid)
        this.merge(array, values, mid, hi)
        //copy both arrays
        var array1: T[] = [];
        var array1values: number[] = [];
        var array2: T[] = [];
        var array2values: number[] = [];
        for(var i: number = lo; i != mid; i++){
            array1.push(array[i]);
            array1values.push(values[i]);
        }
        for(var i: number = mid; i != hi; i++){
            array2.push(array[i]);
            array2values.push(values[i]);
        }
        //merge into main array
        var array1tracker: number = 0;
        var array2tracker: number = 0;
        for(var i: number = lo; i != hi; i++){
            if(array1values[array1tracker] > array2values[array2tracker] || !array1values[array1tracker]){
                array[i] = array2[array2tracker];
                values[i] = array2values[array2tracker];
                array2tracker++;
            }else{
                array[i] = array1[array1tracker];
                values[i] = array1values[array1tracker];
                array1tracker++;
            }
        }
    }
}