import Deck from "../models/Deck.js";

const createDeckRepository = (deckName, userId) => {
  return Deck.create({ deckName, user: userId });
};

export default {
  createDeckRepository,
};
