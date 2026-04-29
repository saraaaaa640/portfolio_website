// CRUD operations for projects
   //what happens when API is called? 
   
import { Request, Response } from "express";
import Project from "../models/Project";
import slugify from "slugify";


// GET all published projects
export const getProjects = async (req: Request,res: Response) => {
    try {   
        const projects = await Project.find({published:true}).sort({order:1});
        res.json(projects);
    }
    catch(error){
        res.status(500).json({message:"Server error"});
    }

};
// GET project by id



export const getProjectById = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const project = await Project.findOne({ slug });
    if (!project) {return res.status(404).json({message: "Project not found"});}
    res.json(project);
  } catch (error) {
    res.status(500).json({message: "Server error"});
  }
};



//****/ADMIN

// CREATE project
export const createProject = async (req: Request, res: Response) => {
  try {

    const project = await Project.create(req.body);

    res.status(201).json(project);

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};

// UPDATE project
export const updateProject = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    if (req.body.title) {req.body.slug = slugify(req.body.title, {lower: true,strict: true});}
    const updated = await Project.findOneAndUpdate({ slug },req.body,{ new: true });
    if (!updated) {return res.status(404).json({message: "Project not found"});}
    res.json(updated);
  } catch (error) {
    res.status(500).json({message: "Server error"});
  }
};

// DELETE project
export const deleteProject = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const deleted = await Project.findOneAndDelete({ slug });
    if (!deleted) {return res.status(404).json({message: "Project not found"});}
    res.json({message: "Project deleted",deleted});
  } catch (error) {
    res.status(500).json({message: "Server error"});
  }
};

