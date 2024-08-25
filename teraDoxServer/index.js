const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const uri =
  "mongodb+srv://teraDox:akash123@cluster0.tyigyp7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// ____________________________________________________________________________________________

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });

    const db = client.db("teraDox")
    const studentsCollection = db.collection("students")
    
    app.post("/students-admission", async(req, res)=>{
      const data = req.body
      console.log(data)
      const result = await studentsCollection.insertOne(data)
      res.send(result)
    });

    app.get("/students", async(req, res)=>{
      const result = await studentsCollection.find().toArray()
      res.send(result)
    })

    app.get("/details/:id", async(req, res)=>{
      const id = req.params.id
      const result = await studentsCollection.findOne({_id: new ObjectId(id)})
      res.send(result)
    })


  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

// _____________________________________________________________________________________________
app.get("/", (req, res) => {
  res.send("Hello World! form teraDoxServer");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
