function getArrayParams(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++)
   sum += arr[i];
   let avg =(arr.length ? sum / arr.length : 0);
  avg = Number(avg.toFixed(2));
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return ({min: min, max: max,avg: avg});
}
getArrayParams(154,152,800);

function summElementsWorker(...arr) {


}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {
 
}
summElementsWorker(1,3,4,5,37);



function makeWork (arrOfArr, func) {

}
