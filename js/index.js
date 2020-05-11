"use strict";

// firebase.initializeApp({
//     apiKey: 'AIzaSyDerwKijpr3GFIDe0BkPxyhyfrR5vfveBI',
//     projectId: 'cyclingclotingweather'
// });

// const database = firebase.firestore();
// const clothingCollection = database.collection("clothing");


// const convertQuerySnapshotToRegularArray = (querySnapshot) => querySnapshot.docs.map((item) => ({
//     id: item.id,
//     ...item.data()
// }));

// async function saveValues() {
//     clothingCollection.onSnapshot((querySnapshot) => {

//         const clothing = convertQuerySnapshotToRegularArray(querySnapshot);
//         console.log(clothing);
//     })
// }

// saveValues();