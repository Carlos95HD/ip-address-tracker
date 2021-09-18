import L from "leaflet";
import markerIcon from "../img/icon-location.svg";

let myIcon = L.icon({
  iconUrl: markerIcon,
  iconSize: [83, 95],
  iconAnchor: [40, 78],
});

export default myIcon;
