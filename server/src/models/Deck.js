import mongoose from "mongoose";

const DeckSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  deckName: {
    type: String,
    required: true,
  },
  deck: {
    type: Array,
  },
  box0: {
    type: Array,
  },
  box1: {
    type: Array,
  },
  box2: {
    type: Array,
  },
  box3: {
    type: Array,
  },
  box4: {
    type: Array,
  },
  box5: {
    type: Array,
  },
  box6: {
    type: Array,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Deck = mongoose.model("Deck", DeckSchema);

export default Deck;
