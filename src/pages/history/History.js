import React, { useState, useEffect } from "react";
import "./History.css"
//import history from "./History.json"
import sideImg from "./historySide.png"
import sideImgEnd from "./historySideEnd.png"
import sideImgEnd2 from "./Ellipse.png"

export default function History() {
    const [state, setState] = useState(0);
    //const [lastDate, setLastDate] = useState("");
    let buffer = []
    let number = 0
    let lastDate = ""
    let historyData = require("./History.json")
    // Sorting the json file to be ordered by date
    historyData.sort((a, b) => new Date(b.date) - new Date(a.date));

    getData(3, "2090-04-23T18:25:43.511Z")

    function getData(amount, whereToStartDate){
        console.log("state:"+number)
            for (var i = 0; i < historyData.length && number < amount; i++)
                {
                var obj = historyData[i];
                let container = []

                if(new Date(obj.date) < new Date(whereToStartDate)){
                    console.log("smaller")
                    buffer.push(<div className={'history_' + obj.tag.toString() +"Container"}>{container}</div>);

                    // uses the right image on the left
                    if(i+1 === amount){
                    container.push(<img className="history_sideImgEnd" src={sideImgEnd2}/>);
                        if(number +1 === amount){
                            lastDate = obj.date;
                        }
                    } else {
                    container.push(<img className="history_sideImg" src={sideImg}/>);
                    }
                    container.push(<div className="history_date">{obj.date}</div>);
                    container.push(<div className="history_event">{obj.event}</div>);
                   number += 1
            }
        }
    }


    return (
        <div className="history_container">
            {buffer}
            <button onClick={() => getData(5,lastDate)}>Show more</button>
        </div>
    );
}



/*export default function History() {
    
    let buffer = []
    let historyData = require("./History.json")

    // Sorting the json file to be ordered by date
    historyData.sort((a, b) => new Date(b.date) - new Date(a.date));

    for (var i = 0; i < historyData.length; i++)
    {
        var obj = historyData[i];
        
        let container = []
        buffer.push(<div className={'history_' + obj.tag.toString() +"Container"}>{container}</div>);
        //buffer.push(<div className="history_tag">{obj.tag}</div>)

        // uses the right image on the left
        if(i+1 === historyData.length){
        container.push(<img className="history_sideImgEnd" src={sideImgEnd2}/>);
        } else {
        container.push(<img className="history_sideImg" src={sideImg}/>);
        }
        container.push(<div className="history_date">{obj.date}</div>);
        container.push(<div className="history_event">{obj.event}</div>);
    }

    function test(){
        console.log("Test")
        buffer.push(<div className="test">Test</div>);
    }


    return (
        <div className="history_container">
            {buffer}
            <button onClick={test}>test</button>
        </div>
    );
}*/


/*export default function History() {
    const [state, setState] = useState(0);
    //const [lastDate, setLastDate] = useState("");
    let buffer = []
    let number = 0
    let lastDate = ""
    let historyData = require("./History.json")
    // Sorting the json file to be ordered by date
    historyData.sort((a, b) => new Date(b.date) - new Date(a.date));

    getData(3, "2090-04-23T18:25:43.511Z")

    function getData(amount, whereToStartDate){
        console.log("state:"+number)
            for (var i = 0; i < historyData.length && number < amount; i++)
                {
                var obj = historyData[i];
                let container = []

                if(new Date(obj.date) < new Date(whereToStartDate)){
                    console.log("smaller")
                    buffer.push(<div className={'history_' + obj.tag.toString() +"Container"}>{container}</div>);

                    // uses the right image on the left
                    if(i+1 === amount){
                    container.push(<img className="history_sideImgEnd" src={sideImgEnd2}/>);
                        if(number +1 === amount){
                            lastDate = obj.date;
                        }
                    } else {
                    container.push(<img className="history_sideImg" src={sideImg}/>);
                    }
                    container.push(<div className="history_date">{obj.date}</div>);
                    container.push(<div className="history_event">{obj.event}</div>);
                   number += 1
            }
        }
    }


    return (
        <div className="history_container">
            {buffer}
            <button onClick={() => getData(5,lastDate)}>Show more</button>
        </div>
    );
}*/


/*export default function History() {
    const [state, setState] = useState([]);
return (
    <div className='App'>
      <InfiniteList 
        state={state}
        setState={setState}
      />
    </div>
  );
};

function InfiniteList(props) {
    useEffect(() => {
        getData();
      }, []);


      const getData = () => {
        let historyData = require("./History.json")

        // Sorting the json file to be ordered by date
        historyData.sort((a, b) => new Date(b.date) - new Date(a.date));




      }

      return (
        <ul id='list'>
          { props.state.map((img, i) => (
              <li key={i} style={{backgroundImage: `url(${img})`}}/>))}
        </ul>
      );

}*/