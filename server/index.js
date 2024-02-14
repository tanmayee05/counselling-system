const express = require('express')

const app= express()

app.get('/',(req,res)=>
{
    res.send('<h1>hello klu<h1>')
})

app.get('/about',(req,res)=> 
{
    res.send('<h1>this is about page</h1>')
})

app.post('/contact',(req,res)=>
{
    res.send('<h1>this is about page</h1>')
})

app.listen(2005,()=>{console.log('Express server is running')})