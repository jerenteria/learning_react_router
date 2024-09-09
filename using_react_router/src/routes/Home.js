import { Link } from "react-router-dom"; // Link allows to to navigate through diff pages without refreshing whole application(would take too long)
import MainNavigation from "../components/MainNavigation";

function HomePage() {
  return (
    <>
      <h1>Hello</h1>
      <p>
        Go to <Link to="/products">products</Link>
      </p>
    </>
  );
}

export default HomePage;
