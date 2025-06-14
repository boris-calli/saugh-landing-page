import fs from "fs-extra";

async function copyAssets() {
  try {
    await fs.copy("./src/assets/icons", "./dist/assets/icons");
    console.log("Icons copied to dist/assets/icons");
  } catch (error) {
    console.error("Error during copy icons:", error);
  }
}

copyAssets();
