import flashcardService from "./flashcard.service.js";

const createDeckController = async (req, res) => {
  const { deckName } = req.body;
  const userId = req.userId;

  try {
    const deck = await flashcardService.createDeckService(deckName, userId);
    return res.status(201).send(deck);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const createCardController = async (req, res) => {};

export default {
  createDeckController,
  createCardController,
};

// class Card {
//   constructor(dataFront, dataBack, cardId) {
//     this.dataFront = dataFront;
//     this.dataBack = dataBack;
//     this.cardId = cardId;
//   }
// }

// class Deck {
//   constructor(name) {
//     this.deckName = name;
//     this.deckSpace = [];
//     this.box0 = [];
//     this.box1 = [];
//     this.box2 = [];
//     this.box3 = [];
//     this.box4 = [];
//     this.box5 = [];
//     this.box6 = [];
//   }

// let newCard = new Card(dataFront, dataBack, this.deckSpace.length);
// //Adiconar todas as cartas em um so lugar
// if (this.deckSpace.length === 0) {
//   this.deckSpace[0] = newCard;
// } else {
//   this.deckSpace[this.deckSpace.length] = newCard;
// }
// //Adicionar as cartas na box1
// if (this.box0.length === 0) {
//   this.box0[0] = newCard;
// } else {
//   this.box0[this.box0.length] = newCard;
// }
//   removeCard() {}

//   updateCard(cardId) {}
// }

// class Revision {
//   revision() {}
// }
