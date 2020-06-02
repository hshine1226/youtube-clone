// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users
const USERS = "/users";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const USER_DETAIL = "/:id";

// Videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
// 만약 Controller에서 어떤 Data를 가지고 있다는 것을 표현하고 싶다면, 더블콜론(:)과 이름을 넣으면 된다.
// req.params으로 확인해봤을 때 아래에서 설정한 이름이 뜨는 것을 볼 수 있다.
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

// Router Object
const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: (id) => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: (id) => {
    if (id) {
      return `/videos/${id}`;
    } else {
      return VIDEO_DETAIL;
    }
  },
  editVideo: (id) => {
    if (id) {
      return `/videos/${id}/edit`;
    } else {
      return EDIT_VIDEO;
    }
  },

  deleteVideo: DELETE_VIDEO,
};

export default routes;
