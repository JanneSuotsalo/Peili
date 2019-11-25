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
        scroll: false,
        scroll1: false,
        zoom: false,
    }

    componentDidMount() {
       window.addEventListener('scroll', () => {

            if(window.scrollY >= 0 && window.scrollY < 200){
                this.handleCardChange(1);
            } else if (window.scrollY >= 200 && window.scrollY < 400) {
                this.handleCardChange(2);
            } else if (window.scrollY >= 400 && window.scrollY < 600) {
                this.handleCardChange(3);
            }
        })
    }

    render() {
        //now only one item but will be changed to a list
        return (
            <div className="profileMain">
                <ProfileCard highlight={this.state.scroll} user={this.state.user}/>
                <GasMeter highlight={this.state.zoom} min={this.state.scroll1} title={I18n.t('profilePage.favoriteOrganizations')}/>            
                <SmallCard title={I18n.t('profilePage.favoriteOrganizations')}/>
                <SmallCard title={I18n.t('profilePage.statistic')}/>

                </div>
        );
    }

    /*

                <SmallCard highlight={this.state.card2} title={I18n.t('profilePage.statistic')}/>
                <SmallCard highlight={this.state.card3} title={I18n.t('profilePage.Achievements')}/>                
               
    */
    handleCardChange(id){

        if(id == 1){
            this.setState({
                scroll:true,
                scroll1:false,
                zoom:false
            })
        } else if(id == 2){
            this.setState({
                scroll:false,
                scroll1:false,
                zoom:true
            })
        } else if(id == 3){
            this.setState({
                scroll:false,
                scroll1:true,
                zoom:false
            })
        }
    }
}
