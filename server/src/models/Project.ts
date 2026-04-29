import mongoose from "mongoose";
import { HydratedDocument } from "mongoose";
import slugify from "slugify";

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    longDescription: String,
    coverImage: String,
    images: [String],
    tags: [String],
    techStack: [String],
    liveUrl: String,
    githubUrl: String,
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
    published: { type: Boolean, default: true },
    slug: { type: String, unique: true, required: true }
  },
  { timestamps: true }
);



// Define an interface so TypeScript knows what 'this' is
interface IProject extends mongoose.Document {
  title: string;
  slug: string;
}

ProjectSchema.pre("save", function (this: IProject) {
  if (this.title && !this.slug) {
    this.slug = slugify(this.title, {
      lower: true,
      strict: true
    });
  }
  // Notice: No next() call here!
});

export default mongoose.model("Project", ProjectSchema);