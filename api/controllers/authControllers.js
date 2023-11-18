const bcrypt = require("bcrypt");
const { sign, verify } = require("jsonwebtoken");
const User = require("../model/User");
const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "al;skjdfal;skjdfalksdjfalksdjf";

//verify jwt token
function getUserDataFromReq(req) {
  return new Promise((resolve, reject) => {
    if (req.cookies && req.cookies.token) {
      verify(req.cookies.token, jwtSecret, {}, async (err, userDataFromReq) => {
        if (err) throw err;
        resolve(userDataFromReq);
      });
    }
  });
}

module.exports.signin_post = async (req, res) => {
  const { email, password } = req.body;
  // console.log({ email, password });
  const userDoc = await User.findOne({ email: email });
  // userDoc is the user document
  res.setHeader("one", "one");
  if (userDoc) {
    // if user exists
    // * check if entered password is right
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      sign(
        { email: userDoc.email, password: userDoc.password }, // use values from DB, we can use _id instead of email values
        jwtSecret,
        {},
        (err, userData) => {
          if (err) throw err;
          res.cookie("token", userData).json(userDoc);
        }
      );
    } else {
      console.error("password wrong");
    }
  }
};

module.exports.signup_post = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const userDoc = await User.create({
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (error) {
    console.log(error);
  }
};

module.exports.profile_get = async (req, res) => {
  const userDataFromReq = await getUserDataFromReq(req);
  const userDoc = await User.findOne({ email: userDataFromReq.email });
  // console.log(userDoc);
  res.json(userDoc);
};

module.exports.logout_post = async (req, res) => {
  res.clearCookie("token").json("Logged out");
};
