const mongoose = require('mongoose');

let MONGODB_URI = process.env.NODE_ENV =="production"? process.env.PROD_MONGODB : process.env.MONGODB_URI_LOCAL ;

mongoose.connect(MONGODB_URI, {useUnifiedTopology: true, useNewUrlParser: true})
.then(() => {
  console.log('Succesfully connected to MongoDB');
})
.catch(e => console.error('Connection error', e.message));

const db = mongoose.connection;

module.exports = db;


// let db = process.env.NODE_ENV =="production"? process.env.PROD_MONGODB : process.env.MONGODB_URI_LOCAL ;

//   const connectWithRetry = () => {
//     console.log("MongoDB connection with retry");
//     try {
//       mongoose.connect(db,{useUnifiedTopology: true, useNewUrlParser: true});
//       console.log("Mongo Connected")
//     } catch (err) {
//       console.log("MongoDB connection unsuccessful, retry after 5 seconds.", err);
//       setTimeout(connectWithRetry, 5000);
//     }
  
//     // If the connection throws an error
//     mongoose.connection.on("error", function (err) {
//       console.log("Mongoose default connection error: " + err);
//       setTimeout(connectWithRetry, 3000);
//     });
//     // When the connection is disconnected
//     mongoose.connection.on("disconnected", function () {
//       console.log("Mongoose default connection disconnected");
//       setTimeout(connectWithRetry, 3000);
//     });
  
//     // If the Node process ends, close the Mongoose connection
//     process.on("SIGINT", function () {
//       mongoose.connection.close(function () {
//         console.log(
//           "Mongoose default connection disconnected through app termination"
//         );
//         process.exit(0);
//       });
//     });
//     return;
//   };
//   connectWithRetry();
//  const mongoConnection = mongoose.connection



// module.exports = mongoConnection