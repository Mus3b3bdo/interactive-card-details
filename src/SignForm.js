import React, { useState } from "react";
import "./App.css";
import DoneIcon from "./images/icon-complete.svg";
export default function SignForm() {
  const [submit, setSubmit] = useState(0);
  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [NameError, setNameError] = useState(1);
  const [cardNumError, setCardNumError] = useState(1);
  const [monthError, setMonthError] = useState(1);
  const [yearError, setYearError] = useState(1);
  const [cvcError, setCvcError] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [cardErrorMessage, setCardErrorMessage] = useState("");
  const handeCardNumChange = (e) => {
    setCardNum(e.target.value);
    const re = /^[0-9\b]+$/;
    console.log(cardNumError);
    if (re.test(e.target.value)) {
      setCardNumError(0);
    } else {
      setCardNumError(1);
    }
  };
  const handeNameChange = (e) => {
    setName(e.target.value);
    if (e.target.value !== "") {
      setNameError(0);
    } else {
      setNameError(1);
    }
  };
  const handeMonthChange = (e) => {
    setMonth(e.target.value);
    if (e.target.value !== "") {
      setMonthError(0);
    } else {
      setMonthError(1);
    }
  };
  const handeYearChange = (e) => {
    setYear(e.target.value);
    if (e.target.value !== "") {
      setYearError(0);
    } else {
      setYearError(1);
    }
  };
  const handeCvcChange = (e) => {
    setCvc(e.target.value);
    if (e.target.value !== "") {
      setCvcError(0);
    } else {
      setCvcError(1);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (NameError === 1) {
      setErrorMessage("can't be blank");
      setSubmit(0);
    } else if (cardNumError === 1) {
      setCardErrorMessage("Wrong format. numbers only");
      setSubmit(0);
    } else if (monthError === 1) {
      setErrorMessage("can't be blank");
      setSubmit(0);
    } else if (yearError === 1) {
      setErrorMessage("can't be blank");
      setSubmit(0);
    } else if (cvcError === 1) {
      setErrorMessage("can't be blank");
      setSubmit(0);
    } else {
      setSubmit(1);
    }
  };
  const handleContinue = () => {
    setSubmit(0);
    setNameError(1);
    setCardNumError(1);
    setMonthError(1);
    setErrorMessage("");
    setCardErrorMessage("");
    setName("");
    setMonth("");
    setYear("");
    setCvc("");
    setCardNum("");
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
            fontSize: "0.7rem",
          }}
          onSubmit={(e) => handleSubmit(e)}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="name">Cardholder name</label>
            <input
              type="text"
              id="name"
              placeholder="e.g Jane Appleseed"
              onChange={(e) => handeNameChange(e)}
              value={name}
            />
            <div style={{ color: "hsl(0, 100%, 66%)" }}>{errorMessage}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="number">Card number</label>
            <input
              type="text"
              id="number"
              placeholder="e.g 1234 5678 9123 0000"
              onChange={(e) => handeCardNumChange(e)}
              value={cardNum}
            />
            <div style={{ color: "hsl(0, 100%, 66%)" }}>{cardErrorMessage}</div>
          </div>
          <div
            style={{
              display: "flex",
              gap: 10,
              justifyContent: "space-around",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="month year">exp. date (mm/yy)</label>
              <div style={{ display: "flex", gap: "8px" }}>
                <input
                  type="number"
                  id="month"
                  placeholder="MM"
                  style={{ width: "100%" }}
                  onChange={(e) => handeMonthChange(e)}
                  value={month}
                />

                <input
                  type="number"
                  id="year"
                  placeholder="YY"
                  style={{ width: "100%" }}
                  onChange={(e) => handeYearChange(e)}
                  value={year}
                />
              </div>
              <div style={{ color: "hsl(0, 100%, 66%)" }}>{errorMessage}</div>
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
                  type="number"
                  id="cvc"
                  placeholder="e.g. 123"
                  style={{ flexGrow: 1 }}
                  onChange={(e) => handeCvcChange(e)}
                  value={cvc}
                />
                <div style={{ color: "hsl(0, 100%, 66%)" }}>{errorMessage}</div>
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
