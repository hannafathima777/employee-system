# Employee System

Monorepo for a simple Employee System with `backend` (Node/Express) and `frontend`.

## Repository structure

- `backend/` — Node.js API (Express). Contains `server.js`, route files, and `package.json`.
- `frontend/` — Frontend application (placeholder).

## Requirements

- Node.js 16+ (or compatible LTS)
- npm or yarn

## Backend — quick start

1. Change into the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Copy environment variables (create a `.env` file):

```text
# Example .env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=username (root)
DB_PASS=yourpassword
DB_NAME=employee_db
# Add other secrets as needed
```

4. Start the server:

```bash
npm start
# or
node server.js
```





