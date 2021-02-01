import React, {Component} from 'react';
import './PlacesPanel.css';
import mapbox from 'mapbox-gl';

class PlaceItem extends Component {
  render() {
    const app = this.props.app;
    const map = app.state.map;

    const place = this.props.place;

    if (map) {
      const popup = new mapbox.Popup({
        closeButton: false,
      });

      popup.setHTML(place.name);

      const marker = new mapbox.Marker({
        color: '#2727e6',
      });
      marker.setLngLat([place.longitude, place.latitude]);
      marker.setPopup(popup);

      marker.addTo(map);
    }

    return <div className="place-item">{place.name}</div>;
  }
}

export default PlaceItem;
