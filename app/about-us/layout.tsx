export const metadata = {
  title: "About-Us",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <div>
        {children}
        &copy;
      </div>
    </html>
  );
}

// 페이지를 렌더링 하면 children props에 컴포넌트가 생성됨
