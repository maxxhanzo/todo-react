const express 		= 	require("express");
const app 			= 	express();
const bodyParser 	= 	require('body-parser');
const mongoose 		= 	require("mongoose");
const path 			= 	require("path");


mongoose.connect("mongodb://localhost:27017/todo");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))

let todoSchema = new mongoose.Schema({
    todo: String,
    checked: Boolean,
    id: String
})

let Todo = mongoose.model("Todo", todoSchema);



app.get("/", function(req, res){
	res.sendFile(path.resolve("index.html"));
})


app.get("/api/todos", function(req, res){
	// res.redirect("/seasons")
	Todo.find({}, {"_id": 0, "todo": 1, "checked": 1, "id":1}, function(err, todos){
	    if(err){console.log("error while retrieving")}else{
	        // console.log(todos);
	        res.send({data:todos});
	    }
	})
});

app.post("/api/todos", function(req, res){
	let entry = req.body.data;

	Todo.create(entry, function(err, todo){
	    if(err){console.log(err.message)}else{
	        console.log(todo);
	        res.sendStatus(201);
	    }
	});

});

app.delete("/api/todos/:id", function(req, res){
	Todo.remove({id: req.params.id}, (err, todo) => {
	    if (err) return res.status(500).send(err);
	    const response = {
	        message: "Todo successfully deleted",
	        id: todo.id
	    };
	    return res.status(200).send(response);
	});
})


app.put("/api/todos/:id", function(req, res){
	let query = { id: req.params.id };
	// console.log(req.body.data);
	let changeDemanded = !req.body.data.checked;
	// console.log(changeDemanded)
	Todo.findOneAndUpdate(query, {checked: changeDemanded}, (err, todo) => {
	    if (err) return res.status(500).send(err);
	    const response = {
	        message: "Todo successfully modified",
	        // id: todo.id
	    };
	    return res.status(200).send(response);
	});
})

app.listen(3000, function(){
	console.log("server started");
})

