import express  from "express";
import morgan from "morgan";
//routes
import languagesRoutes from "./routes/language.routes";

const app = express()

//setting
app.set("port", 4000);

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/languages", languagesRoutes);

export default app;