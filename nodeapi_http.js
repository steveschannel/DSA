const https = require('https')


const asPromise = (url) => new Promise((resolve, reject) => {
    https.get(url, (res) => {
        res.setEncoding("utf8");
        let body = "";
        res.on("data", data => {
            body += data;
        });
        res.on("end", () => {
            body = JSON.parse(body);
            resolve(body);
        });
    });
})

// let data

const viewData = (data) => console.log(data[1])

let task = asPromise('https://jsonplaceholder.typicode.com/posts').then(data =>
    viewData(data)
)

// return task
// return promise.then(response => etc = response)

// console.log(asPromise('https://jsonplaceholder.typicode.com/todos/1'))
// return asPromise('https://jsonplaceholder.typicode.com/todos/1').then(response => console.log(response))

// console.log(asPromise('https://jsonplaceholder.typicode.com/todos/1'))
// return asPromise('https://pokeapi.co/api/v2/pokemon/ditto').then(response => console.log(response.abilities))
// console.log(res)


