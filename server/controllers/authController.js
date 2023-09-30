const User = require("../models/user");

const signin = async (req, res) => {
  const { username, password } = req.body.data;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Create a new user
    const newUser = new User({
      username,
      password,
    });

    // Save the user to the database
    await newUser.save();

    // Send a success response
    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during user registration:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  signin,
};
