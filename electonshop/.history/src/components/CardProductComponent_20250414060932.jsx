import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

function CardProductComponent({ product, activeView }) {
  const isListView = activeView === "ListView";

  return (
    <div
      className={`${
        isListView
          ? "flex flex-row items-center w-[90%] mx-auto gap-4 p-4 rounded-lg shadow-md bg-white"
          : "flex flex-col items-center gap-2 w-full sm:w-[250px] p-4 rounded-lg shadow-md bg-white"
      }`}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className={`${isListView ? "w-28 h-28" : "w-32 h-32"} object-contain`}
      />

      <div
        className={`${
          isListView
            ? "flex flex-col justify-between h-full w-full"
            : "flex flex-col items-center text-center"
        }`}
      >
        <h2
          className={`text-lg font-semibold ${
            isListView ? "text-left" : "text-center"
          }`}
        >
          {product.title}
        </h2>

        <div
          className={`flex items-center gap-1 ${
            isListView ? "text-left" : "text-center"
          }`}
        >
          <p className="text-gray-700">
            <span className="font-bold text-xl">$</span>{" "}
            <span className="product-price">{product.price}</span>
          </p>
        </div>

        <Rating
          name="half-rating-read"
          value={product.rating}
          precision={0.5}
          readOnly
          className="mt-1"
        />

        <Link
          to={`/singleProductPage/${product.id}`}
          className={`mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ${
            isListView ? "w-fit" : ""
          }`}
        >
          View Detail
        </Link>
      </div>
    </div>
  );
}

export default CardProductComponent;
