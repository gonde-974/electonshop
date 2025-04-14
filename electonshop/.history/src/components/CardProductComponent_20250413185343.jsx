import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

function CardProductComponent({ product, activeView }) {
  const isListView = activeView === "ListView";

  return (
    <div
      className={`w-full md:w-4/5 p-6 rounded-2xl bg-white shadow-sm transition-all duration-300 
      ${isListView ? 'flex flex-row items-center gap-6' : 'flex flex-col items-center'} 
      border border-gray-200 hover:shadow-md`}
    >
      {/* Слика на производот */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className={`object-cover rounded-xl
        ${isListView ? 'w-36 h-36' : 'w-full h-48 mb-4'}`}
      />

      {/* Детали за производот */}
      <div className={`${isListView ? 'flex flex-row items-center gap-6 w-full' : 'text-center w-full'}`}>
        <h2 className="text-lg font-medium text-gray-800">{product.title}</h2>

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
