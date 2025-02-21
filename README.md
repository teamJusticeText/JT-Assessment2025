# Running the Project

## **Installation**

To install all dependencies for both frontend and backend, run:

```sh
npm run install-all
```

## **Starting the Project**

To start both the **frontend and backend** with hot reload:

```sh
npm run dev
```

This runs both services concurrently:

- **Backend:** http://localhost:5001
- **Frontend:** http://localhost:5173 (with backend proxied for API calls)

## **Development Notes**

- Hot reload is enabled for both frontend and backend.
- **Modifications to `database.json` will not trigger a server restart.**
- API calls are proxied through Vite (`/api` → `http://localhost:5001/api`).

## **Ignoring Files from Hot Reload**

To prevent specific files from triggering a restart when modified:

1. **For the Backend (`nodemon`)**

   - Open `nodemon.json` (or create one in the backend root directory if it doesn't exist).
   - Add the file or directory to the `ignore` array.
   - Example:
     ```json
     {
       "watch": ["src"],
       "ext": "ts",
       "ignore": ["src/database.json", "src/logs/*"]
     }
     ```

2. **For the Frontend (`Vite`)**

   - Open `vite.config.ts`.
   - Modify the `server.watch` option to exclude specific files.
   - Example:

     ```ts
     import { defineConfig } from "vite";
     import react from "@vitejs/plugin-react";

     export default defineConfig({
       plugins: [react()],
       server: {
         watch: {
           ignored: ["**/database.json", "**/logs/*"],
         },
       },
     });
     ```

## **Troubleshooting**

If you encounter issues:

- Ensure all dependencies are installed (`npm run install-all`).
- Check if another process is using ports 5001 or 5173.
- Restart the project (`Ctrl + C` and `npm run dev`).

## **Other Notes**

- This repository is designed to be run locally for development purposes.
- Ensure Node.js and npm are installed before running commands.
- If working in a team, use version control best practices.

Happy coding! 🚀 test
