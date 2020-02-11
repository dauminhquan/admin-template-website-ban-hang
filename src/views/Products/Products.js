import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import ProductsHeader from "./ProductsHeader";

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
      selectedAll: false
    }
  }
  componentDidMount() {
    let products = this.createRandomProduct(10)
    this.setState(state => {
      state.products = products
      products.forEach(product => {
        state.productsSelected[product._id] = false
      })
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
            <h6 className="mb-0 font-weight-semibold">
              Basic tables
            </h6>
            <span className="text-muted d-block">Tables with default <code>Bootstrap</code> styling</span>
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
                  {COLUMNS.map(column => (
                    <th key={column.name} className="columns-table" onClick={() => {this.sortAction(column.name)}}><span className="text-column">{column.text}</span> <span className={"table-sort-icon " + (this.state.sort.name == column.name? (this.state.sort.type == 'A-Z' ? "icon-sort-alpha-asc": 'icon-sort-alpha-desc') : "icon-sort") }></span></th>
                  ))}
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
                        if(column.name == 'is_active'){
                          if(item['is_parent'] && !item['parent_sku']){
                            return (<td key={item._id+cl_index}>
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
                      })
                    }
                  </tr>)

                  if(this.state.showVariations[item.sku]){
                    let variations = this.state.variations[item.sku]
                    variations.forEach((variation,variation_index) => {
                      let contentVariation = []
                        COLUMNS.map((column_variation,cl_variation_index) => {
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
        </div>
      </main>
    )
  }
}

export default Users;
