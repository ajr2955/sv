function sortARR(ARR) {
  console.log("Sorting array:", ARR.toString());
  console.log("Sorting array:", ARR);  
  return ARR.sort();
}

console.log(sortARR([5, 3, 8, 1, 2]));

console.log("...............................................................");

function CommonVal(ARR,ARR2) {
  let common = []; 
  for (let i = 0; i < ARR.length; i++) {
    for (let j = 0; j < ARR2.length; j++) {
      if (ARR[i] == ARR2[j])
      {
        common.push(ARR[i]);
      }
    }
  }
  console.log(common);

}

console.log(CommonVal([1, 2, 3, 4], [3, 4, 5, 6]));


console.log("...............................................................");


//3)

function D2_ARR(arr) {
let sum = 0;
let count = 0;

for (let i=0 ; i<arr.length ; i++){
  for(let j=0; j<arr[i].length ; j++){
    sum += arr[i][j];
    count++; 
  }  
}
return sum/count;
}

console.log(D2_ARR([[1, 2], [3, 4, 5]]));


console.log("...............................................................");



//4)

function CountInArr(arr , num) {
let counter = 0;
for (let i=0 ; i<arr.length ; i++){
  if (num == arr[i]){
  counter++;
  }
 }  

return counter;
}

console.log(CountInArr([1,2,3,4 , 1,2] , 1));

