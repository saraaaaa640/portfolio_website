import mongoose, { HydratedDocument } from "mongoose";
import bcrypt from "bcryptjs";


export interface Admin {
  name: string;
  email: string;
  password: string;
}

type AdminDoc = HydratedDocument<Admin> & {
  comparePassword: (password: string) => Promise<boolean>;
};

const AdminSchema = new mongoose.Schema<AdminDoc>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// hash password
AdminSchema.pre("save", async function () {
  const admin = this as AdminDoc;

  if (!admin.isModified("password")) return;

  admin.password = await bcrypt.hash(admin.password, 10);
});

// compare password method
AdminSchema.methods.comparePassword = async function (
  candidate: string
) {
  return bcrypt.compare(candidate, this.password);
};

export const Admin = mongoose.model<AdminDoc>("Admin", AdminSchema);