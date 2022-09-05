# 🌳 프루떼-오늘도프룻해!

## 목차

- [1. 프로젝트 Config](#1-프로젝트-config)
  - 데모페이지
  - 코딩컨벤션
  - 프루떼 ui/ux 피그마
  - 팀원 소개
- [2. 설치, 환경설정, 실행방법](#2-설치-환경설정-실행방법)
  - 설치, 환경 설정
  - 실행
- [3. 구현된 기능 목록](#3-구현된-기능-목록)
  - 사용자 기능
  - 관리자 기능
- [4. 사용한 프레임워크및 라이브러리](#4-사용한-프레임워크및-라이브러리)
- [5. 폴더 구조](#5-폴더-구조)
  - 폴더 구조 설명
  - 폴더 구조 tree

## 1. 프로젝트 Config

- #### 데모페이지 url이 들어갈 자리입니다. (저희는 vercel로 했습니다. 블라블라)

- #### [저희팀 코딩 컨벤션 노션주소입니다!](https://instinctive-moustache-aba.notion.site/WPO-FE-6-1-Coding-Convention-6a0123a0196343ea88c8434a3c157812#d00f53fad5c545a4b1e2aba7f6c62f31)

- #### [프루떼 ui/ux 피그마 주소입니다!](https://www.figma.com/file/VubIREYwLrHzUUqH4kiggS/preOnBoarding-team1?node-id=0%3A1)

| 강민규   | 백승전        | 류웅선  | 윤여건    | 김정수  | 최홍규     |
| -------- | ------------- | ------- | --------- | ------- | ---------- |
| kagrin97 | BaikSeungJeon | unsnruu | kunnyCode | sunpl13 | gomgun-lab |

## 2. 설치, 환경설정, 실행방법

- ### 설치, 환경 설정

  ```bash
  > git clone https://github.com/wanted-fe-6/wanted-pre-onboarding-fe-6-1-2.git

  > npm install
  ```

- ### 실행

  ```bash
  > npm run start // 프로젝트가 실행됩니다.
  ```

## 3. 구현된 기능 목록

- ### 사용자 기능

  ***

  - [x] 스토어 상품목록 조회(30개 이상의 상품목록, 10개 단위의 페이지네이션, 인피니트 스크롤 X)

  - [x] 스토어 상품 상세조회(이미지, 상품 옵션, 수량, 가격 등)
    - 상품 상세 페이지는 단순 퍼블리싱 영역이므로 제외
  - [x] 스토어 상품 주문(상품 선택, 수량, 배송주소, 연락처 등)
    - 결제 기능은 미포함
  - [x] 스토어 상품 주문 내역확인 (주문 번호, 상품명, 주문 수량, 주문 옵션)

- ### 관리자 기능

  ***

  - [x] 스토어 상품목록 등록 페이지(이미지, 상품 옵션, 수량, 가격 등)

  - [x] 스토어 상품목록 관리 페이지
    - 상품 삭제 기능
    - 상품 노출 여부 조정 기능(상품은 유지되어 있되, 노출 여부를 수정하는 기능)

## 4. 사용한 프레임워크및 라이브러리

- ### axios

  설명칸

- ### msw
  설명칸
- ### @emotion
  emotion은 keyframe을 제공합니다. 따라서 모바일 화면에 대응하기 용이할 것 같다는 이유로 선정하였습니다.

## 5. 폴더 구조

- ### 폴더 구조 설명

  | 폴더           | 용도   |
  | -------------- | ------ |
  | **assets/svg** | 설명칸 |
  | **components** | 설명칸 |
  | **hooks**      | 설명칸 |
  | **mocks**      | 설명칸 |
  | **pages**      | 설명칸 |
  | **styles**     | 설명칸 |
  | **utils**      | 설명칸 |

<details>
<summary>🎄 폴더 tree 접기/펼치기</summary>
<pre>
├── App.js
├── assets
│   └── svg
│       ├── icon-arrow-left.svg
│       ├── icon-arrow-right.svg
│       ├── icon-check.svg
│       ├── icon-trashcan.svg
│       └── icon-x.svg
├── components
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── TestMocking.jsx
│   ├── admin
│   │   ├── Pagination.jsx
│   │   ├── ProductItem.jsx
│   │   ├── ProductList.jsx
│   │   └── TopBar.jsx
│   ├── common
│   │   └── Button.jsx
│   ├── detail
│   │   ├── DetailInfo.jsx
│   │   └── DetailMain.jsx
│   ├── list
│   │   ├── Chip.jsx
│   │   └── ProductCard.jsx
│   ├── order
│   │   ├── OrderInfo.jsx
│   │   ├── OrderInput.jsx
│   │   └── PaymentSummary.jsx
│   └── orderDetails
│       ├── FinalPaymentSummary.jsx
│       └── OrderDetailsInfo.jsx
├── hooks
│   ├── usePageList.js
│   ├── useProductItem.js
│   └── useProductList.js
├── index.css
├── index.js
├── mocks
│   ├── browser.js
│   ├── db.js
│   └── handler.js
├── pages
│   ├── Admin
│   │   └── Admin.jsx
│   └── Product
│       ├── Detail.jsx
│       ├── List.jsx
│       ├── Order.jsx
│       └── OrderDetails.jsx
├── setupTests.js
├── styles
│   ├── common.js
│   └── reset.jsx
└── utils
    ├── OrderNums.js
    ├── background.js
    └── priceSetting.js
</pre>
</details>
