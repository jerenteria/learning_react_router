import { Outlet } from "react-router-dom"; // Outlet components marks the place where the child route elements should be rendered
import MainNavigation from "../components/MainNavigation";
import classes from "./Root.module.css";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
