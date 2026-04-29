import api from './../api';

// import type { Project, BlogPost, Skill, Message, PaginatedPosts } from '../types';

export const getProjects = async () => {
  const res = await api.get('/projects');
  return res.data;
};

export const getProjectBySlug = async (slug: string) => {
  const res = await api.get(`/projects/${slug}`);
  return res.data;
};