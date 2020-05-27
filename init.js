import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import Video from "./models/Video";

const PORT = process.env.PORT || 4000;

const handleListener = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListener);
