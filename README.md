# 💻 NEXT.JS 13 => 14 리빌딩

## next js 14 세팅방법

- 빈 프로젝트 생성한뒤 npm init -y
- 터미널에서 npm i react@latest next@latest react-dom@latest 명령어 사용하여 패키지 설치
- package.json 에서 script 설정에 "dev": "next dev" 추가

## typescript 추가 세팅방법

- touch tsconfig.json 생성
- npm run dev 한 다음 typescript 세팅
- npm install --save-dev @types/react @types/node 라이브러리 설치
- npm run dev 프로젝트 잘 실행되나 확인

### 'React'은(는) UMD 전역을 참조하지만 현재 파일은 모듈입니다. 대신 가져오기를 추가해 보세요

- 이런 경고가 생성됐다.
- react17이상부터는 new JSX transform 지원해서
- import React from 'react' 를 컴포넌트마다 작성하지 않아도 되는데 번거로워서 고치기로함
- tsconfig에 jsx 를 "react-jsx" 로 변경하고 vscode 를 재실행 해주니 해결됨

## AppRouting

- router 처리를 할때 폴더명으로 경로를 잡아줄 수 있음 ex) about/ttss/sale/page.tsx
  이런식으로 폴더안에 컴포넌트명은 page.tsx 로 통일해줘도 상관없음(폴더는 실제페이지가 아니고 경로일 뿐임)

### next-rendering

- next.js가 react component를 가져와서 브라우저가 이해할 수 있는 html로 변환

### rendering

- js function 을 가져와서 브라우저가 이해할 수 있는 html로 변환하는 작업

## 하이드레이션(Hydration)이란?

- 서버사이드 렌더링(SSR)을 통해 만들어 진 인터랙티브 하지 않는 HTML을 클라이언트 측 자바스크립트를 사용하여 인터랙티브한 리액트 컴포넌트로 변환하는 과정을 말한다.
  (서버 환경에서 이미 렌더링된 HTML에 React를 붙이는 것)

## Layout

- 페이지를 렌더링 하면 children props에 컴포넌트가 생성됨
- layout 은 경로에도 생성할 수 있으며 그 경로에만 표시된다.
- layout은 상쇄되는게 아닌 중첩된다.
- (폴더명) 이렇게 폴더를 구성 해준다면 URL에 영향을 받지않음
- metadata 페이지 마다 템플릿을 만들어줄 수 있다.
- 동적 routing 은 [폴더명] 으로 변수를 전달해준다

## ServerComponents

- 서버컴포넌트로 api 를 불러오게 된면 사용자에게 전달되지않지만 서버에서 api 를 불러와야 하기때문에 느림

## Loading UI and Streaming

- 특수 파일 loading.js는 React Suspense를 사용하여 의미 있는 로딩 UI를 만드는 데 도움이 됩니다.
  이 규칙을 사용하면 route 세그먼트의 콘텐츠가 로드되는 동안 서버에서 즉시 로딩 상태를 표시할 수 있습니다. 렌더링이 완료되면 새 콘텐츠가 자동으로 교체됩니다.
  즉시 로딩 상태는 탐색 시 즉시 표시되는 대체 UI입니다. 스켈레톤, 스피너 등 로딩 표시기나 표지 사진, 제목 등 미래 화면의 작지만 의미 있는 부분을 미리 렌더링할 수 있습니다.

## Promise.all()

- 메서드는 순회 가능한 객체에 주어진 모든 프로미스가 이행한 후, 혹은 프로미스가 주어지지 않았을 때 이행하는 Promise를 반환합니다.
  일반적으로 다음 코드를 계속 실행하기 전에 서로 연관된 비동기 작업 여러 개가 모두 이행되어야 하는 경우에 사용됩니다.
  입력 값으로 들어온 프로미스 중 하나라도 거부 당하면 Promise.all()은 즉시 거부합니다.

## Suspense Module

- Suspense 모듈을 사용하여 fetch 를 병렬로 불러올 수 있음 각각의 데이터를 개별로 로딩 가능

- css-module 을 사용하여 css객체를 js처럼 사용할 수 있으며 클래스명을 자동지정 가능

## generateMetadata

- 메타데이터 객체(metadata) 및 generateMetadata 함수 export는 서버 컴포넌트에서만 지원됩니다.
  동일한 경로에서 메타데이터 객체와 generateMetadata 함수를 모두 export 할 수는 없습니다. (둘 중 하나만 사용 가능)
  https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function

## Link Props (prefetch)

- prefecth은 Link 컴포넌트가 사용자의 뷰포트에 들어갈 때(초기 또는 스크롤을 통해) 발생합니다.
  Next.js는 연결된 경로(href로 표시됨)와 데이터를 백그라운드에서 prefetch 및 load하여 클라이언트 측 네비게이션 성능을 향상시킵니다.
  prefecth는 프로덕션에서만 활성화됩니다. (기본값 true)
  https://nextjs.org/docs/pages/api-reference/components/link#prefetch
