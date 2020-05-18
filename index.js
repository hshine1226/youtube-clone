/* require를 통해 express를 불러온다. node_module/express */
const express = require("express");
// app이라는 변수에 express를 실행해서 application을 만든다.
const app = express();

const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome() {
  console.log("Hi from home~!");
}
app.get("/", handleHome);
app.listen(PORT, handleListening);
