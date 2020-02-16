import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import UsersHeader from "./UsersHeader";
import MqDivDropdown from "../../containers/Components/MqDivDropdown";
import MqDivDropdownHead from "../../containers/Components/MqDivDropdownHead";
import MqDivDropdownBody from "../../containers/Components/MqDivDropdownBody";
import MqSelect from "../../containers/Components/MqSelect";

class Users extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: [
        {
          _id: 1,
          fullName: 'Đậu Minh Quân',
          email: 'dauminhquantlu@gmail.com',
          address: '250 Kim Giang, Hoàng Mai',
          city: 'Hà Nội',
          state: 'HN',
          postal: '100000',
          role: '1',
          status: 1,
          avatar: 'https://img.thuthuattinhoc.vn/uploads/2019/01/13/hinh-anh-thien-nhien-de-thuong-lang-man-nhat_104526618.jpg',
          phoneNumber: '037111000222'
        },
        {
          _id: 2,
          fullName: 'Đậu Minh Quân',
          email: 'dauminhquantlu@gmail.com',
          address: '250 Kim Giang, Hoàng Mai',
          city: 'Hà Nội',
          state: 'HN',
          postal: '100000',
          role: '1',
          status: 1,
          avatar: 'https://img.thuthuattinhoc.vn/uploads/2019/01/13/hinh-anh-thien-nhien-de-thuong-lang-man-nhat_104526618.jpg',
          phoneNumber: '037111000222'
        },
        {
          _id: 3,
          fullName: 'Đậu Minh Quân',
          email: 'dauminhquantlu@gmail.com',
          address: '250 Kim Giang, Hoàng Mai',
          city: 'Hà Nội',
          state: 'HN',
          postal: '100000',
          role: '1',
          status: 1,
          avatar: 'https://img.thuthuattinhoc.vn/uploads/2019/01/13/hinh-anh-thien-nhien-de-thuong-lang-man-nhat_104526618.jpg',
          phoneNumber: '037111000222'
        },
        {
          _id: 4,
          fullName: 'Đậu Minh Quân',
          email: 'dauminhquantlu@gmail.com',
          address: '250 Kim Giang, Hoàng Mai',
          city: 'Hà Nội',
          state: 'HN',
          postal: '100000',
          role: '1',
          status: 1,
          avatar: 'https://img.thuthuattinhoc.vn/uploads/2019/01/13/hinh-anh-thien-nhien-de-thuong-lang-man-nhat_104526618.jpg',
          phoneNumber: '037111000222'
        },
      ],
      selectedAll: false,
      showModelDelete: false,
      deleteItemStatus: false,
      showAlertDeleteItemResult: true,
      from: 1,
      to: 20,
      currentPage: 1,
      usersSelected: {},
    }
  }
  componentDidMount() {
    this.setState(state => {
      state.users.forEach(user => {
        state.usersSelected[user._id] = false
      })
      return state
    })
  }
  changeSelectUser(_id,checked){
    const rjs = this
    this.setState(state => {
      state.usersSelected[_id] = checked
      if(rjs.checkSelectedAll(state.usersSelected)){
        state.selectedAll = true
      }else{
        state.selectedAll = false
      }
      return state
    })
  }
  checkNoSelectedUsers(){
    let keys = Object.keys(this.state.usersSelected)
    for(let i = 0 ; i < keys.length ;i++){
      if(this.state.usersSelected[keys[i]]){
        return false
      }
    }
    return true
  }
  checkSelectedAll(usersSelected){
    let keys = Object.keys(usersSelected)
    for(let  i = 0 ; i < keys.length; i++){
      if(!usersSelected[keys[i]]){
        return false
      }
    }
    return true
  }
  render() {
    const {users} = this.state
    return (
      <main>
        <UsersHeader/>
        <div className="content">
          <div className="mb-3">
            <div className="row">
              <div className="col-md-2">
                <div className="form-group">
                  <div className="btn-group">
                    <MqDivDropdown
                      hideoutclick={1}
                      disabled={this.checkNoSelectedUsers()}
                    >
                      <MqDivDropdownHead
                        button={1}
                        className="btn btn-light"
                      >
                        Chọn 100 người dùng
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
              <div className="col-md-6">
                <div className="form-group">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search..." />
                    <span className="input-group-append">
												<button className="btn btn-light" type="button"><i className="icon-search4"></i></button>
											</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="table-responsive table-no-break">
              <table className="table">
                <thead>
                <tr>
                  <th><input type="checkbox" checked={this.state.selectedAll} onChange={(e) => {
                    let checked = e.target.checked

                    if(checked){
                      this.setState(state => {
                        state.selectedAll = true
                        let keys = Object.keys(state.usersSelected)

                        for(let i = 0 ; i < keys.length ; i++){
                          state.usersSelected[keys[i]] = true
                        }
                        return state
                      })
                    }else{
                      this.setState(state => {
                        state.selectedAll = false
                        let keys = Object.keys(state.usersSelected)

                        for(let i = 0 ; i < keys.length ; i++){
                          state.usersSelected[keys[i]] = false
                        }
                        return state
                      })
                    }

                  }} /></th>
                  <th>Người dùng</th>
                  <th>Email</th>
                  <th>Địa chỉ</th>
                  <th>Quyền</th>
                  <th>Thao tác</th>
                </tr>
                </thead>
                <tbody>
                {
                  users.map(user => (
                    <tr>
                      <td><input type="checkbox"
                                 checked={this.state.usersSelected[user._id]} onChange={(event) => {
                        this.changeSelectUser(user._id,event.target.checked)
                      }}
                      /></td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="mr-3">
                            <img src={user.avatar}
                                 className="rounded-circle" width="60" height="60" alt=""/>
                          </div>
                          <div>
                            <a href="#" className="text-default font-weight-semibold letter-icon-title">{user.fullName}</a>
                            {
                              user.status == 1? (
                                <div className="text-muted font-size-sm">
                                  <span className="badge badge-mark border-blue mr-1"></span> Active
                                </div>
                              ): (
                                <div className="text-muted font-size-sm">
                                  <span className="badge badge-mark border-red mr-1"></span> Block
                                </div>
                              )
                            }
                          </div>
                        </div>
                      </td>
                      <td>
                        <a href={"mailto:"+user.email}>{user.email}</a>
                      </td>
                      <td>250, Kim Giang, Hoang Mai, Ha Noi, 1000000, Vietnam</td>
                      <td>1</td>
                      <td className="table-custom-action">
                        <button className="btn btn-light" onClick={() => {

                        }}>Sửa</button>
                        <button className="btn btn-danger" onClick={() => {

                        }}>Xóa</button>
                      </td>
                    </tr>
                  ))
                }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Users;
