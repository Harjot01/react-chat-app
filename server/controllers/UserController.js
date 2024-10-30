import { User } from "../models/UserModel.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";
import { ErrorHandler } from "../middlewares/error.js";
import cloudinary from "../utils/cloudinary.js";
export const registerUser = async (req, res, next) => {
  try {
    const { name, username, email, password } = req.body;

    let user = await User.findOne({ $or: [{ username }, { email }] });

    if (user) {
      return next(new ErrorHandler("User Already Exists", 400));
    }

    const result = await cloudinary.uploader.upload(req.file.path);
    const hashedPassword = await bcrypt.hash(password, 10);

    user = await User.create({
      name,
      username,
      email,
      password: hashedPassword,
      profileImg: result.url,
    });

    sendCookie(user, res, "User Registered Successfully", 201);
  } catch (err) {
    next(err);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { usernameOrEmail, password } = req.body;

    let user = await User.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    }).select("+password");
    if (!user) {
      return next(new ErrorHandler("Invalid Username, Email or Password", 400));
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return next(new ErrorHandler("Invalid Username, Email or Password", 400));
    }

    sendCookie(user, res, "User Logged In Successfully", 200);
  } catch (err) {
    next(err);
  }
};

export const getUserProfile = (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};

export const updateUserProfile = async (req, res, next) => {
  try {
    const { field } = req.params;
    const { value } = req.body;
    const user = await User.findOne({ username: req.user.username });

    user[field] = value;

    await user.save();

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({ username: { $ne: req.user.username } });

    return res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    next(error);
  }
};

export const findUser = async (req, res, next) => {
  try {
    const { username } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return next(new ErrorHandler("Requested username cannot be found", 404));
    }

    console.log(user);
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};

export const logoutUser = (req, res) => {
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      httpOnly: true,
      samesite: "lax",
      secure: false,
    })
    .json({
      success: true,
      message: "User Successfully Logged Out",
    });
};
