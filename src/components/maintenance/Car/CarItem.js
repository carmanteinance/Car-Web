import React from "react";
import { Link } from "react-router-dom";

const CarItem = ({ brand, model, carNumber, year, id, deleteCar }) => {

  // getDDMMMYYY (year){
  //   let dd= year.getDate()
  //   let mm =year.getMonth()+1
  //   let yyyy =year.getFullYear()
  //   if(dd<10){
  //     dd='0'+dd
  //   }
  //   if(mm<10){
  //     mm='0'+mm
  //   }
  //   return dd + '-' + mm + '-' + yyyy
  //     }

  return (
    <tr>
      <td>
        <Link
          className="list-group-item-action fa fa-arrow-circle-right ml-4"
          to={`/maintenance/${id}/`}
        />
      </td>
      <td>{brand}</td>
      <td>{model}</td>
      <td>{carNumber}</td>
      <td>{year}</td>
      <td>
        <i
          className="list-group-item-action fa fa-trash-alt ml-4"
          onClick={() => deleteCar(id)}
        />
      </td>
    </tr>
  );
};

export default CarItem;
