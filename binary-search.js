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
      low = mid+1
    }
  }
  return null;
  
}
console.log(binarySearch(arrNumbers, -1));