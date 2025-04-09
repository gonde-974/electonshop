import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
function CardProductComponent({ product }) {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} className="product-image object-contain" />
      <h2 className="product-title">{product.title}</h2>
      <div className="product-price-container">
        <p className="product-price-symbol"><span className="font-bold text-xl">$</span> <span className="product-price">{product.price}</span></p>
       
      </div>
      <Rating name="half-rating-read" value={product.rating} precision={0.5} readOnly className="product-rating" />
      <Link to={`/singleProductPage/${product.id}`} className="product-detail-button">
        View Detail
      </Link>
      

    </div>
  );
}

export default CardProductComponent
