import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addRep } from '../../actions/'

import SortButton from '../SortButton/'

class Repbar extends React.Component {
  render() {
    return (
      <div>
        <input type="text" ref="rep" placeholder="add rep" />
        <button
          onClick={()=>this.props.addRep(this.refs.rep.value, (new Date()).getTime())}
        >
          Add Rep
        </button>
        {" - "}
        <SortButton
          name="elapsed"
          selected={this.props.sorter.key}
          isUp={this.props.sorter.isUp}
        />
        <SortButton
          name="name"
          selected={this.props.sorter.key}
          isUp={this.props.sorter.isUp}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    sorter: state.sorter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addRep}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Repbar)
