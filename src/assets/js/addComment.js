import axios from "axios";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");
const avartar = addCommentForm.querySelector(".u-avatar");
const avatarUrl = avartar.getAttribute("src");

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};
const addComment = (comment, commentId) => {
  const div = document.createElement("div");
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("span");
  const img = document.createElement("img");
  img.className = "u-avatar";
  img.src = avatarUrl;
  div.className = "video__comments-list-container";
  delBtn.id = commentId;
  delBtn.classList.add("fas");
  delBtn.classList.add("fa-trash-alt");
  span.innerHTML = comment;
  li.appendChild(span);
  div.appendChild(img);
  div.appendChild(li);
  div.appendChild(delBtn);

  commentList.prepend(div);
  increaseNumber();
};

const sendComment = async (comment) => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment,
    },
  });
  // status code가 성공적(200)일때만 comment(실시간인척하는)를 추가한다.
  if (response.status === 200) {
    const commentId = response.data;
    addComment(comment, commentId);
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};
function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
}

if (addCommentForm) {
  init();
}
