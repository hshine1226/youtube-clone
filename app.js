/* require를 통해 express를 불러온다. node_module/express */
// const express = require("express");
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
// default로 export하지 않았기 때문에 이런식으로 불러온다.
import { userRouter } from "./router";
// app이라는 변수에 express를 실행해서 application을 만든다.
const app = express();

const handleHome = (req, res) => res.send("Hello from my ass");

const handleProfile = (req, res) => res.send("You are on my profile.");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.use("/user", userRouter);

export default app;
