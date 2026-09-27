import express        from "express";
import multer         from "multer";
import streamifier    from "streamifier";
import cloudinary     from "../config/cloudinary.js";

const router  = express.Router();

// multer: keep file in memory (no disk writes)
const upload  = multer({ storage: multer.memoryStorage() });
