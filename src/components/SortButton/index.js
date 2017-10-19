import React from 'react'
import { bindActionCreators } from 'redux'
import { changeSorter } from '../../actions/'
import { connect } from 'react-redux'

class SortButton extends React.Component {
  render() {
    let sortArrow = ''
    let styles = {}

    if (this.props.selected===this.props.keyName) {
      sortArrow = this.props.isUp ? '\u25B2' : '\u25BC'
      styles.fontWeight = 'bold'
    }

    return (
      <button
        style={styles}
        onClick={()=>this.props.changeSorter(this.props.keyName)}
      >
        {this.props.textName} {sortArrow}
      </button>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeSorter}, dispatch)
}

export default connect(()=>{return {}}, mapDispatchToProps)(SortButton)
