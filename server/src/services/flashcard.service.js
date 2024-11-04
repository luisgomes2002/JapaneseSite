import flashcardRepository from "./flashcard.repository.js";

const createDeckService = async (deckName, userId) => {
  if (!deckName) throw new Error("Submit all fields for registration");

  const deck = await flashcardRepository.createDeckRepository(deckName, userId);

  if (!deck) throw new Error("Erro ao criar deck");

  return {
    message: "Deck created successfully!",
    deck: { deckName },
  };
};

const createCardService = async (dataFront, dataBack) => {};

export default {
  createDeckService,
  createCardService,
};
