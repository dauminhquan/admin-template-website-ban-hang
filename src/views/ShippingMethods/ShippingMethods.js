import React, { Component, lazy, Suspense } from 'react';
import MqDivDropdown from "../../containers/Components/MqDivDropdown";
import MqDivDropdownHead from "../../containers/Components/MqDivDropdownHead";
import MqDivDropdownBody from "../../containers/Components/MqDivDropdownBody";
import ShippingMethodsHeader from "./ShippingMethodsHeader";
import MqSelect from "../../containers/Components/MqSelect";
import {Link} from "react-router-dom";
import MqPagination from "../../containers/Components/MqPagination";
import MqLoading from "../../containers/Components/MqLoading";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import MqAlert from "../../containers/Components/MqAlert";

function makeid(length) {
  let result           = '';
  let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
class  ShippingMethods extends Component{
  constructor(props) {
    super(props);
    this.state = {
      shippingMethods: [
        {
          _id: "1",
          name: "Vận chuyển bình thường",
          min_day: 10,
          max_day: 15,
          area: "Hoa kỳ",
          include_handling_time: false,
          type: "order",
          default_price: 10,
          price_more: 10
        },
        {
          _id: "2",
          name: "Vận chuyển nhanh",
          min_day: 10,
          max_day: 15,
          area: "Hoa kỳ",
          include_handling_time: false,
          type: "Item",
          default_price: 10,
          price_more: 10
        },
      ],
      nextId: "nam",
      shippingMethod: {
        name: "",
        min_day: "",
        max_day: "",
        area: "",
        include_handling_time: false,
        type: "",
        default_price: "",
        price_more: ""
      },
      creatingShippingMethod: false,
      tempShippingMethod: {
        _id: null,
        name: "",
        min_day: "",
        max_day: "",
        area: "",
        include_handling_time: false,
        type: "",
        default_price: "",
        price_more: ""
      },
      showModelEditShippingMethod: false,
      showModelDeleteShippingMethod: false,
      showModelDeleteShippingMethods: false,
      deletingShippingMethod: false,
      deletingShippingMethods: false,
      shippingMethodsSelected: [
      ],
      selectedAll: false
    }
  }
  componentDidMount() {
    this.setState(state => {
      state.shippingMethods.forEach(shippingMethod => {
        state.shippingMethodsSelected[(shippingMethod._id)] = false
      })
      return state
    })
  }
  actionEditShippingMethod(_id){
    this.setState(state => {
      let temp = state.shippingMethods.find(item => {
        return item._id == _id
      })
      state.tempShippingMethod = Object.assign({},temp)
      state.showModelEditShippingMethod = true
      return state
    })
  }
  actionDeleteShippingMethod(_id){
    this.setState(state => {
      state.tempShippingMethod = state.shippingMethods.find(item => {
        return item._id == _id
      })
      state.showModelDeleteShippingMethod = true
      return state
    })
  }
  changeNameShippingMethod(name){
    this.setState(state => {
      state.shippingMethod.name = name
      return state
    })
  }
  changeAreaShippingMethod(area){
    this.setState(state => {
      state.shippingMethod.area = area
      return state
    })
  }
  changeShippingMethodMinDay(min){
    this.setState(state => {
      state.shippingMethod.min_day = min
      return state
    })
  }
  changeShippingMethodMaxDay(max){
    this.setState(state => {
      state.shippingMethod.max_day = max
      return state
    })
  }
  changeShippingMethodType(type){
    this.setState(state => {
      state.shippingMethod.type = type
      return state
    })
  }
  changeShippingMethodDefaultPrice(defaultPrice){
    this.setState(state => {
      state.shippingMethod.default_price = defaultPrice
      return state
    })
  }
  changeShippingMethodPriceMore(priceMore){
    this.setState(state => {
      state.shippingMethod.price_more = priceMore
      return state
    })
  }
  changeShippingMethodIncludeHandingTime(check){
    this.setState(state => {
      state.shippingMethod.include_handling_time = check
      return state
    })
  }

  //temp
  changeNameShippingMethodTemp(name){
    this.setState(state => {
      state.tempShippingMethod.name = name
      return state
    })
  }
  changeAreaShippingMethodTemp(area){
    this.setState(state => {
      state.tempShippingMethod.area = area
      return state
    })
  }
  changeShippingMethodTempMinDay(min){
    this.setState(state => {
      state.tempShippingMethod.min_day = min
      return state
    })
  }
  changeShippingMethodTempMaxDay(max){
    this.setState(state => {
      state.tempShippingMethod.max_day = max
      return state
    })
  }
  changeShippingMethodTempType(type){
    this.setState(state => {
      state.tempShippingMethod.type = type
      return state
    })
  }
  changeShippingMethodTempDefaultPrice(defaultPrice){
    this.setState(state => {
      state.tempShippingMethod.default_price = defaultPrice
      return state
    })
  }
  changeShippingMethodTempPriceMore(priceMore){
    this.setState(state => {
      state.tempShippingMethod.price_more = priceMore
      return state
    })
  }
  changeShippingMethodTempIncludeHandingTime(check){
    this.setState(state => {
      state.tempShippingMethod.include_handling_time = check
      return state
    })
  }
  //---temp


  createShippingMethod(){
    this.setState({
      creatingShippingMethod: true
    })
      setTimeout(() => {
        this.setState(state => {
          let newShippingMethod = state.shippingMethod
          newShippingMethod._id = makeid(10)
          state.shippingMethods.unshift(newShippingMethod)
          state.shippingMethod = {
            _id: null,
            name: "",
            min_day: "",
            max_day: "",
            area: "",
            include_handling_time: false,
            type: "",
            default_price: "",
            price_more: ""
          }
          state.creatingShippingMethod = null
          return state
        })
      },3000)
  }
  updateShippingMethod(){
    this.setState({
      updatingShippingMethod: true
    })
    setTimeout(() => {
      this.setState(state => {
        state.shippingMethods = state.shippingMethods.map(shippingMethod => {
          if(shippingMethod._id == state.tempShippingMethod._id){
            shippingMethod = state.tempShippingMethod
          }
          return shippingMethod
        })
        state.tempShippingMethod = {
          _id: null,
          name: "",
          parentShippingMethod: null,
          area: ""
        }
        state.updatingShippingMethod = false
        state.showModelEditShippingMethod = false
        return state
      })
    },3000)
  }
  deleteShippingMethod(){
    this.setState({
      deletingShippingMethod: true
    })
    setTimeout(() => {
      this.setState(state => {

        state.shippingMethods = state.shippingMethods.filter(shippingMethod => {
          return shippingMethod._id != state.tempShippingMethod._id
        })
        state.showModelDeleteShippingMethod = false
        state.deletingShippingMethod = false
        return state
      })
    },3000)
  }
  deleteShippingMethods(){
    this.setState({
      deletingShippingMethods: true
    })
    setTimeout(() => {
      this.setState(state => {
        let ids = []
        state.shippingMethods.forEach(shippingMethod => {
          if(!state.shippingMethodsSelected[shippingMethod._id]){
            ids.push(shippingMethod._id)
          }
        })
        state.shippingMethods = state.shippingMethods.filter(shippingMethod => {
          return ids.includes(shippingMethod._id)
        })
        state.showModelDeleteShippingMethods = false
        state.deletingShippingMethods = false
        return state
      })
    },3000)
  }
  coverShippingMethodsToMqSelectValuesObject(){
    return this.state.shippingMethods.map(item => {
      return {
        key: item._id,
        text: item.name
      }
    })
  }
  coverShippingMethodToMqSelectValuesObject(shippingMethod){
    if(shippingMethod){
      return {
        key: shippingMethod._id,
        text: shippingMethod.name
      }
    }
    return {}
  }
  checkSelectedAllItem(shippingMethodsSelected){
    for(let i = 0 ; i < this.state.shippingMethods.length; i++){
      if(!shippingMethodsSelected[this.state.shippingMethods[i]._id]){
        return false
      }
    }
    return true
  }
  numberItemSelected(){
    let num = 0
    this.state.shippingMethods.forEach(shippingMethod => {
      if(this.state.shippingMethodsSelected[shippingMethod._id]){
        num++
      }
    })
    return num
  }
  render() {
    const {shippingMethod,tempShippingMethod} = this.state
    return(
      <main>
        <ShippingMethodsHeader/>
        <div className="content">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header header-elements-inline">
                <h5 className="card-title">Thêm mới một phương thức vận chuyển</h5>  <i className="icon-truck"></i>
                </div>

                <div className="card-body">
                  <form onSubmit={(e) => {
                    this.createShippingMethod()
                    e.preventDefault()
                  }}>
                    <fieldset className="mb-3">
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Tên phương thức </label>
                        <div className="col-lg-8">
                          <input type="text" className="form-control" readOnly={this.state.creatingShippingMethod} value={shippingMethod.name} onChange={(e) => {
                              this.changeNameShippingMethod(e.target.value)
                          }}
                          required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Vùng vận chuyển</label>
                        <div className="col-lg-8">
                          <textarea className="form-control"
                                    value={shippingMethod.area}
                                    onChange={(e) => {
                                      let value = e.target.value
                                      this.changeAreaShippingMethod(value)
                                    }}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Thời gian tối thiểu </label>
                        <div className="col-lg-8">
                          <input type="number" min={0} className="form-control" readOnly={this.state.creatingShippingMethod} value={shippingMethod.min_day} onChange={(e) => {
                            this.changeShippingMethodMinDay(e.target.value)
                          }}
                                 required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Thời gian tối đa </label>
                        <div className="col-lg-8">
                          <input type="number" min={parseInt(shippingMethod.min_day)+1} className="form-control" readOnly={this.state.creatingShippingMethod} value={shippingMethod.max_day} onChange={(e) => {
                            this.changeShippingMethodMaxDay(e.target.value)
                          }}
                                 required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Loại vận chuyển </label>
                        <div className="col-lg-8">
                          <select name="" className="form-control" value={this.state.shippingMethod.type} onChange={e => {
                            this.changeShippingMethodType(e.target.value)
                          }}>
                            <option value="Order">Theo đơn hàng</option>
                            <option value="Item">Theo sản phẩm</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Giá cơ bản </label>
                        <div className="col-lg-8">
                          <input type="number" step={0.01} min={0} className="form-control" readOnly={this.state.creatingShippingMethod} value={shippingMethod.default_price} onChange={(e) => {
                            this.changeShippingMethodDefaultPrice(e.target.value)
                          }}
                                 required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Giá thêm </label>
                        <div className="col-lg-8">
                          <input type="number" step={0.01} min={0} className="form-control" readOnly={this.state.creatingShippingMethod} value={shippingMethod.price_more} onChange={(e) => {
                            this.changeShippingMethodPriceMore(e.target.value)
                          }}
                                 required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Bao gồm thời gian xử lý đơn hàng </label>
                        <div className="col-lg-8">
                          <input type="checkbox"
                                 onChange={e => {
                                   let checked = e.target.checked
                                   this.changeShippingMethodIncludeHandingTime(checked)
                                 }}
                          />
                        </div>
                      </div>
                    </fieldset>
                    {
                      this.state.creatingShippingMethod ?  <MqLoading/> : ""
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
                                showModelDeleteShippingMethods: true
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
                          //   let id = makeid(5)
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
                  <table className="table">
                    <thead>
                    <tr>
                      <th><input type="checkbox" checked={this.state.selectedAll && this.state.shippingMethods.length > 0} onChange={e => {
                        let checked = e.target.checked
                        this.setState(state => {
                          if(state.shippingMethods.length == 0){
                            checked = false
                          }
                          state.selectedAll = checked
                          state.shippingMethods.forEach(shippingMethod => {
                            state.shippingMethodsSelected[shippingMethod._id] = checked
                          })
                          return state
                        })
                      }} /></th>
                      <th>Tên phương thức vận chuyển</th>
                      <th>Vùng vận chuyển</th>
                      <th>Thời gian</th>
                      <th>Bao gồm xử lý</th>
                      <th>Loại</th>
                      <th>Giá($)</th>
                      <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      this.state.shippingMethods.length == 0 ? (<tr>
                        <td colSpan={5} className="text-warning text-center">Không có mục nào để hiển thị</td>
                      </tr>) : null
                    }
                    {
                      this.state.shippingMethods.map((shippingMethod,index) => (
                        <tr key={index}>
                          <td><input type="checkbox" checked={this.state.shippingMethodsSelected[shippingMethod._id]} onChange={e => {
                            let checked = e.target.checked
                            this.setState(state=>{
                              state.shippingMethodsSelected[shippingMethod._id] = checked
                              if(this.checkSelectedAllItem(state.shippingMethodsSelected)){
                                state.selectedAll = true
                              }else{
                                state.selectedAll = false
                              }
                              return state
                            })
                          }}/></td>
                          <td>{shippingMethod.name}</td>
                          <td>{shippingMethod.area}</td>

                          <td>{shippingMethod.min_day+"-"+shippingMethod.max_day}</td>
                          <td>{shippingMethod.include_handling_time? "Có" : "Không"}</td>
                          <td>{shippingMethod.type}</td>
                          <td>
                            <div>
                             Giá cơ bản: {shippingMethod.default_price}
                            </div>
                            <div>
                              Giá thêm: {shippingMethod.price_more}
                            </div>
                          </td>
                          <td>
                            <div className="form-group-btn-list">
                              <button className="btn btn-light" onClick={() => {
                                this.actionEditShippingMethod(shippingMethod._id)
                              }}>Sửa</button>
                            </div>
                            <div className="form-group-btn-list">
                              <button className="btn btn-danger" onClick={() => {
                                this.actionDeleteShippingMethod(shippingMethod._id)
                              }}>Xóa</button>
                            </div>

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
        <Modal isOpen={this.state.showModelEditShippingMethod} className={'modal-lg'}>
          <ModalHeader toggle={this.toggleLarge}>
            <i className="icon-menu7 mr-2"></i> &nbsp;Cập nhật phương thức vận chuyển
          </ModalHeader>
          <form onSubmit={(e) => {
            e.preventDefault()
            this.updateShippingMethod()
          }}>
          <ModalBody>
              <fieldset className="mb-3">
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Tên phương thức </label>
                  <div className="col-lg-8">
                    <input type="text" className="form-control" readOnly={this.state.creatingShippingMethod} value={tempShippingMethod.name} onChange={(e) => {
                      this.changeNameShippingMethodTemp(e.target.value)
                    }}
                           required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Vùng vận chuyển</label>
                  <div className="col-lg-8">
                          <textarea className="form-control"
                                    value={tempShippingMethod.area}
                                    onChange={(e) => {
                                      let value = e.target.value
                                      this.changeAreaShippingMethodTemp(value)
                                    }}
                          />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Thời gian tối thiểu </label>
                  <div className="col-lg-8">
                    <input type="number" min={0} className="form-control" readOnly={this.state.creatingShippingMethod} value={tempShippingMethod.min_day} onChange={(e) => {
                      this.changeShippingMethodTempMinDay(e.target.value)
                    }}
                           required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Thời gian tối đa </label>
                  <div className="col-lg-8">
                    <input type="number" min={parseInt(tempShippingMethod.min_day)+1} className="form-control" readOnly={this.state.creatingShippingMethod} value={tempShippingMethod.max_day} onChange={(e) => {
                      this.changeShippingMethodTempMaxDay(e.target.value)
                    }}
                           required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Loại vận chuyển </label>
                  <div className="col-lg-8">
                    <select name="" className="form-control" value={this.state.tempShippingMethod.type} onChange={e => {
                      this.changeShippingMethodTempType(e.target.value)
                    }}>
                      <option value="Order">Theo đơn hàng</option>
                      <option value="Item">Theo sản phẩm</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Giá cơ bản </label>
                  <div className="col-lg-8">
                    <input type="number" step={0.01} min={0} className="form-control" readOnly={this.state.creatingShippingMethod} value={tempShippingMethod.default_price} onChange={(e) => {
                      this.changeNameShippingMethodTemp(e.target.value)
                    }}
                           required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Giá thêm </label>
                  <div className="col-lg-8">
                    <input type="number" step={0.01} min={0} className="form-control" readOnly={this.state.creatingShippingMethod} value={tempShippingMethod.price_more} onChange={(e) => {
                      this.changeNameShippingMethodTemp(e.target.value)
                    }}
                           required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Bao gồm thời gian xử lý đơn hàng </label>
                  <div className="col-lg-8">
                    <input type="checkbox"
                           checked={tempShippingMethod.include_handling_time}
                           onChange={e => {
                             let checked = e.target.checked
                             this.changeShippingMethodTempIncludeHandingTime(checked)
                           }}
                    />
                  </div>
                </div>

              </fieldset>
              {
                this.state.updatingShippingMethod ?  <MqLoading/> : ""
              }

          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary">Cập nhật</Button>
            <Button color="secondary" onClick={() => {
              this.setState({
                tempShippingMethod: {
                  _id: null,
                  name: "",
                  parentShippingMethod: null,
                  area: ""
                },
                showModelEditShippingMethod: false
              })
            }}>Hủy</Button>
          </ModalFooter>
          </form>
        </Modal>
        <Modal isOpen={this.state.showModelDeleteShippingMethod} className={'modal-lg'}>
          <ModalHeader toggle={this.toggleLarge}>
            <i className="icon-menu7 mr-2"></i> &nbsp;Modal with icons
          </ModalHeader>
          <ModalBody>
            <MqAlert className="alert alert-warning alert-dismissible alert-styled-left border-top-0 border-bottom-0 border-right-0">
              <span className="font-weight-semibold">Lưu ý!</span> Bạn sẽ xóa danh mục vừa chọn?
            </MqAlert>
            {
              this.state.deletingShippingMethod? <MqLoading/> : ""
            }
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => {
              this.deleteShippingMethod()
            }}>Xóa</Button>
            <Button color="secondary" onClick={() => {
              this.setState({
                showModelDeleteShippingMethod: false
              })
            }}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.showModelDeleteShippingMethods} className={'modal-lg'}>
          <ModalHeader toggle={this.toggleLarge}>
            <i className="icon-menu7 mr-2"></i> &nbsp;Modal with icons
          </ModalHeader>
          <ModalBody>
            <MqAlert className="alert alert-warning alert-dismissible alert-styled-left border-top-0 border-bottom-0 border-right-0">
              <span className="font-weight-semibold">Lưu ý!</span> Bạn sẽ xóa danh mục vừa chọn?
            </MqAlert>
            {
              this.state.deletingShippingMethods? <MqLoading/> : ""
            }
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => {
              this.deleteShippingMethods()
            }}>Xóa</Button>
            <Button color="secondary" onClick={() => {
              this.setState({
                deletingShippingMethods: false
              })
            }}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </main>
    )
  }
}

export default ShippingMethods

