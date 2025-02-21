import { useEffect, useState } from "react";
import { getFileSystem, createFolder } from "./api";

function App() {
  const [filesystem, setFilesystem] = useState<any>({ folders: [], files: [] });

  useEffect(() => {
    loadFilesystem();
  }, []);

  const loadFilesystem = async () => {
    const data = await getFileSystem();
    setFilesystem(data);
  };

  const handleCreateFolder = async () => {
    const folderName = prompt("Enter folder name:");
    if (folderName) {
      await createFolder(folderName);
      loadFilesystem();
    }
  };

  return (
    <div>
      <h1>File System</h1>
      <button onClick={handleCreateFolder}>Create Folder</button>
      <ul>
        {filesystem.folders.map((folder: any) => (
          <li key={folder.id}>{folder.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
