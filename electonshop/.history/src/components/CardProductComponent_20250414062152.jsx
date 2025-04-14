import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

function CardProductComponent({ product, activeView }) {
  const isListView = activeView === "ListView";

  if (isListView) {
    return (
      <div className="flex flex-col sm:flex-row items-start sm:items-center w-[95%] sm:w-[90%] mx-auto gap-4 sm:gap-6 p-4 rounded-lg shadow-md bg-white mb-4 transition-all">
        {/* Слика */}
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-28 h-28 object-contain self-center sm:self-auto"
        />

        {/* Информации */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between flex-1 gap-2 sm:gap-6">
          {/* Наслов */}
          <h2 className="text-lg font-semibold w-full sm:w-1/4">{product.title}</h2>

          {/* Цена */}
          <div className="w-full sm:w-1/4 text-gray-700">
            <span className="font-bold text-xl">$</span>{" "}
            <span className="product-price">{product.price}</span>
          </div>

          {/* Рејтинг */}
          <div className="w-full sm:w-1/4">
            <Rating
              name="half-rating-read"
              value={product.rating}
              precision={0.5}
              readOnly
              className="product-rating"
            />
          </div>

          {/* Копче */}
          <div className="w-full sm:w-auto">
            <Link
              to={`/singleProductPage/${product.id}`}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center w-full sm:w-auto"
            >
              View Detail
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // GridView останува 100% ист
  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image object-contain"
      />
      <h2 className="product-title">{product.title}</h2>
      <div className="product-price-container">
        <p className="product-price-symbol">
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
      <Link to={`/singleProductPage/${product.id}`} className="product-detail-button">
        View Detail
      </Link>
    </div>
  );
}

export default CardProductComponent;
