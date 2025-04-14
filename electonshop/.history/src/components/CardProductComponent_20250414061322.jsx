import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

function CardProductComponent({ product, activeView }) {
  const isListView = activeView === "ListView";

  return (
    <div
      className={`product-card ${
        isListView
          ? "flex flex-row items-center w-[90%] mx-auto gap-6 p-4 rounded-lg shadow-md bg-white"
          : "flex flex-col items-center gap-2 w-full sm:w-[250px] p-4 rounded-lg shadow-md bg-white"
      }`}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className={`object-contain ${isListView ? "w-24 h-24" : "w-32 h-32"}`}
      />

      {isListView ? (
        // Horizontal layout for ListView
        <>
          <h2 className="text-lg font-semibold w-1/4">{product.title}</h2>

          <div className="flex items-center gap-1 w-1/4">
            <p className="text-gray-700">
              <span className="font-bold text-xl">$</span>{" "}
              <span className="product-price">{product.price}</span>
            </p>
          </div>

          <div className="w-1/4">
            <Rating
              name="half-rating-read"
              value={product.rating}
              precision={0.5}
              readOnly
              className="product-rating"
            />
          </div>

          <Link
            to={`/singleProductPage/${product.id}`}
            className="product-detail-button bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            View Detail
          </Link>
        </>
      ) : (
        // Default GridView layout
        <>
          <h2 className="product-title text-lg font-semibold text-center">
            {product.title}
          </h2>

          <div className="product-price-container flex items-center gap-1">
            <p className="product-price-symbol text-gray-700">
              <span className="font-bold text-xl">$</span>{" "}
              <span className="product-price">{product.price}</span>
            </p>
          </div>

          <Rating
            name="half-rating-read"
            value={product.rating}
            precision={0.5}
            readOnly
            className="product-rating"
          />

          <Link
            to={`/singleProductPage/${product.id}`}
            className="product-detail-button mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            View Detail
          </Link>
        </>
      )}
    </div>
  );
}

export default CardProductComponent;
