import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyBujow7s7vhewL86oeIhB7DRU2gStIkUR8',
    databaseURL: 'https://testimonials-f86d1.firebaseio.com',
}

function init() {
    firebase.initializeApp(firebaseConfig)
}

// returns a Promise
function addCompany(data) {
    return firebase.database().ref(`company/${data.name}`).set(true)
}

// returns a Promise
function addTestimonial(company, data) {
    return firebase.database().ref(`testimonials/${company}`).push().set(data)
}

export default {
    init,
    addCompany,
    addTestimonial,
}
