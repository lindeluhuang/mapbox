import React, {Component} from 'react';
import mapbox from 'mapbox-gl';
import './Map.css';

class Map extends Component {
  componentDidMount() {
    mapbox.accessToken =
      'pk.eyJ1IjoibGluZGVsdWh1YW5nIiwiYSI6ImNra21yZWwzajBteHkyb3J6Mjh0Yzdqb3gifQ.MJ3Sy9eXrZWGqHJlDh_sGw';
    var map = new mapbox.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [-95.369804, 29.760427],
      zoom: 10,
    });
    map.addControl(new mapbox.NavigationControl());
  }

  render() {
    return <div id="map"></div>;
  }
}

export default Map;
