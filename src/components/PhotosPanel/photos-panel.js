import React, { useState } from "react";
import { PRODUCTS } from "../../productlist";
import "./photos-panel.scss";

export default function PhotoPanel({ productIndex }) {

    const product = PRODUCTS[productIndex];

    const productPhotos = [product.productImage1, product.productImage2, product.productImage3, product.productImage4]

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const handleSelectedPhotoIndex = (index) => {
    setSelectedPhotoIndex(index);
  };

  return (
    <>
      <div className="photos-container">
        <img
          src={productPhotos[selectedPhotoIndex]}
          alt="buty na pomarańczowym tle"
          className="big-photo"
        />
        <div className="mini-photos-box">
          {productPhotos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt="buty na pomarańczowym tle"
              className={`mini-photo ${
                selectedPhotoIndex === index ? "selected-photo" : ""
              }`}
              onClick={() => handleSelectedPhotoIndex(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
