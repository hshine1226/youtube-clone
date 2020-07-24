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

![join](https://user-images.githubusercontent.com/31975706/88396245-381bfe00-cdfd-11ea-9ccb-2c5e9572f881.gif)

### 프로필 수정

- Multer middleware를 이용해서 Amazon S3에 아바타 파일 저장

![edit_profile](https://user-images.githubusercontent.com/31975706/88396238-36523a80-cdfd-11ea-8961-e58033d03368.gif)

### 비디오 업로드

- 비디오 녹화 기능
- Multer middleware를 이용해서 Amazon S3에 비디오 파일 저장

![upload_video](https://user-images.githubusercontent.com/31975706/88396254-3a7e5800-cdfd-11ea-91b4-99479b0f7ce6.gif)

### 비디오 수정

![edit_video](https://user-images.githubusercontent.com/31975706/88396240-37836780-cdfd-11ea-805c-98dda4a98521.gif)

### 댓글 추가/삭제

- 실시간 댓글 추가 구현

![add_comment](https://user-images.githubusercontent.com/31975706/88396209-2c303c00-cdfd-11ea-8cc3-412920fe4ed3.gif)

![delete_comment](https://user-images.githubusercontent.com/31975706/88396235-35210d80-cdfd-11ea-8418-40f0108c5863.gif)

### 사용자 디테일

- 사용자 정보 페이지에 해당 사용자가 업로드한 동영상 표시

![profile_detail](https://user-images.githubusercontent.com/31975706/88396247-394d2b00-cdfd-11ea-80b1-7ad3732b2e85.gif)

## 추가해야할 사항

- 업로드 날짜
- 동영상 공유 기능 추가
- 태그 기능 추가
