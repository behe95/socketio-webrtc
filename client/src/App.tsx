import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Room from './components/Room';
import { SocketProvider } from './contexts/SocketContext';


function App() {

  return (
    <SocketProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:id" component={Room} />
        </Switch>
      </BrowserRouter>

    </SocketProvider>
  );
}

export default App;
