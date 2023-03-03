import express from "express";
import RoleController from "../../controllers/InlineQuery/roles";

const router = express.Router();

router.get("/SyncRole", RoleController.getRoles);  //To get roles
router.get("/roles/:roleId", RoleController.getRoleOnRoleID); //To get specific role


module.exports = router;