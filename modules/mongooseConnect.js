let isConnected = false;
let mongoose;
function connectMongoose() {
  mongoose = require("mongoose");
  mongoose.set("useNewUrlParser", true);
  mongoose.set("useUnifiedTopology", true);
  mongoose.set("useFindAndModify", false);
  mongoose.set("useCreateIndex", true);
  mongoose.connect(
    process.env.MONGODB_URI ||"mongodb+srv://runjhun:anushKA1902@cluster0.zr7egtf.mongodb.net/greetingCards"|| "mongodb://localhost:27017/greetingCards"
  );
  isConnected = true;
  console.log("connected to mongoose");
}

function getMongoose() {
  if (!isConnected) {
    connectMongoose();
  }
  return mongoose;
}

module.exports = { getMongoose: getMongoose };
