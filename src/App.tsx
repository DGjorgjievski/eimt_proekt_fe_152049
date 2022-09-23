import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { User, Home, Login, Register } from "./pages";
import { Navigation } from "./components/Navigation/Navigation";
import { useEffect, useState } from "react";

function App() {
  const tempUserId = localStorage.getItem("userID");
  const [userID] = useState(!!tempUserId ? tempUserId : "");
  const tempUserName = localStorage.getItem("userName");
  const [userName] = useState(!!tempUserName ? tempUserName : "");
  const tempEmail = localStorage.getItem("userEmail");
  const [userEmail] = useState(!!tempEmail ? tempEmail : "");
  const tempPoints = localStorage.getItem("points");
  const [points] = useState(!!tempPoints ? tempPoints : "");

  useEffect(() => {
    localStorage.setItem("userID", !!userID ? userID : "");
    localStorage.setItem("userName", !!userName ? userName : "");
    localStorage.setItem("userEmail", !!userEmail ? userEmail : "");
    localStorage.setItem("points", !!points ? points : "");
  }, [userID]);

  // useEffect(() => {
  //   localStorage.setItem("userID", !!userID ? userID : "");
  //   localStorage.setItem("userName", !!userName ? userName : "");
  //   localStorage.setItem("userEmail", !!userEmail ? userEmail : "");
  //   localStorage.setItem("points", !!points ? points : "");
  // }, [localStorage]);
  return (
    <Router>
      <Navigation />
      {userID === "" ? (
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route path="/user" component={User}></Route>
        </Switch>
      )}
    </Router>
  );
}

export default App;
