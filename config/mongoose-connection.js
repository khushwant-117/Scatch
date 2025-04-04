const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://khushwantn1304:qS7p65xkrHAA5K6e@cluster0.hmwqt7v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(function(){
    console.log("connected");
})
.catch(function(err){
    console.log(err);
})
module.exports = mongoose.connection;