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
    name: 'images',
    text: 'Images'
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
function createRandomProduct() {
  let p = []
  for(let i = 0 ; i< 100; i++){
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
      images: makeid(10),
      options: makeid(10),
      sku: makeid(10),
      is_parent: Math.random() < 0.5
    })

  }
  return p
}

class Users extends Component {
  constructor(props){
    super(props)
    this.state = {
      variations: {},
      showVariations: {}
    }
  }
  getVariation(parent_sku){
    if(!this.state.variations[parent_sku]){
      let variation = this.makeVariations(parent_sku)
      this.setState(state => {
        state[parent_sku] = variation
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
    for(let i = 0 ; i< 100; i++){
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
        images: makeid(10),
        options: makeid(10),
        sku: makeid(10),
        parent_sku: parent_sku
      })

    }
    return p
  }
  render() {
    const products = createRandomProduct()
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
              <table className="table">
                <thead>
                <tr>
                  <th><input type="checkbox"/></th>
                  {COLUMNS.map(column => (
                    <th key={column.name}>{column.text}</th>
                  ))}
                </tr>
                </thead>
                <tbody>
                {products.map((item,index) => {
                  let result = []

                  result.push(<tr key={index}>
                    <td key={'input' + item._id}><input type="checkbox"/></td>
                    {
                      COLUMNS.map((column,cl_index) => {

                        if(column.name == 'is_active'){
                          if(item['is_parent']){
                            return (<td key={item._id+cl_index}>
                              <span className="product-status" onClick={() => {this.showVariation(item.sku)}}><i className="icon-arrow-right13"></i> Variations</span>
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
                            }
                            contentVariation.push(<td key={variation._id+cl_variation_index}>
                              <span className="product-status"><i className="icon-close"></i> Inactive</span>
                            </td>)
                          }
                          else{
                            contentVariation.push(<td key={variation._id+cl_variation_index}>{item[column_variation.name]}</td>)
                          }
                        })

                      result.push(
                        <tr key={variation_index+'variations'}>
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
