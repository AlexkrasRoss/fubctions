// ЗАДАЧА №1
function getArrayParams(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++)
   sum += arr[i];
   let avg =(arr.length ? sum / arr.length : 0);
  avg = Number(avg.toFixed(2));
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return ({min: min, max: max, avg: avg});
}
console.log(getArrayParams(1,2,3,-100,10));

// ЗАДАЧА №2
function summElementsWorker(...arr) {
  // Способ 1
let sum = arr.reduce((i, arr) => i + arr, 0);
   return ({sum: sum});

    // Способ 2
  // let sum = 0;
  // arr.map((array) => sum += array);
  //   return ({sum: sum});
   }
   console.log(summElementsWorker(10, 10, 11, 20, 10));

function differenceMaxMinWorker(...arr) {
  min = Math.min(...arr);
  max = Math.max(...arr);
  let maxMin =(arr.length ? max - min : 0);
  return (maxMin);
}
console.log(differenceMaxMinWorker(10, 10, -11, 20, 10));

function differenceEvenOddWorker(...arr) {
  let sumEven = 0;
  let sumOdd = 0;
let sumEvenElement = [];
let sumOddElement = [];
  for (let i = 0; i < arr.length; i++){ 
      if (arr[i] % 2 === 0){
  sumEvenElement.push(arr[i]);
  sumEven=sumEvenElement.reduce((i, sumEvenElement) => i + sumEvenElement, 0);
  }
      if (arr[i] % 2 !== 0){ 
  sumOddElement.push(arr[i]);
  sumOdd=sumOddElement.reduce((i, sumOddElement) => i + sumOddElement, 0);
 }
}
return (arr.length ? sumEven - sumOdd : 0);
}  
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));


function averageEvenElementsWorker(...arr) {
  let sumEventElement = [];
  let countEvenElement = [];
  for (i=0; i < arr.length; i++){
      if (arr[i] % 2 === 0)
        sumEventElement.push(arr[i]);
  }
    let sum = sumEventElement.reduce((i, arr) => i + arr, 0);
    countEvenElement =(arr.length ? sum / sumEventElement.length : 0);
    // countEvenElement=Number(countEvenElement.toFixed(2))
    console.log( sumEventElement,countEvenElement);
  }; 
  (averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9));

summElementsWorker(1,3,4,5,37);



function makeWork (arrOfArr, func) {

}
