// Create an in memory hospital
// You need to create 4 routes (4 things that the hospital can do)
// 1. GET - User can check how many kidneys they have and their health
// 2. POST - User can add a new kidney
// 3. PUT - User can replace a kidney, make it healthy
// 4. DELETE - User can remove a kidney



const express = require('express');
const app = express();

const users = [{
    name: 'John',
    kidneys: [{
        healthy: false
    }]
}]

app.use(express.json())

app.get("/", (req, res) => {
    const johnKidenys = users[0].kidneys
    const noOfKidney = johnKidenys.length
    let noOfHealthyKidneys = johnKidenys.filter(kidneys => kidneys.healthy == true).length
    let noOfUnhealthyKidneys = noOfKidney - noOfHealthyKidneys

    res.json({
        noOfKidney,
        noOfHealthyKidneys,
        noOfUnhealthyKidneys
    })
})

app.post("/", (req, res) => {
    const isHealthy = req.body.isHealthy
    users[0].kidneys.push({
        healthy: isHealthy
    })

    res.json({
        msg: "Done!"
    })
})

app.put("/", (req, res) => {
    for(let i=0; i<users.length; i++) {
        users[0].kidneys[i].healthy = true
    }
    res.json({})
})


// removing all unhealthy kidneys
app.delete("/", (req, res) => {
    if(isThereAtleastOneUnhealthyKidney()){
        const newKidneys = []
        for(let i=0; i<users[0].kidneys.length; i++) {
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys
        res.json({msg: "Done"})
    }
    else{
        res.status(411).json({msg: "You have no bad kidney"})
    }
})


function isThereAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false
    for(let i=0; i<users[0].kidneys.length; i++) {
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true
        }
    }

    return atleastOneUnhealthyKidney
}

app.listen(3000, () => {
    console.log('listening on port 3000')
})