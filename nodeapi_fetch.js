// const viewData = (data) => console.log(data[1])
const fetch = require('node-fetch')

let task = async () => {

    const results = await fetch('https://jsonplaceholder.typicode.com/posts')

    return results.json()

}

// task().then(data => console.log(data))

task().then(data => console.log(data))

// fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) {
//     if (response.ok) {
//         return response.json();
//     } else {
//         return Promise.reject(response);
//     }
// }).then(function (data) {
//     console.log(data);
// }).catch(function (err) {
//     console.warn('Something went wrong.', err);
// });