import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import myIcon from "../helpers/customIcon";
import ChangeView from './ChangeView'

const Map = ({ center , zoom }) => {

  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={true}>
      <ChangeView center={center} zoom={zoom} />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
        // url="https://api.mapbox.com/styles/v1/hernan2021/cksgqi9cn16hd17r0smscl6yy/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaGVybmFuMjAyMSIsImEiOiJja3NmanZnNTUxYXp4MndvYTNjNXluOHN5In0.d_3Z3ggtrINOZIw1XYGxDg"
      />
      <Marker position={center} icon={myIcon}></Marker>
    </MapContainer>
  );
};

export default Map;
