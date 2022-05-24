import React from "react";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner />
    </div>
  );
};

export default App;
