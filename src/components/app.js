import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import NavBar from './nav_bar';
import PropertyList from '../containers/property_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <br/>
        <SearchBar />
        <br/>
        <PropertyList />
      </div>
    );
  }
}
