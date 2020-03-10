import React, { Component, lazy, Suspense } from 'react';
import MqDivDropdown from "../../containers/Components/MqDivDropdown";
import MqDivDropdownHead from "../../containers/Components/MqDivDropdownHead";
import MqDivDropdownBody from "../../containers/Components/MqDivDropdownBody";
import OrdersHeader from "./OrdersHeader";
import MqSelect from "../../containers/Components/MqSelect";
import {Link} from "react-router-dom";
import MqPagination from "../../containers/Components/MqPagination";
import MqLoading from "../../containers/Components/MqLoading";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import MqAlert from "../../containers/Components/MqAlert";
import {getBase64, makeId} from "../../helpers";
const ORDER_STATUS = [
  {
    key: "Pending",
    text: "Pending"
  },
  {
    key: "Shipped",
    text: "Shipped"
  },
  {
    key: "Unshipped",
    text: "Unshipped"
  }
]
class  Orders extends Component{
  constructor(props) {
    super(props);
    this.state = {
      orders: [
        {
          _id: "mot",
          order_date: "10-03-2019",
          customer: {
            name: "Dau Minh Quan"
          },
          products: [
            {
              name: "New Eagles T Shirt Hotel California Tour Dates 2020 T-Shirt Men-Women S-Xxl-Mens Tshirts-Red Shirts For Women-Tshirt Men-T-Shirts For Men-Black Shirt",
              sku: "ABC",
              image: "https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg",
              quantity: 10,
              item_subtotal: 15.03
            }
          ],
          shipping: {
            type: "Standard",
            predict_time: "20/03/2020"
          },
          status: ["Shipped","Unshipped"][Math.floor(Math.random() *  ["Shipped","Unshipped"].length)]
        },
        {
          _id: "hai",
          order_date: "10-03-2019",
          customer: {
            name: "Dau Minh Quan"
          },
          products: [
            {
              name: "New Eagles T Shirt Hotel California Tour Dates 2020 T-Shirt Men-Women S-Xxl-Mens Tshirts-Red Shirts For Women-Tshirt Men-T-Shirts For Men-Black Shirt",
              sku: "ABC",
              image: "https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg",
              quantity: 10,
              item_subtotal: 15.03
            },
            {
              name: "New Eagles T Shirt Hotel California Tour Dates 2020 T-Shirt Men-Women S-Xxl-Mens Tshirts-Red Shirts For Women-Tshirt Men-T-Shirts For Men-Black Shirt",
              sku: "ABC",
              image: "https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg",
              quantity: 10,
              item_subtotal: 15.03
            }
          ],
          shipping: {
            type: "Standard",
            predict_time: "20/03/2020"
          },
          status: "Shipped"
        },
        {
          _id: "ba",
          order_date: "10-03-2019",
          customer: {
            name: "Dau Minh Quan"
          },
          products: [
            {
              name: "New Eagles T Shirt Hotel California Tour Dates 2020 T-Shirt Men-Women S-Xxl-Mens Tshirts-Red Shirts For Women-Tshirt Men-T-Shirts For Men-Black Shirt",
              sku: "ABC",
              image: "https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg",
              quantity: 10,
              item_subtotal: 15.03
            }
          ],
          shipping: {
            type: "Standard",
            predict_time: "20/03/2020"
          },
          status: "Shipped"
        },
      ],
      nextId: "nam",
      order: {
        name: "",
        image: "",
        base64: "",
        description: "",
        address: "",
        phoneNumber: ""
      },
      creatingOrder: false,
      tempOrder: {
        _id: null,
        name: "",
        image: "",
        base64: "",
        description: "",
        address: "",
        phoneNumber: ""
      },
      filter: {
        status: {
          key: "Unshipped",
          text: "Unshipped"
        },

      },
      showModelEditOrder: false,
      showModelCancelOrder: false,
      showModelCancelOrders: false,
      cancelingOrder: false,
      cancelingOrders: false,
      ordersSelected: [
      ],
      selectedAll: false
    }
  }
  componentDidMount() {
    this.setState(state => {
      state.orders.forEach(order => {
        state.ordersSelected[(order._id)] = false
      })
      return state
    })
  }
  actionEditOrder(_id){
    this.setState(state => {
      let tempOrder = state.orders.find(item => {
        return item._id == _id
      })
      state.tempOrder = Object.assign({},tempOrder)
      state.tempOrder.base64 = state.tempOrder.image
      state.tempOrder.image = null
      state.showModelEditOrder = true
      return state
    })
  }
  actionCancelOrder(_id){
    this.setState(state => {
      state.tempOrder = state.orders.find(item => {
        return item._id == _id
      })
      state.showModelCancelOrder = true
      return state
    })
  }
  changeNameOrder(name){
    this.setState(state => {
      state.order.name = name
      return state
    })
  }
  changeImageOrder(file){
    this.setState(state => {
      state.order.image = file
      return state
    })
    getBase64(file, (result) => {
      this.setState(state => {
        state.order.base64 = result
        return state
      })
    })
  }
  changeAddressOrder(address){
    this.setState(state => {
      state.order.address = address
      return state
    })
  }
  changePhoneNumberOrder(phoneNumber){
    this.setState(state => {
      state.order.phoneNumber = phoneNumber
      return state
    })
  }
  changeDescriptionOrder(description){
    this.setState(state => {
      state.order.description = description
      return state
    })
  }
  changeNameTemp(name){
    this.setState(state => {
      state.tempOrder.name = name
      return state
    })
  }
  changeImageTemp(file){
    this.setState(state => {
      state.tempOrder.image = file
      return state
    })
    getBase64(file, (result) => {
      this.setState(state => {
        state.tempOrder.base64 = result
        return state
      })
    })
  }
  changeAddressTemp(address){
    this.setState(state => {
      state.tempOrder.address = address
      return state
    })
  }
  changePhoneNumberTemp(address){
    this.setState(state => {
      state.tempOrder.address = address
      return state
    })
  }
  changeDescriptionTemp(description){
    this.setState(state => {
      state.tempOrder.description = description
      return state
    })
  }
  createOrder(){
    this.setState({
      creatingOrder: true
    })
      setTimeout(() => {
        this.setState(state => {
          let newOrder = state.order
          newOrder.image = newOrder.base64
          delete newOrder.base64
          newOrder._id = makeId(10)
          state.orders.unshift(newOrder)
          state.order = {
            name: "",
            address: "",
            image: null,
            phoneNumber: "",
            description: ""
          }
          state.creatingOrder = null
          return state
        })
        this.refs['create-image'].value = ""
      },3000)
  }
  updateOrder(){
    this.setState({
      updatingOrder: true
    })
    setTimeout(() => {
      this.setState(state => {
        state.orders = state.orders.map(order => {
          if(order._id == state.tempOrder._id){
            let temp = Object.assign({},state.tempOrder)
            temp.image = temp.base64
            delete temp.base64
            order = Object.assign({},temp)
          }
          return order
        })
        state.tempOrder = {
          _id: null,
          name: "",
          image: null,
          phoneNumber: "",
          address: "",
          description: ""
        }
        state.updatingOrder = false
        state.showModelEditOrder = false
        return state
      })
    },3000)
  }
  cancelOrder(){
    this.setState({
      cancelingOrder: true
    })
    setTimeout(() => {
      this.setState(state => {

        state.orders = state.orders.filter(order => {
          return order._id != state.tempOrder._id
        })
        state.showModelCancelOrder = false
        state.cancelingOrder = false
        return state
      })
    },3000)
  }
  cancelOrders(){
    this.setState({
      cancelingOrders: true
    })
    setTimeout(() => {
      this.setState(state => {
        let ids = []
        state.orders.forEach(order => {
          if(!state.ordersSelected[order._id]){
            ids.push(order._id)
          }
        })
        state.orders = state.orders.filter(order => {
          return ids.includes(order._id)
        })
        state.showModelCancelOrders = false
        state.cancelingOrders = false
        return state
      })
    },3000)
  }
  coverOrdersToMqSelectValuesObject(){
    return this.state.orders.map(item => {
      return {
        key: item._id,
        text: item.name
      }
    })
  }
  coverOrderToMqSelectValuesObject(order){
    if(order){
      return {
        key: order._id,
        text: order.name
      }
    }
    return {}
  }
  checkSelectedAllItem(ordersSelected){
    for(let i = 0 ; i < this.state.orders.length; i++){
      if(!ordersSelected[this.state.orders[i]._id]){
        return false
      }
    }
    return true
  }
  numberItemSelected(){
    let num = 0
    this.state.orders.forEach(order => {
      if(this.state.ordersSelected[order._id]){
        num++
      }
    })
    return num
  }
  render() {
    const {order,tempOrder} = this.state
    return(
      <main>
        <OrdersHeader/>
        <div className="content">
          <div className="mb-0">
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
                                showModelCancelOrders: true
                              })
                            }}><i className="icon-trash-alt"></i> Xóa các mục đã chọn</span>
                      </MqDivDropdownBody>
                    </MqDivDropdown>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="form-group">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search..." />
                    <span className="input-group-append">
												<button className="btn btn-light" type="button"><i className="icon-search4"></i></button>
											</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <MqSelect
                  values={ORDER_STATUS}
                  defaultItemSelected={{
                    key: "Unshipped",
                    text : "Unshipped"
                  }}
                  onChange={(values,item,type)=>{

                  }}
                  placeholder="Chọn loại đơn"
                />
              </div>
              <div className="col-md-1">
                <MqDivDropdown hideoutclick={1} className="breadcrumb-elements-item dropdown p-0">
                  <MqDivDropdownHead button className="btn btn-light dropdown-toggle float-left">
                    <i className="icon-alarm-check mr-2"></i>
                    Thời gian
                  </MqDivDropdownHead>
                  <div className="clearfix"></div>
                  <MqDivDropdownBody className="dropdown-menu dropdown-menu-left dropdown-checkbox-body">
                    <div className="dropdown-item">
                      7 Ngày qua
                    </div>
                    <div className="dropdown-item">
                      15 Ngày qua
                    </div>
                    <div className="dropdown-item">
                      30 Ngày qua
                    </div>
                    <div className="dropdown-item">
                      60 Ngày qua
                    </div>
                    <div className="dropdown-item">
                      365 Ngày qua
                    </div>
                  </MqDivDropdownBody>
                </MqDivDropdown>
              </div>

              <div className="col-md-1">
                <MqDivDropdown hideoutclick={1} className="breadcrumb-elements-item dropdown p-0">
                  <MqDivDropdownHead button className="btn btn-light dropdown-toggle float-left">
                    <i className="icon-hour-glass2 mr-2"></i>
                    Trạng thái
                  </MqDivDropdownHead>
                  <div className="clearfix"></div>
                  <MqDivDropdownBody className="dropdown-menu dropdown-menu-left dropdown-checkbox-body">
                    <div className="dropdown-item">
                      7 Ngày qua
                    </div>
                    <div className="dropdown-item">
                      15 Ngày qua
                    </div>
                    <div className="dropdown-item">
                      30 Ngày qua
                    </div>
                    <div className="dropdown-item">
                      60 Ngày qua
                    </div>
                    <div className="dropdown-item">
                      365 Ngày qua
                    </div>
                  </MqDivDropdownBody>
                </MqDivDropdown>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="table-responsive">
              <table className="table table-custom table-order">
                <thead>
                <tr>
                  <th><input type="checkbox" checked={this.state.selectedAll && this.state.orders.length > 0} onChange={e => {
                    let checked = e.target.checked
                    this.setState(state => {
                      if(state.orders.length == 0){
                        checked = false
                      }
                      state.selectedAll = checked
                      state.orders.forEach(order => {
                        state.ordersSelected[order._id] = checked
                      })
                      return state
                    })
                  }} /></th>
                  <th>Ngày đặt hàng</th>
                  <th>Nội dung đơn hàng</th>
                  <th>Hình ảnh</th>
                  <th>Tên sản phẩm</th>
                  <th>Vận chuyển</th>
                  <th>Tình trạng đặt hàng</th>
                  <th>Thao tác</th>
                </tr>
                </thead>
                <tbody>
                {
                  this.state.orders.length == 0 ? (<tr>
                    <td colSpan={5} className="text-warning text-center">Không có mục nào để hiển thị</td>
                  </tr>) : null
                }
                {
                  this.state.orders.map((order,index) => {
                    let result = []
                    if(order.products.length > 1){
                      result.push(
                        <tr key={index+"-0"}>
                          <td rowSpan={order.products.length}><input type="checkbox" checked={this.state.ordersSelected[order._id]} onChange={e => {
                            let checked = e.target.checked
                            this.setState(state=>{
                              state.ordersSelected[order._id] = checked
                              if(this.checkSelectedAllItem(state.ordersSelected)){
                                state.selectedAll = true
                              }else{
                                state.selectedAll = false
                              }
                              return state
                            })
                          }}/></td>
                          <td rowSpan={order.products.length}>{order.order_date}</td>
                          <td rowSpan={order.products.length}>
                            <div><a href="#">{order._id}</a></div>
                            <div>Buyer name:</div>
                            <div>
                              <a href="#">{order.customer.name}</a>
                            </div>
                          </td>
                          <td>
                            <img src={order.products[0].image} alt=""/>
                          </td>
                          <td>
                            <div>
                              <a href="#">{order.products[0].name}</a>
                            </div>
                            <div>
                              SKU: {order.products[0].sku}
                            </div>
                            <div>
                              Quantity: {order.products[0].quantity}
                            </div>
                            <div>
                              Item subtotal: {order.products[0].item_subtotal}US$
                            </div>
                          </td>
                          <td rowSpan={order.products.length}>
                            <div>
                              <b>{order.shipping.type}</b>
                            </div>
                            <div>
                              Deliver by date: {order.shipping.predict_time}
                            </div>
                          </td>
                          <td rowSpan={order.products.length}><span className={"badge "+ (order.status== "Shipped"? "bg-success" : "bg-warning")}>{order.status}</span></td>
                          <td rowSpan={order.products.length}>
                            {
                              order.status == "Unshipped" ? <div className="form-group-btn-list">
                                <button className="btn btn-sm btn-success" onClick={() => {
                                  this.props.history.push('/order-detail/'+order._id+'/confirm')
                                }}>Xác nhận vận chuyển</button>
                              </div> : ""
                            }
                            {
                              order.status == "Shipped" ? (
                                <div className="form-group-btn-list">
                                  <button className="btn btn-sm btn-light" onClick={() => {
                                    this.props.history.push('/order-detail/'+order._id+'/edit')
                                  }}>Sửa thông tin vận chuyển</button>
                                </div>
                              ): ""
                            }
                            <div className="form-group-btn-list">
                              <button className="btn btn-sm btn-light" onClick={() => {

                              }}>In nhãn</button>
                            </div>
                            {
                              order.status == "Shipped" ? (
                                <div className="form-group-btn-list">
                                  <button className="btn btn-sm btn-light" onClick={() => {

                                  }}>Hoàn tiền</button>
                                </div>
                              ): ""
                            }
                            {
                              order.status == "Unshipped" ? <div className="form-group-btn-list">
                                <button className="btn btn-sm btn-danger" onClick={() => {
                                  this.actionCancelOrder(order._id)
                                }}>Hủy đơn hàng</button>
                              </div> : ""
                            }
                          </td>
                        </tr>
                      )
                      for(let i = 1 ; i < order.products.length ;i++){
                        result.push(
                          <tr key={index+"-"+i}>
                            <td>
                              <img src={order.products[0].image} alt=""/>
                            </td>
                            <td>
                              <div>
                                <a href="#">{order.products[0].name}</a>
                              </div>
                              <div>
                                SKU: {order.products[0].sku}
                              </div>
                              <div>
                                Quantity: {order.products[0].quantity}
                              </div>
                              <div>
                                Item subtotal: {order.products[0].item_subtotal}US$
                              </div>
                            </td>
                          </tr>
                        )
                      }
                    }else{
                      result.push(
                        <tr key={index}>
                          <td rowSpan={order.products.length}><input type="checkbox" checked={this.state.ordersSelected[order._id]} onChange={e => {
                            let checked = e.target.checked
                            this.setState(state=>{
                              state.ordersSelected[order._id] = checked
                              if(this.checkSelectedAllItem(state.ordersSelected)){
                                state.selectedAll = true
                              }else{
                                state.selectedAll = false
                              }
                              return state
                            })
                          }}/></td>
                          <td>{order.order_date}</td>
                          <td>
                            <div><a href="#">{order._id}</a></div>
                            <div>Buyer name:</div>
                            <div>
                              <a href="#">{order.customer.name}</a>
                            </div>
                          </td>
                          <td>
                            <img src={order.products[0].image} alt=""/>
                          </td>
                          <td>
                            <div>
                              <a href="#">{order.products[0].name}</a>
                            </div>
                            <div>
                              SKU: {order.products[0].sku}
                            </div>
                            <div>
                              Quantity: {order.products[0].quantity}
                            </div>
                            <div>
                              Item subtotal: {order.products[0].item_subtotal}US$
                            </div>
                          </td>
                          <td>
                            <div>
                              <b>{order.shipping.type}</b>
                            </div>
                            <div>
                              Deliver by date: {order.shipping.predict_time}
                            </div>
                          </td>
                          <td><span className={"badge "+ (order.status== "Shipped"? "bg-success" : "bg-warning")}>{order.status}</span></td>
                          <td>
                            {
                              order.status == "Unshipped" ? <div className="form-group-btn-list">
                                <button className="btn btn-sm btn-success" onClick={() => {
                                  this.props.history.push('/order-detail/'+order._id+'/confirm')
                                }}>Xác nhận vận chuyển</button>
                              </div> : ""
                            }
                            {
                              order.status == "Shipped" ? (
                                <div className="form-group-btn-list">
                                  <button className="btn btn-sm btn-light" onClick={() => {
                                    this.props.history.push('/order-detail/'+order._id+'/edit')
                                  }}>Sửa thông tin vận chuyển</button>
                                </div>
                              ): ""
                            }
                            <div className="form-group-btn-list">
                              <button className="btn btn-sm btn-light" onClick={() => {

                              }}>In nhãn</button>
                            </div>
                            {
                              order.status == "Shipped" ? (
                                <div className="form-group-btn-list">
                                  <button className="btn btn-sm btn-light" onClick={() => {

                                  }}>Hoàn tiền</button>
                                </div>
                              ): ""
                            }
                            {
                              order.status == "Unshipped" ? <div className="form-group-btn-list">
                                <button className="btn btn-sm btn-danger" onClick={() => {
                                  this.actionCancelOrder(order._id)
                                }}>Hủy đơn hàng</button>
                              </div> : ""
                            }

                          </td>
                        </tr>
                      )
                    }
                    // (
                    //   <tr key={index}>
                    //     <td><input type="checkbox" checked={this.state.ordersSelected[order._id]} onChange={e => {
                    //       let checked = e.target.checked
                    //       this.setState(state=>{
                    //         state.ordersSelected[order._id] = checked
                    //         if(this.checkSelectedAllItem(state.ordersSelected)){
                    //           state.selectedAll = true
                    //         }else{
                    //           state.selectedAll = false
                    //         }
                    //         return state
                    //       })
                    //     }}/></td>
                    //     <td>{order.name}</td>
                    //     <td>
                    //       <img src={order.image} alt=""/>
                    //     </td>
                    //     <td>{order.address}</td>
                    //     <td>{order.phoneNumber}</td>
                    //     <td>{order.phoneNumber}</td>
                    //     <td className="custom-description">{order.description}</td>
                    //     <td>
                    //       <button className="btn btn-light" onClick={() => {
                    //         this.actionEditOrder(order._id)
                    //       }}>Sửa</button>
                    //       <button className="btn btn-danger" onClick={() => {
                    //         this.actionCancelOrder(order._id)
                    //       }}>Xóa</button>
                    //     </td>
                    //   </tr>
                    // )



                    return result


                  })
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
        <Modal isOpen={this.state.showModelEditOrder} className={'modal-lg'}>
          <ModalHeader toggle={this.toggleLarge}>
            <i className="icon-menu7 mr-2"></i> &nbsp;Modal with icons
          </ModalHeader>
          <form onSubmit={(e) => {
            e.preventDefault()
            this.updateOrder()
          }}>
          <ModalBody>
              <fieldset className="mb-3">
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Tên nhà cung cấp </label>
                  <div className="col-lg-8">
                    <input type="text" className="form-control" readOnly={this.state.creatingOrder} value={tempOrder.name} onChange={(e) => {
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
                    {this.state.tempOrder.base64 ? (
                      <img className="img-80" src={this.state.tempOrder.base64} alt=""/>
                    ): ""}
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Địa chỉ </label>
                  <div className="col-lg-8">
                    <input type="text" className="form-control" readOnly={this.state.creatingOrder} value={tempOrder.address} onChange={(e) => {
                      this.changeAddressTemp(e.target.value)
                    }}
                           required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Số điện thoại </label>
                  <div className="col-lg-8">
                    <input type="text" className="form-control" readOnly={this.state.creatingOrder} value={tempOrder.phoneNumber} onChange={(e) => {
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
                                    readOnly={this.state.creatingOrder}
                                   onChange={(e) => {
                            this.changeDescriptionTemp(e.target.value)
                          }}
                                    value={tempOrder.description}
                          >

                          </textarea>
                  </div>
                </div>

              </fieldset>
              {
                this.state.updatingOrder ?  <MqLoading/> : ""
              }

          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary">Cập nhật order</Button>
            <Button color="secondary" onClick={() => {
              this.setState({
                tempOrder: {
                  _id: null,
                  name: "",
                  description: ""
                },
                showModelEditOrder: false
              })
            }}>Hủy</Button>
          </ModalFooter>
          </form>
        </Modal>
        <Modal isOpen={this.state.showModelCancelOrder} className={'modal-lg'}>
          <ModalHeader toggle={this.toggleLarge}>
            <i className="icon-stack-cancel mr-2"></i> &nbsp;Hủy đơn hàng
          </ModalHeader>
          <ModalBody>
            <MqAlert className="alert alert-warning alert-dismissible alert-styled-left border-top-0 border-bottom-0 border-right-0">
              <span className="font-weight-semibold">Lưu ý!</span> Bạn đồng ý hủy đơn hàng này chứ?
            </MqAlert>
            {
              this.state.cancelingOrder? <MqLoading/> : ""
            }
          </ModalBody>
          <ModalFooter>
            <Button color="warning" onClick={() => {
              this.cancelOrder()
            }}>Hủy đơn hàng</Button>
            <Button color="light" onClick={() => {
              this.setState({
                showModelCancelOrder: false
              })
            }}>Đóng</Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.showModelCancelOrders} className={'modal-lg'}>
          <ModalHeader toggle={this.toggleLarge}>
            <i className="icon-menu7 mr-2"></i> &nbsp;Modal with icons
          </ModalHeader>
          <ModalBody>
            <MqAlert className="alert alert-warning alert-dismissible alert-styled-left border-top-0 border-bottom-0 border-right-0">
              <span className="font-weight-semibold">Lưu ý!</span> Bạn sẽ xóa danh mục vửa chọn?
            </MqAlert>
            {
              this.state.cancelingOrders? <MqLoading/> : ""
            }
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => {
              this.cancelOrders()
            }}>Xóa</Button>
            <Button color="secondary" onClick={() => {
              this.setState({
                cancelingOrders: false
              })
            }}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </main>
    )
  }
}

export default Orders

