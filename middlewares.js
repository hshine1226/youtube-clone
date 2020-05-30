import multer from "multer";
import routes from "./routes";

// multer를 이용해서 file 저장 주소 지정
const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "YouTube";
  res.locals.routes = routes;
  // db 생기기 전까지 쓰일 가짜 정보
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};

// 오직 하나의 파일만 업로드 하도록 설정(single(filedname))
export const uploadVideo = multerVideo.single("videoFile");
