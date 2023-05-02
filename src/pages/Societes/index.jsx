import React, { useEffect } from "react";

import style from "./style.module.css";
import { companyinformations } from "../../Redux/CompanySlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Societes = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(companyinformations());
  }, []);

  const cards = [
    {
      nomSociété: "société 1",
      NumTel: "95 303 201",
      Adresse: "adresse 1",
      Email: "kjdskjhsj@gmail.com",
      Prix: "200DT",
      Poids: "entre 1 KG et 5 KG",
      Temps: "3 Jours",
      Gouvernorat:
        "Grand Tunis ,bizerte ,béja ,sousse ,gabes ,monastir ,mehdia",
    },
  ];
  console.log("=================", data.Company.company);

  return (
    <div>
      <section className="section1">
        <div className={style.container}>
          <h1>Toutes les sociétés</h1>
          <div className={style.cards}>
            {/* {cards.map((card, i) => (
              (data.map((user.index) =>{
                return (
              <div className={style.card}  key={index}>
                <h3>{card.societes0.nomsociete}</h3>
                <p>
                  <b>Num Tel:</b> {card.societes.numerotel}
                </p>
                <p>
                  <b>Adresse:</b> {card.Adresse}
                </p>
                <p>
                  <b>Email:</b> {card.Email}
                </p>
                <p>
                  <b>Prix:</b> {card.Prix}
                </p>
                <p>
                  <b>Poids:</b> {card.Poids}
                </p>
                <p>
                  <b>Temps:</b> {card.Temps}
                </p>
                <p>
                  <b>Gouvernorat:</b> {card.Gouvernorat}
                </p>
                <button className={style.btn1}>show more</button>
              </div>=}
            ))} */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Societes;
