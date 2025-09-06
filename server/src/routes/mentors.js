// routes/mentorRoutes.js
import { Router } from "express";
import Mentor from "../models/Mentor.js";

const router = Router();

// Get all mentors
router.get("/", async (req, res) => {
  try {
    const mentors = await Mentor.find().sort({ createdAt: -1 });
    res.json({ mentors });
  } catch (err) {
    res.status(500).json({ message: "Error fetching mentors", error: err.message });
  }
});

// Get recent mentors
router.get("/recent", async (req, res) => {
  try {
    const mentors = await Mentor.find({ recent: true }).sort({ createdAt: -1 }).limit(12);
    res.json({ mentors });
  } catch (err) {
    res.status(500).json({ message: "Error fetching recent mentors", error: err.message });
  }
});

export default router;
