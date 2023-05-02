import React from "react";

import styleclient from "./clientstyle.module.css";
import DeleteIcon from '@mui/icons-material/Delete';

const listeclients = () => {
  return (
    <table  className={styleclient.table}>
      <tr className={styleclient.tr}>
        <th className={styleclient.th}>ID:</th>
        <th className={styleclient.th}>Nom:</th>
        <th className={styleclient.th}>Prenom:</th>
        <th className={styleclient.th}>Email:</th>
        <th className={styleclient.th}>Supprimer:</th>
      </tr>
      <tr className={styleclient.table}>
        <td className={styleclient.td}>1</td>
        <td className={styleclient.td}>Peter</td>
        <td className={styleclient.td}>Griffin</td>
        <td className={styleclient.td}>$100</td>
        <td className={styleclient.td}><DeleteIcon /></td>
      </tr>
      <tr className={styleclient.table}>
        <td className={styleclient.td}>2</td>
        <td className={styleclient.td}>Peter</td>
        <td className={styleclient.td}>Griffin</td>
        <td className={styleclient.td}>$100</td>
        <td className={styleclient.td}><DeleteIcon /></td>
      </tr>
      <tr className={styleclient.table}>
        <td className={styleclient.td}>3</td>
        <td className={styleclient.td}>Lois</td>
        <td className={styleclient.td}>Griffin</td>
        <td className={styleclient.td}>$150</td>
        <td className={styleclient.td}><DeleteIcon /></td>
      </tr>
      <tr className={styleclient.table}>
        <td className={styleclient.td}>4</td>
        <td className={styleclient.td}>Joe</td>
        <td className={styleclient.td}>Swanson</td>
        <td className={styleclient.td}>$300</td>
        <td className={styleclient.td}><DeleteIcon /></td>
      </tr>
      <tr className={styleclient.table}>
        <td className={styleclient.td}>5</td>
        <td className={styleclient.td}>Cleveland</td>
        <td className={styleclient.td}>Brown</td>
        <td className={styleclient.td}>$250</td>
        <td className={styleclient.td}><DeleteIcon /></td>
      </tr>
    </table>
  );
};

export default listeclients;
