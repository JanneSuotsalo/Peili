import React from 'react';
import ListView from '../../components/list/ListView';
import './Profile.css';
import SmallCard from '../../components/card/SmallCard';
import ProfileCard from '../../components/card/ProfileCard';
import I18n from '../../components/Element/LanguageSwticher/I18n';
import GasMeter from '../../components/card/GasMeter';


var data = require('../../example.json');

export default class Profile extends React.Component {
    //NOW HARD CODED. FETCH IN THE FUTURE
    state = {
        user:{
            name: "John Doe",
            birth: "20.4.1999",
            email: "JohnDoe@gmail.com",
            city:"Espoo"
        },
        card1: false,
        card2: false,
        card3: false,
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 300 && window.scrollY < 400){
                this.handleCardChange(1);
            } else {
                this.handleCardChange(2);
            }
        })
    }

    render() {
        //now only one item but will be changed to a list
        return (
            <div className="profileMain">
                <ProfileCard user={this.state.user}/>
                <GasMeter title={I18n.t('profilePage.favoriteOrganizations')}/>            
                <SmallCard highlight={this.state.card1} title={I18n.t('profilePage.favoriteOrganizations')}/>
                <SmallCard highlight={this.state.card2} title={I18n.t('profilePage.statistic')}/>
                <SmallCard highlight={this.state.card3} title={I18n.t('profilePage.Achievements')}/>                
                </div>
        );
    }

    handleCardChange(id){

        if(id == 1){
            this.setState({
                card1:true,
                card2:false,
                card3:false
            })
        } else if(id == 2){
            this.setState({
                card1:true,
                card2:true,
                card3:true
            })
        }
    }
}
