import React from 'react'
import { bindActionCreators } from 'redux'
import { changeFilter } from '../../actions/'
import { connect } from 'react-redux'

class CategoryButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value)
    this.props.changeFilter(e.target.value)
  }

  render() {

    let categoryArr = ['All', ...new Set(this.props.reps.map(rep => rep.category).sort())]

    const selectRenderer = (name, i) => (<option key={i} value={name}>{name}</option>)

    return (
      <form>
        <label htmlFor="categories">Category Filter:</label>
        <select
          name='categories'
          id='categories'
          onChange={this.handleChange}
        >
          {categoryArr.map((cat, i) => selectRenderer(cat, i))}
        </select>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    reps: state.reps,
    sorter: state.sorter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeFilter}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryButton)
