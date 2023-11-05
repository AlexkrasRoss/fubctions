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
getArrayParams(1,2,3,-100,10);

function summElementsWorker(...arr) {
  let initialValue = 0;
let sum = arr.reduce(
    (valueAccumulator, arr) => valueAccumulator + arr, initialValue);
   return ({sum: sum});
 }
 summElementsWorker(-10,53,-40)


function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {
 
}
summElementsWorker(1,3,4,5,37);



function makeWork (arrOfArr, func) {

}
