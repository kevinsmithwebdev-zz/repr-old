import React from 'react'

import Rep from '../Rep/'

import SortButton from '../SortButton/'

import { connect } from 'react-redux'

class Replist extends React.Component {
  render() {

    return (
      <table>
        <thead>
          <tr>
            <th>
              <SortButton
                keyName='name'
                textName='Repetoire'
                selected={this.props.sorter.key}
                isUp={this.props.sorter.isUp}
              />
            </th>
            <th>Category</th>
            <th>
              <SortButton
                keyName='elapsed'
                textName='Elapsed'
                selected={this.props.sorter.key}
                isUp={this.props.sorter.isUp}
              />
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortRepsByKey(this.props.reps, this.props.sorter, this.props.filter).map((rep, index) => <Rep key={index} rep={rep} />)}
        </tbody>
      </table>
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
