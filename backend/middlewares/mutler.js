// import multer from "multer";

// const storage = multer.memoryStorage();
// export const singleUpload = multer({storage}).single("file");

import multer from "multer";

const storage = multer.memoryStorage(); // Store file in memory as Buffer
export const singleUpload = multer({ storage }).single("file"); // Changed "profileImage" to "file"
