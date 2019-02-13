import React, { Component } from 'react';
import './App.css';
import {getAll} from './api/api';
import Form from "./form";
import Table from "./table";
class App extends Component {

  render() {
    return (
      <div className="App">
        <Form/>
        <Table />
      </div>
    );
}
}

export default App;
