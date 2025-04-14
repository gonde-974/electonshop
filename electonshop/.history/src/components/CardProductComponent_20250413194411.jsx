import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

function CardProductComponent({ product, activeView }) {
  const isListView = activeView === "ListView";

  return (
    <div
      className={`product-card w-full p-4 rounded-xl bg-white shadow-md transition-all duration-300 
      ${isListView ? 'flex flex-row items-center gap-6' : 'flex flex-col items-center'} 
      border border-gray-100 hover:shadow-lg`}
    >
      {/* Слика */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className={`object-contain rounded-md
        ${isListView ? 'w-36 h-36' : 'w-full h-40 mb-4'}`}
      />

      {/* Детали */}
      <div className={`${isListView ? 'flex flex-col gap-2 w-full' : 'text-center w-full'}`}>
        <h2 className="text-xl font-semibold text-gray-800 mb-1">{product.title}</h2>

        <div className="text-gray-700 text-base mb-1">
          <span className="font-bold text-lg">$</span>
          <span className="ml-1">{product.price}</span>
        </div>

        <Rating
          name="half-rating-read"
          value={product.rating}
          precision={0.5}
          readOnly
          className="product-rating"
        />

        <div className={`${isListView ? 'mt-2' : 'mt-4'}`}>
          <Link
            to={`/singleProductPage/${product.id}`}
            className="inline-block px-5 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            View Detail
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardProductComponent;
