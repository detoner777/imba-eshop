import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const containerStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [
        { id: 1, latitude: 55.663765, longitude: 37.598543, name: "Imba" },
        // { latitude: 47.2052192687988, longitude: -121.988426208496 },
        //...
      ],
    };
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          name={store.name}
          position={{
            lat: store.latitude,
            lng: store.longitude,
          }}
          //   onClick={() => console.log("You clicked me!")}
        />
      );
    });
  };

  render() {
    return (
      <div className="google-map-component">
        <Map
          containerStyle={containerStyle}
          google={this.props.google}
          zoom={16}
          scrollwheel={true}
          onReady={this.fetchPlaces}
          initialCenter={{ lat: 55.663765, lng: 37.598543 }}
        >
          {/* <Marker
            name={"Dolores park"}
            position={{ lat: 55.663765, lng: 37.598543 }}
          /> */}
          <Marker />
          {this.displayMarkers()}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_API,
})(MapContainer);
