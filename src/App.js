import React from "react";
import "./App.css";
import Palette from "./Palette";
import seedPalettes from "./seedPalettes";
import { generatePalette } from "./colorHelper";

function App() {
  console.log(generatePalette(seedPalettes[4]));
  return (
    <div className="App">
      <Palette {...seedPalettes[4]} />
    </div>
  );
}

export default App;
