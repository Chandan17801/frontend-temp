import React, { Fragment } from "react";

function AddressCard(props) {
  return (
    <Fragment>
      <div className="ml-[3.12rem] my-[1.94rem] text-[1.5rem] text-[#D6CB6B] font-[600]">
        Address {props.val.id}
      </div>
      <div className="w-[29.75rem] text-[1.25rem] font-[500] ml-[2.75rem] px-5 leading-6">
        <p>{props.val.address}</p>
        <p>{props.val.city}</p>
        <p>{props.val.state}</p>
        <p>{props.val.phone}</p>
        <p>{props.val.zip}</p>
        <p>{props.val.code}</p>
        <p>{props.val.country}</p>
      </div>
    </Fragment>
  );
}

export default AddressCard;
