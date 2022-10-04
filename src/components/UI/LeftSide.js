import "../../App.css";
export default function LeftSide({ children }) {
  return (
    <div className="left" role="banner">
      {children}
    </div>
  );
}
