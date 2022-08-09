// Write the splitter function that: 

// Takes in an array and a num
// returns an array of subarray of length num

// notes:

    // Subarrays cannot have a length of > num
    // sub array CAN have a length that is <= num

    function splitter(arr, num) {
        let newArr = []
        for (let i = 0;  i < arr.length; i += num) { //iterate over the arr,  increment array by num so we don't keep getting the same [1,2,3]
          newArr.push(arr.slice(i, i + num)) //push the new sliced arr into the empty arr, slice arr by the start of the iteration of arrays then separate the
                                             //iterations of arrays by the inputted num amount, the slice(start of array, end of array)
        }
          return newArr; //return new array
        }
        const arr = [1,2,3,4,5,6,7,8,9,10]
        const num = 3
        
        // should return [[1,2,3], [4,5,6], [7,8,9], [10]]
        
        console.log(splitter(arr, num))