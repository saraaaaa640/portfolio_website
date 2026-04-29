import Message from "../models/Message";
import Project from "../models/Project";
import Skill from "../models/Skill";

import { Request, Response } from "express";

type DashboardResponse = {
  totalUsers: number;
  totalMessages: number;
};

export const getDashboardStats = async (
  req: Request,
  res: Response<DashboardResponse>
) => {
  res.json({
    totalUsers: 10,
    totalMessages: 5,
  });
};