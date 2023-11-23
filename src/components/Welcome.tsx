import Shark from "../imgs/shark-teste.jpg"
import "../css/main.css"

export default function Welcome() {
  return (
    <>
    <div className="wrapper">
      <h1>Welcome</h1>
      <p>Text wrapped inside a p tag</p>
      <img src={Shark} alt="Shark Image" width={200} height={200} />
    </div>
    </>
  );
}