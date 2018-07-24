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


app.post("/api/todos", function(req, res){
	let arr = req.body.data;
	// console.log(arr)

	Todo.remove({}, function(){
		Todo.insertMany(arr, function(error, docs) {
			if(error){console.log(err.message)}else{
		        // console.log(docs);
		        res.sendStatus(201);
		    }
		});
	})

});

app.get("/api/todos", function(req, res){
	// res.redirect("/seasons")
	Todo.find({}, {"_id": 0, "todo": 1, "checked": 1, "id":1}, function(err, todos){
	    if(err){console.log("error while retrieving")}else{
	        // console.log(todos);
	        res.send({data:todos});
	    }
	})
});


app.listen(3000, function(){
	console.log("server started");
})

