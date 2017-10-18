import React from 'react'
import {bindActionCreators} from 'redux'
import {deleteRep, resetRep} from '../../actions/'
import {connect} from 'react-redux'

class Rep extends React.Component {
  render() {
    // console.log(this.props.rep)
    let curTCode = (new Date()).getTime()

    const MS_PER_DAY = 1000*60*60*24
    const daysElapsed = (tCode) => Math.round((curTCode - tCode) / MS_PER_DAY)

    return (
      <tr>
        <td>
          {this.props.rep.name}
        </td>
        <td>
          {this.props.rep.category}
        </td>
        <td>
          {daysElapsed(this.props.rep.tCode)}
        </td>
        <td>
          <button onClick={()=>this.props.deleteRep(this.props.rep.id)}>Delete</button>
          <button onClick={()=>this.props.resetRep(this.props.rep.id, curTCode)}>Reset</button>
        </td>
      </tr>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({deleteRep, resetRep}, dispatch)
}

export default connect(()=>{return {}}, mapDispatchToProps)(Rep)
