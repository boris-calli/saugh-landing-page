import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

await imagemin(["./src/assets/images/**/*.{jpg,png}"], {
  destination: "./dist/assets/images",
  plugins: [imageminWebp({ quality: 100 })],
});
