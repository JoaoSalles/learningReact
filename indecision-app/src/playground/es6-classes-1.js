// Car
class Person {

    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }

    getGretting(){
        return `Hi. I am ${this.name}.`;
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }



}

class Student extends Person  {

    constructor(name , age, major){
        super(name,age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription()
        if (this.hasMajor()){
            description += ` his/hers major is ${this.major}`;
        }
        return description
    }
}

class Traveller extends Person {

    constructor(name,age, homeLocation){
        super(name,age);
        this.homeLocation = homeLocation
    }


    getDescription(){
        let grettings = super.getGretting()
        if (this.homeLocation){
            grettings += ` I am visiting from ${this.homeLocation}`
        }
        return grettings;
    }

}

const me = new Student('Joao Salles', 25,'Computer Science');

const other = new Student();

console.log(me.getDescription())

console.log(other.getDescription())


const travellerMe = new Traveller('Joao Salles', 25,'Sorocaba');

const travellerOther = new Traveller();

console.log(travellerMe.getDescription())

console.log(travellerOther.getDescription())
