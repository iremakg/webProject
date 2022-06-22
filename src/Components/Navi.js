import { useContext, useState } from "react";
import { QuizContext } from "../Helpers/Context";
import "../Design/navi.css";

const Navi = () => {
  const { setSayfaState, setSoruData, sayfaState } = useContext(QuizContext);
  const [secilenButton, setSecilenButton] = useState("");

  const sinavlarPage = () => {
    if (sayfaState === "Sinav") {
      alert("Sınav sırasında bu alanı kullanamazsınız");
    } else {
      setSecilenButton("Sinavlar");
      setSayfaState("Sinavlarim");
    }
  };
  const resultPage = () => {
    if (sayfaState === "Sinav") {
      alert("Sınav sırasında bu alanı kullanamazsınız");
    } else {
      setSecilenButton("Notlarım");
      setSoruData([]);
      setSayfaState("SonucEkrani");
    }
  };

  const exit = () => {
    if (sayfaState === "Sinav") {
      alert("Sınav sırasında bu alanı kullanamazsınız");
    } else {
      setSecilenButton("Cikis");
      setSayfaState("Login");
    }
  };

  return (
    <div className="Navi">
      <div className="Navi2">
        <button
          className={secilenButton === "Notlarım" ? "fokus2" : ""}
          onClick={resultPage}
        >
          Notlarım
        </button>
        <button
          className={secilenButton === "Sinavlar" ? "fokus2" : ""}
          onClick={sinavlarPage}
        >
          Sınavlar
        </button>
        <button
          className={secilenButton === "Cikis" ? "fokus2" : ""}
          onClick={exit}
        >
          Çıkış Yap
        </button>
      </div>
    </div>
  );
};

export default Navi;