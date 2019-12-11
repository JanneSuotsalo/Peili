import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

function CustomChatbot(props) {
  const theme = {
    background: props.chatBotBgColor,
    headerBgColor: props.chatBotColor,
    headerFontColor: "#fff",
    headerFontSize: "25px",
    botBubbleColor: "#f76f07",
    botFontColor: "#fff",
    userBubbleColor: "#f76f07",
    userFontColor: "#4a4a4a"
  };

  const config = {
    floating: true
  };
  let steps;
  if (props.normal) {
    steps = [
      {
        id: "Greet",
        message: "Moikka! Miten menee?",
        trigger: "1"
      },
      {
        id: "1",
        options: [
          { value: 1, label: "Hyvin", trigger: "11" },
          { value: 2, label: "En osaa sanoa", trigger: "12" },
          { value: 3, label: "Huonosti", trigger: "13" }
        ]
      },

      // 1 -->
      {
        id: "11",
        message:
          "Hienoa jatka samaan malliin! Oliko sinulla jotain muuta asiaa?",
        trigger: "110"
      },
      {
        id: "110",
        options: [
          { value: 1, label: "Kyllä", trigger: "111" },
          { value: 2, label: "Ei", trigger: "112" }
        ]
      },
      {
        id: "111",
        message: "Mikä mietityttää?",
        trigger: "1110"
      },
      {
        id: "112",
        message: "Oli hauska jutella!",
        end: true
      },
      {
        id: "1110",
        options: [
          { value: 1, label: "Haluasin tehdä uuden kyselyn", trigger: "1111" },
          {
            value: 2,
            label: "Haluan löytää lähimmän kaupunki olohuoneen",
            trigger: "1112"
          },
          { value: 3, label: "Haluan muokata profiiliani", trigger: "1113" }
        ]
      },
      {
        id: "1111",
        message: 'Löydät uuden kyselyn sovelluksen "Testit" sivulta.',
        end: true
      },
      {
        id: "1112",
        message:
          'Järjestöjen tiedot, kuten kaupunki olohuoneet voit löytää järjestö infosta, sovelluksen "Järjestöt" sivulta.',
        end: true
      },
      {
        id: "1113",
        message:
          "Omaa profiilia ja sen asetuksia voi muokata profiili sivulta.",
        end: true
      },

      // 2 -->
      {
        id: "12",
        message: "Vai niin, tulit vain rupattelemaan kanssani?",
        trigger: "120"
      },
      {
        id: "120",
        options: [
          { value: 1, label: "Joo", trigger: "121" },
          {
            value: 2,
            label: "Etsin ohjeita sovelluksen käyttöön",
            trigger: "122"
          },
          { value: 3, label: "Vahingos", trigger: "123" }
        ]
      },
      {
        id: "121",
        message: "Haluaisitko kertoa itsestäsi jotakin?",
        trigger: "1210"
      },
      {
        id: "122",
        message: "Mitä ominaisutta etsit?",
        trigger: "1220"
      },
      {
        id: "123",
        message: "No vahinkoja sattuu, ei se mitään!",
        end: true
      },
      {
        id: "1210",
        options: [
          { value: 1, label: "Joo", trigger: "1211" },
          { value: 2, label: "Ei", trigger: "1212" }
        ]
      },
      {
        id: "1211",
        message:
          'Testit ovat oiva tapa kertoa minulle lisää sinusta, niiden avulla voin myös ehdottaa aktiviteettaja yms. Suuntaa sovelluksen "testit" sivulle.',
        end: true
      },
      {
        id: "1212",
        message: "Haluat puhua jostakin muusta, mistä?",
        trigger: "12120"
      },
      {
        id: "12120",
        options: [
          { value: 1, label: "Urheilusta", trigger: "x" }, // trigger: '12121'
          { value: 2, label: "Videopeleistä", trigger: "x" }, // trigger: '12122'
          { value: 3, label: "Kaupunki olohuoneista", trigger: "x" }, // trigger: '12123'
          { value: 4, label: "Koulusta", trigger: "x" } // trigger: '12124'
        ]
      },
      {
        id: "x",
        message:
          "Pahoittelut minua ei ole kehitetty vielä, niin pitkälle että voisin käydä keskusteluja näistä aiheista.",
        end: true
      },
      {
        id: "1220",
        options: [
          { value: 1, label: "Asetuksia", trigger: "1221" },
          { value: 2, label: "Järjestöjä", trigger: "1222" },
          { value: 3, label: "Testejä", trigger: "1223" },
          { value: 4, label: "Sovellus historiaani", trigger: "1224" }
        ]
      },
      {
        id: "1221",
        message:
          "Sovellus asetukset löytyvät profiili sivulta, sielä voi asetuksien lisäksi nähdä käyttäjän tilastoja.",
        end: true
      },
      {
        id: "1222",
        message:
          "Järjestöt ja niiden tiedot löytyy Järjestö sivulta, sielä voi myöskin tilata järjestöjen uutisvirran syötteeseen, katsoa järjestön sijainnin kartalla ja mennä järjestön omille kotisivuille. Uutisvirrassa voit löytää esimerkiksi uusia tapahtumia joista et tiennyt ennen!",
        end: true
      },
      {
        id: "1223",
        message:
          "Testejä pääset tekemään testit sivulta. Kun teet testejä ansaitset rahaa käyttäjätilillesi. Testien tekeminen voi myös auttaa minua löytämään sinulle sopivia järjestöjä tai tapahtumia yms.",
        end: true
      },
      {
        id: "1224",
        message:
          "Sovelluksen historia sivulla näet jokaisen käyttäjätilin tapahtuman testien tekemisestä, salasanan muutokseen.",
        end: true
      },

      // 3 -->
      {
        id: "13",
        message: "Hitsi. Mikä vaivaa?",
        trigger: "130"
      },
      {
        id: "130",
        options: [
          { value: 1, label: "Yksinäisyys", trigger: "131" },
          { value: 2, label: "Tylsyys", trigger: "13x" }
        ]
      },
      {
        id: "131",
        message: "Haluisitko löytää uusia kavereita?",
        trigger: "1310"
      },
      {
        id: "13x",
        message:
          "Järjestöt sivulta voit löytää infoa eri järjestöjen tapahtumista. Tapahtumissa on paljon erilaista tekemistä ja mahdollisuus löytää uusia kavereita.",
        end: true
      },
      {
        id: "1310",
        options: [
          { value: 1, label: "Joo", trigger: "13x" },
          { value: 2, label: "Ei kiitos", trigger: "1312" }
        ]
      },
      {
        id: "1312",
        message:
          "Ehkä haluaisit tehdä joitakin testejä, niin saisin paremman kuvan olostasi. Erilaisia testäjä löydät Testit sivulta.",
        end: true
      }
    ];
  } else {
    steps = [
      {
        id: "Greet",
        message:
          "Moikka! Tilasit uuden järjestön. Se löytyy syötteestä ihan alhaalta",
        trigger: "2"
      },
      {
        id: "2",
        message: "Ei mulla muuta",
        end: true
      }
    ];
  }

  return (
    <ThemeProvider theme={theme}>
      <ChatBot className="moi" steps={steps} {...config} />
    </ThemeProvider>
  );
}
export default CustomChatbot;
