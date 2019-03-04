import React from 'react';
import {getOffices} from '../../services/index';
import {dispatchOffices} from '../../actions/index';
import { connect } from 'react-redux';


class Loader extends React.Component {
    componentDidMount(){
        getOffices().then((response)=>{
            this.props.dispatchOffices(response)
        })
    }
        render(){
            return (
                <div className="loader"></div>
            )
        }
 }

const mapDispatchToProps = (dispatch) => ({
    dispatchOffices: (offices) => { dispatch(dispatchOffices(offices)) }
})

export default connect(null, mapDispatchToProps)(Loader)