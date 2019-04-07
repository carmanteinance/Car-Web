import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="row text-center mt-5">
      <div className="col-12 mb-4">
        <Link className="btn btn-secondary" to="/cars-list"> <i className="fa fa-car mr-2"/>  MIS COCHES</Link>
      </div>
      <div className="col-12 mb-4">
        <Link className="btn btn-secondary" to="/alerts"> <i className="fa fa-exclamation-triangle mr-2"/>  ALERTAS</Link>
      </div>
      <div className="col-12 ">
        <Link className="btn btn-secondary" to="/talleres"> <i className="fa fa-tools mr-2"/> TALLERES</Link>
      </div>
    </div>
  );
}

export default Home;