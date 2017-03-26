import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyBujow7s7vhewL86oeIhB7DRU2gStIkUR8',
    databaseURL: 'https://testimonials-f86d1.firebaseio.com',
}

function init() {
    firebase.initializeApp(firebaseConfig)
}

export default {
    init,
}
