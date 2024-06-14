// const {MongoClient} = require("mongodb");
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url)
//  async function getData(){
//     let result = await client.connect();
//    let db = result.db("e-com");
//    let collection = db.collection("products");
//    console.log(collection.find({}).toArray);
// }

const express = require('express');
const mongoose = require("mongoose")
const connect= async ()=>{
    mongoose.connect("mongodb://localhost:27017/e-com");
    const productSchema = new mongoose.Schema({});
    const products = mongoose.model("product",productSchema)
    const data = await products.find();
    console.log(data);
}
connect
const app = express()
const port = 9010
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))