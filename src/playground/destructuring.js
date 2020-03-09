console.log('boom');

const person ={
    name:'neso',
    age: 25,
    location:{
        city:'makindye',
        temp: 25
    }
}

const {name, age} = person;
//console.log(`${name} is ${age}.`);

const item = ['Coffee (hot)','$2.00','$2.50','$2.75'];

const [coffee, ,amount, ] = item;

console.log(`A medium ${coffee} costs ${amount}`);