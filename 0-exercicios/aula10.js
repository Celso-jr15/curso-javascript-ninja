/*
var counter = 1;

while (counter<=10){
    console.log (counter++);
}

*/

/*
var counter = 1;

do {
    console.log (counter++);
} while (counter<10);
*/

/*
for (var i = 0; i <10; i++){
    console.log(i);
}
*/

var car = {
    modelo: 'VW',
    fabricante: 'Gol',
    cor: 'branco'
}

for (var prop in car){
    //console.log (prop);
    console.log (car[prop]);
}