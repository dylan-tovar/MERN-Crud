import express, { json } from "express";
import cors from "cors";
import { PORT } from "./config.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());

app.use(indexRoutes);
app.use(taskRoutes);

app.use(express.static(join(__dirname, "../frontend/dist")));

app.listen(PORT, () => {
  console.log(`Server run in PORT ${PORT}`);
});
