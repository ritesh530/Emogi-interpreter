import { useState } from "react";
import "./styles.css";

var heading = "inside out";
/*var username = prompt("Enter username: ")*/
var color = "green";
var welcomecolor = "blue";
/*var count = 0;*/
const emogiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face"
};

export default function App() {
  /* const [count, setcount] = useState(0);
  const [inputtext,setinputtext] = useState("");
  */

  /*function clickHandler() {
    var countvalue = count + 1;
    setcount(countvalue);
  }
  function changeHandler() {
    setinputtext(event.target.value);

  }
*/
  const [meaning, setmeaning] = useState("");
  function changeHandler() {
    var userInput = event.target.value;
    var meaning = emogiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Emogi is not available in our database. Try another.";
    }
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>
        Welcome <span style={{ color: "blue" }}></span>{" "}
      </h1>
      <h1 style={{ backgroundColor: color }}>{heading}</h1>
      <input onChange={changeHandler} />
      <h2>{meaning}</h2>
    </div>
  );
}

/*things to notice
 * class -- className
 * style --- takes an object instead of an string
 */
