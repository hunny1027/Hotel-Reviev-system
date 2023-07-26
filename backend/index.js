import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import RestaurantsDAO from "./dao/restaurantsDAO.js";
import ReviewsDAO from "./dao/reviewsDAO.js";

dotenv.config();
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

MongoClient.connect(process.env.RESTREVIEWS_DB_URI, {
  poolSize: 50,
  wtimeout: 2500,
  useNewUrlParse: true,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    await RestaurantsDAO.injectDB(client);
    await ReviewsDAO.injectDB(client);
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });

// Event listener for successful connection
// MongoClient.connection.on("connected", () => {
//   console.log("Connected to MongoDB!");
// });

// // Event listener for connection errors
// MongoClient.connection.on("error", (err) => {
//   console.error("Error connecting to MongoDB:", err);
// });

// // Event listener for disconnection
// MongoClient.connection.on("disconnected", () => {
//   console.log("Disconnected from MongoDB!");
// });
