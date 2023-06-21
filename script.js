console.log('JS funguje');

// pole / array
// indexy
// délka

const cisla = [3, 7, 197, 32, 64, 8];

console.log(cisla);
console.log( cisla[2] );
console.log( cisla.length );

const jmeno = 'Alena';

const zviratka = [
	'ovecka',
	'pes',
	'kocka',
	'zirafa',
	'slon',
	'krokodyl'
];


zviratka[6] = 'opice';
// zviratka[12] = 'lasicka';


// přidávání/odebírání z konce/začátku pole

// push = pridat na konec
zviratka.push('tygr');
zviratka.push('lev', 'antilopa');

console.log(zviratka);

// pop = odebrat z konce
const posledni = zviratka.pop();
console.log(posledni);

// unshift = pridani na zacatek
zviratka.unshift('jezevec', 'jesterka');

// shift = odebrani ze zacatku
const prvni = zviratka.shift();
console.log(prvni);


// mazání uprostřed
zviratka.splice(2, 3); // od indexu 2 smazu 3 prvky

// vkladaní doprostřed
zviratka.splice(3, 0, 'hroch');
zviratka.splice(3, 0, 'datel', 'leopard');

// nahrazování
zviratka.splice(2, 1, 'slepice');

console.log(zviratka);


// hledání
console.log( zviratka.includes('hroch') );
console.log( zviratka.indexOf('tygr') );


// pole dalších polí
// říká se tomu: vícerozměrné pole

const hraciPlocha = [
	[' ', 'x', ' ', 'o'],
	[' ', 'x', ' ', 'o'],
	['x', '🎁', ' ', ' '],
	[' ', 'x', ' ', 'o'],
];

console.log( hraciPlocha[2][1] );


// pole objektů
const kontakty = [
	{
		jmeno: 'Alena',
		telefon: '603 123 456',
		email: 'aja@seznam.cz',
	},
	{
		jmeno: 'Petr',
		telefon: '+01 987 654 321',
		email: 'peta@gmail.com',
	},
	{
		jmeno: 'Jana',
		telefon: '+421 789 123 654',
		email: 'jana32@zoznam.sk',
	},
];


console.log( kontakty[1].jmeno );


console.clear();

// cyklus for

for ( let i = 0  ;  i <= 3  ;  i++ ) {
	console.log('ahoj', i);
}



for (let i = 0;  i < kontakty.length; i++) {
	console.log( i,  kontakty[i].jmeno )
}



// cyklus for of
// metoda forEach




























