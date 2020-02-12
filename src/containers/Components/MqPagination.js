import React, {Component} from "react";
import PropTypes from "prop-types";
class MqPagination extends Component{
  constructor(props){
    super(props)
  }
  renderContentPagination(){
    let result = []
    const {from,to,currentPage} = this.props
    for(let i = from; i<= to; i++){
      if(currentPage - 4 > i){
        continue
      }
      else if(i > currentPage+2 && i>6){
        result.push(
          <li className="page-item disable" key={i}><span className="page-link">...</span></li>
        )
        break
      }
      else{
        result.push(
          <li className={"page-item "+ (currentPage == i ? "active": "")} key={i}><span className="page-link" onClick={() => {
            this.props.choosePage(i)
          }}>{i}</span></li>
        )
      }
    }
    return result
  }
  render(){
    const {from,to,currentPage} = this.props
    return (
      <ul {...this.props}>
        <li className={"page-item "+(currentPage == 1? "disabled" : "")}>
          <span className={"page-link"}
                onClick={()=> {
                  if(this.props.currentPage > 1){
                    this.props.onPrev()
                  }
                }}
        >&larr; &nbsp; Prev</span></li>
        {
          this.renderContentPagination()
        }
        <li className={"page-item "+(currentPage == to? "disabled" : "")}>
          <span className="page-link"
                onClick={()=> {
                  if(this.props.currentPage < to){
                    this.props.onNext()
                  }
                }}
          >Next &nbsp; &rarr;</span></li>
      </ul>
    )
  }
}
MqPagination.propTypes = {
  from: PropTypes.number.isRequired,
  to: PropTypes.number.isRequired,
  currentPage: PropTypes.number,
  choosePage: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired
}
MqPagination.defaultProps = {
  currentPage: 1
};
export default MqPagination
