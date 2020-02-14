import React, { Component, lazy, Suspense } from 'react';
import ProductHeader from "./ProductHeader";
import MqSelect from "../../containers/Components/MqSelect";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import MqAlert from "../../containers/Components/MqAlert";
import SuccessIcon from "../../containers/Components/SuccessIcon";
import ErrorIcon from "../../containers/Components/ErrorIcon";
import MqLoading from "../../containers/Components/MqLoading";
const SELECT_ITEM = 1
const REMOVE_ITEM = -1
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
const f = (a, b) => [].concat(...a.map(d => b.map(e => [].concat(d, e))));
const cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);
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
      tab: "vital-info",
      attributes: [ //tam thoi chua dung den

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
      showModelResetVariations: false,
      showModelChangeIsParentResetVariations: false,
      variations: [
        // {
        //   price: 0,
        //   option: {
        //     attribute: 1,
        //     value: 1
        //   },
        //   sku: 1,
        //   quantity: 1
        // }
      ],
      isParent: false,
      productOptions: [
        // {
        //   attribute: {
        //
        //   },
        //   value: ''
        // }
      ],
      productImages: [

      ]
    }
  }
  componentDidMount() {
    this.setState(state => {
      for(let i= 0 ; i < 10; i++){
        state.productImages.push({
          ref: "product-image+"+(i+1),
          image: '',
          base64: '',
          loading: false
        })
      }
      return state
    })
  }

  resetVariations(){
    this.setState(state => {
      state.showModelResetVariations = false
      state.variations = []
      state.parentOptions = state.parentOptions.map(item => {
        item.values = [{
          key: makeid(10),
          text: ''
        }]
        return item
      })
      return state
    })
  }
  changeIsParentResetVariation(){
    this.setState(state => {
      state.showModelChangeIsParentResetVariations = false
      state.variations = []
      state.productAttributes = []
      state.parentOptions = []
      state.isParent = false
      return state
    })
  }
  addVariations(){

    let variations = []
    this.state.parentOptions.forEach(parentOption => {

      if(this.state.productAttributes.find(attribute => {
        return attribute.key == parentOption.attribute.key
      })){
        let temp = []
        parentOption.values.forEach(item => {
          if(item.text != ""){
            temp.push({
              attribute:parentOption.attribute,
              value: item
            })
          }

        })
        variations.push(temp)
      }
    })
    console.log("1",variations)
    if(variations.length > 1){
      variations = cartesian(...variations)
    }

    console.log("2",variations)
    this.setState(state => {
      state.variations = state.variations.concat(variations)
      state.parentOptions = state.parentOptions.map(item => {
        item.values = [{
          key: makeid(10),
          text: ''
        }]
        return item
      })
      return state
    })
  }
  checkSetParentOptions(){
    return this.state.variations.length > 0
  }
  setTab(tab){
    this.setState({
      tab: tab
    })
  }
  selectProductAttribute(attribute){
    const {productAttributes} = this.state
    console.log(productAttributes)
    if(!productAttributes.find(i => {
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
        if(state.isParent){
            state.productOptions = []
        }else{
          state.productOptions = state.productAttributes.map(productAttribute =>{
              return {
                attribute: productAttribute,
                value: ""
              }
          })
        }
        console.log('sau khi chon',state.productAttributes)
        return state
      })
    }
  }
  removeProductAttribute(attribute){
    this.setState(state => {
      console.log("truoc",attribute,state.productAttributes)
      state.productAttributes = state.productAttributes.filter(item => {
        return item.key != attribute.key
      })
      console.log("sau",attribute,state.productAttributes)
      return state
    })
  }
  getContentProductOptions(attribute,attributeIndex){
    const {productOptions,isParent} = this.state
    if(!isParent){
      let productOption = productOptions.find(item => {
        return item.attribute.key == attribute.key
      })
      console.log(productOptions,productOption)
      return (
        <div className="form-group row" key={attributeIndex+productOption.attribute.text}>
          <label className="col-form-label col-lg-2">{productOption.attribute.text}</label>
          <div className="col-lg-4">
            <input type="text" className="form-control" value={productOption.value} onChange={(e) => {
              this.changeProductOptionValueText(attribute,e.target.value)
            }}/>
          </div>
        </div>
      )
    }
    return ""
  }
  getTableVariations(){
    const {variations,productAttributes} = this.state
    if(this.checkSetParentOptions()){
      return (
        <div className="card">
          <div className="card-header header-elements-inline">
            <h5 className="card-title">Variations</h5>
          </div>

          <div className="card-body">
            Example of a <code>basic</code> table. For basic styling (light padding and only horizontal dividers) add
            the base class <code>.table</code> to any <code>&lt;table&gt;</code>. It may seem super redundant, but
            given the widespread use of tables for other plugins like calendars and date pickers, we've opted to
            isolate our custom table styles.
          </div>

          <div className="table-responsive">
            <table className="table">
              <thead>

              <tr>
                <th><input type="checkbox"/></th>
                {this.state.productAttributes.map(productAttribute => (
                  <th key={productAttribute.key}>{productAttribute.text}</th>
                ))}
                <th>Variation SKU</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
              </thead>
              <tbody>
              {
                variations.map((variationAttrs,index) => {
                  let trContent = []
                  trContent.push(<td key={makeid(10)}><input type="checkbox"/></td>)
                  for(let i = 0 ; i < productAttributes.length ; i++){
                    let variationAttr = variationAttrs.find(item => {
                      return item.attribute.key == productAttributes[i].key
                    })
                    trContent.push(<td key={variationAttr.value.key}>{variationAttr.value.text}</td>)
                  }
                  trContent.push(<td key={makeid(10)}><input type="text" className="form-control"/></td>)
                  trContent.push(<td key={makeid(10)}><input type="text" className="form-control"/></td>)
                  trContent.push(<td key={makeid(10)}><input type="text" className="form-control"/></td>)
                  return (<tr key={index}>{trContent}</tr>)
                })
              }
              </tbody>
            </table>
          </div>
        </div>
      )
    }
    return ""
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
  changeProductOptionValueText(attribute,text){
    this.setState(state => {
      state.productOptions = state.productOptions.map(item => {
        if(item.attribute.key == attribute.key){
          item.value = text
        }
        return item
      })
      return state
    })
  }
  getContentProductParentAttributes(){
    console.log(this.state.productAttributes)
    return (
      (this.state.productAttributes.length > 0 && this.state.isParent) ?
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
                    this.getContentParentOptions(productAttribute)
                  }
                </div>
              ))
            }
            <div className="form-group row">
              <div className="offset-lg-2 col-lg-3">
                <button type="button" className="btn btn-primary" onClick={() => {this.addVariations()}}>Thêm biến thể <i className="icon-paperplane ml-2"></i></button>
              </div>
            </div>

          </fieldset>
        ) : ""
    )
  }
  getContentParentOptions(attribute){
    console.log(attribute,this.state.parentOptions)
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
  getContentProductSingle(){
    if(!this.state.isParent){
      return (
        <fieldset className="mb-3">
          <p className="mb-4">Nếu sản phẩm này là sản phẩm cha, vui lòng bỏ qua mục này.</p>
          <legend className="text-uppercase font-size-sm font-weight-bold">Các thuộc tính</legend>
          <div className="form-group row">
            <label className="col-form-label col-lg-2">Các thuộc tính</label>
            <div className="col-lg-10">
              <MqSelect
                multiple
                values={ATTRIBUTES}
                defaultItemSelected={this.state.selectProductAttribute}
                onChange={(values,item,type)=>{

                  if(type == SELECT_ITEM){
                    this.selectProductAttribute(item)
                  }else{
                    this.removeProductAttribute(item)
                  }
                }}
                placeholder="Chọn các thuộc tính cho sản phẩm"
              />
            </div>
          </div>
          {
            this.state.productAttributes.map((productAttribute,index) => (
              this.getContentProductOptions(productAttribute,index)
            ))
          }
          <div className="text-right">
            <button type="button" className="btn btn-primary">Next <i className="icon-next ml-2"></i></button>
          </div>
        </fieldset>
      )
    }
    return ""
  }
  setProductImage(file,ref){
    this.setState(state => {
      state.productImages = state.productImages.map(img => {
        if(img.ref == ref){
          img.image = file
          img.loading = true
        }
        return img
      })
      return state
    })
    this.getBase64Image(file,ref)
  }
  getBase64Image(file,ref){
    const rjs = this
    this.getBase64(file, (result) => {
      rjs.setState(state => {
        state.productImages = state.productImages.map(img => {
          if(img.ref == ref){
            img.base64 = result
            img.loading = false
          }
          return img
        })
        return state
      })
    })
  }
  getBase64(file, cb) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result)
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  getContentImage(image){
    let i = this.state.productImages.find(img => {
      return img.ref == image.ref
    })
    if(i.image){
      return (
        <div className="card-body-image">
          {i.loading? (<MqLoading/>) :
            (<img src={i.base64} alt="" />)
          }
        </div>
      )
    }
    else{
      return (
        <div className="card-body-image">
          <span className="card-body-image-upload" onClick={() => {this.refs[image.ref].click()}}>
            <i className="fa fa-image"></i>
            Tải lên hình ảnh
          </span>
          <input type="file" ref={image.ref} onChange={(e) => {
            let file = e.target.files[0]
            this.setProductImage(file,image.ref)
          }} hidden/>
        </div>
      )
    }
  }
  removeProductImage(ref){
    this.setState(state => {
      state.productImages = state.productImages.map(img => {
        if(img.ref == ref){
          img.image = null
          img.base64 = null
        }
        return img
      })
      return state
    })
  }
  render() {
    return(
      <main>
        <ProductHeader/>
        <div className="content">
          <div className="card">
            <div className="card-header header-elements-inline">
              <h6 className="card-title">Basic tabs</h6>
            </div>

            <div className="card-body">
              <ul className="nav nav-tabs justify-content-center nav-tabs-highlight">
                <li className="nav-item tab-head-item"><span className={"nav-link "+ (this.state.tab == 'vital-info' ? "active" : "")} onClick={() => {this.setTab('vital-info')}} data-toggle="tab">Vital Info</span></li>
                <li className={"nav-item tab-head-item " + (this.state.isParent ? "" :"table-disabled")}><span className={"nav-link "+ (this.state.tab == 'variations' ? "active" : "")} onClick={() => {
                  if(this.state.isParent){
                    this.setTab('variations')
                  }
                }} data-toggle="tab">Variations</span></li>
                <li className="nav-item tab-head-item"><span className={"nav-link "+ (this.state.tab == 'offer' ? "active" : "")} onClick={() => {this.setTab('offer')}} data-toggle="tab">Offer</span></li>
                <li className="nav-item tab-head-item"><span className={"nav-link "+ (this.state.tab == 'images' ? "active" : "")} onClick={() => {this.setTab('images')}} data-toggle="tab">Images</span></li>
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
                        <label className="col-form-label col-lg-2">Tên sản phẩm*</label>
                        <div className="col-lg-10">
                          <input type="text" className="form-control"/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-2">SKU sản phẩm*</label>
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
                            onChange={() =>{
                            }
                            }
                            placeholder="Chọn một thương hiệu"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-2">Nhà sản xuất</label>
                        <div className="col-lg-10">
                          <MqSelect
                            multiple
                            onChange={() =>{
                            }
                            }
                            placeholder="Chọn một nhà sản xuất"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-2">Là sản phẩm cha</label>
                        <div className="col-lg-10">
                          <input type="checkbox" checked={this.state.isParent} onChange={(e) => {
                           const {variations} = this.state
                            let checked = e.target.checked
                            if(checked == false && variations.length > 0){
                              this.setState({
                                showModelChangeIsParentResetVariations:true
                              })
                            }
                            else{
                              this.setState(state => {
                                state.isParent = checked
                                state.productAttributes = []
                                state.productOptions = []
                                state.variations = []
                                state.parentOptions = []
                                return state
                              })
                            }
                          }}/>
                        </div>
                      </div>
                      {
                        this.getContentProductSingle()
                      }
                    </fieldset>
                  </form>
                </div>
                <div className={"tab-pane fade" + (this.state.tab == 'variations' ? " active show" : "")} ref="variations">
                  {
                    this.state.isParent ? (
                      <form action="#">
                        <fieldset className="mb-3">
                          <div className="form-group row">
                            <label className="col-form-label col-lg-2">Loại biến thể</label>
                            <div className="col-lg-9">
                              <MqSelect
                                disabled={this.checkSetParentOptions()}
                                multiple
                                defaultItemSelected={this.state.productAttributes}
                                values={ATTRIBUTES}
                                onChange={(values,item,type)=>{
                                  if(type == SELECT_ITEM){
                                    this.selectProductAttribute(item)
                                  }else{
                                    this.removeProductAttribute(item)
                                  }
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
                          this.getContentProductParentAttributes()
                        }
                        <div className="text-right">
                          <button type="button" className="btn btn-primary">Next <i className="icon-next ml-2"></i></button>
                        </div>
                      </form>
                    ) : ""
                  }
                </div>

                <div className={"tab-pane fade" + (this.state.tab == 'offer' ? " active show" : "")} ref="offer">
                  <fieldset className="mb-3">
                    <div className="form-group row">
                      <label className="col-form-label col-lg-2">Giá của sản phẩm</label>
                      <div className="col-lg-10">
                        <input type="text" className="form-control"/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-lg-2">Số lượng</label>
                      <div className="col-lg-10">
                        <input type="text" className="form-control"/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-lg-2">Giảm giá</label>
                      <div className="col-lg-10">
                        <MqSelect
                          values={ATTRIBUTES}
                          onChange={() =>{
                          }
                          }
                          placeholder="Chọn một mục giảm giá"
                        />
                      </div>
                    </div>
                    {
                      this.state.productAttributes.map((productAttribute) => (
                        this.getContentProductOptions(productAttribute)
                      ))
                    }
                  </fieldset>
                </div>

                <div className={"tab-pane fade" + (this.state.tab == 'images' ? " active show" : "")} ref="images">
                  <div className="row">
                    {
                      this.state.productImages.map(image => (
                        <div className="col-xl-3 col-sm-6" key={image.ref}>
                          <div className="card">
                            <div className="card-body text-center">
                              {
                                this.getContentImage(image)
                              }

                              <div className="mb-3">
                                <div className="list-icons list-icons-extended font-weight-semibold mt-3 text-lg-center">
                                  {
                                    image.base64 ? (
                                      <span className="list-icons-item image-bottom-icon-remove" onClick={() => {
                                        this.removeProductImage(image.ref)
                                      }} data-popup="tooltip" title="" data-container="body"
                                            data-original-title="Remove Image"><i className="fa fa-trash"></i> Remove</span>
                                    ): (
                                      <span className="list-icons-item form-text text-warning">* Hình ảnh nên có kích thước 1000x1000 trở lên</span>
                                    )
                                  }

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          {
            this.getTableVariations()
          }
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
          <Modal isOpen={this.state.showModelChangeIsParentResetVariations} className={'modal-lg'}>
            <ModalHeader toggle={this.toggleLarge}>
              <i className="icon-menu7 mr-2"></i> &nbsp;Modal with icons
            </ModalHeader>
            <ModalBody>
              <MqAlert className="alert alert-warning alert-dismissible alert-styled-left border-top-0 border-bottom-0 border-right-0">
                <span className="font-weight-semibold">Lưu ý!</span> Bạn sẽ xóa các variations và chuyển sản phẩm thành sản phẩm đơn?
              </MqAlert>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => {
                this.changeIsParentResetVariation()
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
