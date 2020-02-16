import React, { Component, lazy, Suspense } from 'react';
import MqDivDropdown from "../../containers/Components/MqDivDropdown";
import MqDivDropdownHead from "../../containers/Components/MqDivDropdownHead";
import MqDivDropdownBody from "../../containers/Components/MqDivDropdownBody";
import AttributesHeader from "./AttributesHeader";
import MqSelect from "../../containers/Components/MqSelect";
import {Link} from "react-router-dom";
import MqPagination from "../../containers/Components/MqPagination";
import MqLoading from "../../containers/Components/MqLoading";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import MqAlert from "../../containers/Components/MqAlert";
import {getBase64, makeId} from "../../helpers";
const CATEGORIES = [

]
class  Attributes extends Component{
  constructor(props) {
    super(props);
    this.state = {
      attributes: [
        {
          _id: "mot",
          name: "color",
          description: "Màu sắc sản phẩm" ,
        },
        {
          _id: "hai",
          name: "size",
          description: "Kích cỡ sản phẩm" ,
        },
      ],
      nextId: "nam",
      attribute: {
        name: "",
        description: "",
      },
      creatingAttribute: false,
      tempAttribute: {
        _id: null,
        name: "",
        description: ""
      },
      showModelEditAttribute: false,
      showModelDeleteAttribute: false,
      showModelDeleteAttributes: false,
      deletingAttribute: false,
      deletingAttributes: false,
      attributesSelected: [
      ],
      selectedAll: false
    }
  }
  componentDidMount() {
    this.setState(state => {
      state.attributes.forEach(attribute => {
        state.attributesSelected[(attribute._id)] = false
      })
      return state
    })
  }
  actionEditAttribute(_id){
    this.setState(state => {
      let tempAttribute = state.attributes.find(item => {
        return item._id == _id
      })
      state.tempAttribute = Object.assign({},tempAttribute)
      state.showModelEditAttribute = true
      return state
    })
  }
  actionDeleteAttribute(_id){
    this.setState(state => {
      state.tempAttribute = state.attributes.find(item => {
        return item._id == _id
      })
      state.showModelDeleteAttribute = true
      return state
    })
  }
  changeNameAttribute(name){
    this.setState(state => {
      state.attribute.name = name
      return state
    })
  }
  changeDescriptionAttribute(description){
    this.setState(state => {
      state.attribute.description = description
      return state
    })
  }
  changeNameTemp(name){
    this.setState(state => {
      state.tempAttribute.name = name
      return state
    })
  }
  changeDescriptionTemp(description){
    this.setState(state => {
      state.tempAttribute.description = description
      return state
    })
  }
  createAttribute(){
    this.setState({
      creatingAttribute: true
    })
      setTimeout(() => {
        this.setState(state => {
          let newAttribute = state.attribute
          newAttribute._id = makeId(10)
          state.attributes.unshift(newAttribute)
          state.attribute = {
            name: "",
            description: ""
          }
          state.creatingAttribute = null
          return state
        })
      },3000)
  }
  updateAttribute(){
    this.setState({
      updatingAttribute: true
    })
    setTimeout(() => {
      this.setState(state => {
        state.attributes = state.attributes.map(attribute => {
          if(attribute._id == state.tempAttribute._id){
            attribute = Object.assign({},state.tempAttribute)
          }
          return attribute
        })
        state.tempAttribute = {
          _id: null,
          name: "",
          description: ""
        }
        state.updatingAttribute = false
        state.showModelEditAttribute = false
        return state
      })
    },3000)
  }
  deleteAttribute(){
    this.setState({
      deletingAttribute: true
    })
    setTimeout(() => {
      this.setState(state => {

        state.attributes = state.attributes.filter(attribute => {
          return attribute._id != state.tempAttribute._id
        })
        state.showModelDeleteAttribute = false
        state.deletingAttribute = false
        return state
      })
    },3000)
  }
  deleteAttributes(){
    this.setState({
      deletingAttributes: true
    })
    setTimeout(() => {
      this.setState(state => {
        let ids = []
        state.attributes.forEach(attribute => {
          if(!state.attributesSelected[attribute._id]){
            ids.push(attribute._id)
          }
        })
        state.attributes = state.attributes.filter(attribute => {
          return ids.includes(attribute._id)
        })
        state.showModelDeleteAttributes = false
        state.deletingAttributes = false
        return state
      })
    },3000)
  }
  coverAttributesToMqSelectValuesObject(){
    return this.state.attributes.map(item => {
      return {
        key: item._id,
        text: item.name
      }
    })
  }
  coverAttributeToMqSelectValuesObject(attribute){
    if(attribute){
      return {
        key: attribute._id,
        text: attribute.name
      }
    }
    return {}
  }
  checkSelectedAllItem(attributesSelected){
    for(let i = 0 ; i < this.state.attributes.length; i++){
      if(!attributesSelected[this.state.attributes[i]._id]){
        return false
      }
    }
    return true
  }
  numberItemSelected(){
    let num = 0
    this.state.attributes.forEach(attribute => {
      if(this.state.attributesSelected[attribute._id]){
        num++
      }
    })
    return num
  }
  render() {
    const {attribute,tempAttribute} = this.state
    return(
      <main>
        <AttributesHeader/>
        <div className="content">
          <div className="row">
            <div className="col-md-5">
              <div className="card">
                <div className="card-header header-elements-inline">
                  <h5 className="card-title">Thêm mới một nhà cung cấp</h5>
                </div>

                <div className="card-body">
                  <form onSubmit={(e) => {
                    this.createAttribute()
                    e.preventDefault()
                  }}>
                    <fieldset className="mb-3">
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Tên thuộc tính </label>
                        <div className="col-lg-8">
                          <input type="text" className="form-control" readOnly={this.state.creatingAttribute} value={attribute.name} onChange={(e) => {
                              this.changeNameAttribute(e.target.value)
                          }}
                          required
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Mô tả</label>
                        <div className="col-lg-8">
                          <textarea className="form-control"
                                    readOnly={this.state.creatingAttribute}
                                    value={attribute.description} onChange={(e) => {
                                    this.changeDescriptionAttribute(e.target.value)
                          }}
                          />
                        </div>
                      </div>

                    </fieldset>
                    {
                      this.state.creatingAttribute ?  <MqLoading/> : ""
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
                                showModelDeleteAttributes: true
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
                      <th><input type="checkbox" checked={this.state.selectedAll && this.state.attributes.length > 0} onChange={e => {
                        let checked = e.target.checked
                        this.setState(state => {
                          if(state.attributes.length == 0){
                            checked = false
                          }
                          state.selectedAll = checked
                          state.attributes.forEach(attribute => {
                            state.attributesSelected[attribute._id] = checked
                          })
                          return state
                        })
                      }} /></th>
                      <th>Tên thuộc tính</th>
                      <th>Mô tả</th>
                      <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      this.state.attributes.length == 0 ? (<tr>
                        <td colSpan={5} className="text-warning text-center">Không có mục nào để hiển thị</td>
                      </tr>) : ""
                    }
                    {
                      this.state.attributes.map(attribute => (
                        <tr>
                          <td><input type="checkbox" checked={this.state.attributesSelected[attribute._id]} onChange={e => {
                            let checked = e.target.checked
                            this.setState(state=>{
                              state.attributesSelected[attribute._id] = checked
                              if(this.checkSelectedAllItem(state.attributesSelected)){
                                state.selectedAll = true
                              }else{
                                state.selectedAll = false
                              }
                              return state
                            })
                          }}/></td>
                          <td>{attribute.name}</td>
                          <td className="custom-description">{attribute.description}</td>
                          <td>
                            <button className="btn btn-light" onClick={() => {
                              this.actionEditAttribute(attribute._id)
                            }}>Sửa</button>
                            <button className="btn btn-danger" onClick={() => {
                              this.actionDeleteAttribute(attribute._id)
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
        <Modal isOpen={this.state.showModelEditAttribute} className={'modal-lg'}>
          <ModalHeader toggle={this.toggleLarge}>
            <i className="icon-menu7 mr-2"></i> &nbsp;Modal with icons
          </ModalHeader>
          <form onSubmit={(e) => {
            e.preventDefault()
            this.updateAttribute()
          }}>
          <ModalBody>
              <fieldset className="mb-3">
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Tên thuộc tính </label>
                  <div className="col-lg-8">
                    <input type="text" className="form-control" readOnly={this.state.creatingAttribute} value={tempAttribute.name} onChange={(e) => {
                      this.changeNameTemp(e.target.value)
                    }}
                           required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Mô tả</label>
                  <div className="col-lg-8">
                          <textarea className="form-control"
                                    readOnly={this.state.creatingAttribute}
                                   onChange={(e) => {
                            this.changeDescriptionTemp(e.target.value)
                          }}
                                    value={tempAttribute.description}
                          >

                          </textarea>
                  </div>
                </div>

              </fieldset>
              {
                this.state.updatingAttribute ?  <MqLoading/> : ""
              }

          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary">Cập nhật attribute</Button>
            <Button color="secondary" onClick={() => {
              this.setState({
                tempAttribute: {
                  _id: null,
                  name: "",
                  description: ""
                },
                showModelEditAttribute: false
              })
            }}>Hủy</Button>
          </ModalFooter>
          </form>
        </Modal>
        <Modal isOpen={this.state.showModelDeleteAttribute} className={'modal-lg'}>
          <ModalHeader toggle={this.toggleLarge}>
            <i className="icon-menu7 mr-2"></i> &nbsp;Modal with icons
          </ModalHeader>
          <ModalBody>
            <MqAlert className="alert alert-warning alert-dismissible alert-styled-left border-top-0 border-bottom-0 border-right-0">
              <span className="font-weight-semibold">Lưu ý!</span> Bạn sẽ xóa danh mục vửa chọn?
            </MqAlert>
            {
              this.state.deletingAttribute? <MqLoading/> : ""
            }
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => {
              this.deleteAttribute()
            }}>Xóa</Button>
            <Button color="secondary" onClick={() => {
              this.setState({
                showModelDeleteAttribute: false
              })
            }}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.showModelDeleteAttributes} className={'modal-lg'}>
          <ModalHeader toggle={this.toggleLarge}>
            <i className="icon-menu7 mr-2"></i> &nbsp;Modal with icons
          </ModalHeader>
          <ModalBody>
            <MqAlert className="alert alert-warning alert-dismissible alert-styled-left border-top-0 border-bottom-0 border-right-0">
              <span className="font-weight-semibold">Lưu ý!</span> Bạn sẽ xóa danh mục vửa chọn?
            </MqAlert>
            {
              this.state.deletingAttributes? <MqLoading/> : ""
            }
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => {
              this.deleteAttributes()
            }}>Xóa</Button>
            <Button color="secondary" onClick={() => {
              this.setState({
                deletingAttributes: false
              })
            }}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </main>
    )
  }
}

export default Attributes

