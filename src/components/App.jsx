import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEmoji(emojiList) {
  return (
    <Entry
      key={emojiList.id}
      emoji={emojiList.emoji}
      name={emojiList.name}
      description={emojiList.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createEmoji)}
    </div>
  );
}

export default App;
