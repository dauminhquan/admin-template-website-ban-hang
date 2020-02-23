import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Badge, Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Table
} from 'reactstrap';
import UsersHeader from "./UsersHeader";
import MqDivDropdown from "../../containers/Components/MqDivDropdown";
import MqDivDropdownHead from "../../containers/Components/MqDivDropdownHead";
import MqDivDropdownBody from "../../containers/Components/MqDivDropdownBody";
import MqSelect from "../../containers/Components/MqSelect";
import MqLoading from "../../containers/Components/MqLoading";
import MqAlert from "../../containers/Components/MqAlert";
import {getBase64, makeId} from "../../helpers";

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
          status: "active",
          image: 'https://img.thuthuattinhoc.vn/uploads/2019/01/13/hinh-anh-thien-nhien-de-thuong-lang-man-nhat_104526618.jpg',
          phoneNumber: '037111000222',
          nation: "vn"
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
          status: "active",
          image: 'https://img.thuthuattinhoc.vn/uploads/2019/01/13/hinh-anh-thien-nhien-de-thuong-lang-man-nhat_104526618.jpg',
          phoneNumber: '037111000222',
          nation: "vn"
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
          status: "active",
          image: 'https://img.thuthuattinhoc.vn/uploads/2019/01/13/hinh-anh-thien-nhien-de-thuong-lang-man-nhat_104526618.jpg',
          phoneNumber: '037111000222',
          nation: "vn"
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
          status: "active",
          image: 'https://img.thuthuattinhoc.vn/uploads/2019/01/13/hinh-anh-thien-nhien-de-thuong-lang-man-nhat_104526618.jpg',
          phoneNumber: '037111000222',
          nation: "vn"
        },
      ],
      selectedAll: false,
      showModelDelete: false,
      deleteItemStatus: false,
      showAlertDeleteItemResult: true,
      user: {
        fullName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        postal: '',
        role: '',
        status: 0,
        image: '',
        nation: '',
        phoneNumber: '',
        base64: null
      },
      creatingUser: false,
      tempUser: {
        _id: null,
        fullName: '',
        email: '',
        address: '',
        nation: "vn",
        city: '',
        state: '',
        postal: '',
        role: '',
        status: 0,
        image: '',
        phoneNumber: ''
      },
      showModelEditUser: false,
      showModelDeleteUser: false,
      showModelDeleteUsers: false,
      UpdatingUser: false,
      deletingUser: false,
      deletingUsers: false,
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

  changeFullNameUser(fullName){
    this.setState(state => {
      state.user.fullName = fullName
      return state
    })
  }
  changeEmailUser(email){
    this.setState(state => {
      state.user.email = email
      return state
    })
  }
  changeAddressUser(address){
    this.setState(state => {
      state.user.address = address
      return state
    })
  }
  changeNationUser(nation){
    this.setState(state => {
      state.user.nation = nation
      return state
    })
  }
  changeStateUser(UState){
    this.setState(state => {
      state.user.state = UState
      return state
    })
  }
  changeCityUser(city){
    this.setState(state => {
      state.user.city = city
      return state
    })
  }
  changePostalUser(postal){
    this.setState(state => {
      state.user.postal = postal
      return state
    })
  }
  changeRoleUser(role){
    this.setState(state => {
      state.user.role = role
      return state
    })
  }
  changeStatusUser(status){
    this.setState(state => {
      state.user.status = status
      return state
    })
  }
  changePhoneNumberUser(phoneNumber){
    this.setState(state => {
      state.user.phoneNumber = phoneNumber
      return state
    })
  }

  changeFullNameTempUser(fullName){
    this.setState(state => {
      state.tempUser.fullName = fullName
      return state
    })
  }
  changeImageUser(file){
    this.setState(state => {
      state.user.image = file
      return state
    })
    getBase64(file, (result) => {
      this.setState(state => {
        state.user.base64 = result
        return state
      })
    })
  }
  changeEmailTempUser(email){
    this.setState(state => {
      state.tempUser.email = email
      return state
    })
  }
  changeAddressTempUser(adress){
    this.setState(state => {
      state.tempUser.adress = adress
      return state
    })
  }
  changeNationTempUser(nation){
    this.setState(state => {
      state.tempUser.nation = nation
      return state
    })
  }
  changeStateTempUser(state){
    this.setState(state => {
      state.tempUser.state = state
      return state
    })
  }
  changeCityTempUser(city){
    this.setState(state => {
      state.tempUser.city = city
      return state
    })
  }
  changePostalTempUser(postal){
    this.setState(state => {
      state.tempUser.postal = postal
      return state
    })
  }
  changeRoleTempUser(role){
    this.setState(state => {
      state.tempUser.role = role
      return state
    })
  }
  changeStatusTempUser(status){
    this.setState(state => {
      state.tempUser.status = status
      return state
    })
  }
  changePhoneNumberTempUser(phoneNumber){
    this.setState(state => {
      state.tempUser.phoneNumber = phoneNumber
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

  numberItemSelected(){
    let num = 0
    this.state.users.forEach(user => {
      if(this.state.usersSelected[user._id]){
        num++
      }
    })
    return num
  }
  actionEditUser(_id){
    this.setState(state => {
      let tempUser = state.users.find(item => {
        return item._id == _id
      })
      state.tempUser = Object.assign({},tempUser)
      state.showModelEditUser = true
      return state
    })
  }
  actionDeleteUser(_id){
    this.setState(state => {
      state.tempUser = state.users.find(item => {
        return item._id == _id
      })
      state.showModelDeleteUser = true
      return state
    })
  }

  createUser(){
    this.setState({
      creatingUser: true
    })
    setTimeout(() => {
      this.setState(state => {
        let newUser = state.user
        newUser.image = newUser.base64
        delete newUser.base64
        newUser._id = makeId(10)
        state.users.unshift(newUser)
        state.user = {
          name: "",
          address: "",
          image: null,
          phoneNumber: "",
          description: ""
        }
        state.creatingUser = null
        return state
      })
    },3000)
  }
  updateUser(){
    this.setState({
      updatingUser: true
    })
    setTimeout(() => {
      this.setState(state => {
        state.users = state.users.map(user => {
          if(user._id == state.tempUser._id){
            user = Object.assign({},state.tempUser)
          }
          return user
        })
        state.tempUser = {
          _id: null,
          name: "",
          description: ""
        }
        state.updatingUser = false
        state.showModelEditUser = false
        return state
      })
    },3000)
  }
  deleteUser(){
    this.setState({
      deletingUser: true
    })
    setTimeout(() => {
      this.setState(state => {

        state.users = state.users.filter(user => {
          return user._id != state.tempUser._id
        })
        state.showModelDeleteUser = false
        state.deletingUser = false
        return state
      })
    },3000)
  }
  deleteUsers(){
    this.setState({
      deletingUsers: true
    })
    setTimeout(() => {
      this.setState(state => {
        let ids = []
        state.users.forEach(user => {
          if(!state.usersSelected[user._id]){
            ids.push(user._id)
          }
        })
        state.users = state.users.filter(user => {
          return ids.includes(user._id)
        })
        state.showModelDeleteUsers = false
        state.deletingUsers = false
        return state
      })
    },3000)
  }
  render() {
    const {users,user,tempUser} = this.state
    return (
      <main>
        <UsersHeader/>
        <div className="content">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header header-elemen ts-inline">
                  <h5 className="card-title"> Thêm mới một người dùng</h5>
                </div>

                <div className="card-body">
                  <form onSubmit={(e) => {
                    this.createUser()
                    e.preventDefault()
                  }}>
                    <fieldset className="mb-3">
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Tên đầy đủ </label>
                        <div className="col-lg-8">
                          <input type="text" className="form-control" readOnly={this.state.creatingUser} value={user.fullName} onChange={(e) => {
                            this.changeFullNameUser(e.target.value)
                          }}
                                 required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Avatar </label>
                        <div className="col-lg-8">
                          <input type="file" className="form-control" onChange={(e) => {
                            this.changeImageUser(e.target.files[0])
                          }}

                          />
                          {this.state.user.base64 ? (
                            <img className="img-80" ref="create-image" src={this.state.user.base64} alt=""/>
                          ): ""}
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Email </label>
                        <div className="col-lg-8">
                          <input type="email" className="form-control" readOnly={this.state.creatingUser} value={user.email} onChange={(e) => {
                            this.changeEmailUser(e.target.value)
                          }}
                                 required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Số điện thoại </label>
                        <div className="col-lg-8">
                          <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="123-4567-8901"  className="form-control" readOnly={this.state.creatingUser} value={user.phoneNumber} onChange={(e) => {
                            this.changePhoneNumberUser(e.target.value)
                          }}
                                 required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Quốc gia </label>
                        <div className="col-lg-8">
                          <select name="" id="" className="form-control" required onChange={(e) => {
                            this.changeNationUser(e.target.value)
                          }}>
                            <option value="percent">Percent</option>
                            <option value="value">Value</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Vùng </label>
                        <div className="col-lg-8">
                          <input type="text" className="form-control" readOnly={this.state.creatingUser} value={user.state} onChange={(e) => {
                            this.changeStateUser(e.target.value)
                          }}
                                 required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Thành phố </label>
                        <div className="col-lg-8">
                          <input type="text" className="form-control" readOnly={this.state.creatingUser} value={user.city} onChange={(e) => {
                            this.changeCityUser(e.target.value)
                          }}
                                 required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Địa chỉ </label>
                        <div className="col-lg-8">
                          <input type="text" className="form-control" readOnly={this.state.creatingUser} value={user.address} onChange={(e) => {
                            this.changeAddressUser(e.target.value)
                          }}
                                 required
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Mã bưu chính </label>
                        <div className="col-lg-8">
                          <input type="text" className="form-control" readOnly={this.state.creatingUser} value={user.postal} onChange={(e) => {
                            this.changePostalUser(e.target.value)
                          }}
                                 required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Quyền </label>
                        <div className="col-lg-8">
                          <select name="" id="" className="form-control" required onChange={(e) => {
                            this.changeRoleUser(e.target.value)
                          }}>
                            <option value="percent">Percent</option>
                            <option value="value">Value</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Trạng thái </label>
                        <div className="col-lg-8">
                          <select name="" id="" className="form-control" required onChange={(e) => {
                            this.changeStatusUser(e.target.value)
                          }}>
                            <option value="active">Active</option>
                            <option value="deactivate">Deactivate</option>
                          </select>
                        </div>
                      </div>
                    </fieldset>
                    {
                      this.state.creatingUser ?  <MqLoading/> : ""
                    }

                    <div className="text-right">
                      <button type="submit" className="btn btn-primary">Thêm mới <i className="icon-paperplane ml-2"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="mb-3">
                <div className="row">
                  <div className="col-md-2">
                    <div className="form-group">
                      <div className="btn-group">
                        <MqDivDropdown
                          hideoutclick={1}
                          disabled={this.numberItemSelected() == 0}
                        >
                          <MqDivDropdownHead
                            button={1}
                            className="btn btn-light"
                          >
                            Đã chọn {this.numberItemSelected()} mục
                            <i className="icon-menu-open"></i>
                          </MqDivDropdownHead>
                          <MqDivDropdownBody className="dropdown-menu dropdown-menu-left">
                            <span className="dropdown-item span-button" onClick={() => {
                              this.setState({
                                showModelDeleteUsers: true
                              })
                            }}><i className="icon-trash-alt"></i> Xóa các mục đã chọn</span>
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
                      <th><input type="checkbox" checked={this.state.selectedAll && this.state.users.length > 0} onChange={(e) => {
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
                      this.state.users.length == 0 ? (<tr>
                        <td colSpan={8} className="text-warning text-center">Không có mục nào để hiển thị</td>
                      </tr>) : null
                    }
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
                                <img src={user.image}
                                     className="rounded-circle" width="60" height="60" alt=""/>
                              </div>
                              <div>
                                <a href="#" className="text-default font-weight-semibold letter-icon-title">{user.fullName}</a>
                                {
                                  user.status == 'active'? (
                                    <div className="text-muted font-size-sm">
                                      <span className="badge bg-success">Active</span>
                                    </div>
                                  ): (
                                    <div className="text-muted font-size-sm">
                                      <span className="badge bg-warning">Deactivate</span>
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
                              this.actionEditUser(user._id)
                            }}>Sửa</button>
                            <button className="btn btn-danger" onClick={() => {
                              this.actionDeleteUser(user._id)
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
          </div>

        </div>
        <Modal isOpen={this.state.showModelEditUser} className={'modal-lg'}>
          <ModalHeader toggle={this.toggleLarge}>
            <i className="icon-user mr-2"></i> &nbsp;Cập nhật thông tin người dùng
          </ModalHeader>
          <form onSubmit={(e) => {
            e.preventDefault()
            this.updateUser()
          }}>
            <ModalBody>
              <fieldset className="mb-3">
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Tên đầy đủ </label>
                  <div className="col-lg-8">
                    <input type="text" className="form-control" readOnly={this.state.UpdatingUser} value={tempUser.fullName} onChange={(e) => {
                      this.changeFullNameTempUser(e.target.value)
                    }}
                           required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Email </label>
                  <div className="col-lg-8">
                    <input type="email" className="form-control" readOnly={this.state.UpdatingUser} value={tempUser.email} onChange={(e) => {
                      this.changeEmailTempUser(e.target.value)
                    }}
                           required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Số điện thoại </label>
                  <div className="col-lg-8">
                    <input type="email" className="form-control" readOnly={this.state.UpdatingUser} value={tempUser.phoneNumber} onChange={(e) => {
                      this.changePhoneNumberTempUser(e.target.value)
                    }}
                           required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Quốc gia </label>
                  <div className="col-lg-8">
                    <select name="" id="" className="form-control" required onChange={(e) => {
                      this.changeNationTempUser(e.target.value)
                    }}>
                      <option value="percent">Percent</option>
                      <option value="value">Value</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Vùng </label>
                  <div className="col-lg-8">
                    <input type="text" className="form-control" readOnly={this.state.UpdatingUser} value={tempUser.state} onChange={(e) => {
                      this.changeStateTempUser(e.target.value)
                    }}
                           required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Thành phố </label>
                  <div className="col-lg-8">
                    <input type="text" className="form-control" readOnly={this.state.UpdatingUser} value={tempUser.city} onChange={(e) => {
                      this.changeCityTempUser(e.target.value)
                    }}
                           required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Địa chỉ </label>
                  <div className="col-lg-8">
                    <input type="text" className="form-control" readOnly={this.state.UpdatingUser} value={tempUser.address} onChange={(e) => {
                      this.changeAddressTempUser(e.target.value)
                    }}
                           required
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Mã bưu chính </label>
                  <div className="col-lg-8">
                    <input type="text" className="form-control" readOnly={this.state.UpdatingUser} value={tempUser.postal} onChange={(e) => {
                      this.changePostalTempUser(e.target.value)
                    }}
                           required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Quyền </label>
                  <div className="col-lg-8">
                    <select name="" id="" className="form-control" required onChange={(e) => {
                      this.changeRoleTempUser(e.target.value)
                    }}>
                      <option value="percent">Percent</option>
                      <option value="value">Value</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Trạng thái </label>
                  <div className="col-lg-8">
                    <select name="" id="" className="form-control" required onChange={(e) => {
                      this.changeStatusTempUser(e.target.value)
                    }}>
                      <option value="active">Active</option>
                      <option value="deactivate">Deactivate</option>
                    </select>
                  </div>
                </div>
              </fieldset>
              {
                this.state.updatingUser ?  <MqLoading/> : ""
              }

            </ModalBody>
            <ModalFooter>
              <Button type="submit" color="primary">Cập nhật user</Button>
              <Button color="secondary" onClick={() => {
                this.setState({
                  tempUser: {
                    _id: null,
                    name: "",
                    description: ""
                  },
                  showModelEditUser: false
                })
              }}>Hủy</Button>
            </ModalFooter>
          </form>
        </Modal>
        <Modal isOpen={this.state.showModelDeleteUser} className={'modal-lg'}>
          <ModalHeader toggle={this.toggleLarge}>
            <i className="icon-menu7 mr-2"></i> &nbsp;Modal with icons
          </ModalHeader>
          <ModalBody>
            <MqAlert className="alert alert-warning alert-dismissible alert-styled-left border-top-0 border-bottom-0 border-right-0">
              <span className="font-weight-semibold">Lưu ý!</span> Bạn sẽ xóa danh mục vửa chọn?
            </MqAlert>
            {
              this.state.deletingUser? <MqLoading/> : ""
            }
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => {
              this.deleteUser()
            }}>Xóa</Button>
            <Button color="secondary" onClick={() => {
              this.setState({
                showModelDeleteUser: false
              })
            }}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.showModelDeleteUsers} className={'modal-lg'}>
          <ModalHeader toggle={this.toggleLarge}>
            <i className="icon-menu7 mr-2"></i> &nbsp;Modal with icons
          </ModalHeader>
          <ModalBody>
            <MqAlert className="alert alert-warning alert-dismissible alert-styled-left border-top-0 border-bottom-0 border-right-0">
              <span className="font-weight-semibold">Lưu ý!</span> Bạn sẽ xóa danh mục vửa chọn?
            </MqAlert>
            {
              this.state.deletingUsers? <MqLoading/> : ""
            }
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => {
              this.deleteUsers()
            }}>Xóa</Button>
            <Button color="secondary" onClick={() => {
              this.setState({
                deletingUsers: false
              })
            }}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </main>
    )
  }
}

export default Users;
