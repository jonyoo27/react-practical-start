import { useState, useEffect, useMemo } from "react";
import "./main-page.css";
import Header from "./header";
import FeaturedHouse from "./featured-house";
import HouseFilter from "./house-filter";
import SearchResults from "../search-results";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HouseFromQuery from "../house/HouseFromQuery";

function App() {
  

  useEffect(() => {

  }, []);

  const featuredHouse = useMemo();

  return (
    <Router>
      <div className="container">
        <Header subtitle="Providing houses all over the world" />


        <Switch>
          <Route path="/searchresults/:country">

          </Route>

          <Route path="/house/:id">

          </Route>

          <Route path="/">

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
