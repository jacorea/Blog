import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react';

class App extends Component {
  state = {
    values: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/values')
      .then((response) => {
        this.setState({
          values: response.data
        })
      })
  }

  render() {
    let {values} = this.state;
    return (
      <div>
        <Header as='h2'>
        <Icon name='users' />
          <Header.Content>Reactivities</Header.Content>
        </Header>
          <ul>
            <List>
            {values.map((value: any) => (
                <List.Item key={value.id}>{value.name}</List.Item>
                ))}
            </List>
          </ul>
      </div>
    );
  } 
}

export default App;
