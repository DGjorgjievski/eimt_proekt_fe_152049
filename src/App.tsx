import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { About, Books, Home } from "./pages";
import { Navigation } from "./components/Navigation/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/books" component={Books} />
      </Switch>
    </Router>
  );
}

export default App;
