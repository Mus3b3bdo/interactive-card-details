import "./App.css";
import CardBack from "./components/UI/CardBack";
import CardFront from "./components/UI/CardFront";
import LeftSide from "./components/UI/LeftSide";
import RightSide from "./components/UI/RightSide";

function App() {
  return (
    <div className="App">
      <LeftSide>
        <CardBack />
        <CardFront />
      </LeftSide>
      <RightSide />
      <footer>
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="/">Musab Abdo</a>.
      </footer>
    </div>
  );
}

export default App;
