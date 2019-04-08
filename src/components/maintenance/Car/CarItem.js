import React from 'react';
import { Link } from 'react-router-dom';

const CarItem = ({brand,model, carNumber, year, id}) => {
  return (
    <tr>
    <td>{brand}</td>
    <td>{model}</td>
    <td>{carNumber}</td>
    <td>{year}</td>
    <td>
      <Link
        className="list-group-item-action fa fa-arrow-circle-right mt-3 ml-4"
        to={`/my-cars/${id}/`}
      />
    </td>
  </tr>
  )

};

export default CarItem;
