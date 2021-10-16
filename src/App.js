import React, { useState, useEffect } from "react";
import ClientIp from "./components/ClientIp";
import SearchIp from "./components/SearchIp";
import SearchResult from "./components/SearchResult";

import "./index.css";

const App = () => {
  const [ip, setIp] = useState("");
  useEffect(() => {
    ClientIp(setIp);
  }, []);

  return (
    <div>
      <header className="app-header h-80 text-center grid">
        <h1 className="font-medium text-2xl lg:text-4xl text-white self-center">
          IP Address Tracker
        </h1>
        <SearchIp ip={ip} setIp={setIp} />
      </header>

      <SearchResult ip={ip} />
    </div>
  );
};

export default App;
