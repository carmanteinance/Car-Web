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
    
  if (isAuthenticated) {
    return (<Redirect to="/my-profile" />)
  }

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

  <div className="main-board">
      <div class="form-group">
      <label for="sel1">Select list:</label>
      <select class="form-control" id="sel1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
      </div>


      <label class="radio-inline"><input type="radio" name="optradio"/>Option 1</label>
      <label class="radio-inline"><input type="radio" name="optradio"/>Option 2</label>
      <label class="radio-inline"><input type="radio" name="optradio"/>Option 3</label>
  
  </div>

   )

 
 
 
  }
 


}
export default CarForm; 