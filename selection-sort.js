function findSmallest(arr) {
  
  let smallest = arr[0] //Stores the smallest value
  let smallest_index = 0 //Stores the index of the smallest value
  for (let i=1 ; i<arr.length; i++) {
    
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
    }
  }
  return smallest_index;
}

function selectionSort(arr) {
  let newArr = [];
  let i = 0 ;
  while (i < arr.length) {
    let index = findSmallest(arr);
    newArr.push(arr[index]);
    arr.splice(index,1);
  }
  return newArr;
}


console.log(selectionSort([2,3,1,8,5]));
