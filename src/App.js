import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Toolbar from './components/Toolbar/Toolbar'
import Organization from "./pages/organizations/Organization";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/settings/settings";
import Quiz from "./pages/quiz/Quiz";
import Feed from "./pages/feed/Feed";
import Login from "./pages/signIn/Login"
import Register from "./pages/signIn/Register"
import SideDrawer from './components/SideDrawer/SideDrawer'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Test from './pages/test/Test';
import TestDetail from './pages/testDetail/TestDetail';
import BackDrop from './components/BackDrop/Backdrop';
import History from "./pages/history/History";
import Result from "./pages/result/Result";
import { FaLessThanEqual } from "react-icons/fa";


function handleTestClick (){
} 

class App extends React.Component {
  state = {
    sideDrawer: false,
    popup: false,
    showPopup: false,
    orgPopup: false,
    noNav: true,
    data: {},
    image: {},
    subscribedOrgz:[],
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawer: !prevState.sideDrawer};
    }); 
  };
  organizationHandler = (image, data) => {
    this.setState((prevState) => {
      return {orgPopup: !prevState.orgPopup,
              noNav:!prevState.noNav,
              image: image,
              data: data,
              };
    });
  }
  handleSubscribe = (item) => {
    this.setState(prevState => ({
      subscribedOrgz:[item, ...prevState.subscribedOrgz]
    }));
  }
  handleUnsubscribe = (item) => {
      this.setState({
        subscribedOrgz: this.state.subscribedOrgz.filter((_, i) => i.name !== item.name)
      });    
  }

  popupClickHandler = () => {
    this.setState((prevState) => {
      return {popup: !prevState.popup,
              noNav:!prevState.noNav};
    }); 
  };

  popPopUp = () => {
    this.setState((prevState) => {
      return {showPopup: !prevState.showPopup};
    }); 

  };

  setNav = () => {
    this.setState((prevState) => {
      return {noNav: !prevState.noNav};
    }); 

  };

  render(){
    let backDrop;
    let backDrop1;
    let backDrop2;

    if(this.state.sideDrawer){
      backDrop = <BackDrop drawerToggleClickHandler={this.drawerToggleClickHandler}/>;
    }
    if(this.state.popup){
      backDrop1 = <BackDrop popupClickHandler={this.popupClickHandler} popPopUp={this.popPopUp}/>;
    }
    if(this.state.orgPopup){
      backDrop2 = <BackDrop organizationHandler={this.organizationHandler} popPopUp={this.popPopUp}/>;
    }

  return (
    <Router>    
    <div style={{height: '100%'}}>
        <Toolbar show={this.state.noNav} showX={this.state.sideDrawer} drawClickHandler={this.drawerToggleClickHandler}/>
         <SideDrawer closeDraw={this.drawerToggleClickHandler} show={this.state.sideDrawer}/>;
        
        {backDrop}
        {backDrop1}
        {backDrop2}
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
          <Organization orgHandler1={this.organizationHandler} image={this.state.image} data={this.state.data} handleSubscribe={this.handleSubscribe} orgHandler={this.state.orgPopup}/>
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route exact path="/test">
          <Test popHandler={this.popupClickHandler} popPopup={this.popPopUp} showPopup={this.state.showPopup}/>
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>        
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/feed">
          <Feed subscribed={this.state.subscribedOrgz} image={this.state.image} data={this.state.data} orgHandler={this.state.orgPopup} orgHandler1={this.organizationHandler}/>
        </Route>
        <Route path="/history">
          <History />
        </Route>
        <Route path="/result">
          <Result />
        </Route>
    </main>
    </div>
    </Router>

  );
}
}

export default App;
