import React from 'react';
import ListView from '../../components/list/ListView';
import './Organization.css'
import Simplelist from '../../components/list/SimpleList';
import OrgDetail from './OrgDetail';
import { Spring, Trail } from 'react-spring/renderprops'
import ListItemHandler from '../../components/list/ListItemHandler';

var data = require('../../example2.json');
var data1 = require('../../example.json');

export default class Organization extends React.Component {
    state = {
        loading: true,
        item: [data, data, data, data]
    }


    handleClick = (image) => {
        this.props.orgHandler1(image);
    }

    render() {
        let item;
        //now only one item but will be changed to a list
        if (this.props.orgHandler) {
            item = <OrgDetail image={this.props.image} item={data} />
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

                        <Trail items={this.state.item} from={{ transform: 'translate3d(-400px, 200px,0)' }} to={{ transform: 'translate3d(0, 0, 0)' }}>
                            {(item, i) => props => <ListItemHandler item={item} style={props} index={i} click={this.handleClick}/>}
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