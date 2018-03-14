import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './componets/Indecision';
import 'normalize.css/normalize.css'
import './styles/styles.scss';


ReactDOM.render(
    (<IndecisionApp></IndecisionApp>), 
    document.getElementById('app')
);
// ReactDOM.render(<IndecisionApp content={template}/>, document.getElementById('app'));


// class OldSyntax {
//     constructor() {
//         this.name = "mike";
//         this.getGreetings = this.getGreetings.bind(this);
//     }

//     getGreetings(){
//         return `Hi. My name is ${this.name}.`
//     }
// }

// const oldSyntax = new OldSyntax();
// const getGreetings = oldSyntax.getGreetings;
// console.log(getGreetings())


// // --- new syntax
// // can use arrow function to get this scope
// class NewSyntax {
//     name = "Jen";

//     getGreetings = () => {
//         return `Hi. My name is ${this.name}`
//     }
// }

// const newSyntax = new NewSyntax();
// const newGetGreetings = newSyntax.getGreetings;
// console.log(newGetGreetings());