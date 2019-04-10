import React from "react";
import { Link } from "react-router-dom";

const CarItem = ({ brand, model, carNumber, year, id, deleteCar }) => {
  return (
    <tr>
      <td>
        <Link
          className="list-group-item-action fa fa-arrow-circle-right ml-4"
          to={`/my-cars/${id}/`}
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
