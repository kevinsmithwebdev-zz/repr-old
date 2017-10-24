import React from 'react'
import { bindActionCreators } from 'redux'
import { changeSorter } from '../../actions/'
import { connect } from 'react-redux'

import './style.css'

import { TiArrowSortedUp, TiArrowSortedDown, TiArrowUnsorted } from 'react-icons/lib/ti'

class SortButton extends React.Component {
  render() {
    let sortArrow = (<TiArrowUnsorted className="arrowUnsorted" />)

    if (this.props.selected===this.props.keyName) {
      sortArrow = this.props.isUp ?
        (<TiArrowSortedUp className="arrowSorted"/>) :
        (<TiArrowSortedDown className="arrowSorted"/>)
    }

    return (
      <span
        onClick={()=>this.props.changeSorter(this.props.keyName)}
      >
        {this.props.textName} {sortArrow}
      </span>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeSorter}, dispatch)
}

export default connect(()=>{return {}}, mapDispatchToProps)(SortButton)
