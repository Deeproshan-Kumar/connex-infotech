import React from "react";

const RoadmapCard = ({ title, week, items }) => {
  return (
    <div className="service-card h-100 rounded-12 border-0 p-2 p-xl-3 roadmap-card">
      {/* Week Badge */}
      <div className="week-badge position-absolute top-0 end-0 px-2 py-2 text-white fw-medium">
        <img
          src="/internship/week-calendar.svg"
          alt="calendar"
          className="me-2"
          style={{ width: "16px" }}
        />
        {week}
      </div>

      <h2 className="sm_text_13 sm_line_height_16 fw-semibold mb-1 mb-lg-3 pe-xl-4 mt-lg-4 mt-3 mt-md-5">
        {title}
      </h2>
      <ul className="list-unstyled m-0 pt-lg-4 pt-md-4 pt-2">
        {items.map((item, itemIndex) => (
          <li
            key={itemIndex}
            className="d-flex align-items-start gap-2 mb-2 map-text"
          >
            <img
              src="/services/check.svg"
              alt="check"
              style={{ marginTop: "3px" }}
            />
            <span className="text-data">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoadmapCard;
