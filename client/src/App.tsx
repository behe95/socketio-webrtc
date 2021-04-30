import React from 'react';
import './App.css';
import * as io from "socket.io-client";
import axios from "axios";

const ENDPOINT  = "http://localhost:5000/";

function App() {

  React.useEffect(() => {
    const clientSocket = io.connect(ENDPOINT);
    console.log(clientSocket);

    

    return () => {
      
    }
  }, [])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
