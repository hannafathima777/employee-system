import express from 'express';
const empRouter = express.Router();

// GET: List all employees
empRouter.get("/", (req, res) => {
    console.log("Fetching all employee records...");
    // Logic: SELECT * FROM Employee JOIN Department...
});

// GET: Single employee details
empRouter.get("/:id", (req, res) => {
    console.log("Fetching details for EmpID:", req.params.id);
    // Logic: SELECT * FROM Employee WHERE id = ?
});

// POST: Create new employee
empRouter.post("/", (req, res) => {
    console.log("Adding new employee:", req.body.Name);
    // Logic: INSERT INTO Employee...
});

// PUT: Update employee details
empRouter.put("/:id", (req, res) => {
    console.log("Updating EmpID:", req.params.id);
    // Logic: UPDATE Employee SET...
});

// DELETE: Remove employee
empRouter.delete("/:id", (req, res) => {
    console.log("Deleting EmpID:", req.params.id);
    // Logic: DELETE FROM Employee WHERE id = ?
});

export default empRouter;