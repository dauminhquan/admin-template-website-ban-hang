import React, { Component, lazy, Suspense } from 'react';
import MqDivDropdown from "../../containers/Components/MqDivDropdown";
import MqDivDropdownHead from "../../containers/Components/MqDivDropdownHead";
import MqDivDropdownBody from "../../containers/Components/MqDivDropdownBody";
import CategoriesHeader from "./CategoriesHeader";
import MqSelect from "../../containers/Components/MqSelect";
import {Link} from "react-router-dom";
import MqPagination from "../../containers/Components/MqPagination";
import MqLoading from "../../containers/Components/MqLoading";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import MqAlert from "../../containers/Components/MqAlert";
const CATEGORIES = [

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
class  Categories extends Component{
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          _id: "mot",
          name: "Quần",
          description: "Xin chào",
          parentCategory: {
            _id: 3,
            name: "Quần Áo"
          }
        },
        {
          _id: "hai",
          name: "Áo",
          description: "Xin chào",
          parentCategory: {
            _id: 3,
            name: "Quần Áo"
          }
        },
        {
          _id: "ba",
          name: "Quần Áo",
          description: "Xin chào"
        },
        {
          _id: "bon",
          name: "Dày dép",
          description: "Xin chào"
        }
      ],
      nextId: "nam",
      category: {
        name: "",
        parentCategory: null,
        description: ""
      },
      creatingCategory: false,
      tempCategory: {
        _id: null,
        name: "",
        parentCategory: null,
        description: ""
      },
      showModelEditCategory: false,
      showModelDeleteCategory: false,
      showModelDeleteCategories: false,
      deletingCategory: false,
      deletingCategories: false,
      categoriesSelected: [
      ],
      selectedAll: false
    }
  }
  componentDidMount() {
    this.setState(state => {
      state.categories.forEach(category => {
        state.categoriesSelected[(category._id)] = false
      })
      return state
    })
  }
  actionEditCategory(_id){
    this.setState(state => {
      state.tempCategory = state.categories.find(item => {
        return item._id == _id
      })
      state.showModelEditCategory = true
      return state
    })
  }
  actionDeleteCategory(_id){
    this.setState(state => {
      state.tempCategory = state.categories.find(item => {
        return item._id == _id
      })
      state.showModelDeleteCategory = true
      return state
    })
  }
  changeNameCategory(name){
    this.setState(state => {
      state.category.name = name
      return state
    })
  }
  changeParentCategory(parentCategory){
    this.setState(state => {
      state.category.parentCategory = state.categories.find(i => {
        return i._id == parentCategory.key
      })
      return state
    })
  }
  changeDescriptionCategory(description){
    this.setState(state => {
      state.category.description = description
      return state
    })
  }
  changeNameTemp(name){
    this.setState(state => {
      state.tempCategory.name = name
      return state
    })
  }
  changeParentTemp(parentCategory){
    this.setState(state => {
      state.tempCategory.parentCategory = state.categories.find(i => {
        return i._id == parentCategory.key
      })
      return state
    })
  }
  changeDescriptionTemp(description){
    this.setState(state => {
      state.tempCategory.description = description
      return state
    })
  }
  createCategory(){
    this.setState({
      creatingCategory: true
    })
      setTimeout(() => {
        this.setState(state => {
          let newCategory = state.category
          newCategory._id = makeid(10)
          state.categories.unshift(newCategory)
          state.category = {
            name: "",
            parentCategory: null,
            description: ""
          }
          state.creatingCategory = null
          return state
        })
      },3000)
  }
  updateCategory(){
    this.setState({
      updatingCategory: true
    })
    setTimeout(() => {
      this.setState(state => {
        state.categories = state.categories.map(category => {
          if(category._id == state.tempCategory._id){
            category = state.tempCategory
          }
          return category
        })
        state.tempCategory = {
          _id: null,
          name: "",
          parentCategory: null,
          description: ""
        }
        state.updatingCategory = false
        state.showModelEditCategory = false
        return state
      })
    },3000)
  }
  deleteCategory(){
    this.setState({
      deletingCategory: true
    })
    setTimeout(() => {
      this.setState(state => {

        state.categories = state.categories.filter(category => {
          return category._id != state.tempCategory._id
        })
        state.showModelDeleteCategory = false
        state.deletingCategory = false
        return state
      })
    },3000)
  }
  deleteCategories(){
    this.setState({
      deletingCategories: true
    })
    setTimeout(() => {
      this.setState(state => {
        let ids = []
        state.categories.forEach(category => {
          if(!state.categoriesSelected[category._id]){
            ids.push(category._id)
          }
        })
        state.categories = state.categories.filter(category => {
          return ids.includes(category._id)
        })
        state.showModelDeleteCategories = false
        state.deletingCategories = false
        return state
      })
    },3000)
  }
  coverCategoriesToMqSelectValuesObject(){
    return this.state.categories.map(item => {
      return {
        key: item._id,
        text: item.name
      }
    })
  }
  coverCategoryToMqSelectValuesObject(category){
    if(category){
      return {
        key: category._id,
        text: category.name
      }
    }
    return {}
  }
  checkSelectedAllItem(categoriesSelected){
    for(let i = 0 ; i < this.state.categories.length; i++){
      if(!categoriesSelected[this.state.categories[i]._id]){
        return false
      }
    }
    return true
  }
  numberItemSelected(){
    let num = 0
    this.state.categories.forEach(category => {
      if(this.state.categoriesSelected[category._id]){
        num++
      }
    })
    return num
  }
  render() {
    const {category,tempCategory} = this.state
    return(
      <main>
        <CategoriesHeader/>
        <div className="content">
          <div className="row">
            <div className="col-md-5">
              <div className="card">
                <div className="card-header header-elements-inline">
                  <h5 className="card-title">Thêm mới một danh mục</h5>
                </div>

                <div className="card-body">
                  <form onSubmit={(e) => {
                    this.createCategory()
                    e.preventDefault()
                  }}>
                    <fieldset className="mb-3">
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Tên danh mục </label>
                        <div className="col-lg-8">
                          <input type="text" className="form-control" readOnly={this.state.creatingCategory} value={category.name} onChange={(e) => {
                              this.changeNameCategory(e.target.value)
                          }}
                          required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Danh mục </label>
                        <div className="col-lg-8">
                          <MqSelect onChange={(values,item,type) => {
                                  this.changeParentCategory(item)
                          }}
                                    values={this.coverCategoriesToMqSelectValuesObject()}
                                    disabled={this.state.creatingCategory}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-lg-4">Mô tả</label>
                        <div className="col-lg-8">
                          <textarea className="form-control"
                                    readOnly={this.state.creatingCategory}
                                    value={category.description} onChange={(e) => {
                                    this.changeDescriptionCategory(e.target.value)
                          }}
                          />
                        </div>
                      </div>

                    </fieldset>
                    {
                      this.state.creatingCategory ?  <MqLoading/> : ""
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
                                showModelDeleteCategories: true
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
                          //   let id = makeid(5)
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
                  <table className="table">
                    <thead>
                    <tr>
                      <th><input type="checkbox" checked={this.state.selectedAll && this.state.categories.length > 0} onChange={e => {
                        let checked = e.target.checked
                        this.setState(state => {
                          if(state.categories.length == 0){
                            checked = false
                          }
                          state.selectedAll = checked
                          state.categories.forEach(category => {
                            state.categoriesSelected[category._id] = checked
                          })
                          return state
                        })
                      }} /></th>
                      <th>Tên danh mục</th>
                      <th>Danh mục cha</th>
                      <th>Mô tả</th>
                      <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      this.state.categories.length == 0 ? (<tr>
                        <td colSpan={5} className="text-warning text-center">Không có mục nào để hiển thị</td>
                      </tr>) : ""
                    }
                    {
                      this.state.categories.map(category => (
                        <tr>
                          <td><input type="checkbox" checked={this.state.categoriesSelected[category._id]} onChange={e => {
                            let checked = e.target.checked
                            this.setState(state=>{
                              state.categoriesSelected[category._id] = checked
                              if(this.checkSelectedAllItem(state.categoriesSelected)){
                                state.selectedAll = true
                              }else{
                                state.selectedAll = false
                              }
                              return state
                            })
                          }}/></td>
                          <td>{category.name}</td>
                          <td>{category.parentCategory? category.parentCategory.name: ""}</td>

                          <td>{category.description}</td>
                          <td>
                            <button className="btn btn-light" onClick={() => {
                              this.actionEditCategory(category._id)
                            }}>Sửa</button>
                            <button className="btn btn-danger" onClick={() => {
                              this.actionDeleteCategory(category._id)
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
        <Modal isOpen={this.state.showModelEditCategory} className={'modal-lg'}>
          <ModalHeader toggle={this.toggleLarge}>
            <i className="icon-menu7 mr-2"></i> &nbsp;Modal with icons
          </ModalHeader>
          <form onSubmit={(e) => {
            e.preventDefault()
            this.updateCategory()
          }}>
          <ModalBody>
              <fieldset className="mb-3">
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Tên danh mục </label>
                  <div className="col-lg-8">
                    <input type="text" className="form-control" readOnly={this.state.creatingCategory} value={tempCategory.name} onChange={(e) => {
                      this.changeNameTemp(e.target.value)
                    }}
                           required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Danh mục </label>
                  <div className="col-lg-8">
                    <MqSelect onChange={(values,item,type) => {
                      this.changeParentTemp(item)
                    }}
                              defaultItemSelected={this.coverCategoryToMqSelectValuesObject(tempCategory.parentCategory)}
                              values={this.coverCategoriesToMqSelectValuesObject()}
                              disabled={this.state.creatingCategory}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-4">Mô tả</label>
                  <div className="col-lg-8">
                          <textarea className="form-control"
                                    readOnly={this.state.creatingCategory}
                                   onChange={(e) => {
                            this.changeDescriptionTemp(e.target.value)
                          }}
                                    value={tempCategory.description}
                          >

                          </textarea>
                  </div>
                </div>

              </fieldset>
              {
                this.state.updatingCategory ?  <MqLoading/> : ""
              }

          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary">Cập nhật category</Button>
            <Button color="secondary" onClick={() => {
              this.setState({
                tempCategory: {
                  _id: null,
                  name: "",
                  parentCategory: null,
                  description: ""
                },
                showModelEditCategory: false
              })
            }}>Hủy</Button>
          </ModalFooter>
          </form>
        </Modal>
        <Modal isOpen={this.state.showModelDeleteCategory} className={'modal-lg'}>
          <ModalHeader toggle={this.toggleLarge}>
            <i className="icon-menu7 mr-2"></i> &nbsp;Modal with icons
          </ModalHeader>
          <ModalBody>
            <MqAlert className="alert alert-warning alert-dismissible alert-styled-left border-top-0 border-bottom-0 border-right-0">
              <span className="font-weight-semibold">Lưu ý!</span> Bạn sẽ xóa danh mục vửa chọn?
            </MqAlert>
            {
              this.state.deletingCategory? <MqLoading/> : ""
            }
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => {
              this.deleteCategory()
            }}>Xóa</Button>
            <Button color="secondary" onClick={() => {
              this.setState({
                showModelDeleteCategory: false
              })
            }}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.showModelDeleteCategories} className={'modal-lg'}>
          <ModalHeader toggle={this.toggleLarge}>
            <i className="icon-menu7 mr-2"></i> &nbsp;Modal with icons
          </ModalHeader>
          <ModalBody>
            <MqAlert className="alert alert-warning alert-dismissible alert-styled-left border-top-0 border-bottom-0 border-right-0">
              <span className="font-weight-semibold">Lưu ý!</span> Bạn sẽ xóa danh mục vửa chọn?
            </MqAlert>
            {
              this.state.deletingCategories? <MqLoading/> : ""
            }
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => {
              this.deleteCategories()
            }}>Xóa</Button>
            <Button color="secondary" onClick={() => {
              this.setState({
                deletingCategories: false
              })
            }}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </main>
    )
  }
}

export default Categories

