import React, { Component, lazy, Suspense } from 'react';
import MqDivDropdown from "../../containers/Components/MqDivDropdown";
import MqDivDropdownHead from "../../containers/Components/MqDivDropdownHead";
import MqDivDropdownBody from "../../containers/Components/MqDivDropdownBody";
import GiftCodesHeader from "./GiftCodesHeader";
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
class  GiftCodes extends Component{
  constructor(props) {
    super(props);
    this.state = {
      giftCodes: [
        {
          _id: "mot",
          code: "Giảm giá tháng 1 đến tháng 2",
          startDate: "20/10/2020",
          endDate: "21/10/2020",
          discountType: "value",
          discount: 5,
        },
        {
          _id: "hai",
          code: "Giảm giá tháng 1 đến tháng 2",
          startDate: "20/10/2020",
          endDate: "21/10/2020",
          discountType: "value",
          discount: 5,
        },
      ],
      giftCode: {
        code: "",
        startDate: "",
        endDate: "",
        discountType: "",
        discount: "",
      },
      creatingGiftCode: false,
      tempGiftCode: {
        _id: null,
        code: "",
        startDate: "",
        endDate: "",
        discountType: "",
        discount: "",
      },
      showModelEditGiftCode: false,
      showModelDeleteGiftCode: false,
      showModelDeleteGiftCodes: false,
      deletingGiftCode: false,
      deletingGiftCodes: false,
      giftCodesSelected: [
      ],
      selectedAll: false
    }
  }
  componentDidMount() {
    this.setState(state => {
      state.giftCodes.forEach(giftCode => {
        state.giftCodesSelected[(giftCode._id)] = false
      })
      return state
    })
  }
  actionEditGiftCode(_id){
    this.setState(state => {
      let tempGiftCode = state.giftCodes.find(item => {
        return item._id == _id
      })
      state.tempGiftCode = Object.assign({},tempGiftCode)
      state.showModelEditGiftCode = true
      return state
    })
  }
  actionDeleteGiftCode(_id){
    this.setState(state => {
      state.tempGiftCode = state.giftCodes.find(item => {
        return item._id == _id
      })
      state.showModelDeleteGiftCode = true
      return state
    })
  }
  changeCodeGiftCode(code){
    this.setState(state => {
      state.giftCode.code = code
      return state
    })
  }
  changeStartDateGiftCode(startDate){
    this.setState(state => {
      state.giftCode.startDate = startDate
      return state
    })
  }
  changeEndDateGiftCode(endDate){
    this.setState(state => {
      state.giftCode.endDate = endDate
      return state
    })
  }
  changeDiscountTypeGiftCode(discountType){
    this.setState(state => {
      state.giftCode.discountType = discountType
      return state
    })
  }
  changeDiscountGiftCode(discount){
    this.setState(state => {
      state.giftCode.discount = discount
      return state
    })
  }

  changeCodeTemp(code){
    this.setState(state => {
      state.tempGiftCode.code = code
      return state
    })
  }
  changeStartDateTemp(startDate){
    this.setState(state => {
      state.tempGiftCode.startDate = startDate
      return state
    })
  }
  changeEndDateTemp(endDate){
    this.setState(state => {
      state.tempGiftCode.endDate = endDate
      return state
    })
  }
  changeDiscountTypeTemp(discountType){
    this.setState(state => {
      state.tempGiftCode.discountType = discountType
      return state
    })
  }
  changeDiscountTemp(discount){
    this.setState(state => {
      state.tempGiftCode.discount = discount
      return state
    })
  }

  createGiftCode(){
    this.setState({
      creatingGiftCode: true
    })
    setTimeout(() => {
      this.setState(state => {
        let newGiftCode = state.giftCode
        newGiftCode._id = makeId(10)
        state.giftCodes.unshift(newGiftCode)
        state.giftCode = {
          code: "",
          startDate: "",
          endDate: "",
          discountType: "",
          discount: "",
        }
        state.creatingGiftCode = null
        return state
      })
    },3000)
  }
  updateGiftCode(){
    this.setState({
      updatingGiftCode: true
    })
    setTimeout(() => {
      this.setState(state => {
        state.giftCodes = state.giftCodes.map(giftCode => {
          if(giftCode._id == state.tempGiftCode._id){
            giftCode = Object.assign({},state.tempGiftCode)
          }
          return giftCode
        })
        state.tempGiftCode = {
          _id: null,
          code: "",
          startDate: "",
          endDate: "",
          discountType: "",
          discount: "",
        }
        state.updatingGiftCode = false
        state.showModelEditGiftCode = false
        return state
      })
    },3000)
  }
  deleteGiftCode(){
    this.setState({
      deletingGiftCode: true
    })
    setTimeout(() => {
      this.setState(state => {

        state.giftCodes = state.giftCodes.filter(giftCode => {
          return giftCode._id != state.tempGiftCode._id
        })
        state.showModelDeleteGiftCode = false
        state.deletingGiftCode = false
        return state
      })
    },3000)
  }
  deleteGiftCodes(){
    this.setState({
      deletingGiftCodes: true
    })
    setTimeout(() => {
      this.setState(state => {
        let ids = []
        state.giftCodes.forEach(giftCode => {
          if(!state.giftCodesSelected[giftCode._id]){
            ids.push(giftCode._id)
          }
        })
        state.giftCodes = state.giftCodes.filter(giftCode => {
          return ids.includes(giftCode._id)
        })
        state.showModelDeleteGiftCodes = false
        state.deletingGiftCodes = false
        return state
      })
    },3000)
  }
  coverGiftCodesToMqSelectValuesObject(){
    return this.state.giftCodes.map(item => {
      return {
        key: item._id,
        text: item.code
      }
    })
  }
  coverGiftCodeToMqSelectValuesObject(giftCode){
    if(giftCode){
      return {
        key: giftCode._id,
        text: giftCode.code
      }
    }
    return {}
  }
  checkSelectedAllItem(giftCodesSelected){
    for(let i = 0 ; i < this.state.giftCodes.length; i++){
      if(!giftCodesSelected[this.state.giftCodes[i]._id]){
        return false
      }
    }
    return true
  }
  numberItemSelected(){
    let num = 0
    this.state.giftCodes.forEach(giftCode => {
      if(this.state.giftCodesSelected[giftCode._id]){
        num++
      }
    })
    return num
  }
  render() {
    const {giftCode,tempGiftCode} = this.state
    return(
      <main>
        <GiftCodesHeader/>
        <div className="content">
          <div className="row">
            <div className="col-md-5">
              <div className="card">
                <div className="card-header header-elements-inline">
                  <h5 className="card-title">Thêm mới một chiến dịch</h5>
                </div>

                <div className="card-body">
                  <form onSubmit={(e) => {
                    this.createGiftCode()
                    e.preventDefault()
                  }}>
                    <fieldset className="mb-3">
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Mã </label>
                        <div className="col-lg-8">
                          <input type="text" className="form-control" readOnly={this.state.creatingGiftCode} value={giftCode.code} onChange={(e) => {
                            this.changeCodeGiftCode(e.target.value)
                          }}
                                 required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Ngày bắt đầu </label>
                        <div className="col-lg-8">
                          <input type="datetime-local" className="form-control" readOnly={this.state.creatingGiftCode} value={giftCode.startDate} onChange={(e) => {
                            this.changeStartDateGiftCode(e.target.value)
                          }}
                                 required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Ngày kết thúc </label>
                        <div className="col-lg-8">
                          <input type="datetime-local" className="form-control" min={giftCode.startDate ? giftCode.startDate : ""} readOnly={this.state.creatingGiftCode} value={giftCode.endDate} onChange={(e) => {
                            this.changeEndDateGiftCode(e.target.value)
                          }}
                                 required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Loại giảm giá </label>
                        <div className="col-lg-8">
                          <select name="" id="" className="form-control" required onChange={(e) => {
                            this.changeDiscountTypeGiftCode(e.target.value)
                          }}>
                            <option value="percent">Percent</option>
                            <option value="value">Value</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Giá trị </label>
                        <div className="col-lg-8">
                          <input type="text" className="form-control" readOnly={this.state.creatingGiftCode} value={giftCode.discount} onChange={(e) => {
                            this.changeDiscountGiftCode(e.target.value)
                          }}
                                 required
                          />
                        </div>
                      </div>
                    </fieldset>
                    {
                      this.state.creatingGiftCode ?  <MqLoading/> : ""
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
                                showModelDeleteGiftCodes: true
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
                          //     <div className="dropdown-item" key={id}><input type="checkbox" id={id+'show-column'+column.code} checked={this.state.showColumns[column.code]} onChange={(e) => {
                          //       this.changeShowColumn(column,e.target.checked)
                          //     }}/>
                          //       <label className="dropdown-checkbox-label" htmlFor={id+'show-column'+column.code}> {column.text}</label>
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
                      <th><input type="checkbox" checked={this.state.selectedAll && this.state.giftCodes.length > 0} onChange={e => {
                        let checked = e.target.checked
                        this.setState(state => {
                          if(state.giftCodes.length == 0){
                            checked = false
                          }
                          state.selectedAll = checked
                          state.giftCodes.forEach(giftCode => {
                            state.giftCodesSelected[giftCode._id] = checked
                          })
                          return state
                        })
                      }} /></th>
                      <th>Mã</th>
                      <th>Ngày bắt đầu</th>
                      <th>Ngày kết thúc</th>
                      <th>Loại giảm giá</th>
                      <th>Giá trị</th>
                      <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      this.state.giftCodes.length == 0 ? (<tr>
                        <td colSpan={8} className="text-warning text-center">Không có mục nào để hiển thị</td>
                      </tr>) : null
                    }
                    {
                      this.state.giftCodes.map((giftCode,index) => (
                        <tr key={index}>
                          <td><input type="checkbox" checked={this.state.giftCodesSelected[giftCode._id]} onChange={e => {
                            let checked = e.target.checked
                            this.setState(state=>{
                              state.giftCodesSelected[giftCode._id] = checked
                              if(this.checkSelectedAllItem(state.giftCodesSelected)){
                                state.selectedAll = true
                              }else{
                                state.selectedAll = false
                              }
                              return state
                            })
                          }}/></td>
                          <td>{giftCode.code}</td>
                          <td className="td-nowrap">{giftCode.startDate ? moment(giftCode.startDate).format('LLL') : ""}</td>
                          <td className="td-nowrap">{giftCode.endDate ? moment(giftCode.endDate).format('LLL') : ""}</td>
                          <td>{giftCode.discountType}</td>
                          <td>{giftCode.discount}</td>
                          <td className="table-custom-action">
                            <button className="btn btn-light" onClick={() => {
                              this.actionEditGiftCode(giftCode._id)
                            }}>Sửa</button>
                            <button className="btn btn-danger" onClick={() => {
                              this.actionDeleteGiftCode(giftCode._id)
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
        <Modal isOpen={this.state.showModelEditGiftCode} className={'modal-lg'}>
          <ModalHeader toggle={this.toggleLarge}>
            <i className="icon-menu7 mr-2"></i> &nbsp;Modal with icons
          </ModalHeader>
          <form onSubmit={(e) => {
            e.preventDefault()
            this.updateGiftCode()
          }}>
            <ModalBody>
              <fieldset className="mb-3">
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Tên chiến dịch </label>
                  <div className="col-lg-8">
                    <input type="text" className="form-control" readOnly={this.state.creatingGiftCode} value={tempGiftCode.code} onChange={(e) => {
                      this.changeCodeTemp(e.target.value)
                    }}
                           required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Ngày bắt đầu </label>
                  <div className="col-lg-8">
                    <input type="datetime-local" className="form-control" readOnly={this.state.creatingGiftCode} value={tempGiftCode.startDate} onChange={(e) => {
                      this.changeStartDateTemp(e.target.value)
                    }}
                           required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Ngày kết thúc </label>
                  <div className="col-lg-8">
                    <input type="datetime-local" min={tempGiftCode.startDate ? tempGiftCode.startDate : ""} className="form-control" readOnly={this.state.creatingGiftCode} value={tempGiftCode.endDate} onChange={(e) => {
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
                      <option value="percent" selected={tempGiftCode.value == "percent"}>Percent</option>
                      <option value="value" selected={tempGiftCode.value == "value"}>Value</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Giá trị </label>
                  <div className="col-lg-8">
                    <input type="text" className="form-control" readOnly={this.state.creatingGiftCode} value={tempGiftCode.discount} onChange={(e) => {
                      this.changeDiscountTemp(e.target.value)
                    }}
                           required
                    />
                  </div>
                </div>
              </fieldset>
              {
                this.state.updatingGiftCode ?  <MqLoading/> : ""
              }

            </ModalBody>
            <ModalFooter>
              <Button type="submit" color="primary">Cập nhật giftCode</Button>
              <Button color="secondary" onClick={() => {
                this.setState({
                  tempGiftCode: {
                    _id: null,
                    code: "",
                    startDate: "",
                    endDate: "",
                    discountType: "",
                    discount: "",
                  },
                  showModelEditGiftCode: false
                })
              }}>Hủy</Button>
            </ModalFooter>
          </form>
        </Modal>
        <Modal isOpen={this.state.showModelDeleteGiftCode} className={'modal-lg'}>
          <ModalHeader toggle={this.toggleLarge}>
            <i className="icon-menu7 mr-2"></i> &nbsp;Modal with icons
          </ModalHeader>
          <ModalBody>
            <MqAlert className="alert alert-warning alert-dismissible alert-styled-left border-top-0 border-bottom-0 border-right-0">
              <span className="font-weight-semibold">Lưu ý!</span> Bạn sẽ xóa danh mục vửa chọn?
            </MqAlert>
            {
              this.state.deletingGiftCode? <MqLoading/> : ""
            }
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => {
              this.deleteGiftCode()
            }}>Xóa</Button>
            <Button color="secondary" onClick={() => {
              this.setState({
                showModelDeleteGiftCode: false
              })
            }}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.showModelDeleteGiftCodes} className={'modal-lg'}>
          <ModalHeader toggle={this.toggleLarge}>
            <i className="icon-menu7 mr-2"></i> &nbsp;Modal with icons
          </ModalHeader>
          <ModalBody>
            <MqAlert className="alert alert-warning alert-dismissible alert-styled-left border-top-0 border-bottom-0 border-right-0">
              <span className="font-weight-semibold">Lưu ý!</span> Bạn sẽ xóa danh mục vửa chọn?
            </MqAlert>
            {
              this.state.deletingGiftCodes? <MqLoading/> : ""
            }
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => {
              this.deleteGiftCodes()
            }}>Xóa</Button>
            <Button color="secondary" onClick={() => {
              this.setState({
                deletingGiftCodes: false
              })
            }}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </main>
    )
  }
}

export default GiftCodes

