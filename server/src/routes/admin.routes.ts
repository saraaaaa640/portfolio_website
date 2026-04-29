import { Router } from "express";
import { protect } from "../middleware/auth.middleware";
import { getDashboardStats } from "../controllers/dashboardstat.controller";


const router = Router();

router.get("/profile", protect, (req, res) => {
  res.json({
    message: "You are inside protected route",
    adminId: (req as any).adminId
  });
});

router.get("/dashboard", protect, getDashboardStats);

export default router;