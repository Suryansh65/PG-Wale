const express = require("express");
const router = express.Router();
const {getAllUsers} = require("../controllers/admin-controllers");
const {getAllContacts} = require("../controllers/admin-controllers");
const {deleteUserById} = require("../controllers/admin-controllers");
const {getUserById} = require("../controllers/admin-controllers");
const {updateUserById} = require("../controllers/admin-controllers");
const {deleteContactById} = require("../controllers/admin-controllers");
const {getAllHostelsData} = require("../controllers/admin-controllers");
const {deleteHostelById} = require("../controllers/admin-controllers");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");


router.route("/users").get(authMiddleware,adminMiddleware,getAllUsers);
router.route("/contacts").get(authMiddleware,adminMiddleware,getAllContacts);
router.route("/hostels").get(authMiddleware,adminMiddleware,getAllHostelsData);
router.route("/users/:id").get(authMiddleware,adminMiddleware,getUserById);
router.route("/users/delete/:id").delete(authMiddleware,adminMiddleware,deleteUserById);
router.route("/contacts/delete/:id").delete(authMiddleware,adminMiddleware,deleteContactById);
router.route("/hostels/delete/:id").delete(authMiddleware,adminMiddleware,deleteHostelById);
router.route("/users/update/:id").patch(authMiddleware,adminMiddleware,updateUserById);



module.exports = router;