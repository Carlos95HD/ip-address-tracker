import React, { useEffect, useState } from "react";
import {fetchInfo} from '../helpers/getGeoInfo'
import Card from "./Card";
import Map from "./Map";

const SearchResult = ( { ip } ) => {
  const [info, setInfo] = useState({})
  const { lat, lng } = !!info && info

  const [loc, setLoc] = useState([0,0])

  useEffect(() => {
    if ( ip !== '') {
      fetchInfo(ip, setInfo)
      console.log( "fetchinfo ejecutado")
    }
  
  }, [ip])

  useEffect(() => {
    if (lat && lng !== undefined ) {
      setLoc( [lat,lng] )
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