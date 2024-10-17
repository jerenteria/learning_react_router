import { Link, useNavigate } from "react-router-dom"; // Link allows to to navigate through diff pages without refreshing whole application(would take too long)
import MainNavigation from "../components/MainNavigation";

function HomePage() {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate('/products')
    };

  return (
    <>
      <h1>Hello</h1>
      <p>
        Go to <Link to="/products">products</Link>
      </p>
      <p><button onClick={navigateHandler}>navigate</button></p>
    </>
  );
}

export default HomePage;
