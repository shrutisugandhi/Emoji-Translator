import React, { useState } from "react";

import "./styles.css";

const FoodApp = React.memo(() => {
  var appName = "Food Dictionary";
  var size = "14px";

  const FoodDictionary = {
    Gujarati: [
      {
        name: "Dhokla",
      },
      {
        name: "daal-dhokli",
      },
    ],

    Punjabi: [
      {
        name: "maake ki roti",
      },
      {
        name: "sarso ka saag",
      },
    ],

    Maharashtrian: [
      {
        name: "missal pav",
      },
      {
        name: "thalipeeth",
      },
    ],
  };

  const [foodSelected, setFoodSelected] = useState([]);

  const handleCuisineSelect = (y) => {
    // console.log("seclected", y);
    Object.keys(FoodDictionary).forEach((x) => {
      //  console.log("1", x);
      if (y === x) {
        console.log("return obj", FoodDictionary[y]);
        setFoodSelected(FoodDictionary[y]);
        return FoodDictionary[y];
      }
    });
  };
  console.log("foodSelected", foodSelected);
  return (
    <div className="App" style={{ color: "blue", fontSize: size }}>
      <h1>{appName}</h1>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {Object.keys(FoodDictionary).map((item) => {
          // console.log(item);
          return (
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div onClick={() => handleCuisineSelect(item)}>{item}</div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          background: "lightblue",
          marginTop: "10px",
          border: "1px solid red",
          height: "150px",
        }}
      >
        {foodSelected.map((i) => {
          console.log(i);

          return (
            <ul>
              <li>{i.name}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
});
export default FoodApp;

//used React.memo() for performance optimization as to prevent rendering UI by comparing wioth prev state to current state
