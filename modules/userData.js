//mongoose
const mongooseConnect = require("./mongooseConnect");
const mongoose = mongooseConnect.getMongoose();
const LocalStrategyMongoose = require("passport-local-mongoose");
const cardsData = require("./cardsData");

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  isAdmin: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  cards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Card"
    }
  ]
});
UserSchema.plugin(LocalStrategyMongoose);
const User = mongoose.model("User", UserSchema);

async function addCard(userId, cardId) {
  let thisUser = await User.findById(userId);
  if (!thisUser.cards.includes(cardId)) {
    thisUser.cards.push(cardId);
    await thisUser.save();
    console.log("card was added to user");
  } else {
    console.log("card is duplicated");
  }
}

module.exports = {
  User: User,
  addCard: addCard
};
