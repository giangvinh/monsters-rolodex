import React from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

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

  handleChange = (e) => {
    this.setState({
      searhField: e.target.value,
    });
  }

  render() {
    const { monsters, searhField } = this.state;
    const filderedMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searhField.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className="page-title">Cats Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filderedMonsters}></CardList>
      </div>
    );
  }
}

export default App;
