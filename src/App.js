import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { updateUser } from "./action/userAction";

import { connect } from "react-redux";

class App extends Component {
  constructor(props){
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(){
    this.props.onUpdateUser('Goerge Harisson');
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header>
        </header>
        <main>
          <p>Check inspect element for checking the state</p>

          <div onClick={this.onUpdateUser}>
            <p>Or Clik Me to Update User !!!</p>
          </div>
          { this.props.user }
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  user: state.user
});

const mapActionsToProps = {
  onUpdateUser: updateUser
};

export default connect(mapStateToProps,mapActionsToProps)(App);
