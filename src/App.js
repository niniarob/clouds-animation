import { useEffect } from "react";
import "./App.css";
import CLOUDS from "vanta/src/vanta.clouds";

function App() {
  useEffect(() => {
      CLOUDS({
        el:'#vanta',
        speed:2
      });
  },[]);


  return (
    <div className="App">
      <div className="bg" id="vanta">
        <div className="hero">
          <h1>Cool Clouds</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
