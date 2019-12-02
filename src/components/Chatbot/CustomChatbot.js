import React from "react";
import ChatBot from "react-simple-chatbot";
import I18n from '../../components/Element/LanguageSwticher/I18n';
import { ThemeProvider } from 'styled-components';


function CustomChatbot(props) {
    const theme = {
        background: '#f76f07',
        fontFamily: 'Helvetica Neue',
        headerBgColor: '#f76f07',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#f76f07',
        botFontColor: '#fff',
        userBubbleColor: '#f76f07',
        userFontColor: '#4a4a4a',
      };

   const config = {
     width: "300px",
     height: "400px",
     color:"orange",
     floating: true
   };
   const steps = [
   {
     id: "Greet",
     message: "Moikka! Miten menee?",
     trigger: "2"
   },
   {
    id: '2',
    options: [
      { value: 1, label: 'Hyvin', trigger: '4' },
      { value: 2, label: 'En osaa sanoa', trigger: '5' },
      { value: 3, label: 'Huonosti', trigger: '3' },
    ],
  },
  {
    id: '3',
    message: 'Hitsi. Mikä vaivaa?',
    end: true
  },
  {
    id: '4',
    message: 'Noni tosi hyvä',
    end: true,
  },
  {
    id: '5',
    message: 'Onko jotain mielenpäällä?',
    end: true,
  },
];

   return <ChatBot theme={theme} steps={steps} {...config} />;
  }
  export default CustomChatbot;