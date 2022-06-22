import { useContext, useState } from "react";
import { QuizContext } from "../Helpers/Context";
import Select from "react-select";
import { Dersler } from "../Helpers/Dersler";
import { Vizeler } from "../Helpers/Vizeler";
import { Finaller } from "../Helpers/Finaller";
import "../Design/sinavOlusturFirst.css";

export default function SinavOlusturFirst() {
  const {
    setSayfaState,
    sinavTuru,
    setsinavTuru,
    dersAdi,
    setDersAdi,
    setTempSinavSaat,
  } = useContext(QuizContext);

  let vizeBool = true;
  let finalBool = true;

  var date = new Date();
  var isoDateTime = new Date(
    date.getTime() - date.getTimezoneOffset() * 60000
  ).toISOString();

  const turler = [
    { value: "Vize", label: "Vize" },
    { value: "Final", label: "Final" },
  ];

  const [tarih1, setTarih1] = useState("");
  const tarih1Sec = (event) => {
    setTarih1(event.target.value);
  };
  const [tarih2, setTarih2] = useState("");
  const tarih2Sec = (event) => {
    setTarih2(event.target.value);
  };

  function Devam() {
    if (tarih1 >= tarih2) {
      alert("Sınav Zamanı Yanlış Ayarlandı");
    } else {
      if (sinavTuru === "Vize") {
        Vizeler.forEach((element) => {
          if (element.ders === dersAdi) {
            vizeBool = false;
          }
        });
        if (!vizeBool) {
          vizeBool = true;
          alert("ÖNCEDEN OLUŞTURULMUŞ SINAV");
        } else {
          setTempSinavSaat({
            ders: dersAdi,
            sinavTuru: sinavTuru,
            baslamaZamani: tarih1,
            bitisZamani: tarih2,
          });
          setSayfaState("SinavOlustur");
        }
      } else if (sinavTuru === "Final") {
        Finaller.forEach((element) => {
          if (element.ders === dersAdi) {
            finalBool = false;
          }
        });
        if (!finalBool) {
          finalBool = true;
          alert("ÖNCEDEN OLUŞTURULMUŞ SINAV");
        } else {
          setTempSinavSaat({
            ders: dersAdi,
            sinavTuru: sinavTuru,
            baslamaZamani: tarih1,
            bitisZamani: tarih2,
          });
          setSayfaState("SinavOlustur");
        }
      }
    }
  }
  return (
    <div className="sinavOlusturFirst">
      <div className="ders">
        <label>Oluşturmak istediğiniz sınavın dersini giriniz</label>
        <Select
          options={Dersler}
          onChange={(e) => {
            setDersAdi(e.value);
          }}
        ></Select>
      </div>
      <div className="tur">
        <label>Sınavın hangi türde yapılacağını giriniz</label>
        <div>
          <Select
            options={turler}
            onChange={(e) => {
              setsinavTuru(e.value);
            }}
          ></Select>
        </div>
      </div>
      <div className="saat">
        <label>Sınav ne zaman başlayacak? </label>
        <input type="datetime-local" onChange={tarih1Sec}></input>
      </div>
      <div className="saat">
        <label>Sınav ne zaman bitecek? </label>
        <input type="datetime-local" onChange={tarih2Sec}></input>
      </div>
      <div className="sinavFirstButton">
        <button onClick={Devam}>Devam</button>
      </div>
    </div>
  );
}