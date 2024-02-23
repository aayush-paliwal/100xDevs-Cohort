function getData(){
    // By default it is get request
    fetch("https://fakerapi.it/api/v1/persons")
    .then((res) => res.json())
    .then((data) => console.log(data))
}