import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

function CardProductComponent({ product, activeView }) {
  const isListView = activeView === "ListView";

  if (isListView) {
    return (
      <div className="flex flex-col sm:flex-row sm:items-center w-[95%] sm:w-[90%] mx-auto gap-4 sm:gap-6 p-4 rounded-lg shadow-md bg-white mb-4 transition-all">
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
          {/* Наслов */}
          <h2 className="text-lg font-semibold">{product.title}</h2>

          {/* Цена */}
          <div className="text-gray-700 text-base">
            <span className="font-bold text-xl">$</span>{" "}
            <span>{product.price}</span>
          </div>

          {/* Рејтинг */}
          <div className="flex justify-center sm:justify-start">
            <Rating
              name="half-rating-read"
              value={product.rating}
              precision={0.5}
              readOnly
            />
          </div>

          {/* Копче */}
          <div className="flex justify-center sm:justify-start">
            <Link
              to={`/singleProductPage/${product.id}`}
              className="bg-mainBlue  text-white px-4 py-2 rounded hover:bg-mainYellow lg: w-[200px] "
            >
              View Detail
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // GridView - оригиналниот изглед, останува недопрен
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
