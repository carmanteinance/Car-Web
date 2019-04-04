import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div className="row text-center mt-5">
      <div className="col-12 mb-2">
        <Link className="btn btn-primary" to="/cars-list"><i className="fa fa-tag"/> Mis coches</Link>
      </div>
      <div className="col-12">
        <Link className="btn btn-primary" to="/cars-list">Mis coches</Link>
      </div>
      <div className="col-12">
        <Link className="btn btn-primary" to="/cars-list">Mis coches</Link>
      </div>
    </div>
  );
}