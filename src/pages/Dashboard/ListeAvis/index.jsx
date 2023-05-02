import React from "react";

import styleavis from "./avisstyle.module.css";
import DeleteIcon from '@mui/icons-material/Delete';

const Listeavis = () => {
  return (
    <table  className={styleavis.table}>
      <tr className={styleavis.tr}>
        <th className={styleavis.th}>ID Client:</th>
        <th className={styleavis.th}>Nom Client:</th>
        <th className={styleavis.th}>ID Société</th>
        <th className={styleavis.th}>Nom Société:</th>
        <th className={styleavis.th}>L'avis</th>
        <th className={styleavis.th}>Supprimer:</th>
      </tr>
      <tr className={styleavis.table}>
        <td className={styleavis.td}>1</td>
        <td className={styleavis.td}>Peter</td>
        <td className={styleavis.td}>Griffin</td>
        <td className={styleavis.td}>$100</td>
        <td className={styleavis.td}>$100</td>
        <td className={styleavis.td}><DeleteIcon /></td>
      </tr>
      <tr className={styleavis.table}>
        <td className={styleavis.td}>2</td>
        <td className={styleavis.td}>Peter</td>
        <td className={styleavis.td}>Griffin</td>
        <td className={styleavis.td}>$100</td>
        <td className={styleavis.td}>$100</td>
        <td className={styleavis.td}><DeleteIcon /></td>
      </tr>
      <tr className={styleavis.table}>
        <td className={styleavis.td}>3</td>
        <td className={styleavis.td}>Lois</td>
        <td className={styleavis.td}>Griffin</td>
        <td className={styleavis.td}>$150</td>
        <td className={styleavis.td}>$100</td>
        <td className={styleavis.td}><DeleteIcon /></td>
      </tr>
      <tr className={styleavis.table}>
        <td className={styleavis.td}>4</td>
        <td className={styleavis.td}>Joe</td>
        <td className={styleavis.td}>Swanson</td>
        <td className={styleavis.td}>$300</td>
        <td className={styleavis.td}>$100</td>
        <td className={styleavis.td}><DeleteIcon /></td>
      </tr>
      <tr className={styleavis.table}>
        <td className={styleavis.td}>5</td>
        <td className={styleavis.td}>Cleveland</td>
        <td className={styleavis.td}>Brown</td>
        <td className={styleavis.td}>$250</td>
        <td className={styleavis.td}>$100</td>
        <td className={styleavis.td}><DeleteIcon /></td>
      </tr>
    </table>
  );
};

export default Listeavis;
