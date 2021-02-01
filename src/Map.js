import React, {Component} from 'react';
import mapbox from 'mapbox-gl';
import './Map.css';

class Map extends Component {
  componentDidMount() {
    const app = this.props.app;
    mapbox.accessToken =
      'pk.eyJ1IjoibGluZGVsdWh1YW5nIiwiYSI6ImNra242a2NrMTI4bWUybmxhaDJiY2lhMjkifQ.qeoVefdW7LiaBoMsUS3sVQ';
    var map = new mapbox.Map({
      container: 'map',
      style: app.state.style,
      center: [app.state.latitude, app.state.longitude],
      zoom: app.state.zoom,
    });
    map.addControl(new mapbox.NavigationControl());
    app.setState({map: map});
  }

  render() {
    const app = this.props.app;
    const map = app.state.map;
    if (map) {
      map.setStyle(app.state.style);
    }
    return <div id="map"></div>;
  }
}

export default Map;
