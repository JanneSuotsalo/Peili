import React, { useState } from "react";
import "./History.css";
import sideImgStart from "./history_sideImgStart.png";
import sideImg from "./history_sideImg.png";
import I18n from "../../components/Element/LanguageSwticher/I18n";

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

  // Handles showing history when you enter the page, runs only one time.
  if (runOnceCheck <= 0) {
    runOnce.push(1);
    historyData.push(AddElement(-1, changeLastIndex));
  }

  // Handles rendering the history data. Also removes the old last index number.
  function render() {
    lastIndexNumber = indexArray.pop();
    setCount(count + 1);
    historyData.push(AddElement(lastIndexNumber, changeLastIndex));
  }

  // Changes the index number and handles hiding "show more" button
  function changeLastIndex(index) {
    indexArray.push(index);

    // hides the button if there is no more history to show
    if (lastIndexNumber + 7 === historyDataJson.length) {
      setVisible(false);
    }
  }

  // For each element in history data, pushes them into array which shows data on the page
  historyData.forEach(el => {
    historyDataArray.push(el);
  });

  return (
    <div>
      {historyDataArray}
      {visible && (
        <div className="history_buttonContainer">
          <button className="history_ShowMoreButton" onClick={() => render()}>
            {I18n.t("history.showMore")}
          </button>
        </div>
      )}
      <div className="history_emptySpace"></div>
    </div>
  );
}

// Handles creating history
const AddElement = (lastIndex, changevalue) => {
  let historyData = require("./History.json");
  let timesToRun = 0;
  let data = [];

  // Sorting the json file to be ordered by date
  historyData.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Goes through the data json and creates the history.
  for (var i = 0; i < historyData.length && timesToRun < 6; i++) {
    var obj = historyData[i];
    let container = [];

    // First checks that the new history data's index that is wanted to be rendered, is higher than the last index. This way we get the older data from the json that has not been shown already.
    if (i > lastIndex) {
      data.push(
        <div
          key={i + obj.tag.toString()}
          className={"history_" + obj.tag.toString() + "Container"}
        >
          {container}
        </div>
      );

      // Gives different image for the first history data
      if (i === 0) {
        container.push(
          <img
            alt="dsa"
            key={i + obj.date.toString()}
            className="history_sideImgStart"
            src={sideImgStart}
          />
        );
        container.push(
          <div key={i + obj.tag.toString()} className="history_dateStart">
            {new Date(obj.date).toLocaleString()}
          </div>
        );
        container.push(
          <div key={i} className="history_eventStart">
            {obj.event}
          </div>
        );
      } else {
        container.push(
          <img
            alt="sadsa"
            key={i + obj.tag.toString()}
            className="history_sideImg"
            src={sideImg}
          />
        );
        container.push(
          <div key={i + obj.date.toString()} className="history_date">
            {new Date(obj.date).toLocaleString()}
          </div>
        );
        container.push(
          <div key={i} className="history_event">
            {obj.event}
          </div>
        );
      }

      // Changes value of last index, so the program will know where to continue the history from
      lastIndex = i;
      changevalue(lastIndex);

      // Increases the number till the loop has run 6 times
      timesToRun += 1;
    }
  }

  // Returns a div which contains the history data
  return (
    <div key={lastIndex} className="history_container">
      {data}
    </div>
  );
};
