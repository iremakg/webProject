import "./App.css";
import React, { useState } from "react";
import { QuizContext } from "./Helpers/Context";
import Login from "./Components/Login";
import Sinav from "./Components/Sinav";
import Notlarım from "./Components/Notlarım";
import Sinavlarim from "./Components/Sinavlarim";
import SinavOlustur from "./Components/SinavOlustur";
import AdminResults from "./Components/AdminResults";
import Navi from "./Components/Navi"
import AdminNavi from "./Components/AdminNavi"
import SinavOlusturFirst from "./Components/SinavOlusturFirst";

function App() {
  const [sayfaState, setSayfaState] = useState("Login");
  const [eposta, setEposta] = useState("");
  const [sifre, setSifre] = useState("");
  const [chosenDers, setChosenDers] = useState("");
  const [chosenTur, setChosenTur] = useState("");
  const [tumCevaplar, setTumCevaplar] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [studentSurname, setStudentSurname] = useState("");
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]);
  const [tempAllQuestionsArray,setTempAllQuestionsArray]=useState([])
  const [soruData, setSoruData] = useState([]);
  const [dersAdi, setDersAdi] = useState("");
  const [sinavTuru, setsinavTuru] = useState("");
  const [tempSinavSaat, setTempSinavSaat] = useState([]);
  

  return (
    <div className="App">

      <QuizContext.Provider
        value={{tempSinavSaat, setTempSinavSaat,sinavTuru, setsinavTuru,sayfaState,setSayfaState,eposta,setEposta,sifre,setSifre,chosenDers,setChosenDers,chosenTur,setChosenTur,tumCevaplar,setTumCevaplar,studentName,setStudentName,studentSurname,setStudentSurname,results,setResults,data,setData,tempAllQuestionsArray,setTempAllQuestionsArray,soruData, setSoruData,dersAdi, setDersAdi
        }}>
        {(sayfaState==="Login" || eposta==="admin")?null: <Navi></Navi>}
        {(eposta==="admin" && sayfaState!=="Login")?<AdminNavi></AdminNavi>:null}
        {sayfaState === "Login" && < Login />}
        {sayfaState === "Sinav" && <Sinav />}
        {sayfaState === "SonucEkrani" && <Notlarım />}
        {sayfaState === "Sinavlarim" && <Sinavlarim />}
        {sayfaState === "SinavOlustur" && <SinavOlustur />}
        {sayfaState==="AdminResults" && <AdminResults/>}
        {sayfaState==="SinavOlusturFirst" && <SinavOlusturFirst/>}

      </QuizContext.Provider>
    </div>
  );
}

export default App;