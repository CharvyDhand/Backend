import express from 'express'
import dotenv from 'dotenv';
dotenv.config();
// import 'dotenv/config'; 
const app = express()

// const myobject = {
//     "name": "charvy",
//     "uid": 7563
// }
// app.get('/', (req, res)=>{
//     res.json(myobject)
// })

app.get('/api/jokes', (req,res)=>{
    const jokes = [
        {
            id : 1,
            title : "A joke",
            content : "this is joke 1"
        },
           {
            id : 2,
            title : "A joke",
            content : "this is joke 2"
        },
           {
            id : 3,
            title: "A joke",
            content : "this is joke 3"
        },
           {
            id : 4,
            title : "A joke",
            content : "this is joke 4"
        }
    ]
    res.send(jokes)
})
const port = process.env.PORT || 3000
app.listen(port , ()=>{
    console.log(`listning on port : ${port}`)
})