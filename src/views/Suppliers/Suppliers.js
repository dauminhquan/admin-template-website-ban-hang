import React, { Component, lazy, Suspense } from 'react';
import MqDivDropdown from "../../containers/Components/MqDivDropdown";
import MqDivDropdownHead from "../../containers/Components/MqDivDropdownHead";
import MqDivDropdownBody from "../../containers/Components/MqDivDropdownBody";
import SuppliersHeader from "./SuppliersHeader";
import MqSelect from "../../containers/Components/MqSelect";
import {Link} from "react-router-dom";
import MqPagination from "../../containers/Components/MqPagination";
import MqLoading from "../../containers/Components/MqLoading";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import MqAlert from "../../containers/Components/MqAlert";
import {getBase64, makeId} from "../../helpers";
const CATEGORIES = [

]
class  Suppliers extends Component{
  constructor(props) {
    super(props);
    this.state = {
      suppliers: [
        {
          _id: "mot",
          name: "Quần",
          image: "https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg",
          phoneNumber: "012345",
          address: "Hà Nội",
          description: "Nhà cung cấp quần áo hàng đầu Việt Nam Nhà cung cấp quần áo hàng đầu Việt Nam Nhà cung cấp quần áo hàng đầu Việt Nam" ,
        },
        {
          _id: "hai",
          name: "Áo",
          image: "https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg",
          phoneNumber: "012345",
          address: "Hà Nội",
          description: "Xin chào",
        },
        {
          _id: "ba",
          name: "Quần Áo",
          image: "https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg",
          phoneNumber: "012345",
          address: "Hà Nội",
          description: "Xin chào"
        },
        {
          _id: "bon",
          name: "Dày dép",
          image: "https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg",
          phoneNumber: "012345",
          address: "Hà Nội",
          description: "Xin chào"
        }
      ],
      nextId: "nam",
      supplier: {
        name: "",
        image: "",
        base64: "",
        description: "",
        address: "",
        phoneNumber: ""
      },
      creatingSupplier: false,
      tempSupplier: {
        _id: null,
        name: "",
        image: "",
        base64: "",
        description: "",
        address: "",
        phoneNumber: ""
      },
      showModelEditSupplier: false,
      showModelDeleteSupplier: false,
      showModelDeleteSuppliers: false,
      deletingSupplier: false,
      deletingSuppliers: false,
      suppliersSelected: [
      ],
      selectedAll: false
    }
  }
  componentDidMount() {
    this.setState(state => {
      state.suppliers.forEach(supplier => {
        state.suppliersSelected[(supplier._id)] = false
      })
      return state
    })
  }
  actionEditSupplier(_id){
    this.setState(state => {
      let tempSupplier = state.suppliers.find(item => {
        return item._id == _id
      })
      state.tempSupplier = Object.assign({},tempSupplier)
      state.tempSupplier.base64 = state.tempSupplier.image
      state.tempSupplier.image = null
      state.showModelEditSupplier = true
      return state
    })
  }
  actionDeleteSupplier(_id){
    this.setState(state => {
      state.tempSupplier = state.suppliers.find(item => {
        return item._id == _id
      })
      state.showModelDeleteSupplier = true
      return state
    })
  }
  changeNameSupplier(name){
    this.setState(state => {
      state.supplier.name = name
      return state
    })
  }
  changeImageSupplier(file){
    this.setState(state => {
      state.supplier.image = file
      return state
    })
    getBase64(file, (result) => {
      this.setState(state => {
        state.supplier.base64 = result
        return state
      })
    })
  }
  changeAddressSupplier(address){
    this.setState(state => {
      state.supplier.address = address
      return state
    })
  }
  changePhoneNumberSupplier(phoneNumber){
    this.setState(state => {
      state.supplier.phoneNumber = phoneNumber
      return state
    })
  }
  changeDescriptionSupplier(description){
    this.setState(state => {
      state.supplier.description = description
      return state
    })
  }
  changeNameTemp(name){
    this.setState(state => {
      state.tempSupplier.name = name
      return state
    })
  }
  changeImageTemp(file){
    this.setState(state => {
      state.tempSupplier.image = file
      return state
    })
    getBase64(file, (result) => {
      this.setState(state => {
        state.tempSupplier.base64 = result
        return state
      })
    })
  }
  changeAddressTemp(address){
    this.setState(state => {
      state.tempSupplier.address = address
      return state
    })
  }
  changePhoneNumberTemp(address){
    this.setState(state => {
      state.tempSupplier.address = address
      return state
    })
  }
  changeDescriptionTemp(description){
    this.setState(state => {
      state.tempSupplier.description = description
      return state
    })
  }
  createSupplier(){
    this.setState({
      creatingSupplier: true
    })
      setTimeout(() => {
        this.setState(state => {
          let newSupplier = state.supplier
          newSupplier.image = newSupplier.base64
          delete newSupplier.base64
          newSupplier._id = makeId(10)
          state.suppliers.unshift(newSupplier)
          state.supplier = {
            name: "",
            address: "",
            image: null,
            phoneNumber: "",
            description: ""
          }
          state.creatingSupplier = null
          return state
        })
        this.refs['create-image'].value = ""
      },3000)
  }
  updateSupplier(){
    this.setState({
      updatingSupplier: true
    })
    setTimeout(() => {
      this.setState(state => {
        state.suppliers = state.suppliers.map(supplier => {
          if(supplier._id == state.tempSupplier._id){
            let temp = Object.assign({},state.tempSupplier)
            temp.image = temp.base64
            delete temp.base64
            supplier = Object.assign({},temp)
          }
          return supplier
        })
        state.tempSupplier = {
          _id: null,
          name: "",
          image: null,
          phoneNumber: "",
          address: "",
          description: ""
        }
        state.updatingSupplier = false
        state.showModelEditSupplier = false
        return state
      })
    },3000)
  }
  deleteSupplier(){
    this.setState({
      deletingSupplier: true
    })
    setTimeout(() => {
      this.setState(state => {

        state.suppliers = state.suppliers.filter(supplier => {
          return supplier._id != state.tempSupplier._id
        })
        state.showModelDeleteSupplier = false
        state.deletingSupplier = false
        return state
      })
    },3000)
  }
  deleteSuppliers(){
    this.setState({
      deletingSuppliers: true
    })
    setTimeout(() => {
      this.setState(state => {
        let ids = []
        state.suppliers.forEach(supplier => {
          if(!state.suppliersSelected[supplier._id]){
            ids.push(supplier._id)
          }
        })
        state.suppliers = state.suppliers.filter(supplier => {
          return ids.includes(supplier._id)
        })
        state.showModelDeleteSuppliers = false
        state.deletingSuppliers = false
        return state
      })
    },3000)
  }
  coverSuppliersToMqSelectValuesObject(){
    return this.state.suppliers.map(item => {
      return {
        key: item._id,
        text: item.name
      }
    })
  }
  coverSupplierToMqSelectValuesObject(supplier){
    if(supplier){
      return {
        key: supplier._id,
        text: supplier.name
      }
    }
    return {}
  }
  checkSelectedAllItem(suppliersSelected){
    for(let i = 0 ; i < this.state.suppliers.length; i++){
      if(!suppliersSelected[this.state.suppliers[i]._id]){
        return false
      }
    }
    return true
  }
  numberItemSelected(){
    let num = 0
    this.state.suppliers.forEach(supplier => {
      if(this.state.suppliersSelected[supplier._id]){
        num++
      }
    })
    return num
  }
  render() {
    const {supplier,tempSupplier} = this.state
    return(
      <main>
        <SuppliersHeader/>
        <div className="content">
          <div className="row">
            <div className="col-md-5">
              <div className="card">
                <div className="card-header header-elements-inline">
                  <h5 className="card-title">Thêm mới một nhà cung cấp</h5>
                </div>

                <div className="card-body">
                  <form onSubmit={(e) => {
                    this.createSupplier()
                    e.preventDefault()
                  }}>
                    <fieldset className="mb-3">
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Tên nhà cung cấp </label>
                        <div className="col-lg-8">
                          <input type="text" className="form-control" readOnly={this.state.creatingSupplier} value={supplier.name} onChange={(e) => {
                              this.changeNameSupplier(e.target.value)
                          }}
                          required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Hình ảnh </label>
                        <div className="col-lg-8">
                          <input type="file" className="form-control" ref="create-image" onChange={(e)=> {
                            this.changeImageSupplier(e.target.files[0])
                          }}/>
                          {this.state.supplier.base64 ? (
                            <img className="img-80" src={this.state.supplier.base64} alt=""/>
                          ): ""}
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Địa chỉ </label>
                        <div className="col-lg-8">
                          <input type="text" className="form-control" readOnly={this.state.creatingSupplier} value={supplier.address} onChange={(e) => {
                            this.changeAddressSupplier(e.target.value)
                          }}
                                 required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Số điện thoại </label>
                        <div className="col-lg-8">
                          <input type="text" className="form-control" readOnly={this.state.creatingSupplier} value={supplier.phoneNumber} onChange={(e) => {
                            this.changePhoneNumberSupplier(e.target.value)
                          }}
                                 required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Mô tả</label>
                        <div className="col-lg-8">
                          <textarea className="form-control"
                                    readOnly={this.state.creatingSupplier}
                                    value={supplier.description} onChange={(e) => {
                                    this.changeDescriptionSupplier(e.target.value)
                          }}
                          />
                        </div>
                      </div>

                    </fieldset>
                    {
                      this.state.creatingSupplier ?  <MqLoading/> : ""
                    }

                    <div className="text-right">
                      <button type="submit" className="btn btn-primary">Thêm mới <i className="icon-paperplane ml-2"></i>
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
                                showModelDeleteSuppliers: true
                              })
                            }}><i className="icon-trash-alt"></i> Xóa các mục đã chọn</span>
                          </MqDivDropdownBody>
                        </MqDivDropdown>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search..." />
                        <span className="input-group-append">
												<button className="btn btn-light" type="button"><i className="icon-search4"></i></button>
											</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <MqDivDropdown hideoutclick={1} className="breadcrumb-elements-item dropdown p-0">
                      <MqDivDropdownHead button className="btn btn-light dropdown-toggle float-right">
                        <i className="icon-gear mr-2"></i>
                        Hiển thị
                      </MqDivDropdownHead>
                      <div className="clearfix"></div>
                      <MqDivDropdownBody className="dropdown-menu dropdown-menu-right dropdown-checkbox-body">
                        {
                          // COLUMNS.map(column => {
                          //   let id = makeId(5)
                          //   return(
                          //     <div className="dropdown-item" key={id}><input type="checkbox" id={id+'show-column'+column.name} checked={this.state.showColumns[column.name]} onChange={(e) => {
                          //       this.changeShowColumn(column,e.target.checked)
                          //     }}/>
                          //       <label className="dropdown-checkbox-label" htmlFor={id+'show-column'+column.name}> {column.text}</label>
                          //     </div>
                          //   )
                          // })

                          <div className="dropdown-item">
                            test
                          </div>
                        }
                      </MqDivDropdownBody>
                    </MqDivDropdown>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="table-responsive">
                  <table className="table table-custom">
                    <thead>
                    <tr>
                      <th><input type="checkbox" checked={this.state.selectedAll && this.state.suppliers.length > 0} onChange={e => {
                        let checked = e.target.checked
                        this.setState(state => {
                          if(state.suppliers.length == 0){
                            checked = false
                          }
                          state.selectedAll = checked
                          state.suppliers.forEach(supplier => {
                            state.suppliersSelected[supplier._id] = checked
                          })
                          return state
                        })
                      }} /></th>
                      <th>Tên nhà cung cấp</th>
                      <th>Hình ảnh</th>
                      <th>Địa chỉ</th>
                      <th>Số điện thoại</th>
                      <th>Mô tả</th>
                      <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      this.state.suppliers.length == 0 ? (<tr>
                        <td colSpan={5} className="text-warning text-center">Không có mục nào để hiển thị</td>
                      </tr>) : null
                    }
                    {
                      this.state.suppliers.map((supplier,index) => (
                        <tr key={index}>
                          <td><input type="checkbox" checked={this.state.suppliersSelected[supplier._id]} onChange={e => {
                            let checked = e.target.checked
                            this.setState(state=>{
                              state.suppliersSelected[supplier._id] = checked
                              if(this.checkSelectedAllItem(state.suppliersSelected)){
                                state.selectedAll = true
                              }else{
                                state.selectedAll = false
                              }
                              return state
                            })
                          }}/></td>
                          <td>{supplier.name}</td>
                          <td>
                            <img src={supplier.image} alt=""/>
                          </td>
                          <td>{supplier.address}</td>
                          <td>{supplier.phoneNumber}</td>
                          <td className="custom-description">{supplier.description}</td>
                          <td>
                            <button className="btn btn-light" onClick={() => {
                              this.actionEditSupplier(supplier._id)
                            }}>Sửa</button>
                            <button className="btn btn-danger" onClick={() => {
                              this.actionDeleteSupplier(supplier._id)
                            }}>Xóa</button>
                          </td>
                        </tr>
                      ))
                    }
                    {/*<tr>*/}
                    {/*  <td><input type="checkbox"/></td>*/}
                    {/*  <td>Quần </td>*/}
                    {/*  <td>Quần áo</td>*/}
                    {/*  <td>Bán quần</td>*/}
                    {/*  <td>*/}
                    {/*    <button class="btn btn-light">Sửa</button>*/}
                    {/*  </td>*/}
                    {/*</tr>*/}
                    </tbody>
                  </table>
                </div>
              </div>
              <MqPagination className="table-pagination-right pagination align-self-end" onNext={() => {}} choosePage={1} onPrev={() => {}} from={1} to={10}/>
            </div>
          </div>

        </div>
        <Modal isOpen={this.state.showModelEditSupplier} className={'modal-lg'}>
          <ModalHeader toggle={this.toggleLarge}>
            <i className="icon-menu7 mr-2"></i> &nbsp;Modal with icons
          </ModalHeader>
          <form onSubmit={(e) => {
            e.preventDefault()
            this.updateSupplier()
          }}>
          <ModalBody>
              <fieldset className="mb-3">
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Tên nhà cung cấp </label>
                  <div className="col-lg-8">
                    <input type="text" className="form-control" readOnly={this.state.creatingSupplier} value={tempSupplier.name} onChange={(e) => {
                      this.changeNameTemp(e.target.value)
                    }}
                           required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Hình ảnh </label>
                  <div className="col-lg-8">
                    <input type="file" className="form-control" onChange={(e) => {
                      this.changeImageTemp(e.target.files[0])
                    }}/>
                    {this.state.tempSupplier.base64 ? (
                      <img className="img-80" src={this.state.tempSupplier.base64} alt=""/>
                    ): ""}
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Địa chỉ </label>
                  <div className="col-lg-8">
                    <input type="text" className="form-control" readOnly={this.state.creatingSupplier} value={tempSupplier.address} onChange={(e) => {
                      this.changeAddressTemp(e.target.value)
                    }}
                           required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Số điện thoại </label>
                  <div className="col-lg-8">
                    <input type="text" className="form-control" readOnly={this.state.creatingSupplier} value={tempSupplier.phoneNumber} onChange={(e) => {
                      this.changePhoneNumberTemp(e.target.value)
                    }}
                           required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Mô tả</label>
                  <div className="col-lg-8">
                          <textarea className="form-control"
                                    readOnly={this.state.creatingSupplier}
                                   onChange={(e) => {
                            this.changeDescriptionTemp(e.target.value)
                          }}
                                    value={tempSupplier.description}
                          >

                          </textarea>
                  </div>
                </div>

              </fieldset>
              {
                this.state.updatingSupplier ?  <MqLoading/> : ""
              }

          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary">Cập nhật supplier</Button>
            <Button color="secondary" onClick={() => {
              this.setState({
                tempSupplier: {
                  _id: null,
                  name: "",
                  description: ""
                },
                showModelEditSupplier: false
              })
            }}>Hủy</Button>
          </ModalFooter>
          </form>
        </Modal>
        <Modal isOpen={this.state.showModelDeleteSupplier} className={'modal-lg'}>
          <ModalHeader toggle={this.toggleLarge}>
            <i className="icon-menu7 mr-2"></i> &nbsp;Modal with icons
          </ModalHeader>
          <ModalBody>
            <MqAlert className="alert alert-warning alert-dismissible alert-styled-left border-top-0 border-bottom-0 border-right-0">
              <span className="font-weight-semibold">Lưu ý!</span> Bạn sẽ xóa danh mục vửa chọn?
            </MqAlert>
            {
              this.state.deletingSupplier? <MqLoading/> : ""
            }
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => {
              this.deleteSupplier()
            }}>Xóa</Button>
            <Button color="secondary" onClick={() => {
              this.setState({
                showModelDeleteSupplier: false
              })
            }}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.showModelDeleteSuppliers} className={'modal-lg'}>
          <ModalHeader toggle={this.toggleLarge}>
            <i className="icon-menu7 mr-2"></i> &nbsp;Modal with icons
          </ModalHeader>
          <ModalBody>
            <MqAlert className="alert alert-warning alert-dismissible alert-styled-left border-top-0 border-bottom-0 border-right-0">
              <span className="font-weight-semibold">Lưu ý!</span> Bạn sẽ xóa danh mục vửa chọn?
            </MqAlert>
            {
              this.state.deletingSuppliers? <MqLoading/> : ""
            }
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => {
              this.deleteSuppliers()
            }}>Xóa</Button>
            <Button color="secondary" onClick={() => {
              this.setState({
                deletingSuppliers: false
              })
            }}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </main>
    )
  }
}

export default Suppliers

