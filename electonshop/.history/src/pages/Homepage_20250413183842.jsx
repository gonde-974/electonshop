import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

function CardProductComponent({ product, activeView }) {
  const isListView = activeView === "ListView";

  return (
    <div
      className={`product-card p-4 rounded-xl bg-white shadow-md transition-all duration-300 
      ${isListView ? 'flex gap-4 items-center' : 'flex flex-col items-center'}`}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className={`object-contain rounded-md 
        ${isListView ? 'w-32 h-32' : 'w-full h-40 mb-4'}`}
      />

      <div className={`${isListView ? 'flex flex-col gap-2' : 'text-center'}`}>
        <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>

        <div className="product-price-container">
          <p className="product-price-symbol text-gray-700">
            <span className="font-bold text-xl">$</span>
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
          className="mt-2 inline-block px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          View Detail
        </Link>
      </div>
    </div>
  );
}

export default CardProductComponent;
