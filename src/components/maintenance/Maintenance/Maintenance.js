import React, { Component } from "react";
import CarForm from "../Car/CarForm";

class Maintenance extends Component {

  state = {
    isModalOpen: false,
    isModalClose: false
  };
  
  handleOpenModal = () => this.setState({ isModalOpen: true });
  handleCloseModal = () => this.setState({ isModalOpen: false});

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
                    <div classNameName="modal-footer .modal-sm">
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
          <div className="card mt-1 mb-1">
            <div className="card-header">
              <a
                className="card-link"
                data-toggle="collapse show"
                href="#collapseOne"
              >
                OIL
              </a>
            </div>
            <div
              id="collapseOne"
              className="collapse show"
              data-parent="#accordion"
            >
              <div className="card d-flex flex-row p-3 text-black">
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

          <div className="card mt-1 mb-1">
            <div className="card-header">
              <a
                className="collapsed card-link"
                data-toggle="collapse"
                href="#collapseTwo"
              >
                FILTER OIL
              </a>
            </div>
            <div
              id="collapseTwo"
              className="collapse show"
              data-parent="#accordion"
            >
              <div className="card-body">Lorem ipsum..</div>
            </div>
          </div>

          <div className="card mt-1 mb-1">
            <div className="card-header">
              <a className="collapsed card-link" data-toggle="collapse" href="">
                Collapsible Group Item #3
              </a>
            </div>
            <div
              id="collapseThree"
              className="collapse show"
              data-parent="#accordion"
            >
              <div className="card-body">Lorem ipsum..</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Maintenance;
