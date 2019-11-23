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
        }
    }

    render() {
        //now only one item but will be changed to a list
        return (
            <div className="profileMain">
                <ProfileCard user={this.state.user}/>
                <GasMeter highlight={this.state.scrolled1} title={I18n.t('profilePage.favoriteOrganizations')}/>            
                <SmallCard title={I18n.t('profilePage.favoriteOrganizations')}/>
                <SmallCard title={I18n.t('profilePage.statistic')}/>
                <SmallCard title={I18n.t('profilePage.Achievements')}/>                
                </div>
        );
    }

}
