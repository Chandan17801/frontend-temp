import React from "react";

function Discount(props) {
  const onClickHandler = () => {
    props.onClick(props.discount);
  };

  return (
    <div>
      <label>
        <input type="radio" name="discount" onChange={onClickHandler} />
        {props.discount}% and above
      </label>
    </div>
  );
}

export default Discount;
