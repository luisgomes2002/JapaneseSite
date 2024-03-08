import flashcardController from "../flashCards/flashcard.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import { validId } from "../middlewares/global.middleware.js";

import { Router } from "express";

const cardsRouter = Router();

cardsRouter.use(authMiddleware);
cardsRouter.use(validId);
cardsRouter.post("/createDeck", flashcardController.createDeckController);
cardsRouter.post("/createCard", flashcardController.createCardController);
// cardsRouter.post("/removeCard", flashCardsLogic.createCard);
// cardsRouter.post("/updateCard", flashCardsLogic.createCard);

export default cardsRouter;
