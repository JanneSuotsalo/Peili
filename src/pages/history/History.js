import React, { useState } from "react";
import "./History.css";
import sideImgStart from "./history_sideImgStart.png";
import sideImg from "./history_sideImg.png";

export default function History() {
  const [count, setCount] = useState(0);
  const [historyData] = useState([]);
  const [indexArray] = useState([-1]);
  const [visible, setVisible] = useState(true);
  const [runOnce] = useState([0]);

  let historyDataJson = require("./History.json");
  let lastIndexNumber;
  let historyDataArray = [];
  let runOnceCheck = runOnce.pop();

  if (runOnceCheck <= 0) {
    runOnce.push(1);
    historyData.push(AddElement(-1, changeLastIndex));
    console.log(runOnceCheck);
  }

  console.log(
    "Lastindex: " +
      lastIndexNumber +
      " Visibility: " +
      visible +
      " Count: " +
      count
  );

  function render() {
    lastIndexNumber = indexArray.pop();
    setCount(count + 1);
    historyData.push(AddElement(lastIndexNumber, changeLastIndex));
  }

  function changeLastIndex(index) {
    indexArray.push(index);

    // hides the button if there is no more history to show
    if (lastIndexNumber + 7 === historyDataJson.length) {
      setVisible(false);
    }
  }

  historyData.forEach(el => {
    historyDataArray.push(el);
  });

  return (
    <div>
      {historyDataArray}
      {visible && (
        <div className="history_buttonContainer">
          <button className="history_ShowMoreButton" onClick={() => render()}>
            Näytä lisää
          </button>
        </div>
      )}
      <div className="history_emptySpace"></div>
    </div>
  );
}

const AddElement = (lastIndex, changevalue) => {
  let historyData = require("./History.json");
  let timesToRun = 0;
  let data = [];

  // Sorting the json file to be ordered by date
  historyData.sort((a, b) => new Date(b.date) - new Date(a.date));

  for (var i = 0; i < historyData.length && timesToRun < 6; i++) {
    var obj = historyData[i];
    let container = [];

    if (i > lastIndex) {
      data.push(
        <div key={i+obj.tag.toString()} className={"history_" + obj.tag.toString() + "Container"}>
          {container}
        </div>
      );
      if (i === 0) {
        container.push(
          <img alt="dsa" key={i+obj.date.toString()} className="history_sideImgStart" src={sideImgStart} />
        );
        container.push(<div key={i+obj.tag.toString()} className="history_dateStart">{new Date(obj.date).toLocaleString()}</div>);
        container.push(<div key={i} className="history_eventStart">{obj.event}</div>);
      } else {
        container.push(<img alt="sadsa" key={i+obj.tag.toString()} className="history_sideImg" src={sideImg} />);
        container.push(<div key={i+obj.date.toString()} className="history_date">{new Date(obj.date).toLocaleString()}</div>);
        container.push(<div key={i} className="history_event">{obj.event}</div>);
      }

      lastIndex = i;
      changevalue(lastIndex);

      timesToRun += 1;
    }
  }

  return <div key={lastIndex} className="history_container">{data}</div>;
};
