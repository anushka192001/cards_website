//mongoose
const mongooseConnect = require("./mongooseConnect");
const mongoose = mongooseConnect.getMongoose();

// card Schema(s)
let cardSchema = new mongoose.Schema({
  recipientDescription: String,
  gender: String,
  genderDescription: String,
  eventType: String,
  eventDescription: String,
  style: String,
  interests: String,
  senderNameDescription: String,
  senderSignature: String,
  senderSignatureDescription: String,
  picUrl: String,
  cssStyle: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  line1Description: String,
  line2Description: String,
  finalCardImgurUrl: String,
  imgurDeleteHash: [String],
  finalCardPicUrl: String
  // finalCardPicLocal: String
});
let Card = mongoose.model("Card", cardSchema);

//DB functions
//show one card
function getOneCard(cardId) {
  return Card.findById(mongoose.Types.ObjectId(cardId));
}

//add new card
function addNewCard(card) {
  let newCard = new Card(card);
  return newCard.save();
}
function updateFinalImgUrl(cardId, url) {
  Card.findByIdAndUpdate(
    cardId,
    {
      finalCardPicUrl: url
      // finalCardPicLocal: localUrl
    },
    (err, card) => {
      if (err) {
        console.log("update final img url error: ", err);
      } else {
        console.log("update final img url success! ");
      }
    }
  );
}

async function updateImgurUrl(cardId, url, deleteHash) {
  let card = await Card.findById(cardId);
  card.finalCardImgurUrl = url;
  card.imgurDeleteHash.push(deleteHash);
  await card.save();
}

function editCard(cardId, editedCard) {
  return Card.findByIdAndUpdate(cardId, editedCard);
}

module.exports = {
  getOneCard: getOneCard,
  addNewCard: addNewCard,
  updateFinalImgUrl: updateFinalImgUrl,
  editCard: editCard,
  updateImgurUrl: updateImgurUrl
};
