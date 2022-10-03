import React, { useState } from "react";
import "./App.css";
import DoneIcon from "./images/icon-complete.svg";
export default function SignForm() {
  const [submit, setSubmit] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(1);
  };
  const handleContinue = () => {
    setSubmit(0);
  };
  return (
    <>
      {submit ? (
        <div className="completeState">
          <img src={DoneIcon} alt="Done" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid red",
              margin: 0,
              gap: 35,
            }}
          >
            <h3 style={{ margin: 0, lineHeight: 1 }}>THANK YOU!</h3>
            <p style={{ margin: 0, lineHeight: 1 }}>
              We've added your card details
            </p>
          </div>

          <button onClick={handleContinue}>continue</button>
        </div>
      ) : (
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            gap: 20,
            padding: "5px 0",
          }}
          onSubmit={(e) => handleSubmit(e)}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="name">Cardholder name</label>
            <input type="text" id="name" placeholder="e.g Jane Appleseed" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="number">Card number</label>
            <input
              type="text"
              id="number"
              placeholder="e.g 1234 5678 9123 0000"
            />
          </div>
          <div
            style={{
              display: "flex",
              gap: 10,
              justifyContent: "space-around",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="ex-date">exp. date (mm/yy)</label>
              <div style={{ display: "flex", width: "100%" }}>
                <input type="text" id="ex-date" placeholder="MM" />
                <input type="text" id="ex-date" placeholder="YY" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
              }}
            >
              <label htmlFor="cvc">cvc</label>
              <div>
                <input
                  type="text"
                  id="cvc"
                  placeholder="e.g. 123"
                  style={{ flexGrow: 1, width: "100%" }}
                />
              </div>
            </div>
          </div>
          <button className="submitButton" type="submit">
            confirm
          </button>
        </form>
      )}
    </>
  );
}
