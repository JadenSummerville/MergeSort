# MergeSort
CustomValuesSort
Project Description

CustomValuesSort is a Java-based project that implements the merge sort algorithm to sort a user-specific list of items based on personalized rankings. Unlike traditional sorting algorithms that rely on predefined criteria, this project asks the user to compare and rank pairs of items, enabling a highly customized sorting experience.

Simply run the main method of CustomValuesSort.java to activate.
Enter the items seperated by a single space and press enter.
When the computer asks about two items, list the one you
prefer and when you are done, they will be ranked for you.

Merge always runs in nlog(n) time and is stable. Create a function that take one argument, 'T'
and returns its value as a number. Pass this function in the constructor for a MergeSort<T>.
Run the method 'sort' with a T[] as the argument. Without editing the original array, it returns
a sorted version of the array where the first element has the smallest value calculated by the
function passed into the constructor.

Warning! If the method passed into the constructor takes more than log(n) time, than instead of
running in nlog(n) time, it will run in the time complexity of the input algorithm times n.