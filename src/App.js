import React, { useState } from "react";
// import ClientIp from "./components/ClientIp";
import SearchIp from "./components/SearchIp";
import SearchResult from "./components/SearchResult";
// import Map from "./components/Map";

import "./index.css";

const App = () => {
  const [ip, setIp] = useState('');
  // useEffect(() => {
  //   ClientIp(setIp);
  // }, []);
  // console.log("Ip inicial", ip);

  return (
    <div>
      <header className="app-header h-80 text-center grid">
        <h1 className="font-medium text-4xl text-white self-center">
          IP Address Tracker
        </h1>
        <SearchIp setIp={setIp} />
      </header>

      <SearchResult ip={ip} />
      {/* <div className="map__container"> */}
        {/* <SearchResult ip={ip} /> */}
        {/* <Map center={[0,0]} zoom={} /> */}
      {/* </div> */}

    </div>
  );
};

export default App;
