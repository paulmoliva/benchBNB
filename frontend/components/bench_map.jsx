import React from 'react';
import MarkerManager from '../util/marker_manager.js';

class BenchMap extends React.Component {

  componentDidMount(){
    // find the `<map>` node on the DOM
    const mapDOMNode = this.refs.map;

    // set the map to show SF
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // this is SF
      zoom: 13
    };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);
    const that = this;
    this.map.addListener( 'idle', ( ) => {
      let latLng = this.map.getBounds();
      const ne = latLng.getNorthEast();
      const sw = latLng.getSouthWest();
      const bounds = {ne: {lat:ne.lat(), lng:ne.lng()}, sw: {lat:sw.lat(), lng:sw.lng()}};
      console.log(bounds);
      that.props.updateBounds(bounds);
    });
  }

  componentWillUpdate(nextProps){

    this.MarkerManager.updateMarkers(nextProps.benches);
  }



  render(){
    return (
      <div id='map-container' ref='map'>

      </div>
    );
  }
}

export default BenchMap;
