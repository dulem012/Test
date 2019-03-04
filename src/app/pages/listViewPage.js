import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardContainer from './card/cardsContainer';

class ListViewPage extends Component {
    render() {
        const { listOfOffices } = this.props
        return(
            <CardContainer listOfOffices={listOfOffices} view={'list'} />
        )
    }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps)(ListViewPage);