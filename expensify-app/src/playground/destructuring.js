

// 
// Object Destructuring 
// 

// const person = {
//     name: 'Joao',
//     age: '25',
//     location: {
//         city: 'Campinas',
//         temp: 29
//     }
// };

// const {name: firstName = 'Anonymous', age} = person

// console.log(`${firstName} is ${age}.`);


// let {city, temp: temperature} = person.location

// console.log(`It's ${temperature} in ${city}.`);


// const book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         name: "Peguin"
//     }
// };


// const { name: publisherName = "Self-Published"} = book.publisher

// console.log(publisherName);


// 
// Array Destructuring 
// 

// const adress = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const adress = []
// const [, city = 'Brooklyn', state = 'New York'] = adress

// console.log(`You are in ${city} ${state}.`)


const item = ['Coffe (iced)', "$2.00", '$2.50', '$2.75'];


const [coffe, , price] = item


console.log(`A medium ${coffe} costs ${price}`)