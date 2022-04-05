//Given an array of integers, return a new array with each value doubled.

//For example; 

//{1, 2, 3} --> {2, 4, 6}

//P: Is it always going to be an integers? Are we going to be given any special characters? An empty arr ever?

//R: Return a new arr with each value doubled

//Examples: If we are given [2,3,4], should we return [4,6,8]
//          If we are given [4,5,6], should we return [8,10,12]
//          If we are given [2, 22], should we return [4,44]


//Pseudocode: 
//Make a function that takes in an array
function doubled(arr){
   return arr.map(element=> element*2)
}
//Map through the array amd multiply each element by 2. and return == Map means going through each element and working with it and returns a new array
doubled([1,2,3])
console.log(doubled([2,3,4]),[4,6,8])
//using the regular function
//function doubled(arr){
  //  return arr.map(function(element){
    //    return element*2
   // })

 //}