import express from 'express';
const orgRouter = express.Router();

// GET: All departments
orgRouter.get("/departments", (req, res) => {
    console.log("Loading department list...");
    // Logic: SELECT * FROM Department
});

// POST: Add new department
orgRouter.post("/departments", (req, res) => {
    console.log("Creating new department:", req.body.DeptName);
    // Logic: INSERT INTO Department...
});

// GET: All job titles
orgRouter.get("/designations", (req, res) => {
    console.log("Loading designation list...");
    // Logic: SELECT * FROM Designation
});

export default orgRouter;