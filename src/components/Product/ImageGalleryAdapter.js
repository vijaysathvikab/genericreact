import React from 'react';
// Adapting 3rd party lightgallery for our product images
// This assumes lightgallery is installed as per package.json

const ImageGalleryAdapter = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="product-gallery">
      <div className="main-image">
        <img src={images[0].url} alt="Product Main" style={{ width: '100%', borderRadius: '8px' }} />
      </div>
      <div className="thumbnails" style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        {images.slice(1).map((img, index) => (
          <img 
            key={index} 
            src={img.url} 
            alt={`Thumbnail ${index + 1}`} 
            style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px', cursor: 'pointer' }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGalleryAdapter;
