import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

function CardProductComponent({ product, activeView }) {
  const isListView = activeView === "ListView";

  if (isListView) {
    return (
      <div className="flex flex-col sm:flex-row sm:items-center w-[95%] sm:w-[90%] mx-auto gap-4 sm:gap-6 p-4 rounded-lg bg-white mb-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer">
        {/* Слика */}
        <div className="flex justify-center sm:justify-start">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-28 h-28 object-contain"
          />
        </div>

        {/* Детали */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between flex-1 gap-3 sm:gap-6 text-center sm:text-left">
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <div className="text-gray-700 text-base">
            <span className="font-bold text-xl">$</span>{" "}
            <span>{product.price}</span>
          </div>
          <div className="flex justify-center sm:justify-start">
            <Rating
              name="half-rating-read"
              value={product.rating}
              precision={0.5}
              readOnly
            />
          </div>
          <div className="flex justify-center sm:justify-start">
            <Link
              to={`/singleProductPage/${product.id}`}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              View Detail
            </Link>
          </div>
        </div>
      </div>
    );
  }

  
}

export default CardProductComponent;
