// routes/testimonials.routes.js
import express from "express";
const router  = express.Router();
import Testimonial from '../models/Testimonial.js'

// ── GET /api/testimonials ─────────────────────────────────────────────────
// Public: returns only active testimonials (sorted by order asc)
// Admin:  pass ?all=true to get every record regardless of isActive
router.get("/", async (req, res) => {
  try {
    const filter = req.query.all === "true" ? {} : { isActive: true };
    const testimonials = await Testimonial.find(filter).sort({ order: 1, createdAt: -1 });
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});