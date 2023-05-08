import React, { useEffect } from "react";

import styleclient from "./clientstyle.module.css";
import DeleteIcon from "@mui/icons-material/Delete";

import { ShowListeClients } from "../../../Redux/ListeClientsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Listeclients = () => {
  const data = useSelector((state) => state.ListeClients.listeclient);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ShowListeClients());
  }, []);
  console.log(data);

  return (
    <table className={styleclient.table}>
      <tr className={styleclient.tr}>
        <th className={styleclient.th}>ID:</th>
        <th className={styleclient.th}>Nom:</th>
        <th className={styleclient.th}>Prenom:</th>
        <th className={styleclient.th}>Email:</th>
        <th className={styleclient.th}>Supprimer:</th>
      </tr>
      {data &&
        data.map((data, index) => (
          <tr className={styleclient.table}>
            <td className={styleclient.td}>{data.idutilisateur}</td>
            <td className={styleclient.td}>{data.nom}</td>
            <td className={styleclient.td}>{data.prenom}</td>
            <td className={styleclient.td}>{data.email}</td>
            <td className={styleclient.td}>
              <DeleteIcon />
            </td>
          </tr>
        ))}
    </table>
  );
};

export default Listeclients;
