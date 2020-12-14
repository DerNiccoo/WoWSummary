import React, { useEffect, useState } from "react";
import './App.css';

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Guildview from "./components/Guildview/Guildview.js";
import Gearview from "./components/Gearview/Gearview.js";
import Sidebar from "./components/Sidebar/Sidebar.js";

function activateTheme() {
  let style = document.documentElement.style;
  let variables = getComputedStyle(document.body);
  let theme = localStorage.getItem("theme");

  style.setProperty(
    "--theme-bg",
    variables.getPropertyValue("--theme-" + theme + "-bg")
  );
  style.setProperty(
    "--theme-color",
    variables.getPropertyValue("--theme-" + theme + "-color")
  );
}


function App() {
  const [change, setChange] = useState(0);  //Just to force a rerender of the page after changing the theme

  useEffect(() => {
    document.title = "WoW Summary";
  }, []);

  activateTheme();

  function changeTheme(event) {
    if (localStorage.getItem("theme") === "hell") {
      localStorage.setItem("theme", "dunkel");
    } else {
      localStorage.setItem("theme", "hell");
    }

    activateTheme();
    let old = change;
    setChange(++old);
  }

  function onClickRefresh(event) {
    if (window.confirm("Aktualisieren der Daten, dieser Vorgang dauert länger!!!")) {
      fetch("https://b7ab414a-ca5b-41a8-ba5a-adc219611e67.ka.bw-cloud-instance.org/guild")
        .then(
          window.location.href = "/"
        )
    }
  }

  return (

    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <main>
          <Switch>
            <Route path="/gearview">
              <Gearview />
            </Route>
            <Route path="/buy">
              <Gearview />
            </Route>
            <Route path="/analysis">
              <Guildview />
            </Route>
            <Route path="/calculator">
              <Guildview />
            </Route>
            <Route path="/">
              <Guildview />
            </Route>
            <Route path="*">404</Route>
          </Switch>
        </main>
        <Sidebar onClick={changeTheme} key={change} onClickRefresh={onClickRefresh} />
      </div>
    </Router>
  );
}

export default App;
