import React, { Component, lazy, Suspense } from 'react';
import ProductHeader from "./ProductHeader";
import MqSelect from "../../containers/Components/MqSelect";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import MqAlert from "../../containers/Components/MqAlert";
import SuccessIcon from "../../containers/Components/SuccessIcon";
import ErrorIcon from "../../containers/Components/ErrorIcon";
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
function makeid(length) {
  let result           = '';
  let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
class Product extends  Component{
  constructor(props){
    super(props)
    this.state = {
      tab: "variations",
      attributes: [

      ],
      productAttributes: [
        /* thuộc tính của một attributes */
        // {
        //   key: _id, của attributes
        //   value: value ,
        //    index: tao random
        // }
      ],
      parentOptions: [
        // {
        //   attribute: {
        //
        //   },
        //   values: [
        //   {
        //        key: tu tao
        //        text: ""
        //   }
        //   ]
        // }
      ],
      showModelResetVariations: false
    }
  }
  resetVariations(){
    this.setState(state => {
      state.showModelResetVariations = false

      state.parentOptions = state.parentOptions.map(item => {
        item.values = {
          key: makeid(10),
          text: ''
        }
        return item
      })
      return state
    })
  }
  checkSetParentOptions(){
    for(let i = 0 ; i< this.state.parentOptions.length; i++){
      for(let j = 0; j< this.state.parentOptions[i].values.length;j++){
        if(this.state.parentOptions[i].values[j].text != ""){
          return true
        }
      }
    }
    return false
  }
  setTab(tab){
    this.setState({
      tab: tab
    })
  }
  selectProductAttribute(attribute){
    if(!this.state.productAttributes.find(i => {
      return i.key == attribute.key
    })){
      // nếu không tồn tại
      this.setState(state => {
        state.productAttributes.push(attribute)
        if(!state.parentOptions.find(parentOption => {
          return parentOption.attribute.key == attribute.key
        })){
          state.parentOptions.push({
            attribute:attribute,
            values: [{
              key: makeid(10),
              text: ''
            }]
          })
        }
        return state
      })
    }
  }
  removeProductAttribute(attribute){
    this.setState(state => {
      state.productAttributes = state.productAttributes.filter(item => {
        return item.key != attribute.key
      })
      return state
    })
  }

  changeParentOptionValueText(attribute,valueKey,text){
    this.setState(state => {
      state.parentOptions = state.parentOptions.map(parentOption => {
        if(parentOption.attribute.key == attribute.key){
          if(parentOption.values.length == 1){
            parentOption.values = parentOption.values.map(item => {
              if(item.key == valueKey){
                item.text = text
              }
              return item
            })
            parentOption.values.push({
              key: makeid(10),
              text: ''
            })
          }else if(parentOption.values.length > 1){
              if(text !=''){
                parentOption.values = parentOption.values.map(item => {
                  if(item.key == valueKey){
                    item.text = text
                  }
                  return item
                })
                if(!parentOption.values.some(i => {
                  return i.text == ''
                })){
                  parentOption.values.push({
                    key: makeid(10),
                    text: ''
                  })
                }

              }else{
                parentOption.values = parentOption.values.filter(item => {
                  return item.key != valueKey
                })
              }
          }
        }
        return parentOption
      })
      return state
    })
  }
  getContentProductAttributes(){
    return (
      this.state.productAttributes.length > 0 ?
        (
          <fieldset className="mb-3">
            <legend className="text-uppercase font-size-sm font-weight-bold">Variations</legend>
            <p className="mb-4">Examples of standard form controls supported in an example form layout.
              Individual form controls automatically receive some global styling. All
              textual <code>&lt;input></code>, <code>&lt;textarea></code>,
              and <code>&lt;select></code> elements with <code>.form-control</code> are set to <code>width:
                100%;</code> by default. Wrap labels and controls in <code>.form-group</code> for optimum
              spacing. Labels in horizontal form require <code>.col-form-label</code> class.</p>
            {
              this.state.productAttributes.map((productAttribute,index) => (
                <div className="form-group row" key={index}>
                  <label className="col-form-label col-lg-2">{productAttribute.text}</label>
                  {
                    this.getParentOptions(productAttribute)
                  }
                </div>
              ))
            }
            <div className="form-group row">
              <div className="offset-lg-2 col-lg-3">
                <button type="button" className="btn btn-primary">Thêm biến thể <i className="icon-paperplane ml-2"></i></button>
              </div>
            </div>

          </fieldset>
        ) : ""
    )
  }
  getParentOptions(attribute){

    let parentOption = this.state.parentOptions.find(i => {
      return i.attribute.key == attribute.key
    })
    if(parentOption.values.length > 0){
      let results = []
      let values = parentOption.values
      values.forEach((value,index) => {
        results.push(
          <div className="col-lg-1" key={index}>
            <input type="text" className="form-control" value={value.text} onChange={(e) => {
                this.changeParentOptionValueText(attribute,value.key,e.target.value)
            }}/>
          </div>
        )
      })
      return results
    }
    return (
      <div className="col-lg-1">
        <input type="text" className="form-control"/>
      </div>
    )
  }
  render() {
    return(
      <main>
        <ProductHeader/>
        <div className="content">
          <div className="card">
            <div className="card-header header-elements-inline">
              <h6 className="card-title">Basic tabs</h6>
              <div className="header-elements">
                <div className="list-icons">
                  <a className="list-icons-item" data-action="collapse"></a>
                  <a className="list-icons-item" data-action="reload"></a>
                  <a className="list-icons-item" data-action="remove"></a>
                </div>
              </div>
            </div>

            <div className="card-body">
              <ul className="nav nav-tabs justify-content-center nav-tabs-highlight">
                <li className="nav-item tab-head-item"><span className={"nav-link "+ (this.state.tab == 'vital-info' ? "active" : "")} onClick={() => {this.setTab('vital-info')}} data-toggle="tab">Vital Info</span></li>
                <li className="nav-item tab-head-item"><span className={"nav-link "+ (this.state.tab == 'variations' ? "active" : "")} onClick={() => {this.setTab('variations')}} data-toggle="tab">Variations</span></li>
                <li className="nav-item tab-head-item"><span className={"nav-link "+ (this.state.tab == 'offer' ? "active" : "")} onClick={() => {this.setTab('variations')}} data-toggle="tab">Offer</span></li>
                <li className="nav-item tab-head-item"><span className={"nav-link "+ (this.state.tab == 'images' ? "active" : "")} onClick={() => {this.setTab('variations')}} data-toggle="tab">Images</span></li>
              </ul>
              <div className="form-group float-right">
                <BootstrapSwitchButton
                  checked={false}
                  onlabel='Advanced View'
                  offlabel='Basic'
                  width={100}
                  onChange={(checked) => {
                      console.log(checked)
                  }}
                />
              </div>
              <div className="clearfix"></div>
              <div className="tab-content">
                <div className={"tab-pane fade" + (this.state.tab == 'vital-info' ? " active show" : "")} ref="vital-info">
                  <form action="#">
                    <fieldset className="mb-3">
                      <div className="form-group row">
                        <label className="col-form-label col-lg-2">Tên sản phẩm</label>
                        <div className="col-lg-10">
                          <input type="text" className="form-control"/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-2">SKU sản phẩm</label>
                        <div className="col-lg-10">
                          <input type="text" className="form-control"/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-2">Thương hiệu</label>
                        <div className="col-lg-10">
                          <MqSelect
                            multiple
                            values={ATTRIBUTES}
                            selectedItem={(item) => {
                              console.log(item)
                            }}
                            removeItemSelected={(item) => {

                            }}
                            placeholder="Chọn một thương hiệu"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-2">Thương hiệu</label>
                        <div className="col-lg-10">
                          <MqSelect
                            multiple
                            selectedItem={(item) => {
                              console.log(item)
                            }}
                            removeItemSelected={(item) => {

                            }}
                            placeholder="Chọn một nhà sản xuất"
                          />
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
                <div className={"tab-pane fade" + (this.state.tab == 'variations' ? " active show" : "")} ref="variations">
                  <form action="#">
                    <fieldset className="mb-3">
                      <div className="form-group row">
                        <label className="col-form-label col-lg-2">Loại biến thể</label>
                        <div className="col-lg-9">
                          <MqSelect
                            disabled={this.checkSetParentOptions()}
                            multiple
                            values={ATTRIBUTES}
                            selectedItem={(item) => {
                              this.selectProductAttribute(item)
                            }}
                            removeItemSelected={(item) => {
                              console.log(item)
                              this.removeProductAttribute(item)
                            }}
                            placeholder="Cài đặt biến thể"
                          />
                        </div>
                        {
                          this.checkSetParentOptions()? (<div className="col-lg-1">
                            <button type="button" onClick={() => {
                              this.setState({
                                showModelResetVariations: true
                              })
                            }} className="btn btn-primary">Sửa</button>
                          </div>) : ""
                        }

                      </div>
                    </fieldset>
                    {
                      this.getContentProductAttributes()
                    }

                  </form>
                </div>

                <div className="tab-pane fade" ref="offer">
                  DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg whatever.
                </div>

                <div className="tab-pane fade" ref="images">
                  Aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthet.
                </div>
              </div>
            </div>
          </div>
          <Modal isOpen={this.state.showModelResetVariations} className={'modal-lg'}>
            <ModalHeader toggle={this.toggleLarge}>
              <i className="icon-menu7 mr-2"></i> &nbsp;Modal with icons
            </ModalHeader>
            <ModalBody>
              <MqAlert className="alert alert-warning alert-dismissible alert-styled-left border-top-0 border-bottom-0 border-right-0">
                <span className="font-weight-semibold">Lưu ý!</span> Bạn sẽ xóa các variations đã cài đặt?
              </MqAlert>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => {
                    this.resetVariations()
              }}>Cài đặt lại</Button>
              <Button color="secondary" onClick={() => {}}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      </main>
    )
  }
}

export default Product
