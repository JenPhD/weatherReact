import React, { Component } from 'react';

//working with google map api as component in react
//is a little different than other components
class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render () {
    //this.refs.map, can get this element
    return <div ref="map" />
  }
}

export default GoogleMap;