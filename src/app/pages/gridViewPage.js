import React, { Component } from 'react'
import GridCard from './cards/gridCard'
import { dispatchOffices } from '../actions/index'
import { getOffices } from '../services/index'
import { connect } from 'react-redux'
import Header from '../partials/header'
import Loader from './loader/loader'

// 1. GridViewPage and ListViewPage pretty much same. You can have conditional rendering based on single prop viewType: Grid | List
// 2. Loading should be part of APP.js
// 3. Use object destructuring for props and state properties: For example for
// this.props.listOfOffices which appears multiple times you can do something like this:
//  const {listOfOffices} = this.props;
// 4. Header should be part of App.js
class GridViewPage extends Component {
    componentDidMount() {
        if(this.props.listOfOffices.length === 0) {
            getOffices().then((response) => {
                this.props.dispatchOffices(response)
            })
        }
    }

    render() {
        return(
            <React.Fragment>
                <Header pathname={this.props.location.pathname}/>
            {this.props.listOfOffices.length === 0 ? <Loader /> : <div className='grid-page-container'>
                {this.props.listOfOffices.map((el,i) => {
                    return <GridCard name={el.name} description={el.description}  photo={el.photo} key={el.id} />
                })}
            </div>}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({ ...state })
const mapDispatchToProps = (dispatch) => ({
    dispatchOffices: (listOffices) => { dispatch(dispatchOffices(listOffices))}
})

export default connect(mapStateToProps,mapDispatchToProps)(GridViewPage)
