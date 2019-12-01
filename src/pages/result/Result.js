import React, { useState } from "react";
import CustomChatbot from "../chatbot/CustomChatbot";


export default function Result(props) {


    return (
        <div className="thankText_container">
            <div className="thankText">
                Thank you for finishing the quiz!
            </div>
            <CustomChatbot />

        </div>
    );
}
