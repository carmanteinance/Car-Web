import React, { Component } from "react";
import CarService from "../../../services/CarService"
import queryString from 'query-string'
import CarForm from "../Car/CarForm";

const typeEvents = ["Oil", "Filter Oil", "BreaksKit", "AC", "Tires", "Air Filter", "Battery", "Suspension", "Chain", "Coolant", "Plugs", "Heaters", "Battery Coolant"];


class Maintenance extends Component {

  state = {
    maintenance:[],
    isModalOpen: false,
    isCollapseOpen: false,
  };

  handleOpenModal = () => this.setState({ isModalOpen: true });
  handleCloseModal = () => this.setState({ isModalOpen: false});

  handleOpenCollapse = () => this.setState({ isCollapseOpen: true });
  handleCloseCollapse = () => this.setState({ isCollapseOpen: false});

//   componentDidMount() {
//     const query = queryString.parseUrl(this.location.search)
//     console.log("Esto es..", query)
//    // this.listOneCar(values.id)
// }

  listAllCars () {
    CarService.listOneCar().then((maintenance) => {
      this.setState({ maintenance })
    });
  }

  render() {
    return (
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
            <button
              type="button"
              className="btn btn-warning"
              onClick={this.handleOpenModal}
            >
              Update KM
            </button>

            {/* <!-- The Modal --> */}
            {this.state.isModalOpen && (
              <div id="myModal">
                <div className="modal-dialog modal-sm">
                  <div className="modal-content">
                    {/* <!-- Modal Header --> */}
                    <div className="modal-header">
                      <h4 className="modal-title">Modal Heading</h4>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        onClick={this.handleCloseModal}
                      >
                        &times;
                      </button>
                    </div>

                    {/* <!-- Modal body --> */}
                    <div className="modal-body .modal-sm">
                      <form
                        className="modal-body"
                        placeholder="enter the actual kms"
                      >
                        <div className="form-group">
                          <input type="update-km" className="form-control" id="update-km" placeholder="Insert kms"/>
                        </div>
                      </form>
                    </div>

                    {/* <!-- Modal footer --> */}
                    <div className="modal-footer .modal-sm">
                      <button
                        type="button"
                        className="btn btn-success"
                        data-dismiss="modal"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div id="accordion">
         {typeEvents.map( (event, index) => (
          <div className="card mt-1 mb-1" key={index}>
            <div className="card-header">
              <a
                className="card-link text-center"
                data-toggle={`collapse ${this.state.isCollapseOpen && 'show'} `}
                href="#collapseOne"
                onClick={this.handleOpenCollapse}
              >
                {event}
              </a>
            </div>
            <div
              id="collapseOne"
              className={`collapse ${this.state.isCollapseOpen && 'show'} `}
              data-parent="#accordion"        
            >
              <div className="card d-flex flex-row p-3 text-black">
              <button
                        type="button"
                        className="close"
                        data-dismiss="collapse"
                        onClick={this.handleCloseCollapse}
                      >
                        &times;
                      </button>
                <div className="card-body">
                  <p className="card-title">
                    Last Date Change: <span> fecha</span>
                  </p>
                  <p className="card-text">
                    Kms last change: <span> kilometros</span>
                  </p>
                </div>
                <div className="card-body">
                  <p className="card-title">
                    Next date change: <span> fecha</span>
                  </p>
                  <p className="card-text">
                    Next kms to change: <span> kilometros</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
         ))}
        </div>
      </div>
    );
  }
}

export default Maintenance;
