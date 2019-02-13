import React, { Component } from 'react';
import {getAll} from './api/api';
import {remove} from './api/api';


class Table extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : [],
      change:'next'
    }
  }
  componentWillMount(){
   getAll('users').then(userObj =>
     this.setState({
     data : userObj
      })
    );
  }

  runReq(id){
    remove('users', id).then(userObj =>
      this.setState({
        data:userObj
      })
    );
  };

  render() {
    const users = this.state.data;
    return(
<div className = "tableContainer">
<table className="table">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody className="t-col">
      { users.map(
          (user,index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td><button type="button" className="btn btn-danger"
                onClick = {()=>this.runReq(user._id)}>
                del</button></td>
            </tr>
          )
      )
}
    </tbody>
</table>
<div className ="row">
  <div className ="col">
    <button type="submit" className="btn btn-primary">
       Add user</button>
  </div>
</div>

</div>
    )
  }
}

export default Table;
