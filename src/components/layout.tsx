import Background from "./background";
import NavBar from "./navbar";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Background />
      <NavBar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
