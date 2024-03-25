import express from "express";
import { createJob, getJobs, getJobById } from "../application/features/jobs";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

const jobsRouter = express.Router();

jobsRouter.route("/").get(getJobs).post(ClerkExpressRequireAuth({}), createJob);
jobsRouter.route("/:id").get(ClerkExpressRequireAuth({}), getJobById);

export default jobsRouter;
