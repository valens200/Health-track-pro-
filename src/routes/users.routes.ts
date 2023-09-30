const express = require("express");
const router = express.Router();
import * as usersControllers from "../controllers/users.controller";

router.get("/", usersControllers.createUser);

module.exports = router;
