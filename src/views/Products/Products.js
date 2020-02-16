import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  Col, Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Table
} from 'reactstrap';
import ProductsHeader from "./ProductsHeader";
import MqDivDropdown from "../../containers/Components/MqDivDropdown";
import MqDivDropdownHead from "../../containers/Components/MqDivDropdownHead";
import MqDivDropdownBody from "../../containers/Components/MqDivDropdownBody";
import ReactSelect from 'react-select';
import { colourOptions } from '../../../src/containers/Components/docs/data';
import makeAnimated from 'react-select/animated';
import MqSelect from "../../containers/Components/MqSelect";
import SuccessIcon from "../../containers/Components/SuccessIcon";
import ErrorIcon from "../../containers/Components/ErrorIcon";
import MqAlert from "../../containers/Components/MqAlert";
import MqPagination from "../../containers/Components/MqPagination";
const animatedComponents = makeAnimated();
const COLUMNS = [
  {
    name: 'is_active',
    text: 'Status'
  },
  {
    name: 'image',
    text: 'Image'
  },
  {
    name: 'name',
    text: 'Name'
  },
  {
    name: 'category',
    text: 'Category'
  },
  {
    name: 'brand',
    text: 'Brand'
  },
  {
    name: 'supplier',
    text: 'Supplier'
  },
  {
    name: 'created_at',
    text: 'Created At'
  },
  {
    name: 'updated_at',
    text: 'Update At'
  },
  {
    name: 'cost_origin',
    text: 'Cost Origin'
  },
  {
    name: 'price',
    text: 'Price'
  },
  {
    name: 'sale',
    text: 'Sale'
  },
  {
    name: 'options',
    text: 'Options'
  },
  {
    name: 'sku',
    text: 'SKU'
  },
  {
    name: 'specifications',
    text: 'Specifications'
  }
]

// '_id','name','category','brand','supplier','created_at','updated_at','is_active',
//   'cost_origin','price','sale','images','options','sku','specifications','is_parent'
function makeid(length) {
  let result           = '';
  let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

class Users extends Component {
  constructor(props){
    super(props)
    this.state = {
      variations: {},
      showVariations: {},
      products: [],
      sort: {
        name: '',
        type: ''
      },
      productsSelected: {},
      showColumns: {

      },
      selectedAll: false,
      showModelDelete: false,
      deleteItemStatus: false,
      showAlertDeleteItemResult: true,
      from: 1,
      to: 20,
      currentPage: 1
    }
    this.wrapperRef = React.createRef()
  }
  componentDidMount() {
    let products = this.createRandomProduct(10)
    this.setState(state => {
      state.products = products
      products.forEach(product => {
        state.productsSelected[product._id] = false
      })
      COLUMNS.forEach(column => {
        state.showColumns[column.name] = true
      })
      return state
    })
  }
  choosePage(page){
    this.setState(state => {
      state.currentPage = page
      return state
    })
  }
  changeShowModal(){
    this.setState(state => {
      state.showModelDelete = !state.showModelDelete
      return state
    })
  }
  cancelDeleteItem(){
    this.setState(state => {
      state.showModelDelete = false
      return state
    })
  }
  createRandomProduct() {
    let p = []
    for(let i = 0 ; i< 5; i++){
      p.push({
        _id: makeid(10),
        name: makeid(20),
        category: makeid(10),
        supplier: makeid(10),
        created_at: makeid(10),
        updated_at: makeid(10),
        is_active: Math.random() < 0.5,
        cost_origin: makeid(10),
        price: makeid(10),
        sale: makeid(10),
        image: 'https://zicxa.com/hinh-anh/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg',
        options: makeid(10),
        sku: makeid(10),
        is_parent: Math.random() < 0.5
      })

    }
    return p
  }
  getVariation(parent_sku){
    if(!this.state.variations[parent_sku]){
      let variation = this.makeVariations(parent_sku)
      this.setState(state => {
        state.variations[parent_sku] = variation
        return state
      })
    }
  }
  showVariation(parent_sku){
      if(!this.state.variations[parent_sku]){
        this.getVariation(parent_sku)
      }
      this.setState(state => {
        if(!state.showVariations[parent_sku]){
          state.showVariations[parent_sku] = true
        }else{
          state.showVariations[parent_sku] = false
        }
        return state
      })
  }
  makeVariations(parent_sku){
    let p = []
    for(let i = 0 ; i< 5; i++){
      p.push({
        _id: makeid(10),
        name: 'day la variation',
        category: makeid(10),
        supplier: makeid(10),
        created_at: makeid(10),
        updated_at: makeid(10),
        is_active: Math.random() < 0.5,
        cost_origin: makeid(10),
        price: makeid(10),
        sale: makeid(10),
        image: 'https://hinhanhdep.vn/wp-content/uploads/2019/07/d63b8e62f5221c7c4533.jpg',
        options: makeid(10),
        sku: makeid(10),
        parent_sku: parent_sku
      })

    }
    return p
  }
  sortAction(name){

    if(this.state.sort.name == name){
      if(this.state.sort.type == 'A-Z'){
        this.setState(state => {
          state.sort.type = 'Z-A'
          return state
        })
      }else{
        this.setState(state => {
          state.sort.type = 'A-Z'
          return state
        })
      }
    }
    else{
      this.setState(state => {
        state.sort = {
          name: name,
          type : 'A-Z'
        }
        return state
      })
    }
  }
  changeShowColumn(column,checked){
    this.setState(state => {
      state.showColumns[column.name] = checked
      return state
    })
  }
  changeSelectProduct(_id,checked){
    const rjs = this
    this.setState(state => {
      state.productsSelected[_id] = checked
      if(rjs.checkSelectedAll(state.productsSelected)){
        state.selectedAll = true
      }else{
        state.selectedAll = false
      }
      return state
    })
  }
  checkNoSelectedProducts(){
    let keys = Object.keys(this.state.productsSelected)
    for(let i = 0 ; i < keys.length ;i++){
      if(this.state.productsSelected[keys[i]]){
        return false
      }
    }
    return true
  }
  checkSelectedAll(productsSelected){
    let keys = Object.keys(productsSelected)
    for(let  i = 0 ; i < keys.length; i++){
      if(!productsSelected[keys[i]]){
        return false
      }
    }
    return true
  }
  render() {
    return (
      <main>
        <ProductsHeader/>

        <div className="content">
          <div className="mb-3">
            <div className="row">
              <div className="col-md-2">
                <div className="form-group">
                  <div className="btn-group">
                    <MqDivDropdown
                      hideoutclick={1}
                      disabled={this.checkNoSelectedProducts()}
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
              <div className="col-md-4">
                <MqSelect
                  multiple
                  onChange={(values,item,type) => {

                  }}
                />
              </div>
              <div className="col-md-2">
                <MqDivDropdown hideoutclick={1} className="breadcrumb-elements-item dropdown p-0">
                  <MqDivDropdownHead button className="btn btn-light dropdown-toggle">
                    <i className="icon-gear mr-2"></i>
                    Hiển thị
                  </MqDivDropdownHead>

                  <MqDivDropdownBody className="dropdown-menu dropdown-menu-left dropdown-checkbox-body">
                    {
                      COLUMNS.map(column => {
                        let id = makeid(5)
                          return(
                            <div className="dropdown-item" key={id}><input type="checkbox" id={id+'show-column'+column.name} checked={this.state.showColumns[column.name]} onChange={(e) => {
                              this.changeShowColumn(column,e.target.checked)
                            }}/>
                              <label className="dropdown-checkbox-label" htmlFor={id+'show-column'+column.name}> {column.text}</label>
                            </div>
                          )
                      })
                    }
                  </MqDivDropdownBody>
                </MqDivDropdown>
              </div>
              <div className="col-md-2">
                <button onClick={() => {
                  this.changeShowModal()
                }}>click</button>
              </div>
              <div className="col-md-2">
                <Link to={"/products/1"}>Xem trang thông tin chi tiết sản phẩm</Link>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="table-responsive">
              <table className="table table-products">
                <thead>
                <tr>
                  <th><input type="checkbox" checked={this.state.selectedAll} onChange={(e) => {
                      let checked = e.target.checked

                    if(checked){
                      this.setState(state => {
                        state.selectedAll = true
                        let keys = Object.keys(state.productsSelected)

                        for(let i = 0 ; i < keys.length ; i++){
                          state.productsSelected[keys[i]] = true
                        }
                        return state
                      })
                    }else{
                      this.setState(state => {
                        state.selectedAll = false
                        let keys = Object.keys(state.productsSelected)

                        for(let i = 0 ; i < keys.length ; i++){
                          state.productsSelected[keys[i]] = false
                        }
                        return state
                      })
                    }

                  }} /></th>
                  {COLUMNS.map(column => {
                    if(this.state.showColumns[column.name]){
                      return (<th key={column.name} className="columns-table" onClick={() => {this.sortAction(column.name)}}><span className="text-column">{column.text}</span> <span className={"table-sort-icon " + (this.state.sort.name == column.name? (this.state.sort.type == 'A-Z' ? "icon-sort-alpha-asc": 'icon-sort-alpha-desc') : "icon-sort") }></span></th>)
                    }
                  })}
                </tr>
                </thead>
                <tbody>
                {this.state.products.map((item,index) => {
                  let result = []
                  result.push(<tr key={index}>
                    <td key={'input' + item._id}><input type="checkbox" checked={this.state.productsSelected[item._id]} onChange={(event) => {
                      this.changeSelectProduct(item._id,event.target.checked)
                    }}/></td>
                    {
                      COLUMNS.map((column,cl_index) => {
                        if(this.state.showColumns[column.name]){
                          if(column.name == 'is_active'){
                            if(item['is_parent'] && !item['parent_sku']){
                              return (<td key={item._id+cl_index} className="td-product-status">
                                <span className="product-status" onClick={() => {this.showVariation(item.sku)}}><i className={this.state.showVariations[item.sku] ? "icon-arrow-down12" : "icon-arrow-right13"}></i> Variations</span>
                              </td>)
                            }else{
                              if(item.is_active){
                                return (<td key={item._id+cl_index}>
                                  <span className="product-status"><i className="icon-check2"></i> Active</span>
                                </td>)
                              }
                            }
                            return (<td key={item._id+cl_index}>
                              <span className="product-status"><i className="icon-close"></i> Inactive</span>
                            </td>)
                          }else if(column.name == 'image'){
                            return <td key={'image'+item._id}><img src={item.image} alt=""/></td>
                          }
                          return (<td key={item._id+cl_index}>{item[column.name]}</td>)
                        }
                      })
                    }
                  </tr>)

                  if(this.state.showVariations[item.sku]){
                    let variations = this.state.variations[item.sku]
                    variations.forEach((variation,variation_index) => {
                      let contentVariation = []
                        COLUMNS.map((column_variation,cl_variation_index) => {
                          if(this.state.showColumns[column_variation.name]){
                            if(column_variation.name == 'is_active'){
                              if(item.is_active){
                                contentVariation.push(<td key={variation._id+cl_variation_index}>
                                  <span className="product-status"><i className="icon-check2"></i> Active</span>
                                </td>)
                              }else{
                                contentVariation.push(<td key={variation._id+cl_variation_index}>
                                  <span className="product-status"><i className="icon-close"></i> Inactive</span>
                                </td>)
                              }
                            }else if(column_variation.name == 'image'){
                              contentVariation.push(<td key={'image'+variation._id}><img src={variation.image} alt=""/></td>)
                            }
                            else{
                              contentVariation.push(<td key={variation._id+cl_variation_index}>{variation[column_variation.name]}</td>)
                            }
                          }
                        })

                      result.push(
                        <tr key={variation_index+'variations'+variation._id} className="product-variation">
                          <td key={'input' + variation._id}><input type="checkbox"/></td>
                          {contentVariation}
                        </tr>
                      )
                    })
                  }
                  return result
                })}
                </tbody>
              </table>

            </div>
          </div>
          <MqPagination className="table-pagination-right pagination align-self-end"
                        from={1}
                        to={15}
                        choosePage={(page) => {
                            this.choosePage(page)
                        }}
                        onPrev={() =>{
                          this.setState((state) => {
                            state.currentPage--
                            return state
                          })
                        }}
                        onNext={() =>{
                          this.setState((state) => {
                            state.currentPage++
                            return state
                          })
                        }}
                        currentPage={this.state.currentPage}

          />
          <Modal isOpen={this.state.showModelDelete}
                 className={'modal-lg ' + this.props.className}>
            <ModalHeader toggle={this.toggleLarge}>
              <i className="icon-menu7 mr-2"></i> &nbsp;Modal with icons
            </ModalHeader>
            <ModalBody>
              <MqAlert className="alert alert-warning alert-dismissible alert-styled-left border-top-0 border-bottom-0 border-right-0">
                <span className="font-weight-semibold">Lưu ý!</span> Sau khi xóa sản phẩm, mọi thông tin sẽ không thể phục hồi.
              </MqAlert>
              <p>Bạn đồng ý xóa sản phẩm này chứ?</p>
              {this.state.deleteItemStatus === true ? (<p className="modal-clear-status"><SuccessIcon /></p>) : ''}
              {this.state.deleteItemStatus === false ? [(
                <p className="modal-clear-status"><ErrorIcon /></p>),
                <MqAlert className="alert alert-warning alert-dismissible alert-styled-left border-top-0 border-bottom-0 border-right-0">
                <span className="font-weight-semibold">Đã xảy ra lỗi!</span> Không thể thực hiện. Vui lòng thực hiện lại sau.
              </MqAlert>]: ''}


            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => {

              }}>Do Something</Button>{' '}
              <Button color="secondary" onClick={() => {this.cancelDeleteItem()}}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      </main>
    )
  }
}

export default Users;
