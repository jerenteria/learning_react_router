import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams(); // js object contains every dynamic path segment we defined in our route definition as a property
  

  return (
    <>
      <h1>Product Details!</h1>
      {/* productId is the identifier of the object in path in App.js */}
      <p>{params.productId}</p>
    </>
  );
}

export default ProductDetailPage;
