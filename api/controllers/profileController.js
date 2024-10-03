const User = require("../model/User");

module.exports.profile_post = async (req, res) => {
  // console.log(req.body);
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    houseNumber,
    street,
    city,
    province,
    postalCode,
    country,
    dob,
  } = req.body;

  const queryData = {
    firstName,
    lastName,
    email,
    phoneNumber,
    address: {
      houseNumber,
      street,
      city,
      province,
      postalCode,
      country,
    },
    dob,
  };
  const userDoc = await User.updateOne({ email: req.body.email }, queryData);
  console.log("====================================");
  console.log(userDoc);
  console.log("====================================");
};
