// Requiring the mongoose module
const mongoose=require("mongoose");
// Connecting to the database
mongoose.connect("mongodb://localhost/contact_list_db");
// below is the code to access the DB via the name db
const db=mongoose.connection;
// To handle the error
db.on("error",console.error.bind(console,"error connecting to the DataBase"));
// Up and running then print the message
db.once("open",function(){
    console.log("Successfully connected to the database");
});