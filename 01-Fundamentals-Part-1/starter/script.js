/*
let marksW =78 ;
let marksH = 1.69;
let johnW = 92;
let johnH = 1.95;
let bmi = (v1,v2) => {
    bmiCalc = v1/(v2*v2)
    return bmiCalc
}
// console.log()
console.log(bmi(marksW,marksH))
console.log(bmi(johnW,johnH))
console.log(bmi(marksW,marksH) > bmi(johnW,johnH))
let markHigherBmi = bmi(marksW,marksH) > bmi(johnW,johnH)
console.log(markHigherBmi)

let marksW1 =95 ;
let marksH1 = 1.95;
let johnW1 = 85;
let johnH1 = 1.76;
console.log(bmi(marksW1,marksH1))
let marksBmi = bmi(marksW1,marksH1)
console.log(bmi(johnW1,johnH1))
let johnBmi = bmi(johnW1,johnH1)
console.log(johnBmi)
console.log(bmi(marksW1,marksH1) > bmi(johnW1,johnH1))
let markHigherBmi1 = bmi(marksW1,marksH1) > bmi(johnW1,johnH1)
console.log(markHigherBmi1)

if (marksBmi > johnBmi){
    console.log(`Mark is a bid boyyyyy ${marksBmi}`)
} else {
    console.log(`Johyyyy is a bid boyyyyy ${johnBmi}`)
}

const hasDriverLicense = true ; //A
const hasGoodVision = true; //B
console.log(hasDriverLicense || hasGoodVision)
console.log(!hasDriverLicense)
const shouldDrive = hasDriverLicense && hasDriverLicense ;
// if (hasDriverLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// }else {
//     console.log('Someone else should drive...');
// }

const isTired = false // C
console.log(hasDriverLicense && hasGoodVision && isTired)
if (hasDriverLicense && !hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
}else {
    console.log('Someone else should drive...');
}

const Dolphins1 = [96,108,89]
const Dolphins2 = [97,112,101]
const Dolphins3 = [97,112,101]
const Koalas1 = [88,91,110]
const Koalas2 = [109,95,123]
const Koalas3 = [109,95,106]

let calcAverage = (inp1, inp2, inp3) =>{
 average = ((inp1+inp2+inp3)/3)
 return average
}
console.log(Dolphins1)
console.log(calcAverage(Dolphins1[0],Dolphins1[1],Dolphins1[2]))
console.log(calcAverage(Dolphins2[0],Dolphins2[1],Dolphins2[2]))
console.log(calcAverage(Dolphins3[0],Dolphins3[1],Dolphins3[2]))
console.log(calcAverage(Koalas1[0],Koalas1[1],Koalas1[2]))
console.log(calcAverage(Koalas2[0],Koalas2[1],Koalas2[2]))
console.log(calcAverage(Koalas3[0],Koalas3[1],Koalas3[2]))
const Delphins1 = calcAverage(Dolphins1[0],Dolphins1[1],Dolphins1[2])
const Delphins2 = calcAverage(Dolphins2[0],Dolphins2[1],Dolphins2[2])
const Delphins3 = calcAverage(Dolphins3[0],Dolphins3[1],Dolphins3[2])
const Koala1 =calcAverage(Koalas1[0],Koalas1[1],Koalas1[2])
const Koala2 = calcAverage(Koalas2[0],Koalas2[1],Koalas2[2])
const Koala3 = calcAverage(Koalas3[0],Koalas3[1],Koalas3[2])
if ( Delphins1 > Koala1 && Delphins1 >= 100 && Koala1 >- 100) {
   console.log("Delphins win")
}else if(Delphins1 < Koala1 && Delphins1 >= 100 && Koala1 >= 100 )
{
    console.log("Koalas win")
}else{
    console.log('No one wins the trophy')
}
//
if ( Delphins2 > Koala2 && Delphins2 >= 100 && Koala2 >= 100) {
    console.log("Delphins win")
 }else if(Delphins2 < Koala2 && Delphins2 >= 100 && Koala2 >= 100)
 {
     console.log("Koalas win")
 }else{
     console.log('See you next time')
 }
 //
 if ( Delphins3 > Koala3 && Delphins3 >= 100 && Koala3 >= 100) {
    console.log("Delphins win")
 }else if(Delphins3 < Koala3 && Delphins3 >= 100 && Koala3 >= 100)
 {
     console.log("Koalas win")
 }else{
     console.log('See you next time')
 }

const tip = [275, 40, 430];

 tipVal = (val)=> {
    inpout = val >= 50 && val < 300 ? 0.15 : 0.2;
    return inpout;
  };
// console.log(tipVal(tip[0]));
// console.log(tipVal(tip[1]));
// console.log(tipVal(tip[2]));

let tipval0=tipVal(tip[0])
let tipval1=tipVal(tip[1])
let tipval2=tipVal(tip[2])

calctipAmount = (val,amount) => {
    inpout = val * amount
    return inpout
}
let calcA0 =calctipAmount(tipval0,tip[0])
let calcA1 =calctipAmount(tipval1,tip[1])
let calcA2 =calctipAmount(tipval2,tip[2])
calcTipAndAmoutn = (val,inpout) =>{
    amount = val + inpout
    return amount
}

console.log(calcTipAndAmoutn(tip[0],calcA0))
console.log(calcTipAndAmoutn(tip[1],calcA1))
console.log(calcTipAndAmoutn(tip[2],calcA2))
let totalAmount0 = calcTipAndAmoutn(tip[0],calcA0)
let totalAmount1 = calcTipAndAmoutn(tip[1],calcA1)
let totalAmount2 = calcTipAndAmoutn(tip[2],calcA2)

console.log(`The bill was ${tip[0]}, the tip was ${calcA0}, the total amount was ${totalAmount0}`)
console.log(`The bill was ${tip[1]}, the tip was ${calcA1}, the total amount was ${totalAmount1}`)
console.log(`The bill was ${tip[2]}, the tip was ${calcA2}, the total amount was ${totalAmount2}`)
 */
const td1 = [17, 21, 23];
const td2 = [12, 5, -5, 0, 4];
const printNew = function (arr) {
  let str = "";
  for (let i = 0; i < arr.lenght; i++) {
    str = str + `${arr[i]} C in ${i + 1} days...`;
  }
  console.log(str);
};
printNew(td1);
