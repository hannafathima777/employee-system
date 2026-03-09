import express from 'express';
import dotenv from 'dotenv';
import db from './db.js';
import cors from 'cors'

import authRoutes from './routes/authRoutes.js';
import employeeRoutes from './routes/employeeRoutes.js';
import payrollRoutes from './routes/payRollRoutes.js';
import orgRoutes from './routes/orgRoutes.js';

dotenv.config()


const port = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Hello')
})

// Mount Authentication routes (Login/Logout)
app.use('/api/auth', authRoutes);

// Mount Employee CRUD routes
app.use('/api/employees', employeeRoutes);

// Mount Organization routes (Depts/Designations)
app.use('/api/org', orgRoutes);

// Mount Payroll and Attendance routes
app.use('/api/payroll', payrollRoutes);
app.get('/test', async (req,res)=>{
    try {
        const [rows] = await db.query('SELECT 1 + 1 AS result');
        res.json({ message: "Database is alive!", data: rows });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

app.listen(port, ()=>{
    console.log('Server running in http://localhost:3000/')
    
})

