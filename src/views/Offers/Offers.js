import React, { Component, lazy, Suspense } from 'react';
import MqDivDropdown from "../../containers/Components/MqDivDropdown";
import MqDivDropdownHead from "../../containers/Components/MqDivDropdownHead";
import MqDivDropdownBody from "../../containers/Components/MqDivDropdownBody";
import OffersHeader from "./OffersHeader";
import MqSelect from "../../containers/Components/MqSelect";
import {Link} from "react-router-dom";
import MqPagination from "../../containers/Components/MqPagination";
import MqLoading from "../../containers/Components/MqLoading";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import MqAlert from "../../containers/Components/MqAlert";
import {getBase64, makeId} from "../../helpers";
import moment from 'moment'
const CATEGORIES = [

]
class  Offers extends Component{
  constructor(props) {
    super(props);
    this.state = {
      offers: [
        {
          _id: "mot",
          name: "Giảm giá tháng 1 đến tháng 2",
          start: "",
          end: "",
          discountType: "value",
          discount: 5,
          running: false,
          description: "Màu sắc sản phẩm" ,
        },
        {
          _id: "hai",
          name: "Giảm giá tháng 1 đến tháng 2",
          startDate: "",
          endDate: "",
          discountType: "percent",
          discount: 5,
          running: false,
          description: "Màu sắc sản phẩm" ,
        },
      ],
      offer: {
        name: "",
        startDate: "",
        endDate: "",
        discountType: "",
        discount: "",
        description: "",
      },
      creatingOffer: false,
      tempOffer: {
        _id: null,
        name: "",
        startDate: "",
        endDate: "",
        discountType: "",
        discount: "",
        description: "",
      },
      showModelEditOffer: false,
      showModelDeleteOffer: false,
      showModelDeleteOffers: false,
      deletingOffer: false,
      deletingOffers: false,
      offersSelected: [
      ],
      selectedAll: false
    }
  }
  componentDidMount() {
    this.setState(state => {
      state.offers.forEach(offer => {
        state.offersSelected[(offer._id)] = false
      })
      return state
    })
  }
  actionEditOffer(_id){
    this.setState(state => {
      let tempOffer = state.offers.find(item => {
        return item._id == _id
      })
      state.tempOffer = Object.assign({},tempOffer)
      state.showModelEditOffer = true
      return state
    })
  }
  actionDeleteOffer(_id){
    this.setState(state => {
      state.tempOffer = state.offers.find(item => {
        return item._id == _id
      })
      state.showModelDeleteOffer = true
      return state
    })
  }
  changeNameOffer(name){
    this.setState(state => {
      state.offer.name = name
      return state
    })
  }
  changeStartDateOffer(startDate){
    this.setState(state => {
      state.offer.startDate = startDate
      return state
    })
  }
  changeEndDateOffer(endDate){
    this.setState(state => {
      state.offer.endDate = endDate
      return state
    })
  }
  changeDiscountTypeOffer(discountType){
    this.setState(state => {
      state.offer.discountType = discountType
      return state
    })
  }
  changeDiscountOffer(discount){
    this.setState(state => {
      state.offer.discount = discount
      return state
    })
  }
  changeDescriptionOffer(description){
    this.setState(state => {
      state.offer.description = description
      return state
    })
  }
  changeNameTemp(name){
    this.setState(state => {
      state.tempOffer.name = name
      return state
    })
  }
  changeStartDateTemp(startDate){
    this.setState(state => {
      state.tempOffer.startDate = startDate
      return state
    })
  }
  changeEndDateTemp(endDate){
    this.setState(state => {
      state.tempOffer.endDate = endDate
      return state
    })
  }
  changeDiscountTypeTemp(discountType){
    this.setState(state => {
      state.tempOffer.discountType = discountType
      return state
    })
  }
  changeDiscountTemp(discount){
    this.setState(state => {
      state.tempOffer.discount = discount
      return state
    })
  }
  changeDescriptionTemp(description){
    this.setState(state => {
      state.tempOffer.description = description
      return state
    })
  }
  createOffer(){
    this.setState({
      creatingOffer: true
    })
      setTimeout(() => {
        this.setState(state => {
          let newOffer = state.offer
          newOffer._id = makeId(10)
          state.offers.unshift(newOffer)
          state.offer = {
            name: "",
            description: ""
          }
          state.creatingOffer = null
          return state
        })
      },3000)
  }
  updateOffer(){
    this.setState({
      updatingOffer: true
    })
    setTimeout(() => {
      this.setState(state => {
        state.offers = state.offers.map(offer => {
          if(offer._id == state.tempOffer._id){
            offer = Object.assign({},state.tempOffer)
          }
          return offer
        })
        state.tempOffer = {
          _id: null,
          name: "",
          description: ""
        }
        state.updatingOffer = false
        state.showModelEditOffer = false
        return state
      })
    },3000)
  }
  deleteOffer(){
    this.setState({
      deletingOffer: true
    })
    setTimeout(() => {
      this.setState(state => {

        state.offers = state.offers.filter(offer => {
          return offer._id != state.tempOffer._id
        })
        state.showModelDeleteOffer = false
        state.deletingOffer = false
        return state
      })
    },3000)
  }
  deleteOffers(){
    this.setState({
      deletingOffers: true
    })
    setTimeout(() => {
      this.setState(state => {
        let ids = []
        state.offers.forEach(offer => {
          if(!state.offersSelected[offer._id]){
            ids.push(offer._id)
          }
        })
        state.offers = state.offers.filter(offer => {
          return ids.includes(offer._id)
        })
        state.showModelDeleteOffers = false
        state.deletingOffers = false
        return state
      })
    },3000)
  }
  coverOffersToMqSelectValuesObject(){
    return this.state.offers.map(item => {
      return {
        key: item._id,
        text: item.name
      }
    })
  }
  coverOfferToMqSelectValuesObject(offer){
    if(offer){
      return {
        key: offer._id,
        text: offer.name
      }
    }
    return {}
  }
  checkSelectedAllItem(offersSelected){
    for(let i = 0 ; i < this.state.offers.length; i++){
      if(!offersSelected[this.state.offers[i]._id]){
        return false
      }
    }
    return true
  }
  numberItemSelected(){
    let num = 0
    this.state.offers.forEach(offer => {
      if(this.state.offersSelected[offer._id]){
        num++
      }
    })
    return num
  }
  render() {
    const {offer,tempOffer} = this.state
    return(
      <main>
        <OffersHeader/>
        <div className="content">
          <div className="row">
            <div className="col-md-5">
              <div className="card">
                <div className="card-header header-elements-inline">
                  <h5 className="card-title">Thêm mới một chiến dịch</h5>
                </div>

                <div className="card-body">
                  <form onSubmit={(e) => {
                    this.createOffer()
                    e.preventDefault()
                  }}>
                    <fieldset className="mb-3">
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Tên chiến dịch </label>
                        <div className="col-lg-8">
                          <input type="text" className="form-control" readOnly={this.state.creatingOffer} value={offer.name} onChange={(e) => {
                              this.changeNameOffer(e.target.value)
                          }}
                          required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Ngày bắt đầu </label>
                        <div className="col-lg-8">
                          <input type="datetime-local" className="form-control" readOnly={this.state.creatingOffer} value={offer.startDate} onChange={(e) => {
                            this.changeStartDateOffer(e.target.value)
                          }}
                                 required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Ngày kết thúc </label>
                        <div className="col-lg-8">
                          <input type="datetime-local" className="form-control" min={offer.startDate ? offer.startDate : ""} readOnly={this.state.creatingOffer} value={offer.endDate} onChange={(e) => {
                            this.changeEndDateOffer(e.target.value)
                          }}
                                 required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Loại giảm giá </label>
                        <div className="col-lg-8">
                          <select name="" id="" className="form-control" required onChange={(e) => {
                            this.changeDiscountTypeOffer(e.target.value)
                          }}>
                            <option value="percent">Percent</option>
                            <option value="value">Value</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Giá trị </label>
                        <div className="col-lg-8">
                          <input type="text" className="form-control" readOnly={this.state.creatingOffer} value={offer.discount} onChange={(e) => {
                            this.changeDiscountOffer(e.target.value)
                          }}
                                 required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Mô tả</label>
                        <div className="col-lg-8">
                          <textarea className="form-control"
                                    readOnly={this.state.creatingOffer}
                                    value={offer.description} onChange={(e) => {
                                    this.changeDescriptionOffer(e.target.value)
                          }}
                          />
                        </div>
                      </div>

                    </fieldset>
                    {
                      this.state.creatingOffer ?  <MqLoading/> : ""
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
                                showModelDeleteOffers: true
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
                      <th><input type="checkbox" checked={this.state.selectedAll && this.state.offers.length > 0} onChange={e => {
                        let checked = e.target.checked
                        this.setState(state => {
                          if(state.offers.length == 0){
                            checked = false
                          }
                          state.selectedAll = checked
                          state.offers.forEach(offer => {
                            state.offersSelected[offer._id] = checked
                          })
                          return state
                        })
                      }} /></th>
                      <th>Tên chiến dịch</th>
                      <th>Ngày bắt đầu</th>
                      <th>Ngày kết thúc</th>
                      <th>Loại giảm giá</th>
                      <th>Giá trị</th>
                      <th>Mô tả</th>
                      <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      this.state.offers.length == 0 ? (<tr>
                        <td colSpan={8} className="text-warning text-center">Không có mục nào để hiển thị</td>
                      </tr>) : null
                    }
                    {
                      this.state.offers.map((offer,index) => (
                        <tr key={index}>
                          <td><input type="checkbox" checked={this.state.offersSelected[offer._id]} onChange={e => {
                            let checked = e.target.checked
                            this.setState(state=>{
                              state.offersSelected[offer._id] = checked
                              if(this.checkSelectedAllItem(state.offersSelected)){
                                state.selectedAll = true
                              }else{
                                state.selectedAll = false
                              }
                              return state
                            })
                          }}/></td>
                          <td>{offer.name}</td>
                          <td className="td-nowrap">{offer.startDate ? moment(offer.startDate).format('LLL') : ""}</td>
                          <td className="td-nowrap">{offer.endDate ? moment(offer.endDate).format('LLL') : ""}</td>
                          <td>{offer.discountType}</td>
                          <td>{offer.discount}</td>
                          <td className="custom-description">{offer.description}</td>
                          <td className="table-custom-action">
                            <button className="btn btn-light" onClick={() => {
                              this.actionEditOffer(offer._id)
                            }}>Sửa</button>
                            <button className="btn btn-danger" onClick={() => {
                              this.actionDeleteOffer(offer._id)
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
        <Modal isOpen={this.state.showModelEditOffer} className={'modal-lg'}>
          <ModalHeader toggle={this.toggleLarge}>
            <i className="icon-menu7 mr-2"></i> &nbsp;Modal with icons
          </ModalHeader>
          <form onSubmit={(e) => {
            e.preventDefault()
            this.updateOffer()
          }}>
          <ModalBody>
              <fieldset className="mb-3">
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Tên chiến dịch </label>
                  <div className="col-lg-8">
                    <input type="text" className="form-control" readOnly={this.state.creatingOffer} value={tempOffer.name} onChange={(e) => {
                      this.changeNameTemp(e.target.value)
                    }}
                           required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Ngày bắt đầu </label>
                  <div className="col-lg-8">
                    <input type="datetime-local" className="form-control" readOnly={this.state.creatingOffer} value={tempOffer.startDate} onChange={(e) => {
                      this.changeStartDateTemp(e.target.value)
                    }}
                           required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Ngày kết thúc </label>
                  <div className="col-lg-8">
                    <input type="datetime-local" min={tempOffer.startDate ? tempOffer.startDate : ""} className="form-control" readOnly={this.state.creatingOffer} value={tempOffer.endDate} onChange={(e) => {
                      this.changeEndDateTemp(e.target.value)
                    }}
                           required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Loại giảm giá </label>
                  <div className="col-lg-8">
                    <select name="" id="" className="form-control" required onChange={(e) => {
                      this.changeDiscountTypeTemp(e.target.value)
                    }}>
                      <option value="percent" selected={tempOffer.value == "percent"}>Percent</option>
                      <option value="value" selected={tempOffer.value == "value"}>Value</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Giá trị </label>
                  <div className="col-lg-8">
                    <input type="text" className="form-control" readOnly={this.state.creatingOffer} value={tempOffer.discount} onChange={(e) => {
                      this.changeDiscountTemp(e.target.value)
                    }}
                           required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Mô tả</label>
                  <div className="col-lg-8">
                          <textarea className="form-control"
                                    readOnly={this.state.creatingOffer}
                                   onChange={(e) => {
                            this.changeDescriptionTemp(e.target.value)
                          }}
                                    value={tempOffer.description}
                          >

                          </textarea>
                  </div>
                </div>

              </fieldset>
              {
                this.state.updatingOffer ?  <MqLoading/> : ""
              }

          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary">Cập nhật offer</Button>
            <Button color="secondary" onClick={() => {
              this.setState({
                tempOffer: {
                  _id: null,
                  name: "",
                  description: ""
                },
                showModelEditOffer: false
              })
            }}>Hủy</Button>
          </ModalFooter>
          </form>
        </Modal>
        <Modal isOpen={this.state.showModelDeleteOffer} className={'modal-lg'}>
          <ModalHeader toggle={this.toggleLarge}>
            <i className="icon-menu7 mr-2"></i> &nbsp;Modal with icons
          </ModalHeader>
          <ModalBody>
            <MqAlert className="alert alert-warning alert-dismissible alert-styled-left border-top-0 border-bottom-0 border-right-0">
              <span className="font-weight-semibold">Lưu ý!</span> Bạn sẽ xóa danh mục vửa chọn?
            </MqAlert>
            {
              this.state.deletingOffer? <MqLoading/> : ""
            }
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => {
              this.deleteOffer()
            }}>Xóa</Button>
            <Button color="secondary" onClick={() => {
              this.setState({
                showModelDeleteOffer: false
              })
            }}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.showModelDeleteOffers} className={'modal-lg'}>
          <ModalHeader toggle={this.toggleLarge}>
            <i className="icon-menu7 mr-2"></i> &nbsp;Modal with icons
          </ModalHeader>
          <ModalBody>
            <MqAlert className="alert alert-warning alert-dismissible alert-styled-left border-top-0 border-bottom-0 border-right-0">
              <span className="font-weight-semibold">Lưu ý!</span> Bạn sẽ xóa danh mục vửa chọn?
            </MqAlert>
            {
              this.state.deletingOffers? <MqLoading/> : ""
            }
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => {
              this.deleteOffers()
            }}>Xóa</Button>
            <Button color="secondary" onClick={() => {
              this.setState({
                deletingOffers: false
              })
            }}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </main>
    )
  }
}

export default Offers

