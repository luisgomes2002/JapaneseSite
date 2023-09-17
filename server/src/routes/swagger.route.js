import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json" assert { type: "json" };

import { Router } from "express";

const swaggerRouter = Router();

swaggerRouter.use("/", swaggerUi.serve);
swaggerRouter.get("/", swaggerUi.setup(swaggerDocument));

export default swaggerRouter;


// const router = require('express').Router();

// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('../swagger.json');

// router.use('/', swaggerUi.serve);
// router.get('/', swaggerUi.setup(swaggerDocument));

// module.exports = router;