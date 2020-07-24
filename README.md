# BellamyTube

동영상 플랫폼 YouTube를 따라서 만드는 프로젝트

Front-end는 Framework를 사용하지 않고 VanillaJS를 통해서 구현

Back-end는 NodeJS와 MongoDB를 통해서 구현

Full-stack 개발 경험을 목표로 CRUD의 모든 기능을 구현하는 것을 목표로 합니다.

## 기능

- 회원가입
- 로그인/로그아웃
- 소셜 로그인(Github, Facebook, Google)
- 비밀번호 변경
- 동영상 업데이트/수정/삭제
- 동영상 검색
- 댓글 추가/삭제
- 프로필 수정

## 개발 기간

2020년 05월 ~ 2020년 07월

## 사용기술

### Front-end

- Javascript ES6
- CSS(SCSS)
- Pug

### Back-end

- NodeJS
- Express
- MongoDB
- Mongoose
- Passport
- Amazon S3

## 구현 화면

### 회원가입

- MongoDB, Passport를 통해 회원가입을 구현
- 이메일 중복 확인 기능

![join](/home/junhyuk/사진/bellamyTube/join.gif)

### 프로필 수정

- Multer middleware를 이용해서 Amazon S3에 아바타 파일 저장

![edit_profile](/home/junhyuk/사진/bellamyTube/edit_profile.gif)

### 비디오 업로드

- 비디오 녹화 기능
- Multer middleware를 이용해서 Amazon S3에 비디오 파일 저장

![upload_video](/home/junhyuk/사진/bellamyTube/upload_video.gif)

### 비디오 수정

![edit_video](/home/junhyuk/사진/bellamyTube/edit_video.gif)

### 댓글 추가/삭제

- 실시간 댓글 추가 구현

![add_comment](/home/junhyuk/사진/bellamyTube/add_comment.gif)

![delete_comment](/home/junhyuk/사진/bellamyTube/delete_comment.gif)

### 사용자 디테일

- 사용자 정보 페이지에 해당 사용자가 업로드한 동영상 표시

![profile_detail](/home/junhyuk/사진/bellamyTube/profile_detail.gif)

## 추가해야할 사항

- 댓글 삭제 아이콘 본인만 뜨게 수정하기
- 업로드 날짜
- 글씨크기 약간 줄이기
- 동영상 재생 길이
- 동영상 공유 기능 추가
- 태그 기능 추가
