import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProperty } from '../actions/action_fetch';

class PropertyList extends Component {

    renderProperty(cityData) {
        return (
            <tr>
                <td> 
                    <img src={cityData[1].listing.picture_url} />
                </td>
                <td> 
                    <img src={cityData[2].listing.picture_url} />
                </td>
                <td> 
                    <img src={cityData[3].listing.picture_url} />
                </td>
            </tr>        
        );
    }

    render() {
        return (
            <table className="table">
                <tbody>
                    {this.props.property.map(this.renderProperty)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ property }) {
    return { property };
}

export default connect(mapStateToProps)(PropertyList);