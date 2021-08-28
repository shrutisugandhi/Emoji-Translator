import React, { useState } from "react";
import "./styles.css";

export default function SubjectDictionary() {
  const DictionaryArray = [
    {
      History: [
        {
          name: "abc",
        },
        {
          name: "xyz",
        },
      ],
    },
    {
      Maths: [
        {
          name: "geometry",
        },
        {
          name: "trignometry",
        },
      ],
    },
  ];
  const [subjectSelected, setSubjectSelected] = useState("");
  // const [Values, setValues] = useState({});

  const handleSubjectSelect = (y) => {
    console.log("y", y);
    DictionaryArray.forEach((items) => {
      //  console.log("i0", items);
      Object.keys(items).forEach((key) => {
        if (y === key) {
          // console.log("keyss", key, "----value", items[key]);

          var parentKey = items[key];
          // console.log("parentKey", parentKey);
          setSubjectSelected(parentKey);
        }
      });
    });
  };
  // console.log("meaning", meaning);
  console.log("SubjectSelected", subjectSelected);

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          border: "1px solid red",
          justifyContent: "space-around",
        }}
      >
        {DictionaryArray.map((item) => {
          console.log("objectArr", item);
          //console.log(typeof Object.keys(item));
          return (
            <div>
              <div>
                {Object.keys(item).map((items, index) => {
                  // console.log("key", items);
                  return (
                    <div>
                      <div
                        key={index}
                        onClick={() => handleSubjectSelect(items)}
                      >
                        {items}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          border: "1px solid green",
          height: "100px",
          marginTop: "10px",
        }}
      >
        {Object.keys(subjectSelected).map((x) => {
          console.log(subjectSelected[x]);
          return <div>{subjectSelected[x].name}</div>;
        })}
      </div>
    </div>
  );
}
