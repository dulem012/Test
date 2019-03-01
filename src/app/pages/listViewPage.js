import React, {Component} from 'react'
import {getOffices} from '../services/index'
import {dispatchOffices} from '../actions/index'
import {connect} from 'react-redux'
import ListCard from './cards/listCard'
import Header from '../partials/header'
import Loader from './loader/loader'

// Same as it posted in gridViewPAge.js
class ListViewPage extends Component {
    componentDidMount() {
        if(this.props.listOfOffices.length === 0){
            getOffices().then((response)=>{
                this.props.dispatchOffices(response)
            })
        }
    }
    render() {
        return(
            <React.Fragment>
            <Header pathname={this.props.location.pathname}/>
            {this.props.listOfOffices.length === 0 ? <Loader /> : <div className='list-page-container'>
                {this.props.listOfOffices.map((el,i) => {
                    return <ListCard name={el.name} description={el.description} photo={el.photo}  key={el.id}/>
                })}
            </div>}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({ ...state })
const mapDispatchToProps = (dispatch) => ({
    dispatchOffices: (listOffices) => { dispatch(dispatchOffices(listOffices)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(ListViewPage)
