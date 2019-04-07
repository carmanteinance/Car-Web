import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import CarService from '../../../services/CarService'



const Car = ({ id, brand, model, fetchColumns }) => {

    console.log ({ id, brand, model, fetchColumns })
    const deleteColumn = () => {
      CarService.deleteColumn(id)
        .then(fetchColumns)
    }


    return(
      <div className="container mt-5">
        <div className="jumbotron-info">
          <table class="table table-striped">
              <thead>
                <tr>
                  <th>BRAND</th>
                  <th>MODEL</th>
                  <th>CAR NUMBER</th>
                  <th>YEAR</th>
                  <th>select</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{Car.brand}</td>
                  <td>{model}</td>
                  <td>john@example.com</td>
                  <td>john@example.com</td>
                  <Link className="list-group-item-action fa fa-arrow-circle-right mt-3 ml-4" to={`/my-cars/${id}/`}></Link>
                </tr>
              </tbody>
          </table>
          <Link className="btn btn-outline-primary btn-block" to="/my-cars/newCar"> <i className="fa fa-car mr-2"/>+ <strong>  ADD CAR</strong></Link>
        </div>
      </div>
    )
}



export default Car;