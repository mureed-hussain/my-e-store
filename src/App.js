import {useState} from "react"
import "./App.css"
import Dinner from "./Dinner.jsx"

function App(props) {
        
  return (
    <div>
      <h1>My Hotel Menu</h1>
      <hr/>
      <Dinner  dishName="Chiken Karahi" sweetDish="Kheer"/>
      <Dinner dishName="Chiken Karahi" sweetDish="Kheer"/>
      <Dinner dishName="Chiken Karahi" sweetDish="Kheer"/>
      <hr/>
    </div>
  );
}

export default App;
