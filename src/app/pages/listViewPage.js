import React, {Component} from 'react'
import {getOffices} from '../services/index'
import {dispatchOffices} from '../actions/index'
import {connect} from 'react-redux'

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
            <div>
                aaa
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ ...state })
const mapDispatchToProps = (dispatch) => ({
    dispatchOffices: (listOffices) => { dispatch(dispatchOffices(listOffices)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(ListViewPage)