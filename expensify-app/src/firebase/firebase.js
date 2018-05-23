import * as firebase from 'firebase';

const config = {

  };


firebase.initializeApp(config);

const database =  firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {firebase, googleAuthProvider, database as default};


// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })


// // child_added it is called with already existing child and
// // when one is added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })


// database.ref('expenses').push({
//   description : "Rent",
//   note : "to pay",
//   amount: "600",
//   createAt: 12312312312321
// })

// database.ref('expenses').push({
//   description : "Gas Bill",
//   note : "to pay gas",
//   amount: "100.50",
//   createAt: 12312931231231
// })

// database.ref('expenses').push({
//   description : "Water Bill",
//   note : "to pay water",
//   amount: "150",
//   createAt: 233333333312313
// })


// database.ref('expenses').once('value')
// .then( (snapshot) => {
//   const expenses = [];

//   snapshot.forEach( (childSnapshot) => {
//     expenses.push( {
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });


// const onValueChange = database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach( (expense) => { 
//       expenses.push({
//         id: expense.key,
//         ...expense.val()
//       });
//     })
//     console.log(expenses);
//   })

//   database.ref('expenses').on('value', onValueChange);

// database,ref('expenses')

// database.ref().set({
//   name: 'Joao Salles',
//   age: 25,
//   isSingle: true,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//       city: 'Campinas',
//       country: 'Brazil'
//   }
// }).then( () => {
//   console.log("saved");
// }).catch( (e) => {
//   console.log("error: ", e);
// });




// database.ref().once('value').then( (snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// }).catch( (e) => {
//   console.log("Error", e);
// })

// constantly watch for changes 
// const onValueChange = database.ref().on('value', (snapshot) => {
//   const values =  snapshot.val();
//   console.log(`${values.name} is a ${values.job.title} at ${values.job.company}`)
// })

// database.ref().on('value', onValueChange)



// database.ref('attributes').set({
//     height: '124',
//     weight: '60'
// });


// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Sorocaba'
// })

// database.ref('age').remove().then(function() {
//   console.log("Remove succeeded.")
// })
// .catch(function(error) {
//   console.log("Remove failed: " + error.message)
// });

