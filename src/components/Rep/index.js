import React from 'react'
import {bindActionCreators} from 'redux'
import {deleteRep, resetRep} from '../../actions/'
import {connect} from 'react-redux'
import { Button, Row, Col } from 'react-bootstrap'

import './style.css'

class Rep extends React.Component {
  render() {
    let curTCode = (new Date()).getTime()

    const MS_PER_DAY = 1000*60*60*24
    const daysElapsed = (tCode) => Math.round((curTCode - tCode) / MS_PER_DAY)

    return (
      <Row className="show-grid repRow">
        <Col md={5}>
          {this.props.rep.name}
        </Col>
        <Col md={3}>
          {this.props.rep.category}
        </Col>
        <Col md={2} className="elapsedNum">
          {daysElapsed(this.props.rep.tCode)}
        </Col>
        <Col md={2}>
          <Button onClick={()=>this.props.deleteRep(this.props.rep.id)}>Delete</Button>
          <Button onClick={()=>this.props.resetRep(this.props.rep.id, curTCode)}>Reset</Button>
        </Col>
      </Row>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({deleteRep, resetRep}, dispatch)
}

export default connect(()=>{return {}}, mapDispatchToProps)(Rep)
