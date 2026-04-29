import { Router } from "express";
import { protect } from "../middleware/auth.middleware";
import { getMessages, getMessageById, deleteMessage, createMessage } from "../controllers/message.controller";


const router = Router(); 
// PUBLIC (contact form)
//router.post("/", createMessage);

router.post("/", (req, res, next) => {
  console.log("📍 Route: /api/messages hit");
  next();
}, createMessage);





// ADMIN ONLY
router.get("/", protect, getMessages);

router.get("/:id", protect, getMessageById);

router.delete("/:id", protect, deleteMessage);

export default router;