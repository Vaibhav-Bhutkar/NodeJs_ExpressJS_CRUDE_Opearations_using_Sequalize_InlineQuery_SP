import express from "express";
import RoleController from "../../controllers/storedprocedures/role";

const router = express.Router();

router.get("/getdata", RoleController.getRoles);  //To get all records
router.put("/updatedata", RoleController.updateRole);  //To update existing records



module.exports = router;