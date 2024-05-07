import { Link } from "react-router-dom";
import { PRODUCTS } from "../../productlist";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import './product-item.scss'

export default function ProductItem({ product }) {
  return (
    <div className="product">
      <Link to={`/product/${product.id}`} className="product-link">
      <div className="product-details">
        <img src={product.productImage1} />
        <h3>{product.productName}</h3>
        <p>{product.price} PLN</p>
      </div>
      </Link>
    </div>
  );
}
