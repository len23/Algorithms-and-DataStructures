let arrNumbers = [1, 3, 5, 7, 9];

function binarySearch(list, item) { //Introduce the list and the item to search
  let low = 0; //Allways it'll be zero
  let high = list.length - 1; //Calculate the last index
  
  while (low <= high) {
    let mid = Math.floor((low + high)/2);
    let guess = list[mid];
    if(guess == item){
      return mid;
    }
    if(guess > item) {
      high = mid-1;
    } else {
      low = mid+1;
    }
  }
  return null;
  
}
// console.log(binarySearch(arrNumbers, -1));

/* Excersice */
/* Suppose you have a sorted list of 128 names, and you’re searching
through it using binary search. What’s the maximum number of
steps it would take? */


/* Suppose you double the size of the list. What’s the maximum
number of steps now? */

function calculateNroSteps(list_length) {
   return result = Math.log2(list_length);
}

console.log(calculateNroSteps(128));

