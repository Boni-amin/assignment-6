const express = require('express');  // Call Express js
const app= new express() ; // Make Object From Express js
const router = require('./src/routes/api');



// ⭐☞ Application Route
app.use('/api', router);



// ⭐☞ Export App Module
module.exports=app;
