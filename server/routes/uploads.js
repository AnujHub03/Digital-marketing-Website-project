import express        from "express";
import multer         from "multer";
import streamifier    from "streamifier";
import cloudinary     from "../config/cloudinary.js";

const router  = express.Router();

// multer: keep file in memory (no disk writes)
const upload  = multer({ storage: multer.memoryStorage() });

// ── helpers ───────────────────────────────────────────────────────────────────

/** Upload a Node.js Buffer to Cloudinary via a readable stream. */
function uploadBuffer(buffer, folder) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: folder || "webtech", resource_type: "auto" },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    streamifier.createReadStream(buffer).pipe(stream);
  });
}

/** Upload a base64 data-URI string directly to Cloudinary. */
function uploadBase64(dataUri, folder) {
  return cloudinary.uploader.upload(dataUri, {
    folder:        folder || "webtech",
    resource_type: "auto",
  });
}
