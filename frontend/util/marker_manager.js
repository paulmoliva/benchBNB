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
    }
  }

  _benchesToAdd(benches){
    debugger;
    if (benches){
      let keys = Object.keys(benches);
      let benchesMappedtoCoords = keys.map ( (el) => {
        return [benches[el].lat, benches[el].lng];
      });

      let result = benchesMappedtoCoords.filter( (el) => {
        // if (!(el[0] > sw.lat && el[1] > sw.lng && el[0] < ne.lat && el[1] < ne.lat))
        // return true;
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

}


export default MarkerManager;
