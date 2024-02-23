import { Metadata } from "next";
import Navigation from "../components/navigation";

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
