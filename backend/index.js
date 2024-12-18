const express=require('express')
const app=express()

const port=process.env.PORT||5000
const cors=require('cors')


app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("hello kitty")

})



    
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://rameshsaranya941:bottles@cluster0.8vpy1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    

   

const watchCollection=client.db("sowmiya").collection("ramesh");
app.post("/upload",async(req,res)=>{
  const data=req.body;
  const result=await watchCollection.insertOne(data);
  res.send(result);
})
app.get("/watches",async(req,res)=>{
  const watches=watchCollection.find();
  const result=await watches.toArray();
  res.send(result);
})
app.get("/watching/:id",async(req,res)=>{
  const id=req.params.id;
  const filter={_id:new ObjectId(id)};
  const result=await watchCollection.findOne(filter);
  res.send(result);
})

app.patch(".allproducts/:id",async(req,res)=>{
  const id=req.params.id;
  const updatewatchdata=req.body;
  const filter={id:new ObjectId(id)};
  const updateDoc={
    $set:{
      ...updatewatchdata
    }
  }
  const options={upsert:true};
  const result=await watchCollection.updateOne(filter,updateDoc,options);
  res.send(result);
})
app.delete("/watch/:id",async(req,res)=>{
  const id =req.params.id;
  const filter={_id:new ObjectId(id)};
  const result=await watchCollection.deleteOne(filter);
  res.status(200).json({success:true,message:"data delete successfully",result});
})
// Send a ping to confirm a successful connection
await client.db("admin").command({ ping: 1 });
console.log("Pinged your deployment. You successfully connected to MongoDB!");
} finally {
// Ensures that the client will close when you finish/error
// await client.close();
}
}
run().catch(console.dir);

 

    



app.listen(port,()=>{
    console.log(`connected to ${port}`)
})