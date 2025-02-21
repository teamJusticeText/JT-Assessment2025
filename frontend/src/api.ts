import axios from "axios";

export const getFileSystem = async () => {
  const response = await axios.get("/api/filesystem");
  return response.data;
};

export const createFolder = async (name: string) => {
  await axios.post("/api/folder", { name });
};
