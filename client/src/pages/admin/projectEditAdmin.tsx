import { FormEvent, ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "../../components/ui";

interface ProjectForm {
  coverImage: string;
  title: string;
  tags: string[];
}

function ArrowLeft({ size }: { size?: number }) {
  return (
    <span
      style={{ display: "inline-block", width: size, height: size }}
      aria-hidden="true"
    />
  );
}

function Upload({ size }: { size?: number }) {
  return (
    <span
      style={{ display: "inline-block", width: size, height: size }}
      aria-hidden="true"
    />
  );
}

function Spinner({ size }: { size?: number }) {
  return (
    <span
      style={{ display: "inline-block", width: size, height: size }}
      aria-hidden="true"
    />
  );
}

function Toggle() {
  return (
    <div className="h-12 rounded-2xl border border-gray-200 bg-gray-50" />
  );
}

const projectData = {
  id: "proj_001",
  title: "Portfolio Platform",
  description: "Modern portfolio with admin dashboard.",
  longDescription:
    "A full-stack portfolio platform built with React, TypeScript, Node.js and MongoDB.",

  coverImage:
    "https://images.unsplash.com/photo-1518770660439-4636190af475",

  liveUrl: "https://myproject.com",
  githubUrl: "https://github.com/sara/project",

  tags: ["Fullstack", "Dashboard", "Portfolio"],
  techStack: ["React", "TypeScript", "Node", "MongoDB"],

  published: true,
  featured: true,
  order: 1,

  createdAt: "2026-04-20",
  updatedAt: "2026-04-20",
};

export default function ProjectEditAdmin() {

    

}