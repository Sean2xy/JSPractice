// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const temps = [3,-2,-6,-1,'error',9,13,17,15,14,9,5];
//
//
// // const calTempDiff = function (temps){
// //     let max = temps[0];
// //     let min = temps[0];
// //   for(let i=1;i<temps.length;i++){
// //       // if(temps[i]==='error') continue;
// //       if(typeof temps[i]!=='number') continue;
// //       max=Math.max(temps[i],max);
// //       min=Math.min(temps[i],min);
// //   }
// //   return max-min;
// // };
// // console.log(calTempDiff(temps));
//
// const calTempDiff = function (t1,t2){
//     const temps = [...t1,...t2];
//     let max = temps[0];
//     let min = temps[0];
//     for(let i=1;i<temps.length;i++){
//         // if(temps[i]==='error') continue;
//         if(typeof temps[i]!=='number') continue;
//         max=Math.max(temps[i],max);
//         min=Math.min(temps[i],min);
//     }
//     return max-min;
// };
// console.log(calTempDiff(temps,[1,2,3,4,999]));

// const measureKevlin = function () {
//     const measurement = {
//         type:'temp',
//         unit:'celenius',
//         value:Number(prompt('Degress celsius'))
//     };
//
//     //
//     console.table(measurement);
//
//     // debugger;
//     const kevin = measurement.value+273;
//     return kevin;
// }
// console.log(measureKevlin());

const printForecasr = function (arr) {
    var temps =``;
    for (let i=0;i<arr.length;i++){
        temps +=`${arr[i]}c in day${i+1}...`;
    }
    console.log('...'+temps);
}
printForecasr([17,21,33]);

// html and css
