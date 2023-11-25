const express=require('express');
const path=require('path')
const productRoutes = require('./src/routes/Products');
const general = require('./src/routes/general');
const bodyparser=require('body-parser')
const rootDir=require('./src/helper/baseAddress.js')

const PORT=4000;
const app =express()
app.listen(PORT,()=>{
    console.log("Listening on port 4000");
})

app.use(bodyparser.urlencoded({extended:false}));

app.use(productRoutes)
app.use(general)

app.use((req,res)=>{
    res.sendFile(path.join(rootDir,'src','pages','404.html'))
})