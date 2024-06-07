const validator = require("validator");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: ["First name is required!!"],
      trim: true,
      minlength: 3
    },
    lastName: {
      type: String,
      required: ["Last name is required!"],
      trim: true,
      minlength: 3
    },
    email: {
      type: String,
      required: ["Email address is required!"],
      unique: true,
      trim: true,
      minlength: 3
    },
    password: {
      type: String,
      required: ["Password is required!"],
      trim: true,
      minlength: 3
    }
  },
  {
    timestamps: true
  }
);

// validate user input
function validateUserInput(firstName, lastName, email, password) {
  if (validator.isEmpty(firstName)) {
    throw new Error("First name is required!");
  }
  if (validator.isEmpty(lastName)) {
    throw new Error("Last name is required!");
  }
  if (validator.isEmpty(email)) {
    throw new Error("Email address is required!");
  }
  if (validator.isEmpty(password)) {
    throw new Error("Password is required!");
  }
  if (!validator.isStrongPassword(password)) {
    throw new Error("Password is not strong enough!");
  }
}

// Define the signup method as a static method on the userSchema

userSchema.statics.signup = async function(
  firstName,
  lastName,
  email,
  password
) {
  try {
    validateUserInput(firstName, lastName, email, password);
    const exists = await this.findOne({ email });
    if (exists) {
      throw new Error("Email already exists!");
    }

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    //create a new user
    const user = await this.create({
      firstName,
      lastName,
      email,
      password: hash
    });
    console.log(user);
    return user;
  } catch (error) {
    console.log(error.stack);
    throw error.message;
  }
};

module.exports = mongoose.model("User", userSchema);
