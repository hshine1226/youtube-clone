import routes from "./routes";

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
