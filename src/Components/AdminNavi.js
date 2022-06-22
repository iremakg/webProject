import { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import "../Design/navi.css";

const Navi = () => {
  const { setSayfaState, setEposta, setSoruData } = useContext(QuizContext);

  const sinavlarPage = () => {
    setSayfaState("SinavOlusturFirst");
  };
  const resultPage = () => {
    setSoruData([]);
    setSayfaState("AdminResults");
  };

  const exit = () => {
    setEposta("");
    setSayfaState("Login");
  };

  return (
    <div className="Navi">
      <div className="Navi2">
        <button onClick={resultPage}>Sınavlar</button>
        <button onClick={sinavlarPage}>Yeni Sınav Ekle</button>
        <button onClick={exit}>Çıkış </button>
      </div>
    </div>
  );
};

export default Navi;