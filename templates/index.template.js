export const indexTemplate = () =>
  `
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
import { app } from "./app.js";
import connectDB from "./configs/db.config.js";
import detect from "detect-port";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    const realPort = await detect(PORT);

    if (realPort != PORT) {
      console.warn(
        \`Port \${PORT} is already in use, using port \${realPort} instead.\`
      );
    }

    app.listen(realPort, () => {
      console.log(\`⚙️  Server is running on http://localhost:\${realPort}\`);
    });
  } catch (error) {
    console.error("ERROR WHILE DB CONNECTION:", error.message);
  }
};

startServer();
`.trim();
