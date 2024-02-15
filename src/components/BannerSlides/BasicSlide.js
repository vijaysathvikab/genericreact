import React from "react";
import logo from "../../assets/lion.jpg";

function BasicSlide({ config }) {
  const { slideType, heading, body, ctaLabel, ctaLink } = config;
  return (
    <div className="w-100 h-100 card position-relative overflow-hidden bottom-0">
      {slideType.includes("top") && (
        <img
          src={logo}
          alt={heading}
          width="100%"
          height="100%"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      )}
      <div className="card-body">
        <h5 className="card-title fw-bold">{heading}</h5>
        <p className="card-title">{body}</p>
        <a
          className="btn btn-gray mt-2 rounded-3 border border-1"
          href={ctaLink}
        >
          {ctaLabel}
        </a>
      </div>
      {slideType.includes("bottom") && (
        <img
          src={logo}
          alt={heading}
          width="100%"
          height="100%"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      )}
    </div>
  );
}

export default BasicSlide;
