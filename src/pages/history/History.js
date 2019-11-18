import React, { useState } from "react";
import "./History.css"
//import history from "./History.json"

export default function History(props) {
    let buffer = []
    var historyData = require("./History.json")

    // Sorting the json file to be ordered by date
    historyData.sort((a, b) => new Date(a.date) - new Date(b.date));

    console.log(historyData);
    for (var i = 0; i < historyData.length; i++)
    {
        var obj = historyData[i];
        console.log(obj.tag);
        
        let container = []
        buffer.push(<div className={'history_' + obj.tag.toString() +"Container"}>{container}</div>)
        container.push(<div className="history_tag">{obj.tag}</div>)
        container.push(<div className="history_event">{obj.event}</div>)
        container.push(<div className="history_date">{obj.date}</div>)

    }

    return (
        <div className="history_container">
            {buffer}
        </div>
    );
}


/*if(obj.tag == "Profile"){
            let profile = []
            buffer.push(<div className="history_profileContainer">{profile}</div>)
            profile.push(<div className="history_tag">{obj.tag}</div>)
            profile.push(<div className="history_date">{obj.date}</div>)
            profile.push(<div className="history_time">{obj.time}</div>)
            profile.push(<div className="history_time">{obj.event}</div>)
        }

        if(obj.tag == "Quiz"){
            let quiz = []
            buffer.push(<div className="history_quizContainer">{quiz}</div>)
            quiz.push(<div className="history_tag">{obj.tag}</div>)
            quiz.push(<div className="history_date">{obj.date}</div>)
            quiz.push(<div className="history_time">{obj.time}</div>)
            quiz.push(<div className="history_time">{obj.event}</div>)
        }

        if(obj.tag == "Shop"){
            let shop = []
            buffer.push(<div className="history_shopContainer">{shop}</div>)
            shop.push(<div className="history_tag">{obj.tag}</div>)
            shop.push(<div className="history_date">{obj.date}</div>)
            shop.push(<div className="history_time">{obj.time}</div>)
            shop.push(<div className="history_time">{obj.event}</div>)
        }*/
