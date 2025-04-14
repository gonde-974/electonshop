import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

function CardProductComponent({ product, activeView }) {
  const isListView = activeView === "ListView";

  if (isListView) {
    // ListView: еден ред со сите елементи подредени хоризонтално
    return (
      <div className="flex flex-row items-center w-[90%] mx-auto gap-6 p-4 rounded-lg shadow-md bg-white">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-24 h-24 object-contain"
        />

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
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          View Detail
        </Link>
      </div>
    );
  }

  // GridView: оригиналниот изглед, без никакви промени
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
