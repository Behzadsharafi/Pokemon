import AppContainer from "./containers/AppContainer/AppContainer";
import "./global.scss";
import backgroundImage from "../src/assets/Pokemon.jpg";

function App() {
  return (
    <>
      <img className="backgroundImage" src={backgroundImage} alt="" />
      <AppContainer />
    </>
  );
}

export default App;
