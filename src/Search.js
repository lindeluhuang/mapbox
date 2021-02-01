import React, {Component} from 'react';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      isLoading: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const accessToken =
      'pk.eyJ1IjoibGluZGVsdWh1YW5nIiwiYSI6ImNra21yZWwzajBteHkyb3J6Mjh0Yzdqb3gifQ.MJ3Sy9eXrZWGqHJlDh_sGw';
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.value}.json?access_token=${accessToken}`;

    fetch(url)
      // when it succeeds we run .then() on it
      // this is a callback where we get the response
      .then((response) => {
        // here we convert the response to json
        // we then return it to send it along to the next step
        return response.json();
      })
      // we run .then() again and get access to the data
      .then((data) => {
        // then we can do something with the data
        let places = this.props.app.state.places;
        const firstResult = data.features[0];
        places.push({
          name: this.state.value,
          latitude: firstResult.center[1],
          longitude: firstResult.center[0],
        });

        this.props.app.setState({
          places: places,
        });

        this.setState({value: ''});
      })
      // if there’s an error, we can catch it out at the end
      .catch((error) => {
        // alert the user what went wrong
        alert(error.message);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.value} onChange={this.handleChange} placeholder="Add a place..." />
      </form>
    );
  }
}

export default Search;
