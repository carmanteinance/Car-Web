import React from 'react';

const Maintenance = () => {
//es una clase por tener que actualizar el estado de los KM?

  return(

    <div className="jumbotron">

      <div className="card d-flex flex-row p-3 bg-secondary text-white">
        <div className="card-body text-center">
          <h4 className="card-title">Marca coche</h4>
          <p className="card-text">Modelo coche</p>
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">KM</h5>
          <p className="card-text">Modelo coche</p>

          {/* <!-- Button to Open the Modal --> */}
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#myModal">
              Update KM
            </button>

            {/* <!-- The Modal --> */}
            <div className="modal fade" id="myModal">
              <div className="modal-dialog modal-sm">
                <div className="modal-content">

                  {/* <!-- Modal Header --> */}
                  <div className="modal-header">
                    <h4 className="modal-title">Modal Heading</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                  </div>

                  {/* <!-- Modal body --> */}
                  <form className="modal-body" placeholder="enter the actual kms"></form>

                  {/* <!-- Modal footer --> */}
                  <div className="modal-footer">
                    <button type="button" className="btn btn-success" data-dismiss="modal">Update</button>
                  </div>

                </div>
              </div>
            </div>
        </div>
      </div>

      <div id="accordion">
        <div className="card mt-1 mb-1">
          <div className="card-header">
            <a className="card-link" data-toggle="collapse" href="">
              Collapsible Group Item #1
            </a>
          </div>
          <div id="collapseOne" className="collapse" data-parent="#accordion">
            <div className="card-body">
              Lorem ipsum..
            </div>
          </div>
        </div>

        <div className="card mt-1 mb-1">
          <div className="card-header">
            <a className="collapsed card-link" data-toggle="collapse" href="">
              Collapsible Group Item #2
            </a>
          </div>
          <div id="collapseTwo" className="collapse" data-parent="#accordion">
            <div className="card-body">
              Lorem ipsum..
            </div>
          </div>
        </div>

        <div className="card mt-1 mb-1">
          <div className="card-header">
            <a className="collapsed card-link" data-toggle="collapse" href="">
              Collapsible Group Item #3
            </a>
          </div>
          <div id="collapseThree" className="collapse" data-parent="#accordion">
            <div className="card-body">
              Lorem ipsum..
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Maintenance;