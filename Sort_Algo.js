function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                // save j in a let
                let temp = arr[j];
                // j becomes j + 1
                arr[j] = arr[j + 1];
                // j + 1 becomes j 
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([1, 5, 2, 8, 3, 4]));
// should log [1, 2, 3, 4, 5, 8]





/**
 * Sorts an array by cycling through and selecting the minimum value.
 * 
 * @param {number[]} arr an UNSORTED array of numbers
 * @returns {number[]} the INPUT array (ie. sorts "in place")
 */

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        var min = i;                                       //Sets minimum POSITION marker in array.
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {                       //Is value less than the value at the minimum position?
                min = j                                    //Set new minimum position.
            }
        }
        if (min != i) {                                   //Is the lowest value NOT at the current front position marker ("i")?                 
            let temp = arr[i];
            console.log("Initial Array: " + arr)
            arr[i] = arr[min];                            //Set the VALUE of i to the VALUE of new minmum.
            console.log("Before Swap: " + arr)
            arr[min] = temp;                              //The previous position of the the minimum value gets swapped with the previous minimum.
            console.log("After Swap: " + arr)
        }
    }
    return arr;
}

console.log(selectionSort([1, 5, 2, 8, 3, 4]));
  //