
import "./App.css";
import Facts from "./components/Facts";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react--router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/facts" component={Facts} />
        <Route component={() => <h1>not found</h1>} />
      </Switch>
      {/* or could put the other way listed below, but its extra work when the other option is preloaded */}
      {/* if(showHome){
        return <Home></Home>
      }
      else <Facts></Facts> */}
      <p>footer</p>
    </div>
    </>
  );
}

export default App;
