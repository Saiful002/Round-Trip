const express=require("express")
const { MongoClient,ServerApiVersion} = require('mongodb');
const ObjectId=require('mongodb').ObjectId;
const cors=require("cors")
require('dotenv').config();

const app=express()
const port=process.env.PORT || 5000

//middleware
app.use(cors())
app.use(express.json())

 const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bswtn.mongodb.net/?retryWrites=true&w=majority`;
 const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });




async function run(){

    try{

        //await client.connect()
        const database = client.db("round-trip");
    const offerCollections = database.collection("offers");

    //Get ALL Offers API
    app.get('/bookings',async(req,res)=>{
        const cursor = offerCollections.find({});
        const bookings= await cursor.toArray();
        res.send(bookings);
    })

    //Get A Single Offer API
    app.get('/bookings/:id',async(req,res)=>{
        const id = req.params.id
        const query= {_id: ObjectId(id)};
        const result = await offerCollections.findOne(query);
        res.json(result);
    })


    }finally{
        // await client.close()
    }
}
run().catch(console.dir)


app.get('/',(req,res)=>{
    res.send('Round trip is running')
})

app.listen(port,()=>{
    console.log('listening to port',port)
})