enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

// Simple use case:
// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
// 	res.status(ResponseStatus.Success).json({});
// })


enum Direction {
    Up = "up",                // 0 : In case no valuue is provided for Up
    Down = "down",           // 1
    Left = "left",           // 2
    Right = "right"         // 3
}

function doer(keyPressed: Direction ){
    if(keyPressed === Direction.Up){
        console.log("Up key")
    }
    else{
        console.log("Any other")
    }
}

doer(Direction.Up);
doer(Direction.Down);

console.log(Direction.Up);
console.log(Direction.Left);