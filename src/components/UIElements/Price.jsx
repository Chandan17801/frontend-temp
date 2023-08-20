import React from "react";

function Price(props) {
  const onClickHandler = () => {
    props.onClick(props.min, props.max);
  };

  return (
    <div>
      <label>
        <input type="radio" name="price" onChange={onClickHandler} /> Rs.{" "}
        {props.min} {!props.max ? "and above" : "to Rs."} {props.max}
      </label>
    </div>
  );
}

export default Price;
