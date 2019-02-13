import React, { Component } from 'react';
import {add} from './api/api';
import {getAll} from './api/api';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    };
  }

  click(){
    let bod = {
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      email:this.state.email,
    }
    add('users',bod);
  }
  render() {

    return (
      <div className="container">
        <form>
          <div className ="row">
            <div className ="col" >
            <div className="form-group">
              <label htmlFor="first">First Name</label>
              <input type="text" className="form-control" id="first"
                 onChange = {e => this.setState({ firstName:e.target.value })}
                 placeholder="your first name"/>
            </div>
            <div className="form-group">
              <label htmlFor="last">Last Name</label>
              <input type="text" className="form-control" id="last"
                onChange = {e => this.setState({ lastName:e.target.value })}
                 placeholder="your last name"/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email"
                onChange = {e => this.setState({ email:e.target.value })}
                 placeholder="your email"/>
            </div>
          </div>
        </div>
          <div className ="row">
            <div className ="col">
              <button type="submit" className="btn btn-primary"
                 onClick = {()=>this.click()}>
                 Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
