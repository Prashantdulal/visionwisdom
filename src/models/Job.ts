import mongoose from "mongoose";

export interface Jobs {
  _id: string;
  featuredImage: string;
  title: string;
  time: string;
  skillset: string;
  companyname:string;
  country:string;
  salary:string,
  gender:string,
  content: string;
  createdAt: string;
  updatedAt: string;
}

const JobSchema = new mongoose.Schema<Jobs>(
  {
    featuredImage: { type: String, required: true },
    title: { type: String, required: true },
    skillset: { type: String, required: true },
   companyname:{type:String,required:true},
   country:{type:String, required:true},
   time:{type:String, required:true},
    content: { type: String, required: true },
    gender:{type:String},
    salary:{type:String}
  },
  {
    timestamps: true,
  }
);

const Job =
  mongoose.models.Job || mongoose.model<Jobs>("Job", JobSchema);
export default Job;
