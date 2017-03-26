import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyBujow7s7vhewL86oeIhB7DRU2gStIkUR8',
    databaseURL: 'https://testimonials-f86d1.firebaseio.com',
}

function getJSON(url, success, error) {
    const httpRequest = new XMLHttpRequest()
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                success(JSON.parse(httpRequest.responseText))
            } else {
                error()
            }
        }
    }
    httpRequest.open('GET', firebaseConfig.databaseURL + url, true)
    httpRequest.send()
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

// get first count elements
// function getCompanyListInit(count, success, error) {
function getCompanyListInit(success, error) {
    getJSON('/company.json?orderBy="$key"', success, error)
}

// // get first count element >= bound
// function getCompanyListGe(count, bound, success, error) {
//  getJSON(`/company.json?orderBy="$key"&limitToFirst=${count}&startAt="${bound}"`, success, error)
// }

// // get last count element <= bound
// function getCompanyListLe(count, bound, success, error) {
//     getJSON(`/company.json?orderBy="$key"&limitToLast=${count}&endAt="${bound}"`, success, error)
// }

function getTestimonialListInit(company, success, error) {
    getJSON(`/testimonials/${company}.json?orderBy="$key"`, success, error)
}

export default {
    init,
    addCompany,
    addTestimonial,
    getCompanyListInit,
    getTestimonialListInit,
}
