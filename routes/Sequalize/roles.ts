import express from "express";
import RoleController from "../../controllers/sequalize/roles";

const router = express.Router();

router.get("/getdata", RoleController.getData);  //To get all records
router.post("/createdata", RoleController.createData);  //To create new records
router.put("/updatedata/:roleId", RoleController.updateData);  //To update  records
router.delete("/deletedata/:roleId", RoleController.deleteData);  //To delete all records


module.exports = router;