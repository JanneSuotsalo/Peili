 import React from 'react';
import './Profile.css';
import ProfileCard from '../../components/card/ProfileCard';
import GasMeter from '../../components/card/GasMeter';
import Settings from '../../components/Settings/Settings'
/*
Profile page that displays your information. Hardcoded for now.

*/
export default class Profile extends React.Component {
    //NOW HARD CODED. FETCH IN THE FUTURE
    state = {
        user:{
            name: "John Doe",
            birth: "20.4.1999",
            email: "JohnDoe@gmail.com",
            city:"Espoo",
            phone:"31231",
            hobby:"Gym",
            Tests:5,
            subscribed:1
        },
        scroll: false,
        scroll1: false,
        zoom: false,
    }

    render() {
        //now only one item but will be changed to a list
        return (
            <div className="profileMain">
                <ProfileCard title={"User"} money={this.props.money} highlight={this.state.scroll} user={this.state.user}/>
                <GasMeter />
                <Settings title={"Settings"}/>
                </div>
        );
    }

    handleCardChange(id){

        if(id === 1){
            this.setState({
                scroll:true,
                scroll1:false,
                zoom:false
            })
        } else if(id === 2){
            this.setState({
                scroll:false,
                scroll1:false,
                zoom:true
            })
        } else if(id === 3){
            this.setState({
                scroll:false,
                scroll1:true,
                zoom:false
            })
        }
    }
}
