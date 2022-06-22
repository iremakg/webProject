import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import { Ogrenciler } from "../Helpers/Ogrenciler";
import "../App.css";


export default function Login() {
  const { setSayfaState, eposta, setEposta, sifre, setSifre } =
    useContext(QuizContext);
  function kontrol() {
    Ogrenciler.forEach((ogrenci) => {
      if (ogrenci.eposta === eposta && ogrenci.sifre === sifre) {
        setSayfaState("Profil");
      }
    });
  }

  return (
    <div className="Menu">
      <label> E-Sınav Platformu</label>

      <div className="menudiv">
        <input
          placeholder="e-posta"
          onChange={(e) => setEposta(e.target.value)}
        ></input>
        <input
          placeholder="şifre"
          onChange={(e) => setSifre(e.target.value)}
          type="password"
        ></input>
      </div>
      <button onClick={kontrol}>Giriş Yap</button>
    </div>
  );
}