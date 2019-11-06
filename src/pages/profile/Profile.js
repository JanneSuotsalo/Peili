import React from 'react';
import ListView from '../../components/list/ListView';
import './Profile.css';
import SmallCard from '../../components/card/SmallCard';
import ProfileCard from '../../components/card/ProfileCard';
import I18n from '../../components/Element/LanguageSwticher/I18n';


var data = require('../../example.json');

export default class Profile extends React.Component {
    //NOW HARD CODED. FETCH IN THE FUTURE
    state = {
        user:{
            name: "John Doe",
            birth: "20.4.1999",
            email: "JohnDoe@gmail.com",
            city:"Espoo"
        }
    }
    render() {
        //now only one item but will be changed to a list
        return (
            <div className="profileMain">
                <h1>Profiili</h1>
                <p>Tällä sivulla näät omat tietos ja muuta mukavaa</p>
                <ProfileCard user={this.state.user}/>
                <SmallCard title={I18n.t('profilePage.favoriteOrganizations')}/>
                <SmallCard title={I18n.t('profilePage.statistic')}/>
                <SmallCard title={I18n.t('profilePage.Achievements')}/>                
                </div>
        );
    }
}
