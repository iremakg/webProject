import { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import AdminResultsComp from "./AdminResultsComp";
import { Ogrenciler } from "../Helpers/Ogrenciler";

import "../Design/adminResults.css";

export default function AdminResults() {
  const { data, soruData } = useContext(QuizContext);

  let tempCompArray = [];

  let tempArray = [];

  function float2int(value) {
    return value | 0;
  }
  Ogrenciler.forEach((ogrObject) => {
    if (ogrObject.ad !== "Super") {
      ogrObject.dersler.forEach((dersObject) => {
        tempArray.push({
          ad: ogrObject.ad,
          soyad: ogrObject.soyad,
          ders: dersObject,
          vizeNot: "-",
          finalNot: "-",
        });
      });
    }
  });

  data.forEach((dataObject) => {
    tempArray.forEach((taObject) => {
      if (
        dataObject.adi === taObject.ad &&
        dataObject.soyadi === taObject.soyad &&
        dataObject.ders === taObject.ders
      ) {
        if (dataObject.sinavTuru === "Vize") {
          taObject.vizeNot = float2int(dataObject.puan);
        } else {
          taObject.finalNot = float2int(dataObject.puan);
        }
      }
    });
  });

  tempCompArray = tempArray.map((e) => (
    <AdminResultsComp
      ders={e.ders}
      ad={e.ad}
      soyad={e.soyad}
      vizeNot={e.vizeNot}
      finalNot={e.finalNot}
    />
  ));

  return (
    <div>
      <table className="content-table">
        <thead>
          <tr>
            <th>Öğrenci adı</th>
            <th>Ders adı</th>
            <th>Vize notu</th>
            <th>Final notu</th>
          </tr>
        </thead>
        <tbody>{tempCompArray}</tbody>
      </table>
      {soruData}
    </div>
  );
}