# MergeSort
Merge always runs in nlog(n) time and is stable. Create a function that take one argument, 'T'
and returns its value as a number. Pass this function in the constructor for a MergeSort<T>.
Run the method 'sort' with a T[] as the argument. Without editing the original array, it returns
a sorted version of the array where the first element has the smallest value calculated by the
function passed into the constructor.

Warning! If the method passed into the constructor takes more than log(n) time, than instead of
running in nlog(n) time, it will run in the time complexity of the input algorithm times n.