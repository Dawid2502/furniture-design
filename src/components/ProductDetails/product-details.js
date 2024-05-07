import PhotoPanel from "../PhotosPanel/photos-panel";
import AboutProduct from "../AboutProduct/about-product";
import { useParams } from "react-router-dom";
import "./product-details.scss";

export default function ProductDetails() {
    const { id } = useParams();

  return (
    <div className="product-details-page">
      <PhotoPanel productIndex={id} />
      <AboutProduct productIndex={id} />
    </div>
  );
}