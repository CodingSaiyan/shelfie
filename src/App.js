import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: []
    }
  }

  componentDidMount() {
    axios.get('/api/inventory').then(response => {
      this.setState({
        inventory: response.data
      })
    }).catch(() => {console.log('Error! did not get inventory! Front end!')})
  }

  getInv = () => {
    axios.get('/api/inventory').then(response => {
      this.setState({
        inventory: response.data
      })
    }).catch(() => {console.log('Error! did not get inventory! Front end!')})
  }

  render() {
    return (
      <div className="App">
         <Header />
        <Form 
          getInv={this.getInv}
        />
       
        <Dashboard 
          list={this.state.inventory}
          getInv={this.getInv}
        />
      </div>
    );
  }
}

export default App;
