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
const ATTRIBUTES = [
  {
    key: 1,
    text: "Màu"
  },
  {
    key: 2,
    text: "Kích thước"
  },
  {
    key: 3,
    text: "Cân nặng"
  }
]
class  OrderDetail extends Component{
  constructor(props) {
    super(props);
    this.state = {
      nextId: "nam",
      order: {
        status: "Shipped",
        products: [
          {
            name: "Bullet For My Valentine T-Shirt BFMV Heart thrash metal rock Official XL",
            sku: "ABC",
            image: "https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg",
            quantity: 10,
            item_subtotal: 15.03
          },
          {
            name: "Bullet For My Valentine T-Shirt BFMV Heart thrash metal rock Official XL",
            sku: "ABC",
            image: "https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg",
            quantity: 10,
            item_subtotal: 15.03
          }
        ],
        customer: {
          name: "Quan Dau"
        },
        shippingAddress: {
          name: "Dau minh Quan",
          address1: "HN",
          address2: "HN",
          city: "HN",
          province: "Viet Nam",
          zipcode: 100000,
          phoneNumber: 1234567
        },
        order_date: "10/3/2020",
        deliver_date: "20/3/2020",
        purchase_date: "Mon, Mar 2, 2020, 7:22 PM PST"
      },
      shipping: {
        method: "Co bản",
        tracking_id: "9405536206394385632353",
        service_unit: "USPS",
        shipped_date: "Tue, Mar 10, 2020 to Wed, Mar 11, 2020"
      },
      tempShipping: {

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
      showModelEditOrder: false,
      showModelDeleteOrder: false,
      showModelDeleteOrders: false,
      deletingOrder: false,
      deletingOrders: false,
      ordersSelected: [
      ],
      action: null,
      selectedAll: false
    }
  }
  componentDidMount() {
    console.log(this.props.match.params.id)
    let action = this.props.match.params.action
    this.setState(state => {
      state.action = action
      if(action == "edit" && state.order.status == "Shipped"){
        state.tempShipping = Object.assign({},state.shipping)
      }
      return state
    })
  }
  getContentOrder(){
    let result = []
    const l = this.state.order.products.length
    if(l > 1){
      this.state.order.products.forEach((product,index) => {
        result.push(
          <tr key={index}>
            <td><span className="badge bg-success">{this.state.order.status}</span> </td>
            <td><img src={product.image} alt=""/></td>
            <td>
              <div>
                <a href="#">
                  {product.name}
                </a>
              </div>
              <div>
                SKU: {product.sku}
              </div>
            </td>
            <td>
              <div>Condition: New</div>
              <div>Listing ID: 0131X053Y69</div>
              <div>Order Item ID: 58901214578786</div>
            </td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td className="wmin-md-200">
              <table className="table-total-sub">
                <tbody>
                <tr>
                  <td>Item subtotal:</td>
                  <td>57,98 US$</td>
                </tr>
                <tr>
                  <td>Shipping total:</td>
                  <td>14,99 US$</td>
                </tr>
                <tr>
                  <td>Item total:</td>
                  <td>72,97 US$</td>
                </tr>
                </tbody>
              </table>
            </td>
          </tr>
        )
      })
    }else{
      result.push(
        <tr key={0}>
          <td>{this.state.order.status} </td>
          <td><img src={this.state.order.products[0].image} alt=""/></td>
          <td>
            <div>
              <a href="#">
                {this.state.order.products[0].name}
              </a>
            </div>
            <div>
              SKU: {this.state.order.products[0].sku}
            </div>
          </td>
          <td>
            <div>Condition: New</div>
            <div>Listing ID: 0131X053Y69</div>
            <div>Order Item ID: 58901214578786</div>
          </td>
          <td>{this.state.order.products[0].quantity}</td>
          <td>{this.state.order.products[0].price}</td>
          <td className="wmin-md-200">
            <table className="table-total-sub">
              <tbody>
              <tr>
                <td>Item subtotal:</td>
                <td>57,98 US$</td>
              </tr>
              <tr>
                <td>Shipping total:</td>
                <td>14,99 US$</td>
              </tr>
              <tr>
                <td>Item total:</td>
                <td>72,97 US$</td>
              </tr>
              </tbody>
            </table>
          </td>
        </tr>
      )
    }
    return result
  }
  getContentAction(){
    if(this.state.action == "confirm" || this.state.action == "edit")
    {
      return <div className="mb-0">
        <div className="card">
          <form action="">
            <table className="table">
              <thead>
              <tr>
                <th>Shipped date</th>
                <th>Service unit</th>
                <th>Tracking ID</th>
                <th>Actiom</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <div className="form-group">
                    <input type="date" className="form-control" required />
                  </div>
                </td>
                <td>
                  <MqSelect
                    values={ATTRIBUTES}

                    onChange={(values,item,type)=>{

                    }}
                    placeholder="Chọn các thuộc tính cho sản phẩm"
                    className="form-control"
                  />
                </td>
                <td>
                  <div className="form-group">
                    <input type="text" className="form-control" value={this.state.tempShipping.tracking_id} required/>
                  </div>
                </td>
                <td>
                  <div className="form-group">
                    <button type="submit" className="btn btn-success">Xác nhận</button>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    }
    else if(this.state.order.status == "Shipped"){
      return (
        <div className="mb-0">
          <div className="card">
            <table className="table">
              <thead>
              <tr>
                <th>Shipped date</th>
                <th>Service unit</th>
                <th>Tracking ID</th>
                <th>Actiom</th>
              </tr>
              </thead>
              <tbody>
              <tr>

                <td>{this.state.shipping.shipped_date}</td>
                <td>{this.state.shipping.service_unit}</td>
                <td>{this.state.shipping.tracking_id}</td>
                <td>
                  <button className="btn btn-light" onClick={() => {
                    this.setState(state => {
                      state.action = "edit"
                      state.tempShipping = Object.assign({},state.shipping)
                      return state
                    })
                    this.props.history.push('/order-detail/'+this.props.match.params.id+'/edit')
                  }}>Sửa tracking</button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }
    return null
  }
  render() {
    const {order,tempOrder} = this.state
    return(
      <main>
        <OrdersHeader/>
        <div className="content">
          <div className="mb-0">
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <table className="table">
                    <tbody>
                    <tr>
                      <td>Ship by:</td>
                      <td>Tue, Mar 10, 2020 to Wed, Mar 11, 2020</td>
                    </tr>
                    <tr>
                      <td>Deliver by:</td>
                      <td>Fri, Mar 13, 2020 to Wed, Mar 18, 2020</td>
                    </tr>
                    <tr>
                      <td>Shipping service:</td>
                      <td>Standard</td>
                    </tr>
                    <tr>
                      <td>Payment methods:</td>
                      <td> Standard</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <table className="table">
                    <tbody>
                    <tr>
                      <td>Buyer: {this.state.order.customer.name}</td>
                      <td>Phone number: {this.state.order.shippingAddress.phoneNumber}</td>
                    </tr>
                    <tr>
                      <td>Name: {this.state.order.shippingAddress.name}</td>
                      <td>City: {this.state.order.shippingAddress.city}</td>

                    </tr>
                    <tr>
                      <td>Adress 1: {this.state.order.shippingAddress.address1}</td>
                      <td>Province: {this.state.order.shippingAddress.province} </td>
                    </tr>
                    <tr>
                      <td>Adress 2: {this.state.order.shippingAddress.address2}</td>

                      <td>Zip code: {this.state.order.shippingAddress.zipcode}</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {
            this.state.order.status == "Shipped"? "" : (<div className="form-group row">
            <div className="col-md-1">
            <button className="btn btn-warning">Hủy đơn hàng</button>
            </div>
            <div className="col-md-1">
            <button className="btn btn-success" onClick={() => {
            this.props.history.push('/order-detail/'+this.props.match.params.id+'/confirm')
            this.setState({
              action: "confirm"
            })
          }}>Xác nhận vận chuyển</button>
            </div>
            </div>)
          }
          <div className="card">
            <div className="table-responsive">
              <table className="table table-custom table-order">
                <thead>
                <tr>
                  <th>Trạng thái</th>
                  <th>Hình ảnh</th>
                  <th>Tên sản phẩm</th>
                  <th>Thông tin thêm</th>
                  <th>Số lượng</th>
                  <th>Giá mỗi đơn vị</th>
                  <th>Tổng tiền</th>
                </tr>
                </thead>
                <tbody>
                {this.getContentOrder()}
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="wmin-md-200">
                    <table className="table-total-sub">
                      <tbody>
                      <tr>
                        <td>Item subtotal:</td>
                        <td>57,98 US$</td>
                      </tr>
                      <tr>
                        <td>Shipping total:</td>
                        <td>14,99 US$</td>
                      </tr>
                      <tr>
                        <td>Item total:</td>
                        <td>72,97 US$</td>
                      </tr>
                      <tr>
                        <td><b>Grand total:</b></td>
                        <td>130,19 US$</td>
                      </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                </tbody>
              </table>
            </div>
          </div>
          {this.getContentAction()}
        </div>
      </main>
    )
  }
}

export default OrderDetail

