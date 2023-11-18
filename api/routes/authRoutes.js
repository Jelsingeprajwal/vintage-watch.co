const router = require("express").Router();

const authControllers = require("../controllers/authControllers");

router.post("/api/signin", authControllers.signin_post);

router.post("/api/signup", authControllers.signup_post);

router.post("/signout", authControllers.logout_post);
router.get("/api/profile", authControllers.profile_get);

module.exports = router;
