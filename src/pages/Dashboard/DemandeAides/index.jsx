import React from "react";

import styledemandeaide from "./demandeaide.style.css";
import DeleteIcon from '@mui/icons-material/Delete';

const DemandeAides = () => {
  return (
    <table  className={styledemandeaide.table}>
      <tr className={styledemandeaide.tr}>
        <th className={styledemandeaide.th}>ID:</th>
        <th className={styledemandeaide.th}>Client:</th>
        <th className={styledemandeaide.th}>Question:</th>
        <th className={styledemandeaide.th}>Réponse:</th>
        <th className={styledemandeaide.th}>Supprimer:</th>
      </tr>
      <tr className={styledemandeaide.table}>
        <td className={styledemandeaide.td}>1</td>
        <td className={styledemandeaide.td}>Peter</td>
        <td className={styledemandeaide.td}>Griffin</td>
        <td className={styledemandeaide.td}>$100</td>
        <td className={styledemandeaide.td}><DeleteIcon /></td>
      </tr>
      <tr className={styledemandeaide.table}>
        <td className={styledemandeaide.td}>2</td>
        <td className={styledemandeaide.td}>Peter</td>
        <td className={styledemandeaide.td}>Griffin</td>
        <td className={styledemandeaide.td}>$100</td>
        <td className={styledemandeaide.td}><DeleteIcon /></td>
      </tr>
      <tr className={styledemandeaide.table}>
        <td className={styledemandeaide.td}>3</td>
        <td className={styledemandeaide.td}>Lois</td>
        <td className={styledemandeaide.td}>Griffin</td>
        <td className={styledemandeaide.td}>$150</td>
        <td className={styledemandeaide.td}><DeleteIcon /></td>
      </tr>
      <tr className={styledemandeaide.table}>
        <td className={styledemandeaide.td}>4</td>
        <td className={styledemandeaide.td}>Joe</td>
        <td className={styledemandeaide.td}>Swanson</td>
        <td className={styledemandeaide.td}>$300</td>
        <td className={styledemandeaide.td}><DeleteIcon /></td>
      </tr>
      <tr className={styledemandeaide.table}>
        <td className={styledemandeaide.td}>5</td>
        <td className={styledemandeaide.td}>Cleveland</td>
        <td className={styledemandeaide.td}>Brown</td>
        <td className={styledemandeaide.td}>$250</td>
        <td className={styledemandeaide.td}><DeleteIcon /></td>
      </tr>
    </table>
    
  );
};

export default DemandeAides;