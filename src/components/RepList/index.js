import React from 'react'
import Rep from '../Rep/'
import SortButton from '../SortButton/'
import { connect } from 'react-redux'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './style.css'

import { Grid, Row, Col } from 'react-bootstrap'

class Replist extends React.Component {
  render() {

    return (
      <div>
        <Grid>
          <Row className="titleRow show-grid">
            <Col md={5}>
              <SortButton
                keyName='name'
                textName='Repetoire'
                selected={this.props.sorter.key}
                isUp={this.props.sorter.isUp}
              />
            </Col>
            <Col md={3}>Category</Col>
            <Col md={2}>
              <SortButton
                keyName='elapsed'
                textName='Elapsed'
                selected={this.props.sorter.key}
                isUp={this.props.sorter.isUp}
              />
            </Col>
            <Col md={2}>Actions</Col>
          </Row>
          {sortRepsByKey(this.props.reps, this.props.sorter, this.props.filter).map((rep, index) => <Rep key={index} rep={rep} />)}
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    reps: state.reps,
    sorter: state.sorter,
    filter: state.filter
  }
}

export default connect(mapStateToProps)(Replist)

function sortRepsByKey(reps, sorter, filter) {

  let visibleReps = reps.slice()

  if (filter.filter!=='All') {
    visibleReps = reps.filter( function(rep) {
      return rep.category===filter.filter;
    })
  }

  let sortKey = ''
  switch (sorter.key) {
    case 'elapsed':
      sortKey='tCode'
      break
    case 'name':
      sortKey='name'
      break
    default:
      sortKey='tCode'
  }
  let up = sorter.isUp ? 1 : -1
  let down = sorter.isUp ? -1 : 1

  return visibleReps.sort(function(a, b) {
    if (a[sortKey]<b[sortKey])
      return up
    if (a[sortKey]>b[sortKey])
      return down
    return 0
  })
}
