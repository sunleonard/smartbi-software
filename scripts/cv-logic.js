const express = require (express);
const app = express ();

app.get("/", function (req, res, next){
    res.sendFile(__dirname + "/cv-entry.html");
});

app.post("/", function(req, res) {
    res.send("<h1>The CV has been posted</h1>");
});

app.listen (5400, function (){
    console.log ("Awaiting your command!");
});