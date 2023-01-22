import express from 'express'
import path from 'path'

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('static'))

app.get('/',(req,res)=>{
    // res.sendFile('index.html', { root: "./" })
    // res.send('Tgb')
    res.render("index")
})
app.get('/features',(req,res)=>{
    res.render("features")
})

app.get('/customise',(req,res)=>{
    res.render("customise")
})

app.get('/faq',(req,res)=>{
    res.render("faq")
})
app.get('/contact',(req,res)=>{
    res.render("contact")
})


const port = process.env.PORT || 5000

app.listen(port,console.log(`The server is up and running on port${port}`))