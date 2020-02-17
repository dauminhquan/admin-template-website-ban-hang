import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import usersData from './UsersData'
import UserHeader from "./UserHeader";
import MqLoading from "../../containers/Components/MqLoading";

class User extends Component {

  render() {

    const user = usersData.find( user => user.id.toString() === this.props.match.params.id)

    const userDetails = user ? Object.entries(user) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]

    return (
      <main>
        <UserHeader/>
        <div className="content">
          <div className="card">
            <div className="card-header header-elements-inline">
              <h5 className="card-title">Profile information</h5>
              <div className="header-elements">
                <div className="list-icons">
                  <a className="list-icons-item" data-action="collapse"></a>
                  <a className="list-icons-item" data-action="reload"></a>
                  <a className="list-icons-item" data-action="remove"></a>
                </div>
              </div>
            </div>

            <div className="card-body">
              <form action="#">
                <div className="form-group">
                  <label>Full name</label>
                  <input type="text" value="Eugene" className="form-control"/>
                </div>

                <div className="form-group">
                  <div className="row">
                    <div className="col-md-6">
                      <label>Address line 1</label>
                      <input type="text" value="Ring street 12" className="form-control"/>
                    </div>
                    <div className="col-md-6">
                      <label>Address line 2</label>
                      <input type="text" value="building D, flat #67" className="form-control"/>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="row">
                    <div className="col-md-4">
                      <label>City</label>
                      <input type="text" value="Munich" className="form-control"/>
                    </div>
                    <div className="col-md-4">
                      <label>State/Province</label>
                      <input type="text" value="Bayern" className="form-control"/>
                    </div>
                    <div className="col-md-4">
                      <label>ZIP code</label>
                      <input type="text" value="1031" className="form-control"/>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                      <input type="text" readOnly="readonly" value="eugene@kopyov.com" className="form-control"/>
                    </div>
                    <div className="col-md-6">
                      <label>Your country</label>
                      <select className="form-control form-control-select2" data-fouc>
                        <option value="germany" selected>Germany</option>
                        <option value="france">France</option>
                        <option value="spain">Spain</option>
                        <option value="netherlands">Netherlands</option>
                        <option value="other">...</option>
                        <option value="uk">United Kingdom</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="row">
                    <div className="col-md-6">
                      <label>Phone #</label>
                      <input type="text" value="+99-99-9999-9999" className="form-control" />
                      <span className="form-text text-muted">+99-99-9999-9999</span>
                    </div>

                    <div className="col-md-6">
                      <label>Upload profile image</label>
                      <input type="file" className="form-input-styled" data-fouc/>
                      <span className="form-text text-muted">Accepted formats: gif, png, jpg. Max file size 2Mb</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <button type="submit" className="btn btn-primary">Save changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default User;
