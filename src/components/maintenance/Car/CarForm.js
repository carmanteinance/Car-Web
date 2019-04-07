import React, { Component, Select } from 'react'
import {Redirect} from 'react-router-dom'
import carService from '../../../services/CarService'


const validations = {
  brand: (value) => {
    let message;
    if (!value || value === '') {
      message = 'Brand is require';
      }
    return message;
  },
  model: (value) => {
    let message;
    if (!value || value === '') {
      message = 'Model is require';
    }
      return message;
  },
  carNumber: (value) => {
    let message;
    if (!value || value === '') {
      message = 'Car number needed';
    }
      return message;
  },
  engine: (value) => {
    let message;
    if (!value || value === '') {
      message = 'Please, select one';
    }
      return message;
  },
  year: (value) => {
    let message;
    if (!value || value === '') {
      message = 'Year needed';
    }
      return message;
  },
  km: (value) => {
    let message;
    if (!value || value === '') {
      message = 'Enter the actual car´s KMs';
    }
      return message;
  }
}


class CarForm extends Component {

  state = {
    brand: '',
    model: '',
    carNumber: '',
    engine: '',
    year: '',
    km:'',

    errors: {
      brand: validations.brand(),
      model: validations.model(),
      carNumber: validations.carNumber(),
      engine: validations.engine(),
      year: validations.year(),
      km: validations.km(),
    },
    touch: {}
  }

 render(){

  const { isAuthenticated, errors, user} =  this.state;
    
   return(

  //   <div>
  //   <Select
  //     name="form-field-name"
  //     value={this.state.value}
  //     onChange={this.handleChange}
  //     clearable={this.state.clearable}
  //     searchable={this.state.searchable}
  //     labelKey='name'
  //     valueKey='countryCode'
  //     options={this.state.cities}                  
  //   />
  // </div>

  <div className="jumbotron">
      <div className="form-group">
        <label for="sel1">Brand:</label>
          <select className="form-control" id="sel1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
      </div>
      <div className="form-group">
        <label for="sel1">Model:</label>
          <select className="form-control" id="sel1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
      </div>


      <label className="radio-inline mx-2"><input type="radio" name="optradio"/> Gasoline</label>
      <label className="radio-inline mx-2"><input type="radio" name="optradio"/> Diesel</label>
      <label className="radio-inline mx-2"><input type="radio" name="optradio"/> Hybrid</label>
      <label className="radio-inline mx-2"><input type="radio" name="optradio"/> Electric</label>
  
      <form class="form-inline mt-3" action="">
        <label for="car-number" class="mr-sm-2">Car Number:</label>
          <input type="car-number" class="form-control mb-2 mr-sm-2" id="car-number"/>
        <label for="year" class="mr-sm-2">Year:</label>
          <input type="year" class="form-control mb-2 mr-sm-2" id="year"/>
        <label for="km" class="mr-sm-2">Kilometers:</label>
          <input type="km" class="form-control mb-2 mr-sm-2" id="km"/>
      </form>
        <button type="submit" class="btn btn-primary mb-2">Submit</button>
  </div>


   )

 
 
 
  }
 


}
export default CarForm; 