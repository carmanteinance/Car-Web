import React, { Component } from "react";
import CarService from "../../../services/CarService";

const typeEvents = [
  "oil",
  "filterOil",
  "breaksKit",
  "ac",
  "tires",
  "airFilter",
  "battery",
  "suspension",
  "chain",
  "coolant",
  "plugs",
  "heaters",
  "batteryCoolant"
];

class Maintenance extends Component {
  state = {
    car: {},
    touch: {},
    isModalOpen: false,
    isCollapseOpen: false
  };

  handleOpenModal = () => this.setState({ isModalOpen: true });
  handleCloseModal = () => this.setState({ isModalOpen: false });

  handleOpenCollapse = () => this.setState({ isCollapseOpen: true });
  handleCloseCollapse = () => this.setState({ isCollapseOpen: false });

  // handleOpen = event => {
  //   const { name } = event.target;
  //   console.log("entra y es", name);
  //   this.setState(
  //     {
  //       touch: {
  //         ...this.state.touch,
  //         [name]: true
  //       }
  //     },
  //     console.log("que hay", this.touch)
  //   );
  // };

  componentDidMount() {
    const carID = this.props.match.params.id;
    CarService.listOneCar(carID).then(car => {
      this.setState({ car });
    });
  }

  render() {
    const { car } = this.state;
    
    return (
      <div className="jumbotron">
        <div className="card d-flex flex-row p-3 bg-secondary text-white">
          <div className="card-body text-center">
            <h2 className="card-title">{car.brand}</h2>
            <h4 className="card-text">
              <strong>{car.model}</strong>
            </h4>
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">Kilometres: </h5>
            <p className="card-text">
              {" "}
              <strong>{car.km} kms</strong>
            </p>

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
                          <input
                            type="update-km"
                            className="form-control"
                            id="update-km"
                            placeholder="Insert kms"
                          />
                        </div>
                      </form>
                    </div>

                    {/* <!-- Modal footer --> */}
                    <div className="modal-footer .modal-sm">
                      <button
                        type="button"
                        className="btn btn-success"
                        data-dismiss="modal"
                        onClick={this.handleCloseModal}
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
          {car && Object.keys(car).length > 0 && typeEvents.map((typeEvent, index) => { 
          const maintenanceItem =  Object.keys(this.state.car.maintenance)[index];
      
            
            return(
              <div className="card mt-1 mb-1" key={typeEvent}>
                <div className="card-header">
                  <a
                    className="card-link text-center"
                    data-toggle="collapse show"
                    href="#collapseOne"
                    name={typeEvent}
                    onClick={this.handleOpenCollapse}
                  >
                    {typeEvent}
                  </a>
                </div>
                <div
                  id="collapseOne"
                  className={`collapse ${this.state.isCollapseOpen && "show"} `}
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
                        Last Date Change: <span>fecha</span>
                      </p>
                      <p className="card-text">
                        Kms last change: <span>{car.maintenance[maintenanceItem].kmLastChanged}</span>
                      </p>
                    </div>
                    <div className="card-body">
                      <p className="card-title">
                        Next date change: <span>{car.maintenance[maintenanceItem].nextTimeChange}</span>
                      </p>
                      <p className="card-text">
                        Next kms to change: <span>{car.maintenance[maintenanceItem].nextKmChange}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          )}
        </div>
      </div>
    );
  }
}

export default Maintenance;
