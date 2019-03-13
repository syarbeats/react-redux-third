import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { updateUser } from "./action/userAction";

import { connect } from "react-redux";

class App extends Component {
  constructor(props){
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
    this.onUpdateUserOnChange = this.onUpdateUserOnChange.bind(this);
  }

  onUpdateUser(){
    this.props.onUpdateUser('Goerge Harisson');
  }

  onUpdateUserOnChange(event){
    this.props.onUpdateUserOnChange(event.target.value);
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
          <div>
            <input onChange={this.onUpdateUserOnChange}/>
          </div>
          { this.props.user }
        </main>
      </div>
    );
  }
}


const mapStateToProps = (state, props) => {

  console.log(props);

  return{
    products: state.products,
    user: state.user,
    userPlusProps: `${state.user} ${props.aRandomProps}`
  }
};

const mapActionsToProps = {
  onUpdateUser: updateUser,
  onUpdateUserOnChange: updateUser
};

export default connect(mapStateToProps,mapActionsToProps)(App);
