import React from "react";
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
import { BrowserRouter as Router, Route} from "react-router-dom";
import Test from './pages/test/Test';
import BackDrop from './components/BackDrop/Backdrop';
import History from "./pages/history/History";
import Result from "./pages/result/Result";
import CustomChatBot from './components/Chatbot/CustomChatbot';
import Shop from "./pages/shop/shop";
import { createBrowserHistory } from "history";

class App extends React.Component {
  state = {
    sideDrawer: false,
    popup: false,
    showPopup: false,
    orgPopup: false,
    noNav: true,
    money: 0,
    data: {},
    image: {},
    subscribedOrgz:[],
    questionStatus: 0
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
  popOrgDetailFromFeed = () => {
    this.setState((prevState) => {
      return {orgPopup: !prevState.orgPopup,
              noNav:!prevState.noNav
              };
    });
  }

  handleSubscribe = (item) => {
    this.setState(prevState => ({
      subscribedOrgz:[item, ...prevState.subscribedOrgz]
    }));
  }

  // HEEY
  handleQuestionStatus = (item) => {
    this.setState({questionStatus: item});
    console.log(this.state.questionStatus)
  }

  handleUnsubscribe = (item) => {
      this.setState({
        subscribedOrgz: this.state.subscribedOrgz.filter((i) => i !== item)
      })
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

  setMoneyAmount = (amount) => {
    this.setState({money: this.state.money + amount })
  }

  render(){
    const history = createBrowserHistory()
    let backDrop;
    let backDrop1;
    let backDrop2;
    let chat;
    
    if(this.state.sideDrawer){
      backDrop = <BackDrop drawerToggleClickHandler={this.drawerToggleClickHandler}/>;
    }
    if(this.state.popup){
      backDrop1 = <BackDrop popupClickHandler={this.popupClickHandler} popPopUp={this.popPopUp}/>;
    }
    if(this.state.orgPopup){
      backDrop2 = <BackDrop organizationHandler={this.organizationHandler} popPopUp={this.popPopUp}/>;
    }
    console.log(history.location.pathname)
    if(history.location.pathname === "/" || history.location.pathname === "/login"){
        
    } else {
      chat =<CustomChatBot normal={true} className={this.state.sideDrawer ? "show" : "noShow"}/>      
    }
  return (
    
    <Router>    
    <div style={{height: '100%'}}>
        <Toolbar show={this.state.noNav} showX={this.state.sideDrawer} drawClickHandler={this.drawerToggleClickHandler}/>
         <SideDrawer closeDraw={this.drawerToggleClickHandler} show={this.state.sideDrawer}/>;
         {chat}
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
          <Organization 
            orgHandler1={this.organizationHandler} 
            subscribed={this.state.subscribedOrgz} 
            image={this.state.image} 
            data={this.state.data} 
            handleSubscribe={this.handleSubscribe} 
            handleUnsubscribe={this.handleUnsubscribe} 
            orgHandler={this.state.orgPopup}/>
        </Route>
        <Route path="/profile">
          <Profile money={this.state.money}/>
        </Route>
        <Route exact path="/test">
          <Test popHandler={this.popupClickHandler}  popPopup={this.popPopUp} showPopup={this.state.showPopup}/>
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>        
        <Route path="/quiz">
          <Quiz 
            handleQuestionStatus={this.handleQuestionStatus}
            questionStatus={this.state.questionStatus}
            setMoney = {this.setMoneyAmount}
            money={this.state.money}/>
        </Route>
        <Route path="/feed">
          <Feed 
            popHandler={this.popupClickHandler}
            popPopup={this.popPopUp}
            showPopup={this.state.showPopup}
            subscribed={this.state.subscribedOrgz}
            handleSubscribe={this.handleSubscribe} 
            handleUnsubscribe={this.handleUnsubscribe} 
            image={this.state.image}
            data={this.state.data}
            orgHandler={this.state.orgPopup}
            popOrgDetail={this.popOrgDetailFromFeed}
            orgHandler1={this.organizationHandler}/>
        </Route>
        <Route path="/history">
          <History />
        </Route>
        <Route path="/result" render={(props) => <Result {...props}/>}>
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
    </main>
    </div>
    </Router>

  );
}
}

export default App;
