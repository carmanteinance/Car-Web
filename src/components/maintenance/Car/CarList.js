import React, {Component} from 'react';
import CarService from '../../../services/CarService';
import { Link } from 'react-router-dom';
import CarItem from './CarItem';


class Car extends Component {
    componentDidMount() {
        this.listAllCars()
    }

    state = {
      cars: []
    }

    listAllCars () {
      CarService.listCar().then((cars) => {
        this.setState({ cars })
      });
    }
    
    deleteHandler(id) {
      this.deleteCar(id).then(() => {
        this.listAllCars()
      })
    }

    deleteCar(id) {
      return CarService.deleteCar(id)
        .then((message => console.log(message)))
    }


    render() {
      return(
        <div className="container mt-5">
          <div className="jumbotron-info">
            <table className="table table-striped">
                <thead>
                  <tr>
                    <th></th>
                    <th>BRAND</th>
                    <th>MODEL</th>
                    <th>CAR NUMBER</th>
                    <th>YEAR</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.cars.map(car => 
                    <CarItem 
                      key={car.id}
                      {...car}
                      deleteCar={(id) => this.deleteHandler(id)}>
                    </CarItem>)
                  }
                </tbody>
            </table>
            <Link className="btn btn-outline-primary btn-block" to="/my-cars/newCar"> <i className="fa fa-car mr-2"/>+ <strong>  ADD CAR</strong></Link>
          </div>
        </div>
      )
      }
    };
  
export default Car;