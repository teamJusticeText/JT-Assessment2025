import { Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();
const DB_FILE = path.join(__dirname, "database.json");

// Ensure database.json exists
if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify({ folders: [], files: [] }, null, 2));
}

// Helper function to read database file
const readDatabase = (): any => {
  const content = fs.readFileSync(DB_FILE, "utf8");
  return JSON.parse(content);
};

// Helper function to write to database file
const writeDatabase = (data: any) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};

// Example route: Get file system
router.get("/filesystem", (_, res) => {
  res.json(readDatabase());
});

// Example route: Create folder
router.post("/folder", (req, res) => {
  const db = readDatabase();
  db.folders.push({ id: Date.now(), name: req.body.name });
  writeDatabase(db);
  res.json({ success: true });
});

export { router };
