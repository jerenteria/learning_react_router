// using Link instead of NavLink bc we dont want to highlight those links as being active/non-active bc werea actually leaving the page when we click the links
import { Link } from "react-router-dom";

// this how we would get products from a backend and be able to render them easier on the front end. easier than hard coding
// all the product links one by one
const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

function ProductPage() {
  return (
    <>
      <h1>Second Page</h1>
      <ul>
        <ul>
          {PRODUCTS.map((prod) => (
            <li key={prod.id}>
              <Link to={`/products/${prod.id}`}>{prod.title}</Link>
            </li>
          ))}
        </ul>
      </ul>
    </>
  );
}

export default ProductPage;
