import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Toolbar from './components/Toolbar/Toolbar'
import Organization from "./pages/organizations/Organization";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/settings/settings";
import Feed from "./pages/feed/Feed";
import Login from "./pages/signIn/Login"
import Register from "./pages/signIn/Register"
import SideDrawer from './components/SideDrawer/SideDrawer'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Test from './pages/test/Test';
import BackDrop from './components/BackDrop/Backdrop';


function handleTestClick (){
  console.log("here")
} 

class App extends React.Component {
  state = {
    sideDrawer: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawer: !prevState.sideDrawer};
    }); 
  };

  render(){
    let sideDraw;
    let backDrop;
    if(this.state.sideDrawer){
      backDrop = <BackDrop drawerToggleClickHandler={this.drawerToggleClickHandler}/>;

    }

  return (
    <Router>    
    <div style={{height: '100%'}}>
        <Toolbar drawClickHandler={this.drawerToggleClickHandler}/>
         <SideDrawer closeDraw={this.drawerToggleClickHandler} show={this.state.sideDrawer} routeHandler={this.routeHandler}/>;
        {backDrop}
      <main style={{marginTop: '64px'}}>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/login" component={Login}>
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/organization">
          <Organization />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
        <Route path='/test:id'>
          <Test />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/feed">
          <Feed />
        </Route>
    </main>
    </div>
    </Router>

  );
}
}

export default App;
