import React from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searhField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((responce) => responce.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search monster"
          onChange={(e) => {
            return this.setState({
              searhField: e.target.value,
            });
          }}
        />
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
