import React, { Component } from 'react';

import Header from "./components/Header/"
import RepBar from "./components/RepBar/"
import RepList from "./components/RepList/"

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addRep, changeSorter} from './actions/'

import {PRELOAD} from './constants/'

class App extends Component {
  constructor(props) {
    super(props)

    for (var i=0; i<PRELOAD.length; i++)
      this.props.addRep(PRELOAD[i])
    this.props.changeSorter('elapsed')
  }

  render() {
    return (
      <div>
        <Header />
        <RepBar />
        <RepList />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addRep, changeSorter}, dispatch)
}

export default connect(()=>{return {}}, mapDispatchToProps)(App)
