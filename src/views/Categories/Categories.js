import React, { Component, lazy, Suspense } from 'react';
import MqDivDropdown from "../../containers/Components/MqDivDropdown";
import MqDivDropdownHead from "../../containers/Components/MqDivDropdownHead";
import MqDivDropdownBody from "../../containers/Components/MqDivDropdownBody";
import CategoriesHeader from "./CategoriesHeader";
import MqSelect from "../../containers/Components/MqSelect";
import {Link} from "react-router-dom";
import MqPagination from "../../containers/Components/MqPagination";

class  Categories extends Component{
  constructor(props) {
    super(props);

  }
  render() {
    return(
      <main>
        <CategoriesHeader/>
        <div className="content">
          <div className="row">
            <div className="col-md-5">
              <div className="card">
                <div className="card-header header-elements-inline">
                  <h5 className="card-title">Thêm mới một danh mục</h5>
                </div>

                <div className="card-body">
                  <form action="#">
                    <fieldset className="mb-3">
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Tên danh </label>
                        <div className="col-lg-8">
                          <input type="text" className="form-control"/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Danh mục </label>
                        <div className="col-lg-8">
                          <MqSelect onChange={() => {

                          }}
                                    selectedItem={[]}

                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Mô tả</label>
                        <div className="col-lg-8">
                          <textarea className="form-control"/>
                        </div>
                      </div>

                    </fieldset>

                    <div className="text-right">
                      <button type="submit" className="btn btn-primary">Submit <i className="icon-paperplane ml-2"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="mb-0">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <div className="btn-group">
                        <MqDivDropdown
                          hideoutclick={1}
                        >
                          <MqDivDropdownHead
                            button={1}
                            className="btn btn-light"
                          >
                            Selected 100 products
                            <i className="icon-menu-open"></i>
                          </MqDivDropdownHead>
                          <MqDivDropdownBody className="dropdown-menu dropdown-menu-left">
                            <a href="#" className="dropdown-item"><i className="icon-user-lock"></i> Account securitydsdsadsadsad sdadsa sda</a>
                            <a href="#" className="dropdown-item"><i className="icon-statistics"></i> Analytics</a>
                            <a href="#" className="dropdown-item"><i className="icon-accessibility"></i> Accessibility</a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item"><i className="icon-gear"></i> All settings</a>
                          </MqDivDropdownBody>
                        </MqDivDropdown>
                      </div>
                    </div>
                  </div>

                  <div className="offset-5 col-md-3">
                    <MqDivDropdown hideoutclick={1} className="breadcrumb-elements-item dropdown p-0">
                      <MqDivDropdownHead button className="btn btn-light dropdown-toggle"thị float-right>
                        <i className="icon-gear mr-2"></i>
                        Hiển thị
                      </MqDivDropdownHead>

                      <MqDivDropdownBody className="dropdown-menu dropdown-menu-left dropdown-checkbox-body">
                        {
                          // COLUMNS.map(column => {
                          //   let id = makeid(5)
                          //   return(
                          //     <div className="dropdown-item" key={id}><input type="checkbox" id={id+'show-column'+column.name} checked={this.state.showColumns[column.name]} onChange={(e) => {
                          //       this.changeShowColumn(column,e.target.checked)
                          //     }}/>
                          //       <label className="dropdown-checkbox-label" htmlFor={id+'show-column'+column.name}> {column.text}</label>
                          //     </div>
                          //   )
                          // })
                        }
                      </MqDivDropdownBody>
                    </MqDivDropdown>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                    <tr>
                      <th><input type="checkbox"/></th>
                      <th>Tên danh mục</th>
                      <th>Danh mục cha</th>
                      <th>Mô tả</th>
                      <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td><input type="checkbox"/></td>
                      <td>Quần </td>
                      <td>Quần áo</td>
                      <td>Bán quần</td>
                      <td>
                        <button class="btn btn-light">Sửa</button>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <MqPagination className="table-pagination-right pagination align-self-end" onNext={() => {}} choosePage={1} onPrev={() => {}} from={1} to={10}/>
            </div>
          </div>

        </div>
      </main>
    )
  }
}

export default Categories

