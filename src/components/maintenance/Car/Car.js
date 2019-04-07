import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import CarService from '../../../services/CarService'




class Car extends Component {

  render(){

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
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
                <td>john@example.com</td>
                <a href="#" className="list-group-item-action fa fa-arrow-circle-right mt-3 ml-4"> </a>
              </tr>
            </tbody>
          </table>
        <Link className="btn btn-outline-primary btn-block" to="/my-cars/newCar"> <i className="fa fa-car mr-2"/>+ <strong>  ADD CAR</strong></Link>
      </div>
    </div>
    )
  }
}


export default Car;