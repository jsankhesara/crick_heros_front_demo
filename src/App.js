import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import List from './components/List'


const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={`/`} component={List} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;