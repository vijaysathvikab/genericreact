import React from "react";
import LightGallery from "lightgallery/react";
import lion from "../../assets/lion.jpg";
import brand from "../../assets/brand.jpg";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import "./ImageGallery.scss";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

function ImageGallery() {
  return (
    <div className="image-gallery py-2">
      <LightGallery
        speed={500}
        thumbnail={false}
        download={false}
        plugins={[lgThumbnail, lgZoom]}
        mode="lg-fade"
      >
        <a className="gallery-item" href={lion}>
          <img className="img-responsive" alt="lion" width={300} src={lion} />
        </a>
        <a className="gallery-item" href={brand}>
          <img className="img-responsive" alt="brand" width={300} src={brand} />
        </a>
      </LightGallery>
    </div>
  );
}

export default ImageGallery;
