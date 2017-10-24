import React, { Component } from 'react';

import Header from "./components/Header/"
import RepBar from "./components/RepBar/"
import RepList from "./components/RepList/"

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addRep, changeSorter, changeFilter} from './actions/'
import { loadReps } from './data/'

class App extends Component {
  constructor(props) {
    super(props)

    loadReps().forEach(rep => {
      this.props.addRep(rep, false)
    })

    this.props.changeSorter('elapsed')
    this.props.changeFilter('All')
  }

  render() {
    return (
      <div>
        <Header />
        <RepBar />
        <br/>
        <RepList />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addRep, changeSorter, changeFilter}, dispatch)
}

export default connect(()=>{return {}}, mapDispatchToProps)(App)
