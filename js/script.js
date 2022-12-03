"use strict"


//===================================23===============================



/* testBlock()
function testBlock() {
	let mySuname = "Kolesnikova";
	console.log(mySuname.length);
	//.length визначає кільскість симвлів
	console.log(typeof mySuname);
} */

/* let myName2 = "Alina";
console.log(typeof myName2);
console.log(myName2.toUpperCase()); */

/* let myName2 = "Alina";
myName2 = myName2.replace('A', 'K')
console.log(myName2); */

//======================================
//floor

/* let someNumer = 20;
let someNoRoundNumer = 25.43;
console.log(Math.floor(someNoRoundNumer)) */

//======================================
//ceil

/*
let someNoRoundNumer = 25.43;
console.log(Math.ceil(someNoRoundNumer)) */

//=======================================
//round 25.4545=25   25.5646=26

/*
let someNoRoundNumer = 25.493435;
console.log(Math.round(someNoRoundNumer)) */

//========================================
//abs  прибирає мінус

/* let someNoRoundNumer = -25.49;
console.log(Math.abs(someNoRoundNumer)) */

//=======================================
//random виводить рандомне число

/* console.log(Math.random());

let numb = 20;
let numbe = "20";
let number = numb + +numbe;
console.log(number);
console.log(typeof number);


console.log('35' + -"22");

console.log(!false && 11 || 18 && !'')


let age0 = " "
console.log(age0)

let mess = 'Привіт Світ';
let five = 5;
let four = 4; */

/* if (five == four) {
	console.log(mess);
} else {
	console.log('ПА-ПА')
}


console.log(1 === '1')


let numpl = 0;
while (numpl < 10) {
	console.log(numpl);
	numpl++
} */
//теж саме
/* let numpl = 0;
while (numpl < 10) console.log(numpl++); */


/* let nummn = 5;
while (nummn > 1) {
	console.log(nummn);
	nummn--
} */
//теж саме
/* let nummn = 10;
while (nummn > 1) console.log(nummn--); */


/* for (let num = 1; num < 5; num++) {
	console.log(num);
} */



console.log("Д/З Циклы FOR и WHILE в JavaScript.\nДирективы break и continue.");


let number = 1;
while (number < 6) {
	console.log(number);
	number++;
}


for (let numbe = 5; numbe > 0; numbe--) {
	console.log(numbe);
}


let nb = 8;
while (nb) {
	console.log(nb);
	nb--
}

let num = 0;
while (num < 3) {
	console.log(`Число: ${num}`);
	num++
}

/* let num = 0;
for (; num < 3; num++) {
	console.log(num);
	if (num == 3) break
}
console.log(`Число: ${num}`); */


/* let num = 0;
for (; num < 5; num++) {
	if (num == 3) continue;
	console.log(num);
} */


firstFor: for (let numb = 0; numb < 2; numb++) {
	for (let size = 0; size < 3; size++) {
		if (size == 1) {
			break firstFor;
		}
		console.log(size);

	}
}

//======================= Тип данных number. Работа с числами. проблема неточных вычислений.================

/* let sameBigNumber = 1e6;
console.log(sameBigNumber);

let sameLittlNumber = 1e-6;
console.log(sameLittlNumber); */

/* let numberOne = 5.764;
console.log(+numberOne.toFixed(2));
console.log(typeof +numberOne.toFixed(2)); */


/* let valueOne = parseInt("120.44");
console.log(valueOne);

let valueTwo = parseFloat("120.44");
console.log(valueTwo);
console.log(typeof valueTwo); */


console.log("Д/З Тип данных number.\nРабота с числами.\nПроблема неточных вычислений.");

let numberTwo = 1.005 + Number.EPSILON;
let numberRes = Math.round(numberTwo * 100) / 100;
console.log(numberRes);

let valueTwo = parseFloat("135.58px");
console.log(valueTwo);
console.log(typeof valueTwo);

let value = 58 + "Фрилансер";
if (isNaN(value)) {
	console.log('Результат выражения NaN');
}

let numberMax = Math.max(10, 58, 39, -150, 0);
console.log(numberMax);


let roundNumb = Math.floor(58.858);
console.log(roundNumb);

//=========Тип данных string. Типы кавычек, поиск, регистр и получение подстроки.======================

/* let text = "My name Alina"
for (const char of text) {
	console.log(char.toUpperCase());
} */


/* let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing Elit. Beatae minimMa nam laboriosam eius vitae sed fugiat sint. Ipsum harum nIsi tenetur Hic nesciunt vel rem similique aliquam, autem rePrehenderit possimus";
console.log(lorem.toLocaleLowerCase().indexOf('eli'));

let lorem1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minima nam laboriosam eius vitae sed fugiat sint. Ipsum harum nisi tenetur hic nesciunt vel rem similique aliquam, autem reprehenderit possimus";
console.log(lorem1.includes('hic')); */

console.log("Тип данных string. Типы кавычек, поиск, регистр и получение подстроки.");

let a = "фрілансер";
let b = `Привіт! Я ${a}`;
console.log(b);

let p = "Фрілансер";
let f = p[5];
console.log(f);

let textUP = "фрілансер";
console.log(textUP.toUpperCase());

let texT = "фрілансер";
console.log(texT.slice(3, 6));





