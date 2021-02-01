import React, {Component} from 'react';
import './App.css';
import Map from './Map';
import Toggler from './Toggler';
import Search from './Search';
import PlacesPanel from './PlacesPanel';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
      latitude: -95.369804,
      longitude: 29.760427,
      style: 'mapbox://styles/mapbox/light-v10',
      zoom: 10,
      places: [],
    };
  }
  render() {
    return (
      <div className="App">
        <Toggler app={this} />
        <Search app={this} />
        <PlacesPanel app={this} />
        <Map app={this} />
      </div>
    );
  }
}

export default App;
