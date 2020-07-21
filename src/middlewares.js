import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import path from "path";
import routes from "./routes";

const s3 = new aws.S3({
  secretAccessKey: process.env.AWS_SECRET_KEY,
  accessKeyId: process.env.AWS_KEY,
  region: "ap-northeast-2",
});

// multer를 이용해서 file 저장 주소 지정
// const multerVideo = multer({ dest: "uploads/videos/" });
// Add key for iphone
const multerVideo = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "youtube-clone-jh/video",
    key: function (req, file, cb) {
      let extension = path.extname(file.originalname);
      cb(null, Date.now().toString() + extension);
    },
  }),
});
const multerAvatar = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "youtube-clone-jh/avatar",
  }),
});

// 오직 하나의 파일만 업로드 하도록 설정(single(filedname))
export const uploadVideo = multerVideo.single("videoFile");
export const uploadAvatar = multerAvatar.single("avatar");

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "BellamyTube";
  res.locals.routes = routes;
  // db 생기기 전까지 쓰일 가짜 정보
  res.locals.loggedUser = req.user || null;
  // console.log(res.locals.loggedUser);
  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};
