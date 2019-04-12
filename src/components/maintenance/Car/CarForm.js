import React, { Component, Select } from "react";
import { Redirect } from "react-router-dom";
import carService from "../../../services/CarService";
import DDBBCars from "./BBDD_Cars";

const validations = {
  brand: value => {
    let message;
    if (!value || value === "") {
      message = "Brand is require";
    }
    return message;
  },
  model: value => {
    let message;
    if (!value || value === "") {
      message = "Model is require";
    }
    return message;
  },
  carNumber: value => {
    let message;
    if (!value || value === "") {
      message = "Car number needed";
    }
    return message;
  },
  engine: value => {
    let message;
    if (!value || value === "") {
      message = "Please, select one";
    }
    return message;
  },
  year: value => {
    let message;
    if (!value || value === "") {
      message = "Year needed";
    }
    return message;
  },
  km: value => {
    let message;
    if (!value || value === "") {
      message = "Enter the actual car´s KMs";
    }
    return message;
  }
};

class CarForm extends Component {
  state = {
    car:{
      brand: "",
      model: "",
      carNumber: "",
      engine: "",
      year: "",
      km: "",
    },

    errors: {
      brand: validations.brand(),
      model: validations.model(),
      carNumber: validations.carNumber(),
      engine: validations.engine(),
      year: validations.year(),
      km: validations.km()
    },
    marcas: Object.keys(DDBBCars.carsModels),
    modelos: "",
    save: false 
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      car: {
        ...this.state.car,
        [name]: value
      }, 
    }, console.log ("campo", name, "valor", value))
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("pre then", this.state.car)
    carService.addCar(this.state.car)
    .then(
      (car) => this.setState({ car: {...this.state.car, ...car}, saved: true }, console.log("post then", this.state.car)),
      (error) => {
        const errors  = error.response.data;
        this.setState({
          errors: {
            ...this.state.errors,
            ...errors,
          }
        })
      })
    }
  // handleChangeMarca(event) {
  //   console.log("Esto es lo select:", event.target.value)
  //   this.setState({marca: event.target.value});
  // }

  //  getModelo () {
  //    console.log ("Que es",Object.keys(DDBBCars.carsModels[this.state.marcas]) )
  //   }

  render() {
    if (this.save) {
      return (<Redirect  to="/my-cars"/>)
    }

    return (
      <div className="jumbotron ">
        <div className="form-group">
          <label for="sel1">Brand:</label>
          <select className="form-control" id="sel1">
            {this.state.marcas.map((marca, index) => (
              <option
                name="brand"
                key={index}
                value={this.state.brand}
                onHandleChange={this.handleChange}>
                {marca}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label for="sel1">Model:</label>
          <input
            type="model"
            className="form-control mb-2 mr-sm-2"
            id="model"
            name="model"
            value={this.state.model}
            onHandleChange={this.handleChange}
          />
          {/* <select className="form-control" id="sel1">
          {
            this.modelos.map((modelo, index) => (
            <option key={index}>{modelo}</option>
          ))}
          </select> */}
        </div>
        <div className="engine-select">
          <label className="radio-inline mx-2">
            <input type="radio" name="optradio" name="engine" value={this.state.engine} onHandleChange={this.handleChange}/> Gasoline
          </label>
          <label className="radio-inline mx-2">
            <input type="radio" name="optradio" name="engine" value={this.state.engine} onHandleChange={this.handleChange}/> Diesel
          </label>
          <label className="radio-inline mx-2">
            <input type="radio" name="optradio" name="engine" value={this.state.engine} onHandleChange={this.handleChange}/> Hybrid
          </label>
          <label className="radio-inline mx-2">
            <input type="radio" name="optradio" name="engine" value={this.state.engine} onHandleChange={this.handleChange}/> Electric
          </label>
        </div>

        <form className="form-inline mt-3" action="">
          <label for="car-number" className="mr-sm-2" >
            Car Number:
          </label>
          <input
            type="car-number"
            className="form-control mb-2 mr-sm-2"
            id="car-number"
            placeholder="1234-XXX"  
            name="carNumber"  
            value={this.state.carNumber}
            onHandleChange={this.handleChange}        
          />
          <label for="year" className="mr-sm-2">
            Year:
          </label>
          <input type="year" className="form-control mb-2 mr-sm-2" id="year" name="year" placeholder="2000" value={this.state.year} onHandleChange={this.handleChange}/>
          <label for="km" className="mr-sm-2" >
            Kilometers:
          </label>
          <input type="km" className="form-control mb-2 mr-sm-2" id="km" name="km" placeholder="23189" value={this.state.km} onHandleChange={this.handleChange}/>
          <div className="submit-button col-12">
            <button
              type="submit"
              className="btn btn-success mb-2 mt-5"
              onClick={this.handleSubmit}
            >
              Submit <i className="fa fa-check ml-3"/>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default CarForm;
