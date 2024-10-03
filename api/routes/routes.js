const router = require("express").Router();

const controller = require('../controllers/profileController')

router.post('/profile', controller.profile_post)

module.exports = router;
