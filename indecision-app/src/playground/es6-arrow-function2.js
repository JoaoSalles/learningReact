// arguments objects - no longer bound with arrow functions


// const add = function(a,b) {
//     console.log(arguments);
//     return a + b;
// }

// arrow function does not have arguments anymore

const add = (a, b) => a + b;

// console.log(add(10, 15, 30));

//  this keywork -  no longe bound

// function with this error, child does not have this
// const user = {
//     name: 'Joao',
//     cities: ['Sorocaba', 'Campinas', 'Monterey'],
//     printPlacesLived: function() {
//         console.log(this.name);
//         console.log(this.cities);
//         this.cities.forEach(function (city) {
//             console.log(this.name + 'has lived' + city);
//         });
//     }
// }

// declre const that to keep this
// const user = {
//     name: 'Joao',
//     cities: ['Sorocaba', 'Campinas', 'Monterey'],
//     printPlacesLived: function() {
//         const that = this;
//         this.cities.forEach(function (city) {
//             console.log(that.name + ' has lived' + city);
//         });
//     }
// }


// use arrow Function
// arrow function keep father arguments
const user = {
    name: 'Joao',
    cities: ['Sorocaba', 'Campinas', 'Monterey'],
    printPlacesLived() {
        // map returns array
        console.log(this.cities.map((city) => this.name + ' has lived in ' + city));
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived' + city);
        // });
    }
}

user.printPlacesLived();

const multiplier = {
    numbers: [5 , 10, 15],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map( (number) => this.multiplyBy * number)
    }
}

console.log(multiplier.multiply());