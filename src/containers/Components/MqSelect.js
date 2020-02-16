import React, {Component} from "react";
import PropTypes from 'prop-types';
import {makeId} from "../../helpers";

function makeid(length) {
  let result           = '';
  let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


class MqSelect extends Component {
  constructor(props){
    super(props)
    this.state = {
      menuOpen: false,
      className: this.props.className,
      show: false,
      itemSelected: [],
      contentShow: [],
      searchText: ''
    }
    this.wrapperRef = React.createRef()
  }
  componentDidMount() {
    document.addEventListener('click', this.handleClick)
    // if(this.props.multiple && !this.props.removeItemSelected){
    //   console.error('removeItemSelected is required')
    // }

    if(this.state.contentShow.length == 0){
      const {values,defaultItemSelected} = this.props
      this.setState(state => {
        // state.contentShow = values
        state.itemSelected = Object.assign([],defaultItemSelected)
        return state
      })
    }

  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick)
  }
  componentWillReceiveProps(nextProps){

    // console.log("sosanh - truoc",this.props.itemSelected,"moi: ",nextProps.itemSelected)
    // console.log("ok"+this.changedValueSelected(nextProps.itemSelected,this.props.itemSelected))
    // const {itemSelected} = this.state
    // if(this.changedValueSelected(nextProps.values,this.props.values)){
    //   this.setState(state => {
    //     state.itemSelected = nextProps.itemSelected
    //     console.log("state change ",state.itemSelected)
    //     return state
    //   })
    // }
  }
  changedValueSelected(propSelected,selected){
    if(propSelected.length != selected.length){
      return true
    }
    for(let i = 0 ; i < propSelected.length ; i++){
      if(!selected.find(item => {
        return item.key == propSelected[i].key
      })){
        return true
      }
    }
    return false
  }
  handleClick = (event) => {
    const { target } = event
    if (!this.wrapperRef.current.contains(target)) {
      this.focusSearch(false)
    }
  }
  changeShowState(){
    this.setState((state) => {
      state.show = !state.show
      return state
    })
    this.refs[this.wrapperRef+"search-input"].focus()
  }
  searchItem(text){
    const {values} = this.props
    if(text.trim() !=''){
      let result = []
      this.props.values.forEach(value => {
        if(value.text.toUpperCase().includes(text.toUpperCase())){
          result.push(value)
        }
      })
      this.setState(state => {
        state.contentShow = result
        state.searchText = text
        return state
      })
    }
  }
  checkSelectedItem(itemsSelected,item){
    return itemsSelected.some(i => {
      return i.key == item.key
    })
  }
  selectItem(item){
      if(this.props.multiple){
        const rjs = this
        if(this.checkSelectedItem(this.state.itemSelected,item)){
          let changeSelected = this.state.itemSelected.filter(i => {
            return i.key != item.key
          })
          this.setState(state => {
            state.itemSelected = changeSelected
            return state
          })
          if(this.props.removeItemSelected){
            this.props.removeItemSelected(item)
          }
          this.props.onChange(changeSelected,item,-1)
        }else{
          let changeSelected = this.state.itemSelected
          changeSelected.push(item)
          this.setState(state => {
            state.itemSelected = changeSelected
            return state
          })
          if(this.props.selectedItem){
            this.props.selectedItem(item)
          }
          this.props.onChange(changeSelected,item,1)

        }
      }else{
        this.setState(state =>{
          state.itemSelected = item
          state.show = false
          return state
        })
        if(this.props.selectedItem){
          this.props.selectedItem(item)
        }
        this.props.onChange([item],item,1)

      }
  }
  removeItemSelected(item){
    let changeSelected = this.state.itemSelected.filter(i => {
      return i.key != item.key
    })
    this.setState(state => {
      state.itemSelected = changeSelected
      return state
    })
    if(this.props.removeItemSelected){
      this.props.removeItemSelected(item)
    }
    this.props.onChange(changeSelected,item,-1)
  }
  checkItemSelected(item){
    if(this.props.multiple){
      return this.state.itemSelected.some(i => {
        return i.key == item.key
      })
    }else{
      return item.key == this.state.itemSelected.key
    }
  }
  focusSearch(status){
    this.setState({
      show:status
    })
  }
  getContentResultShow(){
    let results = []
    const {values} = this.props
    if(values.length == 0){
      results.push(<div key={this.wrapperRef.current+'none-result'} className={"dropdown-item-none"}> Không có mục nào để hiện thị</div>)
    }else if(this.state.contentShow.length != 0){
      this.state.contentShow.forEach(item=> (
        results.push(<div key={this.wrapperRef.current+item.key} className={"dropdown-item " + (this.checkItemSelected(item) ? 'mq-item-selected' : '')} onClick={() => {this.selectItem(item)}}> {item.text}</div>)
      ))
    }else if(this.state.searchText.trim() != ""){
      results.push(<div key={this.wrapperRef.current+'none-result'} className={"dropdown-item-none"}> Không có kết quả nào phù hợp</div>)
    }
    else{
      values.forEach(item=> (
        results.push(<div key={this.wrapperRef.current+item.key} className={"dropdown-item " + (this.checkItemSelected(item) ? 'mq-item-selected' : '')} onClick={() => {this.selectItem(item)}}> {item.text}</div>)
      ))
    }
    return results
  }
  render() {
    let searchResult = []
    if(this.props.multiple)
    {
      this.state.itemSelected.forEach((item,index) =>{
        searchResult.push(
          <div className="mq-select-head-item" key={index+"mq-select-head-item"+item.key}>{item.text} <i className="mi-close mq-select-head-item-icon" onClick={() => {
            if(!this.props.disabled){
              this.removeItemSelected(item)
            }

          }}></i></div>
        )
      })

      searchResult.push(
        <div className="mq-select-head-item-input" key={makeId(5)}><input type="text" readOnly={this.props.disabled ? "disabled": ""} className={this.props.disabled? "mq-select-disabled": ""} onFocus={() => {
          if(!this.props.disabled){
            this.focusSearch(true)
          }
        }} placeholder={this.props.placeholder}/></div>
      )
    }else {
      if(this.state.itemSelected.text && this.props.values.length > 0){
        searchResult.push(this.state.itemSelected.text)
      }else{
        searchResult.push(<i key={makeId(5)} className="mq-select-placeholder">{this.props.placeholder}</i>)
      }

    }

    return (
      <div {...this.props} ref={this.wrapperRef} className="form-group form-group-feedback form-group-feedback-right">
        <div className={"form-control mq-select-head "+ (this.props.disabled? "mq-select-disabled": "")} onClick={() => {
          if(!this.props.multiple && !this.props.disabled){
            this.changeShowState()
          }
        }}>
          {searchResult}
        </div>
        <div className="form-control-feedback">
          {
            this.state.show ? (<i className="icon-arrow-up5"></i>) :(<i className="icon-arrow-down5"></i>)
          }
        </div>
        <div className={"mq-select-body "+ (this.state.show ? "show-mq-select-body" : "")}>
          <div className="body-input-search-mq-select">
            <div className="form-group-feedback form-group-feedback-right">
              <input type="text" ref={this.wrapperRef+"search-input"} className="form-control form-control-sm" onChange={(e) => {
                this.searchItem(e.target.value)
              }} placeholder="Search..."
              />
              <div className="form-control-feedback form-control-feedback-sm">
                <i className="icon-search4 body-input-search-mq-select-icon"></i>
              </div>
            </div>
            <div className="dropdown-menu dropdown-menu-left show mq-select-body">
              {this.getContentResultShow()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
MqSelect.propTypes = {
  selectedItem: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  values: PropTypes.array,
  removeItemSelected: PropTypes.func,
  disabled: PropTypes.bool,
  defaultItemSelected: PropTypes.array,
  onChange: PropTypes.func.isRequired
}
MqSelect.defaultProps = {
  placeholder: "Chọn một mục...",
  values: [],
  disabled: false,
  defaultItemSelected: [],

}
export default MqSelect
