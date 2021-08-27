import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  var appName = "Emoji Translator";
  //var userName="shruti";
  var size = "14px";
  // var i=0;
  // const [likedVal,setlikedVal]=useState(0);
  // const handleLikeBtn=()=>{
  //   console.log("liked btn clicked");
  //   //var newLikeVal=likedVal+1;
  //   setlikedVal(likedVal+1);

  // }

  // console.log("liked val",likedVal);
  const emojiDictionary = {
    "😁": "grinning",
    "😉": "winking",
    "😊": "Smiling",
    "😮": "surprised",
    "😥": "crying",
  };
  const emojiDictionaryArray = [
    {
      "😁": "grinning",
      "😉": "winking",
      "😊": "Smiling",
      "😮": "surprised",
      "😥": "crying",
    },
  ];

  const [userInput, setuserInput] = useState(""); //useState to show change on state and have control on view layer
  const [meaning, setMeaning] = useState("");

  const handleTextInput = (event) => {
    console.log("e", event.target.value);
    var userInput = event.target.value;
    setuserInput(userInput);
    // var mean=emojiDictionary[userInput];

    // setMeaning(mean);
    if (userInput === undefined || userInput === "") {
      setMeaning("emoji not found in db");
    }
    if (userInput in emojiDictionary) {
      setMeaning(emojiDictionary[userInput]);
    } else {
      setMeaning("emoji not found");
    }
  };
  const handleEmojiClick = (x) => {
    console.log("emoji clicked", x);
    setMeaning(emojiDictionary[x]);
  };
  console.log("meaning", meaning);

  console.log("userInput", userInput);
  return (
    <div className="App" style={{ color: "blue", fontSize: size }}>
      <h1>{appName}</h1>
      {/* <p>Welcome {userName} {likedVal}</p> */}

      {/* <button onClick={handleLikeBtn} style={{background:'green',color:'white'}}>Like</button> */}
      <input type="text" onChange={handleTextInput} />
      <div>Meaning : {meaning}</div>
      <ul>
        {emojiDictionaryArray.map((item) => {
          console.log("item", item);
          console.log("item keys", Object.keys(item));
          console.log("item values", Object.values(item));

          return (
            <table>
              <tr style={{ display: "flex" }}>
                <div>
                  {" "}
                  {Object.keys(item).map((items) => {
                    console.log(items);
                    return (
                      <div onClick={() => handleEmojiClick(items)}>{items}</div>
                    );
                  })}
                </div>
                <div>
                  {Object.values(item).map((items) => {
                    console.log(items);
                    return <div>{items}</div>;
                  })}
                </div>
              </tr>
            </table>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

//{}->anything inside this single curly braces is JS
//{{}}->inner second curlybrace is trated like an object so pass values in style using object key-val pair syntax
//style takes an object instead of string
