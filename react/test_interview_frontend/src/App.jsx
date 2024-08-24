import "./App.css";
import Greeting from "./components/Greeting";
function App() {
  //Array of names
  const names = ["Alice", "Bob", "Charlie", "David"];

  //Methode de listage avec des li
  const listRenderWithLi = names.map((name, index) => (
    <li key={`${name}-${index}`}>{name}</li>
  ));

  //Methode de listage avec le component Greeting
  const listRenderWithGreeting = names.map((name, index) => (
    <Greeting key={`${name}-${index}`} name={name} />
  ));
  return (
    <div>
      {/*Methode de listage avec des li*/}
      <ul>{listRenderWithLi}</ul>
      {/*Methode de listage avec le component Greeting*/}
      {listRenderWithGreeting}
    </div>
  );
}

export default App;
