import React from "react";

import stylesociete from "./societestyle.module.css";
import DeleteIcon from '@mui/icons-material/Delete';

const Listesocietes = () => {
  return (
    <table  className={stylesociete.table}>
      <tr className={stylesociete.tr}>
        <th className={stylesociete.th}>ID:</th>
        <th className={stylesociete.th}>Nom Société:</th>
        <th className={stylesociete.th}>Email Société:</th>
        <th className={stylesociete.th}>Adresse Société:</th>
        <th className={stylesociete.th}>Num Tél Société:</th>
        <th className={stylesociete.th}>Supprimer:</th>
      </tr>
      <tr className={stylesociete.table}>
        <td className={stylesociete.td}>1</td>
        <td className={stylesociete.td}>Peter</td>
        <td className={stylesociete.td}>Griffin</td>
        <td className={stylesociete.td}>$100</td>
        <td className={stylesociete.td}>$100</td>
        <td className={stylesociete.td}><DeleteIcon /></td>
      </tr>
      <tr className={stylesociete.table}>
        <td className={stylesociete.td}>2</td>
        <td className={stylesociete.td}>Peter</td>
        <td className={stylesociete.td}>Griffin</td>
        <td className={stylesociete.td}>$100</td>
        <td className={stylesociete.td}>$100</td>
        <td className={stylesociete.td}><DeleteIcon /></td>
      </tr>
      <tr className={stylesociete.table}>
        <td className={stylesociete.td}>3</td>
        <td className={stylesociete.td}>Lois</td>
        <td className={stylesociete.td}>Griffin</td>
        <td className={stylesociete.td}>$150</td>
        <td className={stylesociete.td}>$100</td>
        <td className={stylesociete.td}><DeleteIcon /></td>
      </tr>
      <tr className={stylesociete.table}>
        <td className={stylesociete.td}>4</td>
        <td className={stylesociete.td}>Joe</td>
        <td className={stylesociete.td}>Swanson</td>
        <td className={stylesociete.td}>$300</td>
        <td className={stylesociete.td}>$100</td>
        <td className={stylesociete.td}><DeleteIcon /></td>
      </tr>
      <tr className={stylesociete.table}>
        <td className={stylesociete.td}>5</td>
        <td className={stylesociete.td}>Cleveland</td>
        <td className={stylesociete.td}>Brown</td>
        <td className={stylesociete.td}>$250</td>
        <td className={stylesociete.td}>$100</td>
        <td className={stylesociete.td}><DeleteIcon /></td>
      </tr>
    </table>
  );
};

export default Listesocietes;
