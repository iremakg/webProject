import { useEffect, useState } from "react";
import { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import Select from "react-select";
import AllQuestions from "./AllQuestions";
import { SinavSaatleri } from "../Helpers/SinavSaatleri";
import { Vizeler } from "../Helpers/Vizeler";
import { Finaller } from "../Helpers/Finaller";
import "../Design/sinavOlustur.css";


export default function SinavOlustur() {
  const { setSayfaState, dersAdi, sinavTuru, tempSinavSaat } =
    useContext(QuizContext);

  const [soru, setSoru] = useState("");
  const [cevapA, setCevapA] = useState("");
  const [cevapB, setCevapB] = useState("");
  const [cevapC, setCevapC] = useState("");
  const [cevapD, setCevapD] = useState("");
  const [cevap, setCevap] = useState("");
  const [tempVize, settempVize] = useState([]); //vizeler
  const [questionArray, setquestionArray] = useState([]); // sorular
  const [tempFinal, settempFinal] = useState([]); //finaller
  let vizeBool = true;
  let finalBool = true;

  const cevaplar = [
    { value: "A", label: "A" },
    { value: "B", label: "B" },
    { value: "C", label: "C" },
    { value: "D", label: "D" },
  ];

  useEffect(() => {
    setquestionArray(
      tempVize.map((i) => (
        <AllQuestions
          key={i.soru}
          soru={i.soru}
          cevapA={i.cevapA}
          cevapB={i.cevapB}
          cevapC={i.cevapC}
          cevapD={i.cevapD}
          cevap={i.cevap}
        ></AllQuestions>
      ))
    );
  }, [tempVize]);

  useEffect(() => {
    setquestionArray(
      tempFinal.map((i) => (
        <AllQuestions
          key={i.soru}
          soru={i.soru}
          cevapA={i.cevapA}
          cevapB={i.cevapB}
          cevapC={i.cevapC}
          cevapD={i.cevapD}
          cevap={i.cevap}
        ></AllQuestions>
      ))
    );
  }, [tempFinal]);

  function soruyuEkle() {
    if (
      dersAdi === "" ||
      cevapA === "" ||
      cevapB === "" ||
      cevapC === "" ||
      cevapD === "" ||
      cevap === ""
    ) {
      alert("Lütfen Tüm Alanları doldurunuz");
    } else {
      if (sinavTuru === "Vize") {
        Vizeler.forEach((element) => {
          if (element.ders === dersAdi) {
            vizeBool = false;
          }
        });
        if (!vizeBool) {
          alert("Bu sınav zaten oluşturulmuş");
        } else {
          settempVize((oldarray) => [
            ...oldarray,
            {
              ders: dersAdi,
              soru: soru,
              cevapA: cevapA,
              cevapB: cevapB,
              cevapC: cevapC,
              cevapD: cevapD,
              cevap: cevap,
            },
          ]);
          document.getElementById("inputA").value = "";
          document.getElementById("inputB").value = "";
          document.getElementById("inputC").value = "";
          document.getElementById("inputD").value = "";
          document.getElementById("inputSoru").value = "";

          setCevapA("");
          setCevapB("");
          setCevapC("");
          setCevapD("");
        }
      } else if (sinavTuru === "Final") {
        Finaller.forEach((element) => {
          if (element.ders === dersAdi) {
            finalBool = false;
          }
        });
        if (!finalBool) {
          alert("Bu sınav zaten oluşturulmuş");
        } else {
          settempFinal((oldarray) => [
            ...oldarray,
            {
              ders: dersAdi,
              soru: soru,
              cevapA: cevapA,
              cevapB: cevapB,
              cevapC: cevapC,
              cevapD: cevapD,
              cevap: cevap,
            },
          ]);
          document.getElementById("inputA").value = "";
          document.getElementById("inputB").value = "";
          document.getElementById("inputC").value = "";
          document.getElementById("inputD").value = "";
          document.getElementById("inputSoru").value = "";
          setCevapA("");
          setCevapB("");
          setCevapC("");
          setCevapD("");
        }
      } else {
        alert("Sınav Türünü Seçiniz");
      }
    }
  }

  function sinaviTamamla() {
    SinavSaatleri.push(tempSinavSaat);

    if (tempVize[0] === undefined && tempFinal[0] === undefined) {
      alert("Sınav Oluşturulamadı.");
    } else {
      if (sinavTuru === "Vize") {
        Vizeler.push(...tempVize);
        alert("Sınav oluşturuldu");
        settempVize([]);
        setSayfaState("Profil");
      } else if (sinavTuru === "Final") {
        Finaller.push(...tempFinal);
        alert("Sınav oluşturuldu");
        settempFinal([]);
        setSayfaState("Profil");
      }
    }
  }

  return (
    <div className="olustur">
      <div className="cevaplar">
        <label>Bu alana soruyu giriniz</label>
        <input
          
          id="inputSoru"
          onChange={(e) => setSoru(e.target.value)}
        ></input>
      </div>
      <div className="cevaplar">
        <label>Bu alana cevapları giriniz</label>
        <input
          id="inputA"
          onChange={(e) => setCevapA(e.target.value)}
        ></input>
        <input
          id="inputB"
          onChange={(e) => setCevapB(e.target.value)}
        ></input>
        <input
          id="inputC"
          onChange={(e) => setCevapC(e.target.value)}
        ></input>
        <input
          id="inputD"
          onChange={(e) => setCevapD(e.target.value)}
        ></input>
       
      </div>
      <div className="cevap">
        <label>Bu alanda doğru cevabı seçiniz</label>
        <Select
          options={cevaplar}
          onChange={(e) => {
            setCevap(e.value);
          }}
        />
      </div>
      <div>
        <button onClick={soruyuEkle}>Soruyu Ekle</button>
        <button onClick={sinaviTamamla}>Sınavı Tamamla</button>
      </div>
      {questionArray}
    </div>
  );
}