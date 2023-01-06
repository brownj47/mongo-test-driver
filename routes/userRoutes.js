const router = require("express").Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    createManyUsers
} = require("../controllers/userController.js");

router
    .route("")
    .get(getAllUsers)
    .post(createUser)
    .put((req, res) => res.json({ msg: "get" }))
    .delete((req, res) => res.json({ msg: "delete" }));

router.route("/:userId").get(getUserById);

router.route("bulk-create").post(createManyUsers);

module.exports = router;
