import { Request, Response } from "express";
import Message from "../models/Message";


// POST new message
export const createMessage = async (req: Request, res: Response) => {
  console.log("⚙️ Controller: createMessage");

  try {
    console.log("📨 Data received:", req.body);

    const newMessage = await Message.create(req.body);

    console.log("💾 Saved to DB:", newMessage);

    res.status(201).json(newMessage);
  } catch (error) {
    console.error("❌ Controller error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


// GET all messages (admin only)
export const getMessages = async (req: Request, res: Response) => {
  try {

    const messages = await Message.find().sort({ createdAt: -1 });

    res.json(messages);

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


// GET single message
export const getMessageById = async (req: Request, res: Response) => {
  try {

    const { id } = req.params;

    const message = await Message.findById(id);

    if (!message) {
      return res.status(404).json({
        message: "Message not found"
      });
    }

    res.json(message);

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


// DELETE message
export const deleteMessage = async (req: Request, res: Response) => {
  try {

    const { id } = req.params;

    const deleted = await Message.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        message: "Message not found"
      });
    }

    res.json({
      message: "Message deleted",
      deleted
    });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};