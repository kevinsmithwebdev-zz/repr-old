import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap'
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
    const inputs = document.querySelectorAll('input')

    if (this.showFormErrors(inputs)) {
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

  showFormErrors(inputs) {
    let isFormValid = true
    let repName = inputs[0].value.trim()
    if (repName.length<3) {
      this.setState({ nameError: 'Repertoire name must be at least 3 characters.' })
      isFormValid = false
    } else {
      isFormValid = true
    }
    return isFormValid
  }

  render() {
    return (
      <div>
        <Form inline className='centered'>
          <FormGroup controlId="formInlineName">
            <ControlLabel>Title</ControlLabel>
            {' '}
            <FormControl
              className={(this.state.nameError)?'inputError':''}
              name="name"
              type="text"
              placeholder="repertoire title..."
            />
          </FormGroup>
          {' '}
          <FormGroup controlId="formInlineEmail">
            <ControlLabel>Category</ControlLabel>
            {' '}
            <FormControl
              name="category"
              type="text"
              placeholder="category (opt.)"
            />
          </FormGroup>
          {' '}
          <Button
            type="submit"
            className="btn btn-primary"
            onClick={ this.handleSubmit }
          >
            Add
          </Button>
          <div
            className="error"
            id="nameError"
          >
            {this.state.nameError}
          </div>
        </Form>
        <br/>
        <div className='centered'>
          <CategoryButton />
        </div>
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
