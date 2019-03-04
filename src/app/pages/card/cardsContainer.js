import React, { Component } from 'react';
import Card from './card';

class CardsContainer extends Component {
    render() {
        const { view, listOfOffices } = this.props
        return(
            <div className={ view === 'list' ? 'list-page-container' : 'grid-page-container'}>
                {
                    listOfOffices.map((el, index) => (<Card photo={el.photo} name={el.name} description={el.description} key={el.id} view={view} />))
                }
            </div>
        )
    }
}

export default CardsContainer;

