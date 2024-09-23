import { Outlet } from "react-router-dom"; // Outlet components marks the place where the child route elements should be rendered
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
