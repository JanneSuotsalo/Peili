import React, { useState } from "react";
import "./History.css"
//import history from "./History.json"
import sideImg from "./historySide.png"
import sideImgEnd from "./historySideEnd.png"
import sideImgEnd2 from "./Ellipse.png"
import CustomChatbot from "../chatbot/CustomChatbot";


export default function History(props) {
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


    return (
        <div className="history_container">
            {buffer}
                       <CustomChatbot />

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
