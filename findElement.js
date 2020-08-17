/*
Basic Algorithm Scripting: Finders Keepers
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
*/

//Solution three

function findElement(arr, func) {                                   //1
  return arr[arr.map(func).indexOf(true)];                          //2
}
  
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));


//Notes
/*
//1     This function takes in two arguments
            1. an array 
            2. a function to be performed on the array


//2     Will return the array using the map array method
            - The map() method creates a new array with the results of calling a provided function on every element in the calling array.
            - Source - [https://devdocs.io/javascript/global_objects/array/map]

            - The map array method will take in a callback function. This will be the function created as the second argument of the findElement
              function. As explained in the documentation, the callback function will be applied to each element of the array.


        The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
        Source - [https://devdocs.io/javascript/global_objects/array/indexof]
            - In the above scenario the indexOf method is chained to the map method. Therefore, it will return the first element that meets the map
              callback function. In this case 2. 
            
            
*/

