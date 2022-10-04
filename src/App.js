import "./App.css";
import CardBack from "./components/UI/CardBack";
import CardFront from "./components/UI/CardFront";
import FormContainer from "./components/UI/FormContainer";
import LeftSide from "./components/UI/LeftSide";
import RightSide from "./components/UI/RightSide";
import SignForm from "./SignForm";

function App() {
  return (
    <div className="App">
      <LeftSide>
        <CardBack />
        <CardFront />
      </LeftSide>
      <RightSide>
        <FormContainer>
          <SignForm />
        </FormContainer>
      </RightSide>
      <footer role="contentinfo">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="/">
          <h1
            style={{
              fontSize: "1rem",
              display: "inline-block",
              marginBottom: 0,
            }}
          >
            Musab Abdo
          </h1>
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
