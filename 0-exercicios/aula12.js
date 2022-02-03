var obj ={
    p1: 'prop1',
    p2: 'prop2'
}

var obj2 = Object.create(obj)

console.log(obj2.p1);

console.log(JSON.stringify(obj));

console.log(JSON.parse(obj));