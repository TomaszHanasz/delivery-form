import React, { useState } from "react";
import "./deliveryForm.style.css";

const defaultDeliveryData = {
  firstName: "",
  lastName: "",
  street: "",
  city: "",
  zipcode: "",
  state: "",
  mobilePhone: "",
  workPhone: "",
  deliveryDate: "",
  isSignatureRequired: false,
};

const DeliveryForm = () => {
  const [deliveryData, setDeliveryData] = useState(defaultDeliveryData);

  const onSubmitHandler = (e) => {
    console.log(deliveryData);
    e.preventDefault();
  };

  const onChangeHandler = (e) => {
    setDeliveryData({ ...deliveryData, [e.target.name]: e.target.value });
  };

  const onCheckedHandler = (e) => {
    setDeliveryData({
      ...deliveryData,
      isSignatureRequired: e.target.checked,
    });
  };

  return (
    <div className="delivery-form-container">
      <div className="delivery-form-box">
        <h1>Delivery Confirmation Form</h1>
        <form onSubmit={onSubmitHandler}>
          <label forHtml="firstName">Name:</label>
          <div className="input-fields medium-input">
            <input
              name="firstName"
              placeholder="First name"
              onChange={onChangeHandler}
            />
            <input
              name="lastName"
              placeholder="Last name"
              onChange={onChangeHandler}
            />
          </div>
          <label forHtml="street">Address:</label>
          <div className="input-fields long-input">
            <input
              name="street"
              placeholder="Street"
              onChange={onChangeHandler}
            />
            <input name="city" placeholder="City" onChange={onChangeHandler} />
          </div>
          <label></label>
          <div className="input-fields medium-input">
            <input
              name="zipcode"
              placeholder="Zip Code"
              onChange={onChangeHandler}
            />
            <input
              name="state"
              placeholder="State"
              onChange={onChangeHandler}
            />
          </div>
          <label forHtml="mobilePhone">Phone number:</label>
          <div className="input-fields medium-input">
            <input
              name="mobilePhone"
              type="number"
              placeholder="Mobile"
              onChange={onChangeHandler}
            />
            <input
              name="workPhone"
              type="number"
              placeholder="Work"
              onChange={onChangeHandler}
            />
          </div>
          <label forHtml="deliveryDate">Date of delivery</label>
          <div className="input-fields long-input">
            <input name="deliveryDate" type="date" onChange={onChangeHandler} />
            <div className="signature">
              <input
                name="isSignatureRequired"
                type="checkbox"
                onClick={onCheckedHandler}
              />
              <label forHtml="isSignatureRequired">Signature</label>
            </div>
          </div>
          <br />
          <div className="sendBtn">
            <button className="pushable">
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">Send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeliveryForm;
