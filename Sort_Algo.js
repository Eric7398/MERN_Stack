/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
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



/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
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
            // console.log("Initial Array: " + arr)
            arr[i] = arr[min];                            //Set the VALUE of i to the VALUE of new minmum.
            // console.log("Before Swap: " + arr)
            arr[min] = temp;                              //The previous position of the the minimum value gets swapped with the previous minimum.
            // console.log("After Swap: " + arr)
        }
    }
    return arr;
}

console.log(selectionSort([1, 5, 2, 8, 3, 4]));
//



/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
function insertionSort(arr) {
    // your code here
}

console.log(insertionSort([1, 5, 2, 8, 3, 4]));
// should log [1, 2, 3, 4, 5, 8]


/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
function multiKeySort(arr, keys) {
    // your code here
}

console.log(multiKeySort([
    {
        firstName: 'Lee',
        lastName: 'Babba'
    },
    {
        firstName: 'Lee',
        lastName: 'Abba'
    },
    {
        firstName: 'Adam',
        lastName: 'Smith'
    }
], ['firstName', 'lastName']));

// should log [
//   {
//     firstName: 'Adam',
//     lastName: 'Smith'
//   },
//   {
//     firstName: 'Lee',
//     lastName: 'Abba' },
//   {
//     firstN



/************************************************************************************************
* Creates a new sorted array from two sorted arrays.
* 
* @param {number[]} arr1 a sorted array of numbers
* @param {number[]} arr2 a sorted array of numbers
* @returns {number[]} a sorted array with all elements from both input arrays
*/

function combineSortedArrays(arr1, arr2) {
    // your code here
    let returnArray = [];
    let i1 = 0;
    let i2 = 0;
    while (i1 < arr1.length && i2 < arr2.length) {
        if (arr1[i1] < arr2[i2]) {
            returnArray.push(arr1[i1]);
            i1++;
        } else {
            returnArray.push(arr2[i2]);
            i2++;
        }
    }
    while (i1 < arr1.length) {
        returnArray.push(arr1[i1]);
        i1++;
    }
    while (i2 < arr2.length) {
        returnArray.push(arr2[i2]);
        i2++;
    }

    return returnArray;
}
// [1,2,7]
// [8,9,10]

// [1,2,7,8,9,10]

console.log(combineSortedArrays([2, 4, 6], [1, 3, 5]));
//[1, 3, 1000 ]
//[2, 5, 7]
// should log [1, 2, 3, 4, 5, 6]
// console.log(combineSortedArrays([1], [3])); // should log [1, 3]
// console.log(combineSortedArrays([1], [])); // should log [1]
/**
 * Sorts an array with a "divide and conquer" approach.
 * Uses combineSortedArrays internally.
 * 
 * @param {number[]} arr an UNSORTED array of numbers
 * @returns {number[]} the new sorted array
 */

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let lHalf = mergeSort(arr.slice(0, arr.length / 2));
    let rHalf = mergeSort(arr.slice(arr.length / 2));

    return combineSortedArrays(lHalf, rHalf);
}

// [1, 2, 3, 4, 5].slice(); // returns [1, 2, 3, 4, 5]
// [1, 2, 3, 4, 5].slice(2); // returns [3, 4, 5]
// [1, 2, 3, 4, 5].slice(2, 4); // returns [3, 4]

console.log(mergeSort([1, 5, 2, 8, 3, 4]));
    // should log [1, 2, 3, 4, 5, 8]