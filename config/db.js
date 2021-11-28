
const mongoose = require('mongoose');
const {MongoClient} = require('mongodb');
const config = require('config');
const db = "mongodb+srv://Wahaj:1234@cluster0.hoizc.mongodb.net/hello?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      {
        useNewUrlParser: true
        // useCreateIndex: true
      }
    );

//     const client = new MongoClient(db);
//     await client.connect();

//     let databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));

//     var Schema = mongoose.Schema;

//     var SomeModelSchema = new Schema({
//       a_string: String,
//       a_date: Date
//     });

//     console.log(SomeModel);

// // Compile model from schema
// var SomeModel = mongoose.model('SomeModel', SomeModelSchema );


    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error('ali',err.message);
    process.exit(1);
  }
};

module.exports = connectDB;