import React, {Component} from "react";
import PropTypes from 'prop-types';
const VALUES = [
  {
    key: 1,
    text: "một"
  },
  {
    key: 2,
    text: "hai"
  },
  {
    key: 3,
    text: "ba"
  },
  {
    key: 4,
    text: "bốn"
  },
  {
    key: 5,
    text: "năm"
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
const PLACEHOLDER = "Lựa chọn một mục..."

class MqSelect extends Component {
  constructor(props){
    super(props)
    this.state = {
      menuOpen: false,
      className: this.props.className,
      show: false,
      itemSelected: [],
      contentShow: VALUES,
      searchText: ''
    }
    this.wrapperRef = React.createRef()
  }
  componentDidMount() {
    document.addEventListener('click', this.handleClick)
    if(this.props.multiple && !this.props.removeItemSelected){
      console.error('removeItemSelected is required')
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick)
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
    if(text.trim() !=''){
      let result = []
      VALUES.forEach(value => {
        if(value.text.toUpperCase().includes(text.toUpperCase())){
          result.push(value)
        }
      })
      this.setState(state => {
        state.contentShow = result
        return state
      })
    }else{
      this.setState(state => {
        state.contentShow = VALUES
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
        this.setState(state => {
            if(rjs.checkSelectedItem(state.itemSelected,item)){
              state.itemSelected = state.itemSelected.filter(i => {
                return i.key != item.key
              })
            }else{
              state.itemSelected.push(item)
            }
            return state
        })
        this.props.selectedItem(item)
      }else{
        this.setState(state =>{
          state.itemSelected = item
          state.show = false
          return state
        })
        this.props.selectedItem(item)
      }
  }
  removeItemSelected(item){
    if(!this.props.removeItemSelected){
      console.error("removeItemSelected is required");
    }else{
      this.setState(state => {
        state.itemSelected = state.itemSelected.filter(i => {
          return i.key != item.key
        })
        return state
      })
      this.props.removeItemSelected(item)
    }
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
    if(this.state.contentShow.length == 0){
      results.push(<div key={this.wrapperRef.current+'none-result'} className={"dropdown-item-none"}> Không có kết quả phù hợp</div>)
    }else{
      this.state.contentShow.map(item=> (
        results.push(<div key={this.wrapperRef.current+item.key} className={"dropdown-item " + (this.checkItemSelected(item) ? 'mq-item-selected' : '')} onClick={() => {this.selectItem(item)}}> {item.text}</div>)
      ))
    }
    return results
  }
  render() {
    let searchResult = []
    if(this.props.multiple)
    {
      this.state.itemSelected.forEach(item =>{
        searchResult.push(
          <div className="mq-select-head-item" key={this.wrapperRef.current+"mq-select-head-item"+item.key}>{item.text} <i className="mi-close mq-select-head-item-icon" onClick={() => {
            this.removeItemSelected(item)
          }}></i></div>
        )
      })

      searchResult.push(
        <div className="mq-select-head-item-input" key={makeid(5)}><input type="text" onFocus={() => {
            this.focusSearch(true)
        }} placeholder={PLACEHOLDER}/></div>
      )
    }else {
      if(this.state.itemSelected.text){
        searchResult.push(this.state.itemSelected.text)
      }else{
        searchResult.push(<i className="mq-select-placeholder">{PLACEHOLDER}</i>)
      }

    }

    return (
      <div {...this.props} ref={this.wrapperRef} className="form-group form-group-feedback form-group-feedback-right">
        <div className="form-control mq-select-head" onClick={() => {
          if(!this.props.multiple){
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
}

export default MqSelect
