import React from 'react';
import './Organization.css'
import OrgDetail from './OrgDetail';
import { Spring, Trail } from 'react-spring/renderprops'
import ListItemHandler from '../../components/list/ListItemHandler';

var data = require('../../example.json');

export default class Organization extends React.Component {
    state = {
        loading: true,
        item: []
    }


    handleClick = (image, data) => {
        this.props.orgHandler1(image, data);
    }
    handleSubscribe = (item) => {
        this.props.handleSubscribe(item)
    }
    handleUnsubscribe = (item) => {
        this.props.handleUnsubscribe(item)
    }
    componentWillMount() {
        for (let i in data.organizations) {
            this.setState(prevState => ({
                item: [data.organizations[i], ...prevState.item]
            }));
        }
    }

    render() {
        let item;
        //now only one item but will be changed to a list
        if (this.props.orgHandler) {
            if (!this.props.subscribed.some(subItems => subItems.id === this.props.data.id)) {
                item =
                    <OrgDetail
                        image={this.props.image}
                        handleSubscribe={this.handleSubscribe}
                        handleUnsubscribe={this.handleUnsubscribe}
                        subscribed={true}
                        data={this.props.data} />
            } else {
                item =
                    <OrgDetail
                        image={this.props.image}
                        handleSubscribe={this.handleSubscribe}
                        handleUnsubscribe={this.handleUnsubscribe}
                        subscribed={false}
                        data={this.props.data} />
            }
        }

        return (
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ duration: 2000 }}>
                {props =>
                    <div>
                        {item}
                        <div className="orgName">
                            <h1 style={props}>Paikat</h1>
                            <p style={props}></p>
                        </div>
                        <Trail items={this.state.item} keys={item => item.id} from={{ transform: 'translate3d(-400px, 200px,0)' }} to={{ transform: 'translate3d(0, 0, 0)' }}>
                            {(item, i) => props =>
                                <ListItemHandler item={item} style={props} index={i} click={this.handleClick} />}
                        </Trail>
                    </div>
                }

            </Spring>

        );
    }
}
/*
                             />

<Simplelist item={data} click={this.handleClick} />
                        <Simplelist item={data} click={this.handleClick} />
                        <ListView item={data} click={this.handleClick} />
                        <Simplelist item={data} click={this.handleClick} />
                        <Simplelist item={data} click={this.handleClick} />
                        <Simplelist item={data} click={this.handleClick} />
                    */