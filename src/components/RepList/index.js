import React from 'react'

import Rep from '../Rep/'

import { connect } from 'react-redux'

class Replist extends React.Component {
  render() {

    return (
      <table>
        <thead>
          <tr>
            <th>Repertoire</th>
            <th>Category</th>
            <th>Elapsed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortRepsByKey(this.props.reps, this.props.sorter).map((rep, index) => <Rep key={index} rep={rep} />)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  return {
    reps: state.reps,
    sorter: state.sorter
  }
}

export default connect(mapStateToProps)(Replist)

function sortRepsByKey(reps, sorter) {
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

  return reps.sort(function(a, b) {
    if (a[sortKey]<b[sortKey])
      return up
    if (a[sortKey]>b[sortKey])
      return down
    return 0
  })
}
