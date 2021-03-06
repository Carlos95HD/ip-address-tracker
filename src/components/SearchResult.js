import React, { useEffect, useState } from "react";
import {fetchInfo} from '../helpers/getGeoInfo'
import Card from "./Card";
import Map from "./Map";

const SearchResult = ( { ip } ) => {

  const [info, setInfo] = useState({});
  const [loc, setLoc] = useState([0,0])

  useEffect(() => {
    if ( ip !== '') {
      fetchInfo(ip, setInfo)
    }
  }, [ip])

  useEffect(() => {
    if ( info?.lat && info?.lng ) {
      setLoc( [ info.lat, info.lng ] )
    }
  }, [info])

  return (
    <div className="map__container">
      <Card info={info} />
      <Map center={loc} zoom={14} />
    </div>
  );
}

export default SearchResult;