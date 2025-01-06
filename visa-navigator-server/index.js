require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6mmiv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
      // Connect the client to the server
      // await client.connect();
      // Send a ping to confirm a successful connection
      // await client.db("admin").command({ ping: 1 });
      console.log("You successfully connected to MongoDB!");

      const visaCollection = client.db("visaDB").collection("visas");

      // GET method to get all visas from the database
      app.get("/all-visas", async (req, res) => {
        const cursor = visaCollection.find();
        const result = await cursor.toArray();
        res.send(result);
      });

      // POST method to add a new visa to the database
      app.post("/add-visa", async (req, res) => {
        const newVisa = req.body;
        console.log("Adding new visa", newVisa);

        const result = await visaCollection.insertOne(newVisa);
        res.send(result);
      });






      // GET method to update for Application by ID
      app.get("/visa-details/:id", async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await visaCollection.findOne(query);
        res.send(result);
      });

      // PUT method to update for Application by ID
      app.put("/visa-details/:id", async (req, res) => {
        const visaId = req.params.id;
        const updatedData = req.body;
        const filter = { _id: new ObjectId(visaId) };
        const options = { upsert: true };
        const updatedDoc = {
          $set: {
            first_name: updatedData.firstName,
            last_name: updatedData.lastName,
            applied_date: updatedData.appliedDate,
            visaApplicantEmail: updatedData.email,
          },
        };
        const result = await visaCollection.updateOne(
          filter,
          updatedDoc,
          options
        );
        res.send(result);
      });

      app.get("/visa-update/:id", async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await visaCollection.findOne(query);
        res.send(result);
      });

      // PUT method to update VISA by ID
      app.put("/visa-update/:id", async (req, res) => {
        const visaId = req.params.id;
        const updatedData = req.body;
        // console.log(updatedData);

        const filter = { _id: new ObjectId(visaId) };
        const options = { upsert: true };
        const updatedDoc = {
          $set: {
            countryImage: updatedData.countryImage,
            countryName: updatedData.countryName,
            visaType: updatedData.visaType,
            processingTime: updatedData.processingTime,
            requiredDocuments: updatedData.requiredDocuments,
            description: updatedData.description,
            ageRestriction: updatedData.ageRestriction,
            fee: updatedData.fee,
            validity: updatedData.validity,
            applicationMethod: updatedData.applicationMethod,
          },
        };
        const result = await visaCollection.updateOne(
          filter,
          updatedDoc,
          options
        );
        res.send(result);
      });

      
      // GET only the latest 6 visas
      app.get("/latest-visas", async (req, res) => {
        const limit = parseInt(req.query.limit) || 6;
        const visas = await visaCollection
          .find()
          .sort({ _id: -1 })
          .limit(limit)
          .toArray();
        res.send(visas);
      });

      // DELETE method to delete a visa by ID
      app.delete("/visa-details/:id", async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await visaCollection.deleteOne(query);
        res.send(result);
      });
    } finally {
        // Ensures that the client will close when you finish
        //   await client.close();
    }
}


run().catch(console.dir);

app.get('/', (req, res) => {
    res.send("Visa Navigator");
})

app.listen(port, () => {
    console.log(`Visa Navigator in port: ${port}`);
})
