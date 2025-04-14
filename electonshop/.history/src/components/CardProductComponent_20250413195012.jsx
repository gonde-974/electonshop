import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

function CardProductComponent({ product, activeView }) {
  return (
    <div
      className={`product-card transition-all duration-300 ${
        activeView === "list"
          ? "flex flex-row gap-6 p-4 items-center border rounded-xl shadow-md hover:shadow-lg w-full"
          : "flex flex-col border rounded-xl shadow-md hover:shadow-lg p-4 max-w-xs"
      }`}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className={`object-contain ${
          activeView === "list"
            ? "w-40 h-40 rounded-md"
            : "w-full h-48 rounded-md"
        }`}
      />

      <div
        className={`${
          activeView === "list" ? "flex-1" : ""
        } flex flex-col justify-between`}
      >
        <h2 className="product-title text-lg font-semibold mb-2 text-gray-800">
          {product.title}
        </h2>

        <div className="product-price-container mb-2">
          <p className="product-price-symbol text-gray-700">
            <span className="font-bold text-xl">$</span>{" "}
            <span className="product-price text-xl">{product.price}</span>
          </p>
        </div>

        <Rating
          name="half-rating-read"
          value={product.rating}
          precision={0.5}
          readOnly
          className="product-rating mb-2"
        />

        <Link
          to={`/singleProductPage/${product.id}`}
          className="product-detail-button bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-md transition duration-200 mt-auto w-fit"
        >
          View Detail
        </Link>
      </div>
    </div>
  );
}

export default CardProductComponent;
