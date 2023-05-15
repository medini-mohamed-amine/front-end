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
          <h1 className={style.titre}>Toutes les sociétés</h1>
          <div className={style.cards}>
            {data.Company.company &&
              data.Company.company.map((card, index) => (
                <div className={style.card}>
                  <h3>{card.nomsociete}</h3>
                  <img src={card.logo} width={100} height={70} />
                  <p>
                    <b>Num Tel:</b> {card.numerotel}
                  </p>
                  <p>
                    <b>Adresse:</b> {card.adresse}
                  </p>
                  <p>
                    <b>Email: </b> {card.email}
                  </p>
                  <p>
                    <b>Prix: {card.prix} DT</b>
                  </p>
                  <p>
                    <b>Poids Max: {card.poids} KG</b>
                  </p>
                  <p>
                    <b>Temps: {card.temps} Heures</b>
                  </p>
                  <p>
                    <b>Gouvernorat:</b> {card.gouvernorat}
                  </p>
                  <p>
                    <b>Description:</b> {card.description}
                  </p>
                  <button className={style.btn1}>afficher plus</button>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Societes;
