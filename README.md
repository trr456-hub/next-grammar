Next.js 필기
Next.js 는 pages에 파일명이 url/파일명 으로 들어가게 되고 component 의 이름은 중요하지않음
Export default function Home() 같은경우는 기본페이지 router “/“ 의 역할을 함

React.js CSR : 브라우저가 HTML을 불러올 때 비어있는 div를 가져옴 그 후에 브라우저가 모든 자바스크립트를 요청하여 react.js, 자바스크립트를 실행함 그 다음 유저가 보는 UI 생성

Next.js SSR : pre-render 된 정적 페이지(html로만 구성된 js 작동안함)를 먼저 보여주고 react.js 실행이되면 동적 초기화면 렌더링 완료

Next.js 는 a태그가 아닌 Link를 사용해야 함
Import Link from “next/link” : Next 어플리케이션의 클라이언트 사이드 네비게이션을 제공

Module.css 패턴 사용

Styled jsx 는 컴포넌트 한정으로 작동하는것 다른 컴포넌트 안에서 사용 하더라도 작동안함

Next.js는 App 컴포넌트를 사용하여 페이지를 초기화. 이를 재정의하고 페이지 초기화를 제어할 수 있다.

nextjs는 렌더링할 페이지 컴포넌트를 Component와 Component에서 사용하는 pageProps를 인자로 받는 \_app.js 컴포넌트를 제일 먼저 렌더링 한다.

Layout 패턴에서 컴포넌트에 children을 인자로 받아오면 컴포넌트를 또 다른 컴포넌트 안에 넣을 수 있다.

next.config.js
Next.js에서 커스텀 설정을 하기 위해서는 프로젝트 디렉터리의 루트(package.json 옆)에 next.config.js 또는 next.config.mjs 파일을 만들 수 있습니다. next.config.js는 JSON 파일이 아닌 일반 Node.js 모듈입니다.
Next.js 서버 및 빌드 단계에서 사용되며 브라우저 빌드에는 포함되지 않습니다.
https://nextjs.org/docs/api-reference/next.config.js/introduction

Redirects (URL변경됨)
Redirect을 사용하면 들어오는 request 경로를 다른 destination 경로로 Redirect할 수 있습니다. Redirect을 사용하려면 next.config.js에서 redirects 키를 사용할 수 있습니다.

redirects은 source, destination 및 permanent 속성이 있는 객체를 포함하는 배열을 반환하는 비동기 함수입니다.
source: 들어오는 request 경로 패턴 (request 경로)
destination: 라우팅하려는 경로 (redirect할 경로)
permanent: true인 경우 클라이언트와 search 엔진에 redirect를 영구적으로 cache하도록 지시하는 308 status code를 사용하고, false인 경우 일시적이고 cache되지 않은 307 status code를 사용합니다.
https://nextjs.org/docs/api-reference/next.config.js/redirects

Rewrites (URL변경되지 않음)
Rewrites를 사용하면 들어오는 request 경로를 다른 destination 경로에 매핑할 수 있습니다.
Rewrites은 URL 프록시 역할을 하고 destination 경로를 mask하여 사용자가 사이트에서 위치를 변경하지 않은 것처럼 보이게 합니다. 반대로 redirects은 새 페이지로 reroute되고 URL 변경 사항을 표시합니다.
https://nextjs.org/docs/api-reference/next.config.js/rewrites

Movie Poster Path
https://image.tmdb.org/t/p/w500/${movie.poster_path}

주의! fetch할 때 /api/movies 또는 http://localhost:3000/api/movies 둘 다 가능하지만 http가 아닌 https로 fetch하게 되면 오류가 발생합니다.

\_app.js 에서 매개변수로 받아오는 Components, pageProps 이름 확인 pageProps => PageProps 로 작성하니 props가 전달 안되는 에러 발생했슴
