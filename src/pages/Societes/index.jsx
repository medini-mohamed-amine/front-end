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

  console.log("=================", data.Company.company);

  return (
    <div>
      <section className="section1">
        <div className={style.container}>
          <h1>Toutes les sociétés</h1>
          <div className={style.cards}>
            {data.Company.company &&
              data.Company.company.map((card, index) => (
                <div className={style.card}>
                  <h3>{card.nomsociete}</h3>
                  <p>
                    <b>Num Tel:</b> {card.numerotel}
                  </p>
                  <p>
                    <b>Adresse:</b> {card.adresse}
                  </p>
                  <p>
                    <b>Email:</b> {card.email}
                  </p>
                  <p>
                    <b>Prix(en DT):</b> {card.prix}
                  </p>
                  <p>
                    <b>Poids:(en KG):</b> {card.poids}
                  </p>
                  <p>
                    <b>Temps:(en H):</b> {card.temps}
                  </p>
                  <p>
                    <b>Gouvernorat:</b> {card.gouvernorat}
                  </p>
                  <p>
                    <b>Description:</b> {card.description}
                  </p>
                  <button className={style.btn1}>show more</button>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Societes;
