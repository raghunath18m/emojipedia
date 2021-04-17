import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "🙄": "disbelief",
  "😞": "sad",
  "🔥": "fire",
  "😛": "playfull"
};

const emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry!! Not found in our Database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emojipedia</h1>
      <input type="text" onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3>click on emoji to see the meaning</h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            className="emoji"
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "1.5rem", padding: "2rem" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
