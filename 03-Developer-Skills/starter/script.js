// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
console.log('me')
const DolphinsData1 = [44,23,71]
const KoalasData1 = [65,54,49]
const DolphinsData2 = [85,54,41]
const KoalasData2 = [23,34,27]

let averageCalculator=(inp1,inpt2,inpt3) =>{
   const average = ((inp1+inpt2+inpt3) / 3)
    return average
}

const DolphinsAverage1 = averageCalculator(DolphinsData1[0],DolphinsData1[1],DolphinsData1[2])
const DolphinsAverage2 = averageCalculator(DolphinsData2[0],DolphinsData2[1],DolphinsData2[2])
const KoalasAverage1 = averageCalculator(KoalasData1[0],KoalasData1[1],KoalasData1[2])
const KoalasAverage2 = averageCalculator(KoalasData2[0],KoalasData2[1],KoalasData2[2])
console.log(DolphinsAverage1)
console.log(DolphinsAverage2)
console.log(KoalasAverage1)
console.log(KoalasAverage2)


// let checkwiner = function(dolphins,koalas) {
// let winer = dolphins > koalas ? console.log('Dolphins are te best') : ('Koalas are the best')
// return winer
// }
// console.log(checkwiner(DolphinsAverage1,KoalasAverage1))
let winer1 = function(dolphinsscore,koalasscore) {
    if (( dolphinsscore / 2) >=  koalasscore ) {
    console.log('Dolphinsh win')
}else if ((( koalasscore / 2) >= dolphinsscore )) {
    console.log('Koalas win')
} else if (((( koalasscore / 2) != (dolphinsscore / 2 ))) ) {
    console.log('See you next time')
}
// return winer1
}
winer1(DolphinsAverage1,KoalasAverage1)
winer1(DolphinsAverage2,KoalasAverage2)

const MarkMiller = {
    weight : 78,
    height : 1.68,
    bmi : function () {
        return (this.weight / (this.height * this.height))
    }

}
const JohnSmith ={
    weight : 92,
    height : 1.95,
    bmi : function () {
        return (this.weight / (this.height * this.height))
    }
}
console.log(MarkMiller.bmi())
console.log(JohnSmith.bmi())
MarkMiller.bmi() > JohnSmith.bmi() ? console.log( 'mark has a biger BMI') : console.log('johnas has a bigher BMI' )

console.log(`Lifting weights repetition`)
for(let rep = 0; rep <=10; rep++){
    console.log(`Lifting weights repetition ${rep}`)
}


const jonas =[
    'Jonas',
    'Schmdtmann',
    2037-1991,
    'teacher',
    ['Michael','Peter','Steven'],
    true
]

const types =[]
const newTypes=[]

for(let i =0; i < jonas.length ; i++){
    console.log(jonas[i], typeof jonas[i])
    types[i] = typeof jonas[1]
    newTypes.push(typeof jonas[i])
}
console.log(types)
console.log(newTypes)

const years = [1991,2007,1969,2020];
const ages =[]

for (let i=0; i<years.length; i++){
    ages.push(2037 - years[i])
}
console.log(ages)



const jonas =[
    'Jonas',
    'Schmdtmann',
    2037-1991,
    'teacher',
    ['Michael','Peter','Steven'],
    true
]

for (let i= jonas.length -1; i>= 0; i--){
    console.log(jonas[i])
}
for (let i=0; i < jonas.length; i++){
    console.log(jonas[i])
}

for ( let exercise = 1; exercise <4; exercise++){
    console.log(`----------Starting exercise ${exercise}`);
    for ( let rep = 1 ; rep <6; rep++)
    console.log(`Exercise ${exercise}: Lifting weight reception ${rep}`)
}

for (let rep = 1; rep <= 10; rep ++){
    console.log (`Lifting weights repetition ${rep}`)
}

let rep= 1;
while (rep<=10){
    console.log(`WHILE: Lifting weights repetition ${rep}`)
    rep++;
}

let dice =Math.trunc(Math.random() * 6) + 1
console.log(dice)

while(dice !== 6){
    console.log(`You rolled a ${dice}`);
   dice =Math.trunc(Math.random() * 6) + 1
   if ( dice === 6) console.log('Loop is about to ends....')
}



for ( let exercise = 1; exercise <4; exercise++){
    console.log(`----------Starting exercise ${exercise}`);
    for ( let rep = 1 ; rep <6; rep++)
    console.log(`Exercise ${exercise}: Lifting weight reception ${rep}`)
}


bils = [22,295,176,440,37,105,10,1100,86,52]
tips =[]
total =[]

tipVal = (val)=> {
    inpout = val >= 50 && val < 300 ? 0.15 : 0.2;
    return inpout;
  };
  calctipAmount = (val,amount) => {
    inpout = val * amount
    return inpout};

    for (let i=0; i < bils.length; i++){
            inpout = bils[i] >= 50 && bils[i] < 300 ? 0.15 : 0.2;
            tips.push (inpout * bils[i])
            total.push(bils[i] + tips[i])
    }
console.log(bils)
console.log(tips)
console.log(total)


const calcAverage = function(arr) {
   let sum = 0
   for( let i=0 ; i < arr.length; i++){ 
//    sum= sum +arr[i];
sum += arr[i]
   }
   return sum / arr.length
}
console.log(calcAverage(total))
console.log(calcAverage(tips))
*/
const td1 = [17, 21, 23];
const td2 = [12, 5, -5, 0, 4];
console.log(`...${td1[0]} C...${td1[1]} C...${td1[2]} C`);
const printNew = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]} C in ${i + 1} days...`;
  }
  console.log("..." + str);
};
printNew(td1);
printNew(td2);
