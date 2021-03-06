import React from "react";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat.js";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "./App.css";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {user ? (
        <div className="app_body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
