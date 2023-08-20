import React from "react";

function ColorBox(props) {
  return (
    <div
      style={{
        width: "19px",
        height: "17px",
        display: "flex",
        gap: "5px",
        marginBottom: "7px",
      }}
      onClick={props.onClick}
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="17"
          viewBox="0 0 19 17"
          fill="none"
        >
          <ellipse cx="9.5" cy="8.5" rx="9.5" ry="8.5" fill={props.col} />
        </svg>
      </div>{" "}
      <div style={{ width: "40px", height: "25px" }}>{props.name}</div>
    </div>
  );
}

export default ColorBox;
