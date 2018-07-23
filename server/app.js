const express 		= 	require("express");
const app 			= 	express();
const bodyParser 	= 	require('body-parser');
const mongoose 		= 	require("mongoose");

mongoose.connect("mongodb://localhost:27017/todo");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let todoSchema = new mongoose.Schema({
    todo: String,
    checked: Boolean
})

let Todo = mongoose.model("Todo", todoSchema);

// let sampleTask = new Todo({
//     todo: "go to school",
//     checked: false
// })

// sampleTask.save(function(err, todo){
//     if(err){
//         console.log("something went wrong")
//     }else{
//         console.log("todo saved to the database");
//         console.log("todo");
//     }
// })

// Todo.create({
//     todo: "incorporate mongo",
//     checked: false
// }, function(err, todo){
//     if(err){console.log(err.message)}else{
//         console.log(todo);
//     }
// });

// Todo.find({}, function(err, todos){
//     if(err){console.log("error while retrieving")}else{
//         console.log(todos);
//     }
// })

app.post("/api/todos", function(req, res){
	let task = req.body.task;
	Todo.create({
	    todo: task,
	    checked: false
	}, function(err, todo){
	    if(err){console.log(err.message)}else{
	        console.log(todo);
	        res.sendStatus(201);
	    }
	});
	// res.redirect("/seasons")
});

app.get("/api/todos", function(req, res){
	// res.redirect("/seasons")
	Todo.find({}, function(err, todos){
	    if(err){console.log("error while retrieving")}else{
	        res.send(todos);
	    }
	})
});


app.listen(3000, function(){
	console.log("server started");
})

