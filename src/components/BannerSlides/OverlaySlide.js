import React from "react";
import logo from "../../assets/lion.jpg";

function OverlaySlide({ config }) {
  const { slideType, heading, body, ctaLabel, ctaLink } = config;
  return (
    <div className="w-100 h-100 card position-relative overflow-hidden bottom-0">
      <img
        src={logo}
        alt={heading}
        width="100%"
        height="100%"
        style={{ maxHeight: "500px", objectFit: "cover" }}
      />
      {slideType !== "image" && (
        <div
          className={`card-body position-absolute overlay w-50 h-100 ${
            slideType.includes("right") ? "end-0" : "start-0"
          }`}
          style={{ color: "white", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <h5 className="card-title fw-bold">{heading}</h5>
          <p className="card-title">{body}</p>
          <a
            className="btn btn-gray mt-2 rounded-3 border border-1"
            style={{ color: "white" }}
            href={ctaLink}
          >
            {ctaLabel}
          </a>
        </div>
      )}
    </div>
  );
}

export default OverlaySlide;
