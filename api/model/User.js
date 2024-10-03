const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "Please enter First Name"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter Last Name"],
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
    unique: [true, "Email already exists"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Minimum password length is 6 characters"],
  },
  //! validate all elements later
  phoneNumber: {
    type: String,
    minlength: [10, "Minimum password length is 10 characters"],
  },
  dob: {
    type: Date,
  },
  address: {
    houseNumber: String,
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
  },

  role: { type: String, enum: ["user", "admin"], default: "user" },
  image: String,
});

const UserModel = model("User", UserSchema);
module.exports = UserModel;
