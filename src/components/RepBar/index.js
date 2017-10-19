import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addRep } from '../../actions/'

import './style.css'

import CategoryButton from '../CategoryButton/'

class RepBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: '',
      nameError: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.target.classList.add('active')
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    if (this.showFormErrors()) {
      let inputs = document.querySelectorAll('input')
      let repName = inputs[0].value.trim()
      let category = inputs[1].value.trim()
      this.props.addRep({
        name: repName,
        category: category,
        tCode: (new Date()).getTime()
      })
      this.setState({ name: '', category: '', nameError: ''})
    }
  }

  showFormErrors() {
    const inputs = document.querySelectorAll('input')
    let isFormValid = true
    let repName = inputs[0].value.trim()

    if (repName.length<=3) {
      this.setState({ nameError: 'Repertoire name must be at least 3 characters' })
      isFormValid = false
    } else {
      isFormValid = true
    }
    return isFormValid
  }


  render() {
    let inputErrorStyle = (this.state.nameError)?"inputError":""

    return (
      <div>
        <form noValidate>
          <div className="form-group">
            <input
              className= { inputErrorStyle + " form-control"}
              type="text"
              name="name"
              ref="name"
              placeholder="add a piece of music"
              value={ this.state.name }
              onChange={ this.handleChange }
            required />
            <input className="form-control"
              type="text"
              name="category"
              ref="category"
              placeholder="category (opt.)"
              value={ this.state.category }
              onChange={ this.handleChange }
            />
            <button className="btn btn-primary"
              onClick={ this.handleSubmit }
            >
              submit
            </button>
          </div>
          <div className="error" id="nameError" >
            {this.state.nameError}
          </div>
        </form>
        <CategoryButton />
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(RepBar)
