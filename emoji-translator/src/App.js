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
  const FoodDictionaryArray = [
    {
      Gujarati: [
        {
          name: "Dhokla",
        },
        {
          name: "daal-dhokli",
        },
      ],
    },
    {
      Punjabi: [
        {
          name: "maake ki roti",
        },
        {
          name: "sarso ka saag",
        },
      ],
    },
    {
      Maharashtrian: [
        {
          name: "missal pav",
        },
        {
          name: "thalipeeth",
        },
      ],
    },
  ];
  const [userInput, setuserInput] = useState(""); //useState to show change on state and have control on view layer
  const [meaning, setMeaning] = useState("");
  const [foodSelected, setFoodSelected] = useState({});
  const handleTextInput = (event) => {
    // console.log("e", event.target.value);
    var usertext = event.target.value;
    setuserInput(usertext);
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
    //  console.log("emoji clicked", x);
    setMeaning(emojiDictionary[x]);
  };
  const handleCuisineSelect = (y) => {
    console.log("y", y);
    FoodDictionaryArray.map((items) => {
      Object.keys(items).forEach((key) => {
        if (y === key) {
          console.log("keyss", key, "----value", items[key]);

          var parentKey = items[key];

          Object.keys(parentKey).forEach((innerKey) => {
            console.log(
              "parentKey",
              parentKey,
              "----value",
              parentKey[innerKey].name
            );
            var childObjectVal = parentKey;
            setFoodSelected(childObjectVal);
          });
        }
      });

      return items;
    });
  };
  // console.log("meaning", meaning);
  console.log("foodSelected", foodSelected);
  // console.log("userInput", userInput);
  return (
    <div className="App" style={{ color: "blue", fontSize: size }}>
      <h1>{appName}</h1>
      {/* <p>Welcome {userName} {likedVal}</p> */}

      {/* <button onClick={handleLikeBtn} style={{background:'green',color:'white'}}>Like</button> */}
      <input type="text" onChange={handleTextInput} />
      <div>Meaning : {meaning}</div>
      <ul>
        {emojiDictionaryArray.map((item) => {
          // console.log("item", item);
          // console.log("item keys", Object.keys(item));
          // console.log("item values", Object.values(item));

          return (
            <table>
              <tbody>
                <tr style={{ display: "flex" }}>
                  <span>
                    {" "}
                    {Object.keys(item).map((items) => {
                      //  console.log(items);
                      return (
                        <div onClick={() => handleEmojiClick(items)}>
                          {items}
                        </div>
                      );
                    })}
                  </span>
                  <span>
                    {Object.values(item).map((items) => {
                      //console.log(items);
                      return <div>{items}</div>;
                    })}
                  </span>
                </tr>
              </tbody>
            </table>
          );
        })}
      </ul>
      <hr />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {FoodDictionaryArray.map((item) => {
          //console.log("objectArr", item);
          //console.log(Object.keys(item));
          return (
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              {Object.keys(item).map((items) => {
                // console.log("key", items);
                return (
                  <div style={{ display: "flex" }}>
                    <div onClick={() => handleCuisineSelect(items)}>
                      {items}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

//{}->anything inside this single curly braces is JS
//{{}}->inner second curlybrace is trated like an object so pass values in style using object key-val pair syntax
//style takes an object instead of string

// `for...of` loop
// for (const [key, value] of Object.entries(animals)) {
//     console.log(`${key}: ${value}`);
// }

// // `forEach()` method

// Object.entries(animals).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`)
// });
