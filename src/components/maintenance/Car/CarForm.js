import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import carService from "../../../services/CarService";
import carModels from "./CarModels";

const engineType = ["Gasoline", "Diesel", "Hybrid", "Electric"];

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
  },
  lastITV: value => {
    let message;
    if (!value || value === "") {
      message = "Enter the last time the Car passed the ITV";
    }
    return message;
  }
};

class CarForm extends Component {
  state = {
    car: {
      brand: "BMW",
      model: "",
      carNumber: "",
      engine: "",
      year: "",
      km: "",
      lastITV: ""
    },
    errors: {
      brand: validations.brand(),
      model: validations.model(),
      carNumber: validations.carNumber(),
      engine: validations.engine(),
      year: validations.year(),
      km: validations.km(),
      lastITV: validations.lastITV()
    },
    marcas: Object.keys(carModels),
    saved: false
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState(
      {
        car: {
          ...this.state.car,
          [name]: value
        }
      },
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    carService.addCar(this.state.car).then(
      car =>
        this.setState(
          { car: { ...this.state.car, ...car }, saved: true },
        ),
      error => {
        const errors = error.response.data;
        this.setState({
          errors: {
            ...this.state.errors,
            ...errors
          }
        });
      }
    );
  };

  render() {
    if (this.state.saved) {
      return <Redirect to="/my-cars" />;
    }

    return (
      <div className="jumbotron ">
        <form className="form-group" onSubmit={this.handleSubmit}>
          <label htmlFor="sel1">Brand:</label>
          <select
            onChange={this.handleChange}
            className="form-control"
            name="brand"
            id="sel1"
          >
            {this.state.marcas.map((marca, index) => (
              <option name="brand" key={index} value={this.state.brand}>
                {marca}
              </option>
            ))}
          </select>
          <div className="invalid-feedback">{ this.state.errors.brand }</div>
          <label htmlFor="sel1 mt-4 mb-3">Model:</label>
          <select className="form-control" id="sel1" name="model" onChange={this.handleChange}>
            {(carModels[this.state.car.brand] || []).map((m, i) => (
              <option key={i}>{m}</option>
            ))}
          </select>
          <div className="invalid-feedback">{ this.state.errors.model }</div>
          <div className="engine-select mt-2">
            {engineType.map(engine => (
              <label key={engine} className="radio-inline mx-2">
                <input
                  type="radio"
                  name="engine"
                  checked={this.state.car.engine === engine}
                  value={engine}
                  onChange={this.handleChange}
                />{" "}
                {engine}
              </label>
            ))}
          </div>
          <div className="invalid-feedback">{ this.state.errors.engine }</div>
          <label htmlFor="car-number" className="mr-sm-2 mt-2">
            Car Number:
          </label>
          <input
            type="car-number"
            className="form-control mb-2 mr-sm-2"
            id="car-number"
            placeholder="1234-XXX"
            name="carNumber"
            value={this.state.carNumber}
            onChange={this.handleChange}
          />
          <div className="invalid-feedback">{ this.state.errors.carNumber }</div>
          <label htmlFor="year" className="mr-sm-2 mt-2">
            Year:
          </label>
          <input
            type="year"
            className="form-control mb-2 mr-sm-2"
            id="year"
            name="year"
            placeholder="2000"
            value={this.state.year}
            onChange={this.handleChange}
          />
          <div className="invalid-feedback">{ this.state.errors.year }</div>
          <label htmlFor="km" className="mr-sm-2 mt-2">
            Kilometers:
          </label>
          <input
            type="km"
            className="form-control mb-2 mr-sm-2"
            id="km"
            name="km"
            placeholder="23189"
            value={this.state.km}
            onChange={this.handleChange}
          />
          <div className="invalid-feedback">{ this.state.errors.km }</div>
          <label htmlFor="lastITV" className="mr-sm-2 mt-2">
            Last Yeat ITV done:
          </label>
          <input
            type="lastITV"
            className="form-control mb-2 mr-sm-2"
            id="lastITV"
            name="lastITV"
            placeholder="1998"
            value={this.state.lastITV}
            onChange={this.handleChange}
          />
          <div className="invalid-feedback">{ this.state.errors.lastITV }</div>
          <div className="submit-button col-12">
            <button type="submit" className="btn btn-success mb-2 mt-5">
              Submit <i className="fa fa-check ml-3" />
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default CarForm;
