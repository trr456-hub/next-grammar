import { Metadata } from "next";
import Navigation from "../components/navigation";
import "../styles/global.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Home",
  },
  description: "Next 로 만드는 영화 웹 어플리케이션",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

// 페이지를 렌더링 하면 children props에 컴포넌트가 생성됨
// layout 은 경로에도 생성할 수 있으며 그 경로에만 표시된다.
// layout은 상쇄되는게 아닌 중첩된다.
// (폴더명) 이렇게 폴더를 구성 해준다면 URL에 영향을 받지않음
// metadata 페이지 마다 템플릿을 만들어줄 수 있다.
// 동적 routing 은 [폴더명] 으로 변수를 전달해준다

// 서버컴포넌트로 api 를 불러오게 된면 사용자에게 전달되지않지만 서버에서 api 를 불러와야 하기때문에 느림

// Loading UI and Streaming

// 특수 파일 loading.js는 React Suspense를 사용하여 의미 있는 로딩 UI를 만드는 데 도움이 됩니다.
// 이 규칙을 사용하면 route 세그먼트의 콘텐츠가 로드되는 동안 서버에서 즉시 로딩 상태를 표시할 수 있습니다. 렌더링이 완료되면 새 콘텐츠가 자동으로 교체됩니다.
// 즉시 로딩 상태는 탐색 시 즉시 표시되는 대체 UI입니다. 스켈레톤, 스피너 등 로딩 표시기나 표지 사진, 제목 등 미래 화면의 작지만 의미 있는 부분을 미리 렌더링할 수 있습니다.
