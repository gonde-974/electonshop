import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

function CardProductComponent({ product, activeView }) {
  const isListView = activeView === "ListView";

  return (
    <div
      className={`w-full max-w-4xl mx-auto p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300
        ${isListView ? "flex flex-col md:flex-row items-center gap-4" : "flex flex-col items-center"}
      `}
    >
      {/* Image Container with optional overlay */}
      <div className="relative w-full md:w-1/3">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="rounded-md object-cover w-full h-48 md:h-32"
        />
        {/* За overlay ефект, можеш да го откоментираш долниот ред */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-25 rounded-md"></div> */}
      </div>

      {/* Product Details */}
      <div
        className={`w-full ${
          isListView
            ? "flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            : "flex flex-col items-center mt-4 gap-2"
        }`}
      >
        <h2 className="text-lg font-medium text-gray-800 text-center md:text-left">{product.title}</h2>

        <div className="text-gray-700 text-base">
          <span className="font-semibold text-lg">$</span>
          <span className="ml-1">{product.price}</span>
        </div>

        <Rating
          name="half-rating-read"
          value={product.rating}
          precision={0.5}
          readOnly
        />

        <Link
          to={`/singleProductPage/${product.id}`}
          className="inline-block px-5 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          View Detail
        </Link>
      </div>
    </div>
  );
}

export default CardProductComponent;
