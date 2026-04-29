import { Request, Response } from "express";
import Skill from "../models/Skill";


// GET all skills (public)
export const getSkills = async (req: Request, res: Response) => {
  try {
    const skills = await Skill.find().sort({ category: 1 });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


// CREATE skill (admin)
export const createSkill = async (req: Request, res: Response) => {
  try {
    const skill = await Skill.create(req.body);
    res.status(201).json(skill);
  } catch (error: any) {
    console.error("CREATE SKILL ERROR:", error);

    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};


// UPDATE skill (admin)
export const updateSkill = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const updated = await Skill.findByIdAndUpdate(
      id,
      req.body,
      { returnDocument: "after" }
    );

    if (!updated) {
      return res.status(404).json({ message: "Skill not found" });
    }

    return res.json(updated);

  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};


// DELETE skill (admin)
export const deleteSkill = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleted = await Skill.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Skill not found" });
    }

    res.json({
      message: "Skill deleted",
      deleted
    });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};