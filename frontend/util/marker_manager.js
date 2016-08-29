class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = [];
  }

  updateMarkers(benches){
    if (benches){
      let benchesToAdd = this._benchesToAdd(benches);
      console.log(benchesToAdd);
      benchesToAdd.forEach( (bench) => this._createMarkerFromBench(bench) );
      let markersToRemove = this._markersToRemove();
      markersToRemove.forEach ( (marker) => {
        this._removeMarker(marker);
      } );
    }
  }

  _benchesToAdd(benches){
    if (benches){
      let keys = Object.keys(benches);
      let benchesMappedtoCoords = keys.map ( (el) => {
        return [benches[el].lat, benches[el].lng];
      });

      let result = benchesMappedtoCoords.filter( (el) => {

        if(this.markers.includes([el.lat, el.lng])){
          return false;
        }
        else{
          return true;
        }
      });
      return result;
    }
  }

  _createMarkerFromBench(bench){
    let pos = {lat: bench[0], lng: bench[1]};
    var marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      title: 'Hello World!'
    });
    this.markers.push(marker);
  }

  _markersToRemove(benches){
    let result = [];
    if (benches){
      let keys = Object.keys(benches);
      let benchesMappedtoCoords = keys.map ( (el) => {
        return [benches[el].lat, benches[el].lng];
      });
      result = benchesMappedtoCoords.filter( (el) => {

        if(this.markers.includes([el.lat, el.lng])){
          return true;
        }
        else{
          return false;
        }
      });
      return result;
    }
    return result;
  }

  _removeMarker(marker){
    marker.setMap(null);
    this.markers.splice(this.markers.indexOf(marker), 1);
  }
}


export default MarkerManager;
