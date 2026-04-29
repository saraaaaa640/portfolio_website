import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    slug: {
      type: String,
      unique: true
    },

    category: {
      type: String,
      required: true,
      enum: ["Frontend", "Backend", "Tools", "Design", "Other"]
    },

    level: {
      type: Number,
      required: true,
      min: 0,
      max: 100
    },

    icon: {
      type: String // icon name or URL
    },

    color: {
      type: String // optional (for UI styling)
    },

    order: {
      type: Number,
      default: 0
    },

    featured: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Skill", SkillSchema);