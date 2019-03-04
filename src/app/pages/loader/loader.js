import React, {Fragment} from 'react';
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
            const { listOfOffices } = this.props
            return (
                <Fragment>
                    { listOfOffices.length === 0 ? <div className="loader"></div> : null }
                </Fragment>
            )
        }
 }

const mapStateToProps = (state) => ({ ...state })
const mapDispatchToProps = (dispatch) => ({
    dispatchOffices: (offices) => { dispatch(dispatchOffices(offices)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Loader)