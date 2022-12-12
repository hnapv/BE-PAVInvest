const express = require("express");

const router = express.Router();

const ContractController = require("../controllers/ContractController");
const UserController = require("../controllers/UserController")

router.post("/api/contract/createContract",UserController.verifyToken,ContractController.apiCreateContract);
router.get("/api/contract/getContractDetail",ContractController.apigetContractDetailByOrderNo);
router.get("/api/contract/getContractByCustomerID",UserController.verifyToken,ContractController.apigetContractbyCustomerID);



module.exports = router;