import React, {Component} from 'react';
import './Toggler.css';

class Toggler extends Component {
  changeStyle(url) {
    this.props.app.setState({
      style: url,
    });
  }

  render() {
    const styles = [
      {name: 'Light', url: 'mapbox://styles/mapbox/light-v10'},
      {name: 'Dark', url: 'mapbox://styles/mapbox/dark-v10'},
      {name: 'Streets', url: 'mapbox://styles/mapbox/streets-v11'},
    ];

    const buttons = styles.map((style, index) => {
      let selectedCheck = '';
      if (style.url === this.props.app.state.style) {
        selectedCheck = 'selected';
      }
      // return <button onClick={this.changeStyle(style.url)}>{style.name}</button>;
      return (
        <button className={selectedCheck} key={index} onClick={() => this.changeStyle(style.url)}>
          {style.name}
        </button>
      );
    });

    return <div className="toggler">{buttons}</div>;
  }
}

export default Toggler;
