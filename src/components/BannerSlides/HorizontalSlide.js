import React from "react";
import logo from "../../assets/lion.jpg";

function HorizontalSlide({ config }) {
  const { slideType, heading, body, ctaLabel, ctaLink } = config;
  const imgOrder = slideType.includes("right") ? 2 : 0;
  return (
    <div className="w-100 h-100 card position-relative d-flex flex-md-row overflow-hidden bottom-0">
      <img
        src={logo}
        alt={heading}
        className="col-12 col-md-4"
        width="100%"
        height="100%"
        style={{ maxHeight: "500px", objectFit: "cover", order: imgOrder }}
      />
      <div className="card-body col-12 col-md-8">
        <h5 className="card-title fw-bold">{heading}</h5>
        <p className="card-title">{body}</p>
        <a
          className="btn btn-gray mt-2 rounded-3 border border-1"
          href={ctaLink}
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}

export default HorizontalSlide;
