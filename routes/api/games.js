const express = require('express');
const router = express.Router();
const controller = require('../../controllers/games_controller');

router.get("/:league", controller.getHandler);

module.exports = router;
