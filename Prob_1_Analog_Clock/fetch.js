const Url1 = "https://jsonplaceholder.typicode.com/users/1/albums"

const promise = fetch(Url1)

promise
    .then((res) => {
    return res.json()
})
.then((data) => {
    console.log(data.filter(data => data.id == 7))
}).then((album) => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos/")
    //completar
}).catch((error) => {
    console.error(error.message)
})



